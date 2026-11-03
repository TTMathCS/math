# 6. Recurrences

*In how many ways can you tile a path of length 10 with paving stones of length 1 and 2? Nobody can see the answer at
a glance, but anyone can see this: the last stone is short or long, and either way what is left is a shorter path. A
count that refers to smaller copies of itself is a recurrence. This chapter shows how to set one up, which is the
creative part, and then how to solve the most common kind exactly: linear recurrences with constant coefficients, by
their characteristic roots, with a proof that the method always works. You will meet the Tower of Hanoi, Binet's
formula for Fibonacci numbers, Fibonacci identities proved by tiling, and the recurrences of divide-and-conquer
algorithms such as merge sort, with the master theorem that sizes them up.*

!!! abstract "In this chapter"
    **You will learn:**

    - how to find a recurrence by asking "what happens at the last step?"
    - the Tower of Hanoi, and a proof that $2^n - 1$ moves is the least possible
    - how to solve linear recurrences with constant coefficients, including repeated roots, with proofs
    - how to handle a non-homogeneous term by a particular solution
    - Fibonacci identities proved by counting tilings
    - divide-and-conquer recurrences, merge sort, Karatsuba, and the master theorem

    **You need:** [Chapter 1](01-Counting-Principles.md) and [Chapter 3](03-Binomial-Coefficients.md); proof by
    induction (see [Algebra, Chapter 8](../algebra/08-Sequences-Series-and-Induction.md)); for §6.2, solving
    simultaneous linear equations and the quadratic formula. The gentler versions are
    [Counting by recursion](../../topics/counting/level-8/01-counting-recursion.md),
    [Recursive sequences](../../topics/patterns/level-6/05-recursive-sequences.md) and
    [Solving recurrences](../../topics/patterns/level-8/04-solving-recurrences.md).

    **Levels:** 6.1 is beginner; 6.2 to 6.4 are intermediate, with the proofs in 6.2 at the advanced end;
    6.5 is advanced.

## 6.1 Setting up recurrences

A **sequence** is a list of numbers $a_0, a_1, a_2, \dots$, one for each whole number $n$. A **recurrence** (or
**recurrence relation**) is a rule that gives $a_n$ in terms of earlier terms, such as $a_n = a_{n-1} + a_{n-2}$.
Together with enough **initial values** (the first few terms), it determines every term: you can compute $a_2$ from
$a_0$ and $a_1$, then $a_3$, and so on. A **closed form** is a formula for $a_n$ that does not need the earlier terms,
such as $a_n = 2^n - 1$.

The art of setting up a recurrence is to look at the **last step** (or the first) and ask what is left.

### Tilings

Let $t_n$ be the number of ways to tile a $1 \times n$ strip with squares ($1 \times 1$) and dominoes ($1 \times 2$).
Look at the last tile.

- If it is a square, the rest is any tiling of a $1 \times (n - 1)$ strip: $t_{n-1}$ ways.
- If it is a domino, the rest is any tiling of a $1 \times (n-2)$ strip: $t_{n-2}$ ways.

These cases do not overlap and cover everything, so by the sum rule

$$
t_n = t_{n-1} + t_{n-2} \qquad (n \ge 2), \qquad t_0 = 1, \ t_1 = 1 .
$$

(There is exactly one tiling of the empty strip: use no tiles. Setting $t_0 = 1$ is not a trick; it makes the
recurrence give the right $t_2 = 2$.)

The values are $1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, \dots$, so a path of length 10 has $t_{10} = 89$ tilings.
These are the **Fibonacci numbers**, shifted: with the usual $F_0 = 0$, $F_1 = 1$, $F_{n} = F_{n-1} + F_{n-2}$ we have
$t_n = F_{n+1}$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 200" role="img" aria-label="The five tilings of a strip of length 4 by squares and dominoes. Squares are blue and dominoes orange. The first three end in a square, the last two end in a domino.">
  <g stroke="currentColor" stroke-width="1.5">
    <g fill="#9cc9ea"><rect x="20" y="10" width="40" height="28"/><rect x="60" y="10" width="40" height="28"/><rect x="100" y="10" width="40" height="28"/><rect x="140" y="10" width="40" height="28"/></g>
    <g fill="#eea66f"><rect x="20" y="48" width="80" height="28"/></g><g fill="#9cc9ea"><rect x="100" y="48" width="40" height="28"/><rect x="140" y="48" width="40" height="28"/></g>
    <g fill="#9cc9ea"><rect x="20" y="86" width="40" height="28"/></g><g fill="#eea66f"><rect x="60" y="86" width="80" height="28"/></g><g fill="#9cc9ea"><rect x="140" y="86" width="40" height="28"/></g>
    <g fill="#9cc9ea"><rect x="20" y="124" width="40" height="28"/><rect x="60" y="124" width="40" height="28"/></g><g fill="#eea66f"><rect x="100" y="124" width="80" height="28"/></g>
    <g fill="#eea66f"><rect x="20" y="162" width="80" height="28"/><rect x="100" y="162" width="80" height="28"/></g>
  </g>
  <g fill="currentColor" font-size="13">
    <text x="200" y="68">last tile a square:</text>
    <text x="200" y="86">a tiling of length 3 (3 ways)</text>
    <text x="200" y="150">last tile a domino:</text>
    <text x="200" y="168">a tiling of length 2 (2 ways)</text>
  </g>
</svg>
</div>

**The same recurrence in disguise.** How many strings of 0s and 1s of length $n$ have no two 1s next to each other?
Call it $b_n$. Look at the last symbol. If it is 0, the rest is any good string of length $n - 1$. If it is 1, the
symbol before it must be 0 (when $n \ge 2$), and before that is any good string of length $n - 2$. So
$b_n = b_{n-1} + b_{n-2}$, with $b_1 = 2$ and $b_2 = 3$, and so $b_n = t_{n+1}$. Two counts that obey the same
recurrence with the same starting values must agree, but that does not show WHY they agree. A direct bijection does,
and exercise 2 asks for one. Finding such bijections is a skill worth practising.

