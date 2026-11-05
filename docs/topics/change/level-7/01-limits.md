---
title: "Limits"
---

# Limits

*Change and motion · level 7, lesson 1 of 6*

## A question to start

Type this function into a calculator or a spreadsheet:

$$f(x) = \frac{x^2 - 1}{x - 1}.$$

Ask for $f(1)$ and you get an error: the top is $1 - 1 = 0$ and the bottom is $1 - 1 = 0$, and $\frac{0}{0}$ has no
value. Now ask for $f(0.999)$. The answer is $1.999$. Ask for $f(1.001)$: $2.001$. Try $f(0.999999)$: $1.999999$.

So the function has no value at $x = 1$, and yet it is obviously **heading somewhere** as $x$ gets close to 1. Where,
and how can we be sure? In level 6 you met exactly this situation with speed: the speed at an instant is "average
speed over a time interval of length 0", which is $\frac{0}{0}$. This lesson gives the tool that settles it, the
**limit**, and it is the foundation stone of all of calculus.

## The idea

### What a limit means, in words

We write

$$\lim_{x \to a} f(x) = L$$

and say "the **limit** of $f(x)$ as $x$ tends to $a$ is $L$". It means:

**You can make $f(x)$ as close to $L$ as you like, just by taking $x$ close enough to $a$ (but not equal to $a$).**

Three things to notice.

- "As close as you like" is a challenge you must be able to win every time. Someone says "get within 0.001 of $L$";
  you must be able to answer "fine, take $x$ within such-and-such of $a$". If they then say "within 0.000001", you
  must be able to answer again.
- $x$ **never equals** $a$. The limit is about what happens **near** $a$, not **at** $a$. The function does not even
  need a value at $a$.
- The arrow $x \to a$ means $x$ comes from **both** sides: numbers a bit less than $a$ and a bit more.

Turning "as close as you like" into a precise statement with two small numbers (called $\varepsilon$ and $\delta$) is
the job of [Infinity](../../infinity/index.md) and of first-year university. In this lesson we use the idea in words,
backed up by tables, pictures and algebra.

### Limits from a table

To guess a limit, make a table of values with $x$ closing in on $a$ from both sides. For our function at $a = 1$:

| $x$ | 0.9 | 0.99 | 0.999 | 1 | 1.001 | 1.01 | 1.1 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $f(x)$ | 1.9 | 1.99 | 1.999 | error | 2.001 | 2.01 | 2.1 |

From the left the values climb towards 2; from the right they fall towards 2. So we guess
$\lim_{x \to 1} f(x) = 2$.

A table is evidence, not proof. (A table can be fooled: a function could do something strange at $x = 1.0000001$
that your table never sees.) For a proof, use algebra. For every $x \ne 1$,

$$\frac{x^2 - 1}{x - 1} = \frac{(x - 1)(x + 1)}{x - 1} = x + 1.$$

Cancelling $x - 1$ is allowed **because** $x \ne 1$ (we never divide by zero). So near 1 the function is exactly the
line $y = x + 1$, and when $x$ is within 0.001 of 1, $f(x)$ is within 0.001 of 2. That is the limit, proved.

