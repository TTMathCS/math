# 4. Area and Pythagoras

*How much ground does a field cover, and how long is the diagonal across it? The first question is about area, the
second about length, and the most famous theorem in mathematics connects them: the square on the long side of a right
triangle has the same area as the squares on the other two sides together. This chapter says what area is, proves the
area formulas for the basic shapes by cutting and rearranging, proves Pythagoras' theorem in several different ways, finds
every whole-number right triangle, gives Heron's formula for the area of any triangle from its sides, and ends with a
surprising theorem: any two polygons with the same area can be cut into the same pieces.*

!!! abstract "In this chapter"

    **You will learn:**

    - what area is: the unit square, the rules every area obeys, and why rectangles have area base times height even
      when the sides are not whole numbers
    - the areas of the parallelogram, triangle, trapezoid and kite, each proved by cutting and rearranging
    - Pythagoras' theorem with several proofs (rearrangement and its algebraic form, Euclid's windmill, similar
      triangles, Garfield's trapezoid), its history, and uses from television screens to the horizon on Mars
    - the converse, and how side lengths tell acute, right and obtuse triangles apart
    - every Pythagorean triple from Euclid's formula, with a full proof, and the link with rational points on a circle
    - Heron's formula, proved
    - the Bolyai-Gerwien theorem: equal area means "cut into the same pieces"

    **You need:** [Chapters 1 to 3](03-Parallel-Lines-and-the-Angle-Sum.md), especially congruence (Chapter 2) and
    parallelograms and the angle sum (Chapter 3); some algebra (expanding brackets, square roots). For a gentler
    version, see the Topics lessons [Area by counting squares](../../topics/measurement/level-3/04-area-counting-squares.md),
    [Area of a parallelogram](../../topics/measurement/level-4/01-parallelogram-area.md),
    [Area of a triangle](../../topics/measurement/level-4/02-triangle-area.md),
    [Area of a trapezoid](../../topics/measurement/level-4/03-trapezoid-area.md),
    [The Pythagorean theorem: three proofs](../../topics/geometry/level-6/01-pythagorean-proofs.md) and
    [Using Pythagoras](../../topics/geometry/level-6/02-using-pythagoras.md).

    **Levels:** 4.1 to 4.4 are beginner to intermediate; 4.5 and 4.6 are intermediate; 4.7 is advanced.

## 4.1 What area is

### Counting squares

Area measures how much surface a flat shape covers. To measure length we lay a unit stick end to end; to measure area
we tile with a **unit square**, a square whose sides have length 1. A rectangle 5 units long and 3 units wide holds
3 rows of 5 unit squares, $5 \times 3 = 15$ of them, so its area is 15 square units.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 200" role="img" aria-label="Left: a 5 by 3 rectangle holds 15 unit squares. Right: cutting the unit square into 6 pieces of size one half by one third, a rectangle of sides 3/2 and 4/3 holds 12 of them, so its area is 12/6 = 2">
  <polygon points="15,160 51,160 51,124 15,124" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="15,124 51,124 51,88 15,88" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="15,88 51,88 51,52 15,52" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="51,160 87,160 87,124 51,124" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="51,124 87,124 87,88 51,88" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="51,88 87,88 87,52 51,52" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="87,160 123,160 123,124 87,124" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="87,124 123,124 123,88 87,88" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="87,88 123,88 123,52 87,52" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="123,160 159,160 159,124 123,124" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="123,124 159,124 159,88 123,88" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="123,88 159,88 159,52 123,52" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="159,160 195,160 195,124 159,124" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="159,124 195,124 195,88 159,88" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="159,88 195,88 195,52 159,52" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <text x="105" y="185" text-anchor="middle" font-size="14" fill="currentColor">5 × 3 = 15</text>
  <polygon points="250,160 295,160 295,130 250,130" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="250,130 295,130 295,100 250,100" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="250,100 295,100 295,70 250,70" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="250,70 295,70 295,40 250,40" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="295,160 340,160 340,130 295,130" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="295,130 340,130 340,100 295,100" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="295,100 340,100 340,70 295,70" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="295,70 340,70 340,40 295,40" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="340,160 385,160 385,130 340,130" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="340,130 385,130 385,100 340,100" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="340,100 385,100 385,70 340,70" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="340,70 385,70 385,40 340,40" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <polygon points="250,160 340,160 340,70 250,70" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <text x="300" y="120" text-anchor="middle" font-size="14" fill="currentColor">1</text>
  <text x="317.5" y="185" text-anchor="middle" font-size="14" fill="currentColor">3/2</text>
  <text x="407" y="105" text-anchor="middle" font-size="14" fill="currentColor">4/3</text>
</svg>
</div>

Units of area are squares of units of length: square centimetres ($\text{cm}^2$), square metres ($\text{m}^2$),
square kilometres ($\text{km}^2$). Because a metre is 100 centimetres, a square metre is $100 \times 100 = 10\,000$
square centimetres, not 100. A **hectare** is $100\ \text{m} \times 100\ \text{m} = 10\,000\ \text{m}^2$, and a
square kilometre is 100 hectares.

### The rules of area

What is area, exactly? Counting squares works for a 5 by 3 rectangle, but what about a triangle, which no number of
whole squares fits? The modern answer, like the answer for "point" and "line" in Chapter 1, is to say what area must
*do*. Every polygon (more generally, every reasonable region) $R$ has an area, a number written $[R]$ or
$\operatorname{area}(R)$, with these properties:

1. **Positive:** $[R] > 0$ for every polygon.
2. **Congruence:** congruent figures have equal areas.
3. **Addition:** if a region is cut into two pieces that overlap only along their edges, its area is the sum of the
   pieces' areas.
4. **Unit:** the unit square has area 1.

From rule 3 comes the principle that drives this whole chapter: **cutting a figure into pieces and rearranging them
(without overlap) does not change the total area.** Two figures that can be cut into pairwise congruent pieces have
equal areas.

It is a theorem, not obvious, that a function with these four properties exists for all polygons and is unique; it
can be proved from Hilbert's axioms, as Hartshorne's book (in Further reading) does. We will simply use the rules.

Area is not perimeter. A 1 by 9 rectangle and a 3 by 3 square both have area 9, but perimeters 20 and 12. A 1 by 5
rectangle and a 2 by 4 rectangle both have perimeter 12, but areas 5 and 8. Among all rectangles with a given
perimeter the square has the largest area (Exercise 12), and among all shapes with a given perimeter the circle has
the largest area, which is the *isoperimetric inequality*, much harder to prove.

### Rectangles with any sides

**Theorem 4.1.** A rectangle with sides $a$ and $b$ has area $ab$.

*Why, step by step.*

- *Whole numbers.* An $a$ by $b$ rectangle is cut by lines into $ab$ unit squares, and rule 3 adds them up.
- *Fractions.* Cut the unit square into $q$ equal strips one way and $s$ the other, making $qs$ congruent small
  rectangles of sides $1/q$ and $1/s$. By rules 2, 3 and 4, each has area $1/(qs)$. A rectangle with sides $p/q$ and
  $r/s$ is made of $p \times r$ of these, so its area is $pr/(qs) = (p/q)(r/s)$. In the figure, the unit square is cut
  into $2 \times 3 = 6$ pieces of size $\tfrac12 \times \tfrac13$, and a $\tfrac32 \times \tfrac43$ rectangle holds 12
  of them: area $12/6 = 2 = \tfrac32 \cdot \tfrac43$.
- *Any real numbers.* If $a$ or $b$ is irrational, like $\sqrt2$, no common unit fits. But a rectangle that contains
  another has the larger area (by rules 1 and 3), so for any fractions $a_1 < a < a_2$ and $b_1 < b < b_2$,
  $a_1 b_1 < [R] < a_2 b_2$. Fractions can be chosen as close to $a$ and $b$ as we like, which squeezes $[R]$ to $ab$.
  This last step uses the completeness of the real numbers, which the U of T guide
  [MAT158H1 Unit 2](../../uoft/MAT158H1/unit02.md) explains; it is the same idea that defines the integral in calculus.
  $\blacksquare$

The Greeks, who had no real numbers, avoided this step by never multiplying lengths: they compared areas with areas,
as Euclid's proof of Pythagoras will show.

## 4.2 Rectangle, parallelogram, triangle, trapezoid

### Parallelogram

A **height** (or altitude) of a parallelogram is the distance between two opposite sides, which is the same at every
point (Theorem 3.7). The side it is measured from is the **base**.

