---
title: "Explore: Speed, distance and time"
---

# Explore: Speed, distance and time

*Change and motion · step 2 of 5*

## A question to start

Engineers on Earth drive rovers on Mars, but they cannot steer them live, like a remote-control car. Why not?

Every command travels as a radio signal, and radio signals move at the speed of light: about **300,000 kilometres
every second**. That is very fast, but Mars is very far away. When Mars and Earth are about 225 million kilometres
apart, how long does a command take to get there? By the end of this page you will be able to work it out in one
line.

## The idea

### The speed rule

From the Play step: **speed** is the distance covered in one unit of time. To find it, share the distance out over
the time:

$$\text{speed} = \frac{\text{distance}}{\text{time}}$$

If a train goes 240 kilometres in 3 hours, its speed is $240 \div 3 = 80$ kilometres per hour, because in each of
the 3 hours it covers 80 of the 240 kilometres.

The same rule can be turned around, so you can find any one of the three if you know the other two:

$$\text{distance} = \text{speed} \times \text{time} \qquad\qquad \text{time} = \frac{\text{distance}}{\text{speed}}$$

A way to remember all three: at 80 kilometres per hour, 2 hours takes you $80 \times 2 = 160$ kilometres, and
160 kilometres takes you $160 \div 80 = 2$ hours.

### Units

A speed is always "a distance **per** a time". *Per* means "for each". So we write km/h (kilometres per hour),
m/s (metres per second), or cm/s. The units must match: if the speed is in km/h, the time must be in hours, not
minutes.

To change m/s into km/h: one hour has $60 \times 60 = 3600$ seconds, and 1000 metres make a kilometre. So

$$1 \text{ m/s} = \frac{3600 \text{ m}}{1 \text{ h}} = 3.6 \text{ km/h}.$$

To go from m/s to km/h, multiply by 3.6. To go back, divide by 3.6.

### Average speed and speed at a moment

When a trip of 120 kilometres takes 2 hours, we say the **average speed** was 60 km/h. That does not mean the car
did 60 km/h the whole way. It means: *if you had driven at one steady speed, this is the speed that would have
covered the same distance in the same time.*

The number on a car's **speedometer** is different. It shows the speed **right now**, at this moment. How to make
sense of "speed at one moment", when no time passes in a moment, is the big question of the Master step.

### Distance-time graphs

A **distance-time graph** shows the time along the bottom and the distance travelled up the side.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 200" role="img" aria-label="Distance-time graph: a steep line from 0 to 2 hours reaching 10 km, a flat part until 3 hours, then a line up to 18 km at 4 hours.">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.3">
    <line x1="60" y1="20" x2="380" y2="20"/><line x1="60" y1="60" x2="380" y2="60"/><line x1="60" y1="100" x2="380" y2="100"/><line x1="60" y1="140" x2="380" y2="140"/>
    <line x1="140" y1="20" x2="140" y2="180"/><line x1="220" y1="20" x2="220" y2="180"/><line x1="300" y1="20" x2="300" y2="180"/><line x1="380" y1="20" x2="380" y2="180"/>
  </g>
  <line x1="60" y1="180" x2="390" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="60" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="60,180 220,100 300,100 380,36" fill="none" stroke="#eea66f" stroke-width="4"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="60" y="196">0</text><text x="140" y="196">1</text><text x="220" y="196">2</text><text x="300" y="196">3</text><text x="380" y="196">4 h</text>
    <text x="40" y="184">0</text><text x="40" y="144">5</text><text x="40" y="104">10</text><text x="40" y="64">15</text><text x="40" y="24">20 km</text>
  </g>
  <g font-size="12" fill="currentColor">
    <text x="110" y="130">5 km/h</text><text x="232" y="92">stopped</text><text x="300" y="60">8 km/h</text>
  </g>
</svg>
</div>

Three things to read from a graph like this:

- A **steeper** line means **faster**: more distance for each hour.
- A **flat** line means **stopped**: time passes, distance does not change.
- A **straight** piece means **steady** speed. A curved piece would mean the speed was changing.

The hiker in the graph walks 10 km in the first 2 hours (5 km/h), rests for an hour, then walks 8 km in the last
hour (8 km/h).

## Worked examples

**1. The signal to Mars.** Distance 225,000,000 km, speed 300,000 km/s.

$$\text{time} = \frac{225\,000\,000}{300\,000} = 750 \text{ seconds} = 12.5 \text{ minutes}.$$

So a command takes about 12 and a half minutes to arrive, and the rover's reply takes another 12 and a half to come
back. That is why rovers are given a whole day's plan at once and drive themselves carefully between commands.
Mars and Earth move around the Sun at different speeds, so the distance between them changes, and the delay is
anything from about 3 minutes (when they are closest) to about 22 minutes (when they are on opposite sides of the
Sun).

**2. The hiker's average speed.** In the graph, the hiker covers 18 km in 4 hours altogether.

$$\text{average speed} = \frac{18}{4} = 4.5 \text{ km/h}.$$

The rest counts: the clock kept running while she stopped.

**3. A fast ball.** A tennis serve travels at 50 m/s. In km/h that is $50 \times 3.6 = 180$ km/h.

## Try it

1. A train travels 240 km in 3 hours. What is its average speed?
2. How long does it take to walk 6 km at 4 km/h?
3. Change 90 km/h into m/s.
4. You drive 60 km to a lake at 30 km/h and drive the same 60 km home at 60 km/h. What was your average speed for
   the whole trip?
5. A cyclist rides at 18 km/h for 20 minutes. How far does she go?
6. The Curiosity rover drives at 4 cm/s. How long would it take to drive 100 metres without stopping?

??? note "Answers"
    1. $240 \div 3 = 80$ km/h.
    2. $6 \div 4 = 1.5$ hours, which is 1 hour 30 minutes.
    3. $90 \div 3.6 = 25$ m/s.
    4. Going there takes $60 \div 30 = 2$ hours. Coming back takes $60 \div 60 = 1$ hour. Altogether 120 km in
       3 hours, so the average is $120 \div 3 = 40$ **km/h**, not 45. (See the common mistake.)
    5. 20 minutes is $\dfrac{1}{3}$ of an hour, so the distance is $18 \times \dfrac{1}{3} = 6$ km.
    6. 100 m is 10,000 cm. Time $= 10\,000 \div 4 = 2500$ seconds, which is about 41.7 minutes, or 41 minutes
       40 seconds.

## Common mistake

**Averaging the two speeds.** In question 4 it is tempting to say "30 and 60, so 45". But you spent **twice as
long** driving at 30 km/h as at 60 km/h, so the slow part counts for more. Average speed is always **total
distance ÷ total time**. Never average the speeds unless the times are equal.

## Where it leads

- Next step: [Build: slopes and rates of change](03-build.md), where the steepness of a graph becomes a number.
- Back a step: [Play: fast and slow](01-play.md)
- Speed is one example of a **rate**, like price per kilogram or heartbeats per minute: see
  [Ratio and rates](../ratio/index.md). Changing units carefully is part of [Measurement](../measurement/index.md).
- The 3 to 22 minute delay comes from the distance between the planets, explained on akadian.ca's
  [Mars in space](https://www.akadian.ca/science/mars-facts/space.html) page.
