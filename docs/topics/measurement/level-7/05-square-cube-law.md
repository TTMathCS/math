---
title: "The square-cube law in nature"
---

# The square-cube law in nature

*Measurement · level 7, lesson 5 of 6*

## A question to start

In films, giant ants and spiders the size of buses stalk through cities. A mouse can fall a long way, shake itself,
and run off. Elephants have legs like pillars, while a gazelle has legs like sticks. Small birds and shrews must eat
almost all day to stay warm.

All of these facts have the same cause, and it is a fact about **measurement**, not biology: when a shape grows,
its length, its area and its volume do not grow at the same rate. Galileo explained it in 1638, in his book *Two New
Sciences*. It is called the **square-cube law**.

## The idea

### Scaling a shape

To **scale** a shape by a **scale factor** $k$ means to multiply every length in it by $k$: height, width, the length
of every edge, the distance round every curve. The new shape is **similar** to the old one (same shape, different
size), as in Geometry's [similar triangles](../../geometry/level-7/01-similar-triangles.md).

Take $k = 2$ and a 1 cm cube.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 150" role="img" aria-label="A small square of side one, and a square of side two made of four small squares; then a small cube and a cube of side two made of eight small cubes">
  <rect x="20" y="100" width="30" height="30" fill="#eea66f" stroke="currentColor"/>
  <g fill="#eea66f" stroke="currentColor">
    <rect x="70" y="70" width="30" height="30"/><rect x="100" y="70" width="30" height="30"/>
    <rect x="70" y="100" width="30" height="30"/><rect x="100" y="100" width="30" height="30"/>
  </g>
  <text x="75" y="55" font-size="13" text-anchor="middle" fill="currentColor">area × 4</text>
  <g stroke="currentColor" stroke-width="1.2">
    <polygon points="200,130 230,130 230,100 200,100" fill="#9cc9ea"/>
    <polygon points="200,100 230,100 242,88 212,88" fill="#7ccf9a"/>
    <polygon points="230,130 242,118 242,88 230,100" fill="#9cc9ea" opacity="0.7"/>
    <polygon points="280,130 340,130 340,70 280,70" fill="#9cc9ea"/>
    <polygon points="280,70 340,70 364,46 304,46" fill="#7ccf9a"/>
    <polygon points="340,130 364,106 364,46 340,70" fill="#9cc9ea" opacity="0.7"/>
    <line x1="310" y1="70" x2="310" y2="130"/><line x1="280" y1="100" x2="340" y2="100"/>
    <line x1="292" y1="58" x2="352" y2="58"/><line x1="310" y1="70" x2="334" y2="46"/>
    <line x1="352" y1="58" x2="352" y2="118"/><line x1="340" y1="100" x2="364" y2="76"/>
  </g>
  <text x="322" y="30" font-size="13" text-anchor="middle" fill="currentColor">volume × 8</text>
</svg>
</div>

- Each edge: 2 times as long.
- Each face: $2 \times 2 = 4$ times the area. The whole surface: $6 \times 4 = 24$ cm² instead of 6 cm², also 4 times.
- The volume: $2 \times 2 \times 2 = 8$ cm³ instead of 1 cm³: 8 times.

### Why it works for every shape

A cube is easy, but what about an elephant? Here is the reason it works for any shape.

**Area.** Cover a flat shape (or the skin of a solid) with a fine grid of tiny squares. When you scale by $k$, every
tiny square becomes a square $k$ times as wide and $k$ times as tall, with $k^2$ times the area. The number of squares
stays the same. So the total area is multiplied by $k^2$. (The bits at the curved edges get smaller and smaller as the
grid gets finer, so they do not spoil it.)

**Volume.** Fill a solid with tiny cubes. Each becomes a cube with $k^3$ times the volume, and there are just as many.
So the volume is multiplied by $k^3$.

$$\text{lengths} \times k, \qquad \text{areas} \times k^2, \qquad \text{volumes} \times k^3.$$

This is the square-cube law: **area grows as the square of the scale, volume as the cube.** Since $k^3$ outruns $k^2$
when $k > 1$, big things have much more volume compared with their surface than small things.

### Surface area to volume ratio

Divide surface area by volume. For a cube of side $s$:

$$\frac{\text{surface area}}{\text{volume}} = \frac{6 s^2}{s^3} = \frac{6}{s}.$$

| Cube side | Surface area | Volume | SA ÷ V |
| --- | --- | --- | --- |
| 1 cm | 6 cm² | 1 cm³ | 6 per cm |
| 2 cm | 24 cm² | 8 cm³ | 3 per cm |
| 10 cm | 600 cm² | 1000 cm³ | 0.6 per cm |

