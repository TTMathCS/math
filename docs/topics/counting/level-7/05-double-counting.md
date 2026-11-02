---
title: "Proof by counting"
---

# Proof by counting

*Counting and combinations · level 7, lesson 5 of 6*

## A question to start

At a party every guest shakes hands with some of the others. Afterwards each guest writes down how many hands they
shook, and you add up all those numbers. Could the total be 27?

No. Whatever happens at the party, the total is always **even**. You do not need to know who shook whose hand: each
handshake involves two hands, so it is counted exactly twice in the total. The total is twice the number of
handshakes, so it is even.

This tiny argument is a whole method. Count one collection of things in two different ways, and the two answers must
be equal. Mathematicians call it **double counting**, and in this lesson it proves identities that would be messy to
prove with algebra.

## The idea

### The method

A **combinatorial proof** (a proof by counting) of an identity "left side = right side" has three parts:

1. **Pick a set** of things to count, described in words: teams, committees, paths, strings.
2. **Count it one way** and get the left side.
3. **Count it another way** and get the right side.

Since both are the number of things in the same set, they are equal. There is no algebra to go wrong, and the proof
usually tells you **why** the identity is true, not only that it is.

You have already seen several: Pascal's rule (is one particular person on the team or not?), the row sum $2^n$ (sort
the subsets by size), and the hockey stick (sort by the largest number). Here are more.

### The captain identity

> $$k\binom{n}{k} = n\binom{n-1}{k-1} \qquad (1 \le k \le n)$$

**The set.** A club has $n$ members. Count the ways to choose a team of $k$ members **with one of them as captain**.

**Way 1: team first.** Choose the team: $\dbinom{n}{k}$ ways. Then choose its captain from the $k$ team members: $k$
ways. Total $k\dbinom{n}{k}$.

**Way 2: captain first.** Choose the captain from the whole club: $n$ ways. Then choose the other $k - 1$ team
members from the remaining $n - 1$ people: $\dbinom{n-1}{k-1}$ ways. Total $n\dbinom{n-1}{k-1}$.

