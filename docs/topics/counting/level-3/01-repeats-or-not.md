---
title: "Repeats allowed or not"
---

# Repeats allowed or not

*Counting and combinations · level 3, lesson 1 of 6*

## A question to start

A small padlock has 3 dials. Each dial can show the digits 1, 2, 3, 4 or 5. How many different codes can the lock
have?

Many people say "5 + 5 + 5 = 15". Others say "5 × 3 = 15". Both are wrong, and by a lot. The lock has **125**
codes.

Now a second lock looks the same, but its maker promises that the code uses **three different digits**, so a code like
2-2-4 is not allowed. Does that cut out just a few codes? No: it cuts the number from 125 all the way down to **60**,
fewer than half.

In this lesson you will see exactly where 125 and 60 come from, and why one little rule ("no digit used twice") makes
such a big difference.

## The idea

### Slots and choices

In level 2 you drew tree diagrams and found that when every branch splits the same way, you can **multiply**. Let us
use that idea with **slots**. A slot is a place that must be filled. A 3-dial lock has 3 slots:

| 1st dial | 2nd dial | 3rd dial |
| --- | --- | --- |
| ? | ? | ? |

To count codes, ask one question for each slot, in order: *how many choices do I have for this slot now?* Then
multiply the answers. This is the **multiplication rule**: if the first slot can be filled in 5 ways, and then
(whatever you picked) the second can be filled in 5 ways, and then the third in 5 ways, the whole thing can be done in
5 × 5 × 5 ways.

### Repeats allowed

On the first lock, any dial can show any digit, whatever the other dials show. So every slot has 5 choices, every
time:

| 1st dial | 2nd dial | 3rd dial |
| --- | --- | --- |
| 5 choices | 5 choices | 5 choices |

That gives 5 × 5 × 5 = 125 codes.

Why multiply, and not add? Think of the tree. The first dial splits into 5 branches. **Each** of those 5 branches
splits into 5 more for the second dial: that is 5 groups of 5, which is 25 branch ends. **Each** of those 25 splits
into 5 for the third dial: 25 groups of 5, which is 125. Adding 5 + 5 + 5 would count only the branches at each level,
not the ways of going all the way along the tree from the start to an end. A code is a whole journey, from the first
dial to the last.

### No repeats: the second slot has fewer choices

On the second lock, the three digits must all be different.

- 1st dial: any of the 5 digits. **5 choices.**
- 2nd dial: any digit **except** the one already used. **4 choices.**
- 3rd dial: any digit except the two already used. **3 choices.**

That gives 5 × 4 × 3 = 60 codes.

Here is something important. The 4 choices for the second dial are **not the same 4 digits** on every branch. If the
first dial is 1, the second can be 2, 3, 4 or 5. If the first dial is 3, the second can be 1, 2, 4 or 5. The digits
change, but there are always **exactly 4** of them. The multiplication rule only needs the *number* of choices to be
the same on every branch, not the choices themselves.

### A picture: where the missing codes went

Let us look at a smaller version to see it clearly: 2-dial codes using the digits 1 to 5. Put the first digit down the
side and the second digit across the top. Every square in the grid is one code.

