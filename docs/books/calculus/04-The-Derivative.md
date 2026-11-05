# 4. The derivative

*Chapter 1 found the speed of a falling stone at one instant by taking averages over shrinking intervals. Chapter 2
made "shrinking" precise. Now we put the two together and give the result its name: the derivative. In this chapter
you will define the derivative at a point and as a function, draw tangent lines, see why a function with a derivative
cannot jump but a function without jumps can still fail to have a derivative, and prove the rules (sum, product,
quotient, power) that let you differentiate any polynomial or rational function in a line, with no limits in
sight.*

!!! abstract "In this chapter"
    **You will learn:**

    - the definition of the derivative as a limit of difference quotients, and the tangent line it gives
    - the derivative as a new function, its notations, and higher derivatives such as acceleration
    - that differentiable functions are continuous (with proof), and the ways differentiability can fail: corners, vertical tangents, oscillation
    - the sum, constant multiple, product and quotient rules, with proofs
    - the power rule for whole-number, negative and rational exponents, with proofs

    **You need:** [Chapter 1](01-Rates-and-Areas.md) (rates as limits of averages), [Chapter 2](02-Limits.md) (limits
    and the limit laws) and [Chapter 3](03-Continuity.md) (continuity, and in 4.5 the continuity of roots). Gentler
    versions on the Topics shelf: [From secant to tangent](../../topics/change/level-6/03-secant-tangent.md),
    [The derivative from first principles](../../topics/change/level-7/03-first-principles.md),
    [The power rule](../../topics/change/level-7/04-power-rule.md),
    [The derivative as a function](../../topics/change/level-7/05-derivative-function.md),
    [Velocity and acceleration](../../topics/change/level-7/06-velocity-acceleration.md) and
    [The product, quotient and chain rules](../../topics/change/level-8/01-product-quotient-chain.md).

    **Levels:** 4.1 and 4.2 are intermediate; 4.3 is intermediate with an advanced ending; 4.4 is intermediate;
    4.5 is intermediate to advanced.

## 4.1 Definition and tangent lines

### The question

A curve is not a straight line, so it does not have one slope. But zoom in on a smooth curve near a point and it looks
more and more like a straight line. What is the slope of *that* line? This is the tangent question from Chapter 1, and
it is the same question as "what is the speed at an instant?" when the curve is a distance-time graph.

The method is the one we used for the stone. To find the slope of the graph of $f$ at the point $(a, f(a))$, take a
second point $(a + h, f(a + h))$ on the graph, with $h \ne 0$. The straight line through the two points, the
**secant**, has slope

$$
\frac{f(a + h) - f(a)}{h},
$$

the change in output divided by the change in input. This fraction is called a **difference quotient**. Now let $h$
shrink to 0.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 240" role="img" aria-label="The parabola y equals x squared with the point (1, 1). Three secant lines join (1, 1) to points further along the curve, for h equal to 1.5, 1 and 0.5, in orange, green and blue; as h shrinks they swing towards the dashed tangent line of slope 2">
  <line x1="114.8" y1="237.5" x2="322.7" y2="19.2" stroke="#eea66f" stroke-width="1.6"/>
  <circle cx="310.0" cy="32.5" r="3.5" fill="#eea66f" stroke="currentColor"/>
  <text x="317.0" y="36.5" font-size="10" text-anchor="start" fill="currentColor">h = 1.5</text>
  <line x1="107.3" y1="237.4" x2="340.0" y2="28.0" stroke="#7ccf9a" stroke-width="1.6"/>
  <circle cx="260.0" cy="100.0" r="3.5" fill="#7ccf9a" stroke="currentColor"/>
  <text x="267.0" y="104.0" font-size="10" text-anchor="start" fill="currentColor">h = 1.0</text>
  <line x1="96.6" y1="237.5" x2="340.0" y2="55.0" stroke="#9cc9ea" stroke-width="1.6"/>
  <circle cx="210.0" cy="152.5" r="3.5" fill="#9cc9ea" stroke="currentColor"/>
  <text x="217.0" y="156.5" font-size="10" text-anchor="start" fill="currentColor">h = 0.5</text>
  <line x1="80.1" y1="237.9" x2="340.0" y2="82.0" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 4"/>
  <polyline points="5.0,210.9 7.1,211.6 9.1,212.2 11.2,212.9 13.3,213.4 15.3,214.0 17.4,214.6 19.5,215.1 21.5,215.6 23.6,216.0 25.7,216.5 27.7,216.9 29.8,217.3 31.9,217.6 33.9,218.0 36.0,218.3 38.1,218.6 40.1,218.8 42.2,219.0 44.3,219.3 46.3,219.4 48.4,219.6 50.5,219.7 52.5,219.8 54.6,219.9 56.7,220.0 58.7,220.0 60.8,220.0 62.9,220.0 64.9,219.9 67.0,219.9 69.1,219.8 71.1,219.6 73.2,219.5 75.3,219.3 77.3,219.1 79.4,218.9 81.5,218.6 83.5,218.3 85.6,218.0 87.7,217.7 89.7,217.3 91.8,217.0 93.9,216.6 95.9,216.1 98.0,215.7 100.1,215.2 102.1,214.7 104.2,214.1 106.3,213.6 108.3,213.0 110.4,212.4 112.5,211.7 114.5,211.1 116.6,210.4 118.7,209.7 120.7,208.9 122.8,208.2 124.9,207.4 126.9,206.6 129.0,205.7 131.1,204.8 133.1,204.0 135.2,203.0 137.3,202.1 139.3,201.1 141.4,200.1 143.5,199.1 145.5,198.1 147.6,197.0 149.7,195.9 151.7,194.8 153.8,193.6 155.9,192.4 157.9,191.2 160.0,190.0 162.1,188.7 164.1,187.5 166.2,186.2 168.3,184.8 170.3,183.5 172.4,182.1 174.5,180.7 176.5,179.3 178.6,177.8 180.7,176.3 182.7,174.8 184.8,173.3 186.9,171.7 188.9,170.1 191.0,168.5 193.1,166.9 195.1,165.2 197.2,163.5 199.3,161.8 201.3,160.1 203.4,158.3 205.5,156.5 207.5,154.7 209.6,152.9 211.7,151.0 213.7,149.1 215.8,147.2 217.9,145.2 219.9,143.3 222.0,141.3 224.1,139.2 226.1,137.2 228.2,135.1 230.3,133.0 232.3,130.9 234.4,128.8 236.5,126.6 238.5,124.4 240.6,122.2 242.7,119.9 244.7,117.6 246.8,115.3 248.9,113.0 250.9,110.6 253.0,108.3 255.1,105.8 257.1,103.4 259.2,101.0 261.3,98.5 263.3,96.0 265.4,93.4 267.5,90.9 269.5,88.3 271.6,85.7 273.7,83.0 275.7,80.4 277.8,77.7 279.9,75.0 281.9,72.2 284.0,69.5 286.1,66.7 288.1,63.9 290.2,61.0 292.3,58.2 294.3,55.3 296.4,52.3 298.5,49.4 300.5,46.4 302.6,43.4 304.7,40.4 306.7,37.4 308.8,34.3 310.9,31.2 312.9,28.1 315.0,24.9" fill="none" stroke="currentColor" stroke-width="2.2"/>
  <line x1="20.0" y1="220.0" x2="345.0" y2="220.0" stroke="currentColor" stroke-width="1.2"/>
  <line x1="60.0" y1="232.0" x2="60.0" y2="12.0" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="160.0" cy="190.0" r="4" fill="currentColor"/>
  <text x="168.0" y="204.0" font-size="11" text-anchor="start" fill="currentColor">(1, 1)</text>
  <line x1="160.0" y1="217.0" x2="160.0" y2="223.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="160.0" y="235.0" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <line x1="260.0" y1="217.0" x2="260.0" y2="223.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="260.0" y="235.0" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <text x="340.0" y="150.0" font-size="10" text-anchor="end" fill="currentColor">tangent, slope 2</text>
