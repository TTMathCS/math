# 19. Elliptic curves

*A circle has infinitely many rational points, and one line through a known point finds them all. A cubic curve such as
$y^2 = x^3 - 2$ is different: a line through one rational point usually meets the curve in two irrational ones. But a line
through **two** rational points of a cubic meets it in a third rational point, and from that simple fact grows one of the
richest objects in mathematics. In this chapter you will learn to add points on a cubic curve, see that the rational points
form a group, meet the great theorems about that group (Mordell, Mazur) and the curves over finite fields used in every
phone's cryptography (Hasse), solve a problem from the tenth century (which whole numbers are areas of right triangles with
rational sides) and end at the Birch and Swinnerton-Dyer conjecture, one of the seven Millennium Prize Problems.*

!!! abstract "In this chapter"
    **You will learn:**

    - why every conic with one rational point has infinitely many, found by lines, and why cubics behave differently
    - what an elliptic curve is, and how the chord-and-tangent rule turns its points into a group, with explicit formulas
    - Mordell's theorem, rank and torsion, the Nagell-Lutz theorem and Mazur's list of fifteen torsion groups
    - how to count points over a finite field, and Hasse's bound $|N - (p+1)| \le 2\sqrt p$
    - the congruent number problem and its translation into elliptic curves, with Tunnell's criterion
    - an honest account of the Birch and Swinnerton-Dyer conjecture: what it says, why people believe it, and what is proved

    **You need:** Pythagorean triples and Fermat's descent ([Chapter 9](09-Diophantine-Equations.md)), congruences and
    Legendre symbols ([Chapter 4](04-Congruences.md), [Chapter 8](08-Quadratic-Residues-and-Reciprocity.md)), groups
    ([Algebra, Chapter 13](../algebra/13-Groups.md)) and, for 19.6, the idea of an $L$-function
    ([Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md), [Chapter 15](15-Primes-in-Progressions.md)). The
    $p$-adic language of [Chapter 18](18-p-adic-Numbers.md) appears in remarks.

    **Levels:** 19.1 and 19.2 are advanced but concrete (school algebra and patience); 19.3 and 19.4 are advanced, with the
    long proofs sketched honestly; 19.5 is advanced; 19.6 is expert.

## 19.1 Rational points on a conic and on a cubic

*Level: advanced.* A **rational point** on a curve is a point both of whose coordinates are rational numbers. The
question of this chapter is simple to ask: given a curve defined by a polynomial equation with rational coefficients,
what are its rational points? Are there any? Finitely many? Infinitely many? Can we list them?

### Conics: one point gives all

Take the circle $x^2 + y^2 = 1$. It has the rational point $A = (-1, 0)$. Draw the line through $A$ with slope $t$:
$y = t(x + 1)$. Substitute:

$$
x^2 + t^2 (x + 1)^2 = 1 \quad\Longleftrightarrow\quad (1 + t^2) x^2 + 2t^2 x + (t^2 - 1) = 0.
$$

This quadratic has the root $x = -1$ (the point $A$). The product of its two roots is $(t^2 - 1)/(1 + t^2)$, so the other
root is $x = (1 - t^2)/(1 + t^2)$, and then $y = t(x + 1) = 2t/(1 + t^2)$. So

$$
(x, y) = \left( \frac{1 - t^2}{1 + t^2},\; \frac{2t}{1 + t^2} \right).
$$

If $t$ is rational, the point is rational. Conversely, if $(x, y) \ne A$ is a rational point, the slope $t = y/(x+1)$ of the
line from $A$ to it is rational. So **the rational points of the circle are exactly these, for rational $t$** (plus $A$
itself, the limit as $t \to \infty$). With $t = 2/3$ you get $(5/13, 12/13)$, which is the Pythagorean triple
$5, 12, 13$. This is the parametrisation of [Chapter 9](09-Diophantine-Equations.md) seen geometrically.

The same works for any **conic** (curve of degree 2) with rational coefficients: if it has one rational point, the lines
through that point with rational slope find all the others. A line meets a conic in two points; if one is rational and
the line is rational, the quadratic for the other has rational coefficients and one rational root, so the other root is
rational too.

Whether there is a first point is the question of [Chapter 18](18-p-adic-Numbers.md): by the Hasse-Minkowski theorem, a
conic has a rational point if and only if it has a real point and a point over every $\mathbb{Q}_p$. The conic
$x^2 + y^2 = 3$ has none (it fails 3-adically). So for conics the story is complete: no points, or infinitely many, all
found by one line through one point, and a finite test tells which.

### Cubics: the third point

Now take a **cubic**, for example $y^2 = x^3 - x + 1$. It has the rational points $(-1, \pm 1)$, $(0, \pm 1)$, $(1, \pm 1)$.
A line through one rational point meets the curve in three points (a cubic equation in one variable), and two unknown
roots of a cubic with rational coefficients need not be rational. One rational point is not enough.

But two are. Take $P = (-1, 1)$ and $Q = (0, 1)$. The line through them is $y = 1$. Substitute: $1 = x^3 - x + 1$, so
$x^3 - x = 0$, with roots $x = -1, 0, 1$. The third point is $R = (1, 1)$, rational again. In general:

**Lemma.** If a line with rational coefficients meets a cubic curve with rational coefficients in three points (counted
with multiplicity), and two of them are rational, so is the third.

*Proof.* Substituting the line into the cubic gives a polynomial equation of degree 3 in one variable (say $x$) with
rational coefficients, $c(x^3 + b_2 x^2 + b_1 x + b_0) = 0$. Its roots $x_1, x_2, x_3$ satisfy
$x_1 + x_2 + x_3 = -b_2$ (Vieta, [Algebra, Chapter 10](../algebra/10-Roots-and-Coefficients.md)). If $x_1$ and $x_2$ are
rational, so is $x_3 = -b_2 - x_1 - x_2$, and its $y$ is then rational from the line's equation. (If the line is
vertical, use $y$ as the variable instead.) $\square$

The same holds if the line is the **tangent** at a rational point, which meets the curve there twice: the third point
is again rational. This chord-and-tangent method goes back to Diophantus, who used it in the third century to find new
rational solutions from old ones, and Fermat and Newton used it too. Newton described the geometry clearly. The big
discovery, made precise in the early twentieth century by Poincaré and others, is that the method turns the rational
points into a **group**.

### What an elliptic curve is

**Definition.** An **elliptic curve** over $\mathbb{Q}$ (in short Weierstrass form) is a curve

$$
E: \; y^2 = x^3 + ax + b, \qquad a, b \in \mathbb{Q},
$$

with $4a^3 + 27b^2 \ne 0$, together with one extra point $O$, the **point at infinity**.

