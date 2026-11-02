---
title: "Bézout's identity"
---

# Bézout's identity

*Number theory · level 6, lesson 1 of 6*

## A question to start

A frog sits at 0 on a number line. It can jump exactly 11 steps (forwards or backwards) or exactly 7 steps (forwards
or backwards), as many times as it likes. Can it ever land on 1?

Try a few jumps. Two jumps of 11 forward take it to 22. Three jumps of 7 back take it to 15, then 8, then **1**. Yes:

$$2 \times 11 - 3 \times 7 = 22 - 21 = 1.$$

Now give the frog jumps of 10 and 6 instead. Can it reach 1? Try as long as you like: it never will. Every jump is an
even number of steps, so the frog only ever lands on even numbers. What decides which points a frog can reach? The
answer is the greatest common divisor, and the fact behind it is one of the most useful tools in all of number theory.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 130" role="img" aria-label="A number line from 0 to 22; two orange jumps of 11 go forward from 0 to 22, then three blue jumps of 7 go back to 15, 8 and 1">
  <line x1="20" y1="65" x2="420" y2="65" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="1.5">
    <line x1="20" y1="60" x2="20" y2="70"/><line x1="38" y1="60" x2="38" y2="70"/><line x1="164" y1="60" x2="164" y2="70"/>
    <line x1="218" y1="60" x2="218" y2="70"/><line x1="290" y1="60" x2="290" y2="70"/><line x1="416" y1="60" x2="416" y2="70"/>
  </g>
  <g fill="none" stroke="#eea66f" stroke-width="3">
    <path d="M 20 61 Q 119 5 218 61"/><path d="M 218 61 Q 317 5 416 61"/>
  </g>
  <g fill="none" stroke="#9cc9ea" stroke-width="3">
    <path d="M 416 69 Q 353 115 290 69"/><path d="M 290 69 Q 227 115 164 69"/><path d="M 164 69 Q 101 115 38 69"/>
  </g>
  <circle cx="38" cy="65" r="5" fill="#7ccf9a"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="20" y="54">0</text><text x="44" y="54">1</text><text x="164" y="54">8</text><text x="218" y="54">11</text>
    <text x="290" y="54">15</text><text x="410" y="54">22</text>
    <text x="119" y="22">+11</text><text x="317" y="22">+11</text>
    <text x="353" y="118">−7</text><text x="227" y="118">−7</text><text x="101" y="118">−7</text>
  </g>
</svg>
</div>

## The idea

### Combinations

A **combination** (or **linear combination**) of two whole numbers $a$ and $b$ is any number of the form

$$ax + by,$$

where $x$ and $y$ are whole numbers that may be **positive, negative or zero**. The frog's landing points are exactly
the combinations of its two jump sizes: $x$ counts the jumps of one size (negative means backwards) and $y$ the jumps
of the other. For 11 and 7, the point 1 is the combination with $x = 2$, $y = -3$.

### Every combination is a multiple of the gcd

Let $d = \gcd(a, b)$, the greatest common divisor from [level 4](../level-4/index.md). Since $d$ divides $a$, we can
write $a = d a_1$; since $d$ divides $b$, $b = d b_1$. Then

$$ax + by = d a_1 x + d b_1 y = d(a_1 x + b_1 y),$$

a multiple of $d$. So **every combination of $a$ and $b$ is a multiple of $\gcd(a, b)$**. With jumps of 10 and 6,
$\gcd = 2$, and that is why the frog is stuck on even numbers.

### Bézout's identity: the gcd itself is a combination

The surprise is that the reverse is also true.

> **Bézout's identity.** For any whole numbers $a$ and $b$, not both 0, there are whole numbers $x$ and $y$ with
> $ax + by = \gcd(a, b)$.

It is named after the French mathematician Étienne Bézout (1730-1783), who proved a version of it for polynomials;
the whole-number version was known earlier, to Claude-Gaspard Bachet in the 1620s.

