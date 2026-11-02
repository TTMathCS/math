---
title: "The cosine law; solving any triangle"
---

# The cosine law; solving any triangle

*Geometry · level 7, lesson 5 of 7*

## A question to start

Pythagoras says that in a right triangle with legs $a$ and $b$, the long side satisfies $c^2 = a^2 + b^2$. Now take
two sticks, 3 and 4 long, joined by a hinge. At a right angle, the far ends are exactly 5 apart. Open the hinge wider
and the gap grows towards 7; close it and the gap shrinks towards 1.

So $c^2$ is bigger than $a^2 + b^2$ when the angle is wide and smaller when it is narrow. By exactly how much? The
answer is a single correction term, and with it Pythagoras works for **every** triangle. That is the **cosine law**.

## The idea

### The law

In any triangle with the usual labels (side $a$ opposite angle $A$, and so on),

$$c^2 = a^2 + b^2 - 2ab\cos C$$

The angle $C$ is the one **between** the sides $a$ and $b$, and $c$ is the side across from it. There are two more
versions by renaming the letters:

$$a^2 = b^2 + c^2 - 2bc\cos A \qquad b^2 = a^2 + c^2 - 2ac\cos B$$

The pattern to remember: the side on the left is opposite the angle in the cosine; the other two sides appear
squared and in the correction.

### Cosine of an obtuse angle

As with the sine in the [last lesson](04-sine-law.md), we need cosines of angles above 90°. The definition used
everywhere is

$$\cos\theta = -\cos(180° - \theta)$$

So $\cos 120° = -\cos 60° = -\tfrac12$, $\cos 90° = 0$, and $\cos 180° = -1$. Cosines of obtuse angles are
**negative**. This is the key to the question at the start:

- if $C < 90°$, $\cos C > 0$ and $c^2$ is **less** than $a^2 + b^2$;
- if $C = 90°$, $\cos C = 0$ and the law **is** Pythagoras;
- if $C > 90°$, $\cos C < 0$, the correction is added, and $c^2$ is **more** than $a^2 + b^2$.

For the hinged sticks at 120°: $c^2 = 9 + 16 - 2 \times 3 \times 4 \times (-\tfrac12) = 25 + 12 = 37$, so the gap is
$\sqrt{37} \approx 6.08$.

### Why it is true

Drop the altitude from $A$ to the line $CB$, meeting it at $D$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 200" role="img" aria-label="Triangle with C at bottom left, B at bottom right and A at the top. The altitude from A meets CB at D. CD is b cos C, DB is a minus b cos C, and AD is b sin C">
  <polygon points="30,170 310,170 120,40" fill="#9cc9ea" opacity="0.4" stroke="currentColor" stroke-width="2"/>
  <line x1="120" y1="40" x2="120" y2="170" stroke="#eea66f" stroke-width="2.5" stroke-dasharray="6 4"/>
  <rect x="120" y="158" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="15" fill="currentColor">
    <text x="14" y="182">C</text><text x="316" y="182">B</text><text x="114" y="32">A</text><text x="114" y="190">D</text>
    <text x="58" y="100">b</text><text x="222" y="100">c</text>
  </g>
  <g font-size="12" fill="currentColor">
    <text x="48" y="190">b cos C</text><text x="180" y="190">a − b cos C</text><text x="126" y="112">b sin C</text>
  </g>
</svg>
</div>

1. In the right triangle $ADC$, the hypotenuse is $b$. So $CD = b\cos C$ and $AD = b\sin C$. *(CAH and SOH.)*
2. The whole base is $a$, so $DB = a - b\cos C$.
3. In the right triangle $ADB$, Pythagoras gives
   $c^2 = AD^2 + DB^2 = b^2\sin^2 C + (a - b\cos C)^2$.
4. Expand the bracket: $c^2 = b^2\sin^2 C + a^2 - 2ab\cos C + b^2\cos^2 C$.
5. Group the $b^2$ terms: $c^2 = a^2 + b^2(\sin^2 C + \cos^2 C) - 2ab\cos C$.
6. In [lesson 2](02-sin-cos-tan.md) we saw $\sin^2 C + \cos^2 C = 1$ (Pythagoras divided by the hypotenuse squared).
   So $c^2 = a^2 + b^2 - 2ab\cos C$. ∎

**If $C$ is obtuse**, $D$ falls outside, on the far side of $C$ from $B$. Then $CD = b\cos(180° - C)$ and the base
piece becomes $DB = a + b\cos(180° - C)$. With the definition $\cos C = -\cos(180° - C)$ this is again $a - b\cos C$,
and the same algebra finishes the proof. Once more, the definition of the obtuse cosine is exactly what makes the law
work for every triangle.

