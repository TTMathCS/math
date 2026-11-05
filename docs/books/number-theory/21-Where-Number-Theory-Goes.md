# 21. Where number theory goes

*You began this book with questions a child can ask: which numbers divide which, are there infinitely many primes? You
have reached modular forms and the proof of Fermat's last theorem. Where does the subject go from here? This last chapter
is a guided tour of the frontier. It shows the Langlands programme, the web of conjectures that explains why elliptic curves
and modular forms carry the same numbers; the abc conjecture, a simple statement with enormous consequences and a disputed
proof; Goldbach's conjecture and the twin prime conjecture, where the last fifteen years have brought real progress; the
role of computers; and a list of open problems, each stated precisely, with what is known. Each section gives honest
statements, at least one thing you can check yourself, and pointers to where the full story is told.*

!!! abstract "In this chapter"
    **You will learn:**

    - reciprocity laws, from quadratic reciprocity to class field theory, and the number theory side of the Langlands programme, with a modular form you can check by counting roots mod $p$
    - the abc conjecture, its consequences, the polynomial version with a complete proof, and a neutral account of the dispute over Mochizuki's claimed proof
    - Goldbach's conjecture: Vinogradov's theorem, Helfgott's proof of the weak conjecture, and why the strong one is still open
    - twin primes: Brun's theorem, the Hardy-Littlewood prediction, and bounded gaps (Zhang, Maynard, Polymath)
    - what computers have done for number theory, and the records as of 2024
    - a list of open problems, from famous to little known, with their status

    **You need:** the whole book, and especially quadratic reciprocity ([Chapter 8](08-Quadratic-Residues-and-Reciprocity.md)),
    the distribution of primes ([Chapter 13](13-How-Primes-Are-Spread.md),
    [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md), [Chapter 15](15-Primes-in-Progressions.md)) and
    elliptic curves and modular forms ([Chapter 19](19-Elliptic-Curves.md), [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md)).
    This chapter states more than it proves; where a proof is given it is complete.

    **Levels:** written as a survey of expert-level mathematics. 21.3 to 21.6 can be read by anyone who knows what a prime is;
    21.2 needs only polynomials; 21.1 builds on Chapters 8, 17 and 20.

## 21.1 The Langlands programme: the number theory side

*Level: expert.* The question behind this section is very old: **for which primes $p$ does a given polynomial have a root
modulo $p$?**

### Reciprocity laws

Take $x^2 + 1$. It has a root mod $p$ exactly when $-1$ is a square mod $p$, and by [Chapter 8](08-Quadratic-Residues-and-Reciprocity.md)
that happens for $p = 2$ and for $p \equiv 1 \pmod 4$. More generally, quadratic reciprocity says that for any integer $d$,
whether $x^2 - d$ has a root mod $p$ depends only on $p$ modulo $4|d|$. The answer is a **congruence condition** on $p$.

Gauss, Eisenstein, Kummer and Hilbert found higher reciprocity laws of this kind, and in the 1920s Teiji Takagi and Emil
Artin completed **class field theory**. Its main statement, in the case of $\mathbb{Q}$: the splitting of primes in a
number field $K$ is described by congruence conditions exactly when $K$ has an **abelian** Galois group
([Algebra, Chapter 20](../algebra/20-Galois-Theory.md)). The Kronecker-Weber theorem says these fields are exactly the
subfields of the cyclotomic fields $\mathbb{Q}(e^{2\pi i/n})$.

### A non-abelian example

Now take $x^3 - 2$. Its splitting field $\mathbb{Q}(\sqrt[3]2, e^{2\pi i/3})$ has Galois group $S_3$, which is not abelian.
For a prime $p > 3$, the number of roots of $x^3 - 2$ mod $p$ is 1 if $p \equiv 2 \pmod 3$ (cubing is then a bijection
mod $p$). For $p \equiv 1 \pmod 3$ it is 0 or 3, and no congruence condition decides which. There is a rule, found by Gauss,
but it is of a different kind:

**For a prime $p > 3$, $x^3 - 2$ has three roots mod $p$ if and only if $p = x^2 + 27y^2$ for some integers $x, y$.**

The first such primes are $31 = 2^2 + 27$, $43 = 4^2 + 27$, $109 = 9^2 + 27 \cdot 1^2$, $127 = 10^2 + 27$, $157 = 13^2 + 27 \cdot 1^2$.

There is also a modular form that knows the answer. Let

$$
g(z) = q \prod_{n \ge 1} (1 - q^{6n})(1 - q^{18n}) = \sum_{n \ge 1} b_n q^n.
$$

This is a modular form of weight 1 and level 108, and for every prime $p > 3$,

$$
b_p = (\text{number of roots of } x^3 - 2 \bmod p) - 1.
$$

So $b_p = 0$ for $p \equiv 2 \pmod 3$, and $b_p = 2$ or $-1$ for $p \equiv 1 \pmod 3$. (For example $b_7 = -1$, $b_{31} = 2$,
$b_{43} = 2$.) The same works for $x^3 - x - 1$, whose splitting field also has group $S_3$, with the form
$q\prod (1 - q^n)(1 - q^{23n})$ of level 23: the coefficient of $q^p$ is the number of roots of $x^3 - x - 1$ mod $p$, minus
1, for every prime $p \ne 23$. The first prime where $x^3 - x - 1$ has three roots is 59, and the coefficient of $q^{59}$ is 2.

**Try it in Python.**

```python
M = 200
f = [1] + [0] * (M - 1)                    # prod (1 - q^n)(1 - q^(23n)) up to q^(M-1)
for k in (1, 23):
    for n in range(1, M):
        if k * n < M:
            f = [f[i] - (f[i - k*n] if i >= k*n else 0) for i in range(M)]
b = [0] + f                                # multiply by q: b[n] is the coefficient of q^n
primes = [p for p in range(2, M) if all(p % d for d in range(2, p))]
print(all(b[p] == sum(1 for x in range(p) if (x**3 - x - 1) % p == 0) - 1
          for p in primes if p != 23))     # True
```

