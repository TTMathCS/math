---
title: "Counting by symmetry"
---

# Counting by symmetry

*Counting and combinations · level 3, lesson 5 of 6*

## A question to start

Four friends, Ana, Ben, Cai and Dev, sit around a small round table with four chairs. You already know from level 2
that four people can stand in a line in 4 × 3 × 2 × 1 = 24 ways. So are there 24 different ways to sit around the
table?

Now imagine the table is on a turntable (a "lazy Susan") and the chairs are fixed to it. Spin it a quarter turn, and
every person is in a new place in the room, but everyone still has the **same neighbours**. If all we care about is
who sits next to whom, the spin has changed nothing.

Counted that way, there are only **6** different seatings, not 24. In this lesson you will see why turning cuts the
count, why you can sometimes simply divide, and the surprising case where dividing gives the wrong answer.

## The idea

### When are two arrangements "the same"?

In counting, you must always decide first **which arrangements count as the same**. That is not a maths fact; it
depends on the question.

- If the chairs are numbered (seat 1 is by the window), then moving everyone one chair along **is** a different
  seating: Ana is no longer by the window.
- If only the **order around the table** matters (who is on whose left and right), then turning everyone together
  gives the **same** seating.

A **symmetry** of a problem is a move that changes how something looks but not what we care about. Here the symmetry
is turning the table. In this lesson "the same" means "you can get one from the other by turning".

### Families of seatings

Write down all 24 orders, reading the chairs clockwise starting from the top chair. Now look at one seating and turn it.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 150" role="img" aria-label="Four round tables. On each, Ana, Ben, Cai and Dev sit in the same clockwise order, but turned one more chair each time">
  <circle cx="60" cy="65" r="28" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="60" cy="21" r="11" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor"/>
  <text x="60" y="26" font-size="13" text-anchor="middle" fill="currentColor">A</text>
  <circle cx="104" cy="65" r="11" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor"/>
  <text x="104" y="70" font-size="13" text-anchor="middle" fill="currentColor">B</text>
  <circle cx="60" cy="109" r="11" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor"/>
  <text x="60" y="114" font-size="13" text-anchor="middle" fill="currentColor">C</text>
  <circle cx="16" cy="65" r="11" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor"/>
  <text x="16" y="70" font-size="13" text-anchor="middle" fill="currentColor">D</text>
  <circle cx="160" cy="65" r="28" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="160" cy="21" r="11" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor"/>
  <text x="160" y="26" font-size="13" text-anchor="middle" fill="currentColor">D</text>
  <circle cx="204" cy="65" r="11" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor"/>
  <text x="204" y="70" font-size="13" text-anchor="middle" fill="currentColor">A</text>
  <circle cx="160" cy="109" r="11" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor"/>
  <text x="160" y="114" font-size="13" text-anchor="middle" fill="currentColor">B</text>
  <circle cx="116" cy="65" r="11" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor"/>
  <text x="116" y="70" font-size="13" text-anchor="middle" fill="currentColor">C</text>
  <circle cx="260" cy="65" r="28" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="260" cy="21" r="11" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor"/>
  <text x="260" y="26" font-size="13" text-anchor="middle" fill="currentColor">C</text>
  <circle cx="304" cy="65" r="11" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor"/>
  <text x="304" y="70" font-size="13" text-anchor="middle" fill="currentColor">D</text>
  <circle cx="260" cy="109" r="11" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor"/>
  <text x="260" y="114" font-size="13" text-anchor="middle" fill="currentColor">A</text>
  <circle cx="216" cy="65" r="11" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor"/>
  <text x="216" y="70" font-size="13" text-anchor="middle" fill="currentColor">B</text>
  <circle cx="360" cy="65" r="28" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="360" cy="21" r="11" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor"/>
  <text x="360" y="26" font-size="13" text-anchor="middle" fill="currentColor">B</text>
  <circle cx="404" cy="65" r="11" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor"/>
  <text x="404" y="70" font-size="13" text-anchor="middle" fill="currentColor">C</text>
  <circle cx="360" cy="109" r="11" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor"/>
  <text x="360" y="114" font-size="13" text-anchor="middle" fill="currentColor">D</text>
  <circle cx="316" cy="65" r="11" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor"/>
  <text x="316" y="70" font-size="13" text-anchor="middle" fill="currentColor">A</text>
  <text x="210" y="142" font-size="12" text-anchor="middle" fill="currentColor">4 lists, 1 seating: everyone has the same left and right neighbours</text>
