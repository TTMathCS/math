---
title: "Area of rectangles"
---

# Area of rectangles

*Measurement · level 3, lesson 5 of 6*

## A question to start

A rug is 2 m long and 1 m wide. You want a new rug that is **twice as long and twice as wide**: 4 m by 2 m. How much
more floor will it cover? Twice as much?

Not twice: **four times** as much. The old rug covers 2 square metres and the new one covers 8. By the end of this
lesson you will see exactly why, and you will be able to find the area of any rectangle without counting a single
square.

## The idea

### From counting to multiplying

In the [last lesson](04-area-counting-squares.md) you found areas by counting squares. For a rectangle there is a
much faster way, because the squares inside a rectangle are always arranged in neat **rows**, all the same length.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 165" role="img" aria-label="A rectangle 6 units long and 4 units wide, filled with 4 rows of 6 unit squares">
  <g fill="#9cc9ea" stroke="currentColor" stroke-width="0.8">
    <rect x="40" y="20" width="150" height="25"/><rect x="40" y="45" width="150" height="25"/>
    <rect x="40" y="70" width="150" height="25"/><rect x="40" y="95" width="150" height="25"/>
  </g>
  <rect x="40" y="20" width="25" height="25" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <g stroke="currentColor" stroke-width="0.8">
    <line x1="65" y1="20" x2="65" y2="120"/><line x1="90" y1="20" x2="90" y2="120"/><line x1="115" y1="20" x2="115" y2="120"/>
    <line x1="140" y1="20" x2="140" y2="120"/><line x1="165" y1="20" x2="165" y2="120"/>
  </g>
  <rect x="40" y="20" width="150" height="100" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="115" y="140">length 6</text><text x="20" y="74">4</text>
    <text x="260" y="40">row 1: 6</text><text x="260" y="65">row 2: 6</text><text x="260" y="90">row 3: 6</text>
    <text x="260" y="115">row 4: 6</text><text x="260" y="145">4 × 6 = 24</text>
  </g>
</svg>
</div>

This rectangle is 6 units long and 4 units wide. Along the length, 6 unit squares fit in a row. Across the width,
there is room for 4 such rows. So the number of squares is

$$4 \text{ rows of } 6 = 4 \times 6 = 24 \text{ square units.}$$

This works for every rectangle. **The length tells you how many squares fit in one row. The width tells you how many
rows fit.** Rows times "squares in each row" is multiplication. So

$$\text{area of a rectangle} = \text{length} \times \text{width}$$

It does not matter which side you call the length. Turn the rectangle a quarter turn and you see 6 rows of 4
instead of 4 rows of 6, which is still 24. That is the reason $4 \times 6 = 6 \times 4$.

### The units multiply too

If the sides are in centimetres, the unit squares are 1 cm by 1 cm, so the area is in **square centimetres**. A
rectangle 6 cm by 4 cm has area 24 cm². If the sides are in metres, the area is in **square metres**.

A neat way to remember: cm × cm = cm². The little 2 counts the two lengths that were multiplied.

But the two sides **must use the same unit**. A rectangle 2 m long and 50 cm wide is not $2 \times 50 = 100$ of
anything. Change first: 2 m = 200 cm, so the area is $200 \times 50 = 10\,000$ cm², or 50 cm = 0.5 m, so the area is
$2 \times 0.5 = 1$ m². (So one square metre is the same as 10 000 square centimetres. You will see why in
[level 5](../level-5/index.md).)

### Squares

A **square** is a rectangle whose length and width are the same. A square with sides of 5 cm has area
$5 \times 5 = 25$ cm². That is why a number times itself is called the number "squared": $5 \times 5$ is written
$5^2$ and read "5 squared", because it is the area of a square with side 5. The square numbers 1, 4, 9, 16, 25, ...
are the areas of squares with sides 1, 2, 3, 4, 5, ...

### What if the sides are not whole numbers?