Once you can make $d$ itself, you can make every multiple of $d$: to make $kd$, just do the moves for $d$, $k$ times
over. So, putting the two facts together:

> **The combinations of $a$ and $b$ are exactly the multiples of $\gcd(a, b)$.**

A frog with jumps of 11 and 7 ($\gcd = 1$) can reach **every** whole number. A frog with jumps of 10 and 6
($\gcd = 2$) can reach exactly the even numbers.

### Why it is true (a short proof)

Here is a proof that works for every pair at once. Suppose $a$ and $b$ are positive. Look at all the **positive**
numbers that are combinations of $a$ and $b$. There are some (for example $a$ itself, which is
$a \times 1 + b \times 0$). Let $s$ be the **smallest** of them, say $s = ax_0 + by_0$.

**Step 1: $s$ divides $a$.** Divide $a$ by $s$ with remainder: $a = qs + r$ with $0 \le r < s$. Then

$$r = a - qs = a - q(ax_0 + by_0) = a(1 - qx_0) + b(-qy_0).$$

So $r$ is a combination too. But $r$ is smaller than $s$, and $s$ was the smallest **positive** combination. So $r$
cannot be positive: $r = 0$. That means $s$ divides $a$.

**Step 2: $s$ divides $b$.** The same argument with $b$ in place of $a$.

**Step 3: $s$ is the gcd.** By steps 1 and 2, $s$ is a common divisor of $a$ and $b$, so $s \le d$. But $s$ is a
combination, so by the previous section $d$ divides $s$, and so $d \le s$. Both together give $s = d$.

So the gcd is a combination: it is the smallest positive one. This proof tells us that $x$ and $y$ **exist**, but not
how to find them. For that we run Euclid's algorithm backwards.

### Finding $x$ and $y$: Euclid backwards

Find $x$ and $y$ with $84x + 60y = \gcd(84, 60)$. First run Euclid's algorithm forwards, as in level 4:

$$84 = 1 \times 60 + 24$$

$$60 = 2 \times 24 + 12$$

$$24 = 2 \times 12 + 0$$

So the gcd is 12. Now read the steps **upwards**, rewriting each line to show its remainder:

$$12 = 60 - 2 \times 24 \qquad \text{(from line 2)}$$

$$24 = 84 - 1 \times 60 \qquad \text{(from line 1)}$$

Put the second into the first, replacing the 24:

$$12 = 60 - 2 \times (84 - 60) = 60 - 2 \times 84 + 2 \times 60 = 3 \times 60 - 2 \times 84.$$

So $x = -2$, $y = 3$: $84 \times (-2) + 60 \times 3 = -168 + 180 = 12$. ✓

This is called the **extended Euclidean algorithm**. Each remainder in Euclid's algorithm is a combination of the
two before it, so by working back up we write the last one, the gcd, as a combination of the two numbers we started
with.

### A tidier way: carry the combination along

For longer calculations, the substituting gets messy. Instead, write every number in the algorithm as a combination
of $a$ and $b$ as you go **down**. Each row stores a number together with its $x$ and $y$. Start with $a = 1a + 0b$ and
$b = 0a + 1b$. Each new row is "row before last minus $q$ times last row", and you do the same to the $x$ and $y$
columns.

Here it is for $\gcd(240, 46)$:

| Number | $x$ | $y$ | How it was made |
| --- | --- | --- | --- |
| 240 | 1 | 0 | start |
| 46 | 0 | 1 | start |
| 10 | 1 | −5 | $240 - 5 \times 46$ |
| 6 | −4 | 21 | $46 - 4 \times 10$ |
| 4 | 5 | −26 | $10 - 1 \times 6$ |
| 2 | −9 | 47 | $6 - 1 \times 4$ |

The next step would be $4 - 2 \times 2 = 0$, so the gcd is 2, and its row says $2 = 240 \times (-9) + 46 \times 47$.
Check: $-2160 + 2162 = 2$. ✓ Every row can be checked the same way, so a slip is easy to find.

### There are many answers

