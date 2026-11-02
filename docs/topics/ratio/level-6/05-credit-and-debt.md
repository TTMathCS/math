---
title: "Credit and debt"
---

# Credit and debt

*Ratio, rates and money · level 6, lesson 5 of 7*

## A question to start

You buy a 1000 dollar laptop with a credit card that charges 20% a year. Each month you pay only the **minimum
payment** the card asks for. How long until the laptop is paid off, and how much does it cost you in total?

Most people guess a year or two, and maybe 1100 or 1200 dollars.

With a typical minimum payment, it takes **more than 10 years**, and the laptop costs you about **1960 dollars**:
almost twice its price, long after it has stopped working. This lesson shows where that comes from, using the
percent tools from this level, and what you can do about it.

## The idea

### What credit is

**Credit** means using money now and paying it back later. **Debt** is the money you owe. A **credit card** lets you
buy things up to a **credit limit** (say 1000 or 5000 dollars); the card company pays the shop, and you owe the card
company.

Each month the card sends a **statement**: what you bought, what you owe (the **balance**), the **minimum payment**,
and the **due date**.

### The two ways to use a credit card

**Pay the full balance every month.** Most cards give a **grace period**: if you pay the whole statement balance by the
due date, you pay **no interest at all** on purchases. (In Canada the grace period on new purchases is at least
21 days; check your card's terms, since rules and products change.) Used this way, a card is a free, convenient way to
pay, and paying on time builds a good **credit history**, which lenders look at later when you want a loan.

**Pay less than the full balance.** Then the card charges interest on what you still owe. Many Canadian credit cards
charge around 20% a year (often written as 19.99%; check your card, as rates vary and change). Interest is usually
charged from the day of each purchase, and it compounds: unpaid interest is added to the balance and charged interest
too.

Cash advances (taking cash out with the card) are worse: they usually charge interest from day one with no grace
period, and often a fee as well.

### Turning a yearly rate into a monthly one

In this lesson we use a simple model: interest is added once a month at $\tfrac{1}{12}$ of the yearly rate. (Real cards
work it out daily, which gives almost the same answer.)

$$\text{monthly rate} = \frac{20\%}{12} \approx 1.667\% \text{ a month}.$$

So on a 1000 dollar balance, one month's interest is $1000 \times \dfrac{0.20}{12} \approx 16.67$ dollars.

### Following a balance month by month

Each month: add the interest, then take off your payment.

$$\text{new balance} = \text{old balance} \times \left(1 + \frac{0.20}{12}\right) - \text{payment}$$

With a fixed payment of 50 dollars a month on 1000 dollars:

| Month | Interest | Payment | Balance after |
| --- | --- | --- | --- |
| 1 | 16.67 | 50 | 966.67 |
| 2 | 16.11 | 50 | 932.78 |
| 3 | 15.55 | 50 | 898.32 |

Look at month 1: you paid 50 dollars, but only $50 - 16.67 = 33.33$ dollars went to reducing the debt. The rest paid
for the privilege of owing. Paying 50 dollars a month, the debt is gone after 25 months, and you pay about
1226.61 dollars in total.

### Why the minimum payment is a trap

The minimum payment is usually a small percent of the balance, with a floor of a few dollars. Card terms vary; in our
example the minimum is **3% of the balance or 10 dollars, whichever is more**.

Use multipliers. Each month the balance is multiplied by 1.01667 (interest) and then 3% is paid off, which is
multiplying by 0.97. Together:

$$1.01667 \times 0.97 \approx 0.9862$$

So each month the balance shrinks by only about **1.4%**. And because the payment is a percent of the balance, the
payment shrinks too: the less you owe, the less you pay, so the debt never gets a hard push. It takes about 79 months
(more than six and a half years) just for the balance to fall to a third, where the 10 dollar floor takes over.

Worked out month by month by computer, the result for 1000 dollars at 20%:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 470 175" role="img" aria-label="Total paid on a 1000 dollar balance at 20 percent a year. Minimum payments: about 1960 dollars over 128 months. 50 dollars a month: about 1227 dollars over 25 months. 100 dollars a month: about 1103 dollars over 12 months. Paying in full: 1000 dollars">
  <rect x="110" y="15" width="170" height="26" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="280" y="15" width="163.2" height="26" fill="#eea66f" stroke="currentColor"/>
  <text x="104" y="32" font-size="11" text-anchor="end" fill="currentColor">minimum (3%)</text>
  <text x="361" y="32" font-size="11" text-anchor="middle" fill="currentColor">1960 in 128 months</text>
  <rect x="110" y="55" width="170" height="26" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="280" y="55" width="38.5" height="26" fill="#eea66f" stroke="currentColor"/>
  <text x="104" y="72" font-size="11" text-anchor="end" fill="currentColor">50 a month</text>
  <text x="326" y="72" font-size="11" fill="currentColor">1227 in 25 months</text>
  <rect x="110" y="95" width="170" height="26" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="280" y="95" width="17.5" height="26" fill="#eea66f" stroke="currentColor"/>
  <text x="104" y="112" font-size="11" text-anchor="end" fill="currentColor">100 a month</text>
  <text x="305" y="112" font-size="11" fill="currentColor">1103 in 12 months</text>
  <rect x="110" y="135" width="170" height="26" fill="#9cc9ea" stroke="currentColor"/>
  <text x="104" y="152" font-size="11" text-anchor="end" fill="currentColor">pay in full</text>
  <text x="288" y="152" font-size="11" fill="currentColor">1000, no interest</text>
</svg>
</div>

Blue is the laptop's price; orange is interest. The same laptop costs anywhere from 1000 to about 1960 dollars,
depending only on how you pay.

| How you pay 1000 dollars at 20% | Months | Total paid | Interest |
| --- | --- | --- | --- |
| Minimum: 3% or 10 dollars | 128 (about 10.7 years) | 1960.26 | 960.26 |
| 50 dollars a month | 25 | 1226.61 | 226.61 |
| 100 dollars a month | 12 | 1103.04 | 103.04 |
| Full balance by the due date | 1 | 1000.00 | 0 |

With a minimum of 2% instead of 3%, the same debt would take about 297 months (almost 25 years) and cost about
3855 dollars. Canadian credit card statements show an estimate of how long it would take to pay off the balance with
minimum payments only. It is worth reading.

### What to take away

1. **Pay the full balance every month** if you can: then the card costs nothing.
2. If you cannot, **pay as much as you can**, well above the minimum. Every extra dollar goes straight to the debt.
3. **Never let interest compound against you** for years. Compounding is wonderful in savings
   ([last lesson](04-compound-interest.md)) and terrible in debt, for exactly the same reason.
4. **Compare the yearly rate** of any way of borrowing (card, store plan, loan) before you sign.

## Worked examples

**1. One month's interest.** A balance of 1000 dollars at 20% a year. Interest for one month?

- $1000 \times \dfrac{0.20}{12} \approx$ **16.67 dollars**.

**2. A fixed payment.** Continue the 50 dollar table for month 2.

- Interest: $966.67 \times \dfrac{0.20}{12} \approx 16.11$. Balance: $966.67 + 16.11 - 50 = 932.78$ dollars.

**3. The minimum payment, month 1.** Balance 1000 dollars, 20% a year, minimum 3% of the balance after interest.

- After interest: $1000 \times 1.01667 \approx 1016.67$.
- Minimum: $0.03 \times 1016.67 \approx 30.50$ dollars.
- New balance: $1016.67 - 30.50 = 986.17$ dollars. A month of paying, and the debt fell by under 14 dollars.

**4. Why the minimum is slow, in one number.** The monthly multiplier is $1.01667 \times 0.97 \approx 0.9862$: the
balance falls by about 1.4% a month. With a 2% minimum it is $1.01667 \times 0.98 \approx 0.9963$, about 0.37% a
month: even slower.

**5. Paying more.** A 3000 dollar balance at 20%. Paying 100 dollars a month takes 42 months and about 4193.50 dollars
in total. Paying the 3% minimum takes about 207 months (over 17 years) and about 6369.91 dollars. Interest: about
1193.50 against about 3369.91 dollars.

## Try it

1. What is the monthly rate for a card charging 20% a year? What is one month's interest on 600 dollars?
2. A card charges 18% a year. Find one month's interest on a balance of 2400 dollars.
3. You owe 500 dollars at 20% a year and pay 100 dollars a month. Make a table for the first 2 months.
4. A friend pays exactly the interest every month and nothing more. What happens to the debt? Why?
5. With a 2% minimum payment and 20% a year, what is the monthly multiplier for the balance? By about what percent does
   the balance fall each month?
6. You buy a 300 dollar jacket on a card and pay the full statement balance by the due date. How much interest do you
   pay?
7. Use the table in the lesson. Paying 1000 dollars off at 100 dollars a month instead of the minimum saves how much
   interest? How many months sooner is it paid off?
8. A store says: "Only 25 dollars a month!" for a 900 dollar TV. Without working it out exactly, list two questions
   you should ask before agreeing.

??? note "Answers"
    1. $20\% \div 12 \approx 1.667\%$ a month. On 600 dollars: $600 \times \dfrac{0.20}{12} = 10$ dollars.
    2. $2400 \times \dfrac{0.18}{12} = 2400 \times 0.015 = 36$ dollars.
    3. Month 1: interest $500 \times \dfrac{0.20}{12} \approx 8.33$, balance $500 + 8.33 - 100 = 408.33$. Month 2:
       interest $408.33 \times \dfrac{0.20}{12} \approx 6.81$, balance $408.33 + 6.81 - 100 = 315.14$ dollars.
    4. The debt **never goes down**. Each month the interest is added and the same amount is paid, so the balance stays
       exactly where it was, forever, and all the payments go to interest.
    5. $1.01667 \times 0.98 \approx 0.9963$. The balance falls by only about **0.37%** a month.
    6. **None**, as long as the card has a grace period and the full balance is paid by the due date.
    7. Interest: $960.26 - 103.04 = 857.22$ dollars saved. Time: $128 - 12 = 116$ months sooner (almost 10 years).
    8. For example: What is the yearly interest rate? How many months will it take? What is the total I will pay?
       Are there fees, and what happens if I miss a payment? (A 900 dollar TV at 25 dollars a month with no interest
       would take 36 months; with interest it takes longer and costs more.)

## Common mistake

**Thinking the minimum payment is a plan.** It is the least you can pay without a penalty, designed to keep you in debt
for a long time. Treat it as a floor, not a target.

**Ignoring the yearly rate.** "Only 1.67% a month" sounds small; it is 20% a year, and with compounding a little more.
Always compare yearly rates.

## Where it leads

- Back: [Compound interest](04-compound-interest.md) · Next: [Comparing options](06-comparing-options.md)
- [Level 6 page](index.md) · [Ratio, rates and money topic page](../index.md)
- Budgets and where the money goes each month: [Level 4](../level-4/index.md).
- Loans with equal payments, amortization tables and mortgages: [Level 7](../level-7/index.md) and
  [Level 8](../level-8/index.md).
- Building a balance month by month is a **recursive** rule, like those in [Patterns](../../patterns/index.md).
