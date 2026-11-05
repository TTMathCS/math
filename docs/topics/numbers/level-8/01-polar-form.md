---
title: "Polar form"
---

# Polar form

*Numbers · level 8, lesson 1 of 6*

## A question to start

Multiply these two complex numbers the ordinary way:

$$(1 + i\sqrt3)(\sqrt3 + i) = \sqrt3 + i + 3i + i^2\sqrt3 = \sqrt3 + 4i - \sqrt3 = 4i.$$

The real parts cancel exactly and the answer is the pure imaginary number $4i$. Why so tidy?

Draw them. The arrow to $1 + i\sqrt3$ has length 2 and points 60° above the real axis. The arrow to $\sqrt3 + i$ has
length 2 and points 30° up. The answer $4i$ has length $2 \times 2 = 4$ and points $60° + 30° = 90°$ up. The lengths
**multiplied** and the angles **added**. This lesson shows that this always happens, and proves it.

## The idea

### Length and angle

In level 7 you located $z = a + bi$ by going $a$ across and $b$ up: its **rectangular** (or Cartesian) form. You can
also locate the same point by saying **how far** it is from 0 and **in which direction**:

- the **modulus** $r = |z| = \sqrt{a^2 + b^2}$, its distance from 0;
- the **argument** $\theta = \arg z$, the angle from the positive real axis to the arrow, measured anticlockwise.

This is like giving directions as "5 km on a bearing of 30°" instead of "4.3 km east, 2.5 km north". Both describe
the same place.

**Radians.** From here on, angles are usually measured in **radians**: an angle of 1 radian at the centre of a circle
cuts off an arc as long as the radius. A full turn is $2\pi$ radians, so

$$\pi \text{ radians} = 180°, \qquad \tfrac{\pi}{2} = 90°, \qquad \tfrac{\pi}{3} = 60°, \qquad \tfrac{\pi}{4} = 45°, \qquad \tfrac{\pi}{6} = 30°.$$

Radians are not just another unit; they are the natural one, and Euler's formula in lesson 4 only works with them.
You may use degrees for drawing, but switch to radians for calculating.

**The argument is not unique.** Turning a full extra turn lands on the same arrow, so $\theta$, $\theta + 2\pi$,
$\theta - 2\pi$, ... are all arguments of the same $z$. To have one definite answer we use the **principal argument**,
the one with $-\pi < \theta \le \pi$ (between $-180°$ and $180°$, including $180°$). The number 0 has no argument at
all: an arrow of length 0 points nowhere.

### From polar to rectangular

Draw the right triangle under the arrow: hypotenuse $r$, angle $\theta$ at 0. By the definitions of cosine and sine,

$$a = r\cos\theta, \qquad b = r\sin\theta.$$

(These hold in every quadrant, because that is how cosine and sine are defined for all angles: the coordinates of the
point at angle $\theta$ on the circle of radius 1.) So

$$z = a + bi = r(\cos\theta + i\sin\theta)$$

This is the **polar form** (or modulus-argument form) of $z$. The bracket is written so often that it has a short
name: $\operatorname{cis}\theta = \cos\theta + i\sin\theta$ ("c-i-s"). Then $z = r\operatorname{cis}\theta$. Note that
$\operatorname{cis}\theta$ itself always has modulus $\sqrt{\cos^2\theta + \sin^2\theta} = 1$: it is a point on the
**unit circle**, and $r$ stretches it out to length $r$.

### From rectangular to polar

Given $a + bi$:

1. $r = \sqrt{a^2 + b^2}$.
2. For the angle, $\tan\theta = \dfrac ba$. But a calculator's $\tan^{-1}$ only returns angles between $-90°$ and
   $90°$, which is the right half of the plane. **Always plot the point first** and choose the angle in the correct
   quadrant.

A reliable method: find the **reference angle** $\alpha = \tan^{-1}\left|\dfrac ba\right|$ (an acute angle), then

| Quadrant | Signs | Principal argument |
| --- | --- | --- |
| first | $a > 0$, $b > 0$ | $\theta = \alpha$ |
| second | $a < 0$, $b > 0$ | $\theta = \pi - \alpha$ |
| third | $a < 0$, $b < 0$ | $\theta = -(\pi - \alpha)$ |
| fourth | $a > 0$, $b < 0$ | $\theta = -\alpha$ |

Points on the axes are easy to read off: $\arg 5 = 0$, $\arg(3i) = \tfrac\pi2$, $\arg(-2) = \pi$, $\arg(-i) = -\tfrac\pi2$.

### Multiplying: lengths multiply, angles add

**Theorem.** If $z = r\operatorname{cis}\alpha$ and $w = s\operatorname{cis}\beta$, then

