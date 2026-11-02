---
title: "The part can be as big as the whole"
---

# The part can be as big as the whole

*Infinity and strange math · level 3, lesson 3 of 6*

## A question to start

Which are there more of: counting numbers (1, 2, 3, 4, ...) or even numbers (2, 4, 6, 8, ...)?

Most people answer straight away: "Counting numbers, of course! The even numbers are only **half** of them. The
counting numbers have all the even ones **and** all the odd ones too."

That sounds completely sensible. But in the last lesson, every old guest in Hilbert's hotel moved from room $n$ to
room $2n$, so the guests that once filled **all** the rooms fitted exactly into the **even** rooms, one each, with
nobody left over and no even room empty. So are there more counting numbers, or not?

## The idea

### Two ways to compare sizes

There are two ways to tell if two groups are the same size.

**Way 1: count both.** Count the apples, count the oranges, compare the numbers. This is the usual way, but it only
works if you can finish counting. You cannot finish counting the even numbers.

**Way 2: pair them up.** Give every apple an orange partner. If every apple has exactly one orange, and every orange
has exactly one apple, then there are the same number of each, and you never had to count. In level 2 you did this
with children and chairs: if every child sits on a chair and no chair is empty, there are as many chairs as children.

A pairing like this, where everything on one side gets **exactly one** partner on the other side and nothing on
either side is left out, is called a **one-to-one correspondence**. (Say it as "one to one cor-re-spon-dence". It
just means "a perfect pairing".)

Way 2 is actually the older and deeper idea. When you count apples, you are pairing each apple with a word: "one",
"two", "three". Counting **is** pairing. And pairing still works when counting cannot finish.

### Pairing the counting numbers with the even numbers

Pair each counting number with its double:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 456 140" role="img" aria-label="The counting numbers 1 to 7 in a top row, each joined by a line to its double 2, 4, 6 up to 14 in a bottom row; the rows go on forever">
  <text x="10" y="34" font-size="12" text-anchor="start" fill="currentColor">counting</text>
  <text x="10" y="114" font-size="12" text-anchor="start" fill="currentColor">even</text>
  <circle cx="110" cy="30" r="15" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
  <text x="110" y="34" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <line x1="110" y1="46" x2="110" y2="94" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="110" cy="110" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <text x="110" y="114" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <circle cx="158" cy="30" r="15" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
  <text x="158" y="34" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <line x1="158" y1="46" x2="158" y2="94" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="158" cy="110" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <text x="158" y="114" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <circle cx="206" cy="30" r="15" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
  <text x="206" y="34" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <line x1="206" y1="46" x2="206" y2="94" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="206" cy="110" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <text x="206" y="114" font-size="12" text-anchor="middle" fill="currentColor">6</text>
  <circle cx="254" cy="30" r="15" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
  <text x="254" y="34" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <line x1="254" y1="46" x2="254" y2="94" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="254" cy="110" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <text x="254" y="114" font-size="12" text-anchor="middle" fill="currentColor">8</text>
  <circle cx="302" cy="30" r="15" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
  <text x="302" y="34" font-size="12" text-anchor="middle" fill="currentColor">5</text>
  <line x1="302" y1="46" x2="302" y2="94" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="302" cy="110" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <text x="302" y="114" font-size="12" text-anchor="middle" fill="currentColor">10</text>
  <circle cx="350" cy="30" r="15" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
  <text x="350" y="34" font-size="12" text-anchor="middle" fill="currentColor">6</text>
  <line x1="350" y1="46" x2="350" y2="94" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="350" cy="110" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <text x="350" y="114" font-size="12" text-anchor="middle" fill="currentColor">12</text>
  <circle cx="398" cy="30" r="15" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
  <text x="398" y="34" font-size="12" text-anchor="middle" fill="currentColor">7</text>
  <line x1="398" y1="46" x2="398" y2="94" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="398" cy="110" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <text x="398" y="114" font-size="12" text-anchor="middle" fill="currentColor">14</text>
  <text x="432" y="34" font-size="16" text-anchor="middle" fill="currentColor">...</text>
  <text x="432" y="114" font-size="16" text-anchor="middle" fill="currentColor">...</text>
</svg>
</div>

The rule is: $n$ is paired with $2n$. Check it is perfect.

- **Every counting number has a partner.** You can double any number, and the double is even.
- **Every even number has a partner.** Halve it: 18 is paired with 9, 1000 is paired with 500. Halving an even number
  always gives a counting number.
- **Nobody has two partners.** Different numbers have different doubles.

So the pairing is perfect. By Way 2, there are **exactly as many** even numbers as counting numbers, even though the
even numbers are only part of the counting numbers. This is the hotel's doubling trick, seen in a new light.

### Why this feels wrong

With ordinary, finite groups, a part is always smaller than the whole. Take 3 apples from a bowl of 10, and the 7 that
are left can never be paired with the original 10: three apples would have no partner. This is so familiar that it
feels like a law of nature.

But that law was learned from groups that **end**. Infinite groups do not have to obey it. In fact, mathematicians
now use this as the test for infinity. A German mathematician, Richard Dedekind, suggested in 1888:

> A collection is **infinite** if it can be paired perfectly with a part of itself.

A finite collection can never do this. An infinite one always can.

### Galileo's puzzle about squares

About 400 years ago, the Italian scientist Galileo Galilei noticed the same thing with **square numbers**: the numbers
you get by multiplying a number by itself, $1 \times 1 = 1$, $2 \times 2 = 4$, $3 \times 3 = 9$, and so on. He wrote
about it in his book *Two New Sciences* (1638).

On one hand, the squares seem rare. Among the numbers 1 to 100 there are only 10 squares (1, 4, 9, 16, 25, 36, 49, 64,
81, 100). Among 1 to 10,000 there are only 100. The further you go, the more thinly spread they are.

On the other hand, every counting number has its own square, and every square comes from exactly one counting number.
So they pair up perfectly:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 456 140" role="img" aria-label="The counting numbers 1 to 7 in a top row, each joined by a line to its square 1, 4, 9 up to 49 in a bottom row">
  <text x="10" y="34" font-size="12" text-anchor="start" fill="currentColor">counting</text>
  <text x="10" y="114" font-size="12" text-anchor="start" fill="currentColor">squares</text>
  <circle cx="110" cy="30" r="15" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
  <text x="110" y="34" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <line x1="110" y1="46" x2="110" y2="94" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="110" cy="110" r="15" fill="#eea66f" stroke="currentColor" stroke-width="1.2"/>
  <text x="110" y="114" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="158" cy="30" r="15" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
  <text x="158" y="34" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <line x1="158" y1="46" x2="158" y2="94" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="158" cy="110" r="15" fill="#eea66f" stroke="currentColor" stroke-width="1.2"/>
  <text x="158" y="114" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <circle cx="206" cy="30" r="15" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
  <text x="206" y="34" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <line x1="206" y1="46" x2="206" y2="94" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="206" cy="110" r="15" fill="#eea66f" stroke="currentColor" stroke-width="1.2"/>
  <text x="206" y="114" font-size="12" text-anchor="middle" fill="currentColor">9</text>
  <circle cx="254" cy="30" r="15" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
  <text x="254" y="34" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <line x1="254" y1="46" x2="254" y2="94" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="254" cy="110" r="15" fill="#eea66f" stroke="currentColor" stroke-width="1.2"/>
  <text x="254" y="114" font-size="12" text-anchor="middle" fill="currentColor">16</text>
  <circle cx="302" cy="30" r="15" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
  <text x="302" y="34" font-size="12" text-anchor="middle" fill="currentColor">5</text>
  <line x1="302" y1="46" x2="302" y2="94" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="302" cy="110" r="15" fill="#eea66f" stroke="currentColor" stroke-width="1.2"/>
  <text x="302" y="114" font-size="12" text-anchor="middle" fill="currentColor">25</text>
  <circle cx="350" cy="30" r="15" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
  <text x="350" y="34" font-size="12" text-anchor="middle" fill="currentColor">6</text>
  <line x1="350" y1="46" x2="350" y2="94" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="350" cy="110" r="15" fill="#eea66f" stroke="currentColor" stroke-width="1.2"/>
  <text x="350" y="114" font-size="12" text-anchor="middle" fill="currentColor">36</text>
  <circle cx="398" cy="30" r="15" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
  <text x="398" y="34" font-size="12" text-anchor="middle" fill="currentColor">7</text>
  <line x1="398" y1="46" x2="398" y2="94" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="398" cy="110" r="15" fill="#eea66f" stroke="currentColor" stroke-width="1.2"/>
  <text x="398" y="114" font-size="12" text-anchor="middle" fill="currentColor">49</text>
  <text x="432" y="34" font-size="16" text-anchor="middle" fill="currentColor">...</text>
  <text x="432" y="114" font-size="16" text-anchor="middle" fill="currentColor">...</text>
</svg>
</div>

Galileo was puzzled. He decided that words like "more", "fewer" and "equal" simply do not work for infinite
collections. Mathematicians since then, starting with Georg Cantor in the 1870s, chose differently: they kept "the
same size" to mean "can be paired perfectly", and accepted the strange result that a part can be as big as the whole.
That choice turned out to be very useful. In level 7 you will see it shows that some infinities really are **bigger**
than others.

### "Spread thinly" and "how many" are different questions

The squares are spread thinly; the even numbers are spread at every other number. Both are true. But how thinly spread
something is answers a different question from how many there are altogether. Think of two endless streets: one has a
house every 10 metres, the other a house every 1000 metres. The second street's houses are much more spread out, yet
both streets have infinitely many houses, and you could pair house 1 with house 1, house 2 with house 2, and so on.

## Worked examples

**1. Multiples of 10.** Pair the counting numbers with the multiples of 10 (10, 20, 30, ...). What is the partner of
7? Which counting number is paired with 250?

