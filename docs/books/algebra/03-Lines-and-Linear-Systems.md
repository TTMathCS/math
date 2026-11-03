# 3. Lines and linear systems

*A linear equation in one unknown has one answer. A linear equation in two unknowns, such as $2x + 3y = 12$, has
infinitely many, and when you plot them they form a straight line. This chapter joins algebra to geometry through
coordinates. It explains slope as a rate of change, the different ways to write a line and why parallel and
perpendicular lines have the slopes they do, and then solves several linear equations at once: two lines that
cross, are parallel or coincide, and three planes in space. It ends with linear inequalities and a first linear
program, the kind of problem that schedules factories and airlines.*

!!! abstract "In this chapter"
    **You will learn:**

    - how coordinates turn points into pairs of numbers and shapes into equations
    - slope as a rate of change, and why a line has the same slope everywhere
    - the forms of a line, and proofs of the slope tests for parallel and perpendicular lines
    - three ways to solve two equations in two unknowns, and a formula that covers them all
    - why a linear system has exactly one, no, or infinitely many solutions, and how to tell which
    - elimination for three unknowns, and what it means geometrically
    - linear inequalities, feasible regions, and why the best answer of a linear program sits at a corner

    **You need:** [Chapter 2](02-Equations-and-Inequalities.md) (solving linear equations and inequalities). For a
    gentler version, see the Topics lessons [Linear relations](../../topics/algebra/level-5/04-linear-relations.md),
    [Systems by graphing](../../topics/algebra/level-6/04-systems-graphing.md) and
    [Substitution and elimination](../../topics/algebra/level-6/05-substitution-elimination.md).

    **Levels:** 3.1 to 3.4 are beginner to intermediate; 3.5 and 3.6 are intermediate; 3.7 is intermediate with an
    advanced ending.

## 3.1 Coordinates

How do you tell someone exactly where a point is on a flat sheet? Draw two perpendicular number lines crossing at
their zeros: a horizontal **$x$-axis** and a vertical **$y$-axis**. The crossing point is the **origin** $O$. Any
point $P$ is then described by two numbers: go along the $x$-axis to the point directly below (or above) $P$ and
read off its $x$-coordinate, then do the same for $y$. We write $P = (x, y)$, an **ordered pair**: order matters,
since $(2, 5)$ and $(5, 2)$ are different points. The axes cut the plane into four **quadrants**, numbered
anticlockwise from the top right, where both coordinates are positive.

This simple device is one of the most important ideas in mathematics, because it works both ways. A point becomes
a pair of numbers, and a condition on numbers, such as $y = 2x + 1$, becomes a set of points, a **graph**: all the
points whose coordinates make the condition true. Geometry questions can then be answered by algebra, and algebra
can be seen as pictures. It is called **analytic geometry**, and it was found independently by René Descartes and
Pierre de Fermat in the 1630s. (Maps work the same way: latitude and longitude are coordinates on a sphere, and the
maps of Mars use a grid of the same kind.)

### Distance and midpoint

**Distance formula.** The distance between $P_1 = (x_1, y_1)$ and $P_2 = (x_2, y_2)$ is

$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}.$$

*Proof.* The point $Q = (x_2, y_1)$ makes a right-angled triangle with $P_1$ and $P_2$: the side $P_1Q$ is
horizontal with length $|x_2 - x_1|$, and $QP_2$ is vertical with length $|y_2 - y_1|$. By Pythagoras' theorem,
$d^2 = |x_2 - x_1|^2 + |y_2 - y_1|^2$, and the absolute values can be dropped because squares are never negative.
$\square$

**Midpoint formula.** The midpoint of $P_1P_2$ is $\left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$: average
the coordinates. (Each coordinate of the midpoint is halfway between the two coordinates, by the same right
triangle cut in half.)

**Example 1.** For $A = (1, 2)$ and $B = (7, 10)$: $AB = \sqrt{6^2 + 8^2} = \sqrt{100} = 10$, and the midpoint is
$(4, 6)$.

## 3.2 Slope as a rate

A taxi charges 3.50 dollars to start and 2 dollars per kilometre. The fare for $x$ km is $y = 2x + 3.5$. Each
extra kilometre adds 2 dollars, whatever the distance already driven. Plot the points and they lie on a straight
line, rising 2 units for every 1 unit across.

The **slope** of the line through two points $(x_1, y_1)$ and $(x_2, y_2)$, with $x_1 \neq x_2$, is

$$m = \frac{\text{rise}}{\text{run}} = \frac{y_2 - y_1}{x_2 - x_1}.$$

