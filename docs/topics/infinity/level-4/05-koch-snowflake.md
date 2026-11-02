---
title: "The Koch snowflake"
---

# The Koch snowflake

*Infinity and strange math · level 4, lesson 5 of 6*

## A question to start

Can a shape have an edge that is **infinitely long** but enclose only a **finite** amount of area: a shape you could
draw on a sheet of paper, colour in with a normal amount of ink, but never walk all the way around?

It sounds impossible. Surely a longer and longer fence must hold in more and more field. But in 1904 the Swedish
mathematician Helge von Koch described exactly such a shape. Today it is called the **Koch snowflake**.

## The idea

### One rule, repeated

Start (step 0) with an equilateral triangle. Then, at every step, do this to **every** straight edge:

1. Cut the edge into three equal thirds.
2. On the middle third, build a small equilateral triangle pointing **outwards**.
3. Remove the middle third itself (the base of the small triangle).

So every edge turns into a little "tent" made of 4 pieces, each a third as long as the old edge.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 120" role="img" aria-label="One edge of the snowflake cut in thirds: the middle third is removed and replaced by two sides of a small orange triangle, so 3 pieces become 4 pieces of the same length">
  <line x1="20" y1="90" x2="110.0" y2="90" stroke="currentColor" stroke-width="2.5"/>
  <line x1="110.0" y1="90" x2="200.0" y2="90" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="200.0" y1="90" x2="290" y2="90" stroke="currentColor" stroke-width="2.5"/>
  <polygon points="110.0,90 155.0,12.1 200.0,90" fill="#eea66f" fill-opacity="0.5" stroke="none"/>
  <polyline points="110.0,90 155.0,12.1 200.0,90" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <text x="65" y="108" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <text x="155" y="108" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <text x="335" y="108" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <text x="123.5" y="45.0289" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <text x="186.5" y="45.0289" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <text x="155" y="108" font-size="11" text-anchor="middle" fill="currentColor">removed</text>
  <text x="330" y="50" font-size="12" text-anchor="start" fill="currentColor">3 thirds become</text>
  <text x="330" y="68" font-size="12" text-anchor="start" fill="currentColor">4 thirds:</text>
  <text x="330" y="86" font-size="12" text-anchor="start" fill="currentColor">the edge grows</text>
  <text x="330" y="104" font-size="12" text-anchor="start" fill="currentColor">by 4/3</text>
</svg>
</div>

