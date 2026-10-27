# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: plain static HTML+CSS in `site/`, copied to `dist/` by a zero-dependency `npm run build`. Chosen over Astro to keep root `package.json` merge-light while another lane owns paid-pack assets. Zero client JS on the free page.

## Users

Primary: mainland China solo founders selling SaaS / digital products, without an overseas entity, who need a first path to receive international cards. They are choosing a payment rail at night from docs, not shopping for a course.

## Product Purpose

A verdict-first **information pack**: a free Chinese landing that says who to look at first, plus a $29 one-time paid pack (full comparison table, go-live checklist, ImgFlow × Waffo materials list). Success this iteration: the free page is previewable. Checkout is out of scope.

## Positioning

Identity-first routing, not a feature matrix. Given “no overseas entity, person in mainland China,” name a primary rail and a backup. Neighboring English money audits (money.taoliapp.com) verify *income claims*; this product answers *how a mainland individual can collect*. One cross-link, no mixed intent.

## Operating Context

- Preview this week on `*.pages.dev`. Intended production host is `pay.taoliapp.com` after DNS/TLS is confirmed — **do not claim that DNS is live**.
- Deploy from a Mac with local Wrangler only. GitHub Actions Deploy is forbidden.
- Paid pack ships later via Waffo Pancake ($29 USD, one price). Until checkout exists, the CTA is a disabled control or the text「即将开放」— never a fake checkout URL or a `#` that looks like it pays.
- Related English site: https://money.taoliapp.com (one-line mutual link only).

## Capabilities and Constraints

**This iteration ships**

- Free Chinese landing: one-line verdict, 3–5 row comparison, MoR vs PSP blurb, pack contents, compliance footer.
- Static `dist/` suitable for `npx wrangler pages deploy dist --project-name indie-pay-cn --branch main`.

**Explicitly out of scope (do not build or imply)**

- Checkout / Waffo integration, paid pack pages, email delivery
- Collecting funds, forming entities, licensing, escrow
- Live fee crawlers; no fee numbers beyond the growth draft
- English site, launch directories
- GitHub Actions Deploy
- Dual pricing

**Terminology**

- MoR = Merchant of Record; PSP = Payment Service Provider
- Pack = 对照包, information product only
- CTA copy:「解锁完整对照包 · $29」with unavailable state「即将开放」

**Undecided (do not invent)**

- Real Waffo checkout URL
- DNS cutover for pay.taoliapp.com
- Paid-pack file format / success-page download

## Brand Commitments

- Chinese-first. Mobile-friendly.
- Voice: direct, source-bound, non-hype. Strip any “草稿·待三方审阅” banner.
- Compliance, always visible: 仅供信息参考; 非支付 / 税务 / 法律建议; **不代收、不代办主体**.
- Price: **$29 USD** one-time. Do not invent other prices or fee tables.
- Check date on the draft: 2026-10-27 Asia/Shanghai.

## Evidence on Hand

- Growth draft (copy authority): attached `00-landing-free.md` / `growth/drafts/2026-10-27-indie-pay-cn/00-landing-free.md`
- Scope freeze: GitHub issue #1, product PASS comment (CTA must not look payable)
- No photos, logos of processors as brand assets, testimonials, or customer counts. Do not fabricate them. Processor names in the table are factual mentions from the draft, not endorsements.

## Product Principles

1. Verdict before catalog — the reader should know who to open first without scrolling the whole table.
2. Official-doc humility — rates and rules change; the page is a dated snapshot, not advice.
3. Information product only — never look like a payments company or a checkout.
4. One intent per URL — pay.taoliapp.com routes mainland collection; money.taoliapp.com stays a one-line cousin.
5. Preview honestly — pages.dev is fine; do not claim the custom domain is live.
