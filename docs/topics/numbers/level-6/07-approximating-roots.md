---
title: "Approximating roots"
---

# Approximating roots

*Numbers · level 6, lesson 7 of 7*

## A question to start

In a museum collection at Yale University there is a small round clay tablet from ancient Babylon, called YBC 7289,
made roughly 3800 years ago. On it is a square with its two diagonals, and some numbers written in the Babylonians'
base 60. One of them, turned into our decimals, is

$$1 + \frac{24}{60} + \frac{51}{60^2} + \frac{10}{60^3} = 1.4142129\ldots$$

The true value of $\sqrt2$ is $1.4142135\ldots$ The tablet is off by less than one millionth. With no calculators, no
decimals and no algebra, how could anyone get so close?

We do not know for certain what method the Babylonians used. But there is a very simple method, usually called the
**Babylonian method** (and also **Heron's method**, after Heron of Alexandria, who described it in the first century
AD), that reaches this accuracy in just three steps from a guess of 1. This lesson shows how it works, and why it
improves so astonishingly fast.

## The idea

### The key observation

Suppose you want $\sqrt2$, and your guess is $x = 1.5$. Divide 2 by your guess: $\tfrac{2}{1.5} = 1.333\ldots$

Notice that the two numbers $1.5$ and $1.333\ldots$ multiply to exactly 2. If they were equal, each would be
$\sqrt2$. They are not equal, so one must be **too big** and the other **too small**:

- $1.5^2 = 2.25$, more than 2, so 1.5 is too big;
- then $\tfrac{2}{1.5}$ must be too small, because multiplying a too-big number by it gives exactly 2.

So $\sqrt2$ is trapped **between** $x$ and $\tfrac{2}{x}$. The obvious next guess is the number halfway between them,
their **average**:

$$x_{\text{new}} = \frac{1}{2}\left(x + \frac{2}{x}\right)$$

This is the whole method: **divide, then average**. Repeat with the new guess.

### A picture: making a rectangle more square

Think of a rectangle with area 2. If one side is $x$, the other side is $\tfrac2x$ (so that the area is 2). A square of
area 2 has side exactly $\sqrt2$. The method replaces the rectangle by a new one whose side is the average of the two
old sides, so it is closer to a square. Each step, the rectangle becomes more square, and its side closes in on
$\sqrt2$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 200" role="img" aria-label="Three rectangles, each of area 2: 1 by 2, then 1.5 by 1.33, then 1.417 by 1.412, which is almost a square">
  <g stroke="currentColor" stroke-width="2">
    <rect x="20" y="20" width="70" height="140" fill="#eea66f" fill-opacity="0.7"/>
    <rect x="130" y="66.7" width="105" height="93.3" fill="#9cc9ea" fill-opacity="0.7"/>
    <rect x="275" y="61.2" width="99.2" height="98.8" fill="#7ccf9a" fill-opacity="0.7"/>
  </g>
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <text x="55" y="180">1 × 2</text>
    <text x="182.5" y="180">1.5 × 1.333</text>
    <text x="324.6" y="180">1.4167 × 1.4118</text>
    <text x="55" y="95">area 2</text><text x="182.5" y="118">area 2</text><text x="324.6" y="115">area 2</text>
  </g>
</svg>
</div>

### Running the method for $\sqrt2$

Start with $x_0 = 1$ (a rough guess: $1^2 = 1$ is too small). Each new line is $\tfrac12\left(x + \tfrac2x\right)$:

| step | guess as a fraction | as a decimal | error (guess $- \sqrt2$) |
| --- | --- | --- | --- |
| 0 | $1$ | 1 | $-0.414$ |
| 1 | $\tfrac32$ | 1.5 | $0.0858$ |
| 2 | $\tfrac{17}{12}$ | 1.41666667 | $0.00245$ |
| 3 | $\tfrac{577}{408}$ | 1.41421569 | $0.0000021$ |
| 4 | $\tfrac{665857}{470832}$ | 1.41421356237469 | $0.0000000000016$ |

The true value is $\sqrt2 = 1.41421356237310\ldots$ Look at the errors: about 0.09, then 0.002, then 0.000002, then
0.0000000000016. The number of correct decimal places roughly **doubles** with every step. Step 3 is already as good as
the Babylonian tablet; step 4 is good to 11 decimal places.

You can check the fractions by hand. From $\tfrac32$: $\tfrac{2}{3/2} = \tfrac43$, and the average of $\tfrac32 =
\tfrac{9}{6}$ and $\tfrac43 = \tfrac86$ is $\tfrac{17}{12}$.

### Why it gets better so fast

Let $a$ be the number whose root we want (here $a = 2$), and let $x$ be the current guess. How far is the new guess
from $\sqrt a$? Put everything over the common denominator $2x$:

$$\frac12\left(x + \frac{a}{x}\right) - \sqrt a = \frac{x^2 + a - 2x\sqrt a}{2x} = \frac{(x - \sqrt a)^2}{2x}$$

