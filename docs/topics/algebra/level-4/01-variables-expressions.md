---
title: "Variables and expressions"
---

# Variables and expressions

*Algebra · level 4, lesson 1 of 7*

## A question to start

Two friends each describe a number machine in words.

- Ava: "Take a number, multiply it by 3, then add 2."
- Ben: "Take a number, add 2, then multiply it by 3."

Ava writes her rule as $3n + 2$. Ben writes his as $3(n + 2)$. They look almost the same. Are they?

Try the number 5. Ava's machine gives $15 + 2 = 17$. Ben's gives $7 \times 3 = 21$. Different! A pair of brackets
changed the answer by 4. In this lesson you learn to read algebra as carefully as you read words, and to write it so
that it says exactly what you mean.

## The idea

### Variables

A **variable** is a letter that stands for a number. In level 3 a letter was a single hidden number, like the $n$ in
$n \times 4 = 36$. Now we use letters in a bigger way: a letter can stand for **any** number, and we write rules that
work for all of them at once. That is why it is called a variable: its value can vary.

If $n$ is the number of children on a trip and each child pays 3 dollars, the total is "3 times $n$" dollars. When
$n$ is 10 it is 30 dollars; when $n$ is 25 it is 75 dollars. The letter lets us say all of this in one go.

### Why $3n$ means $3 \times n$

In algebra we leave out the times sign between a number and a letter. $3n$ means $3 \times n$. There are two good
reasons:

1. **The sign looks like a letter.** In algebra, $x$ is the most popular letter of all. Writing $3 \times x$ is easy
   to misread as $3xx$. Leaving out the sign avoids the confusion.
2. **It is how we already talk.** "3 apples" means 3 lots of an apple. "$3n$" means 3 lots of $n$. Nobody says "3
   times apples".

Some other habits:

- The number always goes **first**: write $3n$, never $n3$.
- $1n$ is written just $n$, because one lot of $n$ is $n$.
- Two letters side by side are multiplied too: $ab$ means $a \times b$.
- A dot is sometimes used for times: $3 \cdot n$ means $3n$.
- Division is usually written as a fraction: $\dfrac{n}{4}$ means $n \div 4$.
- $n^2$ ("$n$ squared") means $n \times n$. It is **not** $2n$: when $n = 5$, $n^2 = 25$ but $2n = 10$.

But between two **numbers** you must keep the sign: $3 \times 4$ is 12, while "34" is thirty-four.

### Expressions

An **expression** is a group of numbers, letters and operations, such as $3n + 2$ or $\dfrac{n}{4} - 1$. An
expression is like a phrase in English ("three times a number, plus two"). It does not make a claim, so it is not
true or false. An **equation** is a full sentence with an equals sign, like $3n + 2 = 17$, and it can be true or
false.

Parts of an expression have names. In $3n + 2$:

- the **terms** are the pieces joined by $+$ or $-$: here $3n$ and $2$;
- the **coefficient** of $n$ is the number multiplying it: 3;
- a term with no letter, like $2$, is a **constant**: it never changes.

### A picture: cups and counters

As in level 3, a cup can stand for the unknown number $n$, and a counter for 1. Then $3n + 2$ is **three cups and two
counters**, and $3(n + 2)$ is **three groups, each with a cup and two counters**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 150" role="img" aria-label="Left: three cups and two counters, labelled 3n plus 2. Right: three groups each of one cup and two counters, labelled 3 times n plus 2.">
  <g fill="#eea66f" stroke="currentColor" stroke-width="1.5">
    <path d="M20,80 L25,50 L45,50 L50,80 Z"/><path d="M58,80 L63,50 L83,50 L88,80 Z"/><path d="M96,80 L101,50 L121,50 L126,80 Z"/>
  </g>
  <g fill="#9cc9ea" stroke="currentColor"><circle cx="145" cy="70" r="7"/><circle cx="163" cy="70" r="7"/></g>
  <text x="95" y="120" font-size="15" text-anchor="middle" fill="currentColor">3n + 2</text>
  <g fill="none" stroke="currentColor" stroke-dasharray="4 3">
    <rect x="200" y="40" width="68" height="50" rx="8"/><rect x="273" y="40" width="68" height="50" rx="8"/><rect x="346" y="40" width="68" height="50" rx="8"/>
  </g>
  <g fill="#eea66f" stroke="currentColor" stroke-width="1.5">
    <path d="M205,80 L209,55 L225,55 L229,80 Z"/><path d="M278,80 L282,55 L298,55 L302,80 Z"/><path d="M351,80 L355,55 L371,55 L375,80 Z"/>
  </g>
  <g fill="#9cc9ea" stroke="currentColor">
    <circle cx="241" cy="70" r="6"/><circle cx="257" cy="70" r="6"/><circle cx="314" cy="70" r="6"/>
    <circle cx="330" cy="70" r="6"/><circle cx="387" cy="70" r="6"/><circle cx="403" cy="70" r="6"/>
  </g>
  <text x="307" y="120" font-size="15" text-anchor="middle" fill="currentColor">3(n + 2) = 3n + 6</text>
</svg>
</div>

Count the right-hand picture: three cups and **six** counters. So $3(n + 2)$ is the same as $3n + 6$, which is 4 more
than $3n + 2$, whatever $n$ is. That is why Ava's and Ben's machines always differ by 4.

### Words into algebra

Here is a dictionary for turning words into expressions. Let $n$ be the number.