Both count the same captained teams, so they are equal. ∎ Here it is for a club of 4 and teams of 2. Sorted into rows by
captain there are $4 \times 3 = 12$; sorted by team, each of the $\dbinom{4}{2} = 6$ teams appears twice, once for each
possible captain.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 235" role="img" aria-label="Teams of two from A, B, C, D with a captain coloured orange, arranged in four rows by captain, three in each row, twelve in all">
  <text x="20" y="22" font-size="11" text-anchor="start" fill="currentColor">captain</text>
  <text x="40" y="63" font-size="14" text-anchor="middle" fill="currentColor">A</text>
  <rect x="80" y="45" width="90" height="28" rx="6" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="105" cy="59" r="11" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="105" y="64" font-size="13" text-anchor="middle" fill="currentColor">A</text>
  <circle cx="145" cy="59" r="11" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="145" y="64" font-size="13" text-anchor="middle" fill="currentColor">B</text>
  <rect x="190" y="45" width="90" height="28" rx="6" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="215" cy="59" r="11" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="215" y="64" font-size="13" text-anchor="middle" fill="currentColor">A</text>
  <circle cx="255" cy="59" r="11" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="255" y="64" font-size="13" text-anchor="middle" fill="currentColor">C</text>
  <rect x="300" y="45" width="90" height="28" rx="6" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="325" cy="59" r="11" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="325" y="64" font-size="13" text-anchor="middle" fill="currentColor">A</text>
  <circle cx="365" cy="59" r="11" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="365" y="64" font-size="13" text-anchor="middle" fill="currentColor">D</text>
  <text x="40" y="105" font-size="14" text-anchor="middle" fill="currentColor">B</text>
  <rect x="80" y="87" width="90" height="28" rx="6" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="105" cy="101" r="11" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="105" y="106" font-size="13" text-anchor="middle" fill="currentColor">A</text>
  <circle cx="145" cy="101" r="11" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="145" y="106" font-size="13" text-anchor="middle" fill="currentColor">B</text>
  <rect x="190" y="87" width="90" height="28" rx="6" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="215" cy="101" r="11" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="215" y="106" font-size="13" text-anchor="middle" fill="currentColor">B</text>
  <circle cx="255" cy="101" r="11" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="255" y="106" font-size="13" text-anchor="middle" fill="currentColor">C</text>
  <rect x="300" y="87" width="90" height="28" rx="6" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="325" cy="101" r="11" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="325" y="106" font-size="13" text-anchor="middle" fill="currentColor">B</text>
  <circle cx="365" cy="101" r="11" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="365" y="106" font-size="13" text-anchor="middle" fill="currentColor">D</text>
  <text x="40" y="147" font-size="14" text-anchor="middle" fill="currentColor">C</text>
  <rect x="80" y="129" width="90" height="28" rx="6" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="105" cy="143" r="11" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="105" y="148" font-size="13" text-anchor="middle" fill="currentColor">A</text>
  <circle cx="145" cy="143" r="11" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="145" y="148" font-size="13" text-anchor="middle" fill="currentColor">C</text>
  <rect x="190" y="129" width="90" height="28" rx="6" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="215" cy="143" r="11" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="215" y="148" font-size="13" text-anchor="middle" fill="currentColor">B</text>
  <circle cx="255" cy="143" r="11" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="255" y="148" font-size="13" text-anchor="middle" fill="currentColor">C</text>
  <rect x="300" y="129" width="90" height="28" rx="6" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="325" cy="143" r="11" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="325" y="148" font-size="13" text-anchor="middle" fill="currentColor">C</text>
  <circle cx="365" cy="143" r="11" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="365" y="148" font-size="13" text-anchor="middle" fill="currentColor">D</text>
  <text x="40" y="189" font-size="14" text-anchor="middle" fill="currentColor">D</text>
  <rect x="80" y="171" width="90" height="28" rx="6" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="105" cy="185" r="11" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="105" y="190" font-size="13" text-anchor="middle" fill="currentColor">A</text>
  <circle cx="145" cy="185" r="11" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="145" y="190" font-size="13" text-anchor="middle" fill="currentColor">D</text>
  <rect x="190" y="171" width="90" height="28" rx="6" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="215" cy="185" r="11" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="215" y="190" font-size="13" text-anchor="middle" fill="currentColor">B</text>
  <circle cx="255" cy="185" r="11" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="255" y="190" font-size="13" text-anchor="middle" fill="currentColor">D</text>
  <rect x="300" y="171" width="90" height="28" rx="6" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="325" cy="185" r="11" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="325" y="190" font-size="13" text-anchor="middle" fill="currentColor">C</text>
  <circle cx="365" cy="185" r="11" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="365" y="190" font-size="13" text-anchor="middle" fill="currentColor">D</text>
  <text x="220" y="225" font-size="12" text-anchor="middle" fill="currentColor">4 rows (captain) × 3 teammates = 12 = 6 teams × 2 captains</text>
</svg>
</div>

The algebra agrees: $k \cdot \dfrac{n!}{k!\,(n-k)!} = \dfrac{n!}{(k-1)!\,(n-k)!} = n \cdot \dfrac{(n-1)!}{(k-1)!\,(n-k)!}$.
The algebra checks it; the captains explain it.

**A use.** Add the captain identity over all $k$: $\sum_k k\dbinom{n}{k} = n\sum_k\dbinom{n-1}{k-1} = n \cdot 2^{n-1}$.
In words: a committee of any size with a chair can be formed by choosing the chair ($n$ ways) and then deciding in
or out for each of the other $n - 1$ people ($2^{n-1}$ ways). This is the "total size of all subsets" of
[lesson 3](03-identities-from-theorem.md), proved a second way.

### Vandermonde's identity

> $$\binom{m+n}{r} = \sum_{k=0}^{r}\binom{m}{k}\binom{n}{r-k}$$

This is named after Alexandre-Théophile Vandermonde, who published it in 1772, though it was known in China centuries
earlier, to Zhu Shijie in 1303.

**The set.** A club has $m$ boys and $n$ girls. Count the committees of $r$ members.

**Way 1.** Ignore boys and girls: choose $r$ of the $m + n$ members, $\dbinom{m+n}{r}$ ways.

**Way 2.** Sort the committees by the number of boys, $k$. A committee with $k$ boys has $r - k$ girls: choose the boys
in $\dbinom{m}{k}$ ways and the girls in $\dbinom{n}{r-k}$ ways. Adding over every possible $k$ gives the right side. ∎

(If $k$ is bigger than $m$, or $r - k$ bigger than $n$, the choose number is 0: you cannot choose 5 boys from 3. So
those terms quietly drop out.)

**The sum of squares, explained.** Put $m = n$ and $r = n$: the club has $n$ boys and $n$ girls, and the committee has
$n$ members. Then