(The last step uses $(x - \sqrt a)^2 = x^2 - 2x\sqrt a + a$, since $(\sqrt a)^2 = a$.)

Read this carefully, because it says two important things.

**1. The new error is the old error squared, divided by $2x$.** If the old error is $0.002$, the new one is about
$\tfrac{0.002^2}{2 \times 1.414} = \tfrac{0.000004}{2.83} \approx 0.0000014$. Squaring a small number makes it much
smaller: an error with 2 zeros after the point turns into one with about 5 or 6. That is why the correct digits double.
This kind of speed is called **quadratic convergence**.

**2. The new guess is never too small** (after the first step). The right side is a square divided by a positive
number, so it is 0 or positive. Whatever your starting guess, every guess after it is at least $\sqrt a$, and the
guesses come down towards $\sqrt a$ from above. You can see this in the table: from step 1 on, every error is
positive.

### How many steps?

How many steps does it take to get $\sqrt2$ correct to 6 decimal places, so the error is less than $0.0000005$?

- **From $x_0 = 1$:** step 3 has error $0.0000021$, not quite enough (it gives 1.414216 instead of 1.414214). Step 4
  has error about $0.0000000000016$, far more than enough. So **4 steps**.
- **From $x_0 = 1.4$** (a better start): step 1 gives $1.4142857$, error about $0.000072$. Step 2: the error formula
  predicts about $\tfrac{0.000072^2}{2.83} \approx 0.0000000018$. So **2 steps** are enough.

A good first guess saves steps. But even a terrible one works in the end: starting from $x_0 = 100$, the guesses go
$50.01, 25.02, 12.55, 6.36, 3.34, 1.97, 1.49, 1.416, 1.4142150, 1.41421356237\ldots$ When the guess is far too big,
$\tfrac{2}{x}$ is tiny and each step roughly halves the guess, which is slow. Once the guess gets close, the squaring
takes over and it finishes in a few steps. That start needs 10 steps for 6 decimal places.

### Any square root, and beyond

For any positive number $a$, the same rule works: $x_{\text{new}} = \tfrac12\left(x + \tfrac{a}{x}\right)$. Compare it
with the guess-and-check of [level 5](../level-5/06-square-roots.md), where each round gave only about one more
correct digit.

For **cube roots** there is a similar rule. To find $\sqrt[3]{a}$, use

$$x_{\text{new}} = \frac13\left(2x + \frac{a}{x^2}\right)$$

The idea is the same: if $x$ is too big, $\tfrac{a}{x^2}$ is too small, and this is a weighted average of the two.
Both rules are special cases of **Newton's method**, a general way of solving equations that you will meet in
calculus.

## Worked examples

**1. $\sqrt{10}$ from 3.**

1. $x_1 = \tfrac12\left(3 + \tfrac{10}{3}\right) = \tfrac12(3 + 3.3333) = 3.1666667$.
2. $x_2 = \tfrac12\left(3.1666667 + \tfrac{10}{3.1666667}\right) = \tfrac12(3.1666667 + 3.1578947) = 3.1622807$.
3. $x_3 = 3.16227766$. The true value is $3.16227766\ldots$, so 3 steps give 8 decimal places.

**2. $\sqrt{40}$ from 6** (compare level 5, where guess-and-check took several rounds for 2 decimal places).

1. $x_1 = \tfrac12\left(6 + \tfrac{40}{6}\right) = \tfrac12(6 + 6.6667) = 6.3333$.
2. $x_2 = \tfrac12\left(6.3333 + \tfrac{40}{6.3333}\right) = \tfrac12(6.3333 + 6.3158) = 6.3246$ (more precisely
   6.3245614).
3. True value $6.3245553\ldots$: two steps already give 4 decimal places.

**3. Using the error formula.** A guess for $\sqrt2$ has error 0.01. About how big is the error after one step?

$\dfrac{0.01^2}{2 \times 1.414} = \dfrac{0.0001}{2.828} \approx 0.000035$. One step turned an error of a hundredth into
one of about three hundred-thousandths.

**4. Fractions that approximate $\sqrt2$.** The method, started at 1, gives $\tfrac32, \tfrac{17}{12},
\tfrac{577}{408}, \ldots$ Check how close $\tfrac{17}{12}$ is by squaring: $\tfrac{289}{144}$, and
$2 = \tfrac{288}{144}$. So $\left(\tfrac{17}{12}\right)^2$ is only $\tfrac{1}{144}$ more than 2. In the same way
$577^2 = 332\,929$ and $2 \times 408^2 = 332\,928$: they differ by exactly 1. These fractions are excellent rational
approximations to an irrational number.

**5. A cube root: $\sqrt[3]{10}$ from 2.**

1. $x_1 = \tfrac13\left(2 \times 2 + \tfrac{10}{4}\right) = \tfrac13(4 + 2.5) = 2.1666667$.
2. $x_2 = \tfrac13\left(2 \times 2.1666667 + \tfrac{10}{2.1666667^2}\right) = \tfrac13(4.3333333 + 2.1301775) =
   2.1545036$.
