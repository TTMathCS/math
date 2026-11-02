---
title: "Taking turns fairly"
---

# Taking turns fairly

*Probability · level 1, lesson 3 of 6*

## A question to start

Three friends, Ana, Ben and Cal, all want to go first on the swing. Ana says, "Let's do a counting rhyme to choose!"
She points at each of them in turn and says, "Eeny, meeny, miny, moe." She points at herself first.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 140" role="img" aria-label="Three children, Ana, Ben and Cal, in a row. The four words eeny, meeny, miny and moe land on Ana, Ben, Cal and then Ana again.">
  <g stroke="currentColor" stroke-width="2">
    <circle cx="80" cy="50" r="28" fill="#eea66f"/><circle cx="200" cy="50" r="28" fill="#9cc9ea"/><circle cx="320" cy="50" r="28" fill="#7ccf9a"/>
  </g>
  <g font-size="14" fill="currentColor" text-anchor="middle">
    <text x="80" y="55">Ana</text><text x="200" y="55">Ben</text><text x="320" y="55">Cal</text>
    <text x="80" y="100">1. eeny</text><text x="200" y="100">2. meeny</text><text x="320" y="100">3. miny</text>
    <text x="80" y="122" font-weight="bold">4. moe</text>
  </g>
</svg>
</div>

The last word, "moe", lands on Ana. Ana goes first!

Was that fair? It sounded like luck. But try it again, starting at Ana. It lands on Ana **again**. Every time. Ana knew
where to start. The rhyme was not luck at all.

So what does make a way of choosing fair?

## The idea

### What fair means

A way of choosing is **fair** when everybody has the **same chance**. Nobody is more likely to be picked than
anybody else.

There is a second thing that matters too. A fair way of choosing is one that **nobody can control**. If one person
can make it come out the way they want, it is not fair, even if it looks like luck.

So a fair way of choosing has two jobs:

1. **Same chance for everyone.**
2. **Nobody can make it come out their way.**

Let us test some ways of choosing.

### Flipping a coin

A coin has two sides. One side is called **heads** (often it has a face on it). The other side is called **tails**.

To choose between two people, one person picks heads and the other gets tails. Then you flip the coin high in the
air, spinning it, and let it land.

- The coin has 2 ways to land: heads or tails.
- Heads has 1 way. Tails has 1 way. They are **equally likely**.
- Nobody can control a coin that spins many times in the air.

So a good, high, spinning coin flip is **fair**. That is why sports games often start with a coin flip.

But be careful. If the person flipping only lifts the coin a tiny bit, or slides it, or peeks at it on the way down,
they might control it. A fair flip has to spin.

### Rock, paper, scissors

Two people shake their fists three times and then each makes a shape with their hand: **rock** (a fist),
**paper** (a flat hand) or **scissors** (two fingers).

- Rock beats scissors (a rock smashes scissors).
- Scissors beats paper (scissors cut paper).
- Paper beats rock (paper wraps the rock).
- The same shape is a tie, and you play again.

Is it fair? Here is every way it can turn out. Your shape goes down the side, your friend's shape goes along the top.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 220" role="img" aria-label="A three by three grid. Rows are your shape, columns are your friend's shape: rock, paper, scissors. The three squares on the diagonal are ties. Three squares say you win, and three say friend wins.">
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="165" y="20">friend: rock</text><text x="265" y="20">friend: paper</text><text x="365" y="20">friend: scissors</text>
    <text x="60" y="68">you: rock</text><text x="60" y="128">you: paper</text><text x="60" y="188">you: scissors</text>
  </g>
  <g stroke="currentColor" stroke-width="1.5">
    <rect x="120" y="35" width="90" height="56" fill="#9cc9ea"/><rect x="220" y="35" width="90" height="56" fill="#7ccf9a"/><rect x="320" y="35" width="90" height="56" fill="#eea66f"/>
    <rect x="120" y="98" width="90" height="56" fill="#eea66f"/><rect x="220" y="98" width="90" height="56" fill="#9cc9ea"/><rect x="320" y="98" width="90" height="56" fill="#7ccf9a"/>
    <rect x="120" y="161" width="90" height="56" fill="#7ccf9a"/><rect x="220" y="161" width="90" height="56" fill="#eea66f"/><rect x="320" y="161" width="90" height="56" fill="#9cc9ea"/>
  </g>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="165" y="68">tie</text><text x="265" y="68">friend</text><text x="365" y="68">you</text>
    <text x="165" y="131">you</text><text x="265" y="131">tie</text><text x="365" y="131">friend</text>
    <text x="165" y="194">friend</text><text x="265" y="194">you</text><text x="365" y="194">tie</text>
  </g>
