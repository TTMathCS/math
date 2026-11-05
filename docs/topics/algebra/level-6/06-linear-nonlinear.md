---
title: "Linear and non-linear relations"
---

# Linear and non-linear relations

*Algebra · level 6, lesson 6 of 6*

## A question to start

Drop a ball from a high window. If we round Earth's pull of gravity to 10 metres per second squared and ignore air,
the ball has fallen

| Time (s) | 0 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- | --- |
| Distance fallen (m) | 0 | 5 | 20 | 45 | 80 |

In the first second it falls 5 m. Does that mean it falls 10 m in two seconds? No: it falls 20 m. In four seconds it
falls not 20 m but 80 m. Distance is not proportional to time, and the relation is not even linear: the graph of
these points is a curve.

On Mars, where gravity is about 3.71 metres per second squared, the same drop gives about 1.9 m, 7.4 m, 16.7 m and
29.7 m after 1, 2, 3 and 4 seconds: a gentler curve, but still a curve.

How can you tell, from a table, a graph or an equation, whether a relation is a straight line or not? And when you
measure something real, how do you decide whether a line or a curve describes it better? That is this lesson.

## The idea

### What "linear" means, once more

A relation is **linear** when its graph is a straight line. In level 5 you saw what that means in each view:

- **Table:** when $x$ goes up in equal steps, $y$ goes up (or down) by the same amount each time.
- **Graph:** the points lie on a straight line.
- **Equation:** it can be written as $y = mx + b$.

Everything else is **non-linear**. This lesson makes each test precise and explains why the three tests agree.

### Test 1: first differences in a table

For $y = 3x + 2$:

| $x$ | 0 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- | --- |
| $y$ | 2 | 5 | 8 | 11 | 14 |
| first difference | | 3 | 3 | 3 | 3 |

**Why the differences are constant for every line.** Take $y = mx + b$ and increase $x$ by a step $h$. The new $y$ is
$m(x + h) + b = mx + b + mh$. So $y$ always goes up by exactly $mh$, no matter where you start. Equal steps in $x$
give equal steps in $y$. The reverse is also true: if equal steps always give the same change, the points lie on one
straight line (level 5 showed why: identical steps never bend).

For the falling ball, the first differences are $5, 15, 25, 35$: not constant, so not linear.

### Unequal steps: use the rate

The first-difference test only works if the $x$ values go up in **equal** steps. If they do not, compare the **rate of
change** between neighbouring points instead:

$$\text{rate} = \frac{\text{change in } y}{\text{change in } x}.$$

The relation is linear exactly when this rate is the same between every pair of neighbours. (This rate is the slope
of the segment joining two points; equal slopes mean the segments line up.)

### Second differences and ratios: a first look at curves

When the first differences are not constant, take differences again. For the ball: first differences $5, 15, 25, 35$;
**second differences** $10, 10, 10$. Constant second differences are the mark of a **quadratic** relation, one with
$x^2$ in it. Here $d = 5t^2$. Quadratics are the subject of level 7.

Another common pattern: each $y$ is the previous one **multiplied** by the same number, like $1, 2, 4, 8, 16$. The
first differences are $1, 2, 4, 8$, which never settle down, but the **ratios** are all 2. That is an **exponential**
relation, $y = 2^x$, also in level 7.

| Pattern in the table | Kind of relation | Example |
| --- | --- | --- |
| constant first differences | linear | $y = 3x + 2$ |
| constant second differences | quadratic | $y = 5x^2$ |
| constant ratios | exponential | $y = 2^x$ |

### Test 2: the graph

On a graph, a linear relation is a straight line; a non-linear one curves, bends or jumps. Be careful with just a few
points: three points can look roughly lined up by accident. Check with the table or the equation too.

### Test 3: the equation

An equation in $x$ and $y$ is linear when it can be rearranged into $y = mx + b$ (or is a vertical line $x = c$). In
practice: $x$ and $y$ appear only to the **first power**, are not multiplied together, are not under a square root or
in a denominator, and are not in an exponent.