3. $x_3 = 2.1544347$. The true value is $2.15443469\ldots$ Check: $2.1544347^3 \approx 10.0000$. ✓

## Try it

1. Do two steps of the method for $\sqrt3$, starting at 2. Compare with $\sqrt3 = 1.7320508\ldots$
2. Do three steps for $\sqrt5$, starting at 2.
3. For $a = 2$ and $x = 1.5$, check that $x$ is too big and $\tfrac{2}{x}$ is too small by squaring both.
4. Use the method to find $\sqrt{0.5}$, starting at 1, for three steps.
5. A guess for $\sqrt{10}$ has error 0.001. Use the error formula to estimate the error after one more step.
6. Starting $\sqrt2$ at 100, the first guesses are 50.01, 25.02, 12.55. Explain why each is about half the one before.
7. Show, using the formula $\tfrac{(x - \sqrt a)^2}{2x}$, that if a guess is **exactly** $\sqrt a$, the method leaves
   it unchanged.
8. Starting at $\tfrac{17}{12}$, work out the next approximation to $\sqrt2$ as a fraction. Then check that the top
   squared minus 2 times the bottom squared equals 1.

??? note "Answers"
    1. $x_1 = \tfrac12\left(2 + \tfrac32\right) = 1.75$. $x_2 = \tfrac12\left(1.75 + \tfrac{3}{1.75}\right) =
       \tfrac12(1.75 + 1.7142857) = 1.7321429$. That is off by only about $0.00009$.
    2. $x_1 = \tfrac12(2 + 2.5) = 2.25$. $x_2 = \tfrac12\left(2.25 + \tfrac{5}{2.25}\right) = \tfrac12(2.25 + 2.2222222)
       = 2.2361111$. $x_3 = \tfrac12\left(2.2361111 + \tfrac{5}{2.2361111}\right) = 2.2360680$. The true value is
       $2.2360680\ldots$
    3. $1.5^2 = 2.25 > 2$, too big. $\tfrac{2}{1.5} = 1.3333\ldots$ and $1.3333^2 \approx 1.78 < 2$, too small.
    4. $x_1 = \tfrac12(1 + 0.5) = 0.75$. $x_2 = \tfrac12\left(0.75 + \tfrac{0.5}{0.75}\right) = \tfrac12(0.75 +
       0.6666667) = 0.7083333$. $x_3 = \tfrac12\left(0.7083333 + \tfrac{0.5}{0.7083333}\right) = 0.7071078$. True
       value $0.7071068\ldots$ (which is $\tfrac{\sqrt2}{2}$).
    5. $\dfrac{0.001^2}{2 \times 3.162} = \dfrac{0.000001}{6.32} \approx 0.00000016$.
    6. When $x$ is big, $\tfrac{2}{x}$ is tiny (for $x = 100$ it is 0.02). So the average $\tfrac12\left(x +
       \tfrac2x\right)$ is just a little more than $\tfrac12 x$: about half of $x$.
    7. If $x = \sqrt a$, the new error is $\dfrac{(\sqrt a - \sqrt a)^2}{2\sqrt a} = \dfrac{0}{2\sqrt a} = 0$. So the
       new guess is exactly $\sqrt a$ again: the true root is a fixed point of the method.
    8. $\tfrac{2}{17/12} = \tfrac{24}{17}$. The average of $\tfrac{17}{12}$ and $\tfrac{24}{17}$ is
       $\tfrac12 \times \tfrac{17 \times 17 + 24 \times 12}{12 \times 17} = \tfrac12 \times \tfrac{289 + 288}{204}
       = \tfrac{577}{408}$. Check: $577^2 = 332\,929$ and $2 \times 408^2 = 2 \times 166\,464 = 332\,928$. The
       difference is 1. ✓

## Common mistake

**Averaging the guess with $a$ instead of with $\tfrac{a}{x}$.** For $\sqrt2$ from $1.5$, the next guess is the
average of 1.5 and $\tfrac{2}{1.5}$, not of 1.5 and 2. Always divide first, then average.

**Rounding too much between steps.** If you round each guess to 2 decimal places, you can never get more than about 2
decimal places right, however many steps you do. Keep at least as many digits as you hope to get correct (the
previous lesson's rule: do not round early).

## Where it leads

- Back: [Estimation and precision](06-estimation-precision.md) · Next: [Level 7: building number systems](../level-7/index.md)
- [Level 6 page](index.md) · [Numbers topic page](../index.md)
- A rule that makes each term from the one before is a **recursive sequence**: [Patterns](../../patterns/index.md).
- Newton's method for solving any equation uses slopes of curves: [Change](../../change/index.md).
- Recursive sequences, and when their limits exist, at U of T: [MAT137 Unit 11 (sequences)](../../../uoft/MAT137/unit11.md).
- How computers really compute square roots and why their answers are rounded: [CSC108 Unit 10](../../../uoft/CSC108H1/unit10.md).
