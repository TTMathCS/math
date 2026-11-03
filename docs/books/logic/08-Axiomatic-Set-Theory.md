# 8. Axiomatic set theory

*Russell's paradox ([Chapter 5](05-Sets.md)) showed that "every property defines a set" is false. Yet the last three
chapters built pairs, functions, the integers, the rationals and a ladder of infinities out of sets, and nothing went
wrong. What exactly is allowed? This chapter answers with a short list of axioms, Zermelo-Fraenkel set theory with the
axiom of choice, ZFC, which is the standard foundation of modern mathematics. You will go through the axioms one at a
time and see what each one is for, build the natural numbers out of the empty set, meet the axiom of choice and prove
that it is equivalent to the well-ordering theorem and to Zorn's lemma, and look honestly at its strangest consequence,
the Banach-Tarski paradox.*

!!! abstract "In this chapter"
    **You will learn:**

    - why set theory needs axioms, and what kind of statements the axioms are
    - the ZF axioms one by one: what each says, what it builds, and why it is safe from Russell's paradox
    - how von Neumann made each natural number the set of the numbers before it, and why induction then holds
    - the axiom of choice, its history, and its equivalents: the well-ordering theorem and Zorn's lemma, with proofs
      of the key implications
    - what the Banach-Tarski paradox says, how it works, and what it does not say
    - in what sense ZFC is "the foundation" of mathematics, and what it cannot do

    **You need:** [Chapter 5](05-Sets.md) (sets, Russell's paradox), [Chapter 6](06-Relations-and-Functions.md)
    (functions, orders, well-orders) and [Chapter 7](07-Infinity-and-Cardinality.md) (cardinality). The gentler versions
    are the Topics lessons [Axioms](../../topics/logic/level-8/02-axioms.md),
    [Russell's paradox and sets](../../topics/logic/level-8/03-russells-paradox.md) and
    [Ordinals and cardinals](../../topics/infinity/level-8/05-ordinals-cardinals.md).

    **Levels:** 8.1 is intermediate; 8.2 and 8.3 are advanced; 8.4 is advanced to expert; 8.5 is expert in its proof and
    intermediate in its statement; 8.6 is advanced.

## 8.1 Why axioms

In 1904 Ernst Zermelo published a proof that every set can be well-ordered: its elements can be arranged in a list,
perhaps transfinitely long, in which every nonempty part has a first element. The real numbers, for example, can be
so arranged, although nobody can describe how. The proof used a principle that had been used silently before, that
one can choose an element from each of infinitely many sets at once. Several leading mathematicians, among them Émile
Borel, René Baire, Henri Lebesgue and Giuseppe Peano, objected, and the paradoxes of Russell and Burali-Forti were fresh
in everyone's mind. What was a legitimate way to make a set?

Zermelo's answer, in 1908, was to do for sets what Euclid had done for geometry and what Hilbert had done again in his
*Foundations of Geometry* (1899): write down, explicitly, the assumptions you are allowed to use, and derive everything
else from them. The same year he published a second proof of the well-ordering theorem, now from stated axioms, so
that any critic had to say which axiom he rejected.

### What the axioms are about

In axiomatic set theory there is one kind of object, **sets**, and one basic relation, **membership** $\in$. Everything
else is defined: $\subseteq$, $\cup$, ordered pairs, functions and numbers are all particular sets, as in
[Chapter 5](05-Sets.md) and [Chapter 6](06-Relations-and-Functions.md). (Some versions also allow **urelements**,
objects that are not sets, such as atoms or people. Mathematics never needs them, so ZF has none; every element of a
set is itself a set.)

The axioms are written in the language of **first-order logic** with the single relation symbol $\in$: variables
range over sets, and statements are built from $x \in y$, $x = y$, the connectives $\lnot, \land, \lor, \Rightarrow,
\Leftrightarrow$, and the quantifiers $\forall, \exists$ of [Chapter 3](03-Quantifiers.md). First-order logic itself is
the subject of [Chapter 10](10-First-Order-Logic.md); here we only need that a **formula** is a precise statement in this
language, so "a property" now means "a formula", which closes the door on vague properties like "definable in finitely
many English words".

Most of the axioms are **existence axioms**: each says that, given certain sets, a certain new set exists. The art is
to allow enough sets for all of mathematics and few enough to avoid contradiction. The guiding picture, made precise in
8.2, is that sets are built in **stages**: a set can be formed only from sets that already exist. Russell's $R$ would
need to contain sets formed after it, including itself, so it never gets built.

## 8.2 The ZF axioms one by one

*Level: advanced.*

Here are the axioms of **Zermelo-Fraenkel set theory**, ZF. For each we give the formal statement, what it says in words,
and what it is for. Do not memorise the formulas; read them as precise versions of the words.

### 1. Extensionality

$$
\forall A\, \forall B\, \big(\forall x\,(x \in A \Leftrightarrow x \in B) \Rightarrow A = B\big)
$$

Sets with the same elements are equal. This is the one axiom that is not about existence; it says what a set *is*: no
more than its elements. It gives uniqueness to everything the other axioms produce: there is only one empty set, only one
union of $A$ and $B$, and so on, which is why we can give them names.

### 2. Empty set

$$
\exists E\, \forall x\, (x \notin E)
$$

There is a set with no elements; by extensionality only one, written $\varnothing$. (This axiom can be derived from
Infinity and Separation below, exercise 2, so some lists leave it out.)

### 3. Pairing

$$
\forall a\, \forall b\, \exists P\, \forall x\, (x \in P \Leftrightarrow x = a \lor x = b)
$$

For any sets $a$ and $b$ there is a set $\{a, b\}$ whose elements are exactly $a$ and $b$. Taking $a = b$ gives the
**singleton** $\{a\}$. Pairing twice gives Kuratowski's ordered pair $(a, b) = \{\{a\}, \{a, b\}\}$ from 5.4.

### 4. Union

$$
\forall F\, \exists U\, \forall x\, \big(x \in U \Leftrightarrow \exists Y\,(Y \in F \land x \in Y)\big)
$$

For any set $F$ (think of it as a family of sets) there is a set $\bigcup F$ whose elements are the elements of the
elements of $F$. With pairing it gives the ordinary union: $A \cup B = \bigcup \{A, B\}$, and so $\{a, b, c\} =
\{a, b\} \cup \{c\}$ (exercise 1).

### 5. Power set

$$
\forall A\, \exists P\, \forall X\, (X \in P \Leftrightarrow X \subseteq A)
$$

For any set $A$ there is a set $\mathcal{P}(A)$ of all its subsets. Here $X \subseteq A$ abbreviates
$\forall y\,(y \in X \Rightarrow y \in A)$. This is the axiom that makes sets *big*: by Cantor's theorem
([Chapter 7](07-Infinity-and-Cardinality.md)) it always produces a strictly larger set.

### 6. Separation (a schema)

For every formula $\varphi(x)$ (possibly mentioning other fixed sets as parameters):

$$
\forall A\, \exists S\, \forall x\, \big(x \in S \Leftrightarrow x \in A \land \varphi(x)\big)
$$

Given a set $A$ and a property, the elements of $A$ with the property form a set $\{x \in A : \varphi(x)\}$. This is
Zermelo's repair of naive comprehension (5.5): you can only cut a subset out of a set you already have. It is a
**schema**, one axiom for each formula $\varphi$, so ZF has infinitely many axioms.

Separation gives many familiar sets at once:

- $A \cap B = \{x \in A : x \in B\}$ and $A \setminus B = \{x \in A : x \notin B\}$;
- for a nonempty family $F$, its intersection $\bigcap F = \{x \in Y_0 : \forall Y\,(Y \in F \Rightarrow x \in Y)\}$,
  where $Y_0$ is any member of $F$. For $F = \varnothing$ the condition is vacuous and $\bigcap \varnothing$ would be
  "everything", which is not a set (Theorem 5.10); so $\bigcap \varnothing$ is left undefined.
- **Products.** If $a \in A$ and $b \in B$, then $\{a\}$ and $\{a, b\}$ are subsets of $A \cup B$, so they are elements of
  $\mathcal{P}(A \cup B)$, and the pair $\{\{a\}, \{a, b\}\}$ is a subset of $\mathcal{P}(A \cup B)$, that is, an element of
  $\mathcal{P}(\mathcal{P}(A \cup B))$. So
  $A \times B = \{p \in \mathcal{P}(\mathcal{P}(A \cup B)) : \exists a \in A\ \exists b \in B\ (p = (a, b))\}$ exists by
  separation.
- Relations, functions $A \to B$ (as subsets of $A \times B$), the set $B^A$ of all of them (a subset of
  $\mathcal{P}(A \times B)$), and equivalence classes and quotient sets (subsets of $\mathcal{P}(A)$) all exist the same way.

So the constructions of [Chapter 6](06-Relations-and-Functions.md) are all justified, each by naming the bigger set the
new set is carved out of.

### 7. Infinity

$$
\exists I\, \big(\varnothing \in I \land \forall x\,(x \in I \Rightarrow x \cup \{x\} \in I)\big)
$$

There is a set that contains $\varnothing$ and, along with any $x$, contains $x \cup \{x\}$. A set with these two
properties is called **inductive**. Without this axiom, every set the other axioms can prove to exist is finite; it is
the axiom that says the infinite exists. In 8.3 the smallest inductive set will be $\mathbb{N}$.

### 8. Replacement (a schema)

For every formula $\varphi(x, y)$ that defines a function, in the sense that for each $x$ there is at most one $y$ with
$\varphi(x, y)$:

$$
\forall A\, \exists B\, \forall y\, \big(y \in B \Leftrightarrow \exists x\,(x \in A \land \varphi(x, y))\big)
$$

The image of a set under a definable function is a set: if you replace each element of $A$ by something, the results
form a set. It was added by Abraham Fraenkel and, independently, Thoralf Skolem in 1922, because Zermelo's 1908 list
could not prove that some natural collections are sets. For example, starting from $\mathbb{N}$, Zermelo's axioms give
each of $\mathbb{N}, \mathcal{P}(\mathbb{N}), \mathcal{P}(\mathcal{P}(\mathbb{N})), \ldots$, but not the set
$\{\mathbb{N}, \mathcal{P}(\mathbb{N}), \mathcal{P}(\mathcal{P}(\mathbb{N})), \ldots\}$ of all of them. Replacement,
applied to the function $n \mapsto \mathcal{P}^n(\mathbb{N})$ on $\mathbb{N}$, provides it. Replacement is needed for the
theory of ordinals (8.3), and in particular to show that every well-ordered set is isomorphic to an ordinal.

Separation follows from replacement (use the function that sends $x$ to itself when $\varphi(x)$ holds and is undefined
otherwise), but it is traditional to list both.

### 9. Foundation (regularity)

$$
\forall A\, \big(A \neq \varnothing \Rightarrow \exists y\,(y \in A \land y \cap A = \varnothing)\big)
$$

Every nonempty set $A$ has an element $y$ that shares no element with $A$: an **$\in$-minimal** element, with nothing in
$A$ "below" it. Proposed by John von Neumann in 1925 and included by Zermelo in 1930, this axiom rules out sets that
contain themselves or go round in membership circles.

**Theorem 8.1.** No set is an element of itself, and there are no sets $x, y$ with $x \in y$ and $y \in x$.

*Proof.* Suppose $x \in x$. Apply foundation to $A = \{x\}$: its only element is $x$, so $x \cap \{x\} = \varnothing$.
But $x \in x$ and $x \in \{x\}$, so $x \in x \cap \{x\}$, a contradiction. For the second claim apply foundation to
$\{x, y\}$ (exercise 4). $\square$

Foundation is almost never used in ordinary mathematics; it makes the universe of sets tidier and is used in set
theory itself. What it says is that every set is built in stages from the empty set, which is the picture of 8.1 made
precise. Define, for each stage,

$$
V_0 = \varnothing, \qquad V_{n+1} = \mathcal{P}(V_n),
$$

and continue past the finite stages by taking unions at limits: $V_\omega = \bigcup_n V_n$, $V_{\omega + 1} =
\mathcal{P}(V_\omega)$, and so on through all the ordinals of 8.3. This is the **cumulative hierarchy**. Given the other
axioms, foundation is equivalent to the statement that every set belongs to some $V_\alpha$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 250" role="img" aria-label="The cumulative hierarchy drawn as a V shape opening upwards. Horizontal levels are marked from the bottom: V0 is empty, V1 has 1 element, V2 has 2, V3 has 4, V4 has 16, V5 has 65536; higher up a level V omega contains every hereditarily finite set, including all the natural numbers; the V keeps widening beyond the top of the picture.">
  <polygon points="40,20 150,235 260,20" fill="#9cc9ea" fill-opacity="0.35" stroke="none"/>
  <line x1="40" y1="20" x2="150" y2="235" stroke="currentColor" stroke-width="1.5"/>
  <line x1="260" y1="20" x2="150" y2="235" stroke="currentColor" stroke-width="1.5"/>
  <text x="285" y="239" font-size="12" fill="currentColor">V₀ = ∅</text>
  <line x1="154.0" y1="235" x2="280" y2="235" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3"/>
  <line x1="134.7" y1="205" x2="165.3" y2="205" stroke="currentColor" stroke-width="1"/>
  <text x="285" y="209" font-size="12" fill="currentColor">V₁: 1 element</text>
  <line x1="169.3" y1="205" x2="280" y2="205" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3"/>
  <line x1="121.9" y1="180" x2="178.1" y2="180" stroke="currentColor" stroke-width="1"/>
  <text x="285" y="184" font-size="12" fill="currentColor">V₂: 2 elements</text>
  <line x1="182.1" y1="180" x2="280" y2="180" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3"/>
  <line x1="109.1" y1="155" x2="190.9" y2="155" stroke="currentColor" stroke-width="1"/>
  <text x="285" y="159" font-size="12" fill="currentColor">V₃: 4 elements</text>
  <line x1="194.9" y1="155" x2="280" y2="155" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3"/>
  <line x1="96.3" y1="130" x2="203.7" y2="130" stroke="currentColor" stroke-width="1"/>
  <text x="285" y="134" font-size="12" fill="currentColor">V₄: 16 elements</text>
  <line x1="207.7" y1="130" x2="280" y2="130" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3"/>
  <line x1="83.5" y1="105" x2="216.5" y2="105" stroke="currentColor" stroke-width="1"/>
  <text x="285" y="109" font-size="12" fill="currentColor">V₅: 65536 elements</text>
  <line x1="220.5" y1="105" x2="280" y2="105" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3"/>
  <line x1="55.3" y1="50" x2="244.7" y2="50" stroke="#eea66f" stroke-width="2.5"/>
  <text x="285" y="54" font-size="12" fill="currentColor">Vω: hereditarily finite</text>
  <line x1="248.7" y1="50" x2="280" y2="50" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3"/>
  <text x="150" y="14" font-size="12" text-anchor="middle" fill="currentColor">… keeps growing: Vω+1, Vω+2, …</text>
  <text x="285" y="78" font-size="11" fill="currentColor">(each level is the power set</text>
  <text x="285" y="92" font-size="11" fill="currentColor">of the one below)</text>
</svg>
</div>

**Check:** $|V_1| = |\mathcal{P}(\varnothing)| = 1$, $|V_2| = 2$, $|V_3| = 2^2 = 4$, $|V_4| = 2^4 = 16$,
$|V_5| = 2^{16} = 65536$. The level $V_\omega$ is countably infinite, and contains exactly the **hereditarily finite** sets
(finite sets whose elements are finite, whose elements' elements are finite, and so on), among them all the natural
numbers of 8.3. Russell's $R$ appears at no stage.

### The list, and choice

| | Axiom | In words |
|---|---|---|
| 1 | Extensionality | sets with the same elements are equal |
| 2 | Empty set | $\varnothing$ exists |
| 3 | Pairing | $\{a, b\}$ exists |
| 4 | Union | $\bigcup F$ exists |
| 5 | Power set | $\mathcal{P}(A)$ exists |
| 6 | Separation | $\{x \in A : \varphi(x)\}$ exists |
| 7 | Infinity | an inductive set exists |
| 8 | Replacement | the image of a set under a definable function is a set |
| 9 | Foundation | every nonempty set has an $\in$-minimal element |
| C | Choice | every family of nonempty sets has a choice function (8.4) |

ZF is axioms 1 to 9; **ZFC** is ZF plus the axiom of choice. The list is short, but each line was argued over.

## 8.3 The natural numbers as sets

*Level: advanced.*

What is the number 2? Frege and Russell proposed "the set of all two-element sets", which needs a universal set and fails
in ZF. Zermelo in 1908 used $0 = \varnothing$, $1 = \{\varnothing\}$, $2 = \{\{\varnothing\}\}$, each number the
singleton of the one before. The definition in use today is John von Neumann's (1923):

$$
0 = \varnothing, \qquad n + 1 = n \cup \{n\}.
$$

So the first few numbers are

$$
\begin{aligned}
0 &= \varnothing, \\
1 &= \{0\} = \{\varnothing\}, \\
2 &= \{0, 1\} = \{\varnothing, \{\varnothing\}\}, \\
3 &= \{0, 1, 2\} = \{\varnothing, \{\varnothing\}, \{\varnothing, \{\varnothing\}\}\}.
\end{aligned}
$$

The pattern: **each natural number is the set of all natural numbers before it**, $n = \{0, 1, \ldots, n - 1\}$. This
has three pleasant consequences, which one checks by induction:

- $n$ has exactly $n$ elements, so it is a standard set of size $n$; "$|A| = n$" means "$A$ is in bijection with $n$";
- $m < n$ is the same as $m \in n$, and also the same as $m \subsetneq n$;
- every element of $n$ is also a subset of $n$. A set with this property is called **transitive** (exercise 5).

The operation $x \mapsto x \cup \{x\}$ is called the **successor** $S(x)$.

### The set of natural numbers

The axiom of infinity gives an inductive set $I$, but $I$ may contain extra junk besides $0, 1, 2, \ldots$. We cut it down
to the smallest possible inductive set:

$$
\omega = \{x \in I : x \text{ belongs to every inductive subset of } I\}.
$$

This exists by separation. It is inductive (if $x$ is in every inductive subset, so is $S(x)$), and it is contained in
every inductive set $J$ (because $J \cap I$ is an inductive subset of $I$). So $\omega$ is *the* smallest inductive set,
whatever $I$ we started from. It is what set theorists call $\mathbb{N}$, and its elements are the **natural numbers**.

**Theorem 8.2 (induction).** If $T \subseteq \omega$, $0 \in T$, and $n \in T$ implies $S(n) \in T$, then $T = \omega$.

*Proof.* The hypotheses say $T$ is inductive. Since $\omega$ is contained in every inductive set, $\omega \subseteq T$.
With $T \subseteq \omega$ this gives $T = \omega$. $\square$

So the principle of induction from [Chapter 4](04-Proofs.md), which there was taken as a basic property of numbers, is
here a theorem, proved from the axioms in two lines. The other **Peano axioms** ([Chapter 17](17-Arithmetic-and-Peano.md))
are also theorems:

- **0 is not a successor.** $S(n) = n \cup \{n\}$ contains $n$, so it is not empty.
- **The successor function is injective.** Suppose $S(m) = S(n)$ with $m \neq n$. Then $m \in S(m) = S(n) = n \cup \{n\}$,
  and $m \neq n$, so $m \in n$. In the same way $n \in m$. But $m \in n$ and $n \in m$ is impossible by Theorem 8.1.

Addition and multiplication are then defined by **recursion**:

$$
m + 0 = m, \quad m + S(n) = S(m + n); \qquad m \cdot 0 = 0, \quad m \cdot S(n) = m \cdot n + m.
$$

That these equations define functions on all of $\omega$ is the **recursion theorem**, proved from the axioms by building
the function as the union of all its finite approximations (the full proof is in Enderton's book, Chapter 4). From there,
[Chapter 6](06-Relations-and-Functions.md) builds $\mathbb{Z}$ and $\mathbb{Q}$, and
[Calculus, Chapter 18](../calculus/18-The-Real-Numbers.md) builds $\mathbb{R}$. Every number is a set built from
$\varnothing$.

**Example 8.1.** Compute $2 + 1$ from the definitions. $2 + 1 = 2 + S(0) = S(2 + 0) = S(2) = 2 \cup \{2\} =
\{0, 1\} \cup \{2\} = \{0, 1, 2\} = 3$. **Check:** this is the set listed above for 3.

### Beyond the finite: ordinals

Von Neumann's idea does not stop at $\omega$. The successor of $\omega$ is $\omega + 1 = \omega \cup \{\omega\} =
\{0, 1, 2, \ldots, \omega\}$, then $\omega + 2$, and so on. In general an **ordinal** is a transitive set that is
well-ordered by $\in$. The finite ordinals are the natural numbers, $\omega$ is the first infinite one, and they continue:

$$
0, 1, 2, \ldots, \omega, \omega + 1, \omega + 2, \ldots, \omega \cdot 2, \ldots, \omega^2, \ldots, \omega^\omega, \ldots
$$

Each ordinal is the set of all ordinals before it, just like the natural numbers. Two facts make them the "measuring
sticks" promised in 6.3; both are proved in any set theory text, and the second needs replacement:

- any two ordinals are comparable: $\alpha \in \beta$, $\alpha = \beta$ or $\beta \in \alpha$;
- every well-ordered set is order-isomorphic to exactly one ordinal, its **order type**.

The well-order $0, 2, 4, \ldots, 1, 3, 5, \ldots$ of 6.3 has order type $\omega \cdot 2$, and the lexicographic order on
$\mathbb{N} \times \mathbb{N}$ has order type $\omega^2$. And the ordinals do not form a set (exercise 12): this is the
Burali-Forti paradox, again turned into a theorem.

A **cardinal** is an ordinal not in bijection with any smaller ordinal. The finite cardinals are the natural numbers; the
infinite ones are $\aleph_0 = \omega$, then $\aleph_1$ (the least uncountable ordinal), $\aleph_2$, and so on. With the
axiom of choice every set can be well-ordered (8.4), so every set is in bijection with a unique cardinal, and $|A|$ can
be defined as that cardinal. This is how the alephs of [Chapter 7](07-Infinity-and-Cardinality.md) are made precise.

## 8.4 The axiom of choice

*Level: advanced to expert.*

Bertrand Russell gave a famous illustration (in *Introduction to Mathematical Philosophy*, 1919). Given infinitely many
pairs of boots, you can pick one boot from each pair without any special axiom: take the left one. Given infinitely many
pairs of socks, where the two socks of a pair are indistinguishable, there is no rule that picks one; to say a selection
exists, you need an axiom.

### The statement

A **choice function** for a family $F$ of nonempty sets is a function $c$ defined on $F$ with $c(X) \in X$ for every
$X \in F$: it picks one element from each set in the family.

> **Axiom of choice (AC).** Every family of nonempty sets has a choice function.

For a finite family, AC is provable in ZF (by induction on the number of sets: one choice at a time is just logic). It is
also unnecessary whenever a rule exists: for a family of nonempty subsets of $\mathbb{N}$, "take the least element" is a
choice function. AC is needed when infinitely many choices must be made with no rule to make them, as in "pick a
representative from each equivalence class of $\mathbb{R}$ under $x \sim y \iff x - y \in \mathbb{Q}$". The classes of that
relation are countable dense sets, and nobody has ever described a way to pick one element from each.

### History

Zermelo stated the principle in 1904 in his proof of the well-ordering theorem. The objections were sharp, and an
exchange of five letters among Baire, Borel, Hadamard and Lebesgue (1905) set out the positions: Hadamard accepted the
proof, while the others doubted that a choice "without a rule" was a meaningful mathematical act. It then emerged that
many earlier proofs, including some by the critics, had used choice without saying so. Zermelo replied in 1908 with his
axioms and a second proof. Over the following decades AC became generally accepted because it is needed for so much
ordinary mathematics: every vector space has a basis, every ring with 1 has a maximal ideal, Tychonoff's theorem on
products of compact spaces, the existence of algebraic closures.

The logical status was settled in two halves, by the same people as for the continuum hypothesis
([Chapter 7](07-Infinity-and-Cardinality.md)). **Gödel (1938)**: in the constructible universe $L$, AC holds, so if ZF is
consistent, so is ZFC. **Cohen (1963)**: by forcing, if ZF is consistent, so is ZF plus "AC is false". So AC is
**independent** of ZF: using it can never lead to a contradiction that was not already there, and avoiding it never
forces one.

### Three equivalent forms

Two other principles turn out to be equivalent to AC over ZF.

> **Well-ordering theorem.** Every set can be well-ordered.

> **Zorn's lemma.** Let $(P, \preceq)$ be a nonempty partial order in which every chain (totally ordered subset) has an
> upper bound in $P$. Then $P$ has a maximal element.

(The condition "nonempty" is often dropped by requiring the empty chain to have an upper bound, which gives the same
thing.) Zorn's lemma was found by Kazimierz Kuratowski in 1922 and independently by Max Zorn in 1935, whose formulation for
algebra made it the standard tool. It is the form in which algebraists and analysts use choice: to build a maximal
object (a basis, a maximal ideal, a maximal extension), apply Zorn to the partial order of partial objects.

**Theorem 8.3.** Over ZF, the following are equivalent: (a) the axiom of choice; (b) the well-ordering theorem;
(c) Zorn's lemma.

We prove (b) ⇒ (a) and (c) ⇒ (b) completely, and sketch (a) ⇒ (c).

*Proof of (b) ⇒ (a).* Let $F$ be a family of nonempty sets. Well-order the set $\bigcup F$. Define $c(X)$ = the least
element of $X$ in that well-order. Every $X \in F$ is a nonempty subset of $\bigcup F$, so it has a least element, and $c$
is a choice function. $\square$

*Proof of (c) ⇒ (b).* Let $A$ be any set. Consider the set $\mathcal{W}$ of all pairs $(B, R)$ where $B \subseteq A$ and
$R$ is a well-order on $B$. (It is a set: a subset of $\mathcal{P}(A) \times \mathcal{P}(A \times A)$.) It is nonempty,
since $(\varnothing, \varnothing) \in \mathcal{W}$. Order it by **end-extension**: $(B, R) \preceq (B', R')$ when

- $B \subseteq B'$ and $R'$ agrees with $R$ on $B$, and
- every element of $B' \setminus B$ comes after every element of $B$ in $R'$.

In words, $(B', R')$ continues the list $(B, R)$ by adding new elements at the end only. This is a partial order
(reflexive, antisymmetric and transitive are routine checks).

*Every chain has an upper bound.* Let $\mathcal{C}$ be a chain in $\mathcal{W}$, and let $B^*$ be the union of the sets
$B$ and $R^*$ the union of the orders $R$ over all $(B, R) \in \mathcal{C}$. Any two elements of $B^*$ lie in two members of
the chain, one of which extends the other, so both lie in a single member and are compared there; the members agree with
each other where they overlap, so $R^*$ is a well-defined total order on $B^*$. To see it is a well-order, let
$S \subseteq B^*$ be nonempty. Pick $x \in S$, say $x \in B$ with $(B, R) \in \mathcal{C}$. Then $S \cap B$ is nonempty and
has an $R$-least element $s$. Suppose some $y \in S$ came before $s$ in $R^*$. Then $y$ lies in some $(B', R')$ in the
chain. If $B' \subseteq B$ then $y \in S \cap B$ is $R$-before $s$, which is impossible. If $B \subseteq B'$ then $y$ comes
before $s \in B$ in $R'$, and by the end-extension property elements outside $B$ come *after* all of $B$; so $y \in B$, and
again $y \in S \cap B$ is before $s$, impossible. So $s$ is the least element of $S$. Finally, each $(B, R)$ in the chain is
end-extended by $(B^*, R^*)$, since any new element comes from a later member of the chain, where it follows all of $B$.
So $(B^*, R^*) \in \mathcal{W}$ is an upper bound.

*A maximal element is all of $A$.* By Zorn's lemma $\mathcal{W}$ has a maximal element $(M, R)$. If $M \neq A$, pick
$a \in A \setminus M$ and put it at the end: $M' = M \cup \{a\}$ with $R' = R \cup \{(m, a) : m \in M\} \cup \{(a, a)\}$.
This is a well-order of $M'$ that strictly end-extends $(M, R)$, contradicting maximality. So $M = A$, and $R$ well-orders
$A$. $\square$

*Sketch of (a) ⇒ (c).* Suppose $(P, \preceq)$ satisfies the hypothesis of Zorn's lemma but has no maximal element. Then
every chain $C$ has a *strict* upper bound: it has an upper bound $u$, and $u$ is not maximal, so something is strictly
above $u$. Use a choice function $g$ to pick a strict upper bound $g(C)$ for every chain $C$ at once. Now build a
sequence by transfinite recursion over the ordinals: $x_\alpha = g(\{x_\beta : \beta < \alpha\})$. Each new term is
strictly above all earlier ones, so the earlier terms always form a chain and the recursion never gets stuck. This gives
an injection from *all* the ordinals into the set $P$. But the ordinals do not form a set, and by a theorem of Hartogs
(1915) there is an ordinal that does not inject into $P$, a contradiction. The details need the theory of ordinals and
transfinite recursion; see Jech's *The Axiom of Choice* or Enderton, Chapter 7.

### Other equivalents and consequences

Many statements are equivalent to AC over ZF. A few, with where they appear in this book:

- every surjection has a right inverse ([Chapter 6](06-Relations-and-Functions.md), 6.5);
- any two sets are comparable in size: $|A| \leq |B|$ or $|B| \leq |A|$ (Hartogs, 1915; [Chapter 7](07-Infinity-and-Cardinality.md));
- the product of any family of nonempty sets is nonempty (this is AC restated);
- every vector space has a basis (Andreas Blass proved in 1984 that this implies AC;
  [Linear Algebra, Chapter 5](../linear-algebra/05-Independence-Bases-and-Dimension.md) gives the Zorn argument for the
  other direction).

Here is the standard example of Zorn's lemma at work, the forward direction of the last item.

**Theorem 8.4.** Assuming Zorn's lemma, every vector space $V$ has a basis.

*Proof.* Let $\mathcal{L}$ be the set of linearly independent subsets of $V$, ordered by $\subseteq$. It is nonempty, as
$\varnothing \in \mathcal{L}$. If $\mathcal{C}$ is a chain in $\mathcal{L}$, its union $U$ is linearly independent: a
linear dependence involves only finitely many vectors, these lie in finitely many members of the chain, hence all in the
largest of them, which is independent. So $U$ is an upper bound. By Zorn there is a maximal independent set $B$. If some
$v \in V$ were not in the span of $B$, then $B \cup \{v\}$ would be independent and strictly larger, contradicting
maximality. So $B$ spans $V$, and is a basis. $\square$

For $V = \mathbb{R}$ as a vector space over $\mathbb{Q}$, such a basis (a **Hamel basis**) has cardinality $\mathfrak{c}$,
and no one can write one down; in fact, it is consistent with ZF without choice that none exists.

Weaker forms of choice are often enough. **Countable choice** (every countable family of nonempty sets has a choice
function) gives "countable unions of countable sets are countable" (Theorem 7.5). **Dependent choice** allows a sequence
of choices each depending on the previous ones (exercise 12 of Chapter 7) and is enough for most of analysis. Robert
Solovay showed in 1970 that, assuming the consistency of an inaccessible cardinal (a kind of large cardinal,
[Chapter 20](20-Where-Logic-Goes.md)), ZF plus dependent choice is consistent with "every set of reals is Lebesgue
measurable". So the non-measurable sets of the next section genuinely need more than dependent choice.

## 8.5 The Banach-Tarski paradox

*Level: intermediate statement; expert proof (sketched).*

**Theorem 8.5 (Banach and Tarski, 1924).** A solid ball in three-dimensional space can be cut into finitely many pieces
which, moved only by rotations and translations, can be reassembled into two solid balls, each the same size as the
original.

Raphael Robinson showed in 1947 that five pieces suffice, and that no fewer will do. The theorem uses the axiom of choice,
and this is the reason some people find AC suspicious. Here is what it says and does not say.

### Why it does not contradict anything

Rotations and translations preserve volume. If the pieces had volumes $v_1, \ldots, v_5$, then $v_1 + \cdots + v_5$ would
equal the volume of one ball and also the volume of two balls, which is impossible. So the pieces **have no volume**: they
are not Lebesgue measurable. They are not solid chunks you could cut with a knife but infinitely scattered "clouds" of
points, defined by choosing one point from each of uncountably many sets with no rule. Nothing physical can be cut this
way, since matter is made of atoms, and the paradox makes no prediction about the physical world. What it shows is that
"volume" cannot be extended to *every* subset of space in a way that is additive and unchanged by rigid motions. Volume
is defined on a large family of sets, the measurable ones, and the Banach-Tarski pieces lie outside that family.

Giuseppe Vitali had shown in 1905, also using choice, that there are non-measurable subsets of the line (the set of
representatives of $\mathbb{R}/\mathbb{Q}$ restricted to $[0, 1]$, mentioned in 8.4). Banach-Tarski is the
three-dimensional, much more dramatic version.

### How it works

*Level: expert.* The heart of the matter is a paradox inside a group. Let $F_2$ be the **free group** on two letters $a, b$:
its elements are the **reduced words** in $a, a^{-1}, b, b^{-1}$, strings in which no letter sits next to its own inverse,
such as $a b^{-1} a a b$, and the empty word $e$. Multiplication is putting words side by side and cancelling. For each
letter $x$, let $W(x)$ be the set of reduced words that begin with $x$. Then

$$
F_2 = \{e\} \cup W(a) \cup W(a^{-1}) \cup W(b) \cup W(b^{-1}),
$$

a disjoint union of five pieces. Now the trick: multiplying $W(a^{-1})$ on the left by $a$ cancels the leading $a^{-1}$, and
gives every reduced word that does *not* begin with $a$ (including $e$, from the word $a^{-1}$ itself). So

$$
F_2 = W(a) \cup a\,W(a^{-1}), \qquad F_2 = W(b) \cup b\,W(b^{-1}).
$$

From four of the five pieces we have built *two* complete copies of $F_2$, each by moving one piece. The group has
"doubled itself".

To bring this into space, one needs two rotations of the sphere that generate a free group, so that no nontrivial
reduced word in them is the identity rotation. Such pairs exist; for example, rotations by the angle $\arccos \tfrac13$
about two perpendicular axes work. The group then acts on the sphere, and splits it into orbits. Using the **axiom of
choice**, pick one point from each orbit (there are uncountably many orbits, and no rule picks a point). Every point of the
sphere, apart from a countable set of fixed points of rotations that has to be handled separately, is then uniquely
"a group element applied to a chosen point", and the paradoxical decomposition of $F_2$ transfers to the sphere. This is
**Hausdorff's paradox** (Felix Hausdorff, 1914). Extending from the sphere to the solid ball, by taking radii, and dealing
with the centre and the countable exceptional sets, gives Banach-Tarski. The full proof, about ten pages, is in Wagon's book
listed below.

### Why three dimensions

In the line and the plane there is no such paradox: Stefan Banach showed in 1923 that "area" can be extended to all subsets
of the plane as a finitely additive measure unchanged by rigid motions. The reason, found by von Neumann in 1929, is that
the group of rigid motions of the plane is **amenable** (roughly, too "commutative" to contain a free group), while the
rotations of space contain free groups. Something of the paradox survives in the plane with translations only: Miklós
Laczkovich proved in 1990 that a disc can be cut into finitely many pieces and reassembled into a square of the same area
using translations alone, answering Tarski's 1925 "circle-squaring problem". (The pieces are again non-measurable, and the
number of pieces in his proof is enormous.)

## 8.6 ZFC as the usual foundation

When a mathematician says a theorem is "proved", the unwritten standard is: it could in principle be derived from the
axioms of ZFC. Nobody does that in practice, any more than programmers write machine code, but the translation is
understood, and in disputed cases (as with choice) it is done.

### How mathematics lives inside ZFC

Everything in this book so far is a set:

- natural numbers are von Neumann ordinals (8.3); integers and rationals are equivalence classes of pairs (6.6); real
  numbers are Dedekind cuts or classes of Cauchy sequences ([Calculus, Chapter 18](../calculus/18-The-Real-Numbers.md));
  complex numbers are pairs of reals;
- ordered pairs are Kuratowski pairs (5.4), functions are sets of pairs (6.4);
- a group is a pair (set, operation), a vector space a tuple (set, field, addition, scaling), a topological space a pair
  (set, family of open sets), and so on.

One axiom system therefore underlies algebra, analysis, geometry and combinatorics at once, and a theorem proved in one
area can be used in another without worrying that the two areas have different rules. This unification, carried out in
detail by the Bourbaki group in their *Éléments de mathématique* from 1939 onward, is the main achievement of axiomatic set
theory.

### Classes

Collections like "all sets", "all groups" or "all ordinals" are not sets in ZFC. They are called **proper classes** and
are handled as abbreviations: "$x$ is in the class of groups" just means "$x$ satisfies the formula defining a group".
Some alternative theories, such as **von Neumann-Bernays-Gödel** (NBG) set theory, make classes official objects; NBG
proves exactly the same statements about sets as ZFC, so the choice is a matter of convenience.

### What ZFC cannot do

- **It cannot prove its own consistency.** By Gödel's second incompleteness theorem
  ([Chapter 18](18-Godels-Incompleteness-Theorems.md)), if ZFC is consistent, it cannot prove the statement "ZFC is
  consistent". Our confidence in it rests on the cumulative-hierarchy picture, which makes each axiom look true, and on
  over a century of use without contradiction, not on a proof.
- **It does not settle everything.** The continuum hypothesis is independent of ZFC
  ([Chapter 7](07-Infinity-and-Cardinality.md)), and so, by incompleteness, is some statement about natural numbers.
  Proposed new axioms, especially **large cardinal axioms**, decide some of these questions and are studied in
  [Chapter 20](20-Where-Logic-Goes.md).
- **It has unintended models.** ZFC is a first-order theory with countably many axioms, so by the Löwenheim-Skolem theorem
  ([Chapter 11](11-Completeness-and-Compactness.md)) if it has a model at all, it has a countable one, even though it
  proves that uncountable sets exist. This is **Skolem's paradox**, and its resolution says something deep about what
  "uncountable" means inside a theory.

### Other foundations

ZFC is not the only possible foundation. Most mathematics needs far less: second-order arithmetic, or even weak fragments
of it, suffices for most classical analysis, which is the subject of reverse mathematics
([Chapter 20](20-Where-Logic-Goes.md)). Category theory offers a structural alternative in which objects are known only by
their relations to others. And **type theory**, a descendant of Russell's types (5.5), underlies most modern proof
assistants: Lean and Coq are based on dependent type theories rather than on ZFC, while systems such as Mizar and Metamath
are based on set theories. Formal proofs checked by machine are the subject of [Chapter 19](19-Other-Logics.md) and
[Chapter 20](20-Where-Logic-Goes.md).

## A short history

Zermelo's 1908 paper "Investigations in the foundations of set theory I" gave seven axioms: extensionality, elementary
sets (empty set, singletons, pairs), separation, power set, union, choice and infinity. His notion of a "definite
property" in separation was vague until Skolem (1922) proposed reading it as a first-order formula. Fraenkel and Skolem (1922)
added replacement; von Neumann (1923) defined the ordinals and (1925) proposed foundation, which Zermelo adopted in his
1930 paper on the cumulative hierarchy. The name ZF comes from Zermelo and Fraenkel. The independence results of Gödel
(1938) and Cohen (1963) for choice and the continuum hypothesis showed that the axioms, though they settle almost all of
ordinary mathematics, leave real questions open, and set theory since the 1960s has largely been the study of what can be
added to them.

## Check yourself

??? question "1. Using the ZF axioms, show that for any sets $a, b, c$ the set $\{a, b, c\}$ exists."

    By pairing, $\{a, b\}$ exists, and $\{c\} = \{c, c\}$ exists. By pairing again, $\{\{a, b\}, \{c\}\}$ exists. By union,
    $\bigcup \{\{a, b\}, \{c\}\}$ exists, and its elements are the elements of $\{a, b\}$ and of $\{c\}$: exactly $a, b, c$.
    By extensionality it is the unique set $\{a, b, c\}$.

??? question "2. Show that the empty-set axiom follows from the axioms of infinity and separation."

    Infinity gives some set $I$ (we only need that some set exists). By separation with the formula $x \neq x$, the set
    $\{x \in I : x \neq x\}$ exists. Nothing satisfies $x \neq x$, so this set has no elements. (Strictly, the statement of
    infinity mentions $\varnothing$, so in a list without the empty-set axiom it is phrased as "there is a set $I$ that
    contains some set with no elements, and ...". Either way, the existence of one set plus separation gives
    $\varnothing$.)

??? question "3. Write the von Neumann natural number 4 using only braces and $\varnothing$. How many elements does it have, and how many pairs of braces are needed?"

    $4 = \{0, 1, 2, 3\} = \{\varnothing, \{\varnothing\}, \{\varnothing, \{\varnothing\}\}, \{\varnothing, \{\varnothing\},
    \{\varnothing, \{\varnothing\}\}\}\}$. It has 4 elements. Counting brace pairs: write $b(n)$ for the number needed for
    $n$, with $\varnothing$ written as the symbol, needing none. Then $b(0) = 0$ and $b(n) = 1 + b(0) + \cdots + b(n-1)$,
    giving $b(1) = 1$, $b(2) = 2$, $b(3) = 4$, $b(4) = 8$. In general $b(n) = 2^{n-1}$ for $n \geq 1$: the sets grow
    exponentially, which is one reason nobody computes this way.

??? question "4. Using foundation, prove that there are no sets $x$ and $y$ with $x \in y$ and $y \in x$."

    Apply foundation to $A = \{x, y\}$: some element of $A$ is disjoint from $A$. If it is $x$, then $x \cap \{x, y\} =
    \varnothing$, but $y \in x$ and $y \in \{x, y\}$, so $y \in x \cap A$, a contradiction. If it is $y$, then $x \in y$
    and $x \in A$ give $x \in y \cap A$, again a contradiction. So such $x, y$ do not exist.

??? question "5. Prove by induction that every von Neumann natural number $n$ is transitive: every element of $n$ is a subset of $n$."

    For $0 = \varnothing$ there is nothing to check. Suppose $n$ is transitive and let $x \in S(n) = n \cup \{n\}$. If
    $x \in n$ then $x \subseteq n$ by hypothesis, and $n \subseteq S(n)$, so $x \subseteq S(n)$. If $x = n$ then
    $x = n \subseteq S(n)$. Either way $x \subseteq S(n)$, so $S(n)$ is transitive. By induction (Theorem 8.2) every
    $n \in \omega$ is transitive.

??? question "6. Explain why $\mathbb{N} \times \mathbb{N}$, the set of functions $\mathbb{N} \to \mathbb{N}$, and $\mathcal{P}(\mathbb{R})$ exist in ZF."

    $\omega$ exists (8.3), and $\omega \times \omega$ is carved by separation out of $\mathcal{P}(\mathcal{P}(\omega \cup
    \omega))$ (8.2). A function $\omega \to \omega$ is a subset of $\omega \times \omega$, so the set of all of them is
    carved by separation out of $\mathcal{P}(\omega \times \omega)$, using the formula "is a function from $\omega$ to
    $\omega$". The reals are a set of subsets of $\mathbb{Q}$ (Dedekind cuts), $\mathbb{Q}$ is built from $\omega$ by
    products, power sets and separation (6.6), so $\mathbb{R}$ exists, and then $\mathcal{P}(\mathbb{R})$ by the power
    set axiom.

??? question "7. Give a choice function, without using AC, for the family of all nonempty subsets of $\mathbb{N}$. Why does the same idea not work for the nonempty subsets of $\mathbb{R}$?"

    Let $c(X)$ be the least element of $X$, which exists because $\mathbb{N}$ is well-ordered. For $\mathbb{R}$, "least
    element" fails: $(0, 1)$ has no least element. One would need a well-order of $\mathbb{R}$, and there is no
    definable one in ZF; the existence of any well-order of $\mathbb{R}$ needs (some) choice. Indeed, a choice function
    for the nonempty subsets of $\mathbb{R}$ gives a well-order of $\mathbb{R}$ by transfinite recursion, so the two are
    equally hard.

??? question "8. Prove that the axiom of choice implies every surjection $f : A \to B$ has a right inverse, and conversely."

    Given a surjection $f$, the sets $f^{-1}[\{b\}]$ for $b \in B$ are nonempty. A choice function $c$ for this family gives
    $h(b) = c(f^{-1}[\{b\}])$, and $f(h(b)) = b$. Conversely, let $F$ be a family of nonempty sets. Let
    $A = \{(X, x) : X \in F, x \in X\}$ and $f : A \to F$, $f(X, x) = X$. Each $X$ is nonempty, so $f$ is surjective. A
    right inverse $h$ satisfies $f(h(X)) = X$, so $h(X) = (X, x)$ with $x \in X$, and $X \mapsto$ (second coordinate of
    $h(X)$) is a choice function.

??? question "9. In the free group $F_2$, verify $a\,W(a^{-1}) = F_2 \setminus W(a)$. Which word of $W(a^{-1})$ goes to $e$, and what does $a^{-1} b$ become?"

    A word in $W(a^{-1})$ is $a^{-1} u$ with $u$ reduced and not beginning with $a$. Then $a \cdot a^{-1} u = u$, which
    does not begin with $a$. Conversely, any reduced $u$ not beginning with $a$ gives the reduced word $a^{-1} u$ in
    $W(a^{-1})$ (no cancellation, since $u$ does not start with $a$), and $a \cdot a^{-1} u = u$. So the image is exactly
    the words not beginning with $a$. The word $a^{-1}$ (with $u = e$) goes to $e$; and $a^{-1} b$ goes to $b$.

??? question "10. Why can the pieces in the Banach-Tarski paradox not all be Lebesgue measurable? Explain with volumes."

    Lebesgue measure is countably additive and invariant under rotations and translations. If the ball $K$ of volume $V > 0$
    were split into measurable pieces $P_1, \ldots, P_n$, then $V = \sum \mathrm{vol}(P_i)$. The moved pieces have the same
    volumes and make up two disjoint balls of total volume $2V$, so $2V = \sum \mathrm{vol}(P_i) = V$, forcing $V = 0$, false.
    So at least one piece is not measurable.

??? question "11. Show that the set $\{\omega, \mathcal{P}(\omega), \mathcal{P}(\mathcal{P}(\omega)), \ldots\}$ exists in ZF, and say which axiom is essential."

    By the recursion theorem there is a formula $\varphi(n, y)$ expressing "$y = \mathcal{P}^n(\omega)$" (the $n$-fold power
    set), and for each $n \in \omega$ exactly one such $y$. By **replacement** applied to $\omega$, the set
    $\{y : \exists n \in \omega\ \varphi(n, y)\}$ exists, and it is the set required. Replacement is essential: in Zermelo's
    1908 system without it, this set cannot be proved to exist (the level $V_{\omega + \omega}$ of the cumulative
    hierarchy satisfies Zermelo's axioms but does not contain it).

??? question "12. (Burali-Forti, as a theorem.) Assume two facts: every transitive set of ordinals is an ordinal, and every element of an ordinal is an ordinal. Show that there is no set containing all ordinals."

    Suppose $\Omega$ is a set containing every ordinal. By separation, $\mathrm{Ord} = \{x \in \Omega : x \text{ is an
    ordinal}\}$ is a set whose elements are exactly the ordinals. It is transitive: if $\alpha \in \mathrm{Ord}$ and
    $x \in \alpha$, then $x$ is an ordinal by the second fact, so $x \in \mathrm{Ord}$. By the first fact, $\mathrm{Ord}$ is
    itself an ordinal, so $\mathrm{Ord} \in \mathrm{Ord}$. That contradicts Theorem 8.1. So no such $\Omega$ exists.

## What you learned

- Axiomatic set theory has one relation, $\in$, and a short list of axioms saying which sets exist; the guiding picture is
  that sets are built in stages from $\varnothing$.
- Separation (only carve subsets from existing sets) replaces naive comprehension and blocks Russell's paradox;
  replacement and power set make big sets; infinity makes an infinite one; foundation forbids $x \in x$.
- Von Neumann's naturals, $n = \{0, \ldots, n - 1\}$, make induction a theorem; the ordinals continue them into the
  transfinite and measure every well-order.
- The axiom of choice is independent of ZF (Gödel 1938, Cohen 1963) and equivalent to the well-ordering theorem and to
  Zorn's lemma; Zorn's lemma is how it is used, for example to give every vector space a basis.
- Banach-Tarski: with choice, a ball can be cut into five non-measurable pieces and rearranged into two balls; it shows
  that volume cannot be defined for all sets, not that matter can be doubled.
- ZFC is the standard foundation: all of ordinary mathematics can be coded in it, but it cannot prove its own consistency
  and leaves questions such as the continuum hypothesis open.

**Next:** [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md), where logic itself becomes the object of study: what a
formal proof is, and why the proof rules for propositional logic prove exactly the tautologies.

## Further reading

- E. Zermelo, "Investigations in the foundations of set theory I", 1908, in J. van Heijenoort (editor), *From Frege to
  Gödel*, 1967, which also contains Fraenkel's and Skolem's 1922 papers and von Neumann's 1923 paper on ordinals.
- H. B. Enderton, *Elements of Set Theory*, 1977. The axioms, the natural numbers, ordinals and choice, at first-course
  level.
- P. R. Halmos, *Naive Set Theory*, 1960. Despite the title, an axiomatic treatment in plain words.
- K. Kunen, *Set Theory: An Introduction to Independence Proofs*, 1980. The graduate text, through forcing.
- T. Jech, *The Axiom of Choice*, 1973, and *Set Theory*, 1978 (third millennium edition 2003).
- G. H. Moore, *Zermelo's Axiom of Choice: Its Origins, Development, and Influence*, 1982. The history, carefully told.
- S. Wagon, *The Banach-Tarski Paradox*, 1985 (second edition with G. Tomkowicz, 2016).
- H. Herrlich, *Axiom of Choice*, 2006. What goes wrong in mathematics without it.
- On this site: the Topics lessons [Axioms](../../topics/logic/level-8/02-axioms.md),
  [Russell's paradox and sets](../../topics/logic/level-8/03-russells-paradox.md) and
  [Ordinals and cardinals](../../topics/infinity/level-8/05-ordinals-cardinals.md);
  [Linear Algebra, Chapter 5](../linear-algebra/05-Independence-Bases-and-Dimension.md) (bases and Zorn's lemma);
  [Calculus, Chapter 18](../calculus/18-The-Real-Numbers.md) (building the reals); and the
  [Algebra book](../algebra/index.md) (groups, including the free groups behind Banach-Tarski).
