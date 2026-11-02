---
title: "Graphs of sine and cosine"
---

# Graphs of sine and cosine

*Geometry · level 8, lesson 3 of 6*

## A question to start

Sit on a Ferris wheel and watch only your height above the ground. Up, slowly over the top, down, slowly round the
bottom, up again. Plot height against time and you get a smooth wave that repeats forever.

Now look at other repeating things: the length of daylight through the year, the tide at a harbour, the vibration of a
guitar string, the voltage in a wall socket, the sound of a tuning fork. Each of them, plotted against time, makes
the **same shape** of wave, just stretched or shifted. Why should a wheel, the seasons and sound all share one curve?
Because each of them, underneath, is something going round in a circle, and the wave is a circle unrolled.

## The idea

### Unrolling the unit circle

In [the last lesson](02-radians-unit-circle.md), a point walking round the unit circle had height $\sin\theta$ and
horizontal position $\cos\theta$ after walking an arc of length $\theta$. Now plot that height against the distance
walked. Put $\theta$ along the horizontal axis (now usually called $x$) and $\sin x$ up the vertical axis.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 190" role="img" aria-label="Graphs of y equals sine x and y equals cosine x for x from 0 to 2 pi. The sine curve starts at 0, rises to 1 at pi over 2, returns to 0 at pi, falls to minus 1 at 3 pi over 2 and returns to 0 at 2 pi. The cosine curve is the same shape shifted left by pi over 2, starting at 1">
  <line x1="30" y1="100" x2="350" y2="100" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="40" y1="40" x2="40" y2="160" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <g stroke="currentColor" stroke-width="1" opacity="0.4" stroke-dasharray="3 4">
    <line x1="40" y1="50" x2="340" y2="50"/><line x1="40" y1="150" x2="340" y2="150"/>
  </g>
  <polyline points="40.0,100.0 46.2,93.5 52.5,87.1 58.8,80.9 65.0,75.0 71.2,69.6 77.5,64.6 83.8,60.3 90.0,56.7 96.2,53.8 102.5,51.7 108.8,50.4 115.0,50.0 121.2,50.4 127.5,51.7 133.8,53.8 140.0,56.7 146.2,60.3 152.5,64.6 158.8,69.6 165.0,75.0 171.2,80.9 177.5,87.1 183.8,93.5 190.0,100.0 196.3,106.5 202.5,112.9 208.8,119.1 215.0,125.0 221.2,130.4 227.5,135.4 233.8,139.7 240.0,143.3 246.3,146.2 252.5,148.3 258.8,149.6 265.0,150.0 271.2,149.6 277.5,148.3 283.8,146.2 290.0,143.3 296.2,139.7 302.5,135.4 308.8,130.4 315.0,125.0 321.2,119.1 327.5,112.9 333.8,106.5 340.0,100.0" fill="none" stroke="#eea66f" stroke-width="3"/>
  <polyline points="40.0,50.0 46.2,50.4 52.5,51.7 58.8,53.8 65.0,56.7 71.2,60.3 77.5,64.6 83.8,69.6 90.0,75.0 96.2,80.9 102.5,87.1 108.8,93.5 115.0,100.0 121.2,106.5 127.5,112.9 133.8,119.1 140.0,125.0 146.2,130.4 152.5,135.4 158.8,139.7 165.0,143.3 171.2,146.2 177.5,148.3 183.8,149.6 190.0,150.0 196.3,149.6 202.5,148.3 208.8,146.2 215.0,143.3 221.2,139.7 227.5,135.4 233.8,130.4 240.0,125.0 246.3,119.1 252.5,112.9 258.8,106.5 265.0,100.0 271.2,93.5 277.5,87.1 283.8,80.9 290.0,75.0 296.2,69.6 302.5,64.6 308.8,60.3 315.0,56.7 321.2,53.8 327.5,51.7 333.8,50.4 340.0,50.0" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="115" y="176">π/2</text><text x="190" y="176">π</text><text x="265" y="176">3π/2</text><text x="340" y="176">2π</text>
  </g>
  <g font-size="12" fill="currentColor">
    <text x="20" y="54">1</text><text x="14" y="154">−1</text>
    <text x="96" y="44" fill="currentColor">sin x</text><text x="42" y="40">cos x</text>
  </g>
