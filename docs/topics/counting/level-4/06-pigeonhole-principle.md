---
title: "The pigeonhole principle"
---

# The pigeonhole principle

*Counting and combinations · level 4, lesson 6 of 6*

## A question to start

Here are three facts that sound like guesses but are completely **certain**:

- In any group of 13 people, at least two were born in the same month.
- In a drawer of black socks and white socks, mixed up in the dark, if you pull out 3 socks you are sure to have a
  matching pair.
- Put 5 dots anywhere inside a square with sides 2 cm long. However you place them, at least two of the dots are no
  more than about 1.41 cm apart.

The first two may seem obvious once you think. The third is surprising: you can try as hard as you like to spread the
5 dots out, and you will always fail. All three come from one simple idea, so simple that it sounds like a joke, yet
mathematicians use it to prove deep results. It is called the **pigeonhole principle**.

## The idea

### Pigeons and holes

Imagine 5 pigeons flying into 4 pigeonholes (the little boxes on a wall where pigeons nest).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 130" role="img" aria-label="Four boxes in a row holding five balls: the first box has two balls and the other three boxes have one each">
  <g stroke="currentColor" stroke-width="2" fill="#9cc9ea" fill-opacity="0.3">
    <rect x="30" y="30" width="80" height="60"/><rect x="120" y="30" width="80" height="60"/><rect x="210" y="30" width="80" height="60"/><rect x="300" y="30" width="80" height="60"/>
  </g>
  <g fill="#eea66f" stroke="currentColor">
    <circle cx="55" cy="68" r="14"/><circle cx="85" cy="68" r="14"/><circle cx="160" cy="68" r="14"/><circle cx="250" cy="68" r="14"/><circle cx="340" cy="68" r="14"/>
  </g>
  <text x="210" y="118" font-size="13" text-anchor="middle" fill="currentColor">5 pigeons, 4 holes: some hole has at least 2</text>
</svg>
</div>

However they choose, some hole must end up with **at least two** pigeons.

> **The pigeonhole principle.** If more than $n$ things are put into $n$ boxes, then at least one box contains at least
> two things.

### Why it is true

Suppose it were **false**: every box has at most one thing in it. Then $n$ boxes hold at most $n$ things altogether,
one each. But we have **more** than $n$ things. That is impossible. So the supposition was wrong, and some box must
hold two or more.

This style of argument is called **proof by contradiction**: assume the opposite of what you want, and show it leads to
something impossible.

Notice two things about the principle.

1. It tells you that a crowded box **exists**, but not **which** box. Of the 13 people, we know two share a birth
   month, but not which month, or which two people.
2. It is **sharp**. With only $n$ things in $n$ boxes, it can fail: 12 people could have 12 different birth months.
   So "boxes + 1" is exactly the number needed to be sure.

### How to use it: find the pigeons and the boxes

The skill is in deciding **what the boxes are**. The things you are sure about go in as the pigeons; the categories
they fall into are the boxes.

| Fact | Pigeons | Boxes | Why it works |
| --- | --- | --- | --- |
| 13 people, a shared birth month | people | the 12 months | 13 > 12 |
| 367 people, a shared birthday | people | 366 possible dates (with 29 February) | 367 > 366 |
| 3 socks, a matching pair | socks | the 2 colours | 3 > 2 |

On Mars, a year is about 669 sols (Mars days) long. If settlers there numbered the sols of their year, then in any group
of 670 settlers, two would share a "birth sol".

### Socks in the dark: thinking about the worst case

A drawer has 10 black socks and 10 white socks. It is dark, so you cannot see what you pick.

**How many must you take to be sure of a pair (any colour)?** The boxes are the 2 colours. With 2 socks you might get
one of each, so 2 is not enough. With 3 socks, two must share a colour. Answer: **3**.

**How many to be sure of two black socks?** Now think of the **worst case**: the most unlucky way things can go. You
might pull out all 10 white socks first. Only then must the next two be black. Answer: $10 + 2 = 12$. Here the
pigeonhole idea is not what helps; the worst-case thinking is. Both ideas ask the same question: *how could I avoid what
I want for as long as possible?*

