---
title: "Choosing, not arranging"
---

# Choosing, not arranging

*Counting and combinations · level 5, lesson 1 of 6*

## A question to start

Eight runners are in a race. In level 4 you counted the ways to give out gold, silver and bronze medals:

$$8 \times 7 \times 6 = 336.$$

Now the coach wants to pick a **relay team** of 3 runners from the same 8. Nobody is first, second or third on the
team; they are simply "in". How many different teams are possible?

The answer is **56**. That is exactly 6 times fewer than 336. Why 6, and not 3 or 2 or some messy number? By the end of
this lesson you will know why the division is always exact, and you will be able to count any "choose a group"
question in one line.

## The idea

### Two kinds of question

Look at these two questions side by side.

- *Podium:* in how many ways can 3 of the 8 runners get gold, silver and bronze?
- *Team:* in how many ways can 3 of the 8 runners be picked for a relay team?

The podium Ana-gold, Ben-silver, Cai-bronze is **different** from Ben-gold, Ana-silver, Cai-bronze. Ana would
certainly notice. But the team {Ana, Ben, Cai} is the **same** team as {Ben, Ana, Cai}. Writing the names in another
order does not change who is on it.

An arrangement where the order matters is a **permutation** (level 4). A choice of a group where the order does
**not** matter is a **combination**. The curly brackets { } are the usual way to write a group where order does not
matter; a group like this is called a **set**.

A good test: *if I swap two of the chosen things, do I get something different?* If yes, it is a permutation. If no,
it is a combination.

### From podiums to teams

Here is the trick. Count the podiums first (that is easy), then ask how many podiums belong to each team.

Take the team {Ana, Ben, Cai}. Which podiums use exactly these three runners? All the ways to put the three of them in
order:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 200" role="img" aria-label="Six podium orders of A, B and C, each with an arrow to one team box containing A, B and C">
  <rect x="20" y="10" width="110" height="24" rx="5" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor"/>
  <text x="75" y="27" font-size="14" text-anchor="middle" fill="currentColor">A, B, C</text>
  <rect x="20" y="40" width="110" height="24" rx="5" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor"/>
  <text x="75" y="57" font-size="14" text-anchor="middle" fill="currentColor">A, C, B</text>
  <rect x="20" y="70" width="110" height="24" rx="5" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor"/>
  <text x="75" y="87" font-size="14" text-anchor="middle" fill="currentColor">B, A, C</text>
  <rect x="20" y="100" width="110" height="24" rx="5" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor"/>
  <text x="75" y="117" font-size="14" text-anchor="middle" fill="currentColor">B, C, A</text>
  <rect x="20" y="130" width="110" height="24" rx="5" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor"/>
  <text x="75" y="147" font-size="14" text-anchor="middle" fill="currentColor">C, A, B</text>
  <rect x="20" y="160" width="110" height="24" rx="5" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor"/>
  <text x="75" y="177" font-size="14" text-anchor="middle" fill="currentColor">C, B, A</text>
  <line x1="130" y1="22" x2="270" y2="92" stroke="currentColor" stroke-width="1.2"/>
  <line x1="130" y1="52" x2="270" y2="94" stroke="currentColor" stroke-width="1.2"/>
  <line x1="130" y1="82" x2="270" y2="96" stroke="currentColor" stroke-width="1.2"/>
  <line x1="130" y1="112" x2="270" y2="98" stroke="currentColor" stroke-width="1.2"/>
  <line x1="130" y1="142" x2="270" y2="100" stroke="currentColor" stroke-width="1.2"/>
  <line x1="130" y1="172" x2="270" y2="102" stroke="currentColor" stroke-width="1.2"/>
  <rect x="270" y="75" width="130" height="44" rx="8" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <text x="335" y="102" font-size="16" text-anchor="middle" fill="currentColor">{A, B, C}</text>
  <text x="75" y="198" font-size="12" text-anchor="middle" fill="currentColor">6 podiums</text>
  <text x="335" y="140" font-size="12" text-anchor="middle" fill="currentColor">1 team</text>
</svg>
</div>

Three people can be put in order in $3! = 3 \times 2 \times 1 = 6$ ways. So this team owns **6** of the podiums.

The important point is that **every** team owns exactly 6 podiums, not just this one. Any team of 3 can be put in
order in 6 ways, whoever is on it. So the 336 podiums fall into piles of 6, one pile for each team, with no podium left
over and none in two piles. The number of piles is

$$\frac{336}{6} = 56 \text{ teams.}$$

That is why the division is exact: we are not "sharing out" 336 roughly, we are counting piles that all have the same
size.

### The general rule

Choose $r$ things from $n$ different things, where order does not matter.

1. Count as if order **did** matter: ${}^nP_r = n \times (n-1) \times \cdots$, with $r$ factors.
2. Every group of $r$ things has been counted once for each of its orders, and $r$ things have $r!$ orders.
3. So divide by $r!$.

