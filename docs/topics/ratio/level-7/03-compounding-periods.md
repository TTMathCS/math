---
title: "Compounding periods"
---

# Compounding periods

*Ratio, rates and money · level 7, lesson 3 of 7*

## A question to start

Two banks want your savings. Bank A pays **6% a year, compounded yearly**. Bank B pays **5.9% a year, compounded
monthly**. Which pays more?

6 is bigger than 5.9, so Bank A looks better. But after one year, 1000 dollars at Bank A grows to 1060 dollars, while
at Bank B it grows to about 1060.62 dollars. Bank B wins, even with the smaller number in its advertisement. The words
"compounded monthly" changed the answer. This lesson explains what those words mean and gives you a fair way to compare
any two rates.

## The idea

### Nominal rate and rate per period

Banks quote interest as a yearly rate, called the **nominal annual rate** (or "annual percentage rate"). But they may
add interest to the account more often than once a year. Each time interest is added is a **compounding period**. The
number of periods in a year is written $n$:

| Compounded | $n$ |
| --- | --- |
| annually (yearly) | 1 |
| semi-annually (twice a year) | 2 |
| quarterly | 4 |
| monthly | 12 |
| weekly | 52 |
| daily | 365 |

The bank does not pay the whole yearly rate each period. It splits it evenly. The **rate per period** is

$$i = \frac{r}{n},$$

where $r$ is the nominal rate as a decimal. At 6% compounded monthly, $i = 0.06 \div 12 = 0.005$, which is 0.5% a
month. Over $t$ years there are

$$N = n\,t$$

periods. Each period the balance is multiplied by $1 + i$, so after $N$ periods a starting amount $P$ (the
**principal**) becomes

$$A = P(1 + i)^{N}.$$

This is the same formula as yearly compound interest from [level 6](../level-6/index.md). Only the meaning of one step
has changed.

### Why more frequent compounding pays more

With monthly compounding, January's interest is added at the end of January, and from February on it earns interest
of its own. With yearly compounding, nothing earns interest on interest until the year is over. So splitting the year
into more pieces gives interest a head start.

The drawing shows one year, exaggerated by using a rate of 100% a year so that the gap is easy to see. Yearly
compounding makes one jump, from 1 to 2. Monthly compounding makes twelve small jumps of $\tfrac{1}{12}$, each a
percent of a slightly bigger amount, and ends at about 2.61.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 210" role="img" aria-label="Two staircases over one year at 100 percent interest. Yearly compounding stays flat at 1 and jumps to 2 at the end. Monthly compounding climbs in 12 steps that get taller, ending at about 2.61">
  <line x1="40" y1="190" x2="350" y2="190" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="190" x2="40" y2="20" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="40,130.0 65,130.0 65,125.0 90,125.0 90,119.6 115,119.6 115,113.7 140,113.7 140,107.4 165,107.4 165,100.5 190,100.5 190,93.0 215,93.0 215,84.9 240,84.9 240,76.2 265,76.2 265,66.7 290,66.7 290,56.4 315,56.4 315,45.3 340,45.3 340,33.2" fill="none" stroke="#eea66f" stroke-width="3"/>
  <polyline points="40,130 340,130 340,70" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <text x="34" y="134" font-size="11" text-anchor="end" fill="currentColor">1</text>
  <text x="34" y="74" font-size="11" text-anchor="end" fill="currentColor">2</text>
  <line x1="36" y1="70" x2="44" y2="70" stroke="currentColor"/>
  <text x="346" y="36" font-size="11" fill="currentColor">2.61</text>
  <text x="346" y="74" font-size="11" fill="currentColor">2</text>
  <text x="120" y="60" font-size="12" fill="currentColor">monthly</text>
  <text x="200" y="146" font-size="12" fill="currentColor">yearly</text>
  <text x="190" y="206" font-size="11" text-anchor="middle" fill="currentColor">one year</text>
</svg>
</div>

At ordinary rates the gain is much smaller. Here is 5000 dollars at 6% for 3 years:

| Compounded | $i$ | $N$ | Amount after 3 years |
| --- | --- | --- | --- |
| annually | 0.06 | 3 | 5955.08 |
| semi-annually | 0.03 | 6 | 5970.26 |
| quarterly | 0.015 | 12 | 5978.09 |
| monthly | 0.005 | 36 | 5983.40 |
| daily | 0.06/365 | 1095 | 5986.00 |

Each step up in frequency adds less than the one before. Going from monthly to daily adds less than 3 dollars. There
is a ceiling: no matter how often you compound, you never pass a certain limit. That limit involves the number
$e \approx 2.718$, in [level 8](../level-8/05-continuous-e.md).

### The effective annual rate: a fair comparison

To compare rates with different compounding, turn each into the **effective annual rate** (EAR): the percent by which
the money actually grows in one whole year. One year is $n$ periods, so the yearly factor is $(1 + \tfrac rn)^n$, and

$$\text{EAR} = \left(1 + \frac rn\right)^{n} - 1.$$

For a nominal rate of 6%:

| Compounded | Effective annual rate |
| --- | --- |
| annually | 6.000% |
| semi-annually | 6.090% |
| quarterly | 6.136% |
| monthly | 6.168% |
| weekly | 6.180% |
| daily | 6.183% |

The effective rate is never below the nominal rate, and equals it only for yearly compounding. When two offers have
different compounding, **compare effective rates**, never nominal ones. In many countries, including Canada, lenders
must state a borrowing cost in a standard way for exactly this reason (check the current disclosure rules where you
live).

### Equivalent rates: changing the period