This is a **non-abelian reciprocity law**: the arithmetic of a Galois group that is not abelian ($S_3$) is governed by the
coefficients of a modular form, not by congruences. Modularity of elliptic curves ([Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md))
is a statement of the same kind, for the two-dimensional Galois representations on the torsion points of $E$.

### Langlands's conjectures

In a 1967 letter to André Weil, Robert Langlands proposed a vast generalisation. In rough form:

- **Reciprocity.** Every suitable $n$-dimensional representation of the Galois group $\operatorname{Gal}(\overline{\mathbb{Q}}/\mathbb{Q})$
  corresponds to an **automorphic representation** of the group $\mathrm{GL}_n$ (a far-reaching generalisation of a modular
  form), with matching $L$-functions: the traces of Frobenius at $p$ are the "coefficients" at $p$.
- **Functoriality.** Automorphic representations of different groups are related whenever the groups' "dual groups" are
  related by a homomorphism.

For $n = 1$ reciprocity is class field theory. For $n = 2$ over $\mathbb{Q}$, much is known: the modularity of elliptic curves
(Wiles, Taylor and others, 1995-2001), Serre's modularity conjecture for odd two-dimensional mod $p$ representations
(Chandrashekhar Khare and Jean-Pierre Wintenberger, 2009), and odd two-dimensional Artin representations like the examples
above (where weight 1 forms appear; the case with image $S_3$ goes back to Hecke). In general dimension, and over general
number fields, the conjectures are mostly open, although progress since about 2010 has been rapid, including work of Peter
Scholze and others on Galois representations attached to automorphic forms.

Consequences already proved include the **Sato-Tate conjecture**: for an elliptic curve without complex multiplication,
writing $a_p = 2\sqrt p \cos\theta_p$ (possible by Hasse's bound), the angles $\theta_p$ are distributed on $[0, \pi]$ with
density $\frac2\pi \sin^2\theta$. It was proved in 2008-2011 by Laurent Clozel, Michael Harris, Nicholas Shepherd-Barron and
Richard Taylor, with Thomas Barnet-Lamb and David Geraghty, using symmetric powers of $E$ and modularity lifting.

There are parallel programmes for function fields (fields like $\mathbb{F}_q(t)$, where Vladimir Drinfeld proved the $\mathrm{GL}_2$
case and Laurent Lafforgue the $\mathrm{GL}_n$ case, for which Lafforgue received a Fields Medal in 2002) and a **geometric**
Langlands programme. Ngô Bảo Châu's proof of the "fundamental lemma" (Fields Medal 2010) removed a long-standing technical
obstacle. In 2024 a team led by Dennis Gaitsgory and Sam Raskin released a series of papers proving the (unramified,
de Rham) geometric Langlands conjecture.

The honest summary: the Langlands programme is the main organising idea of modern number theory. It predicts that every
"motive" (elliptic curves, number fields, higher-dimensional varieties) has an automorphic partner. A small but deep part of
it is proved.

## 21.2 The abc conjecture

*Level: advanced.* Take three positive integers with $a + b = c$ and $\gcd(a, b) = 1$. The **radical** $\operatorname{rad}(n)$ is
the product of the distinct primes dividing $n$, so $\operatorname{rad}(72) = \operatorname{rad}(2^3 \cdot 3^2) = 6$.
Usually $\operatorname{rad}(abc)$ is much larger than $c$: for $8 + 9 = 17$, $\operatorname{rad}(8 \cdot 9 \cdot 17) = 2 \cdot 3
\cdot 17 = 102 > 17$. But sometimes $c$ wins:

$$
1 + 8 = 9: \quad \operatorname{rad}(1 \cdot 8 \cdot 9) = 6 < 9.
$$

Such triples are called **abc hits**. Measure them by the **quality**

$$
q(a, b, c) = \frac{\log c}{\log \operatorname{rad}(abc)}.
$$

A hit has $q > 1$. Some examples:

| $a + b = c$ | $\operatorname{rad}(abc)$ | quality |
|---|---|---|
| $1 + 8 = 9$ | 6 | 1.2263 |
| $5 + 27 = 32$ | 30 | 1.0190 |
| $1 + 80 = 81$ | 30 | 1.2920 |
| $3 + 125 = 128$ | 30 | 1.4266 |
| $1 + 4374 = 4375$ ($4374 = 2 \cdot 3^7$, $4375 = 5^4 \cdot 7$) | 210 | 1.5679 |
| $2 + 3^{10} \cdot 109 = 23^5$ | 15042 | 1.6299 |

The last, found by Éric Reyssat, has the highest quality known. (Check: $3^{10} \cdot 109 = 6436341$, plus 2 is $6436343 = 23^5$,
and $\operatorname{rad} = 2 \cdot 3 \cdot 109 \cdot 23 = 15042$.)

**There are infinitely many hits.** Take $c = 3^{2^n}$, $b = c - 1$, $a = 1$. By induction $2^{n+2}$ divides
$3^{2^n} - 1$: true for $n = 1$ ($8 \mid 8$), and $3^{2^{n+1}} - 1 = (3^{2^n} - 1)(3^{2^n} + 1)$ gains at least one more
factor 2. So $\operatorname{rad}(abc) = 3\,\operatorname{rad}(b) \le 3 \cdot b / 2^{n+1} < c \cdot 3/2^{n+1}$. Hence
$c/\operatorname{rad}(abc) > 2^{n+1}/3 \to \infty$: the ratio is unbounded. So the best one can hope for is that the
quality cannot be much more than 1.

**The abc conjecture (Masser and Oesterlé, 1985).** For every $\varepsilon > 0$ there are only finitely many coprime triples
$a + b = c$ with

$$
c > \operatorname{rad}(abc)^{1 + \varepsilon}.
$$

Equivalently, for every $\varepsilon > 0$ there is a constant $K_\varepsilon$ with $c < K_\varepsilon \operatorname{rad}(abc)^{1+\varepsilon}$
for all coprime triples.

**Why it matters.** abc says that a sum of two numbers made of high powers of few primes cannot itself be made of high
powers of few primes. Many famous problems are of this kind, and abc would settle them, at least up to finitely many
exceptions:

- **Fermat, asymptotically.** If $x^n + y^n = z^n$, then $\operatorname{rad}(x^ny^nz^n) \le xyz < z^3$, so
  $z^n < K_\varepsilon z^{3(1+\varepsilon)}$, which bounds $n$ and $z$. (With an explicit constant this would give a
  second proof of Fermat for large $n$.)
- the Fermat-Catalan conjecture of [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md) (finitely many solutions of
  $x^p + y^q = z^r$ with $\frac1p + \frac1q + \frac1r < 1$, in total);
- Mordell's conjecture (Faltings's theorem), in an effective form (Elkies, 1991);
- infinitely many non-Wieferich primes (primes $p$ with $2^{p-1} \not\equiv 1 \pmod {p^2}$) (Silverman, 1988).

