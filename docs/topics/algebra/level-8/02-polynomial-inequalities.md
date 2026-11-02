---
title: "Polynomial inequalities and families"
---

# Polynomial inequalities and families

*Algebra · level 8, lesson 2 of 8*

## A question to start

For which numbers $x$ is $x^3 > x$?

Most people say "when $x$ is bigger than 1", and that is part of the answer: $2^3 = 8 > 2$. But try $x = -\tfrac12$:
$\left(-\tfrac12\right)^3 = -\tfrac18$, and $-\tfrac18 > -\tfrac12$, because $-\tfrac18$ is closer to zero. So some
negative numbers work too. Which ones exactly? Guessing is risky here. This lesson gives a method that finds **all**
the answers and misses none.

## The idea

### Inequalities with polynomials

A **polynomial inequality** asks where a polynomial is positive or negative, for example

$$(x - 1)(x + 2)(x - 4) > 0.$$

For a straight line you solved inequalities by moving terms and dividing (level 5). That does not work here: you
cannot divide by $(x - 1)$, because you do not know whether it is positive or negative, and dividing by a negative
would flip the sign. Instead we use the **zeros**.

### Why the sign can only change at a zero

The graph of a polynomial is one unbroken curve: it has no jumps and no gaps. To go from above the $x$-axis to below
it, the curve has to cross the axis, and a crossing is a zero. So **between two neighbouring zeros, a polynomial keeps
the same sign**. (That "no jumps" fact is called the intermediate value theorem; it is proved at university.)

So the zeros cut the number line into intervals, and on each interval we only need to find the sign once.

### The sign chart

For $(x - 1)(x + 2)(x - 4) > 0$, the zeros are $-2$, 1 and 4. They cut the line into four intervals. In each, find the
sign of every factor (a test number helps), then multiply the signs:

| | $x < -2$ | $-2 < x < 1$ | $1 < x < 4$ | $x > 4$ |
| --- | --- | --- | --- | --- |
| $x + 2$ | $-$ | $+$ | $+$ | $+$ |
| $x - 1$ | $-$ | $-$ | $+$ | $+$ |
| $x - 4$ | $-$ | $-$ | $-$ | $+$ |
| product | $-$ | $+$ | $-$ | $+$ |