</svg>
</div>

Read clockwise from the top chair, these are A B C D, then D A B C, then C D A B, then B C D A. Four different lists,
but in every one Ana has Ben on one side and Dev on the other. They are all **one** seating. Call these four lists a
**family**.

Every one of the 24 lists belongs to exactly one family. How big is each family? Turning by 1, 2 or 3 chairs always
moves Ana to a **different** chair, so the four turns always give four **different** lists. So every family has
exactly **4** lists.

24 lists, shared into families of 4: 24 ÷ 4 = **6** seatings.

### Another way: fix one person

Here is a second road to the same answer. Since turning does not matter, **turn the table until Ana is in the top
chair**. Every seating can be turned to look like that, in exactly one way. Now only the other three are left to
place, in the three other chairs, clockwise:

3 × 2 × 1 = **6** seatings.

Two different reasons, the same answer. Fixing one person "uses up" the turning: once Ana is pinned to the top chair,
no more turning is possible.

### Necklaces: when families are different sizes

Now a puzzle where dividing goes wrong. A necklace has 4 beads on a ring, and each bead is **orange** or **blue**. Two
necklaces are the same if you can turn one to get the other.

Reading the 4 beads clockwise from the top, there are 2 × 2 × 2 × 2 = 16 lists. Each family has 4 turns, so is the
answer 16 ÷ 4 = 4?

No. Here are all the different necklaces. The number under each one is the size of its family: how many of the 16
lists you get by turning it.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 120" role="img" aria-label="The six different 4-bead necklaces with orange and blue beads: all orange, one blue, two blues side by side, two blues opposite, three blues, all blue. Under them the family sizes 1, 4, 4, 2, 4, 1">
  <circle cx="40" cy="50" r="22" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="40" cy="28" r="8" fill="#eea66f" stroke="currentColor"/>
  <circle cx="62" cy="50" r="8" fill="#eea66f" stroke="currentColor"/>
  <circle cx="40" cy="72" r="8" fill="#eea66f" stroke="currentColor"/>
  <circle cx="18" cy="50" r="8" fill="#eea66f" stroke="currentColor"/>
  <text x="40" y="105" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="108" cy="50" r="22" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="108" cy="28" r="8" fill="#eea66f" stroke="currentColor"/>
  <circle cx="130" cy="50" r="8" fill="#eea66f" stroke="currentColor"/>
  <circle cx="108" cy="72" r="8" fill="#eea66f" stroke="currentColor"/>
  <circle cx="86" cy="50" r="8" fill="#9cc9ea" stroke="currentColor"/>
  <text x="108" y="105" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <circle cx="176" cy="50" r="22" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="176" cy="28" r="8" fill="#eea66f" stroke="currentColor"/>
  <circle cx="198" cy="50" r="8" fill="#eea66f" stroke="currentColor"/>
  <circle cx="176" cy="72" r="8" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="154" cy="50" r="8" fill="#9cc9ea" stroke="currentColor"/>
  <text x="176" y="105" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <circle cx="244" cy="50" r="22" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="244" cy="28" r="8" fill="#eea66f" stroke="currentColor"/>
  <circle cx="266" cy="50" r="8" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="244" cy="72" r="8" fill="#eea66f" stroke="currentColor"/>
  <circle cx="222" cy="50" r="8" fill="#9cc9ea" stroke="currentColor"/>
  <text x="244" y="105" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <circle cx="312" cy="50" r="22" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="312" cy="28" r="8" fill="#eea66f" stroke="currentColor"/>
  <circle cx="334" cy="50" r="8" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="312" cy="72" r="8" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="290" cy="50" r="8" fill="#9cc9ea" stroke="currentColor"/>
  <text x="312" y="105" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <circle cx="380" cy="50" r="22" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="380" cy="28" r="8" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="402" cy="50" r="8" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="380" cy="72" r="8" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="358" cy="50" r="8" fill="#9cc9ea" stroke="currentColor"/>
  <text x="380" y="105" font-size="12" text-anchor="middle" fill="currentColor">1</text>
