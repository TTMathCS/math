# 16. Partitions

*In how many ways can you write 4 as a sum of whole numbers, if the order does not matter? There are five:
$4$, $3+1$, $2+2$, $2+1+1$ and $1+1+1+1$. For 10 there are 42, for 100 there are $190{,}569{,}292$, and for 200 there are
nearly four trillion. These counts, the **partition numbers**, have no simple formula, yet they hide astonishing
regularities: $p(4)$, $p(9)$, $p(14)$, $p(19)$, ... are all multiples of 5. In this chapter you draw partitions as
pictures and prove identities by moving dots, you turn counting into algebra with generating functions, you prove
Euler's pentagonal number theorem by Franklin's beautiful involution, you prove Ramanujan's congruence mod 5, and you see
how Hardy and Ramanujan found the size of $p(n)$, with the honest story of their collaboration.*

!!! abstract "In this chapter"
    **You will learn:**

    - what a partition is, how to draw it as a Ferrers diagram, and how conjugation proves identities with no algebra
    - generating functions as formal power series, and Euler's theorem that partitions into odd parts and into distinct parts are equinumerous (two proofs)
    - Euler's pentagonal number theorem, with Franklin's proof, and the fast recurrence for $p(n)$ it gives
    - Ramanujan's congruences mod 5, 7 and 11, a complete proof of the one mod 5, and Dyson's rank and the crank
    - the Hardy-Ramanujan formula $p(n) \sim \frac{1}{4n\sqrt3}e^{\pi\sqrt{2n/3}}$, why the exponent is what it is, and Rademacher's exact series
    - the true story of Ramanujan and Hardy

    **You need:** nothing from the earlier chapters beyond modular arithmetic ([Chapter 4](04-Congruences.md)) for 16.4,
    and the value $\zeta(2) = \pi^2/6$ from [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md) for 16.5.
    Gentler versions: [Partitions](../../topics/counting/level-8/04-partitions.md) and
    [Generating functions](../../topics/counting/level-8/05-generating-functions.md) in the Topics shelf.

    **Levels:** 16.1 is beginner to intermediate; 16.2 is intermediate; 16.3 is advanced; 16.4 is advanced to expert;
    16.5 is expert (statement and heuristic) with a history thread anyone can read.

## 16.1 Partitions and Ferrers diagrams

A **partition** of a whole number $n$ is a way of writing $n$ as a sum of positive whole numbers, called its **parts**,
where the order of the parts does not matter. We list the parts from largest to smallest, so $3 + 1 + 1$ is a partition
of 5, and $1 + 3 + 1$ is the same partition. The number of partitions of $n$ is written $p(n)$, and by agreement
$p(0) = 1$ (the empty sum).

The partitions of 6 are

$$
6,\quad 5+1,\quad 4+2,\quad 4+1+1,\quad 3+3,\quad 3+2+1,\quad 3+1+1+1,\quad 2+2+2,\quad 2+2+1+1,\quad 2+1+1+1+1,\quad 1+1+1+1+1+1,
$$

so $p(6) = 11$. The first values are:

| $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $p(n)$ | 1 | 1 | 2 | 3 | 5 | 7 | 11 | 15 | 22 | 30 | 42 | 56 | 77 | 101 | 135 | 176 |

They grow fast but not as fast as you might fear: $p(50) = 204{,}226$, $p(100) = 190{,}569{,}292$,
$p(200) = 3{,}972{,}999{,}029{,}388$.

Unlike a **composition** (where order matters: $3+1$ and $1+3$ are different compositions of 4, and there are exactly
$2^{n-1}$ compositions of $n$), partitions have no closed formula. That is what makes them interesting.

### Pictures of partitions

A **Ferrers diagram** draws a partition as rows of dots, one row per part, longest row on top, all rows starting at the
left. The **conjugate** partition is what you get by reading the diagram by columns instead of rows: flip it across its
main diagonal.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 160" role="img" aria-label="Left: the Ferrers diagram of 5 plus 3 plus 1, rows of 5, 3 and 1 dots, top row highlighted. Right: its conjugate 3 plus 2 plus 2 plus 1 plus 1, where the highlighted dots now form the first column.">
  <g fill="#eea66f">
    <circle cx="30" cy="30" r="8"/><circle cx="54" cy="30" r="8"/><circle cx="78" cy="30" r="8"/><circle cx="102" cy="30" r="8"/><circle cx="126" cy="30" r="8"/>
  </g>
  <g fill="#9cc9ea">
    <circle cx="30" cy="54" r="8"/><circle cx="54" cy="54" r="8"/><circle cx="78" cy="54" r="8"/>
    <circle cx="30" cy="78" r="8"/>
  </g>
  <g fill="#eea66f">
    <circle cx="220" cy="30" r="8"/><circle cx="220" cy="54" r="8"/><circle cx="220" cy="78" r="8"/><circle cx="220" cy="102" r="8"/><circle cx="220" cy="126" r="8"/>
  </g>
  <g fill="#9cc9ea">
    <circle cx="244" cy="30" r="8"/><circle cx="268" cy="30" r="8"/>
    <circle cx="244" cy="54" r="8"/><circle cx="244" cy="78" r="8"/>
  </g>
  <line x1="150" y1="60" x2="195" y2="60" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="195,60 187,55 187,65" fill="currentColor"/>
  <g fill="currentColor" font-size="12" font-family="sans-serif">
    <text x="78" y="110" text-anchor="middle">5 + 3 + 1</text>
    <text x="172" y="50" text-anchor="middle">flip</text>
    <text x="282" y="104">3 + 2 + 2 + 1 + 1</text>
  </g>
</svg>
</div>

*Conjugation: the rows of $5 + 3 + 1$ become the columns of $3 + 2 + 2 + 1 + 1$. The top row (orange) becomes the first
column.*

Conjugating twice gives back the original partition, so conjugation is a **bijection** (a one-to-one pairing) from the
partitions of $n$ to themselves. Pictures turn it into a proof machine. The number of rows of a diagram is the number of
parts; the length of the top row is the largest part. Conjugation swaps them. So:

**Theorem 16.1.** The number of partitions of $n$ into at most $k$ parts equals the number of partitions of $n$ whose
largest part is at most $k$. The number with exactly $k$ parts equals the number with largest part exactly $k$.

*Proof.* Conjugation is a bijection and turns "at most $k$ rows" into "at most $k$ columns", that is, "largest part at
most $k$". $\blacksquare$

