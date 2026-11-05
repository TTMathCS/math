---
title: "Shrinking the interval"
---

# Shrinking the interval

*Change and motion · level 6, lesson 2 of 6*

## A question to start

A stone is dropped, and falls $d = 4.9t^2$ metres in $t$ seconds. In the [last lesson](01-instant-speed.md), its average
speeds over shorter and shorter stretches starting at $t = 2$ were 24.5, then 22.05, then 20.09 m/s. They were
heading somewhere.

Where exactly? Will they ever get there? And here is the surprising part: with a little algebra we can find the exact
answer **without** working out a single extra average, and without ever dividing by zero.

## The idea

### A name for the small stretch

Let us call the length of the stretch of time $h$ (any small positive number, like 0.1 or 0.001). The stretch goes from
$t = 2$ to $t = 2 + h$. Then

$$\text{average speed} = \frac{d(2 + h) - d(2)}{h}.$$

Here $d(2 + h)$ means "the distance fallen at time $2 + h$", and $d(2) = 4.9 \times 4 = 19.6$ m.

The word for a stretch of numbers from one value to another is an **interval**. The interval from 2 to 2.1 is written
$[2, 2.1]$.

### Squeezing from both sides

Now make $h$ smaller and smaller. And for good measure, also look **backwards**, at intervals that **end** at 2:
$[2 - h, 2]$.

| $h$ (s) | Average over $[2, 2 + h]$ (m/s) | Average over $[2 - h, 2]$ (m/s) |
| --- | --- | --- |
| 1 | 24.5 | 14.7 |
| 0.5 | 22.05 | 17.15 |
| 0.1 | 20.09 | 19.11 |
| 0.01 | 19.649 | 19.551 |
| 0.001 | 19.6049 | 19.5951 |
| 0.0001 | 19.60049 | 19.59951 |

The averages after 2 are all a bit **more** than 19.6; the averages before 2 are all a bit **less**. The stone is
speeding up, so the later stretch is always faster. As $h$ shrinks, both columns crowd in on the same number from
opposite sides.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 110" role="img" aria-label="A number line from 14 to 25 metres per second. Averages after t equals 2 (24.5, 22.05, 20.09) come in from the right, and averages before t equals 2 (14.7, 17.15, 19.11) come in from the left, both closing in on 19.6.">
  <line x1="30" y1="60" x2="410" y2="60" stroke="currentColor" stroke-width="1.5"/>
  <g stroke="currentColor" stroke-width="1">
    <line x1="30" y1="55" x2="30" y2="65"/><line x1="99.1" y1="55" x2="99.1" y2="65"/><line x1="168.2" y1="55" x2="168.2" y2="65"/><line x1="237.3" y1="55" x2="237.3" y2="65"/><line x1="306.4" y1="55" x2="306.4" y2="65"/><line x1="375.5" y1="55" x2="375.5" y2="65"/>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="30" y="82">14</text><text x="99.1" y="82">16</text><text x="168.2" y="82">18</text><text x="237.3" y="82">20</text><text x="306.4" y="82">22</text><text x="375.5" y="82">24</text>
  </g>
  <g fill="#9cc9ea" stroke="currentColor" stroke-width="1">
    <circle cx="392.7" cy="60" r="6"/><circle cx="308.1" cy="60" r="6"/><circle cx="240.4" cy="60" r="6"/>
  </g>
  <g fill="#7ccf9a" stroke="currentColor" stroke-width="1">
    <circle cx="54.2" cy="60" r="6"/><circle cx="138.8" cy="60" r="6"/><circle cx="206.5" cy="60" r="6"/>
  </g>
  <line x1="223.5" y1="38" x2="223.5" y2="70" stroke="#eea66f" stroke-width="3"/>
  <text x="223.5" y="32" font-size="12" fill="currentColor" text-anchor="middle">19.6</text>
  <g font-size="12" fill="currentColor">
    <text x="300" y="104">after 2: from the right</text><text x="40" y="104">before 2: from the left</text>
  </g>
</svg>
</div>

Do the averages ever **equal** 19.6? Not for any $h$ that is bigger than zero: the "after" averages are always a little
above and the "before" ones a little below. But they get **as close as we like**. Want them within 0.001 of 19.6? Take
$h = 0.0001$. Within a millionth? Take $h$ smaller still. No other number has this property: any other number, say
19.59, is eventually left behind by both columns.

### The algebra: finding the exact answer

