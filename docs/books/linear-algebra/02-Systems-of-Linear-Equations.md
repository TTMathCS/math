# 2. Systems of linear equations

*Three bundles of good grain, two of ordinary and one of poor yield 39 measures; two good, three ordinary and one poor
yield 34; one good, two ordinary and three poor yield 26. How much does one bundle of each kind yield? This problem is
about two thousand years old, and the method its authors used to solve it is, step for step, the method every computer
uses today to solve systems with millions of unknowns. In this chapter you will look at a linear system in three ways
(as lines or planes meeting, as a combination of columns, and as a table of numbers), learn Gaussian elimination
properly, bring any system to a standard form from which the answer can be read off, and describe every solution of a
system that has infinitely many.*

!!! abstract "In this chapter"

    **You will learn:**

    - what a linear equation and a linear system are, and the three pictures of a system: rows, columns, and the
      augmented matrix
    - why a linear system has no solution, exactly one, or infinitely many, and never, say, exactly two
    - Gaussian elimination with back substitution, step by step, including row swaps
    - row echelon form and reduced row echelon form, pivots, and why the reduced form is unique
    - free variables, and how to write the whole solution set as one particular solution plus the solutions of the
      homogeneous system
    - where the method came from: the *Nine Chapters*, Gauss, and Jordan

    **You need:** [Chapter 1](01-Vectors.md) (vectors, linear combinations, lines and planes). For a gentler version
    first, see the Topics lessons [Solving systems by graphing](../../topics/algebra/level-6/04-systems-graphing.md) and
    [Substitution and elimination](../../topics/algebra/level-6/05-substitution-elimination.md), and the Algebra book's
    [Chapter 3, Lines and linear systems](../algebra/03-Lines-and-Linear-Systems.md).

    **Levels:** 2.1 and 2.2 are beginner; 2.3 and 2.4 are intermediate, with the uniqueness proof in 2.3 advanced;
    2.5 is for everyone.

## 2.1 Lines meeting: three pictures

Start with the smallest interesting case: two equations, two unknowns.

$$
\begin{aligned}
x + 2y &= 5 \\
3x - y &= 1
\end{aligned}
$$

An equation is **linear** if each unknown appears only multiplied by a number and the products are added: no $x^2$,
no $xy$, no $\sin x$, no $1/x$. In general a linear equation in unknowns $x_1, \ldots, x_n$ reads
$a_1 x_1 + a_2 x_2 + \cdots + a_n x_n = b$, with numbers $a_1, \ldots, a_n$ (the **coefficients**) and $b$ (the
**right-hand side**). A **linear system** is a finite collection of linear equations in the same unknowns, and a
**solution** is a choice of values for all unknowns that makes every equation true at once.

For the system above, substitution works: the second equation gives $y = 3x - 1$, so the first becomes
$x + 6x - 2 = 5$, $x = 1$ and $y = 2$. **Check:** $1 + 4 = 5$ and $3 - 2 = 1$. But substitution gets messy fast with
more unknowns. Before learning the method that scales, look at the same system in three ways.

**Picture 1: rows.** Each equation is a line in the plane. The first, $x + 2y = 5$, passes through $(5, 0)$ and
$(1, 2)$; the second, $3x - y = 1$, passes through $(0, -1)$ and $(1, 2)$. A solution is a point on both lines: the
point where they cross, $(1, 2)$.

Two lines in a plane can meet in three ways, and the row picture shows all three at a glance.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 600 215" role="img" aria-label="Three panels. Left: two lines crossing at one point, marked, labelled one solution. Middle: two parallel lines, labelled no solution. Right: two equations giving the same line, drawn solid and dashed on top of each other, labelled infinitely many solutions.">
  <rect x="10" y="10" width="190" height="170" fill="none" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.4"/>
  <rect x="205" y="10" width="190" height="170" fill="none" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.4"/>
  <rect x="400" y="10" width="190" height="170" fill="none" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.4"/>
  <line x1="20" y1="160" x2="190" y2="30" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="20" y1="40" x2="190" y2="150" stroke="#7ccf9a" stroke-width="2.5"/>
  <circle cx="105" cy="95" r="5" fill="currentColor"/>
  <line x1="215" y1="150" x2="385" y2="60" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="215" y1="110" x2="385" y2="20" stroke="#7ccf9a" stroke-width="2.5"/>
  <line x1="410" y1="150" x2="580" y2="40" stroke="#eea66f" stroke-width="5"/>
  <line x1="410" y1="150" x2="580" y2="40" stroke="#7ccf9a" stroke-width="2" stroke-dasharray="7 6"/>
  <text x="105" y="202" text-anchor="middle" font-size="14" fill="currentColor">one solution</text>
  <text x="300" y="202" text-anchor="middle" font-size="14" fill="currentColor">no solution</text>
  <text x="495" y="202" text-anchor="middle" font-size="14" fill="currentColor">infinitely many</text>
</svg>
</div>

- The lines cross: exactly **one solution**.
- The lines are parallel and different, as for $x + y = 2$ and $x + y = 3$: **no solution**. (A number cannot be 2
  and 3 at once.) Such a system is called **inconsistent**.
- The two equations describe the same line, as for $x + y = 2$ and $2x + 2y = 4$: every point on the line is a
  solution, so there are **infinitely many**.

With three unknowns, each equation is a plane in space (Section 1.4). Three planes usually meet in a single point, but
they can also share a whole line (like three pages of an open book meeting along the spine), or have no common point at
all (three walls of a triangular tent with no floor, or two parallel floors). In $n$ unknowns each equation is a
hyperplane, and the row picture is still "where do all the hyperplanes meet", even though we can no longer draw it.

