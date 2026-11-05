---
title: "Intervals and absolute value"
---

# Intervals and absolute value

*Numbers · level 7, lesson 6 of 6*

## A question to start

Solve this equation:

$$|x - 3| + |x + 1| = 4$$

Try a few numbers. $x = 0$: $|{-3}| + |1| = 3 + 1 = 4$. It works. $x = 1$: $2 + 2 = 4$. Works. $x = 2.5$:
$0.5 + 3.5 = 4$. Works again. $x = 5$: $2 + 6 = 8$. Fails.

Most equations you have met have one or two solutions. This one has **infinitely many**: every number from $-1$ to
$3$ works, and nothing else does. The reason is a picture, not a calculation, and the picture is the key idea of this
lesson: **absolute value is distance**.

## The idea

### Intervals: naming a stretch of the number line

Often the answer to a problem is not one number but a whole stretch of the real line, such as "all numbers between 2
and 5". An **interval** is such a stretch, with no gaps. **Interval notation** writes it with its two ends and a
bracket at each end:

- a **square bracket** $[$ or $]$ means the end number is **included**;
- a **round bracket** $($ or $)$ means the end number is **left out**.

| Inequality | Interval | On the number line |
| --- | --- | --- |
| $2 \le x \le 5$ | $[2, 5]$ | filled dots at 2 and 5 (a **closed** interval) |
| $2 < x < 5$ | $(2, 5)$ | empty dots at 2 and 5 (an **open** interval) |
| $2 \le x < 5$ | $[2, 5)$ | filled at 2, empty at 5 |
| $x > 2$ | $(2, \infty)$ | empty dot at 2, ray to the right |
| $x \le 5$ | $(-\infty, 5]$ | ray to the left, filled dot at 5 |
| all real $x$ | $(-\infty, \infty)$ | the whole line, which is $\mathbb{R}$ |

The symbol $\infty$ (infinity) is not a number; $(2, \infty)$ just means "no right end". So $\infty$ always gets a
round bracket: there is no number $\infty$ to include.

To join two intervals we use the **union** symbol $\cup$, meaning "or": $x < 1$ or $x \ge 4$ is
$(-\infty, 1) \cup [4, \infty)$.

### Absolute value is distance

The **absolute value** of a real number $x$, written $|x|$, is its distance from 0 on the number line. Distance is
never negative, so

$$|x| = \begin{cases} x & \text{if } x \ge 0 \\ -x & \text{if } x < 0 \end{cases}$$

The second line can look odd: $|-7| = -(-7) = 7$. The minus sign in "$-x$" turns a negative $x$ into a positive
number. Another way to say it: $|x| = \sqrt{x^2}$, since squaring removes the sign and the square root symbol always
means the root that is not negative.

The really useful fact is the next one. The distance between two numbers $a$ and $b$ on the line is

$$\text{distance from } a \text{ to } b = |a - b|.$$

For example, the distance from $-2$ to $5$ is $|-2 - 5| = |-7| = 7$. In [lesson 4](04-complex-plane.md) the same
formula, $|w - z|$, gave the distance between two complex numbers; this is the one-dimensional case.

So read every absolute value expression aloud as a distance:

- $|x - 3|$ is "the distance from $x$ to 3".
- $|x + 1| = |x - (-1)|$ is "the distance from $x$ to $-1$".
- $|x - 3| < 2$ is "$x$ is **within 2 of 3**".

Two rules carry over from the modulus of complex numbers: $|ab| = |a|\,|b|$ and $|{-a}| = |a|$.

### Absolute value equations

$|x - c| = r$ (with $r > 0$) says "$x$ is at distance $r$ from $c$". On a line there are exactly two such points, one
each side:

$$|x - c| = r \quad\Longleftrightarrow\quad x = c - r \;\text{ or }\; x = c + r.$$

If $r = 0$ there is one solution, $x = c$; if $r < 0$ there are **none** (a distance cannot be negative). When the
inside is more complicated, such as $|2x - 5| = 7$, the same idea gives two ordinary equations: $2x - 5 = 7$ or
$2x - 5 = -7$.

### Absolute value inequalities

$|x - c| < r$ says "$x$ is less than $r$ away from $c$". Those are the points strictly between $c - r$ and $c + r$:

