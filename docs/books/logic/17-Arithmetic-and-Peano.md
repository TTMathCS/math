# 17. Arithmetic and Peano

*Everyone knows how to add and multiply whole numbers. But which few basic facts is everything else built from? And once
you write those facts down as axioms in first-order logic, how much of arithmetic do they really prove? This chapter
writes down Peano arithmetic, proves some of its first theorems by hand, and shows how strong it is. Then it does the two
things that Gödel needed for his theorems in the next chapter: it turns formulas and proofs into numbers, and it shows
that every computable function can be described by a formula of arithmetic. It ends with a simple statement about
numbers, Goodstein's theorem, that is true but cannot be proved from Peano's axioms.*

!!! abstract "In this chapter"
    **You will learn:**

    - the axioms of Peano arithmetic (PA) in first-order logic, and Robinson's weaker system Q
    - how to prove $2 + 2 = 4$, $0 + x = x$ and $x + y = y + x$ from the axioms, step by step
    - what PA can prove, why it proves every true "there exists" statement about computations, and why it has strange
      nonstandard models
    - Gödel numbering: how formulas, and proofs, become numbers, and why "is a proof of" becomes a computable relation
    - what it means for a formula to represent a function, and Gödel's $\beta$ trick for coding sequences
    - Goodstein's theorem and why Kirby and Paris showed in 1982 that PA cannot prove it

    **You need:** [Chapter 10](10-First-Order-Logic.md) (languages, structures, satisfaction),
    [Chapter 11](11-Completeness-and-Compactness.md) (compactness), [Chapter 4](04-Proofs.md) (induction) and
    [Chapter 15](15-Recursive-Functions-and-Computability.md) (primitive recursive and computable functions). The gentler
    version of the axiom idea is the Topics lesson [Axioms](../../topics/logic/level-8/02-axioms.md).

    **Levels:** 17.1 and 17.3 are intermediate; 17.2 and 17.4 are advanced; 17.5 is advanced, with an expert sketch
    at the end.

## 17.1 The Peano axioms

Here is a question that sounds silly: *why* is $2 + 2 = 4$? You might say "count it". But counting is itself something
we would like to explain. A more careful answer goes like this. The numbers start at $0$. Every number $n$ has a next
number, its **successor**, written $S(n)$ or $Sn$. So $1$ is $S0$, $2$ is $SS0$, $3$ is $SSS0$, and $4$ is $SSSS0$.
Addition is defined by two rules: adding $0$ changes nothing, and adding a successor is the successor of adding:

$$
x + 0 = x, \qquad x + Sy = S(x + y).
$$

Then $2 + 2 = SS0 + SS0 = S(SS0 + S0) = SS(SS0 + 0) = SS(SS0) = SSSS0 = 4$. Every step used one rule. That is the
whole idea of Peano arithmetic: a handful of rules from which, as far as anyone can tell, all of ordinary number theory
follows.

**A short history.** Hermann Grassmann gave recursive definitions of addition and multiplication in a school textbook in
1861. Richard Dedekind, in his 1888 essay *Was sind und was sollen die Zahlen?* (*What are numbers and what should they
be?*), gave a set of conditions that characterise the natural numbers and proved that any two systems satisfying them are
isomorphic. Giuseppe Peano published a version of the same axioms, in his new symbolic notation, in the 1889 booklet
*Arithmetices principia, nova methodo exposita*, and acknowledged Dedekind. The axioms are now called Peano's, though
"Dedekind-Peano" would be fairer. Both of them stated induction about *all sets* (or all properties) of numbers. The
first-order version below, with one induction axiom for each formula, came later, in the work of the 1920s and 1930s.

### The language and the axioms

The **language of arithmetic** $\mathcal{L}_A$ has one constant symbol $0$, a one-place function symbol $S$, and two
two-place function symbols $+$ and $\cdot$ (written between their arguments). Equality is part of the logic. The
**numeral** for a natural number $n$ is the term $\overline{n} = S S \cdots S 0$ with $n$ copies of $S$. Numerals are
names inside the formal language; the numbers themselves live outside it.

**Peano arithmetic**, PA, is the first-order theory with these axioms (each with its free variables read as universally
quantified):

1. $\neg (Sx = 0)$ (zero is not a successor);
2. $Sx = Sy \rightarrow x = y$ (different numbers have different successors);
3. $x + 0 = x$;
4. $x + Sy = S(x + y)$;
5. $x \cdot 0 = 0$;
6. $x \cdot Sy = (x \cdot y) + x$;
7. the **induction schema**: for every formula $\varphi(x, y_1, \ldots, y_k)$ of $\mathcal{L}_A$,

$$
\forall y_1 \cdots \forall y_k \, \Big[ \big( \varphi(0, \vec y) \wedge \forall x \, (\varphi(x, \vec y) \rightarrow \varphi(Sx, \vec y)) \big) \rightarrow \forall x \, \varphi(x, \vec y) \Big].
$$

The extra variables $y_1, \ldots, y_k$ are **parameters**: they let you do induction on $x$ while holding other numbers
fixed. Axiom 7 is not one axiom but infinitely many, one for each formula; that is what "schema" means. The list is still
**computable**: a program can decide whether a given string is one of the axioms. This will matter in Chapter 18.

**The standard model** is $\mathbb{N} = \{0, 1, 2, \ldots\}$ with the usual zero, successor $n \mapsto n + 1$, addition
and multiplication. All the axioms are true in it; the induction axioms are true because every nonempty set of natural
numbers has a least element ([Chapter 4](04-Proofs.md)).

**Robinson arithmetic**, Q, is PA with the induction schema removed and one weaker axiom put in its place:

$$
\forall x \, \big( x = 0 \vee \exists y \, (x = Sy) \big).
$$

Q was introduced by Raphael Robinson and studied in the 1953 book *Undecidable Theories* by Tarski, Mostowski and Robinson.
It has only seven axioms and is very weak: it cannot even prove $0 + x = x$ (exercise 4). Yet, as you will see in 17.2
and 17.4, it is strong enough to compute, and that is all Gödel's first theorem needs.

We define order by addition: $x \le y$ abbreviates $\exists z \, (z + x = y)$, and $x < y$ abbreviates
$x \le y \wedge \neg (x = y)$.

### First proofs

**Example 1: $2 + 2 = 4$ in Q.** We must derive $SS0 + SS0 = SSSS0$. Each line uses one axiom (with the variables
instantiated) and the logical rules for equality (replace equals by equals).

$$
\begin{aligned}
SS0 + SS0 &= S(SS0 + S0) && \text{axiom 4 with } x = SS0,\ y = S0 \\
SS0 + S0 &= S(SS0 + 0) && \text{axiom 4 with } x = SS0,\ y = 0 \\
SS0 + 0 &= SS0 && \text{axiom 3} \\
\text{so } SS0 + SS0 &= S(S(SS0)) = SSSS0.
\end{aligned}
$$

No induction was needed. In the same way Q proves every true equation between closed terms: by induction *outside* the
system on $m$, Q proves $\overline{n} + \overline{m} = \overline{n + m}$ and $\overline{n} \cdot \overline{m} = \overline{n m}$
for every pair of actual numbers $n, m$. What Q cannot do is prove general laws with variables in them. For those we need
induction.

