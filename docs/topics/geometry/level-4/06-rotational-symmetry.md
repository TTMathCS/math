---
title: "Rotational symmetry"
---

# Rotational symmetry

*Geometry · level 4, lesson 6 of 6*

## A question to start

Write the capital letter **S** on a card. Now turn the card upside down, a half turn. It still says S.

Try the same with **N**, **Z**, **H** and **O**. They all survive a half turn. But try **A**, **E** or **R**: turned
upside down, they look wrong.

Here is the puzzle. The letter **A** has a mirror line straight down the middle (fold it, and the halves match), but
it fails the half-turn test. The letter **S** has **no** mirror line at all, but it passes. So these must be two
different kinds of symmetry. What is the second kind, and how can we measure it?

## The idea

### Symmetry by turning

In level 2 you met **line symmetry** (also called **reflection** or **mirror** symmetry): a shape has a line of
symmetry if folding along that line makes the two halves match exactly.

A shape has **rotational symmetry** if you can **turn** it about a point, by **less than a full turn**, and it looks
exactly the same as before: every part lands where a matching part was. The point it turns about is called the
**centre of rotation**. (A "rotation" is a turn.)

Every shape looks the same after a full turn, so that does not count. The question is whether some **smaller** turn
also works.

### The order of rotational symmetry

Turn the shape slowly through one full turn, and count how many times it looks exactly the same as at the start.
Count the start position (which is also the end position) **once**. That count is the **order of rotational
symmetry**.

- A square looks the same after a quarter turn, a half turn, three quarters, and a full turn: **order 4**.
- An equilateral triangle looks the same after a third of a turn (120°), two thirds (240°) and a full turn:
  **order 3**.
- A parallelogram (that is not a rectangle or rhombus) looks the same only after a half turn and a full turn:
  **order 2**.
- A kite only matches itself after a full turn: **order 1**. "Order 1" means **no** rotational symmetry.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 540 180" role="img" aria-label="An equilateral triangle of order 3, a square of order 4, a parallelogram of order 2, a regular hexagon of order 6, and a kite of order 1, each with its centre of rotation marked">
  <polygon points="60,40 21,107.5 99,107.5" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <circle cx="60" cy="85" r="3" fill="currentColor"/>
  <text x="60" y="155" font-size="12" text-anchor="middle" fill="currentColor">order 3</text>
  <text x="60" y="170" font-size="11" text-anchor="middle" fill="currentColor">turn 120°</text>
  <polygon points="201.8,53.2 138.2,53.2 138.2,116.8 201.8,116.8" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <circle cx="170" cy="85" r="3" fill="currentColor"/>
  <text x="170" y="155" font-size="12" text-anchor="middle" fill="currentColor">order 4</text>
  <text x="170" y="170" font-size="11" text-anchor="middle" fill="currentColor">turn 90°</text>
  <polygon points="235,110 305,110 325,60 255,60" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <circle cx="280" cy="85" r="3" fill="currentColor"/>
  <text x="280" y="155" font-size="12" text-anchor="middle" fill="currentColor">order 2</text>
  <text x="280" y="170" font-size="11" text-anchor="middle" fill="currentColor">turn 180°</text>
  <polygon points="435,85 412.5,46 367.5,46 345,85 367.5,124 412.5,124" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <circle cx="390" cy="85" r="3" fill="currentColor"/>
  <text x="390" y="155" font-size="12" text-anchor="middle" fill="currentColor">order 6</text>
  <text x="390" y="170" font-size="11" text-anchor="middle" fill="currentColor">turn 60°</text>
  <polygon points="490,40 515,70 490,130 465,70" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <text x="490" y="155" font-size="12" text-anchor="middle" fill="currentColor">order 1</text>
  <text x="490" y="170" font-size="11" text-anchor="middle" fill="currentColor">no turn works</text>
</svg>
</div>

### The angle of rotation

The **smallest** turn that makes a shape match itself is its **angle of rotation**. The positions where the shape
matches are evenly spread out round the full turn, so

$$\text{angle of rotation} = \frac{360°}{\text{order}}$$

A square: $360 \div 4 = 90°$. An equilateral triangle: $360 \div 3 = 120°$. A regular hexagon: $360 \div 6 = 60°$.

**Why must the matching turns be evenly spread out?** Suppose the smallest turn that works is $\theta$ ("theta").
Then turning by $\theta$ twice works too (the shape matched after the first turn, so the second turn starts from a
picture identical to the start). So $2\theta$, $3\theta$, $4\theta$, ... all work.

