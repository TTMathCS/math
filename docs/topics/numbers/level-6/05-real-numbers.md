---
title: "The real numbers"
---

# The real numbers

*Numbers · level 6, lesson 5 of 7*

## A question to start

Add two even numbers and you always get an even number. Add two rational numbers and you always get a rational number
(level 5). So here is a natural guess: **add two irrational numbers and you always get an irrational number**.

Is that true? Before reading on, try to think of two irrational numbers whose sum is a perfectly ordinary number like
0 or 2. (There is a very simple answer.) This lesson puts all the families of numbers you know into one picture, and
asks which calculations keep you inside each family.

## The idea

### The families of numbers

Over the levels you have met several families of numbers. Each one was needed because the one before could not answer
some question.

- **Natural numbers**, for counting: $1, 2, 3, 4, \ldots$ Mathematicians write $\mathbb{N}$. (Some books start the
  natural numbers at 0. Here we start at 1, and call the family with 0 the whole numbers.)
- **Whole numbers**: $0, 1, 2, 3, \ldots$ the natural numbers with 0 added, for "none at all".
- **Integers** $\mathbb{Z}$: $\ldots, -2, -1, 0, 1, 2, \ldots$ Needed because $3 - 5$ has no answer among the whole
  numbers. ($\mathbb{Z}$ is from the German *Zahlen*, numbers.)
- **Rational numbers** $\mathbb{Q}$: every fraction $\tfrac{p}{q}$ of integers with $q \ne 0$. Needed because
  $3 \div 5$ has no answer among the integers.
- **Irrational numbers**: numbers on the line that are not rational, like $\sqrt2$ and $\pi$. Needed because
  $\sqrt2$, the side of a square of area 2, has no answer among the rationals (lesson 3).
- **Real numbers** $\mathbb{R}$: all the rational and irrational numbers together.

### Nested families

Each family sits inside the next one: every natural number is a whole number, every whole number is an integer, every
integer is rational ($-5 = \tfrac{-5}{1}$). The rationals and the irrationals are the two halves of the real numbers:
every real number is one or the other, never both.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 230" role="img" aria-label="Nested boxes: natural numbers inside whole numbers inside integers inside rational numbers; the rational numbers and the irrational numbers sit side by side inside the real numbers">
  <rect x="10" y="10" width="420" height="210" rx="14" fill="none" stroke="currentColor" stroke-width="2"/>
  <rect x="20" y="36" width="270" height="176" rx="12" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5"/>
  <rect x="30" y="62" width="200" height="142" rx="10" fill="#9cc9ea" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/>
  <rect x="40" y="88" width="140" height="108" rx="8" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <rect x="50" y="114" width="80" height="74" rx="6" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="300" y="36" width="122" height="176" rx="12" fill="#eea66f" fill-opacity="0.4" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="12" fill="currentColor">
    <text x="20" y="27">real numbers ℝ</text>
    <text x="28" y="53">rational ℚ: 3/4, −0.2, 0.333...</text>
    <text x="38" y="79">integers ℤ: −5, −1</text>
    <text x="48" y="105">whole: 0</text>
    <text x="58" y="131">natural ℕ</text>
    <text x="62" y="160">1, 2, 3</text>
    <text x="310" y="53">irrational</text>
    <text x="320" y="100">√2</text>
    <text x="350" y="130">π</text>
    <text x="315" y="160">1 + √3</text>
    <text x="320" y="190">0.1010010...</text>
  </g>
</svg>
</div>

To describe a number fully, name **every** family it belongs to. The number 7 is natural, whole, an integer, rational
and real. The number $-\tfrac34$ is rational and real, but not an integer.

### The real number line

Here is the big idea of this level. **Every point on the number line is a real number, and every real number is a
point on the number line.** The rationals alone leave holes (lesson 2); the irrationals fill them exactly.

You can also think of real numbers as decimals. Every real number has a decimal expansion, possibly going on forever:
the rationals are the ones that stop or repeat, and the irrationals are all the rest. And every infinite decimal, even
one with digits chosen completely at random, names exactly one real number.

The fact that the real line has **no holes** is called **completeness**. It is what lets us say that $\sqrt2$ exists
at all: the numbers $1.4, 1.41, 1.414, 1.4142, \ldots$ close in on one exact point, and completeness says that point
is there to be found. Making this precise is one of the first jobs of a university analysis course.

