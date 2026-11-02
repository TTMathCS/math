---
title: "Angles with parallel lines"
---

# Angles with parallel lines

*Geometry · level 4, lesson 4 of 6*

## A question to start

Over two thousand years ago, a librarian named Eratosthenes, in Alexandria in Egypt, measured the size of the whole
Earth without leaving home. The story goes that at noon on midsummer's day the Sun shone straight down a deep well in
the town of Syene, far to the south, while at the same moment in Alexandria a tall stick cast a short shadow. He
measured the angle of that shadow: about one fiftieth of a full turn.

How could the angle of a shadow in one town tell him how much of the way round the Earth he was from another town?
The secret is one fact about **parallel lines**: the Sun is so far away that its rays arrive as parallel lines. By
the end of this lesson you will be able to follow his reasoning.

## The idea

### A line crossing two parallel lines

Take two parallel lines (marked with arrows) and a third line that crosses both of them. The crossing line is called
a **transversal** ("going across"). It makes four angles at each crossing: eight angles in all.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 200" role="img" aria-label="Two parallel lines crossed by a third line, the transversal, making eight angles: a, b, c, d at the top crossing and e, f, g, h at the bottom crossing; a, c, e, g are the smaller angles">
  <line x1="20" y1="60" x2="380" y2="60" stroke="currentColor" stroke-width="2"/>
  <line x1="20" y1="140" x2="380" y2="140" stroke="currentColor" stroke-width="2"/>
  <polyline points="316.0,65.0 323.0,60.0 316.0,55.0" fill="none" stroke="currentColor" stroke-width="2"/>
  <polyline points="316.0,145.0 323.0,140.0 316.0,135.0" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="155" y1="183.3" x2="251.2" y2="16.7" stroke="currentColor" stroke-width="2"/>
  <path d="M 226.2 60 L 246.2 60 A 20 20 0 0 0 236.2 42.7 Z" fill="#eea66f" fill-opacity="0.7"/>
  <text x="257.4" y="47" font-size="14" text-anchor="middle" fill="currentColor">a</text>
  <path d="M 226.2 60 L 236.2 42.7 A 20 20 0 0 0 206.2 60 Z" fill="#9cc9ea" fill-opacity="0.7"/>
  <text x="210.2" y="37.3" font-size="14" text-anchor="middle" fill="currentColor">b</text>
  <path d="M 226.2 60 L 206.2 60 A 20 20 0 0 0 216.2 77.3 Z" fill="#eea66f" fill-opacity="0.7"/>
  <text x="195" y="83" font-size="14" text-anchor="middle" fill="currentColor">c</text>
  <path d="M 226.2 60 L 216.2 77.3 A 20 20 0 0 0 246.2 60 Z" fill="#9cc9ea" fill-opacity="0.7"/>
  <text x="242.2" y="92.7" font-size="14" text-anchor="middle" fill="currentColor">d</text>
  <path d="M 180 140 L 200 140 A 20 20 0 0 0 190 122.7 Z" fill="#eea66f" fill-opacity="0.7"/>
  <text x="211.2" y="127" font-size="14" text-anchor="middle" fill="currentColor">e</text>
  <path d="M 180 140 L 190 122.7 A 20 20 0 0 0 160 140 Z" fill="#9cc9ea" fill-opacity="0.7"/>
  <text x="164" y="117.3" font-size="14" text-anchor="middle" fill="currentColor">f</text>
  <path d="M 180 140 L 160 140 A 20 20 0 0 0 170 157.3 Z" fill="#eea66f" fill-opacity="0.7"/>
  <text x="148.8" y="163" font-size="14" text-anchor="middle" fill="currentColor">g</text>
  <path d="M 180 140 L 170 157.3 A 20 20 0 0 0 200 140 Z" fill="#9cc9ea" fill-opacity="0.7"/>
  <text x="196" y="172.7" font-size="14" text-anchor="middle" fill="currentColor">h</text>
</svg>
</div>

Look closely and you will see that the two crossings look **exactly alike**. The transversal meets both parallel
lines at the same slant, so the four angles at the top crossing match the four at the bottom crossing: $a = e$,
$b = f$, $c = g$, $d = h$.

### Why the two crossings match

