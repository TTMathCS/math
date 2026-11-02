---
title: "Quantifiers"
---

# Quantifiers

*Logic and puzzles · level 5, lesson 4 of 6*

## A question to start

Read these two sentences slowly.

1. **Everyone has someone they admire.**
2. **There is someone whom everyone admires.**

They use nearly the same words. Are they saying the same thing?

No. The first is easy to believe: Ana admires her grandmother, Ben admires a footballer, Chen admires a scientist.
Each person has **their own** hero. The second is a much bigger claim: **one single** person is admired by Ana, by
Ben, by Chen and by everybody else. The first can be true while the second is false.

The only difference is the **order** of "every" and "some". Words like these are called **quantifiers** (they say
*how many*), and mathematics needs them in almost every sentence. This lesson gives them symbols, shows how to decide
whether a sentence with them is true, and how to write its opposite without getting tangled.

## The idea

### Open sentences

"$x$ is even" is not yet a statement: it is not true or false until we know what $x$ is. With $x = 4$ it is true,
with $x = 7$ it is false. A sentence with a gap like this is called an **open sentence** (or a **predicate**). We
write it as $P(x)$, read "P of x".

There are two ways to turn an open sentence into a statement:

- put in a value: $P(4)$ is "4 is even", which is true;
- say **how many** values make it true: all of them, or at least one.

The second way uses quantifiers. We always need to know **which** values $x$ may take; that set is called the
**domain**. "Every number is positive" is true for natural numbers and false for integers.

### "For all": $\forall$

The symbol $\forall$ (an upside-down A, for **All**) means **"for all"** or "for every".

$$\forall x \in \mathbb{Z},\ x^2 \ge 0$$

reads "for every integer $x$, $x$ squared is at least 0". It is **true**: a positive times a positive is positive,
a negative times a negative is positive, and $0^2 = 0$.

**How to decide.** A "for all" statement is true when $P(x)$ holds for **every single** $x$ in the domain. To show
it is false, **one** $x$ that fails is enough. Such an $x$ is called a **counterexample**.

- "$\forall n \in \mathbb{N},\ n^2 > n$" is false: $n = 1$ gives $1 > 1$, which fails. One counterexample, done.

Checking many examples can never prove a "for all" about an infinite set. You need a reason that covers every case
at once (the subject of [level 7](../level-7/index.md)).

### "There exists": $\exists$

The symbol $\exists$ (a backwards E, for **Exists**) means **"there exists"** or "for at least one", or "for some".

$$\exists n \in \mathbb{N},\ n^2 = 49$$

reads "there is a natural number whose square is 49". It is **true**, because $n = 7$ works. A value that makes it
true is called a **witness**.

**How to decide.** A "there exists" statement is true when **at least one** $x$ works. To show it is false, you must
show that **no** $x$ works, which needs a reason covering all of them.

- "$\exists n \in \mathbb{N},\ n + 5 = 2$" is false: every natural number is at least 1, so $n + 5 \ge 6$.
- Change the domain: "$\exists n \in \mathbb{Z},\ n + 5 = 2$" is true, witness $n = -3$.

Notice the mirror image. **"For all" is hard to prove and easy to disprove** (one counterexample). **"There exists"
is easy to prove (one witness) and hard to disprove.**

### "For all" is a big *and*; "there exists" is a big *or*

Suppose the domain is just three people: Ana, Ben and Chen. Then

- "everyone is happy" means "Ana is happy **and** Ben is happy **and** Chen is happy";
- "someone is happy" means "Ana is happy **or** Ben is happy **or** Chen is happy".

So $\forall$ is an *and* that runs over the whole domain, and $\exists$ is an *or* over the whole domain. That single
idea explains everything that follows.

### Negating quantifiers

What is the opposite of "everyone is happy"? Use De Morgan's law from the [last lesson](03-de-morgan.md): the
opposite of "A and B and C" is "not A or not B or not C", that is, **somebody is not happy**. In symbols:

$$\neg\big(\forall x,\ P(x)\big) \equiv \exists x,\ \neg P(x).$$

And the opposite of "someone is happy" ("A or B or C") is "not A and not B and not C": **nobody is happy**, that is,
everyone is not happy:

$$\neg\big(\exists x,\ P(x)\big) \equiv \forall x,\ \neg P(x).$$

The rule: **to negate, swap $\forall$ and $\exists$, and negate what comes after.**

The famous example: "all swans are white" was believed in Europe for a long time, until Europeans reached Australia
and saw black swans. Its opposite is **not** "all swans are not white". It is "**some** swan is not white", and one
black swan is enough to make it true.

### Hidden quantifiers in English

Everyday English hides quantifiers, so translate carefully.

- "A square has four equal sides" means **every** square does: $\forall$.
- "A student in our class scored 100" means **some** student did: $\exists$.
- "Prime numbers are odd" means all of them, and it is false (2).
- "No dog can fly" means for every dog, it cannot fly: $\forall x,\ \neg F(x)$, which is the same as
  $\neg \exists x,\ F(x)$.

