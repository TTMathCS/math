---
title: "Arrangements with conditions"
---

# Arrangements with conditions

*Counting and combinations · level 4, lesson 5 of 6*

## A question to start

Five friends, Ana, Ben, Cai, Dev and Eve, line up for a photo. With no rules, there are $5! = 120$ lines. But real
life has rules:

- Ana and Ben are best friends and **insist** on standing next to each other.
- Or: Ana and Ben have just argued and **refuse** to stand next to each other.

Here is a puzzle: which rule allows more lines? Many people guess they are about the same. In fact "together" allows
**48** lines and "apart" allows **72**. By the end of the lesson you will see both numbers in one line each, and know
three tools that solve nearly every "with a condition" question: **glue**, **complement** and **fill the fussy places
first**.

## The idea

### Tool 1: glue things that must be together

If Ana and Ben must stand side by side, tie them together with imaginary string and treat them as **one block**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 175" role="img" aria-label="Top row: Ana and Ben glued into one block, then Cai, Dev and Eve: 4 things to arrange. Bottom row: Cai, Dev and Eve standing with 4 gaps around them, marked with arrows, where Ana and Ben may go so they are apart">
  <rect x="40" y="20" width="84" height="40" rx="8" fill="#eea66f" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="1.2">
    <circle cx="62" cy="40" r="15" fill="#eea66f" fill-opacity="0.8"/><circle cx="102" cy="40" r="15" fill="#eea66f" fill-opacity="0.8"/>
    <circle cx="160" cy="40" r="15" fill="#9cc9ea" fill-opacity="0.8"/><circle cx="210" cy="40" r="15" fill="#9cc9ea" fill-opacity="0.8"/><circle cx="260" cy="40" r="15" fill="#9cc9ea" fill-opacity="0.8"/>
  </g>
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <text x="62" y="44">Ana</text><text x="102" y="44">Ben</text><text x="160" y="44">Cai</text><text x="210" y="44">Dev</text><text x="260" y="44">Eve</text>
  </g>
  <text x="290" y="45" font-size="13" fill="currentColor">4 things: 4! × 2</text>
  <g stroke="currentColor" stroke-width="1.2">
    <circle cx="110" cy="120" r="15" fill="#9cc9ea" fill-opacity="0.8"/><circle cx="170" cy="120" r="15" fill="#9cc9ea" fill-opacity="0.8"/><circle cx="230" cy="120" r="15" fill="#9cc9ea" fill-opacity="0.8"/>
  </g>
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <text x="110" y="124">Cai</text><text x="170" y="124">Dev</text><text x="230" y="124">Eve</text>
  </g>
  <g fill="#7ccf9a" stroke="currentColor">
    <path d="M 80 92 L 74 80 L 86 80 Z"/><path d="M 140 92 L 134 80 L 146 80 Z"/><path d="M 200 92 L 194 80 L 206 80 Z"/><path d="M 260 92 L 254 80 L 266 80 Z"/>
  </g>
  <g font-size="11" text-anchor="middle" fill="currentColor">
    <text x="80" y="75">gap</text><text x="140" y="75">gap</text><text x="200" y="75">gap</text><text x="260" y="75">gap</text>
  </g>
  <text x="290" y="125" font-size="13" fill="currentColor">3! × 4 × 3</text>
  <text x="210" y="165" font-size="12" text-anchor="middle" fill="currentColor">together: glue them · apart: put them in different gaps</text>
</svg>
</div>

Now there are only **4** things to line up: the Ana-Ben block, Cai, Dev and Eve. That can be done in $4! = 24$ ways.

But the block itself has an inside: it can be Ana-Ben or Ben-Ana. That is $2! = 2$ ways, whatever happens outside. So

$$\text{together} = 4! \times 2! = 24 \times 2 = 48.$$

Why is this right? Every line where Ana and Ben are neighbours gives exactly one "block arrangement" (where the block
stands) and one "inside order" (who is on the left). And every pair of those choices gives a line where they are
neighbours. So the count is a product.

**Glue works for bigger groups too.** If three people must all stand together, glue them into a block of 3: arrange
the blocks and the others, then multiply by $3!$ for the order inside the block.

### Tool 2: the complement for "not together"

"Ana and Ben not together" is awkward to count directly: they could be 2 apart, 3 apart, or at opposite ends. But
every line is either "together" or "not together", never both. So (from level 3):

$$\text{apart} = \text{all} - \text{together} = 120 - 48 = 72.$$

That is why "apart" allows more lines: in most random lines, two particular people are **not** neighbours.

### A check: the gap method

There is also a direct way to count "apart", and it is worth knowing because it also handles "no two of these three
together". First line up the **other** people: Cai, Dev, Eve in $3! = 6$ ways. That makes **4 gaps**: before Cai,
between each pair, and after Eve (the arrows in the picture). Put Ana in any gap (4 choices) and Ben in a **different**
gap (3 choices). People in different gaps can never be neighbours, and people who are not neighbours always have
someone between them, so they are in different gaps.

$$\text{apart} = 3! \times 4 \times 3 = 6 \times 12 = 72. \checkmark$$

### Tool 3: fussy places first

Sometimes the rule is about **places**, not about who is next to whom. For example: arrange the letters of ORANGE so
that the vowels O, A, E are in the **even** places (2nd, 4th, 6th).

