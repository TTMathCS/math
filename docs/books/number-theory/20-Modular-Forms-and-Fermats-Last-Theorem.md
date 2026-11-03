# 20. Modular forms and Fermat's last theorem

*Around 1637 Pierre de Fermat wrote in the margin of his copy of Diophantus that $x^n + y^n = z^n$ has no solution in
positive whole numbers when $n \ge 3$, and that he had a marvellous proof which the margin was too narrow to contain. For
more than 350 years nobody found one. The proof that finally came, in 1994, is not about the equation at all. It is about
elliptic curves ([Chapter 19](19-Elliptic-Curves.md)) and about **modular forms**, functions on the upper half of the complex
plane with so much symmetry that their Fourier coefficients carry deep arithmetic. This chapter tells that story honestly:
what was known before, what modular forms are (with examples you can check on a computer), how a hypothetical solution of
Fermat's equation would give an elliptic curve too strange to exist, how Andrew Wiles proved that it cannot exist, and
what is still open.*

!!! abstract "In this chapter"
    **You will learn:**

    - the history of Fermat's last theorem before 1985: the cases $n = 4$ and $n = 3$, Sophie Germain, Kummer and ideal numbers
    - the modular group, the upper half-plane and its fundamental domain, with proofs
    - what a modular form is; Eisenstein series, $q$-expansions, the discriminant form $\Delta$ and Ramanujan's $\tau(n)$
    - why finite-dimensionality of spaces of modular forms proves identities between divisor sums
    - the Frey curve, Ribet's theorem and the Taniyama-Shimura conjecture, and how they combine into a proof of Fermat
    - an honest history of Wiles's work of 1986 to 1995, and the generalised Fermat equations that remain open

    **You need:** elliptic curves and the numbers $a_p$ ([Chapter 19](19-Elliptic-Curves.md)), Fermat's descent
    ([Chapter 9](09-Diophantine-Equations.md)), rings of integers and ideals ([Chapter 17](17-Algebraic-Number-Theory.md)),
    divisor sums $\sigma_k(n)$ ([Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md)) and complex
    numbers with $e^{i\theta}$ ([Algebra, Chapter 9](../algebra/09-Complex-Numbers.md)). Power series and absolute convergence
    ([MAT137 Unit 14](../../uoft/MAT137/unit14.md)) help in 20.2.

    **Levels:** 20.1 is advanced (history with two full proofs); 20.2 is expert, with proofs of the basic facts and honest
    statements of the deep ones; 20.3 and 20.4 are expert and mostly narrative; 20.5 is a survey.

## 20.1 Fermat's claim and 350 years

*Level: advanced.* Fermat's note is in his copy of the 1621 Latin edition of Diophantus's *Arithmetica* prepared by
Claude Gaspard Bachet, beside a problem about writing a square as a sum of two squares. Fermat's own copy is lost; we know
the note because his son Samuel printed it in a new edition of Diophantus with his father's notes in 1670. In translation:
"It is impossible to separate a cube into two cubes, or a fourth power into two fourth powers, or in general any power
higher than the second into two like powers. I have discovered a truly marvellous proof of this, which this margin is too
narrow to contain." Nobody knows what Fermat had in mind. He wrote out only the case $n = 4$, and he later posed the cases
$n = 3$ and $n = 4$ as challenges to others, which suggests he did not keep believing he had a general proof.

**Fermat's last theorem.** For every integer $n \ge 3$, the equation $x^n + y^n = z^n$ has no solution in positive
integers.

### It is enough to treat $n = 4$ and odd primes

If $n$ has an odd prime factor $p$, say $n = pm$, then a solution of $x^n + y^n = z^n$ gives the solution
$(x^m)^p + (y^m)^p = (z^m)^p$ for exponent $p$. If $n$ has no odd prime factor, it is a power of 2, at least 4, so $n = 4m$ and
$(x^m)^4 + (y^m)^4 = (z^m)^4$. So **it is enough to prove the theorem for $n = 4$ and for every odd prime $n = p$.**

### The case $n = 4$

Fermat proved more: **$x^4 + y^4 = z^2$ has no solution in positive integers**, and since a fourth power is a square, this
covers $n = 4$. The proof, by infinite descent, is in [Chapter 9](09-Diophantine-Equations.md); here is its skeleton. Take a
solution with $z$ as small as possible; then $x$, $y$ are coprime and $(x^2, y^2, z)$ is a primitive Pythagorean triple, say
with $y$ even. The parametrisation gives $x^2 = r^2 - s^2$, $y^2 = 2rs$, $z = r^2 + s^2$. Then $(x, s, r)$ is another
Pythagorean triple, and since $2rs$ is a square, $r$ and the parts of $s$ are squares; unpacking yields a new solution
$x'^4 + y'^4 = z'^2$ with $0 < z' < z$, a contradiction.

### Before Wiles: three centuries of partial results

- **$n = 3$.** Euler gave a proof in his *Algebra* (1770). It contained a gap about numbers of the form $a^2 + 3b^2$, which
  can be filled with his own methods; the clean modern proof works in the ring $\mathbb{Z}[\omega]$, $\omega = e^{2\pi i/3}$,
  which has unique factorization.
- **$n = 5$** was settled around 1825 by Dirichlet and Legendre; **$n = 7$** by Gabriel Lamé in 1839.
- **Sophie Germain** (early nineteenth century) proved that if $p$ and $2p + 1$ are both prime, then
  $x^p + y^p = z^p$ has no solution with $p$ dividing none of $x, y, z$ (the "first case"). Her method, which she
  communicated in letters to Gauss and Legendre, was the first general attack on all exponents.
