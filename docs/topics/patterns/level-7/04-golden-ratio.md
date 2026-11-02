---
title: "Recursion and the golden ratio"
---

# Recursion and the golden ratio

*Patterns and sequences · level 7, lesson 4 of 6*

## A question to start

Take the Fibonacci numbers, $1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, \ldots$, where each is the sum of the two
before. Divide each one by the one before it:

$$\frac{2}{1} = 2, \quad \frac{3}{2} = 1.5, \quad \frac{5}{3} \approx 1.667, \quad \frac{8}{5} = 1.6, \quad \frac{13}{8} = 1.625, \quad \ldots, \quad \frac{144}{89} \approx 1.61798.$$

The answers wobble, then settle near 1.618. Now start a completely different sequence with the same rule, say
$2, 5, 7, 12, 19, 31, 50, 81, \ldots$. Its ratios settle on **the same number**, 1.618. Why does the rule "add the
last two" care so much about this one number, and what exactly is it?

## The idea

### Recursive rules, again

A **recursive** rule makes each term from earlier terms. The Fibonacci rule uses the two previous terms:

$$F_1 = 1, \quad F_2 = 1, \qquad F_n = F_{n-1} + F_{n-2} \quad (n \ge 3).$$

A two-term rule needs **two** starting values; with only one, you could not even compute $F_3$. Change the starting
values and you get a different sequence obeying the same rule, such as the **Lucas numbers** $2, 1, 3, 4, 7, 11, 18, \ldots$ (you met Fibonacci in [level 3](../level-3/index.md) and recursive rules in [level 6](../level-6/index.md)).

### The ratios

Here are the ratios $\frac{F_{n+1}}{F_n}$ of consecutive Fibonacci numbers:

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $\frac{F_{n+1}}{F_n}$ | 1 | 2 | 1.5 | 1.6667 | 1.6 | 1.625 | 1.6154 | 1.6190 | 1.6176 | 1.6182 | 1.6180 | 1.6181 |

Two things stand out. The ratios are alternately **too small and too big**, and the swings get smaller each time.

### Where the number comes from

Suppose the ratios do settle on some number $x$. Then for large $n$, each term is about $x$ times the one before:

$$F_{n-1} \approx x\,F_{n-2}, \qquad F_n \approx x\,F_{n-1} \approx x^2 F_{n-2}.$$

Put these into the rule $F_n = F_{n-1} + F_{n-2}$:

$$x^2 F_{n-2} \approx x\,F_{n-2} + F_{n-2},$$

and divide by $F_{n-2}$ (which is not 0). The number $x$ must satisfy

$$x^2 = x + 1, \qquad\text{that is}\qquad x^2 - x - 1 = 0.$$

The quadratic formula gives two solutions:

$$x = \frac{1 + \sqrt5}{2} \approx 1.6180339887 \qquad\text{and}\qquad x = \frac{1 - \sqrt5}{2} \approx -0.6180339887.$$

The ratios of positive numbers are positive, so they must settle on the first one. It is called the **golden ratio**
and written with the Greek letter **phi**, $\varphi$ (say "fie" or "fee"). The other solution is often written
$\psi$ (psi, say "sigh"):

$$\varphi = \frac{1 + \sqrt5}{2}, \qquad \psi = \frac{1 - \sqrt5}{2}.$$

Notice the argument never used the starting values. That is why the sequence $2, 5, 7, 12, \ldots$ gives the same
limit: **any** sequence of positive numbers with the rule "add the last two" has ratios settling on $\varphi$. (This
argument assumed the ratios settle; worked example 5 shows why they really do.)

### The golden ratio's party tricks

Because $\varphi$ solves $x^2 = x + 1$, it has some striking properties.

- **Squaring adds 1.** $\varphi^2 = \varphi + 1 \approx 2.618$. The decimal part does not change.
- **Its reciprocal subtracts 1.** Divide $\varphi^2 = \varphi + 1$ by $\varphi$: $\varphi = 1 + \frac{1}{\varphi}$, so
  $\frac{1}{\varphi} = \varphi - 1 \approx 0.618$.
- **The two roots.** For any quadratic $x^2 - x - 1$, the roots add to 1 and multiply to $-1$. So $\varphi + \psi = 1$,
  $\varphi\psi = -1$ (which means $\psi = -\frac{1}{\varphi}$), and $\varphi - \psi = \sqrt5$.
