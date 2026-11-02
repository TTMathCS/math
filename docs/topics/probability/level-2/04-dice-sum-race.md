---
title: "The dice sum race"
---

# The dice sum race

*Probability · level 2, lesson 4 of 6*

## A question to start

Here is a race for a group of friends. There are 11 horses, numbered 2 to 12. Each player picks a horse. Then you take
turns rolling **two** dice and adding them. Whatever the total is, that horse moves one square forward. The first horse
to reach the finish wins.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 240 260" role="img" aria-label="A race board with eleven lanes, for horses 2 to 12. Each lane has a start square and five more squares to the finish line. In the middle of a race, horse 7 is four squares along, horse 6 three, horses 5 and 8 two, horses 4, 9 and 10 one, and horses 2, 3, 11 and 12 have not moved.">
  <g stroke="currentColor" stroke-width="1"><rect x="40" y="10" width="30" height="18" fill="none"/><rect x="70" y="10" width="30" height="18" fill="none"/><rect x="100" y="10" width="30" height="18" fill="none"/><rect x="130" y="10" width="30" height="18" fill="none"/><rect x="160" y="10" width="30" height="18" fill="none"/><rect x="190" y="10" width="30" height="18" fill="none"/><rect x="40" y="30" width="30" height="18" fill="none"/><rect x="70" y="30" width="30" height="18" fill="none"/><rect x="100" y="30" width="30" height="18" fill="none"/><rect x="130" y="30" width="30" height="18" fill="none"/><rect x="160" y="30" width="30" height="18" fill="none"/><rect x="190" y="30" width="30" height="18" fill="none"/><rect x="40" y="50" width="30" height="18" fill="none"/><rect x="70" y="50" width="30" height="18" fill="none"/><rect x="100" y="50" width="30" height="18" fill="none"/><rect x="130" y="50" width="30" height="18" fill="none"/><rect x="160" y="50" width="30" height="18" fill="none"/><rect x="190" y="50" width="30" height="18" fill="none"/><rect x="40" y="70" width="30" height="18" fill="none"/><rect x="70" y="70" width="30" height="18" fill="none"/><rect x="100" y="70" width="30" height="18" fill="none"/><rect x="130" y="70" width="30" height="18" fill="none"/><rect x="160" y="70" width="30" height="18" fill="none"/><rect x="190" y="70" width="30" height="18" fill="none"/><rect x="40" y="90" width="30" height="18" fill="none"/><rect x="70" y="90" width="30" height="18" fill="none"/><rect x="100" y="90" width="30" height="18" fill="none"/><rect x="130" y="90" width="30" height="18" fill="none"/><rect x="160" y="90" width="30" height="18" fill="none"/><rect x="190" y="90" width="30" height="18" fill="none"/><rect x="40" y="110" width="30" height="18" fill="none"/><rect x="70" y="110" width="30" height="18" fill="none"/><rect x="100" y="110" width="30" height="18" fill="none"/><rect x="130" y="110" width="30" height="18" fill="none"/><rect x="160" y="110" width="30" height="18" fill="none"/><rect x="190" y="110" width="30" height="18" fill="none"/><rect x="40" y="130" width="30" height="18" fill="none"/><rect x="70" y="130" width="30" height="18" fill="none"/><rect x="100" y="130" width="30" height="18" fill="none"/><rect x="130" y="130" width="30" height="18" fill="none"/><rect x="160" y="130" width="30" height="18" fill="none"/><rect x="190" y="130" width="30" height="18" fill="none"/><rect x="40" y="150" width="30" height="18" fill="none"/><rect x="70" y="150" width="30" height="18" fill="none"/><rect x="100" y="150" width="30" height="18" fill="none"/><rect x="130" y="150" width="30" height="18" fill="none"/><rect x="160" y="150" width="30" height="18" fill="none"/><rect x="190" y="150" width="30" height="18" fill="none"/><rect x="40" y="170" width="30" height="18" fill="none"/><rect x="70" y="170" width="30" height="18" fill="none"/><rect x="100" y="170" width="30" height="18" fill="none"/><rect x="130" y="170" width="30" height="18" fill="none"/><rect x="160" y="170" width="30" height="18" fill="none"/><rect x="190" y="170" width="30" height="18" fill="none"/><rect x="40" y="190" width="30" height="18" fill="none"/><rect x="70" y="190" width="30" height="18" fill="none"/><rect x="100" y="190" width="30" height="18" fill="none"/><rect x="130" y="190" width="30" height="18" fill="none"/><rect x="160" y="190" width="30" height="18" fill="none"/><rect x="190" y="190" width="30" height="18" fill="none"/><rect x="40" y="210" width="30" height="18" fill="none"/><rect x="70" y="210" width="30" height="18" fill="none"/><rect x="100" y="210" width="30" height="18" fill="none"/><rect x="130" y="210" width="30" height="18" fill="none"/><rect x="160" y="210" width="30" height="18" fill="none"/><rect x="190" y="210" width="30" height="18" fill="none"/></g>
  <line x1="220" y1="5" x2="220" y2="233" stroke="currentColor" stroke-width="3"/>
  <g stroke="currentColor" stroke-width="1.2"><circle cx="55" cy="19" r="7" fill="#9cc9ea"/><circle cx="55" cy="39" r="7" fill="#9cc9ea"/><circle cx="85" cy="59" r="7" fill="#9cc9ea"/><circle cx="115" cy="79" r="7" fill="#9cc9ea"/><circle cx="145" cy="99" r="7" fill="#9cc9ea"/><circle cx="175" cy="119" r="7" fill="#eea66f"/><circle cx="115" cy="139" r="7" fill="#9cc9ea"/><circle cx="85" cy="159" r="7" fill="#9cc9ea"/><circle cx="85" cy="179" r="7" fill="#9cc9ea"/><circle cx="55" cy="199" r="7" fill="#9cc9ea"/><circle cx="55" cy="219" r="7" fill="#9cc9ea"/></g>
  <g font-size="13" fill="currentColor" text-anchor="middle"><text x="22" y="24">2</text><text x="22" y="44">3</text><text x="22" y="64">4</text><text x="22" y="84">5</text><text x="22" y="104">6</text><text x="22" y="124">7</text><text x="22" y="144">8</text><text x="22" y="164">9</text><text x="22" y="184">10</text><text x="22" y="204">11</text><text x="22" y="224">12</text><text x="55" y="250">start</text><text x="220" y="250">finish</text></g>
