---
title: "Mortgages"
---

# Mortgages

*Ratio, rates and money · level 8, lesson 2 of 6*

## A question to start

A family borrows 400 000 dollars to buy a home, at 5% a year, to be repaid monthly over 25 years. Their payment is
about 2326 dollars a month. Suppose they pay just **200 dollars more** each month, about 9% extra.

How much sooner is the loan paid off? Not 9% sooner, but about **3½ years** sooner, and the interest bill falls by
about **48 000 dollars**. A mortgage is a loan where small changes in rate, payment or down payment move very large
sums. This lesson works through the mathematics of a Canadian mortgage, including one detail that surprises people:
how the interest rate is compounded. This is mathematics, not advice; real mortgages come with rules and products that
change, so check the current ones.

## The idea

### The words

- A **mortgage** is a loan to buy property, with the property as security: if the loan is not repaid, the lender can
  take the property.
- The **down payment** is the part of the price paid at the start from your own money. The mortgage covers the rest.
- The **amortization period** is how long the whole loan would take to pay off at the current payment, often 25 years.
- The **term** is how long the current rate and conditions last, often 5 years. At the end of the term the balance is
  **renewed**, usually at whatever rate is offered then, and the payment is recalculated.
- **Fixed rate**: the rate stays the same for the term. **Variable rate**: it moves with the lender's prime rate.

In Canada, when the down payment is less than 20% of the price, the borrower must also buy **mortgage default
insurance**, and there are rules on the minimum down payment and the longest amortization allowed. These rules change
from time to time; **check the current rules** before using them.

### Compounded semi-annually, paid monthly

A Canadian fixed-rate mortgage is usually quoted with interest **compounded semi-annually**, because of the federal
Interest Act (check the current law and your own contract). But payments are usually **monthly**. So the first step
is always the one from [level 7, lesson 3](../level-7/03-compounding-periods.md): find the monthly rate that is
equivalent to the quoted rate.

For a rate $r$ compounded semi-annually, the half-year rate is $\tfrac r2$, and a year is 2 half-years or 12 months,
so

$$(1 + i)^{12} = \left(1 + \frac r2\right)^{2} \qquad \Longrightarrow \qquad i = \left(1 + \frac r2\right)^{1/6} - 1.$$

At 5%: $i = 1.025^{1/6} - 1 \approx 0.0041239$ per month. Compare $0.05 \div 12 \approx 0.0041667$, which would be 5%
compounded monthly. Semi-annual compounding is slightly kinder to the borrower: its effective annual rate is
$1.025^2 - 1 = 5.0625\%$, against about 5.116% for monthly compounding.

### The payment and the cost

After that, a mortgage is an ordinary loan, and the formulas from [Loans and amortization](01-loans-amortization.md)
apply:

$$R = \frac{P\,i}{1 - (1 + i)^{-n}}, \qquad \text{balance after } k \text{ payments} = P(1 + i)^{k} - R\,\frac{(1 + i)^{k} - 1}{i}.$$

The drawing shows the balance of the 400 000 dollar mortgage over 25 years, with the normal payment (orange) and with
200 dollars a month extra (blue).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 215" role="img" aria-label="Balance owed on a 400000 dollar mortgage over 25 years. The normal curve bends down slowly at first and reaches zero at 25 years. With 200 dollars extra a month the curve falls faster and reaches zero at about 21 and a half years">
  <line x1="40" y1="180" x2="350" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="180" x2="40" y2="20" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="40,30.0 52,33.1 64,36.4 76,39.8 88,43.4 100,47.2 112,51.2 124,55.4 136,59.8 148,64.4 160,69.3 172,74.4 184,79.8 196,85.4 208,91.3 220,97.6 232,104.1 244,111.0 256,118.2 268,125.7 280,133.7 292,142.1 304,150.9 316,160.1 328,169.8 340,180.0" fill="none" stroke="#eea66f" stroke-width="3"/>
  <polyline points="40,30.0 52,34.0 64,38.3 76,42.7 88,47.4 100,52.3 112,57.5 124,62.9 136,68.6 148,74.6 160,80.9 172,87.5 184,94.5 196,101.8 208,109.5 220,117.5 232,126.0 244,134.9 256,144.2 268,154.0 280,164.4 292,175.2 298,180" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <text x="34" y="34" font-size="10" text-anchor="end" fill="currentColor">400k</text>
  <text x="34" y="184" font-size="10" text-anchor="end" fill="currentColor">0</text>
  <text x="40" y="196" font-size="10" text-anchor="middle" fill="currentColor">0</text>
  <text x="160" y="196" font-size="10" text-anchor="middle" fill="currentColor">10</text>
  <text x="280" y="196" font-size="10" text-anchor="middle" fill="currentColor">20</text>
  <text x="340" y="196" font-size="10" text-anchor="middle" fill="currentColor">25</text>
  <text x="195" y="211" font-size="11" text-anchor="middle" fill="currentColor">years</text>
  <text x="200" y="66" font-size="11" fill="currentColor">normal payment</text>
  <text x="110" y="120" font-size="11" fill="currentColor">200 dollars extra</text>
