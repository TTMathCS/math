---
title: "Errors that grow"
---

# Errors that grow

*Measurement · level 7, lesson 3 of 6*

## A question to start

You measure the edge of a cube as 5.0 cm, to the nearest millimetre. That is an error of only 1%. You work out the
volume: $5.0^3 = 125$ cm³. How far out could the volume be?

Most people guess "1%, about 1 cm³". The truth is about 3%: anywhere from about 121 cm³ to about 129 cm³. A small error
in a length turned into an error **three times as big** in the volume. And it did not come from careless arithmetic.
It came from the cube formula itself.

When you combine measurements, their errors combine too, and they nearly always grow. This lesson shows exactly how,
and why.

## The idea

### Two kinds of error size

From [lesson 1](01-no-exact-measurement.md), a measurement such as $L = 20.0 \pm 0.1$ cm has two ways to describe its
error.

- The **absolute error** is the plus-or-minus amount, in the same units: $\Delta L = 0.1$ cm. ($\Delta$, the Greek
  capital delta, is read "change in" or "error in".)
- The **relative error** is the absolute error divided by the value: $\dfrac{\Delta L}{L} = \dfrac{0.1}{20.0} = 0.005$,
  or 0.5% as a **percent error**.

The big result of this lesson fits in two lines:

- **Adding or subtracting: the absolute errors add.**
- **Multiplying or dividing: the relative errors add (approximately).**

We work out the worst case: how far off the answer could be if every error pushed the same unlucky way.

### Adding: absolute errors add

A shelf is made from two boards, $a = 85.0 \pm 0.1$ cm and $b = 42.5 \pm 0.1$ cm, end to end.

- Longest possible: $85.1 + 42.6 = 127.7$ cm.
- Shortest possible: $84.9 + 42.4 = 127.3$ cm.

The middle value is $127.5$, and the total can be $0.2$ cm either side. So $a + b = 127.5 \pm 0.2$ cm: the errors
$0.1 + 0.1$ added.

**Why in general:** the largest sum uses the largest of each, $(a + \Delta a) + (b + \Delta b) = (a + b) + (\Delta a + \Delta b)$;
the smallest uses the smallest of each, $(a + b) - (\Delta a + \Delta b)$. So

$$\Delta(a + b) = \Delta a + \Delta b.$$

### Subtracting: the errors still add

This surprises many people. A pipe has outside diameter $D = 30.0 \pm 0.1$ mm and inside diameter
$d = 26.0 \pm 0.1$ mm. How thick are the two walls together?

$D - d = 4.0$ mm. The largest difference uses the **largest** $D$ and the **smallest** $d$: $30.1 - 25.9 = 4.2$. The
smallest uses the smallest $D$ and the largest $d$: $29.9 - 26.1 = 3.8$. So $D - d = 4.0 \pm 0.2$ mm.

$$\Delta(a - b) = \Delta a + \Delta b.$$

The errors add even though the values subtract. Look at the relative error: each diameter was known to about 0.3%,
but the wall thickness is known only to $0.2 \div 4.0 = 5\%$. Subtracting two close numbers keeps their errors and
throws away most of the value. (This is the "subtraction eats digits" effect from [lesson 2](02-significant-figures.md).)

### Multiplying by an exact number

A square tile has side $s = 7.5 \pm 0.05$ cm. Its perimeter is $4s = 30.0$ cm. Since $4s = s + s + s + s$, the errors
add four times: $\Delta(4s) = 4 \times 0.05 = 0.2$ cm. Multiplying by an exact number $k$ multiplies the absolute
error by $k$, and leaves the relative error unchanged ($0.2 \div 30.0 = 0.05 \div 7.5$).

### Multiplying measurements: a picture

A sheet is $L = 20.0 \pm 0.1$ cm by $W = 10.0 \pm 0.1$ cm. Area $= 200$ cm². How big could it really be?

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 210" role="img" aria-label="A rectangle L by W with a thin strip of extra width along the top, a thin strip of extra length along the right, and a tiny corner square where the two strips meet">
  <rect x="40" y="50" width="280" height="140" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="2"/>
  <rect x="40" y="36" width="280" height="14" fill="#eea66f" stroke="currentColor"/>
  <rect x="320" y="50" width="20" height="140" fill="#7ccf9a" stroke="currentColor"/>
  <rect x="320" y="36" width="20" height="14" fill="currentColor" fill-opacity="0.35" stroke="currentColor"/>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="180" y="125">L × W</text>
    <text x="180" y="26">extra strip: L × ΔW</text>
    <text x="368" y="125">W × ΔL</text>
    <text x="368" y="30">ΔL × ΔW</text>
    <text x="180" y="206">L</text>
    <text x="26" y="125">W</text>
  </g>
</svg>
</div>

