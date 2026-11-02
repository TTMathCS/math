---
title: "The coin problem"
---

# The coin problem

*Number theory · level 6, lesson 3 of 6*

## A question to start

Imagine a country whose only coins are worth 3 cents and 5 cents, and shops never give change. Which prices can you
pay exactly?

- 3, 5, 6 (3 + 3), 8 (3 + 5), 9, 10, 11 (3 + 3 + 5), 12, 13 (3 + 5 + 5), ... yes.
- 1, 2, 4, 7: **no**. (For 7: one 5 leaves 2, no 5 leaves 7, and neither is a multiple of 3.)

Here is the surprise: from 8 onwards, **every** price can be paid, forever. And 7, the largest price you cannot pay,
is not a random number. It is $3 \times 5 - 3 - 5$. In this lesson you will see why there is always a largest
impossible amount when the two coins share no factor, why it is given by that formula, and how many impossible
amounts there are.

## The idea

### The question, carefully

Given two coin values $a$ and $b$ (positive whole numbers), an amount $n$ is **payable** if

$$n = ax + by \quad \text{with } x \ge 0 \text{ and } y \ge 0,$$

with $x$, $y$ whole numbers. This is the Diophantine equation from [lesson 2](02-linear-diophantine.md), but now
**negative numbers of coins are not allowed**. You cannot hand over a coin and take one back.

That changes the answer completely. With negatives allowed, 3 and 5 make every whole number, even 1
($1 = 2 \times 3 - 5$). Without negatives, some amounts fail. The question is which.

### When the coins share a factor

If $\gcd(a, b) = d > 1$, then every payable amount is a multiple of $d$ (lesson 1), so infinitely many amounts are
impossible: with 4-cent and 6-cent coins, you can never pay an odd amount. There is no "largest impossible amount".
So from now on we take $\gcd(a, b) = 1$, and say $a$ and $b$ are **coprime** (they share no factor except 1).

### A picture: sort the amounts by remainder

Write the amounts in three columns, by their remainder when divided by 3. Adding a 3-cent coin moves you **one row
down** in the same column. So once you can pay one amount in a column, you can pay everything below it.

