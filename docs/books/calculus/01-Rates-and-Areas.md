# 1. Rates and areas

*Calculus began as two separate puzzles. The first: a stone is falling, faster every moment; how fast is it going
at one exact instant, when in an instant it covers no distance at all? The second: a shape has a curved edge; how
much area does it hold, when no number of squares fits it exactly? In this chapter you will attack both puzzles
with nothing more than arithmetic, tables and patience. You will squeeze an instantaneous speed out of shorter and
shorter averages, trap a curved area between rectangles, follow Archimedes as he finds the area of a parabolic
segment exactly, and end with the surprise that turned two puzzles into one subject: each question is the other
one run backwards.*

!!! abstract "In this chapter"
    **You will learn:**

    - the two questions that calculus answers: the rate at an instant, and the area under a curve
    - how average speeds over shorter and shorter time intervals home in on a speed at one instant
    - how to trap an area between lower and upper rectangle sums, and why the trap closes
    - how Archimedes found the area of a parabolic segment exactly, with a complete proof by exhaustion
    - why the two questions are inverse to each other, a first look at the fundamental theorem of calculus

    **You need:** school arithmetic, fractions and the graph of $y = x^2$. The algebra book's
    [Chapter 6](../algebra/06-Functions.md) explains functions and graphs if they are new.
    Gentler versions on the Topics shelf: [Fast and slow](../../topics/change/level-1/02-fast-and-slow.md),
    [Comparing speeds fairly](../../topics/change/level-2/02-comparing-speeds.md),
    [Average speed for a trip](../../topics/change/level-3/06-average-speed.md),
    [Speed-time graphs](../../topics/change/level-4/03-speed-time-graphs.md),
    [Falling, on Earth and on Mars](../../topics/change/level-5/05-falling-bodies.md),
    [Area under speed-time graphs](../../topics/change/level-5/06-area-speed-time.md) and
    [Shrinking the interval](../../topics/change/level-6/02-shrinking-interval.md).

    **Levels:** 1.1 to 1.3 are beginner; 1.4 is intermediate; 1.5 is beginner to intermediate.

## 1.1 Two old questions

Here are two questions that sound innocent.

**Question 1 (the rate question).** A car's speedometer says 60 kilometres per hour. What does that number mean?
It does not mean the car will travel 60 kilometres in the next hour; it might stop at a light in ten seconds. It
does not mean it travelled 60 kilometres in the last hour. It claims to be the speed *right now*. But "right now"
is a single instant, and in a single instant the car moves no distance in no time. Speed is distance divided by
time, and $0 \div 0$ means nothing. So what is the speedometer measuring?

**Question 2 (the area question).** How much area lies under the curve $y = x^2$ between $x = 0$ and $x = 1$? The
region has two straight sides, a straight bottom and a curved top. Areas of rectangles and triangles are easy:
length times width, half base times height. But no finite number of rectangles fits under a curve exactly. So what
does "the area" of a curved region even mean, and how could you compute it?

These look unrelated. One is about motion and time, the other about shapes and space. Yet both have the same
difficulty at their heart: the answer is something we can only *approach*, by a process that never stops. Speeds
over shorter and shorter time intervals; rectangles thinner and thinner. Calculus is the mathematics of what those
endless processes are heading towards.

Two words before we start.

- A **rate** is how fast one quantity changes compared with another: metres per second, litres per minute,
  dollars per year. Speed is the rate at which distance changes with time.
- A **function** is a rule that gives exactly one output for each input. We write $s(t)$ for "the distance at time
  $t$", read "s of t". The graph of a function is the picture of all its input-output pairs.

The plan of this chapter is to answer both questions *numerically*, as well as we like, using only arithmetic.
Then we will find, almost by accident, that the two answers are tied together. The exact, rigorous version of
every idea here (limits, the derivative, the integral) takes the next eight chapters. Here we get the feel of it.

## 1.2 Average speed and instantaneous speed

Drop a stone from a high cliff. Since Galileo's experiments in the early 1600s (with balls rolling down slopes,
which slow the fall enough to time it), we know that, ignoring air resistance, the distance fallen grows with the
**square** of the time. Near the Earth's surface, with $t$ in seconds and distance in metres,

$$
s(t) = 4.9\,t^2 .
$$

The 4.9 is half of $g = 9.8$ metres per second per second, the Earth's gravitational acceleration. (Why "half"
will be clear in section 1.5.) Here is the table:

| time $t$ (s) | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| distance $s(t)$ (m) | 0 | 4.9 | 19.6 | 44.1 | 78.4 | 122.5 |

The **average speed** over a time interval is the distance covered divided by the time taken:

$$
\text{average speed from } t = a \text{ to } t = b \;=\; \frac{s(b) - s(a)}{b - a}.
$$

From $t = 1$ to $t = 2$ the stone falls $19.6 - 4.9 = 14.7$ metres in 1 second, an average of 14.7 m/s. From
$t = 2$ to $t = 3$ it falls $44.1 - 19.6 = 24.5$ metres: 24.5 m/s. The stone is speeding up, so each second's
average is bigger than the last.

Now the rate question. **How fast is the stone moving at exactly $t = 1$?** We cannot divide by a zero time
interval, but we can take a short interval starting at $t = 1$ and shrink it. Write $h$ for the length of the
interval, so it runs from $t = 1$ to $t = 1 + h$.

| interval length $h$ (s) | $s(1+h)$ (m) | distance $s(1+h) - s(1)$ | average speed (m/s) |
|---|---|---|---|
| 1 | 19.6 | 14.7 | 14.7 |
| 0.5 | 11.025 | 6.125 | 12.25 |
| 0.1 | 5.929 | 1.029 | 10.29 |
| 0.01 | 4.99849 | 0.04949 | 9.849 |
| 0.001 | 4.9098049 | 0.0049049 | 9.8049 |

The averages are settling down. They are heading towards **9.8 m/s**. Nobody has divided by zero; we have
watched a sequence of honest averages and seen where they are going.

Algebra shows *why* they go to 9.8. For any $h \neq 0$,

$$
\frac{s(1+h) - s(1)}{h} = \frac{4.9(1 + 2h + h^2) - 4.9}{h} = \frac{4.9(2h + h^2)}{h} = 9.8 + 4.9h .
$$

Dividing by $h$ was allowed, because $h$ is not zero. The result $9.8 + 4.9h$ is a plain expression, and as $h$
gets smaller it gets closer and closer to $9.8$. We can make it as close to $9.8$ as we please: to be within
$0.001$, take $h$ below $0.001/4.9 \approx 0.0002$. So we *define* the speed at the instant $t = 1$ to be $9.8$
m/s. That is the **instantaneous speed**: the value the average speeds approach as the interval shrinks to
nothing.

