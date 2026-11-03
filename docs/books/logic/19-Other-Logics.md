# 19. Other logics

*Everything so far used classical logic: every statement is true or false, and "not not $p$" is the same as $p$. That
logic is the right tool for most of mathematics, but it is not the only one. What if a proof of "there exists" must show
you the object? What if you want to reason about what is necessary, known, or will happen later? What if truth comes in
degrees? This chapter looks at the main alternatives, each with its own precise semantics: intuitionistic logic, modal
logic, many-valued and fuzzy logic. Then it turns to type theory, the logic behind today's proof assistants, and to the
Curry-Howard correspondence, the discovery that proofs and programs are the same thing seen from two sides.*

!!! abstract "In this chapter"
    **You will learn:**

    - why intuitionists reject the law of excluded middle, the BHK reading of the connectives, and how a Kripke model shows
      that $p \vee \neg p$ is not provable intuitionistically
    - modal logic: necessity and possibility, Kripke frames, and the proofs that the axioms T and 4 correspond to reflexive and
      transitive frames
    - Łukasiewicz's and Kleene's three-valued logics, fuzzy logic, and what truth degrees are (and are not)
    - what type theory is, how proof assistants such as Lean and Coq (now Rocq) check proofs, and how the four-colour theorem
      and the Kepler conjecture were formally verified
    - the Curry-Howard correspondence: propositions are types, proofs are programs, and simplifying a proof is running a
      program

    **You need:** [Chapter 2](02-Propositional-Logic.md) (truth tables), [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md)
    (natural deduction, soundness and completeness), [Chapter 10](10-First-Order-Logic.md) (structures), and for 19.2 the
    provability box of [Chapter 18](18-Godels-Incompleteness-Theorems.md). Section 19.5 uses the lambda calculus of
    [Chapter 13](13-Algorithms-and-Turing-Machines.md).

    **Levels:** 19.1 and 19.2 are intermediate to advanced; 19.3 is intermediate; 19.4 is advanced in places but mostly a
    guided tour; 19.5 is advanced.

## 19.1 Intuitionistic logic and constructive mathematics

*Level: intermediate, with advanced parts marked.* Here is a famous proof.

**Claim.** There are irrational numbers $a$ and $b$ such that $a^b$ is rational.

*Proof.* Consider $\sqrt 2^{\sqrt 2}$. Either it is rational or it is not. If it is rational, take $a = b = \sqrt 2$. If it is
irrational, take $a = \sqrt 2^{\sqrt 2}$ and $b = \sqrt 2$; then

$$
a^b = \big( \sqrt 2^{\sqrt 2} \big)^{\sqrt 2} = \sqrt 2^{\sqrt 2 \cdot \sqrt 2} = \sqrt 2^{2} = 2,
$$

which is rational. Either way the claim holds. $\square$

The proof is correct in classical logic. But it does not tell you *which* pair works. It uses the **law of excluded
middle**, $p \vee \neg p$, for a statement $p$ ("$\sqrt 2^{\sqrt 2}$ is rational") whose truth the proof does not determine.
(In fact $\sqrt 2^{\sqrt 2}$ is irrational, even transcendental, by the Gelfond-Schneider theorem of 1934, but that is a
much deeper result.)

Here is a different proof that does name the pair. Take $a = \sqrt 2$ and $b = \log_2 9$. Then
$a^b = 2^{\frac12 \log_2 9} = 2^{\log_2 3} = 3$. And $b$ is irrational: if $\log_2 9 = p/q$ with positive integers $p, q$, then
$2^p = 9^q$, but the left side is even and the right side is odd. *Check:* `math.sqrt(2) ** math.log2(9)` in Python gives
$3.0000000000000004$, which is 3 up to rounding.

The second proof is **constructive**: it exhibits the object it claims exists. Constructive mathematics asks for proofs of
this kind throughout, and the logic that results is **intuitionistic logic**.

### Brouwer, Heyting and the BHK reading

L. E. J. Brouwer, the Dutch topologist, argued from his 1907 thesis onward that mathematics is a mental construction, and that
excluded middle, valid for finite collections, is not justified for infinite ones: to assert "every number has property $P$,
or some number lacks it" you must be able to decide which, and for infinite domains you generally cannot. He called his view
**intuitionism**. Brouwer himself distrusted formal logic, but his student Arend Heyting wrote down formal rules for
intuitionistic logic in 1930. Andrey Kolmogorov gave an interpretation in terms of "problems" and their solutions in 1932.
Their explanation of the connectives is called the **BHK interpretation** (Brouwer-Heyting-Kolmogorov):

- a proof of $A \wedge B$ is a pair: a proof of $A$ and a proof of $B$;
- a proof of $A \vee B$ is a proof of $A$ or a proof of $B$, *together with the information which one*;
- a proof of $A \rightarrow B$ is a method that turns any proof of $A$ into a proof of $B$;
- there is no proof of $\bot$ (falsity);
- $\neg A$ means $A \rightarrow \bot$: a method turning any proof of $A$ into a proof of absurdity;
- a proof of $\exists x \, A(x)$ is an object $c$ together with a proof of $A(c)$;
- a proof of $\forall x \, A(x)$ is a method that gives a proof of $A(c)$ for every $c$.

Under this reading, $p \vee \neg p$ would need a method that, for every statement $p$, either proves it or refutes it. Nobody
has one (and for arithmetic, Chapter 14 shows there cannot be one). So intuitionists do not assert it. Note what they do *not*
do: they do not assert its negation. In fact $\neg \neg (p \vee \neg p)$ is intuitionistically provable (see below).

### The rules

