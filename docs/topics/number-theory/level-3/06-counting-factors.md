---
title: "How many factors?"
---

# How many factors?

*Number theory · level 3, lesson 6 of 6*

## A question to start

A full turn is split into 360 degrees. Nobody knows for certain why people long ago chose 360, but one thing makes it
very handy: 360 can be shared equally in a great many ways. Halves, thirds, quarters, fifths, sixths, eighths, ninths,
tenths, twelfths, ... all come out as whole numbers of degrees.

How many factors does 360 have? You could list them all, carefully, in pairs. Or you could look at its prime
factorization, $2^3 \times 3^2 \times 5$, and say "4 times 3 times 2, which is 24" in about two seconds.

That is the answer: 24. And here is a bonus fact: 360 is the **smallest** number with as many as 24 factors. This
lesson explains the two-second method, and why it works.

## The idea

### Every factor is built from the same primes

Take 72. Its prime factorization is $72 = 2^3 \times 3^2 = 2 \times 2 \times 2 \times 3 \times 3$.

Now think about any factor of 72, say 12. Since 12 × 6 = 72, the primes of 12 and the primes of 6 together make the
primes of 72. (That is the "only one recipe" rule from [lesson 5](05-prime-factorization.md).) So 12 is made of some
of 72's primes, and 6 is made of the rest:

- 12 = 2 × 2 × 3
- 6 = 2 × 3
- together: 2 × 2 × 2 × 3 × 3 = 72.

So **every factor of 72 is made only of 2s and 3s**, with **at most three 2s** and **at most two 3s**. It can never
contain a 5 or a 7, and it can never contain four 2s, because 72 does not have them to give.

### Making a factor is making two choices

To build a factor of 72 you make two choices:

- **How many 2s?** 0, 1, 2 or 3. That is **4 choices**.
- **How many 3s?** 0, 1 or 2. That is **3 choices**.

Notice that "none" is a choice too. Choosing no 2s and no 3s gives 1, which is a factor of every number.

Here are all the choices in a table. The rows choose the 2s (giving 1, 2, 4 or 8) and the columns choose the 3s
(giving 1, 3 or 9). Each box multiplies its row and its column.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 210" role="img" aria-label="A table of the factors of 72: rows 1, 2, 4, 8 (powers of 2), columns 1, 3, 9 (powers of 3); the twelve boxes are 1, 3, 9; 2, 6, 18; 4, 12, 36; 8, 24, 72">
  <g fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1">
    <rect x="80" y="40" width="60" height="36"/><rect x="140" y="40" width="60" height="36"/><rect x="200" y="40" width="60" height="36"/>
    <rect x="80" y="76" width="60" height="36"/><rect x="140" y="76" width="60" height="36"/><rect x="200" y="76" width="60" height="36"/>
    <rect x="80" y="112" width="60" height="36"/><rect x="140" y="112" width="60" height="36"/><rect x="200" y="112" width="60" height="36"/>
    <rect x="80" y="148" width="60" height="36"/><rect x="140" y="148" width="60" height="36"/><rect x="200" y="148" width="60" height="36"/>
  </g>
  <rect x="200" y="148" width="60" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="110" y="30">× 1</text><text x="170" y="30">× 3</text><text x="230" y="30">× 9</text>
    <text x="50" y="63">1</text><text x="50" y="99">2</text><text x="50" y="135">4</text><text x="50" y="171">8</text>
  </g>
  <g font-size="15" fill="currentColor" text-anchor="middle">
    <text x="110" y="63">1</text><text x="170" y="63">3</text><text x="230" y="63">9</text>
    <text x="110" y="99">2</text><text x="170" y="99">6</text><text x="230" y="99">18</text>
    <text x="110" y="135">4</text><text x="170" y="135">12</text><text x="230" y="135">36</text>
    <text x="110" y="171">8</text><text x="170" y="171">24</text><text x="230" y="171">72</text>
  </g>
  <text x="150" y="203" font-size="12" fill="currentColor" text-anchor="middle">4 rows × 3 columns = 12 factors</text>
</svg>
</div>

There are 4 rows and 3 columns, so there are 4 × 3 = **12** boxes. And:

