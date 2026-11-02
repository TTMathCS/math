---
title: "Master: Similar triangles and trigonometry"
---

# Master: Similar triangles and trigonometry

*Geometry · step 4 of 5*

## A question to start

How tall is a tree you cannot climb? Or a cliff on Mars that no one has ever stood beside?

The story goes that Thales, a Greek thinker of about 2600 years ago, measured the height of a great pyramid in
Egypt without climbing it. He waited for the moment when his own shadow was as long as he was tall, and measured
the pyramid's shadow at that moment. Whether or not the story is true, the idea is perfectly sound, and with one
more step it becomes **trigonometry**: the tool surveyors, builders and spacecraft navigators use to measure what
they cannot reach.

## The idea

### Similar shapes

Two shapes are **similar** if one is an exact enlargement of the other: the same shape, possibly a different size.
A photo and a bigger print of it are similar. So is a map and the land it shows.

In similar triangles:

- the **matching angles are equal**, and
- the **matching sides are in the same ratio**. Every side of the big one is the same number of times the matching
  side of the small one. That number is the **scale factor**.

(If the scale factor is 1, the triangles are exactly the same size and shape, and are called **congruent**.)

### When are two triangles similar?

You do not need to check everything. The simplest test is **AA (angle, angle)**: if two angles of one triangle equal
two angles of the other, the triangles are similar. The third angles must then match too, because each triangle's
angles add to 180°. Two other tests also work: all three pairs of sides in the same ratio (**SSS**), or two pairs of
sides in the same ratio with the angle between them equal (**SAS**).

### Shadows

At any one moment, the Sun's rays all come in at the same angle. A tree and its shadow, and a person and their
shadow, make two right triangles with the same angle at the tip of the shadow. By AA, they are similar. So

$$\frac{\text{tree's height}}{\text{tree's shadow}} = \frac{\text{person's height}}{\text{person's shadow}}$$

### From similar triangles to trigonometry

Here is the key idea. Take any right triangle with an angle $\theta$ (the Greek letter theta, often used for
angles). **Every** right triangle with that same angle $\theta$ is similar to it, by AA (they share $\theta$ and the
right angle). So the ratios of their sides are the same, however big they are. Each ratio depends only on the
angle, and each gets a name.

First name the sides **from the point of view of the angle $\theta$**:

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

- the **hypotenuse** is the longest side, across from the right angle;
- the **opposite** side is across from $\theta$;
- the **adjacent** side is the one next to $\theta$ that is not the hypotenuse.

Then the three **trigonometric ratios** are:

$$\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}} \qquad \cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}} \qquad \tan\theta = \frac{\text{opposite}}{\text{adjacent}}$$

They are read "sine", "cosine" and "tangent". A common way to remember them is **SOH CAH TOA**: Sine is Opposite
over Hypotenuse, Cosine is Adjacent over Hypotenuse, Tangent is Opposite over Adjacent.

A calculator knows the value of each ratio for every angle (set it to **degrees**). A few angles have exact values
worth knowing, which come from half a square (45°) and half an equilateral triangle (30° and 60°):

| $\theta$ | $\sin\theta$ | $\cos\theta$ | $\tan\theta$ |
| --- | --- | --- | --- |
| 30° | $\tfrac12$ | $\tfrac{\sqrt3}{2}$ | $\tfrac{1}{\sqrt3}$ |
| 45° | $\tfrac{1}{\sqrt2}$ | $\tfrac{1}{\sqrt2}$ | 1 |
| 60° | $\tfrac{\sqrt3}{2}$ | $\tfrac12$ | $\sqrt3$ |

### Finding sides and finding angles

**To find a side**, pick the ratio that links the side you know, the side you want and the angle. Then rearrange.

**To find an angle**, work out the ratio from two sides, then use the **inverse** button on the calculator:
$\sin^{-1}$, $\cos^{-1}$ or $\tan^{-1}$. These answer the question "which angle has this ratio?"

An **angle of elevation** is the angle you look **up** through, from flat ground, to see the top of something.

### Triangles without a right angle

Two more rules work in **any** triangle. Label the sides $a$, $b$, $c$, and the angles opposite them $A$, $B$, $C$.

**The sine law:** each side divided by the sine of its opposite angle gives the same answer.

$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$

Use it when you know an angle and the side opposite it, plus one more side or angle.

**The cosine law:** Pythagoras with a correction for angles that are not 90°.

$$c^2 = a^2 + b^2 - 2ab\cos C$$

Use it when you know two sides and the angle **between** them, or all three sides. When $C = 90°$, $\cos C = 0$ and
it becomes Pythagoras exactly.

## Worked examples

