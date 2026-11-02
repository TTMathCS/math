---
title: "Converting area and volume units"
---

# Converting area and volume units

*Measurement · level 5, lesson 5 of 6*

## A question to start

There are 100 centimetres in a metre. So how many little squares, each 1 cm by 1 cm, does it take to cover a square
that is 1 m by 1 m?

The tempting answer is 100. The real answer is **10 000**. And how many centimetre cubes fill a box 1 m along each
edge? Not 100, not 10 000, but **one million**.

If you get these wrong, a floor plan can be out by a factor of 100, and a water tank by a factor of 10 000. This
lesson shows why the numbers jump so fast, and how to convert areas and volumes without ever getting it wrong.

## The idea

### Lengths: one factor

From [level 3](../level-3/index.md) you know the metric length family:

| | mm | cm | m | km |
| --- | --- | --- | --- | --- |
| 1 cm is | 10 mm | | | |
| 1 m is | 1000 mm | 100 cm | | |
| 1 km is | | | 1000 m | |

To change metres to centimetres you multiply by 100, because each metre **is** 100 centimetres laid end to end.

### Areas: the factor twice

Now draw a square 1 m by 1 m and divide each side into ten parts of 10 cm. The square is cut into a 10 by 10 grid of
smaller squares, each 10 cm by 10 cm.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 240" role="img" aria-label="A square one metre on each side divided into a ten by ten grid of squares, each ten centimetres on a side. One small square is shaded.">
  <rect x="20" y="20" width="200" height="200" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>
  <path d="M 40 20 V 220 M 20 40 H 220 M 60 20 V 220 M 20 60 H 220 M 80 20 V 220 M 20 80 H 220 M 100 20 V 220 M 20 100 H 220 M 120 20 V 220 M 20 120 H 220 M 140 20 V 220 M 20 140 H 220 M 160 20 V 220 M 20 160 H 220 M 180 20 V 220 M 20 180 H 220 M 200 20 V 220 M 20 200 H 220" stroke="currentColor" stroke-width="0.7" fill="none"/>
  <rect x="20" y="20" width="20" height="20" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="13" fill="currentColor">
    <text x="235" y="40">each small square:</text>
    <text x="235" y="58">10 cm × 10 cm = 100 cm²</text>
    <text x="235" y="100">10 rows of 10 squares:</text>
    <text x="235" y="118">100 squares</text>
    <text x="235" y="160">100 × 100 cm²</text>
    <text x="235" y="178">= 10 000 cm²</text>
    <text x="120" y="236" text-anchor="middle">1 m = 100 cm</text>
  </g>
</svg>
</div>

There are 100 small squares, and each one holds $10 \times 10 = 100$ square centimetres. So the big square holds
$100 \times 100 = 10\,000$ cm². Another way to see it: a 1 m square is 100 cm long and 100 cm wide, so it is 100 rows
of 100 squares.

$$1 \text{ m}^2 = 100 \text{ cm} \times 100 \text{ cm} = 10\,000 \text{ cm}^2$$

The reason is that area is a length **times** a length. When each length is multiplied by 100, the area is multiplied
by $100 \times 100$. The little 2 in "m²" is a reminder: square the length factor.

### Volumes: the factor three times

A cube 1 m along each edge is 100 cm long, 100 cm wide and 100 cm tall. Filling it layer by layer
([level 4](../level-4/index.md)): each layer is $100 \times 100 = 10\,000$ cubes, and there are 100 layers.

$$1 \text{ m}^3 = 100 \times 100 \times 100 \text{ cm}^3 = 1\,000\,000 \text{ cm}^3$$

Volume is length times length times length, so the length factor is used three times: **cube** the factor. The
little 3 in "m³" is the reminder.

### The general rule

If one unit of length is $k$ of a smaller unit, then

- one unit of **area** is $k^2$ of the smaller square unit;
- one unit of **volume** is $k^3$ of the smaller cubic unit.

| Length | Area | Volume |
| --- | --- | --- |
| 1 cm = 10 mm | 1 cm² = 100 mm² | 1 cm³ = 1000 mm³ |
| 1 m = 100 cm | 1 m² = 10 000 cm² | 1 m³ = 1 000 000 cm³ |
| 1 m = 1000 mm | 1 m² = 1 000 000 mm² | 1 m³ = 1 000 000 000 mm³ |
| 1 km = 1000 m | 1 km² = 1 000 000 m² | 1 km³ = 1 000 000 000 m³ |

You never need to memorise this table. Write the length fact, then square it or cube it.

As in level 3, converting to a **smaller** unit gives a **bigger** number (multiply); converting to a **bigger** unit
gives a smaller number (divide). Ask yourself: "are there going to be more of these units, or fewer?"

### Hectares: a unit for land

Square metres are too small for farms and parks, and square kilometres are too big for a field. So land is often
measured in **hectares** (ha):

$$1 \text{ ha} = 100 \text{ m} \times 100 \text{ m} = 10\,000 \text{ m}^2$$

A hectare is a square 100 m on each side, about the size of a large city block. A full-size soccer field
(105 m by 68 m) is about 0.7 ha. Because 1 km is 10 lengths of 100 m, a square kilometre holds $10 \times 10 = 100$
hectares:

$$1 \text{ km}^2 = 100 \text{ ha}$$

(The word comes from "hecto", meaning 100, and "are", an old unit of 100 m². So a hectare is 100 ares.)