Unconditionally, the best results are much weaker: C. L. Stewart and Kunrui Yu proved bounds of the form
$\log c < K \operatorname{rad}(abc)^{1/3 + \varepsilon}$, exponentially far from the conjecture.

### The polynomial version, with proof

For polynomials the analogue is a theorem with a short proof. Here the "size" of a polynomial is its degree, and
$\operatorname{rad}(f)$ is the product of its distinct monic irreducible factors (over $\mathbb{C}$: the number of distinct
roots of $f$ is $\deg \operatorname{rad}(f)$). Write $n_0(f)$ for the number of distinct complex roots of $f$.

**Mason-Stothers theorem.** Let $a, b, c$ be polynomials with complex coefficients, pairwise coprime, with $a + b = c$, and not
all constant. Then

$$
\max(\deg a, \deg b, \deg c) \le n_0(abc) - 1.
$$

*Proof.* Let $W = ab' - a'b$ (the **Wronskian**). Since $c = a + b$ and $c' = a' + b'$, also $W = ac' - a'c$ and
$W = cb' - c'b$ (expand and cancel).

$W \neq 0$: if $ab' = a'b$ then $(a/b)' = 0$, so $a = \lambda b$ for a constant $\lambda$; coprimality forces $a$ and $b$ to
be constants, and then so is $c$, which is excluded.

If $\alpha$ is a root of $a$ of multiplicity $m$, then $(x - \alpha)^{m-1}$ divides both $a$ and $a'$, hence divides
$W = ab' - a'b$. The same holds for the roots of $b$ and $c$. Since $a, b, c$ are pairwise coprime, their roots are distinct,
so the polynomial

$$
\frac{abc}{\prod_{\alpha \text{ root of } abc} (x - \alpha)}
$$

of degree $\deg a + \deg b + \deg c - n_0(abc)$ divides $W$. And $\deg W \le \deg a + \deg b - 1$. So

$$
\deg a + \deg b + \deg c - n_0(abc) \le \deg a + \deg b - 1, \quad\text{i.e.}\quad \deg c \le n_0(abc) - 1.
$$

Using $W = ac' - a'c$ and $W = cb' - c'b$ instead gives the same bound for $\deg b$ and $\deg a$. $\square$

**Example.** $x^2 + (2x + 1) = (x + 1)^2$: $n_0 = 3$ (roots $0$, $-\tfrac12$, $-1$) and the maximum degree is $2 = 3 - 1$.
The bound is sharp.

**Corollary (Fermat for polynomials).** If $f^n + g^n = h^n$ with $f, g, h$ coprime polynomials, not all constant, then
$n \le 2$.

*Proof.* Apply Mason-Stothers to $f^n + g^n = h^n$: $n_0(f^ng^nh^n) = n_0(fgh) \le \deg f + \deg g + \deg h$. If
$d = \max(\deg f, \deg g, \deg h)$, then $nd \le 3d - 1 < 3d$, so $n < 3$. $\square$

The contrast is the point. For polynomials, abc is easy because derivatives exist. For integers there is no derivative, and
nobody has found a substitute that everyone accepts.

### Mochizuki's claimed proof

In August 2012 Shinichi Mochizuki of Kyoto University posted four long papers developing what he calls
inter-universal Teichmüller theory (IUT), and claimed that they prove the abc conjecture. The work was very hard for others
to read; workshops were held in Oxford (2015) and Kyoto (2016). In 2018 Peter Scholze and Jakob Stix visited Mochizuki in
Kyoto and afterwards wrote a report arguing that a key step, Corollary 3.12 of the third paper, does not hold as written;
Mochizuki replied that their objection rests on a misunderstanding. The papers were published in 2021 in *Publications of
the Research Institute for Mathematical Sciences*, a journal edited at Mochizuki's own institute. The situation, stated
neutrally: Mochizuki and some colleagues regard the conjecture as proved; most experts in the field who have commented
publicly do not accept the proof as it stands, and the abc conjecture is generally listed as open. Mathematics settles such
questions by consensus on the details, and no such consensus has formed.

