---
title: "Winning strategies"
---

# Winning strategies

*Logic and puzzles · level 4, lesson 6 of 6*

## A question to start

Two players share a pile of 10 counters. They take turns. On your turn you must take **1, 2 or 3** counters from the
pile. Whoever takes the **last** counter wins.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 70" role="img" aria-label="A row of ten counters">
  <g stroke="currentColor" stroke-width="1.5" fill="#7ccf9a">
    <circle cx="30" cy="35" r="15"/><circle cx="67" cy="35" r="15"/><circle cx="104" cy="35" r="15"/>
    <circle cx="141" cy="35" r="15"/><circle cx="178" cy="35" r="15"/><circle cx="215" cy="35" r="15"/>
    <circle cx="252" cy="35" r="15"/><circle cx="289" cy="35" r="15"/><circle cx="326" cy="35" r="15"/>
    <circle cx="363" cy="35" r="15"/>
  </g>
</svg>
</div>

You go first. How many should you take? Is there a way to win **every single time**, however clever your opponent is?

There is. Play a few games with a friend (coins or paper clips work well) before reading on, and see if you can spot
it. The winning move is: **take 2**. The reason is a beautiful way of thinking called **working backwards**.

## The idea

### The game

This is a simple form of a game called **Nim**. Nim has many versions (several piles, different rules), and
mathematicians have studied it for over a hundred years. Our version has:

- one pile of counters;
- each turn, take 1, 2 or 3;
- whoever takes the last counter **wins**.

Nothing is hidden and nothing is left to luck: both players see everything, and there are no dice. In a game like
that, one of the two players can always win with perfect play. Our job is to find out which, and how.

### Working backwards from the end

Thinking forwards from 10 counters is hard: there are lots of possible games. So start at the **end**, where the game is
easy, and work back one step at a time.

Call a position **W** (a **winning** position) if the player whose turn it is can force a win, and **L** (a
**losing** position) if, whatever that player does, the other player can force a win.

- **0 counters on your turn:** your opponent just took the last one. You have lost. **0 is L.**
- **1, 2 or 3 counters:** take them all and win. **1, 2, 3 are W.**
- **4 counters:** you must take 1, 2 or 3, which leaves 3, 2 or 1. Each of those is W for your **opponent**: they take
  the rest and win. Every move you have hands them a win. **4 is L.**
- **5 counters:** take 1, leaving 4. Now your opponent is in an L position. **5 is W.**
- **6:** take 2, leaving 4. **W.** **7:** take 3, leaving 4. **W.**
- **8:** you can leave 7, 6 or 5, all W for your opponent. **8 is L.**

Here is the rule we used at every step:

- A position is **W** if there is **at least one** move to an L position.
- A position is **L** if **every** move goes to a W position.

