---
title: "Counting what you do not want"
---

# Counting what you do not want

*Counting and combinations · level 3, lesson 3 of 6*

## A question to start

A bike lock has three dials, each showing a digit from 0 to 9, so its codes run from 000 to 999. That is 1000 codes.
How many of them have **at least one 7** in them?

A tempting answer goes like this: "The first dial is 7 in 100 codes, the second dial is 7 in 100 codes, the third dial
is 7 in 100 codes. So 300." It sounds right, but the true answer is **271**.

Where did the other 29 go? And how can you get 271 in one line, without listing? The trick in this lesson is one of the
most useful in all of counting: **count the ones you do not want, and take them away from everything.**

## The idea

### "At least one" is messy

A code with at least one 7 could have **exactly one** 7 (like 172), **exactly two** 7s (like 707), or **three** 7s
(777). You could count each kind and add, and we will, to check. But it is fiddly, and with longer codes it gets worse.

Now look at the opposite question: how many codes have **no 7 at all**? That is easy. Each dial can show any digit
except 7, so each dial has 9 choices:

9 × 9 × 9 = 729 codes with no 7.

### Splitting everything into two piles

Every one of the 1000 codes goes into exactly **one** of two piles:

- the pile of codes that **have** a 7 somewhere,
- the pile of codes that have **no** 7.

No code is in both piles, and no code is left out. So the two piles together make 1000:

(codes with a 7) + (codes with no 7) = 1000.

That means

codes with at least one 7 = 1000 − 729 = **271**.

This is called **counting the complement**. The **complement** of a group is everything that is *not* in it. When the
group you want is awkward and its complement is easy, count the complement and subtract from the total.

### Seeing it on a grid

The same idea is easy to see with **2-dial** codes, 00 to 99. Put the first digit down the side and the second across
the top. Every square is one code.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 200" role="img" aria-label="A 10 by 10 grid of the codes 00 to 99. Row 7 and column 7 are shaded: they cross at the square 77. 19 squares are shaded and 81 are not">
  <rect x="40" y="25" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="56" y="25" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="72" y="25" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="88" y="25" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="104" y="25" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="120" y="25" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="136" y="25" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="152" y="25" width="16" height="16" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.6"/>
  <rect x="168" y="25" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="184" y="25" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="40" y="41" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="56" y="41" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="72" y="41" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="88" y="41" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="104" y="41" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="120" y="41" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="136" y="41" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="152" y="41" width="16" height="16" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.6"/>
  <rect x="168" y="41" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="184" y="41" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="40" y="57" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="56" y="57" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="72" y="57" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="88" y="57" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="104" y="57" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="120" y="57" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="136" y="57" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="152" y="57" width="16" height="16" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.6"/>
  <rect x="168" y="57" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="184" y="57" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="40" y="73" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="56" y="73" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="72" y="73" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="88" y="73" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="104" y="73" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="120" y="73" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="136" y="73" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="152" y="73" width="16" height="16" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.6"/>
  <rect x="168" y="73" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="184" y="73" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="40" y="89" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="56" y="89" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="72" y="89" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="88" y="89" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="104" y="89" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="120" y="89" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="136" y="89" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="152" y="89" width="16" height="16" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.6"/>
  <rect x="168" y="89" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="184" y="89" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="40" y="105" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="56" y="105" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="72" y="105" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="88" y="105" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="104" y="105" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="120" y="105" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="136" y="105" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="152" y="105" width="16" height="16" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.6"/>
  <rect x="168" y="105" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="184" y="105" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="40" y="121" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="56" y="121" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="72" y="121" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="88" y="121" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="104" y="121" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="120" y="121" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="136" y="121" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="152" y="121" width="16" height="16" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.6"/>
  <rect x="168" y="121" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="184" y="121" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="40" y="137" width="16" height="16" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.6"/>
  <rect x="56" y="137" width="16" height="16" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.6"/>
  <rect x="72" y="137" width="16" height="16" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.6"/>
  <rect x="88" y="137" width="16" height="16" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.6"/>
  <rect x="104" y="137" width="16" height="16" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.6"/>
  <rect x="120" y="137" width="16" height="16" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.6"/>
  <rect x="136" y="137" width="16" height="16" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.6"/>
  <rect x="152" y="137" width="16" height="16" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.6"/>
  <rect x="168" y="137" width="16" height="16" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.6"/>
  <rect x="184" y="137" width="16" height="16" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.6"/>
  <rect x="40" y="153" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="56" y="153" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="72" y="153" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="88" y="153" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="104" y="153" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="120" y="153" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="136" y="153" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="152" y="153" width="16" height="16" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.6"/>
  <rect x="168" y="153" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="184" y="153" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="40" y="169" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="56" y="169" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="72" y="169" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="88" y="169" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="104" y="169" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="120" y="169" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="136" y="169" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="152" y="169" width="16" height="16" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.6"/>
  <rect x="168" y="169" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <rect x="184" y="169" width="16" height="16" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="0.6"/>
  <text x="48.0" y="19" font-size="10" text-anchor="middle" fill="currentColor">0</text>
  <text x="32" y="37.0" font-size="10" text-anchor="middle" fill="currentColor">0</text>
  <text x="64.0" y="19" font-size="10" text-anchor="middle" fill="currentColor">1</text>
  <text x="32" y="53.0" font-size="10" text-anchor="middle" fill="currentColor">1</text>
  <text x="80.0" y="19" font-size="10" text-anchor="middle" fill="currentColor">2</text>
  <text x="32" y="69.0" font-size="10" text-anchor="middle" fill="currentColor">2</text>
  <text x="96.0" y="19" font-size="10" text-anchor="middle" fill="currentColor">3</text>
  <text x="32" y="85.0" font-size="10" text-anchor="middle" fill="currentColor">3</text>
  <text x="112.0" y="19" font-size="10" text-anchor="middle" fill="currentColor">4</text>
  <text x="32" y="101.0" font-size="10" text-anchor="middle" fill="currentColor">4</text>
  <text x="128.0" y="19" font-size="10" text-anchor="middle" fill="currentColor">5</text>
  <text x="32" y="117.0" font-size="10" text-anchor="middle" fill="currentColor">5</text>
  <text x="144.0" y="19" font-size="10" text-anchor="middle" fill="currentColor">6</text>
  <text x="32" y="133.0" font-size="10" text-anchor="middle" fill="currentColor">6</text>
  <text x="160.0" y="19" font-size="10" text-anchor="middle" fill="currentColor">7</text>
  <text x="32" y="149.0" font-size="10" text-anchor="middle" fill="currentColor">7</text>
  <text x="176.0" y="19" font-size="10" text-anchor="middle" fill="currentColor">8</text>
  <text x="32" y="165.0" font-size="10" text-anchor="middle" fill="currentColor">8</text>
  <text x="192.0" y="19" font-size="10" text-anchor="middle" fill="currentColor">9</text>
  <text x="32" y="181.0" font-size="10" text-anchor="middle" fill="currentColor">9</text>
  <text x="220" y="60" font-size="13" fill="currentColor">all codes: 10 × 10 = 100</text>
  <text x="220" y="85" font-size="13" fill="currentColor">pale squares (no 7): 9 × 9 = 81</text>
  <text x="220" y="110" font-size="13" fill="currentColor">shaded (a 7 somewhere): 100 − 81 = 19</text>
  <text x="220" y="145" font-size="13" fill="currentColor">row 7 has 10, column 7 has 10,</text>
  <text x="220" y="165" font-size="13" fill="currentColor">but 77 is in both: 10 + 10 − 1 = 19</text>
