# Glossary

*Short definitions of the terms this book uses, from A to Z, each with a link to the chapter that teaches it.*

## A

**Accessibility relation**
In a Kripke frame for modal logic, the relation $R$ on worlds: $wRv$ means world $v$ is possible from the point of view of $w$. Properties of $R$ (reflexive, transitive, symmetric) match modal axioms.
See [Chapter 19](19-Other-Logics.md#192-modal-logic).

**Ackermann function**
The function with $A(0, n) = n + 1$, $A(m + 1, 0) = A(m, 1)$ and $A(m + 1, n + 1) = A(m, A(m + 1, n))$. It is total and computable but grows faster than every primitive recursive function, so it is not primitive recursive.
See [Chapter 15](15-Recursive-Functions-and-Computability.md#152-ackermanns-function).

**Affine function**
A Boolean function that, with T as 1 and F as 0, has the form $c_0 + c_1 x_1 + \dots + c_n x_n$ mod 2. It is one of the five properties in Post's theorem.
See [Chapter 2](02-Propositional-Logic.md#25-complete-sets-of-connectives).

**Affirming the consequent**
The fallacy of reasoning from $p \to q$ and $q$ to $p$. It confuses a conditional with its converse.
See [Chapter 1](01-Statements-and-Truth.md#14-if-then) and [Chapter 2](02-Propositional-Logic.md#22-tautologies-contradictions-equivalence).

**Aleph numbers**
The infinite cardinals in order of size: $\aleph_0 = |\mathbb{N}|$, the smallest infinite cardinal, then $\aleph_1$ (the least uncountable cardinal), $\aleph_2$, and so on.
See [Chapter 7](07-Infinity-and-Cardinality.md#72-countable-sets) and [Chapter 8](08-Axiomatic-Set-Theory.md#83-the-natural-numbers-as-sets).

**Algebraic number**
A real (or complex) number that is a root of a nonzero polynomial with integer coefficients, such as $\sqrt 2$. The algebraic numbers form a countable set.
See [Chapter 7](07-Infinity-and-Cardinality.md#72-countable-sets).

**Algorithm**
A finite list of exact instructions that can be followed mechanically, step by step, with no insight needed, such as Euclid's algorithm. The Church-Turing thesis makes the idea precise.
See [Chapter 13](13-Algorithms-and-Turing-Machines.md#131-what-is-an-algorithm).

**Antecedent**
The hypothesis $p$ of a conditional $p \to q$, the "if" part.
See [Chapter 1](01-Statements-and-Truth.md#14-if-then).

**Antisymmetric relation**
A relation $R$ in which $a \mathrel{R} b$ and $b \mathrel{R} a$ together imply $a = b$, such as $\le$ or $\subseteq$.
See [Chapter 6](06-Relations-and-Functions.md#61-relations).

**Argument**
A list of premises and a conclusion. It is valid if every assignment that makes all the premises true makes the conclusion true.
See [Chapter 2](02-Propositional-Logic.md#22-tautologies-contradictions-equivalence).

**Arithmetical hierarchy**
The classification of sets of numbers by the quantifiers needed to define them from a decidable relation: $\exists$ gives $\Sigma_1$ (the c.e. sets), $\forall$ gives $\Pi_1$, $\exists\forall$ gives $\Sigma_2$, and so on.
See [Chapter 15](15-Recursive-Functions-and-Computability.md#154-computably-enumerable-sets).

**Arithmetisation of syntax**
Gödel's idea of coding formulas, proofs and other syntactic objects as numbers, so that statements about syntax ("this formula is provable") become statements about numbers.
See [Chapter 17](17-Arithmetic-and-Peano.md#173-coding-godel-numbering).

**Arity**
The number of inputs of a function symbol or relation symbol: $+$ and $<$ have arity 2, the successor $S$ has arity 1.
See [Chapter 10](10-First-Order-Logic.md#101-languages-terms-and-formulas).

**Assignment**
In propositional logic, a choice of T or F for each variable, one row of a truth table (also called a valuation). In first-order logic, a function from the variables to the domain of a structure.
See [Chapter 2](02-Propositional-Logic.md#22-tautologies-contradictions-equivalence) and [Chapter 10](10-First-Order-Logic.md#102-structures-and-satisfaction).

**Atomic formula**
A first-order formula with no connectives or quantifiers: $t_1 = t_2$ or $R(t_1, \dots, t_n)$ for terms $t_i$ and a relation symbol $R$.
See [Chapter 10](10-First-Order-Logic.md#101-languages-terms-and-formulas).

**Automorphism**
An isomorphism from a structure to itself. Automorphisms map definable sets to themselves, which is the main tool for showing a set is not definable.
See [Chapter 10](10-First-Order-Logic.md#102-structures-and-satisfaction).

**Ax-Grothendieck theorem**
Every injective polynomial map $\mathbb{C}^n \to \mathbb{C}^n$ is surjective. Model theory proves it by checking the finite case and transferring it.
See [Chapter 12](12-Model-Theory.md#123-complete-theories-and-categoricity).

**Axiom**
A statement accepted without proof as a starting point. In a formal system, a formula that may appear in a derivation at any step.
See [Chapter 4](04-Proofs.md#41-what-a-proof-is).

**Axiom of choice**
For every family of nonempty sets there is a choice function, picking one element from each set. It is independent of ZF and equivalent to the well-ordering theorem and to Zorn's lemma.
See [Chapter 8](08-Axiomatic-Set-Theory.md#84-the-axiom-of-choice) and [Chapter 6](06-Relations-and-Functions.md#65-inverses-and-composition).

**Axiom scheme (schema)**
An infinite family of axioms, one for each formula, written as a single pattern. Separation and replacement in ZF and induction in Peano arithmetic are schemas.
See [Chapter 8](08-Axiomatic-Set-Theory.md#82-the-zf-axioms-one-by-one).

**Axiomatisable**
A class of structures is axiomatisable if it is exactly the class of models of some theory $T$, and finitely axiomatisable if $T$ can be taken finite.
See [Chapter 12](12-Model-Theory.md#121-theories-and-models).

## B

**Back-and-forth**
Cantor's method for building an isomorphism between two countable structures by alternately extending a finite partial isomorphism to cover the next element on each side. It shows any two countable dense linear orders without endpoints are isomorphic.
See [Chapter 12](12-Model-Theory.md#124-dense-linear-orders-cantors-back-and-forth).

**Banach-Tarski paradox**
Using the axiom of choice, a solid ball can be cut into finitely many pieces that can be moved rigidly and reassembled into two balls of the same size. The pieces are not measurable, so volume is not contradicted.
See [Chapter 8](08-Axiomatic-Set-Theory.md#85-the-banach-tarski-paradox).

**Base case**
The first part of a proof by induction: showing $P(0)$ (or the starting case) is true.
See [Chapter 4](04-Proofs.md#45-induction).

**Bell number**
The number of partitions of an $n$-element set, equivalently the number of equivalence relations on it: $1, 1, 2, 5, 15, 52, \dots$
See [Chapter 6](06-Relations-and-Functions.md#62-equivalence-relations-and-partitions).

**Beta function (Gödel's)**
A function $\beta(a, b, i)$ defined with only addition, multiplication and remainders, such that every finite sequence of numbers is $\beta(a, b, 0), \beta(a, b, 1), \dots$ for some $a$ and $b$. It lets arithmetic talk about sequences, and so represent recursion.
See [Chapter 17](17-Arithmetic-and-Peano.md#174-representability-of-computable-functions).

**Beta reduction**
The single computation rule of the lambda calculus: $(\lambda x.\, M)\, N$ reduces to $M$ with $N$ substituted for $x$.
See [Chapter 13](13-Algorithms-and-Turing-Machines.md#135-other-models-and-their-equivalence).

**BHK interpretation**
The Brouwer-Heyting-Kolmogorov reading of the connectives in terms of proofs: a proof of $A \wedge B$ is a proof of each, a proof of $A \to B$ is a method turning proofs of $A$ into proofs of $B$, and so on. It is the meaning behind intuitionistic logic.
See [Chapter 19](19-Other-Logics.md#191-intuitionistic-logic-and-constructive-mathematics).

**Big five**
The five subsystems of second-order arithmetic ($\mathrm{RCA}_0$, $\mathrm{WKL}_0$, $\mathrm{ACA}_0$, $\mathrm{ATR}_0$ and $\Pi^1_1\text{-}\mathrm{CA}_0$) to which most theorems of ordinary mathematics turn out to be provable in or equivalent.
See [Chapter 20](20-Where-Logic-Goes.md#203-reverse-mathematics).

**Big O**
$f = O(g)$ means there are constants $c$ and $n_0$ with $f(n) \le c\, g(n)$ for all $n \ge n_0$: $f$ grows no faster than $g$, up to a constant factor.
See [Chapter 16](16-Complexity.md#161-counting-steps-and-the-class-p).

**Bijection**
A function that is both injective and surjective: a perfect matching between two sets. Two sets have the same cardinality exactly when there is a bijection between them.
See [Chapter 6](06-Relations-and-Functions.md#64-functions-as-sets-of-pairs) and [Chapter 7](07-Infinity-and-Cardinality.md#71-same-size-means-bijection).

**Biconditional**
The statement $p \leftrightarrow q$, "$p$ if and only if $q$", true exactly when $p$ and $q$ have the same truth value.
See [Chapter 1](01-Statements-and-Truth.md#15-if-and-only-if).

**Block**
In a nonstandard model of arithmetic, the set of elements at a standard distance from a nonstandard element $c$: a copy of $\mathbb{Z}$. The nonstandard part is a dense, endless line of such blocks.
See [Chapter 11](11-Completeness-and-Compactness.md#114-nonstandard-models-and-infinitesimals) and [Chapter 17](17-Arithmetic-and-Peano.md#172-what-pa-proves).

**Boolean algebra**
The algebra of truth values (or of subsets of a set) under "and", "or" and "not", obeying the laws of logic: commutative, associative, distributive, De Morgan and the rest.
See [Chapter 2](02-Propositional-Logic.md#23-the-laws-of-logic) and [Chapter 5](05-Sets.md#52-operations-and-venn-diagrams).

**Boolean function**
A function from $n$-tuples of truth values to truth values. There are $2^{2^n}$ of them, and every one is given by some formula.
See [Chapter 2](02-Propositional-Logic.md#24-normal-forms).

**Bound variable**
An occurrence of a variable inside the scope of a quantifier on that variable, as $x$ in $\forall x\, P(x)$. A bound variable is a placeholder and can be renamed.
See [Chapter 3](03-Quantifiers.md#31-for-all-there-exists) and [Chapter 10](10-First-Order-Logic.md#101-languages-terms-and-formulas).

**Bounded formula**
A formula of arithmetic in which every quantifier is bounded, of the form $\forall x < t$ or $\exists x < t$; also called a $\Delta_0$ formula. Its truth can be checked by a finite search.
See [Chapter 17](17-Arithmetic-and-Peano.md#172-what-pa-proves).

**Busy beaver**
A Turing machine with $n$ states that runs longest (or writes the most 1s) before halting, among all that halt. The busy beaver functions $S(n)$ and $\Sigma(n)$ grow faster than every computable function; $S(5) = 47{,}176{,}870$.
See [Chapter 14](14-Undecidability.md#146-busy-beavers).

## C

**Cantor normal form**
The way of writing an ordinal below $\varepsilon_0$ as a finite sum of powers of $\omega$ with decreasing exponents, themselves in Cantor normal form. It is used to prove Goodstein's theorem.
See [Chapter 17](17-Arithmetic-and-Peano.md#175-goodsteins-theorem).

**Cantor pairing function**
The bijection $\mathbb{N} \times \mathbb{N} \to \mathbb{N}$ that lists pairs along diagonals: $(v, w) \mapsto \frac{(v + w)(v + w + 1)}{2} + v$ (or a variant). It shows $\mathbb{N} \times \mathbb{N}$ is countable and is used to code pairs as numbers.
See [Chapter 7](07-Infinity-and-Cardinality.md#72-countable-sets).

**Cantor set**
The set left after repeatedly removing the open middle third of every interval, starting from $[0, 1]$. It has length 0 yet is uncountable.
See [Chapter 7](07-Infinity-and-Cardinality.md#73-cantors-diagonal-argument).

**Cantor's diagonal argument**
The proof that $\mathbb{R}$ is uncountable: from any list of reals, build a number that differs from the $n$-th one in its $n$-th digit, so it is not on the list. The same idea drives Cantor's theorem, the halting problem and Gödel's theorems.
See [Chapter 7](07-Infinity-and-Cardinality.md#73-cantors-diagonal-argument).

**Cantor's paradox**
There is no set of all sets: if $V$ were one, $\mathcal{P}(V) \subseteq V$ would contradict Cantor's theorem.
See [Chapter 7](07-Infinity-and-Cardinality.md#74-cantors-theorem).

**Cantor's theorem**
For every set $A$, $|A| < |\mathcal{P}(A)|$: no function from $A$ onto its power set exists. So there is an endless ladder of larger infinities.
See [Chapter 7](07-Infinity-and-Cardinality.md#74-cantors-theorem).

**Cardinal**
An ordinal that is not in bijection with any smaller ordinal. Cardinals measure the sizes of sets: the finite cardinals are the natural numbers, and the infinite ones are $\aleph_0, \aleph_1, \dots$
See [Chapter 8](08-Axiomatic-Set-Theory.md#83-the-natural-numbers-as-sets).

**Cardinality**
The size of a set, written $|A|$. For a finite set it is the number of elements; in general two sets have the same cardinality when there is a bijection between them.
See [Chapter 5](05-Sets.md#51-sets-elements-and-subsets) and [Chapter 7](07-Infinity-and-Cardinality.md#71-same-size-means-bijection).

**Cardinality of the continuum**
The cardinality of $\mathbb{R}$, written $\mathfrak{c}$ or $2^{\aleph_0}$. It equals $|\mathcal{P}(\mathbb{N})|$.
See [Chapter 7](07-Infinity-and-Cardinality.md#75-the-schroder-bernstein-theorem).

**Cartesian product**
The set $A \times B$ of all ordered pairs $(a, b)$ with $a \in A$ and $b \in B$. It has $|A| \cdot |B|$ elements and is not commutative.
See [Chapter 5](05-Sets.md#54-cartesian-products).

**Certificate**
A short string that proves an input is a yes-instance and can be checked quickly, such as a satisfying assignment for a formula. Also called a witness. NP is the class of problems with polynomial-size certificates checkable in polynomial time.
See [Chapter 16](16-Complexity.md#162-np-and-certificates).

**Chain rule (hypothetical syllogism)**
The valid argument from $p \to q$ and $q \to r$ to $p \to r$.
See [Chapter 2](02-Propositional-Logic.md#22-tautologies-contradictions-equivalence).

**Characteristic function**
For a set or relation $R$, the function $\chi_R$ that is 1 on members of $R$ and 0 elsewhere. A set is primitive recursive (or computable) when its characteristic function is.
See [Chapter 15](15-Recursive-Functions-and-Computability.md#151-primitive-recursive-functions).

**Choice function**
For a family $F$ of nonempty sets, a function $c$ with $c(X) \in X$ for every $X$ in $F$.
See [Chapter 8](08-Axiomatic-Set-Theory.md#84-the-axiom-of-choice).

**Church numerals**
The coding of natural numbers in the lambda calculus: $n$ is the term $\lambda f.\, \lambda x.\, f(f(\cdots f(x)\cdots))$ that applies $f$ to $x$ exactly $n$ times.
See [Chapter 13](13-Algorithms-and-Turing-Machines.md#135-other-models-and-their-equivalence).

**Church-Turing thesis**
A function on the natural numbers is computable by an algorithm, in the informal sense, if and only if it is computable by a Turing machine. It is a thesis, not a theorem, because "algorithm" in the informal sense has no formal definition.
See [Chapter 13](13-Algorithms-and-Turing-Machines.md#133-the-church-turing-thesis).

**Clause**
A disjunction of literals, such as $p \vee \neg q \vee r$ (a disjunctive clause), or a conjunction of literals (a conjunctive clause). A CNF formula is an "and" of disjunctive clauses.
See [Chapter 2](02-Propositional-Logic.md#24-normal-forms) and [Chapter 16](16-Complexity.md#163-np-completeness-and-the-cook-levin-theorem).

**Clique**
A set of vertices in a graph every two of which are joined by an edge. The problem CLIQUE (is there a clique of size $k$?) is NP-complete.
See [Chapter 16](16-Complexity.md#164-a-reduction-worked-in-full-3-sat-to-clique).

**Closed term**
A term with no variables, built only from constant and function symbols, such as $S(S(0))$. Henkin's proof builds its model out of closed terms.
See [Chapter 11](11-Completeness-and-Compactness.md#112-henkins-proof).

**Codomain**
For a function $f : A \to B$, the set $B$ in which the values are allowed to lie. The image may be smaller.
See [Chapter 6](06-Relations-and-Functions.md#64-functions-as-sets-of-pairs).

**Cohen real**
A new function $g : \mathbb{N} \to \{0, 1\}$ added to a model of set theory by forcing with finite partial functions. It is the simplest example of forcing.
See [Chapter 20](20-Where-Logic-Goes.md#202-forcing).

**Combinational circuit**
A network of logic gates with no loops. Each output is a Boolean function of the inputs.
See [Chapter 2](02-Propositional-Logic.md#26-logic-gates-and-circuits).

**Compactness theorem**
A set of formulas has a model if and only if every finite subset has one. It holds for propositional logic and for first-order logic, and is the main tool for building nonstandard models.
See [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#96-compactness) and [Chapter 11](11-Completeness-and-Compactness.md#113-the-compactness-theorem).

**Comparable elements**
Elements $a$, $b$ of a partial order with $a \preceq b$ or $b \preceq a$.
See [Chapter 6](06-Relations-and-Functions.md#63-orders).

**Complement**
The set $U \setminus A$ of elements of the universe $U$ not in $A$, written $A^c$ or $\overline{A}$.
See [Chapter 5](05-Sets.md#52-operations-and-venn-diagrams).

**Complement graph**
The graph on the same vertices with an edge exactly where the original graph has none. A clique in one is an independent set in the other.
See [Chapter 16](16-Complexity.md#164-a-reduction-worked-in-full-3-sat-to-clique).

**Complete set of connectives**
A set of connectives from which every Boolean function can be built, such as $\{\neg, \wedge\}$ or $\{\uparrow\}$ (NAND alone). Also called functionally complete.
See [Chapter 2](02-Propositional-Logic.md#25-complete-sets-of-connectives).

**Complete theory**
A consistent theory that, for every sentence $\sigma$, proves (or entails) either $\sigma$ or $\neg\sigma$. The theory of any one structure is complete.
See [Chapter 12](12-Model-Theory.md#121-theories-and-models) and [Chapter 18](18-Godels-Incompleteness-Theorems.md#the-setting).

**Completeness theorem**
Every semantic consequence is derivable: if $\Gamma \models \varphi$ then $\Gamma \vdash \varphi$. It holds for propositional logic and, by Gödel's 1929 theorem, for first-order logic. Not to be confused with completeness of a theory.
See [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#95-completeness) and [Chapter 11](11-Completeness-and-Compactness.md#111-godels-completeness-theorem).

**Composition**
For functions $f : A \to B$ and $g : B \to C$, the function $g \circ f$ with $(g \circ f)(a) = g(f(a))$. Relations compose the same way.
See [Chapter 6](06-Relations-and-Functions.md#65-inverses-and-composition).

**Computable function**
A function that some Turing machine computes: on input $x$ it halts with output $f(x)$. Partial computable functions may be undefined where the machine runs forever.
See [Chapter 13](13-Algorithms-and-Turing-Machines.md#132-turing-machines).

**Computably axiomatised**
A theory whose set of axioms can be decided (or listed) by an algorithm, like PA and ZFC. Also called recursively axiomatised.
See [Chapter 12](12-Model-Theory.md#123-complete-theories-and-categoricity) and [Chapter 18](18-Godels-Incompleteness-Theorems.md#the-setting).

**Computably enumerable (c.e.)**
A set for which some machine halts and says yes on exactly its members (and runs forever otherwise); equivalently, a set an algorithm can list. Also called semi-decidable, recognisable or recursively enumerable. The halting set is c.e. but not decidable.
See [Chapter 14](14-Undecidability.md#141-the-halting-problem) and [Chapter 15](15-Recursive-Functions-and-Computability.md#154-computably-enumerable-sets).

**Conclusion**
The "then" part $q$ of a conditional $p \to q$ (also called the consequent); or the final statement of an argument, which should follow from the premises.
See [Chapter 1](01-Statements-and-Truth.md#14-if-then) and [Chapter 2](02-Propositional-Logic.md#22-tautologies-contradictions-equivalence).

**Conditional**
The statement $p \to q$, "if $p$ then $q$", false only when $p$ is true and $q$ false. Also called an implication or material conditional.
See [Chapter 1](01-Statements-and-Truth.md#14-if-then).

**Configuration**
A complete snapshot of a Turing machine at one moment: tape contents, head position and state.
See [Chapter 13](13-Algorithms-and-Turing-Machines.md#132-turing-machines).

**Congruence**
An equivalence relation that respects the operations and relations of a structure, so that they can be defined on classes. In Henkin's proof, provable equality of closed terms is a congruence.
See [Chapter 11](11-Completeness-and-Compactness.md#112-henkins-proof).

**Conjecture**
A statement believed to be true but not yet proved, such as the Goldbach conjecture.
See [Chapter 4](04-Proofs.md#41-what-a-proof-is).

**Conjunction**
The statement $p \wedge q$, "$p$ and $q$", true exactly when both are true.
See [Chapter 1](01-Statements-and-Truth.md#12-and-or-not).

**Conjunctive normal form (CNF)**
A formula that is a conjunction of disjunctive clauses, an "and of ors". Every formula is equivalent to one.
See [Chapter 2](02-Propositional-Logic.md#24-normal-forms).

**Connective**
An operation that builds a statement from statements, such as $\neg$, $\wedge$, $\vee$, $\to$ and $\leftrightarrow$.
See [Chapter 1](01-Statements-and-Truth.md#12-and-or-not).

**coNP**
The class of problems whose complements are in NP: those where no-instances have short, quickly checkable certificates, such as "is this formula a tautology?".
See [Chapter 16](16-Complexity.md#162-np-and-certificates).

**Consequent**
The "then" part $q$ of a conditional $p \to q$.
See [Chapter 1](01-Statements-and-Truth.md#14-if-then).

**Conservative extension**
A stronger theory that proves no new sentences of a weaker language: $\mathrm{ACA}_0$ proves exactly the same arithmetical sentences as PA.
See [Chapter 20](20-Where-Logic-Goes.md#203-reverse-mathematics).

**Consistent**
A set of formulas is consistent if it does not derive both some $\varphi$ and $\neg\varphi$ (equivalently, it does not derive everything); otherwise it is inconsistent.
See [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#93-a-hilbert-system-and-the-deduction-theorem) and [Chapter 11](11-Completeness-and-Compactness.md#111-godels-completeness-theorem).

**Constant symbol**
A symbol of a first-order language that names one object, such as $0$ or $e$.
See [Chapter 10](10-First-Order-Logic.md#101-languages-terms-and-formulas).

**Constructible universe**
Gödel's model $L$ of set theory, in which every set is built in stages by explicit definitions. In $L$ the axiom of choice and the continuum hypothesis hold.
See [Chapter 7](07-Infinity-and-Cardinality.md#76-the-continuum-hypothesis).

**Constructive proof**
A proof of existence that exhibits the object claimed to exist. Constructive mathematics asks for such proofs throughout, and its logic is intuitionistic logic.
See [Chapter 19](19-Other-Logics.md#191-intuitionistic-logic-and-constructive-mathematics).

**Contingent formula**
A formula that is neither a tautology nor a contradiction: true under some assignments and false under others.
See [Chapter 2](02-Propositional-Logic.md#22-tautologies-contradictions-equivalence).

**Continuum hypothesis (CH)**
There is no set whose size lies strictly between $|\mathbb{N}|$ and $|\mathbb{R}|$; equivalently $2^{\aleph_0} = \aleph_1$. Gödel (1938) and Cohen (1963) showed it is independent of ZFC.
See [Chapter 7](07-Infinity-and-Cardinality.md#76-the-continuum-hypothesis).

**Contradiction**
A formula false under every assignment, such as $p \wedge \neg p$. In a proof, a statement of the form $R \wedge \neg R$.
See [Chapter 2](02-Propositional-Logic.md#22-tautologies-contradictions-equivalence).

**Contrapositive**
The contrapositive of $p \to q$ is $\neg q \to \neg p$. A conditional and its contrapositive always have the same truth value.
See [Chapter 1](01-Statements-and-Truth.md#14-if-then) and [Chapter 4](04-Proofs.md#43-contrapositive-and-contradiction).

**Converse**
The converse of $p \to q$ is $q \to p$. It can be false when the original is true.
See [Chapter 1](01-Statements-and-Truth.md#14-if-then).

**Cook-Levin theorem**
SAT is NP-complete: every problem in NP reduces to satisfiability of a propositional formula in polynomial time. It was proved by Cook (1971) and independently by Levin.
See [Chapter 16](16-Complexity.md#163-np-completeness-and-the-cook-levin-theorem).

**Corollary**
A result that follows quickly from a theorem.
See [Chapter 4](04-Proofs.md#41-what-a-proof-is).

**Countable**
A set that is finite or countably infinite, so that its elements can be listed $a_0, a_1, a_2, \dots$ $\mathbb{Z}$ and $\mathbb{Q}$ are countable; $\mathbb{R}$ is not.
See [Chapter 7](07-Infinity-and-Cardinality.md#72-countable-sets).

**Countable choice**
The weak form of the axiom of choice that allows choosing one element from each of countably many nonempty sets. It is needed to show a countable union of countable sets is countable.
See [Chapter 7](07-Infinity-and-Cardinality.md#72-countable-sets).

**Countable transitive model**
A countable model $M$ of ZFC whose membership is the real $\in$ and that contains every element of its elements. Forcing usually starts from one.
See [Chapter 20](20-Where-Logic-Goes.md#202-forcing).

**Countably infinite**
A set with the same cardinality as $\mathbb{N}$, that is, of size $\aleph_0$.
See [Chapter 7](07-Infinity-and-Cardinality.md#72-countable-sets).

**Counterexample**
An object for which a claimed universal statement fails. One counterexample disproves "for all $x$, $P(x)$".
See [Chapter 3](03-Quantifiers.md#31-for-all-there-exists) and [Chapter 4](04-Proofs.md#46-counterexamples).

**Countermodel**
A valuation (or structure) that makes the premises true and the conclusion false, showing that a consequence fails.
See [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#91-syntax-and-semantics).

**Counterfactual**
A conditional whose hypothesis is known to be false, like "if I had left earlier, I would have caught the train". Its truth is not determined by truth values alone, so the material conditional does not capture it.
See [Chapter 1](01-Statements-and-Truth.md#14-if-then).

**Cumulative hierarchy**
The levels $V_0 = \varnothing$, $V_{\alpha + 1} = \mathcal{P}(V_\alpha)$, and unions at limits, through all the ordinals. Given foundation, every set lies in some $V_\alpha$.
See [Chapter 8](08-Axiomatic-Set-Theory.md#82-the-zf-axioms-one-by-one).

**Curry-Howard correspondence**
The match between logic and programming: propositions are types, proofs are programs, and simplifying a proof is running a program. For example a proof of $A \to B$ is a function from $A$ to $B$.
See [Chapter 19](19-Other-Logics.md#195-the-curry-howard-correspondence).

**Currying**
Turning a function of two inputs into a function of the first input whose value is a function of the second. The s-m-n theorem is the computable version.
See [Chapter 15](15-Recursive-Functions-and-Computability.md#155-kleenes-recursion-theorem-and-quines).

## D

**De Bruijn criterion**
The design principle that a proof assistant's correctness should rest only on a small trusted kernel that checks every proof, not on the tactics, libraries or user.
See [Chapter 19](19-Other-Logics.md#194-type-theory-and-proof-assistants).

**De Morgan's laws**
$\neg(p \wedge q) \equiv \neg p \vee \neg q$ and $\neg(p \vee q) \equiv \neg p \wedge \neg q$. For sets, the complement of a union is the intersection of the complements, and vice versa.
See [Chapter 1](01-Statements-and-Truth.md#13-truth-tables) and [Chapter 5](05-Sets.md#52-operations-and-venn-diagrams).

**Decidable set**
A set for which some Turing machine halts on every input and answers correctly whether the input is a member. Also called recursive or computable.
See [Chapter 13](13-Algorithms-and-Turing-Machines.md#132-turing-machines).

**Decidable theory**
A theory for which an algorithm decides, for each sentence, whether the theory proves it. Every complete, computably axiomatised theory is decidable.
See [Chapter 12](12-Model-Theory.md#123-complete-theories-and-categoricity).

**Dedekind cut**
A way of building the real numbers: a real is a downward-closed set of rationals with no greatest element (other than $\varnothing$ and $\mathbb{Q}$).
See [Chapter 7](07-Infinity-and-Cardinality.md#75-the-schroder-bernstein-theorem).

**Dedekind-infinite**
A set that has the same size as a proper subset of itself, as $\mathbb{N}$ does with the even numbers.
See [Chapter 7](07-Infinity-and-Cardinality.md#71-same-size-means-bijection).

**Deduction theorem**
If $\Gamma \cup \{\varphi\} \vdash \psi$ then $\Gamma \vdash \varphi \to \psi$. It justifies proving an implication by assuming its hypothesis.
See [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#93-a-hilbert-system-and-the-deduction-theorem).

**Deductively closed**
A set $\Delta$ of formulas that contains everything it derives: if $\Delta \vdash \varphi$ then $\varphi \in \Delta$. Maximal consistent sets are deductively closed.
See [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#95-completeness).

**Definable set**
A subset of a structure of the form $\{a : \mathcal{M} \models \varphi[a]\}$ for some formula $\varphi$. For example the even numbers are definable in $(\mathbb{N}, +)$.
See [Chapter 10](10-First-Order-Logic.md#102-structures-and-satisfaction).

**Definition**
A precise statement of what a word means, such as "$n$ is even if $n = 2k$ for some integer $k$". In a proof, definitions do much of the work.
See [Chapter 4](04-Proofs.md#41-what-a-proof-is).

**Dense linear order (DLO)**
A linear order with no endpoints in which between any two elements there is a third, such as $(\mathbb{Q}, <)$ or $(\mathbb{R}, <)$. Its theory is $\aleph_0$-categorical, complete, decidable and has quantifier elimination.
See [Chapter 10](10-First-Order-Logic.md#103-examples-groups-orders-arithmetic-graphs) and [Chapter 12](12-Model-Theory.md#124-dense-linear-orders-cantors-back-and-forth).

**Dense set (forcing)**
A set $D$ of conditions such that every condition can be strengthened to one in $D$.
See [Chapter 20](20-Where-Logic-Goes.md#202-forcing).

**Denying the antecedent**
The fallacy of reasoning from $p \to q$ and $\neg p$ to $\neg q$.
See [Chapter 2](02-Propositional-Logic.md#22-tautologies-contradictions-equivalence).

**Dependent choice**
A weak form of the axiom of choice: if every element has some $R$-successor, there is an infinite sequence $a_0 \mathrel{R} a_1 \mathrel{R} a_2 \cdots$ It is enough for most of analysis.
See [Chapter 8](08-Axiomatic-Set-Theory.md#84-the-axiom-of-choice).

**Dependent types**
Types that depend on terms, such as "vectors of length $n$". They let a type express a statement about the term, and are central to intuitionistic type theory and proof assistants.
See [Chapter 19](19-Other-Logics.md#194-type-theory-and-proof-assistants).

**Derivation**
A finite list of formulas, each an axiom, a hypothesis, or obtained from earlier ones by a rule, ending with the formula derived. $\Gamma \vdash \varphi$ means there is a derivation of $\varphi$ from $\Gamma$.
See [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#93-a-hilbert-system-and-the-deduction-theorem) and [Chapter 11](11-Completeness-and-Compactness.md#111-godels-completeness-theorem).

**Diagonal halting set**
The set $K = \{e : \varphi_e(e) \text{ is defined}\}$ of programs that halt on their own index. It is c.e. but not decidable.
See [Chapter 15](15-Recursive-Functions-and-Computability.md#154-computably-enumerable-sets).

**Diagonal lemma**
For every formula $\psi(x)$ there is a sentence $G$ with $T \vdash G \leftrightarrow \psi(\ulcorner G \urcorner)$: a sentence that says of itself that it has property $\psi$. It is the engine of Gödel's and Tarski's theorems.
See [Chapter 18](18-Godels-Incompleteness-Theorems.md#181-the-diagonal-lemma).

**Diagonalisation**
For a formula $\varphi(x)$, the sentence obtained by substituting its own code: $\varphi(\ulcorner \varphi \urcorner)$. More broadly, the self-application trick behind Cantor's argument, the halting problem and quines.
See [Chapter 18](18-Godels-Incompleteness-Theorems.md#181-the-diagonal-lemma).

**Difference (of sets)**
$A \setminus B = \{x : x \in A \text{ and } x \notin B\}$, the elements of $A$ not in $B$.
See [Chapter 5](05-Sets.md#52-operations-and-venn-diagrams).

**Diophantine set**
A set of natural numbers $\{x : \exists \vec y\; p(x, \vec y) = 0\}$ for some polynomial $p$ with integer coefficients. By the MRDP theorem, these are exactly the c.e. sets.
See [Chapter 14](14-Undecidability.md#144-hilberts-tenth-problem).

**Direct proof**
To prove $P \to Q$ directly, assume $P$ and reason forward until you reach $Q$.
See [Chapter 4](04-Proofs.md#42-direct-proof).

**Discharged assumption**
In natural deduction, a temporary assumption that a rule (such as $\to$-introduction) closes off, so the conclusion no longer depends on it.
See [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#92-natural-deduction).

**Disjoint sets**
Sets with no element in common: $A \cap B = \varnothing$.
See [Chapter 5](05-Sets.md#52-operations-and-venn-diagrams).

**Disjunction**
The statement $p \vee q$, "$p$ or $q$", true when at least one of them is true (the inclusive or).
See [Chapter 1](01-Statements-and-Truth.md#12-and-or-not).

**Disjunction and existence properties**
If Heyting arithmetic proves $A \vee B$, it proves $A$ or proves $B$; if it proves $\exists x\, A(x)$, it proves $A(\overline{n})$ for some numeral. Classical PA has neither property.
See [Chapter 19](19-Other-Logics.md#191-intuitionistic-logic-and-constructive-mathematics).

**Disjunctive normal form (DNF)**
A formula that is a disjunction of conjunctive clauses, an "or of ands". Every formula is equivalent to one, read off the rows of its truth table.
See [Chapter 2](02-Propositional-Logic.md#24-normal-forms).

**Disjunctive syllogism**
The valid argument from $p \vee q$ and $\neg p$ to $q$.
See [Chapter 2](02-Propositional-Logic.md#22-tautologies-contradictions-equivalence).

**Distribution axiom**
The modal axiom $\Box(A \to B) \to (\Box A \to \Box B)$, part of the basic system K.
See [Chapter 19](19-Other-Logics.md#192-modal-logic).

**Divides**
For integers $a$ and $b$, $a$ divides $b$, written $a \mid b$, if $b = ak$ for some integer $k$.
See [Chapter 4](04-Proofs.md#41-what-a-proof-is).

**Domain**
The set a variable ranges over (the universe of discourse); the set $A$ of inputs of a function $f : A \to B$; or the non-empty set $M$ of objects of a first-order structure.
See [Chapter 3](03-Quantifiers.md#31-for-all-there-exists), [Chapter 6](06-Relations-and-Functions.md#64-functions-as-sets-of-pairs) and [Chapter 10](10-First-Order-Logic.md#102-structures-and-satisfaction).

**Double negation**
The law $\neg\neg p \equiv p$. It holds classically but not in intuitionistic logic, where only $p \to \neg\neg p$ holds.
See [Chapter 2](02-Propositional-Logic.md#23-the-laws-of-logic).

**Dovetailing**
Running infinitely many computations "at once" by doing step 1 of the first, then step 2 of the first two, and so on, so that every computation that halts is eventually seen to halt.
See [Chapter 15](15-Recursive-Functions-and-Computability.md#154-computably-enumerable-sets).

## E

**Ehrenfeucht-Fraïssé game**
A game between two players on two structures that tests whether they satisfy the same sentences up to a given quantifier depth. It is a standard tool for proving that properties are not first-order.
See [Chapter 10](10-First-Order-Logic.md#105-what-first-order-logic-cannot-say) and [Chapter 12](12-Model-Theory.md#124-dense-linear-orders-cantors-back-and-forth).

**Element**
An object in a set; $x \in A$ means $x$ is an element (or member) of $A$.
See [Chapter 5](05-Sets.md#51-sets-elements-and-subsets).

**Elementarily equivalent**
Two structures are elementarily equivalent, $\mathcal{M} \equiv \mathcal{N}$, if they satisfy exactly the same sentences. $(\mathbb{Q}, <)$ and $(\mathbb{R}, <)$ are an example.
See [Chapter 12](12-Model-Theory.md#122-elementary-equivalence).

**Elementary embedding**
An embedding that preserves the truth of every formula, not just quantifier-free ones. Measurable cardinals are characterised by elementary embeddings of the universe into an inner model.
See [Chapter 12](12-Model-Theory.md#126-ultraproducts) and [Chapter 20](20-Where-Logic-Goes.md#201-large-cardinals).

**Elementary substructure**
A substructure $\mathcal{M} \preceq \mathcal{N}$ such that every formula with parameters from $M$ has the same truth value in $\mathcal{M}$ and in $\mathcal{N}$.
See [Chapter 12](12-Model-Theory.md#122-elementary-equivalence) and [Chapter 11](11-Completeness-and-Compactness.md#115-the-lowenheim-skolem-theorems-and-skolems-paradox).

**Elimination rule**
In natural deduction, a rule saying how to use a formula with a given main connective, such as getting $A$ from $A \wedge B$.
See [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#92-natural-deduction).

**Embedding**
An injective map between structures that preserves constants, functions and relations, and the failure of relations. Embeddings preserve quantifier-free formulas.
See [Chapter 12](12-Model-Theory.md#121-theories-and-models).

**Empty set**
The set $\varnothing$ with no elements. There is only one, and it is a subset of every set.
See [Chapter 5](05-Sets.md#51-sets-elements-and-subsets) and [Chapter 8](08-Axiomatic-Set-Theory.md#82-the-zf-axioms-one-by-one).

**Empty signature**
A first-order language with no non-logical symbols, only $=$. It can still count: there are sentences saying "there are at least $n$ elements".
See [Chapter 10](10-First-Order-Logic.md#103-examples-groups-orders-arithmetic-graphs).

**Entscheidungsproblem**
Hilbert's "decision problem" (1928): find an algorithm that decides whether any given first-order sentence is valid. Church and Turing showed in 1936 that none exists.
See [Chapter 13](13-Algorithms-and-Turing-Machines.md#131-what-is-an-algorithm) and [Chapter 10](10-First-Order-Logic.md#104-logical-consequence).

**Epsilon-nought ($\varepsilon_0$)**
The least ordinal $\alpha$ with $\omega^\alpha = \alpha$, the limit of $\omega, \omega^\omega, \omega^{\omega^\omega}, \dots$ It is the proof-theoretic ordinal of PA.
See [Chapter 17](17-Arithmetic-and-Peano.md#175-goodsteins-theorem).

**Equinumerous**
Having the same cardinality: there is a bijection between the two sets.
See [Chapter 7](07-Infinity-and-Cardinality.md#71-same-size-means-bijection).

**Equivalence class**
For an equivalence relation $\sim$ on $A$ and $a \in A$, the set $[a] = \{x \in A : x \sim a\}$ of everything equivalent to $a$.
See [Chapter 6](06-Relations-and-Functions.md#62-equivalence-relations-and-partitions).

**Equivalence relation**
A relation that is reflexive, symmetric and transitive, such as congruence mod $n$. Its classes partition the set.
See [Chapter 6](06-Relations-and-Functions.md#62-equivalence-relations-and-partitions).

**Even and odd**
An integer $n$ is even if $n = 2k$ and odd if $n = 2k + 1$ for some integer $k$.
See [Chapter 4](04-Proofs.md#41-what-a-proof-is).

**Ex falso**
The rule "from a contradiction ($\bot$), infer anything" (ex falso quodlibet). Intuitionistic logic keeps it.
See [Chapter 19](19-Other-Logics.md#191-intuitionistic-logic-and-constructive-mathematics).

**Exclusive or**
"One or the other but not both", written $p \oplus q$. It is true exactly when $p$ and $q$ differ.
See [Chapter 1](01-Statements-and-Truth.md#12-and-or-not).

**Existential quantifier**
The symbol $\exists$, "there exists". $\exists x\, P(x)$ is true when $P(a)$ holds for at least one $a$ in the domain, a witness.
See [Chapter 3](03-Quantifiers.md#31-for-all-there-exists).

**EXP**
The class of problems decidable in time $2^{p(n)}$ for some polynomial $p$. It contains P and NP, and differs from P by the time hierarchy theorem.
See [Chapter 16](16-Complexity.md#161-counting-steps-and-the-class-p).

**Exportation**
The law $(p \wedge q) \to r \equiv p \to (q \to r)$.
See [Chapter 1](01-Statements-and-Truth.md#check-yourself).

**Extensional property**
A property of programs that depends only on the function computed, not on the code. Also called a semantic property; Rice's theorem is about these.
See [Chapter 14](14-Undecidability.md#143-rices-theorem).

**Extensionality**
The ZF axiom that two sets with the same elements are equal.
See [Chapter 8](08-Axiomatic-Set-Theory.md#82-the-zf-axioms-one-by-one).

## F

**F-preserving**
A Boolean function with $f(\text{F}, \dots, \text{F}) = \text{F}$; one of the five properties in Post's theorem. T-preserving is defined the same way.
See [Chapter 2](02-Propositional-Logic.md#25-complete-sets-of-connectives).

**Fallacy**
An invalid argument form that is often used as if it were valid, such as affirming the consequent or denying the antecedent.
See [Chapter 2](02-Propositional-Logic.md#22-tautologies-contradictions-equivalence).

**Fast-growing hierarchy**
A sequence of functions $F_\alpha$ indexed by ordinals, each growing much faster than the ones before. The functions provably total in PA are bounded by levels below $\varepsilon_0$.
See [Chapter 17](17-Arithmetic-and-Peano.md#175-goodsteins-theorem).

**Field of fractions**
The construction of $\mathbb{Q}$ from $\mathbb{Z}$ as classes of pairs $(p, q)$, $q \ne 0$, with $(p, q) \sim (p', q')$ when $pq' = p'q$. It works for any integral domain.
See [Chapter 6](06-Relations-and-Functions.md#66-constructing-the-integers-and-the-rationals).

**Filter**
A family $\mathcal{F}$ of subsets of a set $I$ that contains $I$, not $\varnothing$, is closed under finite intersections, and contains every superset of its members: a notion of "large" set.
See [Chapter 12](12-Model-Theory.md#126-ultraproducts).

**Finite automaton**
A Turing machine that only reads its input once, left to right, without writing: a machine with a fixed finite memory. The sets it decides are the regular languages.
See [Chapter 13](13-Algorithms-and-Turing-Machines.md#check-yourself).

**First-order logic**
The logic of quantifiers over the objects of a structure (not over sets of them), with connectives, $=$, and the constant, function and relation symbols of a signature. It has completeness and compactness.
See [Chapter 10](10-First-Order-Logic.md#101-languages-terms-and-formulas).

**Fixed point**
For a formula $\psi$, a sentence $G$ with $T \vdash G \leftrightarrow \psi(\ulcorner G \urcorner)$; for a computable transformation $f$ of programs, a program $e$ that computes the same function as $f(e)$.
See [Chapter 18](18-Godels-Incompleteness-Theorems.md#181-the-diagonal-lemma) and [Chapter 15](15-Recursive-Functions-and-Computability.md#155-kleenes-recursion-theorem-and-quines).

**Fixed-point combinator**
A lambda term $Y$ with $Y f$ reducing to $f(Y f)$, such as Curry's $Y$. It gives recursion in the lambda calculus without names.
See [Chapter 13](13-Algorithms-and-Turing-Machines.md#135-other-models-and-their-equivalence).

**Forcing**
Cohen's method (1963) of enlarging a model $M$ of set theory to $M[G]$ by adding a generic object $G$, while keeping ZFC true. It proves independence results such as that of CH.
See [Chapter 20](20-Where-Logic-Goes.md#202-forcing) and [Chapter 7](07-Infinity-and-Cardinality.md#76-the-continuum-hypothesis).

**Forcing axioms**
Axioms such as Martin's axiom and the proper forcing axiom, saying roughly that generic filters exist for many forcing notions already inside the universe.
See [Chapter 20](20-Where-Logic-Goes.md#202-forcing).

**Forcing notion**
A partially ordered set $(P, \le)$ of conditions in a model $M$, where $q \le p$ means $q$ is a stronger condition, carrying more information, than $p$.
See [Chapter 20](20-Where-Logic-Goes.md#202-forcing).

**Formula**
A string built from propositional variables by the connectives, according to the inductive rules of the language. In first-order logic, formulas are built from atomic formulas with connectives and quantifiers.
See [Chapter 2](02-Propositional-Logic.md#21-formulas-and-their-trees), [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#91-syntax-and-semantics) and [Chapter 10](10-First-Order-Logic.md#101-languages-terms-and-formulas).

**Foundation (regularity)**
The ZF axiom that every nonempty set has an $\in$-minimal element, one sharing no element with the set. It rules out $x \in x$ and infinite descending $\in$-chains.
See [Chapter 8](08-Axiomatic-Set-Theory.md#82-the-zf-axioms-one-by-one).

**Frame**
In modal logic, a set $W$ of worlds with an accessibility relation $R$. A model adds a valuation saying where each variable is true.
See [Chapter 19](19-Other-Logics.md#192-modal-logic).

**Fréchet filter**
The filter of cofinite subsets (complements of finite sets) of an infinite set. An ultrafilter containing it is non-principal.
See [Chapter 12](12-Model-Theory.md#126-ultraproducts).

**Free group**
The group $F_2$ of reduced words in $a, a^{-1}, b, b^{-1}$ (no letter next to its own inverse). Its paradoxical decomposition is the heart of the Banach-Tarski paradox.
See [Chapter 8](08-Axiomatic-Set-Theory.md#85-the-banach-tarski-paradox).

**Free variable**
An occurrence of a variable not in the scope of a quantifier on it, as $y$ in $\forall x\, (x + y > 0)$. The truth of a formula depends on the values of its free variables.
See [Chapter 3](03-Quantifiers.md#31-for-all-there-exists) and [Chapter 10](10-First-Order-Logic.md#101-languages-terms-and-formulas).

**Full adder**
A circuit that adds three bits (two digits and a carry in), giving a sum bit and a carry out.
See [Chapter 2](02-Propositional-Logic.md#26-logic-gates-and-circuits).

**Function**
A relation $f \subseteq A \times B$ such that each $a \in A$ is related to exactly one $b \in B$, written $f(a)$.
See [Chapter 6](06-Relations-and-Functions.md#64-functions-as-sets-of-pairs).

**Function symbol**
A symbol of a first-order language for an operation, with an arity, such as $+$ (arity 2) or the successor $S$ (arity 1).
See [Chapter 10](10-First-Order-Logic.md#101-languages-terms-and-formulas).

**Fuzzy logic**
A logic with truth values in $[0, 1]$, where "and" is interpreted by a t-norm. Its connectives are truth-functional, so degrees of truth are not probabilities.
See [Chapter 19](19-Other-Logics.md#193-many-valued-and-fuzzy-logic).

## G

**Galileo's paradox**
The squares $1, 4, 9, \dots$ seem fewer than the natural numbers, yet $n \mapsto n^2$ matches them one to one. For infinite sets, a part can be as large as the whole.
See [Chapter 7](07-Infinity-and-Cardinality.md#71-same-size-means-bijection).

**Generalisation**
A formula $\forall x_1 \dots \forall x_n\, \varphi$ obtained by putting universal quantifiers in front of $\varphi$. The first-order Hilbert system takes all generalisations of its axioms as axioms.
See [Chapter 11](11-Completeness-and-Compactness.md#111-godels-completeness-theorem).

**Generalized continuum hypothesis (GCH)**
For every infinite cardinal $\kappa$, $2^\kappa = \kappa^+$, the next cardinal after $\kappa$.
See [Chapter 7](07-Infinity-and-Cardinality.md#76-the-continuum-hypothesis).

**General recursive functions**
Gödel and Herbrand's 1934 definition of the computable functions, one of the three equivalent definitions of the 1930s along with the lambda calculus and Turing machines.
See [Chapter 13](13-Algorithms-and-Turing-Machines.md#131-what-is-an-algorithm).

**Generic filter**
A filter $G$ of conditions that meets every dense set belonging to the model $M$ ($M$-generic). It describes a new object $G$ that is not in $M$.
See [Chapter 20](20-Where-Logic-Goes.md#202-forcing).

**Gödel numbering**
A coding of symbols, formulas and proofs by natural numbers, so that syntactic operations become (primitive recursive) functions on numbers. $\ulcorner \varphi \urcorner$ is the code of $\varphi$.
See [Chapter 17](17-Arithmetic-and-Peano.md#173-coding-godel-numbering).

**Gödel sentence**
A sentence $G_T$ that says of itself "I am not provable in $T$", given by the diagonal lemma. If $T$ is consistent, $T$ does not prove $G_T$.
See [Chapter 18](18-Godels-Incompleteness-Theorems.md#182-the-first-incompleteness-theorem).

**Gödel's completeness theorem**
In first-order logic, every logical consequence is derivable: $\Gamma \models \varphi$ implies $\Gamma \vdash \varphi$. Equivalently, every consistent set of sentences has a model.
See [Chapter 11](11-Completeness-and-Compactness.md#111-godels-completeness-theorem).

**Gödel's first incompleteness theorem**
A consistent, computably axiomatised theory that contains Robinson arithmetic is incomplete: some sentence is neither provable nor refutable in it.
See [Chapter 18](18-Godels-Incompleteness-Theorems.md#182-the-first-incompleteness-theorem).

**Gödel's second incompleteness theorem**
Such a theory, if consistent, cannot prove its own consistency statement $\mathrm{Con}(T)$. In particular ZFC cannot prove that ZFC is consistent.
See [Chapter 18](18-Godels-Incompleteness-Theorems.md#183-the-second-incompleteness-theorem).

**Goodstein's theorem**
Every Goodstein sequence (write $m$ in hereditary base 2, bump the base to 3, subtract 1, and repeat) eventually reaches 0. It is true but not provable in PA.
See [Chapter 17](17-Arithmetic-and-Peano.md#175-goodsteins-theorem).

**Graph (of a function)**
The set of pairs $\{(a, f(a)) : a \in A\}$; as a set of pairs, a function is its graph.
See [Chapter 6](06-Relations-and-Functions.md#64-functions-as-sets-of-pairs).

**Graph**
A set of vertices with an irreflexive, symmetric edge relation $E$. In first-order logic, a model of those two axioms.
See [Chapter 10](10-First-Order-Logic.md#103-examples-groups-orders-arithmetic-graphs).

**Greatest element**
An element of a partial order above every element. Compare maximal element.
See [Chapter 6](06-Relations-and-Functions.md#63-orders).

## H

**Half adder**
The circuit that adds two bits $a$ and $b$, giving the sum bit $a \oplus b$ and the carry bit $a \wedge b$.
See [Chapter 2](02-Propositional-Logic.md#26-logic-gates-and-circuits).

**Halting problem**
The set $\mathrm{HALT} = \{\langle M, w \rangle : M \text{ halts on input } w\}$. Turing proved that no machine decides it, though it is c.e.
See [Chapter 14](14-Undecidability.md#141-the-halting-problem).

**Hamel basis**
A basis of $\mathbb{R}$ as a vector space over $\mathbb{Q}$. Its existence needs the axiom of choice.
See [Chapter 8](08-Axiomatic-Set-Theory.md#84-the-axiom-of-choice).

**Hasse diagram**
A picture of a finite partial order: a dot for each element, with a line up from $a$ to $b$ whenever $b$ covers $a$.
See [Chapter 6](06-Relations-and-Functions.md#63-orders).

**Hausdorff's paradox**
The forerunner of Banach-Tarski: the sphere, minus a countable set, can be split into pieces that rotate into each other paradoxically.
See [Chapter 8](08-Axiomatic-Set-Theory.md#85-the-banach-tarski-paradox).

**Henkin axiom**
A sentence $\neg\forall x\, \varphi \to \neg\varphi(c)$ that names a witness constant $c$ for each failing universal statement. Henkin's proof of completeness adds these.
See [Chapter 11](11-Completeness-and-Compactness.md#112-henkins-proof).

**Henkin's proof**
The standard proof of the completeness theorem: add witness constants, extend to a maximal consistent set, and build the term model out of closed terms.
See [Chapter 11](11-Completeness-and-Compactness.md#112-henkins-proof).

**Hereditarily finite set**
A finite set whose elements are hereditarily finite. They are exactly the sets in $V_\omega$.
See [Chapter 8](08-Axiomatic-Set-Theory.md#82-the-zf-axioms-one-by-one).

**Hereditary base notation**
Writing a number in base $b$, then writing every exponent in base $b$, and so on, until only numbers below $b$ appear. Goodstein sequences use it.
See [Chapter 17](17-Arithmetic-and-Peano.md#175-goodsteins-theorem).

**Heyting algebra**
The algebraic structure for intuitionistic logic, as Boolean algebras are for classical logic. The open sets of a space form one.
See [Chapter 19](19-Other-Logics.md#191-intuitionistic-logic-and-constructive-mathematics).

**Heyting arithmetic (HA)**
Peano arithmetic with intuitionistic logic in place of classical logic. It has the disjunction and existence properties.
See [Chapter 19](19-Other-Logics.md#191-intuitionistic-logic-and-constructive-mathematics).

**Hilbert system**
A proof system with many axioms and few rules. The book's has three axiom schemes for $\neg$ and $\to$ and the single rule modus ponens.
See [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#93-a-hilbert-system-and-the-deduction-theorem).

**Hilbert's hotel**
A hotel with rooms $1, 2, 3, \dots$, all full, that can still take a new guest (everyone moves up one room), or infinitely many: an image of Dedekind-infinite sets.
See [Chapter 7](07-Infinity-and-Cardinality.md#71-same-size-means-bijection).

**Hilbert's tenth problem**
Find an algorithm that decides whether a polynomial equation with integer coefficients has an integer solution. By the MRDP theorem (1970) there is none.
See [Chapter 14](14-Undecidability.md#144-hilberts-tenth-problem).

**Homotopy type theory**
A form of type theory in which types are read as spaces and proofs of equality as paths. Its univalence axiom says equivalent types are equal.
See [Chapter 20](20-Where-Logic-Goes.md#204-homotopy-type-theory-and-univalence).

**Hyperreals**
A field ${}^*\mathbb{R}$ containing $\mathbb{R}$ together with infinitesimals and infinite numbers, built by compactness or as an ultrapower, and satisfying every first-order sentence true in $\mathbb{R}$.
See [Chapter 11](11-Completeness-and-Compactness.md#114-nonstandard-models-and-infinitesimals).

**Hypothesis**
The "if" part $p$ of a conditional $p \to q$. In a derivation from $\Gamma$, a member of $\Gamma$ used as a line.
See [Chapter 1](01-Statements-and-Truth.md#14-if-then) and [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#93-a-hilbert-system-and-the-deduction-theorem).

## I

**Identity function**
The function $\mathrm{id}_A : A \to A$ with $a \mapsto a$.
See [Chapter 6](06-Relations-and-Functions.md#65-inverses-and-composition).

**Image**
For $f : A \to B$, the set $f[A] = \{f(a) : a \in A\}$ of values actually taken (also called the range); more generally $f[X]$ for $X \subseteq A$.
See [Chapter 6](06-Relations-and-Functions.md#64-functions-as-sets-of-pairs).

**Inaccessible cardinal**
An uncountable cardinal $\kappa$ that is regular and a strong limit ($2^\lambda < \kappa$ for every $\lambda < \kappa$): one that cannot be reached from below. ZFC cannot prove one exists.
See [Chapter 20](20-Where-Logic-Goes.md#201-large-cardinals).

**Inclusion-exclusion**
The counting rule $|A \cup B| = |A| + |B| - |A \cap B|$, and its versions for more sets.
See [Chapter 5](05-Sets.md#52-operations-and-venn-diagrams).

**Inclusive or**
"Or" meaning "at least one, possibly both"; the "or" of mathematics, written $\vee$.
See [Chapter 1](01-Statements-and-Truth.md#12-and-or-not).

**Inconsistent**
A set of formulas that derives some $\varphi$ and also $\neg\varphi$; it then derives everything.
See [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#93-a-hilbert-system-and-the-deduction-theorem).

**Independent**
A statement is independent of a theory if the theory proves neither it nor its negation, as the axiom of choice is of ZF and CH of ZFC. An axiom is independent of the others if they do not prove it.
See [Chapter 8](08-Axiomatic-Set-Theory.md#84-the-axiom-of-choice) and [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#94-soundness).

**Independent set**
A set of vertices in a graph with no edges between them. Deciding whether one of size $k$ exists is NP-complete.
See [Chapter 16](16-Complexity.md#164-a-reduction-worked-in-full-3-sat-to-clique).

**Index (of a machine)**
The number $e$ coding a Turing machine $M_e$ (or program $\varphi_e$), so that machines can be listed and given to other machines as input.
See [Chapter 13](13-Algorithms-and-Turing-Machines.md#134-universal-machines).

**Index set**
A set $I$ used to label a family of sets $A_i$, as in $\bigcup_{i \in I} A_i$.
See [Chapter 5](05-Sets.md#52-operations-and-venn-diagrams).

**Induction**
To prove $P(n)$ for every natural number $n$: prove the base case $P(0)$ and the inductive step $P(k) \to P(k + 1)$. Strong induction may assume $P(0), \dots, P(k)$ in the step.
See [Chapter 4](04-Proofs.md#45-induction).

**Induction schema**
The Peano axioms' induction, one axiom for each formula $\varphi$: if $\varphi(0)$ and $\forall x\, (\varphi(x) \to \varphi(Sx))$, then $\forall x\, \varphi(x)$.
See [Chapter 17](17-Arithmetic-and-Peano.md#171-the-peano-axioms).

**Inductive definition**
A definition that gives starting objects and rules for building new ones, and says nothing else counts, such as the definition of formulas. Also called a recursive definition.
See [Chapter 2](02-Propositional-Logic.md#21-formulas-and-their-trees) and [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#91-syntax-and-semantics).

**Inductive hypothesis**
In the inductive step, the assumption $P(k)$ used to prove $P(k + 1)$.
See [Chapter 4](04-Proofs.md#45-induction).

**Inductive set**
A set that contains $\varnothing$ and contains $x \cup \{x\}$ whenever it contains $x$. The axiom of infinity says one exists.
See [Chapter 8](08-Axiomatic-Set-Theory.md#82-the-zf-axioms-one-by-one).

**Inductive step**
The second part of a proof by induction: showing that $P(k)$ implies $P(k + 1)$ for every $k$.
See [Chapter 4](04-Proofs.md#45-induction).

**Infinitesimal**
A nonzero number smaller in absolute value than every positive real. The hyperreals contain them, which makes Leibniz's calculus rigorous.
See [Chapter 11](11-Completeness-and-Compactness.md#114-nonstandard-models-and-infinitesimals).

**Infinity (axiom)**
The ZF axiom that an inductive set exists. Without it, every set the other axioms produce is finite.
See [Chapter 8](08-Axiomatic-Set-Theory.md#82-the-zf-axioms-one-by-one).

**Injective**
A function with different outputs for different inputs: $f(a) = f(a')$ implies $a = a'$. Also called one-to-one.
See [Chapter 6](06-Relations-and-Functions.md#64-functions-as-sets-of-pairs).

**Intersection**
$A \cap B = \{x : x \in A \text{ and } x \in B\}$, the elements in both.
See [Chapter 5](05-Sets.md#52-operations-and-venn-diagrams).

**Introduction rule**
In natural deduction, a rule saying how to prove a formula with a given main connective, such as getting $A \wedge B$ from $A$ and $B$.
See [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#92-natural-deduction).

**Intuitionistic logic**
The logic of constructive mathematics, in which $A \vee \neg A$ and $\neg\neg A \to A$ are not derivable. It is natural deduction without the classical rule RAA.
See [Chapter 19](19-Other-Logics.md#191-intuitionistic-logic-and-constructive-mathematics) and [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#92-natural-deduction).

**Intuitionistic type theory**
Per Martin-Löf's type theory with dependent types, from the 1970s. It underlies many proof assistants.
See [Chapter 19](19-Other-Logics.md#194-type-theory-and-proof-assistants).

**Inverse (of a conditional)**
The inverse of $p \to q$ is $\neg p \to \neg q$. It is equivalent to the converse, not to the original.
See [Chapter 1](01-Statements-and-Truth.md#14-if-then).

**Inverse function**
A function $g : B \to A$ with $g \circ f = \mathrm{id}_A$ and $f \circ g = \mathrm{id}_B$. A function has one exactly when it is a bijection.
See [Chapter 6](06-Relations-and-Functions.md#65-inverses-and-composition).

**Inverse relation**
For $R \subseteq A \times B$, the relation $R^{-1} = \{(b, a) : (a, b) \in R\}$, with every arrow reversed.
See [Chapter 6](06-Relations-and-Functions.md#61-relations).

**Irrational number**
A real number that is not rational, such as $\sqrt 2$.
See [Chapter 4](04-Proofs.md#41-what-a-proof-is).

**Isomorphism**
A bijection between the domains of two structures that carries each constant, function and relation exactly onto the other's. Isomorphic structures satisfy the same sentences.
See [Chapter 10](10-First-Order-Logic.md#102-structures-and-satisfaction).

## K

**K (modal system)**
The basic modal logic: all tautologies, the distribution axiom $\Box(A \to B) \to (\Box A \to \Box B)$, modus ponens and the necessitation rule. It is valid on every frame.
See [Chapter 19](19-Other-Logics.md#192-modal-logic).

**$\kappa$-categorical**
A theory with a model of infinite cardinality $\kappa$, all of whose models of size $\kappa$ are isomorphic. DLO is $\aleph_0$-categorical; algebraically closed fields of a fixed characteristic are $\kappa$-categorical for every uncountable $\kappa$.
See [Chapter 12](12-Model-Theory.md#123-complete-theories-and-categoricity).

**Kernel (proof assistant)**
The small trusted program in a proof assistant that checks every proof term.
See [Chapter 19](19-Other-Logics.md#194-type-theory-and-proof-assistants).

**Kleene's normal form theorem**
Every partial computable function can be written $U(\mu y\, T(e, \vec x, y))$ with $T$ (Kleene's T predicate) and $U$ primitive recursive: one unbounded search suffices.
See [Chapter 15](15-Recursive-Functions-and-Computability.md#153-mu-recursive-functions).

**Kleene's recursion theorem**
For every computable transformation $f$ of program indices there is a program $e$ that computes the same function as $f(e)$. In practice, a program may assume it has access to its own code.
See [Chapter 15](15-Recursive-Functions-and-Computability.md#155-kleenes-recursion-theorem-and-quines).

**Kleene's strong three-valued logic**
A logic with values true, false and undetermined, in which $\neg$, $\wedge$ and $\vee$ act as in Łukasiewicz's logic but $A \to B$ is $\neg A \vee B$.
See [Chapter 19](19-Other-Logics.md#193-many-valued-and-fuzzy-logic).

**Knights and knaves**
Raymond Smullyan's puzzles about an island where knights always tell the truth and knaves always lie. "A says $S$" translates to $A \leftrightarrow S$.
See [Chapter 1](01-Statements-and-Truth.md#16-logic-puzzles-knights-and-knaves).

**König's lemma**
Every infinite, finitely branching tree has an infinite path. It is closely related to compactness.
See [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#96-compactness).

**Kripke model**
For intuitionistic logic: a partially ordered set of stages (states of knowledge) with persistent truth of atoms, where $A \to B$ holds at a stage if $B$ holds at every later stage where $A$ holds. For modal logic, a frame of worlds plus a valuation.
See [Chapter 19](19-Other-Logics.md#191-intuitionistic-logic-and-constructive-mathematics) and [Chapter 19](19-Other-Logics.md#192-modal-logic).

**Kuratowski pair**
The definition of the ordered pair as a set: $(a, b) = \{\{a\}, \{a, b\}\}$. It satisfies $(a, b) = (c, d)$ exactly when $a = c$ and $b = d$.
See [Chapter 5](05-Sets.md#54-cartesian-products).

## L

**$L$-structure**
For a signature $L$, a non-empty domain $M$ together with an interpretation of each constant, function and relation symbol of $L$ in $M$.
See [Chapter 10](10-First-Order-Logic.md#102-structures-and-satisfaction).

**$L$-theory**
A set of sentences of the language $L$. A model of it is a structure in which every one of them is true.
See [Chapter 12](12-Model-Theory.md#121-theories-and-models).

**Lambda calculus**
Church's model of computation with only functions: terms are variables, abstractions $\lambda x.\, M$ and applications $M N$, and computation is beta reduction. It computes exactly the Turing-computable functions.
See [Chapter 13](13-Algorithms-and-Turing-Machines.md#135-other-models-and-their-equivalence).

**Language of arithmetic**
The first-order language $\mathcal{L}_A$ with constant $0$, successor $S$, and $+$ and $\cdot$ (and often $<$).
See [Chapter 17](17-Arithmetic-and-Peano.md#171-the-peano-axioms).

**Large cardinals**
Infinite cardinals so large that ZFC cannot prove they exist, such as inaccessible, measurable and Woodin cardinals. Large cardinal axioms are ranked by strength in a ladder.
See [Chapter 20](20-Where-Logic-Goes.md#201-large-cardinals).

**Law of excluded middle**
The tautology $p \vee \neg p$. Intuitionistic logic does not accept it.
See [Chapter 2](02-Propositional-Logic.md#22-tautologies-contradictions-equivalence).

**Least element**
An element of a partial order below every element. Compare minimal element.
See [Chapter 6](06-Relations-and-Functions.md#63-orders).

**Least number principle**
If some number has property $\varphi$, there is a least such number. In PA it is provable for every formula, as a form of induction.
See [Chapter 17](17-Arithmetic-and-Peano.md#172-what-pa-proves).

**Least upper bound (supremum)**
An upper bound of a set that is below every other upper bound.
See [Chapter 6](06-Relations-and-Functions.md#63-orders).

**Lefschetz principle**
A first-order statement about fields is true in $\mathbb{C}$ if and only if it is true in algebraically closed fields of every large enough prime characteristic. It follows from the completeness of $\mathrm{ACF}_0$.
See [Chapter 12](12-Model-Theory.md#123-complete-theories-and-categoricity).

**Left inverse**
A function $g : B \to A$ with $g \circ f = \mathrm{id}_A$. A function $f : A \to B$ with $A$ nonempty has one exactly when it is injective.
See [Chapter 6](06-Relations-and-Functions.md#65-inverses-and-composition).

**Lemma**
A smaller result proved as a step towards a theorem.
See [Chapter 4](04-Proofs.md#41-what-a-proof-is).

**Lexicographic order**
The dictionary order: compare first entries, and if they are equal compare second entries, and so on.
See [Chapter 6](06-Relations-and-Functions.md#63-orders).

**Liar paradox**
The sentence "this sentence is false", which is true if false and false if true, so it is not a statement. Tarski's theorem is its formal descendant.
See [Chapter 1](01-Statements-and-Truth.md#11-what-a-statement-is).

**Linear order**
A partial order in which every two elements are comparable. Also called a total order.
See [Chapter 6](06-Relations-and-Functions.md#63-orders).

**Literal**
A variable or the negation of a variable: $p$, $\neg p$, $q$, $\neg q$, and so on.
See [Chapter 2](02-Propositional-Logic.md#24-normal-forms).

**Löb's theorem**
If $T \vdash \mathrm{Prov}(\ulcorner \varphi \urcorner) \to \varphi$, then $T \vdash \varphi$. A theory believes its own soundness only for sentences it already proves.
See [Chapter 18](18-Godels-Incompleteness-Theorems.md#183-the-second-incompleteness-theorem).

**Logic gate**
A physical device whose output (high or low voltage, 1 or 0) is a Boolean function of its inputs, such as an AND, OR, NOT or NAND gate.
See [Chapter 2](02-Propositional-Logic.md#26-logic-gates-and-circuits).

**Logical consequence**
$B$ is a logical consequence of $\Gamma$, written $\Gamma \models B$, if every assignment (or structure) that makes all of $\Gamma$ true makes $B$ true.
See [Chapter 2](02-Propositional-Logic.md#22-tautologies-contradictions-equivalence) and [Chapter 10](10-First-Order-Logic.md#104-logical-consequence).

**Logically equivalent**
Two formulas are logically equivalent, $A \equiv B$, if they have the same truth value under every assignment (or in every structure).
See [Chapter 2](02-Propositional-Logic.md#22-tautologies-contradictions-equivalence) and [Chapter 10](10-First-Order-Logic.md#104-logical-consequence).

**Łoś's theorem**
A formula is true in an ultraproduct $\prod_i \mathcal{M}_i / \mathcal{U}$ if and only if it is true in $\mathcal{U}$-almost every factor $\mathcal{M}_i$.
See [Chapter 12](12-Model-Theory.md#126-ultraproducts).

**Łoś-Vaught test**
A consistent theory in a countable language with no finite models that is $\kappa$-categorical for some infinite $\kappa$ is complete.
See [Chapter 12](12-Model-Theory.md#123-complete-theories-and-categoricity).

**Löwenheim-Skolem theorems**
Downward: a countable set of sentences with an infinite model has a countable model. Upward: a set of sentences with an infinite model has models of every infinite cardinality at least the size of the language.
See [Chapter 11](11-Completeness-and-Compactness.md#115-the-lowenheim-skolem-theorems-and-skolems-paradox).

**Łukasiewicz's logic**
A many-valued logic with truth values $0$, $\tfrac12$, $1$ (or all of $[0, 1]$), with $v(\neg A) = 1 - v(A)$ and $v(A \to B) = \min(1, 1 - v(A) + v(B))$.
See [Chapter 19](19-Other-Logics.md#193-many-valued-and-fuzzy-logic).

## M

**Main connective**
The connective applied last when a formula was built; it sits at the root of the formula's tree.
See [Chapter 2](02-Propositional-Logic.md#21-formulas-and-their-trees).

**Many-one reducible**
$A \le_m B$ if there is a total computable $f$ with $x \in A \iff f(x) \in B$. If $B$ is decidable then so is $A$; if $A$ is undecidable then so is $B$.
See [Chapter 14](14-Undecidability.md#142-reductions).

**Martin's axiom**
A forcing axiom saying, roughly, that generic filters exist for many forcing notions, not just over countable models. It is consistent with ZFC and decides many questions that ZFC leaves open.
See [Chapter 20](20-Where-Logic-Goes.md#202-forcing).

**Material conditional**
The truth-functional "if ... then", $p \to q$, false only when $p$ is true and $q$ false; it has the same truth table as $\neg p \vee q$.
See [Chapter 1](01-Statements-and-Truth.md#14-if-then).

**Maximal consistent set**
A consistent set $\Delta$ that, for every formula $\varphi$, contains $\varphi$ or $\neg\varphi$. Every consistent set extends to one, and it defines a valuation (or a model).
See [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#95-completeness) and [Chapter 11](11-Completeness-and-Compactness.md#112-henkins-proof).

**Maximal element**
An element of a partial order with nothing strictly above it. A greatest element is maximal, but a maximal one need not be greatest.
See [Chapter 6](06-Relations-and-Functions.md#63-orders).

**Maxterm**
A disjunctive clause containing every variable once, false on exactly one row of the truth table. A CNF is a conjunction of maxterms.
See [Chapter 2](02-Propositional-Logic.md#24-normal-forms).

**Measurable cardinal**
An uncountable cardinal $\kappa$ carrying a non-principal ultrafilter closed under intersections of fewer than $\kappa$ sets; equivalently, the critical point of an elementary embedding of the universe. It is far larger than the first inaccessible.
See [Chapter 20](20-Where-Logic-Goes.md#201-large-cardinals).

**Membership table**
A truth table for sets, with "in" for true and "out" for false, used to prove set identities.
See [Chapter 5](05-Sets.md#52-operations-and-venn-diagrams).

**Metalanguage**
The ordinary mathematical language in which we talk about a formal (object) language and define truth for it.
See [Chapter 10](10-First-Order-Logic.md#102-structures-and-satisfaction).

**Minimal element**
An element of a partial order with nothing strictly below it.
See [Chapter 6](06-Relations-and-Functions.md#63-orders).

**Minimisation**
The operation $\mu y\, [g(\vec x, y) = 0]$, giving the least $y$ with $g(\vec x, y) = 0$ (where all earlier values are defined), undefined if there is none. It is the unbounded search that primitive recursion lacks.
See [Chapter 15](15-Recursive-Functions-and-Computability.md#153-mu-recursive-functions).

**Minterm**
A conjunctive clause containing every variable once, true on exactly one row of the truth table. A DNF is a disjunction of minterms.
See [Chapter 2](02-Propositional-Logic.md#24-normal-forms).

**Modal logic**
Logic with operators $\Box$ ("necessarily") and $\Diamond$ ("possibly"), interpreted by Kripke frames of worlds. Different axioms (T, 4, S4, S5) match different frame properties.
See [Chapter 19](19-Other-Logics.md#192-modal-logic).

**Model**
A structure in which a sentence (or every sentence of a theory) is true: $\mathcal{M} \models \sigma$.
See [Chapter 10](10-First-Order-Logic.md#102-structures-and-satisfaction) and [Chapter 12](12-Model-Theory.md#121-theories-and-models).

**Modus ponens**
The rule: from $p$ and $p \to q$, infer $q$. It is the only rule of the book's Hilbert systems.
See [Chapter 2](02-Propositional-Logic.md#22-tautologies-contradictions-equivalence) and [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#93-a-hilbert-system-and-the-deduction-theorem).

**Modus tollens**
The valid argument from $p \to q$ and $\neg q$ to $\neg p$.
See [Chapter 2](02-Propositional-Logic.md#22-tautologies-contradictions-equivalence).

**Monotone function**
A Boolean function for which changing an input from F to T never changes the output from T to F; one of the five properties in Post's theorem.
See [Chapter 2](02-Propositional-Logic.md#25-complete-sets-of-connectives).

**Morley's theorem**
A countable theory that is categorical in one uncountable cardinality is categorical in all of them. Its proof started Shelah's stability theory.
See [Chapter 12](12-Model-Theory.md#123-complete-theories-and-categoricity).

**MRDP theorem**
Matiyasevich, Robinson, Davis and Putnam: a set of natural numbers is Diophantine if and only if it is computably enumerable. So Hilbert's tenth problem is undecidable.
See [Chapter 14](14-Undecidability.md#144-hilberts-tenth-problem).

**$\mu$-recursive function**
A partial function obtained from the basic functions by composition, primitive recursion and minimisation. Also called partial recursive; these are exactly the Turing-computable functions. A total one is called recursive.
See [Chapter 15](15-Recursive-Functions-and-Computability.md#153-mu-recursive-functions).

**Multiset**
A collection that counts repeats, such as $\{1, 1, 2\}$ with 1 twice. Multisets are not sets.
See [Chapter 5](05-Sets.md#51-sets-elements-and-subsets).

## N

**$n$-tuple**
An ordered list $(a_1, \dots, a_n)$ of $n$ coordinates, equal to another exactly when the coordinates agree in order.
See [Chapter 5](05-Sets.md#54-cartesian-products).

**NAND**
The connective "not both", $p \uparrow q \equiv \neg(p \wedge q)$, also called the Sheffer stroke. It is complete by itself, so every circuit can be built from NAND gates.
See [Chapter 2](02-Propositional-Logic.md#25-complete-sets-of-connectives).

**Naive set theory**
Set theory based on unrestricted comprehension: every property defines a set. Russell's paradox shows it is inconsistent.
See [Chapter 5](05-Sets.md#55-russells-paradox).

**Natural deduction**
Gentzen's proof system that copies how mathematicians argue: each connective has introduction and elimination rules, and temporary assumptions can be made and discharged.
See [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#92-natural-deduction).

**Natural numbers**
The numbers $0, 1, 2, 3, \dots$, written $\mathbb{N}$ (this book includes 0). In set theory each natural number is the set of those before it: $0 = \varnothing$, $n + 1 = n \cup \{n\}$, and $\mathbb{N} = \omega$.
See [Chapter 5](05-Sets.md#51-sets-elements-and-subsets) and [Chapter 8](08-Axiomatic-Set-Theory.md#83-the-natural-numbers-as-sets).

**Necessary condition**
In $p \to q$, $q$ is necessary for $p$: $p$ cannot hold without $q$.
See [Chapter 1](01-Statements-and-Truth.md#14-if-then).

**Necessitation rule**
The modal rule: from $\vdash A$ infer $\vdash \Box A$. What is provable is necessary.
See [Chapter 19](19-Other-Logics.md#192-modal-logic).

**Negation**
The statement $\neg p$, "not $p$", true exactly when $p$ is false.
See [Chapter 1](01-Statements-and-Truth.md#12-and-or-not).

**Negative translation**
Gödel and Gentzen's translation $A \mapsto A^N$ that inserts double negations so that classical logic embeds in intuitionistic logic: $A$ is classically provable if and only if $A^N$ is intuitionistically provable.
See [Chapter 19](19-Other-Logics.md#191-intuitionistic-logic-and-constructive-mathematics).

**Non-constructive proof**
A proof that something exists without showing which object it is, such as the proof that $a^b$ can be rational with $a$ and $b$ irrational.
See [Chapter 4](04-Proofs.md#44-proof-by-cases).

**Nondeterministic Turing machine**
A Turing machine that may have several possible moves at each step and accepts if some run accepts. It computes the same functions as an ordinary one; NP is the class of problems it decides in polynomial time.
See [Chapter 13](13-Algorithms-and-Turing-Machines.md#132-turing-machines) and [Chapter 16](16-Complexity.md#162-np-and-certificates).

**Non-logical symbols**
The constant, function and relation symbols of a particular first-order language, collected in its signature.
See [Chapter 10](10-First-Order-Logic.md#101-languages-terms-and-formulas).

**Nonstandard model**
A model of a theory such as true arithmetic or PA that is not isomorphic to the intended one, with "infinite" elements beyond all the standard numbers. Compactness guarantees they exist.
See [Chapter 11](11-Completeness-and-Compactness.md#114-nonstandard-models-and-infinitesimals) and [Chapter 17](17-Arithmetic-and-Peano.md#172-what-pa-proves).

**Non-principal ultrafilter**
An ultrafilter that contains no finite set; equivalently, one containing all cofinite sets. Its existence needs (a weak form of) the axiom of choice.
See [Chapter 12](12-Model-Theory.md#126-ultraproducts).

**NOR**
The connective "neither ... nor", $p \downarrow q \equiv \neg(p \vee q)$, also called the Peirce arrow. Like NAND, it is complete by itself.
See [Chapter 2](02-Propositional-Logic.md#25-complete-sets-of-connectives).

**Normal form (lambda calculus)**
A lambda term to which no further beta reduction applies: the result of the computation. Some terms have none.
See [Chapter 13](13-Algorithms-and-Turing-Machines.md#135-other-models-and-their-equivalence).

**NP**
The class of decision problems whose yes-instances have certificates of polynomial size that a polynomial-time verifier can check; equivalently, problems decided in nondeterministic polynomial time. SAT is in NP.
See [Chapter 16](16-Complexity.md#162-np-and-certificates).

**NP-complete**
A problem in NP to which every problem in NP is polynomial-time reducible. SAT, 3-SAT, CLIQUE and the travelling salesman problem are NP-complete. A problem with the reducibility property but not necessarily in NP is NP-hard.
See [Chapter 16](16-Complexity.md#163-np-completeness-and-the-cook-levin-theorem).

**Numeral**
The term $\overline{n} = S S \cdots S 0$ with $n$ copies of $S$, naming the number $n$ in the language of arithmetic.
See [Chapter 10](10-First-Order-Logic.md#101-languages-terms-and-formulas) and [Chapter 17](17-Arithmetic-and-Peano.md#171-the-peano-axioms).

## O

**o-minimal**
An ordered structure is o-minimal if every definable subset of its line is a finite union of points and intervals. The real field is o-minimal, and so (by Wilkie) is the real field with exponentiation.
See [Chapter 12](12-Model-Theory.md#125-quantifier-elimination).

**Object language**
The formal language under study, whose symbols ($\forall$, $\wedge$, ...) are interpreted by definitions in the metalanguage.
See [Chapter 10](10-First-Order-Logic.md#102-structures-and-satisfaction).

**$\omega$**
The set of natural numbers as a von Neumann ordinal, $\{0, 1, 2, \dots\}$: the first infinite ordinal.
See [Chapter 8](08-Axiomatic-Set-Theory.md#83-the-natural-numbers-as-sets).

**$\omega$-consistent**
A theory $T$ for which there is no formula $\varphi(x)$ with $T \vdash \exists x\, \varphi(x)$ but $T \vdash \neg\varphi(\overline{n})$ for every $n$. Gödel's original theorem assumed it; Rosser replaced it by plain consistency.
See [Chapter 18](18-Godels-Incompleteness-Theorems.md#182-the-first-incompleteness-theorem).

**One-way function**
A function computable in polynomial time but hard to invert on average. Their existence would imply $\mathrm{P} \neq \mathrm{NP}$, and modern cryptography assumes they exist.
See [Chapter 16](16-Complexity.md#166-complexity-and-cryptography).

**Open sentence**
A sentence with a free variable, such as "$x + 1 = 3$", which is true or false only once the variable is given a value or quantified. Also called a predicate.
See [Chapter 1](01-Statements-and-Truth.md#11-what-a-statement-is).

**Order type**
The unique ordinal isomorphic to a given well-ordered set.
See [Chapter 8](08-Axiomatic-Set-Theory.md#83-the-natural-numbers-as-sets).

**Ordered pair**
A pair $(a, b)$ with a first and a second coordinate, equal to $(c, d)$ exactly when $a = c$ and $b = d$.
See [Chapter 5](05-Sets.md#54-cartesian-products).

**Ordinal**
A transitive set well-ordered by $\in$, such as $0, 1, 2, \dots, \omega, \omega + 1, \dots$ Ordinals measure the lengths of well-orders.
See [Chapter 8](08-Axiomatic-Set-Theory.md#83-the-natural-numbers-as-sets) and [Chapter 6](06-Relations-and-Functions.md#63-orders).

**Overspill**
In a nonstandard model of arithmetic, if a formula holds for every standard number, it also holds for some nonstandard one (because the standard part is not definable).
See [Chapter 11](11-Completeness-and-Compactness.md#114-nonstandard-models-and-infinitesimals).

## P

**P**
The class of decision problems solvable by a Turing machine in time $O(n^k)$ for some fixed $k$: the problems with efficient algorithms.
See [Chapter 16](16-Complexity.md#161-counting-steps-and-the-class-p).

**P versus NP**
The open question whether every problem whose solutions can be checked quickly can also be solved quickly. It is one of the Millennium Prize Problems.
See [Chapter 16](16-Complexity.md#165-p-versus-np) and [Chapter 20](20-Where-Logic-Goes.md#206-open-problems).

**Pairing**
The ZF axiom that for any sets $a$ and $b$ the set $\{a, b\}$ exists.
See [Chapter 8](08-Axiomatic-Set-Theory.md#82-the-zf-axioms-one-by-one).

**Paradoxes of material implication**
Odd-sounding consequences of the truth table for $\to$, such as "a false statement implies anything" and "anything implies a true statement". They are not contradictions.
See [Chapter 1](01-Statements-and-Truth.md#14-if-then).

**Parity function**
The Boolean function true when an odd number of its inputs are true. Every DNF for it of $n$ variables has $2^{n-1}$ clauses.
See [Chapter 2](02-Propositional-Logic.md#24-normal-forms).

**Parse tree**
The tree that shows how a formula was built, with the main connective at the root and variables at the leaves.
See [Chapter 2](02-Propositional-Logic.md#21-formulas-and-their-trees) and [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#91-syntax-and-semantics).

**Partial isomorphism**
A finite set of pairs $\{(x_1, y_1), \dots, (x_k, y_k)\}$ that preserves the order (or other structure). Back-and-forth builds an isomorphism as the union of a chain of them.
See [Chapter 12](12-Model-Theory.md#124-dense-linear-orders-cantors-back-and-forth).

**Partial order**
A relation that is reflexive, antisymmetric and transitive, such as $\le$ on numbers or $\subseteq$ on sets. A set with one is a partially ordered set, or poset.
See [Chapter 6](06-Relations-and-Functions.md#63-orders).

**Partition**
A set of nonempty, pairwise disjoint subsets (blocks) of $A$ whose union is $A$. Partitions of $A$ correspond exactly to equivalence relations on $A$.
See [Chapter 6](06-Relations-and-Functions.md#62-equivalence-relations-and-partitions).

**Peano arithmetic (PA)**
The first-order theory of the natural numbers in the language of arithmetic: axioms for successor, addition and multiplication, plus the induction schema.
See [Chapter 17](17-Arithmetic-and-Peano.md#171-the-peano-axioms).

**Peano axioms**
Axioms for the natural numbers: 0 is not a successor, successor is injective, and induction holds; in first-order form, together with recursive equations for $+$ and $\cdot$.
See [Chapter 17](17-Arithmetic-and-Peano.md#171-the-peano-axioms) and [Chapter 8](08-Axiomatic-Set-Theory.md#83-the-natural-numbers-as-sets).

**Peirce's law**
The formula $((p \to q) \to p) \to p$, a tautology built with $\to$ alone that is not intuitionistically valid.
See [Chapter 2](02-Propositional-Logic.md#check-yourself).

**Permutation**
A bijection from a finite set to itself. A set of $n$ elements has $n!$ of them.
See [Chapter 6](06-Relations-and-Functions.md#64-functions-as-sets-of-pairs).

**Pigeonhole principle**
If more than $n$ objects go into $n$ boxes, some box gets at least two; equivalently, there is no injection from an $m$-set into an $n$-set when $m > n$.
See [Chapter 6](06-Relations-and-Functions.md#64-functions-as-sets-of-pairs).

**Polynomial-time reducible**
$A \le_p B$ if there is a function $f$ computable in polynomial time with $x \in A \iff f(x) \in B$.
See [Chapter 16](16-Complexity.md#163-np-completeness-and-the-cook-levin-theorem).

**Post's theorem**
A set of connectives is complete if and only if, for each of the five properties T-preserving, F-preserving, monotone, self-dual and affine, it contains a connective without that property.
See [Chapter 2](02-Propositional-Logic.md#25-complete-sets-of-connectives).

**Power set**
The set $\mathcal{P}(A)$ of all subsets of $A$. If $A$ has $n$ elements, $\mathcal{P}(A)$ has $2^n$. The power set axiom of ZF says it exists.
See [Chapter 5](05-Sets.md#53-the-power-set) and [Chapter 8](08-Axiomatic-Set-Theory.md#82-the-zf-axioms-one-by-one).

**Predicate**
A statement with variables, such as $P(x)$ or $Q(x, y)$, that becomes true or false once values from the domain are put in.
See [Chapter 3](03-Quantifiers.md#31-for-all-there-exists).

**Preimage**
For $f : A \to B$ and $Y \subseteq B$, the set $f^{-1}[Y] = \{a \in A : f(a) \in Y\}$, also called the inverse image. It exists whether or not $f$ has an inverse.
See [Chapter 6](06-Relations-and-Functions.md#64-functions-as-sets-of-pairs).

**Premise**
One of the statements an argument starts from.
See [Chapter 2](02-Propositional-Logic.md#22-tautologies-contradictions-equivalence).

**Prenex normal form**
A formula written as a string of quantifiers followed by a quantifier-free formula. Every first-order formula is equivalent to one.
See [Chapter 10](10-First-Order-Logic.md#104-logical-consequence).

**Presentation (of a group)**
A description of a group by generators and relations, such as $\langle a, b \mid aba^{-1}b^{-1} \rangle$ for $\mathbb{Z}^2$.
See [Chapter 14](14-Undecidability.md#145-the-word-problem-for-groups).

**Prime**
An integer $p > 1$ whose only positive divisors are 1 and $p$.
See [Chapter 4](04-Proofs.md#41-what-a-proof-is).

**Primitive recursive function**
A function $\mathbb{N}^k \to \mathbb{N}$ obtained from the basic functions (zero, successor and projections) by composition and primitive recursion. All are total and computable, but not every total computable function is primitive recursive. A set is primitive recursive if its characteristic function is.
See [Chapter 15](15-Recursive-Functions-and-Computability.md#151-primitive-recursive-functions).

**Principal ultrafilter**
For a fixed $i_0 \in I$, the ultrafilter of all subsets of $I$ containing $i_0$.
See [Chapter 12](12-Model-Theory.md#126-ultraproducts).

**Principle of bivalence**
The assumption that every statement is exactly one of true or false.
See [Chapter 1](01-Statements-and-Truth.md#11-what-a-statement-is).

**Priority method**
The technique, introduced by Friedberg and Muchnik, for building c.e. sets that meet infinitely many competing requirements, used to solve Post's problem.
See [Chapter 15](15-Recursive-Functions-and-Computability.md#154-computably-enumerable-sets).

**Projective determinacy**
The statement that certain infinite games on natural numbers (those with projective winning sets) have a winning strategy for one player. It follows from infinitely many Woodin cardinals.
See [Chapter 20](20-Where-Logic-Goes.md#201-large-cardinals).

**Proof**
An argument that establishes a statement beyond doubt by a finite chain of steps, each an axiom, a definition, a known result or a consequence of earlier steps. Formally, a derivation: a finite list of formulas checked by rules.
See [Chapter 4](04-Proofs.md#41-what-a-proof-is) and [Chapter 17](17-Arithmetic-and-Peano.md#173-coding-godel-numbering).

**Proof assistant**
A program in which a person writes proofs interactively, every step of which is checked by the machine, such as Lean, Coq (Rocq) and Isabelle.
See [Chapter 19](19-Other-Logics.md#194-type-theory-and-proof-assistants) and [Chapter 20](20-Where-Logic-Goes.md#205-formalised-mathematics-today).

**Proof by cases**
Splitting a proof into cases that together cover every possibility, and proving the statement in each.
See [Chapter 4](04-Proofs.md#44-proof-by-cases).

**Proof by contradiction**
To prove $Q$, assume $\neg Q$ and derive something impossible.
See [Chapter 4](04-Proofs.md#43-contrapositive-and-contradiction).

**Proof by contrapositive**
To prove $P \to Q$, prove $\neg Q \to \neg P$ instead.
See [Chapter 4](04-Proofs.md#43-contrapositive-and-contradiction).

**Proof-theoretic ordinal**
An ordinal measuring the strength of a theory: the least ordinal whose well-ordering the theory cannot prove (in a suitable sense). For PA it is $\varepsilon_0$.
See [Chapter 17](17-Arithmetic-and-Peano.md#175-goodsteins-theorem).

**Proper class**
A collection too large to be a set, such as all sets or all ordinals. In ZFC it is spoken of only through the formula that defines it.
See [Chapter 8](08-Axiomatic-Set-Theory.md#86-zfc-as-the-usual-foundation).

**Proper subset**
A subset $A \subsetneq B$ with $A \ne B$.
See [Chapter 5](05-Sets.md#51-sets-elements-and-subsets).

**Propositional variable**
A letter $p, q, r, \dots$ that stands for a statement not analysed further.
See [Chapter 2](02-Propositional-Logic.md#21-formulas-and-their-trees).

**Provability logic (GL)**
The modal logic in which $\Box A$ reads "$A$ is provable in PA": K plus Löb's axiom $\Box(\Box A \to A) \to \Box A$.
See [Chapter 18](18-Godels-Incompleteness-Theorems.md#183-the-second-incompleteness-theorem) and [Chapter 19](19-Other-Logics.md#192-modal-logic).

## Q

**Quantifier**
The words "for all" ($\forall$) and "there exists" ($\exists$), which turn a predicate into a statement about a whole domain.
See [Chapter 3](03-Quantifiers.md#31-for-all-there-exists).

**Quantifier elimination (QE)**
A theory has QE if every formula is equivalent in it to a quantifier-free formula. DLO and real closed fields have QE, and QE often gives decidability.
See [Chapter 12](12-Model-Theory.md#125-quantifier-elimination).

**Quantifier-free formula**
A formula with no quantifiers. Embeddings preserve them.
See [Chapter 12](12-Model-Theory.md#121-theories-and-models).

**Quine**
A program that prints its own source code. It works by applying a template to itself, the same move as the diagonal lemma.
See [Chapter 15](15-Recursive-Functions-and-Computability.md#155-kleenes-recursion-theorem-and-quines) and [Chapter 18](18-Godels-Incompleteness-Theorems.md#181-the-diagonal-lemma).

**Quotient set**
The set $A/{\sim}$ of all equivalence classes of an equivalence relation $\sim$ on $A$.
See [Chapter 6](06-Relations-and-Functions.md#62-equivalence-relations-and-partitions).

## R

**RAA (reductio ad absurdum)**
The classical rule of natural deduction: if assuming $\neg A$ leads to $\bot$, conclude $A$ (discharging $\neg A$). Without it the logic is intuitionistic.
See [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#92-natural-deduction).

**Random graph**
The unique countable graph in which, for any finite disjoint sets of vertices $U$ and $V$, some vertex is joined to all of $U$ and none of $V$. Its theory is $\aleph_0$-categorical.
See [Chapter 12](12-Model-Theory.md#124-dense-linear-orders-cantors-back-and-forth).

**Rational number**
A number $a/b$ with $a, b$ integers and $b \ne 0$. The rationals $\mathbb{Q}$ can be built from $\mathbb{Z}$ as equivalence classes of pairs.
See [Chapter 4](04-Proofs.md#41-what-a-proof-is) and [Chapter 6](06-Relations-and-Functions.md#66-constructing-the-integers-and-the-rationals).

**Real closed field**
An ordered field in which every positive element has a square root and every polynomial of odd degree has a root, such as $\mathbb{R}$. Tarski proved its theory has quantifier elimination and is decidable.
See [Chapter 12](12-Model-Theory.md#125-quantifier-elimination).

**Recursion theorem (set theory)**
Equations such as $m + 0 = m$, $m + S(n) = S(m + n)$ define a unique function on all of $\omega$. It is proved from the ZF axioms.
See [Chapter 8](08-Axiomatic-Set-Theory.md#83-the-natural-numbers-as-sets).

**Recursive function**
A total $\mu$-recursive function; equivalently, a total computable function. A recursive set is a decidable one.
See [Chapter 15](15-Recursive-Functions-and-Computability.md#153-mu-recursive-functions) and [Chapter 13](13-Algorithms-and-Turing-Machines.md#132-turing-machines).

**Recursively enumerable**
The older name for computably enumerable.
See [Chapter 14](14-Undecidability.md#141-the-halting-problem).

**Reduct**
A structure for a larger language with the interpretations of the extra symbols forgotten.
See [Chapter 11](11-Completeness-and-Compactness.md#112-henkins-proof).

**Reduction**
A computable translation $f$ of questions about one set $A$ into questions about another set $B$ with the same answers, used to transfer undecidability (or hardness) from $A$ to $B$.
See [Chapter 14](14-Undecidability.md#142-reductions).

**Reflexive relation**
A relation $R$ on $A$ with $a \mathrel{R} a$ for every $a \in A$.
See [Chapter 6](06-Relations-and-Functions.md#61-relations).

**Register machine**
A model of computation with finitely many registers holding natural numbers and instructions to increment, decrement-or-jump-if-zero, and halt. It computes exactly the Turing-computable functions.
See [Chapter 13](13-Algorithms-and-Turing-Machines.md#135-other-models-and-their-equivalence).

**Regular cardinal**
An infinite cardinal $\kappa$ that is not the union of fewer than $\kappa$ sets each of size less than $\kappa$.
See [Chapter 20](20-Where-Logic-Goes.md#201-large-cardinals).

**Regular language**
A set of strings decidable by a finite automaton. The palindromes do not form a regular language.
See [Chapter 13](13-Algorithms-and-Turing-Machines.md#check-yourself).

**Relation**
A relation from $A$ to $B$ is a subset of $A \times B$; a relation on $A$ is a subset of $A \times A$.
See [Chapter 6](06-Relations-and-Functions.md#61-relations).

**Relation symbol**
A symbol of a first-order language for a property or relation, with an arity, such as $<$ or the edge relation $E$.
See [Chapter 10](10-First-Order-Logic.md#101-languages-terms-and-formulas).

**Relativisation, natural proofs, algebrisation**
Three barriers showing that certain kinds of proof technique cannot settle P versus NP.
See [Chapter 16](16-Complexity.md#165-p-versus-np).

**Replacement**
The ZF axiom schema: the image of a set under a function defined by a formula is a set.
See [Chapter 8](08-Axiomatic-Set-Theory.md#82-the-zf-axioms-one-by-one).

**Representable**
A function $f$ is represented in a theory $T$ by a formula $\phi(\vec x, y)$ if, for all numbers, $T$ proves $\phi(\overline{\vec n}, \overline{m})$ when $f(\vec n) = m$ and proves that this $m$ is the only such value. Every computable function is representable in Robinson arithmetic.
See [Chapter 17](17-Arithmetic-and-Peano.md#174-representability-of-computable-functions).

**Representative**
Any element of an equivalence class, used to name the class.
See [Chapter 6](06-Relations-and-Functions.md#62-equivalence-relations-and-partitions).

**Reverse mathematics**
The program of finding which set-existence axioms are needed to prove theorems of ordinary mathematics, by proving the theorems equivalent to those axioms over a weak base system.
See [Chapter 20](20-Where-Logic-Goes.md#203-reverse-mathematics).

**Rice's theorem**
Every non-trivial semantic property of programs is undecidable: no algorithm decides, for example, whether a program computes a total function.
See [Chapter 14](14-Undecidability.md#143-rices-theorem).

**Right inverse**
A function $h : B \to A$ with $f \circ h = \mathrm{id}_B$. A function has one exactly when it is surjective, by the axiom of choice.
See [Chapter 6](06-Relations-and-Functions.md#65-inverses-and-composition).

**Ripple-carry adder**
A circuit that adds two $n$-bit numbers by chaining $n$ full adders, each passing its carry to the next.
See [Chapter 2](02-Propositional-Logic.md#26-logic-gates-and-circuits).

**Robinson arithmetic (Q)**
Peano arithmetic with the induction schema removed and one weak axiom (every number is 0 or a successor) added. It is finitely axiomatised and is enough for Gödel's theorems.
See [Chapter 17](17-Arithmetic-and-Peano.md#171-the-peano-axioms).

**Rosser's theorem**
Rosser's improvement of Gödel's first theorem: plain consistency (not $\omega$-consistency) is enough for incompleteness.
See [Chapter 18](18-Godels-Incompleteness-Theorems.md#182-the-first-incompleteness-theorem).

**Russell's paradox**
The set $R = \{x : x \notin x\}$ would satisfy $R \in R \iff R \notin R$, so unrestricted comprehension is inconsistent.
See [Chapter 5](05-Sets.md#55-russells-paradox).

## S

**S4 and S5**
Modal logics: S4 is K with axioms T ($\Box A \to A$) and 4 ($\Box A \to \Box\Box A$), valid on reflexive, transitive frames; S5 adds B, for frames whose relation is an equivalence relation.
See [Chapter 19](19-Other-Logics.md#192-modal-logic).

**s-m-n theorem**
Fixing some inputs of a program can be done computably: there is a computable $s$ with $\varphi_{s(e, x)}(y) = \varphi_e(x, y)$.
See [Chapter 15](15-Recursive-Functions-and-Computability.md#155-kleenes-recursion-theorem-and-quines).

**SAT (satisfiability problem)**
The problem of deciding whether a propositional formula is satisfiable. It is in NP and, by the Cook-Levin theorem, NP-complete.
See [Chapter 2](02-Propositional-Logic.md#22-tautologies-contradictions-equivalence) and [Chapter 16](16-Complexity.md#163-np-completeness-and-the-cook-levin-theorem).

**3-SAT**
SAT restricted to CNF formulas with exactly three literals per clause. It is still NP-complete, while 2-SAT is in P.
See [Chapter 16](16-Complexity.md#163-np-completeness-and-the-cook-levin-theorem).

**Satisfiable**
A formula (or set) that is true under at least one assignment, or in at least one structure.
See [Chapter 2](02-Propositional-Logic.md#22-tautologies-contradictions-equivalence), [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#91-syntax-and-semantics) and [Chapter 10](10-First-Order-Logic.md#104-logical-consequence).

**Schröder-Bernstein theorem**
If there are injections $A \to B$ and $B \to A$, then there is a bijection between $A$ and $B$. So $|A| \le |B|$ and $|B| \le |A|$ imply $|A| = |B|$.
See [Chapter 7](07-Infinity-and-Cardinality.md#75-the-schroder-bernstein-theorem).

**Second-order arithmetic**
The theory with variables for natural numbers and for sets of natural numbers, the setting of reverse mathematics.
See [Chapter 20](20-Where-Logic-Goes.md#203-reverse-mathematics).

**Second-order logic**
Logic that also quantifies over sets (or relations) of objects. It can characterise $\mathbb{N}$ and finiteness, but has no complete proof system and no compactness.
See [Chapter 10](10-First-Order-Logic.md#105-what-first-order-logic-cannot-say) and [Chapter 17](17-Arithmetic-and-Peano.md#171-the-peano-axioms).

**Self-dual function**
A Boolean function for which flipping all inputs flips the output: $f(\neg x_1, \dots, \neg x_n) = \neg f(x_1, \dots, x_n)$.
See [Chapter 2](02-Propositional-Logic.md#25-complete-sets-of-connectives).

**Semantic consequence**
$\Gamma \models \varphi$: every valuation that satisfies $\Gamma$ also satisfies $\varphi$.
See [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#91-syntax-and-semantics).

**Semantic property**
A property of machines that depends only on the function computed (or the set accepted), not on the code. It is non-trivial if some machine has it and some does not.
See [Chapter 14](14-Undecidability.md#143-rices-theorem).

**Semantics**
The study of meaning: valuations, structures and truth. Compare syntax.
See [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#91-syntax-and-semantics).

**Semi-decidable**
A set for which some machine halts and says yes on every member and never says yes on a non-member. Another name for computably enumerable.
See [Chapter 14](14-Undecidability.md#141-the-halting-problem).

**Semialgebraic set**
A subset of $\mathbb{R}^n$ defined by finitely many polynomial equations and inequalities combined with "and", "or" and "not". By Tarski-Seidenberg, projections of semialgebraic sets are semialgebraic.
See [Chapter 12](12-Model-Theory.md#125-quantifier-elimination).

**Sentence**
A first-order formula with no free variables, which is simply true or false in a structure.
See [Chapter 10](10-First-Order-Logic.md#101-languages-terms-and-formulas).

**Separation**
The ZF axiom schema: for every set $A$ and formula $\varphi$, the set $\{x \in A : \varphi(x)\}$ exists. It forms sets only inside a known set, which blocks Russell's paradox.
See [Chapter 8](08-Axiomatic-Set-Theory.md#82-the-zf-axioms-one-by-one).

**Set**
A collection of objects, considered as a single object in its own right. Two sets are equal when they have the same elements.
See [Chapter 5](05-Sets.md#51-sets-elements-and-subsets).

**Set-builder notation**
Describing a set by a property, as in $\{x \in \mathbb{Z} : x^2 < 10\}$.
See [Chapter 5](05-Sets.md#51-sets-elements-and-subsets).

**Sheffer stroke**
Another name for NAND, $p \uparrow q$.
See [Chapter 2](02-Propositional-Logic.md#25-complete-sets-of-connectives).

**Signature**
The non-logical symbols of a first-order language: its constant, function and relation symbols, with their arities.
See [Chapter 10](10-First-Order-Logic.md#101-languages-terms-and-formulas).

**Simple theory of types**
Church's 1940 type theory built on the typed lambda calculus, in which every term has a type built from base types and function types.
See [Chapter 19](19-Other-Logics.md#194-type-theory-and-proof-assistants).

**Singleton**
A set $\{a\}$ with exactly one element.
See [Chapter 8](08-Axiomatic-Set-Theory.md#82-the-zf-axioms-one-by-one).

**Skolem functions**
Functions that pick a witness $y$ for each true statement $\exists y\, \varphi(\vec x, y)$. Closing a set under them gives an elementary substructure.
See [Chapter 11](11-Completeness-and-Compactness.md#115-the-lowenheim-skolem-theorems-and-skolems-paradox).

**Skolem's paradox**
If ZFC is consistent it has a countable model, yet ZFC proves that uncountable sets exist. The resolution: "uncountable" inside the model means that no bijection with $\mathbb{N}$ exists in the model, so countability is relative to a model.
See [Chapter 11](11-Completeness-and-Compactness.md#115-the-lowenheim-skolem-theorems-and-skolems-paradox).

**Sound theory**
A theory every theorem of which is true in the standard model.
See [Chapter 18](18-Godels-Incompleteness-Theorems.md#182-the-first-incompleteness-theorem).

**Soundness theorem**
Every derivable formula is a semantic consequence: if $\Gamma \vdash \varphi$ then $\Gamma \models \varphi$. A proof system proves nothing false.
See [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#94-soundness).

**Standard model of arithmetic**
The structure $\mathcal{N} = (\mathbb{N}, 0, S, +, \cdot, <)$ with the usual meanings.
See [Chapter 10](10-First-Order-Logic.md#102-structures-and-satisfaction).

**Standard part**
For a finite hyperreal $x$, the unique real number $\mathrm{st}(x)$ infinitely close to it. In a nonstandard model of arithmetic, the standard part is the initial segment of values of the numerals.
See [Chapter 11](11-Completeness-and-Compactness.md#114-nonstandard-models-and-infinitesimals) and [Chapter 17](17-Arithmetic-and-Peano.md#172-what-pa-proves).

**Statement**
A sentence that is either true or false, and not both. Also called a proposition.
See [Chapter 1](01-Statements-and-Truth.md#11-what-a-statement-is).

**Strict order**
The strict version $\prec$ of a partial order: $a \prec b$ means $a \preceq b$ and $a \ne b$. It is irreflexive and transitive.
See [Chapter 6](06-Relations-and-Functions.md#63-orders) and [Chapter 10](10-First-Order-Logic.md#103-examples-groups-orders-arithmetic-graphs).

**Strong induction**
Induction in which the step may assume $P(0), P(1), \dots, P(k)$ all at once to prove $P(k + 1)$. It is equivalent to ordinary induction and to the well-ordering principle.
See [Chapter 4](04-Proofs.md#45-induction).

**Structural induction**
Proving that every formula has a property by showing every variable has it and each building rule preserves it.
See [Chapter 2](02-Propositional-Logic.md#21-formulas-and-their-trees) and [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#91-syntax-and-semantics).

**Structure**
For a first-order language, a non-empty domain together with an interpretation of each of its symbols; also called an $L$-structure.
See [Chapter 10](10-First-Order-Logic.md#102-structures-and-satisfaction).

**Subformula**
A formula that occurs as a part of another, at a node of its tree; the whole formula counts as one of its subformulas.
See [Chapter 2](02-Propositional-Logic.md#21-formulas-and-their-trees).

**Subset**
$A \subseteq B$ when every element of $A$ is an element of $B$. Then $B$ is a superset of $A$.
See [Chapter 5](05-Sets.md#51-sets-elements-and-subsets).

**Substitutable**
A term $t$ is substitutable for $x$ in $\varphi$ if no variable of $t$ gets captured by a quantifier when $t$ replaces the free occurrences of $x$.
See [Chapter 10](10-First-Order-Logic.md#101-languages-terms-and-formulas).

**Substructure**
A structure whose domain is a subset of another's and on which the inclusion map is an embedding, such as $(\mathbb{Z}, +)$ inside $(\mathbb{Q}, +)$.
See [Chapter 12](12-Model-Theory.md#121-theories-and-models).

**Successor**
The next natural number, $S(n) = n + 1$. In set theory the successor of $x$ is $x \cup \{x\}$.
See [Chapter 8](08-Axiomatic-Set-Theory.md#83-the-natural-numbers-as-sets) and [Chapter 17](17-Arithmetic-and-Peano.md#171-the-peano-axioms).

**Sufficient condition**
In $p \to q$, $p$ is sufficient for $q$: having $p$ is enough to guarantee $q$.
See [Chapter 1](01-Statements-and-Truth.md#14-if-then).

**Surjective**
A function every element of whose codomain is a value: for every $b \in B$ there is $a$ with $f(a) = b$. Also called onto.
See [Chapter 6](06-Relations-and-Functions.md#64-functions-as-sets-of-pairs).

**Symmetric difference**
$A \,\triangle\, B = (A \setminus B) \cup (B \setminus A)$, the elements in exactly one of the two sets: the set version of exclusive or.
See [Chapter 5](05-Sets.md#52-operations-and-venn-diagrams).

**Symmetric relation**
A relation in which $a \mathrel{R} b$ implies $b \mathrel{R} a$.
See [Chapter 6](06-Relations-and-Functions.md#61-relations).

**Syntax**
The study of form: formulas as strings of symbols and proofs as lists of formulas, checkable without knowing what the symbols mean. Compare semantics.
See [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#91-syntax-and-semantics).

## T

**t-norm**
An operation on $[0, 1]$ used for "and" in fuzzy logic: commutative, associative, monotone, with 1 as identity, such as $\min$ or multiplication.
See [Chapter 19](19-Other-Logics.md#193-many-valued-and-fuzzy-logic).

**Tactic**
A command in a proof assistant, such as "do induction on $n$" or "simplify", that builds part of a formal proof.
See [Chapter 19](19-Other-Logics.md#194-type-theory-and-proof-assistants).

**Tarski's definition of truth**
The recursive definition of $\mathcal{M} \models \varphi[s]$, truth of a formula in a structure under an assignment, clause by clause for atomic formulas, connectives and quantifiers.
See [Chapter 10](10-First-Order-Logic.md#102-structures-and-satisfaction).

**Tarski's undefinability theorem**
No formula $\mathrm{Tr}(x)$ of arithmetic is a truth definition for arithmetic: arithmetical truth is not arithmetically definable.
See [Chapter 18](18-Godels-Incompleteness-Theorems.md#184-tarskis-undefinability-of-truth).

**Tautology**
A formula true under every assignment, such as $p \vee \neg p$. In a many-valued logic, a formula that always takes the top value.
See [Chapter 2](02-Propositional-Logic.md#22-tautologies-contradictions-equivalence) and [Chapter 19](19-Other-Logics.md#193-many-valued-and-fuzzy-logic).

**Term**
An expression of a first-order language naming an object: a variable, a constant, or a function symbol applied to terms, such as $(x + S(0)) \cdot y$.
See [Chapter 10](10-First-Order-Logic.md#101-languages-terms-and-formulas).

**Term model**
The model built in Henkin's proof, whose elements are equivalence classes of closed terms.
See [Chapter 11](11-Completeness-and-Compactness.md#112-henkins-proof).

**Theorem**
An important proved statement. In a formal system, a formula derivable from the axioms alone, written $\vdash \varphi$.
See [Chapter 4](04-Proofs.md#41-what-a-proof-is) and [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#93-a-hilbert-system-and-the-deduction-theorem).

**Theory of a structure**
$\mathrm{Th}(\mathcal{M})$, the set of all sentences true in $\mathcal{M}$. It is always complete.
See [Chapter 12](12-Model-Theory.md#121-theories-and-models).

**Topological sort**
Listing the elements of a finite partial order so that each comes after everything below it. It shows every finite partial order extends to a total order.
See [Chapter 6](06-Relations-and-Functions.md#63-orders).

**Total order**
A partial order in which every two elements are comparable. Also called a linear order.
See [Chapter 6](06-Relations-and-Functions.md#63-orders).

**Transcendental number**
A real number that is not algebraic, such as $\pi$ or $e$. Since the algebraic numbers are countable, almost all reals are transcendental.
See [Chapter 7](07-Infinity-and-Cardinality.md#73-cantors-diagonal-argument).

**Transfinite induction**
Induction along a well-order: if a property passes from all elements below $x$ to $x$ itself, it holds everywhere.
See [Chapter 6](06-Relations-and-Functions.md#63-orders).

**Transitive relation**
A relation in which $a \mathrel{R} b$ and $b \mathrel{R} c$ imply $a \mathrel{R} c$.
See [Chapter 6](06-Relations-and-Functions.md#61-relations).

**Transitive set**
A set every element of which is also a subset of it. Each natural number and each ordinal is transitive.
See [Chapter 8](08-Axiomatic-Set-Theory.md#83-the-natural-numbers-as-sets).

**True arithmetic**
$\mathrm{Th}(\mathcal{N})$, the set of all sentences of the language of arithmetic true in the standard model. It is complete but not computably axiomatisable.
See [Chapter 11](11-Completeness-and-Compactness.md#114-nonstandard-models-and-infinitesimals).

**Truth definition**
A formula $\mathrm{Tr}(x)$ with $\mathrm{Tr}(\ulcorner \varphi \urcorner) \leftrightarrow \varphi$ for every sentence $\varphi$. Tarski showed arithmetic has none.
See [Chapter 18](18-Godels-Incompleteness-Theorems.md#184-tarskis-undefinability-of-truth).

**Truth table**
A table listing the truth value of a formula for every combination of truth values of its variables: $2^n$ rows for $n$ variables.
See [Chapter 1](01-Statements-and-Truth.md#13-truth-tables).

**Truth value**
True (T) or false (F), sometimes written 1 and 0.
See [Chapter 1](01-Statements-and-Truth.md#11-what-a-statement-is).

**Truth-functional**
A connective whose value depends only on the values of its parts, not on their meaning. All classical and fuzzy connectives are truth-functional.
See [Chapter 19](19-Other-Logics.md#193-many-valued-and-fuzzy-logic).

**Turing complete**
A system that can simulate any Turing machine, and so compute every computable function. Conway's Game of Life and the cellular automaton Rule 110 are examples.
See [Chapter 13](13-Algorithms-and-Turing-Machines.md#135-other-models-and-their-equivalence).

**Turing machine**
Turing's model of computation: a finite set of states, a tape alphabet with a blank, a two-way infinite tape, a head, and a transition function saying, from the state and the symbol read, what to write, which way to move and which state to enter.
See [Chapter 13](13-Algorithms-and-Turing-Machines.md#132-turing-machines).

**Turing reduction**
A reduction that allows an algorithm for $A$ to ask a $B$-oracle many questions. It leads to the degrees of unsolvability.
See [Chapter 14](14-Undecidability.md#142-reductions).

**Type theory**
A foundation in which every term has a type, descended from Russell's types. Modern forms (dependent type theory) underlie most proof assistants.
See [Chapter 19](19-Other-Logics.md#194-type-theory-and-proof-assistants) and [Chapter 8](08-Axiomatic-Set-Theory.md#86-zfc-as-the-usual-foundation).

## U

**Ultrafilter**
A filter $\mathcal{U}$ on $I$ that, for every $A \subseteq I$, contains $A$ or its complement. It decides of every set whether it is "large".
See [Chapter 12](12-Model-Theory.md#126-ultraproducts).

**Ultraproduct**
For structures $\mathcal{M}_i$ and an ultrafilter $\mathcal{U}$ on $I$, the structure $\prod_i \mathcal{M}_i / \mathcal{U}$ of sequences, with two identified when they agree on a set in $\mathcal{U}$. When all factors are the same $\mathcal{M}$, it is an ultrapower.
See [Chapter 12](12-Model-Theory.md#126-ultraproducts).

**Uncountable**
A set that is not countable, such as $\mathbb{R}$ or $\mathcal{P}(\mathbb{N})$.
See [Chapter 7](07-Infinity-and-Cardinality.md#72-countable-sets).

**Uniform continuity**
$f$ is uniformly continuous on $D$ if for every $\varepsilon > 0$ there is $\delta > 0$ working for all points at once; in continuity $\delta$ may depend on the point. The difference is the order of quantifiers.
See [Chapter 3](03-Quantifiers.md#33-order-of-quantifiers-matters).

**Union**
$A \cup B = \{x : x \in A \text{ or } x \in B\}$, the elements in at least one. The ZF union axiom says the union of all members of a set is a set.
See [Chapter 5](05-Sets.md#52-operations-and-venn-diagrams) and [Chapter 8](08-Axiomatic-Set-Theory.md#82-the-zf-axioms-one-by-one).

**Unique readability**
Every formula can be built in only one way: it has exactly one parse tree. This is what allows definitions by recursion on formulas.
See [Chapter 2](02-Propositional-Logic.md#21-formulas-and-their-trees) and [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#91-syntax-and-semantics).

**Uniqueness**
The second half of proving "exactly one": showing that any two objects with the property are equal.
See [Chapter 3](03-Quantifiers.md#31-for-all-there-exists).

**Univalence axiom**
Voevodsky's axiom of homotopy type theory: for types $A$ and $B$, equivalences between them correspond to identifications $A = B$. Isomorphic structures are then equal.
See [Chapter 20](20-Where-Logic-Goes.md#204-homotopy-type-theory-and-univalence).

**Universal quantifier**
The symbol $\forall$, "for all". $\forall x\, P(x)$ is true when $P(a)$ holds for every $a$ in the domain.
See [Chapter 3](03-Quantifiers.md#31-for-all-there-exists).

**Universal Turing machine**
A single Turing machine $U$ that, given the code of any machine $M$ and an input $w$, simulates $M$ on $w$. It is the idea of a stored-program computer.
See [Chapter 13](13-Algorithms-and-Turing-Machines.md#134-universal-machines).

**Universe (of a set problem)**
A fixed set $U$ in which all the sets of a problem live, used to define complements.
See [Chapter 5](05-Sets.md#52-operations-and-venn-diagrams).

**Unrestricted comprehension**
The naive principle that every property defines a set $\{x : P(x)\}$. Russell's paradox refutes it.
See [Chapter 5](05-Sets.md#55-russells-paradox).

**Upper bound**
An element $u$ with $s \preceq u$ for every $s$ in a given subset $S$.
See [Chapter 6](06-Relations-and-Functions.md#63-orders).

**Urelement**
An object that is not a set but can be an element of sets. Standard ZF has none.
See [Chapter 8](08-Axiomatic-Set-Theory.md#81-why-axioms).

## V

**Vacuously true**
True because the hypothesis is never satisfied: a conditional with a false hypothesis, or a statement about every element of the empty set.
See [Chapter 1](01-Statements-and-Truth.md#14-if-then) and [Chapter 3](03-Quantifiers.md#31-for-all-there-exists).

**Valid**
An argument is valid if the conclusion is true whenever all premises are. A first-order formula is valid, $\models \varphi$, if it is true in every structure under every assignment.
See [Chapter 2](02-Propositional-Logic.md#22-tautologies-contradictions-equivalence) and [Chapter 10](10-First-Order-Logic.md#104-logical-consequence).

**Valid on a frame**
A modal formula true at every world of a frame under every valuation.
See [Chapter 19](19-Other-Logics.md#192-modal-logic).

**Valuation**
A function from the propositional variables to $\{T, F\}$, extended to all formulas by the truth tables.
See [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md#91-syntax-and-semantics).

**Venn diagram**
A picture of sets as overlapping regions inside a rectangle for the universe.
See [Chapter 5](05-Sets.md#52-operations-and-venn-diagrams).

**Verifier**
A polynomial-time algorithm that checks a proposed certificate for an input. A problem is in NP when yes-instances are exactly those with a certificate the verifier accepts.
See [Chapter 16](16-Complexity.md#162-np-and-certificates).

**Von Neumann-Bernays-Gödel (NBG)**
A set theory that makes classes official objects. It proves the same statements about sets as ZFC and is finitely axiomatisable.
See [Chapter 8](08-Axiomatic-Set-Theory.md#86-zfc-as-the-usual-foundation).

## W

**Wason selection task**
A famous experiment on reasoning with "if ... then", in which most people fail to turn over the card that could falsify the rule.
See [Chapter 1](01-Statements-and-Truth.md#14-if-then).

**Well defined**
An operation on equivalence classes is well defined if equivalent inputs give equivalent outputs, so the answer does not depend on the representatives chosen.
See [Chapter 6](06-Relations-and-Functions.md#66-constructing-the-integers-and-the-rationals).

**Well-order**
A linear order in which every nonempty subset has a least element, like $(\mathbb{N}, \le)$. Well-orders are not first-order axiomatisable.
See [Chapter 6](06-Relations-and-Functions.md#63-orders) and [Chapter 10](10-First-Order-Logic.md#105-what-first-order-logic-cannot-say).

**Well-ordering principle**
Every nonempty set of natural numbers has a least element. It is equivalent to induction.
See [Chapter 4](04-Proofs.md#45-induction).

**Well-ordering theorem**
Every set can be well-ordered. Zermelo proved it from the axiom of choice, and it is equivalent to choice over ZF.
See [Chapter 8](08-Axiomatic-Set-Theory.md#84-the-axiom-of-choice).

**Without loss of generality (WLOG)**
A phrase saying that one case is enough because the others follow by symmetry, as in "WLOG $|x| \ge |y|$".
See [Chapter 4](04-Proofs.md#44-proof-by-cases).

**Witness**
An object $a$ with $P(a)$ true, showing $\exists x\, P(x)$. In Henkin's proof, a new constant naming such an object; in complexity, a certificate.
See [Chapter 3](03-Quantifiers.md#31-for-all-there-exists) and [Chapter 11](11-Completeness-and-Compactness.md#112-henkins-proof).

**Word problem**
For a group presentation, the problem of deciding whether a given word in the generators equals the identity. Novikov and Boone found finitely presented groups where it is undecidable.
See [Chapter 14](14-Undecidability.md#145-the-word-problem-for-groups).

## Z

**Zermelo-Fraenkel set theory (ZF)**
The standard axioms for sets: extensionality, empty set, pairing, union, power set, separation, infinity, replacement and foundation.
See [Chapter 8](08-Axiomatic-Set-Theory.md#82-the-zf-axioms-one-by-one).

**ZFC**
ZF together with the axiom of choice: the usual foundation of mathematics, in which nearly all mathematics can be written.
See [Chapter 8](08-Axiomatic-Set-Theory.md#86-zfc-as-the-usual-foundation).

**Zorn's lemma**
If every chain in a nonempty partial order has an upper bound, the order has a maximal element. It is equivalent to the axiom of choice and is how choice is usually used, for example to give every vector space a basis.
See [Chapter 8](08-Axiomatic-Set-Theory.md#84-the-axiom-of-choice).