- Every box is a factor of 72 (it uses at most three 2s and at most two 3s).
- Every factor of 72 is in some box (every factor is made only of 2s and 3s, within those limits).
- No number appears in two boxes (two different recipes always give two different numbers; again, the "one recipe"
  rule).

So 72 has exactly **12 factors**: 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72.

### The rule

Look at where the 4 and the 3 came from. 72 has $2^3$, and there are **3 + 1 = 4** choices for the 2s (0, 1, 2 or 3).
It has $3^2$, and there are **2 + 1 = 3** choices for the 3s. The "+ 1" is the choice of **none**.

**To count the factors of a number: write its prime factorization, add 1 to each power, and multiply the answers.**

For 360 $= 2^3 \times 3^2 \times 5^1$: the powers are 3, 2 and 1. Add 1 to each: 4, 3, 2. Multiply: 4 × 3 × 2 = **24**.

You can picture the 5 as a third choice: "with a 5 or without a 5". Each of the 12 factors of 72 can be taken as it is,
or multiplied by 5. So 360 = 72 × 5 has 12 × 2 = 24 factors. Every new prime you bring in, with power 1, **doubles** the
count.

### Square numbers have an odd number of factors

In [level 2](../level-2/index.md) you saw that square numbers like 16 have an odd number of factors, because one factor
pairs with itself (4 × 4). The rule shows this a second way.

A square is a number times itself, so every prime in it appears an **even** number of times. For example
$36 = 6 \times 6 = 2^2 \times 3^2$ and $900 = 30 \times 30 = 2^2 \times 3^2 \times 5^2$. Even powers plus 1 are odd
numbers, and odd times odd is odd. So 36 has 3 × 3 = 9 factors, and 900 has 3 × 3 × 3 = 27 factors: both odd.

And a number that is **not** a square has at least one odd power. That power plus 1 is even, which makes the whole
count even. So: **a number has an odd number of factors exactly when it is a square.**

### Some families

The rule tells you what kind of number has a given number of factors.

- **Exactly 2 factors:** the primes. (Factorization $p^1$; 1 + 1 = 2.)
- **Exactly 3 factors:** squares of primes, like 4, 9, 25, 49. (Factorization $p^2$; 2 + 1 = 3. The only way to make 3
  by multiplying is 3 itself.)
- **Exactly 4 factors:** either a prime cubed, like 8 or 27, or two different primes multiplied, like 6, 10, 15, 21.
  (4 = 4, or 4 = 2 × 2.)

Here $p$ just stands for "some prime". You will meet letters standing for numbers much more in later levels.

### Bonus: adding up the factors

The same table can **add** the factors, not just count them. Each box is a row number times a column number. So the
total of all twelve boxes is

(1 + 2 + 4 + 8) × (1 + 3 + 9) = 15 × 13 = 195.

Check by adding the list: 1 + 2 + 3 + 4 + 6 + 8 + 9 + 12 + 18 + 24 + 36 + 72 = 195. ✓ This trick is the key to
**perfect numbers** in [level 4](../level-4/06-perfect-numbers.md).

<figure class="play" data-play="factree"><span class="ai-tag">AI-created</span><figcaption><b>Count the factors from the primes.</b> Add one to each power and multiply.</figcaption></figure>

## Worked examples

**1. How many factors has 100? List them.**

$100 = 2^2 \times 5^2$. Powers 2 and 2; add 1: 3 and 3; multiply: **9**. The table has rows 1, 2, 4 and columns 1, 5,
25: the factors are 1, 5, 25, 2, 10, 50, 4, 20, 100. Sorted: 1, 2, 4, 5, 10, 20, 25, 50, 100. Nine, and odd, because
100 is a square.

**2. How many factors has a million?**

1,000,000 = $10^6$, and each 10 is 2 × 5, so $1000000 = 2^6 \times 5^6$. Add 1 to each power: 7 and 7. Multiply:
**49**. (Listing all 49 by hand would take a while.)

**3. Count the factors of 210.**

$210 = 2 \times 3 \times 5 \times 7$. Four different primes, each with power 1: 2 × 2 × 2 × 2 = **16** factors. Each
factor is a choice of "in or out" for each of the four primes.

**4. What is the smallest number with exactly 6 factors?**

6 can be made as 6 (one prime with power 5) or as 3 × 2 (one prime squared times another prime).

