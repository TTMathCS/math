---
title: "Continuous random variables"
---

# Continuous random variables

*Probability · level 8, lesson 2 of 7*

## A question to start

A computer picks a number "completely at random" between 0 and 1, any real number at all, with every part of the
interval treated alike. What is the chance it picks **exactly** 0.5?

There are infinitely many numbers between 0 and 1. If each had the same positive chance, however tiny, adding up
infinitely many of them would give far more than 1. So the chance of exactly 0.5 must be **0**. The same goes for every
other number. Yet the computer does pick **some** number. How can every single outcome have probability 0, and
something still happen? This lesson answers that by moving probability from bars to **areas**.

## The idea

### From bars to area

The random variables of level 7 were **discrete**: their values could be listed (0, 1, 2, ...) and each had a
probability, drawn as a bar. A **continuous** random variable can take any value in an interval: a waiting time, a
height, the exact point where a dart lands. Measuring more and more precisely, there are infinitely many possible
values, and no single one has a positive probability.

Instead of asking "what is the chance of exactly 3?", we ask "what is the chance of a value **between** 2.9 and 3.1?" The
answer is described by a curve.

A **probability density function** (pdf) $f(x)$ is a curve with two properties:

1. it is never negative: $f(x) \ge 0$;
2. the total area under it is 1.

The probability that $X$ lands between $a$ and $b$ is the **area under the curve** from $a$ to $b$:

$$P(a \le X \le b) = \text{area under } f \text{ between } a \text{ and } b = \int_a^b f(x)\,dx.$$

The integral sign $\int$ is the calculus notation for this area; if you have not met integrals, read it as "area" and
use geometry (rectangles and triangles) for the examples here. The area idea is what matters.

Think of it as the limit of a histogram: draw the histogram of a measurement with narrower and narrower bars, each
with **area** equal to its probability, and the tops of the bars approach a smooth curve. That curve is the density.

### Exactly one value has probability 0

The area above a single point is a line with no width, so its area is 0:

$$P(X = 3) = \int_3^3 f(x)\,dx = 0.$$

This answers the opening question. Every single value has probability 0, but intervals have positive probability, and
the number picked lies in many intervals. Probability 0 does not mean "impossible" here; it means "so precise that it
has no chance of being hit exactly". A practical consequence: for continuous variables, $<$ and $\le$ give the **same**
probability. $P(X < 3) = P(X \le 3)$.

### The density is not a probability

The height $f(x)$ is a probability **per unit length**, like density is mass per unit volume. It can be bigger than 1.
If a value is uniform on the interval from 0 to $\tfrac12$, the density must be 2 there, so that the area
$2 \times \tfrac12 = 1$. What can never exceed 1 is an **area**.

For a short interval of width $\Delta x$ near $x$, the probability is roughly height times width:
$P(x \le X \le x + \Delta x) \approx f(x)\,\Delta x$.

### The uniform distribution on an interval

The simplest density is flat. $X$ is **uniform on $[a, b]$** if

$$f(x) = \frac{1}{b - a} \quad \text{for } a \le x \le b, \qquad f(x) = 0 \text{ elsewhere}.$$

The height $\tfrac{1}{b - a}$ is forced: the rectangle has width $b - a$, and its area must be 1. Probabilities are then
just **proportions of length**:

$$P(c \le X \le d) = \frac{d - c}{b - a} \qquad (a \le c \le d \le b).$$