We want the product **positive**, so the solution is $-2 < x < 1$ or $x > 4$. In interval notation,
$(-2, 1) \cup (4, \infty)$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 260" role="img" aria-label="The graph of y = (x − 1)(x + 2)(x − 4), above the x-axis between −2 and 1 and to the right of 4 (marked in green), below it elsewhere">
  <line x1="30" y1="125" x2="360" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="358" y="120" font-size="11" text-anchor="end" fill="currentColor" font-style="italic">x</text>
  <line x1="155.7" y1="240" x2="155.7" y2="10" stroke="currentColor" stroke-width="1"/>
  <text x="160.7" y="20" font-size="11" fill="currentColor" font-style="italic">y</text>
  <line x1="77.1" y1="122" x2="77.1" y2="128" stroke="currentColor" stroke-width="1"/>
  <text x="77.1" y="139" font-size="10" text-anchor="middle" fill="currentColor">−2</text>
  <line x1="195" y1="122" x2="195" y2="128" stroke="currentColor" stroke-width="1"/>
  <text x="195" y="139" font-size="10" text-anchor="middle" fill="currentColor">1</text>
  <line x1="312.9" y1="122" x2="312.9" y2="128" stroke="currentColor" stroke-width="1"/>
  <text x="312.9" y="139" font-size="10" text-anchor="middle" fill="currentColor">4</text>
  <line x1="152.7" y1="196.9" x2="158.7" y2="196.9" stroke="currentColor" stroke-width="1"/>
  <text x="150.7" y="200.4" font-size="10" text-anchor="end" fill="currentColor">−20</text>
  <line x1="152.7" y1="53.1" x2="158.7" y2="53.1" stroke="currentColor" stroke-width="1"/>
  <text x="150.7" y="56.6" font-size="10" text-anchor="end" fill="currentColor">20</text>
  <line x1="77.1" y1="125" x2="195" y2="125" stroke="#7ccf9a" stroke-width="5" stroke-dasharray="0"/>
  <line x1="312.9" y1="125" x2="360" y2="125" stroke="#7ccf9a" stroke-width="5" stroke-dasharray="0"/>
  <polyline points="33.9,240 34,240 34.6,237.5 35.3,235 35.9,232.6 36.6,230.2 37.3,227.8 37.9,225.4 38.6,223.1 39.2,220.7 39.9,218.5 40.6,216.2 41.2,213.9 41.9,211.7 42.5,209.5 43.2,207.4 43.9,205.2 44.5,203.1 45.2,201 45.8,198.9 46.5,196.8 47.2,194.8 47.8,192.8 48.5,190.8 49.1,188.8 49.8,186.9 50.5,185 51.1,183.1 51.8,181.2 52.4,179.4 53.1,177.5 53.8,175.7 54.4,173.9 55.1,172.2 55.7,170.4 56.4,168.7 57.1,167 57.7,165.3 58.4,163.7 59,162 59.7,160.4 60.4,158.8 61,157.2 61.7,155.7 62.3,154.2 63,152.6 63.7,151.2 64.3,149.7 65,148.2 65.6,146.8 66.3,145.4 67,144 67.6,142.6 68.3,141.3 68.9,139.9 69.6,138.6 70.3,137.3 70.9,136.1 71.6,134.8 72.2,133.6 72.9,132.4 73.6,131.2 74.2,130 74.9,128.8 75.5,127.7 76.2,126.6 76.9,125.5 77.5,124.4 78.2,123.3 78.8,122.3 79.5,121.2 80.2,120.2 80.8,119.2 81.5,118.2 82.1,117.3 82.8,116.3 83.5,115.4 84.1,114.5 84.8,113.6 85.4,112.7 86.1,111.9 86.8,111.1 87.4,110.2 88.1,109.4 88.7,108.6 89.4,107.9 90.1,107.1 90.7,106.4 91.4,105.6 92,104.9 92.7,104.2 93.4,103.6 94,102.9 94.7,102.2 95.3,101.6 96,101 96.7,100.4 97.3,99.8 98,99.3 98.6,98.7 99.3,98.2 100,97.6 100.6,97.1 101.3,96.6 101.9,96.2 102.6,95.7 103.3,95.2 103.9,94.8 104.6,94.4 105.2,94 105.9,93.6 106.6,93.2 107.2,92.8 107.9,92.5 108.5,92.1 109.2,91.8 109.9,91.5 110.5,91.2 111.2,90.9 111.8,90.6 112.5,90.4 113.2,90.1 113.8,89.9 114.5,89.7 115.1,89.4 115.8,89.2 116.5,89.1 117.1,88.9 117.8,88.7 118.4,88.6 119.1,88.4 119.8,88.3 120.4,88.2 121.1,88.1 121.7,88 122.4,87.9 123.1,87.8 123.7,87.8 124.4,87.7 125,87.7 125.7,87.7 126.4,87.7 127,87.7 127.7,87.7 128.3,87.7 129,87.7 129.7,87.7 130.3,87.8 131,87.8 131.6,87.9 132.3,88 133,88.1 133.6,88.2 134.3,88.3 134.9,88.4 135.6,88.5 136.3,88.7 136.9,88.8 137.6,88.9 138.2,89.1 138.9,89.3 139.6,89.5 140.2,89.6 140.9,89.8 141.5,90 142.2,90.3 142.9,90.5 143.5,90.7 144.2,90.9 144.8,91.2 145.5,91.4 146.2,91.7 146.8,92 147.5,92.2 148.1,92.5 148.8,92.8 149.5,93.1 150.1,93.4 150.8,93.7 151.4,94 152.1,94.4 152.8,94.7 153.4,95 154.1,95.4 154.7,95.7 155.4,96.1 156.1,96.4 156.7,96.8 157.4,97.2 158,97.6 158.7,97.9 159.4,98.3 160,98.7 160.7,99.1 161.3,99.5 162,100 162.7,100.4 163.3,100.8 164,101.2 164.6,101.7 165.3,102.1 166,102.5 166.6,103 167.3,103.4 167.9,103.9 168.6,104.4 169.3,104.8 169.9,105.3 170.6,105.8 171.2,106.2 171.9,106.7 172.6,107.2 173.2,107.7 173.9,108.2 174.5,108.7 175.2,109.2 175.9,109.7 176.5,110.2 177.2,110.7 177.8,111.2 178.5,111.7 179.2,112.2 179.8,112.7 180.5,113.2 181.1,113.7 181.8,114.3 182.5,114.8 183.1,115.3 183.8,115.8 184.4,116.4 185.1,116.9 185.8,117.4 186.4,118 187.1,118.5 187.7,119 188.4,119.6 189.1,120.1 189.7,120.7 190.4,121.2 191,121.7 191.7,122.3 192.4,122.8 193,123.4 193.7,123.9 194.3,124.5 195,125 195.7,125.5 196.3,126.1 197,126.6 197.6,127.2 198.3,127.7 199,128.3 199.6,128.8 200.3,129.3 200.9,129.9 201.6,130.4 202.3,131 202.9,131.5 203.6,132 204.2,132.6 204.9,133.1 205.6,133.6 206.2,134.2 206.9,134.7 207.5,135.2 208.2,135.7 208.9,136.3 209.5,136.8 210.2,137.3 210.8,137.8 211.5,138.3 212.2,138.8 212.8,139.3 213.5,139.8 214.1,140.3 214.8,140.8 215.5,141.3 216.1,141.8 216.8,142.3 217.4,142.8 218.1,143.3 218.8,143.8 219.4,144.2 220.1,144.7 220.7,145.2 221.4,145.6 222.1,146.1 222.7,146.6 223.4,147 224,147.5 224.7,147.9 225.4,148.3 226,148.8 226.7,149.2 227.3,149.6 228,150 228.7,150.5 229.3,150.9 230,151.3 230.6,151.7 231.3,152.1 232,152.4 232.6,152.8 233.3,153.2 233.9,153.6 234.6,153.9 235.3,154.3 235.9,154.6 236.6,155 237.2,155.3 237.9,155.6 238.6,156 239.2,156.3 239.9,156.6 240.5,156.9 241.2,157.2 241.9,157.5 242.5,157.8 243.2,158 243.8,158.3 244.5,158.6 245.2,158.8 245.8,159.1 246.5,159.3 247.1,159.5 247.8,159.7 248.5,160 249.1,160.2 249.8,160.4 250.4,160.5 251.1,160.7 251.8,160.9 252.4,161.1 253.1,161.2 253.7,161.3 254.4,161.5 255.1,161.6 255.7,161.7 256.4,161.8 257,161.9 257.7,162 258.4,162.1 259,162.2 259.7,162.2 260.3,162.3 261,162.3 261.7,162.3 262.3,162.3 263,162.3 263.6,162.3 264.3,162.3 265,162.3 265.6,162.3 266.3,162.2 266.9,162.2 267.6,162.1 268.3,162 268.9,161.9 269.6,161.8 270.2,161.7 270.9,161.6 271.6,161.4 272.2,161.3 272.9,161.1 273.5,160.9 274.2,160.8 274.9,160.6 275.5,160.3 276.2,160.1 276.8,159.9 277.5,159.6 278.2,159.4 278.8,159.1 279.5,158.8 280.1,158.5 280.8,158.2 281.5,157.9 282.1,157.5 282.8,157.2 283.4,156.8 284.1,156.4 284.8,156 285.4,155.6 286.1,155.2 286.7,154.8 287.4,154.3 288.1,153.8 288.7,153.4 289.4,152.9 290,152.4 290.7,151.8 291.4,151.3 292,150.7 292.7,150.2 293.3,149.6 294,149 294.7,148.4 295.3,147.8 296,147.1 296.6,146.4 297.3,145.8 298,145.1 298.6,144.4 299.3,143.6 299.9,142.9 300.6,142.1 301.3,141.4 301.9,140.6 302.6,139.8 303.2,138.9 303.9,138.1 304.6,137.3 305.2,136.4 305.9,135.5 306.5,134.6 307.2,133.7 307.9,132.7 308.5,131.8 309.2,130.8 309.8,129.8 310.5,128.8 311.2,127.7 311.8,126.7 312.5,125.6 313.1,124.5 313.8,123.4 314.5,122.3 315.1,121.2 315.8,120 316.4,118.8 317.1,117.6 317.8,116.4 318.4,115.2 319.1,113.9 319.7,112.7 320.4,111.4 321.1,110.1 321.7,108.7 322.4,107.4 323,106 323.7,104.6 324.4,103.2 325,101.8 325.7,100.3 326.3,98.8 327,97.4 327.7,95.8 328.3,94.3 329,92.8 329.6,91.2 330.3,89.6 331,88 331.6,86.3 332.3,84.7 332.9,83 333.6,81.3 334.3,79.6 334.9,77.8 335.6,76.1 336.2,74.3 336.9,72.5 337.6,70.6 338.2,68.8 338.9,66.9 339.5,65 340.2,63.1 340.9,61.2 341.5,59.2 342.2,57.2 342.8,55.2 343.5,53.2 344.2,51.1 344.8,49 345.5,46.9 346.1,44.8 346.8,42.6 347.5,40.5 348.1,38.3 348.8,36.1 349.4,33.8 350.1,31.5 350.8,29.3 351.4,26.9 352.1,24.6 352.7,22.2 353.4,19.8 354.1,17.4 354.7,15 355.4,12.5 356,10 356.1,10" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <text x="49.6" y="151" font-size="16" text-anchor="middle" fill="currentColor">−</text>
  <text x="136.1" y="115" font-size="16" text-anchor="middle" fill="currentColor">+</text>
  <text x="253.9" y="151" font-size="16" text-anchor="middle" fill="currentColor">−</text>
  <text x="340.4" y="115" font-size="16" text-anchor="middle" fill="currentColor">+</text>
  <text x="206.8" y="24.4" font-size="11" text-anchor="start" fill="currentColor">y = (x − 1)(x + 2)(x − 4)</text>