### Closure

A family is **closed** under an operation if doing that operation to any two members always gives another member.
Here is the full table (division never includes dividing by 0):

| family | $+$ | $-$ | $\times$ | $\div$ |
| --- | --- | --- | --- | --- |
| natural numbers | closed | **not**: $3 - 5$ | closed | **not**: $1 \div 2$ |
| whole numbers | closed | **not**: $3 - 5$ | closed | **not**: $1 \div 2$ |
| integers | closed | closed | closed | **not**: $1 \div 2$ |
| rational numbers | closed | closed | closed | closed |
| real numbers | closed | closed | closed | closed |
| irrational numbers | **not** | **not** | **not** | **not** |

Read the table as the story of the families: each new family closes a gap left by the one before. The rationals are
already closed under all four operations; what they are missing is **square roots** (and, more deeply, the holes).

### The irrationals are not closed under anything

Now the question at the start. Is the sum of two irrationals always irrational? **No.** Take $\sqrt2$ and $-\sqrt2$.
Both are irrational ($-\sqrt2$ is $-1$ times $\sqrt2$, a non-zero rational times an irrational, lesson 2). But

$$\sqrt2 + (-\sqrt2) = 0$$

which is rational. One example like this, which shows a general claim is false, is called a **counterexample**. One
counterexample is enough to destroy an "always" claim, however many examples seemed to support it.

The other operations fail in the same way:

- difference: $\sqrt2 - \sqrt2 = 0$;
- product: $\sqrt2 \times \sqrt2 = 2$;
- quotient: $\sqrt2 \div \sqrt2 = 1$.

Less obvious counterexamples: $(1 + \sqrt2) + (1 - \sqrt2) = 2$, and $\sqrt2 \times \sqrt8 = \sqrt{16} = 4$.

But "not always irrational" does not mean "always rational". $\sqrt2 + \sqrt3$ and $\sqrt2 \times \sqrt3 = \sqrt6$
are irrational (see the worked examples). You must check each case.

### What the real numbers still cannot do

The real numbers are closed under $+$, $-$, $\times$, $\div$, and every **non-negative** real number has a real
square root. But **negative** numbers have no real square root: any real number squared is 0 or positive. The equation
$x^2 = -1$ has no real solution. That gap is closed in [level 7](../level-7/index.md), with one more family: the
complex numbers.

## Worked examples

**1. Families.** Name every family each number belongs to: $-7$, $0$, $12$, $\tfrac35$, $\sqrt9$, $\sqrt{10}$,
$\tfrac{\pi}{2}$.

1. $-7$: integer, rational, real.
2. $0$: whole, integer, rational, real (not natural, by our convention).
3. $12$: natural, whole, integer, rational, real.
4. $\tfrac35$: rational, real.
5. $\sqrt9 = 3$: natural, whole, integer, rational, real. (Do the root first!)
6. $\sqrt{10}$: irrational, real.
7. $\tfrac{\pi}{2}$: irrational (a non-zero rational, $\tfrac12$, times an irrational), real.

**2. A counterexample for products.** Is the product of two irrational numbers always irrational?

No: $\sqrt2 \times \sqrt8 = \sqrt{16} = 4$, which is rational, and both $\sqrt2$ and $\sqrt8 = 2\sqrt2$ are irrational.

**3. Prove that $\sqrt2 + \sqrt3$ is irrational.**

1. Suppose $\sqrt2 + \sqrt3 = r$, a rational number.
2. Square both sides: $2 + 2\sqrt6 + 3 = r^2$, so $2\sqrt6 = r^2 - 5$ and $\sqrt6 = \dfrac{r^2 - 5}{2}$.
3. The right side is rational (rationals are closed under $\times$, $-$, $\div$). So $\sqrt6$ would be rational.
4. But $\sqrt6$ is irrational (lesson 3, worked example 3). Contradiction. So $\sqrt2 + \sqrt3$ is irrational.

**4. Closure of whole numbers.** Are the whole numbers closed under subtraction?

No. $3 - 5 = -2$, which is not a whole number. One counterexample settles it.

