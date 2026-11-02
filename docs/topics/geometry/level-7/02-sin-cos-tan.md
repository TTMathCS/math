---
title: "Sine, cosine and tangent"
---

# Sine, cosine and tangent

*Geometry · level 7, lesson 2 of 7*

## A question to start

Draw a right triangle with one angle of 35°. Make it any size you like: 3 cm across, or 3 metres, or 3 kilometres
on a field. Now measure the side across from the 35° angle and divide it by the longest side.

Everyone who tries this gets the same answer, about 0.574. Change the angle to 50° and everyone gets about 0.766.
The answer does not depend on the size of the triangle at all, only on the angle. Why? And what can you do with a
number that belongs to an angle? It turns out you can measure almost anything.

## The idea

### Why the ratios belong to the angle

Take two right triangles that both have an angle $\theta$ (the Greek letter theta, the usual name for an unknown
angle). Each has a right angle and the angle $\theta$, so by the AA test from the
[previous lesson](01-similar-triangles.md) **they are similar**. One is a scaled copy of the other. Scaling
multiplies every side by the same $k$, so any fraction "one side over another side" stays exactly the same:

$$\frac{k \times \text{side}_1}{k \times \text{side}_2} = \frac{\text{side}_1}{\text{side}_2}$$

So every right triangle with angle $\theta$ has the same side ratios. Each ratio depends only on $\theta$, and the
three most useful ones get names.

### Naming the sides from the angle

In a right triangle, pick one of the two acute angles (the angles smaller than 90°) and call it $\theta$. Then:

- the **hypotenuse** is the longest side, the one across from the right angle;
- the **opposite** side is the one across from $\theta$, not touching it;
- the **adjacent** side is the side touching $\theta$ that is not the hypotenuse ("adjacent" means "next to").

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 190" role="img" aria-label="A right triangle. The angle theta is at the bottom left. The side across from theta is the opposite, the side next to theta is the adjacent, and the longest side is the hypotenuse">
  <polygon points="40,160 280,160 280,30" fill="#9cc9ea" opacity="0.5" stroke="currentColor" stroke-width="2"/>
  <rect x="266" y="146" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 90 160 A 50 50 0 0 0 84 136.2" fill="none" stroke="#eea66f" stroke-width="3"/>
  <g font-size="15" fill="currentColor">
    <text x="98" y="152">θ</text>
    <text x="160" y="182" text-anchor="middle">adjacent</text>
    <text x="290" y="100">opposite</text>
    <text x="120" y="82" text-anchor="middle">hypotenuse</text>
  </g>
</svg>
</div>

Opposite and adjacent swap if you switch to the other acute angle. The hypotenuse never changes.

### The three ratios

$$\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}} \qquad \cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}} \qquad \tan\theta = \frac{\text{opposite}}{\text{adjacent}}$$

They are said "sine", "cosine" and "tangent". The memory aid **SOH CAH TOA** packs them into three syllables:
**S**ine = **O**pposite over **H**ypotenuse, **C**osine = **A**djacent over **H**ypotenuse, **T**angent =
**O**pposite over **A**djacent.

So the opening puzzle says $\sin 35° \approx 0.574$. Your calculator stores these values for every angle. Make sure
it is set to **degrees** (often shown as DEG or D on the screen).

Where do the names come from? The story goes that the Sanskrit word for a half-chord of a circle, used by Indian
astronomers some 1500 years ago, passed into Arabic, was misread, and was translated into Latin as *sinus*, meaning
a fold or bay. "Cosine" is short for "sine of the complement", which we will see below.

### What the values can and cannot be

The hypotenuse is the longest side. So opposite over hypotenuse is always less than 1, and so is adjacent over
hypotenuse. **For acute angles, sine and cosine are between 0 and 1.** If you ever compute $\sin\theta = 1.3$, you
have made a mistake.

Tangent is different: opposite over adjacent can be anything. At 45° the two legs are equal, so $\tan 45° = 1$. As
the angle grows towards 90°, the opposite side gets huge compared with the adjacent one: $\tan 89° \approx 57.3$.

### Three connections between the ratios

**Tangent from sine and cosine.** Divide the two fractions:

$$\frac{\sin\theta}{\cos\theta} = \frac{\text{opp}/\text{hyp}}{\text{adj}/\text{hyp}} = \frac{\text{opp}}{\text{adj}} = \tan\theta$$

**The complement.** The two acute angles of a right triangle add to 90°, so the other one is $90° - \theta$ (called
the **complement** of $\theta$). The side opposite $\theta$ is adjacent to $90° - \theta$. So

$$\sin\theta = \cos(90° - \theta)$$

