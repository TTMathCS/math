---
title: "Explore: Angles and polygons"
---

# Explore: Angles and polygons

*Geometry · step 2 of 5*

## A question to start

Floor tiles come in squares, triangles and hexagons, and they fit together with no gaps. Have you ever seen a floor
tiled with regular pentagons, the five-sided shape with all sides equal? You will not find one: they cannot be
fitted together without leaving gaps. Why do squares, triangles and hexagons work, but pentagons do not?

The answer is all about **angles**. By the end of this page you will be able to explain it in one line.

## The idea

### What an angle is

When two straight lines meet at a point, they make an **angle**. The point where they meet is the **vertex**. The
angle measures **how much you turn** to get from one line to the other, not how long the lines are.

We measure angles in **degrees**, written with a small circle: 90°. A **full turn** all the way round is **360°**.
Nobody knows for certain why 360 was chosen long ago, but it is a handy number: it divides evenly by 2, 3, 4, 5, 6,
8, 9, 10, 12 and many more, so halves, thirds, quarters and sixths of a turn are all whole numbers of degrees.

| Turn | Degrees | Name |
| --- | --- | --- |
| a quarter turn | 90° | a **right angle**, a square corner |
| a half turn | 180° | a **straight angle**, a straight line |
| a full turn | 360° | all the way round |

Angles between 0° and 90° are **acute** (sharp). Angles between 90° and 180° are **obtuse** (blunt). Angles
between 180° and 360° are **reflex**. A **protractor** measures them: put its centre on the vertex, line up the zero
with one line, and read where the other line crosses the scale.

### Three angle facts

**1. Angles on a straight line add to 180°.** A straight line is a half turn, so if it is split into angles, they
share 180° between them. If one is 130°, the other is 50°.

**2. Angles around a point add to 360°.** All the way round is a full turn.

**3. Vertically opposite angles are equal.** When two straight lines cross, they make an X with four angles. The
angles opposite each other are equal. (Each one makes 180° with the same angle beside it, so they must be the same
size.)

### Parallel lines

Two lines are **parallel** if they go in the same direction and never meet, like the rails of a train track. When
another line crosses a pair of parallel lines, it makes the same angles at both crossings:

- **corresponding angles** (in the same position at each crossing, an F shape) are equal;
- **alternate angles** (on opposite sides of the crossing line, between the parallels, a Z shape) are equal;
- **co-interior angles** (on the same side, between the parallels, a C shape) add to 180°.

### The angles of a triangle add to 180°

Draw any triangle on paper and cut it out. Tear off its three corners and put them side by side, points together.
They always make a straight line: 180°.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 130" role="img" aria-label="A triangle with its three corners coloured, and the three corners placed together along a straight line">
  <polygon points="20,110 190,110 70,20" fill="none" stroke="currentColor" stroke-width="2"/>
  <path d="M 20 110 L 45 110 A 25 25 0 0 0 32.1 88.2 Z" fill="#eea66f"/>
  <path d="M 190 110 L 165 110 A 25 25 0 0 1 170 95 Z" fill="#9cc9ea"/>
  <path d="M 70 20 L 90 35 A 25 25 0 0 1 57.9 41.8 Z" fill="#7ccf9a"/>
  <line x1="240" y1="110" x2="430" y2="110" stroke="currentColor" stroke-width="2"/>
  <path d="M 335 110 L 375 110 A 40 40 0 0 0 354.4 75 Z" fill="#eea66f"/>
  <path d="M 335 110 L 354.4 75 A 40 40 0 0 0 303 86 Z" fill="#7ccf9a"/>
  <path d="M 335 110 L 303 86 A 40 40 0 0 0 295 110 Z" fill="#9cc9ea"/>
  <text x="335" y="128" font-size="13" text-anchor="middle" fill="currentColor">together: a straight line, 180°</text>
</svg>
</div>

This works for every triangle, large or small, fat or thin. The final step of this ladder proves it.

Some triangles have special names. An **equilateral** triangle has three equal sides and three equal angles, so each
angle is $180° \div 3 = 60°$. An **isosceles** triangle has two equal sides, and the two angles opposite them are
equal too. A **right** triangle has one angle of 90°.

### The angles of any polygon

Any polygon can be cut into triangles by drawing lines from one corner to all the others. A polygon with $n$ sides
splits into $n - 2$ triangles, and each triangle brings 180°. So

$$\text{sum of the inside angles} = (n - 2) \times 180°$$

| Polygon | Sides $n$ | Triangles | Angle sum |
| --- | --- | --- | --- |
| triangle | 3 | 1 | 180° |
| quadrilateral | 4 | 2 | 360° |
| pentagon | 5 | 3 | 540° |
| hexagon | 6 | 4 | 720° |

In a **regular** polygon all the angles are equal, so each one is the sum divided by $n$. A regular pentagon has
angles of $540° \div 5 = 108°$. A regular hexagon has angles of $720° \div 6 = 120°$.

Now the tiling question answers itself. Where tiles meet at a point, their corners must fill **360°** exactly.
Squares: $4 \times 90° = 360°$. Triangles: $6 \times 60° = 360°$. Hexagons: $3 \times 120° = 360°$. Pentagons: three
make $324°$, leaving a gap, and four make $432°$, which overlaps. 108 does not go into 360 a whole number of times,
so regular pentagons can never tile a floor.

## Worked example

**Each inside angle of a regular octagon (8 sides), like a stop sign.**

1. The sum of the inside angles is $(8 - 2) \times 180° = 6 \times 180° = 1080°$.
2. All 8 angles are equal, so each is $1080° \div 8 = 135°$.
3. Check it a second way: walk around the edge of the stop sign. At each corner you turn by $180° - 135° = 45°$
   (the **outside angle**). After 8 corners you have turned $8 \times 45° = 360°$, one full turn, and you face the
   way you started. ✓

The outside angles of any polygon add to 360°, because walking all the way round always turns you exactly once.
It is often the quickest route to the inside angles.

## Try it

1. Two angles of a triangle are 47° and 68°. What is the third?
2. Two angles sit side by side on a straight line. One is 113°. What is the other?
3. What is the sum of the inside angles of a decagon (10 sides)?
4. What is each inside angle of a regular hexagon? Use the outside angles to check.
5. An isosceles triangle has one angle of 40° between its two equal sides. What are the other two angles?
6. Two parallel lines are crossed by a third line, making a Z shape. One angle of the Z is 72°. What is the other?

??? note "Answers"
    1. $180° - 47° - 68° = 65°$.
    2. $180° - 113° = 67°$.
    3. $(10 - 2) \times 180° = 1440°$.
    4. $(6 - 2) \times 180° = 720°$ and $720° \div 6 = 120°$. Check: each outside angle is $360° \div 6 = 60°$, and
       $180° - 60° = 120°$. ✓
    5. The other two angles are equal and share $180° - 40° = 140°$, so each is $70°$.
    6. 72°. The two angles of a Z are alternate angles, and alternate angles are equal.

## Common mistake

**Thinking longer lines make a bigger angle.** An angle measures turning, not length. Draw a small corner and
extend both lines much further: the angle has not changed at all. A tiny triangle and a huge triangle can have
exactly the same angles, and that idea grows into *similar triangles* two steps up.

## Where it leads

- Next step: [Build: Pythagoras and circles](03-build.md), where the right angle gets its most famous rule.
- Back a step: [Play: shapes, tangrams and symmetry](01-play.md)
- Perimeters and areas of the shapes on this page: [Measurement](../measurement/index.md).
- Solving for a missing angle is solving an equation: [Algebra](../algebra/index.md).
