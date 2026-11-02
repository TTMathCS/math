---
title: "Tiling the floor: which shapes cover a flat surface with no gaps"
---

# Tiling the floor: which shapes cover a flat surface with no gaps

*Geometry · level 2, lesson 5 of 6*

## A question to start

Look at a bathroom floor, a kitchen wall or a sidewalk. The tiles are usually squares or rectangles. Sometimes you
see triangles, and sometimes hexagons, like a honeycomb.

But have you ever seen a floor covered with **regular pentagons**, the five-sided shapes with all sides and corners
equal? Or with regular octagons, all by themselves?

You will not find one, anywhere in the world. It is not that nobody thought of it. It is **impossible**. In this
lesson you will find out exactly why, using nothing but the corners of the shapes.

## The idea

### What a tiling is

A **tiling** is a way of covering a flat surface with shapes so that there are:

1. **no gaps** between the shapes, and
2. **no overlaps** (no shape lies on top of another).

The pattern could go on forever in every direction. Another name for a tiling is a **tessellation** (say
"tess-uh-LAY-shun").

### Three regular shapes that tile

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 430 156" role="img" aria-label="Three tilings with no gaps: a floor of squares, a floor of equal-sided triangles, and a floor of hexagons like a honeycomb">
  <clipPath id="tsq"><rect x="10" y="10" width="130" height="120"/></clipPath>
  <g clip-path="url(#tsq)">
  <polygon points="10,10 40,10 40,40 10,40" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="10,40 40,40 40,70 10,70" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="10,70 40,70 40,100 10,100" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="10,100 40,100 40,130 10,130" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="10,130 40,130 40,160 10,160" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="40,10 70,10 70,40 40,40" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="40,40 70,40 70,70 40,70" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="40,70 70,70 70,100 40,100" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="40,100 70,100 70,130 40,130" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="40,130 70,130 70,160 40,160" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="70,10 100,10 100,40 70,40" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="70,40 100,40 100,70 70,70" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="70,70 100,70 100,100 70,100" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="70,100 100,100 100,130 70,130" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="70,130 100,130 100,160 70,160" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="100,10 130,10 130,40 100,40" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="100,40 130,40 130,70 100,70" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="100,70 130,70 130,100 100,100" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="100,100 130,100 130,130 100,130" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="100,130 130,130 130,160 100,160" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="130,10 160,10 160,40 130,40" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="130,40 160,40 160,70 130,70" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="130,70 160,70 160,100 130,100" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="130,100 160,100 160,130 130,130" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="130,130 160,130 160,160 130,160" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  </g>
  <rect x="10" y="10" width="130" height="120" fill="none" stroke="currentColor" stroke-width="1"/>
  <clipPath id="ttri"><rect x="150" y="10" width="130" height="120"/></clipPath>
  <g clip-path="url(#ttri)">
  <polygon points="114,41.2 150,41.2 132,10" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="132,10 168,10 150,41.2" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="150,41.2 186,41.2 168,10" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="168,10 204,10 186,41.2" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="186,41.2 222,41.2 204,10" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="204,10 240,10 222,41.2" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="222,41.2 258,41.2 240,10" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="240,10 276,10 258,41.2" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="258,41.2 294,41.2 276,10" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="276,10 312,10 294,41.2" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="294,41.2 330,41.2 312,10" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="312,10 348,10 330,41.2" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="330,41.2 366,41.2 348,10" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="348,10 384,10 366,41.2" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="132,72.4 168,72.4 150,41.2" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="150,41.2 186,41.2 168,72.4" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="168,72.4 204,72.4 186,41.2" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="186,41.2 222,41.2 204,72.4" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="204,72.4 240,72.4 222,41.2" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="222,41.2 258,41.2 240,72.4" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="240,72.4 276,72.4 258,41.2" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="258,41.2 294,41.2 276,72.4" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="276,72.4 312,72.4 294,41.2" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="294,41.2 330,41.2 312,72.4" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="312,72.4 348,72.4 330,41.2" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="330,41.2 366,41.2 348,72.4" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="348,72.4 384,72.4 366,41.2" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="366,41.2 402,41.2 384,72.4" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="114,103.5 150,103.5 132,72.4" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="132,72.4 168,72.4 150,103.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="150,103.5 186,103.5 168,72.4" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="168,72.4 204,72.4 186,103.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="186,103.5 222,103.5 204,72.4" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="204,72.4 240,72.4 222,103.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="222,103.5 258,103.5 240,72.4" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="240,72.4 276,72.4 258,103.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="258,103.5 294,103.5 276,72.4" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="276,72.4 312,72.4 294,103.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="294,103.5 330,103.5 312,72.4" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="312,72.4 348,72.4 330,103.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="330,103.5 366,103.5 348,72.4" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="348,72.4 384,72.4 366,103.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="132,134.7 168,134.7 150,103.5" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="150,103.5 186,103.5 168,134.7" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="168,134.7 204,134.7 186,103.5" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="186,103.5 222,103.5 204,134.7" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="204,134.7 240,134.7 222,103.5" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="222,103.5 258,103.5 240,134.7" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="240,134.7 276,134.7 258,103.5" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="258,103.5 294,103.5 276,134.7" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="276,134.7 312,134.7 294,103.5" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="294,103.5 330,103.5 312,134.7" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="312,134.7 348,134.7 330,103.5" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="330,103.5 366,103.5 348,134.7" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="348,134.7 384,134.7 366,103.5" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="366,103.5 402,103.5 384,134.7" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="114,165.9 150,165.9 132,134.7" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="132,134.7 168,134.7 150,165.9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="150,165.9 186,165.9 168,134.7" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="168,134.7 204,134.7 186,165.9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="186,165.9 222,165.9 204,134.7" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="204,134.7 240,134.7 222,165.9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="222,165.9 258,165.9 240,134.7" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="240,134.7 276,134.7 258,165.9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="258,165.9 294,165.9 276,134.7" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="276,134.7 312,134.7 294,165.9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="294,165.9 330,165.9 312,134.7" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="312,134.7 348,134.7 330,165.9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="330,165.9 366,165.9 348,134.7" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="348,134.7 384,134.7 366,165.9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  </g>
  <rect x="150" y="10" width="130" height="120" fill="none" stroke="currentColor" stroke-width="1"/>
  <clipPath id="thex"><rect x="290" y="10" width="130" height="120"/></clipPath>
  <g clip-path="url(#thex)">
  <polygon points="280,-7.3 270,10 250,10 240,-7.3 250,-24.6 270,-24.6" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="280,27.3 270,44.6 250,44.6 240,27.3 250,10 270,10" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="280,62 270,79.3 250,79.3 240,62 250,44.6 270,44.6" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="280,96.6 270,113.9 250,113.9 240,96.6 250,79.3 270,79.3" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="280,131.2 270,148.6 250,148.6 240,131.2 250,113.9 270,113.9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="280,165.9 270,183.2 250,183.2 240,165.9 250,148.6 270,148.6" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="310,-24.6 300,-7.3 280,-7.3 270,-24.6 280,-42 300,-42" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="310,10 300,27.3 280,27.3 270,10 280,-7.3 300,-7.3" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="310,44.6 300,62 280,62 270,44.6 280,27.3 300,27.3" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="310,79.3 300,96.6 280,96.6 270,79.3 280,62 300,62" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="310,113.9 300,131.2 280,131.2 270,113.9 280,96.6 300,96.6" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="310,148.6 300,165.9 280,165.9 270,148.6 280,131.2 300,131.2" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="340,-7.3 330,10 310,10 300,-7.3 310,-24.6 330,-24.6" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="340,27.3 330,44.6 310,44.6 300,27.3 310,10 330,10" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="340,62 330,79.3 310,79.3 300,62 310,44.6 330,44.6" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="340,96.6 330,113.9 310,113.9 300,96.6 310,79.3 330,79.3" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="340,131.2 330,148.6 310,148.6 300,131.2 310,113.9 330,113.9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="340,165.9 330,183.2 310,183.2 300,165.9 310,148.6 330,148.6" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="370,-24.6 360,-7.3 340,-7.3 330,-24.6 340,-42 360,-42" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="370,10 360,27.3 340,27.3 330,10 340,-7.3 360,-7.3" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="370,44.6 360,62 340,62 330,44.6 340,27.3 360,27.3" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="370,79.3 360,96.6 340,96.6 330,79.3 340,62 360,62" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="370,113.9 360,131.2 340,131.2 330,113.9 340,96.6 360,96.6" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="370,148.6 360,165.9 340,165.9 330,148.6 340,131.2 360,131.2" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="400,-7.3 390,10 370,10 360,-7.3 370,-24.6 390,-24.6" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="400,27.3 390,44.6 370,44.6 360,27.3 370,10 390,10" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="400,62 390,79.3 370,79.3 360,62 370,44.6 390,44.6" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="400,96.6 390,113.9 370,113.9 360,96.6 370,79.3 390,79.3" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="400,131.2 390,148.6 370,148.6 360,131.2 370,113.9 390,113.9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="400,165.9 390,183.2 370,183.2 360,165.9 370,148.6 390,148.6" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="430,-24.6 420,-7.3 400,-7.3 390,-24.6 400,-42 420,-42" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="430,10 420,27.3 400,27.3 390,10 400,-7.3 420,-7.3" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="430,44.6 420,62 400,62 390,44.6 400,27.3 420,27.3" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="430,79.3 420,96.6 400,96.6 390,79.3 400,62 420,62" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="430,113.9 420,131.2 400,131.2 390,113.9 400,96.6 420,96.6" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="430,148.6 420,165.9 400,165.9 390,148.6 400,131.2 420,131.2" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="460,-7.3 450,10 430,10 420,-7.3 430,-24.6 450,-24.6" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="460,27.3 450,44.6 430,44.6 420,27.3 430,10 450,10" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="460,62 450,79.3 430,79.3 420,62 430,44.6 450,44.6" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="460,96.6 450,113.9 430,113.9 420,96.6 430,79.3 450,79.3" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="460,131.2 450,148.6 430,148.6 420,131.2 430,113.9 450,113.9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="460,165.9 450,183.2 430,183.2 420,165.9 430,148.6 450,148.6" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="490,-24.6 480,-7.3 460,-7.3 450,-24.6 460,-42 480,-42" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="490,10 480,27.3 460,27.3 450,10 460,-7.3 480,-7.3" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="490,44.6 480,62 460,62 450,44.6 460,27.3 480,27.3" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="490,79.3 480,96.6 460,96.6 450,79.3 460,62 480,62" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="490,113.9 480,131.2 460,131.2 450,113.9 460,96.6 480,96.6" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="490,148.6 480,165.9 460,165.9 450,148.6 460,131.2 480,131.2" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  </g>
  <rect x="290" y="10" width="130" height="120" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="75" y="148" font-size="13" text-anchor="middle" fill="currentColor">squares</text>
  <text x="215" y="148" font-size="13" text-anchor="middle" fill="currentColor">triangles</text>
  <text x="355" y="148" font-size="13" text-anchor="middle" fill="currentColor">hexagons</text>
