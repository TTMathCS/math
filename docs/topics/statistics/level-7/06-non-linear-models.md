---
title: "Non-linear models"
---

# Non-linear models

*Statistics and data · level 7, lesson 6 of 7*

## A question to start

A lab counts the cells in a dish every day for a week. A student fits a straight line and gets $r^2 = 0.92$: "92% of
the variation explained, an excellent fit!" Then she uses the line to predict day 8 and gets about 487 cells. The
real count on day 8 is far higher. The line was a good summary of the past and a bad model of the growth.

How can a fit with $r^2 = 0.92$ be the wrong model? And how do you find the right one? The answer is a simple
picture that every statistician draws after fitting anything: the **residual plot**.

## The idea

### Models other than lines

A **model** is a formula that describes how $y$ depends on $x$, plus the idea that real data scatter a little around
it. The straight line $y = a + bx$ is only one family. Three others are common:

| Model | Formula | Pattern in equally spaced $x$ | Typical uses |
| --- | --- | --- | --- |
| Linear | $y = a + bx$ | equal **differences** | steady rates, costs per item |
| Exponential | $y = a \cdot b^x$ | equal **ratios** | growth of populations, money with interest, decay of medicine or radioactivity |
| Quadratic | $y = ax^2 + bx + c$ | equal **second differences** | thrown objects, areas, stopping distances |
| Power | $y = a \cdot x^k$ | straight line on a log–log graph | sizes of animals, planetary orbits |

The pattern column is the quick test you met in [Patterns](../../patterns/index.md): in an arithmetic sequence you
add the same amount each step, in a geometric sequence you multiply by the same amount.

### Residual plots: the honest judge

After fitting a model, compute each residual $y - \hat{y}$ (lesson 5) and plot residuals against $x$. This is a
**residual plot**.

- If the model has the right shape, the residuals are a **patternless band** around 0: positive and negative mixed,
  no curve, no fan.
- If the residuals form a **curve** (a U or an upside-down U), the model has the wrong shape. The data bend and the
  model does not.
- If the residuals **fan out** (small on one side, large on the other), the spread changes with $x$; a transformed
  model (such as using logarithms) may help.

Why does this work? A good model has taken all the pattern out of the data and left only the random scatter. Any
pattern still visible in the residuals is pattern the model missed.

$r^2$ cannot do this job. A straight line through any smoothly rising curve gets a high $r^2$, because the data do go
up. Only the residual plot shows that they go up **in the wrong way**.

### Fitting an exponential model by taking logarithms

If $y = a \cdot b^x$, take the logarithm (base 10) of both sides:

$$\log y = \log a + x \log b.$$

That is a straight line in $x$ and $\log y$, with intercept $\log a$ and slope $\log b$. So: compute $\log y$ for each
point, fit an ordinary least-squares line, then undo the logarithms to get $a$ and $b$. Technology does exactly this
when you press "exponential regression" (calculators call it ExpReg; spreadsheets offer an exponential trendline).
Many programs work with the natural logarithm $\ln$ instead, which gives the same $a$ and $b$.

A **power** model $y = a x^k$ becomes a line after taking logs of **both** variables: $\log y = \log a + k \log x$.
The slope of the log–log line is the power $k$.

### Fitting a quadratic

A quadratic has three numbers to find, so it is fitted by least squares with three unknowns instead of two. The
algebra is longer but the idea is the same: technology ("quadratic regression", QuadReg, or a polynomial trendline of
order 2) finds the $a$, $b$, $c$ that make the sum of squared residuals smallest.

### Choosing a model

Use three things together:

1. **The scatter plot**: straight, bending up, bending over?
2. **The context**: is there a reason for a shape? Things that grow by a percent each step are exponential; objects
   moving under gravity follow quadratics.
3. **The residual plot** of each candidate: choose the model whose residuals show no pattern.

And be extra careful extrapolating a non-linear model: an exponential model predicts numbers that explode, and no dish
of cells can grow forever.

