---
title: "Comparing options"
---

# Comparing options

*Ratio, rates and money · level 6, lesson 6 of 7*

## A question to start

Two phone plans:

- **Plan A**: 45 dollars a month, unlimited data.
- **Plan B**: 25 dollars a month, plus 4 dollars for every gigabyte (GB) of data you use.

Which is cheaper?

The honest answer is: **it depends**, and the useful answer is exactly **what it depends on**. If you use less than
5 GB a month, Plan B is cheaper; if you use more, Plan A is. Big money decisions (phones, cars, homes, bank accounts)
almost never have one right answer for everybody. What math gives you is a way to find the right answer **for you**,
and to see through offers that are designed to look better than they are.

## The idea

### Step 1: put everything on the same footing

To compare options fairly, compare the **total cost over the same period**, including every cost. This is the money
version of comparing unit prices ([level 3](../level-3/04-rates-unit-rates.md)): you can only compare like with like.

- Turn monthly costs, yearly costs and one-time costs into one total (for example, over 2 years).
- Include fees, deposits, taxes and what the thing is worth at the end.
- Subtract anything you get back (selling the car later, a refund).

### Step 2: find the break-even point

When one option has a **fixed cost** and another a **cost per use**, there is a usage where they cost the same: the
**break-even point**. Below it one option wins; above it the other does.

For the phone plans, with $g$ GB a month:

$$\text{Plan A} = 45, \qquad \text{Plan B} = 25 + 4g.$$

They are equal when $25 + 4g = 45$, so $4g = 20$ and $g = 5$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 200" role="img" aria-label="Monthly cost against gigabytes used. Plan A is a flat line at 45 dollars. Plan B starts at 25 dollars and rises 4 dollars per gigabyte. The lines cross at 5 gigabytes, where both cost 45 dollars">
  <line x1="40" y1="170" x2="420" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="170" x2="40" y2="20" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="80" x2="400" y2="80" stroke="#9cc9ea" stroke-width="3"/>
  <line x1="40" y1="120" x2="400" y2="40" stroke="#eea66f" stroke-width="3"/>
  <circle cx="220" cy="80" r="5" fill="currentColor"/>
  <line x1="220" y1="80" x2="220" y2="170" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="220" y="186" font-size="11" text-anchor="middle" fill="currentColor">5 GB</text>
  <text x="400" y="186" font-size="11" text-anchor="middle" fill="currentColor">10 GB</text>
  <text x="34" y="84" font-size="11" text-anchor="end" fill="currentColor">45</text>
  <text x="34" y="124" font-size="11" text-anchor="end" fill="currentColor">25</text>
  <text x="408" y="84" font-size="11" fill="currentColor">A</text>
  <text x="408" y="44" font-size="11" fill="currentColor">B</text>
  <text x="130" y="150" font-size="11" text-anchor="middle" fill="currentColor">B cheaper</text>
  <text x="310" y="150" font-size="11" text-anchor="middle" fill="currentColor">A cheaper</text>
</svg>
</div>

Why does this work? Plan B costs 4 dollars more for each extra GB, while Plan A stays the same. Plan B starts
20 dollars cheaper, and each GB eats 4 dollars of that head start; after $20 \div 4 = 5$ GB the head start is gone.

Then look at your own usage, honestly, over a few months, and choose. If you use 3 GB, Plan B costs 37 dollars; if you
use 8 GB, it costs 57 dollars.

### Paying now or paying over time

Many things can be bought outright or paid off monthly: a phone "included" in a plan, furniture "on easy payments", a
car. Always compute the **total** of the monthly payments and compare it with the price. The difference is the cost of
paying over time, which is interest even when nobody calls it that.

### Depreciation and appreciation

Things change value after you buy them.

- **Depreciation** means losing value. Cars, phones and computers depreciate. A new car often loses a large part of its
  value in the first few years (the exact amount varies a lot by model).
- **Appreciation** means gaining value. A home **may** appreciate over the years, and so may some collectibles. This
  is not guaranteed: home prices can also fall, sometimes for years.

Two models of depreciation:

- **Straight-line**: the same **amount** each year. A 1500 dollar laptop losing 300 dollars a year is worth 1200, 900,
  600, ... Linear, like simple interest.
- **Percent (declining balance)**: the same **percent** each year, so the value is multiplied by the same factor:
  $V = P(1 - d)^n$. A car losing 15% a year is multiplied by 0.85 each year. This is compound interest running
  backwards, and the value never quite reaches zero.

Appreciation at a fixed percent is exactly compound growth: $V = P(1 + a)^n$.

### Buying, leasing and renting

- **Buying**: you pay the full price (often with a loan), you own the thing, and at the end you have whatever it is
  still worth.
- **Leasing** (common for cars): you pay monthly to use it for a set time, often with a payment up front, then give it
  back. Leases often have limits, such as a maximum number of kilometres, with fees for going over. You own nothing at
  the end.
- **Renting** (common for homes): you pay to live there; the owner pays for the building and its repairs and keeps any
  rise in its value.

To compare buying and leasing, compare the **net cost**: for buying, the price minus what it is worth when you sell it
(plus any loan interest); for leasing, all the payments and fees.

### Reading the fine print

Offers are written to look good. Before you sign, look for:

- **Introductory rates**: "0% for 6 months" may become 25% after that.
- **Fees**: monthly account fees, annual card fees, setup fees, cancellation fees, late fees.
- **Limits**: a "free" bank account with only a few free transactions a month, a lease with a kilometre limit.
- **The total**: "only 25 dollars a month" means nothing until you know for how many months.

Prices, fees and rates in this lesson are examples; real ones change, so check the current ones.

