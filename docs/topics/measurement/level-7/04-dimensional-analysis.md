---
title: "Dimensional analysis"
---

# Dimensional analysis

*Measurement · level 7, lesson 4 of 6*

## A question to start

On 23 September 1999 the Mars Climate Orbiter reached Mars after a ten-month journey, fired its engine to slip into
orbit, and was lost. It had flown far too close to the planet. NASA's investigation found the cause: one piece of
software gave the push of the thrusters in pound-force seconds, an imperial unit, and the navigation software read the
numbers as newton-seconds, a metric unit. One pound-force is about 4.45 newtons, so every push was misread by that
factor. The arithmetic was fine. The **units** were wrong.

Here is a smaller puzzle. A friend says the volume of a sphere is $4\pi r^2$. Without checking a single number, you can
prove they are wrong. How?

## The idea

### Units are part of the number

A measurement is a number **times a unit**: $5 \text{ m}$ means $5 \times (1 \text{ metre})$. So units obey the
same algebra as letters. They multiply, divide, cancel and take powers.

- $3 \text{ m} \times 4 \text{ m} = 12 \text{ m}^2$. The metres multiply, just like $3a \times 4a = 12a^2$.
- $\dfrac{100 \text{ m}}{20 \text{ s}} = 5 \ \dfrac{\text{m}}{\text{s}}$, written 5 m/s.
- $5 \ \dfrac{\text{m}}{\text{s}} \times 20 \text{ s} = 100 \text{ m}$. The seconds cancel, like $\dfrac{a}{b} \times b = a$.
- $3 \text{ m} + 4 \text{ m} = 7 \text{ m}$, like $3a + 4a = 7a$. But $3 \text{ m} + 4 \text{ s}$ cannot be simplified,
  just as $3a + 4b$ cannot. It is meaningless as a measurement.

Treating units this way is called **dimensional analysis** (or the **factor-label method** when used for converting).

### Dimensions: the kind of quantity

A **dimension** is the kind of thing a quantity measures, whatever unit you use. Metres, inches and light-years are
different **units** of the same **dimension**, length. Physicists write the main dimensions with capital letters:

| Dimension | Symbol | Some units |
| --- | --- | --- |
| length | L | m, cm, km, inch |
| mass | M | kg, g, pound |
| time | T | s, h, sol, year |

Square brackets mean "the dimension of". So:

- area: $[A] = \mathrm{L}^2$; volume: $[V] = \mathrm{L}^3$;
- speed: $[v] = \mathrm{L}\,\mathrm{T}^{-1}$ (length ÷ time);
- acceleration (speed gained per second): $[a] = \mathrm{L}\,\mathrm{T}^{-2}$;
- density (mass ÷ volume): $[\rho] = \mathrm{M}\,\mathrm{L}^{-3}$;
- force (mass × acceleration): $\mathrm{M}\,\mathrm{L}\,\mathrm{T}^{-2}$. Its SI unit kg·m/s² is called the newton, N.
- Pure numbers like 2, $\tfrac43$ and $\pi$ have **no dimension**. They are called **dimensionless**.

### The rules

1. **You can only add, subtract or compare quantities of the same dimension.** Every term of a sum, and both sides of
   an equation, must have the same dimension.
2. **Multiplying and dividing combine dimensions** by the exponent laws: $\mathrm{L} \times \mathrm{L} = \mathrm{L}^2$,
   $\mathrm{L}^3 \div \mathrm{L}^2 = \mathrm{L}$.
3. **Inside a function such as $\sin$, $\log$ or $10^x$, the input must be dimensionless.** There is no such thing as
   $\log(5 \text{ m})$. (An angle in radians is a ratio of two lengths, arc ÷ radius, so it is dimensionless.)

**Why is rule 1 true?** An equation that holds in one system of units must still hold after you change units. If you
switch from metres to centimetres, every length term is multiplied by 100 and every area term by 10 000. If an
equation said "length = area", switching units would make one side grow 100 times and the other 10 000 times, so it
could not stay true. A true law of nature cannot depend on which ruler you happen to use.

### Checking a formula

