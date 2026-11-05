---
title: "Solving inequalities"
---

# Solving inequalities

*Algebra · level 5, lesson 5 of 6*

## A question to start

You have 50 dollars to spend at a fair. Getting in costs 8 dollars, and every ride costs 3 dollars. How many rides
can you go on?

This is not quite an equation. You do not have to spend **exactly** 50 dollars; you just cannot spend **more**. If $r$
is the number of rides, the rule is

$$8 + 3r \le 50.$$

The answer is not one number but a whole collection of them: 0 rides is fine, 1 ride is fine, and so on up to some
largest number. This lesson shows how to solve inequalities like this one, why one rule is different from equations,
and how to handle two inequalities at once. (The answer, 14 rides, is worked example 5.)

## The idea

### Inequalities and their solutions

An **inequality** compares two amounts using one of four signs:

| Sign | Means | Example that is true |
| --- | --- | --- |
| $<$ | is less than | $3 < 7$ |
| $>$ | is greater than | $7 > 3$ |
| $\le$ | is less than or equal to (at most) | $5 \le 5$ |
| $\ge$ | is greater than or equal to (at least) | $6 \ge 5$ |

A **solution** of an inequality is any number that makes it true. Most inequalities have infinitely many solutions,
so we describe them all at once, like "$x > 5$" (every number bigger than 5). The collection of all solutions is
called the **solution set**.

We show a solution set on a number line. A **closed** (filled) dot means the end number is included ($\le$ or
$\ge$); an **open** (hollow) dot means it is not ($<$ or $>$). Here is $x \le 4$, which in words is "$x$ is at most 4":

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 70" role="img" aria-label="Number line from minus 5 to 5, shaded from 4 to the left with a filled dot at 4">
  <line x1="10" y1="30" x2="390" y2="30" stroke="currentColor" stroke-width="2"/>
  <line x1="344" y1="30" x2="14" y2="30" stroke="#eea66f" stroke-width="6"/>
  <polygon points="6,30 20,22 20,38" fill="#eea66f"/>
  <circle cx="344" cy="30" r="7" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="1.5">
    <line x1="56" y1="24" x2="56" y2="36"/><line x1="92" y1="24" x2="92" y2="36"/><line x1="128" y1="24" x2="128" y2="36"/>
    <line x1="164" y1="24" x2="164" y2="36"/><line x1="200" y1="24" x2="200" y2="36"/><line x1="236" y1="24" x2="236" y2="36"/>
    <line x1="272" y1="24" x2="272" y2="36"/><line x1="308" y1="24" x2="308" y2="36"/><line x1="380" y1="24" x2="380" y2="36"/>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="56" y="56">−4</text><text x="128" y="56">−2</text><text x="200" y="56">0</text>
    <text x="272" y="56">2</text><text x="344" y="56">4</text>
  </g>
</svg>
</div>

### Moves that keep an inequality true

Solving an inequality uses the same moves as solving an equation, with one important difference. Think of a see-saw
that is tipped: the heavier side is down.

- **Adding or subtracting** the same number on both sides keeps it tipped the same way. If $3 < 7$, then
  $3 + 10 < 7 + 10$ and $3 - 5 < 7 - 5$. Everything shifts along the number line together, so the order stays.
- **Multiplying or dividing** both sides by the same **positive** number keeps it tipped the same way. If $3 < 7$,
  then $6 < 14$. Stretching the number line keeps things in order.
- **Multiplying or dividing** both sides by a **negative** number **reverses** the sign. If $3 < 7$, then
  $-3 > -7$.

### Why a negative flips the sign

Multiplying by $-1$ sends every number to its **mirror image** on the other side of 0. Look at what happens to 2 and
5:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 110" role="img" aria-label="Number line: 2 and 5 on the right are reflected through zero to minus 2 and minus 5 on the left. 2 is left of 5, but minus 2 is right of minus 5.">
  <line x1="20" y1="60" x2="400" y2="60" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="1.5">
    <line x1="60" y1="54" x2="60" y2="66"/><line x1="150" y1="54" x2="150" y2="66"/><line x1="210" y1="50" x2="210" y2="70"/>
    <line x1="270" y1="54" x2="270" y2="66"/><line x1="360" y1="54" x2="360" y2="66"/>
  </g>
  <circle cx="270" cy="60" r="6" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="360" cy="60" r="6" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="150" cy="60" r="6" fill="#eea66f" stroke="currentColor"/>
  <circle cx="60" cy="60" r="6" fill="#eea66f" stroke="currentColor"/>
  <path d="M 270 52 Q 210 20 150 52" fill="none" stroke="currentColor" stroke-dasharray="4 3"/>
  <path d="M 360 52 Q 210 -10 60 52" fill="none" stroke="currentColor" stroke-dasharray="4 3"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="60" y="86">−5</text><text x="150" y="86">−2</text><text x="210" y="86">0</text>
    <text x="270" y="86">2</text><text x="360" y="86">5</text>
    <text x="315" y="104">2 &lt; 5</text><text x="105" y="104">−2 &gt; −5</text>
  </g>
