---
title: "Sorting by two rules"
---

# Sorting by two rules

*Logic and puzzles · level 1, lesson 2 of 6*

## A question to start

Here are eight shapes. Some are big and some are small. Some are orange and some are not.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 90" role="img" aria-label="Eight shapes: big orange circle, big orange square, big blue triangle, big green square, small orange triangle, small blue circle, small green circle, small blue square.">
  <circle cx="35" cy="45" r="22" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <rect x="70.2" y="25.2" width="39.6" height="39.6" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="145,23 169.2,67 120.8,67" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <rect x="180.2" y="25.2" width="39.6" height="39.6" fill="#7ccf9a" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="255,33 268.2,57 241.8,57" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="310" cy="45" r="12" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="365" cy="45" r="12" fill="#7ccf9a" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <rect x="408" y="33" width="24" height="24" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
</svg>
</div>

Can you find a shape that is **big and orange**? Can you find one that is **small and not orange**? How many
different kinds are there, if you only look at "big or small" and "orange or not orange"?

Have a guess. Then read on: there is a neat way to sort these shapes so that every kind gets its own box.

## The idea

### Two questions instead of one

In the last lesson you sorted things with **one** question, like "Can it fly?" Each thing went into a yes group or a
no group.

Now we ask **two** questions about each thing:

- Question 1: "Is it big?"
- Question 2: "Is it orange?"

Each shape gets two answers. A big orange circle says "yes, yes". A small blue square says "no, no". A big green
triangle says "yes, no": big, but not orange.

### The sorting mat

A **sorting mat** is a big square cut into four boxes. The rows are for the first question. The columns are for the
second question.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 390 260" role="img" aria-label="A sorting mat with four boxes. Rows: big, small. Columns: orange, not orange. Big and orange: circle and square. Big and not orange: blue triangle and green square. Small and orange: triangle. Small and not orange: blue circle, green circle, blue square.">
  <text x="155" y="20" font-size="13" text-anchor="middle" fill="currentColor">orange</text>
  <text x="305" y="20" font-size="13" text-anchor="middle" fill="currentColor">not orange</text>
  <text x="72" y="90" font-size="13" text-anchor="end" fill="currentColor">big</text>
  <text x="72" y="200" font-size="13" text-anchor="end" fill="currentColor">small</text>
  <rect x="80" y="30" width="300" height="220" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="230" y1="30" x2="230" y2="250" stroke="currentColor" stroke-width="2"/>
  <line x1="80" y1="140" x2="380" y2="140" stroke="currentColor" stroke-width="2"/>
  <circle cx="130" cy="85" r="22" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <rect x="160.2" y="65.2" width="39.6" height="39.6" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="280,63 304.2,107 255.8,107" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <rect x="310.2" y="65.2" width="39.6" height="39.6" fill="#7ccf9a" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="155,183 168.2,207 141.8,207" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="267.5" cy="195" r="12" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="305" cy="195" r="12" fill="#7ccf9a" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <rect x="330.5" y="183" width="24" height="24" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
</svg>
</div>

To put a shape on the mat:

1. Ask question 1. Big? Go to the **top** row. Small? Go to the **bottom** row.
2. Ask question 2. Orange? Go to the **left** column. Not orange? Go to the **right** column.
3. Where your row and your column meet, that is the box.

The top-left box is "big **and** orange". The top-right box is "big **and** not orange". The bottom-left box is
"small **and** orange". The bottom-right box is "small **and** not orange".

### Why there are four boxes

