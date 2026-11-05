---
title: "Fair games"
---

# Fair games

*Probability · level 2, lesson 2 of 6*

## A question to start

Three friends play a game with two coins. They flip both coins together.

- **Ana** wins if both coins land **heads**.
- **Ben** wins if both coins land **tails**.
- **Cal** wins if the coins land **one of each**.

There are three players and three results, one for each. That sounds perfectly fair. Is it?

Play it 20 times and keep a tally. Most of the time, Cal wins far more often than Ana or Ben. Something is hiding in
"one of each". This lesson shows you how to find it, how to tell whether **any** game is fair, and how to fix a game
that is not.

## The idea

### What makes a game fair

A game of chance is **fair** when every player has the **same chance of winning**. Not the same luck on one day, but
the same chance every time the game is played.

To check, you need a careful method. Here it is.

1. **List every way** the game can turn out, in pieces that are all **equally likely**.
2. **Count** the ways that make each player win.
3. If every player has the **same number of ways**, the game is fair. If not, it is unfair, and the player with the
   most ways has the best chance.

The hard part is step 1. The pieces must be equally likely. That is where the coin game went wrong.

### The coin game, done properly

Give the coins names, say a **first** coin and a **second** coin, so you can tell them apart. (Even if they look the
same, they are still two different coins.) Now list every way they can land:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 115" role="img" aria-label="Four ways two coins can land: heads heads for Ana, heads tails and tails heads for Cal, tails tails for Ben">
  <g stroke="currentColor" stroke-width="1.5">
    <circle cx="35" cy="45" r="20" fill="#eea66f"/><circle cx="80" cy="45" r="20" fill="#eea66f"/>
    <circle cx="140" cy="45" r="20" fill="#eea66f"/><circle cx="185" cy="45" r="20" fill="#9cc9ea"/>
    <circle cx="245" cy="45" r="20" fill="#9cc9ea"/><circle cx="290" cy="45" r="20" fill="#eea66f"/>
    <circle cx="350" cy="45" r="20" fill="#9cc9ea"/><circle cx="395" cy="45" r="20" fill="#9cc9ea"/>
  </g>
  <g font-size="15" fill="currentColor" text-anchor="middle">
    <text x="35" y="50">H</text><text x="80" y="50">H</text><text x="140" y="50">H</text><text x="185" y="50">T</text>
    <text x="245" y="50">T</text><text x="290" y="50">H</text><text x="350" y="50">T</text><text x="395" y="50">T</text>
  </g>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="57" y="92">Ana</text><text x="162" y="92">Cal</text><text x="267" y="92">Cal</text><text x="372" y="92">Ben</text>
  </g>
  <g font-size="11" fill="currentColor" text-anchor="middle">
    <text x="57" y="108">first H, second H</text><text x="162" y="108">first H, second T</text><text x="267" y="108">first T, second H</text><text x="372" y="108">first T, second T</text>
  </g>
</svg>
</div>

The first coin has 2 ways to land, and for each of them the second coin has 2 ways. That makes 4 ways, and each one
is equally likely. Now count.

- Ana: 1 way (H H).
- Ben: 1 way (T T).
- Cal: **2 ways** (H T and T H).

Cal has twice as many ways as Ana, and twice as many as Ben. **The game is not fair.** Out of every 4 games, roughly,
Cal wins 2, Ana wins 1 and Ben wins 1.

The trap was that "one of each" is really **two** different results that happen to look alike: heads on the first
coin and tails on the second, or the other way round. Naming the coins shows them both.

### A fair game with a die

Here is a game with one die. Player A wins if it shows 1, 2 or 3. Player B wins if it shows 4, 5 or 6.

1. The 6 faces are equally likely (a die is a cube, the same all round).
2. A has 3 ways. B has 3 ways.
3. Same number: **fair**.

Fair does not mean the result will be even. A and B might play 10 games and A might win 7 of them. That is luck. Fair
means that the **chance** is the same, so over a great many games their wins come out close.

### An unfair game, and three ways to fix it

Now change the game: A wins on 1, 2, 3 or 4, and B wins on 5 or 6.

