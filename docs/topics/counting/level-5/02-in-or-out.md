---
title: "Choosing who is in is choosing who is out"
---

# Choosing who is in is choosing who is out

*Counting and combinations · level 5, lesson 2 of 6*

## A question to start

A school year has 100 students. A bus has room for 98 of them, so 98 will go on the trip and 2 will stay behind. In
how many ways can the 98 travellers be chosen?

The rule from lesson 1 says $\dbinom{100}{98}$, and the top of that fraction has 98 numbers multiplied together. It
looks like a monster. But the answer is only **4950**, and you can find it in your head. The trick is to stop thinking
about the 98 who go and think about the 2 who stay.

## The idea

### Every choice is also a choice of what is left

Suppose you choose 3 people from 5 friends, A, B, C, D, E. The moment you have chosen {A, C, D}, you have also
decided who is **not** chosen: {B, E}. And the other way round: if someone tells you only "B and E were left out",
you know the chosen three must be A, C and D.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 150" role="img" aria-label="Five circles labelled A to E. A, C and D are shaded green as chosen; B and E are shaded orange as left out. Below, the chosen set A, C, D is matched with the left-out set B, E">
  <circle cx="90" cy="45" r="22" fill="#7ccf9a" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="90" y="51" font-size="16" text-anchor="middle" fill="currentColor">A</text>
  <circle cx="150" cy="45" r="22" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="150" y="51" font-size="16" text-anchor="middle" fill="currentColor">B</text>
  <circle cx="210" cy="45" r="22" fill="#7ccf9a" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="210" y="51" font-size="16" text-anchor="middle" fill="currentColor">C</text>
  <circle cx="270" cy="45" r="22" fill="#7ccf9a" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="270" y="51" font-size="16" text-anchor="middle" fill="currentColor">D</text>
  <circle cx="330" cy="45" r="22" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="330" y="51" font-size="16" text-anchor="middle" fill="currentColor">E</text>
  <rect x="60" y="95" width="130" height="34" rx="8" fill="#7ccf9a" fill-opacity="0.5" stroke="currentColor"/>
  <text x="125" y="117" font-size="14" text-anchor="middle" fill="currentColor">in: {A, C, D}</text>
  <line x1="195" y1="112" x2="225" y2="112" stroke="currentColor" stroke-width="2"/>
  <text x="210" y="105" font-size="12" text-anchor="middle" fill="currentColor">pairs with</text>
  <rect x="230" y="95" width="130" height="34" rx="8" fill="#eea66f" fill-opacity="0.5" stroke="currentColor"/>
  <text x="295" y="117" font-size="14" text-anchor="middle" fill="currentColor">out: {B, E}</text>
</svg>
</div>

So the choices of "3 in" and the choices of "2 out" can be paired up perfectly: each group of 3 has exactly one
partner group of 2 (the rest), and each group of 2 has exactly one partner group of 3. When two collections can be
paired off like this, with nobody left without a partner and nobody with two partners, they must have the **same
size**. Therefore

$$\binom{5}{3} = \binom{5}{2} = 10.$$

The same pairing works for any numbers. Choosing $r$ things to take from $n$ is the same as choosing the $n - r$
things to leave:

$$\binom{n}{r} = \binom{n}{n-r}$$

### The same fact from the formula

You can also see it in the factorial formula from lesson 1:

$$\binom{n}{r} = \frac{n!}{r!\,(n-r)!} \qquad \binom{n}{n-r} = \frac{n!}{(n-r)!\,\big(n-(n-r)\big)!} = \frac{n!}{(n-r)!\,r!}$$

Both have $n!$ on top and the same two factorials on the bottom, just written in the other order. Two proofs, one by
**counting** and one by **algebra**. The counting proof tells you *why*; the algebra proof checks it.

### Use the smaller number

This is the big practical win. To work out $\dbinom{100}{98}$, switch to the 2 who stay:

$$\binom{100}{98} = \binom{100}{2} = \frac{100 \times 99}{2} = 4950.$$

Always compute $\dbinom{n}{r}$ with whichever of $r$ and $n - r$ is smaller. $\dbinom{20}{17}$ becomes
$\dbinom{20}{3} = \dfrac{20 \times 19 \times 18}{6} = 1140$, three numbers on top instead of seventeen.

### The biggest choice is in the middle

Write out the choose numbers for $n = 10$:

| $r$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $\binom{10}{r}$ | 1 | 10 | 45 | 120 | 210 | 252 | 210 | 120 | 45 | 10 | 1 |

They rise, peak in the middle, and fall again in a mirror image. The mirror is the in/out fact. But why do they rise
at first?