It measures how fast $y$ changes as $x$ changes: the **rate of change** of $y$ with respect to $x$. Its units are
"units of $y$ per unit of $x$": dollars per kilometre for the taxi, metres per second for a position graph (that
is, a speed), degrees per hour for a temperature graph.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 200" role="img" aria-label="Axes with the line y equals one half x plus one. A slope triangle from the point 0, 1 to the point 4, 3 has a run of 4 and a rise of 2">
  <line x1="20" y1="150" x2="400" y2="150" stroke="currentColor" stroke-width="1.2"/>
  <line x1="60" y1="190" x2="60" y2="8" stroke="currentColor" stroke-width="1.2"/>
  <text x="394" y="168" font-size="13" fill="currentColor">x</text>
  <text x="68" y="16" font-size="13" fill="currentColor">y</text>
  <line x1="30" y1="135" x2="270" y2="15" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="60" y1="120" x2="180" y2="120" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="180" y1="120" x2="180" y2="60" stroke="#7ccf9a" stroke-width="2"/>
  <circle cx="60" cy="120" r="4" fill="currentColor"/>
  <circle cx="180" cy="60" r="4" fill="currentColor"/>
  <text x="120" y="138" text-anchor="middle" font-size="13" fill="currentColor">run = 4</text>
  <text x="188" y="95" font-size="13" fill="currentColor">rise = 2</text>
  <text x="70" y="113" font-size="12" fill="currentColor">(0, 1)</text>
  <text x="140" y="52" font-size="12" fill="currentColor">(4, 3)</text>
  <text x="280" y="40" font-size="14" fill="currentColor">y = x/2 + 1</text>
  <text x="280" y="60" font-size="14" fill="currentColor">slope = 2/4 = 1/2</text>
</svg>
</div>

- A **positive** slope means the line rises from left to right; a **negative** one means it falls.
- **Zero** slope means a horizontal line: $y$ does not change.
- A **vertical** line has no slope: the run is 0 and division by 0 is undefined.
- The bigger $|m|$, the steeper the line.

**Why "the" slope?** The definition uses two particular points. Would two other points on the same line give a
different number? No, and here is why. Take the line $y = mx + b$ and any two different points on it,
$(x_1, mx_1 + b)$ and $(x_2, mx_2 + b)$. Their slope is

$$\frac{(mx_2 + b) - (mx_1 + b)}{x_2 - x_1} = \frac{m(x_2 - x_1)}{x_2 - x_1} = m.$$

The same $m$, for every pair. Geometrically, the slope triangles drawn between different pairs of points are all
similar (same angles), so their ratios of rise to run agree. A line is exactly a graph with **constant rate of
change**; this is what "linear" means, and the reason linear models are the first thing anyone tries.

## 3.3 Forms of a line

The same line can be written in several ways; each form is convenient for a different job.

| Form | Equation | Good for |
|---|---|---|
| Slope-intercept | $y = mx + b$ | reading off slope $m$ and $y$-intercept $b$ |
| Point-slope | $y - y_1 = m(x - x_1)$ | writing a line through a known point with known slope |
| Standard (general) | $Ax + By = C$ | including vertical lines; systems of equations |
| Intercept | $\dfrac{x}{p} + \dfrac{y}{q} = 1$ | a line crossing the axes at $(p, 0)$ and $(0, q)$ |

The **$y$-intercept** is where the line crosses the $y$-axis (put $x = 0$); the **$x$-intercept** is where it
crosses the $x$-axis (put $y = 0$).

**Point-slope, explained.** A point $(x, y)$ different from $(x_1, y_1)$ lies on the line through $(x_1, y_1)$ with
slope $m$ exactly when $\frac{y - y_1}{x - x_1} = m$. Multiplying by $x - x_1$ gives $y - y_1 = m(x - x_1)$, which
also includes the point $(x_1, y_1)$ itself.

**Example 2.** Find the line through $(2, -1)$ and $(5, 8)$.

Slope $m = \frac{8 - (-1)}{5 - 2} = \frac{9}{3} = 3$. Point-slope with $(2, -1)$: $y + 1 = 3(x - 2)$, so
$y = 3x - 7$. In standard form, $3x - y = 7$. **Check** the other point: $3(5) - 7 = 8$. ✓ The intercepts are
$(0, -7)$ and $(\frac{7}{3}, 0)$.

**Every line has a standard form.** A non-vertical line is $y = mx + b$, which is $-mx + y = b$: standard form
with $A = -m$, $B = 1$. A vertical line through $(c, 0)$ is $x = c$: standard form with $A = 1$, $B = 0$.
Conversely, if $B \neq 0$, then $Ax + By = C$ can be rewritten $y = -\frac{A}{B}x + \frac{C}{B}$, a line with slope
$-\frac{A}{B}$; and if $B = 0$ (but $A \neq 0$) it is the vertical line $x = \frac{C}{A}$. So **the graphs of
equations $Ax + By = C$, with $A$ and $B$ not both zero, are exactly the straight lines.** That is the precise
reason these equations are called linear.

### Parallel lines

**Theorem.** Two different non-vertical lines are parallel if and only if they have the same slope.

*Proof.* Let the lines be $y = m_1x + b_1$ and $y = m_2x + b_2$. They meet at a point $(x, y)$ exactly when
$m_1x + b_1 = m_2x + b_2$, that is, when $(m_1 - m_2)x = b_2 - b_1$. By the case analysis of
[Chapter 2](02-Equations-and-Inequalities.md): if $m_1 \neq m_2$ there is exactly one such $x$, so the lines meet
and are not parallel. If $m_1 = m_2$, the equation reads $0 = b_2 - b_1$, and since the lines are different,
$b_1 \neq b_2$, so there is no solution: the lines never meet. In the plane, "never meet" is what parallel
means. $\square$

