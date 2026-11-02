---
title: "Russell's paradox and sets"
---

# Russell's paradox and sets

*Logic and puzzles · level 8, lesson 3 of 6*

## A question to start

A **set** is a collection of things. There is the set of all cats, the set of all even numbers, the set of all
triangles. So surely there is a **set of all sets**: the collection of every set there is.

That set would be very strange. It is a set, and it contains every set, so it contains **itself**. Is that allowed?
Is it a problem?

In 1901 Bertrand Russell asked a question about sets like this, a question a few lines long, and it showed that the
way the best logicians of the day thought about sets was **contradictory**. The fix took decades and shaped how all
of mathematics is written today.

## The idea

### Naive set theory

In [Sets](../level-5/01-sets.md) you met set-builder notation: $\{x : x \text{ is an even integer}\}$, "the set of
all $x$ such that $x$ is an even integer". It seems natural to assume:

> **Unrestricted comprehension.** For every property $P$, there is a set $\{x : P(x)\}$ whose elements are exactly
> the things with property $P$.

This is the heart of what is now called **naive set theory**. Gottlob Frege built a careful logical system on a
principle like this in the late 1800s, intending to show that all of arithmetic follows from pure logic.

### Sets that contain themselves

Usually a set is not one of its own elements. The set of all cats is not a cat. The set $\{1, 2, 3\}$ is not 1, 2 or
3. Call such a set **ordinary**: $x \notin x$.

But under unrestricted comprehension, some sets **would** contain themselves. The set of all sets is a set, so it is
an element of itself. The set of all things that are not cats is not a cat, so it is an element of itself.

### Russell's set

Russell, who found the paradox while thinking about a proof of Georg Cantor's (worked example 3), used comprehension
with the property "is an ordinary set":

$$R = \{x : x \notin x\}.$$

$R$ is the set of all sets that do not contain themselves. By comprehension, it exists. Now ask: **is $R$ an element
of $R$?** By the definition of $R$, for any $x$ at all, $x \in R$ exactly when $x \notin x$. Put $x = R$:

$$R \in R \iff R \notin R.$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 150" role="img" aria-label="A loop: if R is in R then by its rule R is not in R; if R is not in R then by its rule R is in R">
  <g stroke="currentColor" stroke-width="1.5">
    <rect x="30" y="50" width="120" height="50" rx="8" fill="#9cc9ea"/>
    <rect x="270" y="50" width="120" height="50" rx="8" fill="#eea66f"/>
    <path d="M 150 62 C 200 30, 220 30, 270 62" fill="none"/>
    <path d="M 270 88 C 220 120, 200 120, 150 88" fill="none"/>
    <path d="M 262 55 L 270 62 L 260 66" fill="none"/>
    <path d="M 158 95 L 150 88 L 160 84" fill="none"/>
  </g>
  <g font-size="15" text-anchor="middle" fill="currentColor">
    <text x="90" y="81">R ∈ R</text>
    <text x="330" y="81">R ∉ R</text>
  </g>
  <g font-size="11" text-anchor="middle" fill="currentColor">
    <text x="210" y="25">then R is not ordinary, so not in R</text>
    <text x="210" y="138">then R is ordinary, so it is in R</text>
  </g>
</svg>
</div>

- If $R \in R$, then $R$ is one of the elements of $R$, and every element of $R$ is ordinary, so $R \notin R$.
- If $R \notin R$, then $R$ is ordinary, and $R$ contains **every** ordinary set, so $R \in R$.

Either way, a contradiction. Since every statement "$R \in R$" must be true or false, the only way out is that
one of the assumptions was wrong, and the only assumption used was unrestricted comprehension. **Naive set theory is
inconsistent.**

This is the barber paradox of [Paradoxes](../level-7/06-paradoxes.md), with "shaves" replaced by "contains". But
there is a big difference. The barber could be dismissed: "there is no such village". Here, the set $R$ was
promised to exist by the axiom everyone was using. The contradiction is in the foundations.

### A letter to Frege

Russell wrote to Frege in 1902, just as the second volume of Frege's great work on the foundations of arithmetic was
going to print. Frege's system allowed exactly this construction. He added an appendix to the volume, published in
1903, admitting that his basic principle had been shown to lead to a contradiction and trying (unsuccessfully) to
repair it. It is one of the most famous moments of intellectual honesty in mathematics.

### The repair: careful axioms

Mathematicians needed axioms for sets that are strong enough for all of mathematics, yet do not allow $R$. Two
repairs became important.