| Linear | Non-linear |
| --- | --- |
| $y = 3 - 2x$ | $y = x^2 + 1$ (a square) |
| $3x - 4y = 12$ (rearranges to $y = \tfrac34 x - 3$) | $xy = 12$ (a product) |
| $y = \dfrac{x + 1}{2}$ (that is $\tfrac12 x + \tfrac12$) | $y = \dfrac{5}{x}$ ($x$ in the denominator) |
| $y = 7$ (a flat line, slope 0) | $y = 2^x$ ($x$ in the exponent) |

Look at the third row: dividing by a **number** is fine, dividing by $x$ is not. And sometimes an equation looks
non-linear but is not: $y = (x + 3)^2 - x^2$ expands to $6x + 9$, which is linear.

### Modelling real data

Real measurements never fit a pattern exactly: rulers have limits and hands shake. So with real data the question is
not "is it exactly linear?" but "is a straight line a **good description**?"

Suppose a class hangs masses from a spring and measures its length:

| Mass (g) | 0 | 100 | 200 | 300 | 400 | 500 |
| --- | --- | --- | --- | --- | --- | --- |
| Length (cm) | 10.0 | 12.1 | 13.9 | 16.0 | 18.1 | 19.9 |

The first differences are $2.1, 1.8, 2.1, 2.1, 1.8$: not identical, but all close to 2. Plotted, the points lie very
close to a line. A good model is the line through the start and end, $L = 10 + 0.02m$ (length in cm, mass in g): the
spring is 10 cm long unloaded and stretches 2 cm per 100 g.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 230" role="img" aria-label="Scatter plot of spring length against mass: six points lying close to a straight line">
  <line x1="50" y1="200" x2="365" y2="200" stroke="currentColor" stroke-width="2"/>
  <line x1="50" y1="200" x2="50" y2="30" stroke="currentColor" stroke-width="2"/>
  <line x1="50" y1="130" x2="350" y2="46" stroke="#9cc9ea" stroke-width="3"/>
  <g fill="#eea66f" stroke="currentColor">
    <circle cx="50" cy="130" r="5"/><circle cx="100" cy="115.3" r="5"/><circle cx="150" cy="102.7" r="5"/>
    <circle cx="200" cy="88" r="5"/><circle cx="250" cy="73.3" r="5"/><circle cx="300" cy="60.7" r="5"/>
  </g>
  <g font-size="11" fill="currentColor">
    <text x="50" y="216" text-anchor="middle">0</text><text x="150" y="216" text-anchor="middle">200</text>
    <text x="250" y="216" text-anchor="middle">400</text><text x="350" y="216" text-anchor="middle">600</text>
    <text x="44" y="134" text-anchor="end">10</text><text x="44" y="64" text-anchor="end">20</text>
    <text x="365" y="228" text-anchor="end">mass (g)</text><text x="56" y="28">length (cm)</text>
    <text x="230" y="125">model: L = 10 + 0.02m</text>
  </g>
</svg>
</div>

Now a curved example. A pendulum's **period** is the time for one full swing, there and back. For small swings it
depends on the length of the string:

| Length (m) | 0.25 | 0.5 | 1 | 2 |
| --- | --- | --- | --- | --- |
| Period on Earth (s) | 1.00 | 1.42 | 2.01 | 2.84 |

