# 3. Continuity

*Most functions you meet in nature have no sudden jumps: a falling stone does not teleport, a temperature does not
leap from 10 to 30 degrees in no time. Chapter 2 gave us the language to say exactly what "no jumps" means: the limit
at each point is simply the value there. In this chapter you will define continuity, sort the ways it can fail, and
meet the two great theorems about continuous functions on a closed interval: the intermediate value theorem, which
guarantees that equations have solutions (and gives the bisection method for finding them), and the extreme value
theorem, which guarantees that optimisation problems have answers. You will end by proving that continuity survives
composition and inversion.*

!!! abstract "In this chapter"
    **You will learn:**

    - the definition of continuity at a point and on an interval, in words and with epsilon and delta
    - why polynomials, rational functions, roots, sine and cosine are continuous
    - the four ways a function can be discontinuous: removable, jump, infinite and oscillating
    - the intermediate value theorem, its uses, and the bisection method with its error bound
    - the extreme value theorem, and why each of its hypotheses is needed
    - that compositions of continuous functions are continuous, and that the inverse of a continuous one-to-one function on an interval is continuous

    **You need:** [Chapter 2](02-Limits.md), especially the limit laws (2.2) and the epsilon-delta definition (2.5).
    Gentler version on the Topics shelf: [Continuity](../../topics/change/level-7/02-continuity.md).

    **Levels:** 3.1 is intermediate; 3.2 and 3.3 are intermediate, with their proofs postponed to Chapter 18 (expert);
    3.4 is advanced.

## 3.1 Continuous functions

### The definition

Here is a question that sounds like a riddle. You set off up a hill at 8 in the morning and reach the top at noon.
Is there a moment when you were at exactly half the height of the hill? Of course there is, you say: to get from
the bottom to the top you must pass through every height in between. But that answer assumes something: that your
height changes without jumps. Mathematics needs that assumption stated precisely, and then it can prove the
"of course" (that is section 3.2). The assumption is continuity.

> **Definition.** A function $f$ is **continuous at $a$** if $f$ is defined at $a$ and
>
> $\lim_{x \to a} f(x) = f(a)$.

Unpacked, three things must be true: $f(a)$ exists, the limit $\lim_{x \to a} f(x)$ exists, and the two are equal. In
words: **the value at $a$ is what the nearby values are heading towards.** If you know $f$ at all points near $a$,
you can predict $f(a)$.

In epsilon-delta language (Chapter 2.5), and noticing that we no longer need to exclude $x = a$ (at $x = a$ the
distance $|f(x) - f(a)|$ is 0 anyway):

> $f$ is continuous at $a$ if for every $\varepsilon > 0$ there is a $\delta > 0$ such that $|x - a| < \delta$ (with $x$
> in the domain of $f$) implies $|f(x) - f(a)| < \varepsilon$.

"Small changes in the input cause small changes in the output." That is the practical meaning of continuity, and it
is why measurement works at all: if the area of a square plot depended discontinuously on its side, measuring the
side to the nearest centimetre would tell you nothing about the area.

We say $f$ is **continuous on an open interval** $(a, b)$ if it is continuous at every point of it, and **continuous
on a closed interval** $[a, b]$ if in addition it is continuous from the right at $a$ ($\lim_{x \to a^+} f(x) =
f(a)$) and from the left at $b$. A function continuous at every point of its domain is simply called **continuous**.
Informally, a function continuous on an interval has a graph you can draw without lifting your pencil, but treat
that picture with care: section 3.1's last examples show it can mislead.

### The basic continuous functions

The limit laws of Chapter 2 do most of the work.

**Theorem.** If $f$ and $g$ are continuous at $a$, so are $f + g$, $f - g$, $cf$, $fg$, and $\frac fg$ provided
$g(a) \ne 0$.

*Proof.* Each follows from the matching limit law. For example, $\lim_{x \to a} f(x)g(x) = \lim f \cdot \lim g =
f(a)g(a)$. $\square$

Since constants and $x$ itself are continuous, so is every polynomial (built from them by sums and products), and
every rational function $\frac{p(x)}{q(x)}$ is continuous at every point where $q \ne 0$, which is to say on its whole
domain. This is what Chapter 2.2 found: for these functions the limit is the value.

**Sine and cosine are continuous everywhere.** *Proof.* From Chapter 2.4, $|\sin u| \le |u|$ for all $u$ (for
$|u| < \frac\pi2$ by the picture, and for larger $|u|$ because $|\sin u| \le 1 < |u|$). The sum-to-product formula
gives

$$
|\sin x - \sin a| = 2\left|\cos\tfrac{x + a}2\right| \left|\sin\tfrac{x - a}2\right| \le 2 \cdot 1 \cdot \tfrac{|x - a|}2 = |x - a| .
$$

So $\delta = \varepsilon$ works at every $a$. For cosine, $|\cos x - \cos a| = 2\left|\sin \frac{x+a}2\right|
\left|\sin\frac{x - a}2\right| \le |x - a|$ in the same way. $\square$

Then $\tan x = \frac{\sin x}{\cos x}$ is continuous wherever $\cos x \ne 0$.

**Square roots are continuous on $[0, \infty)$.** *Proof.* At $a > 0$, the conjugate trick of Chapter 2.5 gives
$|\sqrt x - \sqrt a| = \frac{|x - a|}{\sqrt x + \sqrt a} \le \frac{|x - a|}{\sqrt a}$, so $\delta = \varepsilon\sqrt a$ works.
At $a = 0$ (continuity from the right), $|\sqrt x - 0| < \varepsilon$ whenever $0 \le x < \varepsilon^2$, so
$\delta = \varepsilon^2$ works. $\square$

The **absolute value** $|x|$ is continuous everywhere: $\big||x| - |a|\big| \le |x - a|$ (the reverse triangle
inequality), so $\delta = \varepsilon$ works.

Section 3.4 will add compositions and inverses, and Chapter 5 adds exponentials and logarithms. By the end, every
function you can write with a formula is continuous wherever the formula makes sense.

### Kinds of discontinuity