A has 4 ways and B has 2. A has **twice** as many ways. Unfair. How can we fix it? There is more than one way, and
each one teaches something.

**Fix 1: share out the faces.** Give each player 3 faces. A wins on 1, 2, 3; B wins on 4, 5, 6. Simple, and fair.

**Fix 2: roll again.** Keep A on 1 and 2, and B on 5 and 6. If the die shows 3 or 4, nobody wins: **roll again**. Now
the only faces that decide the game are 1, 2, 5 and 6, and A and B have 2 each. Fair! "Roll again" is a handy trick:
throwing away some ways can even things up.

**Fix 3: give more points to the rarer win.** Keep the unfair faces (A on 1 to 4, B on 5 or 6), but when B wins,
B scores **2 points**, and when A wins, A scores 1 point. Why does that work? Picture 6 rolls where each face comes up
once, the most typical way things go.

- A wins 4 times, 1 point each: **4 points**.
- B wins 2 times, 2 points each: **4 points**.

The points come out equal. B wins less often, but each win is worth more, and it balances. Over many games, both
players collect points at the same speed. This idea, balancing **how often** against **how much**, is one of the most
important ideas in all of probability. Grown-ups call it the **expected value**, and you will meet it properly in
[level 7](../level-7/index.md).

### A two-dice game: odd or even total

Roll two dice and add them. A wins if the total is **odd**; B wins if it is **even**. Fair?

Imagine one die is orange and one is blue, so you can tell them apart. The orange die has 6 ways, and for each of them
the blue die has 6 ways. That makes 6 rows of 6: **36 ways**, all equally likely. Here are all the totals. Orange die
down the side, blue die along the top.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 430 220" role="img" aria-label="A six by six table of all 36 totals of two dice. Odd totals are coloured orange and even totals blue. They make a checkerboard with 18 of each.">
  <g stroke="currentColor" stroke-width="1"><rect x="50" y="30" width="36" height="30" fill="#9cc9ea"/><rect x="86" y="30" width="36" height="30" fill="#eea66f"/><rect x="122" y="30" width="36" height="30" fill="#9cc9ea"/><rect x="158" y="30" width="36" height="30" fill="#eea66f"/><rect x="194" y="30" width="36" height="30" fill="#9cc9ea"/><rect x="230" y="30" width="36" height="30" fill="#eea66f"/><rect x="50" y="60" width="36" height="30" fill="#eea66f"/><rect x="86" y="60" width="36" height="30" fill="#9cc9ea"/><rect x="122" y="60" width="36" height="30" fill="#eea66f"/><rect x="158" y="60" width="36" height="30" fill="#9cc9ea"/><rect x="194" y="60" width="36" height="30" fill="#eea66f"/><rect x="230" y="60" width="36" height="30" fill="#9cc9ea"/><rect x="50" y="90" width="36" height="30" fill="#9cc9ea"/><rect x="86" y="90" width="36" height="30" fill="#eea66f"/><rect x="122" y="90" width="36" height="30" fill="#9cc9ea"/><rect x="158" y="90" width="36" height="30" fill="#eea66f"/><rect x="194" y="90" width="36" height="30" fill="#9cc9ea"/><rect x="230" y="90" width="36" height="30" fill="#eea66f"/><rect x="50" y="120" width="36" height="30" fill="#eea66f"/><rect x="86" y="120" width="36" height="30" fill="#9cc9ea"/><rect x="122" y="120" width="36" height="30" fill="#eea66f"/><rect x="158" y="120" width="36" height="30" fill="#9cc9ea"/><rect x="194" y="120" width="36" height="30" fill="#eea66f"/><rect x="230" y="120" width="36" height="30" fill="#9cc9ea"/><rect x="50" y="150" width="36" height="30" fill="#9cc9ea"/><rect x="86" y="150" width="36" height="30" fill="#eea66f"/><rect x="122" y="150" width="36" height="30" fill="#9cc9ea"/><rect x="158" y="150" width="36" height="30" fill="#eea66f"/><rect x="194" y="150" width="36" height="30" fill="#9cc9ea"/><rect x="230" y="150" width="36" height="30" fill="#eea66f"/><rect x="50" y="180" width="36" height="30" fill="#eea66f"/><rect x="86" y="180" width="36" height="30" fill="#9cc9ea"/><rect x="122" y="180" width="36" height="30" fill="#eea66f"/><rect x="158" y="180" width="36" height="30" fill="#9cc9ea"/><rect x="194" y="180" width="36" height="30" fill="#eea66f"/><rect x="230" y="180" width="36" height="30" fill="#9cc9ea"/></g>
  <g font-size="13" fill="currentColor" text-anchor="middle"><text x="68" y="50">2</text><text x="104" y="50">3</text><text x="140" y="50">4</text><text x="176" y="50">5</text><text x="212" y="50">6</text><text x="248" y="50">7</text><text x="68" y="80">3</text><text x="104" y="80">4</text><text x="140" y="80">5</text><text x="176" y="80">6</text><text x="212" y="80">7</text><text x="248" y="80">8</text><text x="68" y="110">4</text><text x="104" y="110">5</text><text x="140" y="110">6</text><text x="176" y="110">7</text><text x="212" y="110">8</text><text x="248" y="110">9</text><text x="68" y="140">5</text><text x="104" y="140">6</text><text x="140" y="140">7</text><text x="176" y="140">8</text><text x="212" y="140">9</text><text x="248" y="140">10</text><text x="68" y="170">6</text><text x="104" y="170">7</text><text x="140" y="170">8</text><text x="176" y="170">9</text><text x="212" y="170">10</text><text x="248" y="170">11</text><text x="68" y="200">7</text><text x="104" y="200">8</text><text x="140" y="200">9</text><text x="176" y="200">10</text><text x="212" y="200">11</text><text x="248" y="200">12</text></g>
  <g font-size="13" font-weight="bold" fill="currentColor" text-anchor="middle"><text x="68" y="22">1</text><text x="104" y="22">2</text><text x="140" y="22">3</text><text x="176" y="22">4</text><text x="212" y="22">5</text><text x="248" y="22">6</text><text x="38" y="50">1</text><text x="38" y="80">2</text><text x="38" y="110">3</text><text x="38" y="140">4</text><text x="38" y="170">5</text><text x="38" y="200">6</text></g>
  <rect x="300" y="70" width="20" height="20" fill="#eea66f" stroke="currentColor"/><rect x="300" y="110" width="20" height="20" fill="#9cc9ea" stroke="currentColor"/>
  <g font-size="13" fill="currentColor"><text x="328" y="85">odd: 18 ways</text><text x="328" y="125">even: 18 ways</text></g>
