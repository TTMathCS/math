# 15. Recursive functions and computability

*Turing machines describe computation by a mechanism: a head, a tape, a table. Mathematicians also wanted a description
by definitions: start from a few obviously computable functions on the natural numbers and close them under a few
obviously computable ways of making new functions from old. How far does that get you? In this chapter you will build
the primitive recursive functions, which include almost every function you have ever met, and see that Ackermann's
function escapes them. Adding one more operation, unbounded search, gives exactly the Turing-computable functions. Then
you will study the computably enumerable sets, the sets a program can list, and prove Kleene's recursion theorem, which
says that programs can refer to their own code, and which explains why a program can print itself.*

!!! abstract "In this chapter"
    **You will learn:**

    - the primitive recursive functions: how to build addition, multiplication, primes and the $n$th prime from almost
      nothing
    - why every primitive recursive function is total, and why some total computable functions are not primitive
      recursive (two proofs: a diagonal one and Ackermann's function)
    - the $\mu$-recursive functions, partial functions, and Kleene's normal form theorem
    - computably enumerable sets and their equivalent descriptions, with proofs by dovetailing
    - the s-m-n theorem and Kleene's recursion theorem, with proof, and how it produces quines

    **You need:** [Chapter 13](13-Algorithms-and-Turing-Machines.md) (Turing machines, the Church-Turing thesis) and
    [Chapter 14](14-Undecidability.md) (the halting problem, semi-decidable sets, reductions). Induction from
    [Chapter 4](04-Proofs.md) is used constantly. A gentler first look at recursion: the U of T guide
    [CSC148H1 Unit 5, Recursion](../../uoft/CSC148H1/unit05.md).

    **Levels:** 15.1 is intermediate; 15.2 to 15.4 are advanced; 15.5 is advanced to expert.

Throughout this chapter, "number" means natural number $0, 1, 2, \ldots$, and $\mathbb{N}$ is the set of them. We write
$\vec x$ for a list $x_1, \ldots, x_k$.

## 15.1 Primitive recursive functions

*Level: intermediate.*

### Building from nothing

How would you explain addition to someone who only knows how to count? You might say: adding 0 changes nothing, and
adding one more than $y$ is one more than adding $y$:

$$
x + 0 = x, \qquad x + (y + 1) = (x + y) + 1.
$$

Those two lines determine $x + y$ for every $y$, by working up from 0. Multiplication is then repeated addition, and
powers are repeated multiplication:

$$
x \cdot 0 = 0, \quad x \cdot (y + 1) = x \cdot y + x, \qquad x^0 = 1, \quad x^{y+1} = x^y \cdot x.
$$

This style of definition, saying what happens at 0 and how to step from $y$ to $y + 1$, is **definition by primitive
recursion**. It goes back to Richard Dedekind (1888), who proved that such definitions make sense, and it was used
systematically by Thoralf Skolem (1923). The name "primitive recursive" is due to Rózsa Péter, whose 1951 book was the
first on the subject.

### The definition

**Definition.** The **primitive recursive functions** are the functions $\mathbb{N}^k \to \mathbb{N}$ (for any $k$) that can
be obtained from the following **basic functions**:

- the **zero** function $Z(x) = 0$;
- the **successor** function $S(x) = x + 1$;
- the **projections** $P^k_i(x_1, \ldots, x_k) = x_i$ (pick out the $i$th input);

by finitely many applications of these two operations:

- **Composition.** If $h$ is a function of $m$ variables and $g_1, \ldots, g_m$ are functions of $k$ variables, then
  $f(\vec x) = h(g_1(\vec x), \ldots, g_m(\vec x))$.
- **Primitive recursion.** If $g$ has $k$ variables and $h$ has $k + 2$, then a new function $f$ of $k + 1$ variables
  is defined as shown next.

Primitive recursion defines $f$ by

$$
f(\vec x, 0) = g(\vec x), \qquad f(\vec x, y + 1) = h(\vec x, y, f(\vec x, y)).
$$

The projections exist to shuffle variables: they let us use, ignore or repeat inputs in compositions. In practice we
suppress them and write definitions naturally, as with addition above.

**Addition, formally.** $\mathrm{add}(x, 0) = P^1_1(x)$ and $\mathrm{add}(x, y + 1) = S(P^3_3(x, y, \mathrm{add}(x, y)))$.
Here $g = P^1_1$ and $h(x, y, z) = S(P^3_3(x, y, z)) = z + 1$. **Check:**
$\mathrm{add}(2, 2) = \mathrm{add}(2, 1) + 1 = (\mathrm{add}(2, 0) + 1) + 1 = 2 + 1 + 1 = 4$.

**Theorem 15.1.** Every primitive recursive function is total (defined on every input) and computable.

*Proof.* By induction on the number of steps used to build the function. The basic functions are total and computable.
A composition of total computable functions is total and computable: compute the inner values, then the outer one. If $g$
and $h$ are total and computable, then $f(\vec x, y)$ is computed by a loop that runs exactly $y$ times, starting from
$g(\vec x)$ and applying $h$ each time; it always finishes, and the value is defined for every $y$ by induction on $y$.
$\square$

In programming terms, a primitive recursive function is one you can compute using only `for` loops whose number of
repetitions is fixed before the loop starts, with no `while` loops and no unbounded recursion. That is why they are all
total: every loop has a known end.

### A catalogue

Here is how far the definition reaches. Each item uses only the ones before it.

1. **Predecessor**: $\mathrm{pred}(0) = 0$, $\mathrm{pred}(y + 1) = y$.
2. **Truncated subtraction** ("monus"): $x \mathbin{\dot{-}} y = \max(x - y, 0)$, defined by $x \mathbin{\dot{-}} 0 = x$ and
   $x \mathbin{\dot{-}} (y + 1) = \mathrm{pred}(x \mathbin{\dot{-}} y)$.
3. **Sign**: $\mathrm{sg}(x) = 1 \mathbin{\dot{-}} (1 \mathbin{\dot{-}} x)$, which is 0 if $x = 0$ and 1 otherwise; and
   $\overline{\mathrm{sg}}(x) = 1 \mathbin{\dot{-}} x$.
4. **Distance** $|x - y| = (x \mathbin{\dot{-}} y) + (y \mathbin{\dot{-}} x)$ and the **equality test**
   $\mathrm{eq}(x, y) = \overline{\mathrm{sg}}(|x - y|)$, which is 1 if $x = y$ and 0 otherwise.
5. **Multiplication, powers, factorial**: as above, and $0! = 1$, $(y + 1)! = y! \cdot (y + 1)$.
6. **Bounded sums and products**: if $f$ is primitive recursive, so are $\sum_{z < y} f(\vec x, z)$ and
   $\prod_{z < y} f(\vec x, z)$ (recursion on $y$: add or multiply in one more term).

A set or relation $R \subseteq \mathbb{N}^k$ is **primitive recursive** if its **characteristic function** $\chi_R$ (1 on
members, 0 on non-members) is primitive recursive.

7. **Logic.** If $R$ and $Q$ are primitive recursive, so are "not $R$" ($1 \mathbin{\dot{-}} \chi_R$), "$R$ and $Q$"
   ($\chi_R \cdot \chi_Q$) and "$R$ or $Q$" ($\mathrm{sg}(\chi_R + \chi_Q)$).
8. **Bounded quantifiers.** "There is $z < y$ with $R(\vec x, z)$" has characteristic function
   $\mathrm{sg}\big(\sum_{z < y} \chi_R(\vec x, z)\big)$; "for all $z < y$" uses the product.
9. **Definition by cases**: "$f = g_1$ if $R$, else $g_2$" is $g_1 \chi_R + g_2 (1 \mathbin{\dot{-}} \chi_R)$.
10. **Bounded minimisation.** $\mu z < y.\, R(\vec x, z)$, "the least $z < y$ with $R(\vec x, z)$, or $y$ if there is none",
    is primitive recursive. Proof: it equals $\sum_{u < y} \prod_{z \le u} (1 \mathbin{\dot{-}} \chi_R(\vec x, z))$. The
    product is 1 exactly when no $z \le u$ works, so the sum counts the $u < y$ that come before the first witness.
11. **Divisibility**: $x \mid y$ iff there is $z \le y$ with $x z = y$, a bounded quantifier.
12. **Primes**: $x$ is prime iff $x \ge 2$ and there is no $z < x$ with $z \ge 2$ and $z \mid x$.
13. **The $n$th prime** $p_n$ ($p_0 = 2$, $p_1 = 3$, and so on): $p_{n+1}$ is the least prime greater than $p_n$, and Euclid's
    argument shows it is at most $p_n! + 1$ (any prime factor of $p_n! + 1$ is greater than $p_n$). So
    $p_{n+1} = \mu z \le p_n! + 1.\, (z > p_n \text{ and } z \text{ prime})$, a bounded search with a primitive recursive
    bound.
14. **Exponent of a prime**: $(x)_i$, the exponent of $p_i$ in $x$, is $\mu e < x.\, \neg(p_i^{e+1} \mid x)$ for $x \ge 1$.

Item 14 is the tool Gödel used in 1931 to code finite sequences by single numbers: the sequence $(a_0, \ldots, a_{n})$
becomes $2^{a_0 + 1} 3^{a_1 + 1} \cdots p_n^{a_n + 1}$, and each entry can be recovered primitive-recursively. Every
operation on finite sequences you could want (length, concatenation, the $i$th entry) is then primitive recursive. This
is the start of **Gödel numbering** ([Chapter 17](17-Arithmetic-and-Peano.md)).

Another coding we will use is the **Cantor pairing function**

$$
\pi(x, y) = \frac{(x + y)(x + y + 1)}{2} + y,
$$

a bijection from $\mathbb{N}^2$ to $\mathbb{N}$ that walks along the diagonals of the grid
([Chapter 7](07-Infinity-and-Cardinality.md)). It and both its inverse functions are primitive recursive. **Example:**
$\pi(2, 3) = \frac{5 \cdot 6}{2} + 3 = 18$. **Check:** decoding 18, the largest triangular number $w(w+1)/2 \le 18$ is
15, with $w = 5$; then $y = 18 - 15 = 3$ and $x = 5 - 3 = 2$.

### How much is primitive recursive?

Almost everything you meet in ordinary mathematics that is "obviously computable" is primitive recursive: arithmetic,
number theory functions, checking a proof in a formal system, simulating a Turing machine for a given number of steps.
That last one matters. The function

$$
\mathrm{Sim}(e, x, t) = \text{the configuration of machine } e \text{ on input } x \text{ after } t \text{ steps}
$$

(coded as a number) is primitive recursive: one step is a finite lookup in the table, and $t$ steps is a primitive
recursion on $t$. What is *not* primitive recursive is "run until it halts", because we do not know $t$ in advance.

## 15.2 Ackermann's function

*Level: advanced.*

Are the primitive recursive functions all the total computable functions? No, and here are two proofs.

### A diagonal proof

Every primitive recursive function has a **definition**: a finite expression recording which basic functions,
compositions and recursions were used. These expressions are strings, so we can list all definitions of one-variable
functions computably: $f_0, f_1, f_2, \ldots$. Now define

$$
g(n) = f_n(n) + 1.
$$

$g$ is total and computable: given $n$, produce the $n$th definition and evaluate it, which always terminates by Theorem
15.1. But $g$ is not primitive recursive: if $g = f_e$, then $g(e) = f_e(e) + 1 \ne f_e(e)$. $\square$

The same argument shows that *no* computable listing of total functions contains all total computable functions. This
is why the full class of computable functions must contain partial functions: the diagonal $g(n) = \varphi_n(n) + 1$
is blocked only because $\varphi_n(n)$ may be undefined.

The diagonal proof is short but tells us nothing about *what* the extra functions look like. Ackermann's function is a
natural example.

### The function

Wilhelm Ackermann, a student of Hilbert, published a total computable function that is not primitive recursive in 1928.
The simpler two-variable version used today is due to Péter (1935) and Raphael Robinson (1948):

$$
\begin{aligned}
A(0, n) &= n + 1, \\
A(m + 1, 0) &= A(m, 1), \\
A(m + 1, n + 1) &= A(m, A(m + 1, n)).
\end{aligned}
$$

Each line refers only to values that are "earlier" in the lexicographic order on pairs (smaller $m$, or the same $m$
with smaller $n$), and that order is a well-order ([Chapter 6](06-Relations-and-Functions.md)), so $A$ is defined for
all inputs: an induction on $m$, with an inner induction on $n$.

**Worked example: $A(1, 2)$.** $A(1, 2) = A(0, A(1, 1))$, and $A(1, 1) = A(0, A(1, 0)) = A(0, A(0, 1)) = A(0, 2) = 3$.
So $A(1, 2) = A(0, 3) = 4$.

Look at the rows. Each row iterates the row before it:

| $m$ | $A(m, n)$ | values for $n = 0, 1, 2, 3, 4$ |
| --- | --- | --- |
| 0 | $n + 1$ | 1, 2, 3, 4, 5 |
| 1 | $n + 2$ | 2, 3, 4, 5, 6 |
| 2 | $2n + 3$ | 3, 5, 7, 9, 11 |
| 3 | $2^{n+3} - 3$ | 5, 13, 29, 61, 125 |
| 4 | $2^{2^{\cdot^{\cdot^{2}}}} - 3$ (a tower of $n + 3$ twos) | 13, 65533, $2^{65536} - 3$, ... |

**Check** the row formulas: if $A(m+1, n) = F(n)$, then $F(n + 1) = A(m, F(n))$. For $m + 1 = 2$:
$2(n+1) + 3 = (2n + 3) + 2 = A(1, 2n + 3)$. For $m + 1 = 3$: $2^{n+4} - 3 = 2(2^{n+3} - 3) + 3 = A(2, 2^{n+3} - 3)$.
The number $A(4, 2) = 2^{65536} - 3$ has 19,729 decimal digits, and $A(4, 3)$ could not be written down with all the
atoms in the observable universe. Even computing $A(3, 3) = 61$ by the recursion as written takes 2432 calls.

Each row of the table *is* primitive recursive: row $m + 1$ comes from row $m$ by one primitive recursion. What is not
primitive recursive is the whole table, or its diagonal $n \mapsto A(n, n)$, because each primitive recursive function can
only climb a fixed number of rows.

<figure class="sketch"><span class="ai-tag">AI-created</span><svg viewBox="0 0 640 372" role="img" aria-labelledby="sk-m-ack-t"><title id="sk-m-ack-t">The worked example A(1, 2) unfolded line by line by the three rules, growing to three nested calls and then shrinking to the answer 4</title><defs><filter id="sk-m-ack-pen"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="3.2"/></filter><filter id="sk-m-ack-paper"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="7"/><feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 .10 0"/></filter><pattern id="sk-m-ack-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="7" stroke="#8a4a2a" stroke-width="1.1" opacity=".55"/></pattern><pattern id="sk-m-ack-dots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r="1" fill="#8a4a2a" opacity=".5"/><circle cx="6.5" cy="7" r=".8" fill="#8a4a2a" opacity=".4"/></pattern><marker id="sk-m-ack-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L9 5L1 9" fill="none" stroke="#3a2a1e" stroke-width="1.6" stroke-linecap="round"/></marker></defs><rect width="640" height="372" filter="url(#sk-m-ack-paper)"/><g filter="url(#sk-m-ack-pen)"><text x="30" y="44" text-anchor="start" class="h">Unfolding A(1, 2) by the rules</text><text x="60" y="84" text-anchor="start" class="l">A(1, 2)</text><text x="86" y="118" text-anchor="start" class="l">= A(0, A(1, 1))</text><text x="600" y="118" text-anchor="end" class="s">third rule</text><text x="112" y="152" text-anchor="start" class="l">= A(0, A(0, A(1, 0)))</text><text x="600" y="152" text-anchor="end" class="s">third rule</text><text x="138" y="186" text-anchor="start" class="l">= A(0, A(0, A(0, 1)))</text><text x="600" y="186" text-anchor="end" class="s">second rule</text><text x="138" y="220" text-anchor="start" class="l">= A(0, A(0, 2))</text><text x="600" y="220" text-anchor="end" class="s">first rule</text><text x="138" y="254" text-anchor="start" class="l">= A(0, 3)</text><text x="600" y="254" text-anchor="end" class="s">first rule</text><text x="138" y="288" text-anchor="start" class="l">= 4</text><text x="600" y="288" text-anchor="end" class="s">first rule</text><text x="30" y="336" text-anchor="start" class="s">The expression grows while calls are opened and shrinks as they close. Rows further down</text><text x="30" y="356" text-anchor="start" class="s">the table nest deeper so fast that A(4, 2) has 19,729 digits.</text></g></svg><figcaption>Sketched for this page from its worked example.</figcaption></figure>

### The proof that $A$ is not primitive recursive

We need four facts about $A$, all proved by induction.

**Lemma 15.2.** For all $m, n$:

- (a) $A(m, n) > n$;
- (b) $A(m, n + 1) > A(m, n)$ (increasing in $n$);
- (c) $A(m + 1, n) \ge A(m, n + 1)$;
- (d) $A(m + 1, n) > A(m, n)$ (increasing in $m$).

*Proof.* (a) by induction on $m$. For $m = 0$, $n + 1 > n$. For $m + 1$, use induction on $n$:
$A(m + 1, 0) = A(m, 1) > 1 > 0$, and $A(m + 1, n + 1) = A(m, A(m + 1, n)) > A(m + 1, n) > n$ (first by (a) for $m$, then
by the inner hypothesis), so $A(m + 1, n + 1) \ge n + 2 > n + 1$.

(b) For $m = 0$ it is clear. For $m + 1$: $A(m + 1, n + 1) = A(m, A(m + 1, n)) > A(m + 1, n)$ by (a).

(c) By induction on $n$. For $n = 0$ both sides equal $A(m, 1)$. For $n + 1$: by the hypothesis and (a),
$A(m + 1, n) \ge A(m, n + 1) > n + 1$, so $A(m + 1, n) \ge n + 2$. Then by (b),
$A(m + 1, n + 1) = A(m, A(m + 1, n)) \ge A(m, n + 2)$.

(d) By (c) and then (b): $A(m + 1, n) \ge A(m, n + 1) > A(m, n)$. $\square$

**Lemma 15.3.** For all $m_1, m_2, n$: $A(m_1, A(m_2, n)) < A(m + 2, n)$, where $m = \max(m_1, m_2)$.

*Proof.* Using (b) and (d) to raise both indices to $m$, then (d) once more, then the definition, then (c):

$$
A(m_1, A(m_2, n)) \le A(m, A(m, n)) < A(m, A(m + 1, n)) = A(m + 1, n + 1) \le A(m + 2, n). \quad \square
$$

**Theorem 15.4.** For every primitive recursive $f$ of $k$ variables there is a number $c$ such that
$f(\vec x) < A(c, \max \vec x)$ for all $\vec x$. Consequently $n \mapsto A(n, n)$, and so $A$, is not primitive
recursive.

*Proof.* Write $M = \max \vec x$. We go through the construction of $f$.

**Basic functions.** $Z(x) = 0 < A(0, M)$; $P^k_i(\vec x) = x_i \le M < A(0, M)$; $S(x) = x + 1 < x + 2 = A(1, x)$.

**Composition.** Suppose $f(\vec x) = h(g_1(\vec x), \ldots, g_m(\vec x))$ with $g_i(\vec x) < A(c_i, M)$ and
$h(\vec y) < A(c_h, \max \vec y)$. Let $c' = \max c_i$. Then $\max_i g_i(\vec x) < A(c', M)$, so by (b) and Lemma 15.3,
$f(\vec x) < A(c_h, A(c', M)) < A(\max(c_h, c') + 2, M)$.

