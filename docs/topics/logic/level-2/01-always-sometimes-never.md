---
title: "Always, sometimes, never"
---

# Always, sometimes, never

*Logic and puzzles · level 2, lesson 1 of 6*

## A question to start

Take any even number: 2, 4, 6, 8, 10, 100, a million. Add 1. Is the answer odd?

Try a few: 4 and 1 make 5 (odd). 10 and 1 make 11 (odd). 100 and 1 make 101 (odd).

It seems to work every time. But there are more even numbers than anyone could ever count. Nobody can try them all.
So how could we ever be **sure** that it works for every single one, even the ones nobody has ever written down?

By the end of this lesson you will be able to prove it, with a picture, for every even number there is.

## The idea

### Three answers instead of two

In level 1 you sorted sentences into **true** and **false**. But some sentences are true for some things and false for
others. "This number is bigger than 10" is true for 15 and false for 3.

So for sentences about **all** numbers, or **all** shapes, we use three answers.

- **Always true:** true for every single one. No exceptions at all.
- **Sometimes true:** true for some, false for others.
- **Never true:** false for every single one.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 120" role="img" aria-label="Three boxes: always (an even number plus 1 is odd), sometimes (a shape with 4 sides is a square), never (a triangle has 4 corners).">
  <rect x="10" y="30" width="140" height="80" rx="12" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="80" y="22" font-size="13" text-anchor="middle" fill="currentColor">always</text>
  <text x="80" y="64" font-size="12" text-anchor="middle" fill="currentColor">an even number</text>
  <text x="80" y="82" font-size="12" text-anchor="middle" fill="currentColor">plus 1 is odd</text>
  <rect x="160" y="30" width="140" height="80" rx="12" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="230" y="22" font-size="13" text-anchor="middle" fill="currentColor">sometimes</text>
  <text x="230" y="64" font-size="12" text-anchor="middle" fill="currentColor">a shape with 4 sides</text>
  <text x="230" y="82" font-size="12" text-anchor="middle" fill="currentColor">is a square</text>
  <rect x="310" y="30" width="140" height="80" rx="12" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="380" y="22" font-size="13" text-anchor="middle" fill="currentColor">never</text>
  <text x="380" y="64" font-size="12" text-anchor="middle" fill="currentColor">a triangle has</text>
  <text x="380" y="82" font-size="12" text-anchor="middle" fill="currentColor">4 corners</text>
</svg>
</div>

### How to show "sometimes"

To show a sentence is **sometimes** true, you need two examples:

1. one example where it is **true**, and
2. one example where it is **false**.

That is all. Two examples and you are done.

**Example.** "A shape with 4 sides is a square."

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 130" role="img" aria-label="Two shapes with 4 sides. A square, which is a square. A long thin rectangle, which is not a square.">
  <rect x="45" y="20" width="70" height="70" fill="#7ccf9a" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <text x="80" y="115" font-size="13" text-anchor="middle" fill="currentColor">a square: yes ✓</text>
  <rect x="190" y="35" width="150" height="40" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <text x="265" y="115" font-size="13" text-anchor="middle" fill="currentColor">a rectangle: no ✗</text>
</svg>
</div>

- A square has 4 sides, and it is a square. True here. ✓
- A rectangle that is long and thin has 4 sides, but it is **not** a square (its sides are not all the same length).
  False here. ✓

One yes, one no: the sentence is **sometimes** true.

### One "no" is enough to stop "always"

Remember the penguin from level 1? One bird that cannot fly was enough to show that "all birds can fly" is false.

It is the same here. If you find even **one** example where a sentence is false, the sentence is **not always** true.
That one example is called a **counterexample**. It might be "sometimes" or "never", but it cannot be "always".

### Why examples cannot prove "always"

Here is the big, important idea of this lesson. Suppose you try "even number plus 1 is odd" for 2, 4, 6, 8 and 10. It
works every time. Does that prove it is **always** true?

**No.** There are more even numbers, and more after those, and more after those. They never end. You cannot test
them all. Maybe there is a giant even number, far away, where it stops working. Testing can make you think "probably
always", but testing alone can never make you **sure**.

To be sure, you need a **reason**: an explanation of **why** it works, that fits every number at once, even the ones
you did not test. Mathematicians call a reason like that a **proof**.

### A proof with a picture: even plus 1

What does **even** mean? A number is even if you can put that many dots into **pairs**, with none left over. A number
is **odd** if, when you make pairs, there is **one** dot left over with no partner.