</svg>
</div>

The orange curve is $y = \sin x$, the blue one $y = \cos x$. Everything you see in them comes from the circle:

- **Between $-1$ and $1$.** The point never leaves the unit circle, so its coordinates never go beyond $\pm 1$.
- **It repeats every $2\pi$.** After a full turn you are back where you started, so $\sin(x + 2\pi) = \sin x$. A
  function that repeats like this is called **periodic**, and the length of one repeat is its **period**.
- **Zeros.** The height is 0 at the two ends of the horizontal diameter: $\sin x = 0$ at $x = 0, \pi, 2\pi, \ldots$, and
  $\cos x = 0$ at $x = \tfrac{\pi}{2}, \tfrac{3\pi}{2}, \ldots$
- **Flat at the top, steep in the middle.** Near the top of the circle the point is moving sideways, so its height
  barely changes; crossing the horizontal axis it moves straight up, so its height changes fastest. That is why the
  wave is rounded at its peaks and steepest at its zeros.
- **Cosine is sine, shifted.** The cosine curve is the sine curve moved $\tfrac{\pi}{2}$ to the left:
  $\cos x = \sin\left(x + \tfrac{\pi}{2}\right)$. On the circle, the $x$-coordinate is a quarter of a turn "ahead" of
  the $y$-coordinate.
- **Symmetry.** $\sin(-x) = -\sin x$ (the sine graph has half-turn symmetry about the origin: an **odd** function) and
  $\cos(-x) = \cos x$ (the cosine graph is a mirror image across the vertical axis: an **even** function).

### Stretching and shifting the wave

Every wave in the opening question has the form

$$y = A\sin\big(B(x - C)\big) + D$$

(or the same with $\cos$), where each letter does one job. The trick to understanding them is to ask what each one
does to the basic wave, one at a time.

**$A$, the amplitude.** Multiplying the output by $A$ stretches the wave vertically. Peaks at 1 become peaks at $A$.
The **amplitude** is $|A|$, the height of a peak above the middle. A negative $A$ also flips the wave upside down.

**$B$, which sets the period.** In $\sin(Bx)$, the inside reaches $2\pi$ (one full cycle) when $x = \tfrac{2\pi}{B}$.
So the wave repeats $B$ times as fast, and

$$\text{period} = \frac{2\pi}{B}$$

$y = \sin 2x$ fits two full waves into $[0, 2\pi]$; $y = \sin\tfrac{x}{2}$ needs $4\pi$ for one.

**$C$, the phase shift.** $\sin(x - C)$ does at $x$ what $\sin x$ did at $x - C$: everything happens $C$ later, so the
graph moves $C$ to the **right**. (A plus sign, $\sin(x + C)$, moves it left.) Note the shift is $C$, not $BC$: that is
why we write $B(x - C)$ with the bracket.

