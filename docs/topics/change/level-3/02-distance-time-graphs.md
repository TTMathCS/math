---
title: "Distance-time graphs"
---

# Distance-time graphs

*Change and motion · level 3, lesson 2 of 6*

## A question to start

Here is a whole walk to school, told without a single word.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="Distance-time graph of a walk to school: a line rising from 0 to 600 metres in the first 10 minutes, flat from 10 to 15 minutes, then rising steeply to 1200 metres at 20 minutes">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.3">
    <line x1="60" y1="20" x2="380" y2="20"/><line x1="60" y1="60" x2="380" y2="60"/><line x1="60" y1="100" x2="380" y2="100"/><line x1="60" y1="140" x2="380" y2="140"/>
    <line x1="140" y1="20" x2="140" y2="180"/><line x1="220" y1="20" x2="220" y2="180"/><line x1="300" y1="20" x2="300" y2="180"/><line x1="380" y1="20" x2="380" y2="180"/>
  </g>
  <line x1="60" y1="180" x2="390" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="60" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="60,180 220,100 300,100 380,20" fill="none" stroke="#eea66f" stroke-width="4"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="60" y="196">0</text><text x="140" y="196">5</text><text x="220" y="196">10</text><text x="300" y="196">15</text><text x="380" y="196">20</text>
    <text x="220" y="211">time (minutes)</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="54" y="184">0</text><text x="54" y="144">300</text><text x="54" y="104">600</text><text x="54" y="64">900</text><text x="54" y="24">1200 m</text>
  </g>
  <g font-size="12" fill="currentColor">
    <text x="128" y="128">A</text><text x="254" y="92">B</text><text x="324" y="56">C</text>
  </g>
</svg>
</div>

Can you tell, just from the picture: where did the walker stop? Was she faster at the start or at the end? How far
is it to school? By the end of this lesson, this picture will tell you its whole story.

## The idea

### Two number lines at right angles

A **distance-time graph** has two lines, called **axes** (say "ax-eez", one is an **axis**).

- The line **across** the bottom shows **time**: how long since the start.
- The line **up** the side shows **distance**: how far from the start.

Every point on the graph is a pair of facts: "at **this** time, I was **this** far away". To read a point, go down
from it to the time axis, and across from it to the distance axis.

In the walk above, find the corner where the line stops climbing. Go straight down: 10 minutes. Go straight across:
600 metres. So after 10 minutes, the walker was 600 metres from home.

### Part A: a sloping line means moving

In part A the line climbs from 0 metres to 600 metres while the time goes from 0 to 10 minutes. Every minute, the
distance gets bigger. That is what moving away from home looks like.

How fast? 600 metres in 10 minutes is $600 \div 10 = 60$ metres per minute. That is the rate you met in the
[last lesson](01-per-rates.md).

### Part B: a flat line means standing still

In part B the time goes from 10 to 15 minutes, but the distance stays at 600 metres. Five minutes pass, and she gets
no further. She has **stopped**. Maybe she was waiting for a friend, or for the traffic lights.

A flat line on a distance-time graph always means **not moving**. The clock keeps going (the line moves to the
right), but the distance does not change (the line does not go up).

Many people expect a flat line to mean "going steadily". It does not. On this kind of graph, flat means **still**.

### Part C: a steeper line means faster

In part C she covers the other 600 metres, from 600 to 1200 metres, in only 5 minutes (from 15 to 20 minutes). That
is $600 \div 5 = 120$ metres per minute, twice as fast as part A. Perhaps she was late and ran.

Look at the picture: line C is **steeper** than line A. Why must a faster part be steeper?

Think of moving one minute to the right on the graph. The line climbs by the distance covered in that one minute.

- In part A, one minute to the right, the line climbs 60 metres.
- In part C, one minute to the right, the line climbs 120 metres.

Same step across, bigger step up: that is exactly what "steeper" means. So on a distance-time graph,
**steepness shows speed**. Steeper means faster; gentler means slower; flat means stopped.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 150" role="img" aria-label="Three small staircases: a gentle line with small steps up for each minute, a steep line with big steps up for each minute, and a flat line with no step up">
  <g stroke="currentColor" stroke-width="1.5" fill="none">
    <line x1="20" y1="130" x2="120" y2="90"/>
    <line x1="160" y1="130" x2="260" y2="50"/>
    <line x1="300" y1="110" x2="400" y2="110"/>
  </g>
  <g stroke="#7ccf9a" stroke-width="2" stroke-dasharray="4 3" fill="none">
    <polyline points="20,130 45,130 45,120 70,120 70,110 95,110 95,100 120,100 120,90"/>
    <polyline points="160,130 185,130 185,110 210,110 210,90 235,90 235,70 260,70 260,50"/>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="70" y="146">gentle: slow</text><text x="210" y="146">steep: fast</text><text x="350" y="146">flat: stopped</text>
  </g>