### The picture: a line with a hole

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 230" role="img" aria-label="The graph of x squared minus 1 over x minus 1: the straight line y equals x plus 1 with an open circle at the point (1, 2), where the function has no value.">
  <line x1="30" y1="188.4" x2="305" y2="188.4" stroke="currentColor" stroke-width="1.2"/>
  <line x1="98.8" y1="208" x2="98.8" y2="12" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="12" fill="currentColor"><line x1="167.5" y1="185.4" x2="167.5" y2="191.4" stroke="currentColor"/><text x="167.5" y="203.4" text-anchor="middle">1</text><line x1="236.2" y1="185.4" x2="236.2" y2="191.4" stroke="currentColor"/><text x="236.2" y="203.4" text-anchor="middle">2</text><line x1="95.8" y1="149.2" x2="101.8" y2="149.2" stroke="currentColor"/><text x="92.8" y="153.2" text-anchor="end">1</text><line x1="95.8" y1="110" x2="101.8" y2="110" stroke="currentColor"/><text x="92.8" y="114" text-anchor="end">2</text><line x1="95.8" y1="70.8" x2="101.8" y2="70.8" stroke="currentColor"/><text x="92.8" y="74.8" text-anchor="end">3</text><line x1="95.8" y1="31.6" x2="101.8" y2="31.6" stroke="currentColor"/><text x="92.8" y="35.6" text-anchor="end">4</text><text x="305" y="182.4" text-anchor="end">x</text><text x="104.8" y="22">y</text></g>
  <line x1="167.5" y1="188.4" x2="167.5" y2="110" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="98.8" y1="110" x2="167.5" y2="110" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <polyline points="30,188.4 33.4,186.4 36.9,184.5 40.3,182.5 43.8,180.6 47.2,178.6 50.6,176.6 54.1,174.7 57.5,172.7 60.9,170.8 64.4,168.8 67.8,166.8 71.2,164.9 74.7,162.9 78.1,161 81.6,159 85,157 88.4,155.1 91.9,153.1 95.3,151.2 98.8,149.2 102.2,147.2 105.6,145.3 109.1,143.3 112.5,141.4 115.9,139.4 119.4,137.4 122.8,135.5 126.2,133.5 129.7,131.6 133.1,129.6 136.6,127.6 140,125.7 143.4,123.7 146.9,121.8 150.3,119.8 153.8,117.8 157.2,115.9 160.6,113.9 164.1,112 167.5,110 170.9,108 174.4,106.1 177.8,104.1 181.2,102.2 184.7,100.2 188.1,98.2 191.6,96.3 195,94.3 198.4,92.4 201.9,90.4 205.3,88.4 208.8,86.5 212.2,84.5 215.6,82.6 219.1,80.6 222.5,78.6 225.9,76.7 229.4,74.7 232.8,72.8 236.2,70.8 239.7,68.8 243.1,66.9 246.6,64.9 250,63 253.4,61 256.9,59 260.3,57.1 263.8,55.1 267.2,53.2 270.6,51.2 274.1,49.2 277.5,47.3 280.9,45.3 284.4,43.4 287.8,41.4 291.2,39.4 294.7,37.5 298.1,35.5 301.6,33.6 305,31.6" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="167.5" cy="110" r="5" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="177.5" y="132" font-size="12" text-anchor="start" fill="currentColor">hole at (1, 2)</text>
  <text x="250" y="33.3" font-size="12" text-anchor="end" fill="currentColor">y = x + 1</text>
</svg>
</div>

The graph of $f$ is the line $y = x + 1$ with one point missing, drawn as an open circle at $(1, 2)$. The limit asks
"what height is the graph heading for as you walk towards $x = 1$?" The answer is the height of the hole, 2, even
though the graph has no point there.

Now suppose someone defines a new function $g$ which equals $f(x)$ for every $x \ne 1$, and also sets $g(1) = 5$. The
graph is the same line with the hole, plus one lonely dot at $(1, 5)$. Then still $\lim_{x \to 1} g(x) = 2$. The value
**at** the point plays no part in the limit. That will matter in the next lesson.

### One-sided limits

Sometimes the two sides disagree. Look at

$$s(x) = \frac{|x|}{x}.$$

