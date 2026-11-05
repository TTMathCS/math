# 4. Polynomials and factoring

*Lines are the simplest curves, described by expressions like $3x + 2$. Allow squares, cubes and higher powers
of $x$ and you get polynomials, the expressions that describe the path of a thrown ball, the shape of a bridge
cable, the growth of a sum of interest payments, and almost every approximation a computer makes. This chapter is
about calculating with polynomials as confidently as with whole numbers: adding, multiplying, recognising the
special products that keep turning up, taking polynomials apart into factors, dividing one by another with a
remainder, and working with their fractions. Polynomials behave remarkably like integers, and that likeness is a
thread that runs through the rest of this book.*

!!! abstract "In this chapter"
    **You will learn:**

    - what a polynomial is, and its degree, leading coefficient and constant term
    - how to add, subtract and multiply polynomials, and why degrees add when you multiply
    - the special products (difference of squares, sums and differences of cubes, $a^n - b^n$) and a first look at
      $(a + b)^n$
    - a toolkit of factoring methods, and how factoring solves equations and inequalities
    - long division and synthetic division, the division algorithm (with proof) and the remainder theorem
    - how to simplify, combine and solve with rational expressions
    - how to split a fraction into partial fractions, and why it is always possible

    **You need:** [Chapter 1](01-The-Language-of-Algebra.md) (expanding, the laws, the zero product property) and
    [Chapter 2](02-Equations-and-Inequalities.md) (safe and unsafe steps). For a gentler version, see the Topics
    lessons [Polynomials](../../topics/algebra/level-6/02-polynomials.md) and
    [Factoring](../../topics/algebra/level-6/03-factoring.md).

    **Levels:** 4.1 to 4.4 are intermediate; 4.5 and 4.6 are intermediate with advanced proofs; 4.7 is advanced.

## 4.1 Polynomials

A **polynomial in $x$** is an expression of the form

$$a_nx^n + a_{n-1}x^{n-1} + \cdots + a_2x^2 + a_1x + a_0,$$

where $n$ is a whole number and the **coefficients** $a_0, a_1, \ldots, a_n$ are numbers. The little numbers under
the $a$'s are **subscripts**: they are labels, not powers, and $a_3$ simply means "the coefficient of $x^3$". The
dots mean "and so on, following the pattern".

- If $a_n \neq 0$, the polynomial has **degree** $n$; $a_n$ is the **leading coefficient** and $a_nx^n$ the
  **leading term**. The number $a_0$ is the **constant term**.
- Polynomials of degree 1, 2, 3, 4, 5 are called **linear, quadratic, cubic, quartic, quintic**.
- A polynomial with one term is a **monomial**, with two a **binomial**, with three a **trinomial**.
- A polynomial is **monic** if its leading coefficient is 1.
- A nonzero constant such as $7$ is a polynomial of degree 0. The **zero polynomial** $0$ has no nonzero
  coefficient, so no degree in this sense; some books give it degree $-\infty$, for a reason you will see in 4.2.

**Example 1.** $5 - 3x^2 + x^4$ is a quartic, written in **standard form** (highest power first) as
$x^4 - 3x^2 + 5$. It is monic; its coefficients are $a_4 = 1$, $a_3 = 0$, $a_2 = -3$, $a_1 = 0$, $a_0 = 5$.

**Not polynomials:** $\frac{1}{x}$ (a negative power), $\sqrt{x}$ (a fractional power), $2^x$ (the variable in the
exponent). The exponents in a polynomial must be whole numbers $0, 1, 2, \ldots$, and there must be finitely many
terms.

The coefficients can come from different number systems, and it matters which. A polynomial **over the integers**
has integer coefficients, like $2x^2 - 3$; **over the rationals**, fractions are allowed; **over the reals**, any
real numbers, like $x^2 - \sqrt{2}$. Whether a polynomial "factors" depends on which system you are allowed to use,
as 4.4 will show.

Polynomials in several letters work the same way. In $3x^2y - xy + 4y^3$, the degree of each term is the sum of its
exponents ($3$, $2$ and $3$), and the degree of the polynomial is the largest of these, 3.

**Two views.** A polynomial can be thought of as a **function**: a rule that takes a number $x$ and returns a
number $p(x)$. Or it can be thought of as a **formal expression**: a list of coefficients $(a_0, a_1, \ldots, a_n)$
with rules for adding and multiplying lists. For real coefficients the two views agree (two polynomials that give
the same value at every real $x$ have the same coefficients, as [Chapter 10](10-Roots-and-Coefficients.md) proves).
In other number systems they can differ, and the formal view is the one algebra uses in Part IV.

## 4.2 Arithmetic with polynomials

### Adding and subtracting

Add like terms, that is, add coefficients of equal powers. When subtracting, change the sign of every term of the
polynomial being subtracted (it is multiplication by $-1$).

**Example 2.**
$(2x^2 - 3x + 1) + (x^3 + 4x - 5) = x^3 + 2x^2 + x - 4$, and
$(5x^2 - 2x + 3) - (2x^2 - 6x - 1) = 5x^2 - 2x + 3 - 2x^2 + 6x + 1 = 3x^2 + 4x + 4$.

### Multiplying

Multiply every term of one by every term of the other and collect. A grid keeps the bookkeeping straight.

**Example 3.** Multiply $(x^2 + 2x - 3)(2x - 1)$.

| $\times$ | $x^2$ | $2x$ | $-3$ |
|---|---|---|---|
| $2x$ | $2x^3$ | $4x^2$ | $-6x$ |
| $-1$ | $-x^2$ | $-2x$ | $3$ |

Collect along the diagonals of equal degree: $2x^3 + (4x^2 - x^2) + (-6x - 2x) + 3 = 2x^3 + 3x^2 - 8x + 3$.
**Check** at $x = 1$: $(0)(1) = 0$ and $2 + 3 - 8 + 3 = 0$. ✓ (Checking at $x = 1$ is especially quick: it adds
up the coefficients.)

