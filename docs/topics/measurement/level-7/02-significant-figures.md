---
title: "Significant figures"
---

# Significant figures

*Measurement · level 7, lesson 2 of 6*

## A question to start

A recipe says "add 3 m of ribbon". A physics lab says "the track is 3.00 m long". Are they saying the same thing?

As numbers, $3 = 3.00$. As **measurements**, they are very different. "3 m" from a recipe might be anything from
2.5 m to 3.5 m. "3.00 m" in a lab means somebody measured to the nearest centimetre: between 2.995 m and 3.005 m. The
extra zeros are not decoration. They are a promise about how carefully the length was measured.

Now a puzzle. A garden bed is measured as 4.2 m by 3.15 m. A calculator says the area is 13.23 m². Is that answer
honest? By the end of this lesson you can prove that it is not, and say what to write instead.

## The idea

### Digits that carry information

In the last lesson a measurement was written with its error: $12.3 \pm 0.05$ cm. Writing the "$\pm$" every time is
tiring, so scientists use a shortcut: **write only the digits you are sure of, plus the last one, which is the
rounded one, and stop.** The reader then knows the error is half a unit in the last place written.

The digits that carry this information are the **significant figures** (sig figs, or significant digits).

- $12.3$ cm has 3 significant figures. The last one sits in the tenths place, so the precision is 0.1 cm and the
  error is $\pm 0.05$ cm.
- $3.00$ m has 3 significant figures. The last one is in the hundredths place: $\pm 0.005$ m.
- $3$ m has 1 significant figure: $\pm 0.5$ m.

So **3.0 m and 3 m say different things.** "3.0 m" says "between 2.95 and 3.05". "3 m" says only "between 2.5 and 3.5".
One zero made the promise ten times more precise.

### Which digits count

Counting significant figures is about zeros. Every non-zero digit counts. A zero counts only when it tells you
something about the measurement, not when it only holds a place.

1. **Non-zero digits always count.** $472$ has 3.
2. **Zeros between non-zero digits count.** $4.07$ has 3, $30\,005$ has 5. (They were measured: the 0 says "zero
   tenths", not "unknown".)
3. **Leading zeros never count.** $0.0045$ has 2. The zeros only place the decimal point. Change the unit and they
   vanish: $0.0045$ m $= 4.5$ mm, still 2 figures. A change of unit cannot change how precise a measurement is, so
   these zeros cannot be significant.
4. **Trailing zeros after a decimal point count.** $4.50$ has 3, $2.000$ has 4. Nobody is forced to write them, so
   writing them is a claim of precision.
5. **Trailing zeros in a whole number are ambiguous.** Is $4500$ m measured to the nearest metre (4 figures), ten
   metres (3) or hundred metres (2)? The number alone cannot tell you.

### Scientific notation removes the doubt

In scientific notation (from [Numbers](../../numbers/level-5/05-scientific-notation.md)), you write a number between
1 and 10 times a power of ten. Every digit written in the first part is significant, so the ambiguity disappears:

| Written | Sig figs | Means |
| --- | --- | --- |
| $4.5 \times 10^3$ m | 2 | to the nearest 100 m |
| $4.50 \times 10^3$ m | 3 | to the nearest 10 m |
| $4.500 \times 10^3$ m | 4 | to the nearest 1 m |

The power of ten carries the size; the digits carry the precision. Mars's mean radius is often given as
$3.3895 \times 10^3$ km (5 figures); Earth's as $6.371 \times 10^3$ km (4 figures).

### Exact numbers have no limit

Counted numbers (28 students, 4 wheels) and defined numbers (1 m = 100 cm, 1 inch = 2.54 cm exactly, the 2 in
"diameter = 2 × radius", the $\tfrac43$ in the sphere formula) are **exact**. Think of them as having infinitely many
significant figures. They never limit the precision of an answer. Neither does $\pi$, as long as you use enough of
its digits.

### Rounding a calculated answer: multiplying and dividing

Back to the garden bed: 4.2 m by 3.15 m. Use the bounds from the last lesson.

- 4.2 m (2 figures) means $4.15 \le L < 4.25$.
- 3.15 m (3 figures) means $3.145 \le W < 3.155$.

Smallest area: $4.15 \times 3.145 \approx 13.05$ m². Largest: $4.25 \times 3.155 \approx 13.41$ m².

So the true area is somewhere from about 13.05 to 13.41 m². Look at what that means for each digit of "13.23":

- The **1** and the **3** are certain (every value in the range starts "13").
- The **.2** is not: the true value could be 13.1, 13.2, 13.3 or 13.4 to one decimal place.
- The **3** in the hundredths place is pure noise.

The honest answer is **13 m²** (2 figures, matching the 4.2). Writing 13.23 m² would claim the area is known to
$\pm 0.005$ m², when really it is only known to about $\pm 0.2$ m².

This is the general rule, and the reason behind it:

**When multiplying or dividing, give the answer to the same number of significant figures as the least precise
measurement.**

The reason: in a product, each factor's **relative** (percent) error passes into the answer (you will see this
carefully in [the next lesson](03-errors-that-grow.md)). The number of significant figures is a rough measure of
relative error: 2 figures means roughly 1 part in 10 to 100, 3 figures roughly 1 part in 100 to 1000. The weakest
measurement controls the relative error of the answer, so it controls the figures.