**$D$, the midline.** Adding $D$ lifts the whole wave up by $D$. The horizontal line $y = D$ through the middle of the
wave is the **midline**. The maximum is $D + |A|$ and the minimum is $D - |A|$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 210" role="img" aria-label="Two waves on the same axes from 0 to 2 pi. The blue wave y equals sine x has height 1 and one full cycle. The orange wave y equals 2 sine 2x has height 2 and fits two full cycles in the same space">
  <line x1="30" y1="100" x2="350" y2="100" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="40" y1="15" x2="40" y2="185" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <g stroke="currentColor" stroke-width="1" opacity="0.4" stroke-dasharray="3 4">
    <line x1="40" y1="20" x2="340" y2="20"/><line x1="40" y1="180" x2="340" y2="180"/>
  </g>
  <polyline points="40.0,100.0 46.2,94.8 52.5,89.6 58.8,84.7 65.0,80.0 71.2,75.6 77.5,71.7 83.8,68.3 90.0,65.4 96.2,63.0 102.5,61.4 108.8,60.3 115.0,60.0 121.2,60.3 127.5,61.4 133.8,63.0 140.0,65.4 146.2,68.3 152.5,71.7 158.8,75.6 165.0,80.0 171.2,84.7 177.5,89.6 183.8,94.8 190.0,100.0 196.3,105.2 202.5,110.4 208.8,115.3 215.0,120.0 221.2,124.4 227.5,128.3 233.8,131.7 240.0,134.6 246.3,137.0 252.5,138.6 258.8,139.7 265.0,140.0 271.2,139.7 277.5,138.6 283.8,137.0 290.0,134.6 296.2,131.7 302.5,128.3 308.8,124.4 315.0,120.0 321.2,115.3 327.5,110.4 333.8,105.2 340.0,100.0" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <polyline points="40.0,100.0 46.2,79.3 52.5,60.0 58.8,43.4 65.0,30.7 71.2,22.7 77.5,20.0 83.8,22.7 90.0,30.7 96.2,43.4 102.5,60.0 108.8,79.3 115.0,100.0 121.2,120.7 127.5,140.0 133.8,156.6 140.0,169.3 146.2,177.3 152.5,180.0 158.8,177.3 165.0,169.3 171.2,156.6 177.5,140.0 183.8,120.7 190.0,100.0 196.3,79.3 202.5,60.0 208.8,43.4 215.0,30.7 221.2,22.7 227.5,20.0 233.8,22.7 240.0,30.7 246.3,43.4 252.5,60.0 258.8,79.3 265.0,100.0 271.2,120.7 277.5,140.0 283.8,156.6 290.0,169.3 296.2,177.3 302.5,180.0 308.8,177.3 315.0,169.3 321.2,156.6 327.5,140.0 333.8,120.7 340.0,100.0" fill="none" stroke="#eea66f" stroke-width="3"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="190" y="200">π</text><text x="340" y="200">2π</text>
  </g>
  <g font-size="12" fill="currentColor">
    <text x="20" y="24">2</text><text x="14" y="184">−2</text>
    <text x="88" y="14">y = 2 sin 2x</text><text x="196" y="56">y = sin x</text>
  </g>
</svg>
</div>

### Reading an equation off a graph

Going the other way, from a picture or from data to an equation:

1. $D = \dfrac{\max + \min}{2}$ (the midline is halfway between the top and bottom).
2. $|A| = \dfrac{\max - \min}{2}$.
3. Measure the period (peak to next peak), then $B = \dfrac{2\pi}{\text{period}}$.
4. Choose $C$ so the wave starts in the right place. Cosine starts at a peak, so if you know where a peak is, use
   $\cos$ with $C$ = that $x$. Sine starts on the midline going up.

### The tangent graph

$\tan x = \dfrac{\sin x}{\cos x}$ is undefined wherever $\cos x = 0$, at $x = \pm\tfrac{\pi}{2}, \pm\tfrac{3\pi}{2}, \ldots$
Near those values the bottom is tiny, so $\tan x$ shoots off towards $\pm\infty$: the graph has vertical
**asymptotes** there (lines it approaches but never touches). Its period is only $\pi$, because the point opposite on
the circle, $(-\cos x, -\sin x)$, gives the same ratio.

## Worked examples

**1. Reading the features.** Describe $y = 2\cos\left(x - \tfrac{\pi}{3}\right) + 1$.

1. Amplitude 2, period $\tfrac{2\pi}{1} = 2\pi$, phase shift $\tfrac{\pi}{3}$ to the right, midline $y = 1$.
2. Maximum $1 + 2 = 3$, where the cosine is at its peak: $x - \tfrac{\pi}{3} = 0$, so $x = \tfrac{\pi}{3}$.
3. Minimum $1 - 2 = -1$, half a period later, at $x = \tfrac{\pi}{3} + \pi = \tfrac{4\pi}{3}$.

