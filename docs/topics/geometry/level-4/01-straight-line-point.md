---
title: "Angles on a straight line and around a point"
---

# Angles on a straight line and around a point

*Geometry · level 4, lesson 1 of 6*

## A question to start

A pizza is cut into slices from the centre, but not evenly: the slices have angles of 50°, 65°, 40°, 80° and 70°,
and one slice is missing from the box. How big was the missing slice?

You do not need a protractor, or even the pizza. Two facts are enough, and by the end of this lesson you will be able
to find any missing angle like this one in a few seconds. (The answer is at the end of the worked examples.)

## The idea

### From measuring to working out

In level 3 you **measured** angles with a protractor. Measuring is useful, but it is never perfect: a pencil line has
thickness, and a protractor is only marked in whole degrees. This level is about something more powerful: **working
out** angles exactly, by reasoning, without measuring at all. Each lesson adds one angle fact, gives the reason it is
true, and then uses it with the others like pieces of a puzzle.

### Fact 1: angles on a straight line add to 180°

Take a straight line and a point on it. Draw one or more rays from that point, all on the same side of the line. They
split the straight angle into smaller angles that sit **next to each other** with no gaps and no overlaps.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 155" role="img" aria-label="A straight line with two rays from one point making three angles: 50 degrees, x, and 70 degrees">
  <line x1="160" y1="120" x2="20" y2="120" stroke="currentColor" stroke-width="2"/>
  <line x1="160" y1="120" x2="300" y2="120" stroke="currentColor" stroke-width="2"/>
  <path d="M 160 120 L 194 120 A 34 34 0 0 0 171.6 88.1 Z" fill="#eea66f"/>
  <text x="202.6" y="94.2" font-size="13" text-anchor="middle" fill="currentColor">70°</text>
  <path d="M 160 120 L 171.6 88.1 A 34 34 0 0 0 138.1 94 Z" fill="#9cc9ea"/>
  <text x="151" y="72.8" font-size="13" text-anchor="middle" fill="currentColor">x</text>
  <path d="M 160 120 L 138.1 94 A 34 34 0 0 0 126 120 Z" fill="#7ccf9a"/>
  <text x="112.9" y="102" font-size="13" text-anchor="middle" fill="currentColor">50°</text>
  <line x1="160" y1="120" x2="265" y2="120" stroke="currentColor" stroke-width="2"/>
  <line x1="160" y1="120" x2="195.9" y2="21.3" stroke="currentColor" stroke-width="2"/>
  <line x1="160" y1="120" x2="92.5" y2="39.6" stroke="currentColor" stroke-width="2"/>
  <line x1="160" y1="120" x2="55" y2="120" stroke="currentColor" stroke-width="2"/>
  <circle cx="160" cy="120" r="3" fill="currentColor"/>
  <text x="160" y="145" font-size="12" text-anchor="middle" fill="currentColor">a straight line: the angles add to 180°</text>
</svg>
</div>

**Why do they add to 180°?** Imagine standing at the point, facing along the line to the right, and turning to face
along the line to the left. That is a half turn: 180°, by the definition of a degree. You can make the half turn all
at once, or in several smaller turns, stopping to face each ray on the way. The small turns together make the same
half turn, so they add to 180°. Nothing is lost and nothing is counted twice.

So in the drawing, $70 + x + 50 = 180$. That gives $x = 180 - 70 - 50 = 60$ degrees.

Two angles that add to 180° are called **supplementary**. Each one is the **supplement** of the other: the supplement
of 70° is 110°, because $70 + 110 = 180$.

### Fact 2: angles around a point add to 360°

If rays go out from a point in **all** directions, the angles between neighbouring rays go all the way round, so
they make a full turn: 360°.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 220 210" role="img" aria-label="Four angles around a point: 110 degrees, 90 degrees, 85 degrees, and x">
  <path d="M 110 105 L 142 105 A 32 32 0 0 0 99.1 74.9 Z" fill="#eea66f"/>
  <text x="138.7" y="68" font-size="13" text-anchor="middle" fill="currentColor">110°</text>
  <path d="M 110 105 L 99.1 74.9 A 32 32 0 0 0 79.9 115.9 Z" fill="#9cc9ea"/>
  <text x="64.7" y="87.9" font-size="13" text-anchor="middle" fill="currentColor">90°</text>
  <path d="M 110 105 L 79.9 115.9 A 32 32 0 0 0 118.3 135.9 Z" fill="#7ccf9a"/>
  <text x="86.9" y="153.4" font-size="13" text-anchor="middle" fill="currentColor">85°</text>
  <path d="M 110 105 L 118.3 135.9 A 32 32 0 0 0 142 105 Z" fill="#9cc9ea"/>
  <text x="149.7" y="139.4" font-size="13" text-anchor="middle" fill="currentColor">x</text>
  <line x1="110" y1="105" x2="195" y2="105" stroke="currentColor" stroke-width="2"/>
  <line x1="110" y1="105" x2="80.9" y2="25.1" stroke="currentColor" stroke-width="2"/>
  <line x1="110" y1="105" x2="30.1" y2="134.1" stroke="currentColor" stroke-width="2"/>
  <line x1="110" y1="105" x2="132" y2="187.1" stroke="currentColor" stroke-width="2"/>
  <circle cx="110" cy="105" r="3" fill="currentColor"/>
  <polyline points="105.9,93.7 94.6,97.8 98.7,109.1" fill="none" stroke="currentColor" stroke-width="1.5"/>
