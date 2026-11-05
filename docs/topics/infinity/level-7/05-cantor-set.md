---
title: "The Cantor set"
---

# The Cantor set

*Infinity and strange math · level 7, lesson 5 of 6*

## A question to start

Take a stick 1 metre long. Cut out its middle third. From each of the two pieces left, cut out the middle third.
From each of the four pieces left, cut out the middle third. Keep going, forever.

Add up everything you threw away. The answer is exactly 1 metre: the whole length of the stick.

So is anything left? It feels as if the answer must be "no", or at most a few lonely points such as the two ends. In
fact what is left is a dust of points with **no length at all**, and yet there are just as many of them as there are
points on the whole stick: uncountably many. This dust is the **Cantor set**, described by Cantor in 1883, and it is
one of the strangest objects in mathematics.

## The idea

### Building it

Start with the interval $[0, 1]$: all numbers from 0 to 1, ends included. Call it stage 0.

- **Stage 1.** Remove the open middle third $\left(\tfrac13, \tfrac23\right)$. Two pieces are left:
  $\left[0, \tfrac13\right]$ and $\left[\tfrac23, 1\right]$.
- **Stage 2.** Remove the open middle third of each piece. Four pieces of length $\tfrac19$ are left:
  $\left[0, \tfrac19\right]$, $\left[\tfrac29, \tfrac13\right]$, $\left[\tfrac23, \tfrac79\right]$,
  $\left[\tfrac89, 1\right]$.
- **Stage $n$.** Remove the middle third of each of the $2^{n-1}$ pieces from stage $n - 1$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 205" role="img" aria-label="The first five stages of the Cantor set: a bar, then two bars with the middle third removed, then four, eight and sixteen bars">
  <text x="22" y="28" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <rect x="40.00" y="18" width="300.00" height="12" fill="#9cc9ea"/>
  <text x="22" y="62" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <rect x="40.00" y="52" width="100.00" height="12" fill="#eea66f"/>
  <rect x="240.00" y="52" width="100.00" height="12" fill="#eea66f"/>
  <text x="22" y="96" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <rect x="40.00" y="86" width="33.33" height="12" fill="#9cc9ea"/>
  <rect x="106.67" y="86" width="33.33" height="12" fill="#9cc9ea"/>
  <rect x="240.00" y="86" width="33.33" height="12" fill="#9cc9ea"/>
  <rect x="306.67" y="86" width="33.33" height="12" fill="#9cc9ea"/>
  <text x="22" y="130" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <rect x="40.00" y="120" width="11.11" height="12" fill="#eea66f"/>
  <rect x="62.22" y="120" width="11.11" height="12" fill="#eea66f"/>
  <rect x="106.67" y="120" width="11.11" height="12" fill="#eea66f"/>
  <rect x="128.89" y="120" width="11.11" height="12" fill="#eea66f"/>
  <rect x="240.00" y="120" width="11.11" height="12" fill="#eea66f"/>
  <rect x="262.22" y="120" width="11.11" height="12" fill="#eea66f"/>
  <rect x="306.67" y="120" width="11.11" height="12" fill="#eea66f"/>
  <rect x="328.89" y="120" width="11.11" height="12" fill="#eea66f"/>
  <text x="22" y="164" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <rect x="40.00" y="154" width="3.70" height="12" fill="#9cc9ea"/>
  <rect x="47.41" y="154" width="3.70" height="12" fill="#9cc9ea"/>
  <rect x="62.22" y="154" width="3.70" height="12" fill="#9cc9ea"/>
  <rect x="69.63" y="154" width="3.70" height="12" fill="#9cc9ea"/>
  <rect x="106.67" y="154" width="3.70" height="12" fill="#9cc9ea"/>
  <rect x="114.07" y="154" width="3.70" height="12" fill="#9cc9ea"/>
  <rect x="128.89" y="154" width="3.70" height="12" fill="#9cc9ea"/>
  <rect x="136.30" y="154" width="3.70" height="12" fill="#9cc9ea"/>
  <rect x="240.00" y="154" width="3.70" height="12" fill="#9cc9ea"/>
  <rect x="247.41" y="154" width="3.70" height="12" fill="#9cc9ea"/>
  <rect x="262.22" y="154" width="3.70" height="12" fill="#9cc9ea"/>
  <rect x="269.63" y="154" width="3.70" height="12" fill="#9cc9ea"/>
  <rect x="306.67" y="154" width="3.70" height="12" fill="#9cc9ea"/>
  <rect x="314.07" y="154" width="3.70" height="12" fill="#9cc9ea"/>
  <rect x="328.89" y="154" width="3.70" height="12" fill="#9cc9ea"/>
  <rect x="336.30" y="154" width="3.70" height="12" fill="#9cc9ea"/>
  <line x1="40.0" y1="180" x2="40.0" y2="188" stroke="currentColor" stroke-width="1"/>
  <text x="40.0" y="202" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <line x1="140.0" y1="180" x2="140.0" y2="188" stroke="currentColor" stroke-width="1"/>
  <text x="140.0" y="202" font-size="12" text-anchor="middle" fill="currentColor">1/3</text>
  <line x1="240.0" y1="180" x2="240.0" y2="188" stroke="currentColor" stroke-width="1"/>
  <text x="240.0" y="202" font-size="12" text-anchor="middle" fill="currentColor">2/3</text>
  <line x1="340.0" y1="180" x2="340.0" y2="188" stroke="currentColor" stroke-width="1"/>
  <text x="340.0" y="202" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <line x1="40" y1="180" x2="340" y2="180" stroke="currentColor" stroke-width="1"/>