### Perpendicular lines

**Theorem.** Two non-vertical lines with slopes $m_1$ and $m_2$ are perpendicular if and only if $m_1m_2 = -1$.

*Proof.* Moving a line without turning it changes neither its slope nor the angle it makes with another line, so
we may slide both lines to pass through the origin: $y = m_1x$ and $y = m_2x$. The points $P = (1, m_1)$ and
$Q = (1, m_2)$ lie on them. The lines are perpendicular exactly when the angle $POQ$ is a right angle, and by
Pythagoras' theorem and its converse, that happens exactly when $OP^2 + OQ^2 = PQ^2$. By the distance formula,

$$OP^2 + OQ^2 = (1 + m_1^2) + (1 + m_2^2), \qquad PQ^2 = (m_1 - m_2)^2 = m_1^2 - 2m_1m_2 + m_2^2.$$

These are equal exactly when $2 = -2m_1m_2$, that is, when $m_1m_2 = -1$. $\square$

There is also a one-line picture. Turning the plane a quarter turn anticlockwise about the origin sends the point
$(a, b)$ to $(-b, a)$. A line of slope $m$ through the origin contains $(1, m)$; turned, it contains $(-m, 1)$, so
its slope is $\frac{1}{-m} = -\frac{1}{m}$. "Perpendicular slopes are negative reciprocals."

**Example 3.** Find the lines through $(1, 5)$ parallel and perpendicular to $y = 3x - 7$.

Parallel: slope 3, so $y - 5 = 3(x - 1)$, or $y = 3x + 2$. Perpendicular: slope $-\frac{1}{3}$, so
$y - 5 = -\frac{1}{3}(x - 1)$, or $y = -\frac{1}{3}x + \frac{16}{3}$. **Check:** $3 \cdot (-\frac{1}{3}) = -1$,
and both lines pass through $(1, 5)$: $3 + 2 = 5$ and $-\frac{1}{3} + \frac{16}{3} = 5$. ✓

### Distance from a point to a line

*Level: intermediate.*

**Theorem.** The distance from the point $(x_0, y_0)$ to the line $Ax + By + C = 0$ is

$$\frac{|Ax_0 + By_0 + C|}{\sqrt{A^2 + B^2}}.$$

*Proof.* The shortest path from the point to the line is along the perpendicular. The line has slope $-\frac{A}{B}$
(if $B \neq 0$), so the perpendicular direction has slope $\frac{B}{A}$: the direction of the vector $(A, B)$. (This
holds for vertical and horizontal lines too.) The points along the perpendicular are $(x_0 + At, y_0 + Bt)$ for
numbers $t$. The foot of the perpendicular is the one on the line:

$$A(x_0 + At) + B(y_0 + Bt) + C = 0 \quad\Longrightarrow\quad t = -\frac{Ax_0 + By_0 + C}{A^2 + B^2}.$$

The distance from $(x_0, y_0)$ to $(x_0 + At, y_0 + Bt)$ is $\sqrt{A^2t^2 + B^2t^2} = |t|\sqrt{A^2 + B^2}$, and
substituting $t$ gives the formula. $\square$

**Example 4.** The distance from $(1, 2)$ to $3x + 4y - 1 = 0$ is $\frac{|3 + 8 - 1|}{\sqrt{9 + 16}} = \frac{10}{5} = 2$.

## 3.4 Two equations, two unknowns

A theatre sells adult tickets for 12 dollars and child tickets for 7 dollars. One evening it sells 40 tickets for
380 dollars. How many of each?

With $a$ adults and $c$ children, two facts give two equations:

$$a + c = 40, \qquad 12a + 7c = 380.$$

Either equation alone has infinitely many solutions (a whole line of them). Together they usually pin down one
pair. A **system of linear equations** is a collection of linear equations to be satisfied at the same time; a
**solution** is a choice of values for all the unknowns that makes every equation true. Here are three methods,
using a second example.

**Example 5.** Solve $\;2x + 3y = 12,\; x - y = 1$.

**Method 1: graphing.** Each equation is a line. The first passes through $(6, 0)$ and $(0, 4)$; the second through
$(1, 0)$ and $(0, -1)$. Drawn carefully, they cross at $(3, 2)$. A solution of the system is a point on both lines:
an **intersection point**. Graphing shows what is going on, but it is only as accurate as the drawing; a crossing
at $(\frac{58}{19}, \frac{25}{19})$ would be hard to read.

**Method 2: substitution.** Solve one equation for one unknown and substitute into the other. From the second,
$x = y + 1$. Then the first becomes $2(y + 1) + 3y = 12$, so $5y = 10$, $y = 2$, and $x = 3$.
**Check:** $6 + 6 = 12$ and $3 - 2 = 1$. ✓

**Method 3: elimination.** Add a multiple of one equation to the other, chosen to make one unknown vanish. Multiply
the second equation by 3: $3x - 3y = 3$. Add it to the first: $5x = 15$, so $x = 3$, and then $y = x - 1 = 2$.

