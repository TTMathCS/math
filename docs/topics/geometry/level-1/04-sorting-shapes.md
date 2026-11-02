---
title: "Sorting and matching shapes"
---

# Sorting and matching shapes

*Geometry · level 1, lesson 4 of 5*

## A question to start

Here is a messy pile of shapes. How would you tidy them into groups?

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 430 165" role="img" aria-label="A messy pile of shapes in different colours, sizes and turns: circles, triangles, squares and rectangles">
  <circle cx="40" cy="50" r="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <polygon points="80,90 130,90 105,45" fill="#7ccf9a" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="150,30 190,30 190,70 150,70" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="230" cy="70" r="12" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <polygon points="315,55 285,85 255,55 285,25" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="320,30 370,40 335,80" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="400" cy="45" r="18" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <polygon points="30,110 55,110 55,135 30,135" fill="#7ccf9a" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="90,150 150,150 150,110 90,110" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="170,110 230,110 200,150" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="270" cy="130" r="25" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <polygon points="310,150 330,150 320,128" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="355,110 400,110 400,155 355,155" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
</svg>
</div>

Some people sort them by **colour**: all the orange ones, all the blue ones, all the green ones. Some sort them by
**size**: big ones and small ones. Some sort them by **shape**: circles, triangles, and four-sided shapes.

Which way is right? Here is the surprise: **all of them**. There is no one right way to sort. What matters is that
you choose a **rule**, and then follow it for every shape. Mathematicians sort things all the time, and choosing a
good rule is one of the most useful skills in all of math.

## The idea

### Sorting means choosing a rule

To **sort** means to put things into groups so that everything in a group is alike in some way. The way they are
alike is the **rule** for sorting.

A good sorting rule has two jobs:

1. Every shape must fit in **some** group. None left over.
2. Every shape must fit in **only one** group. No shape can be in two groups at once.

Here is the pile sorted by the rule "count the corners".

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 435 176" role="img" aria-label="The same shapes sorted into three groups: shapes with no corners (circles), shapes with 3 corners (triangles), and shapes with 4 corners (squares and rectangles)">
  <polygon points="5,5 140,5 140,150 5,150" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="150,5 285,5 285,150 150,150" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="295,5 430,5 430,150 295,150" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="45" cy="45" r="22" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <circle cx="100" cy="40" r="12" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <circle cx="45" cy="105" r="25" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <circle cx="105" cy="100" r="18" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <polygon points="160,60 210,60 185,15" fill="#7ccf9a" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="225,20 275,30 240,70" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="165,85 225,85 195,125" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="240,135 260,135 250,113" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="305,20 345,20 345,60 305,60" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="423,45 395,73 367,45 395,17" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="305,90 330,90 330,115 305,115" fill="#7ccf9a" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="350,85 410,85 410,125 350,125" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="305,121 331,121 331,147 305,147" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <text x="72" y="168" font-size="13" text-anchor="middle" fill="currentColor">no corners</text>
  <text x="217" y="168" font-size="13" text-anchor="middle" fill="currentColor">3 corners</text>
  <text x="362" y="168" font-size="13" text-anchor="middle" fill="currentColor">4 corners</text>
</svg>
</div>

- **No corners**: the circles. There are 4 of them.
- **3 corners**: the triangles. There are 4 of them.
- **4 corners**: the squares and rectangles. There are 5 of them.

Every shape went in exactly one group. 4 + 4 + 5 = 13 shapes, and there were 13 in the pile. That is a good way to
check you did not lose any.

Notice that this rule **ignores** colour and size. A tiny blue circle and a big green circle go in the same group,
because they both have no corners. Choosing a rule means choosing what to pay attention to and what to ignore.

### Sorting the same pile another way

Now sort the same pile by colour.

- **Orange**: a circle, a turned square, a rectangle, and an upside-down triangle. That is 4.
- **Blue**: two squares, a small circle, a tipped triangle and a tiny triangle. That is 5.
- **Green**: two circles, a small square and a triangle. That is 4.

Again 4 + 5 + 4 = 13. Same pile, different rule, different groups. Both are correct.

