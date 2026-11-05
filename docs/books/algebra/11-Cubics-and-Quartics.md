# 11. Cubics and quartics

*Every quadratic is solved by one formula. Is there a formula like it for cubics, with cube roots in place of square
roots? There is, and finding it was the great mathematical drama of sixteenth-century Italy. In this chapter you will
reduce any cubic to a simpler one, derive Cardano's formula and use it, meet the case where the formula forces you
through complex numbers to reach three real answers, solve the same case with trigonometry instead, and solve the
quartic by Ferrari's method. Then you will step back, as Lagrange did around 1770, and see the single pattern behind
all these formulas, and why that pattern breaks at degree five.*

!!! abstract "In this chapter"
    **You will learn:**

    - the history of the cubic and quartic formulas, as far as the sources let us tell it
    - how a substitution removes the $x^2$ term of a cubic and the $x^3$ term of a quartic
    - Cardano's formula, how to use it, and how to get all three roots from it
    - the irreducible case, and why it made complex numbers unavoidable
    - the trigonometric solution of a cubic with three real roots
    - Ferrari's method for the quartic, and the discriminant of a cubic and what its sign says
    - Lagrange resolvents: the one idea behind the formulas for degrees 2, 3 and 4, and why it fails at degree 5

    **You need:** [Chapter 5](05-Quadratics.md) (completing the square), [Chapter 9](09-Complex-Numbers.md)
    (complex numbers, polar form, cube roots of unity) and [Chapter 10](10-Roots-and-Coefficients.md) (Vieta's formulas
    and symmetric polynomials). For a gentler look at complex numbers: the Topics lessons
    [Complex numbers a + bi](../../topics/numbers/level-7/03-complex-arithmetic.md) and
    [Roots of unity](../../topics/numbers/level-8/03-roots-of-unity.md).

    **Levels:** 11.1 to 11.3 are intermediate; 11.4 to 11.7 are advanced; 11.8 is expert.

## 11.1 The sixteenth-century contest

The quadratic formula, in the form of recipes with words instead of symbols, was old by 1500: the Babylonians had
worked examples, and al-Khwarizmi had given systematic rules with geometric proofs in the ninth century
([Chapter 5](05-Quadratics.md)). The cubic resisted. Luca Pacioli, in his widely read *Summa* of 1494, said a general
rule for cubic equations was as yet unknown.

The story of how that changed comes to us mainly from the people involved, and their accounts disagree in places. What
is reasonably secure is this.

- **Scipione del Ferro** (1465-1526), a professor at Bologna, found how to solve cubics of the form
  "cube and things equal to number", in modern notation $x^3+px=q$ with $p,q>0$, probably early in the 1500s. He did not
  publish. In that world a secret method was capital: university posts were renewed, and reputations were made, by
  winning public problem-solving challenges. Before he died he passed the method to a student, Antonio Maria Fior.
- **Niccolò Fontana**, known as **Tartaglia** ("the stammerer"; c. 1500-1557), a teacher of mathematics in Venice,
  claimed to have found methods for some cubics himself. In 1535 Fior challenged him to a contest; each set the other
  thirty problems. Fior's were all of his one type. Tartaglia found the method shortly before the deadline, by his own
  account, and solved them all; Fior solved few or none of Tartaglia's.
- **Gerolamo Cardano** (1501-1576), physician, mathematician and prolific author in Milan, heard of this and pressed
  Tartaglia for the method. In 1539 Tartaglia gave it to him, in the form of a poem, after Cardano promised (Tartaglia
  says swore) not to publish it.
- Cardano worked out proofs and extended the method to all the cases of the cubic (there were many "cases" because
  negative numbers were not accepted as coefficients, so $x^3=px+q$ and $x^3+q=px$ counted as different problems). His
  student **Lodovico Ferrari** (1522-1565) then found a way to reduce the quartic to a cubic.
- In 1543 Cardano and Ferrari saw del Ferro's papers in Bologna and found the method there, earlier than Tartaglia's.
  Cardano considered himself released from his promise. His book *Ars Magna* (1545) published the solutions of the cubic
  and the quartic, crediting del Ferro and Tartaglia for the cubic and Ferrari for the quartic.
- Tartaglia was furious and attacked Cardano in print. Ferrari answered on Cardano's behalf, and in 1547-48 the two
  exchanged a series of printed challenges, ending in a public dispute in Milan in 1548.

Two things in this story matter for the mathematics. First, the method was found for a *reduced* cubic, with no $x^2$
term; the reduction of the general cubic is the next section. Second, in the cases where the cubic has three real roots,
the method produced square roots of negative numbers. Cardano noticed and could not make sense of it. Rafael Bombelli,
in his *L'Algebra* (1572), did: section 11.4.

## 11.2 Depressing the cubic

A general cubic $ax^3+bx^2+cx+d=0$ ($a\ne0$) can be divided by $a$, so take it **monic**:

$$x^3+bx^2+cx+d=0.$$

For the quadratic $x^2+bx+c$, the substitution $x=y-\frac b2$ removes the $x$ term; that is what completing the square
does. For the cubic, shift by a third of $b$ instead.

**Claim.** Putting $x=y-\frac b3$ turns $x^3+bx^2+cx+d$ into

$$y^3+py+q,\qquad p=c-\frac{b^2}{3},\qquad q=\frac{2b^3}{27}-\frac{bc}{3}+d.$$

*Why.* Expand: $(y-\frac b3)^3=y^3-by^2+\frac{b^2}{3}y-\frac{b^3}{27}$ and $b(y-\frac b3)^2=by^2-\frac{2b^2}{3}y+\frac{b^3}{9}$.
The $y^2$ terms cancel, which is the whole point of the choice $\frac b3$. Collect the rest:
the $y$ coefficient is $\frac{b^2}{3}-\frac{2b^2}{3}+c=c-\frac{b^2}{3}$, and the constant is
$-\frac{b^3}{27}+\frac{b^3}{9}-\frac{bc}{3}+d=\frac{2b^3}{27}-\frac{bc}{3}+d$. $\square$

