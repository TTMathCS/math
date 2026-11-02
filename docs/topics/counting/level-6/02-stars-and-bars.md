---
title: "Stars and bars"
---

# Stars and bars

*Counting and combinations · level 6, lesson 2 of 6*

## A question to start

You have 10 identical sweets to share among 3 children, Ali, Bo and Cy. Some children might get none (you are not
always fair). In how many ways can you do it?

You could start listing: 10, 0, 0; then 9, 1, 0 and 9, 0, 1; then 8, 2, 0 ... It goes on for a long time. The answer
is **66**, and there is a picture that turns this question into a single combination. Once you see the picture, a
whole family of problems (sharing, shopping, solving equations in whole numbers) falls in one line each.

## The idea

### Identical things and different things

In level 5 we always chose **different** things: people, cards, toppings. Here the sweets are **identical**: it does
not matter **which** sweets Ali gets, only **how many**. A sharing is described completely by three numbers, such as
"Ali 3, Bo 5, Cy 2", written $(3, 5, 2)$. Order matters among the children ($(3, 5, 2)$ is different from
$(5, 3, 2)$: Ali and Bo would notice), but the sweets have no names.

### The picture

Put the 10 sweets in a row as stars. To share them, put in **2 bars** that cut the row into 3 parts: everything
before the first bar goes to Ali, everything between the bars to Bo, everything after the second bar to Cy.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 150" role="img" aria-label="Two rows of 10 stars and 2 bars. The first row, 3 stars, bar, 5 stars, bar, 2 stars, means 3, 5 and 2 sweets. The second row, bar, 7 stars, bar, 3 stars, means 0, 7 and 3 sweets">
  <circle cx="40" cy="35" r="10" fill="#eea66f" stroke="currentColor"/>
  <circle cx="70" cy="35" r="10" fill="#eea66f" stroke="currentColor"/>
  <circle cx="100" cy="35" r="10" fill="#eea66f" stroke="currentColor"/>
  <line x1="130" y1="17" x2="130" y2="53" stroke="currentColor" stroke-width="4"/>
  <circle cx="160" cy="35" r="10" fill="#eea66f" stroke="currentColor"/>
  <circle cx="190" cy="35" r="10" fill="#eea66f" stroke="currentColor"/>
  <circle cx="220" cy="35" r="10" fill="#eea66f" stroke="currentColor"/>
  <circle cx="250" cy="35" r="10" fill="#eea66f" stroke="currentColor"/>
  <circle cx="280" cy="35" r="10" fill="#eea66f" stroke="currentColor"/>
  <line x1="310" y1="17" x2="310" y2="53" stroke="currentColor" stroke-width="4"/>
  <circle cx="340" cy="35" r="10" fill="#eea66f" stroke="currentColor"/>
  <circle cx="370" cy="35" r="10" fill="#eea66f" stroke="currentColor"/>
  <text x="210" y="69" font-size="13" text-anchor="middle" fill="currentColor">child 1, child 2, child 3 get 3, 5, 2</text>
  <line x1="40" y1="82" x2="40" y2="118" stroke="currentColor" stroke-width="4"/>
  <circle cx="70" cy="100" r="10" fill="#eea66f" stroke="currentColor"/>
  <circle cx="100" cy="100" r="10" fill="#eea66f" stroke="currentColor"/>
  <circle cx="130" cy="100" r="10" fill="#eea66f" stroke="currentColor"/>
  <circle cx="160" cy="100" r="10" fill="#eea66f" stroke="currentColor"/>
  <circle cx="190" cy="100" r="10" fill="#eea66f" stroke="currentColor"/>
  <circle cx="220" cy="100" r="10" fill="#eea66f" stroke="currentColor"/>
  <circle cx="250" cy="100" r="10" fill="#eea66f" stroke="currentColor"/>
  <line x1="280" y1="82" x2="280" y2="118" stroke="currentColor" stroke-width="4"/>
  <circle cx="310" cy="100" r="10" fill="#eea66f" stroke="currentColor"/>
  <circle cx="340" cy="100" r="10" fill="#eea66f" stroke="currentColor"/>
  <circle cx="370" cy="100" r="10" fill="#eea66f" stroke="currentColor"/>
  <text x="210" y="134" font-size="13" text-anchor="middle" fill="currentColor">child 1, child 2, child 3 get 0, 7, 3</text>
</svg>
</div>

A bar at the very start means Ali gets nothing. Two bars side by side would mean Bo gets nothing.

Now two facts.