$$zw = rs\operatorname{cis}(\alpha + \beta).$$

**Proof.** The real numbers $r$ and $s$ just multiply, so the work is in the brackets. Expand as in level 7:

$$(\cos\alpha + i\sin\alpha)(\cos\beta + i\sin\beta) = (\cos\alpha\cos\beta - \sin\alpha\sin\beta) + i(\sin\alpha\cos\beta + \cos\alpha\sin\beta).$$

Now recall the **angle-sum formulas** from trigonometry:

$$\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta, \qquad \sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta.$$

The real part is exactly $\cos(\alpha + \beta)$ and the imaginary part is exactly $\sin(\alpha + \beta)$. So
$\operatorname{cis}\alpha\,\operatorname{cis}\beta = \operatorname{cis}(\alpha + \beta)$, and multiplying by $rs$
finishes the proof. ∎

Read the proof the other way round and it is just as interesting: **complex multiplication is the angle-sum formulas
in disguise.** If you ever forget them, multiply $\operatorname{cis}\alpha$ by $\operatorname{cis}\beta$ and read them
off.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 230" role="img" aria-label="Three arrows from zero: square root of 3 plus i at 30 degrees, 1 plus i root 3 at 60 degrees, each of length 2, and their product 4i at 90 degrees with length 4">
  <line x1="40" y1="200" x2="290" y2="200" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="220" x2="60" y2="20" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 80 200 A 20 20 0 0 0 77.3 190" fill="none" stroke="#9cc9ea" stroke-width="2.5"/>
  <path d="M 95 200 A 35 35 0 0 0 77.5 169.7" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <path d="M 115 200 A 55 55 0 0 0 60 145" fill="none" stroke="#7ccf9a" stroke-width="2.5"/>
  <line x1="60" y1="200" x2="112" y2="170" stroke="#9cc9ea" stroke-width="3"/>
  <line x1="60" y1="200" x2="90" y2="148" stroke="#eea66f" stroke-width="3"/>
  <line x1="60" y1="200" x2="60" y2="80" stroke="#7ccf9a" stroke-width="4"/>
  <circle cx="112" cy="170" r="5" fill="#9cc9ea"/>
  <circle cx="90" cy="148" r="5" fill="#eea66f"/>
  <circle cx="60" cy="80" r="5" fill="#7ccf9a"/>
  <g font-size="13" fill="currentColor">
    <text x="118" y="174">√3 + i: length 2, 30°</text>
    <text x="96" y="142">1 + i√3: length 2, 60°</text>
    <text x="68" y="78">4i: length 4, 90°</text>
    <text x="270" y="216">real</text>
  </g>
</svg>
</div>

### Dividing, reciprocals and conjugates

Division undoes multiplication, so it **divides the lengths and subtracts the angles**:

$$\frac{r\operatorname{cis}\alpha}{s\operatorname{cis}\beta} = \frac rs\operatorname{cis}(\alpha - \beta) \qquad (s \ne 0).$$

(Check: multiply the right side by $s\operatorname{cis}\beta$; lengths give $r$, angles give $\alpha$.) In particular

$$\frac{1}{r\operatorname{cis}\theta} = \frac1r\operatorname{cis}(-\theta), \qquad \overline{r\operatorname{cis}\theta} = r\operatorname{cis}(-\theta).$$

The conjugate keeps the length and flips the angle, which is the reflection in the real axis you met in level 7.

### What multiplication does to the whole plane

Fix $w = s\operatorname{cis}\beta$. The rule "multiply every complex number by $w$" moves every point of the plane:
each arrow is **turned by $\beta$** and **stretched by $s$**. That is one rotation and one scaling, both about 0, so
shapes keep their shape: a square goes to a square, a triangle to a similar triangle. Multiplying by $i =
\operatorname{cis}\tfrac\pi2$ is the quarter turn of level 7, with $s = 1$. This is why engineers and physicists use
complex numbers for anything that rotates or oscillates: rotating is just multiplying.

<figure class="play" data-play="unitwave"><span class="ai-tag">AI-created</span><figcaption><b>A point on the circle.</b> Its angle and its distance from the centre describe it.</figcaption></figure>

## Worked examples

**1. Rectangular to polar (second quadrant).** Write $-1 + i\sqrt3$ in polar form.

1. $r = \sqrt{1 + 3} = 2$.
2. The point $(-1, \sqrt3)$ is in the second quadrant. Reference angle: $\tan\alpha = \dfrac{\sqrt3}{1}$, so
   $\alpha = \tfrac\pi3$.