### The Tower of Hanoi

Three pegs; on the first, $n$ discs of different sizes, largest at the bottom. A move takes the top disc of one peg
and puts it on another peg, never on a smaller disc. How many moves does it take to move the whole tower to the third
peg?

Let $H_n$ be the least number of moves. To move the largest disc at all, the $n - 1$ smaller discs must all be on the
one remaining peg (they cannot be on the largest disc's peg, above it, nor on its target). So:

1. move the top $n - 1$ discs to the middle peg: at least $H_{n-1}$ moves;
2. move the largest disc: 1 move;
3. move the $n - 1$ discs back on top of it: at least $H_{n-1}$ moves.

This shows two things. The strategy works with $2H_{n-1} + 1$ moves, so $H_n \le 2H_{n-1} + 1$. And any solution must
at some point move the largest disc for the first time, with the others stacked on the middle peg (at least $H_{n-1}$
moves before), and at some point move it for the last time, after which the others must be brought back (at least
$H_{n-1}$ moves after). So $H_n \ge 2H_{n-1} + 1$. Hence

$$
H_n = 2H_{n-1} + 1, \qquad H_0 = 0 .
$$

The values are $0, 1, 3, 7, 15, 31, 63, \dots$, one less than powers of 2, and that guess is easy to prove by
induction: if $H_{n-1} = 2^{n-1} - 1$ then $H_n = 2(2^{n-1} - 1) + 1 = 2^n - 1$. A slicker way: add 1 to both sides,
$H_n + 1 = 2(H_{n-1} + 1)$, so $H_n + 1$ doubles each time, starting from 1.

The puzzle was published by the French mathematician Édouard Lucas in 1883, under the pen name "N. Claus de Siam" (an
anagram of "Lucas d'Amiens"), with a story about a temple tower of 64 golden discs; the story was part of the marketing.
With 64 discs, $2^{64} - 1 \approx 1.8 \times 10^{19}$ moves at one per second would take about 585 billion years.

### Lines in the plane

Into how many regions do $n$ lines divide the plane, if no two are parallel and no three meet at a point? Call it
$L_n$. Adding the $n$-th line: it crosses each of the $n - 1$ old lines once, at $n - 1$ different points, which cut it
into $n$ pieces. Each piece splits one old region into two, so

$$
L_n = L_{n-1} + n, \qquad L_0 = 1 .
$$

Unrolling, $L_n = 1 + (1 + 2 + \dots + n) = 1 + \frac{n(n+1)}{2}$. Ten lines make 56 regions.

**The lesson.** Each time the recurrence came from a careful case split on one step, using the sum rule and the
product rule of [Chapter 1](01-Counting-Principles.md). Solving it is a separate, more mechanical job, which the rest
of the chapter makes systematic.

## 6.2 Linear recurrences with constant coefficients

*Level: intermediate; the proofs are advanced.*

A **linear recurrence of order $k$ with constant coefficients** is

$$
a_n = c_1 a_{n-1} + c_2 a_{n-2} + \dots + c_k a_{n-k} \qquad (n \ge k),
$$

where $c_1, \dots, c_k$ are fixed numbers and $c_k \ne 0$. "Linear" means each earlier term appears to the first power,
not squared or multiplied together; "constant coefficients" means the $c_i$ do not depend on $n$; and when there is no
extra term (like the $+1$ of Hanoi) it is called **homogeneous**. Fibonacci is the case $k = 2$, $c_1 = c_2 = 1$.

### The idea: try a geometric sequence

The simplest recurrence, $a_n = r a_{n-1}$, has solution $a_n = a_0 r^n$. So guess that a solution of the general one
might be $a_n = r^n$ for some number $r \ne 0$. Substituting and dividing by $r^{n-k}$:

$$
r^k = c_1 r^{k-1} + c_2 r^{k-2} + \dots + c_k .
$$

This polynomial equation is the **characteristic equation**, and its roots are the **characteristic roots**. Every
root $r$ gives a solution $a_n = r^n$.

**Worked example.** Solve $a_n = 5a_{n-1} - 6a_{n-2}$ with $a_0 = 2$, $a_1 = 5$.

Step 1, the characteristic equation: $r^2 = 5r - 6$, so $r^2 - 5r + 6 = 0$, so $(r - 2)(r - 3) = 0$, roots $2$ and $3$.

Step 2, the general solution: $a_n = \alpha 2^n + \beta 3^n$ for constants $\alpha, \beta$. (Why sums are allowed is
explained below.)

Step 3, the constants from the initial values: $n = 0$ gives $\alpha + \beta = 2$; $n = 1$ gives $2\alpha + 3\beta =
5$. Subtracting twice the first from the second, $\beta = 1$, so $\alpha = 1$.

Answer: $a_n = 2^n + 3^n$.

**Check.** The recurrence gives $a_2 = 25 - 12 = 13$, $a_3 = 65 - 30 = 35$; the formula gives $4 + 9 = 13$ and
$8 + 27 = 35$.

### Why it always works (distinct roots)

Two facts make the method a theorem rather than a lucky guess.

**Fact 1 (superposition).** If $(a_n)$ and $(b_n)$ both satisfy a homogeneous linear recurrence, so does
$(\alpha a_n + \beta b_n)$ for any constants. *Proof:* substitute; the recurrence is linear, so
$\alpha a_n + \beta b_n = \sum_i c_i(\alpha a_{n-i} + \beta b_{n-i})$. In the language of linear algebra, the
solutions form a **vector space**.

**Fact 2 (dimension $k$).** A solution is determined by its first $k$ values $a_0, \dots, a_{k-1}$, and any first $k$
values are possible. So the solution space has dimension exactly $k$: the map sending a solution to its first $k$ values
is a linear bijection onto all lists of $k$ numbers.

!!! note "Theorem (distinct roots)"
    If the characteristic equation has $k$ distinct roots $r_1, \dots, r_k$, then every solution has the form
    $a_n = \alpha_1 r_1^n + \dots + \alpha_k r_k^n$, and the constants are determined by $a_0, \dots, a_{k-1}$.

**Proof.** By Fact 1 every such combination is a solution. By Fact 2 it is enough to show that for any prescribed
starting values $a_0, \dots, a_{k-1}$ we can choose the $\alpha_i$ to match them; then the combination and the given
solution agree on their first $k$ values, and so everywhere. Matching means solving

$$
\begin{aligned}
\alpha_1 + \alpha_2 + \dots + \alpha_k &= a_0 \\
\alpha_1 r_1 + \alpha_2 r_2 + \dots + \alpha_k r_k &= a_1 \\
&\ \ \vdots \\
\alpha_1 r_1^{k-1} + \dots + \alpha_k r_k^{k-1} &= a_{k-1} .
\end{aligned}
$$

The matrix of this system, with entries $r_j^{i}$, is a **Vandermonde matrix**, whose determinant is
$\prod_{i < j}(r_j - r_i)$. This is nonzero exactly because the roots are distinct, so the system has a unique solution.
$\square$

(For $k = 2$ you can see it directly: the system $\alpha + \beta = a_0$, $\alpha r_1 + \beta r_2 = a_1$ has
determinant $r_2 - r_1 \ne 0$.)

### Binet's formula

For Fibonacci, $F_n = F_{n-1} + F_{n-2}$ with $F_0 = 0$, $F_1 = 1$: the characteristic equation $r^2 = r + 1$ has roots

$$
\varphi = \frac{1 + \sqrt{5}}{2} \approx 1.618, \qquad \psi = \frac{1 - \sqrt{5}}{2} \approx -0.618 .
$$

($\varphi$ is the **golden ratio**.) So $F_n = \alpha\varphi^n + \beta\psi^n$. From $F_0 = 0$, $\beta = -\alpha$; from
$F_1 = 1$, $\alpha(\varphi - \psi) = 1$, and $\varphi - \psi = \sqrt5$. Hence

$$
F_n = \frac{\varphi^n - \psi^n}{\sqrt{5}} .
$$

This is **Binet's formula**, named after Jacques Binet, who published it in 1843, although Abraham de Moivre had found
it more than a century earlier. It is remarkable that a formula full of $\sqrt5$ always produces whole numbers: the
irrational parts cancel. Since $|\psi| < 1$, the term $\psi^n/\sqrt5$ is tiny, smaller than $1/2$ for every $n \ge 0$,
and so $F_n$ is the nearest whole number to $\varphi^n/\sqrt5$. For example $\varphi^{10}/\sqrt5 \approx 55.004$, and
$F_{10} = 55$. In particular $F_{n+1}/F_n \to \varphi$: Fibonacci numbers grow by about 61.8 percent each step.

### Repeated roots

What if the characteristic equation has a repeated root? Try $a_n = 4a_{n-1} - 4a_{n-2}$, $a_0 = 1$, $a_1 = 4$. The
equation $r^2 - 4r + 4 = (r - 2)^2 = 0$ has only the root 2. Then $\alpha 2^n$ gives only a one-dimensional family,
and cannot match two initial values. We need a second solution.

!!! note "Theorem (repeated roots)"
    If $r$ is a root of the characteristic polynomial with multiplicity $m$, then $r^n, nr^n, n^2r^n, \dots, n^{m-1}r^n$
    are all solutions. Taking these for every root gives $k$ solutions, and every solution is a combination of them.

**Proof for a double root of an order-2 recurrence.** If $r^2 - c_1 r - c_2 = (x - r)^2$ as polynomials then
$c_1 = 2r$ and $c_2 = -r^2$. Check that $a_n = n r^n$ works:

$$
c_1 a_{n-1} + c_2 a_{n-2} = 2r \cdot (n - 1) r^{n-1} - r^2 (n - 2) r^{n-2} = r^n \bigl(2(n-1) - (n-2)\bigr) = n r^n .
$$

And $r^n$, $nr^n$ can match any $a_0, a_1$: the equations $\alpha = a_0$ and $\alpha r + \beta r = a_1$ are solvable
because $r \ne 0$ (since $c_2 \ne 0$).

**Sketch of the general proof.** Write $P(x) = x^k - c_1x^{k-1} - \dots - c_k$ and, for $n \ge k$, let
$Q(x) = x^{n-k}P(x) = x^n - c_1x^{n-1} - \dots - c_kx^{n-k}$. The operator $x\frac{d}{dx}$ turns $x^j$ into $jx^j$, so
applying it $j$ times to $Q$ gives $n^jx^n - c_1(n-1)^jx^{n-1} - \dots - c_k(n-k)^jx^{n-k}$. At $x = r$ this is exactly
$a_n - c_1a_{n-1} - \dots - c_ka_{n-k}$ for the sequence $a_n = n^jr^n$. Now if $r \ne 0$ is a root of $P$ of
multiplicity $m$, it is a root of $Q$ of multiplicity at least $m$, and each application of $x\frac{d}{dx}$ lowers the
multiplicity of a nonzero root by at most one. So for $j < m$ the result still vanishes at $r$, and $n^jr^n$ is a
solution. That all $k$ solutions are independent follows from a generalised Vandermonde determinant, or more cleanly
from the partial fractions argument of [Chapter 7](07-Generating-Functions.md), which proves the whole theorem at once.

**Back to the example.** $a_n = (\alpha + \beta n)2^n$. From $a_0 = 1$, $\alpha = 1$; from $a_1 = 4$,
$2(1 + \beta) = 4$, so $\beta = 1$. Answer: $a_n = (n + 1)2^n$.

**Check.** $a_2 = 16 - 4 = 12 = 3 \cdot 4$; $a_3 = 48 - 16 = 32 = 4 \cdot 8$.

**Order 3, triple root.** $a_n = 6a_{n-1} - 12a_{n-2} + 8a_{n-3}$, $a_0 = 1$, $a_1 = 2$, $a_2 = 8$. The equation is
$r^3 - 6r^2 + 12r - 8 = (r - 2)^3 = 0$. So $a_n = (\alpha + \beta n + \gamma n^2) 2^n$. Then $\alpha = 1$;
$2(1 + \beta + \gamma) = 2$, so $\beta + \gamma = 0$; $4(1 + 2\beta + 4\gamma) = 8$, so $2\beta + 4\gamma = 1$. Hence
$\gamma = \tfrac12$, $\beta = -\tfrac12$, and $a_n = \bigl(1 + \tfrac{n^2 - n}{2}\bigr) 2^n = (n^2 - n + 2)\,2^{n-1}$.
**Check:** the recurrence gives $a_3 = 48 - 24 + 8 = 32$ and the formula gives $8 \cdot 4 = 32$.

### Complex roots

The roots may be complex numbers even when everything else is real. Then the formula still works, with complex
constants, and the answer comes out real. For example $a_n = -a_{n-2}$ (that is, $a_n + a_{n-2} = 0$) has roots $\pm i$,
and its solutions $\alpha i^n + \beta(-i)^n$ are, for real starting values, the sequences that repeat with period 4:
$a_0, a_1, -a_0, -a_1, a_0, \dots$. In general a pair of complex roots $\rho e^{\pm i\theta}$ contributes terms
$\rho^n \cos(n\theta)$ and $\rho^n \sin(n\theta)$: oscillation inside an exponential envelope.

## 6.3 Non-homogeneous recurrences

*Level: intermediate.*

The Hanoi recurrence $H_n = 2H_{n-1} + 1$ has an extra term, $+1$. A recurrence

$$
a_n = c_1 a_{n-1} + \dots + c_k a_{n-k} + g(n)
$$

with an extra function $g(n)$ is **non-homogeneous**. The recurrence without $g$ is its **associated homogeneous**
recurrence.

!!! note "Theorem (structure of solutions)"
    If $(p_n)$ is any one solution of the non-homogeneous recurrence, then every solution is $a_n = p_n + h_n$, where
    $(h_n)$ solves the associated homogeneous recurrence.

**Proof.** If $a$ and $p$ both solve it, subtract: the $g(n)$ cancels and $a - p$ solves the homogeneous one.
Conversely $p + h$ is a solution by linearity. $\square$

So the method is: find **one** solution $p_n$ (a **particular solution**), add the general homogeneous solution, then
fit the initial values. For the common kinds of $g$, guess $p_n$ with the same shape as $g$ and unknown coefficients:

| $g(n)$ | try $p_n =$ |
|---|---|
| a constant $c$ | a constant $A$ |
| a polynomial of degree $d$ | a polynomial of degree $d$ |
| $s^n$ | $A s^n$ |
| a polynomial of degree $d$ times $s^n$ | a polynomial of degree $d$ times $s^n$ |

with one rule: **if $s$ is a characteristic root of multiplicity $m$, multiply the guess by $n^m$.** (A constant or a
polynomial counts as $s = 1$.) The reason is that otherwise the guess solves the homogeneous recurrence and contributes
nothing to $g$; Chapter 7 gives a guess-free proof.

**Worked example 1 (polynomial term).** Solve $a_n = 3a_{n-1} + 2n$, $a_0 = 1$.

Step 1, homogeneous part: root 3, so $h_n = \alpha 3^n$.
Step 2, particular solution: $g(n) = 2n$ is a degree-1 polynomial, and 1 is not a root, so try $p_n = An + B$.
Substituting: $An + B = 3(A(n - 1) + B) + 2n = (3A + 2)n + (3B - 3A)$. Compare coefficients of $n$: $A = 3A + 2$, so
$A = -1$. Constants: $B = 3B - 3A = 3B + 3$, so $B = -\tfrac32$. So $p_n = -n - \tfrac32$.
Step 3, fit: $a_n = \alpha 3^n - n - \tfrac32$; $a_0 = 1$ gives $\alpha = \tfrac52$.

Answer: $a_n = \tfrac52 3^n - n - \tfrac32 = \frac{5 \cdot 3^n - 2n - 3}{2}$.

**Check.** The recurrence gives $a_1 = 3 + 2 = 5$, $a_2 = 15 + 4 = 19$, $a_3 = 57 + 6 = 63$; the formula gives
$(15 - 5)/2 = 5$, $(45 - 7)/2 = 19$, $(135 - 9)/2 = 63$.

**Worked example 2 (resonance).** Solve $a_n = 2a_{n-1} + 2^n$, $a_0 = 1$.

Here $g(n) = 2^n$ and 2 IS a root (multiplicity 1), so try $p_n = An\,2^n$. Then
$An2^n = 2A(n-1)2^{n-1} + 2^n = A(n-1)2^n + 2^n$; dividing by $2^n$, $An = An - A + 1$, so $A = 1$. The general solution
is $a_n = \alpha 2^n + n2^n$, and $a_0 = 1$ gives $\alpha = 1$: $a_n = (n + 1)2^n$.

(Interesting: this is the same sequence as the repeated-root example of §6.2. That is no accident: any solution of
$a_n = 2a_{n-1} + 2^n$ also solves $a_n = 4a_{n-1} - 4a_{n-2}$, as you can check by eliminating $2^n$.)

**Worked example 3 (Hanoi again).** $H_n = 2H_{n-1} + 1$: try a constant $p_n = A$; $A = 2A + 1$ gives $A = -1$. So
$H_n = \alpha 2^n - 1$, and $H_0 = 0$ gives $\alpha = 1$: $H_n = 2^n - 1$, as before.

**A shortcut for first-order recurrences.** Any recurrence $a_n = c\,a_{n-1} + g(n)$ can be unrolled:

$$
a_n = c^n a_0 + \sum_{j=1}^{n} c^{n-j} g(j) .
$$

(Each $g(j)$ enters at step $j$ and is multiplied by $c$ once for each later step.) For lines in the plane, $c = 1$
and $g(j) = j$, which gave $L_n = 1 + n(n+1)/2$ directly.

## 6.4 Fibonacci identities by tiling

*Level: intermediate.*

Fibonacci numbers satisfy dozens of identities. Many textbooks prove them by induction, which confirms but does not
explain. Counting tilings explains. Throughout, $t_n = F_{n+1}$ is the number of tilings of an $n$-board (a strip of $n$
cells) by squares and dominoes, with $t_0 = 1$. This approach was developed systematically by Arthur Benjamin and
Jennifer Quinn in *Proofs that Really Count* (2003).

**Identity 1.** $t_0 + t_1 + \dots + t_n = t_{n+2} - 1$.

*Proof.* Count the tilings of an $(n+2)$-board that use at least one domino: that is $t_{n+2} - 1$ (all of them, minus
the all-squares tiling). Now count them another way, by the position of the **last** domino. If the last domino covers
cells $k + 1$ and $k + 2$, then everything after it is squares (one way), and the first $k$ cells are tiled in any way:
$t_k$ ways. The last domino can start anywhere from cell 1 to cell $n + 1$, so $k$ runs from $0$ to $n$. The total is
$t_0 + \dots + t_n$. $\square$

**Check.** $1 + 1 + 2 + 3 + 5 = 12 = 13 - 1$, with $t_6 = 13$.

**Identity 2.** $t_{m+n} = t_m t_n + t_{m-1}t_{n-1}$ for $m, n \ge 1$.

*Proof.* Tile an $(m + n)$-board. Either the tiling is **breakable** at cell $m$, meaning no domino covers cells $m$
and $m + 1$, or it is not. Breakable tilings are a tiling of the first $m$ cells followed by a tiling of the last $n$:
$t_m t_n$. Unbreakable ones have a domino on cells $m, m+1$, with any tiling of the first $m - 1$ cells and of the
last $n - 1$: $t_{m-1}t_{n-1}$. $\square$

In the usual numbering this is $F_{m+n+1} = F_{m+1}F_{n+1} + F_m F_n$. Taking $m = n$ gives
$F_{2n+1} = F_{n+1}^2 + F_n^2$: for example $F_{11} = 89 = 64 + 25$.

**Identity 3 (Fibonacci in Pascal's triangle).** $t_n = \sum_{k \ge 0} \binom{n - k}{k}$.

*Proof.* Count tilings with exactly $k$ dominoes. They use $k$ dominoes and $n - 2k$ squares, $n - k$ tiles in all,
and a tiling is fixed by choosing which $k$ of those $n - k$ positions in the sequence of tiles hold dominoes:
$\binom{n-k}{k}$. Sum over $k$. $\square$

**Check.** $t_6 = \binom60 + \binom51 + \binom42 + \binom33 = 1 + 5 + 6 + 1 = 13$. These are the "shallow diagonals" of
Pascal's triangle ([Chapter 3](03-Binomial-Coefficients.md)).

**Identity 4.** $t_0 + t_2 + t_4 + \dots + t_{2n} = t_{2n+1}$.

*Proof.* A tiling of a $(2n+1)$-board has odd length, so it contains at least one square. Condition on the position of
the **last square**: if it is at cell $j$, then cells after it are all dominoes, so $2n + 1 - j$ is even, $j$ is odd,
say $j = 2i + 1$, and the first $2i$ cells are tiled freely: $t_{2i}$ ways, for $i = 0, \dots, n$. $\square$

**Identity 5 (Cassini).** $F_{n-1}F_{n+1} - F_n^2 = (-1)^n$ for $n \ge 1$.

Here an algebraic proof is cleanest. The matrix $Q = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}$ satisfies
$Q^n = \begin{pmatrix} F_{n+1} & F_n \\ F_n & F_{n-1} \end{pmatrix}$ (by induction: multiplying by $Q$ performs one
step of the recurrence in each column). Taking determinants, $\det(Q^n) = (\det Q)^n = (-1)^n$, and
$\det(Q^n) = F_{n+1}F_{n-1} - F_n^2$. $\square$ (A tiling proof exists too: it pairs up tilings of two boards by
swapping their tails at a common break point, with exactly one unpaired leftover. See Benjamin and Quinn, Chapter 1.)

**Check.** $n = 5$: $F_4 F_6 - F_5^2 = 3 \cdot 8 - 25 = -1$.

The matrix $Q$ also gives a fast way to compute $F_n$ for huge $n$: compute $Q^n$ by repeated squaring, about
$\log_2 n$ matrix multiplications.

**Try it in Python.**

```python
def fib_pair(n):
    """Return (F_n, F_{n+1}) using the doubling formulas from Identity 2."""
    if n == 0:
        return (0, 1)
    a, b = fib_pair(n // 2)          # a = F_k, b = F_{k+1}, k = n // 2
    c = a * (2 * b - a)              # F_{2k}
    d = a * a + b * b                # F_{2k+1}
    return (d, c + d) if n % 2 else (c, d)

print(fib_pair(10)[0], fib_pair(100)[0])   # 55 354224848179261915075
```

The two doubling formulas come from Identity 2 with $m = n$ and $m = n + 1$.

## 6.5 Divide-and-conquer recurrences

*Level: advanced.*

Many fast algorithms solve a problem of size $n$ by splitting it into a few problems of size about $n/b$, solving
those the same way, and combining the answers. Their running time satisfies a **divide-and-conquer recurrence**

$$
T(n) = a\,T(n/b) + f(n),
$$

where $a$ is the number of sub-problems, $n/b$ their size, and $f(n)$ the cost of splitting and combining. We count
"steps" loosely, and only care how $T(n)$ grows, so we describe it with **big-O** and **big-Theta** notation: $T(n) =
\Theta(g(n))$ means that for large $n$, $T(n)$ is between two positive constant multiples of $g(n)$.

### Merge sort

To sort a list of $n$ numbers, **merge sort** sorts the first half and the second half (recursively), then merges the
two sorted halves by repeatedly taking the smaller of the two front elements. Merging uses at most $n - 1$
comparisons. Counting comparisons generously as $n$:

$$
T(n) = 2T(n/2) + n, \qquad T(1) = 0 .
$$

For $n = 2^m$, set $u_m = T(2^m)$. Then $u_m = 2u_{m-1} + 2^m$, which is worked example 2 of §6.3 in disguise. Divide
by $2^m$: $u_m/2^m = u_{m-1}/2^{m-1} + 1$, so $u_m/2^m = m$ and $u_m = m2^m$. That is

$$
T(n) = n \log_2 n .
$$

**Check.** $T(2) = 2$, $T(4) = 2 \cdot 2 + 4 = 8 = 4 \cdot 2$, $T(8) = 16 + 8 = 24 = 8 \cdot 3$.

The **recursion tree** shows why. At the top, one problem of size $n$ costs $n$ to merge. Below it, two problems of
size $n/2$ cost $n/2$ each: $n$ in total. Every level costs $n$, and there are $\log_2 n$ levels. Merge sort was
described by John von Neumann in 1945. Its $n\log_2 n$ is, up to a constant factor, the best possible for sorting by
comparisons: there are $n!$ possible orders, each comparison has two outcomes, so at least $\log_2(n!)$ comparisons
are needed in the worst case, and by Stirling's approximation ([Chapter 3](03-Binomial-Coefficients.md)),
$\log_2(n!) \approx n\log_2 n - 1.44n$.

### Karatsuba multiplication

To multiply two $n$-digit numbers, school long multiplication takes about $n^2$ digit multiplications. In 1960
Anatoly Karatsuba found a better way. Split each number into a high and low half:
$x = x_1 B + x_0$, $y = y_1 B + y_0$, with $B = 10^{n/2}$. Then

$$
xy = x_1y_1 B^2 + (x_1y_0 + x_0y_1) B + x_0y_0 ,
$$

which looks like four half-size products. But the middle coefficient equals
$(x_1 + x_0)(y_1 + y_0) - x_1y_1 - x_0y_0$, so **three** half-size multiplications suffice, plus some additions:

$$
T(n) = 3T(n/2) + cn .
$$

With $c = 1$ and $T(1) = 1$ one finds $T(n) = 3n^{\log_2 3} - 2n$ for powers of 2 (exercise 9), so
$T(n) = \Theta(n^{\log_2 3}) \approx \Theta(n^{1.585})$, much better than $n^2$ for large $n$. Here the recursion tree
is "bottom-heavy": level $j$ has $3^j$ problems of size $n/2^j$, costing $(3/2)^j n$ in total, which grows down the
tree, so the leaves dominate. There are $3^{\log_2 n} = n^{\log_2 3}$ of them.

### The master theorem

The three examples (merge sort balanced, Karatsuba bottom-heavy, and, say, $T(n) = 2T(n/2) + n^2$ top-heavy) are the
three cases of a general statement. Compare $f(n)$ with $n^{\log_b a}$, the number of leaves of the recursion tree.

!!! note "Theorem (master theorem)"
    Let $a \ge 1$, $b > 1$, and $T(n) = aT(n/b) + f(n)$ (with $n/b$ rounded up or down, which does not matter).
    Write $e = \log_b a$.
    (1) If $f(n) = O(n^{e - \epsilon})$ for some $\epsilon > 0$, then $T(n) = \Theta(n^{e})$.
    (2) If $f(n) = \Theta(n^{e})$, then $T(n) = \Theta(n^{e}\log n)$.
    (3) If $f(n) = \Omega(n^{e + \epsilon})$ for some $\epsilon > 0$, and $af(n/b) \le cf(n)$ for some $c < 1$ and all large $n$, then $T(n) = \Theta(f(n))$.

($\Omega$ means "at least a constant times".) **Why it is true, for exact powers $n = b^m$.** Unrolling,

$$
T(n) = a^m T(1) + \sum_{j=0}^{m-1} a^j f(n / b^j) .
$$

The first term is $a^{\log_b n}T(1) = n^{\log_b a}T(1)$, the leaves. The sum is the cost of the internal levels. In
case 1 the level costs grow geometrically as $j$ increases, and a geometric sum is dominated by its largest term, at the
bottom: $\Theta(n^e)$. In case 2 all $m = \log_b n$ levels cost about $n^e$: $\Theta(n^e \log n)$. In case 3 the
condition $af(n/b) \le cf(n)$ says the level costs shrink geometrically going down, so the top level $f(n)$ dominates.
Making this rigorous for all $n$, with the roundings, is routine but fussy; Cormen, Leiserson, Rivest and Stein give the
full proof. The theorem in this form goes back to Jon Bentley, Dorothea Haken and James Saxe (1980).

**Examples.**

- Binary search, $T(n) = T(n/2) + 1$: $a = 1$, $b = 2$, $e = 0$, $f = \Theta(n^0)$, case 2: $\Theta(\log n)$.
- Merge sort, $T(n) = 2T(n/2) + n$: $e = 1$, case 2: $\Theta(n \log n)$.
- Karatsuba, $T(n) = 3T(n/2) + n$: $e = \log_2 3 \approx 1.585 > 1$, case 1: $\Theta(n^{\log_2 3})$.
- Strassen's matrix multiplication (1969), $T(n) = 7T(n/2) + n^2$: $e = \log_2 7 \approx 2.807$, case 1:
  $\Theta(n^{2.807})$, beating the $n^3$ of the school method.
- $T(n) = 2T(n/2) + n^2$: $e = 1$, $f = n^2$, case 3 (check: $2(n/2)^2 = n^2/2$, so $c = \tfrac12$): $\Theta(n^2)$.

The theorem does not cover everything: $T(n) = 2T(n/2) + n\log n$ falls between cases 2 and 3 (its answer is
$\Theta(n \log^2 n)$), and recurrences with unequal parts like $T(n) = T(n/3) + T(2n/3) + n$ need the more general
Akra-Bazzi method (1998).

## Check yourself

??? question "1. Find a recurrence for the number $s_n$ of ways to climb $n$ stairs taking 1, 2 or 3 steps at a time, and compute $s_6$."

    Look at the last stride: 1, 2 or 3 steps. So $s_n = s_{n-1} + s_{n-2} + s_{n-3}$ with $s_0 = 1$, $s_1 = 1$,
    $s_2 = 2$. Then $s_3 = 4$, $s_4 = 7$, $s_5 = 13$, $s_6 = 24$.

??? question "2. Give a direct bijection between tilings of an $n$-board and binary strings of length $n - 1$ with no two consecutive 1s."

    Number the $n - 1$ inner edges between cells. Write 1 for an edge covered by a domino (inside it) and 0 for an
    edge that is a break between tiles. Two consecutive edges cannot both be inside dominoes (a domino covers one
    edge, and two dominoes cannot overlap), so the string has no "11"; and any such string marks a valid set of
    domino positions. For $n = 4$: 5 tilings and 5 strings of length 3 (000, 001, 010, 100, 101).

??? question "3. Solve $a_n = a_{n-1} + 2a_{n-2}$, $a_0 = 0$, $a_1 = 1$."

    $r^2 - r - 2 = (r - 2)(r + 1)$, so $a_n = \alpha 2^n + \beta(-1)^n$. $\alpha + \beta = 0$, $2\alpha - \beta = 1$,
    so $\alpha = \tfrac13$, $\beta = -\tfrac13$: $a_n = \frac{2^n - (-1)^n}{3}$. Check: $0, 1, 1, 3, 5, 11, 21$, and
    $(64 - 1)/3 = 21$ for $n = 6$. (These are the Jacobsthal numbers: tilings of an $(n-1)$-board with squares and
    two colours of domino.)

??? question "4. Solve $a_n = 6a_{n-1} - 9a_{n-2}$, $a_0 = 1$, $a_1 = 6$."

    $(r - 3)^2 = 0$, so $a_n = (\alpha + \beta n)3^n$. $\alpha = 1$; $3(1 + \beta) = 6$, so $\beta = 1$.
    $a_n = (n + 1)3^n$. Check: $a_2 = 36 - 9 = 27 = 3 \cdot 9$.

??? question "5. How many tilings does a $2 \times n$ rectangle have by $1 \times 2$ dominoes (which may be placed either way)?"

    Look at the left end. Either one vertical domino fills the first column (leaving $2 \times (n-1)$), or two
    horizontal dominoes fill the first two columns (leaving $2 \times (n-2)$). A single horizontal domino at the
    left forces another directly below it. So $d_n = d_{n-1} + d_{n-2}$, $d_1 = 1$, $d_2 = 2$: $d_n = F_{n+1}$,
    the same as $1 \times n$ tilings by squares and dominoes.

??? question "6. Solve $a_n = 2a_{n-1} + 3^n$, $a_0 = 0$."

    3 is not a root (the root is 2), so try $p_n = A3^n$: $A3^n = 2A3^{n-1} + 3^n$, so $3A = 2A + 3$, $A = 3$.
    $a_n = \alpha 2^n + 3^{n+1}$; $a_0 = 0$ gives $\alpha = -3$. So $a_n = 3^{n+1} - 3 \cdot 2^n$. Check:
    $a_1 = 3$ (recurrence $0 + 3$; formula $9 - 6$), $a_2 = 6 + 9 = 15$ (formula $27 - 12$).

??? question "7. Prove by tiling that $t_{2n} = t_n^2 + t_{n-1}^2$ for $n \ge 1$."

    This is Identity 2 with $m = n$: a $2n$-board tiling is either breakable in the middle ($t_n \cdot t_n$) or has
    a domino across the middle ($t_{n-1} \cdot t_{n-1}$). Check $n = 3$: $t_6 = 13 = 9 + 4$.

??? question "8. Each year a population of bacteria colonies triples, and then 2 colonies are removed for testing. Starting with 3 colonies, when does it first exceed 1000?"

    $a_n = 3a_{n-1} - 2$, $a_0 = 3$. Particular solution: constant $A = 3A - 2$, $A = 1$. So $a_n = \alpha 3^n + 1$,
    $\alpha = 2$: $a_n = 2 \cdot 3^n + 1$. $a_6 = 1459$ and $a_5 = 487$, so after 6 years.

??? question "9. Show that $T(n) = 3T(n/2) + n$, $T(1) = 1$, gives $T(n) = 3n^{\log_2 3} - 2n$ for $n = 2^m$."

    Write $u_m = T(2^m)$: $u_m = 3u_{m-1} + 2^m$, $u_0 = 1$. Homogeneous root 3; try $p_m = A2^m$:
    $A2^m = 3A2^{m-1} + 2^m$, so $2A = 3A + 2$, $A = -2$. So $u_m = \alpha 3^m - 2^{m+1}$ and $u_0 = 1$ gives
    $\alpha = 3$: $u_m = 3^{m+1} - 2^{m+1}$. Since $3^m = (2^m)^{\log_2 3} = n^{\log_2 3}$, this is
    $3n^{\log_2 3} - 2n$. Check: $T(2) = 5$, $T(4) = 19$, and $27 - 8 = 19$.

??? question "10. Use the master theorem on $T(n) = 4T(n/2) + n$, $T(n) = 4T(n/2) + n^2$ and $T(n) = 4T(n/2) + n^3$."

    $e = \log_2 4 = 2$. First: $f = n = O(n^{2 - 1})$, case 1, $\Theta(n^2)$. Second: $f = \Theta(n^2)$, case 2,
    $\Theta(n^2 \log n)$. Third: $f = n^3$, and $4(n/2)^3 = n^3/2$, so case 3 with $c = \tfrac12$: $\Theta(n^3)$.

??? question "11. (Harder.) Into how many regions do $n$ circles divide the plane, if every two meet in two points and no three pass through one point?"

    Let $C_n$ be the count, $C_1 = 2$. The $n$-th circle meets the old $n - 1$ circles in $2(n - 1)$ points, which cut
    it into $2(n - 1)$ arcs (for $n \ge 2$), each splitting a region in two. So $C_n = C_{n-1} + 2(n - 1)$, giving
    $C_n = 2 + 2(1 + 2 + \dots + (n - 1)) = n^2 - n + 2$. Check: $C_2 = 4$, $C_3 = 8$ (the Venn diagram of §5.1
    with its outside).

??? question "12. (Harder.) Prove that $\gcd(F_m, F_n) = F_{\gcd(m,n)}$, using $F_{m+n} = F_{m+1}F_n + F_mF_{n-1}$."

    First, consecutive Fibonacci numbers are coprime: a common divisor of $F_{n}$ and $F_{n+1}$ divides
    $F_{n+1} - F_n = F_{n-1}$, and so on down to $F_1 = 1$. Now $\gcd(F_{m+n}, F_n) = \gcd(F_{m+1}F_n + F_mF_{n-1},
    F_n) = \gcd(F_mF_{n-1}, F_n) = \gcd(F_m, F_n)$, the last step because $F_{n-1}$ is coprime to $F_n$. So the
    index pair $(m+n, n)$ can be replaced by $(m, n)$: exactly the step of Euclid's algorithm. Running it to the end
    leaves $\gcd(F_d, F_0) = F_d$ with $d = \gcd(m, n)$. Check: $\gcd(F_{12}, F_{18}) = \gcd(144, 2584) = 8 = F_6$.

## What you learned

- To find a recurrence, split on what happens at the last (or first) step; tilings, Hanoi and regions cut by lines
  all came this way.
- The Tower of Hanoi needs exactly $2^n - 1$ moves, and the same argument proves both the upper and the lower bound.
- A homogeneous linear recurrence with constant coefficients is solved by the roots of its characteristic equation;
  the solutions form a $k$-dimensional space, and a Vandermonde determinant shows the roots' powers span it.
- A root of multiplicity $m$ contributes $r^n, nr^n, \dots, n^{m-1}r^n$; complex roots give oscillation.
- A non-homogeneous recurrence is one particular solution plus the homogeneous solutions, with the $n^m$ rule when
  the extra term resonates with a root.
- Binet's formula $F_n = (\varphi^n - \psi^n)/\sqrt5$, and many Fibonacci identities, are explained by counting
  tilings of a strip.
- Divide-and-conquer recurrences $T(n) = aT(n/b) + f(n)$ are sized by comparing $f(n)$ with $n^{\log_b a}$: the
  master theorem.

**Next:** [Chapter 7](07-Generating-Functions.md), which packs a whole sequence into one power series and solves
recurrences, and much more, by algebra on that series.

## Further reading

- R. L. Graham, D. E. Knuth and O. Patashnik, *Concrete Mathematics*, 2nd ed., 1994 (Chapter 1 on recurrences,
  including Hanoi and lines in the plane, and Chapter 6 on Fibonacci numbers).
- A. T. Benjamin and J. J. Quinn, *Proofs that Really Count: The Art of Combinatorial Proof*, 2003.
- T. H. Cormen, C. E. Leiserson, R. L. Rivest and C. Stein, *Introduction to Algorithms*, 3rd ed., 2009 (Chapter 4,
  the master theorem with full proof).
- J. L. Bentley, D. Haken and J. B. Saxe, "A general method for solving divide-and-conquer recurrences", *SIGACT
  News* 12(3), 1980.
- M. Akra and L. Bazzi, "On the solution of linear recurrence equations", *Computational Optimization and
  Applications* 10, 1998.
- On this site: the gentler lessons [Counting by recursion](../../topics/counting/level-8/01-counting-recursion.md),
  [The Fibonacci sequence](../../topics/patterns/level-3/04-fibonacci-sequence.md),
  [Recursive sequences](../../topics/patterns/level-6/05-recursive-sequences.md) and
  [Solving recurrences](../../topics/patterns/level-8/04-solving-recurrences.md);
  [Algebra, Chapter 8](../algebra/08-Sequences-Series-and-Induction.md) for induction and another view of Binet's
  formula; [Number Theory, Chapter 3](../number-theory/03-GCD-and-Euclids-Algorithm.md) for Euclid's algorithm, whose
  slowest case is consecutive Fibonacci numbers; and the U of T guides
  [CSC148 Unit 5: Recursion](../../uoft/CSC148H1/unit05.md) and
  [CSC148 Unit 9: Efficiency Analysis](../../uoft/CSC148H1/unit09.md).
