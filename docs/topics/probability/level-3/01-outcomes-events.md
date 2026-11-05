---
title: "Outcomes and events"
---

# Outcomes and events

*Probability · level 3, lesson 1 of 6*

## A question to start

Your friend picks up a die and says:

"When I roll this, only two things can happen. Either I get a 6, or I don't. Two things, so the chance of a 6 is one
half!"

Something is wrong here, and you probably feel it already: a 6 does not come up every second roll. But what exactly is
wrong? Your friend counted two things, and there really are two: "6" and "not 6". So where is the mistake?

By the end of this lesson you will be able to say exactly what went wrong. The answer is about the difference between
an **outcome** and an **event**, two words that every probability question is built on.

## The idea

### Experiments

In probability, an **experiment** is anything you do where you cannot be sure, before you do it, how it will turn out.

- Tossing a coin.
- Rolling a die. ("Die" is the word for one dice. Two or more are "dice".)
- Spinning a spinner.
- Pulling a marble out of a bag without looking.
- Picking a card from a shuffled pack.

It does not have to be a game. Checking tomorrow's weather, or seeing which bus comes first, is an experiment too.

### Outcomes and the sample space

An **outcome** is one possible way the experiment can turn out. When you roll a die, "a 4" is an outcome.

The **sample space** is the list of **every** possible outcome, with nothing missed out and nothing written twice.
Mathematicians often write the list inside curly brackets:

- a coin: $\{H, T\}$ (H for heads, T for tails);
- a die: $\{1, 2, 3, 4, 5, 6\}$;
- a spinner with red, yellow and green parts: $\{\text{red}, \text{yellow}, \text{green}\}$.

Two rules for a good sample space:

1. **Every** possible result is on the list. When the experiment is done, the result must be one of them.
2. **Exactly one** outcome happens each time. A die cannot show 2 and 5 at once, so the outcomes never overlap.

Think of the sample space as a box holding all the outcomes. Each time you do the experiment, exactly one of them
jumps out.

### Events: groups of outcomes

Often we care about something bigger than a single outcome: "I roll an even number", "I roll more than 4", "the marble
is not red". An **event** is a group of outcomes taken from the sample space.

The event "even number" is the group $\{2, 4, 6\}$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 470 190" role="img" aria-label="A box holding all six faces of a die; the faces 2, 4 and 6 sit together inside a dashed loop, which is the event even">
  <rect x="10" y="10" width="300" height="170" rx="18" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="160" y="30" font-size="12" text-anchor="middle" fill="currentColor">sample space: every face of the die</text>
  <rect x="40" y="42" width="240" height="66" rx="30" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/>
  <rect x="70" y="50" width="50" height="50" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="83.5" cy="63.5" r="4.0" fill="currentColor"/>
  <circle cx="106.5" cy="86.5" r="4.0" fill="currentColor"/>
  <rect x="140" y="50" width="50" height="50" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="153.5" cy="63.5" r="4.0" fill="currentColor"/>
  <circle cx="176.5" cy="63.5" r="4.0" fill="currentColor"/>
  <circle cx="153.5" cy="86.5" r="4.0" fill="currentColor"/>
  <circle cx="176.5" cy="86.5" r="4.0" fill="currentColor"/>
  <rect x="210" y="50" width="50" height="50" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="223.5" cy="63.5" r="4.0" fill="currentColor"/>
  <circle cx="246.5" cy="63.5" r="4.0" fill="currentColor"/>
  <circle cx="223.5" cy="75.0" r="4.0" fill="currentColor"/>
  <circle cx="246.5" cy="75.0" r="4.0" fill="currentColor"/>
  <circle cx="223.5" cy="86.5" r="4.0" fill="currentColor"/>
  <circle cx="246.5" cy="86.5" r="4.0" fill="currentColor"/>
  <rect x="70" y="118" width="50" height="50" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="95.0" cy="143.0" r="4.0" fill="currentColor"/>
  <rect x="140" y="118" width="50" height="50" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="153.5" cy="131.5" r="4.0" fill="currentColor"/>
  <circle cx="165.0" cy="143.0" r="4.0" fill="currentColor"/>
  <circle cx="176.5" cy="154.5" r="4.0" fill="currentColor"/>
  <rect x="210" y="118" width="50" height="50" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="223.5" cy="131.5" r="4.0" fill="currentColor"/>
  <circle cx="246.5" cy="131.5" r="4.0" fill="currentColor"/>
  <circle cx="235.0" cy="143.0" r="4.0" fill="currentColor"/>
  <circle cx="223.5" cy="154.5" r="4.0" fill="currentColor"/>
  <circle cx="246.5" cy="154.5" r="4.0" fill="currentColor"/>
  <text x="400" y="80" font-size="12" text-anchor="middle" fill="currentColor">the event “even”</text>
  <text x="400" y="96" font-size="12" text-anchor="middle" fill="currentColor">is the group</text>
  <text x="400" y="112" font-size="12" text-anchor="middle" fill="currentColor">inside the dashed loop</text>
  <line x1="335" y1="80" x2="285" y2="76" stroke="currentColor" stroke-width="1.2"/>
