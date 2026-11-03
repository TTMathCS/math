# 9. The fundamental theorem

*Chapter 8 built the integral out of rectangles: chop, add, refine, take the limit. That definition is honest but
slow. Computing $\int_0^1 x^2\,dx$ from it took a page and a formula for $1^2 + 2^2 + \cdots + n^2$; computing
$\int_0^\pi \sin x\,dx$ that way is a real fight. This chapter proves the theorem that turns the fight into one line:
to integrate $f$, find a function whose derivative is $f$ and subtract its values at the ends. You will meet the
area-so-far function, prove both halves of the fundamental theorem of calculus, learn to work with antiderivatives
and net change, and see who found all this and how they quarrelled about it.*

!!! abstract "In this chapter"
    **You will learn:**

    - what an accumulation function $A(x) = \int_a^x f(t)\,dt$ is, and why it is always continuous
    - the fundamental theorem, part 1: $A'(x) = f(x)$ wherever $f$ is continuous, with a full proof
    - the fundamental theorem, part 2: $\int_a^b f = F(b) - F(a)$ for any antiderivative $F$, with a proof that needs only the mean value theorem
    - antiderivatives, the "$+C$", and why it is a constant only on an interval
    - net change, displacement versus distance, and the average value of a function
    - the story of Newton, Leibniz and the priority dispute, told without taking sides

    **You need:** [Chapter 6](06-The-Mean-Value-Theorem.md) (the mean value theorem and "zero derivative means
    constant"), [Chapter 5](05-The-Chain-Rule-and-Special-Functions.md) (the chain rule and the derivatives of
    $\sin$, $e^x$, $\ln$, $\arctan$) and [Chapter 8](08-The-Integral.md) (upper and lower sums, integrability and the
    properties of the integral). A gentler version on the Topics shelf:
    [Areas under curves and the fundamental theorem](../../topics/change/level-8/06-area-fundamental-theorem.md) and
    [Area under a speed-time graph](../../topics/change/level-5/06-area-speed-time.md).

    **Levels:** 9.1, 9.4 and 9.5 are intermediate; 9.2 and 9.3 are intermediate with full proofs; the remarks marked
    *advanced* in 9.3 (Volterra's function, the strongest form) are for readers heading to Part VI; 9.6 is history
    for everyone.

## 9.1 Accumulation functions

Start with a question that has nothing to do with area. Water flows into a tank at a rate that changes: $r(t)$ litres
per minute at time $t$ minutes. How much water has come in by time $x$?

If the rate were constant, say 50 litres per minute, the answer would be $50x$: rate times time. When the rate
changes, Chapter 8 already told us what to do. Chop $[0, x]$ into short pieces; on each piece the rate is nearly
constant, so the water in that piece is nearly (rate) $\times$ (length); add, and refine. The limit of those sums is
the integral, so

$$
W(x) = \int_0^x r(t)\,dt
$$

is the water that has come in by time $x$. As $x$ moves, $W$ changes: $W$ is a new function of $x$, built from $r$.
The letter $t$ inside the integral is a **dummy variable**: it runs over $[0, x]$ and disappears once the integral is
computed, the way $k$ disappears from $\sum_{k=1}^{n} k = n(n+1)/2$. We use a different letter for it so that it does
not clash with the endpoint $x$.

**Definition.** Let $f$ be integrable on $[a, b]$. Its **accumulation function** (based at $a$) is

$$
A(x) = \int_a^x f(t)\,dt, \qquad a \le x \le b.
$$

When $f \ge 0$, $A(x)$ is the area under the graph of $f$ from $a$ to $x$: the "area so far". When $f$ takes
negative values, $A(x)$ is the **signed** area: area above the axis counts plus, area below counts minus. By
the convention of Chapter 8, $\int_a^a f = 0$, so $A(a) = 0$ always.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 200" role="img" aria-label="A curve y equals f of t above an axis. The area under it from a to x is shaded orange and labelled A of x; a thin blue strip from x to x plus h sits next to it, with height close to f of x">
  <path d="M 56.0 170.0 L 56.0 91.0 L 59.2 88.5 L 62.5 86.1 L 65.8 83.9 L 69.0 81.9 L 72.2 80.0 L 75.5 78.3 L 78.8 76.7 L 82.0 75.4 L 85.2 74.2 L 88.5 73.3 L 91.8 72.5 L 95.0 72.0 L 98.2 71.7 L 101.5 71.5 L 104.8 71.6 L 108.0 71.9 L 111.2 72.3 L 114.5 73.0 L 117.8 73.8 L 121.0 74.8 L 124.2 76.0 L 127.5 77.3 L 130.8 78.8 L 134.0 80.5 L 137.2 82.2 L 140.5 84.0 L 143.8 86.0 L 147.0 88.0 L 150.2 90.1 L 153.5 92.3 L 156.8 94.4 L 160.0 96.6 L 163.2 98.8 L 166.5 101.0 L 169.8 103.2 L 173.0 105.3 L 176.2 107.4 L 179.5 109.4 L 182.8 111.3 L 186.0 113.0 L 186.0 170.0 Z" fill="#eea66f" fill-opacity="0.6" stroke="none"/>
  <path d="M 186.0 170.0 L 186.0 113.0 L 186.5 113.3 L 187.0 113.6 L 187.6 113.9 L 188.1 114.1 L 188.6 114.4 L 189.1 114.7 L 189.6 114.9 L 190.2 115.2 L 190.7 115.4 L 191.2 115.7 L 191.7 115.9 L 192.2 116.1 L 192.8 116.4 L 193.3 116.6 L 193.8 116.8 L 194.3 117.1 L 194.8 117.3 L 195.4 117.5 L 195.9 117.7 L 196.4 117.9 L 196.9 118.1 L 197.4 118.3 L 198.0 118.5 L 198.5 118.7 L 199.0 118.9 L 199.5 119.1 L 200.0 119.3 L 200.6 119.5 L 201.1 119.6 L 201.6 119.8 L 202.1 120.0 L 202.6 120.1 L 203.2 120.3 L 203.7 120.4 L 204.2 120.6 L 204.7 120.7 L 205.2 120.8 L 205.8 121.0 L 206.3 121.1 L 206.8 121.2 L 206.8 170.0 Z" fill="#9cc9ea" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <line x1="20" y1="170" x2="305" y2="170" stroke="currentColor" stroke-width="1.2"/>
  <line x1="30" y1="178" x2="30" y2="12" stroke="currentColor" stroke-width="1.2"/>
  <path d="M 30.0 114.0 L 31.3 112.8 L 32.6 111.6 L 33.9 110.4 L 35.2 109.1 L 36.5 107.9 L 37.8 106.7 L 39.1 105.5 L 40.4 104.3 L 41.7 103.2 L 43.0 102.0 L 44.3 100.8 L 45.6 99.7 L 46.9 98.5 L 48.2 97.4 L 49.5 96.3 L 50.8 95.2 L 52.1 94.1 L 53.4 93.1 L 54.7 92.0 L 56.0 91.0 L 57.3 90.0 L 58.6 89.0 L 59.9 88.0 L 61.2 87.1 L 62.5 86.1 L 63.8 85.2 L 65.1 84.4 L 66.4 83.5 L 67.7 82.7 L 69.0 81.9 L 70.3 81.1 L 71.6 80.4 L 72.9 79.6 L 74.2 78.9 L 75.5 78.3 L 76.8 77.6 L 78.1 77.0 L 79.4 76.5 L 80.7 75.9 L 82.0 75.4 L 83.3 74.9 L 84.6 74.5 L 85.9 74.0 L 87.2 73.6 L 88.5 73.3 L 89.8 73.0 L 91.1 72.7 L 92.4 72.4 L 93.7 72.2 L 95.0 72.0 L 96.3 71.8 L 97.6 71.7 L 98.9 71.6 L 100.2 71.6 L 101.5 71.5 L 102.8 71.5 L 104.1 71.6 L 105.4 71.6 L 106.7 71.7 L 108.0 71.9 L 109.3 72.0 L 110.6 72.2 L 111.9 72.4 L 113.2 72.7 L 114.5 73.0 L 115.8 73.3 L 117.1 73.6 L 118.4 74.0 L 119.7 74.4 L 121.0 74.8 L 122.3 75.3 L 123.6 75.8 L 124.9 76.3 L 126.2 76.8 L 127.5 77.3 L 128.8 77.9 L 130.1 78.5 L 131.4 79.1 L 132.7 79.8 L 134.0 80.5 L 135.3 81.1 L 136.6 81.8 L 137.9 82.6 L 139.2 83.3 L 140.5 84.0 L 141.8 84.8 L 143.1 85.6 L 144.4 86.4 L 145.7 87.2 L 147.0 88.0 L 148.3 88.9 L 149.6 89.7 L 150.9 90.5 L 152.2 91.4 L 153.5 92.3 L 154.8 93.1 L 156.1 94.0 L 157.4 94.9 L 158.7 95.8 L 160.0 96.6 L 161.3 97.5 L 162.6 98.4 L 163.9 99.3 L 165.2 100.2 L 166.5 101.0 L 167.8 101.9 L 169.1 102.8 L 170.4 103.6 L 171.7 104.5 L 173.0 105.3 L 174.3 106.1 L 175.6 107.0 L 176.9 107.8 L 178.2 108.6 L 179.5 109.4 L 180.8 110.1 L 182.1 110.9 L 183.4 111.6 L 184.7 112.3 L 186.0 113.0 L 187.3 113.7 L 188.6 114.4 L 189.9 115.0 L 191.2 115.7 L 192.5 116.3 L 193.8 116.8 L 195.1 117.4 L 196.4 117.9 L 197.7 118.4 L 199.0 118.9 L 200.3 119.4 L 201.6 119.8 L 202.9 120.2 L 204.2 120.6 L 205.5 120.9 L 206.8 121.2 L 208.1 121.5 L 209.4 121.8 L 210.7 122.0 L 212.0 122.2 L 213.3 122.3 L 214.6 122.5 L 215.9 122.6 L 217.2 122.7 L 218.5 122.7 L 219.8 122.7 L 221.1 122.7 L 222.4 122.6 L 223.7 122.5 L 225.0 122.4 L 226.3 122.2 L 227.6 122.0 L 228.9 121.8 L 230.2 121.6 L 231.5 121.3 L 232.8 120.9 L 234.1 120.6 L 235.4 120.2 L 236.7 119.8 L 238.0 119.3 L 239.3 118.9 L 240.6 118.3 L 241.9 117.8 L 243.2 117.2 L 244.5 116.6 L 245.8 116.0 L 247.1 115.3 L 248.4 114.6 L 249.7 113.9 L 251.0 113.2 L 252.3 112.4 L 253.6 111.6 L 254.9 110.8 L 256.2 109.9 L 257.5 109.0 L 258.8 108.1 L 260.1 107.2 L 261.4 106.3 L 262.7 105.3 L 264.0 104.3 L 265.3 103.3 L 266.6 102.3 L 267.9 101.2 L 269.2 100.2 L 270.5 99.1 L 271.8 98.0 L 273.1 96.9 L 274.4 95.8 L 275.7 94.6 L 277.0 93.5 L 278.3 92.3 L 279.6 91.1 L 280.9 90.0 L 282.2 88.8 L 283.5 87.6 L 284.8 86.4 L 286.1 85.2 L 287.4 83.9 L 288.7 82.7 L 290.0 81.5" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="56.0" y="186" font-size="12" text-anchor="middle" fill="currentColor">a</text>
  <text x="186.0" y="186" font-size="12" text-anchor="middle" fill="currentColor">x</text>
  <text x="210.8" y="186" font-size="12" text-anchor="start" fill="currentColor">x+h</text>
  <text x="121.0" y="140" font-size="14" text-anchor="middle" fill="currentColor">A(x)</text>
  <text x="269.2" y="92.2" font-size="13" text-anchor="middle" fill="currentColor">y = f(t)</text>
</svg>
</div>

The picture already contains the whole chapter. If you push $x$ a little to the right, to $x + h$, the area grows by
the thin blue strip. That strip is almost a rectangle of width $h$ and height $f(x)$. So

$$
A(x + h) - A(x) \approx f(x)\,h, \qquad\text{that is,}\qquad \frac{A(x+h) - A(x)}{h} \approx f(x).
$$

The left side is a difference quotient of $A$. As $h \to 0$ it should become $A'(x)$, and the strip should look more
and more like a rectangle. So we expect $A' = f$: **the rate at which the area grows is the height of the curve.**
Section 9.2 turns this into a proof.

**Example 1 (a straight line).** Let $f(t) = t$ and $a = 0$. For $x > 0$ the region under $y = t$ from 0 to $x$ is a
triangle with base $x$ and height $x$, so $A(x) = x^2/2$. And indeed $A'(x) = x = f(x)$.

**Example 2 (a step function).** Let $f(t) = 2$ for $0 \le t \le 3$ and $f(t) = -1$ for $3 < t \le 5$. Then

$$
A(x) = \int_0^x f(t)\,dt = \begin{cases} 2x, & 0 \le x \le 3,\\ 6 - (x - 3) = 9 - x, & 3 \le x \le 5. \end{cases}
$$

A table: $A(0) = 0$, $A(1) = 2$, $A(2) = 4$, $A(3) = 6$, $A(4) = 5$, $A(5) = 4$. The function $A$ climbs while $f$ is
positive, falls while $f$ is negative, and reaches its largest value exactly where $f$ changes sign. Notice two more
things. First, $A$ has **no jump** at $x = 3$, although $f$ does: $A$ is continuous. Second, $A$ has a **corner** at
$x = 3$: its slope is 2 on the left and $-1$ on the right, so $A'(3)$ does not exist. Wherever $f$ is continuous,
$A' = f$; at the jump of $f$, $A$ is continuous but not differentiable. Both facts are general, and we now prove the
first.

**Theorem 9.1 (accumulation functions are continuous).** If $f$ is integrable on $[a, b]$, then $A$ is continuous on
$[a, b]$. In fact, if $|f(t)| \le M$ for all $t$, then $|A(x) - A(y)| \le M|x - y|$ for all $x, y$ in $[a, b]$.

*Proof.* An integrable function is bounded by definition (Chapter 8), so such an $M$ exists. Take $y < x$. By
additivity over intervals, $A(x) - A(y) = \int_a^x f - \int_a^y f = \int_y^x f(t)\,dt$. By the estimate
$\left|\int_y^x f\right| \le \int_y^x |f| \le M(x - y)$ from Chapter 8,

$$
|A(x) - A(y)| \le M\,|x - y|.
$$

Given $\varepsilon > 0$, take $\delta = \varepsilon / M$ (any $\delta$ works if $M = 0$). Then $|x - y| < \delta$
gives $|A(x) - A(y)| < \varepsilon$. $\blacksquare$

An inequality of the form $|A(x) - A(y)| \le M|x - y|$ is called a **Lipschitz condition**, after Rudolf Lipschitz.
It says $A$ cannot change faster than rate $M$, which is just what you expect: area cannot pile up faster than the
tallest height times the width.

*Why we care.* Integration makes functions **smoother**. Start with a function that jumps; its accumulation function
is continuous. Start with a continuous function; its accumulation function is differentiable (Section 9.2). Each
integration buys one more degree of smoothness. Differentiation goes the other way and can destroy smoothness. This
is one of the deepest asymmetries in analysis, and it is why the Fourier series of Chapter 21 converge better after
integration than after differentiation.

## 9.2 The fundamental theorem, part 1

Here is the statement our picture promised. It is the first of two halves; together they are the **fundamental
theorem of calculus**, often shortened to FTC.

**Theorem 9.2 (FTC, part 1).** Let $f$ be integrable on $[a, b]$ and let $A(x) = \int_a^x f(t)\,dt$. If $f$ is
continuous at a point $c$ in $(a, b)$, then $A$ is differentiable at $c$ and

$$
A'(c) = f(c).
$$

In particular, if $f$ is continuous on all of $[a, b]$, then $A' = f$ on $(a, b)$ (and one-sided at the ends): every
continuous function has an antiderivative, namely its own accumulation function.

*Proof.* We must show that the difference quotient $\dfrac{A(c+h) - A(c)}{h}$ tends to $f(c)$ as $h \to 0$. The trick
is to write $f(c)$ itself as an average over the same small interval, so that the two can be compared inside one
integral.

Take $h > 0$ small enough that $c + h \le b$. As in Theorem 9.1, $A(c+h) - A(c) = \int_c^{c+h} f(t)\,dt$. The
constant $f(c)$ integrates to $\int_c^{c+h} f(c)\,dt = h\,f(c)$. Subtract and divide by $h$:

$$
\frac{A(c+h) - A(c)}{h} - f(c) = \frac{1}{h}\int_c^{c+h} \bigl(f(t) - f(c)\bigr)\,dt.
$$

Now use continuity. Let $\varepsilon > 0$. Because $f$ is continuous at $c$, there is $\delta > 0$ such that
$|t - c| < \delta$ implies $|f(t) - f(c)| < \varepsilon$. If $0 < h < \delta$, every $t$ in $[c, c+h]$ has
$|t - c| \le h < \delta$, so the integrand is smaller than $\varepsilon$ in absolute value, and

$$
\left|\frac{A(c+h) - A(c)}{h} - f(c)\right| \le \frac{1}{h}\int_c^{c+h} |f(t) - f(c)|\,dt \le \frac{1}{h}\cdot \varepsilon h = \varepsilon.
$$

For $h < 0$ (with $c + h \ge a$) the same argument runs on $[c+h, c]$: then
$A(c+h) - A(c) = -\int_{c+h}^{c} f(t)\,dt$, dividing by the negative number $h$ gives
$\frac{1}{|h|}\int_{c+h}^{c} f(t)\,dt$, and the same estimate holds with $|h|$ in place of $h$. So for
$0 < |h| < \delta$ the difference quotient is within $\varepsilon$ of $f(c)$. That is the definition of
$A'(c) = f(c)$ (Chapter 4). $\blacksquare$

Read the proof once more for its idea: **on a tiny interval a continuous function is nearly constant, and the integral
of a nearly constant function is nearly that constant times the width.** Everything else is bookkeeping.

### Using part 1

Part 1 lets you differentiate integrals you cannot compute.

**Example 3.** Let $G(x) = \int_0^x \sin(t^2)\,dt$. Nobody can write this integral in terms of $\sin$, $\cos$,
powers and the like; Chapter 10 explains why such integrals can be impossible to express. Yet FTC 1 gives at once

$$
G'(x) = \sin(x^2).
$$

So $G$ is increasing exactly where $\sin(x^2) > 0$, it has critical points at $x = \sqrt{k\pi}$, and so on: we know a
lot about a function we cannot write down. (This $G$ is a **Fresnel integral**, used in optics.)

**Example 4 (variable upper limit, chain rule).** Let $H(x) = \int_0^{x^2} \cos(t^2)\,dt$. Write $H(x) = G(u)$ with
$G(u) = \int_0^u \cos(t^2)\,dt$ and $u = x^2$. By FTC 1, $G'(u) = \cos(u^2)$; by the chain rule,

$$
H'(x) = G'(x^2)\cdot 2x = 2x\cos(x^4).
$$

*Check.* At $x = 0$, $H'(0) = 0$; this is right because for small $x$ the upper limit $x^2$ hardly moves.

**Example 5 (both limits move).** Let $K(x) = \int_x^{x^2} \cos(t^2)\,dt$. Split at 0:
$K(x) = \int_0^{x^2} \cos(t^2)\,dt - \int_0^{x} \cos(t^2)\,dt$, so

$$
K'(x) = 2x\cos(x^4) - \cos(x^2).
$$

The general rule, for continuous $f$ and differentiable $u$ and $v$, is

$$
\frac{d}{dx}\int_{v(x)}^{u(x)} f(t)\,dt = f\bigl(u(x)\bigr)\,u'(x) - f\bigl(v(x)\bigr)\,v'(x).
$$

*In words:* the area grows at the top end at rate (height there) $\times$ (speed of the top end), and shrinks at the
bottom end in the same way.

**Example 6 (a limit).** Find $\displaystyle\lim_{x\to 0} \frac{1}{x}\int_0^x \cos(t^2)\,dt$. The numerator $G(x)$
satisfies $G(0) = 0$, so the expression is the difference quotient $\frac{G(x) - G(0)}{x}$, whose limit is
$G'(0) = \cos(0) = 1$. In words: the average of $\cos(t^2)$ over a tiny interval near 0 is close to $\cos 0 = 1$.

**Example 7 (where continuity fails).** Example 2 shows that the hypothesis "continuous at $c$" cannot be dropped:
there $f$ jumps at 3 and $A'(3)$ does not exist. The left derivative is $2 = \lim_{t\to 3^-} f(t)$ and the right
derivative is $-1 = \lim_{t \to 3^+} f(t)$. The proof above, run on one side only, shows this in general: where $f$
has one-sided limits, $A$ has the matching one-sided derivatives.

### Try it in Python

A quick numerical check of FTC 1 for $G(x) = \int_0^x \sin(t^2)\,dt$ at $x = 1.5$, using midpoint sums (Chapter 8)
and a symmetric difference quotient. Standard library only.

```python
import math

def integral(f, a, b, n=200000):
    h = (b - a) / n
    return h * sum(f(a + (k + 0.5) * h) for k in range(n))

f = lambda t: math.sin(t * t)
G = lambda x: integral(f, 0, x)
x, h = 1.5, 1e-3
print((G(x + h) - G(x - h)) / (2 * h))   # about 0.778
print(f(x))                              # sin(2.25) = 0.7780731968879212
```

## 9.3 The fundamental theorem, part 2

Part 1 is about differentiating integrals. Part 2 is the part you will use a thousand times: it **computes**
integrals.

**Definition.** A function $F$ is an **antiderivative** of $f$ on an interval $I$ if $F'(x) = f(x)$ for every $x$ in
$I$.

For example, $x^3/3$ is an antiderivative of $x^2$; so is $x^3/3 + 7$. $-\cos x$ is an antiderivative of $\sin x$.

**Theorem 9.3 (FTC, part 2).** Let $f$ be integrable on $[a, b]$. Suppose $F$ is continuous on $[a, b]$,
differentiable on $(a, b)$, and $F'(x) = f(x)$ for all $x$ in $(a, b)$. Then

$$
\int_a^b f(x)\,dx = F(b) - F(a).
$$

We write $F(b) - F(a)$ as $\bigl[F(x)\bigr]_a^b$ or $F(x)\big|_a^b$.

*Proof.* Take any partition $P$: $a = x_0 < x_1 < \cdots < x_n = b$. The difference $F(b) - F(a)$ **telescopes**
along the partition:

$$
F(b) - F(a) = \sum_{i=1}^{n} \bigl(F(x_i) - F(x_{i-1})\bigr).
$$

On each piece $[x_{i-1}, x_i]$, $F$ is continuous and differentiable inside, so the mean value theorem
(Chapter 6) gives a point $c_i$ in $(x_{i-1}, x_i)$ with

$$
F(x_i) - F(x_{i-1}) = F'(c_i)(x_i - x_{i-1}) = f(c_i)\,\Delta x_i.
$$

Hence $F(b) - F(a) = \sum_{i} f(c_i)\,\Delta x_i$: **the exact change in $F$ is a Riemann sum of $f$**, for every
partition, with suitably chosen sample points. Let $m_i$ and $M_i$ be the infimum and supremum of $f$ on
$[x_{i-1}, x_i]$. Since $m_i \le f(c_i) \le M_i$,

$$
L(f, P) = \sum_i m_i\,\Delta x_i \;\le\; F(b) - F(a) \;\le\; \sum_i M_i\,\Delta x_i = U(f, P).
$$

So the single number $F(b) - F(a)$ lies between every lower sum and every upper sum. Because $f$ is integrable, there
is exactly one such number (Chapter 8: $\sup_P L(f,P) = \inf_P U(f,P)$, and any number squeezed between all lower and
all upper sums must equal this common value). That number is $\int_a^b f$. $\blacksquare$

This proof never used continuity of $f$, only that $f$ is integrable and has an antiderivative. That makes it
stronger than the version in many first courses, which goes through part 1.

**A second proof, for continuous $f$.** If $f$ is continuous, part 1 says $A(x) = \int_a^x f$ is an antiderivative.
Let $F$ be any other. Then $(F - A)' = f - f = 0$ on $(a, b)$, so $F - A$ is constant there (Chapter 6), and by
continuity on all of $[a, b]$: $F(x) = A(x) + C$. Evaluate: $F(b) - F(a) = (A(b) + C) - (A(a) + C) = A(b) - 0 = \int_a^b f$. This proof shows clearly how the two parts fit together: part 1 says integration produces an
antiderivative; "zero derivative means constant" says every antiderivative is that one plus a constant; part 2 follows.

### The payoff

**Example 8 (Archimedes in one line).** $\displaystyle\int_0^1 x^2\,dx = \Bigl[\frac{x^3}{3}\Bigr]_0^1 = \frac13.$
Archimedes needed a long exhaustion argument for the parabola ([Chapter 1](01-Rates-and-Areas.md)); Chapter 8 needed
the formula for a sum of squares. Now it is one line, because we know a function whose derivative is $x^2$.

**Example 9.** $\displaystyle\int_0^\pi \sin x\,dx = \bigl[-\cos x\bigr]_0^\pi = -\cos\pi + \cos 0 = 1 + 1 = 2.$ One
arch of the sine curve has area exactly 2. Try getting that from rectangles.

**Example 10.** $\displaystyle\int_1^e \frac{dx}{x} = \bigl[\ln x\bigr]_1^e = 1 - 0 = 1$, and
$\displaystyle\int_1^4 \frac{dx}{x} = \ln 4 \approx 1.3863$. (In fact one way to *define* $\ln x$ is as
$\int_1^x dt/t$; then FTC 1 gives $\ln' x = 1/x$ immediately. Many rigorous courses do it this way.)

**Example 11.** $\displaystyle\int_0^1 \frac{dx}{1 + x^2} = \bigl[\arctan x\bigr]_0^1 = \frac{\pi}{4}.$ A curve built
from nothing but squares and division has an area involving $\pi$, because its antiderivative measures an angle.

**Example 12.** $\displaystyle\int_0^{1/2} \frac{dx}{\sqrt{1-x^2}} = \bigl[\arcsin x\bigr]_0^{1/2} = \frac{\pi}{6}$
and $\displaystyle\int_0^{\pi/4} \sec^2 x\,dx = \bigl[\tan x\bigr]_0^{\pi/4} = 1.$

**Example 13 (signed area).** $\displaystyle\int_{-1}^{2} (x^3 - x)\,dx = \Bigl[\frac{x^4}{4} - \frac{x^2}{2}\Bigr]_{-1}^{2} = (4 - 2) - \Bigl(\frac14 - \frac12\Bigr) = \frac94.$ The curve dips below the axis on $(0, 1)$, and that area counts
negative. The total *geometric* area is $\int_{-1}^2 |x^3 - x|\,dx$: split at the roots $-1, 0, 1$, where
$\int_{-1}^0 = \frac14$, $\int_0^1 = -\frac14$ and $\int_1^2 = \frac94$, so the area is
$\frac14 + \frac14 + \frac94 = \frac{11}{4}$.

### When the theorem does not apply

**Example 14 (a classic mistake).** "Compute" $\int_{-1}^{1} \dfrac{dx}{x^2}$ with the antiderivative $-1/x$:

$$
\Bigl[-\frac1x\Bigr]_{-1}^{1} = -1 - 1 = -2.
$$

A positive function with a negative integral: something is wrong. The hypotheses fail twice. The integrand is not
bounded near 0, so it is not Riemann integrable on $[-1, 1]$; and $-1/x$ is not continuous on $[-1, 1]$, let alone an
antiderivative across 0. The area is in fact infinite (Chapter 11, improper integrals). **Always check that $F$ is an
antiderivative on the whole closed interval** (continuous there, derivative $f$ inside).

### Two warnings for later

*Level: advanced.*

1. *An integrable function need not have an antiderivative.* The step function of Example 2 is integrable, but no
   function $F$ has $F' = f$ on an interval containing 3, because derivatives cannot jump: by Darboux's theorem, a
   derivative always has the intermediate value property, even when it is not continuous (this is an exercise in
   Chapter 6's spirit; see Spivak, Chapter 11). Its accumulation function satisfies $A' = f$ everywhere except at 3,
   which is good enough for Theorem 9.3 applied on $[0, 3]$ and $[3, 5]$ separately.
2. *A function can have an antiderivative and not be integrable.* $F(x) = x^2\sin(1/x^2)$ (with $F(0) = 0$) is
   differentiable everywhere, but $F'(x) = 2x\sin(1/x^2) - (2/x)\cos(1/x^2)$ for $x \ne 0$ is unbounded near 0, so
   $F'$ is not Riemann integrable on $[-1, 1]$. Worse, Vito Volterra built in 1881 a function whose derivative exists
   everywhere and is **bounded**, yet is still not Riemann integrable. Volterra's example was one of the problems that
   led Henri Lebesgue to a new integral, for which every bounded derivative is integrable and part 2 holds without
   extra hypotheses. That story is [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md).

That is why Theorem 9.3 states "$f$ integrable" as a separate hypothesis instead of letting it follow from "$F' = f$".

## 9.4 Antiderivatives

FTC 2 turns integration into a search: given $f$, find $F$ with $F' = f$. This section collects what we know and
fixes the notation.

**Notation.** The **indefinite integral** $\displaystyle\int f(x)\,dx$ means "the general antiderivative of $f$":

$$
\int x^2\,dx = \frac{x^3}{3} + C.
$$

The $C$ is an arbitrary constant. The symbol $\int f(x)\,dx$ with no limits is a *family of functions*;
$\int_a^b f(x)\,dx$ with limits is a *number*. FTC 2 is what links them, and it is why the same sign is used for both.

**Theorem 9.4 (antiderivatives on an interval).** If $F$ and $G$ are antiderivatives of $f$ on an interval $I$, then
$G = F + C$ for some constant $C$.

*Proof.* $(G - F)' = f - f = 0$ on $I$. For any $x < y$ in $I$, the mean value theorem gives some $c$ between them with
$(G-F)(y) - (G-F)(x) = 0\cdot(y - x) = 0$. So $G - F$ takes the same value everywhere on $I$. $\blacksquare$

The word **interval** matters. On the set $(-\infty, 0)\cup(0, \infty)$, which has a gap, the function

$$
F(x) = \begin{cases} \ln x + 1, & x > 0,\\ \ln(-x) - 5, & x < 0 \end{cases}
$$

has $F'(x) = 1/x$ everywhere it is defined, but it is not $\ln|x|$ plus a single constant. The honest general
antiderivative of $1/x$ is $\ln|x| + C_1$ for $x > 0$ and $\ln|x| + C_2$ for $x < 0$, with two independent
constants. Usually we write $\ln|x| + C$ and remember that $C$ may differ on each piece.

### The basic table

Every derivative rule from Chapters 4 and 5, read backwards, is an antiderivative rule. Each line can be checked by
differentiating the right side.

| $f(x)$ | $\displaystyle\int f(x)\,dx$ | note |
|---|---|---|
| $x^r$ | $\dfrac{x^{r+1}}{r+1} + C$ | $r \ne -1$ |
| $\dfrac1x$ | $\ln\lvert x\rvert + C$ | on each side of 0 |
| $e^x$ | $e^x + C$ | |
| $a^x$ | $\dfrac{a^x}{\ln a} + C$ | $a > 0$, $a \ne 1$ |
| $\sin x$ | $-\cos x + C$ | |
| $\cos x$ | $\sin x + C$ | |
| $\sec^2 x$ | $\tan x + C$ | |
| $\dfrac{1}{1+x^2}$ | $\arctan x + C$ | |
| $\dfrac{1}{\sqrt{1 - x^2}}$ | $\arcsin x + C$ | $\lvert x\rvert < 1$ |

**Linearity.** Since $(F + G)' = F' + G'$ and $(kF)' = kF'$,

$$
\int \bigl(f + g\bigr) = \int f + \int g, \qquad \int k f = k\int f.
$$

There is **no** product rule for antiderivatives that works like this: $\int fg$ is not $\int f \cdot \int g$
(try $f = g = 1$). The product rule, read backwards, gives integration by parts, which is Chapter 10's tool.

**Example 15.** $\displaystyle\int\Bigl(3x^2 - \frac{4}{x} + 5e^x - \frac{2}{\sqrt x}\Bigr)dx = x^3 - 4\ln|x| + 5e^x - 4\sqrt{x} + C$
(here $x > 0$ because of $\sqrt x$). *Check:* the derivative of $-4\sqrt x = -4x^{1/2}$ is $-2x^{-1/2}$. ✓

### Initial value problems

An antiderivative plus one known value pins down the constant. A problem of the form "$F' = f$, $F(x_0) = y_0$" is
called an **initial value problem**; it is the simplest kind of differential equation ([Chapter 14](14-Differential-Equations.md)).

**Example 16.** Find $F$ with $F'(x) = 3x^2 - 2$ and $F(1) = 4$. The general antiderivative is $x^3 - 2x + C$. Then
$F(1) = 1 - 2 + C = 4$ gives $C = 5$, so $F(x) = x^3 - 2x + 5$. *Check:* $F(1) = 1 - 2 + 5 = 4$. ✓

**Example 17 (throwing a stone on Mars).** Near the surface of Mars the acceleration of gravity is about
$g = 3.71\ \text{m/s}^2$, downward. A stone is thrown straight up at 20 m/s from the ground. Take height $s(t)$ in
metres, up positive, and ignore the thin air.

- Acceleration: $s''(t) = -3.71$.
- Antidifferentiate once: $s'(t) = v(t) = -3.71t + C_1$, and $v(0) = 20$ gives $C_1 = 20$.
- Antidifferentiate again: $s(t) = -1.855t^2 + 20t + C_2$, and $s(0) = 0$ gives $C_2 = 0$.

The stone stops rising when $v(t) = 0$, at $t = 20/3.71 \approx 5.39$ s, and its greatest height is

$$
s\Bigl(\frac{20}{3.71}\Bigr) = \frac{20^2}{2\cdot 3.71} \approx 53.9\ \text{m}.
$$

On Earth ($g \approx 9.81$) the same throw reaches about 20.4 m. *Check:* by symmetry the stone lands at
$t = 40/3.71 \approx 10.8$ s, where $s = t(20 - 1.855t) = 0$. ✓ [Chapter 7](07-Applications-of-Derivatives.md) did
this problem from the derivative side; here we went the other way, from acceleration back to position, which is how a
navigation computer actually works.

## 9.5 Net change

FTC 2 says something simple and powerful when we rename the functions. If a quantity $Q(t)$ changes at rate $Q'(t)$,
then

$$
\int_a^b Q'(t)\,dt = Q(b) - Q(a).
$$

**The integral of a rate of change is the net change.** This is the **net change theorem**, and it is just FTC 2 with
$F = Q$. It is the reason integrals appear all over science: whenever you know a rate (speed, flow, growth, power,
current), integrating it gives the total change in the thing it is the rate of (position, volume, population, energy,
charge).

**Example 18 (the tank).** Back to 9.1. Water flows in at $r(t) = 50 - 2t$ litres per minute for $0 \le t \le 30$.
For $t > 25$ the rate is negative: water flows out. The net change over half an hour is

$$
\int_0^{30} (50 - 2t)\,dt = \bigl[50t - t^2\bigr]_0^{30} = 1500 - 900 = 600\ \text{litres}.
$$

The amount in the tank peaks at $t = 25$, where the rate changes sign, at $\int_0^{25}(50 - 2t)\,dt = 625$ litres more
than at the start; the last five minutes lose 25 litres.

### Displacement and distance

If $v(t)$ is the velocity of a particle moving on a line, its position $s$ has $s' = v$, so

$$
\int_a^b v(t)\,dt = s(b) - s(a) = \text{displacement (net change in position)}.
$$

The **distance travelled** counts every metre, forwards or backwards, so it is the integral of the *speed* $|v(t)|$:

$$
\text{distance} = \int_a^b |v(t)|\,dt.
$$

**Example 19.** A particle has velocity $v(t) = t^2 - 4t + 3 = (t - 1)(t - 3)$ m/s for $0 \le t \le 4$.

- *Displacement:* $\displaystyle\int_0^4 (t^2 - 4t + 3)\,dt = \Bigl[\frac{t^3}{3} - 2t^2 + 3t\Bigr]_0^4 = \frac{64}{3} - 32 + 12 = \frac43$ m.
- *Distance:* $v > 0$ on $(0,1)$, $v < 0$ on $(1, 3)$, $v > 0$ on $(3, 4)$. With $S(t) = \frac{t^3}{3} - 2t^2 + 3t$:
  $S(1) - S(0) = \frac43$, $S(3) - S(1) = 0 - \frac43 = -\frac43$, and $S(4) - S(3) = \frac43 - 0 = \frac43$. The
  distance is $\frac43 + \frac43 + \frac43 = 4$ m.

The particle goes forward $\frac43$ m, back $\frac43$ m, then forward $\frac43$ m again: it ends $\frac43$ m from where
it began after travelling 4 m. *Check:* displacement $= \frac43 - \frac43 + \frac43 = \frac43$. ✓

### Average value

What is the average of infinitely many numbers $f(x)$, one for each $x$ in $[a, b]$? Sample $n$ equally spaced points
and average: $\frac1n\sum f(x_i) = \frac{1}{b - a}\sum f(x_i)\,\Delta x$, with $\Delta x = (b-a)/n$. That is a Riemann
sum divided by $b - a$. Letting $n \to \infty$ suggests the definition

$$
\overline{f} = \frac{1}{b - a}\int_a^b f(x)\,dx,
$$

the **average value** of $f$ on $[a, b]$. Geometrically, $\overline f$ is the height of the rectangle on $[a, b]$ with
the same (signed) area as the region under $f$.

**Example 20.** The average of $\sin x$ over one arch $[0, \pi]$ is $\frac{1}{\pi}\cdot 2 = \frac{2}{\pi} \approx 0.637$.
The average of $\sin^2 x$ over the same interval is $\frac{1}{\pi}\int_0^\pi \sin^2 x\,dx = \frac1\pi\cdot\frac\pi2 = \frac12$ (Chapter 10 computes that integral). The second fact is why the "effective" value of an alternating voltage
of peak $V$ is $V/\sqrt2$: power goes as the square of the voltage, and the square averages to half its peak.

**Example 21 (average speed).** For the stone of Example 17, the average velocity over the upward flight
$[0, 20/3.71]$ is $\frac{\text{displacement}}{\text{time}} = \frac{53.9}{5.39} \approx 10$ m/s, which is exactly the
average of the starting and ending velocities 20 and 0. That is a special fact about constant acceleration (velocity
is linear in $t$), not a general rule.

**Theorem 9.5 (mean value theorem for integrals).** If $f$ is continuous on $[a, b]$, there is a point $c$ in
$[a, b]$ with

$$
f(c) = \frac{1}{b - a}\int_a^b f(x)\,dx.
$$

*Proof.* By the extreme value theorem (Chapter 3), $f$ has a minimum value $m$ and a maximum value $M$ on $[a, b]$.
Since $m \le f \le M$, monotonicity of the integral gives $m(b - a) \le \int_a^b f \le M(b - a)$, so the average
$\overline f$ lies between $m$ and $M$. The function $f$ takes the values $m$ and $M$ somewhere, and by the
intermediate value theorem (Chapter 3) it takes every value in between, $\overline f$ included. $\blacksquare$

*Second proof.* Apply the ordinary mean value theorem to $A(x) = \int_a^x f$, which is differentiable with $A' = f$ by
FTC 1: there is $c$ in $(a, b)$ with $A(b) - A(a) = A'(c)(b - a) = f(c)(b - a)$. (This version even puts $c$ strictly
inside.)

So the integral mean value theorem is the derivative mean value theorem seen through FTC: "average rate of change
equals some instantaneous rate" becomes "average value equals some actual value".

## 9.6 Newton and Leibniz

Neither half of the fundamental theorem appeared out of nowhere. By the 1630s and 1640s, Fermat, Descartes, Roberval,
Cavalieri, Torricelli and others had methods for tangents and for areas of particular curves; Fermat found areas
under $y = x^n$ for many $n$. Isaac Barrow, Newton's predecessor as Lucasian professor at Cambridge, published in his
*Lectiones Geometricae* (1670) a geometric theorem that is recognisably a version of the inverse relation between
tangents and areas, and James Gregory published a related result. What was missing was a **method**: a general way to
compute, with notation and rules, that made the inverse relation the centre of a working calculus.

**Isaac Newton** worked out his "method of fluxions" mostly in 1665 and 1666, while Cambridge was closed by plague. He
thought of quantities as flowing in time (*fluents*) with rates of flow (*fluxions*), and he used the inverse relation
between the two problems systematically, together with infinite series, to compute areas. He wrote it up in
manuscripts, including *De analysi* (circulated among a few mathematicians in 1669) and a longer treatise on fluxions
written around 1671, but he did not publish them then. The fluxions treatise appeared in print only in 1736, after
his death. His *Principia* (1687) used mostly geometric arguments.

**Gottfried Wilhelm Leibniz** developed his calculus independently in Paris from about 1673 to 1676. He invented the
notation we still use: in his manuscripts of 1675 he wrote $\int$ (a long S, for *summa*) for the sum of infinitely
many thin strips and $d$ for a difference, and he treated $\int$ and $d$ as inverse operations. He published first:
the differential calculus in 1684 ("Nova methodus pro maximis et minimis", in *Acta Eruditorum*), and the integral
calculus in 1686. Leibniz's notation made the rules almost automatic: the chain rule looks like
$\frac{dy}{dx} = \frac{dy}{du}\frac{du}{dx}$, and substitution (Chapter 10) looks like a change of letters. The Bernoulli
brothers, l'Hôpital and others learned the calculus from his papers and spread it across Europe.

**The priority dispute.** Newton had the method first; Leibniz published first. Leibniz had visited London in 1673 and
1676 and had corresponded with Newton (through Henry Oldenburg, secretary of the Royal Society) in 1676, letters in
which Newton described some of his results, partly in a cipher. From around 1699, and openly after 1708, supporters of
Newton accused Leibniz of having taken his ideas from Newton; Leibniz and his supporters answered, and later suggested
that Newton had borrowed from Leibniz. In 1712 the Royal Society, of which Newton was then President, appointed a
committee whose report, the *Commercium epistolicum*, found in Newton's favour; Newton himself had a large and
unacknowledged hand in preparing it. The quarrel outlived both men and soured relations between English and
continental mathematicians for decades.

The modern view of historians who have studied the manuscripts (see the books by A. Rupert Hall and Richard Westfall
below) is that **both men discovered the calculus independently**: Newton earlier, Leibniz in a form and notation
that were published first and spread faster. Neither proved the theorem the way Section 9.3 does, because neither had
a precise definition of the limit or of the integral. Augustin-Louis Cauchy gave a proof for continuous functions in
his *Résumé des leçons* of 1823, defining the integral as a limit of sums; Bernhard Riemann's definition (1854,
published after his death) widened the class of functions; Darboux's upper and lower sums (1875) are the form used in
[Chapter 8](08-The-Integral.md) and in our proof of part 2.

## Check yourself

??? question "1. Find $A(x) = \int_1^x (2t + 1)\,dt$ as a formula, and check that $A' = 2x + 1$ and $A(1) = 0$."

    By FTC 2 with antiderivative $t^2 + t$: $A(x) = (x^2 + x) - (1 + 1) = x^2 + x - 2$. Then $A'(x) = 2x + 1$ ✓
    and $A(1) = 1 + 1 - 2 = 0$ ✓.

??? question "2. Compute $\int_1^9 \sqrt{x}\,dx$ and $\int_0^{\ln 2} e^x\,dx$."

    $\int_1^9 x^{1/2}\,dx = \bigl[\tfrac23 x^{3/2}\bigr]_1^9 = \tfrac23(27 - 1) = \tfrac{52}{3}$.

    $\int_0^{\ln 2} e^x\,dx = e^{\ln 2} - e^0 = 2 - 1 = 1$.

??? question "3. Differentiate $F(x) = \int_0^{\sin x} e^{-t^2}\,dt$."

    With $G(u) = \int_0^u e^{-t^2}\,dt$, FTC 1 gives $G'(u) = e^{-u^2}$, and the chain rule gives
    $F'(x) = e^{-\sin^2 x}\cos x$.

??? question "4. Differentiate $K(x) = \int_{x}^{3x} \frac{dt}{t}$ for $x > 0$ in two ways, and explain the answer."

    By the rule for moving limits: $K'(x) = \frac{1}{3x}\cdot 3 - \frac{1}{x}\cdot 1 = 0$.

    Directly: $K(x) = \ln(3x) - \ln x = \ln 3$, a constant, so $K' = 0$. The area under $1/t$ from $x$ to $3x$ does
    not depend on $x$: stretching the interval by a factor $\lambda$ and shrinking the height by $1/\lambda$ keeps the
    area fixed. This scaling property is exactly the law $\ln(ab) = \ln a + \ln b$.

??? question "5. Find $F$ with $F''(x) = 6x$, $F'(0) = 1$ and $F(0) = 2$."

    $F'(x) = 3x^2 + C_1$, and $F'(0) = 1$ gives $C_1 = 1$. Then $F(x) = x^3 + x + C_2$, and $F(0) = 2$ gives
    $C_2 = 2$. So $F(x) = x^3 + x + 2$. *Check:* $F'' = 6x$ ✓, $F'(0) = 1$ ✓, $F(0) = 2$ ✓.

??? question "6. A car's velocity is $v(t) = 6t - t^2$ m/s for $0 \le t \le 6$. How far does it go, and what is its average velocity?"

    $v = t(6 - t) \ge 0$ on $[0, 6]$, so distance equals displacement:
    $\int_0^6 (6t - t^2)\,dt = [3t^2 - t^3/3]_0^6 = 108 - 72 = 36$ m. The average velocity is $36/6 = 6$ m/s.
    (The peak speed is 9 m/s at $t = 3$; the average of a parabolic arch is $\frac23$ of its peak.)

??? question "7. What is wrong with $\int_0^{\pi} \sec^2 x\,dx = [\tan x]_0^\pi = 0$?"

    $\sec^2 x = 1/\cos^2 x$ is unbounded near $x = \pi/2$, so it is not integrable on $[0, \pi]$, and $\tan x$ is not
    continuous (not even defined) at $\pi/2$, so it is not an antiderivative on the whole interval. FTC 2 does not
    apply. The integrand is positive, so a value of 0 is impossible; in fact the area is infinite.

??? question "8. Find the average value of $f(x) = x^2$ on $[0, 3]$ and a point $c$ where $f(c)$ equals it."

    $\overline f = \frac13\int_0^3 x^2\,dx = \frac13\cdot 9 = 3$. Then $c^2 = 3$ gives $c = \sqrt3 \approx 1.732$,
    which is in $[0, 3]$ as Theorem 9.5 promises.

??? question "9. Use FTC 1 to find $\displaystyle\lim_{h\to0}\frac1h\int_2^{2+h}\sqrt{1 + t^3}\,dt$."

    This is $\frac{A(2+h) - A(2)}{h}$ for $A(x) = \int_2^x\sqrt{1+t^3}\,dt$, whose limit is $A'(2) = \sqrt{1 + 8} = 3$.

??? question "10. Let $f$ be continuous and suppose $\int_0^x f(t)\,dt = x^2\cos x$ for all $x$. Find $f(\pi)$."

    Differentiate both sides (FTC 1 on the left): $f(x) = 2x\cos x - x^2\sin x$. So
    $f(\pi) = 2\pi\cdot(-1) - \pi^2\cdot 0 = -2\pi$.

??? question "11. Show that if $f$ is continuous on $[a,b]$, $f \ge 0$ and $\int_a^b f = 0$, then $f = 0$ everywhere on $[a, b]$."

    Suppose $f(c) > 0$ for some $c$. By continuity there is $\delta > 0$ with $f(x) > f(c)/2$ for all $x$ in
    $[a,b]$ with $|x - c| < \delta$; this set contains an interval $J$ of some length $\ell > 0$. Then, since $f \ge 0$
    elsewhere, $\int_a^b f \ge \int_J f \ge \frac{f(c)}{2}\,\ell > 0$, a contradiction. (Equivalently: $A(x) = \int_a^x f$
    is non-decreasing with $A(a) = A(b) = 0$, so $A \equiv 0$ and $f = A' = 0$.) Without continuity this fails: a
    function that is 1 at a single point and 0 elsewhere has integral 0.

??? question "12. Prove that if $f$ is continuous and $g, h$ are differentiable, then $\frac{d}{dx}\int_{h(x)}^{g(x)} f(t)\,dt = f(g(x))g'(x) - f(h(x))h'(x)$."

    Fix a point $a$ and let $A(u) = \int_a^u f(t)\,dt$. By FTC 1, $A' = f$. By additivity,
    $\int_{h(x)}^{g(x)} f = A(g(x)) - A(h(x))$. By the chain rule its derivative is
    $A'(g(x))g'(x) - A'(h(x))h'(x) = f(g(x))g'(x) - f(h(x))h'(x)$. $\blacksquare$

## What you learned

- The accumulation function $A(x) = \int_a^x f$ is always continuous (Lipschitz if $|f| \le M$): integration smooths.
- FTC 1: where $f$ is continuous, $A' = f$. Every continuous function has an antiderivative.
- FTC 2: if $F' = f$ and $f$ is integrable, then $\int_a^b f = F(b) - F(a)$; the proof applies the mean value theorem
  on each piece of a partition, so $F(b) - F(a)$ is a Riemann sum for every partition.
- Antiderivatives on an interval differ by a constant; on a set with gaps, by a different constant on each piece.
- The integral of a rate is the net change; distance is the integral of speed $|v|$, displacement the integral of $v$.
- The average value of $f$ on $[a,b]$ is $\frac{1}{b-a}\int_a^b f$, and a continuous $f$ attains it.
- Newton and Leibniz found the calculus independently; Leibniz's notation is the one we use.

**Next:** [Chapter 10](10-Techniques-of-Integration.md), the toolkit for finding antiderivatives (substitution, parts,
partial fractions) and what to do when no formula exists.

## Further reading

- M. Spivak, *Calculus*, 4th edition, 2008, Chapters 13 and 14 (integrals and the fundamental theorem, with Darboux's theorem in the problems of Chapter 11).
- T. M. Apostol, *Calculus*, Volume 1, 2nd edition, 1967, Chapters 1 and 5 (integration before differentiation, as in this book's order of ideas).
- R. Courant and F. John, *Introduction to Calculus and Analysis*, Volume I, 1965, Chapter 2.
- E. Hairer and G. Wanner, *Analysis by Its History*, 1996, Chapter II (the history and the mathematics side by side).
- C. H. Edwards, Jr., *The Historical Development of the Calculus*, 1979 (the chapters on Barrow, Newton and Leibniz).
- A. R. Hall, *Philosophers at War: The Quarrel between Newton and Leibniz*, 1980.
- R. S. Westfall, *Never at Rest: A Biography of Isaac Newton*, 1980.
- On this site: the Topics lessons [Areas under curves and the fundamental theorem](../../topics/change/level-8/06-area-fundamental-theorem.md)
  and [Velocity and acceleration](../../topics/change/level-7/06-velocity-acceleration.md); the U of T guides
  [MAT137 Unit 8: The Fundamental Theorem of Calculus](../../uoft/MAT137/unit08.md),
  [MAT158H1 Unit 10: The Fundamental Theorem of Calculus](../../uoft/MAT158H1/unit10.md) and
  [MAT159H1 Unit 1: FTC, Transcendentals and Integration Techniques](../../uoft/MAT159H1/unit01.md); and the
  [Calculus book's contents](index.md).