**Picture 2: columns.** Read the same system down the columns instead of along the rows:

$$
x \begin{pmatrix} 1 \\ 3 \end{pmatrix} + y \begin{pmatrix} 2 \\ -1 \end{pmatrix} = \begin{pmatrix} 5 \\ 1 \end{pmatrix}.
$$

Now the question is: which combination of the column vectors $\mathbf{a}_1 = (1, 3)$ and $\mathbf{a}_2 = (2, -1)$
gives the vector $\mathbf{b} = (5, 1)$? This is exactly the question of Example 1.3. The answer $x = 1$, $y = 2$ says:
one copy of $\mathbf{a}_1$ and two copies of $\mathbf{a}_2$, tip to tail.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 220" role="img" aria-label="Column picture: from the origin, the orange column a1 = (1, 3) goes up steeply; then two dashed green copies of a2 = (2, -1) lead down to the right. The dark arrow from the origin to the end is b = (5, 1). The solid green arrow from the origin is a2 itself.">
  <line x1="40" y1="150" x2="76.8" y2="39.5" stroke="#eea66f" stroke-width="2.5"/>
  <polygon points="80,30 81.1,40.9 72.6,38.1" fill="#eea66f"/>
  <line x1="40" y1="150" x2="111.1" y2="185.5" stroke="#7ccf9a" stroke-width="2.5"/>
  <polygon points="120,190 109,189.6 113.1,181.5" fill="#7ccf9a"/>
  <line x1="80" y1="30" x2="151.1" y2="65.5" stroke="#7ccf9a" stroke-width="1.5" stroke-dasharray="5 4"/>
  <polygon points="160,70 149,69.6 153.1,61.5" fill="#7ccf9a"/>
  <line x1="160" y1="70" x2="231.1" y2="105.5" stroke="#7ccf9a" stroke-width="1.5" stroke-dasharray="5 4"/>
  <polygon points="240,110 229,109.6 233.1,101.5" fill="#7ccf9a"/>
  <line x1="40" y1="150" x2="230.2" y2="112" stroke="currentColor" stroke-width="2.5"/>
  <polygon points="240,110 231.1,116.4 229.3,107.5" fill="currentColor"/>
  <circle cx="40" cy="150" r="3.5" fill="currentColor"/>
  <text x="44" y="80" text-anchor="middle" font-size="15" font-style="italic" fill="currentColor">a₁</text>
  <text x="70" y="192" text-anchor="middle" font-size="15" font-style="italic" fill="currentColor">a₂</text>
  <text x="205" y="68" text-anchor="middle" font-size="15" font-style="italic" fill="currentColor">2a₂</text>
  <text x="150" y="150" text-anchor="middle" font-size="15" font-style="italic" fill="currentColor">b</text>
</svg>
</div>

The column picture changes the question in a way that will pay off for the rest of the book. "Does the system have a
solution?" becomes "is $\mathbf{b}$ a linear combination of the columns?" When the two columns point in different
directions, their combinations fill the whole plane and every $\mathbf{b}$ can be reached. When the columns are
parallel, as in $x + y = 2$, $x + y = 3$ with columns $(1, 1)$ and $(1, 1)$, their combinations only fill a line, and a
right-hand side off that line, like $(2, 3)$, can never be reached. The set of all combinations of the columns will be
called the **column space** (Chapter 7), and the whole theory of linear systems is the study of it.

**Picture 3: the augmented matrix.** The unknowns' names carry no information; only the numbers matter. So we write the
coefficients in a rectangular table, a **matrix**, and add the right-hand sides as a last column after a bar:

$$
\left(\begin{array}{cc|c} 1 & 2 & 5 \\ 3 & -1 & 1 \end{array}\right).
$$

This is the **augmented matrix** of the system. Its rows are the equations; its columns (before the bar) are the
column vectors of Picture 2. A system with $m$ equations and $n$ unknowns gives an $m \times n$ coefficient matrix
($m$ rows, $n$ columns), or $m \times (n + 1)$ augmented. Chapter 3 will treat matrices as objects in their own right;
here they are bookkeeping.

**Why never exactly two solutions?** The pictures suggest it; here is the proof, and it works in any number of
unknowns.

**Theorem 2.1.** A linear system has either no solution, exactly one, or infinitely many.

*Proof.* Suppose the system has two different solutions, $\mathbf{x}$ and $\mathbf{y}$ (as vectors in
$\mathbb{R}^n$). Take any number $t$ and look at $\mathbf{z} = (1 - t)\mathbf{x} + t\mathbf{y}$, a point on the line
through $\mathbf{x}$ and $\mathbf{y}$. For one equation $a_1 x_1 + \cdots + a_n x_n = b$, write the left side as
$\mathbf{a} \cdot \mathbf{x}$. Then

$$
\mathbf{a} \cdot \mathbf{z} = (1 - t)\,\mathbf{a} \cdot \mathbf{x} + t\,\mathbf{a} \cdot \mathbf{y} = (1 - t)\,b + t\,b = b .
$$

So $\mathbf{z}$ satisfies every equation. Different values of $t$ give different points $\mathbf{z}$ (because
$\mathbf{x} \ne \mathbf{y}$), so there are infinitely many solutions. $\square$

The proof shows more: whenever two points are solutions, the whole line through them is made of solutions. Non-linear
equations behave differently: $x^2 = 1$ has exactly two solutions.

## 2.2 Gaussian elimination step by step

