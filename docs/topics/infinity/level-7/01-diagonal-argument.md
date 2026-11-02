---
title: "Cantor's diagonal argument"
---

# Cantor's diagonal argument

*Infinity and strange math · level 7, lesson 1 of 6*

## A question to start

In level 6 you watched one infinite set after another squeeze into a single list: the even numbers, the integers,
all the pairs of counting numbers, every fraction, even every algebraic number. Each time, something that looked
"bigger" than the counting numbers turned out to be the same size.

So here is a challenge. Somebody hands you a list and says: "This list contains **every** decimal between 0 and 1.
Every single one, from $0.5$ to $0.333\ldots$ to $0.70710678\ldots$ to numbers nobody has ever written down. Each one
appears at some position: 1st, 2nd, 3rd, and so on."

You are not allowed to read the whole list (it is infinite). Can you still prove the person is wrong, by pointing to
one particular number that is **not** on it?

In 1891 Georg Cantor published a few lines that do exactly that, for **any** list anyone could ever make. It is one
of the most famous arguments in mathematics, and by the end of this lesson you will be able to carry it out yourself.

## The idea

### What "the list" means

A **list** (in this lesson) means an infinite sequence $r_1, r_2, r_3, \ldots$: a 1st entry, a 2nd entry, and so on,
one for every counting number. A set is **countable** if all of its members can be put on one such list (repeats are
allowed; they do no harm). Level 6 showed that $\mathbb{N}$ (the counting numbers), $\mathbb{Z}$ (the integers) and
$\mathbb{Q}$ (the rational numbers, or fractions) are all countable.

The question now is about the **real numbers** between 0 and 1. A **real number** is any number on the number line,
rational or not. Every real number between 0 and 1 can be written as an endless decimal

$$0.d_1 d_2 d_3 d_4 \ldots$$

where each $d_k$ is one of the digits $0, 1, \ldots, 9$. A decimal that stops, like $0.25$, counts as one that goes on
with zeros forever: $0.25000\ldots$.

### A small problem first: two names for one number

Some numbers have **two** decimal forms. In level 4 you saw that $0.999\ldots = 1$. In the same way

$$0.25 = 0.25000\ldots = 0.24999\ldots$$

because $0.00999\ldots = 0.01$. This happens exactly for decimals that end in all 0s or all 9s. Every other real
number has only one decimal form.

Why does this matter? The proof will build a new number that **looks** different from every number on the list. If
"looks different" could still mean "is equal" (like $0.25000\ldots$ and $0.24999\ldots$), the proof would have a hole.
So we will build a number that uses **no 0s and no 9s at all**. Such a decimal has only one form, so if it looks
different from another decimal, it really is a different number.

### The diagonal argument, step by step

This is a **proof by contradiction**: we suppose the opposite of what we want, and show that it leads to something
impossible.

**Step 1. Suppose** there is a complete list $r_1, r_2, r_3, \ldots$ of all the real numbers between 0 and 1. Write
each entry as a decimal, one per line. (If a number has two forms, the list may use either one.)

