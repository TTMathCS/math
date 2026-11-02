---
title: "Rates of measurement"
---

# Rates of measurement

*Measurement · level 6, lesson 6 of 6*

## A question to start

A garden hose fills a paddling pool in 3 hours. A second, thinner hose fills the same pool in 6 hours. If you use both
hoses at once, how long does it take?

Many people say 4.5 hours, the average of 3 and 6. But two hoses together must be **faster** than the faster hose on
its own, so the answer has to be less than 3 hours. It is exactly **2 hours**.

The trick is to stop thinking about times and think about **rates**: how much of the pool each hose fills per hour.
In this lesson you will work with rates of measurement (litres per minute, kilometres per litre, millimetres of rain
per hour) and carry the units through every step so that they check your work for you.

## The idea

### What a rate is

A **rate** compares two quantities measured in **different** units, such as litres and minutes. You met rates and
unit rates in [Ratio level 3](../../ratio/level-3/04-rates-unit-rates.md): 12 litres in 3 minutes is a rate, and the
**unit rate** is the amount for one unit of the second quantity, $12 \div 3 = 4$ litres per minute.

"Per" means "for each", and it is written with a slash: 4 L/min. Some rates in measurement:

| Rate | Unit | Example |
| --- | --- | --- |
| flow | L/min, m³/h | a tap gives 12 L/min |
| speed | km/h, m/s | a cyclist rides at 20 km/h |
| fuel use | L/100 km | a car uses 7.5 L/100 km |
| fuel economy | km/L | the same car goes about 13.3 km/L |
| rainfall | mm/h | a storm drops 10 mm/h |
| density | g/cm³ | water is about 1 g/cm³ |

### Units are part of the calculation

Treat a unit like a letter in algebra: it can be multiplied, divided and cancelled. A rate of 20 L/min is the
fraction $\dfrac{20 \text{ L}}{1 \text{ min}}$, and you can turn it upside down when you need to,
$\dfrac{1 \text{ min}}{20 \text{ L}}$ (it takes 1 minute for each 20 litres). Choose the version that makes the
unwanted units cancel:

$$\text{time} = 2\,500\,000 \text{ L} \times \frac{1 \text{ min}}{20 \text{ L}} = 125\,000 \text{ min}$$

The litres cancel, leaving minutes, which is what a time should be measured in. If you had multiplied by
$\tfrac{20 \text{ L}}{1 \text{ min}}$ instead, you would get "L²/min", which is nonsense, and the units would warn you
before the number did. This is the same "fraction equal to 1" idea as in
[imperial conversions](../level-5/06-imperial-units.md), and it grows into dimensional analysis in level 7.

The three facts that link amount, rate and time all come from the units:

$$\text{amount} = \text{rate} \times \text{time} \qquad \text{time} = \frac{\text{amount}}{\text{rate}} \qquad \text{rate} = \frac{\text{amount}}{\text{time}}$$

(L/min × min = L; L ÷ L/min = min; L ÷ min = L/min.) Speed, distance and time
([Ratio: speed as a rate](../../ratio/level-3/05-speed-as-rate.md)) are the same three facts with kilometres for the
amount.

### A constant rate makes a straight line

If a tap runs at a steady 25 L/min into a tank, the amount of water after $t$ minutes is $25t$ litres. On a graph of
volume against time, that is a straight line through 0, and its **slope** (steepness) is the rate. A faster tap
makes a steeper line.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 225" role="img" aria-label="A graph of litres against minutes. A steeper line for 25 litres per minute reaches 600 litres at 24 minutes. A less steep line for 20 litres per minute reaches 600 litres at 30 minutes.">
  <line x1="40" y1="190" x2="360" y2="190" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="190" x2="40" y2="25" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="70" x2="350" y2="70" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="40" y1="190" x2="280" y2="70" stroke="#eea66f" stroke-width="3"/>
  <line x1="40" y1="190" x2="340" y2="70" stroke="#9cc9ea" stroke-width="3"/>
  <line x1="280" y1="70" x2="280" y2="190" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 3"/>
  <line x1="340" y1="70" x2="340" y2="190" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 3"/>
  <g font-size="11" fill="currentColor">
    <text x="36" y="194" text-anchor="end">0</text>
    <text x="36" y="74" text-anchor="end">600</text>
    <text x="36" y="20" text-anchor="middle">litres</text>
    <text x="280" y="204" text-anchor="middle">24</text>
    <text x="340" y="204" text-anchor="middle">30</text>
    <text x="190" y="218" text-anchor="middle">minutes</text>
    <text x="150" y="115">25 L/min</text>
    <text x="230" y="150">20 L/min</text>
  </g>
