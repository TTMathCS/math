---
title: "Master: Combinations and Pascal's triangle"
---

# Master: Choosing groups, combinations and Pascal's triangle

*Counting and combinations · step 4 of 5*

## A question to start

In a lottery you pick 6 different numbers from 1 to 49. The order you pick them in does not matter. How many
different tickets are possible?

If order mattered, it would be $49 \times 48 \times 47 \times 46 \times 45 \times 44$, more than ten billion. But
order does not matter, and the true answer is **13,983,816**. So one ticket has about a 1 in 14 million chance of
matching the draw. This page shows where that number comes from, and the beautiful triangle of numbers that holds
all the answers to "how many ways to choose?"

## The idea

### Choosing, not arranging

A **combination** is a choice of a group where the **order does not matter**. A permutation (from the Build step)
is an arrangement where it does.

- Picking 3 friends to come to the cinema: a combination. {Ana, Ben, Cai} is the same group however you list it.
- Picking a captain, vice-captain and goalkeeper: a permutation. Who gets which job matters.

### Counting combinations from permutations

How many ways can you choose 3 friends out of 5?

First count as if order **did** matter: $^{5}P_{3} = 5 \times 4 \times 3 = 60$. But every group of 3 has now been
counted once for each order of its members, and 3 people can be ordered in $3! = 6$ ways. So each group appears 6
times in the 60:

$$\text{groups} = \frac{60}{6} = 10.$$

The same reasoning works for choosing $r$ things from $n$:

$$\binom{n}{r} = \frac{^{n}P_{r}}{r!} = \frac{n!}{r!\,(n-r)!}.$$

The symbol $\dbinom{n}{r}$ is read "**$n$ choose $r$**". You will also see it written $^{n}C_{r}$ or $C(n, r)$, and
calculators often have an "nCr" key.

**The lottery.** Choose 6 numbers from 49:

$$\binom{49}{6} = \frac{49 \times 48 \times 47 \times 46 \times 45 \times 44}{6!} = \frac{10{,}068{,}347{,}520}{720} = 13{,}983{,}816.$$

**Handshakes again.** In the Play step, 4 friends shook hands 6 times. A handshake is a choice of 2 people, order
not mattering, so with $n$ people there are

$$\binom{n}{2} = \frac{n(n-1)}{2}$$

handshakes. For 4 people that is $\dfrac{4 \times 3}{2} = 6$. ✓

### Choosing who is in is choosing who is out

Choosing 2 of 5 people to leave out is the same as choosing the 3 who stay in. So

$$\binom{n}{r} = \binom{n}{n-r}.$$

For example $\dbinom{10}{8} = \dbinom{10}{2} = 45$, which is much easier to work out.

### Pascal's triangle

Write a 1 at the top. Write each new row with a 1 at each end, and every other number the **sum of the two numbers
just above it**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 220" role="img" aria-label="Pascal's triangle, rows 0 to 6: 1; 1 1; 1 2 1; 1 3 3 1; 1 4 6 4 1; 1 5 10 10 5 1; 1 6 15 20 15 6 1">
  <circle cx="210" cy="20" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="210" y="25" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="188" cy="50" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="188" y="55" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="232" cy="50" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="232" y="55" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="166" cy="80" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="166" y="85" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="210" cy="80" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="210" y="85" font-size="14" text-anchor="middle" fill="currentColor">2</text>
  <circle cx="254" cy="80" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="254" y="85" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="144" cy="110" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="144" y="115" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="188" cy="110" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="188" y="115" font-size="14" text-anchor="middle" fill="currentColor">3</text>
  <circle cx="232" cy="110" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="232" y="115" font-size="14" text-anchor="middle" fill="currentColor">3</text>
  <circle cx="276" cy="110" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="276" y="115" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="122" cy="140" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="122" y="145" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="166" cy="140" r="14" fill="#7ccf9a" fill-opacity="0.6"/><text x="166" y="145" font-size="14" text-anchor="middle" fill="currentColor">4</text>
  <circle cx="210" cy="140" r="14" fill="#7ccf9a" fill-opacity="0.6"/><text x="210" y="145" font-size="14" text-anchor="middle" fill="currentColor">6</text>
  <circle cx="254" cy="140" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="254" y="145" font-size="14" text-anchor="middle" fill="currentColor">4</text>
  <circle cx="298" cy="140" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="298" y="145" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="100" cy="170" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="100" y="175" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="144" cy="170" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="144" y="175" font-size="14" text-anchor="middle" fill="currentColor">5</text>
  <circle cx="188" cy="170" r="14" fill="#7ccf9a" fill-opacity="0.6"/><text x="188" y="175" font-size="14" text-anchor="middle" fill="currentColor">10</text>
  <circle cx="232" cy="170" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="232" y="175" font-size="14" text-anchor="middle" fill="currentColor">10</text>
  <circle cx="276" cy="170" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="276" y="175" font-size="14" text-anchor="middle" fill="currentColor">5</text>
  <circle cx="320" cy="170" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="320" y="175" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="78" cy="200" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="78" y="205" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="122" cy="200" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="122" y="205" font-size="14" text-anchor="middle" fill="currentColor">6</text>
  <circle cx="166" cy="200" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="166" y="205" font-size="14" text-anchor="middle" fill="currentColor">15</text>
  <circle cx="210" cy="200" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="210" y="205" font-size="14" text-anchor="middle" fill="currentColor">20</text>
  <circle cx="254" cy="200" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="254" y="205" font-size="14" text-anchor="middle" fill="currentColor">15</text>
  <circle cx="298" cy="200" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="298" y="205" font-size="14" text-anchor="middle" fill="currentColor">6</text>
  <circle cx="342" cy="200" r="14" fill="#9cc9ea" fill-opacity="0.6"/><text x="342" y="205" font-size="14" text-anchor="middle" fill="currentColor">1</text>
