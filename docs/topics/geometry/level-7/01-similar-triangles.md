---
title: "Similar triangles and scale factors"
---

# Similar triangles and scale factors

*Geometry · level 7, lesson 1 of 7*

## A question to start

You build a cube from 1 cm sugar cubes: 1 cube. Now build a cube twice as wide, twice as deep and twice as tall. How
many sugar cubes does it take? Not 2, but 8. And to wrap it in paper you need not twice as much paper, but 4 times
as much.

The scientist Galileo wrote about this nearly 400 years ago, and used it to explain why an animal cannot simply be
scaled up into a giant. Make a person 10 times taller in every direction and their weight grows 1000 times, but the
thickness of their bones (the area you see if you slice through a bone) grows only 100 times. Each square centimetre
of bone would have to carry 10 times the load. Giants of our shape would break their own legs.

Everything in this lesson grows out of one idea: what happens to lengths, areas and volumes when a shape is scaled.

## The idea

### Similar shapes and the scale factor

Two shapes are **similar** when one is an exact enlargement (or reduction) of the other: same shape, maybe a
different size, maybe turned or flipped. A photo and a bigger print of it are similar. A model rover and the real
rover are similar, if the model is made carefully.

In two similar shapes, every length in the big one is the **same number of times** the matching length in the small
one. That number is called the **scale factor**, written $k$. If $k = 3$, every side, every diagonal, every height
is 3 times as long. If $k = \tfrac12$, every length is halved.

Angles do **not** change under scaling. A right angle in a photo is still a right angle in the poster. Scaling
stretches distances, not turns.

When $k = 1$, the shapes are exactly the same size and shape. Such shapes are called **congruent**.

### Matching the right parts

For triangles, we name the matching corners in the same order. Writing $\triangle ABC \sim \triangle DEF$ (the sign
$\sim$ means "is similar to") promises that $A$ matches $D$, $B$ matches $E$ and $C$ matches $F$. Then

$$\frac{DE}{AB} = \frac{EF}{BC} = \frac{DF}{AC} = k$$

The order of letters is not decoration. It tells you which side goes with which.

### Three tests for similar triangles

You do not have to check all three angles and all three sides. Any one of these is enough.

- **AA (angle, angle).** Two angles of one triangle equal two angles of the other. The third angles then match too,
  because the angles of each triangle add up to 180°.
- **SSS (side, side, side).** All three pairs of matching sides are in the same ratio.
- **SAS (side, angle, side).** Two pairs of sides are in the same ratio, and the angles **between** them are equal.

AA is the one used most, because angles are often easy to spot: a shared angle, a right angle, parallel lines.

### Why AA really works

