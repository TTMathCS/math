---
title: "Not, and, or"
---

# Not, and, or

*Logic and puzzles · level 3, lesson 1 of 6*

## A question to start

A sign on a café door says:

> "Kids under 10 **or** with a grown-up may come in."

Maya is 8 and has come with her dad. Can she go in? Of course she can. She is under 10, **and** she is with a
grown-up. Both parts are true.

Now look at a menu at the same café:

> "Every lunch comes with soup **or** salad."

Can Maya have both? The waiter will probably say no. Here "or" means "one of them, not both".

The same little word, two different meanings. In mathematics we cannot live with that, so we pick **one** meaning and
stick to it. This lesson shows which one, and why it is the useful choice.

## The idea

### Sentences that are true or false

Logic works with sentences that are either **true** or **false**. Some examples:

- "7 is an odd number." True.
- "A square has 5 sides." False. A false sentence is still a perfectly good sentence for logic. It is just false.
- "It is raining right now." True or false depending on where and when you are, but at any one moment it is one or
  the other.

Some sentences are not true or false at all. "Please shut the window" is a request. "What time is it?" is a question.
Logic leaves them out. In level 4 these true-or-false sentences get a proper name: **statements**.

### Not: flip it

Put **not** into a sentence and you flip it. If the first one was true, the new one is false. If the first one was
false, the new one is true.

| Sentence | True or false? | With "not" | True or false? |
| --- | --- | --- | --- |
| 7 is odd. | true | 7 is **not** odd. | false |
| A square has 5 sides. | false | A square does **not** have 5 sides. | true |

The sentence with "not" is called the **opposite** of the first one. A good test: a sentence and its opposite can
never both be true, and they can never both be false. Exactly one of them is true, always.

### And: both parts must be true

Join two sentences with **and**, and the new sentence is true only when **both** parts are true.

"It is raining **and** it is cold."

- Raining, cold: true.
- Raining, warm: false (the "cold" part fails).
- Dry, cold: false (the "raining" part fails).
- Dry, warm: false (both parts fail).

Only one of the four weathers makes the sentence true. An **and** sentence is fussy: it needs everything.

### Or: at least one part must be true

Join two sentences with **or**, and the new sentence is true when **at least one** part is true. In mathematics,
"at least one" **includes both**.

"It is raining **or** it is cold."

- Raining, cold: true (both parts, and that still counts).
- Raining, warm: true.
- Dry, cold: true.
- Dry, warm: false. This is the only way an **or** sentence can be false: when **both** parts fail.

An **or** sentence is easy-going: it needs just one thing.

**Why choose "one or both"?** Because then "or" has a simple rule that never needs extra words: it is false only when
every part is false. If you mean "one but not both", you say so: "soup or salad, **but not both**". People who write
computer code use the same choice: in almost every programming language, "or" means one or both.

### A picture of and and or

Here are the numbers 1 to 12, sorted with two rules: "is even" (left circle) and "is more than 6" (right circle).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 210" role="img" aria-label="Two overlapping circles. Left circle: even. Right circle: more than 6. Even only: 2, 4, 6. Both: 8, 10, 12. More than 6 only: 7, 9, 11. Outside both: 1, 3, 5.">
  <rect x="10" y="10" width="400" height="190" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="160" cy="110" r="75" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="260" cy="110" r="75" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="14" text-anchor="middle" fill="currentColor">
    <text x="130" y="30">even</text>
    <text x="290" y="30">more than 6</text>
    <text x="125" y="115">2  4  6</text>
    <text x="210" y="100">8</text>
    <text x="210" y="120">10</text>
    <text x="210" y="140">12</text>
    <text x="300" y="115">7  9  11</text>
    <text x="370" y="185">1  3  5</text>
  </g>
</svg>
</div>

- "Even **and** more than 6": only the middle, where the circles overlap: **8, 10, 12**.
- "Even **or** more than 6": anything inside either circle, including the middle: **2, 4, 6, 7, 8, 9, 10, 11, 12**.
- "**Not** even": everything outside the left circle: 1, 3, 5, 7, 9, 11.

So **and** is the overlap, and **or** is the whole of both circles. Keep this picture in your head. You will meet it
again in level 5, where the circles become **sets**.

### The opposite of an and sentence

What is the opposite of "It is raining and it is cold"? Many people say "It is not raining and it is not cold". Let us
test that with the weather list.

The sentence "raining and cold" is false in three weathers: raining-warm, dry-cold and dry-warm. Its true opposite
must be **true** in exactly those three. But "not raining and not cold" is true only in dry-warm. It misses two.

The correct opposite is:

> "It is **not** raining, **or** it is **not** cold."

Check: raining-warm (not cold: true), dry-cold (not raining: true), dry-warm (both: true), raining-cold (false). Exactly
right. To break an **and**, you only need **one** part to fail.

### The opposite of an or sentence

The opposite of "It is raining or it is cold" is:

> "It is **not** raining **and** it is **not** cold."

Why? The **or** sentence is false only when both parts fail, so its opposite is true only when both parts fail, and
"not raining and not cold" says exactly that.

So when you take an opposite, **and** turns into **or**, and **or** turns into **and**. This swap has a name, De
Morgan's laws, which you will meet in level 5.

### The opposite of "all"

The opposite of "**All** my pencils are sharp" is **not** "None of my pencils are sharp". To make the first sentence
false, one blunt pencil is enough. So the opposite is:

> "**At least one** of my pencils is not sharp."

