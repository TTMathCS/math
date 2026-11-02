---
title: "Arranging in a circle"
---

# Arranging in a circle

*Counting and combinations · level 4, lesson 4 of 6*

## A question to start

Ten people sit down to dinner at a round table. Each evening they sit in a new arrangement, and they keep going until
every possible arrangement has been used. Two arrangements count as the same if everyone has the same neighbour on the
left and the same neighbour on the right.

In a straight line, 10 people can stand in $10! = 3\,628\,800$ orders. How many evenings will the round-table dinners
take? The answer is $9! = 362\,880$ evenings, which is still nearly a thousand years of dinners, but exactly
**one tenth** of the line count. Why one tenth? And what changes if the "table" is a ring of beads that you can also
turn over?

## The idea

### What "the same" means at a round table

In level 3 you met this idea with small tables: if everyone moves one seat to the left together, nobody's neighbours
change. When only the **order around the circle** matters, all those turned versions count as **one** circular
arrangement.

(If the chairs are numbered, or one seat is special, like the seat by the door or the head of the table, then turning
**does** make a difference, and you just use $n!$ as for a line.)

### Reason 1: cut the circle open

Take one circular arrangement of 5 people, A, B, C, D, E. You can turn it into a line by "cutting" the circle just
before one person and reading clockwise.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 165" role="img" aria-label="Five people A, B, C, D, E around a table, and the five lines you get by starting at each person and reading clockwise: ABCDE, BCDEA, CDEAB, DEABC, EABCD">
  <circle cx="90" cy="85" r="38" fill="#7ccf9a" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="90.0" cy="27.0" r="12" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor"/>
  <text x="90.0" y="32.0" font-size="13" text-anchor="middle" fill="currentColor">A</text>
  <circle cx="145.2" cy="67.1" r="12" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor"/>
  <text x="145.2" y="72.1" font-size="13" text-anchor="middle" fill="currentColor">B</text>
  <circle cx="124.1" cy="131.9" r="12" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor"/>
  <text x="124.1" y="136.9" font-size="13" text-anchor="middle" fill="currentColor">C</text>
  <circle cx="55.9" cy="131.9" r="12" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor"/>
  <text x="55.9" y="136.9" font-size="13" text-anchor="middle" fill="currentColor">D</text>
  <circle cx="34.8" cy="67.1" r="12" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor"/>
  <text x="34.8" y="72.1" font-size="13" text-anchor="middle" fill="currentColor">E</text>
  <text x="230" y="35" font-size="15" font-family="monospace" fill="currentColor">A B C D E</text>
  <text x="230" y="60" font-size="15" font-family="monospace" fill="currentColor">B C D E A</text>
  <text x="230" y="85" font-size="15" font-family="monospace" fill="currentColor">C D E A B</text>
  <text x="230" y="110" font-size="15" font-family="monospace" fill="currentColor">D E A B C</text>
  <text x="230" y="135" font-size="15" font-family="monospace" fill="currentColor">E A B C D</text>
  <text x="300" y="160" font-size="12" text-anchor="middle" fill="currentColor">5 lines, 1 circle</text>
</svg>
</div>

There are 5 places to cut, so one circle gives **5** different lines. They are different because the people are
different: each line starts with a different person.

Every one of the $5! = 120$ lines comes from exactly one circle (just join its ends). So the 120 lines are shared out
in groups of 5, one group per circle:

$$\text{circles} = \frac{5!}{5} = \frac{120}{5} = 24.$$

For $n$ different people the same argument gives $\dfrac{n!}{n}$. And since $n! = n \times (n - 1)!$,

$$\frac{n!}{n} = (n - 1)!.$$

> **$n$ different things can be arranged in a circle in $(n - 1)!$ ways**, when turning the circle does not count as a
> change.

### Reason 2: fix one person

Here is the other road. Turning does not matter, so turn the table until A is in the top seat. Every circular
arrangement can be turned to look like that in exactly one way. Now A is fixed, the seats are no longer all alike:
"the seat just clockwise of A" is a definite seat. Fill the remaining $n - 1$ seats, going clockwise from A, in
$(n - 1)!$ ways.