- The rule: $n$ is paired with $10n$.
- 7 is paired with $10 \times 7 = 70$.
- 250 is paired with the $n$ where $10n = 250$, so $n = 25$.
- Check it is perfect: every $n$ has a multiple $10n$, every multiple of 10 divides by 10 to give one counting number,
  and different numbers have different multiples. So there are as many multiples of 10 as counting numbers.

**2. Adding zero.** Pair the counting numbers 1, 2, 3, ... with the numbers 0, 1, 2, 3, ... (which have one extra
number, 0).

- Pair $n$ with $n - 1$: 1 with 0, 2 with 1, 3 with 2, and so on.
- Every counting number has one partner, and every number 0, 1, 2, ... is somebody's partner (0 is paired with 1, and
  any other number $m$ is paired with $m + 1$).
- So adding one extra number does not make the collection bigger. This is lesson 1's hotel trick in disguise, run
  backwards.

**3. The 100th square.** Using Galileo's pairing, what is the partner of 100? Which counting number is paired with
2500?

- 100 is paired with $100 \times 100 = 10000$.
- 2500 is paired with the number that multiplied by itself gives 2500. Since $50 \times 50 = 2500$, the partner is 50.

**4. A bad pairing does not prove anything.** Someone pairs each counting number with **itself**, but only if it is
even: 2 with 2, 4 with 4, 6 with 6. Then 1, 3, 5, ... have no partner. They say: "See, the counting numbers win, the
odd ones are left over."

- This pairing is not perfect, so it tells us nothing about which group is bigger.
- For infinite groups you must ask: is there **some** perfect pairing? There is ($n$ with $2n$). So they are the same
  size.
- For finite groups this problem never comes up: if one pairing leaves things over, every pairing does.

## Try it

1. Pair the counting numbers with the odd numbers 1, 3, 5, 7, ... Give a rule. What is the partner of 6? Which counting
   number is paired with 31?
2. Pair the counting numbers with the multiples of 1000. What is paired with 4? What is paired with 70000?
3. How many square numbers are there from 1 to 400? From 1 to 1,000,000?
4. Pair the counting numbers with the numbers 5, 6, 7, 8, ... (start at 5). Give a rule.
5. Pair the even numbers 2, 4, 6, ... with the multiples of 3: 3, 6, 9, ... Give a rule.
6. A friend says: "There are more counting numbers than square numbers, because 2 and 3 are not squares." Explain
   kindly what is wrong with this argument.
7. (Harder) Can you perfectly pair the numbers 1 to 10 with the numbers 1 to 9? Explain why this is different from
   the infinite case.

??? note "Answers"
    1. Pair $n$ with $2n - 1$ (the hotel's bus rule). 6 is paired with $2 \times 6 - 1 = 11$. 31 is paired with the
       $n$ where $2n - 1 = 31$, so $2n = 32$ and $n = 16$.
    2. Pair $n$ with $1000n$. 4 is paired with 4000. 70000 is paired with $70000 \div 1000 = 70$.
    3. From 1 to 400: $20 \times 20 = 400$, so the squares are $1 \times 1$ up to $20 \times 20$: **20** squares. From
       1 to 1,000,000: $1000 \times 1000 = 1000000$, so **1000** squares. Very thinly spread, but they never run out.
    4. Pair $n$ with $n + 4$: 1 with 5, 2 with 6, 3 with 7. Every number from 5 up is $n + 4$ for exactly one counting
       number $n$ (take away 4).
    5. Pair $2k$ with $3k$: 2 with 3, 4 with 6, 6 with 9, 8 with 12. (Halve the even number, then multiply by 3.)
       Going back, a multiple of 3 is divided by 3, then doubled.
    6. The friend has found one pairing (each square with itself) that leaves numbers out. But for infinite groups
       that proves nothing. Galileo's pairing, $n$ with $n \times n$, leaves nothing out, so the two groups are the
       same size.
    7. **No.** However you pair them, after giving each of 1 to 9 a partner from the first group, one number from 1
       to 10 is left without a partner, since 10 things cannot fit into 9 places one each. With finite groups, a
       part really is smaller. Only infinite groups can match a part of themselves.

## Common mistake

**Using "contains more things" to mean "is bigger".** The counting numbers contain every even number and also the odd
ones, so it seems they must be bigger. For finite groups that reasoning is right. For infinite groups it is not: a
group can contain another, with lots to spare, and still be the same size. In this subject, "same size" always means
"can be paired perfectly".

**Stopping after one failed pairing.** If one pairing leaves something out, try another. Two infinite groups are the
same size as soon as **one** perfect pairing exists.

## Where it leads

- Back: [A bus of infinitely many guests](02-bus-of-guests.md) · Next: [Numbers between numbers](04-numbers-between.md).
- [Level 3 page](index.md) · [Infinity topic page](../index.md)
- Square numbers have their own lesson in [Patterns: square numbers](../../patterns/level-3/02-square-numbers.md).
- Pairing is the start of counting: see [Counting](../../counting/index.md). Sets and one-to-one pairings are written
  carefully in [Logic level 5](../../logic/level-5/index.md).
- Is **every** infinite collection the same size as the counting numbers? Level 6 lists many that are, and level 7
  proves that the decimals are not.
