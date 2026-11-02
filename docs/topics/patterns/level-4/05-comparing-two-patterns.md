---
title: "Comparing two patterns"
---

# Comparing two patterns

*Patterns and sequences · level 4, lesson 5 of 6*

## A question to start

Your family offers you a choice of two savings plans.

- **Plan A:** you get 50 dollars today, and then 5 dollars more every week.
- **Plan B:** you get nothing today, but 10 dollars every week.

Which plan gives you more after 4 weeks? After 10 weeks? After a year? Most people grab Plan A because of the big
start. Work it out, and you find something surprising at week 10, and after that one plan wins forever.

## The idea

### Two sequences, side by side

Each plan is a sequence: the money you have after $w$ weeks. (We use $w$ for weeks instead of $n$, but it plays the
same part as the position. Week 0 is today.)

- Plan A: start 50, add 5 each week. Rule: $A_w = 50 + 5w$.
- Plan B: start 0, add 10 each week. Rule: $B_w = 10w$.

Put them in one table, and add a column for the **gap**: how far A is ahead of B.

| Week $w$ | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Plan A | 50 | 60 | 70 | 80 | 90 | 100 | 110 | 120 |
| Plan B | 0 | 20 | 40 | 60 | 80 | 100 | 120 | 140 |
| A − B (gap) | 50 | 40 | 30 | 20 | 10 | **0** | −10 | −20 |

After 4 weeks, A is ahead, 70 to 40. After 10 weeks, they are **exactly equal**: 100 dollars each. After that, B is
ahead, and the gap keeps growing in B's favour. After a year (52 weeks) A has $50 + 260 = 310$ dollars and B has
**520**.

### Why the gap closes steadily

Every week, A gains 5 and B gains 10. So B **catches up by** $10 - 5 = 5$ dollars a week. The gap starts at 50,
and shrinks by 5 each week: 50, 45, 40, ... The gap is itself a sequence with a constant difference ($-5$), and it
reaches 0 after

$$50 \div 5 = 10 \text{ weeks.}$$

This is the key idea of the lesson: **to compare two straight-line patterns, look at the gap; it changes by the
difference of the two differences.**

### Finding the meeting point with an equation

The same answer comes from asking "when are they equal?":

$$50 + 5w = 10w$$

Take $5w$ from both sides: $50 = 5w$, so $w = 10$. Both methods are really the same thinking: the equation says "the
head start (50) equals the catching-up (5 a week) times the weeks".

### The picture: two lines crossing

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 275" role="img" aria-label="A graph of savings against weeks 0 to 14. Plan A starts at 50 and rises 5 a week; Plan B starts at 0 and rises 10 a week, more steeply. The lines cross at week 10, where both are 100">
  <line x1="45" y1="230" x2="45" y2="15" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="45" y="246" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <line x1="93.5714" y1="230" x2="93.5714" y2="15" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="93.5714" y="246" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <line x1="142.143" y1="230" x2="142.143" y2="15" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="142.143" y="246" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <line x1="190.714" y1="230" x2="190.714" y2="15" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="190.714" y="246" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <line x1="239.286" y1="230" x2="239.286" y2="15" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="239.286" y="246" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <line x1="287.857" y1="230" x2="287.857" y2="15" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="287.857" y="246" font-size="11" text-anchor="middle" fill="currentColor">10</text>
  <line x1="336.429" y1="230" x2="336.429" y2="15" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="336.429" y="246" font-size="11" text-anchor="middle" fill="currentColor">12</text>
  <line x1="385" y1="230" x2="385" y2="15" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="385" y="246" font-size="11" text-anchor="middle" fill="currentColor">14</text>
  <line x1="45" y1="230" x2="385" y2="230" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="39" y="234" font-size="11" text-anchor="end" fill="currentColor">0</text>
  <line x1="45" y1="194.167" x2="385" y2="194.167" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="39" y="198.167" font-size="11" text-anchor="end" fill="currentColor">25</text>
  <line x1="45" y1="158.333" x2="385" y2="158.333" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="39" y="162.333" font-size="11" text-anchor="end" fill="currentColor">50</text>
  <line x1="45" y1="122.5" x2="385" y2="122.5" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="39" y="126.5" font-size="11" text-anchor="end" fill="currentColor">75</text>
  <line x1="45" y1="86.6667" x2="385" y2="86.6667" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="39" y="90.6667" font-size="11" text-anchor="end" fill="currentColor">100</text>
  <line x1="45" y1="50.8333" x2="385" y2="50.8333" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="39" y="54.8333" font-size="11" text-anchor="end" fill="currentColor">125</text>
  <line x1="45" y1="15" x2="385" y2="15" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="39" y="19" font-size="11" text-anchor="end" fill="currentColor">150</text>
  <line x1="45" y1="230" x2="385" y2="230" stroke="currentColor" stroke-width="1.5"/>
  <line x1="45" y1="230" x2="45" y2="15" stroke="currentColor" stroke-width="1.5"/>
  <text x="215" y="262" font-size="12" text-anchor="middle" fill="currentColor">weeks</text>
  <text x="14" y="115.0" font-size="12" text-anchor="middle" fill="currentColor" transform="rotate(-90 14 115.0)">dollars saved</text>
  <line x1="45" y1="158.333" x2="385" y2="58" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="45" y1="230" x2="385" y2="29.3333" stroke="#9cc9ea" stroke-width="2.5"/>
  <circle cx="45" cy="158.333" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="45" cy="230" r="4" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="93.5714" cy="144" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="93.5714" cy="201.333" r="4" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="142.143" cy="129.667" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="142.143" cy="172.667" r="4" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="190.714" cy="115.333" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="190.714" cy="144" r="4" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="239.286" cy="101" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="239.286" cy="115.333" r="4" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="287.857" cy="86.6667" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="287.857" cy="86.6667" r="4" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="336.429" cy="72.3333" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="336.429" cy="58" r="4" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="385" cy="58" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="385" cy="29.3333" r="4" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="287.9" cy="86.7" r="9" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="273.857" y="72.6667" font-size="12" text-anchor="end" fill="currentColor">week 10: both 100</text>
  <text x="52.2857" y="108.167" font-size="12" text-anchor="start" fill="currentColor">Plan A: 50 + 5 a week</text>
  <text x="348.571" y="22.1667" font-size="12" text-anchor="end" fill="currentColor">Plan B: 10 a week</text>
