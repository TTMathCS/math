# 19. Designs and codes

*Some arrangements are wanted not because they are large or small but because they are perfectly balanced: every pair of
people meets exactly once, every treatment is tested in every row and every column, every likely error is caught. In 1782
Euler asked for a balanced arrangement of 36 officers and could not find one; it took until 1900 to prove that none exists.
In 1971 Mariner 9 went into orbit around Mars and sent its pictures home through a code built from the same kind of
balance. This chapter builds Latin squares, finite planes, block designs and Steiner systems, proves Fisher's inequality,
and then turns balance into error correction: Hamming codes, the Hamming bound, Reed-Muller codes and Reed-Solomon codes.*

!!! abstract "In this chapter"
    **You will learn:**

    - Latin squares, orthogonal pairs, Euler's 36 officers, and why there are at most $n - 1$ mutually orthogonal squares
    - finite projective planes, the Fano plane, and why their sizes are $n^2 + n + 1$
    - balanced incomplete block designs, their parameter rules, and Fisher's inequality $b \ge v$
    - Steiner triple systems, when they exist, and a solution of Kirkman's fifteen schoolgirls problem
    - Hamming distance, the Hamming $[7,4]$ code, why it corrects every single error, and the Hamming bound
    - the Reed-Muller code that carried Mariner 9's pictures from Mars, and Reed-Solomon codes

    **You need:** binomial coefficients and double counting ([Chapters 1](01-Counting-Principles.md) and
    [3](03-Binomial-Coefficients.md)), arithmetic modulo a prime (the [Number Theory book](../number-theory/index.md)), and
    for 19.3 and 19.6 some linear algebra: matrices, rank and determinants. Finite fields appear in 19.2 and 19.6; the
    [Algebra book, chapter 19](../algebra/19-Fields-and-Extensions.md) builds them, but primes are enough to follow along.

    **Levels:** 19.1 and the start of 19.5 are intermediate; 19.2, 19.4 and the rest of 19.5 are advanced; 19.3 and 19.6
    are advanced to expert.

## 19.1 Latin squares and orthogonality

Here is a puzzle that Leonhard Euler published in 1782. Six regiments each send six officers, one of each of six ranks. Can
the 36 officers stand in a $6 \times 6$ square so that every row and every column contains one officer of each regiment and
one of each rank?

Strip away the officers and two simpler objects appear.

**Definition.** A **Latin square** of order $n$ is an $n \times n$ grid filled with $n$ symbols so that each symbol appears
exactly once in each row and once in each column.

A Sudoku solution is a Latin square of order 9 with an extra condition on its $3 \times 3$ boxes. The addition table of
the numbers $0, \ldots, n-1$ modulo $n$, with entry $(i + j) \bmod n$ in row $i$ and column $j$, is always a Latin square:
in a fixed row $i$, the entries $i + j$ run through all residues as $j$ does.

**Definition.** Two Latin squares $L$ and $M$ of order $n$ are **orthogonal** if, when you lay one on top of the other, each
of the $n^2$ ordered pairs of symbols $(L_{ij}, M_{ij})$ appears exactly once.

Euler's puzzle asks for two orthogonal Latin squares of order 6: one for regiments, one for ranks.

**Example (order 3).** The squares $L_{ij} = (i + j) \bmod 3$ and $M_{ij} = (2i + j) \bmod 3$:

| | col 0 | col 1 | col 2 |
|---|---|---|---|
| row 0 | 0,0 | 1,1 | 2,2 |
| row 1 | 1,2 | 2,0 | 0,1 |
| row 2 | 2,1 | 0,2 | 1,0 |

Each cell shows $(L_{ij}, M_{ij})$. *Check:* all nine pairs $00, 01, \ldots, 22$ appear once. So nine officers from three
regiments and three ranks can be arranged.

### The prime construction

**Theorem 19.1.** If $p$ is prime, the $p - 1$ squares $L^{(a)}_{ij} = (ai + j) \bmod p$ for $a = 1, 2, \ldots, p-1$ are
Latin and pairwise orthogonal.