</svg>
</div>

The colours make a **checkerboard**. Why? Each time you move one square to the right, the blue die goes up by 1, so
the total goes up by 1, and odd and even swap. The same happens going down. So the colours take turns in every row
and every column.

Every row has 3 orange and 3 blue squares, and there are 6 rows. So odd has 6 × 3 = 18 ways and even has 18 ways.
**Fair.**

### A two-dice game that is not fair

Now: A wins if the dice show a **double** (both the same number). B wins otherwise. The doubles run down the
diagonal of the table: 1 and 1, 2 and 2, up to 6 and 6. That is **6 ways** for A and 36 − 6 = **30 ways** for B.

Very unfair to A: B has 5 times as many ways. To fix it with points, A would need 5 points for every win.

<figure class="play" data-play="spinner" data-parts="red:1,blue:1"><span class="ai-tag">AI-created</span><figcaption><b>Is this spinner fair?</b> Two equal halves: spin many times and both should get about half.</figcaption></figure>

## Worked examples

**Example 1. Is it fair?**

A spinner has 4 equal parts: orange, orange, blue, green. Ana wins on orange, Ben on blue, Cal on green.

1. Four equal parts, so 4 equally likely ways.
2. Ana: 2 ways. Ben: 1 way. Cal: 1 way.
3. **Not fair.** Ana has twice as many ways as each of the others.
4. Fix: give Ana only one of the orange parts, and say the other orange part means "spin again". Then each player has
   1 way. Fair.

**Example 2. Fixing with points.**

