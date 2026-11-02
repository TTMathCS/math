---
title: "Master: Sets and \"for all, there exists\""
---

# Master: Sets and "for all, there exists"

*Logic and puzzles · step 4 of 5*

## A question to start

A class has 30 students. 18 play soccer, 15 play the piano, and 7 do both. How many students do neither?

If you add $18 + 15 = 33$, you get more than the whole class. Something has been counted twice. This page gives you
the language to see exactly what, and to count correctly every time.

## The idea

### Sets and elements

A **set** is a collection of things, called its **elements**. We list the elements between curly brackets:

$$A = \{1, 2, 3, 4, 5, 6\}, \qquad V = \{a, e, i, o, u\}.$$

Order does not matter and repeats do not count, so $\{1, 2, 3\}$ and $\{3, 1, 2, 2\}$ are the same set. We write
$3 \in A$ ("3 is an element of $A$") and $9 \notin A$ ("9 is not an element of $A$"). The set with no elements at all
is the **empty set**, written $\varnothing$.

When a set is too big to list, we describe it with a rule. This is **set-builder notation**:

$$E = \{\, n : n \text{ is a whole number and } n \text{ is even} \,\}.$$

Read the colon as "such that": *the set of all $n$ such that $n$ is a whole number and $n$ is even*. A few big sets
have their own letters: $\mathbb{N}$ for the natural numbers $1, 2, 3, \ldots$, $\mathbb{Z}$ for all the integers
(including 0 and the negatives), and $\mathbb{R}$ for all the real numbers.

### Subsets

$B$ is a **subset** of $A$, written $B \subseteq A$, if every element of $B$ is also an element of $A$. So
$\{2, 4\} \subseteq \{1, 2, 3, 4\}$. Two facts that surprise people: every set is a subset of itself, and
$\varnothing$ is a subset of every set (it has no elements, so none of them can fail the test).

### Union, intersection, complement: the set version of or, and, not

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 170" role="img" aria-label="Venn diagram: two overlapping circles A and B inside a rectangle U. The overlap is A intersect B.">
  <rect x="10" y="10" width="400" height="150" rx="6" fill="none" stroke="currentColor"/>
  <circle cx="165" cy="85" r="62" fill="#eea66f" fill-opacity="0.7"/>
  <circle cx="255" cy="85" r="62" fill="#9cc9ea" fill-opacity="0.7"/>
  <g font-size="16" text-anchor="middle" fill="currentColor">
    <text x="30" y="32">U</text>
    <text x="130" y="90">A only</text>
    <text x="290" y="90">B only</text>
    <text x="210" y="80">both</text>
    <text x="210" y="98" font-size="13">A ∩ B</text>
    <text x="370" y="150" font-size="13">neither</text>
  </g>
</svg>
</div>

The rectangle $U$ is the **universal set**: everything we are talking about (here, the whole class).

- The **union** $A \cup B$ is everything in $A$ **or** $B$ (or both): both circles together.
- The **intersection** $A \cap B$ is everything in $A$ **and** $B$: the overlap.
- The **complement** $A^c$ is everything in $U$ that is **not** in $A$.
- The **difference** $A \setminus B$ is everything in $A$ but not in $B$: "A only".

De Morgan's laws from the Build step become laws about sets: $(A \cup B)^c = A^c \cap B^c$ and
$(A \cap B)^c = A^c \cup B^c$. Shade them on the picture and you will see they match.

### Counting with overlaps

Write $|A|$ for the number of elements of a finite set $A$. When you add $|A| + |B|$, everything in the overlap is
counted twice, so you take it away once:

$$|A \cup B| = |A| + |B| - |A \cap B|.$$

For three sets, the pairs are taken away, but then the middle (in all three) has been added three times and taken
away three times, so it is added back:

$$|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|.$$

This is the **inclusion–exclusion principle**.

### "For all" and "there exists"

Many statements in mathematics talk about **every** element of a set or **some** element. Two symbols do this.

- $\forall$ means **for all** (an upside-down A, for "all"). $\forall x \in \mathbb{R},\ x^2 \ge 0$ says "every
  real number has a square that is at least 0". True.
- $\exists$ means **there exists** (a backwards E, for "exists"). $\exists n \in \mathbb{N},\ n^2 = 49$ says "some
  natural number has square 49". True: $n = 7$.

These are called **quantifiers**. To negate a statement with quantifiers, swap each $\forall$ and $\exists$ and
negate the end:

$$\neg\big(\forall x,\ P(x)\big) \equiv \exists x,\ \neg P(x), \qquad \neg\big(\exists x,\ P(x)\big) \equiv \forall x,\ \neg P(x).$$

"Not every swan is white" means "there is a swan that is not white". This is the knave rule from the Explore step,
written in symbols.