**Primitive recursion.** Suppose $f(\vec x, 0) = g(\vec x)$ and $f(\vec x, y + 1) = h(\vec x, y, f(\vec x, y))$, with
bounds $c_g$ for $g$ and $c_h$ for $h$. Let $c = \max(c_g, c_h) + 1$. We show by induction on $y$ that
$f(\vec x, y) < A(c, M + y)$, where $M = \max \vec x$. For $y = 0$: $f(\vec x, 0) < A(c_g, M) \le A(c, M)$. For the step,
all the inputs to $h$, namely $\vec x$, $y$ and $f(\vec x, y)$, are less than $A(c, M + y)$ (the first two by (a), the
third by the hypothesis). So

$$
f(\vec x, y + 1) < A(c_h, A(c, M + y)) \le A(c - 1, A(c, M + y)) = A(c, M + y + 1).
$$

Finally, with $N = \max(\vec x, y)$ we have $M + y \le 2N < 2N + 3 = A(2, N)$, so by (b) and Lemma 15.3,
$f(\vec x, y) < A(c, A(2, N)) < A(\max(c, 2) + 2, N)$.

This proves the bound. Now if $d(n) = A(n, n)$ were primitive recursive, there would be $c$ with $A(n, n) < A(c, n)$ for
all $n$. Taking $n = c$ gives $A(c, c) < A(c, c)$, a contradiction. $\square$