Step 1 turns the triangle into a six-pointed star. Step 2 puts tents on all 12 edges of the star. And so on, forever.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 482 190" role="img" aria-label="The Koch snowflake at steps 0 to 3: a triangle, then a six-pointed star, then shapes with more and more smaller spikes on every edge">
  <polygon points="10.0,126.6 60.0,40.0 110.0,126.6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="60" y="171.603" font-size="11" text-anchor="middle" fill="currentColor">step 0</text>
  <polygon points="128.0,126.6 144.7,97.7 128.0,68.9 161.3,68.9 178.0,40.0 194.7,68.9 228.0,68.9 211.3,97.7 228.0,126.6 194.7,126.6 178.0,155.5 161.3,126.6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="178" y="171.603" font-size="11" text-anchor="middle" fill="currentColor">step 1</text>
  <polygon points="246.0,126.6 251.6,117.0 246.0,107.4 257.1,107.4 262.7,97.7 257.1,88.1 246.0,88.1 251.6,78.5 246.0,68.9 257.1,68.9 262.7,59.2 268.2,68.9 279.3,68.9 284.9,59.2 279.3,49.6 290.4,49.6 296.0,40.0 301.6,49.6 312.7,49.6 307.1,59.2 312.7,68.9 323.8,68.9 329.3,59.2 334.9,68.9 346.0,68.9 340.4,78.5 346.0,88.1 334.9,88.1 329.3,97.7 334.9,107.4 346.0,107.4 340.4,117.0 346.0,126.6 334.9,126.6 329.3,136.2 323.8,126.6 312.7,126.6 307.1,136.2 312.7,145.8 301.6,145.8 296.0,155.5 290.4,145.8 279.3,145.8 284.9,136.2 279.3,126.6 268.2,126.6 262.7,136.2 257.1,126.6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="296" y="171.603" font-size="11" text-anchor="middle" fill="currentColor">step 2</text>
  <polygon points="364.0,126.6 365.9,123.4 364.0,120.2 367.7,120.2 369.6,117.0 367.7,113.8 364.0,113.8 365.9,110.6 364.0,107.4 367.7,107.4 369.6,104.2 371.4,107.4 375.1,107.4 377.0,104.2 375.1,100.9 378.8,100.9 380.7,97.7 378.8,94.5 375.1,94.5 377.0,91.3 375.1,88.1 371.4,88.1 369.6,91.3 367.7,88.1 364.0,88.1 365.9,84.9 364.0,81.7 367.7,81.7 369.6,78.5 367.7,75.3 364.0,75.3 365.9,72.1 364.0,68.9 367.7,68.9 369.6,65.7 371.4,68.9 375.1,68.9 377.0,65.7 375.1,62.5 378.8,62.5 380.7,59.2 382.5,62.5 386.2,62.5 384.4,65.7 386.2,68.9 389.9,68.9 391.8,65.7 393.6,68.9 397.3,68.9 399.2,65.7 397.3,62.5 401.0,62.5 402.9,59.2 401.0,56.0 397.3,56.0 399.2,52.8 397.3,49.6 401.0,49.6 402.9,46.4 404.7,49.6 408.4,49.6 410.3,46.4 408.4,43.2 412.1,43.2 414.0,40.0 415.9,43.2 419.6,43.2 417.7,46.4 419.6,49.6 423.3,49.6 425.1,46.4 427.0,49.6 430.7,49.6 428.8,52.8 430.7,56.0 427.0,56.0 425.1,59.2 427.0,62.5 430.7,62.5 428.8,65.7 430.7,68.9 434.4,68.9 436.2,65.7 438.1,68.9 441.8,68.9 443.6,65.7 441.8,62.5 445.5,62.5 447.3,59.2 449.2,62.5 452.9,62.5 451.0,65.7 452.9,68.9 456.6,68.9 458.4,65.7 460.3,68.9 464.0,68.9 462.1,72.1 464.0,75.3 460.3,75.3 458.4,78.5 460.3,81.7 464.0,81.7 462.1,84.9 464.0,88.1 460.3,88.1 458.4,91.3 456.6,88.1 452.9,88.1 451.0,91.3 452.9,94.5 449.2,94.5 447.3,97.7 449.2,100.9 452.9,100.9 451.0,104.2 452.9,107.4 456.6,107.4 458.4,104.2 460.3,107.4 464.0,107.4 462.1,110.6 464.0,113.8 460.3,113.8 458.4,117.0 460.3,120.2 464.0,120.2 462.1,123.4 464.0,126.6 460.3,126.6 458.4,129.8 456.6,126.6 452.9,126.6 451.0,129.8 452.9,133.0 449.2,133.0 447.3,136.2 445.5,133.0 441.8,133.0 443.6,129.8 441.8,126.6 438.1,126.6 436.2,129.8 434.4,126.6 430.7,126.6 428.8,129.8 430.7,133.0 427.0,133.0 425.1,136.2 427.0,139.4 430.7,139.4 428.8,142.6 430.7,145.8 427.0,145.8 425.1,149.1 423.3,145.8 419.6,145.8 417.7,149.1 419.6,152.3 415.9,152.3 414.0,155.5 412.1,152.3 408.4,152.3 410.3,149.1 408.4,145.8 404.7,145.8 402.9,149.1 401.0,145.8 397.3,145.8 399.2,142.6 397.3,139.4 401.0,139.4 402.9,136.2 401.0,133.0 397.3,133.0 399.2,129.8 397.3,126.6 393.6,126.6 391.8,129.8 389.9,126.6 386.2,126.6 384.4,129.8 386.2,133.0 382.5,133.0 380.7,136.2 378.8,133.0 375.1,133.0 377.0,129.8 375.1,126.6 371.4,126.6 369.6,129.8 367.7,126.6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="414" y="171.603" font-size="11" text-anchor="middle" fill="currentColor">step 3</text>
</svg>
</div>

The shape after infinitely many steps is the Koch snowflake. Like the Sierpinski triangle, it is a **fractal**: zoom in
on any piece of the edge, and you see the same tent-on-tent pattern again.

### Counting the edges

Every edge becomes 4 edges, so the number of edges is multiplied by 4 at every step. The triangle has 3 edges, so:

| Step | 0 | 1 | 2 | 3 | 4 | $n$ |
| --- | --- | --- | --- | --- | --- | --- |
| Number of edges | 3 | 12 | 48 | 192 | 768 | $3 \times 4^n$ |
| Length of each (start 1) | 1 | $\frac13$ | $\frac19$ | $\frac1{27}$ | $\frac1{81}$ | $\frac1{3^n}$ |

### The perimeter grows without limit

