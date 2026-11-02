---
title: "Present value of an annuity"
---

# Present value of an annuity

*Ratio, rates and money · level 7, lesson 6 of 7*

## A question to start

A lottery winner is offered a choice: **50 000 dollars a year for 20 years** (a million dollars in all, the first
payment in one year), or **600 000 dollars today**. A million is far more than 600 000, so the yearly payments look
like the obvious choice.

But the last of those payments arrives 20 years from now, and money today can earn interest in the meantime. If the
winner could earn 5% a year, the payments are worth about 623 000 dollars today, a little more than the lump sum. At
6% they are worth only about 573 500 dollars, and the lump sum wins. This lesson shows how to put a single "today"
price on a whole stream of payments. It is the same calculation a bank uses to work out your payment on any loan.

## The idea

### Discount every payment back to today

The **present value** $PV$ of an annuity is the sum of the present values of all its payments. Take $n$ payments of
$R$ at the end of each period, at rate $i$ per period. From [lesson 4](04-present-value.md), a payment $k$ periods away
is worth $R(1 + i)^{-k}$ today, so

$$PV = R(1 + i)^{-1} + R(1 + i)^{-2} + \cdots + R(1 + i)^{-n}.$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 200" role="img" aria-label="For each of years 1 to 5, a tall bar for a payment of 1000 dollars and beside it a shorter bar for its value today at 5 percent: 952, 907, 864, 823 and 784, adding to about 4329">
  <line x1="30" y1="160" x2="370" y2="160" stroke="currentColor" stroke-width="1.5"/>
  <rect x="86" y="40" width="12" height="120" fill="#9cc9ea"/>
  <rect x="100" y="45.7" width="12" height="114.3" fill="#eea66f"/>
  <text x="106" y="40.7" font-size="10" text-anchor="middle" fill="currentColor">952</text>
  <text x="100" y="176" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <rect x="146" y="40" width="12" height="120" fill="#9cc9ea"/>
  <rect x="160" y="51.2" width="12" height="108.8" fill="#eea66f"/>
  <text x="166" y="46.2" font-size="10" text-anchor="middle" fill="currentColor">907</text>
  <text x="160" y="176" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <rect x="206" y="40" width="12" height="120" fill="#9cc9ea"/>
  <rect x="220" y="56.3" width="12" height="103.7" fill="#eea66f"/>
  <text x="226" y="51.3" font-size="10" text-anchor="middle" fill="currentColor">864</text>
  <text x="220" y="176" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <rect x="266" y="40" width="12" height="120" fill="#9cc9ea"/>
  <rect x="280" y="61.3" width="12" height="98.7" fill="#eea66f"/>
  <text x="286" y="56.3" font-size="10" text-anchor="middle" fill="currentColor">823</text>
  <text x="280" y="176" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <rect x="326" y="40" width="12" height="120" fill="#9cc9ea"/>
  <rect x="340" y="66.0" width="12" height="94.0" fill="#eea66f"/>
  <text x="346" y="61.0" font-size="10" text-anchor="middle" fill="currentColor">784</text>
  <text x="340" y="176" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <rect x="40" y="14" width="10" height="10" fill="#9cc9ea"/>
  <text x="56" y="23" font-size="11" fill="currentColor">payment, 1000</text>
  <rect x="170" y="14" width="10" height="10" fill="#eea66f"/>
  <text x="186" y="23" font-size="11" fill="currentColor">worth today at 5%</text>
  <text x="200" y="194" font-size="11" text-anchor="middle" fill="currentColor">year of payment · today's values add to 4329.48</text>
</svg>
</div>

The further away a payment is, the less it is worth today. Five payments of 1000 dollars at 5% are worth about 4329.48
dollars today, not 5000.

### Adding the series

The sum is geometric again, now with ratio $v = (1 + i)^{-1}$, which is less than 1. Use multiply-and-subtract.
Multiply by $(1 + i)$:

$$(1 + i)PV = R + R(1 + i)^{-1} + \cdots + R(1 + i)^{-(n-1)}.$$

Subtract the line for $PV$: everything cancels except $R$ and $-R(1 + i)^{-n}$, so $i \cdot PV = R\left[1 - (1 + i)^{-n}\right]$ and

$$PV = R \cdot \frac{1 - (1 + i)^{-n}}{i}.$$

A second way to see it, as a check: the future value of the annuity at the last payment is $R\,\dfrac{(1+i)^n - 1}{i}$
([lesson 5](05-annuities.md)). Bringing that one amount back $n$ periods multiplies it by $(1 + i)^{-n}$, and
$\left[(1 + i)^n - 1\right](1 + i)^{-n} = 1 - (1 + i)^{-n}$. Same formula. ✓

### A loan is an annuity

When a bank lends you an amount $PV$, you repay it with equal payments $R$. The bank is fair, in its own terms, when
the present value of your payments at the loan's rate equals the amount lent. So the **loan payment** is the formula
above solved for $R$:

$$R = \frac{PV \cdot i}{1 - (1 + i)^{-n}}.$$

The **total interest** you pay is everything you pay minus what you borrowed:

$$\text{total interest} = nR - PV.$$

A longer loan has smaller payments, but more of them, and usually much more total interest, because the balance stays
high for longer.

### Payments for ever: the perpetuity

What if the payments never stop? As $n$ grows, $(1 + i)^{-n}$ shrinks towards 0, so the present value approaches a
limit:

$$PV_\infty = \frac{R}{i}.$$

