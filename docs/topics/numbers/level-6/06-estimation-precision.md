---
title: "Estimation and precision"
---

# Estimation and precision

*Numbers · level 6, lesson 6 of 7*

## A question to start

$\sqrt2$ is about 1.4. That is a perfectly good estimate: it is off by only about 0.014, less than 1%. Now raise both
to the power 10. $(\sqrt2)^{10} = 2^5 = 32$ exactly. And $1.4^{10}$?

It is about **28.9**. A tiny error of 1% has grown into an error of about 10%. Nothing went wrong with the arithmetic;
the error was there from the start, and the calculation magnified it.

Irrational numbers can only ever be written approximately as decimals, so every real calculation with them involves
rounding. This lesson is about doing that well: how to round, how big the error can be, how to measure it, and when
an early rounding can quietly ruin an answer.

## The idea

### Rounding and truncating

There are two common ways to shorten a long decimal.

**Rounding** keeps the nearest value. To round to 3 decimal places, look at the 4th decimal: if it is 5 or more, round
up; otherwise keep the 3rd decimal as it is.

**Truncating** (also called **chopping**) simply cuts off the extra digits, without looking at them.

| number | rounded to 3 d.p. | truncated to 3 d.p. |
| --- | --- | --- |
| $\pi = 3.14159\ldots$ | 3.142 | 3.141 |
| $\tfrac23 = 0.66666\ldots$ | 0.667 | 0.666 |
| $\sqrt2 = 1.41421\ldots$ | 1.414 | 1.414 |

Sometimes they agree (when the next digit is less than 5), sometimes not. Rounding is usually closer. Truncating is
simpler, and it is what you do whenever you say your age in whole years: on the day before your 13th birthday you say
12, not 13.

Recall from level 5 that you can also round to a number of **significant figures**: the meaningful digits counted
from the first non-zero one. $0.004\,718$ to 2 significant figures is $0.0047$.

### Absolute value: distance from zero

To talk about the size of an error, we need a way to say "how far apart" without caring which number is bigger.

The **absolute value** of a number is its distance from 0 on the number line. It is written with two upright bars:

$$|5| = 5 \qquad |-5| = 5 \qquad |0| = 0$$

A distance is never negative, so the absolute value is never negative. For a positive number or zero it changes
nothing; for a negative number it removes the minus sign.

More useful still: $|a - b|$ is the **distance between** $a$ and $b$ on the number line. For example the distance
between $-4$ and $5$ is $|5 - (-4)| = |9| = 9$, and it does not matter which way round you subtract:
$|-4 - 5| = |-9| = 9$ too.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 130" role="img" aria-label="A number line from minus 5 to 6; a bracket from minus 4 to 0 is labelled absolute value of minus 4 equals 4, a bracket from 0 to 5 is labelled absolute value of 5 equals 5, and a long bracket below from minus 4 to 5 is labelled the distance 9">
  <line x1="20" y1="70" x2="400" y2="70" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="2">
    <line x1="30" y1="64" x2="30" y2="76"/><line x1="62" y1="64" x2="62" y2="76"/><line x1="94" y1="64" x2="94" y2="76"/>
    <line x1="126" y1="64" x2="126" y2="76"/><line x1="158" y1="64" x2="158" y2="76"/><line x1="190" y1="62" x2="190" y2="78"/>
    <line x1="222" y1="64" x2="222" y2="76"/><line x1="254" y1="64" x2="254" y2="76"/><line x1="286" y1="64" x2="286" y2="76"/>
    <line x1="318" y1="64" x2="318" y2="76"/><line x1="350" y1="64" x2="350" y2="76"/><line x1="382" y1="64" x2="382" y2="76"/>
  </g>
  <g font-size="11" text-anchor="middle" fill="currentColor">
    <text x="62" y="92">−4</text><text x="190" y="92">0</text><text x="350" y="92">5</text>
  </g>
  <path d="M 62 55 L 62 45 L 190 45 L 190 55" fill="none" stroke="#eea66f" stroke-width="3"/>
  <path d="M 190 55 L 190 45 L 350 45 L 350 55" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <text x="126" y="36">|−4| = 4</text><text x="270" y="36">|5| = 5</text>
  </g>
  <path d="M 62 98 L 62 108 L 350 108 L 350 98" fill="none" stroke="#7ccf9a" stroke-width="3"/>
  <text x="206" y="125" font-size="12" text-anchor="middle" fill="currentColor">distance |5 − (−4)| = 9</text>
