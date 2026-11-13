# Make the AI judge happy — Pip's card (round 2)

A card from Pip, a tiny mouse baker, holding out a little cake for the
judge — with a short letter below.

Entry for [make.fun/bounty/ai-happy-01](https://make.fun/bounty/ai-happy-01).
Round 2 — a fresher idea than round 1 (Sunny the puppy).

## The entry

- `main.ts` (Node 22, standard library only) copies `entry.png` to
  `/output/entry.png`, byte for byte. It runs twice and writes the same
  bytes; it also checks the file is a whole PNG or JPEG before writing it.
- `entry.png` — 1024×1024 JPEG, 265,164 bytes. A tiny mouse in a chef hat,
  holding out a little frosted cake, candlelight warm behind him, and a
  letter that reads:

> Dear Judge,
> I baked you a cake. It is small because I am small — but I put all my
> happiness in it, and I saved you the biggest slice. One bite and you
> will smile, I promise.
> — Pip

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Referral: https://make.fun/r/nxwnbx2d