A die game: Kim wins on 1, 2, 3, 4 or 5. Lee wins only on 6. How many points should Lee get per win to make it fair,
if Kim gets 1 point per win?

1. Kim has 5 ways, Lee has 1 way.
2. In 6 typical rolls, Kim wins about 5 times: 5 points.
3. Lee wins about once. To match 5 points, Lee needs **5 points** for a win.

**Example 3. The trap again.**

Two children flip two coins. Mo wins if there is **at least one** head. Nia wins if there are **no** heads. Mo says,
"That's fair, it's one result each." Is it?

1. List the 4 equal ways: H H, H T, T H, T T.
2. At least one head: H H, H T, T H. That is 3 ways for Mo.
3. No heads: T T. That is 1 way for Nia.
4. **Not fair**: 3 ways to 1. Naming the two results "at least one head" and "no heads" hid how many ways each one
   has.

## Try it

1. A wins on an odd number on one die, B wins on an even number. Fair?
2. A wins if a die shows 1 or 2. B wins if it shows 3, 4, 5 or 6. Fair? If not, fix it in two different ways.
3. Two coins: Jo wins if they **match** (both heads or both tails), Max wins if they are **different**. Fair?
4. A spinner has 6 equal parts: 3 orange, 2 blue, 1 green. Three players have one colour each. Is it fair? Who has
   the best chance?
5. Two dice: A wins if the total is 7, B wins if the total is 2. Use the table: is it fair?
6. In the unfair die game where A wins on 1, 2, 3, 4 and B wins on 5, 6, A says, "Let's make it fair: I'll win on
   1, 2, 3 and 4, and you win on 5, 6 **and** if it shows a 4 twice in a row." Does that help? Explain simply.
7. Make up a fair game for **three** players using one die.

??? note "Answers"
    1. **Fair.** Odd: 1, 3, 5 (3 ways). Even: 2, 4, 6 (3 ways).
    2. **Not fair**: 2 ways against 4. Fix 1: A wins on 1, 2, 3 and B on 4, 5, 6. Fix 2: B wins only on 5 or 6,
       and on 3 or 4 you roll again; then each has 2 ways. (Or Fix 3: A scores 2 points per win, B scores 1.)
    3. **Fair.** The 4 ways are H H, H T, T H, T T. Match: H H and T T (2 ways). Different: H T and T H (2 ways).
    4. **Not fair.** Orange has 3 ways, blue 2, green 1. Orange has the best chance.
    5. **Not fair.** Total 7 appears 6 times in the table (1 and 6, 2 and 5, 3 and 4, 4 and 3, 5 and 2, 6 and 1).
       Total 2 appears once (1 and 1). And on any other total, nobody wins, so you roll again.
    6. **It does not fix it.** A still wins on every roll of 4, so the "4 twice in a row" rule is never reached: the
       first 4 already gives A the win. A still has 4 ways and B still has 2. Be careful with rules that sound
       generous!
    7. One fair game: Player 1 wins on 1 or 2, Player 2 on 3 or 4, Player 3 on 5 or 6. Each has 2 ways out of 6.

## Common mistake

**Counting results instead of ways.** "Two heads, two tails, or one of each" is three results, but they are not
equally likely, because "one of each" can happen in two ways. Always name the coins (or dice) and list every way.

**Thinking a fair game means equal wins.** A fair game can still give one player 7 wins out of 10. Fair is about the
chance before you play, not the score after.

## Where it leads

- Previous lesson: [The chance line](01-the-chance-line.md) · Next lesson: [Experiments and tallies](03-experiments-and-tallies.md).
- This level: [Level 2: Fair or unfair?](index.md). The whole topic: [Probability](../index.md).
- Fair ways of choosing who goes first, from level 1: [Taking turns fairly](../level-1/03-taking-turns-fairly.md).
- The 36-square table of two dice is used again in [The dice sum race](04-dice-sum-race.md).
- Listing every way carefully, "6 rows of 6", is multiplying: [Multiplying as equal groups](../../numbers/level-2/04-equal-groups.md),
  and later [Counting](../../counting/index.md).
- Balancing how often against how much becomes the expected value in [level 7](../level-7/index.md).
