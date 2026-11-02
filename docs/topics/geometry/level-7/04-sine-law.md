---
title: "The sine law and the ambiguous case"
---

# The sine law and the ambiguous case

*Geometry · level 7, lesson 4 of 7*

## A question to start

You stand on one bank of a wide river. A tree stands on the far bank. You cannot cross, you cannot reach the tree,
and nothing in sight makes a right angle. Can you still find how far away the tree is?

Yes, with a tape measure and something to measure angles. Mark two points on your bank, measure the distance between
them, and measure the angle each one makes with the tree. Three measurements on your side of the river fix the whole
triangle, including the two sides that cross the water. The tool that unlocks it is the **sine law**, and it works
in every triangle, right-angled or not.

## The idea

### Labels that every triangle uses

From now on, a triangle has corners $A$, $B$, $C$ (capital letters, which also stand for the **angles** there) and
sides $a$, $b$, $c$ (small letters). The rule: **side $a$ is opposite angle $A$**, side $b$ opposite angle $B$, side
$c$ opposite angle $C$. Each side faces the corner with the same letter.

### The sine of an angle bigger than 90°

In a right triangle, both other angles are below 90°, so SOH CAH TOA only defines sines of acute angles. But a
general triangle may have an **obtuse** angle (between 90° and 180°). We need its sine too. Here is the definition
used everywhere:

$$\sin\theta = \sin(180° - \theta)$$

So $\sin 150° = \sin 30° = \tfrac12$ and $\sin 120° = \sin 60° = \tfrac{\sqrt3}{2}$, and $\sin 90° = 1$. Your
calculator agrees. In [level 8](../level-8/02-radians-unit-circle.md) this definition comes out of the unit circle
naturally; for now, the proof below shows why it is exactly the right choice.

One consequence matters a lot for this lesson: **an acute angle and an obtuse angle can have the same sine.** If you
know only that $\sin B = 0.5$, then $B$ could be 30° or 150°.

### The sine law

In any triangle,

$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$

Each side divided by the sine of the angle across from it gives the **same number**. It can also be written upside
down, $\dfrac{\sin A}{a} = \dfrac{\sin B}{b} = \dfrac{\sin C}{c}$, which is handier when you are finding an angle.

### Why it is true

Drop a perpendicular from $C$ to the line through $A$ and $B$. Call its foot $D$ and its length $h$ (the
**altitude**, or height).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 200" role="img" aria-label="Triangle ABC with the altitude h dropped from C to the base AB, meeting it at D. Side b runs from A to C, side a from B to C">
  <polygon points="30,170 310,170 200,40" fill="#9cc9ea" opacity="0.4" stroke="currentColor" stroke-width="2"/>
  <line x1="200" y1="40" x2="200" y2="170" stroke="#eea66f" stroke-width="2.5" stroke-dasharray="6 4"/>
  <rect x="200" y="158" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="15" fill="currentColor">
    <text x="14" y="182">A</text><text x="316" y="182">B</text><text x="194" y="32">C</text><text x="194" y="190">D</text>
    <text x="96" y="96">b</text><text x="262" y="98">a</text><text x="206" y="110">h</text><text x="120" y="190">c</text>
  </g>
</svg>
</div>

1. In the right triangle $ADC$, $h$ is opposite angle $A$ and $b$ is the hypotenuse: $\sin A = \dfrac{h}{b}$, so
   $h = b\sin A$.
2. In the right triangle $BDC$, $h$ is opposite angle $B$ and $a$ is the hypotenuse: $h = a\sin B$.
3. Both are the same $h$, so $b\sin A = a\sin B$. Divide both sides by $\sin A \sin B$:
   $\dfrac{b}{\sin B} = \dfrac{a}{\sin A}$.
4. Dropping the altitude from $A$ instead brings in $c$ and $C$ the same way. ∎

**If $B$ is obtuse**, the foot $D$ falls outside the triangle, beyond $B$. The right triangle $BDC$ then has the angle
$180° - B$ at $B$, so step 2 reads $h = a\sin(180° - B)$. With the definition $\sin B = \sin(180° - B)$, this is again
$h = a\sin B$ and the proof goes through unchanged. That is the reason for the definition.

### A hidden meaning: the circle through the corners

The common value $\dfrac{a}{\sin A}$ is not just any number. Every triangle fits inside exactly one circle through
its three corners (its **circumcircle**), with some radius $R$, and

$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R$$

the diameter of that circle. You will be able to prove it with the circle theorems of
[lesson 6](06-circle-theorems.md): see Try it question 7 there.

### When to use the sine law

You need **one complete pair**: an angle and the side opposite it. Then one more piece (a side or an angle) lets you
find the rest.

- **AAS or ASA** (two angles and a side): find the third angle from the 180° sum, then you always have a pair.
  This case always has exactly one answer.