The first question has 2 answers: big or small. For **each** of those, the second question has 2 answers: orange or
not orange.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 430 180" role="img" aria-label="A tree: a shape is big or small; a big shape is orange or not orange, and a small shape is orange or not orange. That makes four kinds.">
  <rect x="20" y="78" width="80" height="34" rx="6" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="60" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">a shape</text>
  <line x1="100" y1="95" x2="160" y2="50" stroke="currentColor" stroke-width="1.5"/>
  <rect x="160" y="35" width="70" height="30" rx="6" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="195" y="54.55" font-size="13" text-anchor="middle" fill="currentColor">big</text>
  <line x1="230" y1="50" x2="290" y2="28" stroke="currentColor" stroke-width="1.5"/>
  <text x="295" y="33" font-size="13" text-anchor="start" fill="currentColor">big and orange</text>
  <line x1="230" y1="50" x2="290" y2="72" stroke="currentColor" stroke-width="1.5"/>
  <text x="295" y="77" font-size="13" text-anchor="start" fill="currentColor">big and not orange</text>
  <line x1="100" y1="95" x2="160" y2="140" stroke="currentColor" stroke-width="1.5"/>
  <rect x="160" y="125" width="70" height="30" rx="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="195" y="144.55" font-size="13" text-anchor="middle" fill="currentColor">small</text>
  <line x1="230" y1="140" x2="290" y2="118" stroke="currentColor" stroke-width="1.5"/>
  <text x="295" y="123" font-size="13" text-anchor="start" fill="currentColor">small and orange</text>
  <line x1="230" y1="140" x2="290" y2="162" stroke="currentColor" stroke-width="1.5"/>
  <text x="295" y="167" font-size="13" text-anchor="start" fill="currentColor">small and not orange</text>
</svg>
</div>

So we get 2 kinds of big, and 2 kinds of small. That is 2 and 2, which is **4** kinds in all. Every shape is exactly
one of these four kinds. That is why the mat has exactly four boxes, no more and no less.

### Each thing goes in one box

Just like before, every shape has exactly one place to go.

- It cannot be in two boxes, because it cannot be big and small at the same time, and it cannot be orange and not
  orange at the same time.
- It must be in some box, because every shape is big or small, and every shape is orange or not.

So if you count all four boxes and add them up, you get all the shapes. On the mat above: 2 and 2 and 1 and 3 make
**8**. And there are 8 shapes. Nothing is lost.

### "Not orange" means any other colour

Look at the right column. It says **not orange**, not "blue". A blue shape is not orange, so it goes there. A green
shape is also not orange, so it goes there too. "Not orange" is every colour **except** orange.

This little word **not** is one of the most important words in logic. It means "everything else".

### An empty box tells you something

Sometimes a box on the mat is empty. That is fine! It is not a mistake. It tells you something: there is **nothing**
of that kind. If the "small and orange" box were empty, you would know "there are no small orange shapes here". An
empty box is a fact too.

### Reading the mat

The mat answers lots of questions at once.

- How many shapes are **big**? Add the top row: 2 and 2 make 4.
- How many are **orange**? Add the left column: 2 and 1 make 3.
- How many are big **and** orange? Just one box: 2.
- How many are **small and not orange**? Just one box: 3.

A row tells you about one question. A column tells you about the other. A single box tells you about both at once.

## Worked examples

**Example 1. Animals on a mat.** Put these animals on a mat. Rows: "Has legs?" Columns: "Lives in water?"

Animals: crab, cat, fish, snake, horse, whale, worm.

Take them one at a time.