<figure class="sketch"><span class="ai-tag">AI-created</span><svg viewBox="0 0 640 374" role="img" aria-labelledby="sk-m-abc-t"><title id="sk-m-abc-t">Four sums a plus b equals c, each with two bars on a log scale: c and the radical of abc; in the last three c is larger than the radical</title><defs><filter id="sk-m-abc-pen"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="3.2"/></filter><filter id="sk-m-abc-paper"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="7"/><feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 .10 0"/></filter><pattern id="sk-m-abc-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="7" stroke="#8a4a2a" stroke-width="1.1" opacity=".55"/></pattern><pattern id="sk-m-abc-dots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r="1" fill="#8a4a2a" opacity=".5"/><circle cx="6.5" cy="7" r=".8" fill="#8a4a2a" opacity=".4"/></pattern><marker id="sk-m-abc-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L9 5L1 9" fill="none" stroke="#3a2a1e" stroke-width="1.6" stroke-linecap="round"/></marker></defs><rect width="640" height="374" filter="url(#sk-m-abc-paper)"/><g filter="url(#sk-m-abc-pen)"><text x="30" y="44" text-anchor="start" class="h">When c beats the radical</text><text x="220" y="104" text-anchor="end" class="s">1 + 2 = 3</text><path class="p gold" d="M230 80 L257 80 L257 98 L230 98Z"/><path class="p rust" d="M230 100 L271 100 L271 118 L230 118Z"/><text x="281.3512600184149" y="104" text-anchor="start" class="s">c = 3, rad = 6</text><text x="220" y="160" text-anchor="end" class="s">1 + 8 = 9</text><path class="p gold" d="M230 136 L280 136 L280 154 L230 154Z"/><path class="p rust" d="M230 156 L271 156 L271 174 L230 174Z"/><text x="289.8036404530876" y="160" text-anchor="start" class="s">c = 9, rad = 6</text><text x="220" y="216" text-anchor="end" class="s">5 + 27 = 32</text><path class="p gold" d="M230 192 L306 192 L306 210 L230 210Z"/><path class="p rust" d="M230 212 L305 212 L305 230 L230 230Z"/><text x="316.2471989593555" y="216" text-anchor="start" class="s">c = 32, rad = 30</text><text x="220" y="272" text-anchor="end" class="s">2 + 3<tspan dy="-6" style="font-size:70%">10</tspan><tspan dy="6">​</tspan>·109 = 23⁵</text><path class="p gold" d="M230 248 L561 248 L561 266 L230 266Z"/><path class="p rust" d="M230 268 L435 268 L435 286 L230 286Z"/><text x="230" y="306" text-anchor="start" class="s">c = 6,436,343, rad = 15,042</text><text x="30" y="338" text-anchor="start" class="s">gold: c; red: rad(abc), the product of the distinct primes. Usually rad is bigger; the abc</text><text x="30" y="358" text-anchor="start" class="s">conjecture says c can beat rad<tspan dy="-6" style="font-size:70%">1+ε</tspan><tspan dy="6">​</tspan> only finitely often. The last row is the record holder.</text></g></svg><figcaption>Sketched for this page. Bars on a log scale.</figcaption></figure>

## 21.3 Goldbach's conjecture

*Level: intermediate (statements), expert (methods).* In a letter to Euler in 1742, Christian Goldbach proposed that every
integer greater than 2 is a sum of three primes (he counted 1 as a prime). Euler replied that this would follow from the
statement that every even number is a sum of two primes. In modern form:

- **Strong (binary) Goldbach conjecture.** Every even integer $n > 2$ is the sum of two primes.
- **Weak (ternary) Goldbach conjecture.** Every odd integer $n > 5$ is the sum of three primes.

The strong implies the weak: if $n > 5$ is odd, $n - 3 > 2$ is even, so $n - 3 = p + q$ and $n = 3 + p + q$.

The number of ways grows. Counting unordered pairs $p \le q$ with $p + q = n$:

| $n$ | 4 | 6 | 8 | 10 | 28 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|---|---|
| representations | 1 | 1 | 1 | 2 | 2 | 6 | 28 | 127 |

($100 = 3 + 97 = 11 + 89 = 17 + 83 = 29 + 71 = 41 + 59 = 47 + 53$.) Heuristically, with about $n/\log n$ primes below $n$,
each with "probability" about $1/\log n$ that $n - p$ is prime, one expects about $n/(\log n)^2$ representations, up to a
constant factor depending on the primes dividing $n$ (Hardy and Littlewood made this precise in 1923). The difficulty is
not that the count is small; it is that nobody can prove it is never 0.

**What is proved.**

