---
title: "Derivatives of e^x, ln x, sin x and cos x"
---

# Derivatives of $e^x$, $\ln x$, $\sin x$ and $\cos x$

*Change and motion · level 8, lesson 2 of 7*

## A question to start

Is there a function that is **its own derivative**? A graph whose slope at every point is exactly equal to its height?

The zero function works, but that is cheating. A real example would be strange: at height 1 its slope would be 1; at
height 10 its slope would be 10; at height 1000, slope 1000. The higher it gets, the faster it climbs, faster and
faster without end.

Such a function exists, and there is exactly one of them that passes through $(0, 1)$. It is $e^x$, where
$e = 2.71828\ldots$ is one of the most important numbers in mathematics. This lesson shows where $e$ comes from, and
then finds the derivatives of the other famous functions, the logarithm, sine and cosine, each from a real reason.

## The idea

### Exponential functions: the slope is proportional to the height

Take any base $b > 0$ and the function $f(x) = b^x$. From first principles, using the exponent law
$b^{x + h} = b^x b^h$:

$$\frac{b^{x + h} - b^x}{h} = \frac{b^x b^h - b^x}{h} = b^x \cdot \frac{b^h - 1}{h}.$$

The factor $b^x$ does not involve $h$, so it waits outside the limit:

$$\frac{d}{dx}\,b^x = b^x \cdot L(b), \qquad \text{where } L(b) = \lim_{h \to 0} \frac{b^h - 1}{h}.$$

So **the derivative of $b^x$ is $b^x$ times a constant**. The slope is proportional to the height. And the constant
$L(b)$ is just the slope of $b^x$ at $x = 0$ (put $x = 0$ in the formula). You estimated $L(2) \approx 0.693$ in
[level 7, lesson 1](../level-7/01-limits.md). Here are more, each worked out with a tiny $h$:

| Base $b$ | 2 | 2.5 | 2.7 | 2.72 | 3 |
| --- | --- | --- | --- | --- | --- |
| Slope at 0, $L(b)$ | 0.6931 | 0.9163 | 0.9933 | 1.0006 | 1.0986 |

The bigger the base, the steeper the curve at 0. Somewhere between 2.7 and 2.72 there is a base whose slope at 0 is
**exactly 1**. That base is called $e$:

$$e = 2.718281828\ldots, \qquad \lim_{h \to 0} \frac{e^h - 1}{h} = 1.$$

With $b = e$ the constant is 1, so

$$\frac{d}{dx}\,e^x = e^x.$$

This is why $e$, and not 10 or 2, is "the natural" base: it is the only one that makes the constant disappear.

### The same $e$ as compound interest

You may have met $e$ in [Ratio: continuous growth and e](../../ratio/level-8/05-continuous-e.md) as the limit of
$\left(1 + \frac1n\right)^n$. It is the same number. The fact $\frac{e^h - 1}{h} \to 1$ says that for tiny $h$,
$e^h \approx 1 + h$, so $e \approx (1 + h)^{1/h}$. Put $h = \frac1n$: $e \approx \left(1 + \frac1n\right)^n$, which gets
better as $n$ grows ($n = 1000$ gives $2.7169$; $n = 1\,000\,000$ gives $2.718280$).

### The natural logarithm

The **natural logarithm** $\ln x$ is the inverse of $e^x$: $y = \ln x$ means $e^y = x$ (for $x > 0$). To find its
derivative, start from $e^y = x$ and differentiate both sides with respect to $x$, using the chain rule on the left:

$$e^y \cdot \frac{dy}{dx} = 1 \quad\Longrightarrow\quad \frac{dy}{dx} = \frac{1}{e^y} = \frac{1}{x}.$$

$$\frac{d}{dx}\,\ln x = \frac{1}{x}.$$

