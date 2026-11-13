// ai-happy-01 entry, round 2 (Node 22, standard library only).
// The image is entry.png beside this file: a card from Pip, a tiny mouse
// baker, holding out a little cake for the judge, with a short letter
// below. The program copies it, byte for byte, to /output/entry.png.
// It writes the same bytes on every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
// The gate takes a whole PNG or JPEG: refuse to write anything else.
const src = join(here, 'entry.png');
const head = readFileSync(src).subarray(0, 4);
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47]);
const jpgMagic = Buffer.from([0xff, 0xd8, 0xff]);
if (!head.subarray(0, 4).equals(pngMagic) && !head.subarray(0, 3).equals(jpgMagic)) {
  throw new Error('entry.png is neither a PNG nor a JPEG');
}
copyFileSync(src, join(outDir, 'entry.png'));
