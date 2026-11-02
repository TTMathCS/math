---
title: "Planning a financial life"
---

# Planning a financial life

*Ratio, rates and money · level 7, lesson 7 of 7*

## A question to start

Many people believe that a raise can push you "into a higher tax bracket" so that you take home **less** money than
before. Some even turn down extra hours because of it.

In a bracket system like Canada's, this cannot happen. A raise always leaves you with more money after income tax,
never less. The reason is a piece of mathematics about **piecewise** rates: the higher rate applies only to the dollars
above the bracket line, not to all of your income. This lesson works through that idea and the other numbers of a
financial life: a pay cheque, a budget, an emergency fund and net worth. Everything here is the mathematics only, not
advice about what you personally should do.

## The idea

### Gross pay and net pay

Your **gross pay** is what you earn before anything is taken off. Your **net pay** (or take-home pay) is what actually
arrives in your account. In between are **deductions**. In Canada, an employer normally takes off:

- **income tax**, both federal and provincial or territorial;
- contributions to the **Canada Pension Plan** (CPP), or the Québec Pension Plan in Québec;
- **Employment Insurance** (EI) premiums;
- sometimes workplace pension, benefits or union dues.

The rates, brackets and limits for all of these change, usually every year. **Check the current rates** with the
Canada Revenue Agency or your province before using real numbers. The examples below use made-up round numbers so the
mathematics is easy to see.

### How tax brackets work: marginal and average rates

Income tax is charged at different rates on different **slices** of income. Here is a made-up system, the "Example
tax", that works the way real Canadian brackets do:

| Slice of yearly income | Rate on that slice |
| --- | --- |
| first 15 000 dollars | 0% |
| from 15 000 to 50 000 | 15% |
| from 50 000 to 100 000 | 25% |
| above 100 000 | 35% |

Someone earning 60 000 dollars pays nothing on the first 15 000, 15% on the next 35 000, and 25% only on the 10 000
above 50 000:

$$0 + 0.15 \times 35\,000 + 0.25 \times 10\,000 = 5250 + 2500 = 7750 \text{ dollars}.$$

Two different "tax rates" describe this person:

- The **marginal rate** is the rate on the **next** dollar earned: here 25%.
- The **average rate** (or effective rate) is total tax divided by income: $7750 \div 60\,000 \approx 12.9\%$.

The average rate is always at or below the marginal rate, because the lower slices are taxed less.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 220" role="img" aria-label="Graph of tax owed against income in the Example tax: flat at zero up to 15000, then rising in straight pieces that get steeper at 50000 and 100000, with no jumps">
  <line x1="40" y1="180" x2="350" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="180" x2="40" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="40,180 77.5,180 165,145 290,61.7 340,15" fill="none" stroke="#eea66f" stroke-width="3"/>
  <line x1="77.5" y1="176" x2="77.5" y2="184" stroke="currentColor"/>
  <line x1="165" y1="176" x2="165" y2="184" stroke="currentColor"/>
  <line x1="290" y1="176" x2="290" y2="184" stroke="currentColor"/>
  <text x="77.5" y="197" font-size="10" text-anchor="middle" fill="currentColor">15k</text>
  <text x="165" y="197" font-size="10" text-anchor="middle" fill="currentColor">50k</text>
  <text x="290" y="197" font-size="10" text-anchor="middle" fill="currentColor">100k</text>
  <text x="120" y="155" font-size="10" fill="currentColor">slope 0.15</text>
  <text x="235" y="118" font-size="10" fill="currentColor">slope 0.25</text>
  <text x="300" y="55" font-size="10" fill="currentColor">0.35</text>
  <text x="195" y="214" font-size="11" text-anchor="middle" fill="currentColor">income (dollars)</text>
  <text x="46" y="20" font-size="11" fill="currentColor">tax owed</text>
</svg>
</div>

