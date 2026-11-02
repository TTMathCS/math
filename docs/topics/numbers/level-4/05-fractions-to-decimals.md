---
title: "Fractions to decimals and back"
---

# Fractions to decimals and back

*Numbers · level 4, lesson 5 of 7*

## A question to start

Type $1 \div 8$ into a calculator and you get 0.125. Neat and tidy. Now type $1 \div 7$:

$$1 \div 7 = 0.142857142857142857\ldots$$

The digits 142857 repeat, forever. And $1 \div 3 = 0.3333\ldots$ never stops either. Why do some fractions give tidy
decimals that stop, while others go on forever? And when they go on forever, why do they always **repeat**, instead
of going wild?

There is a beautiful answer, and you can predict which kind you will get just by looking at the denominator.

## The idea

### A fraction is a division

Remember from level 3: $\tfrac38$ means $3 \div 8$ (3 pizzas shared by 8 people). So to turn a fraction into a
decimal, **divide the numerator by the denominator**, using long division and carrying on past the decimal point.

$3 \div 8$: 8 does not go into 3, so write 0 and a decimal point, and change the 3 ones into 30 tenths.

```
      0 . 3 7 5
    ---------
 8 ) 3 . 0 0 0
       2 4          8 × 3 tenths
       ---
         6 0        6 tenths left = 60 hundredths
         5 6        8 × 7 hundredths
         ---
           4 0      4 hundredths left = 40 thousandths
           4 0      8 × 5 thousandths
           ---
             0      remainder 0: stop
```

So $\tfrac38 = 0.375$. The remainder became 0, so the division stopped. A decimal that stops is called a
**terminating decimal** ("terminate" means "end").

### Decimals that never stop

Now $1 \div 3$. Change 1 into 10 tenths: $10 \div 3 = 3$, remainder 1. Change that 1 tenth into 10 hundredths:
$10 \div 3 = 3$, remainder 1. Again, remainder 1. And again...

The remainder is **always 1**, so every step looks exactly like the one before, and the digit is always 3. The
division can never stop:

$$\frac13 = 0.3333\ldots$$

A decimal in which a block of digits repeats forever is a **repeating decimal**. We write a bar over the block that
repeats: $0.\overline{3}$. The bar replaces the dots and says exactly what repeats.

### Why the digits must repeat: the remainders

Let us watch the remainders when we divide 1 by 7.

| Step | Divide | Digit | Remainder |
| --- | --- | --- | --- |
| 1 | $10 \div 7$ | 1 | 3 |
| 2 | $30 \div 7$ | 4 | 2 |
| 3 | $20 \div 7$ | 2 | 6 |
| 4 | $60 \div 7$ | 8 | 4 |
| 5 | $40 \div 7$ | 5 | 5 |
| 6 | $50 \div 7$ | 7 | 1 |
| 7 | $10 \div 7$ | 1 | 3 |