3. $\theta = \pi - \tfrac\pi3 = \tfrac{2\pi}{3}$ (that is, 120°).
4. So $-1 + i\sqrt3 = 2\operatorname{cis}\tfrac{2\pi}3$. Check: $2\cos\tfrac{2\pi}{3} = 2 \times (-\tfrac12) = -1$ ✓ and
   $2\sin\tfrac{2\pi}{3} = 2 \times \tfrac{\sqrt3}{2} = \sqrt3$ ✓.

**2. Rectangular to polar (third quadrant).** Write $-3 - 4i$ in polar form.

1. $r = \sqrt{9 + 16} = 5$.
2. Third quadrant. Reference angle $\alpha = \tan^{-1}\tfrac43 \approx 0.9273$ rad (about 53.13°).
3. $\theta = -(\pi - 0.9273) \approx -2.2143$ rad (about $-126.87°$).
4. A calculator's $\tan^{-1}\left(\tfrac{-4}{-3}\right) = \tan^{-1}\tfrac43 \approx 0.9273$ would put the point in the
   first quadrant, at $3 + 4i$: wrong by a half turn.

**3. Polar to rectangular.** Write $4\operatorname{cis}\left(-\tfrac\pi6\right)$ as $a + bi$.

$a = 4\cos\left(-\tfrac\pi6\right) = 4 \times \tfrac{\sqrt3}{2} = 2\sqrt3$ and $b = 4\sin\left(-\tfrac\pi6\right) = 4
\times \left(-\tfrac12\right) = -2$. So the number is $2\sqrt3 - 2i$.

**4. An exact value of $\cos 75°$.** Multiply $\operatorname{cis}45°$ by $\operatorname{cis}30°$ in both forms.

1. Polar: the product is $\operatorname{cis}75°$.
2. Rectangular: $\left(\tfrac{\sqrt2}{2} + \tfrac{\sqrt2}{2}i\right)\left(\tfrac{\sqrt3}{2} + \tfrac12 i\right) =
   \tfrac{\sqrt6}{4} + \tfrac{\sqrt2}{4}i + \tfrac{\sqrt6}{4}i + \tfrac{\sqrt2}{4}i^2 = \tfrac{\sqrt6 - \sqrt2}{4} +
   \tfrac{\sqrt6 + \sqrt2}{4}i$.
3. Equal complex numbers have equal parts, so $\cos75° = \tfrac{\sqrt6 - \sqrt2}{4} \approx 0.2588$ and
   $\sin75° = \tfrac{\sqrt6 + \sqrt2}{4} \approx 0.9659$. (A calculator agrees.)

**5. Dividing in polar form.** Find $\dfrac{-1 + i\sqrt3}{1 + i}$ in polar form, then in rectangular form.

1. Top: $2\operatorname{cis}120°$ (example 1). Bottom: $1 + i = \sqrt2\operatorname{cis}45°$.
2. Quotient: $\dfrac{2}{\sqrt2}\operatorname{cis}(120° - 45°) = \sqrt2\operatorname{cis}75°$.
3. Using example 4: $\sqrt2 \times \tfrac{\sqrt6 - \sqrt2}{4} = \tfrac{\sqrt{12} - 2}{4} = \tfrac{\sqrt3 - 1}{2}$ for the
   real part, and $\sqrt2 \times \tfrac{\sqrt6 + \sqrt2}{4} = \tfrac{\sqrt3 + 1}{2}$ for the imaginary part.
4. Check the level 7 way: multiply top and bottom by $1 - i$. Top: $(-1 + i\sqrt3)(1 - i) = -1 + i + i\sqrt3 + \sqrt3 =
   (\sqrt3 - 1) + (\sqrt3 + 1)i$. Bottom: 2. Same answer. ✓

## Try it

1. Write in polar form, with the principal argument in radians: (a) $1 - i$; (b) $-2i$; (c) $-5$; (d) $-4 + 4i$.
2. Write $\sqrt3 - i$ and $2 - 2i\sqrt3$ in polar form.
3. Write $3\operatorname{cis}\tfrac{5\pi}{6}$ and $\sqrt2\operatorname{cis}\left(-\tfrac{3\pi}{4}\right)$ as $a + bi$.
4. Find $zw$ and $\dfrac zw$ in polar form for $z = 6\operatorname{cis}\tfrac{\pi}{2}$, $w = 2\operatorname{cis}\tfrac{\pi}{3}$.
5. Find $2\operatorname{cis}40° \times 5\operatorname{cis}110°$ and write the answer as $a + bi$ exactly.
6. Find the exact value of $\cos15°$ by working out $\dfrac{\operatorname{cis}45°}{\operatorname{cis}30°}$ in rectangular
   form.
7. The point $3 + i$ is rotated 90° anticlockwise about 0 and then its distance from 0 is doubled. Which single
   complex number do you multiply by? Where does the point end up?