</svg>
</div>

- **Squares** tile, like a chessboard.
- **Equilateral triangles** (all sides equal) tile. Half of them point up and half point down.
- **Regular hexagons** tile, like the cells of a honeycomb.

These are the **only** three regular polygons that can tile a floor all by themselves. Let us find out why.

### The secret is at the corners

Look at any point in a tiling where corners of tiles meet. The corners have to fit **all the way round** the point,
with no gap and no overlap. All the way round a point is one **full turn**, like turning yourself all the way
round to face the front again.

- In the square tiling, **4** square corners meet at each point. A square corner is a quarter of a full turn, and
  4 quarters make a whole. They fit exactly.
- In the triangle tiling, **6** triangle corners meet at each point. Each equilateral triangle corner is a sixth of a
  full turn, and 6 sixths make a whole.
- In the hexagon tiling, **3** hexagon corners meet at each point. Each hexagon corner is a third of a full turn.

Here is a way to see the hexagon fact without measuring anything. A regular hexagon can be cut into **6
equilateral triangles**, all meeting at its centre. Each hexagon corner is made of **2 triangle corners**. So 3
hexagon corners are the same as 6 triangle corners, and we already know 6 triangle corners fill a full turn.

### Why regular pentagons fail

Now the pentagon. How big is a pentagon's corner? We can compare it without any measuring tool.

- A regular pentagon's corner is **wider** than a square corner. (Trace one and lay it on a square corner: it sticks
  out.)
- It is **narrower** than a regular hexagon's corner.

Now try to fit regular pentagons round a point.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 220" role="img" aria-label="Three regular pentagons meeting at one corner point. They leave a thin wedge-shaped gap, too small for a fourth pentagon">
  <polygon points="140,110 170,162 228.7,149.5 235,89.8 180.1,65.4" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="140,110 180.1,65.4 150.1,13.4 91.5,25.9 85.2,85.6" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="140,110 85.2,85.6 45,130.2 75,182.1 133.7,169.7" fill="#7ccf9a" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="140" cy="110" r="4" fill="currentColor"/>
  <text x="152.9" y="182.6" font-size="13" text-anchor="middle" fill="currentColor">gap</text>
  <text x="370" y="70" font-size="13" text-anchor="middle" fill="currentColor">3 pentagons leave</text>
  <text x="370" y="88" font-size="13" text-anchor="middle" fill="currentColor">a gap; a 4th one</text>
  <text x="370" y="106" font-size="13" text-anchor="middle" fill="currentColor">will not fit</text>
</svg>
</div>

- **3 pentagon corners**: each one is narrower than a hexagon corner, and 3 hexagon corners make exactly a full
  turn. So 3 pentagon corners make **less** than a full turn. There is a **gap**.
- **4 pentagon corners**: each one is wider than a square corner, and 4 square corners make exactly a full turn. So 4
  pentagon corners make **more** than a full turn. They **overlap**.

Three is too few and four is too many. There is no number in between! So regular pentagons can **never** tile. That
is a real proof: a reason that works every time, not just a guess from one drawing.

### What about bigger regular polygons?

The more sides a regular polygon has, the wider its corners get. (A regular octagon is rounder than a square, and its
corners are flatter.)

