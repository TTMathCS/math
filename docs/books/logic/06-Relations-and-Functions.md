# 6. Relations and functions

*"Is less than", "divides", "has the same birthday as", "is the square of": mathematics is full of ways two things
can be connected. This chapter turns every such connection into a set of ordered pairs, a **relation**, and then
picks out the three kinds that matter most. Equivalence relations say when two things count as "the same" for some
purpose, and cut a set into classes. Orders say when one thing comes before another. Functions send each input to
exactly one output. You will prove that equivalence relations and partitions are two views of one idea, learn to
tell injective, surjective and bijective functions apart, and use all of it to build the integers and the rational
numbers out of nothing but the natural numbers.*

!!! abstract "In this chapter"
    **You will learn:**

    - what a relation is, and the four properties (reflexive, symmetric, antisymmetric, transitive) that classify them
    - equivalence relations, equivalence classes, and why they correspond exactly to partitions
    - partial orders, total orders and well-orders, with Hasse diagrams, minimal and least elements
    - functions as sets of pairs; injective, surjective and bijective functions; images and preimages
    - composition, inverse functions, and exactly when an inverse exists
    - how the integers and the rationals are constructed as equivalence classes of pairs, and why the operations are
      well defined

    **You need:** [Chapter 5](05-Sets.md) (sets, subsets, Cartesian products), [Chapter 3](03-Quantifiers.md)
    (quantifiers) and [Chapter 4](04-Proofs.md) (proofs, including induction and the well-ordering principle). For a
    gentler first look at functions, see [Algebra, Chapter 6](../algebra/06-Functions.md); arithmetic mod $n$ is
    [Number Theory, Chapter 4](../number-theory/04-Congruences.md).

    **Levels:** 6.1 and 6.4 are intermediate; 6.2, 6.3 and 6.5 are intermediate with advanced proofs; 6.6 is
    advanced.

## 6.1 Relations

On a family tree you can ask, of any two people, "is $x$ a parent of $y$?" Among numbers you can ask "does $a$
divide $b$?" or "is $a < b$?". Each question has a yes-or-no answer for every pair. Whatever the question, all its
information is in one place: the list of pairs for which the answer is yes.

### The definition

A **relation from $A$ to $B$** is a subset $R \subseteq A \times B$. If $(a, b) \in R$ we say $a$ is related to $b$
and write $a \mathrel{R} b$. A **relation on $A$** is a relation from $A$ to $A$, that is, a subset of $A \times A$.

That is the whole definition. A relation *is* its set of yes-pairs; two relations with the same pairs are the same
relation, however differently they are described (extensionality again).

**Example 6.1.** On $A = \{1, 2, 3, 4\}$:

- "less than" is $\{(1,2), (1,3), (1,4), (2,3), (2,4), (3,4)\}$, six pairs;
- "divides" is $\{(1,1), (1,2), (1,3), (1,4), (2,2), (2,4), (3,3), (4,4)\}$, eight pairs;
- "equals" is the **diagonal** $\{(1,1), (2,2), (3,3), (4,4)\}$;
- $\varnothing$ is a relation (nothing is related to anything), and so is $A \times A$ (everything is related to
  everything).

Since a relation on an $n$-element set is any subset of the $n^2$ pairs, there are $2^{n^2}$ relations on it. On
$\{1,2,3,4\}$ that is $2^{16} = 65536$.

### Pictures of a relation

A relation on a small set can be drawn as a **directed graph**: a dot for each element, an arrow from $a$ to $b$
whenever $a \mathrel{R} b$ (a loop if $a \mathrel{R} a$). Or as a **matrix** of 0s and 1s, with a 1 in row $a$,
column $b$ when $a \mathrel{R} b$. "Divides" on $\{1,2,3,4\}$ has matrix

$$
\begin{pmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 0 & 1 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}.
$$

**Check:** eight 1s, the eight pairs listed above.

### The four properties

A relation $R$ on $A$ is

- **reflexive** if $a \mathrel{R} a$ for every $a \in A$ (every dot has a loop; the diagonal of the matrix is all 1s);
- **symmetric** if $a \mathrel{R} b$ implies $b \mathrel{R} a$ (arrows come in two-way pairs; the matrix equals its
  transpose);
- **antisymmetric** if $a \mathrel{R} b$ and $b \mathrel{R} a$ together imply $a = b$ (no two-way arrows between
  different dots);
- **transitive** if $a \mathrel{R} b$ and $b \mathrel{R} c$ imply $a \mathrel{R} c$ (every two-step path has a
  shortcut).

Antisymmetric is not the opposite of symmetric. The diagonal relation "equals" is both; the relation
$\{(1,2), (2,1), (1,3)\}$ on $\{1,2,3\}$ is neither.

| Relation | Set | Refl. | Symm. | Antisymm. | Trans. |
|---|---|---|---|---|---|
| $=$ | any | yes | yes | yes | yes |
| $\leq$ | $\mathbb{R}$ | yes | no | yes | yes |
| $<$ | $\mathbb{R}$ | no | no | yes | yes |
| divides | $\mathbb{N}$ | yes | no | yes | yes |
| divides | $\mathbb{Z}$ | yes | no | no | yes |
| same remainder mod 5 | $\mathbb{Z}$ | yes | yes | no | yes |
| differ by at most 1 | $\mathbb{R}$ | yes | yes | no | no |
| is a sibling of | people | no | yes | no | no |
| $\subseteq$ | $\mathcal{P}(A)$ | yes | no | yes | yes |

Two entries deserve a word. "Divides" on $\mathbb{Z}$ fails antisymmetry because $2 \mid -2$ and $-2 \mid 2$ but
$2 \neq -2$. "Differ by at most 1" is not transitive: $0$ and $1$ differ by 1, $1$ and $2$ differ by 1, but $0$ and
$2$ differ by 2. And "is a sibling of" is not transitive either, if no one is their own sibling: $x$ sibling of $y$
and $y$ sibling of $x$ would force $x$ sibling of $x$.

Properties stated with "if ... then" hold **vacuously** when the "if" never happens. The empty relation on a nonempty
set is symmetric, antisymmetric and transitive, but not reflexive.

### Operations on relations

Since relations are sets, you can take unions and intersections of them. Two operations are special to relations.

- The **inverse** (or converse) of $R \subseteq A \times B$ is $R^{-1} = \{(b, a) : (a, b) \in R\}$, all arrows
  reversed. The inverse of $<$ is $>$; the inverse of "is a parent of" is "is a child of".
- The **composition** of $R \subseteq A \times B$ and $S \subseteq B \times C$ is
  $S \circ R = \{(a, c) : \text{there is } b \text{ with } a \mathrel{R} b \text{ and } b \mathrel{S} c\}$, "first
  $R$, then $S$". The composition of "is a parent of" with itself is "is a grandparent of".

In this language, $R$ is transitive exactly when $R \circ R \subseteq R$, and symmetric exactly when $R^{-1} = R$.

## 6.2 Equivalence relations and partitions

Two fractions, $\tfrac12$ and $\tfrac36$, are different pairs of numbers but the same number. Two times, 3 o'clock
today and 15 hours later, show the same position on a clock. Two triangles may be similar. In each case we want to say
"different, but the same for our purpose". The tool is the equivalence relation.

### Definition and examples

A relation $\sim$ on $A$ is an **equivalence relation** if it is reflexive, symmetric and transitive.

**Example 6.2 (congruence mod $n$).** Fix an integer $n \geq 1$ and say $a \equiv b \pmod n$ when $n \mid a - b$.
This is an equivalence relation on $\mathbb{Z}$.

*Proof.* Reflexive: $a - a = 0 = n \cdot 0$. Symmetric: if $a - b = nk$ then $b - a = n(-k)$. Transitive: if
$a - b = nk$ and $b - c = nl$ then adding, $a - c = n(k + l)$. $\square$

