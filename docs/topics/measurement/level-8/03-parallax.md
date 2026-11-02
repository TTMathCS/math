---
title: "Parallax"
---

# Parallax

*Measurement · level 8, lesson 3 of 6*

## A question to start

Hold your thumb up at arm's length. Close your left eye and look at your thumb against something far away, a door or
a window frame. Now switch: open the left eye and close the right. Your thumb **jumps** sideways.

Now bring your thumb halfway to your face and do it again. It jumps much more. Your eyes are using this jump all the
time, without you noticing, to judge how far away things are.

The same trick, with your two eyes replaced by the Earth at two ends of its orbit, measured the distance to the stars.
It took until 1838 to make it work, because the jump for even the nearest star is smaller than the width of a coin
seen from several kilometres away.

## The idea

### What parallax is

**Parallax** is the apparent shift of a nearby object against a faraway background when you look at it from two
different places. The distance between the two viewing places is called the **baseline**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 215" role="img" aria-label="Two eyes a small distance apart at the bottom, a thumb above them, and a far wall at the top. Lines from each eye through the thumb hit the wall at two different places, so the thumb seems to jump against the wall">
  <line x1="40" y1="20" x2="360" y2="20" stroke="currentColor" stroke-width="3"/>
  <line x1="170" y1="190" x2="242.9" y2="20" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="230" y1="190" x2="157.1" y2="20" stroke="#eea66f" stroke-width="2"/>
  <rect x="193" y="106" width="14" height="22" rx="6" fill="#7ccf9a" stroke="currentColor"/>
  <ellipse cx="170" cy="192" rx="12" ry="7" fill="#9cc9ea" stroke="currentColor"/>
  <ellipse cx="230" cy="192" rx="12" ry="7" fill="#eea66f" stroke="currentColor"/>
  <circle cx="242.9" cy="20" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="157.1" cy="20" r="5" fill="#eea66f" stroke="currentColor"/>
  <line x1="170" y1="207" x2="230" y2="207" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="200" y="12">far wall</text>
    <text x="300" y="38">left eye sees the thumb here</text>
    <text x="95" y="38">right eye: here</text>
    <text x="240" y="122" text-anchor="start">thumb</text>
    <text x="280" y="210">baseline (about 6.5 cm)</text>
  </g>
</svg>
</div>

The two lines of sight cross at the thumb, making a long thin triangle. The baseline is its short side, and the angle
at the thumb, the **parallax angle**, says how far away the thumb is. Near thumb: big angle. Far thumb: small angle.

### From angle to distance

Suppose the object is straight ahead of the middle of the baseline, at distance $d$. Split the thin triangle down the
middle into two right triangles. Each has a short side of half the baseline, $\tfrac{b}{2}$, and an angle of
$\tfrac{\theta}{2}$ at the far tip. From [tangent](../../geometry/level-7/02-sin-cos-tan.md):

$$\tan\frac{\theta}{2} = \frac{b/2}{d}, \qquad \text{so} \qquad d = \frac{b/2}{\tan(\theta/2)}.$$

That is exact. But in real parallax measurements the angle is tiny, and there is a beautiful shortcut.

### Small angles and radians

Measure angles in **radians**: an angle in radians is the arc it cuts off on a circle divided by the radius
([Radians](../../geometry/level-8/02-radians-unit-circle.md)). A full turn is $2\pi$ radians, so
$1 \text{ rad} = \tfrac{180°}{\pi} \approx 57.3°$.

For a thin triangle, the short side is almost the same as the little arc of a circle centred at the far tip:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 120" role="img" aria-label="A long thin triangle with its tip on the left; at the right end, the short straight side and a circular arc centred at the tip are almost the same length">
  <line x1="20" y1="60" x2="390" y2="30" stroke="currentColor" stroke-width="1.5"/>
  <line x1="20" y1="60" x2="390" y2="90" stroke="currentColor" stroke-width="1.5"/>
  <line x1="390" y1="30" x2="390" y2="90" stroke="#eea66f" stroke-width="3"/>
  <path d="M 390 30 A 371.2 371.2 0 0 1 390 90" fill="none" stroke="#9cc9ea" stroke-width="2" stroke-dasharray="5 3"/>
  <g font-size="12" fill="currentColor">
    <text x="30" y="40">tip, angle θ</text>
    <text x="300" y="112">side b ≈ arc = d × θ</text>
    <text x="180" y="60">d</text>
  </g>
</svg>
</div>

The arc is exactly $d \times \theta$ (that is what radians mean). The straight side $b$ is almost the same when the
angle is small. So, for small angles in radians,

$$b \approx d\,\theta, \qquad d \approx \frac{b}{\theta}.$$

