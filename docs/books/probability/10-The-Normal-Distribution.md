# 10. The normal distribution

*Measure the same length a hundred times and the results scatter around the true value in a hump that is high in the
middle and falls away symmetrically. Flip a coin a thousand times, many times over, and the counts of heads make the
same hump. Add up dice, errors, small random pushes: the same shape again. This chapter is about that shape, the
normal or Gaussian distribution. You will prove that its famous density really has total area 1 (a calculation that
needs a clever detour through two dimensions), learn to compute normal probabilities with a single table, understand
the 68-95-99.7 rule and how fast the tails vanish, see why the binomial distribution turns into the bell curve, and end
with an honest look at why this one curve appears so often, and where it does not.*

!!! abstract "In this chapter"
    **You will learn:**

    - the Gaussian integral $\int e^{-x^2/2}\,dx = \sqrt{2\pi}$, proved with polar coordinates
    - the mean, variance and moment generating function of $N(\mu, \sigma^2)$, with proofs
    - standardising: how one table of $\Phi$ answers every normal question, forwards and backwards
    - the 68-95-99.7 rule, and precise bounds on normal tails (Mills' ratio)
    - the de Moivre-Laplace theorem: the binomial becomes normal, with the idea of the proof through Stirling's formula
    - why the normal appears so often (sums, symmetry, maximum entropy) and where it fails

    **You need:** [Chapter 9](09-Continuous-Random-Variables.md) (densities, cdfs, change of variables),
    [Chapter 6](06-Expectation-and-Variance.md) (variance) and moment generating functions from
    [Chapter 8](08-Generating-Functions-in-Probability.md). Calculus, including a double integral in polar coordinates
    (the MAT257 guides on [the integral in $\mathbb{R}^n$](../../uoft/MAT257Y1/unit09.md) and
    [change of variables](../../uoft/MAT257Y1/unit10.md) cover it properly). A gentler version is the pair of Topics
    lessons on [the normal distribution](../../topics/probability/level-8/03-normal-distribution.md) and
    [the normal approximation](../../topics/probability/level-8/04-normal-approximation.md).

    **Levels:** 10.2 and 10.3 are intermediate; 10.1 is intermediate to advanced; 10.4 is advanced; 10.5 is
    intermediate reading with one advanced proof.

## 10.1 The bell curve and the Gaussian integral

### The density

In [Chapter 9](09-Continuous-Random-Variables.md) we met the **standard normal** density

$$
\varphi(z) = \frac{1}{\sqrt{2\pi}}\, e^{-z^2/2}, \qquad -\infty < z < \infty,
$$

and the general normal $N(\mu, \sigma^2)$, the law of $X = \mu + \sigma Z$, with density

$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} \exp\left( -\frac{(x - \mu)^2}{2\sigma^2} \right) .
$$

Look at the shape of $e^{-z^2/2}$. At $z = 0$ it is 1. It is symmetric, because $(-z)^2 = z^2$. It falls slowly at first,
then fast: at $z = 1$ it is $e^{-1/2} \approx 0.61$, at $z = 2$ it is $e^{-2} \approx 0.14$, at $z = 3$ it is
$e^{-4.5} \approx 0.011$, and at $z = 6$ it is about $1.5 \times 10^{-8}$. Squaring in the exponent makes the tails die
far faster than the exponential law's $e^{-z}$. Differentiating twice, $\varphi''(z) = (z^2 - 1)\varphi(z)$, which
changes sign at $z = \pm 1$: the curve bends from "cap" to "cup" exactly one standard deviation from the centre. These
**inflection points** are where you can see $\sigma$ on a drawing.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 232" role="img" aria-label="The standard normal bell curve from minus 3.5 to 3.5. The band from minus 1 to 1 is shaded orange and holds 68.3 percent of the area; the bands out to plus or minus 2 are blue, giving 95.4 percent in all; the bands out to plus or minus 3 are green, giving 99.7 percent in all">
  <polygon fill="#eea66f" fill-opacity="0.7" stroke="none" points="155.0,170.0 155.0,78.1 160.0,68.9 165.0,59.9 170.0,51.3 175.0,43.4 180.0,36.2 185.0,30.1 190.0,25.1 195.0,21.4 200.0,19.2 205.0,18.4 210.0,19.2 215.0,21.4 220.0,25.1 225.0,30.1 230.0,36.2 235.0,43.4 240.0,51.3 245.0,59.9 250.0,68.9 255.0,78.1 255.0,170.0"/>
  <polygon fill="#9cc9ea" fill-opacity="0.8" stroke="none" points="105.0,170.0 105.0,149.5 107.5,147.4 110.0,145.1 112.5,142.6 115.0,140.0 117.5,137.2 120.0,134.3 122.5,131.1 125.0,127.9 127.5,124.4 130.0,120.8 132.5,117.0 135.0,113.1 137.5,109.1 140.0,104.9 142.5,100.6 145.0,96.2 147.5,91.7 150.0,87.2 152.5,82.6 155.0,78.1 155.0,170.0"/>
  <polygon fill="#9cc9ea" fill-opacity="0.8" stroke="none" points="255.0,170.0 255.0,78.1 257.5,82.6 260.0,87.2 262.5,91.7 265.0,96.2 267.5,100.6 270.0,104.9 272.5,109.1 275.0,113.1 277.5,117.0 280.0,120.8 282.5,124.4 285.0,127.9 287.5,131.1 290.0,134.3 292.5,137.2 295.0,140.0 297.5,142.6 300.0,145.1 302.5,147.4 305.0,149.5 305.0,170.0"/>
  <polygon fill="#7ccf9a" fill-opacity="0.9" stroke="none" points="55.0,170.0 55.0,168.3 57.5,168.0 60.0,167.7 62.5,167.4 65.0,167.0 67.5,166.5 70.0,166.0 72.5,165.5 75.0,164.8 77.5,164.1 80.0,163.3 82.5,162.5 85.0,161.5 87.5,160.4 90.0,159.2 92.5,157.9 95.0,156.5 97.5,155.0 100.0,153.3 102.5,151.5 105.0,149.5 105.0,170.0"/>
  <polygon fill="#7ccf9a" fill-opacity="0.9" stroke="none" points="305.0,170.0 305.0,149.5 307.5,151.5 310.0,153.3 312.5,155.0 315.0,156.5 317.5,157.9 320.0,159.2 322.5,160.4 325.0,161.5 327.5,162.5 330.0,163.3 332.5,164.1 335.0,164.8 337.5,165.5 340.0,166.0 342.5,166.5 345.0,167.0 347.5,167.4 350.0,167.7 352.5,168.0 355.0,168.3 355.0,170.0"/>
  <polyline fill="none" stroke="currentColor" stroke-width="2" points="30.0,169.7 35.0,169.5 40.0,169.3 45.0,169.1 50.0,168.8 55.0,168.3 60.0,167.7 65.0,167.0 70.0,166.0 75.0,164.8 80.0,163.3 85.0,161.5 90.0,159.2 95.0,156.5 100.0,153.3 105.0,149.5 110.0,145.1 115.0,140.0 120.0,134.3 125.0,127.9 130.0,120.8 135.0,113.1 140.0,104.9 145.0,96.2 150.0,87.2 155.0,78.1 160.0,68.9 165.0,59.9 170.0,51.3 175.0,43.4 180.0,36.2 185.0,30.1 190.0,25.1 195.0,21.4 200.0,19.2 205.0,18.4 210.0,19.2 215.0,21.4 220.0,25.1 225.0,30.1 230.0,36.2 235.0,43.4 240.0,51.3 245.0,59.9 250.0,68.9 255.0,78.1 260.0,87.2 265.0,96.2 270.0,104.9 275.0,113.1 280.0,120.8 285.0,127.9 290.0,134.3 295.0,140.0 300.0,145.1 305.0,149.5 310.0,153.3 315.0,156.5 320.0,159.2 325.0,161.5 330.0,163.3 335.0,164.8 340.0,166.0 345.0,167.0 350.0,167.7 355.0,168.3 360.0,168.8 365.0,169.1 370.0,169.3 375.0,169.5 380.0,169.7"/>
  <line x1="25" y1="170" x2="385" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <text x="55" y="183" text-anchor="middle" font-size="11" fill="currentColor">−3</text>
  <text x="105" y="183" text-anchor="middle" font-size="11" fill="currentColor">−2</text>
  <text x="155" y="183" text-anchor="middle" font-size="11" fill="currentColor">−1</text>
  <text x="205" y="183" text-anchor="middle" font-size="11" fill="currentColor">0</text>
  <text x="255" y="183" text-anchor="middle" font-size="11" fill="currentColor">1</text>
  <text x="305" y="183" text-anchor="middle" font-size="11" fill="currentColor">2</text>
  <text x="355" y="183" text-anchor="middle" font-size="11" fill="currentColor">3</text>
  <line x1="155" y1="192" x2="255" y2="192" stroke="#eea66f" stroke-width="3"/>
  <line x1="105" y1="205" x2="305" y2="205" stroke="#9cc9ea" stroke-width="3"/>
  <line x1="55" y1="218" x2="355" y2="218" stroke="#7ccf9a" stroke-width="3"/>
  <text x="260" y="196" font-size="11" fill="currentColor">68.3%</text>
  <text x="310" y="209" font-size="11" fill="currentColor">95.4%</text>
  <text x="360" y="222" font-size="11" fill="currentColor">99.7%</text>
