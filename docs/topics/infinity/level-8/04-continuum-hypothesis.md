---
title: "The continuum hypothesis"
---

# The continuum hypothesis

*Infinity and strange math · level 8, lesson 4 of 7*

## A question to start

You know two sizes of infinite set of real numbers. The countable sets, like $\mathbb{N}$, $\mathbb{Q}$ and the
algebraic numbers, have size $\aleph_0$. The interval $[0, 1]$, the irrationals, the Cantor set and the whole line
have the bigger size $\mathfrak{c}$, the continuum.

Is there anything **in between**? Is there a set of real numbers that is too big to be listed, but still smaller than
the whole line?

Cantor believed the answer was no, and spent years trying to prove it. In 1900 David Hilbert put the question first on
his famous list of 23 problems for the new century. The answer, when it came, was stranger than anyone expected: using
the standard rules that all of modern mathematics is built on, the question **cannot be answered at all**. It can be
neither proved nor disproved.

## The idea

### The question in symbols

The size of a set is called its **cardinality**. From lesson 4 of level 7, the reals have the same size as the power
set of $\mathbb{N}$, so

$$\mathfrak{c} = |\mathbb{R}| = |\mathcal{P}(\mathbb{N})| = 2^{\aleph_0}.$$

(The notation $2^{\aleph_0}$ copies the finite rule: a set of size $n$ has $2^n$ subsets.)

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 150" role="img" aria-label="A ladder of sizes of infinity from left to right: finite sizes, aleph-null, a gap with a question mark, the continuum, then the size of the power set of the reals">
  <line x1="15" y1="70" x2="345" y2="70" stroke="currentColor" stroke-width="2"/>
  <circle cx="40" cy="70" r="16" fill="#7ccf9a"/>
  <text x="40" y="75" font-size="13" text-anchor="middle" fill="currentColor">n</text>
  <text x="40" y="108" font-size="11" text-anchor="middle" fill="currentColor">finite</text>
  <circle cx="120" cy="70" r="16" fill="#9cc9ea"/>
  <text x="120" y="75" font-size="13" text-anchor="middle" fill="currentColor">ℵ₀</text>
  <text x="120" y="108" font-size="11" text-anchor="middle" fill="currentColor">ℕ, ℤ, ℚ</text>
  <circle cx="195" cy="70" r="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="195" y="75" font-size="13" text-anchor="middle" fill="currentColor">?</text>
  <text x="195" y="108" font-size="11" text-anchor="middle" fill="currentColor">between?</text>
  <circle cx="265" cy="70" r="16" fill="#eea66f"/>
  <text x="265" y="75" font-size="13" text-anchor="middle" fill="currentColor">𝔠</text>
  <text x="265" y="108" font-size="11" text-anchor="middle" fill="currentColor">ℝ, 𝒫(ℕ)</text>
  <circle cx="330" cy="70" r="16" fill="#9cc9ea"/>
  <text x="330" y="75" font-size="13" text-anchor="middle" fill="currentColor">2<tspan font-size="9" dy="-6">𝔠</tspan></text>
  <text x="330" y="108" font-size="11" text-anchor="middle" fill="currentColor">𝒫(ℝ)</text>
  <text x="180" y="30" font-size="12" text-anchor="middle" fill="currentColor">smaller  →  bigger</text>
  <text x="195" y="135" font-size="11" text-anchor="middle" fill="currentColor">CH: nothing</text>
</svg>
</div>

The **continuum hypothesis** (CH for short), stated by Cantor in 1878, says:

> There is no set $S$ with $\aleph_0 < |S| < \mathfrak{c}$. Every infinite set of real numbers is either countable or
> the same size as $\mathbb{R}$.

Mathematicians name the infinite sizes in order: $\aleph_0$ is the smallest infinite size, $\aleph_1$ is the next one
up, then $\aleph_2$, and so on. (That there is always a "next one up" is itself a theorem; see lesson 5.) In this
language, CH says $2^{\aleph_0} = \aleph_1$: the continuum is the very next infinity after the countable one.

### Why it seemed it should be true

Every set of real numbers that anyone could actually describe turned out to be countable or of size $\mathfrak{c}$:
the fractions, the algebraic numbers, intervals, the Cantor set, the irrationals, the transcendentals. Cantor even
proved CH for a large family of sets: every **closed** set of reals (one that contains all the points it gets
arbitrarily close to, like $[0,1]$ or the Cantor set) is either countable or of size $\mathfrak{c}$. So no
"in-between" set can be closed. But he could not handle every set, and nobody else could either.

### Axioms: the rules of the game

To understand the answer, you need to know what "prove" means at the very bottom of mathematics. Every proof starts
from **axioms**: basic statements accepted without proof, the agreed rules of the game. For example, Euclid's geometry
starts from five postulates, one of which is the **parallel postulate** (through a point not on a line there is
exactly one parallel line).