- **SSA** (two sides and an angle that is **not** between them): this is the tricky one, below.
- **SAS** or **SSS**: no complete pair. You need the cosine law of the [next lesson](05-cosine-law.md).

### The ambiguous case (SSA)

Suppose you know angle $A$ (acute), the side $b$ next to it, and the side $a$ opposite it. Build the triangle: draw
the angle at $A$, measure $b$ along one arm to reach $C$. Now side $a$ must swing from $C$ until it hits the other
arm. Picture it as a gate of length $a$ hinged at $C$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 200" role="img" aria-label="Angle A at the left with side b running up to C. A circle of radius a around C crosses the base line at two points, B1 and B2, so two different triangles fit the same information. The height h from C to the base is shown dashed">
  <line x1="20" y1="170" x2="350" y2="170" stroke="currentColor" stroke-width="2"/>
  <line x1="30" y1="170" x2="183.2" y2="41.4" stroke="currentColor" stroke-width="2"/>
  <path d="M 62 111.4 A 140 140 0 0 0 314.8 89.3" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 4" opacity="0.6"/>
  <line x1="183.2" y1="41.4" x2="127.9" y2="170" stroke="#eea66f" stroke-width="3"/>
  <line x1="183.2" y1="41.4" x2="238.5" y2="170" stroke="#7ccf9a" stroke-width="3"/>
  <line x1="183.2" y1="41.4" x2="183.2" y2="170" stroke="#9cc9ea" stroke-width="2" stroke-dasharray="5 4"/>
  <g font-size="14" fill="currentColor">
    <text x="16" y="188">A</text><text x="184" y="32">C</text>
    <text x="114" y="188">B₁</text><text x="236" y="188">B₂</text>
    <text x="92" y="100">b</text><text x="188" y="120">h</text>
    <text x="136" y="120">a</text><text x="218" y="100">a</text>
  </g>
</svg>
</div>

The shortest the gate could be and still touch the base is the height $h = b\sin A$. So:

| Length of $a$ | What happens | Number of triangles |
| --- | --- | --- |
| $a < h$ | the gate is too short to reach the base | 0 |
| $a = h$ | it just touches, at a right angle | 1 |
| $h < a < b$ | it reaches the base in two places, $B_1$ and $B_2$ | 2 |
| $a \ge b$ | the second crossing falls behind $A$, off the arm | 1 |

In the two-triangle case, the triangle $C B_1 B_2$ is isosceles (both slanted sides are $a$), so its base angles are
equal. That makes the angles at $B_1$ and $B_2$ add up to 180°: one is $B$, the other is $180° - B$. That is exactly
the acute and obtuse angle with the same sine that the sine law gives you.

**In practice:** solve $\sin B = \dfrac{b \sin A}{a}$.

- If this is more than 1, there is **no** triangle.
- Otherwise take $B_1 = \sin^{-1}(\ldots)$ and also test $B_2 = 180° - B_1$. Keep $B_2$ only if $A + B_2 < 180°$.

(If $A$ is obtuse, there is one triangle when $a > b$ and none otherwise, because the side across from the obtuse
angle must be the longest.)

## Worked examples

**1. Two angles and a side (AAS).** In triangle $ABC$, $A = 40°$, $B = 65°$ and $a = 8$. Solve the triangle (find
everything).

1. $C = 180° - 40° - 65° = 75°$.
2. $b = \dfrac{a \sin B}{\sin A} = \dfrac{8 \sin 65°}{\sin 40°} \approx \dfrac{8 \times 0.9063}{0.6428} \approx 11.3$.
3. $c = \dfrac{8 \sin 75°}{\sin 40°} \approx \dfrac{8 \times 0.9659}{0.6428} \approx 12.0$.
4. Sense check: the largest angle (75°) faces the largest side (12.0). Good.

**2. The river.** Points $A$ and $B$ on one bank are 200 m apart. A tree $C$ is on the far bank, with angle
$CAB = 70°$ and angle $CBA = 60°$. Find the distance $AC$ and the width of the river.

1. $C = 180° - 70° - 60° = 50°$. The complete pair is $c = 200$ with $C = 50°$.
2. $AC$ is side $b$, opposite $B$: $b = \dfrac{200 \sin 60°}{\sin 50°} \approx \dfrac{200 \times 0.8660}{0.7660} \approx 226$ m.
3. The width is the height of $C$ above the line $AB$: $226 \sin 70° \approx 226 \times 0.9397 \approx 212$ m.

**3. The ambiguous case.** $A = 40°$, $a = 7$, $b = 10$. Find every possible triangle.