The condition $4a^3 + 27b^2 \ne 0$ says that the cubic $x^3 + ax + b$ has three distinct roots (it is, up to sign, the
discriminant of the cubic), so the curve has no **singular** points: no cusps and no self-crossings. The number
$\Delta = -16(4a^3 + 27b^2)$ is called the **discriminant** of $E$. For $y^2 = x^3 - x + 1$, $4a^3 + 27b^2 = -4 + 27 = 23$,
so $\Delta = -368$, and the curve is elliptic.

Two non-examples show why the condition matters. $y^2 = x^3$ has a cusp at the origin, and $y^2 = x^2(x + 1)$ crosses
itself there. Both behave like conics: lines through the singular point find every rational point (for $y^2 = x^3$ they
are $(t^2, t^3)$), and the interesting group structure disappears.

The **point at infinity** is the point where all vertical lines meet. To make it precise one works in the projective
plane, where the curve becomes $Y^2 Z = X^3 + aXZ^2 + bZ^3$ and $O = (0 : 1 : 0)$ (see
[Geometry, Chapter 18](../geometry/18-Projective-Geometry.md)). For our purposes: every vertical line meets $E$ at its
two points $(x, \pm y)$ and at $O$.

Every smooth plane cubic with a rational point can be brought to this form by a rational change of coordinates, so
nothing is lost by using it. (Sometimes the longer form $y^2 + a_1 xy + a_3 y = x^3 + a_2 x^2 + a_4 x + a_6$ is more
convenient, as in Chapter 20.)

The name is historical: the arc length of an ellipse leads to integrals like $\int dx / \sqrt{x^3 + ax + b}$, called
elliptic integrals, and the curve $y^2 = x^3 + ax + b$ is where such integrals naturally live. An elliptic curve is not an
ellipse.

## 19.2 The group law

*Level: advanced.*

### Chord and tangent

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 480 320" role="img" aria-label="The curve y squared equals x cubed minus x plus 1: an S-shaped branch crossing the x-axis near x equals minus 1.32 and opening to the right. The horizontal line y equals 1 meets it at P equals (-1, 1), Q equals (0, 1) and R equals (1, 1). A dashed vertical segment drops from R to its mirror image (1, -1), labelled P plus Q.">
  <g stroke="currentColor" stroke-width="1" opacity="0.6">
    <line x1="60" y1="160" x2="460" y2="160"/>
    <line x1="220" y1="20" x2="220" y2="300"/>
  </g>
  <polyline points="416.0,32.6 406.0,42.6 396.2,52.2 386.6,61.4 377.1,70.0 367.8,78.3 358.6,86.0 349.6,93.3 340.8,100.0 332.2,106.3 323.7,112.0 315.4,117.1 307.3,121.5 299.3,125.3 291.5,128.3 283.9,130.5 276.4,131.9 269.1,132.5 262.0,132.4 255.0,131.9 248.2,130.9 241.6,129.7 235.1,128.4 228.9,127.0 222.7,125.6 216.8,124.3 211.0,123.1 205.4,122.0 199.9,121.1 194.6,120.3 189.5,119.7 184.6,119.2 179.8,118.9 175.2,118.8 170.7,118.9 166.4,119.0 162.3,119.4 158.4,119.9 154.6,120.5 151.0,121.3 147.6,122.2 144.3,123.3 141.2,124.5 138.3,125.8 135.5,127.2 132.9,128.7 130.5,130.4 128.2,132.1 126.1,133.9 124.2,135.8 122.4,137.7 120.8,139.8 119.4,141.9 118.1,144.0 117.0,146.2 116.1,148.4 115.4,150.7 114.8,153.0 114.4,155.3 114.1,157.7 114.0,160.0 114.1,162.3 114.4,164.7 114.8,167.0 115.4,169.3 116.1,171.6 117.0,173.8 118.1,176.0 119.4,178.1 120.8,180.2 122.4,182.3 124.2,184.2 126.1,186.1 128.2,187.9 130.5,189.6 132.9,191.3 135.5,192.8 138.3,194.2 141.2,195.5 144.3,196.7 147.6,197.8 151.0,198.7 154.6,199.5 158.4,200.1 162.3,200.6 166.4,201.0 170.7,201.1 175.2,201.2 179.8,201.1 184.6,200.8 189.5,200.3 194.6,199.7 199.9,198.9 205.4,198.0 211.0,196.9 216.8,195.7 222.7,194.4 228.9,193.0 235.1,191.6 241.6,190.3 248.2,189.1 255.0,188.1 262.0,187.6 269.1,187.5 276.4,188.1 283.9,189.5 291.5,191.7 299.3,194.7 307.3,198.5 315.4,202.9 323.7,208.0 332.2,213.7 340.8,220.0 349.6,226.7 358.6,234.0 367.8,241.7 377.1,250.0 386.6,258.6 396.2,267.8 406.0,277.4 416.0,287.4" fill="none" stroke="#9cc9ea" stroke-width="2.5"/>
  <line x1="60" y1="125" x2="460" y2="125" stroke="#eea66f" stroke-width="2"/>
  <line x1="300" y1="125" x2="300" y2="195" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <g fill="currentColor" stroke="currentColor">
    <circle cx="140" cy="125" r="4.5"/>
    <circle cx="220" cy="125" r="4.5"/>
    <circle cx="300" cy="125" r="4.5"/>
  </g>
  <circle cx="300" cy="195" r="5.5" fill="#7ccf9a" stroke="currentColor"/>
  <g fill="currentColor" font-size="14">
    <text x="128" y="114">P</text>
    <text x="226" y="114">Q</text>
    <text x="306" y="114">R</text>
    <text x="310" y="214">P + Q</text>
    <text x="70" y="42">y² = x³ − x + 1</text>
    <text x="400" y="118">y = 1</text>
    <text x="448" y="176">x</text>
    <text x="228" y="30">y</text>
  </g>
</svg>
</div>

**Definition (the group law).** Let $P$ and $Q$ be points of $E$. Draw the line through $P$ and $Q$ (the tangent at $P$
if $P = Q$). It meets $E$ in a third point $R$. Reflect $R$ in the $x$-axis. The result is $P + Q$.

The rules for $O$ follow from "vertical lines pass through $O$":

- $P + O = P$: the line through $P$ and $O$ is vertical, its third point is the mirror image of $P$, and reflecting back
  gives $P$. So $O$ is the **identity**.
- If $P = (x, y)$, then $-P = (x, -y)$: the vertical line through $P$ and $(x, -y)$ meets $E$ again at $O$, and
  reflecting $O$ gives $O$. So $P + (-P) = O$.

In the picture, $P = (-1, 1)$ and $Q = (0, 1)$ give $R = (1, 1)$, so $P + Q = (1, -1)$.

**Theorem.** With this addition, the points of $E$ (with coordinates in $\mathbb{Q}$, or $\mathbb{R}$, or any field)
together with $O$ form an **abelian group**, with identity $O$. If $P$ and $Q$ are rational, so is $P + Q$.