</svg>
</div>

In the drawing, $110 + 90 + 85 + x = 360$. So $x = 360 - 285 = 75$ degrees.

Here is another way to see that Fact 2 agrees with Fact 1: any straight line through the point splits the full turn
into two half turns, $180 + 180 = 360$.

### A small cousin: angles in a right angle add to 90°

If a right angle is split into two parts, the two parts add to 90°. Two angles that add to 90° are called
**complementary**, and each one is the **complement** of the other. The complement of 35° is 55°.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 280 145" role="img" aria-label="A right angle split into two parts: 35 degrees and x">
  <path d="M 40 130 L 90 130 A 50 50 0 0 0 81 101.3 Z" fill="#eea66f"/>
  <text x="104.9" y="113.6" font-size="13" text-anchor="middle" fill="currentColor">35°</text>
  <path d="M 40 130 L 81 101.3 A 50 50 0 0 0 40 80 Z" fill="#9cc9ea"/>
  <text x="71.4" y="73.7" font-size="13" text-anchor="middle" fill="currentColor">x</text>
  <line x1="40" y1="130" x2="150" y2="130" stroke="currentColor" stroke-width="2"/>
  <line x1="40" y1="130" x2="130.1" y2="66.9" stroke="currentColor" stroke-width="2"/>
  <line x1="40" y1="130" x2="40" y2="20" stroke="currentColor" stroke-width="2"/>
  <circle cx="40" cy="130" r="3" fill="currentColor"/>
  <polyline points="52,130 52,118 40,118" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="200" y="70" font-size="13" text-anchor="middle" fill="currentColor">x + 35° = 90°</text>
  <text x="200" y="92" font-size="13" text-anchor="middle" fill="currentColor">x = 55°</text>
</svg>
</div>

A way to remember which is which: **C**omplementary makes a **C**orner (90°), **S**upplementary makes a **S**traight
line (180°).

### Adjacent angles

