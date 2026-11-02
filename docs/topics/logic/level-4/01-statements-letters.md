---
title: "Statements and letters"
---

# Statements and letters

*Logic and puzzles · level 4, lesson 1 of 6*

## A question to start

Is each of these sentences true or false?

1. "This sentence has five words."
2. "This sentence has six words."
3. "This sentence is false."

Count the first one: *This, sentence, has, five, words*. Five words. So it is **true**. The second also has five
words, so it is **false**.

The third is stranger. If it is true, then what it says is right, so it is false. If it is false, then what it says
is wrong, so it is true. It cannot be either! This is the famous **liar paradox**, and it shows that not every
sentence can be called true or false. Logic needs to be careful about which sentences it works with. This lesson
draws that line, and then gives logic its own short-hand: letters and symbols.

## The idea

### Statements

A **statement** is a sentence that is either true or false, but not both. Whether it is true or false is called its
**truth value**, written **T** or **F**.

| Sentence | Statement? | Truth value |
| --- | --- | --- |
| "17 is a prime number." | yes | T |
| "Every square is a triangle." | yes | F |
| "Mars has two moons." | yes | T (Phobos and Deimos) |
| "Every even number bigger than 2 is the sum of two primes." | yes | nobody knows yet! |
| "Close the door." | no: a command | |
| "Is it raining?" | no: a question | |
| "Pizza is the best food." | no: an opinion, not true or false for everyone | |
| "$x + 1 = 3$" | not yet: depends on $x$ | |
| "This sentence is false." | no: a paradox | |

Two rows deserve a closer look.

**A statement can have an unknown truth value.** The sentence about even numbers is **Goldbach's conjecture**, from
1742. It has been checked for enormous numbers and nobody has found an even number that fails, but nobody has proved
it either. It is still a statement: it is definitely true or definitely false. We just do not know which.

**Sentences with a letter in them** like "$x + 1 = 3$" are called **open sentences**. They are true for some values
($x = 2$) and false for others. Once you choose a value for $x$, the sentence becomes a statement. (In level 5, words
like "for all $x$" and "there is an $x$" turn open sentences into statements in another way.)

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 150" role="img" aria-label="Two boxes. Statements: 17 is prime (true), a square has 5 sides (false), Mars has two moons (true). Not statements: close the door, is it raining?, this sentence is false.">
  <g stroke="currentColor" stroke-width="1.5">
    <rect x="10" y="30" width="200" height="110" rx="8" fill="#7ccf9a" fill-opacity="0.35"/>
    <rect x="230" y="30" width="200" height="110" rx="8" fill="#eea66f" fill-opacity="0.35"/>
  </g>
  <g font-size="14" text-anchor="middle" fill="currentColor">
    <text x="110" y="20">statements</text>
    <text x="330" y="20">not statements</text>
  </g>
  <g font-size="13" fill="currentColor">
    <text x="22" y="62">17 is prime. (T)</text>
    <text x="22" y="92">A square has 5 sides. (F)</text>
    <text x="22" y="122">Mars has two moons. (T)</text>
    <text x="242" y="62">Close the door.</text>
    <text x="242" y="92">Is it raining?</text>
    <text x="242" y="122">This sentence is false.</text>
  </g>
</svg>
</div>

### Letters for statements

When we study how statements fit together, what they are **about** does not matter, only whether they are true or
false. So we give them letters, usually $p$, $q$ and $r$, the way algebra uses $x$ for a number.

$p$: "It is sunny." $\quad q$: "It is windy."

Now we can build bigger statements out of $p$ and $q$. These are called **compound statements**, and the small words
that join them are called **connectives**.

### Not: negation, $\neg p$

$\neg p$ (read "not $p$") is the **negation** of $p$. It is true when $p$ is false, and false when $p$ is true.

$\neg p$: "It is not sunny."

### And: conjunction, $p \land q$