**Example 6.3.** On $\mathbb{R}$, let $x \sim y$ when $x - y \in \mathbb{Z}$. It is reflexive ($0 \in \mathbb{Z}$),
symmetric (negatives of integers are integers) and transitive (sums of integers are integers). Two reals are
equivalent when they have the same fractional part, $2.3 \sim -0.7 \sim 15.3$. Gluing equivalent points together turns
the line into a circle, and this is exactly how angles work: an angle measured in full turns is a real number up to
adding whole turns.

**Example 6.4.** On the set of people, "was born in the same month as" is an equivalence relation. On the set of
fractions $p/q$ written as pairs of integers, "$p/q \sim r/s$ when $ps = qr$" will be one (6.6). Any function
$f : A \to B$ gives an equivalence relation on $A$, "$a \sim a'$ when $f(a) = f(a')$" (exercise 3 asks why); the
three examples above are of this kind, with $f$ the remainder mod $n$, the fractional part, and the month of birth.

### Equivalence classes

Given an equivalence relation $\sim$ on $A$ and an element $a \in A$, the **equivalence class** of $a$ is

$$
[a] = \{x \in A : x \sim a\},
$$

everything that counts as "the same as" $a$. Any element of a class is called a **representative** of it.

For congruence mod 3 on $\mathbb{Z}$ there are three classes:

$$
[0] = \{\ldots, -3, 0, 3, 6, \ldots\}, \quad [1] = \{\ldots, -2, 1, 4, 7, \ldots\}, \quad [2] = \{\ldots, -1, 2, 5, 8, \ldots\}.
$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 120" role="img" aria-label="The integers from minus 4 to 7 on a line, each dot coloured by its remainder mod 3: orange for class [0], blue for class [1], green for class [2]. The three colours repeat in order, so the line is cut into three classes that do not overlap and together cover every integer.">
  <line x1="20" y1="40" x2="420" y2="40" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="40" cy="40" r="10" fill="#7ccf9a" stroke="currentColor"/>
  <circle cx="72" cy="40" r="10" fill="#eea66f" stroke="currentColor"/>
  <circle cx="104" cy="40" r="10" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="136" cy="40" r="10" fill="#7ccf9a" stroke="currentColor"/>
  <circle cx="168" cy="40" r="10" fill="#eea66f" stroke="currentColor"/>
  <circle cx="200" cy="40" r="10" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="232" cy="40" r="10" fill="#7ccf9a" stroke="currentColor"/>
  <circle cx="264" cy="40" r="10" fill="#eea66f" stroke="currentColor"/>
  <circle cx="296" cy="40" r="10" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="328" cy="40" r="10" fill="#7ccf9a" stroke="currentColor"/>
  <circle cx="360" cy="40" r="10" fill="#eea66f" stroke="currentColor"/>
  <circle cx="392" cy="40" r="10" fill="#9cc9ea" stroke="currentColor"/>
  <text x="40" y="70" font-size="12" text-anchor="middle" fill="currentColor">−4</text>
  <text x="72" y="70" font-size="12" text-anchor="middle" fill="currentColor">−3</text>
  <text x="104" y="70" font-size="12" text-anchor="middle" fill="currentColor">−2</text>
  <text x="136" y="70" font-size="12" text-anchor="middle" fill="currentColor">−1</text>
  <text x="168" y="70" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <text x="200" y="70" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <text x="232" y="70" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <text x="264" y="70" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <text x="296" y="70" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <text x="328" y="70" font-size="12" text-anchor="middle" fill="currentColor">5</text>
  <text x="360" y="70" font-size="12" text-anchor="middle" fill="currentColor">6</text>
  <text x="392" y="70" font-size="12" text-anchor="middle" fill="currentColor">7</text>
  <circle cx="60" cy="100" r="7" fill="#eea66f" stroke="currentColor"/>
  <text x="74" y="104" font-size="12" fill="currentColor">class [0]</text>
  <circle cx="180" cy="100" r="7" fill="#9cc9ea" stroke="currentColor"/>
  <text x="194" y="104" font-size="12" fill="currentColor">class [1]</text>
  <circle cx="300" cy="100" r="7" fill="#7ccf9a" stroke="currentColor"/>
  <text x="314" y="104" font-size="12" fill="currentColor">class [2]</text>
</svg>
</div>

The picture shows the key fact: the classes do not overlap, and together they cover everything.

**Lemma 6.1.** Let $\sim$ be an equivalence relation on $A$ and $a, b \in A$.

1. $a \in [a]$; in particular every class is nonempty.
2. $[a] = [b]$ if and only if $a \sim b$.
3. Either $[a] = [b]$ or $[a] \cap [b] = \varnothing$.

*Proof.* (1) is reflexivity. (2) If $[a] = [b]$ then $a \in [a] = [b]$, so $a \sim b$. Conversely suppose $a \sim b$.
If $x \in [a]$ then $x \sim a$ and $a \sim b$, so $x \sim b$ by transitivity, and $x \in [b]$. So $[a] \subseteq [b]$.
By symmetry $b \sim a$, and the same argument gives $[b] \subseteq [a]$. (3) Suppose the classes share an element
$c$. Then $c \sim a$ and $c \sim b$, so $a \sim c$ (symmetry) and $a \sim b$ (transitivity), and $[a] = [b]$ by (2).
$\square$

Part (2) is what makes classes useful: a class can be named by any of its members, $[1] = [4] = [-2]$ mod 3, and
which name you use does not matter. The set of all classes is the **quotient set** $A/{\sim}$. For congruence mod $n$
it is written $\mathbb{Z}/n\mathbb{Z}$ and has $n$ elements, $[0], [1], \ldots, [n-1]$.

### Partitions

A **partition** of $A$ is a set $\Pi$ of subsets of $A$ (called **blocks**) such that

- every block is nonempty,
- different blocks are disjoint, and
- every element of $A$ is in some block (the union of the blocks is $A$).

So every element of $A$ is in *exactly one* block. Sorting laundry into piles is a partition, as long as no pile is
empty and nothing is left on the floor.

**Theorem 6.2 (equivalence relations are partitions).** Let $A$ be a set.

1. If $\sim$ is an equivalence relation on $A$, its classes $A/{\sim}$ form a partition of $A$.
2. If $\Pi$ is a partition of $A$, the relation "$a \sim_\Pi b$ when $a$ and $b$ are in the same block" is an
   equivalence relation, and its classes are exactly the blocks of $\Pi$.
3. These two constructions undo each other. So there is a one-to-one correspondence between equivalence relations
   on $A$ and partitions of $A$.

*Proof.* (1) By Lemma 6.1, classes are nonempty (part 1), two different classes are disjoint (part 3), and every
$a$ is in a class, its own (part 1).

(2) Every $a$ is in some block, so $a \sim_\Pi a$: reflexive. "Same block" does not depend on the order of $a$ and
$b$: symmetric. If $a, b$ share a block $P$ and $b, c$ share a block $Q$, then $b \in P \cap Q$; different blocks are
disjoint, so $P = Q$ and $a, c$ share it: transitive. The class of $a$ is the set of $x$ in the same block as $a$,
which is the block containing $a$. So the classes are the blocks.

(3) Start with $\Pi$, form $\sim_\Pi$, then take its classes: by (2) you get back the blocks of $\Pi$. Start with
$\sim$, form the partition $A/{\sim}$, then the relation "same block": $a$ and $b$ are in the same block exactly when
$[a] = [b]$, which by Lemma 6.1 is exactly when $a \sim b$. So you get back $\sim$. $\square$

The theorem is used in both directions. To prove that some sorting is a partition, it is often easiest to show that
"in the same pile" is an equivalence relation. To understand an equivalence relation, you look at its classes.

### Counting partitions

How many equivalence relations are there on $\{1, 2, 3\}$? By the theorem, as many as partitions. There are five:

$$
\{\{1,2,3\}\},\ \{\{1,2\},\{3\}\},\ \{\{1,3\},\{2\}\},\ \{\{2,3\},\{1\}\},\ \{\{1\},\{2\},\{3\}\}.
$$