- **Lamé and Kummer (1847).** Lamé announced to the Paris Academy a proof for all $n$, by factoring

  $x^p + y^p = (x + y)(x + \zeta y)(x + \zeta^2 y) \cdots (x + \zeta^{p-1} y)$, with $\zeta = e^{2\pi i/p}$,

  in the ring $\mathbb{Z}[\zeta]$ and arguing that, since the factors are nearly coprime and their product is a $p$-th power,
  each must be a $p$-th power. Joseph Liouville immediately pointed out that this needs unique factorization in
  $\mathbb{Z}[\zeta]$, and Ernst Kummer had already shown that unique factorization fails there for some $p$ (the smallest is
  $p = 23$). Kummer then repaired the argument with his "ideal numbers", the ancestors of ideals
  ([Chapter 17](17-Algebraic-Number-Theory.md)), and proved Fermat's theorem for all **regular** primes: those $p$ that do
  not divide the class number of $\mathbb{Q}(\zeta_p)$. All primes below 100 are regular except 37, 59 and 67. Whether
  there are infinitely many regular primes is still unknown (infinitely many irregular ones are known to exist).
- **Computation.** Building on Kummer's criteria, computers had verified the theorem for all exponents up to four million
  by 1993 (Buhler, Crandall, Ernvall and Metsänkylä).
- **Faltings (1983)** proved Mordell's conjecture: a curve of genus at least 2 has only finitely many rational points. It
  follows that for each $n \ge 4$, Fermat's equation has at most finitely many solutions with $\gcd(x, y, z) = 1$. But
  "finitely many" is not "none".

The proof that finally worked went in a different direction altogether, through objects that look at first like pure
complex analysis.

## 20.2 Modular forms

*Level: expert.* A **modular form** is a function on the upper half of the complex plane that transforms in a prescribed way
under a large group of symmetries. That one sentence needs four definitions.

### The upper half-plane and the modular group

The **upper half-plane** is $\mathbb{H} = \{z \in \mathbb{C} : \operatorname{Im} z > 0\}$. The **modular group** is

$$
\mathrm{SL}_2(\mathbb{Z}) = \left\{ \begin{pmatrix} a & b \\ c & d \end{pmatrix} : a, b, c, d \in \mathbb{Z},\ ad - bc = 1 \right\}.
$$

A matrix $\gamma$ in it acts on $\mathbb{H}$ by the **Möbius transformation**

$$
\gamma z = \frac{az + b}{cz + d}.
$$

**Lemma.** $\operatorname{Im}(\gamma z) = \dfrac{\operatorname{Im} z}{|cz + d|^2}$. In particular $\gamma$ maps $\mathbb{H}$
to itself.

*Proof.* Multiply top and bottom by $\overline{cz + d}$:
$\gamma z = \frac{(az + b)(c\bar z + d)}{|cz + d|^2}$. The numerator is $ac|z|^2 + bd + adz + bc\bar z$, whose imaginary
part is $(ad - bc)\operatorname{Im} z = \operatorname{Im} z$. $\square$

One checks that $(\gamma_1\gamma_2)z = \gamma_1(\gamma_2 z)$, so this is a group action. The matrices $\pm I$ act trivially.
Two elements matter most:

$$
T = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}: z \mapsto z + 1, \qquad S = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}: z \mapsto -\frac1z.
$$

### The fundamental domain

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 480 310" role="img" aria-label="The upper half-plane with the real axis from minus 1.5 to 1.5. The shaded fundamental domain is the region between the vertical lines at real part minus one half and one half, above the unit circle. The points i and rho equal to e to the 2 pi i over 3, and minus rho bar, are marked on its lower boundary arc.">
  <path d="M180,20 L180,176.08 A120,120 0 0,1 300,176.08 L300,20 Z" fill="#9cc9ea" fill-opacity="0.45" stroke="none"/>
  <line x1="40" y1="280" x2="440" y2="280" stroke="currentColor" stroke-width="1.2"/>
  <path d="M120,280 A120,120 0 0,1 360,280" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/>
  <path d="M180,176.08 A120,120 0 0,1 300,176.08" fill="none" stroke="#eea66f" stroke-width="3"/>
  <g stroke="#eea66f" stroke-width="3">
    <line x1="180" y1="176.08" x2="180" y2="20"/>
    <line x1="300" y1="176.08" x2="300" y2="20"/>
  </g>
  <g stroke="currentColor" stroke-width="1" stroke-dasharray="2 4">
    <line x1="60" y1="280" x2="60" y2="20"/>
    <line x1="420" y1="280" x2="420" y2="20"/>
  </g>
  <g fill="#7ccf9a" stroke="currentColor">
    <circle cx="240" cy="160" r="5"/>
    <circle cx="180" cy="176.08" r="5"/>
    <circle cx="300" cy="176.08" r="5"/>
  </g>
  <g fill="currentColor" font-size="14" text-anchor="middle">
    <text x="240" y="150">i</text>
    <text x="158" y="172">ρ</text>
    <text x="326" y="172">−ρ̄</text>
    <text x="120" y="300">−1</text>
    <text x="240" y="300">0</text>
    <text x="360" y="300">1</text>
    <text x="180" y="300">−½</text>
    <text x="300" y="300">½</text>
    <text x="240" y="80">D</text>
  </g>
</svg>
</div>

Let $D = \{z \in \mathbb{H} : |\operatorname{Re} z| \le \tfrac12,\ |z| \ge 1\}$, the shaded region in the drawing.

**Theorem.** Every $z \in \mathbb{H}$ can be moved into $D$ by an element of the group generated by $S$ and $T$.

*Proof.* For $\gamma$ with bottom row $(c, d)$, $\operatorname{Im}(\gamma z) = \operatorname{Im}(z)/|cz + d|^2$. Since
$z$ and $1$ are linearly independent over $\mathbb{R}$, the numbers $cz + d$ with integers $c, d$ form a lattice, and only
finitely many have $|cz + d| < 1$. So among the images $\gamma z$, for $\gamma$ in the group $G = \langle S, T \rangle$,
there is one, $w$, with the largest imaginary part. Apply a power of $T$ (which does not change the imaginary part) so that
$|\operatorname{Re} w| \le \tfrac12$. If $|w| < 1$, then $\operatorname{Im}(Sw) = \operatorname{Im}(w)/|w|^2 >
\operatorname{Im} w$, contradicting the choice. So $|w| \ge 1$ and $w \in D$. $\square$

