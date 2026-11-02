---
title: "Generating functions"
---

# Generating functions

*Counting and combinations · level 8, lesson 5 of 6*

## A question to start

Here are two strange dice. The first has faces 1, 2, 2, 3, 3, 4. The second has faces 1, 3, 4, 5, 6, 8.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 390 140" role="img" aria-label="Sicherman dice: one die with faces 1, 2, 2, 3, 3, 4 and one with faces 1, 3, 4, 5, 6, 8">
  <text x="30" y="46" font-size="12" text-anchor="middle" fill="currentColor">die 1</text>
  <rect x="70" y="20" width="40" height="40" rx="7" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="90" y="46" font-size="16" text-anchor="middle" fill="currentColor">1</text>
  <rect x="122" y="20" width="40" height="40" rx="7" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="142" y="46" font-size="16" text-anchor="middle" fill="currentColor">2</text>
  <rect x="174" y="20" width="40" height="40" rx="7" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="194" y="46" font-size="16" text-anchor="middle" fill="currentColor">2</text>
  <rect x="226" y="20" width="40" height="40" rx="7" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="246" y="46" font-size="16" text-anchor="middle" fill="currentColor">3</text>
  <rect x="278" y="20" width="40" height="40" rx="7" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="298" y="46" font-size="16" text-anchor="middle" fill="currentColor">3</text>
  <rect x="330" y="20" width="40" height="40" rx="7" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="350" y="46" font-size="16" text-anchor="middle" fill="currentColor">4</text>
  <text x="30" y="106" font-size="12" text-anchor="middle" fill="currentColor">die 2</text>
  <rect x="70" y="80" width="40" height="40" rx="7" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="90" y="106" font-size="16" text-anchor="middle" fill="currentColor">1</text>
  <rect x="122" y="80" width="40" height="40" rx="7" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="142" y="106" font-size="16" text-anchor="middle" fill="currentColor">3</text>
  <rect x="174" y="80" width="40" height="40" rx="7" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="194" y="106" font-size="16" text-anchor="middle" fill="currentColor">4</text>
  <rect x="226" y="80" width="40" height="40" rx="7" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="246" y="106" font-size="16" text-anchor="middle" fill="currentColor">5</text>
  <rect x="278" y="80" width="40" height="40" rx="7" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="298" y="106" font-size="16" text-anchor="middle" fill="currentColor">6</text>
  <rect x="330" y="80" width="40" height="40" rx="7" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="350" y="106" font-size="16" text-anchor="middle" fill="currentColor">8</text>
</svg>
</div>

Roll them together and add. Remarkably, every total from 2 to 12 comes up exactly as often as with two ordinary dice:
one way to get 2, two ways to get 3, ..., six ways to get 7, ..., one way to get 12. A board game played with these
dice would play exactly the same. They were found by George Sicherman and made famous by Martin Gardner in 1978.

Are there any others? Checking every way to label two dice is hopeless. But there is a tool that settles the question
in a few lines, by turning dice into polynomials and factorising them.

## The idea

### A polynomial that keeps count

Suppose $a_0, a_1, a_2, \ldots$ is a sequence of counts: $a_k$ is the number of ways to do something "of size $k$". Its
**generating function** is the polynomial (or endless sum)

$$A(x) = a_0 + a_1x + a_2x^2 + a_3x^3 + \cdots$$

We do not plan to put numbers in for $x$. The powers of $x$ are only **labels**, like pegs on a clothesline, and the
coefficient hanging on peg $x^k$ is the count $a_k$. You have already seen one: by the binomial theorem,
$(1 + x)^n = \sum_k\dbinom{n}{k}x^k$ is the generating function of row $n$ of Pascal's triangle.

For one ordinary die, there is one way to roll each of 1, ..., 6, so its generating function is

$$D(x) = x + x^2 + x^3 + x^4 + x^5 + x^6.$$

### Why multiplying combines choices

Here is the key fact. Multiply two generating functions. A term $x^s$ in the product comes from choosing a term $x^i$
from the first and $x^j$ from the second with $i + j = s$, because **exponents add when you multiply**. So

