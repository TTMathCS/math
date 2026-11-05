# 17. The probabilistic method

*Some objects are easy to describe and maddeningly hard to build. Is there a way to colour the edges of a complete graph
on 100 vertices so that no 10 vertices are joined only by red edges or only by blue ones? Nobody can write such a colouring
down by hand. Yet a two-line argument shows one exists: colour at random and show that the chance of failure is less than 1.
This chapter turns that trick into a method. You will prove existence by averaging, use linearity of expectation to count
without independence, repair random objects by deleting their flaws, use variance to show something exists almost surely,
meet the Lovász local lemma for rare bad events, and watch a random graph suddenly become connected.*

!!! abstract "In this chapter"
    **You will learn:**

    - why "a random object works with positive probability" proves that a good object exists
    - Erdős' lower bound for Ramsey numbers and Erdős' sum-free subset theorem
    - linearity of expectation, and how it finds tournaments with many Hamiltonian paths and large cuts and independent sets
    - the deletion method: make a random object, then fix its few defects
    - the second moment method: Markov's and Chebyshev's inequalities and thresholds for triangles
    - the Lovász local lemma, with a full proof of a symmetric version and its uses for colouring and satisfiability
    - random graphs $G(n,p)$, thresholds, and the sharp threshold for connectivity at $p = \ln n / n$

    **You need:** counting with binomial coefficients ([Chapter 3](03-Binomial-Coefficients.md)), graphs
    ([Chapter 10](10-Graphs.md)), Ramsey numbers ([Chapter 16](16-Ramsey-Theory.md)), and probability of the counting kind:
    equally likely outcomes, independent events, expected value. If expected value is new, the Topics lessons on
    [random variables](../../topics/probability/level-7/01-random-variables.md) and
    [expected value](../../topics/probability/level-7/02-expected-value.md) are a gentler start.

    **Levels:** 17.1 and 17.2 are intermediate; 17.3 and 17.4 are advanced; 17.5 and 17.6 are expert.

## 17.1 Existence by averaging

Here is the oldest idea in the chapter, in a form a child would accept. A class of 30 pupils scored an average of 72 on a
test. Then **at least one pupil scored 72 or more.** If everyone had scored below 72, the average would be below 72 too.
That is all. Nobody has told you which pupil, and you do not need to know.

Now replace "pupils" by "all possible colourings of a graph" and "score" by "number of monochromatic cliques". If the
average number of monochromatic cliques is less than 1, then some colouring has fewer than 1, that is, none at all. The
probabilistic method is this observation, dressed in the language of probability so that we can compute averages
cleverly.

### The language

A **probability space** here is always a finite set $\Omega$ of outcomes, each with a probability; usually all outcomes are
equally likely. An **event** is a subset $A \subseteq \Omega$ and $P(A)$ is the total probability of its outcomes. Two facts
are all we need at first.

**Positive probability means existence.** If $P(A) > 0$ then $A$ is not empty: some outcome has the property $A$.

**The union bound.** For any events $A_1, \ldots, A_m$,

$$
P(A_1 \cup \cdots \cup A_m) \le P(A_1) + \cdots + P(A_m).
$$

The union bound holds because each outcome in the union is counted at least once on the right. It ignores overlaps, so it
is crude, but it never needs independence. Combining the two: if the bad events $A_i$ have $\sum_i P(A_i) < 1$, then with
positive probability none of them happens, so a good outcome exists.

### Erdős' lower bound for Ramsey numbers

Recall from [Chapter 16](16-Ramsey-Theory.md) that $R(k,k)$ is the smallest $n$ such that every red/blue colouring of the
edges of $K_n$ has $k$ vertices whose $\binom{k}{2}$ edges all have one colour (a **monochromatic $K_k$**). The upper bound
$R(k,k) \le \binom{2k-2}{k-1} < 4^k$ came from a recursion. A lower bound means showing that some colouring of $K_n$ avoids
monochromatic $K_k$, for $n$ as large as possible. Explicit constructions are poor at this. In 1947 Paul Erdős gave the
following argument.

**Theorem 17.1 (Erdős, 1947).** If $\binom{n}{k} 2^{1-\binom{k}{2}} < 1$, then $R(k,k) > n$. In particular
$R(k,k) > \lfloor 2^{k/2} \rfloor$ for every $k \ge 3$.

*Proof.* Colour each edge of $K_n$ red or blue by an independent fair coin. Fix a set $S$ of $k$ vertices and let $A_S$ be
the event that all $\binom{k}{2}$ edges inside $S$ get the same colour. There are two ways for that to happen (all red, all
blue), each with probability $2^{-\binom{k}{2}}$, so

$$
P(A_S) = 2 \cdot 2^{-\binom{k}{2}} = 2^{1-\binom{k}{2}}.
$$

There are $\binom{n}{k}$ sets $S$. By the union bound the chance that some $A_S$ happens is at most
$\binom{n}{k} 2^{1-\binom{k}{2}}$, which is less than 1 by assumption. So with positive probability no $A_S$ happens: some
colouring of $K_n$ has no monochromatic $K_k$, and $R(k,k) > n$.

For the second statement take $n = \lfloor 2^{k/2} \rfloor$. Using $\binom{n}{k} \le n^k / k!$ and $n^k \le 2^{k^2/2}$,

$$
\binom{n}{k} 2^{1-\binom{k}{2}} \le \frac{2^{k^2/2}}{k!} \cdot 2^{1 - k^2/2 + k/2} = \frac{2^{1+k/2}}{k!},
$$

and $2^{1+k/2} < k!$ for $k \ge 3$ (at $k = 3$: $2^{2.5} \approx 5.66 < 6$; and each step up multiplies the left side by
$\sqrt{2}$ and the right side by at least 4). $\square$

**Worked example.** Take $k = 10$. The general bound promises $R(10,10) > 32$. But the condition itself is sharper:
$\binom{100}{10} 2^{-44} \approx 0.98 < 1$, while $\binom{101}{10} 2^{-44} > 1$. So $R(10,10) > 100$.

*Check:* $\binom{100}{10} = 17\,310\,309\,456\,440$ and $2^{44} = 17\,592\,186\,044\,416$, so the ratio is just under 1.

Look at what has happened. We have proved that a colouring of $K_{100}$ with no monochromatic $K_{10}$ exists, and we have
no idea what it looks like. More than seventy-five years later, after a great deal of work by mathematicians and computer
scientists, no explicit construction comes close to $\sqrt{2}^{\,k}$ vertices for large $k$. The random colouring is
not just easier to analyse than the clever ones; it is better.

**Try it in Python.**

