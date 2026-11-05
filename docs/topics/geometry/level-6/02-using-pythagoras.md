---
title: "Using Pythagoras"
---

# Using Pythagoras

*Geometry · level 6, lesson 2 of 6*

## A question to start

Stand on flat ground on Mars, with your eyes about 1.8 m above the surface, and look out to the horizon. How far away
is the edge of the world?

On Earth the answer is about 4.8 km. On Mars, which is a smaller ball, the ground curves away faster, and the horizon
is only about **3.5 km** away. Astronauts there will notice that the world feels closer. Both numbers come from the
same right triangle, one with its corners at your eye, at the horizon point and at the centre of the planet. This
lesson is about finding the right triangle hiding inside a problem, and then letting Pythagoras do the work.

## The idea

### The two ways to use the theorem

From [lesson 1](01-pythagorean-proofs.md), in a right triangle with legs $a$, $b$ and hypotenuse $c$:

$$a^2 + b^2 = c^2$$

**To find the hypotenuse**, add the squares of the legs, then take the square root:

$$c = \sqrt{a^2 + b^2}$$

**To find a leg**, subtract: the square of the hypotenuse minus the square of the other leg, then the square root:

$$a = \sqrt{c^2 - b^2}$$

A **square root** undoes squaring: $\sqrt{49} = 7$ because $7^2 = 49$. Lengths are positive, so we always take the
positive root.

### Exact answers and simplifying roots

Often the answer is not a whole number. For legs 1 and 2, $c = \sqrt{1 + 4} = \sqrt5 \approx 2.236$. Writing $\sqrt5$
is the **exact** answer; $2.236$ is a rounded one. Exact answers are often neater and they never collect rounding
errors.

Roots can often be **simplified** by pulling out a square factor, using $\sqrt{p \times q} = \sqrt p \times \sqrt q$:

$$\sqrt{50} = \sqrt{25 \times 2} = \sqrt{25} \times \sqrt2 = 5\sqrt2$$

Look for the biggest square number that divides the number under the root: 4, 9, 16, 25, 36, 49, ...
So $\sqrt{12} = 2\sqrt3$, $\sqrt{72} = 6\sqrt2$, $\sqrt{20} = 2\sqrt5$.

### Finding the right triangle

Most problems do not hand you a right triangle. You have to find one, or make one by drawing a line. The common
places they hide:

- **A rectangle's diagonal** cuts it into two right triangles. Diagonal $= \sqrt{\text{length}^2 + \text{width}^2}$.
- **An isosceles triangle** splits down its line of symmetry into two right triangles. The line from the top meets
  the base at its midpoint, at right angles ([level 5, lesson 5](../level-5/05-congruent-triangles.md)), so each half
  has the slanted side as hypotenuse and **half the base** as a leg.
- **A ladder against a wall**: wall and ground meet at a right angle, and the ladder is the hypotenuse.
- **Two moves at right angles**, like east then north: the straight-line distance is the hypotenuse.
- **A radius and a tangent** meet at a right angle ([level 5, lesson 6](../level-5/06-circle-words.md)).
- **Half a chord**, the radius to its end, and the perpendicular from the centre.

### The diagonal of a box

How long is the longest straight stick that fits in a box $l$ long, $w$ wide and $h$ high? It goes from one bottom
corner to the opposite top corner, through the inside: the **space diagonal**. Use Pythagoras twice.

<div class="pattern-row" markdown="0">
<svg viewBox="20 20 250 160" role="img" aria-label="A box drawn in perspective; an orange diagonal crosses the floor from the front bottom-left corner to the back bottom-right corner, then a vertical edge rises to the top, and a blue space diagonal goes straight from the front bottom-left corner to the back top-right corner">
  <g fill="none" stroke="currentColor" stroke-width="1.5">
    <rect x="40" y="80" width="160" height="80"/>
    <polyline points="40,80 90,40 250,40 200,80"/><line x1="250" y1="40" x2="250" y2="120"/><line x1="200" y1="160" x2="250" y2="120"/>
  </g>
  <g stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" fill="none"><polyline points="40,160 90,120 250,120"/><line x1="90" y1="120" x2="90" y2="40"/></g>
  <line x1="40" y1="160" x2="250" y2="120" stroke="#eea66f" stroke-width="3"/>
  <line x1="250" y1="120" x2="250" y2="40" stroke="#7ccf9a" stroke-width="3"/>
  <line x1="40" y1="160" x2="250" y2="40" stroke="#9cc9ea" stroke-width="3"/>
  <g font-size="13" fill="currentColor">
    <text x="112" y="176">l</text><text x="228" y="150">w</text><text x="256" y="84">h</text><text x="150" y="152">f</text><text x="132" y="94">d</text>
  </g>
</svg>
</div>