**Step 2. Look down the diagonal.** The 1st digit of $r_1$, the 2nd digit of $r_2$, the 3rd digit of $r_3$, and so on.
In the drawing these are the shaded digits; they run diagonally down the table, which gives the argument its name.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 270" role="img" aria-label="A list of six decimals with the diagonal digits shaded, and the new number built from them underneath">
  <text x="30" y="40" font-size="14" text-anchor="middle" fill="currentColor">r1</text>
  <text x="70" y="40" font-size="15" text-anchor="end" fill="currentColor">0.</text>
  <rect x="74" y="22" width="22" height="24" rx="4" fill="#eea66f"/>
  <text x="85" y="40" font-size="15" text-anchor="middle" fill="currentColor">3</text>
  <text x="113" y="40" font-size="15" text-anchor="middle" fill="currentColor">1</text>
  <text x="141" y="40" font-size="15" text-anchor="middle" fill="currentColor">4</text>
  <text x="169" y="40" font-size="15" text-anchor="middle" fill="currentColor">1</text>
  <text x="197" y="40" font-size="15" text-anchor="middle" fill="currentColor">5</text>
  <text x="225" y="40" font-size="15" text-anchor="middle" fill="currentColor">9</text>
  <text x="253" y="40" font-size="15" text-anchor="middle" fill="currentColor">…</text>
  <text x="30" y="68" font-size="14" text-anchor="middle" fill="currentColor">r2</text>
  <text x="70" y="68" font-size="15" text-anchor="end" fill="currentColor">0.</text>
  <text x="85" y="68" font-size="15" text-anchor="middle" fill="currentColor">5</text>
  <rect x="102" y="50" width="22" height="24" rx="4" fill="#eea66f"/>
  <text x="113" y="68" font-size="15" text-anchor="middle" fill="currentColor">0</text>
  <text x="141" y="68" font-size="15" text-anchor="middle" fill="currentColor">0</text>
  <text x="169" y="68" font-size="15" text-anchor="middle" fill="currentColor">0</text>
  <text x="197" y="68" font-size="15" text-anchor="middle" fill="currentColor">0</text>
  <text x="225" y="68" font-size="15" text-anchor="middle" fill="currentColor">0</text>
  <text x="253" y="68" font-size="15" text-anchor="middle" fill="currentColor">…</text>
  <text x="30" y="96" font-size="14" text-anchor="middle" fill="currentColor">r3</text>
  <text x="70" y="96" font-size="15" text-anchor="end" fill="currentColor">0.</text>
  <text x="85" y="96" font-size="15" text-anchor="middle" fill="currentColor">7</text>
  <text x="113" y="96" font-size="15" text-anchor="middle" fill="currentColor">1</text>
  <rect x="130" y="78" width="22" height="24" rx="4" fill="#eea66f"/>
  <text x="141" y="96" font-size="15" text-anchor="middle" fill="currentColor">8</text>
  <text x="169" y="96" font-size="15" text-anchor="middle" fill="currentColor">2</text>
  <text x="197" y="96" font-size="15" text-anchor="middle" fill="currentColor">8</text>
  <text x="225" y="96" font-size="15" text-anchor="middle" fill="currentColor">1</text>
  <text x="253" y="96" font-size="15" text-anchor="middle" fill="currentColor">…</text>
  <text x="30" y="124" font-size="14" text-anchor="middle" fill="currentColor">r4</text>
  <text x="70" y="124" font-size="15" text-anchor="end" fill="currentColor">0.</text>
  <text x="85" y="124" font-size="15" text-anchor="middle" fill="currentColor">3</text>
  <text x="113" y="124" font-size="15" text-anchor="middle" fill="currentColor">3</text>
  <text x="141" y="124" font-size="15" text-anchor="middle" fill="currentColor">3</text>
  <rect x="158" y="106" width="22" height="24" rx="4" fill="#eea66f"/>
  <text x="169" y="124" font-size="15" text-anchor="middle" fill="currentColor">3</text>
  <text x="197" y="124" font-size="15" text-anchor="middle" fill="currentColor">3</text>
  <text x="225" y="124" font-size="15" text-anchor="middle" fill="currentColor">3</text>
  <text x="253" y="124" font-size="15" text-anchor="middle" fill="currentColor">…</text>
  <text x="30" y="152" font-size="14" text-anchor="middle" fill="currentColor">r5</text>
  <text x="70" y="152" font-size="15" text-anchor="end" fill="currentColor">0.</text>
  <text x="85" y="152" font-size="15" text-anchor="middle" fill="currentColor">4</text>
  <text x="113" y="152" font-size="15" text-anchor="middle" fill="currentColor">1</text>
  <text x="141" y="152" font-size="15" text-anchor="middle" fill="currentColor">4</text>
  <text x="169" y="152" font-size="15" text-anchor="middle" fill="currentColor">2</text>
  <rect x="186" y="134" width="22" height="24" rx="4" fill="#eea66f"/>
  <text x="197" y="152" font-size="15" text-anchor="middle" fill="currentColor">5</text>
  <text x="225" y="152" font-size="15" text-anchor="middle" fill="currentColor">3</text>
  <text x="253" y="152" font-size="15" text-anchor="middle" fill="currentColor">…</text>
  <text x="30" y="180" font-size="14" text-anchor="middle" fill="currentColor">r6</text>
  <text x="70" y="180" font-size="15" text-anchor="end" fill="currentColor">0.</text>
  <text x="85" y="180" font-size="15" text-anchor="middle" fill="currentColor">1</text>
  <text x="113" y="180" font-size="15" text-anchor="middle" fill="currentColor">2</text>
  <text x="141" y="180" font-size="15" text-anchor="middle" fill="currentColor">3</text>
  <text x="169" y="180" font-size="15" text-anchor="middle" fill="currentColor">4</text>
  <text x="197" y="180" font-size="15" text-anchor="middle" fill="currentColor">5</text>
  <rect x="214" y="162" width="22" height="24" rx="4" fill="#eea66f"/>
  <text x="225" y="180" font-size="15" text-anchor="middle" fill="currentColor">6</text>
  <text x="253" y="180" font-size="15" text-anchor="middle" fill="currentColor">…</text>
  <line x1="20" y1="202" x2="290" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="30" y="228" font-size="14" text-anchor="middle" fill="currentColor">x</text>
  <text x="70" y="228" font-size="15" text-anchor="end" fill="currentColor">0.</text>
  <rect x="74" y="210" width="22" height="24" rx="4" fill="#7ccf9a"/>
  <text x="85" y="228" font-size="15" text-anchor="middle" fill="currentColor">5</text>
  <rect x="102" y="210" width="22" height="24" rx="4" fill="#7ccf9a"/>
  <text x="113" y="228" font-size="15" text-anchor="middle" fill="currentColor">5</text>
  <rect x="130" y="210" width="22" height="24" rx="4" fill="#7ccf9a"/>
  <text x="141" y="228" font-size="15" text-anchor="middle" fill="currentColor">5</text>
  <rect x="158" y="210" width="22" height="24" rx="4" fill="#7ccf9a"/>
  <text x="169" y="228" font-size="15" text-anchor="middle" fill="currentColor">5</text>
  <rect x="186" y="210" width="22" height="24" rx="4" fill="#7ccf9a"/>
  <text x="197" y="228" font-size="15" text-anchor="middle" fill="currentColor">4</text>
  <rect x="214" y="210" width="22" height="24" rx="4" fill="#7ccf9a"/>
  <text x="225" y="228" font-size="15" text-anchor="middle" fill="currentColor">5</text>
  <text x="253" y="228" font-size="15" text-anchor="middle" fill="currentColor">…</text>
  <text x="170" y="258" font-size="12" text-anchor="middle" fill="currentColor">each digit of x differs from the shaded digit above</text>