- 3 corners of a regular octagon: each is wider than a hexagon corner, so 3 of them make **more** than a full turn.
  Overlap.
- 2 corners: each corner of any polygon like this is less than half a turn (less than a straight line), so 2 of them
  make **less** than a full turn. Gap.

So octagons cannot tile alone, and neither can any regular polygon with more than 6 sides. With 7 or more sides, 3
corners are already too many, and 2 are too few. That is why the list stops at triangles, squares and hexagons.

### Mixing shapes

Octagons cannot tile alone, but they can tile with a **helper**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 170" role="img" aria-label="Left: regular octagons with small squares filling the spaces between them, a tiling with no gaps. Right: circles packed together, with curved gaps between them">
  <clipPath id="toct"><rect x="10" y="10" width="190" height="130"/></clipPath>
  <g clip-path="url(#toct)">
  <polygon points="-9,-25.9 -25.9,-9 -49.9,-9 -66.9,-25.9 -66.9,-49.9 -49.9,-66.9 -25.9,-66.9 -9,-49.9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="8,-9 -9,8 -25.9,-9 -9,-25.9" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-9,32 -25.9,49 -49.9,49 -66.9,32 -66.9,8 -49.9,-9 -25.9,-9 -9,8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="8,49 -9,65.9 -25.9,49 -9,32" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-9,89.9 -25.9,106.9 -49.9,106.9 -66.9,89.9 -66.9,65.9 -49.9,49 -25.9,49 -9,65.9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="8,106.9 -9,123.9 -25.9,106.9 -9,89.9" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-9,147.9 -25.9,164.9 -49.9,164.9 -66.9,147.9 -66.9,123.9 -49.9,106.9 -25.9,106.9 -9,123.9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="8,164.9 -9,181.8 -25.9,164.9 -9,147.9" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-9,205.8 -25.9,222.8 -49.9,222.8 -66.9,205.8 -66.9,181.8 -49.9,164.9 -25.9,164.9 -9,181.8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="8,222.8 -9,239.8 -25.9,222.8 -9,205.8" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="49,-25.9 32,-9 8,-9 -9,-25.9 -9,-49.9 8,-66.9 32,-66.9 49,-49.9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="65.9,-9 49,8 32,-9 49,-25.9" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="49,32 32,49 8,49 -9,32 -9,8 8,-9 32,-9 49,8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="65.9,49 49,65.9 32,49 49,32" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="49,89.9 32,106.9 8,106.9 -9,89.9 -9,65.9 8,49 32,49 49,65.9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="65.9,106.9 49,123.9 32,106.9 49,89.9" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="49,147.9 32,164.9 8,164.9 -9,147.9 -9,123.9 8,106.9 32,106.9 49,123.9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="65.9,164.9 49,181.8 32,164.9 49,147.9" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="49,205.8 32,222.8 8,222.8 -9,205.8 -9,181.8 8,164.9 32,164.9 49,181.8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="65.9,222.8 49,239.8 32,222.8 49,205.8" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="106.9,-25.9 89.9,-9 65.9,-9 49,-25.9 49,-49.9 65.9,-66.9 89.9,-66.9 106.9,-49.9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="123.9,-9 106.9,8 89.9,-9 106.9,-25.9" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="106.9,32 89.9,49 65.9,49 49,32 49,8 65.9,-9 89.9,-9 106.9,8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="123.9,49 106.9,65.9 89.9,49 106.9,32" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="106.9,89.9 89.9,106.9 65.9,106.9 49,89.9 49,65.9 65.9,49 89.9,49 106.9,65.9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="123.9,106.9 106.9,123.9 89.9,106.9 106.9,89.9" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="106.9,147.9 89.9,164.9 65.9,164.9 49,147.9 49,123.9 65.9,106.9 89.9,106.9 106.9,123.9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="123.9,164.9 106.9,181.8 89.9,164.9 106.9,147.9" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="106.9,205.8 89.9,222.8 65.9,222.8 49,205.8 49,181.8 65.9,164.9 89.9,164.9 106.9,181.8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="123.9,222.8 106.9,239.8 89.9,222.8 106.9,205.8" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="164.9,-25.9 147.9,-9 123.9,-9 106.9,-25.9 106.9,-49.9 123.9,-66.9 147.9,-66.9 164.9,-49.9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="181.8,-9 164.9,8 147.9,-9 164.9,-25.9" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="164.9,32 147.9,49 123.9,49 106.9,32 106.9,8 123.9,-9 147.9,-9 164.9,8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="181.8,49 164.9,65.9 147.9,49 164.9,32" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="164.9,89.9 147.9,106.9 123.9,106.9 106.9,89.9 106.9,65.9 123.9,49 147.9,49 164.9,65.9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="181.8,106.9 164.9,123.9 147.9,106.9 164.9,89.9" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="164.9,147.9 147.9,164.9 123.9,164.9 106.9,147.9 106.9,123.9 123.9,106.9 147.9,106.9 164.9,123.9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="181.8,164.9 164.9,181.8 147.9,164.9 164.9,147.9" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="164.9,205.8 147.9,222.8 123.9,222.8 106.9,205.8 106.9,181.8 123.9,164.9 147.9,164.9 164.9,181.8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="181.8,222.8 164.9,239.8 147.9,222.8 164.9,205.8" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="222.8,-25.9 205.8,-9 181.8,-9 164.9,-25.9 164.9,-49.9 181.8,-66.9 205.8,-66.9 222.8,-49.9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="239.8,-9 222.8,8 205.8,-9 222.8,-25.9" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="222.8,32 205.8,49 181.8,49 164.9,32 164.9,8 181.8,-9 205.8,-9 222.8,8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="239.8,49 222.8,65.9 205.8,49 222.8,32" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="222.8,89.9 205.8,106.9 181.8,106.9 164.9,89.9 164.9,65.9 181.8,49 205.8,49 222.8,65.9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="239.8,106.9 222.8,123.9 205.8,106.9 222.8,89.9" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="222.8,147.9 205.8,164.9 181.8,164.9 164.9,147.9 164.9,123.9 181.8,106.9 205.8,106.9 222.8,123.9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="239.8,164.9 222.8,181.8 205.8,164.9 222.8,147.9" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="222.8,205.8 205.8,222.8 181.8,222.8 164.9,205.8 164.9,181.8 181.8,164.9 205.8,164.9 222.8,181.8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="239.8,222.8 222.8,239.8 205.8,222.8 222.8,205.8" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="280.7,-25.9 263.8,-9 239.8,-9 222.8,-25.9 222.8,-49.9 239.8,-66.9 263.8,-66.9 280.7,-49.9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="297.7,-9 280.7,8 263.8,-9 280.7,-25.9" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="280.7,32 263.8,49 239.8,49 222.8,32 222.8,8 239.8,-9 263.8,-9 280.7,8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="297.7,49 280.7,65.9 263.8,49 280.7,32" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="280.7,89.9 263.8,106.9 239.8,106.9 222.8,89.9 222.8,65.9 239.8,49 263.8,49 280.7,65.9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="297.7,106.9 280.7,123.9 263.8,106.9 280.7,89.9" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="280.7,147.9 263.8,164.9 239.8,164.9 222.8,147.9 222.8,123.9 239.8,106.9 263.8,106.9 280.7,123.9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="297.7,164.9 280.7,181.8 263.8,164.9 280.7,147.9" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="280.7,205.8 263.8,222.8 239.8,222.8 222.8,205.8 222.8,181.8 239.8,164.9 263.8,164.9 280.7,181.8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="297.7,222.8 280.7,239.8 263.8,222.8 280.7,205.8" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  </g>
  <rect x="10" y="10" width="190" height="130" fill="none" stroke="currentColor" stroke-width="1"/>
  <clipPath id="tcir"><rect x="230" y="10" width="190" height="130"/></clipPath>
  <g clip-path="url(#tcir)">
  <circle cx="210" cy="-10" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="210" cy="20" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="210" cy="50" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="210" cy="80" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="210" cy="110" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="210" cy="140" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="210" cy="170" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="240" cy="-10" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="240" cy="20" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="240" cy="50" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="240" cy="80" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="240" cy="110" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="240" cy="140" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="240" cy="170" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="270" cy="-10" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="270" cy="20" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="270" cy="50" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="270" cy="80" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="270" cy="110" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="270" cy="140" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="270" cy="170" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="300" cy="-10" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="300" cy="20" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="300" cy="50" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="300" cy="80" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="300" cy="110" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="300" cy="140" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="300" cy="170" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="330" cy="-10" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="330" cy="20" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="330" cy="50" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="330" cy="80" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="330" cy="110" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="330" cy="140" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="330" cy="170" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="360" cy="-10" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="360" cy="20" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="360" cy="50" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="360" cy="80" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="360" cy="110" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="360" cy="140" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="360" cy="170" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="390" cy="-10" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="390" cy="20" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="390" cy="50" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="390" cy="80" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="390" cy="110" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="390" cy="140" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="390" cy="170" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="420" cy="-10" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="420" cy="20" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="420" cy="50" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="420" cy="80" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="420" cy="110" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="420" cy="140" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="420" cy="170" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="450" cy="-10" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="450" cy="20" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="450" cy="50" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="450" cy="80" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="450" cy="110" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="450" cy="140" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="450" cy="170" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  </g>
  <rect x="230" y="10" width="190" height="130" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="105" y="160" font-size="13" text-anchor="middle" fill="currentColor">octagons and squares together</text>
  <text x="325" y="160" font-size="13" text-anchor="middle" fill="currentColor">circles leave gaps</text>