</svg>
</div>

We say the event **happens** if the outcome that turns up is one of the outcomes in its group. Roll a 4: the event
"even" happens, because 4 is inside the loop. Roll a 3: it does not.

More events from one die:

| Event in words | Group of outcomes | How many outcomes |
| --- | --- | --- |
| roll a 6 | $\{6\}$ | 1 |
| roll more than 4 | $\{5, 6\}$ | 2 |
| roll an odd number | $\{1, 3, 5\}$ | 3 |
| roll less than 5 | $\{1, 2, 3, 4\}$ | 4 |
| roll a number from 1 to 6 | $\{1, 2, 3, 4, 5, 6\}$ | 6 |
| roll a 7 | (no outcomes at all) | 0 |

Two special events sit at the ends:

- The **certain event** holds every outcome. Whatever happens, it happens.
- The **impossible event** holds no outcomes at all. It can never happen. Rolling a 7 on an ordinary die is
  impossible: no face shows 7.

### Back to the question

Now we can see the friend's mistake. "6" and "not 6" are both **events**, not single outcomes.

- "6" is the group $\{6\}$: **1** outcome.
- "not 6" is the group $\{1, 2, 3, 4, 5\}$: **5** outcomes.

Each face of a fair die is just as likely as any other face. So the event with 5 faces in it is five times as likely to
happen as the event with 1 face. Two events is not the same as two equally likely outcomes. Counting events is like
counting bags without looking at how many marbles are inside each bag.

This is the big idea of the whole level: **count outcomes that are equally likely**, then see how many of them belong
to your event. The next lesson turns that count into a number.

### Listing outcomes carefully: two coins

Listing a sample space sounds easy, but it is where many mistakes start. Toss two coins. What are the outcomes?

A quick answer is "two heads, two tails, or one of each": three outcomes. But imagine the coins are different
colours, one orange and one blue. Then "one of each" can happen in **two different ways**: orange heads with blue
tails, or orange tails with blue heads.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 110" role="img" aria-label="Four outcome cards for two coins, orange then blue: heads heads, heads tails, tails heads, tails tails">
  <rect x="20" y="15" width="90" height="60" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="45" cy="45" r="18" fill="#eea66f"/>
  <circle cx="85" cy="45" r="18" fill="#9cc9ea"/>
  <text x="45" y="50" font-size="15" text-anchor="middle" fill="currentColor">H</text>
  <text x="85" y="50" font-size="15" text-anchor="middle" fill="currentColor">H</text>
  <rect x="125" y="15" width="90" height="60" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="150" cy="45" r="18" fill="#eea66f"/>
  <circle cx="190" cy="45" r="18" fill="#9cc9ea"/>
  <text x="150" y="50" font-size="15" text-anchor="middle" fill="currentColor">H</text>
  <text x="190" y="50" font-size="15" text-anchor="middle" fill="currentColor">T</text>
  <rect x="230" y="15" width="90" height="60" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="255" cy="45" r="18" fill="#eea66f"/>
  <circle cx="295" cy="45" r="18" fill="#9cc9ea"/>
  <text x="255" y="50" font-size="15" text-anchor="middle" fill="currentColor">T</text>
  <text x="295" y="50" font-size="15" text-anchor="middle" fill="currentColor">H</text>
  <rect x="335" y="15" width="90" height="60" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="360" cy="45" r="18" fill="#eea66f"/>
  <circle cx="400" cy="45" r="18" fill="#9cc9ea"/>
  <text x="360" y="50" font-size="15" text-anchor="middle" fill="currentColor">T</text>
  <text x="400" y="50" font-size="15" text-anchor="middle" fill="currentColor">T</text>
  <text x="220" y="100" font-size="12" text-anchor="middle" fill="currentColor">orange coin first, blue coin second: 4 outcomes, not 3</text>