When continuity at $a$ fails, it fails in one of a few recognisable ways.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 640 155" role="img" aria-label="Four kinds of discontinuity at a point a. Removable: a line with a hole, and the function value plotted elsewhere. Jump: the graph steps from one height to another. Infinite: the graph shoots up on both sides of a vertical asymptote. Oscillating: the graph swings up and down faster and faster near a">
  <line x1="5.0" y1="120.0" x2="145.0" y2="120.0" stroke="currentColor" stroke-width="1"/>
  <line x1="75.0" y1="125.0" x2="75.0" y2="15.0" stroke="currentColor" stroke-width="0.6" stroke-dasharray="3 3"/>
  <polyline points="10.0,100.0 75.0,70.0" fill="none" stroke="currentColor" stroke-width="2"/>
  <polyline points="75.0,70.0 140.0,40.0" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="75.0" cy="70.0" r="3.5" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="75.0" cy="40.0" r="3.5" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <text x="75.0" y="145.0" font-size="12" text-anchor="middle" fill="currentColor">removable</text>
  <text x="75.0" y="135.0" font-size="10" text-anchor="middle" fill="currentColor">a</text>
  <line x1="165.0" y1="120.0" x2="305.0" y2="120.0" stroke="currentColor" stroke-width="1"/>
  <line x1="235.0" y1="125.0" x2="235.0" y2="15.0" stroke="currentColor" stroke-width="0.6" stroke-dasharray="3 3"/>
  <polyline points="170.0,95.0 235.0,80.0" fill="none" stroke="currentColor" stroke-width="2"/>
  <polyline points="235.0,45.0 300.0,30.0" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="235.0" cy="80.0" r="3.5" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="235.0" cy="45.0" r="3.5" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="235.0" y="145.0" font-size="12" text-anchor="middle" fill="currentColor">jump</text>
  <text x="235.0" y="135.0" font-size="10" text-anchor="middle" fill="currentColor">a</text>
  <line x1="325.0" y1="120.0" x2="465.0" y2="120.0" stroke="currentColor" stroke-width="1"/>
  <line x1="395.0" y1="125.0" x2="395.0" y2="15.0" stroke="currentColor" stroke-width="0.6" stroke-dasharray="3 3"/>
  <polyline points="330.0,90.8 330.5,90.7 331.0,90.6 331.5,90.6 332.0,90.5 332.5,90.4 333.0,90.3 333.5,90.2 334.0,90.2 334.5,90.1 335.0,90.0 335.5,89.9 336.0,89.8 336.5,89.7 337.0,89.7 337.5,89.6 338.0,89.5 338.5,89.4 339.0,89.3 339.5,89.2 340.0,89.1 340.5,89.0 341.0,88.9 341.5,88.8 342.0,88.7 342.5,88.6 343.0,88.5 343.5,88.3 344.0,88.2 344.5,88.1 345.0,88.0 345.5,87.9 346.0,87.8 346.5,87.6 347.0,87.5 347.5,87.4 348.0,87.2 348.5,87.1 349.0,87.0 349.5,86.8 350.0,86.7 350.5,86.5 351.0,86.4 351.5,86.2 352.0,86.0 352.5,85.9 353.0,85.7 353.5,85.5 354.0,85.4 354.5,85.2 355.0,85.0 355.5,84.8 356.0,84.6 356.5,84.4 357.0,84.2 357.5,84.0 358.0,83.8 358.5,83.6 359.0,83.3 359.5,83.1 360.0,82.9 360.5,82.6 361.0,82.4 361.5,82.1 362.0,81.8 362.5,81.5 363.0,81.2 363.5,81.0 364.0,80.6 364.5,80.3 365.0,80.0 365.5,79.7 366.0,79.3 366.5,78.9 367.0,78.6 367.5,78.2 368.0,77.8 368.5,77.4 369.0,76.9 369.5,76.5 370.0,76.0 370.5,75.5 371.0,75.0 371.5,74.5 372.0,73.9 372.5,73.3 373.0,72.7 373.5,72.1 374.0,71.4 374.5,70.7 375.0,70.0 375.5,69.2 376.0,68.4 376.5,67.6 377.0,66.7 377.5,65.7 378.0,64.7 378.5,63.6 379.0,62.5 379.5,61.3 380.0,60.0 380.5,58.6 381.0,57.1 381.5,55.6 382.0,53.8 382.5,52.0 383.0,50.0 383.5,47.8 384.0,45.5 384.5,42.9 385.0,40.0 385.5,36.8 386.0,33.3 386.5,29.4 387.0,25.0 387.5,20.0" fill="none" stroke="currentColor" stroke-width="2"/>
  <polyline points="402.5,20.0 403.0,25.0 403.5,29.4 404.0,33.3 404.5,36.8 405.0,40.0 405.5,42.9 406.0,45.5 406.5,47.8 407.0,50.0 407.5,52.0 408.0,53.8 408.5,55.6 409.0,57.1 409.5,58.6 410.0,60.0 410.5,61.3 411.0,62.5 411.5,63.6 412.0,64.7 412.5,65.7 413.0,66.7 413.5,67.6 414.0,68.4 414.5,69.2 415.0,70.0 415.5,70.7 416.0,71.4 416.5,72.1 417.0,72.7 417.5,73.3 418.0,73.9 418.5,74.5 419.0,75.0 419.5,75.5 420.0,76.0 420.5,76.5 421.0,76.9 421.5,77.4 422.0,77.8 422.5,78.2 423.0,78.6 423.5,78.9 424.0,79.3 424.5,79.7 425.0,80.0 425.5,80.3 426.0,80.6 426.5,81.0 427.0,81.2 427.5,81.5 428.0,81.8 428.5,82.1 429.0,82.4 429.5,82.6 430.0,82.9 430.5,83.1 431.0,83.3 431.5,83.6 432.0,83.8 432.5,84.0 433.0,84.2 433.5,84.4 434.0,84.6 434.5,84.8 435.0,85.0 435.5,85.2 436.0,85.4 436.5,85.5 437.0,85.7 437.5,85.9 438.0,86.0 438.5,86.2 439.0,86.4 439.5,86.5 440.0,86.7 440.5,86.8 441.0,87.0 441.5,87.1 442.0,87.2 442.5,87.4 443.0,87.5 443.5,87.6 444.0,87.8 444.5,87.9 445.0,88.0 445.5,88.1 446.0,88.2 446.5,88.3 447.0,88.5 447.5,88.6 448.0,88.7 448.5,88.8 449.0,88.9 449.5,89.0 450.0,89.1 450.5,89.2 451.0,89.3 451.5,89.4 452.0,89.5 452.5,89.6 453.0,89.7 453.5,89.7 454.0,89.8 454.5,89.9 455.0,90.0 455.5,90.1 456.0,90.2 456.5,90.2 457.0,90.3 457.5,90.4 458.0,90.5 458.5,90.6 459.0,90.6 459.5,90.7 460.0,90.8" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="395.0" y="145.0" font-size="12" text-anchor="middle" fill="currentColor">infinite</text>
  <text x="395.0" y="135.0" font-size="10" text-anchor="middle" fill="currentColor">a</text>
  <line x1="485.0" y1="120.0" x2="625.0" y2="120.0" stroke="currentColor" stroke-width="1"/>
  <line x1="555.0" y1="125.0" x2="555.0" y2="15.0" stroke="currentColor" stroke-width="0.6" stroke-dasharray="3 3"/>
  <polyline points="490.1,38.7 490.2,38.6 490.3,38.6 490.4,38.6 490.5,38.6 490.6,38.5 490.6,38.5 490.7,38.5 490.8,38.5 490.9,38.4 491.0,38.4 491.1,38.4 491.2,38.4 491.3,38.3 491.4,38.3 491.5,38.3 491.6,38.3 491.7,38.2 491.8,38.2 491.9,38.2 491.9,38.2 492.0,38.1 492.1,38.1 492.2,38.1 492.3,38.1 492.4,38.0 492.5,38.0 492.6,38.0 492.7,38.0 492.8,37.9 492.9,37.9 493.0,37.9 493.1,37.9 493.2,37.9 493.2,37.8 493.3,37.8 493.4,37.8 493.5,37.8 493.6,37.7 493.7,37.7 493.8,37.7 493.9,37.7 494.0,37.6 494.1,37.6 494.2,37.6 494.3,37.6 494.4,37.5 494.5,37.5 494.6,37.5 494.6,37.5 494.7,37.4 494.8,37.4 494.9,37.4 495.0,37.4 495.1,37.4 495.2,37.3 495.3,37.3 495.4,37.3 495.5,37.3 495.6,37.2 495.7,37.2 495.8,37.2 495.9,37.2 495.9,37.1 496.0,37.1 496.1,37.1 496.2,37.1 496.3,37.0 496.4,37.0 496.5,37.0 496.6,37.0 496.7,37.0 496.8,36.9 496.9,36.9 497.0,36.9 497.1,36.9 497.1,36.8 497.2,36.8 497.3,36.8 497.4,36.8 497.5,36.8 497.6,36.7 497.7,36.7 497.8,36.7 497.9,36.7 498.0,36.6 498.1,36.6 498.2,36.6 498.3,36.6 498.4,36.6 498.4,36.5 498.5,36.5 498.6,36.5 498.7,36.5 498.8,36.5 498.9,36.4 499.0,36.4 499.1,36.4 499.2,36.4 499.3,36.3 499.4,36.3 499.5,36.3 499.6,36.3 499.7,36.3 499.8,36.2 499.8,36.2 499.9,36.2 500.0,36.2 500.1,36.2 500.2,36.1 500.3,36.1 500.4,36.1 500.5,36.1 500.6,36.1 500.7,36.0 500.8,36.0 500.9,36.0 501.0,36.0 501.1,36.0 501.1,36.0 501.2,35.9 501.3,35.9 501.4,35.9 501.5,35.9 501.6,35.9 501.7,35.8 501.8,35.8 501.9,35.8 502.0,35.8 502.1,35.8 502.2,35.8 502.3,35.7 502.4,35.7 502.4,35.7 502.5,35.7 502.6,35.7 502.7,35.7 502.8,35.6 502.9,35.6 503.0,35.6 503.1,35.6 503.2,35.6 503.3,35.6 503.4,35.5 503.5,35.5 503.6,35.5 503.6,35.5 503.7,35.5 503.8,35.5 503.9,35.5 504.0,35.4 504.1,35.4 504.2,35.4 504.3,35.4 504.4,35.4 504.5,35.4 504.6,35.4 504.7,35.3 504.8,35.3 504.9,35.3 504.9,35.3 505.0,35.3 505.1,35.3 505.2,35.3 505.3,35.3 505.4,35.2 505.5,35.2 505.6,35.2 505.7,35.2 505.8,35.2 505.9,35.2 506.0,35.2 506.1,35.2 506.2,35.2 506.2,35.2 506.3,35.1 506.4,35.1 506.5,35.1 506.6,35.1 506.7,35.1 506.8,35.1 506.9,35.1 507.0,35.1 507.1,35.1 507.2,35.1 507.3,35.1 507.4,35.1 507.5,35.1 507.6,35.0 507.6,35.0 507.7,35.0 507.8,35.0 507.9,35.0 508.0,35.0 508.1,35.0 508.2,35.0 508.3,35.0 508.4,35.0 508.5,35.0 508.6,35.0 508.7,35.0 508.8,35.0 508.9,35.0 508.9,35.0 509.0,35.0 509.1,35.0 509.2,35.0 509.3,35.0 509.4,35.0 509.5,35.0 509.6,35.0 509.7,35.0 509.8,35.0 509.9,35.0 510.0,35.0 510.1,35.0 510.1,35.0 510.2,35.0 510.3,35.0 510.4,35.0 510.5,35.0 510.6,35.0 510.7,35.1 510.8,35.1 510.9,35.1 511.0,35.1 511.1,35.1 511.2,35.1 511.3,35.1 511.4,35.1 511.4,35.1 511.5,35.1 511.6,35.1 511.7,35.2 511.8,35.2 511.9,35.2 512.0,35.2 512.1,35.2 512.2,35.2 512.3,35.2 512.4,35.2 512.5,35.3 512.6,35.3 512.7,35.3 512.8,35.3 512.8,35.3 512.9,35.3 513.0,35.4 513.1,35.4 513.2,35.4 513.3,35.4 513.4,35.4 513.5,35.5 513.6,35.5 513.7,35.5 513.8,35.5 513.9,35.6 514.0,35.6 514.0,35.6 514.1,35.6 514.2,35.7 514.3,35.7 514.4,35.7 514.5,35.8 514.6,35.8 514.7,35.8 514.8,35.8 514.9,35.9 515.0,35.9 515.1,35.9 515.2,36.0 515.3,36.0 515.4,36.0 515.4,36.1 515.5,36.1 515.6,36.2 515.7,36.2 515.8,36.2 515.9,36.3 516.0,36.3 516.1,36.4 516.2,36.4 516.3,36.4 516.4,36.5 516.5,36.5 516.6,36.6 516.6,36.6 516.7,36.7 516.8,36.7 516.9,36.8 517.0,36.8 517.1,36.9 517.2,36.9 517.3,37.0 517.4,37.0 517.5,37.1 517.6,37.2 517.7,37.2 517.8,37.3 517.9,37.3 518.0,37.4 518.0,37.5 518.1,37.5 518.2,37.6 518.3,37.7 518.4,37.7 518.5,37.8 518.6,37.9 518.7,37.9 518.8,38.0 518.9,38.1 519.0,38.2 519.1,38.2 519.2,38.3 519.2,38.4 519.3,38.5 519.4,38.5 519.5,38.6 519.6,38.7 519.7,38.8 519.8,38.9 519.9,39.0 520.0,39.1 520.1,39.1 520.2,39.2 520.3,39.3 520.4,39.4 520.5,39.5 520.5,39.6 520.6,39.7 520.7,39.8 520.8,39.9 520.9,40.0 521.0,40.1 521.1,40.2 521.2,40.3 521.3,40.4 521.4,40.6 521.5,40.7 521.6,40.8 521.7,40.9 521.8,41.0 521.9,41.1 521.9,41.3 522.0,41.4 522.1,41.5 522.2,41.6 522.3,41.8 522.4,41.9 522.5,42.0 522.6,42.2 522.7,42.3 522.8,42.4 522.9,42.6 523.0,42.7 523.1,42.9 523.1,43.0 523.2,43.1 523.3,43.3 523.4,43.5 523.5,43.6 523.6,43.8 523.7,43.9 523.8,44.1 523.9,44.2 524.0,44.4 524.1,44.6 524.2,44.7 524.3,44.9 524.4,45.1 524.5,45.3 524.5,45.4 524.6,45.6 524.7,45.8 524.8,46.0 524.9,46.2 525.0,46.4 525.1,46.6 525.2,46.8 525.3,47.0 525.4,47.2 525.5,47.4 525.6,47.6 525.7,47.8 525.8,48.0 525.8,48.2 525.9,48.4 526.0,48.6 526.1,48.9 526.2,49.1 526.3,49.3 526.4,49.5 526.5,49.8 526.6,50.0 526.7,50.3 526.8,50.5 526.9,50.7 527.0,51.0 527.0,51.2 527.1,51.5 527.2,51.8 527.3,52.0 527.4,52.3 527.5,52.5 527.6,52.8 527.7,53.1 527.8,53.4 527.9,53.6 528.0,53.9 528.1,54.2 528.2,54.5 528.3,54.8 528.4,55.1 528.4,55.4 528.5,55.7 528.6,56.0 528.7,56.3 528.8,56.6 528.9,56.9 529.0,57.3 529.1,57.6 529.2,57.9 529.3,58.2 529.4,58.6 529.5,58.9 529.6,59.3 529.6,59.6 529.7,60.0 529.8,60.3 529.9,60.7 530.0,61.0 530.1,61.4 530.2,61.8 530.3,62.1 530.4,62.5 530.5,62.9 530.6,63.3 530.7,63.7 530.8,64.1 530.9,64.4 531.0,64.8 531.0,65.2 531.1,65.7 531.2,66.1 531.3,66.5 531.4,66.9 531.5,67.3 531.6,67.7 531.7,68.2 531.8,68.6 531.9,69.0 532.0,69.5 532.1,69.9 532.2,70.4 532.2,70.8 532.3,71.3 532.4,71.7 532.5,72.2 532.6,72.6 532.7,73.1 532.8,73.6 532.9,74.1 533.0,74.5 533.1,75.0 533.2,75.5 533.3,76.0 533.4,76.5 533.5,77.0 533.5,77.5 533.6,78.0 533.7,78.5 533.8,79.0 533.9,79.5 534.0,80.0 534.1,80.5 534.2,81.0 534.3,81.5 534.4,82.0 534.5,82.6 534.6,83.1 534.7,83.6 534.8,84.1 534.9,84.6 534.9,85.2 535.0,85.7 535.1,86.2 535.2,86.7 535.3,87.3 535.4,87.8 535.5,88.3 535.6,88.8 535.7,89.4 535.8,89.9 535.9,90.4 536.0,90.9 536.1,91.4 536.1,92.0 536.2,92.5 536.3,93.0 536.4,93.5 536.5,94.0 536.6,94.5 536.7,95.0 536.8,95.5 536.9,95.9 537.0,96.4 537.1,96.9 537.2,97.3 537.3,97.8 537.4,98.3 537.5,98.7 537.5,99.1 537.6,99.5 537.7,100.0 537.8,100.4 537.9,100.7 538.0,101.1 538.1,101.5 538.2,101.8 538.3,102.2 538.4,102.5 538.5,102.8 538.6,103.1 538.7,103.4 538.8,103.6 538.8,103.9 538.9,104.1 539.0,104.3 539.1,104.4 539.2,104.6 539.3,104.7 539.4,104.8 539.5,104.9 539.6,105.0 539.7,105.0 539.8,105.0 539.9,105.0 540.0,104.9 540.0,104.8 540.1,104.7 540.2,104.5 540.3,104.3 540.4,104.1 540.5,103.8 540.6,103.5 540.7,103.2 540.8,102.8 540.9,102.4 541.0,101.9 541.1,101.4 541.2,100.9 541.3,100.3 541.4,99.6 541.4,98.9 541.5,98.2 541.6,97.4 541.7,96.5 541.8,95.7 541.9,94.7 542.0,93.7 542.1,92.7 542.2,91.6 542.3,90.4 542.4,89.2 542.5,88.0 542.6,86.7 542.6,85.3 542.7,83.9 542.8,82.5 542.9,81.0 543.0,79.4 543.1,77.8 543.2,76.2 543.3,74.5 543.4,72.8 543.5,71.1 543.6,69.3 543.7,67.5 543.8,65.6 543.9,63.8 544.0,61.9 544.0,60.1 544.1,58.2 544.2,56.3 544.3,54.5 544.4,52.7 544.5,50.9 544.6,49.1 544.7,47.4 544.8,45.7 544.9,44.2 545.0,42.7 545.1,41.3 545.2,40.0 545.2,38.8 545.3,37.7 545.4,36.8 545.5,36.1 545.6,35.5 545.7,35.2 545.8,35.0 545.9,35.1 546.0,35.3 546.1,35.9 546.2,36.6 546.3,37.7 546.4,39.0 546.5,40.6 546.5,42.5 546.6,44.7 546.7,47.1 546.8,49.8 546.9,52.8 547.0,56.1 547.1,59.6 547.2,63.3 547.3,67.1 547.4,71.1 547.5,75.2 547.6,79.3 547.7,83.3 547.8,87.3 547.9,91.0 547.9,94.6 548.0,97.7 548.1,100.4 548.2,102.6 548.3,104.1 548.4,104.9 548.5,104.9 548.6,104.0 548.7,102.1 548.8,99.3 548.9,95.5 549.0,90.8 549.1,85.3 549.1,79.0 549.2,72.1 549.3,64.9 549.4,57.8 549.5,50.9 549.6,44.8 549.7,39.9 549.8,36.5 549.9,35.0 550.0,35.9 550.1,39.2 550.2,45.0 550.3,53.1 550.4,63.0 550.5,74.1 550.5,85.1 550.6,94.9 550.7,101.9 550.8,105.0 550.9,103.0 551.0,95.5 551.1,83.2 551.2,67.8 551.3,52.2 551.4,40.0 551.5,35.0 551.6,39.9 551.7,54.7 551.8,75.7 551.8,95.5 551.9,104.9 552.0,97.5 552.1,74.2 552.2,47.1 552.3,35.0 552.4,50.8 552.5,85.0 552.6,105.0 552.7,83.6 552.8,42.8 552.9,43.8 553.0,92.2 553.0,94.5 553.1,39.3 553.2,68.9 553.3,97.5 553.4,35.1 553.5,104.1 553.6,35.4 553.7,102.1 553.8,68.4 553.9,35.8 554.0,35.7 554.1,40.5 554.2,104.0 554.3,54.3 554.4,95.4 554.4,84.4 554.5,101.8 554.6,98.1 554.7,43.7 554.8,103.5 554.9,50.6" fill="none" stroke="currentColor" stroke-width="2"/>
  <polyline points="555.1,50.6 555.2,103.5 555.3,43.7 555.4,98.1 555.5,101.8 555.6,84.4 555.6,95.4 555.7,54.3 555.8,104.0 555.9,40.5 556.0,35.7 556.1,35.8 556.2,68.4 556.3,102.1 556.4,35.4 556.5,104.1 556.6,35.1 556.7,97.5 556.8,68.9 556.9,39.3 557.0,94.5 557.0,92.2 557.1,43.8 557.2,42.8 557.3,83.6 557.4,105.0 557.5,85.0 557.6,50.8 557.7,35.0 557.8,47.1 557.9,74.2 558.0,97.5 558.1,104.9 558.2,95.5 558.2,75.7 558.3,54.7 558.4,39.9 558.5,35.0 558.6,40.0 558.7,52.2 558.8,67.8 558.9,83.2 559.0,95.5 559.1,103.0 559.2,105.0 559.3,101.9 559.4,94.9 559.5,85.1 559.5,74.1 559.6,63.0 559.7,53.1 559.8,45.0 559.9,39.2 560.0,35.9 560.1,35.0 560.2,36.5 560.3,39.9 560.4,44.8 560.5,50.9 560.6,57.8 560.7,64.9 560.8,72.1 560.9,79.0 560.9,85.3 561.0,90.8 561.1,95.5 561.2,99.3 561.3,102.1 561.4,104.0 561.5,104.9 561.6,104.9 561.7,104.1 561.8,102.6 561.9,100.4 562.0,97.7 562.1,94.6 562.1,91.0 562.2,87.3 562.3,83.3 562.4,79.3 562.5,75.2 562.6,71.1 562.7,67.1 562.8,63.3 562.9,59.6 563.0,56.1 563.1,52.8 563.2,49.8 563.3,47.1 563.4,44.7 563.5,42.5 563.5,40.6 563.6,39.0 563.7,37.7 563.8,36.6 563.9,35.9 564.0,35.3 564.1,35.1 564.2,35.0 564.3,35.2 564.4,35.5 564.5,36.1 564.6,36.8 564.7,37.7 564.8,38.8 564.8,40.0 564.9,41.3 565.0,42.7 565.1,44.2 565.2,45.7 565.3,47.4 565.4,49.1 565.5,50.9 565.6,52.7 565.7,54.5 565.8,56.3 565.9,58.2 566.0,60.1 566.0,61.9 566.1,63.8 566.2,65.6 566.3,67.5 566.4,69.3 566.5,71.1 566.6,72.8 566.7,74.5 566.8,76.2 566.9,77.8 567.0,79.4 567.1,81.0 567.2,82.5 567.3,83.9 567.4,85.3 567.4,86.7 567.5,88.0 567.6,89.2 567.7,90.4 567.8,91.6 567.9,92.7 568.0,93.7 568.1,94.7 568.2,95.7 568.3,96.5 568.4,97.4 568.5,98.2 568.6,98.9 568.6,99.6 568.7,100.3 568.8,100.9 568.9,101.4 569.0,101.9 569.1,102.4 569.2,102.8 569.3,103.2 569.4,103.5 569.5,103.8 569.6,104.1 569.7,104.3 569.8,104.5 569.9,104.7 570.0,104.8 570.0,104.9 570.1,105.0 570.2,105.0 570.3,105.0 570.4,105.0 570.5,104.9 570.6,104.8 570.7,104.7 570.8,104.6 570.9,104.4 571.0,104.3 571.1,104.1 571.2,103.9 571.2,103.6 571.3,103.4 571.4,103.1 571.5,102.8 571.6,102.5 571.7,102.2 571.8,101.8 571.9,101.5 572.0,101.1 572.1,100.7 572.2,100.4 572.3,100.0 572.4,99.5 572.5,99.1 572.5,98.7 572.6,98.3 572.7,97.8 572.8,97.3 572.9,96.9 573.0,96.4 573.1,95.9 573.2,95.5 573.3,95.0 573.4,94.5 573.5,94.0 573.6,93.5 573.7,93.0 573.8,92.5 573.9,92.0 573.9,91.4 574.0,90.9 574.1,90.4 574.2,89.9 574.3,89.4 574.4,88.8 574.5,88.3 574.6,87.8 574.7,87.3 574.8,86.7 574.9,86.2 575.0,85.7 575.1,85.2 575.1,84.6 575.2,84.1 575.3,83.6 575.4,83.1 575.5,82.6 575.6,82.0 575.7,81.5 575.8,81.0 575.9,80.5 576.0,80.0 576.1,79.5 576.2,79.0 576.3,78.5 576.4,78.0 576.5,77.5 576.5,77.0 576.6,76.5 576.7,76.0 576.8,75.5 576.9,75.0 577.0,74.5 577.1,74.1 577.2,73.6 577.3,73.1 577.4,72.6 577.5,72.2 577.6,71.7 577.7,71.3 577.8,70.8 577.8,70.4 577.9,69.9 578.0,69.5 578.1,69.0 578.2,68.6 578.3,68.2 578.4,67.7 578.5,67.3 578.6,66.9 578.7,66.5 578.8,66.1 578.9,65.7 579.0,65.2 579.0,64.8 579.1,64.4 579.2,64.1 579.3,63.7 579.4,63.3 579.5,62.9 579.6,62.5 579.7,62.1 579.8,61.8 579.9,61.4 580.0,61.0 580.1,60.7 580.2,60.3 580.3,60.0 580.4,59.6 580.4,59.3 580.5,58.9 580.6,58.6 580.7,58.2 580.8,57.9 580.9,57.6 581.0,57.3 581.1,56.9 581.2,56.6 581.3,56.3 581.4,56.0 581.5,55.7 581.6,55.4 581.6,55.1 581.7,54.8 581.8,54.5 581.9,54.2 582.0,53.9 582.1,53.6 582.2,53.4 582.3,53.1 582.4,52.8 582.5,52.5 582.6,52.3 582.7,52.0 582.8,51.8 582.9,51.5 583.0,51.2 583.0,51.0 583.1,50.7 583.2,50.5 583.3,50.3 583.4,50.0 583.5,49.8 583.6,49.5 583.7,49.3 583.8,49.1 583.9,48.9 584.0,48.6 584.1,48.4 584.2,48.2 584.2,48.0 584.3,47.8 584.4,47.6 584.5,47.4 584.6,47.2 584.7,47.0 584.8,46.8 584.9,46.6 585.0,46.4 585.1,46.2 585.2,46.0 585.3,45.8 585.4,45.6 585.5,45.4 585.5,45.3 585.6,45.1 585.7,44.9 585.8,44.7 585.9,44.6 586.0,44.4 586.1,44.2 586.2,44.1 586.3,43.9 586.4,43.8 586.5,43.6 586.6,43.5 586.7,43.3 586.8,43.1 586.9,43.0 586.9,42.9 587.0,42.7 587.1,42.6 587.2,42.4 587.3,42.3 587.4,42.2 587.5,42.0 587.6,41.9 587.7,41.8 587.8,41.6 587.9,41.5 588.0,41.4 588.1,41.3 588.1,41.1 588.2,41.0 588.3,40.9 588.4,40.8 588.5,40.7 588.6,40.6 588.7,40.4 588.8,40.3 588.9,40.2 589.0,40.1 589.1,40.0 589.2,39.9 589.3,39.8 589.4,39.7 589.5,39.6 589.5,39.5 589.6,39.4 589.7,39.3 589.8,39.2 589.9,39.1 590.0,39.1 590.1,39.0 590.2,38.9 590.3,38.8 590.4,38.7 590.5,38.6 590.6,38.5 590.7,38.5 590.8,38.4 590.8,38.3 590.9,38.2 591.0,38.2 591.1,38.1 591.2,38.0 591.3,37.9 591.4,37.9 591.5,37.8 591.6,37.7 591.7,37.7 591.8,37.6 591.9,37.5 592.0,37.5 592.0,37.4 592.1,37.3 592.2,37.3 592.3,37.2 592.4,37.2 592.5,37.1 592.6,37.0 592.7,37.0 592.8,36.9 592.9,36.9 593.0,36.8 593.1,36.8 593.2,36.7 593.3,36.7 593.4,36.6 593.4,36.6 593.5,36.5 593.6,36.5 593.7,36.4 593.8,36.4 593.9,36.4 594.0,36.3 594.1,36.3 594.2,36.2 594.3,36.2 594.4,36.2 594.5,36.1 594.6,36.1 594.6,36.0 594.7,36.0 594.8,36.0 594.9,35.9 595.0,35.9 595.1,35.9 595.2,35.8 595.3,35.8 595.4,35.8 595.5,35.8 595.6,35.7 595.7,35.7 595.8,35.7 595.9,35.6 596.0,35.6 596.0,35.6 596.1,35.6 596.2,35.5 596.3,35.5 596.4,35.5 596.5,35.5 596.6,35.4 596.7,35.4 596.8,35.4 596.9,35.4 597.0,35.4 597.1,35.3 597.2,35.3 597.2,35.3 597.3,35.3 597.4,35.3 597.5,35.3 597.6,35.2 597.7,35.2 597.8,35.2 597.9,35.2 598.0,35.2 598.1,35.2 598.2,35.2 598.3,35.2 598.4,35.1 598.5,35.1 598.5,35.1 598.6,35.1 598.7,35.1 598.8,35.1 598.9,35.1 599.0,35.1 599.1,35.1 599.2,35.1 599.3,35.1 599.4,35.0 599.5,35.0 599.6,35.0 599.7,35.0 599.8,35.0 599.9,35.0 599.9,35.0 600.0,35.0 600.1,35.0 600.2,35.0 600.3,35.0 600.4,35.0 600.5,35.0 600.6,35.0 600.7,35.0 600.8,35.0 600.9,35.0 601.0,35.0 601.1,35.0 601.1,35.0 601.2,35.0 601.3,35.0 601.4,35.0 601.5,35.0 601.6,35.0 601.7,35.0 601.8,35.0 601.9,35.0 602.0,35.0 602.1,35.0 602.2,35.0 602.3,35.0 602.4,35.0 602.5,35.0 602.5,35.1 602.6,35.1 602.7,35.1 602.8,35.1 602.9,35.1 603.0,35.1 603.1,35.1 603.2,35.1 603.3,35.1 603.4,35.1 603.5,35.1 603.6,35.1 603.7,35.1 603.8,35.2 603.8,35.2 603.9,35.2 604.0,35.2 604.1,35.2 604.2,35.2 604.3,35.2 604.4,35.2 604.5,35.2 604.6,35.2 604.7,35.3 604.8,35.3 604.9,35.3 605.0,35.3 605.0,35.3 605.1,35.3 605.2,35.3 605.3,35.3 605.4,35.4 605.5,35.4 605.6,35.4 605.7,35.4 605.8,35.4 605.9,35.4 606.0,35.4 606.1,35.5 606.2,35.5 606.3,35.5 606.4,35.5 606.4,35.5 606.5,35.5 606.6,35.5 606.7,35.6 606.8,35.6 606.9,35.6 607.0,35.6 607.1,35.6 607.2,35.6 607.3,35.7 607.4,35.7 607.5,35.7 607.6,35.7 607.6,35.7 607.7,35.7 607.8,35.8 607.9,35.8 608.0,35.8 608.1,35.8 608.2,35.8 608.3,35.8 608.4,35.9 608.5,35.9 608.6,35.9 608.7,35.9 608.8,35.9 608.9,36.0 609.0,36.0 609.0,36.0 609.1,36.0 609.2,36.0 609.3,36.0 609.4,36.1 609.5,36.1 609.6,36.1 609.7,36.1 609.8,36.1 609.9,36.2 610.0,36.2 610.1,36.2 610.2,36.2 610.2,36.2 610.3,36.3 610.4,36.3 610.5,36.3 610.6,36.3 610.7,36.3 610.8,36.4 610.9,36.4 611.0,36.4 611.1,36.4 611.2,36.5 611.3,36.5 611.4,36.5 611.5,36.5 611.5,36.5 611.6,36.6 611.7,36.6 611.8,36.6 611.9,36.6 612.0,36.6 612.1,36.7 612.2,36.7 612.3,36.7 612.4,36.7 612.5,36.8 612.6,36.8 612.7,36.8 612.8,36.8 612.9,36.8 612.9,36.9 613.0,36.9 613.1,36.9 613.2,36.9 613.3,37.0 613.4,37.0 613.5,37.0 613.6,37.0 613.7,37.0 613.8,37.1 613.9,37.1 614.0,37.1 614.1,37.1 614.1,37.2 614.2,37.2 614.3,37.2 614.4,37.2 614.5,37.3 614.6,37.3 614.7,37.3 614.8,37.3 614.9,37.4 615.0,37.4 615.1,37.4 615.2,37.4 615.3,37.4 615.4,37.5 615.5,37.5 615.5,37.5 615.6,37.5 615.7,37.6 615.8,37.6 615.9,37.6 616.0,37.6 616.1,37.7 616.2,37.7 616.3,37.7 616.4,37.7 616.5,37.8 616.6,37.8 616.7,37.8 616.8,37.8 616.8,37.9 616.9,37.9 617.0,37.9 617.1,37.9 617.2,37.9 617.3,38.0 617.4,38.0 617.5,38.0 617.6,38.0 617.7,38.1 617.8,38.1 617.9,38.1 618.0,38.1 618.0,38.2 618.1,38.2 618.2,38.2 618.3,38.2 618.4,38.3 618.5,38.3 618.6,38.3 618.7,38.3 618.8,38.4 618.9,38.4 619.0,38.4 619.1,38.4 619.2,38.5 619.3,38.5 619.4,38.5 619.4,38.5 619.5,38.6 619.6,38.6 619.7,38.6 619.8,38.6 619.9,38.7" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="555.0" y="145.0" font-size="12" text-anchor="middle" fill="currentColor">oscillating</text>
  <text x="555.0" y="135.0" font-size="10" text-anchor="middle" fill="currentColor">a</text>