**5. Are the integers closed under squaring?** Yes: an integer times itself is an integer, since the integers are
closed under multiplication. Are the rationals closed under square roots? No: $2$ is rational, but $\sqrt2$ is not.

## Try it

1. Name every family each belongs to: (a) $5$ (b) $-5$ (c) $2.5$ (d) $\sqrt{25}$ (e) $\sqrt{26}$ (f) $-\sqrt4$
   (g) $0.\overline{142857}$
2. True or false? Give a reason or a counterexample. (a) Every integer is rational. (b) Every rational number is an
   integer. (c) Some real numbers are both rational and irrational. (d) No irrational number is an integer.
3. Are the natural numbers closed under multiplication? Under division? Are the integers closed under subtraction?
4. Find two irrational numbers, neither of them $\pm\sqrt2$, whose sum is rational.
5. Find two irrational numbers whose quotient is rational.
6. For which rational numbers $r$ is $r\sqrt2$ rational?
7. Is $(\sqrt2 + 1)(\sqrt2 - 1)$ rational or irrational?
8. Prove that $\sqrt3 - \sqrt2$ is irrational. (Hint: multiply it by $\sqrt3 + \sqrt2$, and use worked example 3.)

??? note "Answers"
    1. (a) Natural, whole, integer, rational, real. (b) Integer, rational, real. (c) Rational, real
       ($2.5 = \tfrac52$). (d) $= 5$: natural, whole, integer, rational, real. (e) Irrational, real. (f) $= -2$:
       integer, rational, real. (g) $= \tfrac17$: rational, real.
    2. (a) True: $n = \tfrac{n}{1}$. (b) False: $\tfrac12$ is rational but not an integer. (c) False: irrational
       means "not rational", so no number is both. (d) True: every integer is rational, so it cannot be irrational.
    3. Natural numbers: closed under multiplication (a product of counting numbers is a counting number), not closed
       under division ($1 \div 2$). Integers: closed under subtraction.
    4. For example $(1 + \sqrt3) + (1 - \sqrt3) = 2$, or $\pi + (5 - \pi) = 5$. (Both of each pair are irrational,
       by lesson 2.)
    5. For example $\dfrac{\sqrt8}{\sqrt2} = \sqrt4 = 2$, or $\dfrac{2\pi}{\pi} = 2$.
    6. Only $r = 0$, giving $0\sqrt2 = 0$. For any non-zero rational $r$, $r\sqrt2$ is irrational (lesson 2).
    7. Conjugates: $(\sqrt2)^2 - 1^2 = 2 - 1 = 1$. **Rational**.
    8. $(\sqrt3 - \sqrt2)(\sqrt3 + \sqrt2) = 3 - 2 = 1$, so $\sqrt3 - \sqrt2 = \dfrac{1}{\sqrt3 + \sqrt2}$. If
       $\sqrt3 - \sqrt2$ were rational (and it is not 0), its reciprocal $\sqrt3 + \sqrt2$ would be rational too.
       But worked example 3 shows $\sqrt2 + \sqrt3$ is irrational. Contradiction. So $\sqrt3 - \sqrt2$ is irrational.

## Common mistake

**Thinking a few examples prove an "always" statement.** $\sqrt2 + \sqrt3$, $\sqrt2 + \pi$ and $\sqrt5 + \sqrt7$ are
all irrational, but that does not make "irrational + irrational is irrational" true. A single counterexample,
$\sqrt2 + (-\sqrt2) = 0$, shows it is false.

**Forgetting that a number belongs to several families.** "Is 3 an integer or a rational number?" Both! The families
are nested, not separate boxes side by side (except rational and irrational, which really are separate).

## Where it leads

- Back: [Radicals](04-radicals.md) · Next: [Estimation and precision](06-estimation-precision.md)
- [Level 6 page](index.md) · [Numbers topic page](../index.md)
- Sets, subsets and "for all" versus "there exists": [Logic](../../logic/index.md).
- How many real numbers are there compared with rational ones? [Infinity](../../infinity/index.md).
- The next and last family, the complex numbers, where $x^2 = -1$ has a solution: [level 7](../level-7/index.md).
- Completeness (the real line has no holes), stated exactly: [MAT158 Unit 2 (real numbers and least upper bounds)](../../../uoft/MAT158H1/unit02.md).
