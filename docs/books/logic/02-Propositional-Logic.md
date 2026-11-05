# 2. Propositional logic

*Chapter 1 gave each connective a meaning. This chapter steps back and studies the formulas themselves: how they are
built, which ones are always true, when two of them say the same thing, and how to change one into another by
algebra. You will prove the laws of logic, show that every truth table whatsoever is the table of some formula, find
that a single connective (NAND) is enough to build all the others, and finish by building, from that one connective,
the circuit that adds numbers inside every computer.*

!!! abstract "In this chapter"

    **You will learn:**

    - what a formula of propositional logic is, and how its tree shows its structure
    - tautologies, contradictions, logical equivalence and valid arguments, and how to test them with truth tables
    - the laws of logic (De Morgan, distributive, contrapositive and more), with proofs, and how to calculate with them
    - disjunctive and conjunctive normal forms, and a proof that every truth table has a formula
    - complete sets of connectives: why NAND alone is enough, why $\{\wedge, \vee\}$ is not, and Post's theorem
    - how logic gates build a circuit that adds binary numbers

    **You need:** [Chapter 1](01-Statements-and-Truth.md). For a gentler version, see the Topics lessons
    [Truth tables](../../topics/logic/level-4/02-truth-tables.md),
    [De Morgan's laws](../../topics/logic/level-5/03-de-morgan.md),
    [Valid arguments](../../topics/logic/level-5/05-valid-arguments.md),
    [Logic gates](../../topics/logic/level-6/01-logic-gates.md) and
    [Boolean algebra](../../topics/logic/level-6/02-boolean-algebra.md).

    **Levels:** 2.1 to 2.3 are beginner; 2.4 and 2.6 are intermediate; 2.5 is intermediate, with Post's theorem at
    the end advanced.

## 2.1 Formulas and their trees

Is $p \to q \to r$ a sensible thing to write? It could mean $(p \to q) \to r$ or $p \to (q \to r)$, and these are
not the same: when $p$ and $r$ are both false, the first is false (its hypothesis $p \to q$ is true and $r$ is
false) and the second is true (its hypothesis $p$ is false). Before we can study formulas we must say precisely
which strings of symbols are formulas and how each one is read.

**Definition.** Fix a supply of **propositional variables** $p, q, r, p_1, p_2, \dots$ (letters that stand for
statements). The **formulas** of propositional logic are built by these rules, and only by them:

1. Every propositional variable is a formula.
2. If $A$ is a formula, so is $\neg A$.
3. If $A$ and $B$ are formulas, so are $(A \wedge B)$, $(A \vee B)$, $(A \to B)$ and $(A \leftrightarrow B)$.

A definition like this, which says what the simplest objects are and how to build bigger ones from smaller ones, is
called a **recursive** (or **inductive**) definition. The capital letters $A$, $B$ are not formulas themselves; they
are names we use to talk *about* formulas, just as $n$ in "for every number $n$" is not a number.

So $((p \wedge \neg q) \to r)$ is a formula: $q$ is a formula by rule 1, so $\neg q$ is by rule 2, so
$(p \wedge \neg q)$ is by rule 3, and so is the whole thing. The string $p \wedge \to q$ is not a formula: no rule
produces it.

In practice we drop the outermost brackets and use a **precedence** convention, as arithmetic does with $\times$
before $+$: $\neg$ binds tightest, then $\wedge$, then $\vee$, then $\to$, then $\leftrightarrow$. So
$p \wedge \neg q \to r$ means $((p \wedge \neg q) \to r)$. For $\to$ written twice we will always use brackets, since
the two readings differ.

### The tree of a formula

Each formula has a **main connective**, the one applied last when it was built. The main connective of
$(p \wedge \neg q) \to r$ is $\to$. Splitting at the main connective, then splitting each part at its main
connective, and so on, draws the formula as a **tree** (mathematicians draw trees with the root at the top).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 200" role="img" aria-label="The tree of the formula (p and not q) implies r: the root is the arrow, its children are 'and' and r, the children of 'and' are p and 'not', and the child of 'not' is q">
  <g stroke="currentColor" stroke-width="1.5">
    <line x1="220" y1="25" x2="140" y2="75"/>
    <line x1="220" y1="25" x2="300" y2="75"/>
    <line x1="140" y1="75" x2="90" y2="125"/>
    <line x1="140" y1="75" x2="190" y2="125"/>
    <line x1="190" y1="125" x2="190" y2="175"/>
  </g>
  <circle cx="220" cy="25" r="16" fill="#eea66f" stroke="currentColor"/>
  <circle cx="140" cy="75" r="16" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="300" cy="75" r="16" fill="#7ccf9a" stroke="currentColor"/>
  <circle cx="90" cy="125" r="16" fill="#7ccf9a" stroke="currentColor"/>
  <circle cx="190" cy="125" r="16" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="190" cy="175" r="16" fill="#7ccf9a" stroke="currentColor"/>
  <g font-size="15" fill="currentColor" text-anchor="middle">
    <text x="220" y="30">→</text>
    <text x="140" y="80">∧</text>
    <text x="300" y="80">r</text>
    <text x="90" y="130">p</text>
    <text x="190" y="130">¬</text>
    <text x="190" y="180">q</text>
  </g>
  <g font-size="12" fill="currentColor">
    <text x="250" y="22">main connective</text>
    <text x="320" y="80">variable</text>
    <text x="214" y="129">negation</text>
  </g>
</svg>
</div>

The leaves (bottom ends) are variables; every other node is a connective, with one child for $\neg$ and two for the
others. Each node is the top of a smaller tree, and the formulas those smaller trees stand for are the
**subformulas**: here $p$, $q$, $r$, $\neg q$, $p \wedge \neg q$ and the whole formula, six in all.

The tree tells you how to compute a truth value: start at the leaves with the values of the variables, and work up,
applying each connective's table. That is exactly what the columns of a truth table do, left to right.

It is a theorem, called **unique readability**, that every formula (with all its brackets) has exactly one tree: a
formula cannot be split in two different ways. The proof counts brackets: in a formula $(A \wedge B)$ (or with another binary connective) the main
connective is the only binary connective that lies inside just one pair of brackets; every other one lies inside its
own subformula's brackets as well. Enderton's book (see Further reading) gives the details. It is why the brackets in rule 3 are there.

**Proving things about all formulas.** Because formulas are built by rules, you can prove a property of every formula
by showing that (a) every variable has it and (b) each rule preserves it. This is **structural induction**, a cousin
of the induction of [Chapter 4](04-Proofs.md). For example: *every formula has as many left brackets as right
brackets.* A variable has none of either. If $A$ has $k$ of each, $\neg A$ also has $k$ of each. If $A$ has $k$ of
each and $B$ has $m$ of each, then $(A \wedge B)$ has $k + m + 1$ of each, and the same for the other three
connectives. So every formula, however it was built, is balanced.

## 2.2 Tautologies, contradictions, equivalence

**Definitions.** An **assignment** (or **valuation**) gives each variable the value T or F; it is one row of a truth
table. A formula is

- a **tautology** if it is true under every assignment (every row of its table is T);
- a **contradiction** if it is false under every assignment;
- **satisfiable** if it is true under at least one assignment;
- **contingent** if it is neither a tautology nor a contradiction.

**Examples.** $p \vee \neg p$ is a tautology (the **law of excluded middle**). $p \wedge \neg p$ is a contradiction.
$p \to q$ is contingent. $(p \to q) \vee (q \to p)$ is a tautology, though it looks surprising: if $q$ is true the
first disjunct is true, and if $q$ is false the second one is.

A formula $A$ is a tautology exactly when $\neg A$ is a contradiction, and $A$ is satisfiable exactly when $\neg A$
is not a tautology. Deciding whether a formula is satisfiable is the **satisfiability problem**, SAT. A truth table
settles it, but a formula with 100 variables has $2^{100}$ rows, about $1.27 \times 10^{30}$. Nobody knows a method
that is always fundamentally faster; whether one exists is the famous P versus NP question of
[Chapter 16](16-Complexity.md).

**Logical equivalence.** Two formulas $A$ and $B$ are **logically equivalent**, written $A \equiv B$, if they have
the same truth value under every assignment. De Morgan's law from Chapter 1 says $\neg(p \wedge q) \equiv \neg p \vee
\neg q$.

Do not confuse $\equiv$ with $\leftrightarrow$. The connective $\leftrightarrow$ is part of a formula:
$p \leftrightarrow q$ is a formula that may be true or false. The sign $\equiv$ is a statement *about* two formulas,
made by us from the outside. They are linked by a simple fact:

> $A \equiv B$ exactly when the formula $A \leftrightarrow B$ is a tautology.

The proof is one line: $A \leftrightarrow B$ is true under an assignment exactly when $A$ and $B$ get the same value
under it, so it is true under every assignment exactly when they always agree.

### Valid arguments

An **argument** is a list of **premises** $A_1, \dots, A_n$ and a **conclusion** $B$. It is **valid** if every
assignment that makes all the premises true also makes the conclusion true. We write

$$
A_1, \dots, A_n \models B
$$

and say "$B$ is a **logical consequence** of the premises". (The symbol $\models$ is read "entails" or "models".)
Validity is about form, not content: a valid argument with a false premise can have a false conclusion; what it can
never do is go from true premises to a false conclusion.

**Fact.** $A_1, \dots, A_n \models B$ exactly when $(A_1 \wedge \dots \wedge A_n) \to B$ is a tautology. (The
conditional fails only in a row where the premises are all true and $B$ is false, and that is exactly a row that
breaks validity.)

The standard valid forms have names:

| name | premises | conclusion |
|---|---|---|
| modus ponens | $p \to q$, $p$ | $q$ |
| modus tollens | $p \to q$, $\neg q$ | $\neg p$ |
| hypothetical syllogism (chain rule) | $p \to q$, $q \to r$ | $p \to r$ |
| disjunctive syllogism | $p \vee q$, $\neg p$ | $q$ |
| proof by cases | $p \vee q$, $p \to r$, $q \to r$ | $r$ |

And two invalid forms, the **fallacies**, that people use every day:

| name | premises | conclusion | the bad row |
|---|---|---|---|
| affirming the consequent | $p \to q$, $q$ | $p$ | $p$ F, $q$ T |
| denying the antecedent | $p \to q$, $\neg p$ | $\neg q$ | $p$ F, $q$ T |

**Worked example 2.1.** Is this argument valid? "If the reactor is hot, the alarm sounds. If the alarm sounds, the
crew wakes. The crew did not wake. So the reactor is not hot."

With $h$, $a$, $w$ for the three statements, the premises are $h \to a$, $a \to w$, $\neg w$ and the conclusion is
$\neg h$. We look for a row where all premises are true and the conclusion is false, that is, with $h$ true. If $h$
is true, then $h \to a$ forces $a$ true, then $a \to w$ forces $w$ true, and then $\neg w$ is false. So no such row
exists: **the argument is valid**. (In one line: the chain rule gives $h \to w$, then modus tollens gives $\neg h$.)

Searching for a "bad row" is usually much faster than writing all $2^n$ rows: assume the conclusion false and the
premises true, and see whether that forces a contradiction.

## 2.3 The laws of logic

Here are the most used equivalences. In each, $p$, $q$, $r$ can be replaced by any formulas, and $\top$ and $\bot$
stand for any tautology and any contradiction (read "top" and "bottom", or "true" and "false").

| law | form |
|---|---|
| double negation | $\neg\neg p \equiv p$ |
| identity | $p \wedge \top \equiv p$, $\quad p \vee \bot \equiv p$ |
| domination | $p \vee \top \equiv \top$, $\quad p \wedge \bot \equiv \bot$ |
| idempotent | $p \wedge p \equiv p$, $\quad p \vee p \equiv p$ |
| complement | $p \vee \neg p \equiv \top$, $\quad p \wedge \neg p \equiv \bot$ |
| commutative | $p \wedge q \equiv q \wedge p$, $\quad p \vee q \equiv q \vee p$ |
| associative | $(p \wedge q) \wedge r \equiv p \wedge (q \wedge r)$, and the same for $\vee$ |
| distributive | $p \wedge (q \vee r) \equiv (p \wedge q) \vee (p \wedge r)$ |
| distributive | $p \vee (q \wedge r) \equiv (p \vee q) \wedge (p \vee r)$ |
| De Morgan | $\neg(p \wedge q) \equiv \neg p \vee \neg q$, $\quad \neg(p \vee q) \equiv \neg p \wedge \neg q$ |
| absorption | $p \wedge (p \vee q) \equiv p$, $\quad p \vee (p \wedge q) \equiv p$ |
| implication | $p \to q \equiv \neg p \vee q$ |
| contrapositive | $p \to q \equiv \neg q \to \neg p$ |
| negated implication | $\neg(p \to q) \equiv p \wedge \neg q$ |
| exportation | $(p \wedge q) \to r \equiv p \to (q \to r)$ |
| biconditional | $p \leftrightarrow q \equiv (p \to q) \wedge (q \to p) \equiv (p \wedge q) \vee (\neg p \wedge \neg q)$ |

Notice the second distributive law: unlike in arithmetic, where $a + bc \ne (a + b)(a + c)$, in logic "or"
distributes over "and" as well as the other way round.

**Proof of the laws.** Each is proved by a truth table. Here is the first distributive law; the last two columns agree
in all 8 rows.

| $p$ | $q$ | $r$ | $q \vee r$ | $p \wedge (q \vee r)$ | $p \wedge q$ | $p \wedge r$ | $(p \wedge q) \vee (p \wedge r)$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| T | T | T | T | T | T | T | T |
| T | T | F | T | T | T | F | T |
| T | F | T | T | T | F | T | T |
| T | F | F | F | F | F | F | F |
| F | T | T | T | F | F | F | F |
| F | T | F | T | F | F | F | F |
| F | F | T | T | F | F | F | F |
| F | F | F | F | F | F | F | F |

Many laws have shorter proofs by "bad row" reasoning. *Contrapositive:* $p \to q$ is false only when $p$ is T and
$q$ is F; $\neg q \to \neg p$ is false only when $\neg q$ is T and $\neg p$ is F, which is the same row. *Absorption:*
if $p$ is T, both $p \wedge (p \vee q)$ and $p$ are T; if $p$ is F, both are F. *Negated implication:* $p \to q$ is
false exactly in the row $p$ T, $q$ F, which is exactly when $p \wedge \neg q$ is true. The other proofs are
exercises of the same kind, and the Python check at the end of this section does them all at once.

### Why we may substitute

Two facts make the laws into a working algebra.

1. **Substitution.** If $A \equiv B$, and we replace each variable throughout both by formulas (the same formula for
   the same variable everywhere), the results are still equivalent. For example, De Morgan with $p := (r \to s)$ and
   $q := \neg t$ gives $\neg((r \to s) \wedge \neg t) \equiv \neg(r \to s) \vee \neg\neg t$. *Why:* any assignment
   gives the replacing formulas some truth values, and $A$ and $B$ agree for every choice of values of their
   variables.
2. **Replacement.** If $A \equiv B$ and $A$ occurs as a subformula of a bigger formula $C$, then replacing that
   occurrence by $B$ gives a formula equivalent to $C$. *Why:* the truth value of $C$ is computed from the bottom of
   its tree upward; the node where $A$ sat receives the same value from $B$ under every assignment, and everything
   above it is computed in exactly the same way. (A careful proof is a structural induction on $C$.)

With these, a chain of laws is a proof of equivalence, exactly like a chain of equalities in algebra.

**Worked example 2.2.** Show that $(p \wedge q) \vee (p \wedge \neg q) \equiv p$.

$$
\begin{aligned}
(p \wedge q) \vee (p \wedge \neg q) &\equiv p \wedge (q \vee \neg q) && \text{distributive, read right to left} \\
&\equiv p \wedge \top && \text{complement} \\
&\equiv p && \text{identity.}
\end{aligned}
$$

**Worked example 2.3.** Show that $(p \to q) \wedge (p \to r) \equiv p \to (q \wedge r)$. In words: "if $p$ then
$q$, and if $p$ then $r$" says the same as "if $p$ then both".

$$
\begin{aligned}
(p \to q) \wedge (p \to r) &\equiv (\neg p \vee q) \wedge (\neg p \vee r) && \text{implication, twice} \\
&\equiv \neg p \vee (q \wedge r) && \text{second distributive law, right to left} \\
&\equiv p \to (q \wedge r) && \text{implication.}
\end{aligned}
$$

**Worked example 2.4.** Simplify $\neg(p \vee (\neg p \wedge q))$.

$$
\begin{aligned}
\neg(p \vee (\neg p \wedge q)) &\equiv \neg p \wedge \neg(\neg p \wedge q) && \text{De Morgan} \\
&\equiv \neg p \wedge (\neg\neg p \vee \neg q) && \text{De Morgan} \\
&\equiv \neg p \wedge (p \vee \neg q) && \text{double negation} \\
&\equiv (\neg p \wedge p) \vee (\neg p \wedge \neg q) && \text{distributive} \\
&\equiv \bot \vee (\neg p \wedge \neg q) && \text{complement} \\
&\equiv \neg p \wedge \neg q && \text{identity (with commutativity).}
\end{aligned}
$$

**Check:** with $p$ F and $q$ F the original is $\neg(\text{F} \vee (\text{T} \wedge \text{F})) = \neg \text{F} =
\text{T}$, and so is $\neg p \wedge \neg q$; with $q$ T and $p$ F the original is $\neg(\text{F} \vee \text{T}) =
\text{F}$, and so is the answer.

The laws above are the axioms of a **Boolean algebra**, named after George Boole. The same laws hold for sets, with
$\cap$, $\cup$ and complement in place of $\wedge$, $\vee$ and $\neg$ ([Chapter 5](05-Sets.md)), and for switches
and gates (section 2.6). That one algebra describes all three is the reason logic, set theory and computer hardware
share a vocabulary.

**Try it in Python.** Checking an equivalence is a loop over all rows.

```python
from itertools import product

def equivalent(f, g, n):
    return all(f(*v) == g(*v) for v in product([True, False], repeat=n))

imp = lambda a, b: (not a) or b
print(equivalent(lambda p, q, r: p and (q or r),
                 lambda p, q, r: (p and q) or (p and r), 3))      # True
print(equivalent(lambda p, q, r: imp(imp(p, q), r),
                 lambda p, q, r: imp(p, imp(q, r)), 3))           # False
```

The second line confirms what section 2.1 said: $\to$ is not associative.

## 2.4 Normal forms
*Level: intermediate.*

Suppose a friend hands you a truth table they invented, with $n$ variables and an arbitrary column of T's and F's,
and asks for a formula that has exactly that table. Is there always one? Yes, and the proof builds it.

### How many tables are there?

A table on $n$ variables has $2^n$ rows, and in each row the output can be T or F independently. So there are
$2^{2^n}$ possible tables, each one a function from $\{\text{T}, \text{F}\}^n$ to $\{\text{T}, \text{F}\}$, called a
**Boolean function** of $n$ variables. For $n = 1$ there are $2^2 = 4$ (always T, always F, the identity, and
$\neg$); for $n = 2$ there are $2^4 = 16$; for $n = 3$ there are $2^8 = 256$; for $n = 5$ already $2^{32}$, more
than four billion. The theorem below says every one of them is the table of a formula.

### Definitions

A **literal** is a variable or the negation of a variable: $p$, $\neg p$, $q$, $\neg q$, ... A **conjunctive
clause** is a conjunction of literals, like $p \wedge \neg q \wedge r$; a **disjunctive clause** is a disjunction of
literals, like $\neg p \vee q$.

- A formula is in **disjunctive normal form (DNF)** if it is a disjunction of conjunctive clauses: an "or of ands",
  such as $(p \wedge \neg q) \vee (\neg p \wedge q \wedge r) \vee \neg r$.
- A formula is in **conjunctive normal form (CNF)** if it is a conjunction of disjunctive clauses: an "and of ors",
  such as $(p \vee q) \wedge (\neg p \vee \neg r)$.

(A single clause, or even a single literal, counts as a disjunction or conjunction of one item.)

### The theorem

**Theorem 2.1.** Every Boolean function is the truth table of some formula in DNF, and of some formula in CNF.

*Proof (DNF).* Let $f$ be a Boolean function of the variables $p_1, \dots, p_n$.

For each row $v$ of the table (an assignment of T or F to each variable), form the conjunctive clause $C_v$ that
contains $p_i$ if $v$ makes $p_i$ true and $\neg p_i$ if $v$ makes $p_i$ false. For example, for the row $p$ T,
$q$ F, $r$ T, the clause is $p \wedge \neg q \wedge r$. Such a clause is called a **minterm**. The key property is:

> $C_v$ is true under the assignment $v$, and false under every other assignment.

Indeed, under $v$ every literal of $C_v$ is true. Under a different assignment $w$, some variable $p_i$ gets a
different value from the one it gets under $v$, and then the literal for $p_i$ in $C_v$ is false, so the
conjunction is false.

Now let $D$ be the disjunction of the clauses $C_v$ over all rows $v$ where $f(v) = \text{T}$. Under an assignment
$w$:

- if $f(w) = \text{T}$, then $C_w$ is one of the disjuncts and it is true under $w$, so $D$ is true;
- if $f(w) = \text{F}$, then every disjunct $C_v$ has $v \ne w$, so each is false under $w$, and $D$ is false.

So $D$ has the table $f$. One case remains: if $f$ is never T, there are no disjuncts; then use $p_1 \wedge \neg p_1$,
which is in DNF and always false.

*Proof (CNF).* Apply the DNF construction to $\neg f$ (the function with every output flipped) to get a DNF formula
$D'$ with table $\neg f$. Then $\neg D'$ has table $f$, and pushing the negation inward with De Morgan's laws turns
the "not of an or of ands" into an "and of ors of negated literals"; cancel double negations and the result is in
CNF. Directly: for each row $v$ where $f(v) = \text{F}$ take the disjunctive clause that is false exactly at $v$ (a
**maxterm**, such as $\neg p \vee q \vee \neg r$ for the row $p$ T, $q$ F, $r$ T), and take the conjunction of
these. $\blacksquare$

**Worked example 2.5.** The **majority** function $M(p, q, r)$ is T when at least two of its inputs are T. Find DNF
and CNF formulas for it.

The rows where $M$ is T are TTT, TTF, TFT, FTT. The proof gives the DNF

$$
(p \wedge q \wedge r) \vee (p \wedge q \wedge \neg r) \vee (p \wedge \neg q \wedge r) \vee (\neg p \wedge q \wedge r).
$$

This is correct but long. By example 2.2, the first two clauses combine to $p \wedge q$; similarly, using the first
clause again (idempotence lets us use it as often as we like), $p \wedge r$ and $q \wedge r$. So

$$
M(p, q, r) \equiv (p \wedge q) \vee (p \wedge r) \vee (q \wedge r).
$$

In words: "some two of them are true". For CNF, $M$ is false when at least two inputs are false, which is "some two
are false"; negating, $M$ is true when every pair contains a true one:

$$
M(p, q, r) \equiv (p \vee q) \wedge (p \vee r) \wedge (q \vee r).
$$

**Check:** at TFF the DNF has no true clause (each needs two T's) and the CNF fails at its last clause $q \vee r$; at
TTF the DNF's first clause is true and every CNF clause is true.

**Worked example 2.6.** Put $(p \to q) \to r$ into DNF and CNF using the laws.

$$
\begin{aligned}
(p \to q) \to r &\equiv \neg(p \to q) \vee r && \text{implication} \\
&\equiv (p \wedge \neg q) \vee r && \text{negated implication: this is DNF} \\
&\equiv (p \vee r) \wedge (\neg q \vee r) && \text{second distributive law: this is CNF.}
\end{aligned}
$$

### Normal forms can be very long

The DNF from the proof can have up to $2^n$ clauses. Sometimes that is unavoidable.

**Theorem 2.2.** Let $P_n$ be the **parity** function, true when an odd number of $p_1, \dots, p_n$ are true. Every
DNF formula for $P_n$ has at least $2^{n-1}$ clauses.

*Proof.* Take any DNF formula $D$ for $P_n$, and any one of its clauses $C$ that is not a contradiction (a clause
containing both $p_i$ and $\neg p_i$ is never true and can be deleted without changing $D$). Suppose $C$ does not
mention some variable $p_i$. Pick an assignment $w$ making $C$ true (possible, since $C$ is not a contradiction).
Flip the value of $p_i$ in $w$: $C$ is still true, because it does not mention $p_i$, so $D$ is true at both
assignments. But flipping one variable changes the parity, so $P_n$ is true at exactly one of them. This
contradicts $D$ having the table $P_n$. So every clause mentions all $n$ variables, and is therefore true at exactly
one assignment. $P_n$ is true at exactly half of the $2^n$ assignments, $2^{n-1}$ of them, and each needs a clause of
its own. $\blacksquare$

(Short formulas for parity do exist if we may nest connectives: $p_1 \oplus (p_2 \oplus (\dots \oplus p_n))$, written
with $\leftrightarrow$ and $\neg$, has length growing only in proportion to $n$. Normal forms are convenient, not
economical.)

CNF matters for computing. The programs called **SAT solvers**, used to check computer chips and to solve scheduling
puzzles, take their input in CNF, because a CNF formula is a list of simple constraints ("at least one of these
literals is true") that must all hold at once. Any formula can be turned into an *equisatisfiable* CNF formula (one
that is satisfiable exactly when the original is) of comparable size by adding new variables; this trick, due to
G. S. Tseitin (1968), appears again in [Chapter 16](16-Complexity.md).

<figure class="play" data-play="cnfflip"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> A formula in conjunctive normal form: it is true only when every clause has a true literal. Flip the variables.</figcaption></figure>

## 2.5 Complete sets of connectives
*Level: intermediate.*

Theorem 2.1 used only $\neg$, $\wedge$ and $\vee$, so these three connectives can express every Boolean function. A
set of connectives with this property is called **(functionally) complete**. Can we manage with fewer?

**$\{\neg, \wedge\}$ is complete.** Every formula can be rewritten using $\neg$, $\wedge$, $\vee$ only, and
$p \vee q \equiv \neg(\neg p \wedge \neg q)$ by De Morgan. Replacing each $\vee$ this way leaves only $\neg$ and
$\wedge$.

**$\{\neg, \vee\}$ is complete**, by the other De Morgan law: $p \wedge q \equiv \neg(\neg p \vee \neg q)$.

**$\{\neg, \to\}$ is complete**, since $p \vee q \equiv \neg p \to q$ and $\{\neg, \vee\}$ is complete.

### One connective is enough

Define **NAND** ("not and"), written $p \uparrow q$ and called the **Sheffer stroke**, by
$p \uparrow q \equiv \neg(p \wedge q)$. It is false only when both inputs are true.

**Theorem 2.3.** $\{\uparrow\}$ is complete.

*Proof.* It is enough to express $\neg$ and $\wedge$, since $\{\neg, \wedge\}$ is complete.

- $\neg p \equiv p \uparrow p$, because $p \uparrow p = \neg(p \wedge p) \equiv \neg p$.
- $p \wedge q \equiv (p \uparrow q) \uparrow (p \uparrow q)$, because the right side is $\neg(p \uparrow q)$ by the
  previous line, and $\neg(p \uparrow q) = \neg\neg(p \wedge q) \equiv p \wedge q$.

For convenience, also $p \vee q \equiv (p \uparrow p) \uparrow (q \uparrow q)$, since the right side is
$\neg(\neg p \wedge \neg q)$. $\blacksquare$

The same works for **NOR**, $p \downarrow q \equiv \neg(p \vee q)$ (the **Peirce arrow**): $\neg p \equiv p
\downarrow p$ and $p \vee q \equiv (p \downarrow q) \downarrow (p \downarrow q)$, and $\{\neg, \vee\}$ is complete.
Of the 16 binary connectives, NAND and NOR are the only two that are complete on their own (exercise 11 shows part of
why).

### Proving a set is *not* complete

To show a set of connectives is not complete, find a property that every formula built from it has, and that some
Boolean function lacks.

**Theorem 2.4.** $\{\wedge, \vee\}$ is not complete. In fact no formula built from variables with $\wedge$ and $\vee$
alone is equivalent to $\neg p$.

*Proof.* Claim: every such formula is true when all its variables are true. By structural induction: a variable is
true under the all-true assignment; and if $A$ and $B$ are true under it, so are $A \wedge B$ and $A \vee B$. But
$\neg p$ is false when $p$ is true. $\blacksquare$

The same argument shows $\{\wedge, \vee, \to, \leftrightarrow\}$ is not complete, since all four preserve "all
true". What these sets lack is a way to turn truth into falsehood.

### Post's theorem
*Level: advanced.*

Emil Post found the exact answer in 1941. Call a Boolean function $f$ of $n$ variables

- **T-preserving** if $f(\text{T}, \dots, \text{T}) = \text{T}$, and **F-preserving** if
  $f(\text{F}, \dots, \text{F}) = \text{F}$;
- **monotone** if changing an input from F to T never changes the output from T to F;
- **self-dual** if flipping all inputs flips the output: $f(\neg x_1, \dots, \neg x_n) = \neg f(x_1, \dots, x_n)$;
- **affine** if, writing T as 1 and F as 0, $f(x_1, \dots, x_n) = c_0 + c_1 x_1 + \dots + c_n x_n \pmod 2$ for some
  constants $c_i$ in $\{0, 1\}$ (so $f$ is built from $\oplus$ and constants only).

Each of these five properties is preserved when functions with it are plugged into each other, so a set of
connectives that all have one of the properties can only build functions with that property. **Post's theorem**
says the converse: a set of connectives is complete if and only if, for each of the five properties, it contains a
connective *without* that property. The "only if" half is the easy argument just given (as $\neg$ is not
T-preserving and $\wedge$ is not affine, a complete set must contain non-examples). The "if" half is a page or two of
case analysis; it is in the book by Enderton listed below, among others.

**Worked example 2.7.** Check NAND against Post's list. $\text{T} \uparrow \text{T} = \text{F}$, so it is not
T-preserving. $\text{F} \uparrow \text{F} = \text{T}$, so it is not F-preserving. Raising both inputs from F to T
lowers the output, so it is not monotone. Flipping the inputs of the row TT gives FF, and the outputs F and T are
flipped, but flipping TF gives FT, and the outputs T and T are not; so it is not self-dual. And in 0-1 arithmetic,
$x \uparrow y = 1 + xy \pmod 2$, which has a product term, so it is not affine (the only affine functions of two
variables that depend on both inputs are $x + y$ and $x + y + 1$, that is $\oplus$ and $\leftrightarrow$, and
NAND's table is neither). NAND fails all five properties, so Post's theorem gives Theorem 2.3 again.

## 2.6 Logic gates and circuits
*Level: intermediate.*

In 1937 Claude Shannon, a master's student at MIT, wrote the thesis "A Symbolic Analysis of Relay and Switching
Circuits" (published 1938). He observed that switches in series behave like $\wedge$ (current flows only if both are
closed) and switches in parallel behave like $\vee$, so Boole's algebra could be used to design and simplify
switching circuits. Every digital device since is built on that observation.

A **logic gate** is a physical device whose output voltage is "high" (1, true) or "low" (0, false) according to a
fixed Boolean function of its inputs. The common gates are AND, OR, NOT, NAND, NOR and XOR ($\oplus$). A
**combinational circuit** is a network of gates without loops; each output is then a Boolean function of the inputs,
given by a formula read off the network. Theorem 2.1 says *every* Boolean function can be computed by some circuit,
and Theorem 2.3 says NAND gates alone suffice. That is not a curiosity: chip makers like to build from one kind of
gate, and in the common CMOS technology a NAND gate needs only four transistors.

### Adding two bits

In binary, $0 + 0 = 0$, $0 + 1 = 1 + 0 = 1$, and $1 + 1 = 10$ (two, written "one-zero"). So adding two bits $a$ and
$b$ gives a **sum bit** $S$ and a **carry bit** $C$:

| $a$ | $b$ | $C$ | $S$ |
|:-:|:-:|:-:|:-:|
| 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 |
| 0 | 0 | 0 | 0 |

The columns are familiar: $S = a \oplus b$ and $C = a \wedge b$. The circuit is called a **half adder**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 180" role="img" aria-label="A half adder: inputs a and b both feed an XOR gate, whose output is the sum S, and an AND gate, whose output is the carry C">
  <g stroke="currentColor" stroke-width="1.5" fill="none">
    <line x1="40" y1="42" x2="180" y2="42"/>
    <line x1="90" y1="42" x2="90" y2="122"/>
    <line x1="90" y1="122" x2="180" y2="122"/>
    <line x1="40" y1="138" x2="180" y2="138"/>
    <line x1="120" y1="138" x2="120" y2="58"/>
    <line x1="120" y1="58" x2="180" y2="58"/>
    <line x1="260" y1="50" x2="330" y2="50"/>
    <line x1="260" y1="130" x2="330" y2="130"/>
  </g>
  <circle cx="90" cy="42" r="3" fill="currentColor"/>
  <circle cx="120" cy="138" r="3" fill="currentColor"/>
  <rect x="180" y="30" width="80" height="40" rx="6" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="180" y="110" width="80" height="40" rx="6" fill="#eea66f" stroke="currentColor"/>
  <g font-size="14" fill="currentColor" text-anchor="middle">
    <text x="25" y="47">a</text>
    <text x="25" y="143">b</text>
    <text x="220" y="55">XOR</text>
    <text x="220" y="135">AND</text>
  </g>
  <g font-size="13" fill="currentColor">
    <text x="336" y="55">S (sum)</text>
    <text x="336" y="135">C (carry)</text>
  </g>
</svg>
</div>

### Adding three bits, and whole numbers

To add longer numbers we add column by column, as at school, and each column must also add the carry from the column
to its right. So each column adds three bits $a$, $b$ and an incoming carry $c$, giving a sum bit and an outgoing
carry. The total $a + b + c$ is 0, 1, 2 or 3, so

- the sum bit $S$ is 1 when an odd number of $a, b, c$ are 1: $S = a \oplus b \oplus c$;
- the carry is 1 when at least two of them are 1: $C_{\text{out}} = M(a, b, c)$, the majority function of
  example 2.5, which can also be written $(a \wedge b) \vee (c \wedge (a \oplus b))$.

This circuit is a **full adder**. Chaining $n$ full adders, each passing its carry to the next, adds two $n$-bit
numbers; this is a **ripple-carry adder**.

**Worked example 2.8.** Add $1011$ (eleven) and $0110$ (six) with a ripple-carry adder. Columns from the right, with
incoming carry 0 at the start:

| column | $a$ | $b$ | carry in | $S$ | carry out |
|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 (rightmost) | 1 | 0 | 0 | 1 | 0 |
| 1 | 1 | 1 | 0 | 0 | 1 |
| 2 | 0 | 1 | 1 | 0 | 1 |
| 3 | 1 | 0 | 1 | 0 | 1 |

Reading the sum bits from column 3 down to 0, with the final carry in front, gives $10001$, which is
$16 + 1 = 17$. **Check:** $11 + 6 = 17$.

### Building it from NAND alone

By Theorem 2.3 a full adder can be built from NAND gates alone. A neat design uses 9. Write $\uparrow$ for NAND.

- $m_1 = a \uparrow b$, $\ m_2 = a \uparrow m_1$, $\ m_3 = b \uparrow m_1$, $\ x = m_2 \uparrow m_3$. Then
  $x = a \oplus b$ (four gates for XOR).
- $m_4 = x \uparrow c$, $\ m_5 = x \uparrow m_4$, $\ m_6 = c \uparrow m_4$, $\ S = m_5 \uparrow m_6$. Then
  $S = x \oplus c = a \oplus b \oplus c$.
- $C_{\text{out}} = m_1 \uparrow m_4$.

*Why the XOR works:* $m_2 = \neg(a \wedge \neg(a \wedge b))$, and $a \wedge \neg(a \wedge b) \equiv a \wedge (\neg a
\vee \neg b) \equiv a \wedge \neg b$, so $m_2 \equiv \neg(a \wedge \neg b)$. Likewise $m_3 \equiv \neg(b \wedge
\neg a)$. Then $x = \neg(m_2 \wedge m_3) \equiv (a \wedge \neg b) \vee (\neg a \wedge b)$, which is "exactly one",
that is, $a \oplus b$.

*Why the carry works:* $m_1 \uparrow m_4 = \neg(m_1 \wedge m_4) \equiv \neg m_1 \vee \neg m_4 \equiv (a \wedge b)
\vee (x \wedge c)$, which is the carry formula above.

**Try it in Python.** Check all 8 input rows of the 9-gate design.

```python
from itertools import product

nand = lambda a, b: 1 - (a & b)
for a, b, c in product([0, 1], repeat=3):
    m1 = nand(a, b); x = nand(nand(a, m1), nand(b, m1))
    m4 = nand(x, c); s = nand(nand(x, m4), nand(c, m4))
    carry = nand(m1, m4)
    assert 2 * carry + s == a + b + c
print("full adder correct")
```

The assertion checks the whole specification in one line: the two output bits, read as a binary number, equal
$a + b + c$.

Real processors add 64-bit numbers. The ripple-carry adder makes the last column wait for a carry to ripple through
all 64 columns, so chips use cleverer **carry-lookahead** adders that compute all the carries at once from formulas
like the ones in this section. Circuit size and speed are the subject of circuit complexity, which meets the P
versus NP question of [Chapter 16](16-Complexity.md).

## A short history thread

Boole's two books (1847, 1854) treated logic as algebra, but his "or" was the exclusive one, and his system had
quirks that W. S. Jevons and others removed in the following decades; the inclusive "or" and the laws of section 2.3
in their modern form owe much to Jevons, Peirce and Ernst Schröder. **Charles Sanders Peirce** noticed, in an
unpublished manuscript from about 1880, that a single connective (NOR) is enough for all of logic; the result was
published independently by **Henry M. Sheffer** in 1913, which is why the stroke bears his name. Truth-table
methods for deciding tautologies were set out by **Emil Post** and by **Ludwig Wittgenstein** in 1921; Post proved in
the same paper that every truth function is expressed by a formula, and in 1941 he classified all complete sets.
**Claude Shannon**'s 1937 thesis brought the subject into engineering. The question of how hard it is to decide
whether a formula is satisfiable was made precise by Stephen Cook in 1971 and by Leonid Levin independently, and it
is still open ([Chapter 16](16-Complexity.md)).

## Check yourself

??? question "1. Draw (in words) the tree of $\neg(p \vee q) \leftrightarrow (\neg p \wedge \neg q)$ and list its subformulas."

    The main connective is $\leftrightarrow$. Its left child is $\neg$, whose child is $\vee$ with leaves $p$ and
    $q$. Its right child is $\wedge$, with children $\neg$ (child $p$) and $\neg$ (child $q$). Subformulas: $p$, $q$,
    $p \vee q$, $\neg(p \vee q)$, $\neg p$, $\neg q$, $\neg p \wedge \neg q$, and the whole formula: 8 in all. (The
    formula is a tautology: it is De Morgan's law written as a biconditional.)

??? question "2. Classify each as tautology, contradiction or contingent: (a) $p \to (q \to p)$; (b) $(p \to q) \wedge p \wedge \neg q$; (c) $(p \to q) \to (q \to p)$; (d) $((p \to q) \to p) \to p$."

    (a) Tautology: to be false it needs $p$ T and $q \to p$ F, but $q \to p$ is T when $p$ is T.
    (b) Contradiction: $p$ and $p \to q$ force $q$ T, clashing with $\neg q$.
    (c) Contingent: true when $p$, $q$ are both T; false when $p$ F, $q$ T (then $p \to q$ is T and $q \to p$ is F).
    (d) Tautology (**Peirce's law**): to be false it needs $p$ F and $(p \to q) \to p$ T; with $p$ F, $p \to q$ is
    T, so $(p \to q) \to p$ is T $\to$ F, which is F. Contradiction, so no false row.

??? question "3. Which arguments are valid? (a) $p \vee q$, $p \to r$, $\neg r$, therefore $q$. (b) $p \to q$, $q \to r$, $r$, therefore $p$. (c) $p \to (q \vee r)$, $\neg q$, therefore $p \to r$."

    (a) Valid. From $p \to r$ and $\neg r$, modus tollens gives $\neg p$; with $p \vee q$, disjunctive syllogism gives
    $q$. (b) Invalid: $p$ F, $q$ F, $r$ T makes all premises true and the conclusion false (affirming the consequent
    in disguise). (c) Valid: a bad row needs $p$ T, $r$ F; then $q \vee r$ must be T, so $q$ is T, contradicting
    $\neg q$.

??? question "4. Use the laws to show $p \to (q \to r) \equiv q \to (p \to r)$."

    $p \to (q \to r) \equiv \neg p \vee (\neg q \vee r)$ (implication twice) $\equiv \neg q \vee (\neg p \vee r)$
    (associative and commutative laws) $\equiv q \to (p \to r)$ (implication twice). In words: the order of the
    hypotheses does not matter.

??? question "5. Simplify $(p \wedge q) \vee (\neg p \wedge q) \vee (p \wedge \neg q)$ to a formula with one connective."

    The first two clauses combine to $q$ (as in example 2.2, with the roles of $p$ and $q$ swapped):
    $(p \wedge q) \vee (\neg p \wedge q) \equiv (p \vee \neg p) \wedge q \equiv q$. Then
    $q \vee (p \wedge \neg q) \equiv (q \vee p) \wedge (q \vee \neg q) \equiv q \vee p$. The answer is $p \vee q$.
    *Check:* the original is true in the three rows TT, FT, TF and false in FF, which is the table of $p \vee q$.

??? question "6. Find a DNF and a CNF for the function that is T exactly when exactly one of $p, q, r$ is T."

    DNF from the three true rows: $(p \wedge \neg q \wedge \neg r) \vee (\neg p \wedge q \wedge \neg r) \vee
    (\neg p \wedge \neg q \wedge r)$. CNF: "exactly one" is "at least one" and "no two":
    $(p \vee q \vee r) \wedge (\neg p \vee \neg q) \wedge (\neg p \vee \neg r) \wedge (\neg q \vee \neg r)$. *Check:*
    at TTF the CNF clause $\neg p \vee \neg q$ fails; at FFF the first clause fails; at TFF every clause holds.

??? question "7. Show that $\{\neg, \to\}$ can express $\wedge$, and write $p \wedge q$ using only $\neg$ and $\to$."

    $p \wedge q \equiv \neg(\neg p \vee \neg q)$ by De Morgan, and $\neg p \vee \neg q \equiv p \to \neg q$ by the
    implication law. So $p \wedge q \equiv \neg(p \to \neg q)$. *Check:* $p \to \neg q$ is false only when $p$ and
    $q$ are both T, so its negation is true only then.

??? question "8. Write $p \to q$ using NAND alone."

    $p \to q \equiv \neg p \vee q \equiv \neg(p \wedge \neg q) = p \uparrow \neg q = p \uparrow (q \uparrow q)$.
    *Check:* $q \uparrow q$ is $\neg q$, and $p \uparrow \neg q$ is false only when $p$ is T and $\neg q$ is T, that
    is, $p$ T and $q$ F: the one false row of $p \to q$.

??? question "9. How many Boolean functions of 2 variables are there, and how many of them are monotone?"

    There are $2^{2^2} = 16$. Monotone ones: listing outputs for inputs FF, FT, TF, TT, the output may never go down
    when an input goes up. The monotone ones are: always F; always T; $p \wedge q$; $p \vee q$; $p$; $q$. That is 6.
    (Each is built from $\wedge$, $\vee$ and constants, which is no accident: monotone functions are exactly those.)

??? question "10. Prove that $\{\leftrightarrow, \neg\}$ is not complete."

    Write 1 for T and 0 for F. Then $\neg x = 1 + x$ and $x \leftrightarrow y = 1 + x + y$ (mod 2), both affine.
    Plugging affine functions into affine functions gives affine functions (sums of sums are sums), so every formula
    built from $\leftrightarrow$ and $\neg$ is affine. But $p \wedge q = pq$ is not affine: an affine
    $c_0 + c_1 p + c_2 q$ that is 0 at $(0,0)$, $(1,0)$ and $(0,1)$ must have $c_0 = c_1 = c_2 = 0$, and then it is
    0 at $(1,1)$ too, while $pq$ is 1 there.

??? question "11. Show that a binary connective that is complete on its own must have $f(\text{T}, \text{T}) = \text{F}$ and $f(\text{F}, \text{F}) = \text{T}$. Which two connectives are left?"

    If $f(\text{T}, \text{T}) = \text{T}$, every formula built from $f$ is true when all variables are true (the
    argument of Theorem 2.4), so $\neg p$ cannot be built. Similarly if $f(\text{F}, \text{F}) = \text{F}$, every
    formula is false when all variables are false, so $\neg p$ again cannot be built. That leaves the four
    connectives with outputs F on TT and T on FF; the outputs on TF and FT are free. They are: NAND (T, T); NOR (F,
    F); and $\neg p$ (T on FT, F on TF), $\neg q$ (the reverse). The last two depend on one input only, so formulas
    built from them depend on one variable and cannot express $p \wedge q$. Only NAND and NOR remain, and both are
    complete.

??? question "12. A 2-bit comparator outputs 1 when the 2-bit number $a_1 a_0$ is greater than $b_1 b_0$. Give a formula for it."

    $a_1 a_0 > b_1 b_0$ when the high bits decide it, or they tie and the low bits decide it:
    $(a_1 \wedge \neg b_1) \vee ((a_1 \leftrightarrow b_1) \wedge a_0 \wedge \neg b_0)$. *Check:* $10 > 01$ (2 > 1):
    first clause, true. $11 > 10$ (3 > 2): high bits tie, $a_0 = 1$, $b_0 = 0$: true. $01 > 01$: high bits tie,
    $a_0 \wedge \neg b_0$ is F: false, correct since $1 = 1$. A Python loop over all 16 pairs confirms it.

## What you learned

- Formulas are built by recursive rules; each has a unique tree, and properties of all formulas are proved by
  structural induction.
- A tautology is true in every row; $A \equiv B$ means they always agree, which is the same as
  $A \leftrightarrow B$ being a tautology; an argument is valid when no row makes the premises true and the
  conclusion false.
- The laws of logic (De Morgan, distributive, contrapositive and the rest) are proved by truth tables and used, with
  substitution and replacement, as an algebra.
- Every Boolean function has a DNF and a CNF formula (minterms and maxterms), though parity needs $2^{n-1}$ clauses
  in DNF.
- $\{\neg, \wedge\}$, $\{\neg, \vee\}$, $\{\uparrow\}$ and $\{\downarrow\}$ are complete; $\{\wedge, \vee\}$ is not;
  Post's theorem gives the exact test.
- Gates compute Boolean functions; a full adder computes $a \oplus b \oplus c$ and the majority carry, and nine NAND
  gates suffice.

**Next:** [Chapter 3](03-Quantifiers.md) adds the words "for all" and "there exists", which let logic talk about the
objects inside statements, and shows how their order changes the meaning of the definitions of calculus.

## Further reading

- Herbert B. Enderton, *A Mathematical Introduction to Logic*, 2nd edition, 2001. Chapter 1 proves unique
  readability, the normal form theorem and Post's results carefully.
- Daniel J. Velleman, *How to Prove It: A Structured Approach*, 3rd edition, 2019, chapter 1.
- Emil L. Post, "Introduction to a General Theory of Elementary Propositions", *American Journal of Mathematics* 43,
  1921, and *The Two-Valued Iterative Systems of Mathematical Logic*, 1941.
- H. M. Sheffer, "A Set of Five Independent Postulates for Boolean Algebras, with Application to Logical
  Constants", *Transactions of the American Mathematical Society* 14, 1913.
- Claude E. Shannon, "A Symbolic Analysis of Relay and Switching Circuits", *Transactions of the American Institute
  of Electrical Engineers* 57, 1938.
- Charles Petzold, *Code: The Hidden Language of Computer Hardware and Software*, 2nd edition, 2022. Builds an adder,
  and then a computer, from switches.
- Donald E. Knuth, *The Art of Computer Programming*, volume 4A, 2011, section 7.1 ("Zeros and ones"). Boolean
  functions in depth.
- On this site: the Topics lessons [Logic gates](../../topics/logic/level-6/01-logic-gates.md),
  [Boolean algebra](../../topics/logic/level-6/02-boolean-algebra.md) and
  [Fallacies](../../topics/logic/level-5/06-fallacies.md); the U of T guide
  [MAT137 Unit 1: Logic, Sets & Proofs](../../uoft/MAT137/unit01.md).
