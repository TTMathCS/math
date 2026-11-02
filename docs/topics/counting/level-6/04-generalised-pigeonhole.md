---
title: "The generalised pigeonhole principle"
---

# The generalised pigeonhole principle

*Counting and combinations · level 6, lesson 4 of 6*

## A question to start

Six people meet at a party. Some pairs already know each other; some do not. Here is a surprising fact:

> However the friendships are arranged, there are always **three people who all know each other**, or **three people
> who are all strangers to each other**.

With 5 people it can fail: there is a way to arrange friendships among 5 people with no such three. With 6 it can
never fail, whatever the friendships are. You cannot check this by trying cases: 6 people make 15 pairs, and each pair
is "know" or "do not know", so there are $2^{15} = 32\,768$ possible parties. Yet a proof fits in a few lines, and its
key step is a stronger form of the pigeonhole principle.

## The idea

### The pigeonhole principle, again

In level 4 you met the **pigeonhole principle**: if more than $k$ pigeons fly into $k$ holes, some hole gets at least
two pigeons. So among 13 people, two share a birth month.

That tells you that "at least 2" share something. Often you can say much more.

### The stronger version

Suppose 100 people are sorted by birth month into 12 "boxes". If every month had **8 or fewer** people, the total
would be at most $12 \times 8 = 96$, fewer than 100. That is impossible, so some month has at least **9** people.

In general:

> **The generalised pigeonhole principle.** If $n$ objects are put into $k$ boxes, some box contains at least
> $\left\lceil \dfrac{n}{k} \right\rceil$ objects.

The symbol $\lceil x \rceil$ (read "the **ceiling** of $x$") means $x$ **rounded up** to a whole number:
$\lceil 8.33 \rceil = 9$, $\lceil 4 \rceil = 4$, $\lceil 2.01 \rceil = 3$. For 100 people in 12 months,
$\dfrac{100}{12} = 8.33\ldots$, rounded up is 9.

**Why it is true.** Suppose instead that every box had fewer than $\dfrac{n}{k}$ objects. Then the total would be
less than $k \times \dfrac{n}{k} = n$, but the total **is** $n$. So some box has at least $\dfrac{n}{k}$ objects, and
since the number in a box is a whole number, at least $\left\lceil \dfrac{n}{k} \right\rceil$. Put simply: not every
box can be below average.

### It cannot be improved

Could we promise 10 people in some month? No: 100 people could be spread as 9, 9, 9, 9, 8, 8, 8, 8, 8, 8, 8, 8
(that adds to $36 + 64 = 100$), and then no month has 10. So 9 is the best possible promise. The principle tells you
the guaranteed number, and an example of an even spread shows you cannot guarantee more.

### "How many to be sure?": think of the worst case

Questions like "how many must you take to be **sure** of ..." are pigeonhole questions turned round. Imagine the
unluckiest possible draws, and add one.

A drawer has 10 black, 10 white and 10 grey socks, mixed up, in the dark.

- *Sure of a pair (two the same colour)?* The worst luck is one of each colour: 3 socks, no pair. The 4th sock must
  match one of them. Answer: **4**.
- *Sure of three the same colour?* Worst luck: 2 of each colour, 6 socks. The 7th must make three. Answer: **7**.
- *Sure of two black socks?* Worst luck: all 20 white and grey socks first, then 1 black. Answer: $20 + 2 = 22$.

### The party problem

