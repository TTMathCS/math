---
title: "Completing the square"
---

# Completing the square

*Algebra · level 7, lesson 2 of 7*

## A question to start

A farmer has 60 m of fence and wants a rectangular pen against a long straight wall. The wall makes one side, so the
fence only has to cover the other three. How wide should the pen be to hold the most animals?

Try a few: 10 m wide gives a length of $60 - 20 = 40$ m and an area of 400 m². 20 m wide gives $20 \times 20 = 400$ m²
again. 15 m wide gives $15 \times 30 = 450$ m². Is 450 the best possible, or is there something better hiding at
14.5 m or 15.3 m? Trying numbers can never be sure. Completing the square can, with one line of algebra.

## The idea

### Perfect squares

Some quadratics are a bracket squared, like

$$(x + 3)^2 = x^2 + 6x + 9, \qquad (x - 5)^2 = x^2 - 10x + 25.$$

These are called **perfect square trinomials** ("trinomial" means three terms). Look at the pattern in
$(x + p)^2 = x^2 + 2px + p^2$:

- the middle number is **twice** $p$;
- the last number is $p$ **squared**.

So going backwards: if the middle number is $b$, then $p = \dfrac{b}{2}$, and the last number must be
$\left(\dfrac{b}{2}\right)^2$. For $x^2 + 6x + \underline{\phantom{9}}$, half of 6 is 3 and $3^2 = 9$, so
$x^2 + 6x + 9 = (x + 3)^2$.

### The square picture

Why "completing the **square**"? Draw $x^2 + 6x$ as an area: an $x$-by-$x$ square, plus $6x$ split into two strips,
each 3 by $x$, one on the right and one along the bottom.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 190" role="img" aria-label="An x by x square with two 3 by x strips along its right side and bottom; the missing 3 by 3 corner, area 9, completes a square of side x + 3">
  <rect x="30" y="20" width="120" height="120" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <rect x="150" y="20" width="45" height="120" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="30" y="140" width="120" height="45" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="150" y="140" width="45" height="45" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="90.0" y="85.0" font-size="15" text-anchor="middle" fill="currentColor">x²</text>
  <text x="172.5" y="85.0" font-size="13" text-anchor="middle" fill="currentColor">3x</text>
  <text x="90.0" y="167.5" font-size="13" text-anchor="middle" fill="currentColor">3x</text>
  <text x="172.5" y="167.5" font-size="13" text-anchor="middle" fill="currentColor">9</text>
  <text x="90.0" y="14" font-size="12" text-anchor="middle" fill="currentColor">x</text>
  <text x="172.5" y="14" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <text x="22" y="84.0" font-size="12" text-anchor="end" fill="currentColor">x</text>
  <text x="22" y="166.5" font-size="12" text-anchor="end" fill="currentColor">3</text>
  <text x="215" y="156.5" font-size="12" fill="currentColor">the missing corner:</text>
  <text x="215" y="172.5" font-size="12" fill="currentColor">3 × 3 = 9</text>
  <text x="215" y="60" font-size="12" fill="currentColor">x² + 6x + 9</text>
  <text x="215" y="78" font-size="12" fill="currentColor">= (x + 3)²</text>
</svg>
</div>

The shape is almost a big square of side $x + 3$. Only one small corner is missing: a 3-by-3 square, area 9. Fill it
in and you have completed the square:

$$x^2 + 6x + 9 = (x + 3)^2.$$

The picture shows exactly why you take **half** the middle number (the $6x$ is split into two strips of $3x$) and
then **square** it (the missing corner is $3 \times 3$).

### Completing the square when the number is not 9

Most quadratics do not come with the right last number. Take $x^2 + 6x + 2$. We want a 9, so we add 9 to complete the
square, and subtract 9 straight away so that nothing has changed:

$$x^2 + 6x + 2 = (x^2 + 6x + 9) - 9 + 2 = (x + 3)^2 - 7.$$

That is **vertex form**. Adding and subtracting the same number is like adding 0: the value of the expression never
changes, only its look.

### When $a$ is not 1

For $2x^2 - 12x + 7$, first take the 2 out of the two $x$ terms only:

