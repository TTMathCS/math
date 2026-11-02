---
title: "Play: Odd, even and rectangle numbers"
---

# Play: Odd, even and rectangle numbers

*Number theory · step 1 of 5*

## A question to start

You have 7 sweets and you want to share them fairly with one friend. Each of you takes one, then one more, then one
more. What happens at the end?

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 110" role="img" aria-label="Seven sweets: three pairs in two rows and one sweet left over">
  <g fill="#eea66f">
    <circle cx="40" cy="35" r="12"/><circle cx="90" cy="35" r="12"/><circle cx="140" cy="35" r="12"/>
    <circle cx="40" cy="80" r="12"/><circle cx="90" cy="80" r="12"/><circle cx="140" cy="80" r="12"/>
  </g>
  <circle cx="230" cy="57" r="12" fill="#9cc9ea"/>
  <g font-size="14" fill="currentColor">
    <text x="10" y="40">you</text>
    <text x="0" y="85">friend</text>
    <text x="255" y="62">one left over!</text>
  </g>
</svg>
</div>

After three rounds each of you has 3 sweets, and **one sweet is left over**. There is no fair way to give it out
without cutting it in half. With 8 sweets this never happens: you get 4, your friend gets 4, and nothing is left.

Some numbers share into two equal groups perfectly and some always leave one behind. That simple difference is
the first idea of **number theory**, the part of mathematics that studies whole numbers and how they fit together.

## The idea

### Even and odd

A number is **even** if you can put that many things into **pairs** with nothing left over. A number is **odd** if
one thing is always left without a partner.

- Even numbers: 0, 2, 4, 6, 8, 10, 12, ...
- Odd numbers: 1, 3, 5, 7, 9, 11, 13, ...

Even and odd take turns along the number line: even, odd, even, odd, for ever.

**The last-digit trick.** You do not need to count pairs in a big number. Just look at its **last digit** (the one
on the far right).

- If the last digit is 0, 2, 4, 6 or 8, the whole number is even.
- If the last digit is 1, 3, 5, 7 or 9, the whole number is odd.

So 3,478 is even (it ends in 8), and 1,000,001 is odd (it ends in 1). Why does this work? Every ten can be split
into 5 pairs, so all the tens, hundreds and thousands pair up perfectly. Only the ones at the end can cause trouble.

### Putting odd and even together

Think about the leftover sweet.

- **Even + even.** Both groups pair up perfectly, so the total does too. Even.
- **Even + odd.** One group has a lonely sweet; the other cannot help it. Odd.
- **Odd + odd.** Each group has one lonely sweet, and the two lonely sweets become a pair! Even.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 100" role="img" aria-label="Five dots plus three dots: the two leftover dots join into a new pair, making eight, which is even">
  <g fill="#eea66f">
    <circle cx="30" cy="30" r="9"/><circle cx="60" cy="30" r="9"/>
    <circle cx="30" cy="60" r="9"/><circle cx="60" cy="60" r="9"/>
  </g>
  <circle cx="90" cy="45" r="9" fill="#9cc9ea"/>
  <text x="125" y="52" font-size="22" fill="currentColor" text-anchor="middle">+</text>
  <g fill="#7ccf9a">
    <circle cx="160" cy="30" r="9"/><circle cx="160" cy="60" r="9"/>
  </g>
  <circle cx="190" cy="45" r="9" fill="#9cc9ea"/>
  <text x="225" y="52" font-size="22" fill="currentColor" text-anchor="middle">=</text>
  <g fill="#eea66f">
    <circle cx="260" cy="30" r="9"/><circle cx="290" cy="30" r="9"/>
    <circle cx="260" cy="60" r="9"/><circle cx="290" cy="60" r="9"/>
  </g>
  <g fill="#7ccf9a"><circle cx="320" cy="30" r="9"/><circle cx="320" cy="60" r="9"/></g>
  <g fill="#9cc9ea"><circle cx="350" cy="30" r="9"/><circle cx="350" cy="60" r="9"/></g>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="60" y="92">5</text><text x="175" y="92">3</text><text x="305" y="92">8</text>
  </g>
</svg>
</div>

You can now say whether 457 + 389 is odd or even **without adding**: odd plus odd is even.

### Rectangle numbers and line numbers

Now take some counters and try to lay them out as a **rectangle**: neat rows, every row the same length, at least
two rows and at least two in each row.

