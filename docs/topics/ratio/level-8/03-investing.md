---
title: "Investing"
---

# Investing

*Ratio, rates and money · level 8, lesson 3 of 6*

## A question to start

Two funds hold exactly the same investments, which grow by 6% a year before fees. Fund A charges a yearly fee of 0.2%
of your money. Fund B charges 2%. The difference, 1.8 percentage points, sounds tiny.

Put 100 000 dollars into each and leave it for 30 years. Fund A grows to about **542 700 dollars**. Fund B grows to
about **324 300 dollars**. The "small" fee in Fund B costs over 200 000 dollars, and takes almost half of what the
money would have grown to with no fee at all. This lesson looks at the main kinds of investment, how to measure their
returns honestly, why risk and return go together, and why fees matter so much. It is the mathematics only: nothing
here is a recommendation to buy or avoid anything.

## The idea

### The main kinds of investment

- **Savings account.** Money in a bank, available any time, paying a modest variable interest rate. In Canada,
  eligible deposits at member institutions are protected by deposit insurance up to a limit (check the current limit
  and rules).
- **GIC** (guaranteed investment certificate). You lend money to a bank for a fixed **term** (say 1 to 5 years) at a
  fixed rate. It is usually locked in until the end of the term. Its growth is just compound interest:
  $A = P(1 + i)^n$.
- **Bond.** A loan to a government or a company. The bond has a **face value** (often 1000 dollars), repaid at the end
  (the **maturity** date), and pays regular interest called **coupons**, a fixed percent of the face value. Bonds can
  be bought and sold before maturity, at a price that changes.
- **Stock** (or share). A small piece of ownership of a company. You may receive **dividends** (a share of profits),
  and the share's price goes up and down with what buyers will pay. Nothing is guaranteed.
- **Fund.** A pool of many investors' money, spread over many stocks or bonds: a **mutual fund** or an
  **exchange-traded fund** (ETF). An **index fund** simply holds everything in a market index. Funds charge a yearly
  fee, often given as the **MER** (management expense ratio): a percent of your money taken each year.

### Measuring return

The **total return** over a period counts both price change and income received:

$$\text{total return} = \frac{\text{end value} + \text{income} - \text{start value}}{\text{start value}}.$$

Over several years with different returns $r_1, r_2, \ldots, r_n$, the money is multiplied by
$(1 + r_1)(1 + r_2)\cdots(1 + r_n)$. The **average yearly growth** is the rate $g$ that would give the same result every
year:

$$(1 + g)^{n} = (1 + r_1)(1 + r_2)\cdots(1 + r_n), \qquad g = \left[(1 + r_1)\cdots(1 + r_n)\right]^{1/n} - 1.$$

This is a **geometric mean**, and it is the honest average for money. The ordinary (arithmetic) mean of the returns is
always at least as big, and often misleading. A gain of 50% followed by a loss of 50% has an arithmetic mean of 0%,
but $1.5 \times 0.5 = 0.75$: a quarter of the money is gone. The bigger the swings, the bigger the gap. (That the
geometric mean never exceeds the arithmetic mean is the famous **AM–GM inequality**.)

### Bond prices: present value again

A bond's fair price is the **present value** of what it will pay, at the rate the market currently demands, called the
**yield**. With face value $F$, yearly coupon $C$, $n$ years left and yield $y$:

$$\text{price} = C\,\frac{1 - (1 + y)^{-n}}{y} + F(1 + y)^{-n}.$$

The first part is the present value of an annuity ([level 7](../level-7/06-annuity-present-value.md)); the second is
the present value of the face value ([level 7](../level-7/04-present-value.md)).

When market rates **rise**, new bonds pay more, so an old bond with a lower coupon must sell for **less** to compete.
**Bond prices and yields move in opposite directions.** This follows from the formula: a bigger $y$ makes every
discount factor $(1 + y)^{-k}$ smaller.

### Risk and return

**Risk** here means uncertainty: how widely the outcome might vary. A GIC's return is known in advance. A stock's could
be +30% or −30% in a given year. Over long periods, riskier investments such as stocks have, on average, earned more
than safe ones, otherwise no one would accept the risk. But "on average" hides a wide spread, and past returns do not
guarantee future ones.