```python
from math import comb
from fractions import Fraction

def erdos_bound(k):
    n = 1
    while comb(n + 1, k) * Fraction(2) ** (1 - comb(k, 2)) < 1:
        n += 1
    return n          # every n up to this one works, so R(k,k) > n

for k in [4, 5, 10, 20]:
    print(k, erdos_bound(k))
```

It prints 6, 11, 100 and 5817. The first is honest but weak: $R(4,4) = 18$.

### Sum-free subsets

A set $B$ of numbers is **sum-free** if there are no $x, y, z \in B$ (not necessarily different) with $x + y = z$. The odd
numbers are sum-free (odd plus odd is even). How large a sum-free subset must any set of $n$ nonzero integers contain?

**Theorem 17.2 (Erdős, 1965).** Every set $A$ of $n$ nonzero integers contains a sum-free subset of more than $n/3$
elements.

*Proof.* Choose a prime $p = 3m + 2$ larger than every $|a|$ for $a \in A$. (There are infinitely many primes of this
form: if $q_1, \ldots, q_r$ were all of them, $3q_1 \cdots q_r - 1$ would have a prime factor $\equiv 2 \pmod 3$ that is
none of them. The [Number Theory book](../number-theory/15-Primes-in-Progressions.md) does all progressions.) Work modulo
$p$. The
"middle third"

$$
C = \{m+1, m+2, \ldots, 2m+1\}
$$

is sum-free modulo $p$: the sum of two of its elements lies between $2m+2$ and $4m+2$, and $4m+2 < p + (m+1)$, so the sum
reduced mod $p$ lies in $\{2m+2, \ldots, 3m+1\} \cup \{0, \ldots, m\}$, which misses $C$. Also $|C| = m+1 > (p-1)/3$.

Pick $x$ uniformly from $\{1, 2, \ldots, p-1\}$. For each fixed $a \in A$, $a \not\equiv 0 \pmod p$, so as $x$ runs over
$1, \ldots, p-1$, the product $ax \bmod p$ runs over $1, \ldots, p-1$, each exactly once. Hence

$$
P(ax \bmod p \in C) = \frac{m+1}{p-1} = \frac{m+1}{3m+1} > \frac{1}{3}.
$$

Let $X$ be the number of $a \in A$ with $ax \bmod p \in C$. Its average over $x$ is the sum of these probabilities, more than
$n/3$ (this is linearity of expectation, the subject of 17.2). So some $x$ has $X > n/3$. Let $B$ be those $a$. If
$a + b = c$ in $B$, then $ax + bx \equiv cx \pmod p$ with all three in $C$, which is impossible. So $B$ is sum-free. $\square$

The constant $1/3$ is the truth: Eberhard, Green and Manners showed in 2014 that $1/3$ cannot be replaced by any larger
constant, though Bourgain had earlier improved the bound to $(n+2)/3$.

<figure class="play" data-play="ramsey"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Random colourings, as in Erdős's argument. With 6 points a one-colour triangle is certain; Erdős showed that for large n a random colouring avoids big one-colour groups.</figcaption></figure>

## 17.2 Linearity of expectation

*Level: intermediate.* A **random variable** $X$ is a number attached to each outcome: the number of heads, the number of
monochromatic triangles. Its **expectation** (mean, average) is

$$
E[X] = \sum_{\omega \in \Omega} P(\omega) X(\omega).
$$

The averaging principle of 17.1 in this language: **some outcome has $X \ge E[X]$, and some outcome has $X \le E[X]$.**

The main tool is this:

**Theorem 17.3 (linearity of expectation).** For any random variables $X_1, \ldots, X_m$ and numbers $c_i$,

$$
E[c_1 X_1 + \cdots + c_m X_m] = c_1 E[X_1] + \cdots + c_m E[X_m].
$$

*Proof.* Expand the definition: $\sum_\omega P(\omega) \sum_i c_i X_i(\omega) = \sum_i c_i \sum_\omega P(\omega)
X_i(\omega)$. Two finite sums can be swapped. $\square$

The proof is a single line, and the power is in what it does *not* require: the $X_i$ need not be independent. The usual way
to use it is with **indicator variables**. For an event $A$, the indicator $I_A$ is 1 if $A$ happens and 0 otherwise, so
$E[I_A] = P(A)$. To compute the expected number of things of some kind, write the count as a sum of indicators, one per
possible thing, and add up the probabilities.

**Example (fixed points).** Shuffle a deck of $n$ cards. How many cards do you expect to stay in their original place? Let
$I_j$ indicate that card $j$ stays put; $P(I_j = 1) = 1/n$. So the expected number of fixed points is $n \cdot (1/n) = 1$,
for every $n$. The events are far from independent (if $n - 1$ cards are fixed, so is the last), and it does not matter.
Compare the derangement count in [Chapter 5](05-Inclusion-Exclusion.md): the chance of *no* fixed point tends to $1/e$, a
much harder fact.

**Example (cuts).** A **cut** in a graph $G$ is a split of the vertices into two sides; its size is the number of edges
with one end on each side.

**Theorem 17.4.** Every graph with $m$ edges has a cut of size at least $m/2$. Equivalently, every graph has a bipartite
subgraph containing at least half its edges.

*Proof.* Put each vertex on side L or R by a fair coin, independently. An edge $uv$ crosses the cut when the coins for $u$
and $v$ differ, which has probability $1/2$. By linearity the expected cut size is $m/2$, so some cut has at least $m/2$
edges. $\square$

*Check:* $K_4$ has 6 edges; the cut $\{1,2\} \mid \{3,4\}$ has 4 crossing edges, and $4 \ge 3$.

### Tournaments with many Hamiltonian paths

A **tournament** on $n$ players is what you get when every pair plays one game and there are no draws: a complete graph
in which each edge $\{u, v\}$ is turned into an arrow $u \to v$ ("$u$ beat $v$"). A **Hamiltonian path** is an ordering
$v_1, v_2, \ldots, v_n$ of all the players with $v_1 \to v_2 \to \cdots \to v_n$: a ranking in which each player beat the
next one.

First, every tournament has at least one. *Proof by induction (Rédei, 1934):* remove a player $v$; the rest has a path
$v_1 \to \cdots \to v_{n-1}$. If $v \to v_1$, put $v$ first. If $v_{n-1} \to v$, put $v$ last. Otherwise $v_1 \to v$ and
$v \to v_{n-1}$, so as you walk along the path the arrows between $v$ and $v_i$ switch from "into $v$" to "out of $v$" at
some $i$: $v_i \to v \to v_{i+1}$, and $v$ fits there. $\square$ Rédei proved more: the number of Hamiltonian paths is always
odd.

The transitive tournament (player $i$ beats player $j$ whenever $i < j$) has exactly one Hamiltonian path. How many can a
tournament have?

**Theorem 17.5 (Szele, 1943).** For every $n$ there is a tournament on $n$ players with at least $n!/2^{n-1}$ Hamiltonian
paths.