- **Every sharing gives exactly one row.** Given $(3, 5, 2)$, write 3 stars, a bar, 5 stars, a bar, 2 stars.
- **Every row gives exactly one sharing.** Any row of 10 stars and 2 bars, in any order, can be read off as a sharing.

So the sharings and the rows can be paired off perfectly (a **bijection**, which you met in level 5 lesson 2), and
there are exactly as many of each. Counting rows is easy: each row has $10 + 2 = 12$ positions, and you just choose
which 2 of them hold the bars. The stars fill the rest.

$$\binom{12}{2} = \frac{12 \times 11}{2} = 66.$$

### The general rule

To share $n$ identical things among $k$ people (some may get none), you need $n$ stars and $k - 1$ bars (one fewer bar
than people, just as 3 children needed 2 bars). That is $n + k - 1$ positions, and you choose which $k - 1$ are bars:

$$\text{number of ways} = \binom{n + k - 1}{k - 1} = \binom{n + k - 1}{n}$$

(The second form chooses the positions of the stars instead: in or out again.)

A tiny check you can list: 4 sweets between 2 children. The sharings are $(4,0), (3,1), (2,2), (1,3), (0,4)$, which is
5. The rule gives $\dbinom{4 + 1}{1} = 5$. ✓

### The same thing as an equation

"Ali gets $a$, Bo gets $b$, Cy gets $c$, and there are 10 sweets" is the equation

$$a + b + c = 10,$$

where $a$, $b$, $c$ are whole numbers that can be 0. So this equation has 66 solutions in whole numbers. Different
order counts as a different solution: $a = 3, b = 5, c = 2$ is not the same as $a = 5, b = 3, c = 2$.

### Everyone gets at least one

If each child must get at least one sweet, there are two neat ways to see it.

**Give one each first.** Hand every child one sweet. Now 7 are left, to share freely among 3:
$\dbinom{7 + 2}{2} = \dbinom{9}{2} = 36$.

**Choose gaps.** Line up the 10 stars. There are 9 gaps **between** neighbouring stars. If no child may get zero, the
2 bars must go in 2 **different** gaps (not at the ends, and not side by side). Choose 2 of the 9 gaps:
$\dbinom{9}{2} = 36$. ✓

The same trick handles any minimum: if Bo must get at least 3, give him 3 first and share the rest freely.

### Too many for one child: use inclusion-exclusion

What if no child may have more than 5? Start with all 66 sharings and remove the bad ones. A sharing is bad if some
child has 6 or more. If Ali has at least 6, give Ali 6 first and share the remaining 4 freely: $\dbinom{6}{2} = 15$.
The same for Bo and for Cy. Could two children both have 6 or more? That needs 12 sweets, and there are only 10, so
no. By inclusion-exclusion (lesson 1), the bad sharings number $15 + 15 + 15 = 45$, and the good ones $66 - 45 = 21$.

### Choosing with repeats allowed

A bakery sells 4 kinds of doughnut. You buy a box of 6. The box is just a collection, so order does not matter, but
you may take several of the same kind. How many different boxes?

A box is described by how many of each kind: $g + j + c + s = 6$ (glazed, jam, chocolate, sugar). That is sharing 6
identical "slots" among 4 kinds: $\dbinom{6 + 3}{3} = \dbinom{9}{3} = 84$ boxes.

So stars and bars also counts **choices with repetition, where order does not matter**. This is the fourth corner of
the counting chart in the next lesson.

## Worked examples

**1. Sharing freely.** 8 identical balls go into 3 different boxes. How many ways?

8 stars, 2 bars, 10 positions: $\dbinom{10}{2} = 45$.

**2. At least one each.** The same, but no box may be empty.

Put one ball in each box first; 5 are left: $\dbinom{5 + 2}{2} = \dbinom{7}{2} = 21$. (Gaps: 8 balls have 7 gaps,
choose 2: $\dbinom{7}{2} = 21$. ✓)

**3. Different minimums.** How many solutions does $a + b + c + d = 12$ have in whole numbers, if $a \ge 1$ and
$b \ge 2$ (and $c$, $d$ can be 0)?

Give $a$ one and $b$ two first: $3$ used, $9$ left to share among 4 freely. $\dbinom{9 + 3}{3} = \dbinom{12}{3} = 220$.

**4. Three dice.** In how many ways can three dice (red, white, blue) add up to 10?

