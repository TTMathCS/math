# 12. The fundamental theorem of algebra

*Real numbers are not enough to solve $x^2+1=0$, so we invented $i$. Will we have to invent new numbers again for
$x^3=i$, or for $x^5-4x+2=0$, or for some equation nobody has thought of yet? No: the complex numbers are already
enough, for every polynomial equation there will ever be. This chapter states that theorem, tells how it took two
centuries to prove, and proves it in full by an argument of d'Alembert and Argand. Then it shows a second, more
geometric way to see why it is true, draws its consequences for factoring, and asks what "solving" an equation can mean
once we know that roots exist but, from degree five on, no formula can produce them.*

!!! abstract "In this chapter"
    **You will learn:**

    - what the fundamental theorem of algebra says, in several equivalent forms
    - who tried to prove it and what was wrong with the early proofs
    - a complete proof by the minimum-modulus argument, and exactly where it uses analysis
    - the winding-number picture, which explains the theorem by "counting turns"
    - how every real polynomial factors into real linear and quadratic pieces
    - Newton's method for finding roots numerically, why it is fast, and when it fails
    - what it means to "solve" an equation: by radicals, numerically, or exactly

    **You need:** [Chapter 9](09-Complex-Numbers.md) (the complex plane, modulus, polar form, $n$-th roots) and
    [Chapter 10](10-Roots-and-Coefficients.md) (the factor theorem, at most $n$ roots). A little calculus helps for
    12.3 and 12.6: continuity and derivatives. The gentler version is the Topics lesson
    [The fundamental theorem of algebra](../../topics/numbers/level-8/05-fundamental-theorem.md).

    **Levels:** 12.1, 12.2 and 12.5 are intermediate; 12.3, 12.4 and 12.6 are advanced.

## 12.1 The statement

Every time the number system has grown, it was to solve an equation. Subtraction like $3-5$ led to negative numbers;
$2x=3$ to fractions; $x^2=2$ to irrationals; $x^2=-1$ to complex numbers. It is natural to fear that this goes on
forever. The theorem says it stops.

**Theorem (fundamental theorem of algebra).** Every polynomial of degree $n\ge1$ with complex coefficients has at
least one complex root.

Combined with the factor theorem, one root is enough to get all of them.

**Corollary.** Every polynomial $p(z)=a_nz^n+\cdots+a_0$ of degree $n\ge1$ with complex coefficients factors completely:

$$p(z)=a_n(z-r_1)(z-r_2)\cdots(z-r_n)$$

for some complex numbers $r_1,\dots,r_n$ (not necessarily different). So $p$ has exactly $n$ roots counted with
multiplicity.

*Proof.* By induction on $n$. For $n=1$, $a_1z+a_0=a_1(z-r_1)$ with $r_1=-a_0/a_1$. For $n>1$, the theorem gives a root
$r_1$; the factor theorem gives $p(z)=(z-r_1)q(z)$ with $q$ of degree $n-1$ and the same leading coefficient $a_n$; the
induction hypothesis factors $q$. $\square$

A field in which every nonconstant polynomial has a root is called **algebraically closed**. The theorem says:
*$\mathbb{C}$ is algebraically closed.* The rationals are not ($x^2-2$ has no rational root), nor are the reals
($x^2+1$), nor is any finite field (Exercise 11).

Three remarks before the proof.

1. **The name is old-fashioned.** The theorem is not the foundation of modern algebra, and every proof of it uses some
   analysis: the real numbers' completeness (no gaps) is essential, because the same statement with $\mathbb{Q}$ and
   $\mathbb{Q}(i)$ in place of $\mathbb{R}$ and $\mathbb{C}$ is false. The name comes from a time when "algebra" meant
   the theory of equations, and for that theory it really was fundamental.
2. **It is an existence theorem.** It says roots exist; it does not say how to find them. From degree five on there is
   in general no formula in radicals (Chapters [11](11-Cubics-and-Quartics.md) and [20](20-Galois-Theory.md)), and yet
   the roots are there. Section 12.6 shows how to find them anyway.
3. **Real coefficients are a special case.** A real polynomial is a complex one, so it too has $n$ complex roots. That
   is the form in which people first conjectured the theorem.

## 12.2 A long history

In 1608 Peter Roth, a German arithmetician, wrote that an equation of degree $n$ may have $n$ solutions. In 1629
Albert Girard, in *Invention nouvelle en l'algèbre*, asserted that every equation of degree $n$ has $n$ solutions,
counting the "impossible" ones, though he did not say what those were. Descartes in 1637 said one can always *imagine*
$n$ roots, which is where the word "imaginary" comes from.

It was not obvious that the impossible roots would always be complex numbers $a+bi$. In 1702 Leibniz believed that
$x^4+a^4$ could not be split into real quadratic factors, which would have meant its roots needed something beyond
$a+bi$. In 1742 Euler showed that it does split:

$$x^4+a^4=\left(x^2+\sqrt2\,ax+a^2\right)\left(x^2-\sqrt2\,ax+a^2\right).$$

The first serious attempt at a proof was by Jean le Rond d'Alembert in 1746. His key idea (12.3, Lemma 3) was that if
$|p(z)|$ is not zero, you can make it smaller by moving $z$ a little; but he did not justify that a smallest value is
actually reached. Euler (1749), Lagrange (1772) and Laplace (1795) gave algebraic proofs for real polynomials. These
assumed, in effect, that the roots exist somewhere and then showed they must be complex numbers.

