---
title: "Linear Diophantine equations"
---

# Linear Diophantine equations

*Number theory · level 6, lesson 2 of 6*

## A question to start

A post office has run out of everything except 5-cent and 8-cent stamps. You need exactly 71 cents of postage on a
parcel. How many of each stamp should you use?

With some trying, you might find 3 five-cent stamps and 7 eight-cent stamps: $15 + 56 = 71$. Or 11 five-cent stamps
and 2 eight-cent stamps: $55 + 16 = 71$. Are there any more? And if the clerk had asked for 72 cents or 27 cents,
how would you know whether it could be done at all, without trying every possibility?

The equation $5x + 8y = 71$, where $x$ and $y$ must be **whole numbers**, is a **Diophantine equation**. This lesson
shows how to decide if such an equation has solutions, how to find one, and how to write down **every** solution in
one line.

## The idea

### What "Diophantine" means

A **Diophantine equation** is an equation where we only accept **whole-number** answers. They are named after
Diophantus of Alexandria, a Greek mathematician who probably lived in the 3rd century AD and wrote a book of such
problems, the *Arithmetica*.

The ordinary equation $5x + 8y = 71$ has infinitely many answers in fractions and decimals: for any $x$ at all, take
$y = (71 - 5x) / 8$. Asking for whole numbers changes everything. Now it is a puzzle about divisibility.

In this lesson we study **linear** Diophantine equations in two unknowns:

$$ax + by = c,$$

where $a$, $b$, $c$ are given whole numbers and we want whole numbers $x$ and $y$. ("Linear" means $x$ and $y$ are not
squared or multiplied together. Its graph is a straight line.)

### Step 1: is there any solution?

From [lesson 1](01-bezout-identity.md), the numbers $ax + by$ (with $x$, $y$ any whole numbers) are exactly the
multiples of $\gcd(a, b)$. So:

> $ax + by = c$ has whole-number solutions **exactly when $\gcd(a, b)$ divides $c$.**

For the stamps, $\gcd(5, 8) = 1$, which divides everything, so $5x + 8y = c$ can be solved for every $c$ (though maybe
with a negative $x$ or $y$: more on that below). But $6x + 9y = 100$ has **no** whole-number solutions, since
$\gcd(6, 9) = 3$ does not divide 100. You can be sure of that without testing a single pair.

### Step 2: find one solution

Write $d = \gcd(a, b)$. Extended Euclid gives $au + bv = d$. If $c = kd$, multiply through by $k$:

$$a(ku) + b(kv) = kd = c.$$

So $x_0 = ku$, $y_0 = kv$ is a solution. (For small numbers, spotting one by trial is often quicker. Either way, any
one solution will do.)

### Step 3: find them all

Suppose $(x_0, y_0)$ is one solution. Here is how to get every other one.

**Making new solutions.** Write $a = d a_1$ and $b = d b_1$. Moving $x$ up by $b_1$ and $y$ down by $a_1$ changes
$ax + by$ by $a b_1 - b a_1 = d a_1 b_1 - d b_1 a_1 = 0$. So for any whole number $t$,

$$x = x_0 + b_1 t, \qquad y = y_0 - a_1 t$$

is again a solution.

**There are no others.** Let $(x, y)$ be any solution. Subtract the two equations $ax + by = c$ and
$ax_0 + by_0 = c$:

$$a(x - x_0) = -b(y - y_0).$$

Divide by $d$: $a_1(x - x_0) = -b_1(y - y_0)$. So $b_1$ divides $a_1(x - x_0)$. Now $a_1$ and $b_1$ have no common
factor except 1 (we divided out the greatest one). And when a number $m$ divides a product $nk$ and shares no factor
with $n$, it must divide $k$. (Why: Bézout gives $nu + mv = 1$, so $k = nku + mkv$; $m$ divides $nk$ and $m$ divides
$mkv$, so $m$ divides $k$.) So $b_1$ divides $x - x_0$, say $x - x_0 = b_1 t$. Putting this back,
$a_1 b_1 t = -b_1(y - y_0)$, so $y - y_0 = -a_1 t$. That is exactly the form above.