**Example 6.** Solve $\;3x + 2y = 16,\; 5x - 3y = 14$ by elimination.

To eliminate $y$, make its coefficients opposites: multiply the first equation by 3 and the second by 2:

$$9x + 6y = 48, \qquad 10x - 6y = 28.$$

Adding, $19x = 76$, so $x = 4$; then $3(4) + 2y = 16$ gives $y = 2$. **Check:** $20 - 6 = 14$. ✓

Back to the theatre: substitute $c = 40 - a$ into the second equation: $12a + 280 - 7a = 380$, so $5a = 100$,
$a = 20$, $c = 20$. **Check:** $240 + 140 = 380$ dollars. ✓

### Why elimination is safe

Elimination replaces a system by a new one. Is the new system **equivalent**, with the same solutions? The moves are:

1. multiply one equation by a nonzero number;
2. add a multiple of one equation to another.

Each can be undone (divide by the number; subtract the same multiple), and any solution of the old system satisfies
the new equations and vice versa, by the argument of [Chapter 2](02-Equations-and-Inequalities.md), 2.7. So
elimination never gains or loses a solution, as long as you **keep** the equation you added from; you change one
equation at a time and keep the rest. These are the **elementary row operations** of linear algebra (together with
swapping two equations).

### A formula for every two-by-two system

Take the general system

$$ax + by = e, \qquad cx + dy = f.$$

Multiply the first by $d$ and the second by $b$ and subtract: $(ad - bc)x = ed - bf$. Multiply the first by $c$ and
the second by $a$ and subtract: $(ad - bc)y = af - ce$. The number

$$D = ad - bc$$

is called the **determinant** of the system. If $D \neq 0$, then

$$x = \frac{ed - bf}{ad - bc}, \qquad y = \frac{af - ce}{ad - bc},$$

and substituting back shows that this pair really does satisfy both equations (try it; it is a short calculation).
This is **Cramer's rule** for two unknowns, named after Gabriel Cramer, who published the general rule in 1750.
**Check** on Example 5 ($a = 2, b = 3, c = 1, d = -1, e = 12, f = 1$): $D = -2 - 3 = -5$,
$x = \frac{-12 - 3}{-5} = 3$, $y = \frac{2 - 12}{-5} = 2$. ✓

For hand calculation, elimination is usually quicker; the value of the formula is that it shows **exactly when**
there is a single solution.

## 3.5 When there is no solution, or infinitely many

Two lines in the plane can do only three things.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 150" role="img" aria-label="Three panels. Left, two lines crossing at one point: one solution. Middle, two parallel lines: no solution. Right, two lines on top of each other: infinitely many solutions">
  <rect x="10" y="10" width="125" height="105" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="148" y="10" width="125" height="105" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <rect x="286" y="10" width="125" height="105" fill="none" stroke="currentColor" stroke-width="0.8"/>
  <line x1="20" y1="100" x2="125" y2="25" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="20" y1="30" x2="125" y2="95" stroke="#9cc9ea" stroke-width="2.5"/>
  <circle cx="72.6" cy="62.4" r="4" fill="currentColor"/>
  <line x1="158" y1="90" x2="263" y2="30" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="158" y1="110" x2="263" y2="50" stroke="#9cc9ea" stroke-width="2.5"/>
  <line x1="296" y1="100" x2="401" y2="25" stroke="#eea66f" stroke-width="6"/>
  <line x1="296" y1="100" x2="401" y2="25" stroke="#9cc9ea" stroke-width="2.5"/>
  <text x="72" y="136" text-anchor="middle" font-size="13" fill="currentColor">one solution</text>
  <text x="210" y="136" text-anchor="middle" font-size="13" fill="currentColor">no solution</text>
  <text x="348" y="136" text-anchor="middle" font-size="13" fill="currentColor">infinitely many</text>
</svg>
</div>

They cross at one point (one solution), they are parallel (no solution), or they are the same line (every point of
it is a solution). Algebra sees the same three cases.

**Example 7 (no solution).** $\;x + 2y = 4,\; 2x + 4y = 5$.

Subtract twice the first from the second: $0 = 5 - 8 = -3$. False, so there is no solution: the system is
**inconsistent**. Both lines have slope $-\frac{1}{2}$, with different intercepts, so they are parallel.

**Example 8 (infinitely many).** $\;x + 2y = 4,\; 2x + 4y = 8$.

Subtract twice the first from the second: $0 = 0$. The second equation said nothing new; the two equations describe
the same line. Every point on $x + 2y = 4$ is a solution. To list them all, let $y$ be any number $t$ (a
**parameter**); then $x = 4 - 2t$. The solutions are $(4 - 2t, t)$ for every real $t$: for instance $(4, 0)$,
$(2, 1)$, $(0, 2)$. The system is **dependent**.

**Theorem.** Consider $ax + by = e$, $cx + dy = f$, where each equation really is a line (in each, the two
coefficients are not both zero), and let $D = ad - bc$.

1. If $D \neq 0$, there is exactly one solution.
2. If $D = 0$, there is either no solution or infinitely many.

