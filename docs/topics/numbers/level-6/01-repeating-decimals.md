---
title: "Repeating decimals to fractions"
---

# Repeating decimals to fractions

*Numbers · level 6, lesson 1 of 7*

## A question to start

Divide 1 by 7 on a calculator and you get $0.142857142857\ldots$: the block 142857 over and over. Divide 1 by 3 and
you get $0.333\ldots$ forever. Divide 1 by 8 and you get $0.125$, which simply stops.

Two puzzles. First, going the other way: if someone hands you $0.272727\ldots$, which fraction is it? Second, a
deeper one: is it just luck that every fraction we try either stops or repeats? Could some fraction, say with a huge
bottom number, produce digits that wander forever with no pattern? This lesson answers both, and the answer to the
second is a firm **no**, with a reason you can check yourself.

## The idea

### Words and notation

When you turn a fraction into a decimal by dividing the top by the bottom (level 4), one of two things happens:

- the division **stops**: $\tfrac18 = 0.125$. This is a **terminating decimal**;
- the division never stops, and a block of digits repeats forever: $\tfrac17 = 0.142857142857\ldots$ This is a
  **repeating decimal** (also called a **recurring decimal**).

The repeating block is called the **period**, and its number of digits is the **period length**. We mark it with a bar
over the block:

$$\tfrac13 = 0.\overline{3} \qquad \tfrac17 = 0.\overline{142857} \qquad \tfrac{7}{55} = 0.1\overline{27}$$

In the last one, the 1 does not repeat; only the 27 does. It means $0.1272727\ldots$

### From a repeating decimal to a fraction: one repeating digit

Take $x = 0.777\ldots$ The trick is to make a second copy of $x$ with **the same endless tail**, then subtract so
that the tails cancel.

$$
\begin{array}{rl}
10x &= 7.777\ldots \\
x &= 0.777\ldots \\
\hline
10x - x &= 7
\end{array}
$$

So $9x = 7$, and $x = \tfrac79$. Check: $7 \div 9 = 0.777\ldots$ ✓

**Why does the subtraction work?** Multiplying by 10 moves every digit one place left. Because the 7s go on forever,
after the shift there are **still** 7s in every decimal place. So $10x$ and $x$ have exactly the same digits after
the point, and subtracting removes all of them, leaving a whole number. With a decimal that stopped, nothing so neat
would happen; here the endlessness is exactly what makes it work.

### Longer blocks: shift by the block length

For $x = 0.272727\ldots$ the block "27" has 2 digits. Shifting by one place would line up 2s under 7s, which does not
cancel. So shift by **two** places: multiply by $10^2 = 100$.

$$
\begin{array}{rl}
100x &= 27.2727\ldots \\
x &= 0.2727\ldots \\
\hline
99x &= 27
\end{array}
$$

So $x = \tfrac{27}{99} = \tfrac{3}{11}$ (dividing top and bottom by 9).

The general rule: **if the block has $k$ digits, multiply by $10^k$**. A useful shortcut follows. A decimal that
repeats from straight after the point is the block over that many 9s:

$$0.\overline{7} = \frac{7}{9} \qquad 0.\overline{27} = \frac{27}{99} \qquad 0.\overline{123} = \frac{123}{999} \qquad 0.\overline{142857} = \frac{142857}{999999} = \frac17$$

### A delay before the repeat

$x = 0.1272727\ldots = 0.1\overline{27}$. The 1 gets in the way. Use **two** shifts: one that moves the non-repeating
part in front of the point, and one more that moves a whole block as well.

1. $10x = 1.272727\ldots$ (now the repeating part starts right after the point).
2. $1000x = 127.272727\ldots$ (two more places: one whole block).
3. Subtract: $1000x - 10x = 127.2727\ldots - 1.2727\ldots = 126$.
4. So $990x = 126$, and $x = \tfrac{126}{990} = \tfrac{7}{55}$ (dividing by 18).

Check: $7 \div 55 = 0.12727\ldots$ ✓

### So every repeating decimal is a fraction

Look at what the method always does. However long the delay and however long the block, the two shifted copies have
identical tails, and subtracting leaves

$$(\text{some power of 10} - \text{another power of 10}) \times x = \text{a whole number}$$

Dividing gives $x$ as a whole number over a whole number. So **every repeating decimal is a fraction**. (Terminating
decimals are fractions too: $0.125 = \tfrac{125}{1000}$.)

### Now the other way: why every fraction must stop or repeat

Here is the deeper question. Why can a fraction never give endless digits **without** a pattern? Watch the
**remainders** in the long division of $1 \div 7$:

| step | divide | digit | remainder |
| --- | --- | --- | --- |
| 1 | $10 \div 7$ | 1 | 3 |
| 2 | $30 \div 7$ | 4 | 2 |
| 3 | $20 \div 7$ | 2 | 6 |
| 4 | $60 \div 7$ | 8 | 4 |
| 5 | $40 \div 7$ | 5 | 5 |
| 6 | $50 \div 7$ | 7 | **1** |
| 7 | $10 \div 7$ | 1 | 3 |