- **Types.** Russell (with Alfred North Whitehead, in *Principia Mathematica*, 1910 to 1913) arranged objects in
  levels: individuals, sets of individuals, sets of those sets, and so on. A set may only contain things from a lower
  level, so "$x \in x$" cannot even be written.
- **Zermelo-Fraenkel set theory.** Ernst Zermelo (1908), with later additions by Abraham Fraenkel and Thoralf Skolem,
  gave the axioms most mathematicians use today, called **ZF**, or **ZFC** with the axiom of choice added.

The key change in ZF is to replace unrestricted comprehension with a weaker axiom:

> **Separation.** For every set $A$ and every property $P$, there is a set $\{x \in A : P(x)\}$ of the elements
> **of $A$** with property $P$.

You may no longer collect "all $x$ in the universe" with a property. You may only cut a piece out of a set you
already have. New sets come from a short list of other axioms: there is an empty set; any two sets can be put
together in a pair; a set of sets has a union; every set has a power set (the set of all its subsets); there is an
infinite set; and a few more. An axiom called **foundation** also rules out $x \in x$ altogether.

Since 1908 no contradiction has been found in ZF, despite enormous use. (Whether one could ever be found is a
question that, by [the next lesson](04-godel-incompleteness.md), ZF cannot settle about itself.)

### Russell's argument becomes a theorem

With separation, Russell's argument no longer breaks anything. Instead it **proves** something.

**Theorem.** For every set $A$, the set $R_A = \{x \in A : x \notin x\}$ is not an element of $A$. So there is no set
of all sets.

**Proof.** $R_A$ exists by separation. Suppose, for a contradiction, that $R_A \in A$. Then, by the definition of
$R_A$, $R_A \in R_A$ exactly when $R_A \notin R_A$, a contradiction. So $R_A \notin A$. If there were a set $V$ of all
sets, $R_V$ would be a set that is not in $V$, contradicting the choice of $V$. ∎

The paradox has become a fact: **every set leaves something out**. Collections too big to be sets, like "all sets",
are called **classes** in some versions of set theory; you can talk about them, but they cannot be elements of
anything.

## Worked examples

**1. Sets of sets.** Count the elements of $\varnothing$, $\{\varnothing\}$ and $\{\varnothing, \{\varnothing\}\}$.

- $\varnothing$ has no elements: **0**.
- $\{\varnothing\}$ has one element, the empty set: **1**. It is not empty: it is a box containing an empty box.
- $\{\varnothing, \{\varnothing\}\}$ has two different elements: **2**.

John von Neumann (1923) used exactly these sets to **define** the numbers inside set theory: $0 = \varnothing$,
$1 = \{0\}$, $2 = \{0, 1\}$, $3 = \{0, 1, 2\}$, and in general $S(n) = n \cup \{n\}$. Each number is the set of all
smaller numbers, and has that many elements. All of the [Peano axioms](02-axioms.md) can then be proved in ZF. That
is how set theory serves as a foundation: numbers, functions, the real numbers and geometry are all built out of
sets.

**2. Separation at work.** With $A = \{1, 2, 3, 4, 5, 6\}$, separation gives $\{x \in A : x \text{ is even}\} = \{2, 4, 6\}$. It does **not** give "the set of all even things in the universe". To get the set of all even integers, you
first need the set of integers, which the axiom of infinity (and some construction) provides.

**3. Cantor's diagonal trick (where Russell's idea came from).** Cantor proved that no set $A$ can be matched one to
one with its power set $P(A)$: there are always more subsets than elements. Here is the idea for
$A = \{1, 2, 3\}$ and one attempted matching $f$:

| $a$ | $f(a)$ | is $a \in f(a)$? |
| --- | --- | --- |
| 1 | $\{1, 2\}$ | yes |
| 2 | $\{1, 3\}$ | no |
| 3 | $\varnothing$ | no |

Make $D = \{a \in A : a \notin f(a)\} = \{2, 3\}$. Is $D$ one of the $f(a)$? It differs from $f(1)$ at 1 (1 is in
$f(1)$ but not in $D$), from $f(2)$ at 2, and from $f(3)$ at 3. So $D$ is missed.

**The general proof.** Given any $f$ from $A$ to $P(A)$, let $D = \{a \in A : a \notin f(a)\}$. If $D = f(d)$ for
some $d$, then $d \in D \iff d \notin f(d) = D$, a contradiction. So $f$ misses $D$. ∎ This is Russell's argument
exactly, with "$a \in f(a)$" in place of "$x \in x$". For infinite sets it shows there are **different sizes of
infinity**, explored in [Infinity](../../infinity/index.md).

## Try it