A rectangle can be 2.5 cm long. Does length × width still work? Look:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 170" role="img" aria-label="A rectangle 2 and a half units long and 4 units wide: 4 rows of 2 whole squares and a half square, total 10 square units">
  <g fill="#9cc9ea" stroke="currentColor" stroke-width="0.8">
    <rect x="40" y="20" width="30" height="30"/><rect x="70" y="20" width="30" height="30"/>
    <rect x="40" y="50" width="30" height="30"/><rect x="70" y="50" width="30" height="30"/>
    <rect x="40" y="80" width="30" height="30"/><rect x="70" y="80" width="30" height="30"/>
    <rect x="40" y="110" width="30" height="30"/><rect x="70" y="110" width="30" height="30"/>
  </g>
  <g fill="#eea66f" stroke="currentColor" stroke-width="0.8">
    <rect x="100" y="20" width="15" height="30"/><rect x="100" y="50" width="15" height="30"/>
    <rect x="100" y="80" width="15" height="30"/><rect x="100" y="110" width="15" height="30"/>
  </g>
  <rect x="40" y="20" width="75" height="120" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="77.5" y="158">2.5</text><text x="25" y="84">4</text>
  </g>
  <g font-size="13" fill="currentColor">
    <text x="150" y="60">8 whole squares</text>
    <text x="150" y="85">4 halves = 2 wholes</text>
    <text x="150" y="115">8 + 2 = 10</text>
    <text x="150" y="140">4 × 2.5 = 10 ✓</text>
  </g>
</svg>
</div>

Each row has 2 whole squares and a half square: 2.5 squares. There are 4 rows, so $4 \times 2.5 = 10$ square units.
Counting gives the same: 8 whole squares and 4 halves (which make 2), so 10. Length × width works for parts of units
too. That is a big deal, because real measurements are hardly ever whole numbers.

### Why doubling the sides makes four times the area

Back to the rug. The old rug is 2 m by 1 m. The new rug is 4 m by 2 m. Draw the new rug and look inside it:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 140" role="img" aria-label="A 2 by 1 rectangle next to a 4 by 2 rectangle that is made of four copies of the 2 by 1 rectangle">
  <rect x="20" y="70" width="60" height="30" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <text x="50" y="120" font-size="12" text-anchor="middle" fill="currentColor">2 m by 1 m</text>
  <g stroke="currentColor" stroke-width="2">
    <rect x="150" y="40" width="60" height="30" fill="#eea66f"/><rect x="210" y="40" width="60" height="30" fill="#9cc9ea"/>
    <rect x="150" y="70" width="60" height="30" fill="#7ccf9a"/><rect x="210" y="70" width="60" height="30" fill="#eea66f"/>
  </g>
  <text x="210" y="120" font-size="12" text-anchor="middle" fill="currentColor">4 m by 2 m: four old rugs</text>
</svg>
</div>

Doubling the length makes room for **2** old rugs side by side. Doubling the width makes room for **2** such rows.
That is $2 \times 2 = 4$ old rugs. In numbers: the old area is $2 \times 1 = 2$ m², and the new area is
$4 \times 2 = 8$ m², which is 4 times as much.

If you made every side 3 times as long, the area would be $3 \times 3 = 9$ times as big. This is one of the most
important facts in all of measurement, and it comes back again and again, all the way to why big animals need thick
legs (level 7 of this topic).

### Finding a missing side

If you know the area and one side, you can find the other side by **dividing**, because division undoes
multiplication.

A rectangle has area 48 cm² and width 6 cm. Then $6 \times \text{length} = 48$. Which number times 6 gives 48? It is
$48 \div 6 = 8$, so the length is **8 cm**. In a picture: 48 squares are arranged in 6 rows, so each row has
$48 \div 6 = 8$ squares.

<figure class="play" data-play="area" data-shape="rect"><span class="ai-tag">AI-created</span><figcaption><b>Count or multiply.</b> Length × width gives the same as counting squares.</figcaption></figure>

## Worked examples

**1. Tiles.** A bathroom floor is 3 m by 2 m. How many 1 m² tiles cover it?

Area $= 3 \times 2 = 6$ m², so 6 tiles.

