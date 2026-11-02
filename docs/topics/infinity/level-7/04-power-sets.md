---
title: "Power sets and Cantor's theorem"
---

# Power sets and Cantor's theorem

*Infinity and strange math · level 7, lesson 4 of 6*

## A question to start

You now know two sizes of infinity: the countable size $\aleph_0$ of the counting numbers, and the bigger size of the
real numbers. Is that the end of the story? Is the continuum the biggest infinity there is?

Or is there a set bigger than $\mathbb{R}$? And one bigger than that? And is there, perhaps, a **biggest** infinity,
one that all the others fit inside?

Cantor answered all of these with one short proof that works for every set there is. The answer: there is no
biggest infinity. Above every infinity there is a bigger one, forever. The tool is the **power set**.

## The idea

### Subsets and the power set

A **subset** of a set $A$ is any collection of members of $A$, including the empty collection and the whole of $A$.
The empty set is written $\varnothing$. We write $B \subseteq A$ for "$B$ is a subset of $A$".

The **power set** of $A$, written $\mathcal{P}(A)$, is the set of **all** subsets of $A$. Its members are themselves
sets. For $A = \{a, b, c\}$:

$$\mathcal{P}(A) = \big\{ \varnothing,\ \{a\},\ \{b\},\ \{c\},\ \{a,b\},\ \{a,c\},\ \{b,c\},\ \{a,b,c\} \big\}.$$

That is 8 subsets from 3 elements.

### Why a set with $n$ elements has $2^n$ subsets

To build a subset, go through the elements one at a time and decide: **in** or **out**. Each decision has 2 choices,
and the decisions do not affect each other, so the number of subsets is $2 \times 2 \times \cdots \times 2 = 2^n$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 230" role="img" aria-label="A tree of choices: a in or out, then b in or out, then c in or out, ending in the eight subsets of a, b, c">
  <line x1="200.0" y1="22" x2="102.0" y2="72" stroke="#7ccf9a" stroke-width="3"/>
  <line x1="200.0" y1="22" x2="298.0" y2="72" stroke="#eea66f" stroke-width="3"/>
  <line x1="102.0" y1="72" x2="53.0" y2="122" stroke="#7ccf9a" stroke-width="3"/>
  <line x1="102.0" y1="72" x2="151.0" y2="122" stroke="#eea66f" stroke-width="3"/>
  <line x1="298.0" y1="72" x2="249.0" y2="122" stroke="#7ccf9a" stroke-width="3"/>
  <line x1="298.0" y1="72" x2="347.0" y2="122" stroke="#eea66f" stroke-width="3"/>
  <line x1="53.0" y1="122" x2="28.5" y2="172" stroke="#7ccf9a" stroke-width="3"/>
  <line x1="53.0" y1="122" x2="77.5" y2="172" stroke="#eea66f" stroke-width="3"/>
  <line x1="151.0" y1="122" x2="126.5" y2="172" stroke="#7ccf9a" stroke-width="3"/>
  <line x1="151.0" y1="122" x2="175.5" y2="172" stroke="#eea66f" stroke-width="3"/>
  <line x1="249.0" y1="122" x2="224.5" y2="172" stroke="#7ccf9a" stroke-width="3"/>
  <line x1="249.0" y1="122" x2="273.5" y2="172" stroke="#eea66f" stroke-width="3"/>
  <line x1="347.0" y1="122" x2="322.5" y2="172" stroke="#7ccf9a" stroke-width="3"/>
  <line x1="347.0" y1="122" x2="371.5" y2="172" stroke="#eea66f" stroke-width="3"/>
  <circle cx="200.0" cy="22" r="4" fill="currentColor"/>
  <circle cx="102.0" cy="72" r="4" fill="currentColor"/>
  <circle cx="298.0" cy="72" r="4" fill="currentColor"/>
  <circle cx="53.0" cy="122" r="4" fill="currentColor"/>
  <circle cx="151.0" cy="122" r="4" fill="currentColor"/>
  <circle cx="249.0" cy="122" r="4" fill="currentColor"/>
  <circle cx="347.0" cy="122" r="4" fill="currentColor"/>
  <circle cx="28.5" cy="172" r="4" fill="currentColor"/>
  <circle cx="77.5" cy="172" r="4" fill="currentColor"/>
  <circle cx="126.5" cy="172" r="4" fill="currentColor"/>
  <circle cx="175.5" cy="172" r="4" fill="currentColor"/>
  <circle cx="224.5" cy="172" r="4" fill="currentColor"/>
  <circle cx="273.5" cy="172" r="4" fill="currentColor"/>
  <circle cx="322.5" cy="172" r="4" fill="currentColor"/>
  <circle cx="371.5" cy="172" r="4" fill="currentColor"/>
  <text x="396" y="51" font-size="12" text-anchor="end" fill="currentColor">a?</text>
  <text x="396" y="101" font-size="12" text-anchor="end" fill="currentColor">b?</text>
  <text x="396" y="151" font-size="12" text-anchor="end" fill="currentColor">c?</text>
  <text x="28.5" y="195" font-size="11" text-anchor="middle" fill="currentColor">{a,b,c}</text>
  <text x="77.5" y="195" font-size="11" text-anchor="middle" fill="currentColor">{a,b}</text>
  <text x="126.5" y="195" font-size="11" text-anchor="middle" fill="currentColor">{a,c}</text>
  <text x="175.5" y="195" font-size="11" text-anchor="middle" fill="currentColor">{a}</text>
  <text x="224.5" y="195" font-size="11" text-anchor="middle" fill="currentColor">{b,c}</text>
  <text x="273.5" y="195" font-size="11" text-anchor="middle" fill="currentColor">{b}</text>
  <text x="322.5" y="195" font-size="11" text-anchor="middle" fill="currentColor">{c}</text>
  <text x="371.5" y="195" font-size="11" text-anchor="middle" fill="currentColor">∅</text>
  <line x1="110" y1="217" x2="130" y2="217" stroke="#7ccf9a" stroke-width="3"/>
  <text x="135" y="221" font-size="12" fill="currentColor">in</text>
  <line x1="200" y1="217" x2="220" y2="217" stroke="#eea66f" stroke-width="3"/>
  <text x="225" y="221" font-size="12" fill="currentColor">out</text>
