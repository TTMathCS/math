---
title: "Simple interest"
---

# Simple interest

*Ratio, rates and money · level 5, lesson 6 of 7*

## A question to start

A bank advertises a savings account that pays **3% interest**. You put in 1000 dollars and take it out again
4 months later. Do you get 3% of 1000, which is 30 dollars, on top?

No. You get about **10 dollars**. The 3% is a rate **per year**, and you only kept the money in the bank for a third
of a year. Interest is a rate, just like a speed: "3% a year" is like "80 km per hour", and how far you get depends on
how long you keep going.

## The idea

### Renting money

**Interest** is the price of using someone else's money for a while. It works in both directions.

- When you **save** money in a bank, the bank uses your money (it lends it to other people), so the bank pays **you**
  interest.
- When you **borrow** money, you use the lender's money, so **you** pay the lender interest.

Think of it as rent: you pay rent to use an apartment, and you pay interest to use money.

### The words

| Word | Meaning | Letter |
| --- | --- | --- |
| **Principal** | The amount saved or borrowed at the start | $P$ |
| **Interest rate** | The percent charged or paid **per year** (written as a decimal in formulas) | $r$ |
| **Time** | How long, **in years** | $t$ |
| **Interest** | The extra money paid or earned | $I$ |
| **Amount** | Principal plus interest, the total at the end | $A$ |

"Per year" is sometimes written **per annum** (Latin for "per year") or "p.a.". Unless a rate clearly says
otherwise, an interest rate is a yearly rate.

### Simple interest: I = Prt

With **simple interest**, the interest is worked out on the **original principal only**, every year the same:

$$I = P \times r \times t$$

**Why this formula?** In one year, the interest is the rate times the principal: $r \times P$. For example, 3% of 1000
dollars is $0.03 \times 1000 = 30$ dollars. Simple interest pays that same amount every year. After 2 years it is
$2 \times 30$; after $t$ years it is $t \times 30$, which is $t \times r \times P$. Nothing more to it than "the yearly
interest, times the number of years".

The formula also shows that interest is **directly proportional** to each of the three: double the principal, the
rate or the time (with the other two fixed), and the interest doubles. That is [lesson 2](02-direct-inverse.md) again.

The total at the end is the principal plus the interest:

$$A = P + I = P + Prt = P(1 + rt)$$

### A picture: the same step every year

Here is 1000 dollars at 10% simple interest (a big rate, so the steps are easy to see). Blue is the principal, orange
the interest so far.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 200" role="img" aria-label="Six bars for years 0 to 5. Each bar has the same blue principal part, with an orange interest part on top that grows by the same step each year">
  <line x1="25" y1="170" x2="445" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <rect x="40" y="70" width="40" height="100" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="110" y="70" width="40" height="100" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="110" y="60" width="40" height="10" fill="#eea66f" stroke="currentColor"/>
  <rect x="180" y="70" width="40" height="100" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="180" y="50" width="40" height="20" fill="#eea66f" stroke="currentColor"/>
  <rect x="250" y="70" width="40" height="100" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="250" y="40" width="40" height="30" fill="#eea66f" stroke="currentColor"/>
  <rect x="320" y="70" width="40" height="100" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="320" y="30" width="40" height="40" fill="#eea66f" stroke="currentColor"/>
  <rect x="390" y="70" width="40" height="100" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="390" y="20" width="40" height="50" fill="#eea66f" stroke="currentColor"/>
  <text x="60" y="186" font-size="11" text-anchor="middle" fill="currentColor">year 0</text>
  <text x="130" y="186" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <text x="200" y="186" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <text x="270" y="186" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <text x="340" y="186" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <text x="410" y="186" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <text x="60" y="62" font-size="11" text-anchor="middle" fill="currentColor">1000</text>
  <text x="410" y="14" font-size="11" text-anchor="middle" fill="currentColor">1500</text>
</svg>
</div>

The total goes 1000, 1100, 1200, 1300, 1400, 1500: the **same amount added** each year. That makes simple interest
**linear** growth: on a graph the totals lie on a straight line (but not through the origin, because it starts at
1000). In [level 6](../level-6/index.md) you will meet **compound** interest, where the orange part itself earns
interest and the steps get bigger every year.

### Time that is not whole years

Since $r$ is a yearly rate, $t$ must be in years.

- **Months:** divide by 12. 4 months is $t = \dfrac{4}{12} = \dfrac13$ year.
- **Days:** divide by 365. 90 days is $t = \dfrac{90}{365}$ year. (Some banks use 360 days instead, which gives
  slightly more interest; the fine print says which.)

That answers the question: $I = 1000 \times 0.03 \times \dfrac{4}{12} = 10$ dollars.

### Using the formula backwards

$I = Prt$ has four letters. If you know any three, you can find the fourth by dividing:

$$P = \frac{I}{rt}, \qquad r = \frac{I}{Pt}, \qquad t = \frac{I}{Pr}.$$

### Where you meet simple interest

Real savings accounts and most loans use **compound** interest, but simple interest still appears: some short loans,
some bonds that pay the same interest every year, car loans in some places, and as a first quick estimate. Real
interest rates also change over time, so the rates in this lesson are examples: check the current rate before you
save or borrow.

### A warning about short loans