<div class="pattern-row" markdown="0">
<svg viewBox="0 -12 430 222" role="img" aria-label="A 5 by 5 grid of all two-digit codes from 11 to 55. The 5 squares on the diagonal, 11, 22, 33, 44 and 55, are shaded differently because they repeat a digit">
  <rect x="70" y="30" width="32" height="32" fill="#eea66f" fill-opacity="0.6" stroke="currentColor"/>
  <text x="86.0" y="51.0" font-size="12" text-anchor="middle" fill="currentColor">11</text>
  <rect x="102" y="30" width="32" height="32" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor"/>
  <text x="118.0" y="51.0" font-size="12" text-anchor="middle" fill="currentColor">12</text>
  <rect x="134" y="30" width="32" height="32" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor"/>
  <text x="150.0" y="51.0" font-size="12" text-anchor="middle" fill="currentColor">13</text>
  <rect x="166" y="30" width="32" height="32" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor"/>
  <text x="182.0" y="51.0" font-size="12" text-anchor="middle" fill="currentColor">14</text>
  <rect x="198" y="30" width="32" height="32" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor"/>
  <text x="214.0" y="51.0" font-size="12" text-anchor="middle" fill="currentColor">15</text>
  <rect x="70" y="62" width="32" height="32" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor"/>
  <text x="86.0" y="83.0" font-size="12" text-anchor="middle" fill="currentColor">21</text>
  <rect x="102" y="62" width="32" height="32" fill="#eea66f" fill-opacity="0.6" stroke="currentColor"/>
  <text x="118.0" y="83.0" font-size="12" text-anchor="middle" fill="currentColor">22</text>
  <rect x="134" y="62" width="32" height="32" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor"/>
  <text x="150.0" y="83.0" font-size="12" text-anchor="middle" fill="currentColor">23</text>
  <rect x="166" y="62" width="32" height="32" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor"/>
  <text x="182.0" y="83.0" font-size="12" text-anchor="middle" fill="currentColor">24</text>
  <rect x="198" y="62" width="32" height="32" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor"/>
  <text x="214.0" y="83.0" font-size="12" text-anchor="middle" fill="currentColor">25</text>
  <rect x="70" y="94" width="32" height="32" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor"/>
  <text x="86.0" y="115.0" font-size="12" text-anchor="middle" fill="currentColor">31</text>
  <rect x="102" y="94" width="32" height="32" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor"/>
  <text x="118.0" y="115.0" font-size="12" text-anchor="middle" fill="currentColor">32</text>
  <rect x="134" y="94" width="32" height="32" fill="#eea66f" fill-opacity="0.6" stroke="currentColor"/>
  <text x="150.0" y="115.0" font-size="12" text-anchor="middle" fill="currentColor">33</text>
  <rect x="166" y="94" width="32" height="32" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor"/>
  <text x="182.0" y="115.0" font-size="12" text-anchor="middle" fill="currentColor">34</text>
  <rect x="198" y="94" width="32" height="32" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor"/>
  <text x="214.0" y="115.0" font-size="12" text-anchor="middle" fill="currentColor">35</text>
  <rect x="70" y="126" width="32" height="32" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor"/>
  <text x="86.0" y="147.0" font-size="12" text-anchor="middle" fill="currentColor">41</text>
  <rect x="102" y="126" width="32" height="32" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor"/>
  <text x="118.0" y="147.0" font-size="12" text-anchor="middle" fill="currentColor">42</text>
  <rect x="134" y="126" width="32" height="32" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor"/>
  <text x="150.0" y="147.0" font-size="12" text-anchor="middle" fill="currentColor">43</text>
  <rect x="166" y="126" width="32" height="32" fill="#eea66f" fill-opacity="0.6" stroke="currentColor"/>
  <text x="182.0" y="147.0" font-size="12" text-anchor="middle" fill="currentColor">44</text>
  <rect x="198" y="126" width="32" height="32" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor"/>
  <text x="214.0" y="147.0" font-size="12" text-anchor="middle" fill="currentColor">45</text>
  <rect x="70" y="158" width="32" height="32" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor"/>
  <text x="86.0" y="179.0" font-size="12" text-anchor="middle" fill="currentColor">51</text>
  <rect x="102" y="158" width="32" height="32" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor"/>
  <text x="118.0" y="179.0" font-size="12" text-anchor="middle" fill="currentColor">52</text>
  <rect x="134" y="158" width="32" height="32" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor"/>
  <text x="150.0" y="179.0" font-size="12" text-anchor="middle" fill="currentColor">53</text>
  <rect x="166" y="158" width="32" height="32" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor"/>
  <text x="182.0" y="179.0" font-size="12" text-anchor="middle" fill="currentColor">54</text>
  <rect x="198" y="158" width="32" height="32" fill="#eea66f" fill-opacity="0.6" stroke="currentColor"/>
  <text x="214.0" y="179.0" font-size="12" text-anchor="middle" fill="currentColor">55</text>
  <text x="86.0" y="22" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="58" y="51.0" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="118.0" y="22" font-size="13" text-anchor="middle" fill="currentColor">2</text>
  <text x="58" y="83.0" font-size="13" text-anchor="middle" fill="currentColor">2</text>
  <text x="150.0" y="22" font-size="13" text-anchor="middle" fill="currentColor">3</text>
  <text x="58" y="115.0" font-size="13" text-anchor="middle" fill="currentColor">3</text>
  <text x="182.0" y="22" font-size="13" text-anchor="middle" fill="currentColor">4</text>
  <text x="58" y="147.0" font-size="13" text-anchor="middle" fill="currentColor">4</text>
  <text x="214.0" y="22" font-size="13" text-anchor="middle" fill="currentColor">5</text>
  <text x="58" y="179.0" font-size="13" text-anchor="middle" fill="currentColor">5</text>
  <text x="150" y="0" font-size="12" text-anchor="middle" fill="currentColor">2nd digit</text>
  <text x="30" y="205" font-size="12" text-anchor="middle" fill="currentColor">1st digit</text>
  <rect x="255" y="45" width="16" height="16" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor"/>
  <text x="280" y="58" font-size="13" fill="currentColor">different digits: 20</text>
  <rect x="255" y="75" width="16" height="16" fill="#eea66f" fill-opacity="0.6" stroke="currentColor"/>
  <text x="280" y="88" font-size="13" fill="currentColor">same digit twice: 5</text>
  <text x="255" y="130" font-size="13" fill="currentColor">all codes: 5 × 5 = 25</text>
  <text x="255" y="155" font-size="13" fill="currentColor">no repeats: 25 − 5 = 20</text>
  <text x="255" y="180" font-size="13" fill="currentColor">and 5 × 4 = 20 too</text>
