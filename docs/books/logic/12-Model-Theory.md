# 12. Model theory

*The last two chapters showed that a set of first-order axioms never pins down an infinite structure: there are always
models of other sizes, and sometimes strange ones of the same size. Model theory turns this from a complaint into a
subject. Instead of asking "which structure do these axioms describe?", it asks "what do all the models of these
axioms have in common, and how do they differ?" In this chapter you will meet theories and their models, the idea of
two structures that no sentence can tell apart, complete theories and a test for completeness, Cantor's back-and-forth
proof that every countable dense order looks like the rationals, Tarski's quantifier elimination for the real numbers,
and ultraproducts, which build new models by a kind of majority vote. Along the way, logic proves a theorem about
polynomials over the complex numbers by counting in finite fields.*

!!! abstract "In this chapter"
    **You will learn:**

    - theories, models, complete theories, and why the theory of a structure is always complete
    - elementary equivalence and elementary substructures, with the Tarski-Vaught test
    - categoricity and the Łoś-Vaught test, with dense orders, algebraically closed fields and vector spaces
    - Cantor's back-and-forth argument, in full, and why $(\mathbb{Q}, <)$ and $(\mathbb{R}, <)$ satisfy the same sentences
    - quantifier elimination, for dense orders (with proof) and for the real field (Tarski's theorem)
    - ultrafilters, ultraproducts and Łoś's theorem, and the Ax-Grothendieck theorem

    **You need:** [Chapter 10](10-First-Order-Logic.md) (structures, satisfaction, isomorphisms, definable sets) and
    [Chapter 11](11-Completeness-and-Compactness.md) (compactness and Löwenheim-Skolem). Fields and their characteristic
    from [Algebra, Chapter 19](../algebra/19-Fields-and-Extensions.md); Zorn's lemma from
    [Chapter 8](08-Axiomatic-Set-Theory.md) for 12.6.

    **Levels:** 12.1 to 12.4 are advanced; 12.5 and 12.6 are expert.

## 12.1 Theories and models

*Level: advanced.*

In algebra you learned the axioms of a group and then studied all groups at once. Model theory does the same thing one
level up: it studies sets of axioms and all their models at once, using only the fact that the axioms are first-order
sentences.

**Definitions.** Fix a language $L$.

- An **$L$-theory** is a set $T$ of $L$-sentences. A **model** of $T$ is a structure in which every sentence of $T$ is
  true; $\mathrm{Mod}(T)$ is the class of models.
- $T \models \sigma$ means every model of $T$ satisfies $\sigma$. By Gödel's theorem this is the same as $T \vdash \sigma$.
- $T$ is **complete** if it is consistent and, for every sentence $\sigma$, either $T \models \sigma$ or
  $T \models \neg\sigma$.
- For a structure $\mathcal{M}$, the **theory of $\mathcal{M}$**, $\mathrm{Th}(\mathcal{M})$, is the set of all
  sentences true in $\mathcal{M}$.
- A class of structures is **axiomatisable** if it is $\mathrm{Mod}(T)$ for some $T$, and **finitely axiomatisable** if
  some finite (equivalently, by taking the conjunction, single-sentence) $T$ will do.

**$\mathrm{Th}(\mathcal{M})$ is always complete.** Each sentence is either true or false in $\mathcal{M}$, so either
$\sigma$ or $\neg\sigma$ belongs to $\mathrm{Th}(\mathcal{M})$, and then it is certainly a consequence. The interesting
question goes the other way: given a natural, *small* set of axioms $T$, is it complete? If so, the axioms decide every
first-order question about any model, and in particular they give us all of $\mathrm{Th}(\mathcal{M})$ for each model
$\mathcal{M}$.

**Examples.**

| Theory | Axioms | Some models | Complete? |
|---|---|---|---|
| groups | 3 axioms (10.3) | all groups | no: "abelian" is undecided |
| DLO | linear, dense, no endpoints, at least 2 elements | $\mathbb{Q}$, $\mathbb{R}$, $\mathbb{Q} \cap (0, 1)$ | yes (12.4) |
| $\mathrm{ACF}_p$ | field, algebraically closed (a scheme), characteristic $p$ | $\overline{\mathbb{F}_p}$; for $p = 0$, $\mathbb{C}$ and $\overline{\mathbb{Q}}$ | yes (12.3) |
| $\mathrm{RCF}$ | ordered field, positives have square roots, odd-degree polynomials have roots | $\mathbb{R}$, the real algebraic numbers | yes (12.5) |
| $\mathrm{Th}(\mathcal{N})$ | all true sentences of arithmetic | $\mathbb{N}$, nonstandard models | yes, but not axiomatisable by any algorithm ([Chapter 18](18-Godels-Incompleteness-Theorems.md)) |

Here $\overline{\mathbb{F}_p}$ is the algebraic closure of the field with $p$ elements, and $\overline{\mathbb{Q}}$ the
field of algebraic numbers (complex numbers that are roots of nonzero polynomials with rational coefficients).

### Maps between structures

An **embedding** $h : \mathcal{M} \to \mathcal{N}$ is an injective map that preserves constants, functions and relations
in both directions, exactly like an isomorphism except that it need not be onto. If $M \subseteq N$ and the inclusion
map is an embedding, $\mathcal{M}$ is a **substructure** of $\mathcal{N}$: for example $(\mathbb{Z}, +)$ is a
substructure of $(\mathbb{Q}, +)$, and $(\mathbb{Q}, <)$ of $(\mathbb{R}, <)$.

Embeddings preserve **quantifier-free** formulas: if $\varphi(\bar x)$ has no quantifiers, then
$\mathcal{M} \models \varphi[\bar a]$ iff $\mathcal{N} \models \varphi[h(\bar a)]$ (induction on $\varphi$, as in the
isomorphism lemma of 10.2, without the quantifier step). They need not preserve anything else.
$(\mathbb{Z}, +) \subseteq (\mathbb{Q}, +)$, but $\exists y\, (y + y = x)$ is true of $1$ in $\mathbb{Q}$ and false of
$1$ in $\mathbb{Z}$.

## 12.2 Elementary equivalence

*Level: advanced.*

**Definition.** Two $L$-structures are **elementarily equivalent**, $\mathcal{M} \equiv \mathcal{N}$, if they satisfy
exactly the same $L$-sentences: $\mathrm{Th}(\mathcal{M}) = \mathrm{Th}(\mathcal{N})$.

"Elementary" is an old word for "first-order". Elementarily equivalent structures are indistinguishable by anything
that can be *said* in the language.

**Isomorphic structures are elementarily equivalent.** This is the isomorphism lemma of
[Chapter 10](10-First-Order-Logic.md), applied to sentences.

**The converse fails.** By upward Löwenheim-Skolem ([Chapter 11](11-Completeness-and-Compactness.md)), every infinite
$\mathcal{M}$ (in a countable language) has an elementarily equivalent model of every infinite size, and structures of
different sizes are not isomorphic. A more surprising failure, proved in 12.4: $(\mathbb{Q}, <) \equiv (\mathbb{R}, <)$.

### Telling structures apart

To show $\mathcal{M} \not\equiv \mathcal{N}$, find one sentence true in one and false in the other.

| Structures | A sentence that separates them | True in |
|---|---|---|
| $(\mathbb{Z}, <)$ and $(\mathbb{Q}, <)$ | $\forall x\, \forall y\, (x < y \to \exists z\, (x < z \land z < y))$ (density) | $\mathbb{Q}$ only |
| $(\mathbb{N}, <)$ and $(\mathbb{Z}, <)$ | $\exists x\, \forall y\, \neg(y < x)$ (a least element) | $\mathbb{N}$ only |
| $(\mathbb{Z}, +)$ and $(\mathbb{Q}, +)$ | $\forall x\, \exists y\, (y + y = x)$ (halving) | $\mathbb{Q}$ only |
| $(\mathbb{Q}, +, \cdot)$ and $(\mathbb{R}, +, \cdot)$ | $\exists x\, (x \cdot x = 1 + 1)$ (a square root of 2) | $\mathbb{R}$ only |
| $(\mathbb{R}, +, \cdot)$ and $(\mathbb{C}, +, \cdot)$ | $\exists x\, (x \cdot x + 1 = 0)$ | $\mathbb{C}$ only |

Showing $\mathcal{M} \equiv \mathcal{N}$ is much harder: you must deal with *all* sentences at once. The rest of the
chapter gives three tools for this: categoricity (12.3), back-and-forth (12.4) and quantifier elimination (12.5).

### Elementary substructures

A substructure can be very different from the structure containing it. We single out the substructures that are
indistinguishable from the big structure even when we may name their elements.

**Definition.** $\mathcal{M} \subseteq \mathcal{N}$ is an **elementary substructure**, $\mathcal{M} \preceq \mathcal{N}$,
if for every formula $\varphi(x_1, \dots, x_n)$ and all $a_1, \dots, a_n \in M$:

$$
\mathcal{M} \models \varphi[a_1, \dots, a_n] \iff \mathcal{N} \models \varphi[a_1, \dots, a_n].
$$

**Example.** Let $\mathcal{N} = (\mathbb{N}, <)$ and $\mathcal{M}$ the substructure on $\{1, 2, 3, \dots\}$. The map
$n \mapsto n + 1$ is an isomorphism from $\mathcal{N}$ onto $\mathcal{M}$, so $\mathcal{M} \equiv \mathcal{N}$. But
$\mathcal{M} \not\preceq \mathcal{N}$: the formula $\forall y\, \neg(y < x)$ ("$x$ is least") is true of $1$ in
$\mathcal{M}$ and false of $1$ in $\mathcal{N}$, where $0 < 1$. So elementary substructure is stronger than "a
substructure that is elementarily equivalent".

How can we check $\preceq$ without going through every formula? The quantifier steps are the only danger, and the next
test says: it is enough that the small structure contains witnesses for existential statements that the big structure
makes about the small structure's elements.

**Theorem (Tarski-Vaught test).** Let $\mathcal{M} \subseteq \mathcal{N}$. Then $\mathcal{M} \preceq \mathcal{N}$ if and
only if, for every formula $\varphi(\bar x, y)$ and every tuple $\bar a$ from $M$:

$$
\text{if } \mathcal{N} \models \exists y\, \varphi[\bar a, y], \text{ then } \mathcal{N} \models \varphi[\bar a, b] \text{ for some } b \in M.
$$

*Proof.* If $\mathcal{M} \preceq \mathcal{N}$ and $\mathcal{N} \models \exists y\, \varphi[\bar a, y]$, then
$\mathcal{M} \models \exists y\, \varphi[\bar a, y]$, so there is $b \in M$ with $\mathcal{M} \models \varphi[\bar a, b]$,
and by elementarity again $\mathcal{N} \models \varphi[\bar a, b]$.

Conversely, assume the condition. We prove by induction on $\psi$ that $\mathcal{M} \models \psi[\bar a]$ iff
$\mathcal{N} \models \psi[\bar a]$ for all $\bar a$ in $M$. Atomic formulas: $\mathcal{M}$ is a substructure. $\neg$ and
$\to$: immediate. For $\exists y\, \varphi$ (which covers $\forall$, as $\neg\exists\neg$): if
$\mathcal{M} \models \exists y\, \varphi[\bar a, y]$, pick $b \in M$ with $\mathcal{M} \models \varphi[\bar a, b]$; by
induction $\mathcal{N} \models \varphi[\bar a, b]$, so $\mathcal{N} \models \exists y\, \varphi[\bar a, y]$. If
$\mathcal{N} \models \exists y\, \varphi[\bar a, y]$, the condition gives $b \in M$ with
$\mathcal{N} \models \varphi[\bar a, b]$; by induction $\mathcal{M} \models \varphi[\bar a, b]$. Note that the
condition is about $\mathcal{N}$ only, so there is no circularity. $\square$

The downward Löwenheim-Skolem theorem in its strong form is proved this way: start with any countable subset of
$\mathcal{N}$ and keep adding witnesses (countably many formulas, countably many tuples, so countably many witnesses at
each of countably many rounds); the result passes the Tarski-Vaught test.

## 12.3 Complete theories and categoricity

*Level: advanced.*

How can we prove a theory is complete? One way is to show it has essentially only one model of some size.

**Definition.** For an infinite cardinal $\kappa$, a theory $T$ is **$\kappa$-categorical** if it has a model of size
$\kappa$ and any two models of size $\kappa$ are isomorphic. "$\aleph_0$-categorical" means "all countable models are
isomorphic" ($\aleph_0$ is the size of $\mathbb{N}$, see [Chapter 7](07-Infinity-and-Cardinality.md)).

**Theorem (Łoś-Vaught test).** Let $T$ be a consistent theory in a countable language with no finite models. If $T$ is
$\kappa$-categorical for some infinite cardinal $\kappa$, then $T$ is complete.

*Proof.* Suppose $T$ is not complete: for some sentence $\sigma$, neither $T \models \sigma$ nor $T \models \neg\sigma$.
Then $T \cup \{\neg\sigma\}$ and $T \cup \{\sigma\}$ both have models. These models are infinite, since $T$ has no
finite models. By the Löwenheim-Skolem theorems (down and up, [Chapter 11](11-Completeness-and-Compactness.md)), each
of the two theories has a model of size exactly $\kappa$. By $\kappa$-categoricity these two models are isomorphic, but
one satisfies $\sigma$ and the other $\neg\sigma$, which isomorphic structures cannot do. $\square$

Jerzy Łoś and Robert Vaught found this test independently in 1954. The hypothesis "no finite models" matters: the
theory with the single axiom "there are at most two elements" is vacuously $\kappa$-categorical for every infinite
$\kappa$ (it has no infinite models), yet it is not complete.

### Example 1: infinite sets

In the empty language, let $T_\infty = \{\lambda_n : n \ge 1\}$ ("at least $n$ elements", for each $n$). Its models are
the infinite sets, and two sets of the same size are isomorphic (any bijection is an isomorphism, because there is no
structure to preserve). So $T_\infty$ is $\kappa$-categorical for every infinite $\kappa$, and by Łoś-Vaught it is
complete. Every sentence about pure equality is either true in all infinite sets or false in all of them.

### Example 2: algebraically closed fields

**Theorem (Steinitz, 1910).** Two algebraically closed fields of the same characteristic and the same transcendence
degree over their prime field are isomorphic.

(The **transcendence degree** is the size of a maximal algebraically independent set, the "dimension" of the field over
$\mathbb{Q}$ or $\mathbb{F}_p$; see [Algebra, Chapter 19](../algebra/19-Fields-and-Extensions.md).) If an algebraically
closed field has uncountable size $\kappa$, its transcendence degree must be $\kappa$ (a field of transcendence degree
$\lambda$ has size $\max(\lambda, \aleph_0)$). So:

**Corollary.** For $p$ zero or prime, $\mathrm{ACF}_p$ is $\kappa$-categorical for every uncountable $\kappa$, and hence
complete.

It is not $\aleph_0$-categorical: $\overline{\mathbb{Q}}$ (transcendence degree 0), the algebraic closure of
$\mathbb{Q}(t)$ (degree 1), of $\mathbb{Q}(t_1, t_2)$ (degree 2), and so on, are countable and pairwise non-isomorphic.

Completeness of $\mathrm{ACF}_0$ is a precise form of the **Lefschetz principle** of algebraic geometry: a first-order
statement in the language of rings is true in $\mathbb{C}$ if and only if it is true in every algebraically closed field
of characteristic 0, if and only if it is true in *some* such field. Combined with the transfer theorem of 11.3, we get
more:

**Theorem.** For a sentence $\sigma$ in the language of rings, the following are equivalent:

1. $\sigma$ is true in $\mathbb{C}$;
2. $\mathrm{ACF}_0 \models \sigma$;
3. there is $N$ such that $\mathrm{ACF}_p \models \sigma$ for every prime $p > N$;
4. $\mathrm{ACF}_p \models \sigma$ for infinitely many primes $p$.

*Proof.* (1) $\Leftrightarrow$ (2) by completeness of $\mathrm{ACF}_0$. (2) $\Rightarrow$ (3) by compactness, as in
11.3: $\mathrm{ACF}_0 \models \sigma$ uses only finitely many axioms $\neg(\underline{p} = 0)$. (3) $\Rightarrow$ (4)
is clear. (4) $\Rightarrow$ (2): if $\mathrm{ACF}_0 \not\models \sigma$, then by completeness
$\mathrm{ACF}_0 \models \neg\sigma$, so by (2) $\Rightarrow$ (3) for $\neg\sigma$, $\mathrm{ACF}_p \models \neg\sigma$
for all large $p$, contradicting (4). $\square$

### A theorem about polynomials, proved by logic

**Theorem (Ax-Grothendieck).** If $f : \mathbb{C}^n \to \mathbb{C}^n$ is a polynomial map (each coordinate is a
polynomial in $n$ variables) and $f$ is injective, then $f$ is surjective.

For $n = 1$ this is easy (exercise 11). For $n \ge 2$ it is a real theorem; James Ax (1968-69) and Alexander Grothendieck
(1966) proved it independently. Here is Ax's proof.

*Step 1: finite fields.* If $K$ is a finite field, an injective map $K^n \to K^n$ is surjective, because $K^n$ is a
finite set.

*Step 2: $\overline{\mathbb{F}_p}$.* The field $\overline{\mathbb{F}_p}$ is the union of an increasing chain of finite
fields (the fields $\mathbb{F}_{p^{k!}}$, $k = 1, 2, \dots$). Let $f$ be an injective polynomial map on
$\overline{\mathbb{F}_p}^{\,n}$ and $\bar b$ a point we want to hit. Choose a finite field $K$ in the chain containing
all coefficients of $f$ and all coordinates of $\bar b$. Then $f$ maps $K^n$ into $K^n$ (sums and products of elements
of $K$ stay in $K$), injectively, so surjectively by Step 1. So $\bar b = f(\bar a)$ for some $\bar a \in K^n$.

*Step 3: say it in first-order logic.* Fix $n$ and a bound $d$ on the degrees. "Every injective polynomial map of degree
at most $d$ in $n$ variables is surjective" is a single sentence $\sigma_{n,d}$ in the language of rings: quantify over
the finitely many coefficients ("for all $a_1, \dots, a_m$"), and write "the map with these coefficients is injective"
and "is surjective" with quantifiers over $n$-tuples. By Step 2, $\sigma_{n,d}$ is true in $\overline{\mathbb{F}_p}$
for every prime $p$, so $\mathrm{ACF}_p \models \sigma_{n,d}$ by completeness.

*Step 4: transfer.* By the theorem above ((4) $\Rightarrow$ (1)), $\sigma_{n,d}$ is true in $\mathbb{C}$. Since $n$ and
$d$ were arbitrary, the theorem is proved. $\square$

The proof never touches a complex number. It counts in finite fields and lets logic carry the result to $\mathbb{C}$.
This is a model example of what model theory is for.

### Example 3: vector spaces over $\mathbb{Q}$

Use the language with $0$, $+$, and for each rational $q$ a unary function symbol "multiply by $q$" (a countable
language). The theory of non-zero vector spaces over $\mathbb{Q}$ has finitely many axioms for the abelian group and
countably many for the scalars, plus $\exists x\, \neg(x = 0)$. A $\mathbb{Q}$-vector space of dimension $\lambda$ has
size $\max(\lambda, \aleph_0)$, so for uncountable $\kappa$ every model of size $\kappa$ has dimension $\kappa$, and two
such are isomorphic (map a basis to a basis). So the theory is $\kappa$-categorical for uncountable $\kappa$ and
complete. It is not $\aleph_0$-categorical: $\mathbb{Q}$, $\mathbb{Q}^2$, $\mathbb{Q}^3$, ... are all countable.

### Morley's theorem

Notice the pattern: $\mathrm{ACF}_p$ and $\mathbb{Q}$-vector spaces are categorical in *every* uncountable size, and
DLO (12.4) only in the countable one. Jerzy Łoś asked whether a countable theory categorical in one uncountable size
must be categorical in all of them. Michael Morley proved it in 1965:

**Theorem (Morley, 1965).** If a countable complete theory is $\kappa$-categorical for some uncountable $\kappa$, it is
$\kappa$-categorical for every uncountable $\kappa$.

The proof is long, and it started a large part of modern model theory: Saharon Shelah's **stability theory**, from the
1970s on, classifies theories by how many models they have of each size, and uses dimension-like invariants, like the
basis of a vector space and the transcendence basis of a field, to describe models.

### Complete theories are decidable

A theory is **recursively axiomatised** if an algorithm can list its axioms (for example, finitely many axioms plus
some schemes).

**Theorem.** A complete, recursively axiomatised theory $T$ is **decidable**: there is an algorithm that, given a
sentence $\sigma$, decides whether $T \models \sigma$.

*Proof.* List all derivations from $T$, one after another (possible because the axioms and the proof rules can be
listed). By completeness of $T$, either $\sigma$ or $\neg\sigma$ is derivable, so one of them eventually appears. Answer
"yes" or "no" accordingly. (If $T$ is inconsistent, answer "yes" always.) $\square$

So DLO, $\mathrm{ACF}_p$, the theory of infinite sets and $\mathbb{Q}$-vector spaces are all decidable. Compare
[Chapter 14](14-Undecidability.md), where most theories turn out undecidable, and
[Chapter 18](18-Godels-Incompleteness-Theorems.md), where arithmetic is shown not to have any complete, recursively
axiomatised theory.

## 12.4 Dense linear orders: Cantor's back-and-forth

*Level: advanced.*

Here is the first theorem of model theory, proved before the subject existed.

**Theorem (Cantor, 1895).** Any two countable dense linear orders without endpoints are isomorphic. In particular each
is isomorphic to $(\mathbb{Q}, <)$.

This is startling. $(\mathbb{Q}, <)$, the rationals in $(0, 1)$, the dyadic fractions $k/2^m$ in $(0, 1)$, the rationals
together with $\sqrt{2}$, and the algebraic real numbers are all countable dense orders without endpoints, so they are
all order-isomorphic. There is an order-preserving bijection from $\mathbb{Q}$ onto $\mathbb{Q} \cap (0, 1)$, even
though one is unbounded and the other is not.

*Proof.* Let $A$ and $B$ be countable DLOs, listed as $a_0, a_1, a_2, \dots$ and $b_0, b_1, b_2, \dots$. We build an
increasing chain of finite **partial isomorphisms**: finite sets of pairs $p = \{(x_1, y_1), \dots, (x_k, y_k)\}$ with
$x_i \in A$, $y_i \in B$ and

$$
x_i < x_j \iff y_i < y_j \qquad \text{for all } i, j.
$$

Start with $p_0 = \varnothing$. The key step:

**Extension lemma.** If $p$ is a finite partial isomorphism and $a \in A$, there is $b \in B$ such that
$p \cup \{(a, b)\}$ is a partial isomorphism. Symmetrically, for every $b \in B$ there is a suitable $a \in A$.

*Proof of the lemma.* If $a$ is already in $p$, use its partner. Otherwise the $x_i$ in $p$ cut $A$ into finitely many
intervals, and $a$ lies in exactly one: either below all $x_i$, or above all of them, or between two neighbours
$x_i < a < x_j$ with no $x$ of $p$ in between. In the matching position in $B$ there is room:

- below all $y_i$: $B$ has no least element, so some $b$ is below the smallest $y_i$ (if $p$ is empty, take any $b$);
- above all $y_i$: $B$ has no greatest element;
- between $y_i < y_j$: $B$ is dense, so some $b$ lies strictly between.

Such a $b$ is not among the $y$'s, and $p \cup \{(a, b)\}$ still preserves order. The symmetric statement has the same
proof with $A$ and $B$ swapped. $\square$

Now alternate. At an even step $2n$, take the first $a_k$ in the list of $A$ not yet in the domain of $p$ and extend
("forth"). At an odd step $2n + 1$, take the first $b_k$ in the list of $B$ not yet in the range of $p$ and extend
backwards ("back"). Let $h = \bigcup_n p_n$.

- $h$ is a function and preserves order, because any two of its pairs lie in a single $p_n$, which preserves order.
- Every $a_k$ is in the domain of $h$: by step $2k$ at the latest it has been used, since each forth step takes the
  first unused element. Similarly every $b_k$ is in the range, thanks to the back steps.

So $h$ is an order-preserving bijection $A \to B$: an isomorphism. $\square$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 520 210" role="img" aria-label="Back and forth. Two horizontal lines, A above and B below. Four matched pairs are joined by lines without crossing, so order is preserved. A new point of A lies between two matched points; its partner must be chosen in the open interval of B between their partners, shown in green. Density of B guarantees a point there.">
  <line x1="30" y1="50" x2="490" y2="50" stroke="currentColor" stroke-width="1.5"/>
  <line x1="30" y1="160" x2="490" y2="160" stroke="currentColor" stroke-width="1.5"/>
  <text x="505" y="55" font-size="14" fill="currentColor">A</text>
  <text x="505" y="165" font-size="14" fill="currentColor">B</text>
  <line x1="230" y1="160" x2="290" y2="160" stroke="#7ccf9a" stroke-width="7"/>
  <line x1="100" y1="50" x2="80" y2="160" stroke="#eea66f" stroke-width="2"/>
  <line x1="200" y1="50" x2="230" y2="160" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="320" y1="50" x2="290" y2="160" stroke="#eea66f" stroke-width="2"/>
  <line x1="420" y1="50" x2="450" y2="160" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="255" y1="50" x2="260" y2="160" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4"/>
  <circle cx="100" cy="50" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="200" cy="50" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="320" cy="50" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="420" cy="50" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="80" cy="160" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="230" cy="160" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="290" cy="160" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="450" cy="160" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="255" cy="50" r="7" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="260" cy="160" r="5" fill="currentColor"/>
  <text x="255" y="30" font-size="12" text-anchor="middle" fill="currentColor">new a</text>
  <text x="260" y="190" font-size="12" text-anchor="middle" fill="currentColor">its partner must go in the green gap</text>
  <text x="100" y="30" font-size="11" text-anchor="middle" fill="currentColor">forth</text>
  <text x="200" y="30" font-size="11" text-anchor="middle" fill="currentColor">back</text>
</svg>
</div>

Why go back and forth, rather than only forth? Going only forth builds an order-preserving map defined on all of $A$,
but it might miss elements of $B$, giving only an embedding. That is still useful: going forth alone shows that **every
countable linear order embeds in $(\mathbb{Q}, <)$**. The back steps are what make the map onto. Cantor proved the
theorem in 1895; the symmetric back-and-forth form of the argument is how it is usually presented today, and the same
pattern reappears all over logic.

### Try it in Python

The proof is an algorithm. Here it builds the start of an isomorphism between $\mathbb{Q}$ and the dyadic fractions in
$(0, 1)$.

```python
from fractions import Fraction as F
from itertools import count

def rationals():                        # every rational, each exactly once
    yield F(0)
    for n in count(2):
        for q in range(1, n):
            p = n - q
            if F(p, q).numerator == p:  # p/q in lowest terms
                yield F(p, q); yield F(-p, q)

def dyadics():                          # every k / 2^m strictly between 0 and 1
    for m in count(1):
        for k in range(1, 2**m, 2):
            yield F(k, 2**m)

def extend(pairs, a, B):
    """First b in the list B lying where a lies relative to the pairs."""
    lo = max((y for x, y in pairs if x < a), default=None)
    hi = min((y for x, y in pairs if x > a), default=None)
    used = [y for _, y in pairs]
    for b in B():
        if (lo is None or lo < b) and (hi is None or b < hi) and b not in used:
            return b

def back_and_forth(A, B, steps):
    pairs, ga, gb = [], A(), B()
    for i in range(steps):
        if i % 2 == 0:                  # forth
            a = next(x for x in ga if x not in [p for p, _ in pairs])
            pairs.append((a, extend(pairs, a, B)))
        else:                           # back
            b = next(y for y in gb if y not in [q for _, q in pairs])
            flipped = [(y, x) for x, y in pairs]
            pairs.append((extend(flipped, b, A), b))
    return pairs

for a, b in back_and_forth(rationals, dyadics, 10):
    print(a, "<->", b)
```

The first pairs printed are $0 \leftrightarrow 1/2$, $-1 \leftrightarrow 1/4$, $1 \leftrightarrow 3/4$,
$-2 \leftrightarrow 1/8$, $2 \leftrightarrow 7/8$, $-1/2 \leftrightarrow 3/8$. Check: they are in the same order on
both sides. The search for $b$ always ends, by the extension lemma.

### Consequences

**Corollary.** DLO is $\aleph_0$-categorical, so by Łoś-Vaught it is complete. Hence $(\mathbb{Q}, <) \equiv
(\mathbb{R}, <)$: **no first-order sentence about the order can tell the rationals from the reals.**

The difference between them, completeness (every bounded set has a supremum), is a statement about *sets* of elements,
and [Chapter 10](10-First-Order-Logic.md) showed that first-order logic cannot quantify over sets.

DLO is not $\kappa$-categorical for uncountable $\kappa$: $(\mathbb{R}, <)$ and $\mathbb{R}$ followed by a copy of
$\mathbb{Q}$ (written $\mathbb{R} + \mathbb{Q}$) both have size $2^{\aleph_0}$, but in $\mathbb{R}$ every bounded set
has a supremum, while in $\mathbb{R} + \mathbb{Q}$ the $\mathbb{R}$ part is bounded above (by any element of the
$\mathbb{Q}$ part) and has no supremum, since the $\mathbb{Q}$ part has no least element.

The same back-and-forth idea proves many other $\aleph_0$-categoricity results, for instance for the **random graph**:
the countable graph in which, for any finite disjoint sets $U$ and $V$ of vertices, some vertex outside $U \cup V$ is
joined to everything in $U$ and to nothing in $V$. A countable graph built by joining each pair of vertices by a fair coin toss is, with
probability 1, isomorphic to it.

The game version is the **Ehrenfeucht-Fraïssé game**: two players, Spoiler and Duplicator, alternately pick elements in
two structures, Duplicator trying to keep the chosen pairs a partial isomorphism. Duplicator can survive $k$ rounds
exactly when the structures satisfy the same sentences with at most $k$ nested quantifiers. Back-and-forth is a winning
strategy that lasts forever.

## 12.5 Quantifier elimination

*Level: expert.*

Can every formula be rewritten without quantifiers? In a given theory, sometimes yes.

**Definition.** A theory $T$ has **quantifier elimination (QE)** if every formula $\varphi(\bar x)$ is equivalent in
$T$ to a quantifier-free formula $\psi(\bar x)$: $T \models \forall \bar x\, (\varphi \leftrightarrow \psi)$.

**Example.** In the real numbers (as an ordered field), the formula $\exists x\, (x^2 + bx + c = 0)$, with $b, c$ free,
says "this monic quadratic has a real root". By the quadratic formula it is equivalent to $b^2 - 4c \ge 0$, which has no
quantifiers. QE says this kind of thing happens for *every* formula.

Why QE is powerful:

1. **It describes definable sets.** Every definable set is defined by a quantifier-free formula, i.e. a Boolean
   combination of atomic conditions, which are usually simple.
2. **It gives completeness.** If $T$ has QE and every quantifier-free *sentence* is decided by $T$, then $T$ is
   complete: every sentence is equivalent to a quantifier-free one, which is decided.
3. **It gives elementary substructures.** If $T$ has QE, then any substructure relation between models of $T$ is
   elementary: embeddings preserve quantifier-free formulas, and every formula is equivalent to one.
4. **It often gives decidability**, when the elimination is done by an algorithm.

### QE for dense linear orders

**Theorem.** DLO has quantifier elimination.

*Proof.* It is enough to eliminate one existential quantifier from a formula $\exists x\, \theta$ where $\theta$ is
quantifier-free: then work from the inside out, replacing each innermost quantified subformula by a quantifier-free
equivalent ($\forall$ is $\neg\exists\neg$).

Put $\theta$ in disjunctive normal form, a disjunction of conjunctions of atomic formulas and their negations
([Chapter 2](02-Propositional-Logic.md)). Since $\exists x\, (\alpha \lor \beta)$ is equivalent to
$\exists x\, \alpha \lor \exists x\, \beta$, we may assume $\theta$ is a single conjunction. In a linear order,
$\neg(u < v)$ is equivalent to $v < u \lor u = v$ and $\neg(u = v)$ to $u < v \lor v < u$; distribute again, so all
literals are atomic: of the forms $u < v$ or $u = v$, where $u, v$ are variables.

Now look at the conjunction $\theta$:

- Literals not mentioning $x$ can be moved outside $\exists x$.
- If $\theta$ contains $x < x$, it is unsatisfiable: replace $\exists x\, \theta$ by a false quantifier-free formula
  such as $\neg(y = y)$. If it contains $x = x$, drop it.
- If $\theta$ contains $x = y$ for a variable $y \ne x$, then $\exists x\, \theta$ is equivalent to $\theta[y/x]$,
  which has no $x$.
- Otherwise $\theta$ is $\bigwedge_i (a_i < x) \land \bigwedge_j (x < b_j)$, with variables $a_i, b_j$ different from
  $x$. Then

$$
\exists x \Big( \bigwedge_i a_i < x \;\land\; \bigwedge_j x < b_j \Big) \quad\Longleftrightarrow\quad \bigwedge_{i, j} a_i < b_j .
$$

Left to right: $a_i < x < b_j$ gives $a_i < b_j$. Right to left: if every $a_i$ is below every $b_j$, then
$\max_i a_i < \min_j b_j$, and density gives an $x$ in between. If there are no $a_i$, no endpoint at the bottom gives
$x$ below $\min_j b_j$; if no $b_j$, use no top endpoint; if neither, any $x$ works (and the right side is the empty
conjunction, true). $\square$

**Example.** $\exists x\, (a < x \land x < b \land c < x)$ is equivalent to $a < b \land c < b$.

The language $\{<\}$ has no constants, so there are no atomic sentences, and every quantifier-free sentence is "true"
or "false" in a trivial way. By point 2 above, QE gives a second proof that DLO is complete. By point 3,
$(\mathbb{Q}, <) \preceq (\mathbb{R}, <)$: for rationals $\bar a$, any formula is true of $\bar a$ in $\mathbb{Q}$ iff it
is true of $\bar a$ in $\mathbb{R}$.

### Tarski's theorem: real closed fields

A **real closed field** is an ordered field in which every positive element has a square root and every polynomial of
odd degree has a root. $\mathbb{R}$ is one, and so is the field of real algebraic numbers. $\mathrm{RCF}$ is the
(recursive) set of these axioms, in the language $\{0, 1, +, -, \cdot, <\}$.

**Theorem (Tarski).** $\mathrm{RCF}$ has quantifier elimination, by an explicit algorithm. Hence $\mathrm{RCF}$ is
complete and decidable, and $\mathrm{Th}(\mathbb{R}, 0, 1, +, -, \cdot, <)$ is exactly the set of consequences of RCF.

The atomic formulas are polynomial equations and inequalities $p(\bar x) = 0$, $p(\bar x) > 0$ with integer
coefficients, so QE says: **every first-order condition on real numbers is equivalent to a Boolean combination of
polynomial equations and inequalities.** Examples:

- $\exists x\, (a x^2 + b x + c = 0)$ is equivalent to $(a \ne 0 \land b^2 - 4ac \ge 0) \lor (a = 0 \land (b \ne 0 \lor c = 0))$.
  (If $a = 0$ the equation is linear: solvable if $b \ne 0$, or if $b = 0$ and $c = 0$.)
- $\forall x\, (x^2 + b x + c > 0)$ is equivalent to $b^2 - 4c < 0$.
- $\exists x\, (x \cdot x < a)$ is equivalent to $0 < a$.

The proof is beyond this chapter; it eliminates one quantifier at a time from conditions on a polynomial in $x$ by
tracking the signs of the polynomial and its derivatives (Sturm's theorem is one tool). A full proof is in Marker's
book, section 3.3.

Consequences:

- **Elementary algebra and geometry are decidable.** Any question about real numbers phrased with $+$, $\cdot$, $<$,
  quantifiers and connectives can be settled by an algorithm. Since points in the plane are pairs of reals, so can every
  question of elementary Euclidean geometry (in Tarski's first-order axiomatisation).
- **Projections of semialgebraic sets are semialgebraic** (the Tarski-Seidenberg theorem). A **semialgebraic set** is
  one defined by a Boolean combination of polynomial equations and inequalities. Projecting, say, from
  $\mathbb{R}^3$ to $\mathbb{R}^2$ adds an $\exists$, and QE removes it.
- **The real algebraic numbers form an elementary substructure of $\mathbb{R}$**, a countable model of the full theory
  of the real field, as promised in [Chapter 11](11-Completeness-and-Compactness.md).

Contrast this with arithmetic: $\mathrm{Th}(\mathbb{N}, +, \cdot)$ has no such algorithm, by the incompleteness theorem
([Chapter 18](18-Godels-Incompleteness-Theorems.md)). The integers make polynomial questions hard (they encode
computation, [Chapter 14](14-Undecidability.md)); the reals make them tame.

**Honest remarks on cost.** Tarski's algorithm is hopeless in practice. George Collins's method of **cylindrical
algebraic decomposition** (1975) runs in time doubly exponential in the number of variables, and James Davenport and
Joos Heintz showed in 1988 that doubly exponential time is unavoidable in the worst case. Still, CAD is implemented in
computer algebra systems and used for small problems in robotics and geometry.

**Other cases.** $\mathrm{ACF}_p$ has QE (which gives Chevalley's theorem in algebraic geometry: the image of a
constructible set under a polynomial map is constructible). Mojżesz Presburger showed in 1929 that the theory of
$(\mathbb{Z}, +, <)$ is decidable, by QE after adding predicates for "divisible by $n$". The real field with
exponentiation $(\mathbb{R}, +, \cdot, <, \exp)$ does not have QE in this language, but Alex Wilkie proved in 1996 that
its definable sets are still tame (it is **o-minimal**: every definable subset of $\mathbb{R}$ is a finite union of
points and intervals). Whether its theory is decidable is Tarski's exponential function problem; Angus Macintyre and
Wilkie showed in 1996 that it is, *if* Schanuel's conjecture from transcendental number theory is true.

## 12.6 Ultraproducts

*Level: expert.*

Here is a way to build a new structure from infinitely many old ones by "majority vote". Let the structures be
$\mathcal{M}_0, \mathcal{M}_1, \mathcal{M}_2, \dots$. An element of the new structure will be a sequence
$(m_0, m_1, m_2, \dots)$ with $m_i \in M_i$, and a statement about sequences will be true if it is true at "most"
coordinates. The question is what "most" should mean so that the result is a structure and the vote is consistent.
The answer is an ultrafilter.

### Filters and ultrafilters

Let $I$ be a set (the index set; $I = \mathbb{N}$ above).

**Definition.** A **filter** on $I$ is a family $\mathcal{F}$ of subsets of $I$ such that

1. $I \in \mathcal{F}$ and $\varnothing \notin \mathcal{F}$;
2. if $A, B \in \mathcal{F}$ then $A \cap B \in \mathcal{F}$;
3. if $A \in \mathcal{F}$ and $A \subseteq B \subseteq I$ then $B \in \mathcal{F}$.

An **ultrafilter** is a filter $\mathcal{U}$ that also satisfies

4. for every $A \subseteq I$, either $A \in \mathcal{U}$ or $I \setminus A \in \mathcal{U}$.

Think of the members of $\mathcal{U}$ as the "large" sets, or the winning coalitions in a vote. (1)-(3) make "large"
consistent; (4) says every question gets a verdict.

**Examples.**

- For a fixed $i_0 \in I$, the sets containing $i_0$ form an ultrafilter, the **principal** ultrafilter at $i_0$. It is a
  dictatorship: $i_0$ decides everything.
- On an infinite $I$, the **cofinite** sets (complements of finite sets) form a filter, the **Fréchet filter**. It is
  not an ultrafilter: on $\mathbb{N}$, neither the even numbers nor the odd numbers are cofinite.

**Theorem.** Every filter is contained in an ultrafilter. In particular, on every infinite set there is a
**non-principal** ultrafilter (one containing all cofinite sets).

*Proof.* Order the filters containing the given filter by inclusion. The union of a chain of filters is a filter, so
by Zorn's lemma ([Chapter 8](08-Axiomatic-Set-Theory.md)) there is a maximal one, $\mathcal{U}$. Suppose some $A$ has
neither $A$ nor $I \setminus A$ in $\mathcal{U}$. If $A \cap U \neq \varnothing$ for every $U \in \mathcal{U}$, the
sets containing some $A \cap U$ form a filter strictly bigger than $\mathcal{U}$, contradicting maximality. Otherwise
$A \cap U = \varnothing$ for some $U \in \mathcal{U}$, so $U \subseteq I \setminus A$ and $I \setminus A \in
\mathcal{U}$ by (3), a contradiction. So $\mathcal{U}$ is an ultrafilter. An ultrafilter containing the Fréchet filter
is non-principal, since it contains $I \setminus \{i_0\}$ for every $i_0$. $\square$

Nobody can describe a non-principal ultrafilter explicitly: their existence needs a weak form of the axiom of choice.
This is the price of everything that follows.

### The ultraproduct

**Definition.** Let $(\mathcal{M}_i)_{i \in I}$ be $L$-structures and $\mathcal{U}$ an ultrafilter on $I$. On the set of
all sequences $f = (f(i))_{i \in I}$ with $f(i) \in M_i$, define

$$
f \sim g \iff \{ i \in I : f(i) = g(i) \} \in \mathcal{U}
$$

("$f$ and $g$ agree almost everywhere"). It is an equivalence relation (transitivity uses (2) and (3)). The
**ultraproduct** $\prod_{i} \mathcal{M}_i / \mathcal{U}$ has as domain the classes $[f]$, with

- $c$ interpreted as $[(c^{\mathcal{M}_i})_i]$;
- $f^{\ast}([g_1], \dots, [g_n]) = [\,(f^{\mathcal{M}_i}(g_1(i), \dots, g_n(i)))_i\,]$, coordinate by coordinate;
- $R([g_1], \dots, [g_n])$ holds iff $\{ i : (g_1(i), \dots, g_n(i)) \in R^{\mathcal{M}_i} \} \in \mathcal{U}$.

These are well defined, because changing representatives changes things only on a set outside $\mathcal{U}$. When all
$\mathcal{M}_i$ are the same $\mathcal{M}$, the ultraproduct is called an **ultrapower** $\mathcal{M}^I / \mathcal{U}$.

**Theorem (Łoś, 1955).** For every formula $\varphi(x_1, \dots, x_n)$ and elements $[g_1], \dots, [g_n]$:

$$
\prod_i \mathcal{M}_i / \mathcal{U} \models \varphi\big[[g_1], \dots, [g_n]\big] \iff
\big\{ i \in I : \mathcal{M}_i \models \varphi[g_1(i), \dots, g_n(i)] \big\} \in \mathcal{U}.
$$

In words: **a formula is true in the ultraproduct if and only if it is true in almost every factor.**

*Proof sketch.* Induction on $\varphi$. Atomic formulas: this is the definition (terms are computed coordinatewise).
Negation: the set where $\neg\varphi$ holds is the complement of the set where $\varphi$ holds, and by (4) exactly one
of them is in $\mathcal{U}$; this is where "ultra" is essential. Conjunction: by (2) and (3), $A \cap B \in \mathcal{U}$
iff $A \in \mathcal{U}$ and $B \in \mathcal{U}$. Existential quantifier: if $\exists y\, \varphi$ holds in the
ultraproduct, a witness $[h]$ gives, by induction, a large set of $i$ where $\varphi(\dots, h(i))$ holds, so
$\exists y\, \varphi$ holds there. Conversely, if the set $A$ of $i$ where $\mathcal{M}_i \models \exists y\, \varphi$ is
in $\mathcal{U}$, **choose** a witness $h(i)$ for each $i \in A$ (anything for $i \notin A$); then $\varphi$ holds at
$h(i)$ for all $i \in A$, and by induction $[h]$ is a witness in the ultraproduct. The choice of $h$ uses the axiom of
choice. $\square$

### What ultraproducts do

**Compactness, again.** Let $\Gamma$ be a set of sentences whose finite subsets all have models. Let $I$ be the set of
finite subsets of $\Gamma$, and for each $\Delta \in I$ pick a model $\mathcal{M}_\Delta$ of $\Delta$. For each
$\sigma \in \Gamma$ let $\hat\sigma = \{ \Delta \in I : \sigma \in \Delta \}$. Any finitely many of the sets $\hat\sigma$
have non-empty intersection (it contains the finite set of those $\sigma$'s), so they generate a filter, which extends to
an ultrafilter $\mathcal{U}$. For each $\sigma \in \Gamma$, $\mathcal{M}_\Delta \models \sigma$ for all
$\Delta \in \hat\sigma$, a set in $\mathcal{U}$, so by Łoś the ultraproduct satisfies $\sigma$. It is a model of
$\Gamma$. This proof uses no proof system at all.

**Hyperreals, concretely.** Take a non-principal ultrafilter $\mathcal{U}$ on $\mathbb{N}$ and the ultrapower
$\mathbb{R}^{\mathbb{N}} / \mathcal{U}$ (in the big language of 11.4). By Łoś it satisfies every sentence true in
$\mathbb{R}$. A real $r$ sits inside as the constant sequence $[(r, r, r, \dots)]$. The element
$\varepsilon = [(1, \tfrac12, \tfrac13, \dots)]$ is a positive infinitesimal: for a positive real $r$, the set
$\{ n : 0 < \tfrac{1}{n+1} < r \}$ is cofinite, hence in $\mathcal{U}$, so $0 < \varepsilon < r$ in the ultrapower.
This is the usual construction of Robinson's hyperreals.

**Elementary extensions.** The diagonal map $m \mapsto [(m, m, m, \dots)]$ is an elementary embedding of $\mathcal{M}$
into its ultrapower, by Łoś (the set of $i$ where a formula holds of constant sequences is $I$ or $\varnothing$).

**Characteristic zero from finite fields.** Let $\mathcal{U}$ be a non-principal ultrafilter on the set of primes, and
$K = \prod_p \mathbb{F}_p / \mathcal{U}$. Each field axiom holds in every factor, so $K$ is a field. For a prime $q$, the
sentence $\neg(\underline{q} = 0)$ holds in every $\mathbb{F}_p$ with $p \ne q$, a cofinite set of primes, so it holds in
$K$. So **$K$ is a field of characteristic 0 built out of finite fields**. James Ax studied such fields
("pseudo-finite fields") in 1968, and they are behind much of the modern model theory of finite fields.

**A characterisation of elementary equivalence.** H. Jerome Keisler (1961, assuming the generalised continuum
hypothesis) and Saharon Shelah (1971, without it) proved: $\mathcal{M} \equiv \mathcal{N}$ if and only if $\mathcal{M}$
and $\mathcal{N}$ have isomorphic ultrapowers. So elementary equivalence, defined by *sentences*, has a purely algebraic
description.

## A short history

Cantor's theorem on countable dense orders is from his "Beiträge zur Begründung der transfiniten Mengenlehre" of
1895. Löwenheim (1915) and Skolem (1920s) began the study of what sizes of models a theory can have. Tarski found his
quantifier elimination for the reals around 1930; it was published in 1948 as a RAND report and as a book in 1951.
Presburger's arithmetic dates from 1929. The name "model theory" and the subject as a branch of mathematics come from
the 1950s, from Tarski's school at Berkeley and from Abraham Robinson; Łoś's theorem on ultraproducts appeared in 1955,
and Łoś and Vaught's completeness test in 1954.

Morley's categoricity theorem (1965) and Shelah's classification theory from the 1970s turned model theory into a
structural subject with its own deep questions. Since the 1990s it has been used in other parts of mathematics:
o-minimality in real geometry (Wilkie, 1996, and later applications to number theory by Jonathan Pila and others) and
Ehud Hrushovski's proof of the function field Mordell-Lang conjecture (1996) are two examples.

## Check yourself

??? question "1. Find a sentence that separates each pair: (a) $(\mathbb{N}, <)$ and $(\mathbb{Q}_{\ge 0}, <)$; (b) $(\mathbb{Q}, +, \cdot)$ and $(\mathbb{R}, +, \cdot)$; (c) $(\mathbb{Z}, +)$ and $(\mathbb{Z} \times \mathbb{Z}, +)$."
    (a) Density, $\forall x\, \forall y\, (x < y \to \exists z\, (x < z \land z < y))$, true in $\mathbb{Q}_{\ge 0}$ only
    (both have a least element, so "there is a least element" would not do). (b) $\exists x\, (x \cdot x = 1 + 1)$, true
    in $\mathbb{R}$ only. (c) Use "the group has at most two classes modulo doubling":
    $\forall x\, \forall y\, \exists w\, (x = w + w \lor y = w + w \lor x = y + w + w)$. It says that of $x$, $y$ and
    $x - y$, one is twice something. In $\mathbb{Z}$ it is true: if $x$ and $y$ are both odd, $x - y$ is even. In
    $\mathbb{Z} \times \mathbb{Z}$ it is false: take $x = (1, 0)$ and $y = (0, 1)$; none of $x$, $y$, $x - y = (1, -1)$
    has both coordinates even.

??? question "2. Let $\mathcal{M}$ be the substructure of $(\mathbb{Z}, <)$ on the even numbers. Is $\mathcal{M} \cong (\mathbb{Z}, <)$? Is $\mathcal{M} \preceq (\mathbb{Z}, <)$?"
    $n \mapsto 2n$ is an isomorphism, so yes, $\mathcal{M} \cong (\mathbb{Z}, <)$ and in particular $\mathcal{M} \equiv
    (\mathbb{Z}, <)$. But not elementary: the formula $\exists z\, (x < z \land z < y)$ is false of $(0, 2)$ in
    $\mathcal{M}$ (no even number strictly between) and true in $\mathbb{Z}$ (take $z = 1$). The Tarski-Vaught test fails
    for the same reason: the witness $1$ is not in $\mathcal{M}$.

??? question "3. Show that the theory $T_\infty$ of infinite sets (empty language) is complete. Is the theory of sets with at least 3 elements complete?"
    $T_\infty$ has no finite models and is $\aleph_0$-categorical (two countably infinite sets are in bijection, and a
    bijection is an isomorphism in the empty language), so Łoś-Vaught gives completeness. The theory "at least 3
    elements" is not complete: $\lambda_4$ is true in a 4-element model and false in a 3-element one. Łoś-Vaught does not
    apply because this theory has finite models.

??? question "4. The theory of dense linear orders (with at least two elements, endpoints allowed) is not complete. Find all its completions."
    Whether there is a least element, and whether there is a greatest element, are not decided. Adding a choice for each
    gives four theories: no endpoints (DLO), least only, greatest only, both. Each is $\aleph_0$-categorical (apply
    back-and-forth to the interior, which is a countable DLO without endpoints, and match the endpoints), and none has
    finite models (density with two elements forces infinitely many), so each is complete by Łoś-Vaught. Every model
    satisfies one of the four, so these are all the completions.

??? question "5. In DLO, eliminate the quantifier from $\exists x\, (a < x \land x < b \land c < x)$ and from $\exists x\, (x < a \land \neg(x < b))$."
    The first is $a < b \land c < b$ ($x$ must exceed both $a$ and $c$ and be below $b$). For the second, $\neg(x < b)$ is
    $b < x \lor b = x$. So the formula is $\exists x\, (x < a \land b < x) \lor \exists x\, (x < a \land x = b)$, which is
    $b < a \lor b < a$, i.e. $b < a$.

??? question "6. In the real field, give quantifier-free equivalents of: (a) $\forall x\, (x^2 + b x + c > 0)$; (b) $\exists x\, (x^2 < a)$; (c) $\exists x\, (x^2 = a \land x > 1)$."
    (a) $b^2 - 4c < 0$: an upward parabola is always positive iff it has no real root. (b) $0 < a$: if $a > 0$ take
    $x = 0$; if $a \le 0$ no square is below it. (c) $a > 1$: we need a square root of $a$ larger than 1, which exists
    iff $a \ge 0$ and $\sqrt a > 1$, i.e. $a > 1$.

??? question "7. Show that the theory of non-zero vector spaces over $\mathbb{Q}$ is complete. Is it $\aleph_0$-categorical?"
    Its models are infinite (a non-zero $\mathbb{Q}$-vector space contains $q v$ for all $q$). A model of uncountable size
    $\kappa$ has dimension $\kappa$, and two spaces of equal dimension are isomorphic, so the theory is
    $\kappa$-categorical and complete by Łoś-Vaught. It is not $\aleph_0$-categorical: $\mathbb{Q}$ and $\mathbb{Q}^2$ are
    countable but have different dimensions, so they are not isomorphic.

??? question "8. Using QE for DLO, prove $(\mathbb{Q}, <) \preceq (\mathbb{R}, <)$."
    Let $\varphi(\bar x)$ be any formula and $\bar a$ rationals. By QE, DLO proves $\varphi \leftrightarrow \psi$ for a
    quantifier-free $\psi$; both $\mathbb{Q}$ and $\mathbb{R}$ are models of DLO, so in each, $\varphi$ holds of $\bar a$
    iff $\psi$ does. A quantifier-free formula only compares the $a_i$ with each other, which gives the same answer in
    $\mathbb{Q}$ and in $\mathbb{R}$. So $\varphi$ holds of $\bar a$ in $\mathbb{Q}$ iff in $\mathbb{R}$.

??? question "9. (a) Show a non-principal ultrafilter on $\mathbb{N}$ contains every cofinite set. (b) Show an ultraproduct over a principal ultrafilter at $i_0$ is isomorphic to $\mathcal{M}_{i_0}$."
    (a) If $\mathcal{U}$ is non-principal, then for each $n$, $\{n\} \notin \mathcal{U}$ (otherwise every member contains
    $n$ by (2), and $\mathcal{U}$ would be the principal ultrafilter at $n$ by (3) and (4)), so
    $\mathbb{N} \setminus \{n\} \in \mathcal{U}$ by (4). A cofinite set is a finite intersection of such sets, so it is in
    $\mathcal{U}$ by (2). (b) Two sequences are equivalent iff they agree at $i_0$ (a set is in $\mathcal{U}$ iff it
    contains $i_0$). So $[f] \mapsto f(i_0)$ is a well-defined bijection onto $M_{i_0}$, and by the definitions of the
    functions and relations it is an isomorphism.

??? question "10. Let $K = \prod_p \mathbb{F}_p / \mathcal{U}$ for a non-principal ultrafilter on the primes. Is $K$ algebraically closed? Does every element of $K$ have a square root?"
    Neither. For the second: in each $\mathbb{F}_p$ with $p$ odd, exactly half of the non-zero elements are squares, so
    the sentence $\exists x\, \neg\exists y\, (y \cdot y = x)$ holds in every $\mathbb{F}_p$ with $p > 2$, a set in
    $\mathcal{U}$; by Łoś it holds in $K$. So some element has no square root, and $K$ is not algebraically closed
    (the polynomial $y^2 - x$ has no root).

??? question "11. Prove Ax-Grothendieck for $n = 1$ directly. Then show the statement fails over $\mathbb{Q}$."
    An injective polynomial $f : \mathbb{C} \to \mathbb{C}$ is not constant. For any $b$, $f(x) - b$ is a nonconstant
    polynomial, so it has a root by the fundamental theorem of algebra: $f$ is onto. Over $\mathbb{Q}$, $f(x) = x^3$ is
    injective ($a^3 = b^3$ with $a, b$ rational implies $a = b$) but not onto: $2$ is not the cube of a rational. The
    theorem needs algebraic closure, which is exactly what $\mathrm{ACF}_p$ provides in the proof.

## What you learned

- A theory is a set of sentences; $\mathrm{Th}(\mathcal{M})$ is always complete, and the question is whether a small,
  natural axiom set is.
- Elementary equivalence means satisfying the same sentences. Isomorphic implies equivalent, not conversely;
  elementary substructures are recognised by the Tarski-Vaught test.
- Łoś-Vaught: a countable theory with no finite models, categorical in one infinite size, is complete. Examples: infinite
  sets, DLO, $\mathrm{ACF}_p$, $\mathbb{Q}$-vector spaces. Complete recursive theories are decidable.
- Cantor's back-and-forth proves every countable DLO is isomorphic to $\mathbb{Q}$, so $(\mathbb{Q}, <) \equiv
  (\mathbb{R}, <)$.
- Quantifier elimination: DLO (proved here) and real closed fields (Tarski). Elementary algebra and geometry are
  decidable, though at doubly exponential cost.
- Ultraproducts and Łoś's theorem build models by majority vote, give compactness, the hyperreals, and fields of
  characteristic 0 from finite fields. With completeness of $\mathrm{ACF}_p$, they prove Ax-Grothendieck.

**Next:** [Chapter 13](13-Algorithms-and-Turing-Machines.md), where Part IV begins: what an algorithm is, and the
machines Turing invented to answer that question.

## Further reading

- D. Marker, *Model Theory: An Introduction*, 2002. The standard graduate text; Chapter 3 has quantifier elimination for
  DLO, ACF and RCF, and Ax-Grothendieck.
- C. C. Chang and H. J. Keisler, *Model Theory*, 3rd edition, 1990. Ultraproducts in depth.
- W. Hodges, *A Shorter Model Theory*, 1997.
- K. Tent and M. Ziegler, *A Course in Model Theory*, 2012.
- A. Tarski, *A Decision Method for Elementary Algebra and Geometry*, 2nd edition, 1951.
- J. Łoś, "Quelques remarques, théorèmes et problèmes sur les classes définissables d'algèbres", in *Mathematical
  Interpretation of Formal Systems*, 1955.
- M. Morley, "Categoricity in power", *Transactions of the American Mathematical Society* 114, 1965.
- J. Ax, "Injective endomorphisms of varieties and schemes", *Pacific Journal of Mathematics* 31, 1969.
- J. H. Davenport and J. Heintz, "Real quantifier elimination is doubly exponential", *Journal of Symbolic Computation*
  5, 1988.
- L. van den Dries, *Tame Topology and O-minimal Structures*, 1998.
- On this site: [Algebra, Chapter 19](../algebra/19-Fields-and-Extensions.md) for fields, characteristic and algebraic
  closure; [Linear algebra, Chapter 5](../linear-algebra/05-Independence-Bases-and-Dimension.md) for bases and Zorn's
  lemma; [Calculus, Chapter 18](../calculus/18-The-Real-Numbers.md) for the completeness of $\mathbb{R}$ that no
  first-order sentence captures; the Topics lesson [Axioms](../../topics/logic/level-8/02-axioms.md).