- **Powers of $\varphi$ hide Fibonacci numbers.** Using $\varphi^2 = \varphi + 1$ again and again:

$$\varphi^3 = \varphi\cdot\varphi^2 = \varphi^2 + \varphi = 2\varphi + 1, \qquad \varphi^4 = 2\varphi^2 + \varphi = 3\varphi + 2, \qquad \varphi^5 = 5\varphi + 3.$$

  In general $\varphi^n = F_n\varphi + F_{n-1}$, and exactly the same holds for $\psi$, since $\psi$ solves the same
  equation.

### The golden rectangle

Put Fibonacci squares side by side: two 1 by 1 squares, then a 2 by 2, a 3 by 3, a 5 by 5, an 8 by 8. Each new square
fits along the long side of the rectangle made so far, because its side is the sum of the two before.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 275 165" role="img" aria-label="A 13 by 8 rectangle tiled by squares of side 8, 5, 3, 2, 1 and 1, the Fibonacci numbers">
  <g stroke="currentColor" stroke-width="1.5">
    <rect x="20" y="10" width="144" height="144" fill="#eea66f"/>
    <rect x="164" y="10" width="90" height="90" fill="#9cc9ea"/>
    <rect x="200" y="100" width="54" height="54" fill="#7ccf9a"/>
    <rect x="164" y="118" width="36" height="36" fill="#eea66f"/>
    <rect x="164" y="100" width="18" height="18" fill="#9cc9ea"/>
    <rect x="182" y="100" width="18" height="18" fill="#7ccf9a"/>
  </g>
  <text x="92" y="87" font-size="20" text-anchor="middle" fill="currentColor">8</text>
  <text x="209" y="60" font-size="18" text-anchor="middle" fill="currentColor">5</text>
  <text x="227" y="132" font-size="14" text-anchor="middle" fill="currentColor">3</text>
  <text x="182" y="141" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <text x="173" y="113" font-size="9" text-anchor="middle" fill="currentColor">1</text>
  <text x="191" y="113" font-size="9" text-anchor="middle" fill="currentColor">1</text>
</svg>
</div>

The rectangles you build are $1 \times 2$, $2 \times 3$, $3 \times 5$, $5 \times 8$, $8 \times 13$: their shapes get
closer and closer to a rectangle whose sides are in the ratio $\varphi : 1$, called a **golden rectangle**. Such a
rectangle has a special property: cut off a square, and the piece left over is again a golden rectangle. (If the sides
are $\varphi$ and 1, the leftover is $1$ by $\varphi - 1 = \frac{1}{\varphi}$, and $1 \div \frac{1}{\varphi} = \varphi$.)

A word of honesty: you will read that the golden ratio is everywhere in famous buildings, paintings and the human
body. Many of those claims fall apart when the things are measured carefully. Its appearance in the Fibonacci numbers,
and so in how many plants pack their seeds and leaves, is real; most of the rest is wishful measuring.

### A formula with no recursion: Binet's formula

The recursive rule makes you compute every Fibonacci number up to the one you want. There is a direct formula,
named after Jacques Binet, who published it in 1843 (others knew it earlier):

$$F_n = \frac{\varphi^n - \psi^n}{\sqrt5}.$$

It looks impossible: $\varphi$ and $\psi$ are irrational, yet the answer is always a whole number. Check small cases.

- $n = 1$: $\frac{\varphi - \psi}{\sqrt5} = \frac{\sqrt5}{\sqrt5} = 1$. ✓
- $n = 2$: $\varphi^2 - \psi^2 = (\varphi + 1) - (\psi + 1) = \varphi - \psi = \sqrt5$, so $F_2 = 1$. ✓
- $n = 3$: $\varphi^3 - \psi^3 = (2\varphi + 1) - (2\psi + 1) = 2\sqrt5$, so $F_3 = 2$. ✓

The pattern is clear from the party tricks: $\varphi^n - \psi^n = (F_n\varphi + F_{n-1}) - (F_n\psi + F_{n-1}) = F_n(\varphi - \psi) = F_n\sqrt5$.
In [level 8](../level-8/index.md) you will **derive** this formula from scratch, by a method that works for many
other recursive rules too.

Since $|\psi| < 1$, the term $\frac{\psi^n}{\sqrt5}$ gets tiny very fast (it is already less than $\frac12$ when
$n = 1$). So $F_n$ is simply **the whole number nearest to $\frac{\varphi^n}{\sqrt5}$**. That is why consecutive
Fibonacci numbers have ratio close to $\varphi$: they are both close to powers of $\varphi$ divided by $\sqrt5$.