Substitution solves one equation for one unknown and plugs it in everywhere. **Elimination** is tidier: it combines
whole equations so that unknowns disappear, in a fixed order, until the system is so simple it can be solved from the
bottom up.

**The three allowed moves.** These are the **elementary row operations**:

1. **Replace** a row by itself plus a multiple of another row.
2. **Swap** two rows.
3. **Scale** a row by a nonzero number.

**Theorem 2.2.** Elementary row operations do not change the set of solutions.

*Proof.* Any solution of the old system satisfies the new one: if two equations hold, so does "first plus $c$ times
second"; swapping or scaling equations obviously keeps them true. And every move can be undone by a move of the same
kind (subtract $c$ times the row back; swap again; scale by $1/c$, which is why the scale must be nonzero). So any
solution of the new system also satisfies the old one. The two solution sets are equal. $\square$

**Example 2.1.** Solve

$$
\begin{aligned}
x + y + z &= 6 \\
2x + y - z &= 1 \\
x - y + 2z &= 5
\end{aligned}
\qquad\qquad
\left(\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 2 & 1 & -1 & 1 \\ 1 & -1 & 2 & 5 \end{array}\right).
$$

*Step 1: clear the first column below the top.* The top-left entry, 1, is the first **pivot**: the entry we use to
eliminate everything below it. Subtract 2 times row 1 from row 2, and 1 times row 1 from row 3. The numbers 2 and 1 are
the **multipliers**: entry to be removed divided by pivot.

$$
\left(\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & -1 & -3 & -11 \\ 0 & -2 & 1 & -1 \end{array}\right)
$$

(Row 2: $(2, 1, -1, 1) - 2(1, 1, 1, 6) = (0, -1, -3, -11)$. Row 3: $(1, -1, 2, 5) - (1, 1, 1, 6) = (0, -2, 1, -1)$.)
The unknown $x$ is gone from the last two equations, which now form a smaller system in $y$ and $z$.

*Step 2: clear the second column below row 2.* The pivot is $-1$. The multiplier for row 3 is $(-2)/(-1) = 2$:
subtract 2 times row 2 from row 3.

$$
\left(\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & -1 & -3 & -11 \\ 0 & 0 & 7 & 21 \end{array}\right)
$$

(Row 3: $(0, -2, 1, -1) - 2(0, -1, -3, -11) = (0, 0, 7, 21)$.) The matrix is now **upper triangular**: zeros below the
diagonal. The pivots are $1, -1, 7$.

*Step 3: back substitution.* Read the equations from the bottom up. The last says $7z = 21$, so $z = 3$. The middle
says $-y - 3z = -11$, so $-y = -11 + 9 = -2$ and $y = 2$. The top says $x + y + z = 6$, so $x = 6 - 2 - 3 = 1$.

**Check** in the original equations: $1 + 2 + 3 = 6$, $2 + 2 - 3 = 1$, $1 - 2 + 6 = 5$. The three planes meet at the
single point $(1, 2, 3)$.

**The pattern.** For a square system with $n$ unknowns, elimination goes column by column. In column $k$, use the
pivot in row $k$ to clear every entry below it. After $n - 1$ columns the matrix is upper triangular, and back
substitution finishes the job. Nothing else is needed, as long as every pivot is nonzero.

**When a pivot is zero.** A zero pivot cannot be used to clear the entries below it (you cannot divide by 0). If some
entry lower in the same column is nonzero, swap that row up.

**Example 2.2.** Solve $x + y + z = 3$, $2x + 2y + 3z = 7$, $x + 2y + 2z = 5$. After clearing column 1:

$$
\left(\begin{array}{ccc|c} 1 & 1 & 1 & 3 \\ 2 & 2 & 3 & 7 \\ 1 & 2 & 2 & 5 \end{array}\right)
\longrightarrow
\left(\begin{array}{ccc|c} 1 & 1 & 1 & 3 \\ 0 & 0 & 1 & 1 \\ 0 & 1 & 1 & 2 \end{array}\right).
$$

The second pivot position holds 0, but the entry below it is 1. Swap rows 2 and 3:

$$
\left(\begin{array}{ccc|c} 1 & 1 & 1 & 3 \\ 0 & 1 & 1 & 2 \\ 0 & 0 & 1 & 1 \end{array}\right).
$$

Already triangular. Back substitution: $z = 1$, $y = 2 - 1 = 1$, $x = 3 - 1 - 1 = 1$. **Check:** $3 = 3$,
$2 + 2 + 3 = 7$, $1 + 2 + 2 = 5$.

**When elimination breaks down.** If a column has zeros in the pivot position *and* everywhere below, no swap helps.
Then that column has no pivot, and we move on to the next column in the same row. This is not a failure of the method:
it is the system telling us it does not have exactly one solution.

**Example 2.3.** $x + y + z = 1$, $x + 2y + 3z = 2$, $2x + 3y + 4z = 4$.

$$
\left(\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 1 & 2 & 3 & 2 \\ 2 & 3 & 4 & 4 \end{array}\right)
\longrightarrow
\left(\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 1 \\ 0 & 1 & 2 & 2 \end{array}\right)
\longrightarrow
\left(\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 1 \\ 0 & 0 & 0 & 1 \end{array}\right).
$$

The last row says $0x + 0y + 0z = 1$, that is, $0 = 1$. No numbers make this true, so the system has **no solution**.
In the column picture: the third column is $2 \times$(second) $-$ (first), so the columns only fill a plane in space,
and $\mathbf{b} = (1, 2, 4)$ is off that plane. If the right side had been $(1, 2, 3)$ instead, the last row would have
read $0 = 0$, and we would have had infinitely many solutions; Section 2.4 shows how to describe them.