</svg>
</div>

Count the squares.

- "You" (orange): 3 squares.
- "Friend" (green): 3 squares.
- "Tie" (blue): 3 squares.

You and your friend have the **same number of ways to win**: 3 each. Every shape beats one shape and loses to one
shape. No shape is the best. That is why rock, paper, scissors is fair.

It stays fair as long as both people make their shape **at the same time**. If you wait and see your friend's hand
first, you can always win, and then it is not fair at all.

### Drawing straws

To choose one person out of three, take three straws (or paper strips). Cut one of them short. Hold all three in
your hand so that the tops are level and nobody can see which is short. Each person pulls one straw. Whoever gets the
short one is chosen.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 150" role="img" aria-label="Left: a hand holding three straws with their tops level, so they look the same. Right: the three straws pulled out; the middle one is short.">
  <rect x="40" y="70" width="110" height="60" rx="18" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="2"/>
  <g stroke="#9cc9ea" stroke-width="7" stroke-linecap="round">
    <line x1="70" y1="25" x2="70" y2="80"/><line x1="95" y1="25" x2="95" y2="80"/><line x1="120" y1="25" x2="120" y2="80"/>
  </g>
  <text x="95" y="146" font-size="13" fill="currentColor" text-anchor="middle">tops look the same</text>
  <g stroke="#9cc9ea" stroke-width="7" stroke-linecap="round">
    <line x1="260" y1="25" x2="260" y2="125"/><line x1="310" y1="25" x2="310" y2="65"/><line x1="360" y1="25" x2="360" y2="125"/>
  </g>
  <text x="310" y="146" font-size="13" fill="currentColor" text-anchor="middle">one is short</text>
</svg>
</div>

Is it fair? The short straw could be in **any** of the three places, and nobody can see which one. So each straw is
just as likely to be the short one. That gives each person the same chance.

A question people often ask: "Is it better to pick first or last?" When you pick first, you have three straws to
choose from, and only one is short. When you pick last, you get whatever straw is left. It seems different, but here
is a way to see that it is the same. Imagine everybody **chooses** their straw first, holding on to it, and then all
three pull together. Pulling one at a time does not move the short straw. It was already in one of the three places,
and each place was just as likely. So picking first, second or last gives the same chance.

### Why the counting rhyme was not fair

Now back to Ana. A counting rhyme always has the **same number of words**. "Eeny, meeny, miny, moe" has 4. With three
children, 4 words go once round the circle and then one more step. So the last word always lands on the person you
**started with**.

That means the person who does the counting can choose who wins, just by choosing where to start. It breaks job 2:
**somebody can control it**. A rhyme feels like luck to the others, but it is not luck to the person who knows how it
works.

(With a different number of children, it lands somewhere else. With 4 children, "moe" lands on the 4th child. But it
always lands in the same place for the same number of children, and the counter can work it out.)

### Fair without any luck at all

There is another fair way that needs no coin and no straws: **take turns**. Ana goes first today, Ben goes first
tomorrow, Cal goes first the day after. Then start again.

This is fair in a different way. It is not about chance. It is fair because over three days everybody gets exactly
one turn first. Taking turns is often the best way of all, because nobody can complain. Chance is useful when you
need to choose just **once**.

### Some ways that are not fair

- "The oldest goes first." The same person goes first every time. Not the same chance.
- "Whoever shouts 'me' first." The loudest or fastest person nearly always wins.
- "I'll flip a coin. Heads I go first. Tails, we flip again." The other person can never win! Only one way out.
- "Pick a number from 1 to 10, and closest to my number wins." Fair only if the person with the number cannot change
  it after hearing the guesses. Write it down first, and keep it hidden.

## Worked examples

**Example 1. Is it fair?**