Could some other turn work that is not a whole number of $\theta$'s, say a turn $t$ between $2\theta$ and $3\theta$?
If it did, then turning by $t$ and then turning **back** by $2\theta$ would also give a match, and that is a turn of
$t - 2\theta$, which is smaller than $\theta$. But $\theta$ was the smallest! That is impossible. So the only turns
that work are whole numbers of $\theta$'s. And since a full turn works, 360° must be a whole number of $\theta$'s:
$\theta$ divides 360 exactly. That is a real proof, using a favourite trick of mathematicians: "suppose there were a
smaller one; that leads to something impossible."

### How to test for rotational symmetry with tracing paper

1. Lay tracing paper over the shape and trace it. Mark the centre you want to test with a pencil point.
2. Hold the pencil point on the centre and turn the tracing paper slowly.
3. Each time the tracing fits exactly over the shape, count one. Stop when you get back to the start.
4. The count is the order.

Where is the centre? For a regular polygon, it is the middle (the point the same distance from every corner). For a
shape with order 2, it is the midpoint of any segment joining a point to its matching point, for example where the
diagonals of a parallelogram cross.

### Rotational symmetry without lines, and lines without rotation

Line symmetry and rotational symmetry are different things.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 200" role="img" aria-label="Left: a pinwheel of four blades that looks the same after every quarter turn but has no lines of symmetry. Right: a three-bladed shape that looks the same after every third of a turn">
  <polygon points="90,95 150,95 150,70" fill="#eea66f" fill-opacity="0.8" stroke="currentColor" stroke-width="2"/>
  <polygon points="90,95 90,35 65,35" fill="#9cc9ea" fill-opacity="0.8" stroke="currentColor" stroke-width="2"/>
  <polygon points="90,95 30,95 30,120" fill="#eea66f" fill-opacity="0.8" stroke="currentColor" stroke-width="2"/>
  <polygon points="90,95 90,155 115,155" fill="#9cc9ea" fill-opacity="0.8" stroke="currentColor" stroke-width="2"/>
  <circle cx="90" cy="95" r="3" fill="currentColor"/>
  <text x="90" y="190" font-size="12" text-anchor="middle" fill="currentColor">order 4, no lines of symmetry</text>
  <polygon points="300,100 300,40 335,55 320,85" fill="#eea66f" fill-opacity="0.8" stroke="currentColor" stroke-width="2"/>
  <polygon points="300,100 248,130 243.5,92.2 277,90.2" fill="#9cc9ea" fill-opacity="0.8" stroke="currentColor" stroke-width="2"/>
  <polygon points="300,100 352,130 321.5,152.8 303,124.8" fill="#7ccf9a" fill-opacity="0.8" stroke="currentColor" stroke-width="2"/>
  <circle cx="300" cy="100" r="3" fill="currentColor"/>
  <text x="300" y="190" font-size="12" text-anchor="middle" fill="currentColor">order 3</text>
</svg>
</div>

- The **pinwheel** has order 4, but no lines of symmetry: fold it any way and the blades point the wrong way.
- The letters **S**, **N**, **Z** have order 2 and no lines of symmetry.
- The letter **A** has one line of symmetry and order 1.
- An **isosceles triangle** (not equilateral) has one line of symmetry and order 1.

But there is a link. **If a flat shape has two or more lines of symmetry, it also has rotational symmetry**, and its
order equals the number of lines. Reflecting in one mirror line and then in another is the same as turning about the
point where they cross, by **twice** the angle between them. A square has 4 lines and order 4; a rectangle has 2 lines
and order 2; a regular hexagon has 6 lines and order 6. (A shape with just one line, like the letter A, has order 1.)

### Regular polygons

A regular polygon with $n$ sides has **$n$ lines of symmetry** and rotational symmetry of **order $n$**, with an angle
of rotation of $\frac{360°}{n}$. Notice that this is exactly the **exterior angle** from the last lesson: turning the
whole shape by one exterior angle moves each corner onto the next.

| Shape | Lines of symmetry | Order | Angle of rotation |
| --- | --- | --- | --- |
| equilateral triangle | 3 | 3 | 120° |
| square | 4 | 4 | 90° |
| rectangle (not square) | 2 | 2 | 180° |
| rhombus (not square) | 2 | 2 | 180° |
| parallelogram (general) | 0 | 2 | 180° |
| kite (general) | 1 | 1 | none |
| regular pentagon | 5 | 5 | 72° |
| regular hexagon | 6 | 6 | 60° |
| circle | infinitely many | infinite | any angle |