The trickiest is **"all ... are not ..."**. "All that glitters is not gold" is usually meant as "**not all** that
glitters is gold" (some shiny things are not gold), even though the words seem to say "nothing shiny is gold". In
mathematics, say exactly which one you mean.

### Two quantifiers: the order matters

Statements often have two quantifiers. Compare, for natural numbers:

- $\forall n,\ \exists m,\ m > n$: "for every number $n$ there is a number $m$ bigger than it". **True**: given $n$,
  take $m = n + 1$. The witness $m$ is allowed to **depend on** $n$.
- $\exists m,\ \forall n,\ m > n$: "there is one number $m$ bigger than every number $n$". **False**: whatever $m$
  you pick, it would have to be bigger than $n = m$, which is impossible.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 170" role="img" aria-label="Left: each person on the left has an arrow to a different person on the right. Right: every person on the left has an arrow to the same single person on the right">
  <g fill="#eea66f" stroke="currentColor">
    <circle cx="40" cy="40" r="12"/><circle cx="40" cy="85" r="12"/><circle cx="40" cy="130" r="12"/>
    <circle cx="260" cy="40" r="12"/><circle cx="260" cy="85" r="12"/><circle cx="260" cy="130" r="12"/>
  </g>
  <g fill="#9cc9ea" stroke="currentColor">
    <circle cx="160" cy="40" r="12"/><circle cx="160" cy="85" r="12"/><circle cx="160" cy="130" r="12"/>
    <circle cx="380" cy="40" r="12"/><circle cx="380" cy="85" r="12"/><circle cx="380" cy="130" r="12"/>
  </g>
  <g stroke="currentColor" stroke-width="2">
    <line x1="53" y1="42" x2="145" y2="128"/>
    <line x1="53" y1="85" x2="145" y2="42"/>
    <line x1="53" y1="128" x2="145" y2="88"/>
    <line x1="273" y1="42" x2="366" y2="80"/>
    <line x1="273" y1="85" x2="366" y2="85"/>
    <line x1="273" y1="128" x2="366" y2="90"/>
  </g>
  <g font-size="13" text-anchor="middle" fill="currentColor">
    <text x="100" y="163">∀x ∃y: each has their own</text>
    <text x="320" y="163">∃y ∀x: one for everybody</text>
  </g>
</svg>
</div>

The arrows show "admires". On the left, everyone has an arrow going out, so "everyone admires someone" is true; but
no single person on the right receives every arrow. On the right, one person receives all three arrows: "there is
someone whom everyone admires" is true, and that is a **stronger** statement. In general,
$\exists y\ \forall x$ implies $\forall x\ \exists y$, but not the other way round.

Two quantifiers of the **same** kind can be swapped safely: "for all $x$, for all $y$" means the same as "for all
$y$, for all $x$".

### Negating two quantifiers

Apply the swap rule twice, from left to right:

$$\neg\big(\forall x\ \exists y,\ P(x, y)\big) \equiv \exists x\ \neg\big(\exists y,\ P(x, y)\big) \equiv \exists x\ \forall y,\ \neg P(x, y).$$

"Not everyone has someone they admire" means "**there is** a person who admires **nobody**".

### "For all" over nothing

What about "every unicorn in this room is purple"? The domain is empty: there are no unicorns. To make it false you
would need a counterexample, a unicorn that is not purple, and there is none. So it counts as **true**. This is
called **vacuously true** ("true because there is nothing to check"). It is the same reason
$\varnothing \subseteq A$ in [lesson 1](01-sets.md). Notice that "some unicorn in this room is purple" is **false**:
a "there exists" over an empty domain has no witness.

## Worked examples

**1. True or false?** Domain: the integers $\mathbb{Z}$.

- $\forall x,\ x + 0 = x$. **True**: adding 0 changes nothing.
- $\forall x,\ 2x > x$. **False**: counterexample $x = -1$ gives $-2 > -1$, which fails. (Also $x = 0$.)
- $\exists x,\ x^2 = 2$. **False**: $1^2 = 1$ is too small and $2^2 = 4$ is too big, and negative integers give the
  same squares. No integer works. (In the domain $\mathbb{R}$ it is true, with witness $\sqrt{2}$.)
- $\exists x,\ x^2 = x$. **True**: witnesses $x = 0$ and $x = 1$.

**2. Negating in words and symbols.** Negate "every student in the class has a phone".

Symbols: $\forall s,\ \text{Phone}(s)$. Negation: $\exists s,\ \neg\text{Phone}(s)$. Words: "**some** student in the
class has no phone". Not "no student has a phone", which is far stronger.

**3. Order matters, with numbers.** Domain $\mathbb{R}$. Decide each.

- $\forall x\ \exists y,\ x + y = 0$. **True**: for each $x$, take $y = -x$. The $y$ depends on $x$.
- $\exists y\ \forall x,\ x + y = 0$. **False**: a single $y$ would need $0 + y = 0$ (so $y = 0$) and $1 + y = 0$ (so
  $y = -1$) at the same time.