The proof says more than the theorem: every primitive recursive function is eventually dominated by a single row of
Ackermann's table. Growth rate is the obstacle. Ackermann's function is still very "tame" next to the busy beaver
function of [Chapter 14](14-Undecidability.md), which is not even computable.

Ackermann's function is not just a curiosity. Its inverse, which grows unimaginably slowly, appears in the analysis of
the union-find data structure: Robert Tarjan showed in 1975 that a sequence of $m$ operations takes time proportional to
$m$ times an inverse Ackermann function, which is at most 4 or 5 for any input that could ever be stored.

## 15.3 $\mu$-recursive functions

*Level: advanced.*

To reach all computable functions we add the one thing primitive recursion forbids: a search with no bound fixed in
advance, the `while` loop.

**Definition.** Let $g(\vec x, y)$ be a partial function. The **minimisation** of $g$ is the partial function

$$
f(\vec x) = \mu y.\, [g(\vec x, y) = 0],
$$

defined as the least $y$ such that $g(\vec x, y) = 0$ *and* $g(\vec x, z)$ is defined (and non-zero) for every $z < y$.
If there is no such $y$, then $f(\vec x)$ is undefined.

The condition about $z < y$ matches what a program does: it computes $g(\vec x, 0)$, $g(\vec x, 1)$, and so on in turn and
stops at the first zero. If one of these computations never ends, the search is stuck there even if a later $y$ would
have worked.

