# 11. Sums of squares

*Which whole numbers can be written as a sum of two squares? $5 = 1^2 + 2^2$ and $13 = 2^2 + 3^2$ can, but $3$, $7$
and $21$ cannot, however hard you try. Fermat claimed the answer in 1640 without proof; it took Euler years to prove
it, and in 1990 Don Zagier gave a proof in a single sentence. This chapter proves exactly which numbers are sums of
two squares, three different ways, explains the answer through the Gaussian integers, states Legendre's rule for
three squares, proves Lagrange's theorem that every number is a sum of four squares, and ends with Waring's problem:
the same question for cubes, fourth powers and beyond.*

!!! abstract "In this chapter"
    **You will learn:**

    - why a prime $p$ is a sum of two squares exactly when $p = 2$ or $p \equiv 1 \pmod 4$, with a pigeonhole proof and Zagier's one-sentence proof
    - the complete rule for which numbers are sums of two squares, and how many ways (Jacobi's formula $4(d_1 - d_3)$)
    - how the Gaussian integers $\mathbb{Z}[i]$ make the whole story look inevitable
    - Legendre's three-square theorem (statement, the easy half proved) and Gauss's theorem on triangular numbers
    - Lagrange's four-square theorem, with Euler's identity and a full proof by descent
    - Waring's problem: $g(k)$ and $G(k)$, what is proved and what is open

    **You need:** [Chapter 2](02-Primes-and-Unique-Factorization.md) (unique factorization),
    [Chapter 4](04-Congruences.md) and [Chapter 5](05-Fermat-Euler-and-Wilson.md) (congruences, Fermat's little
    theorem, Wilson's theorem), and for 11.2 the idea of a ring ([Algebra, chapter 17](../algebra/17-Rings-and-Ideals.md)).
    [Chapter 8](08-Quadratic-Residues-and-Reciprocity.md) gives a second view of the key step (when $-1$ is a square).
    For a gentler start, see the Topics lessons
    [Sums of two squares](../../topics/number-theory/level-7/06-sums-two-squares.md) and
    [Pythagorean triples](../../topics/number-theory/level-7/05-pythagorean-triples.md).

    **Levels:** 11.1 is intermediate to advanced (full proofs); 11.2 is advanced; 11.3 is advanced (half proved,
    half stated); 11.4 is advanced (full proof); 11.5 is expert background with one proof.

## 11.1 Which numbers are sums of two squares?

*Level: intermediate to advanced.*

### Collecting data

Here are the numbers up to 60 that can be written as $a^2 + b^2$ with whole numbers $a, b \geq 0$:

$$
1, 2, 4, 5, 8, 9, 10, 13, 16, 17, 18, 20, 25, 26, 29, 32, 34, 36, 37, 40, 41, 45, 49, 50, 52, 53, 58 .
$$

Look first at the primes in the list: $2, 5, 13, 17, 29, 37, 41, 53$. Apart from 2, each leaves remainder 1 when
divided by 4. The primes that are missing, $3, 7, 11, 19, 23, 31, 43, 47, 59$, all leave remainder 3. Look next at
the composite numbers that are missing: $6, 12, 14, 15, 21, 22, 24, 27, 28, 30, 33, \dots$. Each has a prime factor
of the form $4k + 3$ appearing to an odd power: $21 = 3 \cdot 7$, $27 = 3^3$, $33 = 3 \cdot 11$. Meanwhile
$9 = 3^2 = 3^2 + 0^2$ and $45 = 3^2 \cdot 5 = 6^2 + 3^2$ are in the list. This chapter's first goal is to prove that
this is the whole story.

### Two easy facts

**Fact 1 (no prime $4k + 3$).** A square leaves remainder 0 or 1 when divided by 4 (since $(2m)^2 = 4m^2$ and
$(2m+1)^2 = 4(m^2 + m) + 1$). So a sum of two squares leaves remainder 0, 1 or 2, never 3. In particular **no number
of the form $4k + 3$ is a sum of two squares.**

**Fact 2 (products).** For any numbers,

$$
(a^2 + b^2)(c^2 + d^2) = (ac - bd)^2 + (ad + bc)^2 .
$$

*Proof.* Expand both sides: each is $a^2c^2 + a^2d^2 + b^2c^2 + b^2d^2$ (the cross terms $\mp 2abcd$ cancel on the
right). $\square$

This identity appears in Diophantus's *Arithmetica*, and in general form in the work of Brahmagupta (seventh
century) and of Fibonacci (1225); it is usually called the **Brahmagupta–Fibonacci identity**. It says that the
product of two sums of two squares is again a sum of two squares. For example, $5 = 1^2 + 2^2$ and $13 = 2^2 + 3^2$
give $65 = (2 - 6)^2 + (3 + 4)^2 = 4^2 + 7^2$, and swapping the sign ($ac + bd$, $ad - bc$) gives the second
representation $65 = 8^2 + 1^2$.

So the whole problem reduces to primes. We need two things: every prime $p \equiv 1 \pmod 4$ *is* a sum of two
squares, and primes $q \equiv 3 \pmod 4$ can only enter in pairs.

**Lemma 11.1.** Let $q$ be a prime with $q \equiv 3 \pmod 4$. If $q$ divides $x^2 + y^2$, then $q$ divides both
$x$ and $y$.

*Proof.* Suppose $q \nmid x$. Then $x$ has an inverse $\bar x$ modulo $q$ ([Chapter 4](04-Congruences.md)), and
$z = y \bar x$ satisfies $z^2 \equiv -1 \pmod q$ (multiply $x^2 + y^2 \equiv 0$ by $\bar x^2$). Then $q \nmid z$,
and raising to the power $(q - 1)/2$, which is odd because $q = 4k + 3$ gives $(q - 1)/2 = 2k + 1$:

$$
z^{q-1} = (z^2)^{(q-1)/2} \equiv (-1)^{2k+1} = -1 \pmod q .
$$

But Fermat's little theorem says $z^{q-1} \equiv 1$. So $1 \equiv -1$, that is $q \mid 2$, impossible. Hence
$q \mid x$, and then $q \mid y^2$, so $q \mid y$. $\square$

In the language of [Chapter 8](08-Quadratic-Residues-and-Reciprocity.md): $-1$ is a quadratic non-residue modulo
$q$ when $q \equiv 3 \pmod 4$. The proof above is Euler's criterion in disguise.

### Fermat's two-square theorem

**Theorem 11.2 (Fermat's two-square theorem).** An odd prime $p$ is a sum of two squares if and only if
$p \equiv 1 \pmod 4$.

Fact 1 gives "only if". For "if" we give two proofs. Both start from the same question: is $-1$ a square modulo $p$?

**Lemma 11.3.** If $p \equiv 1 \pmod 4$, there is a whole number $m$ with $m^2 \equiv -1 \pmod p$. One choice is
$m = \left(\tfrac{p-1}{2}\right)!$.

*Proof.* Wilson's theorem ([Chapter 5](05-Fermat-Euler-and-Wilson.md)) says $(p-1)! \equiv -1 \pmod p$. Pair each
factor $j$ in the second half, $\tfrac{p+1}{2} \leq j \leq p - 1$, with $p - j$ in the first half: $j \equiv -(p - j)$.
So

$$
(p-1)! \equiv \left(\tfrac{p-1}{2}\right)! \cdot (-1)^{(p-1)/2} \left(\tfrac{p-1}{2}\right)! \pmod p .
$$

Since $p = 4k + 1$, the exponent $(p-1)/2 = 2k$ is even, so $-1 \equiv (p-1)! \equiv m^2$. $\square$

Check with $p = 13$: $6! = 720 = 55 \cdot 13 + 5$, so $m \equiv 5$, and $5^2 = 25 = 2 \cdot 13 - 1 \equiv -1$.

*First proof of Theorem 11.2 (by pigeonholes; the idea goes back to Thue, 1902).* Let $m^2 \equiv -1 \pmod p$ and
let $s = \lfloor \sqrt p \rfloor$, so $s < \sqrt p < s + 1$ ($p$ is not a square). Consider the numbers $a - mb$ for
$0 \leq a, b \leq s$. There are $(s + 1)^2 > p$ of them, so two of them are congruent modulo $p$:
$a - mb \equiv a' - mb'$ with $(a, b) \neq (a', b')$. Put $x = a - a'$ and $y = b - b'$. Then $x \equiv my \pmod p$,
$|x| \leq s$, $|y| \leq s$, and $x, y$ are not both 0. Now

$$
x^2 + y^2 \equiv m^2 y^2 + y^2 = (m^2 + 1) y^2 \equiv 0 \pmod p, \qquad 0 < x^2 + y^2 \leq 2s^2 < 2p .
$$

The only multiple of $p$ strictly between 0 and $2p$ is $p$ itself. So $p = x^2 + y^2$. $\square$

**Worked example ($p = 13$, $m = 5$, $s = 3$).** We need $x \equiv 5y \pmod{13}$ with $|x|, |y| \leq 3$. Try
$y = 1$: $x \equiv 5$, too big; $x \equiv 5 - 13 = -8$, too big. $y = 2$: $x \equiv 10 \equiv -3$. So $x = -3$,
$y = 2$, and $9 + 4 = 13$. Check: $3^2 + 2^2 = 13$.

!!! note "Finding the squares fast"
    For a large prime there is a much faster way than searching, found by Hermite and by Serret in 1848: run
    Euclid's algorithm on $p$ and $m$ (with $m^2 \equiv -1$, $0 < m < p/2$) and stop at the first two remainders
    smaller than $\sqrt p$. Their squares add up to $p$. For $p = 29$, $m = 12$: $29 = 2 \cdot 12 + 5$,
    $12 = 2 \cdot 5 + 2$, and the first remainders below $\sqrt{29} \approx 5.39$ are 5 and 2: $25 + 4 = 29$.
    For $p = 97$, $m = 22$: remainders $9, 4, \dots$, and $81 + 16 = 97$. (Proving this works is a nice exercise in
    continued fractions, [Chapter 10](10-Continued-Fractions.md).)

### Zagier's one-sentence proof

In 1990 Don Zagier published a paper titled "A one-sentence proof that every prime $p \equiv 1 \pmod 4$ is a sum
of two squares" in the *American Mathematical Monthly*. He credited the idea to a proof of Roger Heath-Brown (1984),
which in turn went back to Liouville. Here is the sentence, then an explanation.

> The involution on the finite set $S = \{(x, y, z) \in \mathbb{N}^3 : x^2 + 4yz = p\}$ defined by
>
> $(x, y, z) \mapsto (x + 2z,\; z,\; y - x - z)$ if $x < y - z$,
>
> $(x, y, z) \mapsto (2y - x,\; y,\; x - y + z)$ if $y - z < x < 2y$,
>
> $(x, y, z) \mapsto (x - 2y,\; x - y + z,\; y)$ if $x > 2y$
>
> has exactly one fixed point, so $|S|$ is odd and the involution defined by $(x, y, z) \mapsto (x, z, y)$ also has
> a fixed point.

Here $\mathbb{N}$ means the positive whole numbers. Let us unpack it.

**What is an involution?** A map $f$ from a set to itself with $f(f(s)) = s$ for every $s$. It splits the set into
pairs $\{s, f(s)\}$ with $s \neq f(s)$, plus the **fixed points** where $f(s) = s$. So: *if a finite set has an
involution, the number of elements and the number of fixed points have the same parity* (both even or both odd).

**The set.** $S$ is the set of triples of positive whole numbers with $x^2 + 4yz = p$. It is finite because each
of $x, y, z$ is less than $p$. It is not empty: $p = 4k + 1$ gives $(1, 1, k) \in S$.

**The easy involution.** Swapping $y$ and $z$, $(x, y, z) \mapsto (x, z, y)$, is obviously an involution of $S$.
Its fixed points have $y = z$, and then $p = x^2 + 4y^2 = x^2 + (2y)^2$. **So it suffices to show $|S|$ is odd.**

**The clever involution.** Call Zagier's map $g$. Three things need checking.

1. *The cases cover everything.* The boundary cases $x = y - z$ and $x = 2y$ never happen: $x = y - z$ would give
   $p = (y - z)^2 + 4yz = (y + z)^2$, a square; $x = 2y$ would give $p = 4y^2 + 4yz = 4y(y + z)$, even.
2. *$g$ maps $S$ to $S$.* All three outputs are positive in their own case, and the equation is preserved. For the
   first case, $(x + 2z)^2 + 4z(y - x - z) = x^2 + 4xz + 4z^2 + 4yz - 4xz - 4z^2 = x^2 + 4yz$. The other two cases
   are the same kind of one-line expansion.
3. *$g$ is an involution.* Apply $g$ to the output of the first case, $(x', y', z') = (x + 2z, z, y - x - z)$: here
   $x' = x + 2z > 2z = 2y'$, so the third rule applies and gives $(x' - 2y', x' - y' + z', y') = (x, y, z)$. In the
   same way the third case is undone by the first, and the middle case is undone by itself.

**The fixed points of $g$.** In the first and third cases, $g$ changes $x$ (it adds $2z > 0$, or subtracts
$2y > 0$), so there are no fixed points there. In the middle case, $g(x, y, z) = (x, y, z)$ means $2y - x = x$, that
is $x = y$. Then $p = x^2 + 4xz = x(x + 4z)$; since $p$ is prime, $x = 1$, and $z = (p - 1)/4$. So the *only* fixed
point is $(1, 1, k)$, and it really is fixed (check: $y - z = 1 - k < 1 < 2$, middle case, output $(1, 1, k)$).

One fixed point, so $|S|$ is odd, so the swap has a fixed point, so $p$ is a sum of two squares. $\square$

**Worked example ($p = 13$).** $S = \{(1, 1, 3), (1, 3, 1), (3, 1, 1)\}$: three elements, odd. Zagier's map fixes
$(1, 1, 3)$ and swaps the other two: $(1, 3, 1)$ is in the first case ($1 < 3 - 1$) and goes to
$(1 + 2, 1, 3 - 1 - 1) = (3, 1, 1)$. The swap $y \leftrightarrow z$ fixes $(3, 1, 1)$, which gives
$13 = 3^2 + (2 \cdot 1)^2 = 9 + 4$.

The proof is non-constructive: it tells you a representation exists, not how to find it. Where do the strange
formulas come from? A good way to see them is as a cutting of a "windmill" shape made of a square of side $x$ and four
$y \times z$ rectangles, whose total area is $x^2 + 4yz = p$; Zagier's map re-cuts the same windmill around a
different central square. This picture is due to Alexander Spivak and is worth looking up.

### The complete answer

**Theorem 11.4.** A positive whole number $n$ is a sum of two squares if and only if every prime $q \equiv 3 \pmod 4$
appears in the prime factorization of $n$ with an even exponent.

*Proof.* *If.* Write $n = 2^a \cdot \prod p_i^{b_i} \cdot \prod q_j^{2c_j}$ with $p_i \equiv 1$ and $q_j \equiv 3
\pmod 4$. Each factor is a sum of two squares: $2 = 1^2 + 1^2$, each $p_i$ by Theorem 11.2, and
$q_j^{2c_j} = (q_j^{c_j})^2 + 0^2$. By Fact 2, so is the product.

*Only if.* Suppose $n = x^2 + y^2$ and $q \equiv 3 \pmod 4$ divides $n$ exactly $e$ times with $e$ odd. By Lemma 11.1,
$q \mid x$ and $q \mid y$, so $q^2 \mid n$ and $n/q^2 = (x/q)^2 + (y/q)^2$ is a smaller sum of two squares in which $q$
appears $e - 2$ times, still odd. Repeating, we reach a sum of two squares divisible by $q$ exactly once, which
Lemma 11.1 forbids. $\square$

Check: $45 = 3^2 \cdot 5$ (exponent of 3 is even) is $36 + 9$; $63 = 3^2 \cdot 7$ (exponent of 7 is odd) is not a
sum of two squares; $1105 = 5 \cdot 13 \cdot 17$ is, in four different ways:
$1105 = 4^2 + 33^2 = 9^2 + 32^2 = 12^2 + 31^2 = 23^2 + 24^2$.

### How many ways?

Count all pairs of integers, with signs and order: let $r_2(n)$ be the number of $(a, b) \in \mathbb{Z}^2$ with
$a^2 + b^2 = n$. For example $r_2(5) = 8$: $(\pm 1, \pm 2)$ and $(\pm 2, \pm 1)$. Geometrically, $r_2(n)$ is the
number of points with whole-number coordinates on the circle of radius $\sqrt n$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 300" role="img" aria-label="The circle of radius 5 centred at the origin passes through exactly twelve points with whole-number coordinates: (plus or minus 5, 0), (0, plus or minus 5), (plus or minus 3, plus or minus 4) and (plus or minus 4, plus or minus 3).">
  <line x1="20" y1="150" x2="280" y2="150" stroke="currentColor" stroke-width="1"/>
  <line x1="150" y1="20" x2="150" y2="280" stroke="currentColor" stroke-width="1"/>
  <circle cx="150" cy="150" r="120" fill="none" stroke="#9cc9ea" stroke-width="2"/>
  <g fill="currentColor" fill-opacity="0.5"><circle cx="30" cy="270" r="1.6"/><circle cx="30" cy="246" r="1.6"/><circle cx="30" cy="222" r="1.6"/><circle cx="30" cy="198" r="1.6"/><circle cx="30" cy="174" r="1.6"/><circle cx="30" cy="126" r="1.6"/><circle cx="30" cy="102" r="1.6"/><circle cx="30" cy="78" r="1.6"/><circle cx="30" cy="54" r="1.6"/><circle cx="30" cy="30" r="1.6"/><circle cx="54" cy="270" r="1.6"/><circle cx="54" cy="246" r="1.6"/><circle cx="54" cy="198" r="1.6"/><circle cx="54" cy="174" r="1.6"/><circle cx="54" cy="150" r="1.6"/><circle cx="54" cy="126" r="1.6"/><circle cx="54" cy="102" r="1.6"/><circle cx="54" cy="54" r="1.6"/><circle cx="54" cy="30" r="1.6"/><circle cx="78" cy="270" r="1.6"/><circle cx="78" cy="222" r="1.6"/><circle cx="78" cy="198" r="1.6"/><circle cx="78" cy="174" r="1.6"/><circle cx="78" cy="150" r="1.6"/><circle cx="78" cy="126" r="1.6"/><circle cx="78" cy="102" r="1.6"/><circle cx="78" cy="78" r="1.6"/><circle cx="78" cy="30" r="1.6"/><circle cx="102" cy="270" r="1.6"/><circle cx="102" cy="246" r="1.6"/><circle cx="102" cy="222" r="1.6"/><circle cx="102" cy="198" r="1.6"/><circle cx="102" cy="174" r="1.6"/><circle cx="102" cy="150" r="1.6"/><circle cx="102" cy="126" r="1.6"/><circle cx="102" cy="102" r="1.6"/><circle cx="102" cy="78" r="1.6"/><circle cx="102" cy="54" r="1.6"/><circle cx="102" cy="30" r="1.6"/><circle cx="126" cy="270" r="1.6"/><circle cx="126" cy="246" r="1.6"/><circle cx="126" cy="222" r="1.6"/><circle cx="126" cy="198" r="1.6"/><circle cx="126" cy="174" r="1.6"/><circle cx="126" cy="150" r="1.6"/><circle cx="126" cy="126" r="1.6"/><circle cx="126" cy="102" r="1.6"/><circle cx="126" cy="78" r="1.6"/><circle cx="126" cy="54" r="1.6"/><circle cx="126" cy="30" r="1.6"/><circle cx="150" cy="246" r="1.6"/><circle cx="150" cy="222" r="1.6"/><circle cx="150" cy="198" r="1.6"/><circle cx="150" cy="174" r="1.6"/><circle cx="150" cy="150" r="1.6"/><circle cx="150" cy="126" r="1.6"/><circle cx="150" cy="102" r="1.6"/><circle cx="150" cy="78" r="1.6"/><circle cx="150" cy="54" r="1.6"/><circle cx="174" cy="270" r="1.6"/><circle cx="174" cy="246" r="1.6"/><circle cx="174" cy="222" r="1.6"/><circle cx="174" cy="198" r="1.6"/><circle cx="174" cy="174" r="1.6"/><circle cx="174" cy="150" r="1.6"/><circle cx="174" cy="126" r="1.6"/><circle cx="174" cy="102" r="1.6"/><circle cx="174" cy="78" r="1.6"/><circle cx="174" cy="54" r="1.6"/><circle cx="174" cy="30" r="1.6"/><circle cx="198" cy="270" r="1.6"/><circle cx="198" cy="246" r="1.6"/><circle cx="198" cy="222" r="1.6"/><circle cx="198" cy="198" r="1.6"/><circle cx="198" cy="174" r="1.6"/><circle cx="198" cy="150" r="1.6"/><circle cx="198" cy="126" r="1.6"/><circle cx="198" cy="102" r="1.6"/><circle cx="198" cy="78" r="1.6"/><circle cx="198" cy="54" r="1.6"/><circle cx="198" cy="30" r="1.6"/><circle cx="222" cy="270" r="1.6"/><circle cx="222" cy="222" r="1.6"/><circle cx="222" cy="198" r="1.6"/><circle cx="222" cy="174" r="1.6"/><circle cx="222" cy="150" r="1.6"/><circle cx="222" cy="126" r="1.6"/><circle cx="222" cy="102" r="1.6"/><circle cx="222" cy="78" r="1.6"/><circle cx="222" cy="30" r="1.6"/><circle cx="246" cy="270" r="1.6"/><circle cx="246" cy="246" r="1.6"/><circle cx="246" cy="198" r="1.6"/><circle cx="246" cy="174" r="1.6"/><circle cx="246" cy="150" r="1.6"/><circle cx="246" cy="126" r="1.6"/><circle cx="246" cy="102" r="1.6"/><circle cx="246" cy="54" r="1.6"/><circle cx="246" cy="30" r="1.6"/><circle cx="270" cy="270" r="1.6"/><circle cx="270" cy="246" r="1.6"/><circle cx="270" cy="222" r="1.6"/><circle cx="270" cy="198" r="1.6"/><circle cx="270" cy="174" r="1.6"/><circle cx="270" cy="126" r="1.6"/><circle cx="270" cy="102" r="1.6"/><circle cx="270" cy="78" r="1.6"/><circle cx="270" cy="54" r="1.6"/><circle cx="270" cy="30" r="1.6"/></g>
  <g fill="#eea66f" stroke="currentColor" stroke-width="1"><circle cx="30" cy="150" r="5"/><circle cx="54" cy="222" r="5"/><circle cx="54" cy="78" r="5"/><circle cx="78" cy="246" r="5"/><circle cx="78" cy="54" r="5"/><circle cx="150" cy="270" r="5"/><circle cx="150" cy="30" r="5"/><circle cx="222" cy="246" r="5"/><circle cx="222" cy="54" r="5"/><circle cx="246" cy="222" r="5"/><circle cx="246" cy="78" r="5"/><circle cx="270" cy="150" r="5"/></g>
  <text x="230" y="48" font-size="12" fill="currentColor">(3, 4)</text>
  <text x="254" y="74" font-size="12" fill="currentColor">(4, 3)</text>
</svg>
</div>

**Theorem 11.5 (Jacobi's two-square formula).** For $n \geq 1$,

$$
r_2(n) = 4\,\bigl(d_1(n) - d_3(n)\bigr),
$$

where $d_1(n)$ and $d_3(n)$ count the divisors of $n$ that are $\equiv 1$ and $\equiv 3 \pmod 4$.

Check with $n = 25$: divisors $1, 5, 25$, all $\equiv 1$, so $r_2 = 4 \cdot 3 = 12$, matching the twelve points in
the picture. With $n = 21$: divisors $1, 3, 7, 21$, two of each kind, so $r_2(21) = 0$. With $n = 1105$: all eight
divisors are $\equiv 1 \pmod 4$ (each prime factor is), so $r_2 = 32$, which is $8 \times$ the four representations
listed above (each has $a \neq b$, both nonzero, so it gives 8 signed ordered pairs).

The formula was found by Gauss and Jacobi in the early nineteenth century. We sketch its proof in 11.2, where it
becomes a counting of Gaussian integers.

## 11.2 The view from the Gaussian integers

*Level: advanced.*

Why should sums of two squares behave so neatly? Because $a^2 + b^2$ factors, once you allow $i = \sqrt{-1}$:

$$
a^2 + b^2 = (a + bi)(a - bi) .
$$

The **Gaussian integers** are the complex numbers $\mathbb{Z}[i] = \{a + bi : a, b \in \mathbb{Z}\}$, a grid of points
in the plane. The **norm** $N(a + bi) = a^2 + b^2 = |a + bi|^2$ is multiplicative, $N(\alpha\beta) = N(\alpha)N(\beta)$,
because absolute values of complex numbers multiply. Fact 2 of 11.1 is nothing but this: take $\alpha = a + bi$,
$\beta = c + di$, then $\alpha\beta = (ac - bd) + (ad + bc)i$.

[Algebra, chapter 18](../algebra/18-Factorization-in-Rings.md) proves the facts we need, so we only recall them:

- $\mathbb{Z}[i]$ has a **division algorithm**: for $\alpha, \beta$ with $\beta \neq 0$ there are $\kappa, \rho$ with
  $\alpha = \kappa\beta + \rho$ and $N(\rho) < N(\beta)$ (round the complex number $\alpha/\beta$ to the nearest grid
  point). Hence it has unique factorization into primes, up to order and the four **units** $\pm 1, \pm i$ (the
  elements of norm 1).
- The **Gaussian primes** are, up to units: $1 + i$ (norm 2); the ordinary primes $q \equiv 3 \pmod 4$, which stay
  prime in $\mathbb{Z}[i]$; and for each ordinary prime $p \equiv 1 \pmod 4$, the two conjugates $a + bi$ and
  $a - bi$ where $p = a^2 + b^2$.

**A third proof of Fermat's theorem.** Let $p \equiv 1 \pmod 4$ and $m^2 \equiv -1 \pmod p$ (Lemma 11.3). Then
$p \mid m^2 + 1 = (m + i)(m - i)$. But $p$ divides neither factor in $\mathbb{Z}[i]$, since $(m \pm i)/p = m/p \pm i/p$
is not a Gaussian integer. So $p$ is not a Gaussian prime (a prime dividing a product divides a factor). Write
$p = \alpha\beta$ with neither a unit. Taking norms, $p^2 = N(\alpha)N(\beta)$ with both factors bigger than 1, so
$N(\alpha) = p$: if $\alpha = a + bi$, then $p = a^2 + b^2$. $\square$

This proof explains *why* the answer depends on $p \bmod 4$: the question is whether $p$ splits in $\mathbb{Z}[i]$, and
that happens exactly when $x^2 + 1$ has a root modulo $p$. That pattern (how an ordinary prime factors in a bigger
ring is decided by a polynomial modulo $p$) is one of the main threads of [Chapter 17](17-Algebraic-Number-Theory.md)
and of the Langlands programme in [Chapter 21](21-Where-Number-Theory-Goes.md).

### Counting with Gaussian integers (sketch of Theorem 11.5)

$r_2(n)$ is the number of Gaussian integers of norm $n$. Factor $n = 2^a \prod p_i^{b_i} \prod q_j^{c_j}$ as before.
A Gaussian integer $\alpha$ of norm $n$ has a factorization into Gaussian primes, and the norms must multiply to $n$:

- the factor $1 + i$ must appear exactly $a$ times (no choice);
- each $q_j$ (norm $q_j^2$) must appear $c_j/2$ times, which is possible only if $c_j$ is even (no choice);
- for each $p_i = \pi_i \bar\pi_i$, we need $\pi_i^{s} \bar\pi_i^{t}$ with $s + t = b_i$: there are $b_i + 1$ choices.

Then multiply by one of 4 units. So, by unique factorization, $r_2(n) = 4 \prod (b_i + 1)$ if every $c_j$ is even, and
0 otherwise. Now compare with $d_1 - d_3$. Let $\chi(d) = 1$ for $d \equiv 1$, $-1$ for $d \equiv 3 \pmod 4$, 0 for
even $d$. This $\chi$ is multiplicative (check the four cases mod 4), so $d_1(n) - d_3(n) = \sum_{d \mid n} \chi(d)$ is
a multiplicative function of $n$ ([Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md)). Its
value on a prime power is $1$ for $2^a$, $b + 1$ for $p^b$ with $p \equiv 1$, and
$1 - 1 + 1 - \dots \pm 1$, which is 1 or 0 as $c$ is even or odd, for $q^c$ with $q \equiv 3$. The two formulas agree. $\square$

**A surprise: $\pi$.** Add $r_2(n)$ for $n \leq N$: you count grid points in a disc of radius $\sqrt N$, about its
area, $\pi N$. Add $4(d_1 - d_3)$ instead: each odd $d$ is counted, with sign $\chi(d)$, once for each multiple of $d$
up to $N$, about $N/d$ times. So $\pi N \approx 4N(1 - \tfrac13 + \tfrac15 - \tfrac17 + \dots)$, and in the limit

$$
\frac{\pi}{4} = 1 - \frac13 + \frac15 - \frac17 + \cdots,
$$

the Leibniz series. Making the "about" precise is a good exercise in analysis; how close the grid-point count really
is to $\pi N$ is the **Gauss circle problem**, still open.

## 11.3 Three squares

*Level: advanced.*

Which numbers are sums of three squares $x^2 + y^2 + z^2$? Up to 200, the ones that are *not* are

$$
7, 15, 23, 28, 31, 39, 47, 55, 60, 63, 71, 79, 87, 92, 95, 103, 111, 112, 119, 124, 127, 135, \dots
$$

Most are $\equiv 7 \pmod 8$; the others ($28 = 4 \cdot 7$, $60 = 4 \cdot 15$, $112 = 16 \cdot 7$, $\dots$) are such a
number times a power of 4.

**Theorem 11.6 (Legendre, 1798; Gauss, 1801).** A positive whole number $n$ is a sum of three squares if and only if
it is *not* of the form $4^a(8b + 7)$ with whole numbers $a, b \geq 0$.

*Proof of "only if".* Squares modulo 8 are $0, 1, 4$ (check $0^2, \dots, 7^2$: $0, 1, 4, 1, 0, 1, 4, 1$). Sums of
three of them modulo 8 can be $0, 1, 2, 3, 4, 5, 6$ but never 7 (to get 7 you would need $1 + 1 + 4 + 1$, four
squares). So $8b + 7$ is never a sum of three squares. Next, if $4m = x^2 + y^2 + z^2$, then modulo 4 the squares are
0 or 1 and the sum is 0, so all three are 0 mod 4: $x, y, z$ are all even, and $m = (x/2)^2 + (y/2)^2 + (z/2)^2$. So
if $4^a(8b + 7)$ were a sum of three squares, dividing by 4 repeatedly would make $8b + 7$ one. $\square$

*About "if".* This half is genuinely hard. Legendre's argument (1798) relied on a fact about primes in arithmetic
progressions that was not yet proved; Gauss gave a complete proof in the *Disquisitiones Arithmeticae* (1801) using
his theory of ternary quadratic forms, and found more: the number of representations $r_3(n)$ is tied to class
numbers of binary quadratic forms (the class numbers of [Chapter 17](17-Algebraic-Number-Theory.md)). A modern proof
uses Dirichlet's theorem on primes in progressions ([Chapter 15](15-Primes-in-Progressions.md)) together with
Minkowski's geometry of numbers; it fills a few pages. See Serre, *A Course in Arithmetic*, Chapter IV, or Grosswald,
*Representations of Integers as Sums of Squares*.

Unlike two squares, the three-square question has no product identity behind it. $3 = 1 + 1 + 1$ and
$5 = 4 + 1 + 0$ are sums of three squares, but $15 = 3 \cdot 5$ is not. That is the deep reason the proof is harder:
you cannot reduce to primes.

### Gauss's Eureka

On 10 July 1796 the nineteen-year-old Gauss wrote in his mathematical diary "ΕΥΡΗΚΑ! num = Δ + Δ + Δ": every
whole number is a sum of three **triangular numbers** $T_k = k(k+1)/2 = 0, 1, 3, 6, 10, 15, \dots$. It follows from
Theorem 11.6.

*Proof.* Let $n \geq 0$. The number $8n + 3$ is $\equiv 3 \pmod 8$, so not of the form $4^a(8b + 7)$ (it is odd and
$\not\equiv 7$), so $8n + 3 = x^2 + y^2 + z^2$. Modulo 8 the squares are in $\{0, 1, 4\}$, and the only way to make 3
is $1 + 1 + 1$: all of $x, y, z$ are odd, say $x = 2k + 1$ and so on. Since $(2k + 1)^2 = 8T_k + 1$,

$$
8n + 3 = 8T_k + 8T_l + 8T_m + 3, \qquad\text{so}\qquad n = T_k + T_l + T_m . \qquad \square
$$

Example: $n = 20$, $8n + 3 = 163 = 9^2 + 9^2 + 1^2$, so $k = l = 4$, $m = 0$: $20 = 10 + 10 + 0$.

## 11.4 Four squares

*Level: advanced.*

Since 7 is not a sum of three squares, we need four: $7 = 4 + 1 + 1 + 1$. Is four always enough? Diophantus seems
to have assumed so, Bachet stated it in 1621, and Fermat claimed a proof he never published. Euler worked on it for
decades and found the key identity. Lagrange gave the first proof in 1770, and Euler simplified it soon after.

**Theorem 11.7 (Lagrange's four-square theorem).** Every positive whole number is a sum of four squares of whole
numbers.

### Euler's four-square identity

$$
\begin{aligned}
(a_1^2 + a_2^2 + a_3^2 + a_4^2)(b_1^2 + b_2^2 + b_3^2 + b_4^2) = {} & (a_1 b_1 + a_2 b_2 + a_3 b_3 + a_4 b_4)^2 \\
& + (a_1 b_2 - a_2 b_1 + a_3 b_4 - a_4 b_3)^2 \\
& + (a_1 b_3 - a_3 b_1 + a_4 b_2 - a_2 b_4)^2 \\
& + (a_1 b_4 - a_4 b_1 + a_2 b_3 - a_3 b_2)^2 .
\end{aligned}
$$

*Proof.* Expand. Each of the 16 products $a_j^2 b_k^2$ appears exactly once on the right, and the cross terms cancel in
pairs. (A computer algebra system does it instantly; by hand it is a careful page.) The identity is to quaternions what
Fact 2 is to complex numbers: the norm of a product of quaternions is the product of the norms. $\square$

So, as with two squares, **it is enough to prove the theorem for primes.** For $p = 2 = 1^2 + 1^2 + 0^2 + 0^2$ it is
clear. Let $p$ be an odd prime.

**Lemma 11.8.** There are whole numbers $x, y$ with $0 \leq x, y \leq \tfrac{p-1}{2}$ and $x^2 + y^2 + 1 \equiv 0
\pmod p$.

*Proof.* The $\tfrac{p+1}{2}$ numbers $x^2$, for $0 \leq x \leq \tfrac{p-1}{2}$, are distinct modulo $p$: if
$x^2 \equiv x'^2$ then $p \mid (x - x')(x + x')$, and $0 < x + x' < p$ unless both are 0, so $x = x'$. Likewise the
$\tfrac{p+1}{2}$ numbers $-1 - y^2$ are distinct modulo $p$. Together that is $p + 1$ numbers among only $p$ residues,
so some $x^2 \equiv -1 - y^2$. $\square$

So $x^2 + y^2 + 1^2 + 0^2 = mp$ for some whole number $m \geq 1$, and $m < p$ because
$x^2 + y^2 + 1 \leq 2 \left(\tfrac{p-1}{2}\right)^2 + 1 < p^2$.

*Proof of Theorem 11.7 for $p$ (descent).* Let $m$ be the *smallest* positive whole number such that $mp$ is a sum
of four squares, $mp = x_1^2 + x_2^2 + x_3^2 + x_4^2$. We have just seen $m < p$. Suppose $m > 1$; we will find a
smaller one.

*If $m$ is even:* then $x_1 + x_2 + x_3 + x_4$ is even, so the $x_i$ are all even, all odd, or two of each. Renumber
so that $x_1 \equiv x_2$ and $x_3 \equiv x_4 \pmod 2$. Then

$$
\frac{m}{2}\, p = \left(\frac{x_1 + x_2}{2}\right)^2 + \left(\frac{x_1 - x_2}{2}\right)^2 + \left(\frac{x_3 + x_4}{2}\right)^2 + \left(\frac{x_3 - x_4}{2}\right)^2,
$$

with whole numbers in the brackets (expand to check), contradicting the minimality of $m$.

*If $m$ is odd and $m > 1$:* choose $y_i \equiv x_i \pmod m$ with $|y_i| < m/2$ (possible since $m$ is odd). Then
$y_1^2 + y_2^2 + y_3^2 + y_4^2 \equiv x_1^2 + \dots + x_4^2 = mp \equiv 0 \pmod m$, so it equals $rm$ for a whole
number $r$ with $0 \leq r < 4 \cdot \tfrac{m^2}{4} \cdot \tfrac1m = m$.

- $r \neq 0$: otherwise all $y_i = 0$, so $m$ divides every $x_i$, so $m^2 \mid mp$, so $m \mid p$, impossible for
  $1 < m < p$.
- By Euler's identity, $(mp)(rm) = m^2 rp$ is a sum of four squares $z_1^2 + z_2^2 + z_3^2 + z_4^2$, with the $z_i$
  built from $a = x$, $b = y$. Each $z_i$ is divisible by $m$: $z_1 = \sum x_i y_i \equiv \sum x_i^2 \equiv 0$, and
  $z_2 = x_1 y_2 - x_2 y_1 + x_3 y_4 - x_4 y_3 \equiv x_1 x_2 - x_2 x_1 + x_3 x_4 - x_4 x_3 = 0 \pmod m$, and the same
  for $z_3, z_4$.

So $rp = (z_1/m)^2 + (z_2/m)^2 + (z_3/m)^2 + (z_4/m)^2$ with $0 < r < m$, contradicting minimality again.

Hence $m = 1$ and $p$ is a sum of four squares. With Euler's identity, every product of primes is too, and
$1 = 1^2 + 0^2 + 0^2 + 0^2$. $\square$

**Worked example of the descent ($p = 11$).** Lemma 11.8 with $x = y = 4$: $16 + 16 + 1 + 0 = 33 = 3 \cdot 11$, so
$m = 3$. Reduce modulo 3 into $(-\tfrac32, \tfrac32)$: $(4, 4, 1, 0) \to (1, 1, 1, 0)$, with $1 + 1 + 1 + 0 = 3 = 1
\cdot 3$, so $r = 1$. Euler's identity with $a = (4, 4, 1, 0)$, $b = (1, 1, 1, 0)$:

$$
z_1 = 4 + 4 + 1 + 0 = 9, \quad z_2 = 4 - 4 + 0 - 0 = 0, \quad z_3 = 4 - 1 + 0 - 0 = 3, \quad z_4 = 0 - 0 + 4 - 1 = 3 .
$$

Check: $81 + 0 + 9 + 9 = 99 = 33 \cdot 3$. Divide by $m = 3$: $11 = 3^2 + 0^2 + 1^2 + 1^2$.

**Worked example ($p = 7$, $m$ even).** $x = 2$, $y = 3$: $4 + 9 + 1 + 0 = 14 = 2 \cdot 7$. Pair $(3, 1)$ (both odd)
and $(2, 0)$ (both even): $7 = 2^2 + 1^2 + 1^2 + 1^2$.

### How many ways?

**Theorem 11.9 (Jacobi, 1834).** The number $r_4(n)$ of $(a, b, c, d) \in \mathbb{Z}^4$ with
$a^2 + b^2 + c^2 + d^2 = n$ is

$$
r_4(n) = 8 \sum_{d \mid n,\; 4 \nmid d} d .
$$

Since 1 always divides $n$, $r_4(n) \geq 8$, which gives Lagrange's theorem again. Check: $r_4(1) = 8$ (the eight
vectors $\pm e_i$); $r_4(5) = 8(1 + 5) = 48$. Indeed the only way to write 5 as four squares is $4 + 1 + 0 + 0$, and
the signed arrangements of $(\pm 2, \pm 1, 0, 0)$ number $4 \cdot 3 \cdot 4 = 48$ (position of the 2, position of
the 1, two signs). Jacobi's proof uses elliptic functions; there are
now elementary proofs (see Hardy and Wright, Chapter 20) and a natural one through modular forms
([Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md)), where $r_4$ is the coefficient of a theta function to
the fourth power.

## 11.5 Waring's problem

*Level: expert.*

In 1770, the same year as Lagrange's proof, Edward Waring stated without proof in his *Meditationes Algebraicae*
that every whole number is a sum of 4 squares, of 9 cubes, of 19 fourth powers, "and so on". Two questions
hide in "and so on". For each $k \geq 2$:

- $g(k)$ is the smallest number $s$ such that **every** positive whole number is a sum of $s$ $k$-th powers
  (of whole numbers $\geq 0$);
- $G(k)$ is the smallest $s$ such that every **sufficiently large** whole number is a sum of $s$ $k$-th powers.

Lagrange's theorem plus "7 needs four" says $g(2) = 4$. Since infinitely many numbers ($8b + 7$) need four squares,
$G(2) = 4$ as well.

**Hilbert's theorem (1909).** $g(k)$ is finite for every $k$. Hilbert's proof was an existence argument built on a
clever polynomial identity. In the 1920s Hardy and Littlewood developed the **circle method** to attack $G(k)$, with
explicit bounds and asymptotic counts of representations; it remains one of the main tools of analytic number theory
(Vinogradov used it for his three-primes theorem, and it is behind Helfgott's proof of the weak Goldbach conjecture,
[Chapter 21](21-Where-Number-Theory-Goes.md)).

### Why $g(k)$ is at least $2^k + \lfloor (3/2)^k \rfloor - 2$

Let $q = \lfloor (3/2)^k \rfloor$ and $n = q \cdot 2^k - 1$. Since $q \leq (3/2)^k$, $n < q \cdot 2^k \leq 3^k$, so only
$1^k$ and $2^k$ are available. To write $n$ with as few terms as possible, use as many $2^k$ as fit: since
$n = (q - 1)2^k + (2^k - 1)$, that is $q - 1$ copies of $2^k$ and then $2^k - 1$ copies of $1$. (Using fewer copies of
$2^k$ only adds more ones: each $2^k$ you drop costs $2^k - 1$ extra terms.) So $n$ needs

$$
(q - 1) + (2^k - 1) = 2^k + q - 2
$$

$k$-th powers, and $g(k) \geq 2^k + \lfloor (3/2)^k \rfloor - 2$. $\square$

For $k = 2$: $q = 2$, $n = 7$, bound 4. For $k = 3$: $q = 3$, $n = 23 = 2 \cdot 8 + 7 \cdot 1$, bound 9. For $k = 4$:
$q = 5$, $n = 79 = 4 \cdot 16 + 15 \cdot 1$, bound 19. These are exactly Waring's numbers.

**What is known.**

- $g(3) = 9$ (Wieferich 1909, with a gap filled by Kempner 1912). Only two numbers need nine cubes: 23 and 239.
- $g(4) = 19$ (Balasubramanian, Deshouillers and Dress, 1986). A computer check shows the numbers below 5000 that need
  19 fourth powers are $79, 159, 239, 319, 399, 479, 559$, each $\equiv 79 \pmod{80}$.
- $g(5) = 37$ (Chen Jingrun, 1964) and $g(6) = 73$ (Pillai, 1940).
- The formula $g(k) = 2^k + \lfloor (3/2)^k \rfloor - 2$ is now known to hold for all $k$ except possibly finitely
  many, and has been checked for every $k$ up to enormous bounds. Whether it holds for all $k$ depends on an
  innocent-looking open question about how close $(3/2)^k$ can come to a whole number.

**$G(k)$ is much harder.** $G(2) = 4$ and $G(4) = 16$ (Davenport, 1939) are the only exact values known. For cubes,
$4 \leq G(3) \leq 7$ (the upper bound is due to Linnik in the 1940s), and most experts believe $G(3) = 4$. For large
$k$, $G(k)$ grows only like $k \log k$ (Vinogradov, with sharp modern constants by Wooley and others), while $g(k)$
grows like $2^k$: the huge $g(k)$ comes from a few small numbers that have only $1^k$ and $2^k$ available.

A cousin problem, sums of three cubes allowing negatives ($x^3 + y^3 + z^3 = n$), made news in 2019 when Andrew Booker
found a representation of 33 and, with Andrew Sutherland, of 42. It is a different question (negative numbers change
everything) and largely open.

## Check yourself

??? question "1. Which of 245, 300 and 325 are sums of two squares? Give a representation where one exists."
    $245 = 5 \cdot 7^2$: the prime $7 \equiv 3$ has even exponent, so yes: $5 = 1^2 + 2^2$ times $7^2$ gives
    $245 = 7^2 + 14^2$ (check: $49 + 196 = 245$). $300 = 2^2 \cdot 3 \cdot 5^2$: the prime 3 has exponent 1, so no.
    $325 = 5^2 \cdot 13$: yes, for example $325 = 1^2 + 18^2 = 6^2 + 17^2 = 10^2 + 15^2$.

??? question "2. Use the Brahmagupta–Fibonacci identity to write $5 \cdot 17 = 85$ as a sum of two squares in two ways."
    $5 = 1^2 + 2^2$, $17 = 1^2 + 4^2$. With $a = 1, b = 2, c = 1, d = 4$: $(ac - bd)^2 + (ad + bc)^2 = (1 - 8)^2 + (4 + 2)^2
    = 49 + 36$, so $85 = 7^2 + 6^2$. With the other signs, $(ac + bd)^2 + (ad - bc)^2 = 9^2 + 2^2 = 81 + 4 = 85$.

??? question "3. Compute $r_2(65)$ from Jacobi's formula and list the representations."
    Divisors of 65: $1, 5, 13, 65$, all $\equiv 1 \pmod 4$. So $r_2(65) = 4 \cdot 4 = 16$. The representations with
    $0 < a < b$ are $65 = 1^2 + 8^2 = 4^2 + 7^2$; each gives 8 signed ordered pairs, total 16.

??? question "4. Find $m$ with $m^2 \equiv -1 \pmod{37}$ using Lemma 11.3 or by search, then write 37 as a sum of two squares."
    By search, $6^2 = 36 \equiv -1 \pmod{37}$, so $m = 6$. (Lemma 11.3 gives $m = 18!$, which is $\equiv \pm 6$.) Then
    $37 = 6^2 + 1^2$, which is visible directly from $m^2 + 1 = 37$. The Hermite–Serret method stops at once: $6 < \sqrt{37}$
    and the next remainder is $37 \bmod 6 = 1$.

??? question "5. List the set $S$ of Zagier's proof for $p = 17$ and find the fixed point of each involution."
    $x$ must be odd with $x^2 < 17$: $x = 1$ gives $yz = 4$: $(1, 1, 4), (1, 2, 2), (1, 4, 1)$; $x = 3$ gives $yz = 2$:
    $(3, 1, 2), (3, 2, 1)$. So $|S| = 5$, odd. Zagier's map fixes $(1, 1, 4)$. The swap $y \leftrightarrow z$ fixes
    $(1, 2, 2)$, giving $17 = 1^2 + 4^2$.

??? question "6. Show that no number $\equiv 7 \pmod 8$ is a sum of three squares, and find the smallest number that is not a sum of three squares."
    Squares mod 8 are $0, 1, 4$; sums of three of them reach $0$ to $6$ but not 7 (as shown in 11.3). The smallest
    number not a sum of three squares is therefore at least 7, and 7 itself works: $7 = 4 + 1 + 1 + 1$ needs four.

??? question "7. Write 23 as a sum of three triangular numbers using Gauss's method."
    $8 \cdot 23 + 3 = 187 = 9^2 + 9^2 + 5^2$ ($81 + 81 + 25 = 187$). So $k = l = 4$, $m = 2$, and
    $23 = T_4 + T_4 + T_2 = 10 + 10 + 3$.

??? question "8. Run the four-square descent for $p = 17$ starting from $x = 1$, $y = 7$."
    $1 + 49 + 1 + 0 = 51 = 3 \cdot 17$, so $m = 3$. Reduce $(1, 7, 1, 0)$ modulo 3 into $\{-1, 0, 1\}$: $(1, 1, 1, 0)$,
    sum of squares $3 = 1 \cdot 3$, so $r = 1$. Euler's identity with $a = (1, 7, 1, 0)$, $b = (1, 1, 1, 0)$:
    $z_1 = 1 + 7 + 1 = 9$, $z_2 = 1 - 7 + 0 - 0 = -6$, $z_3 = 1 - 1 + 0 - 0 = 0$, $z_4 = 0 - 0 + 7 - 1 = 6$. Check:
    $81 + 36 + 0 + 36 = 153 = 51 \cdot 3$. Divide by 3: $17 = 3^2 + 2^2 + 0^2 + 2^2$.

??? question "9. Show that $r_4(8) = 24$ using Jacobi's formula, and check by listing."
    Divisors of 8 not divisible by 4: 1 and 2, so $r_4(8) = 8 \cdot 3 = 24$. Listing: $8 = 4 + 4$ gives
    $(\pm 2, \pm 2, 0, 0)$ arranged: choose 2 positions out of 4 (6 ways) and signs (4 ways): 24. And
    $8 = 4 + 1 + 1 + 1 + 1$ has five terms, not allowed. So 24.

??? question "10. Explain why 23 needs nine cubes, and check that 239 can be written with nine."
    The only cubes below 23 are 1 and 8. With two 8s, $23 = 8 + 8 + 7 \cdot 1$ uses 9 cubes; with one 8 you need
    $1 + 15 = 16$ cubes; with none, 23. So 23 needs nine. For 239: $239 = 2 \cdot 64 + 4 \cdot 27 + 3 \cdot 1 =
    128 + 108 + 3$, which is $2 + 4 + 3 = 9$ cubes. That 239 cannot be done with eight takes a finite case check over
    the cubes $1, 8, 27, 64, 125, 216$ (easy by computer).

??? question "11. Prove that if $n$ is a sum of two squares of rational numbers, it is a sum of two squares of whole numbers."
    Suppose $n = (a/c)^2 + (b/c)^2$, so $nc^2 = a^2 + b^2$. If a prime $q \equiv 3 \pmod 4$ divided $n$ to an odd power,
    it would divide $nc^2$ to an odd power (since $c^2$ contributes an even exponent), contradicting Theorem 11.4 for
    $nc^2$. So every such $q$ has even exponent in $n$, and Theorem 11.4 makes $n$ a sum of two integer squares.

??? question "12. Show that $g(k) \geq 2^k + \lfloor (3/2)^k \rfloor - 2$ gives $g(5) \geq 37$, and identify the number used."
    $(3/2)^5 = 7.59375$, so $q = 7$ and $n = 7 \cdot 32 - 1 = 223$. Since $223 < 3^5 = 243$, only $1$ and $32$ are
    available: $223 = 6 \cdot 32 + 31 \cdot 1$, which uses $6 + 31 = 37$ fifth powers. Chen Jingrun proved in 1964 that
    37 is enough for every number, so $g(5) = 37$.

## What you learned

- Squares are $0, 1 \pmod 4$, so numbers $4k + 3$ are never sums of two squares; products of sums of two squares are
  sums of two squares (Brahmagupta–Fibonacci, the norm in $\mathbb{Z}[i]$).
- A prime $p$ is a sum of two squares exactly when $p = 2$ or $p \equiv 1 \pmod 4$: proved by pigeonholes, by
  Zagier's involution and by Gaussian integers.
- $n$ is a sum of two squares exactly when primes $\equiv 3 \pmod 4$ divide it to even powers, and the number of
  representations is $4(d_1 - d_3)$.
- $n$ is a sum of three squares exactly when it is not $4^a(8b + 7)$ (Legendre and Gauss); so every number is a sum
  of three triangular numbers.
- Every number is a sum of four squares (Lagrange), via Euler's identity and descent; Jacobi counted the ways.
- Waring's problem asks the same for $k$-th powers: $g(3) = 9$, $g(4) = 19$, with a formula for $g(k)$; the
  "eventually" version $G(k)$ is mostly open.

**Next:** [Chapter 12](12-Primality-Factoring-and-RSA.md), how to tell whether a large number is prime, how to factor
it if not, and why the gap between the two problems makes RSA possible.

## Further reading

- G. H. Hardy and E. M. Wright, *An Introduction to the Theory of Numbers* (1938; 6th edition 2008), Chapters 20
  and 21.
- E. Grosswald, *Representations of Integers as Sums of Squares* (1985).
- D. Zagier, "A one-sentence proof that every prime $p \equiv 1 \pmod 4$ is a sum of two squares", *American
  Mathematical Monthly* 97 (1990), p. 144.
- J.-P. Serre, *A Course in Arithmetic* (1973), Chapter IV (three squares via quadratic forms).
- R. C. Vaughan, *The Hardy–Littlewood Method* (2nd edition, 1997), for Waring's problem.
- M. Aigner and G. M. Ziegler, *Proofs from THE BOOK* (1998; later editions), the chapter on representing numbers as
  sums of two squares.
- On this site: the Topics lessons [Sums of two squares](../../topics/number-theory/level-7/06-sums-two-squares.md)
  and [Pythagorean triples](../../topics/number-theory/level-7/05-pythagorean-triples.md);
  [Algebra, chapter 18](../algebra/18-Factorization-in-Rings.md) (Gaussian integers and unique factorization);
  the [Algebra book](../algebra/index.md).