This **perpetuity** formula has a simple meaning. If you invest $R / i$ at rate $i$, each period's interest is exactly
$R$. You can spend the interest for ever and never touch the principal. Endowed scholarships are designed roughly this
way. That an infinite list of payments has a finite value is no paradox: each payment is worth less than the one
before, by a fixed ratio, so the series converges.

## Worked examples

**1. The lottery.** Find the present value of 50 000 dollars a year for 20 years at 5% and at 6%.

- At 5%: $PV = 50\,000 \times \dfrac{1 - 1.05^{-20}}{0.05} \approx 623\,110.52$ dollars, more than 600 000.
- At 6%: $PV = 50\,000 \times \dfrac{1 - 1.06^{-20}}{0.06} \approx 573\,496.06$ dollars, less than 600 000.
- The break-even rate is about 5.45%. (Real decisions also involve taxes, risk and how the money would be used; this
  is only the mathematics of timing.)

**2. A car loan.** 20 000 dollars is borrowed at 6% compounded monthly, repaid monthly over 5 years. Find the payment
and the total interest.

- $i = 0.005$, $n = 60$.
- $R = \dfrac{20\,000 \times 0.005}{1 - 1.005^{-60}} \approx 386.66$ dollars a month.
- Total paid: $60 \times 386.656 \approx 23\,199.36$ dollars, so the total interest is about 3199.36 dollars.
  (With the payment rounded to 386.66, the borrower pays 23 199.60 and the last payment is adjusted by a few cents.)

**3. Shorter or longer.** The same loan over 3 years and over 7 years:

| Term | Payment | Total interest |
| --- | --- | --- |
| 3 years ($n = 36$) | 608.44 | 1903.79 |
| 5 years ($n = 60$) | 386.66 | 3199.36 |
| 7 years ($n = 84$) | 292.17 | 4542.37 |

The 7-year loan's payment is less than half the 3-year one's, but its interest is well over twice as much.

**4. Funding a pension.** How much money is needed at retirement to pay 2000 dollars at the end of each month for 25
years, if the money earns 4% compounded monthly?

- $i = 0.04 \div 12$, $n = 300$.
- $PV = 2000 \times \dfrac{1 - (1 + 0.04/12)^{-300}}{0.04/12} \approx 378\,904.97$ dollars.
- That much pays out $2000 \times 300 = 600\,000$ dollars in all; interest earned along the way supplies the
  difference.

**5. A scholarship for ever.** How much must be given to pay a 5000 dollar scholarship every year for ever, at 4% a
year? $PV_\infty = 5000 \div 0.04 = 125\,000$ dollars.

## Try it

1. Find the present value of 1000 dollars a year for 10 years at 5% a year.
2. Find the present value of 250 dollars a month for 4 years at 6% compounded monthly.
3. A loan of 15 000 dollars at 7.2% compounded monthly is repaid monthly over 3 years. Find the payment.
4. Find the total interest on the loan in question 3.
5. How much must be invested to pay 1200 dollars a year for ever, at 3% a year?
6. A store offers a sofa for 1100 dollars now, or 12 monthly payments of 100 dollars starting in a month with "no
   interest". If money is worth 6% compounded monthly to you, which is cheaper in today's dollars?
7. Explain why the present value of $n$ payments of $R$ is less than $nR$ when the rate is positive.
8. You can afford 400 dollars a month for 5 years. At 6.6% compounded monthly, what is the most you can borrow?

??? note "Answers"
    1. $1000 \times \dfrac{1 - 1.05^{-10}}{0.05} \approx 7721.73$ dollars.
    2. $250 \times \dfrac{1 - 1.005^{-48}}{0.005} \approx 10\,645.08$ dollars.
    3. $i = 0.072 \div 12 = 0.006$, $n = 36$: $R = \dfrac{15\,000 \times 0.006}{1 - 1.006^{-36}} \approx 464.53$
       dollars a month.
    4. $36 \times 464.53 - 15\,000 \approx 1723.06$ dollars (1723.08 if you use the rounded payment, which is what
       the borrower would actually pay).
    5. $1200 \div 0.03 = 40\,000$ dollars.
    6. Present value of the payments: $100 \times \dfrac{1 - 1.005^{-12}}{0.005} \approx 1161.89$ dollars. That is
       more than 1100, so **paying 1100 now** is cheaper. "No interest" still costs 1200 dollars, and 1100 now is
       less than 1200 spread out even after the time value is counted.
    7. Each payment $R(1 + i)^{-k}$ is less than $R$ because $(1 + i)^k > 1$, so the sum of the $n$ discounted
       payments is less than $nR$.
    8. $i = 0.0055$, $n = 60$: $PV = 400 \times \dfrac{1 - 1.0055^{-60}}{0.0055} \approx 20\,394.61$ dollars.

## Common mistake

**Thinking total payments equal the loan's value.** Paying 386.66 dollars for 60 months is 23 199 dollars, but its
present value at the loan rate is exactly the 20 000 dollars borrowed. Adding payments made at different times
ignores the time value of money.

**Choosing a loan only by the monthly payment.** Stretching the term lowers each payment and raises the total
interest. Look at both numbers.

## Where it leads

- Back: [Annuities](05-annuities.md) · Next: [Planning a financial life](07-financial-life.md)
- [Level 7 page](index.md) · [Ratio, rates and money topic page](../index.md)
- How each loan payment splits into interest and principal, month by month: [Loans and
  amortization](../level-8/01-loans-amortization.md), then [Mortgages](../level-8/02-mortgages.md).
- The perpetuity is an infinite geometric series: [MAT137 Unit 13 (series)](../../../uoft/MAT137/unit13.md) explains
  when such sums converge.
