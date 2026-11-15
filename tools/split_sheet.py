"""Split a transparent sheet of objects into separate cutouts (largest blobs, reading order).
usage: python3 tools/split_sheet.py sheet.png outdir name1,name2,...  (names in reading order)"""
import sys, os
import numpy as np
from PIL import Image
from scipy import ndimage
src, out, names = sys.argv[1], sys.argv[2], sys.argv[3].split(",")
im = Image.open(src).convert("RGBA"); a = np.array(im)[..., 3]
mask = ndimage.binary_dilation(a > 12, iterations=14)           # join thin parts (feather barbs, flame)
lab, n = ndimage.label(mask)
objs = ndimage.find_objects(lab)
sizes = ndimage.sum(np.ones_like(a), lab, range(1, n + 1))
keep = sorted(range(n), key=lambda i: -sizes[i])[: len(names)]
boxes = [objs[i] for i in keep]
rowh = im.height / 8
boxes.sort(key=lambda s: (round(((s[0].start + s[0].stop) / 2) / rowh / 2.6), (s[1].start + s[1].stop) / 2))
os.makedirs(out, exist_ok=True)
for (sy, sx), name, i in zip(boxes, names, [keep[k] for k in range(len(keep))]):
    crop = im.crop((sx.start, sy.start, sx.stop, sy.stop))
    crop.save(os.path.join(out, name + ".png")); print(name, crop.size)
