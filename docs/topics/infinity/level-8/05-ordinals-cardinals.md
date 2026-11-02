---
title: "Ordinals and cardinals"
---

# Ordinals and cardinals

*Infinity and strange math · level 8, lesson 5 of 7*

## A question to start

Line up all the counting numbers: 0, 1, 2, 3, ... forever. Now put one more person at the **end** of the line, after
all of them. Have you made the line longer?

In one sense, no. Hilbert's hotel says that one extra guest never changes the size of a countable set. In another
sense, yes, very clearly: the old line had no last person, and the new line does. Nobody can move the newcomer into
the line without changing its shape.

So there are two different ideas hiding inside the word "number": **how many** and **which position**. For finite
collections they always agree. For infinite ones they come apart, and following the "which position" idea lets you
count past infinity: $\omega$, $\omega + 1$, $\omega + 2$, ..., $\omega \cdot 2$, ..., $\omega^2$, ... This lesson
shows how.

## The idea

### Cardinals and ordinals

A **cardinal number** answers "how many?". Two sets have the same cardinal when they can be paired perfectly; you have
been using cardinals ($\aleph_0$, $\mathfrak{c}$) all through level 7.

An **ordinal number** answers "which place in line?", like first, second, third. More exactly, an ordinal describes
the **shape** of a line-up. Two line-ups have the same ordinal when they can be paired **keeping the order**: first
with first, and whenever $a$ comes before $b$ in one line, their partners come in the same order in the other.

For finite line-ups the two ideas agree: any two lines of 7 people have the same shape. For infinite ones they do not.

### Well-orders: lines where every group has a front

Not every infinite line-up is allowed. Ordinals describe **well-orders**: line-ups in which every non-empty group of
people has a **first** member. The counting numbers $0, 1, 2, \ldots$ are well-ordered: any non-empty set of them has
a smallest member. The negative integers $\ldots, -3, -2, -1$ are **not**: they have no first member at all. Well-orders
are exactly the line-ups in which you can always say "who is next?" and never fall down an endless staircase going
backwards.

### Counting past infinity

Call the shape of $0, 1, 2, 3, \ldots$ by the Greek letter $\omega$ (omega). It is the first infinite ordinal: the
first position that comes after **all** the finite ones.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 150" role="img" aria-label="Matchsticks in a row: 0, 1, 2, 3 and so on, crowding towards a point; then one more stick, labelled omega; then a second crowding row, ending at omega times 2">
  <line x1="10" y1="100" x2="350" y2="100" stroke="currentColor" stroke-width="1"/>
  <line x1="20.0" y1="100" x2="20.0" y2="50.0" stroke="#9cc9ea" stroke-width="3.00"/>
  <line x1="95.0" y1="100" x2="95.0" y2="54.6" stroke="#9cc9ea" stroke-width="2.52"/>
  <line x1="132.5" y1="100" x2="132.5" y2="58.3" stroke="#9cc9ea" stroke-width="2.12"/>
  <line x1="151.2" y1="100" x2="151.2" y2="61.2" stroke="#9cc9ea" stroke-width="1.78"/>
  <line x1="160.6" y1="100" x2="160.6" y2="63.6" stroke="#9cc9ea" stroke-width="1.50"/>
  <line x1="165.3" y1="100" x2="165.3" y2="65.4" stroke="#9cc9ea" stroke-width="1.26"/>
  <line x1="167.7" y1="100" x2="167.7" y2="66.9" stroke="#9cc9ea" stroke-width="1.06"/>
  <line x1="168.8" y1="100" x2="168.8" y2="68.0" stroke="#9cc9ea" stroke-width="0.89"/>
  <line x1="169.4" y1="100" x2="169.4" y2="69.0" stroke="#9cc9ea" stroke-width="0.75"/>
  <line x1="169.7" y1="100" x2="169.7" y2="69.7" stroke="#9cc9ea" stroke-width="0.63"/>
  <line x1="169.9" y1="100" x2="169.9" y2="70.3" stroke="#9cc9ea" stroke-width="0.60"/>
  <line x1="169.9" y1="100" x2="169.9" y2="70.7" stroke="#9cc9ea" stroke-width="0.60"/>
  <line x1="170.0" y1="100" x2="170.0" y2="71.1" stroke="#9cc9ea" stroke-width="0.60"/>
  <line x1="170.0" y1="100" x2="170.0" y2="71.4" stroke="#9cc9ea" stroke-width="0.60"/>
  <text x="20.0" y="118" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <text x="95.0" y="118" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <text x="132.5" y="118" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <text x="151.2" y="118" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <line x1="170.0" y1="100" x2="170.0" y2="50.0" stroke="#7ccf9a" stroke-width="3.00"/>
  <line x1="245.0" y1="100" x2="245.0" y2="54.6" stroke="#7ccf9a" stroke-width="2.52"/>
  <line x1="282.5" y1="100" x2="282.5" y2="58.3" stroke="#7ccf9a" stroke-width="2.12"/>
  <line x1="301.2" y1="100" x2="301.2" y2="61.2" stroke="#7ccf9a" stroke-width="1.78"/>
  <line x1="310.6" y1="100" x2="310.6" y2="63.6" stroke="#7ccf9a" stroke-width="1.50"/>
  <line x1="315.3" y1="100" x2="315.3" y2="65.4" stroke="#7ccf9a" stroke-width="1.26"/>
  <line x1="317.7" y1="100" x2="317.7" y2="66.9" stroke="#7ccf9a" stroke-width="1.06"/>
  <line x1="318.8" y1="100" x2="318.8" y2="68.0" stroke="#7ccf9a" stroke-width="0.89"/>
  <line x1="319.4" y1="100" x2="319.4" y2="69.0" stroke="#7ccf9a" stroke-width="0.75"/>
  <line x1="319.7" y1="100" x2="319.7" y2="69.7" stroke="#7ccf9a" stroke-width="0.63"/>
  <line x1="319.9" y1="100" x2="319.9" y2="70.3" stroke="#7ccf9a" stroke-width="0.60"/>
  <line x1="319.9" y1="100" x2="319.9" y2="70.7" stroke="#7ccf9a" stroke-width="0.60"/>
  <line x1="320.0" y1="100" x2="320.0" y2="71.1" stroke="#7ccf9a" stroke-width="0.60"/>
  <line x1="320.0" y1="100" x2="320.0" y2="71.4" stroke="#7ccf9a" stroke-width="0.60"/>
  <text x="170.0" y="118" font-size="12" text-anchor="middle" fill="currentColor">ω</text>
  <text x="245.0" y="118" font-size="12" text-anchor="middle" fill="currentColor">ω+1</text>
  <line x1="320" y1="100" x2="320" y2="50" stroke="#eea66f" stroke-width="3"/>
  <text x="320" y="118" font-size="12" text-anchor="middle" fill="currentColor">ω·2</text>
  <line x1="170" y1="100" x2="170" y2="50" stroke="#eea66f" stroke-width="3"/>
  <text x="95.0" y="140" font-size="11" text-anchor="middle" fill="currentColor">0, 1, 2, … (no last stick)</text>
  <text x="245.0" y="140" font-size="11" text-anchor="middle" fill="currentColor">ω, ω+1, ω+2, …</text>
