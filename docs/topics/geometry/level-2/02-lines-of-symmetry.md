---
title: "Lines of symmetry: folding and mirrors"
---

# Lines of symmetry: folding and mirrors

*Geometry · level 2, lesson 2 of 6*

## A question to start

Fold a sheet of paper in half. Draw half a heart against the fold, with the middle of the heart on the fold line.
Cut along your line, through both layers, and open it up.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 175" role="img" aria-label="Half a heart drawn against a dashed fold line, and after cutting and opening, a whole heart with the fold line down its middle">
  <path d="M 100 50 C 100 20 150 10 160 45 C 168 75 120 105 100 130 Z" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <line x1="100" y1="10" x2="100" y2="145" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <path d="M 300 50 C 300 20 350 10 360 45 C 368 75 320 105 300 130 C 280 105 232 75 240 45 C 250 10 300 20 300 50 Z" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <line x1="300" y1="10" x2="300" y2="145" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="100" y="165" font-size="13" text-anchor="middle" fill="currentColor">cut half a heart on the fold</text>
  <text x="300" y="165" font-size="13" text-anchor="middle" fill="currentColor">open it: a whole heart</text>
  <path d="M 185 75 L 225 75" stroke="currentColor" stroke-width="2"/>
  <polygon points="230,75 220,70 220,80" fill="currentColor"/>
</svg>
</div>

You only drew **half** a heart, but you got a **whole** one, and the two halves match perfectly. How did the
paper know how to draw the other half?

Here is a second puzzle. A square can be folded in half so the halves match in **4** different ways. A rectangle
(like a sheet of paper) can only be folded in **2** ways. And a circle can be folded in half in **more ways than
you could ever count**. Why?

## The idea

### What a line of symmetry is

Fold a shape along a straight line. If the two halves land **exactly** on top of each other, with nothing sticking
out, then that line is a **line of symmetry** (say "SIM-e-tree"). It is also called a **mirror line**, and you will
soon see why.

A shape with a line of symmetry is called **symmetric**. One half is the **mirror image** of the other: the same,
but facing the opposite way, like your left hand and your right hand.

The heart puzzle is now easy to explain. When you cut through two layers of folded paper, each cut goes through
both layers at once, at the same distance from the fold. When you open it, one layer's cut is on one side and the
other layer's cut is on the other side. The fold becomes a line of symmetry automatically. The paper "drew" the
other half by copying your cut, flipped over.

### Testing with a mirror

You do not always have to fold. Stand a small mirror upright on the line you want to test. Look into the mirror from
one side. If the half you see on the paper, together with its reflection in the mirror, looks exactly like the whole
shape, then the mirror is standing on a line of symmetry.

That is why it is called a mirror line. A mirror shows you a flipped copy of what is in front of it. Every point
in the reflection is **the same distance behind the mirror** as the real point is in front of it.

### Lines of symmetry of some shapes

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 120" role="img" aria-label="Lines of symmetry: a square has four, a rectangle two, an equal-sided triangle three, and a circle has endless lines">
  <rect x="20" y="25" width="70" height="70" fill="#eea66f"/>
  <rect x="120" y="35" width="100" height="50" fill="#9cc9ea"/>
  <polygon points="250,90 320,90 285,29.4" fill="#7ccf9a"/>
  <circle cx="390" cy="60" r="36" fill="#eea66f"/>
  <g stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4">
    <line x1="55" y1="15" x2="55" y2="105"/><line x1="10" y1="60" x2="100" y2="60"/>
    <line x1="13" y1="18" x2="97" y2="102"/><line x1="97" y1="18" x2="13" y2="102"/>
    <line x1="170" y1="25" x2="170" y2="95"/><line x1="110" y1="60" x2="230" y2="60"/>
    <line x1="285" y1="20" x2="285" y2="100"/><line x1="250" y1="90" x2="306" y2="58"/><line x1="320" y1="90" x2="264" y2="58"/>
    <line x1="390" y1="16" x2="390" y2="104"/><line x1="346" y1="60" x2="434" y2="60"/>
    <line x1="359" y1="29" x2="421" y2="91"/><line x1="421" y1="29" x2="359" y2="91"/>
  </g>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="55" y="118">4 lines</text><text x="170" y="118">2 lines</text><text x="285" y="118">3 lines</text><text x="390" y="118">endless</text>
  </g>
</svg>
</div>

- A **square** has **4** lines of symmetry: up the middle, across the middle, and both corner-to-corner lines.
- A **rectangle** that is not a square has only **2**: up the middle and across the middle.
- An **equilateral triangle** (all sides equal) has **3**: each from a corner to the middle of the opposite side.
- A **circle** has **endless** lines of symmetry. Any straight line through the centre works.