</svg>
</div>

Which horse would you pick? Does it matter? Everyone who plays this game a few times notices the same thing: horse 7
keeps winning, and horses 2 and 12 hardly ever leave the start. Why?

## The idea

### Two dice: name them

The secret is in the two dice. To see it, do what you did in [Fair games](02-fair-games.md): **give the dice names**.
Say one die is orange and the other is blue. Then "orange 3, blue 4" and "orange 4, blue 3" are two **different** ways
to roll, even though both make 7.

How many ways can the two dice land? The orange die has 6 faces. For **each** of those, the blue die has 6 faces. So
there are 6 rows of 6, which is **36 ways** altogether.

Each of the 36 ways is **equally likely**. That is because each die is fair on its own, and the two dice do not affect
each other: the blue die has no idea what the orange die did.

### The table of all 36 ways

Here are all 36 ways, with the total in each square. The orange die is down the side and the blue die is along the
top.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 430 220" role="img" aria-label="A six by six table of all 36 totals of two dice. The six squares with total 7 run along a diagonal and are orange. Totals 6 and 8 are blue, five squares each. Totals 2 and 12 are green, one square each, in opposite corners.">
  <g stroke="currentColor" stroke-width="1"><rect x="50" y="30" width="36" height="30" fill="#7ccf9a"/><rect x="86" y="30" width="36" height="30" fill="none"/><rect x="122" y="30" width="36" height="30" fill="none"/><rect x="158" y="30" width="36" height="30" fill="none"/><rect x="194" y="30" width="36" height="30" fill="#9cc9ea"/><rect x="230" y="30" width="36" height="30" fill="#eea66f"/><rect x="50" y="60" width="36" height="30" fill="none"/><rect x="86" y="60" width="36" height="30" fill="none"/><rect x="122" y="60" width="36" height="30" fill="none"/><rect x="158" y="60" width="36" height="30" fill="#9cc9ea"/><rect x="194" y="60" width="36" height="30" fill="#eea66f"/><rect x="230" y="60" width="36" height="30" fill="#9cc9ea"/><rect x="50" y="90" width="36" height="30" fill="none"/><rect x="86" y="90" width="36" height="30" fill="none"/><rect x="122" y="90" width="36" height="30" fill="#9cc9ea"/><rect x="158" y="90" width="36" height="30" fill="#eea66f"/><rect x="194" y="90" width="36" height="30" fill="#9cc9ea"/><rect x="230" y="90" width="36" height="30" fill="none"/><rect x="50" y="120" width="36" height="30" fill="none"/><rect x="86" y="120" width="36" height="30" fill="#9cc9ea"/><rect x="122" y="120" width="36" height="30" fill="#eea66f"/><rect x="158" y="120" width="36" height="30" fill="#9cc9ea"/><rect x="194" y="120" width="36" height="30" fill="none"/><rect x="230" y="120" width="36" height="30" fill="none"/><rect x="50" y="150" width="36" height="30" fill="#9cc9ea"/><rect x="86" y="150" width="36" height="30" fill="#eea66f"/><rect x="122" y="150" width="36" height="30" fill="#9cc9ea"/><rect x="158" y="150" width="36" height="30" fill="none"/><rect x="194" y="150" width="36" height="30" fill="none"/><rect x="230" y="150" width="36" height="30" fill="none"/><rect x="50" y="180" width="36" height="30" fill="#eea66f"/><rect x="86" y="180" width="36" height="30" fill="#9cc9ea"/><rect x="122" y="180" width="36" height="30" fill="none"/><rect x="158" y="180" width="36" height="30" fill="none"/><rect x="194" y="180" width="36" height="30" fill="none"/><rect x="230" y="180" width="36" height="30" fill="#7ccf9a"/></g>
  <g font-size="13" fill="currentColor" text-anchor="middle"><text x="68" y="50">2</text><text x="104" y="50">3</text><text x="140" y="50">4</text><text x="176" y="50">5</text><text x="212" y="50">6</text><text x="248" y="50">7</text><text x="68" y="80">3</text><text x="104" y="80">4</text><text x="140" y="80">5</text><text x="176" y="80">6</text><text x="212" y="80">7</text><text x="248" y="80">8</text><text x="68" y="110">4</text><text x="104" y="110">5</text><text x="140" y="110">6</text><text x="176" y="110">7</text><text x="212" y="110">8</text><text x="248" y="110">9</text><text x="68" y="140">5</text><text x="104" y="140">6</text><text x="140" y="140">7</text><text x="176" y="140">8</text><text x="212" y="140">9</text><text x="248" y="140">10</text><text x="68" y="170">6</text><text x="104" y="170">7</text><text x="140" y="170">8</text><text x="176" y="170">9</text><text x="212" y="170">10</text><text x="248" y="170">11</text><text x="68" y="200">7</text><text x="104" y="200">8</text><text x="140" y="200">9</text><text x="176" y="200">10</text><text x="212" y="200">11</text><text x="248" y="200">12</text></g>
  <g font-size="13" font-weight="bold" fill="currentColor" text-anchor="middle"><text x="68" y="22">1</text><text x="104" y="22">2</text><text x="140" y="22">3</text><text x="176" y="22">4</text><text x="212" y="22">5</text><text x="248" y="22">6</text><text x="38" y="50">1</text><text x="38" y="80">2</text><text x="38" y="110">3</text><text x="38" y="140">4</text><text x="38" y="170">5</text><text x="38" y="200">6</text></g>
  <rect x="300" y="50" width="20" height="20" fill="#eea66f" stroke="currentColor"/><rect x="300" y="90" width="20" height="20" fill="#9cc9ea" stroke="currentColor"/><rect x="300" y="130" width="20" height="20" fill="#7ccf9a" stroke="currentColor"/>
  <g font-size="13" fill="currentColor"><text x="328" y="65">7: 6 ways</text><text x="328" y="105">6 or 8: 5 ways each</text><text x="328" y="145">2 or 12: 1 way each</text></g>
