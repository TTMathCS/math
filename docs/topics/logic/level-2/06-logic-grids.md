---
title: "Logic grid puzzles"
---

# Logic grid puzzles

*Logic and puzzles · level 2, lesson 6 of 6*

## A question to start

Three friends, **Ann**, **Ben** and **Cal**, each have one pet: a **rabbit**, a **hamster** or a **parrot**. No two
friends have the same pet. Here are the clues.

1. Ben's best friend has the parrot.
2. The hamster's owner sits next to Ben in class.
3. Ann is allergic to feathers.

Not one of these clues says who has which pet! None of them even says "Ben has ...". Can you still work out every
pet? (You can, and by the end of this lesson it will feel easy.)

## The idea

### A grid to keep track

A **logic grid** is a table with the people down the side and the things across the top. Each box stands for one
question: "does **this** person have **this** thing?"

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 208" role="img" aria-label="An empty logic grid. Rows: Ann, Ben, Cal. Columns: rabbit, hamster, parrot.">
<g transform="translate(53,0)">
  <text x="88" y="24" font-size="12" text-anchor="middle" fill="currentColor">rabbit</text>
  <text x="144" y="24" font-size="12" text-anchor="middle" fill="currentColor">hamster</text>
  <text x="200" y="24" font-size="12" text-anchor="middle" fill="currentColor">parrot</text>
  <text x="52" y="67" font-size="13" text-anchor="end" fill="currentColor">Ann</text>
  <text x="52" y="123" font-size="13" text-anchor="end" fill="currentColor">Ben</text>
  <text x="52" y="179" font-size="13" text-anchor="end" fill="currentColor">Cal</text>
  <line x1="60" y1="34" x2="228" y2="34" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="90" x2="228" y2="90" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="146" x2="228" y2="146" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="202" x2="228" y2="202" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="34" x2="60" y2="202" stroke="currentColor" stroke-width="1.5"/>
  <line x1="116" y1="34" x2="116" y2="202" stroke="currentColor" stroke-width="1.5"/>
  <line x1="172" y1="34" x2="172" y2="202" stroke="currentColor" stroke-width="1.5"/>
  <line x1="228" y1="34" x2="228" y2="202" stroke="currentColor" stroke-width="1.5"/>
</g>
</svg>
</div>

We fill the boxes with two marks.

- **✓** (a tick) means "yes, this person has this thing".
- **✗** (a cross) means "no, this person does not have this thing".

At the start every box is empty: we do not know anything yet.

### The two grid rules

Each friend has exactly **one** pet, and each pet belongs to exactly **one** friend. So:

1. Every **row** ends up with exactly **one ✓**. (Each person has one pet.)
2. Every **column** ends up with exactly **one ✓**. (Each pet has one owner.)

These two rules give us two powerful moves.

- **When you put a ✓ in a box, cross out the rest of its row and the rest of its column.** If Leo has the cat, then
  Leo has nothing else, and nobody else has the cat.
- **When a row (or column) has ✗ in every box but one, the last box must be ✓.** If Ava does not have the dog and
  does not have the cat, she must have the fish.

The second move is the same as the clue riddles from level 1: cross out what cannot be, and whatever is left must be
true. It is also exactly the "only number for this square" move from Sudoku. Logic grids and Sudoku are close cousins.

### Clues that say "not"

Many clues do not give a ✓ at all. They only give a ✗. "Ava does not have the dog" puts one ✗ in the grid. That
seems small, but crosses add up. When enough crosses pile up in one row or column, a ✓ appears by itself.

### Hidden "not" clues

Some clues hide a "not" inside them. Read them slowly and ask: "who does this clue rule **out**?"

- "Ben's best friend has the parrot." Ben is not his own best friend! So **Ben does not have the parrot**.
- "The hamster's owner sits next to Ben." Nobody sits next to themselves, so **Ben does not have the hamster**.
- "Ann is allergic to feathers." A parrot has feathers, so **Ann does not have the parrot**.

### How many ways are there?

Before any clues, how many ways could three friends have three different pets? Ann has 3 choices. Then Ben has the 2
pets that are left. Then Cal must take the last one. So there are 3 times 2 (and then 1), which is **6** ways. The
clues have to rule out 5 of those 6, leaving exactly one. A good puzzle has exactly one answer, just like a good
Sudoku.