With a little more work one shows that two different points of $D$ are equivalent only if they are on the boundary (the
left and right edges are matched by $T$, the two halves of the arc by $S$), and that $S$ and $T$ generate all of
$\mathrm{SL}_2(\mathbb{Z})$ (Serre, *A Course in Arithmetic*, Chapter VII). So $D$ is a **fundamental domain**: a map of
the whole half-plane up to symmetry. The points $i$ (fixed by $S$) and $\rho = e^{2\pi i/3}$ (fixed by $ST$) are special:
they have extra symmetry, and they appear in the formulas below.

### The definition

**Definition.** Let $k$ be an integer. A **modular form of weight $k$** (for $\mathrm{SL}_2(\mathbb{Z})$) is a holomorphic
(complex differentiable) function $f : \mathbb{H} \to \mathbb{C}$ such that

1. $f\!\left(\dfrac{az + b}{cz + d}\right) = (cz + d)^k f(z)$ for every $\begin{pmatrix} a & b \\ c & d\end{pmatrix} \in \mathrm{SL}_2(\mathbb{Z})$;
2. $f$ is **holomorphic at infinity**: it stays bounded as $\operatorname{Im} z \to \infty$.

Taking $\gamma = -I$ in rule 1 gives $f(z) = (-1)^k f(z)$, so nonzero forms have even weight. Taking $\gamma = T$ gives
$f(z + 1) = f(z)$: $f$ is periodic. A periodic holomorphic function is a function of $q = e^{2\pi i z}$, and has a
**$q$-expansion** (a Fourier series)

$$
f(z) = \sum_{n \ge 0} a_n q^n, \qquad q = e^{2\pi i z}.
$$

Rule 2 says no negative powers of $q$ appear. As $\operatorname{Im} z \to \infty$, $q \to 0$. If also $a_0 = 0$, $f$ is a
**cusp form**. The modular forms of weight $k$ form a complex vector space $M_k$, and the cusp forms a subspace $S_k$.

Because $\mathrm{SL}_2(\mathbb{Z})$ is generated by $S$ and $T$, rule 1 only needs checking for these two:
$f(z + 1) = f(z)$ and $f(-1/z) = z^k f(z)$.

### Eisenstein series

How can one build a function with these symmetries? Average over the group. For even $k \ge 4$, the **Eisenstein series**
is

$$
G_k(z) = \sum_{(m, n) \ne (0, 0)} \frac{1}{(mz + n)^k},
$$

summed over all pairs of integers except $(0,0)$. The sum converges absolutely for $k \ge 3$ (compare it with
$\sum_{(m,n) \neq (0,0)} (m^2 + n^2)^{-k/2}$, which converges for $k > 2$, as in a two-dimensional integral test), so the
terms can be rearranged freely.

**$G_k$ satisfies rule 1.** For $\gamma = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$,

$$
m\,\gamma z + n = \frac{m(az + b) + n(cz + d)}{cz + d} = \frac{(ma + nc)z + (mb + nd)}{cz + d}.
$$

So $G_k(\gamma z) = (cz + d)^k \sum (m'z + n')^{-k}$ with $(m', n') = (ma + nc, mb + nd)$. This map of pairs is given by the
invertible integer matrix $\gamma^{\mathsf T}$ (its inverse also has integer entries since $\det = 1$), so it permutes the
nonzero pairs, and the sum is $G_k(z)$ again. Hence $G_k(\gamma z) = (cz + d)^k G_k(z)$. $\square$

Its $q$-expansion comes from a classical identity derived from the partial fractions of the cotangent,
$\pi \cot \pi z = \frac1z + \sum_{n \ge 1}\left(\frac1{z+n} + \frac1{z-n}\right)$, by differentiating $k - 1$ times:

$$
\sum_{n \in \mathbb{Z}} \frac{1}{(z + n)^k} = \frac{(-2\pi i)^k}{(k-1)!} \sum_{r \ge 1} r^{k-1} q^r.
$$

Grouping the terms of $G_k$ by $m$ and using this for each $m \ge 1$ (with $q^m$ in place of $q$) gives
$G_k = 2\zeta(k) E_k$, where $\zeta$ is the Riemann zeta function ([Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md))
and $E_k$ is normalised to start with 1:

$$
E_4(z) = 1 + 240 \sum_{n \ge 1} \sigma_3(n) q^n = 1 + 240q + 2160q^2 + 6720q^3 + \cdots,
$$

$$
E_6(z) = 1 - 504 \sum_{n \ge 1} \sigma_5(n) q^n = 1 - 504q - 16632q^2 - 122976q^3 - \cdots.
$$

Here $\sigma_k(n) = \sum_{d \mid n} d^k$ is the divisor sum. (Check: $\sigma_3(2) = 1 + 8 = 9$ and $240 \cdot 9 = 2160$;
$\sigma_5(2) = 33$ and $504 \cdot 33 = 16632$.) In general $E_k = 1 - \frac{2k}{B_k}\sum \sigma_{k-1}(n) q^n$ with the
Bernoulli numbers $B_k$; for $k = 8$ the constant is 480.

### Finite dimension, and a free identity

The deepest elementary fact about modular forms is that there are few of them.

**Theorem (dimension).** For even $k \ge 0$, $M_k$ is finite-dimensional, with

$$
\dim M_k = \begin{cases} \lfloor k/12 \rfloor & k \equiv 2 \pmod{12}, \\ \lfloor k/12 \rfloor + 1 & \text{otherwise.} \end{cases}
$$

So $M_4$, $M_6$, $M_8$, $M_{10}$ and $M_{14}$ are one-dimensional, $M_2 = 0$, and $M_{12}$ is two-dimensional.

The proof uses the **valence formula**: for a nonzero $f \in M_k$, counting its zeros in $D$ with the points $i$ and $\rho$
weighted $\tfrac12$ and $\tfrac13$ and the "zero at infinity" given by the first nonzero $q$-coefficient, the total is
exactly $k/12$. It comes from integrating $f'/f$ around the boundary of $D$ (the argument principle), using the symmetries
to cancel the edges. Serre's *Course in Arithmetic*, Chapter VII, does it in three pages.

The consequence is magical. $E_4^2$ is a modular form of weight 8 (products of forms are forms, and weights add), and so is
$E_8$. Both start with 1. Since $M_8$ is one-dimensional, **$E_4^2 = E_8$**. Comparing coefficients of $q^n$:

$$
480\,\sigma_7(n) = 480\,\sigma_3(n) + 240^2 \sum_{m=1}^{n-1} \sigma_3(m)\sigma_3(n - m),
$$

that is,

$$
\sigma_7(n) = \sigma_3(n) + 120 \sum_{m=1}^{n-1} \sigma_3(m)\,\sigma_3(n - m).
$$

**Check.** $n = 2$: $\sigma_7(2) = 1 + 128 = 129$, and $\sigma_3(2) + 120\,\sigma_3(1)^2 = 9 + 120 = 129$. $n = 3$:
$\sigma_7(3) = 1 + 2187 = 2188$, and $\sigma_3(3) + 120 \cdot 2\,\sigma_3(1)\sigma_3(2) = 28 + 2160 = 2188$. No elementary
proof of this identity is known that is as short as "the space is one-dimensional".

Another example of this kind, which you can trust from [Chapter 11](11-Sums-of-Squares.md): the number of ways
$r_4(n)$ to write $n$ as a sum of four squares (order and signs counting) is

$$
r_4(n) = 8 \sum_{d \mid n,\ 4 \nmid d} d,
$$

Jacobi's four-square theorem. One proof shows that $\theta(z)^4$, with $\theta(z) = \sum_{n \in \mathbb{Z}} q^{n^2}$, is a
modular form of weight 2 for a smaller group (level 4), in a space of dimension 2 spanned by Eisenstein series, and reads
off the coefficients. (Check: $r_4(2) = 24$, from the 24 arrangements of $(\pm1, \pm1, 0, 0)$, and $8(1 + 2) = 24$.)

### The discriminant form and Ramanujan's tau

In weight 12, $E_4^3$ and $E_6^2$ both start with 1, so their difference has no constant term: it is a cusp form. Its
first coefficient is $720 - (-1008) = 1728$, so define

$$
\Delta(z) = \frac{E_4^3 - E_6^2}{1728} = \sum_{n \ge 1} \tau(n) q^n = q - 24q^2 + 252q^3 - 1472q^4 + 4830q^5 - 6048q^6 - \cdots.
$$

Jacobi had found a product for it:

$$
\Delta(z) = q \prod_{n \ge 1} (1 - q^n)^{24}.
$$

(This is a theorem; one proof shows the product is a cusp form of weight 12, and $S_{12}$ is one-dimensional. It can be
checked to any number of terms by computer.) The coefficients $\tau(n)$ are **Ramanujan's tau function**. In 1916 Ramanujan
noticed and conjectured that:

1. $\tau(mn) = \tau(m)\tau(n)$ when $\gcd(m, n) = 1$ (e.g. $\tau(6) = -6048 = (-24)(252)$);
2. $\tau(p^{r+1}) = \tau(p)\tau(p^r) - p^{11}\tau(p^{r-1})$ for primes $p$ (e.g. $\tau(4) = 576 - 2048 = -1472$);
3. $|\tau(p)| \le 2p^{11/2}$ for every prime $p$.

Mordell proved 1 and 2 in 1917; Hecke's theory of operators in the 1930s explained them: $\Delta$ is an eigenvector of
operators $T_p$ on $S_{12}$, with eigenvalue $\tau(p)$. Pierre Deligne proved 3 in 1974 as a consequence of his proof of
the Weil conjectures, the same "Riemann hypothesis over finite fields" that gave Hasse's bound in
[Chapter 19](19-Elliptic-Curves.md). Ramanujan also found the congruence $\tau(n) \equiv \sigma_{11}(n) \pmod{691}$, which comes
from comparing $\Delta$ with $E_{12}$ (the prime 691 is in the numerator of the Bernoulli number $B_{12}$). One question of
D. H. Lehmer from 1947 is still open: is $\tau(n)$ ever 0?

**Try it in Python.** Compute $\tau(n)$ from the product and test the congruence mod 691:

```python
N = 30
coeffs = [1] + [0] * (N - 1)               # the power series prod (1 - q^n)^24, up to q^(N-1)
for n in range(1, N):
    for _ in range(24):
        coeffs = [coeffs[i] - (coeffs[i - n] if i >= n else 0) for i in range(N)]
tau = [0] + coeffs[:N - 1]                 # multiply by q
print(tau[1:8])                            # [1, -24, 252, -1472, 4830, -6048, -16744]

sigma11 = lambda n: sum(d**11 for d in range(1, n + 1) if n % d == 0)
print(all((tau[n] - sigma11(n)) % 691 == 0 for n in range(1, N)))   # True
```

### Level N, and forms that know about elliptic curves

For Fermat we need modular forms for smaller groups. For $N \ge 1$,

$$
\Gamma_0(N) = \left\{ \begin{pmatrix} a & b \\ c & d \end{pmatrix} \in \mathrm{SL}_2(\mathbb{Z}) : N \mid c \right\}.
$$

A **modular form of weight $k$ and level $N$** satisfies rule 1 only for $\gamma \in \Gamma_0(N)$, and a holomorphy
condition at each of the finitely many "cusps" (the images of $\infty$). The cusp forms of weight 2 and level $N$ form a
finite-dimensional space $S_2(\Gamma_0(N))$, whose dimension is the genus of a curve called $X_0(N)$. For small $N$:

$$
\dim S_2(\Gamma_0(N)) = 0 \text{ for } N \le 10, \qquad \dim S_2(\Gamma_0(11)) = 1.
$$

The one cusp form of level 11 is a product, like $\Delta$:

$$
f(z) = q \prod_{n \ge 1} (1 - q^n)^2 (1 - q^{11n})^2 = q - 2q^2 - q^3 + 2q^4 + q^5 + 2q^6 - 2q^7 - 2q^9 - 2q^{10} + q^{11} - 2q^{12} + 4q^{13} + \cdots
$$

Now take the elliptic curve $E: y^2 + y = x^3 - x^2 - 10x - 20$, whose only prime of bad reduction is 11, and count its
points modulo $p$ as in [Chapter 19](19-Elliptic-Curves.md):