**Check.** Intervals that end at $t = 1$ instead of starting there give
$\frac{s(1) - s(1-h)}{h} = 9.8 - 4.9h$, which approaches 9.8 from below. Both sides agree.

The same algebra at any time $a$ gives

$$
\frac{s(a+h) - s(a)}{h} = \frac{4.9(2ah + h^2)}{h} = 9.8a + 4.9h ,
$$

which approaches $9.8a$. So the speed at time $t$ is $v(t) = 9.8\,t$: 9.8 m/s after one second, 19.6 m/s after
two, 29.4 m/s after three. The speed grows by 9.8 m/s every second, which is exactly what "acceleration of 9.8
metres per second per second" means.

**Worked example: falling on Mars.** Mars is smaller than Earth, and a stone there accelerates at only about
$3.71$ m/s$^2$. The fall law is $s(t) = 1.855\,t^2$ (half of 3.71). The average speed from $t = a$ to $t = a + h$
is

$$
\frac{1.855\big((a+h)^2 - a^2\big)}{h} = 1.855(2a + h) = 3.71a + 1.855h,
$$

which approaches $3.71a$. After 2 seconds a stone on Mars is falling at $7.42$ m/s and has fallen
$1.855 \times 4 = 7.42$ metres. On Earth the same 2 seconds give 19.6 m/s and 19.6 metres.
**Check:** $3.71 \times 2 = 7.42$ and $1.855 \times 2^2 = 7.42$; that both numbers are equal at $t = 2$ is a
coincidence of this time (speed $= 2s/t$ for this law, so they agree only when $t = 2$).

### What we did, in one sentence

To find a rate at an instant, take the average rate over a short interval, simplify while the interval is not
zero, then see what the result approaches as the interval shrinks. Chapter 4 names the answer the **derivative**,
and Chapter 2 makes "approaches" precise.

### The picture: secants and tangents

On a graph of $s$ against $t$, the average speed from $t = a$ to $t = b$ is the **slope** (rise over run) of the
straight line joining the two points $(a, s(a))$ and $(b, s(b))$. Such a line, cutting the curve in two points, is
called a **secant** (from the Latin for "cutting"). As $b$ slides towards $a$, the secants swing round and settle
on one line that just touches the curve at $(a, s(a))$: the **tangent** line. So the instantaneous speed is the
slope of the tangent. The rate question and the tangent question (what is the slope of a curve at a point?) are
the same question in two costumes. Mathematicians of the 1600s, Fermat and Descartes among them, attacked it as a
question about tangents to curves.

## 1.3 Areas by rectangles

Now the area question. Let $A$ be the area under $y = x^2$ from $x = 0$ to $x = 1$: the region above the $x$-axis,
below the curve, between the vertical lines $x = 0$ and $x = 1$.

We know areas of rectangles, so trap $A$ between two staircases. Cut $[0, 1]$ into $n$ equal pieces of width
$1/n$. On each piece, the curve rises from left to right, because $x^2$ grows as $x$ grows (for $x \ge 0$). So:

- a rectangle whose height is the value at the **right** end of the piece reaches above the curve, and
- a rectangle whose height is the value at the **left** end stays below it.

Adding the tall rectangles gives an **upper sum** $U_n$ that is too big; adding the short ones gives a **lower
sum** $L_n$ that is too small:

$$
L_n \le A \le U_n .
$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 245" role="img" aria-label="The curve y equals x squared from 0 to 1 with five upper rectangles in orange reaching above the curve and five lower rectangles in blue staying under it">
  <rect x="40.0" y="212.4" width="56.0" height="7.6" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="0.8"/>
  <rect x="96.0" y="189.6" width="56.0" height="30.4" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="0.8"/>
  <rect x="152.0" y="151.6" width="56.0" height="68.4" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="0.8"/>
  <rect x="208.0" y="98.4" width="56.0" height="121.6" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="0.8"/>
  <rect x="264.0" y="30.0" width="56.0" height="190.0" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="0.8"/>
  <rect x="96.0" y="212.4" width="56.0" height="7.6" fill="#9cc9ea" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <rect x="152.0" y="189.6" width="56.0" height="30.4" fill="#9cc9ea" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <rect x="208.0" y="151.6" width="56.0" height="68.4" fill="#9cc9ea" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <rect x="264.0" y="98.4" width="56.0" height="121.6" fill="#9cc9ea" fill-opacity="0.8" stroke="currentColor" stroke-width="0.8"/>
  <polyline points="40.0,220.0 42.8,220.0 45.6,219.9 48.4,219.8 51.2,219.7 54.0,219.5 56.8,219.3 59.6,219.1 62.4,218.8 65.2,218.5 68.0,218.1 70.8,217.7 73.6,217.3 76.4,216.8 79.2,216.3 82.0,215.7 84.8,215.1 87.6,214.5 90.4,213.8 93.2,213.1 96.0,212.4 98.8,211.6 101.6,210.8 104.4,209.9 107.2,209.1 110.0,208.1 112.8,207.2 115.6,206.1 118.4,205.1 121.2,204.0 124.0,202.9 126.8,201.7 129.6,200.5 132.4,199.3 135.2,198.0 138.0,196.7 140.8,195.4 143.6,194.0 146.4,192.6 149.2,191.1 152.0,189.6 154.8,188.1 157.6,186.5 160.4,184.9 163.2,183.2 166.0,181.5 168.8,179.8 171.6,178.0 174.4,176.2 177.2,174.4 180.0,172.5 182.8,170.6 185.6,168.6 188.4,166.6 191.2,164.6 194.0,162.5 196.8,160.4 199.6,158.3 202.4,156.1 205.2,153.9 208.0,151.6 210.8,149.3 213.6,147.0 216.4,144.6 219.2,142.2 222.0,139.7 224.8,137.2 227.6,134.7 230.4,132.1 233.2,129.5 236.0,126.9 238.8,124.2 241.6,121.5 244.4,118.7 247.2,116.0 250.0,113.1 252.8,110.3 255.6,107.3 258.4,104.4 261.2,101.4 264.0,98.4 266.8,95.3 269.6,92.2 272.4,89.1 275.2,85.9 278.0,82.7 280.8,79.5 283.6,76.2 286.4,72.9 289.2,69.5 292.0,66.1 294.8,62.7 297.6,59.2 300.4,55.7 303.2,52.1 306.0,48.5 308.8,44.9 311.6,41.2 314.4,37.5 317.2,33.8 320.0,30.0" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="30.0" y1="220.0" x2="340.0" y2="220.0" stroke="currentColor" stroke-width="1.2"/>
  <line x1="40.0" y1="230.0" x2="40.0" y2="15.0" stroke="currentColor" stroke-width="1.2"/>
  <line x1="40.0" y1="217.0" x2="40.0" y2="223.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="40.0" y="236.0" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <line x1="96.0" y1="217.0" x2="96.0" y2="223.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="96.0" y="236.0" font-size="11" text-anchor="middle" fill="currentColor">0.2</text>
  <line x1="152.0" y1="217.0" x2="152.0" y2="223.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="152.0" y="236.0" font-size="11" text-anchor="middle" fill="currentColor">0.4</text>
  <line x1="208.0" y1="217.0" x2="208.0" y2="223.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="208.0" y="236.0" font-size="11" text-anchor="middle" fill="currentColor">0.6</text>
  <line x1="264.0" y1="217.0" x2="264.0" y2="223.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="264.0" y="236.0" font-size="11" text-anchor="middle" fill="currentColor">0.8</text>
  <line x1="320.0" y1="217.0" x2="320.0" y2="223.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="320.0" y="236.0" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <line x1="37.0" y1="30.0" x2="43.0" y2="30.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="32.0" y="34.0" font-size="11" text-anchor="end" fill="currentColor">1</text>
  <text x="240.0" y="60.0" font-size="12" text-anchor="start" fill="currentColor">y = x²</text>
