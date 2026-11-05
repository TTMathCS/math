---
title: "Pi and the circumference"
---

# Pi and the circumference

*Geometry · level 6, lesson 4 of 6*

## A question to start

Imagine a rope stretched tightly all the way round the equator of Mars, about 21 300 km of it. Now add just **1 metre**
to the rope's length and lift it so that it floats the same height above the ground all the way round. How high is
the gap? Could you slide a sheet of paper under it? Could a cat walk under it?

Now do the same with a rope round a football: add 1 m and lift it evenly. How high is that gap?

Almost everyone guesses that the Mars gap is microscopic. In fact both gaps are the **same**, about **16 cm**, and a
cat could squeeze under either. The reason is a single number, the same for every circle in the universe. It is
called $\pi$.

## The idea

### Circumference and diameter

The **circumference** $C$ of a circle is the distance all the way round it, its perimeter. The **diameter** $d$ is the
distance straight across, through the centre, and is twice the radius: $d = 2r$
([level 5, lesson 6](../level-5/06-circle-words.md)).

Try an experiment. Wrap a string once round a tin can, mark it, and measure the string. Then measure the can straight
across. Divide the first number by the second. Do it with a plate, a coin, a bicycle wheel. You will get answers a
little more than 3 every time: 3.1, 3.2, 3.14, depending on how carefully you measure. The ratio does not depend on
the size of the circle.

> The ratio $\dfrac{C}{d}$ is the same for every circle. This number is called **pi**, written $\pi$.
> $\pi = 3.14159265358979\ldots$

So

$$C = \pi d = 2\pi r$$

### Why $\pi$ is the same for every circle

The experiment shows it; here is the reason. Any two circles have the **same shape**. Slide one so the centres match,
then apply a dilation ([level 5, lesson 4](../level-5/04-dilations-scale-drawings.md)) from the centre with scale
factor $k = \dfrac{r_2}{r_1}$: every point of the first circle moves out along its radius to exactly the second circle.
So every circle is a scaled copy of every other.

A dilation multiplies **every** length by $k$. The diameter becomes $k$ times as long. What about the circumference,
which is curved? Approximate the circle by a polygon with very many tiny straight sides; the dilation multiplies each
straight side by $k$, so the polygon's perimeter is multiplied by $k$. The more sides you take, the closer the
polygon's perimeter is to the circumference, so the circumference is multiplied by $k$ as well. Then

$$\frac{C_2}{d_2} = \frac{k\,C_1}{k\,d_1} = \frac{C_1}{d_1}$$

The $k$'s cancel. The ratio is the same for both circles, and so for all circles.

This argument works only on a flat surface. On a curved surface, like the surface of a sphere, "circles" drawn on
the surface do **not** all have the same ratio. Flat geometry is special. (Level 8 takes a look at geometry on a
sphere.)

### Trapping $\pi$ between 3 and 4

Here is how to **prove** that $\pi$ is between 3 and 4 without measuring anything. Draw a circle of radius $r$, a
regular hexagon inside it with its corners on the circle, and a square around it touching it.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 220 200" role="img" aria-label="A circle with a regular hexagon inside it, corners on the circle, and a square around it touching it; one of the six equilateral triangles of the hexagon is shaded">
  <rect x="30" y="20" width="160" height="160" fill="none" stroke="#7ccf9a" stroke-width="2.5"/>
  <circle cx="110" cy="100" r="80" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <polygon points="110,100 190,100 150,169.3" fill="#9cc9ea" fill-opacity="0.6"/>
  <polygon points="190,100 150,169.3 70,169.3 30,100 70,30.7 150,30.7" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <g stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"><line x1="110" y1="100" x2="190" y2="100"/><line x1="110" y1="100" x2="150" y2="169.3"/></g>
  <circle cx="110" cy="100" r="3" fill="currentColor"/>
  <g font-size="13" fill="currentColor"><text x="146" y="94">r</text><text x="120" y="146">r</text><text x="174" y="142">r</text></g>
