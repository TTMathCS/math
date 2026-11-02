---
title: "Compound interest"
---

# Compound interest

*Ratio, rates and money · level 6, lesson 4 of 7*

## A question to start

Two friends each put 1000 dollars into savings at 5% a year and leave it alone for 30 years.

- Ari's account pays **simple** interest: 5% of the original 1000 dollars every year.
- Bo's account pays **compound** interest: every year, 5% of whatever is in the account **now**.

After 30 years, Ari has 2500 dollars. How much does Bo have? Guess before you read on. Most people guess a little
more than 2500.

Bo has about **4322 dollars**: Bo's interest is almost **twice** Ari's ($3322$ against $1500$). Same money, same
rate, same time. The only difference is that Bo's interest earns interest too. This lesson explains how that small
detail grows into a big difference.

## The idea

### Interest on interest

In [simple interest](../level-5/06-simple-interest.md), the interest is always worked out on the original principal,
so the same amount is added every year.

With **compound interest**, the interest is added to the account at the end of each year (or other period), and from
then on it earns interest too. Adding interest to the account like this is called **compounding**. Each year you
earn 5% of a bigger amount, so each year's interest is bigger than the last.

### The year-by-year table

Here is 1000 dollars at 5% a year, compounded once a year. Each year, interest is 5% of the balance at the start of
that year.

| Year | Start of year | Interest (5%) | End of year |
| --- | --- | --- | --- |
| 1 | 1000.00 | 50.00 | 1050.00 |
| 2 | 1050.00 | 52.50 | 1102.50 |
| 3 | 1102.50 | 55.13 | 1157.63 |
| 4 | 1157.63 | 57.88 | 1215.51 |
| 5 | 1215.51 | 60.78 | 1276.28 |

(Each line is rounded to the cent; the exact values differ by a fraction of a cent.)

With simple interest, every year's interest would be 50.00 dollars, and after 5 years you would have 1250 dollars. With
compounding you have 1276.28 dollars. The extra 26.28 dollars is interest earned on interest.

### From the table to a formula

Adding 5% is multiplying by 1.05 ([lesson 1](01-multipliers.md)). So each row of the table is the row before
times 1.05:

- after 1 year: $1000 \times 1.05$;
- after 2 years: $1000 \times 1.05 \times 1.05 = 1000 \times 1.05^2$;
- after 3 years: $1000 \times 1.05^3$;
- after $n$ years: $1000 \times 1.05^n$.

In general, a principal $P$ at a rate $i$ per period (as a decimal) for $n$ periods grows to

$$A = P(1 + i)^n$$

- $A$ is the **amount** (the final balance);
- $P$ is the **principal** (the starting amount);
- $i$ is the **interest rate per compounding period**, as a decimal;
- $n$ is the **number of compounding periods**.

In this lesson interest is compounded once a year, so $i$ is the yearly rate and $n$ is the number of years. Banks
also compound monthly or daily, which changes $i$ and $n$; that is in [level 7](../level-7/index.md).

The **interest earned** is $A - P$.

This is the same pattern as a [geometric sequence](../../patterns/index.md): multiply by the same number, 1.05, each
time.

### Simple against compound on a graph