**Theorem 4.2.** A parallelogram with base $b$ and height $h$ has area $bh$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 470 190" role="img" aria-label="A parallelogram and the rectangle with the same base and height: each is the quadrilateral AC'CD with a congruent right triangle removed, so they have the same area, base times height">
  <polygon points="20,160 170,160 240,40 90,40" fill="#eea66f" fill-opacity="0.4" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="170,160 240,160 240,40" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <polygon points="20,160 90,160 90,40" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="90" y1="40" x2="90" y2="160" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <polyline points="98,160 98,152 90,152" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="240,152 232,152 232,160" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="20" cy="160" r="2.5" fill="currentColor"/>
  <text x="10" y="175.2" text-anchor="middle" font-size="15" fill="currentColor">A</text>
  <circle cx="170" cy="160" r="2.5" fill="currentColor"/>
  <text x="170" y="179.2" text-anchor="middle" font-size="15" fill="currentColor">B</text>
  <circle cx="240" cy="40" r="2.5" fill="currentColor"/>
  <text x="250" y="35.2" text-anchor="middle" font-size="15" fill="currentColor">C</text>
  <circle cx="90" cy="40" r="2.5" fill="currentColor"/>
  <text x="80" y="35.2" text-anchor="middle" font-size="15" fill="currentColor">D</text>
  <circle cx="90" cy="160" r="2.5" fill="currentColor"/>
  <text x="90" y="179.2" text-anchor="middle" font-size="15" fill="currentColor">D′</text>
  <circle cx="240" cy="160" r="2.5" fill="currentColor"/>
  <text x="248" y="179.2" text-anchor="middle" font-size="15" fill="currentColor">C′</text>
  <text x="100" y="104.9" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">h</text>
  <text x="65" y="178.9" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">b</text>
  <polygon points="290,160 440,160 440,40 290,40" fill="#eea66f" fill-opacity="0.4" stroke="currentColor" stroke-width="1.5"/>
  <text x="365" y="180" text-anchor="middle" font-size="14" fill="currentColor">b × h</text>
</svg>
</div>

*Proof.* Let the parallelogram be $ABCD$ with base $AB$ and leaning to the right, and let $D'$, $C'$ be the feet of
the perpendiculars from $D$ and $C$ to line $AB$. Then $D'C'CD$ is a rectangle with sides $DC = b$ and $h$, so it has
area $bh$. Look at the quadrilateral $AC'CD$. It can be cut in two ways:

- into the parallelogram $ABCD$ and the right triangle $BC'C$ (they meet along $BC$);
- into the right triangle $AD'D$ and the rectangle $D'C'CD$ (they meet along $DD'$).

The two right triangles are congruent: $AD = BC$ (opposite sides of a parallelogram), $DD' = CC' = h$, right angles at
$D'$ and $C'$, so HL applies (Theorem 2.4). Taking the triangle away from the same total leaves equal areas:
$[ABCD] = [D'C'CD] = bh$. $\blacksquare$

This proof works however far the parallelogram leans, which the usual "cut off a triangle and slide it across" proof
does not: if the lean is more than the base, the slid triangle does not fit, and you have to cut more pieces.

### Triangle

**Theorem 4.3.** A triangle with base $b$ and height $h$ (the perpendicular distance from the opposite vertex to the
line of the base) has area $\tfrac12 bh$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 470 170" role="img" aria-label="Left: two copies of a triangle make a parallelogram, so the triangle's area is half base times height. Right: two copies of a trapezoid, one turned over, make a parallelogram with base a + b">
  <polygon points="15,140 175,140 65,30" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="175,140 225,30 65,30" fill="#9cc9ea" fill-opacity="0.4" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="65" y1="30" x2="65" y2="140" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <polyline points="72,140 72,133 65,133" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="56" y="89.9" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">h</text>
  <text x="95" y="156.9" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">b</text>
  <polygon points="250,140 360,140 325,40 275,40" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="435,40 325,40 360,140 410,140" fill="#9cc9ea" fill-opacity="0.4" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="305" y="156.9" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">a</text>
  <text x="300" y="32.9" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">b</text>
  <text x="380" y="32.9" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">a</text>
  <text x="385" y="156.9" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">b</text>
</svg>
</div>

*Proof.* Take a second copy of triangle $ABC$, turned half a turn about the midpoint of $BC$. The two copies make a
quadrilateral $ABDC$ whose opposite sides are equal ($AB = DC$ and $AC = DB$, as matching sides of the copies), so it
is a parallelogram (Theorem 3.6), with base $b$ and height $h$. The triangle is half of it. $\blacksquare$

Any side can serve as the base, so a triangle has three base-height pairs, and all three products agree:

$$
[ABC] = \tfrac12 a h_a = \tfrac12 b h_b = \tfrac12 c h_c .
$$

**Worked example.** A right triangle has legs 6 and 8 and hypotenuse 10. Find the altitude to the hypotenuse. With
the legs as base and height, the area is $\tfrac12 \cdot 6 \cdot 8 = 24$. With the hypotenuse as base,
$24 = \tfrac12 \cdot 10 \cdot h$, so $h = 4.8$.

**Corollary 4.4 (Euclid I.37, I.38).** Triangles with the same base (or equal bases) whose third vertices lie on one
line parallel to the base have equal areas.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 170" role="img" aria-label="Triangles on the same base AB with their third vertices on a line parallel to AB all have the same height, so the same area">
  <line x1="20" y1="30" x2="420" y2="30" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="420,30 412.6,26.9 412.6,33.1" fill="currentColor" stroke="currentColor" stroke-width="1"/>
  <line x1="20" y1="140" x2="420" y2="140" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="420,140 412.6,136.9 412.6,143.1" fill="currentColor" stroke="currentColor" stroke-width="1"/>
  <polygon points="110,140 230,140 60,30" fill="#eea66f" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="60" cy="30" r="3" fill="currentColor"/>
  <polygon points="110,140 230,140 190,30" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="190" cy="30" r="3" fill="currentColor"/>
  <polygon points="110,140 230,140 370,30" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="370" cy="30" r="3" fill="currentColor"/>
  <circle cx="110" cy="140" r="2.5" fill="currentColor"/>
  <text x="104" y="159.2" text-anchor="middle" font-size="15" fill="currentColor">A</text>
  <circle cx="230" cy="140" r="2.5" fill="currentColor"/>
  <text x="236" y="159.2" text-anchor="middle" font-size="15" fill="currentColor">B</text>
</svg>
</div>

*Proof.* The third vertices are all the same distance from the base line (Theorem 3.7), so all the triangles have the
same base and the same height. $\blacksquare$

Sliding the top vertex along the parallel is called a **shear**. It changes the shape and keeps the area, and it is
the key move in Euclid's proof of Pythagoras below.

### Trapezoid

**Theorem 4.5.** A trapezoid with parallel sides $a$ and $b$ at distance $h$ apart has area $\tfrac12 (a + b) h$.

*Proof.* Turn a copy half a turn about the midpoint of one slanted side (right half of the figure above). The two
copies make a parallelogram with base $a + b$ and height $h$, area $(a + b) h$; the trapezoid is half. $\blacksquare$

The formula says: the area is the height times the *average* of the parallel sides. When $a = b$ it gives the
parallelogram, when $b = 0$ the triangle.

### Kites, rhombi and other polygons

If the diagonals of a quadrilateral are perpendicular, with lengths $d_1$ and $d_2$, the area is $\tfrac12 d_1 d_2$.
(One diagonal cuts it into two triangles with that diagonal as base; their heights add up to the other diagonal;
Exercise 10.) This covers every kite and rhombus. Any other polygon can be cut into triangles (Lemma 3.11), and its
area is the sum.

**Worked example.** Find the area of the triangle with vertices $(0, 0)$, $(7, 1)$ and $(3, 5)$. Put it in the
rectangle $[0, 7] \times [0, 5]$ of area 35 and subtract the three right triangles around it:
$\tfrac12 \cdot 7 \cdot 1 = 3.5$, $\tfrac12 \cdot 4 \cdot 4 = 8$ and $\tfrac12 \cdot 3 \cdot 5 = 7.5$. The area is
$35 - 19 = 16$.

**Try it in Python.** The same subtraction, done once in general, gives the **shoelace formula** for any polygon with
vertices $(x_1, y_1), \ldots, (x_n, y_n)$ listed in order: area $= \tfrac12 \left| \sum_i (x_i y_{i+1} - x_{i+1} y_i) \right|$, indices taken around the cycle. Chapter 8 proves it.

```python
def shoelace(pts):
    s = 0
    for (x1, y1), (x2, y2) in zip(pts, pts[1:] + pts[:1]):
        s += x1 * y2 - x2 * y1
    return abs(s) / 2

print(shoelace([(0, 0), (7, 1), (3, 5)]))          # 16.0
print(shoelace([(0, 0), (4, 0), (4, 3), (0, 3)]))  # 12.0
```

## 4.3 Pythagoras' theorem

**Theorem 4.6 (Pythagoras).** In a right triangle with legs $a$, $b$ and hypotenuse $c$,

$$
a^2 + b^2 = c^2 .
$$

In words: the square drawn on the hypotenuse has the same area as the two squares drawn on the legs together. That is
how the Greeks said it, and how most of the proofs see it.

