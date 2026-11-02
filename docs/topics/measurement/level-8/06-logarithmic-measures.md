---
title: "Logarithmic measures"
---

# Logarithmic measures

*Measurement · level 8, lesson 6 of 6*

## A question to start

A busy street is about 80 decibels. A quiet conversation is about 60. The street is only 20 decibels louder. So is it
a third louder? A third more sound energy?

No. The street delivers about **100 times** as much sound energy to your ear each second. And a magnitude 7 earthquake
is not "a bit stronger" than a magnitude 5: it releases about **1000 times** as much energy. Lemon juice, at pH 2, is
not "a bit more acidic" than milk, at about pH 6.5: it has tens of thousands of times as many acid particles per
litre.

Decibels, earthquake magnitudes and pH are all **logarithmic measures**. On each scale, a step of 1 does not mean
"add 1". It means "multiply by a fixed factor". This lesson shows how they work, why they are used, and how to move
between the scale and the real quantity.

## The idea

### When numbers cover too many powers of ten

Some quantities come in an enormous range. The quietest sound a young person can hear carries about $10^{-12}$ watts
per square metre to the ear; a sound loud enough to hurt carries about 1 W/m². That is a range of a **million
million** ($10^{12}$). On an ordinary number line, every quiet sound would be squashed into an invisible speck next to
zero.

The answer is to measure **how many powers of ten** a quantity is, rather than the quantity itself. That is exactly what
a **logarithm** does ([Logarithms](../../algebra/level-8/04-logarithms.md)):

$$\log_{10} x = y \quad \text{means} \quad 10^y = x.$$

So $\log_{10} 1000 = 3$, $\log_{10} 10^{-12} = -12$, and $\log_{10} 2 \approx 0.301$. The key law is

$$\log_{10}(a \times b) = \log_{10} a + \log_{10} b.$$

**Multiplying the quantity adds to the logarithm.** That is what turns "times 10" into "plus 1". It is the ×10 ruler
from [Fermi estimates](../level-7/06-fermi-estimates.md), now with a formula.

### Decibels: sound level

The **sound intensity** $I$ is the power of sound passing through each square metre, in W/m². The **sound level** in
decibels (dB) compares it with a reference intensity $I_0 = 10^{-12}$ W/m², about the threshold of hearing:

$$L = 10 \log_{10}\!\left(\frac{I}{I_0}\right) \text{ dB}.$$

Why the 10? The original unit was the **bel**, one power of ten. A bel was too coarse, so it is split into ten
**deci**bels.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 120" role="img" aria-label="A decibel scale from 0 to 120 in equal steps of 20, with the matching intensity written below as a power of ten, and examples: threshold of hearing at 0, whisper about 20 to 30, conversation about 60, busy street about 80, pain about 120">
  <rect x="30" y="50" width="400" height="12" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor"/>
  <g stroke="currentColor" stroke-width="1.5">
    <line x1="30" y1="44" x2="30" y2="68"/><line x1="96.7" y1="44" x2="96.7" y2="68"/><line x1="163.3" y1="44" x2="163.3" y2="68"/>
    <line x1="230" y1="44" x2="230" y2="68"/><line x1="296.7" y1="44" x2="296.7" y2="68"/><line x1="363.3" y1="44" x2="363.3" y2="68"/>
    <line x1="430" y1="44" x2="430" y2="68"/>
  </g>
  <g font-size="11" fill="currentColor" text-anchor="middle">
    <text x="30" y="84">0 dB</text><text x="96.7" y="84">20</text><text x="163.3" y="84">40</text><text x="230" y="84">60</text>
    <text x="296.7" y="84">80</text><text x="363.3" y="84">100</text><text x="430" y="84">120</text>
    <text x="30" y="102">10⁻¹²</text><text x="96.7" y="102">10⁻¹⁰</text><text x="163.3" y="102">10⁻⁸</text><text x="230" y="102">10⁻⁶</text>
    <text x="296.7" y="102">10⁻⁴</text><text x="363.3" y="102">10⁻²</text><text x="430" y="102">1 W/m²</text>
    <text x="30" y="36">hearing</text><text x="96.7" y="36">whisper</text><text x="230" y="36">talking</text>
    <text x="296.7" y="36">street</text><text x="430" y="36">pain</text>
  </g>
</svg>
</div>

Read the scale:

- **+10 dB means × 10 intensity.** (Add 1 to the logarithm, multiply by 10.)
- **+20 dB means × 100.** That is the street versus the conversation.
- **+3 dB means about × 2**, because $10 \log_{10} 2 \approx 3.01$.