</svg>
</div>

At each point, **2 octagon corners and 1 square corner** meet. The gap that two octagons leave is exactly the size of
a square corner, so little squares fill the gaps perfectly. You may have seen this pattern on a kitchen floor.

Circles, on the other hand, can never tile. However you pack them, they leave curved gaps (on the right), because a
circle has no corners and no straight sides to press against its neighbours.

### Any triangle tiles, and any four-sided shape tiles

Here is something surprising. You do not need a regular shape to tile. **Every** triangle tiles, even a lopsided one.
And **every** four-sided shape tiles, even a strange one (as long as its sides do not cross).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 190" role="img" aria-label="Left: a floor tiled with copies of one uneven triangle, every second copy turned upside down. Right: a floor tiled with copies of one uneven four-sided shape, every second copy given a half turn">
  <clipPath id="tany"><rect x="10" y="10" width="200" height="150"/></clipPath>
  <g clip-path="url(#tany)">
  <polygon points="-315,305 -265,305 -300,270" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-265,305 -300,270 -250,270" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-300,270 -250,270 -285,235" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-250,270 -285,235 -235,235" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-285,235 -235,235 -270,200" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-235,235 -270,200 -220,200" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-270,200 -220,200 -255,165" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-220,200 -255,165 -205,165" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-255,165 -205,165 -240,130" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-205,165 -240,130 -190,130" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-240,130 -190,130 -225,95" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-190,130 -225,95 -175,95" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-225,95 -175,95 -210,60" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-175,95 -210,60 -160,60" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-210,60 -160,60 -195,25" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-160,60 -195,25 -145,25" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-195,25 -145,25 -180,-10" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-145,25 -180,-10 -130,-10" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-180,-10 -130,-10 -165,-45" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-130,-10 -165,-45 -115,-45" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-165,-45 -115,-45 -150,-80" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-115,-45 -150,-80 -100,-80" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-265,305 -215,305 -250,270" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-215,305 -250,270 -200,270" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-250,270 -200,270 -235,235" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-200,270 -235,235 -185,235" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-235,235 -185,235 -220,200" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-185,235 -220,200 -170,200" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-220,200 -170,200 -205,165" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-170,200 -205,165 -155,165" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-205,165 -155,165 -190,130" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-155,165 -190,130 -140,130" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-190,130 -140,130 -175,95" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-140,130 -175,95 -125,95" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-175,95 -125,95 -160,60" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-125,95 -160,60 -110,60" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-160,60 -110,60 -145,25" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-110,60 -145,25 -95,25" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-145,25 -95,25 -130,-10" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-95,25 -130,-10 -80,-10" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-130,-10 -80,-10 -115,-45" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-80,-10 -115,-45 -65,-45" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-115,-45 -65,-45 -100,-80" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-65,-45 -100,-80 -50,-80" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-215,305 -165,305 -200,270" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-165,305 -200,270 -150,270" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-200,270 -150,270 -185,235" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-150,270 -185,235 -135,235" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-185,235 -135,235 -170,200" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-135,235 -170,200 -120,200" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-170,200 -120,200 -155,165" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-120,200 -155,165 -105,165" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-155,165 -105,165 -140,130" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-105,165 -140,130 -90,130" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-140,130 -90,130 -125,95" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-90,130 -125,95 -75,95" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-125,95 -75,95 -110,60" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-75,95 -110,60 -60,60" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-110,60 -60,60 -95,25" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-60,60 -95,25 -45,25" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-95,25 -45,25 -80,-10" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-45,25 -80,-10 -30,-10" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-80,-10 -30,-10 -65,-45" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-30,-10 -65,-45 -15,-45" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-65,-45 -15,-45 -50,-80" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-15,-45 -50,-80 0,-80" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-165,305 -115,305 -150,270" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-115,305 -150,270 -100,270" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-150,270 -100,270 -135,235" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-100,270 -135,235 -85,235" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-135,235 -85,235 -120,200" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-85,235 -120,200 -70,200" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-120,200 -70,200 -105,165" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-70,200 -105,165 -55,165" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-105,165 -55,165 -90,130" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-55,165 -90,130 -40,130" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-90,130 -40,130 -75,95" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-40,130 -75,95 -25,95" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-75,95 -25,95 -60,60" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-25,95 -60,60 -10,60" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-60,60 -10,60 -45,25" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-10,60 -45,25 5,25" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-45,25 5,25 -30,-10" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="5,25 -30,-10 20,-10" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-30,-10 20,-10 -15,-45" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="20,-10 -15,-45 35,-45" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-15,-45 35,-45 0,-80" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="35,-45 0,-80 50,-80" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-115,305 -65,305 -100,270" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-65,305 -100,270 -50,270" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-100,270 -50,270 -85,235" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-50,270 -85,235 -35,235" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-85,235 -35,235 -70,200" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-35,235 -70,200 -20,200" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-70,200 -20,200 -55,165" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-20,200 -55,165 -5,165" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-55,165 -5,165 -40,130" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-5,165 -40,130 10,130" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-40,130 10,130 -25,95" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="10,130 -25,95 25,95" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-25,95 25,95 -10,60" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="25,95 -10,60 40,60" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-10,60 40,60 5,25" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="40,60 5,25 55,25" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="5,25 55,25 20,-10" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="55,25 20,-10 70,-10" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="20,-10 70,-10 35,-45" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="70,-10 35,-45 85,-45" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="35,-45 85,-45 50,-80" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="85,-45 50,-80 100,-80" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-65,305 -15,305 -50,270" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-15,305 -50,270 0,270" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-50,270 0,270 -35,235" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="0,270 -35,235 15,235" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-35,235 15,235 -20,200" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="15,235 -20,200 30,200" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-20,200 30,200 -5,165" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="30,200 -5,165 45,165" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-5,165 45,165 10,130" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="45,165 10,130 60,130" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="10,130 60,130 25,95" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="60,130 25,95 75,95" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="25,95 75,95 40,60" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="75,95 40,60 90,60" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="40,60 90,60 55,25" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="90,60 55,25 105,25" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="55,25 105,25 70,-10" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="105,25 70,-10 120,-10" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="70,-10 120,-10 85,-45" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="120,-10 85,-45 135,-45" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="85,-45 135,-45 100,-80" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="135,-45 100,-80 150,-80" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-15,305 35,305 0,270" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="35,305 0,270 50,270" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="0,270 50,270 15,235" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="50,270 15,235 65,235" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="15,235 65,235 30,200" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="65,235 30,200 80,200" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="30,200 80,200 45,165" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="80,200 45,165 95,165" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="45,165 95,165 60,130" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="95,165 60,130 110,130" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="60,130 110,130 75,95" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="110,130 75,95 125,95" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="75,95 125,95 90,60" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="125,95 90,60 140,60" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="90,60 140,60 105,25" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="140,60 105,25 155,25" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="105,25 155,25 120,-10" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="155,25 120,-10 170,-10" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="120,-10 170,-10 135,-45" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="170,-10 135,-45 185,-45" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="135,-45 185,-45 150,-80" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="185,-45 150,-80 200,-80" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="35,305 85,305 50,270" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="85,305 50,270 100,270" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="50,270 100,270 65,235" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="100,270 65,235 115,235" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="65,235 115,235 80,200" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="115,235 80,200 130,200" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="80,200 130,200 95,165" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="130,200 95,165 145,165" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="95,165 145,165 110,130" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="145,165 110,130 160,130" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="110,130 160,130 125,95" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="160,130 125,95 175,95" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="125,95 175,95 140,60" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="175,95 140,60 190,60" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="140,60 190,60 155,25" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="190,60 155,25 205,25" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="155,25 205,25 170,-10" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="205,25 170,-10 220,-10" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="170,-10 220,-10 185,-45" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="220,-10 185,-45 235,-45" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="185,-45 235,-45 200,-80" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="235,-45 200,-80 250,-80" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="85,305 135,305 100,270" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="135,305 100,270 150,270" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="100,270 150,270 115,235" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="150,270 115,235 165,235" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="115,235 165,235 130,200" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="165,235 130,200 180,200" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="130,200 180,200 145,165" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="180,200 145,165 195,165" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="145,165 195,165 160,130" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="195,165 160,130 210,130" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="160,130 210,130 175,95" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="210,130 175,95 225,95" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="175,95 225,95 190,60" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="225,95 190,60 240,60" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="190,60 240,60 205,25" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="240,60 205,25 255,25" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="205,25 255,25 220,-10" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="255,25 220,-10 270,-10" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="220,-10 270,-10 235,-45" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="270,-10 235,-45 285,-45" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="235,-45 285,-45 250,-80" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="285,-45 250,-80 300,-80" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="135,305 185,305 150,270" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="185,305 150,270 200,270" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="150,270 200,270 165,235" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="200,270 165,235 215,235" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="165,235 215,235 180,200" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="215,235 180,200 230,200" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="180,200 230,200 195,165" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="230,200 195,165 245,165" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="195,165 245,165 210,130" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="245,165 210,130 260,130" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="210,130 260,130 225,95" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="260,130 225,95 275,95" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="225,95 275,95 240,60" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="275,95 240,60 290,60" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="240,60 290,60 255,25" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="290,60 255,25 305,25" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="255,25 305,25 270,-10" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="305,25 270,-10 320,-10" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="270,-10 320,-10 285,-45" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="320,-10 285,-45 335,-45" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="285,-45 335,-45 300,-80" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="335,-45 300,-80 350,-80" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="185,305 235,305 200,270" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="235,305 200,270 250,270" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="200,270 250,270 215,235" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="250,270 215,235 265,235" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="215,235 265,235 230,200" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="265,235 230,200 280,200" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="230,200 280,200 245,165" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="280,200 245,165 295,165" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="245,165 295,165 260,130" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="295,165 260,130 310,130" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="260,130 310,130 275,95" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="310,130 275,95 325,95" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="275,95 325,95 290,60" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="325,95 290,60 340,60" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="290,60 340,60 305,25" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="340,60 305,25 355,25" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="305,25 355,25 320,-10" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="355,25 320,-10 370,-10" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="320,-10 370,-10 335,-45" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="370,-10 335,-45 385,-45" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="335,-45 385,-45 350,-80" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="385,-45 350,-80 400,-80" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  </g>
  <rect x="10" y="10" width="200" height="150" fill="none" stroke="currentColor" stroke-width="1"/>
  <clipPath id="tquad"><rect x="230" y="10" width="200" height="150"/></clipPath>
  <g clip-path="url(#tquad)">
  <polygon points="298,-320 350,-310 338,-276 302,-294" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="390,-266 338,-276 350,-310 386,-292" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="250,-304 302,-294 290,-260 254,-278" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="342,-250 290,-260 302,-294 338,-276" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="202,-288 254,-278 242,-244 206,-262" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="294,-234 242,-244 254,-278 290,-260" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="154,-272 206,-262 194,-228 158,-246" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="246,-218 194,-228 206,-262 242,-244" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="106,-256 158,-246 146,-212 110,-230" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="198,-202 146,-212 158,-246 194,-228" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="58,-240 110,-230 98,-196 62,-214" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="150,-186 98,-196 110,-230 146,-212" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="10,-224 62,-214 50,-180 14,-198" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="102,-170 50,-180 62,-214 98,-196" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-38,-208 14,-198 2,-164 -34,-182" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="54,-154 2,-164 14,-198 50,-180" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-86,-192 -34,-182 -46,-148 -82,-166" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="6,-138 -46,-148 -34,-182 2,-164" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-134,-176 -82,-166 -94,-132 -130,-150" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-42,-122 -94,-132 -82,-166 -46,-148" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-182,-160 -130,-150 -142,-116 -178,-134" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-90,-106 -142,-116 -130,-150 -94,-132" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-230,-144 -178,-134 -190,-100 -226,-118" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-138,-90 -190,-100 -178,-134 -142,-116" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-278,-128 -226,-118 -238,-84 -274,-102" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-186,-74 -238,-84 -226,-118 -190,-100" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="338,-276 390,-266 378,-232 342,-250" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="430,-222 378,-232 390,-266 426,-248" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="290,-260 342,-250 330,-216 294,-234" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="382,-206 330,-216 342,-250 378,-232" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="242,-244 294,-234 282,-200 246,-218" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="334,-190 282,-200 294,-234 330,-216" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="194,-228 246,-218 234,-184 198,-202" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="286,-174 234,-184 246,-218 282,-200" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="146,-212 198,-202 186,-168 150,-186" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="238,-158 186,-168 198,-202 234,-184" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="98,-196 150,-186 138,-152 102,-170" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="190,-142 138,-152 150,-186 186,-168" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="50,-180 102,-170 90,-136 54,-154" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="142,-126 90,-136 102,-170 138,-152" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="2,-164 54,-154 42,-120 6,-138" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="94,-110 42,-120 54,-154 90,-136" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-46,-148 6,-138 -6,-104 -42,-122" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="46,-94 -6,-104 6,-138 42,-120" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-94,-132 -42,-122 -54,-88 -90,-106" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-2,-78 -54,-88 -42,-122 -6,-104" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-142,-116 -90,-106 -102,-72 -138,-90" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-50,-62 -102,-72 -90,-106 -54,-88" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-190,-100 -138,-90 -150,-56 -186,-74" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-98,-46 -150,-56 -138,-90 -102,-72" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-238,-84 -186,-74 -198,-40 -234,-58" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-146,-30 -198,-40 -186,-74 -150,-56" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="378,-232 430,-222 418,-188 382,-206" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="470,-178 418,-188 430,-222 466,-204" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="330,-216 382,-206 370,-172 334,-190" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="422,-162 370,-172 382,-206 418,-188" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="282,-200 334,-190 322,-156 286,-174" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="374,-146 322,-156 334,-190 370,-172" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="234,-184 286,-174 274,-140 238,-158" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="326,-130 274,-140 286,-174 322,-156" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="186,-168 238,-158 226,-124 190,-142" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="278,-114 226,-124 238,-158 274,-140" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="138,-152 190,-142 178,-108 142,-126" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="230,-98 178,-108 190,-142 226,-124" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="90,-136 142,-126 130,-92 94,-110" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="182,-82 130,-92 142,-126 178,-108" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="42,-120 94,-110 82,-76 46,-94" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="134,-66 82,-76 94,-110 130,-92" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-6,-104 46,-94 34,-60 -2,-78" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="86,-50 34,-60 46,-94 82,-76" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-54,-88 -2,-78 -14,-44 -50,-62" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="38,-34 -14,-44 -2,-78 34,-60" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-102,-72 -50,-62 -62,-28 -98,-46" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-10,-18 -62,-28 -50,-62 -14,-44" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-150,-56 -98,-46 -110,-12 -146,-30" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-58,-2 -110,-12 -98,-46 -62,-28" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-198,-40 -146,-30 -158,4 -194,-14" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-106,14 -158,4 -146,-30 -110,-12" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="418,-188 470,-178 458,-144 422,-162" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="510,-134 458,-144 470,-178 506,-160" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="370,-172 422,-162 410,-128 374,-146" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="462,-118 410,-128 422,-162 458,-144" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="322,-156 374,-146 362,-112 326,-130" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="414,-102 362,-112 374,-146 410,-128" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="274,-140 326,-130 314,-96 278,-114" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="366,-86 314,-96 326,-130 362,-112" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="226,-124 278,-114 266,-80 230,-98" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="318,-70 266,-80 278,-114 314,-96" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="178,-108 230,-98 218,-64 182,-82" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="270,-54 218,-64 230,-98 266,-80" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="130,-92 182,-82 170,-48 134,-66" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="222,-38 170,-48 182,-82 218,-64" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="82,-76 134,-66 122,-32 86,-50" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="174,-22 122,-32 134,-66 170,-48" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="34,-60 86,-50 74,-16 38,-34" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="126,-6 74,-16 86,-50 122,-32" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-14,-44 38,-34 26,0 -10,-18" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="78,10 26,0 38,-34 74,-16" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-62,-28 -10,-18 -22,16 -58,-2" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="30,26 -22,16 -10,-18 26,0" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-110,-12 -58,-2 -70,32 -106,14" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-18,42 -70,32 -58,-2 -22,16" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-158,4 -106,14 -118,48 -154,30" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-66,58 -118,48 -106,14 -70,32" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="458,-144 510,-134 498,-100 462,-118" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="550,-90 498,-100 510,-134 546,-116" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="410,-128 462,-118 450,-84 414,-102" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="502,-74 450,-84 462,-118 498,-100" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="362,-112 414,-102 402,-68 366,-86" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="454,-58 402,-68 414,-102 450,-84" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="314,-96 366,-86 354,-52 318,-70" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="406,-42 354,-52 366,-86 402,-68" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="266,-80 318,-70 306,-36 270,-54" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="358,-26 306,-36 318,-70 354,-52" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="218,-64 270,-54 258,-20 222,-38" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="310,-10 258,-20 270,-54 306,-36" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="170,-48 222,-38 210,-4 174,-22" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="262,6 210,-4 222,-38 258,-20" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="122,-32 174,-22 162,12 126,-6" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="214,22 162,12 174,-22 210,-4" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="74,-16 126,-6 114,28 78,10" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="166,38 114,28 126,-6 162,12" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="26,0 78,10 66,44 30,26" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="118,54 66,44 78,10 114,28" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-22,16 30,26 18,60 -18,42" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="70,70 18,60 30,26 66,44" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-70,32 -18,42 -30,76 -66,58" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="22,86 -30,76 -18,42 18,60" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-118,48 -66,58 -78,92 -114,74" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-26,102 -78,92 -66,58 -30,76" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="498,-100 550,-90 538,-56 502,-74" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="590,-46 538,-56 550,-90 586,-72" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="450,-84 502,-74 490,-40 454,-58" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="542,-30 490,-40 502,-74 538,-56" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="402,-68 454,-58 442,-24 406,-42" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="494,-14 442,-24 454,-58 490,-40" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="354,-52 406,-42 394,-8 358,-26" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="446,2 394,-8 406,-42 442,-24" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="306,-36 358,-26 346,8 310,-10" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="398,18 346,8 358,-26 394,-8" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="258,-20 310,-10 298,24 262,6" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="350,34 298,24 310,-10 346,8" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="210,-4 262,6 250,40 214,22" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="302,50 250,40 262,6 298,24" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="162,12 214,22 202,56 166,38" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="254,66 202,56 214,22 250,40" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="114,28 166,38 154,72 118,54" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="206,82 154,72 166,38 202,56" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="66,44 118,54 106,88 70,70" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="158,98 106,88 118,54 154,72" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="18,60 70,70 58,104 22,86" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="110,114 58,104 70,70 106,88" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-30,76 22,86 10,120 -26,102" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="62,130 10,120 22,86 58,104" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-78,92 -26,102 -38,136 -74,118" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="14,146 -38,136 -26,102 10,120" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="538,-56 590,-46 578,-12 542,-30" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="630,-2 578,-12 590,-46 626,-28" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="490,-40 542,-30 530,4 494,-14" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="582,14 530,4 542,-30 578,-12" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="442,-24 494,-14 482,20 446,2" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="534,30 482,20 494,-14 530,4" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="394,-8 446,2 434,36 398,18" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="486,46 434,36 446,2 482,20" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="346,8 398,18 386,52 350,34" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="438,62 386,52 398,18 434,36" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="298,24 350,34 338,68 302,50" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="390,78 338,68 350,34 386,52" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="250,40 302,50 290,84 254,66" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="342,94 290,84 302,50 338,68" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="202,56 254,66 242,100 206,82" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="294,110 242,100 254,66 290,84" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="154,72 206,82 194,116 158,98" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="246,126 194,116 206,82 242,100" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="106,88 158,98 146,132 110,114" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="198,142 146,132 158,98 194,116" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="58,104 110,114 98,148 62,130" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="150,158 98,148 110,114 146,132" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="10,120 62,130 50,164 14,146" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="102,174 50,164 62,130 98,148" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="-38,136 14,146 2,180 -34,162" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="54,190 2,180 14,146 50,164" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="578,-12 630,-2 618,32 582,14" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="670,42 618,32 630,-2 666,16" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="530,4 582,14 570,48 534,30" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="622,58 570,48 582,14 618,32" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="482,20 534,30 522,64 486,46" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="574,74 522,64 534,30 570,48" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="434,36 486,46 474,80 438,62" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="526,90 474,80 486,46 522,64" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="386,52 438,62 426,96 390,78" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="478,106 426,96 438,62 474,80" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="338,68 390,78 378,112 342,94" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="430,122 378,112 390,78 426,96" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="290,84 342,94 330,128 294,110" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="382,138 330,128 342,94 378,112" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="242,100 294,110 282,144 246,126" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="334,154 282,144 294,110 330,128" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="194,116 246,126 234,160 198,142" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="286,170 234,160 246,126 282,144" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="146,132 198,142 186,176 150,158" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="238,186 186,176 198,142 234,160" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="98,148 150,158 138,192 102,174" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="190,202 138,192 150,158 186,176" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="50,164 102,174 90,208 54,190" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="142,218 90,208 102,174 138,192" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="2,180 54,190 42,224 6,206" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="94,234 42,224 54,190 90,208" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="618,32 670,42 658,76 622,58" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="710,86 658,76 670,42 706,60" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="570,48 622,58 610,92 574,74" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="662,102 610,92 622,58 658,76" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="522,64 574,74 562,108 526,90" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="614,118 562,108 574,74 610,92" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="474,80 526,90 514,124 478,106" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="566,134 514,124 526,90 562,108" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="426,96 478,106 466,140 430,122" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="518,150 466,140 478,106 514,124" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="378,112 430,122 418,156 382,138" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="470,166 418,156 430,122 466,140" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="330,128 382,138 370,172 334,154" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="422,182 370,172 382,138 418,156" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="282,144 334,154 322,188 286,170" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="374,198 322,188 334,154 370,172" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="234,160 286,170 274,204 238,186" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="326,214 274,204 286,170 322,188" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="186,176 238,186 226,220 190,202" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="278,230 226,220 238,186 274,204" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="138,192 190,202 178,236 142,218" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="230,246 178,236 190,202 226,220" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="90,208 142,218 130,252 94,234" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="182,262 130,252 142,218 178,236" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="42,224 94,234 82,268 46,250" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="134,278 82,268 94,234 130,252" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="658,76 710,86 698,120 662,102" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="750,130 698,120 710,86 746,104" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="610,92 662,102 650,136 614,118" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="702,146 650,136 662,102 698,120" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="562,108 614,118 602,152 566,134" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="654,162 602,152 614,118 650,136" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="514,124 566,134 554,168 518,150" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="606,178 554,168 566,134 602,152" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="466,140 518,150 506,184 470,166" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="558,194 506,184 518,150 554,168" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="418,156 470,166 458,200 422,182" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="510,210 458,200 470,166 506,184" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="370,172 422,182 410,216 374,198" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="462,226 410,216 422,182 458,200" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="322,188 374,198 362,232 326,214" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="414,242 362,232 374,198 410,216" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="274,204 326,214 314,248 278,230" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="366,258 314,248 326,214 362,232" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="226,220 278,230 266,264 230,246" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="318,274 266,264 278,230 314,248" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="178,236 230,246 218,280 182,262" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="270,290 218,280 230,246 266,264" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="130,252 182,262 170,296 134,278" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="222,306 170,296 182,262 218,280" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="82,268 134,278 122,312 86,294" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="174,322 122,312 134,278 170,296" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="698,120 750,130 738,164 702,146" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="790,174 738,164 750,130 786,148" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="650,136 702,146 690,180 654,162" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="742,190 690,180 702,146 738,164" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="602,152 654,162 642,196 606,178" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="694,206 642,196 654,162 690,180" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="554,168 606,178 594,212 558,194" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="646,222 594,212 606,178 642,196" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="506,184 558,194 546,228 510,210" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="598,238 546,228 558,194 594,212" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="458,200 510,210 498,244 462,226" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="550,254 498,244 510,210 546,228" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="410,216 462,226 450,260 414,242" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="502,270 450,260 462,226 498,244" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="362,232 414,242 402,276 366,258" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="454,286 402,276 414,242 450,260" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="314,248 366,258 354,292 318,274" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="406,302 354,292 366,258 402,276" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="266,264 318,274 306,308 270,290" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="358,318 306,308 318,274 354,292" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="218,280 270,290 258,324 222,306" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="310,334 258,324 270,290 306,308" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="170,296 222,306 210,340 174,322" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="262,350 210,340 222,306 258,324" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="122,312 174,322 162,356 126,338" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="214,366 162,356 174,322 210,340" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="738,164 790,174 778,208 742,190" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="830,218 778,208 790,174 826,192" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="690,180 742,190 730,224 694,206" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="782,234 730,224 742,190 778,208" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="642,196 694,206 682,240 646,222" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="734,250 682,240 694,206 730,224" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="594,212 646,222 634,256 598,238" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="686,266 634,256 646,222 682,240" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="546,228 598,238 586,272 550,254" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="638,282 586,272 598,238 634,256" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="498,244 550,254 538,288 502,270" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="590,298 538,288 550,254 586,272" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="450,260 502,270 490,304 454,286" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="542,314 490,304 502,270 538,288" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="402,276 454,286 442,320 406,302" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="494,330 442,320 454,286 490,304" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="354,292 406,302 394,336 358,318" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="446,346 394,336 406,302 442,320" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="306,308 358,318 346,352 310,334" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="398,362 346,352 358,318 394,336" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="258,324 310,334 298,368 262,350" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="350,378 298,368 310,334 346,352" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="210,340 262,350 250,384 214,366" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="302,394 250,384 262,350 298,368" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="162,356 214,366 202,400 166,382" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="254,410 202,400 214,366 250,384" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="778,208 830,218 818,252 782,234" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="870,262 818,252 830,218 866,236" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="730,224 782,234 770,268 734,250" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="822,278 770,268 782,234 818,252" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="682,240 734,250 722,284 686,266" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="774,294 722,284 734,250 770,268" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="634,256 686,266 674,300 638,282" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="726,310 674,300 686,266 722,284" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="586,272 638,282 626,316 590,298" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="678,326 626,316 638,282 674,300" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="538,288 590,298 578,332 542,314" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="630,342 578,332 590,298 626,316" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="490,304 542,314 530,348 494,330" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="582,358 530,348 542,314 578,332" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="442,320 494,330 482,364 446,346" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="534,374 482,364 494,330 530,348" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="394,336 446,346 434,380 398,362" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="486,390 434,380 446,346 482,364" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="346,352 398,362 386,396 350,378" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="438,406 386,396 398,362 434,380" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="298,368 350,378 338,412 302,394" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="390,422 338,412 350,378 386,396" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="250,384 302,394 290,428 254,410" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="342,438 290,428 302,394 338,412" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="202,400 254,410 242,444 206,426" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="294,454 242,444 254,410 290,428" fill="#eea66f" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  </g>
  <rect x="230" y="10" width="200" height="150" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="180" font-size="13" text-anchor="middle" fill="currentColor">any triangle</text>
  <text x="330" y="180" font-size="13" text-anchor="middle" fill="currentColor">any four-sided shape</text>
