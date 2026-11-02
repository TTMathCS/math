---
title: "Nets: unfolding boxes, and the 11 nets of a cube"
---

# Nets: unfolding boxes, and the 11 nets of a cube

*Geometry · level 2, lesson 4 of 6*

## A question to start

Take an empty cube-shaped box. Cut along some of its edges, carefully, until you can open it out and lay it flat on
the table in one piece. You get a flat shape made of 6 squares.

But you could have cut different edges, and then you would get a different flat shape. How many different flat
shapes can a cube unfold into?

Mathematicians have checked every possible way. The answer is exactly **11**. Not 10, not 12, not hundreds. In
this lesson you will see all 11, and you will learn three simple tests that tell you, without folding, when a
shape made of 6 squares can **not** be folded into a cube.

## The idea

### What a net is

A **net** is a flat shape that can be folded up to make a solid, with no gaps and no overlaps. Every face of the
solid appears exactly once in the net. The edges where you fold are edges of the solid.

Cereal boxes, juice boxes and pizza boxes are all made from nets. A machine prints and cuts a flat sheet of
cardboard, and then folds it up and glues it.

Here is the best-known net of a cube, the **cross**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 155" role="img" aria-label="A cross-shaped net with its six squares labelled: front in the middle, top above it, underneath below it, left and right beside it, and back at the end of the row. An arrow shows it folding into a cube">
  <rect x="64" y="20" width="34" height="34" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="81" y="42" font-size="13" text-anchor="middle" fill="currentColor">T</text>
  <rect x="30" y="54" width="34" height="34" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="47" y="76" font-size="13" text-anchor="middle" fill="currentColor">L</text>
  <rect x="64" y="54" width="34" height="34" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="81" y="76" font-size="13" text-anchor="middle" fill="currentColor">F</text>
  <rect x="98" y="54" width="34" height="34" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="115" y="76" font-size="13" text-anchor="middle" fill="currentColor">R</text>
  <rect x="132" y="54" width="34" height="34" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="149" y="76" font-size="13" text-anchor="middle" fill="currentColor">K</text>
  <rect x="64" y="88" width="34" height="34" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="81" y="110" font-size="13" text-anchor="middle" fill="currentColor">U</text>
  <path d="M 200 70 L 250 70" stroke="currentColor" stroke-width="2"/>
  <polygon points="258,70 248,64 248,76" fill="currentColor"/>
  <polygon points="290,60 360,60 360,130 290,130" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="290,60 360,60 391.5,35.5 321.5,35.5" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill-opacity="0.6"/>
  <polygon points="360,60 391.5,35.5 391.5,105.5 360,130" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill-opacity="0.8"/>
  <text x="325" y="100" font-size="15" text-anchor="middle" fill="currentColor">F</text>
  <text x="342" y="47" font-size="14" text-anchor="middle" fill="currentColor">T</text>
  <text x="381" y="90" font-size="14" text-anchor="middle" fill="currentColor">R</text>
  <text x="210" y="150" font-size="12" text-anchor="middle" fill="currentColor">F front, K back, L left, R right, T top, U underneath</text>
</svg>
</div>

The middle square is the **front** (F). Fold the squares above and below backwards: they become the **top** (T) and
the **underneath** (U). Fold the squares on each side backwards: they become the **left** (L) and **right** (R). The
last square, at the end of the row, is folded right round to become the **back** (K). Six squares, six faces, a
cube.

### Opposite faces in a net

On a cube, every face has an **opposite** face, on the other side of the cube: top and underneath, front and back,
left and right. Can you find the opposite pairs in a net?

Here is a useful trick. In a straight line of squares in a net, two squares with **exactly one square between them**
end up opposite each other. Look at the cross: L and R have F between them, so they are opposite. F and K have R
between them, so they are opposite. T and U have F between them, so they are opposite.

Why does this work? Imagine rolling a cube along a straight line of squares. Each roll turns it a quarter of the way
round. After two rolls, the cube has turned half way round, so the face now touching the floor is the one that was
on top at the start: the opposite face.

### All 11 nets of a cube

