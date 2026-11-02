---
title: "The derivative from first principles"
---

# The derivative from first principles

*Change and motion · level 7, lesson 3 of 6*

## A question to start

Draw the curve $y = \frac{1}{x}$ for positive $x$. Pick any point on it and draw the tangent line there. The tangent
line and the two axes make a right triangle.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 300" role="img" aria-label="The curve y equals 1 over x for positive x, with tangent lines at x equals one half, 1 and 2. Each tangent makes a shaded right triangle with the axes: base 1 and height 4, base 2 and height 2, base 4 and height 1. All three have area 2.">
  <line x1="30" y1="278" x2="305" y2="278" stroke="currentColor" stroke-width="1.2"/>
  <line x1="30" y1="278" x2="30" y2="12" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="12" fill="currentColor"><line x1="89.8" y1="275" x2="89.8" y2="281" stroke="currentColor"/><text x="89.8" y="293" text-anchor="middle">1</text><line x1="149.6" y1="275" x2="149.6" y2="281" stroke="currentColor"/><text x="149.6" y="293" text-anchor="middle">2</text><line x1="209.3" y1="275" x2="209.3" y2="281" stroke="currentColor"/><text x="209.3" y="293" text-anchor="middle">3</text><line x1="269.1" y1="275" x2="269.1" y2="281" stroke="currentColor"/><text x="269.1" y="293" text-anchor="middle">4</text><line x1="27" y1="220.2" x2="33" y2="220.2" stroke="currentColor"/><text x="24" y="224.2" text-anchor="end">1</text><line x1="27" y1="162.3" x2="33" y2="162.3" stroke="currentColor"/><text x="24" y="166.3" text-anchor="end">2</text><line x1="27" y1="104.5" x2="33" y2="104.5" stroke="currentColor"/><text x="24" y="108.5" text-anchor="end">3</text><line x1="27" y1="46.7" x2="33" y2="46.7" stroke="currentColor"/><text x="24" y="50.7" text-anchor="end">4</text><text x="305" y="272" text-anchor="end">x</text><text x="36" y="22">y</text></g>
  <polygon points="30,278 89.8,278 30,46.7" fill="#7ccf9a" fill-opacity="0.3" stroke="none"/>
  <line x1="30" y1="46.7" x2="89.8" y2="278" stroke="#7ccf9a" stroke-width="2"/>
  <circle cx="59.9" cy="162.3" r="4" fill="currentColor"/>
  <polygon points="30,278 149.6,278 30,162.3" fill="#eea66f" fill-opacity="0.3" stroke="none"/>
  <line x1="30" y1="162.3" x2="149.6" y2="278" stroke="#eea66f" stroke-width="2"/>
  <circle cx="89.8" cy="220.2" r="4" fill="currentColor"/>
  <polygon points="30,278 269.1,278 30,220.2" fill="#9cc9ea" fill-opacity="0.3" stroke="none"/>
  <line x1="30" y1="220.2" x2="269.1" y2="278" stroke="#9cc9ea" stroke-width="2"/>
  <circle cx="149.6" cy="249.1" r="4" fill="currentColor"/>
  <polyline points="43.2,15.2 46.4,67.5 49.7,102.5 53,127.5 56.2,146.3 59.5,160.9 62.8,172.6 66.1,182.1 69.3,190.1 72.6,196.9 75.9,202.7 79.2,207.7 82.4,212.1 85.7,215.9 89,219.4 92.2,222.5 95.5,225.2 98.8,227.7 102.1,230 105.3,232.1 108.6,234 111.9,235.8 115.2,237.4 118.4,238.9 121.7,240.3 125,241.6 128.3,242.8 131.5,243.9 134.8,245 138.1,246 141.3,247 144.6,247.8 147.9,248.7 151.2,249.5 154.4,250.2 157.7,250.9 161,251.6 164.3,252.3 167.5,252.9 170.8,253.4 174.1,254 177.3,254.5 180.6,255 183.9,255.5 187.2,256 190.4,256.5 193.7,256.9 197,257.3 200.3,257.7 203.5,258.1 206.8,258.4 210.1,258.8 213.4,259.1 216.6,259.5 219.9,259.8 223.2,260.1 226.4,260.4 229.7,260.7 233,261 236.3,261.2 239.5,261.5 242.8,261.8 246.1,262 249.4,262.2 252.6,262.5 255.9,262.7 259.2,262.9 262.4,263.1 265.7,263.3 269,263.5 272.3,263.7 275.5,263.9 278.8,264.1 282.1,264.3 285.4,264.5 288.6,264.6 291.9,264.8 295.2,265 298.5,265.1 301.7,265.3 305,265.4" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <text x="281.1" y="254.2" font-size="12" text-anchor="middle" fill="currentColor">y = 1/x</text>