In geometry, we usually care about the **shape**, not the colour. Colour is not part of a shape. If you paint a
triangle red, it is still the same triangle.

### Same shape, different size

Look at these triangles.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 145" role="img" aria-label="The same triangle drawn small, middle-sized and big; the same triangle turned round; and a squashed triangle that is a different shape">
  <polygon points="10,110 50,110 20,78" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="65,110 130,110 81.2,58" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="145,110 240,110 168.8,34" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="313.5,38.3 257.2,70.8 325.4,91.5" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="345,110 430,110 360,85" fill="#7ccf9a" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <text x="110" y="135" font-size="13" text-anchor="middle" fill="currentColor">small, middle, big</text>
  <text x="300" y="135" font-size="13" text-anchor="middle" fill="currentColor">turned</text>
  <text x="390" y="135" font-size="13" text-anchor="middle" fill="currentColor">squashed</text>
</svg>
</div>

The first three are the **same shape** in three sizes: small, middle and big. If you looked at them through a
magnifying glass, the small one would look exactly like the big one. They have the same "look": the same pointy
top leaning to the same side, the same sharp corners. One is just a **bigger copy** of the other, like a photo
printed small and printed big.

Grown-ups have a special word for "same shape, different size": **similar**. Mathematicians use it in a very exact
way, and you will meet it again when you are older.

The blue triangle is also the same shape, only **turned** round. Turning does not change the shape. If you cut it out
and turned it back, it would sit exactly on top of the orange one of the same size.

The green triangle on the right is **different**. It is squashed: it is long and flat, and its corners are not
the same as the others. You could not make it by turning or making the orange one bigger or smaller. It is still a
triangle (3 sides, 3 corners), but it is a different **kind** of triangle.

So there are two questions you can ask about two shapes:

1. **Do they have the same name?** (Both triangles? Both rectangles?) Count sides and corners.
2. **Are they the same shape exactly?** Could one be a bigger, smaller or turned copy of the other?

All squares are the same shape exactly, because every square has equal sides and square corners. A small square is
just a shrunk big square. But rectangles are not all the same shape: a long thin rectangle and a nearly square
rectangle look different, even though both are rectangles.

### Matching

To **match** means to find two things that are the **same**. Same shape, same size: if you cut one out, you could
put it exactly on top of the other. Turning it is allowed. Flipping it over is allowed too.

A jigsaw puzzle is a matching game. Each hole has exactly one piece that fits. You may have to turn the piece to make
it fit, but you never have to stretch it.

### The odd one out

An "odd one out" puzzle asks: which one does **not** belong with the others? To solve it, look for a rule that
fits all of them but one.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 100" role="img" aria-label="Five shapes labelled A to E: a square, a square turned on its corner, a small square, a long rectangle, and a big square">
  <polygon points="20,20 70,20 70,70 20,70" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="160,45 125,80 90,45 125,10" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="170,30 200,30 200,60 170,60" fill="#7ccf9a" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="225,25 305,25 305,65 225,65" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="325,15 380,15 380,70 325,70" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <text x="45" y="92" font-size="15" text-anchor="middle" fill="currentColor">A</text>
  <text x="125" y="92" font-size="15" text-anchor="middle" fill="currentColor">B</text>
  <text x="185" y="92" font-size="15" text-anchor="middle" fill="currentColor">C</text>
  <text x="265" y="92" font-size="15" text-anchor="middle" fill="currentColor">D</text>
  <text x="352" y="92" font-size="15" text-anchor="middle" fill="currentColor">E</text>
</svg>
</div>

Which is the odd one out? Think about it before you read on.

- B looks different, because it is standing on a corner. But turning does not change a shape. B is a square.
- C is small and E is big. But size does not change the shape. They are squares.
- **D is the odd one out.** It is a rectangle with two long sides and two short sides. All the others are squares.

The rule "is it a square?" fits A, B, C and E, and only D breaks it.

## Worked examples

**Example 1. Sort by sides.** Sort these into two groups: a door, a slice of sandwich cut corner to corner, a
window, a yield road sign, a book.

