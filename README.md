# indie-pay-cn

Mainland China solo-founder **cross-border payment comparison pack** for [pay.taoliapp.com](https://pay.taoliapp.com).

- Information product only: comparison table + go-live checklist. **No** payouts, entity setup, or licensing.
- Free landing (verdict-first) + paid pack ($29 one-time via Waffo Pancake).
- Deploy: **Mac local** `wrangler` only — GitHub Actions Deploy disabled/forbidden.

See issues for MVP scope freeze.

## Free landing

Source is `site/` (static HTML/CSS, no client JavaScript). Paid-pack files live elsewhere; this tree does not add `content/paid/`.

```bash
npm run build
npm run preview   # http://127.0.0.1:4173/  (serves dist/)
```

`npm run dev` serves `site/` directly for local edits.

## Deploy (Mac local only)

Do **not** add a GitHub Actions Deploy workflow. After `npm run build`:

```bash
npx wrangler pages deploy dist --project-name indie-pay-cn --branch main
```

Preview on `*.pages.dev` is enough for this iteration. `pay.taoliapp.com` is the intended host after DNS/TLS is confirmed — this repo does not claim that domain is live.