**1. The tree's shadow.** A tree casts a 12 m shadow. At the same moment, a 1.5 m tall person casts a 2 m shadow.
The triangles are similar, so $\dfrac{h}{12} = \dfrac{1.5}{2}$, and $h = 12 \times 0.75 = 9$ m.

**2. A ladder.** A 5 m ladder leans against a wall, making an angle of 70° with the ground. How high does it reach?

1. From the 70° angle: the ladder is the hypotenuse, and the height is the opposite side.
2. Opposite and hypotenuse means sine: $\sin 70° = \dfrac{h}{5}$.
3. $h = 5 \sin 70° \approx 5 \times 0.940 = 4.70$ m.

**3. A cliff on Mars.** A rover stands on flat ground 150 m from the foot of a cliff. Its camera must tilt up 20° to
see the top. How tall is the cliff?

1. From the 20° angle: the height is opposite, and the 150 m distance is adjacent.
2. Opposite and adjacent means tangent: $\tan 20° = \dfrac{h}{150}$.
3. $h = 150 \tan 20° \approx 150 \times 0.364 = 54.6$ m (ignoring the small height of the camera itself).

**4. Finding an angle.** A ramp rises 3 m over a flat distance of 4 m. What angle does it make with the ground?
$\tan\theta = \dfrac34 = 0.75$, so $\theta = \tan^{-1}(0.75) \approx 36.9°$.

**5. The cosine law.** Two sides of a triangle are 7 cm and 9 cm, with 50° between them. The third side:
$c^2 = 49 + 81 - 2 \times 7 \times 9 \cos 50° \approx 130 - 126 \times 0.643 = 130 - 81.0 = 49.0$, so
$c \approx 7.0$ cm.

**6. The sine law.** A triangle has angle $A = 40°$ with opposite side $a = 8$, and angle $B = 65°$. Then
$\dfrac{b}{\sin 65°} = \dfrac{8}{\sin 40°}$, so $b = \dfrac{8 \sin 65°}{\sin 40°} \approx \dfrac{8 \times 0.906}{0.643} \approx 11.3$.

## Try it

1. A triangle has sides 4, 6 and 8. A similar triangle has shortest side 10. Find its other two sides.
2. In a right triangle with sides 3, 4 and 5, find $\sin$, $\cos$ and $\tan$ of the angle opposite the side 3.
3. A right triangle has hypotenuse 20 and an angle of 32°. Find the side opposite the 32° angle, to one decimal place.
4. A track climbs 2 m for every 10 m it goes across. What angle does it make with the flat ground?
5. Two sides of a triangle are 6 and 10 with an angle of 60° between them. Find the third side.
6. A triangle has sides 5, 7 and 8. Find the angle opposite the side of length 7.

??? note "Answers"
    1. The scale factor is $10 \div 4 = 2.5$. The other sides are $6 \times 2.5 = 15$ and $8 \times 2.5 = 20$.
    2. Opposite 3, adjacent 4, hypotenuse 5: $\sin = \tfrac35$, $\cos = \tfrac45$, $\tan = \tfrac34$.
    3. $\text{opposite} = 20 \sin 32° \approx 20 \times 0.530 = 10.6$.
    4. $\tan\theta = \tfrac{2}{10} = 0.2$, so $\theta = \tan^{-1}(0.2) \approx 11.3°$.
    5. $c^2 = 36 + 100 - 2 \times 6 \times 10 \times \cos 60° = 136 - 120 \times \tfrac12 = 76$, so
       $c = \sqrt{76} \approx 8.72$.
    6. Rearrange the cosine law for the angle: $\cos C = \dfrac{a^2 + b^2 - c^2}{2ab} = \dfrac{25 + 64 - 49}{2 \times 5 \times 8} = \dfrac{40}{80} = \dfrac12$,
       so the angle is $60°$.

## Common mistake

**Labelling the sides before choosing the angle.** "Opposite" and "adjacent" only make sense **from a particular
angle**. The side opposite one acute angle of a right triangle is adjacent to the other. Always mark the angle you
are using first, then label the sides from where it sits. And check the calculator is in degrees, not radians: in
the wrong mode, $\sin 30$ gives about $-0.988$ instead of $0.5$.

## Where it leads

- Next step: [Beyond: geometric proof and vectors](05-beyond.md), where trigonometry moves onto a circle and turns
  into arrows that carry direction.
- Back a step: [Build: Pythagoras and circles](03-build.md)
- Similar shapes and scale factors in maps and models: [Measurement](../measurement/index.md) and
  [Ratio and rates](../ratio/index.md).
- Sine and cosine as functions with graphs, and their derivatives, on the U of T shelf:
  [MAT137 Unit 4 (transcendental functions)](../../uoft/MAT137/unit04.md).