This theorem uses the parallel postulate: every proof below relies, somewhere, on the angle sum or on parallelograms.
On a sphere it fails. A right triangle with all three sides a quarter of a great circle (the one in Chapter 3, which has
three right angles) has $a = b = c$, and $a^2 + b^2 = 2c^2 \ne c^2$.

### Proof 1: rearrangement

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 470 230" role="img" aria-label="Two squares of side a + b. Left: four copies of the right triangle leave a tilted square of area c squared. Right: the same four triangles leave squares of areas a squared and b squared. So c squared = a squared + b squared">
  <polygon points="15,215 75,215 15,75" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="215,215 215,155 75,215" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="215,15 155,15 215,155" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="15,15 15,75 155,15" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="75,215 215,155 155,15 15,75" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <text x="115" y="121.3" text-anchor="middle" font-size="18" fill="currentColor">c²</text>
  <polygon points="255,215 315,215 315,155 255,155" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="315,155 455,155 455,15 315,15" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="315,215 455,215 455,155" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="315,215 455,155 315,155" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="255,155 315,155 315,15" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="255,155 315,15 255,15" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.2"/>
  <text x="285" y="190.6" text-anchor="middle" font-size="16" fill="currentColor">a²</text>
  <text x="385" y="91.3" text-anchor="middle" font-size="18" fill="currentColor">b²</text>
  <text x="45" y="228.6" text-anchor="middle" font-size="13" font-style="italic" fill="currentColor">a</text>
  <text x="145" y="228.6" text-anchor="middle" font-size="13" font-style="italic" fill="currentColor">b</text>
  <text x="285" y="228.6" text-anchor="middle" font-size="13" font-style="italic" fill="currentColor">a</text>
  <text x="385" y="228.6" text-anchor="middle" font-size="13" font-style="italic" fill="currentColor">b</text>
</svg>
</div>

Draw two squares of side $a + b$. In the left one, place four copies of the triangle in the corners. Each side of the
big square is cut into pieces $a$ and $b$, and the four hypotenuses form a quadrilateral inside with all sides $c$.
Its angles are right angles: at each of its corners, the two acute angles of the triangle (which add to $90°$, by the
angle sum) and the corner of the inner figure make a straight line, so the corner is $180° - 90° = 90°$. So the inner
figure is a square of area $c^2$.

In the right square, place the same four triangles as two rectangles $a \times b$ in two corners. What is left is a
square of side $a$ and a square of side $b$.

Both big squares have the same area, and both contain four copies of the triangle. Take the triangles away:
$c^2 = a^2 + b^2$. $\blacksquare$

The same left-hand figure gives a one-line algebraic proof. The big square's area is $(a + b)^2$, and also the inner
square plus four triangles:

$$
(a + b)^2 = c^2 + 4 \cdot \tfrac12 ab \quad\Longrightarrow\quad a^2 + 2ab + b^2 = c^2 + 2ab \quad\Longrightarrow\quad a^2 + b^2 = c^2 .
$$

Versions of the rearrangement appear in the Chinese tradition (a figure of this kind, the *xian tu*, accompanies the
*Zhoubi Suanjing* in its later commentaries) and in the 12th-century Indian mathematician Bhāskara II, who arranged the
four triangles *inside* the square on $c$ around a small square of side $b - a$, and is said to have written only
"Behold!": $c^2 = 4 \cdot \tfrac12 ab + (b - a)^2 = a^2 + b^2$.

### Proof 2: Euclid's windmill (Elements I.47)

Euclid avoided algebra and areas as numbers entirely. His proof compares areas by shearing.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 383 420" role="img" aria-label="Euclid's proof: the altitude from the right angle C cuts the square on the hypotenuse AB into two rectangles. Triangle FBA (orange) is congruent to triangle CBD (blue); the first is half the square on CB and the second is half the rectangle PBDQ, so these have equal areas; the same on the other side">
  <polygon points="223,142.5 277.5,220.3 355.3,165.9 300.8,88" fill="#9cc9ea" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="223,142.5 108.3,222.8 28,108.1 142.7,27.8" fill="#7ccf9a" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="108.3,222.8 277.5,220.3 280,389.5 110.8,392" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="224.1,221.1 277.5,220.3 280,389.5 226.6,390.3" fill="#9cc9ea" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="108.3,222.8 224.1,221.1 226.6,390.3 110.8,392" fill="#7ccf9a" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="108.3,222.8 277.5,220.3 223,142.5" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="223" y1="142.5" x2="226.6" y2="390.3" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <polygon points="355.3,165.9 277.5,220.3 108.3,222.8" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="223,142.5 277.5,220.3 280,389.5" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="215.6,147.7 220.8,155.1 228.1,149.9" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="108.3" cy="222.8" r="2.5" fill="currentColor"/>
  <text x="96.3" y="224.1" text-anchor="middle" font-size="15" fill="currentColor">A</text>
  <circle cx="277.5" cy="220.3" r="2.5" fill="currentColor"/>
  <text x="291.5" y="223.6" text-anchor="middle" font-size="15" fill="currentColor">B</text>
  <circle cx="223" cy="142.5" r="2.5" fill="currentColor"/>
  <text x="223" y="133.8" text-anchor="middle" font-size="15" fill="currentColor">C</text>
  <circle cx="280" cy="389.5" r="2.5" fill="currentColor"/>
  <text x="290" y="404.8" text-anchor="middle" font-size="15" fill="currentColor">D</text>
  <circle cx="110.8" cy="392" r="2.5" fill="currentColor"/>
  <text x="100.8" y="407.2" text-anchor="middle" font-size="15" fill="currentColor">E</text>
  <circle cx="355.3" cy="165.9" r="2.5" fill="currentColor"/>
  <text x="367.3" y="165.1" text-anchor="middle" font-size="15" fill="currentColor">F</text>
  <circle cx="300.8" cy="88" r="2.5" fill="currentColor"/>
  <text x="304.8" y="79.3" text-anchor="middle" font-size="15" fill="currentColor">G</text>
  <circle cx="142.7" cy="27.8" r="2.5" fill="currentColor"/>
  <text x="130.7" y="23.1" text-anchor="middle" font-size="15" fill="currentColor">H</text>
  <circle cx="28" cy="108.1" r="2.5" fill="currentColor"/>
  <text x="14" y="113.4" text-anchor="middle" font-size="15" fill="currentColor">K</text>
  <circle cx="224.1" cy="221.1" r="2.5" fill="currentColor"/>
  <text x="232.1" y="214.4" text-anchor="middle" font-size="15" fill="currentColor">P</text>
  <circle cx="226.6" cy="390.3" r="2.5" fill="currentColor"/>
  <text x="226.6" y="409.6" text-anchor="middle" font-size="15" fill="currentColor">Q</text>
</svg>
</div>

Let the right angle be at $C$. Draw squares outward on all three sides: $CBFG$ on $CB$, $CAKH$ on $CA$, and $ABDE$ on
the hypotenuse $AB$. Draw the line from $C$ perpendicular to $AB$, meeting $AB$ at $P$ and $DE$ at $Q$; it cuts the
big square into two rectangles, $PBDQ$ and $APQE$. We show that the square $CBFG$ has the same area as the rectangle
$PBDQ$.

1. **The points $A$, $C$, $G$ are on one line**, because $\angle ACB$ and $\angle BCG$ are both right angles and
   together make $180°$.
2. **Triangle $FBA$ is congruent to triangle $CBD$.** $FB = CB$ (sides of one square), $BA = BD$ (sides of the other)
   and $\angle FBA = \angle CBD$, since each is a right angle plus $\angle CBA$. SAS.
3. **Triangle $FBA$ is half of square $CBFG$.** Its base is $FB$, and its third vertex $A$ is on line $GC$, which is
   parallel to $FB$. So it has the same base and height as triangle $FBC$, which is half the square (Corollary 4.4).
4. **Triangle $CBD$ is half of rectangle $PBDQ$.** Its base is $BD$ and its vertex $C$ is on line $PQ$, parallel to
   $BD$. Same argument.

So $[CBFG] = 2[FBA] = 2[CBD] = [PBDQ]$. In the same way (with triangles $KAB$ and $CAE$), $[CAKH] = [APQE]$. Adding,
$[CBFG] + [CAKH] = [ABDE]$, which is $a^2 + b^2 = c^2$. $\blacksquare$

The arrangement of squares is sometimes called the *windmill* or the *bride's chair*. The proof is long but it shows
more than the theorem: it shows exactly which piece of the big square matches each small square. And Euclid's very
next proposition, I.48, is the converse.

