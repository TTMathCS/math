---
title: "Percent increase and decrease"
---

# Percent increase and decrease

*Ratio, rates and money · level 5, lesson 3 of 7*

## A question to start

A video game costs 40 dollars. The shop raises the price to 50 dollars. A month later it puts the price back to
40 dollars.

The price went up by 10 dollars and down by 10 dollars. So it went up by some percent and down by the same percent,
right?

No. Going from 40 to 50 is a rise of **25%**. Going from 50 back to 40 is a fall of only **20%**. The same 10 dollars,
two different percents. By the end of this lesson you will know exactly why, and you will never be fooled by it.

## The idea

### Change as an amount, and change as a percent

When something changes, there are two ways to describe how much.

- The **absolute change** is the plain difference: new minus original. From 40 to 50 dollars is a change of
  $50 - 40 = 10$ dollars.
- The **percent change** (or **relative change**) compares that difference with the starting amount, the
  **original**, as a percent:

$$\text{percent change} = \frac{\text{new} - \text{original}}{\text{original}} \times 100\%$$

If the answer is positive, it is a **percent increase**. If it is negative, it is a **percent decrease** (and we
usually say "a decrease of 20%" rather than "a change of −20%").

Why bother with percents when we have the plain difference? Because a 10 dollar rise means very different things on a
40 dollar game and on a 400 dollar phone. On the game it is a quarter of the price. On the phone it is hardly anything
($10 \div 400 = 2.5\%$). Percent change lets you compare changes of things that start at different sizes.

### Why the original is the base

"Percent" always means "out of 100 parts of **something**". In percent change, that something is the original amount:
we are asking how big the change is **compared with where we started**.

Look at the two changes in the question as bars.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 150" role="img" aria-label="Two bars. Top: 40 dollars as four blocks of 10, plus one extra block of 10 added, which is a quarter of 40. Bottom: 50 dollars as five blocks of 10, with one block taken away, which is a fifth of 50">
  <rect x="40" y="20" width="60" height="30" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="100" y="20" width="60" height="30" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="160" y="20" width="60" height="30" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="220" y="20" width="60" height="30" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="280" y="20" width="60" height="30" fill="#eea66f" stroke="currentColor"/>
  <text x="160" y="40" font-size="12" text-anchor="middle" fill="currentColor">original 40</text>
  <text x="310" y="40" font-size="12" text-anchor="middle" fill="currentColor">+10</text>
  <text x="400" y="40" font-size="12" text-anchor="middle" fill="currentColor">1 of 4 = 25%</text>
  <rect x="40" y="90" width="60" height="30" fill="#7ccf9a" stroke="currentColor"/>
  <rect x="100" y="90" width="60" height="30" fill="#7ccf9a" stroke="currentColor"/>
  <rect x="160" y="90" width="60" height="30" fill="#7ccf9a" stroke="currentColor"/>
  <rect x="220" y="90" width="60" height="30" fill="#7ccf9a" stroke="currentColor"/>
  <rect x="280" y="90" width="60" height="30" fill="#eea66f" stroke="currentColor"/>
  <text x="190" y="110" font-size="12" text-anchor="middle" fill="currentColor">original 50</text>
  <text x="310" y="110" font-size="12" text-anchor="middle" fill="currentColor">−10</text>
  <text x="400" y="110" font-size="12" text-anchor="middle" fill="currentColor">1 of 5 = 20%</text>
  <text x="230" y="142" font-size="12" text-anchor="middle" fill="currentColor">the same 10 dollars, measured against different originals</text>
</svg>
</div>

- On the way up, the original is 40. The extra 10 is one block out of **four**: $\dfrac{10}{40} = \dfrac14 = 25\%$.
- On the way down, the original is 50. The 10 taken off is one block out of **five**: $\dfrac{10}{50} = \dfrac15 =
  20\%$.

The change is the same size, but it is measured against a bigger original on the way down, so it is a smaller
fraction of it. That is the whole secret: **a percent is always a percent of something**, and the something changed.

### Small changes, big changes

For small changes, the "up" percent and the "down" percent are close. For big changes, they are far apart.

A day on Mars (a **sol**) is about 24 hours 39 minutes 35 seconds, which is 2375 seconds longer than an Earth day of
86 400 seconds.

- A sol is longer than an Earth day by $\dfrac{2375}{86\,400} \times 100\% \approx 2.7\%$.
- An Earth day is shorter than a sol by $\dfrac{2375}{88\,775} \times 100\% \approx 2.7\%$ too (2.68% against 2.75%,
  if you keep two decimals).

A small change hardly moves the base, so the two percents nearly agree. Now take a big change: a plant grows from
10 cm to 30 cm. That is up $\dfrac{20}{10} = 200\%$. Shrinking from 30 cm back to 10 cm is down
$\dfrac{20}{30} \approx 67\%$. Very different.

### Limits on percent change

- An **increase** can be any size. Doubling is a 100% increase ($\tfrac{x}{x} = 1$). Tripling is a 200% increase, not
  300%: the new amount is 300% **of** the original, but the **increase** is 200% of it.
- A **decrease** can never be more than 100%. Losing 100% means losing everything, down to zero. A shop that says "up
  to 120% off" is either joking or paying you to take things away.

### Finding the new amount

Going the other way, if you know the original and the percent change, you can find the new amount. Two ways:

1. **Two steps.** Find the change, then add or subtract it. 45 dollars up 12%: 12% of 45 is $0.12 \times 45 = 5.40$,
   so the new price is $45 + 5.40 = 50.40$ dollars.
