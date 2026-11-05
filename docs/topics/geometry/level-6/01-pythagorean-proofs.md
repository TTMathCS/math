---
title: "The Pythagorean theorem: three proofs"
---

# The Pythagorean theorem: three proofs

*Geometry · level 6, lesson 1 of 6*

## A question to start

There is a book, *The Pythagorean Proposition* by Elisha Scott Loomis, that collects **more than 350** different
proofs of a single fact about right triangles. People have never stopped finding new ones. Euclid gave one; Albert
Einstein found one as a schoolboy (so he later wrote); and James Garfield, a member of the United States Congress who
later became president, published one in a teachers' magazine in 1876.

Why would anyone need 350 proofs of the same thing? Because each proof shows the fact from a different side, and some
of those sides lead somewhere new. This lesson gives you three, each with a different idea inside it: moving pieces
around, scaling, and adding up areas. By the end you will not just **know** that $a^2 + b^2 = c^2$; you will be able to
explain to anyone **why** it has to be true.

## The idea

### The statement

A **right triangle** has one right angle (90°). The side opposite the right angle is the **hypotenuse**, always the
longest side. The two sides that make the right angle are the **legs**.

> **Pythagorean theorem.** In a right triangle with legs $a$ and $b$ and hypotenuse $c$, the squares on the legs
> add up to the square on the hypotenuse:

$$a^2 + b^2 = c^2$$

"$a^2$" can be read literally as the **area of a square** with side $a$. So the theorem says: build a square on each
side of the triangle; the two squares on the legs, together, have exactly the same area as the square on the
hypotenuse.

For the triangle with sides 3, 4 and 5: the squares have areas 9, 16 and 25, and $9 + 16 = 25$.

It is named after Pythagoras, a Greek thinker of about 2500 years ago, but it was known long before him. A Babylonian
clay tablet called Plimpton 322, more than a thousand years older, lists sets of numbers that fit it, and Chinese and
Indian texts use it too. The story goes that the followers of Pythagoras were the first to **prove** it, but no proof
from that time survives.

### What a proof has to do

Checking 3, 4, 5 is not a proof. Neither is checking a hundred triangles. A proof must work for **every** right
triangle at once, so it uses letters $a$, $b$, $c$ for sides of any length and argues only from facts that are always
true. Each of the three proofs below does that.

### Proof 1: rearranging squares

Take four copies of the right triangle and a big square frame with side $a + b$. Arrange the four triangles in the
frame in two different ways:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 190" role="img" aria-label="Two equal squares of side a plus b. In the left one, four right triangles sit in the corners leaving a tilted square of area c squared. In the right one, the same four triangles form two rectangles, leaving a square of area a squared and a square of area b squared">
  <g stroke="currentColor" stroke-width="1.5">
    <rect x="20" y="10" width="160" height="160" fill="none" stroke-width="2"/>
    <polygon points="20,10 80,10 20,110" fill="#eea66f"/>
    <polygon points="180,10 180,70 80,10" fill="#eea66f"/>
    <polygon points="180,170 120,170 180,70" fill="#eea66f"/>
    <polygon points="20,170 20,110 120,170" fill="#eea66f"/>
    <polygon points="80,10 180,70 120,170 20,110" fill="#9cc9ea"/>
    <rect x="220" y="10" width="160" height="160" fill="none" stroke-width="2"/>
    <rect x="220" y="10" width="60" height="60" fill="#7ccf9a"/>
    <rect x="280" y="70" width="100" height="100" fill="#9cc9ea"/>
    <polygon points="280,10 380,10 280,70" fill="#eea66f"/>
    <polygon points="380,10 380,70 280,70" fill="#eea66f"/>
    <polygon points="220,70 280,70 220,170" fill="#eea66f"/>
    <polygon points="280,70 280,170 220,170" fill="#eea66f"/>
  </g>
  <g font-size="14" fill="currentColor" text-anchor="middle">
    <text x="100" y="95">c²</text><text x="50" y="7">a</text><text x="130" y="7">b</text>
    <text x="250" y="45">a²</text><text x="330" y="125">b²</text>
    <text x="250" y="186">a</text><text x="330" y="186">b</text><text x="70" y="186">b</text><text x="150" y="186">a</text>
  </g>
</svg>
</div>