*Proof.* *Latin:* in row $i$ the entries $ai + j$ run over all residues as $j$ does. In column $j$, the entries $ai + j$
run over all residues as $i$ does, because $a \ne 0$ is invertible mod $p$. *Orthogonal:* for $a \ne b$, suppose two cells
$(i, j)$ and $(i', j')$ give the same pair, so $ai + j \equiv ai' + j'$ and $bi + j \equiv bi' + j'$. Subtracting,
$(a - b)(i - i') \equiv 0$, and since $a - b \not\equiv 0$ and $p$ is prime, $i = i'$, and then $j = j'$. So the $p^2$ cells
give $p^2$ different pairs: every pair exactly once. $\square$

The same proof works over any finite field, so there are $q - 1$ mutually orthogonal Latin squares of order $q$ for every
prime power $q = 4, 8, 9, \ldots$.

*Check:* for $p = 5$ a computer confirms that all $\binom{4}{2} = 6$ pairs among $L^{(1)}, \ldots, L^{(4)}$ are orthogonal.

### At most $n - 1$

A set of Latin squares that are orthogonal in pairs is called a set of **MOLS** (mutually orthogonal Latin squares).

**Theorem 19.2.** There are at most $n - 1$ MOLS of order $n$ (for $n \ge 2$).

*Proof.* Renaming the symbols of one square (say by a permutation) keeps it Latin and keeps it orthogonal to the others. So
we may rename so that every square has first row $0, 1, \ldots, n-1$. Now look at the cell in row 1, column 0. Its entry in
each square is not 0, because 0 is already in column 0, row 0. If two squares had the same entry $s$ there, the pair $(s,s)$
would appear both in row 0 (column $s$) and in row 1 (column 0), contradicting orthogonality. So the squares have different
nonzero entries in that cell, and there are at most $n - 1$ of them. $\square$

For order 2 there is not even one orthogonal pair: the only Latin squares of order 2 are $\begin{smallmatrix}0&1\\1&0\end{smallmatrix}$ and $\begin{smallmatrix}1&0\\0&1\end{smallmatrix}$, and overlaying them gives only the pairs $(0,1)$ and
$(1,0)$.

### Euler's conjecture and its fall

Euler built orthogonal pairs for every odd $n$ and every multiple of 4, failed for 6, and conjectured in 1782 that there is
no orthogonal pair for any $n \equiv 2 \pmod 4$: $n = 2, 6, 10, 14, \ldots$. For $n = 6$ he was right. Gaston Tarry, a French
amateur working in Algeria, checked the possibilities by hand, cutting down the cases by symmetry, and published the proof
that no orthogonal pair of order 6 exists in 1900 and 1901. Short computer-free proofs came much later.

For every other $n$ Euler was wrong. In 1959 and 1960, R. C. Bose, S. S. Shrikhande and E. T. Parker showed that orthogonal
pairs exist for **every** $n$ except 2 and 6. The New York Times reported the result in 1959, and the three became known as
"Euler's spoilers".

Why should anyone care? Orthogonal Latin squares are the backbone of **experimental design**, developed by R. A. Fisher at
the Rothamsted agricultural station in the 1920s: to compare $n$ fertilisers in a field with fertility varying north-south
and east-west, plant in an $n \times n$ grid following a Latin square, so that every fertiliser meets every row and every
column once. A second, orthogonal square lets a second factor (say, seed variety) be tested in the same field with the
same balance.

## 19.2 Finite projective planes

*Level: advanced.* The Geometry book ([chapter 18](../geometry/18-Projective-Geometry.md)) introduces the projective plane:
the ordinary plane with points at infinity added so that any two lines meet. Its axioms make sense for a finite set of
points.

**Definition.** A **finite projective plane** is a finite set of **points** together with a collection of subsets called
**lines** such that

1. any two distinct points lie on exactly one common line;
2. any two distinct lines meet in exactly one point;
3. there are four points, no three of them on a line.

The third axiom rules out silly cases such as a single line containing every point.

**The Fano plane.** The smallest example has 7 points $1, \ldots, 7$ and 7 lines:

$$
\{1,2,4\},\ \{2,3,5\},\ \{3,4,6\},\ \{4,5,7\},\ \{1,5,6\},\ \{2,6,7\},\ \{1,3,7\}.
$$

Each line is $\{x, x+1, x+3\}$ shifted cyclically mod 7 (with 7 in place of 0). *Check:* each of the $\binom{7}{2} = 21$
pairs of points lies on exactly one line (7 lines with 3 pairs each give 21), and any two lines share exactly one point. The
geometry chapter draws it as a triangle with its three medians and an inscribed circle.

**Theorem 19.3.** In a finite projective plane every line has the same number of points, say $n + 1$, and then every point
lies on $n + 1$ lines, and there are $n^2 + n + 1$ points and $n^2 + n + 1$ lines. The number $n$ is the **order** of the
plane.

*Proof.* Take a point $P$ and a line $\ell$ not through $P$. Each point $Q$ of $\ell$ gives the line $PQ$, and every line
through $P$ meets $\ell$ in exactly one point (axiom 2). So the lines through $P$ correspond one-to-one with the points of
$\ell$. Using axiom 3 one shows any two lines have a point off both, so all lines have the same number $n + 1$ of points, and
then every point is on $n + 1$ lines. Now fix a point $P$. The $n + 1$ lines through $P$ each contain $n$ further points,
and every other point lies on exactly one of these lines (axiom 1). So there are $1 + (n+1)n = n^2 + n + 1$ points. The
same count with points and lines swapped gives the number of lines. $\square$

The Fano plane has order 2: $3$ points per line, $4 + 2 + 1 = 7$ points.

**Planes from fields.** For any finite field $\mathbb{F}_q$, the **projective plane** $PG(2, q)$ has as points the lines
through the origin in $\mathbb{F}_q^3$ and as lines the planes through the origin. It has order $q$. So planes of every prime
power order $2, 3, 4, 5, 7, 8, 9, 11, \ldots$ exist.

**Planes and Latin squares.** A projective plane of order $n$ exists if and only if there are $n - 1$ MOLS of order $n$
(Bose, 1938). One direction, in outline: remove a line from the plane together with its points; the $n^2$ points left form
an **affine plane**, whose lines fall into $n + 1$ parallel classes (lines that met on the removed line). Use two parallel
classes as "rows" and "columns"; each remaining class labels each of the $n^2$ cells with the line through it, and that
labelling is a Latin square. Different classes give orthogonal squares, because two lines from different classes meet in
exactly one point.

### Which orders exist?

Every known projective plane has prime power order. Which other orders are possible is one of the oldest open problems in
combinatorics.

**Theorem 19.4 (Bruck and Ryser, 1949).** If $n \equiv 1$ or $2 \pmod 4$ and there is a projective plane of order $n$, then
$n$ is a sum of two squares.

The proof uses the incidence matrix and the theory of rational quadratic forms (see Hall, *Combinatorial Theory*, or van Lint
and Wilson, chapter 19). It rules out $n = 6$ ($6 \equiv 2$ and $6$ is not a sum of two squares; this also re-proves Tarry's
result), $n = 14$, $21$, $22$, and infinitely many more.

Order 10 escapes Bruck-Ryser, since $10 = 1 + 9$. In 1989 Clement Lam, Larry Thiel and Stanley Swiercz announced that there
is no plane of order 10. Their search used years of computer time and built on work of MacWilliams, Sloane and Thompson
(1973) on the error-correcting code that such a plane would have. In 2020-2021 a team led by Curtis Bright re-checked the search
with a SAT solver that produces verifiable certificates. Order 12 is the smallest open case.

## 19.3 Block designs and Fisher's inequality

*Level: advanced to expert.* Latin squares and planes are examples of a general idea: a collection of subsets in which
every pair is covered equally often.

**Definition.** A **balanced incomplete block design** with parameters $(v, k, \lambda)$, or a **2-$(v,k,\lambda)$
design**, is a set $V$ of $v$ **points** together with a collection of $k$-element subsets called **blocks**, with
$2 \le k < v$, such that every pair of distinct points lies in exactly $\lambda$ blocks. Blocks may repeat when
$\lambda > 1$. Write $b$ for the number of blocks.

The Fano plane is a $(7, 3, 1)$ design. A projective plane of order $n$ is an $(n^2 + n + 1, n + 1, 1)$ design.

**Theorem 19.5.** In a $(v, k, \lambda)$ design, every point lies in the same number $r$ of blocks, and

$$
r(k - 1) = \lambda(v - 1), \qquad bk = vr.
$$

*Proof.* Fix a point $x$. Count pairs $(y, B)$ with $y \ne x$ and $B$ a block containing both $x$ and $y$. For each of the
$v - 1$ choices of $y$ there are $\lambda$ blocks: $\lambda(v-1)$. For each of the $r_x$ blocks through $x$ there are
$k - 1$ choices of $y$: $r_x(k-1)$. So $r_x = \lambda(v-1)/(k-1)$ does not depend on $x$. For the second rule, count pairs
(point, block containing it): $vr$ by points, $bk$ by blocks. $\square$

So $r = \lambda(v - 1)/(k - 1)$ and $b = vr/k$ must be whole numbers. These are the **divisibility conditions**.

**Examples.**

| $(v, k, \lambda)$ | $r$ | $b$ | what it is |
|---|---|---|---|
| $(7, 3, 1)$ | 3 | 7 | the Fano plane |
| $(9, 3, 1)$ | 4 | 12 | the affine plane of order 3 |
| $(13, 4, 1)$ | 4 | 13 | the projective plane of order 3 |
| $(11, 5, 2)$ | 5 | 11 | a "biplane": translates of $\{1, 3, 4, 5, 9\}$ mod 11 |
| $(15, 3, 1)$ | 7 | 35 | a Steiner triple system (19.4) |

*Check* the biplane: the differences $a - b \bmod 11$ for $a \ne b$ in $\{1, 3, 4, 5, 9\}$ (the nonzero squares mod 11) hit
every nonzero residue exactly twice, so every pair of points lies in exactly 2 of the 11 translates.

The divisibility conditions are not enough. For $(v, k, \lambda) = (16, 6, 1)$: $r = 15/5 = 3$, $b = 16 \cdot 3/6 = 8$. Both
are whole numbers, yet no such design exists, as the next theorem shows.

**Theorem 19.6 (Fisher's inequality, 1940).** In every $(v, k, \lambda)$ design, $b \ge v$: there are at least as many
blocks as points.

So $(16, 6, 1)$ with $b = 8 < 16$ is impossible. R. A. Fisher found this inequality while studying agricultural experiments.

*Proof.* Number the points $1, \ldots, v$ and blocks $1, \ldots, b$, and form the $v \times b$ **incidence matrix** $N$, with
$N_{xB} = 1$ if point $x$ is in block $B$ and 0 otherwise. The $(x, y)$ entry of $NN^{\mathsf{T}}$ is the number of blocks
containing both $x$ and $y$: that is $r$ when $x = y$ and $\lambda$ when $x \ne y$. So

$$
NN^{\mathsf{T}} = (r - \lambda) I + \lambda J,
$$

where $I$ is the identity matrix and $J$ is the all-ones matrix, both $v \times v$. Its determinant: the vector of all ones
is an eigenvector of $J$ with eigenvalue $v$, and the vectors with coordinate sum 0 (a space of dimension $v - 1$) are
eigenvectors with eigenvalue 0. So the eigenvalues of $NN^{\mathsf{T}}$ are $r - \lambda + \lambda v$ (once) and
$r - \lambda$ ($v - 1$ times), and

$$
\det(NN^{\mathsf{T}}) = \big(r + \lambda(v - 1)\big)(r - \lambda)^{v-1}.
$$

Since $k < v$, the rule $r(k-1) = \lambda(v-1)$ gives $r > \lambda$, so this determinant is not 0. Hence $NN^{\mathsf{T}}$, a
$v \times v$ matrix, has rank $v$. But the rank of a product is at most the rank of each factor, and $N$ has only $b$
columns, so $v = \operatorname{rank}(NN^{\mathsf{T}}) \le \operatorname{rank}(N) \le b$. $\square$

Designs with $b = v$ (equivalently $r = k$) are called **symmetric**; projective planes and the biplane above are examples.
For symmetric designs the same matrix identity, taken with determinants, gives the Bruck-Ryser-Chowla theorem, of which
Theorem 19.4 is the case $\lambda = 1$.

**When do designs exist?** For fixed $k$ and $\lambda$, Richard Wilson proved in the 1970s that the divisibility conditions
are enough once $v$ is large. In 2014 Peter Keevash proved, by a new method called randomised algebraic construction, that
the same is true for designs where every set of $t$ points (not just every pair) lies in exactly $\lambda$ blocks, for every
$t$: "designs exist", answering a question going back to the 1850s.

## 19.4 Steiner triple systems

*Level: advanced.* The simplest designs have $k = 3$ and $\lambda = 1$.

**Definition.** A **Steiner triple system** of order $v$, written STS($v$), is a set of $v$ points with a collection of
3-element subsets (**triples**) such that every pair of points is in exactly one triple.

The Fano plane is an STS(7). The affine plane of order 3 is an STS(9): take the 9 points of the grid $\mathbb{Z}_3^2$
and the 12 "lines" $\{a, b, c\}$ with $a + b + c = 0$ (the rows, the columns, and the wrapped-around diagonals of a
noughts-and-crosses board).

**Theorem 19.7.** An STS($v$) exists if and only if $v \equiv 1$ or $3 \pmod 6$.

*Proof of "only if".* By Theorem 19.5 with $k = 3$, $\lambda = 1$: $r = (v-1)/2$ must be a whole number, so $v$ is odd; and
$b = v(v-1)/6$ must be a whole number, so $6 \mid v(v-1)$. Odd $v$ means $v \equiv 1, 3, 5 \pmod 6$, and for $v \equiv 5$,
$v(v-1) \equiv 5 \cdot 4 = 20 \equiv 2 \pmod 6$, which fails. So $v \equiv 1$ or $3 \pmod 6$. $\square$

The "if" direction is a construction, and it was first proved by the Reverend Thomas Kirkman in 1847, six years before Jakob
Steiner asked the question. (The name stuck to Steiner anyway.) Modern constructions build STS($2v + 1$) and STS($3v$) from
smaller systems and handle the base cases directly; see Lindner and Rodger, *Design Theory*.

The number of different systems grows fast: up to relabelling there is one STS(7), one STS(9), two STS(13), and 80 STS(15).

### Kirkman's schoolgirls

In 1850 Kirkman posed a puzzle in *The Lady's and Gentleman's Diary*:

> Fifteen young ladies in a school walk out three abreast for seven days in succession: it is required to arrange them daily,
> so that no two shall walk twice abreast.

Each day uses 5 triples covering all 15 girls; over 7 days that is 35 triples, and since each girl walks with 2 others each
day, she meets $7 \times 2 = 14$ others: everyone exactly once. So a solution is an STS(15) whose 35 triples split into 7
**parallel classes** (sets of 5 disjoint triples). Such a system is called **resolvable**.

Here is a solution, with the girls named A to O. It was found by a computer search over the 35 lines of the projective
space $PG(3, 2)$ (number the girls 1 to 15 in binary; a triple is $\{a, b, c\}$ with $a \oplus b \oplus c = 0$, bitwise),
looking for 7 disjoint spreads.

| Day | Triples |
|---|---|
| 1 | ABC, DHL, EJO, FKM, GIN |
| 2 | ADE, BHJ, CMN, FIO, GKL |
| 3 | AFG, BIK, CLO, DJN, EHM |
| 4 | AHI, BLN, CEF, DKO, GJM |
| 5 | AJK, BMO, CDG, EIL, FHN |
| 6 | ALM, BDF, CIJ, EKN, GHO |
| 7 | ANO, BEG, CHK, DIM, FJL |

*Check:* each row uses all 15 letters once, and the 35 triples contain each of the 105 pairs exactly once (a short program
confirms it). Up to relabelling there are exactly 7 different solutions.

Kirkman's general question, for which $v$ a resolvable STS($v$) exists, had to wait until 1971, when D. K. Ray-Chaudhuri and
R. M. Wilson proved that the answer is all $v \equiv 3 \pmod 6$.

## 19.5 Error-correcting codes

*Level: intermediate, then advanced.* A spacecraft sends bits across a hundred million kilometres. Noise flips some of them.
The receiver must work out what was sent. The idea is to send not arbitrary strings but only some of them, **codewords**,
chosen far apart, so that a few flips leave a received word still closest to the right codeword.

### Distance and correction

A **binary code** of **length** $n$ is a set $C$ of strings of $n$ bits. The **Hamming distance** $d(x, y)$ between two
strings is the number of places where they differ: $d(10110, 11100) = 2$. It is a true distance: $d(x, z) \le d(x, y) +
d(y, z)$ (to change $x$ into $z$, first change it into $y$, then $y$ into $z$). The **minimum distance** $d$ of $C$ is the
smallest distance between two different codewords.

**Theorem 19.8.** A code with minimum distance $d \ge 2t + 1$ can correct any $t$ errors: if a codeword $c$ is sent and at
most $t$ bits are flipped, $c$ is the unique codeword nearest to the received word.

*Proof.* Let $y$ be received, $d(c, y) \le t$. For any other codeword $c'$, the triangle inequality gives
$d(c', y) \ge d(c', c) - d(c, y) \ge (2t + 1) - t = t + 1 > d(c, y)$. $\square$

The simplest example is **repetition**: send each bit three times, $0 \to 000$, $1 \to 111$. Minimum distance 3, so one
error per block is corrected by majority vote. The price: three bits sent for each bit of information. The **rate** of a code
with $2^k$ codewords of length $n$ is $k/n$; here $1/3$. Can we do better?

### The Hamming $[7, 4]$ code

Richard Hamming worked at Bell Labs on relay computers that detected errors but could only stop when they found one. Over
weekends nobody restarted them, and he would come back on Monday to find his jobs had failed. He later said the question
that started him was simple: if a machine can detect an error, why can't it locate the error and correct it? His answer,
published in 1950, encodes 4 data bits into 7 bits and corrects any single error: rate $4/7$, much better than $1/3$.

Number the positions $1, \ldots, 7$. Positions 1, 2 and 4 (the powers of 2) are **check bits**; positions 3, 5, 6, 7 carry
the data. Write each position in binary: $1 = 001$, $2 = 010$, $3 = 011$, $4 = 100$, $5 = 101$, $6 = 110$, $7 = 111$.

- Check bit 1 makes the number of 1s in positions $\{1, 3, 5, 7\}$ (binary ending in 1) even.
- Check bit 2 makes the number of 1s in positions $\{2, 3, 6, 7\}$ (middle binary digit 1) even.
- Check bit 4 makes the number of 1s in positions $\{4, 5, 6, 7\}$ (first binary digit 1) even.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 245" role="img" aria-label="Three overlapping circles labelled check 1, check 2 and check 4. The seven regions hold the seven bit positions: 1, 2 and 4 in the parts belonging to one circle only, 3 where circles 1 and 2 overlap, 5 where 1 and 4 overlap, 6 where 2 and 4 overlap, and 7 in the centre. The codeword 0110011 is written in, and every circle holds an even number of ones">
  <circle cx="170" cy="95" r="65" fill="#eea66f" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="250" cy="95" r="65" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="210" cy="160" r="65" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <text x="130" y="85" text-anchor="middle" font-size="14" fill="currentColor">b1=0</text>
  <text x="290" y="85" text-anchor="middle" font-size="14" fill="currentColor">b2=1</text>
  <text x="210" y="205" text-anchor="middle" font-size="14" fill="currentColor">b4=0</text>
  <text x="210" y="62" text-anchor="middle" font-size="14" fill="currentColor">b3=1</text>
  <text x="168" y="145" text-anchor="middle" font-size="14" fill="currentColor">b5=0</text>
  <text x="252" y="145" text-anchor="middle" font-size="14" fill="currentColor">b6=1</text>
  <text x="210" y="118" text-anchor="middle" font-size="14" fill="currentColor">b7=1</text>
  <text x="80" y="30" text-anchor="middle" font-size="13" fill="currentColor">check 1</text>
  <text x="340" y="30" text-anchor="middle" font-size="13" fill="currentColor">check 2</text>
  <text x="330" y="232" text-anchor="middle" font-size="13" fill="currentColor">check 4</text>
</svg>
</div>

The picture shows the three checks as circles and the seven positions as the seven regions; each circle must hold an even
number of 1s.

**Worked example (encoding).** Data $1011$ goes into positions 3, 5, 6, 7: $b_3 = 1$, $b_5 = 0$, $b_6 = 1$, $b_7 = 1$.

- $b_1 = b_3 + b_5 + b_7 = 1 + 0 + 1 \equiv 0$,
- $b_2 = b_3 + b_6 + b_7 = 1 + 1 + 1 \equiv 1$,
- $b_4 = b_5 + b_6 + b_7 = 0 + 1 + 1 \equiv 0$ (all mod 2).

The codeword is $b_1 \ldots b_7 = 0110011$.

**Decoding.** On receiving $y$, recompute the three checks. Write a 1 for each check that fails, reading the results as a
binary number $s_4 s_2 s_1$: the **syndrome**. Equivalently, the syndrome is the bitwise XOR of the positions holding a 1.

**Worked example (decoding).** Flip position 5: $y = 0110111$. Ones are at positions 2, 3, 5, 6, 7, and
$2 \oplus 3 \oplus 5 \oplus 6 \oplus 7 = 5$ (in binary: $010 \oplus 011 = 001$, then $\oplus 101 = 100$, $\oplus 110 = 010$,
$\oplus 111 = 101$). The syndrome is 5: flip position 5 back.

**Theorem 19.9.** The Hamming code has 16 codewords and minimum distance 3, and the syndrome of a codeword with one flipped
bit is the position of that bit. So it corrects every single error.

*Proof.* The XOR of the positions of the 1s of a codeword is 0: that is exactly what the three checks say, one binary digit
each. Flipping bit $i$ adds or removes $i$ from the set of positions holding a 1, so XORs the syndrome with $i$: the new
syndrome is $0 \oplus i = i$. Different positions give different nonzero syndromes, so the error is located. For the minimum
distance: the code is **linear** (the XOR of two codewords is a codeword, since the checks are linear), so the distance
between two codewords is the number of 1s in their XOR, another codeword. A codeword with one 1 at position $i$ has syndrome
$i \ne 0$; with two 1s at $i \ne j$, syndrome $i \oplus j \ne 0$. So every nonzero codeword has at least three 1s ($1, 2, 3$
gives $1 \oplus 2 \oplus 3 = 0$, so exactly three is possible), and the minimum distance is 3. $\square$

The same idea with $m$ check bits gives the Hamming code of length $2^m - 1$ with $2^m - 1 - m$ data bits, correcting one
error.

### The Hamming bound and perfect codes

How many codewords can a $t$-error-correcting code of length $n$ have? Around each codeword, the **ball** of radius $t$ (all
strings within distance $t$) contains $\binom{n}{0} + \binom{n}{1} + \cdots + \binom{n}{t}$ strings: the codeword with
$0, 1, \ldots, t$ bits flipped.

**Theorem 19.10 (Hamming bound, 1950).** A binary code of length $n$ with minimum distance at least $2t + 1$ has

$$
|C| \sum_{i=0}^{t} \binom{n}{i} \le 2^n.
$$

*Proof.* The balls of radius $t$ around different codewords are disjoint: a string within $t$ of two codewords would put them
within $2t$ of each other. All the balls fit inside the set of $2^n$ strings. $\square$

A code that meets the bound exactly is **perfect**: the balls tile all strings with no gaps. The Hamming $[7,4]$ code is
perfect: $16 \times (1 + 7) = 128 = 2^7$. Marcel Golay found in 1949 a perfect code of length 23 with $2^{12}$ codewords
correcting 3 errors: $2^{12}(1 + 23 + 253 + 1771) = 2^{12} \cdot 2^{11} = 2^{23}$. Remarkably, that is all: van Lint and
Tietäväinen proved in 1971-73 that the only perfect binary codes correcting more than zero errors are the Hamming codes (and
codes with the same parameters), the Golay code, and trivial repetition codes of odd length.

The Golay code is also a design: extend it to length 24 by adding an overall parity bit, and its codewords of weight 8 form
the blocks of a Steiner system
$S(5, 8, 24)$, in which every 5 points lie in exactly one 8-point block. Codes and designs are two faces of one subject.

Behind all this stands Claude Shannon's 1948 theorem: every noisy channel has a **capacity**, a rate below which codes exist
whose error probability tends to 0 as the length grows. Shannon's proof used random codes, a probabilistic-method argument
([Chapter 17](17-The-Probabilistic-Method.md)), and gave no construction. Coding theory is the long search for explicit codes
that come close.

## 19.6 Reed-Muller codes and Mariner 9; Reed-Solomon codes

*Level: advanced to expert.*

### Mariner 9

NASA's Mariner 9 was launched on 30 May 1971 and entered orbit around Mars on 14 November 1971, the first spacecraft to orbit
another planet. It arrived during a global dust storm, waited for the dust to settle, and went on to map the planet,
revealing the giant volcanoes of Tharsis and the canyon system later named Valles Marineris after it. It sent back more than
7,000 pictures before it was switched off in October 1972.

Each picture was a grid of pixels, each pixel a brightness from 0 to 63: a 6-bit number. The link to Earth was very noisy.
Sending each 6-bit pixel as 32 bits, Mariner 9 used a code with $2^6 = 64$ codewords of length 32 and minimum distance 16,
which by Theorem 19.8 corrects up to 7 flipped bits in every 32. This is the **first-order Reed-Muller code** $RM(1, 5)$.

### First-order Reed-Muller codes

List all $2^m$ binary vectors $x = (x_1, \ldots, x_m)$ in a fixed order. An **affine function** on them is
$f(x) = a_0 + a_1 x_1 + \cdots + a_m x_m \pmod 2$ with bits $a_i$. The codeword of $f$ is its list of $2^m$ values.

**Definition.** The **first-order Reed-Muller code** $RM(1, m)$ consists of the value lists of all $2^{m+1}$ affine
functions. Its length is $2^m$. (David Muller described these codes in 1954 and Irving Reed gave a decoding method the same
year.)

**Theorem 19.11.** $RM(1, m)$ has $2^{m+1}$ codewords, length $2^m$, and minimum distance $2^{m-1}$.

*Proof.* Different affine functions differ at some point, so they give different codewords; there are $2^{m+1}$ choices of
$(a_0, \ldots, a_m)$. The code is linear, so the minimum distance is the smallest number of 1s in a nonzero codeword. If
$f$ is the constant 1, its codeword has $2^m$ ones. Otherwise some $a_i = 1$ with $i \ge 1$. Pair each vector $x$ with the
vector $x'$ that differs from it only in coordinate $i$. Then $f(x') = f(x) + 1$, so exactly one of each pair has value 1:
$f$ takes the value 1 at exactly half the points, $2^{m-1}$ of them. $\square$

For $m = 5$: 64 codewords, length 32, distance 16. *Check by computer:* the smallest weight of a nonzero codeword of
$RM(1, 5)$ is 16. Since $2 \cdot 7 + 1 = 15 \le 16$, the code corrects 7 errors. The Hamming bound would allow far more
codewords ($64 \times \sum_{i \le 7}\binom{32}{i} = 288{,}951{,}872$, much less than $2^{32} \approx 4.3 \times 10^9$), so
the code is not perfect. It was chosen because it has a very fast decoder: comparing a received word with all 64 codewords
amounts to a **Hadamard transform**, which can be done with $m \cdot 2^m$ additions instead of $2^m \cdot 2^m$. The decoding
hardware at the Jet Propulsion Laboratory built for this was known as the "Green machine", after its designer R. R. Green.

The idea works because the codewords of $RM(1, m)$, written with $\pm 1$ in place of $0, 1$, are the rows of a Hadamard
matrix and their negatives: any two different non-complementary codewords agree in exactly half their places. Balance again.

### Reed-Solomon codes

Binary codes treat each bit separately. Real errors often come in **bursts**: a scratch on a CD destroys thousands of bits in
a row. Reed-Solomon codes, published by Irving Reed and Gustave Solomon in 1960, work with symbols from a larger alphabet, a
finite field $\mathbb{F}_q$; a burst of bit errors then spoils only a few symbols.

**Definition.** Fix a finite field $\mathbb{F}_q$, distinct field elements $x_1, \ldots, x_n$ (so $n \le q$) and $k \le n$.
The **Reed-Solomon code** $RS(n, k)$ consists of the words

$$
\big(f(x_1), f(x_2), \ldots, f(x_n)\big)
$$

for all polynomials $f$ over $\mathbb{F}_q$ of degree less than $k$. There are $q^k$ of them: one for each list of $k$
coefficients.

**Theorem 19.12.** $RS(n, k)$ has minimum distance $n - k + 1$.

*Proof.* Two different polynomials $f \ne g$ of degree less than $k$ agree wherever $f - g$ has a root. A nonzero polynomial
of degree less than $k$ has fewer than $k$ roots in a field. So $f$ and $g$ agree in at most $k - 1$ of the $n$ positions, and
differ in at least $n - k + 1$. Equality happens, for example, for $f - g = (x - x_1)\cdots(x - x_{k-1})$. $\square$

**Theorem 19.13 (Singleton bound).** Any code of length $n$ over an alphabet of $q$ symbols with $q^k$ codewords has minimum
distance at most $n - k + 1$.

*Proof.* Delete the last $d - 1$ positions of every codeword, where $d$ is the minimum distance. Different codewords still
differ (they differed in at least $d$ places), so the $q^k$ shortened words of length $n - d + 1$ are distinct, and
$q^k \le q^{n-d+1}$. So $k \le n - d + 1$. $\square$

So Reed-Solomon codes are as good as possible for their length and size: they are **maximum distance separable**.

**Worked example.** Over $\mathbb{F}_7$ (arithmetic mod 7), take $x = 1, 2, 3, 4, 5, 6$ and $k = 2$: codewords are the values
of lines $f(x) = a + bx$, and the minimum distance is $6 - 2 + 1 = 5$, so 2 errors can be corrected. Encode $f(x) = 3 + 2x$:

$$
\big(f(1), \ldots, f(6)\big) = (5, 0, 2, 4, 6, 1).
$$

Suppose positions 2 and 5 are corrupted and $(5, 3, 2, 4, 0, 1)$ arrives. Decoding means finding the line through as many of
the six points $(1, 5), (2, 3), (3, 2), (4, 4), (5, 0), (6, 1)$ as possible. The true line passes through the 4 uncorrupted
points. Any other line meets the true line in at most 1 point, so it agrees with at most $1 + 2 = 3$ of the received values.
So the line through 4 or more points is unique: $3 + 2x$, through $(1,5), (3,2), (4,4), (6,1)$. *Check:* $3 + 2 \cdot 3 = 9
\equiv 2$, $3 + 8 = 11 \equiv 4$, $3 + 12 = 15 \equiv 1 \pmod 7$.

Practical decoders (Berlekamp-Massey, 1968-69, and the Berlekamp-Welch method) find the polynomial in time polynomial in $n$
rather than by trying lines. Reed-Solomon codes protect compact discs, DVDs, QR codes (which still scan when partly torn) and
much of deep-space communication: the Voyager probes used a Reed-Solomon code together with a convolutional code, and a
Reed-Solomon code of length 255 over $\mathbb{F}_{256}$ became a space-agency standard. Later Mars missions moved on to
more powerful turbo and low-density parity-check codes, whose analysis is probabilistic, but the finite-field ideas of this
section remain the base of the subject.

## A short history

Euler's 36 officers (1782) and Kirkman's schoolgirls (1850) are recreational puzzles that became theorems. Fisher's work at
Rothamsted in the 1920s and 1930s made designs a tool of statistics, and his inequality appeared in 1940. Bose's work in India
from the late 1930s connected designs to finite geometry and finite fields. Coding theory was born in 1948-1950 with Shannon's
capacity theorem and the codes of Hamming and Golay; Reed-Muller (1954) and Reed-Solomon (1960) codes followed, and Mariner 9
used a Reed-Muller code at Mars in 1971-72. The two subjects met repeatedly: the Golay code contains the Steiner system
$S(5, 8, 24)$, and the non-existence of a plane of order 10 was proved by studying its code.

## Check yourself

??? question "1. Fill in the Latin square of order 4 whose first row is 1 2 3 4, second row 2 1 4 3, and third row 3 4 1 2."

    Each column needs the missing symbol: column 1 has 1, 2, 3 so needs 4; column 2 has 2, 1, 4 so needs 3; column 3 has
    3, 4, 1 so needs 2; column 4 has 4, 3, 2 so needs 1. Fourth row: 4 3 2 1, which also contains each symbol once.

??? question "2. Write down the squares $L^{(1)}$ and $L^{(2)}$ for $p = 5$ (entries $(ai + j) \bmod 5$) and check that the pair in row 1 differs from every pair in row 0."

    $L^{(1)}$ rows: 01234, 12340, 23401, 34012, 40123. $L^{(2)}$ rows: 01234, 23401, 40123, 12340, 34012. Row 0 pairs:
    $00, 11, 22, 33, 44$. Row 1 pairs: $12, 23, 34, 40, 01$: none of the form $ss$. All 25 pairs appear once over the
    whole square.

??? question "3. Show that in a projective plane of order $n$ any two lines contain $2n + 1$ points between them, and check this for the Fano plane."

    Each line has $n + 1$ points and they share exactly one, so together $2(n + 1) - 1 = 2n + 1$. Fano ($n = 2$): $\{1,2,4\}$
    and $\{2,3,5\}$ give $\{1,2,3,4,5\}$, five points.

??? question "4. Use Bruck-Ryser to decide whether projective planes of order 6, 14 and 21 can exist. What does it say about order 10?"

    $6 \equiv 2$, $14 \equiv 2$, $21 \equiv 1 \pmod 4$, and none of 6, 14, 21 is a sum of two squares (check:
    $6 - 0, 6 - 1, 6 - 4 = 6, 5, 2$, none a square; $14 - 0, 1, 4, 9 = 14, 13, 10, 5$; $21 - 0, 1, 4, 9, 16 = 21, 20, 17,
    12, 5$). So none exists. $10 \equiv 2$ but $10 = 1 + 9$, so Bruck-Ryser is silent; a computer search settled it (no).

??? question "5. Find $r$ and $b$ for a $(13, 3, 1)$ design and for a $(21, 5, 1)$ design. What is the second one?"

    $(13,3,1)$: $r = 12/2 = 6$, $b = 13 \cdot 6/3 = 26$. $(21,5,1)$: $r = 20/4 = 5$, $b = 21 \cdot 5/5 = 21$, a symmetric
    design with $21 = 4^2 + 4 + 1$ points and 5 points per line: the projective plane of order 4.

??? question "6. Show that no $(10, 4, 1)$ design exists."

    $r = \lambda(v-1)/(k-1) = 9/3 = 3$, and $b = vr/k = 30/4$, not a whole number. Fisher's inequality rules it out too,
    since $7.5 < 10$.

??? question "7. For which of $v = 13, 15, 17, 19, 21$ does a Steiner triple system exist?"

    Need $v \equiv 1, 3 \pmod 6$: $13 \equiv 1$ yes, $15 \equiv 3$ yes, $17 \equiv 5$ no, $19 \equiv 1$ yes, $21 \equiv 3$ yes.

??? question "8. The Hamming $[7,4]$ code: decode the received word 1101101."

    Ones at positions 1, 2, 4, 5, 7: $1 \oplus 2 \oplus 4 \oplus 5 \oplus 7 = 5$ ($001 \oplus 010 = 011$, $\oplus 100 = 111$,
    $\oplus 101 = 010$, $\oplus 111 = 101$). Flip bit 5: $1101001$. Data bits (positions 3, 5, 6, 7) are $0001$. Check:
    encoding $0001$ gives $b_1 = 0 + 0 + 1 = 1$, $b_2 = 0 + 0 + 1 = 1$, $b_4 = 0 + 0 + 1 = 1$: $1101001$.

??? question "9. What does the Hamming bound say about a single-error-correcting binary code of length 10? Of length 15?"

    Length 10: $|C| \le 2^{10}/(1 + 10) = 1024/11 \approx 93.1$, so at most 93 codewords. Length 15:
    $|C| \le 2^{15}/16 = 2^{11}$, achieved by the Hamming code with 4 check bits and 11 data bits, which is perfect.

??? question "10. Give the parameters of $RM(1, 3)$ and how many errors it corrects. Why is its rate so low?"

    Length $2^3 = 8$, $2^4 = 16$ codewords (4 data bits), minimum distance $2^2 = 4$: corrects 1 error (and detects 2).
    Rate $4/8$. In general $RM(1, m)$ has rate $(m+1)/2^m$, which tends to 0: it trades rate for huge distance, which suits a
    very noisy link with plenty of time, like Mariner 9's.

??? question "11. A code has minimum distance 5. Explain why it can either correct 2 errors or detect 4, but a decoder cannot promise both at once."

    Correcting 2: balls of radius 2 around codewords are disjoint (Theorem 19.8). Detecting 4: 4 flips cannot turn one
    codeword into another, since they are at least 5 apart. But a word with 3 errors may be within distance 2 of a
    different codeword; a decoder that corrects to the nearest codeword would "correct" it wrongly instead of reporting an
    error. So it must choose.

??? question "12. In the Reed-Solomon example over $\mathbb{F}_7$, the codeword $(5, 0, 2, 4, 6, 1)$ is sent and positions 1, 3 and 4 are all changed to 0, so $(0, 0, 0, 0, 6, 1)$ arrives. What does the decoder do?"

    Three errors exceed the 2 that distance 5 guarantees to correct. The received points are $(1,0), (2,0), (3,0), (4,0),
    (5,6), (6,1)$. The line $y = 0$ (the zero polynomial, also a codeword) passes through 4 of them, while the true line
    $3 + 2x$ passes through only 3: $(2,0), (5,6), (6,1)$. So the decoder confidently outputs the wrong codeword
    $(0,0,0,0,0,0)$. This is why real systems add a separate check (such as a checksum) on top of the code.

## What you learned

- A Latin square has each symbol once per row and column; orthogonal pairs exist for every order except 2 and 6, and there
  are at most $n - 1$ mutually orthogonal squares, achieved for prime powers.
- A finite projective plane of order $n$ has $n^2 + n + 1$ points and lines; planes exist for all prime powers, Bruck-Ryser
  rules out many other orders, order 10 was ruled out by computer, and order 12 is open.
- Balanced designs obey $r(k-1) = \lambda(v-1)$ and $bk = vr$, and Fisher's inequality $b \ge v$, proved with the incidence
  matrix.
- Steiner triple systems exist exactly when $v \equiv 1, 3 \pmod 6$; Kirkman's fifteen schoolgirls is a resolvable STS(15).
- Minimum distance $2t + 1$ corrects $t$ errors; the Hamming code corrects one error with syndrome decoding and is perfect;
  the Hamming bound limits every code.
- Mariner 9's Reed-Muller code had 64 codewords of length 32 at distance 16; Reed-Solomon codes meet the Singleton bound
  and protect discs, QR codes and spacecraft links.

**Next:** [Chapter 20](20-Where-Combinatorics-Goes.md), the frontier: arithmetic progressions in dense sets and in the primes,
the cap set and sunflower problems, Young tableaux, graph minors, and open problems.

## Further reading

- J. H. van Lint and R. M. Wilson, *A Course in Combinatorics*, 2nd edition, Cambridge University Press, 2001 (designs,
  Latin squares, codes, Bruck-Ryser-Chowla).
- D. R. Stinson, *Combinatorial Designs: Constructions and Analysis*, Springer, 2004.
- C. C. Lindner and C. A. Rodger, *Design Theory*, 2nd edition, CRC Press, 2008.
- M. Hall Jr., *Combinatorial Theory*, 2nd edition, Wiley, 1986.
- F. J. MacWilliams and N. J. A. Sloane, *The Theory of Error-Correcting Codes*, North-Holland, 1977.
- R. W. Hamming, "Error detecting and error correcting codes", *Bell System Technical Journal* 29, 1950.
- I. S. Reed and G. Solomon, "Polynomial codes over certain finite fields", *Journal of the SIAM* 8, 1960.
- R. A. Fisher, "An examination of the different possible solutions of a problem in incomplete blocks", *Annals of Eugenics*
  10, 1940.
- R. C. Bose, S. S. Shrikhande and E. T. Parker, "Further results on the construction of mutually orthogonal Latin squares
  and the falsity of Euler's conjecture", *Canadian Journal of Mathematics* 12, 1960.
- C. W. H. Lam, L. Thiel and S. Swiercz, "The non-existence of finite projective planes of order 10", *Canadian Journal of
  Mathematics* 41, 1989.
- P. Keevash, "The existence of designs", arXiv:1401.3665, 2014.
- On this site: the Fano plane in the [Geometry book, chapter 18](../geometry/18-Projective-Geometry.md); finite fields in the
  [Algebra book, chapter 19](../algebra/19-Fields-and-Extensions.md); rank and determinants in the U of T guides
  [MAT240 Unit 5, Rank-Nullity and Matrices](../../uoft/MAT240H1/unit05.md) and
  [MAT240 Unit 8, Determinants](../../uoft/MAT240H1/unit08.md); finite fields at work in cryptography in the
  [Cryptography book](https://cryptography.akadian.ca/book/).
