---
title: "Geometric probability"
---

# Geometric probability

*Probability · level 6, lesson 6 of 6*

## A question to start

A square dartboard has a circle drawn inside it, just touching all four sides. A dart is thrown so that it lands
somewhere on the board, with every spot equally likely. What is the chance that it lands inside the circle?

There is no list of outcomes to count here: the dart could land at infinitely many points. Yet the answer is a clean
and famous number:

$$P(\text{inside the circle}) = \frac{\pi}{4} \approx 0.785.$$

The number $\pi$, from circles, has turned up in a question about chance. In this lesson, probabilities are measured
with **lengths and areas** instead of counts, and you will see where that $\pi$ comes from.

## The idea

### When you cannot count

Up to now, outcomes could be listed: 6 faces of a die, 52 cards, 36 pairs of dice. But some experiments have
**infinitely many** possible outcomes:

- the exact time you arrive at a bus stop;
- the exact point where a dart lands;
- the exact place a stick breaks.

You cannot divide "favourable" by "possible" when both are infinite. Instead we use the idea behind it: **each part
gets a share of the chance in proportion to its size**.

### The uniform model

We say a random point is **uniform** (or "chosen at random", with no preferred spot) on a region when the chance of
landing in any part depends only on the **size** of that part, not on where it is. Then

$$P(\text{event}) = \frac{\text{size of the favourable part}}{\text{size of the whole region}},$$

where "size" means **length** for a point on a line, and **area** for a point in a flat region. This is called
**geometric probability**. It is the "favourable over possible" rule from level 3, with lengths or areas in place of
counts.

All the rules from levels 5 and 6 still work: mutually exclusive parts add, the complement is "1 minus", and so on,
because lengths and areas add up just like counts do.

### Lengths: waiting for a bus

A bus comes exactly every 10 minutes. You arrive at a random moment, with no idea of the timetable. What is the chance
you wait 3 minutes or less?

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 80" role="img" aria-label="A number line from 0 to 10 minutes after the last bus. The last 3 minutes, from 7 to 10, are shaded: arriving then means waiting 3 minutes or less.">
  <line x1="30" y1="40" x2="370" y2="40" stroke="currentColor" stroke-width="2"/>
  <rect x="268" y="30" width="102" height="20" fill="#7ccf9a"/>
  <g stroke="currentColor" stroke-width="1.5">
    <line x1="30" y1="32" x2="30" y2="48"/><line x1="268" y1="32" x2="268" y2="48"/><line x1="370" y1="32" x2="370" y2="48"/>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="30" y="66">0 (last bus)</text><text x="268" y="66">7</text><text x="370" y="66">10 (next bus)</text>
    <text x="319" y="22">wait 3 min or less</text><text x="150" y="22">wait more than 3 min</text>
  </g>
</svg>
</div>

Measure your arrival time in minutes after the last bus: a random point between 0 and 10. You wait 3 minutes or less
if you arrive between 7 and 10, a stretch of length 3 out of 10:

$$P(\text{wait} \le 3) = \frac{3}{10}.$$

### A point has no length

What is the chance you wait **exactly** 3 minutes, not 2.9999 or 3.0001? The favourable part is a single point, which
has length 0. So the probability is $\tfrac{0}{10} = 0$.

This is strange but important: **an event with probability 0 can still happen**. You do arrive at some exact moment,
and every exact moment had probability 0. With infinitely many outcomes, "probability 0" means "it would almost never
happen if you tried again", not "impossible". It also means that "wait less than 3" and "wait at most 3" have the same
chance. You will meet this again with continuous random variables in [level 8](../level-8/index.md).

### Areas: the dart and $\pi$

Back to the question. Let the circle have radius $r$. The square just around it has side $2r$.

- Area of the square: $(2r)^2 = 4r^2$.
- Area of the circle: $\pi r^2$.

$$P(\text{inside the circle}) = \frac{\pi r^2}{4r^2} = \frac{\pi}{4} \approx 0.785.$$

