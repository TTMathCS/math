---
title: "Sorting circles"
---

# Sorting circles

*Logic and puzzles · level 2, lesson 2 of 6*

## A question to start

Ten children in a class have a pet. Every one of them has a dog, or a cat, or both.

The teacher asks: "Who has a dog?" **8** hands go up. "Who has a cat?" **5** hands go up.

But 8 and 5 make 13. There are only 10 children! Did somebody put their hand up twice? Is the teacher's counting
wrong? Or is something else going on? How many children have **both** a dog and a cat?

## The idea

### Two hoops on the floor

Put two hoops on the floor so that they **overlap**, like this. One hoop is for things that are **even**. The other is
for things that are **more than 10**. Now sort the numbers 1 to 20.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 250" role="img" aria-label="Two overlapping hoops, even and more than 10, with the numbers 1 to 20. Even only: 2, 4, 6, 8, 10. Both: 12, 14, 16, 18, 20. More than 10 only: 11, 13, 15, 17, 19. Outside: 1, 3, 5, 7, 9.">
  <rect x="5" y="25" width="410" height="220" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="160" cy="135" r="92" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/>
  <circle cx="260" cy="135" r="92" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/>
  <text x="130" y="18" font-size="13" text-anchor="middle" fill="currentColor">even</text>
  <text x="290" y="18" font-size="13" text-anchor="middle" fill="currentColor">more than 10</text>
  <text x="119" y="123" font-size="14" text-anchor="middle" fill="currentColor">2</text>
  <text x="93" y="145" font-size="14" text-anchor="middle" fill="currentColor">4</text>
  <text x="119" y="145" font-size="14" text-anchor="middle" fill="currentColor">6</text>
  <text x="145" y="145" font-size="14" text-anchor="middle" fill="currentColor">8</text>
  <text x="119" y="167" font-size="14" text-anchor="middle" fill="currentColor">10</text>
  <text x="197" y="123" font-size="14" text-anchor="middle" fill="currentColor">12</text>
  <text x="223" y="123" font-size="14" text-anchor="middle" fill="currentColor">14</text>
  <text x="197" y="145" font-size="14" text-anchor="middle" fill="currentColor">16</text>
  <text x="223" y="145" font-size="14" text-anchor="middle" fill="currentColor">18</text>
  <text x="197" y="167" font-size="14" text-anchor="middle" fill="currentColor">20</text>
  <text x="301" y="123" font-size="14" text-anchor="middle" fill="currentColor">11</text>
  <text x="275" y="145" font-size="14" text-anchor="middle" fill="currentColor">13</text>
  <text x="301" y="145" font-size="14" text-anchor="middle" fill="currentColor">15</text>
  <text x="327" y="145" font-size="14" text-anchor="middle" fill="currentColor">17</text>
  <text x="301" y="167" font-size="14" text-anchor="middle" fill="currentColor">19</text>
  <text x="67" y="211" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <text x="67" y="233" font-size="14" text-anchor="middle" fill="currentColor">3</text>
  <text x="93" y="233" font-size="14" text-anchor="middle" fill="currentColor">5</text>
  <text x="327" y="233" font-size="14" text-anchor="middle" fill="currentColor">7</text>
  <text x="353" y="233" font-size="14" text-anchor="middle" fill="currentColor">9</text>
</svg>
</div>

Where does each number go?

- **12** is even, **and** it is more than 10. It belongs in **both** hoops. So it goes in the part where the hoops
  overlap: the middle.
- **4** is even, but it is **not** more than 10. It goes in the "even" hoop only, in the part that is not shared.
- **15** is more than 10, but it is **not** even. It goes in the "more than 10" hoop only.
- **7** is not even and not more than 10. It goes **outside** both hoops.

A picture like this is called a **Venn diagram**, after John Venn, an English mathematician who wrote about these
pictures in 1880. Many people just call them sorting circles.

### Four places to go

Two overlapping hoops make **four** places on the floor:

1. inside the left hoop only;
2. inside both hoops (the overlap in the middle);
3. inside the right hoop only;
4. outside both hoops.

