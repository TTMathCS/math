---
title: "Inclusion-exclusion"
---

# Inclusion-exclusion

*Counting and combinations · level 6, lesson 1 of 6*

## A question to start

How many of the numbers from 1 to 100 are divisible by 2, by 3 or by 5?

Half of them are even: 50. A third are multiples of 3: 33. A fifth are multiples of 5: 20. So the answer is
$50 + 33 + 20 = 103$?

That cannot be right: there are only 100 numbers! Something has been counted more than once. The number 30, for
example, was counted three times (it is even, a multiple of 3 and a multiple of 5). The true answer is **74**. This
lesson gives a method, called **inclusion-exclusion**, that fixes double counting exactly, however the groups
overlap.

## The idea

### Sets and their sizes

A **set** is a collection of things, called its **elements**. For a set $A$, the number of elements is written $|A|$
(read "the size of $A$"). If $A$ is the set of even numbers from 1 to 100, then $|A| = 50$.

Two ways of combining sets:

- The **union** $A \cup B$ (read "$A$ or $B$") is everything that is in $A$, or in $B$, or in both.
- The **intersection** $A \cap B$ (read "$A$ and $B$") is everything that is in **both** $A$ and $B$.

A **Venn diagram** draws each set as a circle. The overlap of the circles is the intersection.

### Two sets

In a class of 30, 18 play football and 12 play basketball. 5 play both. How many play at least one of the two?

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 190" role="img" aria-label="Two overlapping circles, football and basketball. 13 in football only, 5 in both, 7 in basketball only, and 5 outside both circles">
  <rect x="60" y="5" width="300" height="180" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="170" cy="95" r="70" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="250" cy="95" r="70" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <text x="135" y="101" font-size="18" text-anchor="middle" fill="currentColor">13</text>
  <text x="210" y="101" font-size="18" text-anchor="middle" fill="currentColor">5</text>
  <text x="285" y="101" font-size="18" text-anchor="middle" fill="currentColor">7</text>
  <text x="130" y="45" font-size="12" text-anchor="middle" fill="currentColor">football 18</text>
  <text x="290" y="45" font-size="12" text-anchor="middle" fill="currentColor">basketball 12</text>
  <text x="335" y="178" font-size="13" text-anchor="middle" fill="currentColor">5</text>
  <text x="90" y="178" font-size="11" text-anchor="middle" fill="currentColor">class 30</text>
</svg>
</div>

If you add $18 + 12 = 30$, the 5 who play both have been counted twice, once in each circle. Take them away once:

$$|A \cup B| = |A| + |B| - |A \cap B| = 18 + 12 - 5 = 25.$$

So 25 play at least one sport, and $30 - 25 = 5$ play neither. The picture confirms it: $13 + 5 + 7 = 25$.

The name says what happens: you **include** the sets, then **exclude** the overlap.

### Three sets

Back to 1 to 100. Let $A$ be the multiples of 2, $B$ the multiples of 3, $C$ the multiples of 5.

- $|A| = 50$, $|B| = 33$, $|C| = 20$.
- A number in $A \cap B$ is a multiple of both 2 and 3, which means a multiple of 6: $|A \cap B| = 16$ (since
  $6 \times 16 = 96$). Similarly multiples of 10: $|A \cap C| = 10$, and multiples of 15: $|B \cap C| = 6$.
- A number in all three is a multiple of 30: $|A \cap B \cap C| = 3$ (30, 60, 90).

Adding the three sets, subtracting the three overlaps, and **adding back** the triple overlap:

$$|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|$$

$$= 50 + 33 + 20 - 16 - 10 - 6 + 3 = 74.$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 245" role="img" aria-label="Three overlapping circles for multiples of 2, 3 and 5 among 1 to 100, with counts in each region: 2 only 27, 3 only 14, 5 only 7, 2 and 3 only 13, 2 and 5 only 7, 3 and 5 only 3, all three 3, none 26">
  <rect x="60" y="5" width="300" height="235" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="170" cy="90" r="65" fill="#eea66f" fill-opacity="0.4" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="250" cy="90" r="65" fill="#9cc9ea" fill-opacity="0.4" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="210" cy="155" r="65" fill="#7ccf9a" fill-opacity="0.4" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="15" text-anchor="middle" fill="currentColor">
    <text x="135" y="80">27</text>
    <text x="285" y="80">14</text>
    <text x="210" y="205">7</text>
    <text x="210" y="70">13</text>
    <text x="170" y="145">7</text>
    <text x="250" y="145">3</text>
    <text x="210" y="117">3</text>
  </g>
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <text x="105" y="30">÷ 2</text>
    <text x="315" y="30">÷ 3</text>
    <text x="300" y="222">÷ 5</text>
    <text x="100" y="225">none: 26</text>
  </g>