</svg>
</div>

Each path down the tree is one subset, and each subset is exactly one path. With 3 elements there are $2^3 = 8$
paths; with 10 elements there would be $2^{10} = 1024$.

And $2^n$ is always bigger than $n$. You do not even need to compute it: the $n$ one-element subsets $\{a\}, \{b\},
\ldots$ are already $n$ subsets, and the empty set is one more. For finite sets, the power set is always bigger.

### Subsets of $\mathbb{N}$ are 0-1 sequences

Now take $A = \mathbb{N} = \{1, 2, 3, \ldots\}$. A subset of $\mathbb{N}$ is the same as an infinite string of in/out
decisions. Write 1 for "in" and 0 for "out", and every subset becomes a 0-1 sequence:

| Subset of $\mathbb{N}$ | 0-1 sequence (places 1, 2, 3, ...) |
| --- | --- |
| even numbers $\{2, 4, 6, \ldots\}$ | 0 1 0 1 0 1 0 1 ... |
| primes $\{2, 3, 5, 7, 11, \ldots\}$ | 0 1 1 0 1 0 1 0 0 0 1 ... |
| $\{1, 2, 3\}$ | 1 1 1 0 0 0 0 ... |
| $\varnothing$ | 0 0 0 0 0 ... |
| $\mathbb{N}$ itself | 1 1 1 1 1 ... |

This is a perfect pairing: each subset gives one sequence and each sequence gives one subset. In lesson 1 you proved
that the 0-1 sequences cannot be listed. So $\mathcal{P}(\mathbb{N})$ is uncountable: $|\mathcal{P}(\mathbb{N})| >
|\mathbb{N}|$. (In fact $\mathcal{P}(\mathbb{N})$ has exactly the same size as $\mathbb{R}$, because a 0-1 sequence
is almost the same thing as a binary expansion $0.0101\ldots_2$ of a number in $[0, 1]$; making that exact needs some
care with numbers that have two binary forms, which are only countably many. So $\mathfrak{c} = 2^{\aleph_0}$.)

### Cantor's theorem

**Theorem (Cantor, 1891).** For **every** set $A$, finite or infinite, $|A| < |\mathcal{P}(A)|$.

There are two parts: $A$ fits inside $\mathcal{P}(A)$, and there is no bijection.

**Fits inside.** Pair each element $a$ with the one-element subset $\{a\}$. Different elements give different
subsets, so this is an injection, and $|A| \le |\mathcal{P}(A)|$.

**No bijection.** Suppose, to get a contradiction, that $f$ pairs every element $a$ of $A$ with a subset $f(a)$, and
that every subset of $A$ is used. Each element $a$ is either **inside** its own partner $f(a)$ or **not**. Collect the
elements that are not:

$$D = \{\, a \in A : a \notin f(a) \,\}.$$

(Read: "$D$ is the set of elements $a$ of $A$ such that $a$ is not in $f(a)$".) $D$ is a subset of $A$, so it must be
somebody's partner: $D = f(y)$ for some element $y$. Now ask: **is $y$ in $D$?**

- If $y \in D$, then by the rule that made $D$, $y \notin f(y)$. But $f(y) = D$, so $y \notin D$. Contradiction.
- If $y \notin D$, then $y \notin f(y)$ (because $f(y) = D$), and that is exactly the rule for being in $D$, so
  $y \in D$. Contradiction.

Either way we reach something impossible. So no such $f$ exists, and $|A| < |\mathcal{P}(A)|$. ∎

### It is the diagonal argument again

Make a table: one row for each element $a$, one column for each element, and write 1 in row $a$, column $b$ if $b$ is
in $f(a)$, and 0 if not. Each row is the 0-1 description of one subset $f(a)$. The diagonal entry in row $a$, column $a$
says whether $a \in f(a)$. The set $D$ is the diagonal **flipped**: $a$ is in $D$ exactly when the diagonal entry is
0. So $D$ disagrees with row $a$ at column $a$, for every $a$: it is not any row. When $A = \mathbb{N}$ this is
exactly lesson 1's flip argument. Cantor's theorem is the diagonal argument with the decimals taken away, so it works
for any set at all, even one too big to draw as a table.

### A ladder with no top

Apply the theorem again and again:

$$|\mathbb{N}| < |\mathcal{P}(\mathbb{N})| < |\mathcal{P}(\mathcal{P}(\mathbb{N}))| <
|\mathcal{P}(\mathcal{P}(\mathcal{P}(\mathbb{N})))| < \cdots$$

Each step is a strictly bigger infinity. Whatever set you name, its power set is bigger. So there is **no largest
infinity**.

This also explains a famous trouble. Suppose there were a "set of all sets", $V$. Every subset of $V$ is a set, so it
is a member of $V$, which means $\mathcal{P}(V)$ fits inside $V$ and $|\mathcal{P}(V)| \le |V|$. Cantor's theorem says
the opposite. This is **Cantor's paradox**, found in the 1890s, and it led (through Bertrand Russell's paradox of 1901)
to the careful rules for sets that mathematicians use today: in those rules, there is no set of all sets.

## Worked examples

**1. Subsets of a 4-element set.** How many subsets has $\{a, b, c, d\}$, and how many of each size?

$2^4 = 16$ in all. By size: 1 empty set; 4 with one element; 6 with two ($\{a,b\}, \{a,c\}, \{a,d\}, \{b,c\},
\{b,d\}, \{c,d\}$); 4 with three (leave one out); 1 with all four. Check: $1 + 4 + 6 + 4 + 1 = 16$. These are row 4
of Pascal's triangle.

**2. Running Cantor's proof on a small example.** Let $A = \{1, 2, 3\}$ and suppose someone pairs
$f(1) = \{1, 2\}$, $f(2) = \{3\}$, $f(3) = \{1, 3\}$. Find a subset that is nobody's partner.

Check each element against its own partner: $1 \in f(1)$, so 1 is **not** in $D$. $2 \notin f(2) = \{3\}$, so 2 **is**
in $D$. $3 \in f(3)$, so 3 is not in $D$. So $D = \{2\}$. Indeed $\{2\}$ is not $f(1)$, $f(2)$ or $f(3)$. (Of
course, with 3 elements and 8 subsets, some subsets had to be missed anyway; the point is that the rule finds one
without searching.)

**3. An infinite example.** Let $f(n) = \{\text{multiples of } n\}$ for each $n \in \mathbb{N}$, so $f(3) = \{3, 6,
9, \ldots\}$. Find $D$ and check that it is not any $f(n)$.

Every $n$ is a multiple of itself, so $n \in f(n)$ for every $n$. Nobody qualifies for $D$, so $D = \varnothing$.
And $\varnothing$ is not any $f(n)$, since each $f(n)$ contains $n$. ✓

**4. Another.** Let $f(n) = \{1, 2, \ldots, n - 1\}$ (so $f(1) = \varnothing$, $f(4) = \{1, 2, 3\}$). Here $n \notin
f(n)$ always, so every $n$ is in $D$: $D = \mathbb{N}$. Each $f(n)$ is finite and $\mathbb{N}$ is not, so $D$ is no
$f(n)$. ✓