Imagine sliding the top parallel line straight down along the transversal, without turning it. Because the two lines
are parallel (they point in exactly the same direction), it lands exactly on the bottom line. The transversal slides
along itself, so it stays put. The whole top crossing lands on the bottom crossing, and every angle lands on its
partner. A slide does not change any angle, so the partners are equal.

This is the key step, and it depends completely on the lines being **parallel**. If the bottom line were tipped even
a little, the slide would not land on it, and the angles would not match.

(Careful mathematicians take one form of this, "a transversal makes equal corresponding angles with parallel lines",
as a starting rule of flat geometry, closely tied to Euclid's famous **parallel postulate**. Everything else in this
lesson is then proved from it.)

### Three names for three patterns

Pairs of angles in the picture get names by where they sit.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 510 180" role="img" aria-label="Three copies of the parallel lines and transversal. Corresponding angles in an F shape are equal; alternate angles in a Z shape are equal; co-interior angles in a C shape add to 180 degrees">
  <line x1="10" y1="40" x2="160" y2="40" stroke="currentColor" stroke-width="2"/>
  <line x1="10" y1="110" x2="160" y2="110" stroke="currentColor" stroke-width="2"/>
  <line x1="40" y1="144.6" x2="120.4" y2="5.4" stroke="currentColor" stroke-width="2"/>
  <path d="M 100.4 40 L 122.4 40 A 22 22 0 0 0 111.4 20.9 Z" fill="#7ccf9a"/>
  <path d="M 60 110 L 82 110 A 22 22 0 0 0 71 90.9 Z" fill="#7ccf9a"/>
  <path d="M 60 110 L 120.4 5.4 M 100.4 40 L 150.4 40 M 60 110 L 110 110" fill="none" stroke="#eea66f" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" stroke-opacity="0.85"/>
  <text x="85" y="170" font-size="12" text-anchor="middle" fill="currentColor">corresponding: equal (F)</text>
  <line x1="180" y1="40" x2="330" y2="40" stroke="currentColor" stroke-width="2"/>
  <line x1="180" y1="110" x2="330" y2="110" stroke="currentColor" stroke-width="2"/>
  <line x1="210" y1="144.6" x2="290.4" y2="5.4" stroke="currentColor" stroke-width="2"/>
  <path d="M 270.4 40 L 248.4 40 A 22 22 0 0 0 259.4 59.1 Z" fill="#7ccf9a"/>
  <path d="M 230 110 L 252 110 A 22 22 0 0 0 241 90.9 Z" fill="#7ccf9a"/>
  <path d="M 220.4 40 L 270.4 40 L 230 110 L 280 110" fill="none" stroke="#eea66f" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" stroke-opacity="0.85"/>
  <text x="255" y="170" font-size="12" text-anchor="middle" fill="currentColor">alternate: equal (Z)</text>
  <line x1="350" y1="40" x2="500" y2="40" stroke="currentColor" stroke-width="2"/>
  <line x1="350" y1="110" x2="500" y2="110" stroke="currentColor" stroke-width="2"/>
  <line x1="380" y1="144.6" x2="460.4" y2="5.4" stroke="currentColor" stroke-width="2"/>
  <path d="M 440.4 40 L 429.4 59.1 A 22 22 0 0 0 462.4 40 Z" fill="#7ccf9a"/>
  <path d="M 400 110 L 422 110 A 22 22 0 0 0 411 90.9 Z" fill="#7ccf9a"/>
  <path d="M 490.4 40 L 440.4 40 L 400 110 L 450 110" fill="none" stroke="#eea66f" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" stroke-opacity="0.85"/>
  <text x="425" y="170" font-size="12" text-anchor="middle" fill="currentColor">co-interior: add to 180° (C)</text>
</svg>
</div>

**Corresponding angles** are in the **same position** at each crossing: both above-right, or both below-left, and so
on. In the first picture the pairs are $a$ and $e$, $b$ and $f$, $c$ and $g$, $d$ and $h$. They make an **F** shape
(sometimes a backwards or upside-down F). **Corresponding angles are equal.** That is the sliding fact.

**Alternate angles** are **between** the parallel lines, on **opposite** sides of the transversal. The pairs are $c$
and $e$, and $d$ and $f$. They make a **Z** shape (sometimes a backwards Z, like an N). **Alternate angles are
equal.**

