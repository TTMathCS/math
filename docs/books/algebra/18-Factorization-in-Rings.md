# 18. Factorization in rings

*Every whole number breaks into primes in exactly one way. You have used that fact since school, probably without
asking why it is true. This chapter asks. It finds the real reason (a division algorithm), follows it into new number
systems such as the Gaussian integers, where it proves Fermat's theorem on sums of two squares, and then shows a
number system where unique factorization fails: in $\mathbb{Z}[\sqrt{-5}]$, $6 = 2 \cdot 3 = (1+\sqrt{-5})(1-\sqrt{-5})$.
Along the way you get the practical tools for deciding whether a polynomial factors, and the honest story of how a
failed proof of Fermat's last theorem gave algebra the idea of an ideal.*

!!! abstract "In this chapter"
    **You will learn:**

    - what units, irreducibles, primes and associates are in any integral domain, and why "irreducible" and "prime" can differ
    - the chain Euclidean domain $\Rightarrow$ principal ideal domain $\Rightarrow$ unique factorization domain, with proofs
    - why unique factorization fails in $\mathbb{Z}[\sqrt{-5}]$, and how ideals repair it
    - the Gaussian integers, and a full proof of which numbers are sums of two squares
    - Gauss's lemma, Eisenstein's criterion and the reduction-mod-$p$ test for irreducible polynomials
    - the true history of Lamé, Kummer and Fermat's last theorem

    **You need:** [Chapter 17](17-Rings-and-Ideals.md) (rings, integral domains, ideals, quotient rings, prime and
    maximal ideals), [Chapter 10](10-Roots-and-Coefficients.md) (the factor theorem and the rational root theorem) and
    [Chapter 9](09-Complex-Numbers.md) (complex numbers). For the number theory behind 18.4, the gentler lessons
    [Unique factorisation](../../topics/number-theory/level-6/06-unique-factorisation.md),
    [Euclid's algorithm](../../topics/number-theory/level-4/04-euclids-algorithm.md) and
    [Sums of two squares](../../topics/number-theory/level-7/06-sums-two-squares.md).

    **Levels:** 18.1 and 18.4 are advanced but concrete; 18.2, 18.3, 18.5 and 18.6 are advanced (full proofs);
    18.7 is expert background told as history.

## 18.1 Euclidean domains

Why does every whole number have exactly one prime factorization? Look at how the proof goes in $\mathbb{Z}$. The key
step is **Euclid's lemma**: if a prime $p$ divides $ab$, then $p$ divides $a$ or $p$ divides $b$. And Euclid's lemma
comes from Bézout's identity, $\gcd(a,b) = ra + sb$, which comes from Euclid's algorithm, which comes from one simple
fact: **you can divide with a remainder that is smaller than what you divided by.**

$$
a = qb + r, \qquad 0 \le r < |b| .
$$

So the root of unique factorization is the division algorithm. This suggests a definition: any number system with a
division algorithm should have unique factorization too. Let us set up the words first.

Throughout this chapter $R$ is an **integral domain**: a commutative ring with $1 \ne 0$ and no zero divisors
([Chapter 17](17-Rings-and-Ideals.md)). In $R$:

- a **unit** is an element with a multiplicative inverse in $R$. In $\mathbb{Z}$ the units are $\pm 1$; in a field every
  nonzero element is a unit; in $\mathbb{Q}[x]$ the units are the nonzero constants.
- $a$ **divides** $b$, written $a \mid b$, if $b = ac$ for some $c \in R$.
- $a$ and $b$ are **associates** if $a = ub$ for a unit $u$. In $\mathbb{Z}$, $3$ and $-3$ are associates. Associates
  divide each other and generate the same ideal: $(a) = (b)$.
- a nonzero non-unit $p$ is **irreducible** if whenever $p = ab$, one of $a, b$ is a unit. (It cannot be broken into
  two smaller pieces.)
- a nonzero non-unit $p$ is **prime** if whenever $p \mid ab$, then $p \mid a$ or $p \mid b$. (Euclid's lemma holds
  for it.)

In $\mathbb{Z}$ these two last words describe the same numbers, which is why school uses them interchangeably. In
general they do not, and the whole chapter turns on the difference.

**Definition.** An integral domain $R$ is a **Euclidean domain** if there is a function $N : R \setminus \{0\} \to
\{0, 1, 2, \ldots\}$ (a "size") such that for all $a, b$ with $b \ne 0$ there are $q, r \in R$ with

$$
a = qb + r, \qquad \text{and either } r = 0 \text{ or } N(r) < N(b) .
$$

The three main examples:

1. $\mathbb{Z}$ with $N(a) = |a|$.
2. $F[x]$ for any field $F$, with $N(f) = \deg f$. This is polynomial long division ([Chapter 4](04-Polynomials-and-Factoring.md)):
   the remainder has smaller degree than the divisor. It needs $F$ to be a field, because dividing $x^2$ by $2x$ in
   $\mathbb{Z}[x]$ would need the coefficient $\tfrac12$.
3. The **Gaussian integers** $\mathbb{Z}[i] = \{a + bi : a, b \in \mathbb{Z}\}$, with the **norm**
   $N(a + bi) = a^2 + b^2 = (a+bi)(a-bi)$.

The third one needs a proof. The norm is the square of the distance to $0$ in the complex plane, and it is
**multiplicative**: $N(\alpha\beta) = |\alpha\beta|^2 = |\alpha|^2|\beta|^2 = N(\alpha)N(\beta)$.

**Theorem 18.1.** $\mathbb{Z}[i]$ is a Euclidean domain with the norm $N$.

*Proof.* Take $\alpha, \beta \in \mathbb{Z}[i]$ with $\beta \ne 0$. Divide in the complex numbers: $\alpha/\beta = u + vi$
with $u, v$ rational. Let $m$ and $n$ be the integers nearest to $u$ and $v$, so $|u - m| \le \tfrac12$ and
$|v - n| \le \tfrac12$. Put $q = m + ni$ and $r = \alpha - q\beta$. Then $r$ is a Gaussian integer, and

$$
N(r) = |\alpha - q\beta|^2 = |\beta|^2 \left| \frac{\alpha}{\beta} - q \right|^2
= N(\beta) \big( (u-m)^2 + (v-n)^2 \big) \le N(\beta) \left( \tfrac14 + \tfrac14 \right) < N(\beta). \qquad \blacksquare
$$

The picture: the Gaussian integers form a square grid of side 1. Every point of the plane is within $\tfrac{\sqrt2}{2}$
of a grid point, and $\tfrac{\sqrt2}{2} < 1$. That inequality is the whole proof.

**Worked example.** Divide $27 + 23i$ by $8 + i$.

1. Multiply top and bottom by the conjugate $8 - i$: $\dfrac{(27+23i)(8-i)}{65} = \dfrac{216 - 27i + 184i + 23}{65} = \dfrac{239 + 157i}{65} \approx 3.68 + 2.42i$.
2. Round each part: $q = 4 + 2i$.
3. Remainder: $r = 27 + 23i - (8+i)(4+2i) = 27 + 23i - (30 + 20i) = -3 + 3i$.

Check: $N(r) = 9 + 9 = 18 < 65 = N(8+i)$.

Once there is a division algorithm, Euclid's algorithm runs as usual: divide, replace the pair by (divisor,
remainder), repeat. The size goes down at each step, so it stops, and the last nonzero remainder is a greatest common
divisor. For $\gcd(11 + 3i,\ 1 + 8i)$:

$$
\begin{aligned}
11 + 3i &= (1 - i)(1 + 8i) + (2 - 4i) \\
1 + 8i &= (-2 + i)(2 - 4i) + (1 - 2i) \\
2 - 4i &= 2\,(1 - 2i) + 0
\end{aligned}
$$