</svg>
</div>

Look at the orange squares. Total 7 runs right across the table from corner to corner, along a diagonal: 1 and 6,
2 and 5, 3 and 4, 4 and 3, 5 and 2, 6 and 1. That is **6 ways**: one in every row.

Total 2 has only **1 way**: 1 and 1, the top-left corner. Total 12 also has 1 way: 6 and 6, the bottom-right corner.

### Why 7 has the most ways

There is a neat reason why 7 is the winner. Whatever the orange die shows, there is **exactly one** blue face that
makes 7:

- orange 1 needs blue 6;
- orange 2 needs blue 5;
- ... and so on, up to orange 6, which needs blue 1.

So every row of the table has a 7 in it. No other total can do that. For a total of 8, orange 1 would need blue 7,
which does not exist. For a total of 2, orange 2 would already be too big. Only 7 has a partner for every face,
because 7 is 1 more than 6, so each face from 1 to 6 has a partner from 6 down to 1.

### The pyramid of ways

Count the ways for every total and stack them up, one square per way.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 230" role="img" aria-label="A pyramid of squares. Total 2 has one square, 3 has two, 4 has three, 5 has four, 6 has five, 7 has six, then 8 five, 9 four, 10 three, 11 two and 12 one.">
  <g stroke="currentColor" stroke-width="1.2"><rect x="20" y="170" width="32" height="28" fill="#7ccf9a"/><rect x="56" y="170" width="32" height="28" fill="none"/><rect x="56" y="140" width="32" height="28" fill="none"/><rect x="92" y="170" width="32" height="28" fill="none"/><rect x="92" y="140" width="32" height="28" fill="none"/><rect x="92" y="110" width="32" height="28" fill="none"/><rect x="128" y="170" width="32" height="28" fill="none"/><rect x="128" y="140" width="32" height="28" fill="none"/><rect x="128" y="110" width="32" height="28" fill="none"/><rect x="128" y="80" width="32" height="28" fill="none"/><rect x="164" y="170" width="32" height="28" fill="#9cc9ea"/><rect x="164" y="140" width="32" height="28" fill="#9cc9ea"/><rect x="164" y="110" width="32" height="28" fill="#9cc9ea"/><rect x="164" y="80" width="32" height="28" fill="#9cc9ea"/><rect x="164" y="50" width="32" height="28" fill="#9cc9ea"/><rect x="200" y="170" width="32" height="28" fill="#eea66f"/><rect x="200" y="140" width="32" height="28" fill="#eea66f"/><rect x="200" y="110" width="32" height="28" fill="#eea66f"/><rect x="200" y="80" width="32" height="28" fill="#eea66f"/><rect x="200" y="50" width="32" height="28" fill="#eea66f"/><rect x="200" y="20" width="32" height="28" fill="#eea66f"/><rect x="236" y="170" width="32" height="28" fill="#9cc9ea"/><rect x="236" y="140" width="32" height="28" fill="#9cc9ea"/><rect x="236" y="110" width="32" height="28" fill="#9cc9ea"/><rect x="236" y="80" width="32" height="28" fill="#9cc9ea"/><rect x="236" y="50" width="32" height="28" fill="#9cc9ea"/><rect x="272" y="170" width="32" height="28" fill="none"/><rect x="272" y="140" width="32" height="28" fill="none"/><rect x="272" y="110" width="32" height="28" fill="none"/><rect x="272" y="80" width="32" height="28" fill="none"/><rect x="308" y="170" width="32" height="28" fill="none"/><rect x="308" y="140" width="32" height="28" fill="none"/><rect x="308" y="110" width="32" height="28" fill="none"/><rect x="344" y="170" width="32" height="28" fill="none"/><rect x="344" y="140" width="32" height="28" fill="none"/><rect x="380" y="170" width="32" height="28" fill="#7ccf9a"/></g>
  <g font-size="13" fill="currentColor" text-anchor="middle"><text x="36" y="218">2</text><text x="72" y="218">3</text><text x="108" y="218">4</text><text x="144" y="218">5</text><text x="180" y="218">6</text><text x="216" y="218">7</text><text x="252" y="218">8</text><text x="288" y="218">9</text><text x="324" y="218">10</text><text x="360" y="218">11</text><text x="396" y="218">12</text></g>
