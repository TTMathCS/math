---
title: "Equations with brackets and x on both sides"
---

# Equations with brackets and x on both sides

*Algebra · level 5, lesson 2 of 6*

## A question to start

Two candles are lit at the same moment. The first is 30 cm tall and burns down 2 cm every hour. The second is only
20 cm tall, but it is thicker and burns down just 1 cm every hour. The tall one starts ahead but shrinks faster. Is
there a moment when they are exactly the same height?

After $t$ hours the first candle is $30 - 2t$ cm tall and the second is $20 - t$ cm tall. They are the same height
when

$$30 - 2t = 20 - t.$$

This equation has the unknown on **both** sides. The level 4 method of "undo the steps in reverse" does not work
directly, because there is no single chain of steps to undo. This lesson gives you the one extra move you need, and
then handles brackets and fractions too. (The candles are solved in worked example 5.)

## The idea

### The balance, once more

An equation is a balance: the left side and the right side weigh the same. Anything you do to **both** sides keeps
it level. In level 4 you added, subtracted, multiplied and divided both sides by numbers. The new move is simple:

**You may add or subtract the same multiple of $x$ on both sides.**

Here is why it is allowed. Picture bags that each hold $x$ cubes (we do not know how many) and loose cubes. Take
$3x + 4 = x + 10$: three bags and 4 cubes balance one bag and 10 cubes.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 130" role="img" aria-label="A balance: three bags and four cubes on the left balance one bag and ten cubes on the right">
  <line x1="30" y1="60" x2="370" y2="60" stroke="currentColor" stroke-width="3"/>
  <polygon points="200,60 185,92 215,92" fill="none" stroke="currentColor" stroke-width="2"/>
  <g fill="#9cc9ea" stroke="currentColor" stroke-width="1.5">
    <rect x="40" y="30" width="24" height="30" rx="4"/><rect x="70" y="30" width="24" height="30" rx="4"/>
    <rect x="100" y="30" width="24" height="30" rx="4"/><rect x="214" y="30" width="24" height="30" rx="4"/>
  </g>
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <text x="52" y="50">x</text><text x="82" y="50">x</text><text x="112" y="50">x</text><text x="226" y="50">x</text>
  </g>
  <g fill="#7ccf9a" stroke="currentColor" stroke-width="1">
    <rect x="132" y="48" width="12" height="12"/><rect x="144" y="48" width="12" height="12"/>
    <rect x="156" y="48" width="12" height="12"/><rect x="168" y="48" width="12" height="12"/>
    <rect x="244" y="48" width="12" height="12"/><rect x="256" y="48" width="12" height="12"/>
    <rect x="268" y="48" width="12" height="12"/><rect x="280" y="48" width="12" height="12"/>
    <rect x="292" y="48" width="12" height="12"/><rect x="304" y="48" width="12" height="12"/>
    <rect x="316" y="48" width="12" height="12"/><rect x="328" y="48" width="12" height="12"/>
    <rect x="340" y="48" width="12" height="12"/><rect x="352" y="48" width="12" height="12"/>
  </g>
  <text x="110" y="115" font-size="13" text-anchor="middle" fill="currentColor">3x + 4</text>
  <text x="290" y="115" font-size="13" text-anchor="middle" fill="currentColor">x + 10</text>
</svg>
</div>

Lift one bag off each side. Both sides lose the same weight, so the balance stays level: $2x + 4 = 10$. Now it is a
level 4 equation. Take 4 cubes off each side: $2x = 6$. Share each side into two equal halves: $x = 3$. Each bag
holds 3 cubes.

**Check** in the original: left $3 \times 3 + 4 = 13$; right $3 + 10 = 13$. ✓

Taking away a bag is safe even though we do not know what is in it, because the bags on both sides are identical: we
remove exactly the same unknown amount from each side.

### A plan that always works

For any linear equation (one where $x$ appears only to the first power, with no $x^2$ and no $x$ underneath a
fraction):

1. **Clear fractions** if there are any, by multiplying every term by a common denominator.
2. **Expand brackets** using the distributive law.
3. **Collect** like terms on each side separately.
4. **Move** the $x$ terms to one side and the plain numbers to the other, doing the same to both sides.
5. **Divide** by the number in front of $x$.
6. **Check** by putting your answer into the **original** equation.

A tip for step 4: move the $x$ terms **towards the side that has more $x$'s**. Then the number in front of $x$ stays
positive. In $5x - 3 = 2x + 9$ the left has more $x$'s, so subtract $2x$ from both sides:

$$
\begin{aligned}
5x - 3 &= 2x + 9\\
3x - 3 &= 9 \qquad \text{(subtract } 2x \text{ from both sides)}\\
3x &= 12 \qquad \text{(add 3 to both sides)}\\
x &= 4 \qquad \text{(divide both sides by 3)}
\end{aligned}
$$