$$\binom{2n}{n} = \sum_k\binom{n}{k}\binom{n}{n-k} = \sum_k\binom{n}{k}^2,$$

the identity of lesson 3, now with a reason: a committee of $n$ from $n$ boys and $n$ girls, sorted by the number of
boys.

### Choosing in stages

Here is a rule for double counting that saves trouble: **when a choice happens in stages, you may often swap the
order of the stages.** A committee of $k$ from $n$ people, with a smaller subcommittee of $m$ inside it, can be chosen
committee first or subcommittee first:

$$\binom{n}{k}\binom{k}{m} = \binom{n}{m}\binom{n-m}{k-m}.$$

Left: choose the committee, then the subcommittee from inside it. Right: choose the subcommittee from everybody, then
the other $k - m$ committee members from the $n - m$ people not yet chosen.

### What double counting needs

Both counts must count **exactly the same set**, each thing **exactly once**. If way 1 counts teams with captains but
way 2 forgets that the captain is on the team, the two numbers will not match. Before writing a proof, describe one
typical thing in the set in words ("a team of 3 from the 10, one of whom is captain") and check that each way counts
precisely those.

## Worked examples

**1. Captains with numbers.** Check $k\dbinom{n}{k} = n\dbinom{n-1}{k-1}$ for $n = 10$, $k = 4$.

Left: $4 \times \dbinom{10}{4} = 4 \times 210 = 840$. Right: $10 \times \dbinom{9}{3} = 10 \times 84 = 840$. ✓

**2. Vandermonde with numbers.** A club has 5 boys and 4 girls. Count committees of 3 both ways.

Way 1: $\dbinom{9}{3} = 84$. Way 2, by number of boys:

- 0 boys: $\dbinom{5}{0}\dbinom{4}{3} = 4$; 1 boy: $\dbinom{5}{1}\dbinom{4}{2} = 30$;
- 2 boys: $\dbinom{5}{2}\dbinom{4}{1} = 40$; 3 boys: $\dbinom{5}{3}\dbinom{4}{0} = 10$.

$4 + 30 + 40 + 10 = 84$. ✓

**3. Prove $\dbinom{2n}{2} = 2\dbinom{n}{2} + n^2$.**

The set: pairs of people from a group of $n$ boys and $n$ girls. Way 1: choose 2 of the $2n$, $\dbinom{2n}{2}$ ways.
Way 2: two boys ($\dbinom{n}{2}$), two girls ($\dbinom{n}{2}$), or one of each ($n \times n$). Check with $n = 5$:
$\dbinom{10}{2} = 45$ and $2 \times 10 + 25 = 45$. ✓

**4. Committee and subcommittee.** From 6 people choose a committee of 4 with a subcommittee of 2.

Committee first: $\dbinom{6}{4}\dbinom{4}{2} = 15 \times 6 = 90$. Subcommittee first:
$\dbinom{6}{2}\dbinom{4}{2} = 15 \times 6 = 90$. ✓

**5. An identity proved by counting functions.** Prove that $n^3 = \dbinom{n}{1} + 6\dbinom{n}{2} + 6\dbinom{n}{3}$.

The set: ways for 3 friends to each pick one of $n$ restaurants (friends may pick the same one). Way 1: each friend
has $n$ choices, $n^3$. Way 2: sort by **how many different restaurants** are used.

- All three at one restaurant: choose it, $\dbinom{n}{1}$ ways.
- Exactly two restaurants used: choose the two, $\dbinom{n}{2}$ ways; then split the friends between them so that both
  are used: each friend picks one of the 2, $2^3 = 8$ ways, minus the 2 where everyone picks the same one: 6 ways.
- Three different restaurants: choose them, $\dbinom{n}{3}$ ways, then hand them out to the friends, $3! = 6$ ways.

So $n^3 = \dbinom{n}{1} + 6\dbinom{n}{2} + 6\dbinom{n}{3}$. Check $n = 4$: $4 + 36 + 24 = 64$. ✓

## Try it

1. Check the captain identity for $n = 7$, $k = 3$.
2. Check Vandermonde's identity for $m = 3$, $n = 4$, $r = 2$, writing out every term.
3. Prove $\dbinom{n}{2} + \dbinom{n+1}{2} = n^2$ by counting pairs $(a, b)$ with $a$ and $b$ from $\{1, \ldots, n\}$.
   (Hint: sort them into $a < b$ and $a \ge b$.)