</svg>
</div>

("Open" means the end points of each removed middle are **not** removed. That is why $\tfrac13$ and $\tfrac23$ stay.)

The **Cantor set** $C$ is what is left after **all** the stages: the numbers that are never removed at any stage.

### Counting pieces and length

At stage $n$ there are $2^n$ pieces, each of length $\left(\tfrac13\right)^n$. So the total length left is

$$2^n \times \frac{1}{3^n} = \left(\frac23\right)^n.$$

Stage 1 leaves $\tfrac23$, stage 2 leaves $\tfrac49$, stage 4 leaves $\tfrac{16}{81} \approx 0.198$, stage 10
leaves about $0.017$. Because $\tfrac23 < 1$, these shrink towards 0.

Now add up what was thrown away. Stage 1 removes one piece of length $\tfrac13$. Stage 2 removes two pieces of length
$\tfrac19$. Stage 3 removes four pieces of length $\tfrac1{27}$. In all:

$$\frac13 + \frac29 + \frac4{27} + \frac8{81} + \cdots$$

This is a geometric series with first term $\tfrac13$ and ratio $\tfrac23$, so its sum is

$$\frac{1/3}{1 - 2/3} = \frac{1/3}{1/3} = 1.$$

The removed pieces have total length 1, the length of the whole interval. The Cantor set has **length zero**.

### What is left? First guess: the end points

Every end point of every piece stays forever: $0, 1, \tfrac13, \tfrac23, \tfrac19, \tfrac29, \tfrac79, \tfrac89,
\ldots$ Each stage only cuts out middles, never ends. So $C$ certainly contains infinitely many points.

But the end points are fractions with denominator a power of 3, so they are countable. If that were all, the Cantor
set would be a countable sprinkle. It is much more than that.

### The key: writing numbers in base 3

In base 10, the digits after the point count tenths, hundredths, and so on. In **base 3** (also called **ternary**)
the digits are only 0, 1 and 2, and they count thirds, ninths, twenty-sevenths, and so on. We mark base 3 with a small
3:

$$0.d_1 d_2 d_3 \ldots{}_3 = \frac{d_1}{3} + \frac{d_2}{9} + \frac{d_3}{27} + \cdots$$

For example $0.2_3 = \tfrac23$, $0.12_3 = \tfrac13 + \tfrac29 = \tfrac59$, and $0.0222\ldots{}_3 = \tfrac13$, for the
same reason that $0.0999\ldots = 0.1$ in base 10.

The first digit says which third of $[0, 1]$ the number is in: first digit 0 means the left third, 1 the middle
third, 2 the right third. The second digit says which third of **that** third, and so on. So:

- removing the middle third at stage 1 removes exactly the numbers whose first ternary digit **must** be 1;
- stage 2 removes the numbers whose second digit must be 1;
- and so on.

**A number is in the Cantor set exactly when it can be written in base 3 using only the digits 0 and 2.** The word
"can" matters for end points: $\tfrac13 = 0.1_3$ looks bad, but it is also $0.0222\ldots{}_3$, which has no 1s, so
$\tfrac13$ is in $C$, as we knew.

### Uncountably many points

Now the surprise. Take any number in $C$, written with 0s and 2s, and replace each 2 by 1. You get a 0-1 sequence.
Going backwards, any 0-1 sequence, with each 1 replaced by 2, gives a 0-2 ternary number, which is in $C$. And
different 0-2 expansions give different numbers. (A number with two ternary forms looks like $0.1_3 = 0.0222\ldots{}_3$:
where the two forms first differ, their digits are neighbours such as 1 and 0, or 2 and 1. The digits 0 and 2 are
not neighbours, so two different 0-2 expansions can never be the same number.) So the points of $C$ pair perfectly with the 0-1 sequences.