</svg>
</div>

### Coming back: a line going down

The walk to school only moved away from home. What about a trip there and back?

If the distance up the side is "distance **from home**", then walking back towards home makes that distance
**smaller**. So the line goes **down**. When the line reaches the time axis again (distance 0), you are back home.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 215" role="img" aria-label="Distance from home against time: rising to 800 metres at 10 minutes, flat until 20 minutes, then falling back to 0 at 35 minutes">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.3">
    <line x1="60" y1="20" x2="410" y2="20"/><line x1="60" y1="52" x2="410" y2="52"/><line x1="60" y1="84" x2="410" y2="84"/><line x1="60" y1="116" x2="410" y2="116"/><line x1="60" y1="148" x2="410" y2="148"/>
    <line x1="110" y1="20" x2="110" y2="180"/><line x1="160" y1="20" x2="160" y2="180"/><line x1="210" y1="20" x2="210" y2="180"/><line x1="260" y1="20" x2="260" y2="180"/><line x1="310" y1="20" x2="310" y2="180"/><line x1="360" y1="20" x2="360" y2="180"/><line x1="410" y1="20" x2="410" y2="180"/>
  </g>
  <line x1="60" y1="180" x2="420" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="60" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="60,180 160,52 260,52 410,180" fill="none" stroke="#9cc9ea" stroke-width="4"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="60" y="196">0</text><text x="110" y="196">5</text><text x="160" y="196">10</text><text x="210" y="196">15</text><text x="260" y="196">20</text><text x="310" y="196">25</text><text x="360" y="196">30</text><text x="410" y="196">35</text>
    <text x="235" y="211">time (minutes)</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="54" y="184">0</text><text x="54" y="152">200</text><text x="54" y="120">400</text><text x="54" y="88">600</text><text x="54" y="56">800</text><text x="54" y="24">1000 m</text>
  </g>
</svg>
</div>

This is Jo's trip to the park. She walks 800 metres there in 10 minutes, plays for 10 minutes, then walks home in
15 minutes. The line going down is **less steep** than the line going up, because she walked home more slowly.

### What a graph can never do

A distance-time graph can never go **straight up** (a vertical line). A vertical line would mean covering some
distance in no time at all: being in two places at the same moment. And it can never turn back to the **left**,
because time does not run backwards. If you ever draw one of these, check your work.

### Straight and curved

Each part of the walk above is a **straight** line. A straight piece means a **steady** speed: the same distance in
every minute. Real people speed up and slow down a little, so a real graph would be slightly wobbly or curved. Curved
graphs, where the speed changes, come in [lesson 5](05-fast-then-slower.md).

<figure class="play" data-play="graph" data-form="line"><span class="ai-tag">AI-created</span><figcaption><b>Distance against time.</b> A steeper line is a faster trip; a negative slope is going back.</figcaption></figure>

## Worked examples

**1. Reading the walk to school** (the first graph).

- How far is school? The line ends at **1200 metres**.
- How long did the whole walk take? It ends at **20 minutes**.
- How long did she stop for? The flat part goes from 10 to 15 minutes: **5 minutes**.
- Where was she after 5 minutes? Go up from 5 on the time axis to the line, then across: **300 metres**. That makes
  sense: halfway through part A, she is halfway to 600 metres.

**2. Speeds in Jo's park trip** (the second graph).

- Going: 800 metres in 10 minutes: $800 \div 10 = 80$ metres per minute.
- Playing: no distance in 10 minutes: 0 metres per minute (stopped).
- Coming home: 800 metres in 15 minutes (from 20 to 35 minutes). $800 \div 15$ is about 53 metres per minute.

Going there was faster, and the graph shows it: the line up is steeper than the line down.

