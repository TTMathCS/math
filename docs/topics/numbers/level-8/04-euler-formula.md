---
title: "Euler's formula"
---

# Euler's formula

*Numbers · level 8, lesson 4 of 6*

## A question to start

Here is a line often called the most beautiful in mathematics:

$$e^{i\pi} + 1 = 0$$

It links the five most important numbers: $0$ and $1$ from counting, $\pi$ from circles, $e$ from growth, and $i$ from
equations. But read it slowly and it seems to make no sense. A power like $e^3$ means $e \times e \times e$. What could
it mean to multiply $e$ by itself "$i\pi$ times"? And how could the answer be the plain number $-1$?

This lesson answers both questions. The line is not magic; it is a short calculation, once we agree what $e^{i\theta}$
should mean. The surprising part is that there is only one sensible agreement, and it ties exponentials to circles.

## The idea

### The problem: what does $e^{\text{complex}}$ mean?

You met the number $e \approx 2.71828$ as the base of natural growth (see
[MAT137 Unit 4](../../../uoft/MAT137/unit04.md) on the U of T shelf, or [Change](../../change/index.md)). For real $x$,
$e^x$ is defined, and it obeys $e^{x}e^{y} = e^{x + y}$. But "repeated multiplication" cannot give a meaning to
$e^{i\theta}$. We are in the same position as in level 5, when $2^{-3}$ needed a meaning: we must **choose** a
definition, and we want one that agrees with the old $e^x$ for real $x$ and keeps the old rules. As always, the old
rules will decide for us.

### The power series of $e^x$, $\cos x$ and $\sin x$

In calculus one proves that these three functions can be written as never-ending sums of powers, called **power
series** (or Taylor series). Here $n!$ ("$n$ factorial") is $1 \times 2 \times \cdots \times n$, so $3! = 6$ and
$4! = 24$:

$$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \frac{x^5}{5!} + \cdots$$

$$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots \qquad \sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots$$

(For $\cos$ and $\sin$, $x$ is in **radians**.) The factorials grow so fast that the terms shrink quickly: ten terms
of the first series at $x = 1$ already give $e \approx 2.7182815$, correct to six decimal places. These are not
approximations; the infinite sums equal the functions exactly, for every real $x$.

Look at them side by side. $e^x$ has **every** power of $x$, all with plus signs. $\cos x$ has the **even** powers,
and $\sin x$ the **odd** powers, with signs that alternate $+, -, +, -$. It looks as if $e^x$ is made of the same
pieces as $\cos$ and $\sin$, except for the signs. Something must be able to produce those alternating signs. Powers of
$i$ do exactly that.

### Putting $i\theta$ into the series

A power series uses only adding and multiplying, which work perfectly well for complex numbers. So **define** $e^z$
for complex $z$ by the same series. Put $z = i\theta$ and use the cycle $i^2 = -1$, $i^3 = -i$, $i^4 = 1$:

$$e^{i\theta} = 1 + i\theta + \frac{(i\theta)^2}{2!} + \frac{(i\theta)^3}{3!} + \frac{(i\theta)^4}{4!} + \frac{(i\theta)^5}{5!} + \cdots$$

$$= 1 + i\theta - \frac{\theta^2}{2!} - i\frac{\theta^3}{3!} + \frac{\theta^4}{4!} + i\frac{\theta^5}{5!} - \cdots$$

Now gather the terms without $i$ and the terms with $i$ (for these series, rearranging is allowed; that is proved in
analysis):

$$= \left(1 - \frac{\theta^2}{2!} + \frac{\theta^4}{4!} - \cdots\right) + i\left(\theta - \frac{\theta^3}{3!} + \frac{\theta^5}{5!} - \cdots\right)$$

The first bracket is the series for $\cos\theta$ and the second is the series for $\sin\theta$. So

$$\boxed{\,e^{i\theta} = \cos\theta + i\sin\theta\,}$$

This is **Euler's formula**. Leonhard Euler published it in 1748. In the notation of [lesson 1](01-polar-form.md),
$e^{i\theta} = \operatorname{cis}\theta$: the point on the unit circle at angle $\theta$.

