# 19. Randomness in computing

*Computers are machines built to do exactly the same thing every time. Yet they simulate weather and card games,
sort lists, test whether 600-digit numbers are prime, sample from distributions too complicated to write down, and
generate the secret keys that protect every bank transfer, and all of these need randomness. Where does a
deterministic machine get it, and what does it buy? In this chapter you will build and break pseudo-random number
generators, prove that randomized quicksort makes about $2n\ln n$ comparisons on average whatever the input, check a
matrix product with a few random vectors, sample from a distribution by running a Markov chain (the Metropolis
algorithm), watch a random graph grow a giant component, and see why randomness for cryptography is a different and
much harder problem.*

!!! abstract "In this chapter"
    **You will learn:**

    - how linear congruential generators work, when they have full period, and how RANDU failed (proof)
    - Las Vegas and Monte Carlo algorithms, and how repetition drives error down exponentially
    - the expected running time of randomized quicksort (full proof), Freivalds' check, and the error of Miller-Rabin
    - the Metropolis algorithm and why detailed balance makes it sample the right distribution (proof)
    - random graphs $G(n,p)$: expected counts, the giant component and its link to branching processes
    - what cryptographic randomness requires, von Neumann's unbiasing trick (proof), and real failures

    **You need:** expectation and indicators ([Chapter 6](06-Expectation-and-Variance.md)), Monte Carlo estimation
    ([Chapter 7](07-Inequalities-and-the-Law-of-Large-Numbers.md)), branching processes
    ([Chapter 8](08-Generating-Functions-in-Probability.md)), and Markov chains and stationary distributions
    ([Chapter 13](13-Markov-Chains.md)). Some modular arithmetic helps in 19.1 (the
    [Number Theory book](../number-theory/04-Congruences.md) has it).

    **Levels:** 19.1 and 19.2 are intermediate to advanced; 19.3 to 19.5 are advanced.

## 19.1 Pseudo-random numbers

*Level: intermediate.*

### Random-looking, not random

Early on, people who needed random numbers used physical ones. In 1955 the RAND Corporation published a book called
*A Million Random Digits with 100,000 Normal Deviates*, made from an electronic noise source, and scientists looked up
digits in it. A table is slow and finite, so computer users turned to arithmetic formulas that produce numbers that
*look* random. John von Neumann, who used such formulas himself, wrote in 1951 that "any one who considers
arithmetical methods of producing random digits is, of course, in a state of sin": a formula's output is completely
determined, so it is not random at all. The honest name is **pseudo-random**: a deterministic sequence that passes the
statistical tests we care about.

A **pseudo-random number generator** (PRNG) has a hidden **state**, a rule that updates the state, and a rule that
turns the state into an output. You choose a starting state, the **seed**. The same seed gives the same sequence,
which is a feature: a simulation can be rerun exactly.

### Linear congruential generators

The oldest widely used design (D. H. Lehmer, 1949) is the **linear congruential generator** (LCG):

$$
x_{n+1} = (a\,x_n + c) \bmod m ,
$$

with a **modulus** $m$, a **multiplier** $a$ and an **increment** $c$. The outputs $x_n$ are integers from 0 to
$m - 1$, and $u_n = x_n / m$ is used as a "uniform number in $[0,1)$".

**Worked example 1.** Take $m = 16$, $a = 5$, $c = 3$ and seed $x_0 = 7$:

$$
7 \to 6 \to 1 \to 8 \to 11 \to 10 \to 5 \to 12 \to 15 \to 14 \to 9 \to 0 \to 3 \to 2 \to 13 \to 4 \to 7 .
$$

All 16 values appear before the sequence repeats: the generator has **full period** $m$. *Check:* $5 \cdot 7 + 3 =
38 = 2 \cdot 16 + 6$, so the first step is right.

Change to $a = 3$, $c = 0$ and seed 1: $1 \to 3 \to 9 \to 11 \to 1$. Period 4 out of a possible 16. The state can
only take $m$ values, so the sequence must eventually cycle; the question is how soon.

**Theorem 19.1 (Hull and Dobell, 1962, statement).** The LCG with $c \ne 0$ has full period $m$, for every seed, if
and only if

1. $c$ and $m$ have no common factor;
2. $a - 1$ is divisible by every prime that divides $m$;
3. $a - 1$ is divisible by 4 if $m$ is.

For $m = 16$, $a = 5$, $c = 3$: 3 is odd, $a - 1 = 4$ is divisible by 2 and by 4. All three hold. The proof is number
theory (it studies the order of $a$ modulo powers of primes) and is in Knuth's *The Art of Computer Programming*,
Volume 2, Section 3.2.1.2.

### Full period is not enough: the lattice