</svg>
</div>

### Combining rates: add the rates, not the times

Back to the hoses. The first fills the pool in 3 hours, so it fills $\tfrac13$ of the pool per hour. The second fills
$\tfrac16$ of the pool per hour. Working together, their rates **add**:

$$\tfrac13 + \tfrac16 = \tfrac26 + \tfrac16 = \tfrac36 = \tfrac12 \text{ pool per hour}$$

At half a pool per hour, the pool takes 2 hours. Times do not add or average, because a time is "hours per pool",
the upside-down of a rate. Rates add when things work at the same time; a leak works **against** you, so its rate is
subtracted.

### Fuel: two ways to say one thing

In Canada, a car's fuel use is given in **litres per 100 km** (L/100 km): a smaller number is better. Many people
also think in **kilometres per litre** (km/L), where a bigger number is better. They are upside-down versions of each
other:

$$7.5 \text{ L per } 100 \text{ km} \quad\Longleftrightarrow\quad \frac{100 \text{ km}}{7.5 \text{ L}} \approx 13.3 \text{ km/L}$$

Because one is the reciprocal of the other, they do not change in step. Going from 10 to 5 L/100 km saves 5 L on
every 100 km; going from 5 to 2.5 saves only 2.5 L more, even though both look like "halving". When you compare cars
for a trip, L/100 km tells you directly how much fuel (and so how many dollars) you will use.

### Rain on a roof: a neat unit fact

Rainfall is measured as a depth, in millimetres. How much water is that? One millimetre of rain on one square metre
is a slab $1 \text{ m} \times 1 \text{ m} \times 0.001 \text{ m} = 0.001$ m³, and 0.001 m³ is exactly **1 litre**. So:

$$1 \text{ mm of rain on } 1 \text{ m}^2 = 1 \text{ L}$$

A rate of 10 mm/h on a 100 m² roof sends $10 \times 100 = 1000$ L of water to the drains every hour.

## Worked examples

**1. Filling a big pool.** A pool is 50 m long, 25 m wide and 2 m deep. A hose gives 20 L/min. How long to fill it?

1. Volume: $50 \times 25 \times 2 = 2500$ m³, and $2500 \times 1000 = 2\,500\,000$ L.
2. Time: $2\,500\,000 \text{ L} \times \dfrac{1 \text{ min}}{20 \text{ L}} = 125\,000$ min.
3. In hours: $125\,000 \div 60 \approx 2083$ h; in days: $2083 \div 24 \approx 87$ days. Nobody fills a pool like
   that with a garden hose: real pools use big pumps.

**2. A road trip.** A car uses 7.5 L/100 km. The trip is 420 km and fuel costs 1.60 dollars per litre.

1. Fuel: $420 \text{ km} \times \dfrac{7.5 \text{ L}}{100 \text{ km}} = 31.5$ L.
2. Cost: $31.5 \text{ L} \times \dfrac{1.60 \text{ dollars}}{1 \text{ L}} = 50.40$ dollars.

**3. Filling with a leak.** A 600 L tank fills from a pipe at 25 L/min, but a crack lets out 5 L/min. How long to
fill it?

1. Net rate: $25 - 5 = 20$ L/min.
2. Time: $600 \div 20 = 30$ min. (Without the leak it would take $600 \div 25 = 24$ min. Both lines are in the graph.)

**4. Rain into a barrel.** A shed roof covers 120 m² of ground, and 15 mm of rain falls. How much water runs off?

