---
title: "Vertically opposite angles"
---

# Vertically opposite angles

*Geometry · level 4, lesson 2 of 6*

## A question to start

Open a pair of scissors a little way. The two blades make a narrow angle at the front. Now look at the handles at the
back: they make an angle too.

Open the scissors wider. The front angle gets bigger, and so does the back one. Close them, and both shrink together.
Are the two angles always **exactly** the same size, or only roughly? And if they are exactly equal, how could you be
sure without measuring every possible opening?

## The idea

### Two lines crossing

When two straight lines cross, they make **four angles** around the crossing point, like an X. Label them $a$, $b$,
$c$, $d$ going round.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 240 180" role="img" aria-label="Two straight lines crossing to make four angles a, b, c, d; a is opposite c, and b is opposite d">
  <path d="M 120 90 L 144.6 72.8 A 30 30 0 0 0 95.4 72.8 Z" fill="#eea66f"/>
  <text x="120" y="48" font-size="13" text-anchor="middle" fill="currentColor">a</text>
  <path d="M 120 90 L 95.4 72.8 A 30 30 0 0 0 95.4 107.2 Z" fill="#9cc9ea"/>
  <text x="74" y="94" font-size="13" text-anchor="middle" fill="currentColor">b</text>
  <path d="M 120 90 L 95.4 107.2 A 30 30 0 0 0 144.6 107.2 Z" fill="#eea66f"/>
  <text x="120" y="140" font-size="13" text-anchor="middle" fill="currentColor">c</text>
  <path d="M 120 90 L 144.6 107.2 A 30 30 0 0 0 144.6 72.8 Z" fill="#9cc9ea"/>
  <text x="166" y="94" font-size="13" text-anchor="middle" fill="currentColor">d</text>
  <line x1="120" y1="90" x2="201.9" y2="32.6" stroke="currentColor" stroke-width="2"/>
  <line x1="120" y1="90" x2="38.1" y2="32.6" stroke="currentColor" stroke-width="2"/>
  <line x1="120" y1="90" x2="38.1" y2="147.4" stroke="currentColor" stroke-width="2"/>
  <line x1="120" y1="90" x2="201.9" y2="147.4" stroke="currentColor" stroke-width="2"/>
  <circle cx="120" cy="90" r="3" fill="currentColor"/>
</svg>
</div>

Angles that are directly across the crossing point from each other, like $a$ and $c$, or $b$ and $d$, are called
**vertically opposite angles**. ("Vertically" here has nothing to do with up and down. It comes from **vertex**: the
two angles are opposite each other **at the vertex**. Some books just say "opposite angles".)

Notice that vertically opposite angles share the vertex but do **not** share an arm. Neighbouring angles like $a$ and
$b$ share an arm and are adjacent.

### The fact

**Vertically opposite angles are equal.** In the drawing, $a = c$ and $b = d$.

That is true however the lines cross: steep or shallow, nearly flat or nearly perpendicular. The scissors' front angle
and back angle are always exactly equal.

### Why it is true: a proof

Measuring a hundred X shapes would make us confident, but it could never cover **every** X. Instead, here is an
argument that works for all of them at once, using only the fact from the last lesson.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 180" role="img" aria-label="Left: angles a and b together lie along one straight line. Right: angles b and c together lie along the other straight line">
  <path d="M 110 90 L 134.6 72.8 A 30 30 0 0 0 85.4 72.8 Z" fill="#eea66f"/>
  <text x="110" y="48" font-size="13" text-anchor="middle" fill="currentColor">a</text>
  <path d="M 110 90 L 85.4 72.8 A 30 30 0 0 0 85.4 107.2 Z" fill="#9cc9ea"/>
  <text x="64" y="94" font-size="13" text-anchor="middle" fill="currentColor">b</text>
  <line x1="110" y1="90" x2="183.7" y2="38.4" stroke="currentColor" stroke-width="2"/>
  <line x1="110" y1="90" x2="36.3" y2="38.4" stroke="currentColor" stroke-width="2"/>
  <line x1="110" y1="90" x2="36.3" y2="141.6" stroke="currentColor" stroke-width="2"/>
  <circle cx="110" cy="90" r="3" fill="currentColor"/>
  <line x1="110" y1="90" x2="183.7" y2="141.6" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="110" y="170" font-size="13" text-anchor="middle" fill="currentColor">a + b = 180°</text>
  <path d="M 330 90 L 305.4 72.8 A 30 30 0 0 0 305.4 107.2 Z" fill="#9cc9ea"/>
  <text x="284" y="94" font-size="13" text-anchor="middle" fill="currentColor">b</text>
  <path d="M 330 90 L 305.4 107.2 A 30 30 0 0 0 354.6 107.2 Z" fill="#eea66f"/>
  <text x="330" y="140" font-size="13" text-anchor="middle" fill="currentColor">c</text>
  <line x1="330" y1="90" x2="256.3" y2="38.4" stroke="currentColor" stroke-width="2"/>
  <line x1="330" y1="90" x2="256.3" y2="141.6" stroke="currentColor" stroke-width="2"/>
  <line x1="330" y1="90" x2="403.7" y2="141.6" stroke="currentColor" stroke-width="2"/>
  <circle cx="330" cy="90" r="3" fill="currentColor"/>
  <line x1="330" y1="90" x2="403.7" y2="38.4" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="330" y="170" font-size="13" text-anchor="middle" fill="currentColor">b + c = 180°</text>
