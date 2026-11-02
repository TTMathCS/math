---
title: "Catalan numbers"
---

# Catalan numbers

*Counting and combinations · level 8, lesson 2 of 6*

## A question to start

Here are three questions that seem to have nothing to do with each other.

- In how many ways can you write 3 pairs of brackets so that they make sense? `(())()` is fine, but `())(()` is not,
  because a bracket closes before it was opened.
- In how many ways can you cut a pentagon into triangles by drawing diagonals that do not cross?
- In how many ways can you put brackets into $a \times b \times c \times d$ to say which multiplication to do first,
  like $(a \times b) \times (c \times d)$?

All three answers are **5**. Make the problems one size bigger and all three answers are **14**, then **42**, then
**132**. The same numbers keep turning up in hundreds of counting problems. They are the **Catalan numbers**, and this
lesson finds the formula for them with one of the prettiest tricks in counting.

## The idea

### Balanced brackets and mountain paths

A string of $n$ opening and $n$ closing brackets is **balanced** if, reading from left to right, you never have more
closing brackets than opening ones so far. The number of balanced strings with $n$ pairs is the $n$th Catalan number,
written $C_n$. For $n = 3$ the five are `((()))`, `(()())`, `(())()`, `()(())`, `()()()`.

Turn each bracket into a step: `(` is a step **up**, `)` is a step **down**. A balanced string becomes a **mountain
path**: it starts and ends at ground level and never dips below the ground, because dipping would mean more `)` than
`(` so far.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 240" role="img" aria-label="The five mountain paths of three up-steps and three down-steps that never go below the ground line, with their bracket words">
  <line x1="15" y1="100" x2="147" y2="100" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <polyline points="15,100 37,78 59,56 81,34 103,56 125,78 147,100" fill="none" stroke="#eea66f" stroke-width="3"/>
  <circle cx="15" cy="100" r="2.5" fill="currentColor"/>
  <circle cx="37" cy="78" r="2.5" fill="currentColor"/>
  <circle cx="59" cy="56" r="2.5" fill="currentColor"/>
  <circle cx="81" cy="34" r="2.5" fill="currentColor"/>
  <circle cx="103" cy="56" r="2.5" fill="currentColor"/>
  <circle cx="125" cy="78" r="2.5" fill="currentColor"/>
  <circle cx="147" cy="100" r="2.5" fill="currentColor"/>
  <text x="81" y="120" font-size="14" text-anchor="middle" fill="currentColor">((()))</text>
  <line x1="165" y1="100" x2="297" y2="100" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <polyline points="165,100 187,78 209,56 231,78 253,56 275,78 297,100" fill="none" stroke="#eea66f" stroke-width="3"/>
  <circle cx="165" cy="100" r="2.5" fill="currentColor"/>
  <circle cx="187" cy="78" r="2.5" fill="currentColor"/>
  <circle cx="209" cy="56" r="2.5" fill="currentColor"/>
  <circle cx="231" cy="78" r="2.5" fill="currentColor"/>
  <circle cx="253" cy="56" r="2.5" fill="currentColor"/>
  <circle cx="275" cy="78" r="2.5" fill="currentColor"/>
  <circle cx="297" cy="100" r="2.5" fill="currentColor"/>
  <text x="231" y="120" font-size="14" text-anchor="middle" fill="currentColor">(()())</text>
  <line x1="315" y1="100" x2="447" y2="100" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <polyline points="315,100 337,78 359,56 381,78 403,100 425,78 447,100" fill="none" stroke="#eea66f" stroke-width="3"/>
  <circle cx="315" cy="100" r="2.5" fill="currentColor"/>
  <circle cx="337" cy="78" r="2.5" fill="currentColor"/>
  <circle cx="359" cy="56" r="2.5" fill="currentColor"/>
  <circle cx="381" cy="78" r="2.5" fill="currentColor"/>
  <circle cx="403" cy="100" r="2.5" fill="currentColor"/>
  <circle cx="425" cy="78" r="2.5" fill="currentColor"/>
  <circle cx="447" cy="100" r="2.5" fill="currentColor"/>
  <text x="381" y="120" font-size="14" text-anchor="middle" fill="currentColor">(())()</text>
  <line x1="90" y1="210" x2="222" y2="210" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <polyline points="90,210 112,188 134,210 156,188 178,166 200,188 222,210" fill="none" stroke="#eea66f" stroke-width="3"/>
  <circle cx="90" cy="210" r="2.5" fill="currentColor"/>
  <circle cx="112" cy="188" r="2.5" fill="currentColor"/>
  <circle cx="134" cy="210" r="2.5" fill="currentColor"/>
  <circle cx="156" cy="188" r="2.5" fill="currentColor"/>
  <circle cx="178" cy="166" r="2.5" fill="currentColor"/>
  <circle cx="200" cy="188" r="2.5" fill="currentColor"/>
  <circle cx="222" cy="210" r="2.5" fill="currentColor"/>
  <text x="156" y="230" font-size="14" text-anchor="middle" fill="currentColor">()(())</text>
  <line x1="240" y1="210" x2="372" y2="210" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <polyline points="240,210 262,188 284,210 306,188 328,210 350,188 372,210" fill="none" stroke="#eea66f" stroke-width="3"/>
  <circle cx="240" cy="210" r="2.5" fill="currentColor"/>
  <circle cx="262" cy="188" r="2.5" fill="currentColor"/>
  <circle cx="284" cy="210" r="2.5" fill="currentColor"/>
  <circle cx="306" cy="188" r="2.5" fill="currentColor"/>
  <circle cx="328" cy="210" r="2.5" fill="currentColor"/>
  <circle cx="350" cy="188" r="2.5" fill="currentColor"/>
  <circle cx="372" cy="210" r="2.5" fill="currentColor"/>
  <text x="306" y="230" font-size="14" text-anchor="middle" fill="currentColor">()()()</text>
