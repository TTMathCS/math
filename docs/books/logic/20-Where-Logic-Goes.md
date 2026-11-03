# 20. Where logic goes

*You began this book with true and false and a truth table. You have seen proofs become numbers, sets become the
foundation of mathematics, computation become a branch of logic, and Gödel's theorems mark the limits of every formal system.
Where does logic go from here? This last chapter is a guided tour of six living areas: the large cardinal axioms that extend
ZFC, the forcing method that proves independence, reverse mathematics that measures how much a theorem really needs,
homotopy type theory, the formalised mathematics now checked by computers, and the open problems. Each section gives the main
idea honestly, with at least one argument you can follow in full, and says where the full story is told.*

!!! abstract "In this chapter"
    **You will learn:**

    - what inaccessible and measurable cardinals are, why ZFC cannot prove they exist, and how large cardinals form a ladder of
      consistency strength
    - the idea of forcing: generic objects, dense sets, and how Cohen made the continuum hypothesis fail
    - reverse mathematics: the five subsystems of second-order arithmetic that most theorems turn out to be equivalent to,
      with one equivalence proved
    - what homotopy type theory and the univalence axiom are, briefly and honestly
    - the state of formalised mathematics: mathlib, the Liquid Tensor Experiment, and other projects
    - the open problems: P versus NP, the debate about the continuum hypothesis, and the sixth Busy Beaver number

    **You need:** [Chapter 7](07-Infinity-and-Cardinality.md) (cardinals, the continuum hypothesis),
    [Chapter 8](08-Axiomatic-Set-Theory.md) (ZFC), [Chapter 14](14-Undecidability.md) (halting, Busy Beaver),
    [Chapter 16](16-Complexity.md) (P and NP), [Chapter 18](18-Godels-Incompleteness-Theorems.md) (the second
    incompleteness theorem) and [Chapter 19](19-Other-Logics.md) (type theory, proof assistants). This chapter states more than
    it proves; where a proof is given it is complete, and where it is not, the text says where to find it.

    **Levels:** all sections are expert in content but written as a survey. 20.5 and 20.6 can be read by anyone who has come
    this far; 20.1 and 20.2 need Chapters 7 and 8; 20.3 needs Chapters 15 and 17; 20.4 needs Chapter 19.

## 20.1 Large cardinals

*Level: expert.* By Gödel's second theorem ([Chapter 18](18-Godels-Incompleteness-Theorems.md)), ZFC cannot prove its own
consistency, if it is consistent. So if we want to know more, for instance that ZFC is consistent, we must add axioms. Which
ones? The most studied answer: axioms saying that there are very large infinite sets, **large cardinals**.

### Inaccessible cardinals

Recall from [Chapter 7](07-Infinity-and-Cardinality.md) and [Chapter 8](08-Axiomatic-Set-Theory.md) that $\aleph_0$ is the size
of $\mathbb{N}$, and that from any cardinal $\lambda$ ZFC gives you bigger ones: the power set, of size $2^\lambda$, and unions
of increasing sequences. Call an uncountable cardinal $\kappa$ **(strongly) inaccessible** if you cannot reach it from below
in these ways:

- $\kappa$ is **regular**: it is not the union of fewer than $\kappa$ sets each of size less than $\kappa$;
- $\kappa$ is a **strong limit**: if $\lambda < \kappa$ then $2^\lambda < \kappa$.

$\aleph_0$ has both properties (a finite union of finite sets is finite; $2^n$ is finite), which is why inaccessibles are
"uncountable versions of $\aleph_0$". The idea goes back to Hausdorff (1908); the strong form was introduced by Sierpiński
and Tarski and by Zermelo in 1930.

Write $V_\alpha$ for the stages of the cumulative hierarchy ([Chapter 8](08-Axiomatic-Set-Theory.md)): $V_0 = \emptyset$,
$V_{\alpha + 1}$ the power set of $V_\alpha$, and unions at limits.

**Theorem 20.1 (Zermelo, 1930).** If $\kappa$ is inaccessible then $V_\kappa$, with the real membership relation, is a model
of ZFC.

*Sketch.* Every set in $V_\kappa$ has size less than $\kappa$ (by induction, using the strong limit property). Pairing, union,
power set and infinity hold in $V_\kappa$ because the sets they produce stay below $\kappa$. Replacement is the one that uses
regularity: the image of a set of size less than $\kappa$ under a function into $V_\kappa$ is a union of fewer than $\kappa$
sets, each in some $V_\alpha$ with $\alpha < \kappa$, so it lies in some $V_\beta$ with $\beta < \kappa$. Separation, foundation
and choice are inherited from the universe. $\square$

**Corollary 20.2.** If ZFC is consistent, ZFC does not prove that an inaccessible cardinal exists.

*Proof.* Suppose ZFC proves "there is an inaccessible $\kappa$". By Theorem 20.1, which is a theorem of ZFC, ZFC then proves
"there is a set model of ZFC", and so, by soundness proved inside ZFC, ZFC proves $\mathrm{Con}(\mathrm{ZFC})$. By the second
incompleteness theorem, ZFC is inconsistent. $\square$

