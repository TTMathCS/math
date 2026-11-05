---
title: "Quadratic relations and the parabola"
---

# Quadratic relations and the parabola

*Algebra · level 7, lesson 1 of 7*

## A question to start

A ball is kicked straight up from the ground. Every second someone writes down its height in metres:

| Time $t$ (s) | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Height $h$ (m) | 0 | 25 | 40 | 45 | 40 | 25 | 0 |

Look at the heights. They go up, then come down again **in exactly the same steps, in reverse**. Is that luck? And
here is a harder puzzle: if the ball had been timed only at $t = 1$ and $t = 5$ (both 25 m), could you say when it was
highest, without any other measurement?

You can: halfway, at $t = 3$. This lesson explains why. The rule behind the table is $h = 30t - 5t^2$, and the $t^2$
makes it a new kind of relation, with a curved graph that is perfectly symmetric.

## The idea

### Second differences

In level 6 you met **first differences**: subtract each output from the next one. For a straight line they are all
the same. Here they are not:

| $h$ | 0 | 25 | 40 | 45 | 40 | 25 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| first differences | | 25 | 15 | 5 | −5 | −15 | −25 |
| second differences | | | −10 | −10 | −10 | −10 | −10 |

Take differences **of the differences** and you get the same number every time. A relation whose second differences
are constant (with equal steps in $x$) is called **quadratic**. Quadratic comes from the Latin *quadratus*, square,
because the highest power is a square: $x^2$.

Why do squares give constant second differences? Look at $y = x^2$: the outputs 0, 1, 4, 9, 16, 25 have first
differences 1, 3, 5, 7, 9 (the odd numbers) and second differences all 2. In general

$$(x+1)^2 - x^2 = 2x + 1,$$

so the first differences grow in a straight line, going up by 2 each step. For $y = ax^2 + bx + c$ the same algebra
gives second differences of $2a$ (with steps of 1). In the ball table, $2a = -10$, so $a = -5$. ✓

### The parabola and its parts