**A bus every 12 minutes.** You arrive at a stop at a random moment; buses come exactly every 12 minutes. Your wait $W$
is uniform on $[0, 12]$, with density $\tfrac{1}{12}$. The chance of waiting between 3 and 7 minutes is the shaded
area, $4 \times \tfrac{1}{12} = \tfrac13$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 170" role="img" aria-label="Uniform density on 0 to 12 minutes: a flat rectangle of height one twelfth, with the strip from 3 to 7 shaded">
  <line x1="40" y1="130" x2="440" y2="130" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="20" x2="40" y2="130" stroke="currentColor" stroke-width="1.5"/>
  <rect x="40" y="60" width="360.0" height="70" fill="#9cc9ea"/>
  <rect x="130.0" y="60" width="120.0" height="70" fill="#eea66f"/>
  <line x1="40.0" y1="130" x2="40.0" y2="134" stroke="currentColor" stroke-width="1"/>
  <text x="40.0" y="146.0" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <line x1="70.0" y1="130" x2="70.0" y2="134" stroke="currentColor" stroke-width="1"/>
  <line x1="100.0" y1="130" x2="100.0" y2="134" stroke="currentColor" stroke-width="1"/>
  <line x1="130.0" y1="130" x2="130.0" y2="134" stroke="currentColor" stroke-width="1"/>
  <text x="130.0" y="146.0" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <line x1="160.0" y1="130" x2="160.0" y2="134" stroke="currentColor" stroke-width="1"/>
  <line x1="190.0" y1="130" x2="190.0" y2="134" stroke="currentColor" stroke-width="1"/>
  <line x1="220.0" y1="130" x2="220.0" y2="134" stroke="currentColor" stroke-width="1"/>
  <text x="220.0" y="146.0" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <line x1="250.0" y1="130" x2="250.0" y2="134" stroke="currentColor" stroke-width="1"/>
  <text x="250.0" y="146.0" font-size="11" text-anchor="middle" fill="currentColor">7</text>
  <line x1="280.0" y1="130" x2="280.0" y2="134" stroke="currentColor" stroke-width="1"/>
  <line x1="310.0" y1="130" x2="310.0" y2="134" stroke="currentColor" stroke-width="1"/>
  <text x="310.0" y="146.0" font-size="11" text-anchor="middle" fill="currentColor">9</text>
  <line x1="340.0" y1="130" x2="340.0" y2="134" stroke="currentColor" stroke-width="1"/>
  <line x1="370.0" y1="130" x2="370.0" y2="134" stroke="currentColor" stroke-width="1"/>
  <line x1="400.0" y1="130" x2="400.0" y2="134" stroke="currentColor" stroke-width="1"/>
  <text x="400.0" y="146.0" font-size="11" text-anchor="middle" fill="currentColor">12</text>
  <text x="34.0" y="64.0" font-size="10" text-anchor="end" fill="currentColor">1/12</text>
  <text x="190.0" y="99.0" font-size="11" text-anchor="middle" fill="currentColor">area 4/12</text>
  <text x="220.0" y="166.0" font-size="12" text-anchor="middle" fill="currentColor">minutes waited</text>
</svg>
</div>

### Mean and variance with integrals

For a discrete variable, $E(X) = \sum x\,P(x)$. For a continuous one, each thin slice near $x$ has probability
$f(x)\,dx$, and the sum becomes an integral:

$$E(X) = \int x\,f(x)\,dx, \qquad \operatorname{Var}(X) = E(X^2) - \mu^2, \quad E(X^2) = \int x^2 f(x)\,dx.$$

The rules from level 7 ($E(aX + b) = aE(X) + b$, variances of independent variables add) all still hold.

For the uniform on $[0, L]$: $E(X) = \int_0^L \tfrac{x}{L}\,dx = \tfrac{L}{2}$ (the middle, as symmetry says), and
$E(X^2) = \int_0^L \tfrac{x^2}{L}\,dx = \tfrac{L^2}{3}$, so $\operatorname{Var}(X) = \tfrac{L^2}{3} - \tfrac{L^2}{4} = \tfrac{L^2}{12}$.
Shifting to $[a, b]$ does not change the spread:

$$E(X) = \frac{a + b}{2}, \qquad \operatorname{Var}(X) = \frac{(b - a)^2}{12}.$$

Compare the discrete uniform's $\tfrac{n^2 - 1}{12}$ from level 7: almost the same formula. For the bus, the mean
wait is 6 minutes and $\sigma = \tfrac{12}{\sqrt{12}} = \sqrt{12} \approx 3.46$ minutes.

### The cumulative distribution function

The **cumulative distribution function** (cdf) is $F(x) = P(X \le x)$, the area to the left of $x$. It rises from 0 to 1.
For the bus, $F(w) = \tfrac{w}{12}$ for $0 \le w \le 12$. Every probability can be read from it:
$P(c \le X \le d) = F(d) - F(c)$. And since $F$ is an accumulated area, the Fundamental Theorem of Calculus says the
density is its slope: $f(x) = F'(x)$.

### A first look at the exponential distribution