At step 6 the remainder is 1 again, which is where we started. Two things are now certain.

**Each step depends only on the remainder before it.** Once the digits of the top number are used up, every step
"brings down a 0": it takes the remainder, puts a 0 after it (multiplies by 10), and divides by 7. So the same
remainder always leads to the same digit and the same next remainder. Once a remainder comes back, everything after it
repeats, forever.

**A remainder must come back.** When you divide by 7, the remainder is always one of $0, 1, 2, 3, 4, 5, 6$. If it is
ever 0, the division stops: a terminating decimal. If not, there are only **six** possible remainders, 1 to 6. In
seven steps you cannot have seven different remainders from only six choices, so some remainder must appear twice.
(This "more steps than choices" idea is called the **pigeonhole principle**: put 7 letters into 6 pigeonholes and some
hole gets two.)

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 200" role="img" aria-label="The six remainders 1, 3, 2, 6, 4, 5 of dividing by 7 arranged in a circle, with arrows from each to the next labelled with the digits 1, 4, 2, 8, 5, 7, and the last arrow returning to 1">
  <circle cx="200" cy="100" r="70" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/>
  <g stroke="currentColor" stroke-width="1.5">
    <circle cx="200" cy="30" r="15" fill="#eea66f"/>
    <circle cx="260.6" cy="65" r="15" fill="#9cc9ea"/>
    <circle cx="260.6" cy="135" r="15" fill="#7ccf9a"/>
    <circle cx="200" cy="170" r="15" fill="#eea66f"/>
    <circle cx="139.4" cy="135" r="15" fill="#9cc9ea"/>
    <circle cx="139.4" cy="65" r="15" fill="#7ccf9a"/>
  </g>
  <g font-size="14" text-anchor="middle" fill="currentColor">
    <text x="200" y="35">1</text><text x="260.6" y="70">3</text><text x="260.6" y="140">2</text>
    <text x="200" y="175">6</text><text x="139.4" y="140">4</text><text x="139.4" y="70">5</text>
  </g>
  <g font-size="13" text-anchor="middle" fill="currentColor" font-weight="bold">
    <text x="245" y="37">1</text><text x="288" y="104">4</text><text x="245" y="173">2</text>
    <text x="155" y="173">8</text><text x="112" y="104">5</text><text x="155" y="37">7</text>
  </g>
  <text x="330" y="30" font-size="11" fill="currentColor">circles: remainders</text>
  <text x="330" y="46" font-size="11" fill="currentColor">bold: digits</text>
  <text x="70" y="190" font-size="11" text-anchor="middle" fill="currentColor">1/7 = 0.142857...</text>
</svg>
</div>

The same argument works for any denominator $q$. The remainders can only be $0, 1, \ldots, q - 1$. Either a 0 turns
up and the decimal stops, or within $q$ steps some non-zero remainder repeats and the digits cycle. So:

**Every fraction gives a terminating or a repeating decimal, and its repeating block is at most $q - 1$ digits long.**

For $\tfrac17$ the block has the longest possible length, $7 - 1 = 6$. For $\tfrac{1}{13}$ it could have had 12
digits, but it has only 6: $0.\overline{076923}$, because the remainders come back sooner.

The cycle picture gives a bonus: the decimals of $\tfrac27$, $\tfrac37, \ldots$ use the **same** cycle, just starting
at a different remainder. $\tfrac27$ starts at remainder 2, so it reads the cycle from there: $0.\overline{285714}$.

### Putting both halves together

$$\text{fractions} \quad \longleftrightarrow \quad \text{decimals that terminate or repeat}$$

The arrow goes both ways. This is exactly what you need for the next lesson: a decimal that **never** repeats cannot be
a fraction.

### And $0.999\ldots$?

Use the method on $x = 0.\overline{9}$: $10x = 9.999\ldots$, so $9x = 9$, and $x = 1$. So $0.999\ldots = 1$. This
surprises many people, but it is not a trick: they are two ways of writing the **same number**, as $\tfrac12$ and
$\tfrac24$ are. Another way to see it: $\tfrac13 = 0.333\ldots$, and three times both sides gives $1 = 0.999\ldots$. If
they were different numbers, there would have to be a number between them (lesson 2 of level 5), and you cannot
squeeze anything between $0.999\ldots$ and 1.

## Worked examples

**1.** Write $0.\overline{36}$ as a fraction in lowest terms.

1. The block "36" has 2 digits, so multiply by 100: $100x = 36.3636\ldots$
2. Subtract $x$: $99x = 36$, so $x = \tfrac{36}{99}$.
3. Divide top and bottom by 9: $\tfrac{4}{11}$. Check: $4 \div 11 = 0.3636\ldots$ ✓

