# indie-pay-cn

Mainland China solo-founder **cross-border payment comparison pack** for [pay.taoliapp.com](https://pay.taoliapp.com).

- Information product only: comparison table + go-live checklist. **No** payouts, entity setup, or licensing.
- Free landing (verdict-first) + paid pack ($29 one-time via Waffo Pancake).
- Deploy: **Mac local** `wrangler` only — GitHub Actions Deploy disabled/forbidden.

See issues for MVP scope freeze.

## Free landing

Source is `site/` (static HTML/CSS, no client JavaScript). `npm run build` copies it to `dist/` and also copies `public/pack/**` → `dist/pack/**`.

```bash
npm run build
npm run preview   # http://127.0.0.1:4173/  (serves dist/)
```

`npm run dev` serves `site/` directly for local edits.

## Paid pack assets

Canonical markdown (product disclaimers kept; draft/review banners stripped):

- [`content/paid-pack.md`](content/paid-pack.md) — paid comparison pack body
- [`content/sources.md`](content/sources.md) — official sources ledger
- [`content/acceptance-notes.md`](content/acceptance-notes.md) — product acceptance notes (context)

Readable copies for later static hosting live under [`public/pack/`](public/pack/).

Success / download **placeholder** — checkout is **not** wired; download is not enabled:

- `/pack/success/` → `public/pack/success/index.html` (also `dist/pack/success/` after build)
- `/pack/download/` → `public/pack/download/index.html` (also `dist/pack/download/` after build)

Local preview of pack placeholders only (no wrangler, no deploy):

```bash
python3 -m http.server 8788 --directory public
# http://127.0.0.1:8788/pack/success/
# http://127.0.0.1:8788/pack/download/
```

Or after `npm run build`, `npm run preview` serves the same paths under `dist/pack/`.

## Deploy (Mac local only)

Do **not** add a GitHub Actions Deploy workflow. After `npm run build`:

```bash
npx wrangler pages deploy dist --project-name indie-pay-cn --branch main
```

Preview on `*.pages.dev` is enough for this iteration. `pay.taoliapp.com` is the intended host after DNS/TLS is confirmed — this repo does not claim that domain is live.