</svg>
</div>

The regions add up: $27 + 14 + 7 + 13 + 7 + 3 + 3 = 74$. ✓ And $100 - 74 = 26$ numbers are divisible by none of
2, 3, 5. They are 1, and the numbers whose prime factors are all 7 or more: 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
43, 47, 49, 53, 59, 61, 67, 71, 73, 77, 79, 83, 89, 91, 97.

### Why the three-set rule is exactly right

It is not obvious that "add, subtract, add back" counts every number exactly once. Check it for each kind of element.

- An element in **exactly one** set (say 4, only in $A$) is counted once in $|A|$ and in nothing else: total **1**.
- An element in **exactly two** sets (say 6, in $A$ and $B$) is counted in $|A|$ and $|B|$ (that is $+2$), and
  subtracted in $|A \cap B|$ ($-1$): total $2 - 1 = 1$.
- An element in **all three** (say 30) is added 3 times, subtracted 3 times (it is in all three pairs), and added
  back once: $3 - 3 + 1 = 1$.

Every element of the union is counted exactly once, so the formula gives the size of the union. This "count how many
times each element is counted" check is the real proof, and it works for four or more sets too: add the single sets,
subtract all the pairs, add all the triples, subtract all the quadruples, and so on.

### Counting what is in none

Often the question asks for elements in **none** of the sets. Then take the union away from the total:

$$\text{none} = \text{total} - |A \cup B \cup C|.$$

<figure class="play" data-play="venn"><span class="ai-tag">AI-created</span><figcaption><b>Inclusion-exclusion.</b> Add both circles, then take away the overlap counted twice.</figcaption></figure>

## Worked examples

**1. A survey with three languages.** Of 40 students, 20 study French, 15 Spanish and 10 German. 6 study French and
Spanish, 4 French and German, 3 Spanish and German, and 2 study all three. How many study none of them?

- At least one: $20 + 15 + 10 - 6 - 4 - 3 + 2 = 34$.
- None: $40 - 34 = 6$.

**2. Codes with a 0 and a 1.** How many 4-digit codes (0000 to 9999) contain at least one 0 **and** at least one 1?

"At least one of each" is hard directly, so count the codes we do **not** want: those with no 0 (set $P$) or no 1
(set $Q$).

- $|P| = 9^4 = 6561$ (each digit is one of the 9 non-zero digits). $|Q| = 9^4 = 6561$.
- $|P \cap Q|$: no 0 and no 1, so each digit is one of 8: $8^4 = 4096$.
- Unwanted: $|P \cup Q| = 6561 + 6561 - 4096 = 9026$.
- Wanted: $10\,000 - 9026 = 974$.

**3. Words using every letter.** How many 5-letter words made from A, B, C use **all three** letters?

- All words: $3^5 = 243$.
- Words missing A: only B and C, $2^5 = 32$. The same for missing B and missing C.
- Missing two letters (for example only C): $1^5 = 1$ word, and there are 3 such pairs.
- Missing all three: impossible, 0.
- Words missing at least one letter: $32 + 32 + 32 - 1 - 1 - 1 + 0 = 93$.
- Words using all three: $243 - 93 = 150$.

## Try it

1. $|A| = 25$, $|B| = 17$ and $|A \cap B| = 8$. Find $|A \cup B|$.
2. How many numbers from 1 to 60 are divisible by 3 or by 4?
3. How many numbers from 1 to 1000 are divisible by 2, 3 or 5? How many by none of them?
4. In a group of 50 people, 30 drink tea, 25 drink coffee and 10 drink neither. How many drink both?
5. How many numbers from 1 to 100 are divisible by 4 or by 6? (Careful: what is a number divisible by both 4 and 6
   a multiple of?)