Commutativity is clear (the line through $P$ and $Q$ is the line through $Q$ and $P$), and rationality is the Lemma of
19.1. The hard part is **associativity**, $(P + Q) + S = P + (Q + S)$. It is true, but there is no one-line reason. Three
honest routes:

1. **Brute force.** With the explicit formulas below, both sides are rational functions of the coordinates, and a computer
   algebra system can check they agree (one must treat the special cases, $P = Q$ and so on, separately). This is a proof,
   if not an illuminating one.
2. **Geometry.** A classical theorem about cubics (the Cayley-Bacharach theorem: if two cubics meet in nine points, any cubic
   through eight of them passes through the ninth) gives associativity in a few lines. Silverman and Tate's
   *Rational Points on Elliptic Curves* gives this argument.
3. **Algebraic geometry.** The Riemann-Roch theorem identifies $E$ with its "Picard group" of divisor classes, which is a
   group by construction. This is the proof in Silverman's *The Arithmetic of Elliptic Curves*.

### The formulas

Let $P = (x_1, y_1)$ and $Q = (x_2, y_2)$, neither equal to $O$, and $Q \ne -P$. Let $\lambda$ be the slope of the line:

$$
\lambda = \frac{y_2 - y_1}{x_2 - x_1} \;\; (P \ne Q), \qquad \lambda = \frac{3x_1^2 + a}{2y_1} \;\; (P = Q).
$$

Then $P + Q = (x_3, y_3)$ with

$$
x_3 = \lambda^2 - x_1 - x_2, \qquad y_3 = \lambda (x_1 - x_3) - y_1.
$$

*Derivation.* The line is $y = \lambda (x - x_1) + y_1$. Substituting into $y^2 = x^3 + ax + b$ and moving everything to
one side gives

$$
x^3 - \lambda^2 x^2 + (\text{terms of degree} \le 1) = 0,
$$

whose roots are $x_1$, $x_2$ and the $x$-coordinate of the third point. The sum of the roots is $\lambda^2$, so the third
point has $x = \lambda^2 - x_1 - x_2 = x_3$. Its $y$ is $\lambda(x_3 - x_1) + y_1$ from the line, and reflecting gives
$y_3 = -(\lambda(x_3 - x_1) + y_1) = \lambda(x_1 - x_3) - y_1$. For the tangent, implicit differentiation of
$y^2 = x^3 + ax + b$ gives $2y \, y' = 3x^2 + a$, so the slope at $P$ is $(3x_1^2 + a)/(2y_1)$. $\square$

If $y_1 = 0$ the tangent at $P$ is vertical and $2P = O$: such points have **order 2**. They are the points $(e, 0)$ with
$e$ a root of $x^3 + ax + b$.

### Worked examples

**Example 1.** On $y^2 = x^3 - x + 1$, add $P = (-1, 1)$ and $Q = (0, 1)$: $\lambda = 0$, $x_3 = 0 - (-1) - 0 = 1$,
$y_3 = 0 - 1 = -1$. So $P + Q = (1, -1)$, as in the picture.

**Example 2.** On the same curve, double $P = (-1, 1)$: $\lambda = (3 \cdot 1 - 1)/2 = 1$, $x_3 = 1 + 1 + 1 = 3$,
$y_3 = 1 \cdot (-1 - 3) - 1 = -5$. So $2P = (3, -5)$. Check: $(-5)^2 = 25 = 27 - 3 + 1$. Going on,
$3P = (1/4, 7/8)$, $4P = (19/25, -103/125)$, $5P = (159/121, 1861/1331)$. The denominators grow: the number of digits
roughly grows like the square of the multiple, a fact made precise by the theory of **heights**.