**How much work?** For $n$ equations in $n$ unknowns, clearing column $k$ touches $n - k$ rows, each with about
$n - k$ entries, so the elimination costs about $(n-1)^2 + (n-2)^2 + \cdots + 1^2 \approx n^3/3$ multiplications (and
as many subtractions); back substitution costs only about $n^2/2$. Doubling the number of unknowns makes elimination
about 8 times slower. A system of 1000 equations needs roughly $3 \times 10^8$ multiplications, a fraction of a second
on a laptop. For big systems with special structure, Chapter 18 has faster methods, and it also explains why real
programs swap rows even when the pivot is not zero: dividing by a tiny pivot magnifies rounding errors.

## 2.3 Row echelon form and reduced row echelon form

Elimination for square systems with nonzero pivots ends in a triangle. For general systems, with more equations than
unknowns or fewer, we need a name for the shape elimination produces.

**Definition.** A matrix is in **row echelon form** (REF) if

1. all rows consisting only of zeros are at the bottom, and
2. in each nonzero row, the first nonzero entry (its **leading entry**, or **pivot**) is strictly to the right of the
   leading entry of the row above.

The word *echelon* is French for a rung of a ladder; the pivots go down like a staircase. A matrix is in **reduced row
echelon form** (RREF) if, in addition,

3. every pivot is 1, and
4. every pivot is the only nonzero entry in its column.

Columns that contain a pivot are **pivot columns**; the others are **free columns**.

**Example 2.4.** Here are matrices in REF (left) and RREF (right), with pivots in bold:

$$
\begin{pmatrix} \mathbf{2} & 1 & 4 & 3 \\ 0 & 0 & \mathbf{-1} & 5 \\ 0 & 0 & 0 & \mathbf{7} \\ 0 & 0 & 0 & 0 \end{pmatrix},
\qquad
\begin{pmatrix} \mathbf{1} & 3 & 0 & 0 & 2 \\ 0 & 0 & \mathbf{1} & 0 & -1 \\ 0 & 0 & 0 & \mathbf{1} & 4 \end{pmatrix}.
$$

In the first, the pivot columns are 1, 3 and 4. In the second they are 1, 3 and 4 again, and columns 2 and 5 are free.

**Gauss-Jordan elimination.** To reach RREF, do ordinary elimination to REF (the **forward** phase), then work from
the bottom pivot upwards: scale each pivot row so its pivot is 1, and subtract multiples of it from the rows above to
clear the column above the pivot (the **backward** phase). This backward phase is back substitution done on the matrix
instead of on the equations.

**Example 2.5.** Continue Example 2.1 from its triangular form.

$$
\left(\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & -1 & -3 & -11 \\ 0 & 0 & 7 & 21 \end{array}\right)
\xrightarrow{\;R_3/7,\; -R_2\;}
\left(\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & 1 & 3 & 11 \\ 0 & 0 & 1 & 3 \end{array}\right)
\xrightarrow{\;R_2 - 3R_3,\; R_1 - R_3\;}
\left(\begin{array}{ccc|c} 1 & 1 & 0 & 3 \\ 0 & 1 & 0 & 2 \\ 0 & 0 & 1 & 3 \end{array}\right)
\xrightarrow{\;R_1 - R_2\;}
\left(\begin{array}{ccc|c} 1 & 0 & 0 & 1 \\ 0 & 1 & 0 & 2 \\ 0 & 0 & 1 & 3 \end{array}\right).
$$

The RREF of a system with exactly one solution is the answer itself: $x = 1$, $y = 2$, $z = 3$.

**What RREF tells you.** Once the augmented matrix is in RREF (or even just REF), three questions are answered by
looking.

- *Is the system consistent?* It is inconsistent exactly when some row reads $(0\; 0\; \cdots\; 0 \mid c)$ with
  $c \ne 0$, that is, when the last column (the right-hand side) is a pivot column. Otherwise there is at least one
  solution.
- *If consistent, is the solution unique?* Yes exactly when every column of the coefficient part is a pivot column,
  so there are no free variables.
- *If not unique, how many parameters does it take to describe all solutions?* One for each free column (Section
  2.4).

**Rank.** The number of pivots is called the **rank** of the matrix. A system with $n$ unknowns and a consistent
augmented matrix has exactly one solution when the rank is $n$, and a family with $n - \text{rank}$ free parameters
otherwise. The rank will turn out (Chapter 7) to be one of the deepest numbers attached to a matrix. For now, notice a
limit: there is at most one pivot per row and at most one per column, so the rank is at most the smaller of $m$ and
$n$.

**REF is not unique; RREF is.** Different choices of row operations can lead to different echelon forms. For instance,
$\begin{pmatrix} 2 & 4 \\ 0 & 3 \end{pmatrix}$ and $\begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$ are both echelon
forms of the same matrix. But the pivot positions are always the same, and the fully reduced form does not depend on
the choices at all.

**Theorem 2.3 (uniqueness of RREF).** Every matrix can be brought to reduced row echelon form by elementary row
operations, and the result does not depend on which operations are used.

*Level: advanced.* Existence is the algorithm above. For uniqueness, here is a short proof by induction on the number
of columns, following an argument published by Thomas Yuster in 1984. It uses one fact: row operations do not change
the solutions of the homogeneous system $A\mathbf{x} = \mathbf{0}$ (Theorem 2.2), so if $B$ and $C$ are two RREFs of
$A$, then $B\mathbf{x} = \mathbf{0}$ and $C\mathbf{x} = \mathbf{0}$ have exactly the same solutions.