**Polynomials and place value.** Multiplying $123 \times 45$ by the school method is polynomial multiplication in
disguise. Write $123 = x^2 + 2x + 3$ and $45 = 4x + 5$ with $x = 10$. Their product is $4x^3 + 13x^2 + 22x + 15$, and
at $x = 10$ this is $4000 + 1300 + 220 + 15 = 5535$. The "carrying" in school arithmetic is just tidying
coefficients bigger than 9. This is one reason polynomials and integers behave so much alike.

### Degrees add

**Theorem.** If $f$ and $g$ are nonzero polynomials with real coefficients, then $\deg(fg) = \deg f + \deg g$.

*Proof.* Let $f$ have leading term $a_nx^n$ and $g$ leading term $b_mx^m$, with $a_n \neq 0$ and $b_m \neq 0$. Every
term of the product has the form (term of $f$) times (term of $g$), of degree at most $n + m$, and the only product
of degree exactly $n + m$ is $a_nx^n \cdot b_mx^m = a_nb_mx^{n+m}$. Since $a_n \neq 0$ and $b_m \neq 0$, the zero
product property ([Chapter 1](01-The-Language-of-Algebra.md), Fact 4) gives $a_nb_m \neq 0$. So the product has
degree $n + m$, with leading coefficient $a_nb_m$. $\square$

Two consequences. First, **the product of two nonzero polynomials is nonzero**, so the zero product property holds
for polynomials too. Second, the convention $\deg 0 = -\infty$ is chosen so that the rule "$\deg(fg) = \deg f +
\deg g$" survives even when one factor is 0. The proof used the zero product property for the coefficients; in
"clock arithmetic" modulo 6, where $2 \times 3 = 0$, it fails, and $(2x)(3x) = 6x^2 = 0$. Such number systems are
studied in [Chapter 17](17-Rings-and-Ideals.md).

For sums, $\deg(f + g) \leq \max(\deg f, \deg g)$, and it can be smaller if leading terms cancel:
$(x^2 + 1) + (-x^2 + x) = x + 1$.

### Try it in Python

A polynomial is just its list of coefficients, lowest power first. Multiplying is a double loop:

```python
def poly_mul(f, g):
    """f, g: coefficient lists, lowest power first."""
    h = [0] * (len(f) + len(g) - 1)
    for i, a in enumerate(f):
        for j, b in enumerate(g):
            h[i + j] += a * b      # x^i times x^j lands in x^(i+j)
    return h

print(poly_mul([-3, 2, 1], [-1, 2]))   # [3, -8, 3, 2]  means 3 - 8x + 3x^2 + 2x^3
```

## 4.3 Special products and identities

Some products come up so often that it pays to know them on sight, in both directions: expanding (left to right)
and factoring (right to left).

$$
\begin{aligned}
(a + b)^2 &= a^2 + 2ab + b^2 \\
(a - b)^2 &= a^2 - 2ab + b^2 \\
(a + b)(a - b) &= a^2 - b^2 \\
(a + b)^3 &= a^3 + 3a^2b + 3ab^2 + b^3 \\
a^3 - b^3 &= (a - b)(a^2 + ab + b^2) \\
a^3 + b^3 &= (a + b)(a^2 - ab + b^2)
\end{aligned}
$$

Each is proved by multiplying out the right side. For example,
$(a - b)(a^2 + ab + b^2) = a^3 + a^2b + ab^2 - a^2b - ab^2 - b^3 = a^3 - b^3$: everything in the middle cancels.

The **difference of two squares** has a picture. Cut a $b \times b$ square from the corner of an $a \times a$
square; the L-shaped remainder, of area $a^2 - b^2$, can be cut and rearranged into an $(a + b) \times (a - b)$
rectangle.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 170" role="img" aria-label="Left, an a by a square with a b by b square removed from its top right corner, leaving two pieces. Right, the two pieces rearranged into a rectangle a plus b wide and a minus b tall">
  <rect x="40" y="20" width="70" height="120" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="110" y="70" width="50" height="70" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="110" y="20" width="50" height="50" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="135" y="50" text-anchor="middle" font-size="13" fill="currentColor">b²</text>
  <text x="100" y="158" text-anchor="middle" font-size="14" fill="currentColor">a</text>
  <text x="26" y="84" text-anchor="middle" font-size="14" fill="currentColor">a</text>
  <text x="135" y="14" text-anchor="middle" font-size="13" fill="currentColor">b</text>
  <text x="190" y="88" text-anchor="middle" font-size="20" fill="currentColor">→</text>
  <rect x="220" y="50" width="120" height="70" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="340" y="50" width="50" height="70" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <text x="305" y="140" text-anchor="middle" font-size="14" fill="currentColor">a + b</text>
  <text x="404" y="90" text-anchor="middle" font-size="14" fill="currentColor">a − b</text>
</svg>
</div>

It makes some mental arithmetic easy: $47 \times 53 = (50 - 3)(50 + 3) = 2500 - 9 = 2491$.

### The general difference of powers

**Theorem.** For every whole number $n \geq 1$,

$$a^n - b^n = (a - b)(a^{n-1} + a^{n-2}b + a^{n-3}b^2 + \cdots + ab^{n-2} + b^{n-1}).$$

*Proof.* Multiply out. Multiplying the long bracket by $a$ gives $a^n + a^{n-1}b + \cdots + ab^{n-1}$; multiplying
it by $-b$ gives $-a^{n-1}b - \cdots - ab^{n-1} - b^n$. Every term except $a^n$ and $-b^n$ appears once with each
sign and cancels: the sum **telescopes**. $\square$

When $n$ is odd, replacing $b$ by $-b$ turns $a^n - b^n$ into $a^n + b^n$ and gives a factorisation of a **sum** of
odd powers: $a^5 + b^5 = (a + b)(a^4 - a^3b + a^2b^2 - ab^3 + b^4)$. A sum of two even powers such as $a^2 + b^2$ has
no such factor with real coefficients.

**Example 4 (divisibility).** For whole numbers, the theorem says $a - b$ divides $a^n - b^n$. So $2^{2026} - 1$ is
divisible by 3, because it equals $4^{1013} - 1^{1013}$ and $4 - 1 = 3$. And if $n = rs$ is composite, then
$2^n - 1 = (2^r)^s - 1$ is divisible by $2^r - 1$; so $2^n - 1$ can only be prime when $n$ is prime. (Primes of the
form $2^p - 1$ are the **Mersenne primes**; the largest known primes are of this kind.)