Carl Friedrich Gauss criticised exactly that in his doctoral dissertation of 1799, which gave a new, geometric proof.
Gauss's own proof relied on a fact about how curves cross that he took as evident; it was made rigorous by Alexander
Ostrowski in 1920. Gauss returned to the theorem three more times: two new proofs in 1816 (the second of which
repaired the algebraic approach and is the ancestor of the "most algebraic" proof used today), and in 1849, fifty
years after the first, a version of his first proof for complex coefficients.

In 1806, and in a fuller version in 1814, the amateur mathematician Jean-Robert Argand, born in Geneva and then running a bookshop in Paris, published a
short proof by d'Alembert's idea, with the complex plane as a picture. Cauchy included a proof of this kind in his
*Cours d'analyse* of 1821. The step they still took for granted, that a continuous function on a closed disc reaches a
smallest value, was proved in general later in the nineteenth century, with the work of Bolzano and Weierstrass on the
completeness of the real numbers. With that step filled in, the Argand-Cauchy argument is the proof in the next section.

## 12.3 A proof by the minimum modulus

*Level: advanced.*

The idea fits in one sentence: *$|p(z)|$ has a smallest value somewhere, and wherever $|p(z)|$ is not zero you can make
it smaller, so the smallest value is zero.* We make each half precise.

Throughout, $p(z)=a_nz^n+\cdots+a_1z+a_0$ with $n\ge1$ and $a_n\ne0$. The **modulus** $|p(z)|$ is a real number
$\ge0$, the distance from $p(z)$ to $0$. Think of it as the height of a landscape over the complex plane; roots are the
places where the landscape touches the ground.

### Lemma 1: far away, $|p(z)|$ is large

**Lemma 1.** There is a number $R_0$ such that $|p(z)|\ge\frac12|a_n||z|^n$ whenever $|z|\ge R_0$. In particular
$|p(z)|\to\infty$ as $|z|\to\infty$.

*Proof.* Let $A=|a_0|+|a_1|+\cdots+|a_{n-1}|$ and take $R_0=\max\left(1,\frac{2A}{|a_n|}\right)$. For $|z|\ge R_0\ge1$,
each $|z|^i\le|z|^{n-1}$ for $i\le n-1$, so by the triangle inequality

$$\left|a_{n-1}z^{n-1}+\cdots+a_0\right|\le A|z|^{n-1}=\frac{A}{|z|}\,|z|^n\le\frac{|a_n|}{2}|z|^n.$$

Then $|p(z)|\ge|a_nz^n|-\left|a_{n-1}z^{n-1}+\cdots+a_0\right|\ge|a_n||z|^n-\frac12|a_n||z|^n=\frac12|a_n||z|^n$. $\square$

### Lemma 2: there is a lowest point

**Lemma 2.** There is a point $z_0$ with $|p(z_0)|\le|p(z)|$ for every complex number $z$.

*Proof.* By Lemma 1, pick $R\ge R_0$ so large that $\frac12|a_n|R^n>|p(0)|$. Then outside the closed disc
$D=\{z:|z|\le R\}$ we have $|p(z)|>|p(0)|$.

The function $z\mapsto|p(z)|$ is continuous (it is built from additions, multiplications and the modulus, all
continuous). The disc $D$ is closed and bounded. The **extreme value theorem** says that a continuous real-valued
function on a closed bounded set in the plane attains a minimum: there is $z_0\in D$ with $|p(z_0)|\le|p(z)|$ for all
$z\in D$. (This is where the completeness of the real numbers enters; see
[MAT158 Unit 5](../../uoft/MAT158H1/unit05.md) for the one-variable version and its proof, which carries over to
the plane by the Bolzano-Weierstrass theorem.)

Since $0\in D$, $|p(z_0)|\le|p(0)|$, and outside $D$ every value exceeds $|p(0)|$. So $|p(z_0)|$ is the smallest value
on the whole plane. $\square$

### Lemma 3: d'Alembert's lemma, you can always go lower

**Lemma 3.** If $p(z_0)\ne0$, there is a point $z$ with $|p(z)|<|p(z_0)|$.

The proof is the heart of the matter. First an example to see the trick.

**Example 1.** $p(z)=z^2+1$ at $z_0=0$, where $p(0)=1$. Which direction lowers $|p|$? Moving along the real axis,
$p(t)=1+t^2$ goes *up*. Moving along the imaginary axis, $p(ti)=1-t^2$ goes *down*. The direction that works is the
one where $z^2$ points opposite to $p(0)$: we need $z^2$ to be a negative real number, so $z=ti$. (And indeed the
landscape goes all the way to the ground at $z=i$.)

**Example 2.** $p(z)=z^3-3z+3$ at $z_0=1$, where $p(1)=1$. Expand around $1$ by putting $z=1+w$:

$$p(1+w)=(1+w)^3-3(1+w)+3=1+3w^2+w^3.$$

The $w$ term is missing: $z_0=1$ is a critical point. The first term after the constant is $3w^2$. To lower
$|p|$ we want $3w^2$ to point opposite to $1$, so $w^2$ negative: $w=\frac{t}{\sqrt3}i$ gives $3w^2=-t^2$ and
$p=1-t^2+w^3$, and for small $t$ the $w^3$ term, of size $t^3/(3\sqrt3)$, is too small to spoil the decrease. For
$t=0.5$: $|p(1+0.2887i)|=|0.75-0.0241i|\approx0.7504<1$.