</svg>
</div>

**Step 3. Build a new number** $x = 0.x_1 x_2 x_3 \ldots$ by changing every diagonal digit, with this rule:

- if the $n$th digit of $r_n$ is 5, make $x_n = 4$;
- otherwise, make $x_n = 5$.

In the drawing the diagonal digits are 3, 0, 8, 3, 5, 6, so $x$ begins $0.555545\ldots$

**Step 4. Check that $x$ is not on the list.** Take any position $n$. The number $x$ and the entry $r_n$ disagree in
their $n$th digits, because that is how $x_n$ was chosen. Could they still be the same number with two different
forms? No: $x$ is made only of 4s and 5s, so it does not end in all 0s or all 9s, so it has only one decimal form. If
$r_n$ were equal to $x$, the list would have to write $r_n$ in that one form, digit for digit, and then their $n$th
digits would agree. They do not. So $x \ne r_n$.

That works for $n = 1$, for $n = 2$, for $n = 1000$, for **every** $n$. So $x$ is not anywhere on the list.

**Step 5. The contradiction.** But $x$ is a real number between 0 and 1 (it lies between $0.444\ldots$ and
$0.555\ldots$). The list was supposed to contain every such number. It does not. So the supposition in Step 1 was
false.

**Conclusion.** No list contains all the real numbers between 0 and 1. The set of real numbers in $(0, 1)$ is
**uncountable**: it is infinite, but it cannot be listed.

### Why the trick works

The new number is a kind of "disagreer". It disagrees with $r_1$ in place 1, with $r_2$ in place 2, and so on. Each
entry on the list gets **one** place where $x$ is guaranteed to differ from it, and there are enough places (one for
every counting number) to give every entry its own place. That is the whole idea: infinitely many digits in each
number, and infinitely many numbers on the list, matched up along the diagonal.

Notice what the argument does **not** do. It does not say "this particular list is bad, try harder". It takes
**any** list, however cleverly made, and produces a number that escapes it. That is why it proves that no complete
list can exist.

### "Just add $x$ to the list!"