</svg>
</div>

The sample space is $\{HH, HT, TH, TT\}$, where the first letter is the orange coin and the second is the blue coin.
Four outcomes, and (as you will see in level 4) they are all equally likely. The event "one of each" is the group
$\{HT, TH\}$: it holds 2 of the 4 outcomes, twice as many as "two heads".

Real coins do not need to be different colours for this to be true. Two identical pennies still land separately, so
there are still two ways to get one of each. Colouring them in your head just helps you see it.

### A surprise: how many events are there?

A die has 6 outcomes. How many different events can you make from them?

Think about building an event. Go through the outcomes one by one and decide: is this one **in** the group, or
**out**? For outcome 1 you have 2 choices. For outcome 2, another 2 choices, and so on. That makes

$$2 \times 2 \times 2 \times 2 \times 2 \times 2 = 64$$

different events, counting the impossible event (everything out) and the certain event (everything in).

Check the idea on a coin, where it is small enough to list all of them. The outcomes are H and T, so there should be
$2 \times 2 = 4$ events: no outcomes (impossible), $\{H\}$, $\{T\}$, and $\{H, T\}$ (certain). Four. ✓

So a die has only 6 outcomes but 64 events. That is another way to see the friend's mistake: there are many events,
and they are not all equally likely.

<figure class="play" data-play="dice" data-n="1"><span class="ai-tag">AI-created</span><figcaption><b>Six outcomes.</b> The event "an even number" is three of them: 2, 4 and 6.</figcaption></figure>

## Worked examples

**1. A four-colour spinner.** A spinner has four equal parts: red, blue, green and yellow.

- Sample space: $\{\text{red}, \text{blue}, \text{green}, \text{yellow}\}$. 4 outcomes.
- The event "a colour of the sea or the sky" is $\{\text{blue}, \text{green}\}$: 2 outcomes.
- The event "not red" is $\{\text{blue}, \text{green}, \text{yellow}\}$: 3 outcomes.
- The event "purple" holds no outcomes: impossible.

**2. Letter tiles.** The word BANANA is written on 6 tiles, one letter each. The tiles go in a bag and you pull one
out.

There are two sensible sample spaces, and the difference matters.

- If you list **tiles**, think of numbering them: B, A₁, N₁, A₂, N₂, A₃. That is 6 outcomes, and each tile is just
  as likely as any other.
- If you list **letters**, you get $\{B, A, N\}$: only 3 outcomes. But they are not equally likely, because 3 tiles
  say A and only 1 says B.

The event "the letter A" holds **3** of the 6 tiles. The event "B" holds 1 tile. Listing tiles, not letters, shows that
A is three times as likely as B.

**3. Numbers from a bag.** Cards numbered 1 to 10 are in a bag. One is drawn.

- Sample space: $\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$.
- "A multiple of 3": $\{3, 6, 9\}$, 3 outcomes.
- "A number with two digits": $\{10\}$, 1 outcome.
- "A number less than 11": all 10 outcomes. This is the certain event.
- "A multiple of 3 **and** even": the outcomes in both groups, $\{6\}$, 1 outcome.
- "A multiple of 3 **or** even": the outcomes in either group, $\{2, 3, 4, 6, 8, 9, 10\}$, 7 outcomes. Notice 6 is
  in both groups but is written only once.