1. Crab: has legs (yes). Lives in water (yes). Box: **legs, water**.
2. Cat: has legs (yes). Lives on land (no). Box: **legs, not water**.
3. Fish: no legs. Lives in water. Box: **no legs, water**.
4. Snake: no legs. Most snakes live on land. Box: **no legs, not water**.
5. Horse: legs, land. Box: **legs, not water**.
6. Whale: no legs (it has flippers). Lives in water. Box: **no legs, water**.
7. Worm: no legs. Lives in the soil. Box: **no legs, not water**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 385 260" role="img" aria-label="A sorting mat for animals. Has legs and lives in water: crab. Has legs, not in water: cat, horse. No legs, in water: fish, whale. No legs, not in water: snake, worm.">
  <text x="150" y="20" font-size="13" text-anchor="middle" fill="currentColor">lives in water</text>
  <text x="300" y="20" font-size="13" text-anchor="middle" fill="currentColor">not in water</text>
  <text x="67" y="90" font-size="13" text-anchor="end" fill="currentColor">has legs</text>
  <text x="67" y="200" font-size="13" text-anchor="end" fill="currentColor">no legs</text>
  <rect x="75" y="30" width="300" height="220" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="225" y1="30" x2="225" y2="250" stroke="currentColor" stroke-width="2"/>
  <line x1="75" y1="140" x2="375" y2="140" stroke="currentColor" stroke-width="2"/>
  <rect x="121" y="71" width="58" height="28" rx="6" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="150" y="89.2" font-size="12" text-anchor="middle" fill="currentColor">crab</text>
  <rect x="271" y="52.6667" width="58" height="28" rx="6" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="300" y="70.8667" font-size="12" text-anchor="middle" fill="currentColor">cat</text>
  <rect x="271" y="89.3333" width="58" height="28" rx="6" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="300" y="107.533" font-size="12" text-anchor="middle" fill="currentColor">horse</text>
  <rect x="121" y="162.667" width="58" height="28" rx="6" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="150" y="180.867" font-size="12" text-anchor="middle" fill="currentColor">fish</text>
  <rect x="121" y="199.333" width="58" height="28" rx="6" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="150" y="217.533" font-size="12" text-anchor="middle" fill="currentColor">whale</text>
  <rect x="271" y="162.667" width="58" height="28" rx="6" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="300" y="180.867" font-size="12" text-anchor="middle" fill="currentColor">snake</text>
  <rect x="271" y="199.333" width="58" height="28" rx="6" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="300" y="217.533" font-size="12" text-anchor="middle" fill="currentColor">worm</text>
</svg>
</div>

Count: 1 and 2 and 2 and 2 make 7. There are 7 animals. ✓

**Example 2. Find the two rules.** Somebody sorted these shapes on a mat but forgot to write the labels.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 350 260" role="img" aria-label="A sorting mat with hidden labels. Top left: blue square, blue triangle. Top right: orange square. Bottom left: empty. Bottom right: orange circle, green circle, green oval.">
  <text x="115" y="20" font-size="13" text-anchor="middle" fill="currentColor">?</text>
  <text x="265" y="20" font-size="13" text-anchor="middle" fill="currentColor">?</text>
  <text x="32" y="90" font-size="13" text-anchor="end" fill="currentColor">?</text>
  <text x="32" y="200" font-size="13" text-anchor="end" fill="currentColor">?</text>
  <rect x="40" y="30" width="300" height="220" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="190" y1="30" x2="190" y2="250" stroke="currentColor" stroke-width="2"/>
  <line x1="40" y1="140" x2="340" y2="140" stroke="currentColor" stroke-width="2"/>
  <rect x="72" y="67" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polygon points="140,67 159.8,103 120.2,103" fill="#9cc9ea" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <rect x="247" y="67" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="227.5" cy="195" r="18" fill="#eea66f" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="265" cy="195" r="14" fill="#7ccf9a" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <ellipse cx="302.5" cy="195" rx="13" ry="20" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
</svg>
</div>

What are the two rules?

1. Look at the top row: a square, a triangle, another square. All have **corners**.
2. Bottom row: circles and an oval. **No corners**.
3. So the row question is "Does it have corners?"
4. Left column: all **blue**. Right column: orange and green, so **not blue**.
5. So the column question is "Is it blue?"

The empty box is the bottom-left one: "no corners and blue". So there were no blue round shapes.

**Example 3. Where does it go?** Use the mat from Example 2. Where would a small blue star go?

1. Does a star have corners? Yes, lots. **Top row.**
2. Is it blue? Yes. **Left column.**
3. So it goes in the top-left box, with the blue square and triangle.