So "there is an inaccessible cardinal" is a genuinely new axiom, and a stronger one: ZFC + "there is an inaccessible" proves
$\mathrm{Con}(\mathrm{ZFC})$. Whether it is *true* is a philosophical question; most set theorists regard it as a natural
extension of the reasoning that gives us $\aleph_0$ in the first place.

### Measurable cardinals and the ladder

In 1930 Stanisław Ulam asked whether there can be a "measure" on all subsets of a set that takes only the values 0 and 1, is
not concentrated on a single point, and is additive for fewer than $\kappa$ pieces. An uncountable cardinal $\kappa$ with
such a measure (equivalently, a nonprincipal ultrafilter on $\kappa$ closed under intersections of fewer than $\kappa$ sets)
is called **measurable**. Ulam proved that a measurable cardinal is inaccessible, and later work showed it is far larger:
below it lie $\kappa$ many inaccessibles. In 1961 Dana Scott proved that if a measurable cardinal exists, then not every set
is constructible: $V \neq L$, where $L$ is Gödel's constructible universe of 1938-1940. The modern way to state measurability
is by **elementary embeddings**: $\kappa$ is measurable if and only if there is an elementary embedding
$j: V \to M$ into a transitive class $M$ whose first moved ordinal is $\kappa$.

Stronger notions ask $M$ to be closer to $V$. In increasing order of strength, a few of the standard ones:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 250" role="img" aria-label="A ladder of large cardinal axioms in increasing consistency strength, from ZFC at the bottom through inaccessible, Mahlo, weakly compact, measurable, strong, Woodin and supercompact cardinals, with the inconsistent Reinhardt cardinal crossed out at the top.">
  <line x1="60" y1="20" x2="60" y2="235" stroke="currentColor" stroke-width="1.5"/>
  <line x1="120" y1="20" x2="120" y2="235" stroke="currentColor" stroke-width="1.5"/>
  <g stroke="currentColor" stroke-width="1">
    <line x1="60" y1="225" x2="120" y2="225"/><line x1="60" y1="200" x2="120" y2="200"/>
    <line x1="60" y1="175" x2="120" y2="175"/><line x1="60" y1="150" x2="120" y2="150"/>
    <line x1="60" y1="125" x2="120" y2="125"/><line x1="60" y1="100" x2="120" y2="100"/>
    <line x1="60" y1="75" x2="120" y2="75"/><line x1="60" y1="50" x2="120" y2="50"/>
  </g>
  <rect x="62" y="218" width="56" height="14" fill="#9cc9ea"/>
  <rect x="62" y="143" width="56" height="14" fill="#7ccf9a"/>
  <rect x="62" y="68" width="56" height="14" fill="#eea66f"/>
  <g fill="currentColor" font-size="12">
    <text x="130" y="229">ZFC</text>
    <text x="130" y="204">inaccessible</text>
    <text x="130" y="179">Mahlo</text>
    <text x="130" y="154">weakly compact, measurable</text>
    <text x="130" y="129">strong</text>
    <text x="130" y="104">Woodin</text>
    <text x="130" y="79">supercompact</text>
    <text x="130" y="54">huge, rank-into-rank</text>
    <text x="130" y="24">Reinhardt: refuted by Kunen (with AC)</text>
  </g>
  <line x1="60" y1="14" x2="120" y2="30" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="30" x2="120" y2="14" stroke="currentColor" stroke-width="1.5"/>
  <text x="20" y="130" fill="currentColor" font-size="11" transform="rotate(-90 20 130)" text-anchor="middle">stronger</text>
</svg>
</div>

Each rung proves the consistency of the rungs below it (with ZFC), so each is unprovable from those below, by the argument of
Corollary 20.2. Some striking facts:

- **The ladder has a top.** William Reinhardt proposed an embedding $j: V \to V$ that is not the identity. Kenneth Kunen proved
  in 1971 that in ZFC there is no such embedding. (Without the axiom of choice the question is open, and studied.)
- **The ladder seems linear.** Every natural statement of set theory that set theorists have analysed has turned out to be
  equiconsistent with some large cardinal axiom, and the large cardinal axioms themselves line up in a single order of
  consistency strength. This is an observed pattern, not a theorem, and it is one of the main reasons set theorists take large
  cardinals seriously.
- **Large cardinals decide questions about the reals.** Donald A. Martin and John Steel proved in 1989 (building on Woodin's
  work) that if there are infinitely many Woodin cardinals, then **projective determinacy** holds: certain infinite games on
  natural numbers, defined by projective sets, have winning strategies. Its consequences include that every projective set of
  reals is Lebesgue measurable. ZFC alone cannot prove these statements.
- **But not the continuum hypothesis.** Azriel Lévy and Robert Solovay showed in 1967 that the usual large cardinals survive
  the small forcing extensions of 20.2 that change the size of the continuum. So no such axiom settles CH.

## 20.2 Forcing

*Level: expert.* Gödel showed in 1938-1940 that the continuum hypothesis cannot be refuted from ZFC: in his constructible
universe $L$, CH holds. To show it cannot be proved, one needs a model of ZFC where CH fails. Paul Cohen built one in 1963 with
a new method, **forcing**, and won the Fields Medal in 1966 for it. Forcing has since become the main tool for proving
independence, and hundreds of statements have been shown independent of ZFC with it.

