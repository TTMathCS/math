---
title: "Telling the story of a graph"
---

# Telling the story of a graph

*Change and motion · level 3, lesson 3 of 6*

## A question to start

This graph shows how deep the water in a bath was, minute by minute, one evening. Nobody wrote down what happened.
But the graph knows.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="Depth of water in a bath against time: it rises steadily to 30 cm by 10 minutes, stays flat, jumps to 40 cm at 12 minutes, stays flat, rises to 45 cm between 18 and 20 minutes, stays flat, drops suddenly to 35 cm at 25 minutes, then falls steadily to 0 at 37 minutes">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.3">
    <line x1="60" y1="20" x2="380" y2="20"/><line x1="60" y1="52" x2="380" y2="52"/><line x1="60" y1="84" x2="380" y2="84"/><line x1="60" y1="116" x2="380" y2="116"/><line x1="60" y1="148" x2="380" y2="148"/>
    <line x1="140" y1="20" x2="140" y2="180"/><line x1="220" y1="20" x2="220" y2="180"/><line x1="300" y1="20" x2="300" y2="180"/><line x1="380" y1="20" x2="380" y2="180"/>
  </g>
  <line x1="60" y1="180" x2="390" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="60" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="60,180 140,84 156,84 160,52 204,52 220,36 260,36 264,68 276,68 356,180 380,180" fill="none" stroke="#9cc9ea" stroke-width="4"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="60" y="196">0</text><text x="140" y="196">10</text><text x="220" y="196">20</text><text x="300" y="196">30</text><text x="380" y="196">40</text>
    <text x="220" y="211">time (minutes)</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="54" y="184">0</text><text x="54" y="152">10</text><text x="54" y="120">20</text><text x="54" y="88">30</text><text x="54" y="56">40</text><text x="54" y="24">50 cm</text>
  </g>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="92" y="120">A</text><text x="148" y="78">B</text><text x="152" y="66">C</text><text x="182" y="46">D</text><text x="206" y="34">E</text><text x="240" y="30">F</text><text x="258" y="56">G</text><text x="270" y="62">H</text><text x="324" y="122">I</text>
  </g>
</svg>
</div>

When did someone get into the bath? When did they get out? Did anybody add more hot water? When was the plug
pulled? Try to tell the story before you read on.

## The idea

### A graph is a story told in a picture

A graph like this shows how **one thing changes as time goes by**. Time goes across. The thing that changes (here,
the depth of the water) goes up the side. Reading a graph means turning the shape back into words.

You only need to ask three questions about each part of the graph:

1. **Is it going up, going down, or flat?** Up means the amount is growing. Down means it is shrinking. Flat means it
   is staying the same.
2. **Is it steep or gentle?** Steep means changing fast. Gentle means changing slowly.
3. **Is it a sudden jump?** An almost upright line means a big change in a very short time.

### The bath, part by part

- **A** (0 to 10 minutes): the line goes up steadily from 0 to 30 cm. The taps are running and the bath is filling.
  It is a straight line, so the water rises by the same amount each minute: $30 \div 10 = 3$ cm per minute.
- **B** (10 to 12 minutes): flat at 30 cm. The taps are turned off. Nothing changes.
- **C** (at 12 minutes): a sudden jump from 30 cm to 40 cm. The water rose 10 cm almost at once. No tap can do that,
  but a body can: someone **got in**, and their body pushed the water up.
- **D** (12 to 18 minutes): flat at 40 cm. They are lying in the bath.
- **E** (18 to 20 minutes): a gentle rise from 40 to 45 cm. They turned on the hot tap for a top-up. (Why gentler
  than A? Maybe only one tap, running slowly: 5 cm in 2 minutes is 2.5 cm per minute.)
- **F** (20 to 25 minutes): flat again.
- **G** (at 25 minutes): a sudden drop from 45 to 35 cm. They **got out**. The water their body was pushing up
  falls back.
- **H** (25 to 27 minutes): flat at 35 cm. Perhaps they are drying off.
- **I** (27 to 37 minutes): a steady fall from 35 cm to 0. The **plug is pulled** and the bath drains. Then the line
  sits on 0: the bath is empty.