Plot each pair of consecutive outputs $(x_n, x_{n+1})$ as a point. For a truly random sequence the points would
scatter evenly. For an LCG, $x_{n+1} = a x_n + c - km$ for some whole number $k$, so every point lies on one of a few
parallel lines $y = ax + c - km$. The picture shows all 64 pairs of the full-period generator $m = 64$, $a = 5$,
$c = 1$: they sit on just 5 lines.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 400" role="img" aria-label="Scatter plot of the 64 consecutive pairs x n, x n plus 1 of the generator x n plus 1 equals 5 x n plus 1 mod 64. The points do not fill the square evenly; they lie on five parallel lines of slope 5">
  <rect x="40" y="40" width="320" height="320" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="42.5" y1="352.5" x2="104.5" y2="42.5" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="105.5" y1="357.5" x2="168.5" y2="42.5" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="169.5" y1="357.5" x2="232.5" y2="42.5" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="233.5" y1="357.5" x2="296.5" y2="42.5" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="297.5" y1="357.5" x2="357.5" y2="57.5" stroke="#9cc9ea" stroke-width="2"/>
  <circle cx="47.5" cy="327.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="72.5" cy="202.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="197.5" cy="217.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="182.5" cy="292.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="107.5" cy="347.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="52.5" cy="302.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="97.5" cy="77.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="322.5" cy="232.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="167.5" cy="47.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="352.5" cy="82.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="317.5" cy="257.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="142.5" cy="172.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="227.5" cy="67.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="332.5" cy="182.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="217.5" cy="117.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="282.5" cy="112.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="287.5" cy="87.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="312.5" cy="282.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="117.5" cy="297.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="102.5" cy="52.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="347.5" cy="107.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="292.5" cy="62.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="337.5" cy="157.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="242.5" cy="312.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="87.5" cy="127.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="272.5" cy="162.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="237.5" cy="337.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="62.5" cy="252.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="147.5" cy="147.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="252.5" cy="262.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="137.5" cy="197.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="202.5" cy="192.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="207.5" cy="167.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="232.5" cy="42.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="357.5" cy="57.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="342.5" cy="132.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="267.5" cy="187.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="212.5" cy="142.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="257.5" cy="237.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="162.5" cy="72.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="327.5" cy="207.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="192.5" cy="242.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="157.5" cy="97.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="302.5" cy="332.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="67.5" cy="227.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="172.5" cy="342.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="57.5" cy="277.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="122.5" cy="272.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="127.5" cy="247.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="152.5" cy="122.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="277.5" cy="137.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="262.5" cy="212.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="187.5" cy="267.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="132.5" cy="222.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="177.5" cy="317.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="82.5" cy="152.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="247.5" cy="287.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="112.5" cy="322.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="77.5" cy="177.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="222.5" cy="92.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="307.5" cy="307.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="92.5" cy="102.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="297.5" cy="357.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <circle cx="42.5" cy="352.5" r="3" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <text x="40" y="378" text-anchor="middle" font-size="12" fill="currentColor">0</text>
  <text x="360" y="378" text-anchor="middle" font-size="12" fill="currentColor">63</text>
  <text x="200" y="392" text-anchor="middle" font-size="13" fill="currentColor">x(n)</text>
  <text x="32" y="364" text-anchor="end" font-size="12" fill="currentColor">0</text>
  <text x="32" y="46" text-anchor="end" font-size="12" fill="currentColor">63</text>
  <text x="200" y="28" text-anchor="middle" font-size="13" fill="currentColor">x(n+1) against x(n): 64 points on 5 lines</text>
</svg>
</div>

George Marsaglia showed in 1968, in a paper titled "Random numbers fall mainly in the planes", that this always
happens: for any LCG, the points $(u_n, u_{n+1}, \ldots, u_{n+d-1})$ in $d$ dimensions lie on a limited number of
parallel hyperplanes. With a good multiplier the planes are many and close together; with a bad one, few.

**Worked example 2 (RANDU).** IBM's generator RANDU, widely used in the 1960s and 1970s, was
$x_{n+1} = 65539\, x_n \bmod 2^{31}$. The multiplier $65539 = 2^{16} + 3$ was chosen because multiplying by it is fast.
But

$$
65539^2 = (2^{16} + 3)^2 = 2^{32} + 6 \cdot 2^{16} + 9 \equiv 6 \cdot 2^{16} + 9 = 6(2^{16} + 3) - 9 \pmod{2^{31}} ,
$$

since $2^{32}$ is a multiple of $2^{31}$. So $a^2 \equiv 6a - 9$, and multiplying by $x_k$:

$$
x_{k+2} \equiv 6\,x_{k+1} - 9\,x_k \pmod{2^{31}} .
$$

Every output is a fixed combination of the two before it. Dividing by $2^{31}$, $u_{k+2} - 6u_{k+1} + 9u_k$ is a whole
number, and since each $u$ is in $[0, 1)$ it lies between $-6$ and $10$ exclusive. So every triple
$(u_k, u_{k+1}, u_{k+2})$ lies on one of at most 15 parallel planes $9x - 6y + z = j$ ($j = -5, \ldots, 9$) in the unit
cube. Any simulation in three dimensions that used RANDU was using points on 15 sheets instead of a solid cube.
*Check:* $65539^2 \bmod 2^{31} = 393225 = 6 \cdot 65539 - 9$, and a computer run of 1000 RANDU outputs confirms the
recurrence for every triple.

### Modern generators, honestly

