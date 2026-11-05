---
title: "Working backwards"
---

# Working backwards

*Patterns and sequences · level 5, lesson 2 of 6*

## A question to start

Someone wrote out an arithmetic sequence and then spilled water on the page. Only two numbers survive:

> the **5th** term is **17**, and the **12th** term is **45**.

Can you rebuild the whole sequence, every term, from just these two? And here is a sharper question: is **300**
somewhere in that sequence? You will not find it by writing out terms for a long time. One short calculation answers
it for sure.

## The idea

### Two numbers decide everything

In lesson 1 you saw that an arithmetic sequence is fixed completely by two numbers: the first term $a$ and the
common difference $d$. So if we can find $a$ and $d$, we know every term. The surprise is that **any two terms**, not
only the first two, are enough to find them.

### Step 1: count the jumps between the two terms

From the 5th term to the 12th term there are $12 - 5 = 7$ jumps of size $d$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 110" role="img" aria-label="Positions 5 to 12 on a line, with seven equal jumps from 17 at position 5 to 45 at position 12">
  <line x1="20" y1="60" x2="310" y2="60" stroke="currentColor" stroke-width="2"/>
  <path d="M 40 56 Q 57.5 30 75 56" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <path d="M 75 56 Q 92.5 30 110 56" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <path d="M 110 56 Q 127.5 30 145 56" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <path d="M 145 56 Q 162.5 30 180 56" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <path d="M 180 56 Q 197.5 30 215 56" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <path d="M 215 56 Q 232.5 30 250 56" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <path d="M 250 56 Q 267.5 30 285 56" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <circle cx="40" cy="60" r="6" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="75" cy="60" r="3" fill="currentColor"/>
  <circle cx="110" cy="60" r="3" fill="currentColor"/>
  <circle cx="145" cy="60" r="3" fill="currentColor"/>
  <circle cx="180" cy="60" r="3" fill="currentColor"/>
  <circle cx="215" cy="60" r="3" fill="currentColor"/>
  <circle cx="250" cy="60" r="3" fill="currentColor"/>
  <circle cx="285" cy="60" r="6" fill="#9cc9ea" stroke="currentColor"/>
  <text x="40" y="82" font-size="12" text-anchor="middle" fill="currentColor">t₅ = 17</text>
  <text x="285" y="82" font-size="12" text-anchor="middle" fill="currentColor">t₁₂ = 45</text>
  <text x="162.5" y="22" font-size="12" text-anchor="middle" fill="currentColor">7 jumps of d</text>
  <text x="162.5" y="100" font-size="12" text-anchor="middle" fill="currentColor">7d = 45 − 17 = 28</text>
</svg>
</div>

The terms climbed by $45 - 17 = 28$ in those 7 jumps, so each jump is

$$d = \frac{45 - 17}{12 - 5} = \frac{28}{7} = 4.$$

In general, for any two terms $t_m$ and $t_k$ (with $m < k$):

$$d = \frac{t_k - t_m}{k - m} = \frac{\text{change in term}}{\text{change in position}}$$

If you have met the slope of a line, this is exactly the slope between the two points $(m, t_m)$ and $(k, t_k)$. That
makes sense: the points of an arithmetic sequence lie on a straight line whose slope is $d$.

### Step 2: walk back to the first term

The 5th term is 4 jumps after the first, so going **back** 4 jumps from 17:

$$a = 17 - 4 \times 4 = 1.$$

The sequence is 1, 5, 9, 13, **17**, 21, 25, 29, 33, 37, 41, **45**, ... and the general term is

$$t_n = 1 + (n - 1) \times 4 = 4n - 3.$$

Check both given terms: $t_5 = 20 - 3 = 17$ ✓ and $t_{12} = 48 - 3 = 45$ ✓.

### The same thing with algebra

You can also write each given fact as an equation using $t_n = a + (n - 1)d$:

$$a + 4d = 17 \qquad\qquad a + 11d = 45$$

Subtract the first equation from the second. The $a$'s cancel, leaving $7d = 28$, so $d = 4$, and then
$a = 17 - 16 = 1$. This is a **system of two equations**: two unknowns need two facts. It is the same calculation as
the picture, written in symbols. The picture explains why subtracting works: subtracting removes the shared start
$a$ and leaves only the jumps between the two terms.