</svg>
</div>

The graph agrees: it is above the axis exactly on those two intervals.

Notice the signs alternate here: each factor changes sign at its own zero and nowhere else, so at each zero exactly
one factor flips. That is why they alternate when every zero has multiplicity 1.

### Even multiplicity: no change of sign

A squared factor like $(x - 2)^2$ is never negative. So at a zero of even multiplicity the polynomial **does not
change sign**: the graph touches the axis and goes back. Always check each interval rather than just alternating.

### Strict and non-strict

- $>$ and $<$ are **strict**: the zeros themselves are not included (the product is 0 there, which is not
  positive).
- $\ge$ and $\le$ include the zeros.

### Get 0 on one side first

$x^3 > x$ is not ready for a sign chart. Move everything to one side and factor: $x^3 - x > 0$, so
$x(x - 1)(x + 1) > 0$. Now the zeros are $-1$, 0 and 1, and the chart works.

### Families of polynomials

All the polynomials with zeros $-1$, 2 and 3 (each once) and degree 3 have the form

$$y = k(x + 1)(x - 2)(x - 3), \qquad k \ne 0.$$

This set is called a **family**. Every member crosses the axis at the same three points; they differ in how tall they
are and whether they are flipped ($k < 0$). To pick one member, you need one more point.

## Worked examples

