# 8. Quadratic residues and reciprocity

*Is 3 a perfect square mod 11? Yes: $5^2 = 25 \equiv 3$. Is it a square mod 7? Trying all seven remainders shows it is
not. For a large prime, trying everything is hopeless, so we want a rule. This chapter finds it. You will see that
exactly half the nonzero remainders mod an odd prime are squares, prove Euler's criterion that tests a number with one
power, and work out when $-1$ and $2$ are squares. Then comes the high point of elementary number theory, Gauss's law
of quadratic reciprocity, which links "is $p$ a square mod $q$?" to "is $q$ a square mod $p$?". You will prove it by
counting points in a rectangle, then use the Jacobi symbol to compute any such answer in a few lines.*

!!! abstract "In this chapter"
    **You will learn:**

    - what a quadratic residue is, and why exactly half of the nonzero remainders mod $p$ are squares
    - the Legendre symbol and Euler's criterion, with proofs
    - Gauss's lemma, and the rules for when $-1$ and $2$ are squares mod $p$
    - the law of quadratic reciprocity, with Eisenstein's proof by counting lattice points
    - the Jacobi symbol: a fast algorithm for the Legendre symbol, and its pitfalls
    - how to find square roots mod $p$, and the history of the "golden theorem"

    **You need:** [Chapter 4](04-Congruences.md) (congruences), [Chapter 5](05-Fermat-Euler-and-Wilson.md)
    (Fermat's little theorem, Wilson's theorem) and [Chapter 7](07-Primitive-Roots.md) (primitive roots; Lagrange's
    lemma that a polynomial of degree $k$ has at most $k$ roots mod $p$). The gentler version is
    [Quadratic residues](../../topics/number-theory/level-8/06-quadratic-residues.md).

    **Levels:** 8.1 is intermediate; 8.2 and 8.3 are advanced; 8.4 is advanced, with the proof at full university
    depth; 8.5 is advanced; 8.6 is history for everyone.

## 8.1 Squares mod p

Square every nonzero remainder mod 11:

| $x$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| $x^2 \bmod 11$ | 1 | 4 | 9 | 5 | 3 | 3 | 5 | 9 | 4 | 1 |

Only five values appear, 1, 3, 4, 5, 9, each twice, and the second half of the row mirrors the first. The mirror is no
accident: $(11 - x)^2 = 121 - 22x + x^2 \equiv x^2$. In general $(-x)^2 = x^2$.

!!! note "Definition"
    Let $n \ge 2$ and $\gcd(a, n) = 1$. Then $a$ is a **quadratic residue** mod $n$ if $x^2 \equiv a \pmod n$ has a
    solution, and a **quadratic nonresidue** mod $n$ otherwise.

The word "residue" is old-fashioned for "remainder"; "quadratic residue" means "remainder of a square". Note that 0 is
left out on purpose: it is a square, but it behaves differently, and we only classify numbers coprime to $n$.

Mod 11 the residues are 1, 3, 4, 5, 9 and the nonresidues 2, 6, 7, 8, 10. Mod 13 the residues are 1, 3, 4, 9, 10, 12.
In both cases exactly half of the nonzero remainders are squares.

!!! note "Theorem 8.1"
    Let $p$ be an odd prime. Exactly $(p-1)/2$ of the numbers $1, 2, \dots, p - 1$ are quadratic residues mod $p$, namely
    $1^2, 2^2, \dots, \left(\tfrac{p-1}{2}\right)^2$ mod $p$, and these are distinct.

*Proof.* Every nonzero $x$ is $\equiv \pm y$ for some $y$ in $1, \dots, (p-1)/2$, and $x^2 \equiv y^2$, so every
residue is one of the listed squares. They are distinct: if $x^2 \equiv y^2$ with $1 \le x, y \le (p-1)/2$, then
$p \mid (x - y)(x + y)$, and since $p$ is prime it divides one factor. But $2 \le x + y \le p - 1$, so $p \nmid x + y$;
hence $p \mid x - y$, and $x = y$. $\square$

The same argument shows that a quadratic residue $a$ has exactly two square roots mod $p$, a pair $\pm x$.

**Why we care.** Solving a quadratic congruence comes down to this. To solve $ax^2 + bx + c \equiv 0 \pmod p$ with $p$
odd and $p \nmid a$, multiply by $4a$ and complete the square, exactly as for the quadratic formula:

$$
4a^2x^2 + 4abx + 4ac \equiv 0 \iff (2ax + b)^2 \equiv b^2 - 4ac \pmod p .
$$

So the congruence has two solutions, one, or none according to whether the discriminant $D = b^2 - 4ac$ is a nonzero
square, zero, or a nonresidue mod $p$; and when $D \equiv s^2$, the solutions are $x \equiv (-b \pm s)(2a)^{-1}$.

**Worked example.** Solve $x^2 + 3x + 7 \equiv 0 \pmod{11}$. $D = 9 - 28 = -19 \equiv 3 \pmod{11}$, and $3 \equiv
5^2$. So $x \equiv (-3 \pm 5) \cdot 2^{-1}$, and $2^{-1} \equiv 6$: $x \equiv 2 \cdot 6 = 12 \equiv 1$ or $x \equiv
-8 \cdot 6 = -48 \equiv 7$. **Check:** $1 + 3 + 7 = 11$ and $49 + 21 + 7 = 77 = 7 \cdot 11$.

Everything thus depends on one question: *given $a$ and $p$, is $a$ a square mod $p$?*

<figure class="play" data-play="qres"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Square every number mod p. Exactly half of the non-zero numbers are hit, and −1 is one of them only when p leaves 1 on division by 4.</figcaption></figure>

## 8.2 The Legendre symbol and Euler's criterion

*Level: advanced.*

Adrien-Marie Legendre introduced a notation in 1798 that turns the question into arithmetic.

