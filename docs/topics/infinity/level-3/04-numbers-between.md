---
title: "Numbers between numbers"
---

# Numbers between numbers

*Infinity and strange math · level 3, lesson 4 of 6*

## A question to start

What number comes right after 5? Easy: 6. What comes right after 99? 100. Every whole number has a **next** one.

Now a harder question. What fraction comes right after 0? Is it $\frac{1}{10}$? $\frac{1}{100}$? $\frac{1}{1000000}$?
Whatever answer you give, a friend can name a smaller fraction that is still bigger than 0. So which one is "next"?

This lesson shows something surprising: among fractions, **nothing** is ever next to anything else. Between any two
fractions, however close, there is always another one, and so there are infinitely many.

## The idea

### Fractions live on the number line

A **number line** is a straight line with numbers marked on it in order, smaller on the left and bigger on the right.
Whole numbers sit at evenly spaced marks: 0, 1, 2, 3, ... But fractions live there too. The fraction $\frac12$ sits
exactly halfway between 0 and 1. The fraction $\frac14$ sits halfway between 0 and $\frac12$. And $\frac34$ sits
halfway between $\frac12$ and 1.

Between two whole numbers next to each other, like 5 and 6, there is **no** whole number. That is why 6 is the next
whole number after 5. Fractions are different, as we will see.

### Halving forever: no next fraction after 0

Start at 1 and keep halving: $\frac12$, $\frac14$, $\frac18$, $\frac1{16}$, $\frac1{32}$, ... Each one is half as far
from 0 as the one before.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 122" role="img" aria-label="A number line from 0 to 1 with marks at 1/2, 1/4, 1/8, 1/16 and smaller ones crowding towards 0; orange hops show each halving">
  <line x1="30" y1="60" x2="430" y2="60" stroke="currentColor" stroke-width="2"/>
  <line x1="30.0" y1="51" x2="30.0" y2="69" stroke="currentColor" stroke-width="1.5"/>
  <text x="30" y="86" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <line x1="430.0" y1="51" x2="430.0" y2="69" stroke="currentColor" stroke-width="1.5"/>
  <text x="430" y="86" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <line x1="230.0" y1="51" x2="230.0" y2="69" stroke="currentColor" stroke-width="1.5"/>
  <text x="230" y="86" font-size="11" text-anchor="middle" fill="currentColor">1/2</text>
  <line x1="130.0" y1="51" x2="130.0" y2="69" stroke="currentColor" stroke-width="1.5"/>
  <text x="130" y="86" font-size="11" text-anchor="middle" fill="currentColor">1/4</text>
  <line x1="80.0" y1="51" x2="80.0" y2="69" stroke="currentColor" stroke-width="1.5"/>
  <text x="80" y="86" font-size="11" text-anchor="middle" fill="currentColor">1/8</text>
  <line x1="55.0" y1="51" x2="55.0" y2="69" stroke="currentColor" stroke-width="1.5"/>
  <text x="55" y="86" font-size="11" text-anchor="middle" fill="currentColor">1/16</text>
  <line x1="42.5" y1="54" x2="42.5" y2="66" stroke="currentColor" stroke-width="1"/>
  <line x1="36.2" y1="54" x2="36.2" y2="66" stroke="currentColor" stroke-width="1"/>
  <line x1="33.1" y1="54" x2="33.1" y2="66" stroke="currentColor" stroke-width="1"/>
  <path d="M 430.0 50 Q 330.0 -26.0 230.0 50" fill="none" stroke="#eea66f" stroke-width="2"/>
  <path d="M 230.0 50 Q 180.0 9.0 130.0 50" fill="none" stroke="#eea66f" stroke-width="2"/>
  <path d="M 130.0 50 Q 105.0 26.5 80.0 50" fill="none" stroke="#eea66f" stroke-width="2"/>
  <path d="M 80.0 50 Q 67.5 35.2 55.0 50" fill="none" stroke="#eea66f" stroke-width="2"/>
  <text x="230" y="112" font-size="12" text-anchor="middle" fill="currentColor">halve again and again: always another fraction, closer to 0</text>
</svg>
</div>

The marks crowd closer and closer to 0, but none of them ever reaches 0. Halving a fraction that is bigger than 0 gives
a fraction that is still bigger than 0, just smaller.

Now here is the proof that there is no "next" fraction after 0. Suppose someone claims a fraction $f$ is the next one
after 0. Then $f$ is bigger than 0. But half of $f$ is also bigger than 0, and it is smaller than $f$. So half of $f$
sits between 0 and $f$, and $f$ was not next after all. Whatever fraction anyone names, the same trick knocks it out.
So no fraction is the next one after 0.

This kind of argument is called a **proof by contradiction**: you pretend something is true, show that it leads to
nonsense, and conclude that it must be false.

