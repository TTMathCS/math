---
title: "Other bases: binary, base 5 and hexadecimal"
---

# Other bases: binary, base 5 and hexadecimal

*Numbers · level 5, lesson 7 of 7*

## A question to start

There is an old joke: "There are 10 kinds of people in the world: those who understand binary, and those who don't."

If you did not laugh, that is fine, because by the end of this lesson you will be in on it. The trick is that "10"
does not always mean ten. It means "one group and nothing left over". In our usual counting, a group is ten things.
But nothing forces us to group in tens. Group in twos, and "10" means two. Every computer, phone and games console
does all its arithmetic in twos.

## The idea

### What base 10 really means

We write numbers in **base 10** (the **decimal** system). We have ten digits, 0 to 9, and each place is worth ten times
the place to its right:

$$3507 = 3 \times 1000 + 5 \times 100 + 0 \times 10 + 7 \times 1 = 3 \times 10^3 + 5 \times 10^2 + 0 \times 10^1 + 7 \times 10^0$$

The place values are the powers of 10 (with $10^0 = 1$ from lesson 4). Once you have ten of something in one place,
you bundle them into one of the next place. That is why counting goes $\ldots, 8, 9, 10$: after 9 you run out of
digits, so you write "one ten and no ones".

Ten is a natural choice because we have ten fingers. But the whole idea works with **any** whole number bigger than 1
as the group size, called the **base**.

### Base 5

In **base 5** we bundle in fives. There are only five digits, 0 to 4, and the places are powers of 5:

| $5^3 = 125$ | $5^2 = 25$ | $5^1 = 5$ | $5^0 = 1$ |
| --- | --- | --- | --- |
| one-hundred-twenty-fives | twenty-fives | fives | ones |

Counting in base 5 goes: 1, 2, 3, 4, **10** (one five, no ones), 11, 12, 13, 14, **20**, 21, ..., 44, **100** (one
twenty-five). To show the base, we write it small at the bottom right: $243_5$ means "243 in base 5". It is read
"two four three, base five", not "two hundred and forty-three", because it is not two hundreds.

**Base 5 to base 10.** Multiply each digit by its place value and add:

$$243_5 = 2 \times 25 + 4 \times 5 + 3 \times 1 = 50 + 20 + 3 = 73$$

**Base 10 to base 5.** Divide by 5 again and again, and keep the remainders:

| division | quotient | remainder |
| --- | --- | --- |
| $73 \div 5$ | 14 | **3** |
| $14 \div 5$ | 2 | **4** |
| $2 \div 5$ | 0 | **2** |

Read the remainders from the **bottom up**: $243_5$. ✓

**Why does this work?** Dividing 73 by 5 sorts 73 counters into 14 bundles of five, with 3 left over: the 3 left over
is the ones digit. Then dividing the 14 bundles by 5 sorts them into 2 bundles of twenty-five, with 4 bundles of five
left over: that is the fives digit. And the 2 big bundles give the twenty-fives digit. Each division is one round of
bundling.

### Binary: base 2

In **base 2**, also called **binary**, there are just two digits, 0 and 1, and the places are powers of 2:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 120" role="img" aria-label="Six place value boxes labelled 32, 16, 8, 4, 2 and 1 holding the binary digits 1, 0, 1, 1, 0, 1; the boxes holding 1 are shaded, and they add to 32 plus 8 plus 4 plus 1 equals 45">
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <text x="55" y="22">32</text><text x="117" y="22">16</text><text x="179" y="22">8</text>
    <text x="241" y="22">4</text><text x="303" y="22">2</text><text x="365" y="22">1</text>
  </g>
  <g stroke="currentColor" stroke-width="2">
    <rect x="30" y="30" width="50" height="50" fill="#eea66f"/>
    <rect x="92" y="30" width="50" height="50" fill="none"/>
    <rect x="154" y="30" width="50" height="50" fill="#9cc9ea"/>
    <rect x="216" y="30" width="50" height="50" fill="#7ccf9a"/>
    <rect x="278" y="30" width="50" height="50" fill="none"/>
    <rect x="340" y="30" width="50" height="50" fill="#eea66f"/>
  </g>
  <g font-size="24" text-anchor="middle" fill="currentColor">
    <text x="55" y="64">1</text><text x="117" y="64">0</text><text x="179" y="64">1</text>
    <text x="241" y="64">1</text><text x="303" y="64">0</text><text x="365" y="64">1</text>
  </g>
  <text x="210" y="108" font-size="13" text-anchor="middle" fill="currentColor">101101₂ = 32 + 8 + 4 + 1 = 45</text>