Both big squares have the same area, $(a + b)^2$. Both contain the same four orange triangles. Take the four
triangles away from each, and what is left must have the same area too. On the left, what is left is the tilted
square $c^2$. On the right, it is the two squares $a^2$ and $b^2$. So

$$c^2 = a^2 + b^2$$

**One check.** Is the blue shape on the left really a square? Its four sides are all hypotenuses, so all equal to
$c$. At each of its corners, three angles sit along a side of the frame: the two acute angles of a triangle and the
corner of the blue shape. The two acute angles of a right triangle add to $90°$ (the three angles add to $180°$ and
one of them is $90°$). Angles on a straight line add to $180°$, so the corner is $180° - 90° = 90°$. Four equal sides
and four right angles: a square.

This proof needs no algebra at all. It is a proof by moving pieces, and it is perhaps the clearest of the 350.

### Proof 2: similar triangles

This proof uses the idea from [level 5, lesson 4](../level-5/04-dilations-scale-drawings.md): shapes that are scaled
copies of each other. Two triangles with the same three angles are **similar**: one is a dilation of the other
(maybe turned or flipped), so the ratios of matching sides are equal. (Level 7 studies similarity in depth.)

Take the right triangle $ABC$ with the right angle at $C$. Drop a perpendicular from $C$ to the hypotenuse, meeting it
at $D$. This line is called the **altitude** to the hypotenuse. It splits $c$ into two pieces, $AD$ and $DB$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 40 280 150" role="img" aria-label="Right triangle ABC with right angle at C on top and hypotenuse AB along the bottom; the altitude from C meets AB at D, splitting the big triangle into two smaller right triangles">
  <polygon points="20,170 100,56.9 100,170" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="100,56.9 260,170 100,170" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="20,170 260,170 100,56.9" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <rect x="100" y="160" width="10" height="10" fill="none" stroke="currentColor" stroke-width="1"/>
  <g font-size="14" fill="currentColor">
    <text x="6" y="182">A</text><text x="264" y="182">B</text><text x="94" y="50">C</text><text x="96" y="186">D</text>
    <text x="44" y="108">b</text><text x="186" y="104">a</text>
  </g>
</svg>
</div>

Now there are three right triangles: the big one $ABC$, the small orange one $ACD$, and the blue one $CBD$.

**Step 1: they all have the same angles.** The orange triangle $ACD$ and the big triangle $ABC$ share the angle at $A$,
and both have a right angle. Their third angles are then equal too, because all three add to $180°$. So $ACD$ is
similar to $ABC$, with $A \leftrightarrow A$, $D \leftrightarrow C$ (the right angles) and $C \leftrightarrow B$. In the
same way, the blue triangle $CBD$ shares the angle at $B$ with the big one and is similar to it.

**Step 2: compare matching sides.** In the big triangle, the leg $AC = b$ next to angle $A$, divided by the
hypotenuse $AB = c$, gives $\dfrac{b}{c}$. In the orange triangle, the side next to angle $A$ is $AD$ and the
hypotenuse is $AC = b$. Similar triangles have equal ratios, so

$$\frac{AD}{b} = \frac{b}{c}, \qquad \text{which gives} \qquad b^2 = c \times AD.$$

The same comparison in the blue triangle, at angle $B$, gives

$$\frac{DB}{a} = \frac{a}{c}, \qquad \text{which gives} \qquad a^2 = c \times DB.$$

**Step 3: add.**

$$a^2 + b^2 = c \times DB + c \times AD = c \times (DB + AD) = c \times c = c^2.$$

This proof explains something proof 1 does not: the square $c^2$ on the hypotenuse splits into two rectangles,
one with area $a^2$ and one with area $b^2$, cut along the line of the altitude. It is essentially the proof Euclid
gave, in Book I of the *Elements*.

### Proof 3: Garfield's trapezoid

Garfield's idea was to use **half** of proof 1's picture. Put two copies of the triangle at the two ends of a
straight base, one with leg $b$ along the base and one with leg $a$ along it, and join the tops. You get a
**trapezoid** (a four-sided shape with one pair of parallel sides; here the two upright sides $a$ and $b$ are
parallel).

