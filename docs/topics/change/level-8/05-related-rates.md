---
title: "Related rates"
---

# Related rates

*Change and motion · level 8, lesson 5 of 7*

## A question to start

A ladder 5 m long leans against a wall. Someone pulls the bottom of the ladder away from the wall at a steady 1 m per
second, and the top slides down the wall.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 260" role="img" aria-label="A ladder 5 metres long leaning against a wall. Its foot is x metres from the wall and moving away at 1 metre per second; its top is y metres up the wall and sliding down at an unknown rate.">
  <polygon points="10,225.2 35.5,225.2 35.5,10 10,10" fill="#9cc9ea" fill-opacity="0.5" stroke="none"/>
  <line x1="35.5" y1="225.2" x2="35.5" y2="10" stroke="currentColor" stroke-width="2"/>
  <line x1="10" y1="225.2" x2="290" y2="225.2" stroke="currentColor" stroke-width="2"/>
  <line x1="162.7" y1="225.2" x2="35.5" y2="59.7" stroke="#eea66f" stroke-width="5"/>
  <circle cx="162.7" cy="225.2" r="4" fill="currentColor"/>
  <circle cx="35.5" cy="59.7" r="4" fill="currentColor"/>
  <text x="107.1" y="140.4" font-size="12" text-anchor="start" fill="currentColor">5 m</text>
  <text x="99.1" y="241.2" font-size="12" text-anchor="middle" fill="currentColor">x</text>
  <text x="43.5" y="163.1" font-size="12" text-anchor="start" fill="currentColor">y</text>
  <line x1="175.5" y1="210.7" x2="217.9" y2="210.7" stroke="currentColor" stroke-width="1.5"/>
  <line x1="217.9" y1="210.7" x2="207.3" y2="204.5" stroke="currentColor" stroke-width="1.5"/>
  <line x1="217.9" y1="210.7" x2="207.3" y2="216.9" stroke="currentColor" stroke-width="1.5"/>
  <text x="222.1" y="214.7" font-size="12" text-anchor="start" fill="currentColor">1 m/s</text>
  <line x1="48.2" y1="51.4" x2="48.2" y2="92.8" stroke="currentColor" stroke-width="1.5"/>
  <line x1="48.2" y1="92.8" x2="43.1" y2="82.4" stroke="currentColor" stroke-width="1.5"/>
  <line x1="48.2" y1="92.8" x2="53.3" y2="82.4" stroke="currentColor" stroke-width="1.5"/>
  <text x="54.5" y="72.1" font-size="15" text-anchor="start" fill="currentColor">?</text>
  <text x="39.7" y="26.4" font-size="12" text-anchor="start" fill="currentColor">wall</text>
</svg>
</div>

The bottom moves steadily. **Does the top slide down steadily too?**

It does not. When the bottom is 3 m out, the top is falling at 0.75 m/s. When the bottom is 4 m out, at about 1.33
m/s. At 4.8 m out, at about 3.4 m/s. And as the top nears the ground, the formula says its speed grows **without
limit**. The bottom's speed never changes, yet the top's speed explodes. This lesson shows how to find such speeds,
and why this one blows up.

## The idea

### Rates that are tied together

In many situations several quantities change at once, and they are linked by an equation that holds at every
moment. For the ladder, with the bottom $x$ m from the wall and the top $y$ m up the wall, Pythagoras says

$$x^2 + y^2 = 25$$

at every instant. Both $x$ and $y$ are functions of time $t$. Because the equation is true at **every** moment, the two
sides change at the same rate, so we can differentiate both sides with respect to $t$. This ties the rates
$\frac{dx}{dt}$ and $\frac{dy}{dt}$ together: they are **related rates**. If we know one, we can find the other.

### Differentiating with respect to time

The one new skill is to differentiate an expression in $x$ with respect to $t$, when $x$ itself depends on $t$. This
is the chain rule: the outside is the expression, the inside is $x(t)$.