Now the sphere puzzle. In $4\pi r^2$, the $4\pi$ is dimensionless and $r^2$ has dimension $\mathrm{L}^2$. So $4\pi r^2$
is an **area**. A volume must be $\mathrm{L}^3$, so it cannot be a volume, whatever the numbers. (It is in fact the
sphere's surface area.) The real volume, $\tfrac43 \pi r^3$, has dimension $\mathrm{L}^3$, as it must.

More checks:

- The area of a trapezoid $\tfrac12 (a + b) h$: $(a + b)$ is a length (adding two lengths is allowed), times $h$, a
  length: $\mathrm{L}^2$. ✓
- Distance fallen from rest, $d = \tfrac12 g t^2$: $[g t^2] = \mathrm{L}\,\mathrm{T}^{-2} \times \mathrm{T}^2 = \mathrm{L}$. ✓
- Someone writes $d = \tfrac12 g t$: $\mathrm{L}\,\mathrm{T}^{-2} \times \mathrm{T} = \mathrm{L}\,\mathrm{T}^{-1}$, a speed, not a
  distance. ✗ Wrong, before any experiment.

Passing the check does **not** prove a formula right: $d = 7 g t^2$ has the right dimensions and the wrong number.
Dimensional analysis can never find pure numbers like $\tfrac12$ or $2\pi$. But failing the check **always** proves a
formula wrong. It is a fast, free test, and professionals use it all the time.

### Converting with factors equal to 1

A **conversion factor** is a fraction whose top and bottom are equal amounts, such as $\dfrac{1000 \text{ m}}{1 \text{ km}}$
or $\dfrac{1 \text{ h}}{3600 \text{ s}}$. Its value is exactly 1, so multiplying by it changes the units but not the
amount. Arrange each factor so the unwanted unit cancels. Convert 100 km/h to m/s:

$$100 \ \frac{\text{km}}{\text{h}} \times \frac{1000 \text{ m}}{1 \text{ km}} \times \frac{1 \text{ h}}{3600 \text{ s}} = \frac{100\,000}{3600} \ \frac{\text{m}}{\text{s}} \approx 27.8 \ \frac{\text{m}}{\text{s}}.$$

The km cancels top and bottom, and so does the h. If you put a factor upside down, the units will not cancel, and you
will see the mistake at once: that is the point of writing them.

A useful shortcut follows: to go from km/h to m/s, divide by 3.6 (because $3600 \div 1000 = 3.6$).

For squared and cubed units, the factor is used twice or three times (as in [level 5](../level-5/05-area-volume-units.md)):
$1 \text{ m}^3 \times \left(\dfrac{100 \text{ cm}}{1 \text{ m}}\right)^3 = 1\,000\,000 \text{ cm}^3$.

### Finding a formula from dimensions alone

Dimensional analysis can do more than check. It can nearly **find** a formula.

How does the time $T$ for one swing of a pendulum depend on the string's length $\ell$, the bob's mass $m$ and the
strength of gravity $g$? Suppose $T = k\, \ell^a m^b g^c$ with $k$ a pure number. Compare dimensions:

$$\mathrm{T}^1 = \mathrm{L}^a \, \mathrm{M}^b \, (\mathrm{L}\,\mathrm{T}^{-2})^c = \mathrm{L}^{a + c}\, \mathrm{M}^b\, \mathrm{T}^{-2c}.$$

Match the powers of each dimension:

- M: $b = 0$. **The mass does not matter at all.**
- T: $-2c = 1$, so $c = -\tfrac12$.
- L: $a + c = 0$, so $a = \tfrac12$.

So $T = k \sqrt{\ell / g}$. Experiments (or the physics in a first-year course) give $k = 2\pi$. Without one
experiment we learned that a pendulum four times as long swings twice as slowly, that a heavier bob changes nothing,
and that on Mars, where $g$ is about 3.72 m/s² instead of 9.81 m/s², a pendulum swings more slowly by a factor
$\sqrt{9.81 / 3.72} \approx 1.6$.

## Worked examples

**1. 100 km/h.** Done above: about 27.8 m/s. Check with the shortcut: $100 \div 3.6 \approx 27.8$. ✓

**2. How fast does Mars spin?** Mars's equator is about 21 340 km round, and one turn (a sol) takes about 88 775 s.
Find the speed of a point on the equator in m/s.

$$\frac{21\,340 \text{ km}}{88\,775 \text{ s}} \times \frac{1000 \text{ m}}{1 \text{ km}} \approx 240 \ \frac{\text{m}}{\text{s}}.$$

(Earth's equator moves at about 465 m/s.)

**3. Density units.** Iron has density 7.87 g/cm³. Write it in kg/m³.

$$7.87 \ \frac{\text{g}}{\text{cm}^3} \times \frac{1 \text{ kg}}{1000 \text{ g}} \times \left(\frac{100 \text{ cm}}{1 \text{ m}}\right)^3 = 7.87 \times \frac{1\,000\,000}{1000} \ \frac{\text{kg}}{\text{m}^3} = 7870 \ \frac{\text{kg}}{\text{m}^3}.$$

**4. Kinetic energy.** The energy of motion is $E = \tfrac12 m v^2$. Find its dimension and SI unit.

$[m v^2] = \mathrm{M} \times (\mathrm{L}\,\mathrm{T}^{-1})^2 = \mathrm{M}\,\mathrm{L}^2\,\mathrm{T}^{-2}$; unit kg·m²/s², called the
**joule** (J). A check: work = force × distance has dimension $\mathrm{M}\,\mathrm{L}\,\mathrm{T}^{-2} \times \mathrm{L}$, the
same. ✓ Energy is energy, however it is made.

**5. A pump.** A pump moves 1.5 m³ of water per minute. How many litres per second is that?

$$1.5 \ \frac{\text{m}^3}{\text{min}} \times \frac{1000 \text{ L}}{1 \text{ m}^3} \times \frac{1 \text{ min}}{60 \text{ s}} = 25 \ \frac{\text{L}}{\text{s}}.$$

## Try it

1. Convert 72 km/h to m/s, using conversion factors.
2. Which of these could be a volume ($a$, $b$, $h$, $r$ are lengths)? (a) $\pi r^2 h$; (b) $\tfrac13 a b$;
   (c) $a^2 + b h$; (d) $a b h + r^3$.
3. A student writes the speed of a falling object as $v = g t^2$. Show that this is wrong.
4. Find the dimension of pressure, defined as force ÷ area.
5. Convert 1 year (365.25 days) to seconds. Then write it in scientific notation to 3 figures.
6. A car uses 6.5 L per 100 km. How many km does it go per litre?
7. The speed $v$ of deep-water waves depends on $g$ and the wavelength $\lambda$ (a length). Use dimensions to show
   $v = k\sqrt{g \lambda}$. If the wavelength is 4 times as long, how much faster is the wave?
8. Why can't the formula $s = \log(t)$, with $s$ a distance and $t$ a time, be a law of nature?

??? note "Answers"
    1. $72 \ \tfrac{\text{km}}{\text{h}} \times \tfrac{1000 \text{ m}}{1 \text{ km}} \times \tfrac{1 \text{ h}}{3600 \text{ s}} = \tfrac{72\,000}{3600} = 20$ m/s.
    2. (a) $\mathrm{L}^3$: **yes** (a cylinder). (b) $\mathrm{L}^2$: no. (c) $\mathrm{L}^2 + \mathrm{L}^2$: an area, no.
       (d) $\mathrm{L}^3 + \mathrm{L}^3$: **yes**, dimensionally (both terms are volumes).
    3. $[g t^2] = \mathrm{L}\,\mathrm{T}^{-2} \times \mathrm{T}^2 = \mathrm{L}$, a length, but a speed must be
       $\mathrm{L}\,\mathrm{T}^{-1}$. (The right formula is $v = g t$.)
    4. $\mathrm{M}\,\mathrm{L}\,\mathrm{T}^{-2} \div \mathrm{L}^2 = \mathrm{M}\,\mathrm{L}^{-1}\,\mathrm{T}^{-2}$. Its unit N/m² is the
       pascal, Pa.
    5. $365.25 \times 24 \times 60 \times 60 = 31\,557\,600$ s $\approx 3.16 \times 10^7$ s.
    6. $\dfrac{100 \text{ km}}{6.5 \text{ L}} \approx 15.4$ km/L.
    7. Try $v = k\, g^a \lambda^b$: $\mathrm{L}\,\mathrm{T}^{-1} = \mathrm{L}^{a + b}\,\mathrm{T}^{-2a}$. Time:
       $-2a = -1$, so $a = \tfrac12$. Length: $a + b = 1$, so $b = \tfrac12$. So $v = k\sqrt{g\lambda}$. Four times
       the wavelength: $\sqrt{4} = 2$ times as fast.
    8. The input of a logarithm must be a pure number; $\log(t)$ with $t$ in seconds changes by a fixed amount
       ($\log 60$) when you switch to minutes, so the "law" would depend on the clock's unit. Also the left side is a
       length and the right side would be dimensionless.

## Common mistake

**Dropping the units and hoping.** Writing "$100 \div 3600 \times 1000$" from memory is how factors end up upside
down. Write the units on every factor and check that they cancel to the unit you want.

**Thinking a dimension check proves a formula.** It only proves a wrong formula wrong. $\tfrac12 m v^2$ and
$3 m v^2$ pass the same check; only one is right.

## Where it leads

- Back: [Errors that grow](03-errors-that-grow.md) · Next: [The square-cube law in nature](05-square-cube-law.md),
  where powers of length decide how animals are built.
- [Level 7 page](index.md) · [Measurement topic page](../index.md)
- Unit conversions with rates (speeds, prices per kilogram): [Ratio](../../ratio/index.md).
- Exponent laws, which make dimension algebra work: [Exponent laws](../../algebra/level-6/01-exponent-laws.md).
- At U of T: [PHY131 Unit 1: units, vectors and estimation](../../../uoft/PHY131H1/unit01.md); the pendulum's
  $2\pi$ comes in [PHY131 Unit 9: oscillations](../../../uoft/PHY131H1/unit09.md).