Today's general-purpose generators have far larger states and pass extensive test batteries (such as TestU01, by
Pierre L'Ecuyer and Richard Simard, 2007). Python's `random` module uses the **Mersenne Twister** (Makoto Matsumoto and
Takuji Nishimura, 1998), whose period is the Mersenne prime $2^{19937} - 1$. NumPy's default is a
PCG generator (Melissa O'Neill, 2014). They are excellent for simulation and useless for secrets: the Mersenne
Twister's output is a linear function of its state, and 624 consecutive 32-bit outputs reveal the whole state, after
which every future output can be predicted. For keys you need 19.5.

**Turning uniforms into other distributions.** Given uniform $U$ on $(0,1)$, $X = F^{-1}(U)$ has cdf $F$ (the
**inverse transform** method of [Chapter 9](09-Continuous-Random-Variables.md)): for example $-\ln(U)/\lambda$ is
exponential with rate $\lambda$. Two independent uniforms give two independent standard normals by the
**Box-Muller** formulas $\sqrt{-2\ln U_1}\cos(2\pi U_2)$ and $\sqrt{-2\ln U_1}\sin(2\pi U_2)$, which are the polar
coordinates proof of the Gaussian integral ([Chapter 10](10-The-Normal-Distribution.md)) run backwards.

## 19.2 Randomized algorithms

*Level: intermediate to advanced.*

A **randomized algorithm** flips coins as it runs. Two kinds:

- **Las Vegas** algorithms always give the right answer, but their running time is random. Randomized quicksort is
  one.
- **Monte Carlo** algorithms run in fixed time, but may give a wrong answer with small probability. The Miller-Rabin
  primality test and Freivalds' check are examples.

The probabilities are over the algorithm's own coins, **not** over the input. A randomized algorithm must do well on
*every* input; there is no assumption that inputs are "typical".

**Amplification.** If a Monte Carlo algorithm errs with probability at most $\frac12$, and its errors are one-sided
(when it says "no" it is always right), then running it $k$ times with fresh coins and answering "yes" only if every
run says "yes" errs with probability at most $2^{-k}$. Thirty runs give error below one in a billion: smaller than the
chance of a hardware fault during the computation. With two-sided error below $\frac13$, a majority vote over $k$
runs errs with probability exponentially small in $k$, by a Chernoff bound (Chapter 7).

### Randomized quicksort

To sort $n$ distinct numbers, **quicksort** (Tony Hoare, 1961) picks a **pivot**, compares every other number with
it, splits them into smaller and larger, and sorts each part the same way. With a bad pivot every time (always the
smallest), it makes $(n-1) + (n-2) + \cdots + 1 = n(n-1)/2$ comparisons. If the pivot is always the first element,
an already sorted list triggers exactly that. Choosing the pivot **uniformly at random** removes all bad inputs.

**Theorem 19.2.** Randomized quicksort on $n$ distinct numbers makes, on average over its coin flips and for every
input,

$$
E[C_n] = 2(n+1)H_n - 4n \le 2n\ln n + O(n)
$$

comparisons, where $H_n = 1 + \frac12 + \cdots + \frac1n$.

*Proof.* Name the numbers in sorted order $z_1 < z_2 < \cdots < z_n$. Two numbers are compared at most once (one of
them is then the pivot, and pivots are not compared again). So

$$
C_n = \sum_{i<j} I_{ij}, \qquad I_{ij} = \begin{cases} 1 & \text{if } z_i \text{ and } z_j \text{ are ever compared,} \\ 0 & \text{otherwise.} \end{cases}
$$

By linearity, $E[C_n] = \sum_{i<j} P(z_i \text{ and } z_j \text{ are compared})$.

Look at the block $z_i, z_{i+1}, \ldots, z_j$ of $j - i + 1$ numbers. As long as no pivot has been chosen from this
block, the whole block stays together in one part. The first pivot chosen from the block decides: if it is $z_i$ or
$z_j$, those two are compared; if it is anything strictly between, they are separated into different parts and never
compared. Each pivot is uniform among the numbers of its part, which includes the whole block, so the first pivot
from the block is equally likely to be any of its $j - i + 1$ members. Hence

$$
P(z_i \text{ and } z_j \text{ compared}) = \frac{2}{j - i + 1} .
$$

Group the pairs by their gap $k = j - i + 1$, which runs from 2 to $n$, with $n - k + 1$ pairs for each $k$:

$$
E[C_n] = \sum_{k=2}^{n} (n - k + 1)\frac{2}{k} = 2(n+1)\sum_{k=2}^{n}\frac1k - 2(n-1) = 2(n+1)(H_n - 1) - 2(n-1),
$$

which simplifies to $2(n+1)H_n - 4n$. Since $H_n \le 1 + \ln n$, this is at most $2n\ln n + O(n)$. $\square$

*Check:* for $n = 3$ the formula gives $8 \cdot \frac{11}{6} - 12 = \frac83$. Directly: the first pivot costs 2
comparisons; if it is the middle number (probability $\frac13$) the parts have one element each and we stop, and
otherwise one part has 2 elements and costs 1 more. So $E = 2 + \frac23 = \frac83$. For $n = 1000$ the formula gives
about 10,986 comparisons, against about 8,529 for $\log_2(1000!)$, the minimum any comparison sort needs in the worst
case.

### Checking a product: Freivalds' algorithm

You are given three $n \times n$ matrices $A$, $B$, $C$ and asked whether $AB = C$. Multiplying out costs about $n^3$
operations by the school method. Rūsiņš Freivalds (1977) suggested: choose a random vector $r$ with entries 0 or 1,
independently and uniformly, and check whether $A(Br) = Cr$. That takes three matrix-vector products, about $3n^2$
operations.

**Theorem 19.3.** If $AB = C$, the check always passes. If $AB \ne C$, it fails with probability at least $\frac12$.

*Proof.* Let $D = AB - C$. If $D \ne 0$, some entry $d_{ij}$ is nonzero. Look at the $i$-th entry of $Dr$:

$$
(Dr)_i = d_{ij} r_j + \sum_{l \ne j} d_{il} r_l = d_{ij} r_j + s ,
$$

where $s$ does not depend on $r_j$. Fix all other entries of $r$, so $s$ is fixed. Of the two values $r_j = 0$ and
$r_j = 1$, at most one makes $d_{ij}r_j + s = 0$, because they give values differing by $d_{ij} \ne 0$. So
$P((Dr)_i = 0) \le \frac12$, and $Dr \ne 0$, which means the check fails, with probability at least $\frac12$.
$\square$

With 30 independent vectors the chance of missing a wrong product is at most $2^{-30} \approx 9.3 \times 10^{-10}$, in
about $90n^2$ operations instead of $n^3$.

The same idea checks polynomial identities. The **Schwartz-Zippel lemma** (Jacob Schwartz 1980, Richard Zippel 1979)
says that a nonzero polynomial of total degree $d$ in several variables, evaluated at a point whose coordinates are
chosen independently and uniformly from a finite set $S$, is zero with probability at most $d/|S|$. For one variable
this is the fact that a nonzero polynomial of degree $d$ has at most $d$ roots. To test whether two complicated
formulas are equal as polynomials, evaluate both at a random point.

### Primality: Miller-Rabin

The Miller-Rabin test ([Number Theory Chapter 12](../number-theory/12-Primality-Factoring-and-RSA.md), Section 12.2)
picks a random base $a$ and checks a condition that every prime passes. Rabin proved in 1980 that for an odd composite
$n$, at most a quarter of the bases make it pass. So a composite survives $k$ independent rounds with probability at
most $4^{-k}$: for $k = 20$, below $10^{-12}$. Errors are one-sided: a "composite" verdict is always right. This is
how the large primes inside RSA keys are found in practice.

### Does randomness really help?

For primality, no in principle: Agrawal, Kayal and Saxena found a deterministic polynomial-time test in 2002 (AKS,
also in Number Theory Chapter 12). It is much slower in practice than Miller-Rabin. Whether every problem solvable
by a fast randomized algorithm with small two-sided error (the class **BPP**) can also be solved fast deterministically
(the class **P**) is open. Most researchers believe P = BPP, because Russell Impagliazzo and Avi Wigderson proved in 1997
that this follows if certain problems need exponential-size circuits, a widely believed hardness assumption. Randomness
then would be a convenience, not a necessity. In other settings it provably helps: in a game against an adversary, or
in distributed computing, or when the input is too large to read entirely and you can only sample it.

## 19.3 Markov chain Monte Carlo

*Level: advanced.*

### The problem

Many problems need samples from a distribution $\pi$ on a huge finite set $S$, known only up to a constant:
$\pi(x) = w(x)/Z$, where the weights $w(x)$ are easy to compute but the total $Z = \sum_{x \in S} w(x)$ is not, because
$S$ is astronomically large. Examples:

- **Statistical physics.** In the **Ising model** of a magnet, each of $N$ sites has a spin $\pm1$, and a configuration
  $\sigma$ has weight $e^{-\beta E(\sigma)}$, where $E$ counts disagreeing neighbours and $\beta$ is the inverse
  temperature. There are $2^N$ configurations; for $N = 10{,}000$ sites, $Z$ is a sum of $2^{10000}$ terms.
- **Bayesian statistics.** The posterior distribution of the unknowns given the data is proportional to prior times
  likelihood, easy to evaluate at a point, with an intractable normalising constant. (Statistics will get its own
  book; here it is only an example.)
- **Counting.** Sampling nearly uniformly from a set of combinatorial objects can be turned into approximately
  counting them.

### The Metropolis algorithm

The idea of Nicholas Metropolis, Arianna Rosenbluth, Marshall Rosenbluth, Augusta Teller and Edward Teller (1953):
design a Markov chain on $S$ whose stationary distribution is $\pi$, run it for a long time, and use where it is.
By the convergence theorem of [Chapter 13](13-Markov-Chains.md), a finite irreducible aperiodic chain converges to its
stationary distribution from any start.

**The Metropolis algorithm.** Choose a **proposal** rule: from state $x$, propose a state $y$ with probability
$q(x, y)$, where $q$ is **symmetric**, $q(x,y) = q(y,x)$ (for example, flip one random spin, or move one step left or
right). Then

1. from the current state $x$, propose $y$;
2. **accept** the move with probability $\min\big(1, \, w(y)/w(x)\big)$, otherwise stay at $x$.

Moves uphill (to heavier states) are always accepted; moves downhill are accepted with probability equal to the weight
ratio. Only **ratios** of weights are used, so the unknown $Z$ cancels. That is the whole trick.

**Theorem 19.4 (detailed balance).** Let $P$ be a transition matrix and $\pi$ a distribution with

$$
\pi(x)P(x,y) = \pi(y)P(y,x) \quad \text{for all } x, y .
$$

Then $\pi$ is stationary for $P$. The Metropolis chain satisfies this for $\pi = w/Z$.

*Proof.* Summing the detailed balance equation over $x$:

$$
\sum_x \pi(x)P(x,y) = \sum_x \pi(y)P(y,x) = \pi(y)\sum_x P(y,x) = \pi(y),
$$

which is the equation $\pi P = \pi$. For the Metropolis chain with $x \ne y$,
$P(x,y) = q(x,y)\min(1, w(y)/w(x))$. Then

$$
\pi(x)P(x,y) = \frac{q(x,y)}{Z}\, w(x)\min\Big(1, \frac{w(y)}{w(x)}\Big) = \frac{q(x,y)}{Z}\min\big(w(x), w(y)\big),
$$

which is symmetric in $x$ and $y$ (using $q(x,y) = q(y,x)$). So $\pi(x)P(x,y) = \pi(y)P(y,x)$; for $x = y$ there is
nothing to check. $\square$

Detailed balance says that in equilibrium, the flow of probability from $x$ to $y$ equals the flow back: the chain is
**reversible**. W. Keith Hastings generalised the algorithm in 1970 to non-symmetric proposals, by accepting with
probability $\min\big(1, \frac{w(y)q(y,x)}{w(x)q(x,y)}\big)$; this is the **Metropolis-Hastings** algorithm.

**Worked example 3.** Ten states $0, \ldots, 9$ arranged in a circle, with weights $1, 2, 3, 4, 5, 4, 3, 2, 1, 1$
(total $Z = 26$). Propose a step left or right with probability $\frac12$ each (symmetric), and accept with probability
$\min(1, w(y)/w(x))$. From state 4 (weight 5) a proposed move to 3 (weight 4) is accepted with probability
$\frac45$; from 3 a move to 4 is always accepted.

```python
import random
w = [1, 2, 3, 4, 5, 4, 3, 2, 1, 1]
random.seed(2)
x, counts, N = 0, [0] * 10, 200_000
for _ in range(N):
    y = (x + random.choice([-1, 1])) % 10
    if random.random() < min(1, w[y] / w[x]):
        x = y
    counts[x] += 1
print([round(c / N, 3) for c in counts])   # close to w/26
print([round(v / 26, 3) for v in w])       # 0.038 0.077 0.115 0.154 0.192 ...
```

The run gives frequencies within about 0.002 of the target. The chain is irreducible (the circle is connected) and
aperiodic (rejections make it stay put sometimes), so convergence is guaranteed.

### How long to run? (honestly)

The convergence theorem says the chain converges; it does not say how fast. The **mixing time**, how many steps until
the distribution is within a given distance of $\pi$, can be tiny or astronomically large. A chain trying to sample a
distribution with two heavy regions separated by a light valley may stay in one region for a very long time, and a
finite run then gives badly biased answers with no warning sign. Proving good mixing bounds is a research field of its
own (coupling, spectral gaps, canonical paths). A celebrated success: Mark Jerrum, Alistair Sinclair and Eric Vigoda
(2004) gave a Markov chain that approximates the **permanent** of any matrix with nonnegative entries in polynomial
time, a problem for which exact computation is believed to be intractable. A celebrated practical use: in the
Bayesian statistics of the 1990s, MCMC (especially the **Gibbs sampler**, which updates one coordinate at a time from
its conditional distribution) made computations feasible that had been out of reach.

**Simulated annealing** (Scott Kirkpatrick, Daniel Gelatt and Mario Vecchi, 1983) runs Metropolis on weights
$e^{-\beta f(x)}$ while slowly increasing $\beta$, so that the chain settles into states with small $f$: a general
heuristic for hard optimisation problems.

## 19.4 Random graphs

*Level: advanced.*

### The model

A **random graph** $G(n, p)$ has $n$ labelled vertices, and each of the $\binom n2$ possible edges is present
independently with probability $p$. Edgar Gilbert (1959) introduced this model; Paul Erdős and Alfréd Rényi
(1959, 1960) studied the closely related model with a fixed number of edges, and discovered that its properties change
suddenly as the edge density passes certain thresholds. The probabilistic method in
[Combinatorics Chapter 17](../combinatorics/17-The-Probabilistic-Method.md) uses random graphs to prove that graphs
with surprising properties exist; here we look at what a typical random graph looks like.

**Expected counts by indicators.** The expected number of edges is $\binom n2 p$. The expected number of triangles is
$\binom n3 p^3$, since each of the $\binom n3$ triples is a triangle with probability $p^3$. For $n = 100$ and
$p = 0.05$: $161{,}700 \times 0.000125 \approx 20.2$ triangles. The expected degree of a vertex is $(n-1)p$.

**The scale $p = c/n$.** With $p = c/n$, each vertex has about $c$ neighbours on average, and the number of neighbours
is close to Poisson with mean $c$ (the binomial-to-Poisson limit of [Chapter 5](05-Discrete-Random-Variables.md)).
The expected number of triangles is $\binom n3 (c/n)^3 \to c^3/6$: a bounded number, however large $n$ is. So at this
scale the graph looks locally like a tree.

### The giant component

**Theorem 19.5 (Erdős and Rényi, 1960, statement).** Let $p = c/n$ with $c$ fixed, and $n \to \infty$.

- If $c < 1$, with probability tending to 1 every connected component has at most $O(\log n)$ vertices.
- If $c > 1$, with probability tending to 1 there is exactly one **giant component** with about $y n$ vertices, where
  $y$ is the positive solution of $1 - y = e^{-cy}$, and every other component has $O(\log n)$ vertices.

At $c = 1$ there is a **phase transition**: the largest component jumps from logarithmic size to linear size as the
average degree crosses 1.

**Why: a branching process.** Explore the component of a vertex $v$: find its neighbours, then their new neighbours,
and so on. While the explored part is small, each vertex has about Poisson($c$) new neighbours, independently: this is
a **branching process** ([Chapter 8](08-Generating-Functions-in-Probability.md)) with Poisson($c$) offspring. Its
generating function is $G(s) = e^{c(s-1)}$, and its extinction probability $q$ is the smallest root of $q = G(q)$ in
$[0,1]$. If $c \le 1$ the mean number of offspring is at most 1 and $q = 1$: the exploration dies out, and components
are small. If $c > 1$, $q < 1$, and with probability $y = 1 - q$ the exploration never dies out: in the finite graph, it
grows until it joins the giant component. Substituting $q = 1 - y$ into $q = e^{c(q-1)}$ gives exactly $1 - y = e^{-cy}$:
the fraction of vertices in the giant component equals the survival probability of the branching process. Turning
this into a proof needs care with the dependence that appears once the explored part is large; see Janson, Łuczak and
Ruciński, or Alon and Spencer.

**Worked example 4.** Solve $1 - y = e^{-cy}$ by iterating $y \leftarrow 1 - e^{-cy}$ from $y = 0.5$:

| $c$ | 1.5 | 2 | 3 |
|---|---|---|---|
| $y$ | 0.583 | 0.797 | 0.940 |

With average degree 2, about 80% of the vertices are in one giant component. *Check:* $1 - e^{-2 \times 0.797} =
1 - e^{-1.594} \approx 1 - 0.203 = 0.797$.

```python
import random
def giant(n, c, seed=1):
    random.seed(seed)
    p = c / n
    parent = list(range(n))
    def find(a):
        while parent[a] != a:
            parent[a] = parent[parent[a]]
            a = parent[a]
        return a
    for i in range(n):
        for j in range(i + 1, n):
            if random.random() < p:
                parent[find(i)] = find(j)
    sizes = {}
    for i in range(n):
        r = find(i); sizes[r] = sizes.get(r, 0) + 1
    return max(sizes.values()) / n
print(giant(2000, 2.0))    # close to 0.797
```

**Connectivity.** The graph becomes connected later, at $p = \ln n / n$: the last obstacles are isolated vertices,
and at $p = (\ln n + c)/n$ the probability of being connected tends to $e^{-e^{-c}}$. The full story, with a proof of
the threshold, is in Combinatorics Chapter 17.6.

**Random graphs in computing.** Random graphs and random regular graphs are, with high probability, **expanders**:
every set of vertices (up to half the graph) has many edges leaving it. Expanders are used in error-correcting codes
(including the LDPC codes of [Chapter 18](18-Information-and-Entropy.md)), network design and derandomization. Honest
caveat: real networks (the web, friendships) are not $G(n,p)$. They have far more triangles and very uneven degrees,
which is why other models, such as Duncan Watts and Steven Strogatz's small-world model (1998) and the
preferential-attachment model of Albert-László Barabási and Réka Albert (1999), were proposed; how well any simple
model fits real networks is still debated.

## 19.5 Cryptographic randomness

*Level: advanced.*

### A different requirement

A simulation needs numbers that behave statistically like random ones. A secret key needs numbers that an
**adversary** cannot predict, even one who has seen many earlier outputs, knows the algorithm, and has a large
computer. The Mersenne Twister passes statistical tests and fails this completely (19.1). The cryptography book's
chapter on [randomness and perfect secrecy](https://cryptography.akadian.ca/book/04-Randomness-and-Perfect-Secrecy/)
treats this side in depth; here is the probability.

**Definition (informal).** A **cryptographically secure** PRNG expands a short truly random seed into a long output
such that no efficient algorithm can tell the output from truly random bits with more than a negligible advantage.
Andrew Yao showed in 1982 that this is equivalent to the **next-bit test**: no efficient algorithm, given the first
$i$ output bits, predicts bit $i + 1$ with probability noticeably above $\frac12$.

Whether such generators exist at all is unproven: their existence implies P $\ne$ NP. In practice they are built from
ciphers and hash functions that have resisted years of attack (for example, the Linux kernel's generator has used the
ChaCha20 stream cipher since 2016), seeded from physical **entropy sources**: timing jitter of interrupts, dedicated
hardware noise circuits. In Python, use the `secrets` module, never `random`, for anything secret.

### Extracting fair bits from a biased source

Physical sources are random but rarely uniform. The simplest repair is due to von Neumann (1951).

**Von Neumann's trick.** Flip a coin with unknown heads probability $p$ (strictly between 0 and 1) twice. If the
result is HT, output 0; if TH, output 1; if HH or TT, discard and flip twice again.

**Theorem 19.6.** If the flips are independent, every output bit is fair: 0 and 1 each with probability exactly
$\frac12$, independent of earlier output bits, whatever $p$ is. On average $1/(p(1-p))$ flips are used per output bit.

*Proof.* A pair gives HT with probability $p(1-p)$ and TH with probability $(1-p)p$, the same. Conditioned on the pair
being kept, each is therefore equally likely. Different pairs use different flips, so outputs are independent. Each
pair is kept with probability $2p(1-p)$, so the number of pairs until a kept one is geometric with mean
$1/(2p(1-p))$, which is $1/(p(1-p))$ flips. $\square$

*Check:* for $p = 0.9$, about $1/0.09 \approx 11.1$ flips per fair bit. The trick wastes a lot and needs independent
flips; modern **randomness extractors** handle weaker assumptions, and in practice sources are hashed.

### When randomness failed

These are documented cases, each a lesson in probability:

- **Debian OpenSSL (2006 to 2008).** A change to the Debian Linux version of OpenSSL accidentally removed almost all
  the entropy fed to its generator, leaving essentially only the process ID, at most 32,768 values. Every key
  generated on affected systems in those two years came from a tiny set, and could be listed in advance.
  (CVE-2008-0166.)
- **Shared primes (2012).** Nadia Heninger, Zakir Durumeric, Eric Wustrow and J. Alex Halderman collected millions of
  public RSA keys from the internet and found many pairs that shared a prime factor, so a simple gcd computation
  broke them. The cause was devices (routers and similar) generating keys right after booting, before they had
  gathered enough entropy, so different devices made the same "random" choices. By the birthday problem of
  [Chapter 2](02-Counting-and-Equally-Likely-Outcomes.md), a generator with too few possible states repeats itself
  across many devices quickly.
- **Dual_EC_DRBG.** A generator standardised by NIST in 2006 was shown to allow a backdoor: whoever chose its two
  public constants could know a secret relation between them that makes the output predictable. After public concern
  in 2013, NIST withdrew it.

The common thread: a cryptographic system's security is at most the entropy of its keys, and entropy (Chapter 18)
cannot be created by computation, only stretched by it.

## A short history

Monte Carlo methods were named and developed at Los Alamos in the late 1940s, by Stanislaw Ulam, John von Neumann and
Nicholas Metropolis, and run on the first electronic computers; von Neumann's middle-square generator and his
unbiasing trick date from then. Lehmer introduced the linear congruential generator in 1949. The 1953 Metropolis paper
was one of the first scientific computations on the MANIAC computer. Randomized algorithms became a subject in the
1970s: Solovay and Strassen's primality test (1977), Rabin's (1976 to 1980, building on Miller), Freivalds' check
(1977). Erdős and Rényi founded random graph theory in 1959 to 1960. Yao, Blum, Micali and others built the theory of
cryptographic pseudo-randomness around 1982. The Mersenne Twister (1998) became the default generator of many
languages, and the study of mixing times of Markov chains grew from the 1980s into a large field.

## Check yourself

??? question "1. Check that the LCG $x_{n+1} = (5x_n + 3) \bmod 16$ satisfies all three Hull-Dobell conditions. Does $x_{n+1} = (5x_n + 2) \bmod 16$ have full period?"

    For $c = 3$: $\gcd(3, 16) = 1$; $a - 1 = 4$ is divisible by 2, the only prime factor of 16; and by 4, since 4
    divides 16. Full period. For $c = 2$: $\gcd(2, 16) = 2$, so condition 1 fails and the period is less than 16.
    Indeed, from an even seed all values stay even ($5x + 2$ is even when $x$ is), so at most 8 values appear.

??? question "2. Prove that for RANDU, $x_{k+2} \equiv 6x_{k+1} - 9x_k \pmod{2^{31}}$."

    $x_{k+1} \equiv a x_k$ and $x_{k+2} \equiv a^2 x_k$ with $a = 2^{16} + 3$. Then $a^2 = 2^{32} + 6\cdot 2^{16} + 9
    \equiv 6 \cdot 2^{16} + 9 = 6a - 9 \pmod{2^{31}}$, so $x_{k+2} \equiv (6a - 9)x_k = 6x_{k+1} - 9x_k$.

??? question "3. Use the formula $2(n+1)H_n - 4n$ to find the expected number of comparisons of randomized quicksort for $n = 4$, and check it against the recurrence $E_n = (n-1) + \frac{2}{n}\sum_{k=0}^{n-1} E_k$."

    $H_4 = \frac{25}{12}$, so $10 \cdot \frac{25}{12} - 16 = \frac{29}{6} \approx 4.83$. Recurrence: $E_0 = E_1 = 0$,
    $E_2 = 1$, $E_3 = 2 + \frac23(0 + 0 + 1) = \frac83$, $E_4 = 3 + \frac24(0 + 0 + 1 + \frac83) = 3 + \frac{11}{6} =
    \frac{29}{6}$.

??? question "4. Why does randomized quicksort have no bad inputs, while quicksort with the first element as pivot does?"

    With a fixed pivot rule, an adversary can choose an input (a sorted list) on which every pivot is the smallest,
    giving $n(n-1)/2$ comparisons. With a random pivot, the expected count $2(n+1)H_n - 4n$ was computed for an
    arbitrary input: the proof never used the input order, only that the pivot is uniform within its part.

??? question "5. How many independent runs of Freivalds' check are needed to make the probability of accepting a wrong product below $10^{-9}$?"

    Each run misses with probability at most $\frac12$, so $k$ runs miss with probability at most $2^{-k}$. Need
    $2^{-k} < 10^{-9}$, that is $k > 9\log_2 10 \approx 29.9$: 30 runs.

??? question "6. A Monte Carlo algorithm answers correctly with probability $\frac23$ (two-sided error). Why does a majority vote over many independent runs make the error tiny?"

    The number of correct runs among $k$ is binomial with mean $\frac{2k}{3}$. The vote is wrong only if at most
    $\frac{k}{2}$ runs are correct, a deviation of $\frac{k}{6}$ below the mean. By a Chernoff bound (Chapter 7) this
    has probability at most $e^{-ck}$ for a constant $c > 0$, so the error decreases exponentially in $k$.

??? question "7. A Metropolis chain on two states $\{a, b\}$ with weights $w(a) = 1$, $w(b) = 2$ always proposes the other state. Write its transition matrix and check that $(\frac13, \frac23)$ is stationary."

    From $a$, a move to $b$ is accepted with probability $\min(1, 2) = 1$; from $b$, a move to $a$ with probability
    $\frac12$. So $P(a,b) = 1$, $P(a,a) = 0$, $P(b,a) = \frac12$, $P(b,b) = \frac12$. Then
    $(\frac13, \frac23)P = (\frac23 \cdot \frac12, \frac13 \cdot 1 + \frac23 \cdot \frac12) = (\frac13, \frac23)$.
    Detailed balance: $\frac13 \cdot 1 = \frac23 \cdot \frac12$.

??? question "8. In $G(n, p)$, find the expected number of vertices of degree 0. Evaluate it for $n = 1000$ and $p = \ln n / n$."

    A vertex is isolated with probability $(1-p)^{n-1}$, so the expected number is $n(1-p)^{n-1}$. With
    $p = \ln 1000/1000 \approx 0.006908$: $(1 - p)^{999} \approx e^{-999p}\cdot e^{-O(np^2)} \approx 0.00098$, so
    the expectation is about 0.98. At $p = \ln n/n$ the expected number of isolated vertices is close to 1, which is
    why this is the threshold for connectivity.

??? question "9. Expected number of triangles in $G(n, c/n)$: show it tends to $c^3/6$. For $c = 2$, about how many?"

    $\binom n3 (c/n)^3 = \frac{n(n-1)(n-2)}{6}\cdot\frac{c^3}{n^3} \to \frac{c^3}{6}$. For $c = 2$: $\frac86 \approx 1.33$
    triangles on average, however large $n$ is.

??? question "10. Find the fraction of vertices in the giant component of $G(n, 3/n)$ to two decimals, and say what it means for the branching process with Poisson(3) offspring."

    Iterate $y \leftarrow 1 - e^{-3y}$: from 0.5, $0.777, 0.903, 0.933, 0.939, 0.940, \ldots$, so $y \approx 0.94$.
    The Poisson(3) branching process survives forever with probability about 0.94, and dies out with probability
    about 0.06.

??? question "11. A coin has $P(\text{heads}) = 0.7$. Using von Neumann's trick, what is the probability that a pair is kept, and the expected number of flips per output bit?"

    A pair is kept (HT or TH) with probability $2 \cdot 0.7 \cdot 0.3 = 0.42$. The number of pairs per output bit is
    geometric with mean $1/0.42 \approx 2.38$, so about 4.76 flips per fair bit.

??? question "12. A device chooses its RSA primes from a generator that, at boot, has only $2^{20}$ possible states. If 100,000 such devices make keys, about how many pairs of devices get the same first prime?"

    By the birthday computation, the expected number of colliding pairs is $\binom{100000}{2}/2^{20} \approx
    \frac{5 \times 10^9}{1.05 \times 10^6} \approx 4768$. Thousands of devices share a prime, and a gcd of their
    public moduli breaks each pair at once. This is the mechanism found in the 2012 study.

## What you learned

- Pseudo-random generators are deterministic; LCGs can have full period (Hull-Dobell) yet put their points on a few
  lines or planes, disastrously so for RANDU.
- Las Vegas algorithms are always right; Monte Carlo algorithms are sometimes wrong, and repetition makes the error
  exponentially small.
- Randomized quicksort makes $2(n+1)H_n - 4n \approx 2n\ln n$ comparisons on average on every input, proved by
  indicators and linearity; Freivalds' check and Miller-Rabin verify cheaply with one-sided error.
- The Metropolis algorithm samples from $w/Z$ without knowing $Z$, because detailed balance makes $\pi$ stationary;
  how fast it mixes is the hard question.
- In $G(n, c/n)$ a giant component appears at $c = 1$, and its size is the survival probability of a Poisson
  branching process.
- Cryptographic randomness means unpredictability against an adversary; it needs real entropy, and its failures
  (Debian, shared primes, Dual_EC) are failures of probability.

**Next:** [Chapter 20](20-Where-Probability-Goes.md) visits the frontier: percolation, random matrices, conformally
invariant random curves, concentration of measure, and the open problems.

## Further reading

- D. E. Knuth, *The Art of Computer Programming, Volume 2: Seminumerical Algorithms*, 3rd edition, 1997. Chapter 3 is
  the classic account of random number generation and testing.
- G. Marsaglia, "Random numbers fall mainly in the planes", *Proceedings of the National Academy of Sciences* 61, 1968.
- M. Matsumoto and T. Nishimura, "Mersenne Twister: a 623-dimensionally equidistributed uniform pseudo-random number
  generator", *ACM Transactions on Modeling and Computer Simulation* 8, 1998.
- R. Motwani and P. Raghavan, *Randomized Algorithms*, 1995.
- M. Mitzenmacher and E. Upfal, *Probability and Computing*, 2nd edition, 2017.
- N. Metropolis, A. W. Rosenbluth, M. N. Rosenbluth, A. H. Teller and E. Teller, "Equation of State Calculations by
  Fast Computing Machines", *Journal of Chemical Physics* 21, 1953.
- D. A. Levin and Y. Peres, *Markov Chains and Mixing Times*, 2nd edition, 2017.
- S. Janson, T. Łuczak and A. Ruciński, *Random Graphs*, 2000; N. Alon and J. Spencer, *The Probabilistic Method*,
  4th edition, 2016.
- N. Heninger, Z. Durumeric, E. Wustrow and J. A. Halderman, "Mining Your Ps and Qs: Detection of Widespread Weak
  Keys in Network Devices", USENIX Security 2012.
- On this site: [Number Theory Chapter 12](../number-theory/12-Primality-Factoring-and-RSA.md) for Miller-Rabin and
  AKS; [Combinatorics Chapter 17](../combinatorics/17-The-Probabilistic-Method.md) for random graphs and thresholds;
  the gentler [Monte Carlo lesson](../../topics/probability/level-8/07-monte-carlo.md) and
  [random walks and Markov chains lesson](../../topics/probability/level-8/06-random-walks-markov.md);
  [CSC148 Unit 10: Sorting](../../uoft/CSC148H1/unit10.md) and [Unit 9: Efficiency Analysis](../../uoft/CSC148H1/unit09.md);
  the cryptography book on [randomness](https://cryptography.akadian.ca/book/04-Randomness-and-Perfect-Secrecy/).
