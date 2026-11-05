# 11. Joint distributions

*Height and weight, temperature and pressure, the first die and the larger of two dice: interesting random quantities
come in groups, and the interesting questions are about how they move together. Does knowing one tell you something
about the other? What is the law of their sum? If one is large, what should you expect of the other? This chapter
builds the tools for several random variables at once: joint, marginal and conditional laws, independence, covariance
and correlation, the convolution formula for sums, the bivariate normal law, and conditional expectation with its
tower rule, which is one of the most useful single facts in probability.*

!!! abstract "In this chapter"
    **You will learn:**

    - joint, marginal and conditional distributions, for discrete and for continuous variables
    - independence as factorisation of the joint law, and why $E[XY] = E[X]E[Y]$ for independent variables
    - covariance and correlation, the proof that $|\rho| \le 1$, and why correlation does not show causation
    - the law of a sum by convolution: two dice, two uniforms, exponentials adding up to gamma laws, normals adding to normals
    - the bivariate normal law, regression to the mean, and the one family where "uncorrelated" means "independent"
    - conditional expectation $E[Y \mid X]$ as a random variable, the tower rule (with proof) and the law of total variance

    **You need:** [Chapter 9](09-Continuous-Random-Variables.md) (densities, cdfs, change of variables),
    [Chapter 10](10-The-Normal-Distribution.md) (the normal law), [Chapter 6](06-Expectation-and-Variance.md)
    (expectation, variance, covariance for discrete variables) and conditional probability from
    [Chapter 3](03-Conditional-Probability-and-Independence.md). Calculus with double integrals: the MAT257 guides on
    [the Riemann integral in $\mathbb{R}^n$](../../uoft/MAT257Y1/unit09.md) and
    [change of variables](../../uoft/MAT257Y1/unit10.md). A gentler start on two-way tables is the Topics lesson on
    [conditional probability from two-way tables](../../topics/probability/level-6/01-given-two-way-tables.md).

    **Levels:** 11.1 to 11.3 are intermediate; 11.4 is intermediate to advanced; 11.5 and 11.6 are advanced.

## 11.1 Joint, marginal and conditional laws

### The discrete case: a table

Roll two fair dice. Let $X$ be the first die and $Y$ the **larger** of the two. These two numbers are clearly linked:
$Y$ can never be smaller than $X$. To describe them together we list the chance of every pair of values.

**Definition.** The **joint probability mass function** of discrete $X$ and $Y$ is $p(x, y) = P(X = x, Y = y)$
(the comma means "and").

Here, for each $x$ and $y$ from 1 to 6:

- if $y < x$, then $p(x, y) = 0$ (the larger cannot be smaller than the first);
- if $y > x$, the second die must show exactly $y$: $p(x, y) = \tfrac{1}{36}$;
- if $y = x$, the second die can show anything from 1 to $x$: $p(x, x) = \tfrac{x}{36}$.

| | $y = 1$ | 2 | 3 | 4 | 5 | 6 | row sum |
|---|---|---|---|---|---|---|---|
| $x = 1$ | 1/36 | 1/36 | 1/36 | 1/36 | 1/36 | 1/36 | 6/36 |
| $x = 2$ | 0 | 2/36 | 1/36 | 1/36 | 1/36 | 1/36 | 6/36 |
| $x = 3$ | 0 | 0 | 3/36 | 1/36 | 1/36 | 1/36 | 6/36 |
| $x = 4$ | 0 | 0 | 0 | 4/36 | 1/36 | 1/36 | 6/36 |
| $x = 5$ | 0 | 0 | 0 | 0 | 5/36 | 1/36 | 6/36 |
| $x = 6$ | 0 | 0 | 0 | 0 | 0 | 6/36 | 6/36 |
| column sum | 1/36 | 3/36 | 5/36 | 7/36 | 9/36 | 11/36 | 1 |

**Marginals.** Summing a row gives $P(X = x)$, because the events $\{X = x, Y = y\}$ for different $y$ are disjoint and
together make up $\{X = x\}$. This is just the law of total probability. The row sums are all $\tfrac{6}{36} = \tfrac16$,
as they must be for a fair die. The column sums give the law of $Y$ alone: $P(Y = y) = \frac{2y - 1}{36}$. The laws of
$X$ and $Y$ on their own are called the **marginal** laws, because they used to be written in the margins of the table.

**Conditionals.** Given $Y = y$, the possible values of $X$ are restricted to that column, and their chances are
rescaled to add to 1, exactly as in [Chapter 3](03-Conditional-Probability-and-Independence.md):

$$
P(X = x \mid Y = y) = \frac{p(x, y)}{P(Y = y)} .
$$

For $y = 6$: $P(X = x \mid Y = 6) = \frac{1}{11}$ for $x = 1, \dots, 5$ and $\frac{6}{11}$ for $x = 6$. Knowing that the
larger die is a 6 makes "the first die is a 6" much more likely ($\tfrac{6}{11}$ instead of $\tfrac16$).

### The continuous case: a surface

For continuous variables the table becomes a surface over the plane.

**Definition.** $X$ and $Y$ are **jointly continuous** with **joint density** $f(x, y) \ge 0$ if for every (reasonable)
region $A$ of the plane

$$
P\big((X, Y) \in A\big) = \iint_A f(x, y)\,dx\,dy .
$$

In particular $\iint_{\mathbb{R}^2} f = 1$. As in one dimension, $f(x, y)\,dx\,dy$ is the chance of a tiny rectangle at
$(x, y)$, and probability is *volume* under the surface.

The marginal and conditional densities are found exactly as in the table, with integrals in place of sums:

$$
f_X(x) = \int_{-\infty}^{\infty} f(x, y)\,dy, \qquad f_{Y \mid X}(y \mid x) = \frac{f(x, y)}{f_X(x)} \quad \text{(where } f_X(x) > 0\text{)} .
$$

The conditional density deserves a comment. The event $\{X = x\}$ has probability 0, so $P(\,\cdot \mid X = x)$ cannot be
defined by the formula of Chapter 3. What the formula above really says is a limit: condition on $X$ lying in a thin
strip $[x, x + h]$, which has positive probability, and let $h \to 0$. For densities that are continuous this limit
exists and equals $f(x, y)/f_X(x)$. (This limiting process can go wrong in strange ways, as the Borel-Kolmogorov
paradox shows: conditioning on a "line" of probability zero depends on how the line is approached. The fully general
definition of conditioning is part of [Chapter 17](17-Measure-Theoretic-Probability.md).)

**Example 1.** Let $f(x, y) = x + y$ on the unit square $0 \le x, y \le 1$ (and 0 elsewhere).

*Is it a density?* $\int_0^1\int_0^1 (x + y)\,dy\,dx = \int_0^1 \left(x + \tfrac12\right)dx = \tfrac12 + \tfrac12 = 1$. Yes.

*Marginal:* $f_X(x) = \int_0^1 (x + y)\,dy = x + \tfrac12$ for $0 \le x \le 1$, and by symmetry $f_Y(y) = y + \tfrac12$.

*Conditional:* $f_{Y \mid X}(y \mid x) = \dfrac{x + y}{x + \frac12}$ for $0 \le y \le 1$. For $x = 0$ this is $2y$, which
favours large $y$; for $x = 1$ it is $\frac{2(1 + y)}{3}$, which is much flatter.

*A region:* the chance that $X + Y \le 1$ is the volume over the triangle below the line $x + y = 1$:

$$
\int_0^1 \int_0^{1 - x} (x + y)\,dy\,dx = \int_0^1 \left( x(1 - x) + \frac{(1 - x)^2}{2} \right) dx = \frac16 + \frac16 = \frac13 .
$$

Check: the integrand $x + y$ is at most 1 on that triangle and at least 1 on the other half of the square, so the answer
should be below $\tfrac12$; it is.

**Example 2 (uniform on a triangle).** Let $(X, Y)$ be uniform on the triangle $0 < y < x < 1$, which has area
$\tfrac12$, so $f(x, y) = 2$ there. Then $f_X(x) = \int_0^x 2\,dy = 2x$ and $f_Y(y) = \int_y^1 2\,dx = 2(1 - y)$. Given
$X = x$, the conditional density of $Y$ is $\frac{2}{2x} = \frac1x$ on $(0, x)$: **uniform on $(0, x)$**. This is the
same as "choose $X$ with density $2x$, then choose $Y$ uniformly below it", and it is often the easiest way to think of
a joint law: a marginal, then a conditional. The **multiplication rule** $f(x, y) = f_X(x)\,f_{Y \mid X}(y \mid x)$ is the
continuous version of the tree diagrams of Chapter 3.

**Joint cdf.** $F(x, y) = P(X \le x, Y \le y)$ works for every pair of variables, and for jointly continuous ones
$f = \frac{\partial^2 F}{\partial x\,\partial y}$.

## 11.2 Independence

In [Chapter 3](03-Conditional-Probability-and-Independence.md) two events are independent if
$P(A \cap B) = P(A)P(B)$. Random variables are independent if every event about one is independent of every event about
the other.

**Definition.** $X$ and $Y$ are **independent** if $P(X \in A, Y \in B) = P(X \in A)\,P(Y \in B)$ for all (reasonable)
sets $A$ and $B$ of real numbers.

Checking "all sets" sounds impossible, but it reduces to the joint law.

**Theorem.**

1. Discrete $X, Y$ are independent if and only if $p(x, y) = p_X(x)\,p_Y(y)$ for all $x, y$.
2. Jointly continuous $X, Y$ are independent if and only if $f(x, y) = f_X(x)\,f_Y(y)$ (for all $x, y$ except possibly a
   set of zero area).