</svg>
</div>

It makes a pyramid. The ways go up by 1 from total 2 to total 7, and down by 1 from 7 to 12: 1, 2, 3, 4, 5, 6, 5, 4,
3, 2, 1. Add them all: 36. ✓ (Every square of the table is counted once.)

The pyramid is the shape of the race. Horse 7 gets pushed forward on 6 of the 36 ways, horse 2 on only 1. So on
average, horse 7 moves **6 times as often** as horse 2 or horse 12.

### What really happens in a race

Say each horse needs to move 5 squares to finish, as on the board above. A computer can play this race a million
times very quickly. Here is about how often each horse wins, out of every 1000 races.

| Horse | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Wins in 1000 races (about) | less than 1 | 9 | 39 | 99 | 193 | 320 | 193 | 99 | 39 | 9 | less than 1 |

Three things to notice.

1. **Horse 7 wins most often**: about 320 races in 1000, roughly 1 race in 3.
2. **Horse 7 does not win most races.** It loses about 2 races in 3! "Most likely to win" is not the same as "likely
   to win". Horses 6 and 8 together win a little more often than horse 7 does.
3. **The race makes small differences bigger.** On a single roll, 7 (6 ways) is only a little more likely than 6
   (5 ways). But in a race, horse 7 wins about 320 times to horse 6's 193. Being a little faster at every step adds
   up over a whole race. And horse 2, which moves 6 times less often than horse 7, almost never wins: about once in
   2000 races.