This is the same idea as the **and** rule. "All my pencils are sharp" is really "pencil 1 is sharp **and** pencil 2 is
sharp **and** pencil 3 is sharp ...", and to break a long **and**, one failure is enough.

<figure class="play" data-play="truth"><span class="ai-tag">AI-created</span><figcaption><b>NOT, AND, OR.</b> Pick one and tap the rows: AND needs both, OR needs at least one.</figcaption></figure>

## Worked examples

**1. True or false?** Decide each one.

- "5 is odd and 5 is more than 3." Both parts are true, so the **and** is **true**.
- "5 is odd and 5 is more than 9." The second part is false, so the **and** is **false**.
- "5 is even or 5 is more than 3." The second part is true, so the **or** is **true**.
- "5 is even or 5 is more than 9." Both parts are false, so the **or** is **false**.

**2. Guess my number.** "I am thinking of a whole number from 1 to 20. It is even **and** more than 15."

Even numbers from 1 to 20: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20. More than 15: 16, 17, 18, 19, 20. In **both** lists:
**16, 18, 20**. Three possible numbers.

Now change one word: "It is even **or** more than 15." Now anything in **either** list counts: the 10 even numbers,
plus 17 and 19 (the odd numbers above 15). That is **12** numbers. Changing **and** to **or** made the clue much
weaker: it allows more.

**3. Write the opposite.** Write the opposite of each sentence without starting "It is not true that".

- "Sam likes apples and pears." Opposite: "Sam does **not** like apples, **or** Sam does **not** like pears." (If Sam
  likes apples but hates pears, the first sentence is false, and this opposite is true. Good.)
- "The cat is in the kitchen or in the garden." Opposite: "The cat is **not** in the kitchen **and not** in the
  garden."
- "Every child in the class has a bike." Opposite: "**At least one** child in the class does **not** have a bike."

**4. A tricky one.** "The number 10 is even or 10 is more than 5." Both parts are true. Is the **or** sentence true?
**Yes.** In mathematics, "or" includes both. If someone says "false, because both are true", they are using the menu
meaning, not the math meaning.

## Try it

1. True or false? (a) "A triangle has 3 sides and a square has 4 sides." (b) "A triangle has 3 sides and a square has
   3 sides." (c) "A triangle has 4 sides or a square has 4 sides." (d) "A triangle has 4 sides or a square has 3
   sides."
2. Write the opposite: "The door is open."
3. Using the numbers 1 to 12, list the numbers that are (a) odd **and** less than 6; (b) odd **or** less than 6.
4. Write the opposite, without starting "It is not true that": "Leo is tall and fast."
5. Write the opposite: "All the cookies in the jar are chocolate."
6. Write the opposite: "Today is Saturday or today is Sunday." What everyday word means the same as your answer?
7. A board game says: "You may move if you roll a 6 **or** a double." You roll double sixes. May you move? Explain
   using the math meaning of "or".
8. Ana says the opposite of "The light is red and the door is locked" is "The light is green and the door is open".
   Give a case where Ana's sentence and the original are **both** false, to show she is wrong. (The light can be red,
   green or yellow.)

??? note "Answers"
    1. (a) Both parts true, so **true**. (b) The second part is false, so the **and** is **false**. (c) The second
       part is true, so the **or** is **true**. (d) Both parts are false, so the **or** is **false**.
    2. "The door is **not** open." (Or "The door is closed", which says the same thing.)
    3. (a) Odd numbers are 1, 3, 5, 7, 9, 11; less than 6 are 1, 2, 3, 4, 5. In both: **1, 3, 5**. (b) In either:
       **1, 2, 3, 4, 5, 7, 9, 11** (eight numbers).
    4. "Leo is **not** tall, **or** Leo is **not** fast." One failure is enough to break an **and**.
    5. "**At least one** cookie in the jar is **not** chocolate." (Not "no cookies are chocolate": that is much
       stronger than we need.)
    6. "Today is **not** Saturday **and** today is **not** Sunday." The everyday word is "a **weekday**" (Monday to
       Friday).
    7. **Yes.** You rolled a 6 (true) and a double (true). An **or** sentence is true when at least one part is true,
       and both counts.
    8. Take the light **yellow** and the door **locked**. The original "red and locked" is false (the light is not
       red). Ana's "green and open" is also false (the light is not green, the door is not open). A sentence and its
       true opposite can never both be false, so Ana's sentence is not the opposite. The real opposite is "The light
       is not red, or the door is not locked."

## Common mistake

**Making the opposite too strong.** The opposite of "all the cookies are chocolate" is not "none of them are". The
opposite of "raining and cold" is not "dry and warm". The opposite only has to say **what is needed to make the first
sentence false**, and often one small failure is enough. A good check: in every possible case, exactly one of the two
sentences should be true.

**Using the menu meaning of "or" in math.** In math, "4 is even or 4 is more than 2" is **true**, even though both
parts hold. If you want "one but not both", say "but not both".

## Where it leads

- Back: [Level 2](../level-2/index.md), where you sorted things in two overlapping hoops. Next: [If ... then](02-if-then.md), the fourth little word.
- [Level 3 page](index.md) · [Logic topic page](../index.md)
- In level 4 these words get symbols and **truth tables**: [Statements and letters](../level-4/01-statements-letters.md).
- Counting what is in "this **or** that" without counting the overlap twice: [Counting](../../counting/index.md).
- "Even" and "odd" in the examples come from [Number theory](../../number-theory/index.md).
