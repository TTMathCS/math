---
title: "Volume of cylinders"
---

# Volume of cylinders

*Measurement · level 5, lesson 2 of 6*

## A question to start

Two glasses stand on a table. Glass A is tall and thin: 6 cm across and 12 cm tall inside. Glass B is a wide, shallow
dish: 12 cm across, twice as wide, but only 3 cm deep, a quarter of the height.

Which one holds more water? Most people guess that the tall glass wins easily, because it is four times as tall and
only "half as wide".

They hold **exactly the same amount**. Doubling the width of a glass does not double what it holds: it makes it
**four** times as much. In this lesson you will see why, and you will learn to work out how many millilitres a can,
a glass or a water tank holds.

## The idea

### What a cylinder is

A **cylinder** is a solid with two identical, parallel circles as its ends and the same circle all the way through,
like a can of soup, a coin, a drinking straw (without the hole, for now) or a round water tank. Words you need:

- the **radius** $r$: the distance from the centre of an end circle to its edge;
- the **diameter** $d$: the distance straight across the circle through the centre, so $d = 2r$;
- the **height** $h$: the straight distance between the two end circles.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 220 200" role="img" aria-label="A cylinder standing up, with the radius drawn on the top circle and the height drawn down the side">
  <path d="M 40 40 L 40 160 A 70 18 0 0 0 180 160 L 180 40" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="2"/>
  <ellipse cx="110" cy="40" rx="70" ry="18" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="2"/>
  <path d="M 40 160 A 70 18 0 0 1 180 160" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="110" y1="40" x2="180" y2="40" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="110" cy="40" r="2.5" fill="currentColor"/>
  <text x="145" y="34" font-size="13" text-anchor="middle" fill="currentColor">r</text>
  <line x1="200" y1="40" x2="200" y2="160" stroke="currentColor" stroke-width="1.5"/>
  <text x="207" y="104" font-size="13" fill="currentColor">h</text>
  <text x="110" y="196" font-size="12" text-anchor="middle" fill="currentColor">every slice is the same circle</text>
</svg>
</div>

### The circle's area, from Geometry

In [Geometry level 6](../../geometry/level-6/05-circle-area-sectors.md) you saw why a circle of radius $r$ has area

$$\text{area of a circle} = \pi r^2$$

where $\pi$ (the Greek letter pi) is the same number for every circle, about 3.14159. Here $r^2$ means $r \times r$.
One way to remember the reason: cut the circle into many thin pizza slices and lay them head to tail. They make a
shape close to a rectangle whose height is $r$ and whose length is half the way round the circle, $\pi r$. Its area is
$\pi r \times r = \pi r^2$.

### Volume: base area times height, again

A cylinder is not a prism (its base is not a polygon), but the reason behind the prism rule from
[lesson 1](01-prism-volume.md) works just as well. A slab of the cylinder 1 cm thick is a coin shape. Its volume in
cm³ is the same number as the area of its face in cm². A cylinder of height $h$ is $h$ such slabs stacked up. So

$$V = \pi r^2 h$$

There is a second way to see it. Imagine prisms whose bases are regular polygons fitted inside the circle: a
hexagon, then a 12-sided shape, then a 24-sided shape, and so on. Each one is a prism, so its volume is
"base area times height". As the number of sides grows, the polygon hugs the circle more and more closely (a
hexagon covers about 83% of the circle, a 12-sided shape about 95%), and the prisms close in on the cylinder. Their
volumes close in on $\pi r^2 \times h$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 125" role="img" aria-label="Looking down on three prisms: a hexagon inside a circle, a twelve-sided shape inside a circle, and the circle itself. The polygons fill more of the circle as sides are added.">
  <circle cx="60" cy="60" r="42" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <polygon points="60.0,18.0 96.4,39.0 96.4,81.0 60.0,102.0 23.6,81.0 23.6,39.0" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <circle cx="170" cy="60" r="42" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <polygon points="170.0,18.0 191.0,23.6 206.4,39.0 212.0,60.0 206.4,81.0 191.0,96.4 170.0,102.0 149.0,96.4 133.6,81.0 128.0,60.0 133.6,39.0 149.0,23.6" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <circle cx="280" cy="60" r="42" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <text x="60" y="120" font-size="12" text-anchor="middle" fill="currentColor">6 sides: 83%</text>
  <text x="170" y="120" font-size="12" text-anchor="middle" fill="currentColor">12 sides: 95%</text>
  <text x="280" y="120" font-size="12" text-anchor="middle" fill="currentColor">circle: all</text>