*Proof.* Orient each edge by a fair coin. For each of the $n!$ orderings $\sigma$ of the players, let $I_\sigma$ indicate
that $\sigma$ is a Hamiltonian path. That needs $n-1$ specific edges to point the right way, which happens with probability
$2^{-(n-1)}$. By linearity, the expected number of Hamiltonian paths is $n!/2^{n-1}$, and some tournament has at least
that many. $\square$

*Check by computer:* for $n = 5$ the average over all $2^{10} = 1024$ tournaments is $120/16 = 7.5$, and the largest number
in any tournament on 5 players is 15.

Szele also showed that the maximum is at most about $n!/2^{3n/4}$, and conjectured that the random bound is close to the
truth. Noga Alon proved in 1990 that the maximum is at most $c\, n^{3/2} n!/2^{n-1}$: the coin-flip tournament is within a
polynomial factor of the best possible.

### Independent sets: the Caro-Wei bound

An **independent set** in a graph is a set of vertices with no edges between them. Write $\alpha(G)$ for the largest size of
one, and $d(v)$ for the degree of $v$.

**Theorem 17.6 (Caro, 1979; Wei, 1981).** Every graph $G$ has

$$
\alpha(G) \ge \sum_{v} \frac{1}{d(v) + 1}.
$$

*Proof.* Put the vertices in a uniformly random order. Let $I$ be the set of vertices that come before all of their
neighbours in the order. $I$ is independent: if $u$ and $v$ were adjacent and both in $I$, each would come before the
other. Vertex $v$ is in $I$ when it is first among the $d(v) + 1$ vertices made of $v$ and its neighbours; each of those is
equally likely to be first, so $P(v \in I) = 1/(d(v)+1)$. Add over $v$ by linearity. $\square$

*Check:* for the 5-cycle every degree is 2, the bound is $5/3$, so $\alpha \ge 2$, which is right. For a complete graph
$K_n$ the bound is $n \cdot \frac{1}{n} = 1$, also right.

If $G$ has $n$ vertices and average degree $d$, the function $1/(x+1)$ is convex, so Jensen's inequality turns the
Caro-Wei sum into $\alpha(G) \ge n/(d+1)$. Applied to the complement of a graph, this gives Turán's theorem of
[Chapter 18](18-Extremal-Combinatorics.md): a graph with no $K_{r+1}$ cannot have more edges than the balanced complete
$r$-partite graph. Random orderings and extremal graph theory are close friends.

## 17.3 The deletion method

*Level: advanced.* Sometimes a random object is *almost* good: it has a few defects, but fewer than the size of the object.
Then we can delete the defects and keep what is left. This is the **deletion method**, also called **alteration**.

### Independent sets in sparse graphs

**Theorem 17.7.** A graph with $n$ vertices and $nd/2$ edges, where $d \ge 1$, has an independent set of at least
$n/(2d)$ vertices.

*Proof.* Choose each vertex independently with probability $p$, to be set later. Let $X$ be the number of chosen vertices
and $Y$ the number of edges with both ends chosen. Then $E[X] = np$ and $E[Y] = (nd/2)p^2$. Now delete one end of each of
the $Y$ edges. What remains is independent and has at least $X - Y$ vertices, and

$$
E[X - Y] = np - \frac{nd}{2}p^2.
$$

This is largest at $p = 1/d$ (allowed because $d \ge 1$), where it equals $n/d - n/(2d) = n/(2d)$. Some choice achieves at
least the average. $\square$

This is weaker than Caro-Wei by a factor of about 2, but the idea is the important part: a defect-free object of size
$X - Y$ came from an object of size $X$ with $Y$ defects.

### A better Ramsey bound

Go back to Theorem 17.1 and allow defects. Colour $K_n$ at random. Let $X$ be the number of monochromatic $K_k$. Delete one
vertex from each. What is left is a colouring of a complete graph on at least $n - X$ vertices with no monochromatic $K_k$.
Since $E[n - X] = n - \binom{n}{k}2^{1-\binom{k}{2}}$:

**Theorem 17.8.** For every $n$, $R(k,k) > n - \binom{n}{k} 2^{1-\binom{k}{2}}$.

**Worked example.** For $k = 10$, the right side is largest at $n = 127$, where $\binom{127}{10} 2^{-44} \approx 11.89$, so
some colouring of $K_{127}$ has at most 11 monochromatic $K_{10}$'s. Deleting a vertex from each leaves at least 116
vertices. So $R(10,10) > 116$, an improvement on 100. Asymptotically the deletion method gives
$R(k,k) > \frac{1}{e}(1 + o(1))\, k\, 2^{k/2}$, a factor of $\sqrt{2}$ better than the averaging argument. (The best known
lower bound for $R(10,10)$ comes from clever constructions and is much larger, 798; the probabilistic bounds win only for
large $k$.)

### High girth and high chromatic number

Here is the most famous deletion argument, and one of the most surprising theorems in graph theory. The **girth** of a
graph is the length of its shortest cycle. The **chromatic number** $\chi(G)$ is the fewest colours needed to colour the
vertices so that adjacent vertices differ ([Chapter 12](12-Planar-Graphs-and-Colouring.md)).

A graph with large girth looks like a tree near every vertex, and trees need only 2 colours. Intuition says large girth
should force small chromatic number. It does not.

**Theorem 17.9 (Erdős, 1959).** For all $g$ and $k$ there is a graph with girth greater than $g$ and chromatic number
greater than $k$.

*Proof sketch.* Take a random graph on $n$ vertices where each edge is present with probability $p = n^{\theta - 1}$, with
$0 < \theta < 1/g$. The expected number of cycles of length at most $g$ is at most $\sum_{i=3}^{g} n^i p^i =
\sum_i n^{\theta i}$, which is $o(n)$ because $\theta g < 1$. By Markov's inequality (17.4), with probability more than
$1/2$ there are fewer than $n/2$ short cycles. Separately, a counting argument shows that with probability more than $1/2$
there is no independent set of size $n/(2k)$. So with positive probability both hold. Delete one vertex from each short
cycle: at least $n/2$ vertices remain, there are no short cycles, and there is still no independent set of size $n/(2k)$.
Since each colour class is independent, at least $(n/2)/(n/(2k)) = k$ colours are needed, and a slightly more careful choice
of constants makes it more than $k$. The full details fill one page; see Alon and Spencer, chapter 3. $\square$

Explicit graphs of this kind were found only later (Lovász in 1968 gave a construction, and the Ramanujan graphs of
Lubotzky, Phillips and Sarnak, 1988, give strong explicit examples). For years this theorem was the standard example of what
random methods could do that construction could not.

## 17.4 The second moment method

