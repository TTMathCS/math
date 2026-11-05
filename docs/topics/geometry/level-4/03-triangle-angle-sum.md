---
title: "Angles in a triangle add to 180°"
---

# Angles in a triangle add to 180°

*Geometry · level 4, lesson 3 of 6*

## A question to start

Draw any triangle you like: tall and thin, short and fat, tiny, or as big as a football field. Measure its three
angles and add them up. You will get 180°, or very close to it (measuring is never perfect).

Now the real question. Thousands of different triangles all give the same answer. Is that a coincidence? Is it just
that we have not yet found the strange triangle that gives 181°? Or is there a reason, so that **no** flat triangle
anywhere could ever give anything else?

## The idea

### The fact

**The three angles inside any triangle add up to 180°.**

Inside angles are also called **interior angles**. If a triangle has angles $a$, $b$ and $c$, then

$$a + b + c = 180°$$

This lesson gives three ways to see it: two hands-on ones, then a real reason that works for every triangle at once.

### Way 1: tear off the corners

Draw a triangle on paper and cut it out. Colour each corner, then tear the three corners off. Put the three points
together, side by side, with no gaps and no overlaps.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 172" role="img" aria-label="A triangle with its three corners coloured, and the three torn-off corners placed point to point along a straight line">
  <polygon points="20,140 200,140 75,25" fill="none" stroke="currentColor" stroke-width="2"/>
  <path d="M 20 140 L 46 140 A 26 26 0 0 0 31.2 116.5 Z" fill="#eea66f"/>
  <path d="M 200 140 L 180.9 122.4 A 26 26 0 0 0 174 140 Z" fill="#9cc9ea"/>
  <path d="M 75 25 L 63.8 48.5 A 26 26 0 0 0 94.1 42.6 Z" fill="#7ccf9a"/>
  <line x1="240" y1="140" x2="440" y2="140" stroke="currentColor" stroke-width="2"/>
  <path d="M 340 140 L 382 140 A 42 42 0 0 0 370.9 111.6 Z" fill="#9cc9ea"/>
  <path d="M 340 140 L 370.9 111.6 A 42 42 0 0 0 321.9 102.1 Z" fill="#7ccf9a"/>
  <path d="M 340 140 L 321.9 102.1 A 42 42 0 0 0 298 140 Z" fill="#eea66f"/>
  <text x="340" y="162" font-size="12" text-anchor="middle" fill="currentColor">the three corners make a straight line</text>
</svg>
</div>

They always make a straight line: a straight angle, 180°. Try it with a very different triangle. It still works.

This is convincing, but it is not yet a proof. Tearing is not exact, and a straight-looking line might be off by half
a degree. And we have only tried a few triangles. We want a reason.

### Way 2: fold the corners in

Here is a neater paper method, with no tearing.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 165" role="img" aria-label="A triangle with dashed fold lines: a line across joining the midpoints of two sides, and two upright lines down to the base; the three corners fold in to meet at one point on the base">
  <polygon points="20,150 260,150 100,30" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>
  <line x1="60" y1="90" x2="180" y2="90" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/>
  <line x1="60" y1="90" x2="60" y2="150" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/>
  <line x1="180" y1="90" x2="180" y2="150" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/>
  <line x1="100" y1="30" x2="100" y2="150" stroke="currentColor" stroke-width="1" stroke-dasharray="2 3"/>
  <path d="M 20 150 L 42 150 A 22 22 0 0 0 32.2 131.7 Z" fill="#eea66f"/>
  <path d="M 260 150 L 242.4 136.8 A 22 22 0 0 0 238 150 Z" fill="#9cc9ea"/>
  <path d="M 100 30 L 87.8 48.3 A 22 22 0 0 0 117.6 43.2 Z" fill="#7ccf9a"/>
  <circle cx="100" cy="150" r="4" fill="currentColor"/>
</svg>
</div>

1. Cut out a triangle and put its longest side at the bottom.
2. Fold the top corner straight down so that the fold line is **parallel** to the bottom and the corner just touches
   the bottom side. The corner lands exactly where a line straight down from it would meet the base (the dot).
3. Fold the left corner in along an upright fold so that it also touches the dot.
4. Fold the right corner in the same way.

The three corners now meet at the dot, side by side, along the bottom edge, which is straight. So again they make
180°. And the folded shape is a neat rectangle, half as wide as the base and half as tall as the triangle. The paper
lies exactly two layers thick everywhere, so the triangle's area is twice the rectangle's: twice half the base times
half the height, which is half of base times height. That is the usual area rule for a triangle, proved by folding
(more in [Measurement](../../measurement/index.md)).

### Way 3: walk round it (a reason for every triangle)