</svg>
</div>

With $n = 4$ the pieces are $[0, \tfrac14], [\tfrac14, \tfrac12], [\tfrac12, \tfrac34], [\tfrac34, 1]$. The right
ends are $\tfrac14, \tfrac12, \tfrac34, 1$, with squares $\tfrac1{16}, \tfrac4{16}, \tfrac9{16}, \tfrac{16}{16}$.
Each rectangle has width $\tfrac14$, so

$$
U_4 = \tfrac14\left(\tfrac{1 + 4 + 9 + 16}{16}\right) = \frac{30}{64} = 0.46875 .
$$

The left ends are $0, \tfrac14, \tfrac12, \tfrac34$, so $L_4 = \tfrac14 \cdot \tfrac{0 + 1 + 4 + 9}{16}
= \tfrac{14}{64} = 0.21875$. The area lies between 0.21875 and 0.46875. Not very precise yet, but it is a fact,
not a guess.

More rectangles tighten the trap.

| $n$ | lower sum $L_n$ | upper sum $U_n$ | gap $U_n - L_n$ |
|---|---|---|---|
| 4 | 0.21875 | 0.46875 | 0.25 |
| 10 | 0.285 | 0.385 | 0.1 |
| 100 | 0.32835 | 0.33835 | 0.01 |
| 1000 | 0.3328335 | 0.3338335 | 0.001 |

The two columns close in on $0.333\ldots$, which suggests $A = \tfrac13$. To be sure we need a formula.

### A formula for the sums

With $n$ pieces, the right ends are $\tfrac1n, \tfrac2n, \ldots, \tfrac nn$, so

$$
U_n = \frac1n\left(\frac{1^2}{n^2} + \frac{2^2}{n^2} + \cdots + \frac{n^2}{n^2}\right) = \frac{1^2 + 2^2 + \cdots + n^2}{n^3}.
$$

We need the sum of the first $n$ squares.

**Claim.** $1^2 + 2^2 + \cdots + n^2 = \dfrac{n(n+1)(2n+1)}{6}$.

**Proof (telescoping).** For every whole number $k$, expanding gives $(k+1)^3 - k^3 = 3k^2 + 3k + 1$. Write this
line down for $k = 1, 2, \ldots, n$ and add all $n$ lines. On the left almost everything cancels: $2^3 - 1^3$
plus $3^3 - 2^3$ plus ... plus $(n+1)^3 - n^3$ leaves only $(n+1)^3 - 1$. On the right we get
$3S + 3\cdot\frac{n(n+1)}{2} + n$, where $S$ is the sum of squares we want and $\frac{n(n+1)}2$ is the sum
$1 + 2 + \cdots + n$. So

$$
3S = (n+1)^3 - 1 - \tfrac32 n(n+1) - n = (n+1)\left[(n+1)^2 - \tfrac32 n - 1\right] = (n+1)\cdot\frac{2n^2 + n}{2},
$$

and $S = \frac{n(n+1)(2n+1)}{6}$. (In the middle step we used $(n+1)^3 - 1 - n = (n+1)^3 - (n+1)$.) $\square$

**Check:** $n = 4$ gives $\frac{4 \cdot 5 \cdot 9}{6} = 30 = 1 + 4 + 9 + 16$.

So

$$
U_n = \frac{(n+1)(2n+1)}{6n^2} = \frac13 + \frac1{2n} + \frac1{6n^2}, \qquad
L_n = \frac{(n-1)(2n-1)}{6n^2} = \frac13 - \frac1{2n} + \frac1{6n^2}.
$$

(For $L_n$ the left ends are $\tfrac0n, \ldots, \tfrac{n-1}n$, so we need the sum of the first $n-1$ squares:
replace $n$ by $n - 1$ in the claim.)

Now the argument is airtight. For every $n$, $L_n < \tfrac13 < U_n$: the upper sum is $\tfrac13$ plus positive
terms, and the lower sum is $\tfrac13$ minus $\tfrac1{2n} - \tfrac1{6n^2} = \tfrac{3n - 1}{6n^2} > 0$. And the
area $A$ is trapped in the same interval. Both $A$ and $\tfrac13$ lie between $L_n$ and $U_n$, whose gap is
$U_n - L_n = \tfrac1n$. So $A$ and $\tfrac13$ differ by less than $\tfrac1n$, **for every** $n$. The only
non-negative number smaller than $\tfrac1n$ for every $n$ is $0$. Therefore

$$
A = \frac13 .
$$

That last step is worth a second look, because it is the logical pattern of the whole of calculus. We never
added up "infinitely many infinitely thin rectangles". We showed that any other answer would be wrong by some
definite amount, and then made the rectangles thin enough to rule that amount out. Archimedes argued the same way,
as you will see next.

**Scaling.** The same method on $[0, b]$ gives area $\tfrac{b^3}3$ (try it: each width is $\tfrac bn$ and each
height carries a factor $b^2$, so every sum is multiplied by $b^3$). So the area under $y = x^2$ from $0$ to $2$ is
$\tfrac83$, and from $1$ to $2$ it is $\tfrac83 - \tfrac13 = \tfrac73$.

### Area means accumulated quantity

Areas under graphs are not only geometry. If a car moves at a *constant* 20 m/s for 30 s, it covers
$20 \times 30 = 600$ m, which is the area of a rectangle 30 wide and 20 high under the speed-time graph. If the
speed changes, cut time into short pieces on which the speed is nearly constant, and add up speed times time on
each piece: that is a rectangle sum under the speed graph. So

