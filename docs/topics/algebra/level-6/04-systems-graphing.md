---
title: "Linear systems by graphing"
---

# Linear systems by graphing

*Algebra · level 6, lesson 4 of 6*

## A question to start

Two phone plans. Plan A costs 30 dollars a month plus 2 dollars per gigabyte of data. Plan B costs only 10 dollars a
month, but 4 dollars per gigabyte. If you hardly use any data, Plan B is cheaper. If you use a lot, Plan A is cheaper.
Where exactly is the switch-over point, and how much do the plans cost there?

Each plan on its own is a linear relation, like the taxi in level 5. The question asks about **both at once**: is
there a number of gigabytes where the two costs are equal? Two equations about the same two unknowns are called a
**system**, and the simplest way to understand one is to draw it. (The answer is 10 gigabytes and 50 dollars; see
the first drawing.)

## The idea

### A system of linear equations

Call the data used $g$ (in gigabytes) and the monthly cost $y$ (in dollars). The two plans give two equations:

$$y = 2g + 30 \qquad\text{and}\qquad y = 4g + 10.$$

A **solution of the system** is a pair of values, $g$ and $y$, that makes **both** equations true at the same time.
For example, $g = 5$, $y = 40$ makes the first equation true ($2 \times 5 + 30 = 40$) but not the second
($4 \times 5 + 10 = 30$), so it is **not** a solution of the system. It is a point on Plan A's line but not on Plan B's.

### Every equation is a line; every solution is a point

The graph of one linear equation is a straight line, and **every point on the line** is a pair that makes that
equation true. So a pair that makes both equations true is a point that lies on **both lines**: a point where they
cross. Solving a system by graphing means drawing both lines and reading off where they meet.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 200" role="img" aria-label="Two straight lines. Plan B starts lower and is steeper; it crosses Plan A at 10 gigabytes and 50 dollars.">
  <line x1="40" y1="170" x2="400" y2="170" stroke="currentColor" stroke-width="2"/>
  <line x1="40" y1="170" x2="40" y2="20" stroke="currentColor" stroke-width="2"/>
  <line x1="40" y1="110" x2="370" y2="50" stroke="#eea66f" stroke-width="4"/>
  <line x1="40" y1="150" x2="370" y2="30" stroke="#9cc9ea" stroke-width="4"/>
  <circle cx="260" cy="70" r="6" fill="#7ccf9a" stroke="currentColor"/>
  <line x1="260" y1="76" x2="260" y2="170" stroke="currentColor" stroke-dasharray="4 4" opacity="0.6"/>
  <line x1="40" y1="70" x2="254" y2="70" stroke="currentColor" stroke-dasharray="4 4" opacity="0.6"/>
  <g font-size="12" fill="currentColor">
    <text x="300" y="80">Plan A</text><text x="300" y="38">Plan B</text>
    <text x="260" y="188" text-anchor="middle">10</text><text x="34" y="74" text-anchor="end">50</text>
    <text x="34" y="114" text-anchor="end">30</text><text x="34" y="154" text-anchor="end">10</text>
    <text x="400" y="188" text-anchor="end">gigabytes</text><text x="46" y="28">dollars</text>
  </g>
</svg>
</div>

The lines cross at $(10, 50)$. Check in both equations: $2 \times 10 + 30 = 50$ ✓ and $4 \times 10 + 10 = 50$ ✓. So
at 10 gigabytes both plans cost 50 dollars. The graph tells us more than the single point, too: to the left of 10,
Plan B's line is lower (cheaper); to the right, Plan A's is.

### Drawing a line quickly

Two methods, depending on how the equation is written:

- **Slope and intercept**, for equations like $y = 2x + 3$: start at $(0, 3)$ on the $y$-axis, then step 1 across and 2
  up, and again. Join the points.
- **Intercepts**, for equations like $2x + 3y = 12$: put $x = 0$ to find where it crosses the $y$-axis
  ($3y = 12$, so $(0, 4)$), and put $y = 0$ to find where it crosses the $x$-axis ($2x = 12$, so $(6, 0)$). Join them.

Two points fix a line, but a third point is a good check: if the three do not line up, one of them is wrong.

### Three possible pictures