*Proof.* Part 1 is Cramer's rule from 3.4. For part 2, suppose $D = 0$ and the system has at least one solution
$(x_0, y_0)$. For any number $t$, try the point $(x_0 + bt, y_0 - at)$:

$$a(x_0 + bt) + b(y_0 - at) = ax_0 + by_0 = e,$$

$$c(x_0 + bt) + d(y_0 - at) = cx_0 + dy_0 + (cb - da)t = f - Dt = f.$$

Both equations hold, for every $t$. Since $a$ and $b$ are not both zero, different values of $t$ give different
points, so there are infinitely many solutions. Hence with $D = 0$ there is never exactly one. $\square$

Geometrically, $D = 0$ says the lines point the same way. If $b$ and $d$ are not zero, the slopes are $-\frac{a}{b}$
and $-\frac{c}{d}$, and these are equal exactly when $ad = bc$. So: **$D \neq 0$ means the lines cross; $D = 0$
means parallel or identical.** This little number $ad - bc$ is the first determinant; it grows up in linear algebra
into a test for whether any square system has a unique solution, and into a measure of area and volume.

## 3.6 Three unknowns

*Level: intermediate.*

An equation $ax + by + cz = d$ in three unknowns describes a **plane** in three-dimensional space (with $x$, $y$,
$z$ axes at right angles). Three such equations ask for a point on three planes at once.

**Example 9.** Solve

$$
\begin{aligned}
x + y + z &= 6 \\
2x - y + z &= 3 \\
x + 2y - z &= 2
\end{aligned}
$$

**Step 1: use the first equation to eliminate $x$ from the others.** Subtract twice the first from the second,
and the first from the third:

$$
\begin{aligned}
x + y + z &= 6 \\
-3y - z &= -9 \\
y - 2z &= -4
\end{aligned}
$$

**Step 2: use the new second equation to eliminate $y$ from the third.** Add $\frac{1}{3}$ of the second to the
third, or (to avoid fractions) multiply the third by 3 and add the second: $-7z = -21$. The system is now in
**triangular form**:

$$
\begin{aligned}
x + y + z &= 6 \\
-3y - z &= -9 \\
-7z &= -21
\end{aligned}
$$

**Step 3: back-substitute.** $z = 3$; then $-3y - 3 = -9$ gives $y = 2$; then $x = 6 - 2 - 3 = 1$.
**Check** in all three original equations: $1 + 2 + 3 = 6$, $2 - 2 + 3 = 3$, $1 + 4 - 3 = 2$. ✓

This is **Gaussian elimination**. It works for any number of equations and unknowns, and it is what computers use
(with refinements) to solve systems with millions of unknowns. Bookkeeping is easier if you drop the letters and
keep only the numbers in an **augmented matrix**, one row per equation:

$$
\left[\begin{array}{rrr|r} 1 & 1 & 1 & 6 \\ 2 & -1 & 1 & 3 \\ 1 & 2 & -1 & 2 \end{array}\right]
\;\longrightarrow\;
\left[\begin{array}{rrr|r} 1 & 1 & 1 & 6 \\ 0 & -3 & -1 & -9 \\ 0 & 1 & -2 & -4 \end{array}\right]
\;\longrightarrow\;
\left[\begin{array}{rrr|r} 1 & 1 & 1 & 6 \\ 0 & -3 & -1 & -9 \\ 0 & 0 & -7 & -21 \end{array}\right]
$$

### The geometry of three planes

Three planes can meet in a single point (the usual case), but there are other possibilities, and elimination
detects every one.

**Example 10 (no solution).** $\;x + y + z = 1,\; x + 2y + 3z = 2,\; 2x + 3y + 4z = 4$.

Subtract the first two equations from the third: $0 = 4 - 1 - 2 = 1$. Impossible. Here no two of the planes are
parallel, but each pair meets in a line and the three lines are parallel, like the three long faces of a
triangular prism: no point lies on all three.

**Example 11 (infinitely many).** $\;x + y + z = 1,\; x + 2y + 3z = 2,\; 2x + 3y + 4z = 3$.

Now the third equation is exactly the sum of the first two, so it adds nothing. Subtracting the first from the
second gives $y + 2z = 1$. Let $z = t$ (any number); then $y = 1 - 2t$ and $x = 1 - y - z = t$. The solutions are
$(t, 1 - 2t, t)$ for all $t$: a whole line of points, through which all three planes pass, like pages of a book
meeting at the spine. **Check** with $t = 1$: $(1, -1, 1)$ gives $1 - 1 + 1 = 1$, $1 - 2 + 3 = 2$, $2 - 3 + 4 = 3$. ✓

The general pattern, proved in linear algebra: a system of linear equations has **no solution, exactly one, or
infinitely many**; never exactly two or five. (If $P$ and $Q$ are two different solutions, every point on the line
through them is a solution too: try it with the points $P + t(Q - P)$.)

### Using a system: a curve through three points

**Example 12.** Find the parabola $y = ax^2 + bx + c$ through $(1, 2)$, $(2, 3)$ and $(3, 6)$.

