---
title: "Transformations on the grid"
---

# Transformations on the grid

*Geometry · level 5, lesson 3 of 6*

## A question to start

Take the point $(3, 1)$ on a grid and turn it a quarter turn anticlockwise around the origin $(0, 0)$, as if it were
painted on a spinning plate. Where does it land?

You could draw it and measure. But there is a rule so short you can do it in your head: **swap the two numbers and
change the sign of the first one.** $(3, 1)$ lands on $(-1, 3)$. It works for every point, in every quadrant. Why
should something as round as turning be so neat in numbers? This lesson shows you why, and gives you rules like this
for every slide, flip and turn.

## The idea

### The grid in all four quadrants

A **coordinate grid** has a horizontal number line, the **$x$-axis**, and a vertical one, the **$y$-axis**. They
cross at the **origin** $(0, 0)$. A point $(x, y)$ is found by going $x$ across (right if positive, left if
negative) and then $y$ up (up if positive, down if negative). The axes split the plane into four **quadrants**,
numbered anticlockwise starting from the top right:

- quadrant I: $x > 0$, $y > 0$, like $(3, 2)$;
- quadrant II: $x < 0$, $y > 0$, like $(-3, 2)$;
- quadrant III: $x < 0$, $y < 0$, like $(-3, -2)$;
- quadrant IV: $x > 0$, $y < 0$, like $(3, -2)$.

### Transformations and images

A **transformation** moves every point of the plane to a new place. The shape you start with is the **object** and
where it lands is its **image**. We name image points with a dash, read "prime": $A$ goes to $A'$ ("A prime").

The three transformations of this lesson, **translations**, **reflections** and **rotations**, all have a special
property: they keep every length and every angle the same. The image is an exact copy of the object, just moved.
Such a transformation is called an **isometry** (Greek for "same measure"), or a **rigid motion**. (The next lesson
meets one that does change lengths.)

### Translations: sliding

A **translation** slides every point the same distance in the same direction. "3 right and 2 down" moves every point
by $+3$ in $x$ and $-2$ in $y$:

$$(x, y) \to (x + 3,\ y - 2)$$

We often write the slide as a **vector**, a little column or pair telling how far across and how far up, here
$\binom{3}{-2}$. Every point moves by the same vector, so every segment of the shape stays the same length and keeps
pointing the same way. A translation never turns or flips anything.

### Reflections: flipping in a mirror line

A **reflection** flips the plane over a **mirror line**. Each point goes straight across the mirror, at right angles
to it, and lands the same distance away on the other side. In other words:

> **The mirror line is the perpendicular bisector of the segment from each point to its image.**

That is the line from [lesson 1](01-compass-straightedge.md), and it gives a way to find the mirror line when you
only see a point and its image: join them and construct the perpendicular bisector.

Four mirror lines have easy rules:

| Mirror line | Rule | Example: $(4, 1)$ goes to |
| --- | --- | --- |
| $x$-axis | $(x, y) \to (x, -y)$ | $(4, -1)$ |
| $y$-axis | $(x, y) \to (-x, y)$ | $(-4, 1)$ |
| the line $y = x$ | $(x, y) \to (y, x)$ | $(1, 4)$ |
| the line $y = -x$ | $(x, y) \to (-y, -x)$ | $(-1, -4)$ |

Why these rules? Reflecting in the $x$-axis, the point keeps its distance across and goes the same distance on the
other side of the axis, so only the sign of $y$ changes. The line $y = x$ is the diagonal through $(1, 1)$, $(2, 2)$,
$(3, 3)$. Folding the grid along it lays the $x$-axis exactly onto the $y$-axis, so "across" and "up" swap places.

### Rotations: turning about a centre

A **rotation** turns the plane about a fixed point, the **centre of rotation**, through an angle. Unless told
otherwise, positive angles turn **anticlockwise**. The centre stays still, and every other point stays the same
distance from the centre.

About the origin, the three common turns have these rules:

| Rotation about the origin | Rule | Example: $(3, 1)$ goes to |
| --- | --- | --- |
| 90° anticlockwise (quarter turn) | $(x, y) \to (-y, x)$ | $(-1, 3)$ |
| 180° (half turn) | $(x, y) \to (-x, -y)$ | $(-3, -1)$ |
| 90° clockwise (same as 270° anticlockwise) | $(x, y) \to (y, -x)$ | $(1, -3)$ |