### Proof 3: similar triangles

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="The altitude CP from the right angle cuts triangle ABC into two smaller triangles, both similar to ABC; P divides the hypotenuse c into pieces p and q">
  <polygon points="20,185 101,185 101,29.4" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="101,185 400,185 101,29.4" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="96.4,38.2 105.3,42.8 109.9,34" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="109,185 109,177 101,177" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="20" cy="185" r="2.5" fill="currentColor"/>
  <text x="10" y="198.2" text-anchor="middle" font-size="15" fill="currentColor">A</text>
  <circle cx="400" cy="185" r="2.5" fill="currentColor"/>
  <text x="410" y="198.2" text-anchor="middle" font-size="15" fill="currentColor">B</text>
  <circle cx="101" cy="29.4" r="2.5" fill="currentColor"/>
  <text x="101" y="20.6" text-anchor="middle" font-size="15" fill="currentColor">C</text>
  <circle cx="101" cy="185" r="2.5" fill="currentColor"/>
  <text x="101" y="204.2" text-anchor="middle" font-size="15" fill="currentColor">P</text>
  <text x="50.5" y="104.1" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">b</text>
  <text x="260.5" y="104.1" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">a</text>
  <text x="60.5" y="201.9" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">q</text>
  <text x="250.5" y="201.9" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">p</text>
  <text x="92" y="112.1" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">h</text>
</svg>
</div>

Drop the altitude $CP$ from the right angle to the hypotenuse, cutting $c$ into $q = AP$ and $p = PB$. Each of the two
small triangles shares an acute angle with the big one ($ACP$ shares $\angle A$, $CBP$ shares $\angle B$) and has a
right angle, so by the angle sum its third angle matches too: all three triangles have the same angles. Triangles with
the same angles are **similar**: one is a scaled copy of the other, and the ratios of matching sides are equal (this
is AA similarity, proved in [Chapter 5](05-Similarity.md)). Matching the hypotenuse and the side next to $\angle A$ in
triangles $ACP$ and $ABC$:

$$
\frac{q}{b} = \frac{b}{c}, \quad\text{so}\quad b^2 = cq ; \qquad\text{likewise, from } CBP \text{ and } ABC, \quad a^2 = cp .
$$

Adding, $a^2 + b^2 = c(p + q) = c^2$. $\blacksquare$

There is an even shorter version using areas. The three similar triangles have hypotenuses $a$, $b$ and $c$, so their
areas are $ka^2$, $kb^2$ and $kc^2$ for the same constant $k$ (areas of similar figures scale as the square of the
size, Chapter 5). The two small ones make up the big one, so $ka^2 + kb^2 = kc^2$. Albert Einstein recalled in his
*Autobiographical Notes* that as a boy he found a proof based on the similarity of triangles.

### Proof 4: Garfield's trapezoid

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 290" role="img" aria-label="Garfield's trapezoid: two copies of the right triangle with legs a and b, and between them an isosceles right triangle with legs c, make a trapezoid with parallel sides a and b and height a + b">
  <polygon points="60,270 210,270 60,190" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="60,190 140,40 60,40" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="210,270 140,40 60,190" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="69,270 69,261 60,261" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="60,49 69,49 69,40" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="68.8,194.7 73.5,185.9 64.7,181.2" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="135" y="286.9" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">b</text>
  <text x="49" y="234.9" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">a</text>
  <text x="49" y="119.9" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">b</text>
  <text x="100" y="32.9" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">a</text>
  <text x="143" y="226.9" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">c</text>
  <text x="94" y="131.9" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">c</text>
</svg>
</div>

Put two copies of the triangle end to end, the first with leg $b$ along the bottom and leg $a$ up the left side, the
second standing on top of it with leg $b$ continuing up the left side and leg $a$ along the top. The two hypotenuses
meet at the point $M$ on the left side. The angle between them at $M$ is $180°$ minus the two acute angles of the
triangle, which add to $90°$, so it is $90°$. Joining the free ends of the hypotenuses makes a trapezoid with parallel
sides $a$ and $b$ (top and bottom) and height $a + b$. Its area, two ways:

$$
\tfrac12 (a + b)(a + b) = 2 \cdot \tfrac12 ab + \tfrac12 c^2 .
$$

Multiply by 2: $a^2 + 2ab + b^2 = 2ab + c^2$, so $a^2 + b^2 = c^2$. $\blacksquare$

This is exactly half of the rearrangement figure. It was published in 1876 in the *New-England Journal of Education*
by James A. Garfield, then a member of the U.S. House of Representatives, who became President in 1881.

### How many proofs?

Between them, the proofs above use congruence, area, shearing and similarity, which is why the theorem is so good for
learning geometry. Elisha Scott Loomis's book *The Pythagorean Proposition* (1927; second edition 1940) collected 367
proofs. Beware of one popular "proof" by trigonometry: the identity $\sin^2\theta + \cos^2\theta = 1$ is itself
usually proved from Pythagoras, so using it here would be arguing in a circle. An honest proof must start from
things proved without the theorem.

### History

Right triangles with whole-number sides and the rule itself are much older than Pythagoras.

- A Babylonian tablet from about 1800 to 1600 BC, Yale's *YBC 7289*, shows a square with its diagonals and the number
  $1;24,51,10$ in base 60, which is $1 + 24/60 + 51/60^2 + 10/60^3 \approx 1.41421296$, an approximation to $\sqrt2$
  correct to about six decimal places.
- Another tablet, *Plimpton 322* (about 1800 BC), lists pairs of numbers that are the short side and the diagonal of
  right triangles with whole-number sides, some of them large: one row has 12709 and 18541, and indeed
  $12709^2 + 13500^2 = 18541^2$. What the tablet was for is still debated.
- The Indian *Baudhāyana Śulbasūtra*, a manual for building fire altars (its date is uncertain, perhaps the first
  millennium BC), states that the diagonal of a rectangle produces as much as the two sides produce separately.
- The Chinese *Zhoubi Suanjing* and *The Nine Chapters on the Mathematical Art* (compiled by the 1st century AD)
  use the rule, called *gougu*, for surveying and give problems like the broken bamboo of Exercise 3.

Pythagoras himself (6th century BC) left no writings, and the stories connecting him with the theorem were written
centuries later. Euclid's proof (I.47) is the oldest surviving proof.

### Using Pythagoras

**Worked example (a screen).** A 55-inch television has a 55-inch diagonal and sides in the ratio $16 : 9$. With sides
$16k$ and $9k$, $(16k)^2 + (9k)^2 = 55^2$, so $337 k^2 = 3025$ and $k = 55 / \sqrt{337} \approx 2.996$. The screen is
about $47.9$ by $27.0$ inches.

**Worked example (a box).** The longest rod that fits in a box $3 \times 4 \times 12$ runs along the space diagonal.
The floor diagonal is $\sqrt{3^2 + 4^2} = 5$, and it forms a right triangle with the height 12, so the space
diagonal is $\sqrt{5^2 + 12^2} = 13$. In general it is $\sqrt{a^2 + b^2 + c^2}$.

**Worked example (distance on a grid).** The distance between $(1, 2)$ and $(7, 10)$ is the hypotenuse of a right
triangle with legs $7 - 1 = 6$ and $10 - 2 = 8$, so it is $\sqrt{36 + 64} = 10$. This is the distance formula of
Chapter 8: $\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.

**Worked example (how far is the horizon on Mars?).** Stand with your eyes $h$ above a smooth planet of radius $R$.
Your line of sight just touches the ground at the horizon point $T$, and a line that touches a circle is perpendicular
to the radius there (Chapter 6). So $O$, $E$ and $T$ form a right triangle with the right angle at $T$, hypotenuse
$OE = R + h$ and leg $OT = R$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 150" role="img" aria-label="Seeing to the horizon: the eye E at height h above a planet of radius R sees to the point T where the line of sight touches the ground; OT is perpendicular to ET, so ET squared = (R + h) squared minus R squared (height greatly exaggerated)">
  <path d="M 404 133 A 330 330 0 0 0 16 133" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="210" y1="35.9" x2="349.5" y2="100.9" stroke="currentColor" stroke-width="2"/>
  <line x1="349.5" y1="100.9" x2="331.3" y2="139.8" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="210" y1="35.9" x2="210" y2="116" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <polyline points="341.3,97.1 337.5,105.3 345.7,109.1" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="210" y1="35.9" x2="210" y2="70" stroke="currentColor" stroke-width="3"/>
  <circle cx="210" cy="35.9" r="2.5" fill="currentColor"/>
  <text x="210" y="27.1" text-anchor="middle" font-size="15" fill="currentColor">E</text>
  <circle cx="349.5" cy="100.9" r="2.5" fill="currentColor"/>
  <text x="361.5" y="112.2" text-anchor="middle" font-size="15" fill="currentColor">T</text>
  <circle cx="210" cy="70" r="2.5" fill="currentColor"/>
  <text x="200" y="57.8" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">h</text>
  <text x="346.9" y="132.7" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">R</text>
  <text x="270" y="146" text-anchor="middle" font-size="12" fill="currentColor">radii point to the centre O, far below</text>
</svg>
</div>