</svg>
</div>

1. **Removable.** $\lim_{x \to a} f(x)$ exists, but $f(a)$ is undefined or different. The graph has a hole, and
   redefining one value repairs it. Example: $f(x) = \frac{x^2 - 4}{x - 2}$ at $a = 2$; the limit is 4, so setting
   $f(2) = 4$ makes $f$ continuous (it becomes $x + 2$). Another: $\frac{\sin x}{x}$ at 0, repaired by giving it the
   value 1 there. The repaired function is called the **continuous extension**.
2. **Jump.** Both one-sided limits exist but differ. Examples: $\operatorname{sgn}(x)$ at 0; the floor function
   $\lfloor x \rfloor$ at every whole number. No redefinition at one point can repair a jump.
3. **Infinite.** At least one one-sided limit is $\pm\infty$. Example: $\frac1x$ and $\frac1{x^2}$ at 0, $\tan x$ at
   $\frac\pi2$. (Strictly, $\frac1x$ is not defined at 0, so it is not "discontinuous at 0" in the narrow sense: 0 is
   just not in its domain. $\frac1x$ is a continuous function on its domain. What is true is that no value at 0
   could make it continuous there.)
4. **Oscillating** (often called **essential**). At least one one-sided limit fails to exist without being infinite.
   Example: $\sin\frac1x$ at 0.