A natural reply: "Fine, $x$ was missing. Put it at the top and shift everything down." You can, and you get a new
list. But the argument works on **every** list, so run it on the new one and you get a new missing number $x'$. Add
that too, and another escapes. You can add one number, a thousand, or even a countable infinity of them (they would
fit, as Hilbert's hotel showed), and the diagonal still builds a number that is not there. The problem is not one
missing number; it is that every list misses some.

### The same proof with 0s and 1s

There is an even cleaner version that does not need decimals at all. Think of an endless sequence of 0s and 1s, like
the results of tossing a coin forever (1 for heads, 0 for tails):

$$0\,1\,1\,0\,1\,0\,0\,1\ldots$$

Suppose someone lists such sequences $s_1, s_2, s_3, \ldots$ Build a new sequence $t$ by **flipping** the diagonal:
the $n$th term of $t$ is 1 if the $n$th term of $s_n$ is 0, and 0 if it is 1. Then $t$ differs from every $s_n$ in
place $n$, so $t$ is not on the list. Here there is no "two names" problem, because two sequences are the same only if
they agree in every place.

So the set of all infinite 0-1 sequences is uncountable too. You will meet this set again: it is secretly the same
as the set of all subsets of $\mathbb{N}$ (lesson 4) and the same as the Cantor set (lesson 5).

## Worked examples

**1. Running the argument on a real list.** A list begins with the numbers $\tfrac12, \tfrac13, \tfrac14, \tfrac15,
\tfrac16, \tfrac17$. Find the first six digits of a number that is none of them.

Write them as decimals, to six places:

| Entry | Decimal | Diagonal digit |
| --- | --- | --- |
| $r_1 = 1/2$ | 0.**5**00000... | 5 |
| $r_2 = 1/3$ | 0.3**3**3333... | 3 |
| $r_3 = 1/4$ | 0.25**0**000... | 0 |
| $r_4 = 1/5$ | 0.200**0**00... | 0 |
| $r_5 = 1/6$ | 0.1666**6**6... | 6 |
| $r_6 = 1/7$ | 0.14285**7**... | 7 |

Apply the rule (5 becomes 4, anything else becomes 5): $x = 0.455555\ldots$ Check one: $r_1 = 0.5$ and $x$ differ in
the first digit (4 against 5). Check another: $r_6 = 0.142857\ldots$ and $x$ differ in the sixth digit (5 against 7).

**2. Flipping a 0-1 list.** A list of 0-1 sequences begins

$s_1 = 0\,0\,0\,0\,0\ldots$, $s_2 = 1\,1\,1\,1\,1\ldots$, $s_3 = 0\,1\,0\,1\,0\ldots$, $s_4 = 1\,0\,0\,1\,1\ldots$,
$s_5 = 1\,1\,0\,0\,1\ldots$

The diagonal terms are: 1st of $s_1$ is 0; 2nd of $s_2$ is 1; 3rd of $s_3$ is 0; 4th of $s_4$ is 1; 5th of $s_5$ is 1.
Flip each: $t$ begins $1\,0\,1\,0\,0\ldots$ It differs from $s_1$ in place 1, from $s_2$ in place 2, and so on.

**3. Why the argument fails for the fractions.** The fractions between 0 and 1 **can** be listed (level 6). So what
happens if we run the diagonal on such a list? The argument still builds a decimal $x$ that is not on the list. But
nothing forces $x$ to be a fraction. A fraction's decimal repeats from some point on, and the digits of $x$ (4s and 5s
chosen by looking down a diagonal) have no reason to repeat. So $x$ is almost always irrational, and "an irrational
number is missing from a list of fractions" is no contradiction at all. The diagonal argument proves something only
when the list is supposed to hold **every** real number.

**4. Why the argument fails for the counting numbers.** Try writing counting numbers as digit strings and flipping a
diagonal. A counting number has only **finitely** many digits, but the diagonal needs a 1st digit, a 2nd digit, a 3rd
digit, and so on forever. The number you build has infinitely many nonzero digits, so it is not a counting number
at all. Again there is no contradiction. The digits going on forever is exactly what makes real numbers different.

## Try it

1. Use the 5-and-4 rule on the list $0.2718\ldots$, $0.1515\ldots$, $0.9999\ldots$, $0.5055\ldots$ to write the first
   four digits of a number not among them.
2. Use the rule "if the diagonal digit is 1, write 2; otherwise write 1" on the list in question 1. Does this rule
   also avoid the "two names" problem? Why?
3. Someone runs the diagonal argument with the rule "add 1 to each diagonal digit, and 9 becomes 0". Give a list
   where the number built this way could be equal to one of the entries, so the proof breaks.
4. Flip the diagonal of the 0-1 list: $s_1 = 1\,1\,1\,1\ldots$, $s_2 = 0\,0\,0\,0\ldots$, $s_3 = 1\,0\,1\,0\ldots$,
   $s_4 = 0\,1\,1\,0\ldots$