Since the early 1900s almost all of mathematics has been built on one list of axioms about sets, called **ZFC**,
after Ernst Zermelo and Abraham Fraenkel, with **C** for the **axiom of choice**. The axioms say things like "two sets
with the same members are equal", "for any set there is a set of all its subsets", "there is an infinite set". Numbers,
functions, the real line, calculus: all can be built from these rules. A statement is a theorem when it follows from
ZFC by logic.

### Independent statements

A statement is **independent** of a set of axioms if the axioms can neither prove it nor disprove it. The way to
show that is to find two **models**, two "worlds" where all the axioms are true: one in which the statement is true,
and one in which it is false. If the axioms proved the statement, it would be true in every model; if they disproved
it, it would be false in every model. Two models with different answers rule out both.

The classic example is the parallel postulate. For two thousand years people tried to prove it from Euclid's other
four postulates. In the 1800s, a new geometry was found (it can be pictured on a saddle-shaped surface) where the
other four hold and the parallel postulate fails: through a point there are many parallels. So it is independent of them, and both kinds of geometry are equally
consistent.

### Gödel and Cohen

The continuum hypothesis turned out to be just like that.

- **1940: Kurt Gödel** built, inside any model of ZFC, a smaller and very orderly world, the **constructible
  universe**, which contains only the sets that can be defined, built stage by stage. In it, all
  the ZFC axioms hold, and CH is **true**. So ZFC cannot **disprove** CH.
- **1963: Paul Cohen** invented a new method, called **forcing**, for enlarging a model of ZFC by adding new sets in a
  carefully controlled way. He added so many new real numbers that the continuum became $\aleph_2$ instead of
  $\aleph_1$, with all the ZFC axioms still holding. In that world CH is **false**. So ZFC cannot **prove** CH. Cohen
  received the Fields Medal for this in 1966.

Together: CH is **independent of ZFC**. (One honest caveat: both results assume that ZFC itself is consistent,
that is, never proves a contradiction. By Gödel's incompleteness theorems, ZFC cannot prove its own consistency, so
this assumption can never be removed from inside ZFC.)

### What does that mean?

It does **not** mean that mathematicians are too weak to find the proof. It means that the agreed rules do not decide
the question, in the same way that Euclid's first four postulates do not decide whether parallel lines are unique.
You could add CH as a new axiom, or add its opposite, and in either case you would get a consistent system (if ZFC is
consistent).

Mathematicians still argue about what to do. Some think CH has no single true answer, and that there are many equally
good "universes of sets". Others think that new, natural axioms will one day be found that settle it, and research
on candidate axioms continues today. Forcing itself became one of the main tools of set theory, used to show that many
other questions are independent too.

### The arithmetic of infinite sizes

While the middle stays mysterious, the arithmetic of the sizes you know is completely settled by earlier lessons:

- $\aleph_0 + \aleph_0 = \aleph_0$ (two countable lists merge into one, like the integers);
- $\aleph_0 \cdot \aleph_0 = \aleph_0$ (pairs are countable, by the diagonal walk of level 6);
- $\mathfrak{c} \cdot \mathfrak{c} = \mathfrak{c}$ (a square has as many points as a line, lesson 6 of level 7);
- $2^{\aleph_0} = \mathfrak{c}$ and $2^{\mathfrak{c}} > \mathfrak{c}$ (Cantor's theorem).

Adding and multiplying infinite sizes rarely makes anything bigger. Only the power $2^{(\cdot)}$ is guaranteed to
climb.

## Worked examples

**1. Placing sets on the ladder.** Give the size of each set: (a) the primes; (b) the irrational numbers in $[0, 1]$;
(c) the Cantor set; (d) all subsets of $\mathbb{N}$; (e) all finite subsets of $\mathbb{N}$.

(a) $\aleph_0$: an infinite subset of $\mathbb{N}$. (b) $\mathfrak{c}$ (level 7, lesson 2). (c) $\mathfrak{c}$
(level 7, lesson 5). (d) $2^{\aleph_0} = \mathfrak{c}$. (e) $\aleph_0$: list the finite subsets by their largest
element; there are only finitely many with largest element at most $m$ (in fact $2^m$ subsets of $\{1, \ldots, m\}$).
Every set here is on one of the two known rungs, as CH predicts.

**2. A toy example of independence.** Take a tiny axiom system about a set of dots with one axiom: "there are at least
two dots". Is the statement "there are exactly three dots" independent?

Model 1: three dots. The axiom holds and the statement is true. Model 2: five dots. The axiom holds and the statement
is false. So the axiom can neither prove nor disprove the statement: it is independent. Gödel and Cohen did the same
thing for CH, except that their "models" are whole universes of sets, and building them is very hard.

**3. Why a cheap proof of "not CH" fails.** Someone says: "Take $S$ = the rationals together with the Cantor set.
It is bigger than $\mathbb{Q}$ and smaller than $\mathbb{R}$." Check: $S$ contains the Cantor set, which has size
$\mathfrak{c}$, so $|S| = \mathfrak{c}$. It is not in between. Every attempt of this kind lands on one of the two
rungs; Cohen showed you would need to step outside ZFC to find a genuine in-between set.

**4. Infinite arithmetic.** Show $\mathfrak{c} + \mathfrak{c} = \mathfrak{c}$. Take $[0, 1)$ and $[1, 2)$, both of
size $\mathfrak{c}$ and not overlapping. Together they make $[0, 2)$, which has size $\mathfrak{c}$ (stretch $[0,1)$
by 2). So $\mathfrak{c} + \mathfrak{c} = \mathfrak{c}$.

## Try it

1. What is $\aleph_0 + 5$? Explain with Hilbert's hotel.
2. Show that $\aleph_0 + \mathfrak{c} = \mathfrak{c}$. (Hint: the rationals and the irrationals.)
3. What size is the set of all infinite 0-1 sequences? The set of all 0-1 sequences that are eventually all 0?
4. Explain the difference between "CH is unproven" and "CH is independent of ZFC".
5. Gödel showed that CH holds in one model of ZFC. Why does that alone **not** prove CH?
6. In the dot system of worked example 2, is "there are at least two dots" independent? Is "there is at least one
   dot"?
7. Which is the stronger claim, that $2^{\aleph_0} = \aleph_1$ or that $2^{\aleph_0} > \aleph_0$? Which one is a
   theorem of ZFC?

??? note "Answers"
    1. $\aleph_0$. A full countable hotel can take 5 more guests: everyone moves up 5 rooms, freeing rooms 1 to 5.
    2. $\mathbb{R}$ is the rationals (size $\aleph_0$) together with the irrationals (size $\mathfrak{c}$), with no
       overlap, and $|\mathbb{R}| = \mathfrak{c}$. So $\aleph_0 + \mathfrak{c} = \mathfrak{c}$.
    3. All infinite 0-1 sequences: $2^{\aleph_0} = \mathfrak{c}$. Eventually-0 sequences: each is fixed by a finite
       block before the endless 0s, so they are countable, $\aleph_0$ (they match the finite subsets of
       $\mathbb{N}$).
    4. "Unproven" means nobody has found a proof **yet**; one might exist. "Independent" means it has been **proved**
       that no proof and no disproof exist from those axioms (assuming they are consistent). The second is a theorem
       about the axioms, not a gap in knowledge.
    5. A statement proved from ZFC must hold in **every** model of ZFC. One model where CH is true only shows that ZFC
       cannot **disprove** CH. Cohen's model, where CH fails, shows ZFC cannot prove it.
    6. "At least two dots" is the axiom itself, so it is provable, not independent. "At least one dot" follows from it
       (two dots means at least one), so it is also provable.
    7. $2^{\aleph_0} = \aleph_1$ (that is CH) is the stronger, more specific claim. $2^{\aleph_0} > \aleph_0$ is
       Cantor's theorem, a theorem of ZFC. CH says how much bigger: just one step.

## Common mistake

**"Independent" means "unknown".** It does not. The independence of CH is a proved theorem: the axioms provably do
not settle it. What remains open is whether we should adopt new axioms, which is a question about choosing rules, not
about finding a hidden proof.

**Thinking CH is about strange made-up sets.** It is a plain question about subsets of the real line, one of the most
familiar objects in mathematics. That is what makes its independence so remarkable.

## Where it leads

- Previous: [Gabriel's horn](03-gabriels-horn.md). Next: [Ordinals and cardinals](05-ordinals-cardinals.md), counting
  past infinity and naming $\aleph_1$ properly.
- [Level 8 page](index.md) · [Infinity topic page](../index.md) · The sizes $\aleph_0$ and $\mathfrak{c}$:
  [Level 7](../level-7/index.md).
- Axioms and what proof means: [Axioms](../../logic/level-8/02-axioms.md) and
  [Gödel's incompleteness theorems](../../logic/level-8/04-godel-incompleteness.md) in Logic, level 8. Geometry on a
  sphere, where there are no parallel lines at all: [Sphere geometry](../../geometry/level-8/06-sphere-geometry.md).
- On the U of T shelf: sets and the foundations of proof in [MAT137 Unit 1](../../../uoft/MAT137/unit01.md) and
  [MAT158 Unit 1](../../../uoft/MAT158H1/unit01.md); set theory itself is a later, specialist course.