4. Prove $k(k - 1)\dbinom{n}{k} = n(n - 1)\dbinom{n-2}{k-2}$ with a team that has a captain and a vice-captain, and
   check it for $n = 6$, $k = 3$.
5. A club has 8 members. How many committees with a chair can be formed (any size, at least the chair)?
6. A team of 3 is chosen from 4 boys and 6 girls. How many teams have exactly 1 girl? Which term of Vandermonde's
   identity is this?
7. Explain in words why $\dbinom{8}{0}^2 + \dbinom{8}{1}^2 + \cdots + \dbinom{8}{8}^2 = \dbinom{16}{8}$.
8. Prove that $\dbinom{n}{1} + 2\dbinom{n}{2} = n^2$ by counting the ways two friends can each pick one of $n$
   restaurants.

??? note "Answers"
    1. $3\binom{7}{3} = 3 \times 35 = 105$ and $7\binom{6}{2} = 7 \times 15 = 105$. ✓
    2. $\binom{7}{2} = 21$. Terms: $k = 0$: $\binom{3}{0}\binom{4}{2} = 6$; $k = 1$: $\binom{3}{1}\binom{4}{1} = 12$;
       $k = 2$: $\binom{3}{2}\binom{4}{0} = 3$. $6 + 12 + 3 = 21$. ✓
    3. There are $n^2$ pairs in all. Pairs with $a < b$ are a choice of 2 different numbers, $\binom{n}{2}$. Pairs with
       $a \ge b$ match the choices of 2 different numbers from $\{1, \ldots, n + 1\}$: send $(a, b)$ to the pair
       $\{b, a + 1\}$, which are different because $a + 1 > b$; and from a pair $\{c, d\}$ with $c < d$ you get back
       $b = c$, $a = d - 1$. So there are $\binom{n+1}{2}$ of them, and $\binom{n}{2} + \binom{n+1}{2} = n^2$.
       Check $n = 4$: $6 + 10 = 16$. ✓
    4. The set: teams of $k$ from $n$ with a captain and a different vice-captain. Team first: $\binom{n}{k}$, then
       captain ($k$) and vice-captain ($k - 1$). Leaders first: captain ($n$), vice-captain ($n - 1$), then the other
       $k - 2$ from the remaining $n - 2$. Check: $3 \times 2 \times 20 = 120$ and $6 \times 5 \times 4 = 120$. ✓
    5. Choose the chair (8 ways), then each other member is in or out ($2^7 = 128$): $8 \times 128 = 1024$.
    6. $\binom{6}{1}\binom{4}{2} = 6 \times 6 = 36$. It is the $k = 1$ term (counting girls) of
       $\binom{10}{3} = \sum_k\binom{6}{k}\binom{4}{3-k}$.
    7. Take 8 boys and 8 girls and count committees of 8. All at once: $\binom{16}{8}$. By the number $k$ of boys: the
       boys can be chosen in $\binom{8}{k}$ ways and the $8 - k$ girls in $\binom{8}{8-k} = \binom{8}{k}$ ways, giving
       $\binom{8}{k}^2$; add over $k$. (Both equal 12 870.)
    8. Each friend picks one of $n$: $n^2$ ways. Or: both pick the same restaurant, $\binom{n}{1}$ ways; or they use two
       different restaurants, choose them in $\binom{n}{2}$ ways and decide who goes where in 2 ways. So
       $n^2 = \binom{n}{1} + 2\binom{n}{2}$. Check $n = 5$: $5 + 20 = 25$. ✓

## Common mistake

**Counting the same thing twice inside one way.** If you count Vandermonde's committees as "choose a boy, then choose
the rest from anybody", a committee with two boys is counted twice, once for each boy chosen first. Split into cases
that do not overlap (exactly $k$ boys), and every committee lands in exactly one case.

**Two different sets.** "Teams with a captain" and "teams" are different sets; one is $k$ times bigger. Write down,
in words, exactly what one counted object is, and use the same description for both counts.

## Where it leads

- Back: [Patterns in Pascal's triangle](04-pascal-patterns.md) · Next: [Multinomial coefficients](06-multinomial-coefficients.md)
- [Level 7 page](index.md) · [Counting topic page](../index.md)
- Matching two sets one-to-one (a bijection) was the tool of [level 6](../level-6/index.md); double counting is its
  partner.
- The captain identity is the step that finds the average of the binomial distribution in
  [Probability](../../probability/index.md).
- Proof methods, including proof by cases, are set out in
  [MAT137 Unit 1: logic, sets and proofs](../../../uoft/MAT137/unit01.md).