**Worked example.** Classify the discontinuities of $f(x) = \frac{x^2 - x}{x^2 - 1}$.

*Solution.* The denominator $x^2 - 1 = (x - 1)(x + 1)$ is 0 at $x = \pm1$, and the numerator is $x(x - 1)$. For
$x \ne \pm 1$, $f(x) = \frac{x}{x + 1}$. At $x = 1$ the limit is $\frac12$: removable. At $x = -1$ the numerator of
the simplified form tends to $-1$ and the denominator to 0: infinite. **Check:** $f(1.001) = \frac{1.001}{2.001}
\approx 0.50025$.

**Worked example.** For which $c$ is

$$
f(x) = \begin{cases} cx + 1, & x \le 2, \\ x^2, & x > 2 \end{cases}
$$

continuous?

*Solution.* Each piece is a polynomial, so the only question is $x = 2$. The left limit (and value) is $2c + 1$; the
right limit is $4$. They agree when $2c + 1 = 4$, so $c = \frac32$.

### Stranger examples

The pencil picture suggests that continuity is about whole intervals. It is not: it is about each single point, and
that allows some strange things.

**Dirichlet's function** is $D(x) = 1$ if $x$ is rational and $D(x) = 0$ if $x$ is irrational. Every interval, however
short, contains both rational and irrational numbers (Chapter 18 proves this from the properties of the real
numbers). So near any point $D$ takes both values 0 and 1, and $\lim_{x \to a} D(x)$ never exists. $D$ is continuous
**nowhere**.

