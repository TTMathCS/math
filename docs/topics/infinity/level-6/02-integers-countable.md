---
title: "The integers are countable"
---

# The integers are countable

*Infinity and strange math · level 6, lesson 2 of 6*

## A question to start

The counting numbers $1, 2, 3, \ldots$ start somewhere and go on forever in one direction. The **integers**, the
whole numbers with their negatives and zero,

$$\ldots,\ -3,\ -2,\ -1,\ 0,\ 1,\ 2,\ 3,\ \ldots$$

go on forever in **both** directions. They contain all the counting numbers, plus zero, plus a whole second infinite
copy of the counting numbers with minus signs. It certainly looks like more than twice as many.

Can you list them all, first, second, third, ..., so that every integer gets a position? Try before reading on. The
obvious attempts fail, and seeing why they fail is half the lesson.

## The idea

### A name for the integers

The set of all integers is written $\mathbb{Z}$, from the German word *Zahlen*, "numbers". So

$$\mathbb{Z} = \{\ldots, -2, -1, 0, 1, 2, \ldots\}, \qquad \mathbb{N} = \{1, 2, 3, \ldots\}.$$

In [lesson 1](01-countable-sets.md) we said a set is **countable** if it can be put in a list where every member is at
some finite position. So the question is: is $\mathbb{Z}$ countable?

### Two attempts that fail

**Attempt 1: in order from smallest.** For the counting numbers we started with the smallest one, 1. But $\mathbb{Z}$
has **no smallest member**: whatever integer you pick, one less is smaller still. There is nowhere to start.

