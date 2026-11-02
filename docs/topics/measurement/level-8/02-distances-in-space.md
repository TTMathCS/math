---
title: "Distances in space"
---

# Distances in space

*Measurement · level 8, lesson 2 of 6*

## A question to start

A rover on Mars sees a rock ahead. A driver on Earth presses "stop". How long before the rover stops?

Not a split second. Radio waves travel at the speed of light, the fastest anything can go, and still the command
takes somewhere between about 3 and 22 minutes to arrive, depending on where Earth and Mars are in their orbits. The
answer back takes just as long. So nobody "drives" a Mars rover the way you drive a remote-control car. Engineers send
a day's plan in advance, and the rover uses its own cameras to avoid hazards.

Why such a big range, from 3 to 22 minutes? And how do we even say how far away things in space are, when kilometres
give numbers with so many zeros?

## The idea

### Why we need new units

Kilometres are fine on Earth. Earth's circumference is about 40 000 km. In space the numbers explode.

- The Moon: about 384 400 km away.
- The Sun: about 150 000 000 km.
- The nearest star beyond the Sun, Proxima Centauri: about 40 000 000 000 000 km.

Numbers like $4 \times 10^{13}$ km are correct but hard to picture or compare. So astronomers use bigger units, just
as you use kilometres instead of millimetres for a road trip. Choosing a unit the right size for the job is part of
measuring well.

### The astronomical unit

The **astronomical unit** (au) is about the average distance from the Earth to the Sun. It was first a measured
quantity. Since 2012 it has been **defined** as exactly

$$1 \text{ au} = 149\,597\,870\,700 \text{ m} \approx 1.496 \times 10^8 \text{ km}.$$

The au is the natural ruler for the Solar System. Mars's average distance from the Sun (the semi-major axis of its
orbit) is about 1.52 au; Jupiter's about 5.2 au; Neptune's about 30 au.

How was it measured before it was defined? Historically, by careful geometry with angles (the next lesson's idea of
parallax), including famous expeditions to watch Venus cross the face of the Sun. Since the 1960s, by **radar**:
bounce a radio pulse off Venus or Mars, time the echo, and use $\text{distance} = \text{speed} \times \text{time} \div 2$
(the pulse goes there and back). A timing measurement turned into a distance measurement.

### Light-time and the light-year

The **speed of light** in empty space is exactly

$$c = 299\,792\,458 \text{ m/s} \approx 3.00 \times 10^5 \text{ km/s}.$$

It is exact because the metre is now defined from it (more in [lesson 5](05-si-system.md)). Light-time is a natural
way to give a distance: "how long light takes".

| From Earth to | Distance | Light takes |
| --- | --- | --- |
| the Moon | 384 400 km | about 1.3 s |
| the Sun | 1 au | about 8.3 min (8 min 19 s) |
| Mars | 0.36 to 2.7 au | about 3 to 22 min |
| Proxima Centauri | about 4.24 light-years | about 4.24 years |

A **light-year** (ly) is the distance light travels in one year. It is a **distance**, not a time, despite its name.
Using the Julian year of 365.25 days:

$$1 \text{ ly} = c \times (365.25 \times 24 \times 3600 \text{ s}) \approx 9.461 \times 10^{12} \text{ km} \approx 63\,000 \text{ au}.$$

Astronomers also use the **parsec** (pc), about 3.26 light-years. Its definition comes from parallax angles, and you
will see where it comes from in [the next lesson](03-parallax.md).

### How far is Mars?