How good is "almost"? At $10°$, $\tan 10° \approx 0.1763$ while $10°$ in radians is $0.1745$: 1% apart. At $1°$ they
agree to about 0.01%. Star parallaxes are less than one ten-thousandth of a degree, where the two are equal to many
more digits than anyone can measure. (Why they agree so well is a fact about the tangent function near zero, proved
with limits in calculus.)

**The thumb.** Baseline $b = 6.5$ cm, arm length $d = 65$ cm: $\theta \approx \tfrac{6.5}{65} = 0.1$ rad $\approx 5.7°$.
Halve the distance and the angle doubles: **distance and parallax angle are inversely proportional**. Double one,
halve the other.

### Tiny angles: arcminutes and arcseconds

Degrees are too big for stars. Each degree is split into 60 **arcminutes** ($60'$), and each arcminute into 60
**arcseconds** ($60''$). So

$$1° = 3600'', \qquad 1'' = \frac{1}{3600}° \approx 4.85 \times 10^{-6} \text{ rad}.$$

One arcsecond is about the angle of a 1-dollar coin seen from 5 km away.

### Measuring the stars: the Earth's orbit as a baseline

Your eyes are 6.5 cm apart. To measure a star you need a much longer baseline. Astronomers use the Earth itself:
photograph a star in January and again in July, when Earth is on the other side of the Sun. The near star shifts
slightly against much more distant stars behind it.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 215" role="img" aria-label="Not to scale: the Sun at the bottom centre, the Earth on either side in January and July, and a near star high above. The parallax angle p is the angle at the star between the line to the Sun and the line to the Earth">
  <line x1="120" y1="180" x2="280" y2="180" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 3"/>
  <line x1="200" y1="30" x2="200" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="200" y1="30" x2="280" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="200" y1="30" x2="120" y2="180" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <path d="M 200 30 L 200 60 A 30 30 0 0 0 214.1 56.5 Z" fill="#7ccf9a" stroke="currentColor"/>
  <circle cx="200" cy="180" r="10" fill="#eea66f" stroke="currentColor"/>
  <circle cx="120" cy="180" r="6" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="280" cy="180" r="6" fill="#9cc9ea" stroke="currentColor"/>
  <polygon points="200,18 204,27 213,28 206,34 208,43 200,38 192,43 194,34 187,28 196,27" fill="#eea66f" stroke="currentColor"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="200" y="205">Sun</text><text x="110" y="205">Earth in January</text><text x="290" y="205">Earth in July</text>
    <text x="240" y="172">1 au</text><text x="224" y="72">p</text><text x="260" y="40">near star</text>
  </g>
</svg>
</div>

The **parallax angle** $p$ of a star is defined using a baseline of **1 au** (Sun to Earth), so it is half of the
whole January-to-July shift. With the small-angle rule,

$$d \approx \frac{1 \text{ au}}{p} \quad (p \text{ in radians}).$$

### The parsec

Astronomers turned this into a unit. One **parsec** ("**par**allax of one arc**sec**ond") is the distance at which
the parallax angle is exactly $1''$:

$$1 \text{ pc} = \frac{1 \text{ au}}{4.848 \times 10^{-6}} \approx 206\,265 \text{ au} \approx 3.26 \text{ ly}.$$

Then the formula becomes wonderfully simple:

$$d \text{ (in parsecs)} = \frac{1}{p \text{ (in arcseconds)}}.$$

A star with parallax $0.5''$ is 2 pc away; one with $0.1''$ is 10 pc away.

### The history

Ancient Greek astronomers knew that if the Earth moved round the Sun, the stars should show parallax. They saw none,
and some took this as evidence that the Earth stood still. The real reason was that the stars are unimaginably far
away and the shifts are tiny. The first reliable measurement came in 1838, when Friedrich Bessel found a parallax of
about $0.3''$ for the star 61 Cygni, about 11 light-years away. The nearest star, Proxima Centauri, has the
**largest** parallax of any star: only about $0.77''$.

Today the space telescope Gaia, launched by the European Space Agency in 2013, has measured parallaxes of more than a
billion stars, many to a precision of a few hundred-thousandths of an arcsecond.

### Precision limits the reach

Because $d = 1/p$, the relative error in the distance equals the relative error in the angle (dividing keeps the
relative error, from [Errors that grow](../level-7/03-errors-that-grow.md)). If you can measure angles to $\pm 0.001''$:

- a star at $p = 0.5''$ has a 0.2% error in distance;
- a star at $p = 0.01''$ (100 pc) has a 10% error;
- a star at $p = 0.002''$ (500 pc) has a 50% error, nearly useless.

So parallax measures nearby stars superbly and fails for distant ones. Astronomers then climb a "distance ladder",
calibrating other methods (such as how bright certain stars really are) on the parallax stars. Every rung rests on
the one below, and the bottom rung is this lesson's geometry.

## Worked examples

**1. A surveyor.** To find the distance to a tree across a river, a surveyor walks a baseline of 50 m along the bank
and finds that the direction to the tree changes by $2.0°$. How far away is the tree?

1. In radians: $2.0° \times \tfrac{\pi}{180} \approx 0.0349$ rad.
2. $d \approx \tfrac{50}{0.0349} \approx 1430$ m.
3. (Exact, with the tangent: $50 \div \tan 2.0° \approx 1432$ m. The difference is under 0.1%.)

**2. Proxima Centauri.** Its parallax is about $0.768''$.

1. $d = 1 \div 0.768 \approx 1.30$ pc.
2. In light-years: $1.30 \times 3.26 \approx 4.25$ ly. (The accepted value is about 4.24 ly; the difference is rounding.)

**3. Checking the parsec.** Find 1 parsec in au and in light-years.

1. $1'' = \tfrac{1}{3600} \times \tfrac{\pi}{180}$ rad $\approx 4.848 \times 10^{-6}$ rad.
2. $1 \text{ pc} = 1 \div 4.848 \times 10^{-6} \approx 206\,265$ au.
3. One light-year is about 63 241 au, so $206\,265 \div 63\,241 \approx 3.26$ ly.

**4. Parallax from Mars.** An astronomer on Mars, where the orbit's radius is about 1.52 au, uses Mars's orbit as the
baseline. What parallax would Proxima Centauri show there?

Parallax is proportional to the baseline: $0.768'' \times 1.52 \approx 1.17''$. A longer baseline gives a bigger,
easier angle. Every planet farther from the Sun would be a better place for this one kind of measurement.

## Try it

1. Your eyes are 6.5 cm apart. An object shows a parallax (the angle between the two lines of sight) of 0.05 rad.
   About how far away is it?
2. Convert $0.25°$ to arcseconds.
3. A star has parallax $0.2''$. How far away is it in parsecs and in light-years?
4. A star is 25 pc away. What is its parallax?
5. Two stars have parallaxes $0.04''$ and $0.01''$. Which is closer, and how many times closer?
6. Compute $\tan 5°$ and $5°$ in radians. What is the percent difference? Is the small-angle rule good enough at
   $5°$ for a rough distance?
7. If angles can be measured to $\pm 0.0002''$, at what parallax is the distance error 10%? About how far is that, in
   parsecs?
8. Explain why the ancient Greeks' failure to see stellar parallax was not good evidence that the Earth stands still.

??? note "Answers"
    1. $d \approx 6.5 \div 0.05 = 130$ cm.
    2. $0.25 \times 3600 = 900''$.
    3. $d = 1 \div 0.2 = 5$ pc $\approx 5 \times 3.26 = 16.3$ ly.
    4. $p = 1 \div 25 = 0.04''$.
    5. The one with $0.04''$ (25 pc) is closer than the one with $0.01''$ (100 pc): **4 times** closer. Bigger
       parallax means nearer.
    6. $\tan 5° \approx 0.08749$; $5° \approx 0.08727$ rad. Difference $\approx 0.25\%$. Yes, easily good enough.
    7. Relative error $= 0.0002 \div p = 0.10$, so $p = 0.002''$, a distance of $1 \div 0.002 = 500$ pc.
    8. No parallax could mean either "the Earth does not move" or "the stars are so far away that the shift is too
       small to see". Without a way to measure tiny angles they could not tell these apart. The second was true: even
       the largest stellar parallax is under $1''$, far below what the naked eye can detect.

## Common mistake

**Using degrees in $d \approx b/\theta$.** The small-angle rule only works with the angle in **radians**. With degrees,
the answer is out by a factor of about 57.

**Using the whole January-to-July shift as $p$.** The parallax angle is defined with a baseline of 1 au, half the
width of the orbit. The full shift is $2p$.

## Where it leads

- Back: [Distances in space](02-distances-in-space.md) · Next: [Areas of curved regions](04-curved-areas.md)
- [Level 8 page](index.md) · [Measurement topic page](../index.md)
- Radians and arcs: [Radians and the unit circle](../../geometry/level-8/02-radians-unit-circle.md); tangent:
  [sin, cos and tan](../../geometry/level-7/02-sin-cos-tan.md).
- Why $\tan\theta \approx \theta$ for small angles is a limit, and the start of calculus: [Change](../../change/index.md)
  and [MAT137 Unit 2: limits and continuity](../../../uoft/MAT137/unit02.md).