**The picture.** The graph of $\ln x$ is the graph of $e^x$ reflected in the line $y = x$. Reflecting swaps rise and
run, so every slope turns into its reciprocal. At the point $(1, e)$ on $e^x$ the slope is $e$; at the mirror point
$(e, 1)$ on $\ln x$ the slope is $\frac{1}{e}$, which is $\frac1x$ there. ✓

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 300" role="img" aria-label="The curves y equals e to the x and y equals ln x, mirror images in the dashed line y equals x. The point (1, e) on e to the x, where the tangent has slope e, reflects to the point (e, 1) on ln x, where the tangent has slope 1 over e.">
  <line x1="30" y1="178.7" x2="285" y2="178.7" stroke="currentColor" stroke-width="1.2"/>
  <line x1="125.1" y1="278" x2="125.1" y2="12" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="12" fill="currentColor"><line x1="163.2" y1="175.7" x2="163.2" y2="181.7" stroke="currentColor"/><text x="163.2" y="193.7" text-anchor="middle">1</text><line x1="201.3" y1="175.7" x2="201.3" y2="181.7" stroke="currentColor"/><text x="201.3" y="193.7" text-anchor="middle">2</text><line x1="239.3" y1="175.7" x2="239.3" y2="181.7" stroke="currentColor"/><text x="239.3" y="193.7" text-anchor="middle">3</text><line x1="277.4" y1="175.7" x2="277.4" y2="181.7" stroke="currentColor"/><text x="277.4" y="193.7" text-anchor="middle">4</text><line x1="122.1" y1="139" x2="128.1" y2="139" stroke="currentColor"/><text x="119.1" y="143" text-anchor="end">1</text><line x1="122.1" y1="99.3" x2="128.1" y2="99.3" stroke="currentColor"/><text x="119.1" y="103.3" text-anchor="end">2</text><line x1="122.1" y1="59.6" x2="128.1" y2="59.6" stroke="currentColor"/><text x="119.1" y="63.6" text-anchor="end">3</text><line x1="122.1" y1="19.9" x2="128.1" y2="19.9" stroke="currentColor"/><text x="119.1" y="23.9" text-anchor="end">4</text><text x="285" y="172.7" text-anchor="end">x</text><text x="131.1" y="22">y</text></g>
  <line x1="30" y1="278" x2="285" y2="12" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="146.1" y1="119.4" x2="180.3" y2="22.3" stroke="currentColor" stroke-width="1.5"/>
  <line x1="182.9" y1="156.6" x2="274.3" y2="121.5" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="30,175.5 31.9,175.3 33.7,175.2 35.6,175 37.5,174.8 39.4,174.6 41.2,174.4 43.1,174.1 45,173.9 46.9,173.7 48.7,173.4 50.6,173.1 52.5,172.9 54.4,172.6 56.2,172.3 58.1,171.9 60,171.6 61.9,171.2 63.7,170.8 65.6,170.4 67.5,170 69.4,169.6 71.2,169.1 73.1,168.6 75,168.1 76.9,167.6 78.7,167 80.6,166.4 82.5,165.8 84.4,165.2 86.2,164.5 88.1,163.7 90,163 91.9,162.2 93.7,161.4 95.6,160.5 97.5,159.6 99.4,158.6 101.2,157.6 103.1,156.5 105,155.4 106.9,154.2 108.7,153 110.6,151.7 112.5,150.3 114.3,148.9 116.2,147.3 118.1,145.8 120,144.1 121.8,142.3 123.7,140.5 125.6,138.6 127.5,136.5 129.3,134.4 131.2,132.2 133.1,129.8 135,127.4 136.8,124.8 138.7,122 140.6,119.2 142.5,116.2 144.3,113 146.2,109.7 148.1,106.2 150,102.5 151.8,98.7 153.7,94.7 155.6,90.4 157.5,86 159.3,81.3 161.2,76.3 163.1,71.2 165,65.7 166.8,60 168.7,54 170.6,47.8 172.5,41.1 174.3,34.2 176.2,26.9 178.1,19.2 180,11.2" fill="none" stroke="#eea66f" stroke-width="3"/>
  <polyline points="129.8,262.4 131.7,248.3 133.7,238 135.7,229.8 137.6,223 139.6,217.2 141.6,212.1 143.5,207.6 145.5,203.6 147.5,199.9 149.4,196.6 151.4,193.5 153.4,190.6 155.3,188 157.3,185.5 159.3,183.1 161.2,180.9 163.2,178.8 165.1,176.8 167.1,174.9 169.1,173.1 171,171.3 173,169.7 175,168.1 176.9,166.5 178.9,165 180.9,163.6 182.8,162.2 184.8,160.9 186.8,159.6 188.7,158.4 190.7,157.2 192.7,156 194.6,154.9 196.6,153.7 198.5,152.7 200.5,151.6 202.5,150.6 204.4,149.6 206.4,148.6 208.4,147.7 210.3,146.8 212.3,145.9 214.3,145 216.2,144.1 218.2,143.3 220.2,142.4 222.1,141.6 224.1,140.8 226.1,140 228,139.3 230,138.5 231.9,137.8 233.9,137.1 235.9,136.3 237.8,135.6 239.8,135 241.8,134.3 243.7,133.6 245.7,133 247.7,132.3 249.6,131.7 251.6,131.1 253.6,130.5 255.5,129.9 257.5,129.3 259.5,128.7 261.4,128.1 263.4,127.5 265.4,127 267.3,126.4 269.3,125.9 271.2,125.3 273.2,124.8 275.2,124.3 277.1,123.8 279.1,123.3 281.1,122.8 283,122.3 285,121.8" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="163.2" cy="70.8" r="4" fill="currentColor"/>
  <circle cx="228.6" cy="139" r="4" fill="currentColor"/>
  <text x="155.2" y="74.8" font-size="12" text-anchor="end" fill="currentColor">(1, e)</text>
  <text x="230.6" y="157" font-size="12" text-anchor="start" fill="currentColor">(e, 1)</text>
  <text x="33.8" y="167.1" font-size="12" text-anchor="start" fill="currentColor">eˣ</text>
  <text x="281.2" y="114.7" font-size="12" text-anchor="end" fill="currentColor">ln x</text>
  <text x="248.6" y="39.8" font-size="12" text-anchor="end" fill="currentColor">y = x</text>
