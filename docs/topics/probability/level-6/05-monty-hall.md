---
title: "The Monty Hall problem"
---

# The Monty Hall problem

*Probability · level 6, lesson 5 of 6*

## A question to start

You are on a game show. In front of you are three closed doors. Behind one is a car; behind the other two are goats.
You pick a door, say door 1. The host, who **knows** where the car is, opens a different door, say door 3, and shows
you a goat. Then he asks: "Do you want to stay with door 1, or switch to door 2?"

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 170" role="img" aria-label="Three doors. Door 1 is closed and marked as your pick. Door 2 is closed with a question mark. Door 3 is open and shows a goat.">
  <rect x="30" y="30" width="90" height="120" rx="4" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <rect x="155" y="30" width="90" height="120" rx="4" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <rect x="280" y="30" width="90" height="120" rx="4" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="108" cy="92" r="4" fill="currentColor"/><circle cx="233" cy="92" r="4" fill="currentColor"/>
  <g font-size="14" fill="currentColor" text-anchor="middle">
    <text x="75" y="22">door 1</text><text x="200" y="22">door 2</text><text x="325" y="22">door 3</text>
    <text x="75" y="166">your pick</text><text x="200" y="100" font-size="30">?</text>
    <text x="325" y="96">goat</text><text x="325" y="166">opened by host</text>
  </g>
  <rect x="45" y="70" width="60" height="40" rx="6" fill="#eea66f" stroke="currentColor"/>
  <text x="75" y="95" font-size="13" text-anchor="middle" fill="currentColor">picked</text>
</svg>
</div>

Most people say: "Two doors are left, so it is 50-50. Switching makes no difference."

In fact, **switching wins the car 2 times out of 3**. Staying wins only 1 time in 3. When this puzzle appeared in
Marilyn vos Savant's "Ask Marilyn" magazine column in 1990 and she gave the answer "switch", she received thousands of
letters telling her she was wrong, many of them from people with doctorates in mathematics. She was right. This lesson
shows three ways to see why, and then the exact conditional probability.

## The idea

### The rules matter

The answer depends on exactly how the host behaves. In the standard version:

1. The car is placed behind one of the three doors at random.
2. You pick a door.
3. The host **always** opens one of the **other two** doors, and it is **always a goat** (he knows where the car is).
4. If both other doors hide goats, he picks which one to open at random.
5. He **always** offers you the switch.

The puzzle is named after Monty Hall, the host of the American TV game show *Let's Make a Deal*. (The real show did
not follow these exact rules; the puzzle is an idealised version.)

### Way 1: list the cases

You pick door 1. The car is equally likely to be behind door 1, 2 or 3.

| Car is behind | Chance | Host opens | Stay with door 1 | Switch |
| --- | --- | --- | --- | --- |
| Door 1 | $\tfrac13$ | door 2 or door 3 | **win** | lose |
| Door 2 | $\tfrac13$ | door 3 (must) | lose | **win** |
| Door 3 | $\tfrac13$ | door 2 (must) | lose | **win** |

Staying wins in one row; switching wins in two. So $P(\text{win by staying}) = \tfrac13$ and
$P(\text{win by switching}) = \tfrac23$.

Here is the whole idea in one sentence: **switching wins exactly when your first pick was wrong**, and your first pick
is wrong 2 times out of 3. When you picked wrong, the host is forced to show you the other goat, and the car is
behind the door he left closed.

### Way 2: imagine 100 doors

Make the game bigger. There are 100 doors, one car and 99 goats. You pick door 1. The host, who knows where the car is,
opens **98** of the other doors, all goats, leaving closed only your door and door 74.

Would you stay with your door? You picked it at random from 100, so it hides the car with chance $\tfrac{1}{100}$. The
host had to avoid the car among the 99 other doors, and door 74 is the one he carefully did not open. Switching wins
whenever your first pick was wrong: $\tfrac{99}{100}$. With 100 doors it is obvious that "two doors left" does not mean
"50-50". Three doors is the same idea, only less dramatic.

### Way 3: simulate it

If you are still not convinced, play it. With a friend as host, use three cups and a coin: the friend hides the coin,
you pick, the friend lifts an empty cup, and you always switch. Play 30 or more times and count your wins. Or roll a die
to place the car (1 or 2: door 1; 3 or 4: door 2; 5 or 6: door 3).

A computer can play thousands of games in a moment. In one run of 1000 games, a computer playing the standard rules
found that staying won 326 times and switching won 674 times: close to $\tfrac13$ and $\tfrac23$, just as the law of
large numbers predicts. The story goes that the great mathematician Paul Erdős refused to believe the answer until he
was shown a computer simulation.

### Why "50-50" is wrong

"Two doors, one car, so each has chance $\tfrac12$" assumes the two closed doors are **equally likely**. They are not,
because the host's choice was **not random**: he was forced to avoid the car. His action gives you information about
door 2 (he could have opened it and did not), but no information about door 1 (he was never allowed to open your door
anyway). So door 1 keeps its $\tfrac13$, and door 2 takes the rest.

### The exact calculation: conditional probability

You picked door 1 and saw the host open door 3. We want $P(\text{car behind 2} \mid \text{host opens 3})$. Draw a tree:
first where the car is, then which door the host opens.

- Car behind 1 ($\tfrac13$): host opens 2 or 3 at random, each $\tfrac12$. So "car 1, opens 3" has chance $\tfrac13 \times \tfrac12 = \tfrac16$.
- Car behind 2 ($\tfrac13$): host must open 3. "Car 2, opens 3" has chance $\tfrac13 \times 1 = \tfrac13$.
- Car behind 3 ($\tfrac13$): host must open 2, never 3. "Car 3, opens 3" has chance 0.