</svg>
</div>

**The hexagon (orange) is shorter than the circle.** Cut it into six triangles from the centre. Each has two sides
equal to $r$ (radii) and an angle of $360° \div 6 = 60°$ at the centre; an isosceles triangle with a 60° top angle has
base angles $(180° - 60°) \div 2 = 60°$ too, so it is equilateral and its third side is also $r$. The hexagon's
perimeter is $6r = 3d$. Each straight side is the shortest path between its two corners, and the circle's arc between
them is longer, so $C > 3d$.

**The square (green) is longer than the circle.** Its side is $d$, so its perimeter is $4d$. The circle fits inside
it, and a curve that goes round inside another, without crossing, is shorter. So $C < 4d$.

Together: $3d < C < 4d$, so $3 < \pi < 4$.

### Archimedes squeezes harder

About 2250 years ago, Archimedes of Syracuse used the same squeeze with more sides. He started from hexagons inside
and outside the circle and doubled the number of sides again and again: 12, 24, 48, 96. With 96 sides he showed

$$3\tfrac{10}{71} < \pi < 3\tfrac17$$

that is, $3.1408 < \pi < 3.1429$. Modern calculation of the same polygons gives these perimeters, divided by the
diameter:

| Sides | Polygon inside | Polygon outside |
| --- | --- | --- |
| 6 | 3.0000 | 3.4641 |
| 12 | 3.1058 | 3.2154 |
| 24 | 3.1326 | 3.1597 |
| 48 | 3.1394 | 3.1461 |
| 96 | 3.1410 | 3.1427 |

The two columns close in on $\pi$ from below and above. This idea, trapping a curved quantity between straight ones
that get closer and closer, is the seed of calculus.

### What kind of number $\pi$ is

$\pi$ is **irrational**: it cannot be written as a fraction of two whole numbers, and its decimals never end and never
fall into a repeating pattern. Johann Lambert proved this in 1761. So any fraction is only an approximation:

- $\dfrac{22}{7} = 3.142857\ldots$, too big by about 0.0013. It is Archimedes' upper bound.
- $\dfrac{355}{113} = 3.1415929\ldots$, too big by less than 0.0000003. The Chinese mathematician Zu Chongzhi found
  it about 1500 years ago.

For most work, use the $\pi$ key on a calculator, or 3.14. Better still, keep $\pi$ as a symbol and give an **exact**
answer like $10\pi$ cm, rounding only at the very end.

<figure class="play" data-play="area" data-shape="circle"><span class="ai-tag">AI-created</span><figcaption><b>A circle.</b> Its area and its distance round both come from π.</figcaption></figure>

## Worked examples

**1. A circle from its radius.** Radius 7 cm: $C = 2\pi \times 7 = 14\pi \approx 43.98$ cm.

**2. Going backwards.** A tree trunk is 2.5 m round. How thick is it?
$d = \dfrac{C}{\pi} = \dfrac{2.5}{\pi} \approx 0.80$ m.

**3. The rope round Mars.** Let the planet's radius be $r$. The rope's length is $2\pi r$. Add 1 m and the new rope
makes a circle of radius $r + g$, where $g$ is the gap:

1. $2\pi(r + g) = 2\pi r + 1$.
2. Multiply out: $2\pi r + 2\pi g = 2\pi r + 1$.
3. Take $2\pi r$ from both sides: $2\pi g = 1$, so $g = \dfrac{1}{2\pi} \approx 0.159$ m, about 16 cm.

The radius $r$ disappeared. The gap is the same for a football, for Mars and for the Sun. Every extra metre of
circumference adds the same $\dfrac{1}{2\pi}$ m of radius, because $C$ and $r$ grow in proportion.

**4. The equator of Mars.** Mars's equatorial radius is about 3396 km. $C = 2\pi \times 3396 \approx 21\,340$ km,
a little over half of Earth's 40 000 km.