3. (Factorisation test.) If the joint density can be written as $f(x, y) = g(x)h(y)$ for *some* functions $g, h$, for
   all $x, y$, then $X$ and $Y$ are independent, and $f_X, f_Y$ are $g, h$ rescaled.

*Proof.* (1) If the mass function factorises, then for any sets $A, B$,
$P(X \in A, Y \in B) = \sum_{x \in A}\sum_{y \in B} p_X(x)p_Y(y) = P(X \in A)P(Y \in B)$. Conversely, take
$A = \{x\}$ and $B = \{y\}$. (2) is the same with double integrals instead of double sums: if $f = f_X f_Y$ then
$\iint_{A \times B} f_X(x)f_Y(y)\,dx\,dy = \int_A f_X \int_B f_Y$. For the converse, independence gives
$F(x, y) = F_X(x)F_Y(y)$, and differentiating in $x$ and then $y$ gives $f = f_X f_Y$. (3) Integrating $g(x)h(y)$ over
the plane gives $\int g \int h = 1$; integrating over $y$ alone gives $f_X(x) = g(x)\int h$, and similarly
$f_Y(y) = h(y)\int g$. So $f_X(x)f_Y(y) = g(x)h(y)\int g\int h = f(x, y)$. $\square$

A warning about part 3: "for all $x, y$" includes the points where the density is 0. In Example 2,
$f(x, y) = 2$ on the triangle *looks* like a product of constants, but written for all $x, y$ it is
$f(x, y) = 2 \cdot \mathbf{1}[0 < y < x < 1]$, and the indicator of $y < x$ does not split. So $X$ and $Y$ are not
independent, which is obvious anyway: $Y < X$. **A joint density can only factorise if its support (the set where it is
positive) is a rectangle**, possibly infinite.

**Example 3.** $f(x, y) = 4xy$ on the unit square factorises as $(2x)(2y)$ on a rectangle: $X$ and $Y$ are independent,
each with density $2x$. But $f(x, y) = x + y$ (Example 1) is not a product: $f_X(x)f_Y(y) = (x + \tfrac12)(y + \tfrac12)$,
which at $(0, 0)$ is $\tfrac14$ while $f(0, 0) = 0$.

**Example 4.** In the dice table, $P(X = 6, Y = 1) = 0$ while $P(X = 6)P(Y = 1) = \tfrac{1}{216}$: not independent.

### Two consequences

**Functions of independent variables are independent.** If $X$ and $Y$ are independent, so are $g(X)$ and $h(Y)$ for
any functions $g, h$: the event $\{g(X) \in A\}$ is the event $\{X \in g^{-1}(A)\}$, an event about $X$ alone.

**Theorem (expectation of a product).** If $X$ and $Y$ are independent and have finite means, then

$$
E[XY] = E[X]\,E[Y] .
$$

*Proof (continuous case).* Using the joint density $f_X(x)f_Y(y)$ and the two-variable version of
$E[g(X,Y)] = \iint g\,f$:

$$
E[XY] = \iint xy\, f_X(x)f_Y(y)\,dx\,dy = \int x f_X(x)\,dx \int y f_Y(y)\,dy = E[X]E[Y] .
$$

Splitting the double integral into a product is Fubini's theorem, valid because $\iint |xy| f_X f_Y = E|X|\,E|Y| < \infty$.
The discrete case is identical with sums. $\square$

More generally $E[g(X)h(Y)] = E[g(X)]E[h(Y)]$, which is what made mgfs multiply in
[Chapter 8](08-Generating-Functions-in-Probability.md). The converse fails: $E[XY] = E[X]E[Y]$ does not imply
independence (section 11.3).

**Many variables.** $X_1, \dots, X_n$ are (mutually) independent if their joint law factorises into the product of the $n$
marginals. As with events (Chapter 3), pairwise independence is weaker than mutual independence.

## 11.3 Covariance and correlation

### Measuring how two variables move together

**Definition.** The **covariance** of $X$ and $Y$ (with finite variances) is

$$
\operatorname{Cov}(X, Y) = E\big[(X - \mu_X)(Y - \mu_Y)\big] = E[XY] - \mu_X\mu_Y .
$$

When $X$ is above its mean and $Y$ tends to be above its mean too, the product $(X - \mu_X)(Y - \mu_Y)$ is usually
positive and the covariance is positive. When one tends to be high while the other is low, it is negative.
[Chapter 6](06-Expectation-and-Variance.md) showed the rules: covariance is symmetric, bilinear
($\operatorname{Cov}(aX + bZ, Y) = a\operatorname{Cov}(X, Y) + b\operatorname{Cov}(Z, Y)$), $\operatorname{Cov}(X, X) = \operatorname{Var}(X)$,
and

$$
\operatorname{Var}(X + Y) = \operatorname{Var}(X) + \operatorname{Var}(Y) + 2\operatorname{Cov}(X, Y) .
$$

Independent variables have covariance 0, by the product theorem of 11.2. Covariance has units (centimetres times
kilograms, say) and changes when you change units. Dividing by the standard deviations removes them.

**Definition.** The **correlation coefficient** is

$$
\rho(X, Y) = \frac{\operatorname{Cov}(X, Y)}{\sigma_X \sigma_Y} .
$$

**Theorem.** $-1 \le \rho \le 1$. Moreover $\rho = \pm 1$ if and only if $Y = a + bX$ with probability 1 for some
constants, with $b > 0$ when $\rho = 1$ and $b < 0$ when $\rho = -1$.

*Proof.* Let $U = (X - \mu_X)/\sigma_X$ and $V = (Y - \mu_Y)/\sigma_Y$ be the standardised variables, so $E[U^2] = E[V^2] = 1$
and $E[UV] = \rho$. A variance (or any mean of a square) is never negative, so

$$
0 \le E\big[(U - V)^2\big] = 1 - 2\rho + 1 = 2(1 - \rho), \qquad 0 \le E\big[(U + V)^2\big] = 2(1 + \rho) .
$$

So $-1 \le \rho \le 1$. If $\rho = 1$ then $E[(U - V)^2] = 0$; a non-negative variable with mean 0 is 0 with
probability 1, so $U = V$, which says $Y = \mu_Y + \frac{\sigma_Y}{\sigma_X}(X - \mu_X)$, a line with positive slope.
The case $\rho = -1$ gives $U = -V$. Conversely, if $Y = a + bX$ then $V = \pm U$ and $\rho = \pm1$. $\square$

This is the Cauchy-Schwarz inequality $|E[UV]|^2 \le E[U^2]E[V^2]$ in disguise, the same inequality as
$|\mathbf{u} \cdot \mathbf{v}| \le |\mathbf{u}||\mathbf{v}|$ for vectors. In that picture, $\rho$ is the cosine of the
angle between $X - \mu_X$ and $Y - \mu_Y$.

**Example 1, continued.** For $f(x, y) = x + y$: $E[X] = \int_0^1 x(x + \tfrac12)\,dx = \tfrac{7}{12}$,
$E[X^2] = \int_0^1 x^2(x + \tfrac12)\,dx = \tfrac{5}{12}$, so $\operatorname{Var}(X) = \tfrac{5}{12} - \tfrac{49}{144} = \tfrac{11}{144}$.
And $E[XY] = \int_0^1\int_0^1 xy(x + y)\,dy\,dx = \tfrac16 + \tfrac16 = \tfrac13$. So

$$
\operatorname{Cov}(X, Y) = \frac13 - \frac{49}{144} = -\frac{1}{144}, \qquad \rho = \frac{-1/144}{11/144} = -\frac{1}{11} \approx -0.09 .
$$

A weak negative correlation.

