---
title: "Falling, on Earth and on Mars"
---

# Falling, on Earth and on Mars

*Change and motion · level 5, lesson 5 of 6*

## A question to start

Drop a stone down a deep well and count the seconds until you hear the splash. If it takes 2.5 seconds, how deep is
the well? You cannot just multiply a speed by the time, because the stone has no single speed: it starts at zero and
keeps getting faster.

Now take the same stone to Mars and drop it down a well of the same depth. Will it take a little longer, or much
longer? This lesson finds a short rule for falling, explains **why** it is true, and uses it on two planets.

## The idea

### What falling looks like

Imagine a camera that takes a picture of a falling stone once every second, all on the same photo. This is called a
**strobe** picture. Here are a stone on Earth and a stone on Mars, drawn to the same scale.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 200" role="img" aria-label="Strobe picture of two dropped stones, one dot per second. On Earth the dots are at 0, 4.9, 19.6, 44.1 and 78.4 metres below the start, spreading out fast. On Mars they are at 0, 1.86, 7.4, 16.7 and 29.7 metres, spreading out more slowly.">
  <line x1="60" y1="20" x2="300" y2="20" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="110" y1="20" x2="110" y2="180" stroke="currentColor" stroke-width="0.6" opacity="0.4"/>
  <line x1="250" y1="20" x2="250" y2="180" stroke="currentColor" stroke-width="0.6" opacity="0.4"/>
  <g fill="#9cc9ea" stroke="currentColor" stroke-width="1">
    <circle cx="110" cy="20" r="6"/><circle cx="110" cy="29.8" r="6"/><circle cx="110" cy="59.2" r="6"/><circle cx="110" cy="108.2" r="6"/><circle cx="110" cy="176.8" r="6"/>
  </g>
  <g fill="#eea66f" stroke="currentColor" stroke-width="1">
    <circle cx="250" cy="20" r="6"/><circle cx="250" cy="23.7" r="6"/><circle cx="250" cy="34.8" r="6"/><circle cx="250" cy="53.4" r="6"/><circle cx="250" cy="79.4" r="6"/>
  </g>
  <g font-size="11" fill="currentColor">
    <text x="122" y="33">1 s</text><text x="122" y="63">2 s</text><text x="122" y="112">3 s</text><text x="122" y="180">4 s: 78.4 m</text>
    <text x="262" y="38">2 s</text><text x="262" y="57">3 s</text><text x="262" y="83">4 s: 29.7 m</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="110" y="12">Earth</text><text x="250" y="12">Mars</text>
  </g>
</svg>
</div>

On both planets the gaps between the dots grow. The stone covers more ground each second than the second before,
because it keeps speeding up. On Mars everything happens more gently.

### The rule for Earth

Measure the Earth stone and you find (ignoring air resistance):

| Time $t$ (s) | 0 | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- | --- |
| Distance fallen (m) | 0 | 4.9 | 19.6 | 44.1 | 78.4 | 122.5 |
| Fallen in that second (m) | | 4.9 | 14.7 | 24.5 | 34.3 | 44.1 |
| Increase on the second before (m) | | | 9.8 | 9.8 | 9.8 | 9.8 |

Divide each distance by 4.9: you get 0, 1, 4, 9, 16, 25, the **square numbers**. So

$$d = 4.9\,t^2 \text{ metres (on Earth)}.$$

Look at the last row. The first row of differences (4.9, 14.7, 24.5, ...) is not constant: the change is not steady,
so the graph is a curve. But the **differences of the differences**, called the **second differences**, are all 9.8.
That pattern, constant second differences, is the fingerprint of a rule with a $t^2$ in it (you meet it again in
[Patterns](../../patterns/index.md) and [Algebra](../../algebra/level-7/01-quadratic-relations.md)).

### Why the rule is true

Here is a reason, not just a pattern. From [lesson 4](04-acceleration.md): a falling stone gains 9.8 m/s of speed every
second. So, starting from rest, its speed after $t$ seconds is

$$\text{speed} = 9.8\,t \text{ m/s}.$$

The speed rises **steadily**, from 0 at the start to $9.8t$ at the end. When something changes steadily, its average
over the time is exactly halfway between the start and the end. (Think of the speeds second by second: every speed
in the early half is matched by one in the late half that is just as far above the middle.) So the average speed is

$$\frac{0 + 9.8t}{2} = 4.9\,t \text{ m/s}.$$

And distance is average speed times time:

$$d = 4.9\,t \times t = 4.9\,t^2.$$

The 4.9 is **half** of 9.8. That is where it comes from: the stone's average speed is half its final speed. In
[lesson 6](06-area-speed-time.md) you will see the same argument as a picture, a triangle under a speed-time graph.

Written with the letter $g$ for the acceleration due to gravity, the rule for anything falling from rest is

$$d = \tfrac{1}{2}\,g\,t^2.$$

### The rule for Mars

Mars has about one ninth of the Earth's mass but just over half its width, and the result is a pull at the surface of
about $g = 3.71$ m/s². That is $3.71 \div 9.81 \approx 0.38$, roughly **38%** of Earth's. Half of 3.71 is 1.855, so