### The idea

Start with a model $M$ of ZFC; to keep it simple, a **countable transitive model**. (The existence of such a model needs a
little more than the consistency of ZFC; it can be avoided by working with Boolean-valued models or with finite parts of
ZFC, and the conclusions are the same.) We want to add a new set $G$ to $M$, obtaining a larger model $M[G]$, the smallest
model of ZFC containing $M$ and $G$. The difficulty is to choose $G$ so that $M[G]$ still satisfies ZFC and has the properties
we want.

The approach is to describe $G$ by **conditions**, finite pieces of information about it, and choose $G$ to be **generic**:
so ordinary that it satisfies every requirement that $M$ can describe and that can always be met.

- A **forcing notion** is a partially ordered set $(P, \le)$ in $M$; $q \le p$ means "$q$ is a stronger condition than $p$,
  carrying more information".
- A set $D \subseteq P$ is **dense** if every condition can be strengthened to one in $D$: for every $p$ there is $q \le p$
  with $q \in D$.
- A filter $G \subseteq P$ is **$M$-generic** if it meets every dense set $D$ that belongs to $M$.

Since $M$ is countable, it has only countably many dense sets, and a generic filter exists: list them $D_0, D_1, \ldots$, pick
$p_0 \in D_0$, then $p_1 \le p_0$ in $D_1$, and so on, and take the filter generated by the $p_n$. (This is the same
construction as in the Baire category theorem.)

### Example: adding one new real

Let $P$ be the set of finite partial functions $p$ from $\mathbb{N}$ to $\{0, 1\}$, ordered by $q \le p$ when $q$ extends $p$.
Let $G$ be generic and $g = \bigcup G$.

**$g$ is a total function $\mathbb{N} \to \{0, 1\}$.** For each $n$ the set $D_n = \{ p : n \in \operatorname{dom} p \}$ is dense
(any finite $p$ can be extended to be defined at $n$) and lies in $M$. So $G$ contains some $p$ defined at $n$. And any two
conditions in a filter are compatible, so $g$ is a function.

**$g$ is not in $M$.** For each $x : \mathbb{N} \to \{0, 1\}$ in $M$, the set $E_x = \{ p : p(n) \neq x(n) \text{ for some } n \in \operatorname{dom} p \}$
is dense: given any $p$, pick $n$ outside its finite domain and extend $p$ by $n \mapsto 1 - x(n)$. So $G$ meets $E_x$, and
$g$ differs from $x$ somewhere.

So $M[G]$ contains a real number (a binary sequence) that $M$ does not have, a **Cohen real**. Every density argument has
this shape: to make $G$ do something, show that the conditions that do it are dense.

To make CH fail, Cohen used conditions that are finite partial functions from $\aleph_2^M \times \mathbb{N}$ to $\{0, 1\}$.
Genericity gives $\aleph_2$ many distinct new reals, by the same density arguments. The hard part is that $\aleph_2$ in $M$
must still be $\aleph_2$ in $M[G]$: forcing must not collapse cardinals. That follows because this $P$ has the **countable
chain condition** (every set of pairwise incompatible conditions is countable), proved with the $\Delta$-system lemma. In
$M[G]$, then, $2^{\aleph_0} \geq \aleph_2$, and CH fails.

### Why $M[G]$ satisfies ZFC

This is the technical heart, and it needs a full course (Kunen's book below gives it). The key notion is the **forcing
relation** $p \Vdash \varphi$, "condition $p$ forces $\varphi$", defined inside $M$. Two theorems make it work:

- **Truth lemma**: $M[G] \models \varphi$ if and only if some $p \in G$ forces $\varphi$.
- **Definability lemma**: for each formula, the relation $p \Vdash \varphi$ is definable in $M$.

Together they let you reason about $M[G]$ from inside $M$, where you know ZFC holds, and so check every axiom in $M[G]$.
The symbol $\Vdash$ is the same as for Kripke models in [Chapter 19](19-Other-Logics.md), and not by accident: forcing
conditions behave like stages of knowledge, and Kripke's semantics was influenced by forcing. In the late 1960s Scott,
Solovay and Vopěnka reformulated forcing with **Boolean-valued models**, in which each statement gets a truth value in a
complete Boolean algebra.

### What forcing has shown

- **Easton (1970):** for regular cardinals, the function $\kappa \mapsto 2^\kappa$ can be almost anything, subject only to
  monotonicity and König's theorem that $2^\kappa$ has cofinality greater than $\kappa$.
- **Suslin's hypothesis**, a question about characterising the real line by its order, is independent of ZFC (Jech,
  Tennenbaum, Solovay and Tennenbaum, Jensen, around 1967-1971).
- **Whitehead's problem** in abelian group theory is independent of ZFC (Shelah, 1974): a question asked by algebraists that
  turned out to have no answer in ZFC.
- **Martin's axiom** and the stronger **forcing axioms** (the proper forcing axiom, Martin's maximum) say, roughly, that
  generic filters exist for many forcing notions, not just over countable models. They decide many questions; for example,
  the proper forcing axiom implies $2^{\aleph_0} = \aleph_2$.