> **All solutions of $ax + by = c$:** if $(x_0, y_0)$ is one solution and $d = \gcd(a, b)$, then every solution is
> $x = x_0 + \frac{b}{d}t$, $y = y_0 - \frac{a}{d}t$ for a whole number $t$, and each $t$ gives one.

### The picture: points on a line

The equation $5x + 8y = 71$ is a straight line. Whole-number solutions are points where the line passes **exactly
through a corner** of the grid. Most lines with whole-number $a$, $b$, $c$ pass through such corners regularly: here
each step moves 8 right and 5 down. In the first quarter of the plane (where $x \ge 0$ and $y \ge 0$, which is what
stamps need) only two corners lie on the line: $(3, 7)$ and $(11, 2)$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 310" role="img" aria-label="A grid with x from 0 to 12 and y from 0 to 9; the line 5x plus 8y equals 71 crosses it, passing exactly through the grid corners at 3, 7 and 11, 2; an arrow shows a step of 8 right and 5 down between them">
  <g stroke="currentColor" stroke-opacity="0.2" stroke-width="1">
    <line x1="30" y1="28" x2="30" y2="280"/><line x1="58" y1="28" x2="58" y2="280"/><line x1="86" y1="28" x2="86" y2="280"/>
    <line x1="114" y1="28" x2="114" y2="280"/><line x1="142" y1="28" x2="142" y2="280"/><line x1="170" y1="28" x2="170" y2="280"/>
    <line x1="198" y1="28" x2="198" y2="280"/><line x1="226" y1="28" x2="226" y2="280"/><line x1="254" y1="28" x2="254" y2="280"/>
    <line x1="282" y1="28" x2="282" y2="280"/><line x1="310" y1="28" x2="310" y2="280"/><line x1="338" y1="28" x2="338" y2="280"/>
    <line x1="366" y1="28" x2="366" y2="280"/>
    <line x1="30" y1="280" x2="366" y2="280"/><line x1="30" y1="252" x2="366" y2="252"/><line x1="30" y1="224" x2="366" y2="224"/>
    <line x1="30" y1="196" x2="366" y2="196"/><line x1="30" y1="168" x2="366" y2="168"/><line x1="30" y1="140" x2="366" y2="140"/>
    <line x1="30" y1="112" x2="366" y2="112"/><line x1="30" y1="84" x2="366" y2="84"/><line x1="30" y1="56" x2="366" y2="56"/>
    <line x1="30" y1="28" x2="366" y2="28"/>
  </g>
  <line x1="30" y1="280" x2="370" y2="280" stroke="currentColor" stroke-width="2"/>
  <line x1="30" y1="280" x2="30" y2="22" stroke="currentColor" stroke-width="2"/>
  <line x1="30" y1="31.5" x2="366" y2="241.5" stroke="#9cc9ea" stroke-width="3"/>
  <path d="M 114 84 L 338 84 L 338 224" fill="none" stroke="#eea66f" stroke-width="2" stroke-dasharray="6 4"/>
  <circle cx="114" cy="84" r="6" fill="#7ccf9a" stroke="currentColor"/>
  <circle cx="338" cy="224" r="6" fill="#7ccf9a" stroke="currentColor"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="30" y="296">0</text><text x="114" y="296">3</text><text x="338" y="296">11</text><text x="366" y="296">x</text>
    <text x="20" y="88">7</text><text x="20" y="228">2</text><text x="20" y="32">y</text>
    <text x="114" y="72">(3, 7)</text><text x="300" y="232">(11, 2)</text>
    <text x="226" y="78">8 right</text><text x="362" y="160">5 down</text>
    <text x="200" y="150">5x + 8y = 71</text>
  </g>
</svg>
</div>