**1. The chart above.** Solve $(x - 1)(x + 2)(x - 4) > 0$.

- Answer: $-2 < x < 1$ or $x > 4$.
- Check with test numbers: $x = 0$ gives $(-1)(2)(-4) = 8 > 0$ ✓; $x = 2$ gives $(1)(4)(-2) = -8$, not $> 0$ ✓;
  $x = 5$ gives $(4)(7)(1) = 28 > 0$ ✓.

**2. The opening question.** Solve $x^3 > x$.

- $x(x - 1)(x + 1) > 0$. Zeros $-1, 0, 1$.
- Signs: $x < -1$: $(-)(-)(-) = -$. $-1 < x < 0$: $(-)(-)(+) = +$. $0 < x < 1$: $(+)(-)(+) = -$. $x > 1$: $+$.
- Solution: $-1 < x < 0$ or $x > 1$. So $-\tfrac12$ works, and so does every number between $-1$ and 0.

**3. A double zero.** Solve $x^3 - 4x^2 + 4x \le 0$.

- Factor: $x(x^2 - 4x + 4) = x(x - 2)^2$.
- $(x - 2)^2 \ge 0$ always. So the sign is the sign of $x$, except that the product is 0 at $x = 2$.
- $\le 0$ when $x \le 0$, and also at $x = 2$ (where it equals 0). Solution: $x \le 0$ or $x = 2$.

**4. Choosing a member of a family.** Find the member of the family with zeros $-1$, 2 and 3 that passes through
$(1, 12)$.

- $12 = k(1 + 1)(1 - 2)(1 - 3) = k(2)(-1)(-2) = 4k$, so $k = 3$.
- $y = 3(x + 1)(x - 2)(x - 3)$.

**5. A box.** Squares of side $x$ cm are cut from the corners of a 20 cm by 12 cm sheet, and the sides are folded up
to make an open box. For which $x$ is the volume at least 192 cm³?

- Volume: $V = x(20 - 2x)(12 - 2x)$. The sides must be positive, so $0 < x < 6$.
- Try whole numbers: $V(1) = 180$, $V(2) = 256$, $V(3) = 252$, $V(4) = 192$. So $x = 4$ is a boundary.
- Solve $V \ge 192$: $4x(10 - x)(6 - x) \ge 192$, so $x(10 - x)(6 - x) \ge 48$. Expand:
  $x^3 - 16x^2 + 60x \ge 48$, so $x^3 - 16x^2 + 60x - 48 \ge 0$.