1. Choose the rule: "how many sides?"
2. Door: 4 sides. Window: 4 sides. Book: 4 sides.
3. Sandwich slice: 3 sides. Yield sign: 3 sides (it is a triangle pointing down).
4. Groups: **3 sides**: sandwich slice, yield sign. **4 sides**: door, window, book.

**Example 2. Same shape?** A sticky note is a small square. A floor tile is a big square. Are they the same shape?

1. Both are squares: 4 equal sides, 4 square corners.
2. If you made the sticky note bigger and bigger, keeping its sides equal, it would become exactly like the tile.
3. So **yes**, they are the same shape in different sizes. Every square is the same shape as every other square.

**Example 3. Same shape?** A sheet of paper and a long ruler are both rectangles. Are they the same shape?

1. Both have 4 sides and 4 square corners, so both are rectangles. Same **name**.
2. But a ruler is very long and thin. A sheet of paper is much wider for its length.
3. If you made the ruler bigger, it would stay long and thin. It would never look like the sheet of paper.
4. So **no**, they are not the same shape. Same name, different shape.

## Try it

1. Sort these by number of corners: a clock face, a tile, a slice of sandwich cut corner to corner, a coin, a book.
2. In a bag there are 3 circles, 5 triangles and 2 squares. How many shapes are in the bag?
3. Jo sorted some shapes into two groups: "red" and "triangles". Why is that a bad sorting rule? (Hint: think
   about a red triangle.)
4. Is a small circle the same shape as a big circle?
5. Find the odd one out: a ball, an orange, a dice, a marble.
6. Find the odd one out: a triangle, a square, a rectangle, a book cover.
7. Two triangles are both pointing up, but one is tall and thin and the other is short and wide. Same name? Same
   shape?
8. Think of your own sorting rule for your toys. Does every toy fit in exactly one group?

??? note "Answers"
    1. **No corners**: the clock face and the coin (circles). **3 corners**: the sandwich slice (a triangle).
       **4 corners**: the tile and the book.
    2. 3 + 5 + 2 = **10** shapes.
    3. A red triangle would fit in **both** groups. A good rule puts every shape in only one group. Better: sort
       by colour (red, not red) **or** by shape (triangle, not triangle), not by a mix of the two.
    4. Yes. Every circle is round in exactly the same way, so a big circle is just a bigger copy of a small one.
       All circles are the same shape.
    5. The dice. It is a cube, with flat faces and corners. The ball, the orange and the marble are all spheres.
    6. The triangle. It has 3 sides. The square, the rectangle and the book cover all have 4 sides. (A book cover is
       a rectangle.) The rule "has 4 square corners" fits the other three, and only the triangle breaks it.
       Saying your rule out loud is what makes an odd-one-out answer right.
    7. Same name: both are triangles. Not the same shape: a tall thin triangle cannot be turned or resized into a
       short wide one. Its corners are different.
    8. Any rule that works! For example: "toys with wheels" and "toys without wheels". Check: every toy either has
       wheels or does not, so every toy fits in exactly one group.

## Common mistake

**Thinking a turned shape or a bigger shape is a different shape.** A square on its corner, or a giant square, is
still a square. Turning and changing size do not change the shape.

**Thinking every rectangle is the same shape.** All squares are the same shape, and all circles are the same shape.
But rectangles (and triangles) come in many different shapes: some long and thin, some nearly square. Having the
same name is not the same as being the same shape.

## Where it leads

- Previous lesson: [Where is it?](03-where-is-it.md).
- Next lesson: [Tangrams](05-tangram-pictures.md): seven pieces that make thousands of pictures.
- This level: [Level 1: First shapes](index.md). The whole topic: [Geometry](../index.md).
- Sorting is a big part of data and charts: [Statistics](../../statistics/index.md).
- "Same shape, different size" grows up into similar triangles and scale drawings, used to make maps. You will meet
  it in [scale drawings](../level-5/04-dilations-scale-drawings.md) and
  [similar triangles](../level-7/01-similar-triangles.md).
- Finding the rule behind a group is like finding the rule of a pattern: [Patterns](../../patterns/index.md).