**Example 4, continued (the dice).** $E[X] = \tfrac72$, $E[Y] = \sum_y y\frac{2y - 1}{36} = \tfrac{161}{36}$ and
$E[XY] = \tfrac{154}{9}$, so $\operatorname{Cov}(X, Y) = \tfrac{154}{9} - \tfrac72 \cdot \tfrac{161}{36} = \tfrac{35}{24}$.
With $\operatorname{Var}(X) = \tfrac{35}{12}$ and $\operatorname{Var}(Y) = \tfrac{2555}{1296}$, $\rho \approx 0.61$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 620 225" role="img" aria-label="Three scatter plots of 110 simulated points from a bivariate normal law with standard normal marginals. Left: correlation 0, a round cloud. Middle: correlation 0.7, a cloud stretched along the rising diagonal. Right: correlation minus 0.9, a thin cloud along the falling diagonal">
  <rect x="10" y="15" width="180" height="180" fill="none" stroke="currentColor" stroke-width="1"/>
  <line x1="10" y1="105" x2="190" y2="105" stroke="currentColor" stroke-width="0.6" stroke-dasharray="3 3"/>
  <line x1="100" y1="15" x2="100" y2="195" stroke="currentColor" stroke-width="0.6" stroke-dasharray="3 3"/>
  <g fill="#9cc9ea" stroke="currentColor" stroke-width="0.4">
    <circle cx="92.3" cy="89.7" r="2.2"/>
    <circle cx="93.2" cy="114.5" r="2.2"/>
    <circle cx="72.1" cy="111.4" r="2.2"/>
    <circle cx="133.4" cy="92.3" r="2.2"/>
    <circle cx="131.1" cy="97.5" r="2.2"/>
    <circle cx="111.8" cy="99.4" r="2.2"/>
    <circle cx="50.0" cy="79.3" r="2.2"/>
    <circle cx="115.2" cy="90.0" r="2.2"/>
    <circle cx="49.3" cy="157.3" r="2.2"/>
    <circle cx="73.3" cy="119.0" r="2.2"/>
    <circle cx="109.2" cy="106.4" r="2.2"/>
    <circle cx="115.6" cy="124.3" r="2.2"/>
    <circle cx="109.3" cy="93.2" r="2.2"/>
    <circle cx="80.2" cy="53.5" r="2.2"/>
    <circle cx="116.7" cy="69.1" r="2.2"/>
    <circle cx="81.4" cy="127.2" r="2.2"/>
    <circle cx="89.7" cy="108.2" r="2.2"/>
    <circle cx="119.0" cy="97.5" r="2.2"/>
    <circle cx="86.6" cy="133.7" r="2.2"/>
    <circle cx="84.4" cy="68.4" r="2.2"/>
    <circle cx="75.8" cy="97.7" r="2.2"/>
    <circle cx="112.8" cy="149.7" r="2.2"/>
    <circle cx="101.5" cy="65.8" r="2.2"/>
    <circle cx="39.6" cy="114.6" r="2.2"/>
    <circle cx="96.8" cy="129.5" r="2.2"/>
    <circle cx="114.9" cy="106.9" r="2.2"/>
    <circle cx="56.1" cy="80.2" r="2.2"/>
    <circle cx="120.1" cy="76.6" r="2.2"/>
    <circle cx="143.2" cy="94.1" r="2.2"/>
    <circle cx="103.6" cy="144.0" r="2.2"/>
    <circle cx="118.5" cy="123.4" r="2.2"/>
    <circle cx="86.4" cy="142.9" r="2.2"/>
    <circle cx="71.0" cy="120.9" r="2.2"/>
    <circle cx="138.7" cy="166.0" r="2.2"/>
    <circle cx="56.3" cy="97.8" r="2.2"/>
    <circle cx="143.3" cy="87.6" r="2.2"/>
    <circle cx="43.0" cy="180.5" r="2.2"/>
    <circle cx="110.7" cy="127.1" r="2.2"/>
    <circle cx="66.4" cy="75.7" r="2.2"/>
    <circle cx="133.1" cy="100.3" r="2.2"/>
    <circle cx="107.4" cy="92.0" r="2.2"/>
    <circle cx="147.8" cy="86.4" r="2.2"/>
    <circle cx="115.6" cy="88.6" r="2.2"/>
    <circle cx="53.0" cy="66.5" r="2.2"/>
    <circle cx="128.7" cy="89.1" r="2.2"/>
    <circle cx="40.8" cy="124.0" r="2.2"/>
    <circle cx="125.3" cy="159.3" r="2.2"/>
    <circle cx="94.5" cy="74.4" r="2.2"/>
    <circle cx="60.7" cy="56.7" r="2.2"/>
    <circle cx="116.6" cy="109.5" r="2.2"/>
    <circle cx="109.7" cy="85.5" r="2.2"/>
    <circle cx="103.6" cy="70.6" r="2.2"/>
    <circle cx="80.2" cy="117.4" r="2.2"/>
    <circle cx="131.3" cy="104.2" r="2.2"/>
    <circle cx="73.6" cy="76.6" r="2.2"/>
    <circle cx="144.0" cy="118.3" r="2.2"/>
    <circle cx="58.6" cy="109.0" r="2.2"/>
    <circle cx="95.5" cy="113.9" r="2.2"/>
    <circle cx="142.1" cy="135.8" r="2.2"/>
    <circle cx="137.8" cy="143.0" r="2.2"/>
    <circle cx="76.4" cy="86.1" r="2.2"/>
    <circle cx="133.9" cy="79.2" r="2.2"/>
    <circle cx="110.4" cy="100.7" r="2.2"/>
    <circle cx="104.6" cy="87.7" r="2.2"/>
    <circle cx="94.7" cy="96.7" r="2.2"/>
    <circle cx="117.2" cy="105.0" r="2.2"/>
    <circle cx="122.9" cy="88.0" r="2.2"/>
    <circle cx="160.3" cy="95.3" r="2.2"/>
    <circle cx="87.2" cy="116.2" r="2.2"/>
    <circle cx="99.6" cy="77.3" r="2.2"/>
    <circle cx="89.9" cy="93.4" r="2.2"/>
    <circle cx="155.1" cy="181.9" r="2.2"/>
    <circle cx="66.3" cy="97.7" r="2.2"/>
    <circle cx="112.0" cy="97.8" r="2.2"/>
    <circle cx="87.1" cy="85.3" r="2.2"/>
    <circle cx="108.5" cy="120.7" r="2.2"/>
    <circle cx="172.9" cy="94.3" r="2.2"/>
    <circle cx="83.4" cy="108.0" r="2.2"/>
    <circle cx="93.2" cy="106.9" r="2.2"/>
    <circle cx="18.2" cy="119.6" r="2.2"/>
    <circle cx="130.3" cy="140.1" r="2.2"/>
    <circle cx="98.0" cy="76.4" r="2.2"/>
    <circle cx="125.7" cy="60.3" r="2.2"/>
    <circle cx="49.0" cy="115.6" r="2.2"/>
    <circle cx="89.8" cy="86.3" r="2.2"/>
    <circle cx="132.8" cy="185.5" r="2.2"/>
    <circle cx="132.7" cy="148.4" r="2.2"/>
    <circle cx="120.5" cy="149.8" r="2.2"/>
    <circle cx="105.3" cy="69.2" r="2.2"/>
    <circle cx="95.5" cy="99.3" r="2.2"/>
    <circle cx="123.9" cy="100.8" r="2.2"/>
    <circle cx="97.3" cy="59.0" r="2.2"/>
    <circle cx="131.5" cy="113.8" r="2.2"/>
    <circle cx="182.4" cy="139.4" r="2.2"/>
    <circle cx="127.4" cy="113.0" r="2.2"/>
    <circle cx="104.0" cy="83.8" r="2.2"/>
    <circle cx="106.7" cy="85.8" r="2.2"/>
    <circle cx="54.2" cy="150.3" r="2.2"/>
    <circle cx="118.4" cy="133.9" r="2.2"/>
    <circle cx="69.2" cy="149.1" r="2.2"/>
    <circle cx="138.0" cy="82.6" r="2.2"/>
    <circle cx="144.2" cy="133.1" r="2.2"/>
    <circle cx="100.0" cy="139.2" r="2.2"/>
    <circle cx="123.0" cy="57.3" r="2.2"/>
    <circle cx="73.3" cy="58.2" r="2.2"/>
    <circle cx="129.6" cy="110.3" r="2.2"/>
    <circle cx="40.8" cy="62.8" r="2.2"/>
    <circle cx="97.1" cy="123.1" r="2.2"/>
    <circle cx="112.0" cy="92.7" r="2.2"/>
    <circle cx="144.9" cy="135.6" r="2.2"/>
  </g>
  <text x="100" y="215" text-anchor="middle" font-size="13" fill="currentColor">ρ = 0</text>
  <rect x="220" y="15" width="180" height="180" fill="none" stroke="currentColor" stroke-width="1"/>
  <line x1="220" y1="105" x2="400" y2="105" stroke="currentColor" stroke-width="0.6" stroke-dasharray="3 3"/>
  <line x1="310" y1="15" x2="310" y2="195" stroke="currentColor" stroke-width="0.6" stroke-dasharray="3 3"/>
  <g fill="#eea66f" stroke="currentColor" stroke-width="0.4">
    <circle cx="344.1" cy="49.3" r="2.2"/>
    <circle cx="353.6" cy="78.4" r="2.2"/>
    <circle cx="287.7" cy="98.8" r="2.2"/>
    <circle cx="313.5" cy="99.9" r="2.2"/>
    <circle cx="352.7" cy="80.7" r="2.2"/>
    <circle cx="241.1" cy="161.5" r="2.2"/>
    <circle cx="254.4" cy="126.4" r="2.2"/>
    <circle cx="319.5" cy="111.4" r="2.2"/>
    <circle cx="309.7" cy="87.4" r="2.2"/>
    <circle cx="312.4" cy="74.9" r="2.2"/>
    <circle cx="308.2" cy="84.0" r="2.2"/>
    <circle cx="354.7" cy="39.2" r="2.2"/>
    <circle cx="289.8" cy="100.3" r="2.2"/>
    <circle cx="253.7" cy="167.6" r="2.2"/>
    <circle cx="251.1" cy="123.3" r="2.2"/>
    <circle cx="273.0" cy="131.1" r="2.2"/>
    <circle cx="304.2" cy="109.6" r="2.2"/>
    <circle cx="292.3" cy="112.4" r="2.2"/>
    <circle cx="363.7" cy="66.4" r="2.2"/>
    <circle cx="325.9" cy="72.4" r="2.2"/>
    <circle cx="304.1" cy="136.1" r="2.2"/>
    <circle cx="293.3" cy="93.7" r="2.2"/>
    <circle cx="260.6" cy="152.4" r="2.2"/>
    <circle cx="340.2" cy="66.9" r="2.2"/>
    <circle cx="310.2" cy="87.6" r="2.2"/>
    <circle cx="315.0" cy="126.8" r="2.2"/>
    <circle cx="263.1" cy="151.5" r="2.2"/>
    <circle cx="337.7" cy="97.7" r="2.2"/>
    <circle cx="282.9" cy="140.5" r="2.2"/>
    <circle cx="264.0" cy="139.7" r="2.2"/>
    <circle cx="274.6" cy="122.0" r="2.2"/>
    <circle cx="239.2" cy="147.5" r="2.2"/>
    <circle cx="290.8" cy="160.1" r="2.2"/>
    <circle cx="331.7" cy="95.7" r="2.2"/>
    <circle cx="243.1" cy="170.6" r="2.2"/>
    <circle cx="318.7" cy="108.7" r="2.2"/>
    <circle cx="333.4" cy="72.6" r="2.2"/>
    <circle cx="330.0" cy="84.0" r="2.2"/>
    <circle cx="350.0" cy="62.9" r="2.2"/>
    <circle cx="323.5" cy="140.2" r="2.2"/>
    <circle cx="336.9" cy="58.1" r="2.2"/>
    <circle cx="301.1" cy="121.3" r="2.2"/>
    <circle cx="368.2" cy="101.9" r="2.2"/>
    <circle cx="324.1" cy="43.2" r="2.2"/>
    <circle cx="282.2" cy="109.7" r="2.2"/>
    <circle cx="366.6" cy="68.0" r="2.2"/>
    <circle cx="326.8" cy="73.9" r="2.2"/>
    <circle cx="282.8" cy="125.9" r="2.2"/>
    <circle cx="318.8" cy="81.2" r="2.2"/>
    <circle cx="309.0" cy="109.9" r="2.2"/>
    <circle cx="279.5" cy="134.0" r="2.2"/>
    <circle cx="336.8" cy="84.1" r="2.2"/>
    <circle cx="284.4" cy="140.9" r="2.2"/>
    <circle cx="390.0" cy="24.6" r="2.2"/>
    <circle cx="329.1" cy="147.2" r="2.2"/>
    <circle cx="328.6" cy="81.7" r="2.2"/>
    <circle cx="360.5" cy="60.5" r="2.2"/>
    <circle cx="308.0" cy="95.2" r="2.2"/>
    <circle cx="251.7" cy="123.7" r="2.2"/>
    <circle cx="319.7" cy="113.2" r="2.2"/>
    <circle cx="349.8" cy="38.4" r="2.2"/>
    <circle cx="267.9" cy="148.7" r="2.2"/>
    <circle cx="318.7" cy="95.0" r="2.2"/>
    <circle cx="298.0" cy="134.2" r="2.2"/>
    <circle cx="373.6" cy="38.2" r="2.2"/>
    <circle cx="274.2" cy="158.9" r="2.2"/>
    <circle cx="361.1" cy="48.0" r="2.2"/>
    <circle cx="364.6" cy="49.4" r="2.2"/>
    <circle cx="283.8" cy="117.7" r="2.2"/>
    <circle cx="245.2" cy="166.4" r="2.2"/>
    <circle cx="308.2" cy="95.0" r="2.2"/>
    <circle cx="288.2" cy="122.9" r="2.2"/>
    <circle cx="323.8" cy="87.3" r="2.2"/>
    <circle cx="329.1" cy="87.1" r="2.2"/>
    <circle cx="300.3" cy="94.9" r="2.2"/>
    <circle cx="311.5" cy="121.7" r="2.2"/>
    <circle cx="291.2" cy="118.2" r="2.2"/>
    <circle cx="306.7" cy="103.9" r="2.2"/>
    <circle cx="310.0" cy="101.2" r="2.2"/>
    <circle cx="306.0" cy="134.8" r="2.2"/>
    <circle cx="322.6" cy="73.6" r="2.2"/>
    <circle cx="323.0" cy="99.9" r="2.2"/>
    <circle cx="323.4" cy="116.3" r="2.2"/>
    <circle cx="253.1" cy="143.5" r="2.2"/>
    <circle cx="282.1" cy="108.7" r="2.2"/>
    <circle cx="277.5" cy="184.1" r="2.2"/>
    <circle cx="278.8" cy="93.0" r="2.2"/>
    <circle cx="298.5" cy="142.4" r="2.2"/>
    <circle cx="287.1" cy="109.9" r="2.2"/>
    <circle cx="324.9" cy="90.8" r="2.2"/>
    <circle cx="354.5" cy="58.7" r="2.2"/>
    <circle cx="309.4" cy="92.7" r="2.2"/>
    <circle cx="359.6" cy="49.4" r="2.2"/>
    <circle cx="340.7" cy="106.7" r="2.2"/>
    <circle cx="305.5" cy="92.5" r="2.2"/>
    <circle cx="301.1" cy="88.3" r="2.2"/>
    <circle cx="327.9" cy="73.0" r="2.2"/>
    <circle cx="303.6" cy="54.9" r="2.2"/>
    <circle cx="347.2" cy="83.6" r="2.2"/>
    <circle cx="312.7" cy="47.5" r="2.2"/>
    <circle cx="299.7" cy="93.5" r="2.2"/>
    <circle cx="339.4" cy="84.3" r="2.2"/>
    <circle cx="275.0" cy="125.5" r="2.2"/>
    <circle cx="320.8" cy="73.3" r="2.2"/>
    <circle cx="333.5" cy="88.0" r="2.2"/>
    <circle cx="335.6" cy="75.5" r="2.2"/>
    <circle cx="316.2" cy="99.5" r="2.2"/>
    <circle cx="302.7" cy="95.4" r="2.2"/>
    <circle cx="278.4" cy="140.6" r="2.2"/>
    <circle cx="310.1" cy="136.3" r="2.2"/>
  </g>
  <text x="310" y="215" text-anchor="middle" font-size="13" fill="currentColor">ρ = 0.7</text>
  <rect x="430" y="15" width="180" height="180" fill="none" stroke="currentColor" stroke-width="1"/>
  <line x1="430" y1="105" x2="610" y2="105" stroke="currentColor" stroke-width="0.6" stroke-dasharray="3 3"/>
  <line x1="520" y1="15" x2="520" y2="195" stroke="currentColor" stroke-width="0.6" stroke-dasharray="3 3"/>
  <g fill="#7ccf9a" stroke="currentColor" stroke-width="0.4">
    <circle cx="506.9" cy="119.5" r="2.2"/>
    <circle cx="499.5" cy="79.1" r="2.2"/>
    <circle cx="537.0" cy="121.0" r="2.2"/>
    <circle cx="513.0" cy="117.3" r="2.2"/>
    <circle cx="574.8" cy="147.6" r="2.2"/>
    <circle cx="552.8" cy="146.1" r="2.2"/>
    <circle cx="514.4" cy="123.8" r="2.2"/>
    <circle cx="543.4" cy="113.8" r="2.2"/>
    <circle cx="463.1" cy="54.5" r="2.2"/>
    <circle cx="538.9" cy="145.1" r="2.2"/>
    <circle cx="465.2" cy="69.6" r="2.2"/>
    <circle cx="501.1" cy="106.4" r="2.2"/>
    <circle cx="520.9" cy="102.6" r="2.2"/>
    <circle cx="539.0" cy="112.9" r="2.2"/>
    <circle cx="565.1" cy="130.3" r="2.2"/>
    <circle cx="480.6" cy="76.2" r="2.2"/>
    <circle cx="488.2" cy="90.5" r="2.2"/>
    <circle cx="517.6" cy="102.7" r="2.2"/>
    <circle cx="534.7" cy="139.0" r="2.2"/>
    <circle cx="482.9" cy="71.9" r="2.2"/>
    <circle cx="514.0" cy="103.7" r="2.2"/>
    <circle cx="518.1" cy="113.2" r="2.2"/>
    <circle cx="541.0" cy="119.3" r="2.2"/>
    <circle cx="517.4" cy="111.4" r="2.2"/>
    <circle cx="514.8" cy="135.9" r="2.2"/>
    <circle cx="490.6" cy="78.0" r="2.2"/>
    <circle cx="474.9" cy="61.8" r="2.2"/>
    <circle cx="524.4" cy="127.0" r="2.2"/>
    <circle cx="512.5" cy="102.3" r="2.2"/>
    <circle cx="533.8" cy="109.4" r="2.2"/>
    <circle cx="518.9" cy="115.2" r="2.2"/>
    <circle cx="515.7" cy="102.0" r="2.2"/>
    <circle cx="542.0" cy="121.0" r="2.2"/>
    <circle cx="498.3" cy="103.2" r="2.2"/>
    <circle cx="508.8" cy="104.6" r="2.2"/>
    <circle cx="486.6" cy="76.5" r="2.2"/>
    <circle cx="505.3" cy="90.4" r="2.2"/>
    <circle cx="535.7" cy="124.5" r="2.2"/>
    <circle cx="589.7" cy="172.0" r="2.2"/>
    <circle cx="553.1" cy="133.2" r="2.2"/>
    <circle cx="553.5" cy="166.2" r="2.2"/>
    <circle cx="497.5" cy="81.5" r="2.2"/>
    <circle cx="538.1" cy="90.7" r="2.2"/>
    <circle cx="529.7" cy="97.0" r="2.2"/>
    <circle cx="543.0" cy="113.3" r="2.2"/>
    <circle cx="535.3" cy="120.8" r="2.2"/>
    <circle cx="535.3" cy="132.8" r="2.2"/>
    <circle cx="555.4" cy="150.2" r="2.2"/>
    <circle cx="527.5" cy="84.0" r="2.2"/>
    <circle cx="513.3" cy="98.7" r="2.2"/>
    <circle cx="554.9" cy="136.1" r="2.2"/>
    <circle cx="495.8" cy="79.8" r="2.2"/>
    <circle cx="537.5" cy="111.4" r="2.2"/>
    <circle cx="496.8" cy="61.2" r="2.2"/>
    <circle cx="570.0" cy="149.8" r="2.2"/>
    <circle cx="528.1" cy="117.9" r="2.2"/>
    <circle cx="562.4" cy="152.4" r="2.2"/>
    <circle cx="540.2" cy="129.5" r="2.2"/>
    <circle cx="499.2" cy="76.9" r="2.2"/>
    <circle cx="560.0" cy="141.1" r="2.2"/>
    <circle cx="499.7" cy="76.1" r="2.2"/>
    <circle cx="518.5" cy="99.6" r="2.2"/>
    <circle cx="565.7" cy="131.3" r="2.2"/>
    <circle cx="504.4" cy="61.1" r="2.2"/>
    <circle cx="520.1" cy="94.8" r="2.2"/>
    <circle cx="500.6" cy="88.1" r="2.2"/>
    <circle cx="467.5" cy="34.4" r="2.2"/>
    <circle cx="561.0" cy="157.8" r="2.2"/>
    <circle cx="474.8" cy="85.6" r="2.2"/>
    <circle cx="555.3" cy="142.8" r="2.2"/>
    <circle cx="518.2" cy="107.5" r="2.2"/>
    <circle cx="516.4" cy="116.0" r="2.2"/>
    <circle cx="520.7" cy="124.5" r="2.2"/>
    <circle cx="517.9" cy="99.0" r="2.2"/>
    <circle cx="534.0" cy="120.7" r="2.2"/>
    <circle cx="492.9" cy="78.5" r="2.2"/>
    <circle cx="505.5" cy="71.4" r="2.2"/>
    <circle cx="543.0" cy="127.2" r="2.2"/>
    <circle cx="505.9" cy="101.5" r="2.2"/>
    <circle cx="491.9" cy="84.3" r="2.2"/>
    <circle cx="528.8" cy="106.2" r="2.2"/>
    <circle cx="537.1" cy="92.9" r="2.2"/>
    <circle cx="498.9" cy="85.8" r="2.2"/>
    <circle cx="603.8" cy="189.0" r="2.2"/>
    <circle cx="504.4" cy="88.7" r="2.2"/>
    <circle cx="524.6" cy="103.8" r="2.2"/>
    <circle cx="512.8" cy="93.8" r="2.2"/>
    <circle cx="521.6" cy="96.3" r="2.2"/>
    <circle cx="463.2" cy="65.5" r="2.2"/>
    <circle cx="519.9" cy="118.4" r="2.2"/>
    <circle cx="488.7" cy="68.6" r="2.2"/>
    <circle cx="500.5" cy="79.1" r="2.2"/>
    <circle cx="542.4" cy="121.1" r="2.2"/>
    <circle cx="535.2" cy="120.1" r="2.2"/>
    <circle cx="477.7" cy="67.3" r="2.2"/>
    <circle cx="533.6" cy="124.2" r="2.2"/>
    <circle cx="517.0" cy="92.5" r="2.2"/>
    <circle cx="493.7" cy="72.9" r="2.2"/>
    <circle cx="575.9" cy="162.5" r="2.2"/>
    <circle cx="524.4" cy="110.9" r="2.2"/>
    <circle cx="566.2" cy="142.4" r="2.2"/>
    <circle cx="546.9" cy="138.3" r="2.2"/>
    <circle cx="519.5" cy="104.7" r="2.2"/>
    <circle cx="466.7" cy="38.2" r="2.2"/>
    <circle cx="547.0" cy="152.2" r="2.2"/>
    <circle cx="542.3" cy="126.8" r="2.2"/>
    <circle cx="533.5" cy="112.3" r="2.2"/>
    <circle cx="475.0" cy="67.3" r="2.2"/>
    <circle cx="564.8" cy="152.8" r="2.2"/>
    <circle cx="489.3" cy="95.2" r="2.2"/>
  </g>
  <text x="520" y="215" text-anchor="middle" font-size="13" fill="currentColor">ρ = −0.9</text>