Here are all 11 nets of a cube. Every one of them folds into a cube. Any other net you find will be one of these,
just turned round or flipped over.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 225" role="img" aria-label="All 11 different nets of a cube, numbered 1 to 11. Nets 1 to 6 have a row of four squares with one square above and one below. Nets 7 to 9 have a row of three. Net 10 is two rows of three, and net 11 is a staircase of three pairs">
  <rect x="12" y="12" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="12" y="29" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="12" y="46" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="29" y="29" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="46" y="29" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="63" y="29" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="52" y="76" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <rect x="120" y="12" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="120" y="29" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="137" y="29" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="137" y="46" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="154" y="29" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="171" y="29" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="160" y="76" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <rect x="228" y="12" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="228" y="29" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="245" y="29" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="262" y="29" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="262" y="46" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="279" y="29" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="268" y="76" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <rect x="336" y="12" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="336" y="29" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="353" y="29" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="370" y="29" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="387" y="29" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="387" y="46" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="376" y="76" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <rect x="12" y="101" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="29" y="84" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="29" y="101" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="29" y="118" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="46" y="101" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="63" y="101" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="52" y="148" font-size="12" text-anchor="middle" fill="currentColor">5</text>
  <rect x="120" y="101" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="137" y="84" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="137" y="101" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="154" y="101" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="154" y="118" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="171" y="101" width="17" height="17" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="160" y="148" font-size="12" text-anchor="middle" fill="currentColor">6</text>
  <rect x="228" y="84" width="17" height="17" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <rect x="228" y="101" width="17" height="17" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <rect x="245" y="101" width="17" height="17" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <rect x="262" y="101" width="17" height="17" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <rect x="262" y="118" width="17" height="17" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <rect x="279" y="118" width="17" height="17" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="268" y="148" font-size="12" text-anchor="middle" fill="currentColor">7</text>
  <rect x="336" y="84" width="17" height="17" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <rect x="353" y="84" width="17" height="17" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <rect x="353" y="101" width="17" height="17" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <rect x="353" y="118" width="17" height="17" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <rect x="370" y="101" width="17" height="17" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <rect x="387" y="101" width="17" height="17" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="376" y="148" font-size="12" text-anchor="middle" fill="currentColor">8</text>
  <rect x="12" y="156" width="17" height="17" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <rect x="29" y="156" width="17" height="17" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <rect x="29" y="173" width="17" height="17" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <rect x="46" y="173" width="17" height="17" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <rect x="46" y="190" width="17" height="17" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <rect x="63" y="173" width="17" height="17" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="52" y="220" font-size="12" text-anchor="middle" fill="currentColor">9</text>
  <rect x="120" y="156" width="17" height="17" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <rect x="137" y="156" width="17" height="17" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <rect x="154" y="156" width="17" height="17" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <rect x="154" y="173" width="17" height="17" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <rect x="171" y="173" width="17" height="17" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <rect x="188" y="173" width="17" height="17" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <text x="160" y="220" font-size="12" text-anchor="middle" fill="currentColor">10</text>
  <rect x="228" y="156" width="17" height="17" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <rect x="245" y="156" width="17" height="17" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <rect x="245" y="173" width="17" height="17" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <rect x="262" y="173" width="17" height="17" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <rect x="262" y="190" width="17" height="17" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <rect x="279" y="190" width="17" height="17" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <text x="268" y="220" font-size="12" text-anchor="middle" fill="currentColor">11</text>
</svg>
</div>

They come in four families:

- **Nets 1 to 6** (orange): a row of **4** squares, with **1** square above the row and **1** square below it. The
  row of 4 wraps round the cube like a belt (front, right, back, left), and the other two are the top and the
  underneath. There are 6 different ways to place those two.
- **Nets 7 to 9** (blue): rows of 1, 3 and 2 squares, with the middle row of 3.
- **Net 10** (green): two rows of 3, joined like stairs with one step.
- **Net 11** (green): a staircase of three pairs.

How can anyone be sure there are exactly 11? There are 35 different shapes you can make by joining 6 squares edge
to edge (turning and flipping do not count as different). Mathematicians have checked all 35, one by one: exactly 11
fold into a cube and 24 do not. It is a little like checking every key on a key ring to see which ones open the door.

