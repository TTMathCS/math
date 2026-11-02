---
title: "Matching without counting"
---

# Matching without counting

*Infinity and strange math · level 2, lesson 2 of 6*

## A question to start

A school hall is packed for a show. Hundreds of children, hundreds of chairs. The head teacher wants to know: are there
**exactly as many chairs as children**? Or too many chairs? Or too few?

She does not want to count the children, and she does not want to count the chairs. Counting hundreds of wriggling
children takes ages, and it is easy to lose your place.

She finds out in about ten seconds, without counting **anything**. How?

## The idea

### Sit down, everyone

Here is her trick. She says: **"Everyone, sit down. One child on each chair."**

Then she looks:

- If every child is sitting, and **no chair is empty**, there are exactly as many children as chairs.
- If some chairs are **empty**, there are more chairs than children.
- If some children are **still standing**, there are more children than chairs.

She did not count. She only **matched**: each child with one chair. The leftovers, or no leftovers, tell her the
answer.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 150" role="img" aria-label="Five children in a top row, each joined by a line to one of five chairs in the bottom row. Nobody is left over">
  <g fill="#eea66f" stroke="currentColor" stroke-width="2">
    <circle cx="60" cy="30" r="14"/><circle cx="120" cy="30" r="14"/><circle cx="180" cy="30" r="14"/>
    <circle cx="240" cy="30" r="14"/><circle cx="300" cy="30" r="14"/>
  </g>
  <g fill="#9cc9ea" stroke="currentColor" stroke-width="2">
    <rect x="46" y="96" width="28" height="28"/><rect x="106" y="96" width="28" height="28"/><rect x="166" y="96" width="28" height="28"/>
    <rect x="226" y="96" width="28" height="28"/><rect x="286" y="96" width="28" height="28"/>
  </g>
  <g stroke="currentColor" stroke-width="2">
    <line x1="60" y1="44" x2="60" y2="96"/><line x1="120" y1="44" x2="120" y2="96"/><line x1="180" y1="44" x2="180" y2="96"/>
    <line x1="240" y1="44" x2="240" y2="96"/><line x1="300" y1="44" x2="300" y2="96"/>
  </g>
  <text x="180" y="144" font-size="13" text-anchor="middle" fill="currentColor">every child has a chair, no chair is empty: the same number</text>
</svg>
</div>

### Matching, step by step

Matching two groups means joining them up in **pairs**: one thing from the first group with one thing from the second
group. For a fair matching, there are two rules:

1. **Nobody shares.** Each child has only **one** chair, and each chair has only **one** child.
2. **Look at the leftovers.** When you have matched all you can, see if anything is left over.

If there are **no leftovers on either side**, the two groups are **the same size**. Mathematicians call this kind of
perfect matching a **one-to-one matching**: one partner each, nobody left out.

If there are leftovers on one side, **that side has more**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 150" role="img" aria-label="Six children in a top row and five chairs below. Five children are joined to chairs, and the sixth child has no chair">
  <g fill="#eea66f" stroke="currentColor" stroke-width="2">
    <circle cx="40" cy="30" r="14"/><circle cx="96" cy="30" r="14"/><circle cx="152" cy="30" r="14"/>
    <circle cx="208" cy="30" r="14"/><circle cx="264" cy="30" r="14"/><circle cx="320" cy="30" r="14"/>
  </g>
  <g fill="#9cc9ea" stroke="currentColor" stroke-width="2">
    <rect x="26" y="96" width="28" height="28"/><rect x="82" y="96" width="28" height="28"/><rect x="138" y="96" width="28" height="28"/>
    <rect x="194" y="96" width="28" height="28"/><rect x="250" y="96" width="28" height="28"/>
  </g>
  <g stroke="currentColor" stroke-width="2">
    <line x1="40" y1="44" x2="40" y2="96"/><line x1="96" y1="44" x2="96" y2="96"/><line x1="152" y1="44" x2="152" y2="96"/>
    <line x1="208" y1="44" x2="208" y2="96"/><line x1="264" y1="44" x2="264" y2="96"/>
  </g>
  <text x="320" y="75" font-size="22" text-anchor="middle" fill="currentColor">?</text>
  <text x="180" y="144" font-size="13" text-anchor="middle" fill="currentColor">one child is left standing: more children than chairs</text>
</svg>
</div>

This is how the game **musical chairs** works. There is always one chair fewer than children, so when the music
stops, one child is left standing.

### Why matching is fair

Matching works whether the groups are in a neat line, all jumbled up, or spread all over a field. It does not matter
**which** child gets **which** chair. Any fair matching gives the same answer: if one way of matching leaves one child
standing, every other way does too.

Why? Swapping two children round does not change how many are sitting. Moving a child from one chair to an empty
chair does not change how many are standing. You can shuffle the pairs as much as you like, and the leftovers stay
the same.

### Counting is matching too

Here is a secret: when you **count**, you are matching! You match each thing with a **number word**: this apple
"one", this apple "two", this apple "three". You touch each apple exactly once, and use each word exactly once, in
order. The last word you say tells you how many.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 110" role="img" aria-label="Four apples, each matched by a line to a number word: one, two, three, four">
  <g fill="#7ccf9a" stroke="currentColor" stroke-width="2">
    <circle cx="50" cy="30" r="15"/><circle cx="120" cy="30" r="15"/><circle cx="190" cy="30" r="15"/><circle cx="260" cy="30" r="15"/>
  </g>
  <g stroke="currentColor" stroke-width="2">
    <line x1="50" y1="45" x2="50" y2="72"/><line x1="120" y1="45" x2="120" y2="72"/><line x1="190" y1="45" x2="190" y2="72"/><line x1="260" y1="45" x2="260" y2="72"/>
  </g>
  <g font-size="15" text-anchor="middle" fill="currentColor">
    <text x="50" y="92">one</text><text x="120" y="92">two</text><text x="190" y="92">three</text><text x="260" y="92">four</text>
  </g>