| $p$ | 2 | 3 | 5 | 7 | 13 | 17 | 19 | 23 | 29 |
|---|---|---|---|---|---|---|---|---|---|
| $p + 1 - \#E(\mathbb{F}_p)$ | $-2$ | $-1$ | $1$ | $-2$ | $4$ | $-2$ | $0$ | $-1$ | $0$ |
| coefficient of $q^p$ in $f$ | $-2$ | $-1$ | $1$ | $-2$ | $4$ | $-2$ | $0$ | $-1$ | $0$ |

They agree, for every prime $p \ne 11$ that anyone has ever checked, and the theorem below says for all of them. An elliptic
curve and a modular form, defined in completely different ways, carry the same numbers. That is what **modular** means for
an elliptic curve.

## 20.3 The Frey curve, Ribet and Taniyama-Shimura

*Level: expert.*

### The modularity conjecture

Every elliptic curve $E$ over $\mathbb{Q}$ has a **conductor** $N_E$, a positive integer built from its primes of bad
reduction (the curve above has $N_E = 11$). A curve is **semistable** if its conductor is squarefree: at each bad prime
the reduction has a node, not a cusp.

**Modularity conjecture (Taniyama-Shimura-Weil).** For every elliptic curve $E$ over $\mathbb{Q}$ with conductor $N$, there
is a cusp form $f = \sum a_n q^n$ of weight 2 and level $N$, an eigenform of the Hecke operators, with
$a_p = p + 1 - \#E(\mathbb{F}_p)$ for every prime $p \nmid N$.

Yutaka Taniyama raised a question of this kind at a conference in Tokyo and Nikko in 1955. Goro Shimura sharpened it in the
following years, and André Weil, in a 1967 paper, gave strong evidence: he showed that if the $L$-functions of $E$ and of
its twists have the analytic continuation and functional equation one expects, then $E$ is modular, and he made the level
$N$ precise. By the 1970s the conjecture was a central belief of the subject, but it seemed completely out of reach.

As [Chapter 19](19-Elliptic-Curves.md) explained, modularity also gives $L(E, s)$ its analytic continuation, which is
needed even to state the Birch and Swinnerton-Dyer conjecture.

### The Frey curve

In 1984 Gerhard Frey suggested a link with Fermat. Suppose $a^p + b^p = c^p$ with $p \ge 5$ prime and $a, b, c$ nonzero
coprime integers. Consider

$$
E_{a,b,c}: \; y^2 = x(x - a^p)(x + b^p).
$$

It is an elliptic curve because the three roots $0$, $a^p$, $-b^p$ are distinct. Its discriminant is

$$
\Delta = 16\,(a^p)^2 (b^p)^2 (a^p + b^p)^2 = 16\,(abc)^{2p}.
$$

(For $y^2 = (x - e_1)(x - e_2)(x - e_3)$, $\Delta = 16\,\big((e_1 - e_2)(e_1 - e_3)(e_2 - e_3)\big)^2$, and here the
differences are $a^p$, $-b^p$ and $-(a^p + b^p) = -c^p$.) After arranging signs so that $b$ is even and $a^p \equiv -1 \pmod 4$,
one shows $E_{a,b,c}$ is semistable with conductor equal to the product of the primes dividing $abc$.

This curve is very strange. Its discriminant is a perfect $p$-th power (times 16), while its conductor is just the product
of the primes dividing $abc$. Frey suggested that such a curve could not be modular. Jean-Pierre Serre made this precise
with a conjecture about Galois representations (the "epsilon conjecture"), and in 1986 Kenneth Ribet proved it.

### Galois representations, in brief

To say what Ribet proved we need one more idea. The points of order dividing $p$ on $E$, with complex (or algebraic)
coordinates, form a group $E[p] \cong (\mathbb{Z}/p\mathbb{Z})^2$. Their coordinates are algebraic numbers, and the Galois
group $G_\mathbb{Q} = \operatorname{Gal}(\overline{\mathbb{Q}}/\mathbb{Q})$ permutes them, respecting addition. Choosing a basis
of $E[p]$ gives a homomorphism

$$
\bar\rho_{E,p} : G_\mathbb{Q} \to \mathrm{GL}_2(\mathbb{F}_p),
$$

the **mod $p$ Galois representation** of $E$. For a prime $\ell \nmid pN_E$, the "Frobenius element" at $\ell$ has trace
$a_\ell \bmod p$. A modular form also has Galois representations (Eichler, Shimura, Deligne), with the traces of Frobenius
equal to its coefficients $a_\ell$. Modularity of $E$ means the two systems agree.

For the Frey curve, the fact that $\Delta$ is a $p$-th power (apart from 16) means that $\bar\rho_{E,p}$ behaves at each odd
prime dividing $abc$ as though the curve had good reduction there: in the language of the subject, it is *unramified* at
every prime except 2 and $p$, and it is "finite flat" at $p$.

**Ribet's theorem (1986, published 1990).** If $E$ is a semistable elliptic curve that is modular of level $N$, and
$\bar\rho_{E,p}$ is irreducible and unramified at a prime $q \| N$ (as described above), then $\bar\rho_{E,p}$ comes from a
modular form of level $N/q$.