$$d \approx 1.86\,t^2 \text{ metres (on Mars)}.$$

| Time $t$ (s) | 0 | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- | --- |
| Distance fallen on Mars (m) | 0 | 1.86 | 7.44 | 16.74 | 29.76 | 46.5 |
| Fallen in that second (m) | | 1.86 | 5.58 | 9.30 | 13.02 | 16.74 |
| Second differences (m) | | | 3.72 | 3.72 | 3.72 | 3.72 |

The second differences are 3.72, twice 1.86. (They would be exactly 3.71 if we had kept 1.855; the 0.01 comes from
rounding.)

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="Distance fallen against time from 0 to 4 seconds. The Earth curve rises steeply to 78.4 metres; the Mars curve rises gently to about 29.7 metres.">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.3">
    <line x1="60" y1="20" x2="380" y2="20"/><line x1="60" y1="60" x2="380" y2="60"/><line x1="60" y1="100" x2="380" y2="100"/><line x1="60" y1="140" x2="380" y2="140"/>
    <line x1="140" y1="20" x2="140" y2="180"/><line x1="220" y1="20" x2="220" y2="180"/><line x1="300" y1="20" x2="300" y2="180"/><line x1="380" y1="20" x2="380" y2="180"/>
  </g>
  <line x1="60" y1="180" x2="390" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="60" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="60.0,180.0 70.0,179.8 80.0,179.4 90.0,178.6 100.0,177.6 110.0,176.2 120.0,174.5 130.0,172.5 140.0,170.2 150.0,167.6 160.0,164.7 170.0,161.5 180.0,157.9 190.0,154.1 200.0,150.0 210.0,145.5 220.0,140.8 230.0,135.7 240.0,130.4 250.0,124.7 260.0,118.8 270.0,112.5 280.0,105.9 290.0,99.0 300.0,91.8 310.0,84.3 320.0,76.5 330.0,68.4 340.0,59.9 350.0,51.2 360.0,42.2 370.0,32.8 380.0,23.2" fill="none" stroke="#9cc9ea" stroke-width="3.5"/>
  <polyline points="60.0,180.0 70.0,179.9 80.0,179.8 90.0,179.5 100.0,179.1 110.0,178.6 120.0,177.9 130.0,177.2 140.0,176.3 150.0,175.3 160.0,174.2 170.0,173.0 180.0,171.7 190.0,170.2 200.0,168.6 210.0,167.0 220.0,165.2 230.0,163.2 240.0,161.2 250.0,159.1 260.0,156.8 270.0,154.4 280.0,151.9 290.0,149.3 300.0,146.6 310.0,143.8 320.0,140.8 330.0,137.7 340.0,134.6 350.0,131.2 360.0,127.8 370.0,124.3 380.0,120.6" fill="none" stroke="#eea66f" stroke-width="3.5"/>
  <g font-size="12" fill="currentColor">
    <text x="300" y="48">Earth: 4.9t²</text><text x="300" y="112">Mars: 1.86t²</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="60" y="196">0</text><text x="140" y="196">1</text><text x="220" y="196">2</text><text x="300" y="196">3</text><text x="380" y="196">4</text>
    <text x="220" y="211">time (seconds)</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="54" y="184">0</text><text x="54" y="144">20</text><text x="54" y="104">40</text><text x="54" y="64">60</text><text x="54" y="24">80 m</text>
  </g>
</svg>
</div>

### Same time, same drop: comparing the planets

Two neat facts fall out of the rules.

- **In the same time**, a Mars stone falls $1.86 \div 4.9 \approx 0.38$ as far as an Earth stone: the same 38%, because
  both rules have the same $t^2$ and only the number in front differs.
- **For the same drop**, the Mars stone takes longer, but not 1/0.38 times as long. If $4.9\,t_E^2 = 1.86\,t_M^2$, then
  $t_M^2 \div t_E^2 = 4.9 \div 1.86 \approx 2.63$, so $t_M \div t_E \approx \sqrt{2.63} \approx 1.62$. Every fall on
  Mars takes about **1.6 times** as long as the same fall on Earth.

The square root appears because time is squared in the rule. Gravity 2.6 times weaker does not mean falls 2.6 times
slower.

### Heavy and light

Does a heavy stone fall faster than a light one? Without air, **no**: everything near the surface gains speed at the
same rate $g$. The story goes that Galileo dropped two balls of different weights from the Leaning Tower of Pisa to
show this; historians doubt he really did, but he did study falling carefully with balls rolling down ramps. In 1971 the
astronaut David Scott of Apollo 15 dropped a hammer and a falcon feather side by side on the Moon, where there is no air,
and they hit the ground together. On Earth the feather drifts because of the air, not because gravity treats it
differently. Mars has a thin atmosphere, so a feather there would still drift, just less.

## Worked examples

**1. The well.** A stone takes 2.5 s to reach the water. How deep is the well (ignoring the time the sound takes to
come back up)?

$d = 4.9 \times 2.5^2 = 4.9 \times 6.25 = 30.625$, about **31 m**. (Sound takes about 0.09 s to climb 31 m, so the true
fall time is a little under 2.5 s and the well is slightly shallower, about 29 m.)