For positive $x$, $|x| = x$ and $s(x) = 1$. For negative $x$, $|x| = -x$ and $s(x) = -1$. At $x = 0$ it is $\frac{0}{0}$
again.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 620 200" role="img" aria-label="Left: the function absolute value of x over x, equal to minus 1 for negative x and 1 for positive x, with open circles at both ends at x equals 0: a jump. Right: the curve 1 over x squared, which shoots upwards on both sides of x equals 0.">
  <line x1="30" y1="95" x2="285" y2="95" stroke="currentColor" stroke-width="1.2"/>
  <line x1="157.5" y1="178" x2="157.5" y2="12" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="12" fill="currentColor"><line x1="93.8" y1="92" x2="93.8" y2="98" stroke="currentColor"/><text x="93.8" y="110" text-anchor="middle">-1</text><line x1="221.2" y1="92" x2="221.2" y2="98" stroke="currentColor"/><text x="221.2" y="110" text-anchor="middle">1</text><line x1="154.5" y1="146.9" x2="160.5" y2="146.9" stroke="currentColor"/><text x="151.5" y="150.9" text-anchor="end">-1</text><line x1="154.5" y1="43.1" x2="160.5" y2="43.1" stroke="currentColor"/><text x="151.5" y="47.1" text-anchor="end">1</text><text x="285" y="89" text-anchor="end">x</text></g>
  <line x1="30" y1="146.9" x2="157.5" y2="146.9" stroke="#eea66f" stroke-width="3"/>
  <line x1="157.5" y1="43.1" x2="285" y2="43.1" stroke="#eea66f" stroke-width="3"/>
  <circle cx="157.5" cy="146.9" r="5" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="157.5" cy="43.1" r="5" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="221.2" y="33.1" font-size="12" text-anchor="middle" fill="currentColor">|x|/x</text>
  <line x1="350" y1="178" x2="605" y2="178" stroke="currentColor" stroke-width="1.2"/>
  <line x1="477.5" y1="178" x2="477.5" y2="12" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="12" fill="currentColor"><line x1="413.8" y1="175" x2="413.8" y2="181" stroke="currentColor"/><text x="413.8" y="193" text-anchor="middle">-1</text><line x1="541.2" y1="175" x2="541.2" y2="181" stroke="currentColor"/><text x="541.2" y="193" text-anchor="middle">1</text><line x1="474.5" y1="111.6" x2="480.5" y2="111.6" stroke="currentColor"/><text x="471.5" y="115.6" text-anchor="end">4</text><line x1="474.5" y1="45.2" x2="480.5" y2="45.2" stroke="currentColor"/><text x="471.5" y="49.2" text-anchor="end">8</text><text x="605" y="172" text-anchor="end">x</text></g>
  <polyline points="350,173.8 351.6,173.7 353.2,173.6 354.8,173.5 356.3,173.4 357.9,173.3 359.5,173.2 361.1,173 362.7,172.9 364.3,172.7 365.9,172.6 367.4,172.4 369,172.3 370.6,172.1 372.2,171.9 373.8,171.7 375.4,171.5 377,171.3 378.5,171.1 380.1,170.9 381.7,170.6 383.3,170.4 384.9,170.1 386.5,169.9 388.1,169.6 389.6,169.3 391.2,168.9 392.8,168.6 394.4,168.2 396,167.8 397.6,167.4 399.2,167 400.7,166.5 402.3,166.1 403.9,165.5 405.5,165 407.1,164.4 408.7,163.8 410.3,163.1 411.8,162.3 413.4,161.6 415,160.7 416.6,159.8 418.2,158.8 419.8,157.8 421.4,156.6 422.9,155.3 424.5,154 426.1,152.4 427.7,150.8 429.3,149 430.9,147 432.5,144.7 434,142.3 435.6,139.5 437.2,136.4 438.8,132.9 440.4,129 442,124.5 443.6,119.4 445.1,113.5 446.7,106.7 448.3,98.8 449.9,89.4 451.5,78.3 453.1,64.9 454.7,48.7 456.2,28.6" fill="none" stroke="#7ccf9a" stroke-width="3"/>
  <polyline points="498.8,28.6 500.3,48.7 501.9,64.9 503.5,78.3 505.1,89.4 506.7,98.8 508.3,106.7 509.9,113.5 511.4,119.4 513,124.5 514.6,129 516.2,132.9 517.8,136.4 519.4,139.5 521,142.3 522.5,144.7 524.1,147 525.7,149 527.3,150.8 528.9,152.4 530.5,154 532.1,155.3 533.6,156.6 535.2,157.8 536.8,158.8 538.4,159.8 540,160.7 541.6,161.6 543.2,162.3 544.7,163.1 546.3,163.8 547.9,164.4 549.5,165 551.1,165.5 552.7,166.1 554.3,166.5 555.8,167 557.4,167.4 559,167.8 560.6,168.2 562.2,168.6 563.8,168.9 565.4,169.3 566.9,169.6 568.5,169.9 570.1,170.1 571.7,170.4 573.3,170.6 574.9,170.9 576.5,171.1 578,171.3 579.6,171.5 581.2,171.7 582.8,171.9 584.4,172.1 586,172.3 587.6,172.4 589.1,172.6 590.7,172.7 592.3,172.9 593.9,173 595.5,173.2 597.1,173.3 598.7,173.4 600.2,173.5 601.8,173.6 603.4,173.7 605,173.8" fill="none" stroke="#7ccf9a" stroke-width="3"/>
  <text x="558" y="152.5" font-size="12" text-anchor="start" fill="currentColor">1/x²</text>
</svg>
</div>

As $x$ comes to 0 from the **right** (through positive numbers), $s(x)$ is always 1. As $x$ comes from the **left**,
$s(x)$ is always $-1$. We write the two **one-sided limits** as

$$\lim_{x \to 0^+} s(x) = 1, \qquad \lim_{x \to 0^-} s(x) = -1.$$

The small $+$ means "from above (the right)", the $-$ means "from below (the left)". The two-sided limit needs a
single number that the function approaches from **both** sides, so here it **does not exist**. The rule is:

**$\lim_{x \to a} f(x) = L$ exactly when both one-sided limits exist and both equal $L$.**

Real life is full of one-sided behaviour: a parking fee that jumps from 2 dollars to 4 dollars when you pass the
one-hour mark, or a light switch. Just before the hour the fee is heading for 2 dollars; just after it is 4 dollars.

### Limits that do not exist

A limit can fail in three typical ways.