**Diversification**, holding many different investments, reduces risk because their ups and downs partly cancel. The
mathematics is the variance of a sum, from [Probability](../../probability/level-7/03-variance-spread.md): averaging
many results that are not perfectly linked makes the average less spread out than any one of them.

### Fees compound against you

A yearly fee $f$ (a percent of your money) turns a growth rate $r$ into roughly $r - f$ each year. After $n$ years the
final amount is multiplied by about

$$\left(\frac{1 + r - f}{1 + r}\right)^{n}$$

compared with no fee. For $r = 6\%$, $f = 2\%$, $n = 30$, that is $\left(\tfrac{1.04}{1.06}\right)^{30} \approx 0.565$:
the fee takes about **43.5%** of the money you would otherwise have. The fee is a small percent each year, but it is
compounded for decades, just like interest, and it is taken whether the investments do well or badly.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 210" role="img" aria-label="Growth of 100000 dollars over 30 years at 6 percent with no fee, at 5.8 percent after a 0.2 percent fee, and at 4 percent after a 2 percent fee. The curves start together and spread far apart">
  <line x1="40" y1="180" x2="350" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="180" x2="40" y2="15" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="40,153.3 60,150.0 80,146.3 100,142.2 120,137.5 140,132.2 160,126.3 180,119.7 200,112.3 220,103.9 240,94.5 260,83.9 280,72.0 300,58.7 320,43.7 340,26.8" fill="none" stroke="#7ccf9a" stroke-width="3"/>
  <polyline points="40,153.3 60,150.2 80,146.6 100,142.6 120,138.1 140,133.1 160,127.5 180,121.3 200,114.3 220,106.4 240,97.6 260,87.8 280,76.8 300,64.5 320,50.7 340,35.3" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <polyline points="40,153.3 60,151.2 80,148.8 100,146.3 120,143.5 140,140.5 160,137.3 180,133.8 200,130.1 220,126.0 240,121.6 260,116.8 280,111.6 300,106.1 320,100.0 340,93.5" fill="none" stroke="#eea66f" stroke-width="3"/>
  <text x="344" y="26" font-size="10" fill="currentColor">574k</text>
  <text x="344" y="42" font-size="10" fill="currentColor">543k</text>
  <text x="344" y="96" font-size="10" fill="currentColor">324k</text>
  <text x="120" y="110" font-size="11" fill="currentColor">no fee / 0.2% fee</text>
  <text x="200" y="152" font-size="11" fill="currentColor">2% fee</text>
  <text x="34" y="157" font-size="10" text-anchor="end" fill="currentColor">100k</text>
  <text x="190" y="198" font-size="11" text-anchor="middle" fill="currentColor">30 years</text>
</svg>
</div>

<figure class="play" data-play="interest" data-mode="both"><span class="ai-tag">AI-created</span><figcaption><b>Growth over time.</b> Compound growth curves upward. Made-up amounts, not advice.</figcaption></figure>

## Worked examples

**1. A GIC.** 5000 dollars in a 3-year GIC at 4% compounded yearly (a made-up rate; check current rates) grows to
$5000 \times 1.04^3 = 5624.32$ dollars.

**2. A stock's total return.** A share is bought for 40 dollars, pays 1.20 dollars of dividends, and is sold a year
later for 45 dollars.

- Total return $= \dfrac{45 + 1.20 - 40}{40} = \dfrac{6.20}{40} = 15.5\%$.

**3. Arithmetic or geometric?** An investment returns +20%, −10%, +15% and −5% in four years.

- Arithmetic mean: $\dfrac{20 - 10 + 15 - 5}{4} = 5\%$.
- Actual growth: $1.20 \times 0.90 \times 1.15 \times 0.95 = 1.1799$. Geometric mean: $1.1799^{1/4} - 1 \approx
  4.22\%$ a year.
- Check: $1.0422^4 \approx 1.1799$. ✓ But $1.05^4 \approx 1.2155$, which overstates what happened.

**4. Bond prices.** A bond has face value 1000 dollars, a 4% yearly coupon (40 dollars a year) and 5 years left. Find
its price when market yields are 4%, 5% and 3%.