</svg>
</div>

The same paths, turned 45°, are the paths on a square grid from one corner to the opposite one, going right or up,
that never cross the diagonal. All of these are the same set in different clothes: matched one-to-one, a
**bijection**, as in level 6.

### Catalan numbers by recursion

Every balanced string starts with `(`. That bracket is closed by exactly one `)` later on, its partner. Between them is
a balanced string $A$, and after the partner is another balanced string $B$:

$$\texttt{(}\,A\,\texttt{)}\,B.$$

If $A$ has $k$ pairs, $B$ has the other $n - 1 - k$. Each case gives $C_k \times C_{n-1-k}$ strings (choose $A$, then
$B$). Adding over $k$:

$$C_n = C_0C_{n-1} + C_1C_{n-2} + \cdots + C_{n-1}C_0, \qquad C_0 = 1.$$

(The empty string counts as one balanced string, which is why $C_0 = 1$.) This gives $C_1 = 1$, $C_2 = 1 + 1 = 2$,
$C_3 = 2 + 1 + 2 = 5$, $C_4 = 5 + 2 + 2 + 5 = 14$, and on: 1, 1, 2, 5, 14, 42, 132, 429, 1430, ...

### Triangulations: the same recursion

A **triangulation** of a convex polygon cuts it into triangles with diagonals that do not cross. Here are the five
triangulations of a pentagon; each uses two diagonals from one corner.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 120" role="img" aria-label="The five ways to cut a regular pentagon into triangles with two diagonals that do not cross; each uses two diagonals from one corner">
  <polygon points="60.0,23.0 99.9,52.0 84.7,99.0 35.3,99.0 20.1,52.0" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60.0" y1="23.0" x2="84.7" y2="99.0" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="60.0" y1="23.0" x2="35.3" y2="99.0" stroke="#eea66f" stroke-width="2.5"/>
  <circle cx="60" cy="23" r="3.5" fill="currentColor" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="145.0,23.0 184.9,52.0 169.7,99.0 120.3,99.0 105.1,52.0" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <line x1="184.9" y1="52.0" x2="120.3" y2="99.0" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="184.9" y1="52.0" x2="105.1" y2="52.0" stroke="#eea66f" stroke-width="2.5"/>
  <circle cx="184.944" cy="52.0213" r="3.5" fill="currentColor" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="230.0,23.0 269.9,52.0 254.7,99.0 205.3,99.0 190.1,52.0" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <line x1="254.7" y1="99.0" x2="190.1" y2="52.0" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="254.7" y1="99.0" x2="230.0" y2="23.0" stroke="#eea66f" stroke-width="2.5"/>
  <circle cx="254.687" cy="98.9787" r="3.5" fill="currentColor" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="315.0,23.0 354.9,52.0 339.7,99.0 290.3,99.0 275.1,52.0" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <line x1="290.3" y1="99.0" x2="315.0" y2="23.0" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="290.3" y1="99.0" x2="354.9" y2="52.0" stroke="#eea66f" stroke-width="2.5"/>
  <circle cx="290.313" cy="98.9787" r="3.5" fill="currentColor" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="400.0,23.0 439.9,52.0 424.7,99.0 375.3,99.0 360.1,52.0" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <line x1="360.1" y1="52.0" x2="439.9" y2="52.0" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="360.1" y1="52.0" x2="424.7" y2="99.0" stroke="#eea66f" stroke-width="2.5"/>
  <circle cx="360.056" cy="52.0213" r="3.5" fill="currentColor" stroke="currentColor" stroke-width="1.5"/>