The graph of a quadratic relation is a **parabola**: a U-shaped curve, opening up or down.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 370 275" role="img" aria-label="The parabola y = x squared minus 6x plus 5, with zeros at 1 and 5, vertex at (3, −4), y-intercept 5 and the dashed axis of symmetry x = 3">
  <line x1="30" y1="165.2" x2="360" y2="165.2" stroke="currentColor" stroke-width="1"/>
  <text x="358" y="160.2" font-size="11" text-anchor="end" fill="currentColor" font-style="italic">x</text>
  <line x1="85" y1="260" x2="85" y2="10" stroke="currentColor" stroke-width="1"/>
  <text x="90" y="20" font-size="11" fill="currentColor" font-style="italic">y</text>
  <line x1="121.7" y1="162.2" x2="121.7" y2="168.2" stroke="currentColor" stroke-width="1"/>
  <text x="121.7" y="179.2" font-size="10" text-anchor="middle" fill="currentColor">1</text>
  <line x1="195" y1="162.2" x2="195" y2="168.2" stroke="currentColor" stroke-width="1"/>
  <text x="195" y="179.2" font-size="10" text-anchor="middle" fill="currentColor">3</text>
  <line x1="268.3" y1="162.2" x2="268.3" y2="168.2" stroke="currentColor" stroke-width="1"/>
  <text x="268.3" y="179.2" font-size="10" text-anchor="middle" fill="currentColor">5</text>
  <line x1="82" y1="234.1" x2="88" y2="234.1" stroke="currentColor" stroke-width="1"/>
  <text x="80" y="237.6" font-size="10" text-anchor="end" fill="currentColor">−4</text>
  <line x1="82" y1="79" x2="88" y2="79" stroke="currentColor" stroke-width="1"/>
  <text x="80" y="82.5" font-size="10" text-anchor="end" fill="currentColor">5</text>
  <line x1="195" y1="260" x2="195" y2="10" stroke="currentColor" stroke-width="1.2" stroke-dasharray="6 4"/>
  <polyline points="62.8,10 63,10.7 63.7,12.9 64.3,15.1 65,17.3 65.6,19.5 66.3,21.7 67,23.9 67.6,26.1 68.3,28.2 68.9,30.3 69.6,32.5 70.3,34.6 70.9,36.7 71.6,38.8 72.2,40.9 72.9,42.9 73.6,45 74.2,47.1 74.9,49.1 75.5,51.1 76.2,53.1 76.9,55.2 77.5,57.1 78.2,59.1 78.8,61.1 79.5,63.1 80.2,65 80.8,66.9 81.5,68.9 82.1,70.8 82.8,72.7 83.5,74.6 84.1,76.5 84.8,78.3 85.4,80.2 86.1,82.1 86.8,83.9 87.4,85.7 88.1,87.5 88.7,89.3 89.4,91.1 90.1,92.9 90.7,94.7 91.4,96.4 92,98.2 92.7,99.9 93.4,101.7 94,103.4 94.7,105.1 95.3,106.8 96,108.4 96.7,110.1 97.3,111.8 98,113.4 98.6,115.1 99.3,116.7 100,118.3 100.6,119.9 101.3,121.5 101.9,123.1 102.6,124.6 103.3,126.2 103.9,127.8 104.6,129.3 105.2,130.8 105.9,132.3 106.6,133.8 107.2,135.3 107.9,136.8 108.5,138.3 109.2,139.7 109.9,141.2 110.5,142.6 111.2,144 111.8,145.5 112.5,146.9 113.2,148.2 113.8,149.6 114.5,151 115.1,152.4 115.8,153.7 116.5,155 117.1,156.4 117.8,157.7 118.4,159 119.1,160.3 119.8,161.5 120.4,162.8 121.1,164.1 121.7,165.3 122.4,166.5 123.1,167.8 123.7,169 124.4,170.2 125,171.4 125.7,172.6 126.4,173.7 127,174.9 127.7,176 128.3,177.2 129,178.3 129.7,179.4 130.3,180.5 131,181.6 131.6,182.7 132.3,183.7 133,184.8 133.6,185.8 134.3,186.9 134.9,187.9 135.6,188.9 136.3,189.9 136.9,190.9 137.6,191.9 138.2,192.8 138.9,193.8 139.6,194.7 140.2,195.7 140.9,196.6 141.5,197.5 142.2,198.4 142.9,199.3 143.5,200.2 144.2,201 144.8,201.9 145.5,202.7 146.2,203.5 146.8,204.4 147.5,205.2 148.1,206 148.8,206.8 149.5,207.5 150.1,208.3 150.8,209.1 151.4,209.8 152.1,210.5 152.8,211.3 153.4,212 154.1,212.7 154.7,213.4 155.4,214 156.1,214.7 156.7,215.3 157.4,216 158,216.6 158.7,217.2 159.4,217.8 160,218.4 160.7,219 161.3,219.6 162,220.2 162.7,220.7 163.3,221.3 164,221.8 164.6,222.3 165.3,222.8 166,223.3 166.6,223.8 167.3,224.3 167.9,224.7 168.6,225.2 169.3,225.6 169.9,226.1 170.6,226.5 171.2,226.9 171.9,227.3 172.6,227.7 173.2,228.1 173.9,228.4 174.5,228.8 175.2,229.1 175.9,229.4 176.5,229.8 177.2,230.1 177.8,230.4 178.5,230.6 179.2,230.9 179.8,231.2 180.5,231.4 181.1,231.7 181.8,231.9 182.5,232.1 183.1,232.3 183.8,232.5 184.4,232.7 185.1,232.9 185.8,233 186.4,233.2 187.1,233.3 187.7,233.5 188.4,233.6 189.1,233.7 189.7,233.8 190.4,233.9 191,233.9 191.7,234 192.4,234 193,234.1 193.7,234.1 194.3,234.1 195,234.1 195.7,234.1 196.3,234.1 197,234.1 197.6,234 198.3,234 199,233.9 199.6,233.9 200.3,233.8 200.9,233.7 201.6,233.6 202.3,233.5 202.9,233.3 203.6,233.2 204.2,233 204.9,232.9 205.6,232.7 206.2,232.5 206.9,232.3 207.5,232.1 208.2,231.9 208.9,231.7 209.5,231.4 210.2,231.2 210.8,230.9 211.5,230.6 212.2,230.4 212.8,230.1 213.5,229.8 214.1,229.4 214.8,229.1 215.5,228.8 216.1,228.4 216.8,228.1 217.4,227.7 218.1,227.3 218.8,226.9 219.4,226.5 220.1,226.1 220.7,225.6 221.4,225.2 222.1,224.7 222.7,224.3 223.4,223.8 224,223.3 224.7,222.8 225.4,222.3 226,221.8 226.7,221.3 227.3,220.7 228,220.2 228.7,219.6 229.3,219 230,218.4 230.6,217.8 231.3,217.2 232,216.6 232.6,216 233.3,215.3 233.9,214.7 234.6,214 235.3,213.4 235.9,212.7 236.6,212 237.2,211.3 237.9,210.5 238.6,209.8 239.2,209.1 239.9,208.3 240.5,207.5 241.2,206.8 241.9,206 242.5,205.2 243.2,204.4 243.8,203.5 244.5,202.7 245.2,201.9 245.8,201 246.5,200.2 247.1,199.3 247.8,198.4 248.5,197.5 249.1,196.6 249.8,195.7 250.4,194.7 251.1,193.8 251.8,192.8 252.4,191.9 253.1,190.9 253.7,189.9 254.4,188.9 255.1,187.9 255.7,186.9 256.4,185.8 257,184.8 257.7,183.7 258.4,182.7 259,181.6 259.7,180.5 260.3,179.4 261,178.3 261.7,177.2 262.3,176 263,174.9 263.6,173.7 264.3,172.6 265,171.4 265.6,170.2 266.3,169 266.9,167.8 267.6,166.5 268.3,165.3 268.9,164.1 269.6,162.8 270.2,161.5 270.9,160.3 271.6,159 272.2,157.7 272.9,156.4 273.5,155 274.2,153.7 274.9,152.4 275.5,151 276.2,149.6 276.8,148.2 277.5,146.9 278.2,145.5 278.8,144 279.5,142.6 280.1,141.2 280.8,139.7 281.5,138.3 282.1,136.8 282.8,135.3 283.4,133.8 284.1,132.3 284.8,130.8 285.4,129.3 286.1,127.8 286.7,126.2 287.4,124.6 288.1,123.1 288.7,121.5 289.4,119.9 290,118.3 290.7,116.7 291.4,115.1 292,113.4 292.7,111.8 293.3,110.1 294,108.4 294.7,106.8 295.3,105.1 296,103.4 296.6,101.7 297.3,99.9 298,98.2 298.6,96.4 299.3,94.7 299.9,92.9 300.6,91.1 301.3,89.3 301.9,87.5 302.6,85.7 303.2,83.9 303.9,82.1 304.6,80.2 305.2,78.3 305.9,76.5 306.5,74.6 307.2,72.7 307.9,70.8 308.5,68.9 309.2,66.9 309.8,65 310.5,63.1 311.2,61.1 311.8,59.1 312.5,57.1 313.1,55.2 313.8,53.1 314.5,51.1 315.1,49.1 315.8,47.1 316.4,45 317.1,43 317.8,40.9 318.4,38.8 319.1,36.7 319.7,34.6 320.4,32.5 321.1,30.3 321.7,28.2 322.4,26.1 323,23.9 323.7,21.7 324.4,19.5 325,17.3 325.7,15.1 326.3,12.9 327,10.7 327.2,10" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <circle cx="121.7" cy="165.2" r="3.5" fill="currentColor"/>
  <text x="113.7" y="157.2" font-size="11" text-anchor="end" fill="currentColor">zero</text>
  <circle cx="268.3" cy="165.2" r="3.5" fill="currentColor"/>
  <text x="276.3" y="157.2" font-size="11" text-anchor="start" fill="currentColor">zero</text>
  <circle cx="195" cy="234.1" r="3.5" fill="currentColor"/>
  <text x="203" y="248.1" font-size="11" text-anchor="start" fill="currentColor">vertex (3, −4)</text>
  <circle cx="85" cy="79" r="3.5" fill="currentColor"/>
  <text x="93" y="83" font-size="11" text-anchor="start" fill="currentColor">y-intercept</text>
  <text x="201" y="22.1" font-size="11" text-anchor="start" fill="currentColor">axis of symmetry x = 3</text>