Now the question from the start. Draw the people as dots. Join two dots with a solid line if they know each other
and a dashed line if they do not. We must show there is a triangle whose three lines are all solid or all dashed.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="Left: five people in a ring; neighbours know each other (solid lines) and the others are strangers (dashed lines); there is no triangle all solid or all dashed. Right: six people; person P at the top has solid lines to three people X, Y and Z, highlighted, and dashed lines to the other two">
  <g stroke="currentColor" stroke-width="2">
    <line x1="110" y1="35" x2="176.6" y2="83.4"/><line x1="176.6" y1="83.4" x2="151.1" y2="161.6"/>
    <line x1="151.1" y1="161.6" x2="68.9" y2="161.6"/><line x1="68.9" y1="161.6" x2="43.4" y2="83.4"/>
    <line x1="43.4" y1="83.4" x2="110" y2="35"/>
  </g>
  <g stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4">
    <line x1="110" y1="35" x2="151.1" y2="161.6"/><line x1="110" y1="35" x2="68.9" y2="161.6"/>
    <line x1="176.6" y1="83.4" x2="68.9" y2="161.6"/><line x1="176.6" y1="83.4" x2="43.4" y2="83.4"/>
    <line x1="151.1" y1="161.6" x2="43.4" y2="83.4"/>
  </g>
  <g fill="#9cc9ea" stroke="currentColor">
    <circle cx="110" cy="35" r="9"/><circle cx="176.6" cy="83.4" r="9"/><circle cx="151.1" cy="161.6" r="9"/>
    <circle cx="68.9" cy="161.6" r="9"/><circle cx="43.4" cy="83.4" r="9"/>
  </g>
  <text x="110" y="200" font-size="12" text-anchor="middle" fill="currentColor">5 people: it can fail</text>
  <g stroke="currentColor" stroke-width="2">
    <line x1="320" y1="30" x2="385" y2="67.5"/><line x1="320" y1="30" x2="385" y2="142.5"/>
    <line x1="320" y1="30" x2="320" y2="180"/>
  </g>
  <g stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4">
    <line x1="320" y1="30" x2="255" y2="142.5"/><line x1="320" y1="30" x2="255" y2="67.5"/>
  </g>
  <circle cx="320" cy="30" r="10" fill="#eea66f" stroke="currentColor"/>
  <g fill="#7ccf9a" stroke="currentColor">
    <circle cx="385" cy="67.5" r="10"/><circle cx="385" cy="142.5" r="10"/><circle cx="320" cy="180" r="10"/>
  </g>
  <g fill="#9cc9ea" stroke="currentColor">
    <circle cx="255" cy="142.5" r="10"/><circle cx="255" cy="67.5" r="10"/>
  </g>
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <text x="320" y="16">P</text><text x="402" y="63">X</text><text x="402" y="148">Y</text><text x="335" y="200">Z</text>
  </g>
</svg>
</div>

**Step 1: pick one person.** Call them P. P has a line to each of the other 5 people, and each line is solid or
dashed. Five lines into two "boxes" (solid, dashed): by the generalised pigeonhole principle, at least
$\left\lceil \dfrac{5}{2} \right\rceil = 3$ of them are the same kind. Say 3 are solid, going to X, Y and Z (if 3 are
dashed, the argument is the same with the words swapped).

**Step 2: look at X, Y, Z.** Either some pair of them is joined by a solid line, or none is.

- If, say, X and Y know each other, then P, X, Y all know each other (P–X, P–Y and X–Y are all solid). Done.
- If no pair of X, Y, Z know each other, then X, Y, Z are three mutual strangers. Done.

Either way we find the triangle. That is the whole proof.

**Why 5 is not enough.** The picture on the left puts 5 people in a ring, where each knows only their two neighbours.
Any three people include two who are not neighbours (so not all solid), and any three include two who are neighbours
(you cannot pick 3 from a ring of 5 with no two side by side), so not all dashed.

This is the first result of **Ramsey theory**. The smallest party that guarantees 4 mutual friends or 4 mutual
strangers has 18 people. For 5 and 5, nobody yet knows the exact number: the possible parties are far too many to
check, even for computers.

## Worked examples

**1. A big school.** A school has 1000 students. Show that at least 3 share a birthday (day and month).

There are 366 possible birthdays (counting 29 February). $\dfrac{1000}{366} = 2.73\ldots$, so some birthday has at
least $\lceil 2.73 \rceil = 3$ students. (Check: if every day had at most 2, there would be at most $732$ students.)

**2. Hairs.** Suppose a city has 3 million people and nobody has a million or more hairs on their head. Show that at
least 3 people have exactly the same number of hairs.

The possible hair counts are 0, 1, 2, ..., 999 999: that is 1 000 000 boxes. Three million people in a million boxes:
some box has at least $\left\lceil \dfrac{3\,000\,000}{1\,000\,000} \right\rceil = 3$ people.

**3. Pairs that add to 11.** Show that if you choose any 6 different numbers from 1 to 10, two of them add to 11.

- Make 5 boxes: {1, 10}, {2, 9}, {3, 8}, {4, 7}, {5, 6}. Each number from 1 to 10 is in exactly one box, and the
  two numbers in each box add to 11.
- 6 numbers in 5 boxes: some box gets 2 numbers, and they add to 11.
- 5 numbers are not enough: 1, 2, 3, 4, 5 has no pair adding to 11.