</svg>
</div>

There are 5 rows of 5, so 25 codes when repeats are allowed. The codes that repeat a digit (11, 22, 33, 44, 55) sit
on the diagonal, one in each row. Take them away and each row has only **4** squares left. Five rows of 4 is 20, which
is exactly 5 × 4. The picture shows *why* the second slot has one choice fewer: in every row, one square is "used up".

### How to tell which kind of question it is

Before you multiply, ask: **can the same thing be used twice?**

| Repeats allowed | Repeats not allowed |
| --- | --- |
| digits on a lock or a PIN | people given different jobs (one person cannot be both captain and goalkeeper) |
| letters in a made-up "word" | runners in 1st, 2nd and 3rd place |
| tossing a coin again and again | books placed on a shelf |
| choosing a snack each day of the week | cards dealt from a pack |

Clue words for "no repeats": *different*, *no digit used twice*, *each person only once*. Often the question does not
say it, and you have to think: a person cannot stand in two places in a line at once.

### What changes and what does not

With repeats allowed, the number of choices stays the same in every slot: 5, 5, 5, 5, ... Each new slot multiplies the
count by the same number, so the count grows very fast.

Without repeats, the number of choices goes down by one in each slot: 5, 4, 3, 2, 1. After the fifth slot you have
nothing left. With digits 1 to 5 you cannot make a 6-digit code with no repeats at all. That makes sense: you would
need six different digits, and you only have five.

| Code length | Repeats allowed | No repeats |
| --- | --- | --- |
| 1 | 5 | 5 |
| 2 | 25 | 20 |
| 3 | 125 | 60 |
| 4 | 625 | 120 |
| 5 | 3125 | 120 |
| 6 | 15625 | 0 |

Notice that 4-digit and 5-digit codes with no repeats both give 120. With 4 slots you use 4 of the 5 digits: 5 × 4 × 3
× 2. With 5 slots the last slot has exactly 1 choice (the one digit left), and multiplying by 1 changes nothing.

## Worked examples

**1. Four-letter "words".** How many 4-letter "words" (any string of letters, real word or not) can be made from the
letters A, B, C and D (a) if letters may repeat, (b) if each letter is used once?

1. With repeats, every slot has 4 choices: 4 × 4 × 4 × 4 = **256**.
2. Without repeats, the choices go 4, 3, 2, 1: 4 × 3 × 2 × 1 = **24**.

Only 24 of the 256 words (fewer than 1 in 10) use every letter exactly once.

**2. Class jobs.** A class of 10 children needs a class captain and a different child as helper. How many ways?

1. Can one child be both? No. So no repeats.
2. Captain: **10** choices. Helper: anyone except the captain, **9** choices.
3. 10 × 9 = **90** ways.

Check that order matters here: Mia as captain with Leo as helper is different from Leo as captain with Mia as helper.
Both are in the 90, and they should be.