Notice that the jump in, C (10 cm), and the drop out, G (10 cm), are the same size. That makes sense: the same person
got in and out, so they pushed up the same amount of water.

### Sudden jumps

In the [last lesson](02-distance-time-graphs.md) we said a distance-time graph can never go straight up. Here the bath
graph does go (almost) straight up. Is that a problem?

No. A person cannot be in two places at once, but water **can** rise 10 cm in a second or two, when a whole body
slides in. Whether a jump is possible depends on **what** the graph is measuring. That is why you always read the
labels first.

### Containers and curves

Here is a famous puzzle about shapes and graphs. Water is poured into three containers from a tap that gives the
**same amount every second**. For each one we draw a graph of the **height** of the water against time.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 450 230" role="img" aria-label="Three containers above three graphs. A straight-sided jar gives a straight-line graph. A flask that is wide at the bottom and narrow at the top gives a curve that starts gently and gets steeper. A bowl that is narrow at the bottom and wide at the top gives a curve that starts steep and gets gentler">
  <g fill="#9cc9ea" fill-opacity="0.3" stroke="currentColor" stroke-width="2">
    <rect x="45" y="15" width="60" height="70"/>
    <polygon points="185,85 265,85 240,15 210,15"/>
    <polygon points="370,85 400,85 425,15 345,15"/>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="75" y="102">jar</text><text x="225" y="102">flask</text><text x="385" y="102">bowl</text>
  </g>
  <g stroke="currentColor" stroke-width="1.5" fill="none">
    <polyline points="25,120 25,210 135,210"/>
    <polyline points="170,120 170,210 280,210"/>
    <polyline points="320,120 320,210 430,210"/>
  </g>
  <line x1="25" y1="210" x2="125" y2="130" stroke="#eea66f" stroke-width="3"/>
  <path d="M 170 210 Q 240 200 270 130" fill="none" stroke="#eea66f" stroke-width="3"/>
  <path d="M 320 210 Q 330 140 420 130" fill="none" stroke="#eea66f" stroke-width="3"/>
  <g font-size="11" fill="currentColor" text-anchor="middle">
    <text x="80" y="226">same rise each second</text><text x="225" y="226">slow, then fast</text><text x="375" y="226">fast, then slow</text>
  </g>
</svg>
</div>

- **The jar** has straight sides. Every centimetre of height needs the same amount of water. The tap gives the same
  amount each second, so the height goes up the same amount each second. The graph is a **straight line**.
- **The flask** is wide at the bottom and narrow at the top. At first, each centimetre of height needs a lot of
  water (the wide part), so the height creeps up **slowly**. Near the top, a centimetre needs only a little water, so
  the height shoots up **fast**. The graph starts gentle and gets **steeper**: it curves upwards.
- **The bowl** is the other way round. It fills **fast** at the narrow bottom and **slowly** at the wide top. The
  graph starts steep and gets **gentler**.

The big idea: when the steepness of a graph changes, the **rate** is changing. A curve is a graph whose rate keeps
changing. You will see a lot more of this in [lesson 5](05-fast-then-slower.md).

### Drawing a graph from a story

You can go the other way too: start with words and draw the graph. Take the story one piece at a time. For each
piece, decide: up, down or flat? Steep or gentle? Sudden or steady? Then join the pieces in order. The end of one
piece is always the start of the next, because nothing can be in two states at the same moment.

## Worked examples

**1. A kettle.** "A kettle of water at 20 °C is switched on. It heats steadily and reaches 100 °C after 4 minutes.
It boils for 1 minute and switches itself off. Then it cools down, quickly at first and then more slowly."

- 0 to 4 minutes: a straight line **up** from 20 °C to 100 °C. (It rises $80 \div 4 = 20$ degrees per minute.)
- 4 to 5 minutes: **flat** at 100 °C. Boiling water stays at 100 °C (near sea level) however long it boils: the
  extra heat turns water into steam instead of making it hotter.
- After 5 minutes: a curve going **down**, steep at first, then gentler and gentler.

**2. Which graph?** A girl rides a swing. A graph shows her **height above the ground** against time. What shape is
it?

