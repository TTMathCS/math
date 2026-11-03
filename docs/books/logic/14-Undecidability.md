# 14. Undecidability

*A program hangs. Is it stuck in a loop, or just slow? You would like a tool that reads any program and its input and
tells you, in a finite time, whether it will ever stop. In this chapter you will prove that no such tool can exist,
whatever language it is written in and however much time you allow it. Then you will use that one impossibility to
prove many others by "reduction": no algorithm decides any interesting property of what programs do (Rice's theorem),
no algorithm decides whether a polynomial equation has whole-number solutions (Hilbert's tenth problem), and no
algorithm decides whether two words in a group are equal. Finally you will meet the busy beaver numbers, which grow
faster than anything computable, and the 2024 proof, by an online collaboration checked by computer, of the value of
the fifth one.*

!!! abstract "In this chapter"
    **You will learn:**

    - the halting problem, and a complete proof that no Turing machine solves it
    - the difference between decidable and semi-decidable problems
    - how reductions transfer undecidability from one problem to another
    - Rice's theorem: every non-trivial property of the function a program computes is undecidable, with proof
    - what Matiyasevich proved in 1970 about Hilbert's tenth problem, and what the word problem for groups is
    - the busy beaver function, why it outgrows every computable function, and what is known about BB(5) and BB(6)

    **You need:** [Chapter 13](13-Algorithms-and-Turing-Machines.md) (Turing machines, codes, the universal machine) and
    [Chapter 7](07-Infinity-and-Cardinality.md) (Cantor's diagonal argument). A gentler first look: the Topics lesson
    [Turing and the halting problem](../../topics/logic/level-8/05-halting-problem.md).

    **Levels:** 14.1 and 14.2 are intermediate to advanced; 14.3 is advanced; 14.4 and 14.5 are advanced, stated
    without full proof; 14.6 is advanced with an expert part at the end.

## 14.1 The halting problem

*Level: intermediate.*

### The problem

Recall from [Chapter 13](13-Algorithms-and-Turing-Machines.md) that every Turing machine $M$ can be written as a string
$\langle M \rangle$, and that $\langle M, w \rangle$ describes the pair "machine $M$, input $w$".

**Definition.** The **halting problem** is the set

$$
\mathrm{HALT} = \{ \langle M, w \rangle : M \text{ halts on input } w \}.
$$

A machine $H$ **decides** HALT if, on every input $\langle M, w \rangle$, $H$ halts and answers yes when $M$ halts on
$w$, and no when $M$ runs forever on $w$.

Why can't we just run $M$ on $w$ and see? If $M$ halts, we will find out. But if after a million steps it is still
running, we have learned nothing: it might halt at step two million. Running the machine gives a procedure that says
yes on the yes-instances but never says no. The question is whether some cleverer method, one that analyses the table
of $M$ instead of just running it, could always give an answer.

### The theorem

**Theorem 14.1 (Turing 1936, in modern form).** No Turing machine decides HALT.

*Proof.* Suppose, for a contradiction, that a machine $H$ decides HALT. Build a new machine $D$ that does the following
on input $\langle M \rangle$, the description of a machine $M$:

1. Run $H$ on the input $\langle M, \langle M \rangle \rangle$, that is, ask whether $M$ halts when given its own
   description as input.
2. If $H$ says yes, go into a loop and run forever.
3. If $H$ says no, halt.

$D$ is a genuine Turing machine: step 1 needs only to copy the input and run $H$, which by assumption always halts, and
steps 2 and 3 are trivial. Now ask what $D$ does on its own description $\langle D \rangle$.

- If $D$ halts on $\langle D \rangle$, then in step 1 $H$ said yes (because $D$ does halt on $\langle D \rangle$), so $D$
  went into a loop in step 2 and did not halt. Contradiction.
- If $D$ does not halt on $\langle D \rangle$, then $H$ said no, so $D$ halted in step 3. Contradiction.

Either way we have a contradiction, so $H$ cannot exist. $\square$

In Python-flavoured pseudocode the whole proof is five lines:

```python
def D(source):
    if halts(source, source):   # the supposed perfect halting tester
        while True: pass        # do the opposite: loop
    else:
        return                  # do the opposite: stop
# Now feed D its own source code. Whatever halts() answers is wrong.
```

The point is not that `halts` would be slow or hard to write. Any function `halts` you write, however clever, gets
some input wrong, and the program `D` built from it shows you one.

### The same argument as Cantor's

Make a table whose rows are the machines $M_0, M_1, M_2, \ldots$ and whose columns are their descriptions used as inputs.
In row $i$, column $j$, write H if $M_i$ halts on $\langle M_j \rangle$ and L (loops) if not. The machine $D$ is built to
disagree with the diagonal: on input $\langle M_i \rangle$ it does the opposite of what $M_i$ does. So $D$ differs from
every row, yet $D$ is a machine and must be some row. This is exactly Cantor's diagonal argument
([Chapter 7](07-Infinity-and-Cardinality.md)); the only new ingredient is that a decider $H$ would make the diagonal
*computable*, so the flipped diagonal would be a machine.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 230" role="img" aria-label="A table with rows M0 to M3 and columns input M0 to M3, entries H for halts or L for loops. The diagonal entries M0 on M0 equals H, M1 on M1 equals L, M2 on M2 equals L, M3 on M3 equals H are highlighted. Below, the row for D reads L, H, H, L, the opposite of the diagonal in each column">
<text x="200" y="20" text-anchor="middle" font-size="13" fill="currentColor">input</text>
<text x="140" y="44" text-anchor="middle" font-size="13" fill="currentColor">⟨M0⟩</text>
<text x="200" y="44" text-anchor="middle" font-size="13" fill="currentColor">⟨M1⟩</text>
<text x="260" y="44" text-anchor="middle" font-size="13" fill="currentColor">⟨M2⟩</text>
<text x="320" y="44" text-anchor="middle" font-size="13" fill="currentColor">⟨M3⟩</text>
<text x="70" y="74" text-anchor="middle" font-size="13" fill="currentColor">M0</text>
<text x="70" y="104" text-anchor="middle" font-size="13" fill="currentColor">M1</text>
<text x="70" y="134" text-anchor="middle" font-size="13" fill="currentColor">M2</text>
<text x="70" y="164" text-anchor="middle" font-size="13" fill="currentColor">M3</text>
<rect x="120" y="55" width="40" height="28" fill="#eea66f" stroke="currentColor"/>
<rect x="180" y="85" width="40" height="28" fill="#eea66f" stroke="currentColor"/>
<rect x="240" y="115" width="40" height="28" fill="#eea66f" stroke="currentColor"/>
<rect x="300" y="145" width="40" height="28" fill="#eea66f" stroke="currentColor"/>
<text x="140" y="74" text-anchor="middle" font-size="14" fill="currentColor">H</text>
<text x="200" y="74" text-anchor="middle" font-size="14" fill="currentColor">L</text>
<text x="260" y="74" text-anchor="middle" font-size="14" fill="currentColor">H</text>
<text x="320" y="74" text-anchor="middle" font-size="14" fill="currentColor">H</text>
<text x="140" y="104" text-anchor="middle" font-size="14" fill="currentColor">H</text>
<text x="200" y="104" text-anchor="middle" font-size="14" fill="currentColor">L</text>
<text x="260" y="104" text-anchor="middle" font-size="14" fill="currentColor">L</text>
<text x="320" y="104" text-anchor="middle" font-size="14" fill="currentColor">H</text>
<text x="140" y="134" text-anchor="middle" font-size="14" fill="currentColor">L</text>
<text x="200" y="134" text-anchor="middle" font-size="14" fill="currentColor">H</text>
<text x="260" y="134" text-anchor="middle" font-size="14" fill="currentColor">L</text>
<text x="320" y="134" text-anchor="middle" font-size="14" fill="currentColor">L</text>
<text x="140" y="164" text-anchor="middle" font-size="14" fill="currentColor">L</text>
<text x="200" y="164" text-anchor="middle" font-size="14" fill="currentColor">L</text>
<text x="260" y="164" text-anchor="middle" font-size="14" fill="currentColor">H</text>
<text x="320" y="164" text-anchor="middle" font-size="14" fill="currentColor">H</text>
<line x1="40" y1="183" x2="360" y2="183" stroke="currentColor" stroke-dasharray="4 3"/>
<text x="70" y="208" text-anchor="middle" font-size="13" fill="currentColor">D</text>
<rect x="120" y="190" width="40" height="28" fill="#9cc9ea" stroke="currentColor"/>
<rect x="180" y="190" width="40" height="28" fill="#9cc9ea" stroke="currentColor"/>
<rect x="240" y="190" width="40" height="28" fill="#9cc9ea" stroke="currentColor"/>
<rect x="300" y="190" width="40" height="28" fill="#9cc9ea" stroke="currentColor"/>
<text x="140" y="209" text-anchor="middle" font-size="14" fill="currentColor">L</text>
<text x="200" y="209" text-anchor="middle" font-size="14" fill="currentColor">H</text>
<text x="260" y="209" text-anchor="middle" font-size="14" fill="currentColor">H</text>
<text x="320" y="209" text-anchor="middle" font-size="14" fill="currentColor">L</text>
</svg>
</div>

### Decidable and semi-decidable

The halting problem is not completely out of reach. It has a one-sided method.

**Definition.** A set $A$ of strings is **semi-decidable** (also called **recognisable**, **recursively enumerable** or
**computably enumerable**, c.e. for short) if there is a machine that halts and says yes on every member of $A$, and on
non-members either says no or runs forever.

**Proposition 14.2.** HALT is semi-decidable.

*Proof.* Use the universal machine $U$ of [Chapter 13](13-Algorithms-and-Turing-Machines.md): on input
$\langle M, w \rangle$, simulate $M$ on $w$, and if the simulation halts, say yes. $\square$

**Proposition 14.3.** A set $A$ is decidable if and only if both $A$ and its complement $\overline{A}$ are
semi-decidable.

*Proof.* If $A$ is decidable, the decider recognises $A$, and the same decider with its answers swapped recognises
$\overline{A}$. Conversely, suppose $R_1$ recognises $A$ and $R_2$ recognises $\overline{A}$. On input $x$, run $R_1$ and
$R_2$ alternately, one step at a time each. Exactly one of them halts with yes on $x$, because $x$ is in exactly one of $A$
and $\overline{A}$, so this process stops; answer yes if $R_1$ was the one that accepted, no otherwise. $\square$

**Corollary 14.4.** The complement of HALT, the set of pairs $\langle M, w \rangle$ where $M$ runs forever, is not
semi-decidable.

*Proof.* If it were, then HALT and its complement would both be semi-decidable, and HALT would be decidable by 14.3,
contradicting 14.1. $\square$

So there is a real asymmetry. "This program halts" can always be confirmed (wait for it). "This program runs forever"
cannot always be confirmed by any method. You will see this asymmetry again in [Chapter 15](15-Recursive-Functions-and-Computability.md)
and, in the form "true but unprovable", in [Chapter 18](18-Godels-Incompleteness-Theorems.md).

### What the theorem does not say

- It does **not** say we cannot decide halting for *particular* programs. For a loop like `for i in range(10)` it is
  obvious, and verification tools prove termination of many real programs. The theorem says no single method works for
  *all* programs.
- It does **not** depend on time limits. Even with unlimited time, the decider must eventually *stop and answer*; that
  is what it cannot do.
- It does **not** apply to machines with a bounded memory. A machine with $k$ bits of memory has at most $2^k$
  configurations, so if it runs for more than $2^k$ steps (times the number of positions and states) it has repeated a
  configuration and will loop forever. Halting for such machines is decidable in principle, though $2^k$ is
  astronomical for real computers.

### An example of why it is hard

Here is a short program:

```python
def collatz(n):
    while n != 1:
        n = n // 2 if n % 2 == 0 else 3 * n + 1
```

Does `collatz(n)` halt for every positive $n$? That is the **Collatz conjecture**, open since the 1930s. It has been
checked by computer for enormous ranges of $n$, but nobody has a proof. A halting decider would settle it, and many
other open problems, at once: Goldbach's conjecture says that a program searching for an even number above 2 that is not
a sum of two primes runs forever. The halting problem contains a great deal of mathematics.

## 14.2 Reductions

*Level: intermediate to advanced.*

Once one problem is known to be undecidable, others follow by a simple principle: if you could solve problem $B$, you
could solve problem $A$; $A$ is unsolvable; so $B$ is unsolvable.

**Definition.** A set $A$ is **many-one reducible** to a set $B$, written $A \le_m B$, if there is a total computable
function $f$ such that for every string $x$,

$$
x \in A \iff f(x) \in B.
$$

The function $f$ is the **reduction**: it translates each question about $A$ into a question about $B$ with the same
answer.

**Lemma 14.5.** If $A \le_m B$ and $B$ is decidable, then $A$ is decidable. Equivalently, if $A \le_m B$ and $A$ is
undecidable, then $B$ is undecidable. The same holds with "semi-decidable" in place of "decidable".

*Proof.* Let $D_B$ decide $B$. To decide whether $x \in A$, compute $f(x)$ (possible, since $f$ is total and computable)
and run $D_B$ on it; answer what $D_B$ answers. This is correct because $x \in A$ exactly when $f(x) \in B$. The same
argument with a recogniser for $B$ gives a recogniser for $A$. $\square$

Pay attention to the direction. To show $B$ is hard, reduce a *known hard* problem *to* $B$. A reduction from $B$ to
HALT would only show that $B$ is no harder than HALT.

### Worked example 1: halting on a blank tape

$\mathrm{HALT}_\varepsilon = \{ \langle M \rangle : M \text{ halts when started on a blank tape} \}$.

**Claim.** $\mathrm{HALT} \le_m \mathrm{HALT}_\varepsilon$, so $\mathrm{HALT}_\varepsilon$ is undecidable.

*Reduction.* Given $\langle M, w \rangle$, build the machine $M_w$ that first writes the fixed string $w$ on its blank
tape, moves back to its first symbol, and then behaves like $M$. (Writing $w$ takes $|w|$ extra states, one per symbol,
so $M_w$ is easy to construct from $\langle M \rangle$ and $w$.) Then $M_w$ halts on a blank tape exactly when $M$ halts on
$w$. The map $\langle M, w \rangle \mapsto \langle M_w \rangle$ is computable, so it is a reduction. $\square$

The trick of hard-wiring the input into the machine is used constantly.

### Worked example 2: does the machine halt on every input?

$\mathrm{TOTAL} = \{ \langle M \rangle : M \text{ halts on every input} \}$.

**Claim.** $\mathrm{HALT}_\varepsilon \le_m \mathrm{TOTAL}$.

*Reduction.* Given $\langle M \rangle$, build $M'$ that first erases its input, then runs $M$ on the now blank tape. If
$M$ halts on a blank tape, $M'$ halts on every input; if not, $M'$ halts on no input. So
$\langle M \rangle \in \mathrm{HALT}_\varepsilon \iff \langle M' \rangle \in \mathrm{TOTAL}$. $\square$

In fact TOTAL is even harder than HALT: neither it nor its complement is semi-decidable (exercise 8 gives half of this).

### Worked example 3: do two programs compute the same function?

$\mathrm{EQ} = \{ \langle M_1, M_2 \rangle : M_1 \text{ and } M_2 \text{ halt on the same inputs with the same outputs} \}$.

**Claim.** TOTAL $\le_m$ EQ.

*Reduction.* Let $T$ be a fixed machine that halts at once with output 0 on every input. Given $\langle M \rangle$,
build $M''$: run $M$ on the input; if it halts, erase everything and output 0. Then $M''$ computes the same function as
$T$ exactly when $M$ halts on every input. The map $\langle M \rangle \mapsto \langle M'', T \rangle$ is the reduction.
$\square$

So no compiler can decide in general whether an "optimised" program is equivalent to the original. Real optimisers
use only transformations that are *proved* correct in advance, which is the practical way around this theorem.

### Other kinds of reduction

A many-one reduction asks one question of $B$ and passes the answer on unchanged. A **Turing reduction** $A \le_T B$
allows an algorithm for $A$ that may ask a $B$-oracle (an imaginary box that answers questions about $B$ instantly) many
questions and use the answers in any way. For example, $\overline{\mathrm{HALT}} \le_T \mathrm{HALT}$ (ask once, flip
the answer), but $\overline{\mathrm{HALT}} \not\le_m \mathrm{HALT}$, because by Lemma 14.5 that would make
$\overline{\mathrm{HALT}}$ semi-decidable. Turing reductions measure "how unsolvable" a problem is; they lead to the
theory of **degrees of unsolvability**, a large subject begun by Post in 1944 and taken up again in
[Chapter 15](15-Recursive-Functions-and-Computability.md).

## 14.3 Rice's theorem

*Level: advanced.*

The reductions in 14.2 have the same shape every time: build a machine that first does something that may or may not
halt, and then, only if it halts, behaves in some interesting way. Henry Gordon Rice saw that this shape proves a sweeping
general theorem (published in 1953).

For a machine $M$, write $\varphi_M$ for the partial function it computes: $\varphi_M(x)$ is $M$'s output on $x$ if $M$
halts on $x$, and undefined otherwise.

**Definition.** A property $P$ of machines is **semantic** (or **extensional**) if it depends only on the function
computed: whenever $\varphi_{M_1} = \varphi_{M_2}$, either both $M_1$ and $M_2$ have $P$ or neither does. It is
**non-trivial** if some machine has $P$ and some machine does not.

Examples of semantic properties: "$\varphi_M(0) = 7$", "$\varphi_M$ is total", "$M$ halts on at least one input",
"$\varphi_M$ is the squaring function", "the set of inputs $M$ accepts is finite". Non-semantic (syntactic) properties:
"$M$ has 17 states", "$M$ ever writes the symbol 1 during its first 100 steps on input 0", "$M$'s table contains a
transition into its start state".

**Theorem 14.6 (Rice).** Every non-trivial semantic property of Turing machines is undecidable.

*Proof.* Let $P$ be non-trivial and semantic. Let $\emptyset$ denote the nowhere-defined function (the function computed
by a machine that never halts). Suppose first that machines computing $\emptyset$ do *not* have $P$. (If they do, run the
argument below for the complement of $P$, which is also non-trivial and semantic; a decider for $P$ would give one for
its complement.) Since $P$ is non-trivial, some machine $K$ has $P$.

We reduce $\mathrm{HALT}$ to $P$. Given $\langle M, w \rangle$, build a machine $N = N_{M,w}$ that on input $x$:

1. runs $M$ on $w$ (ignoring $x$ for now);
2. if that halts, runs $K$ on $x$ and outputs what $K$ outputs.

The map $\langle M, w \rangle \mapsto \langle N \rangle$ is computable: $N$'s table is assembled from the tables of $M$
and $K$, with $w$ hard-wired as in 14.2.

- If $M$ halts on $w$, then $N$ behaves exactly like $K$ on every input, so $\varphi_N = \varphi_K$. Because $P$ is
  semantic and $K$ has $P$, $N$ has $P$.
- If $M$ does not halt on $w$, then $N$ halts on no input, so $\varphi_N = \emptyset$, and $N$ does not have $P$.

So $\langle M, w \rangle \in \mathrm{HALT} \iff N$ has $P$. A decider for $P$ would decide HALT, which is impossible
(Theorem 14.1). $\square$

### Using Rice's theorem

**Worked example.** Is the set $\{ \langle M \rangle : \varphi_M(5) = 120 \}$ decidable? The property depends only on
$\varphi_M$, so it is semantic. It is non-trivial: a machine computing factorial has it, and a machine that never halts
does not. By Rice's theorem it is undecidable.

**Worked example.** Is $\{ \langle M \rangle : M \text{ halts on input 0 within 1000 steps} \}$ decidable? Yes: simulate
$M$ for 1000 steps. Rice's theorem does not apply, and the reason is instructive. The property is *not* semantic: a fast
and a slow machine can compute the same function, one halting in 10 steps and the other in 2000.

**Worked example.** "$M$ has an even number of states" is decidable (count them); it is syntactic.

### What Rice's theorem means in practice

Every question of the form "does this program ever do X?", where X is about its input-output behaviour, is undecidable
in general. That includes "does it ever divide by zero", "does it ever print a password", "is it a virus", once the
question is phrased as a property of what the program does. Program analysers work anyway, by giving up one of three
things: they may answer "don't know" (sound but incomplete analysis), they may be wrong sometimes (heuristics, such as
virus scanners), or they may only handle a restricted language in which the question becomes decidable. Rice's theorem
says one of these sacrifices is unavoidable.

Rice's theorem is about *semi-deciding* as well as deciding: a refined version (the Rice-Shapiro theorem) characterises
which semantic properties are semi-decidable. For instance "$M$ halts on at least one input" is semi-decidable (run $M$ on
all inputs in parallel), but "$M$ halts on no input" is not.

## 14.4 Hilbert's tenth problem

*Level: advanced. The main theorem is stated without its full proof.*

A **Diophantine equation** is a polynomial equation with integer coefficients, to be solved in integers, such as
$x^2 + y^2 = z^2$ or $x^3 + y^3 + z^3 = 33$. Hilbert's tenth problem (1900), after describing such an equation, says:

> To devise a process according to which it can be determined by a finite number of operations whether the equation is
> solvable in rational integers.

(Rational integers are the ordinary integers $0, \pm 1, \pm 2, \ldots$; this is from the standard English translation
of his address.) In 1900 there was no definition of "process"; the problem was a request for an algorithm.

### The easy direction

The set of solvable Diophantine equations is semi-decidable: list all integer tuples, for example by increasing
$|x_1| + \cdots + |x_k|$, plug each one in, and stop if one works. If the equation has a solution, the search finds it.
If not, the search runs forever. So the problem has exactly the shape of HALT.

For one unknown the problem is decidable. If $a_n x^n + \cdots + a_1 x + a_0 = 0$ with $a_0 \ne 0$ has an integer root
$r$, then $r$ divides $a_0$ (move $a_0$ to one side and factor out $r$), so you only need to try the finitely many
divisors of $a_0$. **Worked example:** $x^3 - 4x^2 + x + 6 = 0$. The candidates are $\pm 1, \pm 2, \pm 3, \pm 6$. Trying
them gives the roots $-1$, $2$ and $3$. Check: $(x + 1)(x - 2)(x - 3) = x^3 - 4x^2 + x + 6$.

### Diophantine sets

A set $S$ of natural numbers is **Diophantine** if there is a polynomial $p(x, y_1, \ldots, y_k)$ with integer
coefficients such that

$$
x \in S \iff \text{there are natural numbers } y_1, \ldots, y_k \text{ with } p(x, y_1, \ldots, y_k) = 0.
$$

Examples:

- The even numbers: $x = 2y$, so $p = x - 2y$.
- The composite numbers: $x = (y_1 + 2)(y_2 + 2)$.
- "$x \le z$" (with $z$ another parameter): $z = x + y$.
- "$x$ divides $z$": $z = x y$.
- The numbers that are not powers of 2 (exercise 6).

Every Diophantine set is semi-decidable, by the search above. The astonishing theorem is the converse.

**Theorem 14.7 (MRDP: Matiyasevich, Robinson, Davis, Putnam).** A set of natural numbers is Diophantine if and only if it
is computably enumerable.

The proof was a long collective effort. Martin Davis, Hilary Putnam and Julia Robinson proved in 1961 that every c.e. set
is *exponential* Diophantine, that is, definable as above if the polynomial may also contain terms like $y_1^{y_2}$. What
remained was to show that exponentiation itself is Diophantine: that the relation $z = x^y$ can be written as
$\exists y_1 \ldots y_k\; p = 0$. Robinson had shown that it would be enough to find one Diophantine relation that grows
exponentially but not faster. In 1970 Yuri Matiyasevich, then 22, found one, using the Fibonacci numbers: he showed that
"$v$ is the $2u$-th Fibonacci number" is Diophantine. The full proof fills a short book (Matiyasevich, *Hilbert's Tenth
Problem*, 1993); Davis's 1973 article in the *American Mathematical Monthly* is a self-contained account.

**Corollary 14.8.** There is no algorithm that decides whether a Diophantine equation has a solution.

*Proof.* Take a c.e. set $K$ that is not decidable, for example the set of codes of machines that halt on a blank tape
(14.2). By MRDP there is a polynomial $p$ with $x \in K \iff \exists \vec y\ p(x, \vec y) = 0$. If solvability of
Diophantine equations were decidable, then for each number $x$ we could decide whether the equation $p(x, \vec y) = 0$ (now
with $x$ fixed and only $\vec y$ unknown) has a solution in natural numbers, and so decide $K$. (Solvability in natural
numbers reduces to solvability in integers, because by Lagrange's four-square theorem every natural number is a sum of
four squares: replace each $y_i$ by $a_i^2 + b_i^2 + c_i^2 + d_i^2$.) Contradiction. $\square$

### Strange consequences

- **A polynomial whose positive values are the primes.** The primes form a decidable, hence c.e., set, so they are
  Diophantine. Jones, Sato, Wada and Wiens (1976) wrote down an explicit polynomial in 26 variables, of degree 25, whose
  positive values, as the variables range over the natural numbers, are exactly the prime numbers. (It also takes many
  negative values.) The trick: if $x \in S \iff \exists \vec y\, p(x, \vec y) = 0$, then the positive values of
  $x\,(1 - p^2)$ are exactly the members of $S$, because $1 - p^2$ is positive only when $p = 0$.
- **Unprovable equations.** Combined with Gödel's theorem ([Chapter 18](18-Godels-Incompleteness-Theorems.md)), MRDP
  gives explicit polynomial equations that have no solutions but for which ZFC cannot prove that they have none, if ZFC
  is consistent.
- **Few variables suffice.** Matiyasevich showed that nine unknowns are enough for an undecidable family of equations
  over the natural numbers. The smallest number needed is not known.

What is still open: the same question for *rational* solutions. Nobody knows whether there is an algorithm that decides
whether a polynomial equation with integer coefficients has a solution in rational numbers. That question is tied up with
deep conjectures about elliptic curves (see the [Number theory book](../number-theory/19-Elliptic-Curves.md)).

## 14.5 The word problem for groups

*Level: advanced. The main theorem is stated without proof.*

A group ([Algebra book, Chapter 13](../algebra/13-Groups.md)) can be described by a **presentation**: a list of
generators and a list of relations they satisfy. For example

$$
G = \langle a, b \mid a b a^{-1} b^{-1} \rangle
$$

means: the group generated by $a$ and $b$, in which the word $a b a^{-1} b^{-1}$ equals the identity (so $ab = ba$), and
in which nothing else holds except what follows from that by the group axioms. This $G$ is $\mathbb{Z}^2$: every element
is $a^m b^n$.

A **word** is a finite string of generators and their inverses. The **word problem** for a presentation asks: given a
word, is it equal to the identity in the group? Max Dehn posed it in 1911, together with two harder problems (the
conjugacy problem and the isomorphism problem), because they arose in topology: the fundamental group of a space is
naturally given by a presentation.

**Easy cases.**

- **Free groups** (no relations): repeatedly cancel adjacent pairs $x x^{-1}$ or $x^{-1} x$. A word equals the identity
  exactly when this reduces it to the empty word. Example: $a b b^{-1} a^{-1}$ reduces to $a a^{-1}$, then to the empty
  word, so it is the identity. But $a b a^{-1} b^{-1}$ admits no cancellation at all, so in the free group it is not the
  identity.
- **$\mathbb{Z}^2$** as above: a word is the identity exactly when the total exponent of $a$ and the total exponent of
  $b$ are both 0. Example: $a b a^{-1} b a^{-1} b^{-2}$ has $a$-exponent $1 - 1 - 1 = -1$, so it is not the identity.
- **Finite groups**: compute in the multiplication table.
- Dehn himself solved it for the fundamental groups of closed surfaces, and Wilhelm Magnus solved it for all groups with
  a single relation (1932).

**Always semi-decidable.** For a finite presentation, the words equal to the identity are exactly those obtained from the
empty word by inserting or deleting relators and cancelling pairs. A program can list all such derivations, so the set of
words equal to the identity is c.e. The difficulty, as for HALT, is the "no" answers.

**Theorem 14.9 (Novikov 1955; Boone, independently, late 1950s).** There is a finitely presented group whose word problem is undecidable.

Pyotr Novikov and William Boone found such groups independently. The idea is to build a group whose relations simulate
the steps of a Turing machine (via an intermediate step through semigroups, for which Emil Post and A. A. Markov had
proved the analogous result in 1947), so that a particular word is the identity exactly when the machine halts. The
construction is long; a full proof is in chapter 12 of Rotman's *An Introduction to the Theory of Groups* (Further
reading).

The consequences reach into geometry. Markov (1958) used it to show that no algorithm can decide whether two given
4-dimensional manifolds (described by triangulations) are homeomorphic. Here a question from topology, apparently about
shapes, is undecidable because groups can encode computation.

## 14.6 Busy beavers

*Level: advanced; the last part is expert.*

### The game

In 1962 Tibor Radó, at Ohio State University, proposed a game in his paper "On non-computable functions". Fix the number
of states $n$. Consider all Turing machines with $n$ working states, a halting state, and two symbols 0 (the blank) and 1,
exactly as counted in [Chapter 13](13-Algorithms-and-Turing-Machines.md). Start each one on a blank tape. Some run
forever; ignore those. Among those that halt:

- $S(n)$ is the **largest number of steps** any of them takes before halting (the halting transition counts as a step);
- $\Sigma(n)$ is the **largest number of 1s** any of them leaves on the tape.

Today "$\mathrm{BB}(n)$" usually means $S(n)$, and that is the convention here. A machine attaining the maximum is a
**busy beaver** or **champion**.

Because there are only finitely many machines with $n$ states, both maxima exist. The difficulty is that you cannot
compute them just by running all machines: you have to know which ones will never halt.

**Worked example: $n = 2$.** In the standard notation, a machine is written row by row, `1RB` meaning "write 1, move
right, go to state B", and `Z` is the halting state. The 2-state champion is `1RB1LB_1LA1RZ`: in state A, on 0 write 1,
move right, go to B; on 1 write 1, move left, go to B; in state B, on 0 write 1, move left, go to A; on 1 write 1, move
right, halt. On a blank tape:

| step | state | tape (head in brackets) |
| --- | --- | --- |
| 0 | A | [0] |
| 1 | B | 1[0] |
| 2 | A | [1]1 |
| 3 | B | [0]11 |
| 4 | A | [0]111 |
| 5 | B | 1[1]11 |
| 6 | halt | 1111 |

It halts after 6 steps with four 1s. Check by exhaustive search: of the $12^4 = 20{,}736$ two-state machines, none of
those that halt takes more than 6 steps or leaves more than four 1s, and every one that runs longer than 6 steps can be
proved to loop forever. So $S(2) = 6$ and $\Sigma(2) = 4$.

### The known values

| $n$ | $S(n)$ | $\Sigma(n)$ | settled |
| --- | --- | --- | --- |
| 1 | 1 | 1 | trivial |
| 2 | 6 | 4 | early 1960s |
| 3 | 21 | 6 | Lin and Radó, 1965 |
| 4 | 107 | 13 | Brady, 1983 |
| 5 | 47,176,870 | 4098 | bbchallenge collaboration, 2024 |
| 6 | unknown | unknown | lower bound beyond $2 \uparrow\uparrow\uparrow 5$ (2025) |

A curiosity: for $n = 3$ the champions differ. The machine `1RB1RZ_1LB0RC_1LC1LA` runs 21 steps but leaves five 1s; the
machine `1RB1RZ_0RC1RB_1LC1LA` leaves six 1s but runs only 14 steps.

### The function no algorithm computes

**Theorem 14.10 (Radó 1962).** $S$ is not computable. In fact, for every total computable function $f$ there is an $N$
such that $\Sigma(n) > f(n)$ for all $n \ge N$, and so also $S(n) > f(n)$.

*Proof that $S$ is not computable.* Suppose $S$ were computable. Then we could decide, for any 2-symbol machine $M$ with
$n$ states, whether $M$ halts on a blank tape: compute $S(n)$, run $M$ for $S(n)$ steps, and answer yes if it halted by
then, no otherwise. (If it has not halted after $S(n)$ steps, it never will, by the definition of $S(n)$.) But halting on a
blank tape is undecidable even for 2-symbol machines, because any machine can be simulated by one using only 0 and 1
(write each symbol as a block of bits). This contradicts 14.2. $\square$

*Proof of the stronger statement.* Let $f$ be total and computable. Define

$$
F(x) = 1 + \max\{ f(0), f(1), \ldots, f(2x) \}.
$$

$F$ is computable and $F(x) > f(m)$ for every $m \le 2x$. By the Church-Turing thesis there is a 2-symbol machine $C$, with
some number $c$ of states, that turns a block of $x$ ones into a block of $F(x)$ ones and halts. For each $n$ there is
also a machine $W_n$ with $n$ states that writes $n$ ones on a blank tape and halts with the head at the start of the block
(state $i$ writes a 1 and moves right to state $i + 1$). The head ends just right of the block; we let $C$ begin by
walking back to the left end, which only changes the constant $c$. Join them: replace $W_n$'s halting transition by a jump into
$C$'s start state. The combined machine has $n + c$ states and, started on a blank tape, halts leaving $F(n)$ ones. So

$$
\Sigma(n + c) \ge F(n) \quad \text{for every } n.
$$

Now take any $m \ge 2c$ and put $n = m - c$. Then $n \ge c$, so $m = n + c \le 2n$, and therefore
$\Sigma(m) \ge F(n) > f(m)$. Finally $S(m) \ge \Sigma(m)$, since each 1 on the tape was written in a separate step. $\square$

So the busy beaver functions grow faster than *any* computable function: faster than $2^n$, than towers of exponentials,
than the Ackermann function of [Chapter 15](15-Recursive-Functions-and-Computability.md). This is not because they are
defined in a strange way. Each value $S(n)$ is a perfectly definite natural number. Each single value is even
"computable" in the trivial sense that a program printing 47176870 exists. What no algorithm can do is produce the values
for all $n$.

### How BB(5) was settled

*Level: expert.*

For 5 states the champion was found early. In 1989 Heiner Marxen and Jürgen Buntrock found the machine

`1RB1LC_1RC1RB_1RD0LE_1LA1LD_1RZ0LA`

which halts after 47,176,870 steps leaving 4098 ones. For 35 years it was conjectured that no 5-state machine does
better. Proving that meant showing that every other 5-state machine either halts sooner or never halts, and there are
$24^{10}$ of them, about $6.3 \times 10^{13}$.

The proof came from the **Busy Beaver Challenge** (bbchallenge), an open online collaboration of amateurs and
professionals started in 2022. The method:

1. **Enumerate** the machines in a tree, building transitions only when a run actually needs them and treating machines
   that differ by renaming states or mirroring left and right as the same. This cuts the count to about 181 million
   machines that have to be examined.
2. **Run** each machine for a while; those that halt are checked directly.
3. **Prove non-halting** for the rest with a set of **deciders**, programs that each recognise one kind of eventual
   behaviour: machines that revisit an exact earlier configuration (cyclers), machines whose behaviour repeats while
   drifting across the tape (translated cyclers), machines that bounce back and forth over a growing region (bouncers),
   and more powerful general methods based on finite automata that describe a set of configurations closed under the
   machine's steps and excluding the halting configuration. A small number of stubborn machines needed individual proofs;
   the hardest, known as "Skelet #17", needed a long argument of its own.
4. **Verify formally.** Everything was assembled into a proof in the Coq proof assistant (now called Rocq; see
   [Chapter 19](19-Other-Logics.md)), so that the final check depends on Coq's small trusted kernel rather than on the
   correctness of any of the deciders' code. The decisive formal proof, by a contributor using the name mxdys, completed
   the argument.

The collaboration announced on 2 July 2024 that the conjecture was proved: $S(5) = 47{,}176{,}870$. Independent Coq
experts reviewed the formal statement. A paper, "Determination of the fifth Busy Beaver value" by the bbchallenge
Collaboration, appeared on arXiv in September 2025. It was the first new busy beaver value in about 40 years, and the
first one whose proof was checked by computer.

**Check.** You can verify the halting half yourself. Running the Marxen-Buntrock machine in a small C or optimised Python
program on a blank tape takes a few seconds and halts after exactly 47,176,870 steps with 4098 ones on the tape. The hard
half, that no other machine runs longer and halts, is what took two years.

### BB(6) and the edge of mathematics

*Level: expert.*

For 6 states the champions are monstrous. In June 2025 a new 6-state machine was found (again by mxdys) showing that
$S(6) > 2 \uparrow\uparrow\uparrow 5$, in Knuth's arrow notation: $2 \uparrow\uparrow k$ is a tower of $k$ twos, and
$2 \uparrow\uparrow\uparrow 5$ is a tower of twos whose height is itself $2 \uparrow\uparrow\uparrow 4$, and so on.
No one expects $S(6)$ to be determined soon, for a mathematical reason: among the 6-state machines whose behaviour is
unknown are some that iterate simple Collatz-like maps, such as the one nicknamed "Antihydra". Deciding whether they halt
would require solving number-theory problems of the same kind as the Collatz conjecture, which are wide open.

Further out, the busy beaver function meets the incompleteness theorems ([Chapter 18](18-Godels-Incompleteness-Theorems.md)).
In 2016 Adam Yedidia and Scott Aaronson constructed a Turing machine with 7918 states that halts if and only if ZFC (the
usual axioms of set theory, [Chapter 8](08-Axiomatic-Set-Theory.md)) is inconsistent. Consequently, if ZFC is consistent,
ZFC cannot prove the value of $S(7918)$: if it proved $S(7918) = k$, it could then check by a finite computation that
this machine has not halted after $k$ steps, and so prove that ZFC is consistent, which Gödel's second theorem forbids.
Later work by others has reduced the number of states substantially; a 745-state machine of this kind was reported in
2023, and the true threshold is unknown. Somewhere between 6 and a few hundred states, the busy beaver values pass beyond
what our axioms can determine.

## Check yourself

??? question "1. A friend says: 'The halting problem is easy. Just run the program; if it stops, say yes; if it doesn't stop after a very long time, say no.' What is wrong?"
    There is no "very long time" that works for all programs. For any fixed time limit $T$ (even one depending on the
    size of the program, as long as it is computable), some programs halt only after more than $T$ steps; the busy beaver
    theorem (14.10) shows such programs exist for every computable bound. The friend's method gives a wrong "no" on them.
    The method correctly *semi*-decides halting if you drop the time limit, but then it never says no.

??? question "2. In the proof of Theorem 14.1, why must $H$ be assumed to halt on every input? What goes wrong if $H$ is only a semi-decider for HALT?"
    $D$ runs $H$ as a subroutine and then does the opposite of its answer. If $H$ might run forever, then on inputs where
    $H$ runs forever $D$ also runs forever, and no contradiction arises. Indeed a semi-decider for HALT exists
    (Proposition 14.2), so the argument must use totality somewhere: it uses it in the case "$D$ does not halt on
    $\langle D \rangle$", where we need $H$ to have *returned* no.

??? question "3. Show that the set $\{ \langle M \rangle : M \text{ halts on input } 0 \}$ is undecidable, by a reduction."
    Reduce $\mathrm{HALT}_\varepsilon$ to it. Given $\langle M \rangle$, build $M'$ that erases its input and then runs $M$
    on a blank tape. $M'$ halts on input 0 exactly when $M$ halts on a blank tape. The map is computable, so by Lemma 14.5
    the set is undecidable. (Rice's theorem also gives this at once: "halts on input 0" means "$\varphi_M(0)$ is defined",
    a non-trivial semantic property.)

??? question "4. Which of these sets are decidable? (a) machines with exactly 10 states; (b) machines that output 1 on input 1; (c) machines that, on input 1, write some symbol within 5 steps; (d) machines computing a function with finite domain."
    (a) Decidable: count states; the property is syntactic. (b) Undecidable by Rice's theorem: it is "$\varphi_M(1) = 1$",
    semantic and non-trivial. (c) Decidable: simulate 5 steps. (It is not semantic: two machines computing the same function
    may differ here.) (d) Undecidable by Rice's theorem: "the domain of $\varphi_M$ is finite" is semantic, true for a machine
    that never halts and false for one that always halts.

??? question "5. Does Rice's theorem show that it is undecidable whether a given machine computes the function $x \mapsto x + 1$? Does it show that it is undecidable whether a given machine is a binary increment machine with exactly three states?"
    The first, yes: "$\varphi_M$ is the successor function" is semantic and non-trivial. The second, no: "has exactly
    three states" is syntactic, so the property is not semantic and Rice's theorem does not apply. In fact the second set
    is decidable, for a simple reason: only finitely many machines have three states (over a fixed alphabet), so the set
    is finite, and every finite set is decidable by a lookup table, even if we do not know which table is the right one.
    This is the same point as "each single value of $S(n)$ is computable".

??? question "6. Show that the set of positive integers that are not powers of 2 is Diophantine."
    A positive integer is not a power of 2 exactly when it has an odd divisor greater than 1, that is, an odd factor at
    least 3. So $x$ is in the set if and only if there are natural numbers $a, b$ with $x = (2a + 3)(b + 1)$. Check: 12 is
    $3 \cdot 4$ ($a = 0$, $b = 3$); 8 has only the divisors $1, 2, 4, 8$, none odd and at least 3, so there is no solution.

??? question "7. Find all integer solutions of $x^3 - 2x^2 - 5x + 6 = 0$, and explain why one-variable Diophantine equations are decidable."
    Any integer root divides 6, so try $\pm 1, \pm 2, \pm 3, \pm 6$. $x = 1$: $1 - 2 - 5 + 6 = 0$. $x = -2$:
    $-8 - 8 + 10 + 6 = 0$. $x = 3$: $27 - 18 - 15 + 6 = 0$. So the roots are $1, -2, 3$, and since a cubic has at most three
    roots there are no others. Check: $(x - 1)(x + 2)(x - 3) = x^3 - 2x^2 - 5x + 6$. In general an integer root $r$ of a
    polynomial with $a_0 \neq 0$ divides $a_0$, so finitely many trials decide the question (and if $a_0 = 0$, then $0$
    is a root).

??? question "8. Show that the set TOTAL of machines that halt on every input is not semi-decidable."
    Reduce $\overline{\mathrm{HALT}_\varepsilon}$, which is not semi-decidable (by the argument of Corollary 14.4 applied
    to $\mathrm{HALT}_\varepsilon$), to TOTAL. Given $\langle M \rangle$, build $M^*$: on input $x$ (a number), run $M$ on
    a blank tape for $x$ steps; if $M$ has halted within those steps, loop forever; otherwise halt. If $M$ never halts,
    $M^*$ halts on every $x$, so $M^* \in \mathrm{TOTAL}$. If $M$ halts after $t$ steps, then $M^*$ loops on every
    $x \ge t$, so $M^* \notin \mathrm{TOTAL}$. Hence
    $\langle M \rangle \in \overline{\mathrm{HALT}_\varepsilon} \iff M^* \in \mathrm{TOTAL}$, and a recogniser for TOTAL would give one for $\overline{\mathrm{HALT}_\varepsilon}$.

??? question "9. In the group $\langle a, b \mid aba^{-1}b^{-1} \rangle$, is $a^2 b a^{-1} b^{-1} a^{-1}$ the identity? Is it the identity in the free group on $a, b$?"
    In $\mathbb{Z}^2$ the exponent sums are $2 - 1 - 1 = 0$ for $a$ and $1 - 1 = 0$ for $b$, so it is the identity. In the
    free group, try to cancel: $a\,a\,b\,a^{-1}\,b^{-1}\,a^{-1}$ has no adjacent pair $x x^{-1}$ (the neighbours are
    $aa$, $ab$, $ba^{-1}$, $a^{-1}b^{-1}$, $b^{-1}a^{-1}$), so it is already reduced and non-empty, hence not the
    identity. The relation makes a difference.

??? question "10. Show that $S(n + 1) \ge S(n) + 1$ for every $n \ge 1$."
    Take an $n$-state machine $M$ that halts after $S(n)$ steps. Its last step uses some transition into the halting state.
    Add a new state $X$ whose transitions on both 0 and 1 write the symbol read, move right, and halt; change $M$'s halting
    transitions to go to $X$ instead (keeping what they write and how they move). The new machine has $n + 1$ states, does
    exactly what $M$ did for $S(n)$ steps, then takes one more step and halts. So $S(n + 1) \ge S(n) + 1$.

??? question "11. Knowing that $S(5) = 47{,}176{,}870$, describe an algorithm that decides whether any given 5-state, 2-symbol machine halts on a blank tape. Why does this not contradict the undecidability of the halting problem?"
    Run the machine for 47,176,870 steps. If it has halted by then, answer yes; otherwise answer no, since by the
    definition of $S(5)$ every halting 5-state machine halts within that many steps. This decides halting only for the
    finitely many 5-state machines. The halting problem is about all machines at once; for any fixed finite set of machines
    a decider exists. What we cannot do is compute $S(n)$ for every $n$, which is what deciding halting in general would
    need.

??? question "12. Explain, in your own words, why ZFC cannot prove the value of $S(7918)$, assuming ZFC is consistent. What would change if someone found a proof in ZFC that $S(7918)$ equals a particular number?"
    Yedidia and Aaronson's machine $Z$ has 7918 states and halts exactly when ZFC is inconsistent (it searches for a
    proof of $0 = 1$ from the ZFC axioms). If ZFC is consistent, $Z$ never halts. Suppose ZFC proved $S(7918) = k$. ZFC can
    also verify, by a finite computation that it can formalise, that $Z$ has not halted after $k$ steps. Then ZFC proves
    "$Z$ never halts", which says "ZFC is consistent". By Gödel's second incompleteness theorem
    ([Chapter 18](18-Godels-Incompleteness-Theorems.md)) a consistent ZFC cannot prove its own consistency. So if
    someone found such a proof, it would follow that ZFC is inconsistent: it would be a disaster for the foundations of
    mathematics, not a new value of the busy beaver.

## What you learned

- The halting problem is undecidable: a supposed decider is turned against itself by a diagonal argument, the same as
  Cantor's.
- Halting is semi-decidable but its complement is not; a set is decidable exactly when it and its complement are both
  semi-decidable.
- Reductions carry undecidability from one problem to another; the direction matters.
- Rice's theorem: every non-trivial property of the function a program computes is undecidable. Syntactic properties and
  step-bounded properties can be decidable.
- MRDP (1970): Diophantine sets are exactly the c.e. sets, so Hilbert's tenth problem has no algorithm. The word problem
  for finitely presented groups is undecidable too (Novikov, Boone).
- The busy beaver function outgrows every computable function. $S(5) = 47{,}176{,}870$ was proved in 2024 with a
  computer-checked proof; $S(6)$ is beyond $2 \uparrow\uparrow\uparrow 5$; for a few hundred states the values are
  beyond what ZFC can prove.

**Next:** [Chapter 15](15-Recursive-Functions-and-Computability.md), which builds the computable functions from a few
simple ones, meets Ackermann's fast-growing function, studies computably enumerable sets, and proves Kleene's recursion
theorem, the reason a program can print its own source.

## Further reading

- A. M. Turing, "On computable numbers, with an application to the Entscheidungsproblem", *Proceedings of the London
  Mathematical Society*, series 2, vol. 42, 1936-37.
- H. G. Rice, "Classes of recursively enumerable sets and their decision problems", *Transactions of the American
  Mathematical Society* 74, 1953.
- M. Davis, *Computability and Unsolvability*, McGraw-Hill, 1958 (Dover reprint, 1982).
- M. Davis, "Hilbert's tenth problem is unsolvable", *American Mathematical Monthly* 80, 1973.
- Y. Matiyasevich, *Hilbert's Tenth Problem*, MIT Press, 1993.
- J. P. Jones, D. Sato, H. Wada and D. Wiens, "Diophantine representation of the set of prime numbers", *American
  Mathematical Monthly* 83, 1976.
- J. J. Rotman, *An Introduction to the Theory of Groups*, 4th edition, Springer, 1995 (chapter 12, the word problem).
- T. Radó, "On non-computable functions", *Bell System Technical Journal* 41, 1962.
- A. Yedidia and S. Aaronson, "A relatively small Turing machine whose behavior is independent of set theory",
  *Complex Systems* 25, 2016.
- S. Aaronson, "The Busy Beaver Frontier", *SIGACT News*, 2020.
- The bbchallenge Collaboration, "Determination of the fifth Busy Beaver value", arXiv:2509.12337, 2025.
- M. Sipser, *Introduction to the Theory of Computation*, 3rd edition, Cengage, 2012 (chapters 4 and 5).
- On this site: Topics lessons [Turing and the halting problem](../../topics/logic/level-8/05-halting-problem.md),
  [paradoxes](../../topics/logic/level-7/06-paradoxes.md) and
  [the diagonal argument](../../topics/infinity/level-7/01-diagonal-argument.md);
  [Number theory book, Chapter 9 (Diophantine equations)](../number-theory/09-Diophantine-Equations.md);
  [Algebra book, Chapter 13 (groups)](../algebra/13-Groups.md); the [book index](index.md).