$$
ET^2 = (R + h)^2 - R^2 = 2Rh + h^2, \qquad ET = \sqrt{2Rh + h^2} \approx \sqrt{2Rh} .
$$

For eyes 1.7 m up on the Earth ($R = 6371$ km $= 6\,371\,000$ m), $ET = \sqrt{2 \cdot 6\,371\,000 \cdot 1.7 + 1.7^2} \approx 4654$ m, about 4.7 km. On Mars ($R = 3389.5$ km), the same person sees only about $3395$ m, 3.4 km: the
smaller planet curves away faster.
**Check:** the ratio $4654 / 3395 \approx 1.371$ should be $\sqrt{6371/3389.5} \approx 1.371$. It is.

### The diagonal of a square is not a fraction of its side

Pythagoras gives the diagonal of a unit square as $\sqrt2$. The discovery that this is not a ratio of whole numbers,
made by the Greeks perhaps in the 5th century BC, was a shock: it meant that the side and diagonal have no common
unit of measure, however small.

**Theorem 4.7.** $\sqrt2$ is irrational.

*Proof.* Suppose $\sqrt2 = m/n$ with whole numbers $m, n$ having no common factor. Then $m^2 = 2n^2$, so $m^2$ is
even, so $m$ is even (the square of an odd number is odd): $m = 2k$. Then $4k^2 = 2n^2$, $n^2 = 2k^2$, and $n$ is even
too, contradicting "no common factor". $\blacksquare$

This is why the "any real numbers" step of Theorem 4.1 is not a mere technicality, and why Chapter 5 has to work to
prove the intercept theorem for lengths without a common unit.

## 4.4 The converse

**Theorem 4.8 (Euclid I.48).** If the sides of a triangle satisfy $a^2 + b^2 = c^2$, then the angle opposite $c$ is a
right angle.

*Proof.* Build a right triangle with legs $a$ and $b$ (draw a right angle and mark off $a$ and $b$ on its arms). By
Pythagoras its hypotenuse is $\sqrt{a^2 + b^2} = c$. So it has the same three sides as the given triangle, and by SSS
the two are congruent. The angle opposite $c$ in the given triangle matches the right angle. $\blacksquare$

It is often said that Egyptian "rope-stretchers" made right angles with a rope knotted into 12 equal parts, pulled
into a 3-4-5 triangle. That is a modern guess (it goes back to the historian Moritz Cantor in the 19th century), not
something found in Egyptian sources. The method works, though, and builders still use it: measure 3 m along one wall
and 4 m along the other, and the corner is square when the diagonal is 5 m.

### Acute or obtuse from the sides

**Theorem 4.9.** In a triangle with longest side $c$:

- if $a^2 + b^2 > c^2$, the triangle is acute;
- if $a^2 + b^2 = c^2$, it is right;
- if $a^2 + b^2 < c^2$, it is obtuse.

*Proof.* Compare the triangle with the right triangle with the same legs $a$, $b$, whose hypotenuse is
$c_0 = \sqrt{a^2 + b^2}$. Both have sides $a$ and $b$; the angle between them is $\gamma$ in our triangle and $90°$
in the other. By the hinge theorem (Theorem 2.14) and its converse, $\gamma > 90°$ exactly when $c > c_0$, that is
$c^2 > a^2 + b^2$; and $\gamma < 90°$ exactly when $c^2 < a^2 + b^2$. Since $c$ is the longest side, $\gamma$ is the
largest angle (Theorem 2.10), so the triangle is acute exactly when $\gamma$ is. $\blacksquare$

The law of cosines (Chapter 7), $c^2 = a^2 + b^2 - 2ab\cos\gamma$, says the same thing with a number attached: the
"error" $a^2 + b^2 - c^2$ is $2ab\cos\gamma$.

**Worked example.** Classify the triangles with sides (a) $8, 15, 17$; (b) $6, 9, 11$; (c) $7, 9, 11$.
(a) $64 + 225 = 289 = 17^2$: right. (b) $36 + 81 = 117 < 121$: obtuse. (c) $49 + 81 = 130 > 121$: acute.

## 4.5 Pythagorean triples

*Level: intermediate.*

A **Pythagorean triple** is three positive whole numbers $(a, b, c)$ with $a^2 + b^2 = c^2$: the sides of a right
triangle with whole-number sides. $(3, 4, 5)$ is the smallest. Multiplying a triple by any whole number gives another,
$(6, 8, 10)$, $(9, 12, 15)$, ..., so the interesting ones are the **primitive** triples, whose three numbers have no
common factor.

### Euclid's formula

For whole numbers $m > n > 0$,

$$
a = m^2 - n^2, \qquad b = 2mn, \qquad c = m^2 + n^2
$$

is always a triple, because

$$
(m^2 - n^2)^2 + (2mn)^2 = m^4 - 2m^2n^2 + n^4 + 4m^2n^2 = m^4 + 2m^2n^2 + n^4 = (m^2 + n^2)^2 .
$$

| $m$ | $n$ | $a = m^2 - n^2$ | $b = 2mn$ | $c = m^2 + n^2$ |
| --- | --- | --- | --- | --- |
| 2 | 1 | 3 | 4 | 5 |
| 3 | 2 | 5 | 12 | 13 |
| 4 | 1 | 15 | 8 | 17 |
| 4 | 3 | 7 | 24 | 25 |
| 5 | 2 | 21 | 20 | 29 |
| 5 | 4 | 9 | 40 | 41 |
| 6 | 1 | 35 | 12 | 37 |
| 6 | 5 | 11 | 60 | 61 |

The big Plimpton 322 triple comes from $m = 125$, $n = 54$: $125^2 - 54^2 = 12709$, $2 \cdot 125 \cdot 54 = 13500$,
$125^2 + 54^2 = 18541$.

The formula appears in Euclid's Book X (as a lemma on finding two square numbers whose sum is a square). The
remarkable fact is that it gives *every* primitive triple.

**Theorem 4.10.** The primitive Pythagorean triples $(a, b, c)$ with $b$ even are exactly those given by Euclid's
formula with $m > n > 0$, $m$ and $n$ having no common factor, and one of them even and the other odd.

*Proof.* We need two facts about whole numbers: a square leaves remainder 0 or 1 when divided by 4 (since
$(2k)^2 = 4k^2$ and $(2k+1)^2 = 4(k^2 + k) + 1$); and if two numbers with no common factor multiply to a perfect
square, each of them is a perfect square (each prime appears an even number of times in the square and all of its
copies sit in one of the two factors; this uses unique factorisation into primes, see the Algebra book's
[Chapter 18](../algebra/18-Factorization-in-Rings.md)).

*Every primitive triple has this form.* Let $(a, b, c)$ be primitive.

1. $a$ and $b$ are not both even: then $c^2 = a^2 + b^2$ would be even, so $c$ even, and 2 would divide all three.
2. $a$ and $b$ are not both odd: then $a^2 + b^2$ would leave remainder $1 + 1 = 2$ on division by 4, which no square
   does.
3. So exactly one is even; call it $b$. Then $a$ is odd and $c$ is odd.
4. Write $b^2 = c^2 - a^2 = (c + a)(c - a)$. Both $c + a$ and $c - a$ are even (odd plus or minus odd), so
   $u = (c + a)/2$ and $v = (c - a)/2$ are whole numbers, and $(b/2)^2 = uv$.
5. $u$ and $v$ have no common factor: any number dividing both divides $u + v = c$ and $u - v = a$, and then (since
   $b^2 = c^2 - a^2$) it divides $b$ as well; the triple is primitive, so that number is 1.
6. So $u$ and $v$ are coprime with a square product: $u = m^2$ and $v = n^2$ for whole numbers $m > n > 0$. Then
   $c = u + v = m^2 + n^2$, $a = u - v = m^2 - n^2$, and $b = 2\sqrt{uv} = 2mn$.
7. $m$ and $n$ have no common factor (one would divide $u$ and $v$), and they are not both odd (then $c = m^2 + n^2$
   would be even). They are not both even either. So one is even and one is odd.

*Every such $m, n$ give a primitive triple.* We showed it is a triple. If a prime $p$ divided $a$, $b$ and $c$, it
would divide $c + a = 2m^2$ and $c - a = 2n^2$. Since $m$, $n$ have opposite parity, $c$ is odd and $p \ne 2$, so $p$
divides $m^2$ and $n^2$, hence $m$ and $n$, a contradiction. $\blacksquare$

**Worked example.** List the primitive triples with $c < 30$. We need $m^2 + n^2 < 30$ with the conditions: $(2,1)$,
$(3,2)$, $(4,1)$, $(4,3)$, $(5,2)$. They give $(3,4,5)$, $(5,12,13)$, $(15,8,17)$, $(7,24,25)$, $(21,20,29)$. Those are
all.

**Try it in Python.**