- **Vinogradov (1937):** every sufficiently large odd number is a sum of three primes. The method is the Hardy-Littlewood
  **circle method**: write the number of representations as an integral of $\left(\sum_{p \le n} e^{2\pi i p\alpha}\right)^3
  e^{-2\pi i n\alpha}$ over $\alpha \in [0,1]$; near rationals with small denominators ("major arcs") the integrand is
  computed by the prime number theorem in progressions ([Chapter 15](15-Primes-in-Progressions.md)), and elsewhere ("minor
  arcs") Vinogradov's estimates show it is small. With three primes the main term wins; with two, the minor arcs cannot be
  controlled, which is why the strong conjecture is so much harder.
- **Helfgott (2013):** Harald Helfgott proved the weak conjecture for all odd $n > 5$, by making every constant in the circle
  method explicit and sharp enough that "sufficiently large" came down to about $10^{27}$, below which a computer check
  (with David Platt) finished the job.
- **Chen (1973):** Chen Jingrun proved that every sufficiently large even number is $p + m$ with $p$ prime and $m$ either
  prime or a product of two primes. Sieve methods cannot easily go further because of the "parity problem" (they cannot
  distinguish numbers with an odd number of prime factors from those with an even number).
- **Computation:** Tomás Oliveira e Silva, Siegfried Herzog and Silvio Pardi verified the strong conjecture for all even
  numbers up to $4 \cdot 10^{18}$ (published 2014).
- **Almost all:** the even numbers below $x$ that are not sums of two primes, if any, number at most $x^{1 - \delta}$ for
  some $\delta > 0$ (Montgomery and Vaughan, 1975).

## 21.4 Twin primes

*Level: intermediate (statements), expert (methods).* **Twin primes** are pairs $p, p + 2$ both prime: $(3, 5)$, $(5, 7)$,
$(11, 13)$, $(17, 19)$, $(29, 31)$, $(41, 43)$, $(59, 61)$, $(71, 73)$, and so on.

**Twin prime conjecture.** There are infinitely many twin primes.

**Brun's theorem (1919).** The sum of the reciprocals of the twin primes converges:

$$
\left(\tfrac13 + \tfrac15\right) + \left(\tfrac15 + \tfrac17\right) + \left(\tfrac1{11} + \tfrac1{13}\right) + \cdots = B_2 < \infty.
$$

Compare [Chapter 13](13-How-Primes-Are-Spread.md): the sum of $1/p$ over all primes diverges. So twin primes are, at least,
rare. Viggo Brun proved this by inventing a sieve, the first of the modern sieve methods. The constant $B_2$ is about 1.902,
but the sum converges so slowly that this value is an extrapolation: summing up to $10^6$ gives only about 1.711.

**The Hardy-Littlewood prediction.** If "$p$ is prime" and "$p + 2$ is prime" were independent events, each of probability
$1/\log x$, the number of twin primes below $x$ would be about $x/(\log x)^2$. They are not independent (if $p$ is odd, so
is $p + 2$), and correcting for each prime gives the conjecture

$$
\pi_2(x) \sim 2C_2 \int_2^x \frac{dt}{(\log t)^2}, \qquad C_2 = \prod_{p \ge 3}\left(1 - \frac{1}{(p-1)^2}\right) \approx 0.6601618.
$$

For $x = 10^6$ the integral formula gives about 8247; the true count is 8169. Agreement of this quality persists as far as
anyone has computed.

**Bounded gaps.** In 2013 Yitang Zhang proved that there are infinitely many pairs of primes that differ by at most
70,000,000. It was the first proof that prime gaps do not all tend to infinity. A public online collaboration, the Polymath
project (Polymath8), lowered the bound quickly. Later in 2013 James Maynard, and independently Terence Tao, found a simpler
and stronger method (a multidimensional version of the Goldston-Pintz-Yıldırım sieve), giving 600, and showing for any $m$
that there are infinitely many intervals of bounded length containing $m$ primes. Combining it with Polymath's work gave
the current bound:

**There are infinitely many pairs of primes differing by at most 246.**

Assuming a strong form of the Elliott-Halberstam conjecture (about primes in progressions), the method gives 6. Getting to 2
needs a new idea: the parity problem, the same barrier as for Goldbach, stops sieve methods at that point.

The related **Polignac conjecture** says every even number occurs infinitely often as a gap between consecutive primes.
From the bounded gaps theorem, at least one even number at most 246 does.

**Try it in Python.** Count twin primes and test Goldbach:

```python
from math import isqrt

N = 10**6
sieve = bytearray([1]) * (N + 3)
sieve[0] = sieve[1] = 0
for i in range(2, isqrt(N + 2) + 1):
    if sieve[i]:
        sieve[i*i::i] = bytearray(len(sieve[i*i::i]))

print(sum(1 for p in range(N) if sieve[p] and sieve[p + 2]))      # 8169 twin pairs with p < 10^6

def goldbach(n):                                                   # unordered representations n = p + q
    return sum(1 for p in range(2, n // 2 + 1) if sieve[p] and sieve[n - p])
print([goldbach(n) for n in (100, 1000, 10000)])                   # [6, 28, 127]
```

<figure class="sketch"><span class="ai-tag">AI-created</span><svg viewBox="0 0 640 244" role="img" aria-labelledby="sk-m-twins-t"><title id="sk-m-twins-t">The primes up to 100 on a number line, with the eight twin prime pairs raised and joined by small arcs</title><defs><filter id="sk-m-twins-pen"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="3.2"/></filter><filter id="sk-m-twins-paper"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="7"/><feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 .10 0"/></filter><pattern id="sk-m-twins-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="7" stroke="#8a4a2a" stroke-width="1.1" opacity=".55"/></pattern><pattern id="sk-m-twins-dots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r="1" fill="#8a4a2a" opacity=".5"/><circle cx="6.5" cy="7" r=".8" fill="#8a4a2a" opacity=".4"/></pattern><marker id="sk-m-twins-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L9 5L1 9" fill="none" stroke="#3a2a1e" stroke-width="1.6" stroke-linecap="round"/></marker></defs><rect width="640" height="244" filter="url(#sk-m-twins-paper)"/><g filter="url(#sk-m-twins-pen)"><text x="30" y="44" text-anchor="start" class="h">Twin primes up to 100</text><path class="p" d="M40 140 L604 140"/><path class="p" d="M40 136 L40 144"/><text x="40" y="164" text-anchor="middle" class="s">1</text><path class="p" d="M177 136 L177 144"/><text x="177" y="164" text-anchor="middle" class="s">25</text><path class="p" d="M319 136 L319 144"/><text x="319" y="164" text-anchor="middle" class="s">50</text><path class="p" d="M462 136 L462 144"/><text x="462" y="164" text-anchor="middle" class="s">75</text><path class="p" d="M604 136 L604 144"/><text x="604" y="164" text-anchor="middle" class="s">100</text><circle cx="46" cy="140" r="3" class="p f"/><circle cx="51" cy="122" r="5" class="p gold"/><circle cx="63" cy="122" r="5" class="p gold"/><circle cx="74" cy="122" r="5" class="p gold"/><circle cx="97" cy="122" r="5" class="p gold"/><circle cx="108" cy="122" r="5" class="p gold"/><circle cx="131" cy="122" r="5" class="p gold"/><circle cx="143" cy="122" r="5" class="p gold"/><circle cx="165" cy="140" r="3" class="p f"/><circle cx="200" cy="122" r="5" class="p gold"/><circle cx="211" cy="122" r="5" class="p gold"/><circle cx="245" cy="140" r="3" class="p f"/><circle cx="268" cy="122" r="5" class="p gold"/><circle cx="279" cy="122" r="5" class="p gold"/><circle cx="302" cy="140" r="3" class="p f"/><circle cx="336" cy="140" r="3" class="p f"/><circle cx="371" cy="122" r="5" class="p gold"/><circle cx="382" cy="122" r="5" class="p gold"/><circle cx="416" cy="140" r="3" class="p f"/><circle cx="439" cy="122" r="5" class="p gold"/><circle cx="450" cy="122" r="5" class="p gold"/><circle cx="485" cy="140" r="3" class="p f"/><circle cx="507" cy="140" r="3" class="p f"/><circle cx="542" cy="140" r="3" class="p f"/><circle cx="587" cy="140" r="3" class="p f"/><path class="p" style="fill:none" d="M51 114 Q57 96 63 114"/><path class="p" style="fill:none" d="M63 114 Q68 96 74 114"/><path class="p" style="fill:none" d="M97 114 Q103 96 108 114"/><path class="p" style="fill:none" d="M131 114 Q137 96 143 114"/><path class="p" style="fill:none" d="M200 114 Q205 96 211 114"/><path class="p" style="fill:none" d="M268 114 Q274 96 279 114"/><path class="p" style="fill:none" d="M371 114 Q376 96 382 114"/><path class="p" style="fill:none" d="M439 114 Q445 96 450 114"/><text x="30" y="206" text-anchor="start" class="s">Raised: primes with a partner two away, 8 pairs below 100. Nobody knows if the pairs go on</text><text x="30" y="226" text-anchor="start" class="s">forever, but since Zhang (2013) and Polymath we know some gap of at most 246 repeats forever.</text></g></svg><figcaption>Sketched for this page.</figcaption></figure>

## 21.5 Computational number theory and records

*Level: intermediate.* Number theory has always been experimental. Gauss guessed the prime number theorem from tables of
primes he computed by hand; Birch and Swinnerton-Dyer found their conjecture on an early computer
([Chapter 19](19-Elliptic-Curves.md)). Today computation plays four roles.

**Discovery.** Conjectures are found and tested in data. The L-functions and Modular Forms Database (LMFDB, lmfdb.org),
built by a large international collaboration, lists millions of elliptic curves, modular forms, number fields and
$L$-functions with their invariants, and it is used daily by researchers. The level 11 form and its curve in Chapter 20 are
its first entries of their kind.

**Finishing proofs.** Many theorems reduce, after deep theory, to a finite check: Helfgott's proof of weak Goldbach (21.3),
the class number one problem's last steps ([Chapter 17](17-Algebraic-Number-Theory.md)), the Catalan conjecture's early
bounds, and many results on Diophantine equations, where theory bounds the solutions and a computer searches below the
bound.

**Algorithms as mathematics.** Fast primality tests (proved in polynomial time by AKS in 2002), factoring by the number
field sieve, point counting on elliptic curves (Schoof's algorithm, 1985), and lattice reduction (LLL, 1982) are number
theory in their own right, and they are the foundation of cryptography ([Chapter 12](12-Primality-Factoring-and-RSA.md) and
the [cryptography book](https://cryptography.akadian.ca/book/)).

**Records** (as of late 2024; such records change, so check current sources):

- **Largest known prime:** $2^{136279841} - 1$, a Mersenne prime with 41,024,320 digits, found in October 2024 by Luke
  Durant in the Great Internet Mersenne Prime Search (GIMPS). It is the 52nd known Mersenne prime.
- **Factoring:** the largest RSA challenge number factored is RSA-250 (250 digits, 829 bits), in February 2020, by the
  number field sieve, using thousands of core-years of computation.
- **Riemann hypothesis:** all nontrivial zeros of $\zeta(s)$ with imaginary part up to $3 \cdot 10^{12}$ (more than
  $10^{13}$ zeros) have been verified to lie on the critical line (David Platt and Tim Trudgian, 2021).
- **Goldbach:** verified up to $4 \cdot 10^{18}$ (21.3).
- **Counting primes:** $\pi(x)$ has been computed exactly for $x$ as large as $10^{29}$ using the combinatorial
  Lagarias-Miller-Odlyzko and Deléglise-Rivat methods, without listing the primes.

**Proof assistants.** A newer role is checking proofs by computer. Systems such as Lean, Coq and Isabelle verify every
logical step. The Lean library mathlib already contains much elementary and some advanced number theory (quadratic
reciprocity, $p$-adic numbers, the basics of modular forms), and the project to formalise Fermat's last theorem
([Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md)) is under way.

## 21.6 Open problems

*Level: all.* Each problem below is stated precisely, with the main known result. Several are among the oldest unsolved
problems in mathematics. "Open" means: as of 2024, no proof accepted by the community.

**About primes**

1. **The Riemann hypothesis** (1859). All nontrivial zeros of $\zeta(s)$ have real part $\tfrac12$. Equivalent to
   $|\pi(x) - \operatorname{li}(x)| = O(\sqrt x \log x)$. Known: infinitely many zeros on the line (Hardy, 1914), and more
   than 40 percent of them (Conrey, 1989, and later improvements). [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md).
2. **The generalised Riemann hypothesis.** The same for all Dirichlet $L$-functions. Many results (the Miller-Rabin test
   being deterministic, Artin's conjecture below) are proved assuming it.
3. **Goldbach** (1742) and **twin primes**: 21.3 and 21.4.
4. **Landau's problem: primes of the form $n^2 + 1$.** Are there infinitely many? Known: infinitely many $n^2 + 1$ with at most
   two prime factors (Iwaniec, 1978).
5. **Legendre's conjecture.** There is a prime between $n^2$ and $(n + 1)^2$ for every $n \ge 1$. Not even the Riemann
   hypothesis is known to imply it.
6. **Mersenne primes.** Are there infinitely many primes $2^p - 1$? Heuristics say yes, with about $e^\gamma \log x/\log 2$ of
   them with $p \le x$. Only 52 are known. Are there infinitely many Mersenne numbers $2^p - 1$ ($p$ prime) that are composite?
   Also unknown.
7. **Artin's conjecture** (1927). Every integer other than $-1$ and perfect squares is a primitive root modulo infinitely many
   primes ([Chapter 7](07-Primitive-Roots.md)). Proved assuming GRH by Hooley (1967); unconditionally, Heath-Brown (1986)
   showed that at most two primes fail to be such a primitive root, without being able to say which.

**About arithmetic functions and special numbers**

8. **Odd perfect numbers.** Is there an odd perfect number? Known: none below $10^{1500}$ (Ochem and Rao, 2012), and any one
   must have many prime factors. [Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md).
9. **Lehmer's question** (1947). Is Ramanujan's $\tau(n)$ ever 0? Checked for $n$ up to very large bounds; open.
10. **Infinitely many regular primes?** (Kummer, [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md)). Heuristically about
    61 percent of primes are regular; it is not even known that there are infinitely many.
11. **Class numbers of real quadratic fields.** Gauss conjectured that infinitely many real quadratic fields
    $\mathbb{Q}(\sqrt d)$ have class number 1. Open; the imaginary case was finished by Heegner, Baker and Stark
    ([Chapter 17](17-Algebraic-Number-Theory.md)).

**About equations and approximation**

12. **Birch and Swinnerton-Dyer** ([Chapter 19](19-Elliptic-Curves.md)), and with it the **congruent number problem**: is every
    squarefree $n \equiv 5, 6, 7 \pmod 8$ congruent?
13. **The abc conjecture** (21.2) and **Beal's conjecture** ([Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md)).
14. **Sums of three cubes.** Which integers $k$ are $x^3 + y^3 + z^3$ with integers $x, y, z$? Numbers $\equiv \pm 4 \pmod 9$ never
    are (cubes are $0, \pm1 \bmod 9$). It is conjectured that all others are, with infinitely many solutions. In 2019 Andrew
    Booker found a solution for $k = 33$, and Booker and Andrew Sutherland one for $k = 42$, the last case below 100; the
    solutions have 16 and 17 digits.
15. **Erdős-Straus conjecture.** For every $n \ge 2$, $\frac4n = \frac1x + \frac1y + \frac1z$ with positive integers $x, y, z$.
    Verified to very large $n$; open.
16. **Is the rank of elliptic curves over $\mathbb{Q}$ bounded?** ([Chapter 19](19-Elliptic-Curves.md)).

**About irrationality and transcendence**

17. **Odd zeta values.** Roger Apéry proved in 1978 that $\zeta(3)$ is irrational. Keith Ball and Tanguy Rivoal proved (2000)
    that infinitely many of $\zeta(3), \zeta(5), \zeta(7), \ldots$ are irrational, and Wadim Zudilin (2001) that at least one
    of $\zeta(5), \zeta(7), \zeta(9), \zeta(11)$ is. Whether $\zeta(5)$ is irrational is open.
18. **Euler's constant** $\gamma = \lim (1 + \tfrac12 + \cdots + \tfrac1n - \log n) \approx 0.5772$: is it irrational? Nobody knows.
19. **$e + \pi$ and $e\pi$.** At least one of them is transcendental (since both are roots of $x^2 - (e + \pi)x + e\pi$, and if
    both coefficients were algebraic, so would be $e$ and $\pi$). Which one is unknown; neither is known even to be irrational.
20. **Schanuel's conjecture**, a broad statement on the transcendence of values of the exponential function, would settle 19
    and much more.

**Programmes rather than problems**

21. **The Langlands conjectures** (21.1), in general dimension and over general number fields.
22. **Hilbert's twelfth problem**: construct the abelian extensions of every number field explicitly, as the cyclotomic
    fields do for $\mathbb{Q}$ (Kronecker-Weber) and elliptic curves with complex multiplication do for imaginary quadratic
    fields. Recent work by Samit Dasgupta and Mahesh Kakde (2021) solves it for totally real fields using $p$-adic methods.

Many of these problems will outlast this book. Some may fall next year. Number theory remains the branch of mathematics
where a question a child can understand can lead, by a straight path, to the frontier of research. That is the road this
book has followed.

## Check yourself

??? question "1. Show that $x^3 - 2$ has exactly one root mod $p$ when $p \equiv 2 \pmod 3$."

    The multiplicative group mod $p$ has order $p - 1$, which is not divisible by 3. So $x \mapsto x^3$ is an injective
    homomorphism of this group (if $x^3 = 1$, the order of $x$ divides $\gcd(3, p-1) = 1$), hence a bijection. So exactly one
    nonzero $x$ has $x^3 \equiv 2$ (and $x = 0$ is not a root).

??? question "2. Check that $x^3 \equiv 2 \pmod{31}$ has three solutions, and write 31 as $x^2 + 27y^2$."

    $31 = 4 + 27 = 2^2 + 27 \cdot 1^2$. Search: $4^3 = 64 = 2 + 62 \equiv 2$; $20^3 = 8000 = 258 \cdot 31 + 2$, so $\equiv 2$;
    $7^3 = 343 = 11 \cdot 31 + 2 \equiv 2$. Three roots: $4, 7, 20$. (Their product $560 \equiv 2 \pmod{31}$, as it must be, since
    the product of the roots of $x^3 - 2$ is 2.)

??? question "3. Compute the quality of $1 + 48 = 49$ and of $1 + 63 = 64$."

    $1 \cdot 48 \cdot 49 = 2^4 \cdot 3 \cdot 7^2$, radical $42$; quality $\log 49/\log 42 \approx 1.0412$.
    $1 \cdot 63 \cdot 64 = 3^2 \cdot 7 \cdot 2^6$, radical $42$; quality $\log 64/\log 42 \approx 1.1127$. Both are hits.

??? question "4. Verify Mason-Stothers for $a = x^4$, $b = 1$, $c = x^4 + 1$."

    $n_0(abc) = n_0(x^4 (x^4 + 1)) = 1 + 4 = 5$ (root 0, and the four distinct roots of $x^4 + 1$). The bound says
    $\max \deg = 4 \le 5 - 1 = 4$. True, with equality.

??? question "5. Use Mason-Stothers to show that $f^3 + g^3 = h^3$ has no solution in coprime polynomials, not all constant."

    By the corollary in 21.2 with $n = 3$: $3d \le n_0(fgh) - 1 \le 3d - 1$, which is impossible. So there are no such
    polynomials (Fermat for polynomials, exponent 3).

??? question "6. Show that the weak Goldbach conjecture follows from the strong one, and find all representations of 28 as a sum of two primes."

    If $n > 5$ is odd, $n - 3 \ge 4$ is even; by strong Goldbach $n - 3 = p + q$, so $n = 3 + p + q$. For 28: $5 + 23$ and
    $11 + 17$ (and $28 - 3 = 25$, $28 - 7 = 21$, $28 - 13 = 15$ are not prime). Two representations.

??? question "7. Why can't $p$, $p + 2$, $p + 4$ all be prime unless $p = 3$?"

    Modulo 3 the three numbers are $p$, $p + 2$, $p + 1$, a complete set of residues. So one of them is divisible by 3, and
    if it is prime it equals 3. The only possibility is $3, 5, 7$. (This is the kind of "local" obstruction that the constant
    $C_2$ in Hardy-Littlewood accounts for.)

??? question "8. Show that no integer $\equiv 4 \pmod 9$ is a sum of three cubes."

    Cubes mod 9: $0^3 = 0$, $(\pm1)^3 = \pm1$, $(\pm 2)^3 = \pm 8 \equiv \mp 1$, $(\pm 3)^3 \equiv 0$, $(\pm 4)^3 = \pm 64 \equiv \pm 1$.
    So every cube is $0$ or $\pm 1$ mod 9, and three of them sum to something in $\{-3, \ldots, 3\}$ mod 9. Neither 4 nor $-4 \equiv 5$
    is in this set.

??? question "9. Explain why at least one of $e + \pi$ and $e\pi$ is transcendental."

    $e$ and $\pi$ are the two roots of $x^2 - (e + \pi)x + e\pi$. If both coefficients were algebraic, the roots of this
    polynomial would be algebraic (roots of a polynomial with algebraic coefficients are algebraic). But $\pi$ is
    transcendental (Lindemann, 1882). So at least one coefficient is transcendental.

??? question "10. Using Brun's theorem, explain why the twin prime conjecture cannot be proved by showing that twin primes are 'as common as primes'."

    The sum of $1/p$ over all primes diverges, but over twin primes it converges. So twin primes are genuinely rarer than
    primes, in a precise sense: they make up a vanishing proportion of primes. Any proof of infinitude must work with a set
    sparse enough that its reciprocal sum converges, which is why it needs more delicate tools than Euclid's argument.

## What you learned

- Reciprocity laws describe which primes split a polynomial; for abelian Galois groups the answer is congruence conditions
  (class field theory), for non-abelian ones it is coefficients of modular forms, and the Langlands programme predicts this
  in general.
- The abc conjecture says $c < K_\varepsilon \operatorname{rad}(abc)^{1+\varepsilon}$; it would imply many famous results.
  For polynomials it is the Mason-Stothers theorem, with a one-paragraph proof. Mochizuki's claimed proof is not accepted by
  most experts.
- Weak Goldbach is proved (Vinogradov, Helfgott); strong Goldbach is verified to $4 \cdot 10^{18}$ but open.
- Twin primes are rare (Brun), predicted by Hardy-Littlewood, and gaps of at most 246 occur infinitely often
  (Zhang, Maynard, Polymath).
- Computers discover conjectures, finish proofs, hold records (the largest known prime has over 41 million digits) and now
  check proofs.
- Many simple questions remain open, from the Riemann hypothesis to the irrationality of $\zeta(5)$ and of Euler's constant.

**Next:** this is the last chapter. Return to the [contents of the book](index.md) for the glossary and to choose where to
go next, or try the other books on the [Books shelf](../index.md).

## Further reading

- E. Frenkel, *Love and Math*, 2013 (the Langlands programme for general readers); S. Gelbart, "An elementary
  introduction to the Langlands program", *Bulletin of the AMS* 10, 1984.
- R. P. Langlands, "Problems in the theory of automorphic forms", in *Lectures in Modern Analysis and Applications III*,
  Lecture Notes in Mathematics 170, 1970.
- D. A. Cox, *Primes of the Form $x^2 + ny^2$*, 1989 (2nd ed. 2013): reciprocity, class field theory and the rule for
  $x^3 - 2$.
- S. Lang, "Old and new conjectured Diophantine inequalities", *Bulletin of the AMS* 23, 1990 (abc and its consequences);
  R. C. Mason, *Diophantine Equations over Function Fields*, 1984.
- P. Scholze and J. Stix, "Why abc is still a conjecture", 2018 (report, available online).
- H. A. Helfgott, "The ternary Goldbach problem", 2015 (book-length preprint on arXiv).
- J. Maynard, "Small gaps between primes", *Annals of Mathematics* 181, 2015; Y. Zhang, "Bounded gaps between primes",
  *Annals of Mathematics* 179, 2014.
- R. K. Guy, *Unsolved Problems in Number Theory*, 3rd ed., 2004: hundreds of open problems with references.
- The L-functions and Modular Forms Database, lmfdb.org.
- On this site: [Open problems](../../topics/number-theory/level-8/05-open-problems.md) and
  [The spread of primes](../../topics/number-theory/level-8/04-spread-of-primes.md) (Topics); the
  [Algebra book's last chapter](../algebra/22-Where-Algebra-Goes.md) and the
  [Geometry book's last chapter](../geometry/21-Where-Geometry-Goes.md); the [cryptography book](https://cryptography.akadian.ca/book/)
  for where the number theory of this book is used every day.