so the gcd is $1 - 2i$ (up to the units $\pm 1, \pm i$). Check: $N(1-2i) = 5$, and $5$ divides both
$N(11+3i) = 130$ and $N(1+8i) = 65$, as it must.

**Try it in Python.** Gaussian integers as pairs of ordinary integers, so nothing is rounded wrongly:

```python
def mul(a, b):
    return (a[0]*b[0] - a[1]*b[1], a[0]*b[1] + a[1]*b[0])

def divmod_gauss(a, b):          # Gaussian integers as pairs (real, imaginary)
    n = b[0]**2 + b[1]**2        # the norm of b
    re, im = mul(a, (b[0], -b[1]))   # a times the conjugate of b, so a/b = (re + im i)/n
    q = ((2*re + n) // (2*n), (2*im + n) // (2*n))   # round each part to the nearest integer
    bq = mul(b, q)
    return q, (a[0] - bq[0], a[1] - bq[1])

def gcd_gauss(a, b):
    while b != (0, 0):
        a, b = b, divmod_gauss(a, b)[1]
    return a

print(divmod_gauss((27, 23), (8, 1)))      # ((4, 2), (-3, 3))
```

## 18.2 Principal ideal domains

*Level: advanced.* Euclid's algorithm is one way to see the gcd. Ideals give another, which works even where there is
no algorithm. Recall that the **ideal generated** by $a$ is $(a) = \{ra : r \in R\}$, all multiples of $a$. An ideal of
this form is **principal**.

**Definition.** A **principal ideal domain** (PID) is an integral domain in which every ideal is principal.

**Theorem 18.2.** Every Euclidean domain is a PID.

*Proof.* Let $I$ be an ideal. If $I = \{0\}$ then $I = (0)$. Otherwise pick $b \in I$, $b \ne 0$, with $N(b)$ as small
as possible (a set of non-negative integers has a least element). For any $a \in I$, divide: $a = qb + r$. Then
$r = a - qb \in I$, because ideals are closed under subtraction and under multiplying by ring elements. If $r \ne 0$
we would have $N(r) < N(b)$, against the choice of $b$. So $r = 0$ and $a = qb \in (b)$. Hence $I = (b)$. $\blacksquare$

This is exactly the proof you may know that every subgroup of $\mathbb{Z}$ is $n\mathbb{Z}$, now in a general ring.

**What a PID gives you: gcds and Bézout.** In a PID, the ideal $(a, b) = \{ra + sb\}$ is principal, say $(a, b) = (d)$.
Then $d$ divides $a$ and $b$ (since $a, b \in (d)$), and $d = ra + sb$ for some $r, s$, so every common divisor of
$a$ and $b$ divides $d$. That is the definition of a greatest common divisor, and Bézout's identity comes free.

**Examples and non-examples.**

- $\mathbb{Z}$, $F[x]$ and $\mathbb{Z}[i]$ are PIDs, being Euclidean.
- $\mathbb{Z}[x]$ is **not** a PID. The ideal $(2, x)$, the polynomials with even constant term, is not principal. If
  $(2, x) = (f)$, then $f \mid 2$, so $f = \pm 1$ or $\pm 2$. Not $\pm 1$, because $1 \notin (2, x)$ (every element has
  even constant term). Not $\pm 2$, because $x$ is not a multiple of $2$ in $\mathbb{Z}[x]$.
- $F[x, y]$ is not a PID for the same reason: $(x, y)$ is not principal.
- There are PIDs that are not Euclidean for any choice of size function. The standard example is
  $\mathbb{Z}\big[\tfrac{1 + \sqrt{-19}}{2}\big]$; the proof that it has no division algorithm is due to Theodore
  Motzkin (1949). So the two notions really differ, though only in subtle rings.

**Irreducibles generate maximal ideals.** In a PID $R$, let $p$ be irreducible. Then $(p)$ is a **maximal ideal**:
if $(p) \subseteq (m) \subseteq R$, then $p = mc$, and irreducibility says $m$ is a unit (so $(m) = R$) or $c$ is a
unit (so $(m) = (p)$). Since maximal ideals are prime ideals ([Chapter 17](17-Rings-and-Ideals.md)), **in a PID every
irreducible is prime**. Here it is directly, which is Euclid's lemma again: if $p \mid ab$ and $p \nmid a$, then
$(p, a)$ is strictly bigger than $(p)$, so it is $R$, so $1 = rp + sa$. Multiply by $b$: $b = rpb + s(ab)$, and $p$
divides both terms. So $p \mid b$.

The consequence for fields is one you will use all through [Chapter 19](19-Fields-and-Extensions.md): if $f$ is
irreducible in $F[x]$, then $F[x]/(f)$ is a field.

## 18.3 Unique factorization domains, and where it fails

*Level: advanced.*

**Definition.** An integral domain $R$ is a **unique factorization domain** (UFD) if every nonzero non-unit is a
product of irreducibles, and this product is unique up to order and associates: if
$p_1 \cdots p_m = q_1 \cdots q_n$ with all $p_i, q_j$ irreducible, then $m = n$ and after renumbering each $p_i$ is an
associate of $q_i$.

"Up to associates" is needed even in $\mathbb{Z}$: $6 = 2 \cdot 3 = (-2)(-3)$. In $\mathbb{Z}[i]$,
$5 = (2+i)(2-i) = (1 + 2i)(1 - 2i)$, and this is the same factorization, since $1 + 2i = i(2 - i)$ and
$1 - 2i = -i(2 + i)$.

### Two easy facts

**Prime implies irreducible, in any integral domain.** Let $p$ be prime and $p = ab$. Then $p \mid ab$, so say
$p \mid a$, $a = pc$. Then $p = pcb$, so $p(1 - cb) = 0$, and since there are no zero divisors, $cb = 1$: $b$ is a
unit. $\blacksquare$

**In a UFD, irreducible implies prime.** Let $p$ be irreducible and $p \mid ab$, say $ab = pc$. Factor $a$, $b$ and $c$
into irreducibles. By uniqueness, the factorization of $ab$ (the factors of $a$ followed by those of $b$) must match
the factorization of $pc$, which contains $p$. So an associate of $p$ is among the factors of $a$ or of $b$, and $p$
divides that one. $\blacksquare$

So in a UFD, primes and irreducibles are the same thing, as in $\mathbb{Z}$. Conversely, if they differ somewhere,
unique factorization must fail.

### Every PID is a UFD

**Theorem 18.3.** Every principal ideal domain is a unique factorization domain.

*Proof.* There are two things to prove.

*Existence.* Suppose some nonzero non-unit $a_0$ is not a product of irreducibles. Then $a_0$ is not irreducible
itself, so $a_0 = bc$ with neither a unit, and at least one of $b, c$ is not a product of irreducibles (else $a_0$
would be). Call it $a_1$. Then $a_1 \mid a_0$ but $a_0 \nmid a_1$ (else they would be associates and the other factor a
unit). In ideals: $(a_0) \subsetneq (a_1)$. Repeat forever to get a strictly increasing chain

$$
(a_0) \subsetneq (a_1) \subsetneq (a_2) \subsetneq \cdots .
$$

The union $I = \bigcup (a_k)$ is an ideal (any two of its elements lie in one $(a_k)$, since the chain is nested). In a
PID, $I = (d)$, and $d$ lies in some $(a_k)$. Then $I = (d) \subseteq (a_k) \subseteq (a_{k+1}) \subseteq I$, so
$(a_k) = (a_{k+1})$, a contradiction. So every nonzero non-unit is a product of irreducibles.

