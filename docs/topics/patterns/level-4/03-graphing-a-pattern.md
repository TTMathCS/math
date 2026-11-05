---
title: "Graphing a pattern"
---

# Graphing a pattern

*Patterns and sequences · level 4, lesson 3 of 6*

## A question to start

Take the sequence 5, 8, 11, 14, 17, 20 and mark each term as a dot on squared paper: go across by the position and
up by the term. Lay a ruler on the dots. They line up **perfectly**, all six on one straight line.

Now do the same with the square numbers 1, 4, 9, 16, 25. No ruler will touch them all: they bend upwards in a
curve. What makes one pattern straight and the other bent? You can tell before you draw a single dot.

## The idea

### Plotting a sequence

A **graph** of a sequence is a picture of its position table. Draw two lines at right angles, called **axes**. The
line across (the horizontal axis) is for the **position** $n$. The line going up (the vertical axis) is for the
**term** $t_n$. Each column of the table becomes one dot, written as a pair of numbers in brackets
$(\text{position}, \text{term})$: the 3rd term of 5, 8, 11, ... becomes the point $(3, 11)$, found by going 3 across
and 11 up. These pairs are called **coordinates**; the across number always comes first.

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- |
| $t_n = 3n + 2$ | 5 | 8 | 11 | 14 | 17 | 20 |
| Point | (1, 5) | (2, 8) | (3, 11) | (4, 14) | (5, 17) | (6, 20) |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 275" role="img" aria-label="A grid with position n from 0 to 7 across and term from 0 to 25 up. Orange dots for 5, 8, 11, 14, 17, 20 lie on a straight line, each one 1 across and 3 up from the last. Green dots for the square numbers 1, 4, 9, 16, 25 bend upwards in a curve">
  <line x1="45" y1="230" x2="45" y2="15" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="45" y="246" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <line x1="93.5714" y1="230" x2="93.5714" y2="15" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="93.5714" y="246" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <line x1="142.143" y1="230" x2="142.143" y2="15" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="142.143" y="246" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <line x1="190.714" y1="230" x2="190.714" y2="15" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="190.714" y="246" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <line x1="239.286" y1="230" x2="239.286" y2="15" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="239.286" y="246" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <line x1="287.857" y1="230" x2="287.857" y2="15" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="287.857" y="246" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <line x1="336.429" y1="230" x2="336.429" y2="15" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="336.429" y="246" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <line x1="385" y1="230" x2="385" y2="15" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="385" y="246" font-size="11" text-anchor="middle" fill="currentColor">7</text>
  <line x1="45" y1="230" x2="385" y2="230" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="39" y="234" font-size="11" text-anchor="end" fill="currentColor">0</text>
  <line x1="45" y1="187" x2="385" y2="187" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="39" y="191" font-size="11" text-anchor="end" fill="currentColor">5</text>
  <line x1="45" y1="144" x2="385" y2="144" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="39" y="148" font-size="11" text-anchor="end" fill="currentColor">10</text>
  <line x1="45" y1="101" x2="385" y2="101" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="39" y="105" font-size="11" text-anchor="end" fill="currentColor">15</text>
  <line x1="45" y1="58" x2="385" y2="58" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="39" y="62" font-size="11" text-anchor="end" fill="currentColor">20</text>
  <line x1="45" y1="15" x2="385" y2="15" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="39" y="19" font-size="11" text-anchor="end" fill="currentColor">25</text>
  <line x1="45" y1="230" x2="385" y2="230" stroke="currentColor" stroke-width="1.5"/>
  <line x1="45" y1="230" x2="45" y2="15" stroke="currentColor" stroke-width="1.5"/>
  <text x="215" y="262" font-size="12" text-anchor="middle" fill="currentColor">position n</text>
  <text x="14" y="115.0" font-size="12" text-anchor="middle" fill="currentColor" transform="rotate(-90 14 115.0)">term</text>
  <path d="M 93.6 187.0 L 142.1 187.0 L 142.1 161.2" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <path d="M 142.1 161.2 L 190.7 161.2 L 190.7 135.4" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <path d="M 190.7 135.4 L 239.3 135.4 L 239.3 109.6" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <path d="M 239.3 109.6 L 287.9 109.6 L 287.9 83.8" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <path d="M 287.9 83.8 L 336.4 83.8 L 336.4 58.0" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="45" y1="212.8" x2="385" y2="32.2" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
  <circle cx="93.5714" cy="187" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="142.143" cy="161.2" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="190.714" cy="135.4" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="239.286" cy="109.6" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="287.857" cy="83.8" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="336.429" cy="58" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="93.5714" cy="221.4" r="5" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="142.143" cy="195.6" r="5" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="190.714" cy="152.6" r="5" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="239.286" cy="92.4" r="5" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="287.857" cy="15" r="5" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="200.429" y="32.2" font-size="12" text-anchor="end" fill="currentColor">1, 4, 9, 16, 25: a curve</text>
  <text x="258.714" y="161.2" font-size="12" text-anchor="start" fill="currentColor">5, 8, 11, ...: a line</text>
