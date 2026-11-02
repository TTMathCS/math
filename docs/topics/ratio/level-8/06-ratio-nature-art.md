---
title: "Ratio in nature and art"
---

# Ratio in nature and art

*Ratio, rates and money · level 8, lesson 6 of 6*

## A question to start

Take a sheet of A4 paper, the standard size in most of the world. Fold it in half. The half-sheet is A5, and it has
**exactly the same shape** as the A4 sheet, only smaller. Fold again: A6, same shape again. Put two A4 sheets side by
side: A3, the same shape once more.

Most rectangles do not behave like this. Fold a square in half and you get a long thin strip; fold a North American
letter-size sheet in half and you get a fatter shape. Which ratio of sides makes a rectangle keep its shape when
halved? And what about the famous "golden ratio", said to be hidden in shells, faces and Greek temples? This last
lesson of the topic looks at ratio as **shape**, with two special numbers, $\sqrt2$ and the golden ratio, and an honest
look at which of the stories about them are true.

## The idea

### Ratio as shape

Two rectangles have the **same shape** (they are **similar**, as in [Similar
triangles](../../geometry/level-7/01-similar-triangles.md)) exactly when the ratio of long side to short side is the
same. So "keeping its shape" is a statement about one ratio.

### A-series paper: the ratio $1 : \sqrt2$

Let a sheet have long side $L$ and short side $S$. Folding it in half across the long side gives a sheet with long side
$S$ and short side $\tfrac L2$. For the same shape, the ratios must match:

$$\frac{L}{S} = \frac{S}{L/2} = \frac{2S}{L}.$$

Cross multiply: $L^2 = 2S^2$, so $\dfrac{L}{S} = \sqrt2 \approx 1.414$. **Only the ratio $\sqrt2 : 1$ keeps its shape
when halved.** Since $\sqrt2$ is irrational ([why](../../numbers/level-6/03-root-two-irrational.md)), real sheets are
rounded to whole millimetres.

The international standard ISO 216 starts from **A0**, a sheet of area exactly 1 square metre with sides in the ratio
$\sqrt2 : 1$. If $S \times L = 1$ and $L = \sqrt2\,S$, then $\sqrt2\,S^2 = 1$, so

$$S = 2^{-1/4} \approx 0.8409 \text{ m}, \qquad L = 2^{1/4} \approx 1.1892 \text{ m}.$$

Rounded: A0 is 841 mm × 1189 mm. Each next size halves the longer side: A1 is 594 × 841, A2 420 × 594, A3 297 × 420,
**A4 210 × 297**, A5 148 × 210 (each rounded down to the millimetre).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 270" role="img" aria-label="An A0 rectangle with sides in ratio square root of 2 to 1, split in half into two A1 rectangles, one of which is split into two A2, one A2 split into two A3, and one A3 split into two A4, all the same shape">
  <rect x="20" y="20" width="336" height="237.6" fill="none" stroke="currentColor" stroke-width="2"/>
  <rect x="20" y="20" width="168" height="237.6" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <rect x="188" y="20" width="168" height="118.8" fill="#7ccf9a" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <rect x="188" y="138.8" width="84" height="118.8" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <rect x="272" y="138.8" width="84" height="59.4" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <rect x="272" y="198.2" width="42" height="59.4" fill="#7ccf9a" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <rect x="314" y="198.2" width="42" height="59.4" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="104" y="144" font-size="16" text-anchor="middle" fill="currentColor">A1</text>
  <text x="272" y="84" font-size="14" text-anchor="middle" fill="currentColor">A2</text>
  <text x="230" y="203" font-size="13" text-anchor="middle" fill="currentColor">A3</text>
  <text x="314" y="173" font-size="12" text-anchor="middle" fill="currentColor">A4</text>
  <text x="293" y="232" font-size="10" text-anchor="middle" fill="currentColor">A5</text>
  <text x="335" y="232" font-size="10" text-anchor="middle" fill="currentColor">A5</text>
</svg>
</div>

A photocopier's "141%" and "71%" buttons are $\sqrt2$ and $\tfrac{1}{\sqrt2}$: they turn A4 into A3 and A4 into A5 with
nothing cut off. Lengths scale by $\sqrt2$, so areas scale by 2, as they should for a sheet twice the size.

### The golden ratio

Divide a length into two parts, a longer part $a$ and a shorter part $b$, so that **the whole is to the longer part as
the longer part is to the shorter**:

$$\frac{a + b}{a} = \frac{a}{b}.$$

Call the ratio $\varphi = \tfrac ab$ (the Greek letter phi). The left side is $1 + \tfrac ba = 1 + \tfrac{1}{\varphi}$,
so $\varphi = 1 + \tfrac1\varphi$. Multiply by $\varphi$:

$$\varphi^2 = \varphi + 1, \qquad \varphi^2 - \varphi - 1 = 0.$$