*Proof.* With one column, an RREF is either all zeros or $(1, 0, \ldots, 0)$; the first happens exactly when every
$x_1$ solves $A\mathbf{x} = \mathbf{0}$, so the two cases cannot both occur for the same $A$. Now suppose the theorem
holds for matrices with $n - 1$ columns, and let $B$, $C$ be two RREFs of an $m \times n$ matrix $A$. Delete the last
column of everything: the same row operations that turned $A$ into $B$ turn $A'$ (the first $n - 1$ columns of $A$)
into $B'$, which is still in RREF, and likewise for $C'$. By induction $B' = C'$. So if $B \ne C$, they differ only in
the last column, say in row $i$.

Take any solution $\mathbf{x}$ of $B\mathbf{x} = \mathbf{0}$; it also solves $C\mathbf{x} = \mathbf{0}$, so
$(B - C)\mathbf{x} = \mathbf{0}$. The matrix $B - C$ is zero except in its last column, so row $i$ of this equation
says $(b_{in} - c_{in})\,x_n = 0$, hence $x_n = 0$. Thus every solution has $x_n = 0$, which means $x_n$ is not a free
variable: the last column is a pivot column in $B$, and by the same argument in $C$. Since $B' = C'$, both have the same
number $r$ of nonzero rows in the first $n - 1$ columns, so in both the last pivot sits in row $r + 1$, and in RREF that
column is all zeros except a 1 in row $r + 1$. So the last columns agree after all, a contradiction. $\square$

Because of Theorem 2.3 we can speak of *the* RREF of a matrix, and of its rank, without worrying about how we computed
them.

**Try it in Python.** Exact fractions avoid rounding errors entirely; this is fine for small examples (Chapter 18 is
about what real numerical code does instead).

```python
from fractions import Fraction

def rref(rows):
    A = [[Fraction(x) for x in row] for row in rows]   # exact arithmetic
    m, n = len(A), len(A[0])
    pivots, r = [], 0
    for c in range(n - 1):                 # last column is the right side
        p = next((i for i in range(r, m) if A[i][c] != 0), None)
        if p is None:
            continue                       # no pivot here: a free column
        A[r], A[p] = A[p], A[r]            # swap a nonzero entry up
        A[r] = [x / A[r][c] for x in A[r]] # scale the pivot to 1
        for i in range(m):                 # clear the rest of the column
            if i != r and A[i][c] != 0:
                f = A[i][c]
                A[i] = [a - f * b for a, b in zip(A[i], A[r])]
        pivots.append(c)
        r += 1
    return A, pivots

A, piv = rref([[1, 2, 1, 3, 3],
               [2, 4, 1, 4, 4],
               [3, 6, 2, 7, 7]])
for row in A:
    print([str(x) for x in row])
print("pivot columns:", piv)
# ['1', '2', '0', '1', '1']
# ['0', '0', '1', '2', '2']
# ['0', '0', '0', '0', '0']
# pivot columns: [0, 2]
```

(Python counts columns from 0, so "pivot columns 0 and 2" are the first and third.) This is the system of the next
section.

## 2.4 Free variables and the solution set

What does "infinitely many solutions" look like, and how do we write them all down?

**Example 2.6.** Solve

$$
\begin{aligned}
x_1 + 2x_2 + x_3 + 3x_4 &= 3 \\
2x_1 + 4x_2 + x_3 + 4x_4 &= 4 \\
3x_1 + 6x_2 + 2x_3 + 7x_4 &= 7
\end{aligned}
$$

*Forward phase.* $R_2 - 2R_1$ gives $(0, 0, -1, -2 \mid -2)$ and $R_3 - 3R_1$ gives $(0, 0, -1, -2 \mid -2)$. Column 2
now has zeros below the top, so it has no pivot; the second pivot is the $-1$ in column 3. Then $R_3 - R_2$ gives a row
of zeros.

*Backward phase.* Scale row 2 by $-1$ to get $(0, 0, 1, 2 \mid 2)$, then subtract it from row 1:

$$
\left(\begin{array}{cccc|c} 1 & 2 & 0 & 1 & 1 \\ 0 & 0 & 1 & 2 & 2 \\ 0 & 0 & 0 & 0 & 0 \end{array}\right),
$$

matching the Python output. The zero row says $0 = 0$: no contradiction, so the system is consistent. (It also says
that one of the three equations was redundant; indeed the third is the sum of the first two.)

*Read off the solutions.* The pivot columns are 1 and 3, so $x_1$ and $x_3$ are **pivot variables** (or **basic
variables**); $x_2$ and $x_4$ are **free variables**. Free means exactly that: choose any values, $x_2 = s$ and
$x_4 = t$, and the RREF rows then determine the pivot variables:

$$
x_1 = 1 - 2s - t, \qquad x_3 = 2 - 2t .
$$

Written as vectors, all the solutions are

$$
\mathbf{x} = \begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{pmatrix}
= \begin{pmatrix} 1 \\ 0 \\ 2 \\ 0 \end{pmatrix}
+ s \begin{pmatrix} -2 \\ 1 \\ 0 \\ 0 \end{pmatrix}
+ t \begin{pmatrix} -1 \\ 0 \\ -2 \\ 1 \end{pmatrix},
\qquad s, t \in \mathbb{R}.
$$

This is the **parametric vector form** of the solution set: a flat two-dimensional "plane" inside $\mathbb{R}^4$
through the point $(1, 0, 2, 0)$, with two direction vectors, just like the planes of Section 1.4.

