---
title: "Faces, edges and corners (vertices) of solids"
---

# Faces, edges and corners (vertices) of solids

*Geometry · level 2, lesson 3 of 6*

## A question to start

Pick up a dice (or any cube). Count its flat sides. Count its corners. Count its edges, the straight lines where two
flat sides meet.

You should get 6 flat sides, 8 corners and 12 edges. Now do a strange sum: add the flat sides and the corners.
6 + 8 = 14. That is exactly **2 more** than the number of edges, 12.

Is that a coincidence? Try a pyramid, a tent shape, a box. The same thing happens every time! In this lesson you
will learn to count the parts of solid shapes carefully, and you will meet one of the most famous patterns in all of
geometry.

## The idea

### Three parts of a solid

In level 1 you met solid shapes: shapes that take up space, like cubes, boxes, balls and cones. Solids have three
kinds of parts.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 450 225" role="img" aria-label="Left: a cube with all 8 corners numbered, the 3 hidden edges drawn dashed. Right: a cube with one flat face shaded and one edge drawn thick">
  <polygon points="60,70 160,70 160,170 60,170" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="60,70 160,70 205,35 105,35" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill-opacity="0.6"/>
  <polygon points="160,70 205,35 205,135 160,170" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill-opacity="0.8"/>
  <path d="M 105 135 L 105 35 M 105 135 L 205 135 M 105 135 L 60 170" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" fill="none"/>
  <circle cx="60" cy="70" r="10" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <text x="60" y="74.5" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="160" cy="70" r="10" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <text x="160" y="74.5" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <circle cx="160" cy="170" r="10" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <text x="160" y="174.5" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <circle cx="60" cy="170" r="10" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <text x="60" y="174.5" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <circle cx="105" cy="35" r="10" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <text x="105" y="39.5" font-size="12" text-anchor="middle" fill="currentColor">5</text>
  <circle cx="205" cy="35" r="10" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <text x="205" y="39.5" font-size="12" text-anchor="middle" fill="currentColor">6</text>
  <circle cx="205" cy="135" r="10" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <text x="205" y="139.5" font-size="12" text-anchor="middle" fill="currentColor">7</text>
  <circle cx="105" cy="135" r="10" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <text x="105" y="139.5" font-size="12" text-anchor="middle" fill="currentColor">8</text>
  <text x="130" y="215" font-size="13" text-anchor="middle" fill="currentColor">8 corners (vertices)</text>
  <polygon points="270,70 370,70 370,170 270,170" fill="#7ccf9a" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="270,70 370,70 415,35 315,35" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill-opacity="0.4"/>
  <polygon points="370,70 415,35 415,135 370,170" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill-opacity="0.6"/>
  <line x1="370" y1="70" x2="415" y2="35" stroke="currentColor" stroke-width="6"/>
  <text x="320" y="125" font-size="13" text-anchor="middle" fill="currentColor">a face</text>
  <text x="387.5" y="23" font-size="13" text-anchor="middle" fill="currentColor">an edge</text>
  <text x="335" y="215" font-size="13" text-anchor="middle" fill="currentColor">a face and an edge</text>
</svg>
</div>

- A **face** is a flat side of a solid. A cube has 6 faces, and each one is a square. (The green square on the right
  is one face.)
- An **edge** is a line where two faces meet. Run your finger along it: it is the sharp, straight part. (The thick
  line on the right is one edge.)
- A **vertex** is a corner, a point where edges meet. More than one are called **vertices**. In everyday words, we
  just say **corners**. (The numbered dots on the left are the vertices.)

Notice that these are the same words you used for flat shapes, but one size bigger. A flat shape has sides that are
lines and corners that are points. A solid has faces that are flat shapes, edges that are lines, and corners that
are points.

### Counting a cube carefully

When you count the parts of a solid, the hardest thing is that you **cannot see the back**. Some faces, edges and
corners are hidden. In the picture on the left, the hidden edges are drawn with dashes, and hidden corner 8 is at the
back. Good counting needs a plan.

**Faces.** Count top and bottom (2), front and back (2), left and right (2). That is **6 faces**.

**Corners.** Count the top layer of corners (4, numbered 1, 2, 5 and 6), then the bottom layer (4, numbered 3, 4,
7 and 8). That is **8 corners**.

**Edges.** Count the edges around the top face (4), the edges around the bottom face (4), and the edges going up and
down between them (4). That is **12 edges**.

Here is a second way to count the edges, to check. Each of the 6 faces is a square, with 4 edges. That gives
6 × 4 = 24. But every edge is where **two** faces meet, so every edge was counted twice, once for each face.
So the real number is 24 ÷ 2 = **12**. The two ways agree, so we can trust the answer.

