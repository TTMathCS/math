# 15. Random walks and martingales

*Two players flip a fair coin, and one pays the other a dollar on each flip. How often does the lead change? Is it
likely that one player stays ahead nearly the whole time? Can a clever rule for when to bet, how much to bet, or when
to quit turn a fair game into a winning one? This chapter answers these questions with two tools. The first is the
reflection principle, a counting trick that gives exact formulas for the simple random walk. The second is the
martingale, the mathematical form of a fair game, and the optional stopping theorem, which turns "a fair game stays
fair" into a powerful method of calculation. You will use it to solve gambler's ruin in a few lines, to find how long
a monkey at a typewriter needs to type ABRACADABRA, and to prove that no betting system beats a fair game.*

!!! abstract "In this chapter"
    **You will learn:**

    - the simple random walk, the reflection principle and the ballot theorem
    - why long leads are the rule, not the exception: the arcsine law
    - what a martingale is, with the main examples, and conditional expectation given the past
    - stopping times and the optional stopping theorem, with the conditions it needs and a counterexample without them
    - gambler's ruin (fair and biased), expected durations and pattern waiting times by martingales
    - why no betting system beats a fair game, and what goes wrong with the doubling strategy
    - the martingale convergence theorem, with the upcrossing argument, and the Pólya urn

    **You need:** [Chapter 3](03-Conditional-Probability-and-Independence.md) (gambler's ruin by conditioning),
    [Chapter 6](06-Expectation-and-Variance.md) (expectation, variance), [Chapter 8](08-Generating-Functions-in-Probability.md)
    (random walks, return probability, branching processes), [Chapter 11](11-Joint-Distributions.md) (conditional
    expectation and the tower rule) and [Chapter 13](13-Markov-Chains.md) (stopping times, absorbing chains). The
    reflection principle is in [Chapter 8 of the Combinatorics book](../combinatorics/08-Catalan-Numbers-and-Lattice-Paths.md#82-the-reflection-principle).
    Calculus appears only in the limit of 15.1.

    **Levels:** 15.1 is intermediate to advanced; 15.2 is advanced; 15.3 and 15.4 are advanced; 15.5 is advanced to
    expert.

## 15.1 The simple random walk

*Level: intermediate to advanced.*

Let $X_1, X_2, \dots$ be independent, each $+1$ or $-1$ with probability $1/2$, and let

$$
S_0 = 0, \qquad S_n = X_1 + X_2 + \cdots + X_n .
$$

This is the **simple random walk**: the net winnings of the first player after $n$ flips, or the position of a walker
who steps left or right at random. We picture it as a path through the points $(n, S_n)$. Each of the $2^n$ paths of
length $n$ has probability $2^{-n}$, so probability questions about the first $n$ steps are counting questions about
paths. Basic facts (Chapters 6 and 8): $E[S_n] = 0$, $\operatorname{Var}(S_n) = n$, and the walk returns to 0 with
probability 1, but the expected time to return is infinite.

A return to 0 can only happen at an even time. Write

$$
u_{2n} = P(S_{2n} = 0) = \binom{2n}{n} 2^{-2n} \approx \frac{1}{\sqrt{\pi n}},
$$

the last step by Stirling's formula. So $u_2 = 1/2$, $u_4 = 3/8$, $u_{20} \approx 0.176$.

### The reflection principle

**Reflection principle.** Let $a, b > 0$. The number of paths from $(0, a)$ to $(n, b)$ that touch or cross the axis
(height 0) equals the number of all paths from $(0, -a)$ to $(n, b)$.

*Proof.* Take a path from $(0, a)$ to $(n, b)$ that touches 0, and let $k$ be the first time it is at height 0.
Reflect the part before time $k$ in the axis (change the sign of each height before $k$). This gives a path from
$(0, -a)$ to $(n, b)$. Conversely, every path from $(0, -a)$ to $(n, b)$ must cross 0 (it starts below and ends above),
and reflecting its part before its first visit to 0 gives back a path from $(0, a)$ that touches 0. The two maps undo
each other, so they are bijections. $\square$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 170" role="img" aria-label="A walk path in orange starts at height a equals 2, touches height 0 at step 2, then wanders and ends at height b equals 1 at step 9. Its first part, before touching 0, is reflected in the axis as a blue path starting at height minus 2.">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.35">
    <line x1="30" y1="50" x2="300" y2="50"/><line x1="30" y1="70" x2="300" y2="70"/><line x1="30" y1="90" x2="300" y2="90"/>
    <line x1="30" y1="130" x2="300" y2="130"/><line x1="30" y1="150" x2="300" y2="150"/>
  </g>
  <line x1="30" y1="110" x2="310" y2="110" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="30,70 60,90 90,110 120,90 150,70 180,90 210,70 240,50 270,70 300,90" fill="none" stroke="#eea66f" stroke-width="3"/>
  <polyline points="30,150 60,130 90,110" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="90" cy="110" r="4" fill="currentColor"/>
  <text x="22" y="74" text-anchor="end" font-size="13" fill="currentColor">a</text>
  <text x="22" y="154" text-anchor="end" font-size="13" fill="currentColor">−a</text>
  <text x="308" y="94" font-size="13" fill="currentColor">b</text>
  <text x="22" y="114" text-anchor="end" font-size="12" fill="currentColor">0</text>
</svg>
</div>

### The ballot theorem

In an election A gets $a$ votes and B gets $b < a$ votes, counted in a uniformly random order. **The probability that
A is strictly ahead throughout the count is $(a - b)/(a + b)$.** This is Bertrand's ballot theorem (1887). The
Combinatorics book proves it by exactly the reflection above, applied to the count after the first vote (which must be
for A), and tells its honest history. For example, if A wins 6 to 4, the chance that A led all the way is
$2/10 = 1/5$; a brute-force count gives 42 of the $\binom{10}{4} = 210$ orders.

The ballot theorem lets us compute the probability of never returning to 0.

**Theorem.** $P(S_1 > 0, S_2 > 0, \dots, S_{2n} > 0) = \frac{1}{2}u_{2n}$, and hence

$$
P(S_1 \ne 0, S_2 \ne 0, \dots, S_{2n} \ne 0) = u_{2n} = P(S_{2n} = 0).
$$

*Proof.* Split by the endpoint $S_{2n} = 2r$ with $r \ge 1$. A path ending at $2r$ has $n + r$ up steps and $n - r$
down steps, and by the ballot theorem a fraction $\frac{(n+r) - (n-r)}{2n} = \frac{r}{n}$ of these paths stay
strictly positive. So

$$
P(S_1, \dots, S_{2n} > 0) = 2^{-2n}\sum_{r \ge 1} \frac{r}{n}\binom{2n}{n+r}.
$$

Now $\frac{r}{n}\binom{2n}{n+r} = \binom{2n-1}{n+r-1} - \binom{2n-1}{n+r}$ (both sides equal $\binom{2n}{n+r}$ times
$\frac{n+r}{2n} - \frac{n-r}{2n}$, using $\binom{2n-1}{n+r-1} = \frac{n+r}{2n}\binom{2n}{n+r}$ and
$\binom{2n-1}{n+r} = \frac{n-r}{2n}\binom{2n}{n+r}$). The sum telescopes to $\binom{2n-1}{n} = \frac12\binom{2n}{n}$.
Hence the probability is $\frac12 u_{2n}$. By symmetry the probability of staying strictly negative is the same, and
the two add to $u_{2n}$. $\square$

So the chance of no tie at all in 20 flips equals the chance of a tie at flip 20: about $0.176$.

### The arcsine law

Let $L_{2n}$ be the time of the **last** visit to 0 up to time $2n$. Then

$$
P(L_{2n} = 2k) = u_{2k}\, u_{2n-2k}, \qquad k = 0, 1, \dots, n.
$$

*Proof.* $L_{2n} = 2k$ means $S_{2k} = 0$ and then no zero in the next $2n - 2k$ steps. The first has probability
$u_{2k}$; given it, the walk starts afresh from 0, and by the theorem above it avoids 0 for $2n - 2k$ steps with
probability $u_{2n-2k}$. $\square$

This distribution is symmetric about $n$ and largest at the **ends** $k = 0$ and $k = n$, smallest in the middle. The
intuition "after a fair game the last tie was probably recent" is wrong. As $n \to \infty$, using
$u_{2k} \approx 1/\sqrt{\pi k}$, the probabilities become a Riemann sum for the density
$\frac{1}{\pi\sqrt{x(1-x)}}$ on $(0, 1)$, and one obtains:

**Arcsine law (statement).** For $0 \le x \le 1$,

$$
P\left(\frac{L_{2n}}{2n} \le x\right) \to \frac{2}{\pi}\arcsin\sqrt{x}.
$$

The same limit holds for the fraction of time the walk spends above 0. (For finite $n$, the number of steps during which the
path is above the axis, which is always even, equals $2k$ with probability exactly $u_{2k}u_{2n-2k}$; see Feller,
chapter III, and Chung and Feller's 1949 paper.)

**What it means.** The density is U-shaped. With $x = 0.1$, $\frac{2}{\pi}\arcsin\sqrt{0.1} \approx 0.205$. So in a
long fair game, with probability about $2 \times 0.205 \approx 0.41$ one player is ahead at least 90% of the time.
Long leads are not evidence that a game is unfair, or that one player is skillful; they are what fair coins do. Paul
Lévy found the arcsine law for Brownian motion (Chapter 16) in 1939; Paul Erdős and Mark Kac proved limit laws of this
kind for sums of independent variables in 1947.

## 15.2 Martingales

*Level: advanced.*

In a fair game, your expected fortune after the next round, given everything that has happened so far, is your
fortune now. That one sentence is the definition of a martingale.

**Information.** Let $X_1, X_2, \dots$ be the random outcomes of the rounds. Write $\mathcal{F}_n$ for "the
information in $X_1, \dots, X_n$" and $E[Y \mid \mathcal{F}_n]$ for $E[Y \mid X_1, \dots, X_n]$, the **conditional
expectation** of Chapter 11: a random variable that is a function of $X_1, \dots, X_n$, whose value when
$X_1 = x_1, \dots, X_n = x_n$ is the expectation of $Y$ given those values. We use three of its properties, all proved
in Chapter 11 for discrete variables:

- **taking out what is known:** if $Z$ is a function of $X_1, \dots, X_n$, then $E[ZY \mid \mathcal{F}_n] = Z\,E[Y \mid \mathcal{F}_n]$;
- **the tower rule:** $E\big[E[Y \mid \mathcal{F}_n]\big] = E[Y]$, and more generally $E\big[E[Y \mid \mathcal{F}_{n+1}] \mid \mathcal{F}_n\big] = E[Y \mid \mathcal{F}_n]$;
- **independence:** if $Y$ is independent of $X_1, \dots, X_n$, then $E[Y \mid \mathcal{F}_n] = E[Y]$.

**Definition.** A sequence $M_0, M_1, M_2, \dots$, where each $M_n$ is a function of $X_1, \dots, X_n$ (we say $M$ is
**adapted**) with $E|M_n| < \infty$, is a **martingale** if

$$
E[M_{n+1} \mid \mathcal{F}_n] = M_n \quad \text{for every } n.
$$

It is a **supermartingale** if $E[M_{n+1} \mid \mathcal{F}_n] \le M_n$ (an unfavourable game: every casino game,
from the player's side) and a **submartingale** if $\ge$ (a favourable game).

Taking expectations of the definition and using the tower rule, $E[M_{n+1}] = E[M_n]$, so **a martingale has constant
expectation**: $E[M_n] = E[M_0]$ for every fixed $n$. The question of 15.3 is what happens at random times.

**Example 1 (sums of fair bets).** If $X_k$ are independent with mean 0 and $S_n = X_1 + \cdots + X_n$, then $S_n$ is a
martingale: $E[S_{n+1} \mid \mathcal{F}_n] = S_n + E[X_{n+1}] = S_n$ (taking out what is known, and independence).

**Example 2 ($S_n^2 - n$).** For the simple random walk, $M_n = S_n^2 - n$ is a martingale.

*Proof.* $S_{n+1}^2 = S_n^2 + 2S_nX_{n+1} + X_{n+1}^2 = S_n^2 + 2S_nX_{n+1} + 1$. So
$E[S_{n+1}^2 \mid \mathcal{F}_n] = S_n^2 + 2S_nE[X_{n+1}] + 1 = S_n^2 + 1$, and subtracting $n + 1$ gives $S_n^2 - n$.
$\square$

More generally, for independent steps with mean 0 and variance $\sigma^2$, $S_n^2 - n\sigma^2$ is a martingale.

**Example 3 (biased walk).** Let the steps be $+1$ with probability $p$ and $-1$ with probability $q = 1 - p$, with
$p \ne 1/2$. Then $S_n - n(p - q)$ is a martingale (subtract the drift), and so is

$$
M_n = \left(\frac{q}{p}\right)^{S_n}.
$$

*Proof.* $E[M_{n+1} \mid \mathcal{F}_n] = M_n\, E[(q/p)^{X_{n+1}}] = M_n\left(p \cdot \frac{q}{p} + q \cdot
\frac{p}{q}\right) = M_n(q + p) = M_n$. $\square$

**Example 4 (products).** If $Y_k$ are independent, positive, with $E[Y_k] = 1$, then $M_n = Y_1 Y_2 \cdots Y_n$ is a
martingale. Example 3 is a case of this. Another: with $Z$ standard normal and any $\theta$, $Y = e^{\theta Z -
\theta^2/2}$ has mean 1 (Chapter 10); it reappears in Chapter 16 as the exponential martingale of Brownian motion.

**Example 5 (Pólya's urn).** An urn holds one red and one blue ball. Repeatedly draw a ball at random, then return it
together with one more ball of the same colour. After $n$ draws there are $n + 2$ balls; let $R_n$ be the number of
red ones and $M_n = R_n/(n+2)$ the fraction of red. Then $M_n$ is a martingale.

*Proof.* Given the past, the next draw is red with probability $M_n$, and then $R_{n+1} = R_n + 1$; otherwise
$R_{n+1} = R_n$. So
$E[R_{n+1} \mid \mathcal{F}_n] = R_n + M_n = R_n + \frac{R_n}{n+2} = R_n\frac{n+3}{n+2}$, and dividing by $n + 3$
gives $E[M_{n+1} \mid \mathcal{F}_n] = M_n$. $\square$

**Example 6 (Doob's martingale: revealing information).** For any $Y$ with $E|Y| < \infty$, $M_n = E[Y \mid
\mathcal{F}_n]$ is a martingale, by the tower rule. It is your best guess of $Y$ as information arrives. For instance,
$Y$ could be the chromatic number of a random graph, and $\mathcal{F}_n$ the information about the edges at the first
$n$ vertices; this is the start of the concentration inequalities of [Chapter 20](20-Where-Probability-Goes.md).

**Example 7 (branching processes).** In a Galton-Watson process (Chapter 8) with mean offspring number $m$, the
population $Z_n$ satisfies $E[Z_{n+1} \mid \mathcal{F}_n] = mZ_n$, so $Z_n/m^n$ is a martingale.

**A short history.** "Martingale" was the name of a betting system (the doubling strategy of 15.4). Jean Ville
introduced the word into probability in his 1939 thesis; Paul Lévy had studied such sequences before; Joseph Doob built
the general theory, presented in his 1953 book *Stochastic Processes*, including the optional stopping and convergence
theorems of this chapter.

## 15.3 Optional stopping

*Level: advanced.*

A gambler plays a fair game but quits at a random time chosen by a rule: "stop when I am 10 dollars up or broke". Is
the game still fair at the moment of quitting?

**Stopping times.** A random time $T \in \{0, 1, 2, \dots\} \cup \{\infty\}$ is a **stopping time** if for each $n$,
whether $T = n$ is decided by $X_1, \dots, X_n$ (no peeking into the future). "The first time $S_n$ hits 10 or
$-5$" is a stopping time; "the time of the maximum of $S_0, \dots, S_{100}$" is not (you only know it at the end).

**Theorem (optional stopping).** Let $M$ be a martingale and $T$ a stopping time. Then $E[M_T] = E[M_0]$ if any one of
the following holds:

1. $T$ is bounded: $T \le K$ for a constant $K$;
2. $T < \infty$ with probability 1, and the stopped process is bounded: $|M_{\min(n, T)}| \le C$ for all $n$;
3. $E[T] < \infty$, and the increments are bounded: $|M_{n+1} - M_n| \le C$ for all $n$.

For a supermartingale, under the same conditions, $E[M_T] \le E[M_0]$.

*Proof.* (1) Write $M_T = M_0 + \sum_{k=0}^{K-1}(M_{k+1} - M_k)\,\mathbf{1}\{T > k\}$ (the sum adds exactly the
increments up to time $T$). The event $\{T > k\}$ is the complement of $\{T \le k\}$, so it is decided by
$X_1, \dots, X_k$. Taking out what is known,

$$
E\big[(M_{k+1} - M_k)\mathbf{1}\{T > k\}\big] = E\big[\mathbf{1}\{T > k\}\,E[M_{k+1} - M_k \mid \mathcal{F}_k]\big] = 0 .
$$

Summing, $E[M_T] = E[M_0]$. (For a supermartingale each term is $\le 0$.)

(2) and (3): for each $n$, $\min(n, T)$ is a bounded stopping time, so by (1) $E[M_{\min(n,T)}] = E[M_0]$. As
$n \to \infty$, $M_{\min(n,T)} \to M_T$ because $T$ is finite. We need to exchange limit and expectation. In case (2)
the variables are bounded by $C$; in case (3), $|M_{\min(n,T)}| \le |M_0| + CT$, which has finite expectation. Either
way the **dominated convergence theorem** (proved in [Chapter 17](17-Measure-Theoretic-Probability.md); it says that if
$Y_n \to Y$ and all $|Y_n| \le Z$ with $E[Z] < \infty$, then $E[Y_n] \to E[Y]$) gives $E[M_T] = \lim E[M_{\min(n,T)}]
= E[M_0]$. $\square$

**The conditions matter.** Let $S$ be the simple random walk and $T$ the first time $S_n = 1$. The walk is recurrent,
so $T < \infty$ with probability 1, and $S_T = 1$ always. So $E[S_T] = 1 \ne 0 = E[S_0]$. Which condition fails? $T$
is unbounded; the stopped walk is not bounded below (before reaching 1 it can go arbitrarily far down); and $E[T] =
\infty$ (Chapter 8). Optional stopping is not a law of nature; it is a theorem with hypotheses.

### Gambler's ruin, again

Chapter 3 solved gambler's ruin by conditioning on the first step and solving a recurrence. Martingales do it with
almost no computation.

**Fair game.** Start the simple random walk at $k$ (so $S_0 = k$), with $0 < k < N$, and stop at $T$, the first time
$S_n \in \{0, N\}$. From any position, $N$ consecutive up steps end the game, so $P(T > jN) \le (1 - 2^{-N})^j$ and
$E[T] < \infty$. The stopped walk stays in $[0, N]$, so condition 2 holds. With $p_N = P(S_T = N)$:

$$
k = E[S_0] = E[S_T] = N p_N + 0 \cdot (1 - p_N), \qquad\text{so}\qquad p_N = \frac{k}{N}.
$$

**Expected duration.** Apply optional stopping to $S_n^2 - n$, which has bounded increments while the walk is in
$[0, N]$ ($|S_{n+1}^2 - S_n^2 - 1| \le 2N$), and $E[T] < \infty$: condition 3. So $E[S_T^2 - T] = k^2$, and

$$
E[T] = E[S_T^2] - k^2 = N^2 \cdot \frac{k}{N} - k^2 = k(N - k).
$$

Check: $k = 1$, $N = 4$ gives 3, matching the fundamental matrix in Chapter 13.

**Biased game.** With $p \ne 1/2$ and $r = q/p$, use $M_n = r^{S_n}$, which is bounded on $[0, N]$:

$$
r^k = E[r^{S_T}] = p_N\, r^N + (1 - p_N)\, r^0, \qquad\text{so}\qquad p_N = \frac{1 - r^k}{1 - r^N}.
$$

Then $S_n - n(p - q)$ has bounded increments, so $E[S_T] - (p - q)E[T] = k$, giving

$$
E[T] = \frac{N p_N - k}{p - q} .
$$

**Worked example 1 (roulette).** A bet on red in American roulette wins with probability $p = 18/38$. You start with
10 dollars, bet 1 dollar at a time, and stop at 20 dollars or ruin. Then $r = 20/18$, and

$$
p_{20} = \frac{1 - (10/9)^{10}}{1 - (10/9)^{20}} \approx 0.259, \qquad E[T] = \frac{20 \times 0.2585 - 10}{18/38 - 20/38} \approx 91.8 \text{ bets}.
$$

In a fair game the chance would be $1/2$ and the expected duration 100 bets. Start with 50 dollars and aim for 100,
and the chance falls to about $0.005$: a small house edge, applied many times, is crushing. (Betting everything at
once on red, by contrast, gives $18/38 \approx 0.47$ of doubling: bold play is better than timid play in an
unfavourable game.)

### Waiting for a pattern

How many letters must a monkey type, each uniform among 26 and independent, until ABRACADABRA first appears? Shuo-Yen
Robert Li (1980) found a martingale answer.

*The argument.* Before each letter is typed, a new gambler arrives with 1 dollar and bets it, at fair odds, that this
letter is A. If she wins, she has 26 dollars, and bets all of it that the next letter is B; if she wins again, she bets
her 676 dollars on R; and so on through the pattern ABRACADABRA, until she loses (and leaves with nothing) or the
pattern is complete. Every bet is fair, so the casino's profit after $n$ letters, $n$ minus the gamblers' total
holdings, is a martingale. Let $T$ be the time ABRACADABRA is completed. At that moment, which gamblers hold money?

- the one who started 11 letters ago and has won every bet: $26^{11}$ dollars;
- the one who started 4 letters ago, on the final ABRA, which is also the start of the pattern: $26^4$ dollars;
- the one who started on the final A: $26$ dollars;
- everyone else has lost.

The casino's profit at time $T$ is $T - (26^{11} + 26^4 + 26)$. Optional stopping (condition 3: $T$ has a geometric
tail, so $E[T] < \infty$, and only a bounded number of gamblers are active at once, so the increments are bounded)
says its expectation is 0. Hence

$$
E[T] = 26^{11} + 26^4 + 26 = 3{,}670{,}344{,}487{,}444{,}778 .
$$

The rule: add $m^{j}$ (for an alphabet of $m$ letters) for each $j$ such that the last $j$ letters of the pattern
equal its first $j$ letters, including $j$ = the full length. For coins, $m = 2$: HH gives $4 + 2 = 6$, HT gives $4$,
HTH gives $8 + 2 = 10$, HHH gives $8 + 4 + 2 = 14$, all in agreement with the Markov chain computations of Chapter 13.

## 15.4 No betting system beats a fair game

*Level: advanced.*

A **betting system** decides, before each round, how much to stake, using only what has happened so far. Let $X_n$ be
the outcome per dollar of round $n$ (for a fair coin, $\pm 1$). The stake on round $n$ is $H_n$, a function of
$X_1, \dots, X_{n-1}$ (such a sequence is called **predictable**). Your total winnings after $n$ rounds are

$$
W_n = \sum_{k=1}^{n} H_k X_k .
$$

In the language of martingales, $W$ is the **martingale transform** of $S_n = X_1 + \cdots + X_n$ by $H$, written
$(H \cdot S)_n$; it is the discrete form of the stochastic integral of Chapter 16.

**Theorem.** If $S$ is a martingale and each $H_n$ is bounded, then $W = H \cdot S$ is a martingale. If $S$ is a
supermartingale and $0 \le H_n \le C$, then $W$ is a supermartingale.

*Proof.* $W_{n+1} - W_n = H_{n+1}(S_{n+1} - S_n)$. Since $H_{n+1}$ is a function of the first $n$ outcomes,
taking out what is known gives $E[W_{n+1} - W_n \mid \mathcal{F}_n] = H_{n+1}\,E[S_{n+1} - S_n \mid \mathcal{F}_n]$,
which is 0 for a martingale and $\le 0$ for a supermartingale when $H_{n+1} \ge 0$. Bounded stakes keep $E|W_n|$
finite. $\square$

So $E[W_n] = 0$ for every $n$, whatever the system; combined with optional stopping, also at any bounded quitting
time, or any quitting time under conditions 2 or 3. Varying the stakes, skipping rounds (stake 0), quitting while
ahead: none of these changes a fair game into a favourable one, and in an unfavourable game none of them (with stakes
of the right sign) makes the expectation positive. This is the mathematical content behind "the house always wins".
It is also the content of the gambler's fallacy discussion of [Chapter 7](07-Inequalities-and-the-Law-of-Large-Numbers.md):
no pattern of past results can be exploited, because the stake is chosen before an outcome that is independent of it.

**The doubling strategy.** Bet 1 dollar on a fair coin; after a loss, double the stake; stop at the first win. If the
first win comes at round $k$, you have lost $1 + 2 + \cdots + 2^{k-2} = 2^{k-1} - 1$ and win $2^{k-1}$: a net gain of
exactly 1 dollar. The first win comes eventually with probability 1. So you gain 1 dollar with probability 1, from a
fair game!

The theorem is not contradicted; its conditions fail. The quitting time is unbounded, and the stopped winnings are not
bounded below: before the first win you can be down any amount. Real gamblers have finite wealth (and casinos impose
table limits). Suppose you can afford at most 10 losses in a row, that is $1 + 2 + \cdots + 512 = 1023$ dollars. Then
the strategy wins 1 dollar with probability $1 - 2^{-10}$ and loses 1023 dollars with probability $2^{-10}$, and

$$
\left(1 - \frac{1}{1024}\right) \times 1 - \frac{1}{1024} \times 1023 = \frac{1023}{1024} - \frac{1023}{1024} = 0 .
$$

The expected gain is exactly 0, as the theorem says: the strategy trades a high chance of a small gain for a small
chance of a ruinous loss. In real roulette, with $p < 1/2$, the expectation is negative. Even with unlimited credit,
the stake you need is $2^{k-1}$ at a geometric time $k$, whose expectation $\sum_k 2^{k-1}2^{-k}$ is infinite.

## 15.5 Martingale convergence

*Level: advanced to expert.*

The fraction of red balls in Pólya's urn changes at every draw, by less and less. Does it settle down? To what?

**Theorem (martingale convergence, Doob).** Let $M$ be a martingale (or supermartingale) with $\sup_n E|M_n| <
\infty$. Then $M_n$ converges with probability 1 to a finite random limit $M_\infty$. In particular, **every
nonnegative supermartingale converges** with probability 1 (because $E|M_n| = E[M_n] \le E[M_0]$).

The limit is random in general. The theorem says a fair game with bounded expected size cannot keep oscillating
forever; it may, of course, converge to something different for each run.

### The upcrossing argument

Fix numbers $a < b$. An **upcrossing** of $[a, b]$ is a stretch during which the sequence goes from at or below $a$ to
at or above $b$. Let $U_n$ be the number of completed upcrossings by time $n$.

**Upcrossing inequality.** For a supermartingale, $(b - a)\,E[U_n] \le E[(M_n - a)^-]$, where $x^- = \max(-x, 0)$.

*Proof.* Use the betting system "buy low, sell high": hold one unit of $M$ (stake $H_k = 1$) from the first time
$M \le a$ until the next time $M \ge b$, then hold nothing until $M \le a$ again, and so on. The decision to hold
during round $k$ depends only on the past, so $H$ is predictable, with $0 \le H_k \le 1$. Each completed upcrossing
earns at least $b - a$; an unfinished one at the end can lose at most $(M_n - a)^-$. So the winnings satisfy
$W_n \ge (b - a)U_n - (M_n - a)^-$. By the theorem of 15.4, $W$ is a supermartingale starting at 0, so
$E[W_n] \le 0$. Rearranging gives the inequality. $\square$

*Proof of the convergence theorem.* By the upcrossing inequality, $E[U_n] \le \frac{|a| + \sup_n E|M_n|}{b - a}$,
which is bounded in $n$. So the total number of upcrossings $U_\infty = \lim U_n$ has finite expectation, hence is
finite with probability 1. If $M_n$ failed to converge, then $\liminf M_n < \limsup M_n$, and there would be rationals
$a < b$ strictly between them; the sequence would cross $[a, b]$ upward infinitely often. For each of the countably
many pairs of rationals this has probability 0, so with probability 1 $M_n$ converges, to a limit in
$[-\infty, \infty]$. Fatou's lemma ([Chapter 17](17-Measure-Theoretic-Probability.md)) gives
$E|M_\infty| \le \sup E|M_n| < \infty$, so the limit is finite. $\square$

### Applications

**Pólya's urn.** The fraction $M_n$ lies in $[0, 1]$, so it converges with probability 1 to a limit $M_\infty$. Which
limit? A direct computation shows that **after $n$ draws the number of red balls is uniform on $\{1, 2, \dots,
n+1\}$.** Indeed, any particular sequence with $j$ red draws and $n - j$ blue ones has probability

$$
\frac{j!\,(n-j)!}{(n+1)!},
$$

whatever the order: the numerators collect $1 \cdot 2 \cdots j$ for the red draws and $1 \cdot 2 \cdots (n-j)$ for the
blue, the denominators $2 \cdot 3 \cdots (n+1)$. Multiplying by the $\binom{n}{j}$ orders gives $\frac{1}{n+1}$ for
each $j = 0, \dots, n$. So $M_n = (j+1)/(n+2)$ is uniform on $n+1$ equally spaced points, and the limit $M_\infty$ is
**uniform on $[0, 1]$.** Each run of the urn settles down, but to a fraction chosen at random by the early draws. This
is a simple model of "rich get richer" or path dependence: early luck is locked in.

**Fair gambling against an infinitely rich opponent.** Start the simple random walk at $k > 0$ and stop it at 0. The
stopped walk $S_{\min(n, T)}$ is a nonnegative martingale, so it converges. But a walk that has not stopped moves by
1 at every step and cannot converge; so it must stop. **The gambler is ruined with probability 1**, even though
$E[S_{\min(n,T)}] = k$ for every $n$. The limit is 0 while the expectations stay at $k$: convergence with probability 1
does not imply convergence of expectations. The extra condition that does is **uniform integrability**
(Chapter 17); the optional stopping theorem's conditions 2 and 3 are ways of guaranteeing it.

**Branching processes.** $Z_n/m^n$ is a nonnegative martingale, so it converges to a limit $W$. If $m \le 1$ the
population dies out (Chapter 8) and $W = 0$. If $m > 1$ and $E[Z_1^2] < \infty$, one can show $E[W] = 1$ and the
population grows like $W m^n$, with a random constant fixed by the early generations.

**What else martingales do.** Beyond these: Azuma's inequality (a Chernoff bound for martingales with bounded
increments, the tool behind concentration results in random graphs and algorithms, Chapter 20); Doob's maximal
inequality $P(\max_{k \le n} M_k \ge \lambda) \le E|M_n|/\lambda$ for martingales; the martingale central limit
theorem; and in continuous time, Brownian motion and the stochastic integral of Chapter 16, where martingales become
the language of mathematical finance.

## Check yourself

??? question "1. For the simple random walk, compute $u_4$ and $u_6$, and check that $P(S_1, S_2, S_3, S_4 \ne 0) = u_4$ by listing paths."

    $u_4 = \binom42/16 = 6/16 = 3/8$, $u_6 = \binom63/64 = 20/64 = 5/16$. Paths of length 4 that never return to 0:
    take those that start up; they must stay at height $\ge 1$. After U, a D would hit 0, so the second step is U
    (height 2). The last two steps can be UU, UD or DU, but not DD (which ends at 0). So UUUU, UUUD, UUDU: three
    paths, and by symmetry three that start down. That is 6 of 16 paths, $6/16 = 3/8 = u_4$.

??? question "2. A wins an election 7 votes to 3. What is the probability A led throughout the count?"

    $(7 - 3)/(7 + 3) = 0.4$. (Of the $\binom{10}{3} = 120$ orders, 48.)

??? question "3. In 20 fair coin flips, what is the probability that the last time the totals were tied was at flip 10? At flip 0?"

    $P(L_{20} = 10) = u_{10}u_{10} = (252/1024)^2 \approx 0.0606$. $P(L_{20} = 0) = u_0u_{20} = u_{20} \approx 0.176$.
    The "no tie after the start" outcome is almost three times as likely as "last tie exactly halfway".

??? question "4. Show that if $X_k$ are independent with mean 0 and variance $\sigma^2$, then $S_n^2 - n\sigma^2$ is a martingale."

    $E[S_{n+1}^2 \mid \mathcal{F}_n] = S_n^2 + 2S_nE[X_{n+1}] + E[X_{n+1}^2] = S_n^2 + \sigma^2$, using that $S_n$ is
    known and $X_{n+1}$ is independent of the past. Subtract $(n+1)\sigma^2$.

??? question "5. A fair gambler starts with 3 dollars and plays until she has 10 dollars or is broke. Find the probability she reaches 10 and the expected number of rounds."

    $p_{10} = 3/10$ and $E[T] = k(N - k) = 3 \times 7 = 21$ rounds.

??? question "6. Repeat question 5 for a game won with probability $p = 0.6$ per round."

    $r = q/p = 2/3$. $p_{10} = \dfrac{1 - (2/3)^3}{1 - (2/3)^{10}} = \dfrac{19/27}{1 - 1024/59049} \approx \dfrac{0.7037}{0.9827} \approx 0.716$.
    $E[T] = (10 \times 0.7161 - 3)/(0.6 - 0.4) \approx 20.8$ rounds.

??? question "7. Use Li's rule to find the expected number of fair coin flips until THTH appears, and the expected number of rolls of a fair die until 6 6 appears."

    THTH: check each length $j$. $j = 4$: the whole pattern, always counts. $j = 3$: the last three letters HTH differ
    from the first three THT. $j = 2$: TH equals TH. $j = 1$: H differs from T. So $E = 2^4 + 2^2 = 20$.
    Die, pattern 66: lengths 2 and 1 both match, so $E = 6^2 + 6 = 42$.

??? question "8. Let $T$ be the first time the simple random walk hits 1. Why does optional stopping fail for $S$ at $T$, while it works for $\min(T, n)$?"

    $\min(T, n)$ is bounded, so condition 1 holds and $E[S_{\min(T,n)}] = 0$ for every $n$. At $T$ itself, $S_T = 1$, so
    $E[S_T] = 1$. All three conditions fail: $T$ is unbounded, $E[T] = \infty$, and $S_{\min(T,n)}$ is not bounded
    below. The expectation 0 is kept, for each $n$, by rare paths that are far below 0 at time $n$.

??? question "9. In Pólya's urn starting with one red and one blue ball, what is the probability that the first three draws are red, red, blue? What is the probability that after 3 draws there are exactly 2 red balls in the urn?"

    Red, red, blue: $\frac12 \cdot \frac23 \cdot \frac14 = \frac1{12}$, which matches $j!(n-j)!/(n+1)! = 2!\,1!/4! = 1/12$.
    Two red balls after 3 draws means $j = 1$ red draw: probability $\frac{1}{n+1} = \frac14$.

??? question "10. A gambler bets on a fair coin and uses the rule: bet 1 dollar after a loss, 2 dollars after a win, at most 100 rounds. Show her expected gain is 0."

    The stake $H_n$ depends only on the previous outcome, so it is predictable, and it is bounded by 2. By the theorem
    of 15.4, $W_n = \sum H_kX_k$ is a martingale with $W_0 = 0$, and stopping at the bounded time 100 gives
    $E[W_{100}] = 0$ by optional stopping (condition 1).

??? question "11. Show that for the simple random walk and any $\theta$, $M_n = e^{\theta S_n}/(\cosh\theta)^n$ is a martingale, and use it to find $E[s^T]$ for $T$ the first time the walk hits 1, for $0 < s < 1$."

    $E[e^{\theta X}] = \frac12(e^\theta + e^{-\theta}) = \cosh\theta$, so $M$ is a product of independent mean-one
    factors (Example 4). For $\theta > 0$, $M_{\min(n,T)} \le e^\theta$ is bounded (the walk is at most 1 before $T$,
    and $\cosh\theta \ge 1$), and on $\{T = \infty\}$ it tends to 0; so $e^\theta E[(\cosh\theta)^{-T}] = 1$. Put
    $s = 1/\cosh\theta$: $E[s^T] = e^{-\theta}$, where $e^{\theta} + e^{-\theta} = 2/s$, so
    $e^{-\theta} = \dfrac{1 - \sqrt{1 - s^2}}{s}$. This is the generating function of the first passage time found in Chapter 8.

## What you learned

- The reflection principle turns questions about random walk paths into counting; with it come the ballot theorem
  and $P(\text{no return to 0 by } 2n) = P(S_{2n} = 0)$.
- The arcsine law: in a long fair game the last tie is most likely near the start or the end, and one player usually
  leads for most of the time.
- A martingale is a fair game: $E[M_{n+1} \mid \mathcal{F}_n] = M_n$. Key examples: $S_n$, $S_n^2 - n$, $(q/p)^{S_n}$,
  Pólya's urn, Doob's revealing martingale.
- Optional stopping, $E[M_T] = E[M_0]$, holds for bounded $T$, for bounded stopped processes, or for $E[T] < \infty$
  with bounded increments, and fails without such conditions.
- It solves gambler's ruin ($k/N$, $k(N-k)$, and the biased versions) and pattern waiting times ($26^{11} + 26^4 + 26$
  for ABRACADABRA).
- No predictable betting system changes the expectation of a fair game; the doubling strategy only trades a likely
  small gain for a rare huge loss.
- $L^1$-bounded martingales converge, by the upcrossing argument; Pólya's urn converges to a uniform random limit.

**Next:** [Chapter 16](16-Brownian-Motion.md), the continuous limit of the random walk: Brownian motion.

## Further reading

- W. Feller, *An Introduction to Probability Theory and Its Applications*, Volume 1, 3rd edition, Wiley, 1968,
  chapter III ("Fluctuations in coin tossing and random walks"), the classic source for the reflection principle and
  the arcsine law.
- D. Williams, *Probability with Martingales*, Cambridge University Press, 1991. A short, lively, rigorous course; the
  ABRACADABRA problem is one of its exercises.
- J. L. Doob, *Stochastic Processes*, Wiley, 1953.
- R. Durrett, *Probability: Theory and Examples*, 5th edition, Cambridge University Press, 2019, chapter 4.
- S.-Y. R. Li, "A martingale approach to the study of occurrence of sequence patterns in repeated experiments",
  *Annals of Probability* 8(6), 1980.
- K. L. Chung and W. Feller, "On fluctuations in coin-tossing", *Proceedings of the National Academy of Sciences* 35,
  1949.
- On this site: [Catalan numbers and lattice paths](../combinatorics/08-Catalan-Numbers-and-Lattice-Paths.md) (the
  reflection principle and the ballot theorem in the Combinatorics book),
  [Random walks and Markov chains](../../topics/probability/level-8/06-random-walks-markov.md) (gentler),
  [The gambler's fallacy](../../topics/probability/level-5/06-gamblers-fallacy.md),
  [Chapter 13](13-Markov-Chains.md) and the [Probability book's contents](index.md).