</svg>
</div>

Each place either holds that power of 2 (digit 1) or does not (digit 0). So writing a number in binary is the same as
writing it as a sum of **different powers of 2**. For example $45 = 32 + 8 + 4 + 1$, so $45 = 101101_2$.

Counting in binary: 1, 10, 11, 100, 101, 110, 111, 1000, ... Each time a place reaches 2, it bundles into the next,
just as 9 + 1 rolls over to 10 in base 10. Now the joke makes sense: "10 kinds of people" means **two** kinds.

To convert to binary, you can divide by 2 again and again (as with base 5), or take away the biggest power of 2 that
fits, again and again. For 45: take away 32 (13 left), then 8 (5 left), then 4 (1 left), then 1. Put 1s in the 32, 8,
4 and 1 places, and 0s elsewhere.

### Why computers use binary

A computer stores information in billions of tiny electronic switches. Each switch is in one of two states: on or off,
high voltage or low voltage. Telling apart **two** states is easy and reliable, even if the voltages wobble a bit.
Telling apart ten different levels would be much harder and give more mistakes. So each switch holds one binary digit,
called a **bit** (short for **bi**nary dig**it**).

Eight bits make a **byte**. A byte can hold any number from $00000000_2 = 0$ up to $11111111_2 = 255$. That is
$2^8 = 256$ different values: each of the 8 bits has 2 choices, and $2 \times 2 \times \cdots \times 2 = 2^8$.

### Adding in binary

Binary adding uses the same column method as base 10, with very few facts to learn:

$$0 + 0 = 0 \qquad 0 + 1 = 1 \qquad 1 + 1 = 10_2 \qquad 1 + 1 + 1 = 11_2$$

When a column makes $10_2$ (that is, two), write 0 and carry 1, just as you carry when a column makes ten in base 10.

$$
\begin{array}{r}
1011 \\
+\ \ 110 \\
\hline
10001
\end{array}
$$

Working right to left: $1 + 0 = 1$; $1 + 1 = 10$, write 0 carry 1; $0 + 1 + 1 = 10$, write 0 carry 1;
$1 + 0 + 1 = 10$, write 0 carry 1; the carried 1 drops down. Check in base 10: $1011_2 = 11$, $110_2 = 6$, and
$10001_2 = 16 + 1 = 17$. ✓ A computer's adding circuit does exactly this, one column at a time.

### Hexadecimal: base 16

Long strings of 0s and 1s are hard for people to read. Programmers often use **base 16**, called **hexadecimal** or
**hex**. It needs sixteen digits, so after 0 to 9 it borrows letters:

| A | B | C | D | E | F |
| --- | --- | --- | --- | --- | --- |
| 10 | 11 | 12 | 13 | 14 | 15 |

The places are $1, 16, 256, \ldots$ So $2\text{F}_{16} = 2 \times 16 + 15 = 47$, and $\text{FF}_{16} = 15 \times 16 +
15 = 255$.

Why 16? Because $16 = 2^4$, so **each hex digit stands for exactly 4 bits**: $\text{F} = 1111_2$ and
$\text{FF}_{16} = 11111111_2$, a full byte. You may have seen colours written like `#FF8800` on web pages: three
bytes in hex, saying how much red (FF = 255, the most), green (88 = 136) and blue (00 = none). That one is an orange.

### Other bases in history

People have used other bases. In level 2 you met the **Maya** numerals, which grouped in twenties. The
**Babylonians**, about 4000 years ago, wrote numbers in base 60, and we still use their sixties every day: 60 seconds
in a minute, 60 minutes in an hour, and 60 minutes of arc in a degree.

## Worked examples

**1. Base 5 to base 10.** Convert $1324_5$.

1. Place values from the right: 1, 5, 25, 125.
2. $1 \times 125 + 3 \times 25 + 2 \times 5 + 4 \times 1 = 125 + 75 + 10 + 4 = 214$.

**2. Base 10 to binary.** Convert 50.

1. $50 \div 2 = 25$ r **0**; $25 \div 2 = 12$ r **1**; $12 \div 2 = 6$ r **0**; $6 \div 2 = 3$ r **0**;
   $3 \div 2 = 1$ r **1**; $1 \div 2 = 0$ r **1**.
2. Read the remainders from the bottom up: $110010_2$.
3. Check: $32 + 16 + 2 = 50$. ✓

**3. Binary addition.** Work out $1101_2 + 1011_2$.

