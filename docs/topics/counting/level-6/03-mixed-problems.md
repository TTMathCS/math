---
title: "Mixed problems: which rule?"
---

# Mixed problems: which rule?

*Counting and combinations · level 6, lesson 3 of 6*

## A question to start

An ice-cream shop has 5 flavours. Four friends are asked: "How many ways can you get 3 scoops?" They give four
different answers: **125**, **60**, **10** and **35**.

Who is right? All of them. Each friend read the question in a different way, and each answer is correct for that
reading. The hard part of a counting problem is very often not the arithmetic but deciding **what kind of counting**
it is. This lesson gives three questions to ask and a chart to follow, and then lots of practice telling the kinds
apart.

## The idea

### Three questions to ask

Before calculating anything, ask:

1. **Does order matter?** If I swap two of the chosen things, is the result different? (A cone stacked
   strawberry-on-mint looks different from mint-on-strawberry. A cup of scoops is just a cup.)
2. **Are repeats allowed?** Can the same thing be chosen twice? (Two scoops of mint? A code with two 7s? Usually yes
   for flavours and digits, no for people.)
3. **Are the objects alike?** Are some of the things being arranged or shared identical (letters that repeat, identical
   sweets), or are they all different?

### The four basic ways to choose $r$ from $n$

The first two questions give four cases for choosing $r$ things from $n$ kinds.

| | Repeats allowed | No repeats |
| --- | --- | --- |
| **Order matters** | $n^r$ (codes) | ${}^nP_r = \dfrac{n!}{(n-r)!}$ (podiums) |
| **Order does not matter** | $\dbinom{n+r-1}{r}$ (doughnut boxes) | $\dbinom{n}{r}$ (teams) |

The same thing as a chart:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 240" role="img" aria-label="A decision chart. Does order matter? If yes, ask whether repeats are allowed: yes gives n to the power r (codes), no gives nPr (podiums). If order does not matter, ask whether repeats are allowed: no gives n choose r (teams), yes gives n plus r minus 1 choose r (doughnut boxes, stars and bars)">
  <rect x="140" y="10" width="160" height="32" rx="8" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor"/>
  <text x="220" y="31" font-size="13" text-anchor="middle" fill="currentColor">Does order matter?</text>
  <rect x="30" y="85" width="160" height="32" rx="8" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor"/>
  <text x="110" y="106" font-size="13" text-anchor="middle" fill="currentColor">Repeats allowed?</text>
  <rect x="250" y="85" width="160" height="32" rx="8" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor"/>
  <text x="330" y="106" font-size="13" text-anchor="middle" fill="currentColor">Repeats allowed?</text>
  <line x1="190" y1="42" x2="110" y2="85" stroke="currentColor" stroke-width="1.5"/>
  <line x1="250" y1="42" x2="330" y2="85" stroke="currentColor" stroke-width="1.5"/>
  <text x="135" y="62" font-size="12" text-anchor="middle" fill="currentColor">yes</text>
  <text x="305" y="62" font-size="12" text-anchor="middle" fill="currentColor">no</text>
  <line x1="80" y1="117" x2="57" y2="165" stroke="currentColor" stroke-width="1.5"/>
  <line x1="140" y1="117" x2="163" y2="165" stroke="currentColor" stroke-width="1.5"/>
  <line x1="300" y1="117" x2="277" y2="165" stroke="currentColor" stroke-width="1.5"/>
  <line x1="360" y1="117" x2="383" y2="165" stroke="currentColor" stroke-width="1.5"/>
  <text x="55" y="142" font-size="12" text-anchor="middle" fill="currentColor">yes</text>
  <text x="168" y="142" font-size="12" text-anchor="middle" fill="currentColor">no</text>
  <text x="275" y="142" font-size="12" text-anchor="middle" fill="currentColor">no</text>
  <text x="388" y="142" font-size="12" text-anchor="middle" fill="currentColor">yes</text>
  <rect x="10" y="165" width="95" height="56" rx="8" fill="#eea66f" fill-opacity="0.6" stroke="currentColor"/>
  <text x="57" y="189" font-size="14" text-anchor="middle" fill="currentColor">n<tspan baseline-shift="super" font-size="10">r</tspan></text>
  <text x="57" y="209" font-size="11" text-anchor="middle" fill="currentColor">codes</text>
  <rect x="115" y="165" width="95" height="56" rx="8" fill="#eea66f" fill-opacity="0.6" stroke="currentColor"/>
  <text x="163" y="189" font-size="13" text-anchor="middle" fill="currentColor">n!/(n−r)!</text>
  <text x="163" y="209" font-size="11" text-anchor="middle" fill="currentColor">podiums</text>
  <rect x="230" y="165" width="95" height="56" rx="8" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor"/>
  <text x="277" y="189" font-size="13" text-anchor="middle" fill="currentColor">C(n, r)</text>
  <text x="277" y="209" font-size="11" text-anchor="middle" fill="currentColor">teams</text>
  <rect x="335" y="165" width="95" height="56" rx="8" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor"/>
  <text x="383" y="189" font-size="12" text-anchor="middle" fill="currentColor">C(n+r−1, r)</text>
  <text x="383" y="209" font-size="11" text-anchor="middle" fill="currentColor">doughnut boxes</text>
