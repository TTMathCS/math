# 9. Complex numbers

*The equation $x^2 = -1$ has no real solution, because no real number squared is negative. For a long time that was
the end of the matter: such equations were simply "impossible". Then, in the sixteenth century, a formula for
cubic equations started producing square roots of negative numbers on the way to perfectly real answers, and
mathematicians had to take them seriously. In this chapter you will see that puzzle, learn to calculate with
$i = \sqrt{-1}$, picture complex numbers as points and arrows in a plane, discover that multiplying by a complex
number is a rotation and a stretch, find all $n$th roots of any number, meet Euler's formula
$e^{i\theta} = \cos\theta + i\sin\theta$, and prove that the complex numbers form a field that cannot be ordered.*

!!! abstract "In this chapter"
    **You will learn:**

    - why square roots of negative numbers were forced on mathematics by the cubic equation
    - how to add, multiply and divide complex numbers, and solve any quadratic
    - the complex plane, the conjugate and the modulus, with their rules proved
    - polar form, and why multiplication is rotation plus scaling
    - De Moivre's theorem and its use for trigonometric identities and powers
    - the $n$th roots of unity and of any complex number, and the regular polygons they form
    - Euler's formula $e^{i\theta} = \cos\theta + i\sin\theta$, and why $\mathbb{C}$ is a field with no ordering

    **You need:** [Chapter 5](05-Quadratics.md) (the quadratic formula), [Chapter 7](07-Exponents-and-Logarithms.md)
    (exponents and $e$) and [Chapter 8](08-Sequences-Series-and-Induction.md) (geometric sums and induction). Basic
    trigonometry: $\sin$ and $\cos$ of an angle, and the addition formulas
    $\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta$ and $\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta$.
    Gentler versions on the Topics shelf:
    [Why new numbers](../../topics/numbers/level-7/01-why-new-numbers.md),
    [The number i](../../topics/numbers/level-7/02-the-number-i.md),
    [Complex arithmetic](../../topics/numbers/level-7/03-complex-arithmetic.md),
    [The complex plane](../../topics/numbers/level-7/04-complex-plane.md),
    [Polar form](../../topics/numbers/level-8/01-polar-form.md) and
    [Euler's formula](../../topics/numbers/level-8/04-euler-formula.md).

    **Levels:** 9.1 to 9.3 are intermediate; 9.4 to 9.6 are intermediate to advanced; 9.7 and 9.8 are advanced.

## 9.1 Why $\sqrt{-1}$? Cardano's cubic puzzle

The quadratic $x^2 + 1 = 0$ has no real roots: the parabola $y = x^2 + 1$ never touches the axis. For a quadratic,
"no real roots" is a complete and sensible answer, and for centuries mathematicians gave it. Square roots of
negative numbers appeared in calculations now and then, and were dismissed as signs that a problem was impossible.

In 1545 Gerolamo Cardano published, in his *Ars Magna*, a formula for solving cubic equations, which had been found
by Scipione del Ferro and independently by Niccolò Tartaglia (the story of that contest is told in Chapter 11). For
a cubic of the form $x^3 = px + q$, the formula reads

$$
x = \sqrt[3]{\frac{q}{2} + \sqrt{\frac{q^2}{4} - \frac{p^3}{27}}} + \sqrt[3]{\frac{q}{2} - \sqrt{\frac{q^2}{4} - \frac{p^3}{27}}} .
$$

Try it on $x^3 = 15x + 4$, an example studied by Rafael Bombelli in his *L'Algebra* of 1572. Here $p = 15$, $q = 4$, so
$\frac{q^2}{4} = 4$ and $\frac{p^3}{27} = 125$, and the inner square root is $\sqrt{4 - 125} = \sqrt{-121}$. The formula
seems to break down. But the equation obviously has a real root: $x = 4$ works, since $64 = 60 + 4$.

So the formula passes through "impossible" numbers on the way to a real answer. Bombelli's bold idea was to
calculate with $\sqrt{-1}$ as if it were an ordinary number with $(\sqrt{-1})^2 = -1$. Writing $\sqrt{-121} = 11\sqrt{-1}$,
the formula asks for

$$
\sqrt[3]{2 + 11\sqrt{-1}} + \sqrt[3]{2 - 11\sqrt{-1}} .
$$

He guessed that $2 + 11\sqrt{-1}$ is the cube of something of the form $a + b\sqrt{-1}$, and found $2 + \sqrt{-1}$:

$$
(2 + \sqrt{-1})^3 = 8 + 12\sqrt{-1} + 6(\sqrt{-1})^2 + (\sqrt{-1})^3 = 8 + 12\sqrt{-1} - 6 - \sqrt{-1} = 2 + 11\sqrt{-1} .
$$

Likewise $(2 - \sqrt{-1})^3 = 2 - 11\sqrt{-1}$. Adding the two cube roots, the imaginary parts cancel:
$(2 + \sqrt{-1}) + (2 - \sqrt{-1}) = 4$. The right answer.

This is the real reason complex numbers entered mathematics. Not to solve $x^2 = -1$, which nobody needed, but because
a correct method for real problems ran through them. Even when every root of a cubic is real, Cardano's formula
can be forced to go through square roots of negatives; Chapter 11 proves that this "irreducible case" cannot be
avoided by any formula built from real radicals.

(Cardano himself had met such numbers in the *Ars Magna*: asked to split 10 into two parts whose product is 40, he
found $5 + \sqrt{-15}$ and $5 - \sqrt{-15}$, noted that their sum is 10 and product $25 - (-15) = 40$, and remarked, in
effect, that the calculation was as subtle as it was useless.)

## 9.2 Arithmetic with complex numbers

We introduce a new number $i$ with

$$
i^2 = -1,
$$

and allow ourselves to add and multiply it with real numbers, keeping all the usual laws of arithmetic. A
**complex number** is an expression

$$
z = a + bi \qquad (a, b \text{ real}).
$$

$a$ is the **real part**, written $\operatorname{Re} z$, and $b$ is the **imaginary part**, $\operatorname{Im} z$ (note: the
imaginary part is the real number $b$, not $bi$). Two complex numbers are equal when their real parts are equal and
their imaginary parts are equal. The real numbers are the complex numbers with $b = 0$; numbers $bi$ with $a = 0$
are called **purely imaginary**. The set of all complex numbers is $\mathbb{C}$.

The words "real" and "imaginary", from Descartes in 1637, are historical accidents. Complex numbers are no more
imaginary than negative numbers or $\sqrt2$; each was once suspicious, and each was accepted because it made
mathematics work.

**Addition and subtraction** combine like terms:

$$
(a + bi) + (c + di) = (a + c) + (b + d)i .
$$

**Multiplication** expands the brackets and uses $i^2 = -1$:

$$
(a + bi)(c + di) = ac + adi + bci + bd\,i^2 = (ac - bd) + (ad + bc)i .
$$

**Example 1.** $(3 + 2i)(1 - 4i) = 3 - 12i + 2i - 8i^2 = 3 - 10i + 8 = 11 - 10i$.

**Powers of $i$** cycle with period 4: $i^1 = i$, $i^2 = -1$, $i^3 = -i$, $i^4 = 1$, $i^5 = i$, .... So $i^n$ depends only
on the remainder of $n$ on division by 4. For example $i^{2023} = i^3 = -i$, since $2023 = 4 \times 505 + 3$.

**Division.** To divide, we need to clear $i$ from the denominator, as one rationalises $\frac{1}{\sqrt2}$. The trick
uses the **conjugate** $\bar w = c - di$ of $w = c + di$: the product $w\bar w = c^2 + d^2$ is real and positive (unless
$w = 0$). So multiply top and bottom by $\bar w$:

$$
\frac{a + bi}{c + di} = \frac{(a + bi)(c - di)}{(c + di)(c - di)} = \frac{(ac + bd) + (bc - ad)i}{c^2 + d^2} .
$$

**Example 2.** $\dfrac{3 + 2i}{1 - i} = \dfrac{(3 + 2i)(1 + i)}{(1 - i)(1 + i)} = \dfrac{3 + 3i + 2i + 2i^2}{2} = \dfrac{1 + 5i}{2} = \dfrac12 + \dfrac52 i$.
Check: $(1 - i)\left(\frac12 + \frac52 i\right) = \frac12 + \frac52 i - \frac12 i - \frac52 i^2 = 3 + 2i$.

**Every quadratic can now be solved.** For $az^2 + bz + c = 0$ with real coefficients and $b^2 - 4ac < 0$, the quadratic
formula of [Chapter 5](05-Quadratics.md) still works, with $\sqrt{b^2 - 4ac} = i\sqrt{4ac - b^2}$.

**Example 3.** $z^2 + 2z + 5 = 0$: $z = \dfrac{-2 \pm \sqrt{4 - 20}}{2} = \dfrac{-2 \pm 4i}{2} = -1 \pm 2i$. Check:
$(-1 + 2i)^2 = 1 - 4i - 4 = -3 - 4i$, and $-3 - 4i + 2(-1 + 2i) + 5 = 0$.

Notice the two roots are conjugates of each other. That is no accident (exercise 8).

**Square roots of complex numbers.** Every complex number has square roots. To find $\sqrt{5 + 12i}$, look for
$(x + yi)^2 = 5 + 12i$ with real $x, y$: equating parts, $x^2 - y^2 = 5$ and $2xy = 12$. Substitute $y = 6/x$:
$x^4 - 5x^2 - 36 = 0$, so $x^2 = 9$ (the other root, $-4$, is impossible for real $x$), $x = \pm 3$, $y = \pm 2$. The square
roots are $\pm(3 + 2i)$. Check: $(3 + 2i)^2 = 9 + 12i - 4 = 5 + 12i$. So even quadratics with *complex* coefficients
can be solved by the usual formula: no further new numbers are needed. In fact, by the fundamental theorem of
algebra (Chapter 12), every polynomial equation with complex coefficients has a complex root.

## 9.3 The complex plane, the conjugate and the modulus

A complex number $a + bi$ is determined by two real numbers, so it can be drawn as the point $(a, b)$ in a plane:
the **complex plane** (or Argand diagram). The horizontal axis holds the real numbers, the vertical axis the purely
imaginary ones. It is often better to picture $z$ as an arrow from 0 to the point.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 275" role="img" aria-label="The complex plane: the point z equals 3 plus 2i, at distance root 13 from 0 and angle theta above the real axis, and its conjugate 3 minus 2i, its mirror image in the real axis">
  <line x1="20.0" y1="140.0" x2="330.0" y2="140.0" stroke="currentColor" stroke-width="1.2"/>
  <line x1="150.0" y1="10.0" x2="150.0" y2="270.0" stroke="currentColor" stroke-width="1.2"/>
  <line x1="30.0" y1="137.0" x2="30.0" y2="143.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="30" y="156" font-size="10" text-anchor="middle" fill="currentColor">−3</text>
  <line x1="70.0" y1="137.0" x2="70.0" y2="143.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="70" y="156" font-size="10" text-anchor="middle" fill="currentColor">−2</text>
  <line x1="110.0" y1="137.0" x2="110.0" y2="143.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="110" y="156" font-size="10" text-anchor="middle" fill="currentColor">−1</text>
  <line x1="190.0" y1="137.0" x2="190.0" y2="143.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="190" y="156" font-size="10" text-anchor="middle" fill="currentColor">1</text>
  <line x1="230.0" y1="137.0" x2="230.0" y2="143.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="230" y="156" font-size="10" text-anchor="middle" fill="currentColor">2</text>
  <line x1="270.0" y1="137.0" x2="270.0" y2="143.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="270" y="156" font-size="10" text-anchor="middle" fill="currentColor">3</text>
  <line x1="310.0" y1="137.0" x2="310.0" y2="143.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="310" y="156" font-size="10" text-anchor="middle" fill="currentColor">4</text>
  <line x1="147.0" y1="260.0" x2="153.0" y2="260.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="144" y="264" font-size="10" text-anchor="end" fill="currentColor">−3i</text>
  <line x1="147.0" y1="220.0" x2="153.0" y2="220.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="144" y="224" font-size="10" text-anchor="end" fill="currentColor">−2i</text>
  <line x1="147.0" y1="180.0" x2="153.0" y2="180.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="144" y="184" font-size="10" text-anchor="end" fill="currentColor">−i</text>
  <line x1="147.0" y1="100.0" x2="153.0" y2="100.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="144" y="104" font-size="10" text-anchor="end" fill="currentColor">i</text>
  <line x1="147.0" y1="60.0" x2="153.0" y2="60.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="144" y="64" font-size="10" text-anchor="end" fill="currentColor">2i</text>
  <line x1="147.0" y1="20.0" x2="153.0" y2="20.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="144" y="24" font-size="10" text-anchor="end" fill="currentColor">3i</text>
  <line x1="150" y1="140" x2="270" y2="60" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="150" y1="140" x2="270" y2="220" stroke="#9cc9ea" stroke-width="2.5"/>
  <line x1="270.0" y1="60.0" x2="270.0" y2="220.0" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="270.0" cy="60.0" r="4.5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="270.0" cy="220.0" r="4.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="264" y="50" font-size="12" text-anchor="end" fill="currentColor">z = 3 + 2i</text>
  <text x="264" y="240" font-size="12" text-anchor="end" fill="currentColor">conjugate 3 − 2i</text>
  <text x="222" y="116" font-size="11" text-anchor="start" fill="currentColor">|z| = √13</text>
  <path d="M 178.0 140.0 A 28 28 0 0 0 173.3 124.5" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="186" y="134" font-size="12" text-anchor="start" fill="currentColor">θ</text>
  <text x="318" y="134" font-size="11" text-anchor="end" fill="currentColor">real</text>
  <text x="156" y="12" font-size="11" text-anchor="start" fill="currentColor">imaginary</text>
</svg>
</div>

This picture was published by Caspar Wessel, a Norwegian-Danish surveyor, in a paper presented in 1797, and
independently by Jean-Robert Argand in 1806; it became standard after Gauss used it in 1831. Seen this way, complex
numbers stopped being mysterious: they are points of the plane with a rule for multiplying them.

**Addition is adding arrows.** $(a + bi) + (c + di) = (a + c) + (b + d)i$ is vector addition: put the arrows nose to
tail, or complete the parallelogram.

**The conjugate** $\bar z = a - bi$ is the mirror image of $z$ in the real axis. Its properties:

$$
\overline{z + w} = \bar z + \bar w, \qquad \overline{zw} = \bar z\,\bar w, \qquad \bar{\bar z} = z, \qquad
z + \bar z = 2\operatorname{Re} z, \qquad z - \bar z = 2i\operatorname{Im} z .
$$

*Proof of the product rule.* With $z = a + bi$, $w = c + di$: $zw = (ac - bd) + (ad + bc)i$, so
$\overline{zw} = (ac - bd) - (ad + bc)i$. And $\bar z\bar w = (a - bi)(c - di) = (ac - bd) + (-ad - bc)i$. Equal. $\square$
The others are similar and shorter. In words: conjugation respects addition and multiplication. Since $z$ is real
exactly when $z = \bar z$, these rules are a powerful way to prove things real.

**The modulus** $|z| = \sqrt{a^2 + b^2}$ is the length of the arrow, the distance from 0 to $z$ (by Pythagoras). For
a real number it is the usual absolute value. The key identity links it to the conjugate:

$$
z\bar z = (a + bi)(a - bi) = a^2 + b^2 = |z|^2 .
$$

This gives a clean formula for reciprocals: $\dfrac1z = \dfrac{\bar z}{|z|^2}$ for $z \neq 0$.

**Theorem 9.1.** For complex $z$, $w$: (a) $|zw| = |z|\,|w|$; (b) $|z + w| \le |z| + |w|$ (the **triangle inequality**).

*Proof.* (a) $|zw|^2 = zw\,\overline{zw} = z\bar z\,w\bar w = |z|^2|w|^2$; take square roots (both sides are $\ge 0$).

(b) $|z + w|^2 = (z + w)(\bar z + \bar w) = |z|^2 + z\bar w + \bar z w + |w|^2$. The middle terms are $z\bar w$ and its
conjugate, so their sum is $2\operatorname{Re}(z\bar w) \le 2|z\bar w| = 2|z||w|$ (a real part is never bigger than the
modulus, since $a \le \sqrt{a^2 + b^2}$). Hence $|z + w|^2 \le (|z| + |w|)^2$. $\square$

The triangle inequality says geometrically that one side of a triangle is at most the sum of the other two. And
$|z - w|$ is the distance between the points $z$ and $w$, so a circle with centre $c$ and radius $r$ is the set
$\{z : |z - c| = r\}$.

**A gift to number theory.** Part (a), written out with $z = a + bi$ and $w = c + di$, is the identity

$$
(a^2 + b^2)(c^2 + d^2) = (ac - bd)^2 + (ad + bc)^2 .
$$

**A product of two sums of two squares is again a sum of two squares.** For example $5 = 1^2 + 2^2$ and $13 = 2^2 + 3^2$;
$(1 + 2i)(2 + 3i) = -4 + 7i$ and $(1 + 2i)(2 - 3i) = 8 + i$, so $65 = 4^2 + 7^2 = 8^2 + 1^2$. The identity was known to
Diophantus and to Brahmagupta (628) and appears in Fibonacci's *Liber Quadratorum* (1225), long before complex numbers;
complex numbers explain it. Chapter 18 develops this into the theory of the Gaussian integers $a + bi$ with whole $a, b$.

## 9.4 Polar form: multiplication is rotation

A point in the plane can also be located by its distance from 0 and its direction. For $z \neq 0$, let $r = |z|$ and
let $\theta$ be the angle from the positive real axis to the arrow, measured anticlockwise. Then $a = r\cos\theta$ and
$b = r\sin\theta$, so

$$
z = r(\cos\theta + i\sin\theta).
$$

This is the **polar form**. $\theta$ is called an **argument** of $z$, $\arg z$. It is not unique: adding any multiple of
$360°$, or $2\pi$ in radians, gives the same point. (We will use radians from here on where formulas need them;
$\pi$ radians is $180°$.) The **principal argument** is the one in $(-\pi, \pi]$. A common shorthand is
$\operatorname{cis}\theta = \cos\theta + i\sin\theta$.

**Example 4.** $1 + i$: $r = \sqrt2$, $\theta = \pi/4$ ($45°$). $1 + i\sqrt3$: $r = 2$, $\theta = \pi/3$ ($60°$).
$-1 - i$: $r = \sqrt2$, and the point is in the third quadrant, so $\theta = -3\pi/4$ ($-135°$). Beware: $\tan\theta = b/a$
gives $1$ for both $1 + i$ and $-1 - i$; always check the quadrant.

**Theorem 9.2.** If $z = r(\cos\alpha + i\sin\alpha)$ and $w = s(\cos\beta + i\sin\beta)$, then

$$
zw = rs\left(\cos(\alpha + \beta) + i\sin(\alpha + \beta)\right).
$$

**To multiply complex numbers, multiply their lengths and add their angles.**

*Proof.* Expand:

$$
zw = rs\left[(\cos\alpha\cos\beta - \sin\alpha\sin\beta) + i(\sin\alpha\cos\beta + \cos\alpha\sin\beta)\right],
$$

and the brackets are exactly the addition formulas for $\cos(\alpha + \beta)$ and $\sin(\alpha + \beta)$. $\square$

So **multiplying by $w$ rotates the whole plane by $\arg w$ and scales it by $|w|$**. Multiplying by $i$
($r = 1$, $\theta = \pi/2$) is a quarter turn anticlockwise: $1 \to i \to -1 \to -i \to 1$. That is why $i^2 = -1$: two
quarter turns make a half turn, and a half turn sends 1 to $-1$. This is the best answer to "what *is* $i$?": it is
the quarter turn, the number that, done twice, reverses direction.

Division does the opposite: $\dfrac{z}{w} = \dfrac{r}{s}\left(\cos(\alpha - \beta) + i\sin(\alpha - \beta)\right)$.

**Example 5 (exact values for free).** Multiply $1 + i = \sqrt2\operatorname{cis}45°$ by $\sqrt3 + i = 2\operatorname{cis}30°$.
In polar form the product is $2\sqrt2\operatorname{cis}75°$. In Cartesian form it is
$(1 + i)(\sqrt3 + i) = \sqrt3 + i + i\sqrt3 - 1 = (\sqrt3 - 1) + (\sqrt3 + 1)i$. Comparing real parts,

$$
\cos 75° = \frac{\sqrt3 - 1}{2\sqrt2} = \frac{\sqrt6 - \sqrt2}{4} \approx 0.2588 .
$$

**Example 6 (rotating a point).** Rotate the point $(4, 1)$ by $30°$ anticlockwise about the centre $(1, 1)$. As
complex numbers: move the centre to 0 by subtracting $1 + i$, giving $3$; rotate by multiplying by
$\operatorname{cis}30° = \frac{\sqrt3}{2} + \frac12 i$, giving $\frac{3\sqrt3}{2} + \frac32 i$; move back by adding $1 + i$. The image
is $\left(1 + \frac{3\sqrt3}{2}, \frac52\right) \approx (3.598, 2.5)$. Rotations of the plane are just
$z \mapsto c + w(z - c)$ with $|w| = 1$: a whole chapter of geometry in one line.

<figure class="play" data-play="complex" data-mode="times"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Multiplying by i turns a point a quarter turn about 0; squaring doubles its angle and squares its length.</figcaption></figure>

## 9.5 De Moivre's theorem

Applying Theorem 9.2 repeatedly to one number gives its powers.

**Theorem 9.3 (De Moivre).** For every integer $n$ and real $\theta$,

$$
(\cos\theta + i\sin\theta)^n = \cos n\theta + i\sin n\theta .
$$

*Proof.* For $n \ge 0$ by induction ([Chapter 8](08-Sequences-Series-and-Induction.md)): $n = 0$ gives $1 = 1$. If it
holds for $n$, then $(\operatorname{cis}\theta)^{n+1} = \operatorname{cis}(n\theta)\operatorname{cis}\theta = \operatorname{cis}((n+1)\theta)$ by
Theorem 9.2. For negative $n = -m$: $\operatorname{cis}(m\theta) \cdot \operatorname{cis}(-m\theta) = \operatorname{cis}0 = 1$, so
$(\operatorname{cis}\theta)^{-m} = 1 / \operatorname{cis}(m\theta) = \operatorname{cis}(-m\theta)$. $\square$

More generally $\left(r\operatorname{cis}\theta\right)^n = r^n \operatorname{cis}(n\theta)$.

**Example 7.** $(1 + i)^{10} = \left(\sqrt2\operatorname{cis}\frac\pi4\right)^{10} = 2^5\operatorname{cis}\frac{10\pi}{4} = 32\operatorname{cis}\frac{5\pi}{2} = 32\operatorname{cis}\frac\pi2 = 32i$.
Expanding by the binomial theorem would take eleven terms.

**Example 8.** $(1 + i\sqrt3)^6 = 2^6\operatorname{cis}(6 \cdot 60°) = 64\operatorname{cis}360° = 64$. A real answer from a complex
number, because the angle went round exactly once.

**Example 9 (multiple-angle formulas).** Expand $(\cos\theta + i\sin\theta)^3$ by the binomial theorem, writing
$c = \cos\theta$, $s = \sin\theta$:

$$
c^3 + 3c^2(is) + 3c(is)^2 + (is)^3 = (c^3 - 3cs^2) + i(3c^2s - s^3).
$$

By De Moivre this equals $\cos3\theta + i\sin3\theta$. Equate real and imaginary parts and use $s^2 = 1 - c^2$:

$$
\cos 3\theta = 4\cos^3\theta - 3\cos\theta, \qquad \sin 3\theta = 3\sin\theta - 4\sin^3\theta .
$$

Check at $\theta = 60°$: $\cos180° = -1$ and $4 \cdot \frac18 - 3 \cdot \frac12 = -1$. The formula for $\cos3\theta$ is the
heart of the trigonometric solution of the cubic in Chapter 11, and of the proof in Chapter 19 that a $60°$ angle
cannot be trisected with ruler and compass.

## 9.6 Roots of unity

Which complex numbers $z$ satisfy $z^n = 1$? These are the **$n$th roots of unity** ("unity" is an old word for 1).

Write $z = r\operatorname{cis}\theta$. Then $z^n = r^n\operatorname{cis}(n\theta) = 1 = 1\operatorname{cis}0$. Lengths must match, so
$r^n = 1$ and $r = 1$. Angles must match up to whole turns, so $n\theta = 2\pi k$ for an integer $k$, that is
$\theta = 2\pi k / n$. Values of $k$ that differ by a multiple of $n$ give the same point, so there are exactly $n$
different roots:

$$
\omega^k = \operatorname{cis}\frac{2\pi k}{n}, \qquad k = 0, 1, \dots, n - 1, \qquad \text{where } \omega = \operatorname{cis}\frac{2\pi}{n} .
$$

They lie on the unit circle (the circle $|z| = 1$), equally spaced, at the corners of a regular $n$-sided polygon with
one corner at 1. They are the powers of the single root $\omega$, a **primitive** $n$th root of unity.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 260 262" role="img" aria-label="The six sixth roots of unity, 1, omega, omega squared, minus 1, omega to the 4 and omega to the 5, equally spaced 60 degrees apart on the unit circle, forming a regular hexagon">
  <line x1="15.0" y1="130.0" x2="245.0" y2="130.0" stroke="currentColor" stroke-width="1.2"/>
  <line x1="130.0" y1="15.0" x2="130.0" y2="245.0" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="130" cy="130" r="100" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="230.0,130.0 180.0,43.4 80.0,43.4 30.0,130.0 80.0,216.6 180.0,216.6" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="230.0" cy="130.0" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="252" y="135" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="180.0" cy="43.4" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="191" y="29" font-size="12" text-anchor="middle" fill="currentColor">ω</text>
  <circle cx="80.0" cy="43.4" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="69" y="29" font-size="12" text-anchor="middle" fill="currentColor">ω²</text>
  <circle cx="30.0" cy="130.0" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="8" y="135" font-size="12" text-anchor="middle" fill="currentColor">−1</text>
  <circle cx="80.0" cy="216.6" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="69" y="241" font-size="12" text-anchor="middle" fill="currentColor">ω⁴</text>
  <circle cx="180.0" cy="216.6" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="191" y="241" font-size="12" text-anchor="middle" fill="currentColor">ω⁵</text>
  <path d="M 160.0 130.0 A 30 30 0 0 0 145.0 104.0" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="168" y="116" font-size="11" text-anchor="start" fill="currentColor">60°</text>
</svg>
</div>

**Example 10.** Cube roots of unity: $1$, $\omega = \operatorname{cis}120° = -\frac12 + \frac{\sqrt3}{2}i$ and
$\omega^2 = \bar\omega = -\frac12 - \frac{\sqrt3}{2}i$. Algebraically, $z^3 - 1 = (z - 1)(z^2 + z + 1)$, and the quadratic
formula on $z^2 + z + 1 = 0$ gives the same two numbers. In particular $1 + \omega + \omega^2 = 0$.

**Theorem 9.4.** For $n \ge 2$, the $n$th roots of unity add up to 0:

$$
1 + \omega + \omega^2 + \cdots + \omega^{n-1} = 0 .
$$

*Proof.* It is a geometric sum with ratio $\omega \neq 1$, so it equals $\dfrac{\omega^n - 1}{\omega - 1} = \dfrac{1 - 1}{\omega - 1} = 0$
([Chapter 8](08-Sequences-Series-and-Induction.md), §8.1). $\square$ Physically: equal weights at the corners of a regular
polygon balance at the centre.

**Factoring $z^n - 1$.** The $n$ roots of unity are $n$ different roots of $z^n - 1$, a polynomial of degree $n$, so
(by the factor theorem, Chapter 10)

$$
z^n - 1 = (z - 1)(z - \omega)(z - \omega^2)\cdots(z - \omega^{n-1}).
$$

**Example 11 (the regular pentagon).** Let $\omega = \operatorname{cis}72°$, a fifth root of unity. Theorem 9.4 gives
$1 + \omega + \omega^2 + \omega^3 + \omega^4 = 0$. Divide by $\omega^2$ and use $\omega^{-1} = \omega^4$, $\omega^{-2} = \omega^3$:
$(\omega^2 + \omega^{-2}) + (\omega + \omega^{-1}) + 1 = 0$. Put $t = \omega + \omega^{-1} = \omega + \bar\omega = 2\cos72°$. Then
$t^2 = \omega^2 + 2 + \omega^{-2}$, so the equation becomes $t^2 - 2 + t + 1 = 0$, that is $t^2 + t - 1 = 0$. Since $t > 0$,
$t = \frac{-1 + \sqrt5}{2}$, and

$$
\cos 72° = \frac{\sqrt5 - 1}{4} \approx 0.3090 .
$$

Only square roots appear, which is why a regular pentagon can be drawn with ruler and compass. Gauss, at eighteen
(1796), used the same idea with the 17th roots of unity to show that a regular 17-gon can also be drawn; Chapter 20
explains which polygons are possible and why.

**Roots of any number.** To solve $z^n = c$ with $c = R\operatorname{cis}\phi \neq 0$: the length must be $R^{1/n}$ and the
angle $\frac{\phi + 2\pi k}{n}$. So there are exactly $n$ roots, equally spaced on the circle of radius $R^{1/n}$:

$$
z_k = R^{1/n}\operatorname{cis}\frac{\phi + 2\pi k}{n}, \qquad k = 0, 1, \dots, n - 1 .
$$

Equivalently, they are one root times each $n$th root of unity.

**Example 12.** $z^3 = 8i$. Here $R = 8$, $\phi = 90°$, so $z = 2\operatorname{cis}(30° + 120°k)$:
$2\operatorname{cis}30° = \sqrt3 + i$, $2\operatorname{cis}150° = -\sqrt3 + i$, $2\operatorname{cis}270° = -2i$. Check the last:
$(-2i)^3 = -8i^3 = 8i$.

**Example 13.** $z^4 = -16$: $R = 16$, $\phi = 180°$, so $z = 2\operatorname{cis}(45° + 90°k)$, the four numbers
$\sqrt2(\pm1 \pm i)$. This also explains the puzzle of [Chapter 7](07-Exponents-and-Logarithms.md): $-8$ has three
cube roots, $-2$ and $1 \pm i\sqrt3$, and "$(-8)^{1/3}$" must choose one.

**Where roots of unity go next.** Roots of unity are everywhere in modern mathematics. The **discrete Fourier
transform**, which splits a signal into its frequencies and is computed billions of times a day by the fast Fourier
transform algorithm, is built from sums over the $n$th roots of unity, and the cancellation of Theorem 9.4 is the
reason it can be inverted. The same idea with roots of unity in a finite field (Chapter 19) sits inside the
Reed-Solomon error-correcting codes used on deep-space radio links, the kind that carry data back from Mars.

## 9.7 Euler's formula

*Level: advanced.*

Theorem 9.2 says $\operatorname{cis}\alpha\operatorname{cis}\beta = \operatorname{cis}(\alpha + \beta)$: the function $\operatorname{cis}$ turns
addition of angles into multiplication. That is exactly the exponent law $a^x a^y = a^{x+y}$ of
[Chapter 7](07-Exponents-and-Logarithms.md). It suggests that $\operatorname{cis}\theta$ is some kind of exponential.
Euler's formula says which one:

$$
e^{i\theta} = \cos\theta + i\sin\theta .
$$

**What does this even mean?** $e^x$ was defined for real $x$; $e$ raised to an imaginary power has no meaning yet. So
Euler's formula is, honestly, a **definition** of $e^{i\theta}$, but one forced on us by every reasonable
requirement. Here are three independent reasons why it is the right definition.

*Reason 1: compound interest.* In Chapter 7, $e^x = \lim_{n\to\infty}(1 + x/n)^n$. Try $x = i\theta$. The number
$1 + i\theta/n$ has length $\sqrt{1 + \theta^2/n^2}$, very close to 1, and angle about $\theta/n$ (its tangent is $\theta/n$).
By De Moivre, its $n$th power has length $(1 + \theta^2/n^2)^{n/2}$, which tends to 1, and angle $n$ times
$\arctan(\theta/n)$, which tends to $\theta$. So $(1 + i\theta/n)^n \to \operatorname{cis}\theta$. (A numerical check: for
$\theta = 2$ and $n = 1000$, the power is about $-0.4170 + 0.9111i$, while $\cos 2 + i\sin 2 \approx -0.4161 + 0.9093i$.)
Making the two limits rigorous is an exercise in analysis.

*Reason 2: power series.* From calculus, $e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots$,
$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots$ and $\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$. Put $x = i\theta$ in the
first series and sort the terms using $i^2 = -1$, $i^3 = -i$, $i^4 = 1$: the real terms are the cosine series and the
imaginary terms are $i$ times the sine series. This is how Euler presented it in his *Introductio in analysin
infinitorum* of 1748. (Roger Cotes had published an equivalent statement, in the language of logarithms, in 1714.)

*Reason 3: rate of change.* The point $\operatorname{cis}\theta$ moves round the unit circle at unit speed, and its
velocity is always at right angles to its position, that is, $i$ times its position. The function $e^{i\theta}$, if
exponentials obey the usual rule that the rate of change of $e^{k\theta}$ is $k e^{k\theta}$, has the same property with
$k = i$. Two functions with the same rule and the same starting value (1 at $\theta = 0$) agree.

With Euler's formula we define, for any complex $z = x + iy$,

$$
e^{x + iy} = e^x(\cos y + i\sin y).
$$

Then Theorem 9.2 says exactly that $e^z e^w = e^{z + w}$ for all complex $z, w$: the exponent law survives. Polar form
becomes $z = re^{i\theta}$, and multiplication is $re^{i\alpha} \cdot se^{i\beta} = rs\,e^{i(\alpha + \beta)}$.

**Consequences.**

- $\theta = \pi$: $e^{i\pi} = -1$, or $e^{i\pi} + 1 = 0$, linking $e$, $i$, $\pi$, 1 and 0 in one line.
- $e^{2\pi i} = 1$, so $e^z$ is periodic with period $2\pi i$: $e^{z + 2\pi i} = e^z$. The complex exponential is **not**
  one-to-one, so the complex logarithm is many-valued: $\log z = \ln|z| + i(\arg z + 2\pi k)$.
- Since $e^{-i\theta} = \cos\theta - i\sin\theta$, adding and subtracting give

$$
\cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2}, \qquad \sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i} .
$$