### Rounding a calculated answer: adding and subtracting

Adding works differently. A board is 12.3 cm long (to the nearest 0.1 cm) and you glue on a piece 4.567 cm long (to
the nearest 0.001 cm). The calculator says 16.867 cm.

The first length is only known to the nearest 0.1 cm: it could be anything from 12.25 to 12.35. That fuzz of
$\pm 0.05$ swamps the tiny fuzz of the second length. So the total is known only to about the nearest 0.1 cm:
**16.9 cm**.

**When adding or subtracting, give the answer to the same decimal place as the least precise measurement.**

Here it is the **place** (tenths, hundredths) that matters, not the count of figures, because in a sum the
**absolute** errors (the plus-or-minus amounts) add up.

Subtraction can destroy figures. $15.32 - 15.29 = 0.03$: two measurements with 4 figures each give an answer with
only 1. When two nearly equal measurements are subtracted, most of the digits cancel and the error stays. Scientists
try hard to avoid measuring a small thing as the difference of two big ones.

### Do not round in the middle

The rules are for the **final** answer. Keep all the calculator's digits (or at least two extra) through every middle
step, and round once at the end. Rounding at each step lets small errors pile up.

## Worked examples

**1. Counting figures.** How many significant figures: (a) 0.00450; (b) 207.0; (c) 30 400; (d) $3.04 \times 10^4$?

1. (a) Leading zeros do not count; the 4 and 5 do; the final 0 after the decimal point does: **3**.
2. (b) 2, the zero between, 7, and the zero after the decimal point: **4**.
3. (c) The 3, 0 and 4 count; the last two zeros are ambiguous. It has **3, 4 or 5**; you cannot tell.
4. (d) **3**: the scientific notation removes the doubt.

**2. Rounding to significant figures.** Round 0.0047862 to 3 figures, and 2 486 500 to 2 figures.

1. The first significant figure of 0.0047862 is the 4. Keep 4, 7, 8; the next digit is 6, so round up: **0.00479**.
2. For 2 486 500: keep 2, 4; the next digit is 8, so round up to **2 500 000**, better written $2.5 \times 10^6$ so the
   reader knows the zeros are not measured.

**3. A density.** A stone has mass 54.0 g and volume 8.7 cm³. Find its density (mass ÷ volume).

1. $54.0 \div 8.7 = 6.2068\ldots$ g/cm³.
2. 54.0 has 3 figures, 8.7 has 2. Division: keep 2. Density $\approx$ **6.2 g/cm³**.

**4. The density of Mars.** Mars has mass $6.42 \times 10^{23}$ kg and mean radius $3.39 \times 10^6$ m. Find its
average density.

1. Volume: $\tfrac43 \pi r^3 = \tfrac43 \pi (3.39 \times 10^6)^3 \approx 1.6319 \times 10^{20}$ m³ (keep extra digits;
   $\tfrac43$ and $\pi$ are exact).
2. Density: $6.42 \times 10^{23} \div 1.6319 \times 10^{20} \approx 3934$ kg/m³.
3. Both data have 3 figures: **$3.93 \times 10^3$ kg/m³**, about 3.9 times as dense as water and less dense than
   Earth (about $5.51 \times 10^3$ kg/m³).

