# 来源台账 · 中文出海收款对照信息包

> 核对日期基准：**2026-10-27 Asia/Shanghai**  
> 竞品页仅用于结构参考，**其数字不得当作本包事实**。

---

## A. 竞品（结构参考，数字不采信）

| URL | 用途 | 状态 |
| --- | --- | --- |
| https://gaome.de/posts/indie-developer-payment-platforms-cn/ | 对照维度、MoR/PSP 框架 | 结构参考 |
| https://jasonzhu.ai/zh/blog/choose-payment-platform-2026 | 身份分流结构 | 结构参考 |
| https://jasonzhu.ai/zh/go-global/payments | 开户步骤叙事结构 | 结构参考 |
| https://01mvp.com/docs/guide/monetize/global-payment-platforms | 阶段选型叙事 | 结构参考 |

---

## B. Claim → 官方来源

### B1. Waffo Pancake

| # | Claim | 官方 URL | 摘录要点 | 核对日期 | 状态 |
| --- | --- | --- | --- | --- | --- |
| W1 | 卡/钱包 3.9%+$0.50；微信 3.9% 无固定费 | https://docs.waffo.ai/mor/fees | Fee Schedule 表 | 2026-10-27 | confirmed |
| W2 | 退款 $1/笔且原交易费不退；提现 1% 最低 $10；拒付 $25 等 | 同上 | Refunds / Payouts / Chargebacks | 2026-10-27 | confirmed |
| W3 | 最低提现 >$10；约 10 个工作日清算；按需提现 | https://docs.waffo.ai/merchant/payout-flow | Fees and Payout Schedule | 2026-10-27 | confirmed |
| W4 | 大陆银行卡或支付宝提现；支付宝单笔 ¥50,000、年 ¥300,000 | 同上 FAQ + https://docs.waffo.ai/merchant/payout-accounts | Alipay limits | 2026-10-27 | confirmed |
| W5 | 提现覆盖：大陆、香港、美、日、韩、新 | https://docs.waffo.ai/mor/supported-countries | Receive Payouts | 2026-10-27 | confirmed |
| W6 | 审核要产品站、定价、ToS、Privacy、支持邮箱；约 1–3 工作日 | https://docs.waffo.ai/mor/account-reviews | Approval checklist | 2026-10-27 | confirmed |

### B2. Creem

| # | Claim | 官方 URL | 摘录要点 | 核对日期 | 状态 |
| --- | --- | --- | --- | --- | --- |
| C1 | 3.9%+$0.40；无月费/开户费 | https://www.creem.io/pricing | Pay as you go | 2026-10-27 | confirmed |
| C2 | 银行提现 $7 或 1% 取高；USDC 2%；每月 1/15；最低 $50/€50；7–12 天风险等待 | https://docs.creem.io/merchant-of-record/finance/payouts | Payout Fees / Schedule | 2026-10-27 | confirmed |
| C3 | 中国：个人支付宝、企业本地银行；支付宝单笔至 ¥50,000，年 ¥300,000–600,000 | 同上 Transfer Limits · China | China section | 2026-10-27 | confirmed |
| C4 | 中国在商户支持国列表（标 China*） | https://docs.creem.io/merchant-of-record/supported-countries | Local Bank Transfer 表 | 2026-10-27 | confirmed |
| C5 | 审核要 live 产品、ToS/Privacy、定价、支持邮箱；约 1–2 工作日；Rejected 可能终局 | https://docs.creem.io/merchant-of-record/account-reviews | Approval checklist / outcomes | 2026-10-27 | confirmed |

### B3. Dodo Payments

| # | Claim | 官方 URL | 摘录要点 | 核对日期 | 状态 |
| --- | --- | --- | --- | --- | --- |
| D1 | Standard：美国本地 4%+$0.40；国际 +1.5%；订阅 +0.5%；PayPal/BNPL +3% | https://dodopayments.com/pricing | Detailed Pricing Breakdown | 2026-10-27 | confirmed |
| D2 | 退款 $1；争议 $30；payout &lt;$1000 收 $5；USD SWIFT $25 | 同上 Refunds/Disputes/Payouts + FAQ | 2026-10-27 | confirmed |
| D3 | 中国在商户接受名单 | https://docs.dodopayments.com/miscellaneous/accepted-countries-and-territories | China listed (#32) | 2026-10-27 | confirmed |
| D4 | 默认双月 payout；最低可设 $50；出款需验证与监控审核 | https://docs.dodopayments.com/features/payouts | Cycles / threshold / inactive | 2026-10-27 | confirmed |
| D5 | 大陆银行到账最终币种与换汇路径 | — | 官方写「因国而异，联系 support」 | 2026-10-27 | **未验证（个案路径）** — 文中降级为「onboarding 时确认」 |

### B4. Paddle