1. **A jump.** The one-sided limits are different numbers, as with $s(x)$ above.
2. **Blowing up.** Look at $\frac{1}{x^2}$ near 0. At $x = 0.1$ it is 100; at $0.01$ it is 10 000; at $0.001$ it is
   1 000 000. It does not approach any number at all; it grows without end. We write
   $\lim_{x \to 0} \frac{1}{x^2} = \infty$ as a short way of saying **how** the limit fails to exist. The graph has a
   **vertical asymptote**, an upright line that the curve runs up alongside forever (right panel above).
3. **Wobbling.** The function $\sin\left(\frac{1}{x}\right)$ (with $x$ in radians) swings between $-1$ and $1$
   infinitely often as $x \to 0$: it equals 1 at $x = \frac{2}{\pi}, \frac{2}{5\pi}, \frac{2}{9\pi}, \ldots$ and $-1$ at
   $x = \frac{2}{3\pi}, \frac{2}{7\pi}, \ldots$, points crowding ever closer to 0. It never settles, so there is no
   limit.

### The limit laws

Building tables every time would be slow. Luckily limits behave well with arithmetic. If
$\lim_{x \to a} f(x) = L$ and $\lim_{x \to a} g(x) = M$, then

$$\lim_{x \to a} \big(f(x) + g(x)\big) = L + M, \qquad \lim_{x \to a} \big(f(x)\,g(x)\big) = LM, \qquad \lim_{x \to a} \frac{f(x)}{g(x)} = \frac{L}{M} \ \text{ if } M \ne 0,$$

and $\lim_{x \to a} c\,f(x) = cL$ for any constant $c$. The same holds for differences.

**Why the sum law is true.** If $f(x)$ is within 0.001 of $L$ and $g(x)$ is within 0.001 of $M$, then $f(x) + g(x)$
is within $0.001 + 0.001 = 0.002$ of $L + M$ (the two errors can at worst add up). Since we can make each error as
small as we like, we can make their total as small as we like too. The product and quotient laws have similar but
slightly longer arguments.

Two simple limits start everything off: $\lim_{x \to a} c = c$ (a constant stays put) and $\lim_{x \to a} x = a$.
Using the laws over and over, for **any polynomial** $p$,

$$\lim_{x \to a} p(x) = p(a).$$

For polynomials you may simply substitute. The same is true for a fraction of polynomials as long as the bottom is not
0 at $a$.

### When substitution gives $\frac{0}{0}$

The interesting limits are the ones where substituting gives $\frac{0}{0}$. That answer means "**not decided yet**",
not "undefined" and not "1". The trick is to rewrite the expression so the troublesome factor cancels. Two common
ways:

- **Factor and cancel**, as with $\frac{x^2 - 1}{x - 1}$.
- **Multiply by the conjugate** when there is a square root: $(\sqrt{x} - 2)(\sqrt{x} + 2) = x - 4$.

Every derivative in this level is a limit of exactly this $\frac{0}{0}$ kind.

<figure class="play" data-play="secant"><span class="ai-tag">AI-created</span><figcaption><b>A limit.</b> As h gets close to 0, the slope gets close to 2.</figcaption></figure>

## Worked examples

**1. Factor and cancel.** Find $\lim_{x \to 3} \dfrac{x^2 - 9}{x - 3}$.

1. Substituting gives $\frac{0}{0}$, so we must work.
2. For $x \ne 3$: $\dfrac{x^2 - 9}{x - 3} = \dfrac{(x - 3)(x + 3)}{x - 3} = x + 3$.
3. $\lim_{x \to 3} (x + 3) = 6$.

**2. A square root.** Find $\lim_{x \to 4} \dfrac{\sqrt{x} - 2}{x - 4}$.

1. Substituting gives $\frac{0}{0}$.
2. Since $x - 4 = (\sqrt{x} - 2)(\sqrt{x} + 2)$, for $x \ne 4$ the fraction is $\dfrac{1}{\sqrt{x} + 2}$.
3. Now substitute: $\dfrac{1}{2 + 2} = \dfrac14$.
4. Table check: at $x = 3.99$ the fraction is about 0.250156, and at $x = 4.01$ about 0.249844. Both near 0.25.

**3. Two sides.** Let $f(x) = x + 1$ for $x < 2$ and $f(x) = x^2$ for $x \ge 2$. Find the limit at 2.

1. From the left, $f(x) = x + 1 \to 3$.
2. From the right, $f(x) = x^2 \to 4$.
3. The one-sided limits differ ($3 \ne 4$), so $\lim_{x \to 2} f(x)$ **does not exist**, even though $f(2) = 4$.