Now take any even number. Draw it as pairs.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 125" role="img" aria-label="An even number drawn as pairs of dots, with a gap meaning as many pairs as you like. One more dot is added; it has no partner, so the total is odd.">
  <rect x="17" y="19" width="26" height="46" rx="12" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="30" cy="30" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="30" cy="54" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="47" y="19" width="26" height="46" rx="12" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="60" cy="30" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="60" cy="54" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="77" y="19" width="26" height="46" rx="12" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="90" cy="30" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="90" cy="54" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="135" y="48" font-size="20" text-anchor="middle" fill="currentColor">. . .</text>
  <rect x="167" y="19" width="26" height="46" rx="12" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="180" cy="30" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="180" cy="54" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="197" y="19" width="26" height="46" rx="12" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="210" cy="30" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="210" cy="54" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <line x1="235" y1="20" x2="235" y2="90" stroke="currentColor" stroke-width="1"/>
  <text x="250" y="48" font-size="20" fill="currentColor">+</text>
  <circle cx="285" cy="42" r="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="120" y="115" font-size="12" text-anchor="middle" fill="currentColor">an even number: all in pairs</text>
  <text x="300" y="115" font-size="12" text-anchor="middle" fill="currentColor">1 more: no partner</text>
</svg>
</div>

All the dots have partners. Now add 1 more dot. That new dot has no partner, because every other dot is already in a
pair. So there is exactly **one** dot left over. That is what odd means!

Look at what this reason does **not** need. It does not need to know how many pairs there are. It works for 3 pairs,
for 50 pairs, for a million pairs. The picture has a gap in the middle on purpose: it stands for "as many pairs as you
like". So the reason works for **every** even number at once. "An even number plus 1 is odd" is **always** true.

### A proof that something never happens: odd plus odd

"Odd plus odd is odd." Try it: 3 and 5 make 8 (even!). 1 and 1 make 2 (even). 7 and 9 make 16 (even). It looks like it
is never odd. Can we be sure? Picture two odd numbers.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 470 125" role="img" aria-label="Two odd numbers, 5 and 7, each drawn as pairs plus one lonely dot. Put together, the two lonely dots make a pair with each other, so the total, 12, is all pairs: even.">
  <rect x="12" y="19" width="26" height="46" rx="12" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="25" cy="30" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="25" cy="54" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="42" y="19" width="26" height="46" rx="12" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="55" cy="30" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="55" cy="54" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="85" cy="30" r="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="55" y="110" font-size="12" text-anchor="middle" fill="currentColor">odd</text>
  <text x="110" y="48" font-size="20" fill="currentColor">+</text>
  <rect x="137" y="19" width="26" height="46" rx="12" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="150" cy="30" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="150" cy="54" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="167" y="19" width="26" height="46" rx="12" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="180" cy="30" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="180" cy="54" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="197" y="19" width="26" height="46" rx="12" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="210" cy="30" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="210" cy="54" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="240" cy="30" r="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="195" y="110" font-size="12" text-anchor="middle" fill="currentColor">odd</text>
  <text x="265" y="48" font-size="20" fill="currentColor">=</text>
  <rect x="287" y="19" width="26" height="46" rx="12" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="300" cy="30" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="300" cy="54" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="315" y="19" width="26" height="46" rx="12" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="328" cy="30" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="328" cy="54" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="343" y="19" width="26" height="46" rx="12" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="356" cy="30" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="356" cy="54" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="371" y="19" width="26" height="46" rx="12" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="384" cy="30" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="384" cy="54" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="399" y="19" width="26" height="46" rx="12" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="412" cy="30" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="412" cy="54" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <rect x="432" y="19" width="26" height="46" rx="12" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="445" cy="30" r="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="445" cy="54" r="8" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="375" y="100" font-size="12" text-anchor="middle" fill="currentColor">even: the two lonely</text>
  <text x="375" y="115" font-size="12" text-anchor="middle" fill="currentColor">dots pair up</text>
</svg>
</div>

Each odd number is some pairs and **one lonely dot**. Put them together. The pairs stay pairs. And the two lonely
dots? They pair up with **each other**! Now there is nothing left over at all. So the answer is even.

That reason works for any two odd numbers. So "odd plus odd is odd" is **never** true. (And "odd plus odd is even" is
always true. Notice: saying "never" about one sentence is the same as saying "always" about its opposite.)

### Words that change everything

Small words make a big difference.

- "**Every** shape with 4 sides is a square." Never mind sometimes: the word "every" means this sentence claims
  always. It is **false**, because of the rectangle.
- "**Some** shapes with 4 sides are squares." **True**: one square shows it.
- "**No** shape with 4 sides is a square." **False**: the square itself breaks it.

## Worked examples

**Example 1. "If you add two numbers, the answer is bigger than both of them."**

1. Try some: 3 and 4 make 7, bigger than 3 and bigger than 4. ✓ True here.
2. Look for a counterexample. What about **0**? 5 and 0 make 5. Is 5 bigger than 5? No, it is the same. ✗ False
   here.
3. One yes and one no: **sometimes** true.

Zero is a great number to try when you look for a counterexample. It often behaves differently.

**Example 2. "A number that ends in 0 is even."** (Numbers like 10, 30, 250.)

1. Try some: 10 is 5 pairs. 20 is 10 pairs. 30 is 15 pairs. All even.
2. Can we be sure for **every** one? We need a reason.
3. A number that ends in 0 is made of whole **tens**: 30 is 3 tens, 250 is 25 tens.
4. Each ten is 5 pairs, with nothing left over. So each ten is even.
5. Put any number of tens together: all the dots are still in pairs. Nothing is left over. So the number is even.