At step 6 the remainder is 1 again, the same as at the very start. So step 7 is exactly the same as step 1, step 8
the same as step 2, and so on forever. The digits 142857 come round again and again:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 230" role="img" aria-label="A cycle of the remainders when dividing by 7: 1, 3, 2, 6, 4, 5 and back to 1. The digits written along the way are 1, 4, 2, 8, 5, 7">
  <defs><marker id="ar7" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
  <circle cx="200.0" cy="35.0" r="15" fill="#9cc9ea" stroke="currentColor"/><text x="200.0" y="40.0" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="269.3" cy="75.0" r="15" fill="#9cc9ea" stroke="currentColor"/><text x="269.3" y="80.0" font-size="14" text-anchor="middle" fill="currentColor">3</text>
  <circle cx="269.3" cy="155.0" r="15" fill="#9cc9ea" stroke="currentColor"/><text x="269.3" y="160.0" font-size="14" text-anchor="middle" fill="currentColor">2</text>
  <circle cx="200.0" cy="195.0" r="15" fill="#9cc9ea" stroke="currentColor"/><text x="200.0" y="200.0" font-size="14" text-anchor="middle" fill="currentColor">6</text>
  <circle cx="130.7" cy="155.0" r="15" fill="#9cc9ea" stroke="currentColor"/><text x="130.7" y="160.0" font-size="14" text-anchor="middle" fill="currentColor">4</text>
  <circle cx="130.7" cy="75.0" r="15" fill="#9cc9ea" stroke="currentColor"/><text x="130.7" y="80.0" font-size="14" text-anchor="middle" fill="currentColor">5</text>
  <g stroke="currentColor" stroke-width="1.5">
    <line x1="215.6" y1="44.0" x2="252.0" y2="65.0" marker-end="url(#ar7)"/>
    <line x1="269.3" y1="93.0" x2="269.3" y2="135.0" marker-end="url(#ar7)"/>
    <line x1="253.7" y1="164.0" x2="217.3" y2="185.0" marker-end="url(#ar7)"/>
    <line x1="184.4" y1="186.0" x2="148.0" y2="165.0" marker-end="url(#ar7)"/>
    <line x1="130.7" y1="137.0" x2="130.7" y2="95.0" marker-end="url(#ar7)"/>
    <line x1="146.3" y1="66.0" x2="182.7" y2="45.0" marker-end="url(#ar7)"/>
  </g>
  <g font-size="14" text-anchor="middle" fill="currentColor" font-weight="bold">
    <text x="242.6" y="46.1">1</text><text x="285.3" y="120.0">4</text><text x="242.6" y="193.9">2</text>
    <text x="157.4" y="193.9">8</text><text x="114.7" y="120.0">5</text><text x="157.4" y="46.1">7</text>
  </g>
  <g font-size="12" fill="currentColor">
    <text x="300" y="30">circles: remainders</text>
    <text x="300" y="48">bold: digits of 1/7</text>
  </g>
</svg>
</div>

$$\frac17 = 0.\overline{142857}$$

Here is the key reason, and it works for **every** fraction. When you divide by 7, every remainder must be less than
7 (level 3: otherwise you could share more). So the only possible remainders are 0, 1, 2, 3, 4, 5, 6.

- If a remainder is ever **0**, the division stops: a terminating decimal.
- If not, the remainders can only be 1 to 6. There are only 6 of them, so within 6 steps one of them **must come
  back**. And the moment a remainder comes back, everything after it repeats.

So when you divide by any whole number $n$, the decimal either stops or repeats, and the repeating block is at most
$n - 1$ digits long. A fraction can never give a decimal that goes on forever **without** repeating. (Decimals that
never repeat do exist, like the digits of $\pi$, but they are not fractions. That story is in [Level
6](../level-6/index.md).)

### Some famous repeating decimals

- $\tfrac19 = 0.\overline{1}$, $\tfrac29 = 0.\overline{2}$, ..., $\tfrac89 = 0.\overline{8}$
- $\tfrac{1}{11} = 0.\overline{09}$, $\tfrac{2}{11} = 0.\overline{18}$, $\tfrac{3}{11} = 0.\overline{27}$ (the block
  is $9 \times$ the numerator)
- $\tfrac16 = 0.1\overline{6}$ (here the 1 does not repeat; only the 6 does)
- $\tfrac{2}{7} = 0.\overline{285714}$: the same six digits as $\tfrac17$, starting at a different place in the circle.
  (The division $2 \div 7$ starts at remainder 2.)

### Which fractions terminate?

Look at which fractions gave terminating decimals: $\tfrac12$, $\tfrac14$, $\tfrac38$, $\tfrac{7}{20}$,
$\tfrac{9}{25}$, $\tfrac{3}{40}$. And which repeat: $\tfrac13$, $\tfrac16$, $\tfrac17$, $\tfrac19$, $\tfrac{1}{11}$,
$\tfrac{5}{12}$.

The pattern: **a fraction in lowest terms gives a terminating decimal exactly when its denominator has no prime
factors other than 2 and 5.** (A **prime** is a whole number bigger than 1 whose only factors are 1 and itself: 2, 3,
5, 7, 11, ... Breaking a number into primes is in [Number theory](../../number-theory/index.md).)

- $8 = 2 \times 2 \times 2$, $20 = 2 \times 2 \times 5$, $25 = 5 \times 5$, $40 = 2 \times 2 \times 2 \times 5$: only 2s
  and 5s. These terminate.