**Why the quarter-turn rule works.** To reach $(3, 1)$ from the origin, go 3 along the $x$-axis and then 1 up. That
path is two sides of a little right triangle (orange below). Turn the **whole path** a quarter turn anticlockwise:
"3 to the right" becomes "3 up", and "1 up" becomes "1 to the left". So the new point is 1 left and 3 up: $(-1, 3)$.
In general, $x$ across and $y$ up become $x$ up and $y$ left, which is the point $(-y, x)$.

<div class="pattern-row" markdown="0">
<svg viewBox="20 20 220 220" role="img" aria-label="A grid from minus 5 to 5. The path from the origin 3 right then 1 up reaches (3, 1). Turned a quarter turn anticlockwise, it becomes 3 up then 1 left, reaching (-1, 3)">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.35"><line x1="30" y1="30" x2="30" y2="230"/><line x1="30" y1="30" x2="230" y2="30"/><line x1="50" y1="30" x2="50" y2="230"/><line x1="30" y1="50" x2="230" y2="50"/><line x1="70" y1="30" x2="70" y2="230"/><line x1="30" y1="70" x2="230" y2="70"/><line x1="90" y1="30" x2="90" y2="230"/><line x1="30" y1="90" x2="230" y2="90"/><line x1="110" y1="30" x2="110" y2="230"/><line x1="30" y1="110" x2="230" y2="110"/><line x1="150" y1="30" x2="150" y2="230"/><line x1="30" y1="150" x2="230" y2="150"/><line x1="170" y1="30" x2="170" y2="230"/><line x1="30" y1="170" x2="230" y2="170"/><line x1="190" y1="30" x2="190" y2="230"/><line x1="30" y1="190" x2="230" y2="190"/><line x1="210" y1="30" x2="210" y2="230"/><line x1="30" y1="210" x2="230" y2="210"/><line x1="230" y1="30" x2="230" y2="230"/><line x1="30" y1="230" x2="230" y2="230"/></g>
  <g stroke="currentColor" stroke-width="1.6"><line x1="30" y1="130" x2="230" y2="130"/><line x1="130" y1="30" x2="130" y2="230"/></g>
  <polygon points="130,130 190,130 190,110" fill="#eea66f" fill-opacity="0.5" stroke="#eea66f" stroke-width="3"/>
  <polygon points="130,130 130,70 110,70" fill="#9cc9ea" fill-opacity="0.5" stroke="#9cc9ea" stroke-width="3"/>
  <g stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"><line x1="130" y1="130" x2="190" y2="110"/><line x1="130" y1="130" x2="110" y2="70"/></g>
  <g fill="currentColor"><circle cx="190" cy="110" r="4"/><circle cx="110" cy="70" r="4"/><circle cx="130" cy="130" r="3"/></g>
  <g font-size="13" fill="currentColor">
    <text x="194" y="104">(3, 1)</text><text x="60" y="64">(−1, 3)</text><text x="134" y="144">O</text>
    <text x="156" y="144">3</text><text x="196" y="124">1</text><text x="136" y="104">3</text><text x="114" y="64">1</text>
  </g>
</svg>
</div>

Do the quarter turn twice: $(x, y) \to (-y, x) \to (-x, -y)$. That is the half-turn rule, as it should be. Do it a
third time and you get $(y, -x)$, the three-quarter turn, which is the same as a quarter turn clockwise. A fourth
time brings you back to $(x, y)$.

**Rotating about a point that is not the origin.** Slide everything so the centre sits at the origin, rotate, then
slide back. Worked example 4 shows how.

### Orientation: the one thing a reflection changes

Label a triangle $A, B, C$ going anticlockwise. After a translation or a rotation, $A', B', C'$ still go
anticlockwise. After a reflection, they go **clockwise**: the shape has been turned over, like a left glove becoming
a right glove. This is called reversing the **orientation**. It is the quickest way to tell a reflection from a
rotation when you see an object and its image.