Now an argument with no paper at all. Imagine walking all the way round the edge of a triangle, like a robot on a
track, starting in the middle of the bottom side and facing along it.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 200" role="img" aria-label="Walking round a triangle anticlockwise: at each corner the walker turns through an outside angle, shown between the dashed continuation of one side and the next side">
  <polygon points="60,150 250,150 130,40" fill="#9cc9ea" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>
  <line x1="250" y1="150" x2="305.0" y2="150.0" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 3"/>
  <path d="M 250 150 L 274 150 A 24 24 0 0 0 232.3 133.8 Z" fill="#9cc9ea"/>
  <text x="268.1" y="107.4" font-size="12" text-anchor="middle" fill="currentColor">turn 1</text>
  <line x1="130" y1="40" x2="89.5" y2="2.8" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 3"/>
  <path d="M 130 40 L 112.3 23.8 A 24 24 0 0 0 117.1 60.2 Z" fill="#7ccf9a"/>
  <text x="80.4" y="50.5" font-size="12" text-anchor="middle" fill="currentColor">turn 2</text>
  <line x1="60" y1="150" x2="30.5" y2="196.4" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 3"/>
  <path d="M 60 150 L 47.1 170.2 A 24 24 0 0 0 84 150 Z" fill="#eea66f"/>
  <text x="84.1" y="197.8" font-size="12" text-anchor="middle" fill="currentColor">turn 3</text>
</svg>
</div>

At each corner you stop and turn to face along the next side. The amount you turn is the angle between the way you
were going (the dashed line, carrying on straight) and the next side. This is called the **exterior angle** (outside
angle) at that corner.

Two facts:

**Fact A.** At each corner, the turn and the interior angle sit side by side on a straight line (the dashed line
continues the side you came along). So

turn $= 180° -$ interior angle (angles on a straight line).

**Fact B.** When you get back to the start, you are facing exactly the way you started, and you have turned the
same way (left) every time, once round. So the three turns together make **one full turn: 360°**.

Now put them together. With interior angles $a$, $b$, $c$:

$$(180 - a) + (180 - b) + (180 - c) = 360$$

The left side is $540 - (a + b + c)$. So $540 - (a + b + c) = 360$, which means

$$a + b + c = 540 - 360 = 180.$$

This argument never used the size or shape of the triangle, so it works for **every** triangle. And it gave us a
bonus fact, which you will use again in lesson 5: **the exterior angles of a triangle add to 360°**.

(Fact B is very believable, but a careful mathematician wants a reason for it too. In the next lesson you will meet
the facts about angles and parallel lines, and they give the classic proof of the 180° fact, the one Euclid wrote down
over two thousand years ago. It is in [the next lesson](04-parallel-line-angles.md).)

### Facts that come free

Once you know the 180° fact, many other facts follow at once.

- **An equilateral triangle has angles of 60°.** All three angles are equal (level 3), so each is $180 \div 3 = 60$.
- **A right triangle's two other angles are complementary.** The right angle uses 90°, so the other two share
  $180 - 90 = 90$ degrees.
- **The base angles of an isosceles triangle** are each half of what is left after the top angle. If the top angle is
  40°, the base angles share $180 - 40 = 140$, so each is 70°.
- **A triangle has at most one right or obtuse angle.** Two angles of 90° or more would already use 180° or more,
  leaving nothing for the third. (You saw a picture reason for this in level 3; now you have a number reason too.)

### The exterior angle fact

Extend one side of a triangle past a corner. The outside angle $d$ that you make is equal to the sum of the two
interior angles at the **other** two corners: $d = a + b$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 160" role="img" aria-label="A triangle with one side extended past a corner; the outside angle d at that corner equals the sum of the two inside angles a and b at the other corners">
  <polygon points="30,140 200,140 110,40" fill="#9cc9ea" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>
  <line x1="200" y1="140" x2="300" y2="140" stroke="currentColor" stroke-width="2"/>
  <path d="M 30 140 L 54 140 A 24 24 0 0 0 45 121.3 Z" fill="#eea66f"/>
  <path d="M 110 40 L 95 58.7 A 24 24 0 0 0 126.1 57.8 Z" fill="#7ccf9a"/>
  <path d="M 200 140 L 224 140 A 24 24 0 0 0 183.9 122.2 Z" fill="#eea66f" fill-opacity="0.6"/>
  <path d="M 200 140 L 188 126.6 A 18 18 0 0 0 182 140 Z" fill="currentColor" fill-opacity="0.2"/>
  <text x="64.2" y="127.5" font-size="13" text-anchor="middle" fill="currentColor">a</text>
  <text x="111.1" y="82" font-size="13" text-anchor="middle" fill="currentColor">b</text>
  <text x="216.3" y="107.5" font-size="13" text-anchor="middle" fill="currentColor">d</text>
  <text x="172.6" y="131.8" font-size="12" text-anchor="middle" fill="currentColor">c</text>
</svg>
</div>

**Why?** Call the interior angle at that corner $c$.

1. $a + b + c = 180°$ (angles in a triangle).
2. $c + d = 180°$ (angles on a straight line).
3. Both $a + b$ and $d$ are what you add to $c$ to make 180°, so $d = a + b$.

