---
title: "Solving one- and two-step equations"
---

# Solving one- and two-step equations

*Algebra · level 4, lesson 4 of 7*

## A question to start

A balance scale holds 3 identical bags and 5 single marbles on the left, and 20 marbles on the right. It balances
perfectly. How many marbles are in each bag?

You can probably work it out: take 5 marbles off each side, so 3 bags balance 15 marbles; then each bag holds 5.
What you just did, written in algebra, is

$$3x + 5 = 20 \quad\Rightarrow\quad 3x = 15 \quad\Rightarrow\quad x = 5.$$

This lesson turns that balance thinking into a method that solves any one- or two-step equation, including ones with
negative numbers and fractions, where a real balance scale cannot help you any more.

## The idea

### What solving means

An **equation** says two expressions are equal, such as $3x + 5 = 20$. A **solution** is a value of the letter that
makes the equation true. $x = 5$ is a solution because $3 \times 5 + 5 = 20$ is true. $x = 4$ is not, because
$3 \times 4 + 5 = 17$, not 20. **Solving** means finding the solution.

### The balance rule

An equation is like a balanced scale: the left side "weighs" the same as the right side.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 165" role="img" aria-label="A balanced scale: three bags and five marbles on the left, twenty marbles on the right">
  <polygon points="210,145 192,160 228,160" fill="currentColor" opacity="0.6"/>
  <line x1="210" y1="145" x2="210" y2="60" stroke="currentColor" stroke-width="4"/>
  <line x1="40" y1="60" x2="380" y2="60" stroke="currentColor" stroke-width="4"/>
  <line x1="40" y1="110" x2="180" y2="110" stroke="currentColor" stroke-width="3"/>
  <line x1="240" y1="110" x2="380" y2="110" stroke="currentColor" stroke-width="3"/>
  <line x1="110" y1="60" x2="45" y2="110" stroke="currentColor"/><line x1="110" y1="60" x2="175" y2="110" stroke="currentColor"/>
  <line x1="310" y1="60" x2="245" y2="110" stroke="currentColor"/><line x1="310" y1="60" x2="375" y2="110" stroke="currentColor"/>
  <g fill="#eea66f" stroke="currentColor">
    <path d="M48,108 L48,88 Q48,82 54,82 L68,82 Q74,82 74,88 L74,108 Z"/>
    <path d="M78,108 L78,88 Q78,82 84,82 L98,82 Q104,82 104,88 L104,108 Z"/>
    <path d="M108,108 L108,88 Q108,82 114,82 L128,82 Q134,82 134,88 L134,108 Z"/>
  </g>
  <g font-size="12" text-anchor="middle" fill="currentColor"><text x="61" y="100">x</text><text x="91" y="100">x</text><text x="121" y="100">x</text></g>
  <g fill="#9cc9ea" stroke="currentColor">
    <circle cx="144" cy="103" r="5"/><circle cx="156" cy="103" r="5"/><circle cx="168" cy="103" r="5"/>
    <circle cx="150" cy="93" r="5"/><circle cx="162" cy="93" r="5"/>
  </g>
  <g fill="#7ccf9a" stroke="currentColor">
    <circle cx="256" cy="103" r="5"/><circle cx="268" cy="103" r="5"/><circle cx="280" cy="103" r="5"/><circle cx="292" cy="103" r="5"/><circle cx="304" cy="103" r="5"/>
    <circle cx="316" cy="103" r="5"/><circle cx="328" cy="103" r="5"/><circle cx="340" cy="103" r="5"/><circle cx="352" cy="103" r="5"/><circle cx="364" cy="103" r="5"/>
    <circle cx="262" cy="93" r="5"/><circle cx="274" cy="93" r="5"/><circle cx="286" cy="93" r="5"/><circle cx="298" cy="93" r="5"/><circle cx="310" cy="93" r="5"/>
    <circle cx="322" cy="93" r="5"/><circle cx="334" cy="93" r="5"/><circle cx="346" cy="93" r="5"/><circle cx="358" cy="93" r="5"/>
    <circle cx="310" cy="83" r="5"/>
  </g>
  <text x="105" y="135" font-size="14" text-anchor="middle" fill="currentColor">3x + 5</text>
  <text x="310" y="135" font-size="14" text-anchor="middle" fill="currentColor">20</text>
</svg>
</div>

> **Whatever you do to one side, do exactly the same to the other side, and the equation stays true.**

Why is this rule safe? If two numbers are equal, they are the **same** number written in two ways. Adding 7 to the
same number gives the same answer, whichever way it was written. The same goes for subtracting, multiplying, or
dividing (by anything except zero). So equal things stay equal.

### Inverse operations: the undo buttons

To get the letter on its own, you remove what has been done to it, using the **inverse** (opposite) operation:

| Done to $x$ | Undo it by |
| --- | --- |
| $+ 7$ | $- 7$ from both sides |
| $- 4$ | $+ 4$ to both sides |
| $\times 3$ | $\div 3$ on both sides |
| $\div 5$ | $\times 5$ on both sides |

### One-step equations

$x + 7 = 12$: subtract 7 from both sides. $x = 5$.

$\dfrac{x}{4} = 6$: multiply both sides by 4. $x = 24$.

Write each step on a new line, with the equals signs lined up, and say what you did to both sides:

$$
\begin{aligned}
x + 7 &= 12\\
x + 7 - 7 &= 12 - 7 \qquad \text{(subtract 7 from both sides)}\\
x &= 5
\end{aligned}
$$

### Two-step equations: undo in reverse order

In $3x - 5 = 16$, two things happened to $x$: first it was multiplied by 3, then 5 was subtracted. Like taking off
shoes before socks, undo the **last** thing first:

$$
\begin{aligned}
3x - 5 &= 16\\
3x &= 21 \qquad \text{(add 5 to both sides)}\\
x &= 7 \qquad \text{(divide both sides by 3)}
\end{aligned}
$$

This is the two-step machine from level 3, written as an equation. The order matters for the same reason: the "$-5$"
is on the outside, so it comes off first.

### Always check

Substitute your answer into the **original** equation. For $x = 7$: $3 \times 7 - 5 = 21 - 5 = 16$. ✓ If the check
fails, there is a mistake somewhere, and you know to look for it.

### Equations that need negatives and fractions

The balance rule works with any numbers, not only the ones a real scale can hold:

- $x + 9 = 4$: subtract 9 from both sides, $x = -5$. Check: $-5 + 9 = 4$. ✓
- $2x = 7$: divide both sides by 2, $x = \dfrac{7}{2} = 3.5$. Check: $2 \times 3.5 = 7$. ✓
- $-4x = 20$: divide both sides by $-4$, $x = -5$. Check: $-4 \times (-5) = 20$. ✓

### When the letter is subtracted

In $10 - x = 3$, the $x$ is being taken away. A neat way is to add $x$ to both sides first, so the letter becomes
positive: $10 = 3 + x$. Then subtract 3: $x = 7$. Check: $10 - 7 = 3$. ✓

## Worked examples

**1. One step.** Solve $x - 8 = 13$.

Add 8 to both sides: $x = 21$. Check: $21 - 8 = 13$. ✓

**2. Two steps.** Solve $4m + 9 = 37$.

- Subtract 9 from both sides: $4m = 28$.
- Divide both sides by 4: $m = 7$.
- Check: $4 \times 7 + 9 = 28 + 9 = 37$. ✓

**3. A fraction.** Solve $\dfrac{x}{3} + 4 = 10$.

- Subtract 4 from both sides: $\dfrac{x}{3} = 6$.
- Multiply both sides by 3: $x = 18$.
- Check: $18 \div 3 + 4 = 6 + 4 = 10$. ✓

**4. A negative answer.** Solve $5y + 12 = 2$.

- Subtract 12 from both sides: $5y = -10$.
- Divide both sides by 5: $y = -2$.
- Check: $5 \times (-2) + 12 = -10 + 12 = 2$. ✓

**5. Simplify first.** Solve $2x + 3x - 4 = 21$.

- Collect like terms: $5x - 4 = 21$.
- Add 4: $5x = 25$. Divide by 5: $x = 5$.
- Check: $10 + 15 - 4 = 21$. ✓

**6. A letter being subtracted.** Solve $20 - 3n = 8$.

- Add $3n$ to both sides: $20 = 8 + 3n$.
- Subtract 8: $12 = 3n$. Divide by 3: $n = 4$.
- Check: $20 - 12 = 8$. ✓

## Try it

1. Solve $x + 15 = 41$.
2. Solve $\dfrac{k}{6} = 7$.
3. Solve $2x + 11 = 35$.
4. Solve $7p - 3 = 46$.
5. Solve $\dfrac{a}{5} - 2 = 4$.
6. Solve $3w + 20 = 5$.
7. Solve $15 - 2y = 1$.
8. Sam solved $4x + 6 = 30$ like this: "$4x = 30 - 6 = 24$, so $x = 24 - 4 = 20$." Find his mistake and solve it
   correctly.

??? note "Answers"
    1. Subtract 15: $x = 26$. Check: $26 + 15 = 41$. ✓
    2. Multiply by 6: $k = 42$. Check: $42 \div 6 = 7$. ✓
    3. Subtract 11: $2x = 24$. Divide by 2: $x = 12$. Check: $24 + 11 = 35$. ✓
    4. Add 3: $7p = 49$. Divide by 7: $p = 7$. Check: $49 - 3 = 46$. ✓
    5. Add 2: $\dfrac{a}{5} = 6$. Multiply by 5: $a = 30$. Check: $30 \div 5 - 2 = 4$. ✓
    6. Subtract 20: $3w = -15$. Divide by 3: $w = -5$. Check: $3 \times (-5) + 20 = -15 + 20 = 5$. ✓
    7. Add $2y$: $15 = 1 + 2y$. Subtract 1: $14 = 2y$, so $y = 7$. Check: $15 - 14 = 1$. ✓
    8. $4x$ means 4 **times** $x$, so the undo is **divide** by 4, not subtract 4. $4x = 24$ gives $x = 6$. Check:
       $4 \times 6 + 6 = 30$. ✓ (His answer 20 gives $86$, not 30.)

## Common mistake

**Doing something to one side only.** Crossing out the $+5$ in $3x + 5 = 20$ without taking 5 from the 20 tips the
scale. Every step must happen on **both** sides.

**Using the wrong inverse.** $4x$ is undone by dividing by 4; $x + 4$ is undone by subtracting 4. Read the
expression aloud ("four times $x$") before choosing the undo button.

## Where it leads

- Previous: [Like terms](03-like-terms.md) · Next: [Equations from stories](05-equations-from-stories.md)
- [Level 4 page](index.md) · [Algebra topic page](../index.md)
- Back to the balance and the machines: [Level 3: two-step machines](../level-3/02-two-step-machines.md).
- In [level 5](../level-5/index.md) equations get brackets and the letter on both sides, like $5x - 3 = 2x + 9$.
  Angle problems like $2x + (x + 30) = 180$ use exactly this method:
  [Geometry level 4: angles on a straight line](../../geometry/level-4/01-straight-line-point.md).