</svg>
</div>

On a graph, each plan is a straight line (lesson 3). Plan A starts higher (at 50) but climbs less steeply (5 per
week). Plan B starts at 0 but is steeper (10 per week). The steeper line must eventually catch the other, and they
cross at the point $(10, 100)$: week 10, 100 dollars. To the left of the crossing A is higher; to the right B is
higher, and stays higher, because a steeper line never falls back below a less steep one once it has passed it.

So the full answer to "which is better?" is: **it depends how long you wait.** Under 10 weeks, Plan A. Exactly 10,
a tie. Over 10, Plan B.

### When they never meet, and when they meet between whole numbers

- **Same difference, different start** (like $3n + 2$ and $3n + 7$): the gap never changes, so they never meet. The
  lines are parallel.
- **A crossing that is not a whole number.** Compare $25 + 3w$ and $7w$. The gap is 25 and closes by 4 a week:
  $25 \div 4 = 6.25$ weeks. There is no week 6.25 in the table. At week 6 the first is ahead (43 to 42); at week 7
  the second is ahead (46 to 49). So the answer is "the second plan is ahead from week 7 on".

## Worked examples

**1. Phone plans.** Plan X costs 20 dollars a month plus 2 dollars per gigabyte (GB) of data. Plan Y has no monthly
fee but costs 8 dollars per GB. For how many GB is each plan cheaper?

- Costs: X is $20 + 2g$, Y is $8g$, where $g$ is the number of GB.
- Y starts 20 cheaper, but costs 6 more per GB. Equal when $20 = 6g$, so $g = 3.33...$
- Check whole numbers: 3 GB: X costs 26, Y costs 24 (Y cheaper). 4 GB: X costs 28, Y costs 32 (X cheaper).
- So: **3 GB or less, Plan Y; 4 GB or more, Plan X.**

**2. Two candles.** Candle A is 30 cm tall and burns down 2 cm an hour. Candle B is 20 cm tall and burns 1 cm an
hour. When are they the same height?

- After $h$ hours: A is $30 - 2h$, B is $20 - h$. Both are sequences going down.
- A starts 10 cm taller but loses 1 cm more per hour, so the gap of 10 closes in $10 \div 1 = 10$ hours.
- After 10 hours: A is $30 - 20 = 10$ cm, B is $20 - 10 = 10$ cm. ✓ After that, A is shorter.

**3. Living on Mars time.** A day on Mars, called a **sol**, is about 24 hours and 40 minutes long. When a rover
lands, its team on Earth often works on Mars time for the first months, so each shift starts about 40 minutes later
(by Earth clocks) than the one before. A shift starts at 8:00 in the morning on sol 1. On which sol does it first
start at 8:00 in the **evening** or later?

