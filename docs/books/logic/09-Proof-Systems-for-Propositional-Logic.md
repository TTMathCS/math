# 9. Proof systems for propositional logic

*In Part I you checked arguments with truth tables: write down every row, and see whether the conclusion is true
wherever the premises are. That works, but it is not what mathematicians do. They write proofs: short chains of
steps, each one allowed by a rule. Two questions follow. Can the rules of proof be written down completely, as
precisely as the rules of chess? And if they can, do they prove exactly the true things: nothing false (soundness),
and everything true (completeness)? In this chapter you will separate the shape of a formula from its meaning, learn
two proof systems (natural deduction, which feels like real reasoning, and a Hilbert system, which is tiny and easy
to study), and prove that the Hilbert system is both sound and complete. As a reward you get the compactness theorem,
the first result in this book that is about infinity and logic together.*

!!! abstract "In this chapter"
    **You will learn:**

    - the difference between syntax (strings of symbols and rules on them) and semantics (truth and falsity)
    - the rules of natural deduction, and how to write derivations in them
    - a three-axiom Hilbert system, and the deduction theorem that makes it usable
    - a proof that every derivable formula is a tautology (soundness)
    - a proof that every tautology, and every consequence of any set of premises, is derivable (completeness)
    - the compactness theorem, and how it turns finite facts into infinite ones (colouring infinite maps)

    **You need:** [Chapter 2](02-Propositional-Logic.md) (formulas, truth tables, tautologies, complete sets of
    connectives) and [Chapter 4](04-Proofs.md) (proof by induction, including strong induction). Countable sets from
    [Chapter 7](07-Infinity-and-Cardinality.md) are used in 9.5. The gentler versions are the Topics lessons
    [Truth tables](../../topics/logic/level-4/02-truth-tables.md) and
    [Valid arguments](../../topics/logic/level-5/05-valid-arguments.md).

    **Levels:** 9.1 and 9.2 are intermediate; 9.3 to 9.6 are advanced.

## 9.1 Syntax and semantics

Here is a question that sounds silly. Is $p \to (q \to p)$ true?

There are two honest answers, and the whole chapter lives in the gap between them. The first answer: "it is a
**tautology**: whatever truth values you give $p$ and $q$, it comes out true; check the four rows." The second
answer: "it is a **theorem**: there is a proof of it." The first answer is about **meaning**. The second is about
**form**: a proof is a finite list of strings of symbols, and checking a proof needs no idea what the symbols mean,
only the ability to compare strings. A computer that knows nothing about truth can check a proof.

The study of form is called **syntax**; the study of meaning is called **semantics**. In everyday mathematics we mix
them without noticing. Logic pulls them apart on purpose, so that we can ask whether they match.

### The syntax: what a formula is

Fix an infinite list of **propositional variables** $p_0, p_1, p_2, \dots$ (we also write $p, q, r$). A variable stands
for a statement we do not analyse further, such as "it is raining". The **formulas** are defined by three rules:

1. every variable $p_i$ is a formula;
2. if $\varphi$ is a formula, so is $\neg\varphi$;
3. if $\varphi$ and $\psi$ are formulas, so is $(\varphi \to \psi)$;

and nothing else is a formula. In [Chapter 2](02-Propositional-Logic.md) you proved that $\{\neg, \to\}$ is a complete
set of connectives, so we lose nothing by using only these two. The others are abbreviations:

$$
\varphi \lor \psi \;:=\; (\neg\varphi \to \psi), \qquad
\varphi \land \psi \;:=\; \neg(\varphi \to \neg\psi), \qquad
\varphi \leftrightarrow \psi \;:=\; (\varphi \to \psi) \land (\psi \to \varphi).
$$

Check the first one against a truth table: $\neg\varphi \to \psi$ is false only when $\neg\varphi$ is true and $\psi$
false, that is, when both $\varphi$ and $\psi$ are false, which is exactly when $\varphi \lor \psi$ is false.

A definition like this one, "these are the basic objects, these are the ways of building new ones, and nothing
else", is called an **inductive definition**. Its partner is **proof by induction on formulas**: to show every formula
has some property, show that variables have it, and that $\neg\varphi$ and $(\varphi \to \psi)$ have it whenever
$\varphi$ and $\psi$ do. This is strong induction on the length of the formula in disguise, and you will use it
again and again.

Every formula has a **parse tree** that shows how it was built. For $((p \to q) \to \neg p)$:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 190" role="img" aria-label="Parse tree of the formula (p implies q) implies not p. The root is an arrow. Its left child is an arrow with children p and q. Its right child is a negation with child p.">
  <line x1="200" y1="38" x2="120" y2="92" stroke="currentColor" stroke-width="1.5"/>
  <line x1="200" y1="38" x2="280" y2="92" stroke="currentColor" stroke-width="1.5"/>
  <line x1="120" y1="108" x2="80" y2="152" stroke="currentColor" stroke-width="1.5"/>
  <line x1="120" y1="108" x2="160" y2="152" stroke="currentColor" stroke-width="1.5"/>
  <line x1="280" y1="108" x2="280" y2="152" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="200" cy="30" r="16" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="120" cy="100" r="16" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="280" cy="100" r="16" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="80" cy="160" r="16" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="160" cy="160" r="16" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="280" cy="160" r="16" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="200" y="35" font-size="15" text-anchor="middle" fill="currentColor">→</text>
  <text x="120" y="105" font-size="15" text-anchor="middle" fill="currentColor">→</text>
  <text x="280" y="105" font-size="15" text-anchor="middle" fill="currentColor">¬</text>
  <text x="80" y="165" font-size="14" text-anchor="middle" fill="currentColor">p</text>
  <text x="160" y="165" font-size="14" text-anchor="middle" fill="currentColor">q</text>
  <text x="280" y="165" font-size="14" text-anchor="middle" fill="currentColor">p</text>
  <text x="330" y="35" font-size="12" fill="currentColor">main connective</text>
</svg>
</div>

Could one string have two different parse trees, the way "old men and women" can be read two ways? For our formulas,
no. This is the **unique readability theorem**: every formula is a variable, or $\neg\varphi$ for exactly one
$\varphi$, or $(\varphi \to \psi)$ for exactly one pair $\varphi, \psi$.

*Proof idea.* Count brackets. By induction on formulas, every formula has as many left brackets as right ones, and
every proper initial segment of a formula of the form $(\varphi \to \psi)$ has strictly more left brackets than
right ones. Now suppose $(\varphi \to \psi)$ and $(\varphi' \to \psi')$ are the same string. If $\varphi$ and
$\varphi'$ were different, one would be a proper initial segment of the other, say $\varphi'$ a proper initial segment
of $\varphi$. If $\varphi$ is a variable that is impossible; if $\varphi$ starts with $\neg$ you peel off the $\neg$
signs and reach the same situation for a shorter formula; if $\varphi$ starts with a bracket, $\varphi'$ would be a
formula with more left brackets than right ones, which is impossible. So $\varphi = \varphi'$, and then
$\psi = \psi'$. $\square$

Unique readability is what lets us define things "by recursion on formulas" and know the definition makes sense.

### The semantics: what truth is

A **valuation** is a function $v$ from the variables to $\{T, F\}$ (true, false). It extends to all formulas by
recursion, using the truth tables:

- $v(\neg\varphi) = T$ exactly when $v(\varphi) = F$;
- $v(\varphi \to \psi) = F$ exactly when $v(\varphi) = T$ and $v(\psi) = F$.

