---
title: "Successive changes and reverse percent"
---

# Successive changes and reverse percent

*Ratio, rates and money · level 6, lesson 2 of 7*

## A question to start

A share in a company is worth 100 dollars. On Monday its price jumps up **50%**. On Tuesday it falls **50%**. Up 50,
down 50: back to 100 dollars?

Work it out. Monday: 50% of 100 is 50, so it is worth 150. Tuesday: 50% of **150** is 75, so it falls to
$150 - 75 = 75$ dollars. A quarter of the money is gone, after an "equal" rise and fall.

And it is not just big percents. Up 10% then down 10% also loses money, just less. Today you will see why it **always**
loses, how to undo a change properly, and how to find a price before tax was added.

## The idea

### Changes in a row multiply

From [lesson 1](01-multipliers.md), each percent change is a multiplication by its multiplier. So two changes, one
after the other, are two multiplications:

$$\text{new} = \text{old} \times m_1 \times m_2$$

These are called **successive changes** (changes that follow one another). The **overall multiplier** is
$m_1 \times m_2$, and you read the overall percent change from it.

Up 10% then down 10%:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 100" role="img" aria-label="100 multiplied by 1.10 gives 110, then multiplied by 0.90 gives 99">
  <rect x="20" y="35" width="90" height="36" rx="6" fill="#9cc9ea" stroke="currentColor"/>
  <text x="65" y="58" font-size="13" text-anchor="middle" fill="currentColor">100</text>
  <rect x="185" y="35" width="90" height="36" rx="6" fill="#7ccf9a" stroke="currentColor"/>
  <text x="230" y="58" font-size="13" text-anchor="middle" fill="currentColor">110</text>
  <rect x="350" y="35" width="90" height="36" rx="6" fill="#eea66f" stroke="currentColor"/>
  <text x="395" y="58" font-size="13" text-anchor="middle" fill="currentColor">99</text>
  <line x1="110" y1="53" x2="180" y2="53" stroke="currentColor" stroke-width="2"/>
  <polygon points="185,53 176,48 176,58" fill="currentColor"/>
  <line x1="275" y1="53" x2="345" y2="53" stroke="currentColor" stroke-width="2"/>
  <polygon points="350,53 341,48 341,58" fill="currentColor"/>
  <text x="147" y="28" font-size="12" text-anchor="middle" fill="currentColor">× 1.10</text>
  <text x="312" y="28" font-size="12" text-anchor="middle" fill="currentColor">× 0.90</text>
  <text x="230" y="94" font-size="12" text-anchor="middle" fill="currentColor">overall × 0.99: down 1%</text>
</svg>
</div>

The overall multiplier is $1.10 \times 0.90 = 0.99$, so the result is down 1%. The 10% rise was 10% of 100 (that is 10),
but the 10% fall was 10% of 110 (that is 11). The fall is bigger because it is a percent of a bigger number.

### Why "up then down by the same percent" always loses

Write the percent as a decimal $x$ (so 10% is $x = 0.1$). Up then down is

$$(1 + x)(1 - x) = 1 - x + x - x^2 = 1 - x^2.$$

Since $x^2$ is positive for any $x$ that is not 0, the overall multiplier $1 - x^2$ is always **less than 1**. You
always end up below where you started, and the loss is exactly $x^2$:

| Up and down by | Overall multiplier $1 - x^2$ | Overall change |
| --- | --- | --- |
| 10% | $1 - 0.01 = 0.99$ | down 1% |
| 20% | $1 - 0.04 = 0.96$ | down 4% |
| 50% | $1 - 0.25 = 0.75$ | down 25% |

And since $(1 - x)(1 + x)$ is the same product in the other order, **down then up** loses exactly the same.

### Adding percents is wrong; multiplying multipliers is right

Two discounts of 30% and then 20% are not a 50% discount:

$$0.70 \times 0.80 = 0.56,$$

so you pay 56%: a 44% discount. Three yearly rises of 5% are not 15%:

$$1.05 \times 1.05 \times 1.05 = 1.05^3 \approx 1.1576,$$

a rise of about 15.76%, a bit **more** than 15%, because each rise is on a bigger amount. That extra is the seed of
compound interest in [lesson 4](04-compound-interest.md).

### Undoing a change

To get back where you started, you must multiply by the **reciprocal** (1 divided by the multiplier), because
$m \times \dfrac{1}{m} = 1$.

After a 20% drop ($\times 0.80$), the recovery needs $\times \dfrac{1}{0.80} = \times 1.25$, a **25%** rise. The
deeper the fall, the bigger the climb back:

| Loss | Multiplier | Rise needed to recover |
| --- | --- | --- |
| 10% | 0.90 | $\dfrac{1}{0.9} \approx 1.111$: about 11.1% |
| 20% | 0.80 | $\dfrac{1}{0.8} = 1.25$: 25% |
| 25% | 0.75 | $\dfrac{1}{0.75} \approx 1.333$: about 33.3% |
| 50% | 0.50 | $\dfrac{1}{0.5} = 2$: 100% |
| 75% | 0.25 | $\dfrac{1}{0.25} = 4$: 300% |
| 90% | 0.10 | $\dfrac{1}{0.1} = 10$: 900% |