</svg>
</div>

Two prizes follow at once.

- **Any base.** Since $b = e^{\ln b}$, we have $b^x = e^{x \ln b}$, and the chain rule gives
  $\frac{d}{dx}b^x = \ln b \cdot b^x$. So the mystery constant is $L(b) = \ln b$, and indeed $\ln 2 = 0.693147\ldots$
- **The power rule for every power.** For $x > 0$, $x^n = e^{n \ln x}$, so its derivative is
  $e^{n \ln x} \cdot \frac{n}{x} = x^n \cdot \frac{n}{x} = n x^{n-1}$. This is the proof promised in
  [level 7](../level-7/04-power-rule.md), and it works for $n = \pi$ as well as $n = 3$.

### Sine and cosine: the key limit

For sine and cosine, angles must be in **radians** ([Geometry: radians and the unit circle](../../geometry/level-8/02-radians-unit-circle.md)).
Everything rests on one limit:

$$\lim_{h \to 0} \frac{\sin h}{h} = 1.$$

A table first: $\frac{\sin 0.1}{0.1} = 0.998334$, $\frac{\sin 0.01}{0.01} = 0.999983$. Now a proof. Take a circle of
radius 1 and a small angle $h$ (between 0 and $\frac{\pi}{2}$) at its centre $O$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 275" role="img" aria-label="A quarter of a circle of radius 1 with centre O. The angle h at O cuts the circle at P; A is at (1, 0). Inside each other: the small triangle O A P with height sine h, the sector O A P, and the larger triangle O A T, where T is on the upright line through A at height tangent h.">
  <polygon points="40,250 270,250 270,35.7" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/>
  <path d="M 40 250 L 270 250 A 230 230 0 0 0 208.3 93.2 Z" fill="#9cc9ea" fill-opacity="0.6" stroke="none"/>
  <polygon points="40,250 270,250 208.3,93.2" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.2"/>
  <path d="M 270 250 A 230 230 0 0 0 40 20" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="40" y1="250" x2="297.6" y2="250" stroke="currentColor" stroke-width="1.2"/>
  <line x1="208.3" y1="93.2" x2="208.3" y2="250" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <circle cx="40" cy="250" r="3.5" fill="currentColor"/>
  <circle cx="270" cy="250" r="3.5" fill="currentColor"/>
  <circle cx="208.3" cy="93.2" r="3.5" fill="currentColor"/>
  <circle cx="270" cy="35.7" r="3.5" fill="currentColor"/>
  <path d="M 76.8 250 A 36.800000000000004 36.800000000000004 0 0 0 66.9 224.9" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="13" fill="currentColor"><text x="34" y="266">O</text><text x="274" y="266">A</text><text x="194.3" y="87.2">P</text><text x="278" y="39.7">T</text><text x="90" y="236.2">h</text><text x="155" y="266" text-anchor="middle">1</text><text x="213.3" y="201.6">sin h</text><text x="278" y="172.9">tan h</text></g>