</svg>
</div>

### Why doubling the width makes four times as much

Look at the formula: the radius appears **twice** (in $r^2 = r \times r$) and the height only once. Double the radius
and the end circle is twice as wide **and** twice as deep, so its area is $2 \times 2 = 4$ times as big. Double the
height and you only stack twice as many slabs.

That answers the opening puzzle. Glass A: $r = 3$, $h = 12$, so $V = \pi \times 9 \times 12 = 108\pi$ cm³. Glass B:
$r = 6$, $h = 3$, so $V = \pi \times 36 \times 3 = 108\pi$ cm³. Doubling the radius gave 4 times the area, and a
quarter of the height cancelled it out exactly. Both hold about 339 mL.

### Litres

To turn cubic centimetres into litres, use the facts from level 4:

$$1 \text{ cm}^3 = 1 \text{ mL} \qquad 1000 \text{ cm}^3 = 1 \text{ L} \qquad 1 \text{ m}^3 = 1000 \text{ L}$$

Work out the volume in whatever unit the lengths are in, then convert at the end. If the radius is in metres and
the height in centimetres, change one of them first: the units must match before you multiply.

### Exact answers and rounded answers

$V = 108\pi$ cm³ is an **exact** answer: it is precisely right. $V \approx 339.3$ cm³ is a rounded answer that you can
picture and measure. Mathematicians often leave $\pi$ in the answer; builders and cooks want a number. Keep $\pi$ in
until the very last step, then round once. Rounding $\pi$ to 3.14 early and then multiplying by big numbers can
throw an answer off more than you expect.

### Working backwards: how deep is the water?

The formula has three letters, so if you know any two of $V$, $r$ and $h$ you can find the third. To find the
height of the water when you pour a known volume into a round container, divide by the base area:

$$h = \frac{V}{\pi r^2}$$

This is the same move as finding a missing length of a prism, and the algebra is in
[Rearranging formulas](../../algebra/level-5/03-rearranging-formulas.md).

<figure class="play" data-play="solid" data-shape="cyl"><span class="ai-tag">AI-created</span><figcaption><b>A cylinder.</b> A circle's area times the height.</figcaption></figure>

## Worked examples

**1. A water tank.** A round tank has radius 0.5 m and height 1.2 m. How many litres does it hold?

1. $V = \pi \times 0.5^2 \times 1.2 = \pi \times 0.25 \times 1.2 = 0.3\pi$ m³.
2. $0.3\pi \approx 0.942$ m³.
3. Each m³ is 1000 L, so the tank holds about **942 litres**.

**2. A can.** A can is 7.5 cm across and 10 cm tall inside. How much can it hold?

1. The diameter is 7.5 cm, so the radius is $7.5 \div 2 = 3.75$ cm.
2. $V = \pi \times 3.75^2 \times 10 = \pi \times 14.0625 \times 10 = 140.625\pi \approx 441.8$ cm³.
3. That is about 442 mL. (A real can is filled a little below the top, so its label will say less.)

**3. How deep is the soup?** You pour 2 litres of soup into a round pot with a radius of 10 cm. How deep is it?

1. 2 L = 2000 cm³. The base area is $\pi \times 10^2 = 100\pi \approx 314.2$ cm².
2. $h = 2000 \div 314.2 \approx 6.4$ cm.

**4. A sample from Mars.** The Perseverance rover drills rock cores roughly the size of a piece of chalk: about
1.3 cm across and about 6 cm long. Roughly how much rock is in one core?

