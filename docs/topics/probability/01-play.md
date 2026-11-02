---
title: "Play: Fair or unfair?"
---

# Play: Fair or unfair?

*Probability · step 1 of 5*

## A question to start

Let us play a game with one ordinary dice. I roll it. If it shows 1, 2, 3, 4 or 5, **I** win. If it shows 6,
**you** win. Do you want to play?

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 90" role="img" aria-label="Six dice faces from one to six; faces one to five are orange, face six is blue">
  <g fill="#eea66f">
    <rect x="10" y="15" width="56" height="56" rx="8"/><rect x="80" y="15" width="56" height="56" rx="8"/>
    <rect x="150" y="15" width="56" height="56" rx="8"/><rect x="220" y="15" width="56" height="56" rx="8"/>
    <rect x="290" y="15" width="56" height="56" rx="8"/>
  </g>
  <rect x="360" y="15" width="56" height="56" rx="8" fill="#9cc9ea"/>
  <g fill="currentColor">
    <circle cx="38" cy="43" r="5"/>
    <circle cx="96" cy="31" r="5"/><circle cx="120" cy="55" r="5"/>
    <circle cx="166" cy="31" r="5"/><circle cx="178" cy="43" r="5"/><circle cx="190" cy="55" r="5"/>
    <circle cx="236" cy="31" r="5"/><circle cx="260" cy="31" r="5"/><circle cx="236" cy="55" r="5"/><circle cx="260" cy="55" r="5"/>
    <circle cx="306" cy="31" r="5"/><circle cx="330" cy="31" r="5"/><circle cx="318" cy="43" r="5"/><circle cx="306" cy="55" r="5"/><circle cx="330" cy="55" r="5"/>
    <circle cx="376" cy="29" r="5"/><circle cx="400" cy="29" r="5"/><circle cx="376" cy="43" r="5"/><circle cx="400" cy="43" r="5"/><circle cx="376" cy="57" r="5"/><circle cx="400" cy="57" r="5"/>
  </g>
</svg>
</div>

You should say no! Five of the six faces make me win, and only one makes you win. Each face is just as likely to
come up as any other, so I will win much more often than you. This game is **unfair**.

Thinking about how likely things are, and whether a game gives everyone the same chance, is the start of
**probability**: the mathematics of chance.

## The idea

### Some things are sure, some are impossible, most are in between

Here are some words for how likely something is:

- **Impossible**: it can never happen. Rolling a 7 on an ordinary dice.
- **Unlikely**: it can happen, but usually does not. Rolling a 6.
- **Even chance**: it is just as likely to happen as not. A coin landing heads.
- **Likely**: it usually happens. Rolling a number smaller than 6.
- **Certain**: it is sure to happen. Rolling a number smaller than 7.

You can put them on a **chance line**, from impossible at one end to certain at the other.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 80" role="img" aria-label="A chance line from impossible on the left, through unlikely, even chance and likely, to certain on the right">
  <line x1="20" y1="30" x2="400" y2="30" stroke="currentColor" stroke-width="2"/>
  <g fill="#9cc9ea"><circle cx="20" cy="30" r="8"/><circle cx="400" cy="30" r="8"/></g>
  <circle cx="115" cy="30" r="8" fill="#eea66f"/><circle cx="210" cy="30" r="8" fill="#7ccf9a"/><circle cx="305" cy="30" r="8" fill="#eea66f"/>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="30" y="60">impossible</text><text x="115" y="60">unlikely</text><text x="210" y="60">even chance</text>
    <text x="305" y="60">likely</text><text x="392" y="60">certain</text>
  </g>
</svg>
</div>

### Counting the ways

How do you know where something goes on the line? Count the **ways** it can happen, out of all the ways things
could turn out, when every way is just as likely.

A dice has 6 faces. "Rolling a 6" can happen in **1 way out of 6**. "Rolling an even number" can happen in **3
ways out of 6** (2, 4 or 6): that is half of them, an even chance.

The more ways something can happen, the more likely it is.