</svg>
</div>

The picture shows $y = x^2 - 6x + 5$. Its parts have names:

- The **vertex** is the turning point, here $(3, -4)$. It is the lowest point if the parabola opens up (a
  **minimum**), and the highest point if it opens down (a **maximum**).
- The **axis of symmetry** is the vertical line through the vertex, here $x = 3$. Fold the graph along it and the two
  halves match exactly.
- The **zeros** (also called **roots** or **$x$-intercepts**) are where the curve meets the $x$-axis, where $y = 0$.
  Here $x = 1$ and $x = 5$.
- The **$y$-intercept** is where it meets the $y$-axis, where $x = 0$. Here $y = 5$.

### Three ways to write the same quadratic

The same parabola can be written three ways. Each one shows different features straight away.

| Form | Example | Shows you at a glance |
| --- | --- | --- |
| standard form $y = ax^2 + bx + c$ | $y = x^2 - 6x + 5$ | the $y$-intercept $c$ |
| factored form $y = a(x - r)(x - s)$ | $y = (x - 1)(x - 5)$ | the zeros $r$ and $s$ |
| vertex form $y = a(x - h)^2 + k$ | $y = (x - 3)^2 - 4$ | the vertex $(h, k)$ |

Check that they agree by expanding: $(x - 1)(x - 5) = x^2 - 5x - x + 5 = x^2 - 6x + 5$, and
$(x - 3)^2 - 4 = x^2 - 6x + 9 - 4 = x^2 - 6x + 5$. ✓