In lesson 1 you proved that the 0-1 sequences are uncountable. So **the Cantor set is uncountable**, just like
$[0, 1]$ itself.

Even better: read the 0-1 sequence as a **binary** (base 2) number. The point $0.0222\ldots{}_3$ becomes
$0.0111\ldots{}_2 = \tfrac12$. Every number in $[0, 1]$ has a binary expansion, so every number in $[0, 1]$ is hit.
This shows that the Cantor set is at least as big as the whole interval, so $|C| = |[0,1]| = \mathfrak{c}$.

### A strange object

Put the facts side by side:

- $C$ has **length zero**: it is covered by $2^n$ pieces of total length $\left(\tfrac23\right)^n$ for every $n$;
- $C$ has **as many points as the whole interval**;
- $C$ contains **no interval at all**, however short (any interval longer than $3^{-n}$ would have to fit inside one
  stage-$n$ piece, which is impossible), so it is "dust";
- yet every point of $C$ has other points of $C$ as close to it as you like (change a far-away ternary digit).

It is also **self-similar**: the left third of $C$ is an exact copy of $C$ shrunk by a factor of 3, and so is the right
third. It is a fractal, like the Sierpinski triangle of level 4. Its **fractal dimension** is
$\tfrac{\log 2}{\log 3} \approx 0.63$: more than a scatter of points (dimension 0), less than a line (dimension 1).

<figure class="play" data-play="fractal" data-kind="cantor"><span class="ai-tag">AI-created</span><figcaption><b>The Cantor set.</b> Remove the middle third of every piece, for ever.</figcaption></figure>

## Worked examples

**1. Length after 4 stages.** After stage 4 there are $2^4 = 16$ pieces, each $\tfrac1{81}$ long, so $\tfrac{16}{81}$
is left. Removed so far: $1 - \tfrac{16}{81} = \tfrac{65}{81}$. Check by adding the removed pieces:
$\tfrac13 + \tfrac29 + \tfrac4{27} + \tfrac8{81} = \tfrac{27 + 18 + 12 + 8}{81} = \tfrac{65}{81}$. ✓

**2. Is $\tfrac14$ in the Cantor set?** Find its ternary digits by multiplying by 3 and taking the whole part each
time:

- $\tfrac14 \times 3 = \tfrac34$: digit 0, keep $\tfrac34$;
- $\tfrac34 \times 3 = \tfrac94 = 2 + \tfrac14$: digit 2, keep $\tfrac14$;
- now we are back at $\tfrac14$, so the digits repeat.

$\tfrac14 = 0.020202\ldots{}_3$, only 0s and 2s, so **yes**. And $\tfrac14$ is not an end point of any piece (end
points have a power of 3 as denominator), so it is one of the "hidden" points of $C$. Check:
$0.0202\ldots{}_3 = \tfrac{2}{9} \div \left(1 - \tfrac19\right) = \tfrac29 \times \tfrac98 = \tfrac14$. ✓

**3. Is $\tfrac12$ in the Cantor set?** $\tfrac12 \times 3 = 1 + \tfrac12$: digit 1, keep $\tfrac12$, and it repeats:
$\tfrac12 = 0.111\ldots{}_3$. It has no other ternary form, so it is **not** in $C$. Of course: $\tfrac12$ is in the
very first middle third.

**4. Is $\tfrac1{10}$ in the Cantor set?** Multiply by 3 repeatedly: $\tfrac3{10}$ (digit 0), $\tfrac9{10}$ (digit
0), $\tfrac{27}{10} = 2 + \tfrac7{10}$ (digit 2), $\tfrac{21}{10} = 2 + \tfrac1{10}$ (digit 2), and we are back at
$\tfrac1{10}$. So $\tfrac1{10} = 0.00220022\ldots{}_3$: **yes**.

**5. From a 0-1 sequence to a point.** The sequence $1\,0\,1\,0\,1\,0\ldots$ becomes $0.202020\ldots{}_3$. This is
$\tfrac23 \div \left(1 - \tfrac19\right) = \tfrac23 \times \tfrac98 = \tfrac34$. So $\tfrac34$ is in $C$; it is the
mirror image of $\tfrac14$.

## Try it