### Three tests for shapes that do not fold

You do not have to fold a shape to know that it fails. Here are three shapes made of 6 squares that cannot make a
cube.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 120" role="img" aria-label="Three shapes made of six squares that do not fold into a cube: one with two lids on the same side, one with five squares in a row, and a block of two rows of three">
  <rect x="20" y="30" width="24" height="24" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="68" y="30" width="24" height="24" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="20" y="54" width="24" height="24" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="44" y="54" width="24" height="24" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="68" y="54" width="24" height="24" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="92" y="54" width="24" height="24" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="150" y="30" width="24" height="24" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="174" y="30" width="24" height="24" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="198" y="30" width="24" height="24" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="222" y="30" width="24" height="24" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="246" y="30" width="24" height="24" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="150" y="54" width="24" height="24" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="320" y="30" width="24" height="24" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="344" y="30" width="24" height="24" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="368" y="30" width="24" height="24" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="320" y="54" width="24" height="24" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="344" y="54" width="24" height="24" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="368" y="54" width="24" height="24" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="68" y="110" font-size="13" text-anchor="middle" fill="currentColor">two lids on one side</text>
  <text x="210" y="110" font-size="13" text-anchor="middle" fill="currentColor">five in a row</text>
  <text x="356" y="110" font-size="13" text-anchor="middle" fill="currentColor">a block</text>
</svg>
</div>

**Test 1. Two squares on the same side of the belt.** In the first shape, two squares stick up from the same side of
the row of 4. When you fold the row into a belt, both of them fold over to become the top. Two squares on the top,
and nothing underneath: it fails.

**Test 2. Five in a row.** A row of squares wrapping round a cube goes front, right, back, left, and then the fifth
square is back at the front again, on top of the first one. So a cube net can never have **5 squares in a row**.

**Test 3. A block of four.** The third shape has a 2-by-2 block of squares in it (four squares meeting at one middle
point). On a cube, only **three** faces meet at each corner. Look at any corner of a dice. Four squares meeting at
one point is one too many: they cannot all fold round one corner. So a cube net never has a 2-by-2 block.

If a shape passes all three tests, it is very likely to be a net, but the only sure way is to fold it (in real life
or in your head).

### Folding in your head

Folding a net in your head is a great skill. Here is a way to do it.

1. Choose one square to be the **bottom**. Imagine it lying on the table.
2. The squares joined to it fold **up** to make walls.
3. Squares joined to the walls fold **over** to make the top (or more walls).
4. Check: does every face get exactly one square? Do any two squares try to fill the same face?

### Nets of other solids

Every solid with flat faces has nets. Here are nets of two solids from the last lesson.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 210" role="img" aria-label="Left: the net of a square pyramid, a square with a triangle on each of its four sides. Right: the net of a triangle prism, three rectangles in a row with a triangle above and below the middle one">
  <polygon points="85,85 135,85 135,135 85,135" fill="#7ccf9a" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="85,85 135,85 110,40" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="85,135 135,135 110,180" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="85,85 85,135 40,110" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="135,85 135,135 180,110" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="260,70 300,70 300,150 260,150" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="300,70 340,70 340,150 300,150" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="340,70 380,70 380,150 340,150" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="300,70 340,70 320,35.4" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="300,150 340,150 320,184.6" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <text x="110" y="200" font-size="13" text-anchor="middle" fill="currentColor">net of a square pyramid</text>
  <text x="320" y="200" font-size="13" text-anchor="middle" fill="currentColor">net of a triangle prism</text>
</svg>
</div>

- A **square pyramid**: a square in the middle (the base) and a triangle on each of its 4 sides. Fold the triangles
  up and their points meet at the top.
- A **triangle prism**: 3 rectangles in a row (they wrap round to make the long sides) and a triangle on each end of
  the middle rectangle (the two ends).

A cylinder has a net too: two circles and a rectangle. The rectangle rolls up to make the curved side, like the
paper label on a can. (Peel one off and see: it is a rectangle!)

## Worked examples

**Example 1. Opposite faces on a dice.** On a real dice, opposite faces always add up to 7: 1 is opposite 6, 2 is
opposite 5, and 3 is opposite 4. Here is the cross net with some numbers: F is 1, T is 2, R is 3. Fill in the
others.

