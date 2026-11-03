# 8. Generating functions in probability

*A distribution on the whole numbers is an infinite list $p_0, p_1, p_2, \dots$. Lists are awkward to add, multiply or
take limits of. This chapter packs the whole list into a single function, $G(s) = p_0 + p_1 s + p_2 s^2 + \cdots$, and
shows that hard operations on random variables become easy operations on functions: adding independent variables
multiplies their functions, a random number of random terms composes them, means and variances are derivatives. With
this tool you will prove that one family of loaded dice gives the same sums as ordinary dice, that no loaded pair can
make the sum uniform, when a family name or a chain reaction dies out, and whether a random walker on a line, in a
plane or in space is sure to come home.*

!!! abstract "In this chapter"
    **You will learn:**

    - the probability generating function (pgf) of a whole-number random variable, and how to read off probabilities, the mean and the variance
    - why the pgf of a sum of independent variables is the product of their pgfs, with applications to dice (Sicherman dice, the impossible uniform sum)
    - the pgf of a random sum, and Wald's identity
    - branching processes: the extinction probability is the smallest fixed point of the offspring pgf, with full proof, and the rule "extinction is certain if and only if the mean number of children is at most 1"
    - moment generating functions, moments as derivatives, and when the mgf exists
    - the probability that a simple random walk returns to its start (proof by generating functions), and Pólya's theorem that walks in one and two dimensions return but in three they may not

    **You need:** [Chapter 5](05-Discrete-Random-Variables.md) and [Chapter 6](06-Expectation-and-Variance.md).
    Power series and their derivatives are used freely from 8.1 on (the MAT137 guide to
    [power series](../../uoft/MAT137/unit14.md) has what is needed); [Combinatorics, Chapter 7](../combinatorics/07-Generating-Functions.md)
    treats generating functions for counting, and this chapter is its probabilistic twin.

    **Levels:** 8.1 and 8.2 are intermediate; 8.3 and 8.4 are advanced; 8.5 is advanced, with an expert statement at
    the end.

## 8.1 Probability generating functions

Throughout this chapter $X$ takes values in $\{0, 1, 2, \dots\}$ and $p_k = P(X = k)$.

**Definition.** The **probability generating function** (pgf) of $X$ is

$$
G_X(s) = E\big[s^X\big] = \sum_{k=0}^{\infty} p_k s^k,
$$

defined at least for $-1 \le s \le 1$.

Why at least there? Because $\sum_k |p_k s^k| \le \sum_k p_k = 1$ when $|s| \le 1$, so the series converges absolutely.
The two expressions agree by Theorem 6.2 with $g(x) = s^x$. The variable $s$ has no meaning of its own; it is a
"clothesline" on which the probabilities are hung, as in [Combinatorics, Chapter 7](../combinatorics/07-Generating-Functions.md).

**The pgfs of the families.** Each is a short computation with a known series; $q = 1 - p$ throughout.

| distribution | $G(s)$ | how |
|---|---|---|
| Bernoulli($p$) | $q + ps$ | two terms |
| Binomial($n, p$) | $(q + ps)^n$ | binomial theorem |
| Geometric($p$) on $\{1, 2, \dots\}$ | $\dfrac{ps}{1 - qs}$ | geometric series, for $\lvert s \rvert < 1/q$ |
| Poisson($\lambda$) | $e^{\lambda(s - 1)}$ | $\sum e^{-\lambda}(\lambda s)^k/k! = e^{-\lambda}e^{\lambda s}$ |
| fair die | $\dfrac{s + s^2 + \dots + s^6}{6}$ | six terms |

For instance, for the geometric, $\sum_{k \ge 1} q^{k-1}p\,s^k = ps\sum_{j \ge 0}(qs)^j = \frac{ps}{1 - qs}$.

**What a pgf knows.** Everything about the distribution.

**Theorem 8.1.** (a) $G_X(1) = 1$. (b) $p_k = G_X^{(k)}(0)/k!$, so the pgf determines the distribution: two variables
with the same pgf on $[-1, 1]$ (or even on any small interval $[0, \varepsilon)$) have the same distribution.
(c) $E[X] = G_X'(1)$ and $E[X(X-1)] = G_X''(1)$, where these are the limits of $G'(s)$ and $G''(s)$ as $s$ increases to
1, finite or infinite. Hence, when the mean is finite,

$$
\operatorname{Var}(X) = G''(1) + G'(1) - G'(1)^2.
$$

*Proof.* (a) $\sum p_k = 1$. (b) A power series can be differentiated term by term inside its interval of convergence
(a theorem of analysis), so $G^{(k)}(0) = k!\,p_k$; and the values on $[0, \varepsilon)$ determine all the derivatives
at 0, by taking one-sided limits of difference quotients. (c) For $0 \le s < 1$, term-by-term differentiation gives
$G'(s) = \sum_{k \ge 1} k p_k s^{k-1}$. Every term is nonnegative and increases with $s$, so $G'(s)$ increases as
$s \uparrow 1$, and it never exceeds $\sum k p_k = E[X]$. Conversely, for any fixed $N$,
$G'(s) \ge \sum_{k=1}^{N} k p_k s^{k-1} \to \sum_{k=1}^N kp_k$ as $s \uparrow 1$; letting $N \to \infty$, the limit of
$G'(s)$ is at least $E[X]$. So $\lim_{s \uparrow 1}G'(s) = E[X]$. The same argument with $k(k-1)$ gives $G''(1)$, and
the variance formula is the one from 6.3: $\operatorname{Var}(X) = E[X(X-1)] + E[X] - (E[X])^2$. $\square$

**Example 8.1 (Poisson).** $G(s) = e^{\lambda(s-1)}$, $G'(s) = \lambda e^{\lambda(s-1)}$, $G''(s) = \lambda^2 e^{\lambda(s-1)}$.
At $s = 1$: mean $\lambda$, factorial moment $\lambda^2$, variance $\lambda^2 + \lambda - \lambda^2 = \lambda$. Compare the
series manipulations of Chapter 6.

**Example 8.2 (geometric).** $G(s) = ps(1 - qs)^{-1}$. Then $G'(s) = p(1 - qs)^{-1} + pqs(1-qs)^{-2} = p(1 - qs)^{-2}$,
so $G'(1) = p/p^2 = 1/p$. And $G''(s) = 2pq(1 - qs)^{-3}$, so $G''(1) = 2q/p^2$ and
$\operatorname{Var} = 2q/p^2 + 1/p - 1/p^2 = q/p^2$.