**2. A cliff on two planets.** A rock falls from a 45 m cliff. How long does it take on Earth and on Mars, and how
fast is it going at the bottom?

- Earth: $4.9t^2 = 45$, so $t^2 = 45 \div 4.9 \approx 9.18$ and $t \approx 3.03$ s. Speed $= 9.8 \times 3.03 \approx 29.7$ m/s.
- Mars: $1.855t^2 = 45$, so $t^2 \approx 24.26$ and $t \approx 4.93$ s. Speed $= 3.71 \times 4.93 \approx 18.3$ m/s.

Check the 1.6 rule: $3.03 \times 1.62 \approx 4.91$. ✓ (close; the small gap is rounding).

**3. The ruler test of reaction time.** A friend holds a ruler; you hold your fingers at its zero mark. They drop it
without warning and you catch it after it has fallen 20 cm. What is your reaction time?

$4.9t^2 = 0.20$, so $t^2 = 0.20 \div 4.9 \approx 0.0408$ and $t \approx 0.20$ s. A fifth of a second.

**4. The fifth second.** How far does an Earth stone fall during the fifth second alone (from $t = 4$ to $t = 5$)?

$122.5 - 78.4 = 44.1$ m. Using the differences: each second's distance is 9.8 m more than the last, and the fourth
second was 34.3 m, so the fifth is $34.3 + 9.8 = 44.1$ m. ✓

## Try it

1. How far does a stone fall in 6 s on Earth? On Mars?
2. How long does a stone take to fall 78.4 m on Earth? On Mars (to 1 decimal place)?
3. In the ruler test, a friend catches the ruler after 15 cm. Find their reaction time (to 2 decimal places).
4. How fast is a stone falling on Mars after 2.5 s?
5. On Earth, how much further does a stone fall in the 8th second than in the 7th? Explain without working out either
   distance.
6. Explain in your own words why the number in $d = 4.9t^2$ is half of 9.8.
7. A ball rolls down a ramp from rest and covers 0.3 m in the first second. Assuming steady acceleration, how far has it
   gone after 2 s, 3 s and 4 s?
8. A rover's camera mast is 2 m high. If a small part came loose and fell from the top, how long would it take to reach
   the ground on Mars? How much shorter would the same fall be on Earth?

??? note "Answers"
    1. Earth: $4.9 \times 36 = 176.4$ m. Mars: $1.86 \times 36 = 66.96$ m, about 67 m.
    2. Earth: $t^2 = 78.4 \div 4.9 = 16$, so $t = 4$ s. Mars: $t^2 = 78.4 \div 1.86 \approx 42.15$, so
       $t \approx 6.5$ s.
    3. $t^2 = 0.15 \div 4.9 \approx 0.0306$, so $t \approx 0.17$ s.
    4. $3.71 \times 2.5 \approx 9.3$ m/s.
    5. **9.8 m.** The distance in each second is 9.8 m more than in the second before (the second differences are all
       9.8), because the stone is 9.8 m/s faster on average.
    6. The speed rises steadily from 0 to $9.8t$, so the average speed is half the final speed, $4.9t$. Distance is
       average speed times time, $4.9t \times t$.
    7. Distance grows like $t^2$: $0.3 \times 4 = 1.2$ m, $0.3 \times 9 = 2.7$ m, $0.3 \times 16 = 4.8$ m.
    8. Mars: $t^2 = 2 \div 1.855 \approx 1.078$, so $t \approx 1.04$ s. Earth: $t^2 = 2 \div 4.9 \approx 0.408$, so
       $t \approx 0.64$ s. About 0.4 s shorter on Earth (and $1.04 \div 0.64 \approx 1.6$, the same ratio as always).

## Common mistake

**Using distance = speed × time with the final speed.** A stone that hits the water at 24.5 m/s after 2.5 s did
**not** fall $24.5 \times 2.5 = 61$ m. It was slower earlier. With steady acceleration from rest, use the average speed,
which is half the final speed: $12.25 \times 2.5 \approx 30.6$ m.

**Scaling time like gravity.** Mars gravity is about 0.38 of Earth's, but falls do not take $1 \div 0.38 \approx 2.6$
times as long. Because time is squared in the rule, they take $\sqrt{2.6} \approx 1.6$ times as long.

## Where it leads

- Back: [Acceleration](04-acceleration.md) · Next: [Area under speed-time graphs](06-area-speed-time.md), the picture
  behind $\tfrac{1}{2}gt^2$.
- [Level 5 page](index.md) · [Change and motion topic page](../index.md)
- Square numbers and square roots: [Numbers](../../numbers/index.md); constant second differences in
  [Patterns](../../patterns/index.md); the $t^2$ curve as a parabola in
  [Quadratic relations](../../algebra/level-7/01-quadratic-relations.md).
- The speed of the stone at one exact instant: [Shrinking the interval](../level-6/02-shrinking-interval.md) in level 6.
- The physics shelf: [PHY131 Unit 2: kinematics in one dimension](../../../uoft/PHY131H1/unit02.md).