$$\frac{d}{dt}\left(x^2\right) = 2x\,\frac{dx}{dt}, \qquad \frac{d}{dt}\left(r^3\right) = 3r^2\,\frac{dr}{dt}, \qquad \frac{d}{dt}(xy) = \frac{dx}{dt}\,y + x\,\frac{dy}{dt}.$$

In words: differentiate as usual, then multiply by the rate of whatever was inside. (This is the same implicit
differentiation that proved the power rule for roots in [lesson 1](01-product-quotient-chain.md).) A constant, such as
the ladder's length, has rate 0.

### The method

1. **Draw a picture.** Label the quantities that change with letters and the quantities that stay fixed with numbers.
2. **Write what you know and what you want**, as rates: "$\frac{dx}{dt} = 1$, find $\frac{dy}{dt}$ when $x = 3$".
3. **Find an equation** linking the quantities (Pythagoras, a volume formula, similar triangles...).
4. **Differentiate both sides with respect to $t$.**
5. **Now substitute** the values at the moment you care about, and solve for the unknown rate.
6. **Interpret**: units, and what the sign means.

Step 5 must come after step 4. "When $x = 3$" describes one instant; $x$ is not 3 all the time. If you put $x = 3$ in
before differentiating, you would be differentiating a constant and get 0 for its rate, which is false.

## Worked examples

**1. The ladder.** Find how fast the top falls when the bottom is 3 m from the wall.

1. Bottom $x$, top $y$, ladder 5. Know $\frac{dx}{dt} = 1$ m/s. Want $\frac{dy}{dt}$ when $x = 3$.
2. Equation: $x^2 + y^2 = 25$.
3. Differentiate with respect to $t$: $2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$, so
   $\frac{dy}{dt} = -\frac{x}{y}\frac{dx}{dt}$.
4. When $x = 3$: $y = \sqrt{25 - 9} = 4$, and $\frac{dy}{dt} = -\frac{3}{4} \times 1 = -0.75$ m/s.
5. The top falls at 0.75 m/s (the minus sign means $y$ is decreasing).

Now the opening question. The formula $\frac{dy}{dt} = -\frac{x}{y}$ (with $\frac{dx}{dt} = 1$) gives:

| Bottom $x$ (m) | 3 | 4 | 4.8 | 4.99 |
| --- | --- | --- | --- | --- |
| Top $y$ (m) | 4 | 3 | 1.4 | 0.316 |
| Top's speed (m/s) | 0.75 | 1.33 | 3.43 | 15.8 |

As $y \to 0$, dividing by a tiny $y$ makes the speed huge. **Why?** Near the end the ladder is almost flat. Pulling the
bottom out by a centimetre barely changes the horizontal distance the ladder spans, so it must drop a long way to
stay 5 m long. In real life the top does not reach infinite speed: it leaves the wall and the ladder falls. The model
breaks when its assumption (top touching the wall) breaks.

**2. The balloon.** Air is pumped into a spherical balloon at 100 cm³ per second. How fast is the radius growing when
the radius is 10 cm?

1. Know $\frac{dV}{dt} = 100$. Want $\frac{dr}{dt}$ when $r = 10$.
2. Equation: $V = \frac43 \pi r^3$.
3. Differentiate: $\frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}$.
4. At $r = 10$: $100 = 4\pi \times 100 \times \frac{dr}{dt}$, so $\frac{dr}{dt} = \frac{1}{4\pi} \approx 0.080$ cm/s.

Look at the factor $4\pi r^2$: it is the **surface area** of the sphere. That makes sense: new air spreads as a thin
layer over the whole surface, so thickness gained = volume added ÷ surface area. As the balloon gets bigger, the same
100 cm³ is spread more thinly, and the radius grows more slowly.