</svg>
</div>

> **Definition.** The **derivative** of $f$ at $a$ is
>
> $f'(a) = \lim_{h \to 0} \dfrac{f(a + h) - f(a)}{h}$,
>
> if this limit exists (as a finite number). Then $f$ is said to be **differentiable at $a$**.

$f'(a)$ is read "f prime of a". Putting $x = a + h$ gives an equivalent form that is sometimes handier:

$$
f'(a) = \lim_{x \to a} \frac{f(x) - f(a)}{x - a}.
$$

The **tangent line** to the graph at $(a, f(a))$ is the line through that point with slope $f'(a)$:

$$
y = f(a) + f'(a)(x - a).
$$

### Worked examples from the definition

**Example 1.** $f(x) = x^2$ at $a = 3$.

$$
\frac{(3 + h)^2 - 9}{h} = \frac{6h + h^2}{h} = 6 + h \to 6 .
$$

So $f'(3) = 6$. The tangent line at $(3, 9)$ is $y = 9 + 6(x - 3)$, that is, $y = 6x - 9$. **Check:** the line meets
the parabola where $x^2 = 6x - 9$, i.e. $(x - 3)^2 = 0$: only at $x = 3$, a double root. That is what touching looks
like algebraically.

**Example 2.** $f(x) = \frac1x$ at $a = 2$.

$$
\frac{\frac1{2 + h} - \frac12}{h} = \frac{2 - (2 + h)}{2h(2 + h)} = \frac{-1}{2(2 + h)} \to -\frac14 .
$$

The tangent line at $(2, \frac12)$ is $y = \frac12 - \frac14(x - 2) = 1 - \frac x4$. The slope is negative because $\frac1x$
is falling. **Check:** $f(2.01) - f(2) \approx -0.0024876$, and $-\frac14 \times 0.01 = -0.0025$.

**Example 3.** $f(x) = \sqrt x$ at $a = 4$. Use the conjugate:

$$
\frac{\sqrt{4 + h} - 2}{h} = \frac{(4 + h) - 4}{h(\sqrt{4 + h} + 2)} = \frac{1}{\sqrt{4 + h} + 2} \to \frac14 .
$$

The tangent line at $(4, 2)$ is $y = 2 + \frac14(x - 4) = \frac x4 + 1$. This gives a quick estimate:
$\sqrt{4.1} \approx \frac{4.1}4 + 1 = 2.025$. The true value is $2.02485\ldots$ (Chapter 7 makes this kind of
**linear approximation** systematic.)

**Example 4 (falling on Mars).** A stone dropped on Mars has fallen $s(t) = 1.855\,t^2$ metres after $t$ seconds. Its
velocity at time $a$ is

$$
s'(a) = \lim_{h \to 0} \frac{1.855\big((a + h)^2 - a^2\big)}{h} = \lim_{h \to 0} 1.855(2a + h) = 3.71a \text{ m/s}.
$$

Units matter: a derivative has the units of the output divided by the units of the input. Distance in metres over
time in seconds gives metres per second.

### What the derivative means

The derivative is the **instantaneous rate of change** of $f$ at $a$: how fast the output is changing compared with
the input, at that moment. Some readings:

- position $s(t)$: $s'(t)$ is **velocity**;
- volume of water in a tank $V(t)$: $V'(t)$ is the flow rate in litres per minute;
- cost $C(q)$ of making $q$ items: $C'(q)$ is the **marginal cost**, roughly the cost of one more item;
- a population $P(t)$: $P'(t)$ is the growth rate in individuals per year.

And geometrically, it is the slope of the tangent. Near $a$,

$$
f(a + h) \approx f(a) + f'(a)\,h ,
$$

with an error that is small *even compared with $h$*: the error divided by $h$ is
$\frac{f(a+h) - f(a)}{h} - f'(a)$, which tends to 0. This is the precise sense in which "the curve looks like its tangent
line when you zoom in".

### What a tangent is not

At school a tangent to a circle is "a line that touches the circle at one point". That description fails for other
curves, which is why we define tangents by slopes.

- The tangent to $y = x^3$ at the origin is $y = 0$ (the slope there is $\lim_{h \to 0} \frac{h^3}{h} = 0$). It crosses the
  curve, from below to above, at the point of tangency.
- The tangent to $y = x^3 - 3x$ at $(1, -2)$ is horizontal: $y = -2$. It meets the curve again at $x = -2$, since
  $(-2)^3 - 3(-2) = -2$.
- The tangent to a straight line is the line itself, which meets it everywhere.

The right description is the zoom one: the tangent is the line that the curve resembles most closely near the point.

<figure class="play" data-play="secant"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> From secant to tangent on y = x²: slide h towards 0 and the slope 2 + h becomes 2.</figcaption></figure>

## 4.2 The derivative as a function

### A new function from an old one

Example 1 found $f'(3) = 6$ for $f(x) = x^2$. Doing it at every point at once:

$$
\frac{(x + h)^2 - x^2}{h} = 2x + h \to 2x .
$$

So $f'(x) = 2x$ for every $x$. The derivative is not just a number at one point; letting the point vary gives a new
function $f'$, **the derivative of $f$**, whose value at each $x$ is the slope of $f$ there. Its domain is the set of
points where $f$ is differentiable.

**Worked examples.** From the definition:

- $f(x) = x^3$: $\frac{(x + h)^3 - x^3}{h} = 3x^2 + 3xh + h^2 \to 3x^2$, so $f'(x) = 3x^2$.
- $f(x) = \frac1x$ ($x \ne 0$): $\frac{\frac1{x + h} - \frac1x}{h} = \frac{-1}{x(x + h)} \to -\frac1{x^2}$, so
  $f'(x) = -\frac1{x^2}$.
- $f(x) = \sqrt x$ ($x > 0$): the conjugate gives $\frac1{\sqrt{x + h} + \sqrt x} \to \frac1{2\sqrt x}$, so
  $f'(x) = \frac1{2\sqrt x}$. The function is defined at 0 but the derivative is not: at $x = 0$ the difference
  quotient is $\frac{\sqrt h}{h} = \frac1{\sqrt h} \to \infty$. The graph has a vertical tangent there.