**Check:** $(1, 0, 2, 0)$ gives $1 + 2 = 3$, $2 + 2 = 4$, $3 + 4 = 7$. The vector $(-2, 1, 0, 0)$ gives
$-2 + 2 = 0$, $-4 + 4 = 0$, $-6 + 6 = 0$ in the three left sides, and $(-1, 0, -2, 1)$ gives $-1 - 2 + 3 = 0$,
$-2 - 2 + 4 = 0$, $-3 - 4 + 7 = 0$. So adding any multiples of them to a solution never changes the left sides.

That check is not a coincidence. It is a general structure.

**Homogeneous systems.** A system whose right-hand sides are all 0 is called **homogeneous**. A homogeneous system
always has at least one solution, $\mathbf{x} = \mathbf{0}$ (the **trivial solution**). The question is whether it
has others.

**Theorem 2.4 (more unknowns than equations).** A homogeneous system with more unknowns than equations has a nonzero
solution.

*Proof.* Its RREF has at most one pivot per row, so at most $m$ pivots, where $m$ is the number of equations. There are
$n > m$ columns, so at least $n - m \ge 1$ of them are free. Set one free variable to 1 and the others to 0; the pivot
variables are then determined, and the result is a solution that is not zero (its chosen free variable is 1). $\square$

This little theorem is the engine of Chapter 5: it is what proves that a space cannot have two bases of different
sizes.

**Theorem 2.5 (structure of the solution set).** Suppose $\mathbf{x}_p$ is one solution of a linear system (a
**particular solution**). Then the solutions are exactly the vectors $\mathbf{x}_p + \mathbf{x}_h$, where
$\mathbf{x}_h$ runs over all solutions of the homogeneous system with the same coefficients.

*Proof.* For each equation write its left side as $\mathbf{a} \cdot \mathbf{x}$. If $\mathbf{x}_h$ solves the
homogeneous system, then $\mathbf{a} \cdot (\mathbf{x}_p + \mathbf{x}_h) = b + 0 = b$ for every equation, so
$\mathbf{x}_p + \mathbf{x}_h$ is a solution. Conversely, if $\mathbf{x}$ is any solution, then
$\mathbf{a} \cdot (\mathbf{x} - \mathbf{x}_p) = b - b = 0$ for every equation, so $\mathbf{x}_h = \mathbf{x} - \mathbf{x}_p$
solves the homogeneous system and $\mathbf{x} = \mathbf{x}_p + \mathbf{x}_h$. $\square$

In Example 2.6, $\mathbf{x}_p = (1, 0, 2, 0)$, and the homogeneous solutions are $s(-2, 1, 0, 0) + t(-1, 0, -2, 1)$.
In pictures: the homogeneous solutions form a flat set through the origin, and the solutions of the real system are
that same flat set shifted so it passes through $\mathbf{x}_p$. Parallel lines in the plane, $x + y = 0$ and
$x + y = 3$, are the simplest example. The flat set through the origin will be called the **null space** in Chapter 4,
and Theorem 2.5 is the first appearance of a pattern you will meet again in differential equations: general solution
equals particular solution plus homogeneous solution.

**Counting.** Putting everything together, for a system of $m$ equations in $n$ unknowns whose coefficient matrix has
rank $r$:

- if the right-hand side column is a pivot column, there is no solution;
- otherwise the solutions form a flat set described by $n - r$ free parameters: one point if $r = n$, a line if
  $r = n - 1$, a plane if $r = n - 2$, and so on.

For Example 2.6, $n = 4$ and $r = 2$, so there are 2 parameters. Chapter 6 turns this count into the rank-nullity
theorem, one of the central facts of the subject.

**Example 2.7 (fitting a curve).** Find the parabola $p(x) = a + bx + cx^2$ through $(1, 2)$, $(2, 3)$ and $(3, 6)$.
The unknowns are the coefficients:

$$
\begin{aligned}
a + b + c &= 2 \\
a + 2b + 4c &= 3 \\
a + 3b + 9c &= 6
\end{aligned}
$$

Elimination: $R_2 - R_1$ gives $b + 3c = 1$; $R_3 - R_1$ gives $2b + 8c = 4$; subtracting twice the first of these from
the second gives $2c = 2$. So $c = 1$, $b = 1 - 3 = -2$, $a = 2 + 2 - 1 = 3$, and $p(x) = 3 - 2x + x^2$.
**Check:** $p(1) = 2$, $p(2) = 3 - 4 + 4 = 3$, $p(3) = 3 - 6 + 9 = 6$. The equation is linear in the *coefficients*
even though the parabola is curved; this is why "linear" algebra fits curves of every kind. With more points than
coefficients the system usually has no solution, and Chapter 12 finds the best compromise (least squares).

## 2.5 A short history