</svg>
</div>

*The standard normal density. The shaded bands are one, two and three standard deviations from the mean.*

### Why is the area 1?

The constant $\frac{1}{\sqrt{2\pi}}$ is there to make the total area 1. So we must show

$$
I = \int_{-\infty}^{\infty} e^{-x^2/2}\,dx = \sqrt{2\pi} .
$$

First, the integral is finite: for $|x| \ge 1$ we have $x^2/2 \ge |x|/2$, so $e^{-x^2/2} \le e^{-|x|/2}$, whose integral
is finite. Finding its value is harder. No antiderivative of $e^{-x^2/2}$ can be written with the functions of school
algebra and calculus (a theorem of Liouville from the 1830s, whose proof belongs to differential algebra, far outside
this book). So the fundamental theorem of calculus cannot be used directly. The trick is to compute $I^2$ instead.

**Theorem (the Gaussian integral).** $\displaystyle\int_{-\infty}^{\infty} e^{-x^2/2}\,dx = \sqrt{2\pi}$.

*Proof.* Write the square of the integral as a product of two copies with different names for the variable, and then as
one integral over the plane:

$$
I^2 = \int_{-\infty}^{\infty} e^{-x^2/2}\,dx \int_{-\infty}^{\infty} e^{-y^2/2}\,dy = \iint_{\mathbb{R}^2} e^{-(x^2 + y^2)/2}\,dx\,dy .
$$

(Turning a product of two integrals into a double integral is Fubini's theorem; it is allowed here because the
integrand is positive.) The integrand depends only on $x^2 + y^2 = r^2$, the squared distance from the origin, so it is
natural to switch to **polar coordinates** $x = r\cos\theta$, $y = r\sin\theta$. A small polar box, with sides $dr$ and
$r\,d\theta$, has area $r\,dr\,d\theta$; the extra factor $r$ is the Jacobian of the change of variables. So

$$
I^2 = \int_0^{2\pi} \int_0^\infty e^{-r^2/2}\, r\,dr\,d\theta .
$$

Now the factor $r$ is exactly what was missing: $\frac{d}{dr}\left(-e^{-r^2/2}\right) = r e^{-r^2/2}$, so the inner
integral is $\Big[-e^{-r^2/2}\Big]_0^\infty = 1$, and

$$
I^2 = \int_0^{2\pi} 1\,d\theta = 2\pi .
$$

Since $I > 0$, $I = \sqrt{2\pi}$. $\square$

The polar-coordinates proof is often credited to Poisson; the value of the integral was known earlier, to Laplace
among others. Notice what happened: a one-dimensional integral that cannot be done became a two-dimensional one that can,
because the two-dimensional bell $e^{-(x^2+y^2)/2}$ is round. That roundness is not an accident; it returns in 10.5 as
the reason the normal law describes errors in a plane.

A substitution gives the general form. With $x = \sqrt{2a}\,u$ (for $a > 0$),