### Litres join the family

From level 4: a litre is the volume of a cube 10 cm on each edge, $10 \times 10 \times 10 = 1000$ cm³, and a
millilitre is 1 cm³. Since 1 m is 10 lengths of 10 cm, a cubic metre holds $10^3 = 1000$ of those litre cubes:

$$1 \text{ mL} = 1 \text{ cm}^3 \qquad 1 \text{ L} = 1000 \text{ cm}^3 \qquad 1 \text{ m}^3 = 1000 \text{ L}$$

### The safest method: convert the lengths first

When a problem gives lengths in mixed units, change all the **lengths** to one unit before multiplying. Then there is
nothing to square or cube afterwards. If you must convert a finished area or volume, use the squared or cubed factor.

## Worked examples

**1. Floor area.** A floor has an area of 3.5 m². How many cm² is that?

$3.5 \times 10\,000 = 35\,000$ cm². (More units, because cm² are smaller: multiply.)

**2. A big tank.** A tank holds 2 500 000 cm³. How many cubic metres and how many litres?

1. $2\,500\,000 \div 1\,000\,000 = 2.5$ m³.
2. $2.5 \times 1000 = 2500$ L. (Check: $2\,500\,000 \div 1000 = 2500$ L directly. ✓)

**3. A field.** A field is 250 m by 180 m. Find its area in hectares.

1. $250 \times 180 = 45\,000$ m².
2. $45\,000 \div 10\,000 = 4.5$ ha.

**4. Mixed units, two ways.** A box is 2 m long, 50 cm wide and 30 cm tall. Find its volume in m³ and in litres.

- Lengths first, in metres: $2 \times 0.5 \times 0.3 = 0.3$ m³, which is $0.3 \times 1000 = 300$ L.
- Or in centimetres: $200 \times 50 \times 30 = 300\,000$ cm³, and $300\,000 \div 1\,000\,000 = 0.3$ m³. ✓

**5. A phone screen.** A screen is 70 mm by 150 mm. Its area is $70 \times 150 = 10\,500$ mm². Since
1 cm² = 100 mm², that is $10\,500 \div 100 = 105$ cm².

**6. Mars in hectares.** The surface of Mars is about 144.8 million km², which is $1.448 \times 10^8$ km² in
[scientific notation](../../numbers/level-5/05-scientific-notation.md). Each km² is 100 ha, so Mars's surface is
about $1.448 \times 10^{10}$ hectares: roughly 14 billion hectares.

## Try it

1. Change 4 m² to cm².
2. Change 6000 cm² to m².
3. Change 0.75 m³ to cm³, and then to litres.
4. Change 12 cm³ to mm³.
5. A farm covers 3.2 km². How many hectares is that? How many m²?
6. A house lot is 40 m by 25 m. What fraction of a hectare is it?
7. An aquarium is 80 cm long, 35 cm wide and 40 cm deep. Find its volume in cm³, m³ and litres.
8. A model of a house is built at a scale of 1 : 50 (every real length is 50 times the model's). The model's floor
   is 20 cm by 16 cm. What is the real floor area, in m²? Do it two ways: by converting lengths first, and by using
   the squared factor.

??? note "Answers"
    1. $4 \times 10\,000 = 40\,000$ cm².
    2. $6000 \div 10\,000 = 0.6$ m².
    3. $0.75 \times 1\,000\,000 = 750\,000$ cm³; and $750\,000 \div 1000 = 750$ L (or $0.75 \times 1000 = 750$ L).
    4. 1 cm³ = $10^3 = 1000$ mm³, so $12 \times 1000 = 12\,000$ mm³.
    5. $3.2 \times 100 = 320$ ha. Each ha is 10 000 m², so $320 \times 10\,000 = 3\,200\,000$ m².
    6. $40 \times 25 = 1000$ m², and $1000 \div 10\,000 = 0.1$: one tenth of a hectare.
    7. $80 \times 35 \times 40 = 112\,000$ cm³ $= 0.112$ m³ $= 112$ L.
    8. Lengths first: real floor $20 \times 50 = 1000$ cm = 10 m by $16 \times 50 = 800$ cm = 8 m, area 80 m².
       Squared factor: model area $20 \times 16 = 320$ cm², times $50^2 = 2500$ gives $800\,000$ cm², and
       $800\,000 \div 10\,000 = 80$ m². ✓

## Common mistake

**Using the length factor for an area or a volume.** "1 m = 100 cm, so 3 m² = 300 cm²" is wrong. It should be
$3 \times 10\,000 = 30\,000$ cm². Sketch a square and grid it if you are not sure.

**Multiplying mixed units.** "2 m × 50 cm × 30 cm = 3000" mixes metres and centimetres and gives a meaningless number.
Make every length the same unit first.

## Where it leads

- Back: [Surface area of cylinders](04-cylinder-surface-area.md) · Next: [Imperial units in Canada](06-imperial-units.md)
- [Level 5 page](index.md) · [Measurement topic page](../index.md)
- Big and small numbers: [Scientific notation](../../numbers/level-5/05-scientific-notation.md) and
  [Powers](../../numbers/level-5/03-powers.md).
- Scale factors and what they do to area and volume: [Geometry](../../geometry/index.md); and in this topic, the
  square-cube law in level 7.
- Checking units like algebra (dimensional analysis) comes in level 7 too: [Measurement topic page](../index.md).