This is **level lowering**. Applied to the Frey curve, repeatedly, it removes every odd prime of $abc$ from the level, and
shows: if the Frey curve were modular, $\bar\rho_{E,p}$ would come from a cusp form of weight 2 and **level 2**. (Irreducibility
of $\bar\rho_{E,p}$ for the Frey curve, for $p \ge 5$, follows from Mazur's work on torsion, Chapter 19.)

But $S_2(\Gamma_0(2)) = 0$: there are no cusp forms of weight 2 and level 2. Contradiction. So:

**Ribet's theorem implies: if every semistable elliptic curve over $\mathbb{Q}$ is modular, then Fermat's last theorem is
true.**

When Ribet's proof became known in 1986, the problem changed shape. Proving Fermat now meant proving the modularity
conjecture for semistable curves, a central question that many people already wanted to solve for its own sake.

## 20.4 Wiles, 1986 to 1995

*Level: expert.* Andrew Wiles, then at Princeton, had loved Fermat's problem since he was ten. On hearing of Ribet's result
he decided to work on modularity, and for about seven years he worked largely in secret, telling very few colleagues.

**The strategy.** To show $E$ is modular, it is enough to show its $p$-adic Galois representations (on the points of order
$p, p^2, p^3, \ldots$ together) come from a modular form, for one prime $p$. Wiles's idea was a **modularity lifting
theorem**: if the mod $p$ representation $\bar\rho_{E,p}$ is modular (and satisfies technical conditions), then every
"reasonable" lift of it to $p$-adic coefficients is modular too. The proof compares two rings: a ring $R$ parametrising all
such lifts (a "deformation ring", from Barry Mazur's theory of deformations of Galois representations), and a ring
$\mathbb{T}$ made from Hecke operators acting on modular forms. There is a natural surjection $R \to \mathbb{T}$, and the goal
is to show it is an isomorphism, "$R = \mathbb{T}$".

**The 3-5 switch.** To start, one needs some prime $p$ for which $\bar\rho_{E,p}$ is known to be modular. For $p = 3$ the
group $\mathrm{GL}_2(\mathbb{F}_3)$ is solvable, and the Langlands-Tunnell theorem (1980-81, about two-dimensional
representations with solvable image) shows $\bar\rho_{E,3}$ is modular when it is irreducible. When it is not, Wiles used
a clever trick: find another semistable curve $E'$ with the same mod 5 representation as $E$ but irreducible mod 3; prove
$E'$ modular via $p = 3$, deduce $\bar\rho_{E,5}$ is modular, and then lift with $p = 5$.

**June 1993.** Wiles announced a proof of the semistable modularity conjecture, and hence of Fermat's last theorem, at the
end of a series of three lectures at the Isaac Newton Institute in Cambridge. During the refereeing that autumn, Nick Katz
found a gap in one step, a bound on a "Selmer group" that Wiles had tried to obtain with an "Euler system" (a method
extending work of Kolyvagin and Matthias Flach). Wiles announced the problem publicly in December 1993.

**September 1994.** Working with his former student Richard Taylor, Wiles found a way around the gap. Instead of the Euler
system, they proved the needed isomorphism by studying Hecke algebras with extra levels added at auxiliary primes (the
"Taylor-Wiles method"). Wiles has described the moment of seeing it, on 19 September 1994, as the most important of his
working life.

**1995.** The two papers, Wiles's "Modular elliptic curves and Fermat's Last Theorem" and Taylor and Wiles's
"Ring-theoretic properties of certain Hecke algebras", filled an issue of the *Annals of Mathematics* (volume 141). Fermat's
last theorem was proved.

**2001: the full theorem.** Christophe Breuil, Brian Conrad, Fred Diamond and Richard Taylor extended the method to all
elliptic curves over $\mathbb{Q}$, not only semistable ones. The modularity theorem is now a theorem: every elliptic curve
over $\mathbb{Q}$ is modular.

**How long is the proof?** The two 1995 papers run to about 130 pages, and they rest on decades of earlier work: Mazur's
theorems, Ribet's level lowering, the Langlands-Tunnell theorem, the theory of Galois representations of modular forms,
and much more. No one could check the whole proof from first principles in a short time. An ongoing project led by Kevin
Buzzard, begun in 2024, aims to check a proof of Fermat's last theorem in the Lean proof assistant; it is planned to take
years.

Fermat's own "marvellous proof" is almost certainly lost to a mistake: many able mathematicians after him (Lamé in 1847,
for one) believed they had general proofs using tools of his time, and each attempt failed. It is a better story, and a
true one, that the theorem ended up as a corollary of a far more general statement about the symmetry of numbers.

## 20.5 What remains: generalised Fermat equations

*Level: expert.* Fermat's last theorem is one equation in a large family. The **generalised Fermat equation** is

$$
x^p + y^q = z^r,
$$

with exponents $p, q, r \ge 2$ and $x, y, z$ nonzero coprime integers (coprimality excludes cheap solutions such as
$2^3 + 2^3 = 2^4$). What happens depends on the sign of $\chi = \frac1p + \frac1q + \frac1r - 1$:

- **$\chi > 0$** (such as $(2, 2, r)$, $(2, 3, 3)$, $(2, 3, 4)$, $(2, 3, 5)$): there are infinitely many solutions, given by
  polynomial parametrisations (Pythagorean triples are the case $(2,2,2)$).
- **$\chi = 0$** (exponents $(2, 3, 6)$, $(2, 4, 4)$, $(3, 3, 3)$ and rearrangements): the equation reduces to finding rational
  points on elliptic curves of rank 0, and the only coprime solution with $xyz \ne 0$ is $1 + 2^3 = 3^2$.
- **$\chi < 0$**: Henri Darmon and Andrew Granville proved in 1995, using Faltings's theorem, that for each fixed $(p, q, r)$
  there are only finitely many coprime solutions.

Only ten solutions are known with $\chi < 0$ (counting each up to signs and order once):

$$
\begin{aligned}
&1 + 2^3 = 3^2 \;\;(\text{for } (p, 3, 2) \text{ with } 1 = 1^p), \quad 2^5 + 7^2 = 3^4, \quad 7^3 + 13^2 = 2^9, \quad 2^7 + 17^3 = 71^2,\\
&3^5 + 11^4 = 122^2, \quad 17^7 + 76271^3 = 21063928^2, \quad 1414^3 + 2213459^2 = 65^7,\\
&9262^3 + 15312283^2 = 113^7, \quad 43^8 + 96222^3 = 30042907^2, \quad 33^8 + 1549034^2 = 15613^3.
\end{aligned}
$$

Each can be checked with Python's exact integers in one line. It is conjectured that there are no others (Darmon and
Granville's paper discusses this "Fermat-Catalan conjecture"); the conjecture would follow from the abc conjecture of
[Chapter 21](21-Where-Number-Theory-Goes.md).

Notice that every known solution has an exponent equal to 2. The **Beal conjecture** says that this must be so: if $x^p + y^q = z^r$ with $p, q, r \ge 3$, then $x, y, z$ have a common prime factor.
A prize of one million dollars, offered by Andrew Beal and held by the American Mathematical Society, awaits a proof or
counterexample.

Many individual signatures have been settled with the methods of this chapter (Frey curves, modularity, level lowering).
For example, Darmon and Loïc Merel proved in 1997 that $x^n + y^n = 2z^n$ has no coprime solutions with $|xyz| > 1$ for
$n \ge 3$, and several authors have treated signatures such as $(p, p, 2)$ and $(p, p, 3)$.

**Two relatives.**

- **Catalan's conjecture** (1844): the only consecutive perfect powers are 8 and 9, that is, $x^a - y^b = 1$ with
  $a, b \ge 2$ has only $3^2 - 2^3 = 1$. Preda Mihăilescu proved it in 2002, with methods from cyclotomic fields close to
  Kummer's rather than modular forms.
- **Fermat over other number fields.** Over a number field $K$ (Chapter 17), Fermat's equation is a new question for each
  field, and for most fields it is open. Since about
  2015 Nuno Freitas, Samir Siksek and others have proved "asymptotic Fermat" over many fields: the equation has no
  nontrivial solutions once the exponent is large enough, using modularity theorems over totally real fields.

The methods of Wiles's proof have also gone far beyond Fermat: they prove modularity of many other objects, and they were
a key step in the proof of the Sato-Tate conjecture (2008-2011) on how the $a_p$ of an elliptic curve are distributed, and
of Serre's modularity conjecture (Chandrashekhar Khare and Jean-Pierre Wintenberger, 2009). These belong to the Langlands
programme, the first topic of [Chapter 21](21-Where-Number-Theory-Goes.md).

## Check yourself

??? question "1. Explain why proving Fermat's last theorem for $n = 4$ and for all odd primes $p$ proves it for all $n \ge 3$."

    Any $n \ge 3$ is divisible by 4 or by an odd prime $p$. If $n = 4m$, a solution $(x, y, z)$ for $n$ gives the solution
    $(x^m, y^m, z^m)$ for exponent 4. If $n = pm$, it gives $(x^m, y^m, z^m)$ for exponent $p$. So no solutions for 4 and all
    odd primes means no solutions for any $n \ge 3$.

??? question "2. Show that $\operatorname{Im}(-1/z) = \operatorname{Im}(z)/|z|^2$, and find the image of $z = \tfrac12 + \tfrac12 i$ under $S$. Is the image in the fundamental domain? If not, move it there."

    $-1/z = -\bar z/|z|^2$, so its imaginary part is $\operatorname{Im}(z)/|z|^2$ (this is the Lemma with $c = 1$, $d = 0$).
    For $z = \tfrac12 + \tfrac12 i$, $|z|^2 = \tfrac12$, so $-1/z = -2\bar z = -1 + i$. Its imaginary part is $1$, double the
    original. Apply $T$: $-1 + i + 1 = i$, which is in $D$ (on the arc, $|i| = 1$, real part 0).

??? question "3. Verify the coefficient of $q^2$ in $E_4$ and in $E_6$, and the coefficient of $q$ in $E_4^3 - E_6^2$."

    $E_4$: $240\,\sigma_3(2) = 240 \cdot 9 = 2160$. $E_6$: $-504\,\sigma_5(2) = -504 \cdot 33 = -16632$. For
    $E_4^3 - E_6^2$: the $q$-coefficient of $E_4^3$ is $3 \cdot 240 = 720$ and of $E_6^2$ is $2 \cdot (-504) = -1008$, so
    the difference is $1728$, which is why $\Delta$ is divided by 1728.

??? question "4. Use $E_4^2 = E_8$ to compute $\sigma_7(4)$ from values of $\sigma_3$, then check directly."

    $\sigma_7(4) = \sigma_3(4) + 120\,[\sigma_3(1)\sigma_3(3) + \sigma_3(2)\sigma_3(2) + \sigma_3(3)\sigma_3(1)]$. With
    $\sigma_3(1) = 1$, $\sigma_3(2) = 9$, $\sigma_3(3) = 28$, $\sigma_3(4) = 73$: $73 + 120(28 + 81 + 28) = 73 + 120 \cdot 137 =
    73 + 16440 = 16513$. Directly: $1 + 2^7 + 4^7 = 1 + 128 + 16384 = 16513$.

??? question "5. Check Ramanujan's rules with $\tau(2) = -24$, $\tau(3) = 252$, $\tau(4) = -1472$, $\tau(6) = -6048$, $\tau(8) = 84480$."

    Multiplicative: $\tau(6) = \tau(2)\tau(3) = -24 \cdot 252 = -6048$. Recursion with $p = 2$:
    $\tau(4) = \tau(2)^2 - 2^{11} = 576 - 2048 = -1472$; $\tau(8) = \tau(2)\tau(4) - 2^{11}\tau(2) = (-24)(-1472) + 2048 \cdot 24
    = 35328 + 49152 = 84480$. Bound: $|\tau(2)| = 24 \le 2 \cdot 2^{5.5} \approx 90.5$.

??? question "6. Check $\tau(2) \equiv \sigma_{11}(2) \pmod{691}$."

    $\sigma_{11}(2) = 1 + 2048 = 2049$. $2049 - (-24) = 2073 = 3 \cdot 691$. So yes.

??? question "7. For $E: y^2 + y = x^3 - x^2 - 10x - 20$, count the points over $\mathbb{F}_3$ and compare with the coefficient of $q^3$ in the level 11 form."

    Mod 3 the equation is $y^2 + y \equiv x^3 - x^2 - x + 1$ (since $-10 \equiv -1$ and $-20 \equiv 1$). For $x = 0, 1, 2$:
    the right side is $1$, $0$, $8 - 4 - 2 + 1 = 3 \equiv 0$. The values of $y^2 + y$ for $y = 0, 1, 2$ are $0, 2, 6 \equiv 0$.
    So right side 1 has no $y$; right side 0 has $y = 0, 2$. Points: $(1, 0), (1, 2), (2, 0), (2, 2)$, plus $O$: 5 points.
    $a_3 = 3 + 1 - 5 = -1$, the coefficient of $q^3$ in $f$.

??? question "8. Show that the discriminant of the Frey curve $y^2 = x(x - A)(x + B)$, with $A + B = C$, is $16A^2B^2C^2$."

    The roots are $e_1 = 0$, $e_2 = A$, $e_3 = -B$. The differences: $e_1 - e_2 = -A$, $e_1 - e_3 = B$, $e_2 - e_3 = A + B = C$.
    So $\Delta = 16 (-A \cdot B \cdot C)^2 = 16A^2B^2C^2$. With $A = a^p$, $B = b^p$, $C = c^p$ this is $16(abc)^{2p}$.

??? question "9. Why does the argument with the Frey curve need $S_2(\Gamma_0(2)) = 0$, and what would go wrong if there were a nonzero cusp form of level 2?"

    Ribet's level lowering shows that the mod $p$ representation of a modular Frey curve comes from a weight 2 cusp form of
    level 2. If that space is zero, no such form exists, so the Frey curve cannot be modular, so (by Wiles) it cannot exist,
    so no Fermat solution exists. If there were a cusp form of level 2, the argument would only say the Frey curve's mod $p$
    representation matches that form's, and one would need extra work to rule this out.

??? question "10. Verify $2^5 + 7^2 = 3^4$ and $7^3 + 13^2 = 2^9$, and compute $\chi$ for their exponents."

    $32 + 49 = 81 = 3^4$; $343 + 169 = 512 = 2^9$. Exponents $(5, 2, 4)$: $\chi = \frac15 + \frac12 + \frac14 - 1 = -\frac1{20}$.
    Exponents $(3, 2, 9)$: $\chi = \frac13 + \frac12 + \frac19 - 1 = -\frac1{18}$. Both negative, so Darmon-Granville applies:
    finitely many solutions for each signature.

??? question "11. Using the dimension formula, explain why $E_4 E_6 = E_{10}$ and deduce an identity for $\sigma_9$."

    $E_4E_6$ is a modular form of weight 10 starting with 1, as is $E_{10}$, and $\dim M_{10} = 1$, so they are equal.
    $E_{10} = 1 - 264\sum \sigma_9(n)q^n$. Comparing coefficients:
    $-264\sigma_9(n) = 240\sigma_3(n) - 504\sigma_5(n) - 240 \cdot 504 \sum_{m=1}^{n-1}\sigma_3(m)\sigma_5(n-m)$. Check
    $n = 1$: $-264 = 240 - 504$. True.

## What you learned

- Fermat's last theorem reduces to $n = 4$ (Fermat's descent) and odd primes; Euler, Germain, Kummer and computers settled
  many cases, and Kummer's failure-and-repair gave algebra the idea of ideals.