These are the even and odd parts of $e^{i\theta}$ (Theorem 6.2 of [Chapter 6](06-Functions.md)), and they turn every
trigonometric identity into algebra with exponentials.

**Example 14.** $i^i$. Write $i = e^{i\pi/2}$; then $i^i = e^{i \cdot i\pi/2} = e^{-\pi/2} \approx 0.2079$, a real number. With
another argument for $i$, $\frac{\pi}{2} + 2\pi k$, one gets $e^{-\pi/2 - 2\pi k}$: complex powers are many-valued, and
$0.2079$ is the **principal value**.

**Example 15.** Solve $e^z = -2$. Write $z = x + iy$: $e^x(\cos y + i\sin y) = 2\operatorname{cis}\pi$. So $e^x = 2$ and
$y = \pi + 2\pi k$: $z = \ln 2 + i(2k + 1)\pi$ for any integer $k$. There is no real solution, but infinitely many complex ones.

**Example 16 (rotation in time).** A point on Mars's equator, seen from above the north pole in a frame fixed to the
stars, moves in a circle. With Mars's centre at 0 and the equatorial radius $R \approx 3396$ km, its position after
time $t$ is $z(t) = R\,e^{2\pi i t / T}$, where $T \approx 24.623$ hours is Mars's rotation period relative to the stars.
Each hour multiplies $z$ by $e^{2\pi i/T}$, a turn of about $14.6°$. The speed of the point is the circumference over
the period, $2\pi R / T \approx 867$ km/h, about 241 m/s.