If both lengths are at their largest, the area grows by three pieces: a long thin strip $L \times \Delta W$, a tall thin
strip $W \times \Delta L$, and a tiny corner $\Delta L \times \Delta W$. In numbers:
$20.1 \times 10.1 = 203.01 = 200 + 2.0 + 1.0 + 0.01$. The smallest is $19.9 \times 9.9 = 197.01$. So the area is
about $200 \pm 3$ cm².

The corner is an error times an error, so it is tiny (0.01 here), and we can ignore it. The extra area is then
about $L\,\Delta W + W\,\Delta L$. Divide by the area $LW$:

$$\frac{\Delta(LW)}{LW} \approx \frac{L\,\Delta W + W\,\Delta L}{LW} = \frac{\Delta W}{W} + \frac{\Delta L}{L}.$$

**The relative errors add.** Here $0.5\% + 1\% = 1.5\%$, and 1.5% of 200 is 3. That matches the bounds.

### Dividing: relative errors add too

A cart rolls $d = 100.0 \pm 0.1$ m in $t = 12.5 \pm 0.2$ s. Speed $v = d \div t = 8.0$ m/s.

The **largest** speed uses the largest distance and the **smallest** time: $100.1 \div 12.3 \approx 8.14$. The
smallest uses the smallest distance and the largest time: $99.9 \div 12.7 \approx 7.87$. So $v$ is roughly
$8.0 \pm 0.14$ m/s.

The relative errors are $0.1 \div 100.0 = 0.1\%$ and $0.2 \div 12.5 = 1.6\%$. Their sum is $1.7\%$, and 1.7% of 8.0 is
$0.136$. Again the relative errors add. (The reason is the same picture run backwards; you can check that dividing by
$t(1 + \varepsilon)$ is close to multiplying by $1 - \varepsilon$ when $\varepsilon$ is small.)

Notice which error matters. The distance was measured to 0.1%, the time only to 1.6%. Measuring the distance more
carefully would barely help. **To improve a result, improve the worst measurement.**

### Powers: the error is multiplied by the power

A square of side $s$ has area $s \times s$. Using the product rule with the same relative error twice:

$$\frac{\Delta(s^2)}{s^2} \approx 2\,\frac{\Delta s}{s}, \qquad \frac{\Delta(s^3)}{s^3} \approx 3\,\frac{\Delta s}{s}.$$

That answers the opening question. A cube edge of $5.0 \pm 0.05$ cm has a 1% relative error, so the volume has about
a 3% error: $125 \pm 3.75$ cm³, so between about 121 and 129 cm³. The exact bounds agree: $4.95^3 \approx 121.3$ and
$5.05^3 \approx 128.8$.

The same rule says that a 1% error in a planet's measured radius gives about a 3% error in its volume, and so in any
density worked out from it.

### Percent error against a known value

Sometimes there is an accepted value to compare with (from a reference book, or a careful lab). Then

$$\text{percent error} = \frac{|\text{measured} - \text{accepted}|}{\text{accepted}} \times 100\%.$$

The bars mean absolute value (the size, without a sign). If your experiment's percent error against the accepted value
is much bigger than the uncertainty you worked out, something systematic is wrong: a zero error, a wrong unit, or a
wrong assumption.

### A note on "worst case"

Everything above is the **worst case**: all errors pushing the same way at once. With many independent random errors,
some push up and some down and they partly cancel, so the typical total error is smaller than the worst case.
Scientists then combine errors differently (they add their squares and take the square root). That needs ideas from
[Statistics](../../statistics/index.md). The worst-case method is simple, safe and always honest.

## Worked examples

**1. A fence.** A garden is a rectangle measured as 8.4 m by 2.6 m, each to the nearest 0.1 m. Find the perimeter and
area with their errors.

1. Each length has $\Delta = 0.05$ m.
2. Perimeter $= 2(8.4 + 2.6) = 22.0$ m. It is a sum of four lengths, so $\Delta = 4 \times 0.05 = 0.2$ m:
   **$22.0 \pm 0.2$ m**.
3. Area $= 8.4 \times 2.6 = 21.84$ m². Relative errors: $0.05 \div 8.4 \approx 0.60\%$ and
   $0.05 \div 2.6 \approx 1.92\%$, total about 2.5%. $2.5\%$ of 21.84 is about 0.55. Area **$21.8 \pm 0.6$ m²**,
   or about 22 m².
4. Check: $8.45 \times 2.65 \approx 22.39$ and $8.35 \times 2.55 \approx 21.29$. ✓

**2. A ball.** The diameter of a ball is $6.0 \pm 0.1$ cm. Find its volume with the error.

1. $r = 3.0 \pm 0.05$ cm (halving is an exact operation, so the error halves too).
2. $V = \tfrac43 \pi r^3 = 36\pi \approx 113.1$ cm³.
3. Relative error of $r$: $0.05 \div 3.0 \approx 1.67\%$. For $r^3$: $3 \times 1.67\% = 5\%$. ($\tfrac43$ and $\pi$
   are exact.)