The $x$ and $y$ are never unique. Since $84 \times 5 - 60 \times 7 = 420 - 420 = 0$, you can add 5 to $x$ and
subtract 7 from $y$ without changing $84x + 60y$. So $x = 3$, $y = -4$ works too: $252 - 240 = 12$. ✓ The next lesson
finds **all** the answers.

## Worked examples

**1. The frog.** Write 1 as a combination of 11 and 7 using Euclid backwards.

- Forwards: $11 = 1 \times 7 + 4$; $7 = 1 \times 4 + 3$; $4 = 1 \times 3 + 1$; $3 = 3 \times 1 + 0$. So $\gcd = 1$.
- Backwards: $1 = 4 - 3$. Replace $3 = 7 - 4$: $1 = 4 - (7 - 4) = 2 \times 4 - 7$.
- Replace $4 = 11 - 7$: $1 = 2(11 - 7) - 7 = 2 \times 11 - 3 \times 7$.
- That is the frog's route: two jumps of 11 forward, three jumps of 7 back.

**2. Euclid's famous example.** Write $\gcd(1071, 462)$ as a combination.

- Forwards: $1071 = 2 \times 462 + 147$; $462 = 3 \times 147 + 21$; $147 = 7 \times 21 + 0$. So $\gcd = 21$.
- Backwards: $21 = 462 - 3 \times 147$, and $147 = 1071 - 2 \times 462$.
- So $21 = 462 - 3(1071 - 2 \times 462) = 462 - 3 \times 1071 + 6 \times 462 = 7 \times 462 - 3 \times 1071$.
- Check: $7 \times 462 = 3234$ and $3 \times 1071 = 3213$; $3234 - 3213 = 21$. ✓

**3. Two jugs.** You have a 5-litre jug and a 3-litre jug, a tap and a drain, and no markings. Can you measure exactly
4 litres?

- $\gcd(5, 3) = 1$, so every whole number of litres is a combination. For 4: $4 = 3 \times 3 - 1 \times 5$ ($9 - 5$).
- Read it as: pour in three full 3-litre jugs, and pour out one full 5-litre jug.
- In practice: fill the 3, pour it into the 5. Fill the 3 again, pour into the 5 until the 5 is full (1 litre stays
  in the 3). Empty the 5 down the drain (that is the "minus one 5"). Pour the 1 litre into the 5. Fill the 3 once
  more (the third 3) and pour it in: the big jug now holds $1 + 3 =$ **4 litres**.

**4. Proving something can't be done.** Can you find whole numbers with $12x + 18y = 7$?

- $\gcd(12, 18) = 6$, so every combination of 12 and 18 is a multiple of 6.
- 7 is not a multiple of 6. So **no**, there are no whole-number solutions, however long you search.

## Try it

1. Find whole numbers $x$ and $y$ with $5x + 3y = 1$.
2. Use Euclid backwards to write $\gcd(35, 15)$ as a combination of 35 and 15.
3. Use Euclid backwards to write $\gcd(391, 299) = 23$ as a combination of 391 and 299.
4. Can $6x + 15y = 4$ be solved in whole numbers? What about $6x + 15y = 9$?
5. A frog has jumps of 12 and 20. Which points can it reach? Find a way to reach the smallest positive one.
6. Use the table method to write $\gcd(101, 23)$ as a combination.
7. You found one answer to question 1. Give two more.
8. Harder: suppose $\gcd(a, b) = 1$, and both $a$ and $b$ divide $c$. Use Bézout to prove that $ab$ divides $c$.
   (Start with $1 = ax + by$ and multiply both sides by $c$.) Why is "gcd = 1" needed? Try $a = 4$, $b = 6$, $c = 12$.