Why does the circle have so many? Every point of a circle is the same distance from the centre. So whichever line
you fold along through the centre, each point on one half lands on a point of the other half that is the same
distance from the centre: a point of the circle. Every direction works, and there are endless directions.

### Why the rectangle's corner-to-corner line fails

The corner-to-corner line of a rectangle cuts it into two equal triangles. So it seems like it should be a line of
symmetry. But try folding a sheet of paper that way!

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 280 215" role="img" aria-label="A rectangle folded along its corner-to-corner line. The folded half lands in a different place and its corner sticks out past the rectangle, so this line is not a line of symmetry">
  <polygon points="40,40 200,120 40,120" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="40,40 136,168 200,120" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill-opacity="0.8"/>
  <polygon points="40,40 200,40 200,120 40,120" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-dasharray="3 4" stroke-opacity="0.5"/>
  <line x1="40" y1="40" x2="200" y2="120" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="140" y="192" font-size="13" text-anchor="middle" fill="currentColor">fold on the corner-to-corner line:</text>
  <text x="140" y="208" font-size="13" text-anchor="middle" fill="currentColor">the corners stick out</text>
</svg>
</div>

The folded half does **not** land on the other half. It sticks out over the edge, and leaves parts of the rectangle
uncovered. Cutting a shape into **two equal pieces** is not the same as **folding it onto itself**. The two
triangles are the same size and shape, but one is turned round compared with the other, not flipped. A line of
symmetry needs the halves to be mirror images, landing on top of each other when you fold.

For a square, the corner-to-corner fold does work. That is because a square's sides are all equal, so when a
side folds over, it lands exactly on the next side.

### Regular polygons

Look at the regular pentagon and the regular hexagon.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 188" role="img" aria-label="A regular pentagon with its 5 lines of symmetry, each from a corner to the middle of the opposite side, and a regular hexagon with its 6 lines of symmetry">
  <polygon points="110,23 169,65.8 146.4,135.2 73.6,135.2 51,65.8" fill="#7ccf9a" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <line x1="110" y1="165" x2="110" y2="5" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="63" y1="149.7" x2="157" y2="20.3" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="33.9" y1="109.7" x2="186.1" y2="60.3" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="33.9" y1="60.3" x2="186.1" y2="109.7" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="63" y1="20.3" x2="157" y2="149.7" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <polygon points="320,23 373.7,54 373.7,116 320,147 266.3,116 266.3,54" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <line x1="320" y1="165" x2="320" y2="5" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="280" y1="154.3" x2="360" y2="15.7" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="250.7" y1="125" x2="389.3" y2="45" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="240" y1="85" x2="400" y2="85" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="250.7" y1="45" x2="389.3" y2="125" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="280" y1="15.7" x2="360" y2="154.3" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="110" y="180" font-size="13" text-anchor="middle" fill="currentColor">regular pentagon: 5 lines</text>
  <text x="320" y="180" font-size="13" text-anchor="middle" fill="currentColor">regular hexagon: 6 lines</text>
</svg>
</div>

- The regular **pentagon** has **5** lines of symmetry. Each goes from a corner to the middle of the opposite side.
- The regular **hexagon** has **6** lines of symmetry. 3 go from a corner to the opposite corner, and 3 go from the
  middle of a side to the middle of the opposite side.

Put it all together:

| Regular polygon | Sides | Lines of symmetry |
| --- | --- | --- |
| equilateral triangle | 3 | 3 |
| square | 4 | 4 |
| regular pentagon | 5 | 5 |
| regular hexagon | 6 | 6 |
| regular octagon | 8 | 8 |

A regular polygon has **as many lines of symmetry as it has sides**. Why? Each line goes through the very middle of
the shape. A regular polygon is the same all the way round, so whatever works at one corner works at every corner.
Every corner gets a line through it, and every side gets a line through its middle. When the number of sides is
odd, each line goes through one corner **and** one side-middle, so there is one line for each corner. When the
number is even, corners pair up with opposite corners and side-middles with opposite side-middles: half as many
corner lines as corners, plus half as many side lines as sides, which adds up to the number of sides again.

### Shapes with no line of symmetry

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 135" role="img" aria-label="Three shapes with no line of symmetry: a slanted four-sided shape, a triangle with three different sides, and the letter S">
  <polygon points="20,100 100,100 130,40 50,40" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="170,100 280,100 200,30" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <text x="360" y="100" font-size="90" text-anchor="middle" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5" font-family="sans-serif" font-weight="bold">S</text>
  <text x="75" y="125" font-size="13" text-anchor="middle" fill="currentColor">slanted shape</text>
  <text x="225" y="125" font-size="13" text-anchor="middle" fill="currentColor">uneven triangle</text>
  <text x="360" y="125" font-size="13" text-anchor="middle" fill="currentColor">letter S</text>