Intuitionistic propositional logic has the natural deduction rules of [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md)
for $\wedge, \vee, \rightarrow, \bot$, including **ex falso** (from $\bot$ infer anything), but *without* the classical rule
"from $\neg \neg A$ infer $A$" (or equivalently without excluded middle, or without proof by contradiction in the form "assume
$\neg A$, derive $\bot$, conclude $A$").

What remains is the rule "assume $A$, derive $\bot$, conclude $\neg A$". That is not proof by contradiction; it is just the
introduction rule for $\rightarrow$, since $\neg A$ *is* $A \rightarrow \bot$. Constructive mathematicians prove negative
statements this way all the time. The proof that $\sqrt 2$ is irrational ([Chapter 4](04-Proofs.md)) is constructively fine: it
assumes $\sqrt 2 = p/q$ and derives a contradiction, which proves "$\sqrt 2$ is not rational".

**Example 1 (intuitionistic proofs).**

- $A \rightarrow \neg \neg A$. Assume $A$. To prove $\neg \neg A$, i.e. $\neg A \rightarrow \bot$, assume $\neg A$. Applying
  $\neg A$ to $A$ gives $\bot$. Done. (The converse, $\neg \neg A \rightarrow A$, is not provable.)
- $\neg \neg \neg A \rightarrow \neg A$. Assume $\neg \neg \neg A$ and $A$. By the previous item, $\neg \neg A$. Applying
  $\neg \neg \neg A$ to it gives $\bot$. So $\neg A$. Triple negation collapses to single negation.
- $\neg \neg (A \vee \neg A)$. Assume $\neg (A \vee \neg A)$; we derive $\bot$. First, if $A$ held, then $A \vee \neg A$ would,
  contradicting the assumption; so $\neg A$. But then $A \vee \neg A$ holds (right side), again contradicting the assumption.
  So $\bot$.
- $\neg (A \vee B) \leftrightarrow (\neg A \wedge \neg B)$ is provable both ways, but of the other De Morgan law only
  $(\neg A \vee \neg B) \rightarrow \neg (A \wedge B)$ is.

### Kripke models

*Level: advanced.* How do you show that something is *not* provable intuitionistically? Truth tables will not do, because
every two-valued truth table is classical. Saul Kripke gave a semantics in 1965 that does the job. Think of it as a picture of
knowledge growing over time.

A **Kripke model** consists of a set $W$ of **stages** (states of knowledge), a partial order $\le$ on $W$ ($w \le v$: stage $v$
is a possible future of stage $w$), and for each propositional variable $p$ a set of stages at which $p$ has been established,
which must be **persistent**: if $p$ holds at $w$ and $w \le v$, it holds at $v$ (we never forget a proof). Then define
"$w$ forces $A$", written $w \Vdash A$:

- $w \Vdash p$ if $p$ is established at $w$;
- $w \Vdash A \wedge B$ if $w \Vdash A$ and $w \Vdash B$;
- $w \Vdash A \vee B$ if $w \Vdash A$ or $w \Vdash B$;
- $w \nVdash \bot$;
- $w \Vdash A \rightarrow B$ if for *every* $v \ge w$, if $v \Vdash A$ then $v \Vdash B$.

So $w \Vdash \neg A$ means no future stage ever forces $A$. The key clause is the one for $\rightarrow$, which looks into the
future.

**Theorem 19.1 (Kripke, 1965).** A propositional formula is provable in intuitionistic logic if and only if it is forced at
every stage of every Kripke model. (Soundness is a routine induction on proofs; completeness is proved like the completeness
theorem of Chapter 9, with a canonical model whose stages are "prime theories". It is enough to use finite models.)

**Example 2 (excluded middle fails).** Take two stages $w_0 \le w_1$, with $p$ established only at $w_1$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 150" role="img" aria-label="A Kripke model with two stages. The lower stage w0 has nothing established. An arrow goes up to the stage w1, where p is established. At w0, neither p nor not-p is forced.">
  <circle cx="160" cy="115" r="22" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="160" cy="35" r="22" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <line x1="160" y1="92" x2="160" y2="62" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="160,58 155,68 165,68" fill="currentColor"/>
  <g fill="currentColor" font-size="13" text-anchor="middle">
    <text x="160" y="120">w0</text>
    <text x="160" y="40">w1</text>
  </g>
  <g fill="currentColor" font-size="12">
    <text x="192" y="39">p holds</text>
    <text x="192" y="112">p not yet; ¬p fails too,</text>
    <text x="192" y="127">since p holds later</text>
  </g>
</svg>
</div>

At $w_0$: $p$ is not forced (not yet established), and $\neg p$ is not forced either, because the future stage $w_1$ forces $p$.
So $w_0 \nVdash p \vee \neg p$. By Theorem 19.1, $p \vee \neg p$ is not intuitionistically provable. The same model refutes
$\neg \neg p \rightarrow p$: no stage $\ge w_0$ forces $\neg p$ (since $w_1$ forces $p$, and at $w_1$ itself $\neg p$ fails),
so $w_0 \Vdash \neg \neg p$, but $w_0 \nVdash p$.

**Try it in Python:**

```python
above = {0: [0, 1], 1: [1]}     # stages reachable from each stage
val = {"p": {1}, "q": set()}    # p established at stage 1 only

def forces(w, f):
    op = f[0]
    if op == "var": return w in val[f[1]]
    if op == "bot": return False
    if op == "and": return forces(w, f[1]) and forces(w, f[2])
    if op == "or":  return forces(w, f[1]) or forces(w, f[2])
    if op == "imp": return all(not forces(v, f[1]) or forces(v, f[2])
                               for v in above[w])

neg = lambda f: ("imp", f, ("bot",))
p, q = ("var", "p"), ("var", "q")
print(forces(0, ("or", p, neg(p))))                  # False
print(forces(0, ("imp", neg(neg(p)), p)))            # False
print(forces(0, neg(neg(("or", p, neg(p))))))        # True
print(forces(0, ("imp", ("imp", ("imp", p, q), p), p)))   # Peirce's law: False
```

### Classical logic inside intuitionistic logic

Intuitionistic logic is weaker than classical logic, but not poorer: it can simulate classical reasoning.

**Theorem 19.2 (Glivenko, 1929).** A propositional formula $A$ is a classical tautology if and only if $\neg \neg A$ is
provable intuitionistically.

For first-order logic and arithmetic, Gödel (1933) and Gentzen independently gave the **negative translation** $A \mapsto A^N$,
which puts double negations in front of atomic formulas, disjunctions and existential quantifiers. Then
$\mathrm{PA} \vdash A$ if and only if $\mathrm{HA} \vdash A^N$, where HA is **Heyting arithmetic**, the Peano axioms with
intuitionistic logic. In particular, HA is consistent if and only if PA is: constructive arithmetic is not "safer" than
classical arithmetic in the sense of consistency.

What HA has that PA lacks are the **disjunction and existence properties**: if $\mathrm{HA} \vdash A \vee B$ (with no free
variables) then $\mathrm{HA} \vdash A$ or $\mathrm{HA} \vdash B$; and if $\mathrm{HA} \vdash \exists x \, A(x)$ then
$\mathrm{HA} \vdash A(\overline n)$ for some numeral $n$, which can be computed from the proof. A constructive proof contains
an algorithm.

### Constructive mathematics in practice

Errett Bishop's *Foundations of Constructive Analysis* (1967) showed that much of real analysis can be developed
constructively, with the right definitions. Some classical theorems hold only in an approximate form. For example, the
intermediate value theorem in its usual form ("a continuous $f$ on $[0, 1]$ with $f(0) < 0 < f(1)$ has a zero") is not
constructively provable, because finding the zero may require deciding whether a real number is exactly $0$. The approximate
version ("for every $\varepsilon > 0$ there is $x$ with $|f(x)| < \varepsilon$") is constructive, and it is all that a
computation can ever deliver. Compare the bisection proof in the [Calculus book](../calculus/18-The-Real-Numbers.md): it
needs to decide the sign of $f$ at each midpoint.

Brouwer's own intuitionism went further than Bishop's, with principles that contradict classical mathematics; for example,
he argued that every function from $[0, 1]$ to $\mathbb{R}$ is continuous. Bishop-style constructive mathematics avoids such
principles and is consistent with classical mathematics: every constructive theorem is also a classical one.

A semantics that mathematicians like: interpret each formula as an **open set** of $\mathbb{R}$, with $\wedge$ as
intersection, $\vee$ as union, and $\neg U$ as the *interior* of the complement. Take $p = (0, \infty)$. Then
$\neg p = (-\infty, 0)$ and $p \vee \neg p = \mathbb{R} \setminus \{0\}$, which is not the whole line, so $p \vee \neg p$ is not
"true everywhere". Algebras of this kind are called **Heyting algebras**, and they are to intuitionistic logic what Boolean
algebras are to classical logic.

## 19.2 Modal logic

*Level: intermediate to advanced.* "It is raining" might be false; "it must be raining" or "it might be raining" says
something more. "$2 + 2 = 4$" is not only true but **necessarily** true; "Mars has two moons" is true but, one feels, could
have been otherwise. **Modal logic** adds operators for such ideas:

- $\Box A$: "necessarily $A$" (or, in other readings, "$A$ is known", "$A$ is provable", "$A$ will always be true");
- $\Diamond A$: "possibly $A$", defined as $\neg \Box \neg A$.

C. I. Lewis began the modern study in the 1910s, looking for a better "implication" than the material conditional of
[Chapter 1](01-Statements-and-Truth.md); his systems S1 to S5 appeared in Lewis and Langford's *Symbolic Logic* (1932). The
subject became mathematics when Kripke (1959, 1963) and others, independently including Stig Kanger and Jaakko Hintikka, gave
it a semantics of possible worlds.

### Kripke frames

A **frame** is a set $W$ of **worlds** with a binary **accessibility relation** $R$ ($wRv$: world $v$ is possible from the point
of view of $w$). A **model** adds a valuation: for each propositional variable, the set of worlds where it is true. Truth at a
world is classical for $\neg, \wedge, \vee, \rightarrow$, and

- $w \models \Box A$ if $v \models A$ for **every** $v$ with $wRv$;
- $w \models \Diamond A$ if $v \models A$ for **some** $v$ with $wRv$.

A formula is **valid on a frame** if it is true at every world under every valuation.

**The basic system K** (named after Kripke) has all classical tautologies, the **distribution axiom**

$$
\mathrm{K}: \quad \Box (A \rightarrow B) \rightarrow (\Box A \rightarrow \Box B),
$$

modus ponens, and the **necessitation rule**: from $\vdash A$ infer $\vdash \Box A$.

**Theorem 19.3.** Axiom K is valid on every frame, and necessitation preserves validity.

*Proof.* Suppose $w \models \Box (A \rightarrow B)$ and $w \models \Box A$. Let $wRv$. Then $v \models A \rightarrow B$ and
$v \models A$, so $v \models B$. Since $v$ was arbitrary, $w \models \Box B$. For necessitation: if $A$ is true at every world
of every model on the frame, then for any $w$, every $v$ with $wRv$ satisfies $A$, so $w \models \Box A$. $\square$

K is sound and complete for the class of all frames (completeness via a canonical model, as in Chapter 9).

### Axioms and frame properties

Adding axioms gives stronger logics, and each common axiom matches a property of $R$.

| name | axiom | frame property | reading |
|---|---|---|---|
| T | $\Box A \rightarrow A$ | reflexive: $wRw$ | what is necessary is true |
| 4 | $\Box A \rightarrow \Box \Box A$ | transitive | necessity is necessary |
| B | $A \rightarrow \Box \Diamond A$ | symmetric | what is true is necessarily possible |
| D | $\Box A \rightarrow \Diamond A$ | serial: every $w$ sees some $v$ | obligations are consistent |

**Theorem 19.4.** Axiom T is valid on a frame if and only if the frame is reflexive. Axiom 4 is valid on a frame if and only if
the frame is transitive.

*Proof.* (T, if.) In a reflexive frame, if $w \models \Box A$ then, since $wRw$, $w \models A$.

(T, only if.) Suppose $R$ is not reflexive: some $w$ has not $wRw$. Choose the valuation where $p$ is true at every world
except $w$. Then every $v$ with $wRv$ differs from $w$, so $w \models \Box p$; but $w \nmodels p$. So $\Box p \rightarrow p$
fails at $w$.

(4, if.) Let $R$ be transitive and $w \models \Box A$. Take $wRv$ and $vRu$. By transitivity $wRu$, so $u \models A$. Hence
$v \models \Box A$ for every $v$ with $wRv$, i.e. $w \models \Box \Box A$.

(4, only if.) Suppose $wRv$, $vRu$ but not $wRu$. Let $p$ be true exactly at the worlds $x$ with $wRx$. Then $w \models \Box p$.
But $u \nmodels p$, so $v \nmodels \Box p$, so $w \nmodels \Box \Box p$. $\square$

*Check:* a brute-force search over all 512 relations on a three-element set, with every valuation of one variable, finds that
T is valid exactly on the reflexive ones and 4 exactly on the transitive ones.

The standard systems are

- **T** = K + T (reflexive frames);
- **S4** = K + T + 4 (reflexive and transitive frames: preorders);
- **S5** = K + T + 4 + B (equivalence relations; in effect, every world sees every world in its class).

In S5 any string of boxes and diamonds reduces to its last one: $\Diamond \Box A \leftrightarrow \Box A$, for example. S4 is
closely tied to intuitionistic logic: Gödel (1933) showed that translating each atom $p$ as $\Box p$ (and each connective
suitably, with $\Box$ in front of implications) embeds intuitionistic logic into S4. Kripke models for intuitionistic logic
are exactly S4 frames with persistent valuations.

**Example 3.** Worlds $w, v, u$ with $wRv$, $wRu$ (and nothing else). Let $p$ be true at $v$ only. Then $w \models \Diamond p$
(via $v$) and $w \nmodels \Box p$ (because of $u$). Also $v \models \Box p$ and $v \models \Box \neg p$, both vacuously,
because $v$ sees no world: a dead end makes every box true and every diamond false. That is why axiom D needs seriality.

### Readings and uses

- **Epistemic logic**: $\Box A$ as "the agent knows $A$". S5 is the usual idealisation (knowledge is true, and agents know
  what they know and what they do not know). Multi-agent versions are used to reason about protocols and puzzles.
- **Deontic logic**: $\Box A$ as "$A$ is obligatory"; here T fails (not everything obligatory is done), D holds.
- **Temporal logic**: $\Box A$ as "always in the future". Amir Pnueli proposed linear temporal logic (LTL) for proving
  properties of programs in 1977, with operators such as "always", "eventually" and "until"; with model checking (Clarke,
  Emerson, Sifakis, Turing Award 2007) it became an everyday tool for verifying hardware designs and safety-critical software.
  A generic example: a spacecraft's fault-protection rule "whenever a fault is detected, eventually safe mode is entered"
  is the LTL formula $\Box (\mathit{fault} \rightarrow \Diamond \mathit{safe})$, which a model checker can verify against every
  possible run of a finite model of the software.
- **Provability logic**: $\Box A$ as "$A$ is provable in PA", as in [Chapter 18](18-Godels-Incompleteness-Theorems.md). The
  derivability conditions D1-D3 are necessitation, axiom K and axiom 4. Adding Löb's axiom $\Box(\Box A \rightarrow A) \rightarrow \Box A$
  gives the logic **GL**. Its frames are the transitive ones with no infinite chains $w_0 R w_1 R w_2 \cdots$ (so in particular
  no world sees itself, and T fails, as it must: $\Box \bot \rightarrow \bot$ is the consistency statement). Robert Solovay
  proved in 1976 that GL is exactly the set of modal principles about provability that PA proves for all substitutions of
  sentences. Gödel's second theorem is the GL theorem $\neg \Box \bot \rightarrow \neg \Box \neg \Box \bot$; can you see why
  (exercise 6)?

## 19.3 Many-valued and fuzzy logic

*Level: intermediate.* Must every statement be true or false? Jan Łukasiewicz, in 1920, proposed a third value for statements
about the future whose truth is not yet settled (the example goes back to Aristotle: "there will be a sea battle tomorrow").
Emil Post studied $n$-valued logics in general in 1921.

### Three-valued logics

Use the values $0$ (false), $\tfrac12$ (undetermined) and $1$ (true). In **Łukasiewicz's logic** $\mathrm{Ł}_3$:

$$
v(\neg A) = 1 - v(A), \quad v(A \wedge B) = \min(v(A), v(B)), \quad v(A \vee B) = \max(v(A), v(B)), \quad v(A \rightarrow B) = \min(1, 1 - v(A) + v(B)).
$$

The implication table:

| $v(A) \backslash v(B)$ | $0$ | $\tfrac12$ | $1$ |
|---|---|---|---|
| $0$ | $1$ | $1$ | $1$ |
| $\tfrac12$ | $\tfrac12$ | $1$ | $1$ |
| $1$ | $0$ | $\tfrac12$ | $1$ |

A formula is a **tautology** if it always takes the value $1$.

**Example 4.** $A \vee \neg A$ is not a tautology: at $v(A) = \tfrac12$ it has value $\max(\tfrac12, \tfrac12) = \tfrac12$. But
$A \rightarrow A$ is: $\min(1, 1 - a + a) = 1$ for every $a$. And $A \rightarrow (B \rightarrow A)$ is a tautology too
(*check* the nine cases). The **contraction** law $(A \rightarrow (A \rightarrow B)) \rightarrow (A \rightarrow B)$, which is
classically valid, fails: at $v(A) = \tfrac12$, $v(B) = 0$ we get $A \rightarrow B = \tfrac12$, $A \rightarrow (A \rightarrow B) = 1$,
and the whole formula is $\min(1, 1 - 1 + \tfrac12) = \tfrac12$.

**Kleene's strong three-valued logic** (1938) uses the same $\neg, \wedge, \vee$ but reads $\tfrac12$ as "undefined", as when
a computation has not halted, and defines $A \rightarrow B$ as $\neg A \vee B$. Then even $A \rightarrow A$ is not a
tautology (value $\tfrac12$ at $v(A) = \tfrac12$); in fact Kleene's logic has no tautologies at all, since the formula with
every variable set to $\tfrac12$ takes the value $\tfrac12$. Its value lies in describing partial information: SQL's
treatment of NULL in database queries follows Kleene's tables for $\wedge, \vee, \neg$.

### Infinitely many values and fuzzy logic

Allow all values in $[0, 1]$, with Łukasiewicz's formulas. More generally, choose a **t-norm** $\ast$ for "and": a
commutative, associative, monotone operation on $[0, 1]$ with $1 \ast x = x$. The three basic continuous t-norms are

- Gödel: $x \ast y = \min(x, y)$;
- product: $x \ast y = xy$;
- Łukasiewicz: $x \ast y = \max(0, x + y - 1)$.

Each t-norm has a matching implication (its residuum), and each gives a logic; Petr Hájek's 1998 book developed them as a
family of axiomatised logics (fuzzy logic in the narrow sense), with completeness theorems.

**Fuzzy set theory** was introduced by Lotfi Zadeh in 1965: a fuzzy set assigns to each element a degree of membership in
$[0, 1]$. "Tall", "warm" and "near" have no sharp edges, and fuzzy logic models them with degrees. Its most visible success
was in control engineering, beginning with Ebrahim Mamdani's fuzzy controller of 1975: rules such as "if the temperature is
high and rising, reduce the heat a lot" are combined numerically.

**Two honest remarks.**

1. *Degrees of truth are not probabilities.* Fuzzy connectives are **truth-functional**: the value of $A \wedge B$ depends only
   on the values of $A$ and $B$. Probability is not: $P(A \wedge B)$ depends on how $A$ and $B$ are related. If $A$ has degree
   $\tfrac12$, Gödel fuzzy logic gives $A \wedge \neg A$ the value $\min(\tfrac12, \tfrac12) = \tfrac12$, while any event $A$ has
   $P(A \text{ and not } A) = 0$. The two are different tools for different questions: vagueness versus uncertainty.
2. *Many-valued logics do not replace classical mathematics.* They are mathematical objects studied *with* classical
   mathematics. Their uses are in modelling (partial information, vagueness, circuits with more than two voltage levels), and in
   some foundational projects; for example, set theories with unrestricted comprehension have been studied in Łukasiewicz
   logic, where Russell's paradox gets the value $\tfrac12$ instead of producing a contradiction.

## 19.4 Type theory and proof assistants

*Level: advanced, as a guided tour.* Can a computer check a proof? Yes, if the proof is written in a formal language with
precise rules, as in [Chapter 9](09-Proof-Systems-for-Propositional-Logic.md). A **proof assistant** is a program that lets a
person write such proofs interactively and checks every step. Most modern ones are built on **type theory**.

### Types

Russell introduced a theory of types in 1908 to block his paradox ([Chapter 5](05-Sets.md)): objects come in levels, and a set
can only contain objects of a lower level, so "the set of all sets that do not contain themselves" cannot be formed. Alonzo
Church gave a cleaner **simple theory of types** in 1940, built on the typed lambda calculus. Every term has a type: base types
such as $\mathbb{N}$ and $\mathrm{Prop}$, and function types $A \to B$. A function of type $\mathbb{N} \to \mathbb{N}$ can only be
applied to a natural number. Church's simple type theory is the logic of the proof assistants HOL4, HOL Light and
Isabelle/HOL.

Per Martin-Löf, from the early 1970s, developed **intuitionistic type theory**, with **dependent types**: types that depend on
values. For example $\mathrm{Vec}(n)$, the type of lists of length exactly $n$, depends on the number $n$. With dependent types
one can state "for every $n$, a property of $n$" as a type, as 19.5 explains. Thierry Coquand and Gérard Huet's **calculus of
constructions** (1988) and its extension with inductive types are the logic of the Coq proof assistant (renamed the Rocq
Prover in 2025) and, in a closely related form, of Lean.

### How proof assistants work

The user states a theorem and builds a proof, usually with **tactics** (commands such as "do induction on $n$", "rewrite
with this lemma", "simplify"). The tactics produce a formal proof term. A small trusted program, the **kernel**, checks that
term against the rules of the type theory. You need to trust only the kernel, which is a few thousand lines of code, not the
tactics, the libraries or the user. This design principle is called the **de Bruijn criterion**, after N. G. de Bruijn, whose
Automath system (from 1967) was the first proof checker of this kind.

Here are two small proofs in Lean 4. The first is the proof of $0 + n = n$ from Chapter 17, by induction:

```lean
theorem zero_add' (n : Nat) : 0 + n = n := by
  induction n with
  | zero => rfl
  | succ k ih => rw [← Nat.add_assoc, ih]
```

In the step case the goal is $0 + (k + 1) = k + 1$. Rewriting with associativity turns it into $(0 + k) + 1 = k + 1$, and the
induction hypothesis `ih : 0 + k = k` finishes it. The base case `0 + 0 = 0` holds by computation (`rfl`).

The second is a proof of $p \wedge q \rightarrow q \wedge p$, written directly as a function, which is the subject of 19.5:

```lean
theorem and_swap (p q : Prop) : p ∧ q → q ∧ p :=
  fun ⟨hp, hq⟩ => ⟨hq, hp⟩
```

Other systems in active use include Isabelle (Lawrence Paulson, from the 1980s), HOL Light (John Harrison), Mizar (Andrzej
Trybulec, from 1973, with a large library written in a style close to ordinary mathematics) and Agda.

### Two landmark formal proofs

**The four-colour theorem.** Every map in the plane can be coloured with four colours so that neighbouring regions differ
(see the [Combinatorics book](../combinatorics/12-Planar-Graphs-and-Colouring.md)). Kenneth Appel and Wolfgang Haken proved it
in 1976, the first major theorem whose proof needed a computer: it reduced the problem to checking a large set of
configurations, which a program did. Many mathematicians were uneasy about a proof no person could check by hand. Neil
Robertson, Daniel Sanders, Paul Seymour and Robin Thomas gave a simpler computer proof in 1997. Georges Gonthier, working with
Benjamin Werner, then formalised the whole proof in Coq, completing it in 2005 and describing it in the *Notices of the AMS*
in 2008. In the formal proof, both the mathematical reasoning and the computer checks of the configurations are verified by
the same kernel.

**The Kepler conjecture.** No packing of equal balls in space is denser than the familiar stacking of oranges, with density
$\pi / \sqrt{18} \approx 0.7405$. Thomas Hales, with Samuel Ferguson, announced a proof in 1998; it combined hundreds of pages
of argument with extensive computer calculations, and after years of review it was published in the *Annals of Mathematics*
in 2005, with the referees unable to certify every computation. Hales then led the **Flyspeck** project to give a formal
proof. It was completed in 2014, using the proof assistants HOL Light and Isabelle, and the paper "A formal proof of the
Kepler conjecture" by Hales and many co-authors appeared in *Forum of Mathematics, Pi* in 2017.

Another milestone: the Feit-Thompson odd order theorem from group theory (every finite group of odd order is solvable), whose
original 1963 proof filled 255 journal pages, was formalised in Coq by a team led by Gonthier, completed in 2012. Chapter 20
describes the much larger formal libraries of today.

## 19.5 The Curry-Howard correspondence

*Level: advanced.* Look again at the BHK interpretation of 19.1. A proof of $A \rightarrow B$ is "a method that turns proofs of
$A$ into proofs of $B$", in other words a *function*. A proof of $A \wedge B$ is a *pair*. That sounds like programming, and
it is exactly programming.

### The dictionary

| logic | programming (types) |
|---|---|
| proposition $A$ | type $A$ |
| proof of $A$ | program (term) of type $A$ |
| $A \rightarrow B$ | function type $A \to B$ |
| $A \wedge B$ | pair type $A \times B$ |
| $A \vee B$ | tagged union $A + B$ (a value of $A$ or of $B$, labelled which) |
| $\top$ (true) | a type with one value |
| $\bot$ (false) | the empty type, with no values |
| $\forall x {:} X. \, A(x)$ | dependent function type: for each $x$, a value of $A(x)$ |
| $\exists x {:} X. \, A(x)$ | dependent pair: some $x$ together with a value of $A(x)$ |
| simplifying a proof (cut elimination) | running the program (evaluation) |

Haskell Curry noticed in 1934 that the types of his basic combinators match the axioms of implication, and in 1958 he and
Robert Feys made the observation systematic. William Howard extended it to natural deduction with all connectives and
quantifiers in a manuscript circulated in 1969 and published in 1980. The correspondence is also called "propositions as
types" or "proofs as programs".

### Examples in the typed lambda calculus

Write $\lambda x. \, t$ for the function that sends $x$ to $t$ ([Chapter 13](13-Algorithms-and-Turing-Machines.md)).

- $A \rightarrow A$: the identity function $\lambda x. \, x$, of type $A \to A$.
- $A \rightarrow (B \rightarrow A)$: $\lambda x. \, \lambda y. \, x$, which takes $x$, ignores $y$ and returns $x$. This is
  Curry's combinator $K$, and the formula is the first axiom of the Hilbert system of Chapter 9.
- $(A \rightarrow B) \rightarrow (B \rightarrow C) \rightarrow (A \rightarrow C)$: $\lambda f. \, \lambda g. \, \lambda x. \, g(f(x))$,
  function composition. The proof of "if $A$ implies $B$ and $B$ implies $C$ then $A$ implies $C$" *is* composition.
- $(A \rightarrow (B \rightarrow C)) \rightarrow ((A \rightarrow B) \rightarrow (A \rightarrow C))$:
  $\lambda f. \, \lambda g. \, \lambda x. \, f \, x \, (g \, x)$. This is Curry's combinator $S$ and the second Hilbert axiom.
- $A \wedge B \rightarrow B \wedge A$: $\lambda p. \, (\pi_2 \, p, \pi_1 \, p)$, swap the components of a pair. The Lean proof
  `fun ⟨hp, hq⟩ => ⟨hq, hp⟩` in 19.4 is exactly this program.
- $A \rightarrow \neg \neg A$, i.e. $A \rightarrow ((A \rightarrow \bot) \rightarrow \bot)$: $\lambda x. \, \lambda k. \, k \, x$.
  Programmers recognise this as passing a value to a "continuation" $k$.

And modus ponens is function application: from $f : A \to B$ and $a : A$ you get $f \, a : B$. The deduction theorem of
Chapter 9 is the translation of $\lambda$-abstraction into combinators.

### Proof simplification is computation

Suppose a proof of $B$ first proves $A \rightarrow B$ by assuming $A$ and deriving $B$ (that is $\lambda x. \, t$), then proves
$A$ separately (a term $a$), and applies modus ponens: $(\lambda x. \, t) \, a$. This proof has a **detour**: it introduces
an implication only to eliminate it at once. A simpler proof plugs the proof of $A$ directly into the places where the
assumption was used: $t[x := a]$. That is exactly the $\beta$-reduction step of the lambda calculus, $(\lambda x. \, t) \, a \to t[x := a]$:
running the program. Gentzen's cut-elimination theorem (1935), which says every proof can be made detour-free, corresponds to
the theorem that every typed program terminates (strong normalisation).

### What it gives

- **Proof assistants.** In Lean and Coq/Rocq a proof literally is a program, and checking a proof is type-checking it. That
  is why the kernel can be small.
- **Program extraction.** From a constructive proof of "for every input $x$ there is an output $y$ with $R(x, y)$" one can
  extract a program that computes $y$ from $x$, correct by construction. The CompCert C compiler, verified in Coq by Xavier
  Leroy's team, is a large example of verified software built in this world.
- **Excluded middle.** There is no program of type $A + (A \to \bot)$ for an arbitrary type $A$: it would have to decide, for
  every type, whether it has a value. This is why the pure correspondence is intuitionistic. Timothy Griffin observed in 1990
  that classical logic matches programs with control operators: Peirce's law $((A \rightarrow B) \rightarrow A) \rightarrow A$ is
  the type of the operator `call/cc` (call with current continuation) of the language Scheme. Lean and Coq/Rocq can add excluded
  middle as an axiom when classical reasoning is wanted, at the price of losing computation for the proofs that use it.

## Check yourself

??? question "1. Give an intuitionistic proof of $(A \rightarrow B) \rightarrow (\neg B \rightarrow \neg A)$, and say why the converse $(\neg B \rightarrow \neg A) \rightarrow (A \rightarrow B)$ is not intuitionistically provable."
    Assume $A \rightarrow B$ and $\neg B$, and to prove $\neg A$ assume $A$. Then $B$ by the first assumption, and $\bot$ by
    applying $\neg B$. So $\neg A$. As a program: $\lambda f. \, \lambda k. \, \lambda a. \, k(f \, a)$. The converse fails in the
    Kripke model of Example 2 with $A := \top$ (always true) and $B := p$: we need, at $w_0$, $\neg p \rightarrow \neg \top$ to be
    forced but $\top \rightarrow p$ not. No stage forces $\neg p$ ($w_1$ forces $p$, and $w_0$ sees $w_1$), so the first
    implication holds vacuously at $w_0$ and $w_1$. But $\top \rightarrow p$ fails at $w_0$ since $p$ is not forced there.

??? question "2. Show that $\neg (A \vee B) \rightarrow (\neg A \wedge \neg B)$ is intuitionistically provable."
    Assume $\neg (A \vee B)$. To prove $\neg A$, assume $A$; then $A \vee B$, and the assumption gives $\bot$. Similarly $\neg B$.
    So $\neg A \wedge \neg B$. As a program: $\lambda k. \, (\lambda a. \, k(\mathrm{inl}\, a), \lambda b. \, k(\mathrm{inr}\, b))$.

??? question "3. Find a Kripke model in which $\neg (p \wedge q) \rightarrow (\neg p \vee \neg q)$ fails."
    Take stages $w_0 \le w_1$ and $w_0 \le w_2$ (two incomparable futures), with $p$ established at $w_1$ only and $q$ at $w_2$
    only. No stage forces $p \wedge q$, so $w_0 \Vdash \neg (p \wedge q)$. But $w_0 \nVdash \neg p$ (since $w_1 \Vdash p$) and
    $w_0 \nVdash \neg q$ (since $w_2 \Vdash q$). So $\neg p \vee \neg q$ fails at $w_0$.

??? question "4. Prove that $\log_2 3$ is irrational, and use it to give another constructive example of irrationals $a, b$ with $a^b$ rational."
    If $\log_2 3 = m/n$ with positive integers, then $2^m = 3^n$, impossible since the left side is even and the right side
    odd. Take $a = 2^{1/2} = \sqrt 2$ (irrational) and $b = 2\log_2 3$ (irrational, as twice an irrational). Then
    $a^b = 2^{\log_2 3} = 3$. This is the example of 19.1 written differently, since $2 \log_2 3 = \log_2 9$.

??? question "5. On the frame with worlds $w, v$ and $R = \{(w, v), (v, v)\}$, which of the axioms T, 4, D are valid?"
    T: not valid, because $w$ does not see itself: with $p$ true only at $v$, $w \models \Box p$ but $w \nmodels p$. 4: the
    frame is transitive ($wRv$, $vRv$ gives $wRv$; $vRv$, $vRv$ gives $vRv$), so 4 is valid. D: every world sees some world
    ($w$ sees $v$, $v$ sees $v$), so D is valid.

??? question "6. In GL, $\Box$ is read as provability in PA. Explain why the formula $\neg \Box \bot \rightarrow \neg \Box \neg \Box \bot$ expresses Gödel's second theorem."
    $\neg \Box \bot$ is $\mathrm{Con}_{\mathrm{PA}}$. The consequent $\neg \Box \neg \Box \bot$ says "it is not provable that
    $\neg \Box \bot$", that is, "$\mathrm{Con}_{\mathrm{PA}}$ is not provable". So the formula says: if PA is consistent, PA does
    not prove its own consistency. It is a theorem of GL; this follows from Löb's axiom with $A = \bot$, since
    $\Box(\Box \bot \rightarrow \bot) \rightarrow \Box \bot$ is $\Box \neg \Box \bot \rightarrow \Box \bot$, whose contrapositive
    is the formula.

??? question "7. In Łukasiewicz's three-valued logic, compute the value of $(A \rightarrow B) \vee (B \rightarrow A)$ for all nine pairs of values. Is it a tautology?"
    $A \rightarrow B = \min(1, 1 - a + b)$ equals 1 whenever $a \le b$, and $B \rightarrow A$ equals 1 whenever $b \le a$. In
    each pair one of $a \le b$, $b \le a$ holds, so the maximum is always 1. It is a tautology (it holds in all of Łukasiewicz's
    logics and in Gödel fuzzy logic too; it is the "prelinearity" axiom of Hájek's logics).

??? question "8. Show that Kleene's strong three-valued logic has no tautologies."
    Give every variable the value $\tfrac12$. By induction on formulas, every formula then has value $\tfrac12$: $1 - \tfrac12 = \tfrac12$,
    $\min(\tfrac12, \tfrac12) = \max(\tfrac12, \tfrac12) = \tfrac12$, and $A \rightarrow B$ is defined as $\neg A \vee B$. So no
    formula takes the value 1 under every valuation.

??? question "9. Write lambda terms that prove $(A \wedge B \rightarrow C) \rightarrow (A \rightarrow B \rightarrow C)$ and its converse."
    Forward ("currying"): $\lambda f. \, \lambda a. \, \lambda b. \, f(a, b)$. Converse ("uncurrying"):
    $\lambda g. \, \lambda p. \, g \, (\pi_1 \, p) \, (\pi_2 \, p)$. They show that a function of a pair is the same as a function
    returning a function, and that $A \wedge B \rightarrow C$ and $A \rightarrow (B \rightarrow C)$ are equivalent even
    intuitionistically.

??? question "10. Why is there no closed lambda term of type $((A \to B) \to A) \to A$ in the simply typed lambda calculus, for distinct base types $A$, $B$?"
    By Curry-Howard such a term would be an intuitionistic proof of Peirce's law. But Peirce's law fails at $w_0$ in the Kripke
    model of Example 2 (with $A := p$ and $B := q$, $q$ never established), as the Python check shows, so by soundness
    (Theorem 19.1) it has no intuitionistic proof. Hence no such term exists.

??? question "11. A fuzzy controller assigns 'the room is warm' the degree 0.7. Under Łukasiewicz's t-norm, what degree does 'warm and not warm' get? Under the Gödel t-norm? Compare with probability."
    Łukasiewicz: $\max(0, 0.7 + 0.3 - 1) = 0$. Gödel: $\min(0.7, 0.3) = 0.3$. The probability of "an event and its complement"
    is always 0. So Łukasiewicz's conjunction agrees with probability here, Gödel's does not; in general neither is a probability,
    because fuzzy connectives are truth-functional and probability is not.

## What you learned

- Intuitionistic logic drops excluded middle; under the BHK reading a proof of "or" says which side, and a proof of "exists"
  gives a witness.
- Kripke models (stages of knowledge, implication looking into the future) are sound and complete for intuitionistic logic;
  a two-stage model refutes $p \vee \neg p$, $\neg \neg p \rightarrow p$ and Peirce's law.
- Classical logic embeds in intuitionistic logic by double negation (Glivenko, Gödel-Gentzen); Heyting arithmetic has the
  disjunction and existence properties.
- Modal logic adds $\Box$ and $\Diamond$ with possible-world semantics; T matches reflexive frames, 4 transitive ones; S4 and S5
  are the classic systems, and GL is the logic of provability.
- Łukasiewicz and Kleene three-valued logics, and fuzzy logics with t-norms, assign intermediate truth values; fuzzy degrees are
  truth-functional and are not probabilities.
- Proof assistants based on type theory check proofs with a small kernel; the four-colour theorem (Coq, 2005), the Kepler
  conjecture (Flyspeck, 2014) and the odd order theorem (Coq, 2012) have been formally verified.
- Curry-Howard: propositions are types, proofs are programs, and simplifying proofs is running programs.

**Next:** [Chapter 20](20-Where-Logic-Goes.md), the last chapter: large cardinals, forcing, reverse mathematics, homotopy type
theory, formalised mathematics today, and the open problems of logic.

## Further reading

- A. Heyting, *Intuitionism: An Introduction*, 1956; M. Dummett, *Elements of Intuitionism*, 2nd ed., 2000.
- E. Bishop, *Foundations of Constructive Analysis*, 1967; E. Bishop and D. Bridges, *Constructive Analysis*, 1985.
- A. S. Troelstra and D. van Dalen, *Constructivism in Mathematics*, 2 vols., 1988.
- S. A. Kripke, "Semantical analysis of intuitionistic logic I", in *Formal Systems and Recursive Functions*, 1965.
- G. E. Hughes and M. J. Cresswell, *A New Introduction to Modal Logic*, 1996; P. Blackburn, M. de Rijke and Y. Venema,
  *Modal Logic*, 2001.
- G. Boolos, *The Logic of Provability*, 1993; R. M. Solovay, "Provability interpretations of modal logic", *Israel Journal
  of Mathematics* 25, 1976.
- P. Hájek, *Metamathematics of Fuzzy Logic*, 1998; L. A. Zadeh, "Fuzzy sets", *Information and Control* 8, 1965.
- M. H. Sørensen and P. Urzyczyn, *Lectures on the Curry-Howard Isomorphism*, 2006; P. Wadler, "Propositions as types",
  *Communications of the ACM* 58, 2015.
- W. A. Howard, "The formulae-as-types notion of construction", in *To H. B. Curry: Essays on Combinatory Logic, Lambda
  Calculus and Formalism*, 1980.
- G. Gonthier, "Formal proof: the four-color theorem", *Notices of the AMS* 55, 2008; T. Hales et al., "A formal proof of the
  Kepler conjecture", *Forum of Mathematics, Pi* 5, 2017.
- J. Avigad, L. de Moura, S. Kong and S. Ullrich, *Theorem Proving in Lean 4* (free online book from the Lean community).
- On this site: the Topics lessons [Predicate logic](../../topics/logic/level-8/01-predicate-logic.md),
  [Paradoxes](../../topics/logic/level-7/06-paradoxes.md) and [Boolean algebra](../../topics/logic/level-6/02-boolean-algebra.md);
  CSC148 [Unit 5: Recursion](../../uoft/CSC148H1/unit05.md) (U of T) for the recursion behind induction proofs and programs;
  the [Combinatorics book](../combinatorics/index.md) for the four-colour theorem; the [Algebra book](../algebra/index.md)
  for Boolean algebra.
