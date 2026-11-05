---
title: "Pairs: everything has a partner"
---

# Pairs: everything has a partner

*Number theory · level 1, lesson 1 of 6*

## A question to start

You tip the sock basket onto the floor. You count 9 socks. You start matching them up, two by two. Can every sock
find a partner?

Try to guess before you read on. Here is a surprising fact: you can answer this question **without knowing anything
about the colours or the patterns of the socks**. You only need the number 9. By the end of this lesson you will
know why 9 socks always leave one sock alone, and why 10 socks can all have partners.

## The idea

### What a pair is

A **pair** is two things that go together. Two shoes are a pair. Two socks are a pair. Your two hands are a pair,
and so are your two eyes and your two ears.

In this lesson, any two things can be a pair. Two buttons. Two crayons. Two children holding hands. A pair is just
**two**, side by side.

When two things make a pair, we say each one has a **partner**. Your left shoe is the partner of your right shoe.

### Lining up two by two

Here is a good way to find pairs. Put the things in **two rows**. Put one thing in the top row, then one in the
bottom row. Then one on top again, then one on the bottom. Keep going until you run out.

Here are 6 shoes, lined up two by two.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 120" role="img" aria-label="Six orange circles in two rows of three. Every circle in the top row has a partner below it.">
  <g fill="#eea66f" stroke="currentColor" stroke-width="1.5">
    <circle cx="60" cy="35" r="15"/><circle cx="120" cy="35" r="15"/><circle cx="180" cy="35" r="15"/>
    <circle cx="60" cy="80" r="15"/><circle cx="120" cy="80" r="15"/><circle cx="180" cy="80" r="15"/>
  </g>
  <g stroke="currentColor" stroke-width="2">
    <line x1="60" y1="50" x2="60" y2="65"/><line x1="120" y1="50" x2="120" y2="65"/><line x1="180" y1="50" x2="180" y2="65"/>
  </g>
  <text x="250" y="62" font-size="14" text-anchor="middle" fill="currentColor">6: all pairs</text>
</svg>
</div>

Look at each one in the top row. Is there one just under it? Yes, every time. So all 6 have a partner. We made
**3 pairs**, and nothing is left.

Now here are 7 socks, lined up the same way.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 120" role="img" aria-label="Seven circles: three blue pairs in two rows, and one green circle on top with no partner below it">
  <g fill="#9cc9ea" stroke="currentColor" stroke-width="1.5">
    <circle cx="60" cy="35" r="15"/><circle cx="120" cy="35" r="15"/><circle cx="180" cy="35" r="15"/>
    <circle cx="60" cy="80" r="15"/><circle cx="120" cy="80" r="15"/><circle cx="180" cy="80" r="15"/>
  </g>
  <circle cx="240" cy="35" r="15" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="240" cy="80" r="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/>
  <g stroke="currentColor" stroke-width="2">
    <line x1="60" y1="50" x2="60" y2="65"/><line x1="120" y1="50" x2="120" y2="65"/><line x1="180" y1="50" x2="180" y2="65"/>
  </g>
  <text x="240" y="112" font-size="13" text-anchor="middle" fill="currentColor">no partner!</text>
</svg>
</div>

We made 3 pairs again. But one sock sits on top with an empty space under it. It has **no partner**. It is left
over.

### Even and odd

Now we can give these two kinds of numbers their names.

- A number is **even** when everything can have a partner. Nothing is left over. 6 is even.
- A number is **odd** when you make all the pairs you can and **one** is left over. 7 is odd.