The graph of tax against income is made of straight pieces that join with **no jumps**: it gets steeper at each
bracket line, but it never leaps up. Each slope is the marginal rate, and every slope is less than 1. That is the
whole proof that a raise never lowers take-home pay: earning 1 more dollar raises tax by at most 35 cents, so at least
65 cents of every extra dollar is kept. (Some benefits that shrink as income rises can, in special cases, make the
combined picture more complicated; that is a different effect from tax brackets.)

### A budget in ratios

A **budget** compares money coming in with money going out, per month. Useful ratios:

- **Savings rate** = savings ÷ net income. Saving 600 dollars of a 3960 dollar net income is a savings rate of about
  15.2%.
- **Housing ratio** = housing costs ÷ income. Lenders use ratios like this when deciding how much to lend (check
  current lending rules).
- Rules of thumb such as "50% needs, 30% wants, 20% saving" are sometimes quoted. They are only starting points for
  thinking, not laws, and they fit some incomes much better than others.

Costs that stay the same each month (rent, a phone plan) are **fixed**; costs that change (food, fuel) are
**variable**, as in [level 4](../level-4/index.md).

### An emergency fund

An **emergency fund** is money kept somewhere safe and easy to reach, for a lost job or a broken furnace. A guideline
often quoted is three to six months of essential costs. Working out how long it takes to build one is an annuity
problem from [lesson 5](05-annuities.md).

### Net worth: assets minus liabilities

A person's financial position at one moment is summed up by

$$\text{net worth} = \text{assets} - \text{liabilities}.$$

**Assets** are what you own that has money value: bank balances, investments, a car (at what it could be sold for
today, not what it cost), a home. **Liabilities** are what you owe: a student loan, a car loan, a credit-card balance,
a mortgage. Net worth can be negative, which is common for students and new graduates with loans. What usually matters
more than the number itself is its **direction** from year to year.

Paying off a debt from savings does not change net worth (an asset and a liability shrink by the same amount), but it
can change next year's net worth, because the debt was costing more interest than the savings earned.

## Worked examples

**1. Average and marginal rates.** In the Example tax, find the tax, the average rate and the marginal rate for an
income of 80 000 dollars.

- $0.15 \times 35\,000 + 0.25 \times 30\,000 = 5250 + 7500 = 12\,750$ dollars.
- Average rate $12\,750 \div 80\,000 \approx 15.9\%$. Marginal rate 25%.

**2. Crossing a bracket line.** A raise takes income from 49 000 to 51 000 dollars, crossing the 50 000 line. Compare
after-tax income.

- At 49 000: tax $0.15 \times 34\,000 = 5100$; after tax $43\,900$.
- At 51 000: tax $5250 + 0.25 \times 1000 = 5500$; after tax $45\,500$.
- The raise of 2000 dollars adds 1600 dollars after tax. Only the 1000 dollars above 50 000 was taxed at 25%.

**3. A pay cheque.** A salary of 60 000 dollars is paid every two weeks (26 pays). Suppose one pay's deductions are
income tax 298.08, pension plan 120.00, employment insurance 37.00 and benefits 25.00 dollars (made-up figures). Find
the net pay and what percent of gross it is.

- Gross per pay: $60\,000 \div 26 \approx 2307.69$ dollars.
- Deductions: $298.08 + 120.00 + 37.00 + 25.00 = 480.08$ dollars.
- Net: $2307.69 - 480.08 = 1827.61$ dollars, about **79.2%** of gross.

**4. Building an emergency fund.** Essential costs are 2400 dollars a month. Using three months as the target, how
long does it take to save it with 400 dollars a month, at 3% compounded monthly?

- Target $3 \times 2400 = 7200$ dollars. $i = 0.0025$.
- $400 \times \dfrac{1.0025^{N} - 1}{0.0025} \ge 7200$ gives $1.0025^N \ge 1.045$, so $N \ge \dfrac{\ln 1.045}{\ln
  1.0025} \approx 17.6$.
- **18 months** (about 7355 dollars by then; 17 months gives only about 6938).