**3. A race on one graph.** Ana and Ben run 100 metres.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 215" role="img" aria-label="Two straight lines from the start: Ana's line reaches 100 metres at 20 seconds, Ben's less steep line reaches 100 metres at 25 seconds">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.3">
    <line x1="60" y1="20" x2="360" y2="20"/><line x1="60" y1="60" x2="360" y2="60"/><line x1="60" y1="100" x2="360" y2="100"/><line x1="60" y1="140" x2="360" y2="140"/>
    <line x1="110" y1="20" x2="110" y2="180"/><line x1="160" y1="20" x2="160" y2="180"/><line x1="210" y1="20" x2="210" y2="180"/><line x1="260" y1="20" x2="260" y2="180"/><line x1="310" y1="20" x2="310" y2="180"/><line x1="360" y1="20" x2="360" y2="180"/>
  </g>
  <line x1="60" y1="180" x2="370" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="60" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="260" y2="20" stroke="#eea66f" stroke-width="3.5"/>
  <line x1="60" y1="180" x2="310" y2="20" stroke="#7ccf9a" stroke-width="3.5"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="60" y="196">0</text><text x="110" y="196">5</text><text x="160" y="196">10</text><text x="210" y="196">15</text><text x="260" y="196">20</text><text x="310" y="196">25</text><text x="360" y="196">30</text>
    <text x="210" y="211">time (seconds)</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="54" y="184">0</text><text x="54" y="144">25</text><text x="54" y="104">50</text><text x="54" y="64">75</text><text x="54" y="24">100 m</text>
  </g>
  <g font-size="13" fill="currentColor"><text x="200" y="60">Ana</text><text x="262" y="90">Ben</text></g>
</svg>
</div>

- Who won? Ana's line reaches 100 metres first, at 20 seconds. Ben gets there at 25 seconds.
- Ana's speed: $100 \div 20 = 5$ metres per second. Ben's: $100 \div 25 = 4$ metres per second.
- How far apart were they after 10 seconds? Go up from 10: Ana is at 50 metres, Ben at 40 metres. Ana was
  **10 metres** ahead.

The steeper line is the faster runner, just as we said.

## Try it

Use Jo's park graph (the second graph) for questions 1 to 4.

1. How far from home was Jo after 5 minutes?
2. At what time did she leave the park?
3. How far from home was she at 30 minutes? (Hint: she walks home steadily for 15 minutes, from 20 to 35.)
4. How long was she away from home altogether?
5. On a distance-time graph, what does a flat part mean? What does a line going down mean?
6. Two lines start at the same point. Line P reaches 400 metres at 4 minutes. Line Q reaches 400 metres at 8
   minutes. Which is steeper, and what are the two speeds?
7. Sketch (in words, or on paper) the graph for this story: "Tom cycles 2 km to a shop in 10 minutes, stays 5
   minutes, then cycles home in 10 minutes."
8. Kim's graph has a part that goes straight up, from 200 metres to 500 metres at the same time, 6 minutes. Why can
   this not be right?

??? note "Answers"
    1. Halfway through the 10 minutes going there, so halfway to 800 metres: **400 metres**. (On the graph: go up
       from 5 minutes, then across, and you meet 400.)
    2. The flat part ends at **20 minutes**.
    3. From 20 to 35 minutes she walks 800 metres home. 30 minutes is 10 of those 15 minutes, so she has walked
       $\frac{10}{15} = \frac{2}{3}$ of the way home. $\frac{2}{3}$ of 800 is about 533 metres, so she is about
       $800 - 533 = 267$ metres from home. (Reading the graph gives roughly 270 metres.)
    4. From 0 to 35 minutes: **35 minutes**.
    5. Flat: not moving (time passes, distance stays the same). Going down: moving back **towards** the start, so the
       distance from the start gets smaller.
    6. **P** is steeper. P: $400 \div 4 = 100$ metres per minute. Q: $400 \div 8 = 50$ metres per minute.
    7. A straight line up from (0 minutes, 0 km) to (10 minutes, 2 km); a flat line at 2 km from 10 to 15 minutes;
       a straight line down from (15 minutes, 2 km) to (25 minutes, 0 km). The going and coming lines are equally
       steep, because both take 10 minutes for 2 km.
    8. Straight up means going from 200 to 500 metres in **no time at all**: 300 metres in zero seconds. Nobody can
       do that. A real graph always moves to the right while it climbs.

## Common mistake

**Thinking the graph is a picture of the path.** A line going up does **not** mean walking up a hill, and a line
going down does not mean walking downhill. The graph shows distance from the start, not height. A walk on perfectly
flat ground can make a graph with steep parts.

**Thinking flat means "steady".** On a distance-time graph, flat means **stopped**. (On a speed-time graph, which
you meet in [level 4](../level-4/index.md), flat means steady speed. Always read the labels on the axes first.)

## Where it leads

- Back: ["Per": what a rate tells you](01-per-rates.md) · Next: [Telling the story of a graph](03-graph-stories.md)
- [Level 3 page](index.md) · [Change and motion topic page](../index.md)
- Points on a grid and reading coordinates: [Coordinates on a grid](../../geometry/level-3/06-coordinates-grid.md).
- Line graphs of other data, such as temperatures: [Double bar graphs and broken-line graphs](../../statistics/level-3/06-double-bar-line.md).
- Later the steepness of a line becomes a number, called the **slope**: [Level 4](../level-4/index.md) and
  [Geometry](../../geometry/index.md).