- $3$, $6 = 2 \times 3$, $7$, $9 = 3 \times 3$, $11$, $12 = 2 \times 2 \times 3$: each has a prime other than 2 or 5.
  These repeat.

**Why?** A terminating decimal is a fraction with denominator 10, 100, 1000, ...: $0.375 = \tfrac{375}{1000}$. And
$10 = 2 \times 5$, $100 = 2 \times 2 \times 5 \times 5$, $1000 = 2 \times 2 \times 2 \times 5 \times 5 \times 5$.
These numbers are made **only of 2s and 5s**.

- If the denominator is made only of 2s and 5s, you can always multiply it up to a power of 10 by adding the missing
  2s or 5s. For $\tfrac{3}{40}$: $40 = 2 \times 2 \times 2 \times 5$, which needs two more 5s to make
  $1000 = 2 \times 2 \times 2 \times 5 \times 5 \times 5$. So multiply top and bottom by $5 \times 5 = 25$:
  $\tfrac{3}{40} = \tfrac{75}{1000} = 0.075$.
- If the denominator has a 3 (or 7, or 11, ...), no amount of multiplying will turn it into 10, 100 or 1000, because
  those numbers have no factor of 3. So the fraction can never be written over a power of ten, and it cannot be a
  terminating decimal.

**Lowest terms matters.** $\tfrac{3}{6}$ has a 3 in its denominator, but $\tfrac36 = \tfrac12 = 0.5$ terminates.
Always simplify first.

### Decimals back to fractions

A terminating decimal is easy to turn into a fraction: read its place value, then simplify.

$$0.375 = \frac{375}{1000} = \frac{3}{8} \qquad 0.36 = \frac{36}{100} = \frac{9}{25} \qquad 2.05 = 2\tfrac{5}{100} = 2\tfrac{1}{20}$$

Repeating decimals can be turned back into fractions too, with a clever trick that you will meet in [Level
6](../level-6/index.md). For now, here is a taste: you know $0.\overline{1} = \tfrac19$, so
$0.\overline{4} = 4 \times \tfrac19 = \tfrac49$.

## Worked examples

**1. Divide.** Write $\tfrac{7}{20}$ as a decimal. Either divide $7 \div 20 = 0.35$, or notice
$20 \times 5 = 100$, so $\tfrac{7}{20} = \tfrac{35}{100} = 0.35$.

**2. Repeating.** Write $\tfrac56$ as a decimal. $50 \div 6 = 8$ r 2; $20 \div 6 = 3$ r 2; remainder 2 again, so 3
forever. $\tfrac56 = 0.8\overline{3}$.

**3. Predict.** Without dividing, which terminate? $\tfrac{7}{16}$, $\tfrac{4}{15}$, $\tfrac{9}{12}$.

- $16 = 2 \times 2 \times 2 \times 2$: only 2s. **Terminates** ($0.4375$).
- $\tfrac{4}{15}$ is in lowest terms and $15 = 3 \times 5$ has a 3. **Repeats** ($0.2\overline{6}$).
- $\tfrac{9}{12} = \tfrac34$ in lowest terms, and $4 = 2 \times 2$. **Terminates** ($0.75$).

**4. Make a power of ten.** $\tfrac{1}{16}$: $16 = 2 \times 2 \times 2 \times 2$ needs four 5s to make
$10\,000$. $5 \times 5 \times 5 \times 5 = 625$, so $\tfrac{1}{16} = \tfrac{625}{10\,000} = 0.0625$.

**5. Back to a fraction.** $0.45 = \tfrac{45}{100} = \tfrac{9}{20}$ (divide by 5).

**6. Longest possible block.** When dividing by 13, how long can the repeating block be at most? The remainders can
be 1 to 12, so at most **12** digits. (In fact $\tfrac{1}{13} = 0.\overline{076923}$, a block of 6.)

## Try it