- $f(x) = mx + c$ (a line): the difference quotient is $m$ for every $h$, so $f'(x) = m$. A line's slope is its slope
  everywhere. In particular a constant function has derivative 0.

Look at the pattern in $x^2 \to 2x$, $x^3 \to 3x^2$, $x^{-1} \to -x^{-2}$, $x^{1/2} \to \frac12 x^{-1/2}$. It is the
**power rule** $x^n \to n x^{n-1}$, which section 4.5 proves.

### Notation

Several notations are in use, each convenient for something.

| notation | read | who and why |
|---|---|---|
| $f'(x)$ | "f prime of x" | Lagrange (1797); short, good for naming functions |
| $\dfrac{dy}{dx}$, $\dfrac{df}{dx}$ | "d y by d x" | Leibniz (1670s); recalls $\frac{\Delta y}{\Delta x}$, the ratio of small changes |
| $\dfrac{d}{dx} f(x)$ | "d by d x of f of x" | Leibniz's notation used as an operation on a formula |
| $\dot y$ | "y dot" | Newton; used in physics for derivatives with respect to time |
| $Df$ | "D f" | the derivative as an operator that turns functions into functions |

So "$\frac{d}{dx} x^3 = 3x^2$", "if $y = x^3$ then $\frac{dy}{dx} = 3x^2$" and "if $f(x) = x^3$ then $f'(x) = 3x^2$" all say the
same thing. To evaluate a Leibniz derivative at a point, write $\left.\frac{dy}{dx}\right|_{x = 2} = 12$.

Leibniz's $\frac{dy}{dx}$ is not a fraction (it is the limit of the fraction $\frac{\Delta y}{\Delta x}$, where $\Delta$, capital
delta, means "change in"). But it often behaves like one, which is why it survives: Chapter 5's chain rule looks like
$\frac{dy}{dx} = \frac{dy}{du}\frac{du}{dx}$.

### Reading a derivative from a graph

Since $f'(x)$ is the slope of $f$ at $x$, you can sketch $f'$ from a picture of $f$:

- where $f$ is rising, $f' > 0$; where $f$ is falling, $f' < 0$;
- at a smooth peak or valley, the tangent is horizontal, so $f' = 0$;
- where $f$ is steep, $|f'|$ is large.

(The first two statements are made rigorous by the mean value theorem in Chapter 6. Here they are guided by the
picture.)

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 245" role="img" aria-label="The cubic f of x equals x cubed minus 3x in orange, with a peak at x equals minus 1 and a valley at x equals 1, and its derivative 3x squared minus 3 in blue, a parabola that is zero exactly at x equals minus 1 and 1, positive outside and negative between">
  <polyline points="30.5,219.8 32.0,214.5 33.5,209.4 35.0,204.4 36.5,199.5 38.0,194.8 39.5,190.2 41.0,185.7 42.5,181.3 44.0,177.0 45.5,172.9 46.9,168.9 48.4,165.0 49.9,161.2 51.4,157.5 52.9,153.9 54.4,150.5 55.9,147.1 57.4,143.9 58.9,140.8 60.4,137.8 61.9,134.9 63.4,132.1 64.9,129.3 66.4,126.7 67.9,124.2 69.4,121.8 70.9,119.5 72.4,117.3 73.9,115.2 75.4,113.2 76.8,111.2 78.3,109.4 79.8,107.7 81.3,106.0 82.8,104.4 84.3,102.9 85.8,101.5 87.3,100.2 88.8,98.9 90.3,97.8 91.8,96.7 93.3,95.7 94.8,94.8 96.3,93.9 97.8,93.1 99.3,92.4 100.8,91.8 102.3,91.2 103.8,90.7 105.2,90.3 106.7,89.9 108.2,89.6 109.7,89.4 111.2,89.2 112.7,89.1 114.2,89.0 115.7,89.0 117.2,89.1 118.7,89.2 120.2,89.3 121.7,89.6 123.2,89.8 124.7,90.1 126.2,90.5 127.7,90.9 129.2,91.4 130.7,91.9 132.2,92.4 133.7,93.0 135.2,93.7 136.6,94.3 138.1,95.0 139.6,95.8 141.1,96.6 142.6,97.4 144.1,98.2 145.6,99.1 147.1,100.0 148.6,100.9 150.1,101.9 151.6,102.9 153.1,103.9 154.6,105.0 156.1,106.0 157.6,107.1 159.1,108.2 160.6,109.3 162.1,110.5 163.6,111.6 165.1,112.8 166.5,114.0 168.0,115.2 169.5,116.4 171.0,117.6 172.5,118.8 174.0,120.0 175.5,121.3 177.0,122.5 178.5,123.8 180.0,125.0 181.5,126.2 183.0,127.5 184.5,128.7 186.0,130.0 187.5,131.2 189.0,132.4 190.5,133.6 192.0,134.8 193.5,136.0 194.9,137.2 196.4,138.4 197.9,139.5 199.4,140.7 200.9,141.8 202.4,142.9 203.9,144.0 205.4,145.0 206.9,146.1 208.4,147.1 209.9,148.1 211.4,149.1 212.9,150.0 214.4,150.9 215.9,151.8 217.4,152.6 218.9,153.4 220.4,154.2 221.9,155.0 223.4,155.7 224.9,156.3 226.3,157.0 227.8,157.6 229.3,158.1 230.8,158.6 232.3,159.1 233.8,159.5 235.3,159.9 236.8,160.2 238.3,160.4 239.8,160.7 241.3,160.8 242.8,160.9 244.3,161.0 245.8,161.0 247.3,160.9 248.8,160.8 250.3,160.6 251.8,160.4 253.3,160.1 254.8,159.7 256.2,159.3 257.7,158.8 259.2,158.2 260.7,157.6 262.2,156.9 263.7,156.1 265.2,155.2 266.7,154.3 268.2,153.3 269.7,152.2 271.2,151.1 272.7,149.8 274.2,148.5 275.7,147.1 277.2,145.6 278.7,144.0 280.2,142.3 281.7,140.6 283.2,138.8 284.6,136.8 286.1,134.8 287.6,132.7 289.1,130.5 290.6,128.2 292.1,125.8 293.6,123.3 295.1,120.7 296.6,117.9 298.1,115.1 299.6,112.2 301.1,109.2 302.6,106.1 304.1,102.9 305.6,99.5 307.1,96.1 308.6,92.5 310.1,88.8 311.6,85.0 313.1,81.1 314.5,77.1 316.0,73.0 317.5,68.7 319.0,64.3 320.5,59.8 322.0,55.2 323.5,50.5 325.0,45.6 326.5,40.6 328.0,35.5 329.5,30.2" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <polyline points="66.4,14.0 67.9,18.3 69.4,22.6 70.9,26.8 72.4,30.9 73.9,35.0 75.4,39.0 76.8,43.0 78.3,46.9 79.8,50.8 81.3,54.6 82.8,58.3 84.3,62.0 85.8,65.6 87.3,69.2 88.8,72.7 90.3,76.2 91.8,79.6 93.3,82.9 94.8,86.2 96.3,89.4 97.8,92.6 99.3,95.7 100.8,98.8 102.3,101.8 103.8,104.7 105.2,107.6 106.7,110.4 108.2,113.2 109.7,115.9 111.2,118.6 112.7,121.2 114.2,123.7 115.7,126.2 117.2,128.6 118.7,131.0 120.2,133.3 121.7,135.6 123.2,137.8 124.7,139.9 126.2,142.0 127.7,144.0 129.2,146.0 130.7,147.9 132.2,149.7 133.7,151.5 135.2,153.3 136.6,155.0 138.1,156.6 139.6,158.2 141.1,159.7 142.6,161.1 144.1,162.5 145.6,163.9 147.1,165.2 148.6,166.4 150.1,167.6 151.6,168.7 153.1,169.7 154.6,170.7 156.1,171.7 157.6,172.6 159.1,173.4 160.6,174.2 162.1,174.9 163.6,175.5 165.1,176.1 166.5,176.7 168.0,177.2 169.5,177.6 171.0,178.0 172.5,178.3 174.0,178.5 175.5,178.7 177.0,178.9 178.5,179.0 180.0,179.0 181.5,179.0 183.0,178.9 184.5,178.7 186.0,178.5 187.5,178.3 189.0,178.0 190.5,177.6 192.0,177.2 193.5,176.7 194.9,176.1 196.4,175.5 197.9,174.9 199.4,174.2 200.9,173.4 202.4,172.6 203.9,171.7 205.4,170.7 206.9,169.7 208.4,168.7 209.9,167.6 211.4,166.4 212.9,165.2 214.4,163.9 215.9,162.5 217.4,161.1 218.9,159.7 220.4,158.2 221.9,156.6 223.4,155.0 224.9,153.3 226.3,151.5 227.8,149.7 229.3,147.9 230.8,146.0 232.3,144.0 233.8,142.0 235.3,139.9 236.8,137.8 238.3,135.6 239.8,133.3 241.3,131.0 242.8,128.6 244.3,126.2 245.8,123.7 247.3,121.2 248.8,118.6 250.3,115.9 251.8,113.2 253.3,110.4 254.8,107.6 256.2,104.7 257.7,101.8 259.2,98.8 260.7,95.7 262.2,92.6 263.7,89.4 265.2,86.2 266.7,82.9 268.2,79.6 269.7,76.2 271.2,72.7 272.7,69.2 274.2,65.6 275.7,62.0 277.2,58.3 278.7,54.6 280.2,50.8 281.7,46.9 283.2,43.0 284.6,39.0 286.1,35.0 287.6,30.9 289.1,26.8 290.6,22.6 292.1,18.3 293.6,14.0" fill="none" stroke="#9cc9ea" stroke-width="2.5"/>
  <line x1="20.0" y1="125.0" x2="345.0" y2="125.0" stroke="currentColor" stroke-width="1.2"/>
  <line x1="180.0" y1="240.0" x2="180.0" y2="8.0" stroke="currentColor" stroke-width="1.2"/>
  <line x1="50.0" y1="122.0" x2="50.0" y2="128.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="50.0" y="140.0" font-size="11" text-anchor="middle" fill="currentColor">−2</text>
  <line x1="115.0" y1="122.0" x2="115.0" y2="128.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="115.0" y="140.0" font-size="11" text-anchor="middle" fill="currentColor">−1</text>
  <line x1="245.0" y1="122.0" x2="245.0" y2="128.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="245.0" y="140.0" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <line x1="310.0" y1="122.0" x2="310.0" y2="128.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="310.0" y="140.0" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <line x1="115.0" y1="89.0" x2="115.0" y2="125.0" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="245.0" y1="161.0" x2="245.0" y2="125.0" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="115.0" cy="89.0" r="3.5" fill="#eea66f" stroke="currentColor"/>
  <circle cx="245.0" cy="161.0" r="3.5" fill="#eea66f" stroke="currentColor"/>
  <text x="192.0" y="26.0" font-size="11" text-anchor="start" fill="currentColor">f′(x) = 3x² − 3</text>
  <text x="345.0" y="228.0" font-size="11" text-anchor="end" fill="currentColor">f(x) = x³ − 3x</text>