**Example 3 (Bachet's duplication).** On $y^2 = x^3 - 2$, which has the obvious point $P = (3, 5)$ ($25 = 27 - 2$):
$\lambda = 3 \cdot 9 / 10 = 27/10$, $x_3 = 729/100 - 6 = 129/100$, $y_3 = \tfrac{27}{10}(3 - \tfrac{129}{100}) - 5 =
\tfrac{27}{10} \cdot \tfrac{171}{100} - 5 = \tfrac{4617 - 5000}{1000} = -\tfrac{383}{1000}$. So
$2P = (129/100, -383/1000)$. Check: $(383/1000)^2 = 146689/10^6$ and $(129/100)^3 - 2 = 2146689/10^6 - 2 \cdot 10^6/10^6
= 146689/10^6$. Claude Gaspard Bachet found this rational solution of $y^2 = x^3 - 2$ in the early seventeenth century.

**Try it in Python.** Exact arithmetic with fractions:

```python
from fractions import Fraction as F

def add(P, Q, a):                 # points on y^2 = x^3 + a x + b; None is the point at infinity O
    if P is None: return Q
    if Q is None: return P
    (x1, y1), (x2, y2) = P, Q
    if x1 == x2 and y1 == -y2:
        return None               # P + (-P) = O (this includes 2P when y1 = 0)
    if P == Q:
        lam = (3*x1*x1 + a) / (2*y1)
    else:
        lam = (y2 - y1) / (x2 - x1)
    x3 = lam*lam - x1 - x2
    return (x3, lam*(x1 - x3) - y1)

P = (F(3), F(5))
print(add(P, P, 0))               # (Fraction(129, 100), Fraction(-383, 1000))  on y^2 = x^3 - 2
```

## 19.3 Mordell's theorem: rank and torsion

*Level: advanced.* Write $E(\mathbb{Q})$ for the group of rational points of $E$ (with $O$). How big can it be?

**Mordell's theorem (1922).** $E(\mathbb{Q})$ is a **finitely generated** abelian group: there are finitely many points
$P_1, \ldots, P_k$ such that every rational point is a sum $n_1 P_1 + \cdots + n_k P_k$ with integers $n_i$.

By the structure theorem for finitely generated abelian groups
([Algebra, Chapter 21](../algebra/21-Modules-and-Representations.md)), this means

$$
E(\mathbb{Q}) \cong \mathbb{Z}^r \oplus T,
$$

where $T$ is a finite group, the **torsion subgroup** (the points of finite order), and $r \ge 0$ is the **rank**. The
rank is the number of independent points of infinite order needed to generate everything. $E(\mathbb{Q})$ is finite
exactly when $r = 0$.

**Proof idea.** The proof is a descent, like Fermat's, in two steps.

1. *Weak Mordell theorem:* the quotient $E(\mathbb{Q}) / 2E(\mathbb{Q})$ is finite. (For a curve with all three roots
   $e_1, e_2, e_3$ rational, map a point $(x, y)$ to the classes of $x - e_1$, $x - e_2$, $x - e_3$ modulo squares; one
   shows this is a homomorphism with kernel $2E(\mathbb{Q})$, and that only finitely many classes can occur, because
   they must be built from primes dividing $\Delta$.)
2. *Heights:* define the height of $P = (m/n, \ldots)$ in lowest terms as $h(P) = \log \max(|m|, |n|)$. One shows
   $h(2P) \ge 4h(P) - C$ for a constant $C$ depending on $E$, and $h(P + Q) \le 2h(P) + C'$ for a fixed $Q$. A point of
   large height, minus a suitable coset representative, is twice a point of much smaller height. Repeating, every point
   is reached from the finitely many representatives together with the finitely many points of small height.

Silverman and Tate, Chapter III, give a complete elementary proof for curves with a rational point of order 2. André
Weil extended the theorem to all abelian varieties over all number fields in 1928, so it is often called the
Mordell-Weil theorem.

The proof is **not** effective: it does not give an algorithm guaranteed to find the generators. In practice programs
(such as Cremona's mwrank) find them by descent and searching, and they almost always succeed, but no one can prove
that such a procedure always terminates. That gap is connected to the Tate-Shafarevich group of 19.6 and of
[Chapter 18](18-p-adic-Numbers.md).

### Torsion: Nagell-Lutz and Mazur

Torsion points are easy to find, thanks to:

**Nagell-Lutz theorem (Nagell 1935, Lutz 1937).** Let $E: y^2 = x^3 + ax + b$ with integer $a$, $b$. If $P = (x, y)$
is a rational point of finite order, then $x$ and $y$ are integers, and either $y = 0$ or $y^2$ divides
$4a^3 + 27b^2$.

(Proof: Silverman and Tate, Chapter II. It uses a $p$-adic argument in all but name: one shows points with $p$ in the
denominator form a subgroup with no torsion.)

A useful consequence: **if some multiple $nP$ has non-integer coordinates, then $P$ has infinite order**, because
multiples of a torsion point are torsion. On $y^2 = x^3 - 2$, $2(3, 5) = (129/100, \ldots)$ is not integral, so $(3, 5)$
has infinite order, and the curve has infinitely many rational points. On $y^2 = x^3 - x + 1$, $3(-1,1) = (1/4, 7/8)$
shows the same.

**Example: $y^2 = x^3 + 1$.** Here $4a^3 + 27b^2 = 27$. Candidates: $y = 0$ gives $x = -1$; $y^2 \in \{1, 9\}$ gives
$x^3 = 0$ or $x^3 = 8$, so $(0, \pm 1)$ and $(2, \pm 3)$. Starting from $P = (2, 3)$:

$$
P = (2, 3),\quad 2P = (0, 1),\quad 3P = (-1, 0),\quad 4P = (0, -1),\quad 5P = (2, -3),\quad 6P = O.
$$

So the torsion group is cyclic of order 6, and (with more work) the rank is 0, so $E(\mathbb{Q})$ is exactly these six
points. In particular the equation $y^2 = x^3 + 1$ has only the rational solutions $(-1, 0)$, $(0, \pm 1)$, $(2, \pm 3)$:
apart from the trivial ones, the only rational cube that is one less than a square is $8 = 9 - 1$, a result that goes
back to Euler.

Which torsion groups can occur? Barry Mazur answered this in 1977, in one of the great theorems of the century:

**Mazur's theorem.** The torsion subgroup of $E(\mathbb{Q})$ is one of these fifteen groups:

- $\mathbb{Z}/n\mathbb{Z}$ for $n = 1, 2, \ldots, 10$ or $12$;
- $\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2n\mathbb{Z}$ for $n = 1, 2, 3, 4$.

Each of them occurs, for infinitely many curves. So no rational point on any elliptic curve over $\mathbb{Q}$ has order
11, or 13, or more than 12. The proof studies the rational points of the **modular curves** $X_1(N)$, which classify
elliptic curves with a point of order $N$; it is far beyond this book, but the statement is easy to test.

### Rank: the mystery

The rank is much harder. Examples:

- $y^2 = x^3 - x$ has rank 0 and torsion $\{O, (0,0), (1, 0), (-1, 0)\}$, the group $\mathbb{Z}/2 \times \mathbb{Z}/2$.
  This is equivalent to Fermat's theorem that 1 is not a congruent number (19.5).
- $y^2 = x^3 - 2$ has rank 1, generated by $(3, 5)$.
- $y^2 = x^3 - x + 1$ has rank 1 and no torsion (Nagell-Lutz leaves only $(0, \pm1)$ and $(\pm 1, \pm 1)$ as candidates,
  and they all have infinite order). A generator is $G = (1, 1)$: then $2G = (-1, 1)$, $3G = (0, -1)$, $4G = (3, -5)$,
  $5G = (5, 11)$ and $9G = (56, -419)$.

Nobody knows which ranks are possible. Curves of rank at least 28 were found by Noam Elkies in 2006, and as of 2024 a curve
of rank at least 29 (Elkies and Zev Klagsbrun). Whether the rank is unbounded is an open question; for decades most experts
expected it to be, but heuristics published since about 2016 (Park, Poonen, Voight and Wood) suggest that only finitely
many curves have rank above about 21. The honest answer is: we do not know.

**Integer points.** A separate question is how many points have *integer* coordinates. Siegel proved in 1929 that there
are only finitely many. The curve $y^2 = x^3 + 17$ is a famous example with many: with $y > 0$ they are $(-2, 3)$,
$(-1, 4)$, $(2, 5)$, $(4, 9)$, $(8, 23)$, $(43, 282)$, $(52, 375)$ and $(5234, 378661)$. (Check the last:
$5234^3 + 17 = 143384152921 = 378661^2$.)

## 19.4 Curves over finite fields

*Level: advanced.* The formulas of 19.2 use only addition, subtraction, multiplication and division, so they make sense
in any field, in particular in $\mathbb{F}_p = \mathbb{Z}/p\mathbb{Z}$ for a prime $p > 3$. For $E: y^2 = x^3 + ax + b$ with
$4a^3 + 27b^2 \not\equiv 0 \pmod p$, the set $E(\mathbb{F}_p)$ of solutions mod $p$ plus $O$ is a finite abelian group.

**Example.** $E: y^2 = x^3 + x + 1$ over $\mathbb{F}_5$. Squares mod 5 are $0, 1, 4$. For each $x$:

| $x$ | $x^3 + x + 1 \bmod 5$ | $y$ |
|---|---|---|
| 0 | 1 | 1, 4 |
| 1 | 3 | none |
| 2 | 11 ≡ 1 | 1, 4 |
| 3 | 31 ≡ 1 | 1, 4 |
| 4 | 69 ≡ 4 | 2, 3 |

So $E(\mathbb{F}_5)$ has $8 + 1 = 9$ points (including $O$). Adding $P = (0, 1)$ to itself gives
$P, 2P = (4, 2), 3P = (2, 1), 4P = (3, 4), 5P = (3, 1), 6P = (2, 4), 7P = (4, 3), 8P = (0, 4), 9P = O$: the group is
cyclic of order 9, generated by $P$.

### Counting with the Legendre symbol

For each $x$, the equation $y^2 = c$ with $c = x^3 + ax + b$ has $1 + \left(\frac{c}{p}\right)$ solutions $y$ mod $p$:
two if $c$ is a nonzero square, none if $c$ is a non-square, one if $c \equiv 0$. Summing over $x$ and adding $O$:

$$
\#E(\mathbb{F}_p) = p + 1 + \sum_{x=0}^{p-1} \left( \frac{x^3 + ax + b}{p} \right).
$$

The number

$$
a_p = p + 1 - \#E(\mathbb{F}_p) = -\sum_{x} \left(\frac{x^3 + ax + b}{p}\right)
$$

measures how far the count is from the "expected" $p + 1$. If the values of the Legendre symbol were random signs, the
sum of $p$ of them would typically be of size about $\sqrt p$. That guess is right, with a sharp constant:

**Hasse's theorem (1933).** $|a_p| \le 2\sqrt p$, that is,

$$
p + 1 - 2\sqrt p \le \#E(\mathbb{F}_p) \le p + 1 + 2\sqrt p.
$$

For $y^2 = x^3 + x + 1$:

| $p$ | 5 | 7 | 11 | 13 | 23 |
|---|---|---|---|---|---|
| $\#E(\mathbb{F}_p)$ | 9 | 5 | 14 | 18 | 28 |
| $a_p$ | $-3$ | $3$ | $-2$ | $-4$ | $-4$ |
| $2\sqrt p$ | 4.47 | 5.29 | 6.63 | 7.21 | 9.59 |

**Proof sketch.** Over the algebraic closure $\overline{\mathbb{F}}_p$, the **Frobenius map** $\phi(x, y) = (x^p, y^p)$
sends $E$ to itself (raise the equation to the $p$-th power; the coefficients are fixed by Fermat's little theorem) and is
a group homomorphism. Its fixed points are exactly the points with coordinates in $\mathbb{F}_p$, so
$\#E(\mathbb{F}_p) = \#\ker(1 - \phi) = \deg(1 - \phi)$ (one checks $1 - \phi$ is separable). The **degree** of maps
$E \to E$ behaves like a positive definite quadratic form: $\deg(m - n\phi) = m^2 - a_p mn + p n^2 \ge 0$ for all
integers $m$, $n$, with $\deg \phi = p$. A quadratic form $m^2 - a_p mn + pn^2$ that is never negative has discriminant
$a_p^2 - 4p \le 0$. That is Hasse's bound. (Silverman, *The Arithmetic of Elliptic Curves*, Chapter V, has every
detail.)

The proof shows more: the polynomial $T^2 - a_p T + p$ has two complex conjugate roots $\alpha, \bar\alpha$ with
$|\alpha| = \sqrt p$, and $\#E(\mathbb{F}_{p^k}) = p^k + 1 - \alpha^k - \bar\alpha^k$ for every $k$. This "all roots have
the same absolute value" is the **Riemann hypothesis for curves over finite fields**, proved for elliptic curves by
Hasse and for all curves by André Weil in the 1940s; Pierre Deligne proved the general version for varieties in 1974.
It is the finite-field cousin of the Riemann hypothesis of [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md).

### Reduction mod p and cryptography

A curve with integer coefficients can be **reduced** modulo any prime $p$. If $p \nmid \Delta$ the reduction is again an
elliptic curve (**good reduction**); the finitely many $p \mid \Delta$ are the primes of **bad reduction**. The numbers
$a_p$ for the good primes are the fingerprints of the curve, and 19.6 and [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md)
are about what they encode.

Over a large prime field, the group $E(\mathbb{F}_p)$ is the setting of **elliptic curve cryptography**: given $P$ and
$Q = kP$, finding $k$ (the elliptic curve discrete logarithm) seems to be much harder than the corresponding problem
modulo $p$, so shorter keys give the same security. The curves used in practice, such as Curve25519, have $p$ of about
256 bits. The cryptography book tells that story in full:
[Elliptic curves](https://cryptography.akadian.ca/book/15-Elliptic-Curves/).

## 19.5 The congruent number problem

*Level: advanced.* A positive integer $n$ is a **congruent number** if it is the area of a right triangle whose three
sides are all rational. ("Congruent" here is an old name, unrelated to congruences mod $n$.)

- 6 is congruent: the triangle $3, 4, 5$ has area $\tfrac12 \cdot 3 \cdot 4 = 6$.
- 5 is congruent: the triangle $\tfrac32, \tfrac{20}{3}, \tfrac{41}{6}$ has area $\tfrac12 \cdot \tfrac32 \cdot \tfrac{20}3 = 5$,
  and $\tfrac94 + \tfrac{400}9 = \tfrac{81 + 1600}{36} = \tfrac{1681}{36} = \left(\tfrac{41}6\right)^2$.
- 7 is congruent: $\tfrac{24}{5}, \tfrac{35}{12}, \tfrac{337}{60}$.
- 1, 2 and 3 are not congruent.

Arab mathematicians studied the problem in the tenth century, and Fibonacci found the triangle for 5 in the thirteenth
century. Fermat proved that 1 is not congruent, by descent: it is equivalent to his theorem that $x^4 - y^4 = z^2$ has no
solution in positive integers ([Chapter 9](09-Diophantine-Equations.md)). Scaling a triangle by $k$ scales the area by
$k^2$, so it is enough to consider **squarefree** $n$.

### The translation into an elliptic curve

**Theorem.** Let $n > 0$. Then $n$ is congruent if and only if the elliptic curve

$$
E_n: \; y^2 = x^3 - n^2 x
$$

has a rational point with $y \ne 0$.

*Proof.* Suppose $a, b, c$ are rational with $a^2 + b^2 = c^2$ and $\tfrac12 ab = n$. Put

$$
x = \left(\frac c2\right)^2, \qquad y = \frac{(b^2 - a^2)\,c}{8}.
$$

Then $x - n = (c^2 - 2ab)/4 = (a - b)^2/4$ and $x + n = (a + b)^2/4$, so
$x^3 - n^2 x = x(x - n)(x + n) = \left(\tfrac c2\right)^2 \left(\tfrac{(a-b)(a+b)}{4}\right)^2 = \left(\tfrac{c(a^2-b^2)}{8}\right)^2 = y^2$.
And $y \ne 0$ because $a \ne b$ (if $a = b$ then $c = a\sqrt 2$ would be irrational).

Conversely, let $(x, y)$ be rational with $y \ne 0$ on $E_n$. Put

$$
a = \frac{x^2 - n^2}{y}, \qquad b = \frac{2nx}{y}, \qquad c = \frac{x^2 + n^2}{y}.
$$

Then $c^2 - a^2 = \frac{(x^2 + n^2)^2 - (x^2 - n^2)^2}{y^2} = \frac{4n^2x^2}{y^2} = b^2$, and
$\tfrac12 ab = \frac{n x (x^2 - n^2)}{y^2} = \frac{n(x^3 - n^2 x)}{y^2} = n$. Since $y \neq 0$, $x \ne 0, \pm n$, so
$a$ and $b$ are nonzero, and replacing them by $|a|$ and $|b|$ (and $c$ by $|c|$) gives a genuine triangle of area $n$.
$\square$

**Worked example.** For $n = 6$, the point $(-3, 9)$ lies on $y^2 = x^3 - 36x$ ($-27 + 108 = 81$). The formulas give
$a = (9 - 36)/9 = -3$, $b = 2 \cdot 6 \cdot (-3)/9 = -4$, $c = 45/9 = 5$: the triangle $3, 4, 5$. Now double the point:
$2(-3, 9) = (25/4, -35/8)$, and the formulas give the triangle $\tfrac{7}{10}, \tfrac{120}{7}, \tfrac{1201}{70}$.
Check: $\tfrac12 \cdot \tfrac7{10} \cdot \tfrac{120}7 = 6$, and $\tfrac{49}{100} + \tfrac{14400}{49} = \tfrac{2401 + 1440000}{4900}
= \tfrac{1442401}{4900} = \left(\tfrac{1201}{70}\right)^2$. Adding the point again gives a third triangle, and so on: one
rational triangle of area $n$ gives infinitely many.

That last remark uses a fact about $E_n$: its torsion subgroup is only the four points $O, (0, 0), (\pm n, 0)$, which have
$y = 0$ (a short proof uses counting points mod primes $p \equiv 3 \pmod 4$; Koblitz, Chapter I). So:

**$n$ is congruent if and only if $E_n(\mathbb{Q})$ has positive rank.**

The triangles can be huge. Don Zagier computed the simplest triangle for $n = 157$; its sides are fractions whose
numerators and denominators have dozens of digits. A brute-force search for triangles would never find it.

### Tunnell's theorem

In 1983 Jerrold Tunnell used the theory of modular forms of half-integral weight to give a simple test. For a squarefree
odd $n$, let

$$
A(n) = \#\{(x, y, z) \in \mathbb{Z}^3 : x^2 + 2y^2 + 8z^2 = n\}, \qquad B(n) = \#\{(x, y, z) \in \mathbb{Z}^3 : x^2 + 2y^2 + 32 z^2 = n\}.
$$

(For even $n$ there are similar counts with $x^2 + 4y^2 + 8z^2$ and $x^2 + 4y^2 + 32z^2$ equal to $n/2$.)

**Tunnell's theorem.** If $n$ is congruent, then $A(n) = 2B(n)$. If the Birch and Swinnerton-Dyer conjecture (19.6) is true
for $E_n$, the converse also holds.

So Tunnell's criterion *proves* that a number is not congruent, and would prove that it is congruent, given BSD. For
example $n = 1$: $A = 2$ (from $x = \pm 1$) and $B = 2$, so $A \ne 2B$ and 1 is not congruent. For $n = 3$: $A = 4$
($x = \pm 1$, $y = \pm 1$) and $B = 4$, so 3 is not congruent. For $n = 5$ and $n = 7$: $A = B = 0$, consistent with their
being congruent (which we know directly).

A related prediction: BSD implies that every squarefree $n \equiv 5, 6, 7 \pmod 8$ is congruent. This is not proved in
general, but Ye Tian proved in 2014 that there are infinitely many squarefree congruent numbers in each of these classes,
with any prescribed number of prime factors.

## 19.6 The Birch and Swinnerton-Dyer conjecture

*Level: expert.* The rank $r$ is defined by global information (rational points), which is hard to get. The numbers
$\#E(\mathbb{F}_p)$ are local information, easy to compute. Is there a link?

### The experiment

In the early 1960s Bryan Birch and Peter Swinnerton-Dyer, at Cambridge, computed on the EDSAC 2 computer, for many curves,
the product

$$
\prod_{p \le X} \frac{\#E(\mathbb{F}_p)}{p}
$$

over good primes $p$. The idea: if $E$ has many rational points, they reduce to many points mod $p$, so $\#E(\mathbb{F}_p)$
should tend to be a little larger than $p$, and the product should grow. They found that the product grows roughly like
$C (\log X)^r$, with $r$ the rank.

**Try it in Python.** For $y^2 = x^3 - n^2 x$ with $n = 1$ (rank 0) and $n = 6$ (rank 1), and $y^2 = x^3 + 17$:

```python
from math import isqrt

def count(a, b, p):                      # number of points of y^2 = x^3 + a x + b over F_p, with O
    squares = [0] * p
    for y in range(p):
        squares[y*y % p] += 1
    return 1 + sum(squares[(x**3 + a*x + b) % p] for x in range(p))

def primes(n):
    return [q for q in range(2, n + 1) if all(q % d for d in range(2, isqrt(q) + 1))]

for a, b in [(-1, 0), (-36, 0), (0, 17)]:
    prod = 1.0
    for p in primes(3000):
        if p in (2, 3, 17):             # skip the bad primes
            continue
        prod *= count(a, b, p) / p
    print(a, b, round(prod, 2))
```

The output is roughly 1.0 for $y^2 = x^3 - x$, 5.1 for $y^2 = x^3 - 36x$ and 51 for $y^2 = x^3 + 17$, whose rank is 2.
These numbers grow slowly and wobble a lot, and this is evidence, not proof; Birch and Swinnerton-Dyer's graphs over many
curves were what made the pattern convincing.

### The L-function

The product is a crude stand-in for an **$L$-function**. For $E$ over $\mathbb{Q}$ define

$$
L(E, s) = \prod_{p \,\nmid\, \Delta} \frac{1}{1 - a_p p^{-s} + p^{1 - 2s}} \times \prod_{p \,\mid\, \Delta} (\text{simpler factors}),
$$

with $a_p = p + 1 - \#E(\mathbb{F}_p)$. By Hasse's bound the product converges for $\operatorname{Re} s > 3/2$. Formally,
at $s = 1$ the good factor is $\left(1 - \frac{a_p}{p} + \frac1p\right)^{-1} = \frac{p}{\#E(\mathbb{F}_p)}$, so the
product of 19.6's experiment is a formal $1/L(E, 1)$. "Product grows like $(\log X)^r$" suggests "$L(E, s)$ vanishes to
order $r$ at $s = 1$". But $s = 1$ is outside the region where the product converges, so first one must know that
$L(E, s)$ extends to all of $\mathbb{C}$. That follows from the **modularity theorem**
([Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md)), proved in 2001: $L(E, s)$ is the $L$-function of a modular
form, and it extends to an entire function with a functional equation relating $s$ and $2 - s$.

### The conjecture

**Birch and Swinnerton-Dyer conjecture (weak form).** For every elliptic curve $E$ over $\mathbb{Q}$, the order of
vanishing of $L(E, s)$ at $s = 1$ equals the rank of $E(\mathbb{Q})$.

The **strong form** predicts the leading coefficient: if $L(E, s) = c\,(s - 1)^r + \cdots$, then

$$
c = \frac{\Omega_E \cdot \operatorname{Reg}_E \cdot \#\text{Ш}(E) \cdot \prod_p c_p}{(\#T)^2},
$$

where $\Omega_E$ is a real period (an elliptic integral), $\operatorname{Reg}_E$ is the **regulator** (a determinant of
heights of generators, measuring how "spread out" the generators are), $c_p$ are small integers attached to the bad
primes (Tamagawa numbers), $T$ is the torsion group, and Ш is the **Tate-Shafarevich group**, the group of curves that have
points everywhere locally but not globally, which we met through Selmer's cubic in
[Chapter 18](18-p-adic-Numbers.md). The formula assumes Ш is finite, which is itself unproved in general.

### What is known

- **Coates and Wiles (1977):** for curves with complex multiplication (such as $y^2 = x^3 - n^2 x$), if $L(E, 1) \ne 0$ then
  the rank is 0.
- **Gross and Zagier (1986)** related the derivative $L'(E, 1)$ to the height of a special point (a Heegner point), and
  **Kolyvagin (1989)** showed how to bound the Selmer group using such points. Together, with modularity: *if
  $L(E, s)$ vanishes to order 0 or 1 at $s = 1$, then the rank equals that order and Ш is finite.* So the weak conjecture
  is true for analytic rank 0 and 1.
- **Very little is known** when the order of vanishing is 2 or more. There is not a single curve for which anyone has
  proved that $L(E, s)$ vanishes to order 4 or more at $s = 1$, although curves of rank 4 and higher are easy to write down.
- **Averages.** Manjul Bhargava and Arul Shankar proved (around 2010 to 2013) that the average rank of elliptic curves over
  $\mathbb{Q}$, ordered by size of coefficients, is bounded, in fact less than 1. With further work by Christopher Skinner,
  Eric Urban and Wei Zhang, this led to the theorem (Bhargava, Skinner and Zhang, 2014) that a majority of elliptic curves
  over $\mathbb{Q}$ satisfy the weak form of BSD.

The conjecture is one of the seven Millennium Prize Problems announced by the Clay Mathematics Institute in 2000, with a
prize of one million dollars for a proof. For the congruent number problem, it would mean that Tunnell's simple count
settles every case.

### A short history

Henri Poincaré in 1901 studied rational points on cubics with the chord-and-tangent method and asked, in effect, about the
rank. Louis Mordell proved finite generation in 1922, and Weil generalised it. Helmut Hasse proved his bound in the 1930s.
Birch and Swinnerton-Dyer published their conjecture in two papers, "Notes on elliptic curves I and II" (1963, 1965). Mazur's
torsion theorem appeared in 1977. In the 1980s elliptic curves entered cryptography (Neal Koblitz and Victor Miller,
independently, 1985) and, through Frey's idea, the proof of Fermat's last theorem, which is the next chapter.

## Check yourself

??? question "1. Find all rational points on $x^2 + y^2 = 2$ using lines through $(1, 1)$, and give one other than $(\pm 1, \pm 1)$."

    The line $y = 1 + t(x - 1)$ meets the circle where $x^2 + (1 + t(x-1))^2 = 2$. One root is $x = 1$; the product of the
    roots of the resulting quadratic $(1 + t^2)x^2 + 2t(1 - t)x + (t^2 - 2t - 1) = 0$ is $(t^2 - 2t - 1)/(1 + t^2)$, so
    the other root is $x = \frac{t^2 - 2t - 1}{t^2 + 1}$, and $y = \frac{1 - 2t - t^2}{t^2 + 1}$. With $t = 2$:
    $(-\tfrac15, -\tfrac75)$. Check: $\tfrac1{25} + \tfrac{49}{25} = 2$.

??? question "2. On $y^2 = x^3 - x + 1$, compute $(-1, 1) + (1, 1)$ and $(3, 5) + (5, 11)$."

    $(-1,1) + (1,1)$: $\lambda = 0$, $x_3 = 0 + 1 - 1 = 0$, $y_3 = 0 - 1 = -1$. So the sum is $(0, -1)$. (The line $y = 1$
    meets the curve at $-1, 0, 1$, so the third point is $(0, 1)$, reflected.)
    $(3,5) + (5,11)$: $\lambda = 6/2 = 3$, $x_3 = 9 - 3 - 5 = 1$, $y_3 = 3(3 - 1) - 5 = 1$. So the sum is $(1, 1)$.
    Check: $1 = 1 - 1 + 1$.

??? question "3. On $y^2 = x^3 - x + 1$, compute $2Q$ for $Q = (0, 1)$."

    $\lambda = (3 \cdot 0 - 1)/(2 \cdot 1) = -\tfrac12$. $x_3 = \tfrac14 - 0 - 0 = \tfrac14$,
    $y_3 = -\tfrac12 (0 - \tfrac14) - 1 = \tfrac18 - 1 = -\tfrac78$. So $2Q = (\tfrac14, -\tfrac78)$. Check:
    $\tfrac{49}{64}$ and $\tfrac1{64} - \tfrac{16}{64} + \tfrac{64}{64} = \tfrac{49}{64}$.

??? question "4. Explain why $(3, 5)$ has infinite order on $y^2 = x^3 - 2$, and deduce that $y^2 = x^3 - 2$ has infinitely many rational solutions."

    $2(3, 5) = (129/100, -383/1000)$ has non-integer coordinates. If $(3,5)$ had finite order, so would $2(3,5)$, and by
    Nagell-Lutz its coordinates would be integers. So $(3,5)$ has infinite order, and its multiples $n(3,5)$ are infinitely
    many distinct rational points.

??? question "5. Find the torsion subgroup of $y^2 = x^3 - x$."

    By Nagell-Lutz, torsion points have integer coordinates with $y = 0$ or $y^2 \mid 4a^3 + 27b^2 = -4$, so $y \in \{0, \pm 1,
    \pm 2\}$. $y = 0$: $x = 0, \pm 1$. $y^2 = 1$: $x^3 - x = 1$ has no integer root. $y^2 = 4$: $x^3 - x = 4$ has no integer
    root. So the torsion is $\{O, (0,0), (1,0), (-1,0)\}$, each of order 2: the group $\mathbb{Z}/2 \times \mathbb{Z}/2$.

??? question "6. Count the points of $y^2 = x^3 + x + 1$ over $\mathbb{F}_7$ and check Hasse's bound."

    Squares mod 7: $0, 1, 2, 4$. Values of $x^3 + x + 1$ for $x = 0, \ldots, 6$: $1, 3, 11 \equiv 4, 31 \equiv 3,
    69 \equiv 6, 131 \equiv 5, 223 \equiv 6$. Squares among them: $1$ (at $x = 0$) and $4$ (at $x = 2$), each giving two
    $y$'s: $(0, \pm 1)$, $(2, \pm 2)$, i.e. $(0,1), (0,6), (2,2), (2,5)$. So $\#E(\mathbb{F}_7) = 4 + 1 = 5$, $a_7 = 3$,
    and $|3| \le 2\sqrt 7 \approx 5.29$.

??? question "7. Use the point $(-4, 6)$ on $y^2 = x^3 - 25x$ to find a rational right triangle with area 5."

    Check: $-64 + 100 = 36$. Then $a = (16 - 25)/6 = -\tfrac32$, $b = 2 \cdot 5 \cdot (-4)/6 = -\tfrac{20}3$,
    $c = (16 + 25)/6 = \tfrac{41}6$. Taking absolute values: the triangle $\tfrac32, \tfrac{20}3, \tfrac{41}6$, area 5.

??? question "8. Use Tunnell's criterion to show that 3 is not a congruent number."

    $A(3) = \#\{x^2 + 2y^2 + 8z^2 = 3\}$: $z = 0$ (else $8z^2 > 3$), $x^2 + 2y^2 = 3$ gives $x = \pm1$, $y = \pm1$: 4
    solutions. $B(3) = \#\{x^2 + 2y^2 + 32z^2 = 3\}$: also 4. Since $A = 4 \ne 8 = 2B$, the unconditional half of Tunnell's
    theorem says 3 is not congruent.

??? question "9. Show that the rational points of $y^2 = x^3$ are exactly $(t^2, t^3)$ for rational $t$ (and that this curve is not elliptic)."

    $4a^3 + 27b^2 = 0$, so it is singular (a cusp at the origin). If $(x, y)$ is a rational point with $x \ne 0$, let
    $t = y/x$. Then $t^2 = y^2/x^2 = x^3/x^2 = x$, and $y = tx = t^3$. The origin is $t = 0$. Conversely $(t^2)^3 = (t^3)^2$.
    So one line through the singular point (slope $t$) finds every point, as for a conic.

??? question "10. In $E(\mathbb{F}_5)$ for $y^2 = x^3 + x + 1$, what are the orders of $(2, 1)$ and of $(0, 1)$?"

    From 19.4, with $P = (0, 1)$: $3P = (2, 1)$ and $9P = O$, with no smaller multiple of $P$ equal to $O$. So $P$ has order 9.
    $(2,1) = 3P$ has order $9/\gcd(9, 3) = 3$. Check directly: $2(2,1)$: $\lambda = (3 \cdot 4 + 1)/2 = 13 \cdot 3 = 39 \equiv 4$,
    $x = 16 - 4 = 12 \equiv 2$, $y = 4(2 - 2) - 1 = -1 \equiv 4$, so $2(2,1) = (2, 4) = -(2,1)$, and $3(2,1) = O$.

??? question "11. Explain in a few lines why the product $\prod_{p \le X} \#E(\mathbb{F}_p)/p$ might be expected to grow when $E$ has positive rank."

    If $E(\mathbb{Q})$ is infinite, its points reduce mod $p$ to points of $E(\mathbb{F}_p)$, adding "extra" structure: the
    rational points create solutions mod every $p$, and heuristically make $\#E(\mathbb{F}_p)$ slightly larger than
    $p$ on average. Many factors slightly larger than 1 multiply to something that grows. Birch and Swinnerton-Dyer found the
    growth to be like $(\log X)^r$. This is a heuristic only; the actual conjecture is stated with $L(E, s)$ because the product
    does not converge at $s = 1$.

## What you learned

- A conic with one rational point has infinitely many, all found by lines through it; a line through two rational points
  of a cubic meets it in a third.
- An elliptic curve $y^2 = x^3 + ax + b$ with $4a^3 + 27b^2 \ne 0$ is an abelian group under the chord-and-tangent rule,
  with explicit formulas and $O$ as identity.
- Mordell: $E(\mathbb{Q}) \cong \mathbb{Z}^r \oplus T$. Nagell-Lutz finds the torsion, Mazur lists the fifteen possible
  torsion groups; the rank is mysterious.
- Over $\mathbb{F}_p$, $\#E(\mathbb{F}_p) = p + 1 - a_p$ with $|a_p| \le 2\sqrt p$ (Hasse); these groups power elliptic
  curve cryptography.
- $n$ is congruent exactly when $y^2 = x^3 - n^2x$ has positive rank; Tunnell's criterion decides it, assuming BSD.
- BSD says the rank is the order of vanishing of $L(E, s)$ at $s = 1$; it is proved for analytic rank 0 and 1 and open
  beyond.

**Next:** [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md), modular forms, and how they and elliptic curves
together proved Fermat's last theorem.

## Further reading

- J. H. Silverman and J. Tate, *Rational Points on Elliptic Curves*, 1992 (2nd ed. 2015): the best first book; group
  law, Nagell-Lutz, Mordell's theorem, curves over finite fields.
- J. H. Silverman, *The Arithmetic of Elliptic Curves*, 1986 (2nd ed. 2009): the standard graduate text.
- N. Koblitz, *Introduction to Elliptic Curves and Modular Forms*, 1984 (2nd ed. 1993): built around the congruent number
  problem and Tunnell's theorem.
- J. W. S. Cassels, *Lectures on Elliptic Curves*, 1991.
- J. B. Tunnell, "A classical Diophantine problem and modular forms of weight 3/2", *Inventiones Mathematicae* 72, 1983.
- B. J. Birch and H. P. F. Swinnerton-Dyer, "Notes on elliptic curves II", *Journal für die reine und angewandte
  Mathematik* 218, 1965.
- A. Wiles, "The Birch and Swinnerton-Dyer conjecture", the Clay Mathematics Institute's official problem description, 2000.
- On this site: the cryptography book's [Elliptic curves](https://cryptography.akadian.ca/book/15-Elliptic-Curves/) and
  [Discrete log systems](https://cryptography.akadian.ca/book/14-Discrete-Log-Systems/); the gentler lessons
  [Pythagorean triples](../../topics/number-theory/level-7/05-pythagorean-triples.md) and
  [Open problems](../../topics/number-theory/level-8/05-open-problems.md) (Topics); in the Geometry book,
  [Projective geometry](../geometry/18-Projective-Geometry.md); in the Algebra book, [Groups](../algebra/13-Groups.md).
