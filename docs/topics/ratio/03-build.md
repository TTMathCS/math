---
title: "Build: Proportional reasoning and speed"
---

# Build: Proportional reasoning and speed

*Ratio and rates · step 3 of 5*

## A question to start

A team on Earth sends a radio command to a rover on Mars. Radio waves travel at the speed of light, about
300 000 km every second. When Mars is closest to Earth, about 55 million km away, how long does the command take to
arrive? And when Mars is on the far side of the Sun, about 400 million km away? This is why nobody drives a Mars rover
with a joystick: by the time the picture of a rock reached Earth and the command "stop!" got back, the rover would
have hit it long ago. To work it out you need **speed**, the most famous rate of all.

## The idea

### Proportions

A **proportion** is an equation saying two ratios are equal:

$$\frac{a}{b} = \frac{c}{d}.$$

If you know three of the four numbers, you can find the fourth. Multiplying both sides by $b$ and by $d$ gives the
**cross-multiplication** rule:

$$\frac{a}{b} = \frac{c}{d} \quad \Longleftrightarrow \quad ad = bc.$$

(This needs $b$ and $d$ not to be zero.) A second way, often quicker in your head, is the **unitary method**: first
find the value for **one**, then multiply. If 5 notebooks cost 8 dollars, one costs $8 \div 5 = 1.60$ dollars, and 12
cost $12 \times 1.60 = 19.20$ dollars.

### Direct proportion

Two quantities are **directly proportional** if one is always the same number times the other:

$$y = kx.$$

The fixed number $k$ is the **constant of proportionality**. It is a unit rate: the price of one notebook, the
kilometres per hour, the grams of flour per pancake. Three ways to recognise direct proportion:

- in a table, $\dfrac{y}{x}$ is the same for every pair;
- doubling $x$ doubles $y$, tripling $x$ triples $y$, and $x = 0$ gives $y = 0$;
- the graph is a **straight line through the origin**, with slope $k$.

The phone plan from [algebra](../algebra/index.md), "20 dollars plus 3 per gigabyte", is a straight line but **not**
a proportion: 0 gigabytes still costs 20 dollars, and 2 gigabytes does not cost twice as much as 1.

### Inverse proportion

Two quantities are **inversely proportional** if their **product** stays the same:

$$xy = k \qquad \text{or} \qquad y = \frac{k}{x}.$$

Doubling one **halves** the other. If a job takes 4 painters 6 days, the "amount of work" is $4 \times 6 = 24$
painter-days. Then 8 painters need 3 days, and 3 painters need 8 days (assuming everyone works at the same pace and
does not get in each other's way). The graph of an inverse proportion is a curve called a **hyperbola**, never a
straight line.

### Speed, distance and time

**Average speed** is the distance travelled per unit of time:

$$\text{speed} = \frac{\text{distance}}{\text{time}}, \qquad \text{distance} = \text{speed} \times \text{time}, \qquad \text{time} = \frac{\text{distance}}{\text{speed}}.$$

At a fixed speed, distance is directly proportional to time. For a fixed distance, time is inversely proportional to
speed: twice as fast takes half as long.

### Changing units

Rates have two units, so converting them takes two steps. To change kilometres per hour into metres per second, change
kilometres into metres (multiply by 1000) and hours into seconds (divide by 3600):

$$1 \text{ km/h} = \frac{1000 \text{ m}}{3600 \text{ s}} = \frac{1}{3.6} \text{ m/s}.$$

So divide km/h by 3.6 to get m/s, and multiply m/s by 3.6 to get km/h. A helpful habit is to write units as fractions
and cancel them, like numbers.

## Worked examples

**1. The radio delay.** Time = distance ÷ speed.

- Closest: $55\,000\,000 \div 300\,000 \approx 183$ seconds, a little over **3 minutes**.
- Farthest: $400\,000\,000 \div 300\,000 \approx 1333$ seconds, about **22 minutes**.

A question and its answer need twice that: up to about three quarters of an hour for a reply. Real rovers are given a
list of commands for the day, and drive themselves carefully between the steps.

**2. Solving a proportion.** A car uses 6 litres of fuel for 80 km. How much for 300 km?

- Fuel is directly proportional to distance: $\dfrac{x}{300} = \dfrac{6}{80}$.
- Cross-multiply: $80x = 1800$, so $x = 22.5$ litres.
- Unitary check: 6 litres for 80 km is 0.075 litres per km, and $300 \times 0.075 = 22.5$.

**3. The average-speed trap.** You cycle 12 km to a lake at 24 km/h and come back the same way at 12 km/h, because it
is uphill. What is your average speed for the round trip? (It is **not** 18 km/h.)

- Time there: $12 \div 24 = 0.5$ h. Time back: $12 \div 12 = 1$ h.
- Total: 24 km in 1.5 h, so the average speed is $24 \div 1.5 = 16$ km/h.

You spend longer at the slow speed, so the slow speed counts for more. Average speed is always **total distance
divided by total time**, never the average of the speeds.

## Try it

1. Solve $\dfrac{x}{12} = \dfrac{5}{8}$.
2. Is this table a direct proportion? If so, find $k$. $x$: 2, 5, 8. $y$: 7, 17.5, 28.
3. Change 90 km/h into metres per second.
4. Three pumps fill a tank in 8 hours. How long would 4 identical pumps take?
5. You walk up a hill at 4 km/h and straight back down the same path at 12 km/h. What is your average speed for the
   whole walk?
6. On flat, hard ground NASA's Curiosity rover can drive at about 4 cm per second. At that speed, how many minutes
   would it take to drive 100 m?

??? note "Answers"
    1. Cross-multiply: $8x = 60$, so $x = 7.5$.
    2. $7 \div 2 = 3.5$, $17.5 \div 5 = 3.5$ and $28 \div 8 = 3.5$. All the same, so yes: $y = 3.5x$.
    3. $90 \div 3.6 = 25$ m/s.
    4. Pumps and hours are inversely proportional: the work is $3 \times 8 = 24$ pump-hours, so 4 pumps take
       $24 \div 4 = 6$ hours.
    5. Call the path $d$ km long (any value works; try $d = 12$). Up takes $12 \div 4 = 3$ h, down takes
       $12 \div 12 = 1$ h. Total 24 km in 4 h, so 6 km/h. (Not 8 km/h, the average of 4 and 12.)
    6. 100 m is 10 000 cm, and $10\,000 \div 4 = 2500$ seconds. $2500 \div 60 \approx 42$ minutes.

## Common mistake

**Assuming everything is a direct proportion.** "If one person takes 10 minutes to eat a pizza, 10 people take 100
minutes" sounds silly, but the same error hides in real problems. Before you scale, ask: if one quantity doubles,
does the other **double** (direct), **halve** (inverse), or do something else entirely? A 30-minute oven bake does not
become a 60-minute bake because you put two trays in.

## Where it leads

- Next step: [Master: percent](04-master.md), ratios out of 100.
- Back a step: [Explore: ratios, unit rates and scale](02-explore.md)
- Speed is the slope of a distance–time graph; when the speed itself changes, you need
  [change and motion](../change/index.md). Straight lines $y = kx$ are graphed in [algebra](../algebra/index.md).
- Speed, distance and time with full vector care: [PHY131 Unit 2 (kinematics in one dimension)](../../uoft/PHY131H1/unit02.md).