Tables suggest the answer; algebra proves it. We need $d(2 + h) = 4.9(2 + h)^2$. What is $(2 + h)^2$? A picture
helps: a square of side $2 + h$ splits into a 2-by-2 square, two strips 2 by $h$, and a tiny $h$-by-$h$ square.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 230 200" role="img" aria-label="A square of side 2 plus h, split into a 2 by 2 square of area 4, two strips of 2 by h each, and a small h by h square">
  <rect x="30" y="40" width="120" height="120" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <rect x="150" y="40" width="30" height="120" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <rect x="30" y="10" width="120" height="30" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <rect x="150" y="10" width="30" height="30" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="90" y="105">2 × 2 = 4</text><text x="90" y="30">2h</text><text x="165" y="105">2h</text><text x="165" y="30">h²</text>
    <text x="90" y="180">2</text><text x="165" y="180">h</text>
  </g>
  <g font-size="13" fill="currentColor"><text x="190" y="105">2</text><text x="190" y="30">h</text></g>
</svg>
</div>

So $(2 + h)^2 = 4 + 2h + 2h + h^2 = 4 + 4h + h^2$. Then

$$d(2 + h) - d(2) = 4.9(4 + 4h + h^2) - 4.9 \times 4 = 4.9(4h + h^2).$$

Divide by $h$. Since $h$ is **not** zero (just small), this is allowed, and each term loses one $h$:

$$\frac{4.9(4h + h^2)}{h} = 4.9(4 + h) = 19.6 + 4.9h.$$

That is a formula for **every** average in the table at once. Check: $h = 0.1$ gives $19.6 + 0.49 = 20.09$. ✓ And
$h = 0.01$ gives $19.6 + 0.049 = 19.649$. ✓

Now the question "where are the averages heading?" is easy. As $h$ shrinks towards 0, the extra bit $4.9h$ shrinks
towards 0 too, so the averages head to exactly **19.6**. (For the "before" column, the same algebra with $-h$ gives
$19.6 - 4.9h$, which heads to the same place.)

**The stone's speed at the instant $t = 2$ is exactly 19.6 m/s.**

### The word "limit"

The number that the averages approach as $h$ gets closer and closer to 0 is called the **limit** of the averages.
Mathematicians write

$$\lim_{h \to 0} \,(19.6 + 4.9h) = 19.6,$$

read "the limit, as $h$ tends to 0, of 19.6 plus 4.9$h$, is 19.6". The arrow $\to$ means "gets closer and closer to".
The key point: we never put $h = 0$ into the fraction $\dfrac{d(2+h) - d(2)}{h}$, which would be $0 \div 0$. We first
simplify it to $19.6 + 4.9h$, a formula with no division by $h$, and only then let $h$ head to 0. Limits are studied
properly in [level 7](../level-7/index.md), and their exact definition (how to make "as close as we like" airtight) is
in [Infinity](../../infinity/index.md).

### Every instant at once

Nothing was special about $t = 2$. At any time $t$, the same algebra (with $t$ in place of 2) gives

$$\frac{4.9(t + h)^2 - 4.9t^2}{h} = \frac{4.9(2th + h^2)}{h} = 9.8t + 4.9h \;\longrightarrow\; 9.8t.$$

So the falling stone's speed at time $t$ is $9.8t$ m/s:

| Time (s) | 0 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- | --- |
| Speed at that instant (m/s) | 0 | 9.8 | 19.6 | 29.4 | 39.2 |

It gains 9.8 m/s every second, exactly the acceleration of gravity from [level 5](../level-5/04-acceleration.md). Two
completely different routes, one by thinking about acceleration and one by shrinking intervals, agree. On Mars, where
$d \approx 1.855t^2$, the same steps give a speed of $3.71t$ m/s.

<figure class="play" data-play="secant"><span class="ai-tag">AI-created</span><figcaption><b>Shrink the gap.</b> Slide h toward 0.</figcaption></figure>

## Worked examples

**1. The stone at 3 s.** Find the exact speed at $t = 3$.

1. $(3 + h)^2 = 9 + 6h + h^2$.
2. $d(3 + h) - d(3) = 4.9(9 + 6h + h^2) - 44.1 = 4.9(6h + h^2)$.
3. Divide by $h$: $4.9(6 + h) = 29.4 + 4.9h$.
4. As $h \to 0$, this tends to **29.4 m/s**. (Check with a table: $h = 0.1$ gives 29.89, $h = 0.01$ gives 29.449.)

**2. A thrown ball.** A ball's height is $H(t) = 20t - 5t^2$ m. Find its upward speed at $t = 1$.

1. $H(1) = 15$. $H(1 + h) = 20 + 20h - 5(1 + 2h + h^2) = 15 + 10h - 5h^2$.
2. Change: $10h - 5h^2$. Divide by $h$: $10 - 5h$.
3. As $h \to 0$: **10 m/s** upwards. (The table: $h = 0.1$ gives 9.5, $h = 0.01$ gives 9.95.)

**3. A growing square.** A square's side $s$ grows. How fast does its area $A = s^2$ grow, per cm of side, at the
moment when $s = 5$ cm?

$\dfrac{(5 + h)^2 - 25}{h} = \dfrac{10h + h^2}{h} = 10 + h \to 10$. The area grows at **10 cm² per cm** of side. The
picture says why: growing a 5 cm square by a thin $h$ adds two strips of $5 \times h$, plus a crumb $h^2$ that hardly
matters.