```python
from math import gcd

def primitive_triples(cmax):
    out = []
    m = 2
    while m * m + 1 < cmax:
        for n in range(1, m):
            if (m - n) % 2 == 1 and gcd(m, n) == 1 and m*m + n*n < cmax:
                a, b, c = m*m - n*n, 2*m*n, m*m + n*n
                out.append((min(a, b), max(a, b), c))
        m += 1
    return sorted(out, key=lambda t: t[2])

print(primitive_triples(30))
# [(3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25), (20, 21, 29)]
```

### Triples and rational points on the circle

Divide $a^2 + b^2 = c^2$ by $c^2$: $(a/c)^2 + (b/c)^2 = 1$. So every triple gives a point with fraction coordinates on
the unit circle $x^2 + y^2 = 1$, and every such point gives a triple (clear the denominators). Finding triples is the
same as finding the **rational points** on the circle, and there is a beautiful geometric way to find them all.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 280" role="img" aria-label="Rational points on the unit circle: the line through (-1, 0) with slope t meets the circle again at ((1 - t^2)/(1 + t^2), 2t/(1 + t^2)); for t = 1/2 this is (3/5, 4/5)">
  <line x1="20" y1="150" x2="285" y2="150" stroke="currentColor" stroke-width="1"/>
  <line x1="150" y1="272" x2="150" y2="25" stroke="currentColor" stroke-width="1"/>
  <circle cx="150" cy="150" r="110" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="25.9" y1="157" x2="260" y2="40" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="40" cy="150" r="2.5" fill="currentColor"/>
  <text x="34" y="170.6" text-anchor="middle" font-size="13" fill="currentColor">(−1, 0)</text>
  <circle cx="216" cy="62" r="2.5" fill="currentColor"/>
  <text x="246" y="54.6" text-anchor="middle" font-size="13" fill="currentColor">(3/5, 4/5)</text>
  <line x1="216" y1="62" x2="216" y2="150" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="60" y="35" text-anchor="middle" font-size="13" fill="currentColor">slope t = 1/2</text>
</svg>
</div>

Draw a line through the point $(-1, 0)$ with slope $t$: $y = t(x + 1)$. It crosses the circle at one more point. Put
$y = t(x + 1)$ into $x^2 + y^2 = 1$:

$$
(1 + t^2) x^2 + 2t^2 x + (t^2 - 1) = 0 .
$$

One root is $x = -1$ (we know the line passes there). The product of the two roots of a quadratic is the constant
term over the leading coefficient, $(t^2 - 1)/(1 + t^2)$, so the other root is

$$
x = \frac{1 - t^2}{1 + t^2}, \qquad y = t(x + 1) = \frac{2t}{1 + t^2} .
$$

If $t$ is a fraction, so are $x$ and $y$. Conversely, if $(x, y)$ is a rational point other than $(-1, 0)$, the slope
$t = y / (x + 1)$ of the line joining it to $(-1, 0)$ is a fraction. So the rational points correspond exactly to the
rational slopes. Writing $t = n/m$ gives $x = (m^2 - n^2)/(m^2 + n^2)$ and $y = 2mn/(m^2 + n^2)$: Euclid's formula
again. For $t = 1/2$: $(3/5, 4/5)$, the $3, 4, 5$ triangle.