Here are the numbers from 1 to 10, each lined up two by two. Look at the right-hand end of each one.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 520 150" role="img" aria-label="The numbers 1 to 10 drawn as dots in two rows. The even numbers 2, 4, 6, 8, 10 end flat. The odd numbers 1, 3, 5, 7, 9 have one dot sticking out on top.">
  <g fill="#7ccf9a">
    <circle cx="20" cy="50" r="7"/>
  </g>
  <g fill="#eea66f">
    <circle cx="65" cy="50" r="7"/><circle cx="65" cy="70" r="7"/>
  </g>
  <g fill="#7ccf9a">
    <circle cx="105" cy="50" r="7"/><circle cx="105" cy="70" r="7"/><circle cx="125" cy="50" r="7"/>
  </g>
  <g fill="#eea66f">
    <circle cx="160" cy="50" r="7"/><circle cx="160" cy="70" r="7"/><circle cx="180" cy="50" r="7"/><circle cx="180" cy="70" r="7"/>
  </g>
  <g fill="#7ccf9a">
    <circle cx="215" cy="50" r="7"/><circle cx="215" cy="70" r="7"/><circle cx="235" cy="50" r="7"/><circle cx="235" cy="70" r="7"/>
    <circle cx="255" cy="50" r="7"/>
  </g>
  <g fill="#eea66f">
    <circle cx="290" cy="50" r="7"/><circle cx="290" cy="70" r="7"/><circle cx="310" cy="50" r="7"/><circle cx="310" cy="70" r="7"/>
    <circle cx="330" cy="50" r="7"/><circle cx="330" cy="70" r="7"/>
  </g>
  <g fill="#7ccf9a">
    <circle cx="365" cy="50" r="7"/><circle cx="365" cy="70" r="7"/><circle cx="385" cy="50" r="7"/><circle cx="385" cy="70" r="7"/>
    <circle cx="405" cy="50" r="7"/><circle cx="405" cy="70" r="7"/><circle cx="425" cy="50" r="7"/>
  </g>
  <g fill="#eea66f">
    <circle cx="460" cy="50" r="7"/><circle cx="460" cy="70" r="7"/><circle cx="480" cy="50" r="7"/><circle cx="480" cy="70" r="7"/>
    <circle cx="500" cy="50" r="7"/><circle cx="500" cy="70" r="7"/>
  </g>
  <g font-size="13" text-anchor="middle" fill="currentColor">
    <text x="20" y="105">1</text><text x="65" y="105">2</text><text x="115" y="105">3</text><text x="170" y="105">4</text>
    <text x="235" y="105">5</text><text x="310" y="105">6</text><text x="395" y="105">7</text><text x="480" y="105">8 ...</text>
  </g>
  <text x="260" y="135" font-size="13" text-anchor="middle" fill="currentColor">orange: even (flat end) · green: odd (one sticks out)</text>
</svg>
</div>

The even numbers (orange) have a **flat end**: two rows of the same length. The odd numbers (green) have **one dot
sticking out** on top. Going on, 9 has one sticking out and 10 is flat again.

So the even numbers are 2, 4, 6, 8, 10, 12, ... and the odd numbers are 1, 3, 5, 7, 9, 11, ...

### Why only one can be left over

Here is something to think about. When you line things up two by two, can **two** things be left over?

No! If two things were left over, they could hold hands and become a pair. Then they would not be left over any
more. So when you have made all the pairs you can, there is either **nothing** left or **just one** left. There is
never a third choice.

That is why every number is **either even or odd**. No number is both. No number is neither.

### Does the order matter?

What if you pair up the socks in a different order? You might match the red sock with the blue sock first, or the
striped one with the spotty one. Will you end up with a different leftover?

No. The number of things does not change when you move them around. 7 socks are still 7 socks, however you pair
them. So the answer only depends on **how many** there are. That is why we did not need to know the colours of the
socks in the question at the start. Mathematicians love this: a question about socks turns out to be a question
about a **number**.

### What about zero?

Zero means **nothing at all**. If the basket has 0 socks, is any sock left without a partner?

No sock is left over, because there are no socks! Nothing is left over, so **0 is even**. This surprises many
people, but it fits the rule perfectly. It also fits the pattern: 1 is odd, so the number just before it should
be even. And it is.

### Pairs in the sky

Some planets have moons that go around them. Our Earth has one Moon. The planet Mars has **two** small moons,
called Phobos and Deimos. So Mars has a pair of moons: 2 is even, and both moons have a partner.

<figure class="play" data-play="tenframe" data-mode="pairs"><span class="ai-tag">AI-created</span><figcaption><b>Everyone a partner?</b> Even numbers pair up exactly; odd numbers leave one out.</figcaption></figure>

## Worked examples

**Example 1. Eight children.** 8 children go to the park. The teacher says, "Hold hands with a partner." Does
everyone get a partner?

1. Line the children up two by two: one, two (a pair), three, four (a pair), and so on.
2. Count the pairs: 1 pair, 2 pairs, 3 pairs, 4 pairs. That uses up 8 children.
3. Nobody is left over.
4. So **yes**, everyone gets a partner. 8 is **even**, and there are 4 pairs.

**Example 2. Eleven socks.** You find 11 socks in the wash. How many pairs can you make? Is one left?