<div class="pattern-row" markdown="0">
<svg viewBox="20 20 220 220" role="img" aria-label="Triangle ABC with A(1,1), B(4,1), C(1,3) in quadrant I; its quarter-turn image in quadrant II; its reflection in the x-axis in quadrant IV">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.35"><line x1="30" y1="30" x2="30" y2="230"/><line x1="30" y1="30" x2="230" y2="30"/><line x1="50" y1="30" x2="50" y2="230"/><line x1="30" y1="50" x2="230" y2="50"/><line x1="70" y1="30" x2="70" y2="230"/><line x1="30" y1="70" x2="230" y2="70"/><line x1="90" y1="30" x2="90" y2="230"/><line x1="30" y1="90" x2="230" y2="90"/><line x1="110" y1="30" x2="110" y2="230"/><line x1="30" y1="110" x2="230" y2="110"/><line x1="150" y1="30" x2="150" y2="230"/><line x1="30" y1="150" x2="230" y2="150"/><line x1="170" y1="30" x2="170" y2="230"/><line x1="30" y1="170" x2="230" y2="170"/><line x1="190" y1="30" x2="190" y2="230"/><line x1="30" y1="190" x2="230" y2="190"/><line x1="210" y1="30" x2="210" y2="230"/><line x1="30" y1="210" x2="230" y2="210"/><line x1="230" y1="30" x2="230" y2="230"/><line x1="30" y1="230" x2="230" y2="230"/></g>
  <g stroke="currentColor" stroke-width="1.6"><line x1="30" y1="130" x2="230" y2="130"/><line x1="130" y1="30" x2="130" y2="230"/></g>
  <polygon points="150,110 210,110 150,70" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="110,110 110,50 70,110" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="150,150 210,150 150,190" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="12" fill="currentColor">
    <text x="152" y="124">A</text><text x="212" y="124">B</text><text x="140" y="70">C</text>
    <text x="112" y="124">A′</text><text x="112" y="50">B′</text><text x="60" y="124">C′</text>
    <text x="152" y="146">A″</text><text x="212" y="146">B″</text><text x="154" y="202">C″</text>
  </g>
</svg>
</div>

In the picture, the orange triangle $ABC$ has $A(1, 1)$, $B(4, 1)$, $C(1, 3)$. The blue one is its quarter turn
anticlockwise about $O$: $A'(-1, 1)$, $B'(-1, 4)$, $C'(-3, 1)$. The green one is its reflection in the $x$-axis:
$A''(1, -1)$, $B''(4, -1)$, $C''(1, -3)$. Going $A \to B \to C$ on the orange triangle is anticlockwise; the blue copy
keeps that, while the green copy goes clockwise.

### Doing one transformation after another

Two transformations done one after the other can often be replaced by a single one:

- **Two reflections in parallel mirrors** make a **translation**, by **twice** the distance between the mirrors.
- **Two reflections in mirrors that cross** make a **rotation** about the crossing point, by **twice** the angle
  between the mirrors. Reflect in the $x$-axis and then the $y$-axis (mirrors at 90°):
  $(x, y) \to (x, -y) \to (-x, -y)$, the half turn, $2 \times 90° = 180°$.

Two flips undo each other's "turning over", which is why the result keeps orientation. In fact every isometry of the
plane can be made from **at most three** reflections. Mirrors are the atoms of rigid motion.

## Worked examples

**1. A translation.** Triangle $A(2, 1)$, $B(5, 1)$, $C(2, 4)$ is moved 6 left and 3 down: $(x, y) \to (x - 6,\ y - 3)$.

1. $A(2, 1) \to (2 - 6,\ 1 - 3) = (-4, -2)$.
2. $B(5, 1) \to (-1, -2)$.
3. $C(2, 4) \to (-4, 1)$.

The image straddles quadrants II and III. Side $AB$ was 3 long; $A'B'$ goes from $-4$ to $-1$, also 3 long.

**2. Reflections in the diagonals.** Reflect $P(3, -2)$ in $y = x$ and in $y = -x$.

1. In $y = x$, swap: $(-2, 3)$.
2. In $y = -x$, swap and change both signs: $(-(-2),\ -3) = (2, -3)$.

**3. Finding a mirror line.** $A(1, 3)$ has image $A'(7, 3)$ under a reflection. The mirror line is the
perpendicular bisector of $AA'$. The midpoint is halfway from 1 to 7 across, at $x = 4$, with $y = 3$. $AA'$ is
horizontal, so the mirror is vertical: the line $x = 4$.

