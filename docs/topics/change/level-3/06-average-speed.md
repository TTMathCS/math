---
title: "Average speed for a trip"
---

# Average speed for a trip

*Change and motion · level 3, lesson 6 of 6*

## A question to start

Grandma lives 60 km away. On the way there, the traffic is terrible and you only manage 30 km/h (kilometres per
hour). On the way home you want to make up for it, so that your average speed for the whole round trip is 60 km/h.

How fast must you drive home?

Most people say 90 km/h, because 30 and 90 average to 60. Try it at the end of this lesson. The real answer is very
surprising: **no speed at all is fast enough**, not even the speed of a rocket.

## The idea

### What "average speed" means

Almost nothing moves at exactly the same speed all the time. A car speeds up, slows down, stops at lights. So when we
say "the trip was at 50 km/h", we usually mean the **average speed**:

$$\text{average speed} = \text{total distance} \div \text{total time}$$

It answers this question: **if you had gone at one steady speed the whole time, what speed would cover the same
distance in the same time?**

For example, a bus goes 150 km in 3 hours. It sped up and slowed down along the way, but a steady 50 km/h would also
cover 150 km in 3 hours, since $150 \div 3 = 50$. So its average speed is 50 km/h.

This is just the "per" idea of [lesson 1](01-per-rates.md): total distance shared fairly over the total time.

### There and back: why it is not 45

You drive 60 km to a lake at 30 km/h, and 60 km back at 60 km/h. What is your average speed?

The tempting answer is "halfway between 30 and 60, so 45". Let us actually work it out.

- Going there: 60 km at 30 km/h takes $60 \div 30 = 2$ hours.
- Coming back: 60 km at 60 km/h takes $60 \div 60 = 1$ hour.
- Total: 120 km in 3 hours.
- Average speed: $120 \div 3 =$ **40 km/h**.

Not 45. Where did 45 go wrong? Look at how the **time** was spent:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 110" role="img" aria-label="A bar for 3 hours of driving: the first two hours at 30 kilometres per hour, the last hour at 60 kilometres per hour">
  <g stroke="currentColor" stroke-width="2">
    <rect x="30" y="30" width="120" height="44" fill="#eea66f" fill-opacity="0.6"/>
    <rect x="150" y="30" width="120" height="44" fill="#eea66f" fill-opacity="0.6"/>
    <rect x="270" y="30" width="120" height="44" fill="#9cc9ea" fill-opacity="0.7"/>
  </g>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="90" y="50">hour 1</text><text x="210" y="50">hour 2</text><text x="330" y="50">hour 3</text>
    <text x="90" y="66">30 km</text><text x="210" y="66">30 km</text><text x="330" y="66">60 km</text>
    <text x="150" y="20">going: slow</text><text x="330" y="20">coming back: fast</text>
    <text x="210" y="96">120 km in 3 hours: 40 km in each hour, on average</text>
  </g>
</svg>
</div>

You spent **two hours** at the slow speed but only **one hour** at the fast speed. The slow speed went on for
longer, so it counts for more. Hour by hour, your speeds were 30, 30 and 60. The fair average of those three hours is

$$\frac{30 + 30 + 60}{3} = \frac{120}{3} = 40.$$

That is the real reason. "Averaging the two speeds" pretends you spent the same time at each speed, but you did not.
Going slowly makes a trip take longer, so slow parts always fill up more of the time.

### When averaging the speeds does work

If you spend **equal times** at each speed, then averaging the speeds is fine. One hour at 30 km/h and one hour at
60 km/h covers $30 + 60 = 90$ km in 2 hours: $90 \div 2 = 45$ km/h, which **is** halfway between 30 and 60.

So:

- **Same time** at each speed: the average speed is halfway between (the average of the speeds).
- **Same distance** at each speed: the average speed is **less** than halfway, closer to the slow speed, because more
  time is spent going slowly.

### A picture on a graph