**Order matters.** "$\forall n \in \mathbb{N},\ \exists m \in \mathbb{N},\ m > n$" says *for every number there is
a bigger one*: true. "$\exists m \in \mathbb{N},\ \forall n \in \mathbb{N},\ m > n$" says *there is one number
bigger than every number*: false (it would have to be bigger than itself).

## Worked examples

**1. The class.** Let $S$ be soccer players and $P$ piano players.

$$|S \cup P| = 18 + 15 - 7 = 26.$$

So 26 students do at least one, and $30 - 26 = 4$ do neither. In the picture: soccer only is $18 - 7 = 11$, piano
only is $15 - 7 = 8$, both is 7, and $11 + 8 + 7 + 4 = 30$. Always check that the four regions add up to the whole.

**2. Three sets.** How many of the numbers 1 to 100 are divisible by 2, 3 or 5?

Let $A$, $B$, $C$ be the numbers divisible by 2, 3 and 5. A number is in two of them exactly when it is divisible by
both, which for these primes means divisible by their product.

- $|A| = 50$, $|B| = 33$ (since $3 \times 33 = 99$), $|C| = 20$.
- $|A \cap B| = 16$ (multiples of 6), $|A \cap C| = 10$ (multiples of 10), $|B \cap C| = 6$ (multiples of 15).
- $|A \cap B \cap C| = 3$ (multiples of 30: 30, 60, 90).

$$|A \cup B \cup C| = 50 + 33 + 20 - 16 - 10 - 6 + 3 = 74.$$

So 74 of them are divisible by 2, 3 or 5, and the other 26 are not.

**3. Negating carefully.** Negate: "Every student in the class has a pet that is a dog."

In symbols: $\forall s,\ \exists p$ such that $s$ owns $p$ and $p$ is a dog. Swap and negate:
$\exists s,\ \forall p$, $s$ does not own $p$ or $p$ is not a dog. In words: **"Some student has no dog."**

## Try it

1. Let $A = \{1, 2, 3, 4, 5, 6\}$ and $B = \{2, 4, 6, 8\}$. Find $A \cup B$, $A \cap B$ and $A \setminus B$.
2. True or false: $\{2, 8\} \subseteq B$? $\varnothing \subseteq A$? $8 \in A$?
3. How many of the whole numbers from 1 to 60 are divisible by 4 or by 6?
4. Write the negation of "There is a prime number that is even." Which is true, the statement or its negation?
5. Decide whether each is true for real numbers $x$ and $y$:
    - $\forall x,\ \exists y,\ y = x + 1$
    - $\exists y,\ \forall x,\ y = x + 1$
6. In a survey of 50 people, 28 like tea, 24 like coffee and 10 like neither. How many like both?

??? note "Answers"
    1. $A \cup B = \{1, 2, 3, 4, 5, 6, 8\}$, $A \cap B = \{2, 4, 6\}$, $A \setminus B = \{1, 3, 5\}$.
    2. True ($2$ and $8$ are both in $B$). True (the empty set is a subset of every set). False ($8 \notin A$).
    3. Multiples of 4: 15. Multiples of 6: 10. Both means multiples of 12 (not 24: the smallest number divisible
       by 4 and by 6 is 12): 5. So $15 + 10 - 5 = 20$.
    4. Negation: "Every prime number is odd." The original is **true** (2 is prime and even), so the negation is
       false.
    5. The first is **true**: for each $x$, take $y = x + 1$. The second is **false**: one fixed $y$ cannot equal
       $x + 1$ for every $x$ at once. Same symbols, different order, different meaning.
    6. $50 - 10 = 40$ like at least one. Then $40 = 28 + 24 - \text{both}$, so both $= 52 - 40 = 12$.

## Common mistake

**Using the product instead of the smallest common multiple.** In question 3, "divisible by 4 and by 6" is not
"divisible by 24": 12 is divisible by both. Two conditions overlap exactly on the multiples of their **least common
multiple**. For different primes, like 2, 3 and 5, that happens to be the product, which is why Worked example 2
could multiply.

## Where it leads

- Next step: [Beyond: how a proof works](05-beyond.md), where these tools are used to prove things for certain.
- Back a step: [Build: statements and truth tables](03-build.md)
- Inclusion–exclusion is a counting tool: see [Counting and combinations](../counting/index.md) and
  [Probability](../probability/index.md), where $P(A \cup B) = P(A) + P(B) - P(A \cap B)$. Least common multiples
  are in [Number theory](../number-theory/index.md).
- On the U of T shelf, sets and quantifiers are the first unit of [MAT137](../../uoft/MAT137/unit01.md) and of
  [MAT158](../../uoft/MAT158H1/unit01.md).
