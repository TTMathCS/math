---
title: "Exponential growth and decay in the world"
---

# Exponential growth and decay in the world

*Ratio, rates and money · level 7, lesson 1 of 7*

## A question to start

A water lily grows on a pond. Every day, the patch of lily leaves doubles in size. On day 30 the pond is completely
covered. On which day was it half covered?

Most people's first guess is day 15. The answer is **day 29**. The patch doubles every day, so the day before it is
full, it is half full. On day 25 it covered only $\tfrac{1}{32}$ of the pond, about 3%. Someone looking at the pond on
day 25 would see mostly open water and think there was plenty of time. Five days later there is none.

That is the strange nature of **exponential** change: for a long time almost nothing seems to happen, and then almost
everything happens at once. It describes money, populations, medicines, cooling cups of tea and radioactive atoms. This
lesson shows why so many different things follow the same rule, and how to work with it.

## The idea

### Adding the same amount, or multiplying by the same amount

There are two very simple ways a quantity can change over equal steps of time.

- It can go up (or down) by the same **amount** every step. 100, 120, 140, 160, ... adds 20 each year. This is
  **linear** change: its graph is a straight line.
- It can be **multiplied** by the same number every step. 100, 120, 144, 172.8, ... multiplies by 1.2 each year. This
  is **exponential** change.

The two lists start the same way (100 then 120), but they do not stay close. After 10 years the first is at 300, the
second at about 619. After 30 years the first is at 700 and the second at about 23 700.

### The growth factor and the growth rate

If a quantity starts at $N_0$ (read "N nought": the amount at time 0) and is multiplied by $b$ every time step, then
after $t$ steps it is

$$N(t) = N_0 \, b^{\,t}.$$

The number $b$ is the **growth factor** (or decay factor): the multiplier for one step, exactly the multiplier you met
for a single percent change in [level 6](../level-6/index.md). The **growth rate** $r$ is the percent change per step,
written as a decimal. They are linked by

$$b = 1 + r.$$

| Words | Rate $r$ | Factor $b$ |
| --- | --- | --- |
| grows 5% a year | 0.05 | 1.05 |
| grows 20% an hour | 0.20 | 1.20 |
| doubles every day | 1.00 | 2 |
| shrinks 15% a year | −0.15 | 0.85 |
| shrinks 25% an hour | −0.25 | 0.75 |

If $b > 1$ the quantity grows: **exponential growth**. If $0 < b < 1$ it shrinks towards zero but never reaches it:
**exponential decay**. The word "exponential" is there because the time $t$ sits in the **exponent**, the small raised
number.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 210" role="img" aria-label="Two curves on the same axes: a growth curve starting at 100 and rising more and more steeply to about 620 after 10 steps, and a decay curve starting at 600 and falling more and more gently towards zero">
  <line x1="40" y1="170" x2="300" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="170" x2="40" y2="15" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="40,146.0 64,141.2 88,135.4 112,128.5 136,120.2 160,110.3 184,98.3 208,84.0 232,66.8 256,46.2 280,21.4" fill="none" stroke="#eea66f" stroke-width="3"/>
  <polyline points="40,26.0 64,54.8 88,77.8 112,96.3 136,111.0 160,122.8 184,132.3 208,139.8 232,145.8 256,150.7 280,154.5" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <text x="200" y="40" font-size="12" fill="currentColor">growth, b = 1.2</text>
  <text x="120" y="90" font-size="12" fill="currentColor">decay, b = 0.8</text>
  <text x="170" y="190" font-size="12" text-anchor="middle" fill="currentColor">time steps 0 to 10</text>
  <text x="34" y="174" font-size="11" text-anchor="end" fill="currentColor">0</text>
</svg>
</div>

The growth curve starts slowly and then shoots up. The decay curve falls fast at first and then flattens out. Both
have the same secret: over **any** step of the same length, the amount changes by the same **percent**, not the same
amount.

### How to spot exponential data

Given a table with equal time steps, divide each value by the one before it.

- If the **differences** are all the same, the change is linear.
- If the **ratios** are all the same, the change is exponential, and that ratio is $b$.

For 80, 60, 45, 33.75: the differences are −20, −15, −11.25 (not equal), but the ratios are all
$60 \div 80 = 45 \div 60 = 33.75 \div 45 = 0.75$. So this is exponential decay with $b = 0.75$, a 25% fall per step.

