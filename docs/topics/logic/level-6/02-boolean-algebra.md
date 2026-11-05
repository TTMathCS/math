---
title: "Boolean algebra"
---

# Boolean algebra

*Logic and puzzles · level 6, lesson 2 of 6*

## A question to start

An engineer designs this circuit: take $A$ AND $B$; separately take $A$ AND (NOT $B$); then join the two results with
an OR. That is four gates.

Try every input. With $A = 0$, both ANDs give 0, so the output is 0. With $A = 1$, one of the two ANDs gives 1
(whichever matches $B$), so the output is 1. The output is always **exactly $A$**. Four gates doing the work of a
plain wire.

Could the engineer have known this without trying every input? Yes, by **algebra**. Just as
$3x + 5x$ simplifies to $8x$, expressions with AND, OR and NOT obey laws that let you simplify them. This algebra is
named after George Boole, an English mathematician who published it in 1854 in a book called *The Laws of Thought*.
For more than eighty years it looked like pure philosophy. Then, in 1937, the American engineer Claude Shannon showed that it
describes switching circuits exactly, and it became the mathematics of every computer chip.

## The idea

### The setting

In Boolean algebra every variable is 0 or 1 (false or true). There are three operations: $\land$ (AND), $\lor$ (OR)
and $\neg$ (NOT). Engineers often write $AB$ for $A \land B$, $A + B$ for $A \lor B$ and $\overline{A}$ for $\neg A$.
We keep the logic symbols here, so nothing looks like ordinary arithmetic when it is not.

Two expressions are **equal** (written $=$, or $\equiv$) if they give the same output for every input. That is the
same as "logically equivalent" in level 4, and the same as "the same circuit behaviour".

### The laws

Each law can be checked with a truth table, because there are only finitely many rows. But it is better to see **why**
each is true, and every one has a one-line reason.

| Name | Law | Reason |
| --- | --- | --- |
| Identity | $A \land 1 = A$, $A \lor 0 = A$ | "true and $A$" is as true as $A$; "false or $A$" too |
| Domination | $A \land 0 = 0$, $A \lor 1 = 1$ | one false part kills an *and*; one true part saves an *or* |
| Idempotent | $A \land A = A$, $A \lor A = A$ | saying it twice says nothing new |
| Complement | $A \land \neg A = 0$, $A \lor \neg A = 1$ | nothing is both; everything is one or the other |
| Double negation | $\neg\neg A = A$ | flipping twice puts it back |
| Commutative | $A \land B = B \land A$, $A \lor B = B \lor A$ | order of the inputs does not matter |
| Associative | $(A \land B) \land C = A \land (B \land C)$, same for $\lor$ | all must be true / one must be true, however grouped |
| Distributive | $A \land (B \lor C) = (A \land B) \lor (A \land C)$ | see below |
| Distributive (2) | $A \lor (B \land C) = (A \lor B) \land (A \lor C)$ | see below |
| Absorption | $A \lor (A \land B) = A$, $A \land (A \lor B) = A$ | see below |
| De Morgan | $\neg(A \land B) = \neg A \lor \neg B$, $\neg(A \lor B) = \neg A \land \neg B$ | [level 5](../level-5/03-de-morgan.md) |

Notice that every law comes in a **pair**: swap $\land$ with $\lor$ and 0 with 1, and you get another true law. This
is called **duality**, and it halves the work of remembering.

### The two distributive laws

The first distributive law looks like arithmetic: $a \times (b + c) = a \times b + a \times c$, with $\times$ as AND
and $+$ as OR. In words: "$A$, and also ($B$ or $C$)" means "($A$ and $B$) or ($A$ and $C$)". In the Venn diagram of
[level 5](../level-5/02-union-intersection.md), both sides are the part of circle $A$ that lies in $B$ or $C$.

The **second** law has no arithmetic twin: $a + (b \times c)$ is **not** $(a + b) \times (a + c)$ for numbers (try
$a = b = c = 1$: $2$ versus $4$). But in logic it is true. Reason by cases:

- If $A = 1$: the left side $A \lor (\ldots)$ is 1. On the right, both brackets contain "$1 \lor \ldots$", so both
  are 1, and $1 \land 1 = 1$. Equal.
- If $A = 0$: the left side is $B \land C$. The right side is $(0 \lor B) \land (0 \lor C) = B \land C$. Equal.

Both cases agree, so the law holds. "Reason by cases on one variable" is a powerful trick: each variable has only two
possible values.

### Absorption

$A \lor (A \land B) = A$. Cases again: if $A = 1$, both sides are 1; if $A = 0$, the left is $0 \lor 0 = 0$. In
words: "it is raining, or it is raining and cold" says no more than "it is raining". The extra part is **absorbed**.
The other one, $A \land (A \lor B) = A$, is its dual.

### Simplifying

Simplifying means using the laws, one step at a time, to reach a shorter expression. Fewer symbols means fewer gates:
a cheaper, faster, cooler chip. Here is the opening circuit:

$$(A \land B) \lor (A \land \neg B) = A \land (B \lor \neg B) = A \land 1 = A.$$

Step 1 uses the distributive law backwards (taking $A$ out as a common factor). Step 2 uses the complement law. Step 3
uses identity. Each step has a reason, just like solving an equation.

### NAND can build everything

Here is a remarkable fact: **every** circuit can be built using **only NAND gates**. Recall NAND: $A$ NAND $B$ =
$\neg(A \land B)$. It is 0 only when both inputs are 1. Since AND, OR and NOT are enough to build any truth table at
all, it is enough to build those three.

**NOT from one NAND.** Feed the same wire into both inputs: $A$ NAND $A = \neg(A \land A) = \neg A$ (idempotent law).

**AND from two NANDs.** NAND is "AND then NOT". Undo the NOT with another NOT:
$A \land B = \neg\neg(A \land B) = \neg(A \text{ NAND } B)$, and that last NOT is one more NAND with its inputs tied
together.

**OR from three NANDs.** Here De Morgan does the work. $A \lor B = \neg\neg(A \lor B) = \neg(\neg A \land \neg B)$,
which is exactly $(\neg A)$ NAND $(\neg B)$. Make $\neg A$ and $\neg B$ with one NAND each, then one more NAND.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 130" role="img" aria-label="Left: one NAND gate with both inputs tied to A gives NOT A. Right: two NAND gates make NOT A and NOT B, and a third NAND of those gives A OR B">
  <g stroke="currentColor" stroke-width="1.5" fill="none">
    <line x1="10" y1="65" x2="30" y2="65"/>
    <line x1="30" y1="57" x2="30" y2="73"/>
    <line x1="30" y1="57" x2="50" y2="57"/><line x1="30" y1="73" x2="50" y2="73"/>
    <path d="M 50 45 H 70 A 20 20 0 0 1 70 85 H 50 Z" fill="#eea66f"/>
    <circle cx="94" cy="65" r="4"/><line x1="98" y1="65" x2="120" y2="65"/>
    <line x1="190" y1="30" x2="210" y2="30"/><line x1="210" y1="22" x2="210" y2="38"/>
    <line x1="210" y1="22" x2="230" y2="22"/><line x1="210" y1="38" x2="230" y2="38"/>
    <path d="M 230 10 H 250 A 20 20 0 0 1 250 50 H 230 Z" fill="#eea66f"/>
    <circle cx="274" cy="30" r="4"/>
    <line x1="190" y1="100" x2="210" y2="100"/><line x1="210" y1="92" x2="210" y2="108"/>
    <line x1="210" y1="92" x2="230" y2="92"/><line x1="210" y1="108" x2="230" y2="108"/>
    <path d="M 230 80 H 250 A 20 20 0 0 1 250 120 H 230 Z" fill="#eea66f"/>
    <circle cx="274" cy="100" r="4"/>
    <path d="M 278 30 H 300 V 57 H 330"/><path d="M 278 100 H 300 V 73 H 330"/>
    <path d="M 330 45 H 350 A 20 20 0 0 1 350 85 H 330 Z" fill="#9cc9ea"/>
    <circle cx="374" cy="65" r="4"/><line x1="378" y1="65" x2="400" y2="65"/>
  </g>
  <g fill="currentColor"><circle cx="30" cy="65" r="3"/><circle cx="210" cy="30" r="3"/><circle cx="210" cy="100" r="3"/></g>
  <g font-size="13" fill="currentColor">
    <text x="0" y="60">A</text><text x="124" y="69">¬A</text>
    <text x="180" y="25">A</text><text x="180" y="95">B</text><text x="282" y="22">¬A</text><text x="282" y="118">¬B</text>
    <text x="404" y="69">A ∨ B</text>
  </g>