**China.** The oldest surviving description of the method is in the *Nine Chapters on the Mathematical Art*
(*Jiuzhang suanshu*), a Chinese collection of 246 problems with solutions that reached its final form around the first
century of the common era, using older material. Its eighth chapter, *Fangcheng* (usually translated "rectangular
arrays"), solves linear systems of up to six unknowns. The coefficients were laid out with counting rods on a counting
board, each equation as a column of numbers rather than a row, and columns were combined by multiplying and subtracting
until a triangular pattern remained, exactly the forward phase of Section 2.2. The method needed negative numbers in the
middle of a calculation, and the chapter gives rules for adding and subtracting them, among the earliest known anywhere.
The grain problem at the top of this chapter is the first problem of the *Fangcheng* chapter; its answer is
$9\tfrac14$, $4\tfrac14$ and $2\tfrac34$ measures (Exercise 7). The mathematician Liu Hui wrote a celebrated commentary
on the *Nine Chapters* in 263, explaining why the procedures work.

**Europe.** Elimination of unknowns was rediscovered in Europe and taught in algebra textbooks from the late
seventeenth century; Isaac Newton's lecture notes on algebra, published as *Arithmetica Universalis* (1707), gave rules
for it that schoolbooks copied for a long time. Carl Friedrich Gauss used elimination systematically to solve the
"normal equations" of his method of least squares (Chapter 12), notably in his work on the orbit of the asteroid
Pallas, published in 1810, and introduced a compact notation for it that astronomers and surveyors adopted. The name
"Gaussian elimination" only became standard in the twentieth century; the historian Joseph Grcar has traced how it
happened. The backward phase that produces the reduced form is named after the German geodesist Wilhelm Jordan, who
described it in the 1888 edition of his handbook of surveying. (He is not the French mathematician Camille Jordan, who
gave his name to the Jordan normal form of Chapter 16.)

**Today.** Elimination is the most used algorithm in scientific computing. Weather forecasts, the stresses in a bridge,
the circuits in a chip and the trajectory corrections of a spacecraft all lead to large linear systems, solved by
elimination or by the iterative relatives of Chapter 18.

## Check yourself

??? question "1. Solve $2x + 3y = 7$, $x - y = 1$ by elimination, and draw the row picture."

    Swap so that the 1 is on top: $x - y = 1$, $2x + 3y = 7$. Subtract twice the first from the second: $5y = 5$, so
    $y = 1$ and $x = 2$. Check: $4 + 3 = 7$ and $2 - 1 = 1$. In the row picture the two lines cross at $(2, 1)$.

??? question "2. How many solutions does $2x - 4y = 6$, $-x + 2y = -3$ have? What if the second equation is $-x + 2y = 3$?"

    The first equation is $-2$ times the second, so both describe the same line: infinitely many solutions, all
    $(3 + 2t, t)$. With $-x + 2y = 3$, multiplying by $-2$ gives $2x - 4y = -6$, which contradicts $2x - 4y = 6$:
    parallel lines, no solution. In the matrix: $R_2 + \tfrac12 R_1$ gives the row $(0\;\; 0 \mid 6)$, that is, $0 = 6$.

??? question "3. Solve $x + 2y + z = 3$, $2x + y - z = 0$, $x - y + 2z = 9$."

    $R_2 - 2R_1$: $(0, -3, -3 \mid -6)$. $R_3 - R_1$: $(0, -3, 1 \mid 6)$. Then $R_3 - R_2$: $(0, 0, 4 \mid 12)$. Back
    substitution: $z = 3$; $-3y - 9 = -6$ gives $y = -1$; $x = 3 - 2(-1) - 3 = 2$. Check: $2 - 2 + 3 = 3$,
    $4 - 1 - 3 = 0$, $2 + 1 + 6 = 9$.

??? question "4. Find the RREF of the matrix with rows $(1, 2, -1, 3)$, $(2, 4, 1, 0)$, $(1, 2, 2, -3)$, its pivot columns and its rank."

    $R_2 - 2R_1 = (0, 0, 3, -6)$ and $R_3 - R_1 = (0, 0, 3, -6)$; then $R_3 - R_2 = 0$. Scale row 2 by $\tfrac13$:
    $(0, 0, 1, -2)$. Add it to row 1: $(1, 2, 0, 1)$. The RREF has rows $(1, 2, 0, 1)$, $(0, 0, 1, -2)$, $(0, 0, 0, 0)$.
    The pivot columns are 1 and 3, so the rank is 2.

??? question "5. Write all solutions of $x_1 + 2x_2 - x_3 = 0$, $2x_1 + 4x_2 - 2x_3 = 0$ in parametric vector form. What shape is the solution set?"

    The second equation is twice the first, so the RREF is the single row $(1, 2, -1)$ plus a zero row. Free variables
    $x_2 = s$, $x_3 = t$; then $x_1 = -2s + t$. So $\mathbf{x} = s(-2, 1, 0) + t(1, 0, 1)$: a plane through the origin
    in $\mathbb{R}^3$, the plane with normal $(1, 2, -1)$. Check: $(1, 2, -1) \cdot (-2, 1, 0) = 0$ and
    $(1, 2, -1) \cdot (1, 0, 1) = 0$.

??? question "6. For which numbers $k$ does the system $x + ky = 1$, $kx + y = 1$ have no solution, exactly one, or infinitely many?"

    $R_2 - kR_1$ gives $(1 - k^2)\,y = 1 - k$. If $k^2 \ne 1$ we can divide: $y = \frac{1 - k}{1 - k^2} = \frac{1}{1 + k}$,
    and then $x = 1 - ky = \frac{1}{1 + k}$ as well, one solution. If $k = 1$ the row reads $0 = 0$: both equations
    are $x + y = 1$, infinitely many. If $k = -1$ the row reads $0 = 2$: the lines $x - y = 1$ and $-x + y = 1$ are
    parallel, no solution.

??? question "7. Solve the grain problem from the *Nine Chapters*: $3x + 2y + z = 39$, $2x + 3y + z = 34$, $x + 2y + 3z = 26$."

    Put the third equation on top to have pivot 1: rows $(1, 2, 3 \mid 26)$, $(3, 2, 1 \mid 39)$, $(2, 3, 1 \mid 34)$.
    $R_2 - 3R_1 = (0, -4, -8 \mid -39)$ and $R_3 - 2R_1 = (0, -1, -5 \mid -18)$. Swap these two and multiply the new
    row 2 by $-1$: $(0, 1, 5 \mid 18)$. Then the other row plus 4 times it: $(0, 0, 12 \mid 33)$, so $z = \tfrac{33}{12} = 2\tfrac34$.
    Then $y = 18 - 5 \cdot \tfrac{11}{4} = \tfrac{17}{4} = 4\tfrac14$ and $x = 26 - 2 \cdot \tfrac{17}{4} - 3 \cdot \tfrac{11}{4} = \tfrac{104 - 34 - 33}{4} = \tfrac{37}{4} = 9\tfrac14$.
    Check: $3 \cdot 9.25 + 2 \cdot 4.25 + 2.75 = 39$, $2 \cdot 9.25 + 3 \cdot 4.25 + 2.75 = 34$,
    $9.25 + 2 \cdot 4.25 + 3 \cdot 2.75 = 26$. These are the answers the *Nine Chapters* gives.

??? question "8. Balance the chemical reaction $a\,\mathrm{C_3H_8} + b\,\mathrm{O_2} \to c\,\mathrm{CO_2} + d\,\mathrm{H_2O}$ with the smallest whole numbers."

    Count atoms on both sides. Carbon: $3a = c$. Hydrogen: $8a = 2d$. Oxygen: $2b = 2c + d$. This is a homogeneous
    system of 3 equations in 4 unknowns, so by Theorem 2.4 it has nonzero solutions, with one free variable. Take
    $a = 1$: then $c = 3$, $d = 4$, and $2b = 6 + 4$, so $b = 5$. The reaction is
    $\mathrm{C_3H_8} + 5\,\mathrm{O_2} \to 3\,\mathrm{CO_2} + 4\,\mathrm{H_2O}$, and every other solution is a multiple
    of $(1, 5, 3, 4)$.

??? question "9. A homogeneous system has 3 equations and 5 unknowns. What is the smallest possible number of free variables? Can the system have exactly one solution?"

    The rank is at most 3 (one pivot per row), so at least $5 - 3 = 2$ variables are free. The solution set therefore
    needs at least two parameters; it always contains a plane through the origin. It cannot have exactly one solution.

??? question "10. Prove that a square system (as many equations as unknowns) has exactly one solution for every right-hand side if it has exactly one solution for one right-hand side."

    Exactly one solution for some $\mathbf{b}$ means, by Theorem 2.5, that the homogeneous system has only the
    trivial solution (otherwise adding a homogeneous solution would give a second one). So the RREF of the coefficient
    matrix has no free columns: all $n$ columns are pivot columns, which for an $n \times n$ matrix means a pivot in
    every row. Then for any right-hand side, the last column of the augmented matrix cannot be a pivot column (there is
    no row left for it), so the system is consistent, and with no free variables the solution is unique.

??? question "11. Find the parabola through $(-1, 6)$, $(1, 2)$, $(2, 3)$."

    With $p(x) = a + bx + cx^2$: $a - b + c = 6$, $a + b + c = 2$, $a + 2b + 4c = 3$. Subtracting the first from the
    second, $2b = -4$, so $b = -2$. Then $a + c = 4$ and $a + 4c = 3 + 4 = 7$, so $3c = 3$, $c = 1$, $a = 3$. It is the
    same parabola $3 - 2x + x^2$ as in Example 2.7. Check: $p(-1) = 3 + 2 + 1 = 6$.

## What you learned

- A linear system can be read as hyperplanes meeting (rows), as a combination of columns equal to the right-hand side
  (columns), or as an augmented matrix.
- A linear system has no solution, exactly one, or infinitely many: two solutions force the whole line through them.
- The elementary row operations (replace, swap, scale) do not change the solutions; Gaussian elimination uses them to
  reach a staircase shape, and back substitution finishes.
- Reduced row echelon form is unique; its pivots give the rank, and from it you read consistency, uniqueness and the
  number of free parameters.
- Every solution is one particular solution plus a solution of the homogeneous system; homogeneous systems with more
  unknowns than equations always have nonzero solutions.
- The method is about two thousand years old (the *Nine Chapters*), and was named after Gauss and Wilhelm Jordan much
  later.

**Next:** [Chapter 3](03-Matrices.md) turns the table of coefficients into an object you can multiply, explains why
matrix multiplication is defined the way it is, and records elimination itself as a product of matrices.

## Further reading

- Gilbert Strang, *Introduction to Linear Algebra* (6th edition, 2023), Chapter 2.
- David C. Lay, Steven R. Lay and Judi J. McDonald, *Linear Algebra and Its Applications* (5th edition, 2016),
  Chapter 1.
- Jim Hefferon, *Linear Algebra* (free online, several editions), Chapter One.
- Shen Kangshen, John N. Crossley and Anthony W.-C. Lun, *The Nine Chapters on the Mathematical Art: Companion and
  Commentary* (1999).
- Joseph F. Grcar, "Mathematicians of Gaussian elimination", *Notices of the American Mathematical Society* 58 (2011),
  and "How ordinary elimination became Gaussian elimination", *Historia Mathematica* 38 (2011).
- Thomas Yuster, "The reduced row echelon form of a matrix is unique: a simple proof", *Mathematics Magazine* 57
  (1984).
- On this site: the Algebra book's [Chapter 3, Lines and linear systems](../algebra/03-Lines-and-Linear-Systems.md);
  the Topics lessons [Solving systems by graphing](../../topics/algebra/level-6/04-systems-graphing.md) and
  [Substitution and elimination](../../topics/algebra/level-6/05-substitution-elimination.md); the U of T guide
  [MAT240H1 Unit 7, Systems and elementary operations](../../uoft/MAT240H1/unit07.md).