</svg>
</div>

1. Angles $a$ and $b$ sit side by side along one straight line (left drawing). So $a + b = 180°$
   (angles on a straight line).
2. Angles $b$ and $c$ sit side by side along the **other** straight line (right drawing). So $b + c = 180°$
   (angles on a straight line).
3. Both $a$ and $c$ make 180° together with the **same** angle $b$. So $a$ must be $180° - b$, and $c$ must be
   $180° - b$ too.
4. Therefore $a = c$.

The same argument with $b$ and $d$ (both make 180° with $c$) shows $b = d$.

That is a real **proof**: each step has a reason, and the reasons are facts we already trust. Because the argument
never used any particular size of angle, it works for **every** pair of crossing lines. Nobody will ever find an X
where it fails.

### A second reason: a half turn

There is another way to see it. Put a pin through the crossing point and give the whole picture a half turn
(180°). Each straight line turns into itself: the end that pointed up-right now points down-left, and the other way
round. So after the half turn the picture looks exactly the same as before. But angle $a$ has been carried to where
angle $c$ was. A turn does not change the size of an angle, so $a = c$.

Two different reasons for the same fact is a good sign: it means we understand it, not just remember it.

### What you get from one angle

Because of this fact and the straight-line fact, **one angle tells you all four**. If $a = 110°$:

- $c = 110°$ (vertically opposite $a$);
- $b = 180° - 110° = 70°$ (on a straight line with $a$);
- $d = 70°$ (vertically opposite $b$).

The four angles always come in two equal pairs, and the two different sizes always add to 180°. If the lines are
perpendicular, all four are 90°.

### More than two lines

When three or more straight lines pass through the same point, every line is still straight, so the fact still works
for any two angles that are directly opposite each other through the point.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 260 190" role="img" aria-label="Three straight lines through one point making six angles: 40 degrees, 75 degrees, then p, q, r and s going round">
  <path d="M 130 95 L 164 95 A 34 34 0 0 0 156 73.1 Z" fill="#eea66f"/>
  <text x="178.9" y="81.2" font-size="13" text-anchor="middle" fill="currentColor">40°</text>
  <path d="M 130 95 L 156 73.1 A 34 34 0 0 0 115.6 64.2 Z" fill="#9cc9ea"/>
  <text x="141.3" y="48.2" font-size="13" text-anchor="middle" fill="currentColor">75°</text>
  <path d="M 130 95 L 115.6 64.2 A 34 34 0 0 0 96 95 Z" fill="#7ccf9a"/>
  <text x="86.1" y="71.1" font-size="13" text-anchor="middle" fill="currentColor">p</text>
  <path d="M 130 95 L 96 95 A 34 34 0 0 0 104 116.9 Z" fill="#eea66f"/>
  <text x="81.1" y="116.8" font-size="13" text-anchor="middle" fill="currentColor">q</text>
  <path d="M 130 95 L 104 116.9 A 34 34 0 0 0 144.4 125.8 Z" fill="#9cc9ea"/>
  <text x="118.7" y="149.8" font-size="13" text-anchor="middle" fill="currentColor">r</text>
  <path d="M 130 95 L 144.4 125.8 A 34 34 0 0 0 164 95 Z" fill="#7ccf9a"/>
  <text x="173.9" y="126.9" font-size="13" text-anchor="middle" fill="currentColor">s</text>
  <line x1="130" y1="95" x2="225" y2="95" stroke="currentColor" stroke-width="2"/>
  <line x1="130" y1="95" x2="202.8" y2="33.9" stroke="currentColor" stroke-width="2"/>
  <line x1="130" y1="95" x2="89.9" y2="8.9" stroke="currentColor" stroke-width="2"/>
  <line x1="130" y1="95" x2="35" y2="95" stroke="currentColor" stroke-width="2"/>
  <line x1="130" y1="95" x2="57.2" y2="156.1" stroke="currentColor" stroke-width="2"/>
  <line x1="130" y1="95" x2="170.1" y2="181.1" stroke="currentColor" stroke-width="2"/>
  <circle cx="130" cy="95" r="3" fill="currentColor"/>