With 12 counters you can make three different rectangles: 2 rows of 6, 3 rows of 4, and (if you count a long one)
1 row of 12.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 110" role="img" aria-label="Twelve counters as 2 rows of 6 and as 3 rows of 4; seven counters can only make one line">
  <g fill="#eea66f">
    <circle cx="15" cy="30" r="7"/><circle cx="33" cy="30" r="7"/><circle cx="51" cy="30" r="7"/>
    <circle cx="69" cy="30" r="7"/><circle cx="87" cy="30" r="7"/><circle cx="105" cy="30" r="7"/>
    <circle cx="15" cy="48" r="7"/><circle cx="33" cy="48" r="7"/><circle cx="51" cy="48" r="7"/>
    <circle cx="69" cy="48" r="7"/><circle cx="87" cy="48" r="7"/><circle cx="105" cy="48" r="7"/>
  </g>
  <g fill="#9cc9ea">
    <circle cx="150" cy="20" r="7"/><circle cx="168" cy="20" r="7"/><circle cx="186" cy="20" r="7"/><circle cx="204" cy="20" r="7"/>
    <circle cx="150" cy="38" r="7"/><circle cx="168" cy="38" r="7"/><circle cx="186" cy="38" r="7"/><circle cx="204" cy="38" r="7"/>
    <circle cx="150" cy="56" r="7"/><circle cx="168" cy="56" r="7"/><circle cx="186" cy="56" r="7"/><circle cx="204" cy="56" r="7"/>
  </g>
  <g fill="#7ccf9a">
    <circle cx="250" cy="40" r="7"/><circle cx="268" cy="40" r="7"/><circle cx="286" cy="40" r="7"/>
    <circle cx="304" cy="40" r="7"/><circle cx="322" cy="40" r="7"/><circle cx="340" cy="40" r="7"/><circle cx="358" cy="40" r="7"/>
  </g>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="60" y="90">12: 2 rows of 6</text><text x="177" y="90">12: 3 rows of 4</text><text x="304" y="90">7: only a line</text>
  </g>
</svg>
</div>

With 7 counters, try as hard as you like: 2 rows leaves one over, 3 rows leaves one over, and so on. The only
way is one long line. Numbers like 7 that can only make a line are very special. Here are the first few:

**2, 3, 5, 7, 11, 13, 17, 19, 23, 29, ...**

Mathematicians call them **prime numbers**. You will meet that name properly in the next step. For now, think of
them as the "line-only" numbers. (The number 1 is not on the list: one counter is not really a line or a
rectangle of anything, so it is left out of the game.)

## Worked example

**Which of 15, 16 and 17 are rectangle numbers? How many rectangles can each one make?**

1. **15.** Try 2 rows: 7 in each row and 1 left over. No. Try 3 rows: 5 in each row, nothing left. Yes! So 15 is a
   rectangle number: 3 rows of 5. (Turning it round gives 5 rows of 3, which is the same rectangle on its side.)
2. **16.** It is even, so 2 rows of 8 works. Try 3 rows: 5 in each row and 1 left over. No. Try 4 rows: 4 in each
   row. Yes, a perfect square! So 16 makes two rectangles: 2 by 8 and 4 by 4.
3. **17.** It is odd, so 2 rows fails. 3 rows: 5 in each row, 2 left over. 4 rows: 4 in each row, 1 left over.
   5 rows would hold only 3 in each row, fewer than the number of rows, and you have already tried 3 rows. So
   there is no point trying further. **17 is a line-only number.**

Notice the shortcut in step 3: once the number of rows gets bigger than the number in each row, you are only
looking at rectangles you have already tried, turned on their side. So you can stop.

## Try it

1. Is 2,365 odd or even? How do you know without counting?
2. Without adding, is 38 + 57 odd or even?
3. 10 children want to play in pairs. Can everyone have a partner? What about 13 children?
4. Which of these are line-only numbers: 9, 11, 21, 23?
5. How many different rectangles can you make with 24 counters? (Count 2 by 12 and 12 by 2 as the same.)
6. Odd + odd is even. What about odd + odd + odd?

??? note "Answers"
    1. Odd. It ends in 5, and 5 is odd.
    2. Odd. 38 is even and 57 is odd, and even + odd is odd. (Check: 38 + 57 = 95.)
    3. 10 children make 5 pairs with nobody left out. 13 children make 6 pairs and one child is left over, because
       13 is odd.
    4. 11 and 23. 9 is 3 rows of 3, and 21 is 3 rows of 7, so they are rectangle numbers.
    5. Four: 2 by 12, 3 by 8, 4 by 6, and the long line 1 by 24. (5 rows leaves 4 over; 6 rows gives 6 by 4, which
       is 4 by 6 turned round, so you can stop.) If you only count real rectangles with at least two rows, there
       are three.
    6. Odd. The first two odd numbers make an even number, and even + odd is odd. Each odd number brings one lonely
       counter: three lonely counters make one pair and one still left over.

## Common mistake

**Looking at the first digit instead of the last.** 81 starts with 8, but it is odd: it ends in 1. Only the last
digit decides odd or even. It does not matter how big the number is or what it starts with.

## Where it leads

- Next step: [Explore: factors, multiples and divisibility tricks](02-explore.md), where rectangle numbers become
  *factors* and line-only numbers get their real name, *primes*.
- Patterns that take turns, like odd and even, are explored in [Patterns and sequences](../patterns/index.md).
- Sharing things out fairly comes back when you count in [Counting and combinations](../counting/index.md).