$$
\int_{-\infty}^{\infty} e^{-a x^2}\,dx = \sqrt{\frac{\pi}{a}} ,
$$

and with $x = \mu + \sigma z$ the $N(\mu, \sigma^2)$ density also has area 1.

### Mean, variance and moment generating function

**Theorem.** If $Z \sim N(0, 1)$ then $E[Z] = 0$, $\operatorname{Var}(Z) = 1$, and its moment generating function is

$$
M_Z(t) = E\left[e^{tZ}\right] = e^{t^2/2} \quad \text{for all real } t .
$$

Consequently $X = \mu + \sigma Z \sim N(\mu, \sigma^2)$ has mean $\mu$, variance $\sigma^2$ and
$M_X(t) = e^{\mu t + \sigma^2 t^2/2}$.

*Proof.* The mean: $z\varphi(z)$ is an odd function whose integral converges (the tails are tiny), so the integral is 0.

The variance: integrate by parts with $u = z$ and $dv = z\varphi(z)\,dz$, noting $v = -\varphi(z)$ because $\varphi'(z) = -z\varphi(z)$:

$$
E[Z^2] = \int_{-\infty}^{\infty} z \cdot z\varphi(z)\,dz = \Big[-z\varphi(z)\Big]_{-\infty}^{\infty} + \int_{-\infty}^{\infty} \varphi(z)\,dz = 0 + 1 = 1 .
$$

The mgf: complete the square in the exponent, $tz - \tfrac{z^2}{2} = -\tfrac{(z - t)^2}{2} + \tfrac{t^2}{2}$. Then

$$
E\left[e^{tZ}\right] = \int_{-\infty}^{\infty} \frac{1}{\sqrt{2\pi}} e^{tz - z^2/2}\,dz = e^{t^2/2} \int_{-\infty}^{\infty} \frac{1}{\sqrt{2\pi}} e^{-(z - t)^2/2}\,dz = e^{t^2/2},
$$

since the last integral is the area under a bell curve shifted by $t$, which is 1. For $X = \mu + \sigma Z$,
$E[e^{tX}] = e^{\mu t} E[e^{(\sigma t)Z}] = e^{\mu t + \sigma^2 t^2/2}$, and the mean and variance follow by linearity. $\square$

Expanding $e^{t^2/2} = \sum_k \frac{t^{2k}}{2^k k!}$ and matching it with $\sum_n E[Z^n] \frac{t^n}{n!}$ gives every
moment at once: odd moments are 0 and $E[Z^{2k}] = \frac{(2k)!}{2^k k!} = 1 \cdot 3 \cdot 5 \cdots (2k - 1)$. So
$E[Z^4] = 3$ and $E[Z^6] = 15$. These numbers come back in [Chapter 12](12-The-Central-Limit-Theorem.md).

### Sums of independent normals are normal

**Theorem.** If $X \sim N(\mu_1, \sigma_1^2)$ and $Y \sim N(\mu_2, \sigma_2^2)$ are independent, then
$X + Y \sim N(\mu_1 + \mu_2, \sigma_1^2 + \sigma_2^2)$.

*Proof.* For independent variables the mgf of the sum is the product of the mgfs
([Chapter 8](08-Generating-Functions-in-Probability.md)):

$$
M_{X+Y}(t) = e^{\mu_1 t + \sigma_1^2 t^2/2}\, e^{\mu_2 t + \sigma_2^2 t^2/2} = e^{(\mu_1 + \mu_2)t + (\sigma_1^2 + \sigma_2^2)t^2/2},
$$

which is the mgf of $N(\mu_1 + \mu_2, \sigma_1^2 + \sigma_2^2)$. An mgf that is finite near 0 determines the law
(the uniqueness theorem stated in Chapter 8), so $X + Y$ has that law. $\square$

[Chapter 11](11-Joint-Distributions.md) proves the same thing directly by convolution. Means add and variances add, as
always for independent variables; what is special is that the *shape* stays normal. This **stability** is the first clue
to why the normal law is a limit: a law that reproduces itself under addition is the natural candidate for "what sums
look like in the end".

## 10.2 Standardising and tables

### One table for every normal

There are infinitely many normal laws, one for each $\mu$ and $\sigma$. We do not need a table for each, because every
normal is a stretched and shifted copy of the standard one.

**Standardising.** If $X \sim N(\mu, \sigma^2)$, then

$$
Z = \frac{X - \mu}{\sigma} \sim N(0, 1) .
$$

This is the definition $X = \mu + \sigma Z$ read backwards, or the linear change of variables of
[Chapter 9](09-Continuous-Random-Variables.md). The number $z = (x - \mu)/\sigma$ is the **z-score** of $x$: how many
standard deviations $x$ lies above the mean. Therefore

$$
P(X \le x) = \Phi\left(\frac{x - \mu}{\sigma}\right), \qquad \text{where } \Phi(z) = \int_{-\infty}^{z} \varphi(u)\,du
$$

is the standard normal cdf. $\Phi$ has no elementary formula, so it is tabulated (or computed; see below). By symmetry,
$\Phi(-z) = 1 - \Phi(z)$, so tables list only $z \ge 0$.

| $z$ | 0 | 0.5 | 1 | 1.28 | 1.5 | 1.645 | 1.96 | 2 | 2.326 | 2.576 | 3 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| $\Phi(z)$ | 0.5000 | 0.6915 | 0.8413 | 0.8997 | 0.9332 | 0.9500 | 0.9750 | 0.9772 | 0.9900 | 0.9950 | 0.9987 |

Three of these are worth remembering: $\Phi(1.645) \approx 0.95$, $\Phi(1.96) \approx 0.975$ and
$\Phi(2.576) \approx 0.995$. So 90%, 95% and 99% of a normal law lie within 1.645, 1.96 and 2.576 standard deviations
of the mean.

### Worked examples

**Example 1 (forwards).** A machine fills bags of flour. The fill weight is modelled as $N(500, 4^2)$ grams. What
fraction of bags weigh less than 495 g?

Standardise: $z = (495 - 500)/4 = -1.25$. Then $P(X < 495) = \Phi(-1.25) = 1 - \Phi(1.25) \approx 1 - 0.8944 = 0.1056$.
About 10.6% of bags are under 495 g.