## 9.8 The complex numbers as a field

*Level: advanced.*

We have been "calculating with $i$ as if it obeyed the usual laws". Is that safe? Could it lead to a contradiction,
like $1 = 2$? And what exactly do we gain and lose by moving from $\mathbb{R}$ to $\mathbb{C}$?

**A construction with no mystery.** William Rowan Hamilton, in 1833 (published 1837), removed all doubt by
defining complex numbers as ordered pairs of real numbers, with

$$
(a, b) + (c, d) = (a + c, \ b + d), \qquad (a, b)\cdot(c, d) = (ac - bd, \ ad + bc).
$$

Nothing imaginary is assumed: these are rules for pairs of real numbers. The pairs $(a, 0)$ behave exactly like real
numbers $a$. And $(0, 1)\cdot(0, 1) = (0 \cdot 0 - 1 \cdot 1, \ 0 \cdot 1 + 1 \cdot 0) = (-1, 0)$. So the pair $(0, 1)$ is a
square root of $-1$, and writing $i = (0, 1)$ we get $(a, b) = a + bi$. If the real numbers are free of contradiction,
so are these pairs.

**Field axioms.** A **field** is a set with addition and multiplication satisfying the familiar laws of
[Chapter 1](01-The-Language-of-Algebra.md): both operations are commutative and associative; multiplication distributes
over addition; there are identities 0 and 1 with $0 \neq 1$; every element has a negative; and every **nonzero**
element has a reciprocal. $\mathbb{Q}$ and $\mathbb{R}$ are fields; $\mathbb{Z}$ is not (2 has no reciprocal in $\mathbb{Z}$).