So $P(\text{host opens 3}) = \tfrac16 + \tfrac13 + 0 = \tfrac12$, and

$$P(\text{car behind 2} \mid \text{host opens 3}) = \frac{P(\text{car 2 and opens 3})}{P(\text{opens 3})} = \frac{1/3}{1/2} = \frac23.$$

$$P(\text{car behind 1} \mid \text{host opens 3}) = \frac{1/6}{1/2} = \frac13.$$

Exactly the answer from the table, now by the formula of [lesson 1](01-given-two-way-tables.md). Reasoning backwards
along a tree like this is a first taste of Bayes' theorem ([level 8](../level-8/index.md)).

<figure class="play" data-play="monty"><span class="ai-tag">AI-created</span><figcaption><b>Play it.</b> Then play 1,000 games each way: switching wins about two times in three.</figcaption></figure>

## Worked examples

**1. Changing the rules: the forgetful host.** Suppose the host does **not** know where the car is. He opens one of
the other two doors at random, and it **happens** to show a goat. Should you switch now?

Tree again, you picked door 1, and he opens door 3 at random:

- Car 1: he opens 3 with chance $\tfrac12$, goat. Chance $\tfrac13 \times \tfrac12 = \tfrac16$.
- Car 2: he opens 3 with chance $\tfrac12$, goat. Chance $\tfrac13 \times \tfrac12 = \tfrac16$.
- Car 3: he opens 3 with chance $\tfrac12$, but that shows the **car**, not a goat. Not what we saw.

Given "door 3 opened and showed a goat", the two possible cases each have chance $\tfrac16$, so each door is
$\tfrac12$. **Now** it really is 50-50. The difference is that this host might have revealed the car and did not by
luck; the knowing host could never reveal it. Same doors, same goat, different rules, different answer.

**2. Four doors.** There are 4 doors and one car. You pick one. The knowing host opens **one** of the other three, a
goat, and offers you a switch to one of the two remaining closed doors (you pick one of them at random). Is switching
better?

- Stay: you win if your first pick was right, $\tfrac14$.
- Switch: your first pick was wrong with chance $\tfrac34$. Then the car is behind one of the 2 other closed doors,
  and you pick the right one with chance $\tfrac12$. So $\tfrac34 \times \tfrac12 = \tfrac38$.

$\tfrac38 = 0.375$ beats $\tfrac14 = 0.25$, so switch.

**3. A similar puzzle: three cards.** A hat holds three cards. One is red on both sides, one is white on both sides,
and one is red on one side and white on the other. You pull out a card and see a red side. What is the chance the
other side is red too?

It is tempting to say $\tfrac12$ ("it is the red-red card or the red-white card"). But count **red faces**, which are
equally likely to be the one you see: there are 3 red faces, and 2 of them belong to the red-red card. So the answer
is $\tfrac23$. Like Monty Hall, the two "remaining possibilities" are not equally likely.

## Try it

1. In the standard game, a player decides to **always stay**. In the long run, what fraction of games do they win?
2. In the 100-door game, what is the chance of winning by switching? By staying?
3. Five doors, one car. You pick one; the knowing host opens 3 of the other 4, all goats, and offers you the last one.
   What is the chance that switching wins?
4. A computer plays the standard game 3000 times, always switching. About how many cars should it win?
5. In the forgetful-host version (example 1), what is the chance that the host accidentally reveals the car?
6. A different host only offers a switch **when your first pick is the car**. Should you switch if he offers?
7. In the three-card puzzle, you see a white side. What is the chance the other side is white?
8. Explain to a friend, in two sentences, why switching wins 2 times out of 3 in the standard game.

??? note "Answers"
    1. $\dfrac13$: staying wins only when the first pick was the car.
    2. Switching: $\dfrac{99}{100}$. Staying: $\dfrac{1}{100}$.
    3. Switching wins when the first pick was wrong: $\dfrac45$.
    4. About $\dfrac23 \times 3000 = 2000$ cars (not exactly; somewhere near 2000).
    5. The host opens one of the two doors you did not pick at random. He reveals the car if the car is behind the
       door he opens. The car is behind one particular unchosen door with chance $\dfrac13$, and he opens that one with
       chance $\dfrac12$; two such doors: $2 \times \dfrac13 \times \dfrac12 = \dfrac13$.
    6. **No**: with this host an offer means your first pick was the car, so switching always loses. The rules of the
       host matter completely.
    7. By the same reasoning, $\dfrac23$: there are 3 white faces and 2 belong to the white-white card.
    8. For example: "Your first pick is wrong 2 times out of 3. When it is wrong, the host has to open the other goat,
       so the door he leaves shut has the car, and switching wins."

## Common mistake

**"Two options left, so 50-50."** Two possibilities are equally likely only if something makes them so (like a fair
coin). Here the host's forced choice makes them unequal. Always ask how the information was produced.

**Ignoring the rules.** The answer $\tfrac23$ needs the host to know where the car is, always open a goat door and
always offer the switch. Change any of these and the answer can change (worked example 1, Try it question 6).

## Where it leads

- Back: [The birthday problem](04-birthday-problem.md) · Next: [Geometric probability](06-geometric-probability.md).
- [Level 6 page](index.md) · [Probability topic page](../index.md)
- Updating chances when new information arrives, in general, is Bayes' theorem in [level 8](../level-8/index.md).
- Simulation as a way of checking a surprising answer: Monte Carlo methods, also in [level 8](../level-8/index.md).
- Careful statements of exactly what is assumed are the heart of [Logic](../../logic/index.md).