Two reasons, one answer. The "fix one" idea is especially useful when there are extra conditions, as you will see in
the worked examples.

### Necklaces and key rings: turning over

A ring of beads or keys can be **turned** and also **flipped over**. Flipping turns clockwise into anticlockwise.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 150" role="img" aria-label="Two rings of 4 different beads. Left: A, B, C, D clockwise. Right: A, D, C, B clockwise, which is the left ring flipped over. A dashed mirror line separates them">
  <circle cx="120" cy="75" r="40" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="120.0" cy="35.0" r="12" fill="#eea66f" fill-opacity="0.8" stroke="currentColor"/>
  <text x="120.0" y="40.0" font-size="12" text-anchor="middle" fill="currentColor">A</text>
  <circle cx="160.0" cy="75.0" r="12" fill="#9cc9ea" fill-opacity="0.8" stroke="currentColor"/>
  <text x="160.0" y="80.0" font-size="12" text-anchor="middle" fill="currentColor">B</text>
  <circle cx="120.0" cy="115.0" r="12" fill="#7ccf9a" fill-opacity="0.8" stroke="currentColor"/>
  <text x="120.0" y="120.0" font-size="12" text-anchor="middle" fill="currentColor">C</text>
  <circle cx="80.0" cy="75.0" r="12" fill="#eea66f" fill-opacity="0.35" stroke="currentColor"/>
  <text x="80.0" y="80.0" font-size="12" text-anchor="middle" fill="currentColor">D</text>
  <circle cx="300" cy="75" r="40" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="300.0" cy="35.0" r="12" fill="#eea66f" fill-opacity="0.8" stroke="currentColor"/>
  <text x="300.0" y="40.0" font-size="12" text-anchor="middle" fill="currentColor">A</text>
  <circle cx="340.0" cy="75.0" r="12" fill="#eea66f" fill-opacity="0.35" stroke="currentColor"/>
  <text x="340.0" y="80.0" font-size="12" text-anchor="middle" fill="currentColor">D</text>
  <circle cx="300.0" cy="115.0" r="12" fill="#7ccf9a" fill-opacity="0.8" stroke="currentColor"/>
  <text x="300.0" y="120.0" font-size="12" text-anchor="middle" fill="currentColor">C</text>
  <circle cx="260.0" cy="75.0" r="12" fill="#9cc9ea" fill-opacity="0.8" stroke="currentColor"/>
  <text x="260.0" y="80.0" font-size="12" text-anchor="middle" fill="currentColor">B</text>
  <line x1="210" y1="20" x2="210" y2="130" stroke="currentColor" stroke-dasharray="5 4"/>
  <text x="120" y="142" font-size="12" text-anchor="middle" fill="currentColor">A B C D clockwise</text>
  <text x="300" y="142" font-size="12" text-anchor="middle" fill="currentColor">A D C B clockwise</text>
</svg>
</div>

As circles you cannot turn, these two are different: on the left, B is clockwise of A; on the right, D is. But flip the
left ring over (reflect it in the dashed line) and you get the right ring exactly.

So when flipping is allowed, every necklace is counted **twice** among the $(n - 1)!$ circular arrangements: once as
itself and once as its mirror image. Can a necklace be its own mirror image? With A fixed at the top, the mirror image
puts A's clockwise neighbour and anticlockwise neighbour the other way round. For the two to match, those two
neighbours would have to be the same bead, which is impossible when all beads are different and there are at least 3
of them. So every pair really is a pair, and

$$\text{necklaces} = \frac{(n - 1)!}{2} \qquad (n \ge 3,\ \text{all beads different}).$$

For 1 or 2 beads there is only one arrangement anyway.

### Summary

| Situation | Count for $n$ different things |
| --- | --- |
| a line, or seats that are all different | $n!$ |
| a circle, turning does not count as a change | $(n - 1)!$ |
| a ring you can turn and flip (necklace, key ring), $n \ge 3$ | $\dfrac{(n - 1)!}{2}$ |

If some of the beads are **the same** colour, these formulas break down (level 3 showed why: some necklaces have
symmetry of their own). That harder problem is solved at level 8.

## Worked examples