Compare one number with the next. To go from $\dbinom{n}{r}$ to $\dbinom{n}{r+1}$, the top of the fraction gains one
more factor, $n - r$, and the bottom gains one more factor, $r + 1$. So

$$\binom{n}{r+1} = \binom{n}{r} \times \frac{n - r}{r + 1}.$$

For $n = 10$, going from $r = 2$ to $r = 3$ multiplies by $\dfrac{8}{3}$: $45 \times \dfrac{8}{3} = 120$. ✓ The
multiplier $\dfrac{n-r}{r+1}$ is bigger than 1 while $r$ is small (lots of people left to add, few already in), and
smaller than 1 once you pass the middle. So the numbers grow until the middle and then shrink. When $n$ is even the
single biggest one is $\dbinom{n}{n/2}$; when $n$ is odd there are two equal biggest ones in the middle.

### Splitting into two named groups

"Choose 4 of 10 people for the car" is the same as "split 10 people into a car group of 4 and a bus group of 6".
So $\dbinom{10}{4} = 210$ also counts the ways to **split** 10 people into a group of 4 and a group of 6, when the
groups have different names (car and bus).

Splitting into three named groups works the same way, one choice after another. To split 9 people into a car of 2,
a van of 3 and a bus of 4: choose the car (from 9), then the van (from the 7 left); the bus takes everyone else.

$$\binom{9}{2} \times \binom{7}{3} \times \binom{4}{4} = 36 \times 35 \times 1 = 1260.$$

Here is a nice link with level 4. Give each person a letter for their vehicle: C, V or B. A split is then a word with
2 Cs, 3 Vs and 4 Bs, such as CVBBVCBVB, where the first letter says where person 1 goes, and so on. Arranging those
letters gives $\dfrac{9!}{2!\,3!\,4!} = \dfrac{362880}{2 \times 6 \times 24} = 1260$. ✓ Splitting people into named
groups and arranging letters with repeats are the same problem.

### Splitting into groups with no names

Now split 10 players into two teams of 5 for a practice match, where the teams have no names or colours. Choosing
5 for "one team" seems to give $\dbinom{10}{5} = 252$. But choosing {A, B, C, D, E} leaves {F, G, H, I, J} as the
other team, and choosing {F, G, H, I, J} gives exactly the same split. Every split has been counted **twice**, so the
true answer is $\dfrac{252}{2} = 126$.

This only happens when the groups are the **same size** and have **no names**. With a team of 4 and a team of 6
there is no double counting: the team of 4 is always the smaller one, so you can tell them apart.

## Worked examples

**1. Big numbers, small work.** Find $\dbinom{12}{10}$, $\dbinom{20}{17}$ and $\dbinom{100}{98}$.

- $\dbinom{12}{10} = \dbinom{12}{2} = \dfrac{12 \times 11}{2} = 66$.
- $\dbinom{20}{17} = \dbinom{20}{3} = \dfrac{20 \times 19 \times 18}{6} = \dfrac{6840}{6} = 1140$.
- $\dbinom{100}{98} = \dbinom{100}{2} = 4950$.

**2. Solving for $n$.** If $\dbinom{n}{3} = \dbinom{n}{7}$ and $n$ is more than 7, find $n$.

- The two choose numbers are mirror images when $3 + 7 = n$, so $n = 10$.
- Check: $\dbinom{10}{3} = 120$ and $\dbinom{10}{7} = \dbinom{10}{3} = 120$. ✓

**3. Named teams.** Twelve children are split into a red team of 5 and a blue team of 7. How many ways?

Choose the red team; the blue team is everyone else: $\dbinom{12}{5} = \dfrac{12 \times 11 \times 10 \times 9 \times 8}{120} = \dfrac{95040}{120} = 792$.

**4. Unnamed equal teams.** Eight people split into two teams of 4 with no names.

- Choosing one team of 4: $\dbinom{8}{4} = 70$.
- Each split is counted twice (once for each team being "the one you chose"): $70 \div 2 = 35$.
- Small check with 4 people A, B, C, D into two pairs: the splits are AB|CD, AC|BD, AD|BC, which is 3, and
  $\dbinom{4}{2} \div 2 = 6 \div 2 = 3$. ✓

**5. Rooms.** Six friends share three named rooms (1, 2, 3), two in each. Choose room 1's pair, then room 2's pair
from the 4 left, and room 3 gets the last 2:

$$\binom{6}{2} \times \binom{4}{2} \times \binom{2}{2} = 15 \times 6 \times 1 = 90 \qquad \text{or} \qquad \frac{6!}{2!\,2!\,2!} = \frac{720}{8} = 90.$$

## Try it