8. Show that $\arg(z\bar z) = 0$ for every $z \ne 0$, using polar form, and explain why that agrees with level 7.

??? note "Answers"
    1. (a) $r = \sqrt2$, fourth quadrant, $\theta = -\tfrac\pi4$: $\sqrt2\operatorname{cis}\left(-\tfrac\pi4\right)$.
       (b) $2\operatorname{cis}\left(-\tfrac\pi2\right)$. (c) $5\operatorname{cis}\pi$. (d) $r = \sqrt{32} = 4\sqrt2$,
       second quadrant, $\theta = \pi - \tfrac\pi4 = \tfrac{3\pi}4$: $4\sqrt2\operatorname{cis}\tfrac{3\pi}{4}$.
    2. $\sqrt3 - i$: $r = 2$, fourth quadrant, $\tan\alpha = \tfrac{1}{\sqrt3}$ so $\alpha = \tfrac\pi6$: $2\operatorname{cis}\left(-\tfrac\pi6\right)$.
       $2 - 2i\sqrt3$: $r = \sqrt{4 + 12} = 4$, $\tan\alpha = \sqrt3$, $\alpha = \tfrac\pi3$: $4\operatorname{cis}\left(-\tfrac\pi3\right)$.
    3. $3\left(-\tfrac{\sqrt3}{2} + \tfrac12 i\right) = -\tfrac{3\sqrt3}{2} + \tfrac32 i$. And
       $\sqrt2\left(-\tfrac{\sqrt2}{2} - \tfrac{\sqrt2}{2}i\right) = -1 - i$.
    4. $zw = 12\operatorname{cis}\tfrac{5\pi}{6}$ (since $\tfrac\pi2 + \tfrac\pi3 = \tfrac{5\pi}6$).
       $\dfrac zw = 3\operatorname{cis}\tfrac{\pi}{6}$ (since $\tfrac\pi2 - \tfrac\pi3 = \tfrac\pi6$).
    5. $10\operatorname{cis}150° = 10\left(-\tfrac{\sqrt3}{2} + \tfrac12 i\right) = -5\sqrt3 + 5i$.
    6. $\operatorname{cis}45° \times \overline{\operatorname{cis}30°} = \left(\tfrac{\sqrt2}{2} + \tfrac{\sqrt2}{2}i\right)\left(\tfrac{\sqrt3}{2} - \tfrac12 i\right)$
       (dividing by a number of modulus 1 is multiplying by its conjugate). Real part:
       $\tfrac{\sqrt6}{4} + \tfrac{\sqrt2}{4}$. So $\cos15° = \tfrac{\sqrt6 + \sqrt2}{4} \approx 0.9659$. (Imaginary part
       $\tfrac{\sqrt6 - \sqrt2}{4} = \sin15°$.)
    7. Turn by $\tfrac\pi2$ and stretch by 2: multiply by $2\operatorname{cis}\tfrac\pi2 = 2i$. The point goes to
       $2i(3 + i) = 6i + 2i^2 = -2 + 6i$.
    8. If $z = r\operatorname{cis}\theta$ then $\bar z = r\operatorname{cis}(-\theta)$, so $z\bar z =
       r^2\operatorname{cis}(\theta - \theta) = r^2\operatorname{cis}0 = r^2$. Argument 0 means a positive real number,
       matching level 7's $z\bar z = a^2 + b^2 = |z|^2$.

## Common mistake

**Trusting $\tan^{-1}\dfrac ba$ for the argument.** It cannot tell $3 + 4i$ from $-3 - 4i$, because $\dfrac{4}{3} =
\dfrac{-4}{-3}$. Always sketch the point and pick the angle in its quadrant. (Many calculators and programming
languages have a two-input function, often called `atan2`, that does this for you.)

**Adding the moduli or multiplying the arguments.** In a product the lengths **multiply** and the angles **add**,
never the other way round. A useful check: $i \times i$ has length $1 \times 1 = 1$ and angle $90° + 90° = 180°$, which
is $-1$. ✓

## Where it leads

- Next: [De Moivre's theorem](02-de-moivre.md), which repeats today's rule to take powers.
- [Level 8 page](index.md) · [Numbers topic page](../index.md) · Back to [the complex plane](../level-7/04-complex-plane.md)
  in level 7.
- Sine, cosine, radians and the angle-sum formulas: [Geometry](../../geometry/index.md) and
  [Measurement](../../measurement/index.md).
- Polar coordinates for any point of the plane, not only complex numbers, are used for curves such as spirals:
  [Change](../../change/index.md).
- On the U of T shelf, multiplying by a complex number of modulus 1 is the simplest example of a rotation, which
  returns as an isometry in [MAT247 Unit 4 (orthogonal and unitary operators)](../../../uoft/MAT247H1/unit04.md).
