---
title: "Arranging with identical things"
---

# Arranging with identical things

*Counting and combinations · level 4, lesson 3 of 6*

## A question to start

How many different "words" (any order of the letters, real word or not) can you make by rearranging the letters of
**BOOK**? And of **MISSISSIPPI**?

BOOK has 4 letters, and 4 things can be arranged in $4! = 24$ ways. But if you start listing, you will find only
**12** different words. MISSISSIPPI has 11 letters, and $11!$ is almost 40 million, yet there are only **34 650**
different arrangements.

Where did all the others go? They were never really different. In this lesson you will see exactly how many times each
word was counted, and why the answer is a division.

## The idea

### Pretend the letters are different

The trouble with BOOK is that the two Os look the same. So, for a moment, make them different: paint one orange and
call it $\text{O}_1$, and paint the other blue and call it $\text{O}_2$. Now the four tiles B, $\text{O}_1$,
$\text{O}_2$, K are all different, and they can be arranged in $4! = 24$ ways.

Now wash the paint off. Some of the 24 arrangements become identical.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 150" role="img" aria-label="Two rows of letter tiles: B, orange O1, blue O2, K and B, blue O2, orange O1, K. An arrow shows that once the colours are washed off, both rows read BOOK">
  <g stroke="currentColor" stroke-width="1.5">
    <rect x="20" y="20" width="36" height="36" fill="none"/><rect x="60" y="20" width="36" height="36" fill="#eea66f" fill-opacity="0.7"/><rect x="100" y="20" width="36" height="36" fill="#9cc9ea" fill-opacity="0.7"/><rect x="140" y="20" width="36" height="36" fill="none"/>
    <rect x="20" y="90" width="36" height="36" fill="none"/><rect x="60" y="90" width="36" height="36" fill="#9cc9ea" fill-opacity="0.7"/><rect x="100" y="90" width="36" height="36" fill="#eea66f" fill-opacity="0.7"/><rect x="140" y="90" width="36" height="36" fill="none"/>
    <rect x="290" y="55" width="30" height="30" fill="none"/><rect x="322" y="55" width="30" height="30" fill="#7ccf9a" fill-opacity="0.6"/><rect x="354" y="55" width="30" height="30" fill="#7ccf9a" fill-opacity="0.6"/><rect x="386" y="55" width="30" height="30" fill="none"/>
  </g>
  <g font-size="18" text-anchor="middle" fill="currentColor">
    <text x="38" y="45">B</text><text x="78" y="45">O₁</text><text x="118" y="45">O₂</text><text x="158" y="45">K</text>
    <text x="38" y="115">B</text><text x="78" y="115">O₂</text><text x="118" y="115">O₁</text><text x="158" y="115">K</text>
    <text x="305" y="77">B</text><text x="337" y="77">O</text><text x="369" y="77">O</text><text x="401" y="77">K</text>
  </g>
  <g stroke="currentColor" stroke-width="1.5" fill="none">
    <path d="M 185 38 L 280 66"/><path d="M 185 108 L 280 76"/>
  </g>
  <path d="M 280 66 L 271 59 L 269 69 Z" fill="currentColor"/>
  <path d="M 280 76 L 269 73 L 271 83 Z" fill="currentColor"/>
  <text x="232" y="140" font-size="12" text-anchor="middle" fill="currentColor">two painted orders, one word</text>
</svg>
</div>

Every word you can see, like BOOK, came from **exactly two** painted arrangements: one with $\text{O}_1$ before
$\text{O}_2$, and one with them the other way round. So the 24 painted arrangements make pairs, and each pair is one
real word:

$$\frac{4!}{2!} = \frac{24}{2} = 12.$$

Here are the 12, so you can check: BOOK, BOKO, BKOO, OBOK, OBKO, OOBK, OOKB, OKBO, OKOB, KBOO, KOBO, KOOB.

### Why divide by a factorial?