By unique readability this defines $v(\varphi)$ for every formula, in exactly one way.

Now the central definitions. Let $\Gamma$ be a set of formulas (possibly infinite) and $\varphi$ a formula.

- $v$ **satisfies** $\Gamma$ if $v(\gamma) = T$ for every $\gamma$ in $\Gamma$. $\Gamma$ is **satisfiable** if some
  valuation satisfies it.
- $\varphi$ is a **semantic consequence** of $\Gamma$, written $\Gamma \models \varphi$, if every valuation that
  satisfies $\Gamma$ also makes $\varphi$ true. When $\Gamma$ is empty we write $\models \varphi$: this says $\varphi$
  is a tautology.

The symbol $\models$ is read "models" or "entails". It belongs to semantics. Its partner from syntax is $\vdash$, read
"proves" or "derives": $\Gamma \vdash \varphi$ will mean that there is a derivation of $\varphi$ from premises in
$\Gamma$, once we say what a derivation is. The two big theorems of the chapter say that they agree:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 520 180" role="img" aria-label="Two boxes. Left: derivable, Gamma proves phi, a matter of syntax, checked by rules on strings. Right: entailed, Gamma models phi, a matter of semantics, checked by valuations. An upper arrow from left to right is labelled soundness. A lower arrow from right to left is labelled completeness.">
  <rect x="20" y="40" width="190" height="100" rx="10" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <rect x="310" y="40" width="190" height="100" rx="10" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <text x="115" y="72" font-size="15" text-anchor="middle" fill="currentColor">Γ ⊢ φ</text>
  <text x="115" y="96" font-size="12" text-anchor="middle" fill="currentColor">syntax: derivations,</text>
  <text x="115" y="114" font-size="12" text-anchor="middle" fill="currentColor">rules on strings</text>
  <text x="405" y="72" font-size="15" text-anchor="middle" fill="currentColor">Γ ⊨ φ</text>
  <text x="405" y="96" font-size="12" text-anchor="middle" fill="currentColor">semantics: true in every</text>
  <text x="405" y="114" font-size="12" text-anchor="middle" fill="currentColor">valuation satisfying Γ</text>
  <line x1="214" y1="70" x2="298" y2="70" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="306,70 296,65 296,75" fill="currentColor"/>
  <text x="260" y="60" font-size="12" text-anchor="middle" fill="currentColor">soundness</text>
  <line x1="306" y1="112" x2="222" y2="112" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="214,112 224,107 224,117" fill="currentColor"/>
  <text x="260" y="132" font-size="12" text-anchor="middle" fill="currentColor">completeness</text>
  <circle cx="260" cy="160" r="5" fill="#eea66f"/>
</svg>
</div>

**Example 1.** $\{p, \; p \to q\} \models q$: in any valuation making $p$ and $p \to q$ true, $q$ must be true (if it
were false, $p \to q$ would be false). This is the semantic side of the rule *modus ponens*.

**Example 2.** $\{p \lor q\} \not\models p$: the valuation with $p = F$, $q = T$ satisfies $p \lor q$ but not $p$.
To show a non-consequence you only need one valuation, called a **countermodel**.

**Example 3.** If $\Gamma$ is not satisfiable then $\Gamma \models \varphi$ for every $\varphi$, because there is no
valuation to check. This is the semantic face of "from a contradiction, anything follows", and it will matter in
9.6.

Why bother with proofs at all, if truth tables already decide $\Gamma \models \varphi$ for finite $\Gamma$? Three
reasons. Truth tables explode: a formula with 50 variables has $2^{50}$, about $10^{15}$, rows, while a proof may be
ten lines. Truth tables say nothing when $\Gamma$ is infinite. And in the next chapters the logic gets richer
(quantifiers range over infinite sets), and there are no truth tables at all; proofs are the only finite thing left.
Propositional logic is the place to learn how proof systems work while everything can still be checked.

## 9.2 Natural deduction

Gerhard Gentzen designed **natural deduction** in the early 1930s to copy the way mathematicians actually argue,
with assumptions that are made, used and then discharged ("suppose $x > 0$ ... therefore if $x > 0$ then ...").
Stanisław Jaśkowski found a similar system independently at the same time.

Each connective has two kinds of rules: an **introduction** rule, which says how to prove a formula with that
connective, and an **elimination** rule, which says how to use one. Here we take $\land, \lor, \to, \neg$ and the
symbol $\bot$ ("falsum", a formula that is always false) as primitive.

| Connective | Introduction (how to prove it) | Elimination (how to use it) |
|---|---|---|
| $\land$ | from $\varphi$ and $\psi$, infer $\varphi \land \psi$ | from $\varphi \land \psi$, infer $\varphi$; also infer $\psi$ |
| $\lor$ | from $\varphi$, infer $\varphi \lor \psi$; from $\psi$, infer $\varphi \lor \psi$ | from $\varphi \lor \psi$, a derivation of $\chi$ from assumption $\varphi$, and one of $\chi$ from assumption $\psi$, infer $\chi$ (discharging both) |
| $\to$ | from a derivation of $\psi$ from assumption $\varphi$, infer $\varphi \to \psi$ (discharging $\varphi$) | from $\varphi$ and $\varphi \to \psi$, infer $\psi$ (modus ponens) |
| $\neg$ | from a derivation of $\bot$ from assumption $\varphi$, infer $\neg\varphi$ (discharging $\varphi$) | from $\varphi$ and $\neg\varphi$, infer $\bot$ |
| $\bot$ | (none) | from $\bot$, infer any $\varphi$ (ex falso) |

and one more rule, which is what makes the logic **classical**:

- **RAA** (*reductio ad absurdum*): from a derivation of $\bot$ from assumption $\neg\varphi$, infer $\varphi$
  (discharging $\neg\varphi$).

Read the $\to$-introduction rule slowly, because it is the heart of the system. To prove "if $\varphi$ then $\psi$",
you *assume* $\varphi$, reason until you reach $\psi$, and then conclude $\varphi \to \psi$, which no longer depends on
the assumption. The assumption is **discharged**: it was a temporary guest. Every direct proof you wrote in
[Chapter 4](04-Proofs.md) has this shape.

### Writing derivations down

Gentzen drew derivations as trees. On a page it is easier to write them as numbered lines. We use the style of
Lemmon's textbook: each line has its number, the formula, the rule used, and, on the left, the list of
**assumptions it rests on**. An assumption rests on itself. When a rule discharges an assumption, that number
disappears from the list. A derivation proves $\Gamma \vdash \varphi$ when its last line is $\varphi$ and rests only on
assumptions in $\Gamma$.

**Example 4.** $A \to B, \; B \to C \vdash A \to C$ (chaining implications).

| Rests on | Line | Formula | Rule |
|---|---|---|---|
| 1 | (1) | $A \to B$ | assumption |
| 2 | (2) | $B \to C$ | assumption |
| 3 | (3) | $A$ | assumption |
| 1, 3 | (4) | $B$ | $\to$E on 3, 1 |
| 1, 2, 3 | (5) | $C$ | $\to$E on 4, 2 |
| 1, 2 | (6) | $A \to C$ | $\to$I on 3, 5 (discharges 3) |

The last line rests on 1 and 2 only, so we have proved what we wanted.