The **perimeter** is the total length of the edge all the way round. Each step replaces each edge (3 thirds long) by 4
pieces each a third long. So each edge becomes $\frac43$ times as long, and therefore the whole perimeter is
multiplied by $\frac43$ at every step.

With starting side 1, the perimeter starts at 3:

| Step | 0 | 1 | 2 | 3 | 4 | 5 | 13 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Perimeter | 3 | 4 | $\frac{16}3 \approx 5.33$ | $\frac{64}9 \approx 7.11$ | $\approx 9.48$ | $\approx 12.64$ | $\approx 126.3$ |

After $n$ steps, the perimeter is $3 \times \left(\frac43\right)^n$. Multiplying by $\frac43$ means adding a third of
what you have. Each step adds at least a third of 3, which is 1 (the perimeter never goes below 3). So after 100 steps
the perimeter is more than $3 + 100 = 103$; after a million steps more than a million. It grows past every number. The
finished snowflake has an **infinitely long** edge.

(That "add at least 1 each step" argument is a safe lower bound. The real growth is much faster, because each step adds
a third of the **current** perimeter, which keeps getting bigger.)

### The area stays finite

Now the area. Look at the snowflake: however many tents you add, it never spreads beyond a certain circle around the
starting triangle. Each new tent is much smaller than the last, tucked against the edge. So the area cannot grow past
the area of that circle. It must settle down. But to what?

Call the area of the starting triangle $A$. A triangle with sides one third as long has $\frac19$ of the area (thirding
the sides divides the area by $3 \times 3 = 9$).

- **Step 1** adds 3 small triangles (one on each edge), each with sides $\frac13$ as long: each has area $\frac A9$.
  Added: $3 \times \frac A9 = \frac A3$.
- **Step 2** adds 12 triangles (one on each of the 12 edges), each with sides $\frac19$ as long, so area
  $\frac A{81}$. Added: $12 \times \frac A{81} = \frac{4A}{27}$.
- **Step 3** adds 48 triangles, each of area $\frac A{729}$. Added: $\frac{48A}{729} = \frac{16A}{243}$.

Compare each amount added with the one before: $\frac{4A}{27} \div \frac A3 = \frac49$, and
$\frac{16A}{243} \div \frac{4A}{27} = \frac49$. Each step adds $\frac49$ of what the step before added. **Why $\frac49$?**
There are 4 times as many new triangles, but each has $\frac19$ of the area of the triangles in the step before.

So the total area is

$$A + \frac A3\left(1 + \frac49 + \left(\frac49\right)^2 + \left(\frac49\right)^3 + \cdots\right).$$

### Adding up the bracket

Call the bracket $S$:

$$S = 1 + \frac49 + \left(\frac49\right)^2 + \left(\frac49\right)^3 + \cdots$$

Use the multiply trick from lesson 1. Multiply by $\frac49$: every piece moves along one place, so
$\frac49 S = \frac49 + \left(\frac49\right)^2 + \cdots$, which is $S$ without its first piece 1. So
$\frac49 S = S - 1$, which gives $\frac59 S = 1$ and $S = \frac95$. (The trick is safe here: the pieces shrink by the
factor $\frac49$ each step, faster even than halving, and we already know the area cannot grow past the circle.)

So the total area is

$$A + \frac A3 \times \frac95 = A + \frac{3A}5 = \frac{8A}5.$$

The finished snowflake has area exactly $\frac85$ of the starting triangle: 1.6 times as much. The edge grows forever,
but the area only grows by 60 percent.

### How can both be true?

The tents get smaller very fast. Each step, the new tents together add $\frac49$ as much area as the last lot: a
shrinking amount that adds up to a finite total. But the edge pieces shrink to a third while their number grows four
times, so the length added grows each step. Length and area react differently to shrinking: shrink a shape by a third
and its edges are divided by 3, but its area by 9.

### Coastlines

Something like this happens with real coastlines. Measure a rocky coast with a 1 km ruler and you skip every little
bay. Use a 1 m ruler and you follow the bays, rocks and inlets, and the measured length gets longer. A shorter ruler
finds more wiggles. In 1967 Mandelbrot wrote a famous paper about this, "How long is the coast of Britain?" Real
coastlines stop wiggling at the size of grains of sand, so they are not infinitely long; but over a wide range of
ruler sizes they behave like a Koch curve.

## Worked examples

**1. Perimeter at step 3.** Starting side 1, find the perimeter after 3 steps.

