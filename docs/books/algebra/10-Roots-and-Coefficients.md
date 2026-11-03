# 10. Roots and coefficients

*A polynomial can be described in two ways: by its coefficients, the numbers you write down, or by its roots, the
numbers that make it zero. The coefficients are easy to see and the roots are what we want. This chapter is about the
bridge between the two. You will prove that a root is the same thing as a factor, that a polynomial of degree $n$ has
at most $n$ roots, and that a few simple formulas, Vieta's, turn the roots into the coefficients. Then you will go
further than school: every symmetric expression in the roots can be computed from the coefficients without knowing a
single root, sums of powers of the roots obey Newton's identities, the signs of the coefficients limit how many
positive roots there can be, and any $n+1$ points lie on exactly one polynomial of degree at most $n$.*

!!! abstract "In this chapter"
    **You will learn:**

    - why $p(a)$ is the remainder when $p(x)$ is divided by $x-a$, and why a root gives a factor
    - why a polynomial of degree $n$ has at most $n$ roots, and where that fails
    - how to find every rational root of a polynomial with integer coefficients
    - Vieta's formulas, linking the roots to the coefficients, and how to use them without solving
    - the fundamental theorem on symmetric polynomials, with the algorithm that proves it
    - Newton's identities for sums of powers of the roots
    - how to bound the roots, Descartes' rule of signs, and Lagrange interpolation

    **You need:** [Chapter 4](04-Polynomials-and-Factoring.md) (polynomial arithmetic and long division),
    [Chapter 5](05-Quadratics.md) (sum and product of the roots of a quadratic),
    [Chapter 8](08-Sequences-Series-and-Induction.md) (proof by induction) and, for a few remarks,
    [Chapter 9](09-Complex-Numbers.md). The gentler versions are the Topics lessons
    [Polynomials](../../topics/algebra/level-6/02-polynomials.md) and
    [Polynomial functions](../../topics/algebra/level-8/01-polynomial-functions.md).

    **Levels:** 10.1 to 10.4 are intermediate; 10.5 to 10.8 are advanced.

## 10.1 The remainder and factor theorems

Here is a question that looks like a long calculation. What is the remainder when
$p(x)=2x^3-3x^2+4x-5$ is divided by $x-2$?

You could do the long division of [Chapter 4](04-Polynomials-and-Factoring.md). Here it is in the short form called
**synthetic division**: write the coefficients $2,-3,4,-5$, bring down the first one, and repeatedly multiply by $2$
and add to the next coefficient.

| | $2$ | $-3$ | $4$ | $-5$ |
|---|---|---|---|---|
| multiply by 2 and add | | $4$ | $2$ | $12$ |
| result | $2$ | $1$ | $6$ | $7$ |

The last number, $7$, is the remainder, and the others are the quotient: $2x^3-3x^2+4x-5=(x-2)(2x^2+x+6)+7$.

Now simply put $x=2$ into $p$: $p(2)=16-12+8-5=7$. The same number. That is not luck.

**Theorem (remainder theorem).** Let $p(x)$ be a polynomial and $a$ a number. The remainder when $p(x)$ is divided by
$x-a$ is $p(a)$.

*Proof.* Long division of $p(x)$ by $x-a$ gives a quotient $q(x)$ and a remainder $r(x)$ of degree less than the
degree of $x-a$, which is $1$. So the remainder is a constant $r$, and

$$p(x)=(x-a)\,q(x)+r.$$

This is an identity: it holds for every $x$. Put $x=a$. The first term becomes $0\cdot q(a)=0$, so $p(a)=r$. $\square$

There is a second proof that does not use division at all, and it shows *why* the factor appears. For every power,

$$x^k-a^k=(x-a)\left(x^{k-1}+x^{k-2}a+\cdots+xa^{k-2}+a^{k-1}\right),$$

which you can check by multiplying out: all the middle terms cancel in pairs. Now write
$p(x)=c_nx^n+\cdots+c_1x+c_0$ and subtract $p(a)=c_na^n+\cdots+c_1a+c_0$:

$$p(x)-p(a)=c_n(x^n-a^n)+\cdots+c_1(x-a).$$

Every bracket on the right has the factor $x-a$, so $p(x)-p(a)=(x-a)q(x)$ for some polynomial $q$.

A **root** (or **zero**) of $p$ is a number $a$ with $p(a)=0$. The remainder theorem with $r=0$ gives the most used
fact in this chapter.

**Theorem (factor theorem).** $a$ is a root of $p(x)$ if and only if $x-a$ is a factor of $p(x)$, that is,
$p(x)=(x-a)q(x)$ for some polynomial $q(x)$.

*Proof.* If $p(a)=0$, the remainder is $0$, so $p(x)=(x-a)q(x)$. Conversely, if $p(x)=(x-a)q(x)$, then
$p(a)=0\cdot q(a)=0$. $\square$

**Example 1.** Factor $p(x)=x^3-6x^2+11x-6$.

Try small numbers: $p(1)=1-6+11-6=0$. So $x-1$ is a factor. Synthetic division by $1$ on $1,-6,11,-6$ gives
$1,-5,6$ and remainder $0$, so $p(x)=(x-1)(x^2-5x+6)=(x-1)(x-2)(x-3)$.

Check: $p(2)=8-24+22-6=0$ and $p(3)=27-54+33-6=0$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 230" role="img" aria-label="Graph of y equals (x minus 1)(x minus 2)(x minus 3) for x from about 0.4 to 3.6. The curve rises from below the axis, crosses it at x equals 1, turns down, crosses at x equals 2, turns up and crosses at x equals 3. Each crossing is marked with a dot.">
  <line x1="30" y1="110" x2="395" y2="110" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="400,110 392,106 392,114" fill="currentColor"/>
  <text x="402" y="128" font-size="13" fill="currentColor">x</text>
  <path d="M45.3,207.8 L53.5,187.4 L61.8,169.4 L70.0,153.6 L78.2,140.0 L86.5,128.4 L94.7,118.7 L103.0,110.7 L111.2,104.3 L119.4,99.5 L127.7,96.1 L135.9,93.9 L144.1,92.8 L152.4,92.8 L160.6,93.6 L168.8,95.2 L177.1,97.4 L185.3,100.1 L193.5,103.2 L201.8,106.5 L210.0,110.0 L218.2,113.5 L226.5,116.8 L234.7,119.9 L242.9,122.6 L251.2,124.8 L259.4,126.4 L267.6,127.2 L275.9,127.2 L284.1,126.1 L292.3,123.9 L300.6,120.5 L308.8,115.7 L317.0,109.3 L325.3,101.3 L333.5,91.6 L341.8,80.0 L350.0,66.4 L358.2,50.6 L366.5,32.6 L374.7,12.2" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="103.75" cy="110" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="210" cy="110" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="316.25" cy="110" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="103.75" y="132" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="210" y="134" font-size="13" text-anchor="middle" fill="currentColor">2</text>
  <text x="316.25" y="96" font-size="13" text-anchor="middle" fill="currentColor">3</text>
  <text x="150" y="224" font-size="13" text-anchor="middle" fill="currentColor">p(x) = (x − 1)(x − 2)(x − 3)</text>
