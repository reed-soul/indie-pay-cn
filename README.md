# indie-pay-cn

Mainland China solo-founder **cross-border payment comparison pack** for [pay.taoliapp.com](https://pay.taoliapp.com).

- Information product only: comparison table + go-live checklist. **No** payouts, entity setup, or licensing.
- Free landing (verdict-first) + paid pack ($29 one-time via Waffo Pancake).
- Deploy: **Mac local** `wrangler` only — GitHub Actions Deploy disabled/forbidden.

See issues for MVP scope freeze.

## Paid pack assets (Lane E)

Canonical markdown (product disclaimers kept; draft/review banners stripped):

- [`content/paid-pack.md`](content/paid-pack.md) — paid comparison pack body
- [`content/sources.md`](content/sources.md) — official sources ledger
- [`content/acceptance-notes.md`](content/acceptance-notes.md) — product acceptance notes (context)

Readable copies for later static hosting live under [`public/pack/`](public/pack/).

Success / download **placeholder** — checkout is **not** wired; download is not enabled:

- `/pack/success/` → `public/pack/success/index.html`
- `/pack/download/` → `public/pack/download/index.html`

Local preview of these files only (no wrangler, no deploy):

```bash
python3 -m http.server 8788 --directory public
# http://127.0.0.1:8788/pack/success/
# http://127.0.0.1:8788/pack/download/
```

The free landing page is a separate Lane B PR. This change does not add a marketing `index.html`, `app/page.*`, or root layout.