## Worked examples

**1. Check $\varphi^2 = \varphi + 1$ with surds.**

$$\varphi^2 = \left(\frac{1 + \sqrt5}{2}\right)^2 = \frac{1 + 2\sqrt5 + 5}{4} = \frac{6 + 2\sqrt5}{4} = \frac{3 + \sqrt5}{2}.$$

And $\varphi + 1 = \frac{1 + \sqrt5}{2} + \frac{2}{2} = \frac{3 + \sqrt5}{2}$. They match. ✓

**2. A big Fibonacci number by rounding.** Find $F_{20}$.

$\varphi^{20} \approx 15\,126.99993$, and $\frac{15\,126.99993}{\sqrt5} \approx 6765.00003$. The nearest whole number is
$F_{20} = 6765$. (Check by continuing the list: $\ldots, 2584, 4181, 6765$.)

**3. Another starting pair.** The sequence $2, 5, 7, 12, 19, 31, 50, 81, 131, 212$ has ratios

$$2.5,\ 1.4,\ 1.714,\ 1.583,\ 1.632,\ 1.613,\ 1.620,\ 1.617,\ 1.618.$$

Same rule, different start, same limit $\varphi$, exactly as the argument predicted.

**4. Golden ratio as a never-ending fraction.** From $\varphi = 1 + \frac{1}{\varphi}$, replace the $\varphi$ on the
right by $1 + \frac1\varphi$ again, and again:

$$\varphi = 1 + \cfrac{1}{1 + \cfrac{1}{1 + \cfrac{1}{1 + \cdots}}}$$

Stopping after more and more steps gives $1$, $1 + \frac11 = 2$, $1 + \frac12 = \frac32$, $1 + \frac{1}{3/2} = \frac53$,
$\frac85, \ldots$: exactly the Fibonacci ratios. In the same way, $\varphi^2 = 1 + \varphi$ means
$\varphi = \sqrt{1 + \varphi} = \sqrt{1 + \sqrt{1 + \sqrt{1 + \cdots}}}$; starting from 1, the values
$1.414, 1.554, 1.598, 1.612, 1.616, \ldots$ climb towards $\varphi$.

**5. Why the ratios zig-zag and close in.** Look at $F_{n+1}F_{n-1} - F_n^2$:

| $n$ | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- |
| $F_{n+1}F_{n-1} - F_n^2$ | $2 \cdot 1 - 1 = 1$ | $3 \cdot 1 - 4 = -1$ | $5 \cdot 2 - 9 = 1$ | $8 \cdot 3 - 25 = -1$ | $13 \cdot 5 - 64 = 1$ |

It is always $\pm 1$, alternating. (This is **Cassini's identity**, $F_{n+1}F_{n-1} - F_n^2 = (-1)^n$; you can prove
it by induction in level 8.) Divide by $F_nF_{n-1}$:

$$\frac{F_{n+1}}{F_n} - \frac{F_n}{F_{n-1}} = \frac{(-1)^n}{F_nF_{n-1}}.$$

So each ratio differs from the one before by a fraction whose sign flips each time (the zig-zag) and whose size,
$\frac{1}{F_nF_{n-1}}$, shrinks very fast (the closing in). Between $\frac{144}{89}$ and $\frac{233}{144}$ the gap is
only $\frac{1}{144 \times 89} = \frac{1}{12\,816}$.

## Try it

1. Work out $\frac{F_{12}}{F_{11}} = \frac{144}{89}$ and $\frac{F_{13}}{F_{12}} = \frac{233}{144}$ to 5 decimal
   places. Which is above $\varphi$ and which below?
2. Show from $\varphi^2 = \varphi + 1$ that $\frac{1}{\varphi} = \varphi - 1$, and check it with decimals.
3. Write $\varphi^6$ in the form $p\varphi + q$, and check with a calculator.
4. Use $\psi^2 = \psi + 1$ to show $\psi = -\frac{1}{\varphi}$.
5. Use Binet's formula and the party tricks to check $F_4 = 3$.
6. The Lucas numbers are $L_1 = 1$, $L_2 = 3$, $L_n = L_{n-1} + L_{n-2}$. Write the first 10 and find the ratio
   $\frac{L_{10}}{L_9}$.
7. The ratios of a sequence with the rule $a_n = a_{n-1} + 2a_{n-2}$ settle on a number $x$. Use the method of this
   lesson to find $x$, then check with $1, 1, 3, 5, 11, 21, \ldots$