### Is the race fair?

No. The horses are not equal: some have more ways than others, so whoever picks 7 has the best chance. To make a
fair game with two dice, give each player a **group** of totals with the same number of ways. For example, one player
wins on a 7 (6 ways), and the other wins on a 2, 3 or 4 (1 + 2 + 3 = 6 ways); on any other total, roll again. Both
have 6 ways, so it is fair. There are more fair splits in the examples and questions below.

## Worked examples

**Example 1. Ways to make 5.**

How many ways can two dice make a total of 5?

1. Go down the orange die: orange 1 needs blue 4; orange 2 needs blue 3; orange 3 needs blue 2; orange 4 needs blue 1.
2. Orange 5 or 6 is already too big (the blue die would need 0 or less).
3. That is **4 ways**. It matches the pyramid.

**Example 2. Why "3 and 4" counts twice.**

Tom says, "A total of 7 is 1 and 6, 2 and 5, or 3 and 4. That is only 3 ways, and 2 is 1 and 1, just 1 way. So 7 is
only 3 times as likely as 2."

1. Name the dice. "3 and 4" can be orange 3 with blue 4, **or** orange 4 with blue 3. Those are two different ways.
2. The same goes for "1 and 6" and "2 and 5". So 7 has 3 × 2 = **6 ways**.
3. But "1 and 1" is just orange 1 with blue 1. Swapping does not give a new way. So 2 has **1 way**.
4. 7 is **6 times** as likely as 2, not 3 times. Tom forgot that a double cannot be swapped, but every other pair can.