</svg>
</div>

So NOT costs 1 NAND, AND costs 2, OR costs 3. A gate that can build every other gate is called **universal**. NOR is
universal too (by the dual argument). Chip factories like this: one kind of gate, made billions of times, is simpler
to manufacture than many kinds.

<figure class="play" data-play="truth"><span class="ai-tag">AI-created</span><figcaption><b>Check a law.</b> Compare XOR with "(P OR Q) AND NOT (P AND Q)" row by row.</figcaption></figure>

## Worked examples

**1. Absorption in action.** Simplify $\neg(\neg A \lor \neg B) \lor B$.

- De Morgan: $\neg(\neg A \lor \neg B) = \neg\neg A \land \neg\neg B = A \land B$.
- So the expression is $(A \land B) \lor B$, which by absorption (with the roles of $A$ and $B$ swapped, and
  commutativity) is $B$.

Check one row: $A = 0$, $B = 1$: $\neg A = 1$, $\neg B = 0$, $\neg(1 \lor 0) = 0$, and $0 \lor 1 = 1 = B$. ✓

**2. The second distributive law.** Simplify $(A \lor B) \land (A \lor \neg B)$.

By the second distributive law (backwards): $= A \lor (B \land \neg B) = A \lor 0 = A$. It is the dual of the opening
question, as duality predicts.

**3. A tidy-up.** Simplify $A \land (\neg A \lor B)$.

- Distribute: $(A \land \neg A) \lor (A \land B)$.
- Complement: $0 \lor (A \land B)$.
- Identity: $A \land B$.

In words: "$A$, and (not $A$ or $B$)". Once you know $A$ is true, "not $A$" is dead, so "$B$" must carry the *or*.
That is the disjunctive syllogism from [level 5](../level-5/05-valid-arguments.md) hiding in algebra.

**4. Always true.** Show $\neg(A \land \neg B) \lor A = 1$.

De Morgan: $\neg(A \land \neg B) = \neg A \lor B$. So the expression is $\neg A \lor B \lor A$. Rearrange:
$(A \lor \neg A) \lor B = 1 \lor B = 1$. An expression that is 1 for every input is called a **tautology**: its
circuit is a wire tied permanently to "on".

**5. XOR from four NANDs.** Let $N = A$ NAND $B$. Then $A$ XOR $B$ = $(A \text{ NAND } N)$ NAND
$(B \text{ NAND } N)$. Check all four rows:

| $A$ | $B$ | $N$ | $A$ NAND $N$ | $B$ NAND $N$ | result |
| --- | --- | --- | --- | --- | --- |
| 0 | 0 | 1 | 1 | 1 | 0 |
| 0 | 1 | 1 | 1 | 0 | 1 |
| 1 | 0 | 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 | 1 | 0 |

The result column 0, 1, 1, 0 is XOR. ✓ Four NANDs, where the version in the [last lesson](01-logic-gates.md) used an
OR, two ANDs and a NOT.

## Try it