The geometric distribution of level 7 counted trials until a first success and had **no memory**. Its continuous cousin
is the **exponential distribution**, for waiting times when events happen at random at a steady rate $\lambda$ per unit
time:

$$f(x) = \lambda e^{-\lambda x} \quad (x \ge 0), \qquad P(X > t) = e^{-\lambda t}, \qquad E(X) = \frac{1}{\lambda}.$$

It is memoryless in exactly the same way: $P(X > s + t \mid X > s) = \tfrac{e^{-\lambda(s + t)}}{e^{-\lambda s}} = e^{-\lambda t} = P(X > t)$.
The time until a radioactive atom decays is modelled like this, which is why "half-life" makes sense.

## Worked examples

**1. A triangle-shaped density.** Add two independent numbers, each uniform on $[0, 1]$. The total $X$ lies between 0
and 2, and (as with two dice) middle values are more likely. Its density is a triangle: $f(x) = x$ for
$0 \le x \le 1$ and $f(x) = 2 - x$ for $1 \le x \le 2$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 170" role="img" aria-label="Triangle-shaped density on 0 to 2 with peak height 1 at x = 1; the part from 0 to 0.5 is shaded">
  <line x1="40" y1="130" x2="320" y2="130" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="20" x2="40" y2="130" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="40,130 170,40 300,130" fill="#9cc9ea"/>
  <polygon points="40,130 105.0,85.0 105.0,130" fill="#eea66f"/>
  <text x="40.0" y="146.0" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <text x="105.0" y="146.0" font-size="11" text-anchor="middle" fill="currentColor">0.5</text>
  <text x="170.0" y="146.0" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <text x="235.0" y="146.0" font-size="11" text-anchor="middle" fill="currentColor">1.5</text>
  <text x="300.0" y="146.0" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <text x="34.0" y="44.0" font-size="10" text-anchor="end" fill="currentColor">1</text>
  <line x1="37" y1="40" x2="40" y2="40" stroke="currentColor"/>
  <text x="235.0" y="166.0" font-size="12" text-anchor="middle" fill="currentColor">x</text>
</svg>
</div>

- Total area: a triangle with base 2 and height 1, area $\tfrac12 \times 2 \times 1 = 1$. ✓
- $P(X \le 0.5)$: a small triangle with base 0.5 and height 0.5, area $\tfrac12 \times 0.5 \times 0.5 = 0.125$.
- $P(0.5 \le X \le 1.5) = 1 - 0.125 - 0.125 = 0.75$, by symmetry.
- $E(X) = 1$ by symmetry (and $0.5 + 0.5$ by adding means).

**2. Finding the constant.** $f(x) = kx^2$ for $0 \le x \le 2$ (and 0 elsewhere). Find $k$, $P(X \le 1)$ and $E(X)$.

- Total area: $\int_0^2 kx^2\,dx = k \cdot \tfrac{8}{3} = 1$, so $k = \tfrac38$.
- $P(X \le 1) = \int_0^1 \tfrac38 x^2\,dx = \tfrac38 \cdot \tfrac13 = \tfrac18$.
- $E(X) = \int_0^2 x \cdot \tfrac38 x^2\,dx = \tfrac38 \cdot \tfrac{2^4}{4} = \tfrac38 \cdot 4 = 1.5$.

Only an eighth of the probability lies in the first half of the interval: the density is much taller near 2.

**3. A light bulb.** A bulb's lifetime is exponential with mean 1000 hours, so $\lambda = \tfrac{1}{1000}$. The chance it
lasts more than 2000 hours: $e^{-2000/1000} = e^{-2} \approx 0.135$. The chance it fails in its first 100 hours:
$1 - e^{-0.1} \approx 0.095$.

**4. Meeting a friend.** You and a friend each arrive at a random time, uniformly and independently, within the same
hour, and each waits 15 minutes for the other. Chance you meet? Measure in hours: the pair of times is a point in the
unit square, and you meet when the times differ by at most $\tfrac14$. The region where you **miss** is two corner
triangles, each with legs $\tfrac34$, total area $2 \times \tfrac12 \times \left(\tfrac34\right)^2 = \tfrac{9}{16}$. So you
meet with probability $1 - \tfrac{9}{16} = \tfrac{7}{16} \approx 0.44$. (This is the geometric probability of
[level 6](../level-6/06-geometric-probability.md): a density on a square, where area is probability.)