Our ears respond roughly to ratios, not differences, so a log scale matches how we hear better than a linear one would:
by a common rule of thumb, each extra 10 dB sounds roughly "twice as loud", even though it carries 10 times the energy.

**Adding sources.** Two identical 60 dB speakers do not make 120 dB. Their **intensities** add: $2I$. So the level
goes up by $10 \log_{10} 2 \approx 3$ dB, to about 63 dB. To add levels, change back to intensities, add, and take
the logarithm again.

### Earthquake magnitudes

In 1935 the seismologist Charles Richter, in California, made a scale for local earthquakes. Its magnitude is the
logarithm of the largest wave **amplitude** (how far the ground swings) recorded on a standard seismometer, corrected
for the distance to the quake. So **each step of 1 is 10 times the amplitude**.

The energy released grows faster than the amplitude. Seismologists found that energy goes up by a factor of about
$10^{1.5} \approx 31.6$ for each step of magnitude. So:

- 1 step: about 32 times the energy;
- 2 steps: $10^{1.5 \times 2} = 10^3 = 1000$ times;
- 0.2 steps: $10^{0.3} \approx 2$ times. A magnitude 6.2 releases about twice the energy of a 6.0.

The Richter scale stops working well for very large earthquakes (its readings stop growing). Today scientists use the
**moment magnitude** $M_w$ (introduced in 1979 by Thomas Hanks and Hiroo Kanamori). It starts from the **seismic
moment** $M_0$, a physical size of the quake in newton-metres: roughly, the stiffness of the rock times the area of the
fault that slipped times how far it slipped. Then

$$M_w = \frac23\left(\log_{10} M_0 - 9.1\right).$$

The constants were chosen so that $M_w$ agrees with the older scales where they overlap. Each step of 1 in $M_w$ is a
factor of $10^{1.5}$ in $M_0$ (solve for $M_0$ to see why). The largest earthquake ever recorded, in Chile in 1960, had
$M_w$ about 9.5.

Earth is not the only planet with quakes. NASA's InSight lander placed a seismometer on Mars and recorded over a
thousand marsquakes between 2018 and 2022. The largest, in May 2022, was about magnitude 4.7. Because the scale is
logarithmic, that one number tells us at once how it compares with Earth's great earthquakes.

### pH: acidity

How acidic a liquid is depends on the concentration of hydrogen ions, written $[\text{H}^+]$, measured in moles per
litre (mol/L; the mole is an SI base unit, see [the last lesson](05-si-system.md)). These concentrations range from
about 1 mol/L down to $10^{-14}$ mol/L. So chemists use

$$\text{pH} = -\log_{10}[\text{H}^+].$$

The minus sign makes the usual pH values positive.

- Pure water at 25 °C: $[\text{H}^+] = 10^{-7}$ mol/L, so pH 7: **neutral**.
- Below 7 is **acidic** (more H⁺): lemon juice is about pH 2.
- Above 7 is **basic** (alkaline): household bleach is about pH 12 to 13.

Because of the minus sign, **lower pH means more acid**, and each step down of 1 means **10 times** the
concentration of hydrogen ions.

### The pattern

All three scales have the same shape:

$$\text{measure} = (\text{constant}) \times \log_{10}\!\left(\frac{\text{quantity}}{\text{reference}}\right).$$

| Scale | Constant | One step means |
| --- | --- | --- |
| decibels | 10 | +10 dB is × 10 intensity |
| moment magnitude | $\tfrac23$ | +1 is × $10^{1.5} \approx 32$ in moment (and energy) |
| pH | $-1$ | −1 is × 10 hydrogen-ion concentration |

To go **from the scale back to the quantity**, undo the logarithm with a power of ten:

$$I = I_0 \times 10^{L/10}, \qquad [\text{H}^+] = 10^{-\text{pH}}, \qquad M_0 = 10^{1.5 M_w + 9.1}.$$

**Comparing two readings never needs the reference.** The difference of two logarithms is the logarithm of the ratio:
$L_2 - L_1 = 10 \log_{10}(I_2 / I_1)$. That is why "20 dB louder" always means "100 times the intensity", whatever the
starting level.

## Worked examples

**1. Sound level from intensity.** A street has intensity $10^{-4}$ W/m². Find the level.

$L = 10 \log_{10}\!\left(\dfrac{10^{-4}}{10^{-12}}\right) = 10 \log_{10}(10^8) = 10 \times 8 = 80$ dB.