*Proof of Lemma 3.* Expand $p$ around $z_0$: putting $z=z_0+w$ and multiplying out gives a polynomial in $w$ of the same
degree, with constant term $p(z_0)$. Divide by $p(z_0)\ne0$:

$$q(w)=\frac{p(z_0+w)}{p(z_0)}=1+b_kw^k+b_{k+1}w^{k+1}+\cdots+b_nw^n,$$

where $b_k\ne0$ is the first nonzero coefficient after the constant ($1\le k\le n$; one exists because $p$ is not
constant, indeed $b_n=a_n/p(z_0)\ne0$). We need a $w$ with $|q(w)|<1$.

Choose a complex number $\zeta$ with

$$\zeta^k=-\frac{1}{b_k}.$$

It exists because every nonzero complex number has $k$-th roots ([Chapter 9](09-Complex-Numbers.md): in polar form,
take the $k$-th root of the modulus and divide the angle by $k$). Now take $w=t\zeta$ with $t$ a small positive real
number. Then $b_kw^k=b_kt^k\zeta^k=-t^k$, so

$$q(t\zeta)=1-t^k+t^{k+1}\left(b_{k+1}\zeta^{k+1}+b_{k+2}\zeta^{k+2}t+\cdots+b_n\zeta^nt^{n-k-1}\right).$$

Let $C=|b_{k+1}||\zeta|^{k+1}+\cdots+|b_n||\zeta|^n$. For $0<t<1$ the bracket has modulus at most $C$, so by the
triangle inequality

$$|q(t\zeta)|\le\left(1-t^k\right)+Ct^{k+1}=1-t^k(1-Ct).$$

If also $t<1/C$ (or any $t<1$ when $C=0$), then $1-Ct>0$, and $|q(t\zeta)|<1$. Multiplying back by $|p(z_0)|$:
$|p(z_0+t\zeta)|<|p(z_0)|$. $\square$

### The theorem

*Proof of the fundamental theorem.* By Lemma 2 there is a point $z_0$ where $|p|$ is smallest. If $p(z_0)\ne0$,
Lemma 3 gives a point where $|p|$ is smaller still, which is impossible. So $p(z_0)=0$. $\square$

Look at what was used. Lemma 2 needed the completeness of the real numbers (through the extreme value theorem). Lemma 3
needed $k$-th roots of complex numbers, which themselves rely on real analysis: every positive real number has a real
$k$-th root (again completeness), and angles can be divided by $k$. Nothing about the algebra of $\mathbb{C}$ beyond
the field laws was needed. This is why the theorem fails over $\mathbb{Q}(i)$, the complex numbers with rational real
and imaginary parts: there, $|p|$ need not attain its smallest value, and $z^2-2$ has no root.

Why can't the landscape have a dip that is not a root, like a crater floor above the ground? Lemma 3 says that at any
point above the ground there are $k$ directions, evenly spaced (the $k$ values of $\zeta$), in which the height goes
down. A smooth landscape of the form $|p|$ has no local minima except at the ground. (Points like $z_0=1$ in Example 2,
with $k\ge2$, are saddle points: down in $k$ directions, up in the $k$ directions between them.)

## 12.4 The winding-number picture

*Level: advanced.*

Gauss's first proof, and many modern ones, rest on a different picture: follow $p(z)$ as $z$ goes once around a circle,
and count how many times $p(z)$ goes around $0$.

For a closed path in the plane that does not pass through $0$, the **winding number** around $0$ is the number of
complete turns the path makes around $0$, counting anticlockwise turns as $+1$ and clockwise ones as $-1$. Picture a
person standing at $0$ and turning to keep facing a walker on the path: the winding number is how many full turns they
make.

