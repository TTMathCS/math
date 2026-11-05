---
title: "The SI system"
---

# The SI system

*Measurement · level 8, lesson 5 of 6*

## A question to start

For 130 years, the kilogram was a **thing**. It was a small cylinder of platinum and iridium, about the size of a golf ball,
kept under glass bell jars in a vault near Paris. By international agreement, it weighed exactly one kilogram, by
definition, forever.

Then scientists noticed a problem. When the official copies, kept in other countries, were brought back and compared
with it, they did not quite agree. Over a century they had drifted apart by up to about 50 micrograms, roughly the
mass of a grain of fine sand. Had the copies gained mass, or had the original lost some? There was no way to tell. The
original weighed exactly 1 kg **by definition**, whatever happened to it.

On 20 May 2019 the kilogram stopped being a thing. It is now defined by a number: a constant of nature. How can a
number define a mass? That is what this lesson is about.

## The idea

### Why we need agreed units

A measurement is a number times a unit. If the unit is not the same everywhere, the number means nothing. In the past,
almost every town had its own foot, its own pound and its own bushel, and traders, builders and scientists suffered.

During the French Revolution, in the 1790s, French scientists set out to make units "for all people, for all time".
They defined the **metre** as one ten-millionth of the distance from the North Pole to the equator, measured along the
line through Paris. (So, by design, the Earth's circumference through the poles is about 40 000 km, the number
Eratosthenes was chasing in [lesson 1](01-eratosthenes-earth.md).) The gram came from the mass of a cubic centimetre
of water, and the litre from a cubic decimetre. Every unit was tied to the others by powers of ten.

This grew into the **International System of Units**, called **SI** from its French name, *Système international
d'unités*, agreed internationally in 1960. Almost every country uses it for science, and most for everyday life
(Canada uses it officially, alongside the imperial units in [level 5](../level-5/06-imperial-units.md)).

### The seven base units

SI has seven **base units**. Every other unit is built from them.

| Quantity | Unit | Symbol |
| --- | --- | --- |
| time | second | s |
| length | metre | m |
| mass | kilogram | kg |
| electric current | ampere | A |
| temperature | kelvin | K |
| amount of substance | mole | mol |
| brightness as the eye sees it (luminous intensity) | candela | cd |

All other units are **derived units**, made by multiplying and dividing base units, exactly as in
[dimensional analysis](../level-7/04-dimensional-analysis.md):

- speed: m/s; acceleration: m/s²;
- force: newton, $1 \text{ N} = 1 \text{ kg·m/s}^2$;
- energy: joule, $1 \text{ J} = 1 \text{ N·m} = 1 \text{ kg·m}^2/\text{s}^2$;
- power: watt, $1 \text{ W} = 1 \text{ J/s}$;
- frequency: hertz, $1 \text{ Hz} = 1$ per second.

**Prefixes** scale any unit by powers of ten: kilo (k, $10^3$), mega (M, $10^6$), giga (G, $10^9$), tera (T,
$10^{12}$), and centi (c, $10^{-2}$), milli (m, $10^{-3}$), micro (µ, $10^{-6}$), nano (n, $10^{-9}$), pico (p,
$10^{-12}$). The kilogram is the odd one out: it is the only base unit with a prefix built into its name.

The **kelvin** measures temperature from **absolute zero**, the coldest possible temperature. Its steps are the same
size as degrees Celsius, so $T(\text{K}) = T(°\text{C}) + 273.15$. Water freezes at 273.15 K; Mars's average surface
temperature of about −60 °C is about 213 K.

### The problem with "things"

A unit defined by an object has three weaknesses.

1. **It can change.** Metal absorbs a little dirt and air, and cleaning removes a little metal. The kilogram prototype
   might have drifted by tens of micrograms, and by definition nobody could ever say.
2. **It lives in one place.** To check your scale, you had to compare it with a copy that had been compared with the
   original in France. Each step added error.
3. **It can be lost or damaged.** A dropped prototype would have changed the mass of everything in the world, on
   paper.

The metre had the same problem. After the 1790s survey, the metre was a platinum bar; from 1889, a bar of
platinum-iridium in the same vault. Its length depended on its temperature and on two fine scratches marked on it.

### Defining units by constants of nature

The solution is to tie units to things that are the same everywhere and never change: **constants of nature**. The
modern trick is surprising. Instead of measuring a constant in our units, we **fix the constant's value exactly** and
let that define the unit.

**The second.** Atoms of caesium-133 absorb and give out microwaves at one very precise frequency. Since 1967, the
second has been defined so that this frequency is **exactly 9 192 631 770 Hz**. One second is the time for
9 192 631 770 of these oscillations. Atomic clocks count them.