</svg>
</div>

**Worked example.** $f(x) = x^3 - 3x$. Using the derivatives above (and the sum rule of 4.4), $f'(x) = 3x^2 - 3 =
3(x - 1)(x + 1)$. Its sign:

| $x$ | $x < -1$ | $-1$ | $-1 < x < 1$ | $1$ | $x > 1$ |
|---|---|---|---|---|---|
| $f'(x)$ | $+$ | 0 | $-$ | 0 | $+$ |
| $f$ | rising | peak, $f = 2$ | falling | valley, $f = -2$ | rising |

The picture shows exactly this: the orange cubic rises to a peak at $(-1, 2)$, falls to a valley at $(1, -2)$, then
rises; the blue parabola $f'$ is positive, zero, negative, zero, positive in step.

### Higher derivatives

The derivative of $f'$ is the **second derivative** $f''$, also written $\frac{d^2y}{dx^2}$; then $f'''$, and
$f^{(n)}$ for the $n$th. For motion, the derivative of velocity is **acceleration**:

$$
s(t) = 1.855\,t^2, \qquad v(t) = s'(t) = 3.71\,t, \qquad a(t) = v'(t) = s''(t) = 3.71 .
$$

The stone on Mars accelerates at a constant $3.71$ m/s$^2$, which is where we started: the fall law was built from
that number. For $f(x) = x^3 - 3x$: $f'(x) = 3x^2 - 3$, $f''(x) = 6x$, $f'''(x) = 6$, and every further derivative is 0.
The second derivative measures how the slope itself changes: the bending of the graph (Chapter 7 calls it
concavity).

**Worked example (a stone thrown up on Mars).** Throw a stone straight up at 20 m/s on Mars. Its height after $t$
seconds is $h(t) = 20t - 1.855t^2$ (ignoring the thin air). Its velocity is $h'(t) = 20 - 3.71t$: positive while
rising, zero at the top, negative on the way down. The top is where $h'(t) = 0$: $t = \frac{20}{3.71} \approx 5.39$ s,
and the height there is $h(5.39) \approx 53.9$ m. On Earth (replace $1.855$ by $4.9$) the same throw tops out after
about 2.04 s at about 20.4 m. **Check:** in both cases the top height is $\frac{v_0^2}{2g}$: $\frac{400}{7.42} \approx
53.9$ and $\frac{400}{19.6} \approx 20.4$.

## 4.3 Differentiable implies continuous

### The theorem

A function with a derivative at a point has a well-defined tangent there. Intuitively it cannot also have a jump:
near a jump the secants become vertical. The theorem:

> **Theorem.** If $f$ is differentiable at $a$, then $f$ is continuous at $a$.

*Proof.* For $x \ne a$ we can write

$$
f(x) - f(a) = \frac{f(x) - f(a)}{x - a} \cdot (x - a).
$$