- $\exists y\ \forall x,\ x \cdot y = 0$. **True**: $y = 0$ works for every $x$ at once.

**4. Negating a nested statement.** Negate "for every $\varepsilon > 0$ there is an $n$ with $\frac{1}{n} < \varepsilon$"
(this is the kind of sentence calculus is built from; $\varepsilon$ is the Greek letter epsilon, used for a small
positive number).

Swap each quantifier and negate the end: "**there is** an $\varepsilon > 0$ such that **for every** $n$,
$\frac{1}{n} \ge \varepsilon$". (The original is true, so this negation is false.) Note that the condition
$\varepsilon > 0$ stays as it is: it says which $\varepsilon$ we talk about, it is part of the domain.

**5. Translating.** Let the domain be all people and $L(x, y)$ mean "$x$ likes $y$". Translate:

- "Everybody likes somebody": $\forall x\ \exists y,\ L(x, y)$.
- "Somebody is liked by everybody": $\exists y\ \forall x,\ L(x, y)$.
- "Nobody likes everybody": $\neg \exists x\ \forall y,\ L(x, y)$, which is $\forall x\ \exists y,\ \neg L(x, y)$:
  everyone has somebody they do not like.

## Try it

1. Domain $\mathbb{N}$. True or false: (a) $\forall n,\ n \ge 1$; (b) $\exists n,\ n < 1$; (c)
   $\exists n,\ n^2 = 2n$.
2. Write the negation of "Some prime number is even." Which is true, the statement or its negation?
3. Write the negation of "Every rectangle is a square", in words. Give a witness for the negation.
4. Domain $\mathbb{Z}$. Decide each and explain: (a) $\forall x\ \exists y,\ y > x$; (b)
   $\exists y\ \forall x,\ y > x$.
5. Domain $\mathbb{R}$. Decide: (a) $\forall x\ \exists y,\ y^2 = x$; (b) $\forall x\ \exists y,\ y = x^2$.
6. Negate $\forall x\ \exists y,\ x + y > 10$ (move the $\neg$ all the way in).
7. "All the lights are not on." Write the two different things this could mean, in symbols with $O(x)$ for "light
   $x$ is on".
8. True or false: "every whole number between 3 and 4 is prime". Explain.

??? note "Answers"
    1. (a) **True**: the smallest natural number is 1. (b) **False**: no natural number is below 1 (this is (a)'s
       negation). (c) **True**: $n = 2$ gives $4 = 4$.
    2. Negation: "Every prime number is odd" ($\forall p,\ \neg\text{Even}(p)$). The **statement** is true, witness
       2; so the negation is false.
    3. "Some rectangle is not a square." Witness: a 2 by 5 rectangle.
    4. (a) **True**: given $x$, take $y = x + 1$. (b) **False**: there is no largest integer. Any $y$ fails for
       $x = y$, since $y > y$ is false.
    5. (a) **False**: counterexample $x = -1$; no real $y$ has $y^2 = -1$. (b) **True**: given $x$, take
       $y = x^2$, which always exists.
    6. $\exists x\ \forall y,\ x + y \le 10$. (In $\mathbb{R}$ this negation is false, because for any $x$ you can
       pick $y = 11 - x$; so the original is true.)
    7. "Every light is off": $\forall x,\ \neg O(x)$. Or "not every light is on": $\neg \forall x,\ O(x)$, which
       is $\exists x,\ \neg O(x)$, "at least one light is off". These are different: with two lights, one on and
       one off, the second is true and the first is false.
    8. **True, vacuously.** There is no whole number between 3 and 4, so there is nothing that could be a
       counterexample.

## Common mistake

**Negating "all" as "none".** The opposite of "all swans are white" is "some swan is not white", not "no swan is
white". The opposite of "everybody passed" is "somebody failed". A "for all" needs only **one** failure to be false.

**Swapping the order of $\forall$ and $\exists$.** "For every lock there is a key that opens it" is believable; "there
is a key that opens every lock" is a master key, a much bigger claim. When the second quantifier's choice depends on
the first, the order cannot be changed.

## Where it leads

- Back: [De Morgan's laws](03-de-morgan.md) · Next: [Valid arguments](05-valid-arguments.md), where "for all"
  statements become the starting points of reasoning.
- [Level 5 page](index.md) · [Logic topic page](../index.md)
- Counterexamples and "for all" proofs are the heart of [level 7: how a proof works](../level-7/index.md); quantifiers
  with formulas come back in [level 8](../level-8/index.md).
- Sentences like "for every $\varepsilon > 0$ there is ..." are how limits are defined in calculus: see
  [MAT137 unit 1](../../../uoft/MAT137/unit01.md) and [MAT158 unit 1](../../../uoft/MAT158H1/unit01.md), then
  [MAT137 unit 2](../../../uoft/MAT137/unit02.md).