Two straight lines in a plane can be arranged in only three ways:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 165" role="img" aria-label="Three panels. One: two lines crossing at one point. Two: two parallel lines. Three: two lines lying on top of each other.">
  <g stroke="currentColor" stroke-width="1.5" fill="none">
    <rect x="10" y="10" width="125" height="110" rx="6"/><rect x="148" y="10" width="125" height="110" rx="6"/><rect x="286" y="10" width="125" height="110" rx="6"/>
  </g>
  <line x1="20" y1="110" x2="125" y2="25" stroke="#eea66f" stroke-width="4"/>
  <line x1="20" y1="35" x2="125" y2="105" stroke="#9cc9ea" stroke-width="4"/>
  <circle cx="72" cy="68" r="6" fill="#7ccf9a" stroke="currentColor"/>
  <line x1="158" y1="95" x2="263" y2="30" stroke="#eea66f" stroke-width="4"/>
  <line x1="158" y1="115" x2="263" y2="50" stroke="#9cc9ea" stroke-width="4"/>
  <line x1="296" y1="105" x2="401" y2="30" stroke="#eea66f" stroke-width="8"/>
  <line x1="296" y1="105" x2="401" y2="30" stroke="#9cc9ea" stroke-width="3" stroke-dasharray="8 6"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="72" y="138">cross once</text><text x="72" y="155">one solution</text>
    <text x="210" y="138">parallel</text><text x="210" y="155">no solution</text>
    <text x="348" y="138">same line</text><text x="348" y="155">infinitely many</text>
  </g>
</svg>
</div>

1. **They cross at one point.** This happens when the slopes are **different**. The system has exactly **one
   solution**.
2. **They are parallel.** Same slope, different intercepts: the lines run side by side forever and never meet. The
   system has **no solution**. Such a system is called **inconsistent**.
3. **They are the same line.** Same slope and same intercept: the two equations are really one equation in disguise
   (for example, one is double the other). Every point on the line is a solution, so there are **infinitely many**.

### Why there is no fourth picture

Could two straight lines cross at exactly **two** points? No. Through any two points there is only **one** straight
line. So if two lines shared two points, they would be the same line, and then they would share **all** their points.
That is why the number of solutions of a linear system is always 1, 0 or infinitely many, never 2 or 3. (Curves are
different: a line and a parabola can meet twice, as you will see in level 7.)

### Telling the case without drawing

Rewrite both equations in the form $y = mx + b$ and compare:

| Slopes | Intercepts | Lines | Solutions |
| --- | --- | --- | --- |
| different | anything | cross | exactly one |
| equal | different | parallel | none |
| equal | equal | same line | infinitely many |

### The limits of graphing

Graphing shows you the whole situation at a glance, and it is the best way to **understand** a system. But reading a
crossing point off a graph is only as accurate as the drawing. If the lines meet at $\left(\tfrac{12}{7}, \tfrac{31}{7}\right)$,
no hand-drawn graph will tell you that exactly. The next lesson gives two algebraic methods that find the exact answer
every time. Graphing remains the way to check that the answer is sensible.

## Worked examples

**1. The phone plans** (shown above): the lines $y = 2g + 30$ and $y = 4g + 10$ cross at $(10, 50)$.

**2. Slope and intercept.** Solve by graphing: $y = x + 1$ and $y = -2x + 7$.

- First line: start at $(0, 1)$, step 1 across and 1 up: $(1, 2)$, $(2, 3)$, $(3, 4)$.
- Second line: start at $(0, 7)$, step 1 across and 2 down: $(1, 5)$, $(2, 3)$, $(3, 1)$.
- Both lists contain $(2, 3)$, so the lines cross there. Check: $2 + 1 = 3$ ✓ and $-4 + 7 = 3$ ✓.

**3. Intercepts.** Solve by graphing: $x + y = 6$ and $x - y = 2$.

- First line: $x = 0$ gives $y = 6$; $y = 0$ gives $x = 6$. Points $(0, 6)$ and $(6, 0)$.
- Second line: $x = 0$ gives $y = -2$; $y = 0$ gives $x = 2$. Points $(0, -2)$ and $(2, 0)$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 270 290" role="img" aria-label="Graph of x plus y equals 6 and x minus y equals 2 crossing at the point 4, 2">
  <line x1="40" y1="215" x2="240" y2="215" stroke="currentColor" stroke-width="2"/>
  <line x1="40" y1="275" x2="40" y2="25" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="1" opacity="0.25">
    <line x1="90" y1="265" x2="90" y2="40"/><line x1="140" y1="265" x2="140" y2="40"/><line x1="190" y1="265" x2="190" y2="40"/>
    <line x1="40" y1="165" x2="240" y2="165"/><line x1="40" y1="115" x2="240" y2="115"/><line x1="40" y1="65" x2="240" y2="65"/>
  </g>
  <line x1="40" y1="65" x2="215" y2="240" stroke="#eea66f" stroke-width="3"/>
  <line x1="40" y1="265" x2="215" y2="90" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="140" cy="165" r="6" fill="#7ccf9a" stroke="currentColor"/>
  <g font-size="11" fill="currentColor">
    <text x="90" y="231" text-anchor="middle">2</text><text x="140" y="231" text-anchor="middle">4</text><text x="190" y="231" text-anchor="middle">6</text>
    <text x="34" y="169" text-anchor="end">2</text><text x="34" y="119" text-anchor="end">4</text><text x="34" y="69" text-anchor="end">6</text>
    <text x="150" y="160">(4, 2)</text>
    <text x="70" y="58">x + y = 6</text><text x="180" y="82">x − y = 2</text>
  </g>