</svg>
</div>

Before: 2 is to the **left** of 5, so $2 < 5$. After reflecting: $-2$ is to the **right** of $-5$, so $-2 > -5$.
A mirror swaps left and right, so it swaps "less than" and "greater than". Multiplying by any negative number is a
reflection (multiply by $-1$) followed by a stretch (multiply by a positive number), so it always flips the sign.

You can also avoid the flip altogether: move the $x$ terms to the side where they will be **positive**, just like
the tip in the last lesson for equations. Both ways give the same answer.

### Solving two-step inequalities

Solve $3x - 4 > 11$ exactly like an equation:

$$
\begin{aligned}
3x - 4 &> 11\\
3x &> 15 \qquad \text{(add 4 to both sides)}\\
x &> 5 \qquad \text{(divide by 3, a positive number: no flip)}
\end{aligned}
$$

Answer in words: "$x$ is any number greater than 5". On a number line: an open dot at 5, shaded to the right.

### Checking an inequality

An inequality answer needs a two-part check:

1. **The boundary:** put the end number into the **equation** version. Here $3 \times 5 - 4 = 11$, so 5 is exactly
   where the two sides are equal. ✓
2. **The direction:** test one number from inside the answer and one from outside. $x = 6$: $18 - 4 = 14 > 11$,
   true. ✓ $x = 0$: $-4 > 11$, false. ✓ So the solutions are on the side of 5 where 6 is.

### Compound inequalities

Sometimes a quantity is trapped between two limits, as in

$$-3 < 2x + 1 \le 7.$$

This is two inequalities at once: $-3 < 2x + 1$ **and** $2x + 1 \le 7$. You can solve each separately, but it is
quicker to do the same thing to **all three parts** at once:

$$
\begin{aligned}
-3 &< 2x + 1 \le 7\\
-4 &< 2x \le 6 \qquad \text{(subtract 1 from all three parts)}\\
-2 &< x \le 3 \qquad \text{(divide all three parts by 2)}
\end{aligned}
$$

In words: "$x$ is greater than $-2$ and at most 3". On a number line it is a **segment**, open at $-2$ and closed at
3:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 70" role="img" aria-label="Number line from minus 5 to 5, shaded between minus 2 and 3, with an open dot at minus 2 and a filled dot at 3">
  <line x1="10" y1="30" x2="390" y2="30" stroke="currentColor" stroke-width="2"/>
  <line x1="128" y1="30" x2="308" y2="30" stroke="#7ccf9a" stroke-width="6"/>
  <g stroke="currentColor" stroke-width="1.5">
    <line x1="20" y1="24" x2="20" y2="36"/><line x1="56" y1="24" x2="56" y2="36"/><line x1="92" y1="24" x2="92" y2="36"/>
    <line x1="164" y1="24" x2="164" y2="36"/><line x1="200" y1="24" x2="200" y2="36"/><line x1="236" y1="24" x2="236" y2="36"/>
    <line x1="272" y1="24" x2="272" y2="36"/><line x1="344" y1="24" x2="344" y2="36"/><line x1="380" y1="24" x2="380" y2="36"/>
  </g>
  <circle cx="128" cy="30" r="7" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="308" cy="30" r="7" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="20" y="56">−5</text><text x="128" y="56">−2</text><text x="200" y="56">0</text>
    <text x="308" y="56">3</text><text x="380" y="56">5</text>
  </g>
</svg>
</div>

The whole numbers in this set are $-1, 0, 1, 2, 3$. Notice that $-2$ is **not** included (open dot) but 3 is.

A compound inequality can also use "or", as in "$x < -1$ or $x > 4$". That set is two separate rays pointing away from
each other, and it cannot be squeezed into a single line like $-1 > x > 4$, which would say $-1 > 4$.

### Interval notation

Mathematicians often write solution sets as **intervals**: a square bracket means the end is included, a round
bracket means it is not. So $-2 < x \le 3$ is written $(-2, 3]$, and $x > 5$ is $(5, \infty)$, where $\infty$
("infinity") just means "going on forever". You will use this more in later levels.

<figure class="play" data-play="numline" data-mode="ineq"><span class="ai-tag">AI-created</span><figcaption><b>The answer is a ray.</b> Open dot for &lt; and &gt;, filled dot for ≤ and ≥.</figcaption></figure>

## Worked examples

**1. A two-step inequality.** Solve $3x - 4 > 11$ (done above): $x > 5$.

**2. A negative coefficient.** Solve $7 - 2x \le 13$.

