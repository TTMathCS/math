---
title: "Master: Speed at an instant, the derivative"
---

# Master: Speed at an instant, the derivative

*Change and motion · step 4 of 5*

## A question to start

A car's speedometer says **50 km/h**. What does that number mean?

Speed is distance divided by time. But the speedometer shows the speed **at this instant**, and in an instant no
time passes and no distance is covered. That gives $\dfrac{0}{0}$, which means nothing. And yet the speedometer
clearly works, and a falling stone clearly hits the ground faster than it started. This puzzle goes back to
the thinkers of ancient Greece. Its answer, worked out by Isaac Newton and Gottfried Leibniz in the late 1600s, is the
**derivative**, the first great idea of calculus.

## The idea

### A falling stone

Drop a stone. Ignoring air, the distance it has fallen after $t$ seconds is very close to

$$d(t) = 4.9\,t^2 \text{ metres} \quad \text{(on Earth)}.$$

After 1 second it has fallen 4.9 m, after 2 seconds 19.6 m, after 3 seconds 44.1 m. How fast is it going at exactly
$t = 2$?

### Shrink the interval

We cannot use an interval of zero time, but we can use a **tiny** one. Find the average speed from $t = 2$ to
$t = 2 + h$, where $h$ is a small amount of time:

$$\text{average speed} = \frac{d(2 + h) - d(2)}{h}.$$

Now make $h$ smaller and smaller:

| Interval | $h$ (s) | Average speed (m/s) |
| --- | --- | --- |
| 2 to 3 | 1 | 24.5 |
| 2 to 2.1 | 0.1 | 20.09 |
| 2 to 2.01 | 0.01 | 19.649 |
| 2 to 2.001 | 0.001 | 19.6049 |

The averages close in on **19.6 m/s**. That number is the speed at the instant $t = 2$. We never divide by zero;
we watch where the answers are heading as $h$ gets close to zero.

Algebra shows it exactly. Since $(2 + h)^2 = 4 + 4h + h^2$,

$$\frac{4.9(4 + 4h + h^2) - 4.9 \times 4}{h} = \frac{4.9(4h + h^2)}{h} = 4.9(4 + h) = 19.6 + 4.9h.$$

As $h$ shrinks to 0, this heads to $19.6$. (Dividing by $h$ is fine here, because $h$ is small but **not** zero.)

### Limits and the derivative

"The value that the averages head towards as $h$ gets close to 0" is called a **limit**, written
$\displaystyle\lim_{h \to 0}$. The **derivative** of a function $f$ at a point $a$ is

$$f'(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h}.$$

Read $f'(a)$ as "$f$ prime of $a$". It is the **instantaneous rate of change** of $f$ at $a$: the speed at an
instant, if $f$ is a distance.

### The picture: from secant to tangent

On the graph, $\dfrac{f(a + h) - f(a)}{h}$ is the slope of the secant line from the Build step, through the points
at $a$ and $a + h$. As $h$ shrinks, the second point slides along the curve towards the first, and the secant line
turns until it just touches the curve at one point. That line is the **tangent line**, and its slope is $f'(a)$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 210" role="img" aria-label="The curve y equals x squared. Two secant lines from a point P to points further along the curve, getting closer to P, and the tangent line at P.">
  <line x1="20" y1="190" x2="400" y2="190" stroke="currentColor" stroke-width="1"/>
  <path d="M 60 190 Q 210 190 360 10" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <line x1="140" y1="184" x2="340" y2="44" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="140" y1="181.2" x2="340" y2="69.2" stroke="#7ccf9a" stroke-width="2"/>
  <line x1="100" y1="194" x2="340" y2="98" stroke="#eea66f" stroke-width="3"/>
  <circle cx="160" cy="170" r="4.5" fill="currentColor"/>
  <circle cx="310" cy="65" r="3.5" fill="#9cc9ea"/>
  <circle cx="240" cy="125.2" r="3.5" fill="#7ccf9a"/>
  <g font-size="13" fill="currentColor">
    <text x="140" y="160">P</text>
    <text x="345" y="50">secant lines</text>
    <text x="345" y="104">tangent at P</text>
  </g>
</svg>
</div>

### The derivative of $x^2$, and a pattern

Do the same algebra for $f(x) = x^2$ at any point $x$:

$$\frac{(x + h)^2 - x^2}{h} = \frac{2xh + h^2}{h} = 2x + h \;\longrightarrow\; 2x.$$

So the derivative of $x^2$ is $2x$. The same method (expanding $(x+h)^3$) gives the derivative of $x^3$ as $3x^2$.
A pattern appears, called the **power rule**:

$$\text{if } f(x) = x^n, \text{ then } f'(x) = n\,x^{n-1}.$$

Two more rules make it useful. A number in front stays in front: the derivative of $4.9t^2$ is
$4.9 \times 2t = 9.8t$. And the derivative of a sum is the sum of the derivatives. A constant on its own has
derivative 0 (a flat line has slope 0), and $x$ has derivative 1.