**4. A cube.** For $f(x) = x^3$, find the rate of change at $x = 2$.

$(2 + h)^3 = 8 + 12h + 6h^2 + h^3$ (multiply $(4 + 4h + h^2)$ by $(2 + h)$). So
$\dfrac{f(2 + h) - f(2)}{h} = 12 + 6h + h^2 \to$ **12**. (Table: $h = 0.1$ gives 12.61, $h = 0.01$ gives 12.0601.)

## Try it

1. Use $19.6 + 4.9h$ to find the average speed of the stone over $[2, 2.2]$, and check it the long way.
2. How small must $h$ be for the average over $[2, 2 + h]$ to be within 0.01 m/s of 19.6?
3. Find the stone's exact speed at $t = 1$ by the algebra method. Does it fit $9.8t$?
4. On Mars, $d = 1.855t^2$. Find the average speed over $[2, 2 + h]$ as a formula, and the speed at $t = 2$.
5. For the ball $H(t) = 20t - 5t^2$, find its upward speed at $t = 3$. What does the sign tell you?
6. For $f(x) = x^2$, find the rate of change at $x = 4$ and at $x = -1$.
7. For $f(x) = 3x + 1$, find $\dfrac{f(2 + h) - f(2)}{h}$. Why does $h$ disappear completely?
8. For $f(x) = x^3$, show that the average rate of change over $[1, 1 + h]$ is $3 + 3h + h^2$, and find the rate at
   $x = 1$.

??? note "Answers"
    1. $19.6 + 4.9 \times 0.2 = 20.58$ m/s. Long way: $d(2.2) = 4.9 \times 4.84 = 23.716$; $(23.716 - 19.6) \div 0.2 = 4.116 \div 0.2 = 20.58$. ✓
    2. Need $4.9h < 0.01$, so $h < 0.01 \div 4.9 \approx 0.00204$ s. Any $h$ smaller than about 0.002 s works.
    3. $\dfrac{4.9(1 + h)^2 - 4.9}{h} = \dfrac{4.9(2h + h^2)}{h} = 9.8 + 4.9h \to 9.8$ m/s. Yes: $9.8 \times 1 = 9.8$.
    4. $\dfrac{1.855(4 + 4h + h^2) - 1.855 \times 4}{h} = 1.855(4 + h) = 7.42 + 1.855h$. The speed at $t = 2$ is
       **7.42 m/s** ($= 3.71 \times 2$).
    5. $H(3) = 60 - 45 = 15$. $H(3 + h) = 60 + 20h - 5(9 + 6h + h^2) = 15 - 10h - 5h^2$. Change ÷ $h$ $= -10 - 5h \to -10$ m/s. Negative: the ball is **coming down** at 10 m/s.
    6. At 4: $\dfrac{(4 + h)^2 - 16}{h} = 8 + h \to 8$. At $-1$: $\dfrac{(-1 + h)^2 - 1}{h} = \dfrac{-2h + h^2}{h} = -2 + h \to -2$.
    7. $\dfrac{3(2 + h) + 1 - 7}{h} = \dfrac{3h}{h} = 3$. A straight line has the same slope everywhere, so every
       average is already exactly 3: there is nothing left to shrink.
    8. $(1 + h)^3 = 1 + 3h + 3h^2 + h^3$, so the change is $3h + 3h^2 + h^3$; divided by $h$: $3 + 3h + h^2$. As
       $h \to 0$ it tends to **3**.

## Common mistake

**Putting $h = 0$ before simplifying.** $\dfrac{4.9(2 + h)^2 - 19.6}{h}$ with $h = 0$ is $\dfrac{0}{0}$, which tells you
nothing. Always simplify first, until no $h$ is left on the bottom; **then** let $h$ head to 0.

**Thinking the averages must reach the limit.** For every real stretch ($h > 0$) the average is not 19.6. The limit is
the number they approach, not a value they land on. That is exactly what makes it a new idea.

**Expanding $(2 + h)^2$ as $4 + h^2$.** The square picture shows two strips of $2h$ that must not be forgotten:
$(2 + h)^2 = 4 + 4h + h^2$.

## Where it leads

- Back: [The problem of instant speed](01-instant-speed.md) · Next: [From secant to tangent](03-secant-tangent.md), the
  same idea as a picture.
- [Level 6 page](index.md) · [Change and motion topic page](../index.md)
- Expanding brackets like $(t + h)^2$: [Algebra](../../algebra/index.md).
- Limits made precise, and the derivative $f'(a)$: [level 7](../level-7/index.md); the airtight definition of a limit is
  in [Infinity](../../infinity/index.md).
- On the U of T shelf: [MAT137 Unit 2: limits and continuity](../../../uoft/MAT137/unit02.md).
