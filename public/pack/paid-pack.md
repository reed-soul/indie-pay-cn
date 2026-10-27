# 中文出海收款对照信息包（付费正文）

> **仅供信息参考，非支付 / 税务 / 法律建议；不代收、不代办主体。**  
> 信息产品 only：对照表 + checklist。禁止解读为代收、代办开户、资金托管或牌照业务。  
> 标价：$29 一次。  
> 核对日期：2026-10-27 Asia/Shanghai（文内费率均需在接入前再点开官方链接复核）

英文验真 / 支付合规另见 [money.taoliapp.com](https://money.taoliapp.com)（意图不同，仅互链一句）。

---

## 0. 怎么用这份包

1. 先按 **身份分流** 选主通道（§1）  
2. 用 **完整对照表**（§2）核对费率与提现  
3. 上线前跑一遍 **checklist**（§3）  
4. 若接 Waffo Pancake（含 ImgFlow 场景），看 **附录**（§4）材料类型  
5. 所有数字以 **§5 / sources.md** 里的官方链接为准；标「未验证」的不要当事实用

---

## 1. 按身份分流（结论）

### 1.1 大陆个人 · 无海外主体 · 卖数字产品 / SaaS

| 优先级 | 平台 | 模式 | 一句话 |
| --- | --- | --- | --- |
| 主通道候选 A | **Waffo Pancake** | MoR | 官方写明向大陆商户提供银行卡 / 支付宝提现；按需提现；费率 3.9%+$0.50 |
| 主通道候选 B | **Creem** | MoR | 中国在支持国；个人收款人走支付宝；费率 3.9%+$0.40；每月 1 / 15 日出款 |
| 备选 | **Dodo Payments** | MoR | 中国在商户接受名单；基础 4%+$0.40，国际 +1.5%、订阅 +0.5% 会抬高真实成本 |
| 备选 / 成熟兜底 | **Paddle** | MoR | 5%+$0.50 全包；按月结算、最低约 $100；个人可做身份核验 |
| 辅助 | **PayPal** | PSP | 大陆可收国际商业付款；非 MoR；提现另计 |
| 暂缓 | **Lemon Squeezy** | MoR | 大陆不在银行提现国名单；出款常依赖 PayPal |
| 排除（当前） | **Stripe** | PSP | 大陆主体不在可用商户区；需受支持地区主体 |

**实操建议（信息层面，非代办）：**  
先选一个 MoR 跑通真实小额付款 → 退款 → 提现；再开第二个作备份。不要一上来同时维护三套订阅状态。

### 1.2 已有香港 / 美国等受支持主体

- 可评估 **Stripe**（基础费率更低，但全球销售税自理或另购 Stripe Tax / Managed Payments）  
- MoR（Paddle / Creem / Dodo / Waffo）仍可作备份或覆盖特定市场  

### 1.3 仅卖一次性数字商品、要极简店铺

- MoR 均可；Lemon Squeezy / 部分店铺型产品体验更「开箱即用」，但大陆提现路径仍按上表约束  

### 1.4 需要订阅 + 税务代扣（间接税）

- 优先 MoR；比较时用「国际订阅真实费率」而非首页基础费率（尤其 Dodo、Lemon Squeezy）

---

## 2. 完整对照表

> 表中「基础费率」= 官方定价页最醒目数字。真实订单常叠加国际卡、订阅、换汇、退款、拒付、提现费。  
> 所有链接核对日期：**2026-10-27 Asia/Shanghai**。

### 2.1 总表

| 平台 | 模式 | 公开基础费率 | 常见附加（官方） | 大陆商户 / 提现 | 最低提现与节奏 | 适合阶段 | 风险备注 | 一手来源 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Waffo Pancake** | MoR | 卡/钱包 **3.9% + $0.50**；微信支付 **3.9%**（无固定费） | 退款 $1/笔且原交易费不退；拒付 $25 等；提现 **1%（最低 $10）** | ✅ 官方：大陆银行卡或支付宝提现；支付宝单笔上限约 ¥50,000、每人每年约 ¥300,000 | 最低 **>$10**；销售约 **10 个工作日** 清算后按需提现 | 大陆个人起步主通道候选 | 平台相对新；小额频繁提现被最低 $10 吃掉；品类需过审 | [Fees](https://docs.waffo.ai/mor/fees) · [Payouts](https://docs.waffo.ai/merchant/payout-flow) · [Supported countries](https://docs.waffo.ai/mor/supported-countries) |
| **Creem** | MoR | **3.9% + $0.40**（定价页写明无国际卡附加） | 分账/联盟等可选功能另加；银行提现 **$7 或 1% 取高**；USDC 提现 2% | ✅ 中国在支持国；**个人→支付宝**，**企业→本地银行**；支付宝单笔至 ¥50,000，年约 ¥300,000–600,000 | 最低 **$50 / €50**；每月 **1 日与 15 日**；资金可能 **7–12 天** 风险等待 | 大陆个人起步主通道候选 | 被拒可能终局（官方账号审核文档）；AI 生图等受限品类要额外材料 | [Pricing](https://www.creem.io/pricing) · [Payouts](https://docs.creem.io/merchant-of-record/finance/payouts) · [Supported countries](https://docs.creem.io/merchant-of-record/supported-countries) · [Account reviews](https://docs.creem.io/merchant-of-record/account-reviews) |
| **Dodo Payments** | MoR | 美国本地卡/钱包 **4% + $0.40** | **国际 +1.5%**；**订阅/addon/usage +0.5%**；PayPal/BNPL +3%；退款 $1；争议 $30；payout &lt;$1000 收 **$5**；非美企业 USD SWIFT **$25** | ✅ 中国在商户接受名单（名单含 China） | 默认双月；最低可设 **$50**（默认展示常为 $100）；需完成银行与监控审核后出款才激活 | 大陆可申请；适合要银行卡结算、计费模型多 | 「4%+$0.40」不是国际订阅最终价；到账币种/换汇要在 onboarding 确认 | [Pricing](https://dodopayments.com/pricing) · [Accepted countries](https://docs.dodopayments.com/miscellaneous/accepted-countries-and-territories) · [Payouts](https://docs.dodopayments.com/features/payouts) |
| **Paddle** | MoR | **5% + $0.50** / Checkout 交易 | &lt;$10 产品需谈定制价；跨币种/跨地区 SWIFT 可能 **$15**；换汇可至 **1.5%** | 买家侧含中国；卖家侧：个人/sole trader 可做身份核验（以官方 Account Verification 为准）；出款电汇或 Payoneer | 最低约 **$100 / €100 / £100**；每月 1 日生成、最晚约 15 日前发出 | 要成熟度、B2B 账单、长期主/备通道 | 现金流占用大；基础费率偏高 | [Pricing](https://www.paddle.com/pricing) · [When/how paid](https://www.paddle.com/help/manage/get-paid/when-and-how-do-i-get-paid) · [Payout fees](https://www.paddle.com/help/manage/get-paid/is-there-a-fee-taken-for-payouts) |
| **Stripe** | PSP | 美国公开价：**2.9% + $0.30**（本地卡） | 国际卡、换汇、争议、Tax 等另计（以账户地区定价页为准） | ❌ **中国大陆不在 Stripe 商户可用区**；香港等受支持地区可开。Atlas 注册美国公司为官方路径之一（一次性约 **$500**，含首年 registered agent） | 按账户地区配置 | 已有受支持主体 + 税务能力后的长期主力 | 不是 MoR；买壳/代持账户风险自担（本文不提供任何规避路径） | [Pricing](https://stripe.com/pricing) · [Global](https://stripe.com/global) · [Atlas](https://stripe.com/atlas) |
| **PayPal** | PSP | 中国大陆账户 **国际商业收款 4.40% + 固定费**（美元固定费 **$0.30**）；在线卡付款高级版 **4.10% + 固定费** | 退单、争议费；**电汇提现至大陆银行 $35/笔**（费用页）；**人民币跨境收款提现**：2026-01-15～12-31 美元余额发起可享 **0.5% 封顶**优惠（标准 **1.0%**）+ 结算费 6% 增值税 | ✅ 按 PayPal 中国跨境协议可收；非 MoR | 人民币提现规则见 paypal.cn；电汇另计 | 买家偏好 PayPal 时的辅通道 | 余额冻结/限制风险；销售税自理；勿当唯一主通道 | [Merchant fees CN](https://www.paypal.com/c2/webapps/mpp/merchant-fees) · [paypal.cn fees](https://www.paypal.cn/portal/fees) |
| **Lemon Squeezy** | MoR | **5% + $0.50** | **国际 +1.5%**；**PayPal +1.5%**；**订阅 +0.5%**；美外银行提现 1%；美外 PayPal 提现 3%（封顶 $30） | ⚠️ **大陆不在银行提现国名单**；PayPal 提现覆盖更多国家，实际资格以 onboarding 为准 | 最低 **$50**；每月 1 / 15 创建 payout；净销售约 **持有 13 天** | 功能完整，但大陆提现不直接 | Stripe 收购后产品节奏变化属公开讨论；新项目需自行评估迁移风险 | [Pricing](https://www.lemonsqueezy.com/pricing) · [Fees](https://docs.lemonsqueezy.com/help/getting-started/fees) · [Supported countries](https://docs.lemonsqueezy.com/help/getting-started/supported-countries) · [Getting paid](https://docs.lemonsqueezy.com/help/getting-started/getting-paid) |

### 2.2 $29 一次性订单：仅基础费率粗算（不含税、国际附加、提现）

| 平台 | 口径 | 约扣费 | 约到手 |
| --- | --- | --- | --- |
| Creem | 3.9%+$0.40 | $1.53 | $27.47 |
| Waffo Pancake | 3.9%+$0.50 | $1.63 | $27.37 |
| Dodo（美国本地一次性） | 4%+$0.40 | $1.56 | $27.44 |
| Dodo（国际订阅口径示例） | 4%+1.5%+0.5%+$0.40 | $2.14 | $26.86 |
| Paddle | 5%+$0.50 | $1.95 | $27.05 |
| Lemon Squeezy（美国一次性） | 5%+$0.50 | $1.95 | $27.05 |
| PayPal（国际商业 +$0.30） | 4.40%+$0.30 | $1.58 | $27.42 |
| Stripe（美国本地卡示意） | 2.9%+$0.30 | $1.14 | $27.86 |

> 上表用于理解「固定费对 $29 客单」的影响，**不是报价承诺**。提现费、换汇、退款会再吃一层。

### 2.3 未纳入主表但常被问到

| 平台 | 结论 | 状态 |
| --- | --- | --- |
| Polar | 多家二手文称经 Stripe Connect Express 出款且大陆不在名单 | **未在本包完整一手核对** → 大陆个人默认排除，接入前自查 Polar 官方 Supported countries |
| Gumroad / PayPro Global / 稳定币网关 | 费率或签约路径不同，非本包主范围 | 需要时另开调研 |

---

## 3. 「上线收款」checklist

在提交任何 MoR / PSP 审核前，逐项自检（信息清单，非代办）：

### 3.1 站点与信任信号

- [ ] **域名**可公网访问，无密码墙 / 无「coming soon」占位  
- [ ] **产品说明**一眼能看懂卖什么、给谁用、怎么交付  
- [ ] **公开定价页**：计划名、价格、计费周期（一次性 / 订阅是否自动续费）、包含什么 — 无需登录可见  
- [ ] **页脚**有 Privacy Policy、Terms of Service 链接，且页面有实质内容  
- [ ] **支持邮箱**真实可收件，与提交审核的邮箱一致，并出现在站点与收据预期位置  

### 3.2 法律页最低内容（通用，非律师意见）

**Terms of Service 至少覆盖：** 产品描述、定价与计费、退款/取消、免责与违约/停用条款。  

**Privacy Policy 至少覆盖：** 收集哪些数据、如何使用与存储、是否与第三方共享、用户权利。  

### 3.3 禁售 / 受限品类自检

各平台禁止与受限列表不同。提交前打开对应官方禁止品类页（例：Waffo [Prohibited & Restricted](https://docs.waffo.ai/mor/prohibited-products)；Creem Account Reviews 内 prohibited / restricted）。  

高敏感示例（以官方为准）：deepfake / face-swap、成人内容、赌博、无授权素材分发、部分 API 转售、未持牌金融服务等。  

AI 生图 / 生视频通常属 **受限**：可能要求内容审核、可接受使用政策、历史拒付数据等 — **先问平台再接入**。

### 3.4 支付与运营准备

- [ ] 沙箱 / Test Mode 跑通：付款成功、失败、Webhook、权益开通  
- [ ] **不要用正式环境给自己刷单测试**（易触发风控）  
- [ ] 退款路径与客服响应时限写清  
- [ ] 自有订单表至少记录：用户、金额、平台订单 ID、权益状态（避免状态只存在于某一平台后台）  
- [ ] 定好备用通道账号，但未验证前不必双写复杂订阅逻辑  

### 3.5 提现前

- [ ] KYC 姓名与收款账户户名 **一字不差**  
- [ ] 理解最低提现额与最低提现费（尤其 Waffo 最低 $10、Creem 最低 $50）  
- [ ] 小额多次提现可能不划算 — 合并批次  

---

## 4. 附录：ImgFlow 接 Waffo Pancake — 材料清单级要点

> 只写 **商户审核常见材料类型**，不写隐私、不写密钥、不写账号细节、不写任何代办步骤。  
> ImgFlow 为 taoliapp 系产品场景示例；规则以 Waffo 官方 Account Reviews 为准。

### 4.1 提交审核前，网站侧通常要齐

（来源：[Waffo Account Reviews](https://docs.waffo.ai/mor/account-reviews)）

| 材料类型 | 说明 |
| --- | --- |
| 可访问的产品站 | 功能可用、非占位；审核员无需登录即可打开 |
| 业务描述 | 卖什么、怎么交付、面向谁 |
| 公开定价页 | 计划 / 价格 / 周期 / 包含项完整 |
| Terms of Service | 含产品、计费、退款取消、免责与停用 |
| Privacy Policy | 含收集、使用、共享、用户权利 |
| 页脚法律链接 | ToS + Privacy 可点开 |
| 支持邮箱 | 与后台提交一致、真实监控 |
| 品类合规确认 | 不在禁止列表；AI 生成类另看 AIGC 要求 |

### 4.2 身份与收款账户（类型级）

（来源：[Identity Verification](https://docs.waffo.ai/merchant/identity-kyc)、[Payout Accounts](https://docs.waffo.ai/merchant/payout-accounts)）

| 类型 | 说明 |
| --- | --- |
| 身份证件类型 | 大陆个人常见为居民身份证；其他国籍护照（以官方字段为准） |
| 姓名一致性 | 证件法定姓名 = 收款账户户名（含空格与标点） |
| 收款方式类型 | 大陆：银行卡 **或** 支付宝（支付宝为 **商户提现目的地**，不是买家付款方式） |
| 额度概念 | 支付宝提现有单笔 / 年度上限（见官方 Payouts FAQ） |

### 4.3 提现后若通道要求「交易背景」补充材料（类型级）

官方 FAQ 示例可能包括：MoR 相关条款说明、后台导出的交易/结算明细、面向买家的发票/收据、自家定价页截图等。按官方当次提示准备；**本包不代提交**。

### 4.4 ImgFlow 场景额外自检（产品侧，非支付密钥）

- [ ] 定价与交付物（积分包 / 订阅）在站上写清  
- [ ] 若含 AI 生成：内容规则、禁止用途、审核策略可公开说明  
- [ ] 退款政策与客服入口可见  
- [ ] 禁止把测试密钥、Webhook 密钥、商户后台截图含敏感字段写入任何对外文档  

---

## 5. 来源与复核

完整 claim → URL → 摘录 → 核对日期 → confirmed/未验证，见同目录 **`sources.md`**。

---

## 页脚

仅供信息参考，非支付、税务或法律建议。本信息包为对照表与 checklist，**不代收、不代办主体、不开户、不持有客户资金**。$29 为一次性信息产品售价。平台规则以官方文档与合同为准。
