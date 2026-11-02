---
title: "Gödel's incompleteness theorems"
---

# Gödel's incompleteness theorems

*Logic and puzzles · level 8, lesson 4 of 6*

## A question to start

Consider this sentence about a fixed set of axioms $F$ for arithmetic:

> **This sentence cannot be proved from the axioms $F$.**

Unlike the liar ("this sentence is false"), it does not flip back and forth. Suppose it could be proved from $F$.
Then $F$ proves something false, since the sentence says it cannot be proved. Suppose instead it cannot be proved.
Then what it says is **true**. So, as long as $F$ never proves false things, the sentence is **true and unprovable**.

Can a sentence of ordinary arithmetic, about whole numbers, plus and times, really say "I cannot be proved"? In 1931
the 25-year-old logician Kurt Gödel showed that it can. The result changed what mathematicians believe proof can
do.

## The idea

### Formal systems

To talk about what can be proved, we need to say exactly what a proof is. A **formal system** has

- a precise **language**: symbols such as $0$, $S$ (successor), $+$, $\times$, $=$, $\neg$, $\land$, $\forall$,
  variables, brackets, and rules for which strings of symbols are allowed (the language of
  [Predicate logic](01-predicate-logic.md));
- a list of **axioms**, written in that language (for example the [Peano axioms](02-axioms.md));
- **rules of inference**, such as modus ponens.

A **proof** is a finite list of statements, each an axiom or following from earlier ones by a rule. Whether a list
is a correct proof can be checked **mechanically**, by a computer that knows nothing about meaning. (Today, programs
called proof assistants check real mathematical proofs this way.)

Two properties we would love a formal system to have:

- **Consistent**: it never proves both a statement and its negation.
- **Complete**: for every statement $A$ in its language, it proves $A$ or it proves $\neg A$. Nothing is left
  undecided.

### Hilbert's hope

After Russell's paradox ([the last lesson](03-russells-paradox.md)), David Hilbert proposed in the 1920s a plan to put
mathematics on solid ground: write all of mathematics as a formal system, then prove, using only very simple and
safe reasoning, that the system is **consistent** and **complete**. Then every mathematical question could, in
principle, be settled by a proof inside the system, and we would know no contradiction could ever appear.

### What Gödel proved

**First incompleteness theorem (Gödel 1931, sharpened by J. Barkley Rosser in 1936).** Let $F$ be a formal system
such that

1. its axioms can be listed by a computer program (so its proofs can be checked mechanically),
2. it is **consistent**, and
3. it is strong enough to prove basic facts of whole-number arithmetic (with $+$ and $\times$).

Then there is a statement $G$ in the language of $F$ that $F$ can **neither prove nor disprove**.

So no such system is complete. Peano arithmetic is one, and so is ZFC set theory, which contains all of ordinary
mathematics. Each of them leaves some statements undecided.

**Second incompleteness theorem (Gödel 1931).** Such a system $F$ cannot prove its own consistency. (The statement
"$F$ is consistent" can be written in the language of arithmetic, as below, and if $F$ is consistent, $F$ does not
prove it.)

So Hilbert's plan, in its original form, cannot work: no system strong enough for arithmetic can certify its own
consistency, let alone that of stronger systems.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 200" role="img" aria-label="All statements of arithmetic split into true and false. Inside the true ones is a smaller region of statements provable in F. The Gödel sentence G is true but outside the provable region.">
  <rect x="10" y="10" width="420" height="180" rx="8" fill="none" stroke="currentColor"/>
  <line x1="250" y1="10" x2="250" y2="190" stroke="currentColor" stroke-dasharray="5 4"/>
  <rect x="25" y="45" width="160" height="110" rx="10" fill="#7ccf9a" stroke="currentColor"/>
  <rect x="265" y="45" width="150" height="110" rx="10" fill="#eea66f" stroke="currentColor"/>
  <circle cx="215" cy="100" r="6" fill="#9cc9ea" stroke="currentColor"/>
  <g font-size="13" text-anchor="middle" fill="currentColor">
    <text x="130" y="32">true statements</text>
    <text x="340" y="32">false statements</text>
    <text x="105" y="95">provable</text>
    <text x="105" y="112">in F</text>
    <text x="340" y="95">disprovable</text>
    <text x="340" y="112">in F</text>
    <text x="215" y="125">G</text>
    <text x="220" y="180" font-size="11">G is true, but F cannot prove it</text>
  </g>
