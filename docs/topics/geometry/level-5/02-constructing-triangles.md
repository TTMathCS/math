---
title: "Constructing triangles"
---

# Constructing triangles

*Geometry · level 5, lesson 2 of 6*

## A question to start

You have three sticks, 2 cm, 3 cm and 6 cm long. Can you lay them on a table, end to end, to make a triangle?

Try it in your head. Put the 6 cm stick down. Stand the 2 cm stick up from one end and the 3 cm stick from the other
end, and try to make their tips meet. However you tilt them, the tips stay at least 1 cm apart. The two short sticks
together are only 5 cm, and they have to stretch across 6 cm. **No triangle.**

Now try 4 cm, 5 cm and 6 cm. This time it works, and something more surprising is true: there is only **one**
triangle you can make. Every person who builds a triangle from those three sticks gets the same shape, maybe flipped
over. This lesson is about both facts: when a triangle can be built, and when the pieces you are given fix it
completely.

## The idea

### Six measurements, and naming them

A triangle $ABC$ has three **sides** and three **angles**. We name angles by their corner: $\angle A$ is the angle at
corner $A$. We usually name the side **opposite** a corner with the small letter: side $a$ is $BC$ (opposite $A$),
side $b$ is $CA$, side $c$ is $AB$. Six measurements in all.

A construction question gives you some of the six and asks you to draw the triangle. The surprise of this lesson is
that **three** well-chosen measurements are usually enough to fix all six. We name the cases with letters: S for a
side, A for an angle, in the order you meet them going round the triangle.

### Case SSS: three sides

To construct a triangle with sides 6 cm, 5 cm and 7 cm:

1. Draw the 6 cm side with a ruler and call its ends $A$ and $B$.
2. Open the compass to 5 cm. With the point on $A$, draw an arc above the line.
3. Open the compass to 7 cm. With the point on $B$, draw an arc that crosses the first one. Call the crossing $C$.
4. Join $C$ to $A$ and to $B$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 -10 300 210" role="img" aria-label="Base AB of 6 units; an arc of radius 5 around A and an arc of radius 7 around B cross at C, giving the triangle ABC">
  <g fill="none" stroke="#9cc9ea" stroke-width="2">
    <path d="M 46.9 20.6 A 150 150 0 0 1 130.4 37.6"/>
    <path d="M 65.9 52.6 A 210 210 0 0 1 116.6 0.1"/>
  </g>
  <polygon points="60,170 240,170 90,23" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-width="2.5"/>
  <g fill="currentColor"><circle cx="60" cy="170" r="3.5"/><circle cx="240" cy="170" r="3.5"/><circle cx="90" cy="23" r="3.5"/></g>
  <g font-size="15" fill="currentColor">
    <text x="42" y="182">A</text><text x="246" y="182">B</text><text x="74" y="16">C</text>
    <text x="142" y="190">6</text><text x="58" y="100">5</text><text x="172" y="96">7</text>
  </g>
</svg>
</div>

**Why it works.** Every point on the first arc is 5 cm from $A$. Every point on the second arc is 7 cm from $B$. The
corner $C$ has to be **both**, so it must be on both arcs, which means it must be where they cross. The two circles
cross in exactly two points, one above $AB$ and one below, and those two triangles are mirror images of each other
across $AB$. So the shape is completely fixed: three sides give **one** triangle (up to flipping).

That is why builders love triangles. A square frame made of four rods hinged at the corners can be pushed into a
squashed diamond, because four sides do not fix the shape. A triangle of rods cannot change shape at all without
bending a rod. Bridges, cranes and roof trusses are full of triangles for exactly this reason.

### Case SAS: two sides and the angle between them

Given $AB = 6$ cm, $AC = 4$ cm and $\angle A = 50°$ (the angle **between** the two sides, called the **included**
angle):

1. Draw $AB = 6$ cm.
2. At $A$, use a protractor to draw a ray at 50° to $AB$.
3. Measure 4 cm along the ray to mark $C$. Join $C$ to $B$.

There was no choice anywhere: the ray's direction was fixed by the angle, and $C$'s position on it by the length. So
SAS also fixes the triangle.

### Case ASA: two angles and the side between them

Given $AB = 6$ cm, $\angle A = 40°$, $\angle B = 70°$: draw $AB$, draw a 40° ray at $A$ and a 70° ray at $B$, on the
same side. Where the rays cross is $C$. Two rays from fixed points in fixed directions cross at just one point, so
the triangle is fixed. And because the angles of a triangle add to 180°, $\angle C = 180° - 40° - 70° = 70°$.

If you are given two angles and a side that is **not** between them (AAS), first work out the third angle; then the
side **is** between two known angles, and you are back to ASA.

### When a triangle cannot exist: the triangle inequality