- One prime to the power 5: the smallest is $2^5 = 32$.
- A prime squared times another prime: use the smallest primes, and give the bigger power to the smaller prime:
  $2^2 \times 3 = 12$. (The other way round, $3^2 \times 2 = 18$, is bigger.)

The smallest is **12**. Check: 1, 2, 3, 4, 6, 12. Six factors. ✓

**5. Which number up to 1,000 has the most factors?**

To get many factors you want many small primes. Try $2^3 \times 3 \times 5 \times 7 = 840$: (3 + 1) × 2 × 2 × 2 = **32**
factors. No number up to 1,000 has more. (For comparison, 360 has 24 and 720 = $2^4 \times 3^2 \times 5$ has 5 × 3 × 2 =
30.)

## Try it

1. Count the factors of 48. Then list them to check.
2. How many factors has 1,024 = $2^{10}$? What are they?
3. How many factors has 900? Is the answer odd or even, and why?
4. List all the factors of 140 = $2^2 \times 5 \times 7$ using a table or choices.
5. Find three numbers with exactly 3 factors. What do they have in common?
6. What is the smallest number with exactly 10 factors?
7. A number has prime factorization $2^a \times 3^b$, where $a$ and $b$ are both at least 1. It has 15 factors and it
   is less than 1,000. Find both numbers that fit. (Hint: 15 = 5 × 3.)
8. Use the adding trick to find the sum of all the factors of 12. Then subtract 12 itself. What do you notice compared
   with 12?

??? note "Answers"
    1. $48 = 2^4 \times 3$. (4 + 1) × (1 + 1) = **10**. The factors: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48.
    2. 10 + 1 = **11** factors: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1,024.
    3. $900 = 2^2 \times 3^2 \times 5^2$, so 3 × 3 × 3 = **27**. Odd, because 900 = 30 × 30 is a square, so every power
       is even.
    4. Choices: 2s (1, 2 or 4), 5 (in or out), 7 (in or out): 3 × 2 × 2 = 12 factors. They are 1, 2, 4, 5, 10, 20, 7,
       14, 28, 35, 70, 140. Sorted: 1, 2, 4, 5, 7, 10, 14, 20, 28, 35, 70, 140.
    5. For example 4, 9 and 25 (or 49, 121, ...). Each is a **prime squared**: its factors are 1, the prime, and the
       square.
    6. 10 = 10 or 5 × 2. One prime to the power 9: $2^9 = 512$. Or a prime to the power 4 times another prime:
       $2^4 \times 3 = 48$. The smallest is **48** (it is in question 1: ten factors).
    7. (a + 1) × (b + 1) = 15, and both brackets are at least 2, so one is 5 and the other is 3: a = 4, b = 2 or
       a = 2, b = 4. That gives $2^4 \times 3^2 = 16 \times 9 =$ **144** and $2^2 \times 3^4 = 4 \times 81 =$
       **324**. Both are less than 1,000.
    8. $12 = 2^2 \times 3$: (1 + 2 + 4) × (1 + 3) = 7 × 4 = 28. Without 12 itself: 28 − 12 = 16, which is **more**
       than 12. The factors smaller than 12 add up to more than 12. Numbers like this are called **abundant**. When the
       smaller factors add up to exactly the number, it is called **perfect**: see level 4.

## Common mistake

**Forgetting the "+ 1".** $72 = 2^3 \times 3^2$ does **not** have 3 × 2 = 6 factors. You must count "no 2s" and "no 3s"
as choices too, so it is 4 × 3 = 12.

**Using a factorization that is not all primes.** 72 = $8 \times 9$ does not give "2 × 2 = 4 factors". The rule only
works with the **prime** factorization, $2^3 \times 3^2$.

## Where it leads

- Back: [Prime factorization](05-prime-factorization.md) · Next level: [Level 4: GCD, LCM and Euclid](../level-4/index.md).
- [Level 3 page](index.md) · [Number theory topic page](../index.md)
- The "multiply the number of choices" idea is the **multiplication principle** of [Counting](../../counting/index.md).
- The sum of factors leads to perfect, abundant and deficient numbers: [level 4, lesson 6](../level-4/06-perfect-numbers.md).
- The locker puzzle, where squares and their odd number of factors first appeared: [level 2](../level-2/index.md).