Every number goes in exactly one of these four places. In the picture, each place got 5 numbers:

- even, not more than 10: 2, 4, 6, 8, 10;
- both: 12, 14, 16, 18, 20;
- more than 10, not even: 11, 13, 15, 17, 19;
- neither: 1, 3, 5, 7, 9.

5 and 5 and 5 and 5 make 20. Every number from 1 to 20 is there, once.

### It is the sorting mat again

Does "four places" sound familiar? In level 1 you used a **sorting mat** with two questions and four boxes. Sorting
circles are the same idea, drawn a different way.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 585 185" role="img" aria-label="A sorting mat with four boxes next to two overlapping hoops. The mat box yes-yes matches the overlap, yes-no matches left only, no-yes matches right only, no-no matches outside.">
  <text x="90" y="20" font-size="13" text-anchor="middle" fill="currentColor">yes</text>
  <text x="180" y="20" font-size="13" text-anchor="middle" fill="currentColor">no</text>
  <text x="37" y="65" font-size="13" text-anchor="end" fill="currentColor">yes</text>
  <text x="37" y="125" font-size="13" text-anchor="end" fill="currentColor">no</text>
  <rect x="45" y="30" width="180" height="120" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="135" y1="30" x2="135" y2="150" stroke="currentColor" stroke-width="2"/>
  <line x1="45" y1="90" x2="225" y2="90" stroke="currentColor" stroke-width="2"/>
  <text x="90" y="65" font-size="13" text-anchor="middle" fill="currentColor">both</text>
  <text x="180" y="65" font-size="13" text-anchor="middle" fill="currentColor">left only</text>
  <text x="90" y="125" font-size="13" text-anchor="middle" fill="currentColor">right only</text>
  <text x="180" y="125" font-size="13" text-anchor="middle" fill="currentColor">neither</text>
  <text x="22" y="22" font-size="12" text-anchor="middle" fill="currentColor">left?</text>
  <text x="135" y="10" font-size="12" text-anchor="middle" fill="currentColor">right?</text>
<g transform="translate(255,0)">
  <rect x="5" y="25" width="320" height="150" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="120" cy="100" r="70" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/>
  <circle cx="210" cy="100" r="70" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/>
  <text x="90" y="18" font-size="13" text-anchor="middle" fill="currentColor">left</text>
  <text x="240" y="18" font-size="13" text-anchor="middle" fill="currentColor">right</text>
  <text x="95" y="99" font-size="11" text-anchor="middle" fill="currentColor">left only</text>
  <text x="155" y="99" font-size="11" text-anchor="middle" fill="currentColor">both</text>
  <text x="235" y="99" font-size="11" text-anchor="middle" fill="currentColor">right only</text>
  <text x="35" y="163" font-size="11" text-anchor="middle" fill="currentColor">neither</text>
</g>
</svg>
</div>

The overlap is the "yes, yes" box. "Left only" is "yes, no". "Right only" is "no, yes". Outside is "no, no". Same four
boxes, same answers. The hoops just make it easier to see which things share **both** properties: they sit together
in the middle.

### The whole hoop, or just one part?

This is the most important thing to be careful about. "How many numbers are **in the even hoop**?" means the **whole**
hoop, including the overlap.

- In the even hoop: 2, 4, 6, 8, 10 (left part) **and** 12, 14, 16, 18, 20 (overlap). That is **10** numbers.
- In the even hoop **only**: just the left part, **5** numbers.

The overlap belongs to **both** hoops at once. It is counted when you count the left hoop, and counted again when you
count the right hoop.

### Solving the pet puzzle

Now we can understand the question at the start. Draw two hoops: "has a dog" and "has a cat". Every child has at
least one pet, so nobody is outside.