*Level: advanced.* Averages show that something exists. Often we want more: that a random object *almost always* has a
property. That needs a bound on how far a random variable strays from its mean.

**Markov's inequality.** If $X \ge 0$ and $a > 0$, then $P(X \ge a) \le E[X]/a$.

*Proof.* $E[X] \ge E[X \cdot I_{X \ge a}] \ge a \cdot P(X \ge a)$. $\square$

In particular, for a counting variable $X$ (values $0, 1, 2, \ldots$), $P(X \ge 1) \le E[X]$. So **if $E[X] \to 0$, then
almost surely $X = 0$.** This is the **first moment method**.

The other direction fails: $E[X] \to \infty$ does not force $X \ge 1$. (A lottery that pays a billion dollars with
probability one in a thousand has a large mean but usually pays nothing.) What saves us is the **variance**

$$
\operatorname{Var}(X) = E\big[(X - E[X])^2\big] = E[X^2] - E[X]^2,
$$

which measures spread.

**Chebyshev's inequality.** $P(|X - E[X]| \ge a) \le \operatorname{Var}(X)/a^2$.

*Proof.* Apply Markov to the nonnegative variable $(X - E[X])^2$ and the number $a^2$. $\square$

**The second moment method.** If $X$ is a counting variable then

$$
P(X = 0) \le \frac{\operatorname{Var}(X)}{E[X]^2}.
$$

*Proof.* If $X = 0$ then $|X - E[X]| = E[X]$; use Chebyshev with $a = E[X]$. $\square$

So if $\operatorname{Var}(X) = o(E[X]^2)$, then almost surely $X \ge 1$, and in fact $X$ is close to $E[X]$.

### Computing variances of counts

Write $X = \sum_i I_i$, a sum of indicators of events $A_i$. Then

$$
\operatorname{Var}(X) = \sum_i \operatorname{Var}(I_i) + \sum_{i \ne j} \operatorname{Cov}(I_i, I_j),
$$

where $\operatorname{Cov}(I_i, I_j) = P(A_i \cap A_j) - P(A_i)P(A_j)$. Two simple facts do most of the work:
$\operatorname{Var}(I_i) \le E[I_i]$, and if $A_i$ and $A_j$ are independent then their covariance is 0. So

$$
\operatorname{Var}(X) \le E[X] + \sum_{i \sim j} P(A_i \cap A_j),
$$

where $i \sim j$ runs over the ordered pairs $i \ne j$ whose events are *not* independent.

### Triangles in a random graph

The **random graph** $G(n,p)$ has vertices $1, \ldots, n$, and each of the $\binom{n}{2}$ possible edges is present
independently with probability $p$. (Section 17.6 is about these graphs in general.) When does $G(n,p)$ contain a triangle?

**Theorem 17.10.** If $np \to 0$ then almost surely $G(n,p)$ has no triangle. If $np \to \infty$ then almost surely it has
one.

*Proof.* Let $X$ count triangles, one indicator per 3-set of vertices. Each 3-set is a triangle with probability $p^3$, so

$$
E[X] = \binom{n}{3}p^3 \approx \frac{(np)^3}{6}.
$$

If $np \to 0$, $E[X] \to 0$ and Markov finishes it.