Now multiply by $x$: $g(x) = x\,D(x)$, which is $x$ at rationals and 0 at irrationals. At $a = 0$, $|g(x) - g(0)| =
|x D(x)| \le |x|$, so $\delta = \varepsilon$ works: $g$ is continuous at 0. At any $a \ne 0$, nearby values include some
near $a$ (at rationals) and some equal to 0 (at irrationals), so there is no limit. $g$ is continuous at **exactly one
point**. Try drawing that without lifting your pencil.

Exercise 12 goes further: a function continuous at every irrational number and discontinuous at every rational one.

## 3.2 The intermediate value theorem

Return to the hill. Your height $h(t)$ is a continuous function of time on $[8, 12]$, with $h(8) = 0$ (the bottom) and
$h(12) = H$ (the top). The claim is that $h(t) = \frac H2$ for some $t$. The general theorem:

> **Intermediate value theorem (IVT).** Let $f$ be continuous on the closed interval $[a, b]$, and let $N$ be any
> number between $f(a)$ and $f(b)$. Then there is at least one $c$ in $[a, b]$ with $f(c) = N$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 225" role="img" aria-label="A continuous curve from height f(a) at a to height f(b) at b. A horizontal orange line at height N between them meets the curve at three points, each marked c">
  <rect x="50.0" y="37.3" width="250.0" height="143.5" fill="#9cc9ea" fill-opacity="0.35"/>
  <polyline points="50.0,180.8 51.2,178.4 52.5,176.0 53.8,173.6 55.0,171.2 56.2,168.9 57.5,166.5 58.8,164.2 60.0,161.9 61.2,159.6 62.5,157.3 63.8,155.1 65.0,152.9 66.2,150.7 67.5,148.6 68.8,146.5 70.0,144.5 71.2,142.5 72.5,140.5 73.8,138.6 75.0,136.8 76.2,135.0 77.5,133.2 78.8,131.6 80.0,130.0 81.2,128.4 82.5,126.9 83.8,125.5 85.0,124.2 86.2,122.9 87.5,121.7 88.8,120.5 90.0,119.5 91.2,118.5 92.5,117.5 93.8,116.7 95.0,115.9 96.2,115.2 97.5,114.6 98.8,114.1 100.0,113.6 101.2,113.2 102.5,112.9 103.8,112.7 105.0,112.5 106.2,112.5 107.5,112.4 108.8,112.5 110.0,112.7 111.2,112.9 112.5,113.2 113.8,113.5 115.0,113.9 116.2,114.4 117.5,115.0 118.8,115.6 120.0,116.3 121.2,117.0 122.5,117.8 123.8,118.7 125.0,119.6 126.2,120.5 127.5,121.6 128.8,122.6 130.0,123.7 131.2,124.9 132.5,126.0 133.8,127.3 135.0,128.5 136.2,129.8 137.5,131.1 138.8,132.5 140.0,133.8 141.2,135.2 142.5,136.6 143.8,138.0 145.0,139.5 146.2,140.9 147.5,142.3 148.8,143.8 150.0,145.2 151.2,146.6 152.5,148.1 153.8,149.5 155.0,150.9 156.2,152.3 157.5,153.6 158.8,155.0 160.0,156.3 161.2,157.6 162.5,158.8 163.8,160.1 165.0,161.3 166.2,162.4 167.5,163.5 168.8,164.6 170.0,165.6 171.2,166.5 172.5,167.5 173.8,168.3 175.0,169.1 176.2,169.9 177.5,170.6 178.8,171.2 180.0,171.7 181.2,172.2 182.5,172.7 183.8,173.0 185.0,173.3 186.2,173.5 187.5,173.7 188.8,173.8 190.0,173.7 191.2,173.7 192.5,173.5 193.8,173.3 195.0,173.0 196.2,172.6 197.5,172.2 198.8,171.6 200.0,171.0 201.2,170.3 202.5,169.6 203.8,168.7 205.0,167.8 206.2,166.8 207.5,165.8 208.8,164.6 210.0,163.4 211.2,162.2 212.5,160.8 213.8,159.4 215.0,157.9 216.2,156.4 217.5,154.8 218.8,153.1 220.0,151.4 221.2,149.6 222.5,147.7 223.8,145.8 225.0,143.9 226.2,141.9 227.5,139.9 228.8,137.8 230.0,135.7 231.2,133.5 232.5,131.3 233.8,129.1 235.0,126.8 236.2,124.5 237.5,122.2 238.8,119.9 240.0,117.5 241.2,115.2 242.5,112.8 243.8,110.4 245.0,108.0 246.2,105.6 247.5,103.2 248.8,100.8 250.0,98.4 251.2,96.0 252.5,93.7 253.8,91.3 255.0,89.0 256.2,86.6 257.5,84.4 258.8,82.1 260.0,79.9 261.2,77.7 262.5,75.5 263.8,73.4 265.0,71.3 266.2,69.2 267.5,67.2 268.8,65.3 270.0,63.4 271.2,61.5 272.5,59.7 273.8,58.0 275.0,56.3 276.2,54.7 277.5,53.1 278.8,51.6 280.0,50.2 281.2,48.9 282.5,47.6 283.8,46.4 285.0,45.2 286.2,44.1 287.5,43.1 288.8,42.2 290.0,41.4 291.2,40.6 292.5,39.9 293.8,39.3 295.0,38.7 296.2,38.3 297.5,37.9 298.8,37.5 300.0,37.3" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="40.0" y1="200.0" x2="330.0" y2="200.0" stroke="currentColor" stroke-width="1.2"/>
  <line x1="50.0" y1="210.0" x2="50.0" y2="10.0" stroke="currentColor" stroke-width="1.2"/>
  <line x1="45" y1="120.0" x2="320" y2="120.0" stroke="#eea66f" stroke-width="2"/>
  <circle cx="89.3" cy="120.0" r="4" fill="#7ccf9a" stroke="currentColor"/>
  <line x1="89.3" y1="120.0" x2="89.3" y2="200.0" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="89.3" y="214.0" font-size="11" text-anchor="middle" fill="currentColor">c</text>
  <circle cx="125.6" cy="120.0" r="4" fill="#7ccf9a" stroke="currentColor"/>
  <line x1="125.6" y1="120.0" x2="125.6" y2="200.0" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="125.6" y="214.0" font-size="11" text-anchor="middle" fill="currentColor">c</text>
  <circle cx="238.7" cy="120.0" r="4" fill="#7ccf9a" stroke="currentColor"/>
  <line x1="238.7" y1="120.0" x2="238.7" y2="200.0" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="238.7" y="214.0" font-size="11" text-anchor="middle" fill="currentColor">c</text>
  <text x="50.0" y="214.0" font-size="11" text-anchor="middle" fill="currentColor">a</text>
  <text x="300.0" y="214.0" font-size="11" text-anchor="middle" fill="currentColor">b</text>
  <line x1="300.0" y1="200.0" x2="300.0" y2="37.3" stroke="currentColor" stroke-width="1" stroke-dasharray="2 3"/>
  <text x="44.0" y="184.8" font-size="10" text-anchor="end" fill="currentColor">f(a)</text>
  <text x="44.0" y="41.3" font-size="10" text-anchor="end" fill="currentColor">f(b)</text>
  <text x="44.0" y="124.0" font-size="11" text-anchor="end" fill="currentColor">N</text>