</svg>
</div>

Some shapes have no line of symmetry at all. The slanted four-sided shape (a **parallelogram**) is a surprise: it
looks very even, but no fold makes its halves match. Try it with a paper one! A triangle with three different sides
has none. The letter S has none either: fold it up-down or left-right and the curves go the wrong way.

### Symmetry in letters and in nature

Many capital letters (written plainly, without curly bits) have symmetry.

- **Up-and-down line** (a line from top to bottom): A, H, I, M, O, T, U, V, W, X, Y.
- **Side-to-side line** (a line across the middle): B, C, D, E, H, I, K, O, X.
- **Both**: H, I, O, X.
- **None**: F, G, J, L, N, P, Q, R, S, Z.

The word **MOM** has an up-and-down line of symmetry. The word **BOX** has a side-to-side one (cover the bottom half
and look). 

Nature loves symmetry. A butterfly, a leaf, a face and most animals have an up-and-down mirror line, more or less.
Look at your own face in a mirror: it is nearly symmetric, but not perfectly. Nature is close, and math is exact.

## Worked examples

**Example 1. Finish the picture.** Here is half a picture on squared paper. The dashed line is a mirror line.
Finish the picture.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 160" role="img" aria-label="On squared paper, half a picture sits to the left of a dashed mirror line. On the right the same half is shown again together with its mirror image, each square the same distance from the line on the other side">
  <line x1="20" y1="15" x2="20" y2="125" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
  <line x1="42" y1="15" x2="42" y2="125" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
  <line x1="64" y1="15" x2="64" y2="125" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
  <line x1="86" y1="15" x2="86" y2="125" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
  <line x1="108" y1="15" x2="108" y2="125" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
  <line x1="130" y1="15" x2="130" y2="125" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
  <line x1="152" y1="15" x2="152" y2="125" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
  <line x1="174" y1="15" x2="174" y2="125" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
  <line x1="196" y1="15" x2="196" y2="125" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
  <line x1="20" y1="15" x2="196" y2="15" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
  <line x1="20" y1="37" x2="196" y2="37" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
  <line x1="20" y1="59" x2="196" y2="59" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
  <line x1="20" y1="81" x2="196" y2="81" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
  <line x1="20" y1="103" x2="196" y2="103" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
  <line x1="20" y1="125" x2="196" y2="125" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
  <rect x="86" y="15" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="86" y="37" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="64" y="37" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="86" y="59" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="64" y="59" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="42" y="59" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="86" y="81" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="86" y="103" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="64" y="103" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <line x1="108" y1="7" x2="108" y2="133" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>
  <line x1="240" y1="15" x2="240" y2="125" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
  <line x1="262" y1="15" x2="262" y2="125" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
  <line x1="284" y1="15" x2="284" y2="125" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
  <line x1="306" y1="15" x2="306" y2="125" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
  <line x1="328" y1="15" x2="328" y2="125" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
  <line x1="350" y1="15" x2="350" y2="125" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
  <line x1="372" y1="15" x2="372" y2="125" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
  <line x1="394" y1="15" x2="394" y2="125" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
  <line x1="416" y1="15" x2="416" y2="125" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
  <line x1="240" y1="15" x2="416" y2="15" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
  <line x1="240" y1="37" x2="416" y2="37" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
  <line x1="240" y1="59" x2="416" y2="59" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
  <line x1="240" y1="81" x2="416" y2="81" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
  <line x1="240" y1="103" x2="416" y2="103" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
  <line x1="240" y1="125" x2="416" y2="125" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
  <rect x="306" y="15" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="306" y="37" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="284" y="37" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="306" y="59" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="284" y="59" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="262" y="59" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="306" y="81" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="306" y="103" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="284" y="103" width="22" height="22" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="328" y="15" width="22" height="22" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="328" y="37" width="22" height="22" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="350" y="37" width="22" height="22" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="328" y="59" width="22" height="22" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="350" y="59" width="22" height="22" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="372" y="59" width="22" height="22" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="328" y="81" width="22" height="22" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="328" y="103" width="22" height="22" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="350" y="103" width="22" height="22" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <line x1="328" y1="7" x2="328" y2="133" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>
  <text x="108" y="153" font-size="13" text-anchor="middle" fill="currentColor">half a picture</text>
  <text x="328" y="153" font-size="13" text-anchor="middle" fill="currentColor">finished with its mirror half</text>
</svg>
</div>

1. Work one square at a time. Pick a coloured square on the left. Count how many squares it is away from the mirror
   line.
