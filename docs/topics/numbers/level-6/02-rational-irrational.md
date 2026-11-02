---
title: "Rational and irrational numbers"
---

# Rational and irrational numbers

*Numbers · level 6, lesson 2 of 7*

## A question to start

Draw a square with sides 1 unit long, and draw its diagonal. The diagonal has a definite length: you can see it, cut a
stick that long, and lay the stick on a number line starting at 0. Its far end lands on some point.

Which fraction is that point? By Pythagoras, the diagonal is $\sqrt2$ long, about 1.414. The ancient Greeks believed
at first that every length could be written as a ratio of whole numbers. The story goes that when someone in
Pythagoras's school found that the diagonal of a square cannot, the discovery was so upsetting that it was kept
secret. Whatever really happened, the fact itself is true: that point on the number line is **not** a fraction. The
number line has points that no fraction can name.

## The idea

### Two kinds of real number

Recall from [level 5](../level-5/02-rational-numbers.md): a **rational number** is one that can be written as
$\tfrac{p}{q}$ with $p$ and $q$ integers and $q \ne 0$.

An **irrational number** is a number on the number line that is **not** rational: there is no way at all to write it
as a fraction of two integers. ("Irrational" here means "not a ratio". It does not mean "unreasonable".)

### Telling them apart by their decimals

The last lesson proved a two-way link:

$$\text{rational} \quad \longleftrightarrow \quad \text{the decimal terminates or repeats}$$

So the decimals of irrational numbers are exactly the ones that **go on forever and never fall into a repeating
block**. That gives a way to recognise them, and to build them.

### Some irrational numbers

**A decimal built to never repeat.** Look at

$$0.101001000100001\ldots$$

after each 1, write one more 0 than last time. This has a **pattern**, but not a **repeating block**. A block would
have a fixed length, say $k$ digits. The block cannot be all 0s, because 1s keep turning up forever. So once the
repeating started, every stretch of $k$ digits in a row would contain a 1. But the runs of 0s keep getting longer, and
soon there is a run of more than $k$ zeros in a row, with no 1 in it. That is impossible, so there is no repeating
block, and the number is irrational.

Another famous one: write the counting numbers one after another, $0.123456789101112131415\ldots$ It also never
repeats (it contains longer and longer runs of zeros, from 10, 100, 1000, ...).

**$\sqrt2$.** Its decimal $1.41421356\ldots$ looks random, but looking at digits is not a proof: maybe it starts
repeating after a million digits. The real proof is in [the next lesson](03-root-two-irrational.md), and it does not
look at the digits at all. In fact, for any whole number $n$, $\sqrt{n}$ is either a whole number (like $\sqrt{49} =
7$) or irrational (like $\sqrt{50}$). There is nothing in between: $\sqrt{n}$ is never a fraction like $3.5$.

**$\pi$.** The distance round a circle divided by the distance across. Its decimal begins $3.14159265\ldots$ That
$\pi$ is irrational was first proved by Johann Lambert in the 1760s; the proof needs more than school mathematics.
Note that $\tfrac{22}{7} = 3.\overline{142857}$ is a handy **approximation**, not the real value: it already differs
from $\pi$ in the third decimal place.

### Making new irrationals from old ones

Once you know one irrational number, you can make infinitely many more.

**Rational + irrational is irrational.** Is $3 + \sqrt2$ rational? Suppose it were, equal to some fraction $s$. Then
$\sqrt2 = s - 3$, and a fraction minus a whole number is a fraction (the rationals are closed under subtraction). That
would make $\sqrt2$ rational, which it is not. So $3 + \sqrt2$ is irrational.

The same argument works for any rational $r$ and irrational $x$: if $r + x$ were rational, then
$x = (r + x) - r$ would be rational too.

**Non-zero rational × irrational is irrational.** If $5\sqrt2$ were a fraction $s$, then $\sqrt2 = \tfrac{s}{5}$ would
be a fraction. So $5\sqrt2$, $\tfrac{\sqrt2}{3}$, $-\sqrt2$ and $2\pi$ are all irrational. (The "non-zero" matters:
$0 \times \sqrt2 = 0$, which is rational.)

This is a typical shape of argument in this topic, called **proof by contradiction**: suppose the opposite, and show
it leads to something you know is false.

### The number line has holes, if you only use fractions