</svg>
</div>

Three roots, three factors, and the graph crosses the axis exactly three times. The next section shows that a cubic
can never have more.

**Example 2.** For which $k$ is $x+1$ a factor of $x^4+kx^3-3x+2$?

$x+1=x-(-1)$, so we need $p(-1)=0$: $1-k+3+2=0$, so $k=6$. Check: with $k=6$, $p(-1)=1-6+3+2=0$.

**Example 3.** What is the remainder when $x^{50}-3x^{17}+2$ is divided by $x-1$? It is $p(1)=1-3+2=0$; so $x-1$
divides it, without doing a division of a degree-50 polynomial.

A word on where the numbers live. Nothing in the proofs above used anything special about real numbers: only that we
can add, subtract and multiply, with the usual laws. So the theorems hold for polynomials with rational, real or
complex coefficients, and even for polynomials whose coefficients are integers mod $n$. The next section is where that
starts to matter.

## 10.2 At most $n$ roots

A line meets the $x$-axis at most once, a parabola at most twice. Is it true that a polynomial of degree $n$ has at most
$n$ roots? The answer is yes, for real or complex numbers, and the reason is worth seeing carefully because it uses a
property you have used all your life without naming it.

**Theorem.** A nonzero polynomial of degree $n$ with real (or rational, or complex) coefficients has at most $n$
different roots.

*Proof.* By induction on $n$. A polynomial of degree $0$ is a nonzero constant and has no roots. Suppose the statement
holds for degree $n-1$, and let $p$ have degree $n\ge 1$. If $p$ has no roots, we are done. Otherwise let $a$ be a
root. By the factor theorem $p(x)=(x-a)q(x)$, and comparing leading terms, $q$ has degree $n-1$. Now let $b$ be any
other root, $b\ne a$. Then

$$0=p(b)=(b-a)\,q(b).$$

A product of two numbers is zero only if one of them is zero. Since $b-a\ne 0$, we get $q(b)=0$. So every root of $p$
other than $a$ is a root of $q$, and $q$ has at most $n-1$ of them by the induction hypothesis. Adding $a$, $p$ has
at most $n$ roots. $\square$

The step in the middle, "a product is zero only if a factor is zero", is the property. It holds in the rational, real
and complex numbers, and in the integers mod a prime. A number system where it holds is called an
**integral domain**; [Chapter 17](17-Rings-and-Ideals.md) studies them. Where it fails, the theorem fails too.

**Example 4 (where it fails).** Work with integers mod $8$. The polynomial $x^2-1$ has degree $2$, but

$$1^2=1,\quad 3^2=9\equiv 1,\quad 5^2=25\equiv 1,\quad 7^2=49\equiv 1 \pmod 8.$$

Four roots: $1,3,5,7$. The proof breaks because $(3-1)(3+1)=2\cdot 4=8\equiv 0$, a product of two nonzero numbers that
is zero.

The theorem has a consequence that is used constantly, often without comment.

**Corollary (identity theorem).** If two polynomials $p$ and $q$ of degree at most $n$ take the same value at $n+1$
different numbers, then they are the same polynomial (same coefficients).

*Proof.* The difference $p-q$ has degree at most $n$ and has $n+1$ roots. If it were nonzero, that would contradict
the theorem. So $p-q$ is the zero polynomial. $\square$

In particular, if a polynomial is zero for infinitely many numbers, every one of its coefficients is zero. This is
what lets you "compare coefficients": if $ax^2+bx+c=2x^2-x+5$ for all $x$, then $a=2$, $b=-1$, $c=5$.

**Multiplicity.** In $(x-1)^2(x+4)$ the root $1$ appears twice. We say a root $a$ has **multiplicity** $m$ if
$(x-a)^m$ divides $p$ but $(x-a)^{m+1}$ does not. The same induction shows a stronger statement: *the multiplicities of
the roots of a nonzero polynomial of degree $n$ add up to at most $n$.* Whether they add up to exactly $n$ depends on
where you look for roots. Over the real numbers, $x^2+1$ has none. Over the complex numbers, every polynomial of degree
$n$ has exactly $n$ roots counted with multiplicity; that is the fundamental theorem of algebra, the subject of
[Chapter 12](12-The-Fundamental-Theorem-of-Algebra.md). In this chapter, whenever we speak of "the $n$ roots" we take
them in the complex numbers, counted with multiplicity, and you may take their existence on trust until Chapter 12.

## 10.3 The rational root theorem

Example 1 began with "try small numbers". For polynomials with integer coefficients, there is a short list of the only
rational numbers worth trying.

**Theorem (rational root theorem).** Let $p(x)=a_nx^n+\cdots+a_1x+a_0$ have integer coefficients with $a_n\ne 0$ and
$a_0\ne 0$. If $r/s$ is a root, written in lowest terms ($r,s$ integers with no common factor, $s>0$), then $r$
divides $a_0$ and $s$ divides $a_n$.

*Proof.* Put $x=r/s$ in $p(x)=0$ and multiply by $s^n$:

$$a_nr^n+a_{n-1}r^{n-1}s+\cdots+a_1rs^{n-1}+a_0s^n=0.$$