### Finding an angle from three sides

Rearrange the law to make $\cos C$ the subject:

$$\cos C = \frac{a^2 + b^2 - c^2}{2ab}$$

A positive answer means $C$ is acute, a negative answer means obtuse, and zero means a right angle. Unlike the sine
law, there is **no ambiguity**: every value between $-1$ and $1$ belongs to exactly one angle between 0° and 180°, and
$\cos^{-1}$ finds it.

### The area of any triangle

The altitude above has length $b\sin C$ and stands on the base $a$. So

$$\text{Area} = \tfrac12 \times \text{base} \times \text{height} = \tfrac12 ab\sin C$$

"Half the product of two sides times the sine of the angle between them." With three sides only, find an angle with
the cosine law first, or use **Heron's formula**: with $s = \tfrac12(a + b + c)$ (half the perimeter),
$\text{Area} = \sqrt{s(s-a)(s-b)(s-c)}$.

### Solving any triangle: a decision table

A triangle has six parts: three sides and three angles. Three parts, including at least one side, are usually
enough to find the rest. Which tool to start with depends on what you know.

| You know | Start with | Then |
| --- | --- | --- |
| SSS: three sides | cosine law for the **largest** angle | sine law or cosine law for another; 180° for the last |
| SAS: two sides and the angle between | cosine law for the third side | sine law for the **smaller** unknown angle; 180° for the last |
| ASA or AAS: two angles and a side | 180° for the third angle | sine law for both other sides |
| SSA: two sides and an angle not between | sine law | check for 0, 1 or 2 triangles ([lesson 4](04-sine-law.md)) |
| AAA: three angles | no sizes can be found | the shape is fixed but any scale works (similar triangles) |

**Why "largest" and "smaller" in the table?** A triangle has at most one obtuse angle, and it is always the one
opposite the longest side. If you find the largest angle by the cosine law (which never gets obtuse angles wrong),
the remaining ones must be acute, and then $\sin^{-1}$ (which only ever gives acute answers) is safe.

## Worked examples

**1. Two sides and the angle between (SAS).** Two sides of a triangle are 7 cm and 9 cm with 50° between them. Find
the third side.

1. $c^2 = 7^2 + 9^2 - 2 \times 7 \times 9 \cos 50°$.
2. $= 49 + 81 - 126 \times 0.6428 \approx 130 - 81.0 = 49.0$.
3. $c \approx \sqrt{49.0} \approx 7.0$ cm.

**2. Three sides (SSS).** A triangle has sides 5, 7 and 8. Find all its angles.

1. Largest angle, opposite 8: $\cos C = \dfrac{5^2 + 7^2 - 8^2}{2 \times 5 \times 7} = \dfrac{10}{70} \approx 0.1429$, so
   $C \approx 81.8°$.
2. Angle opposite 7: $\cos B = \dfrac{5^2 + 8^2 - 7^2}{2 \times 5 \times 8} = \dfrac{40}{80} = \dfrac12$, so $B = 60°$
   exactly.
3. $A = 180° - 81.8° - 60° = 38.2°$.
4. Area, two ways: $\tfrac12 \times 5 \times 8 \times \sin 60° = 20 \times \dfrac{\sqrt3}{2} = 10\sqrt3 \approx 17.32$. Heron:
   $s = 10$, $\sqrt{10 \times 5 \times 3 \times 2} = \sqrt{300} = 10\sqrt3$. They agree.

**3. An obtuse triangle.** A triangle has sides 4, 6 and 9. Is it acute or obtuse? Solve it.

1. Largest angle, opposite 9: $\cos C = \dfrac{16 + 36 - 81}{2 \times 4 \times 6} = \dfrac{-29}{48} \approx -0.6042$.
   Negative, so obtuse: $C \approx 127.2°$.
2. Angle opposite 4: $\cos A = \dfrac{36 + 81 - 16}{2 \times 6 \times 9} = \dfrac{101}{108}$, so $A \approx 20.7°$.
3. $B = 180° - 127.2° - 20.7° = 32.1°$.

**4. A full SAS solve, and why order matters.** $a = 10$, $b = 14$, $C = 38°$.

1. $c^2 = 100 + 196 - 280\cos 38° \approx 296 - 220.6 = 75.4$, so $c \approx 8.68$.
2. Now find the angle opposite the **smaller** of $a$ and $b$, which is $A$ (opposite 10):
   $\sin A = \dfrac{10 \sin 38°}{8.68} \approx 0.7092$, so $A \approx 45.2°$.