</svg>
</div>

Try it at $x = 1$, at $x = 2$, at $x = \frac12$. The triangles look completely different: tall and thin, short and
wide. Yet every single one has **area exactly 2**. Why? To answer, you need the slope of the tangent at every point
of the curve, and that is what this lesson builds: the **derivative**, worked out from nothing but its definition.

## The idea

### The definition

In level 6 you found the speed of a falling stone at an instant by taking average speeds over shorter and shorter
time intervals ([shrinking the interval](../level-6/02-shrinking-interval.md)), and you saw that the secant lines swing
round to the tangent line ([from secant to tangent](../level-6/03-secant-tangent.md)). Now that we have limits, we can
write that whole process as one formula.

Take a point $a$ and a small number $h$ (positive or negative, but not 0). The two points
$\big(a, f(a)\big)$ and $\big(a + h, f(a + h)\big)$ on the graph have

- **run** $= (a + h) - a = h$,
- **rise** $= f(a + h) - f(a)$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 250" role="img" aria-label="A curve with two points on it, at x equals a and at x equals a plus h. The run between them is h and the rise is f of a plus h minus f of a. The secant line through both points is drawn, and the less steep tangent line at the first point.">
  <line x1="30" y1="228" x2="345" y2="228" stroke="currentColor" stroke-width="1.2"/>
  <line x1="30" y1="228" x2="30" y2="12" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="12" fill="currentColor"><line x1="120" y1="225" x2="120" y2="231" stroke="currentColor"/><text x="120" y="243" text-anchor="middle">a</text><line x1="277.5" y1="225" x2="277.5" y2="231" stroke="currentColor"/><text x="277.5" y="243" text-anchor="middle">a + h</text><text x="345" y="222" text-anchor="end">x</text><text x="36" y="22">y</text></g>
  <line x1="120" y1="228" x2="120" y2="188.9" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="277.5" y1="228" x2="277.5" y2="46.1" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="52.5" y1="250.2" x2="310.3" y2="16.3" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="30" y1="232.5" x2="247.5" y2="127.3" stroke="#eea66f" stroke-width="2.5"/>
  <polyline points="30,210.7 33.5,210.7 37,210.6 40.5,210.4 44.1,210.2 47.6,209.9 51.1,209.5 54.6,209.1 58.1,208.6 61.6,208 65.2,207.4 68.7,206.7 72.2,205.9 75.7,205.1 79.2,204.2 82.7,203.2 86.2,202.2 89.8,201.1 93.3,200 96.8,198.7 100.3,197.4 103.8,196.1 107.3,194.6 110.9,193.1 114.4,191.6 117.9,190 121.4,188.3 124.9,186.5 128.4,184.7 132,182.8 135.5,180.8 139,178.8 142.5,176.7 146,174.5 149.5,172.3 153,170 156.6,167.7 160.1,165.2 163.6,162.7 167.1,160.2 170.6,157.6 174.1,154.9 177.7,152.1 181.2,149.3 184.7,146.4 188.2,143.4 191.7,140.4 195.2,137.3 198.8,134.2 202.3,131 205.8,127.7 209.3,124.3 212.8,120.9 216.3,117.4 219.8,113.8 223.4,110.2 226.9,106.5 230.4,102.8 233.9,99 237.4,95.1 240.9,91.1 244.5,87.1 248,83 251.5,78.9 255,74.6 258.5,70.4 262,66 265.5,61.6 269.1,57.1 272.6,52.5 276.1,47.9 279.6,43.2 283.1,38.5 286.6,33.7 290.2,28.8 293.7,23.8 297.2,18.8 300.7,13.7 304.2,8.6" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <line x1="120" y1="188.9" x2="277.5" y2="188.9" stroke="currentColor" stroke-width="1.5"/>
  <line x1="277.5" y1="188.9" x2="277.5" y2="46.1" stroke="currentColor" stroke-width="1.5"/>
  <text x="198.8" y="204.9" font-size="12" text-anchor="middle" fill="currentColor">run h</text>
  <text x="283.5" y="117.5" font-size="12" text-anchor="start" fill="currentColor">rise</text>
  <text x="283.5" y="132.5" font-size="12" text-anchor="start" fill="currentColor">f(a + h) − f(a)</text>
  <circle cx="120" cy="188.9" r="4" fill="currentColor"/>
  <circle cx="277.5" cy="46.1" r="4" fill="currentColor"/>
  <text x="217" y="91.7" font-size="12" text-anchor="end" fill="currentColor">secant</text>
  <text x="247.5" y="143.3" font-size="12" text-anchor="middle" fill="currentColor">tangent</text>