Every term except the last has a factor $r$, so $r$ divides $a_0s^n$. Since $r$ and $s$ share no prime factor, $r$
shares none with $s^n$, so $r$ divides $a_0$ (this is Euclid's lemma: if a prime divides a product, it divides one of
the factors). Likewise every term except the first has a factor $s$, so $s$ divides $a_nr^n$, and therefore $s$
divides $a_n$. $\square$

**Example 5.** Find all rational roots of $p(x)=2x^3-3x^2-11x+6$.

The candidates are $\pm r/s$ with $r\mid 6$ and $s\mid 2$:

$$\pm1,\ \pm2,\ \pm3,\ \pm6,\ \pm\tfrac12,\ \pm\tfrac32.$$

Test: $p(1)=-6$, $p(-1)=12$, $p(2)=-12$, $p(3)=54-27-33+6=0$. So $x-3$ is a factor. Synthetic division by $3$ on
$2,-3,-11,6$ gives $2,3,-2$ with remainder $0$:

$$p(x)=(x-3)(2x^2+3x-2)=(x-3)(2x-1)(x+2).$$

The roots are $3$, $\tfrac12$ and $-2$, all on the list. Check: $p(\tfrac12)=\tfrac14-\tfrac34-\tfrac{11}{2}+6=0$.

**Example 6 (irrationality for free).** The roots of $x^2-2$ are $\pm\sqrt2$. The only rational candidates are
$\pm1,\pm2$, and none of them squares to $2$. So $\sqrt2$ is irrational. The same argument shows that
$\sqrt[n]{m}$ is irrational unless $m$ is a perfect $n$-th power: a rational root of $x^n-m$ has denominator dividing
$1$, so it would be an integer.

A **monic** polynomial is one whose leading coefficient is $1$. The theorem says: *a rational root of a monic
polynomial with integer coefficients is an integer.* Numbers that are roots of monic integer polynomials are called
**algebraic integers**, and this little fact is the first theorem of algebraic number theory
([Chapter 22](22-Where-Algebra-Goes.md)).

The rational root theorem finds rational roots only. Most polynomials have none: $x^3-2x^2+3x-4$ has candidates
$\pm1,\pm2,\pm4$, none of which works, and yet it has a real root near $1.65$. For roots like that we need either
formulas ([Chapter 11](11-Cubics-and-Quartics.md)) or numerical methods ([Chapter 12](12-The-Fundamental-Theorem-of-Algebra.md)).
Remarkably, a lot can be said about the roots without finding them, and that is the rest of this chapter.

## 10.4 Vieta's formulas

In [Chapter 5](05-Quadratics.md) you met a pleasant fact: if $x^2+bx+c$ has roots $r$ and $s$, then $r+s=-b$ and
$rs=c$. The proof was one line: $(x-r)(x-s)=x^2-(r+s)x+rs$, and compare coefficients. Exactly the same idea works in
every degree.

Multiply out a cubic with roots $r_1,r_2,r_3$:

$$(x-r_1)(x-r_2)(x-r_3)=x^3-(r_1+r_2+r_3)x^2+(r_1r_2+r_1r_3+r_2r_3)x-r_1r_2r_3.$$

Each coefficient comes from choosing, in each bracket, either the $x$ or the $-r_i$. To get $x^2$ you choose the
$-r_i$ from one bracket; to get $x$ you choose it from two brackets; to get the constant, from all three.

In degree $n$ the same choice gives the general rule. Define the **elementary symmetric polynomials** in
$r_1,\dots,r_n$:

$$e_1=\sum_i r_i,\qquad e_2=\sum_{i<j}r_ir_j,\qquad e_3=\sum_{i<j<k}r_ir_jr_k,\qquad\dots,\qquad e_n=r_1r_2\cdots r_n.$$

In words, $e_k$ is the sum of all products of $k$ different roots. There are $\binom nk$ terms in $e_k$.