**4. Smallest group.** What is the smallest number of people that guarantees 4 share a birth month?

With 36 people it could be exactly 3 per month, so 36 is not enough. With 37,
$\left\lceil \dfrac{37}{12} \right\rceil = 4$. Answer: **37**. (In general, to guarantee $m$ in some box among $k$
boxes you need $k(m - 1) + 1$ objects.)

## Try it

1. In a class of 40, show that at least 6 were born on the same day of the week.
2. A dice is rolled 25 times. What is the largest number $m$ you can be sure that some face comes up at least $m$
   times? Give an example showing you cannot promise more.
3. A drawer has 6 red, 8 blue and 10 green socks. How many must you take out in the dark to be sure of (a) two of the
   same colour; (b) three green socks?
4. Show that if you choose 7 different numbers from 1 to 12, two of them add to 13.
5. Show that among any 11 whole numbers, two of them have a difference that is divisible by 10.
6. Ten points are placed inside a square of side 3. Show that two of them are at most $\sqrt{2}$ apart. (Hint: cut the
   square into 9 small squares.)
7. Use the 5-person ring from the lesson: check one set of three people (say three in a row around the ring), and
   say why it is not all solid or all dashed.
8. At a party of 6, show that there are in fact always at least **two** triangles that are all solid or all dashed
   (they may share people) in the case where P has 4 or 5 solid lines and none of P's friends know each other.

??? note "Answers"
    1. 7 days are the boxes. $\dfrac{40}{7} = 5.71\ldots$, rounded up is 6. (If each day had at most 5, there would be
       at most 35 people.)
    2. $\left\lceil \dfrac{25}{6} \right\rceil = 5$. You cannot promise 6: the rolls could be five 1s and four each of
       2, 3, 4, 5, 6 ($5 + 20 = 25$), and then no face appears 6 times.
    3. (a) Worst case one of each colour (3 socks), so **4**. (b) Worst case all 6 red and 8 blue and 2 green
       (16 socks), so **17**.
    4. Boxes {1, 12}, {2, 11}, {3, 10}, {4, 9}, {5, 8}, {6, 7}: 6 boxes, each adding to 13. Seven numbers in 6 boxes
       put two in one box.
    5. Sort the numbers by their last digit, 0 to 9: 10 boxes. 11 numbers put two in the same box. Two numbers with
       the same last digit have a difference ending in 0, which is divisible by 10.
    6. Cut the 3 by 3 square into 9 squares of side 1. Ten points in 9 squares put two in the same small square. Two
       points in a square of side 1 are at most its diagonal apart, $\sqrt{1^2 + 1^2} = \sqrt{2}$.
    7. Three neighbours A, B, C in a row: A–B and B–C are solid (neighbours), but A–C is dashed (not neighbours).
       Mixed, so not all solid or all dashed. Any three of the five include both a neighbour pair and a non-neighbour
       pair in the same way.
    8. If P has at least 4 solid lines, to friends W, X, Y, Z say, and none of them know each other, then every
       three of W, X, Y, Z are mutual strangers: that gives $\dbinom{4}{3} = 4$ all-dashed triangles, so certainly at
       least two.

## Common mistake

**Rounding down instead of up.** 100 people in 12 months gives $8.33\ldots$, and the guarantee is **9**, not 8. The
whole point is that the boxes cannot all be **at or below** 8, so some box must go above.

**Confusing "some box has at least" with "every box has at least".** 100 people do not guarantee 9 in **every**
month; all 100 could be born in January. The principle only promises that the fullest box is at least the average.

## Where it leads

- Back: [Mixed problems: which rule?](03-mixed-problems.md) · Next: [Counting by a bijection](05-counting-bijection.md)
- [Level 6 page](index.md) · [Counting topic page](../index.md)
- The first pigeonhole lesson, with 13 people and socks: [Level 4, the pigeonhole principle](../level-4/06-pigeonhole-principle.md).
- Differences divisible by 10 (question 5) is the idea of remainders, at the heart of
  [Number theory](../../number-theory/index.md).
- The party proof is a proof by cases, a key method of [Logic](../../logic/index.md) and of
  [MAT137 Unit 1 (logic, sets and proofs)](../../../uoft/MAT137/unit01.md).
- Distances inside a square use Pythagoras: [Geometry level 6](../../geometry/level-6/01-pythagorean-proofs.md).