$$2x^2 - 12x + 7 = 2(x^2 - 6x) + 7.$$

Now complete the square inside the bracket (half of $-6$ is $-3$, and $(-3)^2 = 9$):

$$2\left[(x - 3)^2 - 9\right] + 7 = 2(x - 3)^2 - 18 + 7 = 2(x - 3)^2 - 11.$$

Notice the $-9$ inside the bracket became $-18$ outside: it is multiplied by the 2 in front.

### Why vertex form gives the maximum or minimum

A square is never negative. So in $y = 2(x - 3)^2 - 11$ the part $2(x - 3)^2$ is at least 0, and it is 0 only when
$x = 3$. So the smallest $y$ can ever be is $-11$, at $x = 3$. If $a$ is negative, as in $y = -5(t - 2)^2 + 21.5$, the
part $-5(t - 2)^2$ is **at most** 0, so the largest $y$ can be is 21.5, at $t = 2$.

This is the certainty the farmer wanted: not "the best of the numbers I tried" but "no number can ever do better".

### The general case

Do the same steps with letters. For $y = x^2 + bx + c$:

$$y = \left(x + \frac{b}{2}\right)^2 - \frac{b^2}{4} + c.$$

So the vertex is at $x = -\dfrac{b}{2}$. With $a$ in front, the same work gives the vertex at
$x = -\dfrac{b}{2a}$, a formula worth remembering (you will prove it in the next lesson).

## Worked examples

**1. A simple one.** Write $y = x^2 + 6x + 2$ in vertex form and give the vertex.

- Half of 6 is 3; $3^2 = 9$.
- $y = (x^2 + 6x + 9) - 9 + 2 = (x + 3)^2 - 7$.
- Vertex $(-3, -7)$, a minimum since $a = 1 > 0$.

**2. With $a$ in front.** Write $y = 2x^2 - 12x + 7$ in vertex form.

- $y = 2(x^2 - 6x) + 7 = 2\left[(x - 3)^2 - 9\right] + 7 = 2(x - 3)^2 - 11$.
- Vertex $(3, -11)$. Check by expanding: $2(x^2 - 6x + 9) - 11 = 2x^2 - 12x + 18 - 11 = 2x^2 - 12x + 7$. ✓

**3. An odd middle number.** Write $y = x^2 + 5x - 1$ in vertex form.

- Half of 5 is $\tfrac52$; $\left(\tfrac52\right)^2 = \tfrac{25}{4}$.
- $y = \left(x + \tfrac52\right)^2 - \tfrac{25}{4} - 1 = \left(x + \tfrac52\right)^2 - \tfrac{29}{4}$.
- Vertex $\left(-\tfrac52, -\tfrac{29}{4}\right) = (-2.5, -7.25)$. Fractions are fine; do not round them.

**4. The highest point of a ball.** A ball is thrown up from a hand 1.5 m above the ground at 20 m per second. On
Earth (gravity rounded to 10 m per second squared) its height is $h = -5t^2 + 20t + 1.5$.

- Take out $-5$ from the $t$ terms: $h = -5(t^2 - 4t) + 1.5$.
- Half of $-4$ is $-2$; $(-2)^2 = 4$: $h = -5\left[(t - 2)^2 - 4\right] + 1.5 = -5(t - 2)^2 + 20 + 1.5$.
- $h = -5(t - 2)^2 + 21.5$. Greatest height **21.5 m**, after **2 seconds**.

On Mars, with gravity about 3.7 m per second squared, $h = -1.85t^2 + 20t + 1.5$. The same steps give the top at
$t = \dfrac{20}{3.7} \approx 5.4$ s and a height of $1.5 + \dfrac{20^2}{4 \times 1.85} \approx 55.6$ m: more than
twice as high, because Mars pulls less than half as hard.

**5. The farmer's pen.** Let the two sides touching the wall each be $x$ m. The side opposite the wall is
$60 - 2x$ m.

- Area $A = x(60 - 2x) = -2x^2 + 60x$.
- $A = -2(x^2 - 30x) = -2\left[(x - 15)^2 - 225\right] = -2(x - 15)^2 + 450$.
- The square part is at most 0, so $A \le 450$, with equality only when $x = 15$. The best pen is **15 m by 30 m**,
  area **450 m²**, and nothing can beat it.

