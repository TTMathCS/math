---
title: "The mind-reading trick explained"
---

# The mind-reading trick explained

*Algebra · level 4, lesson 7 of 7*

## A question to start

Here is a trick that looks even more magical than the one in level 3.

1. Write down a three-digit number whose first and last digits differ by at least 2, like 731.
2. Reverse it (137) and subtract the smaller from the bigger: $731 - 137 = 594$.
3. Reverse the answer (495) and add: $594 + 495 = 1089$.

Try another: 852. $852 - 258 = 594$ again, and $594 + 495 = 1089$. Try 920: $920 - 029 = 891$, and
$891 + 198 = 1089$. **Always 1089.** Why?

In level 3 you explained the "your answer is 5" trick with cups and counters. In this lesson you explain tricks with
algebra, which is the same idea written in a short, powerful form, strong enough to crack the 1089 trick too.

## The idea

### The trick in algebra

Here is the level 3 trick again: think of a number, double it, add 10, halve it, take away the number you first
thought of. Let the secret number be $n$. Follow it through, simplifying at each step:

| Step | Cups and counters | Algebra |
| --- | --- | --- |
| Think of a number | 1 cup | $n$ |
| Double it | 2 cups | $2n$ |
| Add 10 | 2 cups, 10 counters | $2n + 10$ |
| Halve it | 1 cup, 5 counters | $\dfrac{2n + 10}{2} = n + 5$ |
| Take away your number | 5 counters | $n + 5 - n = 5$ |

In one line:

$$\frac{2n + 10}{2} - n = n + 5 - n = 5.$$

The $n$ cancels out. Since $n$ could be **any** number, this is a proof that the answer is always 5. A cup was a
picture of $n$; algebra is the same reasoning without the drawing.

### Why $\dfrac{2n + 10}{2} = n + 5$

When you halve a sum, you can halve each part separately: half of $(2n + 10)$ is half of $2n$ plus half of 10. That
is because sharing a pile fairly between two people gives the same result whether you share it all at once or share
each kind of thing separately.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 140" role="img" aria-label="Two x bars and ten unit squares split by a dashed line into two equal groups, each with one bar and five squares">
  <rect x="20" y="20" width="360" height="90" rx="8" fill="none" stroke="currentColor"/>
  <line x1="200" y1="14" x2="200" y2="116" stroke="currentColor" stroke-dasharray="6 4" stroke-width="2"/>
  <g fill="#eea66f" stroke="currentColor" stroke-width="1.5">
    <rect x="40" y="35" width="18" height="60"/><rect x="220" y="35" width="18" height="60"/>
  </g>
  <g fill="#9cc9ea" stroke="currentColor">
    <rect x="75" y="75" width="18" height="18"/><rect x="97" y="75" width="18" height="18"/><rect x="119" y="75" width="18" height="18"/>
    <rect x="141" y="75" width="18" height="18"/><rect x="163" y="75" width="18" height="18"/>
    <rect x="255" y="75" width="18" height="18"/><rect x="277" y="75" width="18" height="18"/><rect x="299" y="75" width="18" height="18"/>
    <rect x="321" y="75" width="18" height="18"/><rect x="343" y="75" width="18" height="18"/>
  </g>
  <text x="110" y="132" font-size="13" text-anchor="middle" fill="currentColor">n + 5</text>
  <text x="290" y="132" font-size="13" text-anchor="middle" fill="currentColor">n + 5</text>
  <text x="200" y="10" font-size="11" text-anchor="middle" fill="currentColor">2n + 10 shared into two equal halves</text>
</svg>
</div>

This works for dividing by any number: $\dfrac{3n + 12}{3} = n + 4$, since $3n \div 3 = n$ and $12 \div 3 = 4$. But
it only works when **every** part is divided. $\dfrac{2n + 10}{2}$ is **not** $n + 10$.

### Testing versus proving

You could test the trick with 3, with 7, with 1000, and it would work every time. But testing a hundred numbers is
not a proof: there are infinitely many numbers, and the hundred-and-first might fail. The algebra handles all of
them at once, because $n$ stands for any number. That is the great power of algebra: it turns "it seems to work" into
"it must work".

Tests are still useful. A single test that fails is enough to prove a trick **doesn't** always work. And a test is a
good way to check your algebra.

### Inventing your own trick

To design a trick with a fixed answer, you need the secret number to **disappear**. A general recipe: multiply by
$a$, add $b$, divide by $a$, take away the number.

$$\frac{an + b}{a} - n = n + \frac{b}{a} - n = \frac{b}{a}.$$

The answer is $\dfrac{b}{a}$. To get a whole-number answer, choose $b$ to be a multiple of $a$. For an answer of 7
with $a = 3$, you need $b = 21$: "times 3, add 21, divide by 3, take away your number."

### A trick that reveals the number

Another kind of trick tells you the secret number. "Think of a number, multiply by 5, add 3, double it, take away 6.
Tell me the answer." Follow it:

$$2(5n + 3) - 6 = 10n + 6 - 6 = 10n.$$

The answer is always 10 times the secret number. If your friend says 370, you know their number was 37: just drop the
final 0.

### The 1089 trick, explained

Write the three-digit number with digits $a$, $b$, $c$. Because of place value, its value is $100a + 10b + c$. The
reversed number is $100c + 10b + a$. Suppose $a$ is the bigger end digit. Subtract:

$$(100a + 10b + c) - (100c + 10b + a) = 99a - 99c = 99(a - c).$$

The middle digit cancels! The difference is always 99 times the gap between the end digits. If that gap is $d$ (from
2 to 9), the difference is one of 198, 297, 396, 495, 594, 693, 792 or 891. Each of these has middle digit 9 and end
digits adding to 9: $99d = 100(d - 1) + 90 + (10 - d)$. Its reverse is $100(10 - d) + 90 + (d - 1)$. Add them:

$$100\big((d - 1) + (10 - d)\big) + 90 + 90 + \big((10 - d) + (d - 1)\big) = 100 \times 9 + 180 + 9 = 1089.$$

Every $d$ cancels, so the answer is always 1089. (If the end digits differ by 1, the difference is 99, a two-digit
number, and the trick needs 099 to work; that is why the rule asks for a gap of at least 2.)

## Worked examples

**1. Prove a trick.** "Think of a number, add 3, double it, take away 4, halve it, take away your number."

$$\frac{2(n + 3) - 4}{2} - n = \frac{2n + 6 - 4}{2} - n = \frac{2n + 2}{2} - n = n + 1 - n = 1.$$

Always 1. Test with $n = 10$: $13, 26, 22, 11, 1$. ✓

**2. A trick that fails.** "Think of a number, double it, add 8, take away your number." Is the answer fixed?

$2n + 8 - n = n + 8$. The $n$ is still there, so the answer depends on the number. With 1 it is 9; with 5 it is 13.
Not a trick.

**3. Design a trick.** Make a four-step trick with the answer 6, using "times 4".

Choose $b = 24$ (because $24 \div 4 = 6$): "times 4, add 24, divide by 4, take away your number."
$\dfrac{4n + 24}{4} - n = n + 6 - n = 6$. ✓ Test with 2: $8, 32, 8, 6$. ✓

**4. Your number back.** "Think of a number, add 5, double, take away 10, halve."
$\dfrac{2(n + 5) - 10}{2} = \dfrac{2n}{2} = n$. You always get your own number back.

**5. Two people's numbers.** "Double your number, add 1, multiply by 5, then add your friend's number (from 0 to 9).
Tell me the result." The result is $5(2n + 1) + m = 10n + 5 + m$. Take away 5 and you get $10n + m$: the tens digit
is your number and the units digit is your friend's. If they say 72, take away 5 to get 67: you chose 6 and your
friend chose 7.

## Try it

1. Prove with algebra: "think of a number, double it, add 16, halve it, take away your number" always gives 8.
2. Prove: "think of a number, times 3, add 12, divide by 3, take away your number" always gives 4.
3. Simplify $\dfrac{4n + 20}{4}$. Is it the same as $n + 20$? Test with $n = 1$.
4. Follow with algebra: "think of a number, add 7, times 2, take away 14". What do you always get?
5. Design a trick using "times 5" that always gives 3.
6. "Think of a number, add the next number up, add 9, halve it, take away your number." Prove the answer is always 5.
7. Do the 1089 trick with 642, and with 503.
8. Explain why the difference in the 1089 trick is always a multiple of 99, using $100a + 10b + c$.

??? note "Answers"
    1. $\dfrac{2n + 16}{2} - n = n + 8 - n = 8$.
    2. $\dfrac{3n + 12}{3} - n = n + 4 - n = 4$.
    3. $\dfrac{4n + 20}{4} = n + 5$. Not $n + 20$: with $n = 1$, $\dfrac{24}{4} = 6$, but $1 + 20 = 21$.
    4. $2(n + 7) - 14 = 2n + 14 - 14 = 2n$: always double your number.
    5. "Times 5, add 15, divide by 5, take away your number": $\dfrac{5n + 15}{5} - n = n + 3 - n = 3$.
    6. The next number up is $n + 1$. Then $n + (n + 1) + 9 = 2n + 10$, halved is $n + 5$, take away $n$: 5.
    7. 642: $642 - 246 = 396$, $396 + 693 = 1089$. 503: $503 - 305 = 198$, $198 + 891 = 1089$.
    8. The number is $100a + 10b + c$ and its reverse is $100c + 10b + a$. The difference is
       $99a - 99c = 99(a - c)$: the $10b$ cancels and what is left is 99 times a whole number.

## Common mistake

**Halving only part of an expression.** $\dfrac{2n + 10}{2}$ is $n + 5$, not $n + 10$ and not $2n + 5$. Every term on
top is divided by 2.

**Thinking tests are a proof.** Ten successful tests make a trick believable; only algebra (or cups and counters) for
a general $n$ makes it certain.

## Where it leads

- Previous: [Inequalities on the number line](06-inequalities-number-line.md)
- [Level 4 page](index.md) · [Algebra topic page](../index.md)
- Back to the cups and counters: [Level 3: a mind-reading trick](../level-3/06-mind-reading-trick.md).
- Next level: [Level 5: equations and linear relations](../level-5/index.md), starting with the distributive law
  $2(n + 3) = 2n + 6$ that these proofs use.
- Place value, which makes $100a + 10b + c$ work, is in [Numbers level 2: place value](../../numbers/level-2/01-place-value.md);
  divisibility by 9 and 11 tricks are in [Number theory](../../number-theory/index.md).