### A second reason: motion round a circle

Here is a picture-based reason that needs no series. For real numbers, $e^{kt}$ is the function whose rate of change
is $k$ times itself. Suppose $e^{it}$ keeps that property with $k = i$, and think of $t$ as time and $z(t) = e^{it}$ as
the position of a moving point. Then its **velocity** is $i \times$ (its position).

- Multiplying by $i$ is a quarter turn (level 7). So the velocity always points at **right angles** to the line from
  0 to the point. Moving at right angles to the radius means moving **round a circle**, never towards or away from 0.
- $|i \times z| = |z|$. At $t = 0$ the point is at $e^0 = 1$, on the unit circle, so it stays on the unit circle and
  its speed is always 1.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 230" role="img" aria-label="The unit circle with a point at angle theta; a green arc of length theta from 1 to the point; an arrow from the point at right angles to the radius shows the velocity i times z">
  <line x1="40" y1="120" x2="270" y2="120" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="150" y1="220" x2="150" y2="15" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <circle cx="150" cy="120" r="80" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 230 120 A 80 80 0 0 0 211.3 68.6" fill="none" stroke="#7ccf9a" stroke-width="5"/>
  <line x1="150" y1="120" x2="211.3" y2="68.6" stroke="#9cc9ea" stroke-width="2.5"/>
  <line x1="211.3" y1="68.6" x2="179.2" y2="30.3" stroke="#eea66f" stroke-width="3"/>
  <polyline points="181.8,41.2 179.2,30.3 189.4,34.8" fill="none" stroke="#eea66f" stroke-width="3"/>
  <circle cx="211.3" cy="68.6" r="5" fill="#9cc9ea"/>
  <circle cx="230" cy="120" r="4" fill="currentColor"/>
  <g font-size="13" fill="currentColor">
    <text x="218" y="64">e^(iθ)</text>
    <text x="236" y="98">arc θ</text>
    <text x="236" y="136">1</text>
    <text x="50" y="26">velocity i·e^(iθ)</text>
    <text x="170" y="112">θ</text>
  </g>
</svg>
</div>

A point moving at speed 1 round a circle of radius 1 has travelled a distance $t$ along the circle after time $t$. An
arc of length $t$ on the unit circle is an angle of $t$ **radians** (that is the definition of a radian). So after time
$\theta$ the point is at angle $\theta$: $e^{i\theta} = \cos\theta + i\sin\theta$ again. This also shows why the formula
needs radians: in degrees there would be an untidy factor of $\tfrac{\pi}{180}$ everywhere.

### It obeys the law of exponents

A good definition should keep the old rules. Check $e^{i\alpha}e^{i\beta} = e^{i(\alpha + \beta)}$: the left side is
$\operatorname{cis}\alpha\operatorname{cis}\beta$, and lesson 1 proved that equals $\operatorname{cis}(\alpha + \beta)$,
which is the right side. ✓ So "angles add when you multiply" is just the familiar rule "exponents add when you
multiply". And De Moivre's theorem is the rule $(e^{i\theta})^n = e^{in\theta}$.

### Exponential form

Every complex number can now be written as

$$z = re^{i\theta}$$

with $r = |z|$ and $\theta = \arg z$. This is the shortest way to write polar form. More generally, for any complex
number $a + bi$,

$$e^{a + bi} = e^a e^{bi} = e^a(\cos b + i\sin b)$$

a number with length $e^a$ and angle $b$.

Euler's formula also runs backwards. Adding and subtracting $e^{i\theta} = \cos\theta + i\sin\theta$ and
$e^{-i\theta} = \cos\theta - i\sin\theta$:

$$\cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2} \qquad\qquad \sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i}$$

Trigonometry is secretly a branch of the exponential function.

### What $e^{i\pi} + 1 = 0$ does and does not mean

Put $\theta = \pi$: $e^{i\pi} = \cos\pi + i\sin\pi = -1 + 0i$. So $e^{i\pi} = -1$, or $e^{i\pi} + 1 = 0$.