| Words | Expression |
| --- | --- |
| 5 more than a number; a number increased by 5 | $n + 5$ |
| 5 less than a number; a number decreased by 5 | $n - 5$ |
| a number taken away from 5 | $5 - n$ |
| twice a number; double a number | $2n$ |
| half a number | $\dfrac{n}{2}$ |
| a number squared | $n^2$ |
| 3 more than twice a number | $2n + 3$ |
| twice the sum of a number and 3 | $2(n + 3)$ |

Watch the order in "5 less than $n$". You start with $n$ and take 5 away: $n - 5$. Many people write $5 - n$ because
the 5 is said first. Test it with a number: 5 less than 12 is 7, and $12 - 5 = 7$, but $5 - 12$ is not 7.

### Writing expressions from stories

The best way to write an expression from a story is to **try it with a real number first**, then replace the number
with the letter. "Pencils cost 40 cents each. What do $p$ pencils cost?" Two pencils cost $40 \times 2 = 80$ cents;
ten pencils cost $40 \times 10 = 400$ cents. So $p$ pencils cost $40 \times p = 40p$ cents.

## Worked examples

**1. Reading algebra aloud.** Say each in words: (a) $4n - 1$; (b) $4(n - 1)$; (c) $\dfrac{n + 6}{2}$.

(a) "four times a number, minus one". (b) "four times (one less than the number)". (c) "a number plus six, all
divided by two" (or "half of six more than a number").

**2. Words to expressions.** Write: (a) 7 less than three times $x$; (b) the sum of $x$ and 4, multiplied by 5;
(c) $y$ divided by 3, then increased by 2.

(a) $3x - 7$. (b) $5(x + 4)$. (c) $\dfrac{y}{3} + 2$.

**3. From a story.** Mia has $m$ stickers. Jon has 4 more than Mia. Kai has twice as many as Jon. Write Jon's and
Kai's numbers.

- Jon: $m + 4$.
- Kai: twice Jon's number, so $2(m + 4)$. The brackets matter: Kai doubles **all** of Jon's stickers, not just the
  $m$. Try $m = 10$: Jon has 14, Kai has 28, and $2(10 + 4) = 28$. ✓ (Without brackets, $2m + 4 = 24$, wrong.)

**4. Matchstick squares.** A row of squares is made from matchsticks. One square uses 4 sticks; each extra square
shares a side with the one before, so it needs 3 more. Write the number of sticks for $s$ squares.

- 1 square: 4; 2 squares: 7; 3 squares: 10.
- Think of it as 1 starting stick, plus 3 for each square: $3s + 1$. Check: $3 \times 3 + 1 = 10$. ✓

**5. Naming parts.** In $7a - 2b + 9$, name the terms, the coefficients and the constant.

Terms: $7a$, $-2b$ and $9$. The coefficient of $a$ is 7, of $b$ is $-2$ (the minus sign belongs to the term). The
constant is 9.

## Try it

1. Write with algebra: (a) 8 more than $k$; (b) $k$ multiplied by 8; (c) 8 less than $k$; (d) $k$ less than 8.
2. Write in words: (a) $2t + 5$; (b) $2(t + 5)$; (c) $t^2 - 1$.
3. A ticket costs 12 dollars. Write the cost of $t$ tickets, and of $t$ tickets plus a 5 dollar booking fee.
4. Leo is $L$ years old. Write: (a) his age in 6 years; (b) his age 3 years ago; (c) the age of his mother, who is
   three times as old as he is.
5. Is $3n + 2$ an expression or an equation? What about $3n + 2 = 11$?
6. Explain the difference between $n^2$ and $2n$, and find a number where they are equal.
7. A row of triangles is made of matchsticks: 1 triangle needs 3 sticks, 2 need 5, 3 need 7. Write the number of
   sticks for $t$ triangles.
8. Show that $5(n + 1)$ and $5n + 1$ are different by trying a number. How much bigger is the first, always?

??? note "Answers"
    1. (a) $k + 8$. (b) $8k$. (c) $k - 8$. (d) $8 - k$.
    2. (a) "twice $t$, plus 5". (b) "twice the sum of $t$ and 5". (c) "$t$ squared, minus 1".
    3. $12t$ dollars; with the fee, $12t + 5$ dollars.
    4. (a) $L + 6$. (b) $L - 3$. (c) $3L$.
    5. $3n + 2$ is an expression (no equals sign, no claim). $3n + 2 = 11$ is an equation; it is true only when
       $n = 3$.
    6. $n^2 = n \times n$ and $2n = n + n$. They are equal when $n = 2$ ($4 = 4$), and also when $n = 0$.
    7. Each new triangle adds 2 sticks, starting from 1 extra: $2t + 1$. Check: $t = 3$ gives 7. ✓
    8. With $n = 2$: $5(2 + 1) = 15$ but $5 \times 2 + 1 = 11$. The first is $5n + 5$, so it is always **4 more**
       than $5n + 1$.

## Common mistake

**Dropping the brackets.** "Twice the sum of $x$ and 3" is $2(x + 3)$, not $2x + 3$. If the words say to do
something to a whole group, the group needs brackets.

**Writing the subtraction backwards.** "6 less than $y$" is $y - 6$. Check with a number: 6 less than 10 is 4, and
$10 - 6 = 4$.

## Where it leads

- Next: [Substitution](02-substitution.md), where you put numbers into expressions.
- [Level 4 page](index.md) · [Algebra topic page](../index.md)
- Back to [Level 3: two-step machines](../level-3/02-two-step-machines.md), where $3n + 2$ was a machine.
- Matchstick rules like $3s + 1$ come from patterns that grow: see [Patterns](../../patterns/index.md). The brackets
  rule $3(n + 2) = 3n + 6$ becomes the distributive law in [level 5](../level-5/index.md).