- $\mathrm{SL}_2(\mathbb{Z})$ acts on the upper half-plane with fundamental domain $D$; modular forms of weight $k$ satisfy
  $f(\gamma z) = (cz + d)^k f(z)$ and have $q$-expansions.
- Eisenstein series and $\Delta$ give explicit forms; because each $M_k$ is finite-dimensional, equalities like $E_4^2 = E_8$
  prove identities between divisor sums, and $\tau(n)$ has Ramanujan's remarkable properties.
- An elliptic curve is modular when its $a_p$ are the coefficients of a weight 2 cusp form of level $N_E$; the level 11
  example can be checked by hand.
- A Fermat solution would give a Frey curve; Ribet showed it could not be modular, Wiles (with Taylor) proved semistable
  curves are modular, so Fermat's last theorem is true (1995). Full modularity followed in 2001.
- Generalised Fermat equations $x^p + y^q = z^r$ have finitely many solutions when $\frac1p + \frac1q + \frac1r < 1$;
  only ten are known, and Beal's conjecture is open.

**Next:** [Chapter 21](21-Where-Number-Theory-Goes.md), a tour of where number theory goes now: the Langlands programme,
abc, Goldbach, twin primes and the open problems.

## Further reading

- S. Singh, *Fermat's Last Theorem*, 1997 (US title *Fermat's Enigma*): the history for general readers, based on
  interviews with Wiles.