For example $\sin 70° \approx 0.940$ and $\cos 20° \approx 0.940$. That is the "co" in cosine.

**Pythagoras in disguise.** Divide $\text{opp}^2 + \text{adj}^2 = \text{hyp}^2$ by $\text{hyp}^2$:

$$(\sin\theta)^2 + (\cos\theta)^2 = 1$$

This is usually written $\sin^2\theta + \cos^2\theta = 1$. It returns in [level 8](../level-8/02-radians-unit-circle.md)
as the most used identity in trigonometry.

### Exact values for 30°, 45° and 60°

Three angles have values you can find by pure reasoning, no calculator.

**45°.** Cut a square of side 1 along its diagonal. Each half is a right triangle with two 45° angles and legs 1
and 1. By Pythagoras the diagonal is $\sqrt{1^2 + 1^2} = \sqrt2$.

**30° and 60°.** Take an equilateral triangle of side 2 (all angles 60°) and cut it down the middle. Each half has
angles 30°, 60°, 90°, a hypotenuse of 2, a short side of 1, and a height of $\sqrt{2^2 - 1^2} = \sqrt3$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 190" role="img" aria-label="Left: half of a unit square, a right triangle with legs 1 and 1 and hypotenuse root 2. Right: half of an equilateral triangle of side 2, with sides 1, root 3 and 2 and angles 30 and 60 degrees">
  <polygon points="30,160 140,160 140,50" fill="#eea66f" opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <rect x="128" y="148" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="230,160 300,160 300,38.8" fill="#7ccf9a" opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <rect x="288" y="148" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="14" fill="currentColor">
    <text x="80" y="180">1</text><text x="148" y="110">1</text><text x="62" y="96">√2</text>
    <text x="52" y="154">45°</text><text x="112" y="74">45°</text>
    <text x="262" y="180">1</text><text x="308" y="104">√3</text><text x="242" y="94">2</text>
    <text x="248" y="154">60°</text><text x="282" y="70">30°</text>
  </g>
</svg>
</div>

Reading SOH CAH TOA off these two triangles:

| $\theta$ | $\sin\theta$ | $\cos\theta$ | $\tan\theta$ |
| --- | --- | --- | --- |
| 30° | $\tfrac12$ | $\tfrac{\sqrt3}{2}$ | $\tfrac{1}{\sqrt3}$ |
| 45° | $\tfrac{1}{\sqrt2}$ | $\tfrac{1}{\sqrt2}$ | 1 |
| 60° | $\tfrac{\sqrt3}{2}$ | $\tfrac12$ | $\sqrt3$ |

Notice the sine column read downwards is the cosine column read upwards. That is $\sin\theta = \cos(90° - \theta)$
again.

### Finding a side, finding an angle

**To find a side:** mark the angle you know, label the sides opposite, adjacent and hypotenuse from it, and choose
the ratio that uses the side you know and the side you want. Then rearrange.

**To find an angle:** use two known sides to get a ratio, then ask "which angle has this ratio?" That question is
answered by the **inverse** functions $\sin^{-1}$, $\cos^{-1}$ and $\tan^{-1}$ (on calculators often the SHIFT or 2nd
key). The little $-1$ does not mean "one over"; it means "undo". $\sin^{-1}(0.5) = 30°$ because $\sin 30° = 0.5$.

## Worked examples

**1. A rover on a slope.** A rover drives 50 m straight up a slope that rises at 12°. How much height does it gain,
and how far across the map does it move?

1. The 50 m drive is the hypotenuse. The height is opposite the 12° angle; the map distance is adjacent.
2. Height: $\sin 12° = \dfrac{h}{50}$, so $h = 50\sin 12° \approx 50 \times 0.2079 = 10.4$ m.
3. Across: $\cos 12° = \dfrac{x}{50}$, so $x = 50\cos 12° \approx 48.9$ m.
4. Check with Pythagoras: $10.4^2 + 48.9^2 \approx 108 + 2392 = 2500 = 50^2$. Good.

**2. The unknown on the bottom.** In a right triangle, the side opposite a 35° angle is 8 cm. Find the hypotenuse
and the adjacent side.

1. Opposite and hypotenuse: sine. $\sin 35° = \dfrac{8}{h}$.
2. The unknown is on the bottom, so multiply both sides by $h$ and then divide by $\sin 35°$:
   $h = \dfrac{8}{\sin 35°} \approx \dfrac{8}{0.5736} \approx 13.9$ cm.
3. Opposite and adjacent: tangent. $\tan 35° = \dfrac{8}{a}$, so $a = \dfrac{8}{\tan 35°} \approx 11.4$ cm.