Each point gives one linear equation in the unknowns $a, b, c$:

$$a + b + c = 2, \qquad 4a + 2b + c = 3, \qquad 9a + 3b + c = 6.$$

Subtracting consecutive equations: $3a + b = 1$ and $5a + b = 3$; subtracting again, $2a = 2$. So $a = 1$,
$b = -2$, $c = 3$, and the parabola is $y = x^2 - 2x + 3$. **Check:** at $x = 3$, $9 - 6 + 3 = 6$. ✓ The equations
are linear in the **coefficients** even though the curve is not a line; this is why linear systems appear in
almost every part of science, from fitting curves to data to balancing chemical equations.

### Try it in Python

```python
from fractions import Fraction as F

def solve(rows):
    """Gaussian elimination with exact fractions; rows are augmented rows [a, b, c, d]."""
    rows = [[F(v) for v in r] for r in rows]
    n = len(rows)
    for i in range(n):
        p = next(r for r in range(i, n) if rows[r][i] != 0)   # find a nonzero pivot
        rows[i], rows[p] = rows[p], rows[i]
        for r in range(i + 1, n):
            k = rows[r][i] / rows[i][i]
            rows[r] = [a - k * b for a, b in zip(rows[r], rows[i])]
    x = [F(0)] * n
    for i in reversed(range(n)):                                # back-substitution
        x[i] = (rows[i][n] - sum(rows[i][j] * x[j] for j in range(i + 1, n))) / rows[i][i]
    return x

print(solve([[1, 1, 1, 6], [2, -1, 1, 3], [1, 2, -1, 2]]))   # [Fraction(1, 1), Fraction(2, 1), Fraction(3, 1)]
```

(This short version assumes there is exactly one solution; it fails with an error if a pivot cannot be found, which
is how it would notice Examples 10 and 11.)

## 3.7 Linear inequalities and a first linear program

*Level: intermediate; the end is advanced.*

### Half-planes

The line $y = 2x - 1$ cuts the plane into two halves. Points above it satisfy $y > 2x - 1$; points below satisfy
$y < 2x - 1$. Each half is a **half-plane**. To graph an inequality such as $2x + 3y \leq 12$: draw the line
$2x + 3y = 12$ (solid, since "or equal" includes it; dashed for a strict inequality), then test one point not on the
line, usually the origin. Here $0 \leq 12$ is true, so the solution is the half-plane containing the origin.

A **system** of linear inequalities describes the points satisfying all of them at once: the overlap of several
half-planes, which is a **convex polygon** (possibly unbounded). "Convex" means that the segment between any two of
its points stays inside it, which follows because each half-plane has that property.

### A linear program

A workshop makes chairs and tables. A chair needs 2 hours of carpentry and 1 hour of finishing; a table needs 3
hours of carpentry and 3 of finishing. Each week there are 24 hours of carpentry and 18 of finishing available. A
chair earns 30 dollars profit and a table 50. How many of each should it make to earn the most?

Let $x$ be the number of chairs and $y$ of tables. The **constraints** are

$$2x + 3y \leq 24, \qquad x + 3y \leq 18, \qquad x \geq 0, \qquad y \geq 0,$$

and we want to maximise the **objective** $P = 30x + 50y$. The points satisfying all the constraints form the
**feasible region**, a quadrilateral with corners $(0, 0)$, $(12, 0)$, $(6, 4)$ and $(0, 6)$. The corner $(6, 4)$
is where the two lines cross: subtracting $x + 3y = 18$ from $2x + 3y = 24$ gives $x = 6$, then $y = 4$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 200" role="img" aria-label="The feasible region of the workshop problem: a quadrilateral with corners 0,0, 12,0, 6,4 and 0,6, bounded by the lines 2x plus 3y equals 24 and x plus 3y equals 18. A dashed profit line touches the region at the corner 6,4">
  <polygon points="50,170 350,170 200,90 50,50" fill="#7ccf9a" fill-opacity="0.45" stroke="none"/>
  <line x1="40" y1="170" x2="405" y2="170" stroke="currentColor" stroke-width="1.2"/>
  <line x1="50" y1="185" x2="50" y2="5" stroke="currentColor" stroke-width="1.2"/>
  <line x1="50" y1="10" x2="350" y2="170" stroke="#eea66f" stroke-width="2"/>
  <line x1="50" y1="50" x2="375" y2="136.7" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="50" y1="18" x2="366.7" y2="170" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <circle cx="50" cy="170" r="3.5" fill="currentColor"/>
  <circle cx="350" cy="170" r="3.5" fill="currentColor"/>
  <circle cx="200" cy="90" r="4.5" fill="currentColor"/>
  <circle cx="50" cy="50" r="3.5" fill="currentColor"/>
  <text x="208" y="84" font-size="12" fill="currentColor">(6, 4): P = 380</text>
  <text x="330" y="188" font-size="12" fill="currentColor">(12, 0)</text>
  <text x="56" y="46" font-size="12" fill="currentColor">(0, 6)</text>
  <text x="400" y="186" text-anchor="end" font-size="12" fill="currentColor">x (chairs)</text>
  <text x="56" y="14" font-size="12" fill="currentColor">y (tables)</text>
  <text x="110" y="130" font-size="12" fill="currentColor">feasible</text>