**Always** true, and we know **why**.

**Example 3. "A triangle has 4 corners."**

A triangle is, by its meaning, a shape with 3 straight sides, and 3 sides always make 3 corners. No triangle can ever
have 4 corners. **Never** true.

**Example 4. "Double a number and you get an even number."**

1. Try: double 3 is 6 (even), double 7 is 14 (even), double 10 is 20 (even).
2. Reason: doubling means making **two piles of the same size**. Take one dot from the first pile and one from the
   second, and make them a pair. Keep going. The piles are the same size, so they run out at the same time, and every
   dot gets a partner.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 105" role="img" aria-label="Doubling 5: two piles of 5 dots, one above the other. Each dot in the first pile is joined to the dot below it, so every dot has a partner.">
  <circle cx="40" cy="30" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="40" cy="80" r="8" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="39" x2="40" y2="71" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3"/>
  <circle cx="80" cy="30" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="80" cy="80" r="8" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <line x1="80" y1="39" x2="80" y2="71" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3"/>
  <circle cx="120" cy="30" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="120" cy="80" r="8" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <line x1="120" y1="39" x2="120" y2="71" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3"/>
  <circle cx="160" cy="30" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="160" cy="80" r="8" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <line x1="160" y1="39" x2="160" y2="71" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3"/>
  <circle cx="200" cy="30" r="8" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="200" cy="80" r="8" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <line x1="200" y1="39" x2="200" y2="71" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3"/>
  <text x="250" y="35" font-size="12" text-anchor="start" fill="currentColor">first pile</text>
  <text x="250" y="85" font-size="12" text-anchor="start" fill="currentColor">second pile, same size</text>
</svg>
</div>

3. Nothing is left over, so the answer is even. **Always** true, for any number, odd or even.

## Try it

Say whether each sentence is **always**, **sometimes** or **never** true, and give a reason or examples.

1. "Even plus even is even."
2. "A number bigger than 5 is bigger than 10."
3. "If you take away a number, the answer is smaller than where you started."
4. "A square has 4 corners."
5. "Odd plus even is even."
6. "A shape with 3 corners has 3 sides."
7. "A number with two digits is bigger than a number with one digit."
8. Ali tested "a number plus itself is even" on 1, 2, 3, 4 and 5, and it worked every time. He says "So it is always
   true. I proved it." Is he right that it is always true? Is he right that he proved it?

??? note "Answers"
    1. **Always.** Both numbers are all pairs. Put them together: still all pairs, nothing left over. (For example,
       4 and 6 make 10.)
    2. **Sometimes.** True for 12 (bigger than 5 and bigger than 10). False for 7 (bigger than 5 but not bigger than
       10).
    3. **Sometimes.** True for 9 take away 3 (6 is smaller than 9). False for 9 take away 0: the answer is 9, which is
       not smaller. Zero is the counterexample.
    4. **Always.** A square has 4 sides, and 4 straight sides that close up into a shape always make 4 corners.
    5. **Never.** The even number is all pairs. The odd number is pairs and one lonely dot. Together: pairs and one
       lonely dot, with nobody for it to pair with. So the answer is odd, never even. (For example, 3 and 4 make 7.)
    6. **Always.** Joining 3 corners with straight lines makes 3 sides: a triangle.
    7. **Always.** The smallest number with two digits is 10. The biggest number with one digit is 9. Every two-digit
       number is 10 or more, and every one-digit number is 9 or less. (Here we mean whole numbers like 0, 1, 2, ...)
    8. It is **always** true (it is the same as doubling, Example 4). But Ali did **not** prove it: five examples cannot
       cover every number. To prove it, he needs a reason, like the picture of two equal piles making pairs.

## Common mistake

**"It worked for all the ones I tried, so it is always true."** Trying examples is a great way to **guess**. But a guess
is not a proof. Some sentences work for many examples and then fail. For example, "a number less than 100 is less than
10" works for 1, 2, 3, all the way to 9, and then fails at 10. Always look for a reason.

**Calling a sentence "never" because of one counterexample.** One counterexample shows "not always". To get "never" you
must show it fails for **every** case. If it also works sometimes, the answer is "sometimes".

## Where it leads

- Next lesson: [Sorting circles](02-sorting-circles.md).
- This level: [Level 2: Rules and puzzles](index.md). The whole topic: [Logic and puzzles](../index.md).
- Back in level 1: [True or false](../level-1/04-true-or-false.md), where one penguin broke "all birds can fly".
- More odd and even reasons with dot pictures: [Odd and even sums](../../number-theory/level-2/01-odd-even-sums.md)
  in Number theory.
- Shapes with 4 sides, and which ones are squares: [Geometry](../../geometry/index.md).
- Later in Logic, "reasons that work for every case" grow into real proofs; the words "for all" and "there exists" come
  in level 5: [Quantifiers](../level-5/04-quantifiers.md).