**Example 2 (backwards).** The owner wants at most 1% of bags under 495 g, without changing the machine's spread. Where
should the mean be set?

We need $P(X < 495) = 0.01$, that is, $\Phi\left(\frac{495 - \mu}{4}\right) = 0.01$. The 1% quantile of $Z$ is
$-2.326$ (because $\Phi(2.326) \approx 0.99$), so $\frac{495 - \mu}{4} = -2.326$ and $\mu = 495 + 4 \times 2.326 \approx 504.3$ g.
Check: $\Phi((495 - 504.3)/4) = \Phi(-2.325) \approx 0.010$.

**Example 3 (an interval).** For $X \sim N(70, 5^2)$, find $P(65 < X < 80)$.

$$
P(65 < X < 80) = \Phi\left(\frac{80 - 70}{5}\right) - \Phi\left(\frac{65 - 70}{5}\right) = \Phi(2) - \Phi(-1) = 0.9772 - 0.1587 = 0.8186 .
$$

**Example 4 (a sum).** Two independent pieces have lengths $N(30, 0.3^2)$ and $N(20, 0.4^2)$ cm. They are glued end to
end. How often is the total more than 1 cm away from 50 cm?

The total is $N(50, 0.3^2 + 0.4^2) = N(50, 0.5^2)$. Note that the standard deviations do *not* add ($0.3 + 0.4 = 0.7$);
the variances do, and $\sqrt{0.25} = 0.5$. Then $P(|T - 50| > 1) = 2(1 - \Phi(2)) \approx 0.0455$.

### Try it in Python

The standard library computes $\Phi$ and its inverse, so tables are not needed at a computer.

```python
from statistics import NormalDist

Z = NormalDist()                       # mean 0, sd 1
print(Z.cdf(1.96))                     # 0.9750...
print(Z.inv_cdf(0.99))                 # 2.3263...
X = NormalDist(mu=500, sigma=4)
print(X.cdf(495))                      # 0.1056...
print(495 + 4 * Z.inv_cdf(0.99))       # 504.305...
```

Behind the scenes $\Phi(z) = \tfrac12\left(1 + \operatorname{erf}(z/\sqrt2)\right)$, where `math.erf` is the **error
function** $\operatorname{erf}(x) = \frac{2}{\sqrt\pi}\int_0^x e^{-t^2}\,dt$.

## 10.3 The 68-95-99.7 rule

### The rule

From the table, for any normal law,

$$
\begin{aligned}
P(|X - \mu| \le \sigma) &= 2\Phi(1) - 1 \approx 0.6827, \\
P(|X - \mu| \le 2\sigma) &= 2\Phi(2) - 1 \approx 0.9545, \\
P(|X - \mu| \le 3\sigma) &= 2\Phi(3) - 1 \approx 0.9973 .
\end{aligned}
$$

This is the **68-95-99.7 rule**: about two thirds of a normal population lies within one standard deviation of the
mean, 19 in 20 within two, and all but 3 in 1000 within three.

Compare Chebyshev's inequality from [Chapter 7](07-Inequalities-and-the-Law-of-Large-Numbers.md), which holds for
*every* law with a variance: $P(|X - \mu| \ge k\sigma) \le 1/k^2$. It guarantees nothing for $k = 1$, at least 75%
within $2\sigma$, and at least 88.9% within $3\sigma$. The normal law does much better (95.4% and 99.7%), because its
tails are thin. Chebyshev is the price of knowing nothing about the shape; the 68-95-99.7 rule is the reward for
knowing the shape is normal. Using the rule for a law that is not normal is a common mistake.

### How thin are the tails?

Outside $3\sigma$ the rule says "0.3%". How fast does the tail $1 - \Phi(z)$ shrink after that? There is no formula, but
there are sharp bounds.