</svg>
</div>

The dots are **not** joined with a solid line, because a sequence only has terms at whole-number positions: there is
no 2.5th term. The faint line in the picture is drawn only to show that the orange dots sit on it.

### Why a constant difference makes a straight line

Look at the dashed steps between the orange dots. To get from one dot to the next you go **1 across** (the position
goes up by 1) and **3 up** (the term goes up by $d = 3$). Every step is exactly the same shape: 1 across, 3 up.

When you climb a staircase whose steps are all the same width and the same height, the tips of the steps all lie on
one straight slope. If any step were taller or shorter, the slope would bend there. So:

**Constant difference ⟹ every step is the same ⟹ the points lie on a straight line.**

(The arrow ⟹ means "so" or "this makes it true that".) It works the other way round too: if the dots lie on a straight
line, equally spaced across, the steps must all be the same, so the difference is constant.

For the square numbers the differences are 3, 5, 7, 9, ...: each step is 1 across but **taller** than the last. The
slope keeps getting steeper, so the dots bend upwards in a curve.

This is why rules like $t_n = 3n + 2$ are called **linear** (from "line"): their graphs are straight.

### What the rule tells you about the line

The two numbers in $t_n = dn + c$ each show up in the picture.

- **$d$, the difference, is the steepness.** It is how far the line climbs for every 1 across. $t_n = 5n + 1$ climbs
  5 per step and looks steeper than $t_n = 2n + 20$, which climbs 2. If $d$ is negative, the line goes **downhill**
  from left to right.
- **$c$, the zero term, is where the line meets the vertical axis.** Run the line back to $n = 0$: there, $d \times 0$
  is 0, so the height is just $c$. For $3n + 2$, the faint line crosses the vertical axis at 2, the zero term from
  lesson 2.

Two sequences with the **same** $d$ but different starts, like $3n + 2$ and $3n + 7$, have lines with the same
steepness, one above the other. They never meet: they are **parallel**, always 5 apart.

### Reading the rule from a graph

Given dots on a straight line, you can read the rule off:

1. Pick two dots next to each other. How far up from one to the next? That is $d$.
2. Run back to $n = 0$ (step back one more time from the first dot). The height there is the zero term.
3. Write $t_n = dn + (\text{zero term})$.

<figure class="play" data-play="seq" data-kind="arith"><span class="ai-tag">AI-created</span><figcaption><b>A pattern as a graph.</b> Adding the same each time puts the bar tops on a straight line.</figcaption></figure>

## Worked examples

**1. Plot $t_n = 2n + 1$.** The points are $(1, 3)$, $(2, 5)$, $(3, 7)$, $(4, 9)$. Each step is 1 across and 2 up,
so they lie on a straight line. Run back one step from $(1, 3)$: 2 down gives $(0, 1)$. The line meets the vertical
axis at 1, the zero term.

**2. A rule from a graph.** Dots are at $(1, 7)$, $(2, 10)$, $(3, 13)$, $(4, 16)$.

- Each step goes 3 up, so $d = 3$.
- One step back from $(1, 7)$ is $(0, 4)$: the zero term is 4.
- The rule is $t_n = 3n + 4$. Check: $3 \times 4 + 4 = 16$ ✓.