If $np \to \infty$: two triangles on 3-sets $T \ne T'$ are dependent only if they share an edge, that is, share exactly 2
vertices. The number of such ordered pairs is $\binom{n}{3} \cdot 3 \cdot (n-3)$ (choose $T$, choose which edge of $T$ to
keep, choose the new vertex), and for each the two triangles use 5 edges, so $P(A_T \cap A_{T'}) = p^5$. Hence

$$
\frac{\operatorname{Var}(X)}{E[X]^2} \le \frac{1}{E[X]} + \frac{3(n-3)\binom{n}{3}p^5}{\binom{n}{3}^2 p^6}
= \frac{1}{E[X]} + \frac{3(n-3)}{\binom{n}{3}\, p} .
$$

The first term tends to 0 because $E[X] \to \infty$. The second is about $18/(n^2 p) = 18/(n \cdot np)$, which also tends to
0. By the second moment method, $P(X = 0) \to 0$. $\square$

So $p = 1/n$ is a **threshold**: triangles appear when the expected number of edges per vertex, about $np$, passes a
constant. At $p = c/n$ for a constant $c$, the number of triangles is not concentrated; it tends to a Poisson distribution
with mean $c^3/6$. Every fixed graph $H$ has a threshold of this kind, worked out by Erdős and Rényi for balanced graphs and
by Bollobás (1981) in general: it is $n^{-1/m(H)}$, where $m(H)$ is the largest ratio of edges to vertices over subgraphs
of $H$. For $K_4$ that ratio is $6/4$ and the threshold is $n^{-2/3}$.

The second moment method has a famous number-theory ancestor. In 1934 Pál Turán computed the mean and variance of the number
of prime factors $\omega(m)$ of a random $m \le N$, found both close to $\ln \ln N$, and deduced from Chebyshev that almost
all $m$ have about $\ln \ln m$ prime factors, a theorem Hardy and Ramanujan had proved in 1917 by a much harder route.

## 17.5 The Lovász local lemma

*Level: expert.* We have two extreme ways to show that no bad event happens.

- **Union bound:** if $\sum P(A_i) < 1$, done. This works only when there are few bad events or they are very rare.
- **Independence:** if the $A_i$ are mutually independent and each has $P(A_i) < 1$, then
  $P(\text{none}) = \prod (1 - P(A_i)) > 0$, however many there are.

Most real problems sit between: many bad events, each rare, each depending on only a few others. In 1975 Erdős and László
Lovász proved that in this situation you can still win.

**Definitions.** An event $A$ is **mutually independent** of a set of events $\{B_1, \ldots, B_m\}$ if $P(A \mid C) = P(A)$
for every event $C$ built from the $B_j$ by intersections and complements (with $P(C) > 0$). A **dependency graph** for
events $A_1, \ldots, A_N$ is a graph on $\{1, \ldots, N\}$ such that each $A_i$ is mutually independent of the events that
are not its neighbours.

The standard source of dependency graphs: if each event is determined by some set of independent coin flips, connect $i$
and $j$ when their sets of coins overlap. Events using disjoint coins are mutually independent.

**Theorem 17.11 (Lovász local lemma, symmetric form).** Let $A_1, \ldots, A_N$ be events with $P(A_i) \le p$ for all $i$,
with a dependency graph of maximum degree at most $d$. If

$$
e\, p\, (d+1) \le 1,
$$

then $P(\overline{A_1} \cap \cdots \cap \overline{A_N}) > 0$. Here $e = 2.718\ldots$ and $\overline{A}$ means "$A$ does not
happen".

The remarkable thing is that $N$ does not appear. A billion bad events are no worse than ten, so long as each one is rare
compared with the number of its neighbours.

We prove the slightly weaker condition $4pd \le 1$, which has the same shape and the same proof idea (the version with $e$
uses a cleverer induction hypothesis; see Alon and Spencer, chapter 5).

*Proof (with $4pd \le 1$).* If $d = 0$ the events are mutually independent and we are done, so assume $d \ge 1$. We prove,
by induction on $|S|$:

> **Claim.** For every $i$ and every set $S$ of indices not containing $i$ with $P(\bigcap_{j \in S} \overline{A_j}) > 0$,
> $P\big(A_i \mid \bigcap_{j \in S} \overline{A_j}\big) \le 2p$.

If $S$ is empty this says $P(A_i) \le 2p$, which is true. In general split $S$ into $S_1$, the neighbours of $i$ in $S$,
and $S_2 = S \setminus S_1$. If $S_1$ is empty, $A_i$ is mutually independent of the events in $S_2 = S$ and the
probability is $P(A_i) \le p$. Otherwise write $B_1 = \bigcap_{j \in S_1} \overline{A_j}$ and
$B_2 = \bigcap_{j \in S_2} \overline{A_j}$, so that

$$
P(A_i \mid B_1 \cap B_2) = \frac{P(A_i \cap B_1 \mid B_2)}{P(B_1 \mid B_2)}.
$$

*Numerator:* $P(A_i \cap B_1 \mid B_2) \le P(A_i \mid B_2) = P(A_i) \le p$, since $A_i$ is mutually independent of the
events in $S_2$.

*Denominator:* by the union bound, $P(B_1 \mid B_2) \ge 1 - \sum_{j \in S_1} P(A_j \mid B_2)$. Each term is at most $2p$
by the induction hypothesis (applied to $j$ and the smaller set $S_2$), and there are at most $d$ terms, so the
denominator is at least $1 - 2pd \ge 1 - 1/2 = 1/2$.

Together, $P(A_i \mid B_1 \cap B_2) \le p/(1/2) = 2p$, proving the claim. Finally, by the chain rule for conditional
probability,

$$
P\Big(\bigcap_{i=1}^{N} \overline{A_i}\Big) = \prod_{i=1}^{N} P\Big(\overline{A_i} \;\Big|\; \bigcap_{j < i}
\overline{A_j}\Big) \ge (1 - 2p)^N > 0,
$$

since $2p \le 1/(2d) \le 1/2$. (Each conditioning event has positive probability by the same product, applied to fewer
events, so the induction is legitimate.) $\square$

The final product $(1-2p)^N$ is tiny when $N$ is large: the good outcome exists but is rare. Rarity is fine for
existence. It used to be a problem for finding one; see below.

### Uses

**Satisfiability.** A **$k$-SAT formula** is a list of clauses, each an "or" of $k$ literals (a variable or its negation),
on distinct variables; it is **satisfiable** if some true/false assignment makes every clause true. Set each variable by a
fair coin. A clause fails with probability exactly $2^{-k}$ (all $k$ literals must be false). Two clause-failures are
dependent only if the clauses share a variable.

**Corollary 17.12.** If every clause of a $k$-SAT formula shares variables with at most $2^k/e - 1$ other clauses, the
formula is satisfiable. (With our weaker version: at most $2^{k-2}$ others.)

The number of clauses is irrelevant. A 10-SAT formula with a million clauses, each sharing variables with at most 255 others,
is satisfiable: $4 \cdot 2^{-10} \cdot 256 = 1$.

**Colouring hypergraphs.** A **$k$-uniform hypergraph** is a collection of $k$-element subsets ("edges") of a vertex set. It
is **2-colourable** (has **property B**) if you can colour the vertices red and blue with no monochromatic edge.

**Corollary 17.13.** If every edge of a $k$-uniform hypergraph meets at most $d$ other edges and $e(d+1) \le 2^{k-1}$, it is
2-colourable.

*Proof.* Colour randomly. An edge is monochromatic with probability $2 \cdot 2^{-k} = 2^{1-k}$, and depends only on the
edges it meets. $\square$

The lines of the Fano plane ([Chapter 19](19-Designs-and-Codes.md)) form a 3-uniform hypergraph that is *not*
2-colourable; there each edge meets all 6 others, and $e \cdot 7 > 4$, so there is no contradiction.

**Ramsey again.** Applied to the events "the $k$-set $S$ is monochromatic", which depend on each other when the sets share at
least 2 vertices, the local lemma gives Spencer's bound $R(k,k) > \frac{\sqrt{2}}{e}(1 + o(1))\, k\, 2^{k/2}$ (1975), twice
the deletion bound. Almost fifty years later this is still the best known lower bound for diagonal Ramsey numbers.

### Finding the good outcome

For thirty-five years the local lemma was an existence theorem with no efficient way to find what it promised. Beck (1991)
found algorithms under stronger conditions, and in 2010 Robin Moser and Gábor Tardos found an astonishingly simple one:
**start with a random assignment; while some bad event happens, pick one and resample just the variables it depends on.**
Under the conditions of the general local lemma, the expected total number of resamplings is at most a sum of terms of the
form $x_i/(1-x_i)$ over the events, so it is linear in $N$. Their analysis (a "witness tree" argument, and later an
"entropy compression" argument by Moser) is one of the gems of modern combinatorics.

**Try it in Python.**

```python
import random

def moser_tardos(n, edges, seed=1):
    rng = random.Random(seed)
    colour = [rng.randint(0, 1) for _ in range(n)]
    steps = 0
    while True:
        bad = [e for e in edges if len({colour[v] for v in e}) == 1]
        if not bad:
            return colour, steps
        for v in bad[0]:                 # resample one bad edge
            colour[v] = rng.randint(0, 1)
        steps += 1

rng = random.Random(0)
n = 30
edges = [rng.sample(range(n), 5) for _ in range(80)]
colour, steps = moser_tardos(n, edges)
print("resamplings:", steps)
print(all(len({colour[v] for v in e}) == 2 for e in edges))
```

It 2-colours 80 random 5-sets of 30 points after only a few resamplings and prints `True`. (These random edges do not
satisfy the local lemma's condition, so here the loop is not guaranteed to stop quickly; on a hypergraph that is not
2-colourable at all, it would never stop.)

## 17.6 Random graphs and thresholds

*Level: expert.* In 1959 Erdős and Alfréd Rényi published "On random graphs I", and in 1960 "On the evolution of random
graphs". Edgar Gilbert introduced the same model independently in 1959. The question they asked was new: **what does a
typical graph look like?** Their answers created a field.

### The models

- $G(n,p)$: $n$ labelled vertices, each possible edge present independently with probability $p$ (Gilbert's model).
- $G(n,m)$: a uniformly random graph on $n$ labelled vertices with exactly $m$ edges (Erdős and Rényi's model).

When $m \approx p\binom{n}{2}$ the two behave alike for almost every question, and today $G(n,p)$ is usually called the
**Erdős-Rényi random graph**. We say $G(n,p)$ has a property **almost surely** (or **with high probability**) if the
probability tends to 1 as $n \to \infty$. Here $p = p(n)$ is allowed to depend on $n$; the interesting action is at small
$p$.

A property is **monotone increasing** if adding edges cannot destroy it: containing a triangle, being connected, having a
Hamiltonian cycle. For such a property, a function $p^*(n)$ is a **threshold** if $G(n,p)$ almost surely lacks the property
when $p \ll p^*$ (meaning $p/p^* \to 0$), and almost surely has it when $p \gg p^*$. Section 17.4 showed that $1/n$ is a
threshold for containing a triangle.

Bollobás and Thomason proved in 1987 that **every** monotone property has a threshold. Some thresholds are **sharp**: the
probability jumps from near 0 to near 1 as $p$ changes by a factor of $1 + \varepsilon$, not merely by a large factor.
Triangles do not have a sharp threshold; connectivity does.

### The evolution of $G(n, p)$

As $p$ grows from 0, Erdős and Rényi found the graph passing through phases. Take $p = c/n$, so the average degree is about
$c$.

- For $c < 1$, almost surely every component has $O(\log n)$ vertices, and all are trees or have at most one cycle.
- At $c = 1$ something like a phase transition in physics happens.
- For $c > 1$, almost surely there is a single **giant component** with about $\beta n$ vertices, where $\beta$ is the
  positive solution of $\beta = 1 - e^{-c\beta}$; every other component has $O(\log n)$ vertices.

*Check:* for $c = 2$, iterating $\beta \mapsto 1 - e^{-2\beta}$ from $0.5$ settles at $\beta \approx 0.797$: about 80% of
the vertices are in one piece once each vertex has 2 neighbours on average.

The proof of the giant component compares exploring a component to a branching process (each vertex has a random number of
new neighbours, about Poisson with mean $c$), which dies out with probability $1 - \beta$. We do not prove it here; see
Frieze and Karoński, chapter 2.

### Connectivity: a sharp threshold

The giant component swallows almost everything, but connectivity needs *every* vertex to join. The last vertices to join
are the loneliest ones: those with no edges at all. The theorem says these are the only obstacle.

**Theorem 17.14 (Erdős and Rényi, 1959).** Let $p = \dfrac{\ln n + c}{n}$ with $c$ a constant. Then

$$
P\big(G(n,p) \text{ is connected}\big) \to e^{-e^{-c}} \quad (n \to \infty).
$$

In particular, if $p = (\ln n + \omega(n))/n$ with $\omega(n) \to \infty$ the graph is almost surely connected, and if
$\omega(n) \to -\infty$ it is almost surely disconnected.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="The curve e to the minus e to the minus c, rising from 0 at c equals minus 3 through 0.37 at c equals 0 to nearly 1 at c equals 4. It is the limiting probability that the random graph with p equal to log n plus c over n is connected">
  <line x1="60" y1="170" x2="385" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="170" x2="60" y2="22" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="30" x2="385" y2="30" stroke="currentColor" stroke-dasharray="4 4" stroke-opacity="0.6"/>
  <line x1="195" y1="170" x2="195" y2="118.5" stroke="#9cc9ea" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="60" y1="118.5" x2="195" y2="118.5" stroke="#9cc9ea" stroke-width="1.5" stroke-dasharray="3 3"/>
  <polyline fill="none" stroke="#eea66f" stroke-width="3" points="60.0,170.0 71.2,170.0 82.5,170.0 93.8,170.0 105.0,169.9 116.2,169.6 127.5,168.4 138.8,165.7 150.0,160.8 161.2,153.1 172.5,143.1 183.8,131.2 195.0,118.5 206.2,105.7 217.5,93.7 228.8,82.7 240.0,73.1 251.2,64.9 262.5,58.0 273.8,52.3 285.0,47.7 296.2,44.0 307.5,41.0 318.8,38.7 330.0,36.8 341.2,35.3 352.5,34.2 363.8,33.3 375.0,32.5"/>
  <circle cx="195" cy="118.5" r="4" fill="#7ccf9a" stroke="currentColor"/>
  <text x="52" y="174" text-anchor="end" font-size="12" fill="currentColor">0</text>
  <text x="52" y="122" text-anchor="end" font-size="12" fill="currentColor">0.37</text>
  <text x="52" y="34" text-anchor="end" font-size="12" fill="currentColor">1</text>
  <text x="60" y="186" text-anchor="middle" font-size="12" fill="currentColor">−3</text>
  <text x="105" y="186" text-anchor="middle" font-size="12" fill="currentColor">−2</text>
  <text x="150" y="186" text-anchor="middle" font-size="12" fill="currentColor">−1</text>
  <text x="195" y="186" text-anchor="middle" font-size="12" fill="currentColor">0</text>
  <text x="240" y="186" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <text x="285" y="186" text-anchor="middle" font-size="12" fill="currentColor">2</text>
  <text x="330" y="186" text-anchor="middle" font-size="12" fill="currentColor">3</text>
  <text x="375" y="186" text-anchor="middle" font-size="12" fill="currentColor">4</text>
  <text x="222" y="206" text-anchor="middle" font-size="13" fill="currentColor">c, where p = (ln n + c)/n</text>
  <text x="250" y="140" font-size="13" fill="currentColor">P(connected) → exp(−e^(−c))</text>
</svg>
</div>

The window is narrow. For $n = 1{,}000{,}000$, $\ln n \approx 13.8$: at average degree about 11.8 the graph is
almost surely disconnected, at about 15.8 it is connected with probability about 0.87, and the whole transition takes place
while the average degree changes by a few units, compared with a total of 13.8.

We prove the part about isolated vertices completely, then sketch the rest.

**Isolated vertices.** Let $X$ count isolated vertices (degree 0). Vertex $v$ is isolated when all $n - 1$ of its possible
edges are missing, so

$$
E[X] = n(1-p)^{n-1}.
$$

Since $\ln(1 - p) = -p + O(p^2)$ and $np^2 \to 0$ here, $(1-p)^{n-1} = e^{-np + o(1)}$. With $p = (\ln n + c)/n$ this gives
$e^{-\ln n - c + o(1)}$, so $E[X] \to e^{-c}$.

*If $c = c(n) \to +\infty$:* $E[X] \to 0$, so almost surely there is no isolated vertex (first moment).

*If $c = c(n) \to -\infty$:* $E[X] \to \infty$. For the variance, two distinct vertices $u, v$ are both isolated when
$2(n-1) - 1 = 2n - 3$ edges are missing (the edge $uv$ is shared), so

$$
E[X^2] = E[X] + n(n-1)(1-p)^{2n-3}, \qquad \frac{E[X^2]}{E[X]^2} = \frac{1}{E[X]} + \frac{n-1}{n}\cdot\frac{1}{1-p} \to 1.
$$

So $\operatorname{Var}(X)/E[X]^2 \to 0$, almost surely there *is* an isolated vertex, and the graph is disconnected.

*If $c$ is a fixed constant:* a computation of all the moments $E\big[\binom{X}{r}\big] \to e^{-cr}/r!$ shows that $X$
tends to a **Poisson** distribution with mean $\mu = e^{-c}$, so $P(X = 0) \to e^{-\mu} = e^{-e^{-c}}$.

**The rest (sketch).** A graph is disconnected exactly when some set of $k$ vertices, with $1 \le k \le n/2$, forms a
union of components. For $k \ge 2$ such a set must contain a spanning tree (at most $k^{k-2}$ choices, by Cayley's formula
of [Chapter 11](11-Trees.md), each present with probability $p^{k-1}$) and have no edges to the other $n-k$ vertices
(probability $(1-p)^{k(n-k)}$). So the expected number of components of size $k$ is at most

$$
\binom{n}{k} k^{k-2} p^{k-1} (1-p)^{k(n-k)},
$$

and summing over $2 \le k \le n/2$ at $p = (\ln n + c)/n$ gives something that tends to 0. So almost surely the only small
components are isolated vertices, and "connected" and "no isolated vertex" have the same limiting probability.

**Try it in Python.** A union-find simulation agrees with the limit even at $n = 300$:

```python
import math, random

def connected_gnp(n, p, rng):
    parent = list(range(n))
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x
    comps = n
    for i in range(n):
        for j in range(i + 1, n):
            if rng.random() < p:
                a, b = find(i), find(j)
                if a != b:
                    parent[a] = b
                    comps -= 1
    return comps == 1

rng = random.Random(2026)
n = 300
for c in [-1, 0, 1, 2]:
    p = (math.log(n) + c) / n
    hits = sum(connected_gnp(n, p, rng) for _ in range(200))
    print(c, hits / 200, round(math.exp(-math.exp(-c)), 3))
```

The simulated fractions (0.06, 0.335, 0.72, 0.885 with this seed) sit close to the limits 0.066, 0.368, 0.692, 0.873.

### Honest remarks

Several things about random graphs are easy to over-sell.

- "Almost surely" is a statement about $n \to \infty$. For a specific $n$ the error terms can be large, and the Poisson
  limit above is only an approximation at $n = 300$, though a good one.
- $G(n,p)$ is a terrible model of real networks such as the web or friendship networks: those have a few vertices of huge
  degree and many triangles, while $G(n,p)$ has nearly equal degrees and few triangles when $p$ is small. Other random models
  were invented for those. The value of $G(n,p)$ is as a mathematical object and as a source of examples, as in 17.1 to 17.5.
- Thresholds can be hard. Kahn and Kalai conjectured (in a paper published in 2007) that every threshold is within a factor of $O(\log n)$ of a
  simple "expectation threshold" that you can compute by counting. Jinyoung Park and Huy Tuan Pham proved this in 2022, with
  a short proof that surprised the experts.

## A short history

The method is older than its name. Szele's tournament theorem (1943) and Shannon's 1949 counting argument that most Boolean
functions need large circuits are early examples. Erdős's 1947 Ramsey paper made it famous, and he used it for the rest of
his life. Erdős and Rényi's random graph papers of 1959 and 1960 turned random objects from a tool into a subject. The local
lemma appeared in a 1975 paper of Erdős and Lovász on 3-chromatic hypergraphs; Spencer's Ramsey application came the same
year. Noga Alon and Joel Spencer's book *The Probabilistic Method* (first edition 1992) collected the subject and is still
where most people learn it. The algorithmic local lemma of Moser and Tardos (2010) won the Gödel Prize in 2020.

## Check yourself

??? question "1. Show that every graph with $m$ edges has a bipartite subgraph with at least $m/2$ edges, and find the largest bipartite subgraph of $K_4$."

    Put each vertex on a random side; each edge crosses with probability $1/2$, so the expected number of crossing edges
    is $m/2$, and some split achieves at least that. Keep the crossing edges: they form a bipartite subgraph. For $K_4$
    ($m = 6$), a 2-2 split gives $2 \cdot 2 = 4$ crossing edges and a 1-3 split gives 3, so the maximum is 4.

??? question "2. Use the averaging bound of Theorem 17.1 to show $R(4,4) > 6$. Why does the same bound not give $R(4,4) > 7$?"

    $\binom{6}{4} 2^{1-6} = 15/32 < 1$, so some colouring of $K_6$ has no monochromatic $K_4$. For $n = 7$:
    $\binom{7}{4}2^{-5} = 35/32 > 1$, and the union bound says nothing. (In fact $R(4,4) = 18$.)

??? question "3. In a random red/blue colouring of the edges of $K_n$, what is the expected number of monochromatic triangles? Deduce that some colouring of $K_6$ has at most 5."

    Each of the $\binom{n}{3}$ triangles is monochromatic with probability $2 \cdot 2^{-3} = 1/4$, so the expectation is
    $\binom{n}{3}/4$. For $n = 6$ that is $20/4 = 5$, and some colouring achieves at most the average. (By Chapter 16
    every colouring of $K_6$ has at least one; in fact Goodman's formula shows the minimum is 2.)

??? question "4. Shuffle $n$ cards. What is the expected number of positions $i$ with card $i+1$ immediately after card $i$ (for $i = 1, \ldots, n-1$)?"

    For each $i$, the pair $(i, i+1)$ is adjacent in that order with probability $(n-1)!/n! = 1/n$: glue the two cards
    into one block and arrange $n-1$ blocks. There are $n-1$ such $i$, so the expectation is $(n-1)/n$.

??? question "5. Apply the Caro-Wei bound to the star $K_{1,5}$ and to the cycle $C_6$. How close is it?"

    Star: centre degree 5, leaves degree 1: $1/6 + 5 \cdot 1/2 = 2\tfrac{2}{3}$, so $\alpha \ge 3$; the truth is 5 (the
    leaves). Cycle $C_6$: $6 \cdot 1/3 = 2$; the truth is 3. The bound is exact for disjoint unions of cliques and can be
    weak otherwise.

??? question "6. A 10-SAT formula has a million clauses, and each variable appears in at most 25 clauses. Is it satisfiable?"

    A clause has 10 variables, each in at most 24 other clauses, so it shares variables with at most $10 \cdot 24 = 240$
    others. Since $240 \le 2^{10-2} = 256$, the weak form of the local lemma ($4pd \le 1$ with $p = 2^{-10}$) applies:
    $4 \cdot 2^{-10} \cdot 240 < 1$. So it is satisfiable, and Moser-Tardos finds an assignment quickly.

??? question "7. In $G(n,p)$ with $p = c/n$, what is the limit of the expected number of triangles? Of 4-cycles?"

    Triangles: $\binom{n}{3}p^3 \to c^3/6$. A 4-cycle is determined by 4 vertices and one of 3 cyclic orders, so the count
    is $3\binom{n}{4}p^4 \to 3c^4/24 = c^4/8$. Both stay bounded, which is the first sign that $1/n$ is the threshold for every
    fixed cycle.

??? question "8. Show with the deletion method that a graph with $n$ vertices and average degree $d \ge 1$ has an independent set of size at least $n/(2d)$, filling in the choice of $p$."

    Choose vertices with probability $p$; expect $np$ vertices and $(nd/2)p^2$ edges inside. Deleting an end of each edge
    leaves an independent set of expected size $f(p) = np - ndp^2/2$. Since $f'(p) = n - ndp = 0$ at $p = 1/d \le 1$,
    $f(1/d) = n/(2d)$. Some outcome reaches the average.

??? question "9. Why does the local lemma not contradict the fact that the Fano plane's 7 lines cannot be 2-coloured?"

    In a random colouring a line is monochromatic with probability $p = 1/4$. Any two lines of the Fano plane meet, so each
    event depends on all $d = 6$ others. The condition $ep(d+1) \le 1$ would need $e \cdot 7/4 \le 1$, which is false
    (it is about 4.76), so the lemma does not apply.

??? question "10. Let $X$ count isolated vertices in $G(n,1/2)$. Compute $E[X]$ and show that almost surely $G(n,1/2)$ has none."

    $E[X] = n \cdot 2^{-(n-1)}$, which tends to 0 (for $n = 30$ it is about $5.6 \times 10^{-8}$). By Markov,
    $P(X \ge 1) \le E[X] \to 0$.

??? question "11. Prove that a random permutation of $n$ items has $1 + \frac{1}{2} + \cdots + \frac{1}{n}$ cycles on average."

    Give each item $j$ the weight $1/\ell_j$, where $\ell_j$ is the length of the cycle containing $j$. A cycle of length
    $\ell$ has $\ell$ items of weight $1/\ell$, so the total weight is exactly the number of cycles. Now item $j$ lies in a
    cycle of length $\ell$ with probability $1/n$ for each $\ell = 1, \ldots, n$: follow $j \to \pi(j) \to \pi^2(j) \to \cdots$;
    the number of permutations in which $j$ returns after exactly $\ell$ steps is $(n-1)(n-2)\cdots(n-\ell+1) \cdot (n-\ell)! = (n-1)!$,
    the same for every $\ell$. So by linearity

    $$
    E[\text{cycles}] = \sum_{j=1}^{n} \sum_{\ell=1}^{n} \frac{1}{n}\cdot\frac{1}{\ell} = H_n .
    $$

    Check $n = 3$: the 6 permutations have $3, 2, 2, 2, 1, 1$ cycles, average $11/6 = 1 + \frac12 + \frac13$.

??? question "12. Show that for every $k$, if $n$ is large enough, some tournament on $n$ players has this property: for every $k$ players there is another player who beat all of them."

    Orient at random. Fix a $k$-set $S$. Each of the other $n - k$ players beats all of $S$ with probability $2^{-k}$,
    independently of the others, so nobody does with probability $(1 - 2^{-k})^{n-k}$. By the union bound, the chance that
    some $k$-set has no such player is at most $\binom{n}{k}(1-2^{-k})^{n-k} \le n^k e^{-(n-k)/2^k}$, which tends to 0 as
    $n \to \infty$ because exponential decay beats the polynomial $n^k$. So for large $n$ it is below 1 and such a tournament
    exists. (This is Erdős' 1963 answer to a question of Schütte. For $k = 2$ the smallest example has 7 players.)

## What you learned

- If a random object is good with positive probability, a good object exists; the union bound turns "few rare bad events"
  into "probability less than 1".
- Erdős' random colouring gives $R(k,k) > 2^{k/2}$, still better than every explicit construction.
- Linearity of expectation needs no independence; with indicator variables it gives big cuts, Szele's tournaments and the
  Caro-Wei bound.
- The deletion method repairs a random object by removing its few defects, proving for instance that graphs of huge girth
  and huge chromatic number exist.
- Markov's inequality shows things almost surely do not exist; Chebyshev's inequality and the variance show they almost
  surely do.
- The Lovász local lemma handles many rare bad events with limited dependence, whatever their number, and Moser and Tardos
  made it an algorithm.
- In $G(n,p)$, triangles appear at $p \approx 1/n$, a giant component at $p = 1/n$, and connectivity sharply at
  $p = \ln n / n$, where isolated vertices are the last obstacle.

**Next:** [Chapter 18](18-Extremal-Combinatorics.md), how large a graph or set family can be before a forced structure
appears: Mantel, Turán, Sperner and Erdős-Ko-Rado.

## Further reading

- N. Alon and J. H. Spencer, *The Probabilistic Method*, 4th edition, Wiley, 2016. The standard text; chapters 1 to 5 cover
  this chapter.
- P. Erdős, "Some remarks on the theory of graphs", *Bulletin of the AMS* 53, 1947.
- P. Erdős and A. Rényi, "On the evolution of random graphs", *Publications of the Mathematical Institute of the Hungarian
  Academy of Sciences* 5, 1960.
- P. Erdős and L. Lovász, "Problems and results on 3-chromatic hypergraphs and some related questions", in *Infinite and
  Finite Sets*, 1975.
- R. A. Moser and G. Tardos, "A constructive proof of the general Lovász local lemma", *Journal of the ACM* 57, 2010.
- A. Frieze and M. Karoński, *Introduction to Random Graphs*, Cambridge University Press, 2016.
- B. Bollobás, *Random Graphs*, 2nd edition, Cambridge University Press, 2001.
- J. Park and H. T. Pham, "A proof of the Kahn-Kalai conjecture", *Journal of the AMS*, 2024.
- On this site: [expected value](../../topics/probability/level-7/02-expected-value.md),
  [variance](../../topics/probability/level-7/03-variance-spread.md),
  [the binomial distribution](../../topics/probability/level-7/04-binomial-distribution.md) and
  [Monte Carlo methods](../../topics/probability/level-8/07-monte-carlo.md) in the Topics; Ramsey numbers in
  [Chapter 16](16-Ramsey-Theory.md); the [Number Theory book](../number-theory/index.md) for Turán's
  prime-factor argument and primes in progressions.