**2.** Write $2.\overline{3}$ as a fraction.

1. $x = 2.333\ldots$, $10x = 23.333\ldots$, so $9x = 21$ and $x = \tfrac{21}{9} = \tfrac73$.
2. Or: $2.\overline{3} = 2 + 0.\overline{3} = 2 + \tfrac13 = \tfrac73$. Both ways agree. ✓

**3.** Write $0.4\overline{6}$ (that is, $0.4666\ldots$) as a fraction.

1. $10x = 4.666\ldots$ (repeating part now starts right after the point).
2. $100x = 46.666\ldots$ (one more place, one whole block).
3. $100x - 10x = 42$, so $90x = 42$ and $x = \tfrac{42}{90} = \tfrac{7}{15}$.

**4.** Find the decimal for $\tfrac37$ without dividing again.

$\tfrac37$ starts with remainder 3. In the cycle 1 → 3 → 2 → 6 → 4 → 5 → 1, starting from 3 gives the digits
4, 2, 8, 5, 7, 1. So $\tfrac37 = 0.\overline{428571}$. ✓

**5.** Without working it out, what is the longest the repeating block of $\tfrac{1}{17}$ could be?

There are 16 possible non-zero remainders, so at most **16** digits. (In fact it is exactly 16:
$\tfrac{1}{17} = 0.\overline{0588235294117647}$.)

## Try it

1. Write $0.\overline{4}$ as a fraction.
2. Write $0.\overline{81}$ as a fraction in lowest terms.
3. Write $0.\overline{123}$ as a fraction in lowest terms.
4. Write $0.1\overline{6}$ as a fraction. (You may recognise it.)
5. Write $3.\overline{12}$ as a fraction.
6. Show that $0.4\overline{9}$ (that is, $0.4999\ldots$) equals $\tfrac12$.
7. Use the remainder cycle for sevenths to write down $\tfrac57$ as a decimal.
8. Explain why the decimal for $\tfrac{1}{23}$ must repeat with a block of at most 22 digits.

??? note "Answers"
    1. $10x = 4.444\ldots$, so $9x = 4$ and $x = \tfrac49$.
    2. $100x - x = 81$, so $x = \tfrac{81}{99} = \tfrac{9}{11}$.
    3. $1000x - x = 123$, so $x = \tfrac{123}{999} = \tfrac{41}{333}$ (dividing by 3).
    4. $10x = 1.666\ldots$ and $100x = 16.666\ldots$, so $90x = 15$ and $x = \tfrac{15}{90} = \tfrac16$.
    5. $3.\overline{12} = 3 + \tfrac{12}{99} = 3 + \tfrac{4}{33} = \tfrac{99}{33} + \tfrac{4}{33} = \tfrac{103}{33}$.
    6. $10x = 4.999\ldots$ and $100x = 49.999\ldots$, so $90x = 45$ and $x = \tfrac{45}{90} = \tfrac12$. So
       $0.4999\ldots$ and $0.5$ are the same number.
    7. Start the cycle at remainder 5: the next digits are 7, 1, 4, 2, 8, 5. So $\tfrac57 = 0.\overline{714285}$.
       (Check: $5 \div 7 = 0.714\ldots$ ✓)
    8. When dividing by 23, the remainders can only be 0 to 22. 23 does not divide $1 \times 10^n$, so the remainder
       is never 0 (it never stops). That leaves 22 possible remainders, so within 23 steps one must repeat, and the
       block has at most 22 digits. (In fact it has exactly 22.)

## Common mistake

**Multiplying by 10 when the block is longer than one digit.** For $0.\overline{27}$, $10x = 2.7272\ldots$ does not
line up with $x = 0.2727\ldots$, and subtracting does not cancel the tails. Multiply by $10^k$, where $k$ is the
length of the block.

**Thinking $0.999\ldots$ is "just less than 1".** It is not a number creeping towards 1; it is a fixed number, and it
equals 1. Writing it with a never-ending row of 9s is just an unusual name for 1.

## Where it leads

- Back: [Level 5](../level-5/index.md), ending with [other bases](../level-5/07-other-bases.md) · Next:
  [Rational and irrational numbers](02-rational-irrational.md)
- [Level 6 page](index.md) · [Numbers topic page](../index.md)
- The pigeonhole principle has many surprising uses: [Counting](../../counting/index.md).
- Which fractions terminate (denominators made only of 2s and 5s) and why the period length of $\tfrac1q$ divides
  $q - 1$ when $q$ is a prime other than 2 and 5: [Number theory](../../number-theory/index.md).
- $0.999\ldots = 0.9 + 0.09 + 0.009 + \cdots$ is an infinite geometric series: [Patterns](../../patterns/index.md) and
  [Infinity](../../infinity/index.md). At university: [MAT137 Unit 13 (series)](../../../uoft/MAT137/unit13.md).