1. Right column: $1 + 1 = 10$: write 0, carry 1.
2. Next: $0 + 1 + 1 = 10$: write 0, carry 1.
3. Next: $1 + 0 + 1 = 10$: write 0, carry 1.
4. Next: $1 + 1 + 1 = 11$: write 1, carry 1. The carry drops down.
5. Answer: $11000_2$. Check: $13 + 11 = 24 = 16 + 8$. ✓

**4. Base 10 to hex.** Convert 200.

1. $200 \div 16 = 12$ remainder 8.
2. 12 is the digit C. So $200 = \text{C8}_{16}$.
3. Check: $12 \times 16 + 8 = 192 + 8 = 200$. ✓

**5. How many values?** A small sensor sends readings using 10 bits. How many different readings can it send?

Each bit has 2 choices, so $2^{10} = 1024$ different readings: from 0 to 1023.

## Try it

1. Count from 1 to 12 in base 5.
2. Convert to base 10: (a) $31_5$ (b) $1101_2$ (c) $100000_2$ (d) $1\text{A}_{16}$
3. Convert 50 to base 5.
4. Work out in binary: (a) $111_2 + 1_2$ (b) $10110_2 + 1111_2$. Check each in base 10.
5. Convert 255 and 4096 to hexadecimal.
6. What is the largest number you can write with 8 binary digits? Why is it $2^8 - 1$?
7. In base 5, what is $44_5 + 1$? Explain why the answer looks so neat.
8. Which numbers end in 0 when written in binary? Which numbers end in 0 when written in base 5? Explain.

??? note "Answers"
    1. 1, 2, 3, 4, 10, 11, 12, 13, 14, 20, 21, 22.
    2. (a) $3 \times 5 + 1 = 16$. (b) $8 + 4 + 0 + 1 = 13$. (c) $2^5 = 32$. (d) $1 \times 16 + 10 = 26$.
    3. $50 \div 5 = 10$ r 0; $10 \div 5 = 2$ r 0; $2 \div 5 = 0$ r 2. So $200_5$. Check: $2 \times 25 = 50$. ✓
    4. (a) Every column carries: $1000_2$. Check: $7 + 1 = 8$. ✓ (b) Right to left: $0+1 = 1$; $1+1 = 10$, write 0
       carry 1; $1+1+1 = 11$, write 1 carry 1; $0+1+1 = 10$, write 0 carry 1; $1+0+1 = 10$, write 0 carry 1; the
       carry drops down. Answer $100101_2$. Check: $22 + 15 = 37 = 32 + 4 + 1$. ✓
    5. $255 = 15 \times 16 + 15 = \text{FF}_{16}$. $4096 = 16^3$, so it is $1000_{16}$.
    6. $11111111_2 = 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255$. Adding 1 to it makes every column carry, giving
       $100000000_2 = 2^8 = 256$. So it is one less than $2^8$.
    7. $44_5 = 4 \times 5 + 4 = 24$, and $24 + 1 = 25 = 100_5$. It looks neat for the same reason that
       $99 + 1 = 100$ in base 10: 4 is the biggest digit in base 5, so both places roll over.
    8. A number ends in 0 in binary exactly when it has no 1 in the ones place, that is, when it is a sum of 2s, 4s,
       8s and so on: the **even** numbers. In base 5, a number ends in 0 exactly when it is a **multiple of 5**. In
       general, the last digit in base $b$ is the remainder when you divide by $b$.

## Common mistake

**Reading a base-5 or binary number as if it were base 10.** $101_2$ is five, not one hundred and one. Always ask
"what is each place worth?" before you read a number in another base.

**Writing the remainders in the wrong order.** In the dividing method, the **first** remainder is the **ones** digit,
so it goes on the right. Read the remainders from the bottom of your list to the top, and check your answer by
converting back.

## Where it leads

- Back: [Square roots and cube roots](06-square-roots.md) · Next: [Level 6: the real numbers](../level-6/index.md),
  starting with [repeating decimals](../level-6/01-repeating-decimals.md).
- [Level 5 page](index.md) · [Numbers topic page](../index.md)
- Old ways of writing numbers, including the Maya base 20: [level 2](../level-2/index.md).
- The last digit in any base is a remainder: remainders and "clock arithmetic" are in [Number theory](../../number-theory/index.md).
- With 8 bits you can make $2^8$ patterns: that kind of counting is in [Counting](../../counting/index.md).
- How a computer turns bits into numbers, and why $0.1 + 0.2$ is not exactly $0.3$ there:
  [CSC108 Unit 10 (floating point)](../../../uoft/CSC108H1/unit10.md).