*Uniqueness.* Suppose $p_1 \cdots p_m = q_1 \cdots q_n$, all irreducible, and induct on $m$. In a PID $p_1$ is prime
(18.2), and it divides the right side, so it divides some $q_j$; renumber so $j = 1$. Since $q_1$ is irreducible and
$p_1$ is not a unit, $q_1 = u p_1$ with $u$ a unit. Cancel $p_1$ (allowed in an integral domain):
$p_2 \cdots p_m = (u q_2) q_3 \cdots q_n$. By induction the remaining factors match. (When $m = 1$ the right side
must be a single irreducible, since a product of two or more non-units is not irreducible.) $\blacksquare$

The argument about chains of ideals is worth remembering by name: a ring in which every increasing chain of ideals
stops is **Noetherian**, after Emmy Noether, who made this the central idea of commutative algebra in the 1920s. Every
PID is Noetherian, and so is every polynomial ring in finitely many variables over a field (Hilbert's basis theorem,
[Chapter 22](22-Where-Algebra-Goes.md)).

So we have the chain

$$
\text{Euclidean domain} \;\Rightarrow\; \text{PID} \;\Rightarrow\; \text{UFD},
$$

and both arrows are strict: $\mathbb{Z}\big[\tfrac{1+\sqrt{-19}}{2}\big]$ is a PID that is not Euclidean, and
$\mathbb{Z}[x]$ is a UFD (18.5) that is not a PID.

### Where it fails: $\mathbb{Z}[\sqrt{-5}]$

Let $R = \mathbb{Z}[\sqrt{-5}] = \{a + b\sqrt{-5} : a, b \in \mathbb{Z}\}$, a subring of $\mathbb{C}$, so an integral
domain. Its norm is $N(a + b\sqrt{-5}) = (a + b\sqrt{-5})(a - b\sqrt{-5}) = a^2 + 5b^2$, again the squared distance to
$0$, again multiplicative.

Now look at

$$
6 = 2 \cdot 3 = (1 + \sqrt{-5})(1 - \sqrt{-5}) .
$$

Check the second product: $1 - (-5) = 6$. We claim these are two genuinely different factorizations into irreducibles.

1. **Units.** If $\alpha\beta = 1$ then $N(\alpha)N(\beta) = 1$, so $N(\alpha) = 1$, so $a^2 + 5b^2 = 1$, so
   $\alpha = \pm 1$. The only units are $\pm 1$.
2. **Norms.** $N(2) = 4$, $N(3) = 9$, $N(1 \pm \sqrt{-5}) = 6$.
3. **No element has norm 2 or 3.** $a^2 + 5b^2 \in \{2, 3\}$ forces $b = 0$ and $a^2 \in \{2, 3\}$, impossible.
4. **Irreducible.** If $2 = \alpha\beta$ with neither a unit, then $N(\alpha)N(\beta) = 4$ with neither factor 1, so
   $N(\alpha) = 2$: impossible by step 3. The same argument works for $3$ (norm $9 = 3 \cdot 3$) and for
   $1 \pm \sqrt{-5}$ (norm $6 = 2 \cdot 3$).
5. **Not associates.** The only units are $\pm 1$, and $2 \ne \pm(1 \pm \sqrt{-5})$.

So $2$ is irreducible but **not prime**: $2 \mid (1 + \sqrt{-5})(1 - \sqrt{-5})$, yet $2$ divides neither factor
(since $\tfrac{1 \pm \sqrt{-5}}{2} \notin R$). Hence $\mathbb{Z}[\sqrt{-5}]$ is not a UFD, and so not a PID either. In
fact the ideal $(2, 1 + \sqrt{-5})$ is not principal: a generator would have norm dividing both $N(2) = 4$ and
$N(1+\sqrt{-5}) = 6$, so norm $1$ or $2$; norm $2$ does not exist, and norm $1$ would make the ideal the whole ring,
which it is not (every element $2x + (1+\sqrt{-5})y$ has $a + b$ even, where $a + b\sqrt{-5}$ is the element, and $1$
has $a + b = 1$).

Hold on to that ideal. In 18.7 it becomes the "missing prime" that repairs the factorization.

## 18.4 Gaussian integers and sums of two squares

Which whole numbers are sums of two squares? Make a list:

| $n$ | 1 | 2 | 5 | 8 | 9 | 10 | 13 | 17 | 25 | 29 | 37 | 41 | 45 | 65 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $a^2 + b^2$ | $1+0$ | $1+1$ | $4+1$ | $4+4$ | $9+0$ | $9+1$ | $9+4$ | $16+1$ | $16+9$ | $25+4$ | $36+1$ | $25+16$ | $36+9$ | $64+1$, $49+16$ |

Missing so far: 3, 6, 7, 11, 12, 14, 15, 19, 21, 22, 23, ... The primes in the list are 2, 5, 13, 17, 29, 37, 41,
each $2$ or one more than a multiple of 4. The primes missing are 3, 7, 11, 19, 23, each three more than a multiple of
4. Fermat stated the rule for primes in a letter to Mersenne dated Christmas Day 1640, without proof; the first
published proof is Euler's, from the 1740s and 1750s. The Gaussian integers make it short, because
$a^2 + b^2 = (a + bi)(a - bi) = N(a + bi)$: **being a sum of two squares means being a norm.**

Since $\mathbb{Z}[i]$ is Euclidean, it is a PID and a UFD, and every irreducible is prime. The units are the elements
of norm 1: $\pm 1, \pm i$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 360" role="img" aria-label="The Gaussian integers from -3-3i to 3+3i as a grid of dots. The eight of norm 5 lie on a circle of radius root 5, the four of norm 2 on a smaller square around the origin.">
  <line x1="20" y1="160" x2="300" y2="160" stroke="currentColor" stroke-width="1"/>
  <line x1="160" y1="20" x2="160" y2="300" stroke="currentColor" stroke-width="1"/>
  <circle cx="160" cy="160" r="89.44" fill="none" stroke="#eea66f" stroke-width="1.5" stroke-dasharray="5 4"/>
  <g fill="currentColor">
    <circle cx="40" cy="40" r="2.5"/><circle cx="80" cy="40" r="2.5"/><circle cx="120" cy="40" r="2.5"/><circle cx="160" cy="40" r="2.5"/><circle cx="200" cy="40" r="2.5"/><circle cx="240" cy="40" r="2.5"/><circle cx="280" cy="40" r="2.5"/>
    <circle cx="40" cy="80" r="2.5"/><circle cx="80" cy="80" r="2.5"/><circle cx="160" cy="80" r="2.5"/><circle cx="240" cy="80" r="2.5"/><circle cx="280" cy="80" r="2.5"/>
    <circle cx="40" cy="120" r="2.5"/><circle cx="120" cy="120" r="2.5"/><circle cx="160" cy="120" r="2.5"/><circle cx="200" cy="120" r="2.5"/><circle cx="280" cy="120" r="2.5"/>
    <circle cx="40" cy="160" r="2.5"/><circle cx="80" cy="160" r="2.5"/><circle cx="120" cy="160" r="2.5"/><circle cx="160" cy="160" r="2.5"/><circle cx="200" cy="160" r="2.5"/><circle cx="240" cy="160" r="2.5"/><circle cx="280" cy="160" r="2.5"/>
    <circle cx="40" cy="200" r="2.5"/><circle cx="120" cy="200" r="2.5"/><circle cx="160" cy="200" r="2.5"/><circle cx="200" cy="200" r="2.5"/><circle cx="280" cy="200" r="2.5"/>
    <circle cx="40" cy="240" r="2.5"/><circle cx="80" cy="240" r="2.5"/><circle cx="160" cy="240" r="2.5"/><circle cx="240" cy="240" r="2.5"/><circle cx="280" cy="240" r="2.5"/>
    <circle cx="40" cy="280" r="2.5"/><circle cx="80" cy="280" r="2.5"/><circle cx="120" cy="280" r="2.5"/><circle cx="160" cy="280" r="2.5"/><circle cx="200" cy="280" r="2.5"/><circle cx="240" cy="280" r="2.5"/><circle cx="280" cy="280" r="2.5"/>
  </g>
  <g fill="#eea66f" stroke="currentColor" stroke-width="0.8">
    <circle cx="240" cy="120" r="6"/><circle cx="200" cy="80" r="6"/><circle cx="120" cy="80" r="6"/><circle cx="80" cy="120" r="6"/>
    <circle cx="80" cy="200" r="6"/><circle cx="120" cy="240" r="6"/><circle cx="200" cy="240" r="6"/><circle cx="240" cy="200" r="6"/>
  </g>
  <g fill="#9cc9ea" stroke="currentColor" stroke-width="0.8">
    <circle cx="200" cy="120" r="6"/><circle cx="120" cy="120" r="6"/><circle cx="120" cy="200" r="6"/><circle cx="200" cy="200" r="6"/>
  </g>
  <g fill="currentColor" font-size="12">
    <text x="250" y="116">2+i</text>
    <text x="250" y="212">2−i</text>
    <text x="207" y="138">1+i</text>
    <text x="206" y="74">1+2i</text>
    <text x="166" y="154">0</text>
    <text x="292" y="154">Re</text>
    <text x="166" y="30">Im</text>
  </g>
  <g font-size="12">
    <circle cx="40" cy="325" r="6" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
    <text x="52" y="329" fill="currentColor">norm 5: the 8 associates of 2±i</text>
    <circle cx="40" cy="343" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
    <text x="52" y="347" fill="currentColor">norm 2: the 4 associates of 1+i</text>
  </g>