The circle is the champion: turn it by **any** angle about its centre and it looks the same.

### Where you see it

Rotational symmetry is everywhere things spin: wheels and hubcaps, fans, propellers, flowers (many have 5 petals,
order 5), snowflakes (order 6, because of the way water molecules fit together), and the logos and tiles that
designers make. Engineers care about it: a wheel with rotational symmetry is balanced, so it spins without wobbling.

## Worked examples

**1. A regular octagon.** Order **8** (8 equal sides and angles). Angle of rotation $360 \div 8 = 45°$. Lines of
symmetry: **8** (4 through opposite corners, 4 through the middles of opposite sides).

**2. Capital letters.** Which of H, I, N, O, S, X, Z have rotational symmetry, and of what order?

- H, I, N, S, Z: **order 2** (a half turn works, nothing smaller does).
- O: if drawn as a perfect circle, order infinite; usually drawn as an oval, **order 2**.
- X: **order 2**, or **order 4** if the strokes cross at right angles and are the same length.

**3. Finding the order from the angle.** A shape matches itself when turned 40° about its centre, and 40° is the
smallest such turn. Order $= 360 \div 40 = 9$.

**4. A playing card.** Many playing cards look the same when turned upside down, so that players can read them either
way up. They have rotational symmetry of order 2 about the centre of the card, but (for picture cards) no line of
symmetry: the top figure is a turned copy, not a mirror image.

**5. Is 50° possible?** Can a shape's smallest matching turn be 50°? It would have to divide 360 exactly, and
$360 \div 50 = 7.2$. So **no**: if a 50° turn works, a 10° turn also works (because $360 - 7 \times 50 = 10$), so 50°
is not the smallest.

## Try it

1. Give the order of rotational symmetry and the angle of rotation of: (a) a regular pentagon; (b) a rectangle that is
   not a square; (c) a regular 10-gon.
2. Which of these letters have rotational symmetry of order 2: B, H, M, N, S, T?
3. A shape has order 12. What is its smallest angle of rotation?
4. A shape's smallest matching turn is 72°. What is its order?
5. Draw (or describe) a shape with rotational symmetry of order 3 but no lines of symmetry.
6. A regular polygon has an angle of rotation of 30°. How many sides does it have, and what is each interior angle?
7. A shape has exactly 3 lines of symmetry. What is its order of rotational symmetry?
8. Explain why no shape can have a smallest angle of rotation of 100°.

??? note "Answers"
    1. (a) Order 5, angle $360 \div 5 = 72°$. (b) Order 2, angle 180°. (c) Order 10, angle 36°.
    2. **H, N, S**. B, M and T only look right one way up (they have a line of symmetry instead).
    3. $360 \div 12 = 30°$.
    4. $360 \div 72 = 5$.
    5. For example, a three-bladed fan or propeller with curved or slanted blades all pointing round the same way, like
       the right-hand drawing in this lesson.
    6. Order $360 \div 30 = 12$: it has 12 sides. Each exterior angle is 30°, so each interior angle is
       $180 - 30 = 150°$.
    7. **Order 3**. Two or more lines of symmetry give rotational symmetry of the same order as the number of lines.
       (An equilateral triangle is an example.)
    8. 100 does not divide 360 exactly ($360 \div 100 = 3.6$). If a 100° turn worked, so would 300° (three turns), and
       then turning back from a full turn, 60° would work: smaller than 100°, so 100° was not the smallest.

## Common mistake

**Counting the start and the end as two.** Turning through one full turn, the starting position comes back at the
end. Count it **once**. A square matches at 90°, 180°, 270° and 360°: four positions, order 4, not 5.

**Mixing up lines of symmetry and order.** The pinwheel and the letter S show a shape can have rotational symmetry
with **no** lines. The letter A shows a shape can have a line with **no** rotational symmetry. Test each kind
separately: fold for lines, turn for order.

## Where it leads

- Back: [Angles inside and outside any polygon](05-polygon-angles.md) · Next level: [Level 5: constructions and transformations](../level-5/index.md)
- [Level 4 page](index.md) · [Geometry topic page](../index.md)
- Line symmetry and slides, flips and turns first appeared in [level 2](../level-2/index.md).
- Rotations on a coordinate grid: [level 5](../level-5/index.md).
- The "turn twice, turn back" argument is the beginning of **group theory**, the mathematics of symmetry. Clock
  arithmetic, which uses the same idea, is in [Number theory](../../number-theory/index.md).