For a sphere of radius $r$ it is $\dfrac{4\pi r^2}{\tfrac43 \pi r^3} = \dfrac{3}{r}$. For any shape, scaling by $k$
divides the ratio by $k$ (area $\times k^2$ over volume $\times k^3$). **Small things have a lot of surface for their
size; large things have little.** Notice the ratio has a unit (per cm): it is not a pure number, so comparing it only
makes sense between objects measured in the same unit.

### Strength versus weight: why giants break

The weight of an animal depends on how much of it there is: its **volume**. The strength of a bone depends on how
much bone there is to break across: the area of its **cross-section**, the shape you see if you cut straight through
it.

Scale a mouse up by $k = 10$, keeping its shape:

- its weight goes up by $10^3 = 1000$;
- its bones' cross-sections, and so their strength, go up by $10^2 = 100$.

Each square centimetre of bone now carries $1000 \div 100 = 10$ times the load. Scale by $k$ and the load on each bit
of bone goes up by $k^3 \div k^2 = k$. Make it big enough and its legs snap under its own weight. A spider the size of a
bus could not stand up (and could not breathe either: insects and spiders take in air through their surface, and
there would be far too little surface for all that volume).

**Elephants answer this** by not keeping the shape. Suppose one animal is twice as long as another. Its weight is
about $2^3 = 8$ times as much. To keep the load per square centimetre of bone the same, the leg bones need 8 times the
cross-section, which means a diameter $\sqrt 8 \approx 2.83$ times as big, not just 2 times. Big animals have
**relatively** thicker legs. Galileo drew exactly this: a small bone and a bone for an animal three times as large,
much fatter than three times.

### Heat: why small animals eat so much

A warm-blooded animal makes heat throughout its body (roughly in proportion to its volume) and loses heat through its
skin (roughly in proportion to its surface). A small animal has a lot of skin for its volume, so it loses heat fast and
must burn food fast to keep warm. That is why a shrew or a hummingbird eats so much for its size, and why large animals
do better in the cold. A large animal in a hot place has the opposite problem: it is hard to get rid of heat. An
elephant's huge thin ears add surface and help it cool.

The same law works in a kitchen. Cut a potato into small pieces and it cooks much faster: the heat gets in through the
surface, and small pieces have more surface for their volume. Crushed ice melts faster than one big block.

It works for planets too. A planet stores the heat from its formation in its volume and loses it through its surface.
Mars's radius is about 0.532 of Earth's, so its surface-to-volume ratio ($3/r$) is about $1 \div 0.532 \approx 1.9$
times Earth's. This is one reason Mars cooled inside faster than Earth.

### Falling: why mice survive

When something falls, air pushes back on its **surface** while gravity pulls on its **mass** (volume). A small animal
has much more surface per kilogram, so air slows it a lot and it hits the ground gently. The biologist J. B. S. Haldane
made this point vividly in his 1926 essay *On Being the Right Size*: a mouse dropped down a deep mine shaft can walk
away, while for larger animals the same fall is fatal. Dust floats for a long time for the same reason: tiny grains are
all surface. On Mars, fine dust raised by storms stays high in the thin air for weeks.

<figure class="play" data-play="solid" data-shape="box" data-mode="scale"><span class="ai-tag">AI-created</span><figcaption><b>The square-cube law.</b> Double every length: four times the surface, eight times the volume.</figcaption></figure>

## Worked examples

**1. A model ship.** A 1 : 50 model of a ship is made from the same materials. The model needs 0.2 L of paint and
has a mass of 1.2 kg. Estimate the real ship's paint and mass.

1. Scale factor from model to ship: $k = 50$.
2. Paint covers area: $0.2 \times 50^2 = 0.2 \times 2500 = 500$ L.
3. Mass follows volume: $1.2 \times 50^3 = 1.2 \times 125\,000 = 150\,000$ kg, that is 150 tonnes. (A real ship is not
   solid like a model, so this is only a rough guide; the point is the factor of $k^3$.)

**2. Finding the scale from an area.** Two similar jugs have surface areas 180 cm² and 405 cm². The small one holds
0.4 L. How much does the big one hold?

1. Area ratio: $405 \div 180 = 2.25 = k^2$, so $k = 1.5$.
2. Volume ratio: $k^3 = 1.5^3 = 3.375$.
3. Big jug: $0.4 \times 3.375 = 1.35$ L.