</svg>
</div>

### How a sentence can talk about proofs: Gödel numbering

Arithmetic talks about numbers, not about sentences or proofs. Gödel's first idea was to turn every symbol, every
statement and every proof into a number, called its **Gödel number**, in such a way that the coding can be undone.
Then a statement about proofs becomes a statement about numbers.

For example, "$x$ is the Gödel number of a correct proof whose last line has Gödel number $y$" becomes an (enormous
but perfectly definite) statement of arithmetic about $x$ and $y$, built only from $+$, $\times$, $=$ and quantifiers.
Checking a proof is a mechanical task, and Gödel showed every such mechanical check can be expressed this way. Call
it $\text{Proof}(x, y)$. Then "$y$ is provable" is

$$\text{Prov}(y) \;\equiv\; \exists x\ \text{Proof}(x, y).$$

And "$F$ is consistent" can be written as "no number is the Gödel number of a proof of $0 = 1$", that is,
$\neg\text{Prov}(\ulcorner 0 = 1 \urcorner)$, where $\ulcorner A \urcorner$ means the Gödel number of $A$.

### The self-referring sentence

Gödel's second idea, now called the **diagonal lemma**, is a way to build, for any property of numbers, a sentence
that says "my own Gödel number has this property". Applied to "is not provable", it gives a sentence $G$ such that
$F$ proves

$$G \leftrightarrow \neg\text{Prov}(\ulcorner G \urcorner).$$