Here is 1000 dollars at 8% a year for 30 years. The straight line is simple interest (adding 80 dollars a year); the
curve is compound interest (multiplying by 1.08 a year).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 200" role="img" aria-label="A graph over 30 years. Simple interest is a straight line rising from 1000 to 3400 dollars. Compound interest is a curve that starts on top of the line, bends upward and reaches about 10 000 dollars">
  <line x1="40" y1="170" x2="420" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="170" x2="40" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <text x="34" y="144" font-size="10" text-anchor="end" fill="currentColor">2000</text>
  <text x="34" y="114" font-size="10" text-anchor="end" fill="currentColor">4000</text>
  <text x="34" y="84" font-size="10" text-anchor="end" fill="currentColor">6000</text>
  <text x="34" y="54" font-size="10" text-anchor="end" fill="currentColor">8000</text>
  <text x="34" y="24" font-size="10" text-anchor="end" fill="currentColor">10000</text>
  <text x="40" y="186" font-size="10" text-anchor="middle" fill="currentColor">0</text>
  <text x="160" y="186" font-size="10" text-anchor="middle" fill="currentColor">10</text>
  <text x="280" y="186" font-size="10" text-anchor="middle" fill="currentColor">20</text>
  <text x="400" y="186" font-size="10" text-anchor="middle" fill="currentColor">30 years</text>
  <line x1="40" y1="155" x2="400" y2="119" stroke="#9cc9ea" stroke-width="3"/>
  <polyline points="40,155.0 52,153.8 64,152.5 76,151.1 88,149.6 100,148.0 112,146.2 124,144.3 136,142.2 148,140.0 160,137.6 172,135.0 184,132.2 196,129.2 208,125.9 220,122.4 232,118.6 244,114.5 256,110.1 268,105.3 280,100.1 292,94.5 304,88.5 316,81.9 328,74.9 340,67.3 352,59.1 364,50.2 376,40.6 388,30.2 400,19.1" fill="none" stroke="#eea66f" stroke-width="3"/>
  <text x="408" y="123" font-size="11" fill="currentColor">simple</text>
  <text x="330" y="40" font-size="11" fill="currentColor">compound</text>
</svg>
</div>

| After | Simple: $1000 + 80t$ | Compound: $1000 \times 1.08^t$ |
| --- | --- | --- |
| 5 years | 1400 | 1469.33 |
| 10 years | 1800 | 2158.92 |
| 20 years | 2600 | 4660.96 |
| 30 years | 3400 | 10 062.66 |

For the first few years the two are close. Then the compound curve bends upward and leaves the line far behind. After
30 years compound interest gives almost **three times** as much. This is the difference between **linear growth**
(adding the same amount) and **exponential growth** (multiplying by the same factor). In the long run, exponential
growth always wins.

Why does the curve bend? Because each year's interest is 8% of a bigger balance than the year before, so the steps
keep getting taller. The interest in year 30 alone is $0.08 \times 1000 \times 1.08^{29} \approx 745$ dollars, nine
times the 80 dollars of year 1.

### Two lessons for real life

- **Start early.** Time is the power in $(1 + i)^n$. Money saved at 15 has many more years to compound than money
  saved at 35.
- **Compounding works against you on debt.** If you owe money and do not pay the interest, the unpaid interest is
  added to what you owe and then charged interest too. That is the story of the [next lesson](05-credit-and-debt.md).

Real rates change over time, and differ between banks and accounts, so the rates here are examples: check the current
rate before you decide.

## Worked examples

**1. Using the formula.** 2500 dollars at 4% a year, compounded yearly, for 10 years.

- $A = 2500 \times 1.04^{10} \approx 2500 \times 1.48024 \approx$ **3700.61 dollars**.
- Interest earned: $3700.61 - 2500 = 1200.61$ dollars. (Simple interest would give $2500 \times 0.04 \times 10 =
  1000$ dollars.)

**2. The question.** 1000 dollars at 5% for 30 years.

- Simple: $1000 \times (1 + 0.05 \times 30) = 2500$ dollars.
- Compound: $1000 \times 1.05^{30} \approx$ **4321.94 dollars**.

**3. A GIC.** A **GIC** (Guaranteed Investment Certificate) is a Canadian savings product that locks your money in for
a fixed time at a fixed rate. 5000 dollars in a 3-year GIC at 3% a year, compounded yearly.

- $A = 5000 \times 1.03^3 = 5000 \times 1.092727 \approx$ **5463.64 dollars**. Interest: 463.64 dollars.

**4. How long to double?** At 6% a year compounded yearly, how many whole years until 1000 dollars becomes at least
2000?