The 8 children with a dog fill the whole dog hoop. The 5 children with a cat fill the whole cat hoop. If nobody had
both, that would be 8 and 5, which is 13 children. But there are only **10**. So **3** children got counted twice:
once in the dog hoop and once in the cat hoop. Those 3 are the ones in the overlap. They have **both** pets.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 250" role="img" aria-label="Hoops has a dog and has a cat. Dog only: 5 children. Both: 3. Cat only: 2. Nobody outside.">
  <rect x="5" y="25" width="410" height="220" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="160" cy="135" r="92" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/>
  <circle cx="260" cy="135" r="92" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/>
  <text x="130" y="18" font-size="13" text-anchor="middle" fill="currentColor">has a dog</text>
  <text x="290" y="18" font-size="13" text-anchor="middle" fill="currentColor">has a cat</text>
  <text x="127" y="131" font-size="22" text-anchor="middle" fill="currentColor">5</text>
  <text x="211" y="131" font-size="22" text-anchor="middle" fill="currentColor">3</text>
  <text x="295" y="131" font-size="22" text-anchor="middle" fill="currentColor">2</text>
</svg>
</div>

Check: dog only 5, both 3, cat only 2.

- Dog hoop: 5 and 3 make 8. ✓
- Cat hoop: 3 and 2 make 5. ✓
- Everyone: 5 and 3 and 2 make 10. ✓

So nobody was cheating. The 3 children who have both pets put their hand up both times, and that was correct!

### Hoops that do not overlap

Sometimes nothing can be in both hoops. "Odd" and "even": no number is both. Then you can draw the hoops **apart**,
with no overlap.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 250" role="img" aria-label="Two separate hoops, odd and even, that do not overlap. Odd: 1, 3, 5, 7. Even: 2, 4, 6, 8.">
  <rect x="5" y="25" width="410" height="220" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="110" cy="135" r="80" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/>
  <circle cx="310" cy="135" r="80" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/>
  <text x="110" y="18" font-size="13" text-anchor="middle" fill="currentColor">odd</text>
  <text x="310" y="18" font-size="13" text-anchor="middle" fill="currentColor">even</text>
  <text x="71" y="131" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <text x="99" y="131" font-size="14" text-anchor="middle" fill="currentColor">3</text>
  <text x="71" y="155" font-size="14" text-anchor="middle" fill="currentColor">5</text>
  <text x="99" y="155" font-size="14" text-anchor="middle" fill="currentColor">7</text>
  <text x="323" y="131" font-size="14" text-anchor="middle" fill="currentColor">2</text>
  <text x="351" y="131" font-size="14" text-anchor="middle" fill="currentColor">4</text>
  <text x="323" y="155" font-size="14" text-anchor="middle" fill="currentColor">6</text>
  <text x="351" y="155" font-size="14" text-anchor="middle" fill="currentColor">8</text>
</svg>
</div>

(If you still draw them overlapping, that is fine too. The middle will just be **empty**, like an empty box on the
sorting mat.)

### A hoop inside a hoop

Sometimes everything in one hoop is also in the other. Every square has 4 sides. So the "squares" hoop sits completely
**inside** the "has 4 sides" hoop.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 240" role="img" aria-label="A small hoop, squares, drawn completely inside a bigger hoop, has 4 sides. A square is in the small hoop. A long rectangle is in the big hoop but not the small one. A triangle and a circle are outside both.">
  <rect x="5" y="10" width="410" height="220" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="200" cy="120" rx="130" ry="95" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/>
  <circle cx="240" cy="125" r="55" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <text x="165" y="65" font-size="13" text-anchor="middle" fill="currentColor">has 4 sides</text>
  <text x="240" y="95" font-size="13" text-anchor="middle" fill="currentColor">squares</text>
  <rect x="224" y="119" width="32" height="32" fill="#7ccf9a" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <rect x="95" y="110" width="50" height="26" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <text x="120" y="155" font-size="11" text-anchor="middle" fill="currentColor">rectangle</text>
  <polygon points="370,44 387.6,76 352.4,76" fill="#7ccf9a" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="370" cy="180" r="18" fill="#7ccf9a" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
</svg>
</div>

A rectangle that is not a square goes in the big hoop, but not in the small one. A triangle and a circle go outside
both. And nothing can be in the "squares" hoop but outside the "4 sides" hoop: there is no square without 4 sides.

## Worked examples

**Example 1. Sort 1 to 12.** Hoops: "even" and "in the count by 3s" (3, 6, 9, 12, ...).