Go back to the sticks 2, 3 and 6. In the SSS construction, the arc of radius 2 around $A$ and the arc of radius 3
around $B$ never meet, because $A$ and $B$ are 6 apart and the arcs only reach $2 + 3 = 5$ of the way.

<div class="pattern-row" markdown="0">
<svg viewBox="0 30 290 140" role="img" aria-label="Base AB of 6 units; a quarter circle of radius 2 around A and a quarter circle of radius 3 around B do not reach each other, leaving a gap of 1 unit on the base">
  <line x1="40" y1="150" x2="250" y2="150" stroke="currentColor" stroke-width="2.5"/>
  <g fill="none" stroke="#9cc9ea" stroke-width="2">
    <path d="M 110 150 A 70 70 0 0 0 40 80"/>
    <path d="M 145 150 A 105 105 0 0 1 250 45"/>
  </g>
  <line x1="110" y1="150" x2="145" y2="150" stroke="#eea66f" stroke-width="5"/>
  <g fill="currentColor"><circle cx="40" cy="150" r="3.5"/><circle cx="250" cy="150" r="3.5"/></g>
  <g font-size="14" fill="currentColor">
    <text x="26" y="166">A</text><text x="254" y="166">B</text><text x="64" y="104">2</text><text x="200" y="80">3</text>
    <text x="114" y="166">gap 1</text>
  </g>
</svg>
</div>

This gives a rule that every triangle must obey:

> **Triangle inequality.** In every triangle, **any two sides added together are longer than the third side.**

The reason in one sentence: **a straight line is the shortest path between two points.** Going from $A$ to $B$
straight along side $c$ is shorter than going from $A$ to $C$ and then on to $B$, so $c < a + b$. The same holds for
each side.

**What if they are exactly equal?** Sticks 2, 4 and 6: the arcs of radius 2 and 4 around the ends of the 6 cm stick
just touch at a single point **on** the stick. The "triangle" is squashed flat into a line. Mathematicians call this
a **degenerate** triangle; it has no area and no proper corners, so it does not count. The inequality must be
strict: $a + b > c$, not $a + b \ge c$.

**A quick test.** You only need to check the two **shortest** sides against the longest. If the two short ones add
to more than the longest, the other two checks pass automatically (anything plus a positive length is more than the
shorter of the two).

**The range for a third side.** If two sides are 5 and 9, the third side $x$ must satisfy $5 + 9 > x$, so $x < 14$,
and $5 + x > 9$, so $x > 4$. In general the third side lies strictly between the **difference** and the **sum** of
the other two:

$$|a - b| < c < a + b$$

Picture it: hinge the 5 stick to the 9 stick and open the hinge. Nearly closed, the tips are just over $9 - 5 = 4$
apart; nearly flat open, they are just under $9 + 5 = 14$ apart. Every distance in between is possible.

### When the angles will not close

Angles have a rule too. In ASA, the two rays at $A$ and $B$ must lean toward each other enough to meet. If
$\angle A + \angle B$ is $180°$ or more, the rays are parallel or spread apart, and never meet. So the two given
angles must add to **less than 180°**. Given 100° and 85°, no triangle exists.

### What three measurements do NOT fix

**AAA (three angles).** Given angles 50°, 60° and 70°, you can draw a tiny triangle or an enormous one. They all have
the same shape but different sizes. (Same shape, different size is called **similar**; it is the subject of the
next lesson but one and of level 7.) Notice also that the third angle carries no new information: once two angles
are known, the third is forced.

**SSA (two sides and an angle not between them).** Given $\angle A = 30°$, $AB = 10$ cm and $BC = 6$ cm: draw the 30°
ray from $A$, mark $B$ on the other arm 10 cm from $A$, and swing a 6 cm arc around $B$. That arc crosses the ray
**twice**, giving two different triangles. Lesson 5 draws them and explains when this happens.

## Worked examples

**1. Can sides 7, 10, 18 make a triangle?** The two shortest add to $7 + 10 = 17$, which is **less** than 18. No
triangle.

**2. Can sides 8, 15, 17 make a triangle?** $8 + 15 = 23 > 17$. Yes. (In fact $8^2 + 15^2 = 64 + 225 = 289 = 17^2$,
so it is a right triangle; that is level 6.)

**3. Two sides of a triangle are 5 cm and 9 cm, and the third is a whole number of centimetres. What can it be?**

1. The third side is more than $9 - 5 = 4$ and less than $9 + 5 = 14$.
2. Whole numbers strictly between 4 and 14: 5, 6, 7, 8, 9, 10, 11, 12, 13.
3. That is 9 possible triangles.

**4. How many different triangles have whole-number sides and a perimeter of 12?**