1. Radius $1.3 \div 2 = 0.65$ cm.
2. $V = \pi \times 0.65^2 \times 6 \approx 8.0$ cm³: about 8 cubic centimetres, the space of 8 mL of water.

**5. A pipe.** A pipe is a cylinder with a cylinder-shaped hole. Its outside radius is 5 cm, its inside radius is
4 cm, and it is 1 m long. How much material is in it?

1. Work in centimetres: the length is 100 cm.
2. Whole cylinder minus hole: $\pi \times 5^2 \times 100 - \pi \times 4^2 \times 100 = \pi \times (25 - 16) \times 100 = 900\pi$.
3. $900\pi \approx 2827$ cm³.

## Try it

1. Find the volume of a cylinder with radius 5 cm and height 10 cm, exactly (with $\pi$) and to one decimal place.
2. A tin is 8 cm across and 15 cm tall. Find its volume to the nearest cm³.
3. A round tank has radius 1 m and height 2 m. How many litres does it hold, to the nearest litre?
4. A can must hold 500 cm³ and have a radius of 4 cm. How tall must it be, to one decimal place?
5. Which holds more: a jar with radius 4 cm and height 10 cm, or a jar with radius 5 cm and height 6 cm? By how much?
6. A rain barrel is 60 cm across. You pour in 10 litres. By how many centimetres does the water rise?
7. A copper pipe has outside radius 1.5 cm, inside radius 1.2 cm and length 2 m. Find the volume of copper, to the
   nearest cm³.
8. Explain, without numbers, why tripling a cylinder's radius multiplies its volume by 9, but tripling its height
   only multiplies it by 3.

??? note "Answers"
    1. $V = \pi \times 25 \times 10 = 250\pi \approx 785.4$ cm³.
    2. Radius 4 cm: $V = \pi \times 16 \times 15 = 240\pi \approx 754$ cm³.
    3. $V = \pi \times 1^2 \times 2 = 2\pi \approx 6.2832$ m³, which is about **6283 litres**.
    4. $h = 500 \div (\pi \times 16) = 500 \div 50.27 \approx 9.9$ cm.
    5. First jar: $\pi \times 16 \times 10 = 160\pi \approx 502.7$ cm³. Second: $\pi \times 25 \times 6 = 150\pi \approx 471.2$ cm³.
       The first holds more, by $10\pi \approx 31.4$ cm³.
    6. Radius 30 cm, base area $\pi \times 900 \approx 2827$ cm². 10 L = 10 000 cm³. Rise
       $= 10\,000 \div 2827 \approx 3.5$ cm.
    7. Length 200 cm. $\pi \times (1.5^2 - 1.2^2) \times 200 = \pi \times (2.25 - 1.44) \times 200 = 162\pi \approx 509$ cm³.
    8. Tripling the radius makes the end circle 3 times as wide in every direction, so its area is
       $3 \times 3 = 9$ times as big, and every slab holds 9 times as much. Tripling the height only gives 3 times as
       many slabs, each the same as before.

## Common mistake

**Using the diameter as the radius.** If a can is "8 cm across", its radius is 4 cm. Putting 8 into $\pi r^2 h$
gives an answer 4 times too big. Always ask: is this number across the whole circle, or from the centre?

**Squaring at the wrong moment.** $\pi r^2 h$ means $\pi \times (r \times r) \times h$: only $r$ is squared. Do not
square $\pi r$ or $rh$. On a calculator, type $r$, square it, then multiply by $\pi$ and by $h$.

## Where it leads

- Back: [Volume of prisms](01-prism-volume.md) · Next: [Surface area of prisms](03-prism-surface-area.md)
- [Level 5 page](index.md) · [Measurement topic page](../index.md)
- Where $\pi r^2$ comes from: [Geometry: area of a circle](../../geometry/level-6/05-circle-area-sectors.md) and
  [Pi and the circumference](../../geometry/level-6/04-pi-circumference.md).
- A cone that fits exactly inside a cylinder holds one third of it: [Level 6](../level-6/01-pyramid-cone-volume.md).
- Rates such as "litres per minute" to fill a tank: [Rates of measurement](../level-6/06-measurement-rates.md).