*Reason*: $c = a$ (vertically opposite, lesson 2) and $a = e$ (corresponding). So $c = e$.

**Co-interior angles** (also called **same-side interior** or **allied** angles) are **between** the parallel lines,
on the **same** side of the transversal. The pairs are $d$ and $e$, and $c$ and $f$. They make a **C** shape (or a U).
**Co-interior angles add to 180°.**

*Reason*: $d + c = 180°$ (angles on a straight line, lesson 1), and $c = e$ (alternate). So $d + e = 180°$.

So one sliding fact, plus the two facts from lessons 1 and 2, gives all three patterns. The letters F, Z and C are
only memory aids; the reasons are what matter.

### One angle tells you all eight

At each crossing, the four angles come in two sizes: a small one and a big one, adding to 180°. With parallel lines,
both crossings have the same two sizes. So if one of the eight angles is 60°, every angle is either **60°** or
**120°**. In the first picture, $a$, $c$, $e$, $g$ are the small ones and $b$, $d$, $f$, $h$ are the big ones.

### Working backwards: testing for parallel

The facts also work the other way round. If a transversal makes **equal corresponding angles** (or equal alternate
angles, or co-interior angles adding to 180°) with two lines, then those lines **are parallel**. (If they were not,
one of them would be tipped compared with the other, and the angles could not match.) This is how builders and
engineers check that two beams are parallel: they measure the angles a cross-piece makes with each.

### Euclid's proof that a triangle's angles add to 180°

Now the promise from the last lesson. Take any triangle with angles $a$, $b$, $c$. Through the top corner, draw a
line **parallel to the bottom side**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 165" role="img" aria-label="A triangle with angles a, b, c, and a line through the top corner parallel to the base. Next to c along the new line are copies of a and b, alternate angles">
  <polygon points="40,150 260,150 150,50" fill="#9cc9ea" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>
  <line x1="20" y1="50" x2="300" y2="50" stroke="currentColor" stroke-width="2"/>
  <polyline points="246.0,55.0 253.0,50.0 246.0,45.0" fill="none" stroke="currentColor" stroke-width="2"/>
  <polyline points="146.0,155.0 153.0,150.0 146.0,145.0" fill="none" stroke="currentColor" stroke-width="2"/>
  <path d="M 40 150 L 66 150 A 26 26 0 0 0 59.2 132.5 Z" fill="#eea66f"/>
  <path d="M 260 150 L 240.8 132.5 A 26 26 0 0 0 234 150 Z" fill="#7ccf9a"/>
  <path d="M 150 50 L 133.7 64.8 A 22 22 0 0 0 166.3 64.8 Z" fill="#9cc9ea"/>
  <path d="M 150 50 L 124 50 A 26 26 0 0 0 130.8 67.5 Z" fill="#eea66f"/>
  <path d="M 150 50 L 169.2 67.5 A 26 26 0 0 0 176 50 Z" fill="#7ccf9a"/>
  <text x="77.3" y="139.6" font-size="13" text-anchor="middle" fill="currentColor">a</text>
  <text x="222.7" y="139.6" font-size="13" text-anchor="middle" fill="currentColor">b</text>
  <text x="150" y="90" font-size="13" text-anchor="middle" fill="currentColor">c</text>
  <text x="112.7" y="68.4" font-size="13" text-anchor="middle" fill="currentColor">a</text>
  <text x="187.3" y="68.4" font-size="13" text-anchor="middle" fill="currentColor">b</text>
  <text x="160" y="30" font-size="12" text-anchor="middle" fill="currentColor">draw a line through the top, parallel to the base</text>
</svg>
</div>

1. Along the new line, at the top corner, there are three angles side by side: one on the left, $c$ in the middle,
   one on the right. They make a straight line, so they add to 180° (angles on a straight line).
2. The left one and the angle $a$ at the bottom-left are **alternate** angles (a Z shape, using the left side of the
   triangle as the transversal). So the left one equals $a$.
3. In the same way, the right one equals $b$ (alternate angles, using the right side as the transversal).
4. So $a + c + b = 180°$.