1. How many elements does each set have: (a) $\{\{\varnothing\}\}$; (b) $\{\varnothing, \{\varnothing\}, \{\{\varnothing\}\}\}$;
   (c) $\{1, \{1\}, \{1, \{1\}\}\}$?
2. True or false: (a) $\varnothing \in \{\varnothing\}$; (b) $\varnothing \subseteq \{\varnothing\}$;
   (c) $\{\varnothing\} \in \{\varnothing\}$; (d) $\{\varnothing\} \subseteq \{\varnothing\}$.
3. Write the von Neumann number 3 using only $\varnothing$ and brackets.
4. With $A = \{1, 2, 3, 4\}$ and $f(1) = \{2, 3\}$, $f(2) = \{2\}$, $f(3) = \{1, 4\}$, $f(4) = \{1, 2, 3, 4\}$, find
   $D = \{a \in A : a \notin f(a)\}$ and check it is not any $f(a)$.
5. Under naive comprehension, does "the set of all sets with more than three elements" contain itself? Is it
   ordinary?
6. Someone suggests: "Just say $R$ is neither in $R$ nor out of $R$." Why does this not work?
7. Explain in two sentences why separation stops Russell's paradox but keeps sets like $\{x \in \mathbb{Z} : x > 0\}$.
8. Harder. Prove in ZF that there is no set $S$ that contains $\{x\}$ for every set $x$. (Hint: the union axiom says
   that for any set $S$ there is a set $\bigcup S$ whose elements are the elements of elements of $S$.)

??? note "Answers"
    1. (a) **1** (its one element is $\{\varnothing\}$). (b) **3**, all different. (c) **3**: $1$, $\{1\}$ and
       $\{1, \{1\}\}$.
    2. (a) True: $\varnothing$ is the element listed. (b) True: the empty set is a subset of every set.
       (c) False: the only element of $\{\varnothing\}$ is $\varnothing$, and $\{\varnothing\} \ne \varnothing$.
       (d) True: every set is a subset of itself.
    3. $3 = \{0, 1, 2\} = \{\varnothing, \{\varnothing\}, \{\varnothing, \{\varnothing\}\}\}$.
    4. $1 \notin \{2, 3\}$, so $1 \in D$. $2 \in \{2\}$, so $2 \notin D$. $3 \notin \{1, 4\}$, so $3 \in D$.
       $4 \in f(4)$, so $4 \notin D$. $D = \{1, 3\}$. It differs from $f(1)$ at 1, from $f(2)$ at 2, from $f(3)$
       at 3 and from $f(4)$ at 4, so it is none of them.
    5. It is a set with (enormously) more than three elements, so it would contain itself: it is **not** ordinary.
       Naive set theory allows such monsters; ZF does not.
    6. "$R \in R$" is a statement: it is true or it is false (the law of the excluded middle). There is no third
       option, and both options were shown impossible. The contradiction stands; one of the assumptions must go.
    7. Separation only lets you collect elements **of a set you already have**, so "all $x$ with $x \notin x$" can
       only be formed inside some set $A$, and the argument then just shows $R_A \notin A$. The set of positive
       integers is cut out of the set $\mathbb{Z}$, which we already have, so it is allowed.
    8. Suppose such an $S$ exists. For every set $x$, $\{x\} \in S$ and $x \in \{x\}$, so $x \in \bigcup S$. So
       $\bigcup S$ is a set of all sets, which the theorem above says cannot exist. Contradiction. ∎

## Common mistake

**Thinking Russell's paradox is a word game.** It is a precise proof that a specific axiom (unrestricted
comprehension) leads to a contradiction. Every step is valid; the axiom had to go.

**Confusing $\in$ and $\subseteq$.** "$\varnothing \in A$" says the empty set is one of the elements;
"$\varnothing \subseteq A$" says every element of $\varnothing$ is in $A$, which is always true. With sets of sets, the difference
matters on every line.

## Where it leads

- Back: [Axioms](02-axioms.md) · Next: [Gödel's incompleteness theorems](04-godel-incompleteness.md), where
  self-reference turns from a danger into a tool.
- [Level 8 page](index.md) · [Logic topic page](../index.md)
- Sets, unions and power sets from the start: [Sets](../level-5/01-sets.md) and
  [Union, intersection, complement](../level-5/02-union-intersection.md). The barber: [Paradoxes](../level-7/06-paradoxes.md).
- Cantor's sizes of infinity: [Infinity](../../infinity/index.md). Counting subsets: [In or out](../../counting/level-5/02-in-or-out.md).
- On the U of T shelf: sets and functions in [MAT137 Unit 1](../../../uoft/MAT137/unit01.md) and
  [MAT158 Unit 1](../../../uoft/MAT158H1/unit01.md).