</svg>
</div>

Now keep going. Each new ordinal is the next position after everything so far.

- $\omega + 1$: all the counting numbers, then one more at the end. Then $\omega + 2$, $\omega + 3$, and so on.
- $\omega + \omega = \omega \cdot 2$: the counting numbers, followed by a **second** complete copy of them (the drawing).
- $\omega \cdot 3$, $\omega \cdot 4$, and after all of these, $\omega \cdot \omega = \omega^2$: infinitely many copies
  of $\omega$, one after another.
- Then $\omega^3$, ..., $\omega^\omega$, $\omega^{\omega^\omega}$, ..., and on and on.

A neat way to build them, due to John von Neumann: each ordinal is the set of all the ordinals before it. So
$0 = \varnothing$, $1 = \{0\}$, $2 = \{0, 1\}$, and $\omega = \{0, 1, 2, \ldots\}$, and $\omega + 1 = \{0, 1, 2, \ldots,
\omega\}$.

### Order matters: $1 + \omega \ne \omega + 1$

Adding ordinals means placing one line-up **after** another.

- $\omega + 1$: a new person at the **end**. The line now has a last person, so it has a different shape from
  $\omega$: $\omega + 1 \ne \omega$.
- $1 + \omega$: a new person at the **front**. The line is "new person, 0, 1, 2, ..." Rename the new person 0, the old
  0 as 1, and so on, and you have exactly the shape of $0, 1, 2, \ldots$ So $1 + \omega = \omega$.

So ordinal addition is **not commutative**: $1 + \omega = \omega$ but $\omega + 1 > \omega$. In the same way,
multiplication $\alpha \cdot \beta$ means "$\beta$ copies of $\alpha$, one after another":

- $\omega \cdot 2$ = two copies of $\omega$ = $\omega + \omega$;
- $2 \cdot \omega$ = $\omega$ copies of a pair: $(a_0, b_0), (a_1, b_1), (a_2, b_2), \ldots$, which is just one
  endless line with no last member, so $2 \cdot \omega = \omega$.

### All these are the same size