The only question in each column is: what is the first payable amount? It must use some 5-cent coins to get into
that column. Column 0 starts at 0 (no coins). Column 2 starts at 5 (one 5-cent coin, since $5 \equiv 2 \pmod 3$).
Column 1 starts at 10 (two 5-cent coins, since $10 \equiv 1 \pmod 3$). The blue squares are those starting points.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 280" role="img" aria-label="The numbers 0 to 23 in three columns by remainder mod 3. The starting points 0, 5 and 10 are blue, the amounts 1, 2, 4 and 7 above the starting points are orange (cannot be paid), and every other amount is green (can be paid)">
  <g font-size="13" text-anchor="middle" fill="currentColor">
    <text x="140" y="20">rem. 0</text><text x="210" y="20">rem. 1</text><text x="280" y="20">rem. 2</text>
    <rect x="110" y="30" width="60" height="26" rx="4" fill-opacity="0.6" fill="#9cc9ea"/><text x="140" y="48">0</text>
    <rect x="180" y="30" width="60" height="26" rx="4" fill-opacity="0.6" fill="#eea66f"/><text x="210" y="48">1</text>
    <rect x="250" y="30" width="60" height="26" rx="4" fill-opacity="0.6" fill="#eea66f"/><text x="280" y="48">2</text>
    <rect x="110" y="60" width="60" height="26" rx="4" fill-opacity="0.6" fill="#7ccf9a"/><text x="140" y="78">3</text>
    <rect x="180" y="60" width="60" height="26" rx="4" fill-opacity="0.6" fill="#eea66f"/><text x="210" y="78">4</text>
    <rect x="250" y="60" width="60" height="26" rx="4" fill-opacity="0.6" fill="#9cc9ea"/><text x="280" y="78">5</text>
    <rect x="110" y="90" width="60" height="26" rx="4" fill-opacity="0.6" fill="#7ccf9a"/><text x="140" y="108">6</text>
    <rect x="180" y="90" width="60" height="26" rx="4" fill-opacity="0.6" fill="#eea66f"/><text x="210" y="108">7</text>
    <rect x="250" y="90" width="60" height="26" rx="4" fill-opacity="0.6" fill="#7ccf9a"/><text x="280" y="108">8</text>
    <rect x="110" y="120" width="60" height="26" rx="4" fill-opacity="0.6" fill="#7ccf9a"/><text x="140" y="138">9</text>
    <rect x="180" y="120" width="60" height="26" rx="4" fill-opacity="0.6" fill="#9cc9ea"/><text x="210" y="138">10</text>
    <rect x="250" y="120" width="60" height="26" rx="4" fill-opacity="0.6" fill="#7ccf9a"/><text x="280" y="138">11</text>
    <rect x="110" y="150" width="60" height="26" rx="4" fill-opacity="0.6" fill="#7ccf9a"/><text x="140" y="168">12</text>
    <rect x="180" y="150" width="60" height="26" rx="4" fill-opacity="0.6" fill="#7ccf9a"/><text x="210" y="168">13</text>
    <rect x="250" y="150" width="60" height="26" rx="4" fill-opacity="0.6" fill="#7ccf9a"/><text x="280" y="168">14</text>
    <rect x="110" y="180" width="60" height="26" rx="4" fill-opacity="0.6" fill="#7ccf9a"/><text x="140" y="198">15</text>
    <rect x="180" y="180" width="60" height="26" rx="4" fill-opacity="0.6" fill="#7ccf9a"/><text x="210" y="198">16</text>
    <rect x="250" y="180" width="60" height="26" rx="4" fill-opacity="0.6" fill="#7ccf9a"/><text x="280" y="198">17</text>
    <rect x="110" y="210" width="60" height="26" rx="4" fill-opacity="0.6" fill="#7ccf9a"/><text x="140" y="228">18</text>
    <rect x="180" y="210" width="60" height="26" rx="4" fill-opacity="0.6" fill="#7ccf9a"/><text x="210" y="228">19</text>
    <rect x="250" y="210" width="60" height="26" rx="4" fill-opacity="0.6" fill="#7ccf9a"/><text x="280" y="228">20</text>
    <rect x="110" y="240" width="60" height="26" rx="4" fill-opacity="0.6" fill="#7ccf9a"/><text x="140" y="258">21</text>
    <rect x="180" y="240" width="60" height="26" rx="4" fill-opacity="0.6" fill="#7ccf9a"/><text x="210" y="258">22</text>
    <rect x="250" y="240" width="60" height="26" rx="4" fill-opacity="0.6" fill="#7ccf9a"/><text x="280" y="258">23</text>
    <text x="385" y="150">+ 3</text><text x="385" y="166">each row</text>
  </g>
  <line x1="345" y1="60" x2="345" y2="240" stroke="currentColor" stroke-width="2"/>
  <polygon points="339,238 351,238 345,250" fill="currentColor"/>
  <g>
  </g>
</svg>
</div>

Everything **above** a blue square in its column is impossible: 1, 4, 7 in column 1 and 2 in column 2. The largest
of these is the one just above the **last** starting point, 10. That is $10 - 3 = 7$.

### The general rule

The same picture works for any coprime $a$ and $b$. Make $a$ columns, one for each remainder mod $a$. The
starting points are $0, b, 2b, \ldots, (a - 1)b$. These all land in **different** columns: if two of them, $ib$
and $jb$, had the same remainder mod $a$, then $a$ would divide $(i - j)b$, and since $a$ shares no factor
with $b$, it would divide $i - j$, which is impossible for two different numbers from 0 to $a - 1$. So the $a$
starting points fill the $a$ columns, one each. (This is the "shuffle" from the multiplication tables in
[level 5](../level-5/02-clocks-any-size.md).)

The last starting point is $(a - 1)b$, and the amount just above it in its column is
$(a - 1)b - a = ab - a - b$. So:

> **The coin problem (two coins).** If $a$ and $b$ are coprime, the largest amount that cannot be paid with coins
> of $a$ and $b$ is $ab - a - b$. Every larger amount can be paid.

This is often credited to the English mathematician James Joseph Sylvester, who wrote about it in 1884. The number
$ab - a - b$ is called the **Frobenius number** of $a$ and $b$.

### A proof in two halves

Here is the same fact as a careful proof, without the picture.

**Half 1: $ab - a - b$ cannot be paid.** Suppose it could: $ax + by = ab - a - b$ with $x, y \ge 0$. Move the
$a$ and $b$ across:

$$a(x + 1) + b(y + 1) = ab.$$