## 8.2 Sums of independent variables

The real power of the pgf is this.

**Theorem 8.2.** If $X$ and $Y$ are independent, then $G_{X+Y}(s) = G_X(s)\,G_Y(s)$. More generally the pgf of a sum of
independent variables is the product of their pgfs.

*Proof.* $s^{X+Y} = s^X s^Y$, and $s^X$, $s^Y$ are independent (functions of independent variables), so by Theorem 6.6,
$E[s^X s^Y] = E[s^X]\,E[s^Y]$. $\square$

Multiplying power series is exactly convolution of their coefficient lists, so this is Theorem 5.12 in disguise; the
gain is that products are easy to compute, to factor, and to take to powers.

**Two-line proofs.** With Theorem 8.1(b) (a pgf determines the distribution) we can now identify sums at a glance.

- $n$ independent Bernoulli($p$): $(q + ps)^n$, the binomial pgf. So their sum is binomial.
- $\text{Bin}(m, p) + \text{Bin}(n, p)$, independent: $(q + ps)^m(q + ps)^n = (q + ps)^{m+n}$.
- $\text{Poisson}(\lambda) + \text{Poisson}(\mu)$, independent: $e^{\lambda(s-1)}e^{\mu(s-1)} = e^{(\lambda + \mu)(s - 1)}$.
- $r$ independent Geometric($p$): $\left(\frac{ps}{1 - qs}\right)^r$. Expanding $(1 - qs)^{-r}$ by the binomial series
  for a negative power, $(1 - x)^{-r} = \sum_{j \ge 0}\binom{r + j - 1}{j}x^j$, gives the coefficient of $s^k$ as
  $\binom{k-1}{k-r}p^r q^{k-r} = \binom{k-1}{r-1}p^rq^{k-r}$, the negative binomial of Theorem 5.6. This is where the
  "negative" in the name comes from, and since the pgf at $s = 1$ is $1^r = 1$, it also proves the negative binomial
  probabilities add to 1.

**Example 8.3 (dice).** Two fair dice: the sum has pgf $\left(\frac{s + \dots + s^6}{6}\right)^2$. Expanding,
$(s + \dots + s^6)^2 = s^2 + 2s^3 + 3s^4 + 4s^5 + 5s^6 + 6s^7 + 5s^8 + 4s^9 + 3s^{10} + 2s^{11} + s^{12}$, the familiar
counts from Example 5.1. Three dice: the coefficient of $s^{10}$ in $(s + \dots + s^6)^3$ is 27, so
$P(\text{sum} = 10) = 27/216 = 1/8$.

**Example 8.4 (Sicherman dice).** Is there another pair of six-sided dice, with positive whole numbers on the faces,
whose sum has exactly the same distribution as two ordinary dice? Factor the ordinary die's polynomial over the
integers:

$$
s + s^2 + s^3 + s^4 + s^5 + s^6 = s(1 + s)(1 + s + s^2)(1 - s + s^2).
$$

(Check by multiplying out, or note that it is $s\frac{1 - s^6}{1 - s}$ and $1 - s^6 = (1 - s)(1 + s)(1 + s + s^2)(1 - s + s^2)$.)
The pair's polynomial is the square: two copies of each of $s$, $1 + s$, $1 + s + s^2$, $1 - s + s^2$. A die's
polynomial $D(s) = \sum_{\text{faces}} s^{\text{face}}$ must have $D(1) = 6$ faces and $D(0) = 0$ (no face 0), so each
die needs one factor $s$, one $1 + s$ (value 2 at $s = 1$) and one $1 + s + s^2$ (value 3), while $1 - s + s^2$
(value 1) can go either way. Giving both copies of $1 - s + s^2$ to one die gives

$$
s(1 + s)(1 + s + s^2) = s + 2s^2 + 2s^3 + s^4, \qquad s(1+s)(1+s+s^2)(1-s+s^2)^2 = s + s^3 + s^4 + s^5 + s^6 + s^8.
$$

So the dice with faces $1, 2, 2, 3, 3, 4$ and $1, 3, 4, 5, 6, 8$ give exactly the same sums, with exactly the same
probabilities, as an ordinary pair; and the argument shows this is the only other pair. They are named after George
Sicherman, who found them; Martin Gardner described them in *Scientific American* in 1978.

**Example 8.5 (no loaded dice make a uniform sum).** Can two dice be loaded (each separately, with any probabilities on
faces $1, \dots, 6$) so that their sum is equally likely to be each of $2, 3, \dots, 12$?

Suppose so, with face probabilities $a_1, \dots, a_6$ and $b_1, \dots, b_6$. Then

$$
\Big(\sum_{i=1}^6 a_i s^{i-1}\Big)\Big(\sum_{j=1}^6 b_j s^{j-1}\Big) = \frac{1 + s + s^2 + \dots + s^{10}}{11}.
$$

Comparing the constant and top coefficients, $a_1b_1 = 1/11$ and $a_6b_6 = 1/11$, so $a_6 \ne 0$ and $b_6 \ne 0$: each
factor on the left is a polynomial of degree exactly 5 with real coefficients. A real polynomial of odd degree has a
real root (it takes both signs, by the intermediate value theorem). But the right side has no real root:
$1 + s + \dots + s^{10} = \frac{s^{11} - 1}{s - 1}$ for $s \ne 1$, which vanishes only at 11th roots of unity other
than 1, none of them real; and at $s = 1$ it equals 11. Contradiction. So no such dice exist. $\square$

### Random sums

Often the *number* of terms is itself random: the number of customers $N$ in a day, each spending $X_i$; the number of
eggs, each hatching or not.

**Theorem 8.3.** Let $N, X_1, X_2, \dots$ be independent whole-number random variables, with the $X_i$ identically
distributed with pgf $G_X$, and let $S = X_1 + \dots + X_N$ (with $S = 0$ if $N = 0$). Then

$$
G_S(s) = G_N\big(G_X(s)\big).
$$