Take $p(z)=z^2-2z+2$, whose roots are $1\pm i$, both at distance $\sqrt2\approx1.414$ from $0$. Let $z$ go once
around the circle $|z|=R$ and watch $p(z)$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 240" role="img" aria-label="Left: the z-plane with two circles around the origin, radius 1 and radius 2, and the two roots 1 plus i and 1 minus i between them. Right: the images of the two circles under p of z equals z squared minus 2 z plus 2. The image of the small circle is a small loop that does not go around 0. The image of the large circle is a large curve that goes around 0 twice.">
  <text x="100" y="18" font-size="13" text-anchor="middle" fill="currentColor">z-plane</text>
  <line x1="10" y1="115" x2="190" y2="115" stroke="currentColor" stroke-width="0.8" opacity="0.5"/>
  <line x1="100" y1="25" x2="100" y2="205" stroke="currentColor" stroke-width="0.8" opacity="0.5"/>
  <circle cx="100" cy="115" r="40" fill="none" stroke="#9cc9ea" stroke-width="2.5"/>
  <circle cx="100" cy="115" r="80" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <circle cx="140" cy="75" r="5" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="140" cy="155" r="5" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="148" y="72" font-size="12" fill="currentColor">1+i</text>
  <text x="148" y="166" font-size="12" fill="currentColor">1−i</text>
  <text x="60" y="108" font-size="11" fill="currentColor">R=1</text>
  <text x="34" y="54" font-size="11" fill="currentColor">R=2</text>
  <text x="320" y="18" font-size="13" text-anchor="middle" fill="currentColor">p(z)-plane</text>
  <line x1="230" y1="115" x2="430" y2="115" stroke="currentColor" stroke-width="0.8" opacity="0.5"/>
  <line x1="320" y1="25" x2="320" y2="205" stroke="currentColor" stroke-width="0.8" opacity="0.5"/>
  <path d="M340.0,115.0 L338.2,108.3 L333.1,103.0 L325.4,100.4 L316.3,101.3 L307.3,106.2 L300.0,115.0 L295.7,126.9 L295.5,140.7 L300.0,155.0 L309.4,168.1 L323.0,178.3 L340.0,184.3 L358.8,185.0 L377.6,180.1 L394.6,169.6 L408.2,154.4 L417.0,135.6 L420.0,115.0 L417.0,94.4 L408.2,75.6 L394.6,60.4 L377.6,49.9 L358.8,45.0 L340.0,45.7 L323.0,51.7 L309.4,61.9 L300.0,75.0 L295.5,89.3 L295.7,103.1 L300.0,115.0 L307.3,123.8 L316.3,128.7 L325.4,129.6 L333.1,127.0 L338.2,121.7 L340.0,115.0 Z" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <path d="M330.0,115.0 L329.7,115.1 L328.9,115.4 L327.7,116.3 L326.4,118.0 L325.4,120.5 L325.0,123.7 L325.5,127.4 L327.1,131.3 L330.0,135.0 L334.1,138.1 L339.2,140.2 L345.0,141.0 L351.1,140.2 L357.1,137.7 L362.3,133.7 L366.5,128.3 L369.1,121.9 L370.0,115.0 L369.1,108.1 L366.5,101.7 L362.3,96.3 L357.1,92.3 L351.1,89.8 L345.0,89.0 L339.2,89.8 L334.1,91.9 L330.0,95.0 L327.1,98.7 L325.5,102.6 L325.0,106.3 L325.4,109.5 L326.4,112.0 L327.7,113.7 L328.9,114.6 L329.7,114.9 L330.0,115.0 Z" fill="none" stroke="#9cc9ea" stroke-width="2.5"/>
  <circle cx="320" cy="115" r="4" fill="currentColor"/>
  <text x="312" y="110" font-size="12" text-anchor="end" fill="currentColor">0</text>
  <text x="250" y="225" font-size="12" fill="currentColor">small circle: winds 0 times; large circle: winds 2 times</text>
</svg>
</div>

- **Small circle, $R=1$.** Both roots are outside. The image is a small loop (values between $0.5$ and $5$ in real
  part) that never goes around $0$: winding number $0$.
- **Large circle, $R=2$.** Both roots are inside. For large $|z|$, $p(z)=z^2\left(1-\frac2z+\frac{2}{z^2}\right)$ is close to
  $z^2$ in direction, and as $z$ goes around once, $z^2$ goes around twice. The image winds around $0$ twice.

Now the argument. Let $p$ have degree $n$ and suppose, for contradiction, that $p$ has **no** root.

1. For very small $R$, $p(z)$ stays close to $p(0)\ne0$, inside a small disc around $p(0)$ that does not contain $0$.
   So the winding number is $0$.