Sometimes payments happen at a different rhythm from the compounding. A Canadian fixed-rate mortgage is usually
quoted as compounded **semi-annually**, but paid **monthly** (you will meet it in [level 8](../level-8/02-mortgages.md)).
We then need the **monthly** rate that grows money exactly as fast.

Two rates are **equivalent** if they give the same growth over a year. If the semi-annual rate per period is $j$, a
year is 2 of those periods; if the monthly rate is $i$, a year is 12. So

$$(1 + i)^{12} = (1 + j)^{2}, \qquad \text{which gives} \qquad i = (1 + j)^{2/12} - 1 = (1 + j)^{1/6} - 1.$$

The same idea converts any rate to any period: match the growth over one common length of time, then take the right
root.

## Worked examples

**1. Monthly compounding.** 5000 dollars is invested at 6% compounded monthly for 3 years. Find the amount.

- $i = 0.06 \div 12 = 0.005$, $N = 12 \times 3 = 36$.
- $A = 5000 \times 1.005^{36} \approx 5983.40$ dollars.

**2. The two banks.** Find the effective annual rate of each offer from the start.

- Bank A: 6% compounded yearly, so EAR = 6%.
- Bank B: $\left(1 + \tfrac{0.059}{12}\right)^{12} - 1 \approx 0.06062$, so EAR ≈ **6.06%**.
- Bank B grows money faster, by about 0.06 percentage points a year.

**3. A credit card.** A credit card charges 19.99% a year compounded monthly on unpaid balances (a common level in
Canada; check the current rate on any real card). What is the effective annual rate?

- $i = 0.1999 \div 12 \approx 0.016658$.
- EAR $= (1.016658)^{12} - 1 \approx 0.2193$, about **21.93%** a year.
- A balance left unpaid for a whole year grows by almost 22%, not 20%.

**4. A mortgage rate.** A mortgage is quoted at 5% compounded semi-annually. Find the equivalent monthly rate.

- Semi-annual rate $j = 0.05 \div 2 = 0.025$.
- $i = 1.025^{1/6} - 1 \approx 0.0041239$, about **0.41239% a month**.
- Check: $1.0041239^{12} \approx 1.050625$ and $1.025^2 = 1.050625$. ✓ Both give an effective rate of 5.0625%.
- Note that $0.05 \div 12 \approx 0.0041667$ would be wrong: that is the rate for 5% compounded **monthly**, a
  slightly higher rate.

**5. Going backwards.** An account advertises an effective annual rate of 5%. What nominal rate compounded monthly is
that?

- $(1 + i)^{12} = 1.05$, so $i = 1.05^{1/12} - 1 \approx 0.0040741$.
- Nominal rate $r = 12i \approx 0.04889$, about **4.889% compounded monthly**.

## Try it

1. 8% a year compounded quarterly for 5 years. Find $i$ and $N$.
2. 2000 dollars is invested at 4.8% compounded monthly for 10 years. Find the amount.
3. Find the effective annual rate of 12% compounded monthly.
4. Find the effective annual rate of 3.65% compounded daily.
5. For a saver, which is better: 4.9% compounded monthly, or 5% compounded annually?
6. Find the monthly rate equivalent to 6% compounded semi-annually.
7. How many months does it take 1000 dollars to grow to at least 1500 dollars at 6% compounded monthly?
8. (Harder.) A payday lender charges 5% a week. What is the effective annual rate?

??? note "Answers"
    1. $i = 0.08 \div 4 = 0.02$; $N = 4 \times 5 = 20$.
    2. $i = 0.004$, $N = 120$: $2000 \times 1.004^{120} \approx 3229.06$ dollars.
    3. $1.01^{12} - 1 \approx 0.1268$, about **12.68%**.
    4. $\left(1 + \tfrac{0.0365}{365}\right)^{365} - 1 = 1.0001^{365} - 1 \approx 0.03717$, about **3.72%**.
    5. EAR of the first: $\left(1 + \tfrac{0.049}{12}\right)^{12} - 1 \approx 5.012\%$. That is slightly **more**
       than 5%, so 4.9% compounded monthly is (just) better.
    6. Semi-annual rate $0.03$; $i = 1.03^{1/6} - 1 \approx 0.004939$, about **0.4939% a month**.
    7. $1.005^N \ge 1.5$, so $N \ge \dfrac{\ln 1.5}{\ln 1.005} \approx 81.3$. After 81 months there is about 1497.79
       dollars; after 82, about 1505.28. So **82 months** (6 years 10 months).
    8. $1.05^{52} - 1 \approx 11.64$, an effective annual rate of about **1164%**. The money owed is multiplied by
       more than 12 in a year.

## Common mistake

**Comparing nominal rates with different compounding.** "5.9% monthly" against "6% yearly" is not a fair contest.
Convert both to effective annual rates first.

**Dividing an effective or semi-annual rate by 12.** Dividing by $n$ is right only for turning a **nominal** rate into
its own per-period rate. To change from one compounding period to another, match the growth over a year and take a
root, as in example 4.

## Where it leads

- Back: [Doubling time and half-life](02-doubling-half-life.md) · Next: [Present value](04-present-value.md), running
  the same formula backwards in time.
- [Level 7 page](index.md) · [Ratio, rates and money topic page](../index.md)
- The limit of compounding more and more often, and the number $e$:
  [Continuous compounding and the number e](../level-8/05-continuous-e.md).
- Equivalent monthly rates are the first step of every mortgage calculation: [Mortgages](../level-8/02-mortgages.md).
- Roots such as $1.05^{1/12}$: [Powers](../../numbers/level-5/03-powers.md) in Numbers.