Check: $5 \times 4 - 3 = 17$ and $2 \times 4 + 9 = 17$. ✓

Notice the layout: one step per line, the equals signs lined up, and a short reason. A tidy layout is not just for
show: when you make a slip, it lets you find the exact line where it happened.

### Brackets first

If there are brackets, expand them before anything else, because the terms inside are locked up until you do.

$$3(x + 4) = 5x - 2 \quad\Rightarrow\quad 3x + 12 = 5x - 2.$$

Now the right side has more $x$'s. Subtract $3x$: $12 = 2x - 2$. Add 2: $14 = 2x$. So $x = 7$. Check: left
$3 \times 11 = 33$, right $35 - 2 = 33$. ✓ It is fine for $x$ to end up on the right; $14 = 2x$ means the same as
$2x = 14$.

### Fractions: multiply them away

Fractions are awkward to work with, so get rid of them at the start. Take

$$\frac{x}{3} + \frac{x}{4} = 7.$$

The **lowest common denominator** (LCD) of 3 and 4 is 12, the smallest number both divide into. Multiply **every
term** on both sides by 12:

$$12 \times \frac{x}{3} + 12 \times \frac{x}{4} = 12 \times 7 \quad\Rightarrow\quad 4x + 3x = 84.$$

So $7x = 84$ and $x = 12$. Check: $\tfrac{12}{3} + \tfrac{12}{4} = 4 + 3 = 7$. ✓

**Why this is allowed:** multiplying both sides of a balance by the same number (not zero) keeps it balanced; if
two amounts are equal, twelve times one equals twelve times the other. And by the distributive law, multiplying a whole
side by 12 means multiplying every term on that side by 12. Forgetting one term, often a plain number like the 7, is
the usual slip.

When the top of a fraction has more than one term, put it in brackets as soon as the fraction disappears:

$$\frac{x + 1}{2} - \frac{x - 2}{5} = 3 \quad\xrightarrow{\times 10}\quad 5(x + 1) - 2(x - 2) = 30.$$

The fraction bar was holding $x - 2$ together like a bracket, so the minus sign in front applies to all of it.
Expanding: $5x + 5 - 2x + 4 = 30$, so $3x + 9 = 30$, $3x = 21$, $x = 7$. Check:
$\tfrac{8}{2} - \tfrac{5}{5} = 4 - 1 = 3$. ✓

Decimals can be cleared the same way: multiply by 10 or 100 to make every number whole.

### Two surprises: no solution, and every solution

Sometimes the $x$'s vanish completely.

- $2x + 3 = 2x + 5$. Subtract $2x$: $3 = 5$. That is false, whatever $x$ is. The equation has **no solution**. In
  words: "twice a number plus 3" can never equal "twice the same number plus 5", because the right side is always 2
  bigger.
- $2(x + 1) = 2x + 2$. Expand: $2x + 2 = 2x + 2$. Subtract $2x$: $2 = 2$. That is true, whatever $x$ is. **Every
  number** is a solution. An equation that is true for every value is called an **identity**; it is really the
  distributive law in disguise.

So a linear equation has exactly one solution, no solution, or infinitely many. In level 6 you will see the same
three cases as pictures: two lines that cross once, never, or lie on top of each other.

## Worked examples

**1. Both sides.** Solve $7 - 2x = x + 1$.

- The right side has more $x$'s ($+x$ against $-2x$), so add $2x$ to both sides: $7 = 3x + 1$.
- Subtract 1: $6 = 3x$. Divide by 3: $x = 2$.
- Check: $7 - 4 = 3$ and $2 + 1 = 3$. ✓

**2. Brackets and a minus.** Solve $2(3x - 1) - (x - 4) = 4(x + 2)$.

- Expand. The minus in front of $(x - 4)$ flips both signs: $6x - 2 - x + 4 = 4x + 8$.
- Collect on the left: $5x + 2 = 4x + 8$.
- Subtract $4x$: $x + 2 = 8$. Subtract 2: $x = 6$.
- Check: left $2 \times 17 - 2 = 32$; right $4 \times 8 = 32$. ✓

**3. Fractions on both sides.** Solve $\dfrac{2x - 1}{3} = \dfrac{x + 4}{2}$.

- LCD of 3 and 2 is 6. Multiply both sides by 6: $2(2x - 1) = 3(x + 4)$.
- Expand: $4x - 2 = 3x + 12$. Subtract $3x$: $x - 2 = 12$. Add 2: $x = 14$.
- Check: $\tfrac{27}{3} = 9$ and $\tfrac{18}{2} = 9$. ✓