</svg>
</div>

Now evaluate the profit at each corner:

| Corner | $P = 30x + 50y$ |
|---|---:|
| $(0, 0)$ | 0 |
| $(12, 0)$ | 360 |
| $(6, 4)$ | 380 |
| $(0, 6)$ | 300 |

The best plan is 6 chairs and 4 tables, for 380 dollars a week. Notice the answer is not "make only the more
profitable item": a table earns more, but it uses up finishing time so fast that mixing wins.

**Why look only at corners?** For a fixed value of $P$, the points with $30x + 50y = P$ form a line of slope
$-\frac{3}{5}$; different values of $P$ give parallel lines, higher $P$ further from the origin. Sliding this line
outwards, the largest $P$ that still touches the feasible region is reached when the line is about to leave it,
and a straight line leaves a convex polygon at a corner (or along a whole edge, in which case the two corners at
the ends of that edge tie). The dashed line in the picture is $P = 380$, touching the region only at $(6, 4)$.

*Level: advanced.* Here is the core of a proof. On any segment between two points $U$ and $V$, the points are
$U + t(V - U)$ for $0 \leq t \leq 1$, and the objective there is $P(U) + t\,(P(V) - P(U))$, a linear function of
$t$. A linear function on an interval is largest at one of its ends. So for any point inside a segment, one of the
segment's ends does at least as well. Every point of a bounded convex polygon lies on a segment joining two points
of its boundary, and every boundary point lies on a segment (an edge) joining two corners; applying the fact twice,
some corner does at least as well as any point. So **if a linear objective has a maximum on a bounded convex
polygon, a corner attains it.** (For unbounded regions the maximum may not exist at all.)

In two variables you can list the corners by hand. Real linear programs have thousands of variables and the number
of corners is astronomically large, so one needs a cleverer search. The **simplex method**, devised by George
Dantzig in 1947, walks from corner to neighbouring corner, always improving, until no neighbour is better. The
Soviet mathematician Leonid Kantorovich had formulated such planning problems in 1939; he shared the 1975 Nobel
Prize in economics for this work with Tjalling Koopmans. Linear programming now schedules airline crews, routes
deliveries, plans power grids and blends fuels.

## A short history thread

Systems of linear equations are among the oldest algebra we have. The Chinese classic *The Nine Chapters on the
Mathematical Art*, compiled by around the first century CE from older material, has a chapter called *Fangcheng*
("rectangular arrays") that solves systems of up to five or six unknowns by arranging the coefficients in a grid
of counting rods and combining columns, which is in substance Gaussian elimination. In Europe, Leibniz wrote about
determinants in letters in the 1690s, Cramer published his rule in 1750, and Carl Friedrich Gauss used systematic
elimination in the early nineteenth century to fit the orbits of asteroids by least squares. The name "Gaussian
elimination" was attached to the method only in the twentieth century, as Joseph Grcar's historical study explains.

## Check yourself

??? question "1. Find the distance between $(-2, 5)$ and $(4, -3)$, and the midpoint."

    $\sqrt{6^2 + (-8)^2} = \sqrt{100} = 10$. Midpoint $\left(\frac{-2 + 4}{2}, \frac{5 - 3}{2}\right) = (1, 1)$.

??? question "2. Find the equation of the line through $(-1, 4)$ and $(3, -4)$."

    Slope $\frac{-4 - 4}{3 + 1} = -2$. Then $y - 4 = -2(x + 1)$, so $y = -2x + 2$. Check $(3, -4)$:
    $-6 + 2 = -4$. ✓

??? question "3. Find the lines through $(2, 5)$ parallel and perpendicular to $3x - 2y = 7$."

    The line is $y = \frac{3}{2}x - \frac{7}{2}$, slope $\frac{3}{2}$. Parallel: $y - 5 = \frac{3}{2}(x - 2)$, so
    $y = \frac{3}{2}x + 2$. Perpendicular, slope $-\frac{2}{3}$: $y - 5 = -\frac{2}{3}(x - 2)$, so
    $y = -\frac{2}{3}x + \frac{19}{3}$.

??? question "4. Show that $A(1, 1)$, $B(5, 3)$, $C(3, 7)$ form a right-angled triangle, in two ways."

    Slopes: $AB$ has $\frac{2}{4} = \frac{1}{2}$ and $BC$ has $\frac{4}{-2} = -2$; their product is $-1$, so the
    right angle is at $B$. Lengths: $AB^2 = 16 + 4 = 20$, $BC^2 = 4 + 16 = 20$, $AC^2 = 4 + 36 = 40 = 20 + 20$, so
    Pythagoras' converse agrees. (It is also isosceles.)

??? question "5. Solve $4x - 3y = 1$, $2x + 5y = 33$."

    Double the second: $4x + 10y = 66$. Subtract the first: $13y = 65$, $y = 5$. Then $4x = 16$, $x = 4$. Check:
    $8 + 25 = 33$. ✓

