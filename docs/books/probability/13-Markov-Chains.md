# 13. Markov chains

*Until now our random experiments were either independent (coin after coin) or tied together all at once (a joint
distribution). Most things that change in time are in between: tomorrow's weather depends on today's, the next page
you visit depends on the page you are on, the next order of a deck depends on the order it is in now. A Markov chain is
the simplest model of "the future depends on the present, and on nothing older". In this chapter you will write chains
as matrices, compute where they are after $n$ steps, sort their states into classes, prove that a finite chain that
mixes well forgets where it started and settles into a stationary distribution, compute how long an absorbing chain
takes to stop, and see two famous uses: the ranking of web pages and the question of how many shuffles mix a deck.*

!!! abstract "In this chapter"
    **You will learn:**

    - what the Markov property says, and how a transition matrix holds a whole chain
    - the Chapman-Kolmogorov equations: $n$-step probabilities are matrix powers
    - how to classify states: communicating classes, recurrent and transient states, periods
    - stationary distributions, detailed balance, and the convergence theorem, proved by coupling
    - absorbing chains: the fundamental matrix, expected time to absorption, absorption probabilities
    - PageRank as a stationary distribution, and why seven riffle shuffles are close to enough for 52 cards

    **You need:** [Chapter 3](03-Conditional-Probability-and-Independence.md) (conditional probability, the law of
    total probability, gambler's ruin), [Chapter 6](06-Expectation-and-Variance.md) (expectation) and
    [Chapter 8](08-Generating-Functions-in-Probability.md) (random walks, return probabilities). Matrix multiplication
    is used throughout; eigenvalues appear only as a remark. No calculus is needed in this chapter. The gentler version
    is [Random walks and Markov chains](../../topics/probability/level-8/06-random-walks-markov.md).

    **Levels:** 13.1 and 13.2 are intermediate; 13.3 and 13.5 are intermediate to advanced; 13.4 is advanced
    (full proofs); 13.6 is advanced, with pointers to expert work.

## 13.1 Transition matrices

Start with a toy weather model. Each day is either **dry** (D) or **wet** (W). Records suggest: after a dry day, the
next day is dry 80% of the time; after a wet day, the next day is wet 60% of the time. If we believe that knowing the
weather two or more days ago adds nothing once we know today's weather, we have a Markov chain.

**Definition.** A sequence of random variables $X_0, X_1, X_2, \dots$ taking values in a countable set $S$ (the
**state space**) is a **Markov chain** if for every $n$ and every choice of states

$$
P(X_{n+1} = j \mid X_n = i, X_{n-1} = i_{n-1}, \dots, X_0 = i_0) = P(X_{n+1} = j \mid X_n = i)
$$

whenever the left side is defined. This is the **Markov property**: given the present, the past is irrelevant for the
future. The chain is **time-homogeneous** if the right side does not depend on $n$; we then write it $p_{ij}$, the
**transition probability** from $i$ to $j$. All chains in this book are time-homogeneous.

The numbers $p_{ij}$ form the **transition matrix** $P = (p_{ij})$, with one row and one column for each state. Row $i$
is the distribution of the next state when the present state is $i$, so every entry is at least 0 and every row adds
up to 1. A square matrix with these two properties is called **stochastic**. For the weather chain, with the states in
the order D, W:

$$
P = \begin{pmatrix} 0.8 & 0.2 \\ 0.4 & 0.6 \end{pmatrix}.
$$

A chain is drawn as a **transition diagram**: a dot for each state, an arrow $i \to j$ labelled $p_{ij}$ whenever
$p_{ij} > 0$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 150" role="img" aria-label="Transition diagram of the weather chain. State D (dry) on the left and W (wet) on the right. Arrow from D to W labelled 0.2, arrow from W to D labelled 0.4, a loop at D labelled 0.8 and a loop at W labelled 0.6.">
  <defs><marker id="prb13-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
  <circle cx="100" cy="75" r="26" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="260" cy="75" r="26" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <text x="100" y="81" text-anchor="middle" font-size="18" fill="currentColor">D</text>
  <text x="260" y="81" text-anchor="middle" font-size="18" fill="currentColor">W</text>
  <path d="M122,62 Q180,28 238,62" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#prb13-arr)"/>
  <path d="M238,88 Q180,122 122,88" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#prb13-arr)"/>
  <path d="M77,63 C35,35 35,115 77,87" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#prb13-arr)"/>
  <path d="M283,63 C325,35 325,115 283,87" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#prb13-arr)"/>
  <text x="180" y="36" text-anchor="middle" font-size="14" fill="currentColor">0.2</text>
  <text x="180" y="127" text-anchor="middle" font-size="14" fill="currentColor">0.4</text>
  <text x="24" y="80" text-anchor="middle" font-size="14" fill="currentColor">0.8</text>
  <text x="338" y="80" text-anchor="middle" font-size="14" fill="currentColor">0.6</text>
</svg>
</div>

A chain is fully described by its transition matrix and its **initial distribution** $\mu$, the distribution of
$X_0$, written as a row vector $\mu = (\mu_i)_{i \in S}$. Indeed, by the multiplication rule of Chapter 3 and the
Markov property, the probability of any finite path is a product:

$$
P(X_0 = i_0, X_1 = i_1, \dots, X_n = i_n) = \mu_{i_0}\, p_{i_0 i_1}\, p_{i_1 i_2} \cdots p_{i_{n-1} i_n}.
$$

*Proof.* Write the left side as $P(X_0 = i_0) \cdot P(X_1 = i_1 \mid X_0 = i_0) \cdots P(X_n = i_n \mid X_{n-1} =
i_{n-1}, \dots, X_0 = i_0)$ (the multiplication rule) and replace each factor by $p_{i_{k-1} i_k}$ (the Markov
property). $\square$

**Worked example 1.** Today is dry. What is the probability that the next three days are dry, wet, wet? It is
$p_{DD}\,p_{DW}\,p_{WW} = 0.8 \times 0.2 \times 0.6 = 0.096$.

**More examples to keep in mind.**

- **Random walk on a graph.** A **graph** is a set of points (vertices) with some pairs joined by edges. From a
  vertex, move to one of its neighbours chosen uniformly at random. If vertex $i$ has $d_i$ neighbours (its
  **degree**), then $p_{ij} = 1/d_i$ for each neighbour $j$ and 0 otherwise.
- **Gambler's ruin.** States $0, 1, \dots, N$ (your fortune in dollars). From $0 < k < N$ go to $k+1$ with probability
  $p$ and to $k-1$ with probability $q = 1 - p$; states 0 and $N$ are **absorbing**: $p_{00} = p_{NN} = 1$. You met
  this chain in Chapter 3.
- **The Ehrenfest urn.** Two boxes hold $N$ balls in all. Each step, pick one of the $N$ balls uniformly at random and
  move it to the other box. The state is the number of balls in the left box. From state $k$, the chain goes to $k-1$
  with probability $k/N$ and to $k+1$ with probability $(N-k)/N$. Paul and Tatiana Ehrenfest proposed it in 1907 as a
  model of gas molecules diffusing between two containers.
- **Independent trials** are a (dull) Markov chain: every row of $P$ is the same.

**A short history.** Andrei Andreyevich Markov (1856-1922) introduced chains in a 1906 paper. His aim was to show that
the law of large numbers ([Chapter 7](07-Inequalities-and-the-Law-of-Large-Numbers.md)) does not need independence:
averages along a dependent sequence of his kind also settle down. In 1913 he applied the idea to text, counting how
vowels and consonants follow each other in the first 20,000 letters of Pushkin's *Eugene Onegin*. The general theory
of chains with countably many states was developed in the 1930s, by Kolmogorov among others, and the name "Markov
chain" became standard then.

## 13.2 n-step probabilities

If today is dry, what is the chance that it is dry two days from now? Two paths lead there: D D D and D W D. Adding
their probabilities,

$$
P(X_2 = D \mid X_0 = D) = 0.8 \times 0.8 + 0.2 \times 0.4 = 0.64 + 0.08 = 0.72.
$$

That sum is exactly the $(D, D)$ entry of the matrix product $P \cdot P$. This is no accident.

**Notation.** Write $p^{(n)}_{ij} = P(X_n = j \mid X_0 = i)$, the **$n$-step transition probability**.

**Theorem (Chapman-Kolmogorov).** For all $m, n \ge 0$ and states $i, j$,

$$
p^{(m+n)}_{ij} = \sum_{k \in S} p^{(m)}_{ik}\, p^{(n)}_{kj}.
$$

Consequently $p^{(n)}_{ij}$ is the $(i, j)$ entry of the matrix power $P^n$, and if $X_0$ has distribution $\mu$
then $X_n$ has distribution $\mu P^n$.

*Proof.* By the law of total probability, splitting on the state at time $m$,

$$
P(X_{m+n} = j \mid X_0 = i) = \sum_k P(X_m = k \mid X_0 = i)\, P(X_{m+n} = j \mid X_m = k, X_0 = i).
$$

By the Markov property (applied to the path from time $m$ on, using the path formula of 13.1) the last factor equals
$P(X_{m+n} = j \mid X_m = k)$, which by time-homogeneity is $p^{(n)}_{kj}$. This proves the equation. It says the
matrix of $(m+n)$-step probabilities is the product of the $m$-step and $n$-step matrices; since the 1-step matrix is
$P$, induction gives $P^n$. Finally $P(X_n = j) = \sum_i \mu_i\, p^{(n)}_{ij}$, which is the $j$-th entry of
$\mu P^n$. $\square$

The rule to remember: **distributions are row vectors, and one step of time is multiplication by $P$ on the right.**

**Worked example 2.** For the weather chain,

$$
P^2 = \begin{pmatrix} 0.72 & 0.28 \\ 0.56 & 0.44 \end{pmatrix}, \qquad
P^3 = \begin{pmatrix} 0.688 & 0.312 \\ 0.624 & 0.376 \end{pmatrix}.
$$

Check: each row still adds to 1, as it must, because a product of stochastic matrices is stochastic.

The two rows are getting closer to each other. A closed formula shows where they go. Let $a_n = p^{(n)}_{DD}$.
Conditioning on day $n$, the day after is dry with probability $0.8$ if day $n$ is dry and $0.4$ if it is wet, so

$$
a_{n+1} = 0.8\, a_n + 0.4\, (1 - a_n) = 0.4 + 0.4\, a_n, \qquad a_0 = 1.
$$

The fixed point of $a \mapsto 0.4 + 0.4a$ is $a = 2/3$, and $a_{n+1} - 2/3 = 0.4\,(a_n - 2/3)$, so

$$
p^{(n)}_{DD} = \frac{2}{3} + \frac{1}{3}(0.4)^n .
$$

Check: $n = 2$ gives $2/3 + 0.16/3 = 0.72$. In the same way $p^{(n)}_{WD} = \frac{2}{3} - \frac{2}{3}(0.4)^n$. Whatever
today's weather, in the long run a day is dry with probability $2/3$. The number $0.4$ that controls the speed is
$1 - 0.2 - 0.4$; in linear algebra terms it is the second eigenvalue of $P$ (the first is always 1, with the
all-ones column as eigenvector). For larger chains the general fact is the same in spirit: the size of the second
largest eigenvalue governs how fast the chain forgets its start (see [Eigenvalues and diagonalization](../../uoft/MAT240H1/unit10.md)).

**Worked example 3 (a walk on a small graph).** Take the graph with vertices A, B, C, D, where A, B, C form a
triangle and D hangs off C. The random walk has

$$
P = \begin{pmatrix} 0 & 1/2 & 1/2 & 0 \\ 1/2 & 0 & 1/2 & 0 \\ 1/3 & 1/3 & 0 & 1/3 \\ 0 & 0 & 1 & 0 \end{pmatrix},
\qquad
P^2 = \begin{pmatrix} 5/12 & 1/6 & 1/4 & 1/6 \\ 1/6 & 5/12 & 1/4 & 1/6 \\ 1/6 & 1/6 & 2/3 & 0 \\ 1/3 & 1/3 & 0 & 1/3 \end{pmatrix}.
$$

For instance $p^{(2)}_{AA} = \tfrac12 \cdot \tfrac12 + \tfrac12 \cdot \tfrac13 = 5/12$ (via B, or via C). By $n = 20$
every row of $P^n$ agrees with $(0.25, 0.25, 0.375, 0.125)$ to within $0.002$. You will see in 13.4 why these
numbers are $2/8, 2/8, 3/8, 1/8$: the degrees divided by their total.

**Try it in Python.**

```python
from fractions import Fraction as F

def mat_mult(A, B):
    return [[sum(A[i][k] * B[k][j] for k in range(len(B))) for j in range(len(B[0]))]
            for i in range(len(A))]

P = [[F(4, 5), F(1, 5)], [F(2, 5), F(3, 5)]]
Q = P
for n in range(2, 6):
    Q = mat_mult(Q, P)
    print(n, [[str(x) for x in row] for row in Q])
```

## 13.3 Classification of states

*Level: intermediate to advanced.*

Some states are visited again and again; some are left forever after a while; some chains cycle with a rhythm. To talk
about long-run behaviour we need words for these.

**Communication.** State $j$ is **accessible** from $i$, written $i \to j$, if $p^{(n)}_{ij} > 0$ for some $n \ge 0$
(we count $n = 0$, so $i \to i$ always). States $i$ and $j$ **communicate**, $i \leftrightarrow j$, if $i \to j$ and
$j \to i$.

**Lemma.** Communication is an equivalence relation, so the state space splits into disjoint **communicating classes**.

*Proof.* Reflexive and symmetric by definition. Transitive: if $p^{(m)}_{ij} > 0$ and $p^{(n)}_{jk} > 0$ then by
Chapman-Kolmogorov $p^{(m+n)}_{ik} \ge p^{(m)}_{ij}\, p^{(n)}_{jk} > 0$; do the same backwards. $\square$

A class $C$ is **closed** if no arrow leaves it: $p_{ij} = 0$ for $i \in C$, $j \notin C$. A chain is **irreducible**
if it has only one class, that is, every state can reach every other.

**Worked example 4.** Take states $1, \dots, 6$ with

$$
P = \begin{pmatrix}
1/2 & 1/2 & 0 & 0 & 0 & 0 \\
1/3 & 0 & 1/3 & 0 & 1/3 & 0 \\
0 & 0 & 0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 1/2 & 1/2 \\
0 & 0 & 0 & 0 & 1 & 0
\end{pmatrix}.
$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 220" role="img" aria-label="Transition diagram with six states. States 1 and 2, coloured orange, point to each other; 1 has a loop. State 2 also points down to 3 and right to 5. States 3 and 4, coloured blue, point to each other. States 5 and 6, coloured green, point to each other, and 5 has a loop.">
  <defs><marker id="prb13-arr2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
  <circle cx="50" cy="80" r="20" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="150" cy="80" r="20" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="150" cy="180" r="20" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="250" cy="180" r="20" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="250" cy="80" r="20" fill="#7ccf9a" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="350" cy="80" r="20" fill="#7ccf9a" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <text x="50" y="86" text-anchor="middle" font-size="16" fill="currentColor">1</text>
  <text x="150" y="86" text-anchor="middle" font-size="16" fill="currentColor">2</text>
  <text x="150" y="186" text-anchor="middle" font-size="16" fill="currentColor">3</text>
  <text x="250" y="186" text-anchor="middle" font-size="16" fill="currentColor">4</text>
  <text x="250" y="86" text-anchor="middle" font-size="16" fill="currentColor">5</text>
  <text x="350" y="86" text-anchor="middle" font-size="16" fill="currentColor">6</text>
  <path d="M68,71 Q100,55 132,71" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#prb13-arr2)"/>
  <path d="M132,89 Q100,105 68,89" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#prb13-arr2)"/>
  <path d="M40,63 C25,25 75,25 60,63" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#prb13-arr2)"/>
  <line x1="150" y1="100" x2="150" y2="158" stroke="currentColor" stroke-width="1.5" marker-end="url(#prb13-arr2)"/>
  <line x1="170" y1="80" x2="228" y2="80" stroke="currentColor" stroke-width="1.5" marker-end="url(#prb13-arr2)"/>
  <path d="M168,171 Q200,155 232,171" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#prb13-arr2)"/>
  <path d="M232,189 Q200,205 168,189" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#prb13-arr2)"/>
  <path d="M268,71 Q300,55 332,71" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#prb13-arr2)"/>
  <path d="M332,89 Q300,105 268,89" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#prb13-arr2)"/>
  <path d="M240,63 C225,25 275,25 260,63" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#prb13-arr2)"/>
</svg>
</div>

The classes are $\{1, 2\}$, $\{3, 4\}$ and $\{5, 6\}$. The class $\{1, 2\}$ is not closed (arrows leave from 2); the
other two are closed. Started at 1, the chain wanders between 1 and 2 for a while, then leaves for good into one of
the closed classes, and stays there forever.

**Recurrence and transience.** Let $T_i = \min\{n \ge 1 : X_n = i\}$ be the **first return time** to $i$ (with
$\min \emptyset = \infty$), and write $P_i$ and $E_i$ for probability and expectation when the chain starts at
$X_0 = i$. State $i$ is **recurrent** if $f_i := P_i(T_i < \infty) = 1$: started at $i$, you surely come back. It is
**transient** if $f_i < 1$.

We use one more fact without a full proof here: the **strong Markov property**. If $T$ is a **stopping time** (a
random time such that whether $T = n$ can be decided by looking at $X_0, \dots, X_n$ only, like "the first visit to
$i$") then, given $T < \infty$ and $X_T = i$, the process $X_T, X_{T+1}, \dots$ is a Markov chain started at $i$,
independent of what happened before $T$. For chains on a countable space the proof is a direct sum over the possible
values of $T$; see Norris, §1.4.

**Theorem.** State $i$ is recurrent if and only if $\sum_{n \ge 1} p^{(n)}_{ii} = \infty$. More precisely, the number
of returns $V_i = \#\{n \ge 1 : X_n = i\}$ satisfies $P_i(V_i \ge k) = f_i^{\,k}$, and

$$
E_i[V_i] = \sum_{n \ge 1} p^{(n)}_{ii} = \frac{f_i}{1 - f_i} \quad (= \infty \text{ if } f_i = 1).
$$

*Proof.* Each time the chain is at $i$, by the strong Markov property it starts afresh, and comes back again with
probability $f_i$, independently of the past. So to have at least $k$ returns you need $k$ successes in a row:
$P_i(V_i \ge k) = f_i^{\,k}$. If $f_i = 1$ this is 1 for all $k$, so $V_i = \infty$ almost surely and its expectation
is infinite. If $f_i < 1$, $V_i$ is geometric and $E_i[V_i] = \sum_{k \ge 1} P_i(V_i \ge k) = \sum_{k\ge1} f_i^{\,k} =
f_i/(1-f_i) < \infty$. On the other side, $V_i = \sum_{n \ge 1} \mathbf{1}\{X_n = i\}$, so by linearity (for
nonnegative terms, also for infinite sums) $E_i[V_i] = \sum_n P_i(X_n = i) = \sum_n p^{(n)}_{ii}$. $\square$

So a recurrent state is visited infinitely often; a transient state only finitely often. Chapter 8 used exactly this
criterion with generating functions to prove that the simple random walk on the integers is recurrent and stated
Pólya's theorem: recurrent in dimensions 1 and 2, transient in 3 and more.

**Corollary (recurrence is a class property).** If $i \leftrightarrow j$ and $i$ is recurrent, so is $j$.

*Proof.* Choose $r, s$ with $p^{(r)}_{ji} > 0$ and $p^{(s)}_{ij} > 0$. Going $j \to i$ in $r$ steps, $i \to i$ in $n$
steps and $i \to j$ in $s$ steps is one way to go from $j$ to $j$ in $r + n + s$ steps, so
$p^{(r+n+s)}_{jj} \ge p^{(r)}_{ji}\, p^{(n)}_{ii}\, p^{(s)}_{ij}$. Summing over $n$, the right side diverges, so the
left side does. $\square$

**Theorem (finite chains).** In a chain with finitely many states: (a) a class that is not closed is transient;
(b) a closed class is recurrent. In particular every finite chain has a recurrent state, and an irreducible finite
chain is recurrent.

*Proof.* (a) If $C$ is not closed, there are $i \in C$ and $j \notin C$ with $p_{ij} > 0$, and $j$ cannot lead back
to $i$ (else $j$ would be in $C$). Starting from $i$, with probability at least $p_{ij}$ the chain never returns, so
$f_i \le 1 - p_{ij} < 1$. (b) Inside a closed finite class $C$ the chain stays in $C$ forever, making infinitely many
steps among finitely many states, so some state $j \in C$ is visited infinitely often with positive probability. By
the theorem, a transient state is visited only finitely often almost surely, so $j$ is recurrent, and by the
corollary so is all of $C$. $\square$

In Worked example 4, states 1 and 2 are transient, and 3, 4, 5, 6 are recurrent. For infinite chains (b) fails: the
walk on $\mathbb{Z}^3$ is irreducible but transient.

**Periods.** The weather chain and the walk on the triangle-with-tail behave smoothly. But in the class $\{3, 4\}$
above the chain alternates 3, 4, 3, 4, ...: $p^{(n)}_{33}$ is 1 for even $n$ and 0 for odd $n$, and has no limit. The
**period** of state $i$ is

$$
d(i) = \gcd\{n \ge 1 : p^{(n)}_{ii} > 0\}.
$$

A state with period 1 is **aperiodic**. A sufficient test: if $p_{ii} > 0$ (a loop), then $d(i) = 1$.

**Lemma.** States in one class have the same period.

*Proof.* Let $i \leftrightarrow j$ with $p^{(r)}_{ji} > 0$, $p^{(s)}_{ij} > 0$. Then $p^{(r+s)}_{jj} > 0$, so
$d(j)$ divides $r + s$. If $p^{(n)}_{ii} > 0$ then $p^{(r+n+s)}_{jj} > 0$, so $d(j)$ also divides $r + n + s$, hence
divides $n$. So $d(j)$ divides every $n$ in the set defining $d(i)$, hence divides $d(i)$. By symmetry $d(i)$ divides
$d(j)$, so they are equal. $\square$

In Worked example 4, $\{1, 2\}$ and $\{5, 6\}$ are aperiodic (both have a loop), $\{3, 4\}$ has period 2. The random
walk on a cycle of $m$ vertices has period 2 if $m$ is even (every return takes an even number of steps) and period 1
if $m$ is odd (you can return in 2 steps or in $m$ steps, and $\gcd(2, m) = 1$).

## 13.4 Stationary distributions and convergence

*Level: advanced.*

In the weather chain, if today is dry with probability $2/3$, tomorrow is too: $(2/3)(0.8) + (1/3)(0.4) = 2/3$. A
distribution that one step of the chain leaves unchanged is the natural candidate for "the long run".

**Definition.** A probability vector $\pi = (\pi_i)_{i \in S}$ (entries $\ge 0$, sum 1) is a **stationary
distribution** for $P$ if

$$
\pi P = \pi, \quad \text{that is,} \quad \pi_j = \sum_i \pi_i\, p_{ij} \text{ for every } j.
$$

If $X_0 \sim \pi$ then $X_n \sim \pi P^n = \pi$ for all $n$: the chain is "in equilibrium". The individual states keep
changing; only the distribution is frozen.

**Worked example 5.** For the two-state chain $P = \begin{pmatrix} 1 - a & a \\ b & 1 - b \end{pmatrix}$ with
$a + b > 0$, the equation $\pi_D = \pi_D(1-a) + \pi_W b$ gives $a\,\pi_D = b\,\pi_W$: the flow from D to W equals the
flow from W to D. With $\pi_D + \pi_W = 1$,

$$
\pi = \left(\frac{b}{a + b},\ \frac{a}{a + b}\right).
$$

Weather: $a = 0.2$, $b = 0.4$ gives $(2/3, 1/3)$, as found in 13.2.

### Detailed balance and random walks on graphs

Solving $\pi P = \pi$ means solving a linear system. Often a shortcut works. Say $\pi$ satisfies **detailed balance**
if

$$
\pi_i\, p_{ij} = \pi_j\, p_{ji} \quad \text{for all } i, j.
$$

In words: in equilibrium, the flow of probability along each edge is the same in both directions.

**Proposition.** Detailed balance implies stationarity.

*Proof.* $\sum_i \pi_i p_{ij} = \sum_i \pi_j p_{ji} = \pi_j \sum_i p_{ji} = \pi_j$, since row $j$ of $P$ sums to 1. $\square$

A chain with a detailed-balance distribution is called **reversible**: run in equilibrium, a film of it looks
statistically the same played backwards.

**Theorem.** For the random walk on a finite connected graph with $m$ edges, $\pi_i = d_i / (2m)$ is stationary.

*Proof.* The degrees add up to $2m$ (each edge has two ends), so $\pi$ is a probability vector. If $i$ and $j$ are
neighbours, $\pi_i p_{ij} = \frac{d_i}{2m} \cdot \frac{1}{d_i} = \frac{1}{2m} = \pi_j p_{ji}$; otherwise both sides are
0. Detailed balance holds. $\square$

Worked example 3 has degrees $2, 2, 3, 1$ and $m = 4$ edges, giving $(2/8, 2/8, 3/8, 1/8)$, the numbers the rows of
$P^{20}$ approached.

**Worked example 6 (Ehrenfest).** Try $\pi_k = \binom{N}{k} / 2^N$, the distribution you get by putting each ball in a
box by a fair coin flip. Detailed balance between $k$ and $k+1$:

$$
\binom{N}{k} \frac{N - k}{N} = \frac{N!}{k!\,(N-k-1)!\,N} = \binom{N}{k+1}\frac{k+1}{N}.
$$

So the binomial distribution is stationary. Yet the chain has period 2 (the count changes parity each step), so
$P(X_n = k)$ does not converge; the time averages still do (see the ergodic theorem below).

### Existence and uniqueness

**Theorem.** Every finite Markov chain has at least one stationary distribution. If it is irreducible, the
stationary distribution is unique and every $\pi_j > 0$.

*Proof of existence.* Fix a state $i$ and let $\nu_n = \frac{1}{n}\sum_{k=0}^{n-1} e_i P^k$, where $e_i$ is the
distribution concentrated at $i$; $\nu_n$ is the average distribution over the first $n$ steps. Each $\nu_n$ lies in
the set of probability vectors in $\mathbb{R}^S$, which is closed and bounded, so (Bolzano-Weierstrass) some
subsequence $\nu_{n_r}$ converges to a probability vector $\pi$. Now

$$
\nu_n P - \nu_n = \frac{1}{n}\left(e_i P^n - e_i\right),
$$

a telescoping sum, and each entry of the right side has absolute value at most $1/n$. Letting $n = n_r \to \infty$
gives $\pi P - \pi = 0$. $\square$

*Positivity.* If the chain is irreducible and $\pi$ is stationary, pick $i$ with $\pi_i > 0$. For any $j$ choose $n$
with $p^{(n)}_{ij} > 0$; then $\pi_j = \sum_k \pi_k p^{(n)}_{kj} \ge \pi_i p^{(n)}_{ij} > 0$.

Uniqueness will come out of the convergence theorem (aperiodic case) and a trick (general case), below.

### The convergence theorem

Distances between distributions are measured by **total variation**:

$$
\| \mu - \nu \|_{TV} = \max_{A \subseteq S} |\mu(A) - \nu(A)| = \frac{1}{2}\sum_{j} |\mu_j - \nu_j| .
$$

It is the largest disagreement the two distributions have about any event. (The two formulas agree: the maximum is at
$A = \{j : \mu_j > \nu_j\}$, and the positive and negative parts of $\mu - \nu$ have equal total.)

**Theorem (convergence to equilibrium).** Let $P$ be a finite, irreducible, aperiodic chain with stationary
distribution $\pi$. Then there are constants $C$ and $0 < \rho < 1$ such that for every initial distribution $\mu$
and every $n$,

$$
\| \mu P^n - \pi \|_{TV} \le C \rho^n .
$$

In particular $p^{(n)}_{ij} \to \pi_j$ for all $i, j$, whatever the starting state, and $\pi$ is the only stationary
distribution.

The proof has two steps: a number-theoretic lemma, and a coupling argument due to Wolfgang Doeblin (1938).

**Lemma.** If $P$ is finite, irreducible and aperiodic, there is $N$ with $p^{(N)}_{ij} > 0$ for all $i, j$.

*Proof.* Fix $i$ and let $R = \{n \ge 1 : p^{(n)}_{ii} > 0\}$. If $n, n' \in R$ then $n + n' \in R$ (go around twice),
so $R$ is closed under addition, and $\gcd R = 1$. Claim: $R$ contains every large enough integer. Some finite subset
$n_1, \dots, n_r$ of $R$ already has gcd 1, so by Bézout $1 = \sum a_k n_k$ with integers $a_k$. Put the positive
terms in $m_1$ and the negative ones in $m_2$: $1 = m_1 - m_2$, with $m_1, m_2$ sums of elements of $R$. If
$m_2 = 0$ then $1 \in R$ and $R$ is everything. Otherwise $m = m_2$ and $m + 1 = m_1$ both lie in $R$. Any
$n \ge m^2$ can be written $n = qm + s$ with $0 \le s < m \le q$, and then $n = (q - s)m + s(m+1)$ is a sum of
elements of $R$. This proves the claim. Now for any $j$ pick $d$ with $p^{(d)}_{ij} > 0$; for all large $n$,
$p^{(n+d)}_{ij} \ge p^{(n)}_{ii}\, p^{(d)}_{ij} > 0$. With finitely many pairs $(i, j)$, one $N$ works for all. $\square$

*Proof of the theorem (coupling).* Let $\delta = \min_{i,j} p^{(N)}_{ij} > 0$. Run two copies of the chain
independently: $X$ started from $\mu$, $Y$ started from $\pi$. Let $T$ be the first time they are in the same state.
From time $T$ on, replace $X$ by $Y$: define $X'_n = X_n$ for $n < T$ and $X'_n = Y_n$ for $n \ge T$. By the strong
Markov property, $X'$ is again a Markov chain with matrix $P$ started from $\mu$ (after $T$ it just continues from
the same state, by another chain's coins). So $X'_n \sim \mu P^n$, while $Y_n \sim \pi$. On the event $\{T \le n\}$,
$X'_n = Y_n$. Hence for any set $A$,

$$
|P(X'_n \in A) - P(Y_n \in A)| \le P(X'_n \ne Y_n) \le P(T > n).
$$

It remains to bound $P(T > n)$. Look at the times $N, 2N, 3N, \dots$. Whatever the two positions $x, y$ at time
$(k-1)N$, the chance that the independent copies are in the same state at time $kN$ is

$$
\sum_j p^{(N)}_{xj}\, p^{(N)}_{yj} \ge \delta \sum_j p^{(N)}_{yj} = \delta .
$$

So each block of $N$ steps ends with a meeting with probability at least $\delta$, given anything before, and
$P(T > kN) \le (1 - \delta)^k$. This gives the theorem with $\rho = (1-\delta)^{1/N}$ and $C = 1/(1-\delta)$. If
$\pi'$ were another stationary distribution, starting from $\mu = \pi'$ gives $\| \pi' - \pi \|_{TV} \le C\rho^n
\to 0$, so $\pi' = \pi$. $\square$

**Uniqueness without aperiodicity.** For an irreducible chain that may be periodic, consider the **lazy chain**
$\tilde P = \frac{1}{2}(I + P)$: flip a coin, and on heads stay put. Its stationary distributions are exactly those of
$P$ ($\pi \tilde P = \pi$ iff $\pi P = \pi$), and it is irreducible and aperiodic (every state has a loop). So the
theorem applied to $\tilde P$ shows $P$ has only one stationary distribution. Periodic chains still have a unique
$\pi$; only the convergence of $P^n$ fails.

**The Perron-Frobenius view.** A second classical route goes through linear algebra. The Perron-Frobenius theorem
says that a matrix with all entries positive has a largest eigenvalue that is real, simple, with a positive
eigenvector, and every other eigenvalue is strictly smaller in absolute value. Applied to $P^N$ (eigenvalue 1, left
eigenvector $\pi$), it gives the same conclusion: all other eigenvalues of $P$ have $|\lambda| < 1$, and $P^n$
converges to the matrix whose rows are all $\pi$, at a rate set by the second largest $|\lambda|$. The coupling proof
avoids all of this and gives an explicit rate.

### Return times and the ergodic theorem

**Theorem (Kac's formula).** For a finite irreducible chain, $E_i[T_i] = 1/\pi_i$ for every state $i$.

*Proof sketch.* First, $E_i[T_i] < \infty$: from any state the chain reaches $i$ within some fixed number $M$ of steps
with probability at least some $\varepsilon > 0$, so $P(T_i > kM) \le (1-\varepsilon)^k$, a geometric tail. Now let
$\nu_j$ be the expected number of visits to $j$ during one excursion from $i$, that is, at times $0 \le n < T_i$.
Then $\nu_i = 1$ and $\sum_j \nu_j = E_i[T_i]$. A visit to $k$ at time $n < T_i$ is followed by a visit to $j$ at time
$n + 1 \le T_i$ with probability $p_{kj}$; counting visits to $j$ at times $1 \le n \le T_i$ in this way gives
$\sum_k \nu_k p_{kj}$. Visits to $j$ at times $1, \dots, T_i$ have the same expected number as visits at times
$0, \dots, T_i - 1$, because the chain is at $i$ at both time 0 and time $T_i$. So $\nu P = \nu$, and by uniqueness
$\nu / E_i[T_i] = \pi$. Comparing the $i$-th entries, $1/E_i[T_i] = \pi_i$. $\square$

**Worked example 7.** In the weather chain, the expected time from one dry day to the next is $1/\pi_D = 3/2$, and
from one wet day to the next is $1/\pi_W = 3$. Check the second directly: from W, the next day is wet with probability
$0.6$ (return time 1); otherwise we go to D and wait there a geometric number of days with mean $1/0.2 = 5$ before
it turns wet. So $E_W[T_W] = 0.6 \cdot 1 + 0.4 \cdot (1 + 5) = 3$.

**Theorem (ergodic theorem for Markov chains).** For a finite irreducible chain, from any start, the fraction of the
first $n$ steps spent in state $j$ tends to $\pi_j$ almost surely; more generally, for any function $f$ on the states,

$$
\frac{1}{n}\sum_{k=0}^{n-1} f(X_k) \to \sum_j \pi_j f(j) \quad \text{almost surely.}
$$

*Idea.* The successive excursions from a fixed state $i$ are independent and identically distributed (strong Markov
property), each of mean length $E_i[T_i]$ and containing on average $\nu_j$ visits to $j$. Apply the strong law of
large numbers ([Chapter 12](12-The-Central-Limit-Theorem.md)) to the excursions. Note that aperiodicity is not
needed: time averages converge even when $P(X_n = j)$ oscillates. This theorem is what justifies Markov chain Monte
Carlo ([Chapter 19](19-Randomness-in-Computing.md)): to average $f$ against a complicated $\pi$, build a chain with
stationary distribution $\pi$ and average along its path.

<figure class="play" data-play="markov"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> A three-state weather chain (made-up chances). Start sunny or rainy: either way the chances settle to the same stationary distribution.</figcaption></figure>

## 13.5 Absorbing chains

*Level: intermediate to advanced.*

How many flips of a fair coin do you need, on average, until you see two heads in a row? Until heads followed by
tails? The answers, 6 and 4, surprise most people (both patterns have probability $1/4$ at any given position). A
Markov chain that stops makes such questions routine.

A state $a$ is **absorbing** if $p_{aa} = 1$. A chain is an **absorbing chain** if it has at least one absorbing state
and from every state some absorbing state is accessible. Order the states with the $t$ transient ones first and the
absorbing ones last. Then

$$
P = \begin{pmatrix} Q & R \\ 0 & I \end{pmatrix},
$$

where $Q$ ($t \times t$) holds the moves between transient states and $R$ the moves from transient into absorbing
states.

**Theorem.** For an absorbing chain, $Q^n \to 0$ and the **fundamental matrix** $F = (I - Q)^{-1} = I + Q + Q^2 + \cdots$
exists. Its entry $F_{ij}$ is the expected number of visits to transient state $j$ starting from transient state $i$
(counting time 0). Consequently:

- the expected number of steps until absorption, from each transient state, is the vector $\tau = F\mathbf{1}$
  (row sums of $F$);
- the probability of being absorbed in absorbing state $a$, starting from $i$, is the $(i, a)$ entry of $B = FR$.

*Proof.* The entry $(Q^n)_{ij}$ is the probability of being at transient $j$ at time $n$ (paths that stay among
transient states). Every transient state leads to absorption within $t$ steps with positive probability, so as in the
proof of Kac's formula $P_i(\text{not absorbed by time } kt) \le (1 - \varepsilon)^k$; hence $Q^n \to 0$ geometrically
and the series $\sum_n Q^n$ converges. Since $(I - Q)(I + Q + \cdots + Q^n) = I - Q^{n+1} \to I$, the sum is
$(I - Q)^{-1}$. The expected number of visits to $j$ is $\sum_n P_i(X_n = j) = \sum_n (Q^n)_{ij} = F_{ij}$. The time
to absorption is the total number of visits to transient states, so its expectation is $\sum_j F_{ij}$. Finally, to
be absorbed at $a$ the chain must make its last transient visit at some $j$ and then jump to $a$: summing over the
time and place of that visit gives $\sum_j F_{ij} R_{ja} = (FR)_{ia}$. $\square$

There is an equivalent, often quicker, method: **first-step analysis**. Let $\tau_i$ be the expected time to absorption
from $i$. Conditioning on the first step,

$$
\tau_i = 1 + \sum_{j \text{ transient}} p_{ij}\, \tau_j ,
$$

which is the system $(I - Q)\tau = \mathbf{1}$. This is the same calculation as Chapter 3's gambler's ruin.

**Worked example 8 (waiting for HH).** Track the useful part of the recent flips: state 0 (nothing useful), state H
(last flip was heads), and HH (done, absorbing). From 0: heads goes to H, tails stays at 0. From H: heads finishes,
tails goes back to 0. With $\tau_0, \tau_H$ the expected remaining flips:

$$
\tau_0 = 1 + \tfrac12 \tau_H + \tfrac12 \tau_0, \qquad \tau_H = 1 + \tfrac12 \cdot 0 + \tfrac12 \tau_0 .
$$

The first gives $\tau_0 = 2 + \tau_H$; substituting, $\tau_H = 1 + 1 + \tfrac12\tau_H$, so $\tau_H = 4$ and
$\tau_0 = 6$.

**Worked example 9 (waiting for HT).** States 0, H, HT. From 0: heads to H, tails to 0. From H: heads stays at H
(the last flip is still heads), tails finishes. So $\tau_H = 1 + \tfrac12\tau_H$, giving $\tau_H = 2$, and
$\tau_0 = 1 + \tfrac12\tau_H + \tfrac12\tau_0$ gives $\tau_0 = 4$. The difference: after H, a failure for HH throws
you back to the start, while for HT a "failure" (another H) keeps you one step away. Patterns that overlap with
themselves take longer. Chapter 15 gives a beautiful martingale formula for all such patterns.

**Worked example 10 (a short gambler's ruin).** Fair game, fortune in $\{0, 1, 2, 3, 4\}$, absorbing at 0 and 4.
Transient states 1, 2, 3:

$$
Q = \begin{pmatrix} 0 & 1/2 & 0 \\ 1/2 & 0 & 1/2 \\ 0 & 1/2 & 0 \end{pmatrix}, \quad
F = (I - Q)^{-1} = \begin{pmatrix} 3/2 & 1 & 1/2 \\ 1 & 2 & 1 \\ 1/2 & 1 & 3/2 \end{pmatrix}, \quad
R = \begin{pmatrix} 1/2 & 0 \\ 0 & 0 \\ 0 & 1/2 \end{pmatrix}.
$$

Row sums of $F$: $\tau = (3, 4, 3)$. Absorption probabilities $B = FR$ have rows $(3/4, 1/4)$, $(1/2, 1/2)$,
$(1/4, 3/4)$ for (ruin, reach 4). Check against Chapter 3: starting with $k$ dollars in a fair game you reach $N$
first with probability $k/N$, and the expected duration is $k(N - k)$: for $N = 4$ that gives $3, 4, 3$.

## 13.6 PageRank and card shuffling

*Level: advanced.*

### PageRank

In 1998 Sergey Brin and Lawrence Page, then graduate students at Stanford, described the search engine that became
Google in "The anatomy of a large-scale hypertextual Web search engine". One ingredient was a score for each page,
**PageRank**, meant to capture importance by the structure of links: a page is important if important pages link
to it. That sentence is circular, and a stationary distribution is exactly how to make such a circular definition
precise.

Imagine a **random surfer**. At each step, with probability $d$ (the **damping factor**; the paper suggests $0.85$) the
surfer follows a link chosen uniformly from the current page; with probability $1 - d$ the surfer gets bored and jumps
to a page chosen uniformly from all $n$ pages. (A page with no outgoing links is treated as linking to every page.)
This is a Markov chain with

$$
G = d\, P_{\text{links}} + \frac{1 - d}{n} J ,
$$

where $J$ is the matrix of all ones. Every entry of $G$ is at least $(1-d)/n > 0$, so the chain is irreducible and
aperiodic, and by 13.4 it has a unique stationary distribution, which is the PageRank vector. The convergence theorem
even says how to compute it: start anywhere and multiply by $G$ repeatedly (the **power method**). Here the coupling
constant is explicit: $\delta \ge 1 - d$ already for $N = 1$, so the error shrinks at least like $0.85^n$, whatever the
size of the web.

**Worked example 11.** Four pages: A links to B and C; B links to C; C links to A; D links to C. With $d = 0.85$, the
stationary distribution is approximately

$$
(\pi_A, \pi_B, \pi_C, \pi_D) \approx (0.373,\ 0.196,\ 0.394,\ 0.038).
$$

C, with three incoming links, ranks first; A ranks second with only one incoming link, because that link comes from C.
D has no incoming links and gets only the "bored jump" share $(1 - d)/4 = 0.0375$. Check: $\pi_D = 0.15/4$ exactly,
since nothing links to D.

```python
d, n = 0.85, 4
links = {0: [1, 2], 1: [2], 2: [0], 3: [2]}     # A=0, B=1, C=2, D=3
pr = [1 / n] * n
for _ in range(100):
    new = [(1 - d) / n] * n
    for i, out in links.items():
        for j in out:
            new[j] += d * pr[i] / len(out)
    pr = new
print([round(x, 4) for x in pr])    # [0.3725, 0.1958, 0.3941, 0.0375]
```

An honest note. PageRank as published is a clean piece of mathematics; how any search engine ranks pages today
combines very many signals, and the details are not public. What remains true is the idea: the stationary
distribution of a well-chosen chain is a principled way to turn a network into a ranking, and the same idea is used to
rank nodes in citation, social and biological networks.

### How many shuffles mix a deck?

A deck of $n$ cards has $n!$ orders. A shuffle is a random step from one order to another, so repeated shuffling is a
Markov chain on the $n!$ permutations. For any reasonable shuffle, every row and every column of the transition matrix
sums to 1 (the matrix is **doubly stochastic**), so the uniform distribution is stationary (Exercise 8). If the chain
is irreducible and aperiodic, the deck converges to perfectly random. The question is how fast.

The usual **riffle shuffle** cuts the deck in two and interleaves the halves. The **Gilbert-Shannon-Reeds model**
(Gilbert 1955; Shannon; Reeds 1981, unpublished) makes this precise: cut at a binomial$(n, 1/2)$ position, then drop
cards one at a time from the bottoms of the two packets, choosing a packet with probability proportional to its
current size. Dave Bayer and Persi Diaconis, in "Trailing the dovetail shuffle to its lair" (1992), found an exact
formula. A **rising sequence** of a permutation is a maximal run of consecutive face values $v, v+1, \dots$ that appear
in increasing positions; one riffle of a sorted deck creates at most 2 of them. They proved that after $k$ GSR
shuffles, a permutation with $r$ rising sequences has probability

$$
\frac{1}{2^{kn}} \binom{2^k + n - r}{n} .
$$

The key step is that $k$ riffle shuffles in a row have the same distribution as one "$2^k$-shuffle", which cuts into
$2^k$ packets instead of 2. The number of permutations of $n$ cards with $r$ rising sequences is an Eulerian number,
so the total variation distance to uniform can be computed exactly. For $n = 52$:

| shuffles $k$ | 1-4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|
| distance to uniform | 1.000 | 0.924 | 0.614 | 0.334 | 0.167 | 0.085 | 0.043 |

(The entries for $k \le 4$ are 1 to three decimals.) The distance stays near 1, then falls sharply between 5 and 8
shuffles, and then halves with each further shuffle. This sudden drop is the **cutoff phenomenon**, and Bayer and
Diaconis proved that for $n$ cards it happens at about $\frac{3}{2}\log_2 n$ shuffles. "Seven shuffles" is the
honest summary for 52 cards: it is the first $k$ at which the distance is well below $1/2$. Whether seven is "enough"
depends on what the deck is used for; for some card games specific features of the order matter more than total
variation.

```python
from fractions import Fraction
from math import comb, factorial

def eulerian_row(n):            # A[r] = number of permutations with r rising sequences
    A = [0] * (n + 2); A[1] = 1
    for m in range(2, n + 1):
        A = [0] + [r * A[r] + (m - r + 1) * A[r - 1] for r in range(1, n + 2)]
    return A

n = 52; A = eulerian_row(n)
for k in range(1, 11):
    tv = sum(A[r] * abs(Fraction(comb(2**k + n - r, n), 2**(k * n)) - Fraction(1, factorial(n)))
             for r in range(1, n + 1)) / 2
    print(k, round(float(tv), 3))
```

## Check yourself

??? question "1. A two-state chain has $p_{12} = a$ and $p_{21} = b$ with $a, b > 0$. Find its stationary distribution, and check it for $a = 0.3$, $b = 0.1$."

    Stationarity in state 1 reads $\pi_1 = \pi_1(1 - a) + \pi_2 b$, so $a\pi_1 = b\pi_2$. With $\pi_1 + \pi_2 = 1$:
    $\pi = (b/(a+b),\ a/(a+b))$. For $a = 0.3$, $b = 0.1$: $\pi = (0.25, 0.75)$. Check:
    $0.25 \times 0.7 + 0.75 \times 0.1 = 0.175 + 0.075 = 0.25$.

??? question "2. In the weather chain, today is dry. What is the probability that it is wet two days from now? And three days?"

    The $(D, W)$ entries of $P^2$ and $P^3$: $0.8 \times 0.2 + 0.2 \times 0.6 = 0.28$, and from $P^3$, $0.312$.
    Check with the formula: $1 - p^{(n)}_{DD} = \frac13 - \frac13(0.4)^n$ gives $\frac13(1 - 0.16) = 0.28$ and
    $\frac13(1 - 0.064) = 0.312$.

??? question "3. States $\{1,2,3,4\}$ with $p_{11} = 1$, $p_{21} = p_{23} = 1/2$, $p_{32} = p_{34} = 1/2$, $p_{44} = 1$. Classify the states."

    Classes: $\{1\}$, $\{2, 3\}$, $\{4\}$. Classes $\{1\}$ and $\{4\}$ are closed (absorbing), hence recurrent.
    $\{2, 3\}$ is not closed (2 can go to 1, never to return), hence transient. This is gambler's ruin with $N = 3$.

??? question "4. What is the period of the random walk on a cycle with 4 vertices? With 5 vertices? Does $P^n$ converge in each case?"

    On the 4-cycle every step changes the parity of the position, so returns take an even number of steps; 2 steps is
    possible, so the period is 2 and $P^n$ does not converge (it alternates). On the 5-cycle you can return in 2 steps
    (there and back) or 5 steps (once around); $\gcd(2, 5) = 1$, so it is aperiodic, and $P^n$ converges to the
    uniform distribution $(1/5, \dots, 1/5)$, which is stationary because every vertex has degree 2.

??? question "5. Random walk on a star: one centre joined to three leaves. Find the stationary distribution and the expected return time to the centre."

    Degrees: centre 3, leaves 1 each; $2m = 6$. So $\pi = (1/2, 1/6, 1/6, 1/6)$. By Kac, the expected return time to
    the centre is $1/\pi_{\text{centre}} = 2$, which is obvious: you always go to a leaf and come straight back.
    The expected return time to a given leaf is 6. The chain has period 2, but $\pi$ is still the unique stationary
    distribution.

??? question "6. Find the expected number of fair coin flips until HTH appears, and until HHH appears."

    HTH, states 0, H, HT: $\tau_0 = 1 + \frac12\tau_H + \frac12\tau_0$; $\tau_H = 1 + \frac12\tau_H + \frac12\tau_{HT}$
    (heads keeps you at H); $\tau_{HT} = 1 + \frac12 \cdot 0 + \frac12\tau_0$ (tails after HT leaves nothing useful).
    From the first, $\tau_0 = 2 + \tau_H$; from the second, $\tau_H = 2 + \tau_{HT}$; so $\tau_0 = 4 + \tau_{HT}$ and
    $\tau_{HT} = 1 + \frac12(4 + \tau_{HT})$, giving $\tau_{HT} = 6$, $\tau_H = 8$, $\tau_0 = 10$.
    HHH, states 0, H, HH: every tails sends you to 0. $\tau_{HH} = 1 + \frac12\tau_0$, $\tau_H = 1 + \frac12\tau_{HH} +
    \frac12\tau_0$, $\tau_0 = 1 + \frac12\tau_H + \frac12\tau_0$. Solving: $\tau_0 = 14$ ($\tau_H = 12$, $\tau_{HH} = 8$).

??? question "7. A fair gambler starts with 1 dollar and stops at 0 or 5 dollars. Use the fundamental matrix idea or first-step analysis to find the expected number of bets."

    First-step analysis gives $\tau_k = 1 + \frac12\tau_{k-1} + \frac12\tau_{k+1}$ with $\tau_0 = \tau_5 = 0$, whose
    solution is $\tau_k = k(5 - k)$: check $k(5-k) = 1 + \frac12(k-1)(6-k) + \frac12(k+1)(4-k)$, since the right
    side is $1 + \frac12(-2k^2 + 10k - 2) = -k^2 + 5k$. So $\tau_1 = 4$ bets.

??? question "8. A matrix is doubly stochastic if its columns, as well as its rows, sum to 1. Show the uniform distribution is stationary for any doubly stochastic $P$ on $m$ states."

    With $\pi_i = 1/m$: $(\pi P)_j = \sum_i \frac1m p_{ij} = \frac1m \sum_i p_{ij} = \frac1m$, because column $j$ sums
    to 1. So $\pi P = \pi$. This is why any shuffling method that is a fixed random mix of permutations has the
    uniform distribution on orders as its equilibrium.

??? question "9. Show that the lazy chain $\tilde P = \frac12(I + P)$ has the same stationary distributions as $P$."

    $\pi\tilde P = \frac12\pi + \frac12\pi P$. This equals $\pi$ exactly when $\frac12\pi P = \frac12\pi$, that is
    $\pi P = \pi$.

??? question "10. Prove that if some power $P^N$ has all entries positive, then the chain is irreducible and aperiodic."

    Irreducible: $p^{(N)}_{ij} > 0$ for all $i, j$. Aperiodic: $p^{(N)}_{ii} > 0$, and also
    $p^{(N+1)}_{ii} = \sum_k p_{ik}\, p^{(N)}_{ki} > 0$, since row $i$ of $P$ has some positive entry $p_{ik}$ and
    every $p^{(N)}_{ki} > 0$. So $N$ and $N + 1$ are both possible return times, and their gcd is 1. Together with
    the lemma of 13.4, this shows: a finite chain is irreducible and aperiodic if and only if some power of $P$ is
    strictly positive.

??? question "11. In the Ehrenfest urn with $N = 4$ balls, starting with all balls in the left box, what is the expected time until all balls are again in the left box?"

    The chain is irreducible on $\{0, \dots, 4\}$ with stationary $\pi_k = \binom{4}{k}/16$. By Kac's formula the
    expected return time to state 4 is $1/\pi_4 = 16$. For $N = 100$ balls it would be $2^{100}$ steps, which is the
    Ehrenfests' point: returns to an ordered state are guaranteed but take astronomically long.

## What you learned

- A Markov chain forgets the past given the present; it is described by an initial distribution and a stochastic
  transition matrix $P$, and the distribution after $n$ steps is $\mu P^n$.
- States split into communicating classes; a state is recurrent if $\sum_n p^{(n)}_{ii} = \infty$, and in a finite
  chain the closed classes are recurrent and the others transient.
- A stationary distribution solves $\pi P = \pi$; detailed balance is a shortcut, and a random walk on a graph has
  $\pi_i \propto d_i$.
- A finite irreducible chain has exactly one stationary distribution, with $\pi_i = 1/E_i[T_i]$; if it is also
  aperiodic, it converges to $\pi$ from any start, geometrically fast (proof by coupling).
- Absorbing chains are solved by the fundamental matrix $(I - Q)^{-1}$ or by first-step analysis.
- PageRank is the stationary distribution of the random surfer; for 52 cards, about seven riffle shuffles bring the
  deck close to uniform, with a sharp cutoff.

**Next:** [Chapter 14](14-Poisson-Processes.md), random events in continuous time: arrivals, waiting times and queues.

## Further reading

- J. R. Norris, *Markov Chains*, Cambridge University Press, 1997. The standard clear introduction, with full proofs.
- D. A. Levin and Y. Peres (with E. L. Wilmer), *Markov Chains and Mixing Times*, 2nd edition, American Mathematical
  Society, 2017. Coupling, mixing times, the cutoff phenomenon, card shuffling.
- W. Feller, *An Introduction to Probability Theory and Its Applications*, Volume 1, 3rd edition, Wiley, 1968,
  chapters XV and XVI.
- J. G. Kemeny and J. L. Snell, *Finite Markov Chains*, Van Nostrand, 1960. The source of the fundamental matrix
  approach to absorbing chains.
- D. Bayer and P. Diaconis, "Trailing the dovetail shuffle to its lair", *Annals of Applied Probability* 2(2), 1992.
- S. Brin and L. Page, "The anatomy of a large-scale hypertextual Web search engine", *Computer Networks and ISDN
  Systems* 30, 1998.
- On this site: [Random walks and Markov chains](../../topics/probability/level-8/06-random-walks-markov.md) (gentler),
  [Eigenvalues and diagonalization](../../uoft/MAT240H1/unit10.md) (the linear algebra behind $P^n$),
  [Catalan numbers and lattice paths](../combinatorics/08-Catalan-Numbers-and-Lattice-Paths.md) and
  [Graphs](../combinatorics/10-Graphs.md) in the Combinatorics book, and the [Probability book's contents](index.md).