$p \land q$ (read "$p$ and $q$") is the **conjunction** of $p$ and $q$. It is true only when **both** are true.

$p \land q$: "It is sunny and windy."

A way to remember: $\land$ looks like a letter A without its bar, A for **A**nd.

### Or: disjunction, $p \lor q$

$p \lor q$ (read "$p$ or $q$") is the **disjunction** of $p$ and $q$. It is true when **at least one** is true,
including when both are. This is the "one or both" meaning from [level 3](../level-3/01-not-and-or.md).

$p \lor q$: "It is sunny or windy (or both)."

The sign $\lor$ is often said to come from the Latin word *vel*, which means "or" in this inclusive sense.

### The rules in one table

For each possible pair of truth values for $p$ and $q$, here is what each connective gives.

| $p$ | $q$ | $\neg p$ | $p \land q$ | $p \lor q$ |
| --- | --- | --- | --- | --- |
| T | T | F | T | T |
| T | F | F | F | T |
| F | T | T | F | T |
| F | F | T | F | F |

This is your first **truth table**. The next lesson shows how to build them for any statement.

### Translating everyday words

English has many ways to say the same connective.

| English | Symbols |
| --- | --- |
| "It is sunny **but** not windy." | $p \land \neg q$ ("but" is "and" with a surprise) |
| "It is **neither** sunny **nor** windy." | $\neg p \land \neg q$ |
| "It is **not both** sunny and windy." | $\neg(p \land q)$ |
| "It is sunny or windy, **but not both**." | $(p \lor q) \land \neg(p \land q)$ |
| "It is **not** the case that it is sunny or windy." | $\neg(p \lor q)$ |

### Brackets matter

$\neg p \land q$ means $(\neg p) \land q$: "it is not sunny, and it is windy". The $\neg$ sticks to the letter right
after it, the way a minus sign in $-3 + 5$ belongs to the 3.

$\neg(p \land q)$ means "it is not the case that it is sunny and windy": "not both".

These say different things. On a sunny, calm day: $\neg p \land q$ is F (it **is** sunny), but $\neg(p \land q)$ is T
(it is not both sunny and windy, because it is calm). So use brackets whenever $\neg$ should apply to more than one
letter.

### Working out a truth value

If you know the truth value of each letter, you can work out any compound statement, inside out, like doing the
brackets first in arithmetic.

## Worked examples

**1. Statement or not?**

- "$7 > 3$": a statement, **T**.
- "$2 + 2 = 5$": a statement, **F**.
- "Please pass the salt": not a statement (a request).
- "$y$ is even": an open sentence, not a statement until we know $y$.
- "There are infinitely many prime numbers": a statement, **T** (Euclid proved it; see
  [Number theory](../../number-theory/level-4/05-no-biggest-prime.md)).

**2. Words to symbols.** Let $p$: "I do my homework" and $q$: "I watch a film".

- "I do my homework and I do not watch a film": $p \land \neg q$.
- "I neither do my homework nor watch a film": $\neg p \land \neg q$.
- "I do not do both": $\neg(p \land q)$.

**3. Symbols to words.** Same $p$ and $q$. $\neg p \lor q$ is "I do not do my homework, or I watch a film."

**4. Truth values with numbers.** Let $p$: "12 is divisible by 3" (true) and $q$: "12 is prime" (false). Work out
each.

- $\neg q$: $q$ is F, so $\neg q$ is **T**.
- $p \land q$: T and F, so **F**.
- $p \lor q$: T or F, so **T**.
- $p \land \neg q$: T and T, so **T**.
- $\neg(p \lor q)$: $p \lor q$ is T, so this is **F**.
- $\neg p \lor \neg q$: F or T, so **T**.

## Try it

1. Which are statements? Give the truth value of each statement.
   (a) "9 is a square number." (b) "Shut the window!" (c) "$3 \times 4 = 13$" (d) "$n + 5 = 8$" (e) "Every triangle has
   three sides."