Why $2!$ and not just 2? Because the number of ways to shuffle the identical letters **among themselves** is a
factorial. Two Os can be ordered in $2! = 2$ ways. If a word had **three** identical letters, say $\text{E}_1$,
$\text{E}_2$, $\text{E}_3$, they could be ordered in their places in $3! = 6$ ways, and every visible word would have
been counted 6 times.

For example, the letters of EEEN make $\dfrac{4!}{3!} = 4$ words: NEEE, ENEE, EENE, EEEN. That is right: the only
thing that matters is where the N goes.

### More than one group of repeats

MISSISSIPPI has 11 letters: one M, four Is, four Ss and two Ps. Paint all the letters so that they are different:
$11!$ arrangements. Now wash off the paint group by group.

- Shuffling the 4 Is among their places changes nothing visible: each word was counted $4!$ times for the Is.
- Independently, the 4 Ss can be shuffled in $4!$ ways.
- And the 2 Ps in $2!$ ways.

So each visible word was counted $4! \times 4! \times 2!$ times (by the multiplication rule, because the three
shuffles are separate choices). Divide:

$$\frac{11!}{4!\,4!\,2!} = \frac{39\,916\,800}{24 \times 24 \times 2} = \frac{39\,916\,800}{1152} = 34\,650.$$

> **Rule.** If $n$ things include a group of $a$ identical things, another group of $b$ identical things, and so on,
> the number of different arrangements is
>
> $$\frac{n!}{a!\,b!\,\cdots}$$
>
> Letters that appear only once can be left out of the bottom, since $1! = 1$.

### Why the count must come out whole

Is it just luck that $11!$ divides exactly by 1152? No. The division is counting **groups of equal size**: the
$11!$ painted arrangements fall into families of exactly 1152, one family per visible word. A number that is "how many
families" must be a whole number. So the bottom of this fraction always divides the top exactly, which is a fact about
numbers proved by a counting argument.

### Two ways to see the same count

There is a second way to count arrangements with repeats, which you will meet properly in level 5. For BOOK, think of
the 4 places as empty boxes. First decide where B goes: 4 choices. Then where K goes: 3 choices. The two Os then fill
the 2 places that are left, and there is only **one** way to do that, because the Os are identical. So the count is
$4 \times 3 \times 1 = 12$. ✓

Placing the rare letters first and letting the common letter fill the rest is often quicker by hand. Both methods
must agree, because they count the same words.

### Two-letter alphabets: heads and tails

The same rule counts sequences made from just two symbols. How many ways can 5 coin tosses come out with exactly
**3 heads and 2 tails**? That is the number of arrangements of HHHTT:

$$\frac{5!}{3!\,2!} = \frac{120}{12} = 10.$$

They are: HHHTT, HHTHT, HHTTH, HTHHT, HTHTH, HTTHH, THHHT, THHTH, THTHH, TTHHH.

## Worked examples

**1. LETTER.** Six letters: L, E, T, T, E, R. Two Es and two Ts.

$$\frac{6!}{2!\,2!} = \frac{720}{4} = 180.$$

**2. BANANA.** Six letters: B once, A three times, N twice.

$$\frac{6!}{3!\,2!} = \frac{720}{12} = 60.$$

**3. Paths on a grid.** On a street grid you walk from a corner to a corner 4 blocks east and 3 blocks north, always
going east (E) or north (N). How many shortest routes are there?

Every shortest route is a list of 7 moves with 4 Es and 3 Ns, such as EENENNE. Different lists give different routes,
and every list of 4 Es and 3 Ns gives a route. So count the arrangements of EEEENNN:

$$\frac{7!}{4!\,3!} = \frac{5040}{24 \times 6} = 35.$$

**4. MATHEMATICS.** 11 letters: M twice, A twice, T twice, and H, E, I, C, S once each.

$$\frac{11!}{2!\,2!\,2!} = \frac{39\,916\,800}{8} = 4\,989\,600.$$