Angles that share a vertex and an arm, and sit side by side without overlapping, are called **adjacent** ("lying
next to"). All the facts above are about adjacent angles that fill up a corner, a straight line or a full turn.

Be careful: two angles can be supplementary without being adjacent. A 30° angle in one corner of a page and a 150°
angle in another corner are supplementary (they add to 180°), even though they are nowhere near each other. Being
supplementary or complementary is about the **numbers**; being adjacent is about **where they sit**.

### Using letters for unknown angles

Mathematicians use a letter, often $x$, $y$ or the Greek letter $\theta$ ("theta"), for an angle they do not know
yet. Then an angle fact turns into an **equation**: a number sentence with an equals sign that we can solve.

Sometimes the angles are written using the letter in a more complicated way, such as $2x$ (twice $x$) or $x + 30°$.
The method is the same: write down the fact as an equation, then solve it step by step.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 130" role="img" aria-label="A straight line split into two angles labelled 2x and x plus 30 degrees">
  <line x1="160" y1="110" x2="300" y2="110" stroke="currentColor" stroke-width="2"/>
  <line x1="160" y1="110" x2="20" y2="110" stroke="currentColor" stroke-width="2"/>
  <path d="M 160 110 L 194 110 A 34 34 0 0 0 154.1 76.5 Z" fill="#9cc9ea"/>
  <text x="197.3" y="69.6" font-size="13" text-anchor="middle" fill="currentColor">2x</text>
  <path d="M 160 110 L 154.1 76.5 A 34 34 0 0 0 126 110 Z" fill="#eea66f"/>
  <text x="115.6" y="76.7" font-size="13" text-anchor="middle" fill="currentColor">x + 30°</text>
  <line x1="160" y1="110" x2="260" y2="110" stroke="currentColor" stroke-width="2"/>
  <line x1="160" y1="110" x2="142.6" y2="11.5" stroke="currentColor" stroke-width="2"/>
  <line x1="160" y1="110" x2="60" y2="110" stroke="currentColor" stroke-width="2"/>
  <circle cx="160" cy="110" r="3" fill="currentColor"/>
</svg>
</div>

The two angles are on a straight line, so they add to 180°:

$$2x + (x + 30) = 180$$

Collect the $x$'s: $2x + x = 3x$. So $3x + 30 = 180$. Take 30 from both sides: $3x = 150$. Divide both sides by 3:
$x = 50$.

But $x$ is not the answer to "what are the angles?". The angles are $2x = 100°$ and $x + 30 = 80°$. **Check**:
$100 + 80 = 180$. ✓ Always check by putting the numbers back in.

### Writing a reason

From now on, every time you work out an angle, write **which fact** you used in a few words next to the
calculation, like "angles on a straight line" or "angles around a point". This is the start of a **proof**: an
argument where every step has a reason. Writing the reason also catches mistakes, because if you cannot name a fact
for a step, the step is probably wrong.

<figure class="play" data-play="angle" data-mode="one"><span class="ai-tag">AI-created</span><figcaption><b>A straight angle.</b> Turn to 180°: a straight line. All the way round is 360°.</figcaption></figure>

## Worked examples

**1. One missing angle on a line.** Two adjacent angles on a straight line are 128° and $a$. Find $a$.

$a = 180 - 128 = 52°$ (angles on a straight line add to 180°).

**2. Several angles around a point.** Around a point are angles of 95°, 120°, 60° and $b$. Find $b$.

$95 + 120 + 60 = 275$, so $b = 360 - 275 = 85°$ (angles around a point add to 360°).

**3. Equal angles around a point.** Five equal angles fill the space around a point. How big is each?

$360 \div 5 = 72°$ (angles around a point add to 360°). This is the angle at the centre of a regular pentagon, cut
from the middle like a pizza.

**4. An equation with letters.** Three angles on a straight line are $x$, $2x$ and $3x$. Find each angle.

$x + 2x + 3x = 180$ (angles on a straight line), so $6x = 180$ and $x = 30$. The angles are **30°, 60° and 90°**.
Check: $30 + 60 + 90 = 180$. ✓

**5. Two facts together.** Around a point there are a right angle, a straight angle, and two more angles $y$ and
$2y$. Find them. The right angle and the straight angle use up $90 + 180 = 270$ degrees, so the other two share
$360 - 270 = 90$ degrees (angles around a point). Then $y + 2y = 3y = 90$, so $y = 30$ and the angles are
**30° and 60°**.

**6. The pizza.** The slices around the centre add to 360° (angles around a point). The five we know add to
$50 + 65 + 40 + 80 + 70 = 305$. The missing slice was $360 - 305 = 55°$.

## Try it

1. Find the supplement of: (a) 45°; (b) 132°; (c) 90°.
2. Find the complement of: (a) 20°; (b) 63°.
3. Three adjacent angles on a straight line are 47°, 68° and $c$. Find $c$.
4. Around a point are angles of 135°, 75°, 90° and $d$. Find $d$.
5. Four angles around a point are $x$, $x$, $2x$ and $2x$. Find each angle.
6. Two angles on a straight line are $3y + 10$ and $y + 30$ (both in degrees). Find $y$ and both angles.
7. An angle is 4 times its own complement. How big is it?
8. Can two obtuse angles be supplementary? Can two acute angles be supplementary? Explain.

??? note "Answers"
    1. (a) $180 - 45 = 135°$. (b) $180 - 132 = 48°$. (c) $180 - 90 = 90°$: a right angle is its own supplement.
    2. (a) $90 - 20 = 70°$. (b) $90 - 63 = 27°$.
    3. $c = 180 - 47 - 68 = 65°$ (angles on a straight line).
    4. $135 + 75 + 90 = 300$, so $d = 360 - 300 = 60°$ (angles around a point).
    5. $x + x + 2x + 2x = 6x = 360$ (angles around a point), so $x = 60$. The angles are **60°, 60°, 120°, 120°**.
       Check: $60 + 60 + 120 + 120 = 360$. ✓
    6. $(3y + 10) + (y + 30) = 180$, so $4y + 40 = 180$, $4y = 140$, $y = 35$. The angles are
       $3 \times 35 + 10 = 115°$ and $35 + 30 = 65°$. Check: $115 + 65 = 180$. ✓
    7. Call the complement $x$. Then the angle is $4x$ and $4x + x = 90$, so $5x = 90$ and $x = 18$. The angle is
       $4 \times 18 = 72$, so the angle is **72°** (and its complement is 18°; check: $72 + 18 = 90$ ✓).
    8. Two obtuse angles: **no**. Each is more than 90°, so together they are more than 180°. Two acute angles: **no**.
       Each is less than 90°, so together they are less than 180°. Supplementary pairs are always one acute and one
       obtuse, or two right angles.

## Common mistake

**Stopping at $x$.** If the angles are $2x$ and $x + 30$, finding $x = 50$ is only half the job. The question asks
for the **angles**: 100° and 80°. Read the question again before you write the final answer.

**Using 180° for angles around a point (or 360° on a line).** Look at the picture: if the rays go only above the line,
use 180°; if they go all the way round, use 360°. A quick check: angles around a point should look like a whole
pizza, angles on a line like half a pizza.

## Where it leads

- Next: [Vertically opposite angles](02-vertically-opposite.md), the first fact you can **prove** from these two.
- [Level 4 page](index.md) · [Geometry topic page](../index.md)
- Back to where degrees came from: [Measuring angles with a protractor](../level-3/02-measuring-angles.md) in level 3.
- Solving $3x + 30 = 180$ is a linear equation: much more in [Algebra](../../algebra/index.md).