## Worked examples

**Example 1. A first grid.** Mia, Leo and Ava have a cat, a dog and a fish.

- Clue 1: Leo's pet says "meow".
- Clue 2: Ava does not have the dog.

1. Clue 1: only a cat says "meow". Put **✓** at Leo and cat.
2. Cross out the rest of Leo's row (Leo is **not** dog, **not** fish) and the rest of the cat column (Mia **not** cat,
   Ava **not** cat).
3. Clue 2: put **✗** at Ava and dog.
4. Look at Ava's row: cat ✗, dog ✗. Only fish is left. **✓** Ava and fish. Cross out Mia and fish.
5. Look at Mia's row: cat ✗, fish ✗. **✓** Mia and dog.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 416 192" role="img" aria-label="Two grids. After clues 1 and 2: tick at Leo and cat; crosses at Leo dog, Leo fish, Mia cat, Ava cat, Ava dog. Finished: Mia dog, Leo cat, Ava fish ticked, all other boxes crossed.">
  <text x="126" y="14" font-size="12" text-anchor="middle" fill="currentColor">after clues 1 and 2</text>
  <text x="82" y="44" font-size="12" text-anchor="middle" fill="currentColor">cat</text>
  <text x="126" y="44" font-size="12" text-anchor="middle" fill="currentColor">dog</text>
  <text x="170" y="44" font-size="12" text-anchor="middle" fill="currentColor">fish</text>
  <text x="52" y="81" font-size="13" text-anchor="end" fill="currentColor">Mia</text>
  <text x="52" y="125" font-size="13" text-anchor="end" fill="currentColor">Leo</text>
  <text x="52" y="169" font-size="13" text-anchor="end" fill="currentColor">Ava</text>
  <rect x="60" y="98" width="44" height="44" fill="#7ccf9a" fill-opacity="0.7"/>
  <text x="82" y="128" font-size="22" text-anchor="middle" fill="currentColor">✓</text>
  <text x="126" y="128" font-size="22" text-anchor="middle" fill="currentColor">✗</text>
  <text x="170" y="128" font-size="22" text-anchor="middle" fill="currentColor">✗</text>
  <text x="82" y="84" font-size="22" text-anchor="middle" fill="currentColor">✗</text>
  <text x="82" y="172" font-size="22" text-anchor="middle" fill="currentColor">✗</text>
  <text x="126" y="172" font-size="22" text-anchor="middle" fill="currentColor">✗</text>
  <line x1="60" y1="54" x2="192" y2="54" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="98" x2="192" y2="98" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="142" x2="192" y2="142" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="186" x2="192" y2="186" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="54" x2="60" y2="186" stroke="currentColor" stroke-width="1.5"/>
  <line x1="104" y1="54" x2="104" y2="186" stroke="currentColor" stroke-width="1.5"/>
  <line x1="148" y1="54" x2="148" y2="186" stroke="currentColor" stroke-width="1.5"/>
  <line x1="192" y1="54" x2="192" y2="186" stroke="currentColor" stroke-width="1.5"/>
  <text x="344" y="14" font-size="12" text-anchor="middle" fill="currentColor">finished</text>
  <text x="300" y="44" font-size="12" text-anchor="middle" fill="currentColor">cat</text>
  <text x="344" y="44" font-size="12" text-anchor="middle" fill="currentColor">dog</text>
  <text x="388" y="44" font-size="12" text-anchor="middle" fill="currentColor">fish</text>
  <text x="270" y="81" font-size="13" text-anchor="end" fill="currentColor">Mia</text>
  <text x="270" y="125" font-size="13" text-anchor="end" fill="currentColor">Leo</text>
  <text x="270" y="169" font-size="13" text-anchor="end" fill="currentColor">Ava</text>
  <text x="300" y="84" font-size="22" text-anchor="middle" fill="currentColor">✗</text>
  <rect x="322" y="54" width="44" height="44" fill="#7ccf9a" fill-opacity="0.7"/>
  <text x="344" y="84" font-size="22" text-anchor="middle" fill="currentColor">✓</text>
  <text x="388" y="84" font-size="22" text-anchor="middle" fill="currentColor">✗</text>
  <rect x="278" y="98" width="44" height="44" fill="#7ccf9a" fill-opacity="0.7"/>
  <text x="300" y="128" font-size="22" text-anchor="middle" fill="currentColor">✓</text>
  <text x="344" y="128" font-size="22" text-anchor="middle" fill="currentColor">✗</text>
  <text x="388" y="128" font-size="22" text-anchor="middle" fill="currentColor">✗</text>
  <text x="300" y="172" font-size="22" text-anchor="middle" fill="currentColor">✗</text>
  <text x="344" y="172" font-size="22" text-anchor="middle" fill="currentColor">✗</text>
  <rect x="366" y="142" width="44" height="44" fill="#7ccf9a" fill-opacity="0.7"/>
  <text x="388" y="172" font-size="22" text-anchor="middle" fill="currentColor">✓</text>
  <line x1="278" y1="54" x2="410" y2="54" stroke="currentColor" stroke-width="1.5"/>
  <line x1="278" y1="98" x2="410" y2="98" stroke="currentColor" stroke-width="1.5"/>
  <line x1="278" y1="142" x2="410" y2="142" stroke="currentColor" stroke-width="1.5"/>
  <line x1="278" y1="186" x2="410" y2="186" stroke="currentColor" stroke-width="1.5"/>
  <line x1="278" y1="54" x2="278" y2="186" stroke="currentColor" stroke-width="1.5"/>
  <line x1="322" y1="54" x2="322" y2="186" stroke="currentColor" stroke-width="1.5"/>
  <line x1="366" y1="54" x2="366" y2="186" stroke="currentColor" stroke-width="1.5"/>
  <line x1="410" y1="54" x2="410" y2="186" stroke="currentColor" stroke-width="1.5"/>