### The average: always a number in between

The halving trick works next to 0. For any two fractions, a different trick works: the **average**. The average of
two numbers is what you get by adding them and dividing by 2. It sits **exactly halfway** between them.

Why exactly halfway? Think of two children standing on a number line, one at 2 and one at 8. They walk towards each
other at the same speed and meet in the middle, at 5. The average of 2 and 8 is $(2 + 8) \div 2 = 10 \div 2 = 5$. The
distance from 2 to 5 is 3, and from 5 to 8 is also 3. So the average is the meeting point in the middle.

The same is true for fractions. Take $\frac13$ and $\frac12$. To add them, write them with the same bottom number
(the **denominator**): $\frac13 = \frac26$ and $\frac12 = \frac36$. Then

$$\frac26 + \frac36 = \frac56, \qquad \frac56 \div 2 = \frac5{12}.$$

So $\frac5{12}$ is exactly halfway between $\frac13$ and $\frac12$. Check with twelfths: $\frac13 = \frac4{12}$ and
$\frac12 = \frac6{12}$, and $\frac5{12}$ sits right between $\frac4{12}$ and $\frac6{12}$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 134" role="img" aria-label="A number line from 1/3 to 1/2; the halfway point 5/12 is marked in orange, and the halfway points 3/8 and 11/24 on either side are marked in green">
  <line x1="30" y1="70" x2="430" y2="70" stroke="currentColor" stroke-width="2"/>
  <circle cx="30.0" cy="70" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
  <text x="30" y="98" font-size="12" text-anchor="middle" fill="currentColor">1/3</text>
  <circle cx="430.0" cy="70" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
  <text x="430" y="98" font-size="12" text-anchor="middle" fill="currentColor">1/2</text>
  <circle cx="230.0" cy="70" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1.2"/>
  <text x="230" y="98" font-size="12" text-anchor="middle" fill="currentColor">5/12</text>
  <circle cx="130.0" cy="70" r="7" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <text x="130" y="98" font-size="12" text-anchor="middle" fill="currentColor">3/8</text>
  <circle cx="330.0" cy="70" r="7" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <text x="330" y="98" font-size="12" text-anchor="middle" fill="currentColor">11/24</text>
  <text x="230" y="30" font-size="12" text-anchor="middle" fill="currentColor">the average of two numbers sits exactly halfway between them</text>
  <text x="230" y="124" font-size="12" text-anchor="middle" fill="currentColor">and then halfway again, on either side, forever</text>
</svg>
</div>

And then you can do it again: between $\frac13$ and $\frac5{12}$ is their average $\frac38$; between $\frac5{12}$ and
$\frac12$ is $\frac{11}{24}$. And again, and again, forever.

### So there are infinitely many in every gap

Put the two ideas together.

- Between **any** two different fractions, the average is another fraction in between.
- Then between the first fraction and the average there is another one, and between those another, without end.

So between any two different fractions there are not just one or two others, but **infinitely many**. Even between
$\frac1{1000}$ and $\frac2{1000}$, which are extremely close, there are infinitely many fractions.

The same holds for decimals that stop, like 0.7 and 0.8: in between are 0.75, 0.71, 0.701, 0.7001, ... A
mathematician says that fractions are **dense**: packed in so tightly that no two of them are next to each other.

### Another way: bigger denominators

There is a second way to find fractions in between, which does not need averages. Take $\frac25$ and $\frac35$. In
fifths there is nothing between them. But change to tenths: $\frac4{10}$ and $\frac6{10}$, and now $\frac5{10}$ is in
between. Change to hundredths: $\frac{40}{100}$ and $\frac{60}{100}$, and now 19 fractions are in between:
$\frac{41}{100}, \frac{42}{100}, \ldots, \frac{59}{100}$. The finer the ruler, the more marks fit in the gap, and you
can always use a finer ruler.

### But dense does not mean "more"

You might think: "With infinitely many fractions squeezed into every tiny gap, there must be far more fractions than
counting numbers." Remember lesson 3: for infinite groups, "more" only means "cannot be paired perfectly". Amazingly,
the fractions **can** be paired perfectly with the counting numbers, by a clever way of listing them. You will see how
in level 6. Being packed tightly and being "more" are different things.

## Worked examples

**1. A fraction between $\frac14$ and $\frac13$.**

- Same denominator: $\frac14 = \frac3{12}$ and $\frac13 = \frac4{12}$. Nothing in twelfths fits between 3 and 4.
- Use the average: $\frac3{12} + \frac4{12} = \frac7{12}$, and half of that is $\frac7{24}$.
- Check with 24ths: $\frac14 = \frac6{24}$, $\frac13 = \frac8{24}$, and $\frac7{24}$ is between them.