> the coefficient of $x^s$ in $A(x)B(x)$ counts the ways to choose one thing from the first collection and one from
> the second whose sizes **add up** to $s$.

It is the "choose one term from each bracket" rule of [level 7](../level-7/01-expanding-by-choosing.md), with the
exponents doing the adding for you. For two dice:

$$D(x)^2 = x^2 + 2x^3 + 3x^4 + 4x^5 + 5x^6 + 6x^7 + 5x^8 + 4x^9 + 3x^{10} + 2x^{11} + x^{12}.$$

Read the coefficients: 6 ways to roll a total of 7, 1 way to roll 12. All 36 outcomes, sorted by total, in one line.

### Endless sums for "as many as you like"

If you may use **any** number of a thing (0, 1, 2, ...), its generating function is endless:

$$1 + x + x^2 + x^3 + \cdots = \frac{1}{1 - x}.$$

The equals sign means: multiply the left side by $1 - x$ and everything cancels except the 1. (For actual numbers this
is the geometric series and needs $|x| < 1$; for counting we only ever read coefficients, and the rule
$(1 - x)(1 + x + x^2 + \cdots) = 1$ is all we use.)

Using only 5-cent coins, the amounts you can make are $0, 5, 10, \ldots$, one way each:
$1 + x^5 + x^{10} + \cdots = \dfrac{1}{1 - x^5}$. So the number of ways to pay $n$ cents with 1-, 5- and 10-cent coins is
the coefficient of $x^n$ in

$$\frac{1}{1 - x}\cdot\frac{1}{1 - x^5}\cdot\frac{1}{1 - x^{10}}.$$

Choosing a term from each factor is choosing how many cents to pay in 1s, in 5s and in 10s.

### Stars and bars again

Sharing 10 identical sweets among 3 children is choosing an amount for each child that adds to 10. Each child's
generating function is $\frac{1}{1 - x}$, so the answer is the coefficient of $x^{10}$ in $\frac{1}{(1 - x)^3}$, which is
$\dbinom{12}{2} = 66$, the stars-and-bars count of level 6. The advantage of generating functions: limits are easy. If
each child may get **at most 4**, use $1 + x + x^2 + x^3 + x^4$ for each child instead, and read off the coefficient of
$x^{10}$ in its cube: 6.

### Euler's theorem in one line

The partitions of the [last lesson](04-partitions.md) have generating functions too. A partition into **distinct**
parts uses each size $k$ zero times or once, so the generating function is

$$(1 + x)(1 + x^2)(1 + x^3)(1 + x^4)\cdots$$

A partition into **odd** parts uses each odd size any number of times:

$$\frac{1}{1 - x}\cdot\frac{1}{1 - x^3}\cdot\frac{1}{1 - x^5}\cdots$$

Now the trick: $1 + x^k = \dfrac{1 - x^{2k}}{1 - x^k}$. Rewrite every factor of the first product that way:

$$\frac{1 - x^2}{1 - x}\cdot\frac{1 - x^4}{1 - x^2}\cdot\frac{1 - x^6}{1 - x^3}\cdot\frac{1 - x^8}{1 - x^4}\cdots$$

Every top $1 - x^{\text{even}}$ cancels a bottom $1 - x^{\text{even}}$, and what is left on the bottom is exactly
$1 - x^{\text{odd}}$ for every odd number. The two generating functions are equal, so every coefficient is equal, and
that is Euler's theorem. This was Euler's own proof.

### Solving the dice puzzle

A die with positive whole-number faces has a generating function with positive coefficients, no constant term (no
face 0), and coefficients adding to 6 (six faces). We want two such dice $A$ and $B$ with $A(x)B(x) = D(x)^2$.

**Factorise $D(x)$.** It splits into pieces that cannot be split further using whole-number coefficients:

$$D(x) = x(1 + x)(1 + x + x^2)(1 - x + x^2).$$

(Check: $(1 + x)(1 + x + x^2) = 1 + 2x + 2x^2 + x^3$, and multiplying by $1 - x + x^2$ gives
$1 + x + x^2 + x^3 + x^4 + x^5$; then times $x$.) So