</svg>
</div>

### Measuring an error

If $a$ is an approximation to a true value $x$, the **absolute error** is the distance between them:

$$\text{error} = |a - x|$$

For $\pi \approx 3.14$, the error is $|3.14 - 3.14159\ldots| \approx 0.0016$. For $\pi \approx \tfrac{22}{7}$, it is
$|3.142857\ldots - 3.141592\ldots| \approx 0.0013$. So $\tfrac{22}{7}$ is the slightly better estimate.

Sometimes the **relative error**, the error as a fraction (or percent) of the true value, matters more. An error of
1 cm is tiny when measuring a football field, and huge when measuring a fingernail.

### How big can a rounding error be?

When you round to 3 decimal places, the true value is never further than **half a unit in the last place** from the
rounded value: at most $0.0005$. Why? The rounded values are spaced $0.001$ apart, and rounding picks the nearest one,
so you are never more than halfway to the next.

When you **truncate** to 3 decimal places, the error can be almost a whole unit, up to (but not including) $0.001$,
and it always goes the same way (the truncated value is never too big, for positive numbers).

This also works backwards. If a length is given as **7.4 cm**, rounded to 1 decimal place, the true length could be
anything from 7.35 cm up to (but not including) 7.45 cm. A measured number carries a hidden "give or take".

### The danger of rounding early

Errors do not stay put. They travel through a calculation, and some steps make them much bigger.

**Powers magnify errors.** That was the question at the start: a 1% error in $\sqrt2$ became about a 10% error in
$(\sqrt2)^{10}$, because each multiplication by the slightly-too-small 1.4 made things slightly smaller again, ten
times over.

**Subtracting nearly equal numbers** is even worse. $\sqrt{1001} - \sqrt{1000}$ is about $0.015807$. But round each
root to 2 decimal places first, and you get $31.64 - 31.62 = 0.02$. Each root was rounded with a tiny error (less
than $0.005$ in more than 31), yet the answer is about 27% too big, because almost all of each number cancelled and
the error was all that was left.

The rule that follows: **keep full precision (or exact forms like $\sqrt2$) until the end, and round only once, at the
end.** On a calculator, use its memory or the "Ans" key instead of retyping rounded values.

(A clever escape for that subtraction: the conjugate trick from [lesson 4](04-radicals.md) gives
$\sqrt{1001} - \sqrt{1000} = \dfrac{1}{\sqrt{1001} + \sqrt{1000}}$, which has no cancellation and gives
$\tfrac{1}{63.26} \approx 0.01581$ even with rounded roots.)

### What a calculator shows you

A calculator shows about 10 digits, and it **rounds** (or on some models truncates) the last one. $\tfrac23$ often
shows as `0.6666666667`, the last 7 being a rounded 6. Inside, the calculator keeps a few more digits than it shows,
which is why $\tfrac23 \times 3$ still comes out as exactly 2.

Computers have the same limits. In the Python programming language, `0.1 + 0.2` gives `0.30000000000000004`, and
`sqrt(2)**2` gives `2.0000000000000004`, because the computer stores numbers in binary with a fixed number of digits,
and neither 0.1 nor $\sqrt2$ can be stored exactly. A calculator or computer gives you an **approximation** to a real
number, almost never the number itself.

## Worked examples

**1. Rounding versus truncating.** Round and truncate $e = 2.71828\ldots$ to 2 decimal places, and find each error.

1. Rounded: the 3rd decimal is 8, so round up: $2.72$. Error $|2.72 - 2.71828| = 0.00172$.
2. Truncated: $2.71$. Error $|2.71 - 2.71828| = 0.00828$.
3. Rounding is about 5 times closer here.

**2. Absolute values and distances.** Work out $|-7|$, $|3 - 10|$, and the distance between $-2.5$ and $4$.

1. $|-7| = 7$.
2. $|3 - 10| = |-7| = 7$: 3 and 10 are 7 apart.
3. $|4 - (-2.5)| = |6.5| = 6.5$.

**3. Martian days, truncated.** A Martian day, called a **sol**, lasts about 24 hours 39 minutes 35 seconds, that
is, about 24.6597 hours. A Mars year is about 668.6 sols. Suppose someone truncated a sol to 24 hours. How far off
would their clock be after one Mars year?