- P. Ribenboim, *13 Lectures on Fermat's Last Theorem*, 1979 (the classical approaches, Kummer and after).
- J.-P. Serre, *A Course in Arithmetic*, 1973 (Chapter VII: modular forms for $\mathrm{SL}_2(\mathbb{Z})$, the valence
  formula, Eisenstein series, $\Delta$).
- F. Diamond and J. Shurman, *A First Course in Modular Forms*, 2005 (levels, Hecke operators, modularity, the road to
  Wiles).
- G. Cornell, J. H. Silverman and G. Stevens (eds.), *Modular Forms and Fermat's Last Theorem*, 1997 (the proof explained
  by many of the people involved).
- A. Wiles, "Modular elliptic curves and Fermat's Last Theorem", *Annals of Mathematics* 141, 1995; R. Taylor and A. Wiles,
  "Ring-theoretic properties of certain Hecke algebras", same volume.
- K. Ribet, "On modular representations of $\mathrm{Gal}(\overline{\mathbf{Q}}/\mathbf{Q})$ arising from modular forms",
  *Inventiones Mathematicae* 100, 1990.
- H. Darmon and A. Granville, "On the equations $z^m = F(x, y)$ and $Ax^p + By^q = Cz^r$", *Bulletin of the London
  Mathematical Society* 27, 1995.
- On this site: [Pythagorean triples](../../topics/number-theory/level-7/05-pythagorean-triples.md) and
  [Open problems](../../topics/number-theory/level-8/05-open-problems.md) (Topics);
  [MAT137 Unit 14: Power series and Taylor series](../../uoft/MAT137/unit14.md) (U of T); in the Algebra book,
  [Factorization in rings](../algebra/18-Factorization-in-Rings.md) (the Lamé-Kummer story) and
  [Where algebra goes](../algebra/22-Where-Algebra-Goes.md); in the Geometry book,
  [Hyperbolic geometry](../geometry/17-Hyperbolic-Geometry.md), where the upper half-plane is a model of the hyperbolic plane.