</svg>
</div>

Going round from the 40° angle, the six angles are 40°, 75°, $p$, $q$, $r$, $s$. Each angle is vertically opposite
the angle three places further round, so $q = 40°$, $r = 75°$ and $s = p$. And the first three angles fill a straight
line, so $p = 180 - 40 - 75 = 65°$. All six: 40°, 75°, 65°, 40°, 75°, 65°. Check: they add to
$2 \times 180 = 360$. ✓

### Equations from opposite angles

When opposite angles are written with letters, setting them **equal** gives an equation.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 260 170" role="img" aria-label="Two crossing lines; one angle is 3x plus 10 and the angle opposite it is 5x minus 30">
  <path d="M 130 85 L 144.9 63.7 A 26 26 0 0 0 115.1 63.7 Z" fill="#eea66f"/>
  <text x="130" y="25" font-size="12" text-anchor="middle" fill="currentColor">3x + 10</text>
  <path d="M 130 85 L 115.1 63.7 A 26 26 0 0 0 115.1 106.3 Z" fill="#9cc9ea"/>
  <text x="66" y="89" font-size="12" text-anchor="middle" fill="currentColor"></text>
  <path d="M 130 85 L 115.1 106.3 A 26 26 0 0 0 144.9 106.3 Z" fill="#eea66f"/>
  <text x="130" y="153" font-size="12" text-anchor="middle" fill="currentColor">5x − 30</text>
  <path d="M 130 85 L 144.9 106.3 A 26 26 0 0 0 144.9 63.7 Z" fill="#9cc9ea"/>
  <text x="194" y="89" font-size="12" text-anchor="middle" fill="currentColor"></text>
  <line x1="130" y1="85" x2="187.4" y2="3.1" stroke="currentColor" stroke-width="2"/>
  <line x1="130" y1="85" x2="72.6" y2="3.1" stroke="currentColor" stroke-width="2"/>
  <line x1="130" y1="85" x2="72.6" y2="166.9" stroke="currentColor" stroke-width="2"/>
  <line x1="130" y1="85" x2="187.4" y2="166.9" stroke="currentColor" stroke-width="2"/>
  <circle cx="130" cy="85" r="3" fill="currentColor"/>
</svg>
</div>

The two marked angles are vertically opposite, so $3x + 10 = 5x - 30$. Take $3x$ from both sides: $10 = 2x - 30$.
Add 30 to both sides: $40 = 2x$, so $x = 20$. Each angle is $3 \times 20 + 10 = 70°$, and the check is
$5 \times 20 - 30 = 70°$. ✓ The other two angles are $180 - 70 = 110°$ each.

Notice the difference from the last lesson. Angles on a line give an equation that **adds to 180**. Opposite angles
give an equation that says **two things are equal**. Knowing which fact fits the picture tells you which equation to
write.

## Worked examples

**1. All four from one.** Two lines cross and one angle is 38°. Find the other three.

- The opposite angle is **38°** (vertically opposite angles are equal).
- The angles next to it are $180 - 38 =$ **142°** each (angles on a straight line; and they are opposite each other,
  so they agree).

Check: $38 + 142 + 38 + 142 = 360$ (angles around a point). ✓

**2. Opposite angles with letters.** Two opposite angles are $4y$ and $y + 75$. Find $y$.