**5. A flag of stripes.** Nine stripes in a row: 4 red, 3 white and 2 blue. Stripes of the same colour look alike. How
many different flags?

$$\frac{9!}{4!\,3!\,2!} = \frac{362\,880}{24 \times 6 \times 2} = \frac{362\,880}{288} = 1260.$$

**6. Identical letters with a condition.** In how many arrangements of MISSISSIPPI are the four Ss all together?

1. Glue the four Ss into one block, SSSS. (Inside the block nothing can change: all four letters are the same, so
   there is only 1 inside order, not $4!$.)
2. Now arrange 8 things: the block, M, four Is and two Ps. The Is and Ps are still identical among themselves.
3. $\dfrac{8!}{4!\,2!} = \dfrac{40\,320}{48} = 840$.

So only 840 of the 34 650 arrangements, about 1 in 41, keep the Ss together.

## Try it

1. How many different arrangements are there of the letters of AABB? List them.
2. How many arrangements of the letters of PEPPER?
3. How many arrangements of the letters of ALGEBRA?
4. How many arrangements of the letters of COMMITTEE?
5. A coin is tossed 6 times. How many sequences have exactly 2 heads?
6. In how many shortest routes can you walk 5 blocks east and 2 blocks north?
7. How many arrangements of LEVEL are there? How many of them start and end with L?
8. A shelf holds 3 identical maths books and 4 identical science books. How many different-looking shelves?

??? note "Answers"
    1. $\dfrac{4!}{2!\,2!} = \dfrac{24}{4} = 6$: AABB, ABAB, ABBA, BAAB, BABA, BBAA.
    2. P three times, E twice, R once: $\dfrac{6!}{3!\,2!} = \dfrac{720}{12} = 60$.
    3. 7 letters with A twice: $\dfrac{7!}{2!} = \dfrac{5040}{2} = 2520$.
    4. 9 letters with M, T and E twice each: $\dfrac{9!}{2!\,2!\,2!} = \dfrac{362\,880}{8} = 45\,360$.
    5. Arrangements of HHTTTT: $\dfrac{6!}{2!\,4!} = \dfrac{720}{48} = 15$.
    6. Arrangements of EEEEENN: $\dfrac{7!}{5!\,2!} = \dfrac{5040}{240} = 21$.
    7. L twice, E twice, V once: $\dfrac{5!}{2!\,2!} = \dfrac{120}{4} = 30$. Starting and ending with L: the middle
       three are E, V, E in some order, $\dfrac{3!}{2!} = 3$ (EVE, EEV, VEE).
    8. $\dfrac{7!}{3!\,4!} = \dfrac{5040}{144} = 35$.

## Common mistake

**Forgetting to divide.** "BOOK has 4 letters so $4! = 24$" counts every word twice. Before using $n!$, ask: *are all
the things really different?* If not, divide by the factorial of each group of repeats.

**Dividing by the wrong thing.** For MISSISSIPPI, dividing by $4 \times 4 \times 2 = 32$ (just the number of
repeated letters) is wrong. You divide by the number of ways to shuffle each group among itself: $4!\,4!\,2!$. And
you multiply those together, not add them: the bottom is $24 \times 24 \times 2$, not $24 + 24 + 2$.

## Where it leads

- Back: [Arranging some](02-arranging-some.md) · Next: [Arranging in a circle](04-arranging-in-circles.md)
- [Level 4 page](index.md) · [Counting topic page](../index.md)
- Routes on a grid return in level 5, where they are counted by choosing which steps go north:
  [Paths on a grid](../level-5/04-grid-paths.md).
- The numbers $\dfrac{5!}{3!\,2!}$ and $\dfrac{7!}{4!\,3!}$ are entries of Pascal's triangle:
  [Pascal's triangle](../level-5/03-pascals-triangle.md).
- "Exactly 3 heads in 5 tosses" happens in 10 of the 32 sequences: a step towards
  [Probability](../../probability/index.md).