The $r$ cancels, so the answer is the same for any size of board. And the $\pi$ is there simply because the area of a
circle has $\pi$ in it.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 200" role="img" aria-label="Left: a square with a circle just fitting inside it. Right: a 60 by 60 square of arrival times for two friends, with a shaded diagonal band where their arrival times are within 15 minutes of each other; the two unshaded corner triangles each have legs of 45 minutes.">
  <rect x="20" y="20" width="160" height="160" fill="#9cc9ea" fill-opacity="0.4" stroke="currentColor" stroke-width="2"/>
  <circle cx="100" cy="100" r="80" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="100" y="130" font-size="13" text-anchor="middle" fill="currentColor">area πr²</text>
  <line x1="100" y1="100" x2="180" y2="100" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="140" y="94" font-size="12" text-anchor="middle" fill="currentColor">r</text>
  <rect x="230" y="10" width="180" height="180" fill="none" stroke="currentColor" stroke-width="2"/>
  <polygon points="230,190 275,190 410,55 410,10 365,10 230,145" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="345" y="160">miss</text><text x="275" y="45">miss</text><text x="320" y="105">meet</text>
  </g>
</svg>
</div>

Turned round, this gives a way to **estimate** $\pi$ by chance: throw many random points into the square, count the
fraction inside the circle, and multiply by 4. This idea, called the **Monte Carlo method**, is in
[level 8](../level-8/index.md).

### Two random numbers make a point in a square

Here is a clever trick. If **two** quantities are each chosen at random, independently, you can treat the pair as
**one random point** in a square: the first number across, the second up. Questions about the two numbers become
questions about areas.

**Meeting a friend.** You and a friend agree to meet at a café between 12:00 and 1:00. Each of you arrives at a random
time in that hour, independently, waits 15 minutes, and leaves if the other has not come. What is the chance you
meet?

Let $x$ be your arrival time and $y$ your friend's, in minutes after 12:00. The point $(x, y)$ is uniform in a
$60 \times 60$ square (right-hand picture: $x$ across, $y$ up). You meet when your arrival times differ by at most 15
minutes: $|x - y| \le 15$. That is the shaded band along the diagonal.

The two unshaded corners are right triangles with legs $60 - 15 = 45$. So

- the area where you miss is $2 \times \tfrac12 \times 45 \times 45 = 2025$;
- the area where you meet is $3600 - 2025 = 1575$;
- $P(\text{meet}) = \tfrac{1575}{3600} = \tfrac{7}{16} \approx 0.44$.

A shorter way: $P(\text{miss}) = \left(\tfrac{45}{60}\right)^2 = \left(\tfrac34\right)^2 = \tfrac{9}{16}$ (the two
triangles fit together into a $45 \times 45$ square), so $P(\text{meet}) = 1 - \tfrac{9}{16} = \tfrac{7}{16}$.

<figure class="play" data-play="spinner" data-parts="gold:1,blue:2,red:3"><span class="ai-tag">AI-created</span><figcaption><b>Chance by area.</b> Each colour's share of the circle is its chance.</figcaption></figure>

## Worked examples

**1. A dartboard with rings.** A round board has radius 10 cm. The bullseye is a circle of radius 2 cm in the middle,
and there is a ring between radius 4 cm and radius 6 cm. A dart lands uniformly on the board. Find the chance of the
bullseye and of the ring.

- Board area: $\pi \times 10^2 = 100\pi$.
- Bullseye: $\pi \times 2^2 = 4\pi$, so $P = \tfrac{4\pi}{100\pi} = \tfrac{1}{25} = 0.04$.
- Ring: $\pi \times 6^2 - \pi \times 4^2 = 36\pi - 16\pi = 20\pi$, so $P = \tfrac{20\pi}{100\pi} = \tfrac15 = 0.2$.

The $\pi$ cancels each time: for circles, chances depend on **radius squared**. Doubling the bullseye radius makes it
4 times as likely to hit.

**2. Two numbers and a line.** Two numbers $x$ and $y$ are each chosen uniformly between 0 and 1, independently. Find
$P(x + y < 1)$ and $P(x + y < \tfrac12)$.

- The point $(x, y)$ is uniform in the unit square (area 1).
- $x + y < 1$ is the triangle below the line from $(0, 1)$ to $(1, 0)$: area $\tfrac12 \times 1 \times 1 = \tfrac12$.
- $x + y < \tfrac12$ is a smaller triangle with legs $\tfrac12$: area $\tfrac12 \times \tfrac12 \times \tfrac12 = \tfrac18$.