**Theorem 9.5.** $\mathbb{C}$, with the operations above, is a field.

*Proof (the parts that need checking).* Commutativity of multiplication: $(c, d)(a, b) = (ca - db, cb + da)$, the
same as $(a, b)(c, d)$. Associativity and distributivity are straightforward expansions that use only the laws of
the real numbers (both sides of $(z w) v = z(w v)$ come out as
$(ace - bde - adf - bcf, \ acf - bdf + ade + bce)$ for $z = (a, b)$, $w = (c, d)$, $v = (e, f)$). The identities are
$(0, 0)$ and $(1, 0)$; the negative of $(a, b)$ is $(-a, -b)$. The real content is the reciprocal: for
$(a, b) \neq (0, 0)$, $a^2 + b^2 > 0$, and

$$
(a, b)\cdot\left(\frac{a}{a^2 + b^2}, \ \frac{-b}{a^2 + b^2}\right) = \left(\frac{a^2 + b^2}{a^2 + b^2}, \ \frac{-ab + ba}{a^2 + b^2}\right) = (1, 0) . \qquad \square
$$

**But $\mathbb{C}$ cannot be ordered.** The real numbers are an **ordered field**: there is a relation $<$ such that
for any $x$, exactly one of $x < 0$, $x = 0$, $x > 0$ holds; and positives are closed under addition and
multiplication. From these rules follow all the usual facts about inequalities, including that every nonzero square
is positive: if $x > 0$ then $x \cdot x > 0$; if $x < 0$ then $-x > 0$ and $x^2 = (-x)(-x) > 0$.