**The metre.** Since 1983, the speed of light in a vacuum has been fixed at **exactly 299 792 458 m/s**. Since the
second is already defined, this defines the metre: one metre is the distance light travels in
$\tfrac{1}{299\,792\,458}$ of a second. That is why the speed of light in [lesson 2](02-distances-in-space.md) is
exact. It is not that we measured it perfectly; it is that the metre is now built from it.

**The kilogram.** Since 20 May 2019, the **Planck constant** $h$, a constant from quantum physics that links the energy
of light to its frequency, has been fixed at

$$h = 6.626\,070\,15 \times 10^{-34} \text{ J·s} \quad \text{exactly}.$$

How does this define a mass? Look at its units. A joule is $\text{kg·m}^2/\text{s}^2$, so

$$\text{J·s} = \frac{\text{kg·m}^2}{\text{s}^2} \times \text{s} = \frac{\text{kg·m}^2}{\text{s}}.$$

The units of $h$ contain the kilogram, the metre and the second. The metre and second are already fixed. So once $h$
is fixed as an exact number, there is only one size the kilogram can be for the equation to hold. In symbols,
rearranging,

$$1 \text{ kg} = \frac{h}{6.626\,070\,15 \times 10^{-34}} \cdot \frac{\text{s}}{\text{m}^2}.$$

This is [dimensional analysis](../level-7/04-dimensional-analysis.md) turned into a definition. In practice, a
**Kibble balance** compares the weight of a mass with an electromagnetic force that can be measured through $h$, so any
well-equipped laboratory in the world can now realise the kilogram without visiting Paris.

At the same time, in 2019, the ampere, the kelvin and the mole were redefined by fixing the charge of the electron, the
Boltzmann constant and the Avogadro constant. Now all seven base units rest on seven fixed constants.

<figure class="sketch"><span class="ai-tag">AI-created</span><svg viewBox="0 0 640 410" role="img" aria-labelledby="sk-m-si-t"><title id="sk-m-si-t">The kilogram was a metal cylinder under glass until 2019, and its copies drifted by up to about 50 micrograms; now units are defined by fixed constants such as the speed of light, the caesium frequency and Planck's constant</title><defs><filter id="sk-m-si-pen"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="3.2"/></filter><filter id="sk-m-si-paper"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="7"/><feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 .10 0"/></filter><pattern id="sk-m-si-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="7" stroke="#8a4a2a" stroke-width="1.1" opacity=".55"/></pattern><pattern id="sk-m-si-dots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r="1" fill="#8a4a2a" opacity=".5"/><circle cx="6.5" cy="7" r=".8" fill="#8a4a2a" opacity=".4"/></pattern><marker id="sk-m-si-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L9 5L1 9" fill="none" stroke="#3a2a1e" stroke-width="1.6" stroke-linecap="round"/></marker></defs><rect width="640" height="410" filter="url(#sk-m-si-paper)"/><g filter="url(#sk-m-si-pen)"><text x="30" y="44" class="h">From a thing to a number</text><path class="p" d="M80 300 L80 160 Q140 120 200 160 L200 300Z"/><path class="p room" d="M110 290 L170 290 L170 230 L110 230Z"/><text x="140" y="330" text-anchor="middle" class="l">the kilogram, 1889 to 2019</text><text x="140" y="352" text-anchor="middle" class="s">a cylinder under glass near Paris</text><path class="p room" d="M260 290 L290 290 L290 258 L260 258Z"/><path class="p room" d="M306 290 L336 290 L336 256 L306 256Z"/><path class="p room" d="M352 290 L382 290 L382 254 L352 254Z"/><text x="250" y="230" class="s">copies drifted up to</text><text x="250" y="248" class="s">about 50 micrograms</text><path class="p" d="M410 230 L460 230" marker-end="url(#sk-m-si-ah)"/><text x="435" y="216" text-anchor="middle" class="s">2019</text><text x="470" y="160" class="l">constants,</text><text x="470" y="182" class="l">fixed exactly</text><text x="470" y="222" class="s">light: 299 792 458 m/s</text><text x="470" y="244" class="s">caesium: 9 192 631 770 Hz</text><text x="470" y="266" class="s">and Planck's constant</text><text x="470" y="288" class="s">for the kilogram</text><text x="30" y="396" class="s">The same everywhere, for ever: nothing to lose, drop or clean.</text></g></svg><figcaption>Sketched for this page. Not to scale.</figcaption></figure>

### Why definitions matter

A good definition is **universal** (a scientist anywhere, even in a laboratory on Mars, could build the unit from
scratch), **stable** (it does not drift), and **precise** (as measuring technology improves, the unit can be realised
more accurately without changing the definition).

There is also a quiet rule behind every redefinition: **nothing in everyday life should change.** The new kilogram was
chosen so that it matched the old prototype to within the uncertainty of the best measurements. Your bag of flour
weighs the same as before. What changed is that the unit can never drift again.

## Worked examples