1. Simplify $A \land 1$, $A \lor 1$, $A \land \neg A$, $\neg\neg\neg A$.
2. Simplify $(A \land B) \lor (\neg A \land B)$.
3. Simplify $A \lor (\neg A \land B)$. (Hint: use the second distributive law.)
4. Simplify $(A \lor B) \land \neg A$.
5. Prove the absorption law $A \land (A \lor B) = A$ by cases on $A$.
6. Check with a truth table that OR from three NANDs, $(A \text{ NAND } A) \text{ NAND } (B \text{ NAND } B)$, really
   gives $A \lor B$.
7. Show that $\neg A \lor (A \land B)$ simplifies to $\neg A \lor B$. Which statement from level 4 has this as its
   truth table?
8. A security light comes on when $M \land (D \lor \neg D)$, where $M$ is "motion detected" and $D$ is "it is dark".
   Simplify. What does that say about the designer's intention, and what did they probably mean?

??? note "Answers"
    1. $A \land 1 = A$; $A \lor 1 = 1$; $A \land \neg A = 0$; $\neg\neg\neg A = \neg A$ (two flips cancel, one is
       left).
    2. Take out $B$: $(A \lor \neg A) \land B = 1 \land B = B$.
    3. Second distributive law: $(A \lor \neg A) \land (A \lor B) = 1 \land (A \lor B) = A \lor B$.
    4. Distribute: $(A \land \neg A) \lor (B \land \neg A) = 0 \lor (\neg A \land B) = \neg A \land B$. ("$A$ or
       $B$, and not $A$" means "$B$ and not $A$".)
    5. If $A = 1$: left is $1 \land (1 \lor B) = 1 \land 1 = 1 = A$. If $A = 0$: left is $0 \land \ldots = 0 = A$.
       Equal in both cases.
    6. $A$ NAND $A = \neg A$ and $B$ NAND $B = \neg B$. Rows $AB$ = 00: $\neg A = 1$, $\neg B = 1$, NAND gives 0.
       01: 1 and 0, NAND gives 1. 10: 0 and 1, gives 1. 11: 0 and 0, gives 1. Column 0, 1, 1, 1 = OR. ✓
    7. Second distributive law: $(\neg A \lor A) \land (\neg A \lor B) = 1 \land (\neg A \lor B) = \neg A \lor B$.
       This is the truth table of $A \to B$ ("if $A$ then $B$"), which is false only when $A = 1$ and $B = 0$.
    8. $D \lor \neg D = 1$, so the expression is $M \land 1 = M$: the light comes on whenever there is motion, day or
       night. The darkness sensor does nothing. The designer probably meant $M \land D$ (motion **and** dark).
       Simplifying an expression can reveal a bug.

## Common mistake

**Using arithmetic rules that do not hold.** In Boolean algebra, $A \lor A = A$ (not "$2A$"), $A \lor 1 = 1$ (not
"$A + 1$"), and the second distributive law holds even though it fails for numbers. Only use the laws in the table.

**Pushing NOT into a bracket without De Morgan.** $\neg(A \land B)$ is **not** $\neg A \land \neg B$. The operation
inside must swap: $\neg A \lor \neg B$.

## Where it leads

- Back: [Logic gates](01-logic-gates.md) · Next: [Algorithms and flowcharts](03-algorithms-flowcharts.md)
- [Level 6 page](index.md) · [Logic topic page](../index.md)
- The laws here are the set laws of [union, intersection, complement](../level-5/02-union-intersection.md) with new
  names: $\cup$ for $\lor$, $\cap$ for $\land$, complement for $\neg$, $U$ for 1 and $\varnothing$ for 0. Ordinary
  algebra and its laws are in [Algebra](../../algebra/level-5/01-distributive-law.md).
- On the U of T shelf, Boolean expressions in code: [CSC108 unit 2](../../../uoft/CSC108H1/unit02.md); logic as the
  language of proof: [MAT137 unit 1](../../../uoft/MAT137/unit01.md).