- Try powers of 1.06: $1.06^{11} \approx 1.898$ (not yet), $1.06^{12} \approx 2.012$ (yes).
- **12 years.** (A neat shortcut, the "rule of 72", gives $72 \div 6 = 12$; it is explained in
  [level 7](../level-7/index.md).)

## Try it

1. Make a year-by-year table for 2000 dollars at 3% a year, compounded yearly, for 3 years.
2. Use the formula: 800 dollars at 6% a year, compounded yearly, for 4 years.
3. 5000 dollars at 2.5% a year, compounded yearly, for 10 years. How much interest is earned?
4. 3000 dollars is invested for 20 years at 7% a year. Find the final amount with simple interest and with compound
   interest.
5. Which is better for 10 years: 5% a year simple interest, or 4.5% a year compounded yearly? (Hint: compare what
   each does to 1 dollar.)
6. At 8% a year compounded yearly, after how many whole years has money at least doubled?
7. You owe 1000 dollars at 20% a year, compounded yearly, and pay nothing for 3 years. How much do you owe?
8. In the table for 1000 dollars at 5%, explain in words why the interest in year 2 (52.50) is more than in year 1
   (50.00).

??? note "Answers"
    1. Year 1: interest $0.03 \times 2000 = 60$, end 2060.00. Year 2: interest $0.03 \times 2060 = 61.80$, end
       2121.80. Year 3: interest $0.03 \times 2121.80 = 63.654 \approx 63.65$, end 2185.45.
    2. $800 \times 1.06^4 \approx 800 \times 1.262477 \approx 1009.98$ dollars.
    3. $5000 \times 1.025^{10} \approx 6400.42$ dollars. Interest: $6400.42 - 5000 = 1400.42$ dollars.
    4. Simple: $3000 \times (1 + 0.07 \times 20) = 3000 \times 2.4 = 7200$ dollars. Compound:
       $3000 \times 1.07^{20} \approx 11\,609.05$ dollars.
    5. Simple: 1 dollar becomes $1 + 0.05 \times 10 = 1.50$. Compound: $1.045^{10} \approx 1.553$. The **compound**
       account is better, even with the lower rate.
    6. $1.08^9 \approx 1.9990$ (just short of 2), $1.08^{10} \approx 2.1589$. So **10 whole years** (it is very nearly
       doubled after 9).
    7. $1000 \times 1.2^3 = 1000 \times 1.728 = 1728$ dollars.
    8. In year 2 the 5% is worked out on 1050 dollars, which includes the 50 dollars of interest from year 1. The extra
       2.50 dollars is 5% of that first year's interest: interest earning interest.

## Common mistake

**Multiplying the rate by the years.** $1000 \times 1.05^{30}$ is not $1000 \times (1 + 0.05 \times 30)$. The first is
compound, the second simple. Repeated percent increases multiply; they do not add.

**Forgetting the order of operations.** In $P(1 + i)^n$, add first, then raise to the power, then multiply by $P$.
$1000 \times 1.05^{30}$ is not $(1000 \times 1.05)^{30}$, which would be an absurdly huge number.

## Where it leads

- Back: [Percent and percentage points](03-percentage-points.md) · Next: [Credit and debt](05-credit-and-debt.md)
- [Level 6 page](index.md) · [Ratio, rates and money topic page](../index.md)
- Simple interest, to compare: [Simple interest](../level-5/06-simple-interest.md).
- Compounding monthly or daily, doubling time and the rule of 72: [Level 7](../level-7/index.md).
- Powers and exponents: [Numbers](../../numbers/index.md). Exponential functions: [Algebra](../../algebra/index.md).
  Geometric sequences: [Patterns](../../patterns/index.md).
- At university, sequences like $1000 \times 1.05^n$ are studied in
  [MAT137 Unit 11: Sequences](../../../uoft/MAT137/unit11.md).