1. Write as decimals by dividing: (a) $\tfrac58$ (b) $\tfrac{3}{16}$.
2. Write as repeating decimals with a bar: (a) $\tfrac23$ (b) $\tfrac{5}{11}$ (c) $\tfrac{7}{12}$.
3. Write the first 12 decimal digits of $\tfrac37$ without doing a new division. (Hint: the circle of remainders.)
4. Which terminate? $\tfrac{3}{25}$, $\tfrac{5}{14}$, $\tfrac{6}{30}$, $\tfrac{1}{80}$. Explain each.
5. Write as fractions in lowest terms: (a) 0.8 (b) 0.125 (c) 0.04 (d) 3.75.
6. Use $0.\overline{1} = \tfrac19$ to write $0.\overline{7}$ as a fraction. What do you think $0.\overline{9}$ equals?
7. Make the denominator a power of ten to write $\tfrac{11}{40}$ as a decimal.
8. Harder: explain why $\tfrac{1}{17}$ must have a repeating block of at most 16 digits. Why can it not terminate?

??? note "Answers"
    1. (a) $50 \div 8 = 6$ r 2, $20 \div 8 = 2$ r 4, $40 \div 8 = 5$ r 0: **0.625**. (b) $30 \div 16 = 1$ r 14,
       $140 \div 16 = 8$ r 12, $120 \div 16 = 7$ r 8, $80 \div 16 = 5$ r 0: **0.1875**.
    2. (a) remainder 2 every time: $0.\overline{6}$. (b) $\tfrac{5}{11} = 0.\overline{45}$ ($9 \times 5 = 45$).
       (c) $70 \div 12 = 5$ r 10, $100 \div 12 = 8$ r 4, $40 \div 12 = 3$ r 4, ...: $0.58\overline{3}$.
    3. $3 \div 7$ starts at remainder 3. In the circle, the digit after remainder 3 is 4, then 2, 8, 5, 7, 1. So
       $\tfrac37 = 0.428571428571\ldots = 0.\overline{428571}$.
    4. $\tfrac{3}{25}$: $25 = 5 \times 5$, terminates (0.12). $\tfrac{5}{14}$: lowest terms, $14 = 2 \times 7$,
       repeats. $\tfrac{6}{30} = \tfrac15$, terminates (0.2). $\tfrac{1}{80}$:
       $80 = 2 \times 2 \times 2 \times 2 \times 5$, terminates (0.0125).
    5. (a) $\tfrac{8}{10} = \tfrac45$ (b) $\tfrac{125}{1000} = \tfrac18$ (c) $\tfrac{4}{100} = \tfrac{1}{25}$
       (d) $3\tfrac{75}{100} = 3\tfrac34$.
    6. $0.\overline{7} = 7 \times \tfrac19 = \tfrac79$. Following the pattern, $0.\overline{9} = \tfrac99 = 1$. That
       is true, and surprising! [Level 6](../level-6/index.md) and [Infinity](../../infinity/index.md) explain why.
    7. $40 = 2 \times 2 \times 2 \times 5$ needs two more 5s: multiply by 25.
       $\tfrac{11}{40} = \tfrac{275}{1000} = 0.275$.
    8. The remainders when dividing by 17 can only be 0 to 16. 17 is prime and not 2 or 5, so the fraction cannot be
       written over a power of ten, so the remainder is never 0. That leaves only 1 to 16: 16 possible remainders,
       so one must repeat within 16 steps. (In fact the block is exactly 16 digits long.)

## Common mistake

**Forgetting to simplify before predicting.** $\tfrac{3}{12}$ has a 3 in the denominator, but
$\tfrac{3}{12} = \tfrac14 = 0.25$ terminates. The 2-and-5 test only works in lowest terms.

**Thinking 0.33 is one third.** 0.33 is $\tfrac{33}{100}$, a little less than $\tfrac13$. One third is
$0.\overline{3}$, with the 3s going on forever. Rounding is fine for a measurement, but they are not the same number.

## Where it leads

- Previous: [Calculating with decimals](04-decimal-operations.md) · Next: [Negative
  numbers](06-negative-numbers.md).
- [Level 4 page](index.md) · [Numbers topic page](../index.md)
- Prime factors, the key to the 2-and-5 test: [Number theory](../../number-theory/index.md). The length of the
  repeating block of $\tfrac1p$ is a famous question there too.
- Turning **any** repeating decimal into a fraction, and decimals that never repeat: [Level 6](../level-6/index.md).
- Fractions, decimals and percents side by side: [Ratio](../../ratio/index.md).
