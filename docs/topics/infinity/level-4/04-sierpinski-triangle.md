---
title: "The Sierpinski triangle"
---

# The Sierpinski triangle

*Infinity and strange math · level 4, lesson 4 of 6*

## A question to start

Draw a big triangle and colour it in. Now join the midpoints of its three sides: this cuts it into four smaller
triangles, and you rub out (cut away) the one in the middle. Three coloured triangles are left. Do the same to each of
those three. Then to each of the nine that are left. And so on, forever.

After infinitely many steps, how much of the colour is left? Some? Half? None at all? And if there is no colour left,
why does the picture still look like a triangle full of triangles?

## The idea

### Building it step by step

Start (step 0) with one solid triangle with all three sides equal (an **equilateral** triangle). At every step, do the
same thing to every coloured triangle: join the midpoints of its sides and remove the middle piece.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 466 127" role="img" aria-label="The Sierpinski triangle at steps 0, 1, 2 and 3: one orange triangle, then 3 with the middle cut out, then 9, then 27 smaller orange triangles">
  <polygon points="10.0,96.6 110.0,96.6 60.0,10.0" fill="none" stroke="currentColor" stroke-width="1"/>
  <polygon points="10.0,96.6 110.0,96.6 60.0,10.0" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <text x="60" y="114.603" font-size="11" text-anchor="middle" fill="currentColor">step 0: 1</text>
  <polygon points="124.0,96.6 224.0,96.6 174.0,10.0" fill="none" stroke="currentColor" stroke-width="1"/>
  <polygon points="124.0,96.6 174.0,96.6 149.0,53.3" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="174.0,96.6 224.0,96.6 199.0,53.3" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="149.0,53.3 199.0,53.3 174.0,10.0" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <text x="174" y="114.603" font-size="11" text-anchor="middle" fill="currentColor">step 1: 3</text>
  <polygon points="238.0,96.6 338.0,96.6 288.0,10.0" fill="none" stroke="currentColor" stroke-width="1"/>
  <polygon points="238.0,96.6 263.0,96.6 250.5,75.0" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="263.0,96.6 288.0,96.6 275.5,75.0" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="250.5,75.0 275.5,75.0 263.0,53.3" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="288.0,96.6 313.0,96.6 300.5,75.0" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="313.0,96.6 338.0,96.6 325.5,75.0" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="300.5,75.0 325.5,75.0 313.0,53.3" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="263.0,53.3 288.0,53.3 275.5,31.7" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="288.0,53.3 313.0,53.3 300.5,31.7" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="275.5,31.7 300.5,31.7 288.0,10.0" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <text x="288" y="114.603" font-size="11" text-anchor="middle" fill="currentColor">step 2: 9</text>
  <polygon points="352.0,96.6 452.0,96.6 402.0,10.0" fill="none" stroke="currentColor" stroke-width="1"/>
  <polygon points="352.0,96.6 364.5,96.6 358.2,85.8" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="364.5,96.6 377.0,96.6 370.8,85.8" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="358.2,85.8 370.8,85.8 364.5,75.0" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="377.0,96.6 389.5,96.6 383.2,85.8" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="389.5,96.6 402.0,96.6 395.8,85.8" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="383.2,85.8 395.8,85.8 389.5,75.0" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="364.5,75.0 377.0,75.0 370.8,64.1" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="377.0,75.0 389.5,75.0 383.2,64.1" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="370.8,64.1 383.2,64.1 377.0,53.3" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="402.0,96.6 414.5,96.6 408.2,85.8" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="414.5,96.6 427.0,96.6 420.8,85.8" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="408.2,85.8 420.8,85.8 414.5,75.0" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="427.0,96.6 439.5,96.6 433.2,85.8" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="439.5,96.6 452.0,96.6 445.8,85.8" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="433.2,85.8 445.8,85.8 439.5,75.0" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="414.5,75.0 427.0,75.0 420.8,64.1" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="427.0,75.0 439.5,75.0 433.2,64.1" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="420.8,64.1 433.2,64.1 427.0,53.3" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="377.0,53.3 389.5,53.3 383.2,42.5" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="389.5,53.3 402.0,53.3 395.8,42.5" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="383.2,42.5 395.8,42.5 389.5,31.7" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="402.0,53.3 414.5,53.3 408.2,42.5" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="414.5,53.3 427.0,53.3 420.8,42.5" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="408.2,42.5 420.8,42.5 414.5,31.7" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="389.5,31.7 402.0,31.7 395.8,20.8" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="402.0,31.7 414.5,31.7 408.2,20.8" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <polygon points="395.8,20.8 408.2,20.8 402.0,10.0" fill="#eea66f" stroke="currentColor" stroke-width="0.5"/>
  <text x="402" y="114.603" font-size="11" text-anchor="middle" fill="currentColor">step 3: 27</text>
</svg>
</div>