$$D(x)^2 = x^2(1 + x)^2(1 + x + x^2)^2(1 - x + x^2)^2,$$

and like whole numbers into primes, polynomials split into these pieces in only one way. So $A$ and $B$ must share out
these pieces.

**Rules for sharing.** Each die needs one $x$ (no face 0). Put $x = 1$: each die's coefficients must add to 6, and the
pieces give $1 + 1 = 2$, $1 + 1 + 1 = 3$ and $1 - 1 + 1 = 1$. To make 6 from 2s and 3s, each die gets exactly one
$(1 + x)$ and one $(1 + x + x^2)$. The only freedom is how to share the two copies of $(1 - x + x^2)$: one each, or both
to one die.

- **One each**: $A = B = D$, the ordinary dice.
- **Both to one die**: $A = x(1 + x)(1 + x + x^2) = x + 2x^2 + 2x^3 + x^4$, faces 1, 2, 2, 3, 3, 4; and
  $B = x(1 + x)(1 + x + x^2)(1 - x + x^2)^2 = x + x^3 + x^4 + x^5 + x^6 + x^8$, faces 1, 3, 4, 5, 6, 8.

(Giving none of them to a die and both to the other is the same as the second case with the dice swapped.) So the
Sicherman dice are the **only** other pair. The generating function did not just count; it proved there is nothing
else to find.

## Worked examples

**1. Sevens.** The coefficient of $x^7$ in $D(x)^2$ is 6, from $x^1x^6, x^2x^5, \ldots, x^6x^1$. Of 36 rolls, 6 make 7.

**2. Coins.** Ways to pay 25 cents with 1-, 5- and 10-cent coins. Choose the number of 10s (0, 1 or 2), then the
number of 5s, then 1s fill the rest. Two 10s: 5 cents left, 0 or 1 five: 2 ways. One 10: 15 left, 0 to 3 fives: 4 ways.
No 10s: 25 left, 0 to 5 fives: 6 ways. Total $2 + 4 + 6 = 12$, the coefficient of $x^{25}$ in the product.

**3. Three dice.** The number of ways to roll a total of 10 with three dice is the coefficient of $x^{10}$ in $D(x)^3$.
Take the $x^3$ out: $D(x)^3 = x^3(1 + x + \cdots + x^5)^3$, so we need $x^7$ in $(1 + x + \cdots + x^5)^3$: amounts
$a + b + c = 7$ with each from 0 to 5. Stars and bars without limits gives $\dbinom{9}{2} = 36$; take away those with a
part 6 or 7: a part of 6 leaves 1 for the other two (2 ways), a part of 7 leaves 0 (1 way), for each of the 3 dice:
$3 \times 3 = 9$. So $36 - 9 = 27$.

**4. Limited sharing.** In how many ways can $a + b + c = 10$ with each between 0 and 4? The coefficient of $x^{10}$ in
$(1 + x + x^2 + x^3 + x^4)^3$. The triples are permutations of $(4, 4, 2)$ and $(4, 3, 3)$: $3 + 3 = 6$.

**5. Checking the dice.** Multiply $A = x + 2x^2 + 2x^3 + x^4$ by $B = x + x^3 + x^4 + x^5 + x^6 + x^8$. The $x^5$
coefficient: $x \cdot x^4$, $2x^2 \cdot x^3$, $x^4 \cdot x$ give $1 + 2 + 1 = 4$, the same as two normal dice (rolls
1+4, 2+3, 3+2, 4+1). ✓

## Try it

1. Find the coefficient of $x^3$ in $(1 + x + x^2)(1 + x + x^2 + x^3)$, and say what it counts.
2. Use $D(x)^2$ to find how many of the 36 rolls of two dice give a total of 9.
3. In how many ways can you pay 15 cents with 1-, 5- and 10-cent coins? List them.
4. A basket of 5 fruits may hold at most 2 apples, at most 1 orange, and any number of pears. Write the generating
   function and find the number of baskets.
5. Use $(1 + x)^m(1 + x)^n = (1 + x)^{m+n}$ to explain Vandermonde's identity from
   [level 7](../level-7/05-double-counting.md).