</svg>
</div>

Where each one comes from:

- **Order, repeats** ($n^r$): $r$ places, each with all $n$ choices, by the multiplication principle (level 2).
- **Order, no repeats** (${}^nP_r$): each place has one fewer choice than the one before (level 4).
- **No order, no repeats** ($\dbinom{n}{r}$): the permutations divided by the $r!$ orders of each group (level 5).
- **No order, repeats** ($\dbinom{n+r-1}{r}$): a choice is fixed by **how many of each kind**, so it is $r$ identical
  stars shared among $n$ kinds with $n - 1$ bars (lesson 2).

### The ice cream, four ways

With $n = 5$ flavours and $r = 3$ scoops:

| Reading | Order? | Repeats? | Count |
| --- | --- | --- | --- |
| a cone, flavours may repeat | yes | yes | $5^3 = 125$ |
| a cone, all different flavours | yes | no | $5 \times 4 \times 3 = 60$ |
| a cup, all different flavours | no | no | $\binom{5}{3} = 10$ |
| a cup, flavours may repeat | no | yes | $\binom{7}{3} = 35$ |

So the friends are all right. The question as asked was simply not clear enough, and a good counter says which
reading they chose.

Notice one thing: you might expect "a cup with repeats" to be $125 \div 3!$, which is about 20.8, dividing the cone count by the
orders. That fails, and not only because it is not a whole number. A cone like mint-mint-lemon has only 3 different
orders, not 6, because swapping the two mints changes nothing. Different cups are counted different numbers of times
among the cones, so you cannot divide by one number. That is exactly why stars and bars is needed.

### Arranging and sharing

The third question, about alike objects, leads to two more rules you already know.

- **Arranging $n$ objects, some alike:** $\dfrac{n!}{a!\,b!\,\cdots}$ where $a$, $b$, ... are the sizes of the groups
  of identical objects (level 4). LEVEL has 5 letters with 2 Ls and 2 Es: $\dfrac{5!}{2!\,2!} = 30$.
- **Sharing objects into different boxes:** if the objects are all **different**, each object picks its box, so
  $k$ boxes give $k^n$ ways (order matters in the sense that "which box" is a label; repeats allowed because many
  objects can pick the same box). If the objects are **identical**, use stars and bars.

### The toolkit around the chart

Real problems usually need a basic count plus one of these tools:

- **Multiply** for "and then", **add** separate cases for "or".
- **Do the fussy part first** (a digit that cannot be 0, a person who must be at the end).
- **Count the complement**: all, minus what you do not want; for several overlapping "do not wants", use
  inclusion-exclusion.
- **Glue** things that must stay together; **divide** by the number of ways that give the "same" result
  (identical objects, equal unnamed groups, turning a round table).

A good habit: when you finish, **check with a tiny version** of the problem that you can list by hand.

## Worked examples

**1. Number plates.** A plate has 3 letters (A to Z) then 3 digits (0 to 9). Order matters (ABC is not CBA) and
repeats are allowed. So $26^3 \times 10^3 = 17\,576 \times 1000 = 17\,576\,000$ plates.

**2. Books to friends.** In how many ways can 5 books be given to 3 friends (a friend may get any number, even none)?

- If the books are all **different**: each book chooses a friend, $3^5 = 243$.
- If the books are 5 identical copies: stars and bars, $\dbinom{5 + 2}{2} = \dbinom{7}{2} = 21$.

**3. A league.** In a league of 8 teams, every team plays every other team.