$$
\text{distance travelled} = \text{area under the speed-time graph}.
$$

For the falling stone, $v(t) = 9.8t$ is a straight line, and the area under it from $0$ to $3$ is a triangle:
$\tfrac12 \times 3 \times 29.4 = 44.1$. And the table in 1.2 says $s(3) = 44.1$. Keep this in mind for section 1.5.

**Try it in Python.** A few lines compute rectangle sums for any function.

```python
def sums(f, a, b, n):
    w = (b - a) / n
    left  = sum(f(a + k * w) for k in range(n)) * w
    right = sum(f(a + (k + 1) * w) for k in range(n)) * w
    return left, right

print(sums(lambda x: x * x, 0, 1, 1000))   # (0.3328335, 0.3338335) up to rounding
```

<figure class="play" data-play="riemann"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> The area under y = x² from 0 to 2 by rectangles. More, thinner rectangles close in on the exact 8/3.</figcaption></figure>

## 1.4 Archimedes and the parabola

*Level: intermediate.*

About 2250 years ago, Archimedes of Syracuse found the exact area of a region bounded by a parabola and a straight
line, with no algebra, no coordinates and no formula for sums of squares. He wrote it up in a work now called
*Quadrature of the Parabola* ("quadrature" means finding a square, or any rectilinear figure, of the same area). His
result:

> **Theorem (Archimedes).** The area of a parabolic segment is $\tfrac43$ of the area of the triangle inscribed in
> it with the same base and the same height.

A **parabolic segment** is the region between a parabola and a chord (a straight line segment joining two points
of the parabola). The **inscribed triangle** has the chord as its base, and its third vertex is the point of the
parabola where the tangent line is parallel to the chord; that is the point of the arc farthest from the chord.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 235" role="img" aria-label="A parabolic segment cut off by the chord AB. The big blue triangle ABC has its apex C where the tangent is parallel to AB. Two green triangles fill the next gaps, then four small orange triangles, and the dashed line through C is the tangent parallel to the chord">
  <polygon points="30.0,30.0 330.0,30.0 180.0,210.0" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="1"/>
  <polygon points="30.0,30.0 180.0,210.0 105.0,165.0" fill="#7ccf9a" fill-opacity="0.8" stroke="currentColor" stroke-width="1"/>
  <polygon points="180.0,210.0 330.0,30.0 255.0,165.0" fill="#7ccf9a" fill-opacity="0.8" stroke="currentColor" stroke-width="1"/>
  <polygon points="30.0,30.0 105.0,165.0 67.5,108.8" fill="#eea66f" fill-opacity="0.9" stroke="currentColor" stroke-width="0.8"/>
  <polygon points="105.0,165.0 180.0,210.0 142.5,198.8" fill="#eea66f" fill-opacity="0.9" stroke="currentColor" stroke-width="0.8"/>
  <polygon points="180.0,210.0 255.0,165.0 217.5,198.8" fill="#eea66f" fill-opacity="0.9" stroke="currentColor" stroke-width="0.8"/>
  <polygon points="255.0,165.0 330.0,30.0 292.5,108.8" fill="#eea66f" fill-opacity="0.9" stroke="currentColor" stroke-width="0.8"/>
  <polyline points="15.0,-7.8 18.0,0.0 21.0,7.8 24.0,15.3 27.0,22.7 30.0,30.0 33.0,37.1 36.0,44.1 39.0,51.0 42.0,57.6 45.0,64.2 48.0,70.6 51.0,76.9 54.0,83.0 57.0,89.0 60.0,94.8 63.0,100.5 66.0,106.0 69.0,111.4 72.0,116.7 75.0,121.8 78.0,126.8 81.0,131.6 84.0,136.3 87.0,140.8 90.0,145.2 93.0,149.4 96.0,153.6 99.0,157.5 102.0,161.3 105.0,165.0 108.0,168.5 111.0,171.9 114.0,175.2 117.0,178.2 120.0,181.2 123.0,184.0 126.0,186.7 129.0,189.2 132.0,191.6 135.0,193.8 138.0,195.9 141.0,197.8 144.0,199.6 147.0,201.3 150.0,202.8 153.0,204.2 156.0,205.4 159.0,206.5 162.0,207.4 165.0,208.2 168.0,208.8 171.0,209.4 174.0,209.7 177.0,209.9 180.0,210.0 183.0,209.9 186.0,209.7 189.0,209.4 192.0,208.8 195.0,208.2 198.0,207.4 201.0,206.5 204.0,205.4 207.0,204.2 210.0,202.8 213.0,201.3 216.0,199.6 219.0,197.8 222.0,195.9 225.0,193.8 228.0,191.6 231.0,189.2 234.0,186.7 237.0,184.0 240.0,181.2 243.0,178.2 246.0,175.2 249.0,171.9 252.0,168.5 255.0,165.0 258.0,161.3 261.0,157.5 264.0,153.6 267.0,149.4 270.0,145.2 273.0,140.8 276.0,136.3 279.0,131.6 282.0,126.8 285.0,121.8 288.0,116.7 291.0,111.4 294.0,106.0 297.0,100.5 300.0,94.8 303.0,89.0 306.0,83.0 309.0,76.9 312.0,70.6 315.0,64.2 318.0,57.6 321.0,51.0 324.0,44.1 327.0,37.1 330.0,30.0 333.0,22.7 336.0,15.3 339.0,7.8 342.0,0.0 345.0,-7.8" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="30.0" y1="30.0" x2="330.0" y2="30.0" stroke="currentColor" stroke-width="1.5"/>
  <line x1="15.0" y1="210.0" x2="345.0" y2="210.0" stroke="currentColor" stroke-width="0.8" stroke-dasharray="4 3"/>
  <text x="180.0" y="226.0" font-size="11" text-anchor="middle" fill="currentColor">C</text>
  <text x="24.0" y="24.0" font-size="11" text-anchor="end" fill="currentColor">A</text>
  <text x="336.0" y="24.0" font-size="11" text-anchor="start" fill="currentColor">B</text>
  <text x="180.0" y="70.0" font-size="11" text-anchor="middle" fill="currentColor">T</text>
</svg>
</div>

We will prove the theorem in modern coordinates, but following Archimedes' plan step by step. The plan has two
parts: fill the segment with triangles whose total area we can add up, then show by a double contradiction that
the segment's area can be neither more nor less than that total. This style of proof is called the **method of
exhaustion**, because the triangles "exhaust" the region.

### Step 1: the area of a triangle on the parabola

Use the parabola $y = x^2$. Take three points on it with $x$-coordinates $p < q < r$.