### Fair games

A game is **fair** when every player has the **same chance** of winning. The game at the top is unfair: I have 5
ways to win and you have 1.

You can make it fair by sharing out the faces equally:

- I win on 1, 2 or 3; you win on 4, 5 or 6. Three ways each. **Fair.**
- I win on an odd number; you win on an even number. Three ways each. **Fair.**

### Spinners and bags

A spinner is fair to each colour only if the colours cover **equal** parts of it. A spinner that is three quarters
orange and one quarter blue lands on orange much more often.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 130" role="img" aria-label="Two spinners: one split into halves of orange and blue, which is fair; one three quarters orange and one quarter blue, which is not">
  <path d="M110 65 L110 15 A50 50 0 0 1 110 115 Z" fill="#eea66f"/>
  <path d="M110 65 L110 115 A50 50 0 0 1 110 15 Z" fill="#9cc9ea"/>
  <path d="M310 65 L310 15 A50 50 0 1 1 260 65 Z" fill="#eea66f"/>
  <path d="M310 65 L260 65 A50 50 0 0 1 310 15 Z" fill="#9cc9ea"/>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="110" y="128">fair</text><text x="310" y="128">not fair</text>
  </g>
</svg>
</div>

A bag of marbles works the same way. In a bag with 3 orange marbles and 1 blue marble, if you pull one out without
looking, orange is likely and blue is unlikely, because there are 3 orange ways and only 1 blue way.

## Worked example

**Sam and Lee play a game with two coins. They toss both. If the coins match (both heads or both tails), Sam wins.
If they are different, Lee wins. Is it fair?**

1. List every way the two coins can land. Call the coins the first coin and the second coin, so you do not miss
   anything:
    - first heads, second heads (match);
    - first heads, second tails (different);
    - first tails, second heads (different);
    - first tails, second tails (match).
2. Each of these 4 ways is just as likely.
3. Sam has 2 ways (the two matches). Lee has 2 ways (the two differences).
4. Two ways each: **the game is fair.**

Many people think "there are three results: two heads, two tails, or one of each, so Lee has only 1 chance in 3".
But "one of each" can happen in **two** ways (heads then tails, or tails then heads). Listing the coins separately
shows this clearly.

## Try it

1. Where on the chance line do these go? (a) Rolling a 0 on a dice. (b) Picking an orange marble from a bag of 9
   orange and 1 blue. (c) A coin landing tails.
2. A bag has 2 orange marbles and 5 blue ones. Which colour are you more likely to pick?
3. Is this game fair? *Roll a dice. You win on 1 or 2; your friend wins on 3, 4, 5 or 6.* If not, how could you
   change it?
4. A spinner has 4 equal parts: 3 green and 1 blue. Green wins for one player, blue for the other. Is it fair?
5. A coin has landed heads 4 times in a row. Is tails now more likely on the next toss?

??? note "Answers"
    1. (a) Impossible: no face has 0 dots. (b) Likely: 9 ways out of 10. (c) Even chance.
    2. Blue: there are 5 blue ways and only 2 orange ways.
    3. Not fair: 2 ways against 4 ways. Make it fair by giving each player 3 faces, for example you win on 1, 2 or 3.
    4. Not fair: green has 3 parts and blue only 1. Colour the parts 2 green and 2 blue to make it fair.
    5. No. The coin does not remember what happened before. Every toss is still an even chance: 1 way for heads and
       1 way for tails.

## Common mistake

**Thinking that luck "evens out" on the next try.** After 4 heads in a row, many people feel tails is "due". But a
coin has no memory: each toss starts fresh, with an even chance either way. Over a very large number of tosses,
heads and tails do come out close to half each, but that is because the later tosses swamp the early ones, not
because the coin makes up for them.

## Where it leads

- Next step: [Explore: chances as numbers](02-explore.md), where "1 way out of 6" becomes a number you can work with.
- Counting the ways carefully is a skill of its own: see [Counting and combinations](../counting/01-play.md).