1. Even numbers: 2, 4, 6, 8, 10, 12.
2. Count by 3s: 3, 6, 9, 12.
3. In **both** lists: 6 and 12. They go in the overlap.
4. Even only: 2, 4, 8, 10. Threes only: 3, 9.
5. Neither: 1, 5, 7, 11.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 250" role="img" aria-label="Hoops even and in the count by 3s for the numbers 1 to 12. Even only: 2, 4, 8, 10. Both: 6, 12. Threes only: 3, 9. Outside: 1, 5, 7, 11.">
  <rect x="5" y="25" width="410" height="220" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="160" cy="135" r="92" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/>
  <circle cx="260" cy="135" r="92" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/>
  <text x="130" y="18" font-size="13" text-anchor="middle" fill="currentColor">even</text>
  <text x="290" y="18" font-size="13" text-anchor="middle" fill="currentColor">count by 3s</text>
  <text x="99" y="131" font-size="14" text-anchor="middle" fill="currentColor">2</text>
  <text x="127" y="131" font-size="14" text-anchor="middle" fill="currentColor">4</text>
  <text x="99" y="155" font-size="14" text-anchor="middle" fill="currentColor">8</text>
  <text x="127" y="155" font-size="14" text-anchor="middle" fill="currentColor">10</text>
  <text x="211" y="131" font-size="14" text-anchor="middle" fill="currentColor">6</text>
  <text x="211" y="155" font-size="14" text-anchor="middle" fill="currentColor">12</text>
  <text x="295" y="131" font-size="14" text-anchor="middle" fill="currentColor">3</text>
  <text x="295" y="155" font-size="14" text-anchor="middle" fill="currentColor">9</text>
  <text x="71" y="227" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <text x="99" y="227" font-size="14" text-anchor="middle" fill="currentColor">5</text>
  <text x="323" y="227" font-size="14" text-anchor="middle" fill="currentColor">7</text>
  <text x="351" y="227" font-size="14" text-anchor="middle" fill="currentColor">11</text>
</svg>
</div>

Check: 4 and 2 and 2 and 4 make 12. ✓

**Example 2. Find the labels.** Someone sorted some numbers, but the labels fell off.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 250" role="img" aria-label="Two hoops with missing labels. Left only: 1, 3, 7, 9. Both: 5, 15. Right only: 10, 20. Outside: 2, 4, 6.">
  <rect x="5" y="25" width="410" height="220" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="160" cy="135" r="92" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/>
  <circle cx="260" cy="135" r="92" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/>
  <text x="130" y="18" font-size="13" text-anchor="middle" fill="currentColor">?</text>
  <text x="290" y="18" font-size="13" text-anchor="middle" fill="currentColor">?</text>
  <text x="99" y="131" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <text x="127" y="131" font-size="14" text-anchor="middle" fill="currentColor">3</text>
  <text x="99" y="155" font-size="14" text-anchor="middle" fill="currentColor">7</text>
  <text x="127" y="155" font-size="14" text-anchor="middle" fill="currentColor">9</text>
  <text x="211" y="131" font-size="14" text-anchor="middle" fill="currentColor">5</text>
  <text x="211" y="155" font-size="14" text-anchor="middle" fill="currentColor">15</text>
  <text x="295" y="131" font-size="14" text-anchor="middle" fill="currentColor">10</text>
  <text x="295" y="155" font-size="14" text-anchor="middle" fill="currentColor">20</text>
  <text x="71" y="227" font-size="14" text-anchor="middle" fill="currentColor">2</text>
  <text x="99" y="227" font-size="14" text-anchor="middle" fill="currentColor">4</text>
  <text x="323" y="227" font-size="14" text-anchor="middle" fill="currentColor">6</text>
</svg>
</div>

1. Look at the left hoop (both parts): 1, 3, 7, 9, 5, 15. All **odd**.
2. Look at the right hoop (both parts): 5, 15, 10, 20. All in the count by **5s**.
3. Check the overlap: 5 and 15 are odd **and** in the count by 5s. ✓
4. Check the outside: 2, 4, 6 are not odd and not in the count by 5s. ✓