**4. Decimals.** Solve $0.2x + 1.5 = 0.5x - 0.3$.

- Multiply every term by 10: $2x + 15 = 5x - 3$.
- Subtract $2x$: $15 = 3x - 3$. Add 3: $18 = 3x$, so $x = 6$.
- Check: $1.2 + 1.5 = 2.7$ and $3 - 0.3 = 2.7$. ✓

**5. The candles.** Solve $30 - 2t = 20 - t$.

- Add $2t$ to both sides: $30 = 20 + t$. Subtract 20: $t = 10$.
- After 10 hours both candles are $30 - 20 = 10$ cm and $20 - 10 = 10$ cm tall. ✓
- Does the answer make sense? Yes: the first candle lasts 15 hours and the second 20, so both still exist at 10
  hours.

## Try it

1. Solve $7x + 2 = 3x + 18$.
2. Solve $4(x - 3) = 2x + 6$.
3. Solve $9 - 2x = 3x - 11$.
4. Solve $3(2x + 1) - 2(x - 5) = 25$.
5. Solve $\dfrac{x}{2} + \dfrac{x}{5} = 14$.
6. Solve $\dfrac{2x + 3}{5} = \dfrac{x - 1}{2}$.
7. Decide whether each has one solution, no solution or every number as a solution: (a) $3(x + 2) = 3x + 5$;
   (b) $2(x - 3) + 6 = 2x$; (c) $4x + 1 = 2x + 1$.
8. Tom is solving $5x = 3x$. He divides both sides by $x$ and gets $5 = 3$, so he says there is no solution. Is he
   right?

??? note "Answers"
    1. Subtract $3x$: $4x + 2 = 18$. Subtract 2: $4x = 16$, so $x = 4$. Check: $30 = 30$. ✓
    2. Expand: $4x - 12 = 2x + 6$. Subtract $2x$: $2x - 12 = 6$. Add 12: $2x = 18$, so $x = 9$. Check:
       $4 \times 6 = 24$ and $18 + 6 = 24$. ✓
    3. Add $2x$: $9 = 5x - 11$. Add 11: $20 = 5x$, so $x = 4$. Check: $9 - 8 = 1$ and $12 - 11 = 1$. ✓
    4. Expand: $6x + 3 - 2x + 10 = 25$. Collect: $4x + 13 = 25$, so $4x = 12$ and $x = 3$. Check:
       $3 \times 7 - 2 \times (-2) = 21 + 4 = 25$. ✓
    5. Multiply by 10: $5x + 2x = 140$, so $7x = 140$ and $x = 20$. Check: $10 + 4 = 14$. ✓
    6. Multiply by 10: $2(2x + 3) = 5(x - 1)$, so $4x + 6 = 5x - 5$. Subtract $4x$: $6 = x - 5$, so $x = 11$. Check:
       $\tfrac{25}{5} = 5$ and $\tfrac{10}{2} = 5$. ✓
    7. (a) $3x + 6 = 3x + 5$ gives $6 = 5$: **no solution**. (b) $2x - 6 + 6 = 2x$ gives $2x = 2x$: **every number**
       (an identity). (c) Subtract $2x$ and 1: $2x = 0$, so **one solution**, $x = 0$. Zero is a perfectly good
       answer.
    8. No. Dividing by $x$ is only allowed when $x$ is not 0, and $x = 0$ is exactly the solution he threw away:
       $5 \times 0 = 3 \times 0$. The safe way is to subtract $3x$: $2x = 0$, so $x = 0$. Never divide both sides by
       something that could be zero.

## Common mistake

**Moving a term without changing its sign.** "Moving $2x$ to the other side" is really subtracting $2x$ from both
sides, so it arrives with the opposite sign. Students who think of it as "moving" sometimes write
$5x - 3 = 2x + 9 \Rightarrow 5x + 2x = 9 - 3$, which is wrong twice. Say what you do to **both** sides, and the signs
look after themselves.

**Multiplying only some terms by the LCD.** In $\tfrac{x}{3} + \tfrac{x}{4} = 7$, multiplying by 12 gives
$4x + 3x = 84$, not $4x + 3x = 7$. Every term on both sides, including plain numbers, gets multiplied.

## Where it leads

- Previous: [The distributive law](01-distributive-law.md) · Next: [Rearranging formulas](03-rearranging-formulas.md)
- [Level 5 page](index.md) · [Algebra topic page](../index.md)
- The one-step and two-step methods this builds on: [Solving one- and two-step equations](../level-4/04-solving-equations.md).
- One solution, none or infinitely many comes back as pictures in
  [Linear systems by graphing](../level-6/04-systems-graphing.md).
- Lowest common denominators come from [adding fractions](../../numbers/level-4/01-adding-fractions.md).