## Worked examples

**1. Break-even.** Plan A is 45 dollars a month; Plan B is 25 dollars plus 4 dollars per GB.

- Equal when $25 + 4g = 45$: $g = 5$ GB. Use less than 5 GB, choose B; more, choose A.

**2. A phone over 2 years.** Option 1: buy a phone for 1000 dollars and a plan at 40 dollars a month. Option 2: a plan
"with the phone included" at 85 dollars a month for 24 months.

- Option 1: $1000 + 24 \times 40 = 1960$ dollars.
- Option 2: $24 \times 85 = 2040$ dollars.
- Option 2 costs **80 dollars more**: that is the price of paying for the phone over time.

**3. A car depreciating.** A 30 000 dollar car loses 15% of its value each year. Its value after 4 years?

- $30\,000 \times 0.85^4 \approx$ **15 660.19 dollars**. Year by year: 25 500, 21 675, 18 423.75, 15 660.19.

**4. Buy or lease?** The same car over 4 years. Buying: pay 30 000 dollars, sell for about 15 660 dollars after
4 years. Leasing: 2000 dollars up front plus 400 dollars a month for 48 months.

- Buying, net: $30\,000 - 15\,660 = 14\,340$ dollars (plus interest if you borrowed the money).
- Leasing: $2000 + 48 \times 400 = 21\,200$ dollars, and you own nothing.
- In this example buying is cheaper by about 6860 dollars, if you can pay or borrow cheaply. Insurance and repairs
  would change the picture, so a real comparison includes them too.

**5. A home appreciating.** If a 400 000 dollar home appreciated by 3% a year for 10 years, its value would be

- $400\,000 \times 1.03^{10} \approx$ **537 567 dollars**. "If" is the key word: prices may rise more slowly, or fall.

**6. A bank account.** Account X costs 4 dollars a month and includes 12 transactions. Account Y has no monthly fee but
charges 1.25 dollars per transaction. You make 10 transactions a month.

- X: 4 dollars. Y: $10 \times 1.25 = 12.50$ dollars. X is cheaper for you. (Break-even: $4 \div 1.25 = 3.2$
  transactions; above 3 a month, X wins.)

## Try it

1. Gym A costs 30 dollars a month. Gym B charges 10 dollars a visit. How many visits a month make them cost the same?
   Which should someone who goes twice a week choose?
2. A streaming service costs 12.99 dollars a month, or 119.99 dollars for a year paid at once. How much does the yearly
   option save? What percent is that?
3. A 24 000 dollar car loses 20% of its value each year. What is it worth after 3 years?
4. A 1500 dollar laptop loses 300 dollars of value each year (straight-line). What is it worth after 3 years? What would
   it be worth if it lost 30% a year instead?
5. Lease: 1500 dollars up front and 350 dollars a month for 36 months. Buy: 28 000 dollars, and sell for 16 000 dollars
   after 3 years. Which is cheaper over 3 years, and by how much (ignoring interest and other costs)?
6. A card offers "0% for 6 months, then 24% a year". You buy a 1200 dollar sofa and pay 100 dollars a month for
   6 months. Then interest starts on what is left. What is the first month's interest after the 6 months?
7. If a 350 000 dollar home appreciated by 4% a year for 5 years, what would it be worth?
8. Plan A costs 60 dollars a month with plenty of data. Plan B costs 40 dollars plus 2 dollars per GB. Find the
   break-even point.

??? note "Answers"
    1. $30 \div 10 = 3$ visits. Twice a week is about 8 or 9 visits a month, which would cost 80 or 90 dollars at
       Gym B, so **Gym A** is far cheaper for them.
    2. Monthly for a year: $12 \times 12.99 = 155.88$ dollars. Saving: $155.88 - 119.99 = 35.89$ dollars, which is
       $\dfrac{35.89}{155.88} \approx 23\%$.
    3. $24\,000 \times 0.80^3 = 24\,000 \times 0.512 = 12\,288$ dollars.
    4. Straight-line: $1500 - 3 \times 300 = 600$ dollars. At 30% a year: $1500 \times 0.70^3 = 1500 \times 0.343 =
       514.50$ dollars.
    5. Lease: $1500 + 36 \times 350 = 14\,100$ dollars. Buy: $28\,000 - 16\,000 = 12\,000$ dollars. Buying is cheaper
       by **2100 dollars** in this example.
    6. After 6 payments, $1200 - 600 = 600$ dollars is left. One month at 24% a year: $600 \times \dfrac{0.24}{12} =
       12$ dollars.
    7. $350\,000 \times 1.04^5 \approx 425\,829$ dollars (if prices really did rise that way).
    8. $40 + 2g = 60$, so $g = 10$ GB. Under 10 GB, Plan B is cheaper; over 10 GB, Plan A is.

## Common mistake

**Comparing monthly prices instead of totals.** A lower monthly payment can cost more overall, because it lasts longer
or hides the price of something else. Always multiply out to the same period.

**Forgetting what something is worth at the end.** A bought car still has value after 4 years; a leased one does not
belong to you. A fair comparison counts that.

## Where it leads

- Back: [Credit and debt](05-credit-and-debt.md) · Next: [Inflation](07-inflation.md)
- [Level 6 page](index.md) · [Ratio, rates and money topic page](../index.md)
- Straight lines that cross, and solving $25 + 4g = 45$: [Algebra](../../algebra/index.md).
- Declining-balance depreciation is compound interest backwards: [Compound interest](04-compound-interest.md).
- Loans, mortgages and investing in depth: [Level 7](../level-7/index.md) and [Level 8](../level-8/index.md).
