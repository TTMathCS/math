---
title: "De Moivre's theorem"
---

# De Moivre's theorem

*Numbers · level 8, lesson 2 of 6*

## A question to start

Work out $(1 + i)^8$.

The honest way is to multiply eight brackets together, collecting terms and replacing $i^2$ each time. With the
binomial theorem it is 9 terms with coefficients 1, 8, 28, 56, 70, 56, 28, 8, 1 and powers of $i$ to sort out. It can
be done, but it is slow, and $(1 + i)^{100}$ would be hopeless that way.

Now think in polar form. $1 + i$ has length $\sqrt2$ and angle 45°. Multiplying multiplies lengths and adds angles,
so eight copies give length $(\sqrt2)^8 = 16$ and angle $8 \times 45° = 360°$, a full turn. The answer is simply
**16**. This lesson turns that thought into a theorem, proves it, and uses it to produce trigonometry formulas almost
for free.

## The idea

### The theorem

**De Moivre's theorem.** For any real $\theta$ and any integer $n$,

$$(\cos\theta + i\sin\theta)^n = \cos n\theta + i\sin n\theta$$

and so, for $z = r\operatorname{cis}\theta$,

$$z^n = r^n\operatorname{cis}(n\theta).$$

In words: to raise a complex number to the $n$th power, raise its **length** to the $n$th power and multiply its
**angle** by $n$. It is named after Abraham de Moivre, a French-born mathematician who worked in London in the early
1700s; the formula in the form written here was set down by Euler.

### Proof for positive powers: induction

This is a natural place for **proof by induction**, which proves a statement for every whole number $n \ge 1$ in two
steps, like knocking over a line of dominoes:

1. **Base case:** show it is true for $n = 1$ (the first domino falls).
2. **Inductive step:** show that **if** it is true for some $n = k$, **then** it is true for $n = k + 1$ (each domino
   knocks over the next).

**Base case.** For $n = 1$ the statement reads $\operatorname{cis}\theta = \operatorname{cis}\theta$. True.

**Inductive step.** Suppose $(\operatorname{cis}\theta)^k = \operatorname{cis}(k\theta)$ for some $k \ge 1$. Then

$$(\operatorname{cis}\theta)^{k+1} = (\operatorname{cis}\theta)^k \cdot \operatorname{cis}\theta = \operatorname{cis}(k\theta)\cdot\operatorname{cis}\theta = \operatorname{cis}(k\theta + \theta) = \operatorname{cis}\big((k + 1)\theta\big).$$

The third equals sign is the multiplication rule from [lesson 1](01-polar-form.md): angles add. So the statement for
$k$ forces the statement for $k + 1$. By induction it holds for every $n \ge 1$. ∎

### Zero and negative powers

For $n = 0$: $(\operatorname{cis}\theta)^0 = 1$ and $\operatorname{cis}0 = \cos0 + i\sin0 = 1$. True.

For a negative power $n = -m$ (with $m \ge 1$), use the reciprocal rule from lesson 1,
$\dfrac{1}{\operatorname{cis}\phi} = \operatorname{cis}(-\phi)$:

$$(\operatorname{cis}\theta)^{-m} = \frac{1}{(\operatorname{cis}\theta)^m} = \frac{1}{\operatorname{cis}(m\theta)} = \operatorname{cis}(-m\theta).$$

So the theorem holds for **all** integers $n$. (For fractional powers, such as square roots, there is a catch, since a
number has several roots; that is lesson 3.)

### A picture: powers spiral

Since each multiplication by $z$ turns by $\theta$ and stretches by $r$, the powers $1, z, z^2, z^3, \ldots$ step
round 0 like a spiral staircase seen from above. If $r > 1$ the spiral winds outwards; if $r < 1$ it winds in towards
0; if $r = 1$ the powers stay on the unit circle forever.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 220" role="img" aria-label="The powers of 1 plus i: 1, 1 plus i, 2i, minus 2 plus 2i, minus 4, minus 4 minus 4i, minus 8i, joined in order; each step turns 45 degrees and stretches by root 2, making an outward spiral">
  <line x1="20" y1="110" x2="300" y2="110" stroke="currentColor" stroke-width="1.5"/>
  <line x1="160" y1="215" x2="160" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="172,110 172,98 160,86 136,86 112,110 112,158 160,206" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <g stroke="#9cc9ea" stroke-width="1" stroke-dasharray="3 3">
    <line x1="160" y1="110" x2="172" y2="98"/><line x1="160" y1="110" x2="136" y2="86"/>
    <line x1="160" y1="110" x2="112" y2="158"/>
  </g>
  <g fill="#7ccf9a">
    <circle cx="172" cy="110" r="4"/><circle cx="172" cy="98" r="4"/><circle cx="160" cy="86" r="4"/>
    <circle cx="136" cy="86" r="4"/><circle cx="112" cy="110" r="4"/><circle cx="112" cy="158" r="4"/><circle cx="160" cy="206" r="4"/>
  </g>
  <g font-size="12" fill="currentColor">
    <text x="178" y="124">1</text>
    <text x="178" y="96">1 + i</text>
    <text x="166" y="80">2i</text>
    <text x="88" y="80">−2 + 2i</text>
    <text x="70" y="104">−4</text>
    <text x="50" y="172">−4 − 4i</text>
    <text x="168" y="210">−8i</text>
  </g>