1. How many pieces are there after stage 3, how long is each, and what total length is left?
2. Write the four open intervals removed at stage 3. (Hint: each has length $\tfrac1{27}$.)
3. Convert to fractions: $0.2_3$, $0.22_3$, $0.202_3$.
4. Is $\tfrac79$ in the Cantor set? (It is $0.21_3$.)
5. Find the ternary digits of $\tfrac3{10}$ and decide whether it is in $C$.
6. Is $\tfrac25$ in the Cantor set? Find enough ternary digits to decide.
7. Explain why the Cantor set contains no interval of length $\tfrac1{100}$.
8. Challenge: which point of $C$ does the binary number $\tfrac13 = 0.010101\ldots{}_2$ come from? (Replace 1s by 2s
   and read in base 3.)

??? note "Answers"
    1. $2^3 = 8$ pieces, each $\tfrac1{27}$ long; total $\tfrac8{27} \approx 0.296$.
    2. Stage 2 left $\left[0, \tfrac19\right], \left[\tfrac29, \tfrac13\right], \left[\tfrac23, \tfrac79\right],
       \left[\tfrac89, 1\right]$. Their middle thirds are $\left(\tfrac1{27}, \tfrac2{27}\right)$,
       $\left(\tfrac7{27}, \tfrac8{27}\right)$, $\left(\tfrac{19}{27}, \tfrac{20}{27}\right)$,
       $\left(\tfrac{25}{27}, \tfrac{26}{27}\right)$.
    3. $0.2_3 = \tfrac23$. $0.22_3 = \tfrac23 + \tfrac29 = \tfrac89$. $0.202_3 = \tfrac23 + 0 + \tfrac2{27} =
       \tfrac{18 + 2}{27} = \tfrac{20}{27}$.
    4. $0.21_3$ has a 1, but it has a second form: $0.21_3 = 0.20222\ldots{}_3$ (just as $0.1_3 = 0.0222\ldots{}_3$).
       That form has only 0s and 2s, so **yes**. Indeed $\tfrac79$ is the right end of the stage-2 piece
       $\left[\tfrac23, \tfrac79\right]$, an end point that is never removed.
    5. $\tfrac3{10} \times 3 = \tfrac9{10}$ (digit 0); $\times 3 = \tfrac{27}{10} = 2 + \tfrac7{10}$ (digit 2);
       $\tfrac7{10} \times 3 = 2 + \tfrac1{10}$ (digit 2); $\tfrac1{10} \times 3 = \tfrac3{10}$ (digit 0), back to the
       start. So $\tfrac3{10} = 0.02200220\ldots{}_3$: **yes**, it is in $C$.
    6. $\tfrac25 \times 3 = 1 + \tfrac15$: the first digit is 1, and since $\tfrac25$ is not $\tfrac13$ or
       $\tfrac23$ there is no other form. Indeed $\tfrac13 < \tfrac25 < \tfrac23$, so it is in the first middle third:
       **no**.
    7. At stage $n$ every piece has length $3^{-n}$. At stage 5, $3^{-5} = \tfrac1{243} < \tfrac1{100}$. An interval of
       length $\tfrac1{100}$ inside $C$ would have to lie inside one stage-5 piece (the pieces have gaps between them),
       but it is longer than any such piece. So no such interval exists.
    8. $0.0101\ldots{}_2$ becomes $0.0202\ldots{}_3 = \tfrac14$ (worked example 2). So the point $\tfrac14$ of $C$
       is the one sent to $\tfrac13$.

## Common mistake

**"Length zero means only a few points."** Length and number of points are completely different measures. A countable
set always has length zero, but the Cantor set shows that an uncountable set can have length zero too.

**"Only the end points are left."** The end points are countable; most points of $C$ are like $\tfrac14$ and
$\tfrac1{10}$, which are never the end of any piece.

## Where it leads

- Previous: [Power sets and Cantor's theorem](04-power-sets.md). Next:
  [A line and a square have the same number of points](06-line-and-square.md).
- [Level 7 page](index.md) · [Infinity topic page](../index.md) · Other fractals:
  [the Sierpinski triangle](../level-4/04-sierpinski-triangle.md) and [the Koch snowflake](../level-4/05-koch-snowflake.md).
- Geometric series like $\tfrac13 + \tfrac29 + \cdots$: [Patterns, infinite geometric series](../../patterns/level-7/03-infinite-geometric.md).
  Other bases: [Numbers, other bases](../../numbers/level-5/07-other-bases.md).
- On the U of T shelf: sets of length zero matter for integrals; see [MAT158 Unit 9, the Riemann integral](../../../uoft/MAT158H1/unit09.md).