</svg>
</div>

Why? Try this experiment. Cut out a paper triangle, any triangle. Tear off its three corners and put them side by
side, points together. They always make a **straight line**, which is half a turn. So if you put the triangle and a
copy turned upside down together, around each meeting point you get each corner **twice**: two half turns, which
make a whole turn. No gap, no overlap.

Do the same with a four-sided shape: tear off the 4 corners and put them together. They always fill a **full turn**
exactly. So at each meeting point in the tiling, one of each corner fits round the point.

(You will prove these corner facts with real reasons in level 4:
[angles in a triangle](../level-4/03-triangle-angle-sum.md).)

### Tilings in nature and art

Honeybees build their honeycomb from hexagons. In 1999 the mathematician Thomas Hales proved that the hexagon
pattern is the best possible way to divide a flat surface into equal-sized cells while using the least total length
of walls. For a bee, walls are made of wax, and wax is costly to make. So the hexagon is the bee's thrifty choice.

The artist M. C. Escher made famous tilings in which every tile is the shape of a bird, a fish or a lizard. He
started with simple shapes like squares or triangles, cut a bump out of one side and stuck it onto the opposite
side, so the tiles still fitted together perfectly.

And pentagons? **Regular** pentagons cannot tile, but some lopsided pentagons can. Mathematicians have found 15
different kinds, and the 15th was only discovered in 2015. Geometry still has new things to discover!

