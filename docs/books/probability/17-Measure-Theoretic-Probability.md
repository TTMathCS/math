# 17. Measure-theoretic probability

*Pick a number "uniformly at random" from the interval from 0 to 1. What is the probability that it lands in a given set
of numbers? For an interval the answer is its length, and for a finite union of intervals you add the lengths. But a
set of real numbers can be far stranger than a union of intervals, and toss a coin forever and the "set of outcomes"
is uncountable, so you cannot add up the chances of single outcomes. For three hundred years probability got by
without facing this. In 1933 Andrey Kolmogorov rebuilt the whole subject on measure theory, and that is the language
every research paper in probability uses today. In this chapter you will see why some sets cannot be given a
probability at all, learn the words (sigma-algebra, measure, measurable function, integral), meet the four ways a
sequence of random variables can converge and the examples that tell them apart, prove the two Borel-Cantelli
lemmas and the strong law of large numbers (with a fourth-moment condition), and state Kolmogorov's zero-one law.*

!!! abstract "In this chapter"
    **You will learn:**

    - why no probability can be assigned to every subset of $[0,1]$ in a fair, countably additive way (Vitali's set)
    - sigma-algebras, measures and probability spaces, and how they encode "what can be known"
    - random variables as measurable functions, and expectation as a Lebesgue integral, with the monotone and dominated convergence theorems
    - the four modes of convergence (almost sure, in probability, in $L^p$, in distribution), which imply which, and counterexamples for the rest
    - the two Borel-Cantelli lemmas, with proofs, and the infinite monkey theorem
    - a full proof of the strong law of large numbers when the fourth moment is finite
    - Kolmogorov's zero-one law for tail events

    **You need:** the axioms of [Chapter 1](01-What-Probability-Is.md), expectation and variance from
    [Chapter 6](06-Expectation-and-Variance.md), Markov's and Chebyshev's inequalities and the weak law from
    [Chapter 7](07-Inequalities-and-the-Law-of-Large-Numbers.md), densities from
    [Chapter 9](09-Continuous-Random-Variables.md), and the statement of the strong law from
    [Chapter 12](12-The-Central-Limit-Theorem.md). Calculus is assumed, and comfort with sequences, limits and
    countable versus uncountable sets helps.

    **Levels:** 17.1 and 17.2 are advanced; 17.3 to 17.6 are expert (first-year graduate level).

## 17.1 Why we need measure

*Level: advanced.*

Two problems forced probability onto new foundations.

**Problem 1: infinitely many coin tosses.** Toss a fair coin forever. An outcome is an infinite sequence of H and T,
such as HTTHHTHT... The set $\Omega$ of all such sequences is uncountable: it is in one-to-one correspondence with the
binary expansions of numbers in $[0,1]$. Every single sequence has probability 0, because the chance of matching its
first $n$ tosses is $2^{-n}$, and that goes to 0. So we cannot find the probability of an event by adding up the
probabilities of its outcomes, as we did for dice and cards: adding uncountably many zeros means nothing, and if it
meant anything it would give 0 for the whole space, whose probability is 1.

Yet we want to ask questions like: what is the probability that the proportion of heads tends to $1/2$? The strong law
([Chapter 12](12-The-Central-Limit-Theorem.md)) says 1. For that sentence even to make sense we need a rule that assigns
probabilities to such complicated sets of infinite sequences.

**Problem 2: a uniform point on a circle.** Let $U$ be a uniform random point of $[0,1)$, and think of $[0,1)$ as a
circle by gluing 0 to 1, so that adding a number "mod 1" rotates it. What should a probability $P$ on subsets of
$[0,1)$ satisfy?

1. $P([a,b)) = b - a$ for $0 \le a \le b \le 1$: intervals get their length.
2. **Rotation invariance:** if $A + r$ means the set $A$ rotated by $r$ (every point shifted by $r$, mod 1), then
   $P(A + r) = P(A)$. A uniform point should not prefer one part of the circle.
3. **Countable additivity:** if $A_1, A_2, \ldots$ are disjoint, $P(A_1 \cup A_2 \cup \cdots) = P(A_1) + P(A_2) + \cdots$.

Countable additivity is not a luxury. Without it you could not even prove that $P(\{U \text{ is rational}\}) = 0$, or
pass to limits as the strong law does.

**Theorem 17.1 (Vitali, 1905).** There is no function $P$ defined on *all* subsets of $[0,1)$ that satisfies 1, 2
and 3.

*Proof.* Call two numbers $x, y \in [0,1)$ **equivalent** if $x - y$ is rational. This splits $[0,1)$ into disjoint
classes: each class is a rotated copy of the rationals, $x + \mathbb{Q}$ (mod 1), so each class is countable, and since
$[0,1)$ is uncountable there are uncountably many classes. Using the **axiom of choice**, choose one number from each
class, and let $V$ be the set of chosen numbers.

Let $r_1, r_2, r_3, \ldots$ list the rationals in $[0,1)$, and let $V_k = V + r_k$ (mod 1).

- The sets $V_k$ are disjoint. If $x \in V_j \cap V_k$, then $x = v + r_j = w + r_k$ (mod 1) with $v, w \in V$. Then
  $v - w$ is rational, so $v$ and $w$ are in the same class; but $V$ has exactly one point from each class, so $v = w$,
  and then $r_j = r_k$, so $j = k$.
- The sets $V_k$ cover $[0,1)$. Any $x$ is equivalent to the chosen point $v$ of its class, so $x - v$ is a rational
  $r_k$ (mod 1), and $x \in V_k$.

So $[0,1)$ is the disjoint union of the countably many sets $V_1, V_2, \ldots$, and by rotation invariance all have the
same probability $c = P(V)$. Countable additivity gives

$$
1 = P([0,1)) = \sum_{k=1}^{\infty} P(V_k) = c + c + c + \cdots .
$$

If $c = 0$ the right side is 0; if $c > 0$ it is infinite. Neither is 1. $\square$

The set $V$ is called a **Vitali set**. It is not "too big" or "too small"; it is too scattered to have a length. Two
honest remarks about the proof:

- It uses the axiom of choice, which picks one point from each of uncountably many classes without saying how.
  Robert Solovay showed in 1970 that this is unavoidable: if a certain large-cardinal assumption is consistent, there
  is a model of set theory without full choice in which *every* subset of the real line is Lebesgue measurable. Nobody
  will ever write down a Vitali set explicitly.
- The conclusion is not that probability is broken. It is that we must give up assigning a probability to *every*
  set, and choose instead a family of sets, big enough for everything we want to ask, on which probabilities behave.
  That family is a sigma-algebra.

## 17.2 Sigma-algebras and measures

*Level: advanced.*

### Sigma-algebras

**Definition.** Let $\Omega$ be a set (the **sample space**). A **sigma-algebra** (written $\sigma$-algebra) on
$\Omega$ is a collection $\mathcal{F}$ of subsets of $\Omega$ such that

1. $\Omega \in \mathcal{F}$;
2. if $A \in \mathcal{F}$, then its complement $A^c = \Omega \setminus A$ is in $\mathcal{F}$;
3. if $A_1, A_2, \ldots \in \mathcal{F}$ (a countable list), then $A_1 \cup A_2 \cup \cdots \in \mathcal{F}$.

The sets in $\mathcal{F}$ are the **events** (or **measurable sets**). The word "sigma" (Greek letter $\sigma$) stands
for "sum" and means "countable unions allowed". From the three rules you also get $\emptyset = \Omega^c$, countable
intersections (by De Morgan, $\bigcap A_n = (\bigcup A_n^c)^c$), and differences $A \setminus B = A \cap B^c$.

**Examples.**

- The **power set** $2^\Omega$ (all subsets) is a $\sigma$-algebra. For a finite or countable $\Omega$ it is the one
  we always used in Chapters 1 to 8.
- The **trivial** $\sigma$-algebra $\{\emptyset, \Omega\}$.
- **Generated by a partition.** Split $\Omega$ into $k$ disjoint nonempty blocks $B_1, \ldots, B_k$. The collection of
  all unions of blocks is a $\sigma$-algebra with exactly $2^k$ members. (Each union is fixed by which blocks it uses,
  $2^k$ choices; complements and unions of unions of blocks are again unions of blocks.)

**Why a sigma-algebra is "what you know".** Roll a die but only learn whether the result is even. The events whose
occurrence you can decide are $\emptyset$, $\{2,4,6\}$, $\{1,3,5\}$, $\Omega$: the $\sigma$-algebra generated by the
partition into evens and odds. Learning more means a bigger $\sigma$-algebra. In Chapter 15 a martingale was a fair
game "given the past"; in the full theory "the past up to time $n$" is a $\sigma$-algebra $\mathcal{F}_n$, and the
growing sequence $\mathcal{F}_0 \subseteq \mathcal{F}_1 \subseteq \cdots$ is called a **filtration**.

**Generated sigma-algebras.** Any intersection of $\sigma$-algebras on $\Omega$ is again a $\sigma$-algebra (each of
the three rules survives intersection). So for any collection $\mathcal{C}$ of subsets there is a smallest
$\sigma$-algebra containing it, the intersection of all $\sigma$-algebras containing $\mathcal{C}$, written
$\sigma(\mathcal{C})$.

**Definition.** The **Borel** $\sigma$-algebra $\mathcal{B}(\mathbb{R})$ is the $\sigma$-algebra generated by the open
intervals $(a, b)$. Its members are the **Borel sets**.

Every set you are likely to meet is Borel: intervals of any kind, single points ($\{x\} = \bigcap_n (x - 1/n, x + 1/n)$),
countable sets, open and closed sets, the rationals, the irrationals, the Cantor set. The Vitali set is not. Borel sets
are generated by intervals, so it is enough to know how a probability treats intervals; this is the point of the
uniqueness theorem below.

### Measures

**Definition.** A **measure** on $(\Omega, \mathcal{F})$ is a function $\mu : \mathcal{F} \to [0, \infty]$ with
$\mu(\emptyset) = 0$ that is **countably additive**: for disjoint $A_1, A_2, \ldots \in \mathcal{F}$,

$$
\mu\Big(\bigcup_{n=1}^{\infty} A_n\Big) = \sum_{n=1}^{\infty} \mu(A_n).
$$

A **probability measure** is a measure $P$ with $P(\Omega) = 1$. The triple $(\Omega, \mathcal{F}, P)$ is a
**probability space**.

These are exactly Kolmogorov's axioms from [Chapter 1](01-What-Probability-Is.md), with one change: $P$ is now defined
on $\mathcal{F}$, not on every subset. All the first consequences proved there (complements, monotonicity, inclusion
and exclusion, the union bound) hold for events in $\mathcal{F}$ with the same proofs. The new tool is continuity.

**Theorem 17.2 (continuity of probability).**

(a) If $A_1 \subseteq A_2 \subseteq \cdots$ are events and $A = \bigcup_n A_n$, then $P(A_n) \to P(A)$.

(b) If $B_1 \supseteq B_2 \supseteq \cdots$ are events and $B = \bigcap_n B_n$, then $P(B_n) \to P(B)$.

*Proof.* (a) Write $A$ as a disjoint union of "new pieces": $C_1 = A_1$ and $C_n = A_n \setminus A_{n-1}$ for
$n \ge 2$. Then $A_n = C_1 \cup \cdots \cup C_n$, and $A = \bigcup_n C_n$. By countable additivity,

$$
P(A) = \sum_{k=1}^{\infty} P(C_k) = \lim_{n \to \infty} \sum_{k=1}^{n} P(C_k) = \lim_{n \to \infty} P(A_n).
$$

(b) Apply (a) to the complements $B_n^c$, which increase to $B^c$: $1 - P(B_n) \to 1 - P(B)$. $\square$

**Worked example 1.** Toss a fair coin forever. What is the probability of never seeing two heads in a row?

Let $B_n$ be the event "no HH among the first $n$ tosses". The events shrink, and their intersection is "never HH". A
string of length $n$ with no HH either ends in T (and the first $n-1$ have no HH) or ends in TH (and the first $n-2$
have no HH), so the count $a_n$ satisfies $a_n = a_{n-1} + a_{n-2}$ with $a_1 = 2$, $a_2 = 3$: these are the Fibonacci
numbers, $a_n = F_{n+2}$. So

$$
P(\text{never HH}) = \lim_{n \to \infty} \frac{F_{n+2}}{2^n} = 0,
$$

because $F_{n+2}$ grows like $\varphi^n$ with $\varphi \approx 1.618 < 2$. *Check:* $a_1, \ldots, a_7 = 2, 3, 5, 8, 13,
21, 34$, which a computer count of all $2^n$ strings confirms.

### Building measures

Definitions are cheap; the work is to show that the probabilities we want actually exist. Two theorems do it.

**Theorem 17.3 (Carathéodory's extension theorem, statement).** Let $\mathcal{A}$ be a collection of subsets of
$\Omega$ closed under complements and finite unions (an **algebra**), and let $\mu_0$ be countably additive on
$\mathcal{A}$ (whenever a countable disjoint union of sets of $\mathcal{A}$ is again in $\mathcal{A}$). Then $\mu_0$
extends to a measure on $\sigma(\mathcal{A})$, and if $\mu_0(\Omega)$ is finite the extension is unique.

Apply it to the finite unions of intervals in $[0,1)$ with $\mu_0$ = total length, and you get **Lebesgue measure** on
the Borel sets: the uniform distribution. (The hard part, which takes a few pages in any measure theory book, is to
check that length is countably additive on the algebra; it uses the compactness of closed intervals.)

**Theorem 17.4 (uniqueness).** Two probability measures on $(\mathbb{R}, \mathcal{B})$ that agree on every half-line
$(-\infty, x]$ agree on every Borel set. In other words, **the cumulative distribution function determines the
distribution.**

The proof uses Dynkin's $\pi$-$\lambda$ theorem: the sets where the two measures agree form a family closed under
complements and countable disjoint unions, and it contains the half-lines, which are closed under intersection; such a
family must contain the whole generated $\sigma$-algebra. We use this theorem silently every time we say "$X$ has the
standard normal distribution" and mean only that we know its cdf.

**Theorem 17.5 (Kolmogorov's extension theorem, statement for independent variables).** Given any sequence of
probability distributions $\mu_1, \mu_2, \ldots$ on $\mathbb{R}$, there is a probability space carrying independent
random variables $X_1, X_2, \ldots$ with $X_n$ having distribution $\mu_n$.

This is what lets us talk about "an infinite sequence of independent coin tosses" at all. For fair coins there is a
concrete model: take $\Omega = [0,1)$ with Lebesgue measure, and let $X_n(\omega)$ be the $n$-th binary digit of
$\omega$. The event "first $n$ digits are $d_1 \ldots d_n$" is an interval of length $2^{-n}$, so the digits are
independent fair bits. The strong law for these bits says that almost every number in $[0,1)$ has, in the long run, as
many 0s as 1s in its binary expansion. Émile Borel proved this "normal number" theorem in 1909, and it was the first
strong law.

## 17.3 Random variables as measurable functions; expectation as an integral

*Level: expert.*

### Measurable functions

So far a random variable was "a number that depends on the outcome". To ask for $P(X \le 3)$ we need the set
$\{\omega : X(\omega) \le 3\}$ to be an event.

**Definition.** A **random variable** on $(\Omega, \mathcal{F}, P)$ is a function $X : \Omega \to \mathbb{R}$ such that
$\{X \le x\} = \{\omega : X(\omega) \le x\}$ is in $\mathcal{F}$ for every real $x$. Such a function is called
**measurable**.

**Theorem 17.6.** If $X$ is a random variable, then $\{X \in B\} \in \mathcal{F}$ for every Borel set $B$.

*Proof.* Let $\mathcal{G}$ be the collection of subsets $B \subseteq \mathbb{R}$ with $X^{-1}(B) = \{X \in B\} \in
\mathcal{F}$. Taking preimages respects complements and unions: $X^{-1}(B^c) = X^{-1}(B)^c$ and
$X^{-1}(\bigcup B_n) = \bigcup X^{-1}(B_n)$. So $\mathcal{G}$ is a $\sigma$-algebra. It contains every half-line
$(-\infty, x]$ by definition, hence every interval $(a, b] = (-\infty, b] \setminus (-\infty, a]$ and every open
interval $(a, b) = \bigcup_n (a, b - 1/n]$. So $\mathcal{G}$ contains the $\sigma$-algebra generated by open
intervals, which is $\mathcal{B}$. $\square$

The function $B \mapsto P(X \in B)$ is then a probability measure on the Borel sets, the **distribution** (or **law**)
of $X$. By Theorem 17.4 it is determined by the cdf $F(x) = P(X \le x)$.

Sums, products, limits and continuous functions of random variables are random variables. For instance
$\{X + Y < x\} = \bigcup_{q \in \mathbb{Q}} \{X < q\} \cap \{Y < x - q\}$, a countable union of events (if
$X + Y < x$, a rational $q$ fits between $X$ and $x - Y$). And $\sup_n X_n$ is measurable because
$\{\sup_n X_n \le x\} = \bigcap_n \{X_n \le x\}$. Countability is what makes these work, which is why the
$\sigma$-algebra allows countable, not arbitrary, unions.

The **$\sigma$-algebra generated by $X$**, written $\sigma(X)$, is the collection of all events $\{X \in B\}$: what
you know once you have seen $X$. Random variables $X$ and $Y$ are **independent** when every event of $\sigma(X)$ is
independent of every event of $\sigma(Y)$.

### A distribution that is neither discrete nor continuous

In Chapters 5 and 9 every random variable had a probability mass function or a density. Measure theory shows these are
not the only kinds. Toss fair bits $\varepsilon_1, \varepsilon_2, \ldots$ and set

$$
X = \sum_{k=1}^{\infty} \frac{2\varepsilon_k}{3^k}.
$$

In base 3, $X$ has digits 0 or 2 only, so $X$ always lies in the **Cantor set**: start from $[0,1]$, remove the open
middle third $(1/3, 2/3)$, remove the middle third of each remaining piece, and so on forever. After $n$ steps $2^n$
intervals of length $3^{-n}$ remain, total length $(2/3)^n \to 0$. So the Cantor set has length 0, and $X$ has no
density: a density would give it probability equal to an integral over a set of length 0, which is 0. And $X$ has no
atoms either: $P(X = x) = 0$ for every $x$, since matching the first $n$ ternary digits of $x$ has probability at most
$2^{-n}$.

Its moments follow from linearity and independence. Each term $2\varepsilon_k/3^k$ has mean $1/3^k$ and variance
$4 \cdot \frac14 / 9^k = 1/9^k$, so

$$
E[X] = \sum_{k \ge 1} \frac{1}{3^k} = \frac12, \qquad \operatorname{Var}(X) = \sum_{k \ge 1} \frac{1}{9^k} = \frac18 .
$$

(The variance of the infinite sum is the sum of variances; this needs a limit argument that the convergence theorems
below provide.) Its cdf, the **Cantor function** or "devil's staircase", is continuous, climbs from 0 to 1, and is flat
on every removed middle third: flat almost everywhere, yet it rises.

**Lebesgue's decomposition (statement).** Every distribution on $\mathbb{R}$ is a mixture of three kinds: a discrete
part (atoms), an absolutely continuous part (with a density), and a singular continuous part (no atoms, but living on
a set of length 0, like the Cantor distribution).

### Expectation as an integral

How do we define $E[X]$ for a variable like the Cantor one, with neither sum nor density? Lebesgue's idea (in his 1902
thesis) was to slice the *range* of $X$ instead of its domain.

**Step 1: simple variables.** A **simple** random variable takes finitely many values: $X = \sum_{i=1}^{k} a_i 1_{A_i}$
with events $A_i$ and **indicators** $1_A$ (equal to 1 on $A$ and 0 off it). Define
$E[X] = \sum_i a_i P(A_i)$, exactly as in Chapter 6.

**Step 2: nonnegative variables.** For $X \ge 0$, define

$$
E[X] = \sup\{E[S] : S \text{ simple},\ 0 \le S \le X\},
$$

which may be $+\infty$. A concrete increasing sequence of simple variables below $X$ is
$S_n = \min(n, 2^{-n}\lfloor 2^n X \rfloor)$: round $X$ down to a multiple of $2^{-n}$ and cap it at $n$. Then
$S_n \uparrow X$.

**Step 3: general variables.** Write $X = X^+ - X^-$ with $X^+ = \max(X, 0)$ and $X^- = \max(-X, 0)$. If
$E[X^+]$ and $E[X^-]$ are not both infinite, $E[X] = E[X^+] - E[X^-]$. $X$ is **integrable** if $E|X| < \infty$.

This is the **Lebesgue integral** $E[X] = \int_\Omega X \, dP$. For a discrete $X$ it gives $\sum x P(X = x)$, and
for $X$ with density $f$ it gives $\int x f(x)\,dx$: everything from Chapters 6 and 9 is a special case. Its power
lies in three limit theorems.

**Theorem 17.7 (monotone convergence).** If $0 \le X_1 \le X_2 \le \cdots$ and $X_n \to X$ pointwise, then
$E[X_n] \to E[X]$.

*Proof idea.* $E[X_n]$ increases and is at most $E[X]$, so it has a limit $L \le E[X]$. For the other direction, take
a simple $S \le X$ and a number $c < 1$. The events $A_n = \{X_n \ge cS\}$ increase to $\Omega$ (because $X_n \to X$
and $cS < X$ wherever $S > 0$), so by continuity of probability $E[X_n] \ge c\,E[S 1_{A_n}] \to c\,E[S]$. Let
$c \to 1$ and take the sup over $S$. $\square$

**Theorem 17.8 (Fatou's lemma).** If $X_n \ge 0$, then $E[\liminf X_n] \le \liminf E[X_n]$.

*Proof.* $Y_n = \inf_{k \ge n} X_k$ increases to $\liminf X_n$ and $Y_n \le X_n$; apply monotone convergence to
$Y_n$. $\square$

**Theorem 17.9 (dominated convergence).** If $X_n \to X$ pointwise and $|X_n| \le Y$ for all $n$ with
$E[Y] < \infty$, then $E[X_n] \to E[X]$.

*Proof.* Apply Fatou to the nonnegative variables $Y + X_n$ and $Y - X_n$: this gives $E[X] \le \liminf E[X_n]$ and
$-E[X] \le \liminf(-E[X_n])$, that is $\limsup E[X_n] \le E[X]$. $\square$

All three also hold if "pointwise" is weakened to "almost surely", meaning outside an event of probability 0.

**Worked example 2 (the tail-sum formula).** For a random variable $X$ with values in $\{0, 1, 2, \ldots\}$,

$$
E[X] = \sum_{n=1}^{\infty} P(X \ge n).
$$

*Proof.* $X = \sum_{n \ge 1} 1_{\{X \ge n\}}$, since exactly the first $X$ indicators are 1. The partial sums are
nonnegative and increase to $X$, so by monotone convergence the expectation of the sum is the sum of the
expectations. $\square$

For a geometric variable (number of trials up to the first success, success probability $p$),
$P(X \ge n) = (1-p)^{n-1}$, so $E[X] = \sum_{n \ge 1}(1-p)^{n-1} = 1/p$, as in Chapter 6, with no differentiation of
series.

**Worked example 3 (when limits and expectations do not commute).** Let $U$ be uniform on $(0,1)$ and
$X_n = n \cdot 1_{\{U < 1/n\}}$. For each fixed outcome, $U > 1/n$ once $n$ is large, so $X_n \to 0$ pointwise. But
$E[X_n] = n \cdot \frac1n = 1$ for every $n$. So $\lim E[X_n] = 1 \ne 0 = E[\lim X_n]$. There is no integrable $Y$
dominating all $X_n$ (the smallest candidate, $\sup_n X_n$, is about $1/U$, whose expectation $\int_0^1 du/u$ is
infinite), so dominated convergence does not apply, and Fatou's inequality is strict: $0 < 1$. Mass escapes to
infinity on smaller and smaller sets.

## 17.4 Modes of convergence

*Level: expert.*

When does a sequence of random variables $X_1, X_2, \ldots$ "converge" to $X$? Numbers converge in one way; random
variables in at least four, and the strong and weak laws are statements about two of them.

**Definitions.** Let $X, X_1, X_2, \ldots$ be random variables.

- **Almost surely** (a.s.): $P(\{\omega : X_n(\omega) \to X(\omega)\}) = 1$. For almost every outcome, the numbers
  converge in the ordinary sense.
- **In probability:** for every $\varepsilon > 0$, $P(|X_n - X| > \varepsilon) \to 0$. At each large time, a big
  error is unlikely, but which outcomes have big errors may keep changing.
- **In $L^p$** (for $p \ge 1$): $E|X_n - X|^p \to 0$. The average size of the error goes to 0. $L^2$ is called
  **mean-square** convergence.
- **In distribution:** $P(X_n \le x) \to P(X \le x)$ at every $x$ where the cdf of $X$ is continuous. Only the
  distributions converge; $X_n$ and $X$ need not even live on the same probability space. The central limit theorem
  is a statement of this kind.

In this language, the weak law of large numbers ([Chapter 7](07-Inequalities-and-the-Law-of-Large-Numbers.md)) says the
sample mean $\bar X_n$ converges to $\mu$ in probability, and the strong law says it converges almost surely.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 580 200" role="img" aria-label="Diagram of the modes of convergence. Arrows go from almost sure convergence and from L p convergence to convergence in probability, and from convergence in probability to convergence in distribution. No other arrows hold in general">
  <defs><marker id="prb17-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
  <rect x="20" y="20" width="160" height="46" rx="8" fill="#eea66f" fill-opacity="0.35" stroke="currentColor"/>
  <text x="100" y="48" text-anchor="middle" font-size="15" fill="currentColor">almost surely</text>
  <rect x="20" y="134" width="160" height="46" rx="8" fill="#eea66f" fill-opacity="0.35" stroke="currentColor"/>
  <text x="100" y="162" text-anchor="middle" font-size="15" fill="currentColor">in L^p (p ≥ 1)</text>
  <rect x="220" y="77" width="160" height="46" rx="8" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor"/>
  <text x="300" y="105" text-anchor="middle" font-size="15" fill="currentColor">in probability</text>
  <rect x="410" y="77" width="150" height="46" rx="8" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor"/>
  <text x="485" y="105" text-anchor="middle" font-size="15" fill="currentColor">in distribution</text>
  <line x1="180" y1="50" x2="236" y2="77" stroke="currentColor" stroke-width="2" marker-end="url(#prb17-arr)"/>
  <line x1="180" y1="150" x2="236" y2="123" stroke="currentColor" stroke-width="2" marker-end="url(#prb17-arr)"/>
  <line x1="380" y1="100" x2="408" y2="100" stroke="currentColor" stroke-width="2" marker-end="url(#prb17-arr)"/>
</svg>
</div>

**Theorem 17.10.** (a) Almost sure convergence implies convergence in probability. (b) $L^p$ convergence implies
convergence in probability. (c) Convergence in probability implies convergence in distribution.

*Proof.* (a) Fix $\varepsilon > 0$ and let $B_n = \{|X_k - X| > \varepsilon \text{ for some } k \ge n\}$. These events
shrink, and every outcome in all of them has $|X_k - X| > \varepsilon$ for infinitely many $k$, so $X_k$ does not
converge to $X$ there. Hence $P(\bigcap_n B_n) = 0$, and by continuity (Theorem 17.2b) $P(B_n) \to 0$. Since
$\{|X_n - X| > \varepsilon\} \subseteq B_n$, we are done.

(b) Markov's inequality applied to $|X_n - X|^p$: $P(|X_n - X| > \varepsilon) \le E|X_n - X|^p / \varepsilon^p \to 0$.

(c) Let $x$ be a continuity point of $F(x) = P(X \le x)$, and $\varepsilon > 0$. If $X_n \le x$, then either
$X \le x + \varepsilon$ or $|X_n - X| > \varepsilon$; so $P(X_n \le x) \le F(x + \varepsilon) + P(|X_n - X| >
\varepsilon)$. In the same way, $F(x - \varepsilon) \le P(X_n \le x) + P(|X_n - X| > \varepsilon)$. Let $n \to \infty$:

$$
F(x - \varepsilon) \le \liminf_n P(X_n \le x) \le \limsup_n P(X_n \le x) \le F(x + \varepsilon).
$$

Now let $\varepsilon \to 0$; by continuity of $F$ at $x$ both ends tend to $F(x)$. $\square$

Every other arrow fails in general. Here are the counterexamples, all on $\Omega = [0,1)$ with $U$ uniform, except the
last.

**In probability, but not almost surely: the typewriter.** Write $n = 2^k + j$ with $0 \le j < 2^k$, and let $X_n$
be the indicator of the interval $[j/2^k, (j+1)/2^k)$. As $n$ runs through $2^k, \ldots, 2^{k+1} - 1$, the interval
sweeps across $[0,1)$ like a typewriter carriage, getting narrower each pass. $P(X_n \ne 0) = 2^{-k} \to 0$, so
$X_n \to 0$ in probability (and in every $L^p$). But every point $U$ is covered once in every pass, so $X_n(U) = 1$
infinitely often and $X_n(U) = 0$ infinitely often: the sequence converges for *no* outcome.

**Almost surely, but not in $L^1$.** Worked example 3: $X_n = n 1_{\{U < 1/n\}} \to 0$ for every outcome, but
$E|X_n - 0| = 1$.

**In distribution, but not in probability.** Let $X$ be $\pm 1$ with probability $\frac12$ each, and $X_n = -X$ for
every $n$. Every $X_n$ has the same distribution as $X$, so $X_n \to X$ in distribution trivially. But
$|X_n - X| = 2$ always.

Two partial converses are worth knowing.

**Theorem 17.11.** (a) If $X_n \to c$ in distribution, where $c$ is a constant, then $X_n \to c$ in probability.
(b) If $X_n \to X$ in probability, then some subsequence $X_{n_k}$ converges to $X$ almost surely.

*Proof of (a).* The cdf of the constant $c$ jumps from 0 to 1 at $c$ and is continuous everywhere else. So
$P(X_n \le c - \varepsilon) \to 0$ and $P(X_n \le c + \varepsilon/2) \to 1$, and
$P(|X_n - c| > \varepsilon) \le P(X_n \le c - \varepsilon) + 1 - P(X_n \le c + \varepsilon/2) \to 0$. $\square$

Part (b) is proved with the first Borel-Cantelli lemma in the next section (Exercise 9). In the typewriter, the
subsequence $n = 2^k$ (the first interval of each pass, $[0, 2^{-k})$) converges to 0 at every $U > 0$.

Finally, almost sure convergence plus domination gives $L^1$ convergence: that is just dominated convergence applied to
$|X_n - X|$.

## 17.5 The Borel-Cantelli lemmas and the infinite monkey

*Level: expert.*

### "Infinitely often"

Given events $A_1, A_2, \ldots$, the event that **infinitely many** of them happen is

$$
\{A_n \text{ i.o.}\} = \limsup_{n} A_n = \bigcap_{n=1}^{\infty} \bigcup_{k=n}^{\infty} A_k .
$$

Read it from the inside out: $\bigcup_{k \ge n} A_k$ is "some $A_k$ with $k \ge n$ happens"; intersecting over all $n$
says "however far out you go, another one happens". The abbreviation "i.o." means "infinitely often". It is an event,
because $\mathcal{F}$ is closed under countable unions and intersections.

**Theorem 17.12 (first Borel-Cantelli lemma).** If $\sum_n P(A_n) < \infty$, then $P(A_n \text{ i.o.}) = 0$.

*Proof.* For every $n$, $\{A_k \text{ i.o.}\} \subseteq \bigcup_{k \ge n} A_k$, so by the union bound

$$
P(A_k \text{ i.o.}) \le \sum_{k=n}^{\infty} P(A_k).
$$

The right side is the tail of a convergent series, so it tends to 0 as $n \to \infty$. $\square$

Notice that no independence is needed. A second proof shows the meaning: let $N = \sum_n 1_{A_n}$ be the number of
events that happen. By monotone convergence $E[N] = \sum_n P(A_n) < \infty$, and a variable with finite expectation is
finite almost surely.

**Theorem 17.13 (second Borel-Cantelli lemma).** If the events $A_n$ are **independent** and
$\sum_n P(A_n) = \infty$, then $P(A_n \text{ i.o.}) = 1$.

*Proof.* We show that the complement, "only finitely many happen", has probability 0. That complement is
$\bigcup_n \bigcap_{k \ge n} A_k^c$, a countable union, so it is enough to show $P(\bigcap_{k \ge n} A_k^c) = 0$ for
each $n$. By independence and the inequality $1 - x \le e^{-x}$, for every $m \ge n$,

$$
P\Big(\bigcap_{k=n}^{m} A_k^c\Big) = \prod_{k=n}^{m} \big(1 - P(A_k)\big) \le \exp\Big(-\sum_{k=n}^{m} P(A_k)\Big).
$$

As $m \to \infty$ the sum diverges, so the right side tends to 0, and by continuity (Theorem 17.2b)
$P(\bigcap_{k \ge n} A_k^c) = 0$. $\square$

Independence cannot be dropped: if $A_n = A$ for every $n$, with $P(A) = \frac12$, the sum diverges but
$P(A_n \text{ i.o.}) = P(A) = \frac12$.

**Worked example 4 (finishing a counterexample).** Let $X_1, X_2, \ldots$ be independent with $P(X_n = 1) = 1/n$ and
$P(X_n = 0) = 1 - 1/n$. Then $P(|X_n| > \varepsilon) = 1/n \to 0$, so $X_n \to 0$ in probability. But
$\sum 1/n = \infty$, so by the second lemma $X_n = 1$ infinitely often, almost surely: $X_n$ does not converge to 0
almost surely. If instead $P(X_n = 1) = 1/n^2$, the sum is finite and by the first lemma $X_n = 0$ from some point on,
almost surely. The line between the two lies between the series $\sum 1/n$ and $\sum 1/n^2$.

**Worked example 5 (records).** Let $X_1, X_2, \ldots$ be independent with the same continuous distribution. Call $n$ a
**record** time if $X_n$ is larger than all of $X_1, \ldots, X_{n-1}$. By symmetry, each of the first $n$ values is
equally likely to be the largest, so $P(\text{record at } n) = 1/n$. One can show the record events are independent
(this takes a short symmetry argument). The sum $\sum 1/n$ diverges, so records keep happening forever, almost surely,
though ever more rarely: the expected number of records among the first $n$ is $1 + \frac12 + \cdots + \frac1n
\approx \ln n$, so about 7 in the first thousand and about 14 in the first million.

### The infinite monkey theorem

A monkey hits the 26 letter keys of a typewriter independently and uniformly at random, forever. Take any fixed word,
say BANANA, with 6 letters. Cut the endless output into consecutive blocks of 6 letters, and let $A_k$ be the event
that block $k$ spells BANANA. The blocks use disjoint keystrokes, so the $A_k$ are independent, each with probability

$$
p = 26^{-6} = \frac{1}{308{,}915{,}776} \approx 3.24 \times 10^{-9}.
$$

Since $\sum_k p = \infty$, the second Borel-Cantelli lemma says BANANA appears infinitely often, with probability 1.
The same argument works for any finite text, including the complete works of Shakespeare: with probability 1 the
monkey types them, and then types them again, infinitely many times.

**Theorem 17.14 (infinite monkey theorem).** In an infinite sequence of independent uniform letters, every finite
string appears infinitely often, almost surely.

The theorem is true and also useless as a plan. The number of blocks until the first success is geometric with mean
$1/p = 26^6$, about $3.1 \times 10^8$ blocks or $1.85 \times 10^9$ keystrokes; at 10 keys a second, around six years
of nonstop typing for one six-letter word. A text of 100,000 letters has probability $26^{-100000}$, about
$10^{-141497}$, per block, and the expected wait is that many blocks, beyond any physical meaning. "Probability 1" and
"will happen in practice" are different things.

### Try it in Python

```python
import random, math
random.seed(1)
target = "AB"            # a short word so it finishes quickly
letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
waits = []
for trial in range(2000):
    n = 0
    while True:
        n += 1
        block = "".join(random.choice(letters) for _ in target)
        if block == target:
            break
    waits.append(n)
print(sum(waits) / len(waits), 26 ** len(target))   # average blocks vs the exact mean 676
```

### The strong law, proved

The first lemma turns "probability of a big error at time $n$ is small" into "big errors happen only finitely often",
provided the small probabilities are summable. Chebyshev's bound $\sigma^2/(n\varepsilon^2)$ from Chapter 7 is not
summable, but a fourth moment gives $1/n^2$, which is.

**Theorem 17.15 (strong law of large numbers, finite fourth moment).** Let $X_1, X_2, \ldots$ be independent and
identically distributed with $E[X_1^4] < \infty$ and mean $\mu$. Then $\bar X_n = (X_1 + \cdots + X_n)/n \to \mu$
almost surely.

*Proof.* Replacing $X_i$ by $X_i - \mu$ (which still has a finite fourth moment), we may assume $\mu = 0$. Let
$S_n = X_1 + \cdots + X_n$, $\sigma^2 = E[X_1^2]$ and $K = E[X_1^4]$. Expand

$$
E[S_n^4] = \sum_{i,j,k,l} E[X_i X_j X_k X_l].
$$

By independence and mean 0, any term in which some index appears exactly once has expectation 0 (it factors with a
factor $E[X_i] = 0$). What survives: the $n$ terms with $i = j = k = l$, each $K$, and the terms with two distinct
indices each appearing twice. Choosing the pair of indices ($\binom{n}{2}$ ways) and which 2 of the 4 positions get
the smaller index ($\binom42 = 6$ ways) gives $6\binom n2 = 3n(n-1)$ such terms, each $E[X_i^2]E[X_j^2] = \sigma^4$.
So

$$
E[S_n^4] = nK + 3n(n-1)\sigma^4 \le Cn^2
$$

for a constant $C$ (using $\sigma^4 \le K$). By Markov's inequality applied to $S_n^4$, for any $\varepsilon > 0$,

$$
P(|\bar X_n| > \varepsilon) = P(S_n^4 > n^4\varepsilon^4) \le \frac{Cn^2}{n^4\varepsilon^4} = \frac{C}{\varepsilon^4 n^2},
$$

which is summable. By the first Borel-Cantelli lemma, almost surely $|\bar X_n| > \varepsilon$ for only finitely many
$n$, that is, $\limsup |\bar X_n| \le \varepsilon$. Take $\varepsilon = 1, \frac12, \frac13, \ldots$: a countable
intersection of probability-1 events has probability 1, so $\limsup|\bar X_n| = 0$ almost surely. $\square$

The fourth-moment condition is not needed: Kolmogorov proved around 1930 that $E|X_1| < \infty$ is enough, and Etemadi
gave a short proof of that in 1981 that needs only pairwise independence. Both use the same Borel-Cantelli idea with
cleverer truncation.

*Check:* for fair $\pm 1$ steps, $K = \sigma^2 = 1$, so $E[S_n^4] = n + 3n(n-1) = 3n^2 - 2n$. For $n = 2$: $S_2$ is
$\pm 2$ with probability $\frac14$ each and 0 otherwise, so $E[S_2^4] = \frac12 \cdot 16 = 8 = 3 \cdot 4 - 4$.

## 17.6 Kolmogorov's zero-one law

*Level: expert.*

Some events about an infinite sequence do not depend on any finite number of its terms. "The sample means converge" is
one: changing $X_1, \ldots, X_{100}$ changes $\bar X_n$ by at most a quantity that tends to 0, so it cannot change
whether the limit exists. "The series $\sum X_n$ converges" is another: convergence of a series is decided by its tail.

**Definition.** Let $X_1, X_2, \ldots$ be random variables, and let $\mathcal{T}_n = \sigma(X_n, X_{n+1}, \ldots)$, the
events decided by the variables from time $n$ on. The **tail $\sigma$-algebra** is
$\mathcal{T} = \bigcap_{n} \mathcal{T}_n$. Its members are **tail events**: events that, for every $n$, are decided by
$X_n, X_{n+1}, \ldots$ alone.

Examples of tail events: $\{\bar X_n \text{ converges}\}$, $\{\sum X_n \text{ converges}\}$, $\{X_n > 1 \text{ i.o.}\}$,
$\{\limsup_n X_n \le 3\}$. Not tail events: $\{X_1 > 0\}$, and $\{S_n \ge 0 \text{ for all } n\}$ (changing $X_1$ can
change it).

**Theorem 17.16 (Kolmogorov's zero-one law).** If $X_1, X_2, \ldots$ are independent, every tail event has
probability 0 or 1.

*Proof sketch.* Let $A$ be a tail event. For each $n$, $A$ is in $\sigma(X_{n+1}, X_{n+2}, \ldots)$, which is
independent of $\sigma(X_1, \ldots, X_n)$. So $A$ is independent of every event that depends on finitely many of the
$X_i$. Those events form an algebra that generates $\sigma(X_1, X_2, \ldots)$, and a $\pi$-$\lambda$ argument (as in
Theorem 17.4) upgrades "independent of a generating algebra" to "independent of the whole $\sigma$-algebra". But $A$
itself belongs to $\sigma(X_1, X_2, \ldots)$. So $A$ is independent of itself:

$$
P(A) = P(A \cap A) = P(A)\,P(A) ,
$$

and the only solutions of $p = p^2$ are $0$ and $1$. $\square$

The law says the answer is 0 or 1; it does not say which. That needs a separate argument.

**Worked example 6 (random signs).** Flip independent fair signs $\epsilon_n = \pm 1$ and form the **random harmonic
series** $\sum_n \epsilon_n / n$. Whether it converges is a tail event, so its probability is 0 or 1. Which? Its
partial sums $M_n = \sum_{k \le n}\epsilon_k/k$ form a martingale ([Chapter 15](15-Random-Walks-and-Martingales.md))
with $E[M_n^2] = \sum_{k \le n} 1/k^2 \le \pi^2/6$, bounded, and the $L^2$ martingale convergence theorem says such a
martingale converges almost surely. So the probability is 1. With $\epsilon_n/\sqrt n$ instead, the variances sum to
$\sum 1/n = \infty$, and Kolmogorov's three-series theorem (which gives exact conditions for a series of independent
terms to converge) shows the probability is 0.

**Worked example 7 (a random walk's range).** For a simple random walk, the event $\{\limsup_n S_n = +\infty\}$ looks as if it
depends on every step, but it is a tail event: changing finitely many steps shifts all later $S_n$ by a bounded
amount, which does not change whether they are unbounded above. So it has probability $p \in \{0, 1\}$, and by
symmetry $\{\liminf S_n = -\infty\}$ has the same probability $p$. If $p$ were 0, the walk would be bounded with
probability 1, so $P(\sup_n |S_n| \le M) > 0$ for some $M$. But the central limit theorem gives
$P(|S_n| \le M) \to 0$ for every fixed $M$. So $p = 1$. The walk swings arbitrarily far up and
arbitrarily far down, infinitely often.

The same law is why, in percolation ([Chapter 20](20-Where-Probability-Goes.md)), "there is an infinite open cluster
somewhere" has probability exactly 0 or 1 for each value of the parameter: moving finitely many edges cannot create or
destroy an infinite cluster somewhere in an infinite lattice.

A stronger cousin, the **Hewitt-Savage zero-one law** (1955), says that for independent identically distributed
variables, any event unchanged by permuting finitely many of them has probability 0 or 1. It covers events like
$\{S_n = 0 \text{ i.o.}\}$, which are not tail events.

## A short history

Henri Lebesgue's 1902 thesis built the measure and integral used here. Giuseppe Vitali found his non-measurable set in
1905. Émile Borel's 1909 paper on "denumerable probabilities" proved that almost every number is normal and contains
the first Borel-Cantelli lemma; Francesco Cantelli's 1917 work added more of what now carries both names. In his 1900
list of problems David Hilbert had asked, as part of his sixth problem, for an axiomatic treatment of probability.
Several people moved toward it in the 1910s and 1920s (Norbert Wiener built the measure of Brownian motion in 1923),
and Andrey Kolmogorov's short book *Grundbegriffe der Wahrscheinlichkeitsrechnung* (1933) settled it: a probability
space is a measure space of total mass 1, a random variable is a measurable function, expectation is an integral, and
conditional expectation (which this chapter has not defined in general) comes from the Radon-Nikodym theorem. The same
book contains the extension theorem and the zero-one law. Probability became a branch of analysis, and also gained
the tools to handle Brownian motion, stochastic processes in continuous time and, much later, everything in
[Chapter 20](20-Where-Probability-Goes.md).

## Check yourself

??? question "1. Let $\Omega = \{1, 2, 3, 4\}$. List the $\sigma$-algebra generated by the sets $\{1\}$ and $\{2\}$. How many members does it have?"

    The atoms are $\{1\}$, $\{2\}$ and what is left, $\{3, 4\}$: a partition into 3 blocks. The $\sigma$-algebra is all
    unions of blocks, $2^3 = 8$ sets: $\emptyset$, $\{1\}$, $\{2\}$, $\{3,4\}$, $\{1,2\}$, $\{1,3,4\}$, $\{2,3,4\}$,
    $\Omega$. It does not contain $\{3\}$: knowing only these events, you cannot tell 3 from 4.

??? question "2. Show that the union of two $\sigma$-algebras need not be a $\sigma$-algebra."

    On $\Omega = \{1,2,3\}$ take $\mathcal{F}_1 = \{\emptyset, \{1\}, \{2,3\}, \Omega\}$ and
    $\mathcal{F}_2 = \{\emptyset, \{2\}, \{1,3\}, \Omega\}$. Their union contains $\{1\}$ and $\{2\}$ but not
    $\{1\} \cup \{2\} = \{1, 2\}$, so it is not closed under unions.

??? question "3. Roll a fair die forever. Use continuity of probability to show that a six eventually appears with probability 1."

    Let $B_n$ be "no six in the first $n$ rolls". These events shrink, $P(B_n) = (5/6)^n$, and their intersection is
    "never a six". By Theorem 17.2(b), $P(\text{never a six}) = \lim (5/6)^n = 0$, so a six appears with probability 1.

??? question "4. Let $U$ be uniform on $[0,1]$. Explain why $P(U \text{ is rational}) = 0$."

    The rationals in $[0,1]$ are countable: $q_1, q_2, \ldots$. Each single point has probability 0 (it lies in an
    interval of length $\varepsilon$ for every $\varepsilon > 0$). By countable additivity,
    $P(U \in \mathbb{Q}) = \sum_k P(U = q_k) = 0$. So the irrationals have probability 1, though both sets are dense.

??? question "5. For the Cantor variable $X = \sum 2\varepsilon_k/3^k$, find $P(X \le 1/3)$ and $P(X < 1/3)$."

    $X \le 1/3$ exactly when the first ternary digit is 0, that is $\varepsilon_1 = 0$, except for the single number
    $1/3 = 0.0222\ldots_3$, which needs all later bits equal to 1 and has probability 0. So both answers are
    $\frac12$. (If $\varepsilon_1 = 1$, then $X \ge 2/3$.)

??? question "6. Use the tail-sum formula to find $E[X]$ when $P(X \ge n) = 1/n$ for $n = 1, 2, 3, \ldots$ Is $X$ finite almost surely?"

    $E[X] = \sum_{n \ge 1} 1/n = \infty$. But $P(X \ge n) \to 0$, so $P(X = \infty) = \lim P(X \ge n) = 0$ by
    continuity: $X$ is finite almost surely and still has infinite expectation. (Here $P(X = n) = \frac1n - \frac1{n+1}
    = \frac{1}{n(n+1)}$.)

??? question "7. Show that $L^2$ convergence implies $L^1$ convergence."

    By the Cauchy-Schwarz inequality (or Jensen's), $E|Y| \le \sqrt{E[Y^2]}$ for any $Y$. With $Y = X_n - X$:
    $E|X_n - X| \le \sqrt{E|X_n - X|^2} \to 0$.

??? question "8. Independent events have $P(A_n) = 1/(n \ln n)$ for $n \ge 2$, and independent events $B_n$ have $P(B_n) = 1/(n (\ln n)^2)$. Which happen infinitely often?"

    Compare with integrals. $\int_2^\infty dx/(x\ln x) = [\ln\ln x]_2^\infty = \infty$, so $\sum P(A_n) = \infty$
    and by the second lemma $A_n$ happens infinitely often with probability 1. $\int_2^\infty dx/(x(\ln x)^2) =
    [-1/\ln x]_2^\infty = 1/\ln 2 < \infty$, so $\sum P(B_n) < \infty$ and by the first lemma $B_n$ happens only
    finitely often with probability 1.

??? question "9. Prove Theorem 17.11(b): if $X_n \to X$ in probability, a subsequence converges almost surely."

    For each $k$ choose $n_k > n_{k-1}$ with $P(|X_{n_k} - X| > 1/k) \le 2^{-k}$, possible because these probabilities
    tend to 0. The sum $\sum_k 2^{-k}$ is finite, so by the first Borel-Cantelli lemma, almost surely
    $|X_{n_k} - X| > 1/k$ for only finitely many $k$. For such an outcome, $|X_{n_k} - X| \le 1/k$ for all large $k$,
    so $X_{n_k} \to X$.

??? question "10. Let $X_1, X_2, \ldots$ be independent fair $\pm 1$ steps and $S_n = X_1 + \cdots + X_n$. Which of these are tail events? (a) $X_n = 1$ infinitely often; (b) $S_n / n \to 0$; (c) $S_n \ge 0$ for all $n$; (d) $\limsup S_n/\sqrt{n \ln\ln n} = \sqrt 2$."

    (a) Tail: changing finitely many steps does not change whether infinitely many are $+1$. (b) Tail: changing the
    first $m$ steps changes $S_n$ by at most $2m$, and $2m/n \to 0$. (c) Not tail: $X_1 = -1$ already makes it false.
    (d) Tail, by the same argument as (b), since $2m/\sqrt{n\ln\ln n} \to 0$. (It has probability 1: this is the law
    of the iterated logarithm.)

??? question "11. Give a sequence of random variables that converges in $L^1$ but not almost surely, and one that converges almost surely and in probability but whose expectations do not converge."

    The typewriter sequence: $E|X_n| = 2^{-k} \to 0$ (in $L^1$), but it converges at no point. The sequence
    $X_n = n1_{\{U < 1/n\}}$: tends to 0 at every outcome, hence also in probability, but $E[X_n] = 1$ for all $n$.

??? question "12. Let $E[X_1^4] < \infty$ and the $X_i$ be independent with mean 0. Check the formula $E[S_n^4] = nK + 3n(n-1)\sigma^4$ for fair $\pm1$ steps and $n = 3$ by listing outcomes."

    Here $K = \sigma^2 = 1$, so the formula gives $3 + 18 = 21$. Directly: $S_3 = \pm 3$ with probability
    $\frac18$ each and $\pm 1$ with probability $\frac38$ each, so $E[S_3^4] = \frac28 \cdot 81 + \frac68 \cdot 1 =
    \frac{162 + 6}{8} = 21$.

## What you learned

- No countably additive, rotation-invariant probability can measure every subset of $[0,1)$ (Vitali), so probability
  lives on a $\sigma$-algebra of events.
- A probability space is $(\Omega, \mathcal{F}, P)$; countable additivity gives continuity along increasing and
  decreasing events; extension theorems build Lebesgue measure and infinite sequences of independent variables.
- A random variable is a measurable function; its distribution is fixed by its cdf; some distributions (Cantor) are
  neither discrete nor continuous.
- Expectation is the Lebesgue integral, with monotone convergence, Fatou and dominated convergence to swap limits and
  expectations, and examples where swapping fails.
- Almost sure and $L^p$ convergence imply convergence in probability, which implies convergence in distribution; the
  typewriter and escaping-mass examples show nothing else holds in general.
- Borel-Cantelli: summable probabilities mean finitely many events; divergent sums with independence mean infinitely
  many. They prove the infinite monkey theorem and the strong law with a fourth moment.
- Tail events of independent sequences have probability 0 or 1.

**Next:** [Chapter 18](18-Information-and-Entropy.md) measures uncertainty itself, with Shannon's entropy, and finds the
limits of compression and of communication over noisy channels.

## Further reading

- A. N. Kolmogorov, *Foundations of the Theory of Probability* (English translation of the 1933 *Grundbegriffe*), 1950.
- P. Billingsley, *Probability and Measure*, 3rd edition, 1995.
- D. Williams, *Probability with Martingales*, 1991. A short, lively route to everything in this chapter.
- R. Durrett, *Probability: Theory and Examples*, 5th edition, 2019.
- J. S. Rosenthal, *A First Look at Rigorous Probability Theory*, 2nd edition, 2006.
- N. Etemadi, "An elementary proof of the strong law of large numbers", *Zeitschrift für Wahrscheinlichkeitstheorie und verwandte Gebiete* 55, 1981.
- R. M. Solovay, "A model of set-theory in which every set of reals is Lebesgue measurable", *Annals of Mathematics* 92, 1970.
- On this site: the gentler [law of large numbers and CLT lesson](../../topics/probability/level-8/05-large-numbers-clt.md);
  sequences and series in the U of T guides, [MAT137 Unit 11: Sequences](../../uoft/MAT137/unit11.md) and
  [Unit 13: Series](../../uoft/MAT137/unit13.md); the [Riemann integral in R^n (MAT257 Unit 9)](../../uoft/MAT257Y1/unit09.md),
  which the Lebesgue integral extends; the [Combinatorics book](../combinatorics/index.md), whose
  [Chapter 17](../combinatorics/17-The-Probabilistic-Method.md) uses these probabilities to build objects.