</svg>
</div>

- The lines cross at $(4, 2)$. Check: $4 + 2 = 6$ ✓ and $4 - 2 = 2$ ✓.

**4. Parallel lines.** How many solutions has the system $y = 3x + 2$ and $6x - 2y = 8$?

- Rewrite the second: $-2y = -6x + 8$, so $y = 3x - 4$.
- Both slopes are 3; the intercepts are 2 and $-4$. The lines are parallel: **no solution**.
- In words: for any $x$, the first line is always 6 higher than the second.

**5. The same line.** How many solutions has the system $2x + 4y = 8$ and $x + 2y = 4$?

- The first equation is exactly double the second. Both rewrite as $y = -\tfrac12 x + 2$.
- Same line: **infinitely many** solutions, for example $(0, 2)$, $(4, 0)$ and $(2, 1)$. Any point with $x + 2y = 4$
  works.

## Try it

1. Is $(3, 1)$ a solution of the system $x + 2y = 5$ and $2x - y = 5$? Is $(1, 2)$?
2. Solve by graphing: $y = 2x - 1$ and $y = -x + 5$.
3. Solve by graphing: $x + y = 4$ and $y = x + 2$.
4. Without graphing, say how many solutions: $y = -2x + 3$ and $4x + 2y = 6$.
5. Without graphing, say how many solutions: $y = \tfrac12 x + 1$ and $x - 2y = 6$.
6. Gym A charges a 50 dollar joining fee plus 20 dollars a month. Gym B has no joining fee but charges 30 dollars a
   month. After how many months do they cost the same? Which is cheaper for a full year?
7. Explain why a system of two linear equations cannot have exactly two solutions.

??? note "Answers"
    1. $(3, 1)$: $3 + 2 = 5$ ✓ and $6 - 1 = 5$ ✓, so **yes**. $(1, 2)$: $1 + 4 = 5$ ✓ but $2 - 2 = 0 \ne 5$, so **no**:
       it is on the first line only.
    2. First line: $(0, -1)$, $(1, 1)$, $(2, 3)$. Second: $(0, 5)$, $(1, 4)$, $(2, 3)$. They cross at $(2, 3)$.
       Check: $4 - 1 = 3$ ✓ and $-2 + 5 = 3$ ✓.
    3. First line through $(0, 4)$ and $(4, 0)$; second through $(0, 2)$ with slope 1: $(1, 3)$. Cross at $(1, 3)$.
       Check: $1 + 3 = 4$ ✓ and $1 + 2 = 3$ ✓.
    4. $4x + 2y = 6$ gives $2y = -4x + 6$, so $y = -2x + 3$: the **same line**. Infinitely many solutions.
    5. $x - 2y = 6$ gives $-2y = -x + 6$, so $y = \tfrac12 x - 3$. Same slope $\tfrac12$, intercepts 1 and $-3$:
       parallel, **no solution**.
    6. Costs $y = 20m + 50$ and $y = 30m$. Equal when $20m + 50 = 30m$, so $m = 5$ months, at 150 dollars. For 12
       months: A costs $240 + 50 = 290$ dollars and B costs 360 dollars, so **A** is cheaper. (After month 5, A's line
       is below B's because its slope is smaller.)
    7. Through two points there is exactly one straight line. If two lines shared two points they would both be that
       line, so they would share every point: infinitely many solutions, not two.

## Common mistake

**Checking in only one equation.** A point on one line is not a solution of the system. In question 1, $(1, 2)$ fits
the first equation perfectly but not the second. Always check a solution in **both** equations.

**Trusting a rough graph too much.** If your lines seem to cross "at about $(2.4, 3.8)$", that is an estimate, not an
answer. Use the methods of the next lesson to find the exact point, then use the graph to see that it is reasonable.

## Where it leads

- Previous: [Factoring](03-factoring.md) · Next: [Linear systems by substitution and elimination](05-substitution-elimination.md)
- [Level 6 page](index.md) · [Algebra topic page](../index.md)
- Slopes, intercepts and parallel lines: [Slope and the equation of a line](../../geometry/level-6/06-slope-line-equation.md).
  One linear relation on its own: [Linear relations](../level-5/04-linear-relations.md).
- One solution, none or infinitely many first appeared for single equations in
  [Equations with brackets and x on both sides](../level-5/02-brackets-both-sides.md).
- Systems of three equations are three planes in space (level 8), and systems of many equations are the heart of
  linear algebra: [MAT240 Unit 7 (systems and elementary operations)](../../../uoft/MAT240H1/unit07.md).