In all three forms the number $a$ is the same, and it controls the **shape**:

- $a > 0$: opens up (a smile). $a < 0$: opens down (a frown).
- The bigger $\lvert a \rvert$ (the size of $a$, ignoring its sign), the narrower the parabola. $y = 3x^2$ climbs three
  times as fast as $y = x^2$; $y = \tfrac12 x^2$ is wider.

### Why the vertex form shows the vertex

In $y = (x - 3)^2 - 4$, the square $(x - 3)^2$ can never be negative: it is 0 when $x = 3$ and positive for every
other $x$. So $y$ is never less than $0 - 4 = -4$, and it equals $-4$ exactly when $x = 3$. That is the minimum, so the
vertex is $(3, -4)$. If $a$ were negative, the same argument would give a maximum instead.

### Why the axis of symmetry is halfway between the zeros

Take $y = a(x - r)(x - s)$ and let $m = \dfrac{r + s}{2}$, the midpoint of the zeros, and $d = \dfrac{s - r}{2}$, half
the gap between them. Then $r = m - d$ and $s = m + d$. Now go a distance $t$ to either side of $m$:

$$y(m + t) = a(m + t - r)(m + t - s) = a(t + d)(t - d) = a(t^2 - d^2).$$

Going the other way, $t$ becomes $-t$, and $a((-t)^2 - d^2) = a(t^2 - d^2)$: the same. So points equally far left and
right of $m$ always have the same height. That is exactly what symmetry about $x = m$ means. And the vertex, being
on the axis, is at $x = m$, with height $a(0 - d^2) = -ad^2$.

This is why the ball was highest at $t = 3$: it was at the same height (25 m) at $t = 1$ and $t = 5$, and the axis is
halfway between **any** two points at equal height, not only the zeros. (The same argument works with
$y - 25$ in place of $y$.)

### Finding the equation from a graph

If you know the zeros and one other point, the factored form gives the equation quickly: write
$y = a(x - r)(x - s)$, put in the point, and solve for $a$. If you know the vertex and one other point, use the vertex
form the same way.

