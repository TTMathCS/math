# 18. Gödel's incompleteness theorems

*In the 1920s David Hilbert hoped to put all of mathematics on axioms that were complete (every statement provable or
refutable) and provably consistent (no contradiction derivable), with the consistency proof itself using only safe,
finite reasoning. In 1930 and 1931 Kurt Gödel, then 24, showed that for any axiom system strong enough to do arithmetic
this cannot be done. This chapter proves his two theorems. One short lemma, the diagonal lemma, lets a sentence talk about
itself. From it come the first incompleteness theorem, Rosser's sharper form, the second theorem on consistency, and
Tarski's theorem that truth cannot be defined. The chapter ends with what the theorems say and, just as important, what
they do not say.*

!!! abstract "In this chapter"
    **You will learn:**

    - the diagonal lemma: for any property you can write down, there is a sentence that says "I have this property"
    - Gödel's first incompleteness theorem, with a complete proof from the diagonal lemma, and Rosser's improvement
    - a second proof of incompleteness from the halting problem
    - the second incompleteness theorem: a consistent theory cannot prove its own consistency, with the proof from the
      derivability conditions, and Löb's theorem
    - Tarski's theorem that arithmetical truth is not definable in arithmetic, with proof
    - what incompleteness does and does not mean, and the most common misreadings

    **You need:** [Chapter 17](17-Arithmetic-and-Peano.md) (Peano arithmetic, Q, Gödel numbering, representability), which
    this chapter uses throughout; [Chapter 11](11-Completeness-and-Compactness.md) for the difference between "complete
    proof system" and "complete theory"; [Chapter 14](14-Undecidability.md) for the halting problem. The gentle version is
    the Topics lesson [Gödel's incompleteness](../../topics/logic/level-8/04-godel-incompleteness.md).

    **Levels:** 18.1 and 18.2 are advanced; 18.3 is advanced to expert; 18.4 is advanced; 18.5 is for everyone and can be
    read first.

## The setting

Throughout this chapter $T$ is a theory in the language of arithmetic (or a theory, such as ZFC, inside which arithmetic
can be translated) with three properties:

1. $T$ **contains Q**: it proves all the axioms of Robinson arithmetic from [Chapter 17](17-Arithmetic-and-Peano.md).
2. $T$ is **computably axiomatised**: there is a program that decides, for any formula, whether it is an axiom of $T$. PA
   and ZFC both are. (A theory whose axioms are "all true sentences of arithmetic" is not, as we will see.)
3. $T$ is **consistent**: it does not prove both $\varphi$ and $\neg \varphi$ for any $\varphi$.

From Chapter 17 we take these tools:

- each formula $\varphi$ has a code $\ulcorner \varphi \urcorner$, and we write $\overline{\ulcorner \varphi \urcorner}$ for the
  numeral of that code; to keep the formulas readable we will write $\ulcorner \varphi \urcorner$ for both;
- by computable axiomatisation, the relation "$p$ codes a $T$-proof of the formula with code $n$" is computable, and so it
  is represented in Q by a formula $\mathrm{Prf}_T(x, y)$;
- we set $\mathrm{Prov}_T(y) := \exists x \, \mathrm{Prf}_T(x, y)$, "$y$ is provable in $T$";
- every computable function is represented in Q.

A theory $T$ is **complete** if for every sentence $\varphi$, $T \vdash \varphi$ or $T \vdash \neg \varphi$. Do not confuse
this with Gödel's *completeness theorem* of [Chapter 11](11-Completeness-and-Compactness.md), which says that the proof
*system* of first-order logic proves every logically valid formula. That theorem is about logic; the incompleteness
theorems are about particular theories.

## 18.1 The diagonal lemma

*Level: advanced.* Can a sentence talk about itself? In English, yes: "this sentence has five words" is true and is about
itself. The liar sentence, "this sentence is false", talks about itself too, and leads to a paradox. The language of
arithmetic has no word for "this sentence". It only talks about numbers. But numbers can be codes of sentences, so a
sentence can talk about its own code, provided it can somehow get hold of that code without containing it (a sentence
cannot literally contain its own numeral, which would be longer than itself). The trick that does this is called
**diagonalisation**.

### Quines: the trick in a programming language

A **quine** is a program that prints its own source code. You cannot just write `print("...")` with the program inside the
quotes, because then the quotes would need to contain themselves. The way out is to write a template once, and then use it
twice: once as text and once as the code that prints. Here is a quine in Python:

```python
s = 's = %r\nprint(s %% s)'
print(s % s)
```

The string `s` is a template with a hole `%r`. The program fills the hole with `s` itself, written in quotes (that is what
`%r` does), and prints the result, which is exactly the two lines above. *Check:* save it as `q.py`, run
`python3 q.py > out.txt`, and `diff q.py out.txt` shows no difference.

W. V. Quine, after whom these programs are named, gave a version in English:

> "yields falsehood when preceded by its quotation" yields falsehood when preceded by its quotation.

The sentence says that a certain phrase, when you put a copy of it in quotes in front of itself, produces a false sentence.
Do that, and you get exactly the sentence itself. So it says of itself that it is false, without using the word "this".

### The diagonal function

Now the same idea in arithmetic. For a formula $\varphi(x)$ with one free variable $x$, its **diagonalisation** is the
sentence $\varphi(\ulcorner \varphi \urcorner)$: the formula applied to the numeral of its own code. Define

$$
\mathrm{diag}(n) = \begin{cases} \ulcorner \varphi(\ulcorner \varphi \urcorner) \urcorner & \text{if } n = \ulcorner \varphi(x) \urcorner \text{ for a formula } \varphi(x), \\ 0 & \text{otherwise.} \end{cases}
$$

Computing $\mathrm{diag}(n)$ means: decode $n$, substitute a numeral for $x$, recode. That is computable, so by
representability (Chapter 17) there is a formula $\mathrm{Diag}(x, y)$ with, for every $n$,

$$
\mathrm{Q} \vdash \forall y \, \big( \mathrm{Diag}(\overline n, y) \leftrightarrow y = \overline{\mathrm{diag}(n)} \big).
$$

**Theorem 18.1 (diagonal lemma).** Let $T$ contain Q. For every formula $\psi(y)$ with one free variable there is a sentence
$G$ such that

$$
T \vdash G \leftrightarrow \psi(\ulcorner G \urcorner).
$$

$G$ "says": "I have the property $\psi$". It is called a **fixed point** of $\psi$.

*Proof.* Let

$$
\theta(x) := \exists y \, \big( \mathrm{Diag}(x, y) \wedge \psi(y) \big),
$$

which says "the diagonalisation of $x$ has property $\psi$". Let $m = \ulcorner \theta(x) \urcorner$, and let $G$ be the
diagonalisation of $\theta$:

$$
G := \theta(\overline m) = \exists y \, \big( \mathrm{Diag}(\overline m, y) \wedge \psi(y) \big).
$$

By definition $\mathrm{diag}(m) = \ulcorner \theta(\overline m) \urcorner = \ulcorner G \urcorner$. So by the property of
$\mathrm{Diag}$,

$$
T \vdash \forall y \, \big( \mathrm{Diag}(\overline m, y) \leftrightarrow y = \ulcorner G \urcorner \big).
$$

Substituting this equivalence inside $G$, $T$ proves

$$
G \leftrightarrow \exists y \, \big( y = \ulcorner G \urcorner \wedge \psi(y) \big),
$$

and the right side is logically equivalent to $\psi(\ulcorner G \urcorner)$. So $T \vdash G \leftrightarrow \psi(\ulcorner G \urcorner)$.
$\square$

Read the proof next to the quine. The formula $\theta$ is the template; $m$ is the template's own code, put in quotes as a
numeral; $G$ is the template applied to its own quotation. Gödel did this in 1931 for his particular $\psi$; the general
form was isolated later (Rudolf Carnap stated it in 1934, which is why it is sometimes called Carnap's lemma).

**Example 1.** Take $\psi(y)$ to be "$y$ is even". The diagonal lemma gives a sentence $E$ with
$T \vdash E \leftrightarrow (\ulcorner E \urcorner \text{ is even})$. With the prime-power coding of Chapter 17 every code is
divisible by 2, so the right side is true and $T$ proves it (it is a bounded, true sentence). Hence $T \vdash E$. A sentence
that says "my code is even" is harmless. The trouble starts when $\psi$ is about provability or truth.

## 18.2 The first incompleteness theorem

*Level: advanced.* Apply the diagonal lemma to $\psi(y) := \neg \mathrm{Prov}_T(y)$. It gives a sentence $G_T$, the
**Gödel sentence** of $T$, with

$$
T \vdash G_T \leftrightarrow \neg \mathrm{Prov}_T(\ulcorner G_T \urcorner).
$$

$G_T$ says: "I am not provable in $T$."

Gödel's original theorem used a condition stronger than consistency. $T$ is **$\omega$-consistent** if there is no formula
$\varphi(x)$ such that $T \vdash \exists x \, \varphi(x)$ and also $T \vdash \neg \varphi(\overline n)$ for every $n$. (An
$\omega$-inconsistent theory claims that something exists, yet rules out every actual number as a witness.) Every theory
that is true in $\mathbb{N}$, such as PA, is $\omega$-consistent, and $\omega$-consistency implies consistency (an inconsistent
theory proves everything).

**Theorem 18.2 (Gödel's first incompleteness theorem, 1931).** Let $T$ be computably axiomatised and contain Q.

- (a) If $T$ is consistent, then $T \nvdash G_T$.
- (b) If $T$ is $\omega$-consistent, then $T \nvdash \neg G_T$.

So an $\omega$-consistent such theory is incomplete.

*Proof of (a).* Suppose $T \vdash G_T$, and let $p$ be the code of a proof. Then "$p$ codes a proof of $G_T$" is true, so,
since $\mathrm{Prf}_T$ represents it, $T \vdash \mathrm{Prf}_T(\overline p, \ulcorner G_T \urcorner)$. By the rule for
$\exists$, $T \vdash \mathrm{Prov}_T(\ulcorner G_T \urcorner)$. But by the fixed-point equivalence, $T \vdash G_T$ gives
$T \vdash \neg \mathrm{Prov}_T(\ulcorner G_T \urcorner)$. So $T$ is inconsistent. $\square$

*Proof of (b).* Suppose $T \vdash \neg G_T$. By the fixed-point equivalence, $T \vdash \mathrm{Prov}_T(\ulcorner G_T \urcorner)$,
that is, $T \vdash \exists x \, \mathrm{Prf}_T(x, \ulcorner G_T \urcorner)$. Since $T$ is $\omega$-consistent it is consistent,
so by (a) $G_T$ has no proof: for every number $n$, "$n$ codes a proof of $G_T$" is false, and by representability
$T \vdash \neg \mathrm{Prf}_T(\overline n, \ulcorner G_T \urcorner)$ for every $n$. Together with
$T \vdash \exists x \, \mathrm{Prf}_T(x, \ulcorner G_T \urcorner)$ this contradicts $\omega$-consistency. $\square$

**Is $G_T$ true?** Yes, if $T$ is consistent. The equivalence $G_T \leftrightarrow \neg \mathrm{Prov}_T(\ulcorner G_T \urcorner)$
is provable already in Q (the proof of the diagonal lemma only used Q), and Q is true in $\mathbb{N}$, so the equivalence is
true in $\mathbb{N}$. By (a), $G_T$ is not provable, so $\neg \mathrm{Prov}_T(\ulcorner G_T \urcorner)$ is true in
$\mathbb{N}$. Hence $G_T$ is true in $\mathbb{N}$. Notice the shape: $G_T$ is equivalent to a $\Pi_1$ sentence, "no number
codes a proof of me". Each instance is a true bounded statement that $T$ proves; the universal statement is true but
unprovable. This is exactly the gap that Chapter 17 located above $\Sigma_1$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 190" role="img" aria-label="Sentences of arithmetic. Inside all sentences, a region of sentences true in the natural numbers. Inside that, the sentences provable in T. The Gödel sentence G lies in the true region but outside the provable region; its negation lies outside the true region.">
  <rect x="10" y="10" width="320" height="170" rx="10" fill="none" stroke="currentColor" stroke-width="1"/>
  <ellipse cx="135" cy="95" rx="115" ry="70" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1"/>
  <ellipse cx="110" cy="100" rx="65" ry="40" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="1"/>
  <circle cx="210" cy="95" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="290" cy="120" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <g fill="currentColor" font-size="12" text-anchor="middle">
    <text x="170" y="28">all sentences</text>
    <text x="135" y="45">true in ℕ</text>
    <text x="110" y="104">provable in T</text>
    <text x="210" y="82">G</text>
    <text x="290" y="108">¬G</text>
  </g>
</svg>
</div>

The picture assumes $T$ is sound, that is, everything it proves is true. Then the provable sentences sit inside the true
ones, and $G_T$ is a true sentence in the gap.

**Example 2 (adding $G_T$ does not help).** Since $G_T$ is true, why not add it as a new axiom? The theory
$T' = T + G_T$ is again computably axiomatised, contains Q and is consistent, so it has its own Gödel sentence $G_{T'}$, which
it cannot prove. You can repeat this into the transfinite, and you never reach a complete theory, because every theory
along the way is computably axiomatised. (Turing studied such sequences of theories, "ordinal logics", in his 1939 thesis.)

### Rosser's improvement

$\omega$-consistency is an awkward hypothesis. In 1936 J. Barkley Rosser removed it by using a cleverer sentence.

**Theorem 18.3 (Gödel-Rosser).** If $T$ is consistent, computably axiomatised and contains Q, then $T$ is incomplete.

*Sketch of the proof.* Apply the diagonal lemma to the formula "for every proof of me, there is a shorter proof of my
negation". This gives a sentence $R$ with

$$
T \vdash R \leftrightarrow \forall x \, \big( \mathrm{Prf}_T(x, \ulcorner R \urcorner) \rightarrow \exists z \, (z \le x \wedge \mathrm{Prf}_T(z, \ulcorner \neg R \urcorner)) \big).
$$

*If $T \vdash R$*, with a proof coded by $p$: since $T$ is consistent, $\neg R$ has no proof, so $T$ proves
$\neg \mathrm{Prf}_T(\overline k, \ulcorner \neg R \urcorner)$ for each $k \le p$, and Q proves that every $z \le \overline p$
is one of $\overline 0, \ldots, \overline p$. So $T$ proves "$\overline p$ is a proof of $R$ with no shorter proof of
$\neg R$", which by the fixed point gives $T \vdash \neg R$. Contradiction.

*If $T \vdash \neg R$*, with a proof coded by $q$: then $R$ has no proof, so $T$ proves
$\neg \mathrm{Prf}_T(\overline k, \ulcorner R \urcorner)$ for each $k$. By the fixed point, $T \vdash \neg R$ gives
$T \vdash \exists x \, (\mathrm{Prf}_T(x, \ulcorner R \urcorner) \wedge \forall z \le x \, \neg \mathrm{Prf}_T(z, \ulcorner \neg R \urcorner))$.
Reason in $T$ about such an $x$. Q proves $x \le \overline q \vee \overline q \le x$. If $\overline q \le x$, then $z = \overline q$
is a proof of $\neg R$ below $x$, which the formula forbids. If $x \le \overline q$, then $x$ is one of $\overline 0, \ldots, \overline q$,
and $T$ has refuted each of these being a proof of $R$. Either way $T$ derives a contradiction, so $T$ is inconsistent.
Contradiction again. $\square$

The point of the comparison of proof lengths is that each case needs $T$ to check only *finitely many* numbers, which it can
do; $\omega$-consistency was needed exactly to handle infinitely many.

**Corollaries.**

- *Undecidability.* No consistent theory containing Q is decidable (Exercise 7 gives the idea; the sharp form is in the
  1953 book of Tarski, Mostowski and Robinson, building on Church's work of 1936). In
  particular first-order logic itself is undecidable: there is no algorithm that decides whether a sentence is valid. This
  answered Hilbert's *Entscheidungsproblem* negatively, independently by Church and Turing in 1936 (see
  [Chapter 14](14-Undecidability.md)).
- *True arithmetic is not axiomatisable.* The set of all sentences true in $\mathbb{N}$, written $\mathrm{Th}(\mathbb{N})$,
  is consistent, complete and contains Q. So it cannot be computably axiomatised. No program lists axioms from which every
  arithmetical truth follows.
- *It applies to ZFC.* ZFC can define $\mathbb{N}$ and prove the axioms of Q about it, and its axioms are computably listed.
  So if ZFC is consistent, there are arithmetical sentences that ZFC neither proves nor refutes.

### A second proof, from the halting problem

There is a quicker route if you assume a bit more about $T$: that it is **sound**, meaning every theorem of $T$ is true in
$\mathbb{N}$. It shows incompleteness as a consequence of the halting problem of [Chapter 14](14-Undecidability.md).

**Theorem 18.4.** If $T$ is sound, computably axiomatised and contains Q, then $T$ is incomplete.

*Proof.* For a program $e$, let $H_e$ be the $\Sigma_1$ sentence "program $e$ halts on empty input" (there is a number coding
a finished run). Suppose $T$ were complete. Here is an algorithm for the halting problem: given $e$, list all $T$-proofs one by
one (possible, since the axioms are computable) until you find a proof of $H_e$ or a proof of $\neg H_e$; answer "halts" or
"does not halt" accordingly. By completeness, the search ends. By soundness, the answer is right. But no algorithm solves the
halting problem. So $T$ is not complete. $\square$

In fact the proof shows more: for each sound such $T$ there is a specific program $e$ that does not halt, although $T$ cannot
prove that it does not halt. This is the form in which incompleteness appears for the Busy Beaver numbers in
[Chapter 20](20-Where-Logic-Goes.md). The price of this short proof is the soundness assumption; Gödel's and Rosser's
arguments are purely syntactic and need only consistency.

### History

Gödel announced the first theorem at a conference on the foundations of mathematics in Königsberg in September 1930, during a
closing discussion. Hilbert spoke in Königsberg in the same days, in a public address that ended with the words "Wir müssen
wissen. Wir werden wissen." ("We must know. We shall know."). Gödel's paper, "Über formal unentscheidbare Sätze der
*Principia Mathematica* und verwandter Systeme I" ("On formally undecidable propositions of *Principia Mathematica* and
related systems I"), appeared in *Monatshefte für Mathematik und Physik* in 1931. John von Neumann, who had been at the
conference, soon realised that consistency itself could not be proved, and wrote to Gödel, who had already found the second
theorem. The promised part II of the paper was never written, because the result was accepted quickly. Rosser's improvement
appeared in 1936.

## 18.3 The second incompleteness theorem

*Level: advanced to expert.* Hilbert wanted a proof, by safe finite methods, that systems like PA or ZFC are consistent.
Such methods can certainly be formalised in PA. So a key question is: can PA prove its own consistency?

Write

$$
\mathrm{Con}_T := \neg \mathrm{Prov}_T(\ulcorner 0 = 1 \urcorner),
$$

the sentence "$T$ does not prove $0 = 1$". Since an inconsistent theory proves everything, and a consistent one cannot prove
$0 = 1$ (Q refutes it), $\mathrm{Con}_T$ expresses that $T$ is consistent.

**Theorem 18.5 (Gödel's second incompleteness theorem).** If $T$ is consistent, computably axiomatised and contains PA (in
fact much less suffices), then $T \nvdash \mathrm{Con}_T$.

### The idea

Proof (a) of Theorem 18.2 was an argument: "if $T$ is consistent then $G_T$ is not provable". That argument is a piece of
elementary reasoning about finite objects (proofs, codes), the kind of reasoning PA can do. If PA can carry it out internally,
then

$$
T \vdash \mathrm{Con}_T \rightarrow \neg \mathrm{Prov}_T(\ulcorner G_T \urcorner),
$$

and the right side is equivalent in $T$ to $G_T$. So if $T$ proved $\mathrm{Con}_T$, it would prove $G_T$, which (a) forbids.
That is the whole idea. The work is in checking that PA really can carry out the argument.

### The derivability conditions

The properties of $\mathrm{Prov}_T$ that are needed were isolated by Hilbert and Bernays (1939) and simplified by Martin Löb
(1955). Write $\Box \varphi$ for $\mathrm{Prov}_T(\ulcorner \varphi \urcorner)$, "$\varphi$ is provable".

- **D1.** If $T \vdash \varphi$, then $T \vdash \Box \varphi$.
- **D2.** $T \vdash \Box(\varphi \rightarrow \psi) \rightarrow (\Box \varphi \rightarrow \Box \psi)$.
- **D3.** $T \vdash \Box \varphi \rightarrow \Box \Box \varphi$.

D1 is the representability argument from (a): an actual proof gives a true $\Sigma_1$ sentence, which $T$ proves. D2 says
$T$ knows that proofs can be combined by modus ponens: glue the two proofs together and add the conclusion. D3 is the
formalised version of D1: $T$ knows that whenever something is provable, it is provably provable. D3 is the hard one. It
follows from "$T$ proves, for every $\Sigma_1$ sentence $\sigma$, that $\sigma \rightarrow \Box \sigma$", which is
$\Sigma_1$-completeness proved *inside* $T$, and its verification takes many pages of routine formalisation. It needs
induction, which is why the second theorem is stated for theories containing PA (or a suitable fragment), not just Q.

*Proof of Theorem 18.5 from D1-D3.* Write $\bot$ for $0 = 1$, so $\mathrm{Con}_T$ is $\neg \Box \bot$. The Gödel sentence
satisfies $T \vdash G \leftrightarrow \neg \Box G$. In particular

$$
T \vdash G \rightarrow (\Box G \rightarrow \bot).
$$

1. By D1, $T \vdash \Box \big( G \rightarrow (\Box G \rightarrow \bot) \big)$.
2. By D2, $T \vdash \Box G \rightarrow \Box(\Box G \rightarrow \bot)$.
3. By D2 again, $T \vdash \Box(\Box G \rightarrow \bot) \rightarrow (\Box \Box G \rightarrow \Box \bot)$. Combining with 2,
   $T \vdash \Box G \rightarrow (\Box \Box G \rightarrow \Box \bot)$.
4. By D3, $T \vdash \Box G \rightarrow \Box \Box G$. Combining with 3, $T \vdash \Box G \rightarrow \Box \bot$.
5. Taking the contrapositive, $T \vdash \neg \Box \bot \rightarrow \neg \Box G$, and by the fixed point,
   $T \vdash \mathrm{Con}_T \rightarrow G$.

If $T \vdash \mathrm{Con}_T$, then $T \vdash G$, so by Theorem 18.2(a) $T$ is inconsistent. $\square$

Step 5 is worth reading again: $T$ proves "if I am consistent, then $G$ is true". It is the first half of the first
theorem, done inside $T$.

### Consequences

- **Hilbert's programme, as first stated, cannot be carried out.** A consistency proof for PA must use some principle that
  PA cannot prove. Gentzen's 1936 proof (Chapter 17) uses transfinite induction up to $\varepsilon_0$; that is the
  unavoidable extra.
- **ZFC cannot prove that ZFC is consistent**, if it is consistent. So it cannot prove that there is a set model of ZFC. This
  is the reason "large cardinals" are new axioms rather than theorems ([Chapter 20](20-Where-Logic-Goes.md)).
- **A consistent theory can prove its own inconsistency.** If $T$ is consistent, then $T + \neg \mathrm{Con}_T$ is consistent
  too (otherwise $T$ would prove $\mathrm{Con}_T$). This theory believes there is a proof of $0 = 1$ from $T$; in its models the
  "proof" is a nonstandard number (Chapter 17). It is consistent but not sound.
- **Which formula?** The theorem depends on expressing consistency "the right way", with a provability formula that satisfies
  D1-D3. There are artificial formulas that define the same set of numbers but that $T$ can prove "consistent" (Feferman
  studied these in 1960). This is not a loophole: it just shows that the second theorem is about a natural expression of
  consistency, not about every formula that happens to define it.

### Löb's theorem

In 1952 Leon Henkin asked what happens with the sentence that says "I *am* provable". Is it provable? Löb answered in 1955.

**Theorem 18.6 (Löb).** If $T \vdash \Box \varphi \rightarrow \varphi$, then $T \vdash \varphi$.

So $T$ can only "trust" its own proofs of $\varphi$ when it proves $\varphi$ outright. Taking $\varphi = \bot$: $T \vdash \Box \bot \rightarrow \bot$
is $T \vdash \mathrm{Con}_T$, and Löb's theorem then gives $T \vdash \bot$; so Löb's theorem contains the second theorem.

*Proof.* Use the diagonal lemma to get $L$ with $T \vdash L \leftrightarrow (\Box L \rightarrow \varphi)$. Exactly as in steps 1-4
above, with $\varphi$ in place of $\bot$: from $T \vdash L \rightarrow (\Box L \rightarrow \varphi)$ we get, by D1 and D2,
$T \vdash \Box L \rightarrow (\Box \Box L \rightarrow \Box \varphi)$, and with D3, $T \vdash \Box L \rightarrow \Box \varphi$. With the
hypothesis $\Box \varphi \rightarrow \varphi$ this gives $T \vdash \Box L \rightarrow \varphi$. By the fixed point that is
$T \vdash L$. By D1, $T \vdash \Box L$, and so $T \vdash \varphi$. $\square$

For Henkin's sentence $H \leftrightarrow \Box H$, Löb's theorem gives $T \vdash H$: the sentence that says "I am provable" is
provable. The modal logic of the box in D1-D3 plus Löb's principle is called **provability logic** GL; it reappears in
[Chapter 19](19-Other-Logics.md).

## 18.4 Tarski's undefinability of truth

*Level: advanced.* Provability can be expressed in arithmetic: $\mathrm{Prov}_T$ is a formula. Can truth?

Say a formula $\mathrm{Tr}(x)$ is a **truth definition** for arithmetic if for every sentence $\varphi$,

$$
\mathbb{N} \models \mathrm{Tr}(\ulcorner \varphi \urcorner) \leftrightarrow \varphi.
$$

In words, $\mathrm{Tr}$ holds of exactly the codes of the true sentences.

**Theorem 18.7 (Tarski, 1933/1936).** There is no truth definition for arithmetic in the language of arithmetic. More
generally, if $T$ is a consistent theory containing Q, there is no formula $\mathrm{Tr}(x)$ with
$T \vdash \mathrm{Tr}(\ulcorner \varphi \urcorner) \leftrightarrow \varphi$ for every sentence $\varphi$.

*Proof.* Suppose $\mathrm{Tr}$ existed. Apply the diagonal lemma to $\neg \mathrm{Tr}(y)$ and get a sentence $L$ with
$T \vdash L \leftrightarrow \neg \mathrm{Tr}(\ulcorner L \urcorner)$. By the property of $\mathrm{Tr}$,
$T \vdash \mathrm{Tr}(\ulcorner L \urcorner) \leftrightarrow L$. Together, $T \vdash L \leftrightarrow \neg L$, so $T$ proves both
$L$ and $\neg L$: inconsistent.

For the first form, take $T = \mathrm{Th}(\mathbb{N})$, the set of all true sentences. It is consistent and contains Q, and a
truth definition would make $\mathrm{Tr}(\ulcorner \varphi \urcorner) \leftrightarrow \varphi$ true, hence a member of $T$, for
every $\varphi$. $\square$

$L$ is the liar sentence, "I am not true". In English it produces a paradox. In arithmetic it produces a theorem: the
assumption that led to it, a definable truth predicate, must be false.

**A third proof of incompleteness.** For a sound, computably axiomatised $T$, the set of theorems of $T$ is definable in
arithmetic (by $\mathrm{Prov}_T$). The set of true sentences is not definable (Tarski). So they are different sets. Since
every theorem is true, some true sentence is not a theorem. This is perhaps the shortest route to incompleteness, and it is
the one Gödel himself mentioned as a heuristic in his 1931 paper.

**What Tarski does allow.** Truth for a *restricted* class of sentences can be defined. For example, there is a $\Sigma_1$
formula $\mathrm{Tr}_{\Sigma_1}(x)$ that is a truth definition for $\Sigma_1$ sentences, and similarly for each level
$\Sigma_n$. And truth for arithmetic can be defined in a *stronger* language: in set theory, Tarski's definition of
satisfaction ([Chapter 10](10-First-Order-Logic.md)) applied to $\mathbb{N}$ defines arithmetical truth. What cannot happen is
that a language defines its own truth.

**History.** Tarski's paper on the concept of truth in formalised languages appeared in Polish in 1933 and in German in
1935-1936 (the German version was dated 1935 and published in *Studia Philosophica* in 1936). Gödel had seen the same fact in
1930-1931. The theorem is now usually credited to Tarski because he made it the centre of his theory of truth.

## 18.5 What incompleteness does and does not mean

Few theorems have been quoted more, and few have been misquoted more. Here are the facts, then the misreadings.

### What the theorems say

- **The first theorem** (with Rosser): every consistent, computably axiomatised theory that contains a small amount of
  arithmetic (Q is enough) leaves some arithmetical sentence undecided. Moreover there is a specific, explicit such sentence,
  and it has a simple form: "a certain computation never finds what it looks for" ($\Pi_1$).
- **The second theorem**: such a theory, if it contains a bit more arithmetic (enough to prove D1-D3), cannot prove the
  sentence that expresses its own consistency.
- **Tarski**: arithmetical truth is not arithmetically definable.

### What they do not say

1. **"Mathematics is inconsistent" or "nothing can be known for sure."** No. The theorems are themselves rigorous results,
   proved by ordinary mathematical means. They are about the limits of particular formal systems.
2. **"There are true statements that can never be proved."** Not as stated. Each unprovable sentence is unprovable *in a
   given theory*. $G_{\mathrm{PA}}$ is provable in ZFC; it is even provable in PA plus $\mathrm{Con}_{\mathrm{PA}}$. What the
   theorem says is that no single computably axiomatised theory captures all arithmetical truths. There is no "absolutely
   unprovable" statement in the theorem.
3. **"Gödel showed that some statements are neither true nor false."** No. In $\mathbb{N}$ every arithmetical sentence is true
   or false; $G_T$ is true (if $T$ is consistent). Independence means the axioms do not settle it, not that it has no truth
   value. (Whether statements of set theory like the continuum hypothesis have a definite truth value is a different,
   philosophical debate, described in Chapter 20.)
4. **"It contradicts Gödel's completeness theorem."** No. Completeness ([Chapter 11](11-Completeness-and-Compactness.md)): a
   sentence true in *every* model of $T$ is provable in $T$. Incompleteness: some sentence is true in the standard model but
   false in some nonstandard model of $T$. Put together: $G_T$ fails in some (nonstandard) model of $T$, and that is exactly
   why $T$ cannot prove it.
5. **"It applies to every system of rules."** No. It needs (i) enough arithmetic to represent computation and (ii) a
   computable set of axioms. Presburger arithmetic (no multiplication), the theory of real closed fields (Tarski,
   [Chapter 12](12-Model-Theory.md)) and Euclidean geometry in Tarski's first-order form are complete and decidable. And the
   set of all true sentences of arithmetic is complete, but not computably axiomatised.
6. **"The unprovable sentences are all strange self-referential tricks."** Mostly they were at first, but not any more:
   Goodstein's theorem and the Paris-Harrington theorem (Chapter 17) are natural statements unprovable in PA, and the
   continuum hypothesis is a natural statement independent of ZFC ([Chapter 7](07-Infinity-and-Cardinality.md)). On the other
   hand, almost all of ordinary mathematics is provable in ZFC, and incompleteness rarely gets in a working mathematician's
   way.
7. **"Humans can see that $G_T$ is true, so human minds are not machines."** This argument was made by J. R. Lucas (1961)
   and Roger Penrose (1989, 1994). Most logicians do not accept it: to "see" that $G_T$ is true you must know that $T$ is
   consistent, and the theorem says nothing about whether humans can know that for the theory that describes their own
   reasoning. Gödel himself drew only a cautious disjunction: either the mind is not a machine, or there are arithmetical
   problems it cannot solve. Torkel Franzén's book listed below examines these arguments carefully.
8. **"It proves something about physics, law, theology, or society."** Analogies can be suggestive, but the theorems have
   precise hypotheses (a formal language, computable axioms, arithmetic). Where these hypotheses are absent, the theorems say
   nothing.

### Why the theorems matter

They tell you three positive things. First, *truth outruns proof*: in any fixed system there is more true arithmetic than the
system captures, and you can always go further by adding axioms (consistency statements, reflection principles, large
cardinals). Second, *consistency has a price*: proving that a system is consistent needs a stronger system. Third,
*computation and provability are tied together*: undecidability of the halting problem and incompleteness are two faces of
the same diagonal argument, as Theorem 18.4 shows.

## Check yourself

??? question "1. Explain why the sentence $G_T$ cannot simply contain its own code as a numeral."
    The numeral $\overline n$ for $n$ is the string $S \cdots S0$ with $n$ copies of $S$, so it is longer than $n$. A sentence
    containing the numeral of its own code would be longer than its own code. With the prime-power coding, the code of a string
    is much larger than its length (each symbol contributes a factor at least 2), so the string would be longer than itself.
    The diagonal lemma avoids this by using the formula $\mathrm{Diag}$ to describe the code instead of writing it out.

??? question "2. Use the diagonal lemma to show there is a sentence $Z$ with $Q \vdash Z \leftrightarrow \ulcorner Z \urcorner > \overline{100}$. Is $Z$ provable?"
    Apply the lemma to $\psi(y) := \overline{100} < y$. With prime-power coding, every sentence has at least a few symbols and
    the code of any sentence exceeds 100 (for example $0 = 0$ already has code 2430, and the codes of longer strings are
    larger). So $\ulcorner Z \urcorner > 100$ is a true bounded sentence, which Q proves. By the equivalence, Q proves $Z$.

??? question "3. In the proof of Theorem 18.2(a), which property of $\mathrm{Prf}_T$ was used, and where was computable axiomatisation needed?"
    It was used that $\mathrm{Prf}_T$ *represents* the proof relation: when $p$ really codes a proof of $G_T$, $T$ proves
    $\mathrm{Prf}_T(\overline p, \ulcorner G_T \urcorner)$. Representability (Chapter 17) applies only to computable relations,
    and the proof relation is computable because the set of axioms of $T$ is computable: checking a proof means checking that
    each line is an axiom or follows by a rule.

??? question "4. Let $T$ be consistent. Show that $T + \neg G_T$ is consistent, and that it is not $\omega$-consistent."
    If $T + \neg G_T$ were inconsistent, then $T \vdash G_T$ (proof by contradiction), contradicting Theorem 18.2(a). So it is
    consistent. It proves $\neg G_T$, hence $\mathrm{Prov}_T(\ulcorner G_T \urcorner) = \exists x \, \mathrm{Prf}_T(x, \ulcorner G_T \urcorner)$.
    But $G_T$ has no $T$-proof, so for each $n$, $T$ (and hence $T + \neg G_T$) proves $\neg \mathrm{Prf}_T(\overline n, \ulcorner G_T \urcorner)$.
    That is an $\omega$-inconsistency.

??? question "5. Is $\mathrm{Con}_{\mathrm{PA}}$ true? Is it provable in ZFC?"
    It is true, since PA has a model ($\mathbb{N}$) and so is consistent (by soundness, Chapter 11). ZFC proves it: ZFC
    constructs $\mathbb{N}$, proves that it satisfies every axiom of PA, and proves the soundness theorem, so it proves that PA
    has no proof of $0 = 1$. This illustrates misreading 2: $\mathrm{Con}_{\mathrm{PA}}$ is unprovable in PA but provable in a
    stronger theory.

??? question "6. Using D1 and D2, show that $T \vdash G_T \leftrightarrow \mathrm{Con}_T$: the Gödel sentence is equivalent, in $T$, to the consistency statement."
    The direction $\mathrm{Con}_T \rightarrow G_T$ is step 5 of the proof of Theorem 18.5. For the other direction: $\bot \rightarrow G_T$
    is a logical truth, so $T$ proves it, and by D1, $T \vdash \Box(\bot \rightarrow G_T)$. By D2,
    $T \vdash \Box \bot \rightarrow \Box G_T$. Taking the contrapositive, $T \vdash \neg \Box G_T \rightarrow \neg \Box \bot$. By the fixed
    point, $G_T$ is equivalent to $\neg \Box G_T$, so $T \vdash G_T \rightarrow \mathrm{Con}_T$. So "I am unprovable" and
    "$T$ is consistent" are the same statement, as far as $T$ can tell, and the second theorem is the first theorem applied
    to this sentence.

??? question "7. Show that the set of sentences provable in PA is not computable, using Theorem 18.3."
    Suppose it were computable. Then the theory $T$ obtained as follows would be computably axiomatised, consistent and
    complete: list all sentences $\varphi_0, \varphi_1, \ldots$; go through them in order, adding $\varphi_i$ if
    $\mathrm{PA} + (\text{the sentences added so far}) + \varphi_i$ is consistent, and $\neg \varphi_i$ otherwise. Deciding
    consistency of PA plus finitely many sentences $\sigma$ reduces to deciding whether PA proves $\neg \bigwedge \sigma$, which
    we assumed computable. Each step keeps consistency, the result is complete, and its axioms can be computed. It contains
    PA, hence Q. This contradicts Theorem 18.3. So PA's theorems are not a computable set. (They are computably enumerable.)

??? question "8. Where does the proof of Tarski's theorem fail if you replace $\mathrm{Tr}$ by $\mathrm{Prov}_T$?"
    Tarski's proof needs $T \vdash \mathrm{Tr}(\ulcorner \varphi \urcorner) \leftrightarrow \varphi$ for *every* sentence. For
    provability you only get one direction for some sentences: if $T \vdash \varphi$ then $T \vdash \mathrm{Prov}_T(\ulcorner \varphi \urcorner)$
    (D1). The converse, $\mathrm{Prov}_T(\ulcorner \varphi \urcorner) \rightarrow \varphi$, is not provable in general (by Löb's
    theorem, $T$ proves it only when $T \vdash \varphi$). So the liar argument, applied to $\neg \mathrm{Prov}_T$, gives not a
    contradiction but the Gödel sentence, which is merely unprovable.

??? question "9. A friend says: 'Gödel proved that the continuum hypothesis is unprovable.' Correct the statement."
    Gödel proved in 1940 that the continuum hypothesis cannot be *refuted* in ZFC (if ZFC is consistent), by building the
    constructible universe in which it holds. Paul Cohen proved in 1963 that it cannot be *proved* in ZFC, using forcing. So CH is
    independent of ZFC (Chapter 7). Neither result follows from the incompleteness theorems: incompleteness gives some
    undecidable sentence, but which ones are undecidable must be shown case by case.

??? question "10. Show from Löb's theorem that if $T \vdash \Box \varphi \rightarrow \varphi$ and $T \vdash \Box \neg \varphi \rightarrow \neg \varphi$, then $T$ is inconsistent."
    By Löb's theorem applied to $\varphi$, $T \vdash \varphi$. Applied to $\neg \varphi$, $T \vdash \neg \varphi$. So $T$ proves
    both $\varphi$ and $\neg \varphi$.

??? question "11. Does the first incompleteness theorem hold for a theory whose axioms are computably enumerable but not computable?"
    Yes. By a trick of Craig (1953): if the axioms $\alpha_0, \alpha_1, \ldots$ are listed by a program, replace $\alpha_n$ by
    $\alpha_n \wedge \alpha_n \wedge \cdots \wedge \alpha_n$ ($n + 1$ copies). The new axiom set has the same theorems, and it
    is computable: given a sentence of this repeated form with $n + 1$ copies, run the listing for $n + 1$ steps and check.
    So the theorem applies to every theory with a computably enumerable set of axioms.

## What you learned

- The diagonal lemma: for each formula $\psi(y)$ there is a sentence $G$ with $T \vdash G \leftrightarrow \psi(\ulcorner G \urcorner)$;
  it is the arithmetic version of a quine.
- The first theorem: with $\psi = \neg \mathrm{Prov}_T$, the Gödel sentence is unprovable if $T$ is consistent and unrefutable
  if $T$ is $\omega$-consistent; Rosser's sentence needs only consistency.
- The Gödel sentence is a true $\Pi_1$ sentence; incompleteness also follows from the halting problem (for sound theories)
  and from Tarski's theorem.
- The second theorem: $T \nvdash \mathrm{Con}_T$; it follows from the derivability conditions D1-D3 by formalising the first
  theorem, and it implies that Hilbert's programme cannot work as first stated.
- Löb's theorem: $T$ proves $\Box \varphi \rightarrow \varphi$ only when it proves $\varphi$.
- Tarski: no formula of arithmetic defines arithmetical truth; the liar argument becomes a proof.
- Incompleteness is relative to a theory, needs arithmetic and computable axioms, and does not say that truth is undefined
  or that mathematics is unreliable.

**Next:** [Chapter 19](19-Other-Logics.md), which steps outside classical logic: intuitionistic, modal, many-valued and
fuzzy logics, type theory, proof assistants and the Curry-Howard correspondence.

## Further reading

- K. Gödel, "Über formal unentscheidbare Sätze der *Principia Mathematica* und verwandter Systeme I", *Monatshefte für
  Mathematik und Physik* 38, 1931; English translation with an introduction by S. C. Kleene in *Kurt Gödel: Collected Works*,
  vol. I, 1986, and in J. van Heijenoort, ed., *From Frege to Gödel*, 1967.
- J. B. Rosser, "Extensions of some theorems of Gödel and Church", *Journal of Symbolic Logic* 1, 1936.
- M. H. Löb, "Solution of a problem of Leon Henkin", *Journal of Symbolic Logic* 20, 1955.
- A. Tarski, "The concept of truth in formalized languages", in *Logic, Semantics, Metamathematics*, 1956 (translation of the
  1933 Polish and 1935-1936 German versions).
- P. Smith, *An Introduction to Gödel's Theorems*, 2nd ed., 2013; R. Smullyan, *Gödel's Incompleteness Theorems*, 1992.
- G. Boolos, *The Logic of Provability*, 1993 (provability logic, D1-D3 and Löb).
- T. Franzén, *Gödel's Theorem: An Incomplete Guide to Its Use and Abuse*, 2005 (the misreadings of 18.5, examined one by one).
- J. W. Dawson Jr., *Logical Dilemmas: The Life and Work of Kurt Gödel*, 1997 (biography and history).
- E. Nagel and J. R. Newman, *Gödel's Proof*, 1958 (a classic popular account).
- On this site: the Topics lessons [Gödel's incompleteness](../../topics/logic/level-8/04-godel-incompleteness.md),
  [The halting problem](../../topics/logic/level-8/05-halting-problem.md) and
  [Paradoxes](../../topics/logic/level-7/06-paradoxes.md); CSC148
  [Unit 5: Recursion](../../uoft/CSC148H1/unit05.md) (U of T) for self-reference in programs; the
  [Number theory book](../number-theory/index.md).