**Example 5.** $\neg(A \lor B) \vdash \neg A \land \neg B$ (one of De Morgan's laws).

| Rests on | Line | Formula | Rule |
|---|---|---|---|
| 1 | (1) | $\neg(A \lor B)$ | assumption |
| 2 | (2) | $A$ | assumption |
| 2 | (3) | $A \lor B$ | $\lor$I on 2 |
| 1, 2 | (4) | $\bot$ | $\neg$E on 3, 1 |
| 1 | (5) | $\neg A$ | $\neg$I on 2, 4 (discharges 2) |
| 6 | (6) | $B$ | assumption |
| 6 | (7) | $A \lor B$ | $\lor$I on 6 |
| 1, 6 | (8) | $\bot$ | $\neg$E on 7, 1 |
| 1 | (9) | $\neg B$ | $\neg$I on 6, 8 (discharges 6) |
| 1 | (10) | $\neg A \land \neg B$ | $\land$I on 5, 9 |

**Example 6.** $A \lor B, \; \neg A \vdash B$ (the disjunctive syllogism: "it is A or B, it is not A, so it is B").
This needs $\lor$-elimination, which is proof by cases: show that $B$ follows from each case.

| Rests on | Line | Formula | Rule |
|---|---|---|---|
| 1 | (1) | $A \lor B$ | assumption |
| 2 | (2) | $\neg A$ | assumption |
| 3 | (3) | $A$ | assumption (case 1) |
| 2, 3 | (4) | $\bot$ | $\neg$E on 3, 2 |
| 2, 3 | (5) | $B$ | $\bot$E on 4 |
| 6 | (6) | $B$ | assumption (case 2) |
| 1, 2 | (7) | $B$ | $\lor$E on 1, 3 to 5, 6 to 6 (discharges 3 and 6) |

In case 2 the derivation of $B$ from $B$ is just the one line (6), which is allowed.

**Example 7.** $\vdash A \lor \neg A$ (the law of excluded middle), with no premises at all.

| Rests on | Line | Formula | Rule |
|---|---|---|---|
| 1 | (1) | $\neg(A \lor \neg A)$ | assumption |
| 2 | (2) | $A$ | assumption |
| 2 | (3) | $A \lor \neg A$ | $\lor$I on 2 |
| 1, 2 | (4) | $\bot$ | $\neg$E on 3, 1 |
| 1 | (5) | $\neg A$ | $\neg$I on 2, 4 (discharges 2) |
| 1 | (6) | $A \lor \neg A$ | $\lor$I on 5 |
| 1 | (7) | $\bot$ | $\neg$E on 6, 1 |
| (none) | (8) | $A \lor \neg A$ | RAA on 1, 7 (discharges 1) |

The last line rests on nothing: it is a theorem. Notice that only RAA could finish this proof. Without RAA you get
**intuitionistic logic**, in which $A \lor \neg A$ is *not* derivable. That is not a defect; it is a different logic,
designed to keep only constructive reasoning, and [Chapter 19](19-Other-Logics.md) is about it.

**Example 8.** $\vdash A \to (B \to A)$.

| Rests on | Line | Formula | Rule |
|---|---|---|---|
| 1 | (1) | $A$ | assumption |
| 2 | (2) | $B$ | assumption |
| 1 | (3) | $B \to A$ | $\to$I on 2, 1 (discharges 2) |
| (none) | (4) | $A \to (B \to A)$ | $\to$I on 1, 3 (discharges 1) |

Line (3) looks strange: we discharged an assumption we never used. The rule allows it: if $A$ already holds, it
certainly holds on the assumption $B$. This is the same "a true conclusion makes any implication true" that
surprised you about the material conditional in [Chapter 1](01-Statements-and-Truth.md).

### Tips for finding derivations

Finding a derivation is a puzzle, and the rules give strong hints:

- **Work backwards from the goal.** To prove $\varphi \to \psi$, assume $\varphi$ and aim for $\psi$. To prove
  $\neg\varphi$, assume $\varphi$ and aim for $\bot$. To prove $\varphi \land \psi$, prove each half.
- **Work forwards from what you have.** A premise $\varphi \lor \psi$ almost always calls for $\lor$E: split into
  cases.
- **When stuck, use RAA.** Assume the negation of what you want and look for a contradiction.

Natural deduction is pleasant to use but awkward to reason *about*, because of all the bookkeeping of assumptions.
For the theorems of this chapter we switch to a system with almost no rules.

## 9.3 A Hilbert system and the deduction theorem

*Level: advanced.*

David Hilbert's school preferred proof systems with many axioms and very few rules. The one below has three axiom
**schemes** and one rule. It uses only $\neg$ and $\to$, so it is a system for exactly the formulas defined in 9.1.

**Axiom schemes.** For all formulas $\varphi, \psi, \chi$, each of the following is an axiom:

$$
\begin{aligned}
&\text{(A1)} \quad \varphi \to (\psi \to \varphi) \\
&\text{(A2)} \quad (\varphi \to (\psi \to \chi)) \to ((\varphi \to \psi) \to (\varphi \to \chi)) \\
&\text{(A3)} \quad (\neg\varphi \to \neg\psi) \to (\psi \to \varphi)
\end{aligned}
$$

**Rule (MP, modus ponens).** From $\varphi$ and $\varphi \to \psi$, infer $\psi$.

A "scheme" is a pattern: each of (A1), (A2), (A3) stands for infinitely many axioms, one for each choice of formulas.
For example $\neg p \to ((q \to r) \to \neg p)$ is an instance of (A1), with $\varphi = \neg p$ and $\psi = (q \to r)$.

**Definition.** A **derivation** of $\varphi$ from a set $\Gamma$ is a finite list of formulas
$\varphi_1, \varphi_2, \dots, \varphi_n$ ending with $\varphi_n = \varphi$, in which each $\varphi_k$ is

- an axiom, or
- a member of $\Gamma$ (a **hypothesis**), or
- obtained by MP from two earlier formulas $\varphi_i$ and $\varphi_j = (\varphi_i \to \varphi_k)$ with $i, j < k$.

We write $\Gamma \vdash \varphi$ if such a derivation exists, and $\vdash \varphi$ when $\Gamma$ is empty ($\varphi$ is
a **theorem**).

Two facts are immediate and we will use them without comment. If $\Gamma \subseteq \Gamma'$ and $\Gamma \vdash \varphi$
then $\Gamma' \vdash \varphi$ (more hypotheses never hurt). And if $\Gamma \vdash \varphi$, then some *finite* part of
$\Gamma$ already derives $\varphi$, namely the hypotheses that actually appear in the derivation. This second fact is
small but it is the seed of compactness.

The set of axioms is a matter of choice; this three-axiom system is usually credited to Jan Łukasiewicz. Why these
three? Look at them as types of argument. (A1) says a true thing stays true under any extra assumption. (A2) says
assumptions can be distributed over implications. (A3) is contraposition. (A1) and (A2) are exactly what is needed
for the deduction theorem below; (A3) is the only axiom that mentions $\neg$, and it carries all the classical
reasoning.

### A first derivation: $\vdash \varphi \to \varphi$

Even the most obvious theorem takes some work, which is why nobody writes Hilbert-style derivations by hand for long.

| Line | Formula | Reason |
|---|---|---|
| 1 | $(\varphi \to ((\varphi \to \varphi) \to \varphi)) \to ((\varphi \to (\varphi \to \varphi)) \to (\varphi \to \varphi))$ | (A2) with $\psi = \varphi \to \varphi$, $\chi = \varphi$ |
| 2 | $\varphi \to ((\varphi \to \varphi) \to \varphi)$ | (A1) with $\psi = \varphi \to \varphi$ |
| 3 | $(\varphi \to (\varphi \to \varphi)) \to (\varphi \to \varphi)$ | MP 2, 1 |
| 4 | $\varphi \to (\varphi \to \varphi)$ | (A1) with $\psi = \varphi$ |
| 5 | $\varphi \to \varphi$ | MP 4, 3 |

Check: each line is an axiom instance or follows by MP from two earlier lines; the Python checker at the end of this
section confirms it mechanically.

### The deduction theorem

In natural deduction, to prove $\varphi \to \psi$ we assumed $\varphi$ and derived $\psi$. The Hilbert system has no
such rule. The **deduction theorem** says we can act as if it did.

**Theorem (deduction theorem).** If $\Gamma \cup \{\varphi\} \vdash \psi$, then $\Gamma \vdash \varphi \to \psi$.

*Proof.* Take a derivation $\psi_1, \dots, \psi_n = \psi$ from $\Gamma \cup \{\varphi\}$. We show, by strong induction
on $k$, that $\Gamma \vdash \varphi \to \psi_k$ for every $k$. There are four cases for $\psi_k$.

1. $\psi_k$ is an axiom or a member of $\Gamma$. Then $\Gamma \vdash \psi_k$ in one line. The (A1) instance
   $\psi_k \to (\varphi \to \psi_k)$ and MP give $\Gamma \vdash \varphi \to \psi_k$.
2. $\psi_k$ is $\varphi$ itself. We need $\Gamma \vdash \varphi \to \varphi$, which is the five-line derivation above.
3. $\psi_k$ comes by MP from earlier $\psi_i$ and $\psi_j = (\psi_i \to \psi_k)$. By the induction hypothesis,
   $\Gamma \vdash \varphi \to \psi_i$ and $\Gamma \vdash \varphi \to (\psi_i \to \psi_k)$. The (A2) instance
   $(\varphi \to (\psi_i \to \psi_k)) \to ((\varphi \to \psi_i) \to (\varphi \to \psi_k))$ and MP twice give
   $\Gamma \vdash \varphi \to \psi_k$.

Taking $k = n$ finishes the proof. $\square$

The proof is a recipe: it turns any derivation from $\Gamma \cup \{\varphi\}$ into one of $\varphi \to \psi$ from
$\Gamma$, roughly three times as long. The converse is trivial: if $\Gamma \vdash \varphi \to \psi$ then
$\Gamma \cup \{\varphi\} \vdash \psi$ by one more MP. So in the Hilbert system, "assume $\varphi$ and derive $\psi$" is
exactly as good as deriving $\varphi \to \psi$.

### Three lemmas we need later

With the deduction theorem in hand, derivations become short. We prove three facts about negation; they are all the
completeness proof needs.

**Lemma A.** $\{\neg\varphi, \varphi\} \vdash \psi$, for any $\psi$. Hence $\vdash \neg\varphi \to (\varphi \to \psi)$.

*Proof.*

| Line | Formula | Reason |
|---|---|---|
| 1 | $\neg\varphi$ | hypothesis |
| 2 | $\varphi$ | hypothesis |
| 3 | $\neg\varphi \to (\neg\psi \to \neg\varphi)$ | (A1) |
| 4 | $\neg\psi \to \neg\varphi$ | MP 1, 3 |
| 5 | $(\neg\psi \to \neg\varphi) \to (\varphi \to \psi)$ | (A3) |
| 6 | $\varphi \to \psi$ | MP 4, 5 |
| 7 | $\psi$ | MP 2, 6 |

The deduction theorem, used twice, gives the second form. $\square$

So a contradiction really does prove everything, inside the system. Call $\Gamma$ **inconsistent** if there is a
formula $\varphi$ with $\Gamma \vdash \varphi$ and $\Gamma \vdash \neg\varphi$, and **consistent** otherwise. By Lemma
A, $\Gamma$ is inconsistent exactly when it derives *every* formula.

**Lemma B.** $\{\neg\neg\varphi\} \vdash \varphi$, hence $\vdash \neg\neg\varphi \to \varphi$.

*Proof.*

| Line | Formula | Reason |
|---|---|---|
| 1 | $\neg\neg\varphi$ | hypothesis |
| 2 | $\neg\neg\varphi \to (\neg\neg\neg\neg\varphi \to \neg\neg\varphi)$ | (A1) |
| 3 | $\neg\neg\neg\neg\varphi \to \neg\neg\varphi$ | MP 1, 2 |
| 4 | $(\neg\neg\neg\neg\varphi \to \neg\neg\varphi) \to (\neg\varphi \to \neg\neg\neg\varphi)$ | (A3) |
| 5 | $\neg\varphi \to \neg\neg\neg\varphi$ | MP 3, 4 |
| 6 | $(\neg\varphi \to \neg\neg\neg\varphi) \to (\neg\neg\varphi \to \varphi)$ | (A3) |
| 7 | $\neg\neg\varphi \to \varphi$ | MP 5, 6 |
| 8 | $\varphi$ | MP 1, 7 |

In line 4, (A3) is used with $\neg\neg\neg\varphi$ in the role of its $\varphi$ and $\neg\varphi$ in the role of its
$\psi$. $\square$

**Lemma C (proof by contradiction).**

1. If $\Gamma \cup \{\neg\varphi\}$ is inconsistent, then $\Gamma \vdash \varphi$.
2. If $\Gamma \cup \{\varphi\}$ is inconsistent, then $\Gamma \vdash \neg\varphi$.

*Proof.* (1) Write $\tau$ for the theorem $\varphi \to \varphi$. An inconsistent set derives everything, so
$\Gamma \cup \{\neg\varphi\} \vdash \neg\tau$. By the deduction theorem $\Gamma \vdash \neg\varphi \to \neg\tau$. The
(A3) instance $(\neg\varphi \to \neg\tau) \to (\tau \to \varphi)$ and MP give $\Gamma \vdash \tau \to \varphi$, and MP
with $\vdash \tau$ gives $\Gamma \vdash \varphi$.

(2) By Lemma B, $\Gamma \cup \{\neg\neg\varphi\} \vdash \varphi$. Any derivation from $\Gamma \cup \{\varphi\}$ can be
turned into one from $\Gamma \cup \{\neg\neg\varphi\}$: wherever the hypothesis $\varphi$ is used, insert the
derivation of $\varphi$ from $\neg\neg\varphi$. So $\Gamma \cup \{\neg\neg\varphi\}$ is inconsistent too, and part (1),
applied to the formula $\neg\varphi$, gives $\Gamma \vdash \neg\varphi$. $\square$

Lemma C is the formal version of the proofs by contradiction from [Chapter 4](04-Proofs.md).

### How the two systems compare

Natural deduction and this Hilbert system prove exactly the same things (for formulas written with $\neg$ and $\to$).
One direction is easy: the three axioms are derivable in natural deduction (Example 8 is (A1)), and MP is
$\to$-elimination. The other direction uses the deduction theorem to imitate $\to$-introduction, and Lemmas A to C to
imitate the negation rules. Once both systems are known to be sound and complete, the agreement also follows from
the fact that each proves exactly the tautologies.

### Try it in Python

A proof checker needs no understanding of truth, only pattern matching. This one checks Hilbert derivations.

```python
# formulas: ('v', name), ('not', f), ('imp', f, g)
def Not(f): return ('not', f)
def Imp(f, g): return ('imp', f, g)

def match(pattern, f, env):
    """Does formula f fit the pattern? Metavariables are ('meta', name)."""
    if pattern[0] == 'meta':
        if pattern[1] in env:
            return env[pattern[1]] == f
        env[pattern[1]] = f
        return True
    if pattern[0] != f[0]:
        return False
    return all(match(p, q, env) for p, q in zip(pattern[1:], f[1:]))

a, b, c = ('meta', 'a'), ('meta', 'b'), ('meta', 'c')
AXIOMS = [Imp(a, Imp(b, a)),
          Imp(Imp(a, Imp(b, c)), Imp(Imp(a, b), Imp(a, c))),
          Imp(Imp(Not(a), Not(b)), Imp(b, a))]

def check(hypotheses, lines):
    for k, (f, why) in enumerate(lines):
        if why == 'hyp':
            ok = f in hypotheses
        elif why == 'axiom':
            ok = any(match(ax, f, {}) for ax in AXIOMS)
        else:                      # why = (i, j): MP from line i and line j = (line i -> f)
            i, j = why
            ok = i < k and j < k and lines[j][0] == Imp(lines[i][0], f)
        if not ok:
            return f"line {k + 1} is not justified"
    return "derivation correct"

p = ('v', 'p')
proof = [(Imp(Imp(p, Imp(Imp(p, p), p)), Imp(Imp(p, Imp(p, p)), Imp(p, p))), 'axiom'),
         (Imp(p, Imp(Imp(p, p), p)), 'axiom'),
         (Imp(Imp(p, Imp(p, p)), Imp(p, p)), (1, 0)),
         (Imp(p, Imp(p, p)), 'axiom'),
         (Imp(p, p), (3, 2))]
print(check([], proof))           # derivation correct
```

Lines are numbered from 0 inside the program. Type in the derivations of Lemmas A and B and check them too.

## 9.4 Soundness

*Level: advanced.*

A proof system is worthless if it can prove false things. The first theorem says this one cannot.

**Theorem (soundness).** If $\Gamma \vdash \varphi$, then $\Gamma \models \varphi$. In particular every theorem is a
tautology.

*Proof.* Let $\varphi_1, \dots, \varphi_n$ be a derivation from $\Gamma$, and let $v$ be any valuation satisfying
$\Gamma$. We show by strong induction on $k$ that $v(\varphi_k) = T$ for every $k$.

- If $\varphi_k$ is in $\Gamma$, then $v(\varphi_k) = T$ because $v$ satisfies $\Gamma$.
- If $\varphi_k$ is an axiom, it is a tautology, so $v(\varphi_k) = T$. We check the three schemes. (A1): the only way
  for $\varphi \to (\psi \to \varphi)$ to be false is $v(\varphi) = T$ and $v(\psi \to \varphi) = F$; but the second
  needs $v(\varphi) = F$. (A3): to be false needs $v(\neg\varphi \to \neg\psi) = T$, $v(\psi) = T$ and
  $v(\varphi) = F$; but then $\neg\varphi$ is true and $\neg\psi$ false, so $v(\neg\varphi \to \neg\psi) = F$. (A2):
  to be false needs $v(\varphi \to (\psi \to \chi)) = T$, $v(\varphi \to \psi) = T$, $v(\varphi) = T$ and
  $v(\chi) = F$; from the second and third, $v(\psi) = T$; then $v(\psi \to \chi) = F$, so the first is false, a
  contradiction.
- If $\varphi_k$ comes by MP from $\varphi_i$ and $\varphi_i \to \varphi_k$, both true under $v$ by the induction
  hypothesis, then $v(\varphi_k) = T$ by the truth table of $\to$.

So $v(\varphi_n) = v(\varphi) = T$. Since $v$ was any valuation satisfying $\Gamma$, $\Gamma \models \varphi$. $\square$

Check: each scheme has three slots $\varphi, \psi, \chi$, so there are only eight combinations of their truth
values to try, and the three arguments above cover them all.

Soundness is mostly used in the contrapositive form: **to show $\Gamma \nvdash \varphi$, find a valuation that
satisfies $\Gamma$ but not $\varphi$.** For instance $\nvdash p \to q$, because the valuation $p = T$, $q = F$ makes
it false. Without soundness, proving that something is *not* derivable would mean surveying infinitely many
possible derivations.

**Corollary.** The Hilbert system is consistent: there is no $\varphi$ with $\vdash \varphi$ and $\vdash \neg\varphi$.
(Both would be tautologies, but $\varphi$ and $\neg\varphi$ cannot both be true under one valuation.)

The same trick of "reinterpret the symbols, check the axioms and the rule" shows that axioms are **independent**.
Read $\neg$ as "do nothing", so $\neg\varphi$ gets the same value as $\varphi$. Then (A1) and (A2) are still always
true and MP still preserves truth, so everything derivable from (A1) and (A2) alone is "true" in this odd reading.
But the theorem $\neg p \to (p \to q)$ of Lemma A becomes $p \to (p \to q)$, which is false when $p = T$, $q = F$. So
Lemma A cannot be derived without (A3): the axiom (A3) is not a consequence of the other two.

Natural deduction is sound too. The proof is the same idea with a stronger induction hypothesis: every line is a
semantic consequence of the assumptions it rests on. For $\to$I, if $\Delta \cup \{\varphi\} \models \psi$ then
$\Delta \models \varphi \to \psi$; for $\lor$E, if $\Delta \models \varphi \lor \psi$ and both
$\Delta \cup \{\varphi\} \models \chi$ and $\Delta \cup \{\psi\} \models \chi$, then $\Delta \models \chi$ (in a
valuation satisfying $\Delta$, one of $\varphi$ and $\psi$ is true); the other rules are similar.

## 9.5 Completeness

*Level: advanced.*

Now the converse, which is much deeper: the rules are strong enough to derive *every* consequence.

**Theorem (completeness).** If $\Gamma \models \varphi$, then $\Gamma \vdash \varphi$. In particular every tautology is
a theorem.

The theorem holds for any set $\Gamma$, finite or infinite (this is sometimes called **strong** completeness). We
prove it in an equivalent form.

**Theorem (model existence).** Every consistent set of formulas is satisfiable.

*Why the two forms are equivalent.* Suppose model existence holds and $\Gamma \nvdash \varphi$. Then
$\Gamma \cup \{\neg\varphi\}$ is consistent (if it were inconsistent, Lemma C(1) would give $\Gamma \vdash \varphi$).
So some valuation satisfies $\Gamma$ and $\neg\varphi$, and that valuation shows $\Gamma \not\models \varphi$. This is
the contrapositive of completeness. (Conversely, completeness gives model existence: if $\Gamma$ is unsatisfiable then
$\Gamma \models p \land \neg p$, so $\Gamma$ derives a formula and its negation.)

So the job is: given only that $\Gamma$ cannot derive a contradiction, *build* a valuation that makes all of $\Gamma$
true. The plan, due in this form to Lindenbaum and Henkin, is to enlarge $\Gamma$ until it answers every question, and
then read the valuation off it.

**Definition.** A set $\Delta$ of formulas is **maximal consistent** if it is consistent and, for every formula
$\varphi$, either $\varphi \in \Delta$ or $\neg\varphi \in \Delta$.

Think of $\Delta$ as a complete, consistent description of a possible world: it takes a side on every question.

**Lemma D (Lindenbaum's lemma).** Every consistent set $\Gamma$ is contained in a maximal consistent set $\Delta$.

*Proof.* There are only countably many formulas: each is a finite string over a countable alphabet (the variables,
$\neg$, $\to$ and two brackets), and the finite strings over a countable alphabet form a countable set
([Chapter 7](07-Infinity-and-Cardinality.md)). List them all: $\varphi_0, \varphi_1, \varphi_2, \dots$. Build a chain
of sets:

$$
\Delta_0 = \Gamma, \qquad
\Delta_{n+1} =
\begin{cases}
\Delta_n \cup \{\varphi_n\} & \text{if this set is consistent,} \\
\Delta_n \cup \{\neg\varphi_n\} & \text{otherwise.}
\end{cases}
$$

*Each $\Delta_n$ is consistent*, by induction. $\Delta_0 = \Gamma$ is consistent by assumption. Suppose $\Delta_n$ is
consistent. If $\Delta_n \cup \{\varphi_n\}$ is consistent we are done. If not, Lemma C(2) gives
$\Delta_n \vdash \neg\varphi_n$. If $\Delta_n \cup \{\neg\varphi_n\}$ were also inconsistent, Lemma C(1) would give
$\Delta_n \vdash \varphi_n$, and $\Delta_n$ would be inconsistent. So $\Delta_{n+1}$ is consistent.

Let $\Delta = \bigcup_n \Delta_n$. *$\Delta$ is consistent:* a derivation of a contradiction from $\Delta$ would use
finitely many hypotheses, all of which lie in some single $\Delta_n$ (the sets grow), and $\Delta_n$ is consistent.
*$\Delta$ is maximal:* every formula is some $\varphi_n$, and at stage $n$ either it or its negation was put in. $\square$

(For an uncountable set of variables the same proof works with Zorn's lemma from
[Chapter 8](08-Axiomatic-Set-Theory.md) in place of the list.)

**Lemma E (properties of maximal consistent sets).** Let $\Delta$ be maximal consistent. Then for all formulas
$\varphi, \psi$:

1. $\Delta$ is **deductively closed**: if $\Delta \vdash \varphi$ then $\varphi \in \Delta$.
2. $\neg\varphi \in \Delta$ if and only if $\varphi \notin \Delta$.
3. $(\varphi \to \psi) \in \Delta$ if and only if $\varphi \notin \Delta$ or $\psi \in \Delta$.

*Proof.* (1) If $\Delta \vdash \varphi$ but $\varphi \notin \Delta$, then by maximality $\neg\varphi \in \Delta$, so
$\Delta$ derives both $\varphi$ and $\neg\varphi$, which is impossible.

(2) At least one of $\varphi, \neg\varphi$ is in $\Delta$ by maximality, and not both, by consistency.

(3) Suppose $(\varphi \to \psi) \in \Delta$ and $\varphi \in \Delta$. Then $\Delta \vdash \psi$ by MP, so
$\psi \in \Delta$ by (1). That proves "only if". For "if": when $\psi \in \Delta$, the (A1) instance
$\psi \to (\varphi \to \psi)$ gives $\Delta \vdash \varphi \to \psi$; when $\varphi \notin \Delta$, by (2)
$\neg\varphi \in \Delta$, and Lemma A gives $\Delta \vdash \varphi \to \psi$. Either way, (1) puts
$\varphi \to \psi$ in $\Delta$. $\square$

Look at (2) and (3) side by side with the truth tables of $\neg$ and $\to$. They say: **membership in $\Delta$ behaves
exactly like truth.** That is the whole proof.

**Lemma F (truth lemma).** Let $\Delta$ be maximal consistent, and define the valuation $v$ by $v(p) = T$ if and only
if $p \in \Delta$, for each variable $p$. Then for every formula $\varphi$: $v(\varphi) = T$ if and only if
$\varphi \in \Delta$.

*Proof.* By induction on formulas. For a variable it is the definition of $v$. If it holds for $\varphi$, then
$v(\neg\varphi) = T$ iff $v(\varphi) = F$ iff $\varphi \notin \Delta$ iff $\neg\varphi \in \Delta$ (Lemma E(2)). If it
holds for $\varphi$ and $\psi$, then $v(\varphi \to \psi) = T$ iff ($v(\varphi) = F$ or $v(\psi) = T$) iff
($\varphi \notin \Delta$ or $\psi \in \Delta$) iff $(\varphi \to \psi) \in \Delta$ (Lemma E(3)). $\square$

*Proof of model existence.* Let $\Gamma$ be consistent. By Lemma D it lies inside a maximal consistent $\Delta$. By
Lemma F, the valuation $v$ read off from $\Delta$ makes every member of $\Delta$ true, in particular every member of
$\Gamma$. $\square$

And with it, the completeness theorem is proved. Soundness and completeness together say

$$
\Gamma \vdash \varphi \quad\Longleftrightarrow\quad \Gamma \models \varphi .
$$

Proof and truth coincide, for propositional logic.

**Worked example.** Completeness promises a derivation of Peirce's law $((p \to q) \to p) \to p$, because it is a
tautology. Check the tautology: if $p = T$ the conclusion is true; if $p = F$ then $p \to q$ is true, so
$(p \to q) \to p$ is $T \to F = F$, and the whole implication is true. A derivation, using our lemmas: by the deduction
theorem it is enough to show $\{(p \to q) \to p\} \vdash p$, and by Lemma C(1) it is enough to show that
$\Gamma = \{(p \to q) \to p, \; \neg p\}$ is inconsistent. From $\neg p$, Lemma A gives $\Gamma \vdash p \to q$. MP
with $(p \to q) \to p$ gives $\Gamma \vdash p$. With $\neg p$ in $\Gamma$, that is a contradiction. Notice how the
lemmas let us reason almost as freely as in natural deduction.

### What the proof does and does not give

The proof of completeness is not constructive in a practical sense: Lindenbaum's construction asks, at each stage,
"is this set consistent?", a question the construction does not answer for us. For a single tautology there are
direct proofs that turn its truth table into a derivation, row by row (László Kalmár's proof of 1935 does this), but
the derivations they produce have length growing like $2^n$ for $n$ variables.

Whether every tautology has a *short* derivation in some proof system is a famous open problem. Stephen Cook and
Robert Reckhow showed in 1979 that if some proof system gave every tautology a derivation of polynomial length, then
$\mathrm{NP} = \mathrm{coNP}$; most researchers believe that is false. This is where logic meets complexity theory,
the subject of [Chapter 16](16-Complexity.md).

## 9.6 Compactness

*Level: advanced.*

Here is a puzzle that seems to have nothing to do with proofs. A map has infinitely many countries. You are told that
every *finite* part of the map can be coloured with four colours so that neighbours get different colours. Can the
whole infinite map be four-coloured?

You cannot just colour the first ten countries, then the next ten, and so on: an early choice that worked for the
first ten might make some later finite region impossible to colour. Something global is needed. It comes from logic.

**Theorem (compactness, propositional).** A set $\Gamma$ of formulas is satisfiable if and only if every finite subset
of $\Gamma$ is satisfiable.

*Proof.* "Only if" is clear: a valuation satisfying $\Gamma$ satisfies every part of it. For "if", suppose $\Gamma$ is
not satisfiable. By model existence (9.5), $\Gamma$ is inconsistent: it derives some $\varphi$ and $\neg\varphi$. The
two derivations together use only finitely many hypotheses; let $\Gamma_0$ be the finite set of them. Then $\Gamma_0$
is inconsistent, and by soundness (9.4) $\Gamma_0$ is not satisfiable (a valuation satisfying it would make both
$\varphi$ and $\neg\varphi$ true). So some finite subset is unsatisfiable. $\square$

The proof is short because all the work was done in 9.4 and 9.5. The key point is that **derivations are finite**:
semantic consequence over an infinite $\Gamma$ looks like it might depend on all of $\Gamma$ at once, but completeness
turns it into derivability, and a derivation touches only finitely much. An equivalent form:

**Corollary.** If $\Gamma \models \varphi$, then $\Gamma_0 \models \varphi$ for some finite $\Gamma_0 \subseteq \Gamma$.

(Apply compactness to $\Gamma \cup \{\neg\varphi\}$, which is unsatisfiable.)

The name comes from topology: compactness is equivalent to the statement that a certain space of valuations,
$\{T, F\}^{\mathbb{N}}$ with the product topology, is compact. You do not need that to use it.

### Colouring infinite maps and graphs

Now the map. Model it as a **graph**: a dot for each country, and an edge between neighbours (see
[Combinatorics, Chapter 12](../combinatorics/12-Planar-Graphs-and-Colouring.md)). Suppose the vertices are $u_0, u_1,
u_2, \dots$ (countably many) and every finite subgraph can be properly coloured with $k$ colours.

For each vertex $u$ and colour $i \in \{1, \dots, k\}$ take a propositional variable $p_{u,i}$, meaning "$u$ gets
colour $i$". Let $\Gamma$ consist of:

- for each vertex $u$: $p_{u,1} \lor p_{u,2} \lor \dots \lor p_{u,k}$ (each vertex gets a colour);
- for each vertex $u$ and colours $i \neq j$: $\neg(p_{u,i} \land p_{u,j})$ (at most one colour);
- for each edge $uw$ and colour $i$: $\neg(p_{u,i} \land p_{w,i})$ (neighbours differ).

A valuation satisfying $\Gamma$ is exactly a proper $k$-colouring. Any finite $\Gamma_0 \subseteq \Gamma$ mentions only
finitely many vertices; colour the finite subgraph on those vertices properly, and set $p_{u,i} = T$ exactly when $u$
gets colour $i$ (variables of other vertices: anything). That valuation satisfies $\Gamma_0$. By compactness $\Gamma$
is satisfiable: **the whole infinite graph can be $k$-coloured.** This is the de Bruijn-Erdős theorem (1951).
Combined with the four colour theorem for finite maps, it answers the puzzle: yes.

**Worked example (why formulas must be finite).** The argument needed each vertex to have finitely many colours, so
that "$u$ gets some colour" is one formula. Suppose we allowed an infinite disjunction $q_0 \lor q_1 \lor q_2 \lor \dots$
("some $q_n$ is true"). Then the set $\{q_0 \lor q_1 \lor \dots\} \cup \{\neg q_n : n \in \mathbb{N}\}$ would be
unsatisfiable, yet every finite subset is satisfiable: a finite subset forbids only finitely many $q_n$, and we can
make a larger one true. So compactness would fail. It holds for our logic precisely because every formula is
finite. With infinitely many colours the colouring theorem is in fact false: a graph whose finite parts each need only
finitely many colours can still need infinitely many in total.

### Other uses

The same recipe, "translate into infinitely many formulas, check finite pieces, apply compactness", proves:

- **König's lemma**: an infinite tree in which every vertex has finitely many children has an infinite path. (Variables $p_u$ say "$u$ is on the path"; the details are an exercise in many logic books.)
- **Every partial order extends to a linear order** (the order-extension principle). For finite sets this is
  topological sorting; compactness lifts it to infinite sets. You will do this in first-order logic in
  [Chapter 11](11-Completeness-and-Compactness.md).
- **Infinite Sudoku-like puzzles**, tilings of the plane by finitely many tile shapes, and many statements of the
  form "if every finite piece can be done, the whole can be done".

For uncountably many variables, Lindenbaum's lemma, and so compactness, needs a form of the axiom of choice
([Chapter 8](08-Axiomatic-Set-Theory.md)). In fact propositional compactness for arbitrary sets of variables is
equivalent, over ZF, to the Boolean prime ideal theorem, a weak form of choice.

## A short history

Gottlob Frege's *Begriffsschrift* (1879) was the first fully formal proof system for logic: axioms, a rule of
inference, and derivations that could be checked mechanically. Alfred North Whitehead and Bertrand Russell's
*Principia Mathematica* (1910-1913) built much of mathematics on a similar system. Whether those systems proved every
logical truth was a question nobody could yet state precisely, because "logical truth" had not been separated from
"provable".

The separation came with truth tables. Emil Post, in his doctoral thesis published in 1921, used them to prove that
the propositional part of *Principia* is consistent and complete: a formula is provable exactly when it is a
tautology. Paul Bernays had proved the same in his 1918 Habilitation thesis in Göttingen, which was not published at
the time. David Hilbert and Wilhelm Ackermann's textbook of 1928 posed the completeness question for first-order
logic, which Gödel answered the next year ([Chapter 11](11-Completeness-and-Compactness.md)).

The deduction theorem was proved by Jacques Herbrand in his 1930 thesis. Gerhard Gentzen's paper "Investigations into logical deduction" (1934-35) introduced natural deduction and the
sequent calculus, and Stanisław Jaśkowski published a natural deduction system independently in 1934. The
maximal-consistent-set method is due to Adolf Lindenbaum (reported by Tarski) and was turned into a general technique
by Leon Henkin in 1949. The de Bruijn-Erdős theorem appeared in 1951.

## Check yourself

??? question "1. Which of these strings are formulas (with only $\neg$, $\to$ and brackets)? (a) $(p \to \neg q)$ (b) $\neg(p)$ (c) $(\neg p \to (q \to p))$ (d) $p \to q \to r$"
    (a) Yes: $\neg q$ is a formula, so $(p \to \neg q)$ is. (b) No: the rules never put brackets around a single
    formula without an arrow. (c) Yes: $(q \to p)$ is a formula, $\neg p$ is a formula, and the rule for $\to$ joins
    them with brackets. (d) No: every arrow comes with its own pair of brackets, so this string is not built by the
    rules. In everyday writing we leave out brackets and agree that $\to$ groups to the right, but that is a
    convention for humans, not part of the official syntax.

??? question "2. Show that $\{p \to q, \; q \to r\} \models p \to r$, and that $\{p \to r\} \not\models p \to q$."
    For the first: let $v$ satisfy $p \to q$ and $q \to r$. If $v(p) = T$ then $v(q) = T$ (first premise), so
    $v(r) = T$ (second), so $v(p \to r) = T$. If $v(p) = F$ then $v(p \to r) = T$ anyway. For the second, a
    countermodel: $p = T$, $q = F$, $r = T$. Then $p \to r$ is true but $p \to q$ is false.

??? question "3. Give a natural deduction derivation of $A \land B \vdash B \land A$."
    | Rests on | Line | Formula | Rule |
    |---|---|---|---|
    | 1 | (1) | $A \land B$ | assumption |
    | 1 | (2) | $A$ | $\land$E on 1 |
    | 1 | (3) | $B$ | $\land$E on 1 |
    | 1 | (4) | $B \land A$ | $\land$I on 3, 2 |

??? question "4. Give a natural deduction derivation of $A \to (B \to C) \vdash (A \land B) \to C$."
    | Rests on | Line | Formula | Rule |
    |---|---|---|---|
    | 1 | (1) | $A \to (B \to C)$ | assumption |
    | 2 | (2) | $A \land B$ | assumption |
    | 2 | (3) | $A$ | $\land$E on 2 |
    | 2 | (4) | $B$ | $\land$E on 2 |
    | 1, 2 | (5) | $B \to C$ | $\to$E on 3, 1 |
    | 1, 2 | (6) | $C$ | $\to$E on 4, 5 |
    | 1 | (7) | $(A \land B) \to C$ | $\to$I on 2, 6 (discharges 2) |

??? question "5. In natural deduction, derive $\neg\neg A \vdash A$ and $A \vdash \neg\neg A$. Which one needs RAA?"
    For $\neg\neg A \vdash A$: (1) $\neg\neg A$, assumption; (2) $\neg A$, assumption; (3) $\bot$ by $\neg$E on 2, 1,
    resting on 1, 2; (4) $A$ by RAA on 2, 3, resting on 1. For $A \vdash \neg\neg A$: (1) $A$, assumption;
    (2) $\neg A$, assumption; (3) $\bot$ by $\neg$E on 1, 2, resting on 1, 2; (4) $\neg\neg A$ by $\neg$I on 2, 3,
    resting on 1. Only the first needs RAA. In intuitionistic logic, $A \vdash \neg\neg A$ holds but
    $\neg\neg A \vdash A$ does not.

??? question "6. In the Hilbert system, use the deduction theorem to prove $\{\varphi \to \psi, \; \psi \to \chi\} \vdash \varphi \to \chi$."
    By the deduction theorem it is enough to derive $\chi$ from $\{\varphi \to \psi, \psi \to \chi, \varphi\}$:
    (1) $\varphi$, hypothesis; (2) $\varphi \to \psi$, hypothesis; (3) $\psi$, MP 1, 2; (4) $\psi \to \chi$,
    hypothesis; (5) $\chi$, MP 3, 4. The deduction theorem then removes $\varphi$ from the hypotheses and gives
    $\varphi \to \chi$.

??? question "7. Prove $\vdash (\neg\varphi \to \varphi) \to \varphi$ in the Hilbert system (you may use the lemmas of 9.3)."
    By the deduction theorem it is enough to show $\{\neg\varphi \to \varphi\} \vdash \varphi$, and by Lemma C(1) it
    is enough to show that $\{\neg\varphi \to \varphi, \; \neg\varphi\}$ is inconsistent. It derives $\neg\varphi$
    (a hypothesis) and $\varphi$ (MP on the two hypotheses). So it is inconsistent, and we are done.

??? question "8. Show that $\neg\neg p \to p$ cannot be derived from (A1) and (A2) alone. (Hint: read $\neg\varphi$ as always true.)"
    Use a new reading: $\to$ as usual, but give $\neg\varphi$ the value $T$ always. (A1) and (A2) are true whatever
    values their parts $\varphi, \psi, \chi$ get (that is what the soundness proof checked), so every instance is still
    true in this reading; and MP still preserves truth. So everything derivable from (A1), (A2) and MP is true
    in the new reading. But $\neg\neg p \to p$ becomes $T \to p$, which is false when $p = F$. So it is not
    derivable without (A3).

??? question "9. Prove: $\Gamma$ is consistent if and only if $\Gamma$ is satisfiable."
    If $\Gamma$ is satisfiable, it is consistent: if it derived $\varphi$ and $\neg\varphi$, soundness would make both
    true under a valuation satisfying $\Gamma$, which is impossible. If $\Gamma$ is consistent, it is satisfiable: that
    is the model existence theorem of 9.5.

??? question "10. Suppose a set $\Gamma$ of formulas has the property that every valuation makes at least one member of $\Gamma$ true. Show that there are finitely many members $\gamma_1, \dots, \gamma_n$ of $\Gamma$ such that $\gamma_1 \lor \dots \lor \gamma_n$ is a tautology."
    The set $\{\neg\gamma : \gamma \in \Gamma\}$ is unsatisfiable: a valuation satisfying it would make every member of
    $\Gamma$ false. By compactness some finite subset $\{\neg\gamma_1, \dots, \neg\gamma_n\}$ is unsatisfiable. That
    means every valuation makes some $\gamma_i$ true, i.e. $\gamma_1 \lor \dots \lor \gamma_n$ is a tautology.

??? question "11. Why does Lemma F fail if $\Delta$ is consistent but not maximal? Give an example."
    Take $\Delta = \{p \lor q\}$, consistent. The valuation read off it makes every variable false (no variable is in
    $\Delta$), and then $p \lor q$ is false although it is in $\Delta$. The trouble is that $\Delta$ has not decided
    which of $p$, $q$ is true. Maximality forces a decision on every formula, which is what makes Lemma E(3), and so
    the truth lemma, work.

??? question "12. An infinite set of students must each be assigned to one of three exam rooms, and some pairs of students must not share a room. Every finite group of students can be assigned. Show the whole set can be assigned, assuming the students can be listed $s_0, s_1, \dots$."
    This is graph 3-colouring: students are vertices, forbidden pairs are edges, rooms are colours. Use the variables
    $p_{s,i}$ ("student $s$ is in room $i$") and the three kinds of formulas from 9.6. Every finite subset of these
    formulas mentions finitely many students, who can be assigned by assumption, giving a valuation that satisfies the
    subset. By compactness the whole set is satisfiable, and a satisfying valuation is an assignment of every student.

## What you learned

- Syntax is about strings and rules; semantics is about truth. $\Gamma \vdash \varphi$ and $\Gamma \models \varphi$
  are different definitions, and their agreement is a theorem.
- Formulas are built inductively and read uniquely, so definitions and proofs can go "by induction on formulas".
- Natural deduction has an introduction and an elimination rule per connective, plus RAA for classical logic.
- A Hilbert system with three axiom schemes and modus ponens is enough; the deduction theorem makes it usable.
- Soundness: derivable implies true (induction on derivations). Completeness: true implies derivable (extend a
  consistent set to a maximal one, and read off a valuation).
- Compactness: a set of formulas is satisfiable if every finite part is, because derivations are finite. It turns
  finite colouring results into infinite ones.

**Next:** [Chapter 10](10-First-Order-Logic.md), the language of "for all" and "there exists", with structures in
place of truth tables.

## Further reading

- H. B. Enderton, *A Mathematical Introduction to Logic*, 2nd edition, 2001. Chapter 1 covers this chapter at the
  same level.
- E. Mendelson, *Introduction to Mathematical Logic*, 6th edition, 2015. The Hilbert-system approach, with Kalmár's
  proof of completeness.
- D. van Dalen, *Logic and Structure*, 5th edition, 2013. Natural deduction done carefully.
- I. Chiswell and W. Hodges, *Mathematical Logic*, 2007. A friendly route through natural deduction to completeness.
- E. J. Lemmon, *Beginning Logic*, 1965. The source of the line-by-line style used here.
- E. L. Post, "Introduction to a general theory of elementary propositions", *American Journal of Mathematics* 43,
  1921.
- G. Gentzen, "Untersuchungen über das logische Schließen", *Mathematische Zeitschrift* 39, 1935.
- S. A. Cook and R. A. Reckhow, "The relative efficiency of propositional proof systems", *Journal of Symbolic Logic*
  44, 1979.
- On this site: the Topics lessons [Truth tables](../../topics/logic/level-4/02-truth-tables.md),
  [Valid arguments](../../topics/logic/level-5/05-valid-arguments.md) and
  [Boolean algebra](../../topics/logic/level-6/02-boolean-algebra.md); the U of T guide
  [MAT137 Unit 1: Logic, Sets & Proofs](../../uoft/MAT137/unit01.md); the [Algebra book](../algebra/index.md)
  for Boolean algebra.