1. Across the floor, the diagonal $f$ (orange) is the hypotenuse of a right triangle with legs $l$ and $w$:
   $f^2 = l^2 + w^2$.
2. The orange floor diagonal, the green upright edge $h$ and the blue space diagonal $d$ make a second right triangle,
   standing up inside the box (the upright edge is at right angles to the whole floor). So $d^2 = f^2 + h^2$.
3. Put the two together:

$$d = \sqrt{l^2 + w^2 + h^2}$$

That is Pythagoras in three dimensions: three squares instead of two.

### Pythagorean triples

A **Pythagorean triple** is three whole numbers $a$, $b$, $c$ with $a^2 + b^2 = c^2$: 3, 4, 5 and 5, 12, 13 are the
famous ones. Any multiple of a triple is a triple too (6, 8, 10 or 15, 20, 25), because multiplying every side by $k$
multiplies every square by $k^2$. A triple whose numbers share no common factor is called **primitive**.

**A recipe that makes all of them.** Pick two whole numbers $m > n$. Then

$$a = m^2 - n^2, \qquad b = 2mn, \qquad c = m^2 + n^2$$

is always a triple. **Why:** multiply out.

$$a^2 + b^2 = (m^2 - n^2)^2 + (2mn)^2 = m^4 - 2m^2n^2 + n^4 + 4m^2n^2 = m^4 + 2m^2n^2 + n^4 = (m^2 + n^2)^2 = c^2$$

| $m$ | $n$ | $m^2 - n^2$ | $2mn$ | $m^2 + n^2$ |
| --- | --- | --- | --- | --- |
| 2 | 1 | 3 | 4 | 5 |
| 3 | 2 | 5 | 12 | 13 |
| 4 | 1 | 15 | 8 | 17 |
| 4 | 3 | 7 | 24 | 25 |
| 5 | 2 | 21 | 20 | 29 |
| 5 | 4 | 9 | 40 | 41 |

This recipe is in Euclid's *Elements*. Every primitive triple comes from it, with $m$ and $n$ sharing no factor and
one of them even (that part takes more proof, found in [Number theory](../../number-theory/index.md)).

**An odd-number shortcut.** For any odd number $a$ from 3 up, the two whole numbers either side of half of $a^2$ make
a triple: $a = 7$, $a^2 = 49$, half is 24.5, so 7, 24, 25. Try $a = 9$: 9, 40, 41.

### The distance to the horizon

Here is the opening question. Let the planet have radius $R$ and your eye be a height $h$ above the ground. Your line
of sight to the horizon just grazes the planet: it is a **tangent**, touching at the horizon point $T$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 20 300 180" role="img" aria-label="Part of a large circle for the planet with centre O far below; an eye point P stands a little above the top; the line of sight from P touches the circle at T, making a right angle with the radius OT">
  <path d="M -10.7 138.5 A 250 250 0 0 1 310.7 138.5" fill="#eea66f" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>
  <line x1="150" y1="40" x2="276.7" y2="114.5" stroke="#9cc9ea" stroke-width="2.5"/>
  <g stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"><line x1="150" y1="40" x2="150" y2="200"/><line x1="276.7" y1="114.5" x2="226.4" y2="200"/></g>
  <g fill="currentColor"><circle cx="150" cy="40" r="3.5"/><circle cx="276.7" cy="114.5" r="3.5"/></g>
  <g font-size="13" fill="currentColor">
    <text x="130" y="36">P</text><text x="282" y="112">T</text><text x="214" y="70">d</text><text x="136" y="66">h</text>
    <text x="154" y="160">R</text><text x="258" y="160">R</text><text x="156" y="196">down to O</text>
  </g>
</svg>
</div>

The radius $OT$ is perpendicular to the tangent, so triangle $OTP$ has a right angle at $T$. Its hypotenuse is
$OP = R + h$ and its legs are $R$ and the distance $d$. So

$$d^2 + R^2 = (R + h)^2 = R^2 + 2Rh + h^2, \qquad d = \sqrt{2Rh + h^2}$$

For a person, $h$ is tiny compared with $R$, and $h^2$ hardly matters, so $d \approx \sqrt{2Rh}$.

<figure class="play" data-play="pythag"><span class="ai-tag">AI-created</span><figcaption><b>Why it works.</b> The same four triangles leave c² one way and a² + b² the other.</figcaption></figure>

## Worked examples

**1. A ladder.** A 13 m ladder leans against a wall with its foot 5 m out. How high does it reach?

1. The ladder is the hypotenuse: $c = 13$. One leg is 5.
2. Height $= \sqrt{13^2 - 5^2} = \sqrt{169 - 25} = \sqrt{144} = 12$ m.

