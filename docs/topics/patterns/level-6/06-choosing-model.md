---
title: "Arithmetic or geometric in the world"
---

# Arithmetic or geometric in the world

*Patterns and sequences · level 6, lesson 6 of 6*

## A question to start

The Curiosity and Perseverance rovers on Mars are not powered by sunlight. Each carries a generator warmed by the
heat of plutonium-238, a radioactive metal whose **half-life** is about 88 years: every 88 years, half of whatever
plutonium is left decays into something else.

So after 88 years, half the fuel's heat is gone. Does that mean that after 176 years **all** of it is gone, since
half plus half is the whole? Many people say yes. It is wrong, and knowing whether a change is "the same amount" or
"the same fraction" is exactly what this lesson is about.

## The idea

### Two questions that decide the model

When something changes step by step, ask:

1. **Does it change by the same amount each step?** Seats go up by 2 per row, a phone bill goes up by 5 dollars per
   gigabyte, savings go up by 20 dollars a week. Then the model is **arithmetic**: $t_n = a + (n - 1)d$.
2. **Does it change by the same fraction (or percentage, or factor) each step?** Bacteria double every 20 minutes, a
   ball bounces to three quarters of its last height, money grows by 5% a year, half of the fuel decays every 88 years.
   Then the model is **geometric**: $t_n = ar^{n-1}$.

The words are clues. "Each", "per" and "plus" with a fixed quantity suggest arithmetic. "Double", "half", "times",
"percent", "of what was there" and "rate" suggest geometric.

For the rover: half of what is left decays every 88 years, a **fraction**, so it is geometric with $r = \tfrac12$:
after 0, 88, 176, 264 years the fuel is 100%, 50%, 25%, 12.5%. After 176 years a quarter is still there. In
mathematics it never reaches zero at all.

### Testing data: differences or ratios

Real data is never perfect, but you can test it the same way you tested sequences. Here are two made-up tables of the
number of visitors to two websites in their first weeks:

| Week | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| Site A | 120 | 151 | 179 | 211 | 240 |
| Site B | 120 | 149 | 188 | 233 | 291 |

- Site A: differences 31, 28, 32, 29. Roughly constant, about 30: **arithmetic** is a good model, $t_n \approx 120 + 30(n - 1)$.
- Site B: differences 29, 39, 45, 58, growing. Ratios $149 \div 120 \approx 1.24$, $188 \div 149 \approx 1.26$,
  $233 \div 188 \approx 1.24$, $291 \div 233 \approx 1.25$. Roughly constant, about 1.25: **geometric** is a good model,
  $t_n \approx 120 \times 1.25^{n-1}$.

After five weeks they look similar. After 20 weeks the models predict about $120 + 30 \times 19 = 690$ visitors for A
and about $120 \times 1.25^{19} \approx 8\,330$ for B. That is the whole point of choosing the right model: the
choice hardly matters for next week, and matters enormously for next year.

### Simple and compound interest

Banks give a clear example of both models. Put 1000 dollars in an account paying 5% a year.

- **Simple interest** pays 5% of the **original** 1000 dollars, so 50 dollars every year. The balance after $n$ years
  is $1000 + 50n$: arithmetic.
- **Compound interest** pays 5% of the **current** balance, so each year's interest is a bit bigger than the last.
  The balance after $n$ years is $1000 \times 1.05^n$: geometric.

| Years | 1 | 5 | 10 | 30 |
| --- | --- | --- | --- | --- |
| simple (dollars) | 1050 | 1250 | 1500 | 2500 |
| compound (dollars) | 1050 | 1276.28 | 1628.89 | 4321.94 |

In the first year they are equal. After 30 years compound interest has given almost three times as much interest
(3321.94 dollars against 1500 dollars). Here the story starts at "year 0", so the formulas use $n$, not $n - 1$.

### A model is a simplification

No real ball bounces exactly to 75% every time; no bacteria double forever (they run out of food and space); real
prices do not rise by exactly the same percentage each year. A model is a simple rule that is close to the truth for
a while. Good modellers check the model against data, say how long they expect it to work, and change it when it
stops working. A geometric model of growth with $r > 1$ always breaks eventually, because nothing real can grow
forever.

## Worked examples

