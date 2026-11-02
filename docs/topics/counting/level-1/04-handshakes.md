---
title: "Handshakes"
---

# Handshakes

*Counting and combinations · level 1, lesson 4 of 6*

## A question to start

Four friends meet at the park. Everybody shakes hands with everybody else, one time each. Each friend shakes 3
hands. So how many handshakes are there?

Many people say "4 friends, 3 hands each, so 12". But if you act it out, you will only see **6** handshakes. Where
did the other 6 go? By the end of this lesson you will know exactly why 12 is wrong, and how to count handshakes for
any number of friends with a simple drawing.

## The idea

### A handshake is a pair

A **handshake** needs two people. When Ana shakes Ben's hand, Ben is shaking Ana's hand at the very same moment. It
is **one** handshake, not two.

So in the language of the last two lessons: a handshake is a pair where **order does not matter**. "Ana and Ben" and
"Ben and Ana" are the same handshake. A handshake is like an ice-cream **cup**, not a tower.

### Draw dots and lines

Here is a way to count that a five-year-old can do and a professor would also use. Draw a **dot** for each friend.
Draw a **line** between two dots for each handshake. Then count the lines.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 180" role="img" aria-label="Three drawings. Three dots in a triangle joined by 3 lines. Four dots in a square joined by 6 lines, the 4 sides and 2 crossing lines. Five dots joined by 10 lines.">
  <g stroke="#9cc9ea" stroke-width="2.5">
    <line x1="70" y1="40" x2="113.3" y2="115"/><line x1="113.3" y1="115" x2="26.7" y2="115"/><line x1="26.7" y1="115" x2="70" y2="40"/>
    <line x1="170" y1="45" x2="250" y2="45"/><line x1="250" y1="45" x2="250" y2="125"/><line x1="250" y1="125" x2="170" y2="125"/>
    <line x1="170" y1="125" x2="170" y2="45"/><line x1="170" y1="45" x2="250" y2="125"/><line x1="250" y1="45" x2="170" y2="125"/>
    <line x1="340" y1="30" x2="392.3" y2="68"/><line x1="340" y1="30" x2="372.3" y2="129.5"/><line x1="340" y1="30" x2="307.7" y2="129.5"/>
    <line x1="340" y1="30" x2="287.7" y2="68"/><line x1="392.3" y1="68" x2="372.3" y2="129.5"/><line x1="392.3" y1="68" x2="307.7" y2="129.5"/>
    <line x1="392.3" y1="68" x2="287.7" y2="68"/><line x1="372.3" y1="129.5" x2="307.7" y2="129.5"/><line x1="372.3" y1="129.5" x2="287.7" y2="68"/>
    <line x1="307.7" y1="129.5" x2="287.7" y2="68"/>
  </g>
  <g fill="#eea66f" stroke="currentColor" stroke-width="1.5">
    <circle cx="70" cy="40" r="8"/><circle cx="113.3" cy="115" r="8"/><circle cx="26.7" cy="115" r="8"/>
    <circle cx="170" cy="45" r="8"/><circle cx="250" cy="45" r="8"/><circle cx="250" cy="125" r="8"/><circle cx="170" cy="125" r="8"/>
    <circle cx="340" cy="30" r="8"/><circle cx="392.3" cy="68" r="8"/><circle cx="372.3" cy="129.5" r="8"/><circle cx="307.7" cy="129.5" r="8"/><circle cx="287.7" cy="68" r="8"/>
  </g>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="70" y="160">3 friends</text><text x="70" y="176">3 lines</text>
    <text x="210" y="160">4 friends</text><text x="210" y="176">6 lines</text>
    <text x="340" y="160">5 friends</text><text x="340" y="176">10 lines</text>
  </g>
</svg>
</div>

- **3 friends**: the lines make a triangle. **3 handshakes.**
- **4 friends**: the 4 sides of a square, and 2 lines that cross in the middle. **6 handshakes.**
- **5 friends**: the 5 sides of a five-sided shape and 5 lines inside it, making a star. **10 handshakes.**

Every pair of dots gets exactly one line, so every handshake gets exactly one line. Counting lines is counting
handshakes.

### A tidy list: shake, then step away

Drawing lines is great, but with many friends the lines get crowded. Here is a tidy way for 4 friends, Ana, Ben,
Cai and Dee. Each friend shakes hands with everyone who is still there, and then **steps away**.

- Ana shakes hands with Ben, Cai and Dee. That is **3**. Ana steps away.
- Ben has already shaken Ana's hand, and Ana has gone anyway. Ben shakes Cai and Dee. That is **2**. Ben steps away.
- Cai shakes Dee. That is **1**. Cai steps away.
- Dee is alone. **0** more.

3 and 2 and 1 make **6**. Because each person steps away after their turn, no handshake can happen twice.

For 5 friends, the first person shakes 4 hands, then 3, then 2, then 1: 4 and 3 and 2 and 1 make **10**.

### So why is 12 wrong?

Let's count hands instead of handshakes. Each of the 4 friends shakes 3 hands, so if we ask every friend "how many
hands did you shake?" and add up their answers, we get 3 and 3 and 3 and 3, which is 12.

But look at one handshake, Ana and Ben. When we asked Ana, she counted it. When we asked Ben, he counted it **too**.
Every handshake was told to us **twice**, once by each person in it. So 12 is double the true number. Half of 12 is
**6**. ✓

This is not just a fix: it is a second way to count, and it gives the same answer as the first. When two different
ways agree, we can be very sure we are right.

### A new friend arrives

Here is a third way, and it shows the beautiful pattern hiding in handshakes. Start with nobody, and let friends
arrive **one at a time**. Each new friend shakes hands with everyone who is already there.