</svg>
</div>

Answer: **Mia has the dog, Leo has the cat, Ava has the fish.** Check every clue: Leo's cat says meow ✓; Ava does not
have the dog ✓.

**Example 2. Only crosses.** Zoe, Sam and Kai each wear one hat: red, blue or green.

- Clue 1: Zoe's hat is not red.
- Clue 2: Sam's hat is not red and not blue.

1. Clue 1: **✗** Zoe, red.
2. Clue 2: **✗** Sam, red and **✗** Sam, blue.
3. Sam's row has only green left: **✓** Sam, green. Cross out the rest of the green column: Zoe not green, Kai not
   green.
4. Look at the **red column**: Zoe ✗, Sam ✗. Only Kai is left: **✓** Kai, red.
5. Zoe's row: red ✗, green ✗. **✓** Zoe, blue.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 416 192" role="img" aria-label="Two grids. After the clues: crosses at Zoe red, Sam red, Sam blue. Finished: Zoe blue, Sam green, Kai red ticked, all others crossed.">
  <text x="126" y="14" font-size="12" text-anchor="middle" fill="currentColor">after clues 1 and 2</text>
  <text x="82" y="44" font-size="12" text-anchor="middle" fill="currentColor">red</text>
  <text x="126" y="44" font-size="12" text-anchor="middle" fill="currentColor">blue</text>
  <text x="170" y="44" font-size="12" text-anchor="middle" fill="currentColor">green</text>
  <text x="52" y="81" font-size="13" text-anchor="end" fill="currentColor">Zoe</text>
  <text x="52" y="125" font-size="13" text-anchor="end" fill="currentColor">Sam</text>
  <text x="52" y="169" font-size="13" text-anchor="end" fill="currentColor">Kai</text>
  <text x="82" y="84" font-size="22" text-anchor="middle" fill="currentColor">✗</text>
  <text x="82" y="128" font-size="22" text-anchor="middle" fill="currentColor">✗</text>
  <text x="126" y="128" font-size="22" text-anchor="middle" fill="currentColor">✗</text>
  <line x1="60" y1="54" x2="192" y2="54" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="98" x2="192" y2="98" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="142" x2="192" y2="142" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="186" x2="192" y2="186" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="54" x2="60" y2="186" stroke="currentColor" stroke-width="1.5"/>
  <line x1="104" y1="54" x2="104" y2="186" stroke="currentColor" stroke-width="1.5"/>
  <line x1="148" y1="54" x2="148" y2="186" stroke="currentColor" stroke-width="1.5"/>
  <line x1="192" y1="54" x2="192" y2="186" stroke="currentColor" stroke-width="1.5"/>
  <text x="344" y="14" font-size="12" text-anchor="middle" fill="currentColor">finished</text>
  <text x="300" y="44" font-size="12" text-anchor="middle" fill="currentColor">red</text>
  <text x="344" y="44" font-size="12" text-anchor="middle" fill="currentColor">blue</text>
  <text x="388" y="44" font-size="12" text-anchor="middle" fill="currentColor">green</text>
  <text x="270" y="81" font-size="13" text-anchor="end" fill="currentColor">Zoe</text>
  <text x="270" y="125" font-size="13" text-anchor="end" fill="currentColor">Sam</text>
  <text x="270" y="169" font-size="13" text-anchor="end" fill="currentColor">Kai</text>
  <text x="300" y="84" font-size="22" text-anchor="middle" fill="currentColor">✗</text>
  <rect x="322" y="54" width="44" height="44" fill="#7ccf9a" fill-opacity="0.7"/>
  <text x="344" y="84" font-size="22" text-anchor="middle" fill="currentColor">✓</text>
  <text x="388" y="84" font-size="22" text-anchor="middle" fill="currentColor">✗</text>
  <text x="300" y="128" font-size="22" text-anchor="middle" fill="currentColor">✗</text>
  <text x="344" y="128" font-size="22" text-anchor="middle" fill="currentColor">✗</text>
  <rect x="366" y="98" width="44" height="44" fill="#7ccf9a" fill-opacity="0.7"/>
  <text x="388" y="128" font-size="22" text-anchor="middle" fill="currentColor">✓</text>
  <rect x="278" y="142" width="44" height="44" fill="#7ccf9a" fill-opacity="0.7"/>
  <text x="300" y="172" font-size="22" text-anchor="middle" fill="currentColor">✓</text>
  <text x="344" y="172" font-size="22" text-anchor="middle" fill="currentColor">✗</text>
  <text x="388" y="172" font-size="22" text-anchor="middle" fill="currentColor">✗</text>
  <line x1="278" y1="54" x2="410" y2="54" stroke="currentColor" stroke-width="1.5"/>
  <line x1="278" y1="98" x2="410" y2="98" stroke="currentColor" stroke-width="1.5"/>
  <line x1="278" y1="142" x2="410" y2="142" stroke="currentColor" stroke-width="1.5"/>
  <line x1="278" y1="186" x2="410" y2="186" stroke="currentColor" stroke-width="1.5"/>
  <line x1="278" y1="54" x2="278" y2="186" stroke="currentColor" stroke-width="1.5"/>
  <line x1="322" y1="54" x2="322" y2="186" stroke="currentColor" stroke-width="1.5"/>
  <line x1="366" y1="54" x2="366" y2="186" stroke="currentColor" stroke-width="1.5"/>
  <line x1="410" y1="54" x2="410" y2="186" stroke="currentColor" stroke-width="1.5"/>