</svg>
</div>

*Simulated pairs with correlation 0, 0.7 and -0.9. The closer $|\rho|$ is to 1, the closer the cloud is to a line.*

### Uncorrelated is not independent

**Example 5.** Let $X$ be uniform on $[-1, 1]$ and $Y = X^2$. Then $Y$ is a function of $X$, as dependent as can be.
But $E[X] = 0$ and $E[XY] = E[X^3] = 0$ (odd function), so $\operatorname{Cov}(X, Y) = 0$. Correlation measures only
**linear** association: here the points lie on a parabola, symmetric about the vertical axis, and the best straight
line through them is flat.

### Correlation is not causation

Correlation is a property of a joint law. Causation is a claim about what would happen if you *changed* one variable:
it is about a different experiment. The mathematics shows clearly how the two come apart.

**A common cause.** Let $Z, E_1, E_2$ be independent with variance 1, and put $X = Z + E_1$ and $Y = Z + E_2$. Neither
$X$ nor $Y$ appears in the formula for the other, so changing $X$ (by changing $E_1$) does nothing to $Y$. Yet

$$
\operatorname{Cov}(X, Y) = \operatorname{Cov}(Z, Z) = 1, \qquad \rho = \frac{1}{\sqrt{2}\sqrt{2}} = \frac12 .
$$