</svg>
</div>

So matching is the most basic idea of all: it is **older** than counting, and counting is built on top of it.

### Before there were numbers

The story goes that long ago, before people had words for big numbers, a shepherd kept track of his sheep with a bag
of pebbles. In the morning, as each sheep went out of the pen, he dropped one pebble into the bag. In the evening, as
each sheep came back in, he took one pebble out.

- If the bag was empty when the last sheep came in, all the sheep were home.
- If pebbles were left in the bag, some sheep were still out on the hill: one lost sheep for each pebble.

He never needed to know **how many** sheep he had. He only matched sheep with pebbles.

### Matching when you cannot count

Matching is extra useful when counting is hard:

- Things that **move** (children, sheep, fish).
- Things that are **too many** to count quickly (chairs in a big hall).
- People who **do not know** the number words yet (a little brother can still check that every plate has a fork).

And here is a hint of what comes next. In the [next lesson](03-patterns-forever.md) you will meet groups that are so
big they **never end**: you could never finish counting them. But you can still try to **match** them. Matching is the
tool mathematicians use to compare the sizes of endless groups.

## Worked examples

**1. Cups and saucers.** Ana puts one cup on each saucer. Every saucer has a cup, and no cup is left on the tray. So
there are **as many cups as saucers**. She never counted.

**2. Fingers.** Put the tips of your fingers together, left hand against right hand: thumb with thumb, pointer with
pointer, and so on. Every finger on the left touches exactly one finger on the right, and none is left over. So your
two hands have **the same number** of fingers, and you showed it without counting to 5.

**3. Shoes in a pile.** A big pile of shoes, all mixed up. Are there as many left shoes as right shoes? Pair each left
shoe with a right shoe. If 3 left shoes have no partner, there are **3 more left shoes** than right shoes, whatever the
total is.

**4. A bad matching.** Tom says: "Two children can share one chair, and then nobody is standing. So there are as many
children as chairs!" That is **not** a fair matching: it breaks the rule "nobody shares". With fair pairs, one child
each, some children would be standing. Tom's way hides the leftovers.

**5. Matching and counting agree.** A class has 24 children and 24 desks. Count both: both give 24. Match them: every
child at one desk, no empty desk. **Counting and matching always agree** for groups we can count, because counting is
matching with number words.

## Try it

1. Six birds and six worms. Each bird gets one worm. Is any bird hungry? Is any worm left?
2. Seven children play musical chairs with six chairs. How many are left standing when the music stops?
3. You put one sock on each foot of a group of children. You run out of socks with 2 feet still bare. Are there more
   feet or more socks? How many more?
4. A shepherd has 10 pebbles left in his bag after the sheep come in. What does that tell him?
5. Draw 5 stars and 7 moons. Match them with lines. Which has more? How many more?
6. Why is "two children on one chair" not allowed in a fair matching?
7. Lea matches her fingers with her toes: one finger on each toe. What will she find?

??? note "Answers"
    1. **No** bird is hungry and **no** worm is left. Six and six match perfectly.
    2. **One** child is left standing. Six children sit on the six chairs, and $7 - 6 = 1$ is left.
    3. **More feet**: 2 more feet than socks. Every sock is on a foot, and 2 feet are left without a sock.
    4. **10 sheep** are still out on the hill. Each pebble left over stands for one sheep that did not come back.
    5. Five stars match five of the moons, and **2 moons** are left over. There are more moons: **2 more**.
    6. Because it hides the leftovers. If children could share chairs, any number of children could fit on any number
       of chairs, and matching would tell us nothing. The rule "one each" is what makes matching a fair test.
    7. She can match all 10 fingers with all 10 toes, with nothing left over (if she has the usual 10 of each). So she
       has **as many fingers as toes**.

## Common mistake

**Looking at how long a row is, not at the pairs.** Two rows of buttons can be the same size even if one row is spread
out and looks longer. Do not judge by length; join them up in pairs and look at the leftovers.

**Breaking the "one each" rule.** Every pair must be one from each group, with no sharing and no thing used twice.
Otherwise the matching does not tell you anything.

## Where it leads

- Previous lesson: [The Möbius strip](01-mobius-strip.md). Next lesson: [Patterns that go on forever](03-patterns-forever.md),
  where matching meets groups that never end.
- This level: [Level 2: Strange loops](index.md). The whole topic: [Infinity and strange math](../index.md).
- Comparing groups when you are just starting out: [Numbers: more, fewer, the same](../../numbers/level-1/03-more-fewer-same.md).
- Making pairs and finding the odd one out: [Number theory: pairs and partners](../../number-theory/level-1/01-pairs-partners.md).
- Matching every outfit with every top and bottom: [Counting: dressing teddy](../../counting/level-1/01-dressing-teddy.md).
- Much later, matching two infinite groups is how mathematicians build Hilbert's hotel, in level 3 of this topic.