So the stone's speed at time $t$ is $d'(t) = 9.8t$ m/s. At $t = 2$ that is 19.6 m/s, matching the table. The
number 9.8 is how much the speed grows each second: the **acceleration** due to Earth's gravity, in metres per
second per second.

### The same stone on Mars

Mars is smaller than Earth and pulls less strongly. A stone dropped on Mars falls about $d(t) = 1.86\,t^2$ metres,
so its speed is $d'(t) \approx 3.7\,t$ m/s. After 2 seconds it is moving at about 7.4 m/s, well under half its speed
on Earth.

## Worked examples

**1. From the definition.** Find $f'(3)$ for $f(x) = x^2$, and the tangent line there.

1. $\dfrac{f(3 + h) - f(3)}{h} = \dfrac{9 + 6h + h^2 - 9}{h} = 6 + h$.
2. As $h \to 0$, this goes to $6$. So $f'(3) = 6$.
3. The tangent line passes through $(3, 9)$ with slope 6: $y = 6x + b$, and $9 = 18 + b$ gives $b = -9$. The
   tangent line is $y = 6x - 9$.

**2. With the rules.** Find the derivative of $g(x) = x^3 - 4x^2 + 5$, and $g'(2)$.

$$g'(x) = 3x^2 - 8x + 0 = 3x^2 - 8x, \qquad g'(2) = 12 - 16 = -4.$$

At $x = 2$ the graph is going **down**, with slope $-4$.

**3. Where is the graph flat?** A tangent line is flat where the derivative is 0. For $y = x^2 - 6x + 10$, the
derivative is $2x - 6$, which is 0 at $x = 3$. There $y = 9 - 18 + 10 = 1$. The point $(3, 1)$ is the **lowest**
point of this U-shaped graph. Finding highest and lowest points this way is one of the most useful things calculus
does.

## Try it

1. Use the definition to find the derivative of $f(x) = 3x + 2$. Why does the answer make sense?
2. Find the derivative of $f(x) = x^4$, and its value at $x = 2$.
3. A stone falls $d(t) = 4.9t^2$ metres. How fast is it going after 3 seconds?
4. Find the equation of the tangent line to $y = x^2$ at $x = -1$.
5. For $f(x) = x^3$, work out $\dfrac{f(1 + h) - f(1)}{h}$ for $h = 0.1$ and $h = 0.01$. What do you think $f'(1)$
   is? Check with the power rule.
6. A ball's height is $h(t) = 20t - 5t^2$ metres. When does it reach its highest point, and how high is that?

??? note "Answers"
    1. $\dfrac{3(x + h) + 2 - (3x + 2)}{h} = \dfrac{3h}{h} = 3$. The derivative is 3 everywhere. The graph is a
       straight line with slope 3, and the tangent to a straight line is the line itself.
    2. $f'(x) = 4x^3$, so $f'(2) = 4 \times 8 = 32$.
    3. $d'(t) = 9.8t$, so $d'(3) = 29.4$ m/s.
    4. Slope $2 \times (-1) = -2$, through $(-1, 1)$: $1 = -2 \times (-1) + b$ gives $b = -1$. The tangent is
       $y = -2x - 1$.
    5. $h = 0.1$: $\dfrac{1.331 - 1}{0.1} = 3.31$. $h = 0.01$: $\dfrac{1.030301 - 1}{0.01} = 3.0301$. The answers
       head to 3. Power rule: $f'(x) = 3x^2$, so $f'(1) = 3$. They agree.
    6. $h'(t) = 20 - 10t$, which is 0 when $t = 2$ s. At the top the ball stops rising for an instant. The height
       then is $h(2) = 40 - 20 = 20$ m.

## Common mistake

**Putting $h = 0$ too early.** In $\dfrac{(x + h)^2 - x^2}{h}$, setting $h = 0$ straight away gives $\dfrac{0}{0}$,
which tells you nothing. First simplify the fraction until the $h$ on the bottom cancels; **then** let $h$ go to 0.
The limit is about where the expression is heading, not about its value at $h = 0$.

## Where it leads

- Next step: [Beyond: areas under curves](05-beyond.md), the second big idea of calculus, and how it is tied to the
  first.
- Back a step: [Build: slopes and rates of change](03-build.md)
- Limits of lists of numbers, and the strange things that happen when something goes on forever, are in
  [Infinity and strange math](../infinity/index.md).
- On the U of T shelf: [MAT137 Prologue: why calculus exists](../../uoft/MAT137/prologue.md),
  [Unit 2: limits and continuity](../../uoft/MAT137/unit02.md),
  [Unit 3: derivatives](../../uoft/MAT137/unit03.md) and
  [Unit 6: applications of derivatives](../../uoft/MAT137/unit06.md).
