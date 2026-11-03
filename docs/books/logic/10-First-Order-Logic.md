# 10. First-order logic

*"Every number has a prime larger than it." Propositional logic can only treat this sentence as one unanalysed
letter $p$, so it cannot see why the sentence follows from "there are infinitely many primes", or why it is about
numbers at all. Real mathematics talks about objects (numbers, points, group elements, vertices) and says that all of
them, or some of them, have a property. In this chapter you will build the language that does this, first-order
logic: what its formulas are, what it means for a formula to be true in a structure (Tarski's definition), how
groups, orders, arithmetic and graphs are described in it, and what "follows from" now means. At the end you will see
the first surprise: some simple ideas, like "finite" and "connected", cannot be said in this language at all.*

!!! abstract "In this chapter"
    **You will learn:**

    - how a first-order language is built from constant, function and relation symbols
    - terms, formulas, free and bound variables, sentences, and the trap in substitution
    - structures, and Tarski's definition of when a formula is true in a structure
    - how to write the axioms of groups, orders, arithmetic, graphs and fields as sentences
    - logical consequence, logical equivalence, and how to show a non-consequence with a countermodel
    - why "finite", "connected" and "well-ordered" cannot be expressed in first-order logic

    **You need:** [Chapter 3](03-Quantifiers.md) (quantifiers in everyday mathematics) and
    [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md) (syntax versus semantics, induction on formulas). Groups
    are used as examples; [Algebra, Chapter 13](../algebra/13-Groups.md) has what you need. The gentler version is the
    Topics lesson [Predicate logic](../../topics/logic/level-8/01-predicate-logic.md).

    **Levels:** 10.1 and 10.3 are intermediate; 10.2 and 10.4 are intermediate to advanced; 10.5 is advanced.

## 10.1 Languages, terms and formulas

In [Chapter 3](03-Quantifiers.md) you wrote statements like $\forall \varepsilon > 0 \; \exists \delta > 0 \dots$ and
treated them as precise. They are precise in practice, but to *prove theorems about* such statements (that a proof
system derives all of their consequences, or that a property cannot be expressed) we need the same care we gave
propositional formulas in [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md): an exact definition of which
strings count.

### Symbols

Every first-order language has the same **logical symbols**:

- infinitely many **variables** $v_0, v_1, v_2, \dots$ (we also write $x, y, z, u, w$);
- the connectives $\neg$ and $\to$, the quantifier $\forall$ ("for all"), the equality symbol $=$, and brackets.

The other connectives are abbreviations, as in Chapter 9, and so is the other quantifier:

$$
\exists x\, \varphi \;:=\; \neg \forall x\, \neg \varphi .
$$

"Something has the property" means "not everything lacks it". Check with an example: "some prime is even" is the same
as "not every prime is odd".

What changes from one language to another are the **non-logical symbols**, collected in a **signature**:

- **constant symbols**, names for particular objects, such as $0$ or $e$;
- **function symbols**, each with an **arity** (number of inputs), such as $+$ (arity 2) or $S$ ("successor", arity 1);
- **relation symbols**, each with an arity, such as $<$ (arity 2) or $E$ ("is joined to", arity 2).

The signature says what we are talking *about*. Some standard ones:

| Name | Symbols | Used for |
|---|---|---|
| groups | $e$ (constant), $\cdot$ (function, arity 2) | groups |
| orders | $<$ (relation, arity 2) | ordered sets |
| graphs | $E$ (relation, arity 2) | graphs |
| rings | $0, 1$ (constants), $+, \cdot$ (arity 2), $-$ (arity 1) | rings and fields |
| arithmetic | $0$ (constant), $S$ (arity 1), $+, \cdot$ (arity 2), $<$ (relation) | the natural numbers |

### Terms

**Terms** are the names of objects. They are defined inductively:

1. every variable and every constant symbol is a term;
2. if $f$ is a function symbol of arity $n$ and $t_1, \dots, t_n$ are terms, then $f(t_1, \dots, t_n)$ is a term.

For binary symbols we write $(t_1 + t_2)$ instead of $+(t_1, t_2)$. In arithmetic, $S(S(0))$, $(x + S(0))$ and
$((x + S(0)) \cdot y)$ are terms. The term $S(S(\dots S(0)\dots))$ with $n$ copies of $S$ is called the **numeral**
$\underline{n}$; it is the language's name for the number $n$.

A term is not a statement. "$x + 1$" is neither true nor false; it names a number once you know what $x$ is.

### Formulas

**Atomic formulas** are the simplest statements:

- $t_1 = t_2$, for terms $t_1, t_2$;
- $R(t_1, \dots, t_n)$, for a relation symbol $R$ of arity $n$ and terms $t_1, \dots, t_n$ (for binary symbols, written
  $t_1 < t_2$ and so on).

**Formulas** are built from atomic formulas by three rules: if $\varphi, \psi$ are formulas and $x$ is a variable,
then $\neg\varphi$, $(\varphi \to \psi)$ and $\forall x\, \varphi$ are formulas.

**Example 1.** In the language of arithmetic,

$$
\forall y \, \big( \exists z\, (y \cdot z = x) \to ( y = \underline{1} \lor y = x ) \big)
$$

is a formula. Read aloud: "every $y$ that divides $x$ is $1$ or $x$". Together with $\underline{1} < x$ it says "$x$
is prime". Notice that it says something about $x$, which is not quantified.

As with propositional formulas, terms and formulas are **uniquely readable**: each can be built in only one way. So we
can define things by recursion on terms and formulas, and prove things by induction on them.

### Free and bound variables

In $\int_0^1 x^2 \, dx$ the letter $x$ is a dummy: replacing it by $t$ changes nothing. In $\int_0^1 x^2 y \, dx$,
the $y$ is not a dummy; the value depends on it. Quantifiers create dummies in the same way.

An occurrence of $x$ in a formula is **bound** if it lies inside a part of the form $\forall x\, \psi$ (or
$\exists x\, \psi$), and **free** otherwise. The **free variables** of $\varphi$, written $\mathrm{FV}(\varphi)$, are
defined by recursion:

- for an atomic formula, all the variables that occur in it;
- $\mathrm{FV}(\neg\varphi) = \mathrm{FV}(\varphi)$, and $\mathrm{FV}(\varphi \to \psi) = \mathrm{FV}(\varphi) \cup \mathrm{FV}(\psi)$;
- $\mathrm{FV}(\forall x\, \varphi) = \mathrm{FV}(\varphi) \setminus \{x\}$.

A formula with no free variables is a **sentence**. Sentences are the formulas that are simply true or false in a
structure; formulas with free variables describe properties or relations, like "$x$ is prime".

**Example 2.** Find the free variables of $\forall x\, (x < y) \land \exists y\, (y < x)$.

- In $\forall x\, (x < y)$: $x$ is bound, $y$ is free.
- In $\exists y\, (y < x)$: $y$ is bound, $x$ is free.

So $\mathrm{FV} = \{x, y\}$, even though both letters also occur bound. Each *occurrence* is either free or bound; a
variable can have both kinds. Good style renames to avoid this: the formula means the same as
$\forall u\, (u < y) \land \exists w\, (w < x)$.

### Substitution and the capture trap

If $\varphi(x)$ says something about $x$, we want $\varphi(t)$ to say the same thing about the object named by $t$.
The official notation is $\varphi[t/x]$: replace every **free** occurrence of $x$ by $t$. There is a trap.

**Example 3.** Let $\varphi(x)$ be $\exists y\, \neg (y = x)$: "something is different from $x$". In any structure with
at least two elements it is true, whatever $x$ is. Now substitute the term $y$ for $x$, blindly:
$\exists y\, \neg(y = y)$, "something is different from itself", which is false everywhere. The $y$ we put in was
**captured** by the quantifier $\exists y$ and changed its meaning.

The rule: $t$ is **substitutable** for $x$ in $\varphi$ if no variable of $t$ gets captured, that is, no free
occurrence of $x$ lies inside a quantifier $\forall y$ or $\exists y$ for a variable $y$ of $t$. When it is not, first
rename the bound variable: $\exists w\, \neg(w = x)$, and then substitute: $\exists w\, \neg(w = y)$. Computer
programmers meet the same problem when a function's local variable has the same name as a global one.

## 10.2 Structures and satisfaction

*Level: intermediate to advanced.*

A formula on its own means nothing; "$x < y$" could be about numbers, sets or people in a queue. Meaning comes from a
**structure**, which says what the symbols stand for.

**Definition.** For a signature $L$, an **$L$-structure** $\mathcal{M}$ consists of

- a non-empty set $M$, the **domain** (the things the variables range over);
- for each constant symbol $c$, an element $c^{\mathcal{M}} \in M$;
- for each function symbol $f$ of arity $n$, a function $f^{\mathcal{M}} : M^n \to M$;
- for each relation symbol $R$ of arity $n$, a set $R^{\mathcal{M}} \subseteq M^n$ (the tuples for which $R$ holds).

The equality symbol always means real equality; it is not reinterpreted.

**Examples.** $(\mathbb{N}, <)$, $(\mathbb{Z}, <)$, $(\mathbb{Q}, <)$ and $(\mathbb{R}, <)$ are four structures for the
language of orders. The **standard model of arithmetic** $\mathcal{N} = (\mathbb{N}, 0, S, +, \cdot, <)$ interprets $S$
as $n \mapsto n + 1$ and the rest as usual. Any group is a structure for the language of groups. A graph is a structure
for the language $\{E\}$: the domain is the set of vertices and $E^{\mathcal{M}}$ the set of ordered pairs of joined
vertices. A structure need not be "intended": $(\mathbb{Z}, <)$ with $<$ interpreted as "divides" is also a structure
for the language of orders.

### Assignments and the value of a term

To decide whether "$x < y$" is true we must know what $x$ and $y$ are. An **assignment** is a function $s$ from the
variables to $M$. The **value** $t^{\mathcal{M}}[s]$ of a term is defined by recursion: $x^{\mathcal{M}}[s] = s(x)$,
$c^{\mathcal{M}}[s] = c^{\mathcal{M}}$, and

$$
f(t_1, \dots, t_n)^{\mathcal{M}}[s] = f^{\mathcal{M}}\big(t_1^{\mathcal{M}}[s], \dots, t_n^{\mathcal{M}}[s]\big).
$$

In $\mathcal{N}$ with $s(x) = 4$, $s(y) = 3$, the term $((x + S(0)) \cdot y)$ has value $(4 + 1) \cdot 3 = 15$.

### Tarski's definition of truth

We write $s(x \mapsto a)$ for the assignment that agrees with $s$ except that it sends $x$ to $a$.

**Definition (satisfaction).** $\mathcal{M} \models \varphi[s]$, read "$\mathcal{M}$ satisfies $\varphi$ under $s$", is
defined by recursion on $\varphi$:

- $\mathcal{M} \models (t_1 = t_2)[s]$ iff $t_1^{\mathcal{M}}[s] = t_2^{\mathcal{M}}[s]$;
- $\mathcal{M} \models R(t_1, \dots, t_n)[s]$ iff $(t_1^{\mathcal{M}}[s], \dots, t_n^{\mathcal{M}}[s]) \in R^{\mathcal{M}}$;
- $\mathcal{M} \models \neg\varphi[s]$ iff not $\mathcal{M} \models \varphi[s]$;
- $\mathcal{M} \models (\varphi \to \psi)[s]$ iff $\mathcal{M} \not\models \varphi[s]$ or $\mathcal{M} \models \psi[s]$;
- $\mathcal{M} \models \forall x\, \varphi[s]$ iff $\mathcal{M} \models \varphi[s(x \mapsto a)]$ for **every** $a \in M$.

Unwinding the abbreviation, $\mathcal{M} \models \exists x\, \varphi[s]$ iff $\mathcal{M} \models \varphi[s(x \mapsto a)]$
for **some** $a \in M$.

At first sight the definition looks circular: "$\forall$ means for every". It is not circular, and seeing why is the
point. On the left, $\forall$ is a *symbol* in a formal language (the **object language**). On the right, "for every"
is ordinary mathematical English (the **metalanguage**) about the set $M$. The definition translates one into the
other, one symbol at a time. Alfred Tarski made this distinction precise in his 1933 work on the concept of truth in
formalised languages, and it is what lets us prove theorems about truth.

### A worked example

Let $\mathcal{D}$ be the structure for the language $\{R\}$ with domain $D = \{1, 2, 3, 6\}$ and $R$ interpreted as
"divides": $R^{\mathcal{D}} = \{(a, b) : a \text{ divides } b\}$. Decide each sentence.

**(a)** $\exists x\, \forall y\, R(x, y)$. We need some $a$ such that, for every $b$, $a$ divides $b$. Try $a = 1$:
$1$ divides $1, 2, 3, 6$. **True.**

**(b)** $\forall x\, \exists y\, (R(x, y) \land \neg(x = y))$. Every element must divide something other than itself.
For $a = 6$: the multiples of 6 in $D$ are only 6. So it fails at $a = 6$. **False.**

**(c)** $\forall x\, \forall y\, \big( (R(x, y) \land R(y, x)) \to x = y \big)$. If $a$ divides $b$ and $b$ divides $a$
(positive numbers), then $a = b$. **True.**

**(d)** $\exists x\, \exists y\, \big( \neg R(x, y) \land \neg R(y, x) \big)$. Take $a = 2$, $b = 3$: neither divides the
other. **True.**

Check: the program below prints True, False, True, True.

### Try it in Python

For a *finite* structure, Tarski's definition is an algorithm: the quantifiers become loops over the domain.

```python
def holds(M, phi, s):
    """Tarski's definition of truth, for a finite structure with one binary relation R."""
    op = phi[0]
    if op == 'R':   return (s[phi[1]], s[phi[2]]) in M['R']
    if op == '=':   return s[phi[1]] == s[phi[2]]
    if op == 'not': return not holds(M, phi[1], s)
    if op == 'and': return holds(M, phi[1], s) and holds(M, phi[2], s)
    if op == 'imp': return (not holds(M, phi[1], s)) or holds(M, phi[2], s)
    if op == 'all': return all(holds(M, phi[2], {**s, phi[1]: a}) for a in M['dom'])
    if op == 'ex':  return any(holds(M, phi[2], {**s, phi[1]: a}) for a in M['dom'])

D = [1, 2, 3, 6]
M = {'dom': D, 'R': {(a, b) for a in D for b in D if b % a == 0}}
sentences = [
    ('ex', 'x', ('all', 'y', ('R', 'x', 'y'))),
    ('all', 'x', ('ex', 'y', ('and', ('R', 'x', 'y'), ('not', ('=', 'x', 'y'))))),
    ('all', 'x', ('all', 'y', ('imp', ('and', ('R', 'x', 'y'), ('R', 'y', 'x')), ('=', 'x', 'y')))),
    ('ex', 'x', ('ex', 'y', ('and', ('not', ('R', 'x', 'y')), ('not', ('R', 'y', 'x'))))),
]
print([holds(M, phi, {}) for phi in sentences])   # [True, False, True, True]
```

For an infinite domain the loops never end. That is not a weakness of the program: there is no algorithm at all that
decides truth in $\mathcal{N}$ ([Chapter 18](18-Godels-Incompleteness-Theorems.md) explains why).

### Only the free variables matter

**Lemma (coincidence).** If two assignments $s$ and $s'$ agree on the free variables of $\varphi$, then
$\mathcal{M} \models \varphi[s]$ iff $\mathcal{M} \models \varphi[s']$.

*Proof.* First, for a term $t$, if $s$ and $s'$ agree on the variables of $t$ then $t^{\mathcal{M}}[s] =
t^{\mathcal{M}}[s']$ (induction on terms). This settles atomic formulas. The steps for $\neg$ and $\to$ follow at once
from the induction hypothesis. For $\forall x\, \varphi$: the free variables of $\varphi$ are among those of
$\forall x\, \varphi$ together with $x$. For each $a \in M$, the assignments $s(x \mapsto a)$ and $s'(x \mapsto a)$
agree on all of these, so by the induction hypothesis $\varphi$ is satisfied under one iff under the other. Hence
"for every $a$" gives the same answer for both. $\square$

So for a **sentence** $\sigma$, the assignment does not matter at all, and we just write $\mathcal{M} \models \sigma$:
"$\sigma$ is **true** in $\mathcal{M}$", or "$\mathcal{M}$ is a **model** of $\sigma$". For a formula $\varphi(x_1,
\dots, x_n)$ with free variables among $x_1, \dots, x_n$ we write $\mathcal{M} \models \varphi[a_1, \dots, a_n]$ when
it holds under any assignment sending each $x_i$ to $a_i$.

### Definable sets

A formula $\varphi(x)$ with one free variable picks out a subset of the domain,
$\varphi(\mathcal{M}) = \{a \in M : \mathcal{M} \models \varphi[a]\}$. Such sets are called **definable**.

- In $(\mathbb{R}, 0, 1, +, -, \cdot)$ the formula $\exists y\, (x = y \cdot y)$ defines $[0, \infty)$, since the
  non-negative reals are exactly the squares. So the order of the reals is definable from the field operations:
  $a \le b$ iff $b - a$ is a square.
- In $(\mathbb{N}, +)$ the formula $\exists z\, (x + z = y)$ defines the relation $x \le y$.
- In $\mathcal{N}$, the formula of Example 1 (with $\underline{1} < x$) defines the set of primes.

### Isomorphisms preserve truth

An **isomorphism** $h : \mathcal{M} \to \mathcal{N}$ is a bijection between the domains that carries each symbol's
interpretation to the other's: $h(c^{\mathcal{M}}) = c^{\mathcal{N}}$, $h(f^{\mathcal{M}}(a_1, \dots, a_n)) =
f^{\mathcal{N}}(h(a_1), \dots, h(a_n))$, and $(a_1, \dots, a_n) \in R^{\mathcal{M}}$ iff
$(h(a_1), \dots, h(a_n)) \in R^{\mathcal{N}}$. An isomorphism from a structure to itself is an **automorphism**.

**Lemma (isomorphism).** If $h : \mathcal{M} \to \mathcal{N}$ is an isomorphism, then for every formula $\varphi$ and
assignment $s$: $\mathcal{M} \models \varphi[s]$ iff $\mathcal{N} \models \varphi[h \circ s]$.

*Proof.* For terms, $h(t^{\mathcal{M}}[s]) = t^{\mathcal{N}}[h \circ s]$ by induction on terms. Atomic formulas then
follow because $h$ is injective (for $=$) and respects relations. The connective steps are immediate. For
$\forall x\, \varphi$: as $a$ runs over $M$, $h(a)$ runs over all of $N$, because $h$ is onto; and
$h \circ s(x \mapsto a) = (h \circ s)(x \mapsto h(a))$. So "$\varphi$ holds for every $a$ in $M$" matches "$\varphi$
holds for every $b$ in $N$". $\square$

This lemma is the main tool for showing that something is **not** definable. An automorphism must map a definable set
to itself (if $\mathcal{M} \models \varphi[a]$ then $\mathcal{M} \models \varphi[h(a)]$).

- In $(\mathbb{Z}, <)$ no single element is definable: the shift $n \mapsto n + 1$ is an automorphism and moves every
  element. In fact the only definable subsets of $\mathbb{Z}$ are $\varnothing$ and $\mathbb{Z}$, because shifts can
  move any element to any other.
- In the field $(\mathbb{C}, 0, 1, +, -, \cdot)$ the set $\{i\}$ is not definable: complex conjugation is an
  automorphism and swaps $i$ and $-i$. The set $\{i, -i\}$ is definable, by $x \cdot x + 1 = 0$.

## 10.3 Examples: groups, orders, arithmetic, graphs

The best way to learn a language is to say things in it. In each example, a list of sentences, called **axioms**,
picks out a class of structures: the structures in which all of them are true.

### Groups

In the language $\{e, \cdot\}$:

$$
\begin{aligned}
&\forall x\, \forall y\, \forall z\; \big( (x \cdot y) \cdot z = x \cdot (y \cdot z) \big) \\
&\forall x\; \big( x \cdot e = x \land e \cdot x = x \big) \\
&\forall x\, \exists y\; \big( x \cdot y = e \land y \cdot x = e \big)
\end{aligned}
$$

The models of these three sentences are exactly the groups. More properties, each one sentence:

- abelian: $\forall x\, \forall y\, (x \cdot y = y \cdot x)$;
- every element has order 1 or 2: $\forall x\, (x \cdot x = e)$;
- there is an element of order 3: $\exists x\, \big( \neg(x = e) \land x \cdot (x \cdot x) = e \big)$;
- the group has exactly one element of order 2 (a longer sentence: exists $x \ne e$ with $x \cdot x = e$, and every
  $y \ne e$ with $y \cdot y = e$ equals $x$).

Notice what is *not* on the list: "the group is finite", "every element has finite order", "the group is simple"
(normal subgroups are sets, and first-order formulas quantify over elements only). Some of these are provably not
expressible; see 10.5.

### Orders

In the language $\{<\}$, the axioms of a **strict partial order** are irreflexivity $\forall x\, \neg(x < x)$ and
transitivity $\forall x\, \forall y\, \forall z\, ((x < y \land y < z) \to x < z)$. Further properties:

- linear: $\forall x\, \forall y\, (x < y \lor x = y \lor y < x)$;
- dense: $\forall x\, \forall y\, (x < y \to \exists z\, (x < z \land z < y))$;
- no least element: $\forall x\, \exists y\, (y < x)$; no greatest element: $\forall x\, \exists y\, (x < y)$;
- discrete (every element has an immediate successor):
  $\forall x\, \exists y\, \big( x < y \land \neg \exists z\, (x < z \land z < y) \big)$.

Which familiar orders have which properties?

| Property | $(\mathbb{N}, <)$ | $(\mathbb{Z}, <)$ | $(\mathbb{Q}, <)$ | $(\mathbb{R}, <)$ |
|---|---|---|---|---|
| linear | yes | yes | yes | yes |
| dense | no | no | yes | yes |
| no least element | no | yes | yes | yes |
| no greatest element | yes | yes | yes | yes |
| every element has an immediate successor | yes | yes | no | no |

The orders that are linear, dense and without endpoints are the **dense linear orders without endpoints** (DLO). Both
$(\mathbb{Q}, <)$ and $(\mathbb{R}, <)$ are models. In [Chapter 12](12-Model-Theory.md) you will prove a surprise:
*no* first-order sentence in the language $\{<\}$ can tell them apart, even though one is countable and the other is
not, and $\mathbb{R}$ is complete while $\mathbb{Q}$ has gaps. The completeness of $\mathbb{R}$ ("every bounded set has
a least upper bound", see [Calculus, Chapter 18](../calculus/18-The-Real-Numbers.md)) talks about *sets* of reals, and
first-order logic cannot quantify over sets.

### Arithmetic

In the language $\{0, S, +, \cdot, <\}$ and the standard model $\mathcal{N}$, a lot of number theory can be written:

| Statement | Formula |
|---|---|
| $x \le y$ | $\exists z\, (x + z = y)$ |
| $x$ divides $y$ | $\exists z\, (x \cdot z = y)$ |
| $x$ is even | $\exists z\, (x = z + z)$ |
| $x$ is prime, $\mathrm{Pr}(x)$ | $\underline{1} < x \land \forall y\, \forall z\, (x = y \cdot z \to (y = \underline{1} \lor z = \underline{1}))$ |
| there are infinitely many primes | $\forall x\, \exists p\, (x < p \land \mathrm{Pr}(p))$ |
| every even number above 2 is a sum of two primes | $\forall x\, \big( (\underline{2} < x \land \exists z\, (x = z + z)) \to \exists p\, \exists q\, (\mathrm{Pr}(p) \land \mathrm{Pr}(q) \land x = p + q) \big)$ |
| there are infinitely many twin primes | $\forall x\, \exists p\, (x < p \land \mathrm{Pr}(p) \land \mathrm{Pr}(p + \underline{2}))$ |

Here $\mathrm{Pr}(p)$ is short for the prime formula with $p$ in place of $x$ (renaming bound variables as needed).
The third row is Euclid's theorem, true in $\mathcal{N}$. The fourth is Goldbach's conjecture and the fifth the twin
prime conjecture; nobody knows whether they are true in $\mathcal{N}$. But each is a sentence, so by Tarski's
definition it **is** true or false in $\mathcal{N}$; we just do not know which. Truth in a structure does not wait for
proofs.

Exponentiation is not in the language, yet "$x = 2^y$" turns out to be definable in $\mathcal{N}$ from $+$ and
$\cdot$, using a coding trick of Gödel's ([Chapter 17](17-Arithmetic-and-Peano.md)). In fact every computable
function is definable, which is the starting point of the incompleteness theorems.

### Graphs

In the language $\{E\}$, a (simple, undirected) **graph** is a model of irreflexivity $\forall x\, \neg E(x, x)$ and
symmetry $\forall x\, \forall y\, (E(x, y) \to E(y, x))$. Properties that are single sentences:

- has a triangle: $\exists x\, \exists y\, \exists z\, (E(x, y) \land E(y, z) \land E(x, z))$;
- every vertex has at least two neighbours: $\forall x\, \exists y\, \exists z\, (\neg(y = z) \land E(x, y) \land E(x, z))$;
- diameter at most 2: $\forall x\, \forall y\, \big( x = y \lor E(x, y) \lor \exists z\, (E(x, z) \land E(z, y)) \big)$.

For each fixed $n$, "there is a path of length at most $n$ from $x$ to $y$" is a formula $\pi_n(x, y)$ (it uses $n -
1$ quantified middle vertices). But "there is a path of *some* length", which is what "connected" needs, would be the
infinite disjunction $\pi_1 \lor \pi_2 \lor \dots$, and formulas are finite. 10.5 shows this is not just a failure of
imagination.

### Counting and fields

Even with no non-logical symbols at all (the **empty signature**, only $=$), we can count:

$$
\lambda_n \;:=\; \exists x_1 \dots \exists x_n \bigwedge_{1 \le i < j \le n} \neg(x_i = x_j)
$$

says "there are at least $n$ elements". Then $\lambda_n \land \neg\lambda_{n+1}$ says "exactly $n$". Here
$\bigwedge$ is a finite conjunction, written out in full for each fixed $n$.

In the language of rings, the field axioms are finitely many sentences. "Characteristic $p$" is the sentence
$\underline{p} = 0$, where $\underline{p}$ is $1 + 1 + \dots + 1$ ($p$ ones). "Characteristic 0" needs infinitely many
sentences: $\neg(\underline{p} = 0)$ for every prime $p$. "Algebraically closed" also needs infinitely many, one for
each degree $n \ge 1$:

$$
\forall a_0 \, \forall a_1 \dots \forall a_{n-1} \, \exists x \; \big( x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0 = 0 \big),
$$

where $x^k$ abbreviates $x \cdot x \cdots x$. A family of sentences given by one pattern like this is an **axiom
scheme**. We cannot say "for every polynomial" in one sentence, because polynomials of all degrees are not elements of
the field.

## 10.4 Logical consequence

*Level: intermediate to advanced.*

**Definitions.** Let $\Gamma$ be a set of formulas and $\varphi$ a formula.

- $\Gamma \models \varphi$ ($\varphi$ is a **logical consequence** of $\Gamma$) if for every structure $\mathcal{M}$
  and every assignment $s$: if $\mathcal{M}$ satisfies every member of $\Gamma$ under $s$, then
  $\mathcal{M} \models \varphi[s]$.
- $\varphi$ is **valid**, $\models \varphi$, if it is satisfied in every structure under every assignment. Valid
  formulas are the first-order analogue of tautologies.
- $\Gamma$ is **satisfiable** if some structure and assignment satisfy all of it.
- $\varphi$ and $\psi$ are **logically equivalent** if each is a consequence of the other.

This is the same definition as in Chapter 9, with structures in place of valuations. But there is a huge difference:
there are infinitely many structures, of every size, so there is no "truth table" to check.

**Example 4.** Every tautology instance is valid: if you replace the letters of a propositional tautology by
first-order formulas, the result is valid. For instance $\forall x\, P(x) \lor \neg\forall x\, P(x)$.

**Example 5.** $\exists y\, \forall x\, R(x, y) \models \forall x\, \exists y\, R(x, y)$.

*Proof.* Let $\mathcal{M}$ satisfy the premise: there is $b \in M$ with $(a, b) \in R^{\mathcal{M}}$ for every $a$. Then
for every $a$ there is some $y$-value, namely $b$, with $(a, b) \in R^{\mathcal{M}}$. That is the conclusion. $\square$

**Example 6.** The converse fails: $\forall x\, \exists y\, R(x, y) \not\models \exists y\, \forall x\, R(x, y)$.

*Countermodel.* $(\mathbb{N}, <)$, reading $R$ as $<$. Every number has a larger one, so the premise is true. No
number is larger than every number (not even than itself), so the conclusion is false. This is the "order of
quantifiers matters" lesson of [Chapter 3](03-Quantifiers.md), now as a precise theorem.

**Example 7.** The group axioms entail that the identity is unique:

$$
\mathrm{Grp} \models \forall u\, \big( \forall x\, (x \cdot u = x \land u \cdot x = x) \to u = e \big).
$$

*Proof.* Let $\mathcal{G}$ be a group and $u$ an element with $x \cdot u = x$ and $u \cdot x = x$ for all $x$. Taking
$x = e$ in the first gives $e \cdot u = e$. The identity axiom with $x = u$ gives $e \cdot u = u$. So $u = e$. $\square$

**Example 8.** The group axioms do not entail commutativity.

*Countermodel.* The symmetric group $S_3$, with composition (right to left). Take the transpositions $(1\,2)$ and
$(2\,3)$. Then $(1\,2)(2\,3)$ sends $1 \mapsto 1 \mapsto 2$, $2 \mapsto 3 \mapsto 3$, $3 \mapsto 2 \mapsto 1$, so it is
the 3-cycle $(1\,2\,3)$. And $(2\,3)(1\,2)$ sends $1 \mapsto 2 \mapsto 3$, $2 \mapsto 1 \mapsto 1$, $3 \mapsto 3
\mapsto 2$, so it is $(1\,3\,2)$. They differ. Check: $(1\,2\,3)$ and $(1\,3\,2)$ are inverse 3-cycles, not equal.

This is how mathematicians know that a statement "does not follow from the axioms": they exhibit a structure. It is
the same method that, in [Chapter 18](18-Godels-Incompleteness-Theorems.md), will show certain statements unprovable
in arithmetic, and that in [Chapter 8](08-Axiomatic-Set-Theory.md) shows the continuum hypothesis is not decided by
ZFC (with much harder structures).

### Useful equivalences

Quantifiers interact with connectives in predictable ways. All of these are valid (proofs: unwind Tarski's
definition).

- $\neg \forall x\, \varphi \leftrightarrow \exists x\, \neg\varphi$ and $\neg \exists x\, \varphi \leftrightarrow \forall x\, \neg\varphi$.
- $\forall x\, (\varphi \land \psi) \leftrightarrow (\forall x\, \varphi \land \forall x\, \psi)$, and
  $\exists x\, (\varphi \lor \psi) \leftrightarrow (\exists x\, \varphi \lor \exists x\, \psi)$.
- If $x$ is not free in $\psi$: $\forall x\, (\psi \to \varphi) \leftrightarrow (\psi \to \forall x\, \varphi)$, and
  $\forall x\, (\varphi \to \psi) \leftrightarrow (\exists x\, \varphi \to \psi)$.
- If $x$ is not free in $\psi$: $(\forall x\, \varphi \to \psi) \leftrightarrow \exists x\, (\varphi \to \psi)$, and
  $(\psi \to \exists x\, \varphi) \leftrightarrow \exists x\, (\psi \to \varphi)$. (These two use the fact that
  domains are non-empty.)

And two that are **not** valid, with countermodels in $(\mathbb{N}, <)$ or similar:

- $\forall x\, (\varphi \lor \psi) \to (\forall x\, \varphi \lor \forall x\, \psi)$ fails: every number is even or odd,
  but not every number is even and not every number is odd.
- $(\exists x\, \varphi \land \exists x\, \psi) \to \exists x\, (\varphi \land \psi)$ fails: there is an even number and
  there is an odd number, but no number is both.

Using the valid equivalences (and renaming bound variables), every formula can be rewritten as a string of quantifiers
followed by a quantifier-free formula, its **prenex normal form**. For example
$\forall x\, P(x) \to \exists y\, Q(y)$ becomes $\exists x\, \exists y\, (P(x) \to Q(y))$. Check the steps: $x$ is
not free in $\exists y\, Q(y)$, so the universal in the antecedent moves out as $\exists x$ (the last bullet above),
giving $\exists x\, (P(x) \to \exists y\, Q(y))$; then $y$ is not free in $P(x)$, so the existential in the
consequent moves out as $\exists y$. A quantifier keeps its type when it leaves a consequent and flips when it leaves
an antecedent.

### Proofs with quantifiers

Natural deduction extends to quantifiers with four new rules, each matching how mathematicians argue.

- **$\forall$-elimination**: from $\forall x\, \varphi$, infer $\varphi[t/x]$ for any term $t$ substitutable for $x$.
  ("It holds for all, so it holds for this one.")
- **$\forall$-introduction**: from $\varphi[y/x]$, infer $\forall x\, \varphi$, *provided* $y$ does not occur free in
  any assumption the line rests on, nor in $\forall x\, \varphi$. ("Let $y$ be arbitrary. ... Since $y$ was arbitrary,
  it holds for all.") The proviso is what "arbitrary" means.
- **$\exists$-introduction**: from $\varphi[t/x]$, infer $\exists x\, \varphi$. ("Here is an example.")
- **$\exists$-elimination**: from $\exists x\, \varphi$, and a derivation of $\chi$ from the assumption $\varphi[y/x]$,
  infer $\chi$, discharging the assumption, *provided* $y$ is new: not free in $\chi$, in $\exists x\, \varphi$, or in
  other assumptions. ("Some $x$ works; call it $y$. ... So $\chi$, which does not mention $y$.")

Add rules for $=$: infer $t = t$; and from $t_1 = t_2$ and $\varphi[t_1/x]$ infer $\varphi[t_2/x]$.

**Example 9.** $\forall x\, (P(x) \to Q(x)), \; \forall x\, P(x) \vdash \forall x\, Q(x)$.

| Rests on | Line | Formula | Rule |
|---|---|---|---|
| 1 | (1) | $\forall x\, (P(x) \to Q(x))$ | assumption |
| 2 | (2) | $\forall x\, P(x)$ | assumption |
| 1 | (3) | $P(y) \to Q(y)$ | $\forall$E on 1 |
| 2 | (4) | $P(y)$ | $\forall$E on 2 |
| 1, 2 | (5) | $Q(y)$ | $\to$E on 4, 3 |
| 1, 2 | (6) | $\forall x\, Q(x)$ | $\forall$I on 5 ($y$ is not free in 1 or 2) |

**Example 10.** Why the proviso matters. Without it, we could "derive" $P(y) \vdash \forall x\, P(x)$ by
$\forall$-introduction straight from the assumption: "this number is even, so all numbers are even". The proviso
blocks it, because line 1 rests on the assumption $P(y)$, which has $y$ free.

Is this proof system strong enough to derive every logical consequence? That is exactly Gödel's completeness theorem,
the subject of [Chapter 11](11-Completeness-and-Compactness.md). It is also sound, by the same kind of induction as in
[Chapter 9](09-Proof-Systems-for-Propositional-Logic.md).

### No decision procedure

For propositional logic, truth tables decide $\models \varphi$ in finitely many steps. In 1936 Alonzo Church and Alan
Turing showed independently that **no algorithm decides validity for first-order logic** (once the language has a
binary relation symbol). This answered Hilbert's *Entscheidungsproblem* ("decision problem") in the negative; the
proof comes in [Chapter 14](14-Undecidability.md). What does exist, thanks to completeness, is a procedure that lists
all valid formulas one by one: if $\varphi$ is valid, the procedure eventually says so; if not, it may run forever.

## 10.5 What first-order logic cannot say

*Level: advanced.*

In 10.3 we could not find sentences for "finite", "connected" or "every element has finite order". Now we prove that
none exist. The tool is the **compactness theorem** for first-order logic, which will be proved in
[Chapter 11](11-Completeness-and-Compactness.md). We use it here as a preview:

**Compactness theorem (first-order).** A set of sentences has a model if every finite subset of it has a model.

It is the first-order version of 9.6, and its proof is the same idea: a contradiction can only use finitely many
premises.

### Finiteness

**Theorem.** If a set $\Gamma$ of sentences has arbitrarily large finite models (for every $n$ there is a finite model
with at least $n$ elements), then $\Gamma$ has an infinite model.

*Proof.* Let $\Gamma' = \Gamma \cup \{\lambda_n : n \ge 1\}$, where $\lambda_n$ says "at least $n$ elements". A finite
subset of $\Gamma'$ contains only finitely many $\lambda_n$; let $N$ be the largest $n$ among them. A model of $\Gamma$
with at least $N$ elements satisfies this finite subset. By compactness $\Gamma'$ has a model. That model satisfies
every $\lambda_n$, so it has at least $n$ elements for every $n$: it is infinite. $\square$

**Corollaries.**

1. There is no set of sentences whose models are exactly the finite structures (of a given language). Such a set
   would have arbitrarily large finite models, hence an infinite one.
2. There is no single sentence true in exactly the infinite structures. Its negation would be true in exactly the
   finite ones, contradicting 1. (The *set* $\{\lambda_n : n \ge 1\}$ does define "infinite"; one sentence cannot.)
3. "The group is finite" is not expressible by any set of sentences in the language of groups, since there are
   arbitrarily large finite groups, such as $\mathbb{Z}/n\mathbb{Z}$.

### Connectedness

**Theorem.** There is no set $\Gamma$ of sentences in the language $\{E\}$ whose models are exactly the connected
graphs.

*Proof.* Suppose there were. Add two new constant symbols $c$ and $d$, and let

$$
\Sigma \;=\; \Gamma \;\cup\; \{ \neg\pi_n(c, d) : n \ge 1 \},
$$

where $\pi_n(x, y)$ says "there is a path of length at most $n$ from $x$ to $y$". Take a finite subset of $\Sigma$; it
mentions $\neg\pi_n(c, d)$ only for $n \le N$, say. The path graph with vertices $0, 1, \dots, N + 1$ (edges between
consecutive numbers) is connected, so it is a model of $\Gamma$; interpret $c$ as $0$ and $d$ as $N + 1$, which are at
distance $N + 1$, so no path of length at most $N$ joins them. This satisfies the finite subset. By compactness
$\Sigma$ has a model: a graph satisfying $\Gamma$, hence connected, in which $c$ and $d$ are joined by no path of any
length $n$. That contradicts connectedness. $\square$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 520 120" role="img" aria-label="A path of vertices from c to d. Each finite set of conditions only asks that c and d are far apart, so a long enough path satisfies it. Compactness then gives a graph in which c and d are infinitely far apart.">
  <line x1="40" y1="50" x2="300" y2="50" stroke="currentColor" stroke-width="1.5"/>
  <line x1="300" y1="50" x2="340" y2="50" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/>
  <line x1="340" y1="50" x2="480" y2="50" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="40" cy="50" r="10" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="105" cy="50" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="170" cy="50" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="235" cy="50" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="300" cy="50" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="340" cy="50" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="410" cy="50" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="480" cy="50" r="10" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="40" y="30" font-size="14" text-anchor="middle" fill="currentColor">c</text>
  <text x="480" y="30" font-size="14" text-anchor="middle" fill="currentColor">d</text>
  <text x="260" y="95" font-size="12" text-anchor="middle" fill="currentColor">a path of length N + 1 satisfies "distance from c to d is more than N"</text>
</svg>
</div>

### Well-orders

A linear order is a **well-order** if every non-empty subset has a least element ([Chapter 6](06-Relations-and-Functions.md)).
$(\mathbb{N}, <)$ is one.

**Theorem.** There is no set of sentences in the language $\{<\}$ whose models are exactly the well-orders.

*Proof.* Suppose $\Gamma$ were such a set. Add constants $c_0, c_1, c_2, \dots$ and let
$\Sigma = \Gamma \cup \{c_{n+1} < c_n : n \ge 0\}$. A finite subset mentions only $c_0, \dots, c_N$; in the well-order
$(\mathbb{N}, <)$ interpret $c_i$ as $N - i$, so $c_{i+1} < c_i$ for $i < N$. By compactness $\Sigma$ has a model,
which is a well-order (it satisfies $\Gamma$) containing the infinite descending chain $c_0 > c_1 > c_2 > \dots$. The
set $\{c_n\}$ has no least element, a contradiction. $\square$

The same idea shows that no set of first-order sentences pins down $(\mathbb{N}, <)$, or $\mathcal{N}$, up to
isomorphism: there are always **nonstandard models** with "infinite" elements beyond all the standard numbers. They are
the subject of [Chapter 11](11-Completeness-and-Compactness.md).

### What is going on

In each case the property needs a quantifier over **sets** ("every subset has a least element"), over **all natural
numbers $n$ at once** ("a path of some length $n$"), or over **functions** ("there is no bijection with a proper part").
First-order logic quantifies only over elements of the domain.

**Second-order logic** allows quantifiers over sets and relations of elements as well. It can say all of these
things. For instance, "the domain is finite" is "every injective function from the domain to itself is surjective",
and Dedekind's induction axiom "every set containing 0 and closed under successor is everything" pins $\mathbb{N}$
down up to isomorphism. The price is high: second-order logic (with its standard semantics) has no sound and complete
proof system and no compactness theorem. Per Lindström proved in 1969 that, in a precise sense, first-order logic is
the strongest logic that still has both compactness and the downward Löwenheim-Skolem theorem
([Chapter 11](11-Completeness-and-Compactness.md)). Expressive power and good behaviour pull in opposite directions,
and first-order logic sits at the balance point. That is why mathematics is usually founded on first-order theories
such as ZFC.

There are finer tools for finite structures too. **Ehrenfeucht-Fraïssé games** show, for example, that no first-order
sentence in the empty signature is true in exactly the finite sets with an even number of elements: in fact any such
sentence with $k$ quantifiers has the same truth value in all finite sets with at least $k$ elements.

## A short history

Frege's *Begriffsschrift* (1879) already had quantifiers, and Charles Sanders Peirce and his student O. H. Mitchell
introduced quantifier notation independently in the 1880s. For decades logic mixed first-order and higher-order
quantifiers freely; Russell and Whitehead's *Principia Mathematica* (1910-1913) used a theory of types. The first-order
fragment was singled out gradually, in work of Löwenheim (1915), Skolem (1920s) and Hilbert and Ackermann, whose 1928
textbook *Grundzüge der theoretischen Logik* treated the "restricted functional calculus" (first-order logic) as a
system of its own and asked whether it was complete.

Tarski's definition of truth appeared in Polish in 1933, and in German as "Der Wahrheitsbegriff in den formalisierten
Sprachen" in 1935. Its precise model-theoretic form, with structures as we use them, was settled in the 1950s by
Tarski and his school. Church and Turing proved the undecidability of first-order validity in 1936.

## Check yourself

??? question "1. Find the free variables: (a) $\forall x\, (x < y)$ (b) $\exists z\, (x \cdot z = y) \land z = 0$ (c) $\forall x\, \exists y\, (x + y = 0)$"
    (a) $\{y\}$. (b) The first conjunct has $x, y$ free and $z$ bound; the second has $z$ free. So
    $\mathrm{FV} = \{x, y, z\}$, with $z$ occurring both bound and free. (c) None: it is a sentence.

??? question "2. In the language of arithmetic, which are terms, which are formulas, and which neither? (a) $S(x) + 0$ (b) $S(x) < 0$ (c) $\forall x\, S(x)$ (d) $\exists y\, (x = S(y))$"
    (a) A term (it names a number). (b) An atomic formula. (c) Neither: $\forall x$ must be followed by a formula,
    and $S(x)$ is a term. (d) A formula, with $x$ free, saying "$x$ is a successor", i.e. $x \neq 0$ in $\mathcal{N}$.

??? question "3. Let $\mathcal{G}$ be the graph with vertices $1, 2, 3, 4$ and edges $12, 23, 34, 41$ (a square). Decide: (a) $\exists x\, \exists y\, \exists z\, (E(x,y) \land E(y,z) \land E(x,z))$ (b) $\forall x\, \exists y\, \exists z\, (\neg(y = z) \land E(x,y) \land E(x,z))$ (c) $\forall x\, \forall y\, (x = y \lor E(x,y) \lor \exists z\, (E(x,z) \land E(z,y)))$"
    (a) False: the square has no triangle (any three vertices include a pair of opposite corners, such as 1 and 3,
    which are not joined). (b) True: each vertex has exactly two neighbours, which are different. (c) True: adjacent
    vertices are joined; opposite ones (1 and 3, or 2 and 4) have a common neighbour (2 for 1 and 3; 1 for 2 and 4).

??? question "4. Write sentences saying: (a) there are exactly two elements; (b) the function symbol $f$ (of arity 1) is injective; (c) in a ring, every element has a square root."
    (a) $\exists x\, \exists y\, \big(\neg(x = y) \land \forall z\, (z = x \lor z = y)\big)$.
    (b) $\forall x\, \forall y\, (f(x) = f(y) \to x = y)$.
    (c) $\forall x\, \exists y\, (y \cdot y = x)$.

??? question "5. Prove that $\exists x\, (P(x) \land Q(x)) \models \exists x\, P(x) \land \exists x\, Q(x)$, and give a countermodel to the converse."
    If $a$ satisfies $P$ and $Q$, then $a$ witnesses both $\exists x\, P(x)$ and $\exists x\, Q(x)$. For the converse,
    take the domain $\mathbb{N}$ with $P$ = "even" and $Q$ = "odd": there is an even number and there is an odd number,
    but no number is both.

??? question "6. Explain the capture problem in substituting $x + y$ for $z$ in $\forall y\, (z < y)$, and do the substitution correctly."
    The formula says "$z$ is below everything". Blind substitution gives $\forall y\, (x + y < y)$, in which the $y$ of
    the new term has been captured; it now says something about $x$ only, and something different. Correctly: rename
    the bound variable first, $\forall w\, (z < w)$, then substitute: $\forall w\, (x + y < w)$, "$x + y$ is below
    everything".

??? question "7. In $(\mathbb{Z}, +)$, show the set $\{0\}$ is definable but the set $\{1\}$ is not."
    $\{0\}$ is defined by $x + x = x$: the only integer with $2a = a$ is $0$. The map $h(n) = -n$ is an automorphism
    of $(\mathbb{Z}, +)$ (a bijection with $h(a + b) = h(a) + h(b)$). A definable set must be mapped to itself by every
    automorphism, but $h$ maps $\{1\}$ to $\{-1\}$. So $\{1\}$ is not definable.

??? question "8. Show that the group axioms do not entail $\forall x\, (x \cdot x = e)$, and do not entail its negation $\exists x\, \neg(x \cdot x = e)$."
    A group in which the sentence fails: $\mathbb{Z}/3\mathbb{Z}$ (with $+$ for $\cdot$ and $0$ for $e$), since
    $1 + 1 = 2 \neq 0$. A group in which it holds: $\mathbb{Z}/2\mathbb{Z}$, since $0 + 0 = 0$ and $1 + 1 = 0$. So
    neither the sentence nor its negation is a consequence of the group axioms: the axioms leave it open. (In
    [Chapter 12](12-Model-Theory.md) language, the theory of groups is not complete.)

??? question "9. Put $\exists x\, P(x) \to \forall y\, Q(y)$ into prenex normal form."
    Since $x$ is not free in $\forall y\, Q(y)$, the formula is equivalent to $\forall x\, (P(x) \to \forall y\, Q(y))$
    (an existential in the antecedent becomes a universal outside). Since $y$ is not free in $P(x)$, that is equivalent
    to $\forall x\, \forall y\, (P(x) \to Q(y))$.

??? question "10. Using compactness, show there is no set of sentences in the language of fields whose models are exactly the fields of positive characteristic."
    Suppose $\Gamma$ were one. Consider $\Gamma \cup \{\neg(\underline{p} = 0) : p \text{ prime}\}$. A finite subset
    mentions only primes up to some $N$; the field $\mathbb{Z}/q\mathbb{Z}$ for a prime $q > N$ has positive
    characteristic (so satisfies $\Gamma$) and $\underline{p} \neq 0$ for all primes $p \le N$. By compactness the whole
    set has a model: a field satisfying $\Gamma$, so of some positive characteristic $q$, yet with $\underline{q} \neq 0$.
    Contradiction.

??? question "11. Show that no set of sentences in the language of groups has as its models exactly the groups in which every element has finite order (torsion groups)."
    Suppose $\Gamma$ were one. Add a constant $c$ and the sentences $\neg(c^n = e)$ for $n = 1, 2, 3, \dots$ (where $c^n$
    is $c \cdot c \cdots c$). A finite subset mentions $n \le N$ only; in the torsion group $\mathbb{Z}/(N+1)\mathbb{Z}$
    take $c = 1$, whose order is $N + 1$, so $c^n \neq e$ for $1 \le n \le N$. By compactness there is a model: a
    torsion group with an element $c$ of infinite order. Contradiction.

## What you learned

- A first-order language has variables, connectives, $\forall$ (and $\exists$), $=$, and a signature of constant,
  function and relation symbols.
- Terms name objects; formulas say things. Variables are free or bound, sentences have no free variables, and
  substitution must avoid capture.
- A structure interprets the signature; Tarski's recursive definition says when a formula is satisfied, translating
  each symbol into the metalanguage.
- Isomorphisms preserve truth, so automorphisms show that sets are not definable.
- Groups, orders, graphs and fields have first-order axioms; arithmetic can express Goldbach's conjecture as a
  sentence that is true or false in $\mathcal{N}$.
- Logical consequence means truth in every model; a countermodel shows a non-consequence. First-order validity has
  sound proof rules, but no decision procedure.
- With compactness, "finite", "connected", "well-ordered" and "torsion" are not first-order expressible.

**Next:** [Chapter 11](11-Completeness-and-Compactness.md), where Gödel's completeness theorem shows that the proof
rules derive every logical consequence, and compactness produces numbers larger than every natural number.

## Further reading

- H. B. Enderton, *A Mathematical Introduction to Logic*, 2nd edition, 2001. Chapter 2 is the standard careful
  treatment of everything here.
- H.-D. Ebbinghaus, J. Flum and W. Thomas, *Mathematical Logic*, 3rd edition, 2021. Includes Lindström's theorem.
- W. Hodges, *A Shorter Model Theory*, 1997. Chapters 1 and 2 for structures, definability and automorphisms.
- A. Tarski, "Der Wahrheitsbegriff in den formalisierten Sprachen", *Studia Philosophica* 1, 1935 (English
  translation "The concept of truth in formalized languages" in *Logic, Semantics, Metamathematics*, 1956).
- P. Lindström, "On extensions of elementary logic", *Theoria* 35, 1969.
- S. Shapiro, *Foundations without Foundationalism: A Case for Second-Order Logic*, 1991. For the other side of the
  first-order versus second-order debate.
- On this site: the Topics lessons [Predicate logic](../../topics/logic/level-8/01-predicate-logic.md) and
  [Axioms](../../topics/logic/level-8/02-axioms.md); the U of T guides
  [MAT137 Unit 1: Logic, Sets & Proofs](../../uoft/MAT137/unit01.md) and
  [MAT158H1 Unit 1: Logic, Sets & Proof](../../uoft/MAT158H1/unit01.md); [Algebra, Chapter 13](../algebra/13-Groups.md)
  for groups; [Calculus, Chapter 18](../calculus/18-The-Real-Numbers.md) for why completeness of the reals is not
  first-order.