Then $a$ divides $b(y + 1)$ (since $a$ divides $ab$ and $a(x + 1)$). As $a$ and $b$ are coprime, $a$
divides $y + 1$, so $y + 1 \ge a$. In the same way $b$ divides $x + 1$, so $x + 1 \ge b$. But then the left
side is at least $ab + ab = 2ab$, which is bigger than $ab$. Impossible.

**Half 2: every $n > ab - a - b$ can be paid.** Look at the $a$ numbers
$n, \; n - b, \; n - 2b, \ldots, \; n - (a - 1)b$. As above, they all have different remainders mod $a$, so exactly one of them is a multiple of $a$, say
$n - yb = xa$ with $0 \le y \le a - 1$. Is $x \ge 0$? We have

$$xa = n - yb \ge n - (a - 1)b > (ab - a - b) - ab + b = -a.$$

So $xa > -a$, which means $x > -1$, so $x \ge 0$. Then $n = xa + yb$ with $x, y \ge 0$: payable.

### How many amounts are impossible?

For 3 and 5 there are 4 impossible amounts (1, 2, 4, 7). For 5 and 8 there are 14. In general the count is

$$\frac{(a - 1)(b - 1)}{2}.$$

For 3 and 5: $\frac{2 \times 4}{2} = 4$. ✓ For 5 and 8: $\frac{4 \times 7}{2} = 14$. ✓ The reason is a lovely
symmetry: for each $n$ from 0 to $ab - a - b$, **exactly one** of $n$ and $(ab - a - b) - n$ can be paid. (They
cannot both be payable, because then their sum $ab - a - b$ would be. Showing that at least one is payable takes a
little more work.) So exactly half of the $ab - a - b + 1 = (a - 1)(b - 1)$ numbers from 0 to $ab - a - b$ are
impossible. For 3 and 5, the pairs $(0, 7), (1, 6), (2, 5), (3, 4)$ each contain one payable and one impossible
amount.

### More than two coins

With three or more coin values there is still a largest impossible amount (if the values share no common factor), but
**no** simple formula for it is known. A famous example: food sold in boxes of 6, 9 and 20 pieces. The largest number
of pieces you cannot buy exactly is 43.

## Worked examples

**1. Stamps of 5 and 8.** What is the largest postage you cannot make with 5-cent and 8-cent stamps?

- $\gcd(5, 8) = 1$, so the formula applies: $5 \times 8 - 5 - 8 = 40 - 13 =$ **27 cents**.
- Check 27 is impossible: $27, 19, 11, 3$ (taking away 0 to 3 eight-cent stamps) are not multiples of 5.
- Check the next five amounts are possible: $28 = 4 \times 5 + 8$, $29 = 5 + 3 \times 8$, $30 = 6 \times 5$,
  $31 = 3 \times 5 + 2 \times 8$, $32 = 4 \times 8$. Five in a row means everything after is possible too: just add
  5-cent stamps.

**2. Five in a row is enough.** Why does finding $a$ payable amounts in a row prove that all larger amounts are
payable?

- Each larger amount is one of those $a$ amounts plus some number of $a$-coins. For example, with 5 and 8:
  $33 = 28 + 5$, $34 = 29 + 5$, ..., $38 = 28 + 2 \times 5$, and so on.
- This is a quick way to check any claimed answer by hand.

**3. Coins that share a factor.** With 4-cent and 6-cent coins, which amounts are possible?

- $\gcd(4, 6) = 2$, so only even amounts. Divide by 2: coins of 2 and 3 "half-cents", which are coprime, with
  largest impossible $2 \times 3 - 2 - 3 = 1$.
- So with 4 and 6 the possible amounts are 0 and every even number from 4 up; the even amount 2 is impossible, and so
  is every odd amount.

**4. Three box sizes.** Show that 43 pieces cannot be bought in boxes of 6, 9 and 20, but 44 to 49 can.

- 43 with no 20s: 43 is not a multiple of 3, but $6x + 9y$ always is. With one 20: 23 left, not a multiple of 3.
  With two 20s: 3 left, too small for a box of 6 or 9. So 43 is impossible.
- $44 = 6 + 2 \times 9 + 20$, $45 = 5 \times 9$, $46 = 6 + 2 \times 20$, $47 = 3 \times 9 + 20$,
  $48 = 2 \times 6 + 4 \times 9$, $49 = 9 + 2 \times 20$.
- Six amounts in a row, so adding boxes of 6 gives everything after 49.

## Try it