$$|x - c| < r \quad\Longleftrightarrow\quad c - r < x < c + r, \text{ the interval } (c - r, c + r).$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 110" role="img" aria-label="A number line from minus 1 to 6. The open interval from 1 to 5 is shaded, with empty dots at 1 and 5 and a filled dot at the centre 3; arrows of length 2 go from 3 to each end">
  <line x1="20" y1="70" x2="400" y2="70" stroke="currentColor" stroke-width="1.5"/>
  <g stroke="currentColor" stroke-width="1.5">
    <line x1="50" y1="64" x2="50" y2="76"/><line x1="95" y1="64" x2="95" y2="76"/><line x1="140" y1="64" x2="140" y2="76"/>
    <line x1="185" y1="64" x2="185" y2="76"/><line x1="230" y1="64" x2="230" y2="76"/><line x1="275" y1="64" x2="275" y2="76"/>
    <line x1="320" y1="64" x2="320" y2="76"/><line x1="365" y1="64" x2="365" y2="76"/>
  </g>
  <line x1="140" y1="70" x2="320" y2="70" stroke="#7ccf9a" stroke-width="7"/>
  <circle cx="140" cy="70" r="7" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="320" cy="70" r="7" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="230" cy="70" r="5" fill="#eea66f"/>
  <line x1="226" y1="40" x2="146" y2="40" stroke="#eea66f" stroke-width="2"/>
  <polyline points="154,35 146,40 154,45" fill="none" stroke="#eea66f" stroke-width="2"/>
  <line x1="234" y1="40" x2="314" y2="40" stroke="#eea66f" stroke-width="2"/>
  <polyline points="306,35 314,40 306,45" fill="none" stroke="#eea66f" stroke-width="2"/>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="50" y="96">−1</text><text x="95" y="96">0</text><text x="140" y="96">1</text><text x="185" y="96">2</text>
    <text x="230" y="96">3</text><text x="275" y="96">4</text><text x="320" y="96">5</text><text x="365" y="96">6</text>
    <text x="186" y="30">2</text><text x="274" y="30">2</text>
  </g>
</svg>
</div>

The picture shows $|x - 3| < 2$: the interval $(1, 5)$, centre 3, reaching 2 each way. Every interval with two ends
can be written like this, using its **midpoint** and its **radius** (half its length). The interval $[a, b]$ is

$$|x - m| \le r \qquad\text{with}\quad m = \frac{a + b}{2}, \quad r = \frac{b - a}{2}.$$

The opposite inequality, $|x - c| > r$, says "$x$ is **more** than $r$ away from $c$". Those points are on the two
outer rays:

$$|x - c| > r \quad\Longleftrightarrow\quad x < c - r \;\text{ or }\; x > c + r, \text{ that is } (-\infty, c - r) \cup (c + r, \infty).$$

A quick check of which way round: "less than" gives the **inside** (one interval), "greater than" gives the
**outside** (two rays).

### The triangle inequality

For any real numbers $a$ and $b$:

$$|a + b| \le |a| + |b|$$

**Proof.** For any real number, $-|a| \le a \le |a|$ (the number is its own absolute value or its negative). Likewise
$-|b| \le b \le |b|$. Adding the two lines,

$$-\big(|a| + |b|\big) \le a + b \le |a| + |b|.$$

This says that $a + b$ is within $|a| + |b|$ of 0, that is, $|a + b| \le |a| + |b|$. ∎

**When is it an equality?** When $a$ and $b$ have the same sign (or one is 0): $|3 + 4| = 7 = |3| + |4|$. When the
signs differ, part of one cancels the other and the left side is smaller: $|3 + (-4)| = 1 < 7$.

**Why "triangle"?** The same inequality holds for complex numbers, $|z + w| \le |z| + |w|$, and there it is a
statement about a real triangle: the arrows $z$, $w$ and $z + w$ of lesson 4 form a triangle, and one side is never
longer than the other two put together. On the real line the "triangle" has been squashed flat.

**The distance form.** Putting $a = x - y$ and $b = y - z$ (so $a + b = x - z$) gives

$$|x - z| \le |x - y| + |y - z|$$

"Going from $x$ to $z$ directly is never longer than going via $y$." This form is used constantly in analysis, for
example to bound errors: if $x$ is within 0.1 of 2 and $y$ is within 0.2 of 3, then
$|(x + y) - 5| = |(x - 2) + (y - 3)| \le 0.1 + 0.2$, so $x + y$ is within 0.3 of 5.

<figure class="play" data-play="numline" data-mode="ineq"><span class="ai-tag">AI-created</span><figcaption><b>An interval.</b> x > a is everything to the right of a.</figcaption></figure>

## Worked examples

**1. Equations.** Solve $|2x - 5| = 7$ and $|x - 1| = |x + 3|$.

1. $2x - 5 = 7$ gives $x = 6$; $2x - 5 = -7$ gives $x = -1$. Check: $|12 - 5| = 7$ ✓, $|-2 - 5| = 7$ ✓.
2. $|x - 1| = |x - (-3)|$: $x$ is the same distance from $1$ and from $-3$, so it is the midpoint: $x = \dfrac{1 + (-3)}{2} = -1$.
   Check: $|-2| = |2|$ ✓.

**2. An "inside" inequality.** Solve $|3x + 1| < 8$.

1. "Less than" gives one interval: $-8 < 3x + 1 < 8$.
2. Subtract 1 from all three parts: $-9 < 3x < 7$.
3. Divide by 3: $-3 < x < \tfrac73$. In interval notation: $\left(-3, \tfrac73\right)$.

**3. An "outside" inequality.** Solve $|x - 4| \ge 2$.

$x$ is at least 2 away from 4: $x \le 2$ or $x \ge 6$, which is $(-\infty, 2] \cup [6, \infty)$. The ends are included
because of the "or equal to".

