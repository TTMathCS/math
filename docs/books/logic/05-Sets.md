# 5. Sets

*Every chapter so far has talked about "the integers", "the primes", "all real numbers", "the solutions of an
equation". Each of these is a collection treated as one thing, and modern mathematics writes almost everything in
the language of such collections: a function is a set, a number can be built as a set, a shape is a set of points.
This chapter teaches that language. You will learn to name sets, compare them, combine them, collect all the subsets
of a set into a new set, and pair elements up into ordered pairs. Then you will watch the naive version of the whole
idea collapse in a single line, in the paradox Bertrand Russell sent to Gottlob Frege in 1902, and see why the
collapse forces the careful axioms of [Chapter 8](08-Axiomatic-Set-Theory.md).*

!!! abstract "In this chapter"
    **You will learn:**

    - what a set, an element and a subset are, and the difference between "is an element of" and "is a subset of"
    - how to prove two sets equal by double inclusion
    - union, intersection, difference, complement and symmetric difference, and why their laws are the laws of logic
    - the power set of a set, and why a set of $n$ elements has $2^n$ subsets
    - ordered pairs, Cartesian products, and how a pair can itself be built out of sets
    - Russell's paradox, its true history, and why it means you cannot form "the set of all sets with a property"

    **You need:** [Chapter 1](01-Statements-and-Truth.md) and [Chapter 2](02-Propositional-Logic.md) (and, or, not,
    if-then, truth tables), [Chapter 3](03-Quantifiers.md) (for all, there exists) and
    [Chapter 4](04-Proofs.md) (direct proof, contradiction, induction). The gentler versions are the Topics lessons
    [Sets](../../topics/logic/level-5/01-sets.md),
    [Union, intersection, complement](../../topics/logic/level-5/02-union-intersection.md),
    [De Morgan's laws](../../topics/logic/level-5/03-de-morgan.md) and
    [Russell's paradox and sets](../../topics/logic/level-8/03-russells-paradox.md).

    **Levels:** 5.1 to 5.3 are beginner to intermediate; 5.4 is intermediate (the Kuratowski pair is advanced);
    5.5 is intermediate in its argument and advanced in what it means.

## 5.1 Sets, elements and subsets

Here is a question that sounds silly and is not. Are "the even primes" and "the positive whole numbers whose square
is 4" the same thing? The descriptions are different; one is about primes and the other about squares. But both
pick out exactly one number, 2. Mathematics decides that what matters is what is picked out, not how it is
described. That decision is the idea of a set.

### Sets and elements

A **set** is a collection of objects, considered as a single object in its own right. The objects in it are its
**elements** or **members**. We write

$$
x \in A
$$

for "$x$ is an element of $A$" (read "$x$ is in $A$"), and $x \notin A$ for its negation. The symbol $\in$ is a
stylised Greek epsilon, chosen by Giuseppe Peano in 1889 as the first letter of the Greek *esti*, "is".

There are two common ways to name a set.

- **Listing** (roster notation): write the elements between braces, as in $\{2, 3, 5, 7\}$. For a long but clear
  pattern we allow dots: $\{1, 2, 3, \ldots, 100\}$, or $\{0, 2, 4, 6, \ldots\}$.
- **Set-builder notation**: $\{x : P(x)\}$, read "the set of all $x$ such that $P(x)$", where $P(x)$ is a property.
  Usually we say where $x$ comes from: $\{x \in \mathbb{Z} : x^2 < 10\}$ is "the integers whose square is less than
  10", which is $\{-3, -2, -1, 0, 1, 2, 3\}$. Some books write a bar instead of the colon.

The standard number sets have fixed names. In this book

- $\mathbb{N} = \{0, 1, 2, 3, \ldots\}$, the **natural numbers** (we include 0, as set theorists and computer
  scientists do; many school books start at 1, so always check);
- $\mathbb{Z} = \{\ldots, -2, -1, 0, 1, 2, \ldots\}$, the **integers** (from German *Zahlen*, numbers);
- $\mathbb{Q}$, the **rational numbers** $p/q$ with $p, q$ integers and $q \neq 0$ (Q for quotient);
- $\mathbb{R}$, the **real numbers**, all points of the number line (built carefully in
  [Calculus, Chapter 18](../calculus/18-The-Real-Numbers.md)).

### When are two sets equal?

The answer is the rule from the opening question, and it is so basic it becomes an axiom in
[Chapter 8](08-Axiomatic-Set-Theory.md):

> **Extensionality.** Two sets are equal exactly when they have the same elements: $A = B$ means that for every
> $x$, $x \in A$ if and only if $x \in B$.

Three consequences follow at once.

1. **Order does not matter.** $\{1, 2, 3\} = \{3, 1, 2\}$, because both have elements 1, 2 and 3.
2. **Repetition does not matter.** $\{1, 1, 2\} = \{1, 2\}$. Being an element is a yes-or-no matter; you cannot be
   in a set "twice". (Collections that count repeats are called **multisets**; they are not sets.)
3. **Description does not matter.** $\{p : p \text{ is an even prime}\} = \{n \in \mathbb{N} : n^2 = 4\} = \{2\}$.

### The empty set

A set may have no elements at all. Such a set is called **empty**, and there is only one.

**Theorem 5.1.** There is at most one empty set.

*Proof.* Suppose $E_1$ and $E_2$ both have no elements. For every $x$, the statements "$x \in E_1$" and
"$x \in E_2$" are both false, so "$x \in E_1$ if and only if $x \in E_2$" is true (both sides false). By
extensionality $E_1 = E_2$. $\square$

That an empty set exists at all is another axiom (or follows from the others; see Chapter 8). It is written
$\varnothing$ or $\{\}$. Be careful: $\{\varnothing\}$ is *not* empty. It is a set with one element, and that element
happens to be the empty set. A bag containing an empty bag is not an empty bag.

The **size** or **cardinality** of a finite set $A$, written $|A|$, is the number of its elements: $|\{2,3,5,7\}| = 4$,
$|\varnothing| = 0$, $|\{\varnothing\}| = 1$, and $|\{1, 1, 2\}| = 2$. What "size" means for infinite sets is the
subject of [Chapter 7](07-Infinity-and-Cardinality.md).

### Subsets

$A$ is a **subset** of $B$, written $A \subseteq B$, when every element of $A$ is also an element of $B$:

$$
A \subseteq B \quad\text{means}\quad \forall x\,(x \in A \Rightarrow x \in B).
$$

If $A \subseteq B$ and $A \neq B$, then $A$ is a **proper subset**, written $A \subsetneq B$. (Some books write
$A \subset B$ for proper subset and others for any subset; this book avoids the bare $\subset$.) We also say $B$ is a
**superset** of $A$.

**Example 5.1.** $\{1, 3\} \subseteq \{1, 2, 3\}$, and the inclusion is proper. $\mathbb{N} \subseteq \mathbb{Z}
\subseteq \mathbb{Q} \subseteq \mathbb{R}$, each proper: $-1 \in \mathbb{Z} \setminus \mathbb{N}$,
$\tfrac12 \in \mathbb{Q} \setminus \mathbb{Z}$, and $\sqrt 2 \in \mathbb{R} \setminus \mathbb{Q}$ by
[Chapter 4](04-Proofs.md).

**Theorem 5.2.** For every set $A$: (a) $\varnothing \subseteq A$; (b) $A \subseteq A$; (c) if $A \subseteq B$ and
$B \subseteq C$ then $A \subseteq C$.

*Proof.* (a) We must show: for every $x$, if $x \in \varnothing$ then $x \in A$. The "if" part is always false, so
the implication is always true. This is the material conditional of [Chapter 1](01-Statements-and-Truth.md) doing
its job: a statement about "every element of the empty set" is **vacuously true**, because there is no element to
be a counterexample. (b) "If $x \in A$ then $x \in A$" is true for every $x$. (c) Let $x \in A$. Since
$A \subseteq B$, $x \in B$. Since $B \subseteq C$, $x \in C$. So every element of $A$ is in $C$. $\square$

### Element of, or subset of?

The most common beginner's error in this subject is mixing up $\in$ and $\subseteq$. The first says one *thing* is a
member; the second says every member of one *set* is a member of another. Take $A = \{1, \{2\}, \{1, 2\}\}$, which
has three elements: the number 1, the set $\{2\}$, and the set $\{1,2\}$.

| Statement | True? | Why |
|---|---|---|
| $1 \in A$ | yes | 1 is listed |
| $2 \in A$ | no | 2 is not listed; only $\{2\}$ is |
| $\{2\} \in A$ | yes | $\{2\}$ is listed |
| $\{2\} \subseteq A$ | no | its element 2 is not in $A$ |
| $\{1\} \subseteq A$ | yes | its only element, 1, is in $A$ |
| $\{1\} \in A$ | no | $\{1\}$ is not listed |
| $\{\{2\}\} \subseteq A$ | yes | its only element, $\{2\}$, is in $A$ |
| $\varnothing \in A$ | no | not listed |
| $\varnothing \subseteq A$ | yes | Theorem 5.2(a) |

**Check:** $|A| = 3$, even though the digits 1 and 2 appear four times between the braces.

### Proving two sets equal: double inclusion

Extensionality says $A = B$ when $x \in A \Leftrightarrow x \in B$. Splitting the "if and only if" into two
implications gives the workhorse of set proofs:

$$
A = B \quad\text{if and only if}\quad A \subseteq B \ \text{ and } \ B \subseteq A.
$$

To prove a set equality, you take an arbitrary element of the left side and show it is in the right side, then the
other way round. The next section is full of such proofs.

**Example 5.2.** Let $A = \{n \in \mathbb{Z} : n \text{ is a multiple of } 6\}$ and
$B = \{n \in \mathbb{Z} : n \text{ is a multiple of } 2 \text{ and of } 3\}$. Prove $A = B$.

*Solution.* ($A \subseteq B$.) If $n = 6k$ then $n = 2(3k) = 3(2k)$, a multiple of both. ($B \subseteq A$.) If
$n = 2a$ and $3 \mid n$, then $3 \mid 2a$; since 3 is prime and does not divide 2, it divides $a$ (Euclid's lemma,
[Number Theory, Chapter 2](../number-theory/02-Primes-and-Unique-Factorization.md)), so $a = 3b$ and $n = 6b$.
$\square$

## 5.2 Operations and Venn diagrams

You run a survey. $F$ is the set of people who speak French, $S$ the set who speak Spanish. Who speaks both? Who
speaks at least one? Who speaks French but not Spanish? Each question builds a new set from old ones.

### The five operations

Fix sets $A$ and $B$.

- The **union** $A \cup B = \{x : x \in A \text{ or } x \in B\}$: everything in at least one of them. ("Or" is
  inclusive, as in [Chapter 1](01-Statements-and-Truth.md).)
- The **intersection** $A \cap B = \{x : x \in A \text{ and } x \in B\}$: everything in both. If
  $A \cap B = \varnothing$ the sets are **disjoint**.
- The **difference** $A \setminus B = \{x : x \in A \text{ and } x \notin B\}$: in $A$ but not in $B$. (Also
  written $A - B$.)
- The **symmetric difference** $A \,\triangle\, B = (A \setminus B) \cup (B \setminus A)$: in exactly one of them.
- The **complement**. In most problems all sets live inside a fixed **universe** $U$ (all people surveyed; all
  real numbers). Then the complement of $A$ is $A^c = U \setminus A$, everything in the universe not in $A$. It is
  also written $\overline{A}$ or $A'$. A complement only makes sense relative to a universe; "everything that is not
  in $A$", with no universe, leads to the trouble of 5.5.

**Example 5.3.** In the universe $U = \{1, 2, \ldots, 10\}$, let $A = \{1,2,3,4,5,6\}$ and $B = \{4,5,6,7,8\}$. Then

- $A \cup B = \{1,2,3,4,5,6,7,8\}$,
- $A \cap B = \{4,5,6\}$,
- $A \setminus B = \{1,2,3\}$ and $B \setminus A = \{7,8\}$,
- $A \,\triangle\, B = \{1,2,3,7,8\}$,
- $A^c = \{7,8,9,10\}$ and $(A \cup B)^c = \{9,10\}$.

**Check:** $|A \cup B| = 8 = 6 + 5 - 3 = |A| + |B| - |A \cap B|$.

### Venn diagrams

In 1880 the English logician John Venn published a way to draw these operations: the universe as a rectangle, each
set as a closed curve, overlapping in every possible way. Three sets give eight regions, one for each way of being in
or out of $A$, $B$ and $C$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 250" role="img" aria-label="Venn diagram: a rectangle U containing three overlapping circles A, B and C. The eight regions are numbered: 1 only A, 2 only B, 3 only C, 4 A and B not C, 5 A and C not B, 6 B and C not A, 7 all three, 8 outside all three. Text at the right says three sets cut the universe into 2 to the power 3, that is 8, regions.">
  <rect x="30" y="10" width="300" height="230" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="42" y="30" font-size="14" fill="currentColor">U</text>
  <circle cx="140" cy="100" r="65" fill="#eea66f" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="220" cy="100" r="65" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="180" cy="165" r="65" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <text x="80" y="50" font-size="15" font-weight="bold" fill="currentColor">A</text>
  <text x="270" y="50" font-size="15" font-weight="bold" fill="currentColor">B</text>
  <text x="250" y="222" font-size="15" font-weight="bold" fill="currentColor">C</text>
  <text x="110" y="99" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="250" y="99" font-size="13" text-anchor="middle" fill="currentColor">2</text>
  <text x="180" y="204" font-size="13" text-anchor="middle" fill="currentColor">3</text>
  <text x="180" y="79" font-size="13" text-anchor="middle" fill="currentColor">4</text>
  <text x="140" y="154" font-size="13" text-anchor="middle" fill="currentColor">5</text>
  <text x="220" y="154" font-size="13" text-anchor="middle" fill="currentColor">6</text>
  <text x="180" y="124" font-size="13" text-anchor="middle" fill="currentColor">7</text>
  <text x="305" y="229" font-size="13" text-anchor="middle" fill="currentColor">8</text>
  <text x="345" y="90" font-size="12" fill="currentColor">3 sets cut U</text>
  <text x="345" y="108" font-size="12" fill="currentColor">into 2³ = 8</text>
  <text x="345" y="126" font-size="12" fill="currentColor">regions:</text>
  <text x="345" y="144" font-size="12" fill="currentColor">in or out of</text>
  <text x="345" y="162" font-size="12" fill="currentColor">each of A, B, C</text>
</svg>
</div>

In the picture, $A \cap B$ is regions 4 and 7, $A \setminus (B \cup C)$ is region 1, and $(A \cup B)^c \cap C$ is
region 3. A Venn diagram is a good way to *guess* an identity and a bad way to *prove* one, for two reasons: a
picture can hide a special case, and pictures stop working beyond three sets. With $n$ circles the plane can be cut
into at most $n^2 - n + 2$ regions; for $n = 4$ that is 14, fewer than the $2^4 = 16$ needed. Four sets need ellipses
or stranger curves.

### The laws of set algebra are the laws of logic

Look at the definitions again: $\cup$ is built from "or", $\cap$ from "and", complement from "not". So every law of
propositional logic from [Chapter 2](02-Propositional-Logic.md) becomes a law of sets. For sets $A, B, C$ in a
universe $U$:

| Law | Sets | Logic it comes from |
|---|---|---|
| commutative | $A \cup B = B \cup A$, $A \cap B = B \cap A$ | $p \lor q \equiv q \lor p$ |
| associative | $(A \cup B) \cup C = A \cup (B \cup C)$ | $(p \lor q) \lor r \equiv p \lor (q \lor r)$ |
| distributive | $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$ | $p \land (q \lor r) \equiv (p \land q) \lor (p \land r)$ |
| distributive | $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$ | $p \lor (q \land r) \equiv (p \lor q) \land (p \lor r)$ |
| De Morgan | $(A \cup B)^c = A^c \cap B^c$ | $\lnot(p \lor q) \equiv \lnot p \land \lnot q$ |
| De Morgan | $(A \cap B)^c = A^c \cup B^c$ | $\lnot(p \land q) \equiv \lnot p \lor \lnot q$ |
| double complement | $(A^c)^c = A$ | $\lnot\lnot p \equiv p$ |
| identity | $A \cup \varnothing = A$, $A \cap U = A$ | $p \lor F \equiv p$, $p \land T \equiv p$ |
| complement | $A \cup A^c = U$, $A \cap A^c = \varnothing$ | $p \lor \lnot p \equiv T$, $p \land \lnot p \equiv F$ |

This is not a coincidence to admire but a fact to use. Here is the translation made into a proof.

**Theorem 5.3 (De Morgan for sets).** $(A \cup B)^c = A^c \cap B^c$.

*Proof by double inclusion.* Let $x \in U$.

$$
\begin{aligned}
x \in (A \cup B)^c &\iff \lnot\,(x \in A \cup B) \\
&\iff \lnot\,(x \in A \lor x \in B) \\
&\iff (x \notin A) \land (x \notin B) \qquad \text{(De Morgan's law of logic)}\\
&\iff x \in A^c \land x \in B^c \\
&\iff x \in A^c \cap B^c.
\end{aligned}
$$

Each step is an "if and only if", so the chain proves both inclusions at once. $\square$

**Theorem 5.4 (distributive law).** $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$.

*Proof, element by element.* ($\subseteq$) Let $x \in A \cap (B \cup C)$. Then $x \in A$, and $x \in B$ or
$x \in C$. *Case 1:* $x \in B$. Then $x \in A \cap B$, so $x$ is in the right side. *Case 2:* $x \in C$. Then
$x \in A \cap C$, so again $x$ is in the right side. ($\supseteq$) Let $x \in (A \cap B) \cup (A \cap C)$. In
either case $x \in A$, and $x$ is in $B$ or in $C$, so $x \in B \cup C$. Hence $x \in A \cap (B \cup C)$. $\square$

A third way to prove such laws is a **membership table**, which is just a truth table with "in" for true and "out"
for false. For the distributive law, list the eight rows (in or out of $A$, $B$, $C$, exactly the eight Venn regions)
and check that both sides give the same column. It is mechanical, which is its strength: a membership table is a
complete proof, because every element of $U$ falls into exactly one row.

The deep reason behind all this is that both sets-with-$\cup, \cap, {}^c$ and statements-with-$\lor, \land, \lnot$
are examples of a **Boolean algebra**, named after George Boole, whose *An Investigation of the Laws of Thought*
(1854) treated logic as algebra. The [Algebra book](../algebra/index.md) and the Topics lesson
[Boolean algebra](../../topics/logic/level-6/02-boolean-algebra.md) say more.

### Symmetric difference is exclusive or

$x \in A \,\triangle\, B$ exactly when $x$ is in one of the two sets but not both, which is the exclusive or
$p \oplus q$. Since $\oplus$ is associative (check it with a truth table), so is $\triangle$:
$(A \triangle B) \triangle C$ is the set of elements in an *odd* number of $A$, $B$, $C$. On the Venn diagram that
is regions 1, 2, 3 and 7. Exclusive or is also how a computer adds bits without carrying, which is why
$\triangle$ turns the subsets of a set into a group under "addition" (exercise 10).

### Counting a union: inclusion and exclusion

If $A$ and $B$ are finite, adding $|A| + |B|$ counts the elements of $A \cap B$ twice, so

$$
|A \cup B| = |A| + |B| - |A \cap B|.
$$

For three sets, adding the three sizes counts regions 4, 5, 6 twice and region 7 three times; subtracting the three
pairwise intersections removes region 7 three times, so it must be added back:

$$
|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|.
$$

**Example 5.4.** How many of the numbers $1, 2, \ldots, 60$ are divisible by 2, 3 or 5? Let $A$, $B$, $C$ be the
multiples of 2, 3, 5. Then $|A| = 30$, $|B| = 20$, $|C| = 12$; $A \cap B$ is the multiples of 6, so
$|A \cap B| = 10$; similarly $|A \cap C| = 6$ (multiples of 10), $|B \cap C| = 4$ (multiples of 15) and
$|A \cap B \cap C| = 2$ (multiples of 30). So

$$
|A \cup B \cup C| = 30 + 20 + 12 - 10 - 6 - 4 + 2 = 44.
$$

**Check:** the other 16 numbers are those with no factor 2, 3 or 5: 1, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,
49, 53, 59. That is 16, and $44 + 16 = 60$.

The general formula for $n$ sets, and its many uses, is [Combinatorics, Chapter 5](../combinatorics/05-Inclusion-Exclusion.md).

### Unions and intersections of many sets

Often we have a whole family of sets $A_1, A_2, A_3, \ldots$, or more generally $A_i$ for every $i$ in some
**index set** $I$. Then

$$
\bigcup_{i \in I} A_i = \{x : x \in A_i \text{ for some } i \in I\}, \qquad
\bigcap_{i \in I} A_i = \{x : x \in A_i \text{ for every } i \in I\}.
$$

Union is "there exists", intersection is "for all": [Chapter 3](03-Quantifiers.md) again. And De Morgan's laws
become the rules for negating quantifiers: $\left(\bigcup_i A_i\right)^c = \bigcap_i A_i^c$.

**Example 5.5.** For each $n \geq 1$ let $A_n$ be the open interval $\left(-\tfrac1n, \tfrac1n\right)$. Find
$\bigcap_{n \geq 1} A_n$.

*Solution.* Clearly $0 \in A_n$ for every $n$, so $0$ is in the intersection. Now let $x \neq 0$. By the Archimedean
property of the reals there is an $n$ with $n > 1/|x|$, that is $\tfrac1n < |x|$, so $x \notin A_n$, and $x$ is not
in the intersection. So $\bigcap_{n \geq 1} A_n = \{0\}$. $\square$

Notice that each $A_n$ is an open interval, infinitely many points, yet the intersection is a single point. And with
closed intervals $B_n = \left[\tfrac1n, 1\right]$, the union $\bigcup_{n \ge 1} B_n = (0, 1]$: every $x$ with
$0 < x \le 1$ is in some $B_n$, but 0 is in none of them. Infinite unions of closed sets need not be closed, a fact
that matters in [Calculus, Chapter 20](../calculus/20-Metric-Spaces-and-Topology-of-R.md).

<figure class="play" data-play="venn"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Union, intersection and complement on a Venn diagram, and De Morgan's laws.</figcaption></figure>

## 5.3 The power set

A pizza place offers three toppings, mushroom, olive and pepper, and you may take any combination, including none.
How many different pizzas are there? Each pizza *is* a subset of the set of toppings, so the question is: how many
subsets does a three-element set have?

### Definition and examples

The **power set** of $A$, written $\mathcal{P}(A)$, is the set of all subsets of $A$:

$$
\mathcal{P}(A) = \{X : X \subseteq A\}.
$$

Its elements are sets. So $X \in \mathcal{P}(A)$ means exactly $X \subseteq A$.

**Example 5.6.** For $A = \{m, o, p\}$:

$$
\mathcal{P}(A) = \{\varnothing,\ \{m\}, \{o\}, \{p\},\ \{m,o\}, \{m,p\}, \{o,p\},\ \{m,o,p\}\}.
$$

Eight subsets, eight pizzas. Grouped by size: one of size 0, three of size 1, three of size 2, one of size 3, which
is the row $1, 3, 3, 1$ of Pascal's triangle.

**Example 5.7.** Small power sets are a good test of the difference between $\in$ and $\subseteq$.

- $\mathcal{P}(\varnothing) = \{\varnothing\}$. The empty set has exactly one subset, itself, so its power set has
  one element. It is not empty.
- $\mathcal{P}(\{\varnothing\}) = \{\varnothing, \{\varnothing\}\}$, two elements.
- $\mathcal{P}(\{1, 2\}) = \{\varnothing, \{1\}, \{2\}, \{1, 2\}\}$, four elements.

### Why $2^n$

**Theorem 5.5.** If $|A| = n$ then $|\mathcal{P}(A)| = 2^n$.

*First proof (choices).* List the elements $a_1, \ldots, a_n$. To build a subset $X$, make $n$ independent yes/no
decisions: is $a_1 \in X$? is $a_2 \in X$? and so on. Each list of answers gives exactly one subset and each subset
gives exactly one list of answers. There are $2 \cdot 2 \cdots 2 = 2^n$ lists. $\square$

The list of answers is a string of $n$ bits: write 1 for yes and 0 for no. So the subsets of $\{a_1, \ldots, a_n\}$
correspond exactly to the binary strings of length $n$, and so to the numbers $0, 1, \ldots, 2^n - 1$ written in
binary. With $(m, o, p)$, the string 101 is the pizza $\{m, p\}$. This one-to-one matching is our first example of a
**bijection**, the central idea of [Chapter 7](07-Infinity-and-Cardinality.md).

*Second proof (induction).* For $n = 0$, $A = \varnothing$ and $|\mathcal{P}(\varnothing)| = 1 = 2^0$. Suppose every
set of size $n$ has $2^n$ subsets, and let $|A| = n + 1$. Pick one element $a \in A$ and let $A' = A \setminus \{a\}$,
of size $n$. Every subset of $A$ either does not contain $a$, in which case it is a subset of $A'$ ($2^n$ of these by
hypothesis), or contains $a$, in which case it is $Y \cup \{a\}$ for exactly one subset $Y$ of $A'$ (again $2^n$).
The two kinds do not overlap, so $|\mathcal{P}(A)| = 2^n + 2^n = 2^{n+1}$. $\square$

Counting the subsets of each size instead gives $\binom{n}{0} + \binom{n}{1} + \cdots + \binom{n}{n} = 2^n$, a
famous identity of Pascal's triangle, here proved by counting the same set two ways.

**Example 5.8.** How many subsets of $\{1, 2, \ldots, 10\}$ contain no even number? They are exactly the subsets of
$\{1, 3, 5, 7, 9\}$, so $2^5 = 32$. How many contain *at least one* even number? All subsets minus those:
$2^{10} - 2^5 = 1024 - 32 = 992$.

### Try it in Python

```python
from itertools import combinations

def power_set(s):
    s = list(s)
    return [set(c) for k in range(len(s) + 1) for c in combinations(s, k)]

P = power_set({"m", "o", "p"})
print(len(P))          # 8
print(P)               # [set(), {'m'}, ..., {'m', 'o', 'p'}]
print(len(power_set(range(10))))   # 1024
```

(Python prints the empty set as `set()`, because `{}` means an empty dictionary there.)

### Power sets and bigger infinities

Power sets grow fast: $2^{10} = 1024$, $2^{20}$ is over a million. Applied twice, $\mathcal{P}(\mathcal{P}(\{1,2,3\}))$
has $2^8 = 256$ elements. For an infinite set such as $\mathbb{N}$, the power set is also infinite, and in
[Chapter 7](07-Infinity-and-Cardinality.md) we will prove Cantor's theorem: $\mathcal{P}(A)$ is always strictly
bigger than $A$, even when $A$ is infinite. That theorem is the source of an endless ladder of infinities, and also,
as 5.5 will show, of one of the paradoxes.

## 5.4 Cartesian products

A point of the plane is given by two numbers, $(3, 5)$, and it matters which comes first: $(3, 5)$ and $(5, 3)$ are
different points. But sets do not remember order, $\{3, 5\} = \{5, 3\}$. To talk about coordinates, functions,
relations and tables we need a new object that does.

### Ordered pairs

An **ordered pair** $(a, b)$ has a **first coordinate** $a$ and a **second coordinate** $b$. All we need of it is one
rule:

$$
(a, b) = (c, d) \quad\text{if and only if}\quad a = c \ \text{ and } \ b = d. \tag{*}
$$

So $(3, 5) \neq (5, 3)$, and $(1, 1)$ is a perfectly good pair even though $\{1, 1\} = \{1\}$.

**Example 5.9.** Solve $(x + y, x - y) = (7, 1)$. By $(\ast)$, $x + y = 7$ and $x - y = 1$, so $x = 4$ and $y = 3$.

### The Cartesian product

The **Cartesian product** of sets $A$ and $B$ is the set of all ordered pairs with first coordinate in $A$ and second
in $B$:

$$
A \times B = \{(a, b) : a \in A,\ b \in B\}.
$$

It is named after René Descartes, whose *La Géométrie* (1637) described points of the plane by pairs of numbers; the
plane is $\mathbb{R} \times \mathbb{R} = \mathbb{R}^2$.

**Example 5.10.** If $A = \{1, 2, 3\}$ and $B = \{x, y\}$, then

$$
A \times B = \{(1,x), (1,y), (2,x), (2,y), (3,x), (3,y)\},
$$

six pairs, which you can lay out as a grid with 3 rows and 2 columns. And
$B \times A = \{(x,1), (x,2), (x,3), (y,1), (y,2), (y,3)\}$, a different set: $(1, x) \in A \times B$ but
$(1, x) \notin B \times A$. So $\times$ is **not commutative**.

**Theorem 5.6.** If $A$ and $B$ are finite, $|A \times B| = |A| \cdot |B|$.

*Proof.* For each of the $|A|$ choices of first coordinate there are $|B|$ choices of second, and by $(\ast)$
different choices give different pairs. So the pairs come in $|A|$ rows of $|B|$, giving $|A| \cdot |B|$ in all.
$\square$

**Example 5.11.** A deck of cards is $R \times S$, where $R = \{A, 2, 3, \ldots, 10, J, Q, K\}$ has 13 ranks and
$S = \{\clubsuit, \diamondsuit, \heartsuit, \spadesuit\}$ has 4 suits: $13 \cdot 4 = 52$ cards.

A special case: $A \times \varnothing = \varnothing$ for every $A$, since there is no possible second coordinate. This
matches $|A| \cdot 0 = 0$.

**Theorem 5.7.** $A \times (B \cup C) = (A \times B) \cup (A \times C)$.

*Proof.* $(a, x) \in A \times (B \cup C)$ means $a \in A$ and ($x \in B$ or $x \in C$). By the distributive law of
logic this is ($a \in A$ and $x \in B$) or ($a \in A$ and $x \in C$), which means $(a, x) \in A \times B$ or
$(a, x) \in A \times C$. Every element of either side is a pair, so the two sets have the same elements. $\square$

The same argument proves $A \times (B \cap C) = (A \times B) \cap (A \times C)$ (exercise 9).

### Triples and $n$-tuples

An **ordered triple** $(a, b, c)$ is determined by its three coordinates in order, and in general an **$n$-tuple**
$(a_1, \ldots, a_n)$ by its $n$ coordinates. The product $A_1 \times \cdots \times A_n$ is the set of all such tuples
with $a_i \in A_i$, and $A^n$ means $A \times \cdots \times A$ with $n$ factors. So $\mathbb{R}^3$ is space, and
$\{0, 1\}^8$ is the set of all bytes, $2^8 = 256$ of them. One honest note: officially $(a, b, c)$ is usually
defined as $((a, b), c)$, so $A \times B \times C$ is $(A \times B) \times C$; this makes the product "associative up
to an obvious matching", and nobody worries about the difference in practice.

### Can a pair be made out of sets?

*Level: advanced.*

So far "ordered pair" is a new kind of object with a rule $(\ast)$. If everything in mathematics is to be a set (the
plan of [Chapter 8](08-Axiomatic-Set-Theory.md)), then a pair must be a set too, and the set must remember order
even though sets do not. The trick in use today is due to Kazimierz Kuratowski (1921), improving an earlier and more
complicated one by Norbert Wiener (1914):

$$
(a, b) := \{\{a\}, \{a, b\}\}.
$$

The first coordinate is the element that appears in *every* member; the second is the other one. If $a = b$ the pair
is $\{\{a\}, \{a, a\}\} = \{\{a\}\}$.

**Theorem 5.8.** With Kuratowski's definition, $\{\{a\}, \{a, b\}\} = \{\{c\}, \{c, d\}\}$ if and only if $a = c$ and
$b = d$.

*Proof.* "If" is clear: equal inputs give equal sets. For "only if", suppose
$P = \{\{a\}, \{a, b\}\} = \{\{c\}, \{c, d\}\}$.

*Case 1: $a = b$.* Then $P = \{\{a\}\}$ has exactly one element. So $\{c\} = \{a\}$ and $\{c, d\} = \{a\}$. The first
gives $c = a$, the second gives $d = a$. So $c = a$ and $d = a = b$.

*Case 2: $a \neq b$.* Then $P$ has two different elements, $\{a\}$ with one element and $\{a, b\}$ with two. If
$c = d$ the right side would be $\{\{c\}\}$ with only one element, so $c \neq d$ and the right side also has one
one-element member, $\{c\}$, and one two-element member, $\{c, d\}$. Equal sets have the same one-element members,
so $\{a\} = \{c\}$, giving $a = c$. And they have the same two-element members, so $\{a, b\} = \{c, d\} = \{a, d\}$.
Then $b \in \{a, d\}$ and $b \neq a$, so $b = d$. $\square$

Nobody thinks a point of the plane "really is" $\{\{3\}, \{3, 5\}\}$. The point of the construction is that a theory
with only sets can *imitate* ordered pairs perfectly, so it need not take them as a new primitive. This "build it
from sets and prove it has the right property" move happens again and again: functions, integers and rationals in
[Chapter 6](06-Relations-and-Functions.md), natural numbers in [Chapter 8](08-Axiomatic-Set-Theory.md).

## 5.5 Russell's paradox

*Level: intermediate argument, advanced meaning.*

Everything above used one unstated assumption: if you can describe a property, the things with that property form a
set. "The even numbers", "the subsets of $A$", "the pairs with first coordinate in $A$". This assumption is called
**unrestricted comprehension**, and the set theory built on it is **naive set theory**:

> **Naive comprehension.** For every property $P(x)$ there is a set $\{x : P(x)\}$ whose elements are exactly the
> objects with property $P$.

It seems too obvious to question. It is false.

### The argument

Some sets are elements of themselves, if naive comprehension is true. The set of all sets with more than three
elements has more than three elements, so it would be a member of itself. Most sets are not members of themselves:
the set of even numbers is not an even number. So consider the property "$x$ is not an element of itself",
$x \notin x$, and apply naive comprehension:

$$
R = \{x : x \notin x\}.
$$

Now ask the only question there is: is $R$ an element of $R$?

**Theorem 5.9 (Russell).** Naive comprehension is contradictory.

*Proof.* By naive comprehension the set $R$ exists, and for every object $x$,

$$
x \in R \iff x \notin x.
$$

This holds for *every* $x$, so it holds for $x = R$:

$$
R \in R \iff R \notin R.
$$

A statement of the form $p \Leftrightarrow \lnot p$ is false whatever $p$ is (check its two-row truth table). We have
derived a contradiction from naive comprehension alone, so naive comprehension is false. $\square$

Notice how little was used: no numbers, no infinity, nothing but "property", "set" and "element". That is what made
it so serious.

### The barber, and why the set version is worse

A popular version: in a village the barber shaves exactly those men who do not shave themselves. Who shaves the
barber? If he shaves himself, he must not; if he does not, he must. The usual moral is drawn wrongly. The barber
story is *not* a paradox at all: it simply proves that no such barber exists, the way "the largest prime" proves
there is no largest prime. Nobody promised us the barber. The set version is different because naive comprehension
*did* promise us $R$. The contradiction therefore falls on the promise: some descriptions do not define sets.

### What really happened

The story is often told loosely, so here it is with only the documented facts.

- Georg Cantor created the theory of sets in a series of papers from 1874 into the 1890s, mainly to study the sizes
  of infinite sets and sets of points on the line. He was aware by the late 1890s that some collections, such as
  "all sets", cannot be treated as sets without contradiction, and discussed this in letters (notably to Dedekind in
  1899), but did not publish a theory of it.
- Gottlob Frege, in *Grundgesetze der Arithmetik* (volume 1, 1893), built arithmetic on logic. One of his basic laws,
  Basic Law V, says in effect that every concept has an extension (a set of things falling under it); it implies
  naive comprehension.
- Bertrand Russell found the contradiction in 1901, while thinking about Cantor's proof that there is no largest
  cardinal (the theorem of [Chapter 7](07-Infinity-and-Cardinality.md)), applied to the class of all classes.
- On 16 June 1902 Russell wrote to Frege explaining the contradiction in Frege's own terms. Frege's second volume was
  already being printed. He replied within days, acknowledging that the contradiction struck at the foundation he
  had built, and added an appendix to volume 2 (1903) discussing it and proposing a repair (the repair was later
  shown not to work either).
- Russell published the paradox in *The Principles of Mathematics* (1903).
- Ernst Zermelo, in Göttingen, appears to have found the same contradiction independently a little earlier and
  told colleagues, including David Hilbert, but did not publish it.

Both letters are translated in Jean van Heijenoort's sourcebook *From Frege to Gödel* (1967), listed below, and are
worth reading in full; they are short.

There were other warnings. Cesare Burali-Forti (1897) had found a contradiction in "the collection of all ordinal
numbers", and Cantor's own theorem gives one for "the set of all sets": if $V$ contained every set then
$\mathcal{P}(V) \subseteq V$, so $\mathcal{P}(V)$ could be no bigger than $V$, against Cantor's theorem. Russell's
version is the simplest and needs no theory of size at all.

### Why naive set theory fails, and two ways out

The lesson is that the sentence "the collection of all $x$ with property $P$ is a set" cannot be accepted for every
$P$. Two main repairs were proposed in the following decade.

**Russell's types.** Russell, and then Russell and Alfred North Whitehead in *Principia Mathematica* (three volumes,
1910 to 1913), arranged objects in levels or **types**: individuals, sets of individuals, sets of sets of
individuals, and so on. A set may only contain things of the level below, so "$x \in x$" is not even a grammatical
statement and $R$ cannot be written down. Type theory has had a long second life in computer science and proof
assistants (see [Chapter 19](19-Other-Logics.md)).

**Zermelo's separation.** Zermelo (1908) kept a single universe of sets but allowed comprehension only *inside a set
you already have*:

> **Separation.** For every set $A$ and property $P(x)$ there is a set $\{x \in A : P(x)\}$.

You may carve a subset out of an existing set, but you may not conjure a set out of a property alone. Russell's
argument does not break this; instead, it proves a theorem.

**Theorem 5.10.** For every set $A$, the set $R_A = \{x \in A : x \notin x\}$ is not an element of $A$. Hence there
is no set of all sets.

*Proof.* $R_A$ exists by separation, and for every $x$: $x \in R_A \iff (x \in A \text{ and } x \notin x)$. Suppose,
for contradiction, that $R_A \in A$. Put $x = R_A$:

$$
R_A \in R_A \iff (R_A \in A \text{ and } R_A \notin R_A) \iff R_A \notin R_A,
$$

using $R_A \in A$ in the last step. That is the contradiction $p \Leftrightarrow \lnot p$. So $R_A \notin A$. In
particular no set $A$ contains every set, since it misses $R_A$. $\square$

The same argument that destroyed naive set theory is, inside Zermelo's theory, a perfectly good proof by
contradiction. This is a recurring shape in logic: a "paradox" becomes a theorem about what does not exist, or
cannot be done. Cantor's diagonal argument ([Chapter 7](07-Infinity-and-Cardinality.md)), the halting problem
([Chapter 14](14-Undecidability.md)) and Gödel's incompleteness theorem
([Chapter 18](18-Godels-Incompleteness-Theorems.md)) all have Russell's diagonal "$x \notin x$" at their heart.

For everyday mathematics the practical rule is simple: **always form sets inside a known set**, as in
$\{x \in \mathbb{R} : x^2 < 2\}$, and talk about complements only relative to a universe. Then nothing in this chapter
is endangered. [Chapter 8](08-Axiomatic-Set-Theory.md) lists the full set of axioms, Zermelo-Fraenkel set theory,
that took separation as its central idea.

## A short history

Collections are as old as counting, but sets as mathematical objects begin with Georg Cantor. His 1874 paper proved
that the real numbers cannot be listed in a sequence while the algebraic numbers can; his later papers built a whole
arithmetic of infinite sizes and orders. Richard Dedekind used sets to construct the real numbers (1872) and the
natural numbers (1888). Boole (1854) had already treated classes algebraically, and Venn's diagrams (1880) were
designed to picture Boole's logic. Peano introduced $\in$ in 1889. By 1900 sets looked like the common language
mathematics had been waiting for, and Frege and Russell hoped to reduce all of mathematics to logic plus sets.
Russell's 1901 discovery ended the naive version of the plan. Zermelo's axioms (1908), completed by Fraenkel, Skolem
and von Neumann in the 1920s, gave the axiomatic theory still in use; Russell and Whitehead's types took a different
road. Both are told in [Chapter 8](08-Axiomatic-Set-Theory.md) and [Chapter 19](19-Other-Logics.md).

## Check yourself

??? question "1. True or false: (a) $\varnothing \in \varnothing$, (b) $\varnothing \subseteq \varnothing$, (c) $\varnothing \in \{\varnothing\}$, (d) $\{\varnothing\} \subseteq \varnothing$, (e) $\{1\} \in \{1, 2\}$, (f) $\{1\} \subseteq \{1, 2\}$."

    (a) False: the empty set has no elements, so nothing is in it, not even $\varnothing$.
    (b) True: every set is a subset of itself (and the empty set is a subset of every set).
    (c) True: $\{\varnothing\}$ has exactly one element, $\varnothing$.
    (d) False: $\{\varnothing\}$ has the element $\varnothing$, which is not in $\varnothing$.
    (e) False: the elements of $\{1, 2\}$ are 1 and 2; the set $\{1\}$ is not one of them.
    (f) True: the only element of $\{1\}$, namely 1, is in $\{1, 2\}$.

??? question "2. List the elements of $\mathcal{P}(\{1, \{1\}\})$. How many are there?"

    The set $\{1, \{1\}\}$ has two different elements, the number 1 and the set $\{1\}$, so it has $2^2 = 4$ subsets:

    $\varnothing$, $\{1\}$, $\{\{1\}\}$, $\{1, \{1\}\}$.

    Note that $\{1\}$ is both an element of the original set and (as a set containing 1) one of its subsets. That is
    allowed; being an element and being a subset are separate questions.

??? question "3. In the universe $U = \{1, \ldots, 12\}$, let $A$ be the even numbers and $B$ the multiples of 3. Find $A \cap B$, $A \cup B$, $A \setminus B$, $A \,\triangle\, B$ and $(A \cup B)^c$."

    $A = \{2,4,6,8,10,12\}$, $B = \{3,6,9,12\}$.

    - $A \cap B = \{6, 12\}$ (multiples of 6).
    - $A \cup B = \{2,3,4,6,8,9,10,12\}$.
    - $A \setminus B = \{2,4,8,10\}$.
    - $A \,\triangle\, B = \{2,3,4,8,9,10\}$.
    - $(A \cup B)^c = \{1, 5, 7, 11\}$.

    **Check:** $|A \cup B| = 8 = 6 + 4 - 2$.

??? question "4. Prove that $A \setminus (B \cup C) = (A \setminus B) \cap (A \setminus C)$."

    $x \in A \setminus (B \cup C)$ means $x \in A$ and not ($x \in B$ or $x \in C$). By De Morgan's law of logic this
    is $x \in A$ and $x \notin B$ and $x \notin C$. That is the same as ($x \in A$ and $x \notin B$) and ($x \in A$
    and $x \notin C$), which means $x \in (A \setminus B) \cap (A \setminus C)$. Each step was an equivalence, so
    the two sets have the same elements.

??? question "5. Of 100 students, 60 study French, 45 study Spanish and 20 study both. How many study neither?"

    $|F \cup S| = |F| + |S| - |F \cap S| = 60 + 45 - 20 = 85$ study at least one, so $100 - 85 = 15$ study
    neither.

??? question "6. How many of the integers $1, \ldots, 100$ are divisible by 2, 3 or 5?"

    Multiples of 2: 50; of 3: 33; of 5: 20. Of 6: 16; of 10: 10; of 15: 6. Of 30: 3. By inclusion-exclusion:

    $50 + 33 + 20 - 16 - 10 - 6 + 3 = 74$.

    **Check:** the remaining 26 numbers are those coprime to 30; between 1 and 90 there are $3 \cdot 8 = 24$ of them
    ($\varphi(30) = 8$ in each block of 30), plus 91 and 97 from 91 to 100: $24 + 2 = 26$, and $74 + 26 = 100$.

??? question "7. How many subsets of $\{1, 2, \ldots, 10\}$ contain 1 but not 2?"

    The decision for 1 (in) and for 2 (out) is fixed; the other 8 elements are free, each in or out. So there are
    $2^8 = 256$ such subsets.

??? question "8. Let $|A| = 2$ and $|B| = 3$. Find $|A \times B|$, $|\mathcal{P}(A \times B)|$ and $|\mathcal{P}(A) \times \mathcal{P}(B)|$. Are the last two the same?"

    $|A \times B| = 6$, so $|\mathcal{P}(A \times B)| = 2^6 = 64$. But $|\mathcal{P}(A) \times \mathcal{P}(B)| =
    2^2 \cdot 2^3 = 32$. They differ: a subset of $A \times B$ is any set of pairs (any pattern of ticks in a
    $2 \times 3$ grid), while a pair of subsets only gives the "rectangular" patterns $X \times Y$ (and several
    pairs give the same empty pattern).

??? question "9. Prove that $A \times (B \cap C) = (A \times B) \cap (A \times C)$."

    Both sides contain only ordered pairs. A pair $(a, x)$ is in the left side when $a \in A$ and $x \in B$ and
    $x \in C$. It is in the right side when ($a \in A$ and $x \in B$) and ($a \in A$ and $x \in C$). These two
    conditions are logically equivalent (repeat $a \in A$, or drop the repeat). So the sets have the same elements.

??? question "10. Show that symmetric difference makes $\mathcal{P}(A)$ a group: $\triangle$ is associative, $\varnothing$ is an identity, and every set is its own inverse."

    Associativity: $x \in (X \triangle Y) \triangle Z$ exactly when $x$ lies in an odd number of $X, Y, Z$, because
    membership in $X \triangle Y$ is the exclusive or of memberships, and exclusive or is associative (adding bits
    mod 2). The same description holds for $X \triangle (Y \triangle Z)$. Identity: $X \triangle \varnothing =
    (X \setminus \varnothing) \cup (\varnothing \setminus X) = X$. Inverses: $X \triangle X = \varnothing$, since no
    element is in exactly one of $X$ and $X$. (The operation is also commutative, so this is an abelian group. In
    the language of bit strings it is $\{0,1\}^n$ with bitwise addition mod 2.)

??? question "11. Show that if $(a, b) = \{\{a\}, \{a, b\}\}$, then $a$ and $b$ can be recovered from the set: $a$ is the unique element of $\bigcap (a,b)$, and $b$ is determined too."

    The members of $(a, b)$ are $\{a\}$ and $\{a, b\}$; the intersection of all its members is
    $\{a\} \cap \{a, b\} = \{a\}$, so $a$ is the one element of $\bigcap(a, b)$. The union of its members is
    $\{a\} \cup \{a, b\} = \{a, b\}$. If this union has two elements, $b$ is the one that is not $a$; if it has one
    element, then $b = a$. Either way $b$ is determined.

??? question "12. (Grelling's paradox, 1908.) Call an English adjective *autological* if it describes itself ('short' is short, 'English' is English) and *heterological* otherwise ('long' is not long). Is 'heterological' heterological? What does this show, and how does it differ from Russell's paradox?"

    If "heterological" is heterological, then it describes itself, so it is autological, not heterological. If it is
    not heterological, then it does not describe itself, which is the definition of heterological. Either way we
    contradict ourselves: the same $p \Leftrightarrow \lnot p$ shape as Russell's argument, with "describes itself"
    playing the role of $x \in x$. The difference is where the blame falls. Russell's paradox refutes a precise
    mathematical axiom, naive comprehension. Grelling's paradox shows that "describes" is not a precise notion for
    words in everyday English; it is a paradox about meaning and truth, and its proper home is Tarski's theorem on the
    undefinability of truth ([Chapter 18](18-Godels-Incompleteness-Theorems.md)).

## What you learned

- A set is determined by its elements alone (extensionality); order, repetition and description do not matter.
- $x \in A$ (membership) and $A \subseteq B$ (inclusion) are different relations; the empty set is a subset of every
  set, vacuously.
- To prove $A = B$, prove $A \subseteq B$ and $B \subseteq A$.
- Union, intersection and complement are "or", "and" and "not"; their laws are the laws of propositional logic, and
  infinite unions and intersections are "there exists" and "for all".
- A set with $n$ elements has $2^n$ subsets; a product $A \times B$ has $|A| \cdot |B|$ ordered pairs, and an ordered
  pair can be built from sets as $\{\{a\}, \{a, b\}\}$.
- Naive comprehension, "every property defines a set", is contradictory (Russell, 1901); forming sets only inside
  existing sets turns the paradox into a theorem: there is no set of all sets.

**Next:** [Chapter 6](06-Relations-and-Functions.md), where relations and functions are defined as sets of ordered
pairs, and the integers and rationals are built from scratch.

## Further reading

- P. R. Halmos, *Naive Set Theory*, 1960. Short, elegant, and (despite the title) careful about the axioms.
- H. B. Enderton, *Elements of Set Theory*, 1977. The standard first university course.
- D. J. Velleman, *How to Prove It: A Structured Approach*, 1994 (later editions 2006 and 2019). Chapters on sets
  and on proving set identities.
- B. Russell, *The Principles of Mathematics*, 1903. Chapter 10 discusses the contradiction.
- J. van Heijenoort (editor), *From Frege to Gödel: A Source Book in Mathematical Logic, 1879-1931*, 1967. Contains
  Russell's letter to Frege and Frege's reply, and Zermelo's 1908 axioms, in English.
- J. Venn, "On the diagrammatic and mechanical representation of propositions and reasonings", *Philosophical
  Magazine*, 1880.
- On this site: the Topics lessons [Sets](../../topics/logic/level-5/01-sets.md),
  [Union, intersection, complement](../../topics/logic/level-5/02-union-intersection.md),
  [De Morgan's laws](../../topics/logic/level-5/03-de-morgan.md),
  [Russell's paradox and sets](../../topics/logic/level-8/03-russells-paradox.md) and
  [Power sets and Cantor's theorem](../../topics/infinity/level-7/04-power-sets.md); the U of T guides
  [MAT137 Unit 1: Logic, Sets & Proofs](../../uoft/MAT137/unit01.md) and
  [MAT158H1 Unit 1: Logic, Sets & Proof](../../uoft/MAT158H1/unit01.md); and
  [Combinatorics, Chapter 5](../combinatorics/05-Inclusion-Exclusion.md) for inclusion-exclusion in full.