*Worked example.* Partitions of 6 into at most 3 parts: $6$, $5+1$, $4+2$, $4+1+1$, $3+3$, $3+2+1$, $2+2+2$ (seven).
Partitions of 6 with parts at most 3: $3+3$, $3+2+1$, $3+1+1+1$, $2+2+2$, $2+2+1+1$, $2+1+1+1+1$, $1+1+1+1+1+1$ (seven).
Check: the same count, and conjugation pairs them up ($6 \leftrightarrow 1+1+1+1+1+1$, $5+1 \leftrightarrow 2+1+1+1+1$, and so on).

### Self-conjugate partitions

A partition equal to its own conjugate is **self-conjugate**: its diagram is symmetric about the diagonal. For instance
$3 + 2 + 1$ and $4 + 1 + 1 + 1$ are self-conjugate.

**Theorem 16.2.** The number of self-conjugate partitions of $n$ equals the number of partitions of $n$ into distinct
odd parts.

*Proof.* Peel a symmetric diagram into **hooks**: the first hook is the top row together with the first column; remove
it and take the hook of what remains, and so on. By symmetry each hook has an arm and a leg of the same length $a$,
plus the corner, so it has $2a + 1$ dots, an odd number. Each hook is strictly smaller than the one before (both its arm
and leg are shorter by at least one), so the hook sizes are **distinct odd numbers** adding to $n$. Conversely, given
distinct odd numbers $h_1 > h_2 > \cdots$, nest the hooks of sizes $h_1, h_2, \ldots$ inside each other, each bent
symmetrically at its corner, to rebuild a unique symmetric diagram. $\blacksquare$

Check with $n = 12$: the self-conjugate partitions are $6+2+1+1+1+1$ (hooks $11$ and $1$), $5+3+2+1+1$ (hooks $9, 3$)
and $4+4+2+2$ (hooks $7, 5$). The partitions into distinct odd parts are $11+1$, $9+3$, $7+5$. Three each.

<figure class="play" data-play="partition"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> The partitions of n as Ferrers diagrams. Flip one over its diagonal for its conjugate, and compare the odd-part and different-part counts.</figcaption></figure>

## 16.2 Generating functions and Euler's odd-distinct theorem

*Level: intermediate.*

### Counting by multiplying

Here is the idea that Euler brought to partitions in the 1740s. Consider

$$
\frac{1}{1-x} = 1 + x + x^2 + x^3 + \cdots
$$

and think of $x^{k}$ in it as "use the part 1 exactly $k$ times". Similarly
$\frac{1}{1-x^2} = 1 + x^2 + x^4 + \cdots$, with $x^{2k}$ meaning "use the part 2 exactly $k$ times". Multiply them: a term
$x^{a}\cdot x^{2b}$ is $x^{a + 2b}$, one for each way of choosing how many 1s and how many 2s. So the coefficient of $x^n$ in
$\frac{1}{(1-x)(1-x^2)}$ is the number of partitions of $n$ into parts 1 and 2. Multiplying in every part size:

**Theorem 16.3 (Euler).**

$$
\sum_{n \ge 0} p(n)\,x^n = \prod_{k \ge 1}\frac{1}{1 - x^k} = \frac{1}{(1-x)(1-x^2)(1-x^3)\cdots}
$$

*What this means, and why it is true.* We treat these as **formal power series**: an expression
$a_0 + a_1 x + a_2 x^2 + \cdots$ is just its list of coefficients, and two series are multiplied by the usual rule
$c_n = \sum_{i+j=n}a_i b_j$. No question of convergence arises. An infinite product makes sense because, to find the
coefficient of $x^n$, only the factors with $k \le n$ matter (every other factor is $1 + x^k + \cdots$ with $k > n$ and
contributes only its 1). In the product of the factors $k = 1, \ldots, n$, a term $x^n$ arises once for each choice of
exponents $m_1, \ldots, m_n \ge 0$ with $1\cdot m_1 + 2 m_2 + \cdots + n m_n = n$, that is, once for each partition of $n$
with $m_k$ parts equal to $k$. $\blacksquare$

(The series also converges as an ordinary function when $|x| < 1$, which matters in 16.5.)

The same reasoning gives generating functions for restricted partitions by changing the factors:

| Partitions of $n$ ... | Generating function |
| --- | --- |
| into parts from a set $S$ | $\prod_{k \in S}\frac{1}{1-x^k}$ |
| into parts at most $m$ (or into at most $m$ parts) | $\prod_{k=1}^m\frac{1}{1-x^k}$ |
| into odd parts | $\prod_{k \ge 1}\frac{1}{1-x^{2k-1}}$ |
| into **distinct** parts | $\prod_{k \ge 1}(1 + x^k)$ |

For distinct parts, each part $k$ is used 0 or 1 times, so its factor is $1 + x^k$. Write $q(n)$ for the number of
partitions of $n$ into distinct parts.

*Worked example.* Partitions into parts 1 and 2: $\frac{1}{(1-x)(1-x^2)}$. The coefficient of $x^n$ counts the number $b$
of 2s, from 0 to $\lfloor n/2\rfloor$, after which the 1s are forced. So it is $\lfloor n/2 \rfloor + 1$. Check $n = 5$:
$2+2+1$, $2+1+1+1$, $1+1+1+1+1$, three, and $\lfloor 5/2\rfloor + 1 = 3$.

### Euler's theorem

List the partitions of 7 into distinct parts and into odd parts:

- distinct: $7$, $6+1$, $5+2$, $4+3$, $4+2+1$;
- odd: $7$, $5+1+1$, $3+3+1$, $3+1+1+1+1$, $1+1+1+1+1+1+1$.

Five each. This is no accident.

**Theorem 16.4 (Euler, 1748).** For every $n$, the number of partitions of $n$ into distinct parts equals the number of
partitions of $n$ into odd parts.

*Proof by generating functions.* Use $1 + x^k = \frac{1 - x^{2k}}{1 - x^k}$:

$$
\prod_{k\ge1}(1 + x^k) = \prod_{k\ge1}\frac{1 - x^{2k}}{1-x^k} = \frac{(1-x^2)(1-x^4)(1-x^6)\cdots}{(1-x)(1-x^2)(1-x^3)(1-x^4)\cdots} .
$$

Every factor with an even exponent on top cancels the same factor below, leaving only the odd exponents downstairs:

$$
\prod_{k \ge 1}(1+x^k) = \frac{1}{(1-x)(1-x^3)(1-x^5)\cdots} .
$$

The left side generates distinct-part partitions, the right side odd-part partitions; equal series have equal
coefficients. $\blacksquare$