Two children choose who goes first by rolling a die. Jo goes first if it shows 1, 2 or 3. Kim goes first if it shows
4, 5 or 6.

1. A die has 6 faces, and each is just as likely (you will see why in [lesson 6](06-rolling-a-die.md)).
2. Jo has 3 ways: 1, 2, 3. Kim has 3 ways: 4, 5, 6.
3. Same number of ways, and nobody can control a good roll. **Fair.**

**Example 2. Is it fair?**

Jo goes first if the die shows 1 or 2. Kim goes first if it shows 3, 4, 5 or 6.

1. Jo has 2 ways. Kim has 4 ways.
2. Kim has more ways, so Kim is more likely to go first. **Not fair.**
3. To fix it, share the faces equally: 3 each. Or Jo wins on 1, 2 and 3, and Kim on 4, 5 and 6, as in example 1.

**Example 3. Choosing between four.**

Four friends want to choose one person. They have 4 straws. How should they cut them?

1. One person must be chosen, so **one** straw is short.
2. The other **three** straws are long, all the same length.
3. Hold them with the tops level. The short one could be in any of the 4 places, each just as likely. Everybody has
   the same chance. **Fair.**

## Try it

1. Is a high, spinning coin flip a fair way to choose between two people?
2. In rock, paper, scissors, what beats rock? What does rock beat?
3. Your friend always waits a moment and makes their shape after you. Is that fair?
4. To choose between two people, Lily says, "Heads, I win. Tails, you lose." Is that fair? (Think carefully!)
5. Five friends draw straws to choose one person. How many short straws do they need? How many long ones?
6. Is "the tallest goes first" a fair way to choose? Why or why not?
7. Leo does a counting rhyme with 4 words ("eeny, meeny, miny, moe") for two children, Leo and Max. Leo starts at
   himself. Who is chosen?
8. Think of a fair way for two people to share the last cookie. (There is a famous one in the answers.)

??? note "Answers"
    1. **Yes.** Heads and tails are equally likely, and nobody can control a coin that spins many times in the air.
    2. **Paper** beats rock (it wraps it). Rock beats **scissors** (it smashes them).
    3. **No.** If they see your shape first, they can always pick the shape that beats it. Both people must make their
       shape at the same time.
    4. **No, it is a trick!** "Heads, I win" means Lily wins. "Tails, you lose" means you lose, so Lily wins again.
       Lily wins both ways, and you have no way to win at all.
    5. **1 short straw** (one person is chosen) and **4 long straws**: 5 straws in all, one for each friend.
    6. **No.** The tallest person would go first every time. The others would never get a chance.
    7. Count: Leo (eeny), Max (meeny), Leo (miny), Max (moe). **Max** is chosen. With 2 children and 4 words, the last
       word always lands on the person you did **not** start with, so Leo could choose who wins by where he starts.
       Not fair.
    8. A famous fair way: **one person cuts, the other chooses.** The cutter tries hard to cut the cookie into two
       equal halves, because the other person will take the bigger piece if there is one. And the chooser gets to pick,
       so they cannot complain. (You could also flip a coin to see who gets it all, but cutting and choosing means
       everybody gets some.)

## Common mistake

**Thinking anything that feels like luck is fair.** Counting rhymes, "guess my number" when the number is not written
down, and lazy coin flips all feel like luck. But if one person can control the result, it is not fair. Ask: "Could
anybody make this come out their way?"

**Thinking it matters whether you pick first or last when drawing straws.** It does not. The short straw is equally
likely to be in any place, whoever picks first.

## Where it leads

- Previous lesson: [More likely and less likely](02-more-or-less-likely.md) · Next lesson: [Spinners](04-spinners.md).
- This level: [Level 1: Maybe, sure or never](index.md). The whole topic: [Probability](../index.md).
- Sharing fairly, so that everyone gets the same amount: [Dividing as fair sharing](../../numbers/level-2/05-fair-sharing.md).
- Fair games, and how to fix an unfair one: [Fair games](../level-2/02-fair-games.md) in level 2.
- Rock, paper, scissors is a real puzzle in the math of games, where people study the best way to play when the other
  player is thinking too. You will meet games like it in [Logic](../../logic/index.md).