**3. A flag with stripes.** A flag has 3 stripes side by side. Each stripe is red, blue, green or yellow. Colours may
be used again, but two stripes **next to each other** must be different. How many flags?

This is in between "repeats allowed" and "no repeats".

1. 1st stripe: any colour, **4** choices.
2. 2nd stripe: anything except the colour next to it, **3** choices.
3. 3rd stripe: anything except the 2nd stripe's colour, **3** choices. (It may match the 1st stripe: red, blue, red
   is fine.)
4. 4 × 3 × 3 = **36** flags.

**4. Ice-cream cones.** A shop has 6 flavours. You buy a 2-scoop cone, and the order matters (the top scoop is the one
you taste first). How many cones (a) if both scoops may be the same flavour, (b) if they must be different?

1. Same allowed: 6 × 6 = **36** cones.
2. Different: 6 × 5 = **30** cones.
3. Check: the difference is 36 − 30 = 6, which is exactly the 6 cones with the same flavour twice (chocolate on
   chocolate, and so on). That is the diagonal of the grid again.

## Try it

1. A lock has 2 dials, each showing 0 to 9. How many codes? How many if the two digits must be different?
2. How many 3-letter "words" can be made from the 26 letters of the alphabet with repeats allowed? Without repeats?
3. Eight runners race. In how many ways can the 1st and 2nd places be filled? (No ties.)
4. Using the digits 1 to 5, how many 3-digit codes use **some digit more than once**? (Use the two numbers from the
   start of the lesson.)
5. A flag has 4 stripes. Each is one of 3 colours, and stripes next to each other must be different. How many flags?
6. A restaurant has 5 soups. You eat soup on Monday, Tuesday and Wednesday. How many soup plans if (a) you may repeat a
   soup, (b) you never repeat a soup, (c) you never have the same soup two days in a row?
7. Why can you not make a 4-letter word with no repeated letter using only the letters A, B and C? What does the
   "no repeats" counting rule give?

??? note "Answers"
    1. With repeats: 10 × 10 = 100 codes (00 to 99). Different digits: 10 × 9 = 90. The 10 missing codes are 00,
       11, 22, ..., 99.
    2. With repeats: 26 × 26 × 26 = 17 576. Without: 26 × 25 × 24 = 15 600.
    3. 1st place: 8 choices. 2nd place: any of the other 7. 8 × 7 = 56 ways.
    4. All codes: 125. Codes with three different digits: 60. So 125 − 60 = 65 codes repeat some digit.
    5. 1st stripe 3 choices, then each next stripe 2 choices (not the colour beside it): 3 × 2 × 2 × 2 = 24 flags.
    6. (a) 5 × 5 × 5 = 125. (b) 5 × 4 × 3 = 60. (c) Monday 5, Tuesday anything but Monday's soup 4, Wednesday
       anything but Tuesday's soup 4: 5 × 4 × 4 = 80.
    7. You need 4 different letters and you only have 3. The rule gives 3 × 2 × 1 × 0 = 0: by the 4th slot there is
       no letter left, so the 4th slot has 0 choices, and anything times 0 is 0.

## Common mistake

**Adding instead of multiplying.** "Each dial has 5 digits and there are 3 dials, so 5 + 5 + 5 = 15 codes" counts the
digits on the dials, not the codes. A code is a choice for the first dial **and** the second **and** the third, and
"and then" means multiply. A quick test: 1-1-1, 1-1-2, 1-1-3, 1-1-4, 1-1-5 are already 5 codes, and that is with the
first two dials stuck on 1. There must be far more than 15.

**Forgetting that people do not repeat.** For "a captain and a helper from 10 children", 10 × 10 = 100 would let the
same child do both jobs. When the things being chosen are people, places in a race, or objects you pick up and keep,
the count usually goes down by one at each step.

## Where it leads

- Next: [Fussy parts first](02-fussy-parts-first.md), when one slot has its own special rule.
- [Level 3 page](index.md) · [Counting topic page](../index.md)
- Back in level 2, [the level page](../level-2/index.md) has trees, codes and locks, where this all started.
- In level 4, "no repeats until everything is used" becomes the **factorial**: [Factorials](../level-4/01-factorials.md).
- If a lock code is picked at random, what is the chance it has no repeated digit? That is 60 out of 125. Chances like
  this are in [Probability](../../probability/index.md).