$Z$ is a **confounder**: a hidden variable that drives both. Ice cream sales and the number of swimming accidents can be
correlated over a year for this reason (warm weather drives both); banning ice cream would not prevent drownings. Other
routes to correlation without the causation you have in mind are causation the other way round, selection (studying
only a group chosen by a rule that links the two variables), and plain chance in short data series.

A well-documented case where this mattered: in the 1980s and 1990s, observational studies found that women who took
hormone replacement therapy after menopause had less heart disease. The Women's Health Initiative, a large randomised
trial whose main results were reported in 2002, did not find the protective effect (it found a small increase in risk).
The women who chose the therapy differed from those who did not in other ways that also affected their hearts.
**Randomisation** breaks the link to confounders: if a coin decides who gets the treatment, the treatment is
independent of every hidden variable, and a correlation between treatment and outcome can then be read causally. That
is the reason randomised trials are trusted, and it is a theorem of this chapter (functions of independent variables
are independent) at work. The careful theory of causal inference belongs to the Statistics book planned for this site.

<figure class="play" data-play="scatter"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> A made-up cloud of pairs: move the strength of the link and watch the correlation r and the best-fit line.</figcaption></figure>

## 11.4 Sums: convolution

### The question

If $X$ and $Y$ are independent and we know their laws, what is the law of $X + Y$? We know its mean and variance
(they add), but not its shape. The answer is a formula called convolution.

### Discrete

$X + Y = z$ happens when $X = x$ and $Y = z - x$ for some $x$; these cases are disjoint, so by independence

$$
P(X + Y = z) = \sum_x P(X = x)\,P(Y = z - x) .
$$

**Example 6 (two dice).** $P(X + Y = 7) = \sum_{x=1}^{6} \tfrac16 \cdot \tfrac16 = \tfrac{6}{36}$, and in general
$P(X + Y = z) = \frac{6 - |z - 7|}{36}$ for $z = 2, \dots, 12$: a triangle.

**Example 7 (Poisson plus Poisson).** If $X \sim \text{Poisson}(\lambda)$ and $Y \sim \text{Poisson}(\mu)$ are
independent, then

$$
P(X + Y = n) = \sum_{k=0}^{n} e^{-\lambda}\frac{\lambda^k}{k!}\, e^{-\mu}\frac{\mu^{n-k}}{(n - k)!} = \frac{e^{-(\lambda + \mu)}}{n!}\sum_{k=0}^n \binom{n}{k}\lambda^k\mu^{n-k} = e^{-(\lambda + \mu)}\frac{(\lambda + \mu)^n}{n!},
$$

by the binomial theorem. So $X + Y \sim \text{Poisson}(\lambda + \mu)$: calls arriving on two independent lines add up
to Poisson calls with the summed rate.

### Continuous

**Theorem (convolution).** If $X$ and $Y$ are independent with densities $f_X$ and $f_Y$, then $Z = X + Y$ has density

$$
f_Z(z) = \int_{-\infty}^{\infty} f_X(x)\,f_Y(z - x)\,dx .
$$

*Proof.* Compute the cdf with the joint density $f_X(x)f_Y(y)$, then substitute $y = u - x$ in the inner integral:

$$
P(Z \le z) = \int_{-\infty}^{\infty} \int_{-\infty}^{z - x} f_Y(y)\,dy\, f_X(x)\,dx = \int_{-\infty}^{\infty} \int_{-\infty}^{z} f_Y(u - x)\,du\, f_X(x)\,dx = \int_{-\infty}^{z} \left( \int_{-\infty}^{\infty} f_X(x)f_Y(u - x)\,dx \right) du .
$$

(Swapping the order is allowed because everything is non-negative.) The integrand of the outer integral is therefore
the density of $Z$. $\square$

The function $f_X * f_Y$ defined by this integral is called the **convolution** of $f_X$ and $f_Y$. The idea is the
same as for dice: to make the total $z$, the first part takes some value $x$ and the second makes up the difference
$z - x$; add (integrate) over all ways.

**Example 8 (two uniforms make a triangle).** Let $X, Y$ be independent and uniform on $[0, 1]$. Then
$f_Y(z - x) = 1$ exactly when $0 \le z - x \le 1$, so $f_Z(z)$ is the length of $[0, 1] \cap [z - 1, z]$:

