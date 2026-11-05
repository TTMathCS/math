---
title: "If ... then"
---

# If ... then

*Logic and puzzles · level 3, lesson 2 of 6*

## A question to start

Here is a true rule: **"If it rains, then the ground gets wet."**

You walk out one morning and the grass is soaking wet. Did it rain in the night?

Most people say yes. But think again. Maybe the sprinkler was on. Maybe someone washed a car. Maybe it is just dew.
The wet ground is a **clue** that it rained, but it does not **prove** it.

Now turn it around. You walk out and the ground is bone dry. Did it rain? This time you can be **sure**: it did not.
If it had rained, the ground would be wet.

So the rule works in one direction and not in the other. This lesson is about exactly that: what an "if ... then"
sentence lets you be sure of, and what it does not.

## The idea

### Two parts

An **if ... then** sentence is made of two smaller sentences.

> If **it rains**, then **the ground gets wet**.

- The part after "if" is the **if-part**: it rains.
- The part after "then" is the **then-part**: the ground gets wet.

The sentence says: **whenever** the if-part happens, the then-part happens too. It is a rule, or a promise.

Many sentences are secretly if-then sentences:

- "All dogs are mammals" means "If an animal is a dog, then it is a mammal."
- "Every square has four sides" means "If a shape is a square, then it has four sides."
- "You need a ticket to get on the bus" means "If you are on the bus, then you have a ticket."

### When is the promise broken?

Think of the sentence as a promise from a parent:

> "If you tidy your room, then you can go to the park."

There are four things that can happen.

| Did you tidy? | Did you go to the park? | Was the promise broken? |
| --- | --- | --- |
| yes | yes | No. Promise kept. |
| yes | no | **Yes.** You tidied and still could not go. That is unfair. |
| no | yes | No. The promise said nothing about what happens if you do not tidy. Maybe it was a nice day anyway. |
| no | no | No. You did not tidy, so the promise did not apply. |

Only **one** case breaks the promise: the if-part happened and the then-part did not. In every other case the promise
stands. That is the whole meaning of "if ... then" in mathematics:

**An if-then sentence is false only when the if-part is true and the then-part is false.**

It may feel strange that "you did not tidy but still went to the park" does not break the promise. But ask yourself:
could you complain that the parent lied? No. They never said "**only** if you tidy". They only promised what would
happen **if** you did.

### Wet ground does not prove rain

Here is a picture of the wet-ground puzzle. Many different things can make the ground wet.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 170" role="img" aria-label="Three boxes on the left, rain, sprinkler and washing the car, each with an arrow to one box on the right, wet ground">
  <g stroke="currentColor" stroke-width="1.5">
    <rect x="15" y="15" width="130" height="36" rx="6" fill="#9cc9ea"/>
    <rect x="15" y="67" width="130" height="36" rx="6" fill="#eea66f"/>
    <rect x="15" y="119" width="130" height="36" rx="6" fill="#eea66f"/>
    <rect x="275" y="67" width="130" height="36" rx="6" fill="#7ccf9a"/>
    <line x1="145" y1="33" x2="268" y2="80"/>
    <line x1="145" y1="85" x2="268" y2="85"/>
    <line x1="145" y1="137" x2="268" y2="90"/>
  </g>
  <g fill="currentColor">
    <polygon points="275,82 264.2,82.2 267,74.8"/>
    <polygon points="275,85 265,80 265,90"/>
    <polygon points="275,88 267,95.2 264.2,87.8"/>
  </g>
  <g font-size="14" text-anchor="middle" fill="currentColor">
    <text x="80" y="38">rain</text>
    <text x="80" y="90">sprinkler</text>
    <text x="80" y="142">washing the car</text>
    <text x="340" y="90">wet ground</text>
  </g>
</svg>
</div>

The rule "if it rains, then the ground gets wet" is one arrow: from **rain** to **wet ground**. An arrow only works in
the direction it points. Seeing the wet ground, you cannot follow the arrow backwards, because the wet ground could
have come along a different arrow.

Turning an if-then sentence around gives a new sentence:

- First: "If it rains, then the ground is wet." True.
- Turned around: "If the ground is wet, then it rained." **Not** always true (sprinkler!).

The turned-around sentence has a name, the **converse**, which you will study in level 4. The big lesson for now:
**a true if-then sentence can have a false turned-around sentence.** You must check each direction on its own.

### What you can be sure of: the dry ground

The dry-ground reasoning goes like this:

1. If it had rained, the ground would be wet.
2. The ground is **not** wet.
3. So it did **not** rain.

Why is this safe? Suppose it **had** rained. Then by the rule the ground would be wet. But it is dry. That cannot both
be so. So the "suppose" was wrong: it did not rain.

So from one true rule you get a second true rule for free:

> "If the ground is **not** wet, then it did **not** rain."

Notice the two changes: the parts **swap places**, and **both** get a "not". This new sentence always means exactly
the same as the original. In level 4 it is called the **contrapositive**.

### Four moves, two safe and two unsafe

With the rule "if it rains, then the ground gets wet", here is what you can and cannot conclude.