## 20.3 Reverse mathematics

*Level: expert.* Usually we start from axioms and prove theorems. **Reverse mathematics**, begun by Harvey Friedman in a talk
at the 1974 International Congress of Mathematicians and developed by Stephen Simpson and many others, does the reverse: it
asks which axioms are *needed* to prove a given theorem, and it often finds that the theorem is *equivalent* to those axioms.

### The setting

The base language is **second-order arithmetic**: variables for natural numbers and for sets of natural numbers. That is
enough to talk about most of "ordinary" mathematics, by coding: real numbers as Cauchy sequences of rationals, continuous
functions and countable algebraic structures by sets of numbers. Theorems about uncountable objects must be stated for
countable or separable versions.

The weak base theory is $\mathrm{RCA}_0$ ("recursive comprehension"): basic arithmetic, induction for $\Sigma_1$ formulas, and
the existence of every set that is **computable** from sets you already have. Its standard model is the computable sets.
Then you work over $\mathrm{RCA}_0$: to show a theorem $\Theta$ is equivalent to an axiom $A$, prove $A \rightarrow \Theta$ (the
usual direction) and $\Theta \rightarrow A$ (the "reverse" direction), both in $\mathrm{RCA}_0$.

### The big five

A remarkable discovery: most theorems of classical mathematics that can be stated in this language turn out to be provable in
$\mathrm{RCA}_0$ or equivalent to one of four stronger systems. Together these are the **big five**:

| system | extra axiom, roughly | some equivalent theorems (over $\mathrm{RCA}_0$) |
|---|---|---|
| $\mathrm{RCA}_0$ | computable sets exist | intermediate value theorem; every countable field has an algebraic closure |
| $\mathrm{WKL}_0$ | weak König's lemma: every infinite binary tree has an infinite path | Heine-Borel for $[0, 1]$ (countable covers); a continuous function on $[0, 1]$ is bounded; Brouwer's fixed point theorem; Gödel's completeness theorem (countable languages); every countable commutative ring has a prime ideal |
| $\mathrm{ACA}_0$ | arithmetical comprehension: sets defined by formulas with number quantifiers exist | Bolzano-Weierstrass; every bounded increasing sequence of reals converges; every countable vector space has a basis; every countable commutative ring has a maximal ideal |
| $\mathrm{ATR}_0$ | arithmetical transfinite recursion | any two countable well-orders are comparable; Ulm's theorem for countable abelian $p$-groups |
| $\Pi^1_1\text{-}\mathrm{CA}_0$ | $\Pi^1_1$ comprehension | Cantor-Bendixson theorem: every closed set of reals is a perfect set plus a countable set |

The contrast between "prime ideal" ($\mathrm{WKL}_0$) and "maximal ideal" ($\mathrm{ACA}_0$) is typical: two statements that look
alike in a first algebra course need different amounts of set existence.

### One reversal, in full

**Theorem 20.3.** Over $\mathrm{RCA}_0$, "every bounded increasing sequence of real numbers converges" implies arithmetical
comprehension.

*Proof idea, complete in its main step.* It is known that arithmetical comprehension follows over $\mathrm{RCA}_0$ from the
special case "for every one-to-one function $f: \mathbb{N} \to \mathbb{N}$, the range of $f$ exists as a set". (The range is
the typical non-computable set: it is computably enumerable but need not be computable, like the halting set of
[Chapter 14](14-Undecidability.md).) So let $f$ be one-to-one, and define

$$
c_n = \sum_{i = 0}^{n} 2^{-f(i)}.
$$

The $c_n$ are rational, increasing, and bounded by $\sum_{k \ge 0} 2^{-k} = 2$ (since $f$ is one-to-one, each power of 2
appears at most once). By the hypothesis, they converge to a real number $L$. Now for each $k$: find, by search, an $m$ with
$L - c_m < 2^{-k}$ (it exists since $c_m \to L$; with a little care about rational approximations to $L$ the search can be
done computably from $L$). Then

$$
k \in \operatorname{range}(f) \iff k \in \{ f(0), f(1), \ldots, f(m) \}.
$$

Indeed, if $k = f(j)$ with $j > m$, then $L - c_m \ge 2^{-f(j)} = 2^{-k}$, contrary to the choice of $m$. So the range of $f$ is
computable from $L$, and $\mathrm{RCA}_0$ proves it exists. $\square$

The forward direction is the usual completeness argument for the reals, carried out in $\mathrm{ACA}_0$. So the monotone
convergence theorem is exactly as strong as $\mathrm{ACA}_0$: no more, no less.

### Beyond the big five

Some theorems fall outside the pattern. **Ramsey's theorem for pairs** (every 2-colouring of the pairs of natural numbers has
an infinite one-coloured set; see the [Combinatorics book](../combinatorics/16-Ramsey-Theory.md)) is provable in
$\mathrm{ACA}_0$, but David Seetapun proved in 1995 that it does not imply $\mathrm{ACA}_0$, and Jiayi Liu proved in 2012 that
it does not imply $\mathrm{WKL}_0$. The study of such statements, "the reverse mathematics zoo", is active today. In the other
direction, $\mathrm{ACA}_0$ proves exactly the same arithmetical sentences as PA: it is **conservative** over PA. So the
Goodstein theorem of [Chapter 17](17-Arithmetic-and-Peano.md) is unprovable in $\mathrm{ACA}_0$ too.