3. $B = 180° - 38° - 45.2° = 96.8°$.

If you had used the sine law for $B$ first, you would get $\sin B \approx 0.993$ and the calculator would say
$B \approx 83.2°$, which is wrong: $B$ is obtuse. Following the table avoids the trap.

**5. Back to base.** A ship sails 12 km, then turns and sails 8 km, so that the angle between the two legs, at the
turning point, is 115°. How far is it from where it started?
$d^2 = 144 + 64 - 192\cos 115° \approx 208 + 81.1 = 289.1$, so $d \approx 17.0$ km.

## Try it

1. Find the third side of a triangle with sides 8 and 5 and an angle of 72° between them.
2. A triangle has sides 7, 8 and 13. Find its largest angle exactly.
3. Without finding any angle, decide whether the triangle with sides 5, 12 and 14 is acute, right or obtuse.
4. A rover drives 400 m, turns, and drives 300 m. The angle between the two legs at the turning point is 120°. How
   far is it from its start, in a straight line?
5. Find the area of a triangle with sides 8 and 11 and 40° between them.
6. A parallelogram has sides 6 and 10 and an angle of 70°. Find the lengths of both diagonals.
7. Solve the triangle with sides 4, 6 and 9 using the table (Worked example 3 did it; now check the area with both
   $\tfrac12 ab\sin C$ and Heron).
8. Prove: if $c^2 > a^2 + b^2$, then angle $C$ is obtuse.

??? note "Answers"
    1. $c^2 = 64 + 25 - 80\cos 72° \approx 89 - 24.7 = 64.3$, so $c \approx 8.02$.
    2. $\cos C = \dfrac{49 + 64 - 169}{2 \times 7 \times 8} = \dfrac{-56}{112} = -\dfrac12$, so $C = 120°$.
    3. $5^2 + 12^2 = 169 < 196 = 14^2$. So $\cos C = \dfrac{169 - 196}{2 \times 5 \times 12} < 0$: the angle opposite 14 is
       obtuse, and the triangle is obtuse.
    4. $d^2 = 400^2 + 300^2 - 2 \times 400 \times 300 \cos 120° = 160\,000 + 90\,000 + 120\,000 = 370\,000$, so
       $d = \sqrt{370\,000} \approx 608$ m.
    5. $\tfrac12 \times 8 \times 11 \times \sin 40° \approx 44 \times 0.6428 \approx 28.3$.
    6. One diagonal is opposite the 70° angle, the other opposite the neighbouring angle $180° - 70° = 110°$.
       Short: $\sqrt{36 + 100 - 120\cos 70°} \approx \sqrt{136 - 41.0} \approx 9.74$. Long:
       $\sqrt{136 - 120\cos 110°} = \sqrt{136 + 41.0} \approx 13.31$.
    7. Angles about 20.7°, 32.1°, 127.2°. Area: $\tfrac12 \times 4 \times 6 \times \sin 127.2° \approx 12 \times 0.797 \approx 9.56$.
       Heron: $s = 9.5$, $\sqrt{9.5 \times 5.5 \times 3.5 \times 0.5} = \sqrt{91.4375} \approx 9.56$. They agree.
    8. From the cosine law, $\cos C = \dfrac{a^2 + b^2 - c^2}{2ab}$. The bottom is positive. If $c^2 > a^2 + b^2$, the
       top is negative, so $\cos C < 0$. A negative cosine belongs to an angle between 90° and 180°, so $C$ is
       obtuse. ∎

## Common mistake

**Subtracting before multiplying.** In $130 - 126\cos 50°$, the multiplication comes first:
$126 \times 0.6428 = 81.0$, then $130 - 81.0 = 49.0$. Working out $130 - 126 = 4$ first and then multiplying by
$\cos 50°$ is a very common slip that gives nonsense.

**Using $\sin^{-1}$ for an angle that might be obtuse.** The sine law never tells you an angle is obtuse. Use the
cosine law for the largest angle, or find the smallest angle first, as in the table.

## Where it leads

- Previous lesson: [The sine law and the ambiguous case](04-sine-law.md). Next lesson:
  [Circle theorems](06-circle-theorems.md).
- The level page: [Level 7: Similarity and trigonometry](index.md).
- The cosine law turns into the dot product of vectors: [The dot product and projections](../level-8/05-dot-product.md).
- Pythagoras, its proofs and its uses: [The Pythagorean theorem: three proofs](../level-6/01-pythagorean-proofs.md).
- Vectors and triangles of forces in physics, on the U of T shelf:
  [PHY131 Unit 4 (Newton's laws)](../../../uoft/PHY131H1/unit04.md).