**Theorem 9.6.** There is no way to define $<$ on $\mathbb{C}$ making it an ordered field.

*Proof.* Suppose there were. Since $i \neq 0$, its square is positive: $i^2 = -1 > 0$. But $1 = 1^2$ is also a nonzero
square, so $1 > 0$. Adding two positives gives a positive: $-1 + 1 = 0 > 0$. That contradicts "exactly one of
$x < 0$, $x = 0$, $x > 0$". $\square$

So "is $2 + 3i$ bigger than $3 + 2i$?" has no meaningful answer. We can compare the *sizes* $|z|$, which are real,
but not the numbers themselves. Whenever you see an inequality between complex numbers in a proof, something has gone
wrong (unless both sides are real). This is the price of $\mathbb{C}$: we gain the ability to solve every polynomial
equation, and we lose order.

**Other views of the same field.**

- *As matrices.* The $2 \times 2$ real matrices $\begin{pmatrix} a & -b \\ b & a \end{pmatrix}$ add and multiply exactly
  like $a + bi$ (exercise 11). This is the rotation-and-scaling picture of 9.4, written as a linear map; see the
  linear algebra of [MAT240H1 Unit 4](../../uoft/MAT240H1/unit04.md).
- *As polynomials modulo $x^2 + 1$.* Calculate with polynomials in $x$ with real coefficients, but replace $x^2$ by $-1$
  whenever it appears: this is $\mathbb{C}$ again, with $x$ playing $i$. In Chapter 17 this becomes the quotient ring
  $\mathbb{R}[x]/(x^2 + 1)$, and in Chapter 19 the general method of building new fields by adjoining roots.