Earth and Mars both go round the Sun, Earth in one year and Mars in about 687 Earth days. So the distance between
them is always changing.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 230" role="img" aria-label="Two orbit diagrams. Left: the Sun with Earth and Mars on the same side, close together. Right: Earth and Mars on opposite sides of the Sun, far apart">
  <g fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3">
    <circle cx="110" cy="110" r="55"/><circle cx="110" cy="110" r="84"/>
    <circle cx="330" cy="110" r="55"/><circle cx="330" cy="110" r="84"/>
  </g>
  <circle cx="110" cy="110" r="9" fill="#eea66f" stroke="currentColor"/>
  <circle cx="330" cy="110" r="9" fill="#eea66f" stroke="currentColor"/>
  <circle cx="165" cy="110" r="6" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="194" cy="110" r="5" fill="#eea66f" stroke="currentColor"/>
  <line x1="171" y1="110" x2="189" y2="110" stroke="currentColor" stroke-width="2"/>
  <circle cx="275" cy="110" r="6" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="414" cy="110" r="5" fill="#eea66f" stroke="currentColor"/>
  <line x1="281" y1="114" x2="409" y2="114" stroke="currentColor" stroke-width="2"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="110" y="135">Sun</text><text x="330" y="135">Sun</text>
    <text x="160" y="97">Earth</text><text x="200" y="97">Mars</text>
    <text x="270" y="97">Earth</text><text x="410" y="97">Mars</text>
    <text x="110" y="222">same side: closest</text><text x="330" y="222">opposite sides: farthest</text>
  </g>
</svg>
</div>

If the orbits were perfect circles of radius 1 au and 1.52 au, the distance would range from

- $1.52 - 1 = 0.52$ au (same side of the Sun), to
- $1.52 + 1 = 2.52$ au (opposite sides).

But orbits are **ellipses** (slightly stretched circles), and Mars's is noticeably stretched: its distance from the
Sun varies from about 1.38 au to about 1.67 au. So the closest possible approach is about $1.38 - 1.02 = 0.36$ au,
around 55 million km, and the farthest about $1.67 + 1.02 = 2.7$ au, around 400 million km. (Close approaches near
the 0.36 au minimum are rare; a typical close approach is somewhat farther.)

Now the delay:

$$t = \frac{\text{distance}}{c}: \qquad \frac{5.5 \times 10^7 \text{ km}}{3.0 \times 10^5 \text{ km/s}} \approx 183 \text{ s} \approx 3 \text{ min}, \qquad \frac{4.0 \times 10^8 \text{ km}}{3.0 \times 10^5 \text{ km/s}} \approx 1330 \text{ s} \approx 22 \text{ min}.$$

That is where "3 to 22 minutes" comes from. A question and its answer, there and back, take 6 to 44 minutes.

### A scale model

Big numbers become real when you shrink them. Divide every distance by $10^9$ (one billion), so 1 m in the model is
a million kilometres.

- The Sun (diameter about 1.39 million km) becomes a ball **1.4 m** across.
- Earth (12 742 km) becomes a grain about **1.3 cm** across, **150 m** away: a long block.
- Mars (6779 km) is about **7 mm** across, on average about **230 m** from the big ball.
- Proxima Centauri is about **40 000 km** away in the model: farther than once round the real Earth.

Space is mostly empty, and the stars are separated by distances that dwarf the Solar System. This is why the
light-year, not the au, is the right unit between the stars.

## Worked examples

**1. One light-year in kilometres.**

$$299\,792.458 \ \frac{\text{km}}{\text{s}} \times 365.25 \ \frac{\text{days}}{\text{year}} \times 86\,400 \ \frac{\text{s}}{\text{day}} \approx 9.461 \times 10^{12} \ \frac{\text{km}}{\text{year}},$$

so 1 ly $\approx 9.46 \times 10^{12}$ km. Divide by 1 au $= 1.496 \times 10^8$ km: about 63 200 au.

**2. Light from the Sun.**

$$t = \frac{1.496 \times 10^8 \text{ km}}{2.998 \times 10^5 \text{ km/s}} \approx 499 \text{ s} = 8 \text{ min } 19 \text{ s}.$$

You always see the Sun as it was about 8 minutes ago.

**3. Proxima Centauri in other units.** It is about 4.24 ly away.

1. In km: $4.24 \times 9.461 \times 10^{12} \approx 4.01 \times 10^{13}$ km.
2. In au: $4.24 \times 63\,200 \approx 268\,000$ au.

**4. A radar echo.** A radar pulse sent to Venus returns after 276 s. How far away is Venus?