## Worked examples

**Example 1. How many corners meet?** In a tiling of regular hexagons, how many hexagons meet at each corner point?

1. Each hexagon corner is a third of a full turn (2 triangle corners, and 6 triangle corners make a full turn).
2. Three thirds make a whole.
3. So **3** hexagons meet at each point. Look at a honeycomb: every corner is where 3 cells meet, like the letter Y.

**Example 2. Does a rectangle tile?** Does a rectangle (like a brick) tile a floor?

1. All 4 corners of a rectangle are square corners.
2. 4 square corners fill a full turn.
3. So rectangles fit 4 to a point, in rows, like a brick wall or a sheet of stamps. **Yes**, they tile. (They can
   also tile in a brick pattern, where the rows are shifted.)

**Example 3. Mixing triangles and squares.** Can equilateral triangles and squares (with the same side length) fit
together round one point?

1. A triangle corner is a sixth of a turn. A square corner is a quarter of a turn.
2. Try 3 triangles and 2 squares: 3 sixths is a half, and 2 quarters is a half. A half and a half make a whole!
3. So **yes**: 3 triangles and 2 squares fit exactly round a point. Floors are really made like this: a row of
   squares, then a row of triangles, then a row of squares, and so on.

## Try it

1. How many squares meet at each corner point of a square tiling?
2. How many equilateral triangles meet at each corner point?
3. Does a regular pentagon tile? Give the reason in one sentence.
4. Can a regular octagon tile all by itself? What helper shape makes it work?
5. Could a floor be tiled with copies of one lopsided triangle? How?
6. 2 regular hexagons meet at a point. Two of their corners fill two thirds of a full turn. Which **one** shape's
   corner fills the last third? (Hint: a hexagon corner is a third of a turn.)