| You know ... | Can you be sure ...? | Safe? |
| --- | --- | --- |
| It rained. | The ground is wet. | **Safe.** Follow the arrow forwards. |
| The ground is dry. | It did not rain. | **Safe.** The dry-ground reasoning. |
| The ground is wet. | It rained. | **Unsafe.** The sprinkler. |
| It did not rain. | The ground is dry. | **Unsafe.** The sprinkler again. |

The two unsafe moves are famous mistakes. Detectives in stories make them, and so do people reading adverts.

<figure class="play" data-play="truth"><span class="ai-tag">AI-created</span><figcaption><b>If … then.</b> Pick IF P THEN Q: the only false row is "P true, Q false".</figcaption></figure>

## Worked examples

**1. Numbers.** "If a whole number ends in 0, then it is even."

- Is it true? Yes: a number ending in 0 is a whole number of tens, and 10 is even, so it splits into pairs.
- Turned around: "If a number is even, then it ends in 0." **False.** 4 is even and ends in 4.
- Both parts flipped and "not" added: "If a number is **not** even, then it does **not** end in 0." **True**. An odd
  number like 37 cannot end in 0.

**2. Is the rule broken?** The rule is: "If you are swimming in the pool, then you wear a wristband." The lifeguard
sees four children:

- Ben is swimming, wearing a wristband: fine.
- Cleo is swimming, no wristband: **broken**. This is the only case that breaks it.
- Dev is not swimming, wearing a wristband: fine. The rule says nothing about children on the side.
- Eva is not swimming, no wristband: fine.

**3. Hidden if.** "All birds have feathers." Write it as if-then, then decide what you can be sure of.

"If an animal is a bird, then it has feathers."

- A robin is a bird. So it has feathers. **Safe** (forwards).
- A cat has no feathers. So a cat is not a bird. **Safe** (the not-not move).
- A pillow is full of feathers. So it is a bird? **Unsafe**, and silly.

**4. A number rule that fails.** "If a number is more than 5, then it is more than 10." Is it true?

To show an if-then sentence is false, find **one** case where the if-part is true and the then-part is false. Try 7:
it is more than 5 (true) but not more than 10 (false). So the rule is **false**. One example like this is called a
**counterexample**.

## Try it

1. In "If you heat ice, then it melts", what is the if-part and what is the then-part?
2. Rewrite as an if-then sentence: "All squares are rectangles."
3. The rule: "If it is a weekend, then the library is closed." Which of these breaks it? (a) Saturday, library open.
   (b) Tuesday, library closed. (c) Tuesday, library open. (d) Sunday, library closed.
4. "If a number ends in 5, then it is odd." Is it true? Write the turned-around sentence. Is that true?
5. "If a shape is a triangle, then it has 3 corners." Write the sentence with the parts swapped and both made "not".
   Is it true?
6. Find a counterexample: "If a number is even, then it is more than 3."
7. Detective Dot knows: "If the thief came through the window, there will be mud on the floor." There **is** mud on
   the floor. Dot says, "So the thief came through the window!" Is Dot right to be sure? What should Dot say instead?
8. The same detective finds **no** mud on the floor. What can Dot be sure of, and why?

??? note "Answers"
    1. If-part: "you heat ice". Then-part: "it melts".
    2. "If a shape is a square, then it is a rectangle."
    3. Only **(a)**. It is a weekend (if-part true) and the library is open (then-part false). The others are fine:
       in (b) and (c) the if-part is false, so the rule does not apply; in (d) the promise is kept.
    4. True: a number ending in 5 is a whole number of tens plus 5, and an even number plus 5 is odd. Turned around:
       "If a number is odd, then it ends in 5." **False**: 7 is odd and ends in 7.
    5. "If a shape does **not** have 3 corners, then it is **not** a triangle." **True**, and it means the same as
       the original.
    6. **2** (or 0): it is even, but not more than 3.
    7. **No.** That is the unsafe move of following the arrow backwards. The mud could have come from someone's
       boots. Dot should say: "The mud fits the window idea, but it does not prove it. I need more clues."
    8. Dot can be sure the thief did **not** come through the window. If the thief had, there would be mud. There is
       no mud, so the thief did not.

## Common mistake

**Turning the sentence around.** "If it rains, the ground is wet" does **not** mean "if the ground is wet, it rained".
Before you use an if-then rule, check which way the arrow points, and only follow it forwards, or backwards with
**both** parts made "not".

**Thinking a false if-part breaks the rule.** "If you tidy, you can go to the park." You did not tidy, and you went
anyway. The rule is **not** broken: it only promised what happens when you tidy.

## Where it leads

- Back: [Not, and, or](01-not-and-or.md) · Next: [Knights and knaves](03-knights-and-knaves.md), where you test cases
  the way the detective should.
- [Level 3 page](index.md) · [Logic topic page](../index.md)
- In level 4 the promise table becomes a truth table: [The conditional](../level-4/03-conditional-promise.md), and the
  turned-around and flipped sentences get their names in
  [Converse, inverse and contrapositive](../level-4/04-converse-contrapositive.md).
- "If ... then" facts about shapes: [Geometry](../../geometry/index.md). Rules about even and odd:
  [Number theory](../../number-theory/index.md).
