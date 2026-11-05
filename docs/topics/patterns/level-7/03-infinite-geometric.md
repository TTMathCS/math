---
title: "Infinite geometric series"
---

# Infinite geometric series

*Patterns and sequences · level 7, lesson 3 of 6*

## A question to start

A ball is dropped from a height of 10 metres. Each time it bounces, it rises to 60% of the height it fell from:
6 m, then 3.6 m, then 2.16 m, and so on. In theory it bounces forever, an infinite number of times.

How far does it travel altogether, up and down? Infinitely far, because it makes infinitely many bounces? Or some
ordinary number of metres? The answer is exactly **40 metres**, and by the end of this lesson you will be able to
prove it.

## The idea

### Adding infinitely many numbers

In [level 6](../level-6/index.md) you added the first $n$ terms of a geometric sequence with first term $a$ and common
ratio $r$:

$$S_n = a + ar + ar^2 + \cdots + ar^{n-1} = \frac{a(1 - r^n)}{1 - r} \qquad (r \ne 1).$$

What could it mean to add **all** the terms, forever? Nobody can do infinitely many additions. Instead we look at the
**partial sums** $S_1, S_2, S_3, \ldots$, the totals so far, and ask whether they settle down towards one number. If
they do, that number is called the **sum to infinity** and written $S_\infty$ or $S$. If they do not settle, we say
the series has **no sum** (it **diverges**).

### A square of paper

Take a square of area 1. Shade half of it. Then shade half of what is left, then half of what is still left, and so on.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 180" role="img" aria-label="A unit square cut into pieces of area one half, one quarter, one eighth, one sixteenth, one thirty-second and one sixty-fourth, with a tiny unshaded corner left">
  <g stroke="currentColor" stroke-width="1.5">
    <rect x="20" y="10" width="80" height="160" fill="#eea66f"/>
    <rect x="100" y="10" width="80" height="80" fill="#9cc9ea"/>
    <rect x="100" y="90" width="40" height="80" fill="#7ccf9a"/>
    <rect x="140" y="90" width="40" height="40" fill="#eea66f"/>
    <rect x="140" y="130" width="20" height="40" fill="#9cc9ea"/>
    <rect x="160" y="130" width="20" height="20" fill="#7ccf9a"/>
    <rect x="160" y="150" width="20" height="20" fill="none"/>
  </g>
  <text x="60" y="95" font-size="16" text-anchor="middle" fill="currentColor">1/2</text>
  <text x="140" y="55" font-size="16" text-anchor="middle" fill="currentColor">1/4</text>
  <text x="120" y="135" font-size="13" text-anchor="middle" fill="currentColor">1/8</text>
  <text x="160" y="114" font-size="11" text-anchor="middle" fill="currentColor">1/16</text>
  <text x="200" y="100" font-size="12" fill="currentColor">The pieces fill</text>
  <text x="200" y="116" font-size="12" fill="currentColor">the square more</text>
  <text x="200" y="132" font-size="12" fill="currentColor">and more; the gap</text>
  <text x="200" y="148" font-size="12" fill="currentColor">left after n pieces</text>
  <text x="200" y="164" font-size="12" fill="currentColor">is (1/2)ⁿ.</text>
</svg>
</div>

After one piece, $\frac12$ is shaded; after two, $\frac34$; after three, $\frac78$:

| pieces $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| shaded $S_n$ | 0.5 | 0.75 | 0.875 | 0.9375 | 0.96875 | 0.984375 | 0.9990234375 |
| gap $1 - S_n$ | 0.5 | 0.25 | 0.125 | 0.0625 | 0.03125 | 0.015625 | 0.0009765625 |

The pieces never overlap and never spill out of the square, so the shaded area never passes 1. And the gap left over
halves every time, so it becomes smaller than any size you name: smaller than a thousandth after 10 pieces, smaller
than a millionth after 20. The partial sums close in on 1, and nothing less than 1 can be the number they settle on.
So

$$\frac12 + \frac14 + \frac18 + \frac1{16} + \cdots = 1.$$

### The general case: watch the remainder

Now any geometric series. Split the formula for $S_n$ into two pieces:

