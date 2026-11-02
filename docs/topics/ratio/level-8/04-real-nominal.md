---
title: "Real versus nominal rates"
---

# Real versus nominal rates

*Ratio, rates and money · level 8, lesson 4 of 6*

## A question to start

Money invested at 6% a year, compounded yearly, doubles in about 12 years: $1.06^{12} \approx 2.01$. Suppose that
over the same 12 years, prices in the shops rise by 3% a year.

Has the investor doubled what their money can **buy**? No. Prices have risen by a factor of $1.03^{12} \approx 1.43$,
so the doubled money buys only about $2.01 \div 1.43 \approx 1.41$ times as much as before. The money doubled; its
buying power grew by about 41%. This lesson separates the two ideas, the **nominal** rate (what the number on the
statement does) and the **real** rate (what the money can do), and shows exactly how they are linked.

## The idea

### Nominal, inflation and real

- The **nominal rate** $n$ is the stated rate at which an amount of money grows: the interest rate, the return.
- The **inflation rate** $f$ is the rate at which prices in general rise, usually measured by a price index such as
  Canada's Consumer Price Index (CPI), from [level 6](../level-6/index.md).
- The **real rate** $q$ is the rate at which **buying power** grows: how much more stuff the money can buy.

(The letter $n$ here is a rate, not a number of periods. Rates in this lesson are yearly, written as decimals.)

### The exact link

In one year, an amount of money is multiplied by $1 + n$. The price of a typical basket of goods is multiplied by
$1 + f$. The number of baskets the money can buy is money divided by price, so it is multiplied by

$$1 + q = \frac{1 + n}{1 + f}.$$

This is the **Fisher equation**, named after the economist Irving Fisher. It is exact, and it is just a ratio of two
multipliers.

### The approximation and its error

Rearrange the exact equation:

$$q = \frac{1 + n}{1 + f} - 1 = \frac{(1 + n) - (1 + f)}{1 + f} = \frac{n - f}{1 + f}.$$

When inflation is small, $1 + f$ is close to 1, so

$$q \approx n - f.$$

"Real rate ≈ nominal rate minus inflation" is the everyday rule. The exact value is the approximate one divided by
$1 + f$, so the approximation slightly **overstates** a positive real rate. At low inflation the difference is tiny; at
high inflation it is not. With 50% nominal and 40% inflation, the rule says 10%, but the exact real rate is
$\tfrac{1.5}{1.4} - 1 \approx 7.1\%$.

### Over many years

Over $t$ years with steady rates, buying power is multiplied by

$$\left(\frac{1 + n}{1 + f}\right)^{t} = (1 + q)^{t}.$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 210" role="img" aria-label="Three bars after 12 years: money grew to 2.01 times, prices grew to 1.43 times, and buying power grew to 1.41 times. A dashed line marks the starting level of 1">
  <line x1="30" y1="180" x2="340" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <rect x="60" y="39.1" width="50" height="140.9" fill="#eea66f"/>
  <rect x="155" y="80.2" width="50" height="99.8" fill="#9cc9ea"/>
  <rect x="250" y="81.2" width="50" height="98.8" fill="#7ccf9a"/>
  <line x1="30" y1="110" x2="340" y2="110" stroke="currentColor" stroke-dasharray="5 4"/>
  <text x="336" y="104" font-size="10" text-anchor="end" fill="currentColor">start = 1</text>
  <text x="85" y="32" font-size="11" text-anchor="middle" fill="currentColor">× 2.01</text>
  <text x="180" y="73" font-size="11" text-anchor="middle" fill="currentColor">× 1.43</text>
  <text x="275" y="74" font-size="11" text-anchor="middle" fill="currentColor">× 1.41</text>
  <text x="85" y="196" font-size="11" text-anchor="middle" fill="currentColor">money</text>
  <text x="180" y="196" font-size="11" text-anchor="middle" fill="currentColor">prices</text>
  <text x="275" y="196" font-size="11" text-anchor="middle" fill="currentColor">buying power</text>
</svg>
</div>

To describe a future amount in **today's dollars** (also called **real dollars** or **constant dollars**), divide it by
the growth of prices, $(1 + f)^t$. This is the same as the "what 100 dollars from 1990 buys today" calculation in
[level 6](../level-6/index.md), run forwards.

### Negative real rates

If the nominal rate is below inflation, the real rate is **negative**: the account balance goes up, but what it buys
goes down. A savings account at 2% with prices rising 4% a year loses about 1.9% of its buying power each year. The
statement shows more dollars each year; the shopping basket shows fewer things.

### Tax comes first

Income tax on interest is charged on the **nominal** interest, the whole of it, even though part of that interest only
makes up for inflation. If interest is taxed at rate $\tau$ (the Greek letter tau), the after-tax nominal rate is
$n(1 - \tau)$, and the real after-tax rate is

$$\frac{1 + n(1 - \tau)}{1 + f} - 1.$$