</svg>
</div>

The slope of the secant line between them is the **difference quotient**

$$\frac{f(a + h) - f(a)}{h}.$$

As $h \to 0$ the second point slides along the curve to the first, and the secant turns into the tangent. So we
**define** the **derivative of $f$ at $a$** to be

$$f'(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h},$$

whenever this limit exists. If it does, we say $f$ is **differentiable** at $a$. The number $f'(a)$ (say "$f$ dash of
$a$" or "$f$ prime of $a$") is, all at once:

- the **slope of the tangent line** to the graph at $x = a$;
- the **instantaneous rate of change** of $f$ at $a$: how many units the output changes per unit of input, right at
  that moment.

Working out a derivative straight from this limit is called working **from first principles**. Every time,
substituting $h = 0$ gives $\frac{0}{0}$ (rise 0 over run 0), so every time we must simplify first, just as in
[lesson 1](01-limits.md).

### $x^2$: the derivative at every point at once

Instead of one point at a time, let $a$ be any number $x$:

$$\frac{(x + h)^2 - x^2}{h} = \frac{x^2 + 2xh + h^2 - x^2}{h} = \frac{2xh + h^2}{h} = 2x + h.$$

As $h \to 0$ this tends to $2x$. So **the derivative of $x^2$ is $2x$**: the slope at $x = 3$ is 6, at $x = -1$ it is
$-2$, at $x = 0$ it is 0 (the bottom of the U is flat).

### $x^3$