The $x$ steps are not equal, so use rates: $\tfrac{0.42}{0.25} = 1.68$, then $\tfrac{0.59}{0.5} = 1.18$, then
$\tfrac{0.83}{1} = 0.83$ seconds per metre. The rate keeps **falling**, so the graph bends over: not linear.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 230" role="img" aria-label="Graph of pendulum period against length: a curve that rises steeply at first and then more slowly, through four measured points">
  <line x1="50" y1="200" x2="365" y2="200" stroke="currentColor" stroke-width="2"/>
  <line x1="50" y1="200" x2="50" y2="30" stroke="currentColor" stroke-width="2"/>
  <line x1="50" y1="200" x2="350" y2="58" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.6"/>
  <polyline fill="none" stroke="#9cc9ea" stroke-width="3" points="50.0,200.0 57.5,177.6 65.0,168.3 72.5,161.2 80.0,155.1 87.5,149.8 95.0,145.1 102.5,140.7 110.0,136.6 117.5,132.7 125.0,129.1 132.5,125.6 140.0,122.3 147.5,119.1 155.0,116.1 162.5,113.1 170.0,110.3 177.5,107.5 185.0,104.8 192.5,102.2 200.0,99.7 207.5,97.2 215.0,94.8 222.5,92.4 230.0,90.1 237.5,87.9 245.0,85.6 252.5,83.5 260.0,81.3 267.5,79.2 275.0,77.2 282.5,75.1 290.0,73.1 297.5,71.2 305.0,69.2 312.5,67.3 320.0,65.4 327.5,63.6 335.0,61.7 342.5,59.9 350.0,58.1"/>
  <g fill="#eea66f" stroke="currentColor">
    <circle cx="87.5" cy="150" r="5"/><circle cx="125" cy="129" r="5"/><circle cx="200" cy="99.5" r="5"/><circle cx="350" cy="58" r="5"/>
  </g>
  <g font-size="11" fill="currentColor">
    <text x="50" y="216" text-anchor="middle">0</text><text x="125" y="216" text-anchor="middle">0.5</text>
    <text x="200" y="216" text-anchor="middle">1</text><text x="275" y="216" text-anchor="middle">1.5</text>
    <text x="350" y="216" text-anchor="middle">2</text>
    <text x="44" y="154" text-anchor="end">1</text><text x="44" y="104" text-anchor="end">2</text><text x="44" y="54" text-anchor="end">3</text>
    <text x="365" y="228" text-anchor="end">length (m)</text><text x="56" y="28">period (s)</text>
    <text x="215" y="150">dashed: a straight line</text><text x="215" y="166">misses the middle points</text>
  </g>
</svg>
</div>

(Physics gives the curve's equation: the period is $2\pi\sqrt{L/g}$, a square root, which explains the bend. On Mars,
with weaker gravity, a 1 m pendulum swings more slowly: about 3.26 seconds per swing instead of 2.01.)

### Interpolating and extrapolating

Using a model **inside** the range of the data (for example, the spring with 250 g) is called **interpolation**, and is
usually reliable. Using it **outside** the range (the spring with 5 kg) is **extrapolation**, and is risky: the real
spring may stretch differently or snap, and the straight line knows nothing about that. A model is only trusted where
it has been tested.

<figure class="play" data-play="graph" data-form="power"><span class="ai-tag">AI-created</span><figcaption><b>Straight or curved.</b> n = 1 is a line; any other power bends.</figcaption></figure>

## Worked examples

**1. A linear table.** $x$: 0, 1, 2, 3, 4 and $y$: 3, 7, 11, 15, 19.

- First differences: 4, 4, 4, 4. Constant, so linear. Starting value 3, so $y = 4x + 3$.

**2. A quadratic table.** $x$: 0, 1, 2, 3, 4 and $y$: 0, 1, 4, 9, 16.

- First differences: 1, 3, 5, 7: not constant, so non-linear. Second differences: 2, 2, 2: quadratic. Indeed $y = x^2$.

**3. Unequal steps.** $x$: 1, 2, 4, 7 and $y$: 5, 8, 14, 23.

- Rates: $\tfrac{3}{1} = 3$, $\tfrac{6}{2} = 3$, $\tfrac{9}{3} = 3$. Constant, so linear with slope 3.
- Find $b$ from $(1, 5)$: $5 = 3 + b$, so $b = 2$ and $y = 3x + 2$. Check: $3 \times 7 + 2 = 23$ ✓.
- (The plain differences 3, 6, 9 would have suggested "not linear": they are unequal only because the steps are.)

**4. Classifying equations.** Which are linear? $y = 3 - 2x$; $y = x^2 + 1$; $xy = 12$; $3x - 4y = 12$; $y = 2^x$;
$y = \tfrac{x + 1}{2}$.

- Linear: $y = 3 - 2x$, $3x - 4y = 12$, and $y = \tfrac{x + 1}{2}$. Non-linear: $y = x^2 + 1$, $xy = 12$, $y = 2^x$.

**5. Using the spring model.** Predict the length with 250 g, and comment on 5 kg.