## Worked examples

**1. The cell counts.** The counts on days 0 to 6 were

| day $x$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| count $y$ | 50 | 72 | 101 | 148 | 205 | 300 | 425 |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 240" role="img" aria-label="Seven counts over days 0 to 6 rising faster and faster, with a dashed straight line that misses the curve pattern and a smooth exponential curve that passes almost exactly through every point">
  <line x1="40" y1="200" x2="360" y2="200" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="20" x2="40" y2="200" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40.0" y1="197.9" x2="355.1" y2="43.8" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 4"/>
  <polyline fill="none" stroke="#7ccf9a" stroke-width="2" points="40.0,180.0 45.2,179.2 50.3,178.4 55.5,177.6 60.7,176.7 65.8,175.9 71.0,174.9 76.2,174.0 81.4,173.0 86.5,172.0 91.7,170.9 96.9,169.8 102.0,168.6 107.2,167.4 112.4,166.2 117.5,164.9 122.7,163.6 127.9,162.2 133.0,160.7 138.2,159.2 143.4,157.7 148.6,156.1 153.7,154.4 158.9,152.6 164.1,150.8 169.2,149.0 174.4,147.0 179.6,145.0 184.7,142.9 189.9,140.7 195.1,138.4 200.2,136.1 205.4,133.7 210.6,131.1 215.8,128.5 220.9,125.8 226.1,123.0 231.3,120.0 236.4,117.0 241.6,113.8 246.8,110.5 251.9,107.1 257.1,103.5 262.3,99.9 267.4,96.1 272.6,92.1 277.8,88.0 283.0,83.7 288.1,79.3 293.3,74.7 298.5,69.9 303.6,64.9 308.8,59.8 314.0,54.4 319.1,48.9 324.3,43.1 329.5,37.1 334.6,30.9 339.8,24.4 345.0,17.8 350.2,10.8"/>
  <circle cx="40.0" cy="180.0" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="89.2" cy="171.2" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="138.5" cy="159.6" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="187.7" cy="140.8" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="236.9" cy="118.0" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="286.2" cy="80.0" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="335.4" cy="30.0" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="40.0" y="215.0" font-size="10" text-anchor="middle" fill="currentColor">0</text>
  <text x="89.2" y="215.0" font-size="10" text-anchor="middle" fill="currentColor">1</text>
  <text x="138.5" y="215.0" font-size="10" text-anchor="middle" fill="currentColor">2</text>
  <text x="187.7" y="215.0" font-size="10" text-anchor="middle" fill="currentColor">3</text>
  <text x="236.9" y="215.0" font-size="10" text-anchor="middle" fill="currentColor">4</text>
  <text x="286.2" y="215.0" font-size="10" text-anchor="middle" fill="currentColor">5</text>
  <text x="335.4" y="215.0" font-size="10" text-anchor="middle" fill="currentColor">6</text>
  <text x="34.0" y="164.0" font-size="10" text-anchor="end" fill="currentColor">100</text>
  <text x="34.0" y="124.0" font-size="10" text-anchor="end" fill="currentColor">200</text>
  <text x="34.0" y="84.0" font-size="10" text-anchor="end" fill="currentColor">300</text>
  <text x="34.0" y="44.0" font-size="10" text-anchor="end" fill="currentColor">400</text>
  <text x="241.8" y="68.0" font-size="11" text-anchor="end" fill="currentColor">straight line (dashed)</text>
  <text x="296.0" y="32.0" font-size="11" text-anchor="end" fill="currentColor">exponential curve</text>
  <text x="200.0" y="232.0" font-size="11" text-anchor="middle" fill="currentColor">day</text>
</svg>
</div>

- **Differences**: 22, 29, 47, 57, 95, 125, growing. Not linear.
- **Ratios**: $72 \div 50 = 1.44$, then 1.40, 1.47, 1.39, 1.46, 1.42: all close to 1.43. That points to exponential.
- **Straight line** by least squares: $\hat{y} = 5.3 + 60.2x$, with $r^2 \approx 0.92$. Residuals: $+44.7$, $+6.5$,
  $-24.7$, $-37.9$, $-41.0$, $-6.2$, $+58.6$. Positive, then negative, then positive: a U.