2. For very large $R$, $p(z)=a_nz^n(1+\varepsilon(z))$ with $|\varepsilon(z)|<1$ (Lemma 1's estimate). The factor
   $1+\varepsilon$ stays in the right half-plane and cannot make a full turn, while $z^n$ turns $n$ times. So the
   winding number is $n$.
3. As $R$ grows continuously from small to large, the image curve moves continuously. Since it never passes through $0$
   (there are no roots), the winding number, an integer, cannot jump. So it is constant.

So $0=n$, contradicting $n\ge1$. Hence $p$ has a root. $\square$

This is a sketch, not yet a proof: to make it rigorous one must define the winding number carefully (by following a
continuous choice of the angle of $p(z)$ along the path) and prove step 3, that it does not change under a continuous
deformation avoiding $0$. Those facts are the beginning of algebraic topology (the fundamental group of the circle);
see Fulton's or Hatcher's books in Further reading. The picture explains *why* degree $n$ forces $n$ roots: the big
circle's image winds $n$ times, and each root inside the circle accounts for exactly one turn.

That last statement is a theorem of complex analysis, the **argument principle**: *if no root lies on the circle, the
winding number of the image of the circle around $0$ equals the number of roots inside, counted with multiplicity.*
In the example, the circle $R=1.5$ also gives winding number $2$, because both roots have modulus $\sqrt2<1.5$.

**Try it in Python.** Approximate the winding number by adding up the small changes of angle along the circle:

```python
import cmath, math

def winding(p, R, steps=2000):
    """Number of turns p(z) makes around 0 as z goes once around |z| = R."""
    total, prev = 0.0, p(R)
    for k in range(1, steps + 1):
        cur = p(R * cmath.exp(2j * math.pi * k / steps))
        total += cmath.phase(cur / prev)       # small angle change, between -pi and pi
        prev = cur
    return round(total / (2 * math.pi))

p = lambda z: z * z - 2 * z + 2
print([winding(p, R) for R in (0.5, 1, 1.5, 2, 10)])   # [0, 0, 2, 2, 2]
```

## 12.5 Consequences: factoring over $\mathbb{R}$ and $\mathbb{C}$

Over $\mathbb{C}$, the corollary of 12.1 says everything: every polynomial is a constant times a product of linear
factors. Over $\mathbb{R}$, there is one more step.

**Theorem (conjugate roots).** If $p$ has real coefficients and $p(z)=0$, then $p(\bar z)=0$. Moreover $z$ and $\bar z$
have the same multiplicity.

*Proof.* Conjugation respects sums and products ($\overline{u+v}=\bar u+\bar v$, $\overline{uv}=\bar u\,\bar v$) and
fixes real numbers. So

$$p(\bar z)=\sum a_k\bar z^k=\sum\overline{a_kz^k}=\overline{p(z)}=\bar0=0.$$

For multiplicity: if $z$ is not real, $(x-z)(x-\bar z)=x^2-2\,\mathrm{Re}(z)\,x+|z|^2$ has real coefficients and divides
$p$ (both linear factors do, and they are different). Long division of real polynomials gives a real quotient, so
$p=(x^2-2\,\mathrm{Re}(z)\,x+|z|^2)\,q$ with $q$ real, and we repeat with $q$. Each time, $z$ and $\bar z$ are removed
together, so they occur equally often. $\square$

**Theorem (real factorization).** Every polynomial with real coefficients is a real constant times a product of real
linear factors $x-r$ and real quadratic factors $x^2+bx+c$ with $b^2-4c<0$.

*Proof.* Factor over $\mathbb{C}$ by the corollary of 12.1. Real roots give real linear factors. Non-real roots come in
conjugate pairs with equal multiplicity, and each pair gives the real quadratic $x^2-2\,\mathrm{Re}(z)\,x+|z|^2$, whose
discriminant $4\,\mathrm{Re}(z)^2-4|z|^2=-4\,\mathrm{Im}(z)^2$ is negative. $\square$

So the **irreducible** real polynomials (those that cannot be factored into real polynomials of lower degree) are
exactly the linear ones and the quadratics with negative discriminant. Two immediate consequences:

- *A real polynomial of odd degree has a real root*: the non-real roots pair off, so an odd number of roots cannot all
  be non-real. (Calculus gives this too, by the intermediate value theorem.)
- *Partial fractions work*: every real rational function can be split into pieces with denominators $(x-r)^m$ and
  $(x^2+bx+c)^m$, as in [Chapter 4](04-Polynomials-and-Factoring.md). This is what makes every rational function
  integrable in elementary terms in calculus.

**Example 3.** Factor $x^4+1$ over $\mathbb{R}$. Its roots are the fourth roots of $-1$, at angles $45^\circ$,
$135^\circ$, $225^\circ$, $315^\circ$ on the unit circle: $\frac{\pm1\pm i}{\sqrt2}$. Pair each with its conjugate.
The pair at $\pm45^\circ$ has real part $\frac1{\sqrt2}$ and modulus $1$, giving $x^2-\sqrt2\,x+1$; the pair at
$\pm135^\circ$ gives $x^2+\sqrt2\,x+1$. So

$$x^4+1=\left(x^2-\sqrt2\,x+1\right)\left(x^2+\sqrt2\,x+1\right).$$

Check: the product is $(x^2+1)^2-2x^2=x^4+1$. This is Euler's answer to Leibniz (with $a=1$).

**Example 4.** $x^6-1$. The roots are the sixth roots of unity: $\pm1$ and four non-real ones at $\pm60^\circ$ and
$\pm120^\circ$. Pairing gives

$$x^6-1=(x-1)(x+1)\left(x^2-x+1\right)\left(x^2+x+1\right).$$

**Example 5.** Given that $2+i$ is a root of $x^3-3x^2+x+5$, find the others. Then $2-i$ is a root too, so
$(x-2-i)(x-2+i)=x^2-4x+5$ is a factor. Division gives $x^3-3x^2+x+5=(x^2-4x+5)(x+1)$. The roots are $2\pm i$ and $-1$.

**Beyond $\mathbb{C}$.** The theorem says $\mathbb{C}$ needs no further extension for polynomial equations. A smaller
field also has this property: the field $\overline{\mathbb{Q}}$ of **algebraic numbers**, the complex numbers that are
roots of some nonzero polynomial with rational coefficients. It is algebraically closed, and it is countable, so most
complex numbers (such as $e$ and $\pi$) are not in it. [Chapter 19](19-Fields-and-Extensions.md) proves that the
algebraic numbers form a field and meets transcendental numbers. Every field, it turns out, sits inside an
algebraically closed one (its **algebraic closure**), a theorem of Steinitz from 1910; for the finite fields of
[Chapter 19](19-Fields-and-Extensions.md) this closure is infinite.

**An algebraic proof?** Since the theorem is about polynomials, people long wanted a proof using as little analysis as
possible. The best one uses only two analytic facts: every real polynomial of odd degree has a real root, and every
complex number has a complex square root. The rest is Galois theory and the Sylow theorems
([Chapter 16](16-Group-Actions-and-Sylow.md)); it is a descendant of Gauss's second proof of 1816, polished by Emil
Artin in the twentieth century. Analysis cannot be removed completely, because the statement is false for fields like
$\mathbb{Q}(i)$ that satisfy all the same algebraic laws.

## 12.6 Numerical root finding, and what "solving" means

*Level: advanced.*

The theorem promises roots. How do we actually find them, say for $x^5-4x+2$, which (as
[Chapter 20](20-Galois-Theory.md) shows) has no formula in radicals at all?

### Newton's method

Start with a guess $x_0$. Near $x_0$, the graph of $f$ looks like its tangent line, $y=f(x_0)+f'(x_0)(x-x_0)$. The
tangent line crosses zero at $x=x_0-\frac{f(x_0)}{f'(x_0)}$. Take that as the next guess, and repeat:

$$x_{k+1}=x_k-\frac{f(x_k)}{f'(x_k)}.$$

This is **Newton's method** (Newton described a version of it for polynomials around 1669; Joseph Raphson published a
simpler iterative form in 1690, and the derivative form is later).

**Example 6.** $\sqrt2$ is a root of $f(x)=x^2-2$, with $f'(x)=2x$. The step simplifies to
$x_{k+1}=x_k-\frac{x_k^2-2}{2x_k}=\frac12\left(x_k+\frac{2}{x_k}\right)$: average the guess with $2$ divided by the
guess. (This is the old "Babylonian" or Heron's method for square roots.) From $x_0=1$:

| $k$ | $x_k$ | error $x_k-\sqrt2$ |
|---|---|---|
| 0 | 1 | $-0.414$ |
| 1 | 1.5 | $8.6\times10^{-2}$ |
| 2 | 1.416666666666… | $2.5\times10^{-3}$ |
| 3 | 1.414215686274… | $2.1\times10^{-6}$ |
| 4 | 1.414213562374690… | $1.6\times10^{-12}$ |
| 5 | 1.414213562373095048… | $9.0\times10^{-25}$ |

Each step roughly **doubles the number of correct digits**. That is called quadratic convergence, and it is why
Newton's method is the workhorse of numerical computing.

**Theorem (quadratic convergence).** Let $f$ have a continuous second derivative near a root $r$ with $f'(r)\ne0$ (a
simple root). Then there are $\delta>0$ and $M$ such that if $|x_0-r|<\delta$, all $x_k$ stay within $\delta$ of $r$
and

$$|x_{k+1}-r|\le M\,|x_k-r|^2.$$

*Proof.* Choose $\delta$ so small that on $[r-\delta,r+\delta]$, $|f'|\ge m>0$ and $|f''|\le K$, and also
$\frac{K}{2m}\delta<1$; let $M=\frac{K}{2m}$. If $|x_k-r|<\delta$, Taylor's theorem with remainder, expanded at $x_k$
and evaluated at $r$, gives a point $\xi$ between them with

$$0=f(r)=f(x_k)+f'(x_k)(r-x_k)+\tfrac12f''(\xi)(r-x_k)^2.$$

Divide by $f'(x_k)$ and rearrange:

$$x_k-\frac{f(x_k)}{f'(x_k)}-r=\frac{f''(\xi)}{2f'(x_k)}(x_k-r)^2,\qquad\text{that is}\qquad x_{k+1}-r=\frac{f''(\xi)}{2f'(x_k)}(x_k-r)^2.$$

So $|x_{k+1}-r|\le M|x_k-r|^2=(M|x_k-r|)\,|x_k-r|<|x_k-r|<\delta$, and by induction the estimate holds for all $k$.
$\square$

If the error is $10^{-d}$, the next error is about $M\cdot10^{-2d}$: the digits double, as in the table.

**It works for complex roots too.** The same formula, with complex arithmetic, finds non-real roots if you start from a
non-real guess. (Not every non-real guess will do: from $1+i$ the iteration below drifts to the real root $0.5085$.)

```python
def newton(f, df, z, steps=50, tol=1e-15):
    for _ in range(steps):
        step = f(z) / df(z)
        z -= step
        if abs(step) < tol:
            break
    return z

f  = lambda z: z**5 - 4*z + 2
df = lambda z: 5*z**4 - 4
for z0 in (0, 1, -2, 1.5j, -1.5j):
    print(newton(f, df, complex(z0)))
# about 0.5085, 1.2436, -1.5185, and the pair -0.1168 +/- 1.4384i
```

**When it fails.** Newton's method is fast near a simple root, but globally it can misbehave.

- *Cycles.* For $f(x)=x^3-2x+2$ starting at $x_0=0$: $f(0)=2$, $f'(0)=-2$, so $x_1=1$; $f(1)=1$, $f'(1)=1$, so $x_2=0$.
  The guesses bounce between $0$ and $1$ forever, never approaching the real root near $-1.7693$.
- *Multiple roots.* At a double root $f'(r)=0$, and convergence drops to linear: each step only halves the error for
  $f(x)=x^2$.
- *Basins.* In 1879 Arthur Cayley asked which starting points in the complex plane lead to which root. For quadratics
  the answer is simple: the plane splits along a line, each half going to its nearer root. For $z^3-1$ he found it
  difficult, and with good reason: the three regions (basins) have a fractal boundary, where every boundary point
  touches all three basins. Pictures of it, possible only with computers, became one of the classic images of chaos.

**A Mars example.** To know where Mars is on its orbit, astronomers solve **Kepler's equation** $E-e\sin E=M$ for the
angle $E$, given the time-dependent angle $M$ and the orbit's eccentricity $e$, about $0.0934$ for Mars. It is not a
polynomial, but Newton's method works just as well, with $f(E)=E-e\sin E-M$ and $f'(E)=1-e\cos E$. For $M=1$ radian,
starting from $E_0=1$: $E_1=1.082770$, $E_2=1.082484$, and from then on the first fifteen digits do not change:
$E=1.08248395370516$.

### What "solving" means

We can now say clearly what it can mean to "solve" a polynomial equation.

1. **By radicals.** A formula using $+,-,\times,\div$ and $\sqrt[k]{\ }$. Possible in degree at most $4$
   ([Chapter 11](11-Cubics-and-Quartics.md)), impossible in general from degree $5$ ([Chapter 20](20-Galois-Theory.md)),
   and even when possible often useless in practice (the quartic formula fills a page).
2. **Numerically.** Find the roots to any desired accuracy. Always possible, by the fundamental theorem plus methods
   like Newton's. In practice, software such as NumPy's `roots` turns the problem into one about matrices: it builds the
   **companion matrix**, whose eigenvalues are exactly the roots of the polynomial, and computes them with the QR
   algorithm of linear algebra. Accuracy has a hidden enemy: some polynomials are **ill-conditioned**, meaning tiny
   changes in the coefficients move the roots a lot. James Wilkinson's famous example is
   $(x-1)(x-2)\cdots(x-20)$, whose coefficient of $x^{19}$ is $-210$. Changing it to $-210-2^{-23}$, a change of about
   one part in two billion, moves the roots $10$ to $19$ off the real line into five complex pairs, such as
   $16.73\pm2.81i$, and moves the root $20$ to about $20.85$.
3. **Exactly.** Treat a root as an exact object: "the root of $x^5-4x+2$ between $1$ and $2$". Computer algebra systems
   do this, storing the polynomial and an interval that isolates one root, and computing with such numbers exactly. The
   fundamental theorem guarantees the object exists; [Chapter 19](19-Fields-and-Extensions.md) studies the field it
   lives in.

Most of applied mathematics lives in the second sense; most of pure algebra in the third; and the first is where the
whole subject came from.

## Check yourself

??? question "1. Find all complex roots of $z^4+4$ and factor it over $\mathbb{R}$."

    $z^4=-4=4e^{i\pi}$, so $z=\sqrt2\,e^{i(\pi+2\pi k)/4}$: $z=\pm1\pm i$. Pairing conjugates: $1\pm i$ gives
    $z^2-2z+2$, and $-1\pm i$ gives $z^2+2z+2$. So $z^4+4=(z^2-2z+2)(z^2+2z+2)$. Check: $(z^2+2)^2-(2z)^2=z^4+4$.

??? question "2. Given that $2+i$ is a root of $x^3-3x^2+x+5$, find all its roots, and check with Vieta."

    By conjugate roots, $2-i$ is a root, so $x^2-4x+5$ is a factor, and the quotient is $x+1$. Roots: $2+i$, $2-i$, $-1$.
    Vieta: the sum $2+2-1=3$ matches $-(-3)$; the product $(4+1)(-1)=-5$ matches $-5$.

??? question "3. Prove that every real polynomial of odd degree has a real root, using conjugate pairs."

    By the corollary of 12.1 it has $n$ complex roots with multiplicity, $n$ odd. The non-real roots come in pairs
    $z,\bar z$ of equal multiplicity, so their total count is even. An odd number minus an even number is odd, hence at
    least $1$: some root is real.

??? question "4. Is there a real polynomial of degree 3 with roots $1$, $i$ and $2$? With roots $1$ and $i$ only?"

    Degree 3 with roots $1$, $i$, $2$: then $-i$ must also be a root, giving four roots for a cubic, impossible. With roots
    $1$, $i$ (and therefore $-i$): yes, $(x-1)(x^2+1)=x^3-x^2+x-1$.

??? question "5. For $p(z)=z^3-3z+3$ at $z_0=1$, find a direction in which $|p|$ decreases, following the proof of Lemma 3."

    $p(1+w)=1+3w^2+w^3$, so $k=2$, $b_2=3$. Choose $\zeta^2=-\frac13$, e.g. $\zeta=\frac{i}{\sqrt3}$. Then
    $p(1+t\zeta)=1-t^2+t^3\zeta^3$, with $|\zeta^3|=\frac1{3\sqrt3}\approx0.19$, so $C\approx0.19$ and any $0<t<1$ works.
    For $t=0.5$, $|p(1+0.2887i)|\approx0.750<1$. The opposite direction $-\zeta$ works too: two downhill directions.

??? question "6. What is the winding number around $0$ of the image of $|z|=1$ under $p(z)=z^3-\frac{1}{2}$? Under $p(z)=z^3+3$?"

    $z^3-\frac12$ has its three roots on $|z|=0.7937<1$, so by the argument principle the winding number is $3$
    (also clear since $z^3$ winds three times and the shift by $\frac12$ is smaller than $|z^3|=1$). $z^3+3$ has its roots
    on $|z|=\sqrt[3]3\approx1.442>1$, so the winding number is $0$: the image is the circle of radius $1$ around $3$,
    which does not surround $0$.

??? question "7. Apply three steps of Newton's method to $x^3-2$ from $x_0=1$."

    $x_{k+1}=x_k-\frac{x_k^3-2}{3x_k^2}$. $x_1=1-\frac{-1}{3}=\frac43\approx1.333333$; $x_2\approx1.263889$;
    $x_3\approx1.259933$. The true value is $\sqrt[3]2=1.259921\ldots$, so after three steps the error is about $1.2\times10^{-5}$.

??? question "8. Show that Newton's method for $x^2-a$ ($a>0$) is $x_{k+1}=\frac12(x_k+a/x_k)$, and that every step after the first is at least $\sqrt a$."

    $x_{k+1}=x_k-\frac{x_k^2-a}{2x_k}=\frac{x_k^2+a}{2x_k}=\frac12\left(x_k+\frac a{x_k}\right)$. For $x_k>0$, the AM-GM
    inequality gives $\frac12(x_k+a/x_k)\ge\sqrt{x_k\cdot a/x_k}=\sqrt a$.

??? question "9. Verify that Newton's method on $x^3-2x+2$ cycles between 0 and 1. Does starting at $x_0=-2$ work?"

    From $0$: $x_1=0-\frac{2}{-2}=1$. From $1$: $x_2=1-\frac{1}{1}=0$. A 2-cycle. From $-2$: $f(-2)=-2$, $f'(-2)=10$,
    $x_1=-1.8$, then $x_2\approx-1.76995$, $x_3\approx-1.769293$, converging to the real root $-1.769292\ldots$.

??? question "10. Where exactly does the proof of 12.3 fail if we replace $\mathbb{C}$ by $\mathbb{Q}(i)$ (numbers $a+bi$ with $a,b$ rational)? Use $p(z)=z^2-2$."

    Lemma 1 still holds. Lemma 2 fails: $|z^2-2|$ gets as close to $0$ as we like (take $z$ rational near $\sqrt2$), but
    never reaches a smallest value, since $\sqrt2$ is missing. Lemma 3 also fails in general: it needs $k$-th roots,
    and for instance $\zeta^2=2$ has no solution in $\mathbb{Q}(i)$.

??? question "11. Show that no finite field is algebraically closed."

    Let the field have elements $a_1,\dots,a_q$. The polynomial $(x-a_1)(x-a_2)\cdots(x-a_q)+1$ has degree $q\ge1$, and
    at every element $a_j$ it takes the value $0+1=1\ne0$. So it has no root in the field.

??? question "12. A real polynomial $p$ of degree 4 has Descartes sign pattern $+\,+\,+\,+\,+$ (all coefficients positive). What can you say about the shape of its factorization over $\mathbb{R}$?"

    No sign changes in $p(x)$: no positive roots. $p(0)>0$: not $0$. So every real root is negative, and the real
    factorization is a product of factors $(x+r)$ with $r>0$ and of quadratics $x^2+bx+c$ with $b^2<4c$, using four
    degrees in total: four linear, two linear and one quadratic, or two quadratics. Example: $x^4+x^3+x^2+x+1$ has no real
    roots at all (its roots are the four non-trivial fifth roots of unity), so it is two quadratics.

## What you learned

- Every nonconstant complex polynomial has a complex root; so it factors into linear factors and has exactly $n$ roots
  with multiplicity. $\mathbb{C}$ is algebraically closed.
- The theorem took from Girard's 1629 claim to the nineteenth century to prove; Gauss's 1799 dissertation was the
  turning point, and the minimum-modulus proof of d'Alembert, Argand and Cauchy is the shortest complete one.
- The proof: $|p|$ attains a minimum (completeness), and at any non-root there is a downhill direction ($k$-th roots).
- The winding number of the image of a large circle is $n$; each root inside accounts for one turn.
- Real polynomials factor into real linear factors and real quadratics with negative discriminant.
- Newton's method doubles the correct digits each step near a simple root, but can cycle or wander elsewhere.
- "Solving" can mean a formula, a numerical answer, or an exact algebraic object; only the last two always exist.

**Next:** [Chapter 13](13-Groups.md), the start of abstract algebra: groups, the language of symmetry that Lagrange's and
Galois's ideas about permuting roots grew into.

## Further reading

- B. Fine and G. Rosenberger, *The Fundamental Theorem of Algebra*, Springer, 1997. A whole book of proofs: analytic,
  topological and algebraic.
- R. Remmert, "The Fundamental Theorem of Algebra", chapter 4 of H.-D. Ebbinghaus et al., *Numbers*, Springer, 1991.
  The history, the proofs, and an honest account of the gaps.
- T. Needham, *Visual Complex Analysis*, Oxford, 1997. Winding numbers and the argument principle in pictures.
- L. V. Ahlfors, *Complex Analysis*, McGraw-Hill, 1953 (3rd ed. 1979). The argument principle with full proofs.
- W. Fulton, *Algebraic Topology: A First Course*, Springer, 1995, and A. Hatcher, *Algebraic Topology*, Cambridge,
  2002. The winding number made rigorous.
- J. H. Wilkinson, *Rounding Errors in Algebraic Processes*, Prentice-Hall, 1963. Including his perturbed polynomial.
- L. N. Trefethen and D. Bau, *Numerical Linear Algebra*, SIAM, 1997. Eigenvalue algorithms, the modern way to find
  roots.
- On this site: [The fundamental theorem of algebra](../../topics/numbers/level-8/05-fundamental-theorem.md),
  [The complex plane](../../topics/numbers/level-7/04-complex-plane.md),
  [Polar form](../../topics/numbers/level-8/01-polar-form.md) and
  [Approximating roots](../../topics/numbers/level-6/07-approximating-roots.md) on the Topics shelf;
  [MAT158H1 Unit 5: The Three Hard Theorems](../../uoft/MAT158H1/unit05.md) for the extreme value theorem;
  the [Algebra book index](index.md).