Here is the picture behind the question at the start. Swing the diagonal of the unit square down onto the number line
with a compass:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 200" role="img" aria-label="A unit square standing on the number line from 0 to 1, with its diagonal from 0 to the top right corner; an arc centred at 0 swings the top right corner down onto the number line at the square root of 2, between 1 and 2">
  <line x1="20" y1="160" x2="370" y2="160" stroke="currentColor" stroke-width="2"/>
  <rect x="40" y="10" width="150" height="150" fill="#9cc9ea" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="160" x2="190" y2="10" stroke="#eea66f" stroke-width="3"/>
  <path d="M 190 10 A 212.1 212.1 0 0 1 252.1 160" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <g stroke="currentColor" stroke-width="2">
    <line x1="40" y1="153" x2="40" y2="167"/><line x1="190" y1="153" x2="190" y2="167"/><line x1="340" y1="153" x2="340" y2="167"/>
  </g>
  <circle cx="252.1" cy="160" r="6" fill="#7ccf9a"/>
  <g font-size="13" text-anchor="middle" fill="currentColor">
    <text x="40" y="185">0</text><text x="190" y="185">1</text><text x="340" y="185">2</text><text x="252.1" y="185">√2</text>
    <text x="105" y="75">√2</text>
  </g>
</svg>
</div>

The compass lands on a real point. But if your number line had **only** rational numbers on it, there would be
nothing there: the arc would pass straight through a gap. And it is not just one gap. There is a gap at $\sqrt2$, at
$1 + \sqrt2$, at $\tfrac{\sqrt2}{2}$, at $\pi$, and (by the arguments above) at infinitely many other places.

This is surprising, because in level 5 you showed that the rationals are **dense**: between any two of them there is
another. Dense, and yet full of holes. Both are true at once. The irrationals are dense too: between any two numbers
there is an irrational (you will find some below). In fact, the German mathematician Georg Cantor showed in the 1870s
that, in a precise sense, there are **more** irrational numbers than rational ones, even though both are infinite.
That story belongs in [Infinity](../../infinity/index.md).

### What a calculator cannot tell you

A calculator shows about 10 digits. $\tfrac{1}{17}$ shows as 0.0588235294 and $\sqrt2$ as 1.414213562. Neither shows
a repeat, yet one is rational (its block is 16 digits long) and one is not. You cannot decide whether a number is
rational by looking at a calculator screen: you need a reason. And the number on the screen, 1.414213562, is itself a
terminating decimal, so it is **rational**. It is only an approximation to $\sqrt2$.

## Worked examples

**1. Classify** each number as rational or irrational: $0.75$, $0.\overline{12}$, $\sqrt{49}$, $\sqrt{50}$,
$\tfrac{22}{7}$, $0.1010010001\ldots$, $-3$.

1. $0.75 = \tfrac34$: rational.
2. $0.\overline{12} = \tfrac{12}{99} = \tfrac{4}{33}$: rational (it repeats).
3. $\sqrt{49} = 7 = \tfrac71$: rational.
4. $\sqrt{50}$: 50 is not a perfect square, so its root is irrational.
5. $\tfrac{22}{7}$: rational (it is a fraction), even though it is close to $\pi$.
6. $0.1010010001\ldots$: irrational (it never repeats).
7. $-3 = \tfrac{-3}{1}$: rational.

**2. Is $\tfrac{22}{7}$ equal to $\pi$?** No. $\tfrac{22}{7} = 3.142857\ldots$ and $\pi = 3.141592\ldots$; they differ
in the third decimal place. Also, $\tfrac{22}{7}$ is rational and $\pi$ is not, so they could never be equal.

**3. Prove that $3 + \sqrt2$ is irrational**, using the fact that $\sqrt2$ is.

1. Suppose $3 + \sqrt2$ is rational: $3 + \sqrt2 = \tfrac{p}{q}$ for integers $p, q$.
2. Then $\sqrt2 = \tfrac{p}{q} - 3 = \tfrac{p - 3q}{q}$, a fraction of two integers.
3. That says $\sqrt2$ is rational, which is false. So $3 + \sqrt2$ is irrational.

**4. An irrational number between 0.1 and 0.2.**

$\tfrac{\sqrt2}{10} = 0.1414\ldots$ It is a non-zero rational $\left(\tfrac{1}{10}\right)$ times an irrational, so it
is irrational, and it lies between 0.1 and 0.2. Another: $0.15015001500015\ldots$ (put one more 0 each time).

