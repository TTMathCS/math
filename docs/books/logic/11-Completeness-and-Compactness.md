# 11. Completeness and compactness

*In [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md) proof and truth matched exactly, for propositional logic.
First-order logic is far richer: its formulas talk about infinite structures, and there is no truth table to fall back
on. Do the proof rules still derive every logical consequence? Kurt Gödel answered yes in 1929, in his doctoral
thesis. In this chapter you will state his completeness theorem precisely, follow Leon Henkin's proof of it step by
step, and then use its consequences: the compactness theorem, numbers larger than every natural number,
infinitesimals that make Leibniz's calculus rigorous, and the strange fact that set theory, which proves that
uncountable sets exist, has a countable model.*

!!! abstract "In this chapter"
    **You will learn:**

    - Gödel's completeness theorem in its two forms, and a Hilbert-style proof system for first-order logic
    - Henkin's proof: witnesses, maximal consistent sets, and a model built out of the language itself
    - the compactness theorem, and how to use it to transfer facts between fields of different characteristic
    - nonstandard models of arithmetic, and what their order looks like
    - Abraham Robinson's infinitesimals and the derivative as a standard part
    - the Löwenheim-Skolem theorems, and Skolem's paradox, honestly explained

    **You need:** [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md) (the Hilbert system, the deduction theorem,
    Lindenbaum's lemma and the propositional completeness proof, which this chapter repeats one level up) and
    [Chapter 10](10-First-Order-Logic.md) (languages, structures, satisfaction, substitution). Cardinalities from
    [Chapter 7](07-Infinity-and-Cardinality.md) are used in 11.5.

    **Levels:** 11.1 and 11.3 are advanced; 11.2, 11.4 and 11.5 are advanced to expert.

## 11.1 Gödel's completeness theorem

*Level: advanced.*

Here is the question, in the notation of [Chapter 10](10-First-Order-Logic.md). Logical consequence
$\Gamma \models \varphi$ means: $\varphi$ is true in *every* structure in which $\Gamma$ is true. There are infinitely
many structures, of every size, so checking them all is impossible. Derivability $\Gamma \vdash \varphi$ means: there
is a finite derivation, which a computer can check. If these always agree, then the infinite, semantic notion has a
finite, mechanical counterpart. That is a strong claim, and not an obvious one.

### A proof system

We fix a Hilbert-style system, in the style of Enderton's textbook. It has one rule and six kinds of axioms. A
**generalisation** of a formula $\varphi$ is any formula $\forall x_1 \dots \forall x_n \, \varphi$ (with $n \ge 0$).

**Logical axioms:** all generalisations of formulas of the following forms, for any formulas $\varphi, \psi$, variables
$x, y$ and terms $t$:

1. **(Q1)** every instance of a propositional tautology (replace the letters of a tautology by first-order formulas);
2. **(Q2)** $\forall x\, \varphi \to \varphi[t/x]$, where $t$ is substitutable for $x$ in $\varphi$;
3. **(Q3)** $\forall x\, (\varphi \to \psi) \to (\forall x\, \varphi \to \forall x\, \psi)$;
4. **(Q4)** $\varphi \to \forall x\, \varphi$, where $x$ does not occur free in $\varphi$;
5. **(Q5)** $x = x$;
6. **(Q6)** $x = y \to (\alpha \to \alpha')$, where $\alpha$ is atomic and $\alpha'$ comes from $\alpha$ by replacing
   some occurrences of $x$ by $y$.

**Rule:** modus ponens. A **derivation** of $\varphi$ from $\Gamma$ is a finite list of formulas ending in $\varphi$,
each a logical axiom, a member of $\Gamma$, or obtained by MP from earlier lines, exactly as in
[Chapter 9](09-Proof-Systems-for-Propositional-Logic.md). We write $\Gamma \vdash \varphi$.

(Q1) lets us use any propositional reasoning in one step. That is not cheating: by the completeness theorem of
Chapter 9 every tautology has a derivation from three axioms, and the set of tautologies is decidable by truth tables,
so a checker can still recognise axioms mechanically. (Q2) is "what holds for all holds for each". (Q3) and (Q4) let
quantifiers move through implications. (Q5) and (Q6) are the laws of equality.

The axioms are all valid (true in every structure under every assignment) and MP preserves truth, so by induction on
derivations, exactly as in 9.4:

**Theorem (soundness).** If $\Gamma \vdash \varphi$ then $\Gamma \models \varphi$.

The only case needing care is (Q2), and it uses the **substitution lemma**: if $t$ is substitutable for $x$ in
$\varphi$, then $\mathcal{M} \models \varphi[t/x][s]$ iff $\mathcal{M} \models \varphi[s(x \mapsto t^{\mathcal{M}}[s])]$.
This is proved by induction on $\varphi$, and the substitutability condition is exactly what the $\forall$ step needs;
Example 3 of [Chapter 10](10-First-Order-Logic.md) shows it fails without it.

### Three tools

These are proved like their propositional versions; we state them and sketch why.

**Deduction theorem.** If $\Gamma \cup \{\varphi\} \vdash \psi$ then $\Gamma \vdash \varphi \to \psi$. (Same proof as in
9.3: the instances of (A1) and (A2) needed there are tautology instances, so they are axioms here.)

**Generalisation theorem.** If $\Gamma \vdash \varphi$ and $x$ does not occur free in any formula of $\Gamma$, then
$\Gamma \vdash \forall x\, \varphi$.

*Proof sketch.* By induction on the derivation, show $\Gamma \vdash \forall x\, \psi$ for each line $\psi$. If $\psi$ is
an axiom, so is $\forall x\, \psi$ (axioms include all their generalisations). If $\psi \in \Gamma$, then $x$ is not
free in $\psi$, so (Q4) gives $\psi \to \forall x\, \psi$, and MP. If $\psi$ came by MP from $\chi$ and $\chi \to \psi$,
then by induction we have $\forall x\, \chi$ and $\forall x\, (\chi \to \psi)$, and (Q3) with MP twice gives
$\forall x\, \psi$. $\square$

This is the formal version of "since $x$ was arbitrary": the condition on $\Gamma$ says no assumption was made about
$x$.

**Generalisation on constants.** Suppose $\Gamma \vdash \varphi(c)$, where $c$ is a constant symbol that does not occur
in $\Gamma$ or in the formula $\varphi(x)$. Then $\Gamma \vdash \forall x\, \varphi(x)$.

*Proof sketch.* Take a derivation of $\varphi(c)$ from $\Gamma$ and replace $c$ everywhere by a variable $y$ that occurs
nowhere in the derivation. Axioms become axioms, members of $\Gamma$ are unchanged ($c$ was not in them) and MP steps
remain MP steps, so we get $\Gamma \vdash \varphi(y)$, with $y$ not free in $\Gamma$. The generalisation theorem gives
$\Gamma \vdash \forall y\, \varphi(y)$, and from that (Q2) and the generalisation theorem again give
$\Gamma \vdash \forall x\, \varphi(x)$. $\square$

A constant that appears in no assumption is as good as an arbitrary element. This little fact is the engine of
Henkin's proof.

Finally, as in 9.3, call $\Gamma$ **inconsistent** if it derives some $\varphi$ and $\neg\varphi$ (equivalently, it
derives everything), and **consistent** otherwise. The proof-by-contradiction lemma holds again: if
$\Gamma \cup \{\neg\varphi\}$ is inconsistent then $\Gamma \vdash \varphi$; if $\Gamma \cup \{\varphi\}$ is inconsistent
then $\Gamma \vdash \neg\varphi$. (Both now follow from the deduction theorem and tautology instances.)

### The theorem

**Theorem (Gödel's completeness theorem).** For every set $\Gamma$ of formulas and every formula $\varphi$:
if $\Gamma \models \varphi$ then $\Gamma \vdash \varphi$.

**Equivalent form (model existence).** Every consistent set of sentences has a model.

The equivalence is the same short argument as in 9.5, and it is worth repeating. If model existence holds and
$\Gamma \nvdash \sigma$ (for sentences), then $\Gamma \cup \{\neg\sigma\}$ is consistent, so it has a model, and that
model shows $\Gamma \not\models \sigma$. (Formulas with free variables reduce to sentences by replacing the free
variables with new constants.) Conversely, if $\Gamma$ is consistent but had no model, then vacuously
$\Gamma \models \neg(x = x)$, so by completeness $\Gamma \vdash \neg(x = x)$, and also $\Gamma \vdash x = x$ by (Q5):
inconsistent.

Read the model existence form slowly. It says that **consistency is enough for existence**: if a set of axioms does not
lead to a contradiction, there is a mathematical structure in which they all hold. Hilbert had argued for something
like this in his correspondence with Frege around 1900; Gödel proved it, for first-order logic.

Keep in mind what "complete" means here, because the word comes back in
[Chapter 18](18-Godels-Incompleteness-Theorems.md) with a different meaning. Here it is the *proof system* that is
complete: it derives every logical consequence of any set of axioms. Gödel's *incompleteness* theorems are about
*theories*, such as arithmetic, failing to decide some sentences. Both are true, and they do not conflict: Peano
arithmetic leaves some sentence $\sigma$ undecided precisely because $\sigma$ is true in some models of it and false in
others.

## 11.2 Henkin's proof

*Level: advanced to expert.*

Gödel's original proof went through normal forms and reduced the problem, carefully, to propositional logic. In 1949
Leon Henkin published a different proof, which is the one taught today, because it generalises to many other logics.
Its idea is bold: **build the model out of the language itself.** The elements of the model will be the closed terms
(terms without variables), and a sentence will be true in it exactly when the consistent set says so.

We prove model existence for a **countable** language $L$ (countably many symbols); the general case is at the end.
Let $\Gamma$ be a consistent set of $L$-sentences.

### The problem that witnesses solve

Copy the propositional proof naively. Extend $\Gamma$ to a maximal consistent set $\Delta$ of sentences, take the
closed terms as the domain, and declare an atomic sentence true when it is in $\Delta$. Then hope that every sentence
is true exactly when it is in $\Delta$.

This fails at the quantifiers. Suppose the only constants are $c_0, c_1, c_2, \dots$, and

$$
\Gamma = \{ \neg\forall x\, P(x) \} \cup \{ P(c_n) : n \in \mathbb{N} \}.
$$

$\Gamma$ is consistent: it has a model with domain $\mathbb{N} \cup \{\infty\}$, $c_n = n$, and $P$ true of the natural
numbers only. But in a model built from closed terms, every element is some $c_n$, so $P$ holds of everything and
$\neg\forall x\, P(x)$ is false. The set $\Gamma$ says "something is not $P$" but never names it.

Henkin's cure: make sure that whenever $\Delta$ says "not everything is $\varphi$", it also names a **witness**, a
constant $c$ with $\neg\varphi(c) \in \Delta$.

### Step 1: add witnesses

Add to $L$ countably many new constant symbols $d_0, d_1, d_2, \dots$; call the bigger language $L^+$. It is still
countable, so we can list all pairs $(\varphi_n(x), x_n)$ in which $\varphi_n$ is an $L^+$-formula with at most the
variable $x_n$ free: $(\varphi_0, x_0), (\varphi_1, x_1), \dots$.

For each $n$, pick a new constant $c_n$ from the list $d_0, d_1, \dots$: the first one that does not occur in
$\varphi_0, \dots, \varphi_n$ or in the earlier $\theta_0, \dots, \theta_{n-1}$ (only finitely many constants have been
used, so there is always one). Let $\theta_n$ be the **Henkin axiom**

$$
\theta_n \;:=\; \neg\forall x_n\, \varphi_n \;\to\; \neg\varphi_n(c_n).
$$

It says: "if not everything satisfies $\varphi_n$, then $c_n$ is a counterexample". Let $\Theta = \{\theta_0,
\theta_1, \dots\}$.

**Lemma 1.** $\Gamma \cup \Theta$ is consistent.

*Proof.* A derivation of a contradiction uses finitely many hypotheses, so it is enough to show that
$\Gamma \cup \{\theta_0, \dots, \theta_n\}$ is consistent for every $n$. Induction on $n$; the case "no $\theta$ yet" is
the consistency of $\Gamma$ (adding new symbols to the language changes nothing, because a derivation of a
contradiction in $L^+$ could be turned into one in $L$ by replacing new constants with unused variables).

Suppose $\Gamma' = \Gamma \cup \{\theta_0, \dots, \theta_{n-1}\}$ is consistent but $\Gamma' \cup \{\theta_n\}$ is not.
By proof by contradiction, $\Gamma' \vdash \neg\theta_n$. Now $\neg(A \to B)$ tautologically implies both $A$ and
$\neg B$, so

$$
\Gamma' \vdash \neg\forall x_n\, \varphi_n \qquad \text{and} \qquad \Gamma' \vdash \varphi_n(c_n)
$$

(the second because $\neg\neg\varphi_n(c_n)$ implies $\varphi_n(c_n)$). The constant $c_n$ was chosen to occur nowhere
in $\Gamma'$ or $\varphi_n$, so generalisation on constants turns the second into $\Gamma' \vdash \forall x_n\,
\varphi_n$. Together with the first, $\Gamma'$ is inconsistent, a contradiction. $\square$

### Step 2: extend to a maximal consistent set

Exactly as in Lindenbaum's lemma (9.5): list all $L^+$-sentences $\sigma_0, \sigma_1, \dots$, start with
$\Gamma \cup \Theta$, and at stage $k$ add $\sigma_k$ if that keeps consistency, otherwise $\neg\sigma_k$. The union
$\Delta$ is consistent, contains $\Gamma \cup \Theta$, and for every sentence $\sigma$ contains exactly one of $\sigma$,
$\neg\sigma$. As before:

- $\Delta$ is **deductively closed**: if $\Delta \vdash \sigma$ then $\sigma \in \Delta$;
- $\neg\sigma \in \Delta$ iff $\sigma \notin \Delta$;
- $(\sigma \to \tau) \in \Delta$ iff $\sigma \notin \Delta$ or $\tau \in \Delta$.

And from the Henkin axioms, one new property:

- **witness property:** if $\forall x\, \varphi \notin \Delta$, then $\neg\varphi(c) \in \Delta$ for some constant
  $c$. (The pair $(\varphi, x)$ is some $(\varphi_n, x_n)$; $\neg\forall x\, \varphi \in \Delta$ and
  $\theta_n \in \Delta$, so by MP and closure, $\neg\varphi(c_n) \in \Delta$.)

### Step 3: build the term model

Let $T$ be the set of **closed terms** of $L^+$. It is not empty, because there are constants. Define, for closed terms,

$$
t \sim u \quad\Longleftrightarrow\quad (t = u) \in \Delta .
$$

By the equality axioms (Q5) and (Q6), together with (Q2) to instantiate them at closed terms, $\Delta$ derives
$t = t$, derives $u = t$ from $t = u$, and derives $t = w$ from $t = u$ and $u = w$. For instance, symmetry: the axiom
$x = y \to (x = x \to y = x)$ is an instance of (Q6) (replace the first $x$ of the atomic formula $x = x$ by $y$);
instantiate $x := t$, $y := u$ and use $t = t$. So $\sim$ is an equivalence relation. In the same way (Q6) shows it is a
**congruence**: if $t_i \sim u_i$ for each $i$, then $f(t_1, \dots, t_n) \sim f(u_1, \dots, u_n)$, and
$R(t_1, \dots, t_n) \in \Delta$ iff $R(u_1, \dots, u_n) \in \Delta$.

Write $[t]$ for the class of $t$. The **term model** $\mathcal{A}$ has

- domain $A = \{[t] : t \in T\}$;
- $c^{\mathcal{A}} = [c]$ for each constant;
- $f^{\mathcal{A}}([t_1], \dots, [t_n]) = [f(t_1, \dots, t_n)]$;
- $([t_1], \dots, [t_n]) \in R^{\mathcal{A}}$ iff $R(t_1, \dots, t_n) \in \Delta$.

Because $\sim$ is a congruence, these do not depend on which representatives we pick. A short induction on terms shows
that each closed term names its own class: $t^{\mathcal{A}} = [t]$.

### Step 4: the truth lemma

**Lemma 2.** For every $L^+$-sentence $\sigma$: $\mathcal{A} \models \sigma$ iff $\sigma \in \Delta$.

*Proof.* By induction on the number of occurrences of $\neg$, $\to$ and $\forall$ in $\sigma$. (We count symbols, not
subformulas, because the quantifier step uses instances $\varphi(t)$, which are not subformulas but have the same count.)

*Atomic.* $\mathcal{A} \models t = u$ iff $[t] = [u]$ iff $(t = u) \in \Delta$. And
$\mathcal{A} \models R(t_1, \dots, t_n)$ iff $([t_1], \dots, [t_n]) \in R^{\mathcal{A}}$ iff
$R(t_1, \dots, t_n) \in \Delta$.

*$\neg$ and $\to$.* Exactly as in Lemma F of 9.5, using the two properties of $\Delta$ that copy the truth tables.

*$\forall$.* Let $\sigma = \forall x\, \varphi$, with at most $x$ free in $\varphi$.

- Suppose $\forall x\, \varphi \in \Delta$. For each closed term $t$, (Q2) gives $\Delta \vdash \varphi(t)$ (closed terms
  are always substitutable), so $\varphi(t) \in \Delta$, and by the induction hypothesis $\mathcal{A} \models
  \varphi(t)$. Every element of $A$ is $[t] = t^{\mathcal{A}}$ for some $t$, so by the substitution lemma $\varphi$
  holds of every element: $\mathcal{A} \models \forall x\, \varphi$.
- Suppose $\forall x\, \varphi \notin \Delta$. By the witness property, $\neg\varphi(c) \in \Delta$ for some $c$, so
  $\varphi(c) \notin \Delta$, so by the induction hypothesis $\mathcal{A} \not\models \varphi(c)$. The element $[c]$ is a
  counterexample, and $\mathcal{A} \not\models \forall x\, \varphi$. $\square$

### Step 5: forget the extra constants

Every member of $\Gamma$ is in $\Delta$, so it is true in $\mathcal{A}$. The members of $\Gamma$ are $L$-sentences, and
their truth does not depend on how the new constants are interpreted. So the **reduct** of $\mathcal{A}$ to $L$ (the
same domain and the same interpretations of $L$'s symbols, ignoring the $d_i$) is a model of $\Gamma$. This proves
model existence, and with it the completeness theorem. $\blacksquare$

### What the proof gives for free

The domain $A$ is a set of classes of closed terms of a countable language, so **it is countable** (finite or countably
infinite). We have proved more than we set out to:

**Corollary.** Every consistent set of sentences in a countable language has a model that is finite or countable.

That is a form of the downward Löwenheim-Skolem theorem (11.5).

**Uncountable languages.** If $L$ has $\kappa$ symbols for an infinite cardinal $\kappa$, the same proof works with
$\kappa$ new constants, lists indexed by ordinals below $\kappa$ ([Chapter 8](08-Axiomatic-Set-Theory.md)) in place of
$\mathbb{N}$, and Zorn's lemma in place of the step-by-step Lindenbaum construction. The model then has at most
$\kappa$ elements.

The full details, including the careful handling of substitution and alphabetic variants we skipped, take about ten
pages in Enderton (section 2.5) and are worth reading once.

## 11.3 The compactness theorem

*Level: advanced.*

**Theorem (compactness).** A set $\Gamma$ of sentences has a model if and only if every finite subset of $\Gamma$ has a
model.

*Proof.* If $\Gamma$ has no model, then by completeness (model existence) it is inconsistent. A derivation of a
contradiction uses only finitely many members of $\Gamma$, so a finite $\Gamma_0 \subseteq \Gamma$ is inconsistent, and
by soundness $\Gamma_0$ has no model. $\square$

**Corollary.** If $\Gamma \models \sigma$, then $\Gamma_0 \models \sigma$ for some finite $\Gamma_0 \subseteq \Gamma$.

Gödel included compactness for countable languages in his 1930 paper; Anatoly Maltsev proved it for arbitrary languages
in 1936. Compactness can also be proved without any proof system, using ultraproducts
([Chapter 12](12-Model-Theory.md)), which shows it is really a fact about structures.

[Chapter 10](10-First-Order-Logic.md) already used compactness to show that finiteness, connectedness and well-ordering
cannot be expressed. Here are two positive uses.

### Transfer between characteristics

Fields of characteristic 0 (like $\mathbb{Q}$, $\mathbb{R}$, $\mathbb{C}$) and fields of prime characteristic $p$ (like
$\mathbb{Z}/p\mathbb{Z}$) behave differently. Compactness says that for any *single* first-order statement, large
primes cannot tell the difference.

**Theorem.** Let $\sigma$ be a sentence in the language of rings that is true in every field of characteristic 0. Then
there is a number $N$ such that $\sigma$ is true in every field of characteristic $p$, for every prime $p > N$.

*Proof.* Let $F$ be the field axioms, and $\chi_p$ the sentence $\neg(\underline{p} = 0)$. The models of
$F \cup \{\chi_p : p \text{ prime}\}$ are exactly the fields of characteristic 0, so this set entails $\sigma$. By the
corollary above, a finite part entails $\sigma$: $F \cup \{\chi_{p_1}, \dots, \chi_{p_k}\} \models \sigma$ (we may add
all of $F$, which is finite). Let $N = \max(p_1, \dots, p_k)$. A field of characteristic $p > N$ satisfies $F$ and each
$\chi_{p_i}$ (since $p_i \ne p$, $\underline{p_i} \neq 0$ there), so it satisfies $\sigma$. $\square$

**Example.** "$x^2 + 1$ has no repeated root" is the sentence $\neg\exists x\, (x \cdot x + 1 = 0 \land x + x = 0)$ (a
repeated root is a common root of the polynomial and its derivative $2x$). It is true in characteristic 0: $2x = 0$
forces $x = 0$, and then $x^2 + 1 = 1 \ne 0$;
the theorem promises it is true in characteristic $p$ for all large $p$. Indeed it fails only for $p = 2$, where
$x^2 + 1 = (x + 1)^2$. Check: $(x+1)^2 = x^2 + 2x + 1 = x^2 + 1$ when $2 = 0$.

**Corollary.** The class of fields of characteristic 0 cannot be axiomatised by finitely many sentences. (If a single
sentence $\sigma$, the conjunction, did it, then $\sigma$ would be true in some field of prime characteristic.)

In [Chapter 12](12-Model-Theory.md) this transfer principle, combined with completeness of the theory of algebraically
closed fields, proves a real theorem about polynomials over $\mathbb{C}$ by counting in finite fields.

### Linear orders from partial orders

**Theorem (order extension).** Every partial order on a set $X$ can be extended to a linear order.

For finite $X$ this is "topological sorting": repeatedly list an element with nothing below it. Compactness lifts it to
any $X$: you will do it in exercise 9. Many "finite to infinite" theorems of combinatorics go the same way, including the
de Bruijn-Erdős colouring theorem of [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md).

## 11.4 Nonstandard models and infinitesimals

*Level: advanced to expert.*

### Numbers beyond all numbers

Let $\mathrm{Th}(\mathcal{N})$, **true arithmetic**, be the set of *all* sentences in the language
$\{0, S, +, \cdot, <\}$ that are true in the standard model $\mathcal{N} = (\mathbb{N}, 0, S, +, \cdot, <)$. It contains
every theorem of number theory that can be stated in first-order form, proved or not yet proved. Surely it pins
$\mathbb{N}$ down?

It does not. Add a new constant $c$ and consider

$$
\Sigma \;=\; \mathrm{Th}(\mathcal{N}) \;\cup\; \{ \underline{n} < c : n \in \mathbb{N} \}.
$$

A finite subset of $\Sigma$ mentions only $\underline{n} < c$ for $n \le N$. The standard model, with $c$ interpreted
as $N + 1$, satisfies it. By compactness $\Sigma$ has a model $\mathcal{M}$. It is a model of every true sentence of
arithmetic, yet it contains an element $c$ that is larger than $0, 1, 2, \dots$, every standard number. Such a model is
**nonstandard**, and elements like $c$ are **nonstandard** (or "infinite") numbers. Thoralf Skolem first built
nonstandard models of arithmetic in 1933-34, by a direct construction, before compactness was a standard tool.

What does $\mathcal{M}$ look like? It satisfies every true sentence, and that alone forces a great deal.

1. **The standard numbers sit at the bottom.** Write $\bar n$ for the element named by $\underline{n}$ in $\mathcal{M}$.
   For each $n$, the true sentence $\forall x\, (x < \underline{n} \to x = \underline{0} \lor \dots \lor x =
   \underline{n-1})$ holds in $\mathcal{M}$. So nothing nonstandard is below a standard number: the elements
   $\bar 0 < \bar 1 < \bar 2 < \dots$ form an initial segment, a copy of $\mathbb{N}$, and every other element is above
   all of them. Sentences like $\underline{2} + \underline{3} = \underline{5}$ show this copy has the right arithmetic.
2. **Every nonstandard number has neighbours.** The sentence $\forall x\, (\neg(x = 0) \to \exists y\, S(y) = x)$ gives
   $c$ a predecessor $c - 1$, which is again nonstandard (if $c - 1 = \bar n$ then $c = \overline{n+1}$). Going up and
   down by 1 from $c$ gives a copy of $\mathbb{Z}$: $\dots, c - 2, c - 1, c, c + 1, c + 2, \dots$. Call this the
   **block** of $c$: the elements at a standard distance from $c$.
3. **There is no largest block.** $c + c$ is in a higher block, because $(c + c) - c = c$ is not standard.
4. **There is no smallest nonstandard block.** Every number is even or odd (a true sentence:
   $\forall x\, \exists y\, (x = y + y \lor x = S(y + y))$), so there is $h$ with $c = 2h$ or $c = 2h + 1$. Then $h$ is
   nonstandard (twice a standard number is standard), and $c - h \ge h$ is nonstandard too, so $h$ is in a lower block.
5. **Between any two blocks there is another.** If $a < b$ are in different blocks, the "average" $h$ with
   $a + b = 2h$ or $2h + 1$ lies strictly between them, at a nonstandard distance from both.

So the blocks are ordered densely, with no first and no last block. If $\mathcal{M}$ is countable, there are countably
many blocks, and by Cantor's theorem in [Chapter 12](12-Model-Theory.md) (every countable dense linear order without
endpoints is isomorphic to $\mathbb{Q}$) the blocks are ordered like the rationals. So **every countable nonstandard
model of true arithmetic is ordered like $\mathbb{N}$ followed by $\mathbb{Q}$ copies of $\mathbb{Z}$.**

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 560 120" role="img" aria-label="The order of a countable nonstandard model of arithmetic: a copy of the natural numbers on the left, then infinitely many copies of the integers, arranged densely like the rational numbers, with no first or last copy.">
  <line x1="20" y1="60" x2="160" y2="60" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="20" cy="60" r="4" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="45" cy="60" r="4" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="70" cy="60" r="4" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="95" cy="60" r="4" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="64" font-size="14" text-anchor="middle" fill="currentColor">…</text>
  <text x="80" y="35" font-size="12" text-anchor="middle" fill="currentColor">standard: 0, 1, 2, …</text>
  <line x1="200" y1="60" x2="280" y2="60" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="220" cy="60" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="240" cy="60" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="260" cy="60" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <line x1="320" y1="60" x2="400" y2="60" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="340" cy="60" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="360" cy="60" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="380" cy="60" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <line x1="440" y1="60" x2="520" y2="60" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="460" cy="60" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="480" cy="60" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="500" cy="60" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="300" y="64" font-size="14" text-anchor="middle" fill="currentColor">…</text>
  <text x="420" y="64" font-size="14" text-anchor="middle" fill="currentColor">…</text>
  <text x="540" y="64" font-size="14" text-anchor="middle" fill="currentColor">…</text>
  <text x="180" y="64" font-size="14" text-anchor="middle" fill="currentColor">…</text>
  <text x="360" y="35" font-size="12" text-anchor="middle" fill="currentColor">nonstandard blocks, each a copy of ℤ, ordered like ℚ</text>
  <text x="360" y="95" font-size="12" text-anchor="middle" fill="#9cc9ea">c − 1, c, c + 1</text>
</svg>
</div>

**The standard part is not definable.** Could some formula $\varphi(x)$ be true in $\mathcal{M}$ exactly of the
standard numbers? No. True arithmetic contains every instance of the least number principle, "if some $x$ satisfies
$\psi(x)$, there is a least such $x$", one sentence for each formula $\psi$. Apply it with $\psi = \neg\varphi$: the
nonstandard numbers would have a least element $d$, but $d - 1$ is also nonstandard. So "standard" is a property you
can see from outside $\mathcal{M}$ but not express inside it. Model theorists exploit this in an argument called
**overspill**: if a formula holds for every standard number, it must also hold for some nonstandard one.

How explicit can a nonstandard model be? Stanley Tennenbaum proved in 1959 that no countable nonstandard model of Peano
arithmetic ([Chapter 17](17-Arithmetic-and-Peano.md)) has a computable addition or multiplication. So these models
exist, but nobody can write one down with algorithms the way we write down $\mathbb{N}$.

### Infinitesimals, made honest

Leibniz and Newton computed with "infinitely small" quantities, and for 150 years mathematicians argued about whether
they made sense. Cauchy and Weierstrass replaced them with limits and $\varepsilon$-$\delta$
([Calculus, Chapter 2](../calculus/02-Limits.md)). In 1961 Abraham Robinson showed that compactness brings them back,
rigorously.

Take a language with a constant symbol for every real number, a function symbol for every function
$f : \mathbb{R}^n \to \mathbb{R}$, and a relation symbol for every relation on $\mathbb{R}$; let $\mathrm{Th}(\mathbb{R})$
be the set of all its sentences true in $\mathbb{R}$. Add a constant $\varepsilon$ and

$$
\Sigma \;=\; \mathrm{Th}(\mathbb{R}) \;\cup\; \{ 0 < \varepsilon \} \;\cup\; \{ \varepsilon < \underline{r} : r \text{ a positive real} \}.
$$

Each finite subset is satisfied in $\mathbb{R}$ by taking $\varepsilon$ smaller than the finitely many $r$ mentioned.
By compactness there is a model ${}^*\mathbb{R}$, the **hyperreals**. It contains a copy of $\mathbb{R}$ and an element
$\varepsilon$ with $0 < \varepsilon < r$ for every positive real $r$: a positive **infinitesimal**. Then
$1/\varepsilon$ is larger than every real: an infinite hyperreal.

Two principles make ${}^*\mathbb{R}$ useful.

- **Transfer.** ${}^*\mathbb{R}$ satisfies exactly the same sentences (of the big language) as $\mathbb{R}$. So it is an
  ordered field, every function like $\sin$ has a hyperreal extension satisfying the same identities, and so on.
- **Standard part.** Every hyperreal $x$ that is *finite* (between two reals) is infinitely close to exactly one real,
  called its **standard part** $\mathrm{st}(x)$. *Proof:* let $a = \sup\{ r \in \mathbb{R} : r < x \}$, which exists
  by the completeness of $\mathbb{R}$. For any real $\delta > 0$, $a - \delta < x$ (otherwise $a - \delta$ would be a
  smaller upper bound) and $x \le a + \delta$ (otherwise $a + \delta$ would be in the set). So $x - a$ is smaller in size
  than every positive real: infinitesimal. Two reals infinitely close to each other are equal, so $a$ is unique. $\square$

Now calculus reads as Leibniz wrote it. For a differentiable $f$, its derivative at a real $a$ is

$$
f'(a) \;=\; \mathrm{st}\!\left( \frac{f(a + \varepsilon) - f(a)}{\varepsilon} \right)
$$

for any nonzero infinitesimal $\varepsilon$; this is a theorem, equivalent by transfer to the usual limit definition.

**Example.** $f(x) = x^2$. Then

$$
\frac{(a + \varepsilon)^2 - a^2}{\varepsilon} = \frac{2a\varepsilon + \varepsilon^2}{\varepsilon} = 2a + \varepsilon,
$$

whose standard part is $2a$. No limits, and no worry about dividing by zero: $\varepsilon$ is a nonzero hyperreal.
Likewise $f$ is continuous at $a$ iff $f(x)$ is infinitely close to $f(a)$ whenever $x$ is infinitely close to $a$.

Honest remarks. Nonstandard analysis proves no theorem about $\mathbb{R}$ that cannot be proved with limits; its
statements about real numbers are conservative over ordinary analysis. What it changes is the *proofs*, which are often
shorter and closer to intuition. It has produced research results: in 1966 Allen Bernstein and Robinson used it to
settle a case of the invariant subspace problem (Paul Halmos soon gave a standard proof). H. Jerome Keisler wrote a
first-year calculus textbook (1976) on infinitesimals. And the hyperreals depend on choices (compactness for uncountable
languages, or an ultrafilter as in [Chapter 12](12-Model-Theory.md)), so no one can exhibit a specific infinitesimal
the way one exhibits $\pi$.

## 11.5 The Löwenheim-Skolem theorems and Skolem's paradox

*Level: advanced to expert.*

### Down and up

**Theorem (downward Löwenheim-Skolem).** If a set of sentences in a countable language has an infinite model, it has a
countable model.

*Proof.* Let $\Gamma$ be the set, and add the sentences $\lambda_k$ ("at least $k$ elements") for every $k$. The
bigger set is true in the given infinite model, so it is consistent (soundness). The Henkin model of 11.2 for it is
finite or countable, and it satisfies every $\lambda_k$, so it is infinite: a countable model of $\Gamma$. $\square$

A stronger form, due to Skolem, starts from a model $\mathcal{M}$ and finds a countable **elementary substructure**: a
countable subset closed under "witnesses", satisfying exactly the same sentences with parameters from it. The proof
picks witnesses with **Skolem functions**: for each formula $\exists y\, \varphi(\bar x, y)$, a function choosing a $y$
for each $\bar x$ that has one, and closes a countable set under all of them.

**Theorem (upward Löwenheim-Skolem).** If a set $\Gamma$ of sentences has an infinite model, then for every infinite
cardinal $\kappa$ at least the number of symbols of the language, $\Gamma$ has a model of size exactly $\kappa$.

*Proof.* Add $\kappa$ new constants $c_\alpha$ and the sentences $\neg(c_\alpha = c_\beta)$ for $\alpha \ne \beta$. A
finite subset mentions finitely many constants; interpret them as distinct elements of the infinite model. By
compactness there is a model, and it has at least $\kappa$ elements. The Henkin proof for a language of size $\kappa$
gives a model with at most $\kappa$ elements, so exactly $\kappa$. $\square$

**Consequence.** No first-order theory with an infinite model determines its model up to isomorphism, because it has
models of different sizes. True arithmetic has uncountable models; the theory of $(\mathbb{R}, +, \cdot, <)$ has
countable models. (A concrete one, by Tarski's theorem in [Chapter 12](12-Model-Theory.md), is the field of real
algebraic numbers.) The best a theory can do is to determine its models of one particular size, which is what
**categoricity** in Chapter 12 is about.

### Skolem's paradox

Zermelo-Fraenkel set theory ZFC ([Chapter 8](08-Axiomatic-Set-Theory.md)) is a first-order theory in the countable
language $\{\in\}$. It proves Cantor's theorem: the power set of $\mathbb{N}$ is uncountable
([Chapter 7](07-Infinity-and-Cardinality.md)). If ZFC is consistent, it has a model, and by downward Löwenheim-Skolem it
has a **countable** model $\mathcal{M}$. Inside $\mathcal{M}$ there is an element $P$ that $\mathcal{M}$ believes is
the power set of $\mathbb{N}$, and $\mathcal{M}$ satisfies "$P$ is uncountable". But $\mathcal{M}$ has only countably
many elements altogether, so only countably many things stand in the relation $\in^{\mathcal{M}}$ to $P$.

Skolem pointed this out in 1922. It looks like a contradiction. It is not, and the resolution is worth understanding:

- "$P$ is uncountable" is a sentence of set theory. It says: **there is no bijection between $\mathbb{N}$ and $P$**.
  Inside $\mathcal{M}$, "there is no" means "there is no element of $\mathcal{M}$".
- Looking at $\mathcal{M}$ from outside, we can list the members of $P$ and so build a bijection. That bijection is a
  set *in our universe*, but it is not an element of $\mathcal{M}$. So $\mathcal{M}$ is right by its own lights: it
  contains no bijection.
- Also, the "members" of $P$ in $\mathcal{M}$ need not be real subsets of $\mathbb{N}$: $\in^{\mathcal{M}}$ is just a
  relation on a countable set, which need not be true membership.

So countability is **relative to a model**: whether a bijection exists depends on which sets are around. Skolem took
this as evidence that set-theoretic notions like "uncountable" cannot be captured absolutely by first-order axioms.
Most mathematicians today accept the technical point and do not see a threat in it: it is one more instance of the
gap between what a first-order theory says and the intended structure it was written to describe. The same gap
produced nonstandard numbers in 11.4.

### Why first-order logic, then?

Completeness, compactness and Löwenheim-Skolem come together. Per Lindström proved in 1969 that first-order logic is the
strongest logic (in a precise sense) that has both compactness and the downward Löwenheim-Skolem property. Second-order
logic can pin $\mathbb{N}$ down, but it pays with the loss of a complete proof system, as [Chapter 10](10-First-Order-Logic.md)
explained. First-order logic cannot pin down any infinite structure, but in exchange everything it can say is provable
from the axioms whenever it follows from them.

## A short history

Hilbert and Ackermann's textbook of 1928 asked whether their first-order proof system derives every valid formula.
Kurt Gödel, then a student in Vienna, proved that it does in his doctoral dissertation, completed in 1929; the
published version appeared in 1930 in the *Monatshefte für Mathematik und Physik*, with the compactness theorem for
countable languages included. A year later he published the incompleteness theorems, which are about something
different ([Chapter 18](18-Godels-Incompleteness-Theorems.md)).

Leopold Löwenheim proved the first downward theorem in 1915; Thoralf Skolem simplified and extended it in 1920 and
1922, and in 1922 described the "paradox" that now bears his name. The upward theorem is usually credited to Tarski.
Anatoly Maltsev proved compactness for arbitrary languages in 1936, and later used it to prove "local theorems" in
group theory. Leon Henkin's
proof of completeness, from his Princeton thesis, was published in 1949. Abraham Robinson introduced nonstandard
analysis in 1961 and published his book *Non-standard Analysis* in 1966.

## Check yourself

??? question "1. Show that the two forms of Gödel's theorem are equivalent: (a) $\Gamma \models \sigma$ implies $\Gamma \vdash \sigma$; (b) every consistent set of sentences has a model."
    (a) implies (b): if $\Gamma$ has no model, then $\Gamma \models \neg\forall x\, (x = x)$ vacuously, so $\Gamma \vdash \neg\forall x\, (x = x)$; also $\vdash \forall x\,
    (x = x)$ ((Q5) generalised). So $\Gamma$ is inconsistent. (b) implies (a): if $\Gamma \nvdash \sigma$ then
    $\Gamma \cup \{\neg\sigma\}$ is consistent (otherwise proof by contradiction gives $\Gamma \vdash \sigma$), so it has a
    model, which satisfies $\Gamma$ but not $\sigma$; hence $\Gamma \not\models \sigma$.

??? question "2. In the language with constants $c_0, c_1, \dots$ and a unary relation $P$, let $\Gamma = \{\neg\forall x\, P(x)\} \cup \{P(c_n) : n \in \mathbb{N}\}$. Show $\Gamma$ is consistent, and explain why Henkin's construction must add a new constant."
    Model: domain $\mathbb{N} \cup \{\infty\}$, $c_n = n$, $P$ true exactly of the natural numbers. All sentences of
    $\Gamma$ are true, so by soundness $\Gamma$ is consistent. In a model whose elements are all named by the $c_n$,
    $P$ would hold of everything, making $\neg\forall x\, P(x)$ false. So a term model needs a new constant $d$ with
    $\neg P(d)$; Henkin's axiom $\neg\forall x\, P(x) \to \neg P(d)$ supplies exactly that.

??? question "3. In the proof of Lemma 1, why must the Henkin constant $c_n$ not occur in $\varphi_n$ or in earlier $\theta$'s? Give an example of what goes wrong."
    Generalisation on constants needs $c_n$ to be absent from the hypotheses and from $\varphi_n(x)$. Example of failure:
    if $\Gamma = \{\neg\forall x\, P(x), \; P(c)\}$ (consistent) and we used the old constant $c$ as the witness, the axiom
    $\neg\forall x\, P(x) \to \neg P(c)$ would give $\neg P(c)$, contradicting $P(c)$. A fresh constant carries no
    information, so declaring it a counterexample cannot clash with anything.

??? question "4. Show that if a set of sentences has only finite models, then there is a number $N$ such that every model has at most $N$ elements."
    Suppose not: then there are finite models of every size beyond any bound, i.e. arbitrarily large finite models. By
    the theorem of 10.5 (compactness applied to $\Gamma \cup \{\lambda_n\}$), $\Gamma$ then has an infinite model,
    contradicting the assumption.

??? question "5. Let $\mathcal{M}$ be a nonstandard model of true arithmetic and $c$ a nonstandard element. Show that $c \cdot c$ is in a higher block than $c$."
    Since $c > \bar 2$, $c \cdot c - c = c \cdot (c - 1) \ge c - 1$, and $c - 1$ is nonstandard (if it were $\bar n$,
    then $c$ would be $\overline{n+1}$). The sentences used, such as $\forall x\, \forall y\, (\underline{1} < y \to
    x \le x \cdot y)$ and the distributive law, are true in $\mathbb{N}$, so they hold in $\mathcal{M}$. So $c \cdot c$ is
    at a nonstandard distance from $c$, in a higher block.

??? question "6. In a nonstandard model, the set of nonstandard elements has no least element. Why does this not contradict the least number principle, which is true in the model?"
    The least number principle in true arithmetic is a scheme: one sentence for each *formula* $\psi$, saying the set
    defined by $\psi$ has a least element if it is non-empty. It applies only to definable sets. The set of nonstandard
    elements is not definable in $\mathcal{M}$ (that is exactly what 11.4 proved, by this argument), so the principle
    says nothing about it.

??? question "7. Using infinitesimals, find the derivative of $f(x) = x^3$ at a real $a$, and show that $1/\varepsilon$ is larger than every real if $\varepsilon > 0$ is infinitesimal."
    $((a + \varepsilon)^3 - a^3)/\varepsilon = (3a^2\varepsilon + 3a\varepsilon^2 + \varepsilon^3)/\varepsilon =
    3a^2 + 3a\varepsilon + \varepsilon^2$. The last two terms are infinitesimal (a real times an infinitesimal, and a
    product of infinitesimals, are infinitesimal), so the standard part is $3a^2$. For the second part: for any positive
    real $r$, $\varepsilon < 1/r$, so $1/\varepsilon > r$ (multiply by the positive $r/\varepsilon$; transfer gives the
    usual rules of inequalities in ${}^*\mathbb{R}$).

??? question "8. Does the theory of $(\mathbb{Q}, <)$ have an uncountable model? Does the theory of $(\mathbb{N}, 0, S, +, \cdot, <)$? Does any first-order theory have exactly one model up to isomorphism?"
    Yes: $(\mathbb{R}, <)$ is one for $\mathbb{Q}$ (Chapter 12 shows $(\mathbb{Q}, <)$ and $(\mathbb{R}, <)$ satisfy the
    same sentences); in general the upward Löwenheim-Skolem theorem gives models of every infinite size. For true
    arithmetic, yes, by the same theorem. A theory with an infinite model has models of every infinite cardinality, so
    it is never determined up to isomorphism. Only theories whose models are all finite can be: for example the
    theory "there are exactly 3 elements" in the empty language has one model up to isomorphism.

??? question "9. Prove that every partial order $\prec$ on a set $X$ extends to a linear order, using compactness and the finite case (every finite partial order extends to a linear order)."
    Use the language with a binary relation $<$ and a constant $c_a$ for each $a \in X$. Let $\Gamma$ contain: the axioms
    of a strict linear order; $c_a < c_b$ whenever $a \prec b$; and $\neg(c_a = c_b)$ whenever $a \ne b$. A finite subset
    mentions finitely many elements $a_1, \dots, a_k$; the restriction of $\prec$ to them is a finite partial order,
    which extends to a linear order on $\{a_1, \dots, a_k\}$ (topological sorting). That linear order, with $c_{a_i}$
    interpreted as $a_i$, satisfies the finite subset. By compactness $\Gamma$ has a model $\mathcal{M}$. Define
    $a \lessdot b$ iff $\mathcal{M} \models c_a < c_b$. This is a linear order on $X$ (the $c_a$ are distinct elements
    of a linear order) extending $\prec$.

??? question "10. Explain in your own words why a countable model of ZFC is not a contradiction, even though ZFC proves that the power set of $\mathbb{N}$ is uncountable."
    "Uncountable" inside the model means "the model contains no bijection between $\mathbb{N}$ and this set". From
    outside, the set has countably many members (in the model's sense), and a bijection exists in the real universe,
    but that bijection is not an element of the model. The model's statement is about its own elements only, and it is
    true there. Countability depends on which functions are available, and different models have different functions.

??? question "11. Show from compactness that if $\Gamma \models \sigma$, then some finite $\Gamma_0 \subseteq \Gamma$ has $\Gamma_0 \models \sigma$."
    $\Gamma \cup \{\neg\sigma\}$ has no model. By compactness some finite subset has no model; it can be taken of the
    form $\Gamma_0 \cup \{\neg\sigma\}$ with $\Gamma_0 \subseteq \Gamma$ finite (adding $\neg\sigma$ to a finite subset
    keeps it finite and still without a model). So every model of $\Gamma_0$ satisfies $\sigma$, that is,
    $\Gamma_0 \models \sigma$.

## What you learned

- A Hilbert system with tautologies, quantifier axioms, equality axioms and modus ponens is sound and complete for
  first-order logic: $\Gamma \vdash \varphi$ iff $\Gamma \models \varphi$ (Gödel, 1929-30).
- Henkin's proof adds witness constants, extends to a maximal consistent set, and builds a model from closed terms; the
  witnesses make the quantifier step of the truth lemma work.
- Compactness: a set of sentences has a model if every finite subset does. A sentence true in characteristic 0 is true
  in all large prime characteristics.
- True arithmetic has nonstandard models, ordered (when countable) as $\mathbb{N}$ followed by $\mathbb{Q}$ copies of
  $\mathbb{Z}$; "standard" is not definable inside them.
- Robinson's hyperreals contain infinitesimals; the derivative is the standard part of a difference quotient.
- Löwenheim-Skolem: theories with infinite models have models of every infinite size. Skolem's paradox shows that
  "countable" is relative to a model, not a contradiction.

**Next:** [Chapter 12](12-Model-Theory.md), where theories and their models become the object of study: complete
theories, categoricity, Cantor's back-and-forth argument, quantifier elimination and ultraproducts.

## Further reading

- K. Gödel, "Die Vollständigkeit der Axiome des logischen Funktionenkalküls", *Monatshefte für Mathematik und Physik*
  37, 1930 (English translation in *Kurt Gödel: Collected Works*, Volume I, 1986, and in van Heijenoort, *From Frege to
  Gödel*, 1967).
- L. Henkin, "The completeness of the first-order functional calculus", *Journal of Symbolic Logic* 14, 1949.
- H. B. Enderton, *A Mathematical Introduction to Logic*, 2nd edition, 2001. Section 2.5 has Henkin's proof in full.
- A. Robinson, *Non-standard Analysis*, 1966.
- H. J. Keisler, *Elementary Calculus: An Infinitesimal Approach*, 1976 (2nd edition 1986).
- R. Goldblatt, *Lectures on the Hyperreals*, 1998.
- R. Kaye, *Models of Peano Arithmetic*, 1991. Nonstandard models of arithmetic, including Tennenbaum's theorem.
- T. Skolem, "Einige Bemerkungen zur axiomatischen Begründung der Mengenlehre", 1922 (English translation in
  van Heijenoort, *From Frege to Gödel*, 1967).
- On this site: the Topics lesson [Axioms](../../topics/logic/level-8/02-axioms.md);
  [Calculus, Chapter 2](../calculus/02-Limits.md) and [Chapter 18](../calculus/18-The-Real-Numbers.md) for the
  limit-based approach that infinitesimals replace; [Algebra, Chapter 19](../algebra/19-Fields-and-Extensions.md) for
  the characteristic of a field; the [Number theory book](../number-theory/index.md) for the arithmetic that true
  arithmetic is about.