**3. Chopping a cube.** A 4 cm cube of cheese is cut into 1 cm cubes. How does the surface area change?

1. Before: $6 \times 4^2 = 96$ cm².
2. After: $4^3 = 64$ small cubes, each with $6$ cm², total $384$ cm².
3. Four times as much surface: $k = \tfrac14$ for each piece divides SA ÷ V by $\tfrac14$, that is, multiplies it by 4.

**4. Stress on a giant.** A statue of a person is scaled up by $k = 5$, using the same stone. By what factor does the
pressure on the ankles (weight ÷ cross-section) change?

Weight $\times 5^3 = 125$, ankle area $\times 5^2 = 25$, so pressure $\times 125 \div 25 = 5$. Sculptors of big
statues must thicken ankles or add supports, or the stone cracks.

## Try it

1. A shape is scaled by $k = 3$. By what factor are its perimeter, its area and its volume multiplied?
2. A balloon's radius doubles. How much more helium does it hold, and how much more rubber skin must stretch over it?
3. Find the surface-to-volume ratio of a cube with side 5 cm, and of one with side 0.5 cm.
4. A 1 : 5 model of a bronze statue has a mass of 4 kg. Estimate the full statue's mass.
5. Two similar boxes have volumes 64 cm³ and 1000 cm³. Find the ratio of their surface areas.
6. Use the square-cube law to explain why babies need to be wrapped up warmly more than adults.
7. An animal is 3 times as long as a smaller, similar-shaped one. To keep the load per unit area of bone the same,
   how many times as thick (in diameter) must its leg bones be? How does that compare with 3?
8. A sphere of ice of radius 2 cm melts in 20 minutes. Assuming melting speed depends on the surface, roughly how long
   would eight spheres of radius 1 cm take (same total volume)? Explain.

??? note "Answers"
    1. Perimeter $\times 3$, area $\times 9$, volume $\times 27$.
    2. Helium (volume) $\times 2^3 = 8$; skin (area) $\times 2^2 = 4$.
    3. $6 \div 5 = 1.2$ per cm, and $6 \div 0.5 = 12$ per cm: ten times as much surface for its size.
    4. $4 \times 5^3 = 4 \times 125 = 500$ kg.
    5. Volume ratio $1000 \div 64 = 15.625 = k^3$, so $k = 2.5$ (since $\sqrt[3]{64} = 4$ and $\sqrt[3]{1000} = 10$).
       Area ratio $k^2 = 6.25$, that is, $4^2 : 10^2 = 16 : 100$.
    6. A baby is smaller, so it has more skin per unit of body volume; it loses heat through its skin faster compared
       with the heat its body makes.
    7. Weight $\times 3^3 = 27$, so the bone cross-section must be $\times 27$, and the diameter
       $\times \sqrt{27} \approx 5.2$. That is much more than 3: the legs must be relatively about
       $5.2 \div 3 \approx 1.7$ times as stout.
    8. Each small sphere has radius half as big, so SA ÷ V is twice as big: total surface
       $8 \times 4\pi(1)^2 = 32\pi$ cm² against $4\pi(2)^2 = 16\pi$ cm², twice as much for the same ice. A rough guess
       is about half the time, around 10 minutes. (Real melting is more complicated, since the spheres shrink as they
       melt, but in this simple model each sphere's radius shrinks at a steady rate, and a radius half as big
       takes half as long.)

## Common mistake

**Scaling everything by $k$.** A model built 1 : 10 does not need 10 times the paint for the real thing; it needs
100 times. It does not weigh 10 times as much; about 1000 times. First ask: is this quantity a length, an area or a
volume?

**Forgetting that the ratio $6/s$ has units.** "A cube has SA ÷ V = 6" is only true for $s = 1$ in whatever unit you
use. Compare surface-to-volume ratios only in the same units.

## Where it leads

- Back: [Dimensional analysis](04-dimensional-analysis.md) · Next: [Fermi estimates](06-fermi-estimates.md), where
  scaling and rough numbers answer questions nobody has measured.
- [Level 7 page](index.md) · [Measurement topic page](../index.md)
- The proof for similar figures: [Similar triangles and scale factors](../../geometry/level-7/01-similar-triangles.md).
- Converting area and volume units is the same law with $k = 100$ or $1000$:
  [Converting area and volume units](../level-5/05-area-volume-units.md).
- Ratios and proportional reasoning: [Ratio](../../ratio/index.md); power laws as functions: [Algebra](../../algebra/index.md).