**3. Filling a cone.** A tank is a cone, point down, 6 m deep with a top radius of 2 m. Water is poured in at
2 m³ per minute. How fast is the water level rising when the water is 3 m deep?

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 280" role="img" aria-label="A cone-shaped tank, point down, 6 metres deep with top radius 2 metres. Water fills the bottom part to depth h, with surface radius r; the water forms a smaller cone of the same shape.">
  <polygon points="94.8,143.7 179.7,143.7 137.3,255.1" fill="#9cc9ea" fill-opacity="0.7" stroke="none"/>
  <line x1="52.4" y1="32.3" x2="137.3" y2="255.1" stroke="currentColor" stroke-width="2"/>
  <line x1="222.1" y1="32.3" x2="137.3" y2="255.1" stroke="currentColor" stroke-width="2"/>
  <ellipse cx="137.3" cy="32.3" rx="84.8" ry="8" fill="none" stroke="currentColor" stroke-width="2"/>
  <ellipse cx="137.3" cy="143.7" rx="42.4" ry="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <line x1="137.3" y1="255.1" x2="137.3" y2="32.3" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="137.3" y1="32.3" x2="222.1" y2="32.3" stroke="currentColor" stroke-width="1.2"/>
  <line x1="137.3" y1="143.7" x2="179.7" y2="143.7" stroke="currentColor" stroke-width="1.2"/>
  <text x="179.7" y="20.3" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <text x="158.5" y="135.7" font-size="12" text-anchor="middle" fill="currentColor">r</text>
  <line x1="247.6" y1="255.1" x2="247.6" y2="32.3" stroke="currentColor" stroke-width="1"/>
  <text x="253.6" y="121.4" font-size="12" text-anchor="start" fill="currentColor">6</text>
  <line x1="69.4" y1="255.1" x2="69.4" y2="143.7" stroke="currentColor" stroke-width="1"/>
  <text x="63.4" y="199.4" font-size="12" text-anchor="end" fill="currentColor">h</text>
</svg>
</div>

1. Water depth $h$, water surface radius $r$, volume $V$. Know $\frac{dV}{dt} = 2$. Want $\frac{dh}{dt}$ when $h = 3$.
2. Equation: $V = \frac13 \pi r^2 h$. But it has two changing variables, $r$ and $h$. Similar triangles link them: the
   water is a small cone the same shape as the tank, so $\frac{r}{h} = \frac{2}{6}$, that is $r = \frac{h}{3}$.
3. Substitute: $V = \frac13 \pi \left(\frac{h}{3}\right)^2 h = \frac{\pi h^3}{27}$.
4. Differentiate: $\frac{dV}{dt} = \frac{3\pi h^2}{27}\frac{dh}{dt} = \frac{\pi h^2}{9}\frac{dh}{dt}$.
5. At $h = 3$: $2 = \pi \frac{dh}{dt}$, so $\frac{dh}{dt} = \frac{2}{\pi} \approx 0.64$ m/min.

The level rises quickly at first, when the cone is narrow, and more slowly as it widens: the same 2 m³ spreads over a
bigger surface. (Replacing $r$ by $\frac{h}{3}$ **before** differentiating is fine, because $r = \frac{h}{3}$ is true at
every moment. What you must not substitute early is the value $h = 3$, true at only one moment.)

## Try it

1. A square's side grows at 2 cm/s. How fast is its area growing when the side is 5 cm?
2. A stone dropped in a pond makes a circular ripple whose radius grows at 0.5 m/s. How fast is the area inside the
   ripple growing when the radius is 4 m?
3. A 10 m ladder leans on a wall, and its foot slides away at 0.5 m/s. How fast is the top sliding down when the foot
   is 6 m from the wall?
4. A spherical balloon loses air at 50 cm³/s. How fast is the radius shrinking when it is 5 cm?
5. In worked example 3, how fast is the level rising when the water is only 1.5 m deep? Compare.
6. Two cars leave a crossroads at the same moment: one drives north at 60 km/h, the other east at 80 km/h. How fast is
   the distance between them growing after one hour? After two?
7. A person 1.8 m tall walks away from a 6 m street light at 1.4 m/s. How fast does their shadow get longer? How fast
   does the tip of the shadow move?
8. Explain in one or two sentences, using the formula $\frac{dy}{dt} = -\frac{x}{y}\frac{dx}{dt}$, why the top of the
   sliding ladder speeds up even though the bottom moves steadily.