**4. Using the laws.** Find $\lim_{x \to 2} \dfrac{x^3 - 2x + 1}{x + 3}$.

The bottom tends to $5 \ne 0$, and the top tends to $8 - 4 + 1 = 5$. By the quotient law the limit is
$\frac{5}{5} = 1$.

**5. A limit that is really a derivative.** Find $\lim_{h \to 0} \dfrac{(2 + h)^2 - 4}{h}$.

1. Expand: $(2 + h)^2 - 4 = 4 + 4h + h^2 - 4 = 4h + h^2$.
2. For $h \ne 0$, divide by $h$: $4 + h$.
3. As $h \to 0$ this tends to **4**. You will see in lesson 3 that this is the slope of $y = x^2$ at $x = 2$.

## Try it

1. Find $\lim_{x \to 2} (3x^2 - x)$.
2. Find $\lim_{x \to 5} \dfrac{x^2 - 25}{x - 5}$.
3. Find $\lim_{x \to -1} \dfrac{x^2 + 3x + 2}{x + 1}$.
4. Find $\lim_{x \to 9} \dfrac{\sqrt{x} - 3}{x - 9}$.
5. Find $\lim_{x \to 0^-} \dfrac{1}{x}$ and $\lim_{x \to 0^+} \dfrac{1}{x}$. Does $\lim_{x \to 0} \dfrac{1}{x}$ exist?
6. Find $\lim_{h \to 0} \dfrac{(1 + h)^3 - 1}{h}$.
7. A function has $f(4) = 7$ and $\lim_{x \to 4} f(x) = 3$. Sketch a graph that could be this function.
8. Use a calculator to fill in $\dfrac{2^x - 1}{x}$ at $x = 0.1, 0.01, 0.001$ and at $x = -0.1, -0.01, -0.001$. Guess
   the limit as $x \to 0$ to three decimal places.

??? note "Answers"
    1. A polynomial, so substitute: $3 \times 4 - 2 = 10$.
    2. For $x \ne 5$ it equals $x + 5$, so the limit is **10**.
    3. $x^2 + 3x + 2 = (x + 1)(x + 2)$, so for $x \ne -1$ the fraction is $x + 2$. The limit is $-1 + 2 =$ **1**.
    4. $x - 9 = (\sqrt{x} - 3)(\sqrt{x} + 3)$, so the fraction is $\dfrac{1}{\sqrt{x} + 3} \to \dfrac{1}{6}$.
    5. From the left, $\frac{1}{x}$ is a large negative number ($\frac{1}{-0.001} = -1000$): it goes to
       $-\infty$. From the right it goes to $+\infty$. Neither side approaches a number, so the limit **does not
       exist**.
    6. $(1 + h)^3 - 1 = 3h + 3h^2 + h^3$. Divided by $h$: $3 + 3h + h^2 \to$ **3**.
    7. Any graph that heads for height 3 from both sides of $x = 4$, with an open circle at $(4, 3)$ and a single
       filled dot at $(4, 7)$. For example the line $y = x - 1$ with that change at $x = 4$.
    8. To four decimals: $x = 0.1$: 0.7177; $0.01$: 0.6956; $0.001$: 0.6934; $-0.1$: 0.6697; $-0.01$: 0.6908;
       $-0.001$: 0.6929. Both sides close in on about **0.693**. (The exact value is the natural logarithm of 2,
       $\ln 2 \approx 0.693147$, which you will meet in [level 8](../level-8/02-exp-log-trig.md).)

## Common mistake

**Treating $\frac{0}{0}$ as an answer.** Substituting and getting $\frac{0}{0}$ does not mean the limit is 0, or 1,
or "undefined". It means the question is still open: simplify first, then substitute.

**Mixing up the limit with the value.** $\lim_{x \to a} f(x)$ and $f(a)$ are different questions. In question 7
they are 3 and 7. Often they are equal (the next lesson is about exactly when), but you must not assume it.

## Where it leads

- Next: [Continuity](02-continuity.md), the functions whose limits you can find by substitution.
- [Level 7 page](index.md) · [Change and motion topic page](../index.md)
- Back in level 6, [shrinking the interval](../level-6/02-shrinking-interval.md) was a limit before it had a name.
- The precise $\varepsilon$-$\delta$ definition, and limits of sequences that go on forever: [Infinity](../../infinity/index.md).
- The factoring used here: [Algebra: factoring](../../algebra/level-6/03-factoring.md). Conjugates and square roots:
  [Numbers: radicals](../../numbers/level-6/04-radicals.md).
- On the U of T shelf: [MAT137 Unit 2: limits and continuity](../../../uoft/MAT137/unit02.md).