**Theorem (Vieta's formulas).**

$$(x-r_1)(x-r_2)\cdots(x-r_n)=x^n-e_1x^{n-1}+e_2x^{n-2}-\cdots+(-1)^ne_n.$$

So if $p(x)=a_nx^n+a_{n-1}x^{n-1}+\cdots+a_0$ has roots $r_1,\dots,r_n$ (counted with multiplicity), then

$$e_k=(-1)^k\,\frac{a_{n-k}}{a_n}\qquad(k=1,\dots,n).$$

*Proof.* Expanding the product, each term comes from choosing either $x$ or $-r_i$ in each of the $n$ brackets. The
terms with $x^{n-k}$ come from choosing $-r_i$ in exactly $k$ brackets, say $i_1<\dots<i_k$, and $x$ in the others;
such a term is $(-1)^kr_{i_1}\cdots r_{i_k}x^{n-k}$. Adding over all choices of $k$ brackets gives $(-1)^ke_kx^{n-k}$.
For the second statement, a polynomial with roots $r_1,\dots,r_n$ (all of its roots, with multiplicity) is
$p(x)=a_n(x-r_1)\cdots(x-r_n)$ by repeated use of the factor theorem; compare coefficients. $\square$

The formulas are named for François Viète (1540-1603), who stated cases of them for positive roots. Albert Girard
stated the general relations in 1629, in *Invention nouvelle en l'algèbre*, with all roots allowed, including negative
and "impossible" ones.

**Example 7.** The roots of $x^3-6x^2+11x-6$ are $1,2,3$. Vieta: $e_1=6$, $e_2=11$, $e_3=6$.
Check: $1+2+3=6$; $1\cdot2+1\cdot3+2\cdot3=11$; $1\cdot2\cdot3=6$.

**Example 8 (using roots you do not know).** Let $r,s,t$ be the roots of $x^3-2x^2+3x-4$. Find $r^2+s^2+t^2$.

Here $e_1=2$, $e_2=3$, $e_3=4$. Squaring $e_1$ gives every square once and every product $r s$ twice:

$$(r+s+t)^2=r^2+s^2+t^2+2(rs+rt+st),$$

so $r^2+s^2+t^2=e_1^2-2e_2=4-6=-2$.

A sum of squares that is negative! If all three roots were real, their squares would be at least $0$. So the roots
cannot all be real. We learned that without finding a single root. (The roots are about $1.6506$ and
$0.1747\pm1.5469i$; check: $1.6506^2+2\,\mathrm{Re}\big((0.1747+1.5469i)^2\big)\approx 2.7245+2(0.0305-2.3929)=-2.000$.)

**Example 9 (a new polynomial from an old one).** With $r,s,t$ as in Example 8, find a cubic whose roots are
$r^2,s^2,t^2$.

We need the elementary symmetric polynomials of the squares.
The first is $r^2+s^2+t^2=-2$. The second is $r^2s^2+r^2t^2+s^2t^2$; square $e_2$:

$$(rs+rt+st)^2=r^2s^2+r^2t^2+s^2t^2+2(r^2st+rs^2t+rst^2)=\left(r^2s^2+r^2t^2+s^2t^2\right)+2e_3e_1,$$

so $r^2s^2+r^2t^2+s^2t^2=e_2^2-2e_1e_3=9-16=-7$. The third is $r^2s^2t^2=e_3^2=16$. By Vieta, the cubic is

$$x^3-(-2)x^2+(-7)x-16=x^3+2x^2-7x-16.$$

**Example 10.** The roots of $x^2-5x+3$ are $r$ and $s$. Then $\dfrac1r+\dfrac1s=\dfrac{r+s}{rs}=\dfrac53$.

In all these examples the quantity we wanted had a special feature: it did not change if the roots were renamed. That
is the key to the next section.

## 10.5 Symmetric polynomials

*Level: advanced.*

A polynomial $f(x_1,\dots,x_n)$ in several variables is **symmetric** if it stays the same when the variables are
permuted in any way. For example, with three variables, $x^2+y^2+z^2$ is symmetric, $xyz$ is symmetric, but $x^2y$ is
not (swapping $x$ and $y$ gives $xy^2$). The elementary symmetric polynomials $e_1,\dots,e_n$ are symmetric, and so is
any polynomial built from them, like $e_1^2-2e_2$. The great theorem says that this is the only way to get a symmetric
polynomial.

**Theorem (fundamental theorem on symmetric polynomials).** Every symmetric polynomial in $x_1,\dots,x_n$ can be written
as a polynomial in $e_1,\dots,e_n$, in exactly one way. If the symmetric polynomial has integer (or rational)
coefficients, so does the expression in the $e_k$.

Why care? Combine it with Vieta. If $f$ is any symmetric polynomial and $r_1,\dots,r_n$ are the roots of
$p(x)=x^n+a_{n-1}x^{n-1}+\cdots+a_0$, then $f(r_1,\dots,r_n)$ can be computed from the coefficients alone, using
$e_k=(-1)^ka_{n-k}$. In particular, *if $p$ has rational coefficients, every symmetric polynomial expression in its
roots is a rational number,* even when the roots themselves are wild irrational or complex numbers. This is the fact
behind the discriminant ([Chapter 11](11-Cubics-and-Quartics.md)), behind the resolvents of Lagrange, and, in the end,
behind Galois theory ([Chapter 20](20-Galois-Theory.md)).

### The algorithm

The proof is an algorithm, and it is easiest to see it run before reading it.

To compare monomials we use **lexicographic order**, the order of a dictionary: $x_1^{a_1}\cdots x_n^{a_n}$ comes
before $x_1^{b_1}\cdots x_n^{b_n}$ if, at the first place where the exponents differ, $a_i>b_i$. So $x^3$ comes before
$x^2y^5$ (first exponents $3>2$), and $x^2y$ before $xy^2$. The **leading term** of a polynomial is its first term in
this order.

**Example 11.** Write $f=x^3+y^3+z^3$ in terms of $e_1=x+y+z$, $e_2=xy+yz+zx$, $e_3=xyz$.

*Step 1.* The leading term of $f$ is $x^3$, with exponents $(3,0,0)$. The product $e_1^{3-0}e_2^{0-0}e_3^{0}=e_1^3$
also has leading term $x^3$. Subtract:

$$f-e_1^3=-3\left(x^2y+x^2z+xy^2+xz^2+y^2z+yz^2\right)-6xyz.$$

*Step 2.* The new leading term is $-3x^2y$, exponents $(2,1,0)$. The product $e_1^{2-1}e_2^{1-0}e_3^0=e_1e_2$ has
leading term $x^2y$, and in fact $e_1e_2=(x^2y+x^2z+xy^2+xz^2+y^2z+yz^2)+3xyz$. Add $3e_1e_2$:

$$f-e_1^3+3e_1e_2=-6xyz+9xyz=3xyz.$$

*Step 3.* What is left is $3e_3$. So

$$x^3+y^3+z^3=e_1^3-3e_1e_2+3e_3.$$

Check with $x,y,z=1,2,3$: the left side is $1+8+27=36$; with $e_1=6$, $e_2=11$, $e_3=6$ the right side is
$216-198+18=36$.

### Why it always works

*Proof.* Let $f\ne 0$ be symmetric, with leading term $c\,x_1^{a_1}x_2^{a_2}\cdots x_n^{a_n}$.

*(i) The exponents decrease: $a_1\ge a_2\ge\cdots\ge a_n$.* If $a_i<a_{i+1}$ for some $i$, swap $x_i$ and $x_{i+1}$.
Because $f$ is symmetric, $f$ also contains the swapped monomial, with exponents $a_{i+1}$ in place $i$ and $a_i$ in
place $i+1$; this monomial comes earlier in lexicographic order than the leading term, which is impossible.

*(ii) A product of $e$'s with that leading term.* The leading term of $e_k$ is $x_1x_2\cdots x_k$. The leading term of a
product is the product of the leading terms (lexicographic order respects multiplication). So

$$g=e_1^{a_1-a_2}\,e_2^{a_2-a_3}\cdots e_{n-1}^{a_{n-1}-a_n}\,e_n^{a_n}$$

has leading term $x_1^{(a_1-a_2)+(a_2-a_3)+\cdots+a_n}\,x_2^{(a_2-a_3)+\cdots+a_n}\cdots x_n^{a_n}=x_1^{a_1}\cdots x_n^{a_n}$.
The exponents are all $\ge0$ because of (i). Also $g$ has integer coefficients.

*(iii) Subtract and repeat.* $f-cg$ is symmetric, and its leading term comes strictly later than that of $f$. All the
monomials that appear have total degree at most $\deg f$, and there are only finitely many such monomials, so after
finitely many steps we reach $0$. Adding up the subtracted pieces writes $f$ as a polynomial in the $e_k$. Each step
subtracts an integer multiple of a product of $e$'s, so integer coefficients stay integers.

*(iv) Uniqueness.* Suppose some nonzero polynomial $Q$ in the $e$'s became the zero polynomial when the $e$'s are
written out in $x$'s. Each monomial $e_1^{b_1}\cdots e_n^{b_n}$ in $Q$ has leading term
$x_1^{b_1+\cdots+b_n}x_2^{b_2+\cdots+b_n}\cdots x_n^{b_n}$, and different $(b_1,\dots,b_n)$ give different exponents
here (you can recover $b_n$, then $b_{n-1}$, and so on, by subtracting). So among the monomials of $Q$ there is one
whose leading term comes first, and nothing else in $Q$ can cancel it. Then $Q$ is not zero after all. So the
expression is unique. $\square$

Gauss used this argument in his second proof of the fundamental theorem of algebra, in 1816; the theorem itself was
known and used earlier (Newton and Waring among others), but the clean lexicographic proof is the one that has stuck.

**Example 12.** Write $x^2y+x^2z+xy^2+xz^2+y^2z+yz^2$ in terms of the $e_k$. The leading term is $x^2y$, exponents
$(2,1,0)$, so start with $e_1e_2$. From Example 11, $e_1e_2$ is our polynomial plus $3xyz$, so the answer is
$e_1e_2-3e_3$.

**The discriminant, a first look.** For a quadratic with roots $r,s$, the quantity $(r-s)^2$ is symmetric (swapping
$r,s$ does not change it). So it is a polynomial in $e_1,e_2$: $(r-s)^2=(r+s)^2-4rs=e_1^2-4e_2$. For
$x^2+bx+c$ that is $b^2-4c$, the discriminant of [Chapter 5](05-Quadratics.md). In
[Chapter 11](11-Cubics-and-Quartics.md) the same idea gives the discriminant of a cubic: the product of the squared
differences of the roots, which is symmetric and so is a polynomial in the coefficients.

## 10.6 Newton's identities

*Level: advanced.*

The **power sums** of $r_1,\dots,r_n$ are

$$p_k=r_1^k+r_2^k+\cdots+r_n^k\qquad(k=0,1,2,\dots),$$

with $p_0=n$. They are symmetric, so by the theorem they are polynomials in the $e$'s. Newton found a recursive way to
compute them that is much quicker than running the algorithm each time.

**Theorem (Newton's identities).** With $e_0=1$ and $e_j=0$ for $j>n$, for every $k\ge1$:

$$p_k-e_1p_{k-1}+e_2p_{k-2}-\cdots+(-1)^{k-1}e_{k-1}p_1+(-1)^k\,k\,e_k=0.$$

Written out for small $k$:

$$\begin{aligned}
p_1&=e_1,\\
p_2&=e_1p_1-2e_2,\\
p_3&=e_1p_2-e_2p_1+3e_3,\\
p_4&=e_1p_3-e_2p_2+e_3p_1-4e_4.
\end{aligned}$$

For $k>n$ the last term vanishes and only the last $n$ power sums appear:
$p_k=e_1p_{k-1}-e_2p_{k-2}+\cdots+(-1)^{n-1}e_np_{k-n}$.

*Proof for $k\ge n$.* Each root satisfies its polynomial: $r_i^n-e_1r_i^{n-1}+\cdots+(-1)^ne_n=0$. Multiply by
$r_i^{k-n}$ and add over $i$:

$$p_k-e_1p_{k-1}+\cdots+(-1)^ne_np_{k-n}=0.$$

When $k=n$ the last term is $(-1)^ne_np_0=(-1)^nne_n$, which is the identity as stated. $\square$

*Proof for all $k$.* Use a generating function, a polynomial (or power series) in a new variable $t$ whose coefficients
are the quantities we care about. Let

$$E(t)=(1-r_1t)(1-r_2t)\cdots(1-r_nt)=\sum_{j=0}^{n}(-1)^je_jt^j,$$

by the same expansion as Vieta's formulas. Take the derivative with the product rule and divide by $E(t)$:

$$\frac{E'(t)}{E(t)}=\sum_{i=1}^n\frac{-r_i}{1-r_it}.$$

Expand each fraction as a geometric series ([Chapter 8](08-Sequences-Series-and-Induction.md)),
$\dfrac{r_i}{1-r_it}=r_i+r_i^2t+r_i^3t^2+\cdots$, as formal power series (we only compare coefficients, so no question
of convergence arises). Adding over $i$:

$$-t\,\frac{E'(t)}{E(t)}=\sum_{k\ge1}p_kt^k,\qquad\text{so}\qquad -t\,E'(t)=E(t)\sum_{k\ge1}p_kt^k.$$

The coefficient of $t^k$ on the left is $-k(-1)^ke_k$. On the right it is $\sum_{j=0}^{k-1}(-1)^je_jp_{k-j}$.
Setting them equal and moving everything to one side gives exactly Newton's identity. $\square$

**Example 13.** Let $r,s,t$ be the roots of $x^3-2x^2+3x-4$, so $e_1=2$, $e_2=3$, $e_3=4$. Then

$$\begin{aligned}
p_1&=2,\\
p_2&=2\cdot2-2\cdot3=-2,\\
p_3&=2\cdot(-2)-3\cdot2+3\cdot4=2,\\
p_4&=2\cdot2-3\cdot(-2)+4\cdot2=18,\\
p_5&=2\cdot18-3\cdot2+4\cdot(-2)=22.
\end{aligned}$$

$p_2=-2$ agrees with Example 8. For $p_4$ and $p_5$ we used the $k>n$ form (no $e_4$).

**Example 14 (going backwards).** Newton's identities also run the other way: from the power sums you can recover the
$e$'s, and hence the polynomial. Suppose $a+b+c=1$, $a^2+b^2+c^2=2$, $a^3+b^3+c^3=3$. What is $a^4+b^4+c^4$?

From $p_1=e_1$: $e_1=1$. From $p_2=e_1p_1-2e_2$: $2=1-2e_2$, so $e_2=-\tfrac12$. From $p_3=e_1p_2-e_2p_1+3e_3$:
$3=2+\tfrac12+3e_3$, so $e_3=\tfrac16$. Then

$$p_4=e_1p_3-e_2p_2+e_3p_1=3+1+\tfrac16=\tfrac{25}{6}.$$

(Going backwards divides by $k$, so it needs fractions; over the integers mod a small prime it can fail.)

**Try it in Python.** The recursion is a few lines, using exact fractions:

```python
from fractions import Fraction

def power_sums(e, kmax):
    """e = [e1, e2, ..., en]; returns [p1, ..., p_kmax] by Newton's identities."""
    n = len(e)
    E = [1] + list(e)              # E[0] = 1
    p = [n]                        # p[0] = n
    for k in range(1, kmax + 1):
        s = sum((-1) ** (j - 1) * E[j] * p[k - j] for j in range(1, min(k - 1, n) + 1))
        if k <= n:
            s += (-1) ** (k - 1) * k * E[k]
        p.append(Fraction(s))
    return p[1:]

print(*power_sums([2, 3, 4], 5))   # x^3 - 2x^2 + 3x - 4: prints 2 -2 2 18 22
```

## 10.7 Where the roots are: bounds and signs

*Level: advanced.*

Before hunting for roots it helps to know where to look. Two classical tools give quick information from the
coefficients alone.

### A bound on the size of the roots

**Theorem (Cauchy's bound).** Let $p(z)=a_nz^n+\cdots+a_0$ with $a_n\ne0$, and let
$M=\max_{i<n}|a_i/a_n|$. Every complex root $z$ of $p$ satisfies $|z|\le 1+M$.

*Proof.* Suppose $|z|>1+M$; we show $p(z)\ne0$. Then $|z|>1$ and, by the triangle inequality and the geometric sum,

$$\left|a_{n-1}z^{n-1}+\cdots+a_0\right|\le M|a_n|\left(|z|^{n-1}+\cdots+1\right)=M|a_n|\,\frac{|z|^n-1}{|z|-1}<M|a_n|\,\frac{|z|^n}{|z|-1}.$$

Since $|z|-1>M$, the right side is less than $|a_n||z|^n=|a_nz^n|$. So the leading term is bigger in size than all
the others together, and they cannot cancel it: $p(z)\ne0$. $\square$

**Example 15.** For $x^3-6x^2+11x-6$, $M=11$, so every root has $|z|\le12$. The roots $1,2,3$ are well inside; the bound
is crude but costs nothing. For $x^4-3x^3+2x-10$, $M=10$ and the roots lie in $|z|\le11$; they are in fact about
$-1.43$, $3.12$ and $0.65\pm1.35i$.

### Descartes' rule of signs

Write the nonzero coefficients of a real polynomial in order and count the **sign changes**, the places where a plus is
followed by a minus or the reverse. For $x^4-x^3-7x^2+x+6$ the signs are $+\,-\,-\,+\,+$, with $2$ changes.

**Theorem (Descartes' rule of signs, 1637).** Let $p$ be a real polynomial, $V$ the number of sign changes in its
coefficients and $Z$ the number of its positive roots counted with multiplicity. Then $Z\le V$, and $V-Z$ is even.

So $2$ sign changes means $2$ or $0$ positive roots; $1$ sign change means exactly $1$. For negative roots, apply the
rule to $p(-x)$.

**Example 16.** $p(x)=x^4-x^3-7x^2+x+6$ has $2$ sign changes, so $2$ or $0$ positive roots.
$p(-x)=x^4+x^3-7x^2-x+6$ has signs $+\,+\,-\,-\,+$, also $2$ changes, so $2$ or $0$ negative roots. In fact
$p(x)=(x-1)(x-3)(x+1)(x+2)$: two of each, the maximum the rule allows.

**Example 17.** $p(x)=x^5+2x^3+x-7$ has signs $+\,+\,+\,-$: one change, so exactly one positive root.
$p(-x)=-x^5-2x^3-x-7$ has no sign change, so no negative root. And $p(0)=-7\ne0$. So four of the five complex roots are
not real. (Numerically: one real root near $1.193$ and two conjugate pairs.)

*Proof.* We may assume $p(0)\ne0$: if $p(x)=x^mq(x)$ with $q(0)\ne0$, then $p$ and $q$ have the same positive roots and
the same sign changes. We may also assume the leading coefficient $a_n$ is positive (multiply by $-1$). We use
induction on the degree. Degree $0$: no roots, no changes.

*Parity.* For large $x$, $p(x)>0$ because $a_n>0$. At $x=0$, $p(0)=a_0$. As $x$ runs from $0$ to $\infty$, the sign of
$p$ flips at each root of odd multiplicity and not at roots of even multiplicity. So $Z$ is even exactly when $a_0>0$,
that is, when $a_0$ and $a_n$ have the same sign. And $V$ is even exactly when the first and last signs agree, which is
the same condition. So $Z\equiv V\pmod 2$.

*Comparison with the derivative.* $p'(x)=na_nx^{n-1}+\cdots+2a_2x+a_1$ has the coefficients $a_1,\dots,a_n$, each
multiplied by a positive number, so it has the same signs as $a_1,\dots,a_n$. Its sign changes $V'$ are those of $p$
with the first coefficient $a_0$ dropped, so $V'=V$ or $V'=V-1$.
On the other hand, Rolle's theorem says that between two consecutive distinct positive roots of $p$ there is a root of
$p'$, and a root of $p$ of multiplicity $m$ is a root of $p'$ of multiplicity $m-1$. If $p$ has $d$ distinct positive
roots with multiplicities adding to $Z$, this gives at least $(Z-d)+(d-1)=Z-1$ positive roots of $p'$, counted with
multiplicity. So $Z-1\le Z'$, and by induction $Z'\le V'$. Hence

$$Z\le Z'+1\le V'+1\le V+1.$$

Since $Z$ and $V$ have the same parity, $Z\ne V+1$, so $Z\le V$. And $V-Z$ is even by the parity step. $\square$

(We used Rolle's theorem from calculus: if a differentiable function takes the same value at two points, its derivative
is zero somewhere between. See [MAT137 Unit 5](../../uoft/MAT137/unit05.md).)

## 10.8 Lagrange interpolation

*Level: advanced.*

Turn the question around. Instead of a polynomial and its roots, take some points and ask: *is there a polynomial whose
graph goes through them?* Two points determine a line. Three points (with different $x$'s) determine a parabola, or a
line if they happen to be lined up. In general:

**Theorem (interpolation).** Given $n+1$ points $(x_0,y_0),\dots,(x_n,y_n)$ with all $x_i$ different, there is exactly
one polynomial $P$ of degree at most $n$ with $P(x_i)=y_i$ for every $i$.

*Uniqueness* is the identity theorem of 10.2: two such polynomials agree at $n+1$ points, so they are equal.

*Existence* is a clever construction, published by Lagrange in 1795 (Edward Waring had it in 1779). First build, for
each $i$, a polynomial that is $1$ at $x_i$ and $0$ at every other $x_j$:

$$L_i(x)=\prod_{j\ne i}\frac{x-x_j}{x_i-x_j}.$$

The numerator has a factor $x-x_j$ for each $j\ne i$, so $L_i(x_j)=0$; at $x=x_i$ each fraction is $1$. Each $L_i$ has
degree $n$. Then

$$P(x)=y_0L_0(x)+y_1L_1(x)+\cdots+y_nL_n(x)$$

has degree at most $n$, and at $x_j$ every term vanishes except $y_jL_j(x_j)=y_j$. $\square$

**Example 18.** Find the polynomial of degree at most $2$ through $(0,1)$, $(1,3)$, $(2,7)$.

$$L_0=\frac{(x-1)(x-2)}{(0-1)(0-2)}=\frac{x^2-3x+2}{2},\quad L_1=\frac{x(x-2)}{(1)(-1)}=-(x^2-2x),\quad L_2=\frac{x(x-1)}{(2)(1)}=\frac{x^2-x}{2}.$$

$$P=\tfrac12(x^2-3x+2)-3(x^2-2x)+\tfrac72(x^2-x)=\left(\tfrac12-3+\tfrac72\right)x^2+\left(-\tfrac32+6-\tfrac72\right)x+1=x^2+x+1.$$

Check: $P(0)=1$, $P(1)=3$, $P(2)=7$.

**Try it in Python.**

```python
from fractions import Fraction

def lagrange(points, x):
    """Value at x of the polynomial through the given (xi, yi) points."""
    total = Fraction(0)
    for i, (xi, yi) in enumerate(points):
        term = Fraction(yi)
        for j, (xj, _) in enumerate(points):
            if j != i:
                term *= Fraction(x - xj, xi - xj)
        total += term
    return total

pts = [(0, 1), (1, 3), (2, 7)]
print(*[lagrange(pts, x) for x in range(5)])  # 1 3 7 13 21: the values of x^2 + x + 1
```

**Why this matters beyond school.** Interpolation is the hidden engine of several modern tools.

- *Secret sharing.* Hide a secret number as the constant term of a random polynomial of degree $k-1$ and give each of
  $m$ people one point on its graph. Any $k$ of them can rebuild the polynomial by interpolation and read off the
  secret; any $k-1$ points are consistent with every possible secret. This is Adi Shamir's 1979 scheme; the
  cryptography site works it through in [its chapter on advanced protocols](https://cryptography.akadian.ca/book/23-Advanced-Protocols/).
- *Error-correcting codes.* Send the values of a polynomial at more points than its degree needs. If a few values are
  damaged on the way, the surviving ones still pin the polynomial down, and with more work the damaged ones can even be
  located. These are Reed-Solomon codes (1960); they are part of the standards used for deep-space radio links, the
  kind that carry pictures back from Mars, as well as in QR codes and CDs.
- *Numerical methods.* Many rules for estimating integrals and derivatives are "interpolate, then integrate or
  differentiate the polynomial".

A warning goes with it: interpolating many equally spaced points with one high-degree polynomial can wiggle wildly
between the points (Runge's phenomenon, 1901). Interpolation is exact at the points, not necessarily good between them.

## Check yourself

??? question "1. Find the remainder when $x^{100}+x+1$ is divided by $x+1$."

    By the remainder theorem it is $p(-1)=(-1)^{100}+(-1)+1=1-1+1=1$.

??? question "2. Find $k$ so that $x-2$ is a factor of $x^3+kx^2-4x+12$, then factor the polynomial completely."

    Need $p(2)=8+4k-8+12=0$, so $k=-3$. Then $x^3-3x^2-4x+12=x^2(x-3)-4(x-3)=(x-3)(x^2-4)=(x-3)(x-2)(x+2)$.

??? question "3. Find all rational roots of $3x^3-x^2-12x+4$."

    Candidates $\pm r/s$ with $r\mid4$, $s\mid3$: $\pm1,\pm2,\pm4,\pm\frac13,\pm\frac23,\pm\frac43$. Test: $p(2)=24-4-24+4=0$.
    Dividing by $x-2$ gives $3x^2+5x-2=(3x-1)(x+2)$. The roots are $2$, $-2$ and $\frac13$.

??? question "4. The roots of $x^2-5x+3$ are $r$ and $s$. Find $r^2+s^2$ and $r^3+s^3$ without solving."

    $e_1=5$, $e_2=3$. $r^2+s^2=e_1^2-2e_2=25-6=19$. By Newton, $p_3=e_1p_2-e_2p_1=5\cdot19-3\cdot5=80$.
    Check: the roots are $(5\pm\sqrt{13})/2$, and $r^3+s^3=(r+s)^3-3rs(r+s)=125-45=80$.

??? question "5. Explain why $x^2-1$ has four roots mod 8 although it has degree 2. Which step of the proof in 10.2 fails?"

    The roots are $1,3,5,7$. The proof needs: if $(b-a)q(b)=0$ and $b\ne a$, then $q(b)=0$. Mod 8, with $a=1$, $b=3$:
    $(3-1)(3+1)=2\cdot4=8\equiv0$ although neither factor is $0$. Mod 8 has zero divisors, so it is not an integral domain.

??? question "6. Write $x^2y+x^2z+xy^2+xz^2+y^2z+yz^2$ and $x^2+y^2+z^2$ in terms of $e_1,e_2,e_3$."

    $x^2+y^2+z^2=e_1^2-2e_2$. For the other, $e_1e_2=(x+y+z)(xy+yz+zx)$ contains each $x^2y$-type term once and $xyz$
    three times, so the sum is $e_1e_2-3e_3$. Check with $x,y,z=1,2,3$: the sum is $2+3+4+9+12+18=48$ and
    $6\cdot11-3\cdot6=48$.

??? question "7. The roots of $x^3-3x+1$ are $a,b,c$. Find $a^2+b^2+c^2$, $a^3+b^3+c^3$ and $a^4+b^4+c^4$."

    $e_1=0$, $e_2=-3$, $e_3=-1$. Newton: $p_1=0$; $p_2=e_1p_1-2e_2=6$; $p_3=e_1p_2-e_2p_1+3e_3=-3$;
    $p_4=e_1p_3-e_2p_2+e_3p_1=0+18+0=18$. (Another check on $p_3$: each root has $a^3=3a-1$, so $p_3=3p_1-3=-3$.)

??? question "8. Use Descartes' rule to show that $x^5+2x^3+x-7$ has exactly one real root."

    Signs of $p(x)$: $+\,+\,+\,-$, one change, so exactly one positive root. Signs of $p(-x)=-x^5-2x^3-x-7$: no change, so
    no negative roots. $p(0)=-7\ne0$. So exactly one real root; the other four roots are two pairs of complex conjugates.

??? question "9. Find the polynomial of degree at most 2 through $(1,2)$, $(2,3)$, $(4,11)$."

    $L_0=\frac{(x-2)(x-4)}{(1-2)(1-4)}=\frac{x^2-6x+8}{3}$, $L_1=\frac{(x-1)(x-4)}{(2-1)(2-4)}=-\frac{x^2-5x+4}{2}$,
    $L_2=\frac{(x-1)(x-2)}{(4-1)(4-2)}=\frac{x^2-3x+2}{6}$. Then $P=2L_0+3L_1+11L_2$. The $x^2$ coefficient is
    $\frac23-\frac32+\frac{11}6=1$, the $x$ coefficient $-4+\frac{15}2-\frac{11}2=-2$, the constant $\frac{16}3-6+\frac{11}3=3$.
    So $P=x^2-2x+3$. Check: $P(1)=2$, $P(2)=3$, $P(4)=11$.

??? question "10. A polynomial $p$ with integer coefficients has $p(0)$ and $p(1)$ both odd. Prove that $p$ has no integer root."

    For integers $m$ and $n$, $m-n$ divides $p(m)-p(n)$ (from the identity $x^k-a^k=(x-a)(\cdots)$ in 10.1). So if $m$ is
    even, $p(m)-p(0)$ is even and $p(m)$ is odd; if $m$ is odd, $p(m)-p(1)$ is even and $p(m)$ is odd. An odd number is
    never $0$, so no integer is a root.

??? question "11. If $a+b+c=1$, $a^2+b^2+c^2=2$ and $a^3+b^3+c^3=3$, find $abc$ and $a^4+b^4+c^4$."

    From Example 14: $e_1=1$, $e_2=-\frac12$, $e_3=abc=\frac16$, and $a^4+b^4+c^4=\frac{25}{6}$. As a further step,
    $p_5=e_1p_4-e_2p_3+e_3p_2=\frac{25}6+\frac32+\frac13=6$.

??? question "12. Show that $x^4+x^3+2x^2+1$ has no real roots, by computing the sum of the squares of its roots and then arguing directly."

    $e_1=-1$, $e_2=2$, so $p_2=e_1^2-2e_2=1-4=-3<0$: the roots are not all real, but that alone does not rule out two
    real ones. Argue directly: for $x\ge0$ every term is $\ge0$ and the constant is $1$, so $p(x)\ge1$. For $x<0$ write
    $p(x)=x^2(x^2+x+1)+x^2+1$; since $x^2+x+1=(x+\frac12)^2+\frac34>0$, again $p(x)>0$. So no real roots: all four are
    complex (about $-0.675\pm1.228i$ and $0.175\pm0.692i$).

## What you learned

- $p(a)$ is the remainder of $p(x)$ divided by $x-a$; $a$ is a root exactly when $x-a$ is a factor.
- A nonzero polynomial of degree $n$ has at most $n$ roots wherever "a product is zero only if a factor is zero";
  so two polynomials agreeing at enough points are equal.
- Rational roots of integer polynomials have numerator dividing $a_0$ and denominator dividing $a_n$.
- Vieta: the coefficients are, up to sign, the elementary symmetric polynomials of the roots.
- Every symmetric polynomial is a polynomial in $e_1,\dots,e_n$, so symmetric expressions in the roots are computable
  from the coefficients; Newton's identities do it fast for power sums.
- Cauchy's bound and Descartes' rule locate roots without finding them.
- $n+1$ points with different $x$'s lie on exactly one polynomial of degree at most $n$ (Lagrange).

**Next:** [Chapter 11](11-Cubics-and-Quartics.md), the formulas that solve every cubic and quartic, and why the method
behind them runs out at degree five.

## Further reading

- E. J. Barbeau, *Polynomials*, Springer, 1989. Problems and techniques on everything in this chapter.
- V. V. Prasolov, *Polynomials*, Springer, 2004. Roots, symmetric polynomials, Descartes' rule, interpolation, at a
  higher level.
- J.-P. Tignol, *Galois' Theory of Algebraic Equations*, World Scientific, 2001. The history of the theory of equations,
  from Viète and Girard to Galois, with the mathematics done properly.
- I. G. Macdonald, *Symmetric Functions and Hall Polynomials*, Oxford, 1979 (2nd ed. 1995). The modern theory of
  symmetric polynomials, far beyond this chapter.
- On this site: [Polynomials](../../topics/algebra/level-6/02-polynomials.md),
  [Polynomial functions](../../topics/algebra/level-8/01-polynomial-functions.md) and
  [Polynomial inequalities](../../topics/algebra/level-8/02-polynomial-inequalities.md) on the Topics shelf;
  [MAT240H1 Unit 9: Polynomials, UFD and Resultants](../../uoft/MAT240H1/unit09.md) for the university view;
  the [Algebra book index](index.md).
- Secret sharing by interpolation: [cryptography.akadian.ca, Advanced protocols](https://cryptography.akadian.ca/book/23-Advanced-Protocols/).