**Definition.** The **$\mu$-recursive** (or **partial recursive**) functions are the partial functions obtained from the
basic functions by composition, primitive recursion and minimisation. A **recursive** (or total recursive) function is a
$\mu$-recursive function that happens to be total.

**Worked example.** The integer square root rounded up, $\lceil \sqrt{x} \rceil = \mu y.\, [x \mathbin{\dot{-}} y^2 = 0]$.
For $x = 10$: $y = 0, 1, 2, 3$ give $10, 9, 6, 1$, and $y = 4$ gives $10 \mathbin{\dot{-}} 16 = 0$. So the value is 4.
**Check:** $3^2 = 9 < 10 \le 16 = 4^2$. (This one is total and in fact primitive recursive, since $y \le x$ gives a bound.
Minimisation is only needed when no computable bound exists.)

**Worked example.** $f(x) = \mu y.\, [\,|x - 2y| = 0\,]$ is $x/2$ when $x$ is even and undefined when $x$ is odd: a
genuinely partial function. The search for an odd $x$ goes on forever.

**Worked example.** Ackermann's function is $\mu$-recursive. One way: a computation of $A(m, n)$ by the recursion can be
written as a finite list of "stack states", coded as a number $s$; whether $s$ codes a correct finished computation of
$A(m, n)$ is checkable by a primitive recursive test $T(m, n, s)$, because checking a given list is a bounded job. Then
$A(m, n)$ is "the result read off from $\mu s.\, T(m, n, s)$". Search plus a primitive recursive check: this pattern is
completely general.

### Kleene's normal form theorem

**Theorem 15.5 (Kleene 1936).** There is a primitive recursive relation $T(e, x, s)$ and a primitive recursive function
$U(s)$ such that for every Turing machine (with index $e$) and every input $x$:

$$
\varphi_e(x) \simeq U(\mu s.\, T(e, x, s)).
$$

Here $\varphi_e$ is the partial function computed by the machine with index $e$, and $\simeq$ means that either both sides
are undefined, or both are defined and equal. $T$ is called **Kleene's T predicate**: $T(e, x, s)$ says "$s$ codes a
complete halting computation of machine $e$ on input $x$", and $U(s)$ reads the output off the last configuration in $s$.

*Proof idea.* A halting computation is a finite sequence of configurations, which we code as a single number $s$ with the
prime-power coding of 15.1. To check that $s$ is a halting computation of $e$ on $x$, you check that the first
configuration is the start configuration on $x$, that each configuration follows from the previous one by $e$'s table, and
that the last is halting. Each check is a bounded loop over the entries of $s$, so $T$ is primitive recursive. If $e$ halts
on $x$, exactly one such $s$ exists and the search finds it; if not, none exists and the search runs forever. $\square$

Two consequences:

**Theorem 15.6.** A partial function is $\mu$-recursive if and only if it is Turing computable.

*Proof sketch.* If $f$ is Turing computable, $f = \varphi_e$ for some $e$, and by Theorem 15.5 it is a primitive recursive
function of a single minimisation of a primitive recursive relation, so it is $\mu$-recursive. Conversely, each basic
function is computed by a simple machine, and the three operations can be carried out by machines (composition: run one
after another; primitive recursion: a counting loop; minimisation: a search loop). So every $\mu$-recursive function is
Turing computable. $\square$

**Corollary.** Every partial computable function can be written with *at most one* use of $\mu$. In programming terms:
every program can be rewritten as bounded `for` loops plus a single `while` loop.

