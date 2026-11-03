# 16. Complexity

*Chapters 13 to 15 sorted problems into those an algorithm can solve and those no algorithm can solve. But "can be
solved" can still mean "can be solved in a time longer than the age of the universe". Checking all $2^{100}$ ways to
switch 100 lights on or off is a perfectly good algorithm, and useless. In this chapter you will learn to measure the
cost of an algorithm by counting its steps, meet the class P of problems solvable in polynomial time and the class NP of
problems whose solutions can be checked in polynomial time, see why one problem, SAT, captures all of NP (the
Cook-Levin theorem), work through a reduction from 3-SAT to the clique problem by hand, and see honestly what is and is
not known about the most famous open problem in computer science: does P equal NP?*

!!! abstract "In this chapter"
    **You will learn:**

    - how to measure running time as a function of input size, and why "polynomial" is the dividing line
    - the class P, with examples, and the time hierarchy theorem
    - the class NP defined by certificates and verifiers, and why $\mathrm{P} \subseteq \mathrm{NP} \subseteq \mathrm{EXP}$
    - polynomial-time reductions, NP-completeness, and the Cook-Levin theorem (statement and the idea of the proof)
    - a complete reduction from 3-SAT to CLIQUE, worked on an example
    - what the P versus NP problem asks, why it is hard, and what it has to do with cryptography

    **You need:** [Chapter 13](13-Algorithms-and-Turing-Machines.md) (Turing machines) and
    [Chapter 14](14-Undecidability.md) (reductions). Propositional formulas and CNF from
    [Chapter 2](02-Propositional-Logic.md). A gentler first look: the Topics lesson
    [P versus NP](../../topics/logic/level-8/06-p-versus-np.md); the combinatorics side is in the
    [Combinatorics book, Chapter 14](../combinatorics/14-Hamiltonian-Cycles-and-Hard-Problems.md).

    **Levels:** 16.1 and 16.2 are intermediate; 16.3 and 16.4 are advanced; 16.5 and 16.6 are advanced with expert
    remarks.

## 16.1 Counting steps, and the class P

*Level: intermediate.*

### Size of the input

How long does an algorithm take? It depends on the input, so we measure time as a function of the **size** of the input,
written $n$: the number of symbols needed to write it down. For a list of numbers, roughly the number of digits in all
of them; for a graph, the number of vertices plus edges; for a single number $N$, the number of its digits, which is about
$\log_{10} N$ (or $\log_2 N$ bits).

That last point is easy to forget. To test whether $N$ is prime by trial division, you try divisors up to $\sqrt N$. If
$N$ has $n$ digits, $\sqrt N$ is about $10^{n/2}$: the number of trials grows **exponentially** in the size of the
input. For a 20-digit number that is about $10^{10}$ trials, feasible; for a 300-digit number, $10^{150}$, which is not.

**Definition.** The **running time** of a Turing machine $M$ is the function $t_M(n)$ = the largest number of steps $M$
takes on any input of size $n$. (This is **worst-case** time: the guarantee is for every input.)

### Big O

Exact step counts depend on irrelevant details: the alphabet, the number of tapes, how a step is defined. So we compare
growth rates and ignore constant factors.

**Definition.** For functions $f, g$ from $\mathbb{N}$ to the positive reals, $f = O(g)$ means there are constants $c$
and $n_0$ with $f(n) \le c\, g(n)$ for all $n \ge n_0$.

So $3n^2 + 100n + 7 = O(n^2)$ (take $c = 4$; then $3n^2 + 100n + 7 \le 4n^2$ once $n^2 \ge 100n + 7$, which holds for
$n \ge 101$), while $2^n$ is not $O(n^k)$ for any $k$.

### Why polynomial?

Here is what different running times mean at a billion steps per second:

| steps | $n = 10$ | $n = 50$ | $n = 100$ |
| --- | --- | --- | --- |
| $n^2$ | 0.1 microseconds | 2.5 microseconds | 10 microseconds |
| $n^3$ | 1 microsecond | 0.125 milliseconds | 1 millisecond |
| $2^n$ | 1 microsecond | about 13 days | about $4 \times 10^{13}$ years |

**Check** the last entry: $2^{100} \approx 1.27 \times 10^{30}$ steps, divided by $10^9$ per second, is about
$1.27 \times 10^{21}$ seconds, and a year is about $3.16 \times 10^7$ seconds, giving about $4 \times 10^{13}$ years,
roughly 3000 times the age of the universe.

The difference is not only about size. If computers become twice as fast, an $n^2$ algorithm can handle inputs about
1.4 times larger in the same time; a $2^n$ algorithm can handle inputs only *one* symbol larger. Exponential-time
algorithms do not get rescued by better hardware.

**Definition.** The class **P** is the set of decision problems (sets of strings, as in [Chapter 14](14-Undecidability.md))
that are decided by some Turing machine with running time $O(n^k)$ for some constant $k$.

This definition was proposed, in different words, by Alan Cobham and by Jack Edmonds in 1965. Edmonds, in a paper about
matchings in graphs, argued that "polynomial time" was the right formal meaning of "good algorithm".

### Why P is a good class

- **Robust.** Every reasonable model of computation (several tapes, random-access memory, a real programming language)
  can simulate every other with at most a polynomial slowdown; in Chapter 13 we saw one tape simulates $k$ tapes with
  time $t^2$. A polynomial of a polynomial is a polynomial, so P is the same in every model. (Quantum computers are a
  possible exception; see 16.6.)
- **Closed under composition.** If you call a polynomial-time subroutine a polynomial number of times on inputs of
  polynomial size, the total is polynomial.
- **Honest about its limits.** An $n^{100}$ algorithm is in P but useless, and some exponential algorithms are fast on
  every input that matters in practice. P is a mathematical idealisation. Experience shows that natural problems in P
  usually have algorithms with small exponents, which is why the idealisation is useful.

### Examples of problems in P