Here is where ordinals and cardinals part ways. Every ordinal in the list above, $\omega$, $\omega + 1$, $\omega \cdot 2$,
$\omega^2$, even $\omega^\omega$, is a **countable** line-up. For instance $\omega + 1$ can be listed: put the last
person first, then $0, 1, 2, \ldots$ (that changes the order, which is allowed when only counting). And $\omega^2$ is
the pairs $(m, n)$ ordered by $m$ first, then $n$, and pairs are countable (level 6). So as **cardinals** all of these
are $\aleph_0$, even though as **ordinals** each is longer than the last.

For finite sets: "how many" and "what shape" are the same. For infinite sets: one cardinal $\aleph_0$ hides
uncountably many different countable ordinals.

### $\omega_1$ and the meaning of $\aleph_1$

Now take **all** the countable ordinals together, in their natural order. This collection is itself well-ordered, so it
has an ordinal shape, called $\omega_1$. It cannot be countable: if it were, it would be one of the countable ordinals,
and so it would be a member of itself, coming before itself in the order, which is impossible. So $\omega_1$ is the
first **uncountable** ordinal.

Its size is called $\aleph_1$. Every ordinal before $\omega_1$ is countable, so no ordinal has a size strictly
between $\aleph_0$ and $\aleph_1$. (With the axiom of choice every set can be well-ordered, so this covers every
set.) So $\aleph_1$ is the next infinite size after $\aleph_0$; there is nothing in between, by construction. That is how the
"next size up" of the last lesson is defined, and the continuum hypothesis is the question of whether $\mathfrak{c}$
equals this $\aleph_1$.

### A strange theorem: Goodstein sequences

Ordinals are not only a game. They prove things about ordinary whole numbers that seem impossible to prove otherwise.

Write a number in **hereditary base 2**: in powers of 2, with the exponents also written in powers of 2, all the way
down. For example $4 = 2^2$ and $3 = 2^1 + 1$. A **Goodstein sequence** repeats two steps:

1. replace every 2 by 3 (the "base bump"), and work out the new number;
2. subtract 1;

then write the result in hereditary base 3, bump every 3 to 4, subtract 1, and so on.

Starting at 4: $4 = 2^2 \to 3^3 - 1 = 26$. In base 3, $26 = 2 \cdot 3^2 + 2 \cdot 3 + 2$, which bumps to
$2 \cdot 4^2 + 2 \cdot 4 + 2 - 1 = 41$. Then $60, 83, 109, \ldots$ It grows, and grows, and grows. Yet in 1944 Reuben Goodstein proved that
**every** such sequence eventually reaches 0. The one starting at 4 takes more steps than there are atoms in the
observable universe.

The proof replaces every base by $\omega$. The number $2 \cdot 3^2 + 2 \cdot 3 + 2$ becomes the ordinal
$\omega^2 \cdot 2 + \omega \cdot 2 + 2$. Bumping the base does not change the ordinal, and subtracting 1 always makes it
strictly smaller. A decreasing sequence of ordinals must stop (a well-order has no endless staircase down), so the
numbers must reach 0. In 1982 Laurie Kirby and Jeff Paris showed that this theorem about whole numbers **cannot** be
proved from the usual axioms for whole numbers alone (Peano arithmetic): the infinite ordinals are genuinely needed.

## Worked examples