A rate per year makes very different loans comparable. Suppose a short-term lender charges a fee of 15 dollars for
every 100 dollars borrowed for 2 weeks. That sounds small. But 15% for 14 days, as a simple yearly rate, is
$0.15 \times \dfrac{365}{14} \approx 3.91$, which is about **391% a year**. Compare that with a credit card at about
20% a year. Always turn a fee into a yearly rate before you decide.

<figure class="play" data-play="interest" data-mode="both"><span class="ai-tag">AI-created</span><figcaption><b>Simple against compound.</b> Simple interest is a straight line; compound curves upward. Made-up amounts.</figcaption></figure>

## Worked examples

**1. Saving for whole years.** 2000 dollars is saved at 3% a year simple interest for 4 years.

- $I = 2000 \times 0.03 \times 4 = 240$ dollars.
- $A = 2000 + 240 =$ **2240 dollars**.

**2. Part of a year.** 1000 dollars at 3% a year for 4 months.

- $t = \dfrac{4}{12}$, so $I = 1000 \times 0.03 \times \dfrac{4}{12} =$ **10 dollars**.

**3. A short loan.** You borrow 500 dollars at 12% a year simple interest and pay it all back after 3 months.

- $I = 500 \times 0.12 \times \dfrac{3}{12} = 15$ dollars.
- You pay back $500 + 15 =$ **515 dollars**.

**4. Finding the rate.** 800 dollars earns 48 dollars of simple interest in 2 years. What is the rate?

- $r = \dfrac{I}{Pt} = \dfrac{48}{800 \times 2} = \dfrac{48}{1600} = 0.03$, which is **3% a year**.

**5. Finding the time.** How long does 1500 dollars take to earn 300 dollars at 4% a year simple interest?

- One year's interest is $0.04 \times 1500 = 60$ dollars.
- $t = 300 \div 60 =$ **5 years**. (This is $t = \dfrac{I}{Pr}$, done in two steps.)

**6. Days.** 3650 dollars at 5% a year for 90 days.

- $I = 3650 \times 0.05 \times \dfrac{90}{365} =$ **45 dollars**. (One day's interest is
  $3650 \times 0.05 \div 365 = 0.50$ dollars, and $90 \times 0.50 = 45$.)

## Try it

1. Find the simple interest and the total amount on 600 dollars at 5% a year for 3 years.
2. Find the simple interest on 2400 dollars at 2.5% a year for 6 months.
3. You borrow 1200 dollars at 8% a year simple interest for 9 months. How much do you pay back?
4. 5000 dollars earns 400 dollars simple interest in 2 years. What is the yearly rate?
5. How long does 2000 dollars take to earn 150 dollars at 3% a year simple interest?
6. What principal earns 90 dollars in 3 years at 2% a year simple interest?
7. At 5% a year simple interest, how long does it take for money to **double**? Does the answer depend on the
   principal?
8. Find the simple interest on 730 dollars at 6% a year for 100 days.

??? note "Answers"
    1. $I = 600 \times 0.05 \times 3 = 90$ dollars. $A = 600 + 90 = 690$ dollars.
    2. $I = 2400 \times 0.025 \times \dfrac{6}{12} = 30$ dollars.
    3. $I = 1200 \times 0.08 \times \dfrac{9}{12} = 72$ dollars, so you pay back $1200 + 72 = 1272$ dollars.
    4. $r = \dfrac{400}{5000 \times 2} = \dfrac{400}{10\,000} = 0.04$, which is 4% a year.
    5. One year's interest is $0.03 \times 2000 = 60$ dollars, so $t = 150 \div 60 = 2.5$ years.
    6. $P = \dfrac{I}{rt} = \dfrac{90}{0.02 \times 3} = \dfrac{90}{0.06} = 1500$ dollars.
    7. Doubling means the interest equals the principal: $Prt = P$. Divide both sides by $P$: $rt = 1$, so
       $t = 1 \div 0.05 = 20$ years. The $P$ cancelled, so it does **not** depend on the principal: 10 dollars and
       10 000 dollars both take 20 years.
    8. $I = 730 \times 0.06 \times \dfrac{100}{365} = 12$ dollars. (One day: $730 \times 0.06 \div 365 = 0.12$, and
       $100 \times 0.12 = 12$.)

## Common mistake

**Using the yearly rate for a part of a year.** "3% a year" for 4 months is not 3% of the principal. Change the time
into years first: $t = \tfrac{4}{12}$.

**Writing the percent as a whole number.** In $I = Prt$, the rate must be a decimal: 3% is $r = 0.03$, not 3. Using 3
makes the interest 100 times too big. A quick sense check catches it: 3% of 1000 dollars a year cannot be 3000 dollars.

## Where it leads

- Back: [Exchange rates](05-exchange-rates.md) · Next: [Gears, mixtures and recipes](07-gears-mixtures.md)
- [Level 5 page](index.md) · [Ratio, rates and money topic page](../index.md)
- Interest on interest, and why it beats simple interest in the long run: [Level 6](../level-6/index.md).
- Rearranging formulas like $I = Prt$: [Algebra](../../algebra/index.md).
- Straight-line growth (adding the same amount) and its cousin, multiplying by the same amount:
  [Patterns](../../patterns/index.md).