Real data is never perfect, so "all the same" means "close to the same". If the ratios drift steadily, the model is
only a rough one.

### Why so many things change this way

Exponential change happens whenever **the change in each step is proportional to the amount that is already there**.
That is the real reason, and it explains each example.

- **Populations.** If each bacterium splits into two every 20 minutes, then the more bacteria there are, the more new
  ones appear. Twice the bacteria, twice the new bacteria. So the population is multiplied by 2 every 20 minutes. Human
  and animal populations are similar over short times: births each year are roughly a fixed percent of the people
  alive.
- **Medicine in the body.** The liver and kidneys remove a drug at a rate roughly proportional to how much is in the
  blood. If 25% is removed each hour, the amount left is multiplied by 0.75 every hour. A big dose loses many
  milligrams in the first hour; a small leftover loses only a few.
- **Money.** Compound interest pays a percent of what is in the account. More money, more interest.
- **Cooling.** A hot drink loses heat faster when it is much hotter than the room, and slower when it is only a little
  hotter. The **difference** between the drink and the room shrinks by the same percent each minute. This is
  **Newton's law of cooling**. It is the difference that decays exponentially, not the temperature itself:

$$T(t) = T_{\text{room}} + D_0 \, b^{\,t},$$

where $D_0$ is the starting difference. As $t$ grows, $b^{\,t}$ goes to 0 and the drink settles at room temperature.

No real quantity grows exponentially for ever. A pond fills up, bacteria run out of food, a town runs out of houses.
Exponential models are best for the early part of growth, and for decay, which has a natural floor at zero.

### Changing the time step

A growth factor belongs to a time step. If something grows by the factor 1.2 per **year**, what is the factor per
**month**? Twelve months make a year, so the monthly factor $m$ must satisfy $m^{12} = 1.2$, so

$$m = 1.2^{1/12} \approx 1.0153.$$

That is about 1.53% a month, **not** $20\% \div 12 \approx 1.67\%$. Twelve monthly increases of 1.67% would give
$1.0167^{12} \approx 1.22$, which is too much, because each month's growth would itself be growing. This idea comes back
when banks compound interest monthly, in [lesson 3](03-compounding-periods.md).

The same trick finds $b$ from two measurements. If an amount goes from $A$ to $B$ in $k$ steps, then $b^{\,k} = B / A$,
so $b = (B / A)^{1/k}$.

<figure class="play" data-play="graph" data-form="exp"><span class="ai-tag">AI-created</span><figcaption><b>Growth and decay.</b> The same multiplier each step.</figcaption></figure>

## Worked examples

**1. A growing town.** A town of 5000 people grows by 4% a year. How many people after 5, 10 and 20 years? Compare
with a town that adds 200 people a year.

- Factor $b = 1.04$, so $N(t) = 5000 \times 1.04^{\,t}$.
- After 5 years: $5000 \times 1.04^5 \approx 6083$. After 10: $5000 \times 1.04^{10} \approx 7401$. After 20:
  $5000 \times 1.04^{20} \approx 10\,956$.