The number of partitions of an $n$-element set is the **Bell number** $B_n$: $B_0 = 1, B_1 = 1, B_2 = 2, B_3 = 5,
B_4 = 15, B_5 = 52, B_6 = 203$. They are studied in [Combinatorics, Chapter 9](../combinatorics/09-Stirling-Numbers-and-Partitions.md).

**Try it in Python** (with sympy, which knows the Bell numbers):

```python
from sympy import bell
print([bell(n) for n in range(7)])   # [1, 1, 2, 5, 15, 52, 203]
```

## 6.3 Orders

Equivalence relations say "the same". Orders say "before". "Is at most" on numbers, "is a subset of" on sets, "divides"
on positive integers and "must be done before" on the tasks of a project all put things in some kind of sequence, but
the last three leave some pairs unordered: $\{1\}$ and $\{2\}$ are not subsets of each other, and 2 and 3 do not divide
each other.

### Partial and total orders

A relation $\preceq$ on $A$ is a **partial order** if it is reflexive, antisymmetric and transitive. The pair
$(A, \preceq)$ is a **partially ordered set**, or **poset**. Two elements are **comparable** if $a \preceq b$ or
$b \preceq a$. A partial order in which every two elements are comparable is a **total order** (or **linear order**).

- $(\mathbb{R}, \leq)$ is a total order, and so are $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$ with $\leq$.
- $(\mathcal{P}(A), \subseteq)$ is a partial order, not total if $A$ has two or more elements.
- $(\mathbb{N}_{\geq 1}, \mid)$, the positive integers under divisibility, is a partial order, not total.
- Words in a dictionary are totally ordered by **lexicographic** order: compare first letters, and if equal compare
  second letters, and so on (a word that is a prefix of another comes first).

Each partial order has a **strict** version: $a \prec b$ means $a \preceq b$ and $a \neq b$. A strict order is
irreflexive and transitive, like $<$ and $\subsetneq$. You can go back and forth, so it does not matter which one is
taken as basic.

### Hasse diagrams

A finite poset is drawn as a **Hasse diagram** (after Helmut Hasse, who used them in algebra in the twentieth century,
though they appear earlier): a dot for each element, with $b$ drawn higher than $a$ and joined to it by a line when $b$
**covers** $a$, that is $a \prec b$ with nothing strictly between. Everything else follows by going up along lines,
thanks to transitivity, so the diagram is uncluttered.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 250" role="img" aria-label="Two Hasse diagrams. Left: the divisors of 12 under divisibility, with 1 at the bottom, 2 and 3 above it, 4 and 6 above those, and 12 at the top; lines join 1 to 2 and 3, 2 to 4 and 6, 3 to 6, and 4 and 6 to 12. Right: the subsets of {a, b, c} under inclusion, drawn as a cube: the empty set at the bottom, the three one-element sets, the three two-element sets, and {a, b, c} at the top.">
  <g stroke="currentColor" stroke-width="1.4">
    <line x1="110" y1="210" x2="70" y2="155"/>
    <line x1="110" y1="210" x2="150" y2="155"/>
    <line x1="70" y1="155" x2="40" y2="100"/>
    <line x1="70" y1="155" x2="120" y2="100"/>
    <line x1="150" y1="155" x2="120" y2="100"/>
    <line x1="40" y1="100" x2="80" y2="45"/>
    <line x1="120" y1="100" x2="80" y2="45"/>
    <line x1="330" y1="215" x2="270" y2="160"/>
    <line x1="330" y1="215" x2="330" y2="160"/>
    <line x1="330" y1="215" x2="390" y2="160"/>
    <line x1="270" y1="160" x2="270" y2="100"/>
    <line x1="270" y1="160" x2="330" y2="100"/>
    <line x1="330" y1="160" x2="270" y2="100"/>
    <line x1="330" y1="160" x2="390" y2="100"/>
    <line x1="390" y1="160" x2="330" y2="100"/>
    <line x1="390" y1="160" x2="390" y2="100"/>
    <line x1="270" y1="100" x2="330" y2="45"/>
    <line x1="330" y1="100" x2="330" y2="45"/>
    <line x1="390" y1="100" x2="330" y2="45"/>
  </g>
  <g fill="#9cc9ea" stroke="currentColor">
    <circle cx="110" cy="210" r="13"/><circle cx="70" cy="155" r="13"/><circle cx="150" cy="155" r="13"/>
    <circle cx="40" cy="100" r="13"/><circle cx="120" cy="100" r="13"/><circle cx="80" cy="45" r="13"/>
  </g>
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <text x="110" y="214">1</text><text x="70" y="159">2</text><text x="150" y="159">3</text>
    <text x="40" y="104">4</text><text x="120" y="104">6</text><text x="80" y="49">12</text>
    <text x="95" y="242">divisors of 12</text>
  </g>
  <g fill="#7ccf9a" stroke="currentColor">
    <rect x="312" y="205" width="36" height="20" rx="5"/>
    <rect x="252" y="150" width="36" height="20" rx="5"/><rect x="312" y="150" width="36" height="20" rx="5"/><rect x="372" y="150" width="36" height="20" rx="5"/>
    <rect x="248" y="90" width="44" height="20" rx="5"/><rect x="308" y="90" width="44" height="20" rx="5"/><rect x="368" y="90" width="44" height="20" rx="5"/>
    <rect x="304" y="35" width="52" height="20" rx="5"/>
  </g>
  <g font-size="11" text-anchor="middle" fill="currentColor">
    <text x="330" y="219">∅</text>
    <text x="270" y="164">a</text><text x="330" y="164">b</text><text x="390" y="164">c</text>
    <text x="270" y="104">ab</text><text x="330" y="104">ac</text><text x="390" y="104">bc</text>
    <text x="330" y="49">abc</text>
    <text x="330" y="242">subsets of {a, b, c}</text>
  </g>
</svg>
</div>

In the left diagram, $2 \mid 12$ because you can climb from 2 to 12 (through 4 or 6), and $4$ and $6$ are incomparable
because neither is above the other along lines. The right diagram (sets abbreviated, so $ab$ means $\{a, b\}$) is a
cube, and the subsets of an $n$-element set always form an $n$-dimensional cube in this way.

### Least, greatest, minimal, maximal

In a poset $(A, \preceq)$, an element $m$ is

- **least** if $m \preceq a$ for every $a \in A$ (below everything);
- **minimal** if no $a$ satisfies $a \prec m$ (nothing is below it);

and **greatest** and **maximal** are defined the same way upside down. A least element is minimal, and there is at
most one (if $m$ and $m'$ are both least then $m \preceq m'$ and $m' \preceq m$, so $m = m'$ by antisymmetry). But
minimal need not be least.

**Example 6.5.** In $\{2, 3, \ldots, 10\}$ under divisibility, the minimal elements are 2, 3, 5, 7 (nothing else in
the set divides them) and the maximal elements are 6, 7, 8, 9, 10 (they divide nothing else in the set). There is no
least or greatest element. Note that 7 is both minimal and maximal: it is comparable to nothing but itself.

**Example 6.6.** In $(\mathcal{P}(A), \subseteq)$ the least element is $\varnothing$ and the greatest is $A$. In
$(\mathbb{Z}, \leq)$ there is neither.

**Theorem 6.3.** Every nonempty finite poset has a minimal element.

*Proof.* Start at any element $a_1$. If it is not minimal, there is $a_2 \prec a_1$. If $a_2$ is not minimal, there is
$a_3 \prec a_2$, and so on. By transitivity $a_j \prec a_i$ whenever $j > i$, so by antisymmetry the $a_i$ are all
different. A finite set cannot contain an endless list of different elements, so the process stops, and it stops
exactly at a minimal element. $\square$