5. Look at the set of decimals between 0 and 1 that use only the digits 1 and 2 and **end in all 1s** from some
   point on, like $0.2121111\ldots$ Is this set countable? Does the diagonal argument (with
   "1 becomes 2, 2 becomes 1") prove it is uncountable? Explain carefully.
6. Explain in two or three sentences why "add the missing number to the top of the list" does not rescue the list.
7. Show that the real numbers between 0 and 1 using only the digits 4 and 5 are already uncountable. (Hint: compare
   with 0-1 sequences.)

??? note "Answers"
    1. The diagonal digits are 2 (1st of $0.2718$), 5 (2nd of $0.1515$), 9 (3rd of $0.9999$) and 5 (4th of
       $0.5055$). The rule turns them into 5, 4, 5, 4, so the number begins $0.5454\ldots$ and is none of the four.
    2. Diagonal digits 2, 5, 9, 5 are all "not 1", so the new number begins $0.1111\ldots$ Yes, this rule also works:
       it only ever writes 1s and 2s, never 0 or 9, so the new number has only one decimal form, and "looks different"
       really means "is different".
    3. Take $r_1 = 0.0999\ldots$ (which is $0.1$) and suppose the other entries have diagonal digits 9 from place 2
       onwards, for example $r_n = 0.0999\ldots$ for every $n \ge 2$ too. Adding 1 to the diagonal gives
       $x_1 = 1$ and $x_n = 0$ for $n \ge 2$, so $x = 0.1000\ldots = 0.0999\ldots = r_1$. The new number looks different
       from $r_1$ in every digit but is equal to it, so it is on the list after all. This is why we avoid 0s and 9s.
    4. The diagonal terms are 1 (1st of $s_1$), 0 (2nd of $s_2$), 1 (3rd of $s_3$), 0 (4th of $s_4$). Flipping gives
       $t = 0\,1\,0\,1\ldots$
    5. It is **countable**. Each such number is fixed by a finite block of 1s and 2s before the endless 1s, and finite
       blocks can be listed (all blocks of length 1, then length 2, and so on: $2 + 4 + 8 + \cdots$ blocks, each group
       finite). The diagonal argument does **not** prove it uncountable: the flipped number may contain infinitely
       many 2s, so it need not end in all 1s, so it need not belong to the set. A missing number from outside the set
       is no contradiction, just as with the fractions in worked example 3.
    6. The argument works on **every** list, including the new one. Put $x$ on top, run the diagonal on the new list,
       and a new number $x'$ escapes. However many numbers are added, the new list is still a list, so it still misses
       something. The trouble is with lists themselves, not with one particular missing number.
    7. Match each 0-1 sequence with the decimal you get by writing 4 for each 0 and 5 for each 1, so
       $0\,1\,1\,0\ldots$ goes with $0.4554\ldots$ Different sequences give different decimals (and since these
       decimals have only one form, different-looking means different numbers). So this is a perfect pairing between
       the 0-1 sequences and the 4-5 decimals. The 0-1 sequences are uncountable, so the 4-5 decimals are too. Or run
       the diagonal directly on any list of 4-5 decimals: change each diagonal 4 to 5 and each 5 to 4.

## Common mistake

**Thinking the argument only shows one number is missing.** It shows that **every** list misses something, which is
much stronger. "Missing one number" could be fixed; "every list misses one" cannot.

**Forgetting the two-names problem.** If the rule could produce a number ending in all 9s or all 0s, the new number
might equal an entry while looking different from it in every digit (see question 3). Choose the new digits from
something like $\{4, 5\}$ and the problem disappears.

## Where it leads

- Next: [Uncountable means a bigger size](02-uncountable-bigger.md): what it means for one infinity to be bigger than
  another, and why most real numbers are irrational.
- [Level 7 page](index.md) · [Infinity topic page](../index.md) · Listing sets that **can** be listed:
  [Level 6: countable infinity](../level-6/index.md).
- The method of proof by contradiction: [Logic, level 7](../../logic/level-7/04-proof-by-contradiction.md). Why
  $0.999\ldots = 1$: [Does 0.999... equal 1?](../level-4/02-does-point-nine.md). Endless decimals and the real
  numbers: [Numbers, level 6](../../numbers/level-6/05-real-numbers.md).
- On the U of T shelf: sets and proof in [MAT137 Unit 1](../../../uoft/MAT137/unit01.md), and the real numbers in
  [MAT158 Unit 2](../../../uoft/MAT158H1/unit02.md).
