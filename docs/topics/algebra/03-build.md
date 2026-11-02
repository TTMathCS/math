---
title: "Build: Equations, functions and straight lines"
---

# Build: Equations, functions and straight lines

*Algebra · step 3 of 5*

## A question to start

Two phone plans. Plan A costs 30 dollars a month plus 2 dollars per gigabyte. Plan B costs 10 dollars a month plus 4
dollars per gigabyte. Plan B is cheaper if you hardly use data; Plan A is cheaper if you use a lot. Where exactly is
the switch-over point? On this page you will answer it three ways: with an equation, with a graph, and with a pair of
equations solved together.

## The idea

### Equations with the letter on both sides

The two plans cost the same when $30 + 2g = 10 + 4g$. Now the unknown is on **both** sides. The plan is always the
same:

1. **Expand brackets**, if there are any.
2. **Collect** the letter terms on one side and the plain numbers on the other, doing the same to both sides.
3. **Divide** by the coefficient to get the letter alone.
4. **Check** by substituting.

$$
\begin{aligned}
30 + 2g &= 10 + 4g\\
30 &= 10 + 2g \qquad \text{(take } 2g \text{ from both sides)}\\
20 &= 2g \qquad \text{(take 10 from both sides)}\\
g &= 10
\end{aligned}
$$

At 10 gigabytes both plans cost $30 + 20 = 50$ dollars, and $10 + 40 = 50$ dollars. Any equation like this, where
the letter appears only to the first power (no squares), is called **linear**.

### Functions: a machine with one output

A **function** is a rule that takes an input and gives exactly **one** output. Think of a machine: a number goes in,
the rule acts, a number comes out. We name the function, often $f$, and write $f(x)$ (read "f of x") for the output
when the input is $x$.

$$f(x) = 2x + 30 \qquad \Rightarrow \qquad f(10) = 2 \times 10 + 30 = 50.$$

The brackets in $f(10)$ do not mean multiply; they mean "put 10 into $f$". The set of inputs a function allows is
its **domain**; the set of outputs it can give is its **range**. For the phone plan, the domain is the numbers of
gigabytes from 0 upwards.

A real example: Mars's gravity pulls on things only about 0.38 times as hard as Earth's. So if $W$ is an object's
weight on Earth, its weight on Mars is the function $M(W) = 0.38\,W$. A suitcase that weighs 200 newtons on Earth
(the newton is the unit of force) weighs $M(200) = 76$ newtons on Mars.

### Graphs and coordinates

A function's **graph** is a picture of all its input–output pairs. Each pair $(x, y)$ is a point: go $x$ across and
$y$ up from the **origin** $(0, 0)$. For a linear function, the points lie on a straight line.

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

The lines cross at $(10, 50)$: the switch-over point. Left of it, Plan B's line is lower (cheaper); right of it,
Plan A's is.

### Slope and intercept: $y = mx + b$

Every non-vertical straight line can be written as

$$y = mx + b$$

- $b$ is the **y-intercept**: where the line crosses the vertical axis, the value of $y$ when $x = 0$. For Plan A,
  $b = 30$, the fixed monthly fee.
- $m$ is the **slope**: how much $y$ goes up when $x$ goes up by 1. For Plan A, $m = 2$, the cost per gigabyte. A
  bigger slope means a steeper line; a negative slope means the line goes down from left to right.

The slope between any two points $(x_1, y_1)$ and $(x_2, y_2)$ on the line is "rise over run":

$$m = \frac{y_2 - y_1}{x_2 - x_1}.$$

Two lines with the **same slope** are **parallel**: they never meet.

### Two equations at once

Finding where two lines cross means finding one pair $(x, y)$ that makes **both** equations true. This is a
**system of equations** (also called simultaneous equations). Two good methods:

- **Substitution.** Get one letter alone in one equation, and put that expression into the other.
- **Elimination.** Add or subtract the equations (or multiples of them) so that one letter cancels.

For the phone plans, $y = 30 + 2g$ and $y = 10 + 4g$. Substituting the first into the second gives
$30 + 2g = 10 + 4g$, the very equation we solved at the top. Graphs, single equations and systems are three views of
the same idea.

