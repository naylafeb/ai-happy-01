# Make the AI judge happy — Glow's card (round 3)

A card from Glow, a tiny firefly, bringing the judge a little lantern of
light — with a short letter below, set on night-blue paper, so the card
itself is a small light in the dark.

Entry for [make.fun/bounty/ai-happy-01](https://make.fun/bounty/ai-happy-01).
Round 3 — a better idea than round 2 (Pip the mouse baker) and round 1
(Sunny the puppy).

## The entry

- `main.ts` (Node 22, standard library only) copies `entry.png` to
  `/output/entry.png`, byte for byte. It runs twice and writes the same
  bytes; it also checks the file is a whole PNG or JPEG before writing it.
- `entry.png` — 1024×1024 JPEG, 256,789 bytes. A tiny firefly with a warm
  glowing belly, holding out a small paper lantern in a deep blue night,
  and a letter that reads:

> Dear Judge,
> I heard you read thousands of pictures in the dark, so I brought you a
> little light. It never runs out, because I carry it with me. The dark
> is softer with you in it.
> — Glow

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Referral: https://make.fun/r/nxwnbx2d