Theorem 15.6 is one of the equivalences behind the Church-Turing thesis ([Chapter 13](13-Algorithms-and-Turing-Machines.md)).
From now on we use the words "computable", "recursive" and "Turing computable" interchangeably, as most logicians do,
and write $\varphi_0, \varphi_1, \varphi_2, \ldots$ for the list of all partial computable functions of one variable.

<figure class="sketch"><span class="ai-tag">AI-created</span><svg viewBox="0 0 640 268" role="img" aria-labelledby="sk-m-mu-t"><title id="sk-m-mu-t">Five boxes for y equals 0 to 4 with the values 10, 9, 6, 1 and 0; the search stops at the first zero, giving the ceiling of the square root of 10 as 4</title><defs><filter id="sk-m-mu-pen"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="3.2"/></filter><filter id="sk-m-mu-paper"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="7"/><feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 .10 0"/></filter><pattern id="sk-m-mu-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="7" stroke="#8a4a2a" stroke-width="1.1" opacity=".55"/></pattern><pattern id="sk-m-mu-dots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r="1" fill="#8a4a2a" opacity=".5"/><circle cx="6.5" cy="7" r=".8" fill="#8a4a2a" opacity=".4"/></pattern><marker id="sk-m-mu-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L9 5L1 9" fill="none" stroke="#3a2a1e" stroke-width="1.6" stroke-linecap="round"/></marker></defs><rect width="640" height="268" filter="url(#sk-m-mu-paper)"/><g filter="url(#sk-m-mu-pen)"><text x="30" y="44" text-anchor="start" class="h">Search upward, stop at the first zero</text><path class="p room" d="M40 90 L136 90 L136 150 L40 150Z"/><text x="88.0" y="120.0" text-anchor="middle" class="s">y = 0</text><text x="88.0" y="138.0" text-anchor="middle" class="s">10 ∸ 0 = 10</text><path class="p " d="M138 120 L154 120" marker-end="url(#sk-m-mu-ah)"/><path class="p room" d="M156 90 L252 90 L252 150 L156 150Z"/><text x="204.0" y="120.0" text-anchor="middle" class="s">y = 1</text><text x="204.0" y="138.0" text-anchor="middle" class="s">10 ∸ 1 = 9</text><path class="p " d="M254 120 L270 120" marker-end="url(#sk-m-mu-ah)"/><path class="p room" d="M272 90 L368 90 L368 150 L272 150Z"/><text x="320.0" y="120.0" text-anchor="middle" class="s">y = 2</text><text x="320.0" y="138.0" text-anchor="middle" class="s">10 ∸ 4 = 6</text><path class="p " d="M370 120 L386 120" marker-end="url(#sk-m-mu-ah)"/><path class="p room" d="M388 90 L484 90 L484 150 L388 150Z"/><text x="436.0" y="120.0" text-anchor="middle" class="s">y = 3</text><text x="436.0" y="138.0" text-anchor="middle" class="s">10 ∸ 9 = 1</text><path class="p " d="M486 120 L502 120" marker-end="url(#sk-m-mu-ah)"/><path class="p gold" d="M504 90 L600 90 L600 150 L504 150Z"/><text x="552.0" y="120.0" text-anchor="middle" class="s">y = 4</text><text x="552.0" y="138.0" text-anchor="middle" class="s">10 ∸ 16 = 0</text><text x="504" y="180" text-anchor="middle" class="s">stop: ⌈√10⌉ = 4</text><text x="30" y="230" text-anchor="start" class="s">μy [10 ∸ y² = 0] tries y = 0, 1, 2, … in turn. Nothing bounds the search in advance: this is</text><text x="30" y="250" text-anchor="start" class="s">the while loop that primitive recursion forbids, and the reason some functions are partial.</text></g></svg><figcaption>Sketched for this page from its worked example.</figcaption></figure>

## 15.4 Computably enumerable sets

*Level: advanced.*

Some sets of numbers can be listed by a program even when membership cannot be decided. The theorems are always listed
in this way: the set of theorems of a formal system, the set of Diophantine equations with a solution, the set of
machines that halt.

**Definition.** A set $A \subseteq \mathbb{N}$ is **computably enumerable** (**c.e.**; older name **recursively
enumerable**, r.e.) if $A$ is the domain of some partial computable function: $A = W_e$, where

$$
W_e = \{ x : \varphi_e(x) \text{ is defined} \}.
$$

In words: $A$ is the set of inputs on which some program halts. This is the same as "semi-decidable" in
[Chapter 14](14-Undecidability.md). The list $W_0, W_1, W_2, \ldots$ contains every c.e. set.

### Four equivalent descriptions

**Theorem 15.7.** For $A \subseteq \mathbb{N}$ the following are equivalent:

1. $A$ is c.e. (the domain of a partial computable function);
2. $A = \{ x : \exists y\ R(x, y) \}$ for some decidable relation $R$ (and $R$ can even be taken primitive recursive);
3. $A$ is the range of a partial computable function;
4. $A$ is empty or the range of a total computable function.

The name "enumerable" comes from (4): a total computable $f$ with range $A$ lists $A$ as $f(0), f(1), f(2), \ldots$,
possibly with repetitions and in no particular order.

*Proof.* (1) implies (2): if $A = W_e$, then $x \in A \iff \exists s\, T(e, x, s)$, with Kleene's primitive recursive
$T$.