Why does joining the midpoints give four triangles of the **same** size? Each of the three lines joining midpoints is
parallel to one side and exactly half as long (this is the **midpoint theorem**, from geometry). So the four small
triangles all have sides half as long as the big one's, and all four are equilateral. Three point the same way as the
big one, and the middle one is upside down.

The shape you get after infinitely many steps is called the **Sierpinski triangle**, after the Polish mathematician
Wacław Sierpiński, who studied it in 1915.

### How many triangles?

At every step, each coloured triangle is replaced by 3 smaller ones. So the number of triangles is multiplied by 3 each
step.

| Step | 0 | 1 | 2 | 3 | 4 | 5 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Number of triangles | 1 | 3 | 9 | 27 | 81 | 243 | 59,049 |
| Side of each (starting side 1) | 1 | $\frac12$ | $\frac14$ | $\frac18$ | $\frac1{16}$ | $\frac1{32}$ | $\frac1{1024}$ |

After $n$ steps there are $3^n$ triangles (3 multiplied by itself $n$ times), and each has side $\frac1{2^n}$.

### How much area is left?

When you cut a triangle into four equal pieces and remove one, you keep **three quarters** of its area. That happens
to every coloured triangle at every step. So the coloured area is multiplied by $\frac34$ every step.

If the starting triangle has area 1:

| Step | 0 | 1 | 2 | 3 | 4 | 8 | 16 | 17 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Area left | 1 | $\frac34$ | $\frac9{16}$ | $\frac{27}{64}$ | $\frac{81}{256}$ | about 0.100 | about 0.0100 | about 0.0075 |

After $n$ steps the area left is $\left(\frac34\right)^n$. We can check this another way: there are $3^n$ triangles,
and each has sides $\frac1{2^n}$ as long as the first, so its area is $\frac1{4^n}$ of the first (halving every side of
a triangle makes it a quarter of the area, and that happens $n$ times). So the total area is
$3^n \times \frac1{4^n} = \frac{3^n}{4^n}$. ✓

### The area shrinks to zero

Multiplying by $\frac34$ again and again makes the area smaller and smaller. Is it heading for 0, or for some small
number like 0.01?

Look at the table: after 8 steps the area is about 0.1, and after 16 steps about 0.01. In fact, every 8 steps cut the
area by about a factor of 10, because $\left(\frac34\right)^8 \approx 0.100$. So after 24 steps it is about 0.001,
after 32 steps about 0.0001, and so on. Whatever small amount you name, the area eventually drops below it, and stays
below. So the limit is 0: the Sierpinski triangle has **zero area**.

Here is another way to see it. Add up the area that is **removed**:

- step 1 removes one triangle of area $\frac14$;
- step 2 removes 3 triangles, each $\frac1{16}$: total $\frac3{16}$;
- step 3 removes 9 triangles, each $\frac1{64}$: total $\frac9{64}$;
- and so on.

The total removed is $\frac14 + \frac3{16} + \frac9{64} + \cdots$. After $n$ steps, the removed area is
$1 - \left(\frac34\right)^n$ (everything that is not left). As $n$ grows, that closes in on 1. So the removed pieces add
up to the whole triangle, area 1, and nothing is left.

### But not nothing

Zero area does not mean the shape is empty. Many points are never removed. For example, the three corners of the big
triangle are never removed: each corner is a corner of one of the small triangles at every step. Every corner of every
small triangle, at every step, stays forever. So do all the edges of all the triangles. The Sierpinski triangle is
made of infinitely many points and lines, arranged so thinly that they cover no area at all.

It is a bit like a fishing net made of infinitely thin string: you can see its shape, but it covers nothing.

### Copies of itself

Look at the step 3 picture. The bottom-left corner is a half-size copy of the step 2 picture. So is the bottom-right
corner, and so is the top. The finished Sierpinski triangle is made of exactly **three half-size copies of itself**.
And each of those is made of three copies of itself, and so on, forever.

A shape that contains smaller copies of itself, however far you zoom in, is called **self-similar**. Shapes like this,
with endless detail at every size, are called **fractals**. The word was invented in 1975 by the mathematician Benoit
Mandelbrot, from the Latin *fractus*, meaning "broken".

### Not a line, not a surface

Here is a strange question: how many "dimensions" does the Sierpinski triangle have?

- A **line** has dimension 1. Shrink it to half size, and you need **2** copies to rebuild it.
- A filled **square** has dimension 2. Shrink it to half size, and you need **4** copies ($2 \times 2$).
- A solid **cube** has dimension 3. Half-size copies needed: **8** ($2 \times 2 \times 2$).

The pattern: with half-size copies, you need $2^{\text{dimension}}$ copies. The Sierpinski triangle needs **3** half-size
copies. Since $2^1 = 2$ and $2^2 = 4$, its dimension must be between 1 and 2. It works out to about 1.585. It is more
than a line, less than a surface: a **fractal dimension**.

### It turns up elsewhere