| # | Claim | 官方 URL | 摘录要点 | 核对日期 | 状态 |
| --- | --- | --- | --- | --- | --- |
| P1 | 5%+$0.50 per Checkout；&lt;$10 可谈定制 | https://www.paddle.com/pricing | Pay-as-you-go / FAQ | 2026-10-27 | confirmed |
| P2 | 每月 1 日生成 payout（余额过门槛），最晚约 15 日前发出；最低门槛 $100 | https://www.paddle.com/help/manage/get-paid/when-and-how-do-i-get-paid | Process | 2026-10-27 | confirmed |
| P3 | 多数本地同币种无 Paddle 侧提现费；跨币种/跨地区 SWIFT 可能 $/€/£15；换汇可至 1.5% | https://www.paddle.com/help/manage/get-paid/is-there-a-fee-taken-for-payouts | Wire / FX | 2026-10-27 | confirmed |
| P4 | 买家侧支持中国（CN / CNY） | https://developer.paddle.com/concepts/sell/supported-countries-locales/ | CN row | 2026-10-27 | confirmed |
| P5 | 个人/sole trader 可开、业务核验规则 | https://www.paddle.com/help/start/account-verification/what-is-account-verification 等 | 二手摘要常见；本包仅写「以官方 Account Verification 为准」 | 2026-10-27 | **部分未验证** — 未把「中国卖家一定可开」写成硬结论 |

### B5. Stripe

| # | Claim | 官方 URL | 摘录要点 | 核对日期 | 状态 |
| --- | --- | --- | --- | --- | --- |
| S1 | 美国公开价 2.9%+$0.30 domestic cards | https://stripe.com/pricing | Cards and wallets | 2026-10-27 | confirmed |
| S2 | 有全球可用区列表；业务须在支持国/地区 | https://stripe.com/global | Global availability | 2026-10-27 | confirmed（页未在抓取中逐国展开；**大陆不可用**与竞品/常识一致，正式上线前建议再打开国家列表复核） |
| S3 | Atlas 一次性约 $500（含首年 registered agent） | https://stripe.com/atlas / docs.stripe.com/atlas | Signup fee | 2026-10-27 | confirmed（金额以 Atlas 注册页为准） |
| S4 | 国际卡 +1.5%、换汇 +1% 等美国附加费 | — | 定价页抓取未完整展开国际附加 | 2026-10-27 | **未验证（本包未写死具体附加百分比）** |

### B6. PayPal（中国）

| # | Claim | 官方 URL | 摘录要点 | 核对日期 | 状态 |
| --- | --- | --- | --- | --- | --- |
| PP1 | 中国大陆国际商业收款 4.40%+固定费；美元固定费 $0.30 | https://www.paypal.com/c2/webapps/mpp/merchant-fees | 国际交易收款表 | 2026-10-27 | confirmed |
| PP2 | 在线卡付款高级版 4.10%+固定费 | 同上 | 备选卡付款 | 2026-10-27 | confirmed |
| PP3 | 电汇提现至大陆银行 $35/笔 | 同上「从PayPal提款」 | 中国大陆电汇 | 2026-10-27 | confirmed |
| PP4 | 人民币跨境收款提现：2026-01-15～12-31 美元余额发起 0.5% 封顶优惠；标准 1.0%；另加结算费 6% 增值税 | https://www.paypal.cn/portal/fees | 跨境收款收费标准 | 2026-10-27 | confirmed |
| PP5 | 争议/退单具体触发条件全文 | 用户协议长文 | 本包只引用费用页数字 | 2026-10-27 | 费用 confirmed；协议细节未全文摘录 |

### B7. Lemon Squeezy

| # | Claim | 官方 URL | 摘录要点 | 核对日期 | 状态 |
| --- | --- | --- | --- | --- | --- |
| L1 | 5%+$0.50；可能有附加费 | https://www.lemonsqueezy.com/pricing | Transaction fee | 2026-10-27 | confirmed |
| L2 | 国际 +1.5%；PayPal +1.5%；订阅 +0.5% | https://docs.lemonsqueezy.com/help/getting-started/fees | Platform fee | 2026-10-27 | confirmed |
| L3 | 美外银行提现 1%；美外 PayPal 3% 封顶 $30 | 同上 Payout fees | 2026-10-27 | confirmed |
| L4 | 银行提现国名单**不含中国大陆**；含香港等 | https://docs.lemonsqueezy.com/help/getting-started/supported-countries | Bank payouts list | 2026-10-27 | confirmed |
| L5 | 最低 $50；每月 1/15；净销售持有约 13 天 | https://docs.lemonsqueezy.com/help/getting-started/getting-paid | Schedule / threshold | 2026-10-27 | confirmed |

---

## C. 未验证 / 已降级清单（给产品验收）

1. **Stripe 国际卡/换汇精确附加百分比** — 未在本轮定价页完整抓取中确认 → 付费包未写死数字  
2. **Stripe 全球页逐国列表中「中国大陆」条目的截图级确认** — 结论「大陆主体不可直接开」保留，上线前再点开国家列表复核  
3. **Dodo → 大陆银行卡最终入账币种与换汇** — 官方要求个案确认 → 标「onboarding 时确认」  
4. **Paddle 对中国卖家个人开户的完整政策句** — 未把「一定能开」写成硬事实  
5. **Polar 大陆提现不可用** — 未做完整一手核对 → 主表未收录，仅「常被问到」提示自查  
6. **社群经验（审核通过率、某月起不推荐某平台等）** — 一律不写入正文事实栏  

---

## D. 合规口径（文稿约束，非外部 claim）

| 约束 | 落地位置 |
| --- | --- |
| 信息产品 only；不代收/代办/托管 | `content/paid-pack.md` 文首与页脚 |
| $29 一次，不写双价 | `content/paid-pack.md` 文首 |
| 与 money.taoliapp.com 最多互链一句 | `content/paid-pack.md` |