1. Total path: $2.998 \times 10^5 \times 276 \approx 8.27 \times 10^7$ km (there and back).
2. One way: half, about $4.14 \times 10^7$ km, about 0.28 au. (Venus can come this close at its nearest.)

**5. Planning a rover command.** Mars is 1.5 au from Earth. How long until engineers see a picture of a command being
carried out, if the rover takes 10 minutes to act?

1. Distance: $1.5 \times 1.496 \times 10^8 \approx 2.24 \times 10^8$ km.
2. One-way light time: $2.24 \times 10^8 \div 3.0 \times 10^5 \approx 750$ s $= 12.5$ min.
3. Total: $12.5 + 10 + 12.5 = 35$ minutes.

## Try it

1. How long does light take to travel from the Moon to the Earth (384 400 km)?
2. Write 1 au in light-minutes, to 3 significant figures.
3. Jupiter is about 5.2 au from the Sun. Ignoring the stretch of the orbits, what are the nearest and farthest
   distances from Earth, in au, and the one-way radio delays in minutes?
4. A space probe is 160 au from the Sun. How many hours does its signal take to reach us (take the Earth-Sun
   distance as small compared with 160 au)?
5. In the $10^9$ scale model, how far from the Sun-ball is Jupiter (5.2 au)?
6. A spacecraft travels at 100 000 km/h. Roughly how many years would it take to travel one light-year?
7. Explain why "a light-year is a long time" is a mistake.
8. Using Mars's distance from the Sun of 1.38 au to 1.67 au and Earth's of 0.98 to 1.02 au, find the smallest and
   largest possible Earth-Mars distances in au and km.

??? note "Answers"
    1. $384\,400 \div 299\,792 \approx 1.28$ s.
    2. $499 \text{ s} \div 60 \approx 8.32$ light-minutes.
    3. Nearest $5.2 - 1 = 4.2$ au, farthest $5.2 + 1 = 6.2$ au. Delays:
       $4.2 \times 8.32 \approx 35$ min and $6.2 \times 8.32 \approx 52$ min.
    4. $160 \times 8.32 \approx 1330$ min, about **22 hours**.
    5. $5.2 \times 150 \text{ m} \approx 780$ m (since 1 au is 150 m in the model).
    6. $9.46 \times 10^{12} \div 100\,000 = 9.46 \times 10^7$ hours; divide by $24 \times 365.25 = 8766$: about
       **10 800 years**.
    7. A light-year is a **distance**, the distance light covers in a year. "Light-years ago" makes no sense; "light-
       years away" does.
    8. Smallest: $1.38 - 1.02 = 0.36$ au $\approx 0.36 \times 1.496 \times 10^8 \approx 5.4 \times 10^7$ km.
       Largest: $1.67 + 1.02 = 2.69$ au $\approx 4.0 \times 10^8$ km. (These extremes need Earth and Mars to be at the
       right points of their orbits at once, so the real closest approaches are rarely quite this close.)

## Common mistake

**Treating the light-year as a time.** It is a length, like the kilometre. Its name says how it is built: the distance
light goes in a year.

**Forgetting the "there and back".** A radar echo, a question and its answer, or a command and its confirmation all
travel the distance twice. Halve the echo time to get the one-way distance.

## Where it leads

- Back: [Eratosthenes measures the Earth](01-eratosthenes-earth.md) · Next: [Parallax](03-parallax.md), the geometry
  that measures the distance to the stars.
- [Level 8 page](index.md) · [Measurement topic page](../index.md)
- Big numbers in powers of ten: [Scientific notation](../../numbers/level-5/05-scientific-notation.md).
- Speed, distance and time as rates: [Ratio](../../ratio/index.md); Mars's year and sol: [Level 6](../level-6/index.md).
- Light as a wave, and why its speed is the same for everyone: at U of T,
  [PHY132 Unit 7: electromagnetic waves and light](../../../uoft/PHY132H1/unit07.md) and
  [Unit 10: special relativity](../../../uoft/PHY132H1/unit10.md).