**What it means.** Start at 1 on the unit circle and travel a distance $\pi$ round it: half the circumference (which is
$2\pi$). You arrive at $-1$. That is all, and it is a lot: it says that the exponential function, made for growth, and
the number $\pi$, made for circles, are the same story seen from two sides.

**What it does not mean.**

- It does not mean "$e$ multiplied by itself $i\pi$ times". The left side is defined by the series, not by repeated
  multiplication.
- It is not a mystery or a coincidence, and it does not prove anything about the physical world. It follows from the
  definitions in a few lines.
- It does not let you use every rule for real logarithms. Since $e^{2\pi i} = 1 = e^0$, one could "take logs" and get
  $2\pi i = 0$, which is false. For complex numbers, $e^z$ repeats every $2\pi i$ (as the point goes round the circle
  again), so it has no single inverse. Logarithms of complex numbers have many values, one for each turn.

## Worked examples

**1. Values on the circle.** Find $e^{i\pi/2}$, $e^{i\pi/3}$ and $e^{2\pi i}$.

1. $e^{i\pi/2} = \cos\tfrac\pi2 + i\sin\tfrac\pi2 = i$.
2. $e^{i\pi/3} = \tfrac12 + \tfrac{\sqrt3}{2}i$.
3. $e^{2\pi i} = \cos2\pi + i\sin2\pi = 1$: a full turn.

**2. Exponential form.** Write $-2 + 2i$ in the form $re^{i\theta}$.

$r = \sqrt{4 + 4} = 2\sqrt2$. The point is in the second quadrant with reference angle $\tfrac\pi4$, so
$\theta = \tfrac{3\pi}{4}$. So $-2 + 2i = 2\sqrt2\,e^{3\pi i/4}$.

**3. A complex exponent.** Write $e^{2 + i\pi/6}$ as $a + bi$.

$e^{2 + i\pi/6} = e^2\left(\cos\tfrac\pi6 + i\sin\tfrac\pi6\right) = \tfrac{\sqrt3}{2}e^2 + \tfrac12 e^2\,i \approx 6.399 +
3.695i$.

**4. Watching the series arrive.** Add up the series for $e^{i\pi}$ term by term, using $\pi \approx 3.14159$.

| terms up to | $(i\pi)^1$ | $(i\pi)^2$ | $(i\pi)^4$ | $(i\pi)^6$ | $(i\pi)^8$ | $(i\pi)^{10}$ | $(i\pi)^{12}$ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| sum | $1 + 3.142i$ | $-3.935 + 3.142i$ | $0.124 - 2.026i$ | $-1.211 + 0.524i$ | $-0.976 - 0.075i$ | $-1.002 + 0.007i$ | $-1.000 - 0.000i$ |

The partial sums swing round 0 in a spiral and settle on $-1$, as the formula promises.

**5. $i$ to the power $i$.** Find a value of $i^i$.

1. Define $a^b$ as $e^{b\ln a}$, so we need a logarithm of $i$: a number $L$ with $e^L = i$.
2. Since $i = e^{i\pi/2}$, one choice is $L = \tfrac{i\pi}{2}$.
3. Then $i^i = e^{i \cdot i\pi/2} = e^{-\pi/2} \approx 0.2079$.

An imaginary number to an imaginary power gives a **real** number. Other choices of $L$ (adding full turns,
$L = \tfrac{i\pi}{2} + 2\pi i k$) give other real values $e^{-\pi/2 - 2\pi k}$; the one above is called the
**principal value**.

## Try it

1. Find $e^{i\pi/4}$, $e^{-i\pi/2}$ and $e^{3\pi i}$ in the form $a + bi$.
2. Write $1 - i\sqrt3$ and $-5$ in the form $re^{i\theta}$.
3. Write $e^{1 + i\pi}$ and $e^{\ln 2 + i\pi/2}$ as $a + bi$.
4. Simplify $e^{i\theta}\cdot e^{-i\theta}$ and explain why it gives $\cos^2\theta + \sin^2\theta = 1$.
5. Use $\cos\theta = \dfrac{e^{i\theta} + e^{-i\theta}}{2}$ to show that $\cos^2\theta = \dfrac{1 + \cos2\theta}{2}$.
6. Show that $|e^{a + bi}| = e^a$. For which complex $z$ is $|e^z| = 1$?
7. Find all complex $z$ with $e^z = 1$.
8. Find the error: "$e^{i\pi} = -1$, so $(e^{i\pi})^2 = 1$, so $e^{2\pi i} = 1 = e^0$, so $2\pi i = 0$."