Here is the lake trip as a graph of **total distance travelled** against time.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 215" role="img" aria-label="Total distance against time: a gentle line to 60 km at 2 hours, then a steeper line to 120 km at 3 hours, and a dashed straight line from the start to the end showing the average speed">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.3">
    <line x1="60" y1="20" x2="360" y2="20"/><line x1="60" y1="60" x2="360" y2="60"/><line x1="60" y1="100" x2="360" y2="100"/><line x1="60" y1="140" x2="360" y2="140"/>
    <line x1="160" y1="20" x2="160" y2="180"/><line x1="260" y1="20" x2="260" y2="180"/><line x1="360" y1="20" x2="360" y2="180"/>
  </g>
  <line x1="60" y1="180" x2="370" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="60" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="60,180 260,100 360,20" fill="none" stroke="#eea66f" stroke-width="4"/>
  <line x1="60" y1="180" x2="360" y2="20" stroke="#7ccf9a" stroke-width="2.5" stroke-dasharray="7 5"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="60" y="196">0</text><text x="160" y="196">1</text><text x="260" y="196">2</text><text x="360" y="196">3</text>
    <text x="210" y="211">time (hours)</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="54" y="184">0</text><text x="54" y="144">30</text><text x="54" y="104">60</text><text x="54" y="64">90</text><text x="54" y="24">120 km</text>
  </g>
  <g font-size="12" fill="currentColor"><text x="175" y="150">30 km/h</text><text x="300" y="80">60 km/h</text><text x="90" y="110">average: 40 km/h</text></g>
</svg>
</div>

The orange line is the real trip: gentle for two hours, then steep for one. The dashed green line goes straight from
the start to the end. It is the trip at **one steady speed** that ends at the same place at the same time. Its
steepness is the average speed: 120 km in 3 hours, 40 km/h.

Notice the dashed line is closer in steepness to the long, gentle part. The long part has more say.

### Stops count too

The clock does not stop when you stop. If you drive for 2 hours and then have lunch for 1 hour, the lunch hour is
part of the total time. A stop is a part of the trip at speed 0, and it pulls the average down.

### Back to Grandma

Now the puzzle. The round trip is $60 + 60 = 120$ km. To average 60 km/h, the whole trip must take
$120 \div 60 = 2$ hours.

But getting **there** at 30 km/h already took $60 \div 30 = 2$ hours. All your time is used up before you even turn
around. To average 60 km/h you would have to drive the 60 km home in **no time at all**. No car, plane or rocket can
do that. The slow first half has eaten the whole time budget.

<figure class="play" data-play="motion"><span class="ai-tag">AI-created</span><figcaption><b>Average speed.</b> Total distance ÷ total time, which is not just the two speeds averaged.</figcaption></figure>

## Worked examples

**1. A bus trip.** A bus travels 150 km in 3 hours. Average speed: $150 \div 3 = 50$ km/h.

**2. A trip with a stop.** A family drives 120 km in 1.5 hours, stops for lunch for 30 minutes, then drives 60 km
in 1 hour.

- Total distance: $120 + 60 = 180$ km.
- Total time: $1.5 + 0.5 + 1 = 3$ hours (the lunch counts).
- Average speed: $180 \div 3 = 60$ km/h.

While driving, they did 80 km/h and then 60 km/h. The lunch stop pulled the average down to 60.

**3. Two laps of a track.** A runner does two laps of a 400 m track. The first lap takes 80 seconds and the second,
tired, takes 100 seconds.

- Total: 800 m in 180 seconds.
- Average speed: $800 \div 180$, which is about **4.4 metres per second**.

Each lap on its own: $400 \div 80 = 5$ m/s, and $400 \div 100 = 4$ m/s. The average of 5 and 4 would be 4.5, but the
true average is about 4.44, a bit lower, because the slow lap took longer.

**4. Equal times.** A walker goes at 6 km/h for 1 hour and then at 4 km/h for 1 hour. The times are equal, so the
average speed is halfway: 5 km/h. Check: $(6 + 4) \div 2 = 5$ km/h, and $10 \text{ km} \div 2 \text{ h} = 5$ km/h. ✓