**4. Rotating about a point that is not the origin.** Rotate $P(5, 2)$ by 90° anticlockwise about $C(2, 1)$.

1. Slide so $C$ goes to the origin: subtract $(2, 1)$. $P$ becomes $(3, 1)$.
2. Quarter turn about the origin: $(3, 1) \to (-1, 3)$.
3. Slide back: add $(2, 1)$. $P' = (1, 4)$.

Check: $P$ was 3 right and 1 up from $C$; $P'$ is 1 left and 3 up from $C$. Same distance from $C$, turned a quarter.

**5. Two mirrors in a row.** Reflect in $x = 1$, then in $x = 4$. Reflecting in $x = 1$ sends $x$ to $2 - x$ (1 is
the middle of $x$ and $2 - x$). Reflecting in $x = 4$ sends $x$ to $8 - x$. Together:
$x \to 2 - x \to 8 - (2 - x) = x + 6$. A translation 6 to the right, twice the gap of 3 between the mirrors.

## Try it

1. Translate $(-3, 4)$ by 5 right and 2 down.
2. Reflect $(4, -1)$ in the $y$-axis, and separately in the $x$-axis. Which quadrant is each image in?
3. Rotate $(-2, 5)$ by 180° about the origin.
4. Rotate $(3, -4)$ by 90° anticlockwise about the origin. Check that both points are the same distance from the
   origin by counting: how far is each from $O$?
5. Under which of translation, reflection and rotation does a triangle labelled anticlockwise stay anticlockwise?
6. $A(2, 3)$ is mapped to $A'(-3, 2)$ by a rotation about the origin. What rotation?
7. Reflect in the line $y = x$, then in the $x$-axis. Which single transformation does the same job?
8. Harder: rotate $(4, 1)$ by 90° clockwise about the point $(1, 1)$.

??? note "Answers"
    1. $(-3 + 5,\ 4 - 2) = (2, 2)$.
    2. In the $y$-axis: $(-4, -1)$, quadrant III. In the $x$-axis: $(4, 1)$, quadrant I.
    3. $(2, -5)$: both signs change.
    4. $(x, y) \to (-y, x)$ gives $(4, 3)$. Each point is the corner of a right triangle with legs 3 and 4 from the
       origin, so each is 5 from $O$ (the 3, 4, 5 triangle; level 6 proves it). A rotation keeps distances from the
       centre.
    5. Translation and rotation keep it anticlockwise. Reflection turns it clockwise.
    6. $(2, 3) \to (-3, 2)$ is $(x, y) \to (-y, x)$: a 90° anticlockwise rotation (quarter turn).
    7. $(x, y) \to (y, x) \to (y, -x)$. That is the rule for a 90° clockwise rotation about the origin. (Two mirrors
       crossing at 45° give a turn of $2 \times 45° = 90°$.)
    8. Slide by $(-1, -1)$: $(3, 0)$. Clockwise quarter turn $(x, y) \to (y, -x)$: $(0, -3)$. Slide back by
       $(1, 1)$: $(1, -2)$.

## Common mistake

**Mixing up the two quarter turns.** $(x, y) \to (-y, x)$ is anticlockwise; $(x, y) \to (y, -x)$ is clockwise. If
you are unsure, test with $(1, 0)$: a quarter turn anticlockwise must send it straight up to $(0, 1)$. The first rule
gives $(0, 1)$. Good.

**Rotating about the wrong centre.** The rules in the table are only for turns about the **origin**. For any other
centre, slide it to the origin first and slide back afterwards, as in worked example 4.

## Where it leads

- Previous lesson: [Constructing triangles](02-constructing-triangles.md).
- Next lesson: [Dilations and scale drawings](04-dilations-scale-drawings.md), a transformation that changes size.
- Isometries are why congruent shapes are "the same": [lesson 5](05-congruent-triangles.md).
- The symmetry of a shape is a transformation that leaves it looking unchanged: see
  [level 4](../level-4/index.md) for rotational symmetry.
- Transformations written as rules on numbers are functions, the heart of [Algebra](../../algebra/index.md). At
  university, rotations and reflections become matrices: [MAT240 at U of T](../../../uoft/MAT240H1/index.md).
- This level: [Level 5: constructions and transformations](index.md).