Labels: left "odd", right "in the count by 5s".

**Example 3. Counting with an overlap.** In a group of 12 friends, 7 can swim and 6 can ride a bike. 2 friends can do
neither. How many can do both?

1. 12 friends, 2 outside both hoops. So **10** friends are inside at least one hoop.
2. Count the two hoops: 7 and 6 make 13.
3. But only 10 friends are inside. So 13 take away 10 is **3** friends who were counted twice. They can do **both**.
4. Fill in: swim only 7 take away 3 is 4. Bike only 6 take away 3 is 3. Both 3. Neither 2.

Check: 4 and 3 and 3 and 2 make 12. ✓ Swim hoop: 4 and 3 make 7. ✓ Bike hoop: 3 and 3 make 6. ✓

## Try it

1. Hoops: "has wheels" and "has an engine". Where do these go: car, bike, boat, skateboard, plane, horse?
2. Hoops: "even" and "less than 6". Sort the numbers 1 to 10.
3. In question 2, how many numbers are in the "even" hoop (the whole hoop)? How many are in the "even" hoop **only**?
4. Hoops: "has 3 sides" and "has 4 sides". Can anything go in the middle? How would you draw the hoops?
5. In a class of 20, 12 like apples and 10 like bananas. Everybody likes at least one. How many like both?
6. Draw hoops for "animals" and "dogs". Which hoop goes inside which?
7. Hoops: "in the count by 2s" and "in the count by 5s". Sort 1 to 20. What do the numbers in the middle have in
   common?

??? note "Answers"
    1. Both (wheels and engine): car, plane. Wheels only: bike, skateboard. Engine only: boat (most boats with an
       engine have no wheels). Neither: horse.
    2. Both (even and less than 6): 2, 4. Even only: 6, 8, 10. Less than 6 only: 1, 3, 5. Neither: 7, 9. Check: 2 and
       3 and 3 and 2 make 10. ✓
    3. The whole even hoop: 2, 4, 6, 8, 10, so **5**. Even only: 6, 8, 10, so **3**.
    4. Nothing can have 3 sides **and** 4 sides. The middle is empty, so you can draw the two hoops **apart**.
    5. 12 and 10 make 22, but there are only 20 children. So 22 take away 20 is **2** children counted twice. **2** like
       both. (Apples only 10, bananas only 8, both 2: 10 and 8 and 2 make 20. ✓)
    6. The "dogs" hoop goes **inside** the "animals" hoop, because every dog is an animal.
    7. Count by 2s: 2, 4, 6, ..., 20. Count by 5s: 5, 10, 15, 20. Middle: **10 and 20**. 2s only: 2, 4, 6, 8, 12, 14,
       16, 18. 5s only: 5, 15. Neither: 1, 3, 7, 9, 11, 13, 17, 19. The middle numbers are in the count by **10s**.

## Common mistake

**Putting a thing in both hoops, but not in the middle.** If 12 is even and more than 10, some people write 12 in the
left hoop **and** write it again in the right hoop. Write it **once**, in the overlap. The overlap is inside both
hoops at the same time.

**Forgetting the overlap when you count.** "How many are in the even hoop?" includes the middle. "How many are even
only?" does not. Read the question carefully.

## Where it leads

- Previous lesson: [Always, sometimes, never](01-always-sometimes-never.md). Next lesson: [4-by-4 Sudoku](03-four-by-four-sudoku.md).
- This level: [Level 2: Rules and puzzles](index.md). The whole topic: [Logic and puzzles](../index.md).
- The same four boxes as a sorting mat: [Sorting by two rules](../level-1/02-sorting-two-rules.md).
- Counting with an overlap ("add the hoops, take away the ones counted twice") grows into a formula in
  [Counting](../../counting/index.md).
- Count by 2s and count by 5s: [Multiples](../../number-theory/level-2/02-multiples.md) in Number theory.
- In level 5 these hoops get names: sets, union and intersection: [Union, intersection, complement](../level-5/02-union-intersection.md).