ORANGE has 6 different letters: vowels O, A, E and consonants R, N, G. The even places are the fussy ones.

1. Put the 3 vowels into the 3 even places: $3! = 6$ ways.
2. Put the 3 consonants into the 3 odd places: $3! = 6$ ways.
3. Total: $6 \times 6 = 36$.

This is the "fussy parts first" idea from level 3, lesson 2: deal with the places that have rules while you still
know exactly how many choices they have.

### Tool 4 (a bonus): symmetry

In how many of the 120 lines is Ana somewhere **in front of** Ben (not necessarily next to him)?

Pair up every line with the line you get by **swapping** Ana and Ben. In each pair, exactly one line has Ana in front.
So exactly half the lines do: $120 \div 2 = 60$. No listing needed.

## Worked examples

**1. Vowels together.** In how many arrangements of ORANGE are the three vowels all next to each other?

1. Glue O, A, E into one block. Now there are 4 things: the block, R, N, G. They can be lined up in $4! = 24$ ways.
2. Inside the block the vowels can be in $3! = 6$ orders.
3. Total: $24 \times 6 = 144$.

**2. Boys and girls alternate.** Three boys and three girls stand in a line so that boys and girls alternate. How many
lines?

1. The pattern is either B G B G B G or G B G B G B: **2** choices of pattern.
2. For each pattern, the boys fill their 3 places in $3! = 6$ ways and the girls fill theirs in $3! = 6$ ways.
3. Total: $2 \times 6 \times 6 = 72$.

**3. Books on a shelf.** Seven different books, three of them maths books, go on a shelf. In how many orders are the
three maths books together?

1. Glue the maths books: 5 things (the block and 4 others), $5! = 120$ ways.
2. Inside the block: $3! = 6$ ways.
3. Total: $120 \times 6 = 720$ (out of $7! = 5040$ orders in all).

**4. At an end.** In how many of the 120 lines of the five friends is Ana at one end?

1. Ana's place (fussy first): front or back, **2** choices.
2. The other 4 people fill the other 4 places: $4! = 24$ ways.
3. Total: $2 \times 24 = 48$.

## Try it

1. Six people stand in a line. In how many lines are two particular people, Fay and Gus, next to each other?
2. In how many of the lines in question 1 are Fay and Gus **not** next to each other?
3. In how many arrangements of the letters of PLANET are both the first and the last letter vowels?
4. Four boys and four girls stand in a line, alternating. How many lines?
5. Seven runners finish a race (no ties). In how many results does Ana finish ahead of Ben?
6. In how many arrangements of FRIEND are the vowels (I and E) in odd places (1st, 3rd, 5th)?
7. Six people stand in a line. Three of them, Ana, Ben and Cai, are not allowed to stand next to **any** of each
   other. How many lines? (Use the gap method.)
8. Ana and Ben must stand together **and** Cai must stand at the left end, in a line of the five friends. How many
   lines?

??? note "Answers"
    1. Glue: 5 things, $5! = 120$, times 2 for the inside: 240.
    2. All lines $6! = 720$; apart $720 - 240 = 480$.
    3. Vowels A and E: put them at the two ends, $2! = 2$ ways; the other 4 letters in the middle, $4! = 24$ ways.
       $2 \times 24 = 48$.
    4. 2 patterns, $4!$ for the boys and $4!$ for the girls: $2 \times 24 \times 24 = 1152$.
    5. Swapping Ana and Ben pairs up the results; half have Ana ahead: $\dfrac{7!}{2} = \dfrac{5040}{2} = 2520$.
    6. Vowels into 2 of the 3 odd places, in order: $3 \times 2 = 6$ ways. The 4 consonants fill the other 4
       places: $4! = 24$. $6 \times 24 = 144$.
    7. Line up the other 3 people: $3! = 6$ ways, making 4 gaps. Put Ana, Ben and Cai in 3 different gaps, in order:
       $4 \times 3 \times 2 = 24$. Total $6 \times 24 = 144$.
    8. Cai at the left end (1 way). The other 4 places hold the Ana-Ben block and Dev and Eve: 3 things, $3! = 6$,
       times 2 for the block's inside: 12.

## Common mistake

**Forgetting the inside of the glued block.** After gluing Ana and Ben, $4! = 24$ counts only where the block goes.
The block can be Ana-Ben or Ben-Ana, so multiply by $2!$. A block of 3 needs $3!$.

**Thinking "not together" is "all minus 1" or "half".** "Not together" is everything **except** the together lines:
$120 - 48$. Work out the "together" number properly first.

## Where it leads

- Back: [Arranging in a circle](04-arranging-in-circles.md) · Next: [The pigeonhole principle](06-pigeonhole-principle.md)
- [Level 4 page](index.md) · [Counting topic page](../index.md)
- The complement first appeared in [Counting what you do not want](../level-3/03-counting-the-rest.md), and fussy places
  in [Fussy parts first](../level-3/02-fussy-parts-first.md).
- If the line is formed at random, the chance that Ana and Ben stand together is 48 out of 120, which is $\dfrac{2}{5}$:
  see [Probability](../../probability/index.md).
- Level 6 has a decision chart for mixed problems like these: [Level 6](../level-6/index.md).