**1. Six at a round table.** $(6 - 1)! = 5! = 120$ arrangements.

**2. A bracelet.** How many bracelets can be made from 8 different beads? A bracelet can be turned and flipped:

$$\frac{(8 - 1)!}{2} = \frac{5040}{2} = 2520.$$

**3. Two friends together.** Seven people sit at a round table, and Ana and Ben must sit next to each other. How many
arrangements?

1. **Glue** Ana and Ben into one block. Now there are 6 "things" round the table: the block and 5 others.
2. Arrange 6 things in a circle: $(6 - 1)! = 120$ ways.
3. Inside the block, Ana can be on Ben's left or on his right: 2 ways.
4. Total: $120 \times 2 = 240$.

**4. Alternating round a table.** Four boys and four girls sit at a round table of 8 so that boys and girls
alternate. How many arrangements?

1. Fix one boy at the top seat (this uses up the turning).
2. The seats now alternate: girl seat, boy seat, girl seat, ... going clockwise. The other 3 boys fill the 3 boy seats:
   $3! = 6$ ways.
3. The 4 girls fill the 4 girl seats: $4! = 24$ ways. These seats are all different now, because the fixed boy marks
   where the circle starts.
4. Total: $6 \times 24 = 144$.

**5. A key ring.** In how many ways can 5 different keys be put on a key ring? $\dfrac{4!}{2} = 12$.

## Try it

1. In how many ways can 5 people sit at a round table?
2. In how many ways can 10 people sit at a round table with **numbered** chairs?
3. How many necklaces can be made from 9 different beads? (Turning and flipping allowed.)
4. A round table seats 6. Two of the six people, Cai and Dev, must **not** sit next to each other. How many
   arrangements? (Count the arrangements where they do sit together, and take them away.)
5. A spinning tray in a restaurant has 6 places, and 6 different sauces are put on it. How many different trays, if
   spinning the tray does not count as a change?
6. Three beads, all different, are put on a ring that can be turned and flipped. How many different rings? Explain why
   the answer is so small.
7. Five couples sit at a round table of 10 so that every couple sits together. How many arrangements?

??? note "Answers"
    1. $(5 - 1)! = 24$.
    2. Numbered chairs make every seat different, so no dividing: $10! = 3\,628\,800$.
    3. $\dfrac{8!}{2} = \dfrac{40\,320}{2} = 20\,160$.
    4. All arrangements: $5! = 120$. Cai and Dev together: glue them, $(5 - 1)! \times 2 = 24 \times 2 = 48$. Apart:
       $120 - 48 = 72$.
    5. Turning does not count: $(6 - 1)! = 120$.
    6. $\dfrac{(3 - 1)!}{2} = \dfrac{2}{2} = 1$. With 3 beads, every bead is next to both of the others, so all rings
       look alike up to turning and flipping.
    7. Glue each couple into a block: 5 blocks in a circle, $(5 - 1)! = 24$ ways. Each couple can sit 2 ways round:
       $2 \times 2 \times 2 \times 2 \times 2 = 32$. Total $24 \times 32 = 768$.

## Common mistake

**Dividing by $n$ when the seats are not alike.** If chairs are numbered, or there is a head of the table, every seat
is special and turning changes the arrangement. Use $n!$ then. Read the question carefully: does turning everyone round
give the "same" arrangement or not?

**Dividing by 2 for people at a table.** People at a table cannot be flipped over like a necklace: Ana with Ben on her
**left** is different from Ana with Ben on her **right**. Only divide by 2 for objects that can be turned over, like
beads and keys.

## Where it leads

- Back: [Arranging with identical things](03-identical-things.md) · Next: [Arrangements with conditions](05-arranging-with-rules.md)
- [Level 4 page](index.md) · [Counting topic page](../index.md)
- Families of turned arrangements were first met in [Counting by symmetry](../level-3/05-counting-by-symmetry.md).
- Turning and flipping are the symmetries of a regular polygon:
  [Geometry: rotational symmetry](../../geometry/level-4/06-rotational-symmetry.md).
- At level 8, Burnside's lemma counts necklaces even when beads repeat: [Level 8](../level-8/index.md).