$$S_n = \frac{a(1 - r^n)}{1 - r} = \frac{a}{1 - r} - \frac{a\,r^n}{1 - r}.$$

The first piece, $\frac{a}{1 - r}$, does not depend on $n$ at all. The second piece is the **remainder**: how far the
partial sum is from $\frac{a}{1 - r}$. Everything depends on what $r^n$ does as $n$ grows.

- If $-1 < r < 1$ (written $|r| < 1$), then $r^n$ shrinks towards 0. For example $0.6^{10} \approx 0.006$ and
  $0.6^{30} \approx 0.000\,000\,2$. So the remainder shrinks to 0 and the partial sums settle on $\frac{a}{1-r}$.

This gives the main result of the lesson:

$$S_\infty = a + ar + ar^2 + \cdots = \frac{a}{1 - r} \qquad \text{when } |r| < 1.$$

### Why does $r^n$ shrink to 0?

It feels obvious that multiplying by 0.99 again and again gets you close to 0, but 0.99 is very close to 1, so it is
worth a real reason. Take $0 < r < 1$ and write $\frac{1}{r} = 1 + h$, where $h > 0$. (For $r = 0.99$, $h$ is about
0.0101.) Multiplying out $(1 + h)^n$ gives $1 + nh$ plus other terms that are all positive, so

$$(1 + h)^n \ge 1 + nh, \qquad\text{and therefore}\qquad r^n = \frac{1}{(1 + h)^n} \le \frac{1}{1 + nh}.$$