## Try it

1. A car goes 240 km in 4 hours. What is its average speed?
2. Pat walks at 4 km/h for one hour and then at 2 km/h for one hour. What is her average speed?
3. Lin cycles 12 km to the beach at 12 km/h and comes back the same 12 km at 24 km/h. What is her average speed?
4. A train goes 200 km in 2 hours, waits at a station for 1 hour, then goes 100 km in 1 hour. Find its average speed
   for the whole journey.
5. A car drives part of a trip at 20 km/h and the rest at 50 km/h, with no stops. Which of these could be its average
   speed: 15, 30, 45, 55 km/h?
6. Ali runs 2 km at 10 km/h and then 2 km at 15 km/h. Find his average speed.
7. A Mars rover drives 60 metres in 30 minutes, stops for 90 minutes to take pictures, then drives another 60 metres
   in 30 minutes. What is its average speed in metres per minute? What was its speed while moving?
8. Challenge: you drive 60 km to Grandma's at 40 km/h. How fast must you drive the 60 km home to average 48 km/h for
   the round trip?

??? note "Answers"
    1. $240 \div 4 = 60$ km/h.
    2. Equal times, so the average is halfway: **3 km/h**. Check: 6 km in 2 hours, $6 \div 2 = 3$.
    3. There: $12 \div 12 = 1$ hour. Back: $12 \div 24 = 0.5$ hours. Total: 24 km in 1.5 hours.
       $24 \div 1.5 = 16$ km/h. (Not 18, the average of 12 and 24.)
    4. Total distance $200 + 100 = 300$ km. Total time $2 + 1 + 1 = 4$ hours. $300 \div 4 = 75$ km/h.
    5. **30 and 45.** With no stops, the average must lie between the slowest speed (20) and the fastest (50).
       15 is too slow and 55 is too fast.
    6. First part: $2 \div 10 = 0.2$ hours (12 minutes). Second: $2 \div 15$ hours, which is 8 minutes. Total: 4 km
       in 20 minutes, which is $\frac{1}{3}$ of an hour. Average: $4 \div \frac{1}{3} = 4 \times 3 = 12$ km/h.
    7. Total distance 120 m. Total time $30 + 90 + 30 = 150$ minutes. Average: $120 \div 150 = 0.8$ metres per
       minute. While moving: $60 \div 30 = 2$ metres per minute. The long stop pulls the average far down.
    8. The whole trip is 120 km, so to average 48 km/h it must take $120 \div 48 = 2.5$ hours. Getting there took
       $60 \div 40 = 1.5$ hours. That leaves 1 hour for the 60 km home: **60 km/h**. (Not 56, which is what
       "averaging the speeds" would say.)

## Common mistake

**Averaging the speeds.** For a trip in parts, adding the speeds and dividing by 2 only works when the **times** are
equal. When the **distances** are equal, the slow part takes longer and counts for more. Always use total distance
divided by total time.

**Leaving out the stops.** The average speed of a trip counts every minute from the start to the end, including
lunch, traffic lights and waiting. If you want the speed **while moving**, say so, and leave out the stops on purpose.

## Where it leads

- Back: [Fast at first, then slower](05-fast-then-slower.md) · This is the last lesson of level 3. Next:
  [Level 4: rate of change](../level-4/index.md)
- [Level 3 page](index.md) · [Change and motion topic page](../index.md)
- Speed, distance and time as a rate, with more practice: [Speed as a rate](../../ratio/level-3/05-speed-as-rate.md).
- The mean of a set of numbers, which is what we used for the three hours: [The mean](../../statistics/level-3/02-the-mean.md).
- Average speed is the steepness of the dashed line from start to end. In [level 5](../level-5/index.md) this line
  gets a name (a **secant line**), and in [level 6](../level-6/index.md) it leads to the speed at a single instant.