$G$ says, through the coding, "I am not provable in $F$". It is the opening sentence, built out of arithmetic. The
trick is the same diagonal idea as in [Russell's paradox](03-russells-paradox.md) and Cantor's theorem: something is
fed its own description.

Now the argument. Suppose $F$ is consistent.

- **$F$ does not prove $G$.** If it did, there would be an actual proof, with some Gödel number $n$, and $F$, which
  can check proofs, would also prove $\text{Proof}(n, \ulcorner G \urcorner)$, hence
  $\text{Prov}(\ulcorner G \urcorner)$. But proving $G$ also proves $\neg\text{Prov}(\ulcorner G \urcorner)$. Then $F$ proves a statement and its
  negation: inconsistent. So $F$ does not prove $G$.
- **So $G$ is true.** What $G$ says is exactly "$G$ is not provable in $F$", and we have just shown that.
- **$F$ does not disprove $G$ either.** This part is more delicate; Gödel needed a slightly stronger assumption than
  consistency, and Rosser in 1936 found a cleverer sentence that needs only consistency.

Compare the liar: "this sentence is **false**" is a paradox; "this sentence is **unprovable**" is a theorem.
Replacing truth by provability turns a contradiction into a discovery: **truth and provability are not the same
thing**.

The second theorem comes from formalising the first bullet point inside $F$: $F$ can prove "if $F$ is consistent,
then $G$ is not provable", that is, "if $F$ is consistent then $G$". If $F$ could prove its own consistency, it would
then prove $G$, which we showed it cannot.

### What the theorems do NOT say

Gödel's theorems are often quoted far beyond what they say. Some honest limits:

- **Not "mathematics is inconsistent" or "nothing is certain".** Proofs inside a system are just as reliable as
  before. The theorems are about what a system can **reach**, not about errors.
- **Not "some truths can never be known".** The sentence $G$ for $F$ can be proved in a stronger system (for example
  $F$ plus the axiom "$F$ is consistent"). That stronger system has its own unprovable sentence, and so on: no single
  system catches everything, but each particular $G$ can be caught by some system.
- **Not about every system.** The theorem needs multiplication as well as addition. Arithmetic with addition only
  (Presburger arithmetic, 1929) is complete, and a computer can decide every statement in it. Alfred Tarski showed
  that elementary Euclidean geometry (in a suitable formal language) is complete too.
- **Not about everyday questions being undecided.** Most theorems mathematicians care about are proved in ZFC
  without trouble. The theorems say only that **some** statements are undecided.
- **Not a proof that minds beat machines.** This claim has been argued in both directions by philosophers; it does
  not follow from the theorems alone.

### Real undecided statements

Gödel's $G$ is artificial. Are there natural undecidable questions? Yes.

- **The continuum hypothesis** says there is no size of infinity strictly between the size of the whole numbers and
  the size of the real numbers. Gödel (1940) showed ZFC cannot disprove it, and Paul Cohen (1963) showed ZFC cannot
  prove it. It is independent of ZFC, like the parallel postulate from Euclid's other axioms.
- **Goodstein's theorem** (worked example 3) is a true statement about whole numbers that Peano arithmetic cannot
  prove, as Laurence Kirby and Jeff Paris showed in 1982. It can be proved using stronger axioms about infinite sets.

## Worked examples

**1. A toy Gödel numbering.** Give each symbol a digit: $0 \mapsto 1$, $S \mapsto 2$, $= \mapsto 3$, $+ \mapsto 4$.
Code the statement $S0 + S0 = SS0$ (which says $1 + 1 = 2$).

Reading symbol by symbol: $S, 0, +, S, 0, =, S, S, 0$ gives digits $2, 1, 4, 2, 1, 3, 2, 2, 1$, so the code is
**214213221**. Every statement gets a number, and from the number you can read the statement back. Gödel's real
coding used powers of primes (the $k$th symbol's code as the exponent of the $k$th prime), so that unique
factorisation guarantees decoding, and so that the coding of proofs can be described with $+$ and $\times$.

**2. Why consistency matters.** An **inconsistent** system proves everything. Show this: if a system proves both $A$
and $\neg A$, it proves any statement $B$.

From $A$, the system can prove $A \lor B$ (an "or" is true if one part is). From $A \lor B$ and $\neg A$, it gets
$B$ (if one of two things holds and it is not the first, it is the second). So it proves $B$, whatever $B$ is. ∎ An
inconsistent system is "complete" in a useless way. That is why the theorem assumes consistency, and why Hilbert
wanted it proved.

**3. Goodstein sequences.** Write a number in **hereditary base 2**: as a sum of powers of 2, with the exponents also
written that way. Then replace every 2 by a 3, and subtract 1. Write the result in hereditary base 3, replace every 3
by 4, subtract 1, and so on.

Start with 3: $3 = 2^1 + 1$. Bump the base: $3^1 + 1 = 4$; subtract 1: **3**. In base 3, $3 = 3^1$; bump to $4^1 = 4$;
subtract 1: **3**. In base 4, $3$ is just $3$; bump (no change); subtract 1: **2**. Then **1**, then **0**. The
sequence is $3, 3, 3, 2, 1, 0$.

Start with 4: $4 = 2^2$. Bump: $3^3 = 27$; subtract 1: **26**. Then the sequence goes $41, 60, 83, 109, 139, \ldots$
and grows for an unimaginably long time. Goodstein's theorem (1944) says that **every** such sequence, from every
starting number, eventually reaches 0. It is true, and the proof uses infinite ordinal numbers; Kirby and Paris
proved that the Peano axioms alone cannot prove it.

## Try it

1. Using the toy coding of worked example 1, decode 2131 and 2141321. Are they true?
2. Code $0 + 0 = 0$. Is it a true statement?
3. True or false, and why: (a) "Gödel proved that arithmetic is inconsistent." (b) "Peano arithmetic cannot prove
   every true statement about whole numbers." (c) "There is a statement that no formal system at all can prove."
4. What are the three conditions on $F$ in the first incompleteness theorem? Which one fails for the system whose
   axioms are **all true statements of arithmetic**, and why is that system not a counterexample?
5. Find the Goodstein sequence starting at 2.
6. Explain in your own words why "this sentence is unprovable" is not a paradox, while "this sentence is false" is.
7. If $F$ is consistent, is $F$ + "$\neg G$" consistent? (Think about what $F$ cannot prove.)
8. Harder. Compute the first three terms after 5 of the Goodstein sequence starting at 5. (Write $5 = 2^2 + 1$.)

??? note "Answers"
    1. $2, 1, 3, 1$ is $S0 = 0$, which says $1 = 0$: a statement, but false. $2, 1, 4, 1, 3, 2, 1$ is
       $S0 + 0 = S0$, which says $1 + 0 = 1$: true. (Not every number codes a statement: 3333 would be "= = = =",
       which means nothing.)
    2. $0, +, 0, =, 0$ gives **14131**. It says $0 + 0 = 0$: true.
    3. (a) False: Gödel's theorems assume consistency and say nothing of the kind. (b) True: by the first theorem,
       some statement (for example its Gödel sentence, or Goodstein's theorem) is true but not provable in it.
       (c) False as stated: any true statement $A$ is provable in the system whose only axiom is $A$. The theorem
       says no **single** (suitable) system proves all truths.
    4. Its axioms can be listed by a program; it is consistent; it can do basic arithmetic. "All true statements"
       is consistent and complete, but there is no program that lists exactly the true statements of arithmetic
       (that is part of what Gödel's theorem shows), so condition 1 fails.
    5. $2 = 2^1$. Bump: $3^1 = 3$; subtract 1: 2. In base 3, $2$ is $2$; bump: 2; subtract 1: 1. Then 0.
       Sequence: $2, 2, 1, 0$.
    6. The liar can be neither true nor false. "This sentence is unprovable" can consistently be **true**: it just
       is not provable. Nothing forces it to be both; it shows truth and proof come apart.
    7. **Yes.** If $F + \neg G$ were inconsistent, then $F$ could prove $G$ (a proof by contradiction from
       $\neg G$). But $F$ does not prove $G$. So $F + \neg G$ is consistent, even though $\neg G$ is false in the
       ordinary whole numbers. (Such a system describes a strange "non-standard" model of arithmetic.)
    8. $5 = 2^2 + 1$. Bump: $3^3 + 1 = 28$; subtract 1: **27**, which is $3^3$. Bump: $4^4 = 256$; subtract 1:
       **255** $= 3 \cdot 4^3 + 3 \cdot 4^2 + 3 \cdot 4 + 3$. Bump: $3 \cdot 125 + 3 \cdot 25 + 3 \cdot 5 + 3 = 468$;
       subtract 1: **467**. So $5, 27, 255, 467, \ldots$

## Common mistake

**"Gödel showed that math cannot prove anything for certain."** He showed that no single (suitable) consistent system
proves **every** truth of arithmetic, and none proves its own consistency. What a system does prove is as solid as
ever.

**Forgetting the conditions.** The theorem needs a consistent, mechanically listed system that includes arithmetic
with multiplication. Weaker systems, like arithmetic with only addition, can be complete.

## Where it leads

- Back: [Russell's paradox and sets](03-russells-paradox.md) · Next: [Turing and the halting problem](05-halting-problem.md),
  the same diagonal idea applied to computer programs.
- [Level 8 page](index.md) · [Logic topic page](../index.md)
- The liar, from which the idea grew: [Paradoxes](../level-7/06-paradoxes.md).
- The sizes of infinity behind the continuum hypothesis: [Infinity](../../infinity/index.md).
- Unique factorisation, which makes Gödel's prime-power coding work: [Unique factorisation](../../number-theory/level-6/06-unique-factorisation.md).
- Famous questions that might be hard to settle: [Famous open problems](../../number-theory/level-8/05-open-problems.md).
