"""One cinematic grade for every asset, then web-optimised exports.
Usage: python3 tools/grade.py scene <raw.jpg> <name>      -> assets/scenes/<name>.webp/.jpg (1080x1920)
       python3 tools/grade.py cut   <raw.png> <name> [max] -> assets/cutouts/<name>.webp (trimmed, alpha)
Grade: warm highlights, slightly teal shadows, gently lifted blacks, controlled saturation. No baked grain.
"""
import sys, os, io
import numpy as np
from PIL import Image, ImageFilter

ROOT = os.path.join(os.path.dirname(__file__), "..", "kavya-weds-siddharth", "assets")

def grade(rgb):
    a = np.asarray(rgb).astype(np.float32) / 255.0
    L = (a @ np.array([0.2126, 0.7152, 0.0722], np.float32))[..., None]
    a = np.clip((a - 0.5) * 1.04 + 0.5, 0, 1)               # a touch of contrast
    ws, wh = (1 - L) ** 2, L ** 2
    a += ws * np.array([-0.022, 0.006, 0.020], np.float32)    # teal-leaning shadows
    a += wh * np.array([0.030, 0.012, -0.022], np.float32)    # warm highlights
    L2 = (a @ np.array([0.2126, 0.7152, 0.0722], np.float32))[..., None]
    a = L2 + (a - L2) * 0.9                                    # controlled saturation
    a = 0.03 + a * 0.97                                        # gently lifted blacks
    return Image.fromarray((np.clip(a, 0, 1) * 255 + 0.5).astype(np.uint8))

def save_under(img, path, fmt, limit, q=82, **kw):
    while True:
        buf = io.BytesIO(); img.save(buf, fmt, quality=q, **kw)
        if buf.tell() <= limit or q <= 50: break
        q -= 4
    open(path, "wb").write(buf.getvalue()); return buf.tell(), q

def scene(src, name, blur=None):
    im = Image.open(src).convert("RGB")
    W, H = 1080, 1920
    s = max(W / im.width, H / im.height); im = im.resize((round(im.width * s), round(im.height * s)), Image.LANCZOS)
    l, t = (im.width - W) // 2, (im.height - H) // 2; im = im.crop((l, t, l + W, t + H))
    if blur:  # remove pseudo-text (e.g. letters on a compass)
        from PIL import ImageDraw
        blurred = im.filter(ImageFilter.GaussianBlur(12))
        for box in blur:  # feathered ellipse so no hard edges remain
            m = Image.new("L", im.size, 0); ImageDraw.Draw(m).ellipse(box, fill=255)
            f = max(3, min(28, (box[2]-box[0]) // 6)); im = Image.composite(blurred, im, m.filter(ImageFilter.GaussianBlur(f)))
    im = grade(im)
    d = os.path.join(ROOT, "scenes"); os.makedirs(d, exist_ok=True)
    a = save_under(im, os.path.join(d, name + ".webp"), "WEBP", 340_000, method=6)
    b = save_under(im, os.path.join(d, name + ".jpg"), "JPEG", 340_000, optimize=True, progressive=True)
    print(name, "webp", a, "jpg", b)

def cut(src, name, maxdim=640, limit=150_000):
    im = Image.open(src).convert("RGBA")
    rgb = grade(im.convert("RGB")); alpha = im.getchannel("A")
    im = Image.merge("RGBA", (*rgb.split(), alpha))
    bbox = alpha.point(lambda v: 255 if v > 8 else 0).getbbox(); im = im.crop(bbox)
    s = min(1, maxdim / max(im.size)); im = im.resize((max(1, round(im.width * s)), max(1, round(im.height * s))), Image.LANCZOS)
    d = os.path.join(ROOT, "cutouts"); os.makedirs(d, exist_ok=True)
    print(name, im.size, save_under(im, os.path.join(d, name + ".webp"), "WEBP", limit, q=86, method=6))

if __name__ == "__main__":
    kind, src, name = sys.argv[1:4]
    if kind == "scene":
        blur = [tuple(map(int, b.split(","))) for b in sys.argv[4:]] or None
        scene(src, name, blur)
    else:
        cut(src, name, int(sys.argv[4]) if len(sys.argv) > 4 else 640)