Repeatedly removing a minimal element lists a finite poset in an order compatible with $\preceq$. This is how a build
system or a project planner chooses an order for tasks that depend on each other; computer scientists call it a
**topological sort**. It also proves that every finite partial order extends to a total order. (For infinite posets
this is still true, but the proof needs the axiom of choice; see [Chapter 8](08-Axiomatic-Set-Theory.md).)

### Upper bounds and suprema

If $S \subseteq A$, an **upper bound** of $S$ is an $u \in A$ with $s \preceq u$ for all $s \in S$, and a **least upper
bound** or **supremum** is an upper bound below every other upper bound. In $(\mathcal{P}(A), \subseteq)$ the supremum
of two sets is their union. In $(\mathbb{N}_{\geq 1}, \mid)$ the supremum of 4 and 6 is $\operatorname{lcm}(4, 6) = 12$.
In $(\mathbb{Q}, \leq)$ the set $\{q : q^2 < 2\}$ has upper bounds but no least one, because $\sqrt 2$ is missing; the
real numbers are exactly what you get by filling such gaps, which is the subject of
[Calculus, Chapter 18](../calculus/18-The-Real-Numbers.md).

### Well-orders

*Level: advanced.*

In [Chapter 4](04-Proofs.md) the **well-ordering principle** said: every nonempty set of natural numbers has a least
element. This is what makes induction and "take the smallest counterexample" work. In general, a total order is a
**well-order** if every nonempty subset has a least element.

- $(\mathbb{N}, \leq)$ is a well-order.
- $(\mathbb{Z}, \leq)$ is not: $\mathbb{Z}$ itself has no least element.
- $(\mathbb{Q}_{\geq 0}, \leq)$ is not, even though it has a least element 0: the subset of positive rationals has no
  least element, since $q/2 < q$.
- A well-order can be infinite in more than one direction of "length". Order $\mathbb{N}$ by putting all even numbers
  first, in their usual order, then all odd numbers: $0, 2, 4, \ldots, 1, 3, 5, \ldots$. This is a well-order (a
  nonempty subset has a least even member if it has any even member, otherwise a least odd member), but now 1 has
  infinitely many elements before it.

**Theorem 6.4.** The lexicographic order on $\mathbb{N} \times \mathbb{N}$, where $(a, b) < (c, d)$ means $a < c$, or
$a = c$ and $b < d$, is a well-order.

*Proof.* It is a total order (compare first coordinates, then second). Let $S \subseteq \mathbb{N} \times \mathbb{N}$
be nonempty. The set of first coordinates of $S$ is a nonempty set of naturals; let $a_0$ be its least element. The set
$\{b : (a_0, b) \in S\}$ is nonempty; let $b_0$ be its least element. Then $(a_0, b_0) \in S$. For any $(a, b) \in S$,
either $a > a_0$, or $a = a_0$ and $b \geq b_0$; either way $(a_0, b_0) \leq (a, b)$. $\square$

In this order $(0, 0) < (0, 1) < (0, 2) < \cdots$ all come before $(1, 0)$, which has infinitely many predecessors.
Well-orders measure such "lengths", and the measuring sticks are the **ordinal numbers** of
[Chapter 8](08-Axiomatic-Set-Theory.md). Well-orders allow induction (exercise 12): if a property passes from all
elements below $x$ to $x$ itself, it holds everywhere. This **transfinite induction** is how the axiom of choice is
used in practice.

## 6.4 Functions as sets of pairs

At school, a function is a rule or a formula: $f(x) = x^2$. But "rule" is vague (must it be a formula? must it be
computable?), and the same function can have many rules: $f(x) = x^2$ and $g(x) = |x|^2$ give the same output for every
real input. What a function really is, once more, is what it does: the list of input-output pairs.

### The definition

A **function** $f$ from $A$ to $B$, written $f : A \to B$, is a relation $f \subseteq A \times B$ such that

$$
\text{for every } a \in A \text{ there is exactly one } b \in B \text{ with } (a, b) \in f.
$$

That $b$ is written $f(a)$, the **value** of $f$ at $a$; we also write $a \mapsto f(a)$. The set $A$ is the
**domain** and $B$ the **codomain**. The **image** or **range** is the set of values actually taken,
$f[A] = \{f(a) : a \in A\} \subseteq B$. As a set of pairs, $f$ is exactly what you would call its **graph**: the
function $x \mapsto x^2$ on $\mathbb{R}$ *is* the parabola $\{(x, x^2) : x \in \mathbb{R}\}$.

"Exactly one" has two halves: *at least one* (every input has an output) and *at most one* (no input has two outputs).
In a picture of a relation from $A$ to $B$, a function has exactly one arrow leaving each element of $A$; for a
function $\mathbb{R} \to \mathbb{R}$ this is the vertical line test.

**Example 6.7.** Which of these relations from $A = \{1, 2, 3\}$ to $B = \{x, y\}$ are functions?

- $\{(1, x), (2, x), (3, y)\}$: yes.
- $\{(1, x), (2, y)\}$: no, 3 has no value.
- $\{(1, x), (1, y), (2, x), (3, x)\}$: no, 1 has two values.
- $\{(1, y), (2, y), (3, y)\}$: yes, a constant function. Not every element of $B$ must be used.

**Example 6.8.** "$y$ is a square root of $x$" relates 4 to both 2 and $-2$, so it is not a function from
$[0, \infty)$ to $\mathbb{R}$. Choosing the non-negative root gives the function $\sqrt{\ } : [0, \infty) \to \mathbb{R}$.

Two functions $f, g : A \to B$ are equal when they are equal as sets, that is when $f(a) = g(a)$ for every $a$. The
domain and codomain are part of the data: $x \mapsto x^2$ as a map $\mathbb{R} \to \mathbb{R}$ and as a map
$\mathbb{R} \to [0, \infty)$ are, for us, different functions, because one is onto its codomain and the other is not.
(Strictly, the set of pairs does not record the codomain, so a careful definition takes a function to be the triple
$(A, B, f)$; nothing below depends on this.)

**How many functions?** For finite $A$ and $B$, each of the $|A|$ inputs independently picks one of $|B|$ outputs,
so there are $|B|^{|A|}$ functions from $A$ to $B$. For that reason the set of all functions from $A$ to $B$ is written
$B^A$. With $B = \{0, 1\}$, a function $A \to \{0,1\}$ is a yes/no answer for each element, that is, a subset of $A$;
so $|\{0,1\}^A| = 2^{|A|} = |\mathcal{P}(A)|$, the count of Theorem 5.5 again. Two edge cases: there is exactly one
function $\varnothing \to B$ (the empty set of pairs; and $|B|^0 = 1$), and there is no function $A \to \varnothing$ if
$A$ is nonempty.

### Injective, surjective, bijective

A function $f : A \to B$ is

