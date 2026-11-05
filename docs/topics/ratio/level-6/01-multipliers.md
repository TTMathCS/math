---
title: "Multipliers"
---

# Multipliers

*Ratio, rates and money · level 6, lesson 1 of 7*

## A question to start

A jacket costs 120 dollars. It is on sale for 20% off, and then 13% sales tax is added at the till. Your friend says:
"You should ask them to add the tax first and take the 20% off after, because then the 20% comes off a bigger number
and you save more."

Is your friend right? Try it both ways before you read on.

Both ways give exactly **108.48 dollars**. That is not luck. In this lesson you will learn the one tool that makes this
obvious, and that solves almost every percent problem in a single step: the **multiplier**.

## The idea

### From two steps to one

In level 4 you increased an amount by a percent in two steps: find the percent, then add it on. To increase 250 by 8%:

- 8% of 250 is $0.08 \times 250 = 20$.
- $250 + 20 = 270$.

Look at what happened in algebra. Starting from an amount $x$, the new amount is

$$x + 0.08x = (1 + 0.08)x = 1.08x.$$

(This is the **distributive law** backwards: taking out the common factor $x$.) So increasing by 8% is the same as
**multiplying by 1.08**, in one step: $1.08 \times 250 = 270$.

The number 1.08 is called the **multiplier** (or **growth factor**, or **decay factor** when it is less than 1). The
same algebra works for any percent. With $p$ as the percent:

$$\text{increase by } p\%: \quad \times \left(1 + \frac{p}{100}\right), \qquad \text{decrease by } p\%: \quad \times \left(1 - \frac{p}{100}\right).$$

In words: you keep the whole amount (that is the 1, or 100%) and add or take away the percent.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 130" role="img" aria-label="Two bars. Top: 100 percent in blue plus an extra 8 percent in orange, making 108 percent, a multiplier of 1.08. Bottom: 100 percent with the last 15 percent taken away, leaving 85 percent, a multiplier of 0.85">
  <rect x="20" y="20" width="300" height="30" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="320" y="20" width="24" height="30" fill="#eea66f" stroke="currentColor"/>
  <text x="170" y="40" font-size="12" text-anchor="middle" fill="currentColor">100%</text>
  <text x="400" y="40" font-size="12" text-anchor="middle" fill="currentColor">108% = × 1.08</text>
  <rect x="20" y="80" width="255" height="30" fill="#7ccf9a" stroke="currentColor"/>
  <rect x="275" y="80" width="45" height="30" fill="none" stroke="currentColor" stroke-dasharray="4 3"/>
  <text x="147" y="100" font-size="12" text-anchor="middle" fill="currentColor">85%</text>
  <text x="297" y="100" font-size="11" text-anchor="middle" fill="currentColor">−15%</text>
  <text x="400" y="100" font-size="12" text-anchor="middle" fill="currentColor">85% = × 0.85</text>
</svg>
</div>

### A table of multipliers

| Change | Multiplier | Why |
| --- | --- | --- |
| up 8% | 1.08 | $100\% + 8\% = 108\%$ |
| up 13% (Ontario HST; check the current rate) | 1.13 | $100\% + 13\%$ |
| up 0.5% | 1.005 | $100\% + 0.5\%$ |
| up 100% (doubled) | 2 | $100\% + 100\%$ |
| up 150% | 2.5 | $100\% + 150\%$ |
| no change | 1 | $100\%$ |
| down 15% | 0.85 | $100\% - 15\%$ |
| down 20% | 0.80 | $100\% - 20\%$ |
| down 62% | 0.38 | $100\% - 62\%$ |
| down 100% (all gone) | 0 | $100\% - 100\%$ |

Three things to notice:

- A multiplier **bigger than 1** means growth; **smaller than 1** (but not negative) means shrinking; exactly 1 means no
  change.
- **Small percents need care with decimals.** Up 5% is 1.05, not 1.5 (which is up 50%). Up 0.5% is 1.005.
- **"Percent of" is a multiplier too.** 35% **of** an amount is $\times 0.35$. "Down 65%" is also $\times 0.35$: they
  describe the same thing, what is left.

### Reading a multiplier backwards

Given a multiplier, you can read off the change: subtract 1 and turn it into a percent.

- $\times 1.4$: $1.4 - 1 = 0.4$, so up **40%**.
- $\times 0.93$: $0.93 - 1 = -0.07$, so down **7%**.
- $\times 3$: $3 - 1 = 2$, so up **200%** (tripling is a 200% increase, as in level 5).

And given an old and a new amount, the multiplier is just

$$\text{multiplier} = \frac{\text{new}}{\text{old}}.$$

From 64 to 80: $80 \div 64 = 1.25$, so up 25%. This is the percent change from level 5 in a new outfit:
$\dfrac{\text{new} - \text{old}}{\text{old}} = \dfrac{\text{new}}{\text{old}} - 1$.

On Mars, gravity is about 38% of Earth's, so anything weighs $\times 0.38$ there: $0.38 - 1 = -0.62$, a drop of about
62%.

### Why order does not matter