This "draw a line through a known point" idea is the start of the arithmetic of curves. For the cubic curves called
elliptic curves the same move adds points, which is the basis of modern elliptic-curve cryptography (see the
[cryptography book](https://cryptography.akadian.ca/book/)).

### Beyond squares

Pierre de Fermat wrote in the margin of his copy of Diophantus's *Arithmetica*, around 1637, that $x^n + y^n = z^n$ has
no solution in positive whole numbers for any exponent $n \ge 3$, and that he had a marvellous proof which the margin
was too small to contain. He did prove the case $n = 4$, by showing that the area of a Pythagorean triangle can never
be a perfect square. The full statement, *Fermat's Last Theorem*, was proved by Andrew Wiles in 1995, with a key step
completed jointly with Richard Taylor, using elliptic curves and modular forms; it is one of the great achievements of
20th-century mathematics.

A related question is still open. A whole number $n$ is a **congruent number** if it is the area of a right triangle
with fraction sides. $6$ is (the $3, 4, 5$ triangle), and so is $5$: the triangle with sides $3/2$, $20/3$, $41/6$
has area 5 (check: $(3/2)^2 + (20/3)^2 = 9/4 + 400/9 = 1681/36 = (41/6)^2$). Fermat's $n = 4$ argument shows that 1 is
not. Jerrold Tunnell gave a simple test in 1983, but its proof that the test always works depends on the
Birch and Swinnerton-Dyer conjecture, one of the Millennium Prize problems.

## 4.6 Heron's formula

*Level: intermediate.*

A surveyor can measure the three sides of a triangular field with a tape, but finding a height means making a right
angle in the middle of the field. Can the area be computed from the sides alone?

**Theorem 4.11 (Heron's formula).** A triangle with sides $a$, $b$, $c$ and **semi-perimeter** $s = \tfrac12(a + b + c)$ has area

$$
[ABC] = \sqrt{s(s - a)(s - b)(s - c)} .
$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 190" role="img" aria-label="For Heron's formula: the altitude h from C meets AB at H, splitting c into x and c - x; then h squared = b squared - x squared = a squared - (c - x) squared">
  <polygon points="20,160 380,160 130,30" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <line x1="130" y1="30" x2="130" y2="160" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <polyline points="138,160 138,152 130,152" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="20" cy="160" r="2.5" fill="currentColor"/>
  <text x="10" y="173.2" text-anchor="middle" font-size="15" fill="currentColor">A</text>
  <circle cx="380" cy="160" r="2.5" fill="currentColor"/>
  <text x="390" y="173.2" text-anchor="middle" font-size="15" fill="currentColor">B</text>
  <circle cx="130" cy="30" r="2.5" fill="currentColor"/>
  <text x="130" y="21.2" text-anchor="middle" font-size="15" fill="currentColor">C</text>
  <circle cx="130" cy="160" r="2.5" fill="currentColor"/>
  <text x="130" y="179.2" text-anchor="middle" font-size="15" fill="currentColor">H</text>
  <text x="65" y="91.9" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">b</text>
  <text x="263" y="89.9" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">a</text>
  <text x="75" y="176.9" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">x</text>
  <text x="255" y="176.9" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">c − x</text>
  <text x="139" y="99.9" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">h</text>
</svg>
</div>

*Proof.* Drop the altitude $h$ from $C$ to the line $AB$, with foot $H$, and let $x = AH$, measured as positive in the
direction of $B$ (if the angle at $A$ is obtuse, $H$ lies beyond $A$ and $x$ is negative; the algebra below does not
care). By Pythagoras in the two right triangles $AHC$ and $BHC$,

$$
h^2 = b^2 - x^2 = a^2 - (c - x)^2 .
$$

Expanding the right side, $b^2 - x^2 = a^2 - c^2 + 2cx - x^2$, so $x = \dfrac{b^2 + c^2 - a^2}{2c}$. Now

$$
16\,[ABC]^2 = 4c^2 h^2 = 4c^2 (b^2 - x^2) = (2cb)^2 - (2cx)^2 = (2bc)^2 - (b^2 + c^2 - a^2)^2 .
$$

This is a difference of two squares, and so is each factor that comes out:

$$
\begin{aligned}
(2bc)^2 - (b^2 + c^2 - a^2)^2 &= \bigl(2bc - b^2 - c^2 + a^2\bigr)\bigl(2bc + b^2 + c^2 - a^2\bigr) \\
&= \bigl(a^2 - (b - c)^2\bigr)\bigl((b + c)^2 - a^2\bigr) \\
&= (a - b + c)(a + b - c)(b + c - a)(b + c + a) .
\end{aligned}
$$

With $a + b + c = 2s$, the four factors are $2(s - b)$, $2(s - c)$, $2(s - a)$ and $2s$. So
$16[ABC]^2 = 16\, s(s - a)(s - b)(s - c)$, and taking square roots gives the formula. $\blacksquare$

**Worked examples.**

- $3, 4, 5$: $s = 6$, area $= \sqrt{6 \cdot 3 \cdot 2 \cdot 1} = \sqrt{36} = 6$. **Check:** $\tfrac12 \cdot 3 \cdot 4 = 6$.
- $13, 14, 15$: $s = 21$, area $= \sqrt{21 \cdot 8 \cdot 7 \cdot 6} = \sqrt{7056} = 84$.
- $5, 5, 6$: $s = 8$, area $= \sqrt{8 \cdot 3 \cdot 3 \cdot 2} = \sqrt{144} = 12$. **Check:** the altitude to the base
  6 is $\sqrt{25 - 9} = 4$, and $\tfrac12 \cdot 6 \cdot 4 = 12$.
- $7, 8, 9$: $s = 12$, area $= \sqrt{12 \cdot 5 \cdot 4 \cdot 3} = \sqrt{720} = 12\sqrt5 \approx 26.83$.
- $3, 4, 7$: $s = 7$, and $s - c = 0$: area 0. The "triangle" is flat, as the triangle inequality warned
  ($3 + 4 = 7$).

Triangles like $13, 14, 15$, with whole-number sides and whole-number area, are called **Heronian**.

The formula appears in the *Metrica* of Heron of Alexandria (1st century AD), with a proof. The Persian scholar
al-Bīrūnī later credited it to Archimedes, but no work of Archimedes containing it survives. Brahmagupta (7th century
India) gave the four-sided version: a quadrilateral whose vertices lie on a circle, with sides $a, b, c, d$ and
semi-perimeter $s$, has area $\sqrt{(s-a)(s-b)(s-c)(s-d)}$ (Chapter 6). Setting $d = 0$ gives Heron.

**Try it in Python.** For a very thin triangle, the textbook formula loses accuracy, because $s$ and $s - a$ are nearly
equal. William Kahan's rearrangement (sort so that $a \ge b \ge c$, and keep the brackets exactly as written) is
accurate for all triangles:

```python
from math import sqrt

def heron(a, b, c):
    s = (a + b + c) / 2
    return sqrt(s * (s - a) * (s - b) * (s - c))

def heron_kahan(a, b, c):
    a, b, c = sorted((a, b, c), reverse=True)
    return sqrt((a + (b + c)) * (c - (a - b)) * (c + (a - b)) * (a + (b - c))) / 4

print(heron(13, 14, 15), heron_kahan(13, 14, 15))   # 84.0 84.0
```

## 4.7 Bolyai-Gerwien: equal area means equal pieces

*Level: advanced.*

We have shown that cutting and rearranging keeps area. Is the converse true? If two polygons have the same area, can
the first always be cut into finitely many polygonal pieces that rearrange to make the second?

Call two polygons **scissors-congruent** (or *equidecomposable*) if one can be cut into finitely many polygons that,
moved by rigid motions, fit together exactly to form the other.

**Theorem 4.12 (Wallace-Bolyai-Gerwien).** Two polygons are scissors-congruent if and only if they have the same area.

One direction is the addition rule. For the other, here is the proof, in five steps. Each step is a short argument;
the theorem comes from chaining them.

**Step 1: scissors-congruence is transitive.** If $P$ can be cut and rearranged into $Q$, and $Q$ into $R$, then $P$
into $R$. Draw *both* sets of cuts on $Q$: the cuts that came from $P$ and the cuts that will make $R$. Together they
cut $Q$ into smaller polygons, each of which lies inside one piece of each decomposition. Carry these small pieces
back into $P$ (each sits inside one of $P$'s pieces) and forward into $R$. So $P$ and $R$ are cut into the same small
pieces.

**Step 2: every polygon is a union of triangles.** By Lemma 3.11.

**Step 3: every triangle is scissors-congruent to a rectangle.** Cut along the segment joining the midpoints $M$, $N$
of two sides, and drop the perpendicular from the apex to $MN$. The two small right triangles turn half a turn about
$M$ and $N$ and fill the corners, making a rectangle with the same base and half the height.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 470 200" role="img" aria-label="Cutting a triangle into a rectangle: cut along the line joining the midpoints of two sides, then drop perpendiculars from the apex; the three pieces turn into a rectangle with the same base and half the height">
  <polygon points="20,170 200,170 140,100 50,100" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="50,100 80,100 80,30" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="80,100 140,100 80,30" fill="#7ccf9a" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="20" cy="170" r="2.5" fill="currentColor"/>
  <text x="12" y="185.2" text-anchor="middle" font-size="15" fill="currentColor">A</text>
  <circle cx="200" cy="170" r="2.5" fill="currentColor"/>
  <text x="208" y="185.2" text-anchor="middle" font-size="15" fill="currentColor">B</text>
  <circle cx="80" cy="30" r="2.5" fill="currentColor"/>
  <text x="80" y="21.2" text-anchor="middle" font-size="15" fill="currentColor">C</text>
  <circle cx="50" cy="100" r="2.5" fill="currentColor"/>
  <text x="38" y="101.2" text-anchor="middle" font-size="15" fill="currentColor">M</text>
  <circle cx="140" cy="100" r="2.5" fill="currentColor"/>
  <text x="152" y="101.2" text-anchor="middle" font-size="15" fill="currentColor">N</text>
  <polygon points="270,170 450,170 390,100 300,100" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="300,100 270,100 270,170" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="450,100 390,100 450,170" fill="#7ccf9a" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <line x1="215" y1="100" x2="245" y2="100" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="245,100 237.6,96.9 237.6,103.1" fill="currentColor" stroke="currentColor" stroke-width="1"/>
</svg>
</div>

(Choose the longest side as the base, so that the foot of the perpendicular falls between $M$ and $N$.)

**Step 4: every rectangle is scissors-congruent to a rectangle of width 1.** Take an $x \times y$ rectangle.

- *Adjust the shape.* Cutting a rectangle in half and putting the halves end to end turns $x \times y$ into
  $2x \times \tfrac y2$. Doing this (in whichever direction is needed) a few times, we reach an $a \times b$
  rectangle with $a \ge 1 \ge b$.
- *Lean it.* Let $d = \sqrt{1 - b^2}$, so $d \le 1 \le a$. Cut off a right triangle with legs $b$ (up the end) and
  $d$ (along the bottom) at one end, and slide it to the other end. The result is a parallelogram with base $a$,
  height $b$, and slanted sides of length $\sqrt{b^2 + d^2} = 1$.
- *Straighten it.* Now regard a slanted side, of length 1, as the base. The height over that base is $ab$ (area
  divided by base). Slice the parallelogram, by lines parallel to this base, into $k$ thin parallelograms; each leans
  over by only $1/k$ of the total, so for $k$ large enough each leans by less than its base, and one cut and slide
  (as in 4.2) makes it a $1 \times \tfrac{ab}{k}$ rectangle. Stacking the $k$ rectangles gives $1 \times ab$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 470 185" role="img" aria-label="Changing a rectangle's width: cut a right triangle off one end and slide it to the other, making a parallelogram whose slanted side has the chosen length w; then cut that parallelogram into a rectangle of width w with the same area">
  <polygon points="15,155 95,95 15,95" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <polygon points="15,155 195,155 195,95 95,95" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="195,155 275,95 195,95" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/>
  <line x1="195" y1="155" x2="195" y2="95" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="63" y="135.9" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">w</text>
  <text x="105" y="171.9" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">a</text>
  <text x="6" y="129.9" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">b</text>
  <line x1="300" y1="115" x2="330" y2="115" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="330,115 322.6,111.9 322.6,118.1" fill="currentColor" stroke="currentColor" stroke-width="1"/>
  <polygon points="345,155 445,155 445,47 345,47" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <text x="395" y="171.9" text-anchor="middle" font-size="14" font-style="italic" fill="currentColor">w</text>
  <text x="395" y="106" text-anchor="middle" font-size="13" fill="currentColor">area ab</text>
</svg>
</div>

**Step 5: stack.** Each triangle of the polygon is now a rectangle of width 1, with height equal to its area. Stack
them: the polygon is scissors-congruent to a $1 \times A$ rectangle, where $A$ is its area. Two polygons of the same
area are both scissors-congruent to the same $1 \times A$ rectangle, so, by step 1, to each other. $\blacksquare$

Step 4 is where the care goes: a single slide only works when the lean is not too great, which is why the shape is
adjusted first and the last parallelogram is sliced into strips. Hartshorne's book writes the whole argument out.

The theorem was proved by John Lowry in 1814, answering a question of William Wallace, and again by Farkas Bolyai
(father of János Bolyai of Chapter 15) in 1832 and by Paul Gerwien in 1833. It can be done with remarkably few pieces
in particular cases: Henry Dudeney's "haberdasher's puzzle", published in *The Canterbury Puzzles* (1907), cuts an
equilateral triangle into just four pieces that rearrange into a square.

Two famous questions grew from this theorem.

- **In three dimensions it fails.** In 1900 David Hilbert asked, as the third of his 23 problems, whether two
  polyhedra of equal volume can always be cut into the same pieces. His student Max Dehn soon showed that they
  cannot: a cube and a regular tetrahedron of equal volume are not scissors-congruent. Dehn found a second
  quantity, beyond volume, that cutting preserves. Chapter 11 explains the *Dehn invariant*.
- **Squaring the circle by cutting.** A circle is not a polygon, and no finite cutting into pieces with straight or
  curved edges turns a disc into a square. But in 1925 Alfred Tarski asked whether it could be done with arbitrary
  (wild) sets as pieces, moved only by sliding. Miklós Laczkovich proved in 1990 that it can, with about $10^{50}$
  pieces that are far too wild to draw; later work has made the pieces much better behaved. The classical problem of
  squaring the circle *with compass and straightedge* is impossible, as Chapter 14 shows.

## Check yourself

??? question "1. A parallelogram has sides 12 and 9 and the height to the side 12 is 7. Find its area and the height to the side 9."

    Area $= 12 \times 7 = 84$. With base 9, $84 = 9h$, so $h = 84/9 = 28/3 \approx 9.33$. (It is longer than 7
    because the side 9 is shorter; the area is the same either way.)

??? question "2. A trapezoid has parallel sides 8 and 14, 5 apart. Find its area."

    $\tfrac12 (8 + 14) \times 5 = 11 \times 5 = 55$.

??? question "3. (Nine Chapters style) A bamboo 10 feet tall is broken so that its top touches the ground 3 feet from the foot. How high is the break?"

    Let the break be at height $x$. The broken part, of length $10 - x$, is the hypotenuse of a right triangle with legs
    $x$ and 3: $x^2 + 9 = (10 - x)^2 = 100 - 20x + x^2$, so $20x = 91$ and $x = 4.55$ feet. **Check:** $4.55^2 + 9 = 29.7025$ and $5.45^2 = 29.7025$.

??? question "4. A right triangle has legs 9 and 40. Find the hypotenuse and the altitude to the hypotenuse."

    $c = \sqrt{81 + 1600} = \sqrt{1681} = 41$. Area $= \tfrac12 \cdot 9 \cdot 40 = 180 = \tfrac12 \cdot 41 \cdot h$, so
    $h = 360/41 \approx 8.78$.

??? question "5. Use Euclid's formula with m = 7, n = 4. Is the triple primitive? Which (m, n) gives (20, 21, 29)?"

    $a = 49 - 16 = 33$, $b = 56$, $c = 65$. **Check:** $33^2 + 56^2 = 1089 + 3136 = 4225 = 65^2$. It is primitive,
    since 7 and 4 are coprime and of opposite parity. For $(20, 21, 29)$ the even leg is $20 = 2mn$, so $mn = 10$, and
    $m^2 + n^2 = 29$: $m = 5$, $n = 2$.

??? question "6. Classify by angles: (a) 10, 24, 26; (b) 4, 5, 6; (c) 2, 3, 4."

    (a) $100 + 576 = 676 = 26^2$: right. (b) $16 + 25 = 41 > 36$: acute. (c) $4 + 9 = 13 < 16$: obtuse.

??? question "7. Find the area of the triangle with sides 5, 6, 7."

    $s = 9$, area $= \sqrt{9 \cdot 4 \cdot 3 \cdot 2} = \sqrt{216} = 6\sqrt6 \approx 14.70$.

??? question "8. Olympus Mons, the great volcano of Mars, rises about 21.9 km above the surrounding datum. Ignoring the volcano's own shape, how far away is the horizon from its summit?"

    $\sqrt{2Rh + h^2}$ with $R = 3389.5$ km, $h = 21.9$ km: $\sqrt{148\,460 + 480} \approx \sqrt{148\,940} \approx 386$ km.
    In reality the volcano's slopes are so gentle and its base so wide (about 600 km across) that from the summit you
    would see mostly the volcano itself.

??? question "9. Find the length of the space diagonal of a 2 × 3 × 6 box."

    $\sqrt{4 + 9 + 36} = \sqrt{49} = 7$.

??? question "10. Prove that a quadrilateral whose diagonals are perpendicular, with lengths d₁ and d₂, has area ½ d₁ d₂."

    Let the diagonals be $AC = d_1$ and $BD = d_2$, crossing at right angles at $M$ (for a convex quadrilateral).
    Diagonal $AC$ cuts the quadrilateral into triangles $ABC$ and $ADC$ with the common base $AC$. Their heights are
    $BM$ and $DM$, because $BD \perp AC$. So the area is $\tfrac12 d_1 \cdot BM + \tfrac12 d_1 \cdot DM = \tfrac12 d_1 (BM + DM) = \tfrac12 d_1 d_2$. $\blacksquare$

??? question "11. Show that in every Pythagorean triple one leg is divisible by 3, one leg by 4, and one of the three numbers by 5. Conclude that 60 divides abc."

    It is enough to prove it for primitive triples. *By 3:* squares leave remainder 0 or 1 on division by 3. If
    neither $a$ nor $b$ were divisible by 3, $a^2 + b^2$ would leave remainder 2, which no square does. *By 4:* the
    even leg is $2mn$ with one of $m, n$ even, so $4 \mid 2mn$. *By 5:* squares leave remainder 0, 1 or 4 on division
    by 5. If neither leg is divisible by 5, $a^2 + b^2$ leaves remainder $1 + 1 = 2$, $1 + 4 = 0$ or $4 + 4 = 3$; 2
    and 3 are impossible for a square, so the remainder is 0 and $5 \mid c$. Since 3, 4 and 5 have no common factor,
    $3 \cdot 4 \cdot 5 = 60$ divides $abc$. **Check:** $3 \cdot 4 \cdot 5 = 60$; $5 \cdot 12 \cdot 13 = 780 = 13 \cdot 60$.

??? question "12. Prove that among all rectangles with perimeter 4p the square has the largest area."

    Write the sides as $p + d$ and $p - d$ (they add to $2p$). The area is $(p + d)(p - d) = p^2 - d^2$, which is at
    most $p^2$, with equality only when $d = 0$, the square. $\blacksquare$

## What you learned

- Area is defined by four rules (positive, congruence-invariant, additive, unit square 1); a rectangle has area $ab$
  for any real sides, with irrational sides handled by squeezing.
- Parallelogram $bh$, triangle $\tfrac12 bh$, trapezoid $\tfrac12(a + b)h$, kite $\tfrac12 d_1 d_2$, each proved by
  cutting and rearranging; triangles on a common base between parallels have equal areas.
- Pythagoras' theorem $a^2 + b^2 = c^2$, proved by rearrangement, by Euclid's shearing argument, by similar triangles
  and by Garfield's trapezoid; it fails on a sphere because it depends on the parallel postulate.
- The converse holds, and comparing $a^2 + b^2$ with $c^2$ tells acute, right and obtuse triangles apart.
- Every primitive Pythagorean triple is $(m^2 - n^2, 2mn, m^2 + n^2)$, equivalently every rational point on the unit
  circle comes from a line of rational slope through $(-1, 0)$.
- Heron's formula $\sqrt{s(s-a)(s-b)(s-c)}$ gives the area from the sides, proved from Pythagoras with two differences
  of squares.
- Equal-area polygons can always be cut into the same pieces (Bolyai-Gerwien), but equal-volume polyhedra cannot
  (Dehn, Chapter 11).

**Next:** [Chapter 5](05-Similarity.md), similarity: scaling, the similar-triangle tests, why areas grow as the
square and volumes as the cube, and the golden ratio without the myths.

## Further reading

- Euclid, *Elements*, Book I, propositions 35 to 48 (areas and Pythagoras), with Heath's commentary (1908).
- Robin Hartshorne, *Geometry: Euclid and Beyond*, Springer, 2000, chapter 5 (area, including a full proof of the
  Bolyai-Gerwien theorem and Dehn's invariant).
- Elisha Scott Loomis, *The Pythagorean Proposition*, 2nd edition, 1940 (reprinted by the National Council of
  Teachers of Mathematics, 1968). 367 proofs.
- Eli Maor, *The Pythagorean Theorem: A 4,000-Year History*, Princeton University Press, 2007.
- Eleanor Robson, "Words and pictures: new light on Plimpton 322", *American Mathematical Monthly* 109, 2002. A
  careful reading of the tablet.
- Greg N. Frederickson, *Dissections: Plane and Fancy*, Cambridge University Press, 1997, for Dudeney's puzzle and
  many other dissections.
- John Stillwell, *Mathematics and Its History*, 3rd edition, Springer, 2010, chapters 1 and 3, for Pythagorean
  triples, rational points and their history.
- On this site: the Topics lessons [Area by counting squares](../../topics/measurement/level-3/04-area-counting-squares.md),
  [Area of a triangle](../../topics/measurement/level-4/02-triangle-area.md),
  [The Pythagorean theorem: three proofs](../../topics/geometry/level-6/01-pythagorean-proofs.md),
  [Using Pythagoras](../../topics/geometry/level-6/02-using-pythagoras.md) and
  [Distance and midpoint](../../topics/geometry/level-6/03-distance-midpoint.md); the U of T guide
  [MAT158H1 Unit 9: The Riemann Integral](../../uoft/MAT158H1/unit09.md), which defines area under a curve by the same
  squeezing idea; the Algebra book's [Chapter 18](../algebra/18-Factorization-in-Rings.md) for unique factorisation
  (and the Gaussian integers, where $m^2 + n^2 = (m + ni)(m - ni)$ explains Euclid's formula); and, for elliptic curves,
  the [cryptography book](https://cryptography.akadian.ca/book/).