## 20.4 Homotopy type theory and univalence

*Level: expert, and brief.* In Martin-Löf's type theory ([Chapter 19](19-Other-Logics.md)), for two terms $a, b$ of a type $A$
there is a type $a = b$ of **identifications** (proofs that $a$ equals $b$). Can two terms be equal "in different ways"? In
1998 Martin Hofmann and Thomas Streicher showed that the rules allow it: they built a model where types are groupoids and
identifications are arrows. Around 2006-2009, Steve Awodey and Michael Warren, and independently Vladimir Voevodsky (a Fields
medallist of 2002, working in algebraic geometry), saw that types behave like **spaces** in homotopy theory: a term is a
point, an identification $a = b$ is a path from $a$ to $b$, an identification between identifications is a deformation of
paths, and so on.

Voevodsky proposed the **univalence axiom**: for types $A$ and $B$ (in a universe of types),

$$
(A = B) \simeq (A \simeq B),
$$

that is, identifications between types correspond exactly to equivalences between them. Informally: **isomorphic structures
are equal**, and everything you prove about one transfers automatically to the other. Mathematicians already reason this way
informally ("identify the two groups by this isomorphism"); univalence makes it a rule. It is incompatible with the idea that
types are just sets with set-theoretic equality, and it has no direct counterpart in ZFC.

The Institute for Advanced Study in Princeton held a special year on these **univalent foundations** in 2012-2013, which
produced the collaborative book *Homotopy Type Theory* (2013). A technical problem, that the univalence axiom blocked
computation in the type theory, was resolved by **cubical type theory** (Cohen, Coquand, Huber and Mörtberg, published in
2018), in which univalence is a theorem that computes. Voevodsky died in 2017.

**An honest assessment.** Homotopy type theory is an active research programme with real results, for example new
synthetic proofs in homotopy theory, such as computations of homotopy groups of spheres done directly in type theory. It has
not replaced set theory as the working foundation, and the largest formal library today (mathlib, 20.5) uses a dependent type
theory with classical logic and without univalence. Whether univalent foundations will become the mainstream is open.

## 20.5 Formalised mathematics today

What has changed most in logic in recent years is not a new theorem but a new practice: large parts of mathematics are being
written out in full in proof assistants and checked by computer ([Chapter 19](19-Other-Logics.md)).

### mathlib

**mathlib** is the community library of mathematics for the Lean proof assistant, begun in 2017 and now maintained by hundreds
of contributors. It contains well over a hundred thousand formal theorems, covering a large share of an undergraduate
curriculum (algebra, analysis, topology, measure theory, number theory, linear algebra) and much graduate material. It is
organised as one coherent library, so new projects can build on everything already there.

### The Liquid Tensor Experiment

In December 2020 Peter Scholze (Fields Medal 2018) posted a challenge on Kevin Buzzard's blog *Xena*: to formalise a central
theorem of his work with Dustin Clausen on "condensed mathematics", the main theorem about liquid real vector spaces. He
explained that the proof was intricate, that he was not fully confident of every detail, and that he considered it perhaps
his most important theorem. A team of Lean users led by Johan Commelin took it on. By June 2021 they had verified the key
technical part, the part Scholze was least sure of; in the process the formalisation led to simplifications of the
argument. The full statement was completed in July 2022. The project, called the **Liquid Tensor Experiment**, showed for the
first time that a proof from the research frontier could be verified within a few years of being found, and that the process
could help the mathematicians who found it.

### Other milestones

- **The polynomial Freiman-Ruzsa conjecture.** Tim Gowers, Ben Green, Freddie Manners and Terence Tao posted a proof in
  November 2023. A collaborative project led by Tao formalised it in Lean in about three weeks.
- **Fermat's last theorem.** In 2024 Kevin Buzzard began a multi-year project to formalise a proof of Fermat's last theorem in
  Lean, reducing it to results known by the 1980s, which would then be the remaining frontier.
- **BB(5).** The value $BB(5) = 47{,}176{,}870$ of [Chapter 14](14-Undecidability.md), determined in 2024 by the online
  collaboration bbchallenge, rests on a proof checked in Coq: deciding the behaviour of every five-state machine required
  many separate deciders, and each was verified formally.
- **Machine learning and formal proof.** Programs that search for formal proofs have improved quickly; for example, in 2024
  Google DeepMind's AlphaProof system found Lean proofs for several problems of that year's International Mathematical
  Olympiad. A formal proof assistant is a natural partner for such systems, because a proof found by a program can be checked
  by the kernel without trusting the program.

**What it means for logic.** The completeness theorem ([Chapter 11](11-Completeness-and-Compactness.md)) said that every
valid argument has a formal proof; for most of the twentieth century that was a theoretical comfort, since nobody wrote
formal proofs of real theorems. Now people do. The questions of this book (which axioms, which logic, constructive or not,
sets or types) have become practical engineering questions in the design of libraries.