</svg>
</div>

### The Gaussian primes

**Theorem 18.4.** Every prime of $\mathbb{Z}[i]$ is an associate of exactly one of:

1. $1 + i$ (norm 2), and $2 = -i(1+i)^2$;
2. an ordinary prime $q \equiv 3 \pmod 4$ (norm $q^2$), which stays prime in $\mathbb{Z}[i]$;
3. $a + bi$ or $a - bi$, where $a^2 + b^2 = p$ is an ordinary prime $p \equiv 1 \pmod 4$; these two are not associates,
   and $p = (a + bi)(a - bi)$.

The key step is a fact about ordinary primes.

**Lemma 18.5.** If $p \equiv 1 \pmod 4$ is prime, there is an integer $n$ with $n^2 \equiv -1 \pmod p$.

*Proof.* **Wilson's theorem** says $(p-1)! \equiv -1 \pmod p$. (In the field $\mathbb{F}_p$, pair each nonzero element
with its inverse. Only $1$ and $-1$ are their own inverses, since $x^2 = 1$ means $(x-1)(x+1) = 0$. So the product of
all nonzero elements is $1 \cdot (-1) = -1$.) Now pair $k$ with $p - k \equiv -k$:

$$
-1 \equiv (p-1)! = \prod_{k=1}^{(p-1)/2} k\,(p-k) \equiv \prod_{k=1}^{(p-1)/2} (-k^2) = (-1)^{(p-1)/2} \left( \left(\tfrac{p-1}{2}\right)! \right)^2 .
$$

When $p \equiv 1 \pmod 4$, $(p-1)/2$ is even, so $n = \left(\tfrac{p-1}{2}\right)!$ has $n^2 \equiv -1$. $\blacksquare$

Check with $p = 13$: $6! = 720 = 55 \cdot 13 + 5$, and $5^2 = 25 = 26 - 1 \equiv -1$.

**Theorem 18.6 (Fermat, two squares).** An odd prime $p$ is a sum of two squares if and only if $p \equiv 1 \pmod 4$.

*Proof.* Squares are $0$ or $1$ mod 4, so $a^2 + b^2$ is $0$, $1$ or $2$ mod 4, never $3$. That settles
$p \equiv 3 \pmod 4$.

Now let $p \equiv 1 \pmod 4$, and take $n$ from Lemma 18.5. Then $p$ divides $n^2 + 1 = (n + i)(n - i)$ in
$\mathbb{Z}[i]$. But $p$ divides neither factor, since $\tfrac{n}{p} \pm \tfrac{1}{p} i$ is not a Gaussian integer.
So $p$ is **not prime** in $\mathbb{Z}[i]$, and since $\mathbb{Z}[i]$ is a UFD it is **not irreducible**:
$p = \alpha\beta$ with neither a unit. Take norms: $p^2 = N(\alpha)N(\beta)$ with neither factor 1, so
$N(\alpha) = p$. Writing $\alpha = a + bi$, that says $a^2 + b^2 = p$. $\blacksquare$

The proof is also an **algorithm**: $\alpha$ is a common factor of $p$ and $n + i$, so
$\alpha = \gcd(p,\ n + i)$, computed by Euclid's algorithm in $\mathbb{Z}[i]$. For $p = 13$, $n = 5$, the first
division is $13/(5 + i) = 13(5 - i)/26 = 2.5 - 0.5i$. Rounding a half is a free choice; take $q = 2$, so $13 = 2(5 + i) + (3 - 2i)$, with $N(3 - 2i) = 13 < 26$. Next,
$(5 + i)/(3 - 2i) = (5+i)(3+2i)/13 = (13 + 13i)/13 = 1 + i$ exactly, so the remainder is $0$ and the gcd is $3 - 2i$.
And indeed $3^2 + 2^2 = 13$.

**Try it in Python** (continuing the code of 18.1). Euler's criterion says a non-square $c$ has
$c^{(p-1)/2} \equiv -1$, so $k = c^{(p-1)/4}$ has $k^2 \equiv -1$; this is much faster than a factorial:

```python
def two_squares(p):              # p a prime with p % 4 == 1
    c = next(c for c in range(2, p) if pow(c, (p - 1) // 2, p) == p - 1)
    k = pow(c, (p - 1) // 4, p)  # k*k = -1 mod p
    a, b = gcd_gauss((p, 0), (k, 1))
    return abs(a), abs(b)

for p in (13, 97, 1000000009):
    print(p, two_squares(p))     # (3, 2), (9, 4), (31400, 3747)
```

Check the last: $31400^2 + 3747^2 = 985{,}960{,}000 + 14{,}040{,}009 = 1{,}000{,}000{,}009$.

### Proof of Theorem 18.4

Let $\pi$ be a Gaussian prime. Then $\pi \mid \pi\bar\pi = N(\pi)$, an ordinary integer; factor $N(\pi)$ into ordinary
primes, and since $\pi$ is prime it divides one of them, $p$. Then $N(\pi) \mid N(p) = p^2$, so $N(\pi)$ is $p$ or
$p^2$.

- If $N(\pi) = p^2$, then $p = \pi \cdot (\text{unit})$, so $p$ itself is a Gaussian prime. By the proof of 18.6, this
  cannot happen for $p \equiv 1 \pmod 4$, nor for $p = 2 = -i(1+i)^2$. So $p \equiv 3 \pmod 4$.
- If $N(\pi) = p$, then $p$ is a sum of two squares, so $p = 2$ or $p \equiv 1 \pmod 4$, and $\pi = a + bi$ with
  $a^2 + b^2 = p$.

Conversely, an element of prime norm is irreducible (a factorization would split a prime norm), hence prime. And
$q \equiv 3 \pmod 4$ is irreducible: a proper factor would have norm $q$, which is not a sum of two squares. Finally,
$a + bi$ and $a - bi$ are associates only if $a - bi \in \{\pm(a+bi), \pm i(a+bi)\}$, which forces $a = 0$, $b = 0$
or $a = \pm b$; with $a^2 + b^2 = p$ prime that leaves only $p = 2$. $\blacksquare$

### Every sum of two squares

**Theorem 18.7.** A positive integer $n$ is a sum of two squares if and only if every prime $q \equiv 3 \pmod 4$
appears in $n$ to an even power.

*Proof.* *If:* by the **two-square identity**