**Lemma 1.** The triangle with vertices $(p, p^2)$, $(q, q^2)$, $(r, r^2)$ has area $\tfrac12 (q - p)(r - q)(r - p)$.

**Proof.** The area of a triangle with vertices $(x_1, y_1), (x_2, y_2), (x_3, y_3)$ is half the absolute value of
$(x_2 - x_1)(y_3 - y_1) - (x_3 - x_1)(y_2 - y_1)$ (this is the "shoelace" or cross-product formula). Here

$$
(q - p)(r^2 - p^2) - (r - p)(q^2 - p^2) = (q - p)(r - p)\big[(r + p) - (q + p)\big] = (q - p)(r - p)(r - q),
$$

using $r^2 - p^2 = (r - p)(r + p)$ and $q^2 - p^2 = (q - p)(q + p)$. All three factors are positive. $\square$

Now take a chord from $x = a$ to $x = b$, of **width** $w = b - a$. The chord's slope is
$\frac{b^2 - a^2}{b - a} = a + b$. Where is the tangent parallel to it? The slope of $y = x^2$ at $x = m$ is $2m$
(by the algebra of 1.2: $\frac{(m+h)^2 - m^2}{h} = 2m + h \to 2m$). So $2m = a + b$, and $m = \frac{a+b}2$, the
midpoint. Lemma 1 with $p = a$, $q = m$, $r = b$ gives the inscribed triangle's area:

$$
T(w) = \tfrac12 \cdot \tfrac w2 \cdot \tfrac w2 \cdot w = \frac{w^3}{8}.
$$

It depends only on the width. That is the key fact.

### Step 2: the triangles at each stage

The inscribed triangle on the chord $AB$ (call its area $T$) leaves two smaller segments, on the chords $AC$ and
$CB$, each of width $\tfrac w2$. Each of those has its own inscribed triangle, of area
$\frac{(w/2)^3}8 = \tfrac18 T$. So the two new triangles together add $\tfrac28 T = \tfrac14 T$. They leave four
segments of width $\tfrac w4$, whose four triangles add $4 \cdot \frac{(w/4)^3}{8} = \tfrac1{16} T$, and so on.
At stage $k$ there are $2^k$ new triangles with total area $\tfrac1{4^k} T$.

After stages $0, 1, \ldots, n$ the triangles cover

$$
P_n = T\left(1 + \frac14 + \frac1{16} + \cdots + \frac1{4^n}\right) = \frac43 T - \frac13 \cdot \frac{T}{4^n}.
$$

The last equality is the finite geometric sum: if $G = 1 + \tfrac14 + \cdots + \tfrac1{4^n}$ then
$G - \tfrac14 G = 1 - \tfrac1{4^{n+1}}$, so $G = \tfrac43\left(1 - \tfrac1{4^{n+1}}\right) = \tfrac43 - \tfrac13
\cdot \tfrac1{4^n}$. Archimedes proved exactly this identity, in words: each term plus a third of itself equals a
third of the term before.

So the triangles always cover **less** than $\tfrac43 T$, but they get as close to $\tfrac43 T$ as we like.

### Step 3: the leftover shrinks

We still need to know that the triangles really fill the segment. Here Archimedes used a beautiful observation.

**Lemma 2.** The inscribed triangle covers more than half of its segment.

**Proof.** Draw the tangent line at $C$; it is parallel to the chord $AB$. Draw the lines through $A$ and $B$
parallel to the axis (vertical lines, in our picture) until they meet the tangent. Together with the chord, these
make a parallelogram with base $AB$ whose opposite side lies on the tangent. The triangle $ABC$ has the same base
and the same height as this parallelogram, so its area is exactly half the parallelogram. The parabola is
**convex** (it bends one way): between $A$ and $B$ it lies below the chord and above the tangent line. So the
whole segment sits inside the parallelogram, and it does not fill it (the parabola touches the tangent only at
$C$). Hence segment $<$ parallelogram $= 2 \times$ triangle. $\square$

Now let $S$ be the area of the whole segment, and let $R_n = S - P_n$ be the **leftover**: the total area of the
$2^{n+1}$ small segments not yet covered after stage $n$. Stage $n+1$ puts a triangle into each of those small
segments, and by Lemma 2 each triangle takes more than half of its segment. So $R_{n+1} < \tfrac12 R_n$, and

$$
R_n < \frac{R_0}{2^n} < \frac{S}{2^n} \qquad (n \ge 1).
$$

The leftover can be made smaller than any amount you name.

### Step 4: the double contradiction

**Proof of the theorem.** Suppose first that $S > \tfrac43 T$. The difference $d = S - \tfrac43 T$ is a positive
number. Choose $n$ so large that the leftover $R_n < d$. Then $P_n = S - R_n > S - d = \tfrac43 T$. But Step 2
showed $P_n < \tfrac43 T$ for every $n$. Contradiction.

Suppose next that $S < \tfrac43 T$. Now $e = \tfrac43 T - S$ is positive. Choose $n$ so large that
$\tfrac13 \cdot \tfrac T{4^n} < e$. Then $P_n = \tfrac43 T - \tfrac13 \cdot \tfrac T{4^n} > \tfrac43 T - e = S$.
But the triangles lie inside the segment and do not overlap, so $P_n \le S$. Contradiction.

Both possibilities are impossible, so $S = \tfrac43 T$. $\square$

### What it gives, in modern terms

The segment on a chord of width $w$ has area $\tfrac43 \cdot \tfrac{w^3}8 = \tfrac{w^3}{6}$.

**Worked example.** Recover the area under $y = x^2$ from $0$ to $1$. The chord from $(0, 0)$ to $(1, 1)$ has width
$1$, so the segment between the chord and the parabola has area $\tfrac16$. The region under the chord (a triangle
with base 1 and height 1) has area $\tfrac12$. The region under the parabola is the triangle minus the segment:
$\tfrac12 - \tfrac16 = \tfrac13$. **Check:** this matches the rectangle sums of 1.3.

**Worked example.** The line $y = 4$ cuts $y = x^2$ at $x = \pm 2$, width $w = 4$. The segment has area
$\tfrac{64}{6} = \tfrac{32}3$. The inscribed triangle has apex at $(0, 0)$, base 4, height 4, area 8, and indeed
$\tfrac43 \times 8 = \tfrac{32}3$. **Check another way:** the rectangle $[-2, 2] \times [0, 4]$ has area 16, and the
area under the parabola on $[-2, 2]$ is $2 \times \tfrac83 = \tfrac{16}3$ (by the scaling remark in 1.3); the
segment is $16 - \tfrac{16}3 = \tfrac{32}3$.

