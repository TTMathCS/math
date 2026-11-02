---
title: "Patterns that go on forever"
---

# Patterns that go on forever

*Infinity and strange math · level 2, lesson 3 of 6*

## A question to start

Here are two lists of numbers. Both go on forever.

> **Counting numbers:** 1, 2, 3, 4, 5, 6, 7, 8, ...
>
> **Even numbers:** 2, 4, 6, 8, 10, 12, 14, 16, ...

Which list has **more** numbers in it? Or do they have the same amount?

Most people say straight away: "The counting numbers! They have all the even numbers, **and** all the odd numbers
too. So there must be twice as many." That is a very good reason. But in this lesson you will find an equally good
reason for a **different** answer. Mathematicians argued about this puzzle for hundreds of years.

## The idea

### Two lists that never end

The **counting numbers** start at 1 and go up by one: 1, 2, 3, 4, ... As you saw in
[level 1](../level-1/01-biggest-number-game.md), they never end, because there is always one more.

The **even numbers** are the numbers you say when you count in twos: 2, 4, 6, 8, ... They are the numbers that can be
shared fairly between two people, with nothing left over. They never end either: after any even number, add two, and
you get the next even number.

### First way of thinking: look up to a stopping point

Let us look at the counting numbers **up to 10**, and pick out the even ones.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 70" role="img" aria-label="The numbers 1 to 10 in a row; the even numbers 2, 4, 6, 8, 10 are coloured">
  <g stroke="currentColor" stroke-width="2">
    <rect x="10" y="15" width="34" height="34" fill="none"/><rect x="46" y="15" width="34" height="34" fill="#eea66f"/>
    <rect x="82" y="15" width="34" height="34" fill="none"/><rect x="118" y="15" width="34" height="34" fill="#eea66f"/>
    <rect x="154" y="15" width="34" height="34" fill="none"/><rect x="190" y="15" width="34" height="34" fill="#eea66f"/>
    <rect x="226" y="15" width="34" height="34" fill="none"/><rect x="262" y="15" width="34" height="34" fill="#eea66f"/>
    <rect x="298" y="15" width="34" height="34" fill="none"/><rect x="334" y="15" width="34" height="34" fill="#eea66f"/>
  </g>
  <g font-size="15" text-anchor="middle" fill="currentColor">
    <text x="27" y="38">1</text><text x="63" y="38">2</text><text x="99" y="38">3</text><text x="135" y="38">4</text>
    <text x="171" y="38">5</text><text x="207" y="38">6</text><text x="243" y="38">7</text><text x="279" y="38">8</text>
    <text x="315" y="38">9</text><text x="351" y="38">10</text>
  </g>
</svg>
</div>

Up to 10, there are 10 counting numbers and **5** even numbers. Half as many.

Up to 20, there are 20 counting numbers and 10 even numbers. Up to 100, there are 100 counting numbers and 50 even
numbers. Wherever you stop, the even numbers are **half** of the counting numbers. So it seems that there are fewer
even numbers.

### Second way of thinking: matching

In the [last lesson](02-matching-without-counting.md) you learned the fair way to compare two groups without counting:
**match them in pairs**, one each, and look for leftovers.