A cubic with no square term is called **depressed** (an old word for "pressed down" in degree). Why $\frac b3$ works:
by Vieta, the three roots of the cubic add up to $-b$. Shifting every root by $\frac b3$ makes them add up to $0$, and
then the $x^2$ coefficient, which is minus the sum of the roots, is $0$.

**Example 1.** $x^3-6x^2+11x-6$: here $b=-6$, $c=11$, $d=-6$, so $x=y+2$ and

$$p=11-\frac{36}{3}=-1,\qquad q=\frac{2(-216)}{27}-\frac{(-6)(11)}{3}-6=-16+22-6=0.$$

The depressed cubic is $y^3-y=y(y-1)(y+1)$, with roots $0,\pm1$. So $x=2,3,1$, matching Chapter 10.

**Example 2.** $x^3-3x^2+9x-5$: $b=-3$, so $x=y+1$, and $p=9-3=6$, $q=-2+9-5=2$. The depressed cubic is
$y^3+6y+2=0$. We solve it in the next section.

The same trick works in every degree: $x=y-\frac{b}{n}$ removes the $x^{n-1}$ term of a monic polynomial of degree $n$.
For the quartic $x^4+bx^3+cx^2+dx+e$ the shift is $x=y-\frac b4$.

## 11.3 Cardano's formula

We want to solve $y^3+py+q=0$.

**The idea.** Look for the root as a sum of two pieces, $y=u+v$. Then

$$y^3=(u+v)^3=u^3+v^3+3uv(u+v)=u^3+v^3+3uv\,y.$$

So $y^3-3uv\,y-(u^3+v^3)=0$. This is our equation if

$$3uv=-p\qquad\text{and}\qquad u^3+v^3=-q.$$

Two unknowns, two conditions. Cube the first: $u^3v^3=-\frac{p^3}{27}$. So the two numbers $u^3$ and $v^3$ have a known
sum, $-q$, and a known product, $-\frac{p^3}{27}$. By Vieta for quadratics, they are the two roots of

$$t^2+qt-\frac{p^3}{27}=0,$$

called the **resolvent quadratic**. The quadratic formula gives

$$u^3=-\frac q2+\sqrt{\frac{q^2}{4}+\frac{p^3}{27}},\qquad v^3=-\frac q2-\sqrt{\frac{q^2}{4}+\frac{p^3}{27}}.$$

**Cardano's formula.** A root of $y^3+py+q=0$ is

$$y=\sqrt[3]{-\frac q2+\sqrt{\frac{q^2}{4}+\frac{p^3}{27}}}+\sqrt[3]{-\frac q2-\sqrt{\frac{q^2}{4}+\frac{p^3}{27}}},$$

where the two cube roots must be chosen so that their product is $-\frac p3$.

That last condition is easy to forget and important. Every nonzero complex number has three cube roots
([Chapter 9](09-Complex-Numbers.md)): if $u$ is one, the others are $u\omega$ and $u\omega^2$, where

$$\omega=-\frac12+\frac{\sqrt3}{2}i,\qquad \omega^3=1,\qquad 1+\omega+\omega^2=0.$$

Choosing $u$ fixes $v=-\frac{p}{3u}$. The three choices of $u$ give the three roots:

$$y_1=u+v,\qquad y_2=u\omega+v\omega^2,\qquad y_3=u\omega^2+v\omega.$$

Each is a root because each pair still has product $uv\omega^3=uv=-\frac p3$ and cubes adding to $u^3+v^3=-q$.