**Algebraically closed.** The fundamental theorem of algebra, proved in Chapter 12, says that every non-constant
polynomial with complex coefficients has a root in $\mathbb{C}$. So the climb that went
$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}$, each step adding solutions to
equations that had none, stops here: for polynomial equations, $\mathbb{C}$ is enough.

**Beyond $\mathbb{C}$.** Can one go further, to number systems built on triples or quadruples of reals? Hamilton
searched for years for a three-dimensional version and in 1843 found the **quaternions** $a + bi + cj + dk$, with
$i^2 = j^2 = k^2 = ijk = -1$. They are four-dimensional and their multiplication is **not commutative**
($ij = k$ but $ji = -k$); they describe rotations in three-dimensional space and are used today in spacecraft
attitude control and computer graphics. Frobenius proved in 1877 that $\mathbb{R}$, $\mathbb{C}$ and the quaternions are
the only finite-dimensional associative number systems over $\mathbb{R}$ in which every nonzero element has an inverse.
In that sense the complex numbers are the last stop at which nothing of ordinary arithmetic except order is lost.
The Topics lesson [Quaternions](../../topics/numbers/level-8/06-quaternions.md) has a gentler tour.

## Check yourself

??? question "1. Compute $(2 - 3i)(4 + i)$ and $\dfrac{2 - 3i}{4 + i}$."

    $(2 - 3i)(4 + i) = 8 + 2i - 12i - 3i^2 = 11 - 10i$. For the quotient multiply by $\frac{4 - i}{4 - i}$:
    $\dfrac{(2 - 3i)(4 - i)}{17} = \dfrac{8 - 2i - 12i + 3i^2}{17} = \dfrac{5 - 14i}{17}$.