(The cancellation is legitimate for formal power series: to check the coefficient of $x^n$, truncate both products at
$k \le n$ and the identity becomes one between finitely many polynomials and geometric series.)

*Proof by a bijection (Glaisher, 1883).* Generating functions prove that two sets have the same size; a bijection shows
*how* they match. Start with a partition into odd parts. Group equal parts: say the odd part $m$ appears $c$ times.
Write $c$ in binary, $c = 2^{a_1} + 2^{a_2} + \cdots$ with distinct powers of 2, and replace the $c$ copies of $m$ by the
parts $2^{a_1}m, 2^{a_2}m, \ldots$. Do this for every odd $m$. The new parts are distinct: a number has exactly one
expression as (power of 2) times (odd number), so two new parts with the same value would come from the same $m$ and the
same power of 2, which binary rules out. To go back, write each distinct part as $2^a m$ with $m$ odd and split it into
$2^a$ copies of $m$. These two maps undo each other. $\blacksquare$

*Worked example.* The odd partition $3+3+3+1+1$: three 3s, $3 = 2 + 1$, give parts $6$ and $3$; two 1s, $2 = 2^1$,
give the part $2$. Result: $6 + 3 + 2$, distinct, still adding to 11. Back again: $6 = 2 \cdot 3 \to 3+3$, $3 \to 3$,
$2 = 2\cdot1 \to 1+1$.

### More identities of the same kind

Glaisher's argument generalises: replacing 2 by any $d$, the number of partitions of $n$ in which no part appears
$d$ or more times equals the number in which no part is divisible by $d$ (the generating function proof uses
$1 + x^k + \cdots + x^{(d-1)k} = \frac{1-x^{dk}}{1-x^k}$).