1. List the sides as $a \le b \le c$ with $a + b + c = 12$.
2. The triangle inequality needs $a + b > c$. Since $a + b = 12 - c$, that means $12 - c > c$, so $c < 6$.
3. Also $c$ is the longest, so $c \ge 12 \div 3 = 4$. So $c$ is 4 or 5.
4. $c = 5$: $a + b = 7$ with $b \le 5$: $(2, 5)$ and $(3, 4)$. $c = 4$: $a + b = 8$ with $b \le 4$: only $(4, 4)$.
5. Three triangles: 2, 5, 5 and 3, 4, 5 and 4, 4, 4.

**5. Construct a triangle with $\angle A = 45°$, $\angle B = 60°$, $AB = 7$ cm, using only compass and straightedge.**
Draw $AB$. At $A$, construct 90° and bisect it for 45° ([lesson 1](01-compass-straightedge.md)). At $B$, construct 60°
from an equilateral triangle on $AB$. The two rays meet at $C$, and $\angle C = 180° - 45° - 60° = 75°$.

## Try it

1. Which of these can be the sides of a triangle? (a) 3, 4, 8 (b) 6, 6, 11 (c) 5, 5, 10 (d) 9, 12, 20
2. Two sides of a triangle are 8 and 3. Between which two numbers must the third side lie?
3. Can a triangle have angles of 95° and 88°? Explain.
4. Describe, step by step, how to construct a triangle with sides 4 cm, 4 cm and 4 cm. What are its angles?
5. Explain why three angles alone do not fix a triangle, but three sides do.
6. How many triangles with whole-number sides have perimeter 15? List them.
7. Harder: a town is 12 km from a school, and a farm is 5 km from the town. What are the largest and smallest
   possible distances from the farm to the school? When is each one reached?

??? note "Answers"
    1. (a) No: $3 + 4 = 7 < 8$. (b) Yes: $6 + 6 = 12 > 11$. (c) No: $5 + 5 = 10$, exactly equal, so it is flat
       (degenerate). (d) Yes: $9 + 12 = 21 > 20$.
    2. Between $8 - 3 = 5$ and $8 + 3 = 11$, not including either end: $5 < x < 11$.
    3. No. $95° + 88° = 183°$, more than 180°, so the third angle would have to be negative. The rays from the two
       ends of the base would spread apart and never meet.
    4. Draw $AB = 4$ cm. Open the compass to 4 cm; draw an arc centred on $A$ and an arc centred on $B$; they cross
       at $C$. Join up. All sides are equal, so it is equilateral, and its three equal angles share 180°: each is
       $180° \div 3 = 60°$.
    5. Three sides: the corner $C$ must be on two fixed circles, which cross in only two mirror-image points, so the
       shape and size are fixed. Three angles: shrinking or enlarging a triangle keeps every angle, so endless
       sizes share the same angles. Also the third angle always follows from the first two, so "three angles" is
       really only two pieces of information.
    6. With $a \le b \le c$ and $a + b + c = 15$: we need $c < 15 - c$, so $c \le 7$, and $c \ge 5$. $c = 7$:
       $(1, 7)$, $(2, 6)$, $(3, 5)$, $(4, 4)$. $c = 6$: $(3, 6)$, $(4, 5)$. $c = 5$: $(5, 5)$. Seven triangles:
       1-7-7, 2-6-7, 3-5-7, 4-4-7, 3-6-6, 4-5-6, 5-5-5.
    7. Largest: $12 + 5 = 17$ km, when the farm is on the far side of the town, in a straight line with the school.
       Smallest: $12 - 5 = 7$ km, when the farm is between the town and the school, on the straight road. Every
       distance in between is possible, with school, town and farm forming a triangle.

## Common mistake

**Checking only one pair of sides.** For 3, 4, 8, it is true that $4 + 8 > 3$ and $3 + 8 > 4$, but $3 + 4 < 8$, so no
triangle exists. Always add the **two shortest** sides and compare with the longest. That single check is enough.

**Thinking AAA fixes a triangle.** Three angles fix the **shape**, not the **size**. A map of a triangular park and
the park itself have the same angles; they are not the same triangle.

## Where it leads

- Previous lesson: [Compass and straightedge](01-compass-straightedge.md).
- Next lesson: [Transformations on the grid](03-transformations-grid.md), moving shapes without changing them.
- The cases SSS, SAS, ASA, AAS and the failure of SSA become the congruence rules in
  [lesson 5](05-congruent-triangles.md).
- Whether three sides make a **right** triangle: [level 6, lesson 1](../level-6/01-pythagorean-proofs.md).
- This level: [Level 5: constructions and transformations](index.md).
- Counting all the triangles with a given perimeter is a counting puzzle: [Counting](../../counting/index.md).