$4y = y + 75$ (vertically opposite). Take $y$ from both sides: $3y = 75$, so $y = 25$. Each angle is
$4 \times 25 = 100°$. Check: $25 + 75 = 100$. ✓

**3. Adjacent angles with letters.** Two **adjacent** angles at a crossing are $2x$ and $x + 15$. Find them.

Adjacent angles at a crossing lie on a straight line: $2x + x + 15 = 180$, so $3x = 165$ and $x = 55$. The angles
are $110°$ and $70°$. Check: $110 + 70 = 180$. ✓

**4. A road crossing.** Two straight roads cross. The angle between them on the north side of the crossing is 65°.
What is the angle between them on the south side, directly across the crossing? The two roads are straight lines, and
the south angle is vertically opposite the north angle, so it is **65°**. The angles on the east and west sides are
$180 - 65 = 115°$ each.

**5. Why the lines must be straight.** Suppose two "lines" cross but one of them is slightly bent at the crossing
point, like a hinge. Then step 2 of the proof fails: the angles $b$ and $c$ no longer sit on a straight line, so they
need not add to 180°, and $a$ need not equal $c$. A proof tells you not only that a fact is true, but **when** it is
true.

## Try it

1. Two lines cross. One angle is 125°. Find the other three.
2. Two lines cross. One angle is 90°. What are the others? What do we call these lines?
3. Two vertically opposite angles are $2x + 20$ and $80$ (degrees). Find $x$.
4. Two vertically opposite angles are $6t - 15$ and $4t + 25$. Find $t$ and the size of the angles.
5. At a crossing, one angle is three times the angle next to it. Find all four angles.
6. Three straight lines meet at a point, making six angles. Going round, three of them in a row are 50°, 60° and
   $m$. Find $m$ and the other three angles.
7. Explain in your own words why vertically opposite angles are equal. Use the words "straight line" in your answer.
8. In the scissors question at the start, why does it not matter how wide the scissors open?

??? note "Answers"
    1. Opposite: **125°**. Adjacent: $180 - 125 =$ **55°**, twice. (55°, 125°, 55°, 125°.)
    2. All four are **90°**: the opposite one is 90°, and each neighbour is $180 - 90 = 90°$. The lines are
       **perpendicular**.
    3. $2x + 20 = 80$, so $2x = 60$ and $x = 30$.
    4. $6t - 15 = 4t + 25$, so $2t = 40$ and $t = 20$. Each angle is $6 \times 20 - 15 = 105°$ (check:
       $4 \times 20 + 25 = 105$ ✓).
    5. Call the smaller one $x$; the one next to it is $3x$. They are on a straight line: $x + 3x = 180$, so
       $4x = 180$ and $x = 45$. The angles are **45°, 135°, 45°, 135°**.
    6. Three neighbouring angles of the six fill a straight line (half the way round), so $m = 180 - 50 - 60 =$
       **70°**. The other three are opposite these: **50°, 60°, 70°**.
    7. For example: "Each of the two opposite angles sits on a straight line with the same angle between them, so
       each one is 180° minus that angle. So they are equal."
    8. The blades and handles are two straight pieces crossing at the screw. Whatever the opening, the front angle
       and the back angle are vertically opposite, and the proof works for every opening.

## Common mistake

**Calling the wrong pair "opposite".** Vertically opposite angles are across the vertex from each other, with **no**
shared arm. Two angles next to each other (sharing an arm) are adjacent, and they add to 180°, not equal each other
(unless both are 90°).

**Using the fact when a line is not straight.** The proof needs both lines to be straight through the crossing point.
If a line bends there, or if two separate lines just touch at their ends, the fact does not apply.

## Where it leads

- Back: [Angles on a straight line and around a point](01-straight-line-point.md) · Next: [Angles in a triangle add to 180°](03-triangle-angle-sum.md)
- [Level 4 page](index.md) · [Geometry topic page](../index.md)
- The half-turn reason is a rotation; more on turning shapes in [rotational symmetry](06-rotational-symmetry.md).
- Proofs like this one, written step by step with a reason for each, grow into the two-column proofs of [level 8](../level-8/index.md).
- "If both equal 180° minus the same thing, they are equal" is a pattern of reasoning: see [Logic](../../logic/index.md).