</svg>
</div>

Answer: **Zoe blue, Sam green, Kai red.** Notice step 4: we looked down a **column**, not along a row. When you are
stuck, look at the columns too.

**Example 3. The puzzle from the start.** Ann, Ben, Cal; rabbit, hamster, parrot.

1. Clue 1 hides a not: **✗** Ben, parrot.
2. Clue 2 hides a not: **✗** Ben, hamster.
3. Ben's row: only rabbit left. **✓** Ben, rabbit. Cross out Ann and Cal in the rabbit column.
4. Clue 3: Ann is allergic to feathers, so **✗** Ann, parrot.
5. Ann's row: rabbit ✗, parrot ✗. **✓** Ann, hamster.
6. Cal's row: rabbit ✗, hamster ✗ (Ann has it). **✓** Cal, parrot.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 204" role="img" aria-label="Two grids. The three hidden nots: crosses at Ben parrot, Ben hamster, Ann parrot. Finished: Ann hamster, Ben rabbit, Cal parrot ticked, all others crossed.">
  <text x="132" y="14" font-size="12" text-anchor="middle" fill="currentColor">the three hidden nots</text>
  <text x="84" y="44" font-size="12" text-anchor="middle" fill="currentColor">rabbit</text>
  <text x="132" y="44" font-size="12" text-anchor="middle" fill="currentColor">hamster</text>
  <text x="180" y="44" font-size="12" text-anchor="middle" fill="currentColor">parrot</text>
  <text x="52" y="83" font-size="13" text-anchor="end" fill="currentColor">Ann</text>
  <text x="52" y="131" font-size="13" text-anchor="end" fill="currentColor">Ben</text>
  <text x="52" y="179" font-size="13" text-anchor="end" fill="currentColor">Cal</text>
  <text x="180" y="134" font-size="22" text-anchor="middle" fill="currentColor">✗</text>
  <text x="132" y="134" font-size="22" text-anchor="middle" fill="currentColor">✗</text>
  <text x="180" y="86" font-size="22" text-anchor="middle" fill="currentColor">✗</text>
  <line x1="60" y1="54" x2="204" y2="54" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="102" x2="204" y2="102" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="150" x2="204" y2="150" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="198" x2="204" y2="198" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="54" x2="60" y2="198" stroke="currentColor" stroke-width="1.5"/>
  <line x1="108" y1="54" x2="108" y2="198" stroke="currentColor" stroke-width="1.5"/>
  <line x1="156" y1="54" x2="156" y2="198" stroke="currentColor" stroke-width="1.5"/>
  <line x1="204" y1="54" x2="204" y2="198" stroke="currentColor" stroke-width="1.5"/>
  <text x="362" y="14" font-size="12" text-anchor="middle" fill="currentColor">finished</text>
  <text x="314" y="44" font-size="12" text-anchor="middle" fill="currentColor">rabbit</text>
  <text x="362" y="44" font-size="12" text-anchor="middle" fill="currentColor">hamster</text>
  <text x="410" y="44" font-size="12" text-anchor="middle" fill="currentColor">parrot</text>
  <text x="282" y="83" font-size="13" text-anchor="end" fill="currentColor">Ann</text>
  <text x="282" y="131" font-size="13" text-anchor="end" fill="currentColor">Ben</text>
  <text x="282" y="179" font-size="13" text-anchor="end" fill="currentColor">Cal</text>
  <text x="314" y="86" font-size="22" text-anchor="middle" fill="currentColor">✗</text>
  <rect x="338" y="54" width="48" height="48" fill="#7ccf9a" fill-opacity="0.7"/>
  <text x="362" y="86" font-size="22" text-anchor="middle" fill="currentColor">✓</text>
  <text x="410" y="86" font-size="22" text-anchor="middle" fill="currentColor">✗</text>
  <rect x="290" y="102" width="48" height="48" fill="#7ccf9a" fill-opacity="0.7"/>
  <text x="314" y="134" font-size="22" text-anchor="middle" fill="currentColor">✓</text>
  <text x="362" y="134" font-size="22" text-anchor="middle" fill="currentColor">✗</text>
  <text x="410" y="134" font-size="22" text-anchor="middle" fill="currentColor">✗</text>
  <text x="314" y="182" font-size="22" text-anchor="middle" fill="currentColor">✗</text>
  <text x="362" y="182" font-size="22" text-anchor="middle" fill="currentColor">✗</text>
  <rect x="386" y="150" width="48" height="48" fill="#7ccf9a" fill-opacity="0.7"/>
  <text x="410" y="182" font-size="22" text-anchor="middle" fill="currentColor">✓</text>
  <line x1="290" y1="54" x2="434" y2="54" stroke="currentColor" stroke-width="1.5"/>
  <line x1="290" y1="102" x2="434" y2="102" stroke="currentColor" stroke-width="1.5"/>
  <line x1="290" y1="150" x2="434" y2="150" stroke="currentColor" stroke-width="1.5"/>
  <line x1="290" y1="198" x2="434" y2="198" stroke="currentColor" stroke-width="1.5"/>
  <line x1="290" y1="54" x2="290" y2="198" stroke="currentColor" stroke-width="1.5"/>
  <line x1="338" y1="54" x2="338" y2="198" stroke="currentColor" stroke-width="1.5"/>
  <line x1="386" y1="54" x2="386" y2="198" stroke="currentColor" stroke-width="1.5"/>
  <line x1="434" y1="54" x2="434" y2="198" stroke="currentColor" stroke-width="1.5"/>