**1. A bouncing ball.** A ball is dropped from 2 m, and each bounce reaches $\tfrac34$ of the height before.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 160" role="img" aria-label="A ball dropped from 2 metres bounces to 1.5, 1.125, 0.84 and 0.63 metres, each bounce three quarters of the one before">
  <line x1="10" y1="135" x2="310" y2="135" stroke="currentColor" stroke-width="2"/>
  <path d="M 20 35 Q 20 135 50 135" fill="none" stroke="#eea66f" stroke-width="2"/>
  <circle cx="20" cy="35" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <text x="32" y="39" font-size="11" fill="currentColor">2 m</text>
  <path d="M 50 135 Q 85.0 -15.0 120.0 135" fill="none" stroke="#eea66f" stroke-width="2"/>
  <line x1="85.0" y1="60.0" x2="85.0" y2="135" stroke="#7ccf9a" stroke-width="2" stroke-dasharray="3 3"/>
  <text x="85.0" y="54.0" font-size="11" text-anchor="middle" fill="currentColor">1.5</text>
  <path d="M 120.0 135 Q 150.3 22.5 180.6 135" fill="none" stroke="#eea66f" stroke-width="2"/>
  <line x1="150.3" y1="78.8" x2="150.3" y2="135" stroke="#7ccf9a" stroke-width="2" stroke-dasharray="3 3"/>
  <text x="150.3" y="72.8" font-size="11" text-anchor="middle" fill="currentColor">1.125</text>
  <path d="M 180.6 135 Q 206.8 50.6 233.1 135" fill="none" stroke="#eea66f" stroke-width="2"/>
  <line x1="206.8" y1="92.8" x2="206.8" y2="135" stroke="#7ccf9a" stroke-width="2" stroke-dasharray="3 3"/>
  <text x="206.8" y="86.8" font-size="11" text-anchor="middle" fill="currentColor">0.84</text>
  <path d="M 233.1 135 Q 255.8 71.7 278.6 135" fill="none" stroke="#eea66f" stroke-width="2"/>
  <line x1="255.8" y1="103.4" x2="255.8" y2="135" stroke="#7ccf9a" stroke-width="2" stroke-dasharray="3 3"/>
  <text x="255.8" y="97.4" font-size="11" text-anchor="middle" fill="currentColor">0.63</text>
  <text x="160" y="155" font-size="12" text-anchor="middle" fill="currentColor">each bounce reaches 3/4 of the height before</text>
</svg>
</div>

- Height of bounce $n$: $2 \times \left(\tfrac34\right)^n$ m, so 1.5, 1.125, 0.84375, ... (geometric, $r = 0.75$).
- When is a bounce first below 10 cm? We need $2 \times 0.75^n < 0.1$, that is $0.75^n < 0.05$. Trying powers:
  $0.75^{10} \approx 0.056$ (not yet) and $0.75^{11} \approx 0.042$. So **bounce 11** (about 8.4 cm).
- Distance travelled until it lands for the 4th time: down 2 m, then up and down for bounces 1, 2 and 3:
  $2 + 2(1.5 + 1.125 + 0.84375) = 2 + 2 \times 3.46875 = 8.9375$ m.

**2. A phone plan.** A plan costs 25 dollars a month plus 5 dollars per gigabyte of data. Using 0, 1, 2, 3, ... GB
costs 25, 30, 35, 40, ... dollars: arithmetic, cost $= 25 + 5g$. Each extra gigabyte adds the same amount, not the
same percentage.

**3. Bacteria.** In ideal laboratory conditions some bacteria divide about every 20 minutes. A dish starts with 500.

3 hours is 9 doublings, so there are $500 \times 2^9 = 256\,000$ bacteria. 6 hours would be $500 \times 2^{18}$, about
131 million. In a real dish, food runs out and the doubling slows: the model works only at the start.

**4. Plutonium, year by year.** If half the fuel is left after 88 years, what fraction is left after **one** year?
The yearly ratio $r$ must satisfy $r^{88} = \tfrac12$. A calculator gives $r \approx 0.992$. So the fuel loses about
0.8% of what is left each year: still geometric, just with a ratio close to 1. (The electricity a rover's generator
makes falls faster than this, because its heat-to-electricity parts also wear out, but the fuel itself follows the
geometric rule.)

**5. Same start, different model.** Two towns have 15 000 people. Town A grows by 300 people a year; town B grows by
2% a year. After 10 years:

- A (arithmetic): $15\,000 + 300 \times 10 = 18\,000$.
- B (geometric): $15\,000 \times 1.02^{10} \approx 18\,285$.