</svg>
</div>

The theorem says *there is* a $c$; it does not say where, and there may be several. It is an **existence theorem**.

### Why it needs a proof, and why the proof is postponed

The IVT feels obvious, which makes it worth asking what it depends on. Here is a warning. Work only with **rational**
numbers (fractions), and let $f(x) = x^2 - 2$ on $[0, 2]$. Then $f(0) = -2 < 0$ and $f(2) = 2 > 0$, and $f$ is a
perfectly good continuous function. But there is no rational $c$ with $c^2 = 2$ (because $\sqrt2$ is irrational). The
graph crosses the axis at a "gap" in the rationals. So the IVT is **not** a consequence of continuity alone: it also
needs the fact that the real number line has no gaps. That property, called **completeness**, is the subject of
[Chapter 18](18-The-Real-Numbers.md), which proves the IVT in section 18.6.

*The idea of the proof*, for $f(a) < N < f(b)$: look at the set of points $x$ in $[a, b]$ where $f(x) < N$. Let $c$ be
the "rightmost edge" of that set, its least upper bound. Completeness guarantees that such an edge exists as a real
number. Continuity then forbids $f(c) < N$ (points just to the right of $c$ would also be below $N$, so $c$ would not
be the edge) and forbids $f(c) > N$ (points just to the left would also be above $N$, so the edge would be further
left). So $f(c) = N$.

### Using the IVT

The most common use: **to show an equation has a solution, find a sign change.** If $f$ is continuous on $[a, b]$ and
$f(a)$, $f(b)$ have opposite signs, then $f(c) = 0$ for some $c$ between them (take $N = 0$).

**Worked example.** Show that $x^3 + x - 1 = 0$ has a solution between 0 and 1.

*Solution.* $f(x) = x^3 + x - 1$ is a polynomial, so continuous. $f(0) = -1 < 0$ and $f(1) = 1 > 0$. By the IVT there
is $c \in (0, 1)$ with $f(c) = 0$. Moreover there is only one solution: $x^3 + x$ is strictly increasing (a sum of two
increasing functions), so it takes the value 1 at most once.

**Worked example (square roots exist).** For any $s > 0$ there is a positive number whose square is $s$.

*Solution.* $f(x) = x^2$ is continuous on $[0, s + 1]$, with $f(0) = 0 < s$ and $f(s + 1) = s^2 + 2s + 1 > s$. By the
IVT, $c^2 = s$ for some $c$. This is where $\sqrt2$ comes from: the real numbers have it because they are complete.

**Worked example (odd-degree polynomials).** Every polynomial of odd degree has at least one real root.

*Solution.* Divide by the leading coefficient, so $p(x) = x^n + c_{n-1}x^{n-1} + \cdots + c_0$ with $n$ odd. For
$x \ne 0$, $p(x) = x^n\left(1 + \frac{c_{n-1}}x + \cdots + \frac{c_0}{x^n}\right)$. The bracket tends to 1 as
$x \to \pm\infty$, so for $|x|$ large it is positive, and $p(x)$ has the sign of $x^n$, which (as $n$ is odd) is the
sign of $x$. So $p(-R) < 0 < p(R)$ for some large $R$, and the IVT gives a root in $[-R, R]$. Even degree is
different: $x^2 + 1$ has no real root.

**Worked example (a fixed point).** If $f$ is continuous on $[0, 1]$ and all its values lie in $[0, 1]$, then
$f(c) = c$ for some $c$.

*Solution.* Let $g(x) = f(x) - x$. Then $g(0) = f(0) \ge 0$ and $g(1) = f(1) - 1 \le 0$. If either is zero we are done;
otherwise $g$ changes sign and the IVT gives $g(c) = 0$. Such a $c$ is a **fixed point** of $f$. This is the
one-dimensional case of Brouwer's fixed point theorem, which says the same for continuous maps of a disc or ball to
itself.

**Worked example (the two hikers).** You climb a mountain path from 8 a.m. to 4 p.m. one day, and come down the same
path from 8 a.m. to 4 p.m. the next, at whatever varying speeds. Is there a point on the path that you pass at the
same time of day on both days?

*Solution.* Let $u(t)$ be your distance along the path at time $t$ on day one, and $d(t)$ on day two. Both are
continuous on $[8, 16]$. Let $g(t) = u(t) - d(t)$. At 8 a.m., $u = 0$ and $d$ is the full length $\ell$, so $g(8) =
-\ell < 0$; at 4 p.m., $g(16) = \ell - 0 > 0$. So $g(t) = 0$ at some time $t$: yes. (Picture two hikers on the same
day, one going up and one coming down: they must meet.)

### Bisection

The IVT says a root exists. Its *idea* also finds it. Suppose $f$ is continuous and $f(a)$, $f(b)$ have opposite
signs. Look at the midpoint $m = \frac{a + b}2$. Either $f(m) = 0$ (done), or $f(m)$ has the opposite sign to one of
$f(a)$, $f(b)$; keep the half where the sign changes. Repeat. This is the **bisection method**.

Each step halves the interval, and the root is always inside it. After $n$ steps the interval has length
$\frac{b - a}{2^n}$, so its midpoint is within $\frac{b - a}{2^{n+1}}$ of a root. That is a **guaranteed error bound**,
which few methods can offer.

**Worked example.** Bisection for $x^3 + x - 1$ on $[0, 1]$ ($f(0) < 0 < f(1)$):

| step | interval | midpoint $m$ | $f(m)$ | keep |
|---|---|---|---|---|
| 1 | $[0, 1]$ | 0.5 | $-0.375$ | $[0.5, 1]$ |
| 2 | $[0.5, 1]$ | 0.75 | $0.171875$ | $[0.5, 0.75]$ |
| 3 | $[0.5, 0.75]$ | 0.625 | $-0.130859$ | $[0.625, 0.75]$ |
| 4 | $[0.625, 0.75]$ | 0.6875 | $0.012451$ | $[0.625, 0.6875]$ |
| 5 | $[0.625, 0.6875]$ | 0.65625 | $-0.061127$ | $[0.65625, 0.6875]$ |
| 6 | $[0.65625, 0.6875]$ | 0.671875 | $-0.024830$ | $[0.671875, 0.6875]$ |
| 7 | $[0.671875, 0.6875]$ | 0.6796875 | $-0.006314$ | $[0.6796875, 0.6875]$ |
| 8 | $[0.6796875, 0.6875]$ | 0.68359375 | $0.003037$ | $[0.6796875, 0.68359375]$ |

After 8 steps the root lies in an interval of length $\frac1{256} \approx 0.0039$. The true root is
$0.6823278\ldots$, and indeed it is inside. **Check:** $0.6823278^3 + 0.6823278 - 1 \approx 0.0000000$.

How many steps for six decimal places on $[0, 1]$? We need $\frac1{2^n} < 10^{-6}$, that is $2^n > 10^6$. Since
$2^{20} = 1\,048\,576$, twenty steps suffice. Each step gains one binary digit, a little under a third of a decimal
digit. That is slow but completely reliable. Newton's method (Chapter 7) is much faster when it works, and bisection
is the safety net when it does not.

**Try it in Python.**

```python
def bisect(f, a, b, tol=1e-10):
    fa = f(a)
    while b - a > tol:
        m = (a + b) / 2
        fm = f(m)
        if fa * fm <= 0:
            b = m              # sign change in [a, m]
        else:
            a, fa = m, fm      # sign change in [m, b]
    return (a + b) / 2

print(bisect(lambda x: x**3 + x - 1, 0, 1))   # 0.6823278038...
```

### History

Bernard Bolzano, a priest and mathematician in Prague, published in 1817 a paper whose title (translated) begins
"Purely analytic proof of the theorem that between any two values which give results of opposite sign, there lies at
least one real root of the equation". His point was exactly ours: the theorem had been accepted on geometric
intuition, and he wanted a proof from the properties of numbers alone. Lacking a construction of the real numbers, he
could not quite finish; the gap was filled when Dedekind, Cantor and others constructed the reals around 1872
(Chapter 18). Cauchy gave a proof by repeated subdivision, essentially bisection, in his *Cours d'analyse* (1821).

<figure class="play" data-play="sqrt"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> The intermediate value theorem at work: halve the gap where x² − n changes sign, again and again, and close in on √n.</figcaption></figure>

## 3.3 The extreme value theorem

*Optimisation* means finding the largest or smallest value of something: the largest area for a given fence, the
shortest route, the cheapest design. Chapter 7 does this with derivatives. But there is a prior question: **is there a
largest value at all?** The function $f(x) = x$ on the open interval $(0, 1)$ takes values as close to 1 as you like,
but never 1, so it has no largest value. Searching for its maximum would be a hunt for something that does not exist.

> **Extreme value theorem (EVT).** If $f$ is continuous on the closed interval $[a, b]$, then $f$ attains a maximum
> and a minimum value there: there are points $c$ and $d$ in $[a, b]$ with
>
> $f(d) \le f(x) \le f(c)$ for all $x$ in $[a, b]$.

The maximum value is $f(c)$, attained at $c$; similarly the minimum. Again this is an existence theorem: it does not
say how to find $c$ or $d$.

### Every hypothesis is needed

Break any one hypothesis and the conclusion can fail.

- **The interval must be closed.** $f(x) = x$ on $(0, 1)$: no maximum (values approach 1) and no minimum (values
  approach 0). Also $f(x) = \frac1x$ on $(0, 1]$: unbounded above, so certainly no maximum.
- **The interval must be bounded.** $f(x) = x$ on $[0, \infty)$ has no maximum.
- **The function must be continuous.** On $[0, 1]$ let $f(x) = x$ for $x < 1$ and $f(1) = 0$. The values approach 1
  but never reach it. One bad point is enough.