As $n$ grows, $1 + nh$ grows past any number you like (it goes up by $h$ each time), so $\frac{1}{1 + nh}$, and
$r^n$ with it, gets as close to 0 as you like. For a negative $r$ between $-1$ and 0, $r^n$ has the same size as
$|r|^n$, only with flipping signs, so it shrinks to 0 too. (The inequality $(1 + h)^n \ge 1 + nh$ is called
Bernoulli's inequality; in [level 8](../level-8/index.md) you will prove it by induction.)

### When there is no sum

- If $r = 1$: $a + a + a + \cdots$. The partial sums are $a, 2a, 3a, \ldots$, which grow without end (if $a \ne 0$).
- If $r > 1$: the terms themselves grow, so the partial sums grow without end. $1 + 2 + 4 + 8 + \cdots$ has no sum.
- If $r = -1$: $1 - 1 + 1 - 1 + \cdots$ has partial sums $1, 0, 1, 0, \ldots$, which jump for ever and never settle.
- If $r < -1$: the terms swing further and further each way, and the partial sums swing wider and wider.

In every case with $|r| \ge 1$ the terms do **not** shrink to 0, and a series whose terms do not shrink to 0 can never
settle. The formula $\frac{a}{1 - r}$ still gives a number when you put in $r = 2$, but that number ($-a$) means
nothing. Always **check $|r| < 1$ first**.

<figure class="play" data-play="seq" data-kind="geom"><span class="ai-tag">AI-created</span><figcaption><b>An infinite sum that settles.</b> Set r = 0.5 and add terms: the sum creeps up towards 2a.</figcaption></figure>

## Worked examples

**1. A first sum.** Find $8 + 4 + 2 + 1 + \cdots$.

$a = 8$, $r = \frac12$, and $|r| < 1$, so $S_\infty = \frac{8}{1 - \frac12} = \frac{8}{\frac12} = 16$.

**2. Alternating signs.** Find $1 - \frac12 + \frac14 - \frac18 + \cdots$.

$a = 1$, $r = -\frac12$, and $|r| < 1$, so $S_\infty = \frac{1}{1 - (-\frac12)} = \frac{1}{\frac32} = \frac23$.
The partial sums $1, 0.5, 0.75, 0.625, 0.6875, \ldots$ hop above and below $\frac23$, closer each time.

**3. A repeating decimal as a fraction.** Write $0.272727\ldots$ as a fraction.

$$0.272727\ldots = \frac{27}{100} + \frac{27}{10\,000} + \frac{27}{1\,000\,000} + \cdots,$$

with $a = \frac{27}{100}$ and $r = \frac{1}{100}$. So the sum is $\frac{27/100}{99/100} = \frac{27}{99} = \frac{3}{11}$.
Check: $3 \div 11 = 0.2727\ldots$ ✓. Every repeating decimal is a geometric series, which is why every repeating
decimal is a fraction. (What this says about $0.999\ldots$ is a puzzle for [Infinity](../../infinity/index.md).)

**4. The bouncing ball.** Back to the ball dropped from 10 m that rebounds to 60% each time.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 185" role="img" aria-label="A ball's path: a drop of 10 metres, then bounces of 6, 3.6, 2.16 and 1.296 metres, each 60 percent of the one before">
  <line x1="10" y1="170" x2="350" y2="170" stroke="currentColor" stroke-width="2"/>
  <line x1="50" y1="30" x2="50" y2="170" stroke="#eea66f" stroke-width="2.5"/>
  <circle cx="50" cy="30" r="6" fill="#eea66f"/>
  <path d="M 50 170 Q 100 2 150 170" fill="none" stroke="#9cc9ea" stroke-width="2.5"/>
  <path d="M 150 170 Q 190 69.2 230 170" fill="none" stroke="#9cc9ea" stroke-width="2.5"/>
  <path d="M 230 170 Q 260 109.5 290 170" fill="none" stroke="#9cc9ea" stroke-width="2.5"/>
  <path d="M 290 170 Q 312 133.7 334 170" fill="none" stroke="#9cc9ea" stroke-width="2.5"/>
  <text x="38" y="105" font-size="12" text-anchor="end" fill="currentColor">10</text>
  <text x="100" y="78" font-size="12" text-anchor="middle" fill="currentColor">6</text>
  <text x="190" y="112" font-size="12" text-anchor="middle" fill="currentColor">3.6</text>
  <text x="260" y="132" font-size="12" text-anchor="middle" fill="currentColor">2.16</text>
  <text x="312" y="146" font-size="11" text-anchor="middle" fill="currentColor">1.3</text>
</svg>
</div>

- First, the drop: 10 m down.
- After that, every bounce goes **up and then down** the same height. The bounce heights $6, 3.6, 2.16, \ldots$ form
  a geometric series with $a = 6$ and $r = 0.6$, whose sum is $\frac{6}{1 - 0.6} = \frac{6}{0.4} = 15$ m.
- Up and down doubles this: 30 m.

Total: $10 + 30 = 40$ metres. Infinitely many bounces, finite distance, because the bounces shrink fast enough. (Real
balls stop after a few dozen bounces, but the model is very close.)

**5. A snowflake with finite area and endless edge.** Start with an equilateral triangle of area $A$. On the middle
third of every side, stick on a small equilateral triangle pointing outwards. Repeat on every side of the new shape,
forever. This is the **Koch snowflake**.

- Step 1 adds 3 triangles, each $\frac19$ of the area of the big one (a third the side length gives a ninth the area):
  $\frac{3A}{9} = \frac{A}{3}$.
- Each step multiplies the number of sides by 4 and shrinks the new triangles' area by 9, so each step adds
  $\frac49$ of the area the step before added: $\frac{A}{3}, \frac{A}{3} \cdot \frac49, \ldots$

The extra area is a geometric series with $r = \frac49$: $\frac{A/3}{1 - 4/9} = \frac{A}{3} \cdot \frac95 = \frac{3A}{5}$.
The snowflake's area is $A + \frac{3A}{5} = \frac{8A}{5}$, finite. But each step replaces every side by 4 pieces each
a third as long, multiplying the perimeter by $\frac43$. With $r = \frac43 > 1$, the perimeter grows without end. The
same picture holds one series with a sum and one without.

**6. How many terms are enough?** How many terms of $1 + \frac12 + \frac14 + \cdots$ get within 0.001 of the sum, 2?

The remainder after $n$ terms is $\frac{a r^n}{1 - r} = \frac{(1/2)^n}{1/2} = \frac{1}{2^{\,n-1}}$. We need
$2^{\,n-1} > 1000$. Since $2^9 = 512$ and $2^{10} = 1024$, we need $n - 1 \ge 10$: **11 terms**.

## Try it

1. Find $12 + 6 + 3 + \cdots$.
2. Find $5 - \frac53 + \frac59 - \cdots$.
3. Write $0.363636\ldots$ as a fraction in lowest terms.
4. Which of these have a sum? Find it where it exists. (a) $1 + 1.1 + 1.21 + \cdots$ (b) $9 - 6 + 4 - \cdots$
   (c) $2 - 2 + 2 - 2 + \cdots$
5. For which $x$ does $1 + x + x^2 + x^3 + \cdots$ have a sum? Find $x$ if the sum is 5.
6. A ball is dropped from 3 m and each bounce reaches $\frac23$ of the height before. Find the total distance.
7. A geometric series has sum 4, and the series of the squares of its terms has sum $\frac{16}{3}$. Find $a$ and $r$.
8. How many terms of $1 + \frac13 + \frac19 + \cdots$ are needed for the partial sum to be within 0.0001 of the sum?

??? note "Answers"
    1. $a = 12$, $r = \frac12$: $\frac{12}{1/2} =$ **24**.
    2. $a = 5$, $r = -\frac13$: $\frac{5}{1 + 1/3} = \frac{5}{4/3} =$ **$\frac{15}{4}$**.
    3. $a = \frac{36}{100}$, $r = \frac{1}{100}$: $\frac{36}{99} =$ **$\frac{4}{11}$**.
    4. (a) $r = 1.1 > 1$: **no sum**. (b) $r = -\frac23$, $|r| < 1$: $\frac{9}{1 + 2/3} = \frac{9}{5/3} =$ **$\frac{27}{5}$**.
       (c) $r = -1$: **no sum** (partial sums $2, 0, 2, 0, \ldots$).
    5. It is geometric with $a = 1$ and $r = x$, so it has a sum exactly when **$-1 < x < 1$**, and then the sum is
       $\frac{1}{1 - x}$. Setting $\frac{1}{1 - x} = 5$ gives $1 - x = \frac15$, so **$x = \frac45$**.
    6. Drop 3 m. Bounces: $2 + \frac43 + \cdots$ with sum $\frac{2}{1 - 2/3} = 6$ m, doubled for up and down: 12 m.
       Total **15 m**.
    7. $\frac{a}{1 - r} = 4$ gives $a = 4(1 - r)$. The squares $a^2, a^2r^2, a^2r^4, \ldots$ form a geometric series
       with ratio $r^2$, sum $\frac{a^2}{1 - r^2}$. Substituting,
       $\frac{16(1 - r)^2}{(1 - r)(1 + r)} = \frac{16(1 - r)}{1 + r} = \frac{16}{3}$, so $3(1 - r) = 1 + r$, $r = \frac12$,
       and **$a = 2$**. (Check: $2 + 1 + \frac12 + \cdots = 4$ and $4 + 1 + \frac14 + \cdots = \frac{4}{3/4} = \frac{16}{3}$. ✓)
    8. The sum is $\frac{1}{1 - 1/3} = \frac32$. The remainder is $\frac{(1/3)^n}{2/3} = \frac{3}{2 \cdot 3^n}$. We need
       $\frac{3}{2 \cdot 3^n} < 0.0001$, so $3^n > 15\,000$. $3^8 = 6561$ is too small, $3^9 = 19\,683$ is enough:
       **9 terms**.

## Common mistake

**Using $\frac{a}{1-r}$ when $|r| \ge 1$.** For $1 + 3 + 9 + \cdots$ the formula gives $\frac{1}{1 - 3} = -\frac12$,
a negative "sum" of positive numbers. That is a sure sign the formula did not apply.

**Forgetting the extra trip in bounce questions.** Every bounce after the first drop is travelled twice (up, then
down), but the first drop is travelled once. Add the drop separately.

## Where it leads

- Back: [Arithmetic series, carefully](02-arithmetic-series.md) · Next: [Recursion and the golden ratio](04-golden-ratio.md).
- [Level 7 page](index.md) · [Patterns topic page](../index.md)
- Zeno's paradoxes, $0.999\ldots = 1$ and other puzzles about the infinite: [Infinity](../../infinity/index.md).
- The idea of a limit, made exact: [MAT137 Unit 11 (sequences)](../../../uoft/MAT137/unit11.md) and
  [Unit 13 (series)](../../../uoft/MAT137/unit13.md), where the geometric series is the first series studied.