### Five dots in a square

Now the surprising one. A square has sides of length 2. Five dots are placed anywhere inside it (edges included).
Why are two of them always within $\sqrt{2}$ (about 1.414) of each other?

Cut the square into **four** small squares, each 1 by 1. These are the boxes. The 5 dots are the pigeons. So some small
square holds at least two dots (a dot exactly on a dividing line can be counted in either square).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 200" role="img" aria-label="A square of side 2 split into four unit squares, with five dots. Two of the dots lie in the same small square and are joined by a line. Beside it, a unit square with its diagonal, marked root 2">
  <rect x="40" y="20" width="160" height="160" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>
  <line x1="120" y1="20" x2="120" y2="180" stroke="currentColor" stroke-dasharray="5 4"/>
  <line x1="40" y1="100" x2="200" y2="100" stroke="currentColor" stroke-dasharray="5 4"/>
  <g fill="#eea66f" stroke="currentColor">
    <circle cx="65" cy="45" r="6"/><circle cx="170" cy="60" r="6"/><circle cx="60" cy="150" r="6"/><circle cx="140" cy="125" r="6"/><circle cx="185" cy="165" r="6"/>
  </g>
  <line x1="140" y1="125" x2="185" y2="165" stroke="currentColor" stroke-width="2"/>
  <text x="120" y="197" font-size="12" text-anchor="middle" fill="currentColor">side 2, cut into four 1-by-1 squares</text>
  <rect x="280" y="50" width="100" height="100" fill="#7ccf9a" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
  <line x1="280" y1="150" x2="380" y2="50" stroke="#eea66f" stroke-width="3"/>
  <text x="330" y="168" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <text x="268" y="104" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <text x="318" y="92" font-size="13" text-anchor="end" fill="currentColor">√2</text>
  <text x="330" y="190" font-size="12" text-anchor="middle" fill="currentColor">longest distance: the diagonal</text>
</svg>
</div>