**3. Breaking a stick.** A stick 1 metre long is broken at a random point. Find the chance that both pieces are
longer than 20 cm.

- Let the break be $x$ metres from the left end, uniform from 0 to 1.
- Both pieces longer than 0.2 means $x > 0.2$ and $1 - x > 0.2$, so $0.2 < x < 0.8$.
- That stretch has length 0.6, so $P = 0.6$.

## Try it

1. A bus comes every 12 minutes, and you arrive at a random time. Find the chance you wait more than 9 minutes.
2. A 1-metre stick is broken at a random point. Find the chance the left-hand piece is shorter than 30 cm.
3. A square board has side 20 cm. A circle of radius 5 cm is drawn in the middle. A dart lands uniformly on the
   board. Find the chance it lands in the circle.
4. A round board has radius 10 cm and a bullseye of radius 1 cm. Find the chance a uniformly random dart hits the
   bullseye.
5. In the meeting problem, each friend waits only **10** minutes. Find the chance they meet.
6. How long should each friend wait so that the chance of meeting is exactly $\tfrac12$? (Give the answer to the
   nearest tenth of a minute.)
7. A stick is broken at a random point. Find the chance that the longer piece is at least twice as long as the
   shorter piece.
8. A point $(x, y)$ is uniform in the unit square. Find $P(x > y)$, and $P(x = y)$.

??? note "Answers"
    1. You wait more than 9 minutes if you arrive within 3 minutes after a bus: length 3 out of 12, so $\dfrac{3}{12} = \dfrac14$.
    2. The break must be in the first 0.3 m: $P = 0.3$.
    3. $\dfrac{\pi \times 5^2}{20^2} = \dfrac{25\pi}{400} = \dfrac{\pi}{16} \approx 0.196$.
    4. $\dfrac{\pi \times 1^2}{\pi \times 10^2} = \dfrac{1}{100}$.
    5. The corner triangles now have legs $60 - 10 = 50$. $P(\text{miss}) = \left(\dfrac{50}{60}\right)^2 = \dfrac{25}{36}$,
       so $P(\text{meet}) = \dfrac{11}{36} \approx 0.31$.
    6. With waiting time $w$: $P(\text{meet}) = 1 - \left(\dfrac{60 - w}{60}\right)^2$. Set this to $\dfrac12$:
       $\left(\dfrac{60 - w}{60}\right)^2 = \dfrac12$, so $\dfrac{60 - w}{60} = \dfrac{1}{\sqrt2} \approx 0.7071$ and
       $w = 60(1 - 0.7071) \approx 17.6$ minutes.
    7. Break at $x$ (stick length 1). The longer piece is at least twice the shorter when the shorter piece is at most
       $\dfrac13$ of the stick: $x \le \dfrac13$ or $x \ge \dfrac23$. Total length $\dfrac13 + \dfrac13 = \dfrac23$, so
       $P = \dfrac23$.
    8. $x > y$ is the triangle below the diagonal, half the square: $\dfrac12$. $x = y$ is the diagonal line itself,
       which has area 0, so $P(x = y) = 0$ (possible, but probability 0).

## Common mistake

**Using lengths when the question needs areas (or radius instead of area).** A bullseye with half the radius of the
board is not hit half the time: areas go with radius **squared**, so it is hit a quarter of the time.

**Assuming "random" means uniform without checking.** Real darts are aimed, so they land near the middle more often;
real people arrive near the agreed time more often. The geometric answers are only as good as the uniform model.
Always say what "at random" means.

## Where it leads

- Back: [The Monty Hall problem](05-monty-hall.md) · Next level: [Level 7: Random variables and expected value](../level-7/index.md).
- [Level 6 page](index.md) · [Probability topic page](../index.md)
- Areas of circles, triangles and rings: [Geometry](../../geometry/index.md) and [Measurement](../../measurement/index.md).
- Probability as area under a curve, and why single points have probability 0: continuous random variables in
  [level 8](../level-8/index.md). Estimating $\pi$ with random points: Monte Carlo, also in level 8.
- Areas under curves are defined by the integral, the heart of first-year calculus:
  [MAT137 Unit 7: The definition of the integral](../../../uoft/MAT137/unit07.md).