$$
f_Z(z) = \begin{cases} z, & 0 \le z \le 1, \\ 2 - z, & 1 \le z \le 2, \\ 0, & \text{otherwise.} \end{cases}
$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 200" role="img" aria-label="The density of the sum of two independent uniform variables on 0 to 1: a triangle rising from 0 at z equals 0 to height 1 at z equals 1 and falling back to 0 at z equals 2. The area to the left of z equals 1.5 is shaded, leaving a small triangle of area one eighth on the right">
  <polygon points="60,170 200,40 270,105 270,170" fill="#9cc9ea" fill-opacity="0.6" stroke="none"/>
  <polygon points="270,105 340,170 270,170" fill="#eea66f" fill-opacity="0.7" stroke="none"/>
  <polyline points="60,170 200,40 340,170" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <line x1="40" y1="170" x2="380" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="170" x2="60" y2="30" stroke="currentColor" stroke-width="1.5"/>
  <line x1="200" y1="170" x2="200" y2="40" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="60" y="186" text-anchor="middle" font-size="12" fill="currentColor">0</text>
  <text x="200" y="186" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <text x="270" y="186" text-anchor="middle" font-size="12" fill="currentColor">1.5</text>
  <text x="340" y="186" text-anchor="middle" font-size="12" fill="currentColor">2</text>
  <text x="52" y="44" text-anchor="end" font-size="12" fill="currentColor">1</text>
  <text x="290" y="160" font-size="12" fill="currentColor">1/8</text>
  <text x="230" y="60" font-size="12" fill="currentColor">f(z) for Z = X + Y</text>
</svg>
</div>

The flat uniform has become a tent. Adding a third uniform gives a curve made of three parabolas that already looks
like a bell, which is the first glimpse of [Chapter 12](12-The-Central-Limit-Theorem.md). From the picture,
$P(Z > 1.5)$ is the small triangle of area $\tfrac12 \cdot \tfrac12 \cdot \tfrac12 = \tfrac18$.

**Example 9 (exponentials make gamma laws).** Let $X, Y$ be independent $\text{Exp}(\lambda)$. For $z > 0$ the
integrand is non-zero only for $0 < x < z$:

$$
f_Z(z) = \int_0^z \lambda e^{-\lambda x}\,\lambda e^{-\lambda(z - x)}\,dx = \lambda^2 e^{-\lambda z}\int_0^z dx = \lambda^2 z\,e^{-\lambda z} .
$$

Notice that the exponentials combined into $e^{-\lambda z}$, independent of $x$: every way of splitting $z$ is equally
likely. By induction (exercise 5), the sum $S_n$ of $n$ independent $\text{Exp}(\lambda)$ variables has density

$$
f_{S_n}(z) = \frac{\lambda^n z^{n-1}}{(n - 1)!}\,e^{-\lambda z} \quad (z > 0),
$$

the **gamma law** with shape $n$ and rate $\lambda$ (also called the Erlang law). It is the waiting time for the $n$-th
event in a Poisson process ([Chapter 14](14-Poisson-Processes.md)), and it explains a neat identity: the $n$-th event
has not happened by time $t$ exactly when fewer than $n$ events have happened, so
$P(S_n > t) = \sum_{k=0}^{n-1} e^{-\lambda t}\frac{(\lambda t)^k}{k!}$.

**Example 10 (normals make normals).** Let $X, Y$ be independent $N(0, 1)$. Then

$$
f_Z(z) = \frac{1}{2\pi}\int_{-\infty}^{\infty} e^{-x^2/2}\,e^{-(z - x)^2/2}\,dx .
$$

Complete the square: $x^2 + (z - x)^2 = 2\left(x - \tfrac{z}{2}\right)^2 + \tfrac{z^2}{2}$. So

$$
f_Z(z) = \frac{1}{2\pi}e^{-z^2/4}\int_{-\infty}^{\infty} e^{-(x - z/2)^2}\,dx = \frac{1}{2\pi}e^{-z^2/4}\sqrt{\pi} = \frac{1}{\sqrt{2\pi \cdot 2}}\,e^{-z^2/(2 \cdot 2)},
$$

which is the $N(0, 2)$ density (using $\int e^{-u^2}du = \sqrt\pi$ from [Chapter 10](10-The-Normal-Distribution.md)).
This is the same result as Chapter 10 obtained with mgfs; the general case $N(\mu_1, \sigma_1^2) + N(\mu_2, \sigma_2^2)$
works the same way with messier algebra.

### Other combinations

Convolution handles sums. For other functions of two variables (products, ratios, the pair (sum, difference)) the tool
is the two-dimensional change of variables. If $(U, V) = T(X, Y)$ with $T$ one-to-one and smooth, with inverse
$(x, y) = S(u, v)$, then

$$
f_{U,V}(u, v) = f_{X,Y}\big(S(u, v)\big)\,\left| \det DS(u, v) \right|,
$$

where $\det DS$ is the Jacobian determinant of the inverse map. The proof is the multivariable change of variables
theorem for integrals ([MAT257 unit 10](../../uoft/MAT257Y1/unit10.md)), exactly as the one-dimensional formula of
[Chapter 9](09-Continuous-Random-Variables.md) came from substitution. Section 11.5 uses it.

## 11.5 The bivariate normal

*Level: advanced.*

### Building it

We want a pair $(X, Y)$ in which each is standard normal and the correlation is a chosen number $\rho$ in $(-1, 1)$.
Start from two independent standard normals $Z_1, Z_2$ and mix them:

$$
X = Z_1, \qquad Y = \rho Z_1 + \sqrt{1 - \rho^2}\,Z_2 .
$$

Then $X \sim N(0, 1)$; $Y$ is a sum of independent normals with variance $\rho^2 + (1 - \rho^2) = 1$, so
$Y \sim N(0, 1)$; and $\operatorname{Cov}(X, Y) = \rho \operatorname{Var}(Z_1) = \rho$. This construction is how
computers simulate correlated normals, and it is how the scatter plots above were made.

**The joint density.** The map $(z_1, z_2) \mapsto (x, y)$ is linear and invertible, with inverse $z_1 = x$,
$z_2 = (y - \rho x)/\sqrt{1 - \rho^2}$, whose Jacobian determinant is $1/\sqrt{1 - \rho^2}$. The density of
$(Z_1, Z_2)$ is $\frac{1}{2\pi}e^{-(z_1^2 + z_2^2)/2}$, and

$$
z_1^2 + z_2^2 = x^2 + \frac{(y - \rho x)^2}{1 - \rho^2} = \frac{x^2 - 2\rho xy + y^2}{1 - \rho^2} .
$$

So the change of variables formula gives the **standard bivariate normal density**

$$
f(x, y) = \frac{1}{2\pi\sqrt{1 - \rho^2}} \exp\left( -\frac{x^2 - 2\rho xy + y^2}{2(1 - \rho^2)} \right) .
$$

Its contour lines $x^2 - 2\rho xy + y^2 = c$ are ellipses, tilted along the line $y = x$ when $\rho > 0$ and along
$y = -x$ when $\rho < 0$: the shapes of the clouds in the scatter plots. The general bivariate normal, with means
$\mu_X, \mu_Y$ and standard deviations $\sigma_X, \sigma_Y$, is $(\mu_X + \sigma_X X, \mu_Y + \sigma_Y Y)$.

In matrix language: a random vector $\mathbf{X}$ in $\mathbb{R}^n$ is **multivariate normal** with mean vector
$\boldsymbol\mu$ and covariance matrix $\Sigma$ (assumed invertible) if its density is
$(2\pi)^{-n/2}(\det\Sigma)^{-1/2}\exp\left(-\tfrac12(\mathbf{x} - \boldsymbol\mu)^{\mathsf T}\Sigma^{-1}(\mathbf{x} - \boldsymbol\mu)\right)$.
For $n = 2$ and $\Sigma = \begin{pmatrix} 1 & \rho \\ \rho & 1 \end{pmatrix}$, $\det\Sigma = 1 - \rho^2$ and this is the formula
above. Every multivariate normal is $\boldsymbol\mu + A\mathbf{Z}$ with $\mathbf{Z}$ a vector of independent standard
normals and $AA^{\mathsf T} = \Sigma$.

### Conditional laws and regression to the mean

The construction gives the conditional law for free. Given $X = x$, we have $Y = \rho x + \sqrt{1 - \rho^2}\,Z_2$, and
$Z_2$ is independent of $X$. So

$$
Y \mid X = x \;\sim\; N\left(\rho x,\; 1 - \rho^2\right) .
$$

(You can check this against $f(x, y)/f_X(x)$ by completing the square.) Two facts are visible:

- The conditional mean $E[Y \mid X = x] = \rho x$ is a **straight line** in $x$, the **regression line**. In general units,
  $E[Y \mid X = x] = \mu_Y + \rho\frac{\sigma_Y}{\sigma_X}(x - \mu_X)$.
- The conditional variance $1 - \rho^2$ does not depend on $x$, and it is smaller than 1: knowing $X$ removes a fraction
  $\rho^2$ of the uncertainty about $Y$.

Since $|\rho| < 1$, the predicted $Y$ is *closer to its mean* (in standard units) than $x$ is to its mean. This is
**regression to the mean**. Francis Galton found it in 1886 when comparing the heights of parents and their adult
children: children of very tall parents were, on average, tall, but less extreme than their parents. He called it
"regression towards mediocrity". It is not a biological force; it is what any imperfect correlation produces.

**Example 11.** Scores on two tests are bivariate normal, each with mean 100 and standard deviation 15, with
correlation $\rho = 0.5$. A student scores 130 on the first test (2 standard deviations above the mean). The expected
second score is $100 + 0.5 \times 30 = 115$, and the conditional standard deviation is $15\sqrt{1 - 0.25} \approx 12.99$.
The chance the student again scores above 130 is

$$
P\left(Z > \frac{130 - 115}{12.99}\right) = 1 - \Phi(1.155) \approx 0.124 .
$$

So most top scorers on the first test do less well on the second, with no change in ability. A teacher who praises the
top scorers after the first test and sees them "get worse" might wrongly conclude that praise hurts. Regression to the
mean, mistaken for an effect of an intervention, is one of the commonest errors in reading data.

### Uncorrelated normals are independent, but only jointly