4. $5\%$ of 113.1 is about 5.7. Volume **$113 \pm 6$ cm³**. (Exact bounds: $107.5$ to $118.8$.)

**3. Which measurement to improve.** A rectangle is $50.0 \pm 0.1$ cm by $4.0 \pm 0.1$ cm. Where does most of the area
error come from?

1. Relative errors: $0.1 \div 50.0 = 0.2\%$, $0.1 \div 4.0 = 2.5\%$.
2. The short side gives more than ten times as much relative error. Both were measured with the same ruler, but the
   short side is short, so its error is a bigger fraction of it.
3. Better: measure the short side with a vernier caliper or a micrometer.

**4. Gravity on Mars.** A student analysing rover data finds Mars's surface gravity to be 3.6 m/s². The accepted value
is about 3.72 m/s². Percent error: $|3.6 - 3.72| \div 3.72 \times 100\% \approx 3.2\%$.

## Try it

1. Add $14.2 \pm 0.1$ cm and $6.8 \pm 0.1$ cm, with the error.
2. A room is $5.30 \pm 0.01$ m long. A cupboard $0.62 \pm 0.01$ m deep stands against one end. How much floor length is
   left, with its error?
3. A square has side $12.0 \pm 0.1$ cm. Find the relative error in its area, and the area with its error.
4. A box measures $10.0 \pm 0.1$ cm, $8.0 \pm 0.1$ cm and $5.0 \pm 0.1$ cm. Estimate the percent error in its volume.
5. A runner covers $200 \pm 1$ m in $25.0 \pm 0.3$ s. Find the speed with its error.
6. A circle's radius is $0.25 \pm 0.01$ m. What is the percent error in the radius, the circumference and the area?
7. A class measures the density of aluminium as 2.55 g/cm³. The accepted value is 2.70 g/cm³. Find the percent error.
8. Why is measuring the thickness of a pipe wall by "outside diameter minus inside diameter" a poor method? Suggest a
   better one.

??? note "Answers"
    1. $21.0 \pm 0.2$ cm (absolute errors add).
    2. $5.30 - 0.62 = 4.68$ m, error $0.01 + 0.01 = 0.02$ m: **$4.68 \pm 0.02$ m** (the errors add even though the
       lengths subtract).
    3. Relative error of the side: $0.1 \div 12.0 \approx 0.83\%$; area: $2 \times 0.83\% \approx 1.67\%$. Area
       $= 144$ cm², error about $0.0167 \times 144 = 2.4$ cm²: **$144 \pm 2.4$ cm²**. (Bounds: $11.9^2 = 141.61$,
       $12.1^2 = 146.41$.)
    4. $1\% + 1.25\% + 2\% = 4.25\%$, about **4%**. (Volume 400 cm³, so roughly $\pm 17$ cm³.)
    5. $v = 200 \div 25.0 = 8.0$ m/s. Relative errors $1 \div 200 = 0.5\%$ and $0.3 \div 25.0 = 1.2\%$; total 1.7%.
       $0.017 \times 8.0 \approx 0.14$: **$8.0 \pm 0.14$ m/s**.
    6. Radius: $0.01 \div 0.25 = 4\%$. Circumference $2\pi r$: also **4%** ($2\pi$ is exact). Area $\pi r^2$:
       $2 \times 4\% =$ **8%**.
    7. $|2.55 - 2.70| \div 2.70 \times 100\% = 0.15 \div 2.70 \times 100\% \approx 5.6\%$.
    8. The difference of two close numbers keeps both their errors but is itself small, so its relative error is large
       (in the lesson, 0.3% became 5%). Better: measure the wall directly with calipers, or measure many stacked
       pieces and divide.

## Common mistake

**Subtracting the errors when the values subtract.** $(30.0 \pm 0.1) - (26.0 \pm 0.1)$ is $4.0 \pm 0.2$, not
$4.0 \pm 0$. Errors are "how far wrong could it be", and two wrongs can push the same way.

**Adding absolute errors in a product.** $(20.0 \pm 0.1) \times (10.0 \pm 0.1)$ is not $200 \pm 0.2$. In products,
add the **relative** errors, then turn the result back into an absolute error.

## Where it leads

- Back: [Significant figures](02-significant-figures.md) · Next: [Dimensional analysis](04-dimensional-analysis.md),
  checking the units of a calculation instead of its digits.
- [Level 7 page](index.md) · [Measurement topic page](../index.md)
- The approximation $(1 + \varepsilon)^n \approx 1 + n\varepsilon$ is the first step of calculus: the derivative
  measures how much an output changes when an input changes a little. See [Change](../../change/index.md) and, at
  U of T, [MAT137 Unit 3: derivatives](../../../uoft/MAT137/unit03.md) (linear approximation).
- Random errors that partly cancel: [Statistics](../../statistics/index.md).
- Percentages: [Ratio](../../ratio/index.md).