## 20.6 Open problems

Here are three open problems that connect to the chapters of this book. Each is stated honestly: what is known, and what is
not.

### P versus NP

Is every problem whose solutions can be *checked* quickly also *solvable* quickly ([Chapter 16](16-Complexity.md))? Stephen
Cook and Leonid Levin formulated the question in the early 1970s; the Clay Mathematics Institute listed it in 2000 among its
seven Millennium Prize Problems, with a prize of one million dollars. Most experts believe $\mathrm{P} \neq \mathrm{NP}$, but
there are theorems explaining why the usual methods cannot settle it: **relativisation** (Baker, Gill and Solovay, 1975: there
are oracles relative to which P = NP and others relative to which they differ, so any proof must use something that does not
relativise), **natural proofs** (Razborov and Rudich, 1994) and **algebrisation** (Aaronson and Wigderson, 2008). It is even
conceivable, though few expect it, that P versus NP is independent of ZFC.

### The continuum hypothesis: a debate, not just a problem

CH is independent of ZFC (Gödel 1940, Cohen 1963; [Chapter 7](07-Infinity-and-Cardinality.md)). So in one sense it is not open:
we know ZFC does not settle it. The open question is whether it has a definite answer at all, and if so, which new axioms
reveal it. Views differ:

- **Gödel** believed CH has a truth value and is false, and hoped new axioms would decide it.
- **Forcing axioms** such as Martin's maximum imply $2^{\aleph_0} = \aleph_2$. Hugh Woodin introduced an axiom called $(\ast)$
  that also gives $2^{\aleph_0} = \aleph_2$, and in 2021 David Asperó and Ralf Schindler proved, in the *Annals of
  Mathematics*, that a strong form of Martin's maximum implies $(\ast)$, bringing two leading approaches together.
- **Woodin** himself has in recent years developed a programme called "Ultimate L", which, if it succeeds, would point the
  other way, towards CH being true.
- **Joel David Hamkins**, in his 2012 paper on the set-theoretic multiverse, argued that there are many equally legitimate
  universes of sets, some with CH and some without, and that the question "is CH true?" has been answered as fully as it can
  be by our detailed knowledge of how to make it true or false.

This is one of the places where mathematics and philosophy meet, and it is not settled.

### The sixth Busy Beaver number

The Busy Beaver function $BB(n)$ ([Chapter 14](14-Undecidability.md)) is the largest number of steps that an $n$-state,
two-symbol Turing machine can run, starting on a blank tape, and still halt. It grows faster than every computable function.
Known values: $BB(1) = 1$, $BB(2) = 6$, $BB(3) = 21$, $BB(4) = 107$, and $BB(5) = 47{,}176{,}870$, the last proved in 2024.

**Try it in Python.** The five-state champion found by Heiner Marxen and Jürgen Buntrock in 1989, in the standard notation
(for each state A to E, what to do on reading 0 and on reading 1: symbol to write, direction, next state; Z means halt):

```python
rules = "1RB1LC_1RC1RB_1RD0LE_1LA1LD_1RZ0LA"
table = {}
for s, part in zip("ABCDE", rules.split("_")):
    for r in (0, 1):
        w, d, nxt = part[3*r:3*r+3]
        table[s, r] = (int(w), 1 if d == "R" else -1, nxt)

tape, pos, state, steps = {}, 0, "A", 0
while state != "Z":
    w, d, state = table[state, tape.get(pos, 0)]
    tape[pos] = w
    pos += d
    steps += 1
print(steps, sum(tape.values()))   # 47176870 4098
```

It runs in a few seconds and prints 47,176,870 steps, leaving 4,098 ones on the tape. Running the champion is easy; the hard
part of the 2024 proof was showing that *no other* five-state machine runs longer while still halting, which meant proving
that every one of the many machines that seem to run forever really does.

For six states the problem is open, and very likely out of reach for now:

- **The lower bounds are enormous.** In 2022 Pavel Kropitz found a six-state machine showing $BB(6) > 10 \uparrow\uparrow 15$, a
  tower of fifteen 10s. In 2025 machines with far longer runs were found, with step counts so large that even writing them
  down needs iterated towers.
- **It contains a Collatz-like problem.** In June 2024 the bbchallenge community found a six-state machine, named
  **Antihydra**, whose halting is equivalent to a question about iterating a map similar to the one in the Collatz ($3n + 1$)
  problem. Nobody knows how to settle it, and a dozen other six-state machines of this kind ("cryptids") are known. So
  determining $BB(6)$ requires solving at least one open problem of Collatz type.
- **Eventually, independence.** By Chapter 18's argument (Theorem 18.4), for each sound theory there is a machine whose
  non-halting the theory cannot prove. Adam Yedidia and Scott Aaronson constructed in 2016 an explicit machine with 7,918 states
  that halts if and only if ZFC is inconsistent; so if ZFC is consistent, ZFC cannot determine $BB(7918)$. Later work by others
  brought the number of states down to below 800. Where between 6 and that bound the values of $BB$ stop being provable in ZFC
  is unknown.