??? note "Answers"
    1. For example $x = 2$, $y = -3$: $10 - 9 = 1$. (By Euclid: $5 = 1 \times 3 + 2$, $3 = 1 \times 2 + 1$, so
       $1 = 3 - 2 = 3 - (5 - 3) = 2 \times 3 - 5$, giving $x = -1$, $y = 2$. Both are correct.)
    2. $35 = 2 \times 15 + 5$; $15 = 3 \times 5 + 0$. So $\gcd = 5$ and $5 = 35 - 2 \times 15$: $x = 1$, $y = -2$.
    3. $391 = 1 \times 299 + 92$; $299 = 3 \times 92 + 23$; $92 = 4 \times 23$. Backwards:
       $23 = 299 - 3 \times 92 = 299 - 3(391 - 299) = 4 \times 299 - 3 \times 391$. Check: $1196 - 1173 = 23$. ✓
    4. $\gcd(6, 15) = 3$. 4 is not a multiple of 3, so **no**. 9 is a multiple of 3, so **yes**: from
       $3 = 3 \times 6 - 1 \times 15$ ($18 - 15$), multiply by 3 to get $9 = 9 \times 6 - 3 \times 15$ ($54 - 45 = 9$).
    5. $\gcd(12, 20) = 4$, so it reaches exactly the **multiples of 4** (positive and negative). Smallest positive: 4.
       $20 - 12 = 8$, $12 - 8 = 4$, so $4 = 12 - (20 - 12) = 2 \times 12 - 20$: two jumps of 12 forward, one jump of
       20 back.
    6. Rows (number, $x$, $y$): $(101, 1, 0)$, $(23, 0, 1)$, then $101 = 4 \times 23 + 9$ gives $(9, 1, -4)$;
       $23 = 2 \times 9 + 5$ gives $(5, -2, 9)$; $9 = 1 \times 5 + 4$ gives $(4, 3, -13)$; $5 = 1 \times 4 + 1$ gives
       $(1, -5, 22)$. So $1 = -5 \times 101 + 22 \times 23$. Check: $-505 + 506 = 1$. ✓
    7. Since $5 \times 3 - 3 \times 5 = 0$, add 3 to $x$ and subtract 5 from $y$ (or the reverse). From $(2, -3)$:
       $(5, -8)$ gives $25 - 24 = 1$, and $(-1, 2)$ gives $-5 + 6 = 1$. Also $(8, -13)$, $(-4, 7)$, and so on.
    8. From $1 = ax + by$, multiply by $c$: $c = acx + bcy$. Since $b$ divides $c$, $ab$ divides $ac$; since $a$
       divides $c$, $ab$ divides $bc$. So $ab$ divides both terms, and hence their sum $c$. Without gcd 1 it fails:
       4 and 6 both divide 12, but $4 \times 6 = 24$ does not.

## Common mistake

**Forgetting that $x$ or $y$ can be negative.** Bézout's identity needs negative numbers. With only $x, y \ge 0$ you
cannot make 1 from 11 and 7 at all. (Which amounts you **can** make with no negatives is a different and harder
question: it is [lesson 3](03-coin-problem.md).)

**Mixing up the two numbers when substituting backwards.** When you replace a remainder, replace it with the whole
expression in brackets, and collect like terms carefully. Always finish by checking: multiply out $ax + by$ and see
that it really gives the gcd.

## Where it leads

- Back: [Level 5: Check digits](../level-5/06-check-digits.md) · Next: [Linear Diophantine equations](02-linear-diophantine.md),
  where Bézout's identity solves equations like $5x + 8y = 71$ completely.
- [Level 6 page](index.md) · [Number theory topic page](../index.md)
- Euclid's algorithm, forwards, is in [Level 4: Euclid's algorithm](../level-4/04-euclids-algorithm.md).
- Bézout's identity is the key to dividing on a clock ([Inverses mod n](04-inverses-mod-n.md)) and to proving unique
  factorisation ([lesson 6](06-unique-factorisation.md)). At university it is why the clock mod $p$ is a field:
  [MAT240 Unit 1: Fields and vector spaces](../../../uoft/MAT240H1/unit01.md).
- Building secret-code keys uses the extended Euclidean algorithm: [cryptography.akadian.ca](https://cryptography.akadian.ca/).