**5. A subset as a sequence.** The subset $\{1, 4, 9, 16, \ldots\}$ (the squares) gives the sequence with 1s in
places 1, 4, 9, 16: $1\,0\,0\,1\,0\,0\,0\,0\,1\,0\ldots$

## Try it

1. List all the subsets of $\{x, y\}$. How many are there?
2. How many subsets does a set with 10 elements have? How many of them are **not** empty?
3. Write the first ten terms of the 0-1 sequence for the odd numbers, and for the set $\{2, 5\}$.
4. Let $A = \{1, 2, 3, 4\}$ with $f(1) = \{2, 3\}$, $f(2) = \{2\}$, $f(3) = \varnothing$, $f(4) = \{1, 2, 3, 4\}$.
   Find $D$ and check it is not any $f(a)$.
5. Let $f(n) = \{2, 4, 6, \ldots\}$ (the even numbers) for every $n$. Find $D$.
6. Let $f(n) = \{n + 1\}$. Find $D$.
7. Name a set that is strictly bigger than $\mathbb{R}$. Explain how you know.
8. Challenge: a librarian makes, for each book in a library, a catalogue listing some of the books. One day she wants
   a catalogue of exactly those catalogues that do **not** list themselves. Could that catalogue be on the shelf, and
   be one of the ones it is supposed to list? Connect this to the proof.

??? note "Answers"
    1. $\varnothing$, $\{x\}$, $\{y\}$, $\{x, y\}$: four subsets, which is $2^2$.
    2. $2^{10} = 1024$ subsets; all but the empty set are non-empty, so $1023$.
    3. Odd numbers: $1\,0\,1\,0\,1\,0\,1\,0\,1\,0$. The set $\{2, 5\}$: $0\,1\,0\,0\,1\,0\,0\,0\,0\,0$.
    4. $1 \notin \{2, 3\}$, so $1 \in D$. $2 \in \{2\}$, so $2 \notin D$. $3 \notin \varnothing$, so $3 \in D$.
       $4 \in \{1,2,3,4\}$, so $4 \notin D$. So $D = \{1, 3\}$, which is none of $\{2,3\}$, $\{2\}$, $\varnothing$,
       $\{1,2,3,4\}$. ✓
    5. $n \in f(n)$ exactly when $n$ is even. So $D$ is the set of odd numbers, which is indeed not the even numbers.
    6. $n$ is never in $\{n + 1\}$, so every $n$ is in $D$: $D = \mathbb{N}$, which is not a one-element set. ✓
    7. $\mathcal{P}(\mathbb{R})$, the set of all subsets of the real line. By Cantor's theorem, applied to the set
       $\mathbb{R}$, it is strictly bigger.
    8. Call the special catalogue $C$. If $C$ lists itself, then it breaks its own rule (it should list only
       catalogues that do not list themselves). If $C$ does not list itself, then it is a catalogue that does not list
       itself, so the rule says it must list itself. Either way, contradiction, so such a catalogue cannot be one of the
       ones it lists. It is the same "is $y$ in $D$?" trap as in the proof, and the same shape as Russell's paradox.

## Common mistake

**Confusing members and subsets.** $1$ is a member of $\{1, 2\}$; $\{1\}$ is a subset of it. The power set of
$\{1, 2\}$ is $\{\varnothing, \{1\}, \{2\}, \{1,2\}\}$, whose members are sets. Writing $1 \in \mathcal{P}(\{1,2\})$ is
wrong; $\{1\} \in \mathcal{P}(\{1,2\})$ is right.

**Thinking the proof needs $A$ to be listable.** The argument never lists anything; it only asks, for each $a$,
whether $a \in f(a)$. That is why it works for $\mathbb{R}$ and for sets far bigger.

## Where it leads

- Previous: [Transcendental numbers exist](03-transcendental-numbers.md). Next: [The Cantor set](05-cantor-set.md),
  where 0-1 sequences turn into a strange dust of points.
- [Level 7 page](index.md) · [Infinity topic page](../index.md)
- Counting subsets: [Counting, in or out](../../counting/level-5/02-in-or-out.md) and
  [Pascal's triangle](../../counting/level-5/03-pascals-triangle.md). The paradox of the set of all sets:
  [Russell's paradox](../../logic/level-8/03-russells-paradox.md) in Logic, level 8.
- On the U of T shelf: sets, functions and proof in [MAT137 Unit 1](../../../uoft/MAT137/unit01.md) and
  [MAT158 Unit 1](../../../uoft/MAT158H1/unit01.md).