What the closed bounded interval provides is that you cannot "escape" through an endpoint that is missing or at
infinity. Chapter 20 names the property: $[a, b]$ is **compact**.

### Boundedness, then extremes

The proof (in [Chapter 18](18-The-Real-Numbers.md), section 18.6) comes in two steps, and the first is a theorem in
its own right.

**Boundedness theorem.** A continuous function on $[a, b]$ is **bounded**: there is a number $K$ with $|f(x)| \le K$
for all $x$ in $[a, b]$.

*The idea.* If $f$ were unbounded, then on one of the halves of $[a, b]$ it would still be unbounded; on one of the
quarters inside that half, still unbounded; and so on. The nested intervals shrink to a single point $p$ (by
completeness). But $f$ is continuous at $p$, so $f$ is bounded near $p$ (Chapter 2.6's lemma), which contradicts
unboundedness on the tiny intervals around $p$. This is bisection again, used as a proof technique.

*From boundedness to an attained maximum.* The values $f(x)$ have a least upper bound $M$ (completeness again).
If $f$ never equalled $M$, then $\frac1{M - f(x)}$ would be continuous on $[a, b]$, hence bounded by the first step,
but values of $f$ come arbitrarily close to $M$, which makes $\frac1{M - f(x)}$ arbitrarily large. Contradiction, so
$f(c) = M$ for some $c$.

**Worked example.** Explain why there is a point on the parabola $y = x^2$, with $0 \le x \le 2$, closest to the point
$(3, 0)$.

*Solution.* The squared distance $D(x) = (x - 3)^2 + x^4$ is a polynomial, hence continuous on the closed interval
$[0, 2]$. By the EVT it attains a minimum. (Chapter 7 shows how to find it; here we only know it exists, which is the
licence to go looking.) Restricting to a closed interval was the trick: on the whole parabola we would need a separate
argument that far-away points are not closer.

**Putting IVT and EVT together.** If $f$ is continuous on $[a, b]$ with minimum $m$ and maximum $M$, the IVT (applied
between the points where $m$ and $M$ are attained) shows that $f$ takes every value between $m$ and $M$. So the set of
values of $f$ on $[a, b]$ is exactly the closed interval $[m, M]$. **A continuous function maps closed bounded
intervals onto closed bounded intervals.** This is a neat summary of both theorems.

## 3.4 Continuity of compositions and inverses

*Level: advanced.*

### Compositions

Is $\sqrt{1 + x^2}$ continuous? It is built by doing $1 + x^2$ first, then taking the square root: it is a
**composition** $f(g(x))$, written $f \circ g$, with $g(x) = 1 + x^2$ and $f(u) = \sqrt u$. Both pieces are
continuous. The next theorem says that is enough. It is also the rule that lets you "move a limit inside a
continuous function".

> **Theorem (limits through continuous functions).** If $\lim_{x \to a} g(x) = b$ and $f$ is continuous at $b$, then
>
> $\lim_{x \to a} f(g(x)) = f(b)$.

*Proof.* Let $\varepsilon > 0$. Because $f$ is continuous at $b$, there is $\eta > 0$ (eta, a second tolerance) such
that $|u - b| < \eta$ implies $|f(u) - f(b)| < \varepsilon$. Now use the limit of $g$ with the tolerance $\eta$: there is
$\delta > 0$ such that $0 < |x - a| < \delta$ implies $|g(x) - b| < \eta$. Chain the two: for $0 < |x - a| < \delta$,
$|g(x) - b| < \eta$, so $|f(g(x)) - f(b)| < \varepsilon$. $\square$

The proof is a relay: $f$ tells $g$ how close it must get to $b$, and $g$ tells $x$ how close it must get to $a$.

**Corollary.** If $g$ is continuous at $a$ and $f$ is continuous at $g(a)$, then $f \circ g$ is continuous at $a$.
(Take $b = g(a)$.) $\square$

So $\sqrt{1 + x^2}$, $\sin(x^2)$, $|\sin x|$, $\cos(\sin x)$ and $\frac{1}{1 + \sqrt{x^2 + 3}}$ are all continuous
everywhere.

**Worked example.** $\lim_{x \to 0} \sqrt{4 + \sin x} = \sqrt{4 + 0} = 2$, because $4 + \sin x \to 4$ and the square
root is continuous at 4.

**Worked example.** $\lim_{x \to 0} \cos\left(\frac{\pi \sin x}{x}\right)$. The inside tends to $\pi \cdot 1 = \pi$
(Chapter 2.4), and cosine is continuous, so the limit is $\cos \pi = -1$.

**Why $f$ must be continuous, not merely have a limit.** Let $g(x) = 0$ for every $x$, and let $f(u) = 1$ for $u \ne 0$
with $f(0) = 0$. Then $\lim_{x \to 0} g(x) = 0$ and $\lim_{u \to 0} f(u) = 1$. But $f(g(x)) = f(0) = 0$ for every $x$,
so $\lim_{x \to 0} f(g(x)) = 0$, not 1. The inner function sat exactly on the bad point of $f$. Continuity of $f$ at
$b$ is precisely what rules this out.

### Inverse functions

A function $f$ is **one-to-one** (or **injective**) if different inputs give different outputs. Then it can be run
backwards: the **inverse function** $f^{-1}$ takes each output $y$ back to the one input $x$ with $f(x) = y$. Its graph
is the graph of $f$ reflected in the line $y = x$ (the algebra book's [Chapter 6](../algebra/06-Functions.md) explains
why). Since reflecting a curve drawn without lifting the pencil gives another such curve, we expect: **the inverse of a
continuous one-to-one function is continuous.** On an interval that is true, and the proof is a good example of how
the IVT is used inside analysis.

A function is **strictly increasing** on an interval if $x < y$ implies $f(x) < f(y)$, **strictly decreasing** if it
implies $f(x) > f(y)$, and **strictly monotone** if it is one or the other. A strictly monotone function is clearly
one-to-one. The first theorem says that for continuous functions on intervals, the converse holds.

**Theorem A.** If $f$ is continuous and one-to-one on an interval $I$, then $f$ is strictly monotone on $I$.

*Proof.* If $I$ has fewer than two points there is nothing to prove. Otherwise fix two points $a < b$ in $I$; since
$f(a) \ne f(b)$, suppose $f(a) < f(b)$ (the other case is the mirror image and gives "decreasing"). We show $f$ is
strictly increasing: take any $x' < y'$ in $I$; we must show $f(x') < f(y')$.

Slide the pair $(a, b)$ continuously to the pair $(x', y')$: for $s$ in $[0, 1]$ let

$$
x(s) = (1 - s)a + s x', \qquad y(s) = (1 - s)b + s y' .
$$

Both are in $I$ (an interval contains every point between two of its points), and $x(s) < y(s)$ for every $s$, because
$(1 - s)(b - a) + s(y' - x') > 0$. Let $h(s) = f(y(s)) - f(x(s))$. Then $h$ is continuous on $[0, 1]$ (a difference of
compositions of continuous functions), and $h(s) \ne 0$ for every $s$, since $f$ is one-to-one and $x(s) \ne y(s)$. Now
$h(0) = f(b) - f(a) > 0$. If $h(1)$ were negative, the IVT would give some $s$ with $h(s) = 0$, which is impossible. So
$h(1) = f(y') - f(x') > 0$. $\square$

**Theorem B.** Let $g$ be strictly increasing on an interval $J$, and suppose its set of values $g(J)$ is also an
interval. Then $g$ is continuous on $J$.

*Proof.* Take $y_0$ in $J$ and let $x_0 = g(y_0)$. Let $\varepsilon > 0$; we may assume $\varepsilon$ is small (a $\delta$ that
works for a small tolerance works for every larger one). Suppose first that $x_0$ is not an endpoint of the interval
$g(J)$, and take $\varepsilon$ so small that $x_0 - \varepsilon$ and $x_0 + \varepsilon$ both lie in $g(J)$. Then there are points
$y_1, y_2$ in $J$ with $g(y_1) = x_0 - \varepsilon$ and $g(y_2) = x_0 + \varepsilon$, and since $g$ is increasing, $y_1 < y_0 <
y_2$. Let $\delta = \min(y_0 - y_1, y_2 - y_0) > 0$. If $y$ is in $J$ and $|y - y_0| < \delta$, then $y_1 < y < y_2$, so
$x_0 - \varepsilon = g(y_1) < g(y) < g(y_2) = x_0 + \varepsilon$. That is continuity at $y_0$. If $x_0$ is the left endpoint of
$g(J)$, then $y_0$ is the smallest point of $J$, and only the right-hand half of the argument is needed (use $y_2$);
similarly at the right endpoint. $\square$

The hypothesis that $g(J)$ is an interval is what rules out jumps: a jump in an increasing function would leave a gap
in its set of values.

**Theorem (continuity of inverses).** Let $f$ be continuous and one-to-one on an interval $I$. Then $f(I)$ is an
interval, and $f^{-1}: f(I) \to I$ is continuous.

*Proof.* By Theorem A, $f$ is strictly monotone; say increasing (otherwise use $-f$). By the IVT, $f(I)$ contains every
number between any two of its values, so it is an interval. The inverse $f^{-1}$ is strictly increasing too (if
$u < v$ but $f^{-1}(u) \ge f^{-1}(v)$, applying the increasing $f$ would give $u \ge v$). Its set of values is $I$, an
interval. Theorem B, applied to $g = f^{-1}$ on $J = f(I)$, says $f^{-1}$ is continuous. $\square$

**Worked examples.**

- **$n$th roots.** For a whole number $n \ge 1$, $f(x) = x^n$ is continuous and strictly increasing on $[0, \infty)$, and
  its set of values is $[0, \infty)$ (by the IVT and $x^n \ge x$ for $x \ge 1$). So the inverse $\sqrt[n]x$ exists and is
  continuous on $[0, \infty)$. For odd $n$, the same works on the whole line.
- **Arcsine.** $\sin x$ is continuous and strictly increasing on $\left[-\frac\pi2, \frac\pi2\right]$, with values
  $[-1, 1]$. Its inverse $\arcsin: [-1, 1] \to \left[-\frac\pi2, \frac\pi2\right]$ is continuous. Similarly $\arccos$ on
  $[-1, 1]$ and $\arctan$ on the whole line (inverting $\tan$ on $\left(-\frac\pi2, \frac\pi2\right)$).
- **Logarithms** (preview). Chapter 5 defines $e^x$, shows it is continuous and strictly increasing with values
  $(0, \infty)$, and gets the continuity of $\ln x$ from this theorem with no extra work.

The interval matters. On a domain with a gap, a continuous one-to-one function can have a discontinuous inverse:
let $f(x) = x$ on $[0, 1)$ and $f(x) = x - 1$ on $[2, 3]$. It is continuous and one-to-one, with values $[0, 2]$.
Its inverse jumps from near 1 to 2 at $y = 1$.

## Check yourself

??? question "1. Where is $f(x) = \dfrac{x^2 - 4}{x - 2}$ discontinuous, of what kind, and how can it be repaired?"

    Only at $x = 2$, where it is undefined. For $x \ne 2$, $f(x) = x + 2$, so $\lim_{x \to 2} f(x) = 4$: a removable
    discontinuity. Defining $f(2) = 4$ gives the continuous function $x + 2$.

??? question "2. Find $k$ so that $f(x) = kx^2$ for $x \le 1$ and $f(x) = 3 - x$ for $x > 1$ is continuous."

    At $x = 1$ the left value is $k$ and the right limit is $2$. So $k = 2$. Every other point is fine because each
    piece is a polynomial.

??? question "3. Classify the discontinuities of $\frac1{x^2 - 1}$, $\lfloor x \rfloor$ and $x \sin\frac1x$."

    $\frac1{x^2 - 1}$: infinite at $x = \pm1$ (vertical asymptotes). $\lfloor x \rfloor$: a jump of size 1 at every
    whole number, continuous elsewhere. $x \sin\frac1x$: undefined at 0, but $|x\sin\frac1x| \le |x| \to 0$, so the
    limit is 0 and the discontinuity is removable (define the value 0). Unlike $\sin\frac1x$, the oscillation is damped.

??? question "4. Show that $x^5 - x - 1 = 0$ has a root in $[1, 2]$, and do three steps of bisection."

    $f(1) = -1 < 0$, $f(2) = 32 - 3 = 29 > 0$, and $f$ is continuous, so there is a root. $f(1.5) \approx 5.09 > 0$, keep
    $[1, 1.5]$; $f(1.25) \approx 0.80 > 0$, keep $[1, 1.25]$; $f(1.125) \approx -0.323 < 0$, keep $[1.125, 1.25]$. The root
    ($1.16730\ldots$) is in the final interval.

??? question "5. Show that $\cos x = x$ has a solution, and say roughly where."

    Let $g(x) = \cos x - x$, continuous. $g(0) = 1 > 0$ and $g(\frac\pi2) = -\frac\pi2 < 0$, so a solution lies in
    $(0, \frac\pi2)$. Further: $g(0.7) \approx 0.065 > 0$ and $g(0.8) \approx -0.103 < 0$, so it is in $(0.7, 0.8)$.
    (It is $0.739085\ldots$, and it is unique since $g$ is strictly decreasing there.)

??? question "6. How many bisection steps on an interval of length 3 guarantee that the midpoint is within $10^{-4}$ of a root?"

    After $n$ steps the midpoint is within $\frac{3}{2^{n+1}}$ of a root. We need $2^{n+1} > 30\,000$. Since
    $2^{14} = 16\,384$ and $2^{15} = 32\,768$, $n + 1 = 15$, so $n = 14$ steps.

??? question "7. For each of these, say whether a maximum is guaranteed, and why: $x^2$ on $[-1, 2]$; $x^2$ on $(-1, 2)$; $\frac1x$ on $[1, 5]$; $\tan x$ on $[0, \frac\pi2)$."

    $x^2$ on $[-1, 2]$: yes, by the EVT (max 4 at $x = 2$). $x^2$ on $(-1, 2)$: not guaranteed, and in fact none:
    values approach 4 but $x = 2$ is excluded. $\frac1x$ on $[1, 5]$: yes, continuous on a closed bounded interval (max 1
    at $x = 1$). $\tan x$ on $[0, \frac\pi2)$: no, it is unbounded as $x \to \frac\pi2^-$.

??? question "8. A continuous function $f$ on $[0, 1]$ has $f(0) = f(1)$. Show there is $c$ in $[0, \tfrac12]$ with $f(c) = f(c + \tfrac12)$."

    Let $g(x) = f(x + \tfrac12) - f(x)$ on $[0, \tfrac12]$, continuous. Then $g(0) + g(\tfrac12) = f(\tfrac12) - f(0) +
    f(1) - f(\tfrac12) = f(1) - f(0) = 0$. So $g(0)$ and $g(\tfrac12)$ are opposite in sign or both zero; either way the
    IVT (or the zero itself) gives $c$ with $g(c) = 0$. (A walker who ends where she started has two moments half her
    walk apart at the same height.)

??? question "9. Let $T(\theta)$ be the temperature at longitude $\theta$ on a planet's equator (Earth, or Mars), a continuous function with $T(\theta + 2\pi) = T(\theta)$. Show that two opposite points of the equator have the same temperature."

    Let $g(\theta) = T(\theta) - T(\theta + \pi)$. Then $g(\theta + \pi) = T(\theta + \pi) - T(\theta + 2\pi) = -g(\theta)$. So
    $g(0)$ and $g(\pi)$ are negatives of each other: one is $\ge 0$ and the other $\le 0$. By the IVT on $[0, \pi]$, $g(c)
    = 0$ for some $c$, meaning $T(c) = T(c + \pi)$. (This is the one-dimensional case of the Borsuk-Ulam theorem.)

??? question "10. Using the composition theorem, find $\lim_{x \to 1} \sin\left(\dfrac{\pi(x^2 - 1)}{2(x - 1)}\right)$."

    The inside is $\frac{\pi(x + 1)}{2}$ for $x \ne 1$, which tends to $\pi$. Sine is continuous at $\pi$, so the limit is
    $\sin \pi = 0$.

??? question "11. Explain why $f(x) = x^3 + x$ has a continuous inverse on the whole real line, and find $f^{-1}(2)$ and $f^{-1}(10)$."

    $f$ is continuous and strictly increasing (sum of two increasing functions), so one-to-one. Its values go to
    $\pm\infty$ as $x \to \pm\infty$, so by the IVT its set of values is all of $\mathbb R$. By the theorem on inverses,
    $f^{-1}$ is continuous on $\mathbb R$. $f(1) = 2$ and $f(2) = 10$, so $f^{-1}(2) = 1$ and $f^{-1}(10) = 2$.

??? question "12. Thomae's function: $t(x) = \frac1q$ if $x = \frac pq$ in lowest terms with $q \ge 1$, and $t(x) = 0$ if $x$ is irrational. Show $t$ is continuous at every irrational and discontinuous at every rational."

    At a rational $a = \frac pq$, $t(a) = \frac1q > 0$, but every interval around $a$ contains irrationals, where $t = 0$.
    So with $\varepsilon = \frac1q$ no $\delta$ works: discontinuous.
    At an irrational $a$, $t(a) = 0$. Let $\varepsilon > 0$ and pick a whole number $Q$ with $\frac1Q < \varepsilon$. In the interval
    $(a - 1, a + 1)$ there are only finitely many fractions $\frac pq$ with $q \le Q$ (for each $q$, at most $2q + 1$
    of them). None equals $a$, so one of them is closest to $a$; let $\delta$ be its distance from $a$ (or $\delta = 1$ if there
    are none). For $|x - a| < \delta$, $x$ is either irrational ($t(x) = 0$) or a fraction with denominator $q > Q$
    ($t(x) = \frac1q < \frac1Q < \varepsilon$). So $|t(x) - 0| < \varepsilon$: continuous.

## What you learned

- $f$ is continuous at $a$ when $\lim_{x \to a} f(x) = f(a)$: small changes of input give small changes of output.
- Polynomials, rational functions (on their domains), roots, $|x|$, sine and cosine are continuous, and sums,
  products, quotients, compositions and inverses of continuous functions are continuous where defined.
- Discontinuities are removable, jumps, infinite or oscillating; continuity is a property of each point, and can hold
  at a single point only.
- The **intermediate value theorem**: a continuous function on $[a, b]$ takes every value between $f(a)$ and $f(b)$. It
  depends on the completeness of the real numbers and powers the bisection method, whose error after $n$ steps is at
  most $\frac{b - a}{2^{n+1}}$.
- The **extreme value theorem**: a continuous function on a closed bounded interval attains a maximum and a minimum;
  drop any hypothesis and it can fail.
- A continuous one-to-one function on an interval is strictly monotone, and its inverse is continuous.

**Next:** [Chapter 4](04-The-Derivative.md) defines the derivative as the limit of slopes, proves that differentiable
functions are continuous, and derives the sum, product, quotient and power rules.

## Further reading

- M. Spivak, *Calculus* (4th edition, 2008), chapters 6 and 7 (continuity and the three "hard theorems").
- S. Abbott, *Understanding Analysis* (2nd edition, 2015), chapter 4.
- B. Bolzano, "Rein analytischer Beweis des Lehrsatzes ..." (1817); an English translation is in S. B. Russ, *The
  Mathematical Works of Bernard Bolzano* (2004).
- J. Stewart, *Calculus: Early Transcendentals* (8th edition, 2015), section 2.5.
- On this site: the U of T guides [MAT137, Unit 2: Limits & Continuity](../../uoft/MAT137/unit02.md),
  [MAT158, Unit 4: Continuous Functions](../../uoft/MAT158H1/unit04.md) and
  [MAT158, Unit 5: The Three Hard Theorems](../../uoft/MAT158H1/unit05.md); the Topics lesson
  [Continuity](../../topics/change/level-7/02-continuity.md); the algebra book's
  [Chapter 6](../algebra/06-Functions.md) for inverse functions and
  [Chapter 12](../algebra/12-The-Fundamental-Theorem-of-Algebra.md) for roots of polynomials.