- **Once each**: a match is a pair of teams, order not mattering, no repeats: $\dbinom{8}{2} = 28$ matches.
- **Twice, home and away**: now (Lions at home to Tigers) is different from (Tigers at home to Lions), so order
  matters: ${}^8P_2 = 8 \times 7 = 56$ matches.

**4. Four dice.** Throw four dice.

- If the dice are different colours, an outcome is an ordered list: $6^4 = 1296$ outcomes.
- If you only care **which numbers** came up (like "two 3s, a 5 and a 6"), order does not matter but repeats do:
  $\dbinom{6 + 4 - 1}{4} = \dbinom{9}{4} = 126$ different results.
- Warning for later: the 1296 outcomes are equally likely, but the 126 results are **not** (four 6s can happen in
  only 1 way out of 1296, while 1, 2, 3, 4 can happen in $4! = 24$ ways). For chances, always count the equally
  likely outcomes.

**5. Twelve people, three prizes.** Read four ways:

| Prizes | Can one person win twice? | Count |
| --- | --- | --- |
| different (gold, silver, bronze) | no | $12 \times 11 \times 10 = 1320$ |
| identical | no | $\binom{12}{3} = 220$ |
| different | yes | $12^3 = 1728$ |
| identical | yes | $\binom{14}{3} = 364$ |

## Try it

1. A 4-digit PIN uses the digits 0 to 9. How many PINs are there? How many have 4 different digits?
2. You own 10 books. (a) In how many ways can you choose 3 to take on holiday? (b) In how many ways can you arrange
   3 of them in a row on a shelf?
3. Six different people are each put in one of 4 different rooms, with no limit on room sizes. How many ways?
4. You buy 8 pens, choosing from 3 colours. How many different collections of pens can you get?
5. How many different arrangements of the letters of COMMITTEE are there?
6. Three identical dice are thrown. How many different results are there (counting only which numbers appear)?
7. Read the "3 scoops from 5 flavours" question once more, as a cone with **at least two different flavours** (order
   matters). How many cones?
8. A 5-character password uses lowercase letters a to z. How many have exactly 2 vowels (a, e, i, o, u) and 3
   consonants, with repeats allowed?

??? note "Answers"
    1. Order matters, repeats allowed: $10^4 = 10\,000$. All different: $10 \times 9 \times 8 \times 7 = 5040$.
    2. (a) No order, no repeats: $\dbinom{10}{3} = 120$. (b) Order matters: $10 \times 9 \times 8 = 720$.
    3. Each person picks a room: $4^6 = 4096$.
    4. No order, repeats allowed: 8 stars and 2 bars, $\dbinom{10}{2} = 45$.
    5. COMMITTEE has 9 letters: C, O, M, M, I, T, T, E, E. Three pairs repeat (M, T, E):
       $\dfrac{9!}{2!\,2!\,2!} = \dfrac{362880}{8} = 45\,360$.
    6. No order, repeats allowed, $n = 6$ faces, $r = 3$: $\dbinom{8}{3} = 56$.
    7. All cones $5^3 = 125$, minus the cones that are one flavour all the way up (5): $125 - 5 = 120$.
    8. Choose which 2 of the 5 places hold vowels: $\dbinom{5}{2} = 10$. Fill them: $5^2 = 25$. Fill the 3 consonant
       places: $21^3 = 9261$. Total $10 \times 25 \times 9261 = 2\,315\,250$.

## Common mistake

**Reaching for a formula before deciding the kind.** The words "choose", "pick" or "select" do not automatically mean
$\dbinom{n}{r}$. Always ask the swap question (does order matter?) and the repeat question first, and say which
reading you chose.

**Dividing to remove order when repeats are allowed.** "Cones divided by $3!$ gives cups" fails when flavours can
repeat, because some cones have fewer than $3!$ different orders. Use stars and bars for "no order, with repeats".

## Where it leads

- Back: [Stars and bars](02-stars-and-bars.md) · Next: [The generalised pigeonhole principle](04-generalised-pigeonhole.md)
- [Level 6 page](index.md) · [Counting topic page](../index.md)
- The basic rules: multiplying in [Level 2](../level-2/index.md), arranging in [Level 4](../level-4/index.md),
  choosing in [Level 5](../level-5/index.md).
- Why the equally likely outcomes are what matter for chances (example 4): [Probability](../../probability/index.md).
- Counting how many steps a computer program takes is the same kind of reasoning:
  [CSC108 Unit 9 (searching, sorting and complexity)](../../../uoft/CSC108H1/unit09.md).