Consequently (**Wald's identity**) $E[S] = E[N]\,E[X]$ when both are finite.

*Proof.* Condition on $N$ (the law of total probability, in its expectation form, is just a regrouping of the sum
defining $E[s^S]$):

$$
E[s^S] = \sum_{n \ge 0} P(N = n)\,E\big[s^{X_1 + \dots + X_n}\big] = \sum_{n \ge 0}P(N = n)\,G_X(s)^n = G_N\big(G_X(s)\big).
$$

The middle step uses that $N$ is independent of the $X_i$, and Theorem 8.2. For the mean, differentiate with the chain
rule: $G_S'(s) = G_N'(G_X(s))\,G_X'(s)$, and let $s \uparrow 1$, where $G_X(s) \uparrow 1$. $\square$

**Example 8.6 (thinning again).** $N \sim \text{Poisson}(\lambda)$ eggs, each hatching with probability $p$: $X_i \sim
\text{Bernoulli}(p)$. Then $G_S(s) = e^{\lambda(q + ps - 1)} = e^{\lambda p(s - 1)}$, the Poisson($\lambda p$) pgf.
Example 5.15 needed a page of sums; here it is one line.

## 8.3 Branching processes

*Level: advanced.*

In 1873 Francis Galton posed a question in the *Educational Times*: why do so many family surnames die out, and what is
the chance that a given surname eventually disappears? The Reverend Henry William Watson answered in 1874 with the
method of this section, though he drew a wrong conclusion from it (he concluded, in effect, that every surname must die
out). Unknown to both, Irénée-Jules Bienaymé had stated the correct answer in 1845; his note was rediscovered by C. C.
Heyde and E. Seneta in 1972. The same mathematics describes a nuclear chain reaction (each neutron causes a random
number of new fissions), an epidemic in its early stages (each case infects a random number of others) and a
population of cells.

**The model.** Start with one individual: $Z_0 = 1$. Each individual, independently of all others, has a random number
of children with a fixed **offspring distribution** $p_0, p_1, p_2, \dots$, pgf $G(s) = \sum p_k s^k$ and mean
$\mu = G'(1)$. Generation $n + 1$ consists of the children of generation $n$:

$$
Z_{n+1} = X^{(n)}_1 + X^{(n)}_2 + \dots + X^{(n)}_{Z_n},
$$

where the $X^{(n)}_i$ are independent with pgf $G$, and independent of $Z_n$. This is a **Galton-Watson process**.

**Theorem 8.4.** Let $G_n$ be the pgf of $Z_n$. Then $G_n = G \circ G \circ \dots \circ G$ ($n$ times), and
$E[Z_n] = \mu^n$.

*Proof.* $Z_{n+1}$ is a random sum of $Z_n$ independent copies of the offspring variable, so by Theorem 8.3,
$G_{n+1}(s) = G_n(G(s))$. With $G_1 = G$, induction gives the $n$-fold composition. For the mean, Wald's identity
gives $E[Z_{n+1}] = E[Z_n]\,\mu$, so $E[Z_n] = \mu^n$. $\square$

So the population grows on average when $\mu > 1$ and shrinks on average when $\mu < 1$. But averages hide the main
question. **Extinction** is the event that $Z_n = 0$ for some $n$ (once 0, always 0). Its probability $\eta$ ("eta")
is what Galton asked for.

**Theorem 8.5 (extinction).** (a) $\eta$ is the smallest nonnegative solution of the equation $G(s) = s$.
(b) Suppose $p_1 \ne 1$ (the trivial case where everyone has exactly one child is excluded). Then $\eta = 1$ if
$\mu \le 1$, and $\eta < 1$ if $\mu > 1$.

*Proof.* (a) Let $\eta_n = P(Z_n = 0) = G_n(0)$. Since $\{Z_n = 0\} \subseteq \{Z_{n+1} = 0\}$, the $\eta_n$ increase,
and the events increase to the extinction event, so $\eta_n \to \eta$ by continuity of probability (Lemma 5.10). Now
$G_{n+1} = G \circ G_n$, so

$$
\eta_{n+1} = G(\eta_n).
$$

$G$ is continuous on $[0, 1]$ (a power series with nonnegative coefficients and $G(1) = 1$ converges uniformly there),
so letting $n \to \infty$ gives $\eta = G(\eta)$: $\eta$ is a fixed point. It is the *smallest* nonnegative one: let
$r \ge 0$ be any solution of $G(r) = r$. Because its coefficients are nonnegative, $G$ is nondecreasing on
$[0, \infty)$ wherever its series converges. Then $\eta_0 = 0 \le r$, and if $\eta_n \le r$ then
$\eta_{n+1} = G(\eta_n) \le G(r) = r$. So $\eta_n \le r$ for all $n$, and $\eta \le r$.

(b) Since $G(1) = 1$, $s = 1$ is always a fixed point, so $\eta \le 1$; the question is whether there is a fixed point
in $[0, 1)$. On $[0, 1)$, $G''(s) = \sum_{k \ge 2}k(k-1)p_k s^{k-2} \ge 0$, so $G$ is **convex**: its graph bends
upward.

*Case $\mu \le 1$.* If $p_k = 0$ for every $k \ge 2$, then $G(s) = p_0 + p_1 s$ with $p_1 < 1$ and $G'(u) = p_1 < 1$. Otherwise $G'$ is strictly
increasing on $[0, 1)$, so $G'(u) < \lim_{v \uparrow 1}G'(v) = \mu \le 1$ for $u < 1$. Either way $G'(u) < 1$ on $[0, 1)$, and for
$s < 1$ the mean value theorem gives $1 - G(s) = G(1) - G(s) = G'(u)(1 - s) < 1 - s$ for some $u \in (s, 1)$, that is,
$G(s) > s$. So there is no fixed point in $[0, 1)$, and $\eta = 1$.

*Case $\mu > 1$.* Let $h(s) = G(s) - s$. Then $h(1) = 0$ and the left derivative of $h$ at 1 is $\mu - 1 > 0$, so
$h(s) < 0$ for $s$ slightly less than 1. And $h(0) = p_0 \ge 0$. By the intermediate value theorem $h$ has a zero in
$[0, 1)$, so the smallest fixed point $\eta$ is less than 1. $\square$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 230" role="img" aria-label="Graph on the unit square of G of s equals one quarter plus s over 4 plus s squared over 2, a convex curve starting at height one quarter, together with the diagonal line y equals s. They cross at s equals one half and at s equals 1. A staircase starting at 0 climbs between the curve and the diagonal towards the crossing at one half: the extinction probabilities after 1, 2, 3 generations">
<line x1="60" y1="200" x2="370" y2="200" stroke="currentColor" stroke-width="1.5"/>
<line x1="60" y1="200" x2="60" y2="12" stroke="currentColor" stroke-width="1.5"/>
<line x1="60" y1="200" x2="360" y2="20" stroke="#9cc9ea" stroke-width="2"/>
<polyline fill="none" stroke="#eea66f" stroke-width="3" points="60.0,155.0 67.5,153.8 75.0,152.5 82.5,151.1 90.0,149.6 97.5,148.0 105.0,146.2 112.5,144.4 120.0,142.4 127.5,140.3 135.0,138.1 142.5,135.8 150.0,133.4 157.5,130.9 165.0,128.2 172.5,125.5 180.0,122.6 187.5,119.6 195.0,116.5 202.5,113.3 210.0,110.0 217.5,106.6 225.0,103.0 232.5,99.4 240.0,95.6 247.5,91.7 255.0,87.7 262.5,83.6 270.0,79.4 277.5,75.1 285.0,70.6 292.5,66.1 300.0,61.4 307.5,56.6 315.0,51.7 322.5,46.7 330.0,41.6 337.5,36.4 345.0,31.0 352.5,25.6 360.0,20.0"/>
<path d="M60.0,200.0 L60.0,155.0 L135.0,155.0 L135.0,138.1 L163.1,138.1 L163.1,128.9 L178.5,128.9 L178.5,123.2 L188.0,123.2 L188.0,119.4 L194.3,119.4 L194.3,116.8 L198.7,116.8" fill="none" stroke="currentColor" stroke-width="1.2"/>
<circle cx="210" cy="110" r="5" fill="#7ccf9a" stroke="currentColor"/>
<circle cx="360" cy="20" r="5" fill="#7ccf9a" stroke="currentColor"/>
<line x1="210" y1="200" x2="210" y2="110" stroke="currentColor" stroke-dasharray="3 3" stroke-opacity="0.6"/>
<text x="60" y="216" text-anchor="middle" font-size="11" fill="currentColor">0</text>
<text x="210" y="216" text-anchor="middle" font-size="11" fill="currentColor">1/2</text>
<text x="360" y="216" text-anchor="middle" font-size="11" fill="currentColor">1</text>
<text x="52" y="159" text-anchor="end" font-size="11" fill="currentColor">1/4</text>
<text x="52" y="24" text-anchor="end" font-size="11" fill="currentColor">1</text>
<text x="300" y="80" font-size="12" fill="currentColor">G(s)</text>
<text x="300" y="120" font-size="12" fill="currentColor">y = s</text>
<text x="218" y="104" font-size="11" fill="currentColor">η</text>
</svg>
</div>

The picture shows the proof at work for the offspring distribution $p_0 = \tfrac14$, $p_1 = \tfrac14$, $p_2 = \tfrac12$:
$G(s) = \tfrac14 + \tfrac14 s + \tfrac12 s^2$, $\mu = \tfrac14 + 1 = \tfrac54$. The staircase is the iteration
$\eta_{n+1} = G(\eta_n)$ starting from $\eta_0 = 0$; it climbs to the first crossing of the curve with the diagonal.
Solving $G(s) = s$: $2s^2 - 3s + 1 = 0$, so $s = \tfrac12$ or $s = 1$, and $\eta = \tfrac12$. The iterates are
$\eta_1 = 0.25$, $\eta_2 = 0.34375$, $\eta_3 \approx 0.395$, $\eta_4 \approx 0.427$, ..., creeping up to $0.5$.
Although each individual has on average more than one child, the line dies out with probability exactly one half:
early bad luck, when there are only a few individuals, is often fatal.

**Example 8.7 (chain reactions and epidemics).** If each individual has a Poisson($\lambda$) number of children, then
$G(s) = e^{\lambda(s-1)}$ and $\eta$ solves $e^{\lambda(\eta - 1)} = \eta$. For $\lambda \le 1$, $\eta = 1$. For
$\lambda = 1.5$, solving numerically gives $\eta \approx 0.417$: even a "supercritical" outbreak started by one case
fizzles out by chance more than 40% of the time. This is the simplest model behind the epidemiologists' basic
reproduction number $R_0$, and behind the physicists' "critical mass" (the mass at which $\mu$ passes 1). Real
epidemics and reactors need more detailed models; the threshold at mean 1 survives in all of them.

**Example 8.8 (surnames).** Alfred Lotka (1931) fitted the distribution of the number of sons of American men, from
the 1920 census, by $p_0 = 0.4825$ and $p_k = 0.2126\,(0.5893)^{k-1}$ for $k \ge 1$ (the rounded values add to 1.0002).
Then $G(s) = 0.4825 + \frac{0.2126\,s}{1 - 0.5893\,s}$, $\mu \approx 1.26$, and solving $G(s) = s$ gives
$\eta \approx 0.819$: on this model, a single male line has about an 82% chance of eventually ending, even in a growing
population.

**The critical case.** When $\mu = 1$, $E[Z_n] = 1$ for every $n$, yet extinction is certain. There is no
contradiction: $P(Z_n > 0) \to 0$, and the rare survivors are large, $E[Z_n \mid Z_n > 0] = 1/P(Z_n > 0) \to \infty$.
A mean can stay fixed while almost all the probability drains away to 0.

## 8.4 Moment generating functions

*Level: advanced.*

The pgf needs whole-number values. For a variable that may be negative or fractional, use $e^{t}$ instead of $s$.

**Definition.** The **moment generating function** (mgf) of a random variable $X$ is

$$
M_X(t) = E\big[e^{tX}\big],
$$

for those real $t$ for which the expectation is finite. It is always finite at $t = 0$, where it equals 1. For a
whole-number variable, $M_X(t) = G_X(e^t)$.

The name comes from the following theorem: when $M$ is finite near 0, it is a power series whose coefficients are the
**moments** $E[X^k]$.

**Theorem 8.6.** Suppose $M_X(t) < \infty$ for all $t$ in an interval $(-h, h)$ with $h > 0$. Then every moment
$E|X|^k$ is finite, and for $|t| < h$,

$$
M_X(t) = \sum_{k=0}^{\infty}\frac{E[X^k]}{k!}t^k, \qquad \text{so} \qquad E[X^k] = M_X^{(k)}(0).
$$

*Proof* (for discrete $X$; the general case is identical once expectation is defined as an integral in Chapter 17).
Fix $t$ with $0 < |t| < h$. Since $e^{|tx|} \le e^{tx} + e^{-tx}$, we get $E[e^{|tX|}] \le M(t) + M(-t) < \infty$. Now
$e^{|tX|} = \sum_k |tX|^k/k!$, a sum of nonnegative terms, so (swapping two sums of nonnegative terms)
$\sum_k E|tX|^k/k! = E[e^{|tX|}] < \infty$. In particular each $E|X|^k$ is finite. And because the double sum
$\sum_{x}\sum_k \frac{(tx)^k}{k!}P(X = x)$ converges absolutely, its order may be swapped:
$M(t) = \sum_x e^{tx}P(X = x) = \sum_k \frac{t^k}{k!}\sum_x x^k P(X = x) = \sum_k \frac{t^k}{k!}E[X^k]$. A power series
can be differentiated term by term inside its interval of convergence, and its $k$-th derivative at 0 is $k!$ times its
$k$-th coefficient. $\square$

**Examples.**

- Bernoulli($p$): $M(t) = q + pe^t$, so every moment $E[X^k] = M^{(k)}(0) = p$ (indeed $X^k = X$).
- Binomial($n, p$): $M(t) = (q + pe^t)^n$. $M'(t) = npe^t(q + pe^t)^{n-1}$, so $E[X] = np$.
- Poisson($\lambda$): $M(t) = \exp\big(\lambda(e^t - 1)\big)$, finite for every $t$. Differentiating three times and
  setting $t = 0$: $E[X] = \lambda$, $E[X^2] = \lambda^2 + \lambda$, $E[X^3] = \lambda^3 + 3\lambda^2 + \lambda$.
- Geometric($p$): $M(t) = \frac{pe^t}{1 - qe^t}$, finite only for $t < -\ln q$. Finite on an interval around 0 is all
  Theorem 8.6 needs.

**Sums.** If $X$ and $Y$ are independent then $M_{X+Y}(t) = M_X(t)M_Y(t)$, with the same proof as Theorem 8.2. This
is what made Chernoff's method (7.4) work.

**Uniqueness.** The mgf, when it is finite near 0, determines the distribution.

**Theorem 8.7 (uniqueness; statement).** If $M_X(t) = M_Y(t) < \infty$ for all $t$ in some interval $(-h, h)$, $h > 0$,
then $X$ and $Y$ have the same distribution.

For whole-number variables this follows from Theorem 8.1(b), since $G_X(s) = M_X(\ln s)$ is then known for $s$ in an
interval $(e^{-h}, 1]$, which determines a power series. In general the proof goes through the **characteristic
function** $E[e^{itX}]$ and Fourier inversion; see Billingsley, *Probability and Measure*, Section 30. Chapter 12 uses
Theorem 8.7, together with a continuity theorem, to prove the central limit theorem.

**When the mgf fails.** Many distributions have no mgf near 0. Let $P(X = k) = c/k^3$ for $k = 1, 2, \dots$, where
$c = 1/\sum_k k^{-3}$. The mean is finite ($\sum c/k^2 < \infty$) but for every $t > 0$, $e^{tk}/k^3 \to \infty$, so
$M(t) = \infty$. Such **heavy-tailed** distributions are the ones for which Chernoff bounds are unavailable, and they
are common in practice (file sizes, city sizes, insurance claims). The characteristic function exists for every
distribution, which is why advanced work uses it instead. A last warning: knowing *all the moments* $E[X^k]$ does not
always determine a distribution when the mgf is infinite; a classical example (the lognormal) is in Billingsley,
*Probability and Measure*, Section 30. Theorem 8.7 avoids the problem by asking for a finite mgf.

## 8.5 Random walks on a line

*Level: advanced.*

A walker starts at 0 on the integer line and at each step moves up 1 with probability $p$ or down 1 with probability
$q = 1 - p$, independently. Its position after $n$ steps is $S_n = X_1 + \dots + X_n$ with $X_i = \pm 1$. This is the
**simple random walk**; for $p = 1/2$ it is **symmetric**. Does the walker ever come back to 0?

**Two sequences.** Let $u_n = P(S_n = 0)$, the chance of being at 0 at time $n$ (with $u_0 = 1$), and let $f_n$ be the
chance that the *first* return to 0 happens at time $n$ (with $f_0 = 0$). Both vanish for odd $n$, since you need as
many up-steps as down-steps. Being at 0 at time $2m$ means $m$ up-steps among $2m$, so

$$
u_{2m} = \binom{2m}{m}p^m q^m.
$$

The first-return probabilities are harder to count directly, and the probability of *ever* returning is
$f = \sum_n f_n$. Generating functions link the two.

**Lemma 8.8 (renewal equation).** For $n \ge 1$, $u_n = \sum_{k=1}^{n} f_k\, u_{n-k}$. Consequently, with
$U(s) = \sum_{n \ge 0}u_n s^n$ and $F(s) = \sum_{n \ge 1}f_n s^n$ for $0 \le s < 1$,

$$
U(s) = 1 + F(s)\,U(s), \qquad \text{that is,} \qquad F(s) = 1 - \frac{1}{U(s)}.
$$

*Proof.* If $S_n = 0$ with $n \ge 1$, there is a first time $k \in \{1, \dots, n\}$ at which the walk is at 0. So
$\{S_n = 0\}$ is the disjoint union over $k$ of the events "the first return is at time $k$, and $S_n - S_k = 0$". The
first part depends only on $X_1, \dots, X_k$, and the second only on $X_{k+1}, \dots, X_n$, which are independent of
the first $k$ steps and form a walk of $n - k$ steps. So the $k$-th event has probability $f_k\,u_{n-k}$. Summing over
$k$ gives the equation. Multiply by $s^n$ and sum over $n \ge 1$: the right side is the coefficient list of the product
$F(s)U(s)$ (a convolution), and the left side is $U(s) - u_0 = U(s) - 1$. $\square$

Now compute $U$. We need one identity about central binomial coefficients.

**Lemma 8.9.** For $|x| < 1/4$, $\displaystyle\sum_{m \ge 0}\binom{2m}{m}x^m = \frac{1}{\sqrt{1 - 4x}}$.

*Proof.* Newton's binomial series $(1 + y)^{\alpha} = \sum_{m \ge 0}\binom{\alpha}{m}y^m$ holds for $|y| < 1$ and any
real $\alpha$, where $\binom{\alpha}{m} = \frac{\alpha(\alpha - 1)\cdots(\alpha - m + 1)}{m!}$ (see the MAT137 guide to
[power series](../../uoft/MAT137/unit14.md)). With $\alpha = -\tfrac12$ and $y = -4x$:

$$
\binom{-1/2}{m}(-4)^m = \frac{(-\tfrac12)(-\tfrac32)\cdots(-\tfrac{2m-1}{2})}{m!}(-4)^m = \frac{1 \cdot 3 \cdots (2m - 1)}{2^m\,m!}\,4^m = \frac{(2m)!}{2^m m!}\cdot\frac{2^m}{m!} = \binom{2m}{m},
$$

using $1 \cdot 3 \cdots (2m-1) = \frac{(2m)!}{2 \cdot 4 \cdots 2m} = \frac{(2m)!}{2^m m!}$. $\square$

**Theorem 8.10.** For the simple random walk with up-probability $p$,

$$
F(s) = 1 - \sqrt{1 - 4pq\,s^2}, \qquad \text{and} \qquad P(\text{ever return to } 0) = 1 - |p - q|.
$$

In particular the symmetric walk returns to 0 with probability 1, and every other simple walk has a positive chance
of never returning.

*Proof.* By Lemma 8.9 with $x = pqs^2$ (which is less than 1/4 for $0 \le s < 1$, since $pq \le 1/4$),
$U(s) = \sum_m \binom{2m}{m}(pqs^2)^m = (1 - 4pqs^2)^{-1/2}$. Lemma 8.8 gives $F(s) = 1 - \sqrt{1 - 4pqs^2}$. The
return probability is $\sum_n f_n = \lim_{s \uparrow 1}F(s)$ (the same monotone argument as in Theorem 8.1(c)), which
is $1 - \sqrt{1 - 4pq}$. Finally $1 - 4pq = (p + q)^2 - 4pq = (p - q)^2$, so $\sqrt{1 - 4pq} = |p - q|$. $\square$

For a walk with $p = 0.6$, the chance of ever returning is $1 - 0.2 = 0.8$; with probability 0.2 it drifts off to
$+\infty$ without looking back.

**The symmetric walk returns, but slowly.** For $p = q = \tfrac12$, $F(s) = 1 - \sqrt{1 - s^2}$. Expanding (Lemma 8.9's
method with $\alpha = \tfrac12$) gives the first-return probabilities

$$
f_{2m} = \frac{1}{2m - 1}\binom{2m}{m}\frac{1}{4^m}: \qquad f_2 = \frac12,\ f_4 = \frac18,\ f_6 = \frac1{16},\ f_8 = \frac{5}{128},\ f_{10} = \frac{7}{256}, \dots
$$

*Check* $f_4$ by counting: of the 16 paths of length 4, the ones that first return at time 4 are $++--$ and $--++$;
$2/16 = 1/8$. The expected time to return is $\lim_{s \uparrow 1}F'(s) = \lim_{s \uparrow 1} s/\sqrt{1 - s^2} = \infty$.
So the walker comes back with certainty, but the average wait is infinite: the null-recurrence that reappears in
Chapter 13. (A finer look, via the **reflection principle** of [Combinatorics, Chapter 8](../combinatorics/08-Catalan-Numbers-and-Lattice-Paths.md),
gives exact path counts; Chapter 15 continues the story with the arcsine law.)

**Return and the number of visits.** There is a clean criterion that works in any dimension. Let $R$ be the total
number of returns to 0 (after time 0) and $f$ the probability of ever returning. After each return the walk starts
afresh, so $P(R \ge k) = f^k$: the number of returns is geometric. Hence

$$
E[R] = \sum_{k \ge 1}f^k = \frac{f}{1 - f} \quad (\text{infinite if } f = 1).
$$

But also, by the indicator method, $E[R] = \sum_{n \ge 1}P(S_n = 0) = \sum_{n \ge 1}u_n$. So:

**Theorem 8.11 (recurrence criterion).** A random walk returns to its start with probability 1 if and only if
$\sum_n u_n = \infty$, that is, if and only if the expected number of visits to the start is infinite.

In one dimension, $u_{2m} = \binom{2m}{m}4^{-m}$ for the symmetric walk, and Stirling's formula
($m! \sim \sqrt{2\pi m}\,(m/e)^m$, where $\sim$ means the ratio tends to 1) gives $u_{2m} \sim 1/\sqrt{\pi m}$. The sum
of $1/\sqrt m$ diverges: recurrence again, by a second route.

**Two dimensions.** On the grid $\mathbb{Z}^2$ the symmetric walker steps north, south, east or west, each with
probability 1/4. Rotate the picture by 45 degrees: let $A_n = x_n + y_n$ and $B_n = x_n - y_n$. Each step changes
$(A, B)$ by one of $(+1, +1)$, $(-1, -1)$, $(+1, -1)$, $(-1, +1)$ (east, west, north, south respectively), all four
with probability 1/4. So $A$ and $B$ are two *independent* symmetric walks on the line, and the walker is at the origin
exactly when both are at 0. Hence

$$
u_{2m}^{(2)} = \left(\binom{2m}{m}\frac{1}{4^m}\right)^2 \sim \frac{1}{\pi m},
$$

and $\sum 1/m$ diverges: the planar walk is also recurrent.

**Three dimensions and beyond.** In $\mathbb{Z}^3$ the same kind of estimate (no rotation trick works now; the count is
a triple sum) gives $u_{2m}^{(3)} \sim c\,m^{-3/2}$ for a constant $c$, and $\sum m^{-3/2}$ converges.

**Theorem 8.12 (Pólya, 1921; statement).** The symmetric simple random walk on $\mathbb{Z}^d$ returns to its starting
point with probability 1 if $d = 1$ or $d = 2$, and with probability less than 1 if $d \ge 3$.

The proof for $d = 1, 2$ is above (given Stirling's formula); for $d = 3$ the estimate of $u_{2m}^{(3)}$ is a careful
but elementary computation, done for example in Grimmett and Stirzaker, Section 5.3 and its exercises, or by Fourier
analysis in Lawler and Limic. The return probability in three dimensions is about 0.3405, a value that comes from an
integral evaluated by G. N. Watson in 1939. A remark often attributed to Shizuo Kakutani sums it up: a drunk man will
find his way home, but a drunk bird may get lost forever.

## A short history

Generating functions in probability go back to Abraham de Moivre, who used them for dice sums in the early eighteenth
century, and above all to Pierre-Simon Laplace, whose *Théorie analytique des probabilités* (1812) made generating
functions (and their continuous cousins, transforms) the central technique of the subject. The branching-process story
runs from Bienaymé (1845) through Galton and Watson (1873 to 1874) to the modern theory begun in the 1940s by
Kolmogorov and others, and summarised in T. E. Harris's *The Theory of Branching Processes* (1963). George Pólya's
paper on random walks in a street network appeared in *Mathematische Annalen* in 1921. Moment generating functions
and characteristic functions became the standard route to limit theorems through the work of Lyapunov (around 1900)
and Paul Lévy (1920s), as Chapter 12 shows.

## Check yourself

??? question "1. Find the probability that three fair dice show a total of 10, using generating functions."

    The total has pgf $\big(\frac{s + \dots + s^6}{6}\big)^3$. The coefficient of $s^{10}$ in $(s + \dots + s^6)^3$ is
    the number of solutions of $a + b + c = 10$ with $1 \le a, b, c \le 6$: write $a = 1 + a'$ etc., so
    $a' + b' + c' = 7$ with $0 \le a', b', c' \le 5$. Without the upper limit there are $\binom{9}{2} = 36$ solutions;
    those with some variable $\ge 6$ number $3 \cdot \binom{3}{2} = 9$ (set it to $6 + a''$, leaving a sum of 1 in three
    parts: 3 ways). So $36 - 9 = 27$, and $P = 27/216 = 1/8$.

??? question "2. A random variable has pgf $G(s) = (2 + s)^4/81$. What is its distribution? Find its mean and variance from $G$."

    $(2 + s)^4/81 = \big(\frac23 + \frac13 s\big)^4$, the pgf of $\text{Bin}(4, \tfrac13)$. $G'(s) = \frac{4(2+s)^3}{81}$,
    so $G'(1) = \frac{108}{81} = \frac43$. $G''(s) = \frac{12(2+s)^2}{81}$, so $G''(1) = \frac{108}{81} = \frac43$. Then
    $\operatorname{Var} = \frac43 + \frac43 - \frac{16}{9} = \frac{8}{9}$. Check: $np = 4/3$, $npq = 4 \cdot \frac13\cdot\frac23 = \frac89$.

??? question "3. Show with pgfs that if $X \sim \text{Poisson}(\lambda)$, $Y \sim \text{Poisson}(\mu)$ are independent, then given $X + Y = n$, $X$ is $\text{Bin}(n, \lambda/(\lambda + \mu))$."

    $X + Y \sim \text{Poisson}(\lambda + \mu)$ by Theorem 8.2. Then
    $P(X = k \mid X + Y = n) = \frac{P(X = k)P(Y = n - k)}{P(X + Y = n)} = \frac{e^{-\lambda}\lambda^k/k! \cdot e^{-\mu}\mu^{n-k}/(n-k)!}{e^{-(\lambda+\mu)}(\lambda+\mu)^n/n!} = \binom{n}{k}\Big(\frac{\lambda}{\lambda + \mu}\Big)^k\Big(\frac{\mu}{\lambda+\mu}\Big)^{n-k}$.
    (Only the identification of the pgf of $X + Y$ used generating functions; the rest is the definition of
    conditional probability.)

??? question "4. A shop gets a Poisson(20) number of customers a day; each independently buys 0, 1 or 2 items with probabilities 0.5, 0.3, 0.2. Find the mean number of items sold, and the pgf of that number."

    One customer: $G_X(s) = 0.5 + 0.3s + 0.2s^2$, mean $0.3 + 0.4 = 0.7$. By Wald, $E[S] = 20 \cdot 0.7 = 14$. By Theorem
    8.3, $G_S(s) = \exp\big(20(0.5 + 0.3s + 0.2s^2 - 1)\big) = \exp\big(20(0.3s + 0.2s^2 - 0.5)\big)$.

??? question "5. Each individual has 0, 1 or 2 children with probabilities 0.2, 0.3, 0.5. Find the extinction probability starting from one individual, and from three."

    $G(s) = 0.2 + 0.3s + 0.5s^2$; $G(s) = s$ gives $0.5s^2 - 0.7s + 0.2 = 0$, roots $s = \frac{0.7 \pm 0.3}{1}$, that is
    $0.4$ and $1$. So $\eta = 0.4$ (the mean is $1.3 > 1$). Three founders start three independent family trees, all of
    which must die out: $0.4^3 = 0.064$.

??? question "6. Offspring numbers are geometric on $\{0, 1, 2, \dots\}$: $p_k = (1 - a)a^k$ with $0 < a < 1$. Find $\mu$ and $\eta$."

    $G(s) = \frac{1 - a}{1 - as}$ and $\mu = G'(1) = \frac{a(1-a)}{(1-a)^2} = \frac{a}{1-a}$. $G(s) = s$ means
    $as^2 - s + (1 - a) = 0$, that is $(s - 1)(as - (1 - a)) = 0$, so the fixed points are $1$ and $\frac{1-a}{a}$. Hence
    $\eta = \min\big(1, \frac{1-a}{a}\big)$: certain extinction for $a \le 1/2$ (that is $\mu \le 1$), and $\eta = \frac{1-a}{a} = \frac{1}{\mu}$
    for $a > 1/2$.

??? question "7. Use the mgf of $\text{Bin}(n, p)$ to find its variance."

    $M(t) = (q + pe^t)^n$. $M'(t) = npe^t(q + pe^t)^{n-1}$ and
    $M''(t) = npe^t(q + pe^t)^{n-1} + n(n-1)p^2e^{2t}(q + pe^t)^{n-2}$. At $t = 0$: $E[X] = np$,
    $E[X^2] = np + n(n-1)p^2$. So $\operatorname{Var} = np + n(n-1)p^2 - n^2p^2 = np - np^2 = npq$.

??? question "8. A simple random walk goes up with probability 0.6. Find the probability that it ever returns to 0 and the expected number of returns."

    $f = 1 - |0.6 - 0.4| = 0.8$. The number of returns is geometric with $P(R \ge k) = 0.8^k$, so
    $E[R] = \frac{0.8}{0.2} = 4$. Check with $\sum_{n \ge 1}u_n = U(1) - 1 = \frac{1}{\sqrt{1 - 4 \cdot 0.24}} - 1 = \frac{1}{0.2} - 1 = 4$.

??? question "9. For the symmetric walk, check $f_6 = 1/16$ by counting paths."

    A path of length 6 first returning at time 6 must stay strictly above 0 (or strictly below) at times 1 to 5. Going
    up first, it must be $+$, then a path from height 1 back to height 1 in 4 steps never touching 0, then $-$. The
    middle paths are the Dyck paths of length 4 (raised by 1): $++--$ and $+-+-$, so 2 of them. With the mirror images
    that is 4 paths out of $2^6 = 64$: $4/64 = 1/16$. (In general the count is $2C_{m-1}$, twice a Catalan number;
    see [Combinatorics, Chapter 8](../combinatorics/08-Catalan-Numbers-and-Lattice-Paths.md).)

??? question "10. Show that if $X$ has a finite mgf near 0, then $P(X \ge a) \le e^{-ta}M(t)$ for all $t$ in that range with $t > 0$, and use the Poisson mgf to bound $P(X \ge 10)$ for $X \sim \text{Poisson}(2)$."

    The first part is Theorem 7.6. For Poisson(2), $e^{-10t}\exp(2(e^t - 1))$ is smallest when
    $-10 + 2e^t = 0$, that is $e^t = 5$, $t = \ln 5$. The bound is $5^{-10}e^{8} \approx 2981/9765625 \approx 3.1 \times 10^{-4}$.
    (The exact value is about $4.6 \times 10^{-5}$.)

??? question "11. (Harder.) In a branching process with $\mu = 1$ and $p_1 < 1$, show that $E[Z_n \mid Z_n > 0] \to \infty$."

    $E[Z_n] = E[Z_n \mid Z_n > 0]\,P(Z_n > 0) + 0$, so $E[Z_n \mid Z_n > 0] = \frac{E[Z_n]}{P(Z_n > 0)} = \frac{1}{1 - \eta_n}$.
    By Theorem 8.5, $\eta_n \to \eta = 1$, so this tends to infinity.

??? question "12. (Harder.) Two players each toss a fair coin $n$ times. Show that the probability they get the same number of heads is $\binom{2n}{n}/4^n$, and explain the link with the random walk."

    $P(\text{same}) = \sum_k \binom{n}{k}^2/4^n = \binom{2n}{n}/4^n$ by Vandermonde's identity
    ($\sum_k \binom{n}{k}\binom{n}{n-k} = \binom{2n}{n}$). The link: A's heads plus B's tails is a count of
    successes in $2n$ fair trials, so it is $\text{Bin}(2n, \frac12)$, and it equals $n$ exactly when A's heads equal
    B's heads. That is the same as a symmetric walk of $2n$ steps (up for each success) ending at 0, so the answer is
    $u_{2n}$.

## What you learned

- The pgf $G(s) = E[s^X]$ packs a whole-number distribution into a power series; $G(1) = 1$, $p_k = G^{(k)}(0)/k!$,
  $E[X] = G'(1)$, $\operatorname{Var}(X) = G''(1) + G'(1) - G'(1)^2$.
- Independent sums multiply pgfs; this identifies binomial, Poisson and negative binomial sums at a glance, finds the
  Sicherman dice, and proves no loaded pair gives a uniform sum.
- A random sum has pgf $G_N(G_X(s))$, and Wald's identity $E[S] = E[N]E[X]$.
- In a branching process, $G_n = G \circ \dots \circ G$ and the extinction probability is the smallest fixed point of
  $G$ in $[0, 1]$; extinction is certain exactly when $\mu \le 1$ (excluding the case of exactly one child always).
- The mgf $M(t) = E[e^{tX}]$, when finite near 0, gives the moments as derivatives and determines the distribution;
  heavy-tailed variables have none.
- The simple random walk returns with probability $1 - |p - q|$; the symmetric walk returns surely but with infinite
  mean waiting time; by Pólya's theorem walks in one and two dimensions return, in three or more they may not.

**Next:** [Chapter 9](09-Continuous-Random-Variables.md) leaves the whole numbers behind: random variables that can take
any real value, described by densities instead of lists.

## Further reading

- W. Feller, *An Introduction to Probability Theory and Its Applications*, Volume I, 3rd edition, 1968: Chapter XI
  (generating functions), Chapter XII (compound distributions and branching processes) and Chapter XIII (recurrent
  events, the source of the renewal argument of 8.5).
- G. Grimmett and D. Stirzaker, *Probability and Random Processes*, 4th edition, 2020: Chapter 5, on generating
  functions, branching processes and random walks.
- K. B. Athreya and P. E. Ney, *Branching Processes*, 1972.
- C. C. Heyde and E. Seneta, "The simple branching process, a turning point test and a fundamental inequality: a historical note on I. J. Bienaymé", *Biometrika* 59, 1972.
- G. Pólya, "Über eine Aufgabe der Wahrscheinlichkeitsrechnung betreffend die Irrfahrt im Straßennetz",
  *Mathematische Annalen* 84, 1921.
- G. F. Lawler and V. Limic, *Random Walk: A Modern Introduction*, 2010.
- P. Billingsley, *Probability and Measure*, 3rd edition, 1995: Sections 26 and 30 on characteristic functions and the
  moment problem.
- On this site: [Random walks and Markov chains](../../topics/probability/level-8/06-random-walks-markov.md) (gentler);
  [Combinatorics, Chapter 7](../combinatorics/07-Generating-Functions.md) (generating functions for counting) and
  [Chapter 8](../combinatorics/08-Catalan-Numbers-and-Lattice-Paths.md) (lattice paths and the reflection principle);
  the MAT137 guides to [series](../../uoft/MAT137/unit13.md) and [power series](../../uoft/MAT137/unit14.md).