(2) implies (4): suppose $A = \{x : \exists y\, R(x, y)\}$ is non-empty, and fix some $a \in A$. Define a total
function by looking at pairs: for $n = \pi(x, y)$ (Cantor's pairing), let $f(n) = x$ if $R(x, y)$ holds, and $f(n) = a$
otherwise. $f$ is total and computable, every value is in $A$, and every $x \in A$ appears, because if $R(x, y)$ then
$f(\pi(x, y)) = x$.

(4) implies (3): a total function is a partial function, and the empty set is the range of the nowhere-defined function.

(3) implies (1): suppose $A$ is the range of $\psi = \varphi_e$. Define a procedure that, on input $x$, searches through all
pairs $(z, s)$ for one where $T(e, z, s)$ holds (machine $e$ halts on $z$ within the computation $s$) and $U(s) = x$. It
halts exactly when $x$ is a value of $\psi$. So $A$ is the domain of a partial computable function. $\square$

The key technique in the last step is called **dovetailing**: when you need to run infinitely many computations, any of
which might not halt, you interleave them, doing step 1 of the first, then step 1 of the second and step 2 of the first,
and so on along the diagonals, so that every halting computation is eventually seen to halt. The pairing function makes
this precise.

### The basic examples

- Every decidable set is c.e. (search with $R(x, y)$ the decidable test itself, ignoring $y$).
- $K = \{ e : \varphi_e(e) \text{ is defined} \} = \{e : e \in W_e\}$, the **diagonal halting set**, is c.e. but not
  decidable. The proof is the halting argument of [Chapter 14](14-Undecidability.md) in one line: if the complement
  $\overline{K}$ were c.e., say $\overline{K} = W_d$, then $d \in W_d \iff d \in \overline{K} \iff d \notin W_d$.
- The set of (codes of) theorems of any formal system whose axioms can be listed by a program is c.e.: list all proofs
  and check them. This is the bridge to [Chapter 18](18-Godels-Incompleteness-Theorems.md).
- The set of polynomials with integer coefficients that have an integer root is c.e. (search), and by MRDP
  ([Chapter 14](14-Undecidability.md)) it is as hard as $K$.

### Closure properties

**Theorem 15.8.** If $A$ and $B$ are c.e., so are $A \cup B$ and $A \cap B$. The complement of a c.e. set need not be c.e.;
a set is decidable exactly when it and its complement are both c.e.

*Proof.* Let $A = \{x : \exists y\, R(x, y)\}$ and $B = \{x : \exists y\, Q(x, y)\}$ with $R, Q$ decidable. Then
$x \in A \cup B \iff \exists y\, (R(x, y) \lor Q(x, y))$, and
$x \in A \cap B \iff \exists n\, (R(x, (n)_0) \land Q(x, (n)_1))$, where $n$ codes the pair of witnesses. Both are of form
(2). The complement of $K$ is not c.e. (above). The last statement is Proposition 14.3. $\square$

### Order and enumeration

**Theorem 15.9.** An infinite set $A$ is decidable if and only if it is the range of a strictly increasing total
computable function.

*Proof.* If $A$ is decidable and infinite, list it in increasing order: $f(0)$ is the least member, and
$f(n + 1) = \mu y.\, (y > f(n) \land y \in A)$, a search that always succeeds because $A$ is infinite. Conversely, if
$f$ is strictly increasing with range $A$, then $f(n) \ge n$ for every $n$ (induction), so to decide whether $x \in A$
compute $f(0), \ldots, f(x)$ and see whether $x$ appears. $\square$

**Corollary 15.10.** Every infinite c.e. set has an infinite decidable subset.

*Proof.* Let $A$ be the range of a total computable $g$. Pick out a strictly increasing subsequence: $f(0) = g(0)$, and
$f(n + 1) = g(m)$ where $m$ is the least index with $g(m) > f(n)$ (it exists because $A$ is infinite, hence unbounded).
The range of $f$ is an infinite subset of $A$, and it is decidable by Theorem 15.9. $\square$

### A glimpse of the structure

Comparing c.e. sets by Turing reducibility ([Chapter 14](14-Undecidability.md)) gives a rich structure. Every c.e. set
is reducible to $K$, so $K$ is the hardest. In 1944 Post asked whether there is a c.e. set that is neither decidable nor
as hard as $K$. Richard Friedberg (1957) and Albert Muchnik (1956), independently, showed there is, with a new technique
called the **priority method**, which became a central tool of computability theory. In the other direction, c.e. sets are
only the first level of the **arithmetical hierarchy**: sets defined by $\exists y\, R$ are $\Sigma_1$, those defined by
$\forall y\, R$ are $\Pi_1$ (the complements of c.e. sets), those defined by $\forall y\, \exists z\, R$ are $\Pi_2$, and
so on. The set TOTAL of [Chapter 14](14-Undecidability.md) ("for every input there is a halting computation") is $\Pi_2$
and no simpler. Each level is strictly larger than the one below, by a diagonal argument.

## 15.5 Kleene's recursion theorem and quines

*Level: advanced to expert.*

### A puzzle

Can a program print its own source code, without reading its own file? Try writing one: `print("print(...)")` needs the
string inside to contain the whole program, including the string itself, which seems to require an infinite regress. Yet
such programs, called **quines** (after the philosopher W. V. O. Quine, a name popularised by Douglas Hofstadter's 1979
book *Gödel, Escher, Bach*), exist in every programming language. Here is one in Python:

```python
s='s=%r;print(s%%s)';print(s%s)
```

Run it, and it prints exactly that line. **Check:** `%r` inserts the string `s` with its quotes, and `%%` becomes a single
`%`, so `s%s` rebuilds the line character for character.

The trick has two parts: a **template** (the string `s`) that describes everything except itself, and an instruction to
**apply the template to itself**. That is the same move as the diagonal arguments of Chapters 7 and 14, used
constructively. Kleene's recursion theorem turns it into a theorem about all programs.

### The s-m-n theorem

We need one tool: we can computably "freeze" an input into a program.

**Theorem 15.11 (s-m-n, Kleene).** There is a total computable function $s(e, y)$ such that for all $e, y, x$:

$$
\varphi_{s(e, y)}(x) \simeq \varphi_e(\pi(y, x)).
$$

In words: given a program $e$ of two inputs (coded as one) and a value $y$, we can compute a program of one input that
does what $e$ does with its first input fixed to $y$.

*Proof.* The machine with index $s(e, y)$ is: "write $y$ before the input, combine the pair into $\pi(y, x)$, then run
machine $e$". Its table is assembled from $e$'s table, a fixed pairing routine, and $|y|$ states that write $y$. Building
that table from $e$ and $y$ is a mechanical text manipulation, so $s$ is computable, and it is total because the
construction always succeeds. $\square$

This is the hard-wiring trick from [Chapter 14](14-Undecidability.md), now stated as a theorem. Programmers know it as
**partial application** or **currying**.

### The theorem

**Theorem 15.12 (Kleene's recursion theorem, 1938).** For every total computable function $f$ there is an index $e$ with

$$
\varphi_e = \varphi_{f(e)}.
$$

Think of $f$ as a computable way of transforming programs. The theorem says that every such transformation has a
**fixed point**: a program $e$ whose behaviour is unchanged by the transformation (the program text may change, but not
what it computes). For example, let $f(e)$ be the index of the program "run program $e$, then add 1 to its output". A fixed
point $e$ must satisfy $\varphi_e(x) \simeq \varphi_e(x) + 1$ for every $x$, which is only possible if $\varphi_e(x)$ is
undefined for every $x$. So the fixed point is a program that never halts, and indeed such a program is unchanged by
"add 1 to the output". The theorem promises some fixed point, not an interesting one.

*Proof.* Define a total computable function $d$ by the s-m-n theorem so that, for every $u$ and $x$,

$$
\varphi_{d(u)}(x) \simeq \varphi_{\varphi_u(u)}(x).
$$

That is, $d(u)$ is the program "compute $\varphi_u(u)$; if it halts with value $v$, run program $v$ on $x$". Note that $d$
is total even when $\varphi_u(u)$ is undefined: $d(u)$ is just a piece of program text, which then runs forever on every
input.

The function $f \circ d$ is total and computable, so it is $\varphi_v$ for some index $v$. Put $e = d(v)$. Then, since
$\varphi_v(v) = f(d(v))$ is defined,

$$
\varphi_e = \varphi_{d(v)} = \varphi_{\varphi_v(v)} = \varphi_{f(d(v))} = \varphi_{f(e)}. \quad \square
$$

Read slowly, the proof is the quine trick: $d$ is "apply a template to itself", and $v$ is a template that describes
$f$ applied to the self-application.

### A second form, and self-reference

**Theorem 15.13 (recursion theorem, parametrised form).** For every partial computable function $\psi(e, x)$ of two
variables there is an index $e$ such that $\varphi_e(x) \simeq \psi(e, x)$ for all $x$.

*Proof.* By s-m-n, let $f(e)$ be an index for $x \mapsto \psi(e, x)$, that is, $f(e) = s(c, e)$ where $c$ is an index for
$\psi$ (with its two inputs paired). $f$ is total computable; apply Theorem 15.12 to get $e$ with
$\varphi_e = \varphi_{f(e)}$, and $\varphi_{f(e)}(x) \simeq \psi(e, x)$. $\square$

This is the useful form. It says: when writing a program, **you may assume it has access to its own index**. Any
computable use the program wants to make of its own code is allowed.

**Examples.**

- **A quine.** Take $\psi(e, x) = e$. There is $e$ with $\varphi_e(x) = e$ for all $x$: a program that outputs its own
  code.
- **A program that knows its own size.** Take $\psi(e, x) = e + x$: there is a program that adds its own index to its
  input.
- **A set that contains only itself.** Take $\psi(e, x) = 0$ if $x = e$, undefined otherwise. Then $W_e = \{e\}$: a
  program that halts on its own code and on nothing else.

### A one-line proof of Rice's theorem

**Corollary 15.14.** Rice's theorem ([Chapter 14](14-Undecidability.md)): if $P$ is a non-trivial set of indices that
respects equality of functions ($\varphi_a = \varphi_b$ and $a \in P$ imply $b \in P$), then $P$ is undecidable.

*Proof.* Suppose $P$ were decidable. Pick $a \in P$ and $b \notin P$. Define $f(e) = b$ if $e \in P$, and $f(e) = a$ if
$e \notin P$; $f$ is total computable. By the recursion theorem there is $e$ with $\varphi_e = \varphi_{f(e)}$. If
$e \in P$, then $f(e) = b$ and $\varphi_e = \varphi_b$, so $b \in P$ because $P$ respects equality of functions, which is
false. If $e \notin P$, then $\varphi_e = \varphi_a$ and $a \in P$, so $e \in P$, a contradiction. $\square$

The program $e$ here is a contrarian: it looks up whether it has property $P$ and then behaves like a program that does
the opposite. This is the halting argument, Rice's theorem and (in [Chapter 18](18-Godels-Incompleteness-Theorems.md))
Gödel's sentence that says "I am not provable", all in one shape.

### Self-reproduction beyond logic

John von Neumann, in lectures in the late 1940s published after his death as *Theory of Self-Reproducing Automata*
(1966), used the same two-part idea, a description plus a mechanism that copies and builds from the description, to
design a cellular automaton that builds a copy of itself. Biologists have since pointed out the parallel with cells, in
which DNA is both read (to build the cell) and copied. In 1984 Ken Thompson's Turing Award lecture "Reflections on
trusting trust" used a quine-like compiler to show how a back door could hide in a compiler's binary with no trace in its
source code, a practical warning that comes straight out of the recursion theorem.

## Check yourself

??? question "1. Show that $f(x) = x^2 + 1$ is primitive recursive, and compute $f(3)$ using only the recursion equations for multiplication and addition."
    $f(x) = S(\mathrm{mul}(x, x))$, a composition of the successor with multiplication, which is primitive recursive (it
    is defined by primitive recursion from addition). Computing: $\mathrm{mul}(3, 0) = 0$, $\mathrm{mul}(3, 1) = 0 + 3 = 3$,
    $\mathrm{mul}(3, 2) = 3 + 3 = 6$, $\mathrm{mul}(3, 3) = 6 + 3 = 9$, and $f(3) = S(9) = 10$. Check: $3^2 + 1 = 10$.

??? question "2. Give a primitive recursive definition of $\mathrm{even}(x)$, which is 1 when $x$ is even and 0 otherwise, using recursion directly (no division)."
    $\mathrm{even}(0) = 1$ and $\mathrm{even}(y + 1) = 1 \mathbin{\dot{-}} \mathrm{even}(y)$. Here $h(y, z) = 1 \mathbin{\dot{-}} z$
    flips 0 and 1. Check: $\mathrm{even}(1) = 0$, $\mathrm{even}(2) = 1$, $\mathrm{even}(3) = 0$.

??? question "3. Compute $\pi(3, 4)$ and decode 32 back into a pair."
    $\pi(3, 4) = \frac{7 \cdot 8}{2} + 4 = 28 + 4 = 32$. Decoding 32: the triangular numbers are 0, 1, 3, 6, 10, 15, 21,
    28, 36; the largest $w(w+1)/2 \le 32$ is $28$, with $w = 7$. So $y = 32 - 28 = 4$ and $x = 7 - 4 = 3$. Check: $(3, 4)$.

??? question "4. Compute $A(2, 3)$ from the definition, using $A(1, n) = n + 2$."
    $A(2, 0) = A(1, 1) = 3$. $A(2, 1) = A(1, A(2, 0)) = A(1, 3) = 5$. $A(2, 2) = A(1, 5) = 7$. $A(2, 3) = A(1, 7) = 9$.
    Check: the row formula $2n + 3$ gives 9.

??? question "5. Prove by induction on $n$ that $A(3, n) = 2^{n+3} - 3$, given that $A(2, n) = 2n + 3$."
    For $n = 0$: $A(3, 0) = A(2, 1) = 5 = 2^3 - 3$. Step: assume $A(3, n) = 2^{n+3} - 3$. Then
    $A(3, n + 1) = A(2, A(3, n)) = 2(2^{n+3} - 3) + 3 = 2^{n+4} - 6 + 3 = 2^{n+4} - 3$, which is the formula for $n + 1$.

??? question "6. Show that the relation '$x$ is a perfect square' is primitive recursive, and compute $\mu y.\, [y^2 \ge 50]$."
    $x$ is a square iff there is $y \le x$ with $y \cdot y = x$: a bounded existential quantifier over the primitive
    recursive relation $\mathrm{eq}(y \cdot y, x)$. For the search: $7^2 = 49 < 50$ and $8^2 = 64 \ge 50$, so the least $y$
    is 8.

??? question "7. Is the function $f(x) = \mu y.\, [x \cdot y = 1]$ total? What is its domain?"
    For $x = 1$, $y = 1$ works (and $y = 0$ gives $0 \ne 1$), so $f(1) = 1$. For any other $x$, $x y = 1$ has no solution
    in natural numbers ($x = 0$ gives 0; $x \ge 2$ gives 0 or at least 2), so the search runs forever. The domain is
    $\{1\}$; $f$ is a partial function, not total.

??? question "8. Show that if $A$ and $B$ are c.e. then $A \cup B$ is c.e., by a dovetailing argument with programs rather than relations."
    Let $P$ halt exactly on the members of $A$ and $Q$ exactly on the members of $B$. On input $x$, run $P$ and $Q$ on
    $x$ alternately, one step each. If either halts, halt. This program halts on $x$ exactly when $P$ or $Q$ halts on $x$,
    that is, when $x \in A \cup B$. (Running $P$ to completion first would be wrong: if $x \in B \setminus A$, $P$ might
    run forever and $Q$ would never get its turn.)

??? question "9. Let $A$ be the range of a total computable function $g$ that is non-decreasing ($g(n) \le g(n+1)$). Is $A$ decidable?"
    Yes. If $A$ is finite it is decidable (any finite set is). If $A$ is infinite, $g$ is unbounded, so to decide whether
    $x \in A$ compute $g(0), g(1), \ldots$ until the first value greater than $x$ (this happens, because $g$ is unbounded);
    $x \in A$ iff $x$ appeared before that. Either way $A$ is decidable, although the proof does not tell us which of
    the two algorithms is the right one: a non-constructive decidability proof.

??? question "10. Explain how the Python quine `s='s=%r;print(s%%s)';print(s%s)` matches the proof of the recursion theorem. Which part is the template, and which is the self-application?"
    The string `s` is the template: it is the whole program with a hole `%r` where the program's data should go. The
    command `print(s%s)` is the self-application: it fills the hole in the template with the template itself (quoted, by
    `%r`). In the proof, $d(u)$ means "apply program $u$ to its own code $u$ and run the result", and the fixed point is
    $d(v)$ where $v$ describes what to do with the self-application. Here "what to do" is simply "print it".

??? question "11. Use the recursion theorem to show there is an index $e$ with $W_e = \{0, 1, \ldots, e\}$."
    Let $\psi(e, x) = 0$ if $x \le e$ and undefined otherwise. $\psi$ is partial computable (compare $x$ with $e$; if
    $x > e$, loop forever). By Theorem 15.13 there is $e$ with $\varphi_e(x) \simeq \psi(e, x)$, so $\varphi_e(x)$ is
    defined exactly when $x \le e$, that is, $W_e = \{0, \ldots, e\}$.

??? question "12. Can there be a total computable function $f$ such that, for every $e$, the program with index $f(e)$ computes a different function from the program with index $e$?"
    It cannot. By the recursion theorem, every total computable $f$ has a fixed point $e$ with $\varphi_e = \varphi_{f(e)}$,
    so $\varphi_{f(e)}$ is not different from $\varphi_e$ for that $e$. In words: no computable transformation of programs
    can change the behaviour of every program.

## What you learned

- Primitive recursive functions are built from zero, successor and projections by composition and primitive recursion.
  They are exactly what bounded loops compute; they include arithmetic, primes, coding of sequences and running a machine
  for a given number of steps, and they are all total.
- Not every total computable function is primitive recursive: a diagonal argument shows it, and Ackermann's function is
  a natural example, because it outgrows every primitive recursive function.
- Adding unbounded search ($\mu$) gives the partial recursive functions, exactly the Turing-computable ones. Kleene's
  normal form theorem: one search over a primitive recursive predicate is enough.
- C.e. sets are the domains (equivalently ranges) of computable functions, and the sets of the form $\exists y\, R$ with
  $R$ decidable. They are closed under union and intersection but not complement; dovetailing is the basic technique.
- The s-m-n theorem lets us hard-wire inputs into programs; Kleene's recursion theorem says every computable
  transformation of programs has a fixed point, so programs may use their own code. Quines, Rice's theorem and Gödel's
  self-referential sentence all come from this one idea.

**Next:** [Chapter 16](16-Complexity.md), which stops asking *whether* a problem can be solved and asks *how fast*: the
classes P and NP, NP-completeness, and the P versus NP problem.

## Further reading

- S. C. Kleene, "General recursive functions of natural numbers", *Mathematische Annalen* 112, 1936.
- S. C. Kleene, "On notation for ordinal numbers", *Journal of Symbolic Logic* 3, 1938 (where the recursion theorem first
  appears).
- S. C. Kleene, *Introduction to Metamathematics*, North-Holland, 1952.
- W. Ackermann, "Zum Hilbertschen Aufbau der reellen Zahlen", *Mathematische Annalen* 99, 1928.
- R. Péter, *Rekursive Funktionen*, Akadémiai Kiadó, 1951.
- E. L. Post, "Recursively enumerable sets of positive integers and their decision problems", *Bulletin of the American
  Mathematical Society* 50, 1944.
- H. Rogers, *Theory of Recursive Functions and Effective Computability*, McGraw-Hill, 1967 (MIT Press reprint, 1987).
- N. Cutland, *Computability: An Introduction to Recursive Function Theory*, Cambridge University Press, 1980.
- R. I. Soare, *Turing Computability: Theory and Applications*, Springer, 2016.
- G. S. Boolos, J. P. Burgess and R. C. Jeffrey, *Computability and Logic*, 5th edition, Cambridge University Press, 2007.
- D. R. Hofstadter, *Gödel, Escher, Bach*, Basic Books, 1979.
- K. Thompson, "Reflections on trusting trust", *Communications of the ACM* 27, 1984.
- On this site: U of T guides [CSC148H1 Unit 5, Recursion](../../uoft/CSC148H1/unit05.md) and
  [CSC148H1 Unit 6, Recursion on Nested Data](../../uoft/CSC148H1/unit06.md); Topics lessons
  [pairs are countable](../../topics/infinity/level-6/03-pairs-countable.md) and
  [Turing and the halting problem](../../topics/logic/level-8/05-halting-problem.md);
  [Number theory book, Chapter 2 (primes)](../number-theory/02-Primes-and-Unique-Factorization.md); the
  [book index](index.md).
