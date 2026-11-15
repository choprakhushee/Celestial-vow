"""Builds a contact sheet of every graded asset: python3 tools/contact_sheet.py out.jpg"""
import sys, os, glob
from PIL import Image, ImageDraw, ImageFont
A = os.path.join(os.path.dirname(__file__), "..", "kavya-weds-siddharth", "assets")
scenes = sorted(glob.glob(os.path.join(A, "scenes", "*.jpg")))
cuts = sorted(glob.glob(os.path.join(A, "cutouts", "*.webp")))
W = 1800; sw, sh = 216, 384; cols = W // (sw + 9)
rows_s = -(-len(scenes) // cols); cw = 140; ccols = W // (cw + 10); rows_c = -(-len(cuts) // ccols)
H = 60 + rows_s * (sh + 34) + 40 + rows_c * (cw + 34) + 20
sheet = Image.new("RGB", (W, H), (16, 15, 20)); d = ImageDraw.Draw(sheet)
try: f = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 13); fb = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 20)
except Exception: f = fb = ImageFont.load_default()
d.text((12, 18), "The Celestial Vow · asset contact sheet (graded)", fill=(242, 220, 154), font=fb)
y = 60
for i, p in enumerate(scenes):
    x = 9 + (i % cols) * (sw + 9); yy = y + (i // cols) * (sh + 34)
    im = Image.open(p).convert("RGB").resize((sw, sh)); sheet.paste(im, (x, yy)); d.text((x, yy + sh + 6), os.path.basename(p)[:-4], fill=(220, 210, 190), font=f)
y += rows_s * (sh + 34) + 40
for i, p in enumerate(cuts):
    x = 10 + (i % ccols) * (cw + 10); yy = y + (i // ccols) * (cw + 34)
    bg = Image.new("RGBA", (cw, cw), (44, 42, 50, 255)); im = Image.open(p).convert("RGBA"); im.thumbnail((cw - 10, cw - 10))
    bg.alpha_composite(im, ((cw - im.width) // 2, (cw - im.height) // 2)); sheet.paste(bg.convert("RGB"), (x, yy)); d.text((x, yy + cw + 6), os.path.basename(p)[:-5][:20], fill=(220, 210, 190), font=f)
sheet.save(sys.argv[1], quality=88); print("saved", sys.argv[1], sheet.size)