The number of ways is written $\dbinom{n}{r}$ and read "**$n$ choose $r$**". You will also see ${}^nC_r$ or
$C(n, r)$; they all mean the same, and many calculators have an "nCr" key.

$$\binom{n}{r} = \frac{{}^nP_r}{r!} = \frac{n \times (n-1) \times \cdots \times (n - r + 1)}{r!}$$

Using factorials, ${}^nP_r = \dfrac{n!}{(n-r)!}$, so the same number can be written

$$\binom{n}{r} = \frac{n!}{r!\,(n-r)!}$$

The first form is the one to **calculate** with (fewer numbers); the second is the one to **reason** with (it shows
a lovely symmetry, which is the next lesson).

For the relay team: $\dbinom{8}{3} = \dfrac{8 \times 7 \times 6}{3 \times 2 \times 1} = \dfrac{336}{6} = 56$.

### Cancel before you multiply

For $\dbinom{10}{4}$ you could work out $10 \times 9 \times 8 \times 7 = 5040$ and then divide by $24$. It is easier
to cancel first:

$$\binom{10}{4} = \frac{10 \times 9 \times 8 \times 7}{4 \times 3 \times 2 \times 1}.$$

The $4 \times 2$ on the bottom cancels the 8 on top; the 3 on the bottom goes into the 9, leaving 3. What is left is
$10 \times 3 \times 7 = 210$.

Here is a surprise hiding in this: the bottom **always** cancels completely. The product of any 4 whole numbers in a
row, such as $10 \times 9 \times 8 \times 7$, is always divisible by $4! = 24$. Any 7 numbers in a row multiply to a
multiple of $7! = 5040$. Proving that with divisibility rules is hard work. But the counting argument proves it in one
sentence: the answer counts teams, and you cannot have $210.5$ teams, so the division must come out exact.

### Checking by listing

It is worth seeing the rule work on something small enough to list. Choose 2 letters from A, B, C, D, E. Listing
in an organised way (everything with A first, then everything with B but not A, and so on):

| With A | With B (no A) | With C (no A, B) | With D (no A, B, C) |
| --- | --- | --- | --- |
| AB, AC, AD, AE | BC, BD, BE | CD, CE | DE |

That is $4 + 3 + 2 + 1 = 10$. The rule says $\dbinom{5}{2} = \dfrac{5 \times 4}{2} = 10$. ✓ Notice that "BA" never
appears: it is the same pair as AB, already counted.

### Some easy values

- $\dbinom{n}{1} = n$: choosing one thing from $n$ is just picking it.
- $\dbinom{n}{n} = 1$: choosing all of them can only be done one way.
- $\dbinom{n}{0} = 1$: choosing nothing can be done in exactly one way (choose nothing). The formula agrees if you
  remember $0! = 1$: $\dfrac{n!}{0!\,n!} = 1$.
- $\dbinom{n}{2} = \dfrac{n(n-1)}{2}$: the handshake numbers from level 2. A handshake is a choice of 2 people, and
  shaking hands with Ben is the same handshake as Ben shaking hands with you.

<figure class="play" data-play="arrange" data-mode="comb"><span class="ai-tag">AI-created</span><figcaption><b>Choose, don't arrange.</b> AB and BA are the same group.</figcaption></figure>

## Worked examples

**1. A pizza.** A pizza shop has 10 toppings. How many pizzas have exactly 3 different toppings?

- Does order matter? Ham-olive-pepper is the same pizza as pepper-ham-olive. No: a combination.
- $\dbinom{10}{3} = \dfrac{10 \times 9 \times 8}{3 \times 2 \times 1} = \dfrac{720}{6} = 120$.

**2. Handshakes and lines.** At a meeting, 20 people each shake hands with everyone else once. How many handshakes?

- A handshake is a pair of people, order not mattering: $\dbinom{20}{2} = \dfrac{20 \times 19}{2} = 190$.
- The same count answers a geometry question: 20 points, no three on one straight line, give $190$ straight lines
  through pairs of them. A line is fixed by a pair of points, and the order of the points does not matter.

**3. Triangles from points on a circle.** Mark 10 points on a circle. How many triangles have all three corners at
these points?

- Any 3 of the points make a triangle (points on a circle are never three in a straight line).
- Different sets of 3 points give different triangles, and the order of the corners does not matter.
- $\dbinom{10}{3} = 120$ triangles.

**4. Jobs or no jobs.** A class of 12 must send 4 students to a meeting.

- *(a) Just 4 representatives:* $\dbinom{12}{4} = \dfrac{12 \times 11 \times 10 \times 9}{24} = \dfrac{11880}{24} = 495$.
- *(b) A president, secretary, treasurer and reporter:* now each person gets a different job, so order matters:
  ${}^{12}P_4 = 12 \times 11 \times 10 \times 9 = 11880$.
- Check: $495 \times 4! = 495 \times 24 = 11880$. ✓ Each group of 4 can share out the 4 jobs in $4! = 24$ ways.