**2. The sliding ladder.** A 10 m ladder reaches 8 m up a wall, so its foot is $\sqrt{100 - 64} = 6$ m out. The top
slips down 1 m, to 7 m. How far does the foot slide out?

1. New distance out: $\sqrt{10^2 - 7^2} = \sqrt{51} \approx 7.14$ m.
2. The foot moves $7.14 - 6 = 1.14$ m, a bit **more** than the 1 m the top dropped. The ladder's length stays the
   same, but the two legs do not change by the same amount.

**3. An equilateral triangle's height.** Side 2. Cut it down the middle: the hypotenuse is 2 and one leg is half the
base, 1. Height $= \sqrt{4 - 1} = \sqrt3 \approx 1.732$. (For side $s$ the height is $\tfrac{\sqrt3}{2}s$.)

**4. Will the stick fit?** A box is 60 cm by 50 cm by 40 cm. Will a 1 m stick fit inside?

$d = \sqrt{60^2 + 50^2 + 40^2} = \sqrt{3600 + 2500 + 1600} = \sqrt{7700} \approx 87.7$ cm. No: the longest stick that
fits is under 88 cm.

**5. The horizon.** Mars has radius about 3389.5 km. An eye height of 1.8 m is 0.0018 km.

1. $d = \sqrt{2 \times 3389.5 \times 0.0018 + 0.0018^2} \approx \sqrt{12.2} \approx 3.49$ km.
2. On Earth, radius about 6371 km: $d \approx \sqrt{2 \times 6371 \times 0.0018} \approx \sqrt{22.9} \approx 4.79$ km.

## Try it

1. A right triangle has legs 9 cm and 12 cm. Find the hypotenuse.
2. The hypotenuse is 26 and one leg is 10. Find the other leg.
3. Find the diagonal of a 7 m by 24 m rectangle.
4. Find the exact hypotenuse when the legs are 2 and 4, in simplest form, and then to two decimal places.
5. An equilateral triangle has sides of 10 cm. Find its height, exactly and to one decimal place.
6. A box measures 2 by 3 by 6. How long is its space diagonal?
7. Use $m^2 - n^2$, $2mn$, $m^2 + n^2$ with $m = 4, n = 1$ and with $m = 5, n = 2$. Check one of them.
8. Harder: a rover's mast camera on Mars is lifted on a tower so that it is 100 m above the ground. Roughly how far
   away is its horizon? (Use $R = 3389.5$ km.)

??? note "Answers"
    1. $\sqrt{81 + 144} = \sqrt{225} = 15$ cm.
    2. $\sqrt{26^2 - 10^2} = \sqrt{676 - 100} = \sqrt{576} = 24$.
    3. $\sqrt{49 + 576} = \sqrt{625} = 25$ m.
    4. $\sqrt{4 + 16} = \sqrt{20} = \sqrt{4 \times 5} = 2\sqrt5 \approx 4.47$.
    5. Halves: hypotenuse 10, leg 5. Height $= \sqrt{100 - 25} = \sqrt{75} = \sqrt{25 \times 3} = 5\sqrt3 \approx 8.7$
       cm.
    6. $\sqrt{4 + 9 + 36} = \sqrt{49} = 7$.
    7. $m = 4, n = 1$: $16 - 1 = 15$, $2 \times 4 \times 1 = 8$, $16 + 1 = 17$. Check: $225 + 64 = 289 = 17^2$.
       $m = 5, n = 2$: $25 - 4 = 21$, $20$, $29$. Check: $441 + 400 = 841 = 29^2$.
    8. $h = 0.1$ km. $d = \sqrt{2 \times 3389.5 \times 0.1 + 0.01} = \sqrt{677.91} \approx 26.0$ km. Raising the camera
       from 1.8 m to 100 m pushes the horizon from about 3.5 km to about 26 km.

## Common mistake

**Adding when you should subtract.** If the hypotenuse is one of the two lengths you know, you must **subtract**
squares. Check your answer: the hypotenuse is the longest side, so a leg can never come out longer than it.

**Square-rooting each term.** $\sqrt{a^2 + b^2}$ is **not** $a + b$. For 3 and 4, $\sqrt{9 + 16} = 5$, but
$3 + 4 = 7$. The square root of a sum is not the sum of the square roots. (The triangle inequality says the
hypotenuse is always shorter than $a + b$.)

## Where it leads

- Previous lesson: [The Pythagorean theorem: three proofs](01-pythagorean-proofs.md).
- Next lesson: [Distance and midpoint](03-distance-midpoint.md), Pythagoras on the coordinate grid.
- Right triangles with angles, not just sides: sine, cosine and tangent in [level 7](../level-7/index.md).
- Which numbers make triples, and why: [Number theory](../../number-theory/index.md). Square roots and surds:
  [Numbers](../../numbers/index.md).
- This level: [Level 6: Pythagoras and circles](index.md).