??? question "2. Solve $z^2 + 4z + 13 = 0$ and check one root."

    $z = \dfrac{-4 \pm \sqrt{16 - 52}}{2} = \dfrac{-4 \pm 6i}{2} = -2 \pm 3i$. Check: $(-2 + 3i)^2 = 4 - 12i - 9 = -5 - 12i$,
    and $-5 - 12i + 4(-2 + 3i) + 13 = -5 - 8 + 13 + (-12 + 12)i = 0$.

??? question "3. Find both square roots of $-8 - 6i$."

    $(x + yi)^2 = -8 - 6i$ gives $x^2 - y^2 = -8$ and $2xy = -6$. With $y = -3/x$: $x^4 + 8x^2 - 9 = 0$, so $x^2 = 1$,
    $x = \pm1$, $y = \mp 3$. The roots are $\pm(1 - 3i)$. Check: $(1 - 3i)^2 = 1 - 6i - 9 = -8 - 6i$.

??? question "4. Write $-2 + 2\sqrt3\, i$ in polar form and compute its cube."

    $r = \sqrt{4 + 12} = 4$; the point is in the second quadrant with $\cos\theta = -\frac12$, so $\theta = 120°$.
    Cube: $4^3\operatorname{cis}360° = 64$.

??? question "5. Prove the parallelogram law $|z + w|^2 + |z - w|^2 = 2|z|^2 + 2|w|^2$."

    $|z \pm w|^2 = (z \pm w)(\bar z \pm \bar w) = |z|^2 \pm (z\bar w + \bar z w) + |w|^2$. Adding the $+$ and $-$ versions
    cancels the middle terms. Geometrically: the squares of a parallelogram's diagonals add up to the squares of its four sides.