??? note "Answers"
    1. $e^{i\pi/4} = \tfrac{\sqrt2}{2} + \tfrac{\sqrt2}{2}i$. $e^{-i\pi/2} = \cos\left(-\tfrac\pi2\right) + i\sin\left(-\tfrac\pi2\right) = -i$.
       $e^{3\pi i} = \cos3\pi + i\sin3\pi = -1$ (one and a half turns).
    2. $1 - i\sqrt3$: $r = 2$, fourth quadrant, $\theta = -\tfrac\pi3$: $2e^{-i\pi/3}$. And $-5 = 5e^{i\pi}$.
    3. $e^{1 + i\pi} = e \cdot e^{i\pi} = -e \approx -2.718$. $e^{\ln 2 + i\pi/2} = 2 \cdot i = 2i$.
    4. $e^{i\theta}e^{-i\theta} = e^0 = 1$. In the other form,
       $(\cos\theta + i\sin\theta)(\cos\theta - i\sin\theta) = \cos^2\theta + \sin^2\theta$. So that equals 1.
    5. $\cos^2\theta = \dfrac{(e^{i\theta} + e^{-i\theta})^2}{4} = \dfrac{e^{2i\theta} + 2 + e^{-2i\theta}}{4} =
       \dfrac{2 + 2\cos2\theta}{4} = \dfrac{1 + \cos2\theta}{2}$, using the same formula with $2\theta$.
    6. $e^{a + bi} = e^a e^{bi}$ and $|e^{bi}| = |\cos b + i\sin b| = 1$, so the modulus is $e^a$ (which is positive). It
       equals 1 exactly when $a = 0$: when $z$ is purely imaginary (or 0).
    7. $|e^z| = e^a = 1$ forces $a = 0$. Then $e^{bi} = 1$ needs $\cos b = 1$ and $\sin b = 0$, so $b = 2\pi k$. All
       solutions: $z = 2\pi k\,i$ for integers $k$.
    8. The last step. "$e^A = e^B$ so $A = B$" is true for real numbers but false for complex ones, because $e^z$
       repeats every $2\pi i$ (question 7). Everything before that step is correct.

## Common mistake

**Using degrees in $e^{i\theta}$.** $e^{i \cdot 180}$ is not $-1$; it is $\cos180 + i\sin180$ with 180 **radians**,
about $-0.598 - 0.801i$. Euler's formula is only true with $\theta$ in radians.

**Assuming the old logarithm rules.** For complex numbers, $e^z$ does not have a single inverse, so steps like "take
$\ln$ of both sides" can fail (Try it question 8). Use $e^z = e^w$ only to conclude that $z - w$ is a whole number of
$2\pi i$.

## Where it leads

- Back: [Roots of unity](03-roots-of-unity.md) (the roots are $e^{2\pi ik/n}$) · Next:
  [The fundamental theorem of algebra](05-fundamental-theorem.md).
- [Level 8 page](index.md) · [Numbers topic page](../index.md)
- Growth, decay and the number $e$: [Change](../../change/index.md). Never-ending sums: [Infinity](../../infinity/index.md)
  and [Patterns](../../patterns/index.md).
- On the U of T shelf, the power series used here are built properly in
  [MAT137 Unit 14 (power series and Taylor series)](../../../uoft/MAT137/unit14.md) and
  [MAT159 Unit 7 (power series)](../../../uoft/MAT159H1/unit07.md); $e$ itself is in
  [MAT137 Unit 4 (transcendental functions)](../../../uoft/MAT137/unit04.md).