- **Exponential**: the values of $\log y$ are 1.699, 1.857, 2.004, 2.170, 2.312, 2.477, 2.628. A line through them
  has intercept 1.6995 and slope 0.1548, so $a = 10^{1.6995} \approx 50.1$ and $b = 10^{0.1548} \approx 1.428$:
  $\hat{y} = 50.1 \times 1.428^x$. Residuals: $-0.1, 0.5, -1.1, 2.1, -3.4, 2.4, -0.1$, small and patternless.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 550 185" role="img" aria-label="Two residual plots on the same scale. The straight line leaves residuals in a U shape: positive, then negative, then positive. The exponential model leaves tiny residuals scattered close to zero with no pattern">
  <line x1="30" y1="85.0" x2="250" y2="85.0" stroke="currentColor" stroke-width="1.5"/>
  <line x1="30" y1="20" x2="30" y2="150" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="45.7" cy="40.3" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="77.1" cy="78.5" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="108.6" cy="109.7" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="140.0" cy="122.9" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="171.4" cy="126.0" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="202.9" cy="91.2" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="234.3" cy="26.4" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="140.0" y="172.0" font-size="11" text-anchor="middle" fill="currentColor">residuals of the straight line</text>
  <line x1="300" y1="85.0" x2="520" y2="85.0" stroke="currentColor" stroke-width="1.5"/>
  <line x1="300" y1="20" x2="300" y2="150" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="315.7" cy="85.1" r="5" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="347.1" cy="84.5" r="5" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="378.6" cy="86.1" r="5" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="410.0" cy="82.9" r="5" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="441.4" cy="88.4" r="5" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="472.9" cy="82.6" r="5" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="504.3" cy="85.1" r="5" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="410.0" y="172.0" font-size="11" text-anchor="middle" fill="currentColor">residuals of the exponential</text>
</svg>
</div>

The exponential model wins. Its meaning: the count grows by about 43% per day. Its day-8 prediction is
$50.1 \times 1.428^8 \approx 867$ cells, nearly twice the line's 487.

**2. A ball thrown on Mars.** A simulation of a ball thrown upward on Mars records its height $h$ (metres) every half
second $t$:

| $t$ | 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $h$ | 1.6 | 5.8 | 9.8 | 12.4 | 13.8 | 15.1 | 14.7 | 13.8 | 12.0 | 8.8 | 5.2 |

- A straight line is hopeless (residuals go negative, positive, negative: an upside-down U).
- Quadratic regression gives $\hat{h} \approx 1.50 + 9.98t - 1.85t^2$.
- Physics says a thrown object follows $h = h_0 + v_0 t - \tfrac{1}{2} g t^2$, where $g$ is the pull of gravity. So
  $\tfrac{1}{2}g \approx 1.85$ and $g \approx 3.70$ m/s². Mars's surface gravity is about 3.7 m/s², a little over a
  third of Earth's 9.8. The model recovered it from the data.
- The top of the throw is at the vertex, $t = \dfrac{9.98}{2 \times 1.85} \approx 2.7$ s, matching the table.

**3. Kepler's law from data.** For six planets, the average distance from the Sun $a$ (in astronomical units, Earth
= 1) and the time for one orbit $T$ (in Earth years):

| planet | Mercury | Venus | Earth | Mars | Jupiter | Saturn |
| --- | --- | --- | --- | --- | --- | --- |
| $a$ | 0.387 | 0.723 | 1 | 1.524 | 5.203 | 9.537 |
| $T$ | 0.241 | 0.615 | 1 | 1.881 | 11.86 | 29.46 |