### A note on history

Archimedes lived in Syracuse, in Sicily, and died in 212 BC when the Romans took the city. The *Quadrature of the
Parabola* contains two proofs of this theorem: the triangle-filling proof above, and a "mechanical" one, balancing
thin slices of the segment against a triangle on an imaginary lever. In a letter to Eratosthenes, known as *The
Method*, Archimedes explained that he found results by such balancing arguments first and then proved them
rigorously by exhaustion. *The Method* was lost for centuries; its text survives in a palimpsest (a prayer book
written over older erased pages) that the Danish scholar Johan Ludvig Heiberg identified in 1906. The method of
exhaustion itself goes back to Eudoxus of Cnidus, a century before Archimedes; Euclid's *Elements*, Book XII, uses
it to prove that the areas of circles are as the squares of their diameters.

What Archimedes did *not* have was a general method. Each curve needed its own clever dissection. The step from
clever dissections to a method that works for every curve took another nineteen centuries.

## 1.5 The surprise: the two questions are inverse

We now have two procedures.

- **Rate.** From a distance function $s(t)$, find the speed: average over a shrinking interval.
- **Area.** From a speed function $v(t)$, find the distance: add up rectangles under its graph.

Put the falling stone through both. The rate procedure turned the distance $s(t) = 4.9t^2$ into the speed
$v(t) = 9.8t$. The area procedure turns the speed $9.8t$ back into the distance: the area under the line from $0$ to
$t$ is a triangle with base $t$ and height $9.8t$, area $\tfrac12 \cdot t \cdot 9.8t = 4.9t^2$. We went round a
circle and came home. (This is also where the "half" in $4.9 = \tfrac12 g$ comes from: the distance is the area of
a triangle, not of a rectangle.)

Is that a coincidence of this example? Try the parabola. Let $A(x)$ be the area under $y = t^2$ from $t = 0$ to
$t = x$ (we use $t$ as the variable on the axis so that $x$ is free to be the right end). Section 1.3 found
$A(x) = \tfrac{x^3}3$. Now ask the rate question about $A$: how fast does the area grow as $x$ moves?

$$
\frac{A(x+h) - A(x)}{h} = \frac{(x+h)^3 - x^3}{3h} = \frac{3x^2 h + 3x h^2 + h^3}{3h} = x^2 + xh + \tfrac13 h^2 ,
$$

which approaches $x^2$ as $h$ shrinks. **The rate at which the area grows is the height of the curve.** The area
under $x^2$ grows at rate $x^2$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 245" role="img" aria-label="The area A of x under y equals x squared from 0 to x in blue, and a thin orange strip of width h on top of it, whose area is about x squared times h">
  <polygon points="40.0,220.0 40.0,220.0 42.5,220.0 44.9,219.9 47.4,219.9 49.8,219.8 52.2,219.7 54.7,219.5 57.1,219.3 59.6,219.1 62.0,218.9 64.5,218.6 66.9,218.3 69.4,218.0 71.8,217.7 74.3,217.3 76.8,216.9 79.2,216.5 81.7,216.0 84.1,215.5 86.5,215.0 89.0,214.5 91.4,213.9 93.9,213.3 96.3,212.7 98.8,212.1 101.2,211.4 103.7,210.7 106.1,210.0 108.6,209.2 111.0,208.4 113.5,207.6 116.0,206.8 118.4,205.9 120.8,205.0 123.3,204.1 125.8,203.1 128.2,202.1 130.6,201.1 133.1,200.1 135.5,199.0 138.0,197.9 140.4,196.8 142.9,195.7 145.3,194.5 147.8,193.3 150.2,192.1 152.7,190.8 155.2,189.6 157.6,188.2 160.0,186.9 162.5,185.5 164.9,184.2 167.4,182.7 169.8,181.3 172.3,179.8 174.8,178.3 177.2,176.8 179.7,175.2 182.1,173.6 184.5,172.0 187.0,170.4 189.4,168.7 191.9,167.0 194.3,165.3 196.8,163.6 199.2,161.8 201.7,160.0 204.1,158.1 206.6,156.3 209.1,154.4 211.5,152.5 213.9,150.5 216.4,148.6 218.8,146.6 221.3,144.5 223.8,142.5 226.2,140.4 228.6,138.3 231.1,136.2 233.5,134.0 236.0,131.8 236.0,220.0" fill="#9cc9ea" fill-opacity="0.7" stroke="none"/>
  <polygon points="236.0,220.0 236.0,131.8 237.3,130.7 238.5,129.5 239.8,128.4 241.0,127.2 242.3,126.0 243.6,124.9 244.8,123.7 246.1,122.5 247.3,121.3 248.6,120.1 249.9,118.9 251.1,117.7 252.4,116.4 253.6,115.2 254.9,114.0 256.2,112.7 257.4,111.5 258.7,110.2 259.9,108.9 261.2,107.7 261.2,220.0" fill="#eea66f" fill-opacity="0.9" stroke="none"/>
  <polyline points="40.0,220.0 42.8,220.0 45.6,219.9 48.4,219.8 51.2,219.7 54.0,219.6 56.8,219.4 59.6,219.1 62.4,218.8 65.2,218.5 68.0,218.2 70.8,217.8 73.6,217.4 76.4,217.0 79.2,216.5 82.0,215.9 84.8,215.4 87.6,214.8 90.4,214.2 93.2,213.5 96.0,212.8 98.8,212.1 101.6,211.3 104.4,210.5 107.2,209.6 110.0,208.8 112.8,207.8 115.6,206.9 118.4,205.9 121.2,204.9 124.0,203.8 126.8,202.7 129.6,201.6 132.4,200.4 135.2,199.2 138.0,197.9 140.8,196.7 143.6,195.4 146.4,194.0 149.2,192.6 152.0,191.2 154.8,189.7 157.6,188.2 160.4,186.7 163.2,185.2 166.0,183.6 168.8,181.9 171.6,180.2 174.4,178.5 177.2,176.8 180.0,175.0 182.8,173.2 185.6,171.3 188.4,169.4 191.2,167.5 194.0,165.5 196.8,163.6 199.6,161.5 202.4,159.4 205.2,157.3 208.0,155.2 210.8,153.0 213.6,150.8 216.4,148.6 219.2,146.3 222.0,143.9 224.8,141.6 227.6,139.2 230.4,136.8 233.2,134.3 236.0,131.8 238.8,129.3 241.6,126.7 244.4,124.1 247.2,121.4 250.0,118.8 252.8,116.0 255.6,113.3 258.4,110.5 261.2,107.7 264.0,104.8 266.8,101.9 269.6,99.0 272.4,96.0 275.2,93.0 278.0,90.0 280.8,86.9 283.6,83.8 286.4,80.6 289.2,77.4 292.0,74.2 294.8,70.9 297.6,67.6 300.4,64.3 303.2,61.0 306.0,57.6 308.8,54.1 311.6,50.6 314.4,47.1 317.2,43.6 320.0,40.0" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="30.0" y1="220.0" x2="340.0" y2="220.0" stroke="currentColor" stroke-width="1.2"/>
  <line x1="40.0" y1="230.0" x2="40.0" y2="15.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="236.0" y="236.0" font-size="11" text-anchor="middle" fill="currentColor">x</text>
  <text x="265.2" y="236.0" font-size="11" text-anchor="start" fill="currentColor">x+h</text>
  <text x="173.0" y="206.5" font-size="13" text-anchor="middle" fill="currentColor">A(x)</text>
  <text x="271.2" y="112.0" font-size="11" text-anchor="start" fill="currentColor">strip ≈ x² · h</text>
  <text x="285.0" y="58.0" font-size="12" text-anchor="end" fill="currentColor">y = x²</text>