8. Show that $F_1 + F_2 + \cdots + F_n = F_{n+2} - 1$. (Hint: $F_k = F_{k+2} - F_{k+1}$, then telescope.)

??? note "Answers"
    1. $\frac{144}{89} \approx 1.61798$ (below $\varphi \approx 1.61803$) and $\frac{233}{144} \approx 1.61806$
       (above).
    2. Divide both sides of $\varphi^2 = \varphi + 1$ by $\varphi$: $\varphi = 1 + \frac1\varphi$, so
       $\frac1\varphi = \varphi - 1$. Decimals: $1 \div 1.6180340 \approx 0.6180340$. ✓
    3. $\varphi^6 = \varphi \cdot \varphi^5 = \varphi(5\varphi + 3) = 5\varphi^2 + 3\varphi = 5(\varphi + 1) + 3\varphi = 8\varphi + 5$.
       Calculator: $\varphi^6 \approx 17.944$ and $8 \times 1.618034 + 5 \approx 17.944$. ✓ (The pattern
       $F_6\varphi + F_5$ again.)
    4. Divide $\psi^2 = \psi + 1$ by $\psi$: $\psi = 1 + \frac{1}{\psi}$, so $\frac{1}{\psi} = \psi - 1$. Also
       $\psi - 1 = \frac{1 - \sqrt5}{2} - 1 = -\frac{1 + \sqrt5}{2} = -\varphi$. So $\frac1\psi = -\varphi$, which means
       $\psi = -\frac{1}{\varphi}$. (Or directly: $\varphi\psi = \frac{(1 + \sqrt5)(1 - \sqrt5)}{4} = \frac{1 - 5}{4} = -1$.)
    5. $\varphi^4 = 3\varphi + 2$ and $\psi^4 = 3\psi + 2$, so $\varphi^4 - \psi^4 = 3(\varphi - \psi) = 3\sqrt5$, and
       $F_4 = \frac{3\sqrt5}{\sqrt5} = 3$. ✓
    6. $1, 3, 4, 7, 11, 18, 29, 47, 76, 123$. $\frac{123}{76} \approx 1.6184$, close to $\varphi$.
    7. If $a_n \approx x\,a_{n-1}$, then $x^2 a_{n-2} \approx x\,a_{n-2} + 2a_{n-2}$, so $x^2 = x + 2$, that is
       $(x - 2)(x + 1) = 0$, and the positive answer is **$x = 2$**. The sequence continues $43, 85, 171$, and
       $\frac{171}{85} \approx 2.012$. ✓
    8. Write each $F_k$ as $F_{k+2} - F_{k+1}$ (true by the rule $F_{k+2} = F_{k+1} + F_k$). The sum becomes
       $(F_3 - F_2) + (F_4 - F_3) + \cdots + (F_{n+2} - F_{n+1})$, which telescopes to $F_{n+2} - F_2 = F_{n+2} - 1$.
       Check: $1 + 1 + 2 + 3 + 5 = 12 = F_7 - 1 = 13 - 1$. ✓

## Common mistake

**Thinking the "settling" argument proves the ratios settle.** Getting $x^2 = x + 1$ shows what the limit **must be
if there is one**. That there is one needs a separate reason, such as Binet's formula or the Cassini argument in
example 5. (The rule $a_n = -a_{n-1}$ gives ratios $-1, -1, \ldots$ but the sequence $1, -1, 1, \ldots$ itself
never settles; limits need care.)

**Rounding $\varphi$ too early.** $1.6^{20} \approx 12\,089$, while $\varphi^{20} \approx 15\,127$. Small errors grow
fast inside powers. Keep $\varphi$ exact, or to many decimal places, until the end.

## Where it leads

- Back: [Infinite geometric series](03-infinite-geometric.md) · Next: [Sums of squares and cubes](05-squares-cubes.md).
- [Level 7 page](index.md) · [Patterns topic page](../index.md)
- Fibonacci numbers in plants and puzzles: [Level 3](../level-3/index.md). Fibonacci-like numbers turn up when counting
  ways to climb stairs: [Counting](../../counting/index.md).
- Deriving Binet's formula, and solving any rule of the form $a_n = pa_{n-1} + qa_{n-2}$:
  [Level 8](../level-8/index.md).
- Solving quadratics with the formula: [Algebra](../../algebra/index.md).