- Each die shows 1 to 6, so we want $a + b + c = 10$ with each between 1 and 6.
- At least 1 each: give one each, 7 left: $\dbinom{9}{2} = 36$.
- Too big: a die over 6 means at least 7. Give that die 7, which leaves 3 to share with each die at least 1. After
  giving the other two dice 1 each, there is 1 left to share among 3: $\dbinom{3}{2} = 3$. Three dice could be the
  big one: $3 \times 3 = 9$. Two dice over 6 would need at least 14. So no double overlap.
- Answer: $36 - 9 = 27$.

## Try it

1. In how many ways can 8 identical balls go into 3 different boxes if boxes may be empty? (Work it out, then compare
   with worked example 1.)
2. How many solutions does $x + y + z + w = 10$ have in whole numbers (0 allowed)?
3. How many solutions does $x + y + z + w = 10$ have in positive whole numbers (each at least 1)?
4. Twelve identical apples are shared among 4 children so that each gets at least 2. How many ways?
5. An ice-cream cup holds 5 scoops, chosen from 3 flavours, and you can repeat flavours. Order does not matter in a
   cup. How many different cups?
6. Ten identical sweets are shared among Ali, Bo and Cy, with nobody getting more than 5. List all 21 ways that have
   Ali getting exactly 5 or exactly 0, and check part of the count from the lesson.
7. If the 10 sweets were all **different**, how many ways could they be given to 3 children? Why is this answer so
   much bigger than 66?
8. How many ways can 15 identical coins be put into 4 different jars so that every jar has at least 1 coin and no
   jar has more than 7?

??? note "Answers"
    1. $\dbinom{10}{2} = 45$.
    2. 10 stars and 3 bars: $\dbinom{13}{3} = 286$.
    3. Give each one first, 6 left: $\dbinom{6 + 3}{3} = \dbinom{9}{3} = 84$. (Or: 9 gaps between 10 stars,
       choose 3.)
    4. Give each child 2 first (8 apples), 4 left among 4: $\dbinom{4 + 3}{3} = \dbinom{7}{3} = 35$.
    5. 5 stars and 2 bars: $\dbinom{7}{2} = 21$.
    6. Ali 5: $b + c = 5$ with each at most 5, so $(b, c) = (0,5), (1,4), (2,3), (3,2), (4,1), (5,0)$: 6 ways.
       Ali 0: $b + c = 10$ with each at most 5, only $(5, 5)$: 1 way. The full count of 21 also includes Ali
       getting 1 (2 ways), 2 (3 ways), 3 (4 ways) and 4 (5 ways): $6 + 1 + 2 + 3 + 4 + 5 = 21$. ✓
    7. Each sweet independently goes to one of 3 children: $3^{10} = 59049$. Now it matters **which** sweets each
       child gets, not just how many, so many sharings that looked the same before are now different.
    8. At least 1 each: give each 1, 11 left, $\dbinom{11 + 3}{3} = \dbinom{14}{3} = 364$. Too many in a given jar
       (8 or more): give that jar 8 and the others 1 each (11 used), 4 left: $\dbinom{4 + 3}{3} = \dbinom{7}{3} = 35$,
       for each of 4 jars: 140. Two jars with 8 or more needs at least 18 coins: impossible. Answer
       $364 - 140 = 224$.

## Common mistake

**Using stars and bars for different objects.** Stars and bars only works when the things being shared are
**identical**. If the sweets are all different (or the people are being placed into teams), each object makes its
own choice and you multiply, as in question 7.

**Getting the number of bars wrong.** $k$ people need $k - 1$ bars, not $k$. Three children are separated by two
dividers. A good check is a small case you can list, such as 2 sweets for 2 children: $(2,0), (1,1), (0,2)$, which is
3, and $\dbinom{2 + 1}{1} = 3$. ✓

## Where it leads

- Back: [Inclusion-exclusion](01-inclusion-exclusion.md) · Next: [Mixed problems: which rule?](03-mixed-problems.md)
- [Level 6 page](index.md) · [Counting topic page](../index.md)
- Turning sharings into rows of stars and bars is a bijection; there are more in
  [Counting by a bijection](05-counting-bijection.md).
- Counting the ways to write a number as a sum where the order does **not** matter (5 = 3 + 2 = 2 + 3 counted once)
  is much harder: partitions, in [Level 8](../level-8/index.md).
- Counting whole-number solutions of equations is a theme of [Number theory](../../number-theory/index.md) and
  [Algebra](../../algebra/index.md); three dice adding to 10 is a [Probability](../../probability/index.md) question.