| friends at the park | new handshakes | handshakes so far |
| --- | --- | --- |
| 1 | 0 (nobody to shake) | 0 |
| 2 | 1 | 1 |
| 3 | 2 | 3 |
| 4 | 3 | 6 |
| 5 | 4 | 10 |
| 6 | 5 | 15 |

The handshake numbers are **0, 1, 3, 6, 10, 15**. To get the next one, add one more than you added last time.

These numbers can be drawn as triangles of dots: 1 dot, then a row of 2 under it to make 3, then a row of 3 to make
6, then a row of 4 to make 10. They are called the **triangle numbers**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 110" role="img" aria-label="Triangles of dots with 1, 3, 6 and 10 dots">
  <g fill="#7ccf9a">
    <circle cx="30" cy="90" r="6"/>
    <circle cx="90" cy="90" r="6"/><circle cx="106" cy="90" r="6"/><circle cx="98" cy="76" r="6"/>
    <circle cx="160" cy="90" r="6"/><circle cx="176" cy="90" r="6"/><circle cx="192" cy="90" r="6"/>
    <circle cx="168" cy="76" r="6"/><circle cx="184" cy="76" r="6"/><circle cx="176" cy="62" r="6"/>
    <circle cx="260" cy="90" r="6"/><circle cx="276" cy="90" r="6"/><circle cx="292" cy="90" r="6"/><circle cx="308" cy="90" r="6"/>
    <circle cx="268" cy="76" r="6"/><circle cx="284" cy="76" r="6"/><circle cx="300" cy="76" r="6"/>
    <circle cx="276" cy="62" r="6"/><circle cx="292" cy="62" r="6"/><circle cx="284" cy="48" r="6"/>
  </g>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="30" y="108">1</text><text x="98" y="108">3</text><text x="176" y="108">6</text><text x="284" y="108">10</text>
  </g>
</svg>
</div>

Why triangles? Look at the tidy list for 5 friends: 4 and 3 and 2 and 1. Put those as rows of dots, the longest at
the bottom, and you get the triangle of 10.

## Worked examples

**1. Six friends.** How many handshakes?

Tidy list: the first shakes 5 hands, then 4, 3, 2, 1. 5 and 4 and 3 and 2 and 1 make **15**.

Check by counting hands: each of the 6 friends shakes 5 hands, so 6 fives make 30 hands counted, and every handshake
was counted twice. Half of 30 is **15**. ✓

**2. High fives at a game.** At the end of a game, two teams of 3 children line up and every child high-fives every
child **on the other team** (not their own team). How many high fives?

This is not the same as everyone with everyone! Each of the 3 children on one team high-fives 3 children on the
other team. That is a box, like Teddy's outfits: 3 rows of 3, **9 high fives**. No halving is needed, because each
high five joins one child from each team, and we counted each one from one side only.

**3. Clinking cups.** At a birthday party, 4 children each clink cups with every other child once. How many clinks?
This is a handshake problem in disguise: **6 clinks**.

**4. How many friends?** At a party there were 10 handshakes, everyone with everyone. How many people were there?

Go along the handshake numbers: 0, 1, 3, 6, **10**. Ten handshakes goes with **5 people**.

## Try it

1. Two friends shake hands. How many handshakes? Draw the dots.
2. Draw 4 dots and join every pair with a line. Check that you get 6 lines.
3. Seven friends each shake hands with everyone else once. How many handshakes? (Use the "new friend arrives" table.)
4. Leo says: "5 friends each shake 4 hands, so there are 20 handshakes." What did he forget? What is the right
   answer?
5. Two teams of 4 players each. Every player high-fives every player on the **other** team. How many high fives?
6. At a party there were 15 handshakes, everyone with everyone. How many people came?
7. Ana, Ben, Cai and Dee shake hands, but Ana and Ben had already shaken hands this morning, so they skip it. How
   many handshakes happen now?

??? note "Answers"
    1. **1** handshake: two dots, one line.
    2. The 4 sides of the square and the 2 crossing lines: **6**.
    3. The table goes 0, 1, 3, 6, 10, 15, and the 7th friend adds 6 new handshakes: 15 and 6 make **21**. Check: 7
       friends each shake 6 hands makes 42 hands counted; half of 42 is 21. ✓
    4. He counted every handshake twice, once for each person in it. Half of 20 is **10**.
    5. Each of the 4 players on one team high-fives 4 players: 4 rows of 4 is **16**. No halving, because each high
       five has one player from each team.
    6. 0, 1, 3, 6, 10, **15**: that is **6 people**.
    7. Everyone with everyone would be 6. Take away the one they skipped: **5**.

## Common mistake

**Counting each handshake twice.** "Each person shakes 3 hands, 4 people, so 12" counts every handshake from both
ends. Halve it, or use the tidy "shake and step away" list.

**Halving when you should not.** In the high-five problem between two teams, we counted each high five only once
(from one team's side), so we must **not** halve. Ask yourself: *did I count each pair once or twice?*

## Where it leads

- Previous: [Lining up](03-lining-up.md) · Next: [Paths to the playground](05-playground-paths.md)
- [Level 1 page](index.md) · [Counting topic page](../index.md)
- In level 2, the same numbers count [the lines joining points and the diagonals of a shape](../level-2/05-handshakes-diagonals.md).
- The triangle numbers 1, 3, 6, 10, 15 are one of the best-loved patterns of all: [Patterns](../../patterns/index.md).
- The dots and lines are shapes too: a triangle, a square with its two crossing lines, a five-sided star. Meet the
  shapes in [Geometry level 1](../../geometry/level-1/01-naming-shapes.md).