</svg>
</div>

Let $T_n$ be the number of triangulations of a polygon with $n + 2$ sides (so $T_1 = 1$ for a triangle, $T_2 = 2$ for a
square, $T_3 = 5$ for the pentagon). Fix one side, the base. In any triangulation, the base belongs to exactly one
triangle, and that triangle's third corner splits the rest of the polygon into a polygon on its left and a polygon on
its right. If the left one has $k + 2$ corners, the right one has $(n - 1 - k) + 2$ (the third corner belongs to
both). When the third corner is right next to the base, one side has nothing left to cut, a "polygon" with only 2
corners; count that as one way, $T_0 = 1$. So $T_n = \sum_k T_k T_{n-1-k}$, the **same** recursion with the same start,
and so $T_n = C_n$. Leonhard Euler counted triangulations in the 1750s; Eugène Catalan, after whom the numbers are
named, studied the bracket problem in 1838.

### A formula: the reflection trick

The recursion is slow for big $n$. Here is a direct formula.

**Step 1: count all paths.** A path with $n$ up-steps and $n$ down-steps, with no rule about the ground, is a choice of
which $n$ of the $2n$ steps go up: $\dbinom{2n}{n}$ paths.

**Step 2: count the bad paths.** A path is **bad** if it dips below the ground, that is, if it touches height $-1$
somewhere. Take a bad path and find the **first** time it touches $-1$. Reflect everything **after** that point in the
line at height $-1$: every up-step becomes a down-step and every down-step an up-step.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 190" role="img" aria-label="A path that dips below the ground; after its first touch of height minus one, the rest of the path is flipped, and the new path ends at height minus two">
  <line x1="30" y1="110" x2="214" y2="110" stroke="currentColor" stroke-width="1.2"/>
  <text x="218" y="114" font-size="11" text-anchor="start" fill="currentColor">ground (height 0)</text>
  <line x1="30" y1="134" x2="214" y2="134" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="218" y="138" font-size="11" text-anchor="start" fill="currentColor">height −1</text>
  <polyline points="30,110 54,86 78,110 102,134 126,110 150,86 174,110" fill="none" stroke="#eea66f" stroke-width="3"/>
  <polyline points="102,134 126,158 150,182 174,158" fill="none" stroke="#9cc9ea" stroke-width="3" stroke-dasharray="6 4"/>
  <circle cx="30" cy="110" r="2.5" fill="currentColor"/>
  <circle cx="54" cy="86" r="2.5" fill="currentColor"/>
  <circle cx="78" cy="110" r="2.5" fill="currentColor"/>
  <circle cx="102" cy="134" r="2.5" fill="currentColor"/>
  <circle cx="126" cy="110" r="2.5" fill="currentColor"/>
  <circle cx="150" cy="86" r="2.5" fill="currentColor"/>
  <circle cx="174" cy="110" r="2.5" fill="currentColor"/>
  <circle cx="102" cy="134" r="2.5" fill="currentColor"/>
  <circle cx="126" cy="158" r="2.5" fill="currentColor"/>
  <circle cx="150" cy="182" r="2.5" fill="currentColor"/>
  <circle cx="174" cy="158" r="2.5" fill="currentColor"/>
  <circle cx="102" cy="134" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="102" y="156" font-size="11" text-anchor="middle" fill="currentColor">first touch</text>
  <text x="178" y="152" font-size="11" text-anchor="start" fill="currentColor">ends at −2</text>
  <text x="30" y="25" font-size="12" text-anchor="start" fill="currentColor">orange: a bad path ( ) ) ( ( )   blue: its tail flipped</text>
</svg>
</div>

The original path ended at height 0, which is 1 above the line at $-1$; after reflection the tail ends 1 **below** it,
at height $-2$. So reflected paths end at $-2$: they have $n - 1$ up-steps and $n + 1$ down-steps.

**Step 3: the reflection is a perfect matching.** Every path with $n - 1$ ups and $n + 1$ downs ends at $-2$, so it must
pass through $-1$ (it moves one level per step and cannot jump over it). Reflect it after its first touch of $-1$ and
you get back a bad path ending at 0. Doing the reflection twice gives back the path you started with. So bad paths and
paths ending at $-2$ match up exactly, and there are $\dbinom{2n}{n+1}$ of each (choose which $n + 1$ steps go down).

**Step 4: subtract.**

$$C_n = \binom{2n}{n} - \binom{2n}{n+1}.$$

Simplify with $\dbinom{2n}{n+1} = \dfrac{(2n)!}{(n+1)!\,(n-1)!} = \dfrac{n}{n+1}\dbinom{2n}{n}$:

$$C_n = \binom{2n}{n}\left(1 - \frac{n}{n+1}\right) = \frac{1}{n+1}\binom{2n}{n}.$$

Check: $n = 3$ gives $\dfrac{20}{4} = 5$. ✓ And $n = 4$: $\dfrac{70}{5} = 14$. ✓ A surprise hidden in the formula:
$\dbinom{2n}{n}$ is always divisible by $n + 1$, because the answer counts something, so it must be a whole number.

### How to spot a Catalan problem

The sign is a structure that **splits into two smaller pieces of the same kind** around one special part: the first
bracket and its partner, the triangle on the base, the last multiplication in $a \times b \times c \times d$, the person
who shakes hands with person 1 at a round table. Whenever you see the recursion $\sum C_kC_{n-1-k}$, the answer is a
Catalan number.

## Worked examples

**1. Four pairs by recursion.** $C_4 = C_0C_3 + C_1C_2 + C_2C_1 + C_3C_0 = 5 + 2 + 2 + 5 = 14$.

**2. Five pairs by formula.** $C_5 = \dfrac{1}{6}\dbinom{10}{5} = \dfrac{252}{6} = 42$.

**3. Multiplying four numbers.** The bracketings of $a \times b \times c \times d$ are $((ab)c)d$, $(a(bc))d$,
$(ab)(cd)$, $a((bc)d)$, $a(b(cd))$: **5** $= C_3$. The last multiplication splits the product into a left part and a
right part, each bracketed in its own way: the Catalan recursion with 3 multiplications.

**4. Handshakes across a round table.** Six people sit round a table and shake hands in pairs at the same time, with no
arms crossing. In how many ways? Person 1 shakes with someone; to avoid crossings, an even number of people must sit on
each side of that handshake, and they pair up among themselves. That is the Catalan recursion, so the answer is
$C_3 = 5$.

**5. Reflection with numbers.** For $n = 4$: all paths $\dbinom{8}{4} = 70$; bad paths $\dbinom{8}{5} = 56$; good
paths $70 - 56 = 14$. ✓

## Try it

1. List the balanced bracket strings with 2 pairs. Then list the ones with 3 pairs that start with `((`.
2. Find $C_6$ from the formula.
3. Find $C_5$ from the recursion, using $C_0, \ldots, C_4 = 1, 1, 2, 5, 14$.
4. How many triangulations does a hexagon have? A heptagon (7 sides)?
5. On a grid, paths go from $(0, 0)$ to $(5, 5)$ in unit steps right or up. How many paths are there in all? How many
   never go above the diagonal $y = x$? How many do?
6. In an election two candidates get 4 votes each. The votes are counted one at a time in a random order. In how many
   of the $\dbinom{8}{4}$ orders is candidate A never behind? What fraction is that?
7. Show that $\dbinom{2n}{n+1} = \dfrac{n}{n+1}\dbinom{2n}{n}$ by writing both with factorials.
8. Explain why a path of up- and down-steps that starts at 0 and ends at $-2$ must touch $-1$.

??? note "Answers"
    1. `(())` and `()()`. Starting with `((`: `((()))`, `(()())`, `(())()`: 3 of the 5.
    2. $\frac{1}{7}\binom{12}{6} = \frac{924}{7} = 132$.
    3. $C_5 = 1 \cdot 14 + 1 \cdot 5 + 2 \cdot 2 + 5 \cdot 1 + 14 \cdot 1 = 14 + 5 + 4 + 5 + 14 = 42$.
    4. A hexagon has $6 = n + 2$ sides, so $n = 4$: $C_4 = 14$. A heptagon: $C_5 = 42$.
    5. All paths: $\binom{10}{5} = 252$. Never above the diagonal: $C_5 = 42$. Above it at some point:
       $252 - 42 = 210$, which is $\binom{10}{6}$ by the reflection trick. ✓
    6. Count A's votes as up-steps and B's as down-steps: "A never behind" means the path never dips below 0. That is
       $C_4 = 14$ of the 70 orders, a fraction $\frac{14}{70} = \frac{1}{5}$.
    7. $\binom{2n}{n+1} = \frac{(2n)!}{(n+1)!\,(n-1)!}$. Write $(n+1)! = (n+1) \cdot n!$ and $(n-1)! = \frac{n!}{n}$:
       this is $\frac{(2n)!}{n!\,n!} \cdot \frac{n}{n+1} = \frac{n}{n+1}\binom{2n}{n}$.
    8. Each step changes the height by exactly 1. To get from 0 down to $-2$ the height must pass through every level
       in between, so at some step it equals $-1$. (It cannot skip a level, just as a staircase cannot skip a stair.)

## Common mistake

**Reflecting the whole path.** The trick reflects only the part **after the first touch** of $-1$. Reflecting the
whole path would turn a path from 0 into one starting at $-2$, and the matching would break. The "first touch" is what
makes the matching reversible: after reflecting, the first touch is still in the same place.

**Off-by-one sizes.** A polygon with $n$ sides has $C_{n-2}$ triangulations, not $C_n$. A pentagon has $C_3 = 5$.
Always check against a small case: a square has 2 triangulations (two diagonals to choose from), and $C_2 = 2$. ✓

## Where it leads

- Back: [Counting with recursion](01-counting-recursion.md) · Next: [Derangements](03-derangements.md)
- [Level 8 page](index.md) · [Counting topic page](../index.md)
- Grid paths and $\dbinom{2n}{n}$ came from [level 5](../level-5/index.md); bijections from
  [level 6](../level-6/index.md).
- The fraction of vote counts in which A is never behind is the start of the "ballot problem" in
  [Probability](../../probability/index.md).
- Balanced brackets are exactly what a computer checks when it reads a formula or a program: see
  [Logic](../../logic/index.md).