- Edges: $3 \times 4^3 = 192$. Length of each: $\frac1{27}$.
- Perimeter: $192 \times \frac1{27} = \frac{192}{27} = \frac{64}9 \approx 7.11$.
- Check with the rule: $3 \times \left(\frac43\right)^3 = 3 \times \frac{64}{27} = \frac{64}9$. ✓

**2. When does the perimeter pass 10?** Starting side 1.

- Step 4: $3 \times \frac{256}{81} = \frac{256}{27} \approx 9.48$. Not yet.
- Step 5: $\frac{256}{27} \times \frac43 = \frac{1024}{81} \approx 12.64$. Past 10.
- So step 5 is the first to pass 10.

**3. Area after 2 steps.** With starting area $A$:

$A + \frac A3 + \frac{4A}{27} = \frac{27A}{27} + \frac{9A}{27} + \frac{4A}{27} = \frac{40A}{27}$, about $1.48A$.
Already most of the way to $1.6A$.

**4. A real size.** The starting triangle has area 9 square centimetres. What is the snowflake's final area?

$\frac85 \times 9 = \frac{72}5 = 14.4$ square centimetres. The edge, meanwhile, is infinitely long.

## Try it

1. How many edges does the snowflake have after 5 steps?
2. Starting side 3 cm, what is the perimeter at step 0, step 1 and step 2?
3. With starting area $A$, how much area does step 4 add? (Use the factor $\frac49$.)
4. Starting side 1, at which step does the perimeter first pass 100? (Use the table, or keep multiplying by $\frac43$.)
5. The starting triangle has area 25 square centimetres. What is the final area of the snowflake?
6. **Anti-snowflake:** do the same, but build each tent pointing **inwards**, cutting into the shape instead of out.
   Does the perimeter still grow the same way? What happens to the area? (Hint: each step **removes** the same amounts
   that the snowflake adds.)
7. (Harder) Using the "copies" idea from the last lesson: one Koch edge is made of 4 copies of itself at one-third
   size. A straight line is made of 3. A filled square, cut into thirds each way, gives 9 copies. Is the Koch curve's
   dimension between 1 and 2?

??? note "Answers"
    1. $3 \times 4^5 = 3 \times 1024 = 3072$ edges.
    2. Step 0: $3 \times 3 = 9$ cm. Step 1: $9 \times \frac43 = 12$ cm. Step 2: $12 \times \frac43 = 16$ cm.
    3. Step 1 adds $\frac A3$, step 2 adds $\frac{4A}{27}$, step 3 adds $\frac{16A}{243}$, so step 4 adds
       $\frac{16A}{243} \times \frac49 = \frac{64A}{2187}$, about $0.029A$.
    4. Step 12 gives about 94.7 and step 13 about 126.3. So **step 13**.
    5. $\frac85 \times 25 = 40$ square centimetres.
    6. The perimeter grows in exactly the same way: each edge still becomes 4 pieces a third as long, so it is
       multiplied by $\frac43$ each step and grows without limit. The area **shrinks**: it is
       $A - \frac A3 - \frac{4A}{27} - \cdots = A - \frac{3A}5 = \frac{2A}5$. (The inward tents never overlap each
       other, which you can check with a careful drawing.)
    7. Yes. With one-third-size copies, a line needs 3 and a square 9. The Koch curve needs 4, which is between 3 and 9,
       so its dimension is between 1 and 2 (it works out to about 1.26: more than a line, but much less than a surface).

## Common mistake

**"A longer edge means a bigger area."** For ordinary shapes like squares, a bigger perimeter usually goes with a bigger
area. But the Koch snowflake shows the two can be completely separate: infinite edge, finite area. Wiggles add length
without adding much area.

**Forgetting that the number of edges changes.** At step 2 there are 12 edges, not 3, so step 2 adds 12 triangles.
Always count edges first, then work out what each step adds.

## Where it leads

- Back: [The Sierpinski triangle](04-sierpinski-triangle.md), where the area went to zero instead.
  Next: [Hilbert's hotel with infinitely many buses](06-infinitely-many-buses.md).
- [Level 4 page](index.md) · [Infinity topic page](../index.md)
- The multiply trick is the geometric series of [Halves that add up to 1](01-halves-add-to-one.md) and
  [Infinite geometric series](../../patterns/level-7/03-infinite-geometric.md).
- Why thirding the sides divides the area by 9: [Similar triangles](../../geometry/level-7/01-similar-triangles.md)
  and the [square-cube law](../../measurement/level-7/05-square-cube-law.md).
- In level 8, **Gabriel's horn** does the same trick in three dimensions: a finite volume with an infinite surface.