2. Go the **same number** of squares on the **other side** of the line, in the same row. Colour that square.
3. A square touching the line on the left gets a partner touching the line on the right. A square 2 squares away on
   the left gets a partner 2 squares away on the right.
4. Do this for every square. The finished picture is on the right. Check: fold along the line in your head, and
   every blue square lands on an orange one.

**Example 2. How many lines?** How many lines of symmetry does the capital letter H have?

1. Up-and-down through the middle: the left post matches the right post. **Yes.**
2. Side-to-side through the middle: the top half matches the bottom half (the crossbar is in the middle). **Yes.**
3. Corner-to-corner slanted lines: no, a slanted fold would put the posts in the wrong place.
4. So H has **2** lines of symmetry.

**Example 3. Rectangle or square?** A shape is a rectangle. Someone tells you that one of its corner-to-corner
lines is a line of symmetry. What can you say about it?

1. For a rectangle that is not a square, the corner-to-corner fold does not work: one side folds onto a side of a
   different length and sticks out.
2. The fold only works when the side folding over is the **same length** as the side it lands on.
3. So the long sides and short sides must be the same length. It must be a **square**.

## Try it

1. How many lines of symmetry does a rectangle (not a square) have?
2. Which of these letters have a side-to-side line of symmetry: A, B, D, M, E?
3. How many lines of symmetry does a regular octagon have?
4. Does the number 8 have a line of symmetry? How many? What about the number 3?
5. A shape has only 1 line of symmetry, up the middle. Draw one. (Hint: a house shape.)
6. Fold a paper in half, then in half again the other way, making 4 layers. Cut a shape across the corner where the
   folds meet. How many lines of symmetry will the shape have when you open it?
7. Does a parallelogram (a slanted rectangle) have any lines of symmetry?
8. Find a word that has an up-and-down line of symmetry when written in capitals, one letter under another (like a
   tower). (Hint: every letter must have an up-and-down line.)

??? note "Answers"
    1. **2**: up the middle and across the middle. The corner-to-corner lines do not work.
    2. **B, D and E.** Their top halves match their bottom halves. A and M have an up-and-down line instead.
    3. **8**, because a regular polygon has as many lines of symmetry as sides: 4 from corner to opposite corner and
       4 from side-middle to opposite side-middle.
    4. 8 has **2**: up-and-down and side-to-side (written as two equal circles one on top of the other). 3 has **1**:
       a side-to-side line across its middle, because its top curve matches its bottom curve.
    5. A house shape (a square with a triangle roof, the point in the middle) has one up-and-down line through the
       point of the roof. It has no side-to-side line, because the roof is not like the floor. A heart, a vase or the
       letter A also work.
    6. At least **2**: both folds become lines of symmetry, because each fold copied your cut as a mirror image.
       (If your cut is very even, like a straight cut at the same slant to both folds, the shape can get more lines,
       like the diamond in level 1.)
    7. **No.** Fold it up the middle or across: the slanted ends go the wrong way. Fold it corner to corner: it sticks
       out, like the rectangle. It is one of the surprising shapes with none. (It does have a different kind of
       symmetry: turn it upside down, half a turn, and it looks the same. More about turning in
       [Slides, flips and turns](06-slides-flips-turns.md).)
    8. Any word made only of A, H, I, M, O, T, U, V, W, X, Y. For example **MOM**, **TOY**, **HAT**, **WAX** or
       **TAXI**, written in a column. (Written in a row, as normal, only some of them stay symmetric, like MOM,
       because the order of the letters flips too!)

## Common mistake

**Thinking every line that cuts a shape into two equal halves is a line of symmetry.** The rectangle's
corner-to-corner line cuts it into two equal triangles, but folding along it does not make them match. Always
imagine the fold, or test with a mirror.

**Mirroring by sliding.** When you finish a mirror picture, a square near the line must stay near the line on the
other side. Students sometimes just copy the half and slide it across, which puts the near squares far away. In a
mirror image, the order is reversed: what is closest to the line on one side is closest on the other side too.

## Where it leads

- Previous lesson: [Polygons and regular shapes](01-regular-polygons.md).
- Next lesson: [Faces, edges and corners of solids](03-faces-edges-corners.md).
- This level: [Level 2: Shapes all around](index.md). The whole topic: [Geometry](../index.md).
- A flip in a mirror line is one of the three moves in [Slides, flips and turns](06-slides-flips-turns.md).
- Shapes that look the same after a turn have **rotational symmetry**, which you will count in
  [level 4](../level-4/06-rotational-symmetry.md).
- Symmetric patterns in rows: [Patterns](../../patterns/index.md).