Every step has a reason, and nothing depends on the shape of the triangle. This is the proof in Euclid's *Elements*,
the most famous geometry book ever written, from about 300 BCE.

### A bent path between parallel lines

A favourite puzzle: a path leaves one parallel line, bends once, and meets the other. Find the angle at the bend.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 175" role="img" aria-label="Two parallel lines with a bent path between them: the path leaves the top line at 40 degrees and the bottom line at 35 degrees; a dashed line through the bend, parallel to both, splits the bend angle x into the two parts">
  <line x1="20" y1="40" x2="320" y2="40" stroke="currentColor" stroke-width="2"/>
  <line x1="20" y1="160" x2="320" y2="160" stroke="currentColor" stroke-width="2"/>
  <polyline points="166.0,45.0 173.0,40.0 166.0,35.0" fill="none" stroke="currentColor" stroke-width="2"/>
  <polyline points="166.0,165.0 173.0,160.0 166.0,155.0" fill="none" stroke="currentColor" stroke-width="2"/>
  <polyline points="90,40 161.5,100 75.8,160" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <line x1="20" y1="100" x2="320" y2="100" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <path d="M 90 40 L 109.9 56.7 A 26 26 0 0 0 116 40 Z" fill="#eea66f"/>
  <path d="M 75.8 160 L 101.8 160 A 26 26 0 0 0 97.1 145.1 Z" fill="#9cc9ea"/>
  <path d="M 161.5 100 L 144.6 85.9 A 22 22 0 0 0 139.5 100 Z" fill="#eea66f"/>
  <path d="M 161.5 100 L 139.5 100 A 22 22 0 0 0 143.5 112.6 Z" fill="#9cc9ea"/>
  <text x="127.6" y="57.7" font-size="12" text-anchor="middle" fill="currentColor">40°</text>
  <text x="115.9" y="151.4" font-size="12" text-anchor="middle" fill="currentColor">35°</text>
  <text x="128" y="91" font-size="14" text-anchor="middle" fill="currentColor">x</text>
</svg>
</div>

The trick is to draw an **extra line** through the bend, parallel to the other two (dashed). It splits the bend
angle $x$ into two parts. The top part is alternate with the 40° angle, so it is 40°. The bottom part is alternate
with the 35° angle, so it is 35°. So $x = 40 + 35 = 75°$.

Drawing an extra line that is not in the question is called a **construction**, and it is one of the most useful
ideas in geometry. It turns a hard picture into easy pieces.

### Back to Eratosthenes

The Sun's rays reaching Syene and Alexandria are parallel. A ray going straight down the well in Syene points towards
the centre of the Earth; so does the stick in Alexandria. Those two lines meet at the Earth's centre. The ray hitting
the top of the stick in Alexandria is parallel to the ray down the well, and the stick acts as a transversal. The
shadow angle at the stick and the angle at the centre of the Earth are **alternate angles**, so they are equal: about
a fiftieth of a full turn, roughly 7.2°. So the distance from Syene to Alexandria is about a fiftieth of the way round
the Earth. Multiply that distance by 50 and you have the Earth's circumference. The same idea could be used on Mars,
with two rovers and a sunny noon.

## Worked examples

**1. All eight from one.** In the first picture, $a = 60°$. Find $b$ to $h$.

- $b = 180 - 60 = 120°$ (angles on a straight line).
- $c = a = 60°$ (vertically opposite); $d = b = 120°$ (vertically opposite).
- $e = a = 60°$, $f = b = 120°$, $g = c = 60°$, $h = d = 120°$ (corresponding).

**2. Naming the reason.** Two parallel lines are crossed by a transversal. An angle between the lines on the left of
the transversal is 72°. Find the angle between the lines on the right of the transversal at the other crossing.

They are between the lines, on opposite sides of the transversal: **alternate** angles, so it is **72°**.

**3. Co-interior with algebra.** Two co-interior angles are $3x + 15$ and $2x - 10$. Find them.

Co-interior angles add to 180°: $5x + 5 = 180$, so $5x = 175$ and $x = 35$. The angles are
$3 \times 35 + 15 = 120°$ and $2 \times 35 - 10 = 60°$. Check: $120 + 60 = 180$. ✓