A much deeper pair of identities, found by Leonard James Rogers in 1894 and rediscovered by Ramanujan (and
independently proved by Issai Schur in 1917), are the **Rogers-Ramanujan identities**. The first says: *the number of
partitions of $n$ into parts that differ by at least 2 equals the number of partitions of $n$ into parts
$\equiv 1$ or $4 \pmod 5$.* Check $n = 12$: both counts are 9. No simple bijection is known, and the identities connect to
modular forms and to statistical mechanics (Rodney Baxter's hard hexagon model, 1980).

## 16.3 The pentagonal number theorem

*Level: advanced.*

### What Euler found

Euler multiplied out the reciprocal of the partition generating function and found almost everything cancels:

$$
\prod_{k\ge1}(1-x^k) = 1 - x - x^2 + x^5 + x^7 - x^{12} - x^{15} + x^{22} + x^{26} - \cdots
$$

Only a sparse set of exponents survives, each with coefficient $\pm1$. They are $0, 1, 2, 5, 7, 12, 15, 22, 26, 35, 40, \ldots$,
the numbers $\frac{k(3k-1)}{2}$ for $k = 0, 1, -1, 2, -2, 3, -3, \ldots$ For positive $k$ these are the **pentagonal numbers**
$1, 5, 12, 22, 35$: the dots in nested pentagons. The signs go in pairs: $+, -, -, +, +, -, -, \ldots$, namely $(-1)^k$.

**Theorem 16.5 (Euler's pentagonal number theorem).**

$$
\prod_{k\ge1}(1-x^k) = \sum_{k=-\infty}^{\infty}(-1)^k x^{k(3k-1)/2} .
$$

Euler found it by computing in 1741 and proved it in 1750, after a decade of effort. The proof below is a purely
combinatorial one found by Fabian Franklin, published in 1881.

### What the product counts

Expand $\prod(1 - x^k)$: each term comes from choosing a set of **distinct** parts $k$ (those factors where you take
$-x^k$ instead of 1), and the term is $(-1)^{\text{number of parts}}x^{\text{sum}}$. So the coefficient of $x^n$ is

$$
e(n) - o(n),
$$

where $e(n)$ and $o(n)$ count partitions of $n$ into distinct parts with an even, respectively odd, number of parts.
The theorem says: $e(n) = o(n)$, unless $n$ is a generalized pentagonal number $\frac{k(3k-1)}{2}$, in which case
$e(n) - o(n) = (-1)^k$.

Check $n = 7$ (a pentagonal number, $k = -2$): distinct partitions with an even number of parts are $6+1$, $5+2$, $4+3$
(three); with an odd number, $7$ and $4+2+1$ (two). Difference $+1 = (-1)^{-2}$.

### Franklin's involution

To show $e(n) = o(n)$, pair up the distinct-part partitions so that each pair contains one with an even and one with an
odd number of parts. Franklin's pairing changes the number of parts by exactly one.

In the Ferrers diagram of a partition into distinct parts, define:

- the **base**: the bottom row (the smallest part). Let $b$ be its length.
- the **slope**: the longest diagonal run of dots starting at the right end of the top row and going down-left at
  45 degrees, one dot per row. It covers the rows of the longest initial run of *consecutive* parts
  $\lambda_1, \lambda_1 - 1, \lambda_1 - 2, \ldots$ Let $s$ be its length.

The move:

- **If $b \le s$**: remove the base and add one dot to the end of each of the top $b$ rows (that is, lay the base along
  the slope).
- **If $b > s$**: remove the slope (one dot from each of the top $s$ rows) and put those $s$ dots in a new bottom row.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 150" role="img" aria-label="Franklin's move. Left: 7 plus 6 plus 5 plus 2, with the base of 2 dots in green and the slope of 3 dots in orange on the right ends of the top three rows. Right: 8 plus 7 plus 5, where the two base dots have moved to the ends of the top two rows.">
  <g fill="#9cc9ea">
    <circle cx="30" cy="30" r="7"/><circle cx="52" cy="30" r="7"/><circle cx="74" cy="30" r="7"/><circle cx="96" cy="30" r="7"/><circle cx="118" cy="30" r="7"/><circle cx="140" cy="30" r="7"/>
    <circle cx="30" cy="52" r="7"/><circle cx="52" cy="52" r="7"/><circle cx="74" cy="52" r="7"/><circle cx="96" cy="52" r="7"/><circle cx="118" cy="52" r="7"/>
    <circle cx="30" cy="74" r="7"/><circle cx="52" cy="74" r="7"/><circle cx="74" cy="74" r="7"/><circle cx="96" cy="74" r="7"/>
  </g>
  <g fill="#eea66f">
    <circle cx="162" cy="30" r="7"/><circle cx="140" cy="52" r="7"/><circle cx="118" cy="74" r="7"/>
  </g>
  <g fill="#7ccf9a">
    <circle cx="30" cy="96" r="7"/><circle cx="52" cy="96" r="7"/>
  </g>
  <g fill="#9cc9ea">
    <circle cx="220" cy="30" r="7"/><circle cx="242" cy="30" r="7"/><circle cx="264" cy="30" r="7"/><circle cx="286" cy="30" r="7"/><circle cx="308" cy="30" r="7"/><circle cx="330" cy="30" r="7"/>
    <circle cx="220" cy="52" r="7"/><circle cx="242" cy="52" r="7"/><circle cx="264" cy="52" r="7"/><circle cx="286" cy="52" r="7"/><circle cx="308" cy="52" r="7"/>
    <circle cx="220" cy="74" r="7"/><circle cx="242" cy="74" r="7"/><circle cx="264" cy="74" r="7"/><circle cx="286" cy="74" r="7"/>
  </g>
  <g fill="#eea66f">
    <circle cx="352" cy="30" r="7"/><circle cx="330" cy="52" r="7"/><circle cx="308" cy="74" r="7"/>
  </g>
  <g fill="#7ccf9a">
    <circle cx="374" cy="30" r="7"/><circle cx="352" cy="52" r="7"/>
  </g>
  <line x1="178" y1="63" x2="204" y2="63" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="204,63 196,58 196,68" fill="currentColor"/>
  <g fill="currentColor" font-size="12" font-family="sans-serif">
    <text x="96" y="132" text-anchor="middle">7 + 6 + 5 + 2  (base 2, slope 3)</text>
    <text x="297" y="132" text-anchor="middle">8 + 7 + 5</text>
  </g>
</svg>
</div>

*Franklin's move on $7+6+5+2$: the base (green, $b = 2$) is at most the slope (orange, $s = 3$), so the base is laid along
the slope, giving $8 + 7 + 5$. On $8 + 7 + 5$ the base is 5 and the slope is 2 ($8, 7$ are consecutive, 5 is not 6), so
the move goes back.*

**Claim.** Apart from the exceptions below, the move produces another partition of $n$ into distinct parts, it changes the
number of parts by exactly one, and doing it twice returns the original.

*Proof.* Write the parts as $\lambda_1 > \lambda_2 > \cdots > \lambda_r$, so $b = \lambda_r$, and suppose first that the slope
does not reach the bottom row, that is $s < r$.

Case $b \le s$. The new parts are $\lambda_1 + 1, \ldots, \lambda_b + 1, \lambda_{b+1}, \ldots, \lambda_{r-1}$ (note $b \le s < r$).
The total is still $n$. The top $b$ parts were consecutive and stay consecutive, and $\lambda_b + 1 > \lambda_{b+1}$, so all
parts are distinct; there is one part fewer. In the new partition the slope has length exactly $b$, because
$\lambda_{b+1} \le \lambda_b - 1 = (\lambda_b + 1) - 2$ breaks the run; and the new base $\lambda_{r-1}$ is larger than
$\lambda_r = b$. So the new partition is in the case "base $>$ slope", and the move there takes one dot from each of the top
$b$ rows and makes a bottom row of $b$: exactly the original.

Case $b > s$. The new parts are $\lambda_1 - 1, \ldots, \lambda_s - 1, \lambda_{s+1}, \ldots, \lambda_r, s$. The run of consecutive
parts stopped at $\lambda_s$, so $\lambda_{s+1} \le \lambda_s - 2 < \lambda_s - 1$; and the new bottom part $s$ is smaller than
$\lambda_r = b$. So the parts are distinct, and there is one part more. The new base is $s$, and the new slope has length
at least $s$ (the top $s$ rows are still consecutive), so the new partition is in the case "base $\le$ slope", and the move
there adds the bottom row of $s$ back to the top $s$ rows: exactly the original.

Now suppose the slope reaches the bottom row ($s = r$), so all the parts are consecutive. If $b < s$, the first move still
works (we add to $b \le r - 1$ rows, which stay distinct from each other); if $b > s + 1$, the second move works (every row
loses a dot, the bottom becomes $b - 1 > s$, and a new row $s$ is added). The same checks as above show the moves undo each
other. Only $b = s$ and $b = s + 1$ remain. $\blacksquare$

**The exceptions.** The move fails only when the slope and the base share a dot, that is, the slope runs all the way to
the bottom row, so *all* the parts are consecutive: $\lambda = (m + r - 1) + \cdots + (m+1) + m$ with $r$ parts, slope
$s = r$, base $b = m$.

- If $b = s$, i.e. $m = r$: laying the base on the slope would use the base's own last dot. The partition is
  $(2r - 1) + \cdots + (r+1) + r$, whose sum is $\frac{r(3r-1)}{2}$.
- If $b = s + 1$, i.e. $m = r + 1$: moving the slope would create a bottom row of length $r$ while the old bottom row
  shrinks to $r$ too, a repeated part. The partition is $2r + \cdots + (r+2) + (r+1)$, whose sum is $\frac{r(3r+1)}{2}$.

For each $n$ there is at most one exceptional partition, it exists exactly when
$n = \frac{r(3r \mp 1)}{2}$, i.e. $n = \frac{k(3k-1)}{2}$ with $k = r$ or $k = -r$, and it has $r$ parts, contributing
$(-1)^r = (-1)^k$ to $e(n) - o(n)$. All other partitions cancel in pairs. This proves Theorem 16.5. $\blacksquare$

Check: for $n = 12 = \frac{3 \cdot 8}{2}$ ($k = 3$) the exception is $5 + 4 + 3$, three parts, sign $-1$, and indeed the
coefficient of $x^{12}$ is $-1$. For $n = 15 = \frac{3 \cdot 10}{2}$ ($k = -3$) it is $6 + 5 + 4$, again sign $-1$.

### A fast recurrence for $p(n)$

Multiply the pentagonal theorem by Theorem 16.3: $\left(\sum p(n)x^n\right)\left(\sum_k (-1)^k x^{k(3k-1)/2}\right) = 1$.
Comparing coefficients of $x^n$ for $n \ge 1$:

$$
p(n) = p(n-1) + p(n-2) - p(n-5) - p(n-7) + p(n-12) + p(n-15) - p(n-22) - p(n-26) + \cdots
$$

with $p(m) = 0$ for $m < 0$. Since the pentagonal numbers grow like $\frac32k^2$, computing $p(n)$ needs only about
$\sqrt{8n/3}$ earlier values.

*Worked example.* $p(10) = p(9) + p(8) - p(5) - p(3) = 30 + 22 - 7 - 3 = 42$. And
$p(12) = p(11) + p(10) - p(7) - p(5) + p(0) = 56 + 42 - 15 - 7 + 1 = 77$. Both match the table.

Percy MacMahon used this recurrence by hand to compute $p(n)$ for every $n$ up to 200, the table that Hardy and Ramanujan
used to test their formula (16.5), and in which Ramanujan spotted his congruences (16.4).

**Try it in Python.**

```python
def partition_numbers(N):
    p = [1] + [0] * N
    for n in range(1, N + 1):
        k, total = 1, 0
        while True:
            g1 = k * (3 * k - 1) // 2          # pentagonal number for +k
            if g1 > n:
                break
            sign = 1 if k % 2 == 1 else -1
            total += sign * p[n - g1]
            g2 = k * (3 * k + 1) // 2          # and for -k
            if g2 <= n:
                total += sign * p[n - g2]
            k += 1
        p[n] = total
    return p

p = partition_numbers(200)
print(p[10], p[100], p[200])   # 42 190569292 3972999029388
```

## 16.4 Ramanujan's congruences

*Level: advanced, with an expert proof.*

Look down MacMahon's table at every fifth entry starting at $n = 4$:

$$
p(4) = 5,\quad p(9) = 30,\quad p(14) = 135,\quad p(19) = 490,\quad p(24) = 1575,\quad p(29) = 4565 .
$$

All divisible by 5. Every seventh starting at 5: $p(5) = 7$, $p(12) = 77$, $p(19) = 490$, all divisible by 7. Every
eleventh starting at 6: $p(6) = 11$, $p(17) = 297$, $p(28) = 3718$, all divisible by 11.

**Theorem 16.6 (Ramanujan's congruences).** For every $n \ge 0$:

$$
p(5n+4) \equiv 0 \pmod 5,\qquad p(7n+5) \equiv 0 \pmod 7, \qquad p(11n+6) \equiv 0 \pmod{11} .
$$

Ramanujan announced them, with proofs of the first two, in a 1919 paper, "Some properties of $p(n)$, the number of
partitions of $n$". A proof for 11 was among the manuscripts he left at his death, and Hardy edited and published it in
1921.

Notice the pattern: $24 \cdot 4 \equiv 1 \pmod 5$, $24\cdot 5 \equiv 1 \pmod 7$, $24\cdot6 \equiv 1 \pmod{11}$. In each case
$24n \equiv 1$ modulo the prime, that is, $\ell \mid 24n - 1$. The number 24 appears because of the exponent
$\frac{k(3k-1)}{2}$: $24\cdot\frac{k(3k-1)}{2} + 1 = (6k-1)^2$.

### A proof of the congruence mod 5

We need two facts.

**Fact 1 (freshman's dream mod a prime).** For a prime $\ell$, $(1 - x)^\ell \equiv 1 - x^\ell \pmod \ell$, as polynomials,
because the middle binomial coefficients $\binom{\ell}{j}$, $0 < j < \ell$, are divisible by $\ell$. So, coefficient by
coefficient,

$$
\prod_{k\ge1}(1-x^k)^5 \equiv \prod_{k\ge1}(1 - x^{5k}) \pmod 5 .
$$

**Fact 2 (Jacobi's identity, 1829).**

$$
\prod_{k\ge1}(1-x^k)^3 = \sum_{m \ge 0}(-1)^m(2m+1)\,x^{m(m+1)/2} = 1 - 3x + 5x^3 - 7x^6 + 9x^{10} - \cdots
$$

It is a consequence of Jacobi's **triple product identity**; the proof takes a couple of pages and is in Hardy and
Wright, chapter 19 (listed at the end). Check the first coefficients by multiplying out: the cube of
$1 - x - x^2 + x^5 + \cdots$ begins $1 - 3x + 0x^2 + 5x^3 + 0x^4 + 0x^5 - 7x^6$.

Write $E(x) = \prod_{k\ge1}(1 - x^k)$ for short. Then Theorem 16.3 says $\sum p(n)x^n = 1/E(x)$.

*Proof that $5 \mid p(5n+4)$.* Multiply the partition series by $x$ and by $E(x)^5/E(x)^5$:

$$
\sum_{n\ge0}p(n)\,x^{n+1} = \frac{x\,E(x)^4}{E(x)^5} \equiv \frac{x\,E(x)^4}{E(x^5)} \pmod 5 ,
$$

using Fact 1 in the denominator. (Congruence of power series with integer coefficients means each coefficient is
congruent. Since $E(x)^5$ and $E(x^5)$ both start with 1, their reciprocals are integer series, also congruent mod 5.)

The coefficient we want is $p(5n+4)$, the coefficient of $x^{5n+5}$ on the left: an exponent divisible by 5. The
denominator $E(x^5)$ is a series in powers of $x^5$, and so is its reciprocal. Multiplying by a series in $x^5$ maps the
terms with exponent $\equiv 0 \pmod 5$ among themselves. So it suffices to show: **in $x E(x)^4$, every coefficient of an
exponent divisible by 5 is divisible by 5.**

Write $xE(x)^4 = x\cdot E(x)\cdot E(x)^3$ and expand with the pentagonal theorem and Jacobi's identity:

$$
xE(x)^4 = \sum_{k \in \mathbb{Z}}\sum_{m \ge 0}(-1)^{k+m}(2m+1)\,x^{N(k,m)}, \qquad N(k,m) = 1 + \frac{k(3k-1)}{2} + \frac{m(m+1)}{2} .
$$

When is $N(k, m)$ divisible by 5? Multiply by 24 and complete squares:

$$
24\,N(k,m) = 24 + (36k^2 - 12k) + (12m^2 + 12m) = (6k-1)^2 + 3(2m+1)^2 + 20 .
$$

So $5 \mid N$ exactly when $(6k-1)^2 + 3(2m+1)^2 \equiv 0 \pmod 5$. The squares mod 5 are $0, 1, 4$. Try all pairs
$(A, B)$ of squares in $A + 3B$: $0 + 0 = 0$, $0 + 3 = 3$, $0 + 12 \equiv 2$, $1 + 0 = 1$, $1 + 3 = 4$, $1 + 12 \equiv 3$,
$4 + 0 = 4$, $4 + 3 \equiv 2$, $4 + 12 \equiv 1$. Only $A \equiv B \equiv 0$ gives 0. So $5 \mid N(k,m)$ forces
$5 \mid 2m + 1$, and then every term contributing to $x^N$ has coefficient $\pm(2m+1)$, a multiple of 5. Their sum is a
multiple of 5. $\blacksquare$

Exercise 10 asks you to run the same argument for 7, using $E(x)^6 = E(x)^3\cdot E(x)^3$. The case of 11 needs more
(Winquist found an elementary proof in 1969, using a product formula for $E(x)^{10}$).

### Dyson's rank and the crank

The proof explains *that* the congruences hold, not *why* the partitions of $5n + 4$ fall into five equal piles. In 1944
Freeman Dyson, then a student, proposed an answer. The **rank** of a partition is its largest part minus its number of
parts. He conjectured that the partitions of $5n+4$ split into five classes of equal size by rank mod 5, and those of
$7n+5$ into seven by rank mod 7.

*Worked example.* The partitions of 4 have ranks: $4 \to 4 - 1 = 3$; $3+1 \to 3 - 2 = 1$; $2+2 \to 0$; $2+1+1 \to -1$;
$1+1+1+1 \to -3$. Mod 5 these are $3, 1, 0, 4, 2$: one in each class. For $n = 9$, the 30 partitions split 6, 6, 6, 6, 6
by rank mod 5. For $n = 12$, the 77 partitions split 11 to each class mod 7.

A. O. L. Atkin and Peter Swinnerton-Dyer proved Dyson's conjecture in 1954. The rank fails mod 11 (for $n = 6$ the 11
partitions do not split evenly by rank mod 11), so Dyson conjectured a hidden statistic, which he called the **crank**,
doing all three. George Andrews and Frank Garvan found it in 1988: if a partition has no 1s, its crank is its largest
part; otherwise it is the number of parts larger than the number of 1s, minus the number of 1s. Check: the 11 partitions
of 6 have 11 different cranks mod 11.

### Beyond Ramanujan

- Ramanujan conjectured congruences modulo powers: if $24n \equiv 1 \pmod{5^a 7^b 11^c}$ then
  $p(n) \equiv 0 \pmod{5^a 7^{b'} 11^c}$ (with an adjusted exponent $b'$ for 7). G. N. Watson (for 5 and the corrected 7,
  1938) and Atkin (for 11, 1967) proved them, using modular forms.
- Ken Ono proved in 2000 that for **every** prime $\ell \ge 5$ there are infinitely many congruences of the form
  $p(An + B) \equiv 0 \pmod \ell$. They are no longer simple: one for 13 is $p(59^4\cdot 13n + 111247) \equiv 0 \pmod{13}$.
- Scott Ahlgren and Matthew Boylan proved in 2003 that Ramanujan's three are the only congruences of the simple form
  $p(\ell n + \beta) \equiv 0 \pmod \ell$ with $\ell$ prime.
- Parity is wide open: it is believed that $p(n)$ is even about half the time, but nobody can prove even that both
  parities occur with positive proportion.

The real home of these results is the theory of **modular forms** ([Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md)):
$x^{1/24}E(x)$, with $x = e^{2\pi i\tau}$, is Dedekind's eta function, a modular form of weight $\frac12$.

## 16.5 The size of $p(n)$: Hardy and Ramanujan

*Level: expert (statement and heuristic).*

### The formula

**Theorem 16.7 (Hardy and Ramanujan, 1918).**

$$
p(n) \sim \frac{1}{4n\sqrt3}\,e^{\pi\sqrt{2n/3}} \qquad (n \to \infty).
$$

| $n$ | $p(n)$ | formula | ratio |
| --- | --- | --- | --- |
| 10 | 42 | 48.1 | 0.873 |
| 100 | 190,569,292 | 199,280,893 | 0.956 |
| 200 | 3,972,999,029,388 | 4,100,251,432,188 | 0.969 |
| 1000 | $2.406 \times 10^{31}$ | $2.440 \times 10^{31}$ | 0.986 |

The ratio creeps up to 1, slowly. But the full Hardy-Ramanujan method gives far more than the leading term. It writes
$p(n)$ as a sum of terms, one for each fraction $h/k$, with the $k$th term much smaller than the previous ones; with
about $\sqrt n$ terms the error is less than $\frac12$, so rounding gives $p(n)$ **exactly**. They checked it against
MacMahon's value of $p(200)$: eight terms already gave it to the nearest whole number. In 1937 Hans Rademacher refined
the method into an exact convergent series for $p(n)$. J. V. Uspensky also found the leading asymptotic independently, in
1920.

### Where $\pi\sqrt{2n/3}$ comes from

Here is the heuristic behind the exponent, using $\zeta(2) = \pi^2/6$ from Chapter 14. Let
$P(x) = \sum p(n)x^n = \prod_k (1 - x^k)^{-1}$ and put $x = e^{-t}$ with small $t > 0$. Then

$$
\log P(e^{-t}) = \sum_{k \ge 1} -\log\left(1 - e^{-kt}\right) = \sum_{k\ge1}\sum_{m \ge 1}\frac{e^{-kmt}}{m} = \sum_{m \ge 1}\frac{1}{m}\cdot\frac{1}{e^{mt} - 1} .
$$

For small $t$, $\frac{1}{e^{mt}-1} \approx \frac{1}{mt}$ (this approximation needs care for large $m$, but the result is right),
so

$$
\log P(e^{-t}) \approx \frac{1}{t}\sum_{m\ge1}\frac{1}{m^2} = \frac{\pi^2}{6t} .
$$

Now, all terms of $P(e^{-t})$ are positive, so the single term $p(n)e^{-nt}$ is at most $P(e^{-t})$:

$$
p(n) \le e^{nt}\,P(e^{-t}) \approx \exp\left(nt + \frac{\pi^2}{6t}\right) \qquad \text{for every } t > 0 .
$$

The best choice of $t$ minimises $nt + \frac{\pi^2}{6t}$. Setting the derivative $n - \frac{\pi^2}{6t^2}$ to zero gives
$t = \frac{\pi}{\sqrt{6n}}$, and then $nt + \frac{\pi^2}{6t} = 2\pi\sqrt{\frac{n}{6}} = \pi\sqrt{\frac{2n}{3}}$. So $\log p(n)$ is at
most about $\pi\sqrt{2n/3}$, and the theorem says this upper bound is the truth up to the factor $\frac{1}{4n\sqrt3}$. The
rigorous proof (the **circle method**) studies $P(x)$ for complex $x$ near the unit circle: near each root of unity
$e^{2\pi ih/k}$ it has a singularity whose shape is known exactly, because $E(x)$ is a modular form, and each
singularity gives one term of the series. The circle method, born here, became one of the main tools of analytic number
theory: Hardy and Littlewood used it on Waring's problem ([Chapter 11](11-Sums-of-Squares.md)) and Goldbach's
problem ([Chapter 21](21-Where-Number-Theory-Goes.md)).

### Ramanujan's story

Srinivasa Ramanujan was born in 1887 in Erode, in southern India, and grew up in Kumbakonam. His mathematical education
was largely one book, G. S. Carr's *Synopsis of Elementary Results in Pure Mathematics*, a dense list of several thousand
formulas without proofs, which he worked through on his own and then went far beyond. He lost a college scholarship
because he neglected subjects other than mathematics, and for some years he had no degree and little income. In 1912 he
took a clerk's job at the Madras Port Trust, whose officials encouraged his mathematics.

In January 1913 he wrote to G. H. Hardy at Trinity College, Cambridge, enclosing pages of theorems. Some were known, a
few were wrong, and many were unlike anything Hardy had seen. Hardy later wrote that some of the formulas "defeated me
completely" and that they "must be true, because, if they were not true, no one would have had the imagination to invent
them". With J. E. Littlewood's support he arranged for Ramanujan to come to Cambridge, where he arrived in 1914.

The collaboration of the next five years produced the partition formula, the congruences, and much else. It was a meeting
of different styles: Ramanujan's intuition for formulas and Hardy's insistence on proof. Ramanujan was elected a Fellow of
the Royal Society in 1918, one of the youngest ever, and a Fellow of Trinity the same year. But he was often ill in
England, through the war years, with a diet hard to keep and a cold climate. He returned to India in 1919 and died in
Kumbakonam on 26 April 1920, aged 32.

The story of the number 1729 comes from Hardy himself: visiting Ramanujan in hospital, Hardy remarked that his taxi's
number, 1729, seemed dull, and Ramanujan replied that it is the smallest number expressible as a sum of two cubes in two
different ways ($1^3 + 12^3 = 9^3 + 10^3$). In 1976 George Andrews found, among papers at Trinity College, a sheaf of
Ramanujan's work from his last year, now called the "lost notebook", rich in mock theta functions whose meaning was
understood only in the 2000s.

## Check yourself

??? question "1. List the partitions of 5 and write the conjugate of each."

    $5 \leftrightarrow 1+1+1+1+1$, $4+1 \leftrightarrow 2+1+1+1$, $3+2 \leftrightarrow 2+2+1$, $3+1+1$ is self-conjugate.
    That covers all seven: $5, 4+1, 3+2, 3+1+1, 2+2+1, 2+1+1+1, 1+1+1+1+1$.

??? question "2. Find the number of partitions of 8 into distinct parts and into odd parts, list both, and match them with Glaisher's bijection."

    Distinct: $8, 7+1, 6+2, 5+3, 5+2+1, 4+3+1$ (six). Odd: $7+1, 5+3, 5+1+1+1, 3+3+1+1, 3+1+1+1+1+1, 1^8$ (six).
    Glaisher (distinct to odd, splitting $2^a m$ into $2^a$ copies of $m$): $8 \to 1^8$; $7+1 \to 7+1$; $6+2 \to 3+3+1+1$;
    $5+3 \to 5+3$; $5+2+1 \to 5+1+1+1$; $4+3+1 \to 3+1+1+1+1+1$.

??? question "3. Use the recurrence to compute $p(13)$ from the table."

    $p(13) = p(12) + p(11) - p(8) - p(6) + p(1) = 77 + 56 - 22 - 11 + 1 = 101$. (The pentagonal numbers up to 13 are
    $1, 2, 5, 7, 12$; the next, 15, is too large.) The table agrees.

??? question "4. What is the generating function for partitions into parts 1, 2 and 3, and how many partitions of 6 are there of this kind?"

    $\frac{1}{(1-x)(1-x^2)(1-x^3)}$. For $n = 6$: by Theorem 16.1 this is the number of partitions of 6 into at most 3 parts,
    which is 7 (listed in 16.1). Directly: $3+3$, $3+2+1$, $3+1+1+1$, $2+2+2$, $2+2+1+1$, $2+1+1+1+1$, $1^6$.

??? question "5. Show that the number of partitions of $n$ in which no part appears more than twice equals the number with no part divisible by 3. Check for $n = 5$."

    $\prod_k(1 + x^k + x^{2k}) = \prod_k\frac{1 - x^{3k}}{1 - x^k}$, and the factors $1 - x^{3k}$ cancel the denominators with
    exponent divisible by 3, leaving $\prod_{3 \nmid k}\frac{1}{1-x^k}$. For $n = 5$: at most twice: $5, 4+1, 3+2, 3+1+1, 2+2+1$;
    no multiple of 3: $5, 4+1, 2+2+1, 2+1+1+1, 1+1+1+1+1$. Five each.

??? question "6. Find all self-conjugate partitions of 10 and match them with partitions into distinct odd parts."

    Distinct odd parts adding to 10: $9+1$ and $7+3$. Nest the hooks. A hook of 9 has arm and leg 4: top row 5 and first
    column 5; the hook of 1 inside it is the single dot in row 2, column 2. Rows: $5 + 2 + 1 + 1 + 1$. A hook of 7 (arm 3)
    with a hook of 3 (arm 1) inside: rows $4, 3, 2, 1$, that is $4 + 3 + 2 + 1$. Both are symmetric about the diagonal, both
    sum to 10, and there are no others: two self-conjugate partitions, two partitions into distinct odd parts.

??? question "7. Apply Franklin's move to $6 + 5 + 4 + 1$ and to $9 + 7 + 6$. Which pentagonal exception is $5 + 4 + 3$?"

    $6+5+4+1$: base $b = 1$, slope $s = 3$ ($6,5,4$). Since $b \le s$, remove the 1 and add it to the top row: $7 + 5 + 4$.
    $9+7+6$: base $6$, slope 1 ($9$ and $7$ are not consecutive). $b > s$: remove one dot from the top row and make a new row
    of 1: $8 + 7 + 6 + 1$. Each changes the number of parts by one. $5+4+3$: all parts consecutive, $r = 3$ parts, base
    $3 = r$, so it is the exception with sum $\frac{3\cdot 8}{2} = 12$.

??? question "8. Use the pentagonal theorem to find $e(n) - o(n)$ for $n = 20$, $22$ and $26$, where $e, o$ count distinct-part partitions with an even or odd number of parts."

    The generalized pentagonal numbers are $0, 1, 2, 5, 7, 12, 15, 22, 26, 35, \ldots$ 20 is not one, so $e(20) - o(20) = 0$.
    $22 = \frac{4 \cdot 11}{2}$ with $k = 4$: $(-1)^4 = +1$. $26 = \frac{(-4)(-13)}{2}$ with $k = -4$: $+1$. (Exceptions:
    $7+6+5+4$ and $8+7+6+5$, four parts each.)

??? question "9. Verify Dyson's rank statement for $p(4) = 5$ and explain why it implies $5 \mid p(4)$ in a way the proof of 16.4 does not."

    The ranks of $4, 3+1, 2+2, 2+1+1, 1+1+1+1$ are $3, 1, 0, -1, -3$, which are $3, 1, 0, 4, 2$ mod 5: one partition in each
    class. In general, if the partitions of $5n+4$ split into 5 piles of equal size, the total is 5 times the pile size: a
    combinatorial explanation, while the generating-function proof is only a computation.

??? question "10. Prove $p(7n+5) \equiv 0 \pmod 7$ using $\sum p(n)x^{n+2} = x^2E(x)^6/E(x)^7$ and Jacobi's identity twice."

    Mod 7, $E(x)^7 \equiv E(x^7)$, so it suffices that coefficients of exponents divisible by 7 in $x^2E(x)^3E(x)^3$ are
    divisible by 7. Expanding, a term is $(-1)^{a+b}(2a+1)(2b+1)x^{N}$ with $N = 2 + \frac{a(a+1)}{2} + \frac{b(b+1)}{2}$. Then
    $8N = (2a+1)^2 + (2b+1)^2 + 14$, so $7 \mid N$ iff $(2a+1)^2 + (2b+1)^2 \equiv 0 \pmod 7$. Since $-1$ is not a square mod 7
    ($7 \equiv 3 \pmod 4$), this forces $7 \mid 2a+1$ and $7 \mid 2b+1$. So every such coefficient is a multiple of 49, hence of 7.
    The coefficient of $x^{7n+7}$ on the left is $p(7n+5)$.

??? question "11. Using the heuristic of 16.5, show that $\log p(n) \le \pi\sqrt{2n/3}$ holds approximately, and compare with $n = 100$."

    $p(n)e^{-nt} \le P(e^{-t}) \approx e^{\pi^2/(6t)}$; minimising $nt + \pi^2/(6t)$ at $t = \pi/\sqrt{6n}$ gives $\pi\sqrt{2n/3}$.
    For $n = 100$: $\pi\sqrt{200/3} = 25.65$, so $e^{25.65} \approx 1.4\times 10^{11}$, while $p(100) \approx 1.9\times10^8$. The bound
    is right in the exponent's leading term; the factor $\frac{1}{4n\sqrt3} = \frac{1}{693}$ closes the gap
    ($1.4\times10^{11}/693 \approx 2.0 \times 10^8$).

??? question "12. Let $m = \lfloor\sqrt n\rfloor$. Show that $p(n) \ge 2^{m-1}$, a crude lower bound of the right kind."

    Take any subset $A$ of $\{2, 3, \ldots, m\}$. Its sum is at most $2 + \cdots + m < \frac{m(m+1)}{2} \le m^2 \le n$. Make a
    partition of $n$ from the parts in $A$ together with $n - \sum A$ parts equal to 1. Different subsets give different
    partitions, because the parts larger than 1 recover $A$. There are $2^{m-1}$ subsets, so $p(n) \ge 2^{m-1}$. Hence
    $\log p(n) \ge (\sqrt n - 2)\log 2$: the logarithm of $p(n)$ grows at least like $\sqrt n$, which is the shape of the
    exponent $\pi\sqrt{2n/3}$ in Theorem 16.7.

## What you learned

- A partition writes $n$ as an unordered sum; Ferrers diagrams and conjugation prove identities such as "at most $k$
  parts = parts at most $k$" by moving dots.
- The generating function $\sum p(n)x^n = \prod(1-x^k)^{-1}$ turns counting into algebra; Euler's identity
  $\prod(1 + x^k) = \prod(1-x^{2k-1})^{-1}$ gives "distinct parts = odd parts", and Glaisher's bijection shows how.
- Euler's pentagonal number theorem $\prod(1-x^k) = \sum(-1)^kx^{k(3k-1)/2}$ has a pure dot-moving proof (Franklin) and
  gives a fast recurrence for $p(n)$.
- Ramanujan's congruences $5 \mid p(5n+4)$, $7 \mid p(7n+5)$, $11 \mid p(11n+6)$; the first two follow from Jacobi's identity
  and $(1-x)^\ell \equiv 1 - x^\ell$; Dyson's rank and the Andrews-Garvan crank explain them combinatorially.
- $p(n) \sim \frac{1}{4n\sqrt3}e^{\pi\sqrt{2n/3}}$ (Hardy and Ramanujan); the exponent comes from $\zeta(2) = \pi^2/6$, and the
  circle method behind it became a central tool.
- Modular forms are the true home of these results, and partition questions as simple as the parity of $p(n)$ are open.

**Next:** [Chapter 17](17-Algebraic-Number-Theory.md), where whole numbers are replaced by algebraic integers, unique
factorization fails, and ideals repair it.

## Further reading

- G. H. Hardy and E. M. Wright, *An Introduction to the Theory of Numbers*, 6th edition revised by D. R. Heath-Brown and
  J. H. Silverman, 2008, chapter 19 (partitions, Jacobi's identity, the pentagonal theorem, the congruences).
- G. E. Andrews, *The Theory of Partitions*, 1976. The standard reference.
- G. E. Andrews and K. Eriksson, *Integer Partitions*, 2004. A friendly introduction with Franklin's and Glaisher's
  proofs.
- G. H. Hardy and S. Ramanujan, "Asymptotic formulae in combinatory analysis", *Proceedings of the London Mathematical
  Society*, 1918.
- S. Ramanujan, "Some properties of $p(n)$, the number of partitions of $n$", *Proceedings of the Cambridge Philosophical
  Society*, 1919.
- G. E. Andrews and F. G. Garvan, "Dyson's crank of a partition", *Bulletin of the American Mathematical Society* 18,
  1988.
- K. Ono, "Distribution of the partition function modulo $m$", *Annals of Mathematics* 151, 2000.
- R. Kanigel, *The Man Who Knew Infinity*, 1991, a biography of Ramanujan; G. H. Hardy, *Ramanujan: Twelve Lectures on
  Subjects Suggested by His Life and Work*, 1940.
- On this site: the gentle lessons [Partitions](../../topics/counting/level-8/04-partitions.md) and
  [Generating functions](../../topics/counting/level-8/05-generating-functions.md); the U of T guide
  [Power series and Taylor series](../../uoft/MAT137/unit14.md); [Algebra, Chapter 8](../algebra/08-Sequences-Series-and-Induction.md)
  for series and induction.