**3. Is the point on the line?** Does $(20, 62)$ belong to $t_n = 3n + 2$? Put $n = 20$ into the rule:
$3 \times 20 + 2 = 62$. **Yes.** Does $(12, 40)$? $3 \times 12 + 2 = 38$, not 40, so **no**: that point is 2 above
the line.

**4. Straight or curved, without drawing.** Which of these give dots on a straight line?

- 2, 5, 8, 11: differences 3, 3, 3. **Straight.**
- 1, 3, 6, 10 (triangular numbers): differences 2, 3, 4. **Curved** (bending upwards).
- 40, 34, 28, 22: differences −6, −6, −6. **Straight**, going downhill.

## Try it

1. Write the points for $t_n = 4n - 1$ for $n = 1$ to $4$. Describe each step. Where does the line meet the vertical
   axis?
2. Dots are at $(1, 10)$, $(2, 8)$, $(3, 6)$, $(4, 4)$. Does the line go uphill or downhill? Find the rule.
3. Which line is steeper, $t_n = 5n + 1$ or $t_n = 2n + 20$? Which has the larger first term?
4. Does $(15, 47)$ lie on $t_n = 3n + 2$? Does $(15, 45)$?
5. Plot 1, 2, 4, 8, 16 (in your head or on paper). Do the dots lie on a straight line? How can you tell from the
   numbers?
6. A straight-line pattern meets the vertical axis at 6 and climbs 2 for every step across. Write its rule and its
   first three terms.
7. Explain why the graphs of $t_n = 3n + 2$ and $t_n = 3n + 7$ never meet.
8. Two dots of a straight-line pattern are $(2, 11)$ and $(6, 23)$. Find the rule.

??? note "Answers"
    1. $(1, 3)$, $(2, 7)$, $(3, 11)$, $(4, 15)$. Each step is 1 across and 4 up. One step back from $(1, 3)$ is
       $(0, -1)$, so the line meets the vertical axis at $-1$.
    2. Downhill: each step goes 2 **down**, so $d = -2$. One step back from $(1, 10)$ goes up to $(0, 12)$. Rule:
       $t_n = 12 - 2n$. Check: $12 - 8 = 4$ ✓.
    3. $5n + 1$ is steeper (5 up per step, against 2). But $2n + 20$ has the larger first term: 22 against 6. (The
       steeper line catches up later; lesson 5 finds exactly when.)
    4. $3 \times 15 + 2 = 47$, so $(15, 47)$ is on the line; $(15, 45)$ is not.
    5. **No.** The differences are 1, 2, 4, 8: each step is taller than the last, so the dots curve upwards (more
       and more steeply).
    6. $t_n = 2n + 6$. First three terms: 8, 10, 12.
    7. Both climb 3 for every 1 across, so they have the same steepness. At every position, the second is exactly
       5 more than the first ($3n + 7 - (3n + 2) = 5$), so the gap never closes: the lines are parallel.
    8. From $n = 2$ to $n = 6$ is 4 steps across and $23 - 11 = 12$ up, so $d = 12 \div 4 = 3$. Zero term:
       $11 - 2 \times 3 = 5$. Rule: $t_n = 3n + 5$. Check: $18 + 5 = 23$ ✓.

## Common mistake

**Swapping the axes.** The point $(3, 11)$ means 3 **across** and 11 **up**, not the other way round. Position goes
across, term goes up. A quick check: as you move right along the graph, $n$ should go 1, 2, 3, 4.

**Reading the steepness over several steps as $d$.** From $(2, 11)$ to $(6, 23)$ the line rises 12, but that is over
4 steps. The difference $d$ is the rise for **one** step across: $12 \div 4 = 3$.

## Where it leads

- Back: [Finding the position rule](02-finding-position-rule.md) · Next: [Growing pattern pictures](04-growing-pattern-pictures.md)
- [Level 4 page](index.md) · [Patterns topic page](../index.md)
- Plotting points on a grid is in [Geometry](../../geometry/index.md) (level 3, the coordinate grid).
- Straight-line graphs and their slope continue in [Algebra](../../algebra/index.md); line graphs of real data in
  [Statistics](../../statistics/index.md).
- In level 7 of this topic, a sequence is treated as a function whose graph is a row of dots.