**Example 3. A fair two-dice game.**

Ana wins if the total is 6, 7 or 8. Ben wins on any other total. Is it fair?

1. Ana's ways: 5 + 6 + 5 = 16.
2. Ben's ways: 36 − 16 = 20.
3. **Not fair**; Ben has 4 more ways. Even though Ana has the three best totals, Ben has eight totals.
4. To make it fair, both need 18 ways. Give Ana 6, 7 and 8, and also 2 (1 more way) and 12 (1 more way): 16 + 2 = 18.
   Ben gets 3, 4, 5, 9, 10 and 11: 2 + 3 + 4 + 4 + 3 + 2 = 18. **Fair.**

## Try it

1. How many ways can two dice make a total of 10? List them.
2. How many ways make a total of 6?
3. Somebody picks horse 1. What happens to it?
4. Which is more likely: a total of 4, or a total of 10?
5. Which is more likely: a total of 7, or a double (both dice the same)?
6. Kim wins on totals 2, 3, 4, 10, 11 and 12. Lee wins on 7. Nobody wins on 5, 6, 8 or 9 (roll again). Is it fair?
7. In a race, horse 7 is in front. Your horse 9 is one square behind. Can your horse still win?
8. Why does every row of the table have exactly one 7, but not every row has a 12?

??? note "Answers"
    1. **3 ways**: orange 4 and blue 6, orange 5 and blue 5, orange 6 and blue 4.
    2. **5 ways**: 1 and 5, 2 and 4, 3 and 3, 4 and 2, 5 and 1.
    3. **It never moves.** The smallest total of two dice is 1 + 1 = 2. A total of 1 is impossible.
    4. **Equally likely.** Each has 3 ways. The pyramid is the same on both sides.
    5. **Equally likely.** 7 has 6 ways, and doubles have 6 ways (1 and 1, 2 and 2, up to 6 and 6).
    6. **Not fair.** Kim: 1 + 2 + 3 + 3 + 2 + 1 = 12 ways. Lee: 6 ways. Kim has twice as many.
    7. **Yes.** Horse 7 is more likely to move each roll, but your horse can still get lucky rolls. Likely is not
       certain.
    8. For 7, every orange face (1 to 6) has a partner (6 down to 1) on the blue die. For 12, orange must be 6 and blue
       must be 6; if orange is anything less, blue would need more than 6, which does not exist. So 12 appears only
       in the last row.

## Common mistake

**Treating "3 and 4" and "4 and 3" as the same way.** They are two different ways to roll, as you see the moment you
name the dice. Doubles like "3 and 3" are only one way. Forgetting this makes 7 look less likely than it is.

**Thinking the most likely winner will probably win.** Horse 7 is the best horse, but it loses about 2 races in 3.
When there are many possible results, even the most likely one can be less likely than "something else".

## Where it leads

- Previous lesson: [Experiments and tallies](03-experiments-and-tallies.md) · Next lesson: [Chance has no memory](05-chance-no-memory.md).
- This level: [Level 2: Fair or unfair?](index.md). The whole topic: [Probability](../index.md).
- "6 rows of 6 makes 36" is multiplication: [Multiplying as equal groups](../../numbers/level-2/04-equal-groups.md).
- Totals that rise and fall in a pyramid are a pattern: [Patterns](../../patterns/index.md).
- Counting pairs carefully, with and without swapping, is a big part of [Counting](../../counting/index.md).
- In [level 3](../level-3/index.md), the 36-square table gives exact chances for each total, like "6 out of 36" for 7.