7. Would circles make a good floor tile? Why not?
8. A floor uses equilateral triangles and regular hexagons. At one point, 2 hexagon corners meet. How many triangle
   corners fill the rest?

??? note "Answers"
    1. **4**. Each square corner is a quarter of a full turn, and 4 quarters make a whole turn.
    2. **6**. Each corner of an equilateral triangle is a sixth of a full turn.
    3. **No.** Three pentagon corners leave a gap (each is narrower than a hexagon corner) and four overlap (each is
       wider than a square corner), and there is no number between 3 and 4.
    4. **No**, not by itself: 2 octagon corners leave a gap and 3 overlap. With **squares** as helpers it works: 2
       octagons and 1 square meet at each point.
    5. **Yes.** Put the triangle next to a copy turned upside down (half a turn): together they make a slanted
       four-sided shape. Rows of those fill the floor. At each meeting point the corners fit exactly, because the
       three corners of a triangle make a straight line, and each appears twice.
    6. **Another hexagon.** Its corner is a third of a turn, which is exactly what is left. (That is why 3 hexagons
       meet at every point.) Two triangle corners also fill a third, so 2 triangles work too.
    7. **No.** Circles leave curved gaps between them, however you pack them, because they have no straight sides
       to fit against each other.
    8. 2 hexagon corners fill two thirds of a turn. The rest is one third. A triangle corner is a sixth, and 2 sixths
       make a third. So **2** triangle corners. (This makes a real tiling: around every point, hexagon, triangle,
       hexagon, triangle, taking turns.)

## Common mistake

**Thinking any regular shape will tile if you try hard enough.** Regular pentagons, heptagons and octagons never
tile on their own. It is not a matter of trying harder: the corners simply do not add up to a full turn.

**Thinking only regular shapes tile.** The opposite surprise: every triangle and every four-sided shape tiles, even
lopsided ones. Regular is not needed. What is needed is that the corners meeting at each point add up to exactly
one full turn.

## Where it leads

- Previous lesson: [Nets: unfolding a cube](04-nets-of-a-cube.md).
- Next lesson: [Slides, flips and turns](06-slides-flips-turns.md): the moves that carry one tile onto the next.
- This level: [Level 2: Shapes all around](index.md). The whole topic: [Geometry](../index.md).
- Fitting pieces with no gaps started with [Tangrams](../level-1/05-tangram-pictures.md).
- Corners are measured in **degrees** in [level 3](../level-3/02-measuring-angles.md), and in
  [level 4](../level-4/05-polygon-angles.md) you will prove why a hexagon tiles
  and a pentagon does not, with numbers.
- How much floor a tile covers is its **area**: [Measurement](../../measurement/index.md).
- A tiling is a pattern that repeats in two directions: [Patterns](../../patterns/index.md).