As $x \to a$, the first factor tends to $f'(a)$ (a finite number, by assumption) and the second tends to 0. By the
product law for limits, $f(x) - f(a) \to f'(a) \cdot 0 = 0$. So $\lim_{x \to a} f(x) = f(a)$. $\square$

The proof is three lines, but it rests on the word "finite". If the difference quotients blew up, the product
$\infty \cdot 0$ would tell us nothing.

### The converse is false: |x|

Continuity does **not** imply differentiability. The standard example is the absolute value $f(x) = |x|$ at $a = 0$.
It is continuous (Chapter 3.1). Its difference quotient at 0 is

$$
\frac{|0 + h| - |0|}{h} = \frac{|h|}{h} = \begin{cases} 1, & h > 0, \\ -1, & h < 0. \end{cases}
$$

The right-hand limit is 1 and the left-hand limit is $-1$. They differ, so $f'(0)$ does not exist. These one-sided
limits are called the **right and left derivatives**; $f$ is differentiable at $a$ exactly when both exist and agree.
The graph of $|x|$ has a **corner** at 0: from the right it looks like a line of slope 1, from the left like a line of
slope $-1$, and no single line fits both. Elsewhere $|x|$ is differentiable, with derivative $1$ for $x > 0$ and $-1$
for $x < 0$: that is, $\frac{d}{dx}|x| = \operatorname{sgn}(x)$ for $x \ne 0$.

### Other ways to fail

- **A vertical tangent.** $f(x) = x^{1/3}$ (the cube root) is continuous everywhere, but at 0 the difference quotient
  is $\frac{h^{1/3}}{h} = h^{-2/3} \to \infty$. The tangent at the origin is the vertical line $x = 0$, which has no slope.
  Similarly $\sqrt x$ at 0 (from the right).
- **A cusp.** $f(x) = |x|^{1/2}$: the right derivative is $+\infty$ and the left is $-\infty$; the graph comes to a sharp
  point.
- **Oscillation.** $f(x) = x\sin\frac1x$ with $f(0) = 0$ is continuous at 0 (Chapter 3, exercise 3). Its difference
  quotient at 0 is $\frac{h \sin(1/h)}{h} = \sin\frac1h$, which has no limit (Chapter 2). So it is not differentiable at
  0: the secants from the origin swing back and forth between slopes $-1$ and $1$ forever.
- **A jump.** Any discontinuity at all, by the theorem.

### Subtler: a derivative that is not continuous

*Level: advanced.*

Multiply by one more $x$: let $g(x) = x^2\sin\frac1x$ for $x \ne 0$ and $g(0) = 0$. At 0,

$$
\left|\frac{g(h) - g(0)}{h}\right| = \left|h \sin\frac1h\right| \le |h| \to 0,
$$

so by the squeeze theorem $g'(0) = 0$. The function is differentiable at 0 even though it wiggles infinitely often
nearby; the wiggles are squashed by the $x^2$. For $x \ne 0$, the rules of Chapter 5 give
$g'(x) = 2x\sin\frac1x - \cos\frac1x$, and as $x \to 0$ the first term tends to 0 while $\cos\frac1x$ oscillates between
$-1$ and $1$. So $g'$ exists **everywhere** but is **not continuous** at 0. Differentiable functions can have wild
derivatives. (They cannot be completely wild: Darboux proved in 1875 that every derivative has the intermediate value
property, even when it is not continuous.)

How bad can it get? In 1872 Weierstrass presented a function that is continuous at every point and differentiable at
none: a graph that is all corners, at every scale. [Chapter 19](19-Uniform-Convergence.md) builds it. So the hierarchy
is strict: differentiable functions are continuous, but continuous functions can be very far from differentiable.

## 4.4 The rules: sum, product, quotient

Computing every derivative from the definition is slow. The rules below let you build derivatives of complicated
functions from simple ones, the way the limit laws built limits. Throughout, $f$ and $g$ are differentiable at $x$.

### Constant multiples and sums

> **Constant multiple rule.** $(cf)'(x) = c\,f'(x)$. **Sum rule.** $(f + g)'(x) = f'(x) + g'(x)$.

*Proof.* The difference quotient of $f + g$ is

$$
\frac{f(x + h) + g(x + h) - f(x) - g(x)}{h} = \frac{f(x + h) - f(x)}{h} + \frac{g(x + h) - g(x)}{h},
$$

and by the sum law for limits it tends to $f'(x) + g'(x)$. The constant multiple rule is the same with the constant
multiple law. $\square$

So derivatives of sums are sums of derivatives (the derivative is **linear**). Then
$\frac{d}{dx}(4x^3 - 5x^2 + 7) = 12x^2 - 10x$, using $\frac{d}{dx}x^3 = 3x^2$, $\frac{d}{dx}x^2 = 2x$ and the constant's
derivative 0.

### The product rule

It is tempting to guess that the derivative of a product is the product of the derivatives. Test it: $x \cdot x = x^2$
has derivative $2x$, but the product of the derivatives is $1 \cdot 1 = 1$. Wrong. The correct rule has two terms.

> **Product rule.** $(fg)'(x) = f'(x)g(x) + f(x)g'(x)$.

**Why two terms: a picture.** Think of $f(x)$ and $g(x)$ as the sides of a rectangle with area $fg$. When $x$ grows a
little, $f$ grows by $\Delta f$ and $g$ by $\Delta g$. The new area is

$$
(f + \Delta f)(g + \Delta g) = fg + \Delta f \cdot g + f \cdot \Delta g + \Delta f \cdot \Delta g .
$$

The area grows by two thin strips, $\Delta f \cdot g$ and $f \cdot \Delta g$, plus a tiny corner $\Delta f\,\Delta g$. Divide by
$\Delta x$ and let it shrink: the strips give $f'g + fg'$, and the corner disappears because it is a product of two small
quantities. Leibniz wrote it as $d(xy) = x\,dy + y\,dx$, in his first publication on calculus (1684).

*Proof.* Add and subtract $f(x + h)g(x)$ in the numerator (the same trick as the product law for limits):

$$
\begin{aligned}
\frac{f(x + h)g(x + h) - f(x)g(x)}{h}
&= \frac{f(x + h)g(x + h) - f(x + h)g(x)}{h} + \frac{f(x + h)g(x) - f(x)g(x)}{h} \\
&= f(x + h)\,\frac{g(x + h) - g(x)}{h} + g(x)\,\frac{f(x + h) - f(x)}{h}.
\end{aligned}
$$

As $h \to 0$: $f(x + h) \to f(x)$, **because $f$ is differentiable, hence continuous** (section 4.3); the first
difference quotient tends to $g'(x)$, and the second to $f'(x)$. By the limit laws the whole expression tends to
$f(x)g'(x) + g(x)f'(x)$. $\square$

Notice how the theorem of 4.3 was needed. That is typical: continuity is the glue that holds the rules together.