</svg>
</div>

The dots are $1, z, z^2, \ldots, z^6$ for $z = 1 + i$. Two more steps reach $z^7 = 8 - 8i$ and $z^8 = 16$, on the
positive real axis again, as the opening question found.

### Trigonometry for free

Here is the most surprising use. Expand the left side of De Moivre's theorem with ordinary algebra, then compare real
and imaginary parts with the right side. Write $c = \cos\theta$ and $s = \sin\theta$ for short.

**$n = 2$.** $(c + is)^2 = c^2 + 2ics + i^2 s^2 = (c^2 - s^2) + i(2cs)$. De Moivre says this equals
$\cos2\theta + i\sin2\theta$. Comparing parts:

$$\cos2\theta = \cos^2\theta - \sin^2\theta, \qquad \sin2\theta = 2\sin\theta\cos\theta.$$

These are the **double-angle formulas**, obtained without a single diagram.

**$n = 3$.** Using $(x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$ with $x = c$, $y = is$, and $i^2 = -1$, $i^3 = -i$:

$$(c + is)^3 = c^3 + 3ic^2s - 3cs^2 - is^3 = (c^3 - 3cs^2) + i(3c^2s - s^3).$$

Comparing with $\cos3\theta + i\sin3\theta$, and then using $s^2 = 1 - c^2$ and $c^2 = 1 - s^2$:

$$\cos3\theta = c^3 - 3c(1 - c^2) = 4\cos^3\theta - 3\cos\theta,$$

$$\sin3\theta = 3(1 - s^2)s - s^3 = 3\sin\theta - 4\sin^3\theta.$$

These **triple-angle formulas** are tiresome to get from angle-sum formulas and take three lines here. The same method
gives $\cos n\theta$ and $\sin n\theta$ for any $n$.

<figure class="play" data-play="complex" data-mode="times"><span class="ai-tag">AI-created</span><figcaption><b>Squaring doubles the angle.</b> Compare the angles of z and z².</figcaption></figure>

## Worked examples

**1. The opening question, carefully.** Find $(1 + i)^8$.

1. $1 + i = \sqrt2\operatorname{cis}\tfrac\pi4$.
2. $(1 + i)^8 = (\sqrt2)^8\operatorname{cis}\left(8 \times \tfrac\pi4\right) = 16\operatorname{cis}2\pi = 16$.
3. Check by repeated squaring: $(1 + i)^2 = 2i$, $(2i)^2 = -4$, $(-4)^2 = 16$. ✓

**2. A sixth power.** Find $(\sqrt3 - i)^6$.

1. $\sqrt3 - i$: $r = \sqrt{3 + 1} = 2$, fourth quadrant, reference angle $\tfrac\pi6$, so $\theta = -\tfrac\pi6$.
2. $(\sqrt3 - i)^6 = 2^6\operatorname{cis}\left(-\pi\right) = 64(\cos(-\pi) + i\sin(-\pi)) = -64$.

**3. A tenth power, exactly.** Find $(1 + i\sqrt3)^{10}$ as $a + bi$.

1. $1 + i\sqrt3 = 2\operatorname{cis}\tfrac\pi3$.
2. $(1 + i\sqrt3)^{10} = 1024\operatorname{cis}\tfrac{10\pi}{3}$.
3. Remove full turns: $\tfrac{10\pi}{3} - 2\pi = \tfrac{4\pi}{3}$ (that is 240°).
4. $\cos\tfrac{4\pi}3 = -\tfrac12$ and $\sin\tfrac{4\pi}{3} = -\tfrac{\sqrt3}{2}$, so the answer is
   $1024\left(-\tfrac12 - \tfrac{\sqrt3}{2}i\right) = -512 - 512\sqrt3\,i$.

**4. A negative power.** Find $(1 + i)^{-4}$.

$(1 + i)^{-4} = (\sqrt2)^{-4}\operatorname{cis}\left(-4 \times \tfrac\pi4\right) = \tfrac14\operatorname{cis}(-\pi) =
-\tfrac14$. Check: $(1 + i)^4 = -4$ (worked example 1, step 3), and $\dfrac{1}{-4} = -\tfrac14$. ✓

**5. Powers of cosine.** Write $\cos^3\theta$ in terms of $\cos\theta$ and $\cos3\theta$.

From the triple-angle formula, $\cos3\theta = 4\cos^3\theta - 3\cos\theta$. Solve for $\cos^3\theta$:

$$\cos^3\theta = \frac{3\cos\theta + \cos3\theta}{4}.$$

Formulas like this turn powers of cosine into single cosines, which is how $\displaystyle\int\cos^3\theta\,d\theta$
is done in calculus.

## Try it

1. Find $(1 - i)^6$ and $(-1 + i)^5$ in the form $a + bi$.
2. Find $(\sqrt3 + i)^9$.
3. Find the smallest positive whole number $n$ for which $(1 + i\sqrt3)^n$ is a real number, and find that real number.
4. Find $\left(\tfrac{\sqrt3}{2} + \tfrac12 i\right)^{-3}$.
5. Find $(1 + i)^{2026}$ in the form $2^k \times (\text{something simple})$.
6. Use De Moivre with $n = 4$ to show that $\cos4\theta = 8\cos^4\theta - 8\cos^2\theta + 1$.
7. Show that $(\cos\theta - i\sin\theta)^n = \cos n\theta - i\sin n\theta$ for every whole number $n$.
8. Show that if $|z| = 1$ then $z^n + \bar z^{\,n} = 2\cos n\theta$, where $\theta = \arg z$.

??? note "Answers"
    1. $1 - i = \sqrt2\operatorname{cis}\left(-\tfrac\pi4\right)$, so $(1 - i)^6 = 8\operatorname{cis}\left(-\tfrac{3\pi}{2}\right)
       = 8\operatorname{cis}\tfrac\pi2 = 8i$. And $-1 + i = \sqrt2\operatorname{cis}\tfrac{3\pi}{4}$, so
       $(-1 + i)^5 = 4\sqrt2\operatorname{cis}\tfrac{15\pi}{4} = 4\sqrt2\operatorname{cis}\left(-\tfrac\pi4\right) =
       4\sqrt2\left(\tfrac{\sqrt2}2 - \tfrac{\sqrt2}{2}i\right) = 4 - 4i$.
    2. $\sqrt3 + i = 2\operatorname{cis}\tfrac\pi6$, so the ninth power is $512\operatorname{cis}\tfrac{3\pi}{2} = -512i$.
    3. The angle is $n \times 60°$, which must be a multiple of 180°: smallest $n = 3$. Then
       $(1 + i\sqrt3)^3 = 8\operatorname{cis}\pi = -8$.
    4. The number is $\operatorname{cis}\tfrac\pi6$, so its $-3$rd power is $\operatorname{cis}\left(-\tfrac\pi2\right) = -i$.
    5. $(\sqrt2)^{2026} = 2^{1013}$, and the angle is $2026 \times 45° = 91\,170°$. Dividing by 360 leaves a remainder
       of $91\,170 - 253 \times 360 = 90°$. So $(1 + i)^{2026} = 2^{1013}\,i$.
    6. $(c + is)^4 = c^4 + 4c^3(is) + 6c^2(is)^2 + 4c(is)^3 + (is)^4 = (c^4 - 6c^2s^2 + s^4) + i(4c^3s - 4cs^3)$. So
       $\cos4\theta = c^4 - 6c^2s^2 + s^4$. Put $s^2 = 1 - c^2$: $c^4 - 6c^2 + 6c^4 + 1 - 2c^2 + c^4 = 8c^4 - 8c^2 + 1$.
    7. $\cos\theta - i\sin\theta = \cos(-\theta) + i\sin(-\theta)$, because cosine is even and sine is odd. By De
       Moivre its $n$th power is $\cos(-n\theta) + i\sin(-n\theta) = \cos n\theta - i\sin n\theta$.
    8. $z = \operatorname{cis}\theta$, $\bar z = \operatorname{cis}(-\theta)$. So $z^n + \bar z^{\,n} =
       \operatorname{cis}n\theta + \operatorname{cis}(-n\theta) = (\cos n\theta + i\sin n\theta) + (\cos n\theta - i\sin n\theta) = 2\cos n\theta$.

## Common mistake

**Raising the angle to the power instead of multiplying it.** $(2\operatorname{cis}30°)^3$ is $8\operatorname{cis}90°$,
not $8\operatorname{cis}27\,000°$. The length is powered; the angle is multiplied by $n$.

**Forgetting to bring the angle back into range.** $\operatorname{cis}\tfrac{10\pi}{3}$ is correct but unhelpful; take
off whole turns ($2\pi$ each) to reach $\tfrac{4\pi}{3}$ or the principal value $-\tfrac{2\pi}{3}$ before reading off
cosine and sine.

## Where it leads

- Back: [Polar form](01-polar-form.md) · Next: [Roots of unity](03-roots-of-unity.md), where De Moivre runs backwards to
  find roots.
- [Level 8 page](index.md) · [Numbers topic page](../index.md)
- Proof by induction in general: [Patterns](../../patterns/index.md) and [Logic](../../logic/index.md). The binomial
  coefficients 1, 4, 6, 4, 1 come from [Counting](../../counting/index.md).
- Writing $\operatorname{cis}\theta$ as $e^{i\theta}$ makes De Moivre's theorem the ordinary rule
  $(e^{i\theta})^n = e^{in\theta}$: [lesson 4](04-euler-formula.md).
- On the U of T shelf: induction in [MAT137 Unit 1 (logic, sets and proofs)](../../../uoft/MAT137/unit01.md), and
  integrating powers of sine and cosine in [MAT137 Unit 9 (integration methods)](../../../uoft/MAT137/unit09.md).