### Is a number in the sequence?

Is 300 a term of $t_n = 4n - 3$? If it is, it sits at some **whole-number** position $n$. Solve:

$$4n - 3 = 300 \quad\Rightarrow\quad 4n = 303 \quad\Rightarrow\quad n = 75.75.$$

There is no 75.75th term, so **300 is not in the sequence**. It falls between $t_{75} = 297$ and $t_{76} = 301$.

The general test: set $t_n$ equal to the number and solve for $n$. If $n$ is a whole number of at least 1, the number
is a term (and $n$ tells you which one). If $n$ is a fraction, zero or negative, it is not.

There is a neat way to see the answer without solving: every term of 1, 5, 9, 13, ... is **one more than a multiple
of 4**, because it is 1 plus some number of 4's. Now 300 is a multiple of 4 itself, so it cannot be one more than a
multiple of 4. But 301 is, so 301 is a term.

### Filling in the gaps: arithmetic means

Suppose you want to put three numbers between 5 and 25 so that all five make an arithmetic sequence. The 5 numbers
have $5 - 1 = 4$ jumps, and the total climb is $25 - 5 = 20$, so $d = 20 \div 4 = 5$: the sequence is 5, **10, 15,
20**, 25. The numbers you insert are called **arithmetic means**.

The simplest case is one number between two: the middle term of three is halfway between its neighbours,

$$\text{if } x,\ y,\ z \text{ is arithmetic, then } y = \frac{x + z}{2}.$$

Why: $y - x = d$ and $z - y = d$, so $y - x = z - y$, which rearranges to $2y = x + z$. The middle term is the
**average** (the mean) of its two neighbours. That is where the name "arithmetic mean" comes from: the everyday
average of two numbers is the number that sits halfway between them.

<figure class="play" data-play="seq" data-kind="arith"><span class="ai-tag">AI-created</span><figcaption><b>Work backwards.</b> From any term, take away d to find the one before.</figcaption></figure>

## Worked examples

**1. Two terms, going down.** An arithmetic sequence has $t_3 = 20$ and $t_{10} = -8$. Find $a$, $d$ and $t_n$.

- Jumps: $10 - 3 = 7$. Change: $-8 - 20 = -28$. So $d = -28 \div 7 = -4$.
- Back 2 jumps from the 3rd term: $a = 20 - 2 \times (-4) = 20 + 8 = 28$. (Going back against a negative
  difference makes the number **bigger**.)
- $t_n = 28 + (n - 1)(-4) = 32 - 4n$. Check: $t_{10} = 32 - 40 = -8$. ✓

**2. Is it a term?** Is 500 a term of 7, 13, 19, 25, ...? Is 499?

- $a = 7$, $d = 6$, so $t_n = 6n + 1$.
- $6n + 1 = 500$ gives $6n = 499$, $n = 83.1\overline{6}$: not a whole number, so **500 is not a term**.
- $6n + 1 = 499$ gives $6n = 498$, $n = 83$: **499 is the 83rd term**.

The quick view: every term is 1 more than a multiple of 6. 499 is $6 \times 83 + 1$; 500 leaves remainder 2.

**3. Inserting means.** Put four numbers between 3 and 38 to make an arithmetic sequence.

Six numbers in all, so 5 jumps, and the climb is 35: $d = 7$. The sequence is 3, **10, 17, 24, 31**, 38.

**4. A sequence with an unknown inside.** The three numbers $x$, $2x + 1$, $4x - 3$ (in that order) make an
arithmetic sequence. Find $x$ and the numbers.

The middle one is the average of the other two, so $2(2x + 1) = x + (4x - 3)$, that is $4x + 2 = 5x - 3$, so
$x = 5$. The numbers are **5, 11, 17**, with $d = 6$. ✓

**5. Back to the spilled page.** We found $t_n = 4n - 3$, with every term 1 more than a multiple of 4. 300 is not a
term; the closest are 297 (the 75th) and 301 (the 76th).

## Try it