**4. Parallelograms.** In a parallelogram, each pair of neighbouring angles is a pair of co-interior angles (the
shared side is the transversal, and the two sides it crosses are parallel). So **neighbouring angles of a
parallelogram add to 180°**. That is the fact noticed in level 3, now proved. If one angle is 65°, the angles are
65°, 115°, 65°, 115°.

**5. Is it parallel?** A transversal crosses two lines, making corresponding angles of 82° and 85°. The angles are not
equal, so the lines are **not parallel**. They tip towards each other by 3°, and far enough along they will meet.

## Try it

1. Two parallel lines are crossed by a transversal and one angle is 110°. What are the sizes of the other seven
   angles?
2. Name the pair: (a) both above the lines, on the same side of the transversal, one at each crossing; (b) both
   between the lines, on opposite sides of the transversal; (c) both between the lines, on the same side.
3. Two alternate angles are $4y - 20$ and $2y + 30$. Find $y$ and the angles.
4. Two co-interior angles are in the ratio 1 : 2 (one is twice the other). Find them.
5. A path between two parallel lines leaves the top one at 30° and meets the bottom one at 50°, with the bend pointing
   the same way as in the picture. Find the bend angle.
6. In a trapezoid with two parallel sides, one angle is 70° and it sits at the end of one of the slanted sides. What
   is the angle at the other end of that slanted side?
7. Explain why alternate angles are equal, using only corresponding angles and vertically opposite angles.
8. Eratosthenes' shadow angle was about 7.2°. Why does that mean the distance from Syene to Alexandria was about one
   fiftieth of the Earth's circumference? ($360 \div 7.2 = ?$)

??? note "Answers"
    1. Three are **110°** and four are **70°** ($180 - 110 = 70$). At each crossing there are two of each size, so of
       the other seven: 110° three times and 70° four times.
    2. (a) **Corresponding** (the same position at each crossing). (b) **Alternate**. (c) **Co-interior**.
    3. Alternate angles are equal: $4y - 20 = 2y + 30$, so $2y = 50$ and $y = 25$. Each angle is
       $4 \times 25 - 20 = 80°$ (check: $2 \times 25 + 30 = 80$ ✓).
    4. $x + 2x = 180$ (co-interior), so $x = 60$: the angles are **60° and 120°**.
    5. Draw a line through the bend parallel to the other two. The parts of the bend are alternate with 30° and 50°,
       so the bend angle is $30 + 50 =$ **80°**.
    6. The slanted side is a transversal of the two parallel sides, and the two angles at its ends are co-interior.
       So the other angle is $180 - 70 =$ **110°**.
    7. Let $c$ and $e$ be alternate. The angle $a$ vertically opposite $c$ is equal to $c$, and $a$ is corresponding
       to $e$, so $a = e$. So $c = a = e$.
    8. $360 \div 7.2 = 50$, so 7.2° is one fiftieth of a full turn. The angle at the Earth's centre between the two
       towns is 7.2° (alternate angles), so the arc of the Earth's surface between them is one fiftieth of the way
       round.

## Common mistake

**Using the patterns when the lines are not parallel.** The F, Z and C facts are only true when the two lines are
parallel. Look for the arrow marks, or a statement that they are parallel. Without them, corresponding angles can be
anything.

**Mixing up "equal" and "add to 180°".** Corresponding and alternate angles are **equal**. Co-interior angles **add
to 180°**. A quick check: in any picture there are only two sizes, small and big. Two small or two big are equal; one
of each adds to 180°. Co-interior pairs are always one small and one big.

## Where it leads

- Back: [Angles in a triangle add to 180°](03-triangle-angle-sum.md) · Next: [Angles inside and outside any polygon](05-polygon-angles.md)
- [Level 4 page](index.md) · [Geometry topic page](../index.md)
- Parallel and perpendicular lines first appeared in [level 3](../level-3/03-parallel-perpendicular.md).
- On a sphere, there are **no** parallel lines, and Euclid's proof breaks: see [level 8](../level-8/index.md).
- Parallel lines on a grid have equal slopes: [level 6](../level-6/index.md) and [Algebra](../../algebra/index.md).
- Measuring the size of a planet from angles and distances: [Measurement](../../measurement/index.md).