1. F and K have one square (R) between them in the row, so they are opposite. F is 1, so K is 7 − 1 = **6**.
2. T and U have F between them, so they are opposite. T is 2, so U is 7 − 2 = **5**.
3. L and R have F between them, so they are opposite. R is 3, so L is 7 − 3 = **4**.

**Example 2. Net or not?** Six squares are joined in a straight row of 5, with one more square above the second
square. Is it a net of a cube?

1. Test 2: is there a row of 5? Yes.
2. A row of 5 wraps all the way round the cube and back onto the first face. Two squares overlap.
3. **Not a net.** No need to fold it.

**Example 3. Fold net 1 in your head.** Net 1 is a row of 4 with one square above the first square and one below the
first square. Does it fold into a cube?

1. Take the row of 4 as the belt: front, right, back, left.
2. The square above the first square (the front) folds up and over to become the **top**.
3. The square below the first square folds down and under to become the **underneath**.
4. Each of the 6 faces (front, right, back, left, top, underneath) has exactly one square. **It is a net.** Notice
   that the top and the underneath can hang off the same square of the belt, as long as one is above and one is
   below.

## Try it

1. How many squares are in a net of a cube? Why?
2. In the cross net, which face is opposite the top (T)?
3. Can a net of a cube have 4 squares in a row? Can it have 5?
4. Can a net of a cube contain a 2-by-2 block of squares? Why not?
5. In net 10 (two rows of 3, like a step), find the pairs of opposite faces using the "one square between" trick.
6. How many triangles are in the net of a square pyramid? How many squares?
7. Draw the net of a box (cuboid) that is long and thin, like a box of spaghetti. What shapes do you need?
8. A dice net is the cross. F shows 3 and T shows 1. What numbers go on K and U?

??? note "Answers"
    1. **6**, one for each face of the cube. A net shows every face exactly once.
    2. **U** (underneath). T and U have F between them in the up-and-down line, so they are opposite.
    3. **4 in a row: yes.** Nets 1 to 6 all have a row of 4, which wraps round the cube as a belt. **5 in a row: no.**
       The 5th square would land on top of the 1st.
    4. **No.** Four squares in a 2-by-2 block all meet at one point. On a cube only three faces meet at each corner,
       so the four squares cannot all fold round it.
    5. Label the top row a, b, c (left to right) and the bottom row d, e, f, where c sits on top of d. In the top
       row, a and c have b between them: **a and c are opposite**. In the bottom row, d and f have e between them:
       **d and f are opposite**. That leaves **b and e** to be the third pair. (You can check by folding: b and e
       end up on opposite sides.)
    6. **4** triangles and **1** square: 5 faces in all, the same as the 5 faces of a square pyramid.
    7. You need **6 rectangles**: 4 long thin ones for the sides (they make a belt round the box), and 2 small ones
       (they may be squares) for the two ends. One way to draw it: a row of 4 long rectangles side by side, with a
       small end rectangle above one of them and another below it, like the cross but stretched.
    8. K is opposite F, so K = 7 − 3 = **4**. U is opposite T, so U = 7 − 1 = **6**.

## Common mistake

**Thinking any 6 squares make a cube.** Only 11 of the 35 shapes made of 6 squares are nets. Use the three tests:
no 5 in a row, no 2-by-2 block, and no two squares on the same side of the belt.

**Counting turned or flipped nets as new.** If you draw net 5 (the cross) upside down, it is still net 5. Two nets
are the same if you can turn or flip one to make the other.

## Where it leads

- Previous lesson: [Faces, edges and corners](03-faces-edges-corners.md).
- Next lesson: [Tiling the floor](05-tiling-the-floor.md): covering a flat floor with shapes, no gaps.
- This level: [Level 2: Shapes all around](index.md). The whole topic: [Geometry](../index.md).
- The amount of card in a net is the **surface area** of the solid: [Measurement](../../measurement/index.md).
- Checking all 35 shapes, one at a time, without missing any or counting any twice, is a job for
  [Counting](../../counting/index.md).