Write out Pascal's triangle and colour the odd numbers. The same pattern appears, as you can see in
[Patterns in Pascal's triangle](../../counting/level-7/04-pascal-patterns.md). Mathematicians love it when the same shape
appears from two completely different directions: it usually means there is a deeper reason underneath.

## Worked examples

**1. Step 6.** How many triangles are there after 6 steps, what is the side of each (starting side 1), and what area is
left (starting area 1)?

- Triangles: $3^6 = 729$.
- Side: $\frac1{2^6} = \frac1{64}$.
- Area: $\left(\frac34\right)^6 = \frac{729}{4096}$, about 0.178.

**2. When is less than a tenth left?** Find the first step at which the area left is less than $\frac1{10}$.

- $\left(\frac34\right)^8 = \frac{6561}{65536}$, which is about 0.1001. Just more than a tenth.
- $\left(\frac34\right)^9 = \frac{19683}{262144}$, about 0.0751.
- So the first step is **step 9**.

**3. How much does step 4 remove?** Before step 4 there are $3^3 = 27$ triangles, each of area $\frac1{4^3} = \frac1{64}$.
Step 4 removes a quarter of each: $27 \times \frac14 \times \frac1{64} = \frac{27}{256}$, about 0.105.

**4. The edges get longer.** Add up the perimeters of all the coloured triangles (starting side 1).

- Step 0: one triangle, perimeter 3.
- Step 1: 3 triangles with side $\frac12$, each perimeter $\frac32$: total $\frac92 = 4.5$.
- Step $n$: $3^n$ triangles with perimeter $\frac3{2^n}$, total $3 \times \frac{3^n}{2^n} = 3 \times \left(\frac32\right)^n$.
- Each step multiplies the total by $\frac32$, so it grows past every number. Area goes to zero, while the total edge
  length goes to infinity.

## Try it

1. How many triangles are there after 4 steps? After 7?
2. Starting with area 1, what area is left after 3 steps? Write it as a fraction.
3. How many triangles does step 3 remove? What is the area of each one removed?
4. Is the midpoint of the bottom side of the big triangle ever removed? What about its exact centre?
5. Start instead with a square, cut it into 9 equal smaller squares (3 by 3) and remove the middle one, then repeat on
   the 8 that are left. (This is the **Sierpinski carpet**.) What fraction of the area is kept each step? How many
   squares after 3 steps?
6. Does the Sierpinski carpet have zero area in the end? Explain.
7. (Harder) Using the "copies" rule: the carpet is made of 8 copies of itself at one-third size. A filled square is made
   of 9 copies at one-third size, and a line of 3. Is the carpet's dimension more or less than 2?

??? note "Answers"
    1. $3^4 = 81$ and $3^7 = 2187$.
    2. $\left(\frac34\right)^3 = \frac{27}{64}$.
    3. Before step 3 there are $3^2 = 9$ triangles, and step 3 removes the middle of each: **9** triangles. Each is a
       quarter of a triangle of area $\frac1{16}$, so $\frac1{64}$.
    4. The midpoint of the bottom side is a corner of the small triangles after step 1, so it is **never removed**.
       The exact centre of the big triangle is inside the middle triangle removed in step 1, so it **is removed** at
       step 1.
    5. You keep $\frac89$ of the area each step. After 3 steps there are $8^3 = 512$ squares.
    6. **Yes.** The area after $n$ steps is $\left(\frac89\right)^n$, and multiplying by $\frac89$ over and over shrinks
       towards 0 (slowly: about 20 steps to get below a tenth, since $\left(\frac89\right)^{20} \approx 0.095$). So
       the area left closes in on 0.
    7. With one-third-size copies, a line needs $3^1 = 3$ and a square $3^2 = 9$. The carpet needs 8, which is between
       3 and 9, but close to 9. So its dimension is between 1 and 2, a little **less** than 2 (it is about 1.89).

## Common mistake

**"Zero area means nothing is there."** The area is zero, but infinitely many points survive: all the corners and edges
of all the small triangles. Zero area means "covers no space", not "empty".

**Multiplying the area by $\frac14$ instead of $\frac34$.** Each step **removes** a quarter, which leaves three
quarters. Write down what is kept, not what is thrown away, before you multiply.

## Where it leads

- Back: [Sums that blow up](03-sums-blow-up.md) · Next: [The Koch snowflake](05-koch-snowflake.md), a fractal with
  the opposite surprise.
- [Level 4 page](index.md) · [Infinity topic page](../index.md)
- The same pattern in [Pascal's triangle](../../counting/level-7/04-pascal-patterns.md). Powers and why they shrink or
  grow: [Patterns level 6](../../patterns/level-6/02-why-they-get-huge.md).
- Areas of triangles and why halving the sides quarters the area: [Measurement level 4](../../measurement/level-4/02-triangle-area.md)
  and [Similar triangles](../../geometry/level-7/01-similar-triangles.md).
- In level 7, the **Cantor set** is built the same way on a line, and keeps uncountably many points.