**Example 5 (Sophie Germain's identity).**
$a^4 + 4b^4 = (a^2 + 2b^2)^2 - (2ab)^2 = (a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2)$. The trick is to add and subtract
$4a^2b^2$ to complete a square, then use the difference of squares. With $a = n$, $b = 1$: $n^4 + 4$ is never prime
for $n > 1$, because the smaller factor $n^2 - 2n + 2 = (n - 1)^2 + 1$ is then bigger than 1.

**Example 6 (sums of two squares).** Multiplying out shows

$$(a^2 + b^2)(c^2 + d^2) = (ac - bd)^2 + (ad + bc)^2.$$

So a product of two sums of two squares is again a sum of two squares: $5 = 1^2 + 2^2$ and $13 = 2^2 + 3^2$, so
$65 = (2 - 6)^2 + (3 + 4)^2 = 16 + 49$. This identity, known to Brahmagupta in the seventh century, is really the
rule for multiplying complex numbers ([Chapter 9](09-Complex-Numbers.md)), and it is the start of the theory of
which numbers are sums of two squares ([Chapter 18](18-Factorization-in-Rings.md)).

### A first look at $(a + b)^n$

Multiplying out powers of $a + b$:

$$
\begin{aligned}
(a + b)^2 &= a^2 + 2ab + b^2 \\
(a + b)^3 &= a^3 + 3a^2b + 3ab^2 + b^3 \\
(a + b)^4 &= a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4
\end{aligned}
$$

The coefficients 1, 2, 1; 1, 3, 3, 1; 1, 4, 6, 4, 1 are rows of **Pascal's triangle**, in which each number is the
sum of the two above it. Here is why they appear. Expanding $(a + b)(a + b)(a + b)(a + b)$ means choosing one
letter from each of the four brackets in every possible way and multiplying. A term $a^2b^2$ arises once for each
way to choose which two of the four brackets supply a $b$, and there are 6 such ways. In general the coefficient of
$a^{n-k}b^k$ in $(a + b)^n$ is the number of ways to choose $k$ brackets out of $n$, written $\binom{n}{k}$. The full
**binomial theorem**, with its proof, is in [Chapter 8](08-Sequences-Series-and-Induction.md).

## 4.4 Factoring

To **factor** a polynomial is to write it as a product of polynomials of lower degree. It is the reverse of
expanding, and it is harder, in the same way that factoring 391 is harder than multiplying $17 \times 23$.

### Why factor?

Because of the **zero product property**: if $AB = 0$ then $A = 0$ or $B = 0$. A factored polynomial equation
splits into simpler ones.

**Example 7.** Solve $2x^3 - x^2 - 18x + 9 = 0$.

Group in pairs: $x^2(2x - 1) - 9(2x - 1) = (2x - 1)(x^2 - 9) = (2x - 1)(x - 3)(x + 3)$. So $x = \frac{1}{2}$, $3$ or
$-3$. **Check** $x = 3$: $54 - 9 - 54 + 9 = 0$. ✓

Factoring also decides the **sign** of a polynomial, which is what inequalities need.

**Example 8.** Solve $x^3 - x > 0$.

$x^3 - x = x(x - 1)(x + 1)$. The critical points $-1, 0, 1$ cut the line into four intervals; a product of three
factors is positive when an even number of them are negative. For $x > 1$: none negative, positive. For
$0 < x < 1$: one negative ($x - 1$), negative. For $-1 < x < 0$: two negative, positive. For $x < -1$: three,
negative. Answer: $(-1, 0) \cup (1, \infty)$.

### The toolkit

Try these in order.

**1. Take out the greatest common factor.** $6x^3 - 9x^2 + 3x = 3x(2x^2 - 3x + 1)$, and then
$2x^2 - 3x + 1 = (2x - 1)(x - 1)$ (method 3).

**2. Group.** For four terms, look for pairs with a common factor:
$x^3 + 2x^2 - 9x - 18 = x^2(x + 2) - 9(x + 2) = (x + 2)(x^2 - 9) = (x + 2)(x - 3)(x + 3)$.

**3. Monic quadratics $x^2 + bx + c$.** Since $(x + p)(x + q) = x^2 + (p + q)x + pq$, look for two numbers with
**product $c$ and sum $b$**.

- $x^2 + 7x + 12$: product 12, sum 7: 3 and 4. So $(x + 3)(x + 4)$.
- $x^2 - x - 20$: product $-20$, sum $-1$: $-5$ and 4. So $(x - 5)(x + 4)$.

The signs tell you where to look: if $c > 0$ both numbers have the sign of $b$; if $c < 0$ they have opposite signs.

**4. Non-monic quadratics $ax^2 + bx + c$: the "ac method".** Find two numbers with product $ac$ and sum $b$, use
them to split the middle term, then group.

**Example 9.** Factor $6x^2 + 11x - 10$.

$ac = -60$. Two numbers with product $-60$ and sum 11: 15 and $-4$. Split:
$6x^2 + 15x - 4x - 10 = 3x(2x + 5) - 2(2x + 5) = (3x - 2)(2x + 5)$.

*Why it works:* if $ax^2 + bx + c = (px + q)(rx + s)$, then $a = pr$, $c = qs$ and $b = ps + qr$. The two numbers
$ps$ and $qr$ have sum $b$ and product $psqr = (pr)(qs) = ac$. So if the quadratic factors with integer coefficients,
the search always succeeds. If no pair works, the quadratic does not factor over the integers, and
[Chapter 5](05-Quadratics.md)'s formula takes over.

**5. Difference of squares, sum and difference of cubes.**

- $9x^2 - 25y^2 = (3x - 5y)(3x + 5y)$.
- $x^4 - 16 = (x^2 - 4)(x^2 + 4) = (x - 2)(x + 2)(x^2 + 4)$.
- $8x^3 + 27 = (2x)^3 + 3^3 = (2x + 3)(4x^2 - 6x + 9)$.

**6. Substitute.** A polynomial in $x^2$ is a quadratic in disguise. In $x^4 - 5x^2 + 4$, put $u = x^2$:
$u^2 - 5u + 4 = (u - 1)(u - 4)$, so $x^4 - 5x^2 + 4 = (x^2 - 1)(x^2 - 4) = (x - 1)(x + 1)(x - 2)(x + 2)$.

**7. Find a root.** If $p(r) = 0$ for some number $r$, then $x - r$ is a factor of $p$ (the **factor theorem**,
proved in 4.5). For $x^3 - 6x^2 + 11x - 6$, try small integers: $p(1) = 1 - 6 + 11 - 6 = 0$. So $x - 1$ is a factor,
and dividing (4.5) gives $x^3 - 6x^2 + 11x - 6 = (x - 1)(x^2 - 5x + 6) = (x - 1)(x - 2)(x - 3)$. Which numbers are
worth trying is the **rational root theorem** of [Chapter 10](10-Roots-and-Coefficients.md): for integer
coefficients, any rational root $\frac{p}{q}$ in lowest terms has $p$ dividing the constant term and $q$ dividing
the leading coefficient.

### When to stop: irreducible polynomials

A polynomial is **irreducible** (over a given number system) if it cannot be written as a product of two
polynomials of lower degree with coefficients in that system. Whether something is irreducible depends on the
system.

- $x^2 - 2$ is irreducible over the rationals, because $\sqrt{2}$ is irrational, but over the reals it factors as
  $(x - \sqrt{2})(x + \sqrt{2})$.
- $x^2 + 1$ is irreducible over the reals, because $x^2 + 1 \geq 1 > 0$ has no real root, but over the complex
  numbers it is $(x - i)(x + i)$.
- $x^4 + 1$ has no real roots, yet it is **not** irreducible over the reals:
  $x^4 + 1 = (x^2 + 1)^2 - 2x^2 = (x^2 + \sqrt{2}x + 1)(x^2 - \sqrt{2}x + 1)$.

The last example shows that "no roots" does not mean "irreducible" once the degree is 4 or more. For degree 2 or 3
it does: a factorisation of a quadratic or cubic must include a linear factor, and a linear factor means a root.

Two big theorems, proved later, say how far factoring can go. Over the complex numbers, every polynomial factors
completely into linear factors (the **fundamental theorem of algebra**,
[Chapter 12](12-The-Fundamental-Theorem-of-Algebra.md)); consequently every real polynomial factors into real
linear factors and real irreducible quadratics. And over the rationals or integers, factorisation into irreducibles
is unique, just like prime factorisation of integers ([Chapter 18](18-Factorization-in-Rings.md)).

### A strategy

1. Common factor first, always.
2. Count terms: two terms, look for squares or cubes; three terms, a quadratic (perhaps in disguise); four terms,
   grouping.
3. Try small roots ($\pm 1, \pm 2, \ldots$) and divide out.
4. Factor each factor again until every piece is irreducible.
5. Check by expanding, or by substituting one value.

<figure class="play" data-play="tiles"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Factoring run backwards: x² + (a + b)x + ab fills a rectangle exactly when it splits as (x + a)(x + b).</figcaption></figure>

## 4.5 Long division and synthetic division

*Level: intermediate, with an advanced proof.*

When 47 is divided by 5, the answer is "9 remainder 2", meaning $47 = 5 \times 9 + 2$ with $0 \leq 2 < 5$.
Polynomials can be divided the same way, with degree playing the role of size.

**Example 10.** Divide $2x^3 - 3x^2 + 4x - 5$ by $x - 2$.

The method is exactly school long division: divide the leading terms, multiply back, subtract, bring down, repeat.

$$
\begin{array}{r|l}
2x^3 - 3x^2 + 4x - 5 & \div\,(x - 2) \\
\hline
\underline{-(2x^3 - 4x^2)} & 2x^3 \div x = 2x^2 \\
x^2 + 4x & \\
\underline{-(x^2 - 2x)} & x^2 \div x = x \\
6x - 5 & \\
\underline{-(6x - 12)} & 6x \div x = 6 \\
7 & \text{remainder}
\end{array}
$$

So the quotient is $2x^2 + x + 6$ and the remainder is 7:

$$2x^3 - 3x^2 + 4x - 5 = (x - 2)(2x^2 + x + 6) + 7.$$

**Check** by expanding the right side: $2x^3 + x^2 + 6x - 4x^2 - 2x - 12 + 7 = 2x^3 - 3x^2 + 4x - 5$. ✓

**Example 11.** Divide $x^4 + 3x^3 - 2x + 5$ by $x^2 + 1$.

Write the missing $x^2$ term as $0x^2$ to keep the columns straight. $x^4 \div x^2 = x^2$; subtract
$x^2(x^2 + 1) = x^4 + x^2$ to leave $3x^3 - x^2 - 2x + 5$. Then $3x^3 \div x^2 = 3x$; subtract $3x^3 + 3x$ to leave
$-x^2 - 5x + 5$. Then $-x^2 \div x^2 = -1$; subtract $-x^2 - 1$ to leave $-5x + 6$, of degree less than 2, so we
stop:

$$x^4 + 3x^3 - 2x + 5 = (x^2 + 1)(x^2 + 3x - 1) + (-5x + 6).$$

### The division algorithm

**Theorem (division algorithm).** Let $f$ and $g$ be polynomials with real (or rational) coefficients, and
$g \neq 0$. Then there are **unique** polynomials $q$ (the quotient) and $r$ (the remainder) with

$$f = qg + r \qquad\text{and}\qquad r = 0 \text{ or } \deg r < \deg g.$$

*Proof of existence.* We use **strong induction** on the degree of $f$: we show the statement for $f$ assuming it
is already known for all polynomials of smaller degree. (Induction is treated properly in
[Chapter 8](08-Sequences-Series-and-Induction.md); here it just means "the long division process ends".) If $f = 0$
or $\deg f < \deg g$, take $q = 0$ and $r = f$. Otherwise let $f$ have leading term $ax^n$ and $g$ leading term
$bx^m$, with $n \geq m$. The polynomial

$$f_1 = f - \frac{a}{b}x^{n-m}g$$

has the leading terms cancelled, so $f_1 = 0$ or $\deg f_1 < n$. By the induction assumption, $f_1 = q_1g + r$ with
$r = 0$ or $\deg r < \deg g$. Then $f = \left(q_1 + \frac{a}{b}x^{n-m}\right)g + r$, as required. (This is exactly
one step of long division.)

*Proof of uniqueness.* Suppose $f = qg + r = q'g + r'$, both with remainders of degree less than $\deg g$ (or zero).
Then $(q - q')g = r' - r$. If $q \neq q'$, the left side has degree at least $\deg g$, by the theorem of 4.2, while
the right side is zero or has degree less than $\deg g$. That is impossible, so $q = q'$, and then $r = r'$. $\square$

Notice the division by $b$, the leading coefficient of $g$. That is why the theorem needs coefficients in a system
where you can divide (rationals, reals, complex numbers). Over the integers it still works when $g$ is monic.

### Synthetic division

Dividing by $x - c$ is so common that there is a shortcut, called **synthetic division** (or Ruffini's rule). Write
only the coefficients of $f$ and the number $c$. Bring down the first coefficient; then repeatedly multiply the last
number written by $c$, add it to the next coefficient, and write the sum.

**Example 12.** Divide $2x^3 - 3x^2 + 4x - 5$ by $x - 2$ again.

$$
\begin{array}{c|rrrr}
2 & 2 & -3 & 4 & -5 \\
  &   & 4 & 2 & 12 \\
\hline
  & 2 & 1 & 6 & \mathbf{7}
\end{array}
$$

Bring down 2. Then $2 \times 2 = 4$, and $-3 + 4 = 1$. Then $1 \times 2 = 2$, and $4 + 2 = 6$. Then $6 \times 2 = 12$,
and $-5 + 12 = 7$. The bottom row gives the quotient $2x^2 + x + 6$ and the remainder 7, as before.

*Why it works.* Write the quotient as $b_2x^2 + b_1x + b_0$ and the remainder as $r$, so that
$2x^3 - 3x^2 + 4x - 5 = (x - 2)(b_2x^2 + b_1x + b_0) + r$. Expanding the right side and comparing coefficients:

$$2 = b_2, \qquad -3 = b_1 - 2b_2, \qquad 4 = b_0 - 2b_1, \qquad -5 = r - 2b_0.$$

Solving each for its new unknown gives $b_2 = 2$, $b_1 = -3 + 2b_2$, $b_0 = 4 + 2b_1$, $r = -5 + 2b_0$: "multiply the
last result by $c = 2$ and add the next coefficient", which is exactly the table.

The same steps also **evaluate** $f(2)$ efficiently. Rewriting $f(x) = ((2x - 3)x + 4)x - 5$ (**Horner's form**) and
working from the inside, with $x = 2$: $2 \cdot 2 - 3 = 1$, $1 \cdot 2 + 4 = 6$, $6 \cdot 2 - 5 = 7$. The same
numbers. Horner's form needs only $n$ multiplications for a polynomial of degree $n$, and it is how computers
evaluate polynomials. It is named after William Horner, who published it in 1819; Paolo Ruffini had described it in
1804, and Chinese mathematicians, among them Qin Jiushao in 1247, used an equivalent method long before.

### The remainder and factor theorems

**Remainder theorem.** The remainder when $f(x)$ is divided by $x - c$ is $f(c)$.

*Proof.* By the division algorithm, $f(x) = (x - c)q(x) + r$ with $r$ a constant (degree less than 1). Put $x = c$:
$f(c) = 0 \cdot q(c) + r = r$. $\square$

**Factor theorem.** $x - c$ is a factor of $f(x)$ if and only if $f(c) = 0$.

*Proof.* $x - c$ is a factor exactly when the remainder is 0, and the remainder is $f(c)$. $\square$

These two short results, with their consequences, open [Chapter 10](10-Roots-and-Coefficients.md).

**Example 13.** Factor $f(x) = x^3 + 2x^2 - 5x - 6$.

Try $x = -1$: $-1 + 2 + 5 - 6 = 0$, so $x + 1$ is a factor. Synthetic division by $x - (-1)$:

$$
\begin{array}{c|rrrr}
-1 & 1 & 2 & -5 & -6 \\
   &   & -1 & -1 & 6 \\
\hline
   & 1 & 1 & -6 & \mathbf{0}
\end{array}
$$

So $f(x) = (x + 1)(x^2 + x - 6) = (x + 1)(x + 3)(x - 2)$.

## 4.6 Rational expressions

A **rational expression** is a fraction $\dfrac{p(x)}{q(x)}$ of two polynomials, with $q$ not the zero polynomial.
It is to polynomials what a fraction is to integers. It is undefined wherever $q(x) = 0$; the remaining numbers
form its **domain**.

All the rules for fractions carry over, and the key skill is the same as with numbers: **factor first**.

### Simplifying

You may cancel a common **factor** of the top and bottom, never a common term.

**Example 14.** Simplify $\dfrac{x^2 - 9}{x^2 + x - 6}$.

$$\frac{x^2 - 9}{x^2 + x - 6} = \frac{(x - 3)(x + 3)}{(x + 3)(x - 2)} = \frac{x - 3}{x - 2}, \qquad x \neq -3,\ x \neq 2.$$

The condition $x \neq -3$ must be kept: the original is undefined at $-3$ even though the simplified form is not.
On a graph, the original is the graph of $\frac{x - 3}{x - 2}$ with a single point missing, a **hole**, at $x = -3$.

**The classic mistake.** $\frac{x + 6}{x + 3}$ is **not** $\frac{6}{3} = 2$, and it is not $1 + 2$. The $x$ is a
term, not a factor; try $x = 1$: $\frac{7}{4} \neq 2$. This fraction is already in lowest terms.

### Multiplying and dividing

Multiply tops and bottoms, factoring first so you can cancel; divide by multiplying by the reciprocal.

**Example 15.**

$$\frac{x^2 - 4}{x^2 + 3x} \cdot \frac{x + 3}{x - 2} = \frac{(x - 2)(x + 2)}{x(x + 3)} \cdot \frac{x + 3}{x - 2} = \frac{x + 2}{x}, \qquad x \neq 0, -3, 2.$$

### Adding and subtracting

Use a common denominator, the **least common multiple** of the denominators, found by factoring them.

**Example 16.**

$$\frac{2}{x - 1} + \frac{3}{x + 2} = \frac{2(x + 2) + 3(x - 1)}{(x - 1)(x + 2)} = \frac{5x + 1}{(x - 1)(x + 2)}.$$

**Example 17.**

$$\frac{1}{x^2 - 1} - \frac{1}{x^2 + x} = \frac{1}{(x - 1)(x + 1)} - \frac{1}{x(x + 1)} = \frac{x - (x - 1)}{x(x - 1)(x + 1)} = \frac{1}{x(x - 1)(x + 1)}.$$

The common denominator $x(x - 1)(x + 1)$ uses each factor once, not the product $(x^2 - 1)(x^2 + x)$, which has
$x + 1$ twice.

**Example 18 (a compound fraction).** Multiply top and bottom by $xy$:

$$\frac{\frac{1}{x} - \frac{1}{y}}{\frac{1}{x} + \frac{1}{y}} = \frac{y - x}{y + x}.$$

### Rational equations

Multiplying both sides by the common denominator clears the fractions, but it is a one-way step
([Chapter 2](02-Equations-and-Inequalities.md), 2.7): it can create solutions that make a denominator zero. **Every
candidate must be checked against the domain.**

**Example 19.** Solve $\dfrac{x}{x - 3} - \dfrac{2}{x + 3} = \dfrac{18}{x^2 - 9}$.

The common denominator is $x^2 - 9 = (x - 3)(x + 3)$, so $x \neq \pm 3$. Multiply through:
$x(x + 3) - 2(x - 3) = 18$, so $x^2 + x + 6 = 18$, $x^2 + x - 12 = 0$, $(x + 4)(x - 3) = 0$. The candidate $x = 3$ is
excluded, so the only solution is $x = -4$. **Check:** $\frac{-4}{-7} - \frac{2}{-1} = \frac{4}{7} + 2 = \frac{18}{7}$
and $\frac{18}{16 - 9} = \frac{18}{7}$. ✓

Rational expressions can be added, subtracted, multiplied and divided (by anything except 0), and they obey all the
laws of [Chapter 1](01-The-Language-of-Algebra.md). In the language of 1.3 they form a **field**, the field of
rational functions, just as fractions of integers form the field of rational numbers.

## 4.7 Partial fractions

*Level: advanced.*

Adding fractions combines simple pieces into one complicated fraction. Sometimes we need to go the other way.

**A puzzle.** What is

$$\frac{1}{1 \cdot 2} + \frac{1}{2 \cdot 3} + \frac{1}{3 \cdot 4} + \cdots + \frac{1}{99 \cdot 100}\;?$$

Notice that $\frac{1}{n} - \frac{1}{n + 1} = \frac{(n + 1) - n}{n(n + 1)} = \frac{1}{n(n + 1)}$. So the sum is

$$\left(1 - \tfrac{1}{2}\right) + \left(\tfrac{1}{2} - \tfrac{1}{3}\right) + \cdots + \left(\tfrac{1}{99} - \tfrac{1}{100}\right) = 1 - \frac{1}{100} = \frac{99}{100}.$$

All the middle terms cancel. The key step was writing one fraction, $\frac{1}{n(n+1)}$, as a sum of simpler ones.
That is a **partial fraction decomposition**. Besides sums like this, it is the standard way to integrate rational
functions in calculus, to invert Laplace transforms in engineering, and to find formulas for sequences from their
generating functions.

### Proper fractions first

A rational expression $\frac{p}{q}$ is **proper** if $\deg p < \deg q$. If it is not, divide first (4.5): $p = sq + r$
gives $\frac{p}{q} = s + \frac{r}{q}$, a polynomial plus a proper fraction.

**Example 20.** $\dfrac{x^3}{x^2 - 1} = x + \dfrac{x}{x^2 - 1}$, since $x^3 = x(x^2 - 1) + x$.

### Case 1: distinct linear factors

If the denominator is a product of different linear factors, there is one simple fraction for each:

$$\frac{5x + 1}{(x - 1)(x + 2)} = \frac{A}{x - 1} + \frac{B}{x + 2}.$$

To find $A$, multiply both sides by $x - 1$:

$$\frac{5x + 1}{x + 2} = A + \frac{B(x - 1)}{x + 2},$$

and put $x = 1$: the $B$ term vanishes, leaving $A = \frac{6}{3} = 2$. Similarly, multiplying by $x + 2$ and putting
$x = -2$ gives $B = \frac{-9}{-3} = 3$. So

$$\frac{5x + 1}{(x - 1)(x + 2)} = \frac{2}{x - 1} + \frac{3}{x + 2},$$

which undoes Example 16. In practice the step is done by eye: **cover up** the factor $x - 1$ in the denominator
and substitute its root $x = 1$ into what is left. This is the **cover-up method**, usually credited to the
engineer Oliver Heaviside.

A careful reader will object: we put $x = 1$ into an equation that was only claimed for $x \neq 1$. The answer is
that, after clearing all denominators, the claim becomes an identity between **polynomials**,
$5x + 1 = A(x + 2) + B(x - 1)$, which holds for all $x$ other than $1$ and $-2$, so for infinitely many $x$; and two
polynomials that agree at infinitely many points are identical ([Chapter 10](10-Roots-and-Coefficients.md) proves
that a nonzero polynomial of degree $n$ has at most $n$ roots, and applies it to their difference). So substituting
$x = 1$ is legitimate.

**Example 21.** Decompose $\dfrac{x^2 + 1}{x(x - 1)(x + 1)}$.

Cover-up: at $x = 0$, $\frac{1}{(-1)(1)} = -1$; at $x = 1$, $\frac{2}{(1)(2)} = 1$; at $x = -1$,
$\frac{2}{(-1)(-2)} = 1$. So it equals $-\frac{1}{x} + \frac{1}{x - 1} + \frac{1}{x + 1}$.
**Check** at $x = 2$: the left side is $\frac{5}{6}$, the right side is $-\frac{1}{2} + 1 + \frac{1}{3} = \frac{5}{6}$. ✓

### Case 2: repeated linear factors

A factor $(x - a)^k$ needs $k$ fractions: $\frac{A_1}{x - a} + \frac{A_2}{(x - a)^2} + \cdots + \frac{A_k}{(x - a)^k}$.
One is not enough; $\frac{x}{(x + 1)^2}$, for instance, cannot be $\frac{A}{x + 1}$ for any number $A$ (that would
need $x = A(x + 1)$ for all $x$).

**Example 22.** $\dfrac{3x + 5}{(x + 1)^2} = \dfrac{A}{x + 1} + \dfrac{B}{(x + 1)^2}$ means $3x + 5 = A(x + 1) + B$.
Comparing coefficients of $x$: $A = 3$; constants: $A + B = 5$, so $B = 2$.

**Example 23.** Decompose $\dfrac{2x^2 + 3}{(x - 1)(x + 1)^2}$.

Write it as $\frac{A}{x - 1} + \frac{B}{x + 1} + \frac{C}{(x + 1)^2}$, so that
$2x^2 + 3 = A(x + 1)^2 + B(x - 1)(x + 1) + C(x - 1)$. Put $x = 1$: $5 = 4A$, $A = \frac{5}{4}$. Put $x = -1$:
$5 = -2C$, $C = -\frac{5}{2}$. Compare the coefficients of $x^2$: $2 = A + B$, so $B = \frac{3}{4}$. **Check** the
constant terms: $A - B - C = \frac{5}{4} - \frac{3}{4} + \frac{5}{2} = 3$. ✓

### Case 3: irreducible quadratic factors

An irreducible quadratic factor $x^2 + bx + c$ gets a fraction with a **linear** top, $\frac{Bx + C}{x^2 + bx + c}$
(the top must be allowed one degree less than the bottom).

**Example 24.** $\dfrac{x + 3}{x(x^2 + 1)} = \dfrac{A}{x} + \dfrac{Bx + C}{x^2 + 1}$ means
$x + 3 = A(x^2 + 1) + (Bx + C)x$. Put $x = 0$: $A = 3$. Coefficient of $x^2$: $0 = A + B$, so $B = -3$. Coefficient
of $x$: $C = 1$. So it equals $\frac{3}{x} + \frac{1 - 3x}{x^2 + 1}$.

### Why it always works

**Theorem.** Let $\frac{p}{q}$ be a proper rational expression with real coefficients, and factor $q$ into powers of
distinct linear factors and distinct irreducible quadratics. Then $\frac{p}{q}$ is a sum of fractions of the shapes
above, one for each power of each factor, and the decomposition is unique.

*Proof sketch.* The number of unknown coefficients always equals $\deg q$, which is a hint but not a proof. The real
engine is a fact about polynomials that mirrors one about integers: **if $q_1$ and $q_2$ have no common factor,
there are polynomials $s$ and $t$ with $sq_1 + tq_2 = 1$.** (For integers this is Bézout's identity, for example
$2 \cdot 5 - 3 \cdot 3 = 1$; for polynomials it comes from the Euclidean algorithm, which repeats the division
algorithm of 4.5. See [Chapter 18](18-Factorization-in-Rings.md).) Given it,

$$\frac{p}{q_1q_2} = \frac{p(sq_1 + tq_2)}{q_1q_2} = \frac{ps}{q_2} + \frac{pt}{q_1},$$

which splits the fraction into one piece for each coprime factor. Repeating this separates the denominator into
prime powers $(x - a)^k$ or $(x^2 + bx + c)^k$. A fraction $\frac{r}{(x - a)^k}$ is then split further by writing
$r$ in powers of $x - a$ (repeated division by $x - a$), and similarly for quadratics. Finally the polynomial parts
that appear must add up to zero, because the original fraction was proper. Uniqueness follows by subtracting two
decompositions and examining the highest power of each factor. Full proofs are in algebra texts, often in the
section on polynomial rings over a field. $\square$

### Try it in Python

SymPy (a free computer algebra library, not part of standard Python) does partial fractions with `apart`:

```python
from sympy import symbols, apart
x = symbols('x')
print(apart((2*x**2 + 3) / ((x - 1)*(x + 1)**2)))
# 3/(4*(x + 1)) - 5/(2*(x + 1)**2) + 5/(4*(x - 1))
```

## A short history thread

Euclid's *Elements* (around 300 BCE), Book II, proves facts such as $(a + b)^2 = a^2 + 2ab + b^2$ as statements about
squares and rectangles, like the pictures in this chapter; historians debate how far it is fair to call this
"algebra". The Baghdad mathematician al-Karaji (around 1000 CE) treated polynomials arithmetically, adding and
multiplying expressions with powers of the unknown, and used the triangle of binomial coefficients; the same
triangle appears in China with Jia Xian (eleventh century) and Yang Hui (1261), and in Europe long before Blaise
Pascal's treatise on it (written in 1654), though Pascal's systematic study is why it carries his name in the West.
Partial fractions were introduced by Leibniz and Johann Bernoulli in the early 1700s to integrate rational
functions.

## Check yourself

??? question "1. Expand $(x^2 - 3x + 2)(x^2 + x - 1)$."

    Grid or term by term: $x^4 + x^3 - x^2 - 3x^3 - 3x^2 + 3x + 2x^2 + 2x - 2 = x^4 - 2x^3 - 2x^2 + 5x - 2$. Check at
    $x = 1$: $(0)(1) = 0$ and $1 - 2 - 2 + 5 - 2 = 0$. ✓

??? question "2. Find the degree and leading coefficient of $(2x^3 - x + 1)^4(3 - x^2)^3$ without expanding."

    Degrees add: $4 \cdot 3 + 3 \cdot 2 = 18$. Leading coefficients multiply: $2^4 \cdot (-1)^3 = -16$.

??? question "3. Factor $12x^2 - 7x - 10$."

    $ac = -120$; two numbers with product $-120$ and sum $-7$: $-15$ and $8$. So
    $12x^2 - 15x + 8x - 10 = 3x(4x - 5) + 2(4x - 5) = (3x + 2)(4x - 5)$.

??? question "4. Factor $x^6 - 64$ completely over the integers."

    As a difference of squares: $(x^3 - 8)(x^3 + 8)$. Then as cubes:
    $(x - 2)(x^2 + 2x + 4)(x + 2)(x^2 - 2x + 4)$. The two quadratics have negative discriminant
    ($4 - 16 < 0$), so they are irreducible over the reals.

??? question "5. Solve $x^3 - 3x^2 - 4x + 12 = 0$."

    Group: $x^2(x - 3) - 4(x - 3) = (x - 3)(x - 2)(x + 2)$. So $x = 3, 2, -2$.

??? question "6. Use synthetic division to divide $3x^4 - 5x^3 + 2x - 7$ by $x - 2$, and check with the remainder theorem."

    Coefficients $3, -5, 0, 2, -7$ (note the 0 for $x^2$). Bring down 3; $6 - 5 = 1$; $2 + 0 = 2$; $4 + 2 = 6$;
    $12 - 7 = 5$. Quotient $3x^3 + x^2 + 2x + 6$, remainder 5. Check: $f(2) = 48 - 40 + 0 + 4 - 7 = 5$. ✓

??? question "7. Find $k$ so that $x - 1$ is a factor of $x^3 + kx^2 - 4x + 2$."

    By the factor theorem, $f(1) = 1 + k - 4 + 2 = k - 1$ must be 0, so $k = 1$.

??? question "8. Simplify $\frac{x^2 - 5x + 6}{x^2 - 4} \div \frac{x - 3}{x + 2}$."

    $\frac{(x - 2)(x - 3)}{(x - 2)(x + 2)} \cdot \frac{x + 2}{x - 3} = 1$, for $x \neq 2, -2, 3$ (at those values
    the original is undefined).

??? question "9. Solve $\frac{1}{x - 1} + \frac{2}{x + 1} = \frac{4}{x^2 - 1}$."

    Multiply by $(x - 1)(x + 1)$, with $x \neq \pm 1$: $(x + 1) + 2(x - 1) = 4$, so $3x - 1 = 4$, $x = \frac{5}{3}$,
    which is allowed. Check: $\frac{3}{2} + \frac{3}{4} = \frac{9}{4}$, and $\frac{4}{25/9 - 1} = \frac{4}{16/9} = \frac{9}{4}$. ✓

??? question "10. Decompose $\frac{x + 7}{x^2 - x - 6}$ into partial fractions."

    $x^2 - x - 6 = (x - 3)(x + 2)$. Cover-up: at $x = 3$, $\frac{10}{5} = 2$; at $x = -2$, $\frac{5}{-5} = -1$. So
    $\frac{2}{x - 3} - \frac{1}{x + 2}$.

??? question "11. Find $\sum_{n=1}^{N} \frac{1}{n(n + 2)}$, and its value for $N = 10$."

    $\frac{1}{n(n + 2)} = \frac{1}{2}\left(\frac{1}{n} - \frac{1}{n + 2}\right)$. In the sum, each $-\frac{1}{n+2}$
    cancels a later $\frac{1}{n+2}$, leaving the first two positive terms and the last two negative ones:
    $\frac{1}{2}\left(1 + \frac{1}{2} - \frac{1}{N + 1} - \frac{1}{N + 2}\right)$. For $N = 10$:
    $\frac{1}{2}\left(\frac{3}{2} - \frac{1}{11} - \frac{1}{12}\right) = \frac{175}{264}$. As $N$ grows the sum
    approaches $\frac{3}{4}$.

??? question "12. Prove that $n^3 - n$ is divisible by 6 for every whole number $n$."

    $n^3 - n = (n - 1)n(n + 1)$, a product of three consecutive whole numbers. Among any two consecutive numbers one
    is even, and among any three consecutive numbers one is a multiple of 3. So the product is divisible by 2 and
    by 3, hence by 6.

## What you learned

- A polynomial is a finite sum of whole-number powers of $x$ times coefficients; its degree is the highest power
  present.
- Polynomials add, subtract and multiply like integers, and the degree of a product is the sum of the degrees.
- Special products, especially $a^2 - b^2$, $a^3 \pm b^3$ and the telescoping $a^n - b^n$, are worth knowing in
  both directions.
- Factoring turns equations and inequalities into simpler ones by the zero product property; whether a polynomial
  is irreducible depends on the number system.
- The division algorithm $f = qg + r$ with $\deg r < \deg g$ exists and is unique; dividing by $x - c$ leaves
  remainder $f(c)$, so $f(c) = 0$ exactly when $x - c$ is a factor.
- Rational expressions follow the rules of fractions: factor first, cancel only factors, and check excluded values.
- Every proper rational expression splits uniquely into partial fractions, one for each power of each factor.

**Next:** [Chapter 5](05-Quadratics.md), the quadratic equation in full: completing the square, the formula and its
proof, and the parabola.

## Further reading

- I. M. Gelfand and A. Shen, *Algebra*, Birkhäuser, 1993. Its chapters on polynomials, division and factoring are
  short and excellent.
- E. J. Barbeau, *Polynomials*, Springer (Problem Books in Mathematics), 1989. Hundreds of problems, from easy to
  research-flavoured.
- H. S. Hall and S. R. Knight, *Higher Algebra*, 1887. Classic chapters on identities and partial fractions.
- Michael Spivak, *Calculus*, 4th edition, Publish or Perish, 2008. The chapter on integration in elementary terms
  treats partial fractions carefully.
- Victor J. Katz, *A History of Mathematics: An Introduction*, 3rd edition, 2009, for al-Karaji and the history of
  the binomial triangle.
- On this site: the Topics lessons [Polynomial functions](../../topics/algebra/level-8/01-polynomial-functions.md),
  [Polynomial inequalities](../../topics/algebra/level-8/02-polynomial-inequalities.md) and
  [Rational functions](../../topics/algebra/level-8/03-rational-functions.md); the U of T guides
  [MAT240H1 Unit 9: Polynomials, UFD and Resultants](../../uoft/MAT240H1/unit09.md) and
  [MAT137 Unit 9: Integration Methods](../../uoft/MAT137/unit09.md) (partial fractions in calculus).