1. $h = 10 \sin 40° \approx 6.43$. Since $6.43 < 7 < 10$, expect **two** triangles.
2. $\sin B = \dfrac{10 \sin 40°}{7} \approx 0.9183$, so $B_1 \approx 66.7°$, and $B_2 = 180° - 66.7° = 113.3°$.
3. Triangle 1: $C = 180° - 40° - 66.7° = 73.3°$ and $c = \dfrac{7 \sin 73.3°}{\sin 40°} \approx 10.4$.
4. Triangle 2: $C = 180° - 40° - 113.3° = 26.7°$ and $c = \dfrac{7 \sin 26.7°}{\sin 40°} \approx 4.9$.
5. Both are real triangles. The drawing above is this exact example, drawn to scale.

**4. No triangle at all.** $A = 50°$, $a = 4$, $b = 9$. Then $\sin B = \dfrac{9 \sin 50°}{4} \approx 1.72$. No angle has a
sine above 1: the gate is too short ($h = 9 \sin 50° \approx 6.9 > 4$). There is no such triangle.

## Try it

1. Solve the triangle with $A = 50°$, $B = 70°$, $a = 12$.
2. In triangle $ABC$, $A = 40°$, $a = 9$, $b = 6$. Find $B$, $C$ and $c$. How many triangles are there, and why?
3. $A = 30°$ and $b = 10$. How many triangles are there when $a = 4$, $a = 5$, $a = 7$ and $a = 12$?
4. $A = 35°$, $a = 6$, $b = 9$. Find both possible values of $B$, and the side $c$ in each triangle.
5. Two coastguard stations 5 km apart on a straight coast see a ship. The angles between the coastline and the
   lines of sight are 52° at the first station and 68° at the second. How far is the ship from the first station,
   and how far is it from the coast?
6. Without a calculator, find $\sin 135°$ and $\sin 150°$.
7. Why can the sine law not start a triangle given as SAS, for example $b = 5$, $c = 7$, $A = 60°$?

??? note "Answers"
    1. $C = 60°$. $b = \dfrac{12 \sin 70°}{\sin 50°} \approx 14.7$. $c = \dfrac{12 \sin 60°}{\sin 50°} \approx 13.6$.
    2. $\sin B = \dfrac{6 \sin 40°}{9} \approx 0.4285$, so $B \approx 25.4°$. The other option $180° - 25.4° = 154.6°$
       is too big, because $40° + 154.6° > 180°$. So there is one triangle (as the table says, since $a \ge b$).
       $C \approx 180° - 40° - 25.4° = 114.6°$ and $c = \dfrac{9 \sin 114.6°}{\sin 40°} \approx 12.7$.
    3. $h = 10 \sin 30° = 5$. $a = 4$: none ($a < h$). $a = 5$: one, with a right angle at $B$. $a = 7$: two
       ($5 < 7 < 10$). $a = 12$: one ($a \ge b$).
    4. $\sin B = \dfrac{9 \sin 35°}{6} \approx 0.8604$, so $B \approx 59.4°$ or $B \approx 120.6°$. Then
       $C \approx 85.6°$ with $c = \dfrac{6 \sin 85.6°}{\sin 35°} \approx 10.4$, or $C \approx 24.4°$ with
       $c = \dfrac{6 \sin 24.4°}{\sin 35°} \approx 4.3$.
    5. The angle at the ship is $180° - 52° - 68° = 60°$, opposite the 5 km side. Distance from the first station
       (opposite the 68° angle): $\dfrac{5 \sin 68°}{\sin 60°} \approx 5.35$ km. Distance from the coast:
       $5.35 \sin 52° \approx 4.22$ km.
    6. $\sin 135° = \sin 45° = \tfrac{1}{\sqrt2}$ and $\sin 150° = \sin 30° = \tfrac12$.
    7. The known angle $A$ sits between the known sides, and its opposite side $a$ is unknown. Every fraction in
       the sine law then has an unknown in it, so there is no complete pair to start from. The cosine law is needed.

## Common mistake

**Forgetting the second triangle.** In the SSA case the calculator gives only the acute angle from $\sin^{-1}$. It
can never show you the obtuse one. Always test $180° - B$ as well.

**Using the sine law on SAS or SSS.** Without one angle together with its own opposite side, the sine law has two
unknowns in every fraction. Check for a complete pair first.

## Where it leads

- Previous lesson: [Angles of elevation and depression](03-elevation-depression.md). Next lesson:
  [The cosine law; solving any triangle](05-cosine-law.md).
- The level page: [Level 7: Similarity and trigonometry](index.md).
- Why $\sin(180° - \theta) = \sin\theta$ really holds, using the unit circle:
  [Radians and the unit circle](../level-8/02-radians-unit-circle.md).
- Counting how many solutions a problem has is a theme in [Logic and puzzles](../../logic/index.md).
- Motion in two dimensions, where triangles of velocities appear, on the U of T shelf:
  [PHY131 Unit 3](../../../uoft/PHY131H1/unit03.md).