**Theorem.** If $(X, Y)$ is bivariate normal and $\rho = 0$, then $X$ and $Y$ are independent.

*Proof.* With $\rho = 0$ the density is $\frac{1}{2\pi}e^{-x^2/2}e^{-y^2/2} = \varphi(x)\varphi(y)$, which factorises
on the whole plane. $\square$

This is special to the joint normal family; Example 5 showed it fails in general. It also needs the pair to be
**jointly** normal: two normal variables can be uncorrelated and dependent.

**Example 12.** Let $X \sim N(0, 1)$ and let $S = \pm 1$ with chance $\tfrac12$ each, independent of $X$, and put
$Y = SX$. By symmetry of $\varphi$, $Y \sim N(0, 1)$. And $\operatorname{Cov}(X, Y) = E[SX^2] = E[S]E[X^2] = 0$. But
$|Y| = |X|$ always, so they are far from independent. The pair is not bivariate normal: $X + Y$ is 0 with chance
$\tfrac12$, which no normal variable can be.

## 11.6 Conditional expectation and the tower rule

*Level: advanced.*

### From a number to a random variable

In 11.1 we found conditional laws. Their means are **conditional expectations**:

$$
E[Y \mid X = x] = \sum_y y\,P(Y = y \mid X = x) \quad \text{or} \quad \int y\,f_{Y \mid X}(y \mid x)\,dy .
$$

This is a number for each $x$; call it $g(x)$. Now a key step: replace $x$ by the random $X$.

**Definition.** $E[Y \mid X]$ is the random variable $g(X)$, where $g(x) = E[Y \mid X = x]$.

So $E[Y \mid X]$ is "your best guess of $Y$ once you are told $X$", and since $X$ is random, so is the guess.

**Example 13 (dice).** For $X$ the first die and $Y$ the larger of two: given $Y = y$, the first die is $y$ with
chance $\frac{y}{2y - 1}$ and each of $1, \dots, y - 1$ with chance $\frac{1}{2y - 1}$. So

$$
E[X \mid Y = y] = \frac{1 + 2 + \dots + (y - 1) + y \cdot y}{2y - 1} = \frac{y(3y - 1)}{2(2y - 1)} .
$$

For $y = 1, \dots, 6$ this is $1, \tfrac53, \tfrac{12}{5}, \tfrac{22}{7}, \tfrac{35}{9}, \tfrac{51}{11}$. And
$E[X \mid Y] = \frac{Y(3Y - 1)}{2(2Y - 1)}$.

**Example 14 (the triangle).** In Example 2, given $X = x$, $Y$ is uniform on $(0, x)$, so $E[Y \mid X] = X/2$.

### The tower rule

**Theorem (tower rule, or law of total expectation).** If $E|Y| < \infty$, then

$$
E\big[E[Y \mid X]\big] = E[Y] .
$$

In words: average your best guesses over all the things you might be told, and you get the plain average.

*Proof (discrete case).* Using the definition of $g$ and then swapping the order of summation,

$$
E[g(X)] = \sum_x g(x)P(X = x) = \sum_x \sum_y y\,\frac{P(X = x, Y = y)}{P(X = x)}\,P(X = x) = \sum_y y \sum_x P(X = x, Y = y) = \sum_y y\,P(Y = y) = E[Y] .
$$

*Proof (continuous case).* The same, with $f_{Y \mid X}(y \mid x)f_X(x) = f(x, y)$:

$$
E[g(X)] = \int \left( \int y\,f_{Y \mid X}(y \mid x)\,dy \right) f_X(x)\,dx = \iint y\,f(x, y)\,dy\,dx = \int y\,f_Y(y)\,dy = E[Y] .
$$

The swap of sums or integrals is justified by $E|Y| < \infty$ (Fubini). $\square$

**Check with Example 13.** $\sum_y \frac{2y - 1}{36} \cdot \frac{y(3y - 1)}{2(2y - 1)} = \frac{1}{72}\sum_{y=1}^6 (3y^2 - y) = \frac{3 \cdot 91 - 21}{72} = \frac{252}{72} = \frac72 = E[X]$. Correct.

**Check with Example 14.** $E[Y] = E[X/2] = \tfrac12 \int_0^1 x \cdot 2x\,dx = \tfrac13$, and directly
$E[Y] = \int_0^1 y \cdot 2(1 - y)\,dy = \tfrac13$.

The tower rule is the continuous version of "conditioning on the first step", which in
[Chapter 3](03-Conditional-Probability-and-Independence.md) solved the gambler's ruin. Its usual use is: when $Y$ is
hard to average directly but easy once you know $X$, condition on $X$.

### Properties

Two properties are used constantly. Both follow from the definition.

1. **Taking out what is known.** $E[h(X)\,Y \mid X] = h(X)\,E[Y \mid X]$: once $X$ is known, $h(X)$ is a constant.
2. **Independence.** If $X$ and $Y$ are independent, $E[Y \mid X] = E[Y]$: being told $X$ changes nothing.

### Best prediction

**Theorem.** Among all functions $h$, the mean squared error $E[(Y - h(X))^2]$ is smallest for $h(X) = E[Y \mid X]$.

*Proof.* Write $g(X) = E[Y \mid X]$ and $Y - h(X) = (Y - g(X)) + (g(X) - h(X))$. Squaring,

$$
E\big[(Y - h(X))^2\big] = E\big[(Y - g(X))^2\big] + E\big[(g(X) - h(X))^2\big] + 2E\big[(Y - g(X))(g(X) - h(X))\big] .
$$

The cross term is 0: by the tower rule and property 1,
$E[(Y - g(X))k(X)] = E\big[k(X)\,E[Y - g(X) \mid X]\big] = E[k(X)(g(X) - g(X))] = 0$ with $k = g - h$. So the error is
$E[(Y - g(X))^2]$ plus a non-negative term that vanishes when $h = g$. $\square$

Geometrically, $E[Y \mid X]$ is the orthogonal projection of $Y$ onto the space of all functions of $X$, and the cross
term vanishing is "the error is perpendicular to that space". For the bivariate normal the projection happens to be a
straight line; for other laws it is a curve, and the best *straight-line* predictor (the regression line
$\mu_Y + \rho\frac{\sigma_Y}{\sigma_X}(x - \mu_X)$, which exists for any law) can be worse.

### The law of total variance

**Theorem.** $\operatorname{Var}(Y) = E\big[\operatorname{Var}(Y \mid X)\big] + \operatorname{Var}\big(E[Y \mid X]\big)$, where
$\operatorname{Var}(Y \mid X) = E[Y^2 \mid X] - (E[Y \mid X])^2$.

*Proof.* Write $g = E[Y \mid X]$. By the tower rule, $E[\operatorname{Var}(Y \mid X)] = E[Y^2] - E[g^2]$, and
$\operatorname{Var}(g) = E[g^2] - (E[g])^2 = E[g^2] - (E[Y])^2$. Adding, the $E[g^2]$ cancel and leave
$E[Y^2] - (E[Y])^2 = \operatorname{Var}(Y)$. $\square$

In words: total uncertainty = average uncertainty that remains after learning $X$ + uncertainty in the guess itself.

### Random sums

**Example 15.** A shop has $N$ customers in a day, with $E[N] = 20$ and $\operatorname{Var}(N) = 20$ (say $N$ is
Poisson). Customer $i$ spends $X_i$ dollars, the $X_i$ independent of each other and of $N$, each with mean 30 and
standard deviation 10. What are the mean and variance of the takings $T = X_1 + \dots + X_N$?

Condition on $N$: given $N = n$, $T$ is a sum of $n$ independent spends, so $E[T \mid N] = 30N$ and
$\operatorname{Var}(T \mid N) = 100N$. Then

$$
E[T] = E[30N] = 600, \qquad \operatorname{Var}(T) = E[100N] + \operatorname{Var}(30N) = 2000 + 900 \cdot 20 = 20000 .
$$

So the takings average 600 dollars with a standard deviation of about 141 dollars. In general, for a random number $N$
of independent copies of $X$, independent of $N$,

$$
E[T] = E[N]\,E[X], \qquad \operatorname{Var}(T) = E[N]\operatorname{Var}(X) + \operatorname{Var}(N)\,(E[X])^2 .
$$

The first formula is the simplest form of **Wald's identity**. Notice that most of the variance (18000 of 20000) here
comes from not knowing how many customers come, not from what each spends.

### Try it in Python

```python
import random, statistics

random.seed(3)
def day():
    # Poisson(20) customers, made from exponential gaps in one day of length 1
    n, t = 0, random.expovariate(20)
    while t < 1:
        n, t = n + 1, t + random.expovariate(20)
    return sum(random.gauss(30, 10) for _ in range(n))

takings = [day() for _ in range(100_000)]
print(statistics.mean(takings), statistics.pstdev(takings))   # about 600 and 141
```

## Check yourself

??? question "1. $P(X=0,Y=0)=0.1$, $P(X=0,Y=1)=0.3$, $P(X=1,Y=0)=0.2$, $P(X=1,Y=1)=0.4$. Find the marginals, $P(Y=1 \mid X=1)$, $\operatorname{Cov}(X,Y)$, and decide whether $X$ and $Y$ are independent."

    $P(X = 1) = 0.6$, $P(X = 0) = 0.4$, $P(Y = 1) = 0.7$, $P(Y = 0) = 0.3$. $P(Y = 1 \mid X = 1) = 0.4/0.6 = \tfrac23$.
    $E[XY] = P(X = 1, Y = 1) = 0.4$, so $\operatorname{Cov} = 0.4 - 0.6 \times 0.7 = -0.02$. Not independent: for
    example $P(X = 0, Y = 0) = 0.1 \ne 0.4 \times 0.3 = 0.12$.