She goes up and down, up and down, again and again. So the graph is a **wave**: up, down, up, down, with the same
shape repeated. It never goes below the lowest point of the swing, so the graph never goes below some lowest height
(say 40 cm). Graphs that repeat like this come back in [Geometry](../../geometry/index.md), much later, as the
sine wave.

**3. Telling a story from a graph.** A graph shows the **number of people in a cinema** from 6 pm to 10 pm. It rises
gently from 0 at 6:00 to 40 at 6:45, then steeply to 200 at 7:00, is flat at 200 until 9:00, then falls very steeply
to 0 by 9:15.

The story: a few people drift in early, most people arrive in the last 15 minutes before a 7 pm film, the film runs
for two hours with nobody coming or going, and everybody leaves together when it ends. The fall at the end is even
steeper than the rise before the film: the rise is 160 people in 15 minutes (from 40 to 200), but the fall is 200
people in 15 minutes.

## Try it

1. On a graph of "water in a tank" against time, what does each of these mean: (a) a flat part; (b) a line going
   down; (c) a line going up steeply?
2. In the bath graph, how many centimetres per minute did the water fall when the plug was pulled (part I)?
3. A graph of the **height of a candle** against time goes down in a straight line from 20 cm to 5 cm in 5 hours,
   then is flat. Tell the story.
4. Which container gives a graph that starts **steep** and gets **gentler**: a jar with straight sides, a bowl that is
   wider at the top, or a flask that is narrower at the top?
5. Draw (on paper) a graph of the **temperature of an ice lolly** taken out of the freezer at −18 °C and left on a
   plate in a 20 °C room for two hours.
6. Sam says: "On my graph of the bath, the line jumps straight up at one moment. That is impossible, graphs can never
   go straight up." Is Sam right?
7. A graph shows a **plane's height** during a flight. Describe its shape from take-off to landing.

??? note "Answers"
    1. (a) The amount of water is not changing (no water going in or out, or the same amount going in as out).
       (b) Water is going out: the tank is emptying. (c) Water is coming in fast.
    2. It fell 35 cm in 10 minutes (from 27 to 37 minutes): $35 \div 10 = 3.5$ cm per minute.
    3. The candle is lit and burns down steadily: $15 \div 5 = 3$ cm per hour. After 5 hours, with 5 cm left, it is
       blown out (or goes out), so its height stops changing.
    4. The **bowl** that is wider at the top. Its narrow bottom fills quickly, and its wide top fills slowly.
    5. The line starts at −18 °C and goes **up**. The lolly warms quickly at first and then more slowly. While it is
       melting it may stay near 0 °C for a while (a flat-ish part), because the heat is melting the ice rather than
       warming it. Then the melted juice warms slowly towards 20 °C. It never goes above 20 °C: nothing heats it more
       than the room does.
    6. Sam is **not** right. A distance-time graph can never go straight up (you cannot travel in no time). But the
       depth of the bath really can jump in a second or two when someone gets in. What is possible depends on what
       the graph measures.
    7. Starting at 0 on the ground (flat while it waits), rising steeply after take-off, then more gently, then flat
       at its cruising height for most of the flight, then going down gently as it comes in to land, and flat at 0
       again on the ground.

## Common mistake

**Reading the graph as a picture.** A graph of a bath going up and down is not a picture of waves in the bath, and a
graph of a bike ride that goes up is not a hill. Ask "what is measured up the side?" before you say anything else.

**Ignoring steepness.** "It goes up" is only half the story. "It goes up **fast** at first, then **slowly**" is the
whole story. The steepness tells you **how fast** things change.

## Where it leads

- Back: [Distance-time graphs](02-distance-time-graphs.md) · Next: [Change in tables](04-change-in-tables.md)
- [Level 3 page](index.md) · [Change and motion topic page](../index.md)
- Line graphs of real data: [Double bar graphs and broken-line graphs](../../statistics/level-3/06-double-bar-line.md).
- Temperatures above and below zero: [Temperature in degrees Celsius](../../measurement/level-3/06-temperature-celsius.md).
- Graphs that do not tell the truth: [Graphs that mislead](../../statistics/level-4/06-misleading-graphs.md).