</svg>
</div>

The codes with a 7 are the shaded **cross**: row 7 (70 to 79) and column 7 (07, 17, ..., 97). If you count 10 for the
row and 10 for the column, you get 20, but the square **77** sits where they cross and has been counted twice. The real
number of shaded squares is 19.

The pale squares, with no 7, make a 9 by 9 block once you squeeze the cross out: 81 squares. And 100 − 81 = 19. The
complement way gives the right answer straight away, with no worrying about squares counted twice.

### Why 300 was wrong

The same thing happened with the three dials, only more so. The 100 codes "with 7 on the first dial" and the 100
"with 7 on the second dial" overlap: codes like 772 are in both lists. Code 777 is in all three lists and was counted
three times. Adding 100 + 100 + 100 counts some codes more than once.

Let us check 271 the long way, by counting exactly how many 7s each code has.

- **Exactly one 7.** Choose which dial shows the 7: 3 ways. The other two dials show anything but 7: 9 × 9 = 81
  ways. So 3 × 81 = **243**.
- **Exactly two 7s.** Choose which dial is *not* 7: 3 ways. That dial shows anything but 7: 9 ways. So 3 × 9 = **27**.
- **Three 7s.** Just 777: **1**.

243 + 27 + 1 = **271**. ✓ Both roads agree. But the complement road took one line, and the long road took three cases.

Where is the 300? Codes with one 7 were counted once (243), codes with two 7s were counted twice (2 × 27 = 54), and
777 was counted three times (3). 243 + 54 + 3 = 300. That is exactly the over-count.

### When to use it

Look for these words in a question: **at least one**, **not all**, **some ... repeat**, **not**. They often mean the
complement is easier.

| The question asks for | Count instead | Then |
| --- | --- | --- |
| at least one 7 | no 7 at all | total − that |
| at least one head in coin tosses | no heads (all tails) | total − that |
| some digit repeated | all digits different | total − that |
| Ana is not first | Ana is first | total − that |