**1. $\omega + 1$ and $\omega$ have different shapes.** In $\omega + 1$ there is a last member; in $\omega$ there is
none. An order-preserving pairing would have to send the last member of $\omega + 1$ to a last member of $\omega$,
which does not exist. So no such pairing exists, and $\omega + 1 \ne \omega$ as ordinals. But as cardinals they are
equal: pair the last member with 0, and $n$ with $n + 1$ (Hilbert's hotel).

**2. $1 + \omega = \omega$.** The line "$\star, 0, 1, 2, \ldots$" is paired with "$0, 1, 2, 3, \ldots$" by
$\star \mapsto 0$, $n \mapsto n + 1$. This keeps the order, so the shapes are the same.

**3. A line-up with shape $\omega \cdot 2$.** Order the counting numbers as "all the even numbers first, then all the
odd numbers": $0, 2, 4, 6, \ldots, 1, 3, 5, 7, \ldots$ This is two copies of $\omega$ one after the other, so its shape
is $\omega \cdot 2$, though the set is just $\mathbb{N}$, of size $\aleph_0$.

**4. A Goodstein sequence that finishes quickly.** Start at 3 $= 2^1 + 1$. Bump: $3^1 + 1 = 4$, subtract 1: 3. Now
$3 = 3^1$ in base 3. Bump: $4^1 = 4$, subtract 1: 3. Now $3 = 3$ in base 4 (a single digit). Bump: still 3, subtract 1: 2.
Then 1, then 0. The sequence is $3, 3, 3, 2, 1, 0$.

**5. The ordinals behind it.** For the start $4 = 2^2$, the ordinal is $\omega^\omega$. After one step, $26 = 2 \cdot
3^2 + 2 \cdot 3 + 2$ gives $\omega^2 \cdot 2 + \omega \cdot 2 + 2$, which is smaller than $\omega^\omega$. Each later
step lowers the ordinal again, even though the numbers climb.

## Try it

1. Is $\omega + 2$ equal to $2 + \omega$? Explain each.
2. What is the ordinal shape of $1, 2, 3, \ldots, 0$ (zero moved to the end)? Of the counting numbers ordered as
   "multiples of 3, then the rest"?
3. Is the line-up of all integers $\ldots, -2, -1, 0, 1, 2, \ldots$ a well-order? Why or why not?
4. What is the cardinal (size) of $\omega \cdot 5$? Of $\omega^2$?
5. Is $\omega \cdot 2 = 2 \cdot \omega$? Explain.
6. Work out the Goodstein sequence starting at 2.
7. The order type of $\{1 - \tfrac1n : n = 1, 2, 3, \ldots\} \cup \{1\}$, in the usual order of numbers, is which
   ordinal?
8. Challenge: explain why there is no endless decreasing sequence of ordinals $\alpha_1 > \alpha_2 > \alpha_3 >
   \cdots$, using the definition of a well-order.

??? note "Answers"
    1. $2 + \omega = \omega$ (two new people at the front just join the endless line). $\omega + 2$ has two people after
       all the counting numbers, so it has a last member and is bigger than $\omega$. So they are **not** equal.
    2. $1, 2, 3, \ldots, 0$: one complete endless line, then one more: $\omega + 1$. "Multiples of 3, then the rest":
       two endless lines one after the other, $\omega \cdot 2$.
    3. **No.** The whole set has no first member (there is no smallest integer). A well-order needs every non-empty
       part, including the whole, to have a first member.
    4. Both are countable: $\aleph_0$. Five copies of a countable list can be merged into one list, and $\omega^2$ is
       the pairs $(m, n)$, which are countable.
    5. **No.** $\omega \cdot 2 = \omega + \omega$, two endless lines one after the other. $2 \cdot \omega$ is $\omega$
       pairs one after the other, which is a single endless line, $\omega$. And $\omega + \omega \ne \omega$ because in
       $\omega + \omega$ the member "start of the second copy" has infinitely many members before it, while every member
       of $\omega$ has only finitely many before it.
    6. $2 = 2^1$. Bump: $3^1 = 3$, minus 1: 2. In base 3, 2 is a single digit; bump: 2, minus 1: 1. Then 0. The
       sequence is $2, 2, 1, 0$.
    7. The numbers $0, \tfrac12, \tfrac23, \tfrac34, \ldots$ form a copy of $\omega$, and $1$ comes after all of them:
       $\omega + 1$.
    8. Collect the members of the sequence: $\{\alpha_1, \alpha_2, \alpha_3, \ldots\}$. It is a non-empty set of
       ordinals, and the ordinals are well-ordered, so it has a first (smallest) member, say $\alpha_k$. But
       $\alpha_{k+1} < \alpha_k$, so $\alpha_k$ is not the smallest. Contradiction. So every decreasing sequence of
       ordinals is finite.

## Common mistake

**Mixing up $+$ for ordinals and cardinals.** As cardinals, $1 + \aleph_0 = \aleph_0 + 1 = \aleph_0$. As ordinals,
$1 + \omega = \omega$ but $\omega + 1 \ne \omega$. Ask first: "am I counting how many, or describing an order?"

**Thinking $\omega$ is "the biggest number".** $\omega$ is just the first infinite ordinal. There is no biggest
ordinal, for the same reason there is no biggest cardinal.

## Where it leads

- Previous: [The continuum hypothesis](04-continuum-hypothesis.md). Next: [Infinitely small](06-infinitely-small.md),
  infinity in the other direction.
- [Level 8 page](index.md) · [Infinity topic page](../index.md) · Hilbert's hotel, where size first came apart from
  "room numbers": [Level 3](../level-3/index.md).
- Proof by induction, which ordinals extend past infinity: [Patterns, induction](../../patterns/level-8/01-proof-by-induction.md)
  and [strong induction](../../patterns/level-8/03-strong-induction.md). Axioms and what they cannot prove:
  [Gödel's incompleteness](../../logic/level-8/04-godel-incompleteness.md).
- On the U of T shelf: the well-ordering of $\mathbb{N}$ and proof by induction in [MAT158 Unit 1](../../../uoft/MAT158H1/unit01.md).