The Busy Beaver problem shows the whole book in one picture: a question about a simple finite device (Chapter 13), unsolvable
in general (Chapter 14), tied by coding to provability (Chapters 17 and 18), and settled in small cases by formal proof
(Chapter 19).

## Check yourself

??? question "1. Why is $\aleph_0$ regular and a strong limit, and why does that make it look like an inaccessible cardinal?"
    Regular: a union of fewer than $\aleph_0$ sets, that is finitely many, each of size less than $\aleph_0$, that is finite, is
    finite. Strong limit: if $n$ is finite, $2^n$ is finite. These are exactly the two conditions in the definition of
    inaccessible, except that inaccessibles are required to be uncountable. And $V_\omega$, the hereditarily finite sets, is a
    model of all the ZFC axioms except infinity, just as $V_\kappa$ models all of ZFC.

??? question "2. Using Corollary 20.2, explain why ZFC + 'there is an inaccessible cardinal' cannot prove its own consistency."
    This is the second incompleteness theorem applied to the stronger theory, which is consistent (we assume), computably
    axiomatised and contains PA. Concretely: the theory proves $\mathrm{Con}(\mathrm{ZFC})$, but to prove its own consistency it
    would need a model of itself, for example a second inaccessible above the first, which it cannot prove to exist.

??? question "3. In the Cohen forcing of 20.2, show that the set $F = \{ p : p(n) = 1 \text{ for some } n \ge 100 \text{ in } \operatorname{dom} p \}$ is dense, and conclude that the generic real $g$ has a 1 somewhere beyond position 100."
    Given any finite $p$, its domain is finite, so there is $n \ge 100$ outside it. Extend $p$ by $n \mapsto 1$; the extension is in
    $F$ and is stronger than $p$. So $F$ is dense, and it is in $M$. A generic $G$ meets it, so some $p \in G$ has $p(n) = 1$ with
    $n \ge 100$, and $g(n) = 1$. The same argument with every bound shows $g$ has infinitely many 1s.

??? question "4. Why can there be no filter $G$ on the Cohen order that meets every dense subset of $P$, rather than only the dense sets in $M$?"
    Let $G$ be any filter and put $D = P \setminus G$. Then $D$ is dense: every condition $p$ has two incompatible extensions
    (extend it at a new position $n$ once by $n \mapsto 0$ and once by $n \mapsto 1$), and a filter cannot contain two
    incompatible conditions, so at least one of them lies in $D$. But $G$ does not meet $D = P \setminus G$. So no filter meets
    every dense set. Genericity has to be relative to a model that does not itself contain $G$, which is why the definition
    uses only the dense sets that belong to $M$.

??? question "5. In the proof of Theorem 20.3, let $f(0) = 3$, $f(1) = 0$, $f(2) = 5$ and suppose these are all the values (the range is $\{0, 3, 5\}$). Compute $L$ and use the method to decide whether 1 and 5 are in the range."
    $L = 2^{-3} + 2^{0} + 2^{-5} = 0.125 + 1 + 0.03125 = 1.15625$. The partial sums are $c_0 = 0.125$, $c_1 = 1.125$,
    $c_2 = 1.15625$. For $k = 1$: need $L - c_m < 2^{-1} = 0.5$; $m = 1$ works ($L - c_1 = 0.03125$). Then $1 \in \operatorname{range}$
    iff $1 \in \{3, 0\}$: no. For $k = 5$: need $L - c_m < 2^{-5} = 0.03125$; $L - c_1 = 0.03125$ is not less, so take $m = 2$
    ($L - c_2 = 0$). Then $5 \in \{3, 0, 5\}$: yes.

??? question "6. Weak König's lemma says every infinite binary tree has an infinite path. Why is it not provable in $\mathrm{RCA}_0$? (Hint: use the standard model of $\mathrm{RCA}_0$, the computable sets.)"
    There is an infinite computable binary tree with no computable infinite path (a classical result of Kleene; the paths can be
    made to code a separation of two computably inseparable c.e. sets, as in Chapter 15). In the model whose sets are the
    computable sets, all axioms of $\mathrm{RCA}_0$ hold, the tree exists, but no path does. So weak König's lemma fails in a model
    of $\mathrm{RCA}_0$, and $\mathrm{RCA}_0$ cannot prove it.

??? question "7. What does the univalence axiom say about two groups $G$ and $H$ that are isomorphic?"
    Groups form a type of structures; univalence (extended to structures, the "structure identity principle") says that an
    isomorphism $G \cong H$ gives an identification $G = H$, and every identification arises this way. So any property expressible
    in the type theory that holds of $G$ automatically holds of $H$: transport along the identification. Note that there can
    be many different identifications, one for each isomorphism, which is why identity is a type and not just true or false.

??? question "8. Run the BB(5) champion of 20.6 by hand for six steps, then by program for 20 steps. Report the state, head position and number of ones each time (start in state A at position 0 on a blank tape)."
    Step 1: A reads 0, writes 1, moves right, enters B (position 1, one 1). Step 2: B reads 0, writes 1, moves right, enters C
    (position 2, two 1s). Step 3: C reads 0, writes 1, moves right, enters D (position 3, three 1s). Step 4: D reads 0, writes 1,
    moves left, enters A (position 2, four 1s). Step 5: A reads 1, writes 1, moves left, enters C (position 1, four 1s). Step 6:
    C reads 1, writes 0, moves left, enters E (position 0, three 1s). Changing the loop condition in the program to
    `while steps < 20` gives, after 20 steps: state B, position 2, seven 1s on the tape.