The quadratic formula gives $\varphi = \tfrac{1 \pm \sqrt5}{2}$, and since a ratio of lengths is positive,

$$\varphi = \frac{1 + \sqrt5}{2} \approx 1.6180.$$

This is the **golden ratio**. Its equation gives it odd properties: $\varphi^2 = \varphi + 1 \approx 2.618$ and
$\tfrac{1}{\varphi} = \varphi - 1 \approx 0.618$. Squaring adds 1; taking the reciprocal subtracts 1.

### The golden rectangle

A **golden rectangle** has sides in the ratio $\varphi : 1$. Cut a square off one end, and the piece left over is
another golden rectangle. Proof: with sides $\varphi$ and 1, removing a $1 \times 1$ square leaves a rectangle with
sides 1 and $\varphi - 1$, whose ratio is $\tfrac{1}{\varphi - 1} = \tfrac{1}{1/\varphi} = \varphi$. So you can keep
cutting squares for ever.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 220" role="img" aria-label="A golden rectangle divided into a large square and a smaller golden rectangle, which is divided again into a square and a smaller golden rectangle, several times">
  <rect x="20" y="20" width="291.25" height="180" fill="none" stroke="currentColor" stroke-width="2"/>
  <rect x="20" y="20" width="180" height="180" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <rect x="200" y="20" width="111.25" height="111.25" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <rect x="242.5" y="131.25" width="68.75" height="68.75" fill="#7ccf9a" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <rect x="200" y="157.5" width="42.5" height="42.5" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <rect x="200" y="131.25" width="26.25" height="26.25" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <text x="110" y="115" font-size="14" text-anchor="middle" fill="currentColor">1 × 1</text>
  <text x="165" y="214" font-size="11" text-anchor="middle" fill="currentColor">φ ≈ 1.618</text>
  <text x="10" y="114" font-size="11" text-anchor="middle" fill="currentColor">1</text>
</svg>
</div>

### Fibonacci numbers lead to $\varphi$

The Fibonacci numbers 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ... add the two previous terms each time. The ratios
of neighbours are

$$\tfrac21 = 2,\ \tfrac32 = 1.5,\ \tfrac53 \approx 1.667,\ \tfrac85 = 1.6,\ \tfrac{13}{8} = 1.625,\ \tfrac{21}{13} \approx 1.6154,\ \tfrac{34}{21} \approx 1.6190,\ \tfrac{55}{34} \approx 1.6176,\ \tfrac{89}{55} \approx 1.6182.$$

They swing above and below, closing in on 1.6180. Here is why. Write $x_n = \tfrac{F_{n+1}}{F_n}$. Since
$F_{n+1} = F_n + F_{n-1}$,

$$x_n = 1 + \frac{F_{n-1}}{F_n} = 1 + \frac{1}{x_{n-1}}.$$

If the ratios settle to a limit $L$, it must satisfy $L = 1 + \tfrac1L$: the golden ratio's own equation. (Showing
that they do settle takes a little more work; it is a classic exercise on sequences.)

### What is true in nature

- **Sunflowers, pinecones, pineapples.** The spirals you can see in a sunflower head usually come in two families, and
  the numbers of spirals are very often neighbouring Fibonacci numbers, such as 34 and 55. A good explanation is that
  each new seed grows at about $137.5°$ from the last, the **golden angle** $\tfrac{360°}{\varphi^2}$, which packs seeds
  evenly with no gaps lining up. This is well supported by measurement and by models, though not every plant follows
  it.
- **The nautilus shell.** It is a real logarithmic spiral, but measurements show its growth ratio is **not** the golden
  ratio, and it varies from shell to shell. The "golden nautilus" is a myth.

### What is doubtful in art and architecture

- **The Parthenon** in Athens is often said to be built on golden rectangles. The claim is doubtful: the result depends
  on which edges and points you choose to measure, and there is no evidence that its builders used the golden ratio.
- Similar claims about the Great Pyramid, the Mona Lisa and the "perfect face" rest on the same loose measuring.
- Some modern designers really did use it on purpose. The architect Le Corbusier based his 20th-century "Modulor"
  system of proportions on the golden ratio. That is a true story about a choice, not a law of beauty.

Why are so many false claims made? Because with enough lengths to choose from, **some ratio near 1.6 is almost always
there to be found**. Anything between about 1.57 and 1.67 is within 3% of $\varphi$, and many everyday shapes fall in
that range. A claim is convincing only if the points are chosen **before** measuring and the match is close.

## Worked examples

**1. A4 from A0.** Each halving divides the long side by 2 and swaps the sides. Two halvings divide **both** sides by
2. So A4, four halvings from A0, has sides A0's divided by 4: $841 \div 4 \approx 210.25$ and $1189 \div 4 \approx
297.25$, which round to the official 210 mm × 297 mm. Check the ratio: $297 \div 210 \approx 1.414$. ✓