**2. An equation from a graph.** A wave has maximum 5 and minimum $-1$, a peak at $x = 2$, and peaks repeat every 8
units. Find an equation.

1. $D = \dfrac{5 + (-1)}{2} = 2$ and $A = \dfrac{5 - (-1)}{2} = 3$.
2. $B = \dfrac{2\pi}{8} = \dfrac{\pi}{4}$.
3. A peak at $x = 2$: use cosine with $C = 2$.
4. $y = 3\cos\left(\tfrac{\pi}{4}(x - 2)\right) + 2$. Check at $x = 2$: $3\cos 0 + 2 = 5$. At $x = 6$: $3\cos\pi + 2 = -1$. Good.

**3. The Ferris wheel.** A wheel of radius 20 m has its centre 22 m above the ground and turns once every 4 minutes.
You board at the bottom at time $t = 0$. Find your height $h(t)$, and when you are first 32 m up.

1. Midline 22, amplitude 20, period 4, so $B = \dfrac{2\pi}{4} = \dfrac{\pi}{2}$.
2. You start at the **bottom**, which is a cosine flipped upside down: $h(t) = 22 - 20\cos\left(\tfrac{\pi}{2}t\right)$.
   Check: $h(0) = 22 - 20 = 2$ (boarding 2 m up), $h(2) = 22 + 20 = 42$ (the top, half a turn later).
3. $h = 32$: $-20\cos\left(\tfrac{\pi}{2}t\right) = 10$, so $\cos\left(\tfrac{\pi}{2}t\right) = -\tfrac12$.
4. The first angle with cosine $-\tfrac12$ is $\tfrac{2\pi}{3}$, so $\tfrac{\pi}{2}t = \tfrac{2\pi}{3}$ and $t = \tfrac43$ min,
   that is 1 minute 20 seconds. (The next time is at $\tfrac{4\pi}{3}$, $t = \tfrac83$ min, on the way down.)

**4. Daylight.** In a city at about 44° north, the day length swings between roughly 9 hours in December and roughly
15.5 hours in June, once a year. A simple model, with $t$ the day of the year, is
$L(t) = 12.25 + 3.25\sin\left(\tfrac{2\pi}{365}(t - 80)\right)$: midline $\tfrac{9 + 15.5}{2} = 12.25$, amplitude
$\tfrac{15.5 - 9}{2} = 3.25$, period 365 days, and a shift of 80 days so that the wave crosses its midline going up near
the spring equinox (around 21 March, day 80). It is only a model, but a remarkably close one.

## Try it

1. Give the amplitude and period of $y = 5\sin 3x$ and of $y = -2\cos\tfrac{x}{2}$.
2. Explain, using the unit circle, why $\sin\left(x + \tfrac{\pi}{2}\right) = \cos x$.
3. Describe $y = 4\sin\left(2\left(x - \tfrac{\pi}{6}\right)\right) - 1$: amplitude, period, shift, midline, and the first
   maximum to the right of the shift.
4. Write an equation for a wave with amplitude 2, period 6 and midline $y = 3$ that has a peak at $x = 0$.
5. Solve $\sin x = \tfrac{\sqrt3}{2}$ for $0 \le x < 4\pi$. How does the graph show there must be four answers?
6. On the Ferris wheel of example 3, at which two times in the first turn are you 12 m above the ground?
7. Mars also has seasons, because its axis is tilted, and its year lasts about 687 Earth days. In a model of a
   Martian seasonal cycle with $t$ in Earth days, what is $B$?
8. At a harbour, high tide is 4.2 m at 3:00 and the next low tide is 0.6 m at 9:12. Model the height with a cosine,
   with $t$ in hours after midnight, and estimate the depth at noon.

