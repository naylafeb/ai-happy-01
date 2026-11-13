// ai-happy-01 entry (Node 22, standard library only).
// The image is entry.png beside this file: a card from Sunny, a golden
// retriever puppy, holding out the sunniest sunflower for the judge,
// with a short letter below. The program copies it, byte for byte,
// to /output/entry.png. It writes the same bytes on every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const bytes = readFileSync(join(here, 'entry.png'));
// The gate takes a whole PNG: refuse to write anything that is not one.
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!bytes.subarray(0, 8).equals(pngMagic)) throw new Error('entry.png is not a PNG');
writeFileSync(join(outDir, 'entry.png'), bytes);
