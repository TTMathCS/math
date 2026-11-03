# 9. Continuous random variables

*Pick a real number "at random" between 0 and 1. What is the chance that you pick exactly 0.5? If every number is
equally likely and there are infinitely many of them, the answer must be 0, and the same is true of every other number.
Yet the chance of landing somewhere between 0 and 1 is 1. How can a sum of zeros make one? This chapter answers that
puzzle with the idea of a density: probability spread out like paint along a line, so that only intervals, never single
points, carry any of it. You will meet the three most important continuous laws (uniform, exponential and normal), learn
to compute with cumulative distribution functions and quantiles, find the law of a function of a random variable, and
finish with the eighteenth-century experiment that estimates $\pi$ by dropping needles on a floor.*

!!! abstract "In this chapter"
    **You will learn:**

    - why a continuous random variable gives probability 0 to every single point, and what a density is instead
    - expectation and variance as integrals, and the tail formula for the mean
    - the uniform, exponential and normal laws, and why the exponential is the only memoryless one (with proof)
    - the cumulative distribution function, medians and quantiles, and how a computer turns uniform numbers into any law
    - how to find the density of $g(X)$ from the density of $X$ (the change of variables formula, with proof)
    - Buffon's needle: the full computation of the chance $2\ell/(\pi d)$, and what it does and does not teach

    **You need:** discrete random variables, expectation and variance from [Chapter 5](05-Discrete-Random-Variables.md)
    and [Chapter 6](06-Expectation-and-Variance.md). From here on the book uses **calculus**: integrals, the
    fundamental theorem of calculus, integration by parts and improper integrals. The MAT137 guides on
    [the fundamental theorem](../../uoft/MAT137/unit08.md) and [improper integrals](../../uoft/MAT137/unit12.md)
    are a good refresher. A gentler version of the first half of this chapter is the Topics lesson on
    [continuous random variables](../../topics/probability/level-8/02-continuous-random-variables.md), and
    [geometric probability](../../topics/probability/level-6/06-geometric-probability.md) prepares 9.5.

    **Levels:** 9.1 to 9.3 are intermediate; 9.4 is intermediate to advanced; 9.5 is intermediate, with an advanced
    ending (Barbier's theorem).

## 9.1 Densities

### The puzzle of the single point

So far every random variable in this book took values in a list: $0, 1, 2, \dots$ heads, or the faces of a die. For
such a variable we could write down a **probability mass function** $p(k) = P(X = k)$, and every probability was a sum
of these numbers.

Many quantities do not come in a list. The time until a radioactive atom decays, the height of a person chosen at
random, the angle at which a spinner stops, the position where a dart lands: any real number in an interval is possible.
Let us take the simplest case. A spinner has a pointer that can stop at any angle; write $X$ for the stopping angle,
measured as a fraction of a full turn, so $X$ is a number in $[0, 1)$. The spinner is fair, meaning that no direction
is preferred: the chance of stopping in an arc depends only on the arc's length.

Then the chance of stopping in $[0, \tfrac{1}{2})$ is $\tfrac{1}{2}$, in $[0, \tfrac{1}{4})$ is $\tfrac14$, and in an
arc of length $h$ is $h$. Now ask for $P(X = 0.3)$. The point $0.3$ lies inside the arc $[0.3, 0.3 + h)$ for every
$h > 0$, so

$$
P(X = 0.3) \le P(0.3 \le X < 0.3 + h) = h \quad \text{for every } h > 0,
$$

and the only number that is at most every positive $h$ is 0. So $P(X = 0.3) = 0$, and the same argument works for every
point.

This is not a contradiction. The axioms of [Chapter 1](01-What-Probability-Is.md) say that probability adds up over
**countably many** disjoint events (events you can list as a first, second, third, ...). The interval $[0, 1)$ is not
countable (Cantor proved in 1874 that no list can contain every real number), so there is no rule that says its
probability should be the sum of the probabilities of its points. Probability 0 also does not mean "impossible": the
spinner stops somewhere, and wherever it stops, that point had probability 0. It means "so unlikely that no positive
number is small enough to describe it".

### Probability as paint

Since single points carry nothing, we describe a continuous random variable by how its probability is **spread** along
the line. Think of one litre of paint poured along the number line. In some places it is thick, in others thin. The
thickness at the point $x$ is the **density** $f(x)$, and the amount of paint on an interval is the area under the
thickness curve.

**Definition.** A random variable $X$ is **continuous** (more precisely, *absolutely continuous*) if there is a function
$f \ge 0$, its **probability density function** or **density**, such that for all numbers $a \le b$,

$$
P(a \le X \le b) = \int_a^b f(x)\,dx .
$$

Taking $a = -\infty$ and $b = \infty$ gives the one condition every density must meet:

$$
\int_{-\infty}^{\infty} f(x)\,dx = 1 .
$$

Three facts follow at once.

1. Single points have probability 0: $P(X = a) = \int_a^a f = 0$. So it makes no difference whether the ends of an
   interval are included: $P(a < X < b) = P(a \le X \le b)$.
2. A density is **not** a probability. It can be larger than 1. The density $f(x) = 2$ on $[0, \tfrac12]$ (and 0
   elsewhere) is fine: its area is $2 \times \tfrac12 = 1$.
3. For a small length $h$ and a point $x$ where $f$ is continuous, $P(x \le X \le x + h) \approx f(x)\,h$. So $f(x)$ is
   "probability per unit length" near $x$, just as mass density is mass per unit volume. This is the honest meaning of
   the density, and the reason for its name.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 210" role="img" aria-label="The exponential density e to the minus x drawn from x equals 0 to 4. The area under the curve between x equals 0.5 and x equals 1.5 is shaded; it equals about 0.383, the probability that X lies between 0.5 and 1.5">
  <line x1="60" y1="170" x2="390" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="170" x2="60" y2="22" stroke="currentColor" stroke-width="1.5"/>
  <polygon fill="#9cc9ea" fill-opacity="0.6" stroke="none" points="100.0,170.0 100.0,85.1 104.0,89.2 108.0,93.2 112.0,96.9 116.0,100.5 120.0,103.9 124.0,107.1 128.0,110.2 132.0,113.1 136.0,115.9 140.0,118.5 144.0,121.0 148.0,123.4 152.0,125.7 156.0,127.8 160.0,129.9 164.0,131.8 168.0,133.7 172.0,135.5 176.0,137.2 180.0,138.8 180.0,170.0"/>
  <polyline fill="none" stroke="#eea66f" stroke-width="3" points="60.0,30.0 64.0,36.8 68.0,43.3 72.0,49.5 76.0,55.4 80.0,61.0 84.0,66.3 88.0,71.3 92.0,76.2 96.0,80.7 100.0,85.1 104.0,89.2 108.0,93.2 112.0,96.9 116.0,100.5 120.0,103.9 124.0,107.1 128.0,110.2 132.0,113.1 136.0,115.9 140.0,118.5 144.0,121.0 148.0,123.4 152.0,125.7 156.0,127.8 160.0,129.9 164.0,131.8 168.0,133.7 172.0,135.5 176.0,137.2 180.0,138.8 184.0,140.3 188.0,141.7 192.0,143.1 196.0,144.4 200.0,145.7 204.0,146.9 208.0,148.0 212.0,149.1 216.0,150.1 220.0,151.1 224.0,152.0 228.0,152.9 232.0,153.7 236.0,154.5 240.0,155.2 244.0,156.0 248.0,156.6 252.0,157.3 256.0,157.9 260.0,158.5 264.0,159.1 268.0,159.6 272.0,160.1 276.0,160.6 280.0,161.1 284.0,161.5 288.0,161.9 292.0,162.3 296.0,162.7 300.0,163.0 304.0,163.4 308.0,163.7 312.0,164.0 316.0,164.3 320.0,164.6 324.0,164.8 328.0,165.1 332.0,165.3 336.0,165.6 340.0,165.8 344.0,166.0 348.0,166.2 352.0,166.4 356.0,166.5 360.0,166.7 364.0,166.9 368.0,167.0 372.0,167.2 376.0,167.3 380.0,167.4"/>
  <text x="52" y="174" text-anchor="end" font-size="12" fill="currentColor">0</text>
  <text x="52" y="34" text-anchor="end" font-size="12" fill="currentColor">1</text>
  <text x="60" y="186" text-anchor="middle" font-size="12" fill="currentColor">0</text>
  <text x="100" y="186" text-anchor="middle" font-size="12" fill="currentColor">0.5</text>
  <text x="180" y="186" text-anchor="middle" font-size="12" fill="currentColor">1.5</text>
  <text x="220" y="186" text-anchor="middle" font-size="12" fill="currentColor">2</text>
  <text x="300" y="186" text-anchor="middle" font-size="12" fill="currentColor">3</text>
  <text x="380" y="186" text-anchor="middle" font-size="12" fill="currentColor">4</text>
  <text x="140" y="160" text-anchor="middle" font-size="12" fill="currentColor">0.383</text>
  <text x="200" y="80" font-size="13" fill="currentColor">f(x) = e^(−x)</text>
  <text x="225" y="203" text-anchor="middle" font-size="12" fill="currentColor">x</text>
</svg>
</div>

*The density $f(x) = e^{-x}$ for $x \ge 0$. Probability is area: $P(0.5 \le X \le 1.5) = e^{-0.5} - e^{-1.5} \approx 0.383$.*

**Example 1.** Let $f(x) = cx^2$ for $0 \le x \le 3$ and $f(x) = 0$ otherwise. For which $c$ is this a density, and
what is $P(X \le 1)$?

The total area must be 1: $\int_0^3 cx^2\,dx = c \cdot \tfrac{27}{3} = 9c$, so $c = \tfrac19$. Then

$$
P(X \le 1) = \int_0^1 \frac{x^2}{9}\,dx = \frac{1}{27} \approx 0.037 .
$$

Check: $P(1 \le X \le 3) = \tfrac{1}{27}(27 - 1) = \tfrac{26}{27}$, and the two add to 1.

**Example 2.** The density $f(x) = 6x(1 - x)$ on $[0, 1]$ is a hump, highest at $x = \tfrac12$ where it equals
$\tfrac32$. The chance that $X$ lies in the middle half is

$$
P\left(\tfrac14 \le X \le \tfrac34\right) = \int_{1/4}^{3/4} (6x - 6x^2)\,dx = \Big[3x^2 - 2x^3\Big]_{1/4}^{3/4} = \frac{27}{32} - \frac{5}{32} = \frac{11}{16} .
$$

### Expectation and variance

For a discrete variable the mean is $\sum_k k\,p(k)$: each value weighted by its probability. For a continuous one,
the value $x$ gets weight $f(x)\,dx$ (the probability of a tiny interval near $x$), and the sum becomes an integral.

**Definition.** The **expected value** (or **mean**) of a continuous $X$ with density $f$ is

$$
E[X] = \int_{-\infty}^{\infty} x\,f(x)\,dx ,
$$

provided $\int |x|\,f(x)\,dx < \infty$ (otherwise we say the mean does not exist). More generally, for a function $g$,

$$
E[g(X)] = \int_{-\infty}^{\infty} g(x)\,f(x)\,dx ,
$$

again when the integral of $|g(x)|f(x)$ is finite. This second formula is sometimes called the "law of the unconscious
statistician", because people use it without noticing that it needs proof: $g(X)$ is a new random variable with its own
density, and the claim is that you need not find that density to compute its mean. For a $g$ that is increasing and
differentiable it follows from the change of variables of section 9.4 (substitute $y = g(x)$ in the integral); the
general proof is cleanest in the measure-theoretic language of [Chapter 17](17-Measure-Theoretic-Probability.md).

The **variance** is defined exactly as before, $\operatorname{Var}(X) = E[(X - \mu)^2]$ with $\mu = E[X]$, and the
same algebra as in [Chapter 6](06-Expectation-and-Variance.md) gives the working formula
$\operatorname{Var}(X) = E[X^2] - \mu^2$. Linearity, $E[aX + b] = aE[X] + b$, holds because integrals are linear, and
$\operatorname{Var}(aX + b) = a^2 \operatorname{Var}(X)$ follows as before.

**Example 1, continued.** With $f(x) = x^2/9$ on $[0, 3]$:

$$
E[X] = \int_0^3 x \cdot \frac{x^2}{9}\,dx = \frac{81}{36} = \frac94, \qquad E[X^2] = \int_0^3 \frac{x^4}{9}\,dx = \frac{243}{45} = \frac{27}{5},
$$

so $\operatorname{Var}(X) = \tfrac{27}{5} - \tfrac{81}{16} = \tfrac{27}{80}$. The mean $2.25$ sits to the right of the
middle $1.5$, as it should: the density is heaviest near 3.

**Example 2, continued.** For $6x(1 - x)$, symmetry about $\tfrac12$ gives $E[X] = \tfrac12$, and
$E[X^2] = \int_0^1 6x^3 - 6x^4\,dx = \tfrac32 - \tfrac65 = \tfrac{3}{10}$, so $\operatorname{Var}(X) = \tfrac{3}{10} - \tfrac14 = \tfrac{1}{20}$.

### The tail formula

There is a second way to compute a mean that is often quicker, and we will use it several times.

**Theorem (tail formula).** If $X \ge 0$ is continuous with density $f$, then

$$
E[X] = \int_0^{\infty} P(X > t)\,dt .
$$

*Proof.* Write $x = \int_0^x 1\,dt$, put this inside the definition of the mean, and swap the order of integration
(allowed because everything is non-negative; this is Tonelli's theorem, see [Chapter 17](17-Measure-Theoretic-Probability.md)):

$$
E[X] = \int_0^\infty \left( \int_0^x dt \right) f(x)\,dx = \int_0^\infty \left( \int_t^\infty f(x)\,dx \right) dt = \int_0^\infty P(X > t)\,dt .
$$

The region of integration is $\{0 \le t \le x\}$; read one way it is "for each $x$, all $t$ below it", read the other
way it is "for each $t$, all $x$ above it". $\square$

The discrete version, $E[N] = \sum_{k \ge 1} P(N \ge k)$ for $N$ taking values $0, 1, 2, \dots$, has the same proof
with sums.

## 9.2 Uniform, exponential, normal

Three laws do most of the work in the rest of this book. Each answers a natural question.

### The uniform law: "no point is preferred"

**Definition.** $X$ is **uniform** on $[a, b]$, written $X \sim \text{Uniform}(a, b)$, if its density is

$$
f(x) = \frac{1}{b - a} \quad \text{for } a \le x \le b, \qquad f(x) = 0 \text{ otherwise.}
$$

Its defining property is the one the spinner had: the chance of a sub-interval is its length divided by $b - a$.

**Mean and variance.** By symmetry $E[X] = \tfrac{a + b}{2}$. For the variance, first take $a = 0$, $b = 1$:
$E[X^2] = \int_0^1 x^2\,dx = \tfrac13$, so $\operatorname{Var} = \tfrac13 - \tfrac14 = \tfrac{1}{12}$. A general uniform is
$a + (b - a)U$ with $U \sim \text{Uniform}(0, 1)$ (check: this maps $[0, 1]$ onto $[a, b]$ and stretches lengths by
$b - a$), so

$$
\operatorname{Var}(X) = (b - a)^2 \operatorname{Var}(U) = \frac{(b - a)^2}{12} .
$$

**Example 3.** A bus comes every 10 minutes and you arrive at a random moment, so your wait $W$ is uniform on
$[0, 10]$. Then $P(W > 7) = \tfrac{3}{10}$, the mean wait is 5 minutes, and the standard deviation is
$10/\sqrt{12} \approx 2.89$ minutes.

The uniform law on $[0, 1]$ is the raw material of simulation: a computer's `random.random()` imitates it, and section
9.3 shows how every other law can be built from it.

### The exponential law: "waiting without memory"

A radioactive nucleus does not age. A uranium atom that has existed for a billion years is exactly as likely to decay
in the next second as one made yesterday; this is what physicists have found by experiment, again and again. What law
should its lifetime $T$ follow?

Write $G(t) = P(T > t)$ for the chance of surviving past time $t$ (the **survival function**). "Does not age" says: given
survival to time $s$, the chance of surviving a further $t$ is the same as for a new atom,

$$
P(T > s + t \mid T > s) = P(T > t) \quad \text{for all } s, t \ge 0 .
$$

This is the **memoryless property**. Since the event $\{T > s + t\}$ is inside $\{T > s\}$, the left side is
$G(s + t)/G(s)$, so memorylessness is the equation

$$
G(s + t) = G(s)\,G(t) .
$$

**Definition.** $T$ is **exponential** with rate $\lambda > 0$, written $T \sim \text{Exp}(\lambda)$, if

$$
f(t) = \lambda e^{-\lambda t} \quad (t \ge 0), \qquad \text{so} \qquad P(T > t) = \int_t^\infty \lambda e^{-\lambda x}\,dx = e^{-\lambda t} .
$$

**Theorem.** (a) The exponential law is memoryless. (b) Conversely, if $T > 0$ is a random variable with
$P(T > t) > 0$ for all $t$ and the memoryless property, then $T$ is exponential for some rate $\lambda$.

*Proof of (a).* $G(s + t) = e^{-\lambda(s + t)} = e^{-\lambda s} e^{-\lambda t} = G(s) G(t)$. $\square$

*Proof of (b).* Here $G(t) = P(T > t)$ is non-increasing (a longer survival is harder), positive, and satisfies
$G(s + t) = G(s)G(t)$. Put $c = G(1)$, a number in $(0, 1]$; it cannot be 1, because then $G(n) = 1$ for all $n$ and
$T$ would be infinite. So write $c = e^{-\lambda}$ with $\lambda > 0$.

Applying the equation $n$ times, $G(nt) = G(t)^n$ for every whole number $n$. With $t = 1/n$ this gives
$G(1/n)^n = G(1) = e^{-\lambda}$, so $G(1/n) = e^{-\lambda/n}$, and then $G(m/n) = G(1/n)^m = e^{-\lambda m/n}$. So
$G(q) = e^{-\lambda q}$ for every positive rational $q$.

For a real $t > 0$, choose rationals $q_1 < t < q_2$ as close to $t$ as we like. Because $G$ is non-increasing,
$e^{-\lambda q_2} = G(q_2) \le G(t) \le G(q_1) = e^{-\lambda q_1}$. Letting $q_1$ and $q_2$ tend to $t$ squeezes
$G(t) = e^{-\lambda t}$. $\square$

The monotonicity was essential: the equation $G(s+t) = G(s)G(t)$ alone has wild solutions (built with the axiom of
choice) that are not exponentials, but none of them is monotone, so none is a survival function. The discrete twin of
this theorem is that the geometric law of [Chapter 5](05-Discrete-Random-Variables.md) is the only memoryless law on
$\{1, 2, 3, \dots\}$; in fact an exponential lifetime rounded up to whole seconds is geometric.

**Mean and variance.** By the tail formula, $E[T] = \int_0^\infty e^{-\lambda t}\,dt = \tfrac{1}{\lambda}$. For the
second moment integrate by parts:

$$
E[T^2] = \int_0^\infty t^2 \lambda e^{-\lambda t}\,dt = \Big[-t^2 e^{-\lambda t}\Big]_0^\infty + \int_0^\infty 2t e^{-\lambda t}\,dt = 0 + \frac{2}{\lambda} E[T] = \frac{2}{\lambda^2},
$$

so $\operatorname{Var}(T) = \tfrac{2}{\lambda^2} - \tfrac{1}{\lambda^2} = \tfrac{1}{\lambda^2}$. The mean and the standard
deviation are both $1/\lambda$. The rate $\lambda$ is "events per unit time": a rate of 3 per hour means a mean wait of
20 minutes.

**Example 4 (half-life).** The **half-life** $h$ of a radioactive isotope is the time after which half of a large
sample has decayed, that is, the median lifetime of one atom: $e^{-\lambda h} = \tfrac12$, so $h = \tfrac{\ln 2}{\lambda}$.
Carbon-14 has a half-life of about 5730 years, so $\lambda = \ln 2 / 5730 \approx 1.21 \times 10^{-4}$ per year, and the
mean lifetime of one atom is $1/\lambda \approx 8270$ years, longer than the half-life. The chance that a given carbon-14
atom survives 10 000 years is

$$
e^{-10000\lambda} = 2^{-10000/5730} \approx 0.298 .
$$

Check: $10000/5730 \approx 1.745$ half-lives, and $2^{-1.745} \approx 0.298$.

**Example 5 (memory in action).** A light bulb's lifetime is modelled as exponential with mean 1000 hours. The chance
it lasts more than 1500 hours is $e^{-1.5} \approx 0.223$. If it has already lasted 1000 hours, the chance it lasts
another 1500 is also $e^{-1.5}$. Real bulbs wear out, so the model is only a model: the exponential law fits
"failures from outside shocks", not "failures from wearing out". Deciding which kind of failure you have is a question
about the world, not about mathematics.

The exponential law is the time between events in the **Poisson process**, the model of events that happen "at random
in time" (clicks of a Geiger counter, calls to a help line). [Chapter 14](14-Poisson-Processes.md) builds that process
and shows why the Poisson counts of [Chapter 5](05-Discrete-Random-Variables.md) and the exponential waits are two
faces of one object.

### The normal law: "many small causes"

**Definition.** $Z$ is **standard normal**, written $Z \sim N(0, 1)$, if its density is

$$
\varphi(z) = \frac{1}{\sqrt{2\pi}}\, e^{-z^2/2}, \qquad -\infty < z < \infty .
$$

More generally $X \sim N(\mu, \sigma^2)$ (normal with mean $\mu$ and variance $\sigma^2$) if $X = \mu + \sigma Z$; its
density is

$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} \exp\left( -\frac{(x - \mu)^2}{2\sigma^2} \right) .
$$

This is the bell curve. Two facts are not obvious: that the area under $\varphi$ is 1 (there is no formula for an
antiderivative of $e^{-z^2/2}$ in terms of the usual functions, so the integral needs a trick), and that the normal law
appears whenever many small independent effects add up. The first is proved in [Chapter 10](10-The-Normal-Distribution.md),
which is devoted entirely to this law; the second is the central limit theorem of [Chapter 12](12-The-Central-Limit-Theorem.md).
Here we note only that $\varphi$ is symmetric about 0, so $E[Z] = 0$, and that (as Chapter 10 shows) $\operatorname{Var}(Z) = 1$.

## 9.3 The cdf and quantiles

### One function for every random variable

Densities only exist for continuous variables, and mass functions only for discrete ones. There is one description that
works for every random variable whatsoever.

**Definition.** The **cumulative distribution function** (cdf) of a random variable $X$ is

$$
F(x) = P(X \le x), \qquad -\infty < x < \infty .
$$

**Theorem (properties of a cdf).** Every cdf $F$ is

1. non-decreasing: if $x \le y$ then $F(x) \le F(y)$;
2. tends to 0 at $-\infty$ and to 1 at $+\infty$;
3. right-continuous: $F(x + h) \to F(x)$ as $h \downarrow 0$.

Conversely, every function with these three properties is the cdf of some random variable.

*Proof of 1 to 3.* (1) $\{X \le x\} \subseteq \{X \le y\}$. (2) and (3) use **continuity of probability**, a consequence
of countable additivity proved in [Chapter 1](01-What-Probability-Is.md): if events $A_1 \supseteq A_2 \supseteq \dots$
shrink to $A = \bigcap A_n$ then $P(A_n) \to P(A)$, and likewise for growing events. The events $\{X \le x + 1/n\}$ shrink
to $\{X \le x\}$, which gives (3) along the sequence $h = 1/n$, and monotonicity then gives it for every $h \downarrow 0$.
The events $\{X \le -n\}$ shrink to the empty set and $\{X \le n\}$ grow to everything, which gives (2). $\square$

The converse is constructive and is the basis of the "inverse transform" below.

For a discrete variable, $F$ is a staircase that jumps by $P(X = k)$ at each value $k$. For a continuous variable with
density $f$, $F(x) = \int_{-\infty}^x f(t)\,dt$ has no jumps, and by the fundamental theorem of calculus

$$
F'(x) = f(x) \quad \text{wherever } f \text{ is continuous.}
$$

So to find a density, it is often easiest to find the cdf first and differentiate. Section 9.4 uses this again and
again. Any interval probability comes from $F$: $P(a < X \le b) = F(b) - F(a)$.

**Example 6.** For $X \sim \text{Uniform}(0, 1)$, $F(x) = 0$ for $x < 0$, $F(x) = x$ on $[0, 1]$, and $F(x) = 1$ for
$x > 1$. For $T \sim \text{Exp}(\lambda)$, $F(t) = 1 - e^{-\lambda t}$ for $t \ge 0$.

**Example 7 (a point in a disc).** Choose a point uniformly in a disc of radius 1 ("uniformly" means the chance of a
region is its area divided by $\pi$), and let $R$ be its distance from the centre. Then $R \le r$ exactly when the point
lies in the disc of radius $r$, so

$$
F(r) = \frac{\pi r^2}{\pi} = r^2, \qquad f(r) = 2r \quad (0 \le r \le 1) .
$$

$R$ is not uniform: there is more room far from the centre. Its mean is $\int_0^1 2r^2\,dr = \tfrac23$.

### Medians and quantiles

**Definition.** For $0 < p < 1$, a **$p$-quantile** of $X$ is a number $x_p$ with $F(x_p) = p$; if $F$ is continuous
and strictly increasing on the range of $X$ there is exactly one, written $x_p = F^{-1}(p)$. The $\tfrac12$-quantile is
the **median**, the $\tfrac14$ and $\tfrac34$ quantiles are the **quartiles**, and the $\tfrac{k}{100}$ quantiles are the
**percentiles**. (For a cdf with jumps or flat parts, the general definition is $x_p = \min\{x : F(x) \ge p\}$, the
**generalised inverse**; the minimum exists because $F$ is right-continuous.)

The median is "the middle value": half the probability lies on each side. It need not equal the mean.

**Example 8.** For $\text{Exp}(\lambda)$, solve $1 - e^{-\lambda x} = p$: $x_p = -\ln(1 - p)/\lambda$. The median is
$\ln 2/\lambda \approx 0.693/\lambda$, below the mean $1/\lambda$, because the long right tail pulls the mean up. The
90th percentile is $\ln 10/\lambda \approx 2.30/\lambda$. For Example 1 ($F(x) = x^3/27$ on $[0, 3]$) the median solves
$x^3 = 13.5$: $x \approx 2.381$, while the mean is $2.25$. Here the mean is below the median, because the long tail is
on the left.

### Making any law from a uniform one

**Theorem (inverse transform).** Let $F$ be a cdf and $F^{-1}$ its generalised inverse. If $U \sim \text{Uniform}(0, 1)$,
then $X = F^{-1}(U)$ has cdf $F$.

*Proof (for $F$ continuous and strictly increasing, where $F^{-1}$ is the ordinary inverse).* Because $F$ is increasing,
$F^{-1}(U) \le x$ exactly when $U \le F(x)$. So

$$
P(X \le x) = P(U \le F(x)) = F(x),
$$

using $P(U \le u) = u$ for $u \in [0, 1]$. For the generalised inverse the same equivalence
$F^{-1}(u) \le x \iff u \le F(x)$ still holds (it follows from right-continuity), and the proof goes through
unchanged. $\square$

**Example 9.** To simulate $\text{Exp}(\lambda)$, take $X = -\ln(1 - U)/\lambda$. Since $1 - U$ is also uniform, the
simpler $-\ln(U)/\lambda$ works too.

The reverse direction is just as useful: if $X$ is continuous with cdf $F$, then $F(X)$ is uniform on $(0, 1)$
(exercise 10). This is called the **probability integral transform**.

### Try it in Python

```python
import random, math

random.seed(2026)
lam = 0.5
xs = [-math.log(1 - random.random()) / lam for _ in range(100_000)]
print(sum(xs) / len(xs))                            # close to the mean 1/lam = 2
print(sum(x > 3 for x in xs) / len(xs))             # close to exp(-1.5) = 0.223
xs.sort()
print(xs[len(xs) // 2], math.log(2) / lam)          # sample median vs ln 2 / lam = 1.386
```

The standard library also has `random.expovariate(lam)` and `random.gauss(mu, sigma)`, which do this for you.

## 9.4 Change of variables

*Level: intermediate to advanced.*

### The problem

If $X$ has a known density and $Y = g(X)$, what is the density of $Y$? Examples: a radius is random, what about the
area $\pi R^2$? A voltage is normal, what about the power $V^2/R$? A growth rate is normal, what about the size
$e^X$?

### The cdf method

The safest method has two steps: find the cdf of $Y$ by turning $\{Y \le y\}$ into an event about $X$, then
differentiate.

**Example 10 (area of a random circle).** The radius $R$ is uniform on $[0, 1]$, and $A = \pi R^2$. For $0 \le a \le \pi$,

$$
P(A \le a) = P\left(R \le \sqrt{a/\pi}\right) = \sqrt{a/\pi}, \qquad \text{so} \qquad f_A(a) = \frac{1}{2\sqrt{\pi a}} \quad (0 < a < \pi) .
$$

Check: $\int_0^\pi \frac{da}{2\sqrt{\pi a}} = \frac{1}{\sqrt{\pi}}\sqrt{a}\,\Big|_0^\pi = 1$. The mean area is
$E[A] = \pi E[R^2] = \pi/3$, not $\pi (E R)^2 = \pi/4$: in general $E[g(X)] \ne g(E[X])$.

**Example 11 (a square, not one-to-one).** Let $X \sim \text{Uniform}(-1, 1)$ and $Y = X^2$. For $0 \le y \le 1$,

$$
P(Y \le y) = P\left(-\sqrt{y} \le X \le \sqrt{y}\right) = \frac{2\sqrt{y}}{2} = \sqrt{y}, \qquad f_Y(y) = \frac{1}{2\sqrt{y}} .
$$

The density is infinite at 0 (but its area is finite): squaring crowds the numbers near 0 together.

**Example 12 (the square of a standard normal).** Let $Z \sim N(0, 1)$ and $Y = Z^2$. For $y > 0$,
$F_Y(y) = P(-\sqrt{y} \le Z \le \sqrt{y}) = \Phi(\sqrt{y}) - \Phi(-\sqrt{y})$, where $\Phi$ is the cdf of $Z$.
Differentiating with the chain rule (and $\Phi' = \varphi$),

$$
f_Y(y) = \frac{1}{2\sqrt{y}}\left(\varphi(\sqrt{y}) + \varphi(-\sqrt{y})\right) = \frac{1}{\sqrt{2\pi y}}\, e^{-y/2} \quad (y > 0) .
$$

This is the **chi-squared law with one degree of freedom**, which statisticians use constantly. Note that we found the
density of $Y$ without ever computing $\Phi$: the derivative undid the integral.

### The formula for one-to-one maps

When $g$ is strictly monotone and differentiable, the cdf method can be done once and for all.

**Theorem (change of variables in one dimension).** Let $X$ have density $f_X$, supported on an interval $I$, and let
$g$ be differentiable and strictly increasing or strictly decreasing on $I$, with inverse $h = g^{-1}$. Then $Y = g(X)$
has density

$$
f_Y(y) = f_X(h(y))\,\lvert h'(y) \rvert \quad \text{for } y \text{ in } g(I),
$$

and $f_Y(y) = 0$ elsewhere.

*Proof.* If $g$ is increasing, then $g(X) \le y \iff X \le h(y)$, so $F_Y(y) = F_X(h(y))$. Differentiate with the chain
rule: $f_Y(y) = f_X(h(y))\,h'(y)$, and $h' > 0$. If $g$ is decreasing, then $g(X) \le y \iff X \ge h(y)$, so
$F_Y(y) = 1 - F_X(h(y))$ and $f_Y(y) = -f_X(h(y))\,h'(y)$, where now $h' < 0$. In both cases the result is
$f_X(h(y))\,|h'(y)|$. $\square$

**Why the factor $|h'(y)|$?** Probability must be conserved. The small interval $[y, y + dy]$ comes from an interval of
length $|h'(y)|\,dy$ around $x = h(y)$, which carries probability $f_X(x)\,|h'(y)|\,dy$. Where $g$ stretches lengths,
the same paint is spread thinner, and the density goes down. In higher dimensions $|h'|$ becomes the absolute value of a
Jacobian determinant; [Chapter 11](11-Joint-Distributions.md) uses it, and the MAT257 guide on the
[change of variables theorem](../../uoft/MAT257Y1/unit10.md) proves it.

**Example 13 (linear maps).** $Y = aX + b$ with $a \ne 0$: $h(y) = (y - b)/a$, so

$$
f_Y(y) = \frac{1}{|a|}\, f_X\left(\frac{y - b}{a}\right) .
$$

For $X = Z \sim N(0, 1)$ and $Y = \mu + \sigma Z$ this gives exactly the $N(\mu, \sigma^2)$ density of section 9.2.

**Example 14 (the log-normal law).** If $X \sim N(0, 1)$ and $Y = e^X$, then $h(y) = \ln y$, $h'(y) = 1/y$, and

$$
f_Y(y) = \frac{1}{y\sqrt{2\pi}}\, e^{-(\ln y)^2/2} \quad (y > 0) .
$$

Quantities that grow by many small random *factors* (rather than terms) are often modelled this way; taking logs turns
products into sums, and sums of many small terms are close to normal by the central limit theorem.

**Example 15 (a lighthouse).** A lighthouse stands 1 km from a straight coast and turns its beam to a uniformly random
angle $\Theta$ in $(-\tfrac{\pi}{2}, \tfrac{\pi}{2})$, measured from the perpendicular. The beam hits the coast at the
point $X = \tan \Theta$. Here $h(x) = \arctan x$ and $h'(x) = 1/(1 + x^2)$, so

$$
f_X(x) = \frac{1}{\pi} \cdot \frac{1}{1 + x^2}, \qquad -\infty < x < \infty .
$$

This is the **Cauchy law**. It looks harmless, a bell shape, but $\int |x| f(x)\,dx = \infty$: the Cauchy law has no
mean. [Chapter 12](12-The-Central-Limit-Theorem.md) shows that because of this, averaging Cauchy variables does not help
at all.

## 9.5 Buffon's needle

### The problem

In 1733 Georges-Louis Leclerc, Comte de Buffon, a French naturalist, presented to the Paris Academy of Sciences some
problems about games of chance on a tiled floor, and his solution was printed in his *Essai d'arithmétique morale*
in 1777. The best known one is this: a floor is ruled with parallel lines a distance $d$ apart, and a needle of length
$\ell \le d$ is dropped on it at random. What is the chance that the needle crosses a line?

It is one of the first problems in which a probability is computed from a continuous model, and its answer contains
$\pi$, which is why it is still famous.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 640 200" role="img" aria-label="Left: parallel lines with seven needles scattered on them; three needles cross a line and are drawn in orange, four do not and are drawn in blue. Right: one needle between two lines at distance d, with its centre at distance x from the nearest line and the angle theta between the needle and the lines marked">
  <line x1="20" y1="40" x2="390" y2="40" stroke="currentColor" stroke-width="1.5"/>
  <line x1="20" y1="100" x2="390" y2="100" stroke="currentColor" stroke-width="1.5"/>
  <line x1="20" y1="160" x2="390" y2="160" stroke="currentColor" stroke-width="1.5"/>
  <line x1="48.3" y1="57.5" x2="91.7" y2="82.5" stroke="#9cc9ea" stroke-width="3"/>
  <line x1="135.7" y1="90.4" x2="144.3" y2="139.6" stroke="#eea66f" stroke-width="3"/>
  <line x1="231.7" y1="32.5" x2="188.3" y2="57.5" stroke="#eea66f" stroke-width="3"/>
  <line x1="260.4" y1="105.7" x2="309.6" y2="114.3" stroke="#9cc9ea" stroke-width="3"/>
  <line x1="362.5" y1="53.3" x2="337.5" y2="96.7" stroke="#9cc9ea" stroke-width="3"/>
  <line x1="95.7" y1="139.5" x2="124.3" y2="180.5" stroke="#eea66f" stroke-width="3"/>
  <line x1="344.1" y1="138.5" x2="295.9" y2="151.5" stroke="#9cc9ea" stroke-width="3"/>
  <line x1="420" y1="30" x2="600" y2="30" stroke="currentColor" stroke-width="1.5"/>
  <line x1="420" y1="150" x2="600" y2="150" stroke="currentColor" stroke-width="1.5"/>
  <line x1="500" y1="153.3" x2="550" y2="66.7" stroke="#eea66f" stroke-width="3"/>
  <circle cx="525" cy="110" r="3.5" fill="#7ccf9a" stroke="currentColor"/>
  <line x1="525" y1="110" x2="525" y2="150" stroke="#7ccf9a" stroke-width="2" stroke-dasharray="4 3"/>
  <line x1="525" y1="110" x2="585" y2="110" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <path d="M547,110 A22,22 0 0 0 536,90.9" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="552" y="100" font-size="13" fill="currentColor">θ</text>
  <text x="531" y="136" font-size="13" fill="currentColor">x</text>
  <line x1="618" y1="30" x2="618" y2="150" stroke="currentColor" stroke-width="1"/>
  <line x1="612" y1="30" x2="624" y2="30" stroke="currentColor" stroke-width="1"/>
  <line x1="612" y1="150" x2="624" y2="150" stroke="currentColor" stroke-width="1"/>
  <text x="628" y="94" font-size="13" fill="currentColor">d</text>
  <text x="470" y="190" font-size="12" fill="currentColor">crosses when x ≤ (ℓ/2) sin θ</text>
</svg>
</div>

### Making "at random" precise

Bertrand's paradox ([Chapter 2](02-Counting-and-Equally-Likely-Outcomes.md)) warns that "at random" means nothing until
you say which quantities are uniform. Describe the needle by two numbers:

- $X$, the distance from the needle's centre to the **nearest** line, which lies in $[0, \tfrac{d}{2}]$;
- $\Theta$, the acute angle between the needle and the lines, which lies in $[0, \tfrac{\pi}{2}]$.

The model is: $X$ is uniform on $[0, d/2]$, $\Theta$ is uniform on $[0, \pi/2]$, and they are independent. This is a
physical assumption (a needle tossed from high enough, onto a floor much bigger than the needle, has no preferred
position or direction), and it is the assumption Buffon made. Independence means that the pair $(X, \Theta)$ is uniform
on the rectangle $[0, d/2] \times [0, \pi/2]$: its joint density is the constant

$$
\frac{1}{d/2} \cdot \frac{1}{\pi/2} = \frac{4}{\pi d},
$$

and the chance that $(X, \Theta)$ lands in a region of the rectangle is that constant times the region's area. (Joint
densities are treated fully in [Chapter 11](11-Joint-Distributions.md); here we only need "area times constant".)

### The computation

The half of the needle on the side of the nearest line reaches a vertical distance $\tfrac{\ell}{2}\sin\Theta$ from the
centre towards that line. So the needle crosses the nearest line exactly when

$$
X \le \frac{\ell}{2} \sin \Theta .
$$

Because $\ell \le d$, it can never reach the farther line (which is at least $d/2 \ge \ell/2$ away), so this is the
whole condition. The crossing region is the part of the rectangle under the curve $x = \tfrac{\ell}{2}\sin\theta$. Its
area is

$$
\int_0^{\pi/2} \frac{\ell}{2} \sin\theta \, d\theta = \frac{\ell}{2}\Big[-\cos\theta\Big]_0^{\pi/2} = \frac{\ell}{2} .
$$

Therefore

$$
P(\text{the needle crosses a line}) = \frac{4}{\pi d} \cdot \frac{\ell}{2} = \frac{2\ell}{\pi d} .
$$

For a needle exactly as long as the spacing, $\ell = d$, the chance is $2/\pi \approx 0.6366$.

Check: the formula gives a number between 0 and 1 for every $\ell \le d$ (at most $2/\pi$), and it grows in proportion
to $\ell$, which makes sense for short needles: a needle half as long is (for small needles) half as likely to reach a
line.

### Estimating $\pi$ by experiment

Turn the formula around: $\pi = \dfrac{2\ell}{d\,P}$. If you toss the needle $n$ times and see $C$ crossings, the law of
large numbers ([Chapter 7](07-Inequalities-and-the-Law-of-Large-Numbers.md)) says $C/n \to P$, so

$$
\hat\pi = \frac{2\ell n}{d\,C}
$$

tends to $\pi$. This is the first Monte Carlo method in history: a random experiment used to compute a number that has
nothing random about it.

It is also a *bad* way to compute $\pi$, and it is worth seeing why. With $\ell = d$, each toss is a Bernoulli trial
with $p = 2/\pi$, so $C/n$ has standard deviation $\sqrt{p(1-p)/n} \approx 0.48/\sqrt{n}$. Since
$\hat\pi = 2/(C/n)$, a small error $\delta$ in $C/n$ becomes an error of about $(2/p^2)\delta \approx 4.93\,\delta$ in
$\hat\pi$. So the standard error of $\hat\pi$ is about $2.4/\sqrt{n}$. To get two correct decimals (error about
$0.005$) you need $n \approx (2.4/0.005)^2 \approx 230\,000$ tosses; each further digit costs a hundred times more. The
general lesson, which [Chapter 7](07-Inequalities-and-the-Law-of-Large-Numbers.md) also drew from its own Monte Carlo
estimate of $\pi$, is that random sampling converges like $1/\sqrt{n}$: slow, but the rate does not depend on how
complicated the problem is, and that is why Monte Carlo methods are used for problems in many dimensions.

**A caution from history.** In 1901 the Italian mathematician Mario Lazzarini reported tossing a needle 3408 times and
getting $\pi \approx \tfrac{355}{113} = 3.1415929\ldots$, correct to six decimals. By the calculation above, an error of
less than $10^{-6}$ after a few thousand tosses is wildly unlikely by chance. Lee Badger, in a 1994 article in
*Mathematics Magazine*, pointed out that with Lazzarini's needle-to-spacing ratio of $5/6$ the estimate equals
$\tfrac{355}{113}$ exactly when the number of tosses is a multiple of 213 and the number of crossings the same multiple
of 113; and $3408 = 16 \times 213$, with $1808 = 16 \times 113$ crossings. He argued that the result was almost
certainly arranged, for example by stopping at a convenient moment. Whatever happened, the result is too good to be honest evidence. A real experiment
should fix $n$ in advance.

Check of the arithmetic: with $\ell/d = 5/6$, $\hat\pi = 2 \cdot \tfrac56 \cdot \tfrac{3408}{1808} = \tfrac{5 \cdot 3408}{3 \cdot 1808} = \tfrac{17040}{5424} = \tfrac{355}{113}$.

### Try it in Python

```python
import random, math

random.seed(1)
n, ell, d = 1_000_000, 1.0, 1.0
crossings = 0
for _ in range(n):
    x = random.uniform(0, d / 2)
    theta = random.uniform(0, math.pi / 2)
    crossings += x <= ell / 2 * math.sin(theta)
print(crossings / n, 2 / math.pi)          # about 0.637 and 0.6366
print(2 * ell * n / (d * crossings))       # an estimate of pi
```

Be honest about what this program does: it uses `math.pi` to choose the angle, so it cannot claim to *discover* $\pi$.
It checks the formula. A physical needle (or a simulation that picks a random direction without using $\pi$, for example
by choosing a random point in a square and keeping it only if it falls in the inscribed circle) is needed for a genuine
estimate.

### Barbier's theorem: needles and noodles

*Level: advanced.*

What if the needle is longer than $d$, or bent? Then it can cross several lines, and "the chance of crossing" becomes
awkward. The right question is the **expected number** of crossings, and it has a beautiful answer, due to Joseph-Émile
Barbier in 1860.

**Theorem (Barbier).** A rigid curve of total length $L$ (straight or bent, made of finitely many straight or smooth
pieces) is dropped at random on lines spaced $d$ apart. The expected number of crossings is $\dfrac{2L}{\pi d}$.

*Proof.* Let $N$ be the number of crossings. Cut the curve into $m$ short pieces of lengths $L_1, \dots, L_m$, and let
$N_i$ be the crossings of piece $i$. Then $N = N_1 + \dots + N_m$, and by linearity of expectation (which needs no
independence: the pieces are rigidly joined, so they are far from independent) $E[N] = \sum E[N_i]$.

Each piece, on its own, lands at a uniformly random position and direction. So $E[N_i]$ depends only on the piece's
length; write it $c(L_i)$. Joining two straight segments end to end in a line shows $c(a + b) = c(a) + c(b)$, and $c$ is
non-decreasing in length, so (by the same squeezing argument as for the exponential law) $c(L) = kL$ for a constant $k$.
For a straight needle with $\ell \le d$, the number of crossings is 0 or 1, so its expected value is the crossing
probability, $2\ell/(\pi d)$. Hence $k = 2/(\pi d)$ and $E[N] = 2L/(\pi d)$ for any curve made of straight pieces; a
smooth curve is a limit of polygons, and the expected count passes to the limit. $\square$

The proof hides a step that deserves a sentence: if the whole curve is dropped "uniformly at random", then each piece is
also at a uniformly random position and direction. That is true because shifting and rotating the whole curve shifts
and rotates each piece by the same amount.

A neat check: a circle of diameter $d$ has length $\pi d$, and it crosses the lines exactly twice (except on a set of
positions of probability 0, where it touches a line). Barbier's formula gives $2 \pi d / (\pi d) = 2$. In fact Barbier
ran this argument backwards: it says the expected crossings depend only on length, and the circle supplies the
constant. This is the start of **integral geometry**, which measures curves and surfaces by averaging over random
lines.

## Check yourself

??? question "1. For which $k$ is $f(x) = kx(1 - x)$ on $[0, 1]$ a density? Find $P(X < \tfrac12)$, $E[X]$ and $\operatorname{Var}(X)$."

    $\int_0^1 kx(1 - x)\,dx = k\left(\tfrac12 - \tfrac13\right) = \tfrac{k}{6}$, so $k = 6$. The density is symmetric
    about $\tfrac12$, so $P(X < \tfrac12) = \tfrac12$ and $E[X] = \tfrac12$. From section 9.1,
    $E[X^2] = \tfrac{3}{10}$, so $\operatorname{Var}(X) = \tfrac{3}{10} - \tfrac14 = \tfrac{1}{20}$.

??? question "2. Customers arrive at a counter with exponential gaps of mean 4 minutes. What is the chance of a gap longer than 6 minutes? What is the median gap?"

    The rate is $\lambda = \tfrac14$ per minute. $P(T > 6) = e^{-6/4} = e^{-1.5} \approx 0.223$. The median is
    $\ln 2/\lambda = 4\ln 2 \approx 2.77$ minutes, shorter than the mean.

??? question "3. Show that $P(U > 0.5 \mid U > 0.25) \ne P(U > 0.25)$ for $U \sim \text{Uniform}(0, 1)$. What does this say?"

    $P(U > 0.5 \mid U > 0.25) = \frac{0.5}{0.75} = \frac23 \approx 0.667$, while $P(U > 0.25) = 0.75$. So the
    uniform law is not memoryless: having already "survived" to 0.25 makes survival to 0.5 *less* likely than survival
    of 0.25 from scratch. A uniform lifetime has a fixed maximum and "ages".

??? question "4. Let $F(x) = 1 - 1/x^2$ for $x \ge 1$ and $F(x) = 0$ for $x < 1$. Check that $F$ is a cdf, find the density, the mean and the variance."

    $F$ is continuous, increasing, $F(1) = 0$ and $F(x) \to 1$. The density is $f(x) = F'(x) = 2/x^3$ for $x > 1$.
    By the tail formula $E[X] = 1 + \int_1^\infty x^{-2}\,dx = 2$ (the first 1 is $\int_0^1 P(X > t)\,dt$). But
    $E[X^2] = \int_1^\infty x^2 \cdot 2x^{-3}\,dx = \int_1^\infty \tfrac{2}{x}\,dx = \infty$. The mean exists and the
    variance is infinite. (This is a **Pareto** law; such heavy tails matter in [Chapter 12](12-The-Central-Limit-Theorem.md).)

??? question "5. $U$ is uniform on $(0, 1)$. Find the law of $Y = -2\ln U$."

    For $y > 0$: $P(Y > y) = P(\ln U < -y/2) = P(U < e^{-y/2}) = e^{-y/2}$. So $Y \sim \text{Exp}(\tfrac12)$, with
    mean 2. (Compare Example 12: the chi-squared law with *two* degrees of freedom is also $\text{Exp}(\tfrac12)$.)

??? question "6. $X$ is uniform on $[0, 1]$ and $Y = X^3$. Find the density of $Y$ and check that its area is 1."

    $g(x) = x^3$ is increasing with inverse $h(y) = y^{1/3}$ and $h'(y) = \tfrac13 y^{-2/3}$. So
    $f_Y(y) = 1 \cdot \tfrac13 y^{-2/3}$ for $0 < y < 1$. Area: $\int_0^1 \tfrac13 y^{-2/3}\,dy = \left[y^{1/3}\right]_0^1 = 1$.

??? question "7. $S \sim \text{Exp}(\lambda)$ and $T \sim \text{Exp}(\mu)$ are independent. Show that $\min(S, T) \sim \text{Exp}(\lambda + \mu)$."

    The minimum exceeds $t$ exactly when both do: $P(\min(S,T) > t) = P(S > t)P(T > t) = e^{-\lambda t}e^{-\mu t} = e^{-(\lambda + \mu)t}$,
    using independence of the events $\{S > t\}$ and $\{T > t\}$. This survival function is that of
    $\text{Exp}(\lambda + \mu)$. Two independent radioactive sources together decay like one source with the summed
    rate.

??? question "8. A needle of length $\ell = d/2$ is dropped on lines $d$ apart. What is the chance it crosses? If 1000 tosses give 318 crossings, what estimate of $\pi$ results?"

    $P = 2\ell/(\pi d) = 1/\pi \approx 0.318$. Turning it round, $\hat\pi = 2\ell n/(dC) = n/C = 1000/318 \approx 3.145$.
    The standard error at $n = 1000$ is roughly $0.15$ for this ratio (the same calculation as in 9.5, with
    $p = 1/\pi$), so being within $0.004$ of $\pi$ was luck.

??? question "9. A point is chosen uniformly in the unit disc and $R$ is its distance from the centre. Find $P(R \le \tfrac12)$, the median of $R$ and $E[R^2]$."

    $F(r) = r^2$, so $P(R \le \tfrac12) = \tfrac14$ (the inner disc has a quarter of the area). The median solves
    $r^2 = \tfrac12$: $r = 1/\sqrt2 \approx 0.707$. $E[R^2] = \int_0^1 r^2 \cdot 2r\,dr = \tfrac12$.

??? question "10. Let $X$ be continuous with a cdf $F$ that is strictly increasing where $0 < F < 1$. Prove that $F(X)$ is uniform on $(0, 1)$."

    For $0 < u < 1$ let $x = F^{-1}(u)$. Since $F$ is increasing, $F(X) \le u \iff X \le x$, so
    $P(F(X) \le u) = P(X \le x) = F(x) = u$. That is the uniform cdf. (Continuity matters: for a discrete $X$, $F(X)$
    takes only finitely or countably many values and cannot be uniform.)

??? question "11. Let $Z \sim N(0, 1)$. Find the density of $|Z|$ and its mean."

    For $y > 0$: $P(|Z| \le y) = \Phi(y) - \Phi(-y)$, whose derivative is $2\varphi(y) = \sqrt{2/\pi}\,e^{-y^2/2}$. Then
    $E|Z| = \int_0^\infty y \sqrt{2/\pi}\,e^{-y^2/2}\,dy = \sqrt{2/\pi}\Big[-e^{-y^2/2}\Big]_0^\infty = \sqrt{2/\pi} \approx 0.798$.

??? question "12. (Harder.) Use Barbier's theorem to find the expected number of crossings for a needle of length $3d$. Why can't the crossing probability formula be used directly?"

    $E[N] = 2 \cdot 3d/(\pi d) = 6/\pi \approx 1.91$. The formula $2\ell/(\pi d)$ is the probability of *at least one*
    crossing only when $\ell \le d$, because only then is the count 0 or 1, so that its expectation equals the chance of
    a crossing. A needle of length $3d$ can cross up to 3 lines, and $6/\pi > 1$ cannot be a probability.

## What you learned

- A continuous random variable gives probability 0 to every point; probability lives on intervals, as the area under a
  density $f \ge 0$ with total area 1.
- Means and variances are integrals: $E[g(X)] = \int g(x)f(x)\,dx$, and for $X \ge 0$, $E[X] = \int_0^\infty P(X > t)\,dt$.
- The uniform law has no preferred point; the exponential law is the one and only memoryless waiting time, with mean
  and standard deviation $1/\lambda$; the normal law $N(\mu, \sigma^2)$ is $\mu + \sigma Z$.
- The cdf $F(x) = P(X \le x)$ describes every random variable; $F' = f$, quantiles invert $F$, and $F^{-1}(U)$ turns a
  uniform number into any law.
- For a monotone $g$, $f_{g(X)}(y) = f_X(h(y))\,|h'(y)|$ with $h = g^{-1}$; otherwise go through the cdf.
- Buffon's needle crosses with probability $2\ell/(\pi d)$; Barbier extended it to $2L/(\pi d)$ expected crossings for
  any curve, and the experiment is an honest but slow Monte Carlo estimate of $\pi$.

**Next:** [Chapter 10](10-The-Normal-Distribution.md), the bell curve itself: why its area is 1, how to use its tables,
and why it is the limit of the binomial.

## Further reading

- W. Feller, *An Introduction to Probability Theory and Its Applications*, Vol. II, 2nd ed., 1971 (chapter I for densities and the exponential law).
- S. Ross, *A First Course in Probability*, 10th ed., 2019 (chapter 5).
- J. Pitman, *Probability*, 1993 (chapters 4 and 5, with many worked change-of-variables examples).
- G. Grimmett and D. Stirzaker, *Probability and Random Processes*, 4th ed., 2020 (chapter 4).
- L. Badger, "Lazzarini's Lucky Approximation of π", *Mathematics Magazine* 67(2), 1994.
- D. A. Klain and G.-C. Rota, *Introduction to Geometric Probability*, 1997 (Buffon's needle and integral geometry).
- On this site: Topics lessons on [continuous random variables](../../topics/probability/level-8/02-continuous-random-variables.md),
  [geometric probability](../../topics/probability/level-6/06-geometric-probability.md) and
  [Monte Carlo](../../topics/probability/level-8/07-monte-carlo.md); MAT137 guides on
  [the fundamental theorem of calculus](../../uoft/MAT137/unit08.md), [integration methods](../../uoft/MAT137/unit09.md)
  and [improper integrals](../../uoft/MAT137/unit12.md); the MAT257 guide on
  [partitions of unity and change of variables](../../uoft/MAT257Y1/unit10.md); the
  [Combinatorics book](../combinatorics/index.md) for the counting behind Chapters 1 to 8.