The step (8 right, 5 down) is $(b_1, -a_1)$ from the formula. Going one step further either way leaves the first
quarter: $(3 - 8, 7 + 5) = (-5, 12)$ and $(11 + 8, 2 - 5) = (19, -3)$. So there are **exactly two** ways to pay 71
cents.

## Worked examples

**1. The stamps, completely.** Solve $5x + 8y = 71$ in whole numbers, then with $x, y \ge 0$.

- $\gcd(5, 8) = 1$, which divides 71, so there are solutions.
- One solution: try $y = 0, 1, 2, \ldots$ until $71 - 8y$ is a multiple of 5. $y = 2$ gives
  $71 - 16 = 55 = 5 \times 11$. So $(x_0, y_0) = (11, 2)$.
- All solutions: $x = 11 + 8t$, $y = 2 - 5t$.
- For $y \ge 0$ we need $2 - 5t \ge 0$, so $t \le 0$. For $x \ge 0$ we need $11 + 8t \ge 0$, so $t \ge -1$ (since
  $t = -2$ gives $x = -5$). So $t = 0$ or $t = -1$: the solutions $(11, 2)$ and $(3, 7)$. **Exactly two.**

**2. Dividing out the gcd first.** Solve $12x + 18y = 30$.

- $\gcd(12, 18) = 6$, and 6 divides 30. Divide everything by 6: $2x + 3y = 5$.
- One solution: $x = 1$, $y = 1$.
- All: $x = 1 + 3t$, $y = 1 - 2t$. For example $t = 1$ gives $(4, -1)$: $48 - 18 = 30$. ✓

**3. Using extended Euclid when trial is slow.** Find all whole solutions of $1071x + 462y = 105$.

- From [lesson 1](01-bezout-identity.md): $\gcd = 21$ and $21 = 1071 \times (-3) + 462 \times 7$.
- $105 = 5 \times 21$, so multiply by 5: $105 = 1071 \times (-15) + 462 \times 35$. One solution: $(-15, 35)$.
- $b/d = 462 / 21 = 22$ and $a/d = 1071 / 21 = 51$. All solutions: $x = -15 + 22t$, $y = 35 - 51t$.

**4. The hundred fowls.** A puzzle from a Chinese book of the 5th century AD, the *Zhang Qiujian suanjing*: a rooster
costs 5 coins, a hen 3 coins, and 3 chicks cost 1 coin. With 100 coins you buy 100 birds. How many of each?

- Let $x$ roosters, $y$ hens, $z$ chicks. Then $x + y + z = 100$ and $5x + 3y + \frac{z}{3} = 100$.
- Multiply the second by 3: $15x + 9y + z = 300$. Subtract the first: $14x + 8y = 200$, so $7x + 4y = 100$.
- One solution: $x = 0$, $y = 25$. All: $x = 4t$, $y = 25 - 7t$, and then $z = 100 - x - y = 75 + 3t$.
- All three must be at least 0: $t \ge 0$ and $25 - 7t \ge 0$, so $t = 0, 1, 2, 3$.
- The answers: $(0, 25, 75)$, $(4, 18, 78)$, $(8, 11, 81)$, $(12, 4, 84)$. Check the second:
  $4 \times 5 + 18 \times 3 + 78 \div 3 = 20 + 54 + 26 = 100$. ✓ (The old book gives the last three; whether "no roosters" counts is up to
  you.)

## Try it

1. Find one whole-number solution of $3x + 7y = 1$.
2. Find all whole-number solutions of $3x + 7y = 20$. Which have $x \ge 0$ and $y \ge 0$?
3. Which of these have whole-number solutions? (a) $14x + 21y = 50$; (b) $14x + 21y = 49$; (c) $9x - 15y = 6$.
4. Adult tickets cost 12 dollars and child tickets 7 dollars. A group paid 100 dollars exactly. How many adults and
   children?
5. In how many ways can you pay exactly 100 cents with 5-cent and 8-cent stamps?
6. Show that $5x + 8y = 27$ has whole-number solutions, but none with $x \ge 0$ and $y \ge 0$.
7. How many solutions with $x, y \ge 0$ does $5x + 8y = 200$ have?
8. Harder: a farmer buys cows at 80 dollars and sheep at 30 dollars, spending exactly 1000 dollars on at least one of
   each. Find every possibility. Explain why the number of sheep is always a multiple of 4.