<div class="pattern-row" markdown="0">
<svg viewBox="10 50 250 150" role="img" aria-label="A trapezoid with a vertical left side a, a vertical right side b and base a plus b, cut into two orange right triangles with legs a and b and a blue isosceles right triangle with two sides c in the middle">
  <polygon points="30,190 150,190 30,100" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="150,190 240,190 240,70" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="30,100 150,190 240,70" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="14" fill="currentColor" text-anchor="middle">
    <text x="20" y="150">a</text><text x="90" y="205">b</text><text x="195" y="205">a</text><text x="250" y="134">b</text>
    <text x="96" y="136">c</text><text x="184" y="146">c</text><text x="150" y="160">90°</text>
  </g>
</svg>
</div>

The middle triangle has two sides equal to $c$, and the angle between them, at the bottom, is a right angle: it is
$180°$ minus the two acute angles of the triangle, which add to $90°$ (the same check as in proof 1).

Now find the trapezoid's area in two ways.

**As a trapezoid:** the area of a trapezoid is the average of the parallel sides times the distance between them.
Here that is $\dfrac{a + b}{2} \times (a + b) = \dfrac{(a + b)^2}{2}$.

**As three triangles:** two orange ones of area $\tfrac12 ab$ each, and the blue one of area $\tfrac12 c \times c$.

$$\frac{(a + b)^2}{2} = \frac12 ab + \frac12 ab + \frac12 c^2$$

Multiply both sides by 2: $(a + b)^2 = 2ab + c^2$. Multiply out the left side,
$(a + b)^2 = a^2 + 2ab + b^2$. So $a^2 + 2ab + b^2 = 2ab + c^2$, and taking $2ab$ from both sides,

$$a^2 + b^2 = c^2.$$

### The converse: it works backwards too

The **converse** of a statement swaps the "if" and the "then". The converse here is: **if** a triangle's sides
satisfy $a^2 + b^2 = c^2$, **then** it has a right angle (opposite $c$). That is a different claim and needs its own
proof. Here is a short one using congruence.

Suppose triangle $T$ has sides $a$, $b$, $c$ with $a^2 + b^2 = c^2$. Build a second triangle with a right angle
between legs $a$ and $b$. By the theorem, its hypotenuse $h$ satisfies $h^2 = a^2 + b^2 = c^2$, so $h = c$. Now both
triangles have sides $a$, $b$, $c$: by SSS ([level 5, lesson 5](../level-5/05-congruent-triangles.md)) they are
congruent, so $T$ also has a right angle.

More is true. Open the hinge between sides $a$ and $b$ wider than 90° and the third side grows; close it and the third
side shrinks. So with $c$ the longest side:

- $a^2 + b^2 = c^2$: right angle;
- $a^2 + b^2 > c^2$: the angle opposite $c$ is **acute** (less than 90°);
- $a^2 + b^2 < c^2$: the angle opposite $c$ is **obtuse** (more than 90°).

<figure class="play" data-play="pythag"><span class="ai-tag">AI-created</span><figcaption><b>Press Play to slide the triangles.</b> Four copies of one right triangle inside a square of side a + b. Round the edge, they leave a tilted square, c². Slid into two rectangles, they leave a² and b². The triangles are the same, so the empty space is the same: c² = a² + b².</figcaption></figure>

## Worked examples

**1. Squares you can count.** For the 5, 12, 13 triangle: the squares on the legs have areas $25$ and $144$, and
$25 + 144 = 169 = 13^2$. In proof 1, the frame has side $5 + 12 = 17$ and area $289$; the four triangles have area
$4 \times \tfrac12 \times 5 \times 12 = 120$; and $289 - 120 = 169$, the tilted square.

**2. Using the altitude.** In proof 2's picture, suppose $AD = 9$ and $DB = 16$, so $c = 25$.

1. $b^2 = c \times AD = 25 \times 9 = 225$, so $b = 15$.
2. $a^2 = c \times DB = 25 \times 16 = 400$, so $a = 20$.
3. Check: $15^2 + 20^2 = 225 + 400 = 625 = 25^2$.
4. A bonus: the orange and blue triangles are similar to each other too, and comparing them gives
   $CD^2 = AD \times DB = 9 \times 16 = 144$, so the altitude is $CD = 12$.

**3. Garfield with numbers.** For $a = 3$, $b = 4$, $c = 5$: the trapezoid's area is $\dfrac{(3 + 4)^2}{2} = 24.5$.
The three triangles: $\tfrac12 \times 3 \times 4 = 6$, another 6, and $\tfrac12 \times 5 \times 5 = 12.5$. Total
$6 + 6 + 12.5 = 24.5$. The two counts agree, as the proof promises.