1. Work out $\dbinom{50}{48}$ and $\dbinom{25}{23}$.
2. A box has 15 chocolates, all different. You eat 13 of them. In how many ways can you choose which 13 to eat?
3. If $\dbinom{n}{4} = \dbinom{n}{9}$, what is $n$?
4. Without working either one out, say which is bigger: $\dbinom{20}{7}$ or $\dbinom{20}{13}$? Then which is bigger:
   $\dbinom{20}{9}$ or $\dbinom{20}{10}$? Explain using the multiplier $\dfrac{n-r}{r+1}$.
5. Ten players are split into two teams of 5. How many ways if (a) one team wears red and the other blue; (b) the
   teams have no names?
6. Twelve students are split into three groups of 4. How many ways if (a) the groups are named "maths", "art" and
   "music"; (b) the groups have no names?
7. Explain in words, without a formula, why $\dbinom{n}{1} = \dbinom{n}{n-1}$.
8. Use the multiplier $\dbinom{n}{r+1} = \dbinom{n}{r} \times \dfrac{n-r}{r+1}$ to write out the whole row for
   $n = 8$, starting from $\dbinom{8}{0} = 1$.

??? note "Answers"
    1. $\dbinom{50}{48} = \dbinom{50}{2} = \dfrac{50 \times 49}{2} = 1225$. $\dbinom{25}{23} = \dbinom{25}{2} = \dfrac{25 \times 24}{2} = 300$.
    2. Choosing the 13 to eat is choosing the 2 to keep: $\dbinom{15}{2} = \dfrac{15 \times 14}{2} = 105$.
    3. $4 + 9 = n$, so $n = 13$.
    4. $\dbinom{20}{7} = \dbinom{20}{13}$, since $7 + 13 = 20$: they are equal (both 77520). For the second pair, go
       from $r = 9$ to $r = 10$: the multiplier is $\dfrac{20 - 9}{10} = \dfrac{11}{10}$, bigger than 1, so
       $\dbinom{20}{10}$ is bigger. (In fact $\dbinom{20}{9} = 167960$ and $\dbinom{20}{10} = 184756$.)
    5. (a) Choose the red team: $\dbinom{10}{5} = 252$. (b) Each split was counted twice: $252 \div 2 = 126$.
    6. (a) $\dbinom{12}{4} \times \dbinom{8}{4} \times \dbinom{4}{4} = 495 \times 70 \times 1 = 34650$.
       (b) The three equal groups can swap names in $3! = 6$ ways without changing the split, so
       $34650 \div 6 = 5775$.
    7. Choosing $n - 1$ things to take is the same as choosing the 1 thing you leave out, and there are $n$ ways to
       pick that one thing. Choosing 1 thing to take also has $n$ ways. So both are $n$.
    8. $1$; $1 \times \dfrac{8}{1} = 8$; $8 \times \dfrac{7}{2} = 28$; $28 \times \dfrac{6}{3} = 56$;
       $56 \times \dfrac{5}{4} = 70$; $70 \times \dfrac{4}{5} = 56$; $56 \times \dfrac{3}{6} = 28$;
       $28 \times \dfrac{2}{7} = 8$; $8 \times \dfrac{1}{8} = 1$. The row is 1, 8, 28, 56, 70, 56, 28, 8, 1.

## Common mistake

**Thinking $\dbinom{n}{r}$ grows as $r$ grows.** It does at first, but past the middle it shrinks again:
$\dbinom{10}{9} = 10$ is much smaller than $\dbinom{10}{5} = 252$. Choosing 9 out of 10 is easy because there is
only one person to leave out, and 10 ways to do it.

**Forgetting to divide when equal groups have no names.** Splitting 10 people into two unnamed teams of 5 is 126,
not 252. Ask: *if I swapped the two groups, would anyone be able to tell?* If not, divide by the number of ways to
swap the equal groups.

## Where it leads

- Back: [Choosing, not arranging](01-choosing-not-arranging.md) · Next: [Pascal's triangle](03-pascals-triangle.md),
  where the mirror symmetry becomes the left-right symmetry of the triangle.
- [Level 5 page](index.md) · [Counting topic page](../index.md)
- Arranging letters with repeats, such as MISSISSIPPI, is in [Level 4, arranging with identical things](../level-4/03-identical-things.md); this lesson showed it is
  the same as splitting into named groups.
- Pairing two collections up perfectly to show they are the same size is called a **bijection**. It becomes a main
  tool in [Level 6, counting by a bijection](../level-6/05-counting-bijection.md).
- The idea of the "rest" of a set, its complement, is a basic tool of [Logic](../../logic/index.md) and of
  [MAT137 Unit 1 (logic, sets and proofs)](../../../uoft/MAT137/unit01.md).