**Attempt 2: positives first, then the rest.** List $0, 1, 2, 3, 4, \ldots$ and then $-1, -2, -3, \ldots$ But the
first part never ends. At which position is $-1$? After infinitely many others, which is not a position. The
negatives are never reached. (This is exactly the trap from lesson 1's worked example 5.)

### Attempt 3: zigzag

Start at 0, then take one step right, one step left, and keep swinging outwards:

$$0,\ 1,\ -1,\ 2,\ -2,\ 3,\ -3,\ 4,\ -4,\ \ldots$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 105" role="img" aria-label="The integers from minus 5 to 5 on a number line; numbered circles show the listing order: 0 is first, 1 second, minus 1 third, 2 fourth, minus 2 fifth, and so on, with arcs swinging back and forth across zero">
  <line x1="20.0" y1="70.0" x2="440.0" y2="70.0" stroke="currentColor" stroke-width="1.5"/>
  <line x1="30.0" y1="64.0" x2="30.0" y2="76.0" stroke="currentColor" stroke-width="1"/>
  <text x="30.0" y="95.0" font-size="12" text-anchor="middle" fill="currentColor">−5</text>
  <line x1="70.0" y1="64.0" x2="70.0" y2="76.0" stroke="currentColor" stroke-width="1"/>
  <text x="70.0" y="95.0" font-size="12" text-anchor="middle" fill="currentColor">−4</text>
  <line x1="110.0" y1="64.0" x2="110.0" y2="76.0" stroke="currentColor" stroke-width="1"/>
  <text x="110.0" y="95.0" font-size="12" text-anchor="middle" fill="currentColor">−3</text>
  <line x1="150.0" y1="64.0" x2="150.0" y2="76.0" stroke="currentColor" stroke-width="1"/>
  <text x="150.0" y="95.0" font-size="12" text-anchor="middle" fill="currentColor">−2</text>
  <line x1="190.0" y1="64.0" x2="190.0" y2="76.0" stroke="currentColor" stroke-width="1"/>
  <text x="190.0" y="95.0" font-size="12" text-anchor="middle" fill="currentColor">−1</text>
  <line x1="230.0" y1="64.0" x2="230.0" y2="76.0" stroke="currentColor" stroke-width="1"/>
  <text x="230.0" y="95.0" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <line x1="270.0" y1="64.0" x2="270.0" y2="76.0" stroke="currentColor" stroke-width="1"/>
  <text x="270.0" y="95.0" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <line x1="310.0" y1="64.0" x2="310.0" y2="76.0" stroke="currentColor" stroke-width="1"/>
  <text x="310.0" y="95.0" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <line x1="350.0" y1="64.0" x2="350.0" y2="76.0" stroke="currentColor" stroke-width="1"/>
  <text x="350.0" y="95.0" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <line x1="390.0" y1="64.0" x2="390.0" y2="76.0" stroke="currentColor" stroke-width="1"/>
  <text x="390.0" y="95.0" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <line x1="430.0" y1="64.0" x2="430.0" y2="76.0" stroke="currentColor" stroke-width="1"/>
  <text x="430.0" y="95.0" font-size="12" text-anchor="middle" fill="currentColor">5</text>
  <circle cx="230.0" cy="70.0" r="9" fill="#7ccf9a"/>
  <text x="230.0" y="74.0" font-size="10" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="270.0" cy="70.0" r="9" fill="#eea66f"/>
  <text x="270.0" y="74.0" font-size="10" text-anchor="middle" fill="currentColor">2</text>
  <circle cx="190.0" cy="70.0" r="9" fill="#9cc9ea"/>
  <text x="190.0" y="74.0" font-size="10" text-anchor="middle" fill="currentColor">3</text>
  <circle cx="310.0" cy="70.0" r="9" fill="#eea66f"/>
  <text x="310.0" y="74.0" font-size="10" text-anchor="middle" fill="currentColor">4</text>
  <circle cx="150.0" cy="70.0" r="9" fill="#9cc9ea"/>
  <text x="150.0" y="74.0" font-size="10" text-anchor="middle" fill="currentColor">5</text>
  <circle cx="350.0" cy="70.0" r="9" fill="#eea66f"/>
  <text x="350.0" y="74.0" font-size="10" text-anchor="middle" fill="currentColor">6</text>
  <circle cx="110.0" cy="70.0" r="9" fill="#9cc9ea"/>
  <text x="110.0" y="74.0" font-size="10" text-anchor="middle" fill="currentColor">7</text>
  <circle cx="390.0" cy="70.0" r="9" fill="#eea66f"/>
  <text x="390.0" y="74.0" font-size="10" text-anchor="middle" fill="currentColor">8</text>
  <circle cx="70.0" cy="70.0" r="9" fill="#9cc9ea"/>
  <text x="70.0" y="74.0" font-size="10" text-anchor="middle" fill="currentColor">9</text>
  <path d="M 230.0 58 Q 250.0 42.0 270.0 58" fill="none" stroke="currentColor" stroke-width="1"/>
  <path d="M 270.0 58 Q 230.0 38.0 190.0 58" fill="none" stroke="currentColor" stroke-width="1"/>
  <path d="M 190.0 58 Q 250.0 34.0 310.0 58" fill="none" stroke="currentColor" stroke-width="1"/>
  <path d="M 310.0 58 Q 230.0 30.0 150.0 58" fill="none" stroke="currentColor" stroke-width="1"/>
  <path d="M 150.0 58 Q 250.0 26.0 350.0 58" fill="none" stroke="currentColor" stroke-width="1"/>
  <path d="M 350.0 58 Q 230.0 22.0 110.0 58" fill="none" stroke="currentColor" stroke-width="1"/>
  <path d="M 110.0 58 Q 250.0 18.0 390.0 58" fill="none" stroke="currentColor" stroke-width="1"/>
  <path d="M 390.0 58 Q 230.0 14.0 70.0 58" fill="none" stroke="currentColor" stroke-width="1"/>
</svg>
</div>

The numbers in the circles are the positions. Every integer is reached: the integer 5 at position 10, and $-5$ right
after it at position 11. No integer waits forever, because each swing outwards covers one more positive and one more
negative.

### The position rule, and its reverse

To be sure the zigzag is a true one-to-one correspondence between $\mathbb{Z}$ and $\mathbb{N}$, write down exact rules
in both directions.

**From integer to position.**

- 0 is at position 1.
- A positive integer $k$ is at position $2k$ (so 1 is 2nd, 2 is 4th, 5 is 10th).
- A negative integer $-k$ is at position $2k + 1$ (so $-1$ is 3rd, $-2$ is 5th, $-5$ is 11th).

**From position to integer.**

- Position 1 holds 0.
- An even position $p$ holds $\dfrac{p}{2}$.
- An odd position $p$ (3 or more) holds $-\dfrac{p - 1}{2}$.

Each rule undoes the other. For example, $-7$ goes to position $2 \times 7 + 1 = 15$, and position 15 is odd, so it
holds $-\frac{15 - 1}{2} = -7$. Because every integer has exactly one position and every position holds exactly one
integer, the zigzag is a one-to-one correspondence. So

> $\mathbb{Z}$ is countable. There are exactly as many integers as counting numbers.

### Hilbert's hotel version

Picture it as a hotel story. Hilbert's hotel is empty. A crowd arrives: Mr Zero, an endless queue of "positive"
guests $1, 2, 3, \ldots$, and an endless queue of "negative" guests $-1, -2, -3, \ldots$ The manager says: Mr Zero takes
room 1, positive guest $k$ takes the even room $2k$, negative guest $-k$ takes the odd room $2k + 1$. Everyone has a
room, and every room is used. Two infinite queues fit into one infinite hotel, side by side, by sharing the rooms out
alternately.

### Why "more" is the wrong feeling

$\mathbb{Z}$ contains all of $\mathbb{N}$ and infinitely many other numbers besides. For finite sets, a set that
contains another set plus extra members is bigger. For infinite sets it need not be: lesson 1 showed the even numbers
are the same size as $\mathbb{N}$ though they are only part of it, and now $\mathbb{N}$ is the same size as
$\mathbb{Z}$ though it is only part of **it**.

The feeling of "more" comes from picturing the numbers in their usual order on the number line. But a list does not
have to follow that order. The zigzag puts $-1$ before $2$, and that is fine: a list is about **reaching** everyone,
not about sorting them by size.

### The zip trick: two countable sets together

The zigzag is one case of a trick that works for any two countable sets. If $A$ is listed as $a_1, a_2, a_3, \ldots$
and $B$ as $b_1, b_2, b_3, \ldots$, then their **union** $A \cup B$ (all the members of either, written with the cup
symbol $\cup$) can be listed by taking turns, like the teeth of a zip:

$$a_1,\ b_1,\ a_2,\ b_2,\ a_3,\ b_3,\ \ldots$$

Member $a_n$ lands at position $2n - 1$ and $b_n$ at position $2n$. If some number is in both sets, skip it the second
time it appears, and the list still reaches everyone. So:

> The union of two countable sets is countable.

With three lists, take turns among three: $a_1, b_1, c_1, a_2, b_2, c_2, \ldots$ Any finite number of countable sets
together is still countable. (Infinitely many is a harder question. It needs a new idea, in
[lesson 5](05-countable-unions.md).)

## Worked examples

**1. Positions.** Where are 7, $-7$ and 0 in the zigzag list?

- 7 is positive: position $2 \times 7 = 14$.
- $-7$ is negative: position $2 \times 7 + 1 = 15$.
- 0 is at position 1.

**2. Reading back.** Which integers are at positions 40 and 41?

- 40 is even: $\frac{40}{2} = 20$.
- 41 is odd: $-\frac{41 - 1}{2} = -20$.

**3. Multiples of 5.** Give a list of all the integers that are multiples of 5 (including the negative ones and 0),
and find the position of $-35$.

1. Zigzag again: $0, 5, -5, 10, -10, 15, -15, \ldots$
2. This is the zigzag list of $\mathbb{Z}$ with every number multiplied by 5. So $5k$ is where $k$ was: $-35 = 5 \times (-7)$
   is where $-7$ was, at position **15**.

**4. Zipping two sets.** List the integers together with the "half-integers" $\ldots, -\frac32, -\frac12, \frac12, \frac32, \ldots$
(each integer plus $\frac12$).

1. List $A$: the zigzag $0, 1, -1, 2, -2, \ldots$ List $B$: add $\frac12$ to each, giving
   $\frac12, \frac32, -\frac12, \frac52, -\frac32, \ldots$
2. Zip them: $0, \frac12, 1, \frac32, -1, -\frac12, 2, \frac52, \ldots$
3. Where is $-\frac12$? It is $-1 + \frac12$, and $-1$ is 3rd in list $A$, so $-\frac12$ is 3rd in list $B$, and
   $b_3$ goes to position $2 \times 3 = 6$. Check in the zipped list: it is 6th. ✓

**5. When ordering from the smallest does work.** Are the integers greater than or equal to $-100$ countable?

Yes, and this time the ordinary order works, because there **is** a smallest member: $-100, -99, -98, \ldots$ The
integer $m$ is at position $m + 101$ (so $-100$ is 1st and 0 is 101st). A set with a starting point and steps of 1 is
easy to list; $\mathbb{Z}$ needed the zigzag only because it has no starting point.

## Try it

1. In the zigzag list, where are 10, $-10$ and 1?
2. Which integers are at positions 1, 99 and 100?
3. Write the first nine terms of a different zigzag that takes the negative first: $0, -1, 1, -2, 2, \ldots$ Give
   the position rule for $k$ and for $-k$.
4. List the even integers (negative ones too, and 0), and find the position of $-12$.
5. An empty Hilbert's hotel receives Mr Zero, all the positive guests and all the negative guests. Which room does
   guest $-30$ get? Who is in room 61?
6. Zip the integers with the half-integers as in worked example 4. At which position is $\frac32$? At which is
   $-2$?
7. Show that the single formula "position of $z$ is $2|z|$, plus 1 if $z \le 0$" agrees with the zigzag rules.
   (Here $|z|$, the **absolute value**, means $z$ without its minus sign.)
8. Explain why listing $\mathbb{Z}$ "in order from smallest" fails, but listing the integers greater than $-1000$ in
   order from smallest works.

??? note "Answers"
    1. 10 is at $2 \times 10 = 20$; $-10$ at $21$; 1 at $2$.
    2. Position 1 holds 0. Position 99 is odd: $-\frac{98}{2} = -49$. Position 100 is even: $\frac{100}{2} = 50$.
    3. $0, -1, 1, -2, 2, -3, 3, -4, 4$. Now 0 is 1st, $-k$ is at position $2k$, and $k$ is at position $2k + 1$.
    4. $0, 2, -2, 4, -4, 6, -6, \ldots$ This is the zigzag of $\mathbb{Z}$ doubled, and $-12 = 2 \times (-6)$ sits
       where $-6$ sat: position $2 \times 6 + 1 =$ **13**.
    5. Guest $-30$ gets room $2 \times 30 + 1 = 61$. So room 61 holds guest $-30$ (and nobody else).
    6. $\frac32 = 1 + \frac12$, and 1 is 2nd in list $A$, so $\frac32$ is $b_2$, at position **4**. $-2$ is $a_5$
       (5th in the zigzag), at position $2 \times 5 - 1 =$ **9**. Check: $0, \frac12, 1, \frac32, -1, -\frac12, 2, \frac52, -2$:
       the 4th is $\frac32$ and the 9th is $-2$. ✓
    7. For $z = 0$: $2 \times 0 + 1 = 1$ ✓. For positive $z = k$: $|z| = k$ and $z > 0$, so $2k$ ✓. For negative
       $z = -k$: $|z| = k$ and $z \le 0$, so $2k + 1$ ✓.
    8. $\mathbb{Z}$ has no smallest member, so "start with the smallest" has nowhere to start. The integers greater
       than $-1000$ have a smallest member, $-999$, so we can list $-999, -998, -997, \ldots$, and each integer $m$ is
       reached at position $m + 1000$.

## Common mistake

**Listing all the positives first.** "$0, 1, 2, 3, \ldots$ and then the negatives" never gets to the negatives. A list
must put every member at a **finite** position. Interleave instead.

**Thinking the list has to be in size order.** It does not, and for $\mathbb{Z}$ it cannot be. Order on the number line
and order in a list are different things.

## Where it leads

- Back: [Countable sets](01-countable-sets.md) · Next: [Pairs are countable](03-pairs-countable.md)
- [Level 6 page](index.md) · [Infinity topic page](../index.md)
- Negative numbers and absolute value: [Numbers](../../numbers/index.md). Unions of sets, and the symbol $\cup$:
  [Union and intersection](../../logic/level-5/02-union-intersection.md) in Logic.
- On the U of T shelf, functions that are one-to-one and onto (bijections), with proofs:
  [MAT137 Unit 1: logic, sets and proofs](../../../uoft/MAT137/unit01.md).