!!! note "Definition"
    For an odd prime $p$ and any integer $a$, the **Legendre symbol** is

    $$
    \left(\frac{a}{p}\right) = \begin{cases} \phantom{-}1 & \text{if } p \nmid a \text{ and } a \text{ is a quadratic residue mod } p, \\ -1 & \text{if } a \text{ is a nonresidue mod } p, \\ \phantom{-}0 & \text{if } p \mid a. \end{cases}
    $$

It looks like a fraction but is not one; read it "$a$ on $p$". It depends only on $a \bmod p$. With it, Theorem 8.1
says $\sum_{a=1}^{p-1} \left(\frac ap\right) = 0$, and the number of solutions of $x^2 \equiv a \pmod p$ is exactly
$1 + \left(\frac ap\right)$ (two, none, or one when $a \equiv 0$).

!!! note "Theorem 8.2 (Euler's criterion)"
    For an odd prime $p$ and any integer $a$,

    $$
    \left(\frac{a}{p}\right) \equiv a^{(p-1)/2} \pmod p .
    $$

*Proof.* If $p \mid a$ both sides are 0. Otherwise let $h = a^{(p-1)/2}$. By Fermat, $h^2 = a^{p-1} \equiv 1$, so
$h \equiv \pm 1$ (Lagrange's lemma, [Chapter 7](07-Primitive-Roots.md): $x^2 - 1$ has only the roots $\pm 1$ mod $p$).
It remains to see that $h \equiv 1$ exactly when $a$ is a residue.

If $a \equiv x^2$, then $h \equiv x^{p-1} \equiv 1$ by Fermat. Conversely, the polynomial $x^{(p-1)/2} - 1$ has at most
$(p-1)/2$ roots mod $p$, and we have just seen that all $(p-1)/2$ quadratic residues are roots. So they are all of its
roots, and a nonresidue $a$ is not a root: $h \not\equiv 1$, so $h \equiv -1$. $\square$

(Using a primitive root $g$ gives another proof: $a = g^k$ is a residue exactly when $k$ is even, and $a^{(p-1)/2} =
(g^{(p-1)/2})^k = (-1)^k$, since $g^{(p-1)/2} \equiv -1$. See exercise 6 of [Chapter 7](07-Primitive-Roots.md).)

**Worked example.** Is 3 a residue mod 13? $3^6 = 729 = 56 \cdot 13 + 1$, so $\left(\frac{3}{13}\right) = 1$; indeed
$4^2 = 16 \equiv 3$. Is 3 a residue mod 7? $3^3 = 27 = 3 \cdot 7 + 6 \equiv -1$, so no.

Euler's criterion is a complete answer in principle: one modular power, computed by square-and-multiply in about
$\log_2 p$ steps, decides the question. But it hides all structure. Reciprocity will reveal it.

**Two immediate consequences.**

!!! note "Corollary 8.3"
    1. The Legendre symbol is completely multiplicative in $a$: $\left(\frac{ab}{p}\right) = \left(\frac ap\right)\left(\frac bp\right)$.
    2. $\left(\frac{-1}{p}\right) = (-1)^{(p-1)/2}$: so $-1$ is a square mod $p$ if and only if $p \equiv 1 \pmod 4$.

*Proof.* (1) $(ab)^{(p-1)/2} = a^{(p-1)/2} b^{(p-1)/2}$, and two numbers in $\{-1, 0, 1\}$ that are congruent mod
$p > 2$ are equal. (2) Euler's criterion with $a = -1$. $\square$

Part (1) says: residue times residue is a residue, nonresidue times nonresidue is a residue, and residue times
nonresidue is a nonresidue, like signs under multiplication. So to compute $\left(\frac ap\right)$ it is enough to know
$\left(\frac{-1}{p}\right)$, $\left(\frac{2}{p}\right)$ and $\left(\frac{q}{p}\right)$ for odd primes $q$, and then
factor $a$. The rest of the chapter supplies exactly these three.

**An application: primes that are 1 mod 4.** If an odd prime $p$ divides $n^2 + 1$, then $n^2 \equiv -1 \pmod p$, so
$-1$ is a residue and $p \equiv 1 \pmod 4$. Now suppose there were only finitely many primes $\equiv 1 \pmod 4$, say
$p_1, \dots, p_k$. The number $N = (2p_1 \cdots p_k)^2 + 1$ is odd and greater than 1, so it has an odd prime factor $p$,
which is $\equiv 1 \pmod 4$ by what we just said, yet it is none of the $p_i$ (they leave remainder 1 when dividing
$N$). This contradiction proves:

!!! note "Theorem 8.4"
    There are infinitely many primes $p \equiv 1 \pmod 4$.

Together with [Chapter 2](02-Primes-and-Unique-Factorization.md), where primes $\equiv 3 \pmod 4$ were handled by a
different trick, this is a small case of Dirichlet's theorem on primes in progressions
([Chapter 15](15-Primes-in-Progressions.md)).

## 8.3 Gauss's lemma and the two supplements

*Level: advanced.*

For $a = 2$, Euler's criterion asks for $2^{(p-1)/2} \bmod p$, and it is not obvious what that is. Gauss found a way
to read the sign off by counting.

Let $p$ be an odd prime and $h = (p - 1)/2$. Call the numbers $1, \dots, h$ the "small half" and $h + 1, \dots, p - 1$
the "large half" of the nonzero remainders.

!!! note "Theorem 8.5 (Gauss's lemma)"
    Let $p \nmid a$. Reduce the $h$ multiples $a, 2a, 3a, \dots, ha$ mod $p$ into $\{1, \dots, p - 1\}$, and let $n$ be
    the number of them that land in the large half. Then $\left(\frac ap\right) = (-1)^n$.

*Proof.* For each $j = 1, \dots, h$, write $ja \equiv \varepsilon_j u_j \pmod p$ where $u_j$ is in the small half and
$\varepsilon_j = \pm 1$. (If $ja$ reduces to $r$ in the small half, take $u_j = r$, $\varepsilon_j = 1$; if it reduces to
$r$ in the large half, take $u_j = p - r$, $\varepsilon_j = -1$.) Exactly $n$ of the $\varepsilon_j$ are $-1$.

The $u_j$ are distinct. If $u_i = u_j$ then $ia \equiv \pm ja$, so $p \mid (i \mp j)a$, so $p \mid i \mp j$. But
$1 \le i, j \le h$ means $|i - j| < p$ and $2 \le i + j \le p - 1$; the only possibility is $i = j$. So $u_1, \dots, u_h$
are $h$ distinct numbers in $\{1, \dots, h\}$: they are $1, 2, \dots, h$ in some order. Multiply the $h$ congruences:

$$
a^h \cdot h! \equiv (\varepsilon_1 \cdots \varepsilon_h)(u_1 \cdots u_h) = (-1)^n \, h! \pmod p .
$$

Since $h!$ is not divisible by $p$, cancel it: $a^h \equiv (-1)^n$. By Euler's criterion, $\left(\frac ap\right) =
(-1)^n$. $\square$

**Worked example.** $\left(\frac{5}{13}\right)$: $h = 6$. The multiples $5, 10, 15, 20, 25, 30$ reduce to 5, 10, 2, 7,
12, 4. Those in the large half ($\ge 7$) are 10, 7, 12, so $n = 3$ and $\left(\frac{5}{13}\right) = -1$. **Check:** the
squares mod 13 are 1, 3, 4, 9, 10, 12, and 5 is not among them.

### The second supplement: when is 2 a square?

!!! note "Theorem 8.6"
    For an odd prime $p$,

    $$
    \left(\frac{2}{p}\right) = (-1)^{(p^2-1)/8} = \begin{cases} \phantom{-}1 & p \equiv \pm 1 \pmod 8, \\ -1 & p \equiv \pm 3 \pmod 8. \end{cases}
    $$

*Proof.* Use Gauss's lemma with $a = 2$. The multiples $2, 4, \dots, 2h = p - 1$ are already between 1 and $p - 1$, so
no reduction is needed. The ones in the small half are $2j \le h$, i.e. $j \le h/2$, and there are
$\lfloor h/2 \rfloor = \lfloor (p-1)/4 \rfloor$ of them. So $n = h - \lfloor (p-1)/4 \rfloor$. Check the four cases,
writing $p = 8k + r$:

| $p \bmod 8$ | $h$ | $\lfloor (p-1)/4 \rfloor$ | $n$ | parity |
|---|---|---|---|---|
| 1 | $4k$ | $2k$ | $2k$ | even |
| 3 | $4k + 1$ | $2k$ | $2k + 1$ | odd |
| 5 | $4k + 2$ | $2k + 1$ | $2k + 1$ | odd |
| 7 | $4k + 3$ | $2k + 1$ | $2k + 2$ | even |

So $\left(\frac 2p\right) = 1$ exactly for $p \equiv 1, 7 \pmod 8$. Finally $(p^2 - 1)/8$ is even for $p \equiv \pm 1$
and odd for $p \equiv \pm 3 \pmod 8$ (for example $p = 3$: $1$; $p = 7$: $6$), which is the compact formula. $\square$

**Check.** 2 is a square mod 7 ($3^2 = 9 \equiv 2$) and mod 17 ($6^2 = 36 \equiv 2$), but not mod 3, 5, 11 or 13.

Together with Corollary 8.3, the "first supplement" $\left(\frac{-1}{p}\right) = (-1)^{(p-1)/2}$ and this "second
supplement" are the two special cases that reciprocity does not cover.

**An application: Mersenne numbers.** If $p > 3$, $p \equiv 3 \pmod 4$ and $q = 2p + 1$ is prime, then $q \equiv 7 \pmod 8$, so
2 is a square mod $q$, and Euler's criterion gives $2^{(q-1)/2} = 2^p \equiv 1 \pmod q$. So $q$ divides $2^p - 1$. For
example $p = 11$, $q = 23$: $23 \mid 2^{11} - 1 = 2047$, the factorization met in
[Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md). This result is due to Euler, and it
proves $2^p - 1$ composite for $p = 11, 23, 83, 131, \dots$

## 8.4 Quadratic reciprocity

*Level: advanced.*

Look at a small table of $\left(\frac pq\right)$ for odd primes, row $p$ and column $q$:

| $p \backslash q$ | 3 | 5 | 7 | 11 | 13 | 17 |
|---|---|---|---|---|---|---|
| 3 | | $-1$ | $-1$ | $1$ | $1$ | $-1$ |
| 5 | $-1$ | | $-1$ | $1$ | $-1$ | $-1$ |
| 7 | $1$ | $-1$ | | $-1$ | $-1$ | $-1$ |
| 11 | $-1$ | $1$ | $1$ | | $-1$ | $-1$ |
| 13 | $1$ | $-1$ | $-1$ | $-1$ | | $1$ |
| 17 | $-1$ | $-1$ | $-1$ | $-1$ | $1$ | |

The table is almost symmetric. The entry for $(p, q)$ equals the entry for $(q, p)$, except when both $p$ and $q$ are
$\equiv 3 \pmod 4$ (here: 3, 7, 11), where they are opposite. That is the law.

!!! note "Theorem 8.7 (law of quadratic reciprocity)"
    For distinct odd primes $p$ and $q$,

    $$
    \left(\frac{p}{q}\right)\left(\frac{q}{p}\right) = (-1)^{\frac{p-1}{2} \cdot \frac{q-1}{2}} .
    $$

    In words: if at least one of $p, q$ is $\equiv 1 \pmod 4$, then $p$ is a square mod $q$ exactly when $q$ is a square
    mod $p$; if both are $\equiv 3 \pmod 4$, exactly one of the two is a square mod the other.

What makes this remarkable is that the two questions look unrelated. Whether $p$ is a square mod $q$ is about the
arithmetic of the numbers $0, \dots, q-1$; whether $q$ is a square mod $p$ is about $0, \dots, p-1$. There is no
evident reason why the answers should be linked at all.

### The proof

We follow Eisenstein's proof of 1844, which turns Gauss's lemma into counting lattice points. It has two steps.

!!! note "Lemma 8.8 (Eisenstein)"
    Let $p$ be an odd prime and $a$ an odd integer with $p \nmid a$. Then

    $$
    \left(\frac{a}{p}\right) = (-1)^{S(a, p)}, \qquad S(a, p) = \sum_{j=1}^{(p-1)/2} \left\lfloor \frac{ja}{p} \right\rfloor .
    $$

Here $\lfloor y \rfloor$ is the **floor** of $y$, the largest integer $\le y$; so $\lfloor ja/p \rfloor$ is the
quotient when $ja$ is divided by $p$.

*Proof.* Let $h = (p-1)/2$. Divide each multiple: $ja = p \lfloor ja/p \rfloor + r_j$ with $0 < r_j < p$. Split the
remainders into those in the small half, call them $s_1, \dots, s_m$, and those in the large half, $t_1, \dots, t_n$.
By Gauss's lemma $\left(\frac ap\right) = (-1)^n$. In the proof of Gauss's lemma we saw that the numbers
$s_1, \dots, s_m, p - t_1, \dots, p - t_n$ are exactly $1, 2, \dots, h$. Sum two ways:

$$
\sum_{j=1}^{h} j = \sum s_i + \sum (p - t_i) = \sum s_i + np - \sum t_i ,
$$

$$
a \sum_{j=1}^{h} j = \sum_{j=1}^h ja = p\, S(a, p) + \sum s_i + \sum t_i .
$$

Subtract the first line from the second:

$$
(a - 1) \sum_{j=1}^{h} j = p\, S(a, p) - np + 2 \sum t_i .
$$

Now read this mod 2. The left side is even because $a$ is odd. The term $2\sum t_i$ is even. And $p$ is odd. So
$S(a, p) - n$ is even, $(-1)^{S(a,p)} = (-1)^n = \left(\frac ap\right)$. $\square$

**Step two: count the points.** Let $p$ and $q$ be distinct odd primes, $h = (p-1)/2$ and $k = (q-1)/2$. Consider the
**lattice points** (points with whole-number coordinates) $(x, y)$ with $1 \le x \le h$ and $1 \le y \le k$. There are
$hk$ of them. Draw the diagonal line $y = qx/p$ from the origin to the corner $(p/2, q/2)$. Here is the picture for
$p = 7$, $q = 11$, with $h = 3$ and $k = 5$:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 220 250" role="img" aria-label="Lattice points in a 3 by 5 rectangle split by the diagonal line y = 11x/7: 8 points lie below the line and 7 above">
<rect x="40" y="39" width="112" height="176" fill="none" stroke="currentColor" stroke-opacity="0.4"/>
<line x1="40" y1="215" x2="152" y2="39" stroke="currentColor" stroke-width="1.5"/>
<circle cx="72" cy="183" r="6" fill="#eea66f" stroke="currentColor" stroke-opacity="0.5"/>
<circle cx="72" cy="151" r="6" fill="#9cc9ea" stroke="currentColor" stroke-opacity="0.5"/>
<circle cx="72" cy="119" r="6" fill="#9cc9ea" stroke="currentColor" stroke-opacity="0.5"/>
<circle cx="72" cy="87" r="6" fill="#9cc9ea" stroke="currentColor" stroke-opacity="0.5"/>
<circle cx="72" cy="55" r="6" fill="#9cc9ea" stroke="currentColor" stroke-opacity="0.5"/>
<circle cx="104" cy="183" r="6" fill="#eea66f" stroke="currentColor" stroke-opacity="0.5"/>
<circle cx="104" cy="151" r="6" fill="#eea66f" stroke="currentColor" stroke-opacity="0.5"/>
<circle cx="104" cy="119" r="6" fill="#eea66f" stroke="currentColor" stroke-opacity="0.5"/>
<circle cx="104" cy="87" r="6" fill="#9cc9ea" stroke="currentColor" stroke-opacity="0.5"/>
<circle cx="104" cy="55" r="6" fill="#9cc9ea" stroke="currentColor" stroke-opacity="0.5"/>
<circle cx="136" cy="183" r="6" fill="#eea66f" stroke="currentColor" stroke-opacity="0.5"/>
<circle cx="136" cy="151" r="6" fill="#eea66f" stroke="currentColor" stroke-opacity="0.5"/>
<circle cx="136" cy="119" r="6" fill="#eea66f" stroke="currentColor" stroke-opacity="0.5"/>
<circle cx="136" cy="87" r="6" fill="#eea66f" stroke="currentColor" stroke-opacity="0.5"/>
<circle cx="136" cy="55" r="6" fill="#9cc9ea" stroke="currentColor" stroke-opacity="0.5"/>
<g font-size="11" text-anchor="middle" fill="currentColor">
<text x="40" y="231">0</text>
<text x="72" y="231">1</text>
<text x="104" y="231">2</text>
<text x="136" y="231">3</text>
<text x="164" y="231">7/2</text>
<text x="28" y="187">1</text>
<text x="28" y="155">2</text>
<text x="28" y="123">3</text>
<text x="28" y="91">4</text>
<text x="28" y="59">5</text>
<text x="24" y="43">11/2</text>
<text x="153" y="31">y = 11x/7</text>
</g>
</svg>
</div>

No lattice point lies *on* the line: $y = qx/p$ with $1 \le x \le h < p$ would need $p \mid qx$, impossible. So every
point is strictly below (orange) or strictly above (blue).

- **Below the line.** In the column $x = j$, the points below the line are those with $1 \le y < qj/p$, and there are
  $\lfloor qj/p \rfloor$ of them (and $\lfloor qj/p \rfloor \le k$, since $qj/p < q/2$). Adding over the columns, the
  number of points below is $S(q, p)$. In the picture: $1 + 3 + 4 = 8$.
- **Above the line.** By the same argument with the roles of the axes swapped, in the row $y = i$ the points above the
  line are those with $1 \le x < pi/q$, and there are $\lfloor pi/q \rfloor$ of them. The number of points above is
  $S(p, q)$. In the picture: $0 + 1 + 1 + 2 + 3 = 7$.

Every point is counted exactly once, so

$$
S(q, p) + S(p, q) = hk = \frac{p-1}{2} \cdot \frac{q-1}{2} .
$$

Apply Eisenstein's lemma twice ($p$ and $q$ are odd, so they qualify as $a$):

$$
\left(\frac{q}{p}\right)\left(\frac{p}{q}\right) = (-1)^{S(q,p)}(-1)^{S(p,q)} = (-1)^{\frac{p-1}{2} \cdot \frac{q-1}{2}} . \qquad \square
$$

**Check with the picture.** $8 + 7 = 15 = 3 \cdot 5$, odd, so $\left(\frac{7}{11}\right)\left(\frac{11}{7}\right) =
-1$. Indeed $\left(\frac{11}{7}\right) = \left(\frac{4}{7}\right) = 1$ and $\left(\frac{7}{11}\right) = -1$ (7 is not
among 1, 3, 4, 5, 9). And Eisenstein's lemma alone says $\left(\frac{11}{7}\right) = (-1)^8 = 1$ and
$\left(\frac{7}{11}\right) = (-1)^7 = -1$.

### Using reciprocity

Now any Legendre symbol can be computed by factoring and flipping. Each flip replaces $\left(\frac qp\right)$ by
$\pm\left(\frac pq\right)$, and then $p$ can be reduced mod $q$, which makes the numbers smaller.

**Worked example.** Is 219 a square mod 383? (383 is prime.) Factor $219 = 3 \cdot 73$.

- $\left(\frac{3}{383}\right)$: both 3 and 383 are $\equiv 3 \pmod 4$, so flipping costs a sign:
  $\left(\frac{3}{383}\right) = -\left(\frac{383}{3}\right) = -\left(\frac{2}{3}\right) = -(-1) = 1$.
- $\left(\frac{73}{383}\right)$: $73 \equiv 1 \pmod 4$, so flip freely: $\left(\frac{383}{73}\right) =
  \left(\frac{18}{73}\right) = \left(\frac{2}{73}\right)\left(\frac{9}{73}\right) = 1 \cdot 1 = 1$, since
  $73 \equiv 1 \pmod 8$ and 9 is a square.

So $\left(\frac{219}{383}\right) = 1 \cdot 1 = 1$: yes. **Check:** $219^{191} \bmod 383 = 1$ by Euler's criterion
(Python: `pow(219, 191, 383)`).

**Worked example: for which primes is 3 a square?** For $p > 3$, reciprocity gives $\left(\frac 3p\right) =
(-1)^{(p-1)/2}\left(\frac p3\right)$. The first factor depends on $p \bmod 4$, the second on $p \bmod 3$ ($+1$ if
$p \equiv 1$, $-1$ if $p \equiv 2$). Combining the cases mod 12:

| $p \bmod 12$ | $(-1)^{(p-1)/2}$ | $\left(\frac p3\right)$ | $\left(\frac 3p\right)$ |
|---|---|---|---|
| 1 | $+1$ | $+1$ | $+1$ |
| 5 | $+1$ | $-1$ | $-1$ |
| 7 | $-1$ | $+1$ | $-1$ |
| 11 | $-1$ | $-1$ | $+1$ |

So 3 is a square mod $p$ exactly when $p \equiv \pm 1 \pmod{12}$. Notice what happened: a question about $p$, whose
answer has no visible pattern by Euler's criterion, has an answer that depends only on $p \bmod 12$. That is the
deepest content of reciprocity: **whether a fixed $a$ is a square mod $p$ depends only on $p$ modulo $4a$.** Similarly
$\left(\frac{5}{p}\right) = \left(\frac p5\right)$ is 1 exactly when $p \equiv \pm 1 \pmod 5$, and
$\left(\frac{-3}{p}\right) = 1$ exactly when $p \equiv 1 \pmod 3$.

This form of the law, "the splitting of primes is governed by congruences", is the one that generalises. It became
class field theory and Artin's reciprocity law in the 1920s, and today it is one corner of the Langlands programme
([Chapter 21](21-Where-Number-Theory-Goes.md)).

## 8.5 The Jacobi symbol and computing

*Level: advanced.*

To flip $\left(\frac{a}{p}\right)$ we had to factor $a$ first. For large $a$ that is expensive, and it is unnecessary:
Jacobi's extension of the symbol lets us flip without factoring.

!!! note "Definition"
    Let $n$ be an odd positive integer with prime factorization $n = p_1^{e_1} \cdots p_r^{e_r}$. The **Jacobi symbol** is

    $$
    \left(\frac{a}{n}\right) = \left(\frac{a}{p_1}\right)^{e_1} \cdots \left(\frac{a}{p_r}\right)^{e_r} ,
    $$

    a product of Legendre symbols (and $\left(\frac a1\right) = 1$).

For $n$ prime it is the Legendre symbol. It is multiplicative in both $a$ and $n$, and depends only on $a \bmod n$;
both facts are immediate from the definition.

!!! note "Theorem 8.9 (reciprocity for the Jacobi symbol)"
    For odd positive integers $m, n$ with $\gcd(m, n) = 1$:

    1. $\left(\frac{-1}{n}\right) = (-1)^{(n-1)/2}$,
    2. $\left(\frac{2}{n}\right) = (-1)^{(n^2-1)/8}$,
    3. $\left(\frac{m}{n}\right)\left(\frac{n}{m}\right) = (-1)^{\frac{m-1}{2} \cdot \frac{n-1}{2}}$.

*Proof.* The key is that the exponents behave additively. For odd $a, b$:

$$
\frac{ab - 1}{2} - \left(\frac{a-1}{2} + \frac{b-1}{2}\right) = \frac{(a-1)(b-1)}{2} \equiv 0 \pmod 2 ,
$$

because $(a-1)(b-1)$ is divisible by 4. Similarly $\frac{a^2b^2 - 1}{8} - \frac{a^2-1}{8} - \frac{b^2-1}{8} =
\frac{(a^2-1)(b^2-1)}{8}$, which is even because $a^2 - 1$ and $b^2 - 1$ are each divisible by 8. So the functions
$n \mapsto (-1)^{(n-1)/2}$ and $n \mapsto (-1)^{(n^2-1)/8}$ are multiplicative on odd numbers. Since both sides of (1)
and of (2) are multiplicative in $n$ and agree for primes (Corollary 8.3 and Theorem 8.6), they agree for all odd $n$.

For (3), write $m = \prod q_j$ and $n = \prod p_i$ as products of (not necessarily distinct) odd primes. Then

$$
\left(\frac{m}{n}\right)\left(\frac{n}{m}\right) = \prod_{i, j} \left(\frac{q_j}{p_i}\right)\left(\frac{p_i}{q_j}\right) = (-1)^{\sum_{i,j} \frac{p_i - 1}{2} \cdot \frac{q_j - 1}{2}} = (-1)^{\left(\sum_i \frac{p_i-1}{2}\right)\left(\sum_j \frac{q_j-1}{2}\right)} ,
$$

and by the additivity just proved, $\sum_i \frac{p_i - 1}{2} \equiv \frac{n-1}{2}$ and $\sum_j \frac{q_j - 1}{2} \equiv
\frac{m-1}{2} \pmod 2$. $\square$

**The algorithm.** To compute $\left(\frac an\right)$ for odd $n$: reduce $a$ mod $n$; pull out factors of 2 using (2);
if what remains is odd, flip using (3) and repeat. It is the Euclidean algorithm with signs attached, and it never
factors anything. For numbers with hundreds of digits it takes a fraction of a millisecond.

**Worked example.** Compute $\left(\frac{1001}{9907}\right)$ (9907 is prime, but we will not need that).

- $1001 \equiv 1 \pmod 4$, flip: $\left(\frac{9907}{1001}\right) = \left(\frac{898}{1001}\right)$, since $9907 - 9 \cdot
  1001 = 898$.
- $898 = 2 \cdot 449$, and $1001 \equiv 1 \pmod 8$ so $\left(\frac{2}{1001}\right) = 1$: we get
  $\left(\frac{449}{1001}\right)$.
- $449 \equiv 1 \pmod 4$, flip: $\left(\frac{1001}{449}\right) = \left(\frac{103}{449}\right)$.
- $449 \equiv 1 \pmod 4$, flip: $\left(\frac{449}{103}\right) = \left(\frac{37}{103}\right)$ (since $449 - 4 \cdot 103 =
  37$).
- $37 \equiv 1 \pmod 4$, flip: $\left(\frac{103}{37}\right) = \left(\frac{29}{37}\right)$, then flip again ($29 \equiv
  1$): $\left(\frac{37}{29}\right) = \left(\frac{8}{29}\right) = \left(\frac{2}{29}\right)^3$.
- $29 \equiv 5 \pmod 8$, so $\left(\frac{2}{29}\right) = -1$ and the answer is $-1$.

So 1001 is not a square mod 9907. **Check:** $1001 = 7 \cdot 11 \cdot 13$ and by Euler's criterion
$1001^{4953} \equiv -1 \pmod{9907}$.

!!! tip "Try it in Python"
    ```python
    def jacobi(a, n):
        """Jacobi symbol (a/n) for odd n > 0."""
        assert n > 0 and n % 2 == 1
        a, result = a % n, 1
        while a:
            while a % 2 == 0:              # pull out factors of 2
                a //= 2
                if n % 8 in (3, 5):
                    result = -result
            a, n = n, a                    # flip
            if a % 4 == 3 and n % 4 == 3:
                result = -result
            a %= n
        return result if n == 1 else 0

    print(jacobi(219, 383), jacobi(1001, 9907), jacobi(2, 15))   # 1 -1 1
    ```

!!! warning "A Jacobi symbol of 1 does not mean a square"
    For a prime $n$ the symbol answers the question exactly. For composite $n$ it does not:
    $\left(\frac{2}{15}\right) = \left(\frac 23\right)\left(\frac 25\right) = (-1)(-1) = 1$, but the squares mod 15 are
    0, 1, 4, 6, 9, 10, and 2 is not among them. What *is* true: if $\left(\frac an\right) = -1$, then $a$ is certainly
    not a square mod $n$ (it fails to be a square mod some prime factor).

**Solovay-Strassen.** For a prime $p$, Euler's criterion says $a^{(p-1)/2} \equiv \left(\frac ap\right)$. For an odd
composite $n$, one can prove that the congruence $a^{(n-1)/2} \equiv \left(\frac an\right) \pmod n$ fails for at least
half of the $a$ coprime to $n$. Since both sides are fast to compute (the left by square-and-multiply, the right by the
Jacobi algorithm, without factoring $n$), testing random $a$ gives a probabilistic primality test: Solovay and Strassen,
1977. It has since been overtaken by the Miller-Rabin test ([Chapter 12](12-Primality-Factoring-and-RSA.md)), but it
was one of the first randomized algorithms to be widely studied.

### Finding the square root

Knowing that $a$ is a square mod $p$ is not the same as knowing the root. For half of the primes the root has a
formula.

!!! note "Theorem 8.10"
    If $p \equiv 3 \pmod 4$ and $a$ is a quadratic residue mod $p$, then $x = a^{(p+1)/4}$ satisfies $x^2 \equiv a$.

*Proof.* $(p+1)/4$ is a whole number because $p \equiv 3 \pmod 4$. Then $x^2 = a^{(p+1)/2} = a \cdot a^{(p-1)/2} \equiv
a \cdot 1$ by Euler's criterion. $\square$

**Worked example.** $p = 11$, $a = 5$: $x = 5^3 = 125 \equiv 4$, and $4^2 = 16 \equiv 5$. The other root is $-4 \equiv
7$.

For $p \equiv 1 \pmod 4$ there is no such single power, but there are fast algorithms: Tonelli's (1891), rediscovered
and improved by Shanks, and Cipolla's (1903). Both need a nonresidue to start, which a random choice finds with
probability 1/2. Curiously, nobody has proved that a *deterministic* search finds a nonresidue quickly without assuming
the generalised Riemann hypothesis (under it, Ankeny and Bach showed the least nonresidue is below $2(\log p)^2$).

Square roots mod a composite $n = pq$ are different again. With $p$ and $q$ known, take roots mod each and glue them by
the CRT, getting four roots. Without the factors, finding square roots mod $n$ is as hard as factoring $n$
([Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md)). This is the basis of the Rabin
cryptosystem.

## 8.6 History: Euler, Legendre and Gauss

Fermat, in the 1640s and 1650s, stated (without proof) which primes are sums of two squares and related facts; these
are really statements about when $-1$ and $-2$ are squares mod $p$ ([Chapter 11](11-Sums-of-Squares.md)). Euler spent
decades proving Fermat's claims and testing generalisations on large tables. By the 1740s he had found empirical rules
for when small numbers like 3 and 5 are squares mod $p$, and in a paper published in 1783, the year of his death, he
stated a form of the general law, in terms of whether $p$ is a square mod $q$ depending on $q$ modulo $4p$. He had no
proof.

Legendre stated the law in the symmetric form of Theorem 8.7 in 1785, and in his *Essai sur la théorie des nombres*
(1798) he introduced the symbol that bears his name. His attempted proofs were incomplete: they assumed, among other
things, that there are primes in certain arithmetic progressions, which was only proved by Dirichlet in 1837
([Chapter 15](15-Primes-in-Progressions.md)).

Carl Friedrich Gauss rediscovered the law on his own as a teenager, and found the first complete proof in April 1796,
when he was eighteen. He published it, with a second proof, in the *Disquisitiones Arithmeticae* of 1801, where he
called it the *theorema fundamentale*; in his notes he called it the *theorema aureum*, the golden theorem. He kept
returning to it and found eight proofs in all, six published in his lifetime and two found in his papers, partly
because he hoped each new proof would point toward reciprocity laws for cubes and fourth powers. It did: Gauss, Jacobi
and Eisenstein went on to cubic and biquadratic reciprocity.

Gauss's lemma comes from his third proof (1808). Ferdinand Eisenstein turned it into the lattice-point proof of 8.4 in
1844. Jacobi introduced his symbol in 1837. Since then the law has been proved many more times; Franz Lemmermeyer's
book (2000) and his online list catalogue well over two hundred published proofs, using ideas from counting, Gauss
sums, cyclotomic fields, finite fields and more. It may be the most often proved theorem after Pythagoras's.

## Check yourself

??? question "1. List the quadratic residues mod 17."

    The squares of 1 to 8 mod 17: 1, 4, 9, 16, 25 ≡ 8, 36 ≡ 2, 49 ≡ 15, 64 ≡ 13. So the residues are 1, 2, 4, 8, 9,
    13, 15, 16, which is $(17-1)/2 = 8$ of them.

??? question "2. Use Euler's criterion to decide whether 3 is a square mod 13, and if so find a root."

    $3^6 = 729 = 56 \cdot 13 + 1$, so yes. Searching the residues from 8.1: $4^2 = 16 \equiv 3$. The roots are 4 and 9.

??? question "3. Use Gauss's lemma to compute $\left(\frac{3}{7}\right)$."

    $h = 3$. The multiples 3, 6, 9 reduce to 3, 6, 2. Only 6 is in the large half $\{4, 5, 6\}$, so $n = 1$ and the
    symbol is $-1$. Check: the squares mod 7 are 1, 2, 4.

??? question "4. Is 2 a square mod 41? Mod 43?"

    $41 \equiv 1 \pmod 8$, so yes ($17^2 = 289 = 7 \cdot 41 + 2$). $43 \equiv 3 \pmod 8$, so no.

??? question "5. Solve $x^2 + 3x + 7 \equiv 0 \pmod{11}$ and $x^2 + x + 1 \equiv 0 \pmod{13}$."

    The first was done in 8.1: $x \equiv 1, 7$. For the second, $D = 1 - 4 = -3$, and $\left(\frac{-3}{13}\right) = 1$
    since $13 \equiv 1 \pmod 3$; indeed $6^2 = 36 \equiv 10 \equiv -3$. So $x \equiv (-1 \pm 6) \cdot 2^{-1}$, with
    $2^{-1} \equiv 7$: $x \equiv 5 \cdot 7 = 35 \equiv 9$ or $x \equiv -7 \cdot 7 = -49 \equiv 3$. Check: $9 + 3 + 1 = 13$
    and $81 + 9 + 1 = 91 = 7 \cdot 13$.

??? question "6. Compute $\left(\frac{219}{383}\right)$ using the Jacobi symbol, without factoring 219."

    $219 \equiv 3$, $383 \equiv 3 \pmod 4$: $\left(\frac{219}{383}\right) = -\left(\frac{383}{219}\right) =
    -\left(\frac{164}{219}\right) = -\left(\frac{4}{219}\right)\left(\frac{41}{219}\right) = -\left(\frac{41}{219}\right)$.
    $41 \equiv 1 \pmod 4$: $= -\left(\frac{219}{41}\right) = -\left(\frac{14}{41}\right) = -\left(\frac{2}{41}\right)
    \left(\frac{7}{41}\right) = -\left(\frac{7}{41}\right)$. Flip ($41 \equiv 1$): $-\left(\frac{41}{7}\right) =
    -\left(\frac{6}{7}\right) = -\left(\frac{-1}{7}\right) = -(-1) = 1$. Same answer as in 8.4.

??? question "7. For which primes $p$ is $5$ a quadratic residue?"

    $5 \equiv 1 \pmod 4$, so $\left(\frac 5p\right) = \left(\frac p5\right)$, which is 1 iff $p \equiv 1$ or $4 \pmod
    5$, i.e. $p \equiv \pm 1 \pmod 5$. (For $p = 2$ the question is trivial: every odd number is a square mod 2.)
    Example: $p = 11$, $4^2 = 16 \equiv 5$.

??? question "8. Show that $\left(\frac{2}{15}\right) = 1$ but 2 is not a square mod 15."

    $\left(\frac 23\right) = -1$ and $\left(\frac 25\right) = -1$, product 1. But a square mod 15 would be a square mod
    3, and 2 is not a square mod 3 ($1^2 = 1$, $2^2 \equiv 1$).

??? question "9. Prove that $\left(\frac{-3}{p}\right) = 1$ if and only if $p \equiv 1 \pmod 3$, for primes $p > 3$."

    $\left(\frac{-3}{p}\right) = \left(\frac{-1}{p}\right)\left(\frac 3p\right) = (-1)^{(p-1)/2} \cdot
    (-1)^{(p-1)/2}\left(\frac p3\right) = \left(\frac p3\right)$, using reciprocity for $\left(\frac 3p\right)$ (the
    exponent $\frac{p-1}{2} \cdot 1$). And $\left(\frac p3\right) = 1$ iff $p \equiv 1 \pmod 3$.

??? question "10. Prove that every odd prime divisor $p$ of $n^4 + 1$ satisfies $p \equiv 1 \pmod 8$. Check on $n = 3$."

    $n^4 \equiv -1$ so $n^8 \equiv 1$, and $n^4 \not\equiv 1$ (as $p > 2$). So $\operatorname{ord}_p(n)$ divides 8 but
    not 4: it is 8. By [Chapter 7](07-Primitive-Roots.md), $8 \mid p - 1$. For $n = 3$: $82 = 2 \cdot 41$ and
    $41 = 5 \cdot 8 + 1$. (With Theorem 8.4's trick this gives infinitely many primes $\equiv 1 \pmod 8$.)

??? question "11. Show that if $p \equiv 3 \pmod 4$ is prime and $q = 2p + 1$ is prime, then $q \mid 2^p - 1$. Find a factor of $2^{23} - 1$."

    $q = 2p + 1 \equiv 7 \pmod 8$, so $\left(\frac 2q\right) = 1$, and Euler's criterion gives $2^{(q-1)/2} = 2^p
    \equiv 1 \pmod q$. For $p = 23$: $q = 47$ is prime, so $47 \mid 2^{23} - 1 = 8\,388\,607 = 47 \cdot 178\,481$.

??? question "12. Use the lattice-point count to compute $\left(\frac{5}{13}\right)\left(\frac{13}{5}\right)$, and compute $S(5, 13)$ directly."

    $h = 6$, $k = 2$, so there are 12 points; the product is $(-1)^{12} = 1$. Directly, $S(5, 13) = \sum_{j=1}^{6}
    \lfloor 5j/13 \rfloor = 0 + 0 + 1 + 1 + 1 + 2 = 5$, so $\left(\frac{5}{13}\right) = (-1)^5 = -1$ (as in 8.3), and
    then $\left(\frac{13}{5}\right) = \left(\frac 35\right) = -1$ too: the product is 1.

## What you learned

- Mod an odd prime exactly half of the nonzero remainders are squares; a quadratic congruence is solvable exactly when
  its discriminant is a square.
- The Legendre symbol $\left(\frac ap\right)$ records the answer, is multiplicative in $a$, and equals $a^{(p-1)/2}$ mod
  $p$ (Euler's criterion).
- $-1$ is a square mod $p$ iff $p \equiv 1 \pmod 4$; $2$ is a square iff $p \equiv \pm 1 \pmod 8$ (via Gauss's lemma).
- Quadratic reciprocity: $\left(\frac pq\right)\left(\frac qp\right) = (-1)^{\frac{p-1}{2}\frac{q-1}{2}}$, proved by
  splitting the lattice points of a rectangle by its diagonal.
- Whether a fixed $a$ is a square mod $p$ depends only on $p$ mod $4a$, the seed of class field theory.
- The Jacobi symbol computes Legendre symbols like Euclid's algorithm, without factoring, but a value of 1 does not
  prove a square mod a composite.
- For $p \equiv 3 \pmod 4$, square roots are $a^{(p+1)/4}$; in general Tonelli-Shanks or Cipolla finds them quickly.

**Next:** [Chapter 9](09-Diophantine-Equations.md), equations to be solved in whole numbers, from Pythagorean triples to
Hilbert's tenth problem.

## Further reading

- C. F. Gauss, *Disquisitiones Arithmeticae*, 1801 (English translation by A. A. Clarke, 1966). Section IV is on
  quadratic residues and reciprocity.
- K. Ireland and M. Rosen, *A Classical Introduction to Modern Number Theory*, 2nd edition, 1990. Chapter 5 (two
  proofs of reciprocity) and Chapter 6 (Gauss sums).
- G. H. Hardy and E. M. Wright, *An Introduction to the Theory of Numbers*, 6th edition, 2008. Chapter 6.
- F. Lemmermeyer, *Reciprocity Laws: From Euler to Eisenstein*, 2000. The history and many proofs.
- D. A. Cox, *Primes of the Form $x^2 + ny^2$*, 2nd edition, 2013. Where reciprocity leads: genus theory and class field
  theory.
- R. Solovay and V. Strassen, "A fast Monte-Carlo test for primality", *SIAM Journal on Computing* 6, 1977.
- On this site: [Quadratic residues](../../topics/number-theory/level-8/06-quadratic-residues.md),
  [Sums of two squares](../../topics/number-theory/level-7/06-sums-two-squares.md),
  [Fermat's little theorem](../../topics/number-theory/level-7/01-fermats-little-theorem.md),
  [Algebra, Chapter 18: Factorization in rings](../algebra/18-Factorization-in-Rings.md),
  [Algebra, Chapter 19: Fields and extensions](../algebra/19-Fields-and-Extensions.md).
- Square roots and Legendre symbols in cryptography: [cryptography.akadian.ca/book, chapter 3](https://cryptography.akadian.ca/book/03-The-Arithmetic-of-Secrets/).