**4. The converse.** Is the triangle with sides 9, 40, 41 right-angled? $9^2 + 40^2 = 81 + 1600 = 1681$, and
$41^2 = 1681$. Equal, so yes: the right angle is opposite the 41 side.

## Try it

1. Show that 20, 21, 29 is a right triangle.
2. For legs 6 and 8, find the area of the big frame in proof 1, the area of the four triangles, and the area of the
   tilted square. What is $c$?
3. A triangle has sides 6, 7 and 9. Is its largest angle right, acute or obtuse?
4. In proof 2's picture, $AD = 4$ and $DB = 9$. Find $a^2$, $b^2$ and the altitude $CD$. Check that $a^2 + b^2 = c^2$.
5. Check Garfield's two area counts for $a = 5$, $b = 12$.
6. The squares on the two legs of a right triangle have areas 50 cm² and 94 cm². How long is the hypotenuse?
7. Explain in your own words why, in proof 1, the two big squares must have the same area left over once the
   triangles are taken away.
8. Harder: a triangle has sides 7, 8 and 12. Without drawing, decide whether it has an obtuse angle, and say which
   side it is opposite.

??? note "Answers"
    1. $20^2 + 21^2 = 400 + 441 = 841 = 29^2$. By the converse, it has a right angle opposite the 29 side.
    2. Frame side $6 + 8 = 14$, area $196$. Triangles: $4 \times \tfrac12 \times 6 \times 8 = 96$. Tilted square:
       $196 - 96 = 100$, so $c = \sqrt{100} = 10$.
    3. Largest side 9: $6^2 + 7^2 = 36 + 49 = 85$ and $9^2 = 81$. Since $85 > 81$, the largest angle is acute (so
       the triangle is acute).
    4. $c = 4 + 9 = 13$. $b^2 = 13 \times 4 = 52$, $a^2 = 13 \times 9 = 117$, and $52 + 117 = 169 = 13^2$. The
       altitude: $CD^2 = 4 \times 9 = 36$, so $CD = 6$.
    5. Trapezoid: $\dfrac{(5 + 12)^2}{2} = \dfrac{289}{2} = 144.5$. Triangles: $30 + 30 + \tfrac12 \times 13^2$, where
       $c = 13$ since $25 + 144 = 169$; that is $30 + 30 + 84.5 = 144.5$. They agree.
    6. The square on the hypotenuse has area $50 + 94 = 144$ cm², so the hypotenuse is $\sqrt{144} = 12$ cm.
    7. Both big squares have the same side $a + b$, so the same area. Both contain four identical triangles with the
       same total area. Equal minus equal is equal, so the leftover regions, $c^2$ on one side and $a^2 + b^2$ on the
       other, have the same area.
    8. Longest side 12: $7^2 + 8^2 = 49 + 64 = 113$ and $12^2 = 144$. Since $113 < 144$, the angle opposite the 12 side
       is obtuse.

## Common mistake

**Using the theorem on a triangle with no right angle.** $a^2 + b^2 = c^2$ is true **only** for right triangles. For
the 6, 7, 9 triangle, $6^2 + 7^2 \ne 9^2$. If there is no right angle (or you cannot show there is one), the theorem
does not apply; level 7's cosine law is the version for every triangle.

**Picking the wrong side as $c$.** $c$ is always the hypotenuse, the side **opposite the right angle**, and the
longest. When testing the converse, put the longest side on its own: test $7^2 + 24^2$ against $25^2$, not
$7^2 + 25^2$ against $24^2$.

## Where it leads

- Back: [Level 5: congruent triangles](../level-5/05-congruent-triangles.md) and
  [dilations](../level-5/04-dilations-scale-drawings.md), which the proofs used.
- Next lesson: [Using Pythagoras](02-using-pythagoras.md): ladders, boxes, the horizon and whole-number triples.
- Similar triangles and the cosine law, the theorem for every triangle: [level 7](../level-7/index.md).
- Squares and square roots, and why $\sqrt2$ is not a fraction: [Numbers](../../numbers/index.md);
  $(a + b)^2 = a^2 + 2ab + b^2$: [Algebra](../../algebra/index.md).
- This level: [Level 6: Pythagoras and circles](index.md).