**5. Net worth.** Assets: chequing 1800, savings 6500, a car worth 14 000. Liabilities: student loan 18 000, car loan
9000, credit card 700 dollars.

- Assets $1800 + 6500 + 14\,000 = 22\,300$. Liabilities $18\,000 + 9000 + 700 = 27\,700$.
- Net worth $22\,300 - 27\,700 = -5400$ dollars.

## Try it

1. In the Example tax, find the tax and the average rate on incomes of 30 000 and 150 000 dollars.
2. Someone in the Example tax earns 75 000 dollars and gets a 1000 dollar bonus. How much extra tax is owed on it?
3. Explain, using the graph, why someone with a bigger income in the Example tax always keeps more after tax.
4. Gross pay is 3200 dollars a month and deductions total 22% of gross. Find the net pay.
5. Assets 45 000, liabilities 52 000 dollars. Find the net worth. A year later assets are 51 000 and liabilities
   49 500. By how much has net worth changed?
6. Net income is 3200 dollars a month; fixed costs are 1900 and variable costs 900. How much is left to save, and what
   is the savings rate?
7. How many months of saving 250 dollars a month, with no interest, build an emergency fund of 4 months of 1875 dollars
   of essential costs?
8. (Harder.) A flat tax charges one rate on all income. What flat rate collects the same tax as the Example tax from
   someone earning 60 000? Using that flat rate, compare the tax on incomes of 30 000 and 150 000 with the Example
   tax.

??? note "Answers"
    1. 30 000: $0.15 \times 15\,000 = 2250$ dollars, average $2250 \div 30\,000 = 7.5\%$. 150 000:
       $5250 + 0.25 \times 50\,000 + 0.35 \times 50\,000 = 5250 + 12\,500 + 17\,500 = 35\,250$ dollars, average
       $23.5\%$.
    2. The marginal rate at 75 000 is 25% (and 76 000 is still under 100 000), so $0.25 \times 1000 = 250$ dollars.
    3. The tax graph has no jumps and every slope is below 1, so tax rises more slowly than income: after-tax income
       (income minus tax) always increases when income increases.
    4. $3200 \times (1 - 0.22) = 3200 \times 0.78 = 2496$ dollars.
    5. Net worth $45\,000 - 52\,000 = -7000$. A year later $51\,000 - 49\,500 = 1500$. It rose by **8500 dollars**.
    6. $3200 - 1900 - 900 = 400$ dollars; savings rate $400 \div 3200 = 12.5\%$.
    7. Target $4 \times 1875 = 7500$ dollars; $7500 \div 250 = 30$ months.
    8. Rate $7750 \div 60\,000 \approx 12.92\%$. At 30 000: flat about 3875 dollars against 2250 in the Example tax.
       At 150 000: flat about 19 375 against 35 250. The bracket system takes a smaller share of small incomes and a
       larger share of large ones; this is what **progressive** tax means.

## Common mistake

**Applying the top rate to all income.** Someone at 60 000 dollars in the Example tax does not pay 25% of 60 000
(15 000 dollars). They pay 25% only on the 10 000 dollars above 50 000, 7750 dollars in all. Confusing the marginal
and average rates is the source of the "raise that lowers your pay" myth.

**Counting things at what they cost.** In a net worth statement, a car is an asset at what it could be sold for now,
which is usually much less than its price. Depreciation from [level 6](../level-6/index.md) applies.

## Where it leads

- Back: [Present value of an annuity](06-annuity-present-value.md) · Next level: [Loans, investing and
  e](../level-8/index.md), starting with [Loans and amortization](../level-8/01-loans-amortization.md).
- [Level 7 page](index.md) · [Ratio, rates and money topic page](../index.md)
- Piecewise functions and their graphs: [Algebra](../../algebra/index.md). The slope of a graph as a rate:
  [Change](../../change/index.md).
- Budgets, fixed and variable costs: [level 4](../level-4/index.md). Credit and inflation: [level
  6](../level-6/index.md).