**5. A rational number between $\sqrt2$ and $\sqrt3$.**

Try 1.5: $1.5^2 = 2.25$, which is between 2 and 3. So $\sqrt2 < 1.5 < \sqrt3$, and $1.5 = \tfrac32$ is rational.

## Try it

1. Rational or irrational? (a) $0.3$ (b) $0.\overline{3}$ (c) $\sqrt{16}$ (d) $\sqrt{15}$ (e) $-2.5$
   (f) $0.121121112\ldots$ (one more 1 each time)
2. Show that $0.\overline{6}$ and $0.125$ are rational by writing them as fractions.
3. Is $0.123123123\ldots$ rational? Explain.
4. Give two different irrational numbers between 3 and 4.
5. Find a rational number between $\sqrt5$ and $\sqrt6$.
6. Using the fact that $\sqrt2$ is irrational, prove that $2\sqrt2$ is irrational.
7. A calculator shows $\sqrt2 = 1.414213562$. Is the number 1.414213562 rational or irrational?
8. Is $\tfrac{\sqrt2}{2}$ rational? Is $\tfrac{\sqrt8}{\sqrt2}$ rational? (Hint for the second: simplify first.)

??? note "Answers"
    1. (a) Rational, $\tfrac{3}{10}$. (b) Rational, $\tfrac13$. (c) Rational, $4$. (d) Irrational: 15 is not a
       perfect square. (e) Rational, $-\tfrac52$. (f) Irrational: the runs of 1s keep getting longer, so there is
       no repeating block.
    2. $0.\overline{6} = \tfrac69 = \tfrac23$. $0.125 = \tfrac{125}{1000} = \tfrac18$.
    3. Yes. The block 123 repeats, so it is $\tfrac{123}{999} = \tfrac{41}{333}$.
    4. For example $\pi = 3.14159\ldots$ and $\sqrt{10} = 3.162\ldots$ (since $9 < 10 < 16$). Also
       $3 + \tfrac{\sqrt2}{10} = 3.1414\ldots$ works.
    5. $\sqrt5 \approx 2.236$ and $\sqrt6 \approx 2.449$. Try 2.3: $2.3^2 = 5.29$, between 5 and 6. So $2.3$ works.
       (So do 2.4, since $2.4^2 = 5.76$, and many others.)
    6. Suppose $2\sqrt2 = \tfrac{p}{q}$. Then $\sqrt2 = \tfrac{p}{2q}$, a fraction of integers. That contradicts
       $\sqrt2$ being irrational. So $2\sqrt2$ is irrational.
    7. **Rational.** It is a terminating decimal, $\tfrac{1414213562}{1\,000\,000\,000}$. It is only an
       approximation of $\sqrt2$, not $\sqrt2$ itself. ($1.414213562^2 = 1.99999999894\ldots$, not 2.)
    8. $\tfrac{\sqrt2}{2} = \tfrac12 \times \sqrt2$, a non-zero rational times an irrational: **irrational**. But
       $\tfrac{\sqrt8}{\sqrt2} = \sqrt{\tfrac82} = \sqrt4 = 2$: **rational**. A number written with root signs can
       still be rational.

## Common mistake

**"It has a pattern, so it repeats."** $0.101001000\ldots$ has a clear pattern but no repeating block, so it is
irrational. "Repeating" means one fixed block of digits copied over and over forever, with nothing else.

**Deciding from a calculator.** Ten digits with no visible repeat proves nothing, and the calculator's answer is
always a terminating decimal anyway. A number is irrational because of a **reason**, like the proof in the next
lesson, not because of what the screen shows.

## Where it leads

- Back: [Repeating decimals to fractions](01-repeating-decimals.md) · Next: [Proof that √2 is irrational](03-root-two-irrational.md)
- [Level 6 page](index.md) · [Numbers topic page](../index.md)
- The diagonal of a square and Pythagoras' theorem: [Geometry](../../geometry/index.md). Proof by contradiction:
  [Logic](../../logic/index.md).
- More irrational numbers than rational ones: [Infinity](../../infinity/index.md).
- The density of the rationals and of the irrationals, proved carefully: [MAT158 Unit 2](../../../uoft/MAT158H1/unit02.md).