## Try it

1. $X$ is uniform on $[2, 10]$. Find its density, $P(X > 7)$, $E(X)$ and $\operatorname{SD}(X)$.
2. Explain why $P(X = 4)$ is 0 for a continuous $X$, and why that does not make 4 impossible.
3. $f(x) = 2x$ for $0 \le x \le 1$. Check it is a density. Find $P(X \le 0.5)$ and the median $m$ (where
   $P(X \le m) = \tfrac12$).
4. For the density in question 3, find $E(X)$. Is it more or less than the median? Why?
5. $X$ is uniform on $[0, \tfrac14]$. What is the height of its density? Does this break the rule that probabilities are
   at most 1?
6. For the triangle density of worked example 1, find $P(X \ge 1.8)$.
7. Calls to a help desk arrive at a rate of 2 per hour, so the waiting time for the next call is exponential with
   $\lambda = 2$ per hour. Find the chance of waiting more than 30 minutes, and the mean wait.
8. Show that if $F(x) = 1 - e^{-\lambda x}$ for $x \ge 0$, then $F'(x)$ is the exponential density.

??? note "Answers"
    1. $f(x) = \tfrac18$ on $[2, 10]$. $P(X > 7) = \tfrac{10 - 7}{8} = \tfrac38$. $E(X) = 6$.
       $\operatorname{Var} = \tfrac{64}{12} = \tfrac{16}{3}$, so $\operatorname{SD} = \tfrac{4}{\sqrt3} \approx 2.31$.
    2. The probability is the area above the single point 4, a line with no width, so it is 0. Every value has
       probability 0, but the outcome must be some value; "probability 0" for a continuous variable means "will not be
       hit exactly", not "cannot happen".
    3. $f \ge 0$ and the area is a triangle with base 1 and height 2: $\tfrac12 \times 1 \times 2 = 1$. ✓
       $P(X \le 0.5) = \tfrac12 \times 0.5 \times 1 = 0.25$. In general $P(X \le m) = m^2$, so $m^2 = \tfrac12$ and
       $m = \tfrac{1}{\sqrt2} \approx 0.707$.
    4. $E(X) = \int_0^1 x \cdot 2x\,dx = \tfrac23 \approx 0.667$, a little less than the median 0.707. The density is
       thin near 0 and piled up near 1, so its long low tail is on the left (it is skewed left), and that tail pulls
       the mean below the median.
    5. Height 4, so that $4 \times \tfrac14 = 1$. No: the height is a density (probability per unit length), not a
       probability. Every **area** under it is still at most 1.
    6. A triangle on $[1.8, 2]$ with base 0.2 and height $2 - 1.8 = 0.2$: area $\tfrac12 \times 0.2 \times 0.2 = 0.02$.
    7. 30 minutes is $\tfrac12$ hour: $P = e^{-2 \times 0.5} = e^{-1} \approx 0.368$. Mean wait $\tfrac12$ hour, 30 minutes.
    8. $F'(x) = 0 - e^{-\lambda x} \cdot (-\lambda) = \lambda e^{-\lambda x}$, the exponential density.

## Common mistake

**Reading the height of the curve as a probability.** $f(3) = 0.4$ does not mean $P(X = 3) = 0.4$; that probability is 0.
Probabilities are **areas**, so you always need an interval.

**Worrying about $<$ versus $\le$.** For continuous variables they give the same answer. (For discrete ones they do
not: $P(X < 3)$ and $P(X \le 3)$ differ by $P(X = 3)$. The difference matters in lesson 4.)

## Where it leads

- Back: [Bayes' theorem](01-bayes-theorem.md) · Next: [The normal distribution](03-normal-distribution.md)
- [Level 8 page](index.md) · [Probability topic page](../index.md)
- Area under a curve is the integral: [U of T MAT137, unit 7](../../../uoft/MAT137/unit07.md) (the definition of the
  integral) and [unit 8](../../../uoft/MAT137/unit08.md) (the Fundamental Theorem, which links $F$ and $f$).
- Probability as area began with geometric probability in [level 6](../level-6/06-geometric-probability.md); see also
  [Measurement](../../measurement/index.md) for areas.