**2. Intensity from sound level.** A concert is 110 dB. Find its intensity, and compare it with a 60 dB conversation.

1. $I = 10^{-12} \times 10^{110/10} = 10^{-12} \times 10^{11} = 10^{-1} = 0.1$ W/m².
2. Ratio: $10^{(110 - 60)/10} = 10^5$. The concert carries **100 000 times** the intensity of the conversation.

**3. Two magnitudes.** How much more energy does a magnitude 7.0 earthquake release than a magnitude 5.0?

Difference 2.0 steps: $10^{1.5 \times 2.0} = 10^{3} = 1000$ times.

**4. Moment magnitude.** A quake has seismic moment $M_0 = 4 \times 10^{22}$ N·m. Find $M_w$.

1. $\log_{10}(4 \times 10^{22}) = \log_{10} 4 + 22 \approx 0.602 + 22 = 22.602$.
2. $M_w = \tfrac23 (22.602 - 9.1) = \tfrac23 \times 13.502 \approx 9.0$.

**5. pH.** Lemon juice has $[\text{H}^+] \approx 3.2 \times 10^{-3}$ mol/L. Find its pH, and compare with pure water.

1. $\text{pH} = -\log_{10}(3.2 \times 10^{-3}) = -(\log_{10} 3.2 - 3) \approx -(0.505 - 3) \approx 2.5$.
2. Water has pH 7: the difference is 4.5, so lemon juice has $10^{4.5} \approx 32\,000$ times the concentration of
   H⁺.

## Try it

1. Find the sound level of an intensity of $10^{-9}$ W/m².
2. What intensity gives 100 dB?
3. A lawnmower is 90 dB and a library is 40 dB. How many times greater is the lawnmower's intensity?
4. One machine makes 70 dB. What level do (a) two, and (b) ten identical machines make together?
5. Compare a magnitude 6.0 and a magnitude 4.0 earthquake: by what factor do the amplitudes differ, and the energies?
6. Find the pH when $[\text{H}^+] = 4 \times 10^{-4}$ mol/L. Is it acidic or basic?
7. Sea water has pH about 8.1. Find $[\text{H}^+]$.
8. The largest marsquake InSight recorded was about magnitude 4.7, and the 1960 Chile earthquake about 9.5. Roughly how
   many times more energy did the Chile earthquake release?

??? note "Answers"
    1. $10 \log_{10}(10^{-9} / 10^{-12}) = 10 \log_{10}(10^3) = 30$ dB.
    2. $I = 10^{-12} \times 10^{10} = 10^{-2} = 0.01$ W/m².
    3. Difference $50$ dB, so $10^{50/10} = 10^5 = 100\,000$ times.
    4. (a) Intensities double: $70 + 10\log_{10} 2 \approx 73$ dB. (b) Intensities ×10: $70 + 10 = 80$ dB.
    5. Amplitude: $10^{2} = 100$ times. Energy: $10^{1.5 \times 2} = 1000$ times.
    6. $-\log_{10}(4 \times 10^{-4}) = -(0.602 - 4) \approx 3.4$. Below 7, so **acidic**.
    7. $[\text{H}^+] = 10^{-8.1} \approx 7.9 \times 10^{-9}$ mol/L.
    8. Difference $9.5 - 4.7 = 4.8$ steps: $10^{1.5 \times 4.8} = 10^{7.2} \approx 1.6 \times 10^7$, about
       **16 million times** as much energy.

## Common mistake

**Reading a log scale as if it were linear.** "80 dB is a third more than 60 dB" and "magnitude 8 is twice magnitude
4" are both wrong. On a log scale, a **difference** in readings stands for a **ratio** in the real quantity. Always
turn the difference into a power of ten.

**Adding decibels directly.** Two 60 dB sources make about 63 dB, not 120 dB. Add intensities, then take the logarithm.

## Where it leads

- Back: [The SI system](05-si-system.md) · This is the last lesson of the Measurement topic.
- [Level 8 page](index.md) · [Measurement topic page](../index.md)
- The algebra behind every scale here: [Logarithms](../../algebra/level-8/04-logarithms.md) and
  [exponential and logarithmic equations](../../algebra/level-8/05-exp-log-equations.md).
- Growth that multiplies by a constant factor: [Exponential functions](../../algebra/level-7/07-exponential-functions.md).
- At U of T: logarithms and exponentials as functions in [MAT137 Unit 4: transcendental functions](../../../uoft/MAT137/unit04.md),
  and sound intensity in [PHY131 Unit 10: waves and sound](../../../uoft/PHY131H1/unit10.md).