**5. Phobos's orbit.** The moon Phobos circles Mars about 9376 km from Mars's centre, once every 7 hours 39 minutes,
which is 7.65 hours.

1. One orbit: $C = 2\pi \times 9376 \approx 58\,900$ km.
2. Speed: $58\,900 \div 7.65 \approx 7700$ km per hour, a little over 2 km every second.

**6. A running track.** A track is a rectangle 80 m long with a semicircle of diameter 60 m on each end. The two
semicircles make one whole circle: $60\pi \approx 188.5$ m. Add the two straights: $160 + 188.5 = 348.5$ m round.

## Try it

1. Find the circumference of a circle of diameter 10 m, exactly and to one decimal place.
2. A coin has radius 1.2 cm. Find its circumference to one decimal place.
3. A circle has circumference 50 cm. Find its diameter and radius to two decimal places.
4. A bicycle wheel is 70 cm across. How many turns does it make in 1 km?
5. How far is $\dfrac{22}{7}$ from $\pi$? And $\dfrac{355}{113}$?
6. Find the perimeter of a semicircle of radius 5 cm (remember the straight edge).
7. Explain why a regular hexagon drawn inside a circle of radius $r$ has perimeter exactly $6r$.
8. Harder: a rope runs round Earth's equator. It is lifted so that it floats 1 m above the ground everywhere. How much
   longer is it now than before?

??? note "Answers"
    1. $C = \pi \times 10 = 10\pi \approx 31.4$ m.
    2. $C = 2\pi \times 1.2 = 2.4\pi \approx 7.5$ cm.
    3. $d = \dfrac{50}{\pi} \approx 15.92$ cm, $r = \dfrac{25}{\pi} \approx 7.96$ cm.
    4. One turn: $70\pi \approx 219.9$ cm. 1 km $= 100\,000$ cm. Turns: $100\,000 \div 219.9 \approx 454.7$, so about
       455 turns.
    5. $\dfrac{22}{7} - \pi \approx 3.142857 - 3.141593 = 0.001264$. $\dfrac{355}{113} - \pi \approx 0.00000027$.
    6. Half the circle: $\tfrac12 \times 2\pi \times 5 = 5\pi \approx 15.71$ cm. Plus the diameter, 10 cm. Total
       $5\pi + 10 \approx 25.71$ cm.
    7. Join each corner to the centre: six triangles, each with two sides $r$ and a 60° angle between them. Such a
       triangle is equilateral, so each side of the hexagon is $r$, and six of them make $6r$.
    8. The radius grows by 1 m, so the circumference grows by $2\pi \times 1 \approx 6.28$ m, whatever the size of
       Earth. (The same reasoning as worked example 3, backwards.)

## Common mistake

**Using the radius in $C = \pi d$.** $\pi$ times the **radius** gives only half the circumference. Either use $\pi d$
or $2\pi r$, and check which one the question gives you.

**Thinking $\pi$ equals 3.14 or $\dfrac{22}{7}$.** Both are approximations. $\pi$ is not any fraction. Keep it as $\pi$
until the end of a calculation, then round once.

## Where it leads

- Previous lesson: [Distance and midpoint](03-distance-midpoint.md).
- Next lesson: [Area of a circle, sectors and arcs](05-circle-area-sectors.md).
- Why scaling keeps ratios fixed: [level 5, dilations](../level-5/04-dilations-scale-drawings.md). Radians, where
  $\pi$ becomes an angle: [level 8](../level-8/index.md).
- What irrational numbers are: [Numbers](../../numbers/index.md). Squeezing a number between two others that close in
  on it: [Infinity](../../infinity/index.md).
- Archimedes' squeeze grown up is the limit and the integral:
  [MAT137 Unit 2: limits](../../../uoft/MAT137/unit02.md), and the length of curves in
  [MAT137 Unit 10](../../../uoft/MAT137/unit10.md).
- This level: [Level 6: Pythagoras and circles](index.md).