**Worked example.** $\frac{d}{dx}\big[(x^2 + 1)(x^3 - 2x)\big] = 2x(x^3 - 2x) + (x^2 + 1)(3x^2 - 2) = 5x^4 - 3x^2 - 2$.
**Check:** multiplying out first, $(x^2 + 1)(x^3 - 2x) = x^5 - x^3 - 2x$, whose derivative is $5x^4 - 3x^2 - 2$. Same
answer.

**Worked example.** With three factors, apply the rule twice: $(fgh)' = f'gh + fg'h + fgh'$. Each term
differentiates one factor and leaves the others alone. For example
$\frac{d}{dx}\big[x\sqrt x\,(x + 1)\big] = \sqrt x\,(x + 1) + x \cdot \frac1{2\sqrt x}(x + 1) + x\sqrt x$, which simplifies to
$\frac52 x^{3/2} + \frac32 x^{1/2}$. **Check:** $x\sqrt x(x + 1) = x^{5/2} + x^{3/2}$, and the power rule of 4.5 gives the
same.

### The quotient rule

> **Reciprocal rule.** If $g(x) \ne 0$, then $\left(\dfrac1g\right)'(x) = -\dfrac{g'(x)}{g(x)^2}$.
>
> **Quotient rule.** If $g(x) \ne 0$, then $\left(\dfrac fg\right)'(x) = \dfrac{f'(x)g(x) - f(x)g'(x)}{g(x)^2}$.

*Proof of the reciprocal rule.* Since $g$ is continuous at $x$ and $g(x) \ne 0$, $g(x + h) \ne 0$ for small $h$
(Chapter 2, exercise 11), so $\frac1{g(x + h)}$ makes sense. Then

$$
\frac{\frac{1}{g(x + h)} - \frac1{g(x)}}{h} = \frac{g(x) - g(x + h)}{h\,g(x + h)g(x)} = -\frac{g(x + h) - g(x)}{h} \cdot \frac{1}{g(x + h)g(x)} .
$$

As $h \to 0$ the first factor tends to $-g'(x)$ and the second, by continuity of $g$, to $\frac1{g(x)^2}$. $\square$

*Proof of the quotient rule.* Write $\frac fg = f \cdot \frac1g$ and use the product rule:

$$
\left(f \cdot \frac1g\right)' = f' \cdot \frac1g + f \cdot \left(-\frac{g'}{g^2}\right) = \frac{f'g - fg'}{g^2}. \qquad \square
$$

A way to remember the order of the numerator: it is the product rule with a minus sign, and the term with $f'$ comes
first ("low d-high minus high d-low, over low squared", if you like mnemonics). If you get the order wrong, the sign is
wrong; check with $\frac{x}{1}$, whose derivative must be $1$.

**Worked example.** $\frac{d}{dx} \frac{x^2}{x + 1} = \frac{2x(x + 1) - x^2 \cdot 1}{(x + 1)^2} = \frac{x^2 + 2x}{(x + 1)^2}$.
At $x = 1$ this is $\frac34$. **Check numerically:** $\frac{f(1.001) - f(0.999)}{0.002}$ with $f(x) = \frac{x^2}{x+1}$ is
about $0.75000$.

**Worked example.** $\frac{d}{dx} \frac{3x - 1}{x^2 + 1} = \frac{3(x^2 + 1) - (3x - 1)(2x)}{(x^2 + 1)^2} =
\frac{-3x^2 + 2x + 3}{(x^2 + 1)^2}$. The tangent is horizontal where $3x^2 - 2x - 3 = 0$, at
$x = \frac{1 \pm \sqrt{10}}{3}$, that is $x \approx 1.387$ and $x \approx -0.721$.

**Rational functions.** By the quotient rule, every rational function is differentiable at every point of its domain,
and its derivative is again a rational function.

## 4.5 The power rule

> **Power rule.** $\dfrac{d}{dx} x^n = n x^{n-1}$.

We prove it in stages: first for positive whole numbers $n$, then for negative whole numbers, then for rational
exponents. For arbitrary real exponents, such as $x^{\sqrt2}$ or $x^\pi$, we first need to say what such a power *means*,
which needs the exponential function; [Chapter 5](05-The-Chain-Rule-and-Special-Functions.md) does that and proves the
rule for all real $n$ by logarithmic differentiation.

### Positive whole numbers: three proofs

**Proof 1 (binomial theorem).** By the binomial theorem,

$$
(x + h)^n = x^n + n x^{n-1}h + \binom n2 x^{n-2}h^2 + \cdots + h^n .
$$

Subtract $x^n$ and divide by $h$:

$$
\frac{(x + h)^n - x^n}{h} = n x^{n-1} + \binom n2 x^{n-2}h + \cdots + h^{n-1} .
$$

Every term after the first contains a factor $h$ and so tends to 0. The limit is $nx^{n-1}$. $\square$

**Proof 2 (induction with the product rule).** For $n = 1$, $\frac{d}{dx}x = 1 = 1 \cdot x^0$. Suppose
$\frac{d}{dx} x^n = nx^{n-1}$ for some $n$. Then by the product rule

$$
\frac{d}{dx} x^{n+1} = \frac{d}{dx}(x^n \cdot x) = nx^{n-1} \cdot x + x^n \cdot 1 = (n + 1)x^n ,
$$

which is the rule for $n + 1$. By induction it holds for all $n \ge 1$. $\square$

**Proof 3 (factoring).** For $x \ne a$, the identity
$x^n - a^n = (x - a)(x^{n-1} + x^{n-2}a + \cdots + x a^{n-2} + a^{n-1})$ (multiply out the right side: everything cancels
except $x^n - a^n$) gives

$$
\frac{x^n - a^n}{x - a} = x^{n-1} + x^{n-2}a + \cdots + a^{n-1} \to a^{n-1} + a^{n-1} + \cdots + a^{n-1} = n a^{n-1}
$$

as $x \to a$, since there are $n$ terms, each tending to $a^{n-1}$. $\square$

Proof 3 is the one that generalises, as you will see in a moment. With the sum and constant multiple rules, every
polynomial can now be differentiated term by term:

$$
\frac{d}{dx}\left(c_n x^n + \cdots + c_1 x + c_0\right) = n c_n x^{n-1} + \cdots + c_1 .
$$

### Negative whole numbers

For $n = -m$ with $m$ a positive whole number and $x \ne 0$, $x^{-m} = \frac1{x^m}$, and the reciprocal rule gives

$$
\frac{d}{dx} x^{-m} = -\frac{m x^{m-1}}{x^{2m}} = -m x^{-m-1} ,
$$

which is $n x^{n-1}$ with $n = -m$. $\square$ (And $n = 0$: $x^0 = 1$ has derivative $0 = 0 \cdot x^{-1}$, for $x \ne 0$.)

**Worked example.** $\frac{d}{dx}\left(\frac{3}{x^4}\right) = 3 \cdot (-4)x^{-5} = -\frac{12}{x^5}$.

### Rational exponents

*Level: advanced.*

**Roots.** Let $n \ge 1$ be a whole number and $x > 0$. We show $\frac{d}{dx}x^{1/n} = \frac1n x^{\frac1n - 1}$.

*Proof.* Fix $a > 0$ and write $u = x^{1/n}$ and $b = a^{1/n}$, so $x = u^n$ and $a = b^n$. For $x \ne a$ (so $u \ne b$),
by Proof 3's identity,

$$
\frac{x^{1/n} - a^{1/n}}{x - a} = \frac{u - b}{u^n - b^n} = \frac{1}{u^{n-1} + u^{n-2}b + \cdots + b^{n-1}} .
$$

As $x \to a$, $u = x^{1/n} \to a^{1/n} = b$, **because the $n$th root is continuous** (Chapter 3.4: it is the inverse of
the continuous increasing function $x^n$). So the denominator tends to $nb^{n-1}$, which is positive, and the limit is

$$
\frac{1}{n b^{n-1}} = \frac1n a^{-\frac{n-1}{n}} = \frac1n a^{\frac1n - 1}. \qquad \square
$$

**Check.** With $n = 2$ this gives $\frac{d}{dx}\sqrt x = \frac12 x^{-1/2} = \frac1{2\sqrt x}$, as found in 4.2.

**Powers of a function.** To reach $x^{p/q} = \left(x^{1/q}\right)^p$ we need the derivative of a power of a function.
For a whole number $p \ge 1$ and $u$ differentiable,

$$
\frac{d}{dx}\,u(x)^p = p\,u(x)^{p-1}\,u'(x).
$$

*Proof by induction on $p$.* For $p = 1$ it says $u' = u'$. If it holds for $p$, then by the product rule
$(u^{p+1})' = (u^p \cdot u)' = p u^{p-1}u' \cdot u + u^p \cdot u' = (p + 1)u^p u'$. $\square$ (This is a special case of
the chain rule of Chapter 5, proved here with the product rule alone.)

**Positive rational exponents.** For whole numbers $p, q \ge 1$ and $x > 0$, take $u = x^{1/q}$:

$$
\frac{d}{dx}x^{p/q} = p\left(x^{1/q}\right)^{p-1} \cdot \frac1q x^{\frac1q - 1} = \frac pq x^{\frac{p-1}{q} + \frac1q - 1} = \frac pq x^{\frac pq - 1}.
$$

**Negative rational exponents** follow from the reciprocal rule exactly as for whole numbers. So the power rule
$\frac{d}{dx}x^r = rx^{r-1}$ holds for every rational $r$ and every $x > 0$ (and at other $x$ wherever $x^r$ is defined
and the formula makes sense, for example $x^{1/3}$ at negative $x$, by the oddness of the cube root).

### Worked examples

**Example A.** $\frac{d}{dx}\left(3x^4 - \frac{2}{x^2} + 5\sqrt x\right) = 12x^3 + \frac{4}{x^3} + \frac{5}{2\sqrt x}$.

**Example B.** $\frac{d}{dx}\frac{x^2 + 1}{\sqrt x}$. Rather than the quotient rule, divide first:
$\frac{x^2 + 1}{\sqrt x} = x^{3/2} + x^{-1/2}$, so the derivative is $\frac32 x^{1/2} - \frac12 x^{-3/2}$. Rewriting before
differentiating often saves work.

**Example C (Kepler's third law).** For a planet in orbit, the period $T$ (in years) and the average distance $a$ from
the Sun (in astronomical units, AU) satisfy Kepler's third law $T = a^{3/2}$, in these units. Mars has $a \approx 1.524$
AU, so $T \approx 1.524^{3/2} \approx 1.881$ years, the Martian year. The derivative

$$
\frac{dT}{da} = \frac32 a^{1/2} \approx \frac32 \times 1.234 \approx 1.85 \text{ years per AU}
$$

says that, near Mars's orbit, moving an orbit outward by 0.01 AU lengthens the year by about 0.0185 years, nearly a week.
More neatly, $\frac{dT}{da} = \frac32 \cdot \frac Ta$, so a 1 percent increase in distance gives about a 1.5 percent increase
in period, at every orbit. ([Chapter 14](14-Differential-Equations.md) derives Kepler's laws from Newton's.)

**Example D.** Where does the tangent to $y = x^{2/3}$ have slope $\frac13$? $y' = \frac23 x^{-1/3} = \frac13$ gives
$x^{1/3} = 2$, so $x = 8$, at the point $(8, 4)$. At $x = 0$ the derivative is undefined: $x^{2/3}$ has a cusp there.

### History

Pierre de Fermat, in the 1630s, found maxima, minima and tangents of polynomial curves with a method he called
*adequality*: compare $f(x)$ with $f(x + e)$, divide by $e$, then set $e$ to zero. In modern terms he was computing
derivatives of polynomials, but without a theory of why the method worked. Isaac Newton developed his "method of
fluxions" from the mid-1660s; his main treatise on it was written around 1671 and published only in 1736, after his
death. Gottfried Wilhelm Leibniz published first: his paper *Nova Methodus pro Maximis et Minimis* ("A new method for
maxima and minima") appeared in the journal *Acta Eruditorum* in 1684, with the $d$ notation, the sum, product and
quotient rules and the power rule. Joseph-Louis Lagrange, in his *Théorie des fonctions analytiques* (1797), introduced
the prime notation and the name "derived function" (*fonction dérivée*), from which our word "derivative" comes. The
definition as a limit, with the rules proved as in this chapter, is Cauchy's, from the 1820s.

## Check yourself

??? question "1. From the definition, find $f'(1)$ for $f(x) = x^2 + 3x$, and the tangent line at $x = 1$."

    $\frac{(1 + h)^2 + 3(1 + h) - 4}{h} = \frac{5h + h^2}{h} = 5 + h \to 5$. Since $f(1) = 4$, the tangent is
    $y = 4 + 5(x - 1) = 5x - 1$. Check with the rules: $f'(x) = 2x + 3$, $f'(1) = 5$.

??? question "2. From the definition, find the derivative of $f(x) = \dfrac1{x + 1}$."

    $\frac{1}{h}\left(\frac1{x + h + 1} - \frac1{x + 1}\right) = \frac{(x + 1) - (x + h + 1)}{h(x + h + 1)(x + 1)} =
    \frac{-1}{(x + h + 1)(x + 1)} \to -\frac{1}{(x + 1)^2}$, for $x \ne -1$.

??? question "3. From the definition, find the derivative of $f(x) = \sqrt{2x + 1}$ for $x > -\tfrac12$."

    Multiply by the conjugate: $\frac{\sqrt{2x + 2h + 1} - \sqrt{2x + 1}}{h} = \frac{2h}{h(\sqrt{2x + 2h + 1} + \sqrt{2x + 1})}
    \to \frac{2}{2\sqrt{2x + 1}} = \frac1{\sqrt{2x + 1}}$.

??? question "4. Where is $f(x) = |x - 2| + |x + 1|$ not differentiable? What are its one-sided derivatives there?"

    At $x = 2$ and $x = -1$, the corners of the two absolute values. Away from them: for $x > 2$, $f = 2x - 1$ (slope 2);
    for $-1 < x < 2$, $f = 3$ (slope 0); for $x < -1$, $f = -2x + 1$ (slope $-2$). At $x = 2$ the left derivative is 0 and
    the right is 2; at $x = -1$ the left is $-2$ and the right is 0.

??? question "5. Is $f(x) = x|x|$ differentiable at 0? Find $f'(x)$ everywhere."

    At 0: $\frac{h|h|}{h} = |h| \to 0$, so $f'(0) = 0$. For $x > 0$, $f = x^2$ and $f' = 2x$; for $x < 0$, $f = -x^2$
    and $f' = -2x$. Together, $f'(x) = 2|x|$ for all $x$: differentiable everywhere, though $f'$ itself has a corner at 0.

??? question "6. Differentiate $(x^2 + 1)(x^3 - 2x)$ with the product rule, and evaluate at $x = 1$."

    $2x(x^3 - 2x) + (x^2 + 1)(3x^2 - 2)$. At $x = 1$: $2(-1) + 2(1) = 0$. So the tangent at $(1, -2)$ is horizontal.
    Check: expanding gives $5x^4 - 3x^2 - 2$, and $5 - 3 - 2 = 0$.

??? question "7. Differentiate $\dfrac{x^2 - 1}{x^2 + 1}$ and find where the tangent is horizontal."

    $\frac{2x(x^2 + 1) - (x^2 - 1)2x}{(x^2 + 1)^2} = \frac{4x}{(x^2 + 1)^2}$. Zero only at $x = 0$, the point $(0, -1)$,
    which is the lowest point of the graph (the derivative is negative before 0 and positive after).

??? question "8. Differentiate $3x^4 - \dfrac{2}{x^2} + 5\sqrt x$ and $x^{5/3} - 6x^{-1/3}$."

    $12x^3 + 4x^{-3} + \frac52 x^{-1/2}$, and $\frac53 x^{2/3} + 2x^{-4/3}$ (since $-6 \cdot (-\frac13) = 2$ and
    $-\frac13 - 1 = -\frac43$).

??? question "9. Find the points of $y = x^3 - 3x$ where the tangent is horizontal, and the points where it is parallel to $y = 9x$."

    $y' = 3x^2 - 3 = 0$ at $x = \pm1$: points $(1, -2)$ and $(-1, 2)$. Parallel to $y = 9x$: $3x^2 - 3 = 9$, $x = \pm 2$:
    points $(2, 2)$ and $(-2, -2)$.

??? question "10. Which tangent line to $y = \sqrt x$ passes through the point $(-4, 0)$?"

    The tangent at $(a, \sqrt a)$ is $y = \sqrt a + \frac{x - a}{2\sqrt a}$. It passes through $(-4, 0)$ when
    $0 = \sqrt a + \frac{-4 - a}{2\sqrt a}$, i.e. $2a = 4 + a$, so $a = 4$. The line is $y = 2 + \frac{x - 4}4 = \frac x4 + 1$,
    and indeed it is 0 at $x = -4$.

??? question "11. A stone is thrown straight up at 20 m/s on Mars, with height $h(t) = 20t - 1.855t^2$. When is it at its highest, how high, and with what velocity does it land?"

    $h'(t) = 20 - 3.71t = 0$ at $t \approx 5.39$ s, height $\approx 53.9$ m. It lands when $h(t) = 0$, at
    $t = \frac{20}{1.855} \approx 10.78$ s (twice the rise time), with velocity $h'(10.78) = 20 - 3.71 \times 10.78 \approx
    -20$ m/s: the same speed it was thrown with, downward, as you would expect without air.

??? question "12. Let $g(x) = x^2\sin\frac1x$ for $x \ne 0$ and $g(0) = 0$. Show $g'(0) = 0$, but $x\sin\frac1x$ (with value 0 at 0) has no derivative at 0. Then use the power-of-a-function rule to show $\frac{d}{dx}(x^2 + 1)^{10} = 20x(x^2 + 1)^9$."

    For $g$: $\left|\frac{g(h)}{h}\right| = |h\sin\frac1h| \le |h| \to 0$, so $g'(0) = 0$ by the squeeze theorem. For
    $f(x) = x\sin\frac1x$: $\frac{f(h)}{h} = \sin\frac1h$ has no limit as $h \to 0$ (Chapter 2, exercise 10), so $f'(0)$ does not
    exist. Finally, with $u = x^2 + 1$, $u' = 2x$ and $p = 10$: $10u^9 \cdot 2x = 20x(x^2 + 1)^9$.

## What you learned

- The derivative $f'(a) = \lim_{h \to 0}\frac{f(a + h) - f(a)}{h}$ is the instantaneous rate of change and the slope of the
  tangent line $y = f(a) + f'(a)(x - a)$.
- Letting $a$ vary gives the derivative function $f'$, written also $\frac{dy}{dx}$, $\dot y$ or $Df$; its sign shows
  where $f$ rises and falls, and $f''$ gives acceleration and bending.
- Differentiable implies continuous, because $f(x) - f(a)$ is a difference quotient times $x - a$.
- Continuous does not imply differentiable: corners ($|x|$), vertical tangents ($x^{1/3}$), cusps and oscillation
  ($x\sin\frac1x$); and a derivative can exist everywhere without being continuous ($x^2\sin\frac1x$).
- The derivative is linear; the product rule is $(fg)' = f'g + fg'$ and the quotient rule
  $\left(\frac fg\right)' = \frac{f'g - fg'}{g^2}$, both proved using continuity.
- The power rule $\frac{d}{dx}x^r = rx^{r-1}$ holds for every rational $r$ (for real $r$ after Chapter 5), proved by the
  binomial theorem, induction or factoring.

**Next:** [Chapter 5](05-The-Chain-Rule-and-Special-Functions.md) proves the chain rule and differentiates the sine,
cosine, exponential and logarithm, and inverse functions.

## Further reading

- M. Spivak, *Calculus* (4th edition, 2008), chapters 9 and 10 (derivatives and differentiation).
- R. Courant and F. John, *Introduction to Calculus and Analysis*, volume 1 (1965), chapter 2.
- G. W. Leibniz, "Nova Methodus pro Maximis et Minimis" (1684); an English translation is in D. J. Struik (ed.),
  *A Source Book in Mathematics, 1200-1800* (1969).
- J. V. Grabiner, "The Changing Concept of Change: The Derivative from Fermat to Weierstrass", *Mathematics
  Magazine* 56(4), 1983.
- On this site: the U of T guides [MAT137, Unit 3: Derivatives](../../uoft/MAT137/unit03.md) and
  [MAT158, Unit 6: Derivatives](../../uoft/MAT158H1/unit06.md); the Topics lessons
  [The derivative from first principles](../../topics/change/level-7/03-first-principles.md),
  [The power rule](../../topics/change/level-7/04-power-rule.md) and
  [The derivative as a function](../../topics/change/level-7/05-derivative-function.md); the algebra book's
  [Chapter 8](../algebra/08-Sequences-Series-and-Induction.md) for the binomial theorem and induction.