So let us match. Give each counting number a partner: its **double** (the number plus itself).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 130" role="img" aria-label="The counting numbers 1 to 6 in a top row, each joined by a line to its double: 2, 4, 6, 8, 10, 12, in a bottom row, then dots">
  <g fill="#9cc9ea" stroke="currentColor" stroke-width="2">
    <circle cx="35" cy="28" r="16"/><circle cx="90" cy="28" r="16"/><circle cx="145" cy="28" r="16"/>
    <circle cx="200" cy="28" r="16"/><circle cx="255" cy="28" r="16"/><circle cx="310" cy="28" r="16"/>
  </g>
  <g fill="#eea66f" stroke="currentColor" stroke-width="2">
    <circle cx="35" cy="100" r="16"/><circle cx="90" cy="100" r="16"/><circle cx="145" cy="100" r="16"/>
    <circle cx="200" cy="100" r="16"/><circle cx="255" cy="100" r="16"/><circle cx="310" cy="100" r="16"/>
  </g>
  <g stroke="currentColor" stroke-width="2">
    <line x1="35" y1="44" x2="35" y2="84"/><line x1="90" y1="44" x2="90" y2="84"/><line x1="145" y1="44" x2="145" y2="84"/>
    <line x1="200" y1="44" x2="200" y2="84"/><line x1="255" y1="44" x2="255" y2="84"/><line x1="310" y1="44" x2="310" y2="84"/>
  </g>
  <g font-size="14" text-anchor="middle" fill="currentColor">
    <text x="35" y="33">1</text><text x="90" y="33">2</text><text x="145" y="33">3</text><text x="200" y="33">4</text>
    <text x="255" y="33">5</text><text x="310" y="33">6</text>
    <text x="35" y="105">2</text><text x="90" y="105">4</text><text x="145" y="105">6</text><text x="200" y="105">8</text>
    <text x="255" y="105">10</text><text x="310" y="105">12</text>
    <text x="355" y="33">...</text><text x="355" y="105">...</text>
  </g>
</svg>
</div>

1 goes with 2. 2 goes with 4. 3 goes with 6. 4 goes with 8. And so on, forever. Now check the two matching rules.

- **Does every counting number get a partner?** Yes. Every counting number has a double, and the double is always an
  even number. 7 gets 14. 100 gets 200. A million gets two million.
- **Does every even number get a partner?** Yes. Take any even number, and **halve** it: that is its partner. 14 is
  the partner of 7. 50 is the partner of 25. You can always halve an even number, because even numbers share fairly
  into two.
- **Does anyone share?** No. Two different counting numbers have two different doubles.

No leftovers on either side! By the matching rule, the two lists are **the same size**.

### Two good answers. Which is right?

So we have two ways of thinking that seem to give two different answers:

1. Stop anywhere, and the even numbers are **half** as many.
2. Match the whole lists, and they are **the same size**.

Here is the key. The first way **stops**. It looks at the numbers up to 10, or up to 100, or up to a million. But the
lists do not stop! Up to any stopping point is only a **part** of each list. The question was about the **whole**
lists, forever, and the first way never looks at the whole lists.

The second way looks at the whole lists at once. The matching rule "double it" works for **every** number, without
stopping. So it really does compare the whole endless lists.

Mathematicians decided that **matching is the fair test** for the size of endless groups too. So the answer they give
is: **there are just as many even numbers as counting numbers**.

### A part as big as the whole

This is the strange thing at the heart of infinity. For groups that **end**, a part is always smaller than the whole.
Take some apples out of a bowl, and you can never match the apples left with all the apples you started with: some
would be left without partners.

For groups that **never end**, this rule breaks. The even numbers are only **part** of the counting numbers (the odd
numbers are missing!) and yet they match the whole list perfectly.

People noticed this a long time ago. Almost 400 years ago the Italian scientist **Galileo** thought about the square
numbers, 1, 4, 9, 16, ..., and saw the same puzzle. He decided that words like "more" and "the same" just do not work
for endless groups. Much later, in the 1870s and after, the German mathematician **Georg Cantor** took the other road:
he said matching **does** work for endless groups, and he found that it leads to some of the most beautiful
surprises in mathematics. You will meet them in later levels.

## Worked examples

**1. Counting numbers and tens.** Match the counting numbers with the tens: 10, 20, 30, 40, ...

Rule: **times ten**. 1 goes with 10, 2 with 20, 3 with 30, and so on. Every counting number has a partner. Every ten
has a partner too: 70 goes with 7, 250 goes with 25. Nobody is left over. So there are **as many tens as counting
numbers**, even though only one counting number in ten is a ten!

**2. Counting numbers and odd numbers.** The odd numbers are 1, 3, 5, 7, 9, ... Find a matching.