</svg>
</div>

### Why extra payments are so powerful

An extra payment does not pay any interest: the regular payment already covers the month's interest. So **every
dollar of an extra payment reduces the balance**, and a smaller balance means less interest in every month that
follows. The saving compounds at the mortgage rate, exactly like an investment earning that rate. That is why a modest
extra amount early in a long loan has such a large effect.

The same reasoning explains **accelerated biweekly** payments: paying half the monthly payment every two weeks. There
are 26 two-week periods in a year, so that is 26 half-payments, which equals **13** monthly payments a year instead of
12. The extra month's payment each year goes straight to principal.

### A bigger down payment

A bigger down payment shrinks the loan. Since the payment formula is $R = P \times (\text{a number that depends only
on } i \text{ and } n)$, the payment and the total interest are both **proportional** to the amount borrowed. Borrowing
12.5% less means paying 12.5% less each month and 12.5% less interest in total.

### Rate changes at renewal

At the end of each term, the remaining balance is renewed at the rate on offer then. If rates have risen, the payment
for the rest of the amortization goes up. The balance at renewal is found with the balance formula.

## Worked examples

**1. The basic mortgage.** A home costs 500 000 dollars. The buyers put 20% down and borrow the rest at 5% compounded
semi-annually, repaid monthly over 25 years. Find the payment, the first month's interest and the total interest.

- Down payment $0.20 \times 500\,000 = 100\,000$; mortgage $P = 400\,000$ dollars.
- $i = 1.025^{1/6} - 1 \approx 0.0041239$, $n = 300$.
- $R = \dfrac{400\,000 \times 0.0041239}{1 - 1.0041239^{-300}} \approx 2326.42$ dollars a month.
- First month's interest: $400\,000 \times 0.0041239 \approx 1649.57$ dollars, about 71% of the payment.
- Total interest: $300 \times 2326.42 - 400\,000 \approx 297\,926$ dollars.

**2. A bigger down payment.** The same home with 30% down: $P = 350\,000$.

- $R \approx 2035.62$ dollars a month; total interest about $260\,685$ dollars.
- Both are $\tfrac{350}{400} = 87.5\%$ of the figures in example 1. Putting 50 000 dollars more down saves about
  37 241 dollars of interest over 25 years (at a constant rate).

**3. Paying 200 dollars extra.** In example 1, the family pays $2326.42 + 200 = 2526.42$ dollars a month.

- Number of payments: solve $1 - \dfrac{P\,i}{R} = (1 + i)^{-n}$, so $n = -\dfrac{\ln(1 - Pi/R)}{\ln(1 + i)}
  = -\dfrac{\ln(1 - 1649.57/2526.42)}{\ln 1.0041239} \approx 257.1$.
- So the loan ends with payment 258 (a smaller final payment): about **21½ years**, not 25.
- Total interest is about 249 629 dollars, a saving of about **48 297 dollars**.

**4. Renewal at a higher rate.** In example 1 the 5-year term ends. The balance is renewed at 6% compounded
semi-annually for the remaining 20 years. Find the new payment.

- Balance after 60 payments: $400\,000 \times 1.0041239^{60} - 2326.42 \times \dfrac{1.0041239^{60} - 1}{0.0041239}
  \approx 354\,030$ dollars.
- New monthly rate: $1.03^{1/6} - 1 \approx 0.0049386$; $n = 240$.
- New payment: $\dfrac{354\,030 \times 0.0049386}{1 - 1.0049386^{-240}} \approx 2521.36$ dollars, about 195 dollars
  more a month.