<figure class="play" data-play="graph" data-form="quad"><span class="ai-tag">AI-created</span><figcaption><b>A parabola.</b> Change a, b and c; the discriminant says how many times it crosses the x-axis.</figcaption></figure>

## Worked examples

**1. From factored form.** Describe $y = 2(x - 1)(x - 5)$.

- Zeros: $x = 1$ and $x = 5$ (each bracket is 0 there).
- Axis of symmetry: halfway, $x = \dfrac{1 + 5}{2} = 3$.
- Vertex: $y = 2(3 - 1)(3 - 5) = 2(2)(-2) = -8$, so $(3, -8)$. $a = 2 > 0$, so this is a minimum.
- $y$-intercept: $y = 2(-1)(-5) = 10$.
- Standard form: $2(x^2 - 6x + 5) = 2x^2 - 12x + 10$. The constant is 10, matching the $y$-intercept. ✓

**2. From vertex form.** Describe $y = -(x + 2)^2 + 9$.

- Careful with the sign: $x + 2 = x - (-2)$, so $h = -2$. Vertex $(-2, 9)$, axis $x = -2$.
- $a = -1 < 0$: opens down, so 9 is the **maximum**.
- Zeros: set $y = 0$, so $(x + 2)^2 = 9$, so $x + 2 = 3$ or $x + 2 = -3$, giving $x = 1$ or $x = -5$. (Halfway is
  $-2$, the axis. ✓)
- $y$-intercept: $-(2)^2 + 9 = 5$.
- Factored form: $y = -(x - 1)(x + 5)$. Standard form: $-(x^2 + 4x - 5) = -x^2 - 4x + 5$.

**3. Equation from the zeros and a point.** A parabola has zeros $-1$ and $3$ and passes through $(1, -8)$.

- $y = a(x + 1)(x - 3)$.
- Put in $(1, -8)$: $-8 = a(2)(-2) = -4a$, so $a = 2$.
- $y = 2(x + 1)(x - 3) = 2x^2 - 4x - 6$. The axis is $x = 1$, so $(1, -8)$ was actually the vertex.

**4. A bridge arch.** A parabolic arch is 40 m wide at the ground and 10 m high in the middle. How high is it 5 m in
from one end?

- Put the left foot at $(0, 0)$ and the right foot at $(40, 0)$. Then $y = a\,x(x - 40)$, and the vertex is at
  $x = 20$, height 10.
- $10 = a(20)(-20) = -400a$, so $a = -\dfrac{1}{40}$.
- At $x = 5$: $y = -\dfrac{1}{40}(5)(-35) = \dfrac{175}{40} = 4.375$ m.

**5. The ball, on two planets.** On Earth the ball's height was $h = 30t - 5t^2 = -5t(t - 6)$: zeros at 0 and 6 s,
so the top is at $t = 3$, where $h = 45$ m. The $5$ is half of Earth's gravity, about 10 m per second squared,
rounded. Mars's gravity is about 3.7 m per second squared, so the same kick there gives $h = 30t - 1.85t^2 =
-1.85t\left(t - \tfrac{30}{1.85}\right)$. The zeros are 0 and about 16.2 s, the axis is at about 8.1 s, and the top is
about $30(8.1) - 1.85(8.1)^2 \approx 122$ m. Smaller $\lvert a \rvert$, wider parabola: the same shape, stretched.

## Try it

1. For $y = (x - 4)(x + 2)$, find the zeros, the axis of symmetry and the vertex.
2. For $y = 3(x - 2)^2 - 12$, find the vertex, say whether it is a maximum or a minimum, and find the zeros and the
   $y$-intercept.
3. Write $y = -2(x + 1)(x - 3)$ in standard form.
4. A relation has the table $x$: 0, 1, 2, 3, 4 and $y$: 3, 0, −1, 0, 3. Show it is quadratic using second
   differences, then find its equation.
5. A parabola has zeros 0 and 6 and a maximum height of 18. Find its equation.
6. Which form would you choose to find quickly (a) the highest point of a thrown ball, (b) when it lands, (c) the
   height it was thrown from? Why?