1. Make pairs: 2 socks, 4 socks, 6 socks, 8 socks, 10 socks. That is 5 pairs.
2. 10 socks are used up. 11 take away 10 leaves 1.
3. So you make **5 pairs** and **1 sock is left over**. 11 is **odd**.
4. Check: 5 pairs is 10 socks, and 10 and 1 more make 11. ✓

**Example 3. Is 12 even or odd?** Put 12 buttons in two rows.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 100" role="img" aria-label="Twelve buttons in two rows of six, with a flat end">
  <g fill="#9cc9ea" stroke="currentColor" stroke-width="1.5">
    <circle cx="40" cy="30" r="12"/><circle cx="80" cy="30" r="12"/><circle cx="120" cy="30" r="12"/>
    <circle cx="160" cy="30" r="12"/><circle cx="200" cy="30" r="12"/><circle cx="240" cy="30" r="12"/>
    <circle cx="40" cy="65" r="12"/><circle cx="80" cy="65" r="12"/><circle cx="120" cy="65" r="12"/>
    <circle cx="160" cy="65" r="12"/><circle cx="200" cy="65" r="12"/><circle cx="240" cy="65" r="12"/>
  </g>
  <text x="290" y="52" font-size="14" text-anchor="middle" fill="currentColor">12</text>
</svg>
</div>

1. The top row has 6. The bottom row has 6.
2. The end is flat: every button on top has a partner below.
3. So **12 is even**. It makes 6 pairs.

**Example 4. One more.** Ben has an even number of marbles. His friend gives him 1 more. Is his new number even or
odd?

1. Before, all his marbles had partners. The end was flat.
2. The new marble sits on the end with nobody under it.
3. So now **one is left over**. His new number is **odd**.

This works for any even number. One more than an even number is always odd. And one more than an odd number is
always even, because the new one becomes the partner of the lonely one.

## Try it

1. Count your fingers on one hand. Is that number even or odd? What about both hands together?
2. Line up 5 crayons two by two. How many pairs do you make? Is one left?
3. A farmer has 10 boots by the door. How many pairs of boots is that?
4. Is 0 even or odd? Explain with socks.
5. Mars has 2 moons. Is 2 even or odd?
6. Sara says: "I made pairs and 2 were left over." What would you tell her?
7. A number is odd. You add 1 more. Is the new number even or odd? Draw it.
8. A spider has 8 legs. An ant has 6 legs. Can each animal's legs be put into pairs?

??? note "Answers"
    1. One hand has 5 fingers. 5 is **odd**: two pairs and one finger left over (often the thumb). Both hands have
       10 fingers. 10 is **even**: put your hands together, and every finger touches a partner on the other hand.
    2. **2 pairs**, and **1 crayon is left over**. 5 is odd.
    3. **5 pairs**. Count by pairs: 2, 4, 6, 8, 10. That is 5 counts, so 5 pairs.
    4. **Even**. With 0 socks there is no sock left without a partner, because there are no socks at all. Nothing
       is left over, and "nothing left over" is what even means.
    5. **Even**. Phobos and Deimos make one pair, with nothing left over.
    6. Tell her she can make **one more pair**. Two leftover things can be partners. When she has made every pair
       she can, she will have 0 or 1 left over, never 2.
    7. **Even**. The odd number has one lonely thing sticking out. The new one goes underneath it and becomes its
       partner, so the end is flat.
    8. **Yes, both**. 8 legs make 4 pairs. 6 legs make 3 pairs. Animals with legs on two sides, left and right,
       have each left leg matched with a right leg, so their number of legs is even.

## Common mistake

**Stopping too soon.** Some children see two things left at the end and say "2 left over, so it is odd". But two
leftovers are a pair! Always keep pairing until **nothing or one** is left.

**Thinking a big number must be even.** Being big has nothing to do with it. 1,000 is even, but 1,001 is odd. In
the next lesson you will learn a quick way to tell, just by looking at the number.

## Where it leads

- Next lesson: [Odd and even on the number line](02-odd-even-line.md), where you see odd and even take turns, and
  learn the last-digit trick.
- This level: [Level 1: Odd, even and sharing](index.md). The whole topic: [Number theory](../index.md).
- Lining things up and counting them carefully: [Numbers](../../numbers/index.md).
- Odd, even, odd, even is a pattern that repeats: [Patterns](../../patterns/index.md).
- Two rows of things make a rectangle. You will see why that matters in
  [Rectangle numbers](05-rectangle-numbers.md).