??? note "Answers"
    1. $A = s^2$, $\frac{dA}{dt} = 2s\frac{ds}{dt} = 2 \times 5 \times 2 = 20$ cm²/s.
    2. $A = \pi r^2$, $\frac{dA}{dt} = 2\pi r\frac{dr}{dt} = 2\pi \times 4 \times 0.5 = 4\pi \approx 12.6$ m²/s.
       (The factor $2\pi r$ is the circumference: the new area is a thin ring.)
    3. $x^2 + y^2 = 100$. At $x = 6$, $y = 8$. $\frac{dy}{dt} = -\frac{x}{y}\frac{dx}{dt} = -\frac68 \times 0.5 = -0.375$
       m/s. The top slides down at 0.375 m/s.
    4. $\frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}$, so $-50 = 4\pi \times 25 \times \frac{dr}{dt}$ and
       $\frac{dr}{dt} = -\frac{1}{2\pi} \approx -0.159$ cm/s. Shrinking at about 0.16 cm/s.
    5. $2 = \frac{\pi (1.5)^2}{9}\frac{dh}{dt} = \frac{\pi}{4}\frac{dh}{dt}$, so $\frac{dh}{dt} = \frac{8}{\pi} \approx 2.55$
       m/min. Four times as fast as at 3 m: half the depth means a quarter of the surface area.
    6. North $y$, east $x$, distance $D$ with $D^2 = x^2 + y^2$, so $D\frac{dD}{dt} = x\frac{dx}{dt} + y\frac{dy}{dt}$.
       After 1 h: $x = 80$, $y = 60$, $D = 100$, so $\frac{dD}{dt} = \frac{80 \times 80 + 60 \times 60}{100} = 100$ km/h.
       After 2 h: $x = 160$, $y = 120$, $D = 200$, and $\frac{dD}{dt} = \frac{12800 + 7200}{200} = 100$ km/h again.
       (The distance is always $100t$, so the rate is always 100.)
    7. Distance from the light $x$, shadow length $s$. Similar triangles: $\frac{s}{1.8} = \frac{x + s}{6}$, so
       $6s = 1.8x + 1.8s$, $4.2s = 1.8x$, $s = \frac37 x$. Then $\frac{ds}{dt} = \frac37 \times 1.4 = 0.6$ m/s. The tip
       is at $x + s$, moving at $1.4 + 0.6 = 2.0$ m/s.
    8. The bottom's rate $\frac{dx}{dt}$ is fixed, but it is multiplied by $\frac{x}{y}$. As the ladder slides, $x$ grows
       and $y$ shrinks, so $\frac{x}{y}$ gets bigger and bigger, and as $y \to 0$ it grows without limit.

## Common mistake

**Substituting the moment's values too early.** If you put $x = 3$ into $x^2 + y^2 = 25$ before differentiating, $x$
becomes a constant and you lose $\frac{dx}{dt}$ completely. Differentiate the general equation first; substitute
last.

**Losing the sign.** A quantity that is shrinking has a **negative** rate. If the balloon loses air,
$\frac{dV}{dt} = -50$, not 50. Getting the sign right is also a useful check that your answer makes sense.

## Where it leads

- Back: [Optimization](04-optimization.md) · Next: [Areas under curves and the fundamental theorem](06-area-fundamental-theorem.md)
- [Level 8 page](index.md) · [Change and motion topic page](../index.md)
- The chain rule that drives all of this: [lesson 1](01-product-quotient-chain.md).
- Similar triangles: [Geometry: similar triangles](../../geometry/level-7/01-similar-triangles.md). Volumes of cones and
  spheres: [Measurement: pyramids and cones](../../measurement/level-6/01-pyramid-cone-volume.md) and
  [spheres](../../measurement/level-6/02-sphere-volume.md).
- On the U of T shelf: [MAT137 Unit 6: applications of derivatives](../../../uoft/MAT137/unit06.md).