**4. The distance from Mars to the Sun.** Mars's orbit is an ellipse, not a circle. Its distance $d$ from the Sun
ranges from about 206.6 million km (closest) to about 249.2 million km (farthest). Write this as an absolute value
inequality.

1. The interval is $[206.6, 249.2]$ (in millions of km).
2. Midpoint: $\dfrac{206.6 + 249.2}{2} = 227.9$. Radius: $\dfrac{249.2 - 206.6}{2} = 21.3$.
3. So $|d - 227.9| \le 21.3$: Mars stays within about 21.3 million km of 227.9 million km, which is its average
   distance in the sense of the orbit's long half-axis.

**5. The opening puzzle.** Solve $|x - 3| + |x + 1| = 4$, and then $|x - 3| + |x + 1| = 6$.

1. Read it as distances: (distance from $x$ to 3) + (distance from $x$ to $-1$) $= 4$.
2. The points $-1$ and $3$ are themselves 4 apart. If $x$ is anywhere **between** them, the two distances make up the
   gap exactly: total 4. If $x$ is outside, say to the right of 3, the walk to $-1$ covers the whole gap **plus** the
   extra from 3 to $x$ twice, so the total is more than 4.
3. So the solution is the whole interval $[-1, 3]$.
4. For a total of 6, $x$ must be outside, with an extra $1$ beyond an end (because $4 + 2 \times 1 = 6$): $x = 4$ or
   $x = -2$. Check $x = 4$: $1 + 5 = 6$ ✓; $x = -2$: $5 + 1 = 6$ ✓.

## Try it

1. Write in interval notation: (a) $-2 \le x < 5$; (b) $x > 7$; (c) $x \le 0$ or $x > 3$.
2. Solve $|x + 4| = 9$.
3. Solve $|5 - 2x| = 3$.
4. Solve $|x - 1| \le 4$ and write the answer as an interval.
5. Solve $|2x + 3| > 5$.
6. Write the interval $[-7, 3]$ as an absolute value inequality.
7. Solve $|x - 2| = |x + 6|$.
8. Prove the **reverse triangle inequality** $\big|\,|a| - |b|\,\big| \le |a - b|$. (Hint: apply the triangle
   inequality to $a = (a - b) + b$, and then with $a$ and $b$ swapped.)

??? note "Answers"
    1. (a) $[-2, 5)$. (b) $(7, \infty)$. (c) $(-\infty, 0] \cup (3, \infty)$.
    2. $x + 4 = 9$ or $x + 4 = -9$: $x = 5$ or $x = -13$. (The points at distance 9 from $-4$.)
    3. $5 - 2x = 3$ gives $x = 1$; $5 - 2x = -3$ gives $x = 4$. Check: $|5 - 2| = 3$ ✓, $|5 - 8| = 3$ ✓.
    4. $-4 \le x - 1 \le 4$, so $-3 \le x \le 5$: $[-3, 5]$.
    5. "Greater than" gives the outside: $2x + 3 > 5$ (so $x > 1$) or $2x + 3 < -5$ (so $x < -4$). Answer:
       $(-\infty, -4) \cup (1, \infty)$.
    6. Midpoint $\dfrac{-7 + 3}{2} = -2$, radius $\dfrac{3 - (-7)}{2} = 5$: $|x + 2| \le 5$.
    7. $x$ is equally far from 2 and from $-6$, so it is the midpoint: $x = \dfrac{2 + (-6)}{2} = -2$. Check: $|-4| =
       |4|$ ✓.
    8. $|a| = |(a - b) + b| \le |a - b| + |b|$, so $|a| - |b| \le |a - b|$. Swapping the letters,
       $|b| - |a| \le |b - a| = |a - b|$. So $|a| - |b|$ lies between $-|a - b|$ and $|a - b|$, which means
       $\big|\,|a| - |b|\,\big| \le |a - b|$.

## Common mistake

**Turning $|x - c| > r$ into one interval.** $|x - 4| > 2$ is **not** $2 < x < 6$; that is the inside. "Greater than"
means far from 4, on either side: $x < 2$ or $x > 6$. Draw the number line before writing anything.

**Thinking $|a + b| = |a| + |b|$ or $|-x| = x$.** The first fails when the signs differ ($|3 - 4| = 1$, not 7). The
second fails when $x$ is negative: if $x = -5$, then $|-x| = |5| = 5 = -x$, not $x$. The safe statement is
$|-x| = |x|$.

## Where it leads

- Back: [Every quadratic has roots](05-every-quadratic.md) · Next level: [Level 8: complex numbers and beyond](../level-8/index.md),
  starting with polar form.
- [Level 7 page](index.md) · [Numbers topic page](../index.md)
- Solving inequalities in general: [Algebra](../../algebra/index.md). Error bounds and tolerances:
  [Measurement](../../measurement/index.md).
- The triangle inequality and "within $\varepsilon$ of" are the language of limits. On the U of T shelf:
  [MAT137 Unit 2 (limits and continuity)](../../../uoft/MAT137/unit02.md) and
  [MAT158 Unit 3 (limits)](../../../uoft/MAT158H1/unit03.md).