Now the jacket. Taking 20% off is $\times 0.80$. Adding 13% tax is $\times 1.13$. So

- discount then tax: $120 \times 0.80 \times 1.13$;
- tax then discount: $120 \times 1.13 \times 0.80$.

Multiplication can be done in **any order** (it is **commutative**: $a \times b = b \times a$). So both give the same
answer, $120 \times 0.904 = 108.48$ dollars. Your friend's idea, "the 20% comes off a bigger number", is true, but
the tax was also added to a bigger number in the other order, and the two effects cancel exactly.

The combined multiplier $0.80 \times 1.13 = 0.904$ says the whole deal is a 9.6% saving on the original price. Changes
in a row are the subject of the [next lesson](02-successive-changes.md).

### Why multipliers are worth it

- **One step** instead of two.
- **Any direction**: multiply to go forwards, divide to go backwards (the next lesson).
- **Chains**: several changes are one multiplication.
- **Repeats**: the same change many times is a power, like $1.05^{10}$. That is compound interest
  ([lesson 4](04-compound-interest.md)).

<figure class="play" data-play="percent" data-mode="change"><span class="ai-tag">AI-created</span><figcaption><b>The multiplier.</b> Each change is one number to multiply by.</figcaption></figure>

## Worked examples

**1. Increase.** Increase 250 by 8%.

- Multiplier 1.08. $1.08 \times 250 =$ **270**.

**2. Decrease.** Decrease 60 by 15%.

- Multiplier 0.85. $0.85 \times 60 =$ **51**.

**3. From two amounts.** A ticket price goes from 64 to 80 dollars. Find the multiplier and the percent change. Then
do the same for 80 back to 64.

- $80 \div 64 = 1.25$: up **25%**.
- $64 \div 80 = 0.80$: down **20%**. (The level 5 effect again: the two multipliers are reciprocals,
  $1.25 \times 0.80 = 1$.)

**4. Discount and tax.** The 120 dollar jacket, 20% off, plus 13% HST.

- $120 \times 0.80 \times 1.13 =$ **108.48 dollars**, in either order.

**5. A raise.** A salary of 52 000 dollars a year goes up 3.5%.

- Multiplier $1 + 0.035 = 1.035$. $52\,000 \times 1.035 =$ **53 820 dollars**.

## Try it

1. Write the multiplier for: (a) up 6%; (b) down 6%; (c) up 150%; (d) down 0.5%; (e) up 0.5%.
2. What percent change does each multiplier mean? (a) 1.07; (b) 0.93; (c) 0.6; (d) 3; (e) 1.005.
3. Increase 340 by 15% in one step.
4. Decrease 85 by 40% in one step.
5. A price goes from 48 to 60 dollars. Find the multiplier and the percent change.
6. A coat costs 150 dollars. It is 30% off, then 13% HST is added. What do you pay?
7. A town of 12 500 people grows by 2% one year and shrinks by 2% the next. How many people now? Why is it not
   12 500?
8. Use algebra to show that taking $p\%$ off an amount $x$ leaves $\left(1 - \dfrac{p}{100}\right)x$.

??? note "Answers"
    1. (a) 1.06; (b) 0.94; (c) 2.5; (d) 0.995; (e) 1.005.
    2. (a) up 7%; (b) down 7%; (c) down 40%; (d) up 200%; (e) up 0.5%.
    3. $1.15 \times 340 = 391$.
    4. $0.60 \times 85 = 51$.
    5. $60 \div 48 = 1.25$, so up 25%.
    6. $150 \times 0.70 \times 1.13 = 118.65$ dollars.
    7. $12\,500 \times 1.02 \times 0.98 = 12\,495$ people. The overall multiplier is $1.02 \times 0.98 = 0.9996$,
       slightly less than 1, because the 2% drop is taken from a bigger number (12 750) than the 2% rise was
       (12 500). More on this in the next lesson.
    8. $p\%$ of $x$ is $\dfrac{p}{100}x$. Taking it away leaves $x - \dfrac{p}{100}x$. Both terms have the factor
       $x$, so this is $\left(1 - \dfrac{p}{100}\right)x$ (the distributive law).

## Common mistake

**Small percents with the wrong decimal.** Up 5% is $\times 1.05$, not $\times 1.5$. Up 0.5% is $\times 1.005$, not
$\times 1.05$. Say it as "100% plus 5% is 105%, which is 1.05".

**Using the percent as the multiplier.** For a 15% decrease, multiplying by 0.15 gives the amount taken off, not the
amount left. The amount left is $\times 0.85$.

## Where it leads

- Back: [Level 5: Gears, mixtures and recipes](../level-5/07-gears-mixtures.md) · Next:
  [Successive changes and reverse percent](02-successive-changes.md)
- [Level 6 page](index.md) · [Ratio, rates and money topic page](../index.md)
- Percent change from the original: [Percent increase and decrease](../level-5/03-percent-change.md).
- The distributive law used above: [Algebra](../../algebra/index.md).
- The same multiplier again and again is a geometric sequence: [Patterns](../../patterns/index.md).