2. **One step.** The new price is the whole 100% plus 12%, which is 112% of the original: $1.12 \times 45 = 50.40$.

The one-step way, with a **multiplier** like 1.12, is the main tool of [level 6](../level-6/index.md). Here it is
enough to see that both ways agree.

### Percent change and percent difference

Percent change has a direction: it starts from an original. If two things are just being compared, with no "before"
and "after" (two shops' prices on the same day, say), you must say which one you are measuring against: "the second
shop is 25% dearer than the first" and "the first shop is 20% cheaper than the second" are both true for 40 and 50.

<figure class="play" data-play="percent" data-mode="change"><span class="ai-tag">AI-created</span><figcaption><b>Percent change.</b> Up or down by p%: one multiplication. Made-up amounts.</figcaption></figure>

## Worked examples

**1. Up.** A game goes from 40 dollars to 50 dollars. Percent change?

- Change: $50 - 40 = 10$ dollars. Original: 40.
- $\dfrac{10}{40} \times 100\% = 25\%$. An increase of **25%**.

**2. Down.** The game goes back from 50 dollars to 40 dollars. Percent change?

- Change: $40 - 50 = -10$. Original: 50 (it is now the starting point).
- $\dfrac{-10}{50} \times 100\% = -20\%$. A decrease of **20%**.

**3. A population.** A town falls from 8000 to 6800 people.

- Change: $6800 - 8000 = -1200$.
- $\dfrac{-1200}{8000} \times 100\% = -15\%$. A decrease of **15%**.

**4. New amount, decrease.** A jacket costs 80 dollars and is reduced by 35%. New price?

- Two steps: 10% of 80 is 8, so 30% is 24 and 5% is 4; 35% is 28. $80 - 28 = 52$ dollars.
- One step: $100\% - 35\% = 65\%$, and $0.65 \times 80 = 52$ dollars. ✓

**5. Comparing changes of different sizes.** In one year, a phone's price went from 400 to 440 dollars and a
sandwich's from 6 to 7.50 dollars. Which rose more?

- The phone rose 40 dollars; the sandwich rose 1.50 dollars. In dollars, the phone rose more.
- In percent: phone $\dfrac{40}{400} = 10\%$; sandwich $\dfrac{1.50}{6} = 25\%$. Compared with where each started,
  the **sandwich** rose much more.

Both answers are true. The percent answer is the one that tells you how much harder the sandwich is to afford than
before.

## Try it

1. A price goes from 20 dollars to 25 dollars. Find the percent change.
2. A price goes from 25 dollars to 20 dollars. Find the percent change. Why is it not the same as question 1?
3. A class shrinks from 30 students to 24. Find the percent change. Then a new group arrives and it grows back from
   24 to 30. Find that percent change.
4. A bike costs 120 dollars and the price goes up by 15%. Find the new price two ways.
5. A town grows from 250 thousand to 290 thousand people. By what percent did it grow?
6. A plant grows from 12 cm to 30 cm. What is the percent increase?
7. Something doubles. What is the percent increase? Something halves. What is the percent decrease?
8. A shop says its prices are "300% higher than wholesale". If the wholesale price is 20 dollars, what is the shop's
   price? (Careful.)

??? note "Answers"
    1. $\dfrac{25 - 20}{20} \times 100\% = \dfrac{5}{20} \times 100\% = 25\%$ increase.
    2. $\dfrac{20 - 25}{25} \times 100\% = -20\%$, a 20% decrease. The change is the same 5 dollars, but now it is
       compared with 25, a bigger original.
    3. Down: $\dfrac{-6}{30} \times 100\% = -20\%$, a 20% decrease. Up: $\dfrac{6}{24} \times 100\% = 25\%$, a 25%
       increase.
    4. Two steps: 15% of 120 is 18, and $120 + 18 = 138$ dollars. One step: $1.15 \times 120 = 138$ dollars.
    5. Change 40 thousand. $\dfrac{40}{250} \times 100\% = 16\%$.
    6. Change 18 cm. $\dfrac{18}{12} \times 100\% = 150\%$ increase.
    7. Doubling: from $x$ to $2x$ is a change of $x$, and $\dfrac{x}{x} = 100\%$, an increase of **100%**. Halving:
       from $x$ to $\tfrac{x}{2}$ is a change of $-\tfrac{x}{2}$, and that is $-50\%$, a decrease of **50%**.
    8. 300% **higher** means the increase is 300% of 20, which is 60 dollars. The price is $20 + 60 = 80$ dollars,
       which is 400% **of** wholesale. (If the shop meant 60 dollars, it should have said "300% of wholesale" or
       "200% higher".)

## Common mistake

**Dividing by the new amount.** The base of a percent change is always the **original**, the "before". From 50 to
40, divide by 50, not by 40.

**Mixing "percent of" and "percent more than".** 300% **of** 20 is 60. 300% **more than** 20 is $20 + 60 = 80$. When
you read a percent, ask "percent of what?" and "is this the total or the extra?"

## Where it leads

- Back: [Direct and inverse proportion](02-direct-inverse.md) · Next: [Commission, tips and markups](04-commission-tips-markups.md)
- [Level 5 page](index.md) · [Ratio, rates and money topic page](../index.md)
- Percent of an amount and one amount as a percent of another: [Level 4](../level-4/index.md).
- Changes in a row, going backwards to the original price, and "percentage points":
  [Level 6](../level-6/index.md).
- Reading percent changes in the news and in graphs honestly: [Statistics](../../statistics/index.md).