Plot $\log T$ against $\log a$: the points lie on a line with slope 1.4997 and intercept 0.0001. So $k \approx 1.5$
and $a$'s coefficient is $10^{0.0001} \approx 1$: the power model is $T = a^{1.5}$, that is $T^2 = a^3$. This is
Kepler's third law, which he found from data in 1619. It predicts Uranus ($a = 19.19$): $T = 19.19^{1.5} \approx 84.1$
years; the real value is about 84 years.

## Try it

1. Which model fits each sequence of $y$ values for $x = 0, 1, 2, 3, 4$? (a) 3, 7, 11, 15, 19; (b) 3, 6, 12, 24, 48;
   (c) 1, 2, 5, 10, 17; (d) 80, 40, 20, 10, 5.
2. A residual plot from a straight-line fit shows residuals that are negative for small $x$, positive in the middle
   and negative for large $x$. What does this tell you?
3. A medicine's amount in the blood halves every 6 hours, starting at 200 mg. Write an exponential model with $x$ in
   hours. How much is left after 24 hours?
4. An exponential regression gives $\log y = 0.30 + 0.0414x$. Find $a$ and $b$ in $y = a \cdot b^x$, and the growth
   rate per step.
5. In example 2, why is a quadratic model better than an exponential one, even if both had small residuals inside the
   data?
6. Explain why taking logs turns $y = a \cdot b^x$ into a straight line. Which variable goes on each axis?
7. A fit has $r^2 = 0.97$ and its residual plot is a clear U. A second model has $r^2 = 0.95$ and a patternless
   residual plot. Which do you prefer, and why?
8. Use $T^2 = a^3$ to find the orbit time of an asteroid with $a = 4$ AU.

??? note "Answers"
    1. (a) Differences all 4: **linear**, $y = 3 + 4x$. (b) Ratios all 2: **exponential**, $y = 3 \cdot 2^x$. (c)
       Differences 1, 3, 5, 7; second differences all 2: **quadratic**, $y = x^2 + 1$. (d) Ratios all 0.5:
       **exponential** decay, $y = 80 \cdot 0.5^x$.
    2. The data bend downward (like an upside-down U) and the straight line does not. Try a curved model such as a
       quadratic.
    3. $y = 200 \cdot 0.5^{x/6}$. After 24 hours: $200 \times 0.5^4 = 200 \div 16 = 12.5$ mg.
    4. $a = 10^{0.30} \approx 2.0$, $b = 10^{0.0414} \approx 1.10$. The model is $y \approx 2.0 \times 1.10^x$: growth
       of about **10% per step**.
    5. Physics gives a reason: gravity makes height a quadratic in time. And the data rise and then fall, which an
       exponential model (always rising or always falling) can never do.
    6. $\log(a \cdot b^x) = \log a + \log(b^x) = \log a + x\log b$, by the rules of logarithms. Put $x$ on the
       horizontal axis and $\log y$ on the vertical: the points lie on a line with slope $\log b$ and intercept
       $\log a$.
    7. The **second**. The U shape says the first model has the wrong form, however high its $r^2$. The second has
       taken all the pattern out of the data, which is what a model is for.
    8. $T^2 = 4^3 = 64$, so $T = 8$ years.

## Common mistake

**Choosing the model with the highest $r^2$.** $r^2$ rewards fitting the points you have, not the right shape. Check
the residual plot, and ask whether the context gives a reason for the shape.

**Extrapolating an exponential model far ahead.** Exponential growth always slows in the real world (food, space or
money run out). A model that fits seven days well can be absurd after seventy.

## Where it leads

- Back: [Least-squares regression](05-least-squares.md) · Next: [Organising large data sets](07-large-data-sets.md)
- [Level 7 page](index.md) · [Statistics topic page](../index.md)
- Exponentials, logarithms and quadratics themselves: [Algebra](../../algebra/index.md) and
  [Patterns](../../patterns/index.md). Growth and rates of change: [Change and motion](../../change/index.md).
- Exponential and logarithm functions in full: [MAT137 Unit 4 (transcendental functions)](../../../uoft/MAT137/unit04.md).