- **injective** (one-to-one) if different inputs give different outputs: $f(a) = f(a')$ implies $a = a'$;
- **surjective** (onto) if every element of the codomain is a value: for every $b \in B$ there is $a \in A$ with
  $f(a) = b$, that is $f[A] = B$;
- **bijective** if it is both. A bijection is a perfect matching between $A$ and $B$: every element of $B$ is hit
  exactly once.

In arrow pictures: injective means no element of $B$ receives two arrows; surjective means every element of $B$
receives at least one.

**Example 6.9.** Consider maps $\mathbb{R} \to \mathbb{R}$.

| $f(x)$ | injective? | surjective? | reason |
|---|---|---|---|
| $3x - 7$ | yes | yes | solve $y = 3x - 7$: $x = (y + 7)/3$, one solution for every $y$ |
| $x^2$ | no | no | $f(1) = f(-1)$; $-1$ is never a value |
| $e^x$ | yes | no | strictly increasing; values are only positive |
| $x^3 - x$ | no | yes | $f(0) = f(1) = 0$; continuous, unbounded both ways |
| $x^3$ | yes | yes | strictly increasing; $y = x^3$ has the solution $x = \sqrt[3]{y}$ |

Changing the domain or codomain changes the answers. $x^2$ as a map $[0, \infty) \to [0, \infty)$ is a bijection, and
$e^x$ as a map $\mathbb{R} \to (0, \infty)$ is a bijection whose inverse is $\ln$.

**How to prove injective.** Assume $f(a) = f(a')$ and deduce $a = a'$. For $f(x) = 3x - 7$: $3a - 7 = 3a' - 7$ gives
$3a = 3a'$, so $a = a'$.

**How to prove surjective.** Take an arbitrary $b$ in the codomain and find an input that maps to it, usually by
solving $f(x) = b$, and then check that your solution lies in the domain.

**Example 6.10.** Is $f : \mathbb{Z} \times \mathbb{Z} \to \mathbb{Z}$, $f(m, n) = 6m + 10n$, surjective? Every value is
even, so 1 is not a value: no. Is $g(m, n) = 6m + 15n$ surjective? Every value is a multiple of $\gcd(6, 15) = 3$, so
no. Is $h(m, n) = 6m + 35n$? Here $\gcd(6, 35) = 1$, and $6 \cdot 6 + 35 \cdot (-1) = 1$, so
$h(6k, -k) = k$ for every integer $k$: yes. (This is Bézout's identity,
[Number Theory, Chapter 3](../number-theory/03-GCD-and-Euclids-Algorithm.md).) None of the three is injective, since
$h(35, -6) = 0 = h(0, 0)$.

### Counting injections and surjections

For finite sets with $|A| = m$ and $|B| = n$:

- An injection exists only if $m \leq n$. This is the **pigeonhole principle**: if $m > n$ pigeons go into $n$ holes,
  some hole gets two ([Combinatorics, Chapter 4](../combinatorics/04-The-Pigeonhole-Principle.md)). When $m \leq n$
  there are $n(n-1)\cdots(n-m+1)$ injections: $n$ choices for the first input, $n-1$ for the second, and so on.
- A surjection exists only if $m \geq n$. The number of surjections is found by inclusion-exclusion. For $m = 4$,
  $n = 3$: of the $3^4 = 81$ functions, $2^4 = 16$ miss any given output, $1^4 = 1$ miss any given two, so the number
  of surjections is $81 - 3 \cdot 16 + 3 \cdot 1 - 0 = 36$.
- A bijection exists only if $m = n$, and then there are $n!$ of them; a bijection from a set to itself is a
  **permutation**.

**Theorem 6.5.** If $|A| = |B|$ is finite and $f : A \to B$, then $f$ is injective if and only if it is surjective.

*Proof.* Let $|A| = |B| = n$. If $f$ is injective, the $n$ values $f(a)$ are all different, so $f[A]$ has $n$ elements;
a subset of $B$ with $n$ elements is all of $B$. If $f$ is surjective, $f[A] = B$ has $n$ elements; if two inputs
shared a value, the $n$ inputs would give at most $n - 1$ values. $\square$

This theorem is false for infinite sets: $n \mapsto n + 1$ is an injection $\mathbb{N} \to \mathbb{N}$ that misses 0.
That failure is exactly where [Chapter 7](07-Infinity-and-Cardinality.md) begins.

### Images and preimages

For $f : A \to B$, $X \subseteq A$ and $Y \subseteq B$, the **image** of $X$ and the **preimage** (inverse image) of $Y$
are

$$
f[X] = \{f(x) : x \in X\}, \qquad f^{-1}[Y] = \{a \in A : f(a) \in Y\}.
$$

The preimage makes sense for every function, invertible or not: for $f(x) = x^2$ on $\mathbb{R}$,
$f^{-1}[\{4\}] = \{-2, 2\}$ and $f^{-1}[\{-1\}] = \varnothing$. Preimages are very well behaved:

$$
f^{-1}[Y_1 \cup Y_2] = f^{-1}[Y_1] \cup f^{-1}[Y_2], \quad f^{-1}[Y_1 \cap Y_2] = f^{-1}[Y_1] \cap f^{-1}[Y_2], \quad
f^{-1}[B \setminus Y] = A \setminus f^{-1}[Y].
$$

Each is a one-line check: for instance $a \in f^{-1}[Y_1 \cap Y_2]$ means $f(a) \in Y_1$ and $f(a) \in Y_2$. Images
respect unions, $f[X_1 \cup X_2] = f[X_1] \cup f[X_2]$, but not intersections; exercise 9 shows what goes wrong. This
asymmetry is why topology defines continuity by preimages of open sets
([Calculus, Chapter 20](../calculus/20-Metric-Spaces-and-Topology-of-R.md)).

## 6.5 Inverses and composition

You encrypt a message by shifting each letter three places, then shift again by five. The result is a shift by eight,
and to decrypt you shift back by eight. Doing one function after another, and undoing a function, are the two
operations of this section.

### Composition

If $f : A \to B$ and $g : B \to C$, their **composition** $g \circ f : A \to C$ is $(g \circ f)(a) = g(f(a))$: first
$f$, then $g$. (As sets of pairs this is the composition of relations from 6.1.) The order matters and reads right to
left. With $f(x) = x + 1$ and $g(x) = x^2$ on $\mathbb{R}$, $(g \circ f)(x) = (x+1)^2$ but $(f \circ g)(x) = x^2 + 1$;
at $x = 1$ these are 4 and 2.

For each set $A$ the **identity function** $\mathrm{id}_A : A \to A$, $a \mapsto a$, does nothing:
$f \circ \mathrm{id}_A = f = \mathrm{id}_B \circ f$ for every $f : A \to B$.

**Theorem 6.6.** Composition is associative: for $f : A \to B$, $g : B \to C$, $h : C \to D$,
$h \circ (g \circ f) = (h \circ g) \circ f$.

*Proof.* Both are functions $A \to D$. At any $a \in A$, the left side gives $h((g \circ f)(a)) = h(g(f(a)))$ and the
right side gives $(h \circ g)(f(a)) = h(g(f(a)))$. Equal at every input, so equal. $\square$

**Theorem 6.7.** Let $f : A \to B$ and $g : B \to C$.

1. If $f$ and $g$ are injective, so is $g \circ f$.
2. If $f$ and $g$ are surjective, so is $g \circ f$.
3. If $f$ and $g$ are bijective, so is $g \circ f$.
4. If $g \circ f$ is injective, then $f$ is injective.
5. If $g \circ f$ is surjective, then $g$ is surjective.

*Proof.* (1) If $g(f(a)) = g(f(a'))$ then $f(a) = f(a')$ because $g$ is injective, then $a = a'$ because $f$ is.
(2) Given $c \in C$, pick $b$ with $g(b) = c$, then $a$ with $f(a) = b$; then $g(f(a)) = c$. (3) Combine (1) and (2).
(4) If $f(a) = f(a')$ then applying $g$, $g(f(a)) = g(f(a'))$, so $a = a'$. (5) Given $c$, there is $a$ with
$g(f(a)) = c$, so $b = f(a)$ satisfies $g(b) = c$. $\square$

In (4), $g$ need not be injective. Take $A = \{1\}$, $B = \{1, 2\}$, $C = \{1\}$, $f(1) = 1$ and $g$ the constant map.
Then $g \circ f$ is injective (its domain has one element) but $g$ is not.

### Inverse functions

A function $g : B \to A$ is an **inverse** of $f : A \to B$ if

$$
g \circ f = \mathrm{id}_A \quad\text{and}\quad f \circ g = \mathrm{id}_B,
$$

that is, $g(f(a)) = a$ for all $a$ and $f(g(b)) = b$ for all $b$: $g$ undoes $f$, and $f$ undoes $g$.

**Theorem 6.8.** A function $f : A \to B$ has an inverse if and only if it is a bijection. The inverse is then unique,
written $f^{-1}$, and as a set of pairs it is the inverse relation $\{(b, a) : (a, b) \in f\}$.

*Proof.* Suppose $g$ is an inverse. Since $g \circ f = \mathrm{id}_A$ is injective, $f$ is injective by Theorem 6.7(4).
Since $f \circ g = \mathrm{id}_B$ is surjective, $f$ is surjective by Theorem 6.7(5). So $f$ is a bijection.

Conversely suppose $f$ is a bijection. Consider the inverse relation $g = \{(b, a) : (a, b) \in f\} \subseteq B \times A$.
It is a function: every $b \in B$ has at least one $a$ with $f(a) = b$ (surjective), and at most one (injective). By
construction $g(b)$ is the $a$ with $f(a) = b$, so $f(g(b)) = b$, and $g(f(a))$ is the input that $f$ sends to
$f(a)$, which is $a$. So $g$ is an inverse.

Uniqueness: if $g$ and $g'$ are both inverses, then
$g = g \circ \mathrm{id}_B = g \circ (f \circ g') = (g \circ f) \circ g' = \mathrm{id}_A \circ g' = g'$, using
associativity. $\square$

**Example 6.11.** $f : \mathbb{R} \to \mathbb{R}$, $f(x) = 3x - 7$, has inverse $f^{-1}(y) = (y + 7)/3$. **Check:**
$f^{-1}(f(x)) = (3x - 7 + 7)/3 = x$ and $f(f^{-1}(y)) = 3 \cdot \frac{y+7}{3} - 7 = y$.

**Example 6.12.** If $f$ and $g$ are bijections, $(g \circ f)^{-1} = f^{-1} \circ g^{-1}$: to undo "put on socks, then
shoes" you take off shoes first. **Check:** $(f^{-1} \circ g^{-1}) \circ (g \circ f) = f^{-1} \circ (g^{-1} \circ g)
\circ f = f^{-1} \circ f = \mathrm{id}$, by associativity, and similarly the other way round.

The bijections of a set $A$ to itself, with composition, form a group: composition is associative, $\mathrm{id}_A$ is
the identity, and each bijection has an inverse. This is the symmetric group of
[Algebra, Chapter 13](../algebra/13-Groups.md); the Caesar shifts of the opening are a small part of it.

### One-sided inverses

*Level: advanced.*

Half an inverse corresponds to half a bijection. Let $f : A \to B$ with $A$ nonempty.

- $f$ is injective if and only if it has a **left inverse**, a $g : B \to A$ with $g \circ f = \mathrm{id}_A$. (If $f$
  is injective, define $g(b)$ to be the unique $a$ with $f(a) = b$ when there is one, and some fixed $a_0 \in A$
  otherwise. Conversely, Theorem 6.7(4).)
- $f$ is surjective if and only if it has a **right inverse**, an $h : B \to A$ with $f \circ h = \mathrm{id}_B$.
  (Conversely is Theorem 6.7(5). For the forward direction, for each $b$ the preimage $f^{-1}[\{b\}]$ is nonempty, and
  $h$ must *choose* one element from each.)

That last word matters. When $B$ is infinite and nothing singles out one element in each preimage, "choose one from
each" is not justified by the other axioms of set theory; it is exactly the **axiom of choice** of
[Chapter 8](08-Axiomatic-Set-Theory.md). In fact "every surjection has a right inverse" is equivalent to the axiom of
choice.

## 6.6 Constructing the integers and the rationals

*Level: advanced.*

Suppose all you have are the natural numbers $0, 1, 2, \ldots$ with addition, multiplication and their familiar laws.
Then $3 - 5$ has no answer, and neither does $3 \div 5$. Where do negative numbers and fractions come from? The
schoolbook answer is "we invent them". The set-theoretic answer is that we can *build* them out of what we have, with
equivalence classes, and then prove they behave as expected. Nothing here is how you should think about $-2$ day to
day; it is a proof that the integers need no new assumptions.

### The integers as differences

Think of the pair $(a, b)$ of natural numbers as standing for "$a - b$", a difference we cannot yet compute. Many
pairs stand for the same difference: $(5, 3)$, $(2, 0)$, $(10, 8)$ all mean 2, and $(0, 2)$, $(3, 5)$ both mean $-2$.
When do $(a, b)$ and $(c, d)$ mean the same? When $a - b = c - d$, which (moving terms, so as to use only addition)
means $a + d = b + c$. So on $\mathbb{N} \times \mathbb{N}$ define

$$
(a, b) \sim (c, d) \iff a + d = b + c.
$$

**Lemma 6.9.** $\sim$ is an equivalence relation on $\mathbb{N} \times \mathbb{N}$.

*Proof.* Reflexive: $a + b = b + a$. Symmetric: if $a + d = b + c$ then $c + b = d + a$. Transitive: suppose
$a + d = b + c$ and $c + f = d + e$. Adding, $a + d + c + f = b + c + d + e$. Cancel $c + d$ from both sides
(cancellation holds in $\mathbb{N}$: if $x + z = y + z$ then $x = y$) to get $a + f = b + e$, which says
$(a, b) \sim (e, f)$. $\square$

**Definition.** $\mathbb{Z} = (\mathbb{N} \times \mathbb{N})/{\sim}$: an integer *is* an equivalence class of pairs. We
define

$$
[(a, b)] + [(c, d)] = [(a + c,\ b + d)], \qquad [(a, b)] \cdot [(c, d)] = [(ac + bd,\ ad + bc)].
$$

The formulas come from what we want: $(a - b) + (c - d) = (a + c) - (b + d)$ and
$(a - b)(c - d) = (ac + bd) - (ad + bc)$.

There is a catch. The right-hand sides are computed from *representatives*, and a class has many. If a different
choice of representatives gave a different class, the "definition" would not define anything. So we must prove that
the operations are **well defined**: equivalent inputs give equivalent outputs.

**Lemma 6.10.** If $(a, b) \sim (a', b')$ and $(c, d) \sim (c', d')$, then

1. $(a + c, b + d) \sim (a' + c', b' + d')$, and
2. $(ac + bd, ad + bc) \sim (a'c' + b'd', a'd' + b'c')$.

*Proof.* We have $a + b' = b + a'$ and $c + d' = d + c'$.

(1) We need $(a + c) + (b' + d') = (b + d) + (a' + c')$. The left side is $(a + b') + (c + d')$ and the right side is
$(b + a') + (d + c')$, equal term by term.

(2) Change one pair at a time. First we show $(ac + bd, ad + bc) \sim (a'c + b'd, a'd + b'c)$, which means

$$
ac + bd + a'd + b'c = ad + bc + a'c + b'd.
$$

Group the left side as $c(a + b') + d(b + a')$ and the right side as $c(b + a') + d(a + b')$. Since $a + b' = b + a'$,
call this common value $s$; both sides equal $cs + ds$. By the same argument with the roles of the two pairs
exchanged (multiplication is commutative), changing $(c, d)$ to $(c', d')$ also gives an equivalent result. Then
transitivity joins the two steps. $\square$

Now the familiar integers appear. The natural number $n$ becomes $[(n, 0)]$, and this embedding respects addition and
multiplication: $[(m, 0)] + [(n, 0)] = [(m + n, 0)]$ and $[(m, 0)] \cdot [(n, 0)] = [(mn, 0)]$. The class $[(0, n)]$ is
written $-n$. Every class is one of these: if $a \geq b$ then $(a, b) \sim (a - b, 0)$, and if $a < b$ then
$(a, b) \sim (0, b - a)$. And $[(a, b)] + [(b, a)] = [(a + b, a + b)] = [(0, 0)] = 0$, so every integer has a negative.

**Example 6.13.** Why is $(-1) \cdot (-1) = 1$? Here $-1 = [(0, 1)]$, so
$(-1)(-1) = [(0 \cdot 0 + 1 \cdot 1,\ 0 \cdot 1 + 1 \cdot 0)] = [(1, 0)] = 1$. The rule "minus times minus is plus" is
not a convention; given the definition, it is forced.

**Example 6.14.** Compute $[(2, 5)] \cdot [(4, 1)]$, which should be $(-3) \cdot 3 = -9$. The formula gives
$[(2 \cdot 4 + 5 \cdot 1,\ 2 \cdot 1 + 5 \cdot 4)] = [(13, 22)]$, and $(13, 22) \sim (0, 9)$ because $13 + 9 = 22 + 0$.
**Check:** $[(0, 9)] = -9$.

The laws of arithmetic in $\mathbb{Z}$ (commutativity, associativity, distributivity, $0$ and $1$ as identities) now
follow from the same laws in $\mathbb{N}$ by computing with representatives. Order is defined by
$[(a, b)] \leq [(c, d)]$ when $a + d \leq b + c$, again checked to be well defined.

### The rationals as quotients

Now start from $\mathbb{Z}$, and think of a pair $(p, q)$ with $q \neq 0$ as standing for $p/q$. Two pairs mean the
same fraction when $p/q = r/s$, that is when $ps = qr$. On $\mathbb{Z} \times (\mathbb{Z} \setminus \{0\})$ define

$$
(p, q) \approx (r, s) \iff ps = qr.
$$

**Lemma 6.11.** $\approx$ is an equivalence relation.

*Proof.* Reflexive and symmetric are immediate from $pq = qp$. Transitive: suppose $ps = qr$ and $ru = st$, with
$q, s, u \neq 0$. Multiply the first by $u$ and the second by $q$: $psu = qru$ and $qru = qst$. So $psu = qst$, that is
$s(pu - qt) = 0$. Since $s \neq 0$ and $\mathbb{Z}$ has no zero divisors (a product of nonzero integers is nonzero),
$pu = qt$, which says $(p, q) \approx (t, u)$. $\square$

This is the step where $q \neq 0$ is essential: allow a zero denominator and $(1, 0) \approx (0, 0) \approx (2, 0)$
would force $(1,0) \approx (2,0)$ and much worse; the class of $(0, 0)$ would swallow everything.

**Definition.** $\mathbb{Q} = \left(\mathbb{Z} \times (\mathbb{Z} \setminus \{0\})\right)/{\approx}$. Writing the
class of $(p, q)$ as $\frac{p}{q}$,

$$
\frac{p}{q} + \frac{r}{s} = \frac{ps + qr}{qs}, \qquad \frac{p}{q} \cdot \frac{r}{s} = \frac{pr}{qs}.
$$

Since $q, s \neq 0$, also $qs \neq 0$, so the results are allowed pairs.

**Lemma 6.12.** Addition of rationals is well defined.

*Proof.* Suppose $(p, q) \approx (p', q')$, so $pq' = qp'$. We show
$(ps + qr, qs) \approx (p's + q'r, q's)$, that is

$$
(ps + qr)\, q's = qs\, (p's + q'r).
$$

The left side is $pq'\,s^2 + qq'\,rs$ and the right side is $qp'\,s^2 + qq'\,rs$. These are equal because $pq' = qp'$.
Changing the second fraction instead is the same argument with the roles exchanged, and transitivity combines the two.
$\square$

Multiplication is exercise 11. The integer $n$ becomes $\frac{n}{1}$; every nonzero $\frac{p}{q}$ has the inverse
$\frac{q}{p}$, since $\frac{p}{q} \cdot \frac{q}{p} = \frac{pq}{qp} = \frac11$. So $\mathbb{Q}$ is a **field**, the
smallest one containing $\mathbb{Z}$, and this construction (the **field of fractions**) works for any integral
domain ([Algebra, Chapter 17](../algebra/17-Rings-and-Ideals.md)).

### The rest of the ladder

The same pattern continues. The reals are built from $\mathbb{Q}$, either as Dedekind cuts (certain subsets of
$\mathbb{Q}$) or as equivalence classes of Cauchy sequences of rationals, both in
[Calculus, Chapter 18](../calculus/18-The-Real-Numbers.md). The complex numbers are pairs of reals with
$(a, b)(c, d) = (ac - bd, ad + bc)$, a definition William Rowan Hamilton published in 1837. And the integers mod $n$
are $\mathbb{Z}/{\equiv_n}$, with operations proved well defined just as above. At the bottom of the ladder, the natural
numbers themselves will be built from the empty set in [Chapter 8](08-Axiomatic-Set-Theory.md). Every number system you
use is, in the end, a set, made from nothing.

## A short history

Relations were studied as a part of logic by Augustus De Morgan and Charles Sanders Peirce in the nineteenth century,
and Peirce and Ernst Schröder developed an algebra of relations with composition and converse. The idea of a function
as an arbitrary correspondence, not necessarily a formula, grew through the nineteenth century in analysis, notably in
the work of Dirichlet and Riemann on Fourier series; Dedekind's *Was sind und was sollen die Zahlen?* (1888) used
arbitrary maps, injections and bijections systematically. Once Kuratowski's pair (1921) made ordered pairs into sets,
"a function is a set of ordered pairs" became the standard definition in set theory. Equivalence classes were used
long before they were named: Gauss's *Disquisitiones Arithmeticae* (1801) worked with congruences, and Dedekind's
cuts (1872) and the Cauchy-sequence construction of the reals (Charles Méray and Cantor, around 1870) are quotient
constructions. The construction of $\mathbb{Z}$ and $\mathbb{Q}$ as classes of pairs became standard in textbooks of
the early twentieth century; Edmund Landau's *Grundlagen der Analysis* (1930) builds every step from the Peano axioms
to the complex numbers in full detail.

## Check yourself

??? question "1. On $\{1, 2, 3\}$, let $R = \{(1,1), (2,2), (3,3), (1,2), (2,1)\}$. Which of the four properties does $R$ have? If it is an equivalence relation, list its classes."

    Reflexive: yes, all three loops are there. Symmetric: the only non-loop pairs are $(1,2)$ and $(2,1)$, which match.
    Antisymmetric: no, $1 \mathrel{R} 2$ and $2 \mathrel{R} 1$ with $1 \neq 2$. Transitive: the only two-step paths
    through different elements are $1 \to 2 \to 1$ and $2 \to 1 \to 2$, needing $(1,1)$ and $(2,2)$, which are there.
    So it is an equivalence relation, with classes $\{1, 2\}$ and $\{3\}$.

??? question "2. On $\mathbb{R}$, is $x \sim y$ when $|x - y| \leq 1$ an equivalence relation?"

    It is reflexive ($|x - x| = 0$) and symmetric ($|x - y| = |y - x|$), but not transitive: $0 \sim 1$ and
    $1 \sim 2$, but $|0 - 2| = 2 > 1$, so $0 \not\sim 2$. So it is not an equivalence relation. "Close to" is
    usually not transitive, which is why "approximately equal" cannot be used to sort things into classes.

??? question "3. Let $f : A \to B$ be any function. Show that $a \sim a'$ when $f(a) = f(a')$ is an equivalence relation, and describe its classes."

    Reflexive, symmetric and transitive follow from the same properties of equality: $f(a) = f(a)$; if
    $f(a) = f(a')$ then $f(a') = f(a)$; if $f(a) = f(a')$ and $f(a') = f(a'')$ then $f(a) = f(a'')$. The class of
    $a$ is the set of inputs with the same output, $f^{-1}[\{f(a)\}]$, so the classes are the nonempty **fibres** of
    $f$, one for each value in the image. (In fact every equivalence relation arises this way: take $f(a) = [a]$.)

??? question "4. How many equivalence relations are there on $\{1, 2, 3, 4\}$? Count them by the shapes of their partitions."

    By Theorem 6.2, count partitions. One block of 4: 1 way. Blocks of sizes 3 and 1: choose the singleton, 4 ways.
    Sizes 2 and 2: the partner of 1 can be chosen in 3 ways, then the rest is fixed, 3 ways. Sizes 2, 1, 1: choose the
    pair, $\binom42 = 6$ ways. Four singletons: 1 way. Total $1 + 4 + 3 + 6 + 1 = 15$, the Bell number $B_4$.

??? question "5. In the poset $\{1, 2, 3, 4, 6, 8, 12, 24\}$ under divisibility, find the least and greatest elements, and two incomparable elements. Is it a total order?"

    Every element divides 24 and is divisible by 1, so 1 is least and 24 is greatest. The elements 3 and 4 (or 3 and
    8, or 6 and 8) are incomparable: neither divides the other. So it is not a total order. (These are the divisors of
    24; its Hasse diagram is a $4 \times 2$ grid, from $2^a 3^b$ with $0 \le a \le 3$, $0 \le b \le 1$.)

??? question "6. Let $f : \mathbb{R} \to \mathbb{R}$, $f(x) = x^2 + 2x$. Is $f$ injective? Surjective? Find intervals $A$ and $B$ so that $f : A \to B$ is a bijection, and give the inverse."

    $f(x) = (x + 1)^2 - 1$. Not injective: $f(0) = f(-2) = 0$. Not surjective: $f(x) \geq -1$ always, so $-2$ is not a
    value. On $A = [-1, \infty)$, $x + 1 \geq 0$ and $f$ is strictly increasing, with values filling $B = [-1, \infty)$.
    Solving $y = (x + 1)^2 - 1$ with $x \geq -1$ gives $x = -1 + \sqrt{y + 1}$. **Check:** $f(-1 + \sqrt{y+1}) =
    (y + 1) - 1 = y$.

??? question "7. How many functions, injections and surjections are there from a 4-element set to a 3-element set? From a 3-element set to a 4-element set?"

    From 4 to 3: functions $3^4 = 81$; injections 0 (pigeonhole); surjections
    $3^4 - \binom31 2^4 + \binom32 1^4 = 81 - 48 + 3 = 36$.
    From 3 to 4: functions $4^3 = 64$; injections $4 \cdot 3 \cdot 2 = 24$; surjections 0, since 3 inputs cannot hit 4
    outputs.

??? question "8. Prove: if $g \circ f$ is injective then $f$ is injective. Give an example where $g \circ f$ is injective but $g$ is not."

    If $f(a) = f(a')$, apply $g$: $g(f(a)) = g(f(a'))$. Since $g \circ f$ is injective, $a = a'$. Example:
    $f : \mathbb{N} \to \mathbb{Z}$, $f(n) = n$, and $g : \mathbb{Z} \to \mathbb{N}$, $g(m) = |m|$. Then
    $g \circ f = \mathrm{id}_{\mathbb{N}}$ is injective, but $g(1) = g(-1)$.

??? question "9. Show that $f[X_1 \cap X_2] \subseteq f[X_1] \cap f[X_2]$ always, that equality can fail, and that it holds for all $X_1, X_2$ when $f$ is injective."

    If $y = f(x)$ with $x \in X_1 \cap X_2$, then $y \in f[X_1]$ and $y \in f[X_2]$. Failure: $f(x) = x^2$,
    $X_1 = \{-1\}$, $X_2 = \{1\}$: $f[X_1 \cap X_2] = f[\varnothing] = \varnothing$, but $f[X_1] \cap f[X_2] =
    \{1\}$. If $f$ is injective and $y \in f[X_1] \cap f[X_2]$, then $y = f(x_1) = f(x_2)$ with $x_i \in X_i$;
    injectivity gives $x_1 = x_2 \in X_1 \cap X_2$, so $y \in f[X_1 \cap X_2]$.

??? question "10. In the construction of $\mathbb{Z}$, compute $[(7, 2)] + [(1, 9)]$ and $[(7, 2)] \cdot [(1, 9)]$, reduce each to the form $[(n, 0)]$ or $[(0, n)]$, and check against ordinary arithmetic."

    $[(7, 2)] = 5$ and $[(1, 9)] = -8$. Sum: $[(8, 11)] = [(0, 3)] = -3$, and $5 + (-8) = -3$. Product:
    $[(7 \cdot 1 + 2 \cdot 9,\ 7 \cdot 9 + 2 \cdot 1)] = [(25, 65)] = [(0, 40)] = -40$, and $5 \cdot (-8) = -40$.

??? question "11. Prove that multiplication of rationals, $\frac{p}{q} \cdot \frac{r}{s} = \frac{pr}{qs}$, is well defined."

    Suppose $pq' = qp'$. We need $(pr, qs) \approx (p'r, q's)$, that is $pr \cdot q's = qs \cdot p'r$. The left side
    is $(pq')\,rs$ and the right side is $(qp')\,rs$, equal since $pq' = qp'$. Changing the second factor is the same
    argument, and transitivity combines the two changes.

??? question "12. (Transfinite induction.) Let $(W, \leq)$ be a well-order and $P$ a property such that, for every $x \in W$, if $P(y)$ holds for all $y < x$ then $P(x)$ holds. Prove that $P(x)$ holds for every $x \in W$."

    Suppose not. Then the set $S = \{x \in W : P(x) \text{ fails}\}$ is nonempty, so it has a least element $x_0$.
    Every $y < x_0$ is not in $S$ (it is smaller than the least element), so $P(y)$ holds for all $y < x_0$. By the
    hypothesis $P(x_0)$ holds, contradicting $x_0 \in S$. So $S$ is empty. (With $W = \mathbb{N}$ this is strong
    induction from [Chapter 4](04-Proofs.md); note that no separate base case is needed, because for the least element
    of $W$ the condition "for all $y < x$" is vacuous.)

## What you learned

- A relation is a set of ordered pairs; its key properties are reflexive, symmetric, antisymmetric and transitive.
- Equivalence relations (reflexive, symmetric, transitive) correspond exactly to partitions: the classes are the
  blocks, and a class can be named by any of its members.
- Partial orders (reflexive, antisymmetric, transitive) are drawn as Hasse diagrams; minimal is not the same as least;
  finite posets have minimal elements; a well-order is a total order in which every nonempty subset has a least
  element.
- A function is a relation with exactly one output for each input; it is injective, surjective or bijective according
  to how its arrows land.
- Composition is associative; a function has a two-sided inverse exactly when it is a bijection; a right inverse for
  every surjection is the axiom of choice.
- The integers are classes of pairs of naturals and the rationals are classes of pairs of integers; the work is in
  proving the operations well defined.

**Next:** [Chapter 7](07-Infinity-and-Cardinality.md), which uses bijections to compare the sizes of infinite sets and
finds that some infinities are bigger than others.

## Further reading

- P. R. Halmos, *Naive Set Theory*, 1960. Sections on relations, functions and families.
- H. B. Enderton, *Elements of Set Theory*, 1977. Chapters 3 and 5 construct relations, functions and the number
  systems in full.
- E. Landau, *Grundlagen der Analysis*, 1930 (English translation *Foundations of Analysis*, 1951). From the Peano
  axioms to the complex numbers, every step proved.
- R. Dedekind, *Was sind und was sollen die Zahlen?*, 1888 (English in *Essays on the Theory of Numbers*, 1901).
- D. J. Velleman, *How to Prove It: A Structured Approach*, 1994 (later editions 2006 and 2019). Chapters on relations
  and functions, with many exercises.
- B. A. Davey and H. A. Priestley, *Introduction to Lattices and Order*, 1990 (second edition 2002). Partial orders
  in depth.
- On this site: [Algebra, Chapter 6](../algebra/06-Functions.md) (functions at school level),
  [Number Theory, Chapter 4](../number-theory/04-Congruences.md) (congruence classes),
  [Combinatorics, Chapter 9](../combinatorics/09-Stirling-Numbers-and-Partitions.md) (counting partitions),
  [Calculus, Chapter 18](../calculus/18-The-Real-Numbers.md) (constructing the reals), the U of T guide
  [MAT137 Unit 1: Logic, Sets & Proofs](../../uoft/MAT137/unit01.md), and the Topics lesson
  [Sets](../../topics/logic/level-5/01-sets.md).