1. With coins of 2 and 5, which amounts cannot be paid? Check against the formula.
2. With coins of 4 and 7, find the largest impossible amount, and list all the impossible amounts. How many are there?
   Does it match $(a - 1)(b - 1)/2$?
3. In a game you can score 3 points or 7 points at a time. Which totals are impossible?
4. With coins of 6 and 10, is there a largest impossible amount? Explain.
5. For coins of 9 and 14, what is the largest impossible amount? Show directly that it cannot be paid.
6. List the 14 impossible amounts for stamps of 5 and 8, and check the pairing: each $n$ pairs with $27 - n$.
7. Use half 1 of the proof with $a = 3$, $b = 5$: write out the steps showing 7 cannot be paid.
8. Harder: a country wants two coprime coin values so that every amount from 12 cents up can be paid, but 11 cannot.
   Find all such pairs with both values more than 1.

??? note "Answers"
    1. Impossible: **1 and 3**. Formula: $2 \times 5 - 2 - 5 = 3$. ✓ (Everything from 4 on: $4 = 2 + 2$,
       $5 = 5$, then add 2s.)
    2. Largest: $4 \times 7 - 4 - 7 =$ **17**. Impossible amounts: 1, 2, 3, 5, 6, 9, 10, 13, 17: **nine** of them,
       and $(3 \times 6)/2 = 9$. ✓
    3. $3 \times 7 - 3 - 7 = 11$ is the largest. All impossible totals: **1, 2, 4, 5, 8, 11** (six of them, and
       $(2 \times 6)/2 = 6$ ✓).
    4. **No.** $\gcd(6, 10) = 2$, so every odd amount is impossible, and there are infinitely many odd numbers.
    5. $9 \times 14 - 9 - 14 = 126 - 23 =$ **103**. To pay 103 you would use $y$ coins of 14 with $y \le 7$, and
       $103 - 14y$ would have to be a multiple of 9. For $y = 0, 1, \ldots, 7$ the remainders of $103 - 14y$ mod 9
       are 4, 8, 3, 7, 2, 6, 1, 5: never 0. So 103 cannot be paid.
    6. Impossible: 1, 2, 3, 4, 6, 7, 9, 11, 12, 14, 17, 19, 22, 27. Pairs $(n, 27 - n)$:
       $(0, 27), (1, 26), (2, 25), \ldots, (13, 14)$. In each pair exactly one is impossible, e.g. 1 is impossible and 26 is possible
       ($26 = 2 \times 5 + 2 \times 8$); 13 is possible ($5 + 8$) and 14 is impossible.
    7. Suppose $3x + 5y = 7$ with $x, y \ge 0$. Then $3(x + 1) + 5(y + 1) = 15$. So 3 divides $5(y + 1)$, hence 3
       divides $y + 1$, so $y + 1 \ge 3$. Likewise 5 divides $x + 1$, so $x + 1 \ge 5$. Then the left side is at
       least $15 + 15 = 30 > 15$. Contradiction.
    8. We need $ab - a - b = 11$, that is $ab - a - b + 1 = 12$, which factors as $(a - 1)(b - 1) = 12$. With
       $a < b$: $(a - 1, b - 1) = (1, 12), (2, 6), (3, 4)$, giving $(a, b) = (2, 13), (3, 7), (4, 5)$. All three
       pairs are coprime, so all work: **2 and 13, 3 and 7, 4 and 5**. (The factor trick
       $ab - a - b + 1 = (a - 1)(b - 1)$ is worth remembering.)

## Common mistake

**Using the formula when the coins share a factor.** $ab - a - b$ only works when $\gcd(a, b) = 1$. For 4 and 6 it
would give 14, but 15, 17, 19, ... are impossible too.

**Allowing negative coins.** Bézout says 3 and 5 can make 1 ($2 \times 3 - 5$), but that needs giving a coin back.
The coin problem is about $x, y \ge 0$, and that is what makes small amounts impossible.

## Where it leads

- Back: [Linear Diophantine equations](02-linear-diophantine.md) · Next: [Inverses mod n](04-inverses-mod-n.md),
  dividing on a clock.
- [Level 6 page](index.md) · [Number theory topic page](../index.md)
- Counting the impossible amounts is a counting problem with a clever pairing: see [Counting](../../counting/index.md).
- Laying numbers out in columns by remainder is the clock picture from [Level 5](../level-5/index.md).