**5. Choosing a team, then a captain.** In example 4(a), suppose one of the 4 must be captain. Choose the group
(495 ways), then the captain from the group (4 ways): $495 \times 4 = 1980$. You could also choose the captain first
(12 ways) and then 3 others from the remaining 11: $12 \times \dbinom{11}{3} = 12 \times 165 = 1980$. ✓ Two
different ways of counting, the same answer: always a good sign.

## Try it

1. Work out $\dbinom{7}{2}$ and $\dbinom{8}{3}$, cancelling before you multiply.
2. Six friends want to go to the cinema but only 2 tickets are left. How many different pairs could go? List them to
   check, calling the friends A to F.
3. A coach has 9 swimmers. (a) How many ways to choose 4 for a relay team? (b) How many ways to choose 4 **and** set
   the order they swim in?
4. Fifteen points are marked on a circle. How many chords (straight lines joining two of the points) are there? How
   many triangles?
5. An ice-cream shop has 12 flavours. How many tubs have 3 **different** flavours, if the tub just holds the
   flavours with no order?
6. In a chess club of 30, every member plays every other member once. How many games?
7. Without multiplying it out, explain why $7 \times 6 \times 5 \times 4$ must be a multiple of 24. Then find
   $\dfrac{7 \times 6 \times 5 \times 4}{24}$ and say what it counts.
8. A polygon has 12 corners. How many diagonals does it have? (A diagonal joins two corners that are not next to each
   other.)

??? note "Answers"
    1. $\dbinom{7}{2} = \dfrac{7 \times 6}{2} = 21$. $\dbinom{8}{3} = \dfrac{8 \times 7 \times 6}{6} = 56$ (the 6 on
       top cancels the $3 \times 2 = 6$ on the bottom).
    2. $\dbinom{6}{2} = \dfrac{6 \times 5}{2} = 15$. The list: AB, AC, AD, AE, AF, BC, BD, BE, BF, CD, CE, CF, DE, DF,
       EF. That is $5 + 4 + 3 + 2 + 1 = 15$. ✓
    3. (a) $\dbinom{9}{4} = \dfrac{9 \times 8 \times 7 \times 6}{24} = \dfrac{3024}{24} = 126$.
       (b) ${}^9P_4 = 9 \times 8 \times 7 \times 6 = 3024$, which is $126 \times 24$: each team has $4! = 24$
       swimming orders.
    4. Chords: $\dbinom{15}{2} = \dfrac{15 \times 14}{2} = 105$. Triangles:
       $\dbinom{15}{3} = \dfrac{15 \times 14 \times 13}{6} = \dfrac{2730}{6} = 455$.
    5. $\dbinom{12}{3} = \dfrac{12 \times 11 \times 10}{6} = 220$.
    6. A game is a pair of members: $\dbinom{30}{2} = \dfrac{30 \times 29}{2} = 435$.
    7. $7 \times 6 \times 5 \times 4 = {}^7P_4$ counts ordered choices of 4 from 7. Each group of 4 appears in
       exactly $4! = 24$ orders, so the total is 24 times a whole number of groups. The quotient is
       $\dfrac{840}{24} = 35 = \dbinom{7}{4}$, the number of ways to choose 4 things from 7.
    8. Pairs of corners: $\dbinom{12}{2} = 66$. Of these, 12 pairs are next to each other (they are the sides). So
       $66 - 12 = 54$ diagonals.

## Common mistake

**Dividing by $r$ instead of $r!$.** "3 people, so divide by 3" gives $336 \div 3 = 112$ teams, which is wrong. A
team of 3 does not appear 3 times among the podiums; it appears once for each **order** of its members, and there are
$3! = 6$ orders. Draw the little picture of one team and its orders if you are unsure.

**Using combinations when the chosen things get different roles.** If the chosen people get different jobs, places or
prizes, swapping two of them changes the result, so order matters and you should **not** divide by $r!$. Ask the swap
question every time before you calculate.

## Where it leads

- Back: [Level 4: arranging, permutations](../level-4/index.md), where $n!$ and ${}^nP_r$ come from ([arranging some](../level-4/02-arranging-some.md)) · Next:
  [Choosing who is in is choosing who is out](02-in-or-out.md)
- [Level 5 page](index.md) · [Counting topic page](../index.md)
- The numbers $\dbinom{n}{r}$ fill a famous triangle: [Pascal's triangle](03-pascals-triangle.md), lesson 3.
- The handshake numbers 1, 3, 6, 10, ... are the triangle numbers of [Patterns](../../patterns/index.md).
- Counting teams is the first step in finding chances, such as the chance a random team includes your friend:
  [Probability](../../probability/index.md).
- The diagonals of a polygon (try-it question 8) also help to find its angles: [Geometry level 4, angles of any polygon](../../geometry/level-4/05-polygon-angles.md).
- The fact that a product of $r$ numbers in a row is divisible by $r!$ is a statement about divisibility, the home
  ground of [Number theory](../../number-theory/index.md).