$120 \times 15 = 1800$ L, using 1 mm on 1 m² = 1 L.

**5. A rover's pace.** NASA gives the Perseverance rover's top speed on flat ground as about 152 metres per hour.
At that speed, how long would it take to drive 1 km?

$1000 \text{ m} \times \dfrac{1 \text{ h}}{152 \text{ m}} \approx 6.6$ h. In practice rovers stop often to check their
path and do science, so a kilometre takes much longer.

**6. Changing the units of a rate.** Change 3 L/min to mL/s.

$\dfrac{3 \text{ L}}{1 \text{ min}} \times \dfrac{1000 \text{ mL}}{1 \text{ L}} \times \dfrac{1 \text{ min}}{60 \text{ s}} = \dfrac{3000}{60} = 50$ mL/s.

## Try it

1. A bathtub holds 150 L and the tap gives 12 L/min. How long does it take to fill?
2. A car uses 6 L/100 km. How much fuel does it need for 250 km? With a 50 L tank, how far can it go on a full tank?
3. Change 8 L/100 km to km/L, and change 20 km/L to L/100 km.
4. One pump can empty a tank in 4 hours; another takes 12 hours. How long do they take together?
5. A garden is 10 m by 6 m, and 25 mm of rain falls on it. How many litres of water is that?
6. A pipe delivers 2 m³ of water per hour. How many litres per minute is that?
7. A hose fills a 30 000 L pool at 18 L/min, but the pool leaks 3 L/min. How long does it take to fill, in hours and
   minutes?
8. Car A uses 7 L/100 km. Car B goes 15 km/L. Which uses less fuel? Explain with the units.

??? note "Answers"
    1. $150 \div 12 = 12.5$ min.
    2. $250 \times \tfrac{6}{100} = 15$ L. Range: $50 \text{ L} \times \dfrac{100 \text{ km}}{6 \text{ L}} \approx 833$ km.
    3. $100 \div 8 = 12.5$ km/L. For 20 km/L: 100 km needs $100 \div 20 = 5$ L, so 5 L/100 km.
    4. Rates $\tfrac14 + \tfrac1{12} = \tfrac3{12} + \tfrac1{12} = \tfrac4{12} = \tfrac13$ tank per hour, so 3 hours.
    5. Area 60 m², and $60 \times 25 = 1500$ L.
    6. 2 m³ = 2000 L per 60 min: $2000 \div 60 \approx 33.3$ L/min.
    7. Net $18 - 3 = 15$ L/min. $30\,000 \div 15 = 2000$ min $= 33$ h 20 min.
    8. Car B: 100 km needs $100 \div 15 \approx 6.67$ L, so B uses about 6.67 L/100 km, less than A's 7 L/100 km.
       Car B uses less fuel.

## Common mistake

**Averaging or adding times instead of rates.** Two workers, hoses or pumps working together: turn each time into a
rate (amount per hour), add the rates, then turn back into a time. The answer must be faster than the fastest one alone.

**Multiplying by the rate the wrong way up.** If the units do not cancel to what you want (minutes for a time,
litres for an amount), flip the rate. Writing the units in every line catches this every time.

## Where it leads

- Back: [Time across the planets](05-time-planets.md) · Next level: [Level 7](../level-7/index.md)
- [Level 6 page](index.md) · [Measurement topic page](../index.md)
- Rates, unit rates and speed: [Ratio level 3](../../ratio/level-3/index.md); direct and inverse proportion (the
  L/100 km and km/L flip): [Ratio level 5](../../ratio/level-5/02-direct-inverse.md).
- A rate is the slope of a straight-line graph: [Algebra: linear relations](../../algebra/level-5/04-linear-relations.md)
  and [Geometry: slope](../../geometry/level-6/06-slope-line-equation.md).
- When the rate itself keeps changing, you need calculus: [Change](../../change/index.md), and on the U of T shelf
  [MAT137 Unit 3 (derivatives)](../../../uoft/MAT137/unit03.md).