**5. Accelerated biweekly.** Pay $2326.42 \div 2 = 1163.21$ dollars every two weeks. The equivalent two-week rate is
$1.025^{1/13} - 1 \approx 0.0019012$ (a year is 2 half-years or 26 two-week periods). Solving for $n$ as in example 3
gives about 558.4 payments: the loan ends in about **21½ years**, with total interest about 249 577 dollars. It works
almost exactly like paying one extra monthly payment a year.

## Try it

1. Find the monthly rate equivalent to 4% compounded semi-annually.
2. Find the monthly payment and the total interest on a 300 000 dollar mortgage at 4% compounded semi-annually, over
   25 years.
3. Find the effective annual rate of 5% compounded semi-annually and of 5% compounded monthly. Which costs a borrower
   less?
4. A 250 000 dollar mortgage at 5.5% compounded semi-annually over 25 years. Find the payment and the balance at the
   end of a 5-year term.
5. Redo example 1 at 4% and at 6% (both compounded semi-annually). How much does each percentage point change the
   total interest?
6. Explain why an extra payment of 200 dollars reduces the balance by the full 200 dollars, while a regular payment of
   2326.42 dollars reduces it by much less in the early years.
7. Explain why accelerated biweekly payments add up to 13 monthly payments a year.
8. (Harder.) With $P$, $i$ and $R$ known, derive $n = -\dfrac{\ln(1 - Pi/R)}{\ln(1 + i)}$ from the payment formula.
   What happens if $R \le Pi$, and what does it mean?

??? note "Answers"
    1. $1.02^{1/6} - 1 \approx 0.0033059$, about 0.33059% a month.
    2. $R = \dfrac{300\,000 \times 0.0033059}{1 - 1.0033059^{-300}} \approx 1578.06$ dollars; total interest
       $300 \times 1578.06 - 300\,000 \approx 173\,418$ dollars.
    3. Semi-annual: $1.025^2 - 1 = 5.0625\%$. Monthly: $\left(1 + \tfrac{0.05}{12}\right)^{12} - 1 \approx 5.116\%$.
       The **semi-annual** one costs the borrower less.
    4. $i = 1.0275^{1/6} - 1 \approx 0.0045317$; $R \approx 1525.98$ dollars. Balance after 60 payments
       $\approx 222\,969$ dollars.
    5. At 4%: payment $\approx 2104.08$, total interest $\approx 231\,224$. At 5%: $\approx 297\,926$. At 6%: payment
       $\approx 2559.23$, total interest $\approx 367\,768$. Each point adds about 67 000 to 70 000 dollars of
       interest, and the effect grows as the rate rises.
    6. The regular payment first pays the month's interest (about 1650 dollars at the start), and only the rest
       reduces the balance. The extra 200 dollars has no interest left to pay, so all of it reduces the balance.
    7. 26 payments a year of half a monthly payment is $26 \times \tfrac12 = 13$ monthly payments.
    8. From $R = \dfrac{Pi}{1 - (1 + i)^{-n}}$: $1 - (1 + i)^{-n} = \dfrac{Pi}{R}$, so $(1 + i)^{-n} = 1 - \dfrac{Pi}{R}$.
       Taking logs, $-n\ln(1 + i) = \ln\left(1 - \dfrac{Pi}{R}\right)$, which gives the formula. If $R \le Pi$, then
       $1 - Pi/R \le 0$ and the log is undefined: the payment does not even cover the first month's interest, so the
       balance never falls and the loan is never repaid.

## Common mistake

**Dividing the quoted rate by 12.** For a rate compounded semi-annually, $r \div 12$ is the wrong monthly rate. Find
the equivalent rate $\left(1 + \tfrac r2\right)^{1/6} - 1$ first.

**Confusing term and amortization.** A "5-year mortgage" usually means a 5-year **term** on a 25-year
**amortization**. After 5 years most of the loan is still owed, and it is renewed at a new rate.

## Where it leads

- Back: [Loans and amortization](01-loans-amortization.md) · Next: [Investing](03-investing.md)
- [Level 8 page](index.md) · [Ratio, rates and money topic page](../index.md)
- Equivalent rates: [Compounding periods](../level-7/03-compounding-periods.md). A home that may gain value while a
  car loses it: [level 6](../level-6/index.md).
- Solving for $n$ with logarithms: [Algebra](../../algebra/index.md).