## Worked examples

**1. Brackets on both sides.** Solve $3(x + 4) = 5x - 2$.

- Expand: $3x + 12 = 5x - 2$.
- Take $3x$ from both sides: $12 = 2x - 2$.
- Add 2 to both sides: $14 = 2x$, so $x = 7$.
- Check: left $3(7 + 4) = 33$; right $5 \times 7 - 2 = 33$. Equal.

**2. The line through two points.** Find the equation of the line through $(1, 3)$ and $(4, 9)$.

- Slope: $m = \dfrac{9 - 3}{4 - 1} = \dfrac{6}{3} = 2$.
- So $y = 2x + b$. Put in the point $(1, 3)$: $3 = 2 + b$, so $b = 1$.
- The line is $y = 2x + 1$. Check with the other point: $2 \times 4 + 1 = 9$. Correct.

**3. Elimination.** Solve $2x + y = 11$ and $x - y = 1$ together.

- Add the two equations. The $y$ terms cancel: $3x = 12$, so $x = 4$.
- Put $x = 4$ into $x - y = 1$: $4 - y = 1$, so $y = 3$.
- Check in the first: $2 \times 4 + 3 = 11$. The lines cross at $(4, 3)$.

## Try it

1. Solve $5(x - 2) = 2x + 11$.
2. For $f(x) = 3x - 4$, find $f(5)$, and find the input $x$ that gives $f(x) = 20$.
3. Find the equation of the line through $(-2, 1)$ and $(2, 9)$.
4. Solve the system $x + y = 10$ and $x - y = 4$.
5. Using $M(W) = 0.38\,W$, what does an object weigh on Earth if it weighs 30.4 newtons on Mars?
6. Where do the lines $y = 3x + 2$ and $6x - 2y = 8$ meet?

??? note "Answers"
    1. Expand: $5x - 10 = 2x + 11$. Take $2x$ from both sides: $3x - 10 = 11$. Add 10: $3x = 21$, so $x = 7$. Check:
       $5 \times 5 = 25$ and $14 + 11 = 25$.
    2. $f(5) = 15 - 4 = 11$. For $3x - 4 = 20$: $3x = 24$, so $x = 8$.
    3. $m = \dfrac{9 - 1}{2 - (-2)} = \dfrac{8}{4} = 2$. Then $1 = 2 \times (-2) + b$ gives $b = 5$, so $y = 2x + 5$.
       Check: $2 \times 2 + 5 = 9$.
    4. Add the equations: $2x = 14$, so $x = 7$; then $y = 10 - 7 = 3$. Check: $7 - 3 = 4$.
    5. $0.38\,W = 30.4$, so $W = 30.4 \div 0.38 = 80$ newtons.
    6. Nowhere. Rearranging the second: $2y = 6x - 8$, so $y = 3x - 4$. Both lines have slope 3, so they are parallel,
       and since their intercepts differ (2 and −4) they never meet. The system has no solution.

## Common mistake

**Getting the sign wrong when expanding a bracket with a minus in front.** $-(x - 3)$ is $-x + 3$, not $-x - 3$:
the minus multiplies **every** term inside. In $10 - 2(x - 3)$, write $10 - 2x + 6 = 16 - 2x$. If in doubt, put in a
number: with $x = 5$, the original is $10 - 2 \times 2 = 6$, and $16 - 10 = 6$ agrees, while $10 - 2x - 6 = -6$ does
not.

## Where it leads

- Next step: [Master: polynomials and quadratics](04-master.md), where $x^2$ appears and straight lines bend into
  parabolas.
- Back a step: [Explore: letters for numbers](02-explore.md)
- Slope is a rate of change; it becomes the derivative in [change and motion](../change/index.md). Proportional
  functions $y = kx$ are the subject of [ratio and rates](../ratio/index.md).
- Systems with many equations and many unknowns are solved methodically in
  [MAT240 Unit 7 (systems and elementary operations)](../../uoft/MAT240H1/unit07.md).