- At 4%: $40 \times \dfrac{1 - 1.04^{-5}}{0.04} + 1000 \times 1.04^{-5} = 1000.00$ dollars. When the yield equals the
  coupon rate, the price equals the face value.
- At 5%: about **956.71** dollars (below face value).
- At 3%: about **1045.80** dollars (above face value).

**5. The fee from the start.** 100 000 dollars for 30 years:

- No fee, 6%: $100\,000 \times 1.06^{30} \approx 574\,349$ dollars.
- 0.2% fee, about 5.8%: $100\,000 \times 1.058^{30} \approx 542\,713$ dollars.
- 2% fee, about 4%: $100\,000 \times 1.04^{30} \approx 324\,340$ dollars.

## Try it

1. 10 000 dollars is put in a 2-year GIC at 3.5% compounded yearly. What is it worth at the end?
2. A share bought for 25 dollars pays 0.80 dollars in dividends and is sold for 23 dollars. Find the total return.
3. A bond has face value 1000 dollars, a 5% yearly coupon and 3 years left. Find its price if the market yield is 6%.
4. Find the price of the same bond if the market yield is 4%.
5. An investment gains 30% one year and loses 30% the next. What is the overall change?
6. Returns of +10%, +10% and −20% in three years. Find the arithmetic mean and the geometric mean.
7. 50 000 dollars is invested for 25 years in investments growing 7% a year before fees. Compare a 1.5% fee with a
   0.25% fee.
8. (Harder.) Explain why the factor $\left(\tfrac{1 + r - f}{1 + r}\right)^n$ measures what a fee leaves you, and
   estimate it with $\left(1 - f\right)^n$ for $f = 2\%$, $n = 30$.

??? note "Answers"
    1. $10\,000 \times 1.035^2 = 10\,712.25$ dollars.
    2. $\dfrac{23 + 0.80 - 25}{25} = \dfrac{-1.20}{25} = -4.8\%$, a loss.
    3. $50 \times \dfrac{1 - 1.06^{-3}}{0.06} + 1000 \times 1.06^{-3} \approx 133.65 + 839.62 = 973.27$ dollars.
    4. $50 \times \dfrac{1 - 1.04^{-3}}{0.04} + 1000 \times 1.04^{-3} \approx 138.75 + 889.00 = 1027.75$ dollars.
    5. $1.3 \times 0.7 = 0.91$: a **9% loss**, not zero.
    6. Arithmetic: $\dfrac{10 + 10 - 20}{3} = 0\%$. Geometric: $(1.1 \times 1.1 \times 0.8)^{1/3} - 1 = 0.968^{1/3} - 1
       \approx -1.08\%$ a year. The money actually shrank.
    7. 1.5% fee: $50\,000 \times 1.055^{25} \approx 190\,670$ dollars. 0.25% fee:
       $50\,000 \times 1.0675^{25} \approx 255\,957$ dollars. The difference is about 65 000 dollars.
    8. With the fee the amount is $P(1 + r - f)^n$; without it, $P(1 + r)^n$. Their ratio is
       $\left(\tfrac{1 + r - f}{1 + r}\right)^n$. Since $\tfrac{1 + r - f}{1 + r} = 1 - \tfrac{f}{1 + r}$, which is close
       to $1 - f$, a rough estimate is $(0.98)^{30} \approx 0.545$, close to the exact 0.565: the fee takes roughly
       45% of the final amount.

## Common mistake

**Averaging returns with the ordinary mean.** Investment returns multiply, so their honest average is the geometric
mean. Advertised "average returns" that are arithmetic means make volatile investments look better than they were.

**Ignoring small percentages over long times.** A 2% fee, a 1% difference in rate, a 0.5% charge: each is small for one
year, but they compound over decades into large fractions of the total.

## Where it leads

- Back: [Mortgages](02-mortgages.md) · Next: [Real versus nominal rates](04-real-nominal.md), what money actually buys.
- [Level 8 page](index.md) · [Ratio, rates and money topic page](../index.md)
- Spread and the variance of sums: [Variance and spread](../../probability/level-7/03-variance-spread.md) and
  [Expected value](../../probability/level-7/02-expected-value.md) in Probability.
- How well a sample of past returns can predict the future: [Confidence intervals](../../statistics/level-8/02-confidence-intervals.md)
  in Statistics.