Notice the logic words. W needs "there is a move" (an **or** over the moves); L needs "every move" (an **and**). That
is the same pair as **or** and **and** in [lesson 1](01-statements-letters.md), and the same "at least one" versus "all"
from level 3.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 100" role="img" aria-label="Positions 0 to 16. Multiples of 4 (0, 4, 8, 12, 16) are losing positions L; all others are winning positions W.">
  <g font-size="14" text-anchor="middle" fill="currentColor">
  <rect x="9" y="40" width="22" height="30" rx="4" fill="#eea66f" stroke="currentColor"/>
  <text x="20" y="60">0</text>
  <text x="20" y="90" font-size="12">L</text>
  <rect x="34" y="40" width="22" height="30" rx="4" fill="#9cc9ea" stroke="currentColor"/>
  <text x="45" y="60">1</text>
  <text x="45" y="90" font-size="12">W</text>
  <rect x="59" y="40" width="22" height="30" rx="4" fill="#9cc9ea" stroke="currentColor"/>
  <text x="70" y="60">2</text>
  <text x="70" y="90" font-size="12">W</text>
  <rect x="84" y="40" width="22" height="30" rx="4" fill="#9cc9ea" stroke="currentColor"/>
  <text x="95" y="60">3</text>
  <text x="95" y="90" font-size="12">W</text>
  <rect x="109" y="40" width="22" height="30" rx="4" fill="#eea66f" stroke="currentColor"/>
  <text x="120" y="60">4</text>
  <text x="120" y="90" font-size="12">L</text>
  <rect x="134" y="40" width="22" height="30" rx="4" fill="#9cc9ea" stroke="currentColor"/>
  <text x="145" y="60">5</text>
  <text x="145" y="90" font-size="12">W</text>
  <rect x="159" y="40" width="22" height="30" rx="4" fill="#9cc9ea" stroke="currentColor"/>
  <text x="170" y="60">6</text>
  <text x="170" y="90" font-size="12">W</text>
  <rect x="184" y="40" width="22" height="30" rx="4" fill="#9cc9ea" stroke="currentColor"/>
  <text x="195" y="60">7</text>
  <text x="195" y="90" font-size="12">W</text>
  <rect x="209" y="40" width="22" height="30" rx="4" fill="#eea66f" stroke="currentColor"/>
  <text x="220" y="60">8</text>
  <text x="220" y="90" font-size="12">L</text>
  <rect x="234" y="40" width="22" height="30" rx="4" fill="#9cc9ea" stroke="currentColor"/>
  <text x="245" y="60">9</text>
  <text x="245" y="90" font-size="12">W</text>
  <rect x="259" y="40" width="22" height="30" rx="4" fill="#9cc9ea" stroke="currentColor"/>
  <text x="270" y="60">10</text>
  <text x="270" y="90" font-size="12">W</text>
  <rect x="284" y="40" width="22" height="30" rx="4" fill="#9cc9ea" stroke="currentColor"/>
  <text x="295" y="60">11</text>
  <text x="295" y="90" font-size="12">W</text>
  <rect x="309" y="40" width="22" height="30" rx="4" fill="#eea66f" stroke="currentColor"/>
  <text x="320" y="60">12</text>
  <text x="320" y="90" font-size="12">L</text>
  <rect x="334" y="40" width="22" height="30" rx="4" fill="#9cc9ea" stroke="currentColor"/>
  <text x="345" y="60">13</text>
  <text x="345" y="90" font-size="12">W</text>
  <rect x="359" y="40" width="22" height="30" rx="4" fill="#9cc9ea" stroke="currentColor"/>
  <text x="370" y="60">14</text>
  <text x="370" y="90" font-size="12">W</text>
  <rect x="384" y="40" width="22" height="30" rx="4" fill="#9cc9ea" stroke="currentColor"/>
  <text x="395" y="60">15</text>
  <text x="395" y="90" font-size="12">W</text>
  <rect x="409" y="40" width="22" height="30" rx="4" fill="#eea66f" stroke="currentColor"/>
  <text x="420" y="60">16</text>
  <text x="420" y="90" font-size="12">L</text>
  </g>
  <text x="20" y="25" font-size="12" fill="currentColor">counters left on your turn</text>
</svg>
</div>

The pattern jumps out: the L positions are **0, 4, 8, 12, 16, ...**, the **multiples of 4**.

### The strategy, and why it always works

**Always leave your opponent a multiple of 4.**

From 10, take 2 to leave 8. Now whatever your opponent takes, you take the rest of 4:

| They take | You take | Together |
| --- | --- | --- |
| 1 | 3 | 4 |
| 2 | 2 | 4 |
| 3 | 1 | 4 |

You can always do this, because their 1, 2 or 3 always leaves room for your 3, 2 or 1. After each pair of turns the pile
drops by exactly 4: from 8 to 4, then from 4 to 0. And it is **you** who takes it to 0, so you take the last counter.

Why can your opponent never escape? Because from a multiple of 4, taking 1, 2 or 3 can never land on another multiple
of 4 (multiples of 4 are 4 apart, and they can take at most 3). So they always hand you a non-multiple, and you hand
back a multiple.

### Who wins?

- If the starting pile is **not** a multiple of 4, the **first** player wins: take the remainder after dividing by 4.
  (10 divided by 4 is 2 remainder **2**, so take 2.)
- If the starting pile **is** a multiple of 4, the **second** player wins, by always making each pair of turns add to
  4. The first player can only hope the second makes a mistake.

### Changing the rules

The same backwards thinking works for other rules.

- **Take 1 or 2** (last counter wins): 0 is L, 1 and 2 are W, 3 is L (every move leaves 1 or 2), and so on. The L
  positions are the **multiples of 3**. In general, if you can take from 1 up to $k$, the L positions are the multiples
  of $k + 1$, and each pair of turns can be made to add up to $k + 1$.
- **Last counter loses** (called the **misère** version, from the French for "misery"): now 1 counter on your turn is
  L, since you are forced to take it. Working back: L positions are **1, 5, 9, 13, ...**, one more than a multiple of 4.

## Worked examples

**1. A pile of 23.** You go first, take 1 to 3, last counter wins. What do you take?

$23 = 4 \times 5 + 3$. Take **3**, leaving 20, a multiple of 4. Then always make each pair of turns add to 4: 20, 16,
12, 8, 4, 0.

**2. The game of 21.** Two players count up from 0. On each turn you say the next 1, 2 or 3 numbers. Whoever says
**21** wins. Should you go first?

This is Nim in disguise: "numbers still to say" is the pile, starting at 21. You win by leaving a multiple of 4 still to
say, which means saying the numbers $21 - 4 = 17$, then 13, 9, 5 and 1. So go **first** and say just "1". Then whatever
your opponent says, finish on 5, then 9, 13, 17 and 21.