7. Does $y = x^2 + 4$ have any zeros? Can it be written in factored form with real numbers?
8. For $y = x^2 - 6x + 5$, show that $y(3 + t) = y(3 - t)$ for every number $t$. What does this prove?

??? note "Answers"
    1. Zeros $x = 4$ and $x = -2$. Axis $x = \dfrac{4 + (-2)}{2} = 1$. Vertex: $y = (1 - 4)(1 + 2) = (-3)(3) = -9$,
       so $(1, -9)$.
    2. Vertex $(2, -12)$; $a = 3 > 0$, so it is a minimum. Zeros: $3(x - 2)^2 = 12$, so $(x - 2)^2 = 4$, so
       $x = 0$ or $x = 4$. $y$-intercept: $3(-2)^2 - 12 = 0$, so the parabola passes through the origin (which is
       also a zero, as it should be).
    3. $(x + 1)(x - 3) = x^2 - 2x - 3$, so $y = -2x^2 + 4x + 6$.
    4. First differences: $-3, -1, 1, 3$. Second differences: $2, 2, 2$, constant, so it is quadratic, with
       $2a = 2$, so $a = 1$. The zeros are 1 and 3 (where $y = 0$), so $y = (x - 1)(x - 3) = x^2 - 4x + 3$. Check
       $x = 0$: $y = 3$. ✓
    5. $y = a\,x(x - 6)$. The vertex is at $x = 3$: $18 = a(3)(-3) = -9a$, so $a = -2$. So $y = -2x(x - 6)$, or
       $y = -2x^2 + 12x$.
    6. (a) Vertex form: the vertex $(h, k)$ gives the time and the greatest height. (b) Factored form: the zeros are
       the times when the height is 0. (c) Standard form: $c$ is the height at time 0.
    7. No zeros: $x^2 \ge 0$, so $x^2 + 4 \ge 4$, never 0. The vertex is $(0, 4)$ and the parabola opens up, so it
       never reaches the $x$-axis. It cannot be factored as $(x - r)(x - s)$ with real $r$ and $s$, because then $r$
       would be a zero. (With complex numbers it can: see the related topics below.)
    8. $y(3 + t) = (3 + t)^2 - 6(3 + t) + 5 = 9 + 6t + t^2 - 18 - 6t + 5 = t^2 - 4$. Replacing $t$ by $-t$ gives
       $(-t)^2 - 4 = t^2 - 4$, the same. So the graph is symmetric about $x = 3$, and the vertex is $(3, -4)$.

## Common mistake

**Reading the sign of $h$ wrongly in vertex form.** In $y = (x + 2)^2 + 9$ the vertex is at $x = -2$, not $x = 2$. The
form is $a(x - h)^2 + k$ with a **minus**, so $x + 2$ means $h = -2$. Check by asking "what makes the bracket zero?"

**Forgetting $a$ when writing the factored form.** The zeros 1 and 5 belong to $y = (x - 1)(x - 5)$, but also to
$y = 2(x - 1)(x - 5)$ and $y = -7(x - 1)(x - 5)$. You need one more point to find $a$.

## Where it leads

- Back: [Level 6: systems and polynomials](../level-6/index.md), where you learned to expand and factor · Next:
  [Completing the square](02-completing-the-square.md), which turns any standard form into vertex form.
- [Level 7 page](index.md) · [Algebra topic page](../index.md)
- The flight of a ball, and why gravity makes parabolas: [Change](../../change/index.md). The constant second
  differences are the same idea as sequences with a quadratic rule in [Patterns](../../patterns/index.md).
- A parabola is also a geometric curve: every point on it is the same distance from a point (the focus) and a line.
  More shapes from equations: [Equations of circles](../../geometry/level-7/07-circle-equations.md).
- When there are no real zeros, the complex numbers still find two: [Every quadratic has
  roots](../../numbers/level-7/05-every-quadratic.md).
- Throwing things in physics: [PHY131 Unit 2 (kinematics in one dimension)](../../../uoft/PHY131H1/unit02.md).