**5. A mixed sum.** Add 125.4 m, 8.25 m and 0.163 m.

1. Calculator: 133.813 m.
2. The least precise place is tenths (125.4). Answer: **133.8 m**.

## Try it

1. How many significant figures: (a) 0.0602; (b) 7.10; (c) 1000.; (d) $6.0 \times 10^{-3}$?
2. Round 9.8696 to 3 significant figures, and 0.000 312 49 to 2.
3. Write 52 000 km to show that it is measured to the nearest 100 km.
4. A rectangle measures 5.8 cm by 1.5 cm. Give the area to the right number of figures. Then check with the bounds
   that the last figure you kept is uncertain but meaningful.
5. A runner covers 400.0 m in 52.3 s. Find the average speed.
6. Find $12.52 + 3.1 + 0.874$, and $48.7 - 48.62$, each to the right precision.
7. The circumference of a wheel is $2\pi r$, with $r = 0.35$ m. How many figures should the answer have, and why
   does the "2" not limit it?
8. A student rounds every middle step to 2 figures: $1.24 \times 1.24 \to 1.5$, then $1.5 \times 1.24 \to 1.9$.
   Compute $1.24^3$ properly and round once at the end. What went wrong?

??? note "Answers"
    1. (a) **3** (6, 0, 2). (b) **3**. (c) **4**: the decimal point written after the zeros is a signal that they
       were measured (some books use this; scientific notation, $1.000 \times 10^3$, is clearer). (d) **2**.
    2. 9.8696 to 3 figures: **9.87**. 0.000 312 49 to 2 figures: **0.000 31**.
    3. $5.20 \times 10^4$ km (3 figures, the last in the hundreds place).
    4. $5.8 \times 1.5 = 8.7$ cm², 2 figures: **8.7 cm²**. Bounds: $5.75 \times 1.45 \approx 8.34$ and
       $5.85 \times 1.55 \approx 9.07$. The 8 is fairly safe and the 7 is uncertain (the truth lies between about 8.3
       and 9.1): that is exactly what a last significant figure is supposed to be.
    5. $400.0 \div 52.3 = 7.648\ldots$ m/s. 400.0 has 4 figures and 52.3 has 3, so **7.65 m/s**.
    6. $12.52 + 3.1 + 0.874 = 16.494$; the least precise place is tenths, so **16.5**. $48.7 - 48.62 = 0.08$; to
       tenths that is **0.1**, with only one figure left (and even that one is shaky). Subtraction ate the digits.
    7. $2\pi \times 0.35 = 2.199\ldots$ m, so **2.2 m** (2 figures, from 0.35). The 2 is exact (a diameter is
       exactly two radii), and $\pi$ is known to as many digits as we like, so neither limits the answer.
    8. $1.24^3 = 1.906\,624$, so **1.91** to 3 figures. Rounding the middle step to 1.5 threw away
       $1.5376 - 1.5 = 0.0376$, and that loss grew in the next multiplication, giving 1.9 when 1.91 was justified.
       Round only at the end.

## Common mistake

**Copying every digit from the calculator.** The calculator does not know how the numbers were measured. Writing
"the area is 13.23 m²" from 4.2 m and 3.15 m claims a precision about 35 times finer than the measurement has.

**Using the figures rule for a sum.** For adding and subtracting, look at the **decimal place**, not the number of
figures. $1000.1 + 0.25$ is $1000.4$ (to tenths), even though 0.25 has only 2 figures.

The rules in this lesson are rules of thumb. The bounds method is the real reason behind them, and it is what to use
when it matters.

## Where it leads

- Back: [No measurement is exact](01-no-exact-measurement.md) · Next: [Errors that grow](03-errors-that-grow.md),
  which shows exactly how errors pass through a calculation.
- [Level 7 page](index.md) · [Measurement topic page](../index.md)
- Writing big and small numbers: [Scientific notation](../../numbers/level-5/05-scientific-notation.md).
- Rounding and truncating, and why rounding early hurts: [Estimation and precision](../../numbers/level-6/06-estimation-precision.md).
- On the U of T shelf, physics labs use these rules from day one:
  [PHY131 Unit 1: units, vectors and estimation](../../../uoft/PHY131H1/unit01.md).