</svg>
</div>

The green numbers show the rule: 4 + 6 = 10. The triangle is named after Blaise Pascal, who wrote about it in the
1600s, but mathematicians in India, Persia and China knew it centuries earlier.

Number the rows from 0 at the top, and the places in each row from 0 on the left. Then the number in row $n$,
place $r$, is exactly $\dbinom{n}{r}$. For example, row 5, place 2 is 10, and $\dbinom{5}{2} = 10$. Pascal's triangle
is a ready-made table of every "choose" number.

**Why the adding rule gives the choose numbers.** Choose $r$ people from $n$, and look at one particular person,
say Dee. Either Dee is in the group, and you choose the other $r - 1$ from the remaining $n - 1$; or Dee is out, and
you choose all $r$ from the remaining $n - 1$. Those two cases cover every group exactly once (addition principle):

$$\binom{n}{r} = \binom{n-1}{r-1} + \binom{n-1}{r}.$$

That is the "add the two above" rule.

### Paths on a grid

How many shortest routes go from the bottom-left corner of a grid to a point 4 blocks east and 3 blocks north? Every
shortest route is 7 blocks long: 4 Es and 3 Ns in some order, like EENENEN. A route is fixed once you choose
**which 3 of the 7 blocks** go north:

$$\binom{7}{3} = 35 \text{ routes.}$$

## Worked examples

**1. A committee.** A club has 6 boys and 5 girls. A committee of 4 is chosen.

*(a) How many committees have exactly 2 girls?* Choose the girls **and then** the boys:
$\dbinom{5}{2} \times \dbinom{6}{2} = 10 \times 15 = 150$.

*(b) How many committees have at least one girl?* Counting "1 girl, 2 girls, 3 girls, 4 girls" separately works,
but there is a shortcut. Count **all** committees and take away the ones with **no** girls:

$$\binom{11}{4} - \binom{6}{4} = 330 - 15 = 315.$$

Counting the opposite and subtracting is often the quickest way to deal with "at least one".

**2. With one person fixed.** How many committees of 3 from 7 people include Ana? Ana is in, so choose the other 2
from the remaining 6: $\dbinom{6}{2} = 15$.

## Try it

1. Work out $\dbinom{6}{2}$ and $\dbinom{10}{3}$.
2. A pizza shop has 8 toppings. How many pizzas have exactly 3 different toppings?
3. How many handshakes happen when 12 people all shake hands once?
4. Write row 8 of Pascal's triangle (starting 1, 8, ...). Add up the numbers in rows 0 to 4. What do you notice?
5. How many shortest grid routes go 5 blocks east and 3 blocks north?
6. How many different 5-card hands can be dealt from a 52-card pack?

??? note "Answers"
    1. $\dbinom{6}{2} = \dfrac{6 \times 5}{2} = 15$. $\dbinom{10}{3} = \dfrac{10 \times 9 \times 8}{3 \times 2 \times 1} = 120$.
    2. $\dbinom{8}{3} = \dfrac{8 \times 7 \times 6}{6} = 56$.
    3. $\dbinom{12}{2} = \dfrac{12 \times 11}{2} = 66$.
    4. Row 7 is 1, 7, 21, 35, 35, 21, 7, 1, so row 8 is **1, 8, 28, 56, 70, 56, 28, 8, 1**. The row sums are 1, 2, 4,
       8, 16: they double each time. Row $n$ adds up to $2^n$. (The Beyond step shows why.)
    5. 8 blocks, choose which 3 go north: $\dbinom{8}{3} = 56$.
    6. $\dbinom{52}{5} = \dfrac{52 \times 51 \times 50 \times 49 \times 48}{120} = 2{,}598{,}960$.

## Common mistake

**Using combinations when order matters, or permutations when it does not.** Before you calculate, ask: *if I swap
two of the chosen things, do I get something different?* Swapping two lottery numbers gives the same ticket:
combination. Swapping the gold and silver winners gives a different result: permutation. The two answers differ by a
factor of $r!$, which is usually large.

## Where it leads

- Next step: [Beyond: the binomial theorem](05-beyond.md), where Pascal's triangle multiplies out brackets and
  proves things by counting.
- Back a step: [Build: permutations](03-build.md)
- The 1 in 14 million lottery chance, and how to work out chances like it, is in
  [Probability](../probability/03-build.md).
- The diagonals of Pascal's triangle hold the counting numbers, the triangle numbers from
  [Patterns](../patterns/02-explore.md), and more.