**Theorem (Mills' ratio bounds).** For $z > 0$,

$$
\left(\frac{1}{z} - \frac{1}{z^3}\right)\varphi(z) \;\le\; 1 - \Phi(z) \;\le\; \frac{\varphi(z)}{z} .
$$

*Proof.* Upper bound: for $x \ge z$ we have $x/z \ge 1$, so

$$
1 - \Phi(z) = \int_z^\infty \varphi(x)\,dx \le \int_z^\infty \frac{x}{z}\,\varphi(x)\,dx = \frac{1}{z}\Big[-\varphi(x)\Big]_z^\infty = \frac{\varphi(z)}{z},
$$

using $\varphi'(x) = -x\varphi(x)$ again. Lower bound: integrate by parts, writing $\varphi(x) = \frac{1}{x} \cdot x\varphi(x)$:

$$
\int_z^\infty \frac{1}{x}\, x\varphi(x)\,dx = \Big[-\frac{\varphi(x)}{x}\Big]_z^\infty - \int_z^\infty \frac{\varphi(x)}{x^2}\,dx = \frac{\varphi(z)}{z} - \int_z^\infty \frac{\varphi(x)}{x^2}\,dx .
$$

In the last integral, $\frac{1}{x^2} \le \frac{x}{z^3}$ for $x \ge z$, so it is at most $\frac{1}{z^3}\int_z^\infty x\varphi(x)\,dx = \frac{\varphi(z)}{z^3}$.
That gives the lower bound. $\square$

So $1 - \Phi(z) \approx \varphi(z)/z$ for large $z$, with a relative error below $1/z^2$. Numbers:

| $z$ | lower bound | $1 - \Phi(z)$ | upper bound |
|---|---|---|---|
| 3 | 0.001313 | 0.001350 | 0.001477 |
| 4 | 0.00003137 | 0.00003167 | 0.00003346 |
| 6 | $9.845 \times 10^{-10}$ | $9.866 \times 10^{-10}$ | $1.013 \times 10^{-9}$ |

A "six sigma" event in one tail has a probability of about one in a billion, if the law really is normal. When a
financial market or a bridge load produces a "six sigma" event several times in a decade, the right conclusion is
usually not "we were very unlucky" but "the model's tails were too thin". (The "Six Sigma" of industrial quality
management uses a different convention, with a 1.5 sigma allowance for drift; it is not the same number.)

## 10.4 The normal as the limit of the binomial

*Level: advanced.*

### The question

Flip a fair coin $n$ times and let $S_n$ be the number of heads. Its law is binomial, $P(S_n = k) = \binom{n}{k}2^{-n}$,
with mean $n/2$ and standard deviation $\sqrt{n}/2$. For large $n$ the exact sums are tedious; by hand in the 1720s they
were impossible. Abraham de Moivre, a French Protestant mathematician who lived in London after fleeing France, asked
how to approximate sums like $P(S_n \ge 0.6n)$. His answer, in a privately printed Latin paper of 1733 and then in the
second edition of his *Doctrine of Chances* (1738), was the bell curve. Laplace extended it to any success probability
$p$ in his *Théorie analytique des probabilités* (1812).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 200" role="img" aria-label="Bar chart of the binomial probabilities for 16 fair coin flips, from 0 to 16 heads, peaked at 8 heads with height about 0.196. The normal density with mean 8 and standard deviation 2 is drawn over it and passes almost exactly through the tops of the bars">
  <rect x="52" y="169.8" width="20" height="0.2" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <rect x="74" y="168.7" width="20" height="1.3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <rect x="96" y="164.0" width="20" height="6.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <rect x="118" y="150.6" width="20" height="19.4" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <rect x="140" y="123.3" width="20" height="46.7" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <rect x="162" y="84.5" width="20" height="85.5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <rect x="184" y="47.8" width="20" height="122.2" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <rect x="206" y="32.5" width="20" height="137.5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <rect x="228" y="47.8" width="20" height="122.2" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <rect x="250" y="84.5" width="20" height="85.5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <rect x="272" y="123.3" width="20" height="46.7" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <rect x="294" y="150.6" width="20" height="19.4" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <rect x="316" y="164.0" width="20" height="6.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <rect x="338" y="168.7" width="20" height="1.3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <rect x="360" y="169.8" width="20" height="0.2" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <polyline fill="none" stroke="#eea66f" stroke-width="2.5" points="40.0,170.0 44.4,169.9 48.8,169.9 53.2,169.9 57.6,169.8 62.0,169.7 66.4,169.6 70.8,169.4 75.2,169.2 79.6,168.9 84.0,168.4 88.4,167.9 92.8,167.2 97.2,166.4 101.6,165.2 106.0,163.9 110.4,162.2 114.8,160.1 119.2,157.6 123.6,154.6 128.0,151.1 132.4,147.0 136.8,142.4 141.2,137.1 145.6,131.2 150.0,124.7 154.4,117.6 158.8,110.0 163.2,102.0 167.6,93.8 172.0,85.3 176.4,76.9 180.8,68.6 185.2,60.7 189.6,53.4 194.0,46.8 198.4,41.1 202.8,36.5 207.2,33.1 211.6,31.1 216.0,30.4 220.4,31.1 224.8,33.1 229.2,36.5 233.6,41.1 238.0,46.8 242.4,53.4 246.8,60.7 251.2,68.6 255.6,76.9 260.0,85.3 264.4,93.8 268.8,102.0 273.2,110.0 277.6,117.6 282.0,124.7 286.4,131.2 290.8,137.1 295.2,142.4 299.6,147.0 304.0,151.1 308.4,154.6 312.8,157.6 317.2,160.1 321.6,162.2 326.0,163.9 330.4,165.2 334.8,166.4 339.2,167.2 343.6,167.9 348.0,168.4 352.4,168.9 356.8,169.2 361.2,169.4 365.6,169.6 370.0,169.7 374.4,169.8 378.8,169.9 383.2,169.9 387.6,169.9 392.0,170.0"/>
  <line x1="30" y1="170" x2="402" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <text x="40" y="186" text-anchor="middle" font-size="11" fill="currentColor">0</text>
  <text x="128" y="186" text-anchor="middle" font-size="11" fill="currentColor">4</text>
  <text x="216" y="186" text-anchor="middle" font-size="11" fill="currentColor">8</text>
  <text x="304" y="186" text-anchor="middle" font-size="11" fill="currentColor">12</text>
  <text x="392" y="186" text-anchor="middle" font-size="11" fill="currentColor">16</text>
  <text x="230" y="22" font-size="11" fill="currentColor">heads in 16 flips, with N(8, 2²)</text>
</svg>
</div>

### The statement

Let $S_n$ be binomial with parameters $n$ and $p$ (with $0 < p < 1$ fixed), and $q = 1 - p$. Its mean is $np$ and its
standard deviation is $\sqrt{npq}$.

**Theorem (de Moivre-Laplace).**

1. (Local form.) For $k$ with $x_k = \frac{k - np}{\sqrt{npq}}$ staying in a bounded interval,
   $P(S_n = k) \sim \frac{1}{\sqrt{npq}}\,\varphi(x_k)$ as $n \to \infty$, where $\sim$ means the ratio tends to 1,
   uniformly over such $k$.
2. (Integral form.) For all real $a < b$,
   $P\left(a \le \frac{S_n - np}{\sqrt{npq}} \le b\right) \to \Phi(b) - \Phi(a)$ as $n \to \infty$.

In words: measure the number of successes in standard deviations from the mean, and its law approaches the standard
normal. The integral form is the first case of the central limit theorem of [Chapter 12](12-The-Central-Limit-Theorem.md),
which will prove it (for every law, not only coins) by another method.

### The idea of the proof

The local form follows from **Stirling's formula**

$$
n! \sim \sqrt{2\pi n}\left(\frac{n}{e}\right)^n,
$$

found around 1730 by de Moivre (without the constant) and James Stirling (who identified the constant $\sqrt{2\pi}$).
It is a nice irony that the $\sqrt{2\pi}$ in the normal density and in Stirling's formula are the same constant: one
way to prove Stirling's constant is to compare with the Gaussian integral. A proof of Stirling's formula is in most
analysis texts (for example Feller, Volume I, chapter II.9).

Put $k = np + x\sqrt{npq}$ with $x$ bounded, so $k$ and $n - k$ both grow like $n$. Apply Stirling to the three
factorials in $\binom{n}{k}$:

$$
P(S_n = k) = \frac{n!}{k!\,(n - k)!}\,p^k q^{n - k} \sim \sqrt{\frac{n}{2\pi k(n - k)}}\; \exp\left(-k \ln\frac{k}{np} - (n - k)\ln\frac{n - k}{nq}\right) .
$$

(Check by collecting powers: the $e^{-n}$, $e^{k}$ and $e^{n-k}$ cancel, and $n^n/(k^k(n-k)^{n-k})$ times $p^kq^{n-k}$
is exactly the exponential.) Two estimates remain.

*The square root.* Since $k \approx np$ and $n - k \approx nq$ (their ratios tend to 1), the square root is
$\sim \frac{1}{\sqrt{2\pi npq}}$.

*The exponent.* Write $k = np(1 + u)$ and $n - k = nq(1 - v)$ with $u = x\sqrt{q/(np)}$ and $v = x\sqrt{p/(nq)}$, both
small. Use $\ln(1 + u) = u - \frac{u^2}{2} + O(u^3)$. Then

$$
k\ln\frac{k}{np} = np(1 + u)\left(u - \tfrac{u^2}{2} + O(u^3)\right) = np\left(u + \tfrac{u^2}{2}\right) + O(n u^3),
$$

and in the same way $(n - k)\ln\frac{n - k}{nq} = nq\left(-v + \tfrac{v^2}{2}\right) + O(nv^3)$. The first-order terms
cancel, because $npu = nqv = x\sqrt{npq}$. The second-order terms give $\tfrac{np u^2}{2} + \tfrac{nqv^2}{2} = \tfrac{x^2 q}{2} + \tfrac{x^2 p}{2} = \tfrac{x^2}{2}$,
and the errors are $O(x^3/\sqrt{n}) \to 0$. So the exponential tends to $e^{-x^2/2}$, and

$$
P(S_n = k) \sim \frac{1}{\sqrt{2\pi npq}}\, e^{-x^2/2} = \frac{1}{\sqrt{npq}}\,\varphi(x_k) .
$$

*From local to integral.* The points $x_k$ are spaced $h = 1/\sqrt{npq}$ apart. So
$P(a \le x_{S_n} \le b) = \sum_{a \le x_k \le b} P(S_n = k) \approx \sum_{a \le x_k \le b} h\,\varphi(x_k)$, which is a
Riemann sum for $\int_a^b \varphi$. As $n \to \infty$ the spacing $h \to 0$ and the sum tends to $\Phi(b) - \Phi(a)$.
(Making "$\approx$" rigorous needs the uniformity in part 1; that is routine but fussy, and is done in Feller's
Volume I, chapter VII.) $\square$

### Using it: the continuity correction

A binomial variable takes whole-number values, and the bar for $k$ covers the interval $[k - \tfrac12, k + \tfrac12]$.
So when approximating, move each endpoint half a unit outwards. This **continuity correction** usually improves the
answer a lot for moderate $n$.

**Example 5.** 100 fair coin flips. Find $P(S \ge 60)$.

Mean 50, standard deviation 5. With the correction, $P(S \ge 60) = P(S \ge 59.5) \approx 1 - \Phi\left(\frac{59.5 - 50}{5}\right) = 1 - \Phi(1.9) \approx 0.0287$.
The exact value is $\sum_{k=60}^{100}\binom{100}{k}2^{-100} \approx 0.0284$. Without the correction we would get
$1 - \Phi(2) \approx 0.0228$, which is 20% too small.

**Example 6.** A fair die is rolled 600 times. How likely are 120 or more sixes?

Here $np = 100$ and $\sqrt{npq} = \sqrt{600 \cdot \tfrac16 \cdot \tfrac56} \approx 9.129$. The approximation gives
$1 - \Phi(19.5/9.129) = 1 - \Phi(2.136) \approx 0.0163$, and the exact binomial sum is about $0.0180$. The approximation
is a little low, because the binomial with $p = \tfrac16$ is skewed to the right: its right tail is heavier than the
symmetric bell. [Chapter 12](12-The-Central-Limit-Theorem.md) puts a number on this kind of error (the Berry-Esseen
theorem).

**When not to use it.** If $p$ is small and $np$ is moderate, use the Poisson approximation of
[Chapter 5](05-Discrete-Random-Variables.md) instead. With $n = 100$ and $p = 0.01$: the exact $P(S = 0) = 0.99^{100} \approx 0.366$,
the Poisson value is $e^{-1} \approx 0.368$, while the normal approximation with correction gives
$\Phi\left(\frac{0.5 - 1}{\sqrt{0.99}}\right) \approx 0.308$. A common rule of thumb asks for $np \ge 10$ and
$nq \ge 10$ before trusting the normal approximation; it is a rule of thumb, not a theorem.

<figure class="play" data-play="galton"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> A Galton board: each ball's landing place is a binomial count, and many balls trace the bell curve.</figcaption></figure>

## 10.5 Why it appears everywhere

The normal law is used to model measurement errors, heights, test scores, noise in electronic circuits, the positions
of diffusing particles and much more. It is worth separating the real reasons from the folklore.

### Reason 1: sums of many small independent effects

The strongest reason is the **central limit theorem** ([Chapter 12](12-The-Central-Limit-Theorem.md)): the sum of many
independent random quantities, none of which dominates, is approximately normal *whatever* their individual laws. A
measurement error that is the sum of many small disturbances (vibration, temperature, rounding, the observer's eye) is
therefore approximately normal. Francis Galton built a board of pins on which balls bounce left or right at each row
and pile up in a bell shape, and described it in his 1889 book *Natural Inheritance*; each ball's final position is a
sum of independent $\pm 1$ steps, so the board is de Moivre's theorem made of wood.

The honest qualification is in the words "independent" and "none dominates". When effects multiply rather than add, the
logarithm is approximately normal and the quantity itself is log-normal
([Chapter 9](09-Continuous-Random-Variables.md), Example 14). When one effect can be huge (a single crash in a market),
the sum is not normal at all.

### Reason 2: symmetry (Herschel and Maxwell)

*Level: advanced.*

In 1850 the astronomer John Herschel asked what law the error of a star's position on a photographic plate should
follow, and in 1860 James Clerk Maxwell asked the same of the velocity of a gas molecule. Both made two assumptions about
a random point $(X, Y)$ in the plane:

1. the coordinates $X$ and $Y$ are independent, with the same smooth density $f$;
2. the joint law is **rotation-invariant**: the chance density at $(x, y)$ depends only on the distance $\sqrt{x^2 + y^2}$.

**Theorem (Herschel-Maxwell).** Under these assumptions, $f$ is a normal density with mean 0.

*Proof.* By assumption 1 the joint density is $f(x)f(y)$, and by assumption 2 it equals $g(x^2 + y^2)$ for some
function $g$. Setting $y = 0$ gives $g(x^2) = f(x)f(0)$, so for all $x, y$

$$
f(x)f(y) = f\left(\sqrt{x^2 + y^2}\right) f(0) .
$$

First, $c = f(0) > 0$: otherwise the identity with $y = x$ gives $f(x)^2 = 0$ for every $x$. Next, $f$ is never 0. If
$f(x_0) = 0$, the identity (with $x = x_0$) gives $f(r)c = 0$, so $f(r) = 0$, for every $r \ge |x_0|$; then with $y = x$
it gives $f(x)^2 = f(\sqrt2|x|)c = 0$ whenever $\sqrt2|x| \ge |x_0|$, so $f$ vanishes beyond $|x_0|/\sqrt2$; repeating,
$f$ vanishes everywhere except at 0, and could not have area 1. So we may put $h(s) = \ln\left(f(\sqrt{s})/c\right)$ for $s \ge 0$, a continuous function. Dividing the identity by $c^2$ and
taking logarithms, with $s = x^2$ and $t = y^2$,

$$
h(s) + h(t) = h(s + t) \quad (s, t \ge 0) .
$$

A continuous solution of this equation is linear, $h(s) = -as$ (the same squeeze through the rationals as for the
exponential law in [Chapter 9](09-Continuous-Random-Variables.md)). So $f(x) = c\,e^{-ax^2}$, and since $f$ must have
finite area, $a > 0$. That is a normal density with mean 0 and variance $\frac{1}{2a}$. $\square$

So the normal law is the *only* law whose two independent copies make a round cloud. This is a genuine reason in
physics: Maxwell's velocity distribution for an ideal gas is exactly normal in each component, and it has been confirmed
by experiment. But the argument rests on its assumptions. Herschel's independence of the two error components is an
assumption about the instrument, not a law of nature.

### Reason 3: least squares and maximum entropy

Carl Friedrich Gauss, in his 1809 book on the motion of planets (*Theoria motus*), asked: which law of errors makes the
arithmetic mean of repeated measurements the most probable value of the true quantity? His answer was the normal law,
and with it he justified the **method of least squares** for fitting orbits. The argument is circular in a useful way:
if you have decided to average, the normal law is the law that makes averaging optimal. Laplace soon gave the better
reason, his version of the central limit theorem (1810), and the name "Gaussian" stuck anyway.

A modern reason is **maximum entropy**: among all densities on the line with a given mean and variance, the normal
density has the largest entropy $-\int f \ln f$. In the language of [Chapter 18](18-Information-and-Entropy.md), it is
the "least informative" law consistent with knowing only the mean and the variance. If you know nothing else, it is the
most cautious choice. Chapter 18 explains entropy; the proof uses the Gibbs inequality from there.

### Where it fails

The normal law is a model, and honest use means checking it.

- **Bounded or skewed quantities.** Incomes, waiting times and sizes of files cannot be negative and have long right
  tails; a normal model puts probability on negative values and too little in the tail.
- **Heavy tails.** In 1963 Benoit Mandelbrot showed that changes in cotton prices had far heavier tails than the normal
  law allows, and many later studies found the same for daily stock returns. Large moves happen much more often than
  the 68-95-99.7 rule predicts.
- **Dependence.** The central limit theorem needs (roughly) independence. When many small effects are driven by a
  common cause, they move together and the sum can be far from normal.
- **Mixtures.** Adult heights in a whole population are a mixture of two groups with different means; each group is
  close to normal, the mixture is flatter.

Adolphe Quetelet, in the 1830s and 1840s, applied the normal law to measurements of people and spoke of "the average
man". Later writers sometimes treated the bell curve as a law of nature for every human trait. It is not: it is an
excellent approximation in some situations, explained by the theorems above, and a poor one in others.

## Check yourself

??? question "1. $X \sim N(70, 5^2)$. Find $P(X > 80)$ and $P(65 < X < 75)$."

    $P(X > 80) = 1 - \Phi(2) \approx 0.0228$. $P(65 < X < 75) = \Phi(1) - \Phi(-1) = 2\Phi(1) - 1 \approx 0.6827$.

??? question "2. Scores on a test are modelled as $N(100, 15^2)$. Find the 90th percentile."

    $\Phi(1.2816) = 0.90$, so the 90th percentile is $100 + 1.2816 \times 15 \approx 119.2$.

??? question "3. $X \sim N(\mu, \sigma^2)$ with $P(X < 10) = 0.5$ and $P(X < 14) \approx 0.8413$. Find $\mu$ and $\sigma$."

    The median of a normal law is its mean, so $\mu = 10$. Then $\Phi(4/\sigma) = 0.8413 = \Phi(1)$, so $\sigma = 4$.

??? question "4. Show that $\int_{-\infty}^{\infty} e^{-ax^2}\,dx = \sqrt{\pi/a}$ for $a > 0$."

    Substitute $x = u/\sqrt{2a}$, $dx = du/\sqrt{2a}$: the integral becomes
    $\frac{1}{\sqrt{2a}}\int e^{-u^2/2}\,du = \frac{\sqrt{2\pi}}{\sqrt{2a}} = \sqrt{\pi/a}$.

??? question "5. Compute $E[Z^4]$ for $Z \sim N(0, 1)$ by integration by parts, and check it with the mgf."

    With $u = z^3$, $dv = z\varphi(z)\,dz$, $v = -\varphi(z)$: $E[Z^4] = [-z^3\varphi]_{-\infty}^\infty + 3\int z^2\varphi = 0 + 3 \cdot 1 = 3$.
    From the mgf, the $t^4$ coefficient of $e^{t^2/2}$ is $\frac{1}{2^2 \cdot 2!} = \frac18$, and $E[Z^4] = 4! \times \frac18 = 3$.

??? question "6. Show that the $N(\mu, \sigma^2)$ density has inflection points at $\mu \pm \sigma$."

    $f(x) = C e^{-(x-\mu)^2/(2\sigma^2)}$. Then $f'(x) = -\frac{x - \mu}{\sigma^2}f(x)$ and
    $f''(x) = \left(\frac{(x - \mu)^2}{\sigma^4} - \frac{1}{\sigma^2}\right)f(x)$, which is zero and changes sign exactly when
    $(x - \mu)^2 = \sigma^2$.

??? question "7. $X$ and $Y$ are independent standard normals. Find $P(X + Y > 2)$ and $P(X - Y > 2)$."

    Both $X + Y$ and $X - Y$ are $N(0, 2)$ (variances add even for a difference, since $-Y$ is also $N(0,1)$). So each
    probability is $P(Z > 2/\sqrt2) = 1 - \Phi(\sqrt2) \approx 1 - \Phi(1.414) \approx 0.0786$.

??? question "8. Use the Mills bounds to bracket $1 - \Phi(4)$."

    $\varphi(4) = e^{-8}/\sqrt{2\pi} \approx 1.338 \times 10^{-4}$. Upper bound $\varphi(4)/4 \approx 3.35 \times 10^{-5}$;
    lower bound $(1/4 - 1/64)\varphi(4) \approx 3.14 \times 10^{-5}$. The true value is about $3.17 \times 10^{-5}$.

??? question "9. 400 fair coin flips. Estimate the chance of between 190 and 210 heads inclusive."

    Mean 200, standard deviation $\sqrt{400}/2 = 10$. With the continuity correction:
    $P(189.5 \le S \le 210.5) \approx \Phi(1.05) - \Phi(-1.05) = 2\Phi(1.05) - 1 \approx 0.7063$. The exact binomial value
    is also $0.7063$ to four decimals.

??? question "10. A Galton board has 10 rows, and at each row a ball goes left or right with chance $\tfrac12$. What is the chance a ball lands in the middle bin (5 rights)? Compare with the local de Moivre-Laplace approximation."

    Exactly $\binom{10}{5}/2^{10} = 252/1024 \approx 0.2461$. The local form gives $\frac{1}{\sqrt{npq}}\varphi(0) = \frac{1}{\sqrt{2.5}} \cdot 0.3989 \approx 0.2523$,
    about 2.5% too high even with only 10 rows.

??? question "11. (Harder.) Use the Gaussian integral to show $\Gamma(\tfrac12) = \sqrt\pi$, where $\Gamma(s) = \int_0^\infty t^{s-1}e^{-t}\,dt$."

    $\Gamma(\tfrac12) = \int_0^\infty t^{-1/2}e^{-t}\,dt$. Substitute $t = x^2$, $dt = 2x\,dx$:
    $\int_0^\infty x^{-1}e^{-x^2}\,2x\,dx = 2\int_0^\infty e^{-x^2}\,dx = \int_{-\infty}^\infty e^{-x^2}\,dx = \sqrt{\pi}$
    (exercise 4 with $a = 1$).

??? question "12. (Harder.) In Example 6 the normal approximation was too low. Without computing, explain the sign of the error from the shape of the binomial with $p = 1/6$."

    The binomial with $p < \tfrac12$ is skewed to the right: its third central moment $npq(q - p)$ is positive. A
    symmetric normal curve with the same mean and variance therefore puts too little mass far out on the right, so it
    underestimates right-tail probabilities such as $P(S \ge 120)$, and overestimates left-tail ones.

## What you learned

- The Gaussian integral $\int e^{-x^2/2}\,dx = \sqrt{2\pi}$ is proved by squaring it and using polar coordinates.
- $N(\mu, \sigma^2)$ has mean $\mu$, variance $\sigma^2$ and mgf $e^{\mu t + \sigma^2 t^2/2}$; independent normals add
  to a normal, with variances adding.
- Standardising $Z = (X - \mu)/\sigma$ reduces every normal question to one table of $\Phi$, used forwards (probabilities)
  or backwards (quantiles).
- The 68-95-99.7 rule; tails fall like $\varphi(z)/z$, so a six-sigma event has a chance of about $10^{-9}$, if the
  model is right.
- De Moivre-Laplace: the standardised binomial tends to $N(0, 1)$; use the continuity correction, and the Poisson law
  instead when $p$ is small.
- The normal law is a limit of sums, the only rotation-invariant law with independent coordinates, and the maximum
  entropy law for a given variance; it fails for heavy tails, strong dependence and mixtures.

**Next:** [Chapter 11](11-Joint-Distributions.md), several random variables at once: joint laws, independence,
correlation, sums by convolution, and the bivariate normal.

## Further reading

- A. de Moivre, *The Doctrine of Chances*, 2nd ed., 1738 (contains the English version of his 1733 approximation).
- W. Feller, *An Introduction to Probability Theory and Its Applications*, Vol. I, 3rd ed., 1968 (chapter VII on the normal approximation to the binomial; chapter II for Stirling's formula).
- S. M. Stigler, *The History of Statistics: The Measurement of Uncertainty before 1900*, 1986 (de Moivre, Laplace, Gauss, Quetelet and Galton).
- E. T. Jaynes, *Probability Theory: The Logic of Science*, 2003 (chapter 7, "The central, Gaussian or normal distribution", including the Herschel-Maxwell argument).
- B. Mandelbrot, "The Variation of Certain Speculative Prices", *Journal of Business* 36, 1963.
- S. Ross, *A First Course in Probability*, 10th ed., 2019 (section 5.4).
- On this site: Topics lessons on [the normal distribution](../../topics/probability/level-8/03-normal-distribution.md),
  [the normal approximation](../../topics/probability/level-8/04-normal-approximation.md) and
  [large numbers and the CLT](../../topics/probability/level-8/05-large-numbers-clt.md); MAT257 guides on
  [the Riemann integral in $\mathbb{R}^n$](../../uoft/MAT257Y1/unit09.md) and
  [change of variables](../../uoft/MAT257Y1/unit10.md); MAT137 on [improper integrals](../../uoft/MAT137/unit12.md);
  the [Combinatorics book](../combinatorics/index.md) for binomial coefficients.