Expand $(x + h)^3 = x^3 + 3x^2 h + 3x h^2 + h^3$ (the numbers 1, 3, 3, 1 are a row of
[Pascal's triangle](../../counting/index.md)). Then

$$\frac{(x + h)^3 - x^3}{h} = \frac{3x^2 h + 3x h^2 + h^3}{h} = 3x^2 + 3xh + h^2 \;\longrightarrow\; 3x^2.$$

**The derivative of $x^3$ is $3x^2$.** Notice it is never negative: $x^3$ never goes downhill. At $x = 0$ the slope is
0, yet the curve does not turn round there; it flattens for an instant and carries on up.

Look at **why** the answer came out this way. After cancelling $x^3$, every term left has at least one $h$. Dividing by
$h$ leaves exactly one term without $h$, namely $3x^2$, and the rest have an $h$ and vanish in the limit. Only the
term with **exactly one** $h$ survives. That is the seed of the power rule in the [next lesson](04-power-rule.md).

### $\frac{1}{x}$

Here the work is with fractions. For $x \ne 0$:

$$\frac{1}{x + h} - \frac{1}{x} = \frac{x - (x + h)}{x(x + h)} = \frac{-h}{x(x + h)}.$$

Divide by $h$:

$$\frac{f(x + h) - f(x)}{h} = \frac{-1}{x(x + h)} \;\longrightarrow\; \frac{-1}{x \cdot x} = -\frac{1}{x^2}.$$

**The derivative of $\frac{1}{x}$ is $-\frac{1}{x^2}$.** It is always negative: the graph always goes downhill, on both
sides of 0. And it gets very steep near 0 and very flat far away, just as the picture shows.

### $\sqrt{x}$

Use the conjugate trick from lesson 1. For $x > 0$:

$$\frac{\sqrt{x + h} - \sqrt{x}}{h} = \frac{(\sqrt{x + h} - \sqrt{x})(\sqrt{x + h} + \sqrt{x})}{h(\sqrt{x + h} + \sqrt{x})} = \frac{h}{h(\sqrt{x + h} + \sqrt{x})} = \frac{1}{\sqrt{x + h} + \sqrt{x}}.$$

As $h \to 0$ this tends to $\dfrac{1}{2\sqrt{x}}$. At $x = 0$ the formula breaks down: the slope grows without end
and the tangent there is upright.

### Other notation

Gottfried Leibniz, one of the two inventors of calculus, wrote the rise as $\Delta y$ and the run as $\Delta x$
($\Delta$, the Greek capital D, for "difference"), and wrote the limit of $\frac{\Delta y}{\Delta x}$ as

$$\frac{dy}{dx}.$$

So if $y = x^2$, then $\frac{dy}{dx} = 2x$. You may also see $\frac{d}{dx}\left(x^2\right) = 2x$, read as "the derivative
with respect to $x$ of $x^2$". It is not really a fraction, but it often behaves like one, which is why it is so
popular. Newton wrote a dot over the letter, $\dot{s}$, for a rate of change in time; physicists still do.

### When there is no derivative

The limit does not always exist. Take $f(x) = |x|$ at $a = 0$:

$$\frac{|0 + h| - |0|}{h} = \frac{|h|}{h},$$

which is $1$ for $h > 0$ and $-1$ for $h < 0$. The one-sided limits differ, so there is **no derivative at 0**. The
graph has a **corner** there: secants from the right have slope 1, secants from the left have slope $-1$, and no single
tangent fits. A function also has no derivative at a jump, and none where the tangent is vertical, like
$\sqrt[3]{x}$ at 0.

### Differentiable means continuous

**If $f$ is differentiable at $a$, then $f$ is continuous at $a$.** Here is the whole proof. For $h \ne 0$,

$$f(a + h) - f(a) = \frac{f(a + h) - f(a)}{h} \cdot h.$$

As $h \to 0$ the fraction tends to $f'(a)$ and $h$ tends to 0, so by the product law the right side tends to
$f'(a) \cdot 0 = 0$. So $f(a + h) \to f(a)$, which is continuity. The reverse is false: $|x|$ is continuous at 0 but
not differentiable there. A smooth graph has no breaks; an unbroken graph can still have corners.

### The tangent line

The tangent at $x = a$ passes through $\big(a, f(a)\big)$ with slope $f'(a)$, so its equation is

$$y = f(a) + f'(a)(x - a).$$

## Worked examples

**1. One point, from the definition.** Find $f'(2)$ for $f(x) = x^2 - 3x$.

1. $f(2 + h) = (2 + h)^2 - 3(2 + h) = 4 + 4h + h^2 - 6 - 3h = -2 + h + h^2$.
2. $f(2) = 4 - 6 = -2$.
3. Difference quotient: $\dfrac{(-2 + h + h^2) - (-2)}{h} = \dfrac{h + h^2}{h} = 1 + h$.
4. As $h \to 0$: $f'(2) = 1$. At $x = 2$ the graph climbs 1 unit per unit across.

**2. Falling on Mars.** On Mars, a dropped stone falls about $d(t) = 1.86t^2$ metres in $t$ seconds (level 5,
[falling](../level-5/05-falling-bodies.md)). Find its speed at any time, from first principles.

1. $d(t + h) - d(t) = 1.86\big((t + h)^2 - t^2\big) = 1.86(2th + h^2)$.
2. Divide by $h$: $1.86(2t + h)$.
3. As $h \to 0$: $d'(t) = 3.72t$ m/s.

After 3 seconds the stone is falling at $3.72 \times 3 = 11.16$ m/s. The number 3.72 is the speed gained each second,
which matches Mars's gravity of about 3.71 m/s² (the 1.86 was itself rounded).

**3. The triangle puzzle.** Prove that every tangent to $y = \frac{1}{x}$ (with $x > 0$) makes a triangle of area 2 with
the axes.

1. At $x = a$ the point is $\left(a, \frac1a\right)$ and the slope is $-\frac{1}{a^2}$.
2. Tangent: $y = \frac1a - \frac{1}{a^2}(x - a) = \frac{2}{a} - \frac{x}{a^2}$.
3. It crosses the $y$-axis (put $x = 0$) at height $\frac{2}{a}$. It crosses the $x$-axis (put $y = 0$) where
   $\frac{x}{a^2} = \frac{2}{a}$, that is at $x = 2a$.
4. Area $= \frac12 \times 2a \times \frac2a = 2$. The $a$ cancels, so the area is 2 for **every** tangent. (Bonus: the
   point of contact, $x = a$, is always exactly halfway along the base.)

**4. A square root and lesson 1.** Find the slope of $y = \sqrt{x}$ at $x = 4$.

The formula gives $\frac{1}{2\sqrt{4}} = \frac14$. In lesson 1 you found $\lim_{x \to 4} \frac{\sqrt{x} - 2}{x - 4} = \frac14$.
It is the same limit in disguise: write $x = 4 + h$ and it becomes $\frac{\sqrt{4 + h} - \sqrt{4}}{h}$.

## Try it

1. From first principles, find the derivative of $f(x) = 5x - 2$. Why is the answer obvious from the graph?
2. From first principles, find $f'(3)$ for $f(x) = x^2 + 1$.
3. From first principles, find the derivative of $f(x) = 3x^2$ at every $x$.
4. From first principles, find the derivative of $f(x) = \dfrac{2}{x}$.
5. Expand $(x + h)^4$ and use it to find the derivative of $x^4$ from first principles.
6. Find the equation of the tangent to $y = \dfrac1x$ at $x = 2$, and check that its triangle has area 2.
7. Find the equation of the tangent to $y = \sqrt{x}$ at $x = 9$.
8. Is $f(x) = |x - 2|$ differentiable at $x = 2$? At $x = 5$? Explain.

??? note "Answers"
    1. $\dfrac{5(x + h) - 2 - (5x - 2)}{h} = \dfrac{5h}{h} = 5$, so $f'(x) = 5$ everywhere. The graph is a straight line
       of slope 5, and a line's tangent is itself.
    2. $f(3 + h) - f(3) = (9 + 6h + h^2 + 1) - 10 = 6h + h^2$. Dividing by $h$: $6 + h \to 6$. So $f'(3) = 6$.
    3. $\dfrac{3(x + h)^2 - 3x^2}{h} = \dfrac{6xh + 3h^2}{h} = 6x + 3h \to 6x$.
    4. $\dfrac{2}{x + h} - \dfrac{2}{x} = \dfrac{2x - 2(x + h)}{x(x + h)} = \dfrac{-2h}{x(x + h)}$. Dividing by $h$:
       $\dfrac{-2}{x(x + h)} \to -\dfrac{2}{x^2}$.
    5. $(x + h)^4 = x^4 + 4x^3 h + 6x^2 h^2 + 4x h^3 + h^4$. Subtract $x^4$ and divide by $h$:
       $4x^3 + 6x^2 h + 4x h^2 + h^3 \to 4x^3$.
    6. Point $\left(2, \frac12\right)$, slope $-\frac{1}{4}$. Tangent: $y = \frac12 - \frac14(x - 2) = 1 - \frac{x}{4}$. It
       meets the $y$-axis at 1 and the $x$-axis at 4. Area $\frac12 \times 4 \times 1 = 2$. ✓
    7. Point $(9, 3)$, slope $\frac{1}{2\sqrt9} = \frac16$. Tangent: $y = 3 + \frac16(x - 9) = \frac{x}{6} + \frac32$.
    8. At $x = 2$: the quotient is $\dfrac{|h|}{h}$, which is $1$ from the right and $-1$ from the left, so **no**
       (a corner). At $x = 5$: near 5, $x - 2$ is positive, so $f(x) = x - 2$, a line of slope 1. **Yes**, and
       $f'(5) = 1$.

## Common mistake

**Writing $f(a) + h$ instead of $f(a + h)$.** For $f(x) = x^2$ and $a = 3$, $f(3 + h) = (3 + h)^2 = 9 + 6h + h^2$, not
$9 + h$. Always put the whole of $a + h$ into the function.

**Cancelling $h$ when it is not a factor of everything.** In $\frac{2xh + h^2}{h}$, the $h$ divides **both** terms on
top, giving $2x + h$. You cannot cancel $h$ from $\frac{h + 1}{h}$; first make sure every term on top has a factor
of $h$.

## Where it leads

- Back: [Continuity](02-continuity.md) · Next: [The power rule](04-power-rule.md), the shortcut that saves all this algebra.
- [Level 7 page](index.md) · [Change and motion topic page](../index.md)
- The algebra here: expanding brackets in [Algebra: polynomials](../../algebra/level-6/02-polynomials.md), and the
  binomial numbers in [Counting](../../counting/index.md).
- Slopes and the equation of a line: [Geometry: slope and the equation of a line](../../geometry/level-6/06-slope-line-equation.md).
- On the U of T shelf: [MAT137 Unit 3: derivatives](../../../uoft/MAT137/unit03.md).