And the same trick for corners: 6 faces, each with 4 corners, gives 24. But at each corner of a cube, **three**
faces meet (look at any corner of a dice: you can see three faces touching it). So every corner was counted 3
times: 24 ÷ 3 = **8**. It agrees again!

### More solids

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 262" role="img" aria-label="Six solids: a box, a square pyramid, a triangle prism, a cylinder, a cone and a sphere">
  <polygon points="15,70 85,70 85,110 15,110" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="15,70 85,70 113,48 43,48" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill-opacity="0.6"/>
  <polygon points="85,70 113,48 113,88 85,110" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill-opacity="0.8"/>
  <polygon points="160,110 225,110 207.1,30.2" fill="#7ccf9a" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="225,110 254.2,90.5 207.1,30.2" fill="#7ccf9a" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill-opacity="0.75"/>
  <path d="M 160 110 L 189.2 90.5 L 254.2 90.5 M 189.2 90.5 L 207.1 30.2" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/>
  <polygon points="330,110 378,89 348,37 300,58" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill-opacity="0.7"/>
  <polygon points="270,110 330,110 300,58" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <path d="M 270 110 L 318 89 L 378 89 M 318 89 L 348 37" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/>
  <path d="M 30 160 L 30 220 A 30 10 0 0 0 90 220 L 90 160 Z" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <ellipse cx="60" cy="160" rx="30" ry="10" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <path d="M 153 225 A 32 10 0 0 0 217 225 L 185 150 Z" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <path d="M 153 225 A 32 10 0 0 1 217 225" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/>
  <circle cx="320" cy="185" r="36" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <path d="M 284 185 A 36 10.8 0 0 0 356 185" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="70" y="135" font-size="13" text-anchor="middle" fill="currentColor">box</text>
  <text x="205" y="135" font-size="13" text-anchor="middle" fill="currentColor">square pyramid</text>
  <text x="340" y="135" font-size="13" text-anchor="middle" fill="currentColor">triangle prism</text>
  <text x="60" y="252" font-size="13" text-anchor="middle" fill="currentColor">cylinder</text>
  <text x="185" y="252" font-size="13" text-anchor="middle" fill="currentColor">cone</text>
  <text x="320" y="252" font-size="13" text-anchor="middle" fill="currentColor">sphere</text>
</svg>
</div>

A **prism** is a solid with two matching ends that are the same polygon, joined by rectangles. A box is a prism
with rectangle ends. A **triangle prism** has triangle ends, like a tent or a chocolate bar box shaped like a long
triangle.

A **pyramid** has one polygon at the bottom (the **base**) and triangles that lean in to meet at one point at the top.
A **square pyramid** has a square base.

Here are the counts. Count them yourself on the pictures, or better, on real objects.

| Solid | Faces | Corners | Edges |
| --- | --- | --- | --- |
| cube | 6 (squares) | 8 | 12 |
| box | 6 (rectangles) | 8 | 12 |
| square pyramid | 5 (1 square, 4 triangles) | 5 | 8 |
| triangle prism | 5 (2 triangles, 3 rectangles) | 6 | 9 |
| triangle pyramid | 4 (all triangles) | 4 | 6 |

Let us check the square pyramid by counting. Faces: the square base, plus one triangle on each of its 4 sides,
1 + 4 = 5. Corners: 4 around the base, plus the point at the top, 4 + 1 = 5. Edges: 4 around the base, plus 4
going up to the point, 4 + 4 = 8.

### Solids with curved parts

Cylinders, cones and spheres have **curved surfaces**. A curved surface is not called a face by most mathematicians,
because a face must be flat. So we describe them like this:

| Solid | Flat faces | Curved surfaces | Edges | Corners |
| --- | --- | --- | --- | --- |
| cylinder | 2 (circles) | 1 | 2 (curved, round the circles) | 0 |
| cone | 1 (a circle) | 1 | 1 (curved) | 0, but it has 1 point at the top (the **apex**) |
| sphere | 0 | 1 | 0 | 0 |

The wheels of a car, a bicycle or a Mars rover are short cylinders: the rolling part is the curved surface, and the
flat faces are on each side.

### The famous pattern

Now look again at the solids with flat faces only. Add the faces and the corners, and compare with the edges.

| Solid | Faces + Corners | Edges | Difference |
| --- | --- | --- | --- |
| cube | 6 + 8 = 14 | 12 | 2 |
| square pyramid | 5 + 5 = 10 | 8 | 2 |
| triangle prism | 5 + 6 = 11 | 9 | 2 |
| triangle pyramid | 4 + 4 = 8 | 6 | 2 |

Every time, **faces + corners is 2 more than edges**. This is called **Euler's rule**, after Leonhard Euler (say
"OY-ler"), a great mathematician who lived about 300 years ago and wrote about it. It works for every solid made of
flat faces with no holes through it.