6. In a club of 60, 30 swim, 25 run and 20 cycle. 10 swim and run, 8 swim and cycle, 7 run and cycle, and 5 do all
   three. How many do none? How many do exactly one sport?
7. How many 4-letter words made from A, B, C, D use all four letters? Check your answer another way.
8. How many 6-digit strings (digits 0 to 9) contain at least one 7, at least one 8 and at least one 9?

??? note "Answers"
    1. $25 + 17 - 8 = 34$.
    2. Multiples of 3: 20. Multiples of 4: 15. Multiples of both are multiples of 12: 5. So $20 + 15 - 5 = 30$.
    3. $500 + 333 + 200 - 166 - 100 - 66 + 33 = 734$ (the overlaps are multiples of 6, 10, 15 and 30). None:
       $1000 - 734 = 266$.
    4. At least one: $50 - 10 = 40$. So $40 = 30 + 25 - \text{both}$, giving both $= 15$.
    5. Multiples of 4: 25. Multiples of 6: 16. A number divisible by both 4 and 6 is a multiple of 12 (the smallest
       number both go into), not of 24: there are 8. So $25 + 16 - 8 = 33$.
    6. At least one: $30 + 25 + 20 - 10 - 8 - 7 + 5 = 55$, so none $= 5$. Exactly one: swim only
       $30 - 10 - 8 + 5 = 17$, run only $25 - 10 - 7 + 5 = 13$, cycle only $20 - 8 - 7 + 5 = 10$, total
       $17 + 13 + 10 = 40$.
    7. All words $4^4 = 256$. Missing a given letter: $3^4 = 81$, four letters to miss. Missing a given pair: $2^4 = 16$,
       $\dbinom{4}{2} = 6$ pairs. Missing a given three: $1^4 = 1$, 4 triples. Missing at least one:
       $4 \times 81 - 6 \times 16 + 4 \times 1 = 324 - 96 + 4 = 232$. Using all four: $256 - 232 = 24$. Check: a
       4-letter word using all of A, B, C, D is just an arrangement of them, $4! = 24$. ✓
    8. Count strings missing 7, 8 or 9. Missing a given one: $9^6 = 531441$ (three of these). Missing a given two:
       $8^6 = 262144$ (three). Missing all three: $7^6 = 117649$. Missing at least one:
       $3 \times 531441 - 3 \times 262144 + 117649 = 1594323 - 786432 + 117649 = 925540$. Wanted:
       $1\,000\,000 - 925\,540 = 74\,460$.

## Common mistake

**Forgetting to add back the triple overlap.** With three sets, subtracting the three pairs removes the centre region
three times, after it was added three times, so it ends up counted zero times. That is why $+|A \cap B \cap C|$ is
needed. Check with one element in the middle: $3 - 3 + 1 = 1$.

**Multiplying to find "divisible by both".** Divisible by 4 and by 6 means divisible by 12, the **lowest common
multiple**, not by $4 \times 6 = 24$. (12 is divisible by both 4 and 6 but not by 24.) Multiplying only works when the
two numbers share no common factor, like 2 and 3.

## Where it leads

- Back: [Level 5, cards and hands](../level-5/06-cards-hands.md) · Next: [Stars and bars](02-stars-and-bars.md)
- [Level 6 page](index.md) · [Counting topic page](../index.md)
- "Count all and take away what you do not want" is the one-set version, from [Level 3, counting what you do not want](../level-3/03-counting-the-rest.md).
- Inclusion-exclusion counts derangements (nobody gets their own hat) in [Level 8](../level-8/index.md).
- The numbers divisible by none of 2, 3, 5 are the start of a prime sieve, and lowest common multiples come from
  [Number theory](../../number-theory/index.md).
- Unions, intersections and Venn diagrams are tools of [Logic](../../logic/index.md) and of chance:
  $P(A \text{ or } B) = P(A) + P(B) - P(A \text{ and } B)$ in [Probability](../../probability/index.md).
- Set notation and proofs about sets: [MAT137 Unit 1 (logic, sets and proofs)](../../../uoft/MAT137/unit01.md).