</svg>
</div>

Answer: **Ann has the hamster, Ben has the rabbit, Cal has the parrot.** Check: Ben's best friend has the parrot (that
must be Cal, which is fine). The hamster's owner, Ann, sits next to Ben (fine). Ann does not have the feathery parrot
✓.

## Try it

Draw a 3 by 3 grid for each puzzle (or 4 by 4 for question 4).

1. Eva, Max and Lily each like one fruit best: apple, banana or grape. Max likes bananas best. Eva does not like
   grapes best. Who likes which?
2. Noah, Ivy and Omar each play one sport: soccer, swimming or tennis. Noah swims. Ivy does not swim. Omar does not
   play tennis. Who plays which?
3. Rosa, Finn and Jay are 6, 7 and 8 years old. Rosa is older than Finn. Jay is the youngest. How old is each one?
4. Ali, Bea, Cy and Dee have a cat, a dog, a fish and a bird. Bea has the bird. Ali's pet cannot swim and does not
   bark. Dee does not have the fish. Who has which pet?
5. A puzzle about three friends and a cat, a dog and a fish has only one clue: "Sam does not have the dog." How many of
   the 6 ways are still possible? Is that enough for a good puzzle?
6. Make your own 3 by 3 puzzle with two clues. Check that it has exactly one answer.