- Start time in minutes after 8:00 a.m. on sol $s$: $40(s - 1)$. (Sol 1 has had no delays yet.)
- 8:00 p.m. is 12 hours, 720 minutes, after 8:00 a.m. So we need $40(s - 1) \ge 720$, which means
  $s - 1 \ge 18$.
- **Sol 19** starts at exactly 8:00 p.m. by Earth clocks. (Teams really did live like this, and found it very tiring.)

**4. Two number sequences.** When does 5, 9, 13, ... ($4n + 1$) first pass 50, 52, 54, ... ($2n + 48$)?

- $4n + 1 = 2n + 48$ gives $2n = 47$, $n = 23.5$. Not a whole number.
- At $n = 23$: $93$ and $94$, the second still ahead. At $n = 24$: $97$ and $96$. The first sequence passes the
  second at **position 24**.

## Try it

1. Plan C gives 30 dollars today and 4 dollars a week; Plan D gives 7 dollars a week from nothing. When are they
   equal, and how much is each worth then?
2. In question 1, which plan is better after 5 weeks? After 20 weeks?
3. Candle P is 24 cm and burns 3 cm an hour. Candle Q is 18 cm and burns 1.5 cm an hour. When are they the same
   height, and how tall?
4. Do the sequences $3n + 7$ and $3n + 2$ ever have the same term at the same position? Explain.
5. A climbing gym charges 15 dollars a visit, or a 60 dollar membership plus 5 dollars a visit. How many visits make
   the membership worth it?
6. Two sequences: 100, 97, 94, ... and 10, 13, 16, ... At which position are they equal? What is the term there?
7. On Mars time, a shift starts at 8:00 a.m. on sol 1, and 40 minutes later each sol. At what time does it start on
   sol 10?
8. Plan E gives 100 dollars today and 2 dollars a week. From which week on is Plan B (10 dollars a week from
   nothing) ahead of Plan E?

??? note "Answers"
    1. The gap of 30 closes by $7 - 4 = 3$ a week: $30 \div 3 = 10$ weeks. Each is worth $7 \times 10 = 70$ dollars
       (and $30 + 40 = 70$ ✓).
    2. Week 5: C has $30 + 20 = 50$, D has 35, so **C**. Week 20: C has $30 + 80 = 110$, D has 140, so **D**.
    3. $24 - 3h = 18 - 1.5h$. P starts 6 cm taller and loses 1.5 cm an hour more, so $6 \div 1.5 = 4$ hours. Then
       P is $24 - 12 = 12$ cm and Q is $18 - 6 = 12$ cm.
    4. **No.** At every position the first is exactly 5 more than the second; the gap never changes, because both
       go up by 3. Their graphs are parallel lines.
    5. Pay-per-visit costs $15v$; membership costs $60 + 5v$. Equal when $10v = 60$, $v = 6$. At 6 visits they both
       cost 90 dollars. For **7 or more** visits the membership is cheaper (7 visits: 105 against 95).
    6. Rules: $103 - 3n$ and $3n + 7$. Equal when $103 - 3n = 3n + 7$, so $96 = 6n$ and $n = 16$. The term is
       $3 \times 16 + 7 = 55$ (and $103 - 48 = 55$ ✓).
    7. Sol 10 has had 9 delays: $9 \times 40 = 360$ minutes, which is 6 hours. It starts at **2:00 p.m.**
    8. The gap of 100 closes by $10 - 2 = 8$ a week: $100 \div 8 = 12.5$. At week 12, E has 124 and B has 120; at
       week 13, E has 126 and B has 130. B is ahead from **week 13** on.

## Common mistake

**Comparing at only one moment.** "Plan A is better" is true at week 4 and false at week 20. When two patterns
grow at different rates, the honest answer names the crossing point and says which is better on each side of it.

**Forgetting that positions are whole numbers.** If the equation gives $n = 23.5$, there is no term there. Check
the whole numbers on either side to see where one sequence first passes the other.

## Where it leads

- Back: [Growing pattern pictures](04-growing-pattern-pictures.md) · Next: [Sums of odd numbers](06-odd-number-sums.md)
- [Level 4 page](index.md) · [Patterns topic page](../index.md)
- Solving $50 + 5w = 10w$ is an equation from a story, as in [Algebra](../../algebra/index.md).
- Comparing plans by their rates is a ratio idea: see [Ratio](../../ratio/index.md).
- More about Mars's day and year is on akadian.ca's
  [Mars in space](https://www.akadian.ca/science/mars-facts/space.html) page.
