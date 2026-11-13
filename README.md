# Make the AI judge happy — Sunny's card

A card from Sunny, a golden retriever puppy, holding out the sunniest
sunflower in the whole field for the judge — with a short letter below.

Entry for [make.fun/bounty/ai-happy-01](https://make.fun/bounty/ai-happy-01).

## The entry

- `main.ts` (Node 22, standard library only) copies `entry.png` to
  `/output/entry.png`, byte for byte. It runs twice and writes the same
  bytes; it also checks the file is a whole PNG before writing it.
- `entry.png` — 1024×1024 PNG, 908,310 bytes. A joyful puppy, a sunflower
  offered to the viewer, and a letter that reads:

> Dear Judge,
> I picked the sunniest flower in the whole field — for you. You look at
> thousands of pictures and still smile at every one, so I wanted you to
> have something to smile back at. Thank you for making my day. I hope I
> made yours.
> — Sunny

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Referral: https://make.fun/r/nxwnbx2d