## Try it

1. What number completes the square? (a) $x^2 + 10x$ (b) $x^2 - 14x$ (c) $x^2 + 3x$
2. Write $y = x^2 - 8x + 10$ in vertex form and give the vertex.
3. Write $y = -x^2 + 6x - 4$ in vertex form. What is the greatest value of $y$?
4. Write $y = 3x^2 + 12x + 5$ in vertex form.
5. Two numbers add to 20. What is the largest their product can be?
6. A ball's height is $h = -5t^2 + 30t + 2$. Find its greatest height and when it happens.
7. With 80 m of fence and **no** wall, what rectangle has the largest area?
8. Show by completing the square that $y = x^2 + bx + c$ has its smallest value $c - \dfrac{b^2}{4}$ at
   $x = -\dfrac{b}{2}$.

??? note "Answers"
    1. (a) Half of 10 is 5, so add $25$: $(x + 5)^2$. (b) Half of $-14$ is $-7$, so add $49$: $(x - 7)^2$.
       (c) Half of 3 is $\tfrac32$, so add $\tfrac94$: $\left(x + \tfrac32\right)^2$.
    2. $y = (x^2 - 8x + 16) - 16 + 10 = (x - 4)^2 - 6$. Vertex $(4, -6)$.
    3. $y = -(x^2 - 6x) - 4 = -\left[(x - 3)^2 - 9\right] - 4 = -(x - 3)^2 + 5$. The greatest value is **5**, at
       $x = 3$.
    4. $y = 3(x^2 + 4x) + 5 = 3\left[(x + 2)^2 - 4\right] + 5 = 3(x + 2)^2 - 7$. Vertex $(-2, -7)$.
    5. Call them $x$ and $20 - x$. Product $P = x(20 - x) = -x^2 + 20x = -(x - 10)^2 + 100$. The largest product is
       **100**, when both numbers are 10.
    6. $h = -5(t^2 - 6t) + 2 = -5\left[(t - 3)^2 - 9\right] + 2 = -5(t - 3)^2 + 47$. Greatest height **47 m** at
       **3 s**.
    7. Width $x$, so length $40 - x$ (half the fence is one width plus one length). $A = x(40 - x) =
       -(x - 20)^2 + 400$. The best is a **20 m by 20 m square**, area **400 m²**.
    8. Half of $b$ is $\tfrac{b}{2}$, so $x^2 + bx + c = \left(x + \tfrac{b}{2}\right)^2 - \tfrac{b^2}{4} + c$. The
       square is at least 0 and is 0 only when $x = -\tfrac{b}{2}$, so the smallest value is
       $c - \tfrac{b^2}{4}$ there.

## Common mistake

**Forgetting to multiply by $a$.** In $2(x^2 - 6x) + 7$, completing the square inside adds 9 **inside** the bracket,
which is really $2 \times 9 = 18$. Writing $2(x - 3)^2 - 9 + 7$ is wrong. Always expand your answer to check it.

**Halving and squaring the wrong number.** You halve the coefficient of $x$ **after** taking $a$ out, not before. For
$3x^2 + 12x$, the number to halve is 4 (from $x^2 + 4x$), not 12.

## Where it leads

- Back: [Quadratic relations and the parabola](01-quadratic-relations.md) · Next: [Solving quadratic
  equations](03-solving-quadratics.md), where completing the square leads to the quadratic formula.
- [Level 7 page](index.md) · [Algebra topic page](../index.md)
- The square picture is the same area model you used for multiplying brackets in [level 6](../level-6/index.md);
  the Babylonians solved problems like these with pictures of squares nearly 4000 years ago.
- Finding the biggest or smallest value of any curve, not only a parabola, is what derivatives do:
  [Change](../../change/index.md), and at university [MAT137 Unit 6 (applications of
  derivatives)](../../../uoft/MAT137/unit06.md).
- The same move, writing $x^2 + y^2 + 4x - 6y = 3$ as $(x + 2)^2 + (y - 3)^2 = 16$, finds the centre of a circle:
  [Equations of circles](../../geometry/level-7/07-circle-equations.md).