Rule: **double it, then take away one**. 1 goes with 1 (double 1 is 2, take one away: 1). 2 goes with 3. 3 goes with
5. 4 goes with 7. 10 goes with 19. Going back the other way: to find the partner of an odd number, **add one, then
halve**. The partner of 19 is: 19 and one more is 20, half of 20 is 10. So every odd number has a partner too.
**As many odd numbers as counting numbers.**

**3. Leaving out the number 1.** Match the counting numbers 1, 2, 3, ... with the numbers 2, 3, 4, ... (all of them
except 1).

Rule: **add one**. 1 goes with 2, 2 goes with 3, 3 goes with 4. Every number in the second list is someone's partner:
the partner of 50 is 49. So taking away one number from an endless list does **not** make it smaller. Try that with a
bag of 5 marbles: take one out, and the 4 left can never match the 5.

**4. Find the partner.** In the doubling matching, what is the partner of 35? Double it: **70**. Which counting number
has 48 as its partner? Halve it: **24**.

## Try it

1. In the doubling matching, what is the partner of 9? Of 50?
2. In the doubling matching, which counting number is matched with 36? With 100?
3. Up to 20, how many even numbers are there? How many counting numbers?
4. Match the counting numbers with the numbers you say counting in fives: 5, 10, 15, 20, ... What is the partner of 6?
   Which counting number is matched with 45?
5. In the "double it, take away one" matching, what is the partner of 5? Which counting number is matched with 21?
6. Sam says: "Up to 100 there are 50 even numbers and 100 counting numbers, so there are fewer even numbers." What is
   the problem with Sam's reason?
7. You have a bag of 10 marbles. You take out 2. Can you match the 8 left with the 10 you started with? Why is this
   different from the endless lists?

??? note "Answers"
    1. Double 9 is **18**. Double 50 is **100**.
    2. Halve 36: **18**. Halve 100: **50**.
    3. Up to 20 there are **10** even numbers (2, 4, 6, 8, 10, 12, 14, 16, 18, 20) and **20** counting numbers.
    4. Rule: **times five**. The partner of 6 is $6 \times 5 = 30$. 45 is matched with **9**, because
       $9 \times 5 = 45$.
    5. Double 5 is 10, take away one: **9**. For 21: add one to get 22, halve it to get **11**. Check: double 11 is
       22, take away one is 21.
    6. Sam **stops at 100**. That only compares parts of the lists. The lists never stop, so we must compare the whole
       lists, and the doubling matching shows they match with nothing left over.
    7. **No.** Match 8 marbles with 8 of the 10, and **2** of the 10 are left without partners. For groups that end, a
       part is always smaller than the whole. Endless lists are different: there is always another number further
       along to be a partner, so nothing has to be left over.

## Common mistake

**Thinking "part of" always means "fewer than".** That is true for groups that end, like marbles in a bag. It is
**not** true for endless lists: the even numbers are part of the counting numbers, but there are just as many of them.

**Giving up after one bad matching.** If you match 1 with 1, 2 with 2, and so on, then only the even counting numbers
find even partners, and the odd ones are left out. That does **not** prove there are more counting numbers. For
endless groups, one bad matching proves nothing; the groups are the same size if **some** matching works perfectly,
and the doubling matching does.

## Where it leads

- Previous lesson: [Matching without counting](02-matching-without-counting.md). Next lesson:
  [Googol and googolplex](04-googol-googolplex.md).
- This level: [Level 2: Strange loops](index.md). The whole topic: [Infinity and strange math](../index.md).
- Even and odd numbers: [Number theory: odd and even](../../number-theory/level-1/02-odd-even-line.md), and counting in
  twos, fives and tens: [Number theory: skip counting](../../number-theory/level-1/04-skip-counting.md) and
  [Multiples](../../number-theory/level-2/02-multiples.md).
- Rules like "double it" and "add one": [Patterns: rules in words](../../patterns/level-2/01-rules-in-words.md).
- In level 3 of this topic, these matchings fill a hotel with infinitely many rooms.