2. Let $p$: "the dog is hungry" and $q$: "the dog is barking". Write in symbols: (a) The dog is hungry and not barking.
   (b) The dog is neither hungry nor barking. (c) The dog is barking but not hungry.
3. With the same $p$ and $q$, write in words: (a) $\neg p \lor q$ (b) $\neg(p \lor q)$.
4. Let $p$ be true and $q$ be false. Find the truth value of: (a) $\neg p$ (b) $p \lor q$ (c) $\neg p \lor q$
   (d) $\neg(p \land q)$.
5. Let $p$: "5 is odd" and $q$: "5 is greater than 7". Find the truth value of $p \land \neg q$, and say it in words.
6. Find truth values of $p$ and $q$ that make $\neg p \land q$ **false** but $\neg(p \land q)$ **true**. (This shows
   the brackets matter.)
7. Is "The next sentence is true. The previous sentence is false." a pair of statements? Explain.
8. Write "You may have cake or ice cream, but not both" in symbols, with $c$: "you have cake" and $i$: "you have ice
   cream". Is it true when you have both?

??? note "Answers"
    1. (a) Statement, **T** ($9 = 3 \times 3$). (b) Not a statement (a command). (c) Statement, **F** ($3 \times 4 =
       12$). (d) Open sentence, not a statement until we know $n$ (it is true only for $n = 3$). (e) Statement, **T**.
    2. (a) $p \land \neg q$. (b) $\neg p \land \neg q$. (c) $q \land \neg p$ (or $\neg p \land q$; the order of an
       "and" does not change its meaning).
    3. (a) "The dog is not hungry, or the dog is barking." (b) "It is not the case that the dog is hungry or barking",
       that is, "the dog is neither hungry nor barking".
    4. (a) **F**. (b) **T** (one part is true). (c) $\neg p$ is F and $q$ is F, so **F**. (d) $p \land q$ is F, so its
       negation is **T**.
    5. $p$ is T, $q$ is F, so $\neg q$ is T, and $p \land \neg q$ is **T**: "5 is odd and 5 is not greater than 7."
    6. Take $p$ **true** and $q$ **false**. Then $\neg p \land q$ is F and F, which is **F**. And $p \land q$ is F, so
       $\neg(p \land q)$ is **T**. Taking both **false** also works: $\neg p \land q$ is T and F, which is F, and
       $\neg(p \land q)$ is T. The other two pairs fail.
    7. **No.** Suppose the first is true. Then the second is true, so the first is false. Suppose the first is false.
       Then the second is false, so the first is true. Either way we reach a contradiction, so neither sentence can be
       given a truth value. It is a two-sentence version of the liar paradox.
    8. $(c \lor i) \land \neg(c \land i)$. With both: $c \lor i$ is T, but $c \land i$ is T so $\neg(c \land i)$ is F.
       The whole thing is **F**: having both breaks the rule.

## Common mistake

**Calling any sentence with a number in it a statement.** "$x + 1 = 3$" looks like math, but it is not true or false
until $x$ has a value. On the other hand, "$2 + 2 = 5$" **is** a statement. False statements are still statements.

**Leaving out the brackets.** "Not both" is $\neg(p \land q)$, not $\neg p \land q$. When the "not" covers a whole
phrase, it needs brackets around the phrase.

## Where it leads

- Back: [Level 3: Weighing puzzles](../level-3/06-weighing-puzzles.md), and the words in plain English in
  [Not, and, or](../level-3/01-not-and-or.md) · Next: [Truth tables](02-truth-tables.md).
- [Level 4 page](index.md) · [Logic topic page](../index.md)
- The liar paradox and its cousins are the subject of a whole lesson in [level 7](../level-7/index.md).
- Using letters for things you do not know yet is the same move algebra makes: [Algebra](../../algebra/index.md).
- On the U of T shelf, statements and connectives open [MAT137 Unit 1: logic, sets and proofs](../../../uoft/MAT137/unit01.md).