</svg>
</div>

The picture explains why this must happen for every curve, not just these two. When $x$ moves to $x + h$, the area
gains a thin strip. The strip has width $h$ and height about $f(x)$, the height of the curve there, so its area is
about $f(x) \cdot h$. Divide by $h$: the rate of growth of the area is about $f(x)$, and the approximation gets
better as the strip gets thinner. In symbols, if $A(x)$ is the area under $y = f(t)$ from a fixed starting point
to $x$, then

$$
\text{rate of change of } A \text{ at } x = f(x).
$$

So **finding areas is undoing rates**. To find the area under a curve $y = f(x)$, you do not need rectangles at all:
find a function whose rate of change is $f$, and read off the area from it. For example, the rate of change of
$\tfrac{x^4}4$ is $x^3$ (expand $(x+h)^4$ and try it, it is exercise 6's shortcut), so the area under $y = x^3$
from $0$ to $1$ should be $\tfrac14$. The sum-of-cubes formula confirms it in exercise 6, the hard way.

This is a preview of the **fundamental theorem of calculus**, which Chapter 9 states precisely and proves. It is the
reason calculus is one subject and not two. Archimedes needed a fresh piece of genius for each curved area; after
the fundamental theorem, a student can find the area under $y = x^7$ in one line, because the area question has
been turned into the (usually easier) rate question run backwards.

### History in brief

Rates and areas were studied for centuries before anyone tied them together. In the 1300s, scholars at Merton
College, Oxford, stated the "mean speed theorem": a body accelerating uniformly from rest covers the same distance
as a body moving at its average speed for the same time. Nicole Oresme, in Paris, gave a geometric proof in the
mid-1300s by drawing speed as a height over a time axis, so that distance became an area: the area of a triangle
equals the area of a rectangle of half the height. That is our falling stone, three centuries early. Galileo's
*Two New Sciences* (1638) used the same picture for falling bodies.

In the 1600s, Fermat, Descartes and others found tangents to many curves, and Cavalieri, Fermat, Wallis and others
found areas under curves $y = x^n$. Isaac Barrow, Newton's predecessor as Lucasian professor at Cambridge, published
a geometric theorem in his *Lectiones Geometricae* (1670) that, read today, contains the inverse relation. But it
was Isaac Newton (from the mid-1660s) and Gottfried Wilhelm Leibniz (from the mid-1670s), working independently,
who saw it as the centre of a general method with its own rules and notation. Chapter 9 tells that story, including
the dispute over who came first.

## Check yourself

??? question "1. A stone falls with $s(t) = 4.9t^2$. What is its average speed between $t = 2$ and $t = 3$, and between $t = 3$ and $t = 4$?"

    From the table: $\frac{44.1 - 19.6}{1} = 24.5$ m/s, and $\frac{78.4 - 44.1}{1} = 34.3$ m/s. Each second the
    average goes up by $9.8$ m/s, the acceleration.

??? question "2. Find the instantaneous speed of the stone at $t = 2$ by computing the average speed from $t = 2$ to $t = 2 + h$ and letting $h$ shrink."

    $\frac{4.9(2+h)^2 - 4.9 \cdot 4}{h} = \frac{4.9(4h + h^2)}{h} = 19.6 + 4.9h$, which approaches $19.6$ m/s.
    Check: the formula $v(t) = 9.8t$ gives $9.8 \times 2 = 19.6$.

??? question "3. On Mars, $s(t) = 1.855t^2$. How long does a stone take to fall 100 m, and how fast is it going when it lands? Compare with Earth."

    Mars: $1.855t^2 = 100$ gives $t = \sqrt{100/1.855} \approx 7.34$ s, and the speed is $3.71t \approx 27.2$ m/s.
    Earth: $t = \sqrt{100/4.9} \approx 4.52$ s and speed $9.8t \approx 44.3$ m/s. Ignoring air (a fair approximation
    on Mars, whose air is thin, much less so on Earth), the Martian stone takes over half as long again and lands at
    about 60 percent of the speed.

??? question "4. Find the lower and upper sums $L_n$ and $U_n$ for $y = x$ on $[0, 1]$ with $n$ equal pieces, and show they trap the area $\tfrac12$."

    Right ends $\tfrac kn$, $k = 1, \ldots, n$: $U_n = \frac1n \cdot \frac{1 + 2 + \cdots + n}{n} = \frac{n(n+1)}{2n^2} = \frac12 + \frac1{2n}$.
    Left ends $\tfrac kn$, $k = 0, \ldots, n-1$: $L_n = \frac{(n-1)n}{2n^2} = \frac12 - \frac1{2n}$. So $L_n < \tfrac12 < U_n$ with gap
    $\tfrac1n$, and the area (a triangle, $\tfrac12 \cdot 1 \cdot 1$) is $\tfrac12$. Check: $n = 4$ gives $0.375$ and $0.625$.

??? question "5. Compute the upper sum $U_4$ for $y = x^2$ on $[0, 2]$ and compare with the exact area."

    Width $\tfrac12$, right ends $\tfrac12, 1, \tfrac32, 2$ with squares $0.25, 1, 2.25, 4$. $U_4 = \tfrac12(7.5) = 3.75$.
    The exact area is $\tfrac{2^3}3 = \tfrac83 \approx 2.667$, so four rectangles overestimate by about $1.08$.

??? question "6. Use $1^3 + 2^3 + \cdots + n^3 = \left(\frac{n(n+1)}{2}\right)^2$ to show the area under $y = x^3$ on $[0, 1]$ is $\tfrac14$."

    $U_n = \frac1n \sum_{k=1}^n \frac{k^3}{n^3} = \frac{n^2(n+1)^2}{4n^4} = \frac14\left(1 + \frac1n\right)^2$, and
    $L_n = \frac14\left(1 - \frac1n\right)^2$ (replace $n$ by $n - 1$ in the sum). Both are within $\tfrac1n$ of $\tfrac14$:
    $U_n - \tfrac14 = \tfrac1{2n} + \tfrac1{4n^2} \le \tfrac3{4n}$ and $\tfrac14 - L_n = \tfrac1{2n} - \tfrac1{4n^2} < \tfrac1{2n}$.
    The area lies between $L_n$ and $U_n$ for every $n$, so it equals $\tfrac14$. (Check: $U_{10} = 0.3025$, $U_{100} = 0.255025$.)
    The shortcut of 1.5: the rate of change of $\tfrac{x^4}{4}$ is
    $\frac{(x+h)^4 - x^4}{4h} = x^3 + \tfrac32 x^2 h + x h^2 + \tfrac14 h^3 \to x^3$.

??? question "7. A car's speed is measured every 10 s: 0, 8, 14, 18, 20 m/s at $t = 0, 10, 20, 30, 40$. The speed rises all the time. Between what limits must the distance in those 40 s lie?"

    Lower sum (speed at the start of each 10 s piece): $10(0 + 8 + 14 + 18) = 400$ m.
    Upper sum (speed at the end): $10(8 + 14 + 18 + 20) = 600$ m. Because the speed only increases, the true distance
    is between 400 m and 600 m. More frequent readings would narrow the gap.

??? question "8. Find the area of the parabolic segment cut from $y = x^2$ by the chord from $(1, 1)$ to $(3, 9)$, in two ways."

    By Archimedes: width $w = 2$, triangle $\tfrac{w^3}8 = 1$, segment $\tfrac43$. (Lemma 1 with $p = 1, q = 2, r = 3$:
    $\tfrac12 \cdot 1 \cdot 1 \cdot 2 = 1$.) By areas: under the chord is a trapezoid of width 2 and heights 1 and 9,
    area $10$; under the parabola from 1 to 3 is $\tfrac{27}3 - \tfrac13 = \tfrac{26}3$. Segment $= 10 - \tfrac{26}3 = \tfrac43$.

??? question "9. Show that $1 + \tfrac14 + \tfrac1{16} + \cdots + \tfrac1{4^n}$ is less than $\tfrac43$ for every $n$ but gets as close as you like."

    Call the sum $G$. Then $\tfrac14 G = \tfrac14 + \cdots + \tfrac1{4^{n+1}}$, and subtracting,
    $\tfrac34 G = 1 - \tfrac1{4^{n+1}}$, so $G = \tfrac43 - \tfrac13 \cdot \tfrac1{4^n}$. The subtracted term is positive,
    so $G < \tfrac43$, and it is below any positive number you name once $n$ is large (it shrinks by a factor of 4 each step).

??? question "10. Let $A(x)$ be the area under $y = 2t + 1$ from $t = 0$ to $t = x$. Find $A(x)$ by geometry and check that its rate of change is $2x + 1$."

    The region is a trapezoid with parallel sides $1$ (at $t = 0$) and $2x + 1$ (at $t = x$) and width $x$:
    $A(x) = \tfrac x2 (1 + 2x + 1) = x^2 + x$. Rate: $\frac{(x+h)^2 + (x+h) - x^2 - x}{h} = 2x + h + 1 \to 2x + 1$,
    the height of the line, as section 1.5 predicts.

??? question "11. Why does Lemma 2 (the triangle covers more than half its segment) need the parabola to be convex? What fails for a wiggly curve?"

    The proof put the whole segment inside a parallelogram between the chord and the tangent at $C$. That needs the
    curve between $A$ and $B$ to stay between those two lines. A curve that bends both ways can cross the tangent line,
    poke out of the parallelogram, and then the triangle may cover less than half. The parabola never changes its
    direction of bending, so it stays on one side of every tangent line.

??? question "12. A tank fills at a rate of $r(t) = 3t^2$ litres per minute. Using the pattern of 1.5, guess how much water enters in the first 2 minutes, and confirm with rectangles."

    We need a function whose rate of change is $3t^2$: from 1.5, $t^3$ works ($\frac{(t+h)^3 - t^3}{h} \to 3t^2$).
    So the volume is $2^3 - 0^3 = 8$ litres. Rectangles: the area under $3t^2$ on $[0, 2]$ is $3 \times \tfrac{2^3}3 = 8$
    by the scaling remark in 1.3. Both agree.

## What you learned

- The **rate question** (speed at an instant) is answered by averaging over a shrinking interval and seeing what
  the averages approach; geometrically it is the slope of the tangent line.
- The **area question** is answered by trapping the area between lower and upper rectangle sums whose gap shrinks
  to zero; this gave $\tfrac13$ for $y = x^2$ on $[0, 1]$.
- The logic behind both is "any other answer would be wrong by a definite amount, and we can rule that amount out".
- Archimedes found the area of a parabolic segment, $\tfrac43$ of its triangle, by exhaustion and a double
  contradiction, about two thousand years before calculus.
- Distance is the area under the speed graph, and speed is the rate of change of distance.
- In general, the rate of change of the area under a curve is the height of the curve: the two questions are
  inverse, which is the fundamental theorem of calculus in embryo.

**Next:** [Chapter 2](02-Limits.md) makes "approaches" exact: limits, the laws they obey, and the epsilon-delta
definition.

## Further reading

- Archimedes, *Quadrature of the Parabola* and *The Method*, in T. L. Heath (ed.), *The Works of Archimedes* (1897,
  with the supplement *The Method of Archimedes*, 1912).
- C. H. Edwards Jr., *The Historical Development of the Calculus* (1979).
- C. B. Boyer, *The History of the Calculus and Its Conceptual Development* (1949; Dover reprint 1959).
- O. Toeplitz, *The Calculus: A Genetic Approach* (1963; English edition 2007).
- M. Spivak, *Calculus* (4th edition, 2008), chapters 1 and 13.
- On this site: the U of T guide [MAT137, Prologue: Why Calculus Exists](../../uoft/MAT137/prologue.md); the Topics
  lessons [The problem of instant speed](../../topics/change/level-6/01-instant-speed.md),
  [From secant to tangent](../../topics/change/level-6/03-secant-tangent.md) and
  [Areas under curves and the fundamental theorem](../../topics/change/level-8/06-area-fundamental-theorem.md);
  the algebra book's [Chapter 8, sequences, series and induction](../algebra/08-Sequences-Series-and-Induction.md)
  for sums like $1^2 + \cdots + n^2$ and geometric series.