??? question "6. For which $k$ does the system $kx + 2y = 3$, $8x + ky = 6$ have no solution? Infinitely many?"

    $D = k^2 - 16$, which is 0 for $k = \pm 4$; for all other $k$ there is exactly one solution. For $k = 4$:
    $4x + 2y = 3$ and $8x + 4y = 6$, the second is twice the first: infinitely many. For $k = -4$: $-4x + 2y = 3$
    and $8x - 4y = 6$; multiplying the second by $-\frac{1}{2}$ gives $-4x + 2y = -3$, contradicting the first: no
    solution.

??? question "7. Solve $x + 2y - z = 3$, $2x - y + 3z = 6$, $3x + y + z = 8$."

    Subtract twice the first from the second: $-5y + 5z = 0$, so $y = z$. Subtract three times the first from the
    third: $-5y + 4z = -1$. With $y = z$: $-z = -1$, so $z = 1$, $y = 1$, and $x = 3 - 2 + 1 = 2$. Check:
    $4 - 1 + 3 = 6$ and $6 + 1 + 1 = 8$. ✓

??? question "8. Find the distance from $(2, 3)$ to the line $4x - 3y + 6 = 0$."

    $\frac{|8 - 9 + 6|}{\sqrt{16 + 9}} = \frac{5}{5} = 1$.

??? question "9. A boat travels 24 km downstream in 2 hours and back upstream in 3 hours. Find its speed in still water and the speed of the current."

    With boat speed $b$ and current $c$ (km/h): downstream $b + c = 12$, upstream $b - c = 8$. Adding,
    $2b = 20$, so $b = 10$ km/h and $c = 2$ km/h.

??? question "10. Maximise $3x + 2y$ subject to $x + y \leq 4$, $x + 3y \leq 6$, $x \geq 0$, $y \geq 0$."

    Corners: $(0, 0)$, $(4, 0)$, $(0, 2)$, and the crossing of $x + y = 4$ with $x + 3y = 6$: subtracting,
    $2y = 2$, so $(3, 1)$. Values: $0$, $12$, $4$, $11$. The maximum is 12 at $(4, 0)$.

??? question "11. Why can two linear equations in three unknowns never have exactly one solution?"

    Each is a plane. Two planes are parallel (no solution), the same (a whole plane of solutions), or meet in a
    line (infinitely many). Algebraically, elimination leaves at most two equations with three unknowns, so at
    least one unknown stays free as a parameter.

??? question "12. Prove that if $P$ and $Q$ are two different solutions of a linear system, then so is every point $P + t(Q - P)$."

    Take any one equation, $a_1x_1 + \cdots + a_nx_n = b$, and write $L(X)$ for its left side at a point $X$. $L$
    respects addition and scaling: $L(X + Y) = L(X) + L(Y)$ and $L(sX) = sL(X)$. So
    $L(P + t(Q - P)) = L(P) + t(L(Q) - L(P)) = b + t(b - b) = b$. This holds for every equation, so the point is a
    solution. With $P \neq Q$, different $t$ give different points: infinitely many solutions.

## What you learned

- Coordinates turn points into pairs of numbers; Pythagoras gives the distance formula.
- Slope is a rate of change, the same between any two points of a line; lines are the graphs of $Ax + By = C$.
- Parallel lines have equal slopes, and perpendicular lines have $m_1m_2 = -1$, both proved from the algebra.
- Systems can be solved by graphing, substitution or elimination; elimination's moves are reversible, so safe.
- A two-by-two system has exactly one solution when $ad - bc \neq 0$; otherwise none or infinitely many.
- Gaussian elimination solves systems of any size; geometrically, three planes meet in a point, a line, or nowhere.
- Linear inequalities cut out convex regions, and a linear objective is best at a corner of such a region.

**Next:** [Chapter 4](04-Polynomials-and-Factoring.md), from lines to polynomials: arithmetic, identities,
factoring and division.

## Further reading

- Gilbert Strang, *Introduction to Linear Algebra*, 5th edition, Wellesley-Cambridge Press, 2016. Where elimination
  and the determinant grow up.
- Vašek Chvátal, *Linear Programming*, W. H. Freeman, 1983. A clear first course, from corners to the simplex
  method.
- George B. Dantzig, *Linear Programming and Extensions*, Princeton University Press, 1963.
- Kangshen Shen, John N. Crossley and Anthony W.-C. Lun, *The Nine Chapters on the Mathematical Art: Companion and
  Commentary*, Oxford University Press, 1999.
- Joseph F. Grcar, "Mathematicians of Gaussian Elimination", *Notices of the American Mathematical Society* 58(6),
  2011.
- On this site: the Topics lessons [Linear and nonlinear relations](../../topics/algebra/level-6/06-linear-nonlinear.md)
  and [Lines and planes in space](../../topics/algebra/level-8/08-lines-planes-space.md); and the U of T guides
  [MAT240H1 Unit 7: Systems and Elementary Operations](../../uoft/MAT240H1/unit07.md) and
  [MAT240H1 Unit 8: Determinants](../../uoft/MAT240H1/unit08.md).