**2. A room with a decimal.** A bedroom is 4.5 m long and 3 m wide. Its area?

$4.5 \times 3 = 13.5$ m². (Think: 3 rows of 4.5 is $4.5 + 4.5 + 4.5 = 13.5$.)

**3. Carpet cost.** Carpet costs 20 dollars for each square metre. How much to carpet a room 5 m by 4 m?

Area $= 5 \times 4 = 20$ m². Cost $= 20 \times 20 = 400$ dollars.

**4. Missing side.** A garden has area 72 m² and is 9 m long. How wide is it? What is its perimeter?

Width $= 72 \div 9 = 8$ m. Perimeter $= 9 + 8 + 9 + 8 = 34$ m.

**5. A square from its area.** A square has area 64 cm². How long is each side?

Which number times itself is 64? $8 \times 8 = 64$, so each side is **8 cm**.

**6. Mixed units.** A ribbon is 1.5 m long and 4 cm wide. What is its area in cm²?

Change to the same unit: 1.5 m = 150 cm. Area $= 150 \times 4 = 600$ cm².

## Try it

1. Find the area: (a) 7 cm by 3 cm; (b) 12 m by 10 m; (c) a square with side 9 cm.
2. A rectangle is 6.5 m by 2 m. Find its area.
3. A rectangle has area 54 cm² and length 9 cm. Find its width.
4. A square has area 100 m². Find its side and its perimeter.
5. A photo is 15 cm by 10 cm. You make a copy with every side 3 times as long. What is the area of the copy, and
   how many times bigger is it than the photo?
6. A sticker is 2 cm by 50 mm. What is its area in cm²?
7. Paint covers 10 m² per can. A wall is 6 m long and 2.5 m high. How many cans do you need?
8. Two rectangles both have area 36 cm². One is 4 cm wide; the other is 6 cm wide. Which has the longer perimeter?

??? note "Answers"
    1. (a) $7 \times 3 = 21$ cm². (b) $12 \times 10 = 120$ m². (c) $9 \times 9 = 81$ cm².
    2. $6.5 \times 2 = 13$ m².
    3. $54 \div 9 = 6$ cm.
    4. $10 \times 10 = 100$, so the side is 10 m. Perimeter $= 4 \times 10 = 40$ m.
    5. The copy is 45 cm by 30 cm: area $45 \times 30 = 1350$ cm². The photo's area is $15 \times 10 = 150$ cm².
       $1350 \div 150 = 9$, so it is **9 times** bigger ($3 \times 3 = 9$).
    6. 50 mm = 5 cm. Area $= 2 \times 5 = 10$ cm².
    7. Area $= 6 \times 2.5 = 15$ m². One can covers 10 m², which is not enough, so you need **2 cans** (with
       5 m² worth of paint left over).
    8. 4 cm wide: length $36 \div 4 = 9$ cm, perimeter $9 + 4 + 9 + 4 = 26$ cm. 6 cm wide: length
       $36 \div 6 = 6$ cm (a square), perimeter $4 \times 6 = 24$ cm. The **4 cm wide** one has the longer
       perimeter.

## Common mistake

**Adding instead of multiplying.** Length + width (or the perimeter) does not give area. A 6 by 4 rectangle has
$6 + 4 = 10$, but its area is $6 \times 4 = 24$. If you are unsure, draw the rows of squares and count a few.

**Thinking double the sides means double the area.** It means four times the area: twice as many squares in each
row, and twice as many rows.

## Where it leads

- Previous: [Area by counting squares](04-area-counting-squares.md). Next:
  [Temperature in degrees Celsius](06-temperature-celsius.md).
- [Level 3 page](index.md) · [Measurement topic page](../index.md)
- In level 4 you cut and move pieces to turn parallelograms and triangles into rectangles:
  [Area of a parallelogram](../level-4/01-parallelogram-area.md).
- Rows of squares are arrays, the same picture behind times tables:
  [Times tables](../../numbers/level-3/02-times-tables.md) in Numbers.
- Square numbers and their patterns: [Patterns](../../patterns/index.md).