- Subtract 7: $-2x \le 6$.
- Divide by $-2$, a negative number, so **flip** the sign: $x \ge -3$.
- Check the direction: $x = 0$ gives $7 \le 13$, true ✓ (0 is in $x \ge -3$). $x = -4$ gives $15 \le 13$, false ✓.
- Without flipping: add $2x$ and subtract 13 instead, $-6 \le 2x$, so $-3 \le x$. The same answer.

**3. $x$ on both sides.** Solve $5 - 2x \ge x - 7$.

- Add $2x$: $5 \ge 3x - 7$. Add 7: $12 \ge 3x$. Divide by 3: $4 \ge x$, that is, $x \le 4$.
- Check: $x = 4$ gives $-3 \ge -3$, true (boundary included). $x = 5$ gives $-5 \ge -2$, false. ✓

**4. A compound inequality.** Solve $-3 < 2x + 1 \le 7$ and list the whole numbers that work.

- As above: $-2 < x \le 3$. Whole numbers: $-1, 0, 1, 2, 3$.

**5. The fair.** Solve $8 + 3r \le 50$.

- Subtract 8: $3r \le 42$. Divide by 3: $r \le 14$.
- Rides come in whole numbers and cannot be negative, so the answer is **0 to 14 rides**. Check: 14 rides cost
  $8 + 42 = 50$ dollars exactly; 15 rides would cost 53.

## Try it

1. Solve $x + 7 < 12$ and show it on a number line.
2. Solve $4x - 3 \ge 13$.
3. Solve $10 - 3x > 1$.
4. Solve $2(x + 5) \le 5x - 2$.
5. Solve $1 \le 3x - 2 < 10$ and list the whole numbers that work.
6. Solve $-5 < 1 - 2x \le 3$.
7. Solve $\dfrac{x}{3} - 1 > \dfrac{x}{2}$.
8. A phone plan costs 20 dollars a month plus 10 cents per text. Your budget is 35 dollars. How many texts can you
   send?

??? note "Answers"
    1. Subtract 7: $x < 5$. Open dot at 5, shaded to the left.
    2. Add 3: $4x \ge 16$. Divide by 4: $x \ge 4$. Closed dot at 4, shaded to the right.
    3. Subtract 10: $-3x > -9$. Divide by $-3$ and flip: $x < 3$. Check: $x = 0$ gives $10 > 1$, true ✓; $x = 4$
       gives $-2 > 1$, false ✓.
    4. Expand: $2x + 10 \le 5x - 2$. Subtract $2x$ and add 2: $12 \le 3x$, so $x \ge 4$. Check $x = 4$:
       $18 \le 18$ ✓.
    5. Add 2 to all parts: $3 \le 3x < 12$. Divide by 3: $1 \le x < 4$. Whole numbers: 1, 2, 3.
    6. Subtract 1 from all parts: $-6 < -2x \le 2$. Divide all parts by $-2$ and flip both signs: $3 > x \ge -1$,
       which reads more naturally as $-1 \le x < 3$. Check $x = 0$: $1 - 0 = 1$, and $-5 < 1 \le 3$ ✓.
    7. Multiply every term by 6 (positive, no flip): $2x - 6 > 3x$. Subtract $2x$: $-6 > x$, so $x < -6$. Check
       $x = -12$: $-4 - 1 = -5$ and $-6$; is $-5 > -6$? Yes ✓. $x = 0$: $-1 > 0$ is false ✓.
    8. 10 cents is 0.10 dollars. $20 + 0.1t \le 35$, so $0.1t \le 15$ and $t \le 150$. Up to 150 texts.

## Common mistake

**Forgetting to flip.** From $-2x < 8$, dividing by $-2$ gives $x > -4$, not $x < -4$. Test a number to see it:
$x = 0$ makes $-2x < 8$ true ($0 < 8$), and 0 is in $x > -4$, not in $x < -4$. Whenever you divide by a negative, say
"flip" out loud.

**Flipping when you should not.** The sign flips only when you multiply or divide by a negative. Subtracting a
negative, or ending up with a negative answer like $x > -3$, does not flip anything. In $x + 5 < 2$, subtracting 5 gives
$x < -3$: no flip.

## Where it leads

- Previous: [Linear relations](04-linear-relations.md) · Next: [Modelling with equations](06-modelling-equations.md)
- [Level 5 page](index.md) · [Algebra topic page](../index.md)
- One-step inequalities and the first look at the flip: [Inequalities on the number line](../level-4/06-inequalities-number-line.md).
- Intervals and absolute value inequalities like $|x - 3| < 2$: [intervals and absolute value](../../numbers/level-7/06-intervals-absolute-value.md).
- Inequalities with $x^2$ and higher powers are solved with sign charts in level 8.