</svg>
</div>

There are **6** necklaces. The family sizes are 1 + 4 + 4 + 2 + 4 + 1 = 16, so every one of the 16 lists is
accounted for.

Why are some families small?

- **All orange.** Turning it gives the same list every time. Its family has just **1** list.
- **Orange, blue, orange, blue.** A quarter turn gives blue, orange, blue, orange. A half turn brings it back to
  orange, blue, orange, blue. So its family has only **2** lists.

These necklaces have symmetry of their own: some turns leave them looking exactly the same. That makes their families
smaller, and then "divide by 4" undercounts.

**The rule.** You may divide by the number of turns **only when every family has the same size**. That is true when
all the things are **different** (four different people, or four different coloured beads): then no turn except
"no turn at all" can leave the arrangement unchanged.

### Flipping over: bracelets

A necklace can also be picked up and **turned over**, like flipping a pancake. Then the clockwise order becomes the
anticlockwise order. Take a ring of 3 beads coloured orange, blue and green, one of each.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 135" role="img" aria-label="Two 3-bead rings: orange, blue, green clockwise on the left, and orange, green, blue clockwise on the right, with a dashed mirror line between them">
  <circle cx="130" cy="70" r="36" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="130.0" cy="34.0" r="11" fill="#eea66f" stroke="currentColor"/>
  <circle cx="161.2" cy="88.0" r="11" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="98.8" cy="88.0" r="11" fill="#7ccf9a" stroke="currentColor"/>
  <circle cx="290" cy="70" r="36" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="290.0" cy="34.0" r="11" fill="#eea66f" stroke="currentColor"/>
  <circle cx="321.2" cy="88.0" r="11" fill="#7ccf9a" stroke="currentColor"/>
  <circle cx="258.8" cy="88.0" r="11" fill="#9cc9ea" stroke="currentColor"/>
  <line x1="210" y1="20" x2="210" y2="120" stroke="currentColor" stroke-dasharray="5 4"/>
  <text x="130" y="128" font-size="12" text-anchor="middle" fill="currentColor">orange, blue, green</text>
  <text x="290" y="128" font-size="12" text-anchor="middle" fill="currentColor">orange, green, blue</text>
</svg>
</div>

The lists: 3 × 2 × 1 = 6. Turning makes families of 3 (all beads different), so there are 6 ÷ 3 = **2** necklaces:
orange-blue-green clockwise, and orange-green-blue clockwise. No turning changes one into the other: try it.

But flip the left ring over (imagine looking at it in the mirror on the dashed line) and you get the right ring. If
flipping is allowed, they are the same, and there is just **1** bracelet.

| | 3 different beads | 4 different beads |
| --- | --- | --- |
| lists (a straight row) | 6 | 24 |
| turning allowed | 6 ÷ 3 = 2 | 24 ÷ 4 = 6 |
| turning and flipping | 2 ÷ 2 = 1 | 6 ÷ 2 = 3 |

With all beads different, each flip pairs up two different necklaces, so you can halve again.

## Worked examples

**1. Five at a round table.** Five people sit at a round table; only who sits next to whom matters. How many seatings?

1. Lists in a row: 5 × 4 × 3 × 2 × 1 = 120.
2. Everyone is different, so every family has 5 turns: 120 ÷ 5 = **24**.
3. Check by fixing one person in the top chair: the other four fill 4 chairs in 4 × 3 × 2 × 1 = 24 ways. ✓

**2. Three beads, two colours.** How many 3-bead necklaces with orange and blue beads, if turning is allowed?