**1. How far does light go in a nanosecond?**

$299\,792\,458 \text{ m/s} \times 10^{-9} \text{ s} \approx 0.30$ m, about 30 cm. A computer chip running at a few
gigahertz has less than a nanosecond per step, during which a signal can travel at most about 30 cm: one reason chips
must be small.

**2. The original metre.** The distance from the North Pole to the equator is now known to be about 10 001.97 km. If
the 1790s survey had been perfect, how long would the metre have been?

The metre was meant to be one ten-millionth of this distance: $10\,001.97 \text{ km} \div 10^7 \approx 1.000\,197$ m.
So the real metre is about 0.2 mm, or 0.02%, shorter than the ideal "Pole to equator" metre. The survey was
astonishingly good, but not perfect; the bar they made, not the Earth, became the standard.

**3. Counting oscillations.** How many caesium oscillations happen in one minute?

$9\,192\,631\,770 \times 60 = 551\,557\,906\,200$, about $5.5 \times 10^{11}$.

**4. The drift of the prototype.** A 50 microgram drift in 1 kg is what fraction?

$50 \text{ µg} = 50 \times 10^{-9}$ kg, so the fraction is $5 \times 10^{-8}$, or 50 parts per billion. Tiny, but
the best measurements in physics need better.

**5. Units of the Planck constant.** Show that the units of $h$ in base units are $\text{kg·m}^2\text{·s}^{-1}$.

$\text{J} = \text{N·m} = (\text{kg·m·s}^{-2})\text{·m} = \text{kg·m}^2\text{·s}^{-2}$, so
$\text{J·s} = \text{kg·m}^2\text{·s}^{-1}$.

## Try it

1. Name the seven SI base units and what each measures.
2. Convert to kelvin: (a) 25 °C; (b) −63 °C (a cold Mars night is far colder still).
3. How long does light take to travel exactly 1 m? Give your answer in nanoseconds.
4. Write each with a suitable prefix: (a) 0.000 004 m; (b) 3 390 000 m; (c) $2.5 \times 10^{-9}$ s.
5. Write the watt in SI base units.
6. How many caesium oscillations make one hour? Give your answer in scientific notation.
7. Give two reasons why a unit defined by a metal object is worse than one defined by a fixed constant.
8. Before 1983 the speed of light was a measured number with an uncertainty. After 1983 it has no uncertainty. Did
   light get faster or more steady? Explain what really changed.

??? note "Answers"
    1. Second (time), metre (length), kilogram (mass), ampere (electric current), kelvin (temperature), mole (amount
       of substance), candela (luminous intensity).
    2. (a) $25 + 273.15 = 298.15$ K. (b) $-63 + 273.15 = 210.15$ K.
    3. $1 \div 299\,792\,458 \approx 3.34 \times 10^{-9}$ s $\approx 3.34$ ns.
    4. (a) 4 µm (micrometres). (b) 3.39 Mm (megametres), or 3390 km. (c) 2.5 ns.
    5. $\text{W} = \text{J/s} = \text{kg·m}^2\text{·s}^{-2} \div \text{s} = \text{kg·m}^2\text{·s}^{-3}$.
    6. $9\,192\,631\,770 \times 3600 \approx 3.31 \times 10^{13}$.
    7. Any two of: it can change (gain or lose atoms) without anyone being able to tell; it exists in only one place,
       so everyone else must compare with copies; it can be damaged or lost. A constant is the same everywhere and
       forever.
    8. Neither. Light did not change. What changed is the definition of the metre: the metre is now **defined** as the
       distance light goes in $\tfrac{1}{299\,792\,458}$ s, so the speed is exact by definition. Any uncertainty now
       sits in how well a lab can realise the metre, not in $c$.

## Common mistake

**Thinking "defined exactly" means "measured perfectly".** The speed of light and the Planck constant have exact
values because we **chose** them to define the units. Measurements still have errors; those errors now show up in
lengths and masses, not in the constants.

**Writing the symbols wrongly.** Unit symbols are case-sensitive: "m" is metre and "M" is mega; "k" is kilo and "K" is
kelvin. 5 Mm is 5000 km; 5 mm is half a centimetre.

## Where it leads

- Back: [Areas of curved regions](04-curved-areas.md) · Next: [Logarithmic measures](06-logarithmic-measures.md)
- [Level 8 page](index.md) · [Measurement topic page](../index.md)
- Checking units by algebra: [Dimensional analysis](../level-7/04-dimensional-analysis.md); the metric family:
  [Level 3](../level-3/index.md).
- Powers of ten and prefixes: [Scientific notation](../../numbers/level-5/05-scientific-notation.md).
- Units, and the quantities they build, in first-year physics at U of T:
  [PHY131 Unit 1: units, vectors and estimation](../../../uoft/PHY131H1/unit01.md).