The total must be the total of the **same kind** of thing. If you are counting 3-digit codes, the total is the number
of 3-digit codes, not some other number.

## Worked examples

**1. Coin tosses.** A coin is tossed 4 times and the results written down, like HTTH. How many results have at least
one head?

1. Total results: 2 × 2 × 2 × 2 = 16.
2. Results with **no** head: only TTTT. That is 1.
3. At least one head: 16 − 1 = **15**.

Listing the 15 would take a while; the complement takes a moment.

**2. Words with a vowel.** Three-letter "words" are made from the letters A, B, C, D, E, with repeats allowed. How many
contain at least one vowel (A or E)?

1. Total: 5 × 5 × 5 = 125.
2. No vowel: only B, C, D can be used, 3 × 3 × 3 = 27.
3. At least one vowel: 125 − 27 = **98**.

**3. Not first in line.** Three of the four friends Ana, Ben, Cai and Dev line up for a photo, in a row. In how many of
the lines is Ana **not** at the front?

1. Total lines of 3 from 4 people: 4 × 3 × 2 = 24.
2. Lines with Ana at the front: the other two places are filled from Ben, Cai, Dev: 3 × 2 = 6.
3. Ana not at the front: 24 − 6 = **18**.

(Ana may still be in the line, in 2nd or 3rd place, or not in it at all. The complement handles all of those at once.)

**4. Some digit repeats.** Using the digits 1 to 5, how many 3-digit codes repeat some digit?

1. Total: 5 × 5 × 5 = 125 (lesson 1).
2. Complement, all three digits different: 5 × 4 × 3 = 60.
3. Some digit repeated: 125 − 60 = **65**.

## Try it

1. How many 2-digit codes (00 to 99) have **no** 3 in them? How many have at least one 3?
2. A coin is tossed 5 times. How many results have at least one tail?
3. How many 3-digit codes (000 to 999) have at least one 0?
4. A 4-digit PIN uses the digits 0 to 9 with repeats allowed. How many PINs have at least two digits the same? (Hint:
   the complement is "all four different".)
5. How many whole numbers from 1 to 100 are **not** multiples of 3?
6. A dice is rolled 3 times. How many results (like 6-2-6) include at least one six?
7. In a class of 25, every child is in the choir, the team, both, or neither. 14 are in the choir, 12 are in the team,
   and 4 are in both. How many are in neither? (Draw the two groups like the cross on the grid.)

??? note "Answers"
    1. No 3: 9 × 9 = 81. At least one 3: 100 − 81 = 19.
    2. Total 2 × 2 × 2 × 2 × 2 = 32. No tail means HHHHH, just 1. At least one tail: 32 − 1 = 31.
    3. Total 1000. No 0: 9 × 9 × 9 = 729. At least one 0: 1000 − 729 = 271. (The same as for 7: every digit behaves
       the same way on a lock.)
    4. Total 10 × 10 × 10 × 10 = 10 000. All different: 10 × 9 × 8 × 7 = 5040. At least two the same:
       10 000 − 5040 = 4960. Almost half of all PINs repeat a digit.
    5. Multiples of 3 from 1 to 100: 3, 6, ..., 99, which is 33 numbers. Not multiples: 100 − 33 = 67.
    6. Total 6 × 6 × 6 = 216. No six: 5 × 5 × 5 = 125. At least one six: 216 − 125 = 91.
    7. Choir or team (or both): 14 + 12 counts the 4 "both" children twice, so it is 14 + 12 − 4 = 22. Neither:
       25 − 22 = 3.

## Common mistake

**Adding up the "where could the 7 be" counts.** 100 + 100 + 100 counts the code 772 twice and 777 three times. When
you add groups that overlap, you over-count. Either subtract the overlaps carefully (see question 7) or, much easier,
count the complement.

**Using the wrong total.** "At least one head in 4 tosses = 4 − 1 = 3" mixes up the number of tosses (4) with the
number of results (16). Count the total first, with the same rules as the question, and only then subtract.

## Where it leads

- Back: [Fussy parts first](02-fussy-parts-first.md) · Next: [Squares on a chessboard](04-chessboard-squares.md)
- [Level 3 page](index.md) · [Counting topic page](../index.md)
- Question 7, with two overlapping groups, grows up in level 6 into **inclusion-exclusion**:
  [Level 6](../level-6/index.md).
- In level 4, "must not sit together" is solved by counting the complement:
  [Arrangements with conditions](../level-4/05-arranging-with-rules.md).
- "At least one six in three rolls" happens in 91 of the 216 results. Turning counts like this into chances is the
  heart of [Probability](../../probability/index.md).