Can we see **why**, at least for prisms? Think of a prism whose ends have some number of sides. Let us try 5 (a
**pentagon prism**, like a tall box with pentagon ends).

- **Faces:** 2 ends, plus one rectangle for each side of the pentagon: 2 + 5 = 7.
- **Corners:** 5 on the top pentagon and 5 on the bottom: 5 + 5 = 10.
- **Edges:** 5 round the top, 5 round the bottom, 5 going up and down: 5 + 5 + 5 = 15.

Faces + corners = 7 + 10 = 17 = 15 + 2. It works! And look at the reason. The edges are "three fives". The corners
are "two fives", and the faces are "one five and 2 more". So faces + corners is three fives and 2 more, which is the
edges and 2 more. If you change 5 to any other number, the same thing happens. That is the start of a real proof.

## Worked examples

**Example 1. Count a triangle prism.** A tent has a triangle at the front and back. How many faces, corners and
edges?

1. Faces: 2 triangle ends, plus one rectangle for each side of the triangle (3). Total 2 + 3 = **5**.
2. Corners: 3 on the front triangle, 3 on the back. Total **6**.
3. Edges: 3 round the front, 3 round the back, 3 joining front to back. Total **9**.
4. Check with Euler's rule: 5 + 6 = 11, and 11 is 9 + 2. Yes.

**Example 2. Which solid?** I have 5 faces. One is a square and 4 are triangles. What am I?

1. A square at the bottom and triangles on every side, meeting at the top.
2. That is a **square pyramid**, like the pyramids of Egypt.

**Example 3. Use the rule to find a missing count.** A solid has 8 faces and 6 corners. How many edges must it
have?

1. Euler's rule: faces + corners = edges + 2.
2. 8 + 6 = 14.
3. So edges + 2 = 14, which means edges = 12.
4. The solid has **12 edges**. (This solid really exists: it is called an **octahedron**, and it looks like two square
   pyramids stuck together base to base. Check: 4 + 4 triangles = 8 faces; 4 corners around the middle + 1 top + 1
   bottom = 6 corners; 4 edges round the middle + 4 up + 4 down = 12 edges.)

## Try it

1. How many faces does a box (like a cereal box) have? What shape are they?
2. How many edges does a square pyramid have?
3. How many corners does a triangle prism have?
4. Which solid has 2 flat circle faces and 1 curved surface?
5. A triangle pyramid has 4 faces, all triangles. How many corners and edges? Check with Euler's rule.
6. A dice is a cube with dots on it. How many faces does it have? How many edges?
7. A **hexagon prism** (like an unsharpened pencil) has hexagon ends. How many faces, corners and edges?
8. A solid has 6 corners and 9 edges. How many faces does it have? Which solid could it be?

??? note "Answers"
    1. **6** faces, all rectangles (top, bottom, front, back, left, right). Some boxes have two square ends, but the
       count is still 6.
    2. **8**: 4 around the square base and 4 going up to the point.
    3. **6**: 3 on the front triangle and 3 on the back triangle.
    4. A **cylinder**, like a can.
    5. Corners: 3 round the base triangle plus 1 at the top = **4**. Edges: 3 round the base plus 3 going up to the
       top = **6**. Euler: 4 + 4 = 8, and 8 = 6 + 2. It works.
    6. A dice is a cube, so it has **6** faces and **12** edges. The dots do not change the shape!
    7. Faces: 2 hexagon ends + 6 rectangles = **8**. Corners: 6 on top + 6 on the bottom = **12**. Edges: 6 round the
       top + 6 round the bottom + 6 up and down = **18**. Check: 8 + 12 = 20 = 18 + 2.
    8. Faces + 6 = 9 + 2 = 11, so faces = 11 − 6 = **5**. A solid with 5 faces, 6 corners and 9 edges is a
       **triangle prism** (like a tent).

## Common mistake

**Forgetting the hidden parts.** In a picture of a cube, you can only see 3 faces, 7 corners and 9 edges. The
others are round the back. Always count with a plan (top layer, bottom layer, in between), or hold the real object
and turn it.

**Counting the same edge twice.** When you count edges face by face, each edge belongs to two faces. If you do not
halve your total, you get 24 for a cube instead of 12.

## Where it leads

- Previous lesson: [Lines of symmetry](02-lines-of-symmetry.md).
- Next lesson: [Nets: unfolding a cube](04-nets-of-a-cube.md), where you cut a box open and lay it flat.
- This level: [Level 2: Shapes all around](index.md). The whole topic: [Geometry](../index.md).
- Back to the first look at solids: [Flat and solid](../level-1/02-flat-and-solid.md).
- How much a box holds is its **volume**: [Measurement](../../measurement/index.md).
- The trick of counting each edge twice and then halving is a real counting tool:
  [Counting](../../counting/index.md).