**2. Three decimals between 0.5 and 0.6.**

- Write them with an extra place: 0.50 and 0.60. Then 0.51, 0.52, ..., 0.59 are all in between.
- Three of them: 0.52, 0.55, 0.58. (The average is $(0.5 + 0.6) \div 2 = 1.1 \div 2 = 0.55$.)

**3. Knocking out a "next" fraction.** A friend says $\frac1{1000000}$ (one millionth) is the next fraction after 0.

- Half of it is $\frac1{2000000}$, one two-millionth.
- It is bigger than 0 and smaller than one millionth, so it is in between.
- So one millionth is not next. Whatever they try, halving finds a fraction in between.

**4. On Mars?** A Mars rover is driving towards a rock 1 metre away. Each minute it drives half of the distance that
is left: $\frac12$ m, then $\frac14$ m, then $\frac18$ m. After 1 minute it is $\frac12$ m from the rock, after 2
minutes $\frac14$ m, after 10 minutes $\frac1{1024}$ m, which is less than a millimetre. It is always some fraction of
a metre away, never at 0. (Real rovers drive at a steady speed and simply arrive! This is just a picture of halving.)

## Try it

1. Find the average of $\frac14$ and $\frac12$. Check that it is between them.
2. Write three decimals between 2.3 and 2.4.
3. Find a fraction between $\frac37$ and $\frac47$.
4. A friend says $\frac1{50}$ is the next fraction after 0. Find a fraction that proves them wrong.
5. What is the next whole number after 41? Why does the halving trick not work for whole numbers?
6. How many fractions with denominator 100 lie between $\frac3{10}$ and $\frac4{10}$? Name the smallest and the
   largest.
7. (Harder) Here is a strange trick: to find a fraction between $\frac13$ and $\frac12$, add the tops and add the
   bottoms: $\frac{1 + 1}{3 + 2} = \frac25$. Check, using decimals, that $\frac25$ really is between them. Then try
   the trick on $\frac25$ and $\frac12$.

??? note "Answers"
    1. $\frac14 = \frac28$ and $\frac12 = \frac48$. Add: $\frac28 + \frac48 = \frac68$, and half of that is
       $\frac38$. In eighths, $\frac28 < \frac38 < \frac48$, so it is between them.
    2. For example 2.31, 2.35, 2.39. (Any decimal that is 2.3 followed by more digits, not all of them 0,
       works.)
    3. In fourteenths: $\frac37 = \frac6{14}$ and $\frac47 = \frac8{14}$, so $\frac7{14} = \frac12$ is between them.
    4. Half of $\frac1{50}$ is $\frac1{100}$. It is bigger than 0 and smaller than $\frac1{50}$.
    5. 42. Half of a whole number is often not a whole number (half of 1 is $\frac12$), and there is no whole number
       between 41 and 42 at all. Whole numbers have gaps; fractions do not.
    6. $\frac3{10} = \frac{30}{100}$ and $\frac4{10} = \frac{40}{100}$. In between are $\frac{31}{100}$ up to
       $\frac{39}{100}$: **9** fractions. Smallest $\frac{31}{100}$, largest $\frac{39}{100}$.
    7. $\frac13 = 0.333\ldots$, $\frac25 = 0.4$ and $\frac12 = 0.5$, so $\frac25$ is between them. For $\frac25$ and
       $\frac12$: $\frac{2 + 1}{5 + 2} = \frac37$, which is about 0.43, and that is between 0.4 and 0.5. (This
       trick is called the **mediant**. It always lands in between when the fractions are positive, though it is not
       usually the halfway point.)

## Common mistake

**Thinking there is a smallest fraction bigger than 0.** There is no smallest one: halve it and you get a smaller one.
The fractions bigger than 0 get as close to 0 as you like without ever having a first one.

**Adding fractions by adding tops and bottoms when you want the sum.** $\frac13 + \frac12$ is **not** $\frac25$; it
is $\frac56$. The add-tops-and-bottoms trick in question 7 is a fun way to find a fraction in between, but it is not
how you add.

## Where it leads

- Back: [The part can be as big as the whole](03-part-as-big.md) · Next: [Decimals that never stop](05-decimals-never-stop.md).
- [Level 3 page](index.md) · [Infinity topic page](../index.md)
- Fractions on the number line and equal fractions: [Fractions as numbers](../../numbers/level-3/05-fractions-as-numbers.md)
  and [Equivalent fractions](../../numbers/level-3/06-equivalent-fractions.md). Adding fractions: [Numbers level 4](../../numbers/level-4/01-adding-fractions.md).
- Halving forever, added up: [1/2 + 1/4 + 1/8 + ... = 1](../level-4/01-halves-add-to-one.md) in level 4. Listing
  every fraction in one list: level 6.