</svg>
</div>

Compare three areas, each inside the next:

- the triangle $OAP$, with base $OA = 1$ and height $\sin h$: area $\frac12 \sin h$;
- the sector $OAP$: a fraction $\frac{h}{2\pi}$ of the whole circle, so area $\frac{h}{2\pi} \cdot \pi = \frac12 h$;
- the triangle $OAT$, with base 1 and height $\tan h$: area $\frac12 \tan h$.

So $\frac12 \sin h \le \frac12 h \le \frac12 \tan h$. Multiply by $\frac{2}{\sin h}$ (positive) and flip everything
upside down (which reverses the inequalities):

$$\cos h \le \frac{\sin h}{h} \le 1.$$

As $h \to 0$, $\cos h \to 1$. The fraction is squeezed between something heading to 1 and 1 itself, so it must tend to
1 too. (For negative $h$, $\frac{\sin(-h)}{-h} = \frac{\sin h}{h}$, so the same holds.) This argument is called the
**squeeze theorem**.

A second limit follows. Multiply top and bottom by $\cos h + 1$ and use $\cos^2 h - 1 = -\sin^2 h$:

$$\frac{\cos h - 1}{h} = \frac{-\sin^2 h}{h(\cos h + 1)} = -\frac{\sin h}{h} \cdot \frac{\sin h}{\cos h + 1} \;\longrightarrow\; -1 \cdot \frac{0}{2} = 0.$$

### The derivative of $\sin x$

Use the addition formula $\sin(x + h) = \sin x \cos h + \cos x \sin h$:

$$\frac{\sin(x + h) - \sin x}{h} = \sin x \cdot \frac{\cos h - 1}{h} + \cos x \cdot \frac{\sin h}{h} \;\longrightarrow\; \sin x \cdot 0 + \cos x \cdot 1.$$

$$\frac{d}{dx}\,\sin x = \cos x, \qquad \frac{d}{dx}\,\cos x = -\sin x.$$

(The second comes the same way from $\cos(x + h) = \cos x \cos h - \sin x \sin h$.) Check against the graph of
$\sin x$: at $x = 0$ it climbs with slope 1 $= \cos 0$; at $x = \frac{\pi}{2}$ it is at its peak, slope 0 $= \cos\frac{\pi}{2}$;
at $x = \pi$ it falls with slope $-1 = \cos \pi$.

**Why radians?** In degrees the key limit is not 1: $\frac{\sin(0.1°)}{0.1} \approx 0.017453$, which is
$\frac{\pi}{180}$. Every derivative would carry that ugly factor. Radians are the unit that makes the constant 1, just
as $e$ is the base that makes the constant 1.

### The table to remember

| $f(x)$ | $e^x$ | $e^{kx}$ | $b^x$ | $\ln x$ | $\sin x$ | $\cos x$ | $\tan x$ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $f'(x)$ | $e^x$ | $k e^{kx}$ | $\ln b \cdot b^x$ | $\frac1x$ | $\cos x$ | $-\sin x$ | $\frac{1}{\cos^2 x}$ |

<figure class="play" data-play="graph" data-form="sine"><span class="ai-tag">AI-created</span><figcaption><b>A sine wave.</b> Its slope is steepest where it crosses the centre line and zero at the tops.</figcaption></figure>

## Worked examples

**1. Product with $e^x$.** Differentiate $y = x^2 e^x$ and find where the tangent is flat.

$y' = 2x e^x + x^2 e^x = e^x(x^2 + 2x) = x(x + 2)e^x$. Since $e^x$ is never 0, the tangent is flat at $x = 0$ and
$x = -2$.

**2. Logarithm with the chain rule.** Differentiate $y = \ln(x^2 + 1)$.

Outside $\ln u$ has derivative $\frac1u$; inside has derivative $2x$. So $y' = \dfrac{2x}{x^2 + 1}$.

**3. Trig with the chain rule.** Differentiate (a) $\sin(x^2)$ and (b) $\sin^2 x$.