??? note "Answers"
    1. For example $x = -2$, $y = 1$: $-6 + 7 = 1$. (Or $x = 5$, $y = -2$: $15 - 14 = 1$.)
    2. One solution: $(2, 2)$, since $6 + 14 = 20$. All: $x = 2 + 7t$, $y = 2 - 3t$. For $y \ge 0$: $t \le 0$; for
       $x \ge 0$: $t \ge 0$ (since $t = -1$ gives $x = -5$). So only $t = 0$: **(2, 2)**.
    3. (a) $\gcd(14, 21) = 7$ does not divide 50: **no**. (b) 7 divides 49: **yes** (divide by 7: $2x + 3y = 7$,
       e.g. $(2, 1)$). (c) $\gcd(9, 15) = 3$ divides 6: **yes**, e.g. $x = 4$, $y = 2$: $36 - 30 = 6$.
    4. $12x + 7y = 100$. $100 - 12x$ must be a multiple of 7. Trying $x = 0$ to 8: only $x = 6$ works (
       $100 - 72 = 28 = 4 \times 7$). So **6 adults and 4 children**. (Formula check: all solutions $x = 6 + 7t$, $y = 4 - 12t$;
       only $t = 0$ keeps both at least 0.)
    5. $5x + 8y = 100$. Since 5 divides 100 and $5x$, it must divide $8y$, so $y$ is a multiple of 5: $y = 0, 5, 10$
       give $x = 20, 12, 4$. **Three ways.**
    6. $\gcd(5, 8) = 1$ divides 27, so solutions exist, e.g. $(7, -1)$: $35 - 8 = 27$. With $x, y \ge 0$: $y$ can only
       be 0, 1, 2 or 3 (since $8 \times 4 > 27$), leaving 27, 19, 11, 3, none a multiple of 5. So none. (27 turns out
       to be the largest amount you cannot pay with these stamps: see the next lesson.)
    7. As in question 5, $y$ must be a multiple of 5, and $8y \le 200$ means $y \le 25$. So $y = 0, 5, 10, 15, 20, 25$
       (with $x = 40, 32, 24, 16, 8, 0$): **6 solutions**.
    8. $80x + 30y = 1000$, so $8x + 3y = 100$. One solution: $x = 2$, $y = 28$. All: $x = 2 + 3t$, $y = 28 - 8t$.
       With $x, y \ge 1$: $t = 0, 1, 2, 3$, giving **(2, 28), (5, 20), (8, 12), (11, 4)** (cows, sheep). The sheep
       are always a multiple of 4: $3y = 100 - 8x$ is a multiple of 4 (both 100 and $8x$ are), and since 3 shares no
       factor with 4, $y$ itself must be a multiple of 4 (the fact proved in Step 3).

## Common mistake

**Forgetting to divide by the gcd in the step.** For $12x + 18y = 30$, the step between solutions is
$(18/6, -12/6) = (3, -2)$, not $(18, -12)$. Using $(18, -12)$ gives true solutions but **misses** two out of every
three of them.

**Stopping at one solution.** "Find all solutions" means the general formula with $t$, and, if the problem needs
$x, y \ge 0$, the exact range of $t$.

## Where it leads

- Back: [Bézout's identity](01-bezout-identity.md) · Next: [The coin problem](03-coin-problem.md): which amounts can
  be paid with **no** negative coins, and the largest that cannot.
- [Level 6 page](index.md) · [Number theory topic page](../index.md)
- Straight lines and their equations: [Algebra](../../algebra/index.md).
- Diophantine equations get much harder when squares appear, such as $x^2 + y^2 = z^2$:
  [Level 7](../level-7/index.md) finds all its solutions, and [Level 8](../level-8/index.md) tells the story of
  Fermat's last theorem.