$$
(a^2 + b^2)(c^2 + d^2) = (ac - bd)^2 + (ad + bc)^2,
$$

which is just $N(\alpha)N(\beta) = N(\alpha\beta)$ for $\alpha = a + bi$, $\beta = c + di$, a product of sums of two
squares is one. Each $p \equiv 1 \pmod 4$ and $2 = 1 + 1$ are sums of two squares, and $q^2 = q^2 + 0^2$.

*Only if:* suppose $q \equiv 3 \pmod 4$ divides $n = a^2 + b^2 = (a + bi)(a - bi)$. Since $q$ is a Gaussian prime, it
divides one factor, say $a + bi$, so $q \mid a$ and $q \mid b$. Then $q^2 \mid n$ and $n/q^2 = (a/q)^2 + (b/q)^2$. Repeat
until $q$ is gone: it left in pairs. $\blacksquare$

**Worked example.** $65 = 5 \cdot 13$. In $\mathbb{Z}[i]$, $5 = (2+i)(2-i)$ and $13 = (3+2i)(3-2i)$. A Gaussian
integer of norm 65 takes one factor from each pair:

$$
(2+i)(3+2i) = 4 + 7i, \qquad (2+i)(3-2i) = 8 - i .
$$

So $65 = 4^2 + 7^2 = 8^2 + 1^2$, the two representations in the table. Check: $16 + 49 = 65$ and $64 + 1 = 65$.
With three distinct primes $\equiv 1 \pmod 4$, such as $1105 = 5 \cdot 13 \cdot 17$, the choices give four
essentially different representations: $1105 = 4^2 + 33^2 = 9^2 + 32^2 = 12^2 + 31^2 = 23^2 + 24^2$.

## 18.5 Gauss's lemma and Eisenstein's criterion

*Level: advanced.* Now polynomials. In $\mathbb{Q}[x]$, a Euclidean domain, every polynomial factors uniquely into
irreducibles. But how do you tell whether a given polynomial is irreducible? For degree 2 or 3 a polynomial is
reducible over a field exactly when it has a root, and the rational root theorem
([Chapter 10](10-Roots-and-Coefficients.md)) lists the candidates. For degree 4 and above a polynomial can factor with
no roots at all, like $x^4 + 4 = (x^2 + 2x + 2)(x^2 - 2x + 2)$. We need better tools.

The first problem: $\mathbb{Q}[x]$ has fractions, and factoring over $\mathbb{Q}$ might need them. Gauss's lemma says it
never does.

**Definitions.** The **content** of a nonzero $f \in \mathbb{Z}[x]$ is the gcd of its coefficients. $f$ is
**primitive** if its content is 1. Every nonzero $f \in \mathbb{Q}[x]$ can be written $f = c \cdot f_0$ with $c$
rational and $f_0$ primitive in $\mathbb{Z}[x]$ (clear denominators, then pull out the gcd), and this is unique up to
sign. For example $\tfrac{3}{2}x^2 - 6 = \tfrac32 (x^2 - 4)$.