**3. Finding an angle.** A right triangle has legs 5 and 12. Find its smallest angle.

1. The smallest angle is opposite the smallest side, 5. The other leg, 12, is adjacent.
2. $\tan\theta = \dfrac{5}{12} \approx 0.4167$.
3. $\theta = \tan^{-1}(0.4167) \approx 22.6°$. The other acute angle is $90° - 22.6° = 67.4°$.

**4. An exact answer.** A right triangle has hypotenuse 10 and an angle of 60°. Find the side opposite the 60° angle
exactly.

1. $\sin 60° = \dfrac{x}{10}$, so $x = 10 \sin 60° = 10 \times \dfrac{\sqrt3}{2} = 5\sqrt3$.
2. As a decimal, $5\sqrt3 \approx 8.66$. The exact form is better if later steps use it.

## Try it

1. A right triangle has sides 8, 15 and 17. Find $\sin$, $\cos$ and $\tan$ of the angle opposite the side 8.
2. A right triangle has hypotenuse 12 and an angle of 28°. Find both legs to one decimal place.
3. In a right triangle, the side adjacent to a 40° angle is 20. Find the opposite side and the hypotenuse.
4. A right triangle has an angle $\theta$ whose opposite side is 7 and hypotenuse is 10. Find $\theta$.
5. A 6 m ladder stands with its foot 1.5 m from a wall. What angle does it make with the ground? (A common safety
   guide says about 75°.)
6. Without a calculator, find $\sin 30° + \cos 60°$ and $\tan 45° \times \tan 60°$.
7. Explain why $\tan\theta > 1$ exactly when $\theta > 45°$, using a picture of the triangle.
8. Use $\sin^2\theta + \cos^2\theta = 1$ to find $\cos\theta$ when $\sin\theta = \tfrac{3}{5}$ and $\theta$ is acute.

??? note "Answers"
    1. Opposite 8, adjacent 15, hypotenuse 17: $\sin = \tfrac{8}{17}$, $\cos = \tfrac{15}{17}$, $\tan = \tfrac{8}{15}$.
    2. Opposite: $12 \sin 28° \approx 12 \times 0.4695 \approx 5.6$. Adjacent: $12 \cos 28° \approx 12 \times 0.8829 \approx 10.6$.
       Check: $5.6^2 + 10.6^2 \approx 31.7 + 112.3 = 144 = 12^2$.
    3. Opposite: $20 \tan 40° \approx 20 \times 0.8391 \approx 16.8$. Hypotenuse: $\dfrac{20}{\cos 40°} \approx \dfrac{20}{0.7660} \approx 26.1$.
    4. $\sin\theta = 0.7$, so $\theta = \sin^{-1}(0.7) \approx 44.4°$.
    5. The ladder is the hypotenuse (6) and the 1.5 m is adjacent to the ground angle: $\cos\theta = \tfrac{1.5}{6} = 0.25$,
       so $\theta = \cos^{-1}(0.25) \approx 75.5°$. That matches the guide.
    6. $\tfrac12 + \tfrac12 = 1$. And $1 \times \sqrt3 = \sqrt3$.
    7. $\tan\theta > 1$ means the opposite side is longer than the adjacent side. In a triangle the longer side is
       across from the bigger angle, so $\theta$ is bigger than the other acute angle $90° - \theta$. That happens
       exactly when $\theta > 45°$.
    8. $\cos^2\theta = 1 - \tfrac{9}{25} = \tfrac{16}{25}$, so $\cos\theta = \tfrac45$ (positive, since $\theta$ is
       acute). This is the 3, 4, 5 triangle.

## Common mistake

**Labelling before choosing the angle.** "Opposite" and "adjacent" only mean something from a particular angle. Mark
the angle first, then label. A side opposite one acute angle is adjacent to the other.

**Degrees and radians.** If $\sin 30$ gives $-0.988$, your calculator is in **radians**, a different way of measuring
angles you will meet in [level 8](../level-8/02-radians-unit-circle.md). Switch it to degrees.

## Where it leads

- Previous lesson: [Similar triangles and scale factors](01-similar-triangles.md). Next lesson:
  [Angles of elevation and depression](03-elevation-depression.md), where these ratios measure heights you cannot
  climb.
- The level page: [Level 7: Similarity and trigonometry](index.md).
- Ratios and proportional reasoning: [Ratio and rates](../../ratio/index.md).
- Sine and cosine become functions with graphs and derivatives on the U of T shelf:
  [MAT137 Unit 4 (transcendental functions)](../../../uoft/MAT137/unit04.md).