In year 1 they grow by exactly the same amount (2% of 15 000 is 300), but B's yearly growth keeps increasing.

## Try it

1. Say whether each is best modelled as arithmetic or geometric, and give $d$ or $r$:
   (a) a candle that gets 2 cm shorter every hour; (b) a car that loses 15% of its value each year; (c) the thickness
   of paper folded again and again; (d) a taxi fare of 4 dollars plus 2 dollars per km.
2. A ball dropped from 5 m bounces to 60% of its height each time. List the first four bounce heights. Which is the
   first bounce below 0.5 m?
3. Plan A costs 30 dollars a month plus 8 dollars per GB; plan B costs 50 dollars plus 3 dollars per GB. For what usage
   do they cost the same? Which is cheaper for 6 GB?
4. 100 bacteria double every 30 minutes. How many after 5 hours? After how many hours do they first pass a million?
5. A car bought for 30 000 dollars loses 15% of its value every year. What is it worth after 5 years?
6. Is this data arithmetic, geometric or neither: 1000, 900, 810, 729? Predict the next value.
7. Simple or compound: an account with 2000 dollars pays 4% a year. Find the balance after 10 years each way.
8. What percentage of a rover's plutonium is left after 3 half-lives (about 264 years)? After how many whole half-lives
   is less than 10% left?

??? note "Answers"
    1. (a) Arithmetic, $d = -2$ cm per hour. (b) Geometric, $r = 0.85$. (c) Geometric, $r = 2$. (d) Arithmetic,
       $d = 2$ dollars per km.
    2. 3 m, 1.8 m, 1.08 m, 0.648 m. Then $0.648 \times 0.6 = 0.3888$ m, so **bounce 5** is the first below 0.5 m.
       (Check: $5 \times 0.6^4 = 0.648$, $5 \times 0.6^5 = 0.3888$.)
    3. $30 + 8g = 50 + 3g$ gives $5g = 20$, $g = 4$ GB. For 6 GB: A costs $30 + 48 = 78$ dollars, B costs
       $50 + 18 = 68$ dollars, so B is cheaper.
    4. 5 hours is 10 doublings: $100 \times 2^{10} = 102\,400$. To pass a million we need $2^k > 10\,000$:
       $2^{13} = 8192$ is short, $2^{14} = 16\,384$ passes, so 14 doublings = **7 hours**.
    5. $30\,000 \times 0.85^5 \approx 13\,311.16$ dollars.
    6. Differences −100, −90, −81 (not constant); ratios 0.9, 0.9, 0.9. Geometric with $r = 0.9$. Next value
       $729 \times 0.9 = 656.1$.
    7. Simple: $2000 + 10 \times 80 = 2800$ dollars. Compound: $2000 \times 1.04^{10} \approx 2960.49$ dollars.
    8. After 3 half-lives: $\left(\tfrac12\right)^3 = \tfrac18 = 12.5\%$. After 4: $6.25\%$. So after **4** whole
       half-lives (about 350 years) less than 10% is left. (The 10% mark is passed between the 3rd and 4th half-lives,
       after about 291 years.)

## Common mistake

**Adding fractions of a changing amount as if they were fixed.** "Half is gone after 88 years, so all of it is gone
after 176" treats the half as a fixed amount. But the second half-life takes half of **what is left**, which is a
quarter of the start. Percent changes always apply to the current amount.

**Trusting a model too far.** A geometric model fitted to the first week of a fast-growing website, or the first
hours of bacteria, will predict impossible numbers later. Say how far the model can be trusted.

## Where it leads

- Previous: [Recursive sequences](05-recursive-sequences.md) · Next level: [Level 7: series and sigma](../level-7/index.md),
  where sums go on forever and a bouncing ball's total distance comes out exactly.
- [Level 6 page](index.md) · [Patterns topic page](../index.md)
- The arithmetic models of [Arithmetic sequences in real life](../level-5/06-real-life.md) in level 5.
- Exponential growth and decay as functions and graphs: [Algebra level 7](../../algebra/level-7/07-exponential-functions.md).
- Fitting a rule to data: [Statistics](../../statistics/index.md). Percentages and rates: [Ratio](../../ratio/index.md).
- On the U of T shelf, exponential growth and decay in calculus: [MAT137 Unit 4](../../../uoft/MAT137/unit04.md).