??? question "9. Explain why the fact that $BB$ grows faster than every computable function implies that no single sound, computably axiomatised theory can prove the value of $BB(n)$ for every $n$."
    If a sound, computably axiomatised theory $T$ proved "$BB(n) = m_n$" for every $n$, then the function $n \mapsto BB(n)$ would be
    computable: search the theorems of $T$ for a sentence of the form "$BB(\overline n) = \overline m$" and output $m$ (soundness makes
    it the right value). But $BB$ grows faster than every computable function, so it is not computable. Contradiction.

??? question "10. ZFC + 'there is a measurable cardinal' proves $V \neq L$. Does it follow that ZFC proves $V \neq L$?"
    No. ZFC does not prove that a measurable cardinal exists. In fact ZFC + $V = L$ is consistent if ZFC is (Gödel), so ZFC
    cannot prove $V \neq L$. Scott's theorem says only that measurable cardinals and $V = L$ are incompatible, so if you accept a
    measurable cardinal you must reject $V = L$.

## What you learned

- Large cardinal axioms (inaccessible, measurable, Woodin, supercompact) are new axioms beyond ZFC, each unprovable from those
  below it by the second incompleteness theorem; they line up in a single ladder of strength and decide many questions about
  the reals, but not CH.
- Forcing adds a generic object to a model of ZFC by meeting all dense sets of conditions; Cohen used it in 1963 to make CH
  fail, and it has shown hundreds of statements independent.
- Reverse mathematics finds that most classical theorems are equivalent over $\mathrm{RCA}_0$ to one of the big five systems;
  monotone convergence is equivalent to $\mathrm{ACA}_0$.
- Homotopy type theory reads types as spaces and identifications as paths; univalence says equivalent types are equal. It is an
  active programme, not yet a mainstream foundation.
- Formalised mathematics is now practical: mathlib, the Liquid Tensor Experiment (2020-2022), the PFR formalisation, the
  BB(5) proof in Coq.
- P versus NP, the meaning of CH, and $BB(6)$ are open; $BB(6)$ already contains a Collatz-like problem.

**Next:** this is the last chapter. Return to the [book's contents](index.md) to revisit any chapter, or go on to the other
books on the shelf.

## Further reading

- A. Kanamori, *The Higher Infinite*, 2nd ed., 2003 (large cardinals and their history).
- K. Kunen, *Set Theory*, 2011 (forcing, done carefully; the earlier 1980 edition is also standard); T. Jech, *Set Theory*,
  3rd millennium ed., 2003.
- P. J. Cohen, "The independence of the continuum hypothesis", *Proceedings of the National Academy of Sciences* 50, 1963,
  and *Set Theory and the Continuum Hypothesis*, 1966.
- T. Y. Chow, "A beginner's guide to forcing", in *Communicating Mathematics*, 2009 (an honest short introduction).
- S. G. Simpson, *Subsystems of Second Order Arithmetic*, 2nd ed., 2009; D. D. Dzhafarov and C. Mummert, *Reverse
  Mathematics: Problems, Reductions, and Proofs*, 2022; J. Stillwell, *Reverse Mathematics: Proofs from the Inside Out*, 2018
  (the gentlest).
- The Univalent Foundations Program, *Homotopy Type Theory: Univalent Foundations of Mathematics*, 2013 (free online).
- The mathlib Community, "The Lean mathematical library", *Proceedings of CPP*, 2020.
- D. Asperó and R. Schindler, "Martin's Maximum++ implies Woodin's axiom $(\ast)$", *Annals of Mathematics* 193, 2021;
  J. D. Hamkins, "The set-theoretic multiverse", *Review of Symbolic Logic* 5, 2012.
- A. Yedidia and S. Aaronson, "A relatively small Turing machine whose behavior is independent of set theory", *Complex
  Systems* 25, 2016; S. Aaronson, "The Busy Beaver frontier", *SIGACT News*, 2020; The bbchallenge Collaboration,
  "Determination of the fifth Busy Beaver value", arXiv, 2025.
- On this site: the Topics lessons [P versus NP](../../topics/logic/level-8/06-p-versus-np.md),
  [The halting problem](../../topics/logic/level-8/05-halting-problem.md) and
  [Gödel's incompleteness](../../topics/logic/level-8/04-godel-incompleteness.md); the
  [Calculus book, Chapter 18](../calculus/18-The-Real-Numbers.md) for the real numbers and monotone convergence; the
  [Linear algebra book, Chapter 5](../linear-algebra/05-Independence-Bases-and-Dimension.md) for bases and Zorn's lemma;
  the [Combinatorics book](../combinatorics/index.md) for Ramsey theory; P versus NP and cryptography in the cryptography
  book, <https://cryptography.akadian.ca/book/>.