**Lemma 18.8 (Gauss's lemma).** The product of two primitive polynomials is primitive.

*Proof.* Let $f, g$ be primitive and suppose a prime $p$ divides every coefficient of $fg$. Reduce mod $p$: write
$\bar f$ for $f$ with coefficients taken mod $p$, in $\mathbb{F}_p[x]$. Then $\bar f \bar g = \overline{fg} = 0$. But
$\mathbb{F}_p[x]$ is an integral domain, so $\bar f = 0$ or $\bar g = 0$: $p$ divides every coefficient of $f$ or of
$g$, contradicting primitivity. $\blacksquare$

**Corollary 18.9.** If $f \in \mathbb{Z}[x]$ factors as $f = gh$ in $\mathbb{Q}[x]$, then it factors as
$f = g_1 h_1$ in $\mathbb{Z}[x]$ with $\deg g_1 = \deg g$ and $\deg h_1 = \deg h$.

*Proof.* Write $g = a\, g_0$ and $h = b\, h_0$ with $a, b \in \mathbb{Q}$ and $g_0, h_0$ primitive. Then
$f = ab \cdot g_0 h_0$, and $g_0 h_0$ is primitive by the lemma. Write $ab = r/s$ in lowest terms, with $s > 0$; then
$s f = r\, g_0 h_0$. Every coefficient of the left side is divisible by $s$, so $s$ divides every coefficient of
$r\, g_0 h_0$; since $\gcd(r, s) = 1$, $s$ divides every coefficient of $g_0 h_0$. That polynomial is primitive, so
$s = 1$. Thus $ab = r$ is an integer and $f = (r g_0) \cdot h_0$, a factorization in $\mathbb{Z}[x]$ with the same
degrees. $\blacksquare$

So to factor over $\mathbb{Q}$ you may stay inside $\mathbb{Z}$. The same argument, with "prime of $R$" for "prime
number" and the fraction field of $R$ for $\mathbb{Q}$, proves:

**Theorem 18.10.** If $R$ is a UFD, so is $R[x]$. Hence $\mathbb{Z}[x]$, $\mathbb{Z}[x, y]$ and $F[x_1, \ldots, x_n]$
are UFDs.

(Sketch: the irreducibles of $R[x]$ are the primes of $R$, as constants, and the primitive polynomials that are
irreducible over the fraction field. Existence of factorizations uses degrees and the factorization in $R$; uniqueness
uses Gauss's lemma to move between $R[x]$ and the fraction field's polynomial ring, which is Euclidean. The full
proof is in Dummit and Foote, section 9.3.) This is the UFD that is not a PID promised in 18.3.

**Theorem 18.11 (Eisenstein's criterion).** Let $f = a_n x^n + \cdots + a_1 x + a_0 \in \mathbb{Z}[x]$ and let $p$ be a
prime with

$$
p \nmid a_n, \qquad p \mid a_{n-1}, \ldots, p \mid a_1, p \mid a_0, \qquad p^2 \nmid a_0 .
$$

Then $f$ is irreducible in $\mathbb{Q}[x]$.

*Proof.* By Corollary 18.9 it is enough to rule out $f = gh$ in $\mathbb{Z}[x]$ with $\deg g = k \ge 1$ and
$\deg h = n - k \ge 1$. Reduce mod $p$: all coefficients but the leading one vanish, so $\bar g \bar h = \bar a_n x^n$.
Since $p \nmid a_n$, the leading coefficients of $g$ and $h$ are not divisible by $p$, so $\deg \bar g = k$ and
$\deg \bar h = n - k$. In the UFD $\mathbb{F}_p[x]$, the only factors of $\bar a_n x^n$ are constants times powers of
$x$, so $\bar g = b x^k$ and $\bar h = c x^{n-k}$ with $k, n - k \ge 1$. Their constant terms are $0$: $p$ divides the
constant terms $g_0$ and $h_0$ of $g$ and $h$. Then $p^2 \mid g_0 h_0 = a_0$, a contradiction. $\blacksquare$

**Examples.**

- $x^n - 2$ is irreducible for every $n$ ($p = 2$). So $\mathbb{Q}[x]$ has irreducibles of every degree, unlike
  $\mathbb{R}[x]$, whose irreducibles have degree 1 or 2 ([Chapter 12](12-The-Fundamental-Theorem-of-Algebra.md)).
- $x^5 - 4x + 2$ is irreducible ($p = 2$: $2 \mid -4$, $2 \mid 2$, $4 \nmid 2$). It returns in
  [Chapter 20](20-Galois-Theory.md) as a quintic that cannot be solved by radicals.
- $3x^4 + 15x^2 + 10$ is irreducible ($p = 5$).

**The shift trick: cyclotomic polynomials.** Let $p$ be prime. The **cyclotomic polynomial**

$$
\Phi_p(x) = \frac{x^p - 1}{x - 1} = x^{p-1} + x^{p-2} + \cdots + x + 1
$$

has as roots the $p$-th roots of unity other than 1 ([Chapter 9](09-Complex-Numbers.md)). Eisenstein does not apply
directly (all coefficients are 1). But $f(x)$ is irreducible exactly when $f(x+1)$ is, since a factorization of one
gives one of the other. And

$$
\Phi_p(x + 1) = \frac{(x+1)^p - 1}{x} = x^{p-1} + \binom{p}{1} x^{p-2} + \binom{p}{2} x^{p-3} + \cdots + \binom{p}{p-1} .
$$

Each $\binom{p}{k}$ with $0 < k < p$ is divisible by $p$ (the $p$ in $p!$ is not cancelled by $k!(p-k)!$), and the
constant term is $\binom{p}{p-1} = p$, not divisible by $p^2$. Eisenstein applies: **$\Phi_p$ is irreducible.** For
$p = 5$: $\Phi_5(x + 1) = x^4 + 5x^3 + 10x^2 + 10x + 5$.

## 18.6 Irreducibility tests mod $p$

*Level: advanced.* Eisenstein's proof reduced mod $p$. Reducing is useful on its own, because over the finite field
$\mathbb{F}_p$ there are only finitely many polynomials of each degree to try.

**Theorem 18.12.** Let $f \in \mathbb{Z}[x]$, and let $p$ be a prime not dividing the leading coefficient of $f$. If
$\bar f$ is irreducible in $\mathbb{F}_p[x]$, then $f$ is irreducible in $\mathbb{Q}[x]$.

*Proof.* If $f = gh$ with both degrees at least 1, we may take $g, h \in \mathbb{Z}[x]$ (Corollary 18.9). Their
leading coefficients multiply to that of $f$, so $p$ divides neither, and $\bar f = \bar g \bar h$ is a factorization
into polynomials of the same positive degrees. $\blacksquare$

**Worked example: $x^4 + x + 1$.** Mod 2:

1. No roots: $f(0) = 1$, $f(1) = 1 + 1 + 1 = 1$ in $\mathbb{F}_2$. So no linear factor.
2. The quadratics over $\mathbb{F}_2$ are $x^2$, $x^2 + 1 = (x+1)^2$, $x^2 + x = x(x+1)$ and $x^2 + x + 1$. Only the last
   is irreducible. A product of two quadratics without roots would be $(x^2 + x + 1)^2 = x^4 + x^2 + 1 \ne x^4 + x + 1$.

So $x^4 + x + 1$ is irreducible mod 2, hence over $\mathbb{Q}$. (It is also the polynomial that builds the field of 16
elements in [Chapter 19](19-Fields-and-Extensions.md).)

**Combining primes.** Sometimes no single prime works, but two together do. Take $f = x^4 - x^3 - x + 2$. It is monic,
so any factorization over $\mathbb{Z}$ has degrees $1 + 3$ or $2 + 2$.

- Mod 2: $f \equiv x^4 + x^3 + x = x(x^3 + x^2 + 1)$, and the cubic has no roots mod 2, so it is irreducible. By unique
  factorization in $\mathbb{F}_2[x]$, $\bar f$ has no factorization into two quadratics. **Rules out $2 + 2$.**
- Mod 3: $f \equiv (x^2 + 1)(x^2 - x - 1)$, and neither quadratic has a root mod 3 (try $0, 1, 2$). So $\bar f$ has no
  root, and no linear factor. **Rules out $1 + 3$.**

Both splittings are impossible, so $f$ is irreducible over $\mathbb{Q}$. Check the mod 3 product:
$(x^2+1)(x^2-x-1) = x^4 - x^3 - x - 1 \equiv x^4 - x^3 - x + 2$.

**A warning: $x^4 + 1$.** It is irreducible over $\mathbb{Q}$: $(x+1)^4 + 1 = x^4 + 4x^3 + 6x^2 + 4x + 2$ is Eisenstein
at 2. Yet it factors mod **every** prime:

$$
x^4 + 1 \equiv (x + 1)^4 \pmod 2, \qquad \equiv (x^2 + x - 1)(x^2 - x - 1) \pmod 3, \qquad \equiv (x^2 + 2)(x^2 - 2) \pmod 5 .
$$

(The reason, for odd $p$: $p^2 - 1$ is divisible by 8, so the cyclic group $\mathbb{F}_{p^2}^\times$ of order $p^2 - 1$
contains an element of order 8, a root of $x^4 + 1$ lying in a field of degree 2 over $\mathbb{F}_p$. Its minimal
polynomial over $\mathbb{F}_p$ has degree at most 2. This uses Chapter 19's finite fields.) So the mod $p$ test can fail
for every $p$; it is a sufficient condition, not a necessary one.

**How computers factor.** Hans Zassenhaus (1969) turned these ideas into an algorithm: factor mod $p$ (Elwyn
Berlekamp's 1967 algorithm does this quickly), lift the factorization to mod $p^k$ by Hensel's lemma, then try
combinations of the lifted factors. Trying combinations can be exponential in bad cases like $x^4 + 1$ in high degree;
the 1982 LLL lattice algorithm of Arjen Lenstra, Hendrik Lenstra and László Lovász gave the first polynomial-time
method for factoring in $\mathbb{Q}[x]$. Every computer algebra system descends from this line.

## 18.7 Kummer, ideals and Fermat's last theorem

*Level: expert.* Around 1637 Pierre de Fermat wrote in the margin of his copy of Diophantus that $x^n + y^n = z^n$ has
no solutions in positive integers when $n \ge 3$, and that the margin was too small for his proof. We know about the
note only because his son printed it in an edition of 1670. Fermat did leave a proof for $n = 4$, by "infinite descent".
Euler handled $n = 3$ in his *Algebra* (1770), with a gap later filled; Dirichlet and Legendre did $n = 5$ around 1825;
Lamé did $n = 7$ in 1839. Since $n = 4$ is done, it is enough to treat odd primes $n = p$.

### Lamé's announcement

On 1 March 1847, Gabriel Lamé told the Paris Academy of Sciences that he had a proof for all $p$. His idea was
algebraic. Let $\zeta = e^{2\pi i/p}$, a primitive $p$-th root of unity. Then

$$
x^p + y^p = (x + y)(x + \zeta y)(x + \zeta^2 y) \cdots (x + \zeta^{p-1} y),
$$

a factorization in the ring $\mathbb{Z}[\zeta]$. If $x^p + y^p = z^p$, the product on the right is a $p$-th power. If
the factors have no common factor and **factorization is unique**, each factor must itself be a $p$-th power times a
unit, just as in $\mathbb{Z}$ coprime numbers whose product is a square are each squares up to sign. From there Lamé
derived a contradiction.

Joseph Liouville stood up at the same meeting and asked the obvious question: why should factorization in
$\mathbb{Z}[\zeta]$ be unique? Over the next weeks the Academy argued, and Augustin-Louis Cauchy, who was working on
similar ideas, became involved. Then, in May 1847, Liouville read out a letter from Ernst Kummer in Breslau. Kummer had
shown in 1844 that unique factorization **fails** in $\mathbb{Z}[\zeta_{23}]$, and he had already found a way around
it.

### Ideal numbers

Kummer's way around was to invent new, "ideal" prime factors that do not exist as elements of the ring but behave as
if they did. You saw the problem in $\mathbb{Z}[\sqrt{-5}]$: $6 = 2 \cdot 3 = (1 + \sqrt{-5})(1 - \sqrt{-5})$. Imagine
hidden primes $P, Q, Q'$ with

$$
2 = P^2, \qquad 3 = Q Q', \qquad 1 + \sqrt{-5} = P Q, \qquad 1 - \sqrt{-5} = P Q' .
$$

Then both factorizations of 6 are $P^2 Q Q'$, just grouped differently, and uniqueness is restored. Richard Dedekind, in
the 1870s, gave these phantoms a concrete form: an "ideal prime" is an **ideal**, a set of ring elements, which is where
the word comes from. Multiply ideals by $IJ = \{$sums of products $ab$ with $a \in I$, $b \in J\}$, and take

$$
P = (2,\ 1 + \sqrt{-5}), \qquad Q = (3,\ 1 + \sqrt{-5}), \qquad Q' = (3,\ 1 - \sqrt{-5}) .
$$

**Check $P^2 = (2)$.** $P^2$ is generated by the products of generators: $4$, $2 + 2\sqrt{-5}$, and
$(1 + \sqrt{-5})^2 = -4 + 2\sqrt{-5}$. All three are multiples of 2, so $P^2 \subseteq (2)$. And
$(2 + 2\sqrt{-5}) - (-4 + 2\sqrt{-5}) = 6$, and $6 - 4 = 2$, so $2 \in P^2$. Hence $P^2 = (2)$.

**Check $PQ = (1 + \sqrt{-5})$.** Generators: $6$, $2 + 2\sqrt{-5}$, $3 + 3\sqrt{-5}$ and $(1+\sqrt{-5})^2$. Each is a
multiple of $1 + \sqrt{-5}$ (for $6$, because $6 = (1+\sqrt{-5})(1-\sqrt{-5})$), and
$(3 + 3\sqrt{-5}) - (2 + 2\sqrt{-5}) = 1 + \sqrt{-5}$ is in $PQ$.

**Check $QQ' = (3)$.** Generators: $9$, $3 - 3\sqrt{-5}$, $3 + 3\sqrt{-5}$, $6$. All multiples of 3, and $9 - 6 = 3$.

So in terms of ideals, $(6) = P^2 Q Q'$, uniquely. Dedekind proved that in the ring of integers of any number field
**every nonzero ideal factors uniquely into prime ideals**, even when elements do not. Rings with this property are now
called **Dedekind domains**. The failure of unique factorization of elements is measured by the **ideal class group**,
the group of ideals modulo principal ones; its size is the **class number**. For $\mathbb{Z}[\sqrt{-5}]$ the class
number is 2: every ideal is principal or "like $P$". [Chapter 22](22-Where-Algebra-Goes.md) returns to class groups.

### What Kummer proved, and what came later

Kummer called a prime $p$ **regular** if $p$ does not divide the class number of $\mathbb{Q}(\zeta_p)$, and proved:

> **Kummer (1847-1850).** If $p$ is a regular prime, then $x^p + y^p = z^p$ has no solution in positive integers.

The idea: Lamé's argument needs "a product of coprime factors is a $p$-th power, so each factor is". With ideals,
unique factorization gives that each factor's **ideal** is a $p$-th power, $I^p$. If $p$ does not divide the class
number, then $I^p$ principal forces $I$ principal, and Lamé's argument goes through (with real extra work on units).
Kummer also found a practical test: $p$ is regular exactly when $p$ divides none of the numerators of the Bernoulli
numbers $B_2, B_4, \ldots, B_{p-3}$. The irregular primes below 100 are 37, 59 and 67. It is still unknown whether
there are infinitely many regular primes, although infinitely many irregular primes are known to exist (K. L. Jensen,
1915).

So the honest summary of 1847 is: Lamé's proof was wrong because it assumed unique factorization; Kummer's repair worked
for many exponents but not all; and in the process algebra gained ideals, class groups and the arithmetic of number
fields, which mattered more than the theorem.

The theorem itself fell to a completely different route. In 1984 Gerhard Frey suggested that a solution
$a^p + b^p = c^p$ would give an elliptic curve $y^2 = x(x - a^p)(x + b^p)$ so strange that it could not be
**modular**. Kenneth Ribet proved this in 1986 (building on a conjecture of Jean-Pierre Serre). So it was enough to
prove that enough elliptic curves are modular. Andrew Wiles announced a proof in June 1993; a gap was found that
autumn; Wiles and his former student Richard Taylor closed it in September 1994, and the two papers appeared in the
*Annals of Mathematics* in 1995. The proof uses Galois representations ([Chapter 21](21-Modules-and-Representations.md))
and the Langlands programme ([Chapter 22](22-Where-Algebra-Goes.md)), and it is the outstanding example of the modern
idea that equations are best understood through their symmetries.

## Check yourself

??? question "1. Divide $7 + 5i$ by $2 + i$ in $\mathbb{Z}[i]$, giving $q$ and $r$ with $N(r) < N(2 + i)$."

    $\dfrac{7 + 5i}{2 + i} = \dfrac{(7+5i)(2-i)}{5} = \dfrac{14 - 7i + 10i + 5}{5} = \dfrac{19 + 3i}{5} = 3.8 + 0.6i$.
    Round: $q = 4 + i$. Then $r = 7 + 5i - (2+i)(4+i) = 7 + 5i - (8 + 2i + 4i - 1) = 7 + 5i - (7 + 6i) = -i$.
    Check: $N(r) = 1 < 5$.

??? question "2. Find all Gaussian integers of norm 25, and say how many are associates of $3 + 4i$."

    $a^2 + b^2 = 25$: $(\pm 5, 0)$, $(0, \pm 5)$, $(\pm 3, \pm 4)$, $(\pm 4, \pm 3)$, twelve in all.
    The associates of $3 + 4i$ are $3 + 4i$, $-3 - 4i$, $i(3+4i) = -4 + 3i$ and $-i(3+4i) = 4 - 3i$: four of them.
    In factored form, $3 + 4i = (2+i)^2$, $5 = (2+i)(2-i)$ and $3 - 4i = (2-i)^2$, which is why there are three
    association classes ($3+4i$, $3-4i$, $5$) of four elements each.

??? question "3. Use the Gaussian gcd to write 97 as a sum of two squares."

    $97 \equiv 1 \pmod 4$. Find $n$ with $n^2 \equiv -1$: $22^2 = 484 = 5 \cdot 97 - 1$, so $n = 22$.
    Now $\gcd(97, 22 + i)$: $97/(22+i) = 97(22 - i)/485 = (22 - i)/5 = 4.4 - 0.2i$, so $q = 4$,
    $r = 97 - 4(22 + i) = 9 - 4i$. Next $(22 + i)/(9 - 4i) = (22+i)(9+4i)/97 = (194 + 97i)/97 = 2 + i$ exactly, so the
    gcd is $9 - 4i$, and $97 = 9^2 + 4^2 = 81 + 16$.

??? question "4. Which of 245, 300 and 325 are sums of two squares? Give a representation when there is one."

    $245 = 5 \cdot 7^2$: the prime $7 \equiv 3$ appears to an even power, so yes: $245 = 7^2(1 + 4) = 7^2 + 14^2 = 49 + 196$.
    $300 = 2^2 \cdot 3 \cdot 5^2$: $3$ appears to an odd power, so no.
    $325 = 5^2 \cdot 13$: yes, for example $1^2 + 18^2$, $6^2 + 17^2$ and $10^2 + 15^2$.

??? question "5. Show that $\mathbb{Z}[\sqrt{-3}]$ is not a UFD, using $4$."

    $4 = 2 \cdot 2 = (1 + \sqrt{-3})(1 - \sqrt{-3})$. The norm is $a^2 + 3b^2$, so the units are $\pm 1$, and
    $N(2) = N(1 \pm \sqrt{-3}) = 4$. A proper factor would have norm 2, but $a^2 + 3b^2 = 2$ has no solutions. So all
    three are irreducible, and $2$ is not an associate of $1 \pm \sqrt{-3}$. Two different factorizations.
    (The larger ring $\mathbb{Z}[\omega]$, $\omega = \tfrac{-1 + \sqrt{-3}}{2}$, is a UFD; there
    $1 + \sqrt{-3} = 2(1 + \omega)$, and $1 + \omega$ is a unit.)

??? question "6. Show that $(2, x)$ is a maximal ideal of $\mathbb{Z}[x]$ but not principal."

    Evaluating at $x = 0$ and then reducing mod 2 is a surjective homomorphism $\mathbb{Z}[x] \to \mathbb{F}_2$ whose
    kernel is the polynomials with even constant term, which is $(2, x)$. The quotient is the field $\mathbb{F}_2$, so the
    ideal is maximal. Not principal: a generator would divide 2, so be $\pm 1$ or $\pm 2$; $\pm 1$ gives the whole ring
    (but $1 \notin (2,x)$) and $\pm 2$ does not divide $x$.

??? question "7. Prove that $x^4 + 10x + 5$ and $x^3 - 9x^2 + 6x + 3$ are irreducible over $\mathbb{Q}$."

    Eisenstein with $p = 5$ for the first: $5 \mid 10$, $5 \mid 5$, $25 \nmid 5$, leading coefficient 1.
    Eisenstein with $p = 3$ for the second: $3 \mid -9, 6, 3$ and $9 \nmid 3$.

??? question "8. Show that $f = x^3 + 4x^2 + 6x + 7$ is irreducible, using reduction mod 2."

    Mod 2, $\bar f = x^3 + 1 = (x + 1)(x^2 + x + 1)$, which is reducible: the test fails at 2. Try mod 3:
    $\bar f = x^3 + x^2 + 1$, with $\bar f(0) = 1$, $\bar f(1) = 3 \equiv 0$. Reducible again. Try mod 5:
    $\bar f = x^3 + 4x^2 + x + 2$, with values $2, 8 \equiv 3, 8 + 16 + 2 + 2 = 28 \equiv 3, 27 + 36 + 3 + 2 = 68 \equiv 3,
    64 + 64 + 4 + 2 = 134 \equiv 4$ at $0, 1, 2, 3, 4$. No roots, and a cubic without roots over a field is irreducible.
    So $f$ is irreducible over $\mathbb{Q}$. (The rational root theorem gives the same: the candidates $\pm 1, \pm 7$
    are not roots.)

??? question "9. In $\mathbb{Z}[\sqrt{-5}]$, show that $3$ is not prime by exhibiting a product it divides."

    $3 \cdot 3 = 9 = (2 + \sqrt{-5})(2 - \sqrt{-5})$. If $3$ divided $2 + \sqrt{-5}$, the quotient
    $\tfrac23 + \tfrac13\sqrt{-5}$ would be in the ring; it is not. Same for $2 - \sqrt{-5}$. So $3$ divides the product
    but neither factor. (Equivalently, $(6) = (1+\sqrt{-5})(1-\sqrt{-5})$ from the text.)

??? question "10. Let $R$ be a PID and $a, b \in R$ with $(a, b) = (d)$. Prove that $d$ is a gcd of $a$ and $b$, and that $a$ and $b$ are coprime exactly when $ra + sb = 1$ is solvable."

    $a \in (d)$ and $b \in (d)$ so $d \mid a$, $d \mid b$. And $d \in (a, b)$ means $d = ra + sb$; any common divisor $c$
    of $a, b$ divides $ra + sb = d$. So $d$ is a gcd. "Coprime" means the gcd is a unit, i.e. $(a, b) = (1) = R$, i.e.
    $1 \in (a, b)$, i.e. $1 = ra + sb$ for some $r, s$.

??? question "11. Prove that $\Phi_p(x) = x^{p-1} + \cdots + 1$ is irreducible for $p = 7$ by writing out $\Phi_7(x + 1)$."

    $\Phi_7(x+1) = ((x+1)^7 - 1)/x = x^6 + 7x^5 + 21x^4 + 35x^3 + 35x^2 + 21x + 7$. All lower coefficients are divisible by
    7 (they are $\binom{7}{k}$), and $49 \nmid 7$: Eisenstein at 7.

??? question "12. Use unique factorization of ideals to explain why $(1 + \sqrt{-5})(1 - \sqrt{-5}) = 2 \cdot 3$ is not a contradiction. Express both sides as products of $P$, $Q$, $Q'$."

    From 18.7, $(1 + \sqrt{-5}) = PQ$ and similarly $(1 - \sqrt{-5}) = PQ'$ (apply complex conjugation, which fixes $P$
    because $P = (2, 1 - \sqrt{-5})$ too: $1 - \sqrt{-5} = 2 - (1 + \sqrt{-5})$). So the left side is $P^2 Q Q'$. And
    $(2) = P^2$, $(3) = QQ'$, so the right side is $P^2 Q Q'$ too. The element factorizations are two different groupings
    of the same prime ideals.

## What you learned

- In an integral domain, prime implies irreducible; the converse can fail, and that failure is exactly what breaks unique
  factorization.
- A division algorithm gives principal ideals (Euclidean $\Rightarrow$ PID), principal ideals give Euclid's lemma and
  factorization (PID $\Rightarrow$ UFD), and both implications are strict.
- $\mathbb{Z}[i]$ is Euclidean; its primes are $1+i$, the primes $q \equiv 3 \pmod 4$, and the factors $a \pm bi$ of the
  primes $p = a^2 + b^2 \equiv 1 \pmod 4$. That proves Fermat's two-squares theorem, with a fast algorithm.
- $\mathbb{Z}[\sqrt{-5}]$ is not a UFD: $6 = 2 \cdot 3 = (1+\sqrt{-5})(1-\sqrt{-5})$. Prime ideals restore uniqueness.
- Gauss's lemma lets you factor over $\mathbb{Z}$ instead of $\mathbb{Q}$; Eisenstein and reduction mod $p$ prove
  irreducibility, and $x^4 + 1$ shows the limits of the mod $p$ test.
- Lamé's 1847 proof of Fermat's last theorem assumed unique factorization; Kummer's ideal numbers rescued it for regular
  primes and founded algebraic number theory; Wiles and Taylor finished the theorem by another road in 1994.

**Next:** [Chapter 19](19-Fields-and-Extensions.md), fields built by adjoining roots of polynomials, which settles the
three ancient construction problems.

## Further reading

- D. S. Dummit and R. M. Foote, *Abstract Algebra*, 3rd ed., 2004, chapters 8 and 9 (Euclidean domains, PIDs, UFDs,
  polynomial rings).
- M. Artin, *Algebra*, 2nd ed., 2011, chapter 12 (factoring) and chapter 13 (quadratic number fields, ideal factorization).
- K. Ireland and M. Rosen, *A Classical Introduction to Modern Number Theory*, 2nd ed., 1990, chapter 1 (unique
  factorization) and chapter 17 (Fermat's last theorem and Kummer).
- H. M. Edwards, *Fermat's Last Theorem: A Genetic Introduction to Algebraic Number Theory*, 1977 (the history of 18.7
  in detail, with Kummer's mathematics).
- A. Wiles, "Modular elliptic curves and Fermat's Last Theorem", and R. Taylor and A. Wiles, "Ring-theoretic properties
  of certain Hecke algebras", *Annals of Mathematics* 141, 1995.
- On this site: [Unique factorisation](../../topics/number-theory/level-6/06-unique-factorisation.md),
  [Sums of two squares](../../topics/number-theory/level-7/06-sums-two-squares.md),
  [Euclid's algorithm](../../topics/number-theory/level-4/04-euclids-algorithm.md),
  [Bézout's identity](../../topics/number-theory/level-6/01-bezout-identity.md) (Topics); MAT240
  [Unit 9: Polynomials, UFD and resultants](../../uoft/MAT240H1/unit09.md) (U of T); the cryptography book's arithmetic
  chapters at <https://cryptography.akadian.ca/book/>, where Euclid's algorithm and finite fields do real work.