1. An arithmetic sequence has $t_1 = 4$ and $t_6 = 29$. Find $d$ and $t_n$.
2. An arithmetic sequence has $t_4 = 2.5$ and $t_9 = 10$. Find $a$, $d$ and $t_{20}$.
3. Is 1000 a term of 4, 13, 22, 31, ...? Is 1003?
4. Put two numbers between 8 and 29 to make an arithmetic sequence.
5. The numbers $k + 2$, $2k$, $4k - 5$ make an arithmetic sequence in that order. Find $k$ and the three numbers.
6. Which numbers are in **both** 2, 5, 8, 11, ... and 3, 7, 11, 15, ...? Find the first three, and a rule for all of
   them.
7. In an arithmetic sequence, the 7th term is three times the 2nd term, and the 10th term is 42. Find the sequence.
8. Explain why, in any arithmetic sequence, $t_2 + t_9 = t_4 + t_7$. (Hint: write each one using $a$ and $d$.)

??? note "Answers"
    1. 5 jumps, climb $29 - 4 = 25$, so $d = 5$. $t_n = 4 + (n - 1) \times 5 = 5n - 1$.
    2. 5 jumps, climb $10 - 2.5 = 7.5$, so $d = 1.5$. Back 3 jumps: $a = 2.5 - 4.5 = -2$.
       $t_{20} = -2 + 19 \times 1.5 = -2 + 28.5 = 26.5$.
    3. $a = 4$, $d = 9$: $t_n = 9n - 5$. For 1000: $9n = 1005$, $n = 111.\overline{6}$, so no. For 1003: $9n = 1008$,
       $n = 112$, so yes, the 112th term. (Every term leaves remainder 4 when divided by 9; 1003 does, 1000 does not.)
    4. Four numbers, 3 jumps, climb 21, so $d = 7$: 8, **15, 22**, 29.
    5. $2(2k) = (k + 2) + (4k - 5)$, so $4k = 5k - 3$ and $k = 3$. The numbers are 5, 6, 7 (difference 1).
    6. Listing: the first goes 2, 5, 8, **11**, 14, 17, 20, **23**, ... and the second 3, 7, **11**, 15, 19, **23**, ...
       The common ones are 11, 23, 35, ... They go up by 12, because a common term must stay common after adding a
       number that is a multiple of both 3 and 4, and the smallest is 12. The rule is $12n - 1$.
    7. $a + 6d = 3(a + d)$ gives $a + 6d = 3a + 3d$, so $3d = 2a$. Also $a + 9d = 42$. From $3d = 2a$, $9d = 6a$, so
       $a + 6a = 42$, $a = 6$ and $d = 4$. The sequence is 6, 10, 14, 18, 22, 26, 30, ... Check: $t_7 = 30 = 3 \times 10$
       ✓ and $t_{10} = 6 + 36 = 42$ ✓.
    8. $t_2 + t_9 = (a + d) + (a + 8d) = 2a + 9d$ and $t_4 + t_7 = (a + 3d) + (a + 6d) = 2a + 9d$. They are equal
       because the positions add to the same total, $2 + 9 = 4 + 7 = 11$. This fact is the key to the next lesson.

## Common mistake

**Dividing by the wrong number of jumps.** From the 5th to the 12th term is $12 - 5 = 7$ jumps. People often count
the terms instead (8 of them, from the 5th to the 12th inclusive) and divide by 8. Draw a tiny picture of posts and
gaps if you are unsure.

**Getting the sign wrong going backwards.** To go back from a later term, you **subtract** $d$. If $d$ is negative,
subtracting it makes the number bigger: back one step from $-8$ with $d = -4$ is $-8 - (-4) = -4$.

## Where it leads

- Previous: [Arithmetic sequences](01-arithmetic-sequences.md) · Next:
  [Gauss's trick: adding an arithmetic sequence](03-gauss-trick.md), where the pairing in question 8 adds a hundred
  terms in one line.
- [Level 5 page](index.md) · [Patterns topic page](../index.md)
- Two unknowns from two facts is a system of equations: see
  [Algebra level 6](../../algebra/level-6/05-substitution-elimination.md).
- "Leaves remainder 1 when divided by 4" is the language of [Number theory](../../number-theory/index.md).