This is why investors fear big losses: lose half your money and you need to **double** what is left just to get back.

### Reverse percent: finding the "before"

Often you know the amount **after** a change and want the amount **before**. Since

$$\text{before} \times m = \text{after}, \qquad \text{before} = \text{after} \div m.$$

**Divide by the multiplier.** A receipt shows a total of 50.85 dollars including 13% HST (Ontario's rate since 2010;
check the current rate). The price before tax was $50.85 \div 1.13 = 45$ dollars, and the tax was
$50.85 - 45 = 5.85$ dollars.

**Why you cannot just take 13% off the total.** The 13% was 13% of the price before tax, not 13% of 50.85. Taking 13%
off 50.85 gives about 44.24 dollars, which is too small: check it, $44.24 \times 1.13 \approx 49.99$, not 50.85.
Taking a percent off the "after" amount always uses the wrong base.

### Several changes, backwards

If a price went through several changes, divide by the overall multiplier. A price after 25% off and then 13% tax is
67.80 dollars. The overall multiplier is $0.75 \times 1.13 = 0.8475$, and $67.80 \div 0.8475 = 80$ dollars before.

## Worked examples

**1. Up 10%, down 10%.** Overall: $1.10 \times 0.90 = 0.99$. Down **1%**.

**2. The share price.** Up 50% then down 50%: $1.5 \times 0.5 = 0.75$. Down **25%**: 100 dollars becomes 75.

**3. Three changes.** A price rises 10%, falls 10%, rises 10%.

- $1.10 \times 0.90 \times 1.10 = 1.089$. Overall up **8.9%**, not 10%.

**4. Recovering.** A bike's value dropped 20% in a sale. By what percent must the sale price rise to return to the
original?

- $\dfrac{1}{0.80} = 1.25$: a **25%** rise.
- Check with numbers: 100 down 20% is 80; 80 up 25% is 100. ✓

**5. Before tax.** A total of 50.85 dollars includes 13% HST.

- $50.85 \div 1.13 =$ **45 dollars** before tax. Tax: $50.85 - 45 = 5.85$ dollars.

**6. Before a discount.** A sale price of 68 dollars is after 15% off. Original price?

- $68 \div 0.85 =$ **80 dollars**. Check: $80 \times 0.85 = 68$. ✓

**7. Two steps backwards.** After 25% off and then 13% tax, you pay 67.80 dollars. Original price?

- Overall multiplier $0.75 \times 1.13 = 0.8475$.
- $67.80 \div 0.8475 =$ **80 dollars**.

## Try it

1. A price goes up 20% and then down 20%. What is the overall percent change?
2. A shop takes 30% off and then a further 20% off the sale price. What is the overall discount? Is it 50%?
3. A rent rises 5% a year for three years. What is the total percent rise? Is it 15%?
4. A restaurant bill including 13% HST is 101.70 dollars. What was it before tax?
5. After a 25% raise, a salary is 50 000 dollars. What was it before?
6. An investment loses 40% of its value. What percent gain does it need to get back to where it started?
7. After a 20% discount and then 13% tax, a coat costs 90.40 dollars. What was the original price?
8. Show that for any $x$ between 0 and 1, going up by $x$ (as a decimal) and then down by $x$ leaves less than you
   started with. How much less, as a fraction of the start?

??? note "Answers"
    1. $1.20 \times 0.80 = 0.96$: down **4%**.
    2. $0.70 \times 0.80 = 0.56$: you pay 56%, an overall discount of **44%**, not 50%. The second 20% is taken off
       the already reduced price.
    3. $1.05^3 = 1.157625$: up about **15.76%**, a little more than 15%, because each rise is 5% of a bigger rent.
    4. $101.70 \div 1.13 = 90$ dollars.
    5. $50\,000 \div 1.25 = 40\,000$ dollars. (Not $50\,000 \times 0.75 = 37\,500$.)
    6. Multiplier after the loss: 0.60. To recover: $\dfrac{1}{0.60} \approx 1.667$, a gain of about **66.7%**.
    7. Overall multiplier $0.80 \times 1.13 = 0.904$. $90.40 \div 0.904 = 100$ dollars.
    8. The overall multiplier is $(1 + x)(1 - x) = 1 - x^2$. For $x$ between 0 and 1, $x^2$ is positive, so
       $1 - x^2 < 1$: you end below the start, by exactly $x^2$ of it. (For 10%, $x^2 = 0.01$, which is 1%.)

## Common mistake

**Adding percents in a row.** Up 10% and down 10% is not "no change", and 30% off then 20% off is not 50% off.
Multiply the multipliers.

**Reversing with the wrong base.** To remove a 13% tax from a total, divide by 1.13. Taking 13% of the total and
subtracting it uses the after-tax amount as the base, and gives too little.

## Where it leads

- Back: [Multipliers](01-multipliers.md) · Next: [Percent and percentage points](03-percentage-points.md)
- [Level 6 page](index.md) · [Ratio, rates and money topic page](../index.md)
- Sales tax and tax-included prices: [Level 4](../level-4/index.md).
- The algebra $(1 + x)(1 - x) = 1 - x^2$ is a difference of squares: [Algebra](../../algebra/index.md).
- The same multiplier many times over, as compound interest: [Compound interest](04-compound-interest.md).