??? note "Answers"
    1. $y = 5\sin 3x$: amplitude 5, period $\tfrac{2\pi}{3}$. $y = -2\cos\tfrac{x}{2}$: amplitude 2 (the minus sign flips
       it), period $\dfrac{2\pi}{1/2} = 4\pi$.
    2. The point at angle $x + \tfrac{\pi}{2}$ is the point at angle $x$ turned a further quarter turn anticlockwise. A
       quarter turn sends $(a, b)$ to $(-b, a)$, so its new height is the old $x$-coordinate: $\sin\left(x + \tfrac{\pi}{2}\right) = \cos x$.
    3. Amplitude 4, period $\tfrac{2\pi}{2} = \pi$, shift $\tfrac{\pi}{6}$ right, midline $y = -1$. The sine reaches its
       peak a quarter period after it starts: $x = \tfrac{\pi}{6} + \tfrac{\pi}{4} = \tfrac{5\pi}{12}$, where $y = 4 - 1 = 3$.
    4. $B = \tfrac{2\pi}{6} = \tfrac{\pi}{3}$, and a peak at 0 means cosine with no shift: $y = 2\cos\tfrac{\pi x}{3} + 3$.
    5. In $[0, 2\pi)$: $x = \tfrac{\pi}{3}$ and $\pi - \tfrac{\pi}{3} = \tfrac{2\pi}{3}$. Adding $2\pi$: $\tfrac{7\pi}{3}$ and $\tfrac{8\pi}{3}$.
       The line $y = \tfrac{\sqrt3}{2}$ crosses each hump of the wave twice, and $[0, 4\pi)$ holds two humps.
    6. $22 - 20\cos\left(\tfrac{\pi}{2}t\right) = 12$ gives $\cos\left(\tfrac{\pi}{2}t\right) = \tfrac12$, so $\tfrac{\pi}{2}t = \tfrac{\pi}{3}$ or
       $\tfrac{5\pi}{3}$: $t = \tfrac23$ min (40 seconds) and $t = \tfrac{10}{3}$ min (3 minutes 20 seconds).
    7. $B = \dfrac{2\pi}{687} \approx 0.00915$ per day.
    8. From high to low is half a period: 6 hours 12 minutes, so the period is 12.4 hours. Midline $\tfrac{4.2 + 0.6}{2} = 2.4$,
       amplitude $1.8$, peak at $t = 3$: $h(t) = 1.8\cos\left(\tfrac{2\pi}{12.4}(t - 3)\right) + 2.4$. At noon, $t = 12$:
       $h \approx 1.8\cos(4.560) + 2.4 \approx 1.8 \times (-0.152) + 2.4 \approx 2.13$ m.

## Common mistake

**Reading the shift from the wrong form.** In $y = \sin(2x - \tfrac{\pi}{3})$ the shift is **not** $\tfrac{\pi}{3}$. Factor
first: $\sin\left(2\left(x - \tfrac{\pi}{6}\right)\right)$, so the shift is $\tfrac{\pi}{6}$.

**Period confusion.** A bigger $B$ makes the period **shorter**, not longer: the period is $\tfrac{2\pi}{B}$, not $2\pi B$.

## Where it leads

- Previous lesson: [Radians and the unit circle](02-radians-unit-circle.md). Next lesson:
  [Vectors](04-vectors.md).
- The level page: [Level 8: Proof, radians and vectors](index.md).
- Functions, graphs and transformations in general: [Algebra](../../algebra/index.md); and rates of change of these waves
  in [Change](../../change/index.md).
- Waves, oscillations and sound on the U of T shelf: [PHY131 Unit 9 (oscillations)](../../../uoft/PHY131H1/unit09.md)
  and [PHY131 Unit 10 (waves and sound)](../../../uoft/PHY131H1/unit10.md).
- Derivatives of sine and cosine: [MAT137 Unit 4](../../../uoft/MAT137/unit04.md).