**4. A coin and a choice of drink.** You toss a coin and also pick milk or juice. Every outcome is a pair, like
"heads and milk". Listing them: H-milk, H-juice, T-milk, T-juice. 4 outcomes. (In level 4 you will see why this is
$2 \times 2$.)

## Try it

1. Write the sample space for: (a) a spinner with parts A, B, C, D, E; (b) the day of the week a birthday falls on.
2. A die is rolled. Write each event as a group of outcomes and count it: (a) "a number less than 3";
   (b) "an odd number greater than 1"; (c) "a number that is not 4".
3. Which of these is an impossible event for one roll of a die, and which is certain? (a) "a number greater than 0";
   (b) "a number greater than 6"; (c) "a 3 or a 4".
4. Cards numbered 1 to 12 are in a bag. List the outcomes in the event "a multiple of 4", and in the event "a
   multiple of 4 or a multiple of 6".
5. Three children, Ali, Bea and Cam, have a race (no ties). One outcome is "Ali first, Bea second, Cam third", or ABC
   for short. List the whole sample space. How many outcomes are in the event "Bea wins"?
6. The word LETTER is on 6 tiles. Which letter is most likely to be picked? Explain using tiles, not letters.
7. A spinner has just 3 outcomes. How many different events can be made from them? List them all.
8. A friend says: "When I spin a spinner with a big red part and a small blue part, there are 2 outcomes, so red and
   blue each have a chance of one half." What is wrong?

??? note "Answers"
    1. (a) $\{A, B, C, D, E\}$. (b) {Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday}: 7 outcomes.
    2. (a) $\{1, 2\}$, 2 outcomes. (b) $\{3, 5\}$, 2 outcomes (1 is odd but not greater than 1).
       (c) $\{1, 2, 3, 5, 6\}$, 5 outcomes.
    3. (a) Certain: every face is greater than 0. (b) Impossible: no face is greater than 6. (c) Neither: it holds 2
       outcomes, $\{3, 4\}$.
    4. Multiples of 4: $\{4, 8, 12\}$. Multiples of 4 or of 6: put the multiples of 6, which are 6 and 12, together
       with 4, 8, 12, writing 12 only once: $\{4, 6, 8, 12\}$.
    5. ABC, ACB, BAC, BCA, CAB, CBA: 6 outcomes. "Bea wins" is $\{BAC, BCA\}$: 2 outcomes.
    6. The tiles are L, E, T, T, E, R. E is on 2 tiles and T is on 2 tiles; L and R are on 1 each. So **E and T are
       equally the most likely**, each on 2 of the 6 tiles.
    7. Each outcome is in or out: $2 \times 2 \times 2 = 8$ events. With outcomes X, Y, Z they are: no outcomes, $\{X\}$,
       $\{Y\}$, $\{Z\}$, $\{X, Y\}$, $\{X, Z\}$, $\{Y, Z\}$, $\{X, Y, Z\}$.
    8. The two outcomes are **not equally likely**: the pointer lands in the big red part more often. Counting
       outcomes only tells you the chance when every outcome is just as likely as every other. (Lesson 6 is all
       about this.)

## Common mistake

**Missing outcomes that look the same.** "Two coins can give two heads, two tails or one of each" forgets that "one
of each" happens in two ways, HT and TH. Give the coins (or dice, or children) names or colours in your head, and list
by name.

**Treating events as outcomes.** "6" and "not 6" are two events, but they hold 1 and 5 outcomes. Always go back to
the single outcomes, the ones that are equally likely, and count those.

## Where it leads

- Next: [Probability as a fraction](02-probability-fraction.md), where "3 outcomes out of 6" becomes the number
  $\tfrac36$.
- [Level 3 page](index.md) · [Probability topic page](../index.md)
- Before this: [Level 2: fair or unfair?](../level-2/index.md), where you met chances in words.
- Counting outcomes without listing them all is the job of [Counting](../../counting/index.md): the 64 events of a die
  and the 6 race orders are both counting puzzles.
- Groups of outcomes, "and" and "or", are the start of set language used everywhere in maths: see
  [Logic](../../logic/index.md).