Two dots in the same 1-by-1 square cannot be further apart than the square's **diagonal**, the line from one corner to
the opposite corner. How long is that diagonal? Build a square **on** the diagonal: it is made of four half-squares,
each half of a 1-by-1 square, so its area is $4 \times \tfrac{1}{2} = 2$. A square of area 2 has side $\sqrt{2}$
(the number which, multiplied by itself, gives 2). So the diagonal is $\sqrt{2} \approx 1.414$. (This is a special case
of Pythagoras' theorem.)

So two of the dots are at most $\sqrt{2}$ apart. And this is sharp: four dots placed at the four corners of the big
square are all at least 2 apart, so with only 4 dots it can fail.

### Numbers as pigeons

**Any 3 whole numbers include two whose sum is even.** Boxes: "even" and "odd". Three numbers in two boxes means two
are both even or both odd, and even + even and odd + odd are both even.

**Any 6 whole numbers include two whose difference is a multiple of 5.** Boxes: the 5 possible **remainders** when you
divide by 5 (0, 1, 2, 3 or 4). Six numbers, five boxes: two numbers have the same remainder. Subtract them and the
remainders cancel, so the difference divides exactly by 5. Example: 17 and 42 both leave remainder 2, and
$42 - 17 = 25 = 5 \times 5$.

### More pigeons per box (a first look)

With **25** people, at least **3** share a birth month. If each month had at most 2 people, there would be at most
$12 \times 2 = 24$ people. Level 6 turns this into the general rule.

## Worked examples

**1. Three colours of socks.** A drawer has red, blue and green socks, many of each. How many must you take in the dark
to be sure of a pair?

Boxes: 3 colours. With 3 socks you could have one of each. With **4** socks, two must share a colour. Answer: **4**.

**2. Pairs that add to 11.** Show that if you choose any 6 different numbers from 1 to 10, two of them add to 11.

1. Make 5 boxes from the pairs that add to 11: {1, 10}, {2, 9}, {3, 8}, {4, 7}, {5, 6}. Every number from 1 to 10 is
   in exactly one box.
2. Choose 6 numbers: 6 pigeons, 5 boxes. Two chosen numbers are in the same box.
3. Two different numbers in one box are that box's pair, and they add to 11.
4. Sharp: 1, 2, 3, 4, 5 is a choice of 5 numbers with no pair adding to 11.

**3. A school with 400 pupils.** Must two of them share a birthday? Yes: there are at most 366 possible dates and 400 is
more than 366.

**4. Handshakes at a party.** At a party of 6 people, some pairs shake hands. Show that two people shook the same number
of hands.

1. Each person shook between 0 and 5 hands: that looks like 6 boxes (0, 1, 2, 3, 4, 5) for 6 people, which is not
   enough.
2. But boxes 0 and 5 cannot **both** be used. If someone shook 5 hands, they shook everyone's, so nobody shook 0.
3. So at most 5 boxes are in use, for 6 people. Two people are in the same box.

## Try it

1. A class has 32 children. Must two of them have their birthday on the same day **of the month** (like the 7th)?
2. A drawer has 8 red socks and 5 blue socks. How many must you take in the dark to be sure of (a) a pair, (b) two blue
   socks, (c) one sock of each colour?
3. Show that among any 5 whole numbers, two have a difference that is a multiple of 4.
4. In example 2, explain why choosing 5 numbers from 1 to 10 is **not** enough.
5. An equilateral triangle (all sides equal) has sides 2 cm long. Show that if 5 dots are placed in it, two are at
   most 1 cm apart. (Hint: join the midpoints of the sides.)
6. How many people must be in a room to be sure that at least two were born on the same day of the week? At least three?
7. Explain why, in any group of 7 people, two have the same number of friends inside the group. (Being friends goes
   both ways.)

??? note "Answers"
    1. Yes. There are at most 31 days in a month (31 boxes) and 32 > 31.
    2. (a) 3: two colours, so 3 socks force a pair. (b) Worst case: all 8 red first, then 2 blue: 10. (c) Worst case:
       all 8 red first, then 1 blue: 9.
    3. Boxes: the 4 remainders on dividing by 4 (0, 1, 2, 3). Five numbers, four boxes: two share a remainder, and
       their difference divides exactly by 4.
    4. Example: 1, 2, 3, 4, 5. Each pair-box gets at most one number, so no pair adds to 11.
    5. Joining the midpoints cuts the triangle into 4 equilateral triangles with sides 1 cm. Five dots, four small
       triangles: two dots share a small triangle. The farthest apart two points of a triangle with sides 1 can be is
       1 (two of its corners), so those dots are at most 1 cm apart.
    6. 7 days in a week, so 8 people. For three: if each day had at most 2, there would be at most 14 people; so
       15 people.
    7. Each person has between 0 and 6 friends in the group. Nobody can have 6 friends while someone else has 0 (the
       person with 6 is friends with everyone). So at most 6 of the 7 values are used, for 7 people: two share a value.

## Common mistake

**Thinking the principle tells you which box.** It only promises that **some** box has two. "13 people, so two were
born in January" is wrong: it might be any month.

**Getting the number off by one.** To be sure of a repeat with $n$ boxes you need $n + 1$ things, not $n$. Check the
worst case: can you fill each box exactly once? If yes, you need one more.

## Where it leads

- Back: [Arrangements with conditions](05-arranging-with-rules.md) · Next level: [Level 5: choosing, combinations](../level-5/index.md)
- [Level 4 page](index.md) · [Counting topic page](../index.md)
- The generalised principle (100 people, at least 9 share a month) and the party problem are in [Level 6](../level-6/index.md).
- Remainders on division, used as boxes above, are part of [Number theory](../../number-theory/index.md).
- Proof by contradiction is one of the first proof methods in university mathematics:
  [MAT137 Unit 1 (logic, sets and proofs)](../../../uoft/MAT137/unit01.md) on the U of T shelf.
- The pigeonhole principle is also a [Logic](../../logic/index.md) tool: it proves that something exists without
  finding it.