Notice that "small" did not matter. The mat only asks about corners and blue. Size is not one of the questions, so
we ignore it.

**Example 4. Numbers on a mat.** Rows: "Is it more than 5?" Columns: "Is it 10 or less?" Where do 3, 7, 12 go?

- 3: more than 5? No, **bottom row**. 10 or less? Yes, **left column**. Bottom-left.
- 7: more than 5? Yes, **top row**. 10 or less? Yes, **left**. Top-left.
- 12: more than 5? Yes, **top**. 10 or less? No, **right**. Top-right.

Can anything go in the bottom-right box: **not** more than 5 **and not** 10 or less? A number that is 5 or less is
also 10 or less. So nothing can go there! That box will always be empty. Sometimes two rules fit together so that one
box can never be used.

## Try it

1. On the shapes mat from the start, which box does a small green circle go in?
2. Put these on a mat with rows "Is it a fruit?" and columns "Is it red?": strawberry, carrot, banana, tomato,
   cherry, celery. (A tomato is a fruit!)
3. A mat has rows "big / small" and columns "has corners / no corners". Draw or say four shapes, one for each box.
4. Here are counts on a mat. Big and orange: 3. Big and not orange: 1. Small and orange: 2. Small and not orange: 4.
   How many shapes are there? How many are orange? How many are small?
5. A mat has rows "Can it fly?" and columns "Is it a bird?". Name one animal for each box. Is any box hard?
6. Why can a box on a sorting mat be empty?
7. Rows: "Is it more than 10?" Columns: "Is it more than 20?" Which box will always be empty, and why?

??? note "Answers"
    1. Small: bottom row. Green is not orange: right column. So the **bottom-right** box, "small and not orange".
    2. Fruit and red: strawberry, tomato, cherry. Fruit and not red: banana. Not fruit and red: none of these (if you
       know a red carrot, it is still a vegetable, and carrots are orange). Not fruit and not red: carrot, celery.
       Check: 3 and 1 and 0 and 2 make 6. ✓
    3. For example: big square (big, corners), big circle (big, no corners), small triangle (small, corners), small
       oval (small, no corners).
    4. All: 3 and 1 and 2 and 4 make **10**. Orange (left column): 3 and 2 make **5**. Small (bottom row): 2 and 4
       make **6**.
    5. Flies and bird: robin. Flies and not bird: bee (or bat). Cannot fly and bird: penguin (or ostrich). Cannot
       fly and not bird: dog. The hard one is "cannot fly and bird": most birds fly, but penguins, ostriches and kiwis
       do not.
    6. Because maybe nothing in the pile is of that kind. An empty box tells you "there are none of these". Or, like
       Example 4, the two rules might make that box impossible.
    7. The box "**not** more than 10 **and** more than 20". A number more than 20 is also more than 10, so nothing can
       be more than 20 without being more than 10. That box is always empty.

## Common mistake

**Putting a thing in two boxes.** A big orange square is big and orange. Some people put it in "big" and again in
"orange". But on a mat, "big" and "orange" are not two boxes: they are a row and a column. The thing goes where they
**meet**, in one box only.

**Reading "not orange" as "blue".** "Not orange" means every colour except orange: blue, green, purple, anything. If
you only put blue shapes there, the green ones have nowhere to go.

## Where it leads

- Previous lesson: [Sorting by one rule](01-sorting-one-rule.md). Next lesson:
  [Which one does not belong?](03-does-not-belong.md)
- This level: [Level 1: Sorting and clues](index.md). The whole topic: [Logic and puzzles](../index.md).
- The same four boxes come back as two overlapping hoops in level 2: [Sorting circles](../level-2/02-sorting-circles.md).
- "2 answers, then 2 answers for each" is a counting idea. It grows into tree diagrams:
  [Dressing teddy](../../counting/level-1/01-dressing-teddy.md) in Counting.
- Counting each box and making a table: [Statistics](../../statistics/index.md).