- $x = 4$ is a zero, so divide by $x - 4$: synthetic division on $1, -16, 60, -48$ gives $1, -12, 12$, remainder 0.
- $x^2 - 12x + 12 = 0$ gives $x = 6 \pm \sqrt{24} = 6 \pm 2\sqrt6$, about 1.10 and 10.90.
- The cubic $(x - 4)(x - 1.10\ldots)(x - 10.90\ldots)$ is $\ge 0$ on $1.10 \le x \le 4$ (and beyond 10.90, which is
  not allowed).
- Answer: $6 - 2\sqrt6 \le x \le 4$, about $1.10 \le x \le 4$.

## Try it

1. Solve $(x + 3)(x - 2) < 0$.
2. Solve $(x - 1)(x - 3)(x - 5) \ge 0$.
3. Solve $x^2(x - 4) < 0$.
4. Solve $x^3 - 9x \ge 0$.
5. Solve $-(x + 1)(x - 2)^2 > 0$.
6. Find the member of the family with zeros 1 (once) and $-2$ (twice) that passes through $(0, -8)$.
7. Solve $x^4 - 5x^2 + 4 > 0$.
8. Solve $x^3 - x^2 - 4x + 4 < 0$.

??? note "Answers"
    1. Zeros $-3$ and 2. Between them one factor is negative and one positive. Solution $-3 < x < 2$.
    2. Zeros 1, 3, 5. Signs from the left: $-, +, -, +$. Solution $1 \le x \le 3$ or $x \ge 5$.
    3. $x^2 > 0$ unless $x = 0$, and $x - 4 < 0$ when $x < 4$. So $x < 4$ but $x \ne 0$ (at 0 the product is 0, not
       negative).
    4. $x(x - 3)(x + 3) \ge 0$. Zeros $-3, 0, 3$; signs $-, +, -, +$. Solution $-3 \le x \le 0$ or $x \ge 3$.
    5. $(x - 2)^2 > 0$ unless $x = 2$, so the sign is that of $-(x + 1)$, positive when $x < -1$. Solution
       $x < -1$ (and $x = 2$ is not a problem, since it is not in that range).
    6. $y = k(x - 1)(x + 2)^2$. At $x = 0$: $k(-1)(4) = -4k = -8$, so $k = 2$: $y = 2(x - 1)(x + 2)^2$.
    7. It is a quadratic in $x^2$: $(x^2 - 1)(x^2 - 4) = (x - 1)(x + 1)(x - 2)(x + 2)$. Zeros $-2, -1, 1, 2$; for
       $x > 2$ all four factors are positive, and the signs alternate leftwards: $+, -, +, -, +$. Solution $x < -2$ or
       $-1 < x < 1$ or $x > 2$.
    8. Group: $x^2(x - 1) - 4(x - 1) = (x - 1)(x - 2)(x + 2)$. Zeros $-2, 1, 2$; signs $-, +, -, +$. Solution
       $x < -2$ or $1 < x < 2$.

## Common mistake

**Dividing both sides by a factor.** From $x^3 > x$, dividing by $x$ gives $x^2 > 1$, but that is only right when $x$
is positive; for negative $x$ the sign should flip. You lose the answers between $-1$ and 0. Always move everything to
one side and factor instead.

**Assuming the signs always alternate.** At a double zero the sign does not change. In $x^2(x - 4)$ the sign is
negative on both sides of 0.

## Where it leads

- Back: [Polynomial functions](01-polynomial-functions.md) · Next: [Rational functions](03-rational-functions.md),
  where the sign chart also uses the zeros of the denominator.
- [Level 8 page](index.md) · [Algebra topic page](../index.md)
- Linear inequalities and the rule for flipping the sign: [Level 5](../level-5/index.md). Interval notation:
  [Intervals and absolute value](../../numbers/level-7/06-intervals-absolute-value.md).
- The "no jumps" fact (the intermediate value theorem), proved: [MAT137 Unit 2 (limits and
  continuity)](../../../uoft/MAT137/unit02.md) and [MAT158 Unit 5 (the three hard
  theorems)](../../../uoft/MAT158H1/unit05.md). The largest box, found exactly with calculus:
  [Change](../../change/index.md).