Why should equal angles force the sides into the same ratio? Here is the reason, which is over 2000 years old (it
is in Euclid's *Elements*, Book VI).

Slide the small triangle into a corner of the big one so that the shared angle sits at $A$. Because the angles at
$B$ and at $D$ are equal, the line $DE$ is parallel to $BC$ (equal corresponding angles mean parallel lines).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 210" role="img" aria-label="A big triangle ABC with a smaller triangle ADE in its top corner. D is on AB, E is on AC, and DE is parallel to BC">
  <polygon points="150,20 30,190 290,190" fill="#9cc9ea" opacity="0.35" stroke="currentColor" stroke-width="2"/>
  <polygon points="150,20 102,88 206,88" fill="#eea66f" opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <g font-size="15" fill="currentColor">
    <text x="144" y="14">A</text><text x="14" y="200">B</text><text x="296" y="200">C</text>
    <text x="84" y="92">D</text><text x="212" y="92">E</text>
  </g>
  <g font-size="12" fill="currentColor">
    <text x="104" y="54">4</text><text x="52" y="146">6</text><text x="148" y="82">5</text>
  </g>
</svg>
</div>

Now we show $\dfrac{AD}{AB} = \dfrac{AE}{AC}$, using areas.

1. Triangles $DBE$ and $DCE$ share the base $DE$. Their tips $B$ and $C$ lie on a line parallel to $DE$, so they
   are the same height above $DE$. Same base and same height means **the same area**.
2. Triangles $ADE$ and $ABE$ have the same height (measured from $E$ down to the line $AB$). So their areas are in
   the ratio of their bases: $\dfrac{\text{area } ADE}{\text{area } ABE} = \dfrac{AD}{AB}$.
3. In the same way, measuring heights from $D$ to the line $AC$: $\dfrac{\text{area } ADE}{\text{area } ADC} = \dfrac{AE}{AC}$.
4. But area $ABE$ = area $ADE$ + area $DBE$, and area $ADC$ = area $ADE$ + area $DCE$. By step 1 these two totals
   are equal. So the two fractions in steps 2 and 3 have the same top and the same bottom, and
   $\dfrac{AD}{AB} = \dfrac{AE}{AC}$.

A similar argument on another corner gives the third side too. So equal angles really do force proportional sides.
This fact, that a line parallel to one side cuts the other two sides in the same ratio, is sometimes called the
**side-splitter** or **intercept theorem**.

### Areas scale by k², volumes by k³

Take a 1 by 1 square and scale it by $k = 3$. It becomes a 3 by 3 square, which holds $3 \times 3 = 9$ of the
original squares. Any flat shape can be filled (as closely as you like) with tiny squares, and every one of them
grows 9 times. So **every area grows by $k^2$**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 140" role="img" aria-label="A one by one square, a two by two square made of four small squares, and a three by three square made of nine small squares">
  <g stroke="currentColor" stroke-width="1.5">
    <rect x="20" y="96" width="30" height="30" fill="#eea66f"/>
    <g fill="#9cc9ea">
      <rect x="80" y="66" width="30" height="30"/><rect x="110" y="66" width="30" height="30"/>
      <rect x="80" y="96" width="30" height="30"/><rect x="110" y="96" width="30" height="30"/>
    </g>
    <g fill="#7ccf9a">
      <rect x="180" y="36" width="30" height="30"/><rect x="210" y="36" width="30" height="30"/><rect x="240" y="36" width="30" height="30"/>
      <rect x="180" y="66" width="30" height="30"/><rect x="210" y="66" width="30" height="30"/><rect x="240" y="66" width="30" height="30"/>
      <rect x="180" y="96" width="30" height="30"/><rect x="210" y="96" width="30" height="30"/><rect x="240" y="96" width="30" height="30"/>
    </g>
  </g>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="35" y="26">k = 1</text><text x="35" y="42">area 1</text>
    <text x="110" y="26">k = 2</text><text x="110" y="42">area 4</text>
    <text x="312" y="70">k = 3</text><text x="312" y="88">area 9</text>
  </g>
</svg>
</div>

The same reasoning with tiny cubes: a 1 by 1 by 1 cube scaled by 3 becomes $3 \times 3 \times 3 = 27$ cubes. So
**every volume grows by $k^3$**. In a table:

| What you measure | Example | Grows by |
| --- | --- | --- |
| Length (1 dimension) | side, perimeter, height, radius | $k$ |
| Area (2 dimensions) | surface, paint, paper, land | $k^2$ |
| Volume (3 dimensions) | water, sugar, weight of solid material | $k^3$ |

That is the whole of Galileo's argument about giants: weight is a volume ($k^3$), bone strength is an area ($k^2$).

## Worked examples

**1. The side-splitter.** In the drawing above, $AD = 4$, $DB = 6$ and $DE = 5$, with $DE$ parallel to $BC$. Find
$BC$.

1. $DE \parallel BC$, so the angles at $D$ and $B$ are equal (corresponding angles), and the angle at $A$ is shared.
   By AA, $\triangle ADE \sim \triangle ABC$.
2. Matching sides: $AD$ with $AB$. Careful: $AB = AD + DB = 4 + 6 = 10$, not 6.
3. Scale factor from small to big: $k = \dfrac{AB}{AD} = \dfrac{10}{4} = 2.5$.
4. $BC = 2.5 \times DE = 2.5 \times 5 = 12.5$.

**2. A map.** On a map with scale 1 : 50 000, a park covers 6 cm². What is its real area?

1. Lengths scale by $k = 50\,000$, so areas scale by $k^2 = 2\,500\,000\,000$.
2. Real area $= 6 \times 2\,500\,000\,000 = 15\,000\,000\,000$ cm².
3. A kilometre is $100\,000$ cm, so a square kilometre is $100\,000^2 = 10\,000\,000\,000$ cm².
4. The park is $15\,000\,000\,000 \div 10\,000\,000\,000 = 1.5$ km².

A common slip is to multiply by $50\,000$ only, which would give an area 50 000 times too small.

**3. Two jars.** Two jars are similar. The small one is 12 cm tall and holds 400 mL. The big one is 18 cm tall. How
much does it hold, and how much more label does it need?

1. $k = \dfrac{18}{12} = 1.5$.
2. Volume: $400 \times 1.5^3 = 400 \times 3.375 = 1350$ mL.
3. Label (an area): $1.5^2 = 2.25$ times as much.

Notice how a jar only 1.5 times as tall holds more than 3 times as much.

**4. Going backwards from areas.** Two similar triangles have areas 20 cm² and 45 cm². The small one has a side of
6 cm. Find the matching side of the big one.

1. Area ratio $= \dfrac{45}{20} = 2.25 = k^2$.
2. So $k = \sqrt{2.25} = 1.5$.
3. The matching side is $6 \times 1.5 = 9$ cm.

**5. Shadows.** A 2 m stick casts a 1.5 m shadow at the same moment that a tower casts a 27 m shadow. The sun's
rays come in at the same angle everywhere nearby, and both stand upright, so the two right triangles are similar by
AA. Height of tower $= 27 \times \dfrac{2}{1.5} = 36$ m.

## Try it

1. Are the triangles with sides 3, 4, 5 and 7.5, 10, 12.5 similar? If so, what is the scale factor?
2. A pentagon has perimeter 20 cm and area 15 cm². It is enlarged with scale factor 3. Find the new perimeter and
   the new area.
3. A model car is built at scale 1 : 24. The model is 18 cm long. How long is the real car? The model needs 30 mL of
   paint; how much does the real car need, for the same thickness of paint?
4. In triangle $ABC$, $D$ is on $AB$ and $E$ is on $AC$ with $DE \parallel BC$. $AD = 5$, $AB = 15$ and $BC = 12$.
   Find $DE$.
5. Two similar cones have volumes 54 cm³ and 250 cm³. The small one is 9 cm tall. How tall is the big one, and what
   is the ratio of their surface areas?
6. In a right triangle, the line from the right angle that meets the hypotenuse at 90° (the **altitude**) splits the
   hypotenuse into pieces 4 and 9. Show that the two small triangles are similar, and find the altitude.
7. Scale a person by 10 in every direction. By what factor does the pressure on each square centimetre of their
   bones go up?

??? note "Answers"
    1. $\dfrac{7.5}{3} = \dfrac{10}{4} = \dfrac{12.5}{5} = 2.5$. All three ratios agree, so they are similar by SSS,
       with $k = 2.5$.
    2. Perimeter is a length: $20 \times 3 = 60$ cm. Area: $15 \times 3^2 = 135$ cm².
    3. Length: $18 \times 24 = 432$ cm, that is 4.32 m. Paint covers an area: $30 \times 24^2 = 30 \times 576 = 17\,280$
       mL, about 17.3 litres.
    4. By AA (shared angle at $A$, corresponding angles at $D$ and $B$) the triangles are similar with
       $k = \dfrac{AD}{AB} = \dfrac{5}{15} = \dfrac13$ from big to small. $DE = \dfrac13 \times 12 = 4$.
    5. Volume ratio $\dfrac{250}{54} = \dfrac{125}{27} = k^3$, so $k = \dfrac53$. Height $9 \times \dfrac53 = 15$ cm.
       Surface areas: $k^2 = \dfrac{25}{9}$.
    6. Call the big triangle's acute angles $x$ and $y$, with $x + y = 90°$. The altitude makes a right angle with
       the hypotenuse. In the small triangle that contains angle $x$, the third angle is $90° - x = y$; in the other
       small triangle, the one that contains $y$, the third angle is $x$. So both small triangles have angles
       $x$, $y$, $90°$: similar by AA. Matching the sides around the altitude $h$: $\dfrac{h}{4} = \dfrac{9}{h}$,
       so $h^2 = 36$ and $h = 6$.
    7. Weight is a volume: $\times 1000$. Bone cross-section is an area: $\times 100$. Pressure is weight per area:
       $1000 \div 100 = 10$ times as much.

## Common mistake

**Scaling area or volume by $k$.** Doubling the side of a square does not double its area; it multiplies it by 4.
Before you use a scale factor, ask "how many dimensions does this quantity have?" and use $k$, $k^2$ or $k^3$.

**Matching the wrong sides.** In nested triangles, the matching side of $AD$ is the **whole** side $AB$, not the
leftover piece $DB$. Redraw the two triangles separately, the same way round, before you write ratios.

## Where it leads

- Next lesson: [Sine, cosine and tangent](02-sin-cos-tan.md), where similar right triangles give every angle its
  own ratios.
- The level page: [Level 7: Similarity and trigonometry](index.md). Previous lesson (end of level 6):
  [Slope and the equation of a line](../level-6/06-slope-line-equation.md).
- Scale factors in maps, models and rates: [Ratio and rates](../../ratio/index.md) and
  [Measurement](../../measurement/index.md).
- Growth by $k$, $k^2$, $k^3$ is the start of thinking about powers and dimension:
  [Patterns and sequences](../../patterns/index.md).