??? note "Answers"
    1. ✓ Max, banana; cross out the rest of Max's row and the banana column. ✗ Eva, grape. Eva's row: banana ✗,
       grape ✗, so **Eva, apple**. Lily's row: apple ✗, banana ✗, so **Lily, grape**. Answer: Eva apple, Max banana,
       Lily grape.
    2. ✓ Noah, swimming; cross out the rest. (The clue "Ivy does not swim" is already shown by that.) ✗ Omar, tennis.
       Omar's row: swimming ✗, tennis ✗, so **Omar, soccer**. Ivy's row: swimming ✗, soccer ✗, so **Ivy, tennis**.
    3. "Rosa is older than Finn" hides two nots: Rosa is older than somebody, so she is **not 6** (✗ Rosa, 6), and Finn
       is younger than somebody, so he is **not 8** (✗ Finn, 8). "Jay is the youngest": ✓ **Jay, 6**; cross out the
       rest. Rosa's row: 6 ✗, so 7 or 8. Finn's row: 6 ✗, 8 ✗, so **Finn is 7**. Then **Rosa is 8**. Check: 8 is older
       than 7 ✓.
    4. ✓ Bea, bird; cross out the rest. Ali's pet cannot swim (✗ fish) and does not bark (✗ dog), and the bird is
       Bea's (✗ bird), so **Ali, cat**. Dee: ✗ fish, ✗ bird, ✗ cat, so **Dee, dog**. Cy gets the last one: **Cy, fish**.
       Answer: Ali cat, Bea bird, Cy fish, Dee dog.
    5. Of the 6 ways, the ones where Sam has the dog are ruled out. Sam has the dog in 2 of the 6 ways (the other two
       friends can share the cat and fish in 2 ways). So **4** ways are still possible. That is not enough: a good
       puzzle must leave exactly **one** way.
    6. Any puzzle is fine, if it leaves one answer. Test it: draw the grid and use only the clues. If at the end some
       row still has two empty boxes, you need another clue.

## Common mistake

**Forgetting to cross out after a tick.** When you put a ✓, cross out the **whole rest** of its row **and** column.
If you forget, you will miss the "only one left" moves later and get stuck.

**Missing a hidden "not".** "Ben's best friend has the parrot" looks like it is about somebody else. But it also tells
you something about Ben. Ask of every clue: who does this rule out?

## Where it leads

- Previous lesson: [River crossing](05-river-crossing.md).
- This level: [Level 2: Rules and puzzles](index.md). The whole topic: [Logic and puzzles](../index.md).
- The "only one left" move is the Sudoku move too: [4-by-4 Sudoku](03-four-by-four-sudoku.md).
- Crossing out what cannot be: [Clue riddles](../level-1/06-clue-riddles.md).
- 3 friends and 3 pets can be matched in 6 ways: that is counting arrangements, in
  [Lining up](../../counting/level-1/03-lining-up.md).
- Next level: [Level 3: And, or, not, if](../level-3/index.md), where you meet knights who always tell the truth and
  knaves who always lie.