This is a shortcut: you can find the exterior angle without ever finding $c$.

<figure class="play" data-play="angle" data-mode="triangle"><span class="ai-tag">AI-created</span><figcaption><b>Always 180°.</b> Set two angles; the third has to make up the rest.</figcaption></figure>

## Worked examples

**1. The third angle.** A triangle has angles 47° and 68°. Find the third.

$180 - 47 - 68 = 65°$ (angles in a triangle add to 180°).

**2. An isosceles triangle.** In an isosceles triangle one **base** angle is 52°. Find the other two angles.

- The other base angle is also **52°** (base angles of an isosceles triangle are equal).
- The top angle is $180 - 52 - 52 =$ **76°** (angles in a triangle).

**3. Angles in a ratio, with algebra.** The angles of a triangle are $x$, $2x$ and $3x$. Find them.

$x + 2x + 3x = 180$, so $6x = 180$ and $x = 30$. The angles are **30°, 60°, 90°**: it is a right triangle.

**4. Exterior angle.** One side of a triangle is extended, making an exterior angle of 125°. One of the two
interior angles at the other corners is 70°. Find the other one.

Exterior angle = sum of the two opposite interior angles: $125 = 70 + ?$, so $? = 55°$. (Check the long way: the
interior angle next to the 125° is $180 - 125 = 55°$, and $70 + 55 + 55 = 180$. ✓)

**5. Two triangles sharing a side.** A quadrilateral $ABCD$ is cut by the diagonal $AC$ into two triangles. The angles
of the quadrilateral are made of the angles of the two triangles. So the angles of **any** quadrilateral add to
$180 + 180 = 360°$. That is the fact you previewed in level 3, now with a proper reason. (For a quadrilateral with a
corner poking inwards, cut along the diagonal that stays inside.)

## Try it

1. Find the third angle: (a) 35° and 90°; (b) 100° and 25°; (c) 60° and 60°.
2. An isosceles triangle has a top angle of 30°. Find the base angles.
3. An isosceles triangle has a base angle of 30°. Find the top angle.
4. A right triangle has one angle of 28°. Find the third angle.
5. The angles of a triangle are $x$, $x + 20$ and $x + 40$. Find them.
6. An exterior angle of a triangle is 140°, and the two interior angles at the other corners are equal. Find them.
7. Can a triangle have angles of 50°, 60° and 80°? Why or why not?
8. Walking round a triangle, you turn 120° at the first corner and 110° at the second. How much do you turn at the
   third? What are the triangle's three interior angles?

??? note "Answers"
    1. (a) $180 - 35 - 90 = 55°$. (b) $180 - 100 - 25 = 55°$. (c) $180 - 60 - 60 = 60°$ (an equilateral triangle).
    2. The base angles share $180 - 30 = 150$, so each is **75°**.
    3. The two base angles are both 30°, so the top angle is $180 - 30 - 30 =$ **120°** (an obtuse isosceles
       triangle).
    4. $180 - 90 - 28 = 62°$.
    5. $x + (x + 20) + (x + 40) = 3x + 60 = 180$, so $3x = 120$ and $x = 40$. The angles are **40°, 60°, 80°**.
    6. The exterior angle equals the sum of the two: $140 = y + y$, so each is **70°**. (The third interior angle is
       $180 - 140 = 40°$, and $70 + 70 + 40 = 180$ ✓.)
    7. **No**. $50 + 60 + 80 = 190$, not 180.
    8. The three turns make 360°, so the third turn is $360 - 120 - 110 = 130°$. Each interior angle is 180° minus
       the turn: $180 - 120 = 60°$, $180 - 110 = 70°$, $180 - 130 = 50°$. Check: $60 + 70 + 50 = 180$. ✓

## Common mistake

**Believing a fact because it worked on a few drawings.** Measuring ten triangles and getting about 180° is
evidence, not proof. The walking argument (and the parallel-line proof in the next lesson) shows it must work for
**every** flat triangle. Mathematicians always ask "but why?"

**Mixing up the exterior angle with the angle next to it.** The exterior angle equals the sum of the two **far**
interior angles, not the one right next to it. The one next to it is its supplement: together they make 180°.

## Where it leads

- Back: [Vertically opposite angles](02-vertically-opposite.md) · Next: [Angles with parallel lines](04-parallel-line-angles.md), with Euclid's proof of today's fact.
- [Level 4 page](index.md) · [Geometry topic page](../index.md)
- What triangles can be named by their sides and angles: [Triangles by sides and by angles](../level-3/04-triangles-sides-angles.md).
- The fact needs a **flat** surface. On a globe, a triangle can have three right angles, adding to 270°:
  [level 8](../level-8/index.md) explores geometry on a sphere.
- Writing this kind of argument as a formal proof: [level 8](../level-8/index.md) and [Logic](../../logic/index.md).