??? question "2. For which $c$ is $f(x,y) = c(x + 2y)$ on the unit square a joint density? Find $f_X$."

    $\int_0^1\int_0^1 (x + 2y)\,dy\,dx = \tfrac12 + 1 = \tfrac32$, so $c = \tfrac23$. Then
    $f_X(x) = \tfrac23\int_0^1 (x + 2y)\,dy = \tfrac23(x + 1)$ for $0 \le x \le 1$ (check: area $\tfrac23 \cdot \tfrac32 = 1$).

??? question "3. $X$ and $Y$ are independent and uniform on $[0,1]$. Find $P(X + Y \le 1.5)$ and the density of $X+Y$ at 1.5."

    From the triangle density, $P(X + Y > 1.5) = \tfrac18$, so $P(X + Y \le 1.5) = \tfrac78$. The density at 1.5 is
    $2 - 1.5 = \tfrac12$.

??? question "4. $X$ and $Y$ are independent $\text{Exp}(1)$. Find $P(X + Y > 2)$."

    $X + Y$ has density $ze^{-z}$, so $P(X + Y > 2) = \int_2^\infty ze^{-z}\,dz = [-(z + 1)e^{-z}]_2^\infty = 3e^{-2} \approx 0.406$.
    (Equivalently, fewer than 2 events of a rate-1 Poisson process by time 2: $e^{-2}(1 + 2)$.)

??? question "5. Prove by induction that the sum of $n$ independent $\text{Exp}(\lambda)$ variables has density $\lambda^n z^{n-1}e^{-\lambda z}/(n-1)!$."

    True for $n = 1$. If $S_n$ has that density and $X \sim \text{Exp}(\lambda)$ is independent, then for $z > 0$
    $f_{S_{n+1}}(z) = \int_0^z \frac{\lambda^n x^{n-1}}{(n-1)!}e^{-\lambda x}\lambda e^{-\lambda(z - x)}\,dx = \frac{\lambda^{n+1}e^{-\lambda z}}{(n-1)!}\cdot\frac{z^n}{n} = \frac{\lambda^{n+1}z^n}{n!}e^{-\lambda z}$.

??? question "6. $X$ and $Y$ each have variance 1 and correlation $0.5$. Find $\operatorname{Var}(X - Y)$ and $\operatorname{Var}(X + Y)$."

    $\operatorname{Var}(X \pm Y) = 1 + 1 \pm 2(0.5)$, so $\operatorname{Var}(X - Y) = 1$ and $\operatorname{Var}(X + Y) = 3$.

??? question "7. Let $U$ and $V$ be independent uniforms on $[0,1]$, $m = \min(U,V)$ and $M = \max(U,V)$. Find $\operatorname{Cov}(m, M)$."

    $mM = UV$, so $E[mM] = E[U]E[V] = \tfrac14$. Also $E[M] = \tfrac23$ (density $2x$) and $E[m] = \tfrac13$ (density
    $2(1 - x)$). So $\operatorname{Cov}(m, M) = \tfrac14 - \tfrac29 = \tfrac{1}{36}$.

??? question "8. $(X, Y)$ is standard bivariate normal with $\rho = 0.6$. Find $E[Y \mid X = 2]$, $\operatorname{Var}(Y \mid X = 2)$ and $P(Y > 2 \mid X = 2)$."

    $Y \mid X = 2 \sim N(1.2, 1 - 0.36) = N(1.2, 0.64)$, with standard deviation 0.8. So
    $P(Y > 2 \mid X = 2) = P(Z > 0.8/0.8) = 1 - \Phi(1) \approx 0.159$.

??? question "9. $X$ is uniform on $(0,1)$, and given $X = x$, $Y$ is uniform on $(0, x)$. Find $E[Y]$, $\operatorname{Var}(Y)$ and the density of $Y$."

    $E[Y \mid X] = X/2$, so $E[Y] = \tfrac14$. $\operatorname{Var}(Y \mid X) = X^2/12$, so by total variance
    $\operatorname{Var}(Y) = E[X^2]/12 + \operatorname{Var}(X/2) = \tfrac{1}{36} + \tfrac{1}{48} = \tfrac{7}{144}$. The
    joint density is $\frac1x$ on $0 < y < x < 1$, so $f_Y(y) = \int_y^1 \frac{dx}{x} = -\ln y$ for $0 < y < 1$
    (check: $\int_0^1 -\ln y\,dy = 1$ and $\int_0^1 -y\ln y\,dy = \tfrac14$).

??? question "10. A hen lays $N \sim \text{Poisson}(\lambda)$ eggs; each hatches with chance $p$, independently. Find the mean and variance of the number $H$ that hatch."

    Given $N$, $H$ is binomial$(N, p)$: $E[H \mid N] = pN$ and $\operatorname{Var}(H \mid N) = Np(1 - p)$. So
    $E[H] = p\lambda$ and $\operatorname{Var}(H) = \lambda p(1 - p) + p^2\lambda = \lambda p$. Mean equal to variance is a
    hint, and in fact $H \sim \text{Poisson}(\lambda p)$ (this is the "thinning" of [Chapter 14](14-Poisson-Processes.md)).

??? question "11. (Harder.) For a standard bivariate normal with correlation $\rho$, show that $P(X > 0, Y > 0) = \tfrac14 + \frac{\arcsin \rho}{2\pi}$."

    Write $X = Z_1$, $Y = \rho Z_1 + \sqrt{1 - \rho^2}Z_2$ and use polar coordinates for $(Z_1, Z_2)$: the angle $\Theta$
    is uniform on $[0, 2\pi)$ because the density is round. Put $\rho = \sin\alpha$ with $\alpha \in [-\pi/2, \pi/2]$;
    then $Y = R(\sin\alpha\cos\Theta + \cos\alpha\sin\Theta) = R\sin(\Theta + \alpha)$ and $X = R\cos\Theta$. So
    $X > 0$ means $\Theta \in (-\pi/2, \pi/2)$ and $Y > 0$ means $\Theta + \alpha \in (0, \pi)$ (mod $2\pi$). The
    intersection is the arc $(-\alpha, \pi/2)$, of length $\pi/2 + \alpha$, so the probability is
    $\frac{\pi/2 + \alpha}{2\pi} = \tfrac14 + \frac{\arcsin\rho}{2\pi}$. For $\rho = 0.5$ this is $\tfrac14 + \tfrac{1}{12} = \tfrac13$.

??? question "12. (Harder.) Show that if $E[Y \mid X] = E[Y]$ then $\operatorname{Cov}(X, Y) = 0$, and give an example showing the converse fails."

    $E[XY] = E\big[X\,E[Y \mid X]\big] = E\big[X\,E[Y]\big] = E[X]E[Y]$, by the tower rule and "taking out what is
    known", so the covariance is 0. The converse fails: take $X$ uniform on $[-1, 1]$ and $Y = X^2$. Then
    $\operatorname{Cov}(X, Y) = 0$ (Example 5), yet $E[Y \mid X] = X^2$, which is not the constant $E[Y] = \tfrac13$.

## What you learned

- A joint law (a table or a density surface) contains everything; marginals come from summing or integrating out the
  other variable, conditionals from dividing by a marginal.
- Independence means the joint law factorises, which needs a rectangular support; then $E[XY] = E[X]E[Y]$.
- Correlation $\rho = \operatorname{Cov}/(\sigma_X\sigma_Y)$ lies in $[-1, 1]$, equals $\pm 1$ only for straight lines,
  measures only linear association, and does not by itself show causation; randomisation is what licenses a causal
  reading.
- Laws of sums are convolutions: dice give triangles, uniforms give tents, exponentials give gamma laws, Poissons and
  normals reproduce themselves.
- The bivariate normal: $Y \mid X = x \sim N(\rho x, 1 - \rho^2)$, the regression line, regression to the mean, and
  "uncorrelated implies independent" for jointly normal pairs only.
- $E[Y \mid X]$ is a random variable; the tower rule $E[E[Y \mid X]] = E[Y]$, best prediction and the law of total
  variance turn hard averages into easy ones.

**Next:** [Chapter 12](12-The-Central-Limit-Theorem.md), why sums of many independent variables are almost always
normal, with a full proof through moment generating functions.

## Further reading

- S. Ross, *A First Course in Probability*, 10th ed., 2019 (chapters 6 and 7).
- J. Pitman, *Probability*, 1993 (chapters 5 and 6, including the bivariate normal and regression to the mean).
- G. Grimmett and D. Stirzaker, *Probability and Random Processes*, 4th ed., 2020 (chapter 4 on joint densities and conditional expectation).
- D. Williams, *Probability with Martingales*, 1991 (chapter 9: conditional expectation done in full generality).
- F. Galton, "Regression towards Mediocrity in Hereditary Stature", *Journal of the Anthropological Institute* 15, 1886.
- J. Pearl and D. Mackenzie, *The Book of Why*, 2018 (a non-technical account of correlation and causation).
- On this site: the Topics lessons on [two-way tables](../../topics/probability/level-6/01-given-two-way-tables.md) and
  [independence](../../topics/probability/level-6/02-independence-properly.md); MAT257 guides on
  [the integral in $\mathbb{R}^n$](../../uoft/MAT257Y1/unit09.md) and
  [change of variables](../../uoft/MAT257Y1/unit10.md); MAT240 on [determinants](../../uoft/MAT240H1/unit08.md)
  and MAT247 on [inner product spaces](../../uoft/MAT247H1/unit01.md) (the geometry behind Cauchy-Schwarz and
  projections).