??? question "6. Find all solutions of $z^3 = -27$."

    $-27 = 27\operatorname{cis}180°$, so $z = 3\operatorname{cis}(60° + 120°k)$: $\frac32 + \frac{3\sqrt3}{2}i$, $-3$, and $\frac32 - \frac{3\sqrt3}{2}i$.

??? question "7. Use De Moivre's theorem to express $\cos 4\theta$ in terms of $\cos\theta$."

    The real part of $(c + is)^4$ is $c^4 - 6c^2s^2 + s^4$. With $s^2 = 1 - c^2$: $c^4 - 6c^2(1 - c^2) + (1 - c^2)^2 = 8c^4 - 8c^2 + 1$.
    So $\cos4\theta = 8\cos^4\theta - 8\cos^2\theta + 1$. Check $\theta = 0$: $1 = 8 - 8 + 1$.

??? question "8. Prove: if $p(x)$ is a polynomial with real coefficients and $p(z) = 0$, then $p(\bar z) = 0$."

    Write $p(x) = a_nx^n + \cdots + a_1x + a_0$ with real $a_k$, so $\bar a_k = a_k$. Conjugation respects sums and products, so
    $\overline{p(z)} = \bar a_n\bar z^n + \cdots + \bar a_0 = p(\bar z)$. Hence $p(\bar z) = \overline{0} = 0$. Non-real roots of real polynomials come in conjugate pairs.

??? question "9. Let $\omega = \operatorname{cis}(2\pi/n)$. Show that $(1 - \omega)(1 - \omega^2)\cdots(1 - \omega^{n-1}) = n$."

    From $z^n - 1 = (z - 1)\prod_{k=1}^{n-1}(z - \omega^k)$ and $z^n - 1 = (z - 1)(1 + z + \cdots + z^{n-1})$, we get
    $\prod_{k=1}^{n-1}(z - \omega^k) = 1 + z + \cdots + z^{n-1}$ for $z \neq 1$, and both sides are polynomials so they agree at $z = 1$ too.
    At $z = 1$ the right side is $n$. Geometrically: in a regular $n$-gon inscribed in the unit circle, the product of the
    distances from one corner to all the others is $n$.

??? question "10. Solve $e^z = 1 + i$."

    $1 + i = \sqrt2\, e^{i\pi/4}$. With $z = x + iy$: $e^x = \sqrt2$ and $y = \frac\pi4 + 2\pi k$. So $z = \frac12\ln 2 + i\left(\frac\pi4 + 2\pi k\right)$, $k$ any integer.

??? question "11. Show that the matrices $M(a, b) = \begin{pmatrix} a & -b \\ b & a \end{pmatrix}$ multiply like complex numbers."

    $M(a, b)M(c, d) = \begin{pmatrix} ac - bd & -ad - bc \\ bc + ad & -bd + ac \end{pmatrix} = M(ac - bd, \ ad + bc)$, matching
    $(a + bi)(c + di) = (ac - bd) + (ad + bc)i$. And $M(0, 1)^2 = M(-1, 0) = -I$, a square root of $-1$ among matrices.

??? question "12. Show that in an ordered field, $x^2 + y^2 + 1 = 0$ has no solution, and find a solution in $\mathbb{C}$."

    In an ordered field squares are $\ge 0$ and $1 > 0$, so $x^2 + y^2 + 1 > 0$. In $\mathbb{C}$, take $y = 0$ and $x = i$: $i^2 + 0 + 1 = 0$.
    (Another: $x = 1$, $y = i\sqrt2$, giving $1 - 2 + 1 = 0$.)

## What you learned

- Complex numbers entered mathematics through Cardano's cubic formula, which reaches real roots by way of square roots of negatives.
- $\mathbb{C}$ consists of $a + bi$ with $i^2 = -1$; division uses the conjugate, and every quadratic, even with complex coefficients, has roots in $\mathbb{C}$.
- In the complex plane, addition is adding arrows, conjugation is reflection, and $|z|$ is length; $|zw| = |z||w|$ and the triangle inequality hold.
- In polar form, multiplication multiplies lengths and adds angles: multiplying by $i$ is a quarter turn.
- De Moivre's theorem $(\cos\theta + i\sin\theta)^n = \cos n\theta + i\sin n\theta$ gives powers and multiple-angle formulas.
- $z^n = c$ has exactly $n$ roots, at the corners of a regular polygon; the roots of unity add to 0.
- Euler's formula $e^{i\theta} = \cos\theta + i\sin\theta$ makes polar form exponential and gives $e^{i\pi} = -1$.
- $\mathbb{C}$ is a field, constructed without mystery from pairs of reals, but it cannot be ordered.

**Next:** [Chapter 10](10-Roots-and-Coefficients.md), the theory of polynomial equations: how roots and coefficients are tied together.

## Further reading

- T. Needham, *Visual Complex Analysis*, 1997, Chapter 1.
- P. J. Nahin, *An Imaginary Tale: The Story of $\sqrt{-1}$*, 1998.
- B. Mazur, *Imagining Numbers (particularly the square root of minus fifteen)*, 2003.
- J. Stillwell, *Mathematics and Its History*, 3rd edition, 2010, the chapters on complex numbers in algebra and on complex numbers and curves.
- G. Cardano, *Ars Magna*, 1545 (English translation by T. R. Witmer, *The Great Art, or The Rules of Algebra*, 1968).
- H.-D. Ebbinghaus and others, *Numbers*, 1991 (the construction of $\mathbb{C}$, the quaternions and Frobenius's theorem).
- On this site: the Topics lessons [Every quadratic has roots](../../topics/numbers/level-7/05-every-quadratic.md),
  [De Moivre's theorem](../../topics/numbers/level-8/02-de-moivre.md),
  [Roots of unity](../../topics/numbers/level-8/03-roots-of-unity.md),
  [The fundamental theorem](../../topics/numbers/level-8/05-fundamental-theorem.md) and
  [Quaternions](../../topics/numbers/level-8/06-quaternions.md); the U of T guide
  [MAT240H1 Unit 1: Fields & Vector Spaces](../../uoft/MAT240H1/unit01.md) (fields, with $\mathbb{C}$ as an example);
  the [cryptography book](https://cryptography.akadian.ca/book/), whose AES chapter computes in a finite field, a field
  of a very different kind; and the [Algebra book's contents](index.md).