**Example 2: $\forall x \, (0 + x = x)$ in PA.** Note the order: axiom 3 says $x + 0 = x$, with zero on the right.
With zero on the left it is a theorem, and needs induction. Take $\varphi(x)$ to be $0 + x = x$.

- *Base.* $\varphi(0)$ is $0 + 0 = 0$, an instance of axiom 3.
- *Step.* Assume $0 + x = x$. Then $0 + Sx = S(0 + x)$ by axiom 4, and $S(0 + x) = Sx$ by the assumption. So
  $0 + Sx = Sx$, which is $\varphi(Sx)$.

The induction axiom for $\varphi$ now gives $\forall x \, \varphi(x)$.

**Example 3: $\forall x \forall y \, (Sx + y = S(x + y))$.** Induction on $y$ with $x$ as a parameter; take
$\varphi(y, x)$ to be $Sx + y = S(x + y)$.

- *Base.* $Sx + 0 = Sx$ (axiom 3) and $S(x + 0) = Sx$ (axiom 3 inside $S$). So $\varphi(0, x)$.
- *Step.* Assume $Sx + y = S(x + y)$. Then
  $Sx + Sy = S(Sx + y) = S(S(x + y)) = S(x + Sy)$, by axiom 4, the assumption, and axiom 4 again.

**Theorem 17.1 (commutativity of addition).** $\mathrm{PA} \vdash \forall x \forall y \, (x + y = y + x)$.

*Proof.* Induction on $y$ with parameter $x$. Base: $x + 0 = x$ by axiom 3 and $0 + x = x$ by Example 2, so
$x + 0 = 0 + x$. Step: assume $x + y = y + x$. Then

$$
x + Sy = S(x + y) = S(y + x) = Sy + x,
$$

by axiom 4, the assumption, and Example 3 (with the roles of the letters swapped). $\square$

The same patient method proves associativity of $+$, the distributive law, commutativity and associativity of $\cdot$,
the cancellation laws, and that $\le$ is a total order with $0$ as least element. Each is a short induction once the
right lemmas are in place, and you will do some in the exercises.

**Example 4: every nonzero number is a successor.** This is the axiom we added to Q; in PA it is a theorem. Take
$\varphi(x)$ to be $x = 0 \vee \exists y \, (x = Sy)$. The base $\varphi(0)$ holds because $0 = 0$. For the step, whatever
$x$ is, $Sx = Sx$, so $\exists y \, (Sx = Sy)$ with $y = x$, hence $\varphi(Sx)$. (The induction hypothesis was not even
used.) So PA proves all the axioms of Q, and every theorem of Q is a theorem of PA.

### First order versus second order

Dedekind's induction axiom says: *for every set* $X$ of numbers, if $0 \in X$ and $X$ is closed under $S$, then $X$
contains every number. That talks about all subsets of $\mathbb{N}$, uncountably many of them. The first-order schema
talks only about sets *defined by formulas*, and there are only countably many formulas. That difference is real:

- with the second-order axiom, every model is isomorphic to $\mathbb{N}$ (Dedekind's categoricity theorem, 1888);
- with the first-order schema, there are other models, as you will see in 17.2.

Why use the weaker first-order version, then? Because first-order logic has a complete, checkable proof system
([Chapter 11](11-Completeness-and-Compactness.md)), and second-order logic with its full meaning does not. The price of a
proof system you can check is that the axioms no longer pin down $\mathbb{N}$ alone.

## 17.2 What PA proves

*Level: advanced.* How strong is PA? The honest answer has two halves: in practice it proves almost all the number theory
you meet in a first course, and in principle it has gaps, which Chapter 18 makes precise.

### Ordinary number theory

With induction you can develop, inside PA:

- the laws of a commutative semiring with a discrete total order ($0 < 1$, no number strictly between $x$ and $Sx$);
- **division with remainder**: $\forall a \forall b \, (b \neq 0 \rightarrow \exists q \exists r \, (a = bq + r \wedge r < b))$, by
  induction on $a$;
- the **least number principle**: for every formula $\varphi$, if $\exists x \, \varphi(x)$ then there is a least such $x$
  (this is equivalent to the induction schema, by the same argument as in Chapter 4, now carried out inside PA);
- divisibility, primes, gcds and Bézout's identity, Euclid's lemma, the infinitude of primes, and unique factorisation
  (stated with coded sequences, see 17.4);
- with more effort, Fermat's little theorem, quadratic reciprocity, and much of elementary and combinatorial number theory.

What about deep theorems such as Fermat's last theorem? Wiles's proof uses tools (schemes, cohomology) built in set
theory. Several logicians, among them Angus Macintyre and Colin McLarty, have argued in detail that the argument can be
reworked in much weaker systems, perhaps in PA itself, but no complete proof inside PA has been written out. It is an
open question of bookkeeping rather than of mathematics, and nobody expects a surprise.

### Every true $\Sigma_1$ sentence is provable

Some formulas only ask finite questions. A formula is **bounded**, or $\Delta_0$, if every quantifier in it is bounded:
of the form $\forall x \, (x \le t \rightarrow \ldots)$ or $\exists x \, (x \le t \wedge \ldots)$, where $t$ is a term not
containing $x$. To check a bounded sentence you only have to try finitely many numbers. A formula is $\Sigma_1$ if it has
the form $\exists y_1 \cdots \exists y_k \, \theta$ with $\theta$ bounded. "There is a proof of $\varphi$", "the program
halts on input 7", "there is an odd perfect number": each is a $\Sigma_1$ sentence, since once you have the witness, checking
it is a finite computation.

**Theorem 17.2 ($\Sigma_1$-completeness).** Every $\Sigma_1$ sentence that is true in $\mathbb{N}$ is provable in Q, and
hence in PA.

*Proof sketch.* There are four steps, each by induction outside the system.

1. For closed terms $s, t$: if $s$ and $t$ have the same value then Q proves $s = t$, and if they differ then Q proves
   $\neg (s = t)$. The first part is the computation of Example 1. For the second, Q proves $\overline{n} \neq \overline{m}$
   for $n \neq m$ by peeling off $S$ with axiom 2 until one side is $0$ and the other a successor, which axiom 1 forbids.
2. For each $n$, Q proves $\forall x \, (x \le \overline{n} \rightarrow x = \overline{0} \vee x = \overline{1} \vee \cdots \vee x = \overline{n})$.
   This is where the extra axiom of Q ("every number is $0$ or a successor") is used.
3. By induction on the construction of a bounded sentence: a true one is provable and a false one is refutable. Atomic
   sentences are step 1; $\neg, \wedge, \vee$ are logic; a bounded quantifier over $x \le \overline{n}$ becomes, by step 2,
   a finite conjunction or disjunction of the $n + 1$ instances.
4. If $\exists \vec y \, \theta(\vec y)$ is true, pick numbers $\vec m$ with $\theta(\vec{\overline m})$ true. By step 3 Q
   proves $\theta(\vec{\overline m})$, and then $\exists \vec y \, \theta(\vec y)$ by the rule for $\exists$. $\square$

This theorem is why Q, weak as it is, "can compute". If a program halts, a run of it is a finite object, and Q proves that
the run exists. Consequently Q can also never be fooled about a *false* bounded sentence. The weak point lies one level
up: a true sentence of the form $\forall x \, \theta(x)$, with $\theta$ bounded (a $\Pi_1$ sentence, such as "no proof of
$0 = 1$ exists", or "every even number above 2 is a sum of two primes"), need not be provable. Q proves each instance
$\theta(\overline n)$ separately, but the general statement is another matter.

### Nonstandard models

Since PA is a first-order theory, the compactness theorem of [Chapter 11](11-Completeness-and-Compactness.md) applies to
it, with a startling result.

**Theorem 17.3.** PA has a model that is not isomorphic to $\mathbb{N}$: it contains an element larger than every
numeral.

*Proof.* Add a new constant symbol $c$ to the language, and consider the theory

$$
T = \mathrm{PA} \cup \{ \overline{n} < c : n = 0, 1, 2, \ldots \}.
$$

Any finite subset of $T$ mentions only finitely many of the new axioms, say up to $\overline{N} < c$. It has a model:
$\mathbb{N}$ with $c$ read as $N + 1$. By compactness, $T$ has a model $M$. In $M$ the element $c^M$ is larger than the
value of every numeral, so it is not equal to any of them; but in $\mathbb{N}$ every element is the value of a numeral. So
$M \not\cong \mathbb{N}$. $\square$

The values of the numerals in $M$ form an initial segment that looks exactly like $\mathbb{N}$, the **standard part**.
Everything after it is **nonstandard**. What does the order look like? Take a nonstandard $c$. Its predecessors and
successors $\ldots, c - 2, c - 1, c, c + 1, c + 2, \ldots$ are all nonstandard and form a copy of $\mathbb{Z}$, a **block**.
PA proves that every number is even or odd, so $c = 2d$ or $c = 2d + 1$ for some $d$, and $d$ is nonstandard but lies in a
block strictly before the block of $c$ (since $c - d$ is at least $d$, which is larger than every standard number). The
number $2c$ lies in a block strictly after. Between the blocks of $c$ and $2c$ lies the block of the midpoint, and so on:
the blocks form a dense order with no first and no last element. For a countable nonstandard model the blocks are ordered
like the rationals ([Chapter 12](12-Model-Theory.md) proves that every countable dense order without endpoints is a copy of
$\mathbb{Q}$).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 120" role="img" aria-label="The order of a countable nonstandard model of arithmetic: first the standard numbers 0, 1, 2 and so on, then infinitely many blocks, each a copy of the integers, arranged densely like the rationals.">
  <line x1="10" y1="50" x2="350" y2="50" stroke="currentColor" stroke-width="1"/>
  <g fill="#7ccf9a">
    <circle cx="20" cy="50" r="4"/><circle cx="36" cy="50" r="4"/><circle cx="52" cy="50" r="4"/><circle cx="68" cy="50" r="4"/><circle cx="84" cy="50" r="4"/>
  </g>
  <g fill="#eea66f">
    <circle cx="140" cy="50" r="3"/><circle cx="152" cy="50" r="3"/><circle cx="164" cy="50" r="3"/><circle cx="176" cy="50" r="3"/><circle cx="188" cy="50" r="3"/>
  </g>
  <g fill="#9cc9ea">
    <circle cx="250" cy="50" r="3"/><circle cx="262" cy="50" r="3"/><circle cx="274" cy="50" r="3"/><circle cx="286" cy="50" r="3"/><circle cx="298" cy="50" r="3"/>
  </g>
  <g fill="currentColor" font-size="12" text-anchor="middle">
    <text x="20" y="34">0</text><text x="36" y="34">1</text><text x="52" y="34">2</text><text x="68" y="34">3</text>
    <text x="104" y="54">…</text>
    <text x="126" y="54">…</text><text x="164" y="34">c</text><text x="204" y="54">…</text>
    <text x="226" y="54">…</text><text x="274" y="34">2c</text><text x="314" y="54">…</text>
    <text x="52" y="82">standard part</text>
    <text x="164" y="82">block of c</text>
    <text x="274" y="82">block of 2c</text>
    <text x="180" y="108">blocks are dense: between any two lies another</text>
  </g>
</svg>
</div>

A nonstandard model satisfies every theorem of PA, so in it, too, addition is commutative and there are infinitely many
primes. It even satisfies statements like "there is a proof of $0 = 1$" if PA happens not to prove their negation; the
"proof" would then be a nonstandard number, coding an infinitely long object that the model thinks is finite. That is the
picture to keep in mind in Chapter 18.

Stanley Tennenbaum proved in 1959 that in a countable nonstandard model of PA neither $+$ nor $\cdot$ can be computable: you
cannot even write one down with a program. So $\mathbb{N}$ is the only computable model of PA.

### Consistency and decidable fragments

Is PA consistent? Everybody believes so, because $\mathbb{N}$ is a model. But that argument uses the infinite set
$\mathbb{N}$ as a completed whole, which is exactly what Hilbert's programme of the 1920s hoped to avoid. In 1936 Gerhard
Gentzen proved the consistency of PA using only finitary reasoning plus one extra principle: transfinite induction along
the ordinal $\varepsilon_0$ (described in 17.5). Chapter 18 shows that some such extra principle is unavoidable.

In the other direction, cut down the language and you can get a complete, decidable theory. Mojżesz Presburger showed in
1929 that the theory of $\mathbb{N}$ with $0, S, +$ and no multiplication is decidable, by quantifier elimination
([Chapter 12](12-Model-Theory.md)). It is multiplication, together with addition, that brings in incompleteness.

## 17.3 Coding: Gödel numbering

Arithmetic talks about numbers. Logic talks about formulas and proofs. Gödel's key move in 1931 was to make arithmetic talk
about logic by **coding** formulas as numbers. Then a statement about a formula, such as "this formula is provable",
becomes a statement about a number, and that can be written in the language of arithmetic.

### Coding symbols and strings

First give each symbol of the language a code number. One choice, using odd numbers:

| symbol | $0$ | $S$ | $=$ | $($ | $)$ | $+$ | $\cdot$ | $\neg$ | $\rightarrow$ | $\forall$ | $x$ |
|---|---|---|---|---|---|---|---|---|---|---|---|
| code | 1 | 3 | 5 | 7 | 9 | 11 | 13 | 15 | 17 | 19 | 21 |

Variables are $x, x', x'', \ldots$ (a letter followed by primes, coded with one more symbol), so finitely many symbols
suffice. Now code a string $s_1 s_2 \ldots s_k$ by the product of the first $k$ primes raised to the symbol codes:

$$
\ulcorner s_1 s_2 \ldots s_k \urcorner = 2^{c(s_1)} \cdot 3^{c(s_2)} \cdot 5^{c(s_3)} \cdots p_k^{c(s_k)}.
$$

The corner brackets $\ulcorner \ \urcorner$ mean "the code of". By unique factorisation, different strings get different
numbers, and from the number you can recover the string by factoring.

**Example 5.** The formula $0 = 0$ has symbol codes $1, 5, 1$, so

$$
\ulcorner 0 = 0 \urcorner = 2^1 \cdot 3^5 \cdot 5^1 = 2 \cdot 243 \cdot 5 = 2430.
$$

*Check:* $2430 = 2 \cdot 3^5 \cdot 5$, and the exponents read off as $1, 5, 1$, that is $0, =, 0$.

**Example 6.** $S0 = S0$ has codes $3, 1, 5, 3, 1$, so its number is
$2^3 \cdot 3^1 \cdot 5^5 \cdot 7^3 \cdot 11^1 = 8 \cdot 3 \cdot 3125 \cdot 343 \cdot 11 = 282{,}975{,}000$.

The numbers get huge fast, but size does not matter. What matters is that everything you do to strings becomes something
computable you do to numbers.

### Coding proofs

A **proof** in a first-order proof system is a finite list of formulas, each of which is an axiom or follows from earlier
ones by a rule ([Chapter 9](09-Proof-Systems-for-Propositional-Logic.md) and
[Chapter 11](11-Completeness-and-Compactness.md)). Code a list of formulas $\varphi_1, \ldots, \varphi_m$ by the same trick
one level up:

$$
\ulcorner \varphi_1, \ldots, \varphi_m \urcorner = 2^{\ulcorner \varphi_1 \urcorner} \cdot 3^{\ulcorner \varphi_2 \urcorner} \cdots p_m^{\ulcorner \varphi_m \urcorner}.
$$

Now look at the following relations between numbers. Each can be decided by a program that just unpacks the codes and
checks:

- $\mathrm{Fml}(n)$: $n$ is the code of a formula;
- $\mathrm{Sent}(n)$: $n$ is the code of a sentence (no free variables);
- $\mathrm{Ax}_{\mathrm{PA}}(n)$: $n$ is the code of an axiom of PA (for the induction schema, check that $n$ codes a string
  of the right shape built from some formula $\varphi$);
- $\mathrm{Prf}_{\mathrm{PA}}(p, n)$: $p$ codes a proof whose last formula has code $n$.

Gödel showed that all of these are in fact **primitive recursive** ([Chapter 15](15-Recursive-Functions-and-Computability.md)):
every search in them is bounded by numbers you can compute in advance. In his 1931 paper he built up the proof relation
through a list of 45 explicit definitions, each primitive recursive in the earlier ones.

The provability relation is different:

$$
\mathrm{Prov}_{\mathrm{PA}}(n) \iff \exists p \ \mathrm{Prf}_{\mathrm{PA}}(p, n).
$$

It has an unbounded "there exists": to confirm that something is provable you can search proofs one by one and stop when you
find one, but if there is none the search runs forever. So the set of theorems of PA is **computably enumerable** but, as
Chapter 18 will show, not computable. This is the same split as halting in [Chapter 14](14-Undecidability.md).

**Try it in Python** (with `sympy` for primes and factoring):

```python
from sympy import prime, factorint

code = {"0": 1, "S": 3, "=": 5, "(": 7, ")": 9, "+": 11,
        "*": 13, "¬": 15, "→": 17, "∀": 19, "x": 21}
symbol = {v: k for k, v in code.items()}

def godel(s):
    n = 1
    for i, ch in enumerate(s):
        n *= prime(i + 1) ** code[ch]
    return n

def decode(n):
    f = factorint(n)
    return "".join(symbol[f[prime(i + 1)]] for i in range(len(f)))

print(godel("0=0"), godel("S0=S0"))      # 2430 282975000
print(decode(2430))                       # 0=0
```

### Other codings

Prime powers are the classic choice, but any computable way to turn finite objects into numbers, with a computable
inverse, does the job. A neat one for pairs is **Cantor's pairing function**

$$
\pi(x, y) = \frac{(x + y)(x + y + 1)}{2} + y,
$$

a bijection from $\mathbb{N} \times \mathbb{N}$ to $\mathbb{N}$ (it numbers the pairs along diagonals, as in
[Chapter 7](07-Infinity-and-Cardinality.md)). For example $\pi(0, 0) = 0$, $\pi(1, 0) = 1$, $\pi(0, 1) = 2$ and
$\pi(2, 3) = 18$. Lists can then be coded by repeated pairing. Modern texts often code strings in binary instead. Which
coding you choose changes nothing in the theorems.

The important point is the **arithmetisation of syntax**: every syntactic notion (formula, substitution, axiom, proof)
becomes a relation between numbers that a program can decide, and so, by the next section, a relation that a formula of
arithmetic can express and that PA can reason about.

## 17.4 Representability of computable functions

*Level: advanced.* Coding turns "is a proof" into a computable relation on numbers. The last link in the chain is to turn
computable relations into *formulas*, in such a way that the theory itself can verify every individual case.

### The definition

Let $T$ be a theory in the language of arithmetic (we care about Q and PA).

- A relation $R \subseteq \mathbb{N}^k$ is **represented** in $T$ by a formula $\rho(x_1, \ldots, x_k)$ if for all numbers
  $n_1, \ldots, n_k$: when $R(n_1, \ldots, n_k)$ holds, $T \vdash \rho(\overline{n_1}, \ldots, \overline{n_k})$, and when it
  fails, $T \vdash \neg \rho(\overline{n_1}, \ldots, \overline{n_k})$.
- A function $f: \mathbb{N}^k \to \mathbb{N}$ is **represented** by a formula $\phi(x_1, \ldots, x_k, y)$ if for all
  $\vec n$,

$$
T \vdash \forall y \, \big( \phi(\overline{n_1}, \ldots, \overline{n_k}, y) \leftrightarrow y = \overline{f(\vec n)} \big).
$$

In words: for each particular input, the theory proves what the output is and that there is no other output. This is
weaker than *defining* the function in the standard model, because it only asks about numerals, one input at a time. It
says nothing about what $T$ proves for all $x$ at once.

**Example 7.** Addition is represented in Q by the formula $x_1 + x_2 = y$. For given $n, m$, Q proves
$\overline n + \overline m = \overline{n + m}$ (17.1), and so by the laws of equality
$\forall y \, (\overline n + \overline m = y \leftrightarrow y = \overline{n + m})$.

**Example 8.** The relation "$x$ divides $y$" is represented in Q by the bounded formula
$\exists z \, (z \le y \wedge z \cdot x = y)$. By the proof of Theorem 17.2, Q proves each true instance and refutes each
false one, because bounded sentences are decided by Q.

**Theorem 17.4 (representability).** Every computable function $f: \mathbb{N}^k \to \mathbb{N}$ (total) is represented in
Q, and therefore in every consistent theory that contains Q, such as PA and ZFC (through its copy of arithmetic). Every
computable relation is represented in Q.

This is the precise sense in which arithmetic "can compute". The first version is in Gödel's 1931 paper (for primitive
recursive functions); the version for all computable functions is in Kleene's work of the 1930s and in the 1953 book of
Tarski, Mostowski and Robinson, which also isolated Q.

### Gödel's $\beta$ function

The main obstacle is **recursion**. A function defined by primitive recursion, say $f(0) = a$, $f(n + 1) = g(n, f(n))$, is
explained by a *sequence*: "$f(n) = y$ means there is a sequence $c_0, \ldots, c_n$ with $c_0 = a$, $c_{i+1} = g(i, c_i)$ and
$c_n = y$". But the language of arithmetic has no symbol for sequences, and prime-power coding needs exponentiation, which
is not in the language either. Gödel's trick codes any finite sequence by just two numbers, using only $+$ and $\cdot$ and the
remainder function.

Define

$$
\beta(a, b, i) = \text{the remainder of } a \text{ on division by } 1 + (i + 1) b.
$$

The relation $\beta(a, b, i) = r$ is expressed by the bounded formula
$\exists q \le a \, \big( a = q \cdot (1 + (i + 1) b) + r \wedge r < 1 + (i + 1) b \big)$.

**Lemma 17.5 (Gödel's $\beta$ lemma).** For every finite sequence $k_0, k_1, \ldots, k_n$ of natural numbers there are
numbers $a, b$ with $\beta(a, b, i) = k_i$ for every $i \le n$.

*Proof.* Let $s = \max(n, k_0, \ldots, k_n)$ and $b = s!$. Put $d_i = 1 + (i + 1) b$ for $i = 0, \ldots, n$.

*The $d_i$ are pairwise coprime.* Suppose a prime $p$ divides $d_i$ and $d_j$ with $i < j$. Then $p$ divides

$$
(i + 1) d_j - (j + 1) d_i = (i + 1) - (j + 1) = i - j,
$$

so $p$ divides $j - i$. But $1 \le j - i \le n \le s$, so $p$ divides $s! = b$, and then $p$ divides
$d_i - (i + 1) b = 1$, which is impossible.

*Each $k_i < d_i$*, since $k_i \le s \le s! = b < d_i$.

By the Chinese remainder theorem there is a number $a$ with $a \equiv k_i \pmod{d_i}$ for every $i$. Since $0 \le k_i < d_i$,
the remainder of $a$ on division by $d_i$ is exactly $k_i$. $\square$

**Example 9.** Code the sequence $(2, 0, 3)$. Here $n = 2$ and $s = 3$, so $b = 3! = 6$ and the moduli are
$d_0 = 7$, $d_1 = 13$, $d_2 = 19$. We need $a \equiv 2 \pmod 7$, $a \equiv 0 \pmod{13}$, $a \equiv 3 \pmod{19}$. The multiples of
13 below $7 \cdot 13 = 91$ that are $2 \bmod 7$: $13 \equiv 6$, $26 \equiv 5$, $39 \equiv 4$, $52 \equiv 3$, $65 \equiv 2$. So
$a \equiv 65 \pmod{91}$. Now try $65, 156, 247, 338, 429, 520, 611, \ldots$ modulo 19: $65 \equiv 8$, $156 \equiv 4$,
$247 \equiv 0$, $338 \equiv 15$, $429 \equiv 11$, $520 \equiv 7$, $611 \equiv 3$. So $a = 611$.

*Check:* $611 = 87 \cdot 7 + 2$, $611 = 47 \cdot 13$, $611 = 32 \cdot 19 + 3$. The pair $(611, 6)$ codes $(2, 0, 3)$.

### Why every computable function is representable (idea)

Take the computable functions to be the $\mu$-recursive ones of [Chapter 15](15-Recursive-Functions-and-Computability.md):
built from zero, successor and projections by composition, primitive recursion and unbounded minimisation $\mu$. Give each
one a formula, by induction on how it is built:

- **basic functions**: $y = 0$, $y = Sx$, $y = x_i$;
- **composition** $f(\vec x) = h(g_1(\vec x), \ldots, g_m(\vec x))$: say "there are $z_1, \ldots, z_m$ with
  $\gamma_j(\vec x, z_j)$ for each $j$ and $\eta(z_1, \ldots, z_m, y)$";
- **primitive recursion**: with the $\beta$ function, say "there are $a, b$ with $\beta(a, b, 0)$ equal to the start value, for
  every $i < n$, $\beta(a, b, i + 1)$ is obtained from $\beta(a, b, i)$ by the step function, and $\beta(a, b, n) = y$";
- **minimisation** $f(\vec x) = \mu z \, [g(\vec x, z) = 0]$: say "$g(\vec x, y) = 0$ and for every $z < y$,
  $g(\vec x, z) \neq 0$".

Every formula built this way is $\Sigma_1$ (or equivalent to one in Q for the cases that matter), and it defines $f$
correctly in $\mathbb{N}$. Then Theorem 17.2 shows that Q proves each true instance $\phi(\vec{\overline n}, \overline{f(\vec n)})$.
The remaining work, showing that Q also proves *uniqueness* of the output, needs care, especially for the $\beta$ step, and
is where the full proof gets long. It is done carefully in Boolos, Burgess and Jeffrey, *Computability and Logic*, chapter
16, and in Smith, *An Introduction to Gödel's Theorems*.

**What it gives us.** Combine this with 17.3. The relation $\mathrm{Prf}_{\mathrm{PA}}(p, n)$ is computable, so it is
represented in Q by some formula, which we also write $\mathrm{Prf}(x, y)$. The function
$\mathrm{sub}(n, m) = \ulcorner \varphi(\overline m) \urcorner$ (where $n = \ulcorner \varphi(x) \urcorner$), which plugs the
numeral for $m$ into a formula, is computable, so it is represented too. These two formulas are all that Chapter 18 needs.

## 17.5 Goodstein's theorem

*Level: advanced.* Gödel's theorem in Chapter 18 produces a true sentence that PA cannot prove, but the sentence is about
codes and provability. For forty years after 1931 one could ask: is there a *natural* statement about numbers, one a number
theorist might care about, that PA cannot decide? The first convincing answers came in 1977 (Paris and Harrington, a
variant of Ramsey's theorem, see the [Combinatorics book](../combinatorics/index.md)) and 1982 (Kirby and Paris, Goodstein's
theorem). Here is the second, because you can play it with pencil and paper.

### Hereditary base notation

Writing $n$ in **base** $b$ means writing it as a sum of powers of $b$ with coefficients less than $b$. In **hereditary**
base $b$ you then write each exponent in base $b$ as well, and each exponent of those, until only numbers less than $b$
appear. For example, in base 2,

$$
35 = 2^5 + 2^1 + 1 = 2^{2^2 + 1} + 2 + 1.
$$

### The Goodstein sequence

Start with a number $m$. Write it in hereditary base 2. **Bump the base**: replace every 2 by a 3. Then **subtract 1**.
Write the result in hereditary base 3, replace every 3 by a 4, subtract 1, and so on. Stop if you reach 0.

**Example 10 ($m = 3$).**

- $3 = 2 + 1$. Bump: $3 + 1 = 4$. Subtract 1: $3$.
- $3$ in base 3 is just $3$. Bump: $4$. Subtract 1: $3$.
- In base 4, $3$ is a digit. Bumping changes nothing. Subtract 1: $2$. Then $1$, then $0$.

The sequence is $3, 3, 3, 2, 1, 0$: it dies at base 7.

**Example 11 ($m = 4$).**

- $4 = 2^2$. Bump: $3^3 = 27$. Subtract 1: $26$.
- $26 = 2 \cdot 3^2 + 2 \cdot 3 + 2$. Bump: $2 \cdot 4^2 + 2 \cdot 4 + 2 = 42$. Subtract 1: $41$.
- $41 = 2 \cdot 4^2 + 2 \cdot 4 + 1$. Bump: $2 \cdot 5^2 + 2 \cdot 5 + 1 = 61$. Subtract 1: $60$.
- $60 = 2 \cdot 5^2 + 2 \cdot 5$. Bump: $2 \cdot 6^2 + 2 \cdot 6 = 84$. Subtract 1: $83 = 2 \cdot 6^2 + 6 + 5$.

The sequence goes $4, 26, 41, 60, 83, 109, 139, 173, 211, 253, 299, 348, \ldots$ and keeps growing for a very long time.
It does reach 0 in the end, when the base is $3 \cdot 2^{402{,}653{,}211} - 1$, a number with over 121 million digits.
For $m = 5$ it starts $5, 27, 255, 467, \ldots$ and grows far faster.

**Try it in Python:**

```python
def bump(n, b):
    """Write n in hereditary base b, then replace b by b + 1."""
    total, e = 0, 0
    while n:
        d = n % b
        if d:
            total += d * (b + 1) ** bump(e, b)
        n //= b
        e += 1
    return total

def goodstein(m, terms):
    seq, b = [m], 2
    while m and len(seq) < terms:
        m = bump(m, b) - 1
        b += 1
        seq.append(m)
    return seq

print(goodstein(3, 10))   # [3, 3, 3, 2, 1, 0]
print(goodstein(4, 12))   # [4, 26, 41, 60, 83, 109, 139, 173, 211, 253, 299, 348]
```

**Theorem 17.6 (Goodstein, 1944).** For every starting number $m$, the Goodstein sequence of $m$ eventually reaches 0.

This looks absurd given the numbers above, yet it is true, and the proof is short once you have the right tool: ordinals.

### Ordinals below $\varepsilon_0$

You can think of the ordinals we need as expressions built from $\omega$ ("the first infinite number") by the rule that
mirrors hereditary base notation:

$$
\alpha = \omega^{\alpha_1} \cdot c_1 + \omega^{\alpha_2} \cdot c_2 + \cdots + \omega^{\alpha_k} \cdot c_k,
$$

where $\alpha_1 > \alpha_2 > \cdots > \alpha_k$ are again such expressions and $c_1, \ldots, c_k$ are positive whole numbers.
This is the **Cantor normal form**. Compare two of them as you compare numbers written in a base: first by the leading
exponent, then by the leading coefficient, then the next term, and so on. Examples in increasing order:

$$
0 < 1 < 2 < \cdots < \omega < \omega + 1 < \omega \cdot 2 < \omega^2 < \omega^2 \cdot 2 + \omega < \omega^\omega < \omega^{\omega^\omega} < \cdots
$$

The supremum of $\omega, \omega^\omega, \omega^{\omega^\omega}, \ldots$ is called $\varepsilon_0$, and the expressions above
are exactly the ordinals below it. The fact we use is:

**Fact.** The ordinals below $\varepsilon_0$ are **well-ordered**: there is no infinite strictly decreasing sequence
$\alpha_0 > \alpha_1 > \alpha_2 > \cdots$.

This holds for all ordinals, by their definition in set theory ([Chapter 8](08-Axiomatic-Set-Theory.md)): every nonempty
set of ordinals has a least element. For the expressions above you can also prove it directly by induction on the height of
the tower of exponents.

### The proof of Goodstein's theorem

*Proof of Theorem 17.6.* Let $m_k$ be the $k$-th term, written in hereditary base $b_k = k + 2$. Let $o_k$ be the ordinal
you get by replacing every $b_k$ in that notation by $\omega$. For Example 11:

| term | hereditary notation | ordinal $o_k$ |
|---|---|---|
| $4$ | $2^2$ | $\omega^\omega$ |
| $26$ | $2 \cdot 3^2 + 2 \cdot 3 + 2$ | $\omega^2 \cdot 2 + \omega \cdot 2 + 2$ |
| $41$ | $2 \cdot 4^2 + 2 \cdot 4 + 1$ | $\omega^2 \cdot 2 + \omega \cdot 2 + 1$ |
| $60$ | $2 \cdot 5^2 + 2 \cdot 5$ | $\omega^2 \cdot 2 + \omega \cdot 2$ |
| $83$ | $2 \cdot 6^2 + 6 + 5$ | $\omega^2 \cdot 2 + \omega + 5$ |

Two observations:

1. *Bumping the base does not change the ordinal.* Replacing $b$ by $b + 1$ everywhere and then replacing $b + 1$ by
   $\omega$ gives the same expression as replacing $b$ by $\omega$ directly. (Every coefficient is below $b$, hence below
   $b + 1$, so the bumped expression is already in hereditary base $b + 1$.)
2. *Subtracting 1 strictly lowers the ordinal.* If the last term of $m$ in base $b$ is a nonzero digit, subtracting 1 lowers
   that digit and the ordinal drops by 1. Otherwise the lowest term is $c \cdot b^{e}$ with $e \ge 1$, and subtracting 1
   replaces it by $(c - 1) \cdot b^{e} + (b^{e} - 1)$, where $b^e - 1$ written out uses only exponents smaller than $e$. In
   the ordinal, the term $\omega^{e'} \cdot c$ becomes $\omega^{e'} \cdot (c - 1)$ plus terms with exponents smaller than
   $e'$, and that is smaller, however large the new coefficients are.

So $o_0 > o_1 > o_2 > \cdots$ for as long as the sequence is not yet 0. By the Fact, a strictly decreasing sequence of
ordinals cannot go on forever. So the Goodstein sequence reaches 0. $\square$

Notice what happened. The numbers grow, but the ordinals shrink. The base keeps rising, but $\omega$ is "already infinite",
so bumping cannot touch it. All the work is done by the well-ordering of $\varepsilon_0$.

### Unprovable in PA

The statement "for every $m$ the Goodstein sequence of $m$ reaches 0" can be written as a sentence of arithmetic: each
step is computable, so "the sequence of $m$ reaches 0" is $\Sigma_1$, and the whole statement is $\forall m \, \exists k \ldots$,
a $\Pi_2$ sentence.

**Theorem 17.7 (Kirby and Paris, 1982).** Goodstein's theorem is true but not provable in PA (assuming PA is consistent).

*Idea of the proof.* *Level: expert.* There are now several proofs. One route, made short by E. A. Cichon in 1983, goes
through growth rates. If PA proves $\forall m \, \exists k \, \theta(m, k)$ with $\theta$ bounded, then the function
"least such $k$" grows no faster than some level $F_\alpha$, $\alpha < \varepsilon_0$, of the **fast-growing hierarchy**
(a scale of functions indexed by ordinals; this is a theorem of proof theory going back to Gentzen's analysis of PA and to
work of Kreisel, Wainer and others). But the function $m \mapsto$ (number of steps for the Goodstein sequence of $m$ to reach
0) can be computed exactly in terms of the ordinals $o_k$, and it outgrows every $F_\alpha$ with $\alpha < \varepsilon_0$.
So PA cannot prove that it is total. Kirby and Paris's original proof used nonstandard models of PA: they built, inside a
nonstandard model, an initial segment that satisfies PA but in which some Goodstein sequence never terminates.

In the same paper Kirby and Paris also proved the unprovability of a "Hydra game": cut heads off a tree-shaped monster,
which grows new heads according to a rule, and show that every strategy eventually wins. Again true, and again beyond PA.

**Why $\varepsilon_0$ again?** Gentzen proved PA consistent using induction up to $\varepsilon_0$; PA proves induction
up to every ordinal below $\varepsilon_0$ but not up to $\varepsilon_0$ itself. Goodstein's proof used exactly the
well-ordering of $\varepsilon_0$. The ordinal $\varepsilon_0$ measures the strength of PA, its **proof-theoretic ordinal**.

**What this means.** PA is not "wrong" about Goodstein sequences: it proves, for each particular $m$, that the sequence of
$m$ reaches 0 (that is a true $\Sigma_1$ sentence, so Theorem 17.2 applies). What PA cannot do is prove the general
statement. The stronger theory ZFC proves it, by the argument above. And there are nonstandard models of PA in which some
nonstandard $m$ has a Goodstein sequence that never ends.

## Check yourself

??? question "1. Prove $1 + 1 = 2$ in Q, that is $S0 + S0 = SS0$, naming the axiom for each step."
    $S0 + S0 = S(S0 + 0)$ by axiom 4 (with $x = S0$, $y = 0$). $S0 + 0 = S0$ by axiom 3. Replacing equals by equals,
    $S(S0 + 0) = S(S0) = SS0$. So $S0 + S0 = SS0$.

??? question "2. Prove $2 \cdot 2 = 4$ in Q, that is $SS0 \cdot SS0 = SSSS0$. You may use the result of the text that Q proves $\overline n + \overline m = \overline{n + m}$."
    $SS0 \cdot SS0 = (SS0 \cdot S0) + SS0$ by axiom 6. $SS0 \cdot S0 = (SS0 \cdot 0) + SS0$ by axiom 6, and
    $SS0 \cdot 0 = 0$ by axiom 5, so $SS0 \cdot S0 = 0 + SS0$. Now $0 + SS0 = SS0$ is a closed equation, which Q proves by
    computation: $0 + SS0 = S(0 + S0) = SS(0 + 0) = SS0$. So $SS0 \cdot S0 = SS0$ and $SS0 \cdot SS0 = SS0 + SS0 = SSSS0$ by
    Example 1.

??? question "3. Prove in PA that addition is associative: $(x + y) + z = x + (y + z)$."
    Induction on $z$ with $x, y$ as parameters. Base: $(x + y) + 0 = x + y$ by axiom 3, and $x + (y + 0) = x + y$ by
    axiom 3 inside. Step: assume $(x + y) + z = x + (y + z)$. Then $(x + y) + Sz = S((x + y) + z)$ (axiom 4)
    $= S(x + (y + z))$ (hypothesis) $= x + S(y + z)$ (axiom 4 read backwards) $= x + (y + Sz)$ (axiom 4 inside). So the
    property holds for $Sz$.

??? question "4. Show that Q does not prove $\forall x \, (0 + x = x)$. Hint: find a model of Q in which it fails."
    Take the domain $\mathbb{N} \cup \{a, b\}$ with two new elements, both fixed by successor: $Sa = a$, $Sb = b$. On
    $\mathbb{N}$ everything is as usual. Addition: $n + a = n + b = b$ for $n \in \mathbb{N}$, and $a + y = a$, $b + y = b$
    for every $y$. Multiplication: $x \cdot y = 0$ if $x$ or $y$ is the number $0$; usual on $\mathbb{N}$; and $x \cdot y = b$
    in every other case. Now check the seven axioms. Axioms 1 and 2: $Sa = a \neq 0$, $Sb = b \neq 0$, and $S$ is still
    injective. Every element is $0$ or a successor ($a = Sa$, $b = Sb$). Axiom 3: $x + 0 = x$ in every case. Axiom 4,
    $x + Sy = S(x + y)$: if $x \in \{a, b\}$ both sides are $x$; if $x = n$ and $y \in \{a, b\}$ both sides are $b$; if both
    are numbers it is ordinary arithmetic. Axiom 5 holds by definition. Axiom 6, $x \cdot Sy = x \cdot y + x$: if $x = 0$ both
    sides are $0$; if $x = n \geq 1$ and $y \in \{a, b\}$ both sides are $b$ (since $b + n = b$); if $x \in \{a, b\}$ the left
    side is $b$, and the right side is $0 + x = b$ when $y = 0$ and $b + x = b$ otherwise. So this is a model of Q. But in it
    $0 + a = b \neq a$. Since Q is true in a structure where $\forall x \, (0 + x = x)$ is false, Q cannot prove it
    (soundness, Chapter 11). Without induction nothing forces the new elements to behave like numbers.

??? question "5. Compute the Gödel number of the string $S0$ with the coding of 17.3, and decode the number $2^{3} \cdot 3^{3} \cdot 5^{1}$."
    $S0$ has codes $3, 1$, so the number is $2^3 \cdot 3^1 = 24$. The number $2^3 \cdot 3^3 \cdot 5^1 = 1080$ has exponents
    $3, 3, 1$, which spell $SS0$, the numeral $\overline 2$.

??? question "6. Find $a$ and $b$ with $\beta(a, b, 0) = 1$ and $\beta(a, b, 1) = 2$, following the proof of the $\beta$ lemma."
    Here $n = 1$ and $s = \max(1, 1, 2) = 2$, so $b = 2! = 2$, $d_0 = 1 + 1 \cdot 2 = 3$, $d_1 = 1 + 2 \cdot 2 = 5$. We need
    $a \equiv 1 \pmod 3$, $a \equiv 2 \pmod 5$: $a = 7$. *Check:* $7 = 2 \cdot 3 + 1$ and $7 = 1 \cdot 5 + 2$. So $(a, b) = (7, 2)$.

??? question "7. Write $100$ in hereditary base 2 and in hereditary base 3."
    $100 = 64 + 32 + 4 = 2^6 + 2^5 + 2^2$, and $6 = 2^2 + 2$, $5 = 2^2 + 1$, so
    $100 = 2^{2^2 + 2} + 2^{2^2 + 1} + 2^2$. In base 3: $100 = 81 + 18 + 1 = 3^4 + 2 \cdot 3^2 + 1$ and $4 = 3 + 1$, so
    $100 = 3^{3 + 1} + 2 \cdot 3^2 + 1$.

??? question "8. Compute the first five terms of the Goodstein sequence of 5 by hand, and the ordinal attached to each of the first three."
    $5 = 2^2 + 1$ (ordinal $\omega^\omega + 1$). Bump: $3^3 + 1 = 28$, minus 1: $27 = 3^3$ (ordinal $\omega^\omega$). Bump: $4^4 = 256$,
    minus 1: $255 = 3 \cdot 4^3 + 3 \cdot 4^2 + 3 \cdot 4 + 3$ (ordinal $\omega^3 \cdot 3 + \omega^2 \cdot 3 + \omega \cdot 3 + 3$).
    Bump: $3 \cdot 125 + 3 \cdot 25 + 3 \cdot 5 + 3 = 468$, minus 1: $467$. Bump $467 = 3 \cdot 5^3 + 3 \cdot 5^2 + 3 \cdot 5 + 2$
    to base 6: $3 \cdot 216 + 3 \cdot 36 + 3 \cdot 6 + 2 = 776$, minus 1: $775$. Terms: $5, 27, 255, 467, 775$. The ordinals
    $\omega^\omega + 1 > \omega^\omega > \omega^3 \cdot 3 + \cdots$ decrease, as the proof says.

??? question "9. Why does PA prove, for each particular $m$, that the Goodstein sequence of $m$ reaches 0, even though it does not prove Goodstein's theorem?"
    For a fixed $m$ the statement "the sequence of $\overline m$ reaches 0" is $\exists k \, \theta(\overline m, k)$ with $\theta$
    bounded (it says: there is a code $k$ of a finite computation that starts at $m$, follows the rules and ends in 0). It is
    true by Goodstein's theorem, so by $\Sigma_1$-completeness (Theorem 17.2) Q, and so PA, proves it. The unprovable
    statement is the general $\forall m \, \exists k \, \theta(m, k)$, which is not $\Sigma_1$.

??? question "10. In a nonstandard model $M$ of PA, let $c$ be nonstandard. Show that $c + c$ is in a different block from $c$."
    Two elements are in the same block when they differ by a standard number. If $c + c$ and $c$ were in the same block,
    then $(c + c) - c = c$ would be standard, but $c$ is nonstandard. (PA proves $x \le x + x$ and the cancellation law, so
    the difference makes sense in $M$.) So the block of $c + c$ is strictly later than the block of $c$.

??? question "11. Show from the induction schema that PA proves the least number principle for a formula $\varphi(x)$: if $\exists x \, \varphi(x)$ then there is a least $x$ with $\varphi(x)$."
    Suppose there is no least $x$ with $\varphi(x)$. Apply induction to $\psi(x) := \forall y \, (y \le x \rightarrow \neg \varphi(y))$.
    Base: the only $y \le 0$ is $0$; if $\varphi(0)$ held, $0$ would be least. So $\psi(0)$. Step: assume $\psi(x)$. The
    numbers $\le Sx$ are those $\le x$ and $Sx$ itself (a lemma PA proves). If $\varphi(Sx)$ held, $Sx$ would be least since
    no $y \le x$ satisfies $\varphi$. So $\psi(Sx)$. Hence $\forall x \, \psi(x)$, which gives $\forall x \, \neg \varphi(x)$.
    So if $\exists x \, \varphi(x)$, there is a least such $x$.

??? question "12. Presburger arithmetic (with $+$ but no $\cdot$) is complete and decidable. Why does that not contradict the incompleteness theorems of Chapter 18?"
    Gödel's first theorem needs a theory in which every computable function is representable (17.4). Representing the
    functions needs multiplication, for example to state $\beta(a, b, i)$, which uses $(i + 1) \cdot b$. Without
    multiplication, Presburger arithmetic cannot represent all computable functions, so the diagonal argument of Chapter 18
    cannot be run inside it. Its completeness is exactly what you would expect from a weak language.

## What you learned

- Peano arithmetic is a first-order theory with axioms for successor, $+$, $\cdot$, and an induction axiom for every formula;
  Robinson's Q drops induction.
- Short inductions prove $0 + x = x$, commutativity, associativity and the other basic laws; Q alone proves every true
  closed equation.
- Q, and so PA, proves every true $\Sigma_1$ sentence; the gaps are in $\Pi_1$ sentences and above.
- Compactness gives nonstandard models of PA: the standard numbers followed by densely ordered copies of $\mathbb{Z}$.
- Gödel numbering turns formulas and proofs into numbers; "$p$ is a proof of $n$" is computable (even primitive recursive),
  while "$n$ is provable" is only computably enumerable.
- Every computable function is represented in Q; Gödel's $\beta$ function codes sequences with only $+$, $\cdot$ and the
  Chinese remainder theorem.
- Goodstein sequences always reach 0, proved by attaching decreasing ordinals below $\varepsilon_0$; Kirby and Paris showed
  in 1982 that PA cannot prove this.

**Next:** [Chapter 18](18-Godels-Incompleteness-Theorems.md), where the diagonal lemma turns coding and representability
into Gödel's two incompleteness theorems and Tarski's theorem on truth.

## Further reading

- R. Dedekind, *Was sind und was sollen die Zahlen?*, 1888; G. Peano, *Arithmetices principia, nova methodo exposita*, 1889
  (both translated in J. van Heijenoort, ed., *From Frege to Gödel: A Source Book in Mathematical Logic, 1879-1931*, 1967,
  which has Peano's text; Dedekind's essay is in W. Ewald, ed., *From Kant to Hilbert*, 1996).
- P. Smith, *An Introduction to Gödel's Theorems*, 2nd ed., 2013 (the clearest full account of Q, PA, coding and
  representability).
- G. Boolos, J. Burgess and R. Jeffrey, *Computability and Logic*, 5th ed., 2007 (chapters on representability and
  nonstandard models).
- A. Tarski, A. Mostowski and R. M. Robinson, *Undecidable Theories*, 1953.
- R. Kaye, *Models of Peano Arithmetic*, 1991 (nonstandard models, Tennenbaum's theorem).
- R. L. Goodstein, "On the restricted ordinal theorem", *Journal of Symbolic Logic* 9, 1944; L. Kirby and J. Paris,
  "Accessible independence results for Peano arithmetic", *Bulletin of the London Mathematical Society* 14, 1982;
  E. A. Cichon, "A short proof of two recently discovered independence results using recursion theoretic methods",
  *Proceedings of the AMS* 87, 1983.
- J. Paris and L. Harrington, "A mathematical incompleteness in Peano arithmetic", in J. Barwise, ed., *Handbook of
  Mathematical Logic*, 1977.
- On this site: the Topics lessons [Axioms](../../topics/logic/level-8/02-axioms.md) and
  [Predicate logic](../../topics/logic/level-8/01-predicate-logic.md); induction in the
  [Algebra book, Chapter 8](../algebra/08-Sequences-Series-and-Induction.md); the Chinese remainder theorem in the
  [Number theory book](../number-theory/06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md); MAT137
  [Unit 1: Logic, sets and proofs](../../uoft/MAT137/unit01.md) (U of T); the
  [Number theory book](../number-theory/index.md) and the [Combinatorics book](../combinatorics/index.md) for Ramsey
  theory.