**Example 3 (Cardano's own example).** *Ars Magna* works the case "cube and six things equal twenty",
$y^3+6y=20$, that is $y^3+6y-20=0$. Here $p=6$, $q=-20$:

$$\frac{q^2}{4}+\frac{p^3}{27}=100+8=108,\qquad u^3=10+\sqrt{108}=10+6\sqrt3,\qquad v^3=10-6\sqrt3.$$

So $y=\sqrt[3]{10+6\sqrt3}+\sqrt[3]{10-6\sqrt3}$. That looks complicated, but $(1+\sqrt3)^3=1+3\sqrt3+9+3\sqrt3=10+6\sqrt3$,
and likewise $(1-\sqrt3)^3=10-6\sqrt3$. So $u=1+\sqrt3$, $v=1-\sqrt3$ (check: $uv=1-3=-2=-\frac p3$), and

$$y_1=(1+\sqrt3)+(1-\sqrt3)=2.$$

Check: $8+12-20=0$. The other two roots:
$y_2=u\omega+v\omega^2=-\frac12(u+v)+\frac{\sqrt3}{2}i(u-v)=-1+\frac{\sqrt3}{2}\cdot2\sqrt3\,i=-1+3i$, and $y_3=-1-3i$.
Check with Vieta: $2+(-1+3i)+(-1-3i)=0$, as the depressed cubic needs.

The formula can produce a simple number in a complicated disguise. Recognising $\sqrt[3]{10+6\sqrt3}$ as $1+\sqrt3$ is
called **denesting** a radical, and there is no simple general rule for when it can be done.

**Example 4.** Finish Example 2: $y^3+6y+2=0$, so $p=6$, $q=2$:

$$\frac{q^2}{4}+\frac{p^3}{27}=1+8=9,\qquad u^3=-1+3=2,\qquad v^3=-1-3=-4.$$

With real cube roots, $u=\sqrt[3]2$ and $v=-\sqrt[3]4$, and $uv=-\sqrt[3]8=-2=-\frac p3$, as required. So
$y=\sqrt[3]2-\sqrt[3]4$, and the real root of the original cubic is

$$x=1+\sqrt[3]2-\sqrt[3]4\approx0.6725.$$

Check numerically: with $x=0.672520$, $x^3-3x^2+9x-5\approx0.304169-1.356849+6.052680-5=0.000000$ (to six decimals).

**Try it in Python.** With complex arithmetic the whole recipe, all three roots included, is a few lines:

```python
import cmath

def cardano(p, q):
    """All three roots of y^3 + p*y + q = 0 (p, q real or complex)."""
    w = complex(-0.5, 3 ** 0.5 / 2)                  # a cube root of unity
    s = cmath.sqrt(q * q / 4 + p ** 3 / 27)
    u3 = -q / 2 + s
    if abs(u3) < 1e-14:                               # pick the other sign if u^3 = 0
        u3 = -q / 2 - s
    u = u3 ** (1 / 3) if u3 != 0 else 0               # one complex cube root
    roots = []
    for k in range(3):
        uk = u * w ** k
        vk = -p / (3 * uk) if uk != 0 else 0          # forced by u*v = -p/3
        roots.append(uk + vk)
    return roots

for r in cardano(6, -20):
    print(round(r.real, 10), round(r.imag, 10))       # 2 0, -1 3, -1 -3 (in some order)
```

## 11.4 The irreducible case

*Level: advanced.*

Try the formula on $y^3-15y-4=0$, the example Bombelli used. Here $p=-15$, $q=-4$:

$$\frac{q^2}{4}+\frac{p^3}{27}=4-125=-121.$$

The formula says

$$y=\sqrt[3]{2+\sqrt{-121}}+\sqrt[3]{2-\sqrt{-121}}=\sqrt[3]{2+11i}+\sqrt[3]{2-11i}.$$

Yet you can see a root by inspection: $4^3-15\cdot4-4=64-60-4=0$. In fact the cubic factors as
$(y-4)(y^2+4y+1)$, and its roots are $4$ and $-2\pm\sqrt3$: three real numbers. The formula has gone through the square
root of a negative number to describe them.

Cardano had met this and called such quantities useless. Bombelli's step was to take the expressions seriously and
calculate with them by the ordinary rules plus $\sqrt{-1}\cdot\sqrt{-1}=-1$. He guessed that the cube root of $2+11i$
should look like $a+bi$, and found $a=2$, $b=1$:

$$(2+i)^3=8+3\cdot4\cdot i+3\cdot2\cdot i^2+i^3=8+12i-6-i=2+11i.$$

Similarly $(2-i)^3=2-11i$. With $u=2+i$ and $v=2-i$ (check: $uv=4+1=5=-\frac p3$),

$$y_1=(2+i)+(2-i)=4.$$

The imaginary parts cancel, and the real root appears. The other two choices give
$y_2=u\omega+v\omega^2=-\frac12(u+v)+\frac{\sqrt3}{2}i(u-v)=-2+\frac{\sqrt3}{2}i\cdot2i=-2-\sqrt3$ and
$y_3=-2+\sqrt3$.

This is the moment when complex numbers stopped being an embarrassment to be avoided and became a tool. In the
quadratic case you could always say "no solution" when a square root of a negative number appeared, and be right:
$x^2+1=0$ has no real roots. Here that answer is wrong: three perfectly real roots exist, and the formula reaches
them only through $\sqrt{-121}$.

Can a cleverer formula avoid it? When does this happen? Compute when $\frac{q^2}{4}+\frac{p^3}{27}<0$. In 11.7 we will
see that this is exactly when the cubic has three different real roots. And there is a theorem saying that the detour
is unavoidable.

**Theorem (casus irreducibilis).** If a cubic with rational coefficients is irreducible over the rationals (it has no
rational root) and has three real roots, then none of its roots can be written using rational numbers, the four
operations and *real* radicals ($\sqrt[n]{\ }$ of real numbers) alone.

The proof needs Galois theory, and is in [Chapter 20](20-Galois-Theory.md); the idea is that adjoining real radicals
can never produce the kind of field extension that the three roots need. (Bombelli's example is not irreducible: it
has the rational root $4$, so there the theorem does not apply, and the root is simply $4$. Take
$y^3-3y+1$ for an irreducible example; section 11.5 solves it.)

**When guessing fails.** Bombelli was lucky that $2+11i$ had a cube root with integer parts. In general, take cube
roots of a complex number in polar form ([Chapter 9](09-Complex-Numbers.md)). For $y^3-3y+1=0$: $p=-3$, $q=1$, and

$$\frac{q^2}{4}+\frac{p^3}{27}=\frac14-1=-\frac34,\qquad u^3=-\frac12+\frac{\sqrt3}{2}i=\cos\frac{2\pi}{3}+i\sin\frac{2\pi}{3}.$$

This has modulus $1$ and angle $\frac{2\pi}3$, so one cube root is $u=\cos\frac{2\pi}9+i\sin\frac{2\pi}9$, and
$v=\bar u$ (check: $uv=|u|^2=1=-\frac p3$). Then

$$y=u+\bar u=2\cos\frac{2\pi}{9}\approx1.5321.$$

Check: $1.5321^3-3(1.5321)+1\approx3.5963-4.5963+1=0.0000$. So Cardano's formula, read in polar form, has turned into a
cosine. The angle had to be divided by three, and dividing an angle by three is exactly what the next section does
directly. It is also the problem of *trisecting an angle*, and [Chapter 19](19-Fields-and-Extensions.md) proves that
it cannot be done with straightedge and compass in general. The reason is this very cubic: $\frac{2\pi}{9}$ is
$40^\circ$, a third of $120^\circ$, and $2\cos40^\circ$ is a root of $y^3-3y+1$, a cubic with no rational root, which
square roots alone can never solve.

## 11.5 The trigonometric solution

*Level: advanced.*

When the three roots are real, a different formula avoids complex numbers entirely, by replacing cube roots with
cosines. It goes back to François Viète, and rests on the triple-angle identity

$$\cos3\theta=4\cos^3\theta-3\cos\theta,$$

which you can check from $\cos3\theta=\mathrm{Re}\,(\cos\theta+i\sin\theta)^3$ (De Moivre, [Chapter 9](09-Complex-Numbers.md)):
$\cos^3\theta-3\cos\theta\sin^2\theta=\cos^3\theta-3\cos\theta(1-\cos^2\theta)=4\cos^3\theta-3\cos\theta$.

Rewritten, $4c^3-3c-\cos3\theta=0$ for $c=\cos\theta$: a depressed cubic whose roots are cosines. We stretch our cubic
to look like it.

**Method.** Take $y^3+py+q=0$ with $p<0$. Put $y=2k\cos\theta$ with $k=\sqrt{-p/3}$, so $p=-3k^2$. Then

$$y^3+py+q=8k^3\cos^3\theta-6k^3\cos\theta+q=2k^3\left(4\cos^3\theta-3\cos\theta\right)+q=2k^3\cos3\theta+q.$$

So $y$ is a root when

$$\cos3\theta=-\frac{q}{2k^3}.$$

This has solutions when the right side lies between $-1$ and $1$, that is, when $\frac{q^2}{4}\le k^6=-\frac{p^3}{27}$,
or $\frac{q^2}{4}+\frac{p^3}{27}\le0$: exactly the irreducible case where Cardano's formula needed complex numbers. If
$\theta_0$ is one solution, so are $\theta_0+\frac{2\pi}3$ and $\theta_0+\frac{4\pi}3$ (adding $2\pi$ to $3\theta$), and the
three roots are

$$y_j=2k\cos\left(\theta_0+\frac{2\pi j}{3}\right),\qquad j=0,1,2,\qquad\theta_0=\frac13\arccos\left(-\frac{q}{2k^3}\right).$$

**Example 5.** Bombelli's cubic $y^3-15y-4$: $k=\sqrt5$, $2k^3=10\sqrt5$, and $\cos3\theta_0=\frac{4}{10\sqrt5}\approx0.17889$.
Then $3\theta_0\approx1.39094$, $\theta_0\approx0.46365$ and

$$y_0=2\sqrt5\cos(0.46365)=4.0000,\quad y_1=2\sqrt5\cos(0.46365+2.09440)\approx-3.7321,\quad y_2\approx-0.2679,$$

which are $4$ and $-2\mp\sqrt3$. (In fact $\theta_0=\arctan\frac12$ exactly here, since $\cos(\arctan\frac12)=\frac{2}{\sqrt5}$.)

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 250" role="img" aria-label="A circle of radius 2 times root 5 centred on a number line. Three points on the circle form an equilateral triangle, at angles theta, theta plus 120 degrees and theta plus 240 degrees. Dashed lines drop from each point to the line, landing at minus 3.73, minus 0.27 and 4: the three roots of y cubed minus 15 y minus 4.">
  <line x1="95" y1="125" x2="400" y2="125" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="405,125 397,121 397,129" fill="currentColor"/>
  <circle cx="210" cy="125" r="98.4" fill="none" stroke="#9cc9ea" stroke-width="2.5"/>
  <polygon points="298.0,81.0 127.9,70.8 204.1,223.2" fill="#7ccf9a" fill-opacity="0.25" stroke="#7ccf9a" stroke-width="2"/>
  <line x1="298.0" y1="81.0" x2="298.0" y2="125" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="127.9" y1="70.8" x2="127.9" y2="125" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="204.1" y1="223.2" x2="204.1" y2="125" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/>
  <circle cx="298.0" cy="81.0" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="127.9" cy="70.8" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="204.1" cy="223.2" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="298.0" cy="125" r="3.5" fill="currentColor"/>
  <circle cx="127.9" cy="125" r="3.5" fill="currentColor"/>
  <circle cx="204.1" cy="125" r="3.5" fill="currentColor"/>
  <circle cx="210" cy="125" r="2" fill="currentColor"/>
  <line x1="210" y1="125" x2="298.0" y2="81.0" stroke="currentColor" stroke-width="1"/>
  <text x="252" y="96" font-size="12" fill="currentColor">θ₀</text>
  <text x="304" y="143" font-size="13" fill="currentColor">4</text>
  <text x="104" y="143" font-size="13" fill="currentColor">−3.73</text>
  <text x="160" y="118" font-size="13" fill="currentColor">−0.27</text>
  <text x="12" y="30" font-size="12" fill="currentColor">radius 2√5</text>
  <text x="12" y="240" font-size="12" fill="currentColor">roots = shadows of the triangle's corners</text>
</svg>
</div>

The picture shows what the formula says: the three real roots of a depressed cubic are the shadows, on a line, of the
corners of an equilateral triangle inscribed in a circle. They add up to zero because the corners of an equilateral
triangle centred at the origin do.

**Example 6.** $y^3-3y+1=0$ (irreducible: the candidates $\pm1$ fail). $k=1$, $\cos3\theta_0=-\frac12$, so
$3\theta_0=\frac{2\pi}{3}$ and $\theta_0=\frac{2\pi}{9}$. The roots are

$$2\cos\frac{2\pi}{9}\approx1.5321,\qquad 2\cos\frac{8\pi}{9}\approx-1.8794,\qquad 2\cos\frac{14\pi}{9}\approx0.3473.$$

By the casus irreducibilis, no formula in real radicals exists for these; the cosine formula is the honest real answer.

## 11.6 Ferrari's quartic method

*Level: advanced.*

Ferrari's idea is to complete the square twice: once in the obvious way, and once more by adding a cleverly chosen
quantity to both sides. First depress the quartic with $x=y-\frac b4$, to get

$$y^4+py^2+qy+r=0.$$

If $q=0$ this is a quadratic in $y^2$ ([Chapter 5](05-Quadratics.md)); assume $q\ne0$.

**Step 1.** Move the lower terms across: $y^4=-py^2-qy-r$.

**Step 2.** For any number $m$, add $2my^2+m^2$ to both sides. The left side becomes a perfect square:

$$(y^2+m)^2=(2m-p)\,y^2-q\,y+(m^2-r).$$

**Step 3.** Choose $m$ so that the right side is a perfect square in $y$ too. A quadratic $Ay^2+By+C$ is a perfect square
$(\sqrt A\,y+\sqrt C)^2$ (up to sign) exactly when its discriminant is zero: $B^2=4AC$. Here that is

$$q^2=4(2m-p)(m^2-r).$$

This is a cubic equation for $m$, the **resolvent cubic**. Solve it by 11.3 and take any root $m$ with $2m\ne p$ (one
exists since $q\ne0$).

**Step 4.** Now the equation reads $(y^2+m)^2=(2m-p)\left(y-\frac{q}{2(2m-p)}\right)^2$. Take square roots:

$$y^2+m=\pm\sqrt{2m-p}\left(y-\frac{q}{2(2m-p)}\right),$$

two quadratics in $y$. Their four roots are the roots of the quartic.

**Example 7.** Solve $y^4-2y^2+8y-3=0$. Here $p=-2$, $q=8$, $r=-3$. The resolvent condition
$64=4(2m+2)(m^2+3)$ simplifies to $8=(m+1)(m^2+3)$, and $m=1$ works ($2\cdot4=8$). Then

$$(y^2+1)^2=4y^2-8y+4=4(y-1)^2,$$

so $y^2+1=\pm2(y-1)$:

- $y^2+1=2y-2$ gives $y^2-2y+3=0$, so $y=1\pm i\sqrt2$;
- $y^2+1=-2y+2$ gives $y^2+2y-1=0$, so $y=-1\pm\sqrt2$.

Check: $(y^2-2y+3)(y^2+2y-1)=y^4-2y^2+8y-3$. Also by Vieta the four roots should add to $0$:
$(1+1)+(-1-1)=0$.

**Example 8.** Solve $y^4+4y-1=0$. Here $p=0$, $q=4$, $r=-1$: the condition $16=4\cdot2m\,(m^2+1)$ is $m(m^2+1)=2$, so
$m=1$. Then $(y^2+1)^2=2y^2-4y+2=2(y-1)^2$, so $y^2+1=\pm\sqrt2\,(y-1)$:

- $y^2+\sqrt2\,y+1-\sqrt2=0$ gives $y=\dfrac{-\sqrt2\pm\sqrt{4\sqrt2-2}}{2}\approx0.2490$ or $-1.6633$;
- $y^2-\sqrt2\,y+1+\sqrt2=0$ has discriminant $2-4-4\sqrt2<0$, so $y=\dfrac{\sqrt2\pm i\sqrt{2+4\sqrt2}}{2}\approx0.7071\pm1.3836i$.

The general formula for the quartic, written out in full, fills a page. Nobody uses it; the method is what matters.

## 11.7 The discriminant

*Level: advanced.*

In [Chapter 10](10-Roots-and-Coefficients.md) we saw that $(r_1-r_2)^2=b^2-4c$ for the roots of $x^2+bx+c$. The same
quantity exists in every degree.

**Definition.** The **discriminant** of a monic polynomial with roots $r_1,\dots,r_n$ is

$$\Delta=\prod_{i<j}(r_i-r_j)^2.$$

(For a polynomial with leading coefficient $a$, multiply by $a^{2n-2}$; this keeps $\Delta$ a polynomial in the
coefficients.)

$\Delta=0$ exactly when two roots are equal, which is why it is called the discriminant: it tells repeated roots apart
from distinct ones. And $\Delta$ is symmetric (permuting the roots only reorders the factors, and squaring kills any
sign), so by the theorem of 10.5 it is a polynomial in the coefficients.

**Theorem.** The discriminant of $y^3+py+q$ is $\Delta=-4p^3-27q^2$.

*Proof.* Let $f(y)=(y-r_1)(y-r_2)(y-r_3)$. By the product rule, $f'(r_1)=(r_1-r_2)(r_1-r_3)$, and similarly for $r_2$,
$r_3$. Multiplying,

$$f'(r_1)f'(r_2)f'(r_3)=\prod_{i\ne j}(r_i-r_j)=\prod_{i<j}(r_i-r_j)(r_j-r_i)=(-1)^3\prod_{i<j}(r_i-r_j)^2=-\Delta,$$

since there are three pairs $i<j$. Now $f'(y)=3y^2+p$, and Vieta gives $e_1=0$, $e_2=p$, $e_3=-q$. Expand

$$\prod_i(3r_i^2+p)=27(r_1r_2r_3)^2+9p\left(r_1^2r_2^2+r_1^2r_3^2+r_2^2r_3^2\right)+3p^2\left(r_1^2+r_2^2+r_3^2\right)+p^3.$$

From 10.4 and 10.5: $(r_1r_2r_3)^2=e_3^2=q^2$; $\sum r_i^2r_j^2=e_2^2-2e_1e_3=p^2$; $\sum r_i^2=e_1^2-2e_2=-2p$. So the
product is $27q^2+9p^3-6p^3+p^3=27q^2+4p^3$, and $\Delta=-4p^3-27q^2$. $\square$

For the full cubic $ax^3+bx^2+cx+d$ the same computation (longer) gives

$$\Delta=b^2c^2-4ac^3-4b^3d-27a^2d^2+18abcd.$$

Check with $a=1$, $b=0$, $c=p$, $d=q$: $-4p^3-27q^2$.

**Theorem (what the sign says).** For a cubic with real coefficients:

- $\Delta>0$: three different real roots;
- $\Delta<0$: one real root and two non-real complex conjugate roots;
- $\Delta=0$: a repeated root (all roots real).

*Proof.* A real cubic has a real root $r_1$ (its values go from $-\infty$ to $+\infty$, so it crosses zero; or see
[Chapter 12](12-The-Fundamental-Theorem-of-Algebra.md)). If the other two are real and different from each other and from
$r_1$, every factor $(r_i-r_j)^2$ is positive, so $\Delta>0$. If they are not real, they are conjugates $s\pm ti$ with
$t\ne0$ (non-real roots of a real polynomial come in conjugate pairs; Chapter 12 proves it). Then

$$(r_1-s-ti)^2(r_1-s+ti)^2=\left((r_1-s)^2+t^2\right)^2>0\quad\text{and}\quad\left((s+ti)-(s-ti)\right)^2=(2ti)^2=-4t^2<0,$$

so $\Delta<0$. The three cases exhaust the possibilities, which proves the statement in both directions. $\square$

**Connection with Cardano.** Under the square root in Cardano's formula sits

$$\frac{q^2}{4}+\frac{p^3}{27}=\frac{27q^2+4p^3}{108}=-\frac{\Delta}{108}.$$

So the square root is of a negative number exactly when $\Delta>0$: exactly when the cubic has three distinct real
roots. That proves the claim of 11.4.

**Examples.** $y^3-15y-4$: $\Delta=-4(-3375)-27\cdot16=13500-432=13068>0$, three real roots. $y^3+6y-20$:
$\Delta=-864-10800<0$, one real root ($2$) and two complex ($-1\pm3i$). $y^3-3y+1$: $\Delta=108-27=81$, three real
roots. Note that $81=9^2$ is a perfect square; in [Chapter 20](20-Galois-Theory.md) that will turn out to mean the
cubic's Galois group is as small as it can be.

**The quartic.** For a quartic with roots $r_1,\dots,r_4$, Ferrari's resolvent is closely tied to the three numbers

$$\theta_1=r_1r_2+r_3r_4,\qquad\theta_2=r_1r_3+r_2r_4,\qquad\theta_3=r_1r_4+r_2r_3.$$

Since $\theta_1-\theta_2=(r_1-r_4)(r_2-r_3)$, and similarly for the other differences, each of the six differences
$r_i-r_j$ appears once in $(\theta_1-\theta_2)(\theta_1-\theta_3)(\theta_2-\theta_3)$, up to sign. So *the quartic and the
cubic with roots $\theta_1,\theta_2,\theta_3$ have the same discriminant.* For a real quartic, $\Delta<0$ means two real
and two non-real roots; $\Delta>0$ means all four real or none real. Example 8, $y^4+4y-1$, has $\Delta=-7168<0$, and
indeed two real roots.

<figure class="play" data-play="polyroots"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> A cubic built from its roots. When two roots meet, the graph just touches the axis there: that is when the discriminant is 0.</figcaption></figure>

## 11.8 Lagrange's resolvents: the pattern that fails at degree 5

*Level: expert.*

By 1700 there were formulas for degrees 2, 3 and 4, each found by a separate trick. For seventy years people tried tricks
for degree 5. Around 1770-71 Joseph-Louis Lagrange, in a long memoir *Réflexions sur la résolution algébrique des
équations*, asked a different question: *why* do the tricks work? His answer looks at how expressions in the roots
behave when the roots are permuted. It is the seed of group theory ([Chapter 13](13-Groups.md)) and of Galois theory.

### The cubic, seen from the roots

Let $r_1,r_2,r_3$ be the roots of $y^3+py+q$, and let $\omega$ be a primitive cube root of unity. Form the
**Lagrange resolvents**

$$L=r_1+\omega r_2+\omega^2r_3,\qquad L'=r_1+\omega^2r_2+\omega r_3.$$

If we knew $L$ and $L'$, we could get the roots back, because together with $r_1+r_2+r_3=0$ we have three linear
equations, and adding them (using $1+\omega+\omega^2=0$) gives

$$r_1=\frac{0+L+L'}{3},\qquad r_2=\frac{0+\omega^2L+\omega L'}{3},\qquad r_3=\frac{0+\omega L+\omega^2L'}{3}.$$

Now permute the roots and watch what happens to $L$. The six permutations of $r_1,r_2,r_3$ change $L$ into six
different expressions, but they are related:

- the cyclic shift $r_1\to r_2\to r_3\to r_1$ turns $L$ into $r_2+\omega r_3+\omega^2r_1=\omega^2L$;
- swapping $r_2$ and $r_3$ turns $L$ into $L'$.

So under all six permutations $L$ becomes one of $L,\omega L,\omega^2L,L',\omega L',\omega^2L'$, and $L^3$ becomes
either $L^3$ or $L'^3$. **The cube $L^3$ takes only two values.** Therefore $L^3+L'^3$ and $L^3L'^3$ do not change under
any permutation: they are symmetric, and so (10.5) they are polynomials in the coefficients. Working them out:

$$LL'=r_1^2+r_2^2+r_3^2-(r_1r_2+r_1r_3+r_2r_3)=e_1^2-3e_2=-3p,\qquad L^3+L'^3=-27q.$$

So $L^3$ and $L'^3$ are the roots of the quadratic $t^2+27qt-27p^3=0$. Solve it, take cube roots, and recover the $r_i$.
Comparing with 11.3, $L=3u$ and $L'=3v$: Cardano's formula is exactly this procedure.

### The quartic

For four roots, the expression $\theta_1=r_1r_2+r_3r_4$ takes only *three* values under the $24$ permutations of the
roots, namely $\theta_1,\theta_2,\theta_3$ above. So the cubic with roots $\theta_1,\theta_2,\theta_3$ has symmetric
coefficients, computable from the quartic's coefficients. For the depressed quartic $y^4+py^2+qy+r$ it is

$$z^3-pz^2-4rz+(4pr-q^2)=0.$$

Solve that cubic (11.3), and from the $\theta$'s the roots follow by square roots. Ferrari's resolvent is the same cubic
in disguise: its root $m$ in 11.6 is $\theta/2$. (Check with Example 8: $p=0$, $q=4$, $r=-1$ gives $z^3+4z-16$, with root
$z=2=2m$.)

### The pattern

Every formula has the same shape. Find an expression in the roots that takes **fewer** values under all permutations of
the roots than the degree. Those values are the roots of a **resolvent** equation of lower degree, whose coefficients are
symmetric, hence known. Solve the resolvent, then climb back up.

| Degree $n$ | Permutations $n!$ | Resolvent expression | Number of values | Resolvent degree |
|---|---|---|---|---|
| 2 | 2 | $(r_1-r_2)^2$ | 1 | 1 (it is $e_1^2-4e_2$ itself) |
| 3 | 6 | $L^3$ | 2 | 2 |
| 4 | 24 | $r_1r_2+r_3r_4$ | 3 | 3 |
| 5 | 120 | ? | ? | ? |

How many values can an expression in the roots take? If the permutations that leave it unchanged form a set $H$ of
size $|H|$, then the number of values is $n!/|H|$ (this is Lagrange's theorem in its first form; [Chapter 14](14-Subgroups-Cosets-and-Lagrange.md)
proves it in general). Lagrange tried the natural candidates for degree 5 and found that they led to resolvents of
degree 6 or more: higher, not lower. He wrote that it seemed the method could not work for the quintic, but he did not
prove that no method could.

We now know why. **For $n\ge5$, an expression in $n$ roots takes either 1 value (it is symmetric), or 2 values (like
$\prod_{i<j}(r_i-r_j)$, which only changes sign), or at least $n$ values.** In the language of
[Chapter 13](13-Groups.md): the only subgroups of the symmetric group $S_n$ with index less than $n$ are $S_n$ itself and
the alternating group $A_n$. For degree 5, any resolvent has degree 1, 2, or at least 5. The ladder of smaller and
smaller resolvents has no rungs.

That observation is not yet a proof that no formula exists: a formula need not come from Lagrange's recipe. The proof
came in steps. Paolo Ruffini published an argument in 1799 that had gaps; Niels Henrik Abel gave a complete proof in
1824 (published in fuller form in 1826) that the general quintic cannot be solved by radicals. Évariste Galois, writing
around 1830-32, went further and explained exactly *which* equations can be solved by radicals, in terms of their group
of permutations. That is the story of [Chapter 20](20-Galois-Theory.md), and the groups it needs begin in
[Chapter 13](13-Groups.md).

## Check yourself

??? question "1. Depress $x^3+6x^2+9x+4$ and use the result to find all its roots."

    $b=6$, so $x=y-2$. Then $p=9-\frac{36}{3}=-3$ and $q=\frac{2\cdot216}{27}-\frac{6\cdot9}{3}+4=16-18+4=2$.
    The depressed cubic is $y^3-3y+2=(y-1)^2(y+2)$, with roots $1,1,-2$. So $x=-1,-1,-4$, and
    $x^3+6x^2+9x+4=(x+1)^2(x+4)$.

??? question "2. Solve $y^3+3y-4=0$ by Cardano's formula and show that the answer simplifies to $1$."

    $p=3$, $q=-4$: $\frac{q^2}4+\frac{p^3}{27}=4+1=5$, so $y=\sqrt[3]{2+\sqrt5}+\sqrt[3]{2-\sqrt5}$. Now
    $\left(\frac{1+\sqrt5}{2}\right)^3=\frac{1+3\sqrt5+15+5\sqrt5}{8}=2+\sqrt5$, and similarly $\left(\frac{1-\sqrt5}2\right)^3=2-\sqrt5$.
    Their product is $\frac{1-5}{4}=-1=-\frac p3$, as required. So $y=\frac{1+\sqrt5}2+\frac{1-\sqrt5}2=1$. Check: $1+3-4=0$.

??? question "3. In Cardano's formula, why can't you choose the two cube roots independently? Give an example where a careless choice gives a wrong answer."

    The derivation needs $3uv=-p$, not only $u^3v^3=-p^3/27$. With $y^3+6y-20$: $u=1+\sqrt3$ and $v=(1-\sqrt3)\omega$ have the
    right cubes, but $uv=-2\omega\ne-2$, and $u+v$ is not a root. Check: $u+v=(1+\sqrt3)+(1-\sqrt3)(-\frac12+\frac{\sqrt3}2i)\approx3.098-0.634i$,
    and substituting gives a nonzero value.

??? question "4. Verify that $(2+i)^3=2+11i$ and find all three roots of $y^3-15y-4$ from Bombelli's $u=2+i$, $v=2-i$."

    $(2+i)^2=3+4i$, and $(3+4i)(2+i)=6+3i+8i+4i^2=2+11i$. The roots are $u+v=4$, and
    $u\omega+v\omega^2=-\frac12(u+v)+\frac{\sqrt3}{2}i(u-v)=-2+\frac{\sqrt3}2i\cdot2i=-2-\sqrt3$, and $u\omega^2+v\omega=-2+\sqrt3$.
    Check: the sum is $0$ and the product $4(4-3)=4=-q$.

??? question "5. Compute the discriminant of $x^3+x+1$ and of $x^3-3x+1$. What does each tell you?"

    $x^3+x+1$: $\Delta=-4-27=-31<0$, one real root and two complex conjugates. $x^3-3x+1$: $\Delta=-4(-27)-27=81>0$, three
    distinct real roots.

??? question "6. Solve $y^3-3y+1=0$ by the trigonometric method."

    $k=\sqrt{3/3}=1$, $\cos3\theta=-\frac q{2k^3}=-\frac12$, so $3\theta_0=\frac{2\pi}3$, $\theta_0=\frac{2\pi}9$. Roots:
    $2\cos\frac{2\pi}9\approx1.5321$, $2\cos\frac{8\pi}9\approx-1.8794$, $2\cos\frac{14\pi}9\approx0.3473$. Check: they add to
    $0.0000$, and their product is about $-1.0000=-q$.

??? question "7. Solve $y^4-2y^2+8y-3=0$ by Ferrari's method, checking the resolvent step."

    See Example 7: $p=-2$, $q=8$, $r=-3$; the condition $q^2=4(2m-p)(m^2-r)$ becomes $64=4(2m+2)(m^2+3)$, solved by
    $m=1$. Then $(y^2+1)^2=4(y-1)^2$, giving $y^2-2y+3=0$ and $y^2+2y-1=0$, so $y=1\pm i\sqrt2$ and $y=-1\pm\sqrt2$.

??? question "8. Show that the roots of a depressed cubic satisfy $r_1^2+r_2^2+r_3^2=-2p$, and deduce that if $p>0$ the cubic has only one real root."

    $\sum r_i^2=e_1^2-2e_2=0-2p$. If $p>0$ this is negative, so the roots cannot all be real (real squares are $\ge0$). A
    real cubic has at least one real root, so it has exactly one, with two complex conjugates. (Agrees with
    $\Delta=-4p^3-27q^2<0$ when $p>0$.)

??? question "9. The quartic $(x-1)(x-2)(x-3)(x-4)$ has roots $1,2,3,4$. Compute $\theta_1,\theta_2,\theta_3$ and check that they are the roots of $z^3-e_2z^2+(e_1e_3-4e_4)z-(e_1^2e_4-4e_2e_4+e_3^2)$."

    $\theta_1=1\cdot2+3\cdot4=14$, $\theta_2=1\cdot3+2\cdot4=11$, $\theta_3=1\cdot4+2\cdot3=10$. Here $e_1=10$, $e_2=35$,
    $e_3=50$, $e_4=24$, so the cubic is $z^3-35z^2+(500-96)z-(2400-3360+2500)=z^3-35z^2+404z-1540$. And
    $(z-14)(z-11)(z-10)$: sum $35$, pair sum $154+140+110=404$, product $1540$. They match. Both have discriminant $144$.

??? question "10. How many different values does $r_1+r_2$ take when the four roots of a quartic are permuted in all 24 ways? And $(r_1+r_2-r_3-r_4)^2$?"

    $r_1+r_2$ is unchanged by swapping $r_1,r_2$ and by swapping $r_3,r_4$: 4 permutations, so $24/4=6$ values (one for each
    pair). $(r_1+r_2-r_3-r_4)^2$ is also unchanged by exchanging the pair $\{r_1,r_2\}$ with $\{r_3,r_4\}$: 8 permutations, so
    $3$ values. (Another resolvent cubic for the quartic, used in some textbooks instead of the $\theta$'s.)

??? question "11. Prove that if a real depressed cubic has $\Delta>0$, then Cardano's formula needs the square root of a negative number, and explain why the final answer is still real."

    Under the square root is $\frac{q^2}4+\frac{p^3}{27}=-\frac{\Delta}{108}<0$. So $u^3=-\frac q2+i\sqrt{\Delta/108}$ and
    $v^3=\overline{u^3}$. Choose $u$ any cube root of $u^3$ and $v=\bar u$: then $uv=|u|^2$, a positive real, and since
    $u^3v^3=-p^3/27$ we get $|u|^6=(-p/3)^3$, so $uv=-p/3$ as required (note $p<0$ here, since $\Delta>0$ forces
    $-4p^3>27q^2\ge0$). Then $u+v=u+\bar u=2\,\mathrm{Re}\,u$ is real.

??? question "12. Solve $x^3-9x^2+36x-80=0$ completely."

    Depress with $x=y+3$: $p=36-27=9$, $q=\frac{2(-729)}{27}-\frac{(-9)(36)}{3}-80=-54+108-80=-26$. So $y^3+9y-26=0$, and
    $\frac{q^2}{4}+\frac{p^3}{27}=169+27=196$. Then $u^3=13+14=27$ and $v^3=13-14=-1$, so $u=3$, $v=-1$ (check:
    $uv=-3=-\frac p3$). The real root is $y=2$, $x=5$; check $125-225+180-80=0$. The other roots:
    $y=-\frac12(u+v)\pm\frac{\sqrt3}2i(u-v)=-1\pm2\sqrt3\,i$, so $x=2\pm2\sqrt3\,i$. Check with Vieta: the three $x$'s
    add to $5+4=9$.

## What you learned

- The shift $x=y-\frac bn$ removes the second-highest term; every cubic reduces to $y^3+py+q$.
- Cardano: write $y=u+v$ with $uv=-\frac p3$; then $u^3,v^3$ solve a quadratic. The three cube-root choices give the
  three roots.
- When the cubic has three distinct real roots, the formula must pass through complex numbers (the casus irreducibilis);
  this is what forced mathematicians to accept them. The trigonometric formula gives the same roots with cosines.
- Ferrari solves the quartic by making both sides perfect squares, at the price of a resolvent cubic.
- The discriminant $\prod(r_i-r_j)^2$ is a polynomial in the coefficients; for a real cubic its sign counts the real
  roots, and $\Delta=-4p^3-27q^2$.
- Lagrange's insight: every formula uses an expression in the roots that takes few values under permutations. For
  degree 5 no such expression with 3 or 4 values exists, which points to Abel's and Galois's theorems.

**Next:** [Chapter 12](12-The-Fundamental-Theorem-of-Algebra.md), the theorem that every polynomial has a complex root,
whether or not a formula can find it.

## Further reading

- G. Cardano, *Ars Magna* (1545); English translation by T. Richard Witmer, *The Great Art, or The Rules of Algebra*,
  MIT Press, 1968.
- J.-P. Tignol, *Galois' Theory of Algebraic Equations*, World Scientific, 2001. Cardano, Ferrari, Lagrange's
  resolvents and their path to Galois, told with full mathematics.
- J. Stillwell, *Mathematics and Its History*, Springer, 1989 (3rd ed. 2010). Chapters on polynomial equations and on
  complex numbers in algebra.
- W. Dunham, *Journey Through Genius*, Wiley, 1990. A readable chapter on Cardano and the cubic.
- D. A. Cox, *Galois Theory*, Wiley, 2004 (2nd ed. 2012). Starts from the cubic and quartic formulas and Lagrange's
  ideas; proves the casus irreducibilis.
- On this site: [Complex numbers a + bi](../../topics/numbers/level-7/03-complex-arithmetic.md),
  [De Moivre](../../topics/numbers/level-8/02-de-moivre.md) and
  [Roots of unity](../../topics/numbers/level-8/03-roots-of-unity.md) on the Topics shelf;
  [MAT240H1 Unit 9: Polynomials, UFD and Resultants](../../uoft/MAT240H1/unit09.md); the
  [Algebra book index](index.md).