1. Error per sol: $24.6597 - 24 = 0.6597$ hours, about 39.6 minutes.
2. Over $668.6$ sols the error adds up: $668.6 \times 0.6597 \approx 441$ hours.
3. That is $441 \div 24 \approx 18.4$ Earth days. A truncation error that is small each day, always in the same
   direction, adds up. (Teams on Earth who work on "Mars time" for a rover mission really do have to shift their
   schedule by about 40 minutes every day.)

**4. Rounding early.** A circle has radius 9.87 m. Find its area, first exactly with the full radius, then with the
radius rounded to 10 m.

1. Full: $\pi \times 9.87^2 \approx \pi \times 97.4169 \approx 306.0$ m².
2. Rounded early: $\pi \times 10^2 \approx 314.2$ m².
3. A radius error of about 1.3% gave an area error of about 8.1 m², about 2.7%. Squaring roughly doubled the
   relative error.

**5. Bounds from rounding.** A square's side is 7.4 cm, to 1 decimal place. Between what values does its perimeter
lie?

1. The side lies from 7.35 up to (but not including) 7.45 cm.
2. The perimeter, $4 \times$ side, lies from $4 \times 7.35 = 29.4$ cm up to (but not including)
   $4 \times 7.45 = 29.8$ cm.
3. So "29.6 cm" (from $4 \times 7.4$) is right only to within about 0.2 cm.

## Try it

1. Round $2.71828$ to 3 significant figures, and truncate it to 1 decimal place.
2. Work out: (a) $|-12|$ (b) $|4.5|$ (c) $|0|$ (d) $|3 - 8|$ (e) $|-3 - 8|$
3. What is the distance between $-7$ and $-2$ on the number line? Write it with absolute value.
4. Which is a better estimate of $\sqrt3 = 1.7320508\ldots$: 1.73 or $\tfrac74$? Find both errors.
5. A length is 12 cm, rounded to the nearest whole centimetre. What are the smallest and largest values it could
   really be?
6. Find all numbers $x$ with $|x - 3| = 2$. Then describe all numbers $x$ with $|x| < 4$.
7. Work out $1.41^{10}$ on a calculator and compare it with $(\sqrt2)^{10} = 32$. Is the error bigger or smaller than
   with 1.4?
8. A calculator shows $\tfrac23$ as `0.6666666667`. Is that rounded or truncated? What would the other method show?

??? note "Answers"
    1. 3 significant figures: $2.72$. Truncated to 1 d.p.: $2.7$.
    2. (a) 12 (b) 4.5 (c) 0 (d) $|-5| = 5$ (e) $|-11| = 11$
    3. $|-2 - (-7)| = |5| = 5$.
    4. $|1.73 - 1.7320508| \approx 0.0021$. $\tfrac74 = 1.75$, so $|1.75 - 1.7320508| \approx 0.0179$. **1.73** is
       better, by a lot.
    5. From 11.5 cm up to (but not including) 12.5 cm.
    6. $|x - 3| = 2$ means "$x$ is 2 away from 3", so $x = 1$ or $x = 5$. $|x| < 4$ means "less than 4 away from 0":
       all numbers strictly between $-4$ and $4$.
    7. $1.41^{10} \approx 31.06$, an error of about 0.94, about 3%. That is much smaller than the error with 1.4
       (about $32 - 28.93 = 3.07$), because 1.41 is a much better estimate of $\sqrt2$.
    8. **Rounded**: the true digits are all 6, and the last one has been rounded up to 7. Truncated would show
       `0.6666666666`.

## Common mistake

**Thinking $|a - b|$ means $|a| - |b|$.** $|3 - 8| = 5$, but $|3| - |8| = -5$. The bars go round the whole
difference: first subtract, then take the distance from zero.

**Rounding in the middle of a calculation.** Each rounded value carries an error, and later steps (powers,
subtraction of close numbers) can magnify it. Keep exact values or full calculator precision, and round once at the
end.

## Where it leads

- Back: [The real numbers](05-real-numbers.md) · Next: [Approximating roots](07-approximating-roots.md), a fast way
  to make the error tiny.
- [Level 6 page](index.md) · [Numbers topic page](../index.md)
- Measurement error and bounds: [Measurement](../../measurement/index.md). Spread and uncertainty in data:
  [Statistics](../../statistics/index.md).
- Absolute value inequalities like $|x - 3| < 2$ are solved fully in [level 7](../level-7/index.md).
- How computers store and round numbers: [CSC108 Unit 10 (floating point)](../../../uoft/CSC108H1/unit10.md).
  The idea "within a small distance" is the heart of limits: [MAT137 Unit 2](../../../uoft/MAT137/unit02.md).