- 250 g: $L = 10 + 0.02 \times 250 = 15$ cm. Interpolation, between 200 g (13.9 cm) and 300 g (16.0 cm): reasonable.
- 5 kg = 5000 g: $L = 10 + 100 = 110$ cm. Extrapolation, ten times beyond the data. A spring 10 cm long stretched to
  over a metre has almost certainly been bent out of shape. Do not trust this.

## Try it

1. Is it linear? If so, find the equation. $x$: 0, 1, 2, 3, 4 and $y$: 10, 7, 4, 1, −2.
2. Is it linear? $x$: 0, 1, 2, 3, 4 and $y$: 1, 3, 9, 27, 81. What pattern does it have?
3. Is it linear? If so, find the equation. $x$: 1, 3, 4, 8 and $y$: 2, 8, 11, 23.
4. Linear or non-linear? (a) $y = 7x$; (b) $y = x^3$; (c) $2x + 5y = 10$; (d) $y = \dfrac{1}{x + 1}$;
   (e) $y = x(x - 2)$; (f) $y = \dfrac{3x - 6}{3}$.
5. For squares with side 1, 2, 3, 4 cm, make tables of the perimeter and of the area. Which relation is linear?
6. Use the spring model $L = 10 + 0.02m$ to find the mass that makes the spring 17 cm long. Is this interpolation or
   extrapolation?
7. Show that the second differences of $y = x^2$ are always 2. (Hint: work out
   $(x + 2)^2 - 2(x + 1)^2 + x^2$.)

??? note "Answers"
    1. First differences $-3, -3, -3, -3$: linear, going down. $y = -3x + 10$. Check: $-12 + 10 = -2$ ✓.
    2. First differences 2, 6, 18, 54: not linear. Each $y$ is 3 times the one before (constant ratio 3), so it is
       exponential: $y = 3^x$.
    3. Rates: $\tfrac{6}{2} = 3$, $\tfrac{3}{1} = 3$, $\tfrac{12}{4} = 3$. Linear with slope 3. From $(1, 2)$:
       $2 = 3 + b$, so $b = -1$ and $y = 3x - 1$. Check: $3 \times 8 - 1 = 23$ ✓.
    4. (a) Linear (direct variation). (b) Non-linear (a cube). (c) Linear: $y = -\tfrac25 x + 2$. (d) Non-linear
       ($x$ in the denominator). (e) Non-linear: it expands to $x^2 - 2x$. (f) Linear: it simplifies to $y = x - 2$.
    5. Perimeter: 4, 8, 12, 16, differences all 4: **linear** ($P = 4s$). Area: 1, 4, 9, 16, differences 3, 5, 7:
       **non-linear** (quadratic, $A = s^2$; second differences all 2).
    6. $10 + 0.02m = 17$, so $0.02m = 7$ and $m = 350$ g. That is inside the data (0 to 500 g): interpolation.
    7. Expand: $(x^2 + 4x + 4) - 2(x^2 + 2x + 1) + x^2 = x^2 + 4x + 4 - 2x^2 - 4x - 2 + x^2 = 2$. The second
       difference of three neighbouring values is always 2, wherever you start.

## Common mistake

**Using first differences when the steps are unequal.** In worked example 3 the differences 3, 6, 9 look non-linear,
but the $x$ steps are 1, 2 and 3. Always check that the $x$ values go up evenly; if not, divide to get rates.

**Calling an equation non-linear because it has a fraction or is rearranged.** $3x - 4y = 12$ and $y = \tfrac{x + 1}{2}$
are both straight lines. What matters is the **powers** of $x$ and $y$ and whether $x$ is in a denominator or an
exponent, not how the equation happens to be written.

## Where it leads

- Previous: [Linear systems by substitution and elimination](05-substitution-elimination.md) · Next level: level 7
  begins with quadratic relations and the parabola: [Level 7 page](../level-7/index.md).
- [Level 6 page](index.md) · [Algebra topic page](../index.md)
- Linear relations from the start: [Linear relations](../level-5/04-linear-relations.md). Sequences with constant
  differences and constant ratios: [Patterns](../../patterns/index.md).
- Lines of best fit drawn properly, and how to measure how good a fit is: [Statistics](../../statistics/index.md).
  How fast a curve is rising at each point: [Change](../../change/index.md).