- **Arithmetic.** Adding two $n$-digit numbers takes $O(n)$ digit operations; school multiplication $O(n^2)$.
- **GCD.** Euclid's algorithm ([Chapter 13](13-Algorithms-and-Turing-Machines.md)) uses at most about $5$ times the number
  of decimal digits of the smaller number in division steps (Lamé's theorem, 1844), so it is polynomial in the input size.
- **Paths.** Is there a path from $s$ to $t$ in a graph? Breadth-first search answers in time linear in the size of the
  graph.
- **2-colouring.** Can the vertices of a graph be coloured with 2 colours so that no edge joins two vertices of the same
  colour? Colour one vertex, then colour its neighbours the other colour, and so on; a conflict appears exactly when there
  is an odd cycle. Linear time.
- **Linear programming**, maximising a linear function subject to linear inequalities, is in P (Leonid Khachiyan, 1979).
- **Primality.** Is $N$ prime? In 2002 Manindra Agrawal, Neeraj Kayal and Nitin Saxena (the AKS test) proved this is in P,
  polynomial in the number of digits of $N$, answering a question open since the subject began. (Fast *randomised* tests
  had been used for decades before that.) See the
  [Number theory book, Chapter 12](../number-theory/12-Primality-Factoring-and-RSA.md).

### More time decides more

Could every decidable problem be in P? No.

**Theorem 16.1 (time hierarchy; Hartmanis and Stearns, 1965).** For reasonable functions $f$, there are problems
decidable in time $O(f(n)^2)$ but not in time $O(f(n))$. In particular there are decidable problems not in P, for example
problems that need time $2^n$.

*Proof idea.* Diagonalise, as in [Chapter 14](14-Undecidability.md), but with a clock. Build a machine $D$ that, on input
$\langle M \rangle$, simulates $M$ on $\langle M \rangle$ for $f(n)$ steps (where $n$ is the input length) using the
universal machine, and does the opposite of $M$'s answer if $M$ finished in time (and says no otherwise). $D$ runs in
somewhat more than $f(n)$ steps because simulation has an overhead. Any machine $M$ that runs in time $O(f)$ disagrees
with $D$ on its own description (taking long enough descriptions to beat the constants). The squaring covers the
simulation overhead; with care it can be reduced to a logarithmic factor. $\square$

Define **EXP** to be the problems decidable in time $O(2^{n^k})$ for some $k$. The hierarchy theorem gives
$\mathrm{P} \ne \mathrm{EXP}$: there are problems that provably need exponential time. That is one of the very few
*separations* between natural complexity classes that anyone has proved.

## 16.2 NP and certificates

*Level: intermediate.*

### Finding versus checking

A **Sudoku** puzzle can be hard to solve. But if someone hands you a filled grid, checking it is easy: look at each row,
column and box. Many problems have this shape.

- **Composite numbers.** Is $N = 8051$ composite? Finding a factor takes some search. But if someone tells you
  "$8051 = 83 \times 97$", you can multiply and check at once.
- **Subset sum.** Given numbers $3, 34, 4, 12, 5, 2$ and a target 9, is there a sub-collection adding to exactly 9? The
  answer "yes: $4 + 5$" is checked by one addition. (There is another: $3 + 4 + 2$.) For target 30, there is no such
  sub-collection, and convincing someone of *that* seems to require more than a short hint.
- **Hamiltonian cycle.** Does a graph have a cycle through every vertex exactly once? A proposed cycle is easy to check.
- **SAT.** Does a propositional formula ([Chapter 2](02-Propositional-Logic.md)) have a satisfying assignment, an
  assignment of true and false to its variables that makes it true? A proposed assignment is checked by evaluating the
  formula.

**Check** the subset-sum claims by brute force: the 63 non-empty sub-collections of $\{3, 34, 4, 12, 5, 2\}$ include
exactly two with sum 9, namely $\{4, 5\}$ and $\{3, 4, 2\}$, and none with sum 30.

### The definition

**Definition.** A decision problem $A$ is in **NP** if there is a polynomial $p$ and a polynomial-time algorithm $V$, the
**verifier**, such that for every input $x$:

$$
x \in A \iff \text{there is a string } c \text{ with } |c| \le p(|x|) \text{ such that } V(x, c) = \text{yes}.
$$

The string $c$ is a **certificate** (or **witness**) for $x$. In words: yes-instances have short proofs that can be
checked fast. For no-instances, *no* certificate fools the verifier.

For SAT the certificate is a satisfying assignment; for composites, a factor; for Hamiltonian cycle, the cycle.

The name stands for **nondeterministic polynomial time**: equivalently, NP is the class of problems decided in
polynomial time by a nondeterministic Turing machine ([Chapter 13](13-Algorithms-and-Turing-Machines.md)), one that may
"guess" at each step and accepts if some sequence of guesses leads to acceptance. The two definitions match: the guesses
are the certificate, and conversely a nondeterministic machine can guess the certificate one symbol at a time.

Note the asymmetry, the same one as between c.e. sets and their complements in
[Chapter 15](15-Recursive-Functions-and-Computability.md). The class **coNP** contains the problems whose
*no*-instances have short certificates, for example "this formula is a tautology" (a no-instance has a short certificate:
a falsifying assignment). Whether $\mathrm{NP} = \mathrm{coNP}$ is also open.

### Where NP sits

**Theorem 16.2.** $\mathrm{P} \subseteq \mathrm{NP} \subseteq \mathrm{EXP}$.

*Proof.* If $A$ is in P, take the verifier that ignores the certificate and runs the polynomial-time decider; the empty
string is a certificate for every yes-instance. So $A$ is in NP.

If $A$ is in NP with verifier $V$ and bound $p$, decide $A$ by trying every string $c$ of length at most $p(n)$ over the
alphabet (say $\{0, 1\}$). There are fewer than $2^{p(n)+1}$ of them, and each check takes polynomial time $q(n)$, so the
total time is at most $2^{p(n)+1} q(n)$, which is $O(2^{n^k})$ for a suitable $k$. $\square$

We know $\mathrm{P} \ne \mathrm{EXP}$, so at least one of the two inclusions is strict. Nobody knows which.

## 16.3 NP-completeness and the Cook-Levin theorem

*Level: advanced.*

### Polynomial-time reductions

**Definition.** $A \le_p B$ ($A$ is **polynomial-time reducible** to $B$) if there is a function $f$, computable in
polynomial time, such that $x \in A \iff f(x) \in B$ for every $x$.

This is the many-one reduction of [Chapter 14](14-Undecidability.md) with a time limit.

**Lemma 16.3.** (a) If $A \le_p B$ and $B \in \mathrm{P}$, then $A \in \mathrm{P}$. (b) If $A \le_p B$ and $B \le_p C$,
then $A \le_p C$.

*Proof.* (a) To decide $A$ on input $x$ of size $n$, compute $f(x)$ in time $O(n^j)$. Its size is at most $O(n^j)$
(a machine writes at most one symbol per step). Run $B$'s decider, time $O((n^j)^k) = O(n^{jk})$. Total: polynomial.
(b) Compose the two reductions; the same calculation shows the composite runs in polynomial time. $\square$

**Definition.** A problem $B$ is **NP-hard** if $A \le_p B$ for every $A$ in NP. It is **NP-complete** if it is NP-hard
and also in NP.

An NP-complete problem is a hardest problem in NP: if *any* NP-complete problem is in P, then by Lemma 16.3(a) *every*
problem in NP is in P, and $\mathrm{P} = \mathrm{NP}$. Conversely, if $\mathrm{P} \ne \mathrm{NP}$, then no NP-complete
problem has a polynomial-time algorithm.

### The theorem

It is not obvious that NP-complete problems exist at all. The first was found independently in the USSR and in North
America.

**Theorem 16.4 (Cook 1971, Levin 1973).** SAT is NP-complete.

Stephen Cook proved it in "The complexity of theorem-proving procedures" (1971). Leonid Levin, working in Moscow, found
the same idea for search problems; his paper appeared in 1973. In 1972, Richard Karp's "Reducibility among
combinatorial problems" used reductions from SAT to show that 21 well-known problems, including clique, vertex
cover, Hamiltonian cycle, graph colouring and subset sum, are NP-complete. Since then thousands of problems have been
added to the list.

*Proof idea.* SAT is in NP: the certificate is a satisfying assignment. The heart of the proof is NP-hardness. Let $A$ be
in NP, decided by a nondeterministic machine $N$ in time $p(n)$. Given an input $x$ of length $n$, we must build, in
polynomial time, a formula $\varphi_x$ that is satisfiable exactly when $N$ has an accepting run on $x$.

A run of $N$ lasts at most $T = p(n)$ steps and so uses at most $T$ tape squares on each side of the start. Record the
whole run in a $T \times (2T + 1)$ table, the **tableau**: row $i$ is the configuration at step $i$. Introduce Boolean
variables

- $c_{i,j,s}$: "at step $i$, square $j$ contains symbol $s$";
- $h_{i,j}$: "at step $i$, the head is on square $j$";
- $q_{i,r}$: "at step $i$, the state is $r$".

There are $O(T^2)$ variables, since the alphabet and the set of states are fixed. Now write $\varphi_x$ as the AND of four
parts:

1. **Well-formed:** at each step, each square holds exactly one symbol, the head is in exactly one place and the machine is
   in exactly one state. ("Exactly one of $a, b, c$" is
   $(a \lor b \lor c) \land (\lnot a \lor \lnot b) \land (\lnot a \lor \lnot c) \land (\lnot b \lor \lnot c)$.)
2. **Start:** row 0 is the start configuration on $x$: the input symbols in squares $0$ to $n-1$, blanks elsewhere, the
   head on square 0, the start state.
3. **Moves:** each row follows from the one before by a legal move of $N$. The key observation is that a step changes
   the tape only near the head, so this is a *local* condition: for each step $i$ and square $j$, the contents of squares
   $j-1, j, j+1$ in row $i$ and $i+1$, together with the head and state, must be consistent with one of the finitely many
   transitions. Each such local condition is a formula of fixed size, and there are $O(T^2)$ of them.
4. **Accept:** some row has the accepting state.

Then $\varphi_x$ is satisfiable if and only if there is a tableau satisfying all four parts, if and only if $N$ has an
accepting run on $x$. The formula has $O(T^2)$ clauses of constant size, so it can be written down in polynomial time.
$\square$

The full details, which are long but routine, are in chapter 7 of Sipser's book (Further reading). The proof is an
echo of [Chapter 15](15-Recursive-Functions-and-Computability.md): just as Kleene's T predicate says "this number codes a
halting computation", $\varphi_x$ says "these truth values code an accepting computation". Logic and computation keep
meeting.

### From SAT to 3-SAT

A formula is in **conjunctive normal form** (CNF, [Chapter 2](02-Propositional-Logic.md)) if it is an AND of
**clauses**, each clause an OR of **literals** (variables or negated variables). **3-SAT** is SAT restricted to CNF
formulas whose clauses have exactly three literals. Its simple shape makes it the most convenient starting point for
reductions.

**Theorem 16.5.** 3-SAT is NP-complete.

*Proof.* 3-SAT is in NP (it is a special case of SAT). For hardness, the Cook-Levin formula is already in CNF (each of
its four parts is a conjunction of clauses), so it is enough to turn each clause into clauses of exactly three literals
without changing satisfiability. A long clause $(\ell_1 \lor \ell_2 \lor \cdots \lor \ell_k)$ with $k \ge 4$ is replaced,
using new variables $y_1, \ldots, y_{k-3}$, by

$$
(\ell_1 \lor \ell_2 \lor y_1) \land (\lnot y_1 \lor \ell_3 \lor y_2) \land (\lnot y_2 \lor \ell_4 \lor y_3) \land \cdots \land (\lnot y_{k-3} \lor \ell_{k-1} \lor \ell_k).
$$

If some $\ell_i$ is true, set the $y$'s before it true and the ones after it false: every new clause is satisfied. If
all $\ell_i$ are false, the first clause forces $y_1$, which forces $y_2$, and so on up to $y_{k-3}$, and then the last
clause is false. So the original clause is satisfiable together with the rest of the formula exactly when the new
clauses are. Short clauses are padded by repeating a literal, as in $(\ell_1 \lor \ell_1 \lor \ell_2)$. The new formula
is only a constant factor longer. $\square$

**Worked example.** The clause $(a \lor b \lor c \lor d \lor e)$, with $k = 5$, becomes

$$
(a \lor b \lor y_1) \land (\lnot y_1 \lor c \lor y_2) \land (\lnot y_2 \lor d \lor e).
$$

If only $d$ is true, take $y_1 = y_2 =$ true: the clauses are satisfied by $y_1$, $y_2$ and $d$. If all five are false,
the first clause needs $y_1$, the second then needs $y_2$, and the third fails. **Check:** a brute-force run over all 32
assignments to $a, \ldots, e$ confirms that the original clause is true exactly when some choice of $y_1, y_2$ satisfies
the three new clauses.

By contrast, **2-SAT** (clauses of two literals) is in P. A clause $(a \lor b)$ is the same as the two implications
$\lnot a \to b$ and $\lnot b \to a$; draw these as arrows in a graph on the literals, and the formula is unsatisfiable
exactly when some variable $x$ has paths from $x$ to $\lnot x$ and from $\lnot x$ to $x$, which can be checked in linear
time. The jump from 2 to 3 literals per clause is the jump from easy to (apparently) hard.

## 16.4 A reduction worked in full: 3-SAT to CLIQUE

*Level: advanced.*

A **clique** in a graph is a set of vertices every two of which are joined by an edge. The problem **CLIQUE** asks: given
a graph $G$ and a number $k$, does $G$ have a clique with $k$ vertices?

CLIQUE is in NP: the certificate is the list of $k$ vertices, and checking all $\binom{k}{2}$ pairs takes polynomial time.
We show it is NP-hard by reducing 3-SAT to it. Then, by Lemma 16.3(b), every NP problem reduces to CLIQUE.

### The construction

Let $\varphi = C_1 \land C_2 \land \cdots \land C_k$ be a 3-CNF formula with $k$ clauses. Build a graph $G_\varphi$:

- **Vertices:** one vertex for each literal occurrence: $3k$ vertices, in $k$ groups of three, group $i$ for clause $C_i$.
- **Edges:** join two vertices if and only if (1) they are in *different* groups, and (2) they are not **contradictory**,
  that is, not of the form $x$ and $\lnot x$ for the same variable.

Ask whether $G_\varphi$ has a clique of size $k$. Building the graph means comparing pairs of the $3k$ vertices, which takes
$O(k^2)$ time, so the reduction is polynomial.

**Theorem 16.6.** $\varphi$ is satisfiable if and only if $G_\varphi$ has a clique of size $k$.

*Proof.* ($\Rightarrow$) Suppose an assignment satisfies $\varphi$. Then each clause has at least one true literal; pick
one in each clause, giving $k$ vertices, one per group. Any two of them are in different groups, and they are not
contradictory, because both are true under the same assignment and $x$ and $\lnot x$ cannot both be true. So every two
are joined: a $k$-clique.

($\Leftarrow$) Suppose $G_\varphi$ has a clique $K$ of size $k$. Vertices in the same group are never joined, so $K$ has at
most one vertex in each group, and since $|K| = k$ it has exactly one. No two vertices of $K$ are contradictory, so we can
set every literal in $K$ to true without conflict: for a literal $x$ set $x$ true, for $\lnot x$ set $x$ false. Variables
not mentioned in $K$ can be set arbitrarily. Then each clause contains a true literal (its vertex in $K$), so $\varphi$
is satisfied. $\square$

### A worked example

Take three clauses in the variables $x_1, x_2, x_3$:

$$
\varphi = (x_1 \lor x_2 \lor \lnot x_3) \land (\lnot x_1 \lor x_2 \lor x_3) \land (x_1 \lor \lnot x_2 \lor x_3).
$$

The graph has 9 vertices. Between two different groups there are $3 \times 3 = 9$ pairs, and there are 3 pairs of groups,
so 27 candidate edges. Remove the contradictory pairs:

- groups 1 and 2: $x_1$ with $\lnot x_1$, and $\lnot x_3$ with $x_3$;
- groups 1 and 3: $x_2$ with $\lnot x_2$, and $\lnot x_3$ with $x_3$;
- groups 2 and 3: $\lnot x_1$ with $x_1$, and $x_2$ with $\lnot x_2$.

That removes 6, leaving **21 edges**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 480 360" role="img" aria-label="The clique graph for three clauses. Top row: clause 1 with x1, x2, not x3. Left column: clause 2 with not x1, x2, x3. Right column: clause 3 with x1, not x2, x3. Thin lines join compatible literals in different clauses, 21 edges in all. The triangle x1 in clause 1, x2 in clause 2, x1 in clause 3 is highlighted: it is a 3-clique, matching the satisfying assignment x1 true, x2 true, x3 false">
<line x1="160" y1="40" x2="70" y2="230" stroke="#eea66f" stroke-width="4"/>
<line x1="160" y1="40" x2="70" y2="310" stroke="currentColor" stroke-width="0.8" opacity="0.45"/>
<line x1="160" y1="40" x2="410" y2="150" stroke="#eea66f" stroke-width="4"/>
<line x1="160" y1="40" x2="410" y2="230" stroke="currentColor" stroke-width="0.8" opacity="0.45"/>
<line x1="160" y1="40" x2="410" y2="310" stroke="currentColor" stroke-width="0.8" opacity="0.45"/>
<line x1="240" y1="40" x2="70" y2="150" stroke="currentColor" stroke-width="0.8" opacity="0.45"/>
<line x1="240" y1="40" x2="70" y2="230" stroke="currentColor" stroke-width="0.8" opacity="0.45"/>
<line x1="240" y1="40" x2="70" y2="310" stroke="currentColor" stroke-width="0.8" opacity="0.45"/>
<line x1="240" y1="40" x2="410" y2="150" stroke="currentColor" stroke-width="0.8" opacity="0.45"/>
<line x1="240" y1="40" x2="410" y2="310" stroke="currentColor" stroke-width="0.8" opacity="0.45"/>
<line x1="320" y1="40" x2="70" y2="150" stroke="currentColor" stroke-width="0.8" opacity="0.45"/>
<line x1="320" y1="40" x2="70" y2="230" stroke="currentColor" stroke-width="0.8" opacity="0.45"/>
<line x1="320" y1="40" x2="410" y2="150" stroke="currentColor" stroke-width="0.8" opacity="0.45"/>
<line x1="320" y1="40" x2="410" y2="230" stroke="currentColor" stroke-width="0.8" opacity="0.45"/>
<line x1="70" y1="150" x2="410" y2="230" stroke="currentColor" stroke-width="0.8" opacity="0.45"/>
<line x1="70" y1="150" x2="410" y2="310" stroke="currentColor" stroke-width="0.8" opacity="0.45"/>
<line x1="70" y1="230" x2="410" y2="150" stroke="#eea66f" stroke-width="4"/>
<line x1="70" y1="230" x2="410" y2="310" stroke="currentColor" stroke-width="0.8" opacity="0.45"/>
<line x1="70" y1="310" x2="410" y2="150" stroke="currentColor" stroke-width="0.8" opacity="0.45"/>
<line x1="70" y1="310" x2="410" y2="230" stroke="currentColor" stroke-width="0.8" opacity="0.45"/>
<line x1="70" y1="310" x2="410" y2="310" stroke="currentColor" stroke-width="0.8" opacity="0.45"/>
<circle cx="160" cy="40" r="16" fill="#eea66f" stroke="currentColor"/>
<text x="160" y="45" text-anchor="middle" font-size="12" fill="currentColor">x1</text>
<circle cx="240" cy="40" r="16" fill="#9cc9ea" stroke="currentColor"/>
<text x="240" y="45" text-anchor="middle" font-size="12" fill="currentColor">x2</text>
<circle cx="320" cy="40" r="16" fill="#9cc9ea" stroke="currentColor"/>
<text x="320" y="45" text-anchor="middle" font-size="12" fill="currentColor">¬x3</text>
<circle cx="70" cy="150" r="16" fill="#9cc9ea" stroke="currentColor"/>
<text x="70" y="155" text-anchor="middle" font-size="12" fill="currentColor">¬x1</text>
<circle cx="70" cy="230" r="16" fill="#eea66f" stroke="currentColor"/>
<text x="70" y="235" text-anchor="middle" font-size="12" fill="currentColor">x2</text>
<circle cx="70" cy="310" r="16" fill="#9cc9ea" stroke="currentColor"/>
<text x="70" y="315" text-anchor="middle" font-size="12" fill="currentColor">x3</text>
<circle cx="410" cy="150" r="16" fill="#eea66f" stroke="currentColor"/>
<text x="410" y="155" text-anchor="middle" font-size="12" fill="currentColor">x1</text>
<circle cx="410" cy="230" r="16" fill="#9cc9ea" stroke="currentColor"/>
<text x="410" y="235" text-anchor="middle" font-size="12" fill="currentColor">¬x2</text>
<circle cx="410" cy="310" r="16" fill="#9cc9ea" stroke="currentColor"/>
<text x="410" y="315" text-anchor="middle" font-size="12" fill="currentColor">x3</text>
<text x="240" y="16" text-anchor="middle" font-size="12" fill="currentColor">clause 1</text>
<text x="22" y="235" text-anchor="middle" font-size="12" fill="currentColor" transform="rotate(-90 22 235)">clause 2</text>
<text x="458" y="235" text-anchor="middle" font-size="12" fill="currentColor" transform="rotate(90 458 235)">clause 3</text>
<text x="240" y="345" text-anchor="middle" font-size="12" fill="currentColor">highlighted: x1 = T, x2 = T, x3 = F</text>
</svg>
</div>

Now look for a triangle (a 3-clique) with one vertex in each group. Try $x_1$ from clause 1, $x_2$ from clause 2 and $x_1$
from clause 3. The pairs are $(x_1, x_2)$, $(x_1, x_1)$ and $(x_2, x_1)$, none contradictory, so all three edges are
present: a 3-clique. Reading it as an assignment: $x_1 =$ true, $x_2 =$ true, and $x_3$ is free; take $x_3 =$ false.

**Check** in the formula: clause 1 has $x_1$ true; clause 2 has $x_2$ true; clause 3 has $x_1$ true. Satisfied.

A brute-force search confirms that $\varphi$ has exactly 5 satisfying assignments out of 8 (all except
$(x_1, x_2, x_3) = (\text{F}, \text{F}, \text{T})$, $(\text{F}, \text{T}, \text{F})$ and $(\text{T}, \text{F}, \text{F})$),
and that the graph has 12 triangles; each triangle gives a satisfying assignment and each satisfying assignment gives at
least one triangle, as the proof says. (Several triangles can give the same assignment, because a clause can have more
than one true literal.)

### Try it in Python

```python
from itertools import combinations, product

clauses = [[(1, True), (2, True), (3, False)],
           [(1, False), (2, True), (3, True)],
           [(1, True), (2, False), (3, True)]]
k = len(clauses)
vertices = [(i, j) for i in range(k) for j in range(3)]
lit = lambda v: clauses[v[0]][v[1]]
def joined(u, w):
    (a, s), (b, t) = lit(u), lit(w)
    return u[0] != w[0] and not (a == b and s != t)

edges = [(u, w) for u, w in combinations(vertices, 2) if joined(u, w)]
cliques = [c for c in combinations(vertices, k)
           if all(joined(u, w) for u, w in combinations(c, 2))]
models = [a for a in product([False, True], repeat=3)
          if all(any(a[v - 1] == s for v, s in c) for c in clauses)]
print(len(edges), len(cliques), len(models))   # 21 12 5
```

### The web of reductions

From CLIQUE, many other problems fall at once:

- **Independent set** (a set of $k$ vertices with no edges between them) is CLIQUE in the **complement graph**, the graph
  with exactly the missing edges. So CLIQUE $\le_p$ INDEPENDENT SET.
- **Vertex cover** (a set of $k$ vertices touching every edge): $S$ is an independent set exactly when its complement
  $V \setminus S$ is a vertex cover, so a graph on $n$ vertices has an independent set of size $k$ iff it has a vertex cover
  of size $n - k$.
- **Hamiltonian cycle**, **3-colouring**, **subset sum** and the **travelling salesman** decision problem are all
  NP-complete by further reductions (Karp 1972; Garey and Johnson's 1979 book is the classic catalogue).

## 16.5 P versus NP

*Level: advanced, with expert remarks.*

### The question

**Is $\mathrm{P} = \mathrm{NP}$?** In words: if a solution can be *checked* quickly, can it always be *found* quickly?

The question was made precise by Cook in 1971. It had earlier echoes. In a letter to John von Neumann in 1956, discovered
and published decades later, Gödel asked how fast a machine could decide whether a statement has a proof of length $n$,
and remarked that if this could be done in time growing like $n$ or $n^2$ it would have enormous consequences for
mathematics. That is essentially the P versus NP question, though nobody followed it up at the time.

In 2000 the Clay Mathematics Institute listed P versus NP as one of its seven **Millennium Prize Problems**, with a prize of
1 million dollars for a solution. It is open.

### What the answers would mean

- **If P = NP** (with a practical algorithm): every problem whose solutions can be recognised could be solved
  efficiently. Finding proofs of theorems of reasonable length would be automatic, since "this is a proof" is checkable.
  Most of today's public-key cryptography would be broken (16.6). Most researchers think this is very unlikely.
- **If P ≠ NP**, which most researchers believe: there are problems where checking is fundamentally easier than finding.
  Thousands of NP-complete problems in scheduling, routing, design and biology have no efficient exact algorithm, and the
  practical response (approximation algorithms, heuristics, solving special cases) is the right one.

Belief is not proof. The main evidence for $\mathrm{P} \ne \mathrm{NP}$ is that a vast number of people, working on
thousands of different NP-complete problems for half a century, have never found a polynomial algorithm for any of them,
and a single one would solve them all.

### What is known

- **Ladner's theorem (1975).** If $\mathrm{P} \ne \mathrm{NP}$, there are problems in NP that are neither in P nor
  NP-complete. Candidates for such "intermediate" problems include factoring (in its decision form) and graph
  isomorphism. For graph isomorphism, László Babai announced a quasi-polynomial algorithm (time $2^{O((\log n)^c)}$) in
  2015.
- **Lower bounds are weak.** Strong lower bounds are known for restricted models (for example, circuits of bounded
  depth), but for general algorithms the best proven lower bounds for SAT are barely more than linear time.
- **The search and decision versions agree.** If you could decide SAT in polynomial time, you could also *find* a satisfying
  assignment: set $x_1$ true, ask whether the simplified formula is still satisfiable, keep or flip, and go on to $x_2$.
  That takes $n$ calls to the decider.

### Why it is hard: barriers

*Level: expert.*

Several proof techniques have been shown, by theorems, to be unable to settle the question.

- **Relativisation** (Theodore Baker, John Gill and Robert Solovay, 1975). Diagonalisation, the method of Chapters 14 and
  the time hierarchy theorem, works equally well if all machines are given access to the same oracle. But there are oracles
  relative to which $\mathrm{P} = \mathrm{NP}$ and others relative to which $\mathrm{P} \ne \mathrm{NP}$. So no argument
  that "relativises" can resolve the question.
- **Natural proofs** (Alexander Razborov and Steven Rudich, 1994, journal version 1997). Most known circuit lower bounds
  work by finding a simple, widely shared property of functions that small circuits lack. They showed that, if certain
  pseudorandom functions exist (which is believed, and is what cryptography assumes), no such "natural" argument can prove
  $\mathrm{P} \ne \mathrm{NP}$.
- **Algebrisation** (Scott Aaronson and Avi Wigderson, 2008). An extension of relativisation that also blocks the
  algebraic techniques behind some of the field's biggest successes.

These barriers do not say the problem is unsolvable. They say the proof, if it comes, must use ideas of a kind not yet
seen. Could the question be independent of ZFC, like the continuum hypothesis
([Chapter 7](07-Infinity-and-Cardinality.md))? Nobody has ruled that out, but there is no evidence for it either, and most
experts expect a proof one way or the other.

## 16.6 Complexity and cryptography

*Level: advanced, with expert remarks.*

Modern cryptography is built on the gap between easy and hard. To encrypt, the sender does something quick; an
eavesdropper must do something slow. In RSA, multiplying two large primes is easy, but finding the primes from the
product (factoring) is believed hard ([Number theory book, Chapter 12](../number-theory/12-Primality-Factoring-and-RSA.md);
the [Cryptography book](https://cryptography.akadian.ca/book/) builds RSA, Diffie-Hellman and elliptic curves in detail).

**Definition (informal).** A **one-way function** is a function $f$ that can be computed in polynomial time, but such that
every polynomial-time algorithm, given $f(x)$ for a random $x$, succeeds in finding *some* $x'$ with $f(x') = f(x)$ only
with negligible probability.

**Theorem 16.7.** If one-way functions exist, then $\mathrm{P} \ne \mathrm{NP}$.

*Proof.* Suppose $\mathrm{P} = \mathrm{NP}$, and let $f$ be computable in polynomial time, with $|x| = n$ and $f$'s output
determining $n$ (as is standard). Consider the problem

$$
\text{PREFIX} = \{ (y, u) : \text{there is } x \text{ of length } n \text{ beginning with } u \text{ such that } f(x) = y \}.
$$

It is in NP: the certificate is $x$. So by assumption it is in P. Now invert $f$ on $y$ bit by bit: ask whether $(y, 0)$ is
in PREFIX; if yes, the first bit can be 0, otherwise it must be 1 (if $y$ has any preimage). Then ask about $(y, u0)$ for
the prefix $u$ found so far, and so on. After $n$ polynomial-time questions you have a preimage $x$. This inverts $f$ on
every input in polynomial time, so $f$ is not one-way. $\square$

So the existence of secure cryptography, in this sense, is a *stronger* statement than $\mathrm{P} \ne \mathrm{NP}$.
Cryptographers need more than $\mathrm{P} \ne \mathrm{NP}$ in two ways:

1. **Average case, not worst case.** NP-hardness says some *instances* are hard. Cryptography needs a random instance,
   such as a random key, to be hard. An NP-complete problem could be hard only on rare inputs. Russell Impagliazzo's 1995
   survey describes "five worlds", from one where P = NP to one where public-key cryptography exists, and all of them are
   consistent with what we can currently prove.
2. **The problems actually used are not NP-complete.** Factoring and the discrete logarithm are in NP, and their natural
   decision versions are also in coNP, so they are probably not NP-complete (if they were, NP would equal coNP, which is
   believed false). They were chosen because they look hard on average, not because they are the hardest problems in NP.

Then there is the quantum twist. In 1994 Peter Shor gave a quantum algorithm that factors integers and computes discrete
logarithms in polynomial time. A large enough quantum computer would therefore break RSA and elliptic-curve cryptography.
This does not contradict the Church-Turing thesis (quantum computers compute nothing new, [Chapter 13](13-Algorithms-and-Turing-Machines.md)),
but it does challenge the idea that P is the same in every physically reasonable model. Nobody knows a quantum algorithm
for NP-complete problems, and it is widely believed none exists. Cryptographers are therefore moving to problems that
seem hard even for quantum computers, such as problems about lattices; the
[Cryptography book](https://cryptography.akadian.ca/book/) has chapters on quantum computers and lattice cryptography.

One small Mars link, honestly made: a rover's commands from Earth are authenticated with cryptographic codes, and the
security of such codes rests on exactly these assumptions, that certain functions are easy to compute and hard to invert.
Nobody has proved that they are; every secure message sent today relies on an unproved conjecture of complexity theory.

## Check yourself

??? question "1. Show that $5n^3 + 2n^2 + 10 = O(n^3)$, giving explicit constants."
    For $n \ge 1$: $2n^2 \le 2n^3$ and $10 \le 10n^3$, so $5n^3 + 2n^2 + 10 \le 17n^3$. Take $c = 17$, $n_0 = 1$.

??? question "2. An algorithm takes $n^2$ steps and another takes $2^n$ steps. If a new computer is 100 times faster, how much larger an input can each handle in the same time?"
    For $n^2$: we need $m^2 = 100 n^2$, so $m = 10n$: inputs 10 times larger. For $2^n$: we need $2^m = 100 \cdot 2^n$, so
    $m = n + \log_2 100 \approx n + 6.6$: only about 6 or 7 more symbols, whatever $n$ is.

??? question "3. Trial division tests whether $N$ is prime using at most $\sqrt N$ divisions. Why is this not a polynomial-time algorithm?"
    The input size is the number of digits $n \approx \log_{10} N$, not $N$ itself. Then $\sqrt N \approx 10^{n/2}$, which
    grows exponentially in $n$. An algorithm polynomial in the *value* $N$ is called pseudo-polynomial; it is exponential in
    the size of the input. (Primality is nevertheless in P, by the AKS algorithm.)

??? question "4. Show that the set of composite numbers is in NP. Which certificate do you use, and how long does checking take?"
    Certificate: a divisor $d$ with $1 < d < N$. Its length is at most the length of $N$. The verifier checks $1 < d < N$
    and that $d$ divides $N$, by one long division, which takes time polynomial (about quadratic) in the number of digits.
    If $N$ is composite such a $d$ exists; if $N$ is prime, no $d$ passes the check. Example: $N = 8051$, $d = 83$,
    $8051 = 83 \times 97$.

??? question "5. Prove that if $A \le_p B$ and $A$ is NP-hard, then $B$ is NP-hard."
    Let $C$ be any problem in NP. Since $A$ is NP-hard, $C \le_p A$. With $A \le_p B$ and transitivity (Lemma 16.3(b)),
    $C \le_p B$. So every problem in NP reduces to $B$, which is the definition of NP-hard.

??? question "6. Convert the clause $(p \lor \lnot q \lor r \lor s)$ into an equisatisfiable set of 3-literal clauses, and check one assignment."
    With one new variable $y$: $(p \lor \lnot q \lor y) \land (\lnot y \lor r \lor s)$. Check with $p = q = r =$ false
    and $s =$ true: the original clause is true (because $s$). Take $y =$ false: the first clause is true because
    $\lnot q$ is true, and the second because $\lnot y$ is true. Now take all of $p, r, s$ false and $q$ true: the
    original is false; the first new clause needs $y$ true, and then the second clause $(\lnot y \lor r \lor s)$ is false.

??? question "7. Is the 2-SAT formula $(x \lor y) \land (\lnot x \lor y) \land (x \lor \lnot y) \land (\lnot x \lor \lnot y)$ satisfiable? Use the implication graph."
    The implications are: from $(x \lor y)$, $\lnot x \to y$ and $\lnot y \to x$; from $(\lnot x \lor y)$, $x \to y$ and
    $\lnot y \to \lnot x$; from $(x \lor \lnot y)$, $\lnot x \to \lnot y$ and $y \to x$; from $(\lnot x \lor \lnot y)$,
    $x \to \lnot y$ and $y \to \lnot x$. Then $x \to y \to \lnot x$ and $\lnot x \to y \to x$, so $x$ and $\lnot x$ imply
    each other: unsatisfiable. Check directly: the four clauses rule out each of the four assignments to $(x, y)$ in turn.

??? question "8. For the formula $\varphi$ of 16.4, find a triangle in $G_\varphi$ that corresponds to the satisfying assignment $x_1 =$ false, $x_2 =$ false, $x_3 =$ false."
    Under that assignment the true literals are $\lnot x_3$ in clause 1, $\lnot x_1$ in clause 2 and $\lnot x_2$ in
    clause 3. These three are pairwise non-contradictory (they mention different variables), and they are in different
    groups, so they form a triangle. Check: clause 1 is $(x_1 \lor x_2 \lor \lnot x_3)$, true by $\lnot x_3$; clause 2 is
    true by $\lnot x_1$; clause 3 is true by $\lnot x_2$.

??? question "9. A graph has 10 vertices. Explain why it has an independent set of size 4 if and only if it has a vertex cover of size 6."
    A set $S$ is independent if no edge has both ends in $S$. Then every edge has at least one end outside $S$, so the
    complement $V \setminus S$ touches every edge: it is a vertex cover. Conversely, if $V \setminus S$ is a vertex cover,
    no edge can have both ends in $S$. So $S$ is independent exactly when $V \setminus S$ is a vertex cover, and
    $|S| = 4$ corresponds to $|V \setminus S| = 10 - 4 = 6$.

??? question "10. Suppose someone gives you a polynomial-time algorithm that decides whether a formula is satisfiable. Show how to find a satisfying assignment in polynomial time."
    Let $\varphi$ have variables $x_1, \ldots, x_n$. If the decider says no, stop. Otherwise substitute $x_1 =$ true and
    simplify, getting $\varphi_1$; ask the decider about $\varphi_1$. If it says yes, keep $x_1 =$ true; if no, then
    $x_1 =$ false must work (since $\varphi$ is satisfiable), so substitute that. Repeat for $x_2, \ldots, x_n$. That is $n$
    calls to a polynomial-time decider on formulas no larger than $\varphi$, so polynomial time in total, and at the end
    every variable has a value that keeps the formula satisfiable, so the final assignment satisfies $\varphi$.

??? question "11. Why does the proof of Theorem 16.2 show that every NP problem can be decided in exponential time, and why does this not show $\mathrm{NP} \ne \mathrm{P}$?"
    The proof tries all certificates of length at most $p(n)$, about $2^{p(n)}$ of them, each checked in polynomial time.
    That gives an exponential *upper* bound: NP problems need at most exponential time. To show $\mathrm{NP} \ne \mathrm{P}$
    you would need a *lower* bound: a proof that some NP problem cannot be solved by any polynomial-time algorithm at
    all, however clever. Exhaustive search is one algorithm; the question is about all algorithms.

??? question "12. Explain why, if factoring were NP-complete, NP would equal coNP. (You may assume the decision problem 'does $N$ have a prime factor less than $M$?' is in both NP and coNP.)"
    Call the problem F. Suppose F is NP-complete. Take any $A$ in NP; then $A \le_p F$ by a reduction $f$. Since F is in
    coNP, its no-instances have short certificates checkable in polynomial time; so do $A$'s no-instances: for $x \notin A$
    compute $f(x)$ (which is not in F) and give the no-certificate for $f(x)$. Hence $A$ is in coNP, so
    $\mathrm{NP} \subseteq \mathrm{coNP}$. Applying the same argument to complements gives
    $\mathrm{coNP} \subseteq \mathrm{NP}$. So $\mathrm{NP} = \mathrm{coNP}$, which most researchers believe is false.
    (F is in coNP because a no-certificate is the full prime factorisation of $N$, with primality certificates, which
    shows no prime factor is less than $M$.)

## What you learned

- Running time is measured as a function of input size, up to constant factors (big O); the size of a number is its
  number of digits, not its value.
- P is the class of problems decidable in polynomial time. It is the same in every reasonable classical model and contains
  arithmetic, GCD, graph search, linear programming and primality. The time hierarchy theorem shows $\mathrm{P} \ne \mathrm{EXP}$.
- NP is the class of problems with short, quickly checkable certificates for yes-instances; $\mathrm{P} \subseteq \mathrm{NP}
  \subseteq \mathrm{EXP}$.
- The Cook-Levin theorem: SAT is NP-complete, because the run of a machine can be described by a formula. 3-SAT,
  CLIQUE, vertex cover, Hamiltonian cycle and thousands of others follow by polynomial-time reductions.
- The reduction from 3-SAT to CLIQUE picks one true literal per clause; non-contradictory choices are cliques.
- P versus NP is open; relativisation, natural proofs and algebrisation explain why known techniques fail. One-way
  functions, the basis of cryptography, would imply $\mathrm{P} \ne \mathrm{NP}$, and need even more.

**Next:** [Chapter 17](17-Arithmetic-and-Peano.md), which turns from machines back to logic: the Peano axioms for
arithmetic, Gödel numbering, and how arithmetic can talk about computation, preparing for Gödel's incompleteness
theorems.

## Further reading

- S. A. Cook, "The complexity of theorem-proving procedures", *Proceedings of the 3rd ACM Symposium on Theory of
  Computing*, 1971.
- L. A. Levin, "Universal sequential search problems", *Problems of Information Transmission* 9, 1973.
- R. M. Karp, "Reducibility among combinatorial problems", in *Complexity of Computer Computations*, Plenum, 1972.
- J. Edmonds, "Paths, trees, and flowers", *Canadian Journal of Mathematics* 17, 1965.
- J. Hartmanis and R. E. Stearns, "On the computational complexity of algorithms", *Transactions of the American
  Mathematical Society* 117, 1965.
- M. R. Garey and D. S. Johnson, *Computers and Intractability: A Guide to the Theory of NP-Completeness*, Freeman, 1979.
- M. Sipser, *Introduction to the Theory of Computation*, 3rd edition, Cengage, 2012 (chapters 7 to 9).
- S. Arora and B. Barak, *Computational Complexity: A Modern Approach*, Cambridge University Press, 2009.
- M. Agrawal, N. Kayal and N. Saxena, "PRIMES is in P", *Annals of Mathematics* 160, 2004.
- T. Baker, J. Gill and R. Solovay, "Relativizations of the P =? NP question", *SIAM Journal on Computing* 4, 1975.
- A. Razborov and S. Rudich, "Natural proofs", *Journal of Computer and System Sciences* 55, 1997.
- R. Impagliazzo, "A personal view of average-case complexity", *Proceedings of the 10th IEEE Conference on Structure in
  Complexity Theory*, 1995.
- L. Fortnow, *The Golden Ticket: P, NP, and the Search for the Impossible*, Princeton University Press, 2013.
- S. Cook, "The P versus NP problem", the official problem description for the Clay Mathematics Institute, 2000.
- On this site: Topics lessons [P versus NP](../../topics/logic/level-8/06-p-versus-np.md) and
  [searching and sorting](../../topics/logic/level-6/04-searching-sorting.md); U of T guides
  [CSC148H1 Unit 9, Efficiency Analysis](../../uoft/CSC148H1/unit09.md) and
  [CSC108H1 Unit 9, Searching, Sorting & Complexity](../../uoft/CSC108H1/unit09.md);
  [Combinatorics book, Chapter 14](../combinatorics/14-Hamiltonian-Cycles-and-Hard-Problems.md);
  [Number theory book, Chapter 12](../number-theory/12-Primality-Factoring-and-RSA.md); the
  [Cryptography book](https://cryptography.akadian.ca/book/), especially
  [Defining security](https://cryptography.akadian.ca/book/17-Defining-Security/) and
  [Quantum computers](https://cryptography.akadian.ca/book/20-Quantum-Computers/); the [book index](index.md).