6. Show that $(1 - x)(1 + x + x^2 + x^3 + x^4 + x^5) = 1 - x^6$, and so $D(x) = \dfrac{x(1 - x^6)}{1 - x}$.
7. Ordinary four-sided dice have faces 1, 2, 3, 4, with generating function $T(x) = x(1 + x)(1 + x^2)$. Find a different
   pair of four-sided dice (positive whole-number faces) with the same totals as two ordinary ones.

??? note "Answers"
    1. Pairs $(i, j)$ with $i + j = 3$, $i \le 2$, $j \le 3$: $(0, 3), (1, 2), (2, 1)$: coefficient **3**. It counts the
       ways to take 3 sweets in all from a jar of 2 and a jar of 3.
    2. The coefficient of $x^9$ is 4: rolls 3+6, 4+5, 5+4, 6+3.
    3. **6**: fifteen 1s; one 5 and ten 1s; two 5s and five 1s; three 5s; one 10 and five 1s; one 10 and one 5.
    4. $(1 + x + x^2)(1 + x)\frac{1}{1 - x}$. Choose the apples (0, 1, 2) and the orange (0, 1); pears fill the rest, and
       there are always enough: $3 \times 2 = 6$ baskets.
    5. The coefficient of $x^r$ on the right is $\binom{m+n}{r}$. On the left, $x^r$ comes from $x^k$ in $(1 + x)^m$ times
       $x^{r-k}$ in $(1 + x)^n$, with coefficient $\binom{m}{k}\binom{n}{r-k}$, added over $k$. The two must be equal.
    6. $(1 - x)(1 + x + \cdots + x^5) = (1 + x + \cdots + x^5) - (x + x^2 + \cdots + x^6) = 1 - x^6$: all the middle terms
       cancel. Multiply by $x$ and divide by $1 - x$: $D(x) = x(1 + x + \cdots + x^5) = \frac{x(1 - x^6)}{1 - x}$.
    7. $T(x)^2 = x^2(1 + x)^2(1 + x^2)^2$. Each die needs an $x$, and its coefficients must add to 4; both $(1 + x)$
       and $(1 + x^2)$ give 2 at $x = 1$, so each die gets two of the four pieces. Other than one of each, give both
       $(1 + x)$ to one die: $x(1 + x)^2 = x + 2x^2 + x^3$, faces **1, 2, 2, 3**; and both $(1 + x^2)$ to the other:
       $x(1 + x^2)^2 = x + 2x^3 + x^5$, faces **1, 3, 3, 5**. Check the totals: 2 (1 way), 3 (2), 4 (3), 5 (4), 6 (3),
       7 (2), 8 (1), as for ordinary four-sided dice. ✓

## Common mistake

**Adding generating functions when you should multiply.** "Choose from this collection **and** from that one" multiplies
generating functions (sizes add); "choose from this collection **or** that one" adds them. It is the "and multiplies,
or adds" rule of level 2, one level up.

**Putting numbers in for $x$ too soon.** The endless sum $\frac{1}{1 - x}$ makes no sense at $x = 2$, but that does not
matter: we only read coefficients. Putting $x = 1$ is safe for a **polynomial** (it adds the coefficients, as in the
dice proof), but not for an endless sum.

## Where it leads

- Back: [Partitions of a number](04-partitions.md) · Next: [Counting with symmetry, properly](06-burnside-lemma.md)
- [Level 8 page](index.md) · [Counting topic page](../index.md)
- Dice totals and their chances: [Probability](../../probability/index.md).
- Factorising polynomials into pieces that cannot be split further: [Algebra](../../algebra/index.md), and
  [the fundamental theorem of algebra](../../numbers/level-8/05-fundamental-theorem.md) in Numbers. The piece
  $1 - x + x^2$ has two of the sixth roots of unity as its roots: [roots of unity](../../numbers/level-8/03-roots-of-unity.md).
- Endless sums like $\frac{1}{1 - x} = 1 + x + x^2 + \cdots$ are power series:
  [MAT137 Unit 14: power series and Taylor series](../../../uoft/MAT137/unit14.md).