**3. A stranger set of moves.** Now you may take **1, 3 or 4** counters, and the last counter wins. Which positions up
to 10 are L? Work backwards, one at a time.

| Counters | Moves go to | Any move to L? | Position |
| --- | --- | --- | --- |
| 0 | | | L |
| 1 | 0 | yes (0) | W |
| 2 | 1 | no (1 is W) | **L** |
| 3 | 2, 0 | yes | W |
| 4 | 3, 1, 0 | yes (0) | W |
| 5 | 4, 2, 1 | yes (2) | W |
| 6 | 5, 3, 2 | yes (2) | W |
| 7 | 6, 4, 3 | no | **L** |
| 8 | 7, 5, 4 | yes (7) | W |
| 9 | 8, 6, 5 | no | **L** |
| 10 | 9, 7, 6 | yes (9 or 7) | W |

The L positions are 0, 2, 7, 9. (If you keep going, they are 14, 16, 21, 23, ...: the pattern repeats every 7.) There
is no simple "add up to a fixed number" trick here, but working backwards still finds every answer.

## Try it

1. In our game (take 1 to 3, last wins), is 12 a W or L position? What about 13? What should you take from 13?
2. You go first with a pile of 17. What is your first move? Then your opponent takes 2. What do you take?
3. Your friend offers to let you choose: go first or second, with a pile of 20. Which do you choose, and why?
4. In the game where you may take 1 or 2 (last wins), you go first with 11 counters. What should you take?
5. Rules: take 1 to 5, last counter wins. Which positions are L? What do you take from a pile of 20?
6. Misère version (take 1 to 3, the player who takes the last counter **loses**). You go first with 10 counters. What
   should you take?
7. In the game of 21, change the rules so you may say 1 or 2 numbers each turn, and whoever says 20 wins. Should you go
   first? What numbers do you aim to say?
8. Explain in your own words why, with the "take 1 to 3" rules, a player facing a multiple of 4 can never move to
   another multiple of 4.

??? note "Answers"
    1. 12 is a multiple of 4: **L**. 13 is **W**: take **1** to leave 12.
    2. $17 = 4 \times 4 + 1$, so take **1**, leaving 16. Your opponent takes 2, leaving 14; you take **2** (so the pair
       adds to 4), leaving 12.
    3. **Go second.** 20 is a multiple of 4, an L position for whoever moves first. As second player, answer every move
       so the pair adds to 4: 16, 12, 8, 4, 0.
    4. With "take 1 or 2", L positions are multiples of 3. $11 = 3 \times 3 + 2$, so take **2**, leaving 9. Then make
       each pair of turns add to 3.
    5. Each pair can be made to add to 6, so L positions are the **multiples of 6**: 0, 6, 12, 18, ... From 20, take
       **2** to leave 18.
    6. In misère, L positions are 1, 5, 9, 13, ... (one more than a multiple of 4). Leave your opponent 9: take **1**.
       Then make each pair add to 4: 9, 5, 1, and your opponent is forced to take the last one.
    7. "Numbers still to say" starts at 20, and with 1 or 2 per turn, you want to leave a multiple of 3. $20 = 3 \times
       6 + 2$, so go **first** and say "1, 2". Then aim to finish each turn on 5, 8, 11, 14, 17 and 20 (each leaves a
       multiple of 3 still to say: 15, 12, 9, 6, 3, 0).
    8. Multiples of 4 are 4 apart (0, 4, 8, ...). From one of them, taking 1, 2 or 3 lands strictly between it and the
       next multiple down. To land on another multiple of 4 you would have to take 4 or more, which is not allowed.

## Common mistake

**Thinking forwards only.** Trying to imagine every game from 10 counters gets lost fast. Start from the end (0
counters), label each position W or L, and the pattern appears by itself.

**Mixing up W and L.** A position is labelled from the point of view of the player **about to move**. You want to
**leave** your opponent an L position, not be in one. "Leave a multiple of 4" means the pile is a multiple of 4 **after**
your move.

## Where it leads

- Back: [Coding with conditions](05-coding-conditions.md) · Next: [Level 5: sets and arguments](../level-5/index.md).
- [Level 4 page](index.md) · [Logic topic page](../index.md)
- Remainders after dividing by 4 decide the game: [Number theory](../../number-theory/index.md). The repeating L
  pattern is a sequence with a rule: [Patterns](../../patterns/index.md).
- "W if **there is** a move to L; L if **every** move goes to W" is an early taste of the quantifiers "there exists"
  and "for all" in [level 5](../level-5/index.md).
- Games like Nim, where both players see everything and nothing is left to luck, are studied in a part of mathematics
  called **combinatorial game theory**. Nim with several piles has a famous winning rule that uses binary numbers.