1. Lists: 2 × 2 × 2 = 8. Dividing by 3 gives 8 ÷ 3, not a whole number: a sure sign that dividing is wrong here.
2. Sort by the number of blue beads. 0 blue: 1 necklace. 3 blue: 1 necklace. 1 blue: the blue bead can be anywhere,
   and turning moves it to any place, so 1 necklace. 2 blue: the orange bead can be turned to anywhere, so 1.
3. Total: **4** necklaces. Family sizes: 1 + 3 + 3 + 1 = 8. ✓

**3. A spinning triangle.** A triangle card spins on a pin through its middle. Each of its three corners is painted a
different colour from red, yellow and purple. How many really different cards are there, if spinning does not count as
a change?

1. Lists: 3 × 2 × 1 = 6.
2. Every family has 3 spins (all colours different): 6 ÷ 3 = **2**.
3. If you may also flip the card over (the back looks like the front), the 2 become **1**.

**4. Four keys on a key ring.** Four different keys are put on a ring. The ring can be turned and flipped. How many
different rings?

From the table: 24 ÷ 4 = 6, then 6 ÷ 2 = **3**. Fix key A at the top. Its two neighbours could be: B and C, B and D,
or C and D. Then the fourth key goes opposite A. Flipping only swaps which neighbour is on the left, so those 3 cases
are all of them. ✓

## Try it

1. Six people sit at a round table; only neighbours matter. How many seatings?
2. Three people sit at a round table. How many seatings (turning allowed)? Draw them.
3. A round table has chairs numbered 1 to 4. How many ways can four people sit, now that chairs are numbered?
4. How many 5-bead necklaces with orange and blue beads are there, if turning is allowed? (Hint: there are 32 lists.
   Only all-orange and all-blue have a family smaller than 5.)
5. Five different beads are threaded on a ring that can be turned and flipped. How many different rings?
6. Explain why "16 ÷ 4 = 4 necklaces" is wrong for 4 beads of 2 colours.

??? note "Answers"
    1. 6 × 5 × 4 × 3 × 2 × 1 = 720 lists; families of 6; 720 ÷ 6 = 120. (Or fix one person: the other five,
       5 × 4 × 3 × 2 × 1 = 120.)
    2. 3 × 2 × 1 = 6 lists, families of 3: 6 ÷ 3 = 2. Fix A at the top: then B, C clockwise or C, B clockwise.
    3. The chairs are different now, so no dividing: 4 × 3 × 2 × 1 = 24.
    4. 32 lists. All orange and all blue are 1 list each. The other 30 lists make families of exactly 5 (with 5 beads,
       any turn that is not the whole way round moves the pattern to a different list, unless all beads are the same
       colour). 30 ÷ 5 = 6. Total 6 + 2 = 8 necklaces.
    5. 5 × 4 × 3 × 2 × 1 = 120 lists. Turning: 120 ÷ 5 = 24. Flipping pairs them up: 24 ÷ 2 = 12.
    6. Some necklaces have families smaller than 4: all orange (1), all blue (1) and orange-blue-orange-blue (2).
       Dividing by 4 pretends every family has 4 lists. The true count is 6.

## Common mistake

**Dividing when you should not.** If chairs are numbered, or a table has a "head" seat, turning does change things.
Only divide when the question says (or clearly means) that turned arrangements are the same.

**Dividing when families are different sizes.** Dividing works only when every family has the same size, which is
true when all the items are different. With repeated colours, sort the patterns by hand, or check that the family
sizes add up to the total number of lists.

## Where it leads

- Back: [Squares on a chessboard](04-chessboard-squares.md) · Next: [Factors and subsets](06-factors-and-subsets.md)
- [Level 3 page](index.md) · [Counting topic page](../index.md)
- In level 4 the round table gets a formula, $(n - 1)!$: [Arranging in a circle](../level-4/04-arranging-in-circles.md).
- Shapes that look the same after a turn have **rotational symmetry**:
  [Geometry: rotational symmetry](../../geometry/level-4/06-rotational-symmetry.md).
- At level 8, the "families of different sizes" problem is solved for good with Burnside's lemma:
  [Level 8](../level-8/index.md).