**2. A sheet's mass.** Office paper is often 80 g/m². A4 is $\tfrac{1}{16}$ of A0, so it has area $\tfrac{1}{16}$ m² and
mass $80 \div 16 = 5$ grams. (A0 has area 1 m² for exactly this convenience.)

**3. The golden rectangle check.** A rectangle is 1.618 by 1. Remove a 1 × 1 square: 1 by 0.618 is left, and
$1 \div 0.618 \approx 1.618$. ✓

**4. A doubtful match.** Someone measures a building 31 m wide and 19 m tall and announces the golden ratio.
$31 \div 19 \approx 1.632$, within 1% of $\varphi$. But had they measured to the roof edge instead, 31 by 20, they
would get 1.55. A ratio near 1.6 between two numbers someone has chosen after the fact is weak evidence of anything.

## Try it

1. Find the ratio of the sides of A3 (297 × 420 mm) and compare with $\sqrt2$.
2. What are the dimensions of A6, rounded down to the millimetre, starting from A5 (148 × 210)?
3. What enlargement, as a percent, turns A5 into A3?
4. Check numerically that $\varphi^2 = \varphi + 1$ and $\tfrac1\varphi = \varphi - 1$.
5. Find $\tfrac{144}{89}$ and $\tfrac{233}{144}$. Which side of $\varphi$ is each on?
6. A rectangle is 8 cm by 5 cm. Is it a golden rectangle? Can any rectangle with whole-number sides be exactly golden?
7. Letter-size paper is 8.5 by 11 inches. Fold it in half. Does it keep its shape? Find both ratios.
8. (Harder.) Show that $\varphi = 1 + \cfrac{1}{1 + \cfrac{1}{1 + \cdots}}$ follows from $\varphi = 1 + \tfrac1\varphi$, and
   that stopping this continued fraction after a few steps gives ratios of Fibonacci numbers.

??? note "Answers"
    1. $420 \div 297 \approx 1.4141$, against $\sqrt2 \approx 1.4142$. Equal to 3 decimal places.
    2. Halve the long side: $210 \div 2 = 105$. A6 is **105 × 148** mm.
    3. Two steps up, each $\times\sqrt2$: lengths $\times 2$, so **200%**.
    4. $\varphi \approx 1.618034$; $\varphi^2 \approx 2.618034 = \varphi + 1$ ✓; $\tfrac1\varphi \approx 0.618034 =
       \varphi - 1$ ✓.
    5. $144 \div 89 \approx 1.61798$, just **below** $\varphi$; $233 \div 144 \approx 1.61806$, just **above**.
    6. $8 \div 5 = 1.6$: close (they are Fibonacci numbers) but **not** golden. No whole-number rectangle can be exactly
       golden, because $\varphi = \tfrac{1 + \sqrt5}{2}$ is irrational, so it is not a ratio of two whole numbers.
    7. $11 \div 8.5 \approx 1.294$. The half-sheet is 8.5 by 5.5: $8.5 \div 5.5 \approx 1.545$. Different ratios, so it
       does **not** keep its shape.
    8. Replace the $\varphi$ in $1 + \tfrac1\varphi$ by $1 + \tfrac1\varphi$ again and again to get the continued
       fraction. Stopping early: $1$, $1 + \tfrac11 = 2$, $1 + \tfrac12 = \tfrac32$, $1 + \tfrac{1}{3/2} = \tfrac53$,
       $1 + \tfrac{3}{5} = \tfrac85$, ... each step is $x \mapsto 1 + \tfrac1x$, which is exactly the Fibonacci ratio
       rule, so the answers are $\tfrac{F_{n+1}}{F_n}$.

## Common mistake

**Seeing the golden ratio everywhere.** Measure enough things and some ratio will land near 1.618. Ask which points
were chosen, whether they were chosen before measuring, and how close the match really is.

**Thinking every paper size halves neatly.** Only the ratio $\sqrt2 : 1$ keeps its shape when halved. Letter-size paper
does not, which is why reducing two letter pages onto one sheet leaves margins.

## Where it leads

- Back: [Continuous compounding and the number e](05-continuous-e.md) · This is the last lesson of the Ratio topic.
- [Level 8 page](index.md) · [Ratio, rates and money topic page](../index.md)
- Similar shapes and scale factors: [Similar triangles](../../geometry/level-7/01-similar-triangles.md) and
  [Dilations and scale drawings](../../geometry/level-5/04-dilations-scale-drawings.md) in Geometry.
- Why $\sqrt2$ and $\sqrt5$ are irrational: [Root two is irrational](../../numbers/level-6/03-root-two-irrational.md).
  Fibonacci numbers and sequences defined by a rule: [Patterns](../../patterns/index.md).
- Proving that the Fibonacci ratios converge: [MAT137 Unit 11 (sequences)](../../../uoft/MAT137/unit11.md).