Tax rules on investment income differ by type of account and type of income, and change over time; check the current
ones. The examples below use a made-up flat rate.

## Worked examples

**1. The basic case.** A GIC pays 5% when inflation is 3%. Find the real rate, approximately and exactly.

- Approximate: $5\% - 3\% = 2\%$.
- Exact: $\dfrac{1.05}{1.03} - 1 \approx 0.01942$, about **1.94%**.

**2. The doubled money.** At 6% for 12 years with 3% inflation:

- Money: $1.06^{12} \approx 2.012$. Prices: $1.03^{12} \approx 1.426$.
- Buying power: $2.012 \div 1.426 \approx 1.411$, a 41% increase. (Equivalently, the real rate is
  $\tfrac{1.06}{1.03} - 1 \approx 2.91\%$, and $1.0291^{12} \approx 1.41$.)

**3. A negative real rate.** Savings earn 2% a year while inflation is 4%.

- Real rate: $\dfrac{1.02}{1.04} - 1 \approx -1.92\%$ a year.
- After 10 years the money buys $\left(\tfrac{1.02}{1.04}\right)^{10} \approx 0.824$, about 82% of what it bought at
  the start.

**4. After tax.** Interest at 5% is taxed at a made-up rate of 30%; inflation is 3%.

- After-tax nominal: $5\% \times 0.7 = 3.5\%$.
- Real after tax: $\dfrac{1.035}{1.03} - 1 \approx 0.49\%$. Most of the 5% was used up by tax and inflation.

**5. The rate you need.** To earn 3% real when inflation is 2.5%, what nominal rate is needed?

- $1 + n = 1.03 \times 1.025 = 1.05575$, so $n \approx 5.575\%$, a little more than $3 + 2.5 = 5.5$.

## Try it

1. Nominal 7%, inflation 2%. Find the real rate approximately and exactly.
2. Nominal 3%, inflation 3.5%. Find the exact real rate. What does its sign mean?
3. What nominal rate gives a real rate of 4% when inflation is 3%?
4. 10 000 dollars grows at 4% a year for 20 years while inflation is 2.5%. Find the final amount in dollars, and in
   today's dollars.
5. A salary rises from 50 000 to 56 000 dollars over 4 years, while prices rise 12% in total. What happened to the
   salary's buying power?
6. At 3% inflation, how many years until money kept in a drawer buys half as much? Use the rule of 72, then the exact
   formula.
7. Show that the exact real rate is $\dfrac{n - f}{1 + f}$, and explain why the rule $n - f$ overstates it when
   $f > 0$ and $n > f$.
8. Nominal 30%, inflation 25% (as can happen in a country with high inflation). Compare the approximate and exact
   real rates.

??? note "Answers"
    1. Approximate $7 - 2 = 5\%$. Exact $\dfrac{1.07}{1.02} - 1 \approx 4.90\%$.
    2. $\dfrac{1.03}{1.035} - 1 \approx -0.48\%$. **Negative**: the money buys a little less each year, even though the
       balance grows.
    3. $1.04 \times 1.03 - 1 = 0.0712$, so **7.12%**.
    4. Dollars: $10\,000 \times 1.04^{20} \approx 21\,911.23$. Today's dollars: $21\,911.23 \div 1.025^{20} \approx
       13\,371.79$. The buying power grew by about 34%, not 119%.
    5. In starting-year dollars, $56\,000 \div 1.12 = 50\,000$. Buying power is **unchanged**: the raise only kept up
       with prices.
    6. Rule: $72 \div 3 = 24$ years. Exact: the drawer money's buying power is multiplied by $\tfrac{1}{1.03}$ a year,
       so we need $1.03^t = 2$, $t = \dfrac{\ln 2}{\ln 1.03} \approx 23.4$ years.
    7. $\dfrac{1 + n}{1 + f} - 1 = \dfrac{1 + n - 1 - f}{1 + f} = \dfrac{n - f}{1 + f}$. If $n - f > 0$ and $1 + f > 1$,
       dividing by $1 + f$ makes it smaller, so $n - f$ is too big.
    8. Approximate $30 - 25 = 5\%$; exact $\dfrac{1.30}{1.25} - 1 = 4\%$. At high inflation the error is a whole point.

## Common mistake

**Celebrating nominal growth.** "My savings doubled" says nothing about buying power until you know what prices did.
Always ask what the money buys.

**Subtracting when inflation is high.** "Nominal minus inflation" is an approximation for small rates. With high
inflation, or over many years, use the exact ratio $\dfrac{1 + n}{1 + f}$.

## Where it leads

- Back: [Investing](03-investing.md) · Next: [Continuous compounding and the number e](05-continuous-e.md)
- [Level 8 page](index.md) · [Ratio, rates and money topic page](../index.md)
- Price indexes and what old dollars buy today: [level 6](../level-6/index.md).
- Measuring inflation from many prices is a statistics problem: how an index is weighted and sampled, in
  [Statistics](../../statistics/index.md).