(a) Outside is sine, inside is $x^2$: $\cos(x^2) \cdot 2x$.
(b) $\sin^2 x$ means $(\sin x)^2$. Outside is squaring, inside is $\sin x$: $2 \sin x \cos x$. These two are easy to mix
up; say out loud which function is on the outside.

**4. Growth at a rate proportional to size.** A population is $P(t) = 500e^{0.03t}$ after $t$ years.

$P'(t) = 500 \cdot 0.03\, e^{0.03t} = 0.03\,P(t)$. The population grows at 3% of its current size per year: at
$t = 0$, by 15 per year; when it reaches 1000, by 30 per year. This is the "rate proportional to amount" you met in
[level 6](../level-6/05-exponential-rates.md), now as an equation. It is the start of [differential equations](07-differential-equations.md).

**5. Tangent from sine and cosine.** $\tan x = \dfrac{\sin x}{\cos x}$. Quotient rule:

$$\frac{\cos x \cdot \cos x - \sin x \cdot (-\sin x)}{\cos^2 x} = \frac{\cos^2 x + \sin^2 x}{\cos^2 x} = \frac{1}{\cos^2 x}.$$

## Try it

1. Differentiate $y = 5e^x - 3\ln x$.
2. Differentiate $y = e^{-2x}$. Is the graph going up or down?
3. Differentiate $y = \ln(3x)$. Why is the answer the same as for $\ln x$?
4. Differentiate $y = x \ln x$.
5. Differentiate $y = \cos(3x)$.
6. Differentiate $y = e^x \sin x$.
7. Find the slope of $y = \sin x$ at $x = \frac{\pi}{3}$, and the equation of the tangent there.
8. Use a calculator to work out $\dfrac{3^h - 1}{h}$ for $h = 0.001$. Compare it with $\ln 3$.

??? note "Answers"
    1. $y' = 5e^x - \dfrac{3}{x}$.
    2. Chain rule: $y' = -2e^{-2x}$, always negative, so the graph always goes **down** (exponential decay).
    3. Chain rule: $\dfrac{1}{3x} \cdot 3 = \dfrac1x$. Same as $\ln x$, because $\ln(3x) = \ln 3 + \ln x$: the graph is
       just $\ln x$ slid up by $\ln 3$, and sliding does not change slopes.
    4. Product rule: $1 \cdot \ln x + x \cdot \dfrac1x = \ln x + 1$.
    5. $-\sin(3x) \cdot 3 = -3\sin(3x)$.
    6. $e^x \sin x + e^x \cos x = e^x(\sin x + \cos x)$.
    7. Slope $\cos\frac{\pi}{3} = \frac12$. The point is $\left(\frac{\pi}{3}, \frac{\sqrt3}{2}\right)$. Tangent:
       $y = \frac{\sqrt3}{2} + \frac12\left(x - \frac{\pi}{3}\right)$, about $y = 0.5x + 0.342$.
    8. $3^{0.001} \approx 1.0010992$, so the fraction is about **1.0992**. $\ln 3 \approx 1.0986$. Very close, as the
       lesson predicts ($L(3) = \ln 3$); a smaller $h$ gets closer still.

## Common mistake

**Using the power rule on $e^x$.** $e^x$ is not a power of $x$; the variable is in the exponent. Its derivative is not
$x e^{x-1}$. The power rule is for $x^n$ (fixed power, variable base); the exponential rule is for $b^x$ (fixed base,
variable power).

**Working in degrees.** $\frac{d}{dx}\sin x = \cos x$ is true only in radians. Set your calculator to radians for
calculus.

## Where it leads

- Back: [The product, quotient and chain rules](01-product-quotient-chain.md) · Next: [Curve sketching](03-curve-sketching.md)
- [Level 8 page](index.md) · [Change and motion topic page](../index.md)
- Logarithms and exponential functions: [Algebra: logarithms](../../algebra/level-8/04-logarithms.md) and
  [Algebra: exponential functions](../../algebra/level-7/07-exponential-functions.md).
- The graphs of sine and cosine: [Geometry: sine and cosine graphs](../../geometry/level-8/03-sine-cosine-graphs.md).
- $e$ appears again in $e^{i\pi} = -1$: [Numbers: Euler's formula](../../numbers/level-8/04-euler-formula.md).
- On the U of T shelf: [MAT137 Unit 4: transcendental functions](../../../uoft/MAT137/unit04.md).