- The town that adds 200 a year (which is 4% of the **first** year's 5000) reaches $5000 + 200 \times 20 = 9000$ after
  20 years. The exponential town is ahead by nearly 2000, and the gap keeps widening.

**2. Medicine.** A patient takes 250 mg of a medicine. The body removes 25% of whatever is in the blood each hour. How
much is left after 4 hours and after 8 hours?

- The factor is $1 - 0.25 = 0.75$ per hour.
- After 4 hours: $250 \times 0.75^4 \approx 79.1$ mg.
- After 8 hours: $250 \times 0.75^8 \approx 25.0$ mg. Notice that 4 more hours removed only about 54 mg, compared with
  171 mg in the first 4 hours. The same percent of a smaller amount is a smaller amount.

**3. A cooling cup of tea.** Tea at 80°C is left in a 20°C room. After 5 minutes it is 65°C. Predict its temperature
after 15 minutes.

- The difference from the room starts at $80 - 20 = 60$ degrees and after 5 minutes is $65 - 20 = 45$ degrees.
- The factor per 5 minutes is $45 \div 60 = 0.75$.
- 15 minutes is three 5-minute steps: difference $60 \times 0.75^3 = 25.3125$ degrees.
- Temperature $20 + 25.3 \approx 45.3$°C.
- The tempting wrong answer, falling 15 degrees every 5 minutes (80, 65, 50, 35), treats the change as linear. It would
  even take the tea below room temperature after 20 minutes, which never happens.

**4. Finding the rate from data.** A herd of deer grew from 1200 to 1500 in 3 years, roughly exponentially. What is the
yearly growth rate?

- $b^3 = 1500 \div 1200 = 1.25$, so $b = 1.25^{1/3} \approx 1.0772$.
- The herd grows about **7.7%** a year.
- Dividing the total 25% by 3 gives 8.3%, which is too high: check $1200 \times 1.0833^3 \approx 1525$, more than 1500.

## Try it

1. Write the growth factor: (a) grows 7% a year; (b) shrinks 7% a year. Write the rate: (c) $b = 1.35$; (d) $b = 0.6$.
2. Is each table linear, exponential or neither? (a) 5, 15, 45, 135; (b) 5, 15, 25, 35; (c) 5, 10, 20, 30.
3. 3000 dollars grows by 5% a year. How much after 4 years?
4. A machine worth 50 000 dollars loses 6% of its value each year. What is it worth after 8 years?
5. Coffee at 95°C is left in a 20°C room, and the difference from room temperature shrinks by 10% each minute. Find
   its temperature after 5 minutes.
6. A bacteria culture grows from 1000 to 2073.6 cells in 4 hours, exponentially. What is the hourly growth rate?
7. After 10 hours, 25% of a dose of medicine is left. What percent was left after 5 hours?
8. In the lily pond from the start of the lesson, on which day was the pond one eighth covered?

??? note "Answers"
    1. (a) 1.07. (b) $1 - 0.07 = 0.93$. (c) $1.35 - 1 = 0.35$, growth of 35% per step. (d) $0.6 - 1 = -0.4$, a decay
       of 40% per step.
    2. (a) Ratios $15 \div 5 = 45 \div 15 = 135 \div 45 = 3$: **exponential**, $b = 3$. (b) Differences all 10:
       **linear**. (c) Differences 5, 10, 10 and ratios 2, 2, 1.5: **neither**.
    3. $3000 \times 1.05^4 \approx 3646.52$ dollars.
    4. $50\,000 \times 0.94^8 \approx 30\,478.45$ dollars.
    5. Difference $75 \times 0.9^5 \approx 44.29$, so the coffee is about $20 + 44.3 = 64.3$°C.
    6. $b^4 = 2073.6 \div 1000 = 2.0736$, so $b = 2.0736^{1/4} = 1.2$ (check: $1.2^2 = 1.44$, $1.44^2 = 2.0736$).
       The rate is **20% per hour**.
    7. If $b$ is the factor for 5 hours, two 5-hour steps give $b^2 = 0.25$, so $b = 0.5$: **50%** was left.
    8. Going back one day halves the cover: day 29 is $\tfrac12$, day 28 is $\tfrac14$, day 27 is $\tfrac18$.
       **Day 27.**

## Common mistake

**Mixing up the rate and the factor.** A decay of 20% means multiply by **0.8**, not by 0.2. Multiplying by 0.2 would
leave only 20%, an 80% decay. Always ask: "what fraction of the amount is **left** after one step?" That is the factor.

**Splitting a rate by division.** 20% a year is not 1.67% a month, and a 25% rise over 3 years is not 8.3% a year. When
growth compounds, rates for different time steps are linked by powers and roots, not by multiplying and dividing.

## Where it leads

- Next: [Doubling time and half-life](02-doubling-half-life.md), the most natural way to describe how fast an
  exponential changes.
- [Level 7 page](index.md) · [Ratio, rates and money topic page](../index.md)
- The single-step multiplier and compound interest come from [level 6](../level-6/index.md).
- Multiplying by the same number again and again is a geometric sequence: see
  [Patterns](../../patterns/index.md). The function $b^{\,x}$ itself, with its graph and inverse (the logarithm), lives
  in [Algebra](../../algebra/index.md).
- Fitting an exponential model to real data: [Non-linear models](../../statistics/level-7/06-non-linear-models.md) in
  Statistics. How fast an exponential is changing at one instant: [Change](../../change/index.md).
