# 3. Quantifiers

*"Every even number greater than 2 is a sum of two primes." "There is no largest prime." "For every $\varepsilon > 0$
there is a $\delta > 0$ such that ..." The logic of Chapters 1 and 2 cannot even write these down: it treats a whole
statement as one letter and cannot look inside it at the numbers it talks about. This chapter adds the two words that
mathematics uses most, "for all" and "there exists". You will learn to negate statements built from them by a
mechanical rule, see why their order changes the meaning (the difference between continuity and uniform continuity
is nothing more than that), translate between English and symbols in both directions, and learn to spot the traps.*

!!! abstract "In this chapter"

    **You will learn:**

    - predicates, domains, and the quantifiers $\forall$ ("for all") and $\exists$ ("there exists")
    - restricted quantifiers, "there is exactly one", and why statements about empty sets are vacuously true
    - how to negate any quantified statement mechanically, and why the rule is right
    - why $\forall x\, \exists y$ and $\exists y\, \forall x$ say different things, and how this separates continuity
      from uniform continuity
    - how to translate English into symbols and back, including "only", "any", "at most one" and "exactly two"
    - which quantifier laws hold, which fail, and the common traps

    **You need:** [Chapter 1](01-Statements-and-Truth.md) and [Chapter 2](02-Propositional-Logic.md), especially De
    Morgan's laws and the conditional. Section 3.3 uses absolute values and inequalities; it helps to have met limits
    ([Calculus, chapter 2](../calculus/02-Limits.md)), though everything needed is explained. For a gentler version,
    see the Topics lessons [Always, sometimes, never](../../topics/logic/level-2/01-always-sometimes-never.md),
    [Quantifiers](../../topics/logic/level-5/04-quantifiers.md) and
    [Predicate logic](../../topics/logic/level-8/01-predicate-logic.md).

    **Levels:** 3.1, 3.2 and 3.4 are beginner to intermediate; 3.3 is intermediate, with the continuity part
    advanced; 3.5 is intermediate.

## 3.1 For all, there exists

### Predicates and domains

In [Chapter 1](01-Statements-and-Truth.md) we met the open sentence "$x + 1 = 3$": not a statement, because its
truth depends on $x$. A sentence with one or more variables, which becomes a statement when the variables are given
values, is a **predicate**. We write $P(x)$ for a predicate in $x$, $Q(x, y)$ for one in two variables, and so on.

The values a variable may take form its **domain** (or **universe of discourse**). It must be fixed before a
quantified statement has a meaning: "every number has a square root" is false if "number" means "real number" ($-1$
has no real square root) and true if it means "complex number".

### The two quantifiers

**For all.** $\forall x\, P(x)$, read "for all $x$, $P(x)$", is true when $P(a)$ is true for every $a$ in the
domain, and false when there is at least one $a$ with $P(a)$ false. Such an $a$ is a **counterexample**.

**There exists.** $\exists x\, P(x)$, read "there exists $x$ such that $P(x)$" or "for some $x$, $P(x)$", is true when
$P(a)$ is true for at least one $a$ in the domain (an $a$ like this is a **witness**), and false when $P(a)$ is false
for every $a$.

The symbol $\forall$ is an upside-down A (for "all"); $\exists$ is a backwards E (for "exists"). The variable after
the quantifier is said to be **bound** by it. A bound variable is a placeholder: $\forall x\, P(x)$ and
$\forall t\, P(t)$ say exactly the same thing, just as $\sum_{k=1}^{10} k$ and $\sum_{j=1}^{10} j$ are the same
number. A variable that is not bound, like $y$ in $\forall x\, (x + y > 0)$, is **free**, and the truth of the
formula depends on its value. A formula with no free variables is a statement.
([Chapter 10](10-First-Order-Logic.md) makes all this precise.)

**Worked example 3.1.** Decide each, giving a witness or a counterexample.

1. $\forall x\, (x^2 \ge x)$, domain the integers $\mathbb{Z}$. **True.** If $x \le 0$ then $x^2 \ge 0 \ge x$. If
   $x \ge 1$ then $x^2 = x \cdot x \ge x \cdot 1 = x$. Every integer is in one of these cases.
2. The same, domain the real numbers $\mathbb{R}$. **False.** Counterexample $x = \tfrac12$: $x^2 = \tfrac14 <
   \tfrac12$. (The gap between 0 and 1, empty in $\mathbb{Z}$, is what breaks it.)
3. $\exists x\, (x^2 = 2)$, domain the rationals $\mathbb{Q}$. **False**: $\sqrt 2$ is irrational
   ([Chapter 4](04-Proofs.md) proves it), and $-\sqrt 2$ too, so no rational witness exists.
4. The same, domain $\mathbb{R}$. **True**, witness $x = \sqrt 2$.
5. $\exists n\, (n > 1 \wedge n \text{ divides } 91 \wedge n < 91)$, domain the positive integers. **True**, witness
   $n = 7$: $91 = 7 \cdot 13$. So 91 is not prime.

### Quantifiers over a finite domain

If the domain is finite, say $\{a_1, a_2, \dots, a_n\}$, then

$$
\forall x\, P(x) \equiv P(a_1) \wedge P(a_2) \wedge \dots \wedge P(a_n), \qquad
\exists x\, P(x) \equiv P(a_1) \vee P(a_2) \vee \dots \vee P(a_n).
$$

So $\forall$ is a big "and" and $\exists$ is a big "or". For an infinite domain the "and" would be infinitely long,
which no formula of Chapter 2 can be; quantifiers are exactly what lets a finite sentence speak about infinitely many
objects.

### Restricted quantifiers

Mathematics usually quantifies over part of a domain: "for every prime $p$", "for some $\varepsilon > 0$". We write
$\forall x \in S\; P(x)$ and $\exists x \in S\; P(x)$, which are shorthands:

$$
\forall x \in S\; P(x) \;\text{ means }\; \forall x\, (x \in S \to P(x)), \qquad
\exists x \in S\; P(x) \;\text{ means }\; \exists x\, (x \in S \wedge P(x)).
$$

Notice the different connectives: **"all" goes with $\to$, "some" goes with $\wedge$.** "Every prime greater than 2
is odd" says: for every $x$, *if* $x$ is a prime greater than 2, *then* $x$ is odd. "Some prime is even" says: there
is an $x$ that is prime *and* even. Section 3.5 shows what goes wrong if you mix them up.

Other common shorthands: $\forall x > 0$ for $\forall x\, (x > 0 \to \dots)$, $\exists \varepsilon > 0$ for
$\exists \varepsilon\, (\varepsilon > 0 \wedge \dots)$, and $\forall x, y$ for $\forall x\, \forall y$.

### Vacuous truth

What is the truth value of "every element of the empty set is purple", $\forall x \in \varnothing\; P(x)$? By the
definition it is $\forall x\, (x \in \varnothing \to P(x))$, and every instance has a false hypothesis, so every
instance is true (section 1.4). The statement is **vacuously true**. Equally, $\exists x \in \varnothing\; P(x)$ is
false for any $P$: there is nothing to be a witness.

This is not a technicality. "Every subset of a finite set is finite" must include the empty subset; "a set is
*bounded* if all its elements are below some number" makes the empty set bounded. If "all" statements about empty
sets were false, every theorem would need an exception.

### Exactly one

"There is exactly one $x$ with $P(x)$" is written $\exists! x\, P(x)$. It means: there is one, and any two are equal.

$$
\exists! x\, P(x) \;\text{ means }\; \exists x\, \big(P(x) \wedge \forall y\, (P(y) \to y = x)\big).
$$

**Example.** $\exists! x \in \mathbb{R}\; (2x + 3 = 7)$ is true: $x = 2$ works, and if $2y + 3 = 7$ then $y = 2$.
But $\exists! x \in \mathbb{R}\; (x^2 = 4)$ is false: $x = 2$ and $x = -2$ both work.

Proving "exactly one" always has two parts: **existence** (find one) and **uniqueness** (show any two are equal).

## 3.2 Negating quantified statements

Your friend claims "all swans are white". What do you need to show to prove them wrong? Not that all swans are
black, only that *some swan is not white*. That is the whole idea of negating a quantifier.

**Theorem 3.1 (quantifier negation laws).** For any predicate $P$ and any domain,

$$
\neg \forall x\, P(x) \equiv \exists x\, \neg P(x), \qquad \neg \exists x\, P(x) \equiv \forall x\, \neg P(x).
$$

*Proof.* $\forall x\, P(x)$ is false exactly when some $a$ in the domain has $P(a)$ false, that is, has $\neg P(a)$
true; and that is exactly when $\exists x\, \neg P(x)$ is true. So the two sides of the first law always have the same
truth value. For the second: $\exists x\, P(x)$ is false exactly when no $a$ has $P(a)$ true, that is, when every $a$
has $\neg P(a)$ true, which is when $\forall x\, \neg P(x)$ is true. $\blacksquare$

For a finite domain these are just De Morgan's laws: $\neg(P(a_1) \wedge \dots \wedge P(a_n)) \equiv \neg P(a_1)
\vee \dots \vee \neg P(a_n)$. The quantifier laws are De Morgan for infinitely many terms.

For restricted quantifiers the restriction stays where it is:

$$
\neg\, \forall x \in S\; P(x) \equiv \exists x \in S\; \neg P(x), \qquad \neg\, \exists x \in S\; P(x) \equiv
\forall x \in S\; \neg P(x).
$$

(Check the first: $\neg \forall x\, (x \in S \to P(x)) \equiv \exists x\, \neg(x \in S \to P(x)) \equiv \exists x\,
(x \in S \wedge \neg P(x))$, by the negated implication law of Chapter 2.) "Not every prime is odd" is "some prime
is not odd". "No prime is a square" is "every prime is not a square".

### The mechanical rule

To negate a statement with several quantifiers, **move the $\neg$ from left to right, flipping each quantifier it
passes ($\forall \leftrightarrow \exists$), and finally negate the predicate at the end.** Restrictions such as
$\varepsilon > 0$ or $n \ge N$ are carried along unchanged.

**Worked example 3.2.** Negate "every even number greater than 2 is a sum of two primes". Write $E$ for the set of
even numbers greater than 2 and let $p$, $q$ range over primes.

$$
\forall n \in E\; \exists p\, \exists q\; (n = p + q).
$$

Negation:

$$
\exists n \in E\; \forall p\, \forall q\; (n \ne p + q).
$$

In words: "there is an even number greater than 2 that is not the sum of any two primes". That is what a
counterexample to Goldbach's conjecture would be.

**Worked example 3.3.** A sequence $a_1, a_2, a_3, \dots$ **converges to** $L$ when

$$
\forall \varepsilon > 0\;\; \exists N\;\; \forall n \ge N\;\; |a_n - L| < \varepsilon .
$$

In words: however small a tolerance $\varepsilon$ you name, from some point $N$ on, every term is within $\varepsilon$
of $L$. ($N$ ranges over positive integers.) Negate it, and use the negation to show that $a_n = (-1)^n$ does not
converge to 1.

Moving the $\neg$ through:

$$
\exists \varepsilon > 0\;\; \forall N\;\; \exists n \ge N\;\; |a_n - L| \ge \varepsilon .
$$

In words: there is a tolerance such that, however far out you go, some later term is still at least that far from
$L$. To show $(-1)^n$ does not converge to $1$, choose $\varepsilon = 1$. Given any $N$, pick an odd $n \ge N$ (for
example $n = 2N + 1$). Then $a_n = -1$ and $|a_n - 1| = 2 \ge 1$. That proves the negation, so the sequence does not
converge to 1. Notice the shape of the proof copies the shape of the statement: we *chose* $\varepsilon$ (it was
"$\exists$"), then took $N$ *arbitrary* (it was "$\forall$"), then *chose* $n$ depending on $N$ ("$\exists$").

This last point is worth stating as a rule, because it tells you how to start any proof:

| to prove | do this |
|---|---|
| $\forall x\, P(x)$ | let $x$ be arbitrary (you do not choose it), and prove $P(x)$ |
| $\exists x\, P(x)$ | find a specific witness $x$ (you choose it, and it may depend on anything already introduced), and prove $P(x)$ |
| $\neg \forall x\, P(x)$ | find a counterexample |
| $\neg \exists x\, P(x)$ | let $x$ be arbitrary and prove $\neg P(x)$ |

**Worked example 3.4.** A function $f$ is **bounded** on a set $D$ if $\exists M\; \forall x \in D\; |f(x)| \le M$.
Negate this and show $f(x) = 1/x$ is not bounded on $(0, 1)$.

Negation: $\forall M\; \exists x \in D\; |f(x)| > M$. Let $M$ be arbitrary. We must find $x \in (0, 1)$ with
$1/x > M$. Take $x = \frac{1}{|M| + 2}$, which lies in $(0, 1)$ (it is positive and at most $\tfrac12$). Then
$1/x = |M| + 2 > M$. Since $M$ was arbitrary, $f$ is unbounded. **Check** with $M = 1000$: $x = 1/1002$ and
$f(x) = 1002 > 1000$.

## 3.3 Order of quantifiers matters

Let the domain be the natural numbers $\mathbb{N} = \{0, 1, 2, \dots\}$ and compare

$$
\forall x\, \exists y\, (y > x) \qquad \text{and} \qquad \exists y\, \forall x\, (y > x).
$$

The first says: for every number, there is a bigger one. True: given $x$, take $y = x + 1$. The second says: there is
one number bigger than every number (including itself). False: no $y$ satisfies $y > y$.

The only difference is the order. In $\forall x\, \exists y$, the $y$ is chosen *after* $x$ and may depend on it;
we could write it $y(x)$. In $\exists y\, \forall x$, one $y$ must work for every $x$ at once.

In English: "everyone has someone they admire" ($\forall x\, \exists y\; A(x, y)$) is very different from "there is
someone everyone admires" ($\exists y\, \forall x\; A(x, y)$).

**Theorem 3.2.** $\exists y\, \forall x\; Q(x, y)$ implies $\forall x\, \exists y\; Q(x, y)$, but not conversely.

*Proof.* Suppose $\exists y\, \forall x\; Q(x, y)$, and let $b$ be a witness: $Q(x, b)$ holds for every $x$. To
prove $\forall x\, \exists y\; Q(x, y)$, let $x$ be arbitrary; then $y = b$ is a witness, since $Q(x, b)$ holds. The
example above, $Q(x, y)$ = "$y > x$" on $\mathbb{N}$, shows the converse fails. $\blacksquare$

Quantifiers of the *same* kind can be swapped freely: $\forall x\, \forall y$ means the same as $\forall y\,
\forall x$ (both say $Q$ holds for every pair), and likewise for $\exists$.

A mental picture makes Theorem 3.2 concrete for a small domain. Imagine the people as dots and an arrow from $x$ to $y$ when
$x$ admires $y$. Then $\forall x\, \exists y$ says every dot has at least one arrow leaving it; $\exists y\, \forall
x$ says some single dot receives an arrow from every dot (itself included).

### Continuity and uniform continuity
*Level: advanced.*

Here is where the order of quantifiers stops being a puzzle and becomes the content of a definition. (The full story
is in [Calculus, chapter 3](../calculus/03-Continuity.md) and
[Calculus, chapter 18](../calculus/18-The-Real-Numbers.md); here we look only at the logic.)

A function $f$ defined on a set $D$ of real numbers is **continuous on $D$** if

$$
\forall a \in D\;\; \forall \varepsilon > 0\;\; \exists \delta > 0\;\; \forall x \in D\;\;
\big(|x - a| < \delta \to |f(x) - f(a)| < \varepsilon\big).
$$

It is **uniformly continuous on $D$** if

$$
\forall \varepsilon > 0\;\; \exists \delta > 0\;\; \forall a \in D\;\; \forall x \in D\;\;
\big(|x - a| < \delta \to |f(x) - f(a)| < \varepsilon\big).
$$

The ingredients are identical. The only change is that "$\forall a \in D$" has moved from before "$\exists \delta$"
to after it. In the first, $\delta$ is chosen after $a$ and may depend on both $a$ and $\varepsilon$. In the second,
$\delta$ depends only on $\varepsilon$: one $\delta$ must serve every point $a$ at once. By the reasoning of
Theorem 3.2 (an "$\exists \delta\, \forall a$" implies the corresponding "$\forall a\, \exists \delta$"), uniformly
continuous implies continuous. The converse fails, and here is the standard example.

**Worked example 3.5.** $f(x) = x^2$ is continuous on $\mathbb{R}$ but not uniformly continuous on $\mathbb{R}$. It
is uniformly continuous on $[0, 1]$.

*Continuous.* Let $a \in \mathbb{R}$ and $\varepsilon > 0$ be arbitrary. Choose

$$
\delta = \min\left(1, \frac{\varepsilon}{2|a| + 1}\right),
$$

which is positive, and depends on $a$ as well as $\varepsilon$. Let $x$ satisfy $|x - a| < \delta$. Since
$\delta \le 1$, we have $|x + a| = |(x - a) + 2a| \le |x - a| + 2|a| < 1 + 2|a|$. So

$$
|x^2 - a^2| = |x - a|\,|x + a| < \delta\,(2|a| + 1) \le \varepsilon .
$$

*Not uniformly continuous.* The negation of uniform continuity is

$$
\exists \varepsilon > 0\;\; \forall \delta > 0\;\; \exists a\;\; \exists x\;\;
\big(|x - a| < \delta \wedge |f(x) - f(a)| \ge \varepsilon\big).
$$

Choose $\varepsilon = 1$. Let $\delta > 0$ be arbitrary. Choose $a = 1/\delta$ and $x = a + \delta/2$. Then
$|x - a| = \delta / 2 < \delta$, and

$$
x^2 - a^2 = (x - a)(x + a) = \frac{\delta}{2}\left(\frac{2}{\delta} + \frac{\delta}{2}\right) = 1 + \frac{\delta^2}{4}
\ge 1 .
$$

The point $a$ was chosen *after* $\delta$, far out where the parabola is steep; that is exactly the freedom the
negation gives us.

**Check** with $\delta = 0.1$: $a = 10$, $x = 10.05$, $x^2 - a^2 = 101.0025 - 100 = 1.0025 \ge 1$.

*Uniformly continuous on $[0, 1]$.* Let $\varepsilon > 0$ and choose $\delta = \varepsilon / 2$, which does not
depend on any point. For $a, x \in [0, 1]$ with $|x - a| < \delta$, we have $|x + a| \le 2$, so
$|x^2 - a^2| = |x - a|\,|x + a| < 2\delta = \varepsilon$.

The picture shows why. Hold the tolerance $\varepsilon$ fixed (the two horizontal bands have the same height). Near
$a = 0.5$ the parabola is flat, and a wide window of $x$ values stays inside the band. Near $a = 2$ it is steep, and
the window must be much narrower. On all of $\mathbb{R}$ the windows shrink to nothing as $a$ grows, so no single
$\delta$ works; on $[0, 1]$ the steepest point is $a = 1$, and the window that works there works everywhere.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 230" role="img" aria-label="The parabola y equals x squared, with a horizontal band of height two epsilon around the value at a equals 0.5 and another around the value at a equals 2; the vertical window of x values staying in the band is wide at 0.5 and narrow at 2">
  <rect x="40" y="173.75" width="370" height="26.25" fill="#eea66f" fill-opacity="0.3"/>
  <rect x="40" y="42.5" width="370" height="35" fill="#eea66f" fill-opacity="0.3"/>
  <rect x="61.4" y="20" width="117.2" height="180" fill="#9cc9ea" fill-opacity="0.35"/>
  <rect x="340.6" y="20" width="38.8" height="180" fill="#9cc9ea" fill-opacity="0.35"/>
  <line x1="40" y1="200" x2="415" y2="200" stroke="currentColor" stroke-width="1.2"/>
  <line x1="40" y1="200" x2="40" y2="15" stroke="currentColor" stroke-width="1.2"/>
  <polyline fill="none" stroke="#7ccf9a" stroke-width="3" points="40.0,200.0 48.0,199.9 56.0,199.7 64.0,199.2 72.0,198.6 80.0,197.8 88.0,196.8 96.0,195.7 104.0,194.4 112.0,192.9 120.0,191.2 128.0,189.4 136.0,187.4 144.0,185.2 152.0,182.8 160.0,180.3 168.0,177.6 176.0,174.7 184.0,171.7 192.0,168.4 200.0,165.0 208.0,161.4 216.0,157.6 224.0,153.7 232.0,149.6 240.0,145.3 248.0,140.8 256.0,136.2 264.0,131.4 272.0,126.4 280.0,121.2 288.0,115.9 296.0,110.4 304.0,104.7 312.0,98.8 320.0,92.8 328.0,86.6 336.0,80.2 344.0,73.6 352.0,66.9 360.0,60.0 368.0,52.9 376.0,45.7 384.0,38.2 392.0,30.6"/>
  <circle cx="120" cy="191.25" r="4" fill="currentColor"/>
  <circle cx="360" cy="60" r="4" fill="currentColor"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="120" y="218">a = 0.5: δ ≈ 0.37</text>
    <text x="360" y="218">a = 2: δ ≈ 0.12</text>
    <text x="270" y="160">y = x²</text>
  </g>
  <text x="46" y="36" font-size="12" fill="currentColor">ε = 0.5 bands</text>
</svg>
</div>

(The windows drawn are the largest symmetric ones for $\varepsilon = 0.5$: $\delta = \sqrt{0.75} - 0.5 \approx 0.366$
at $a = 0.5$, and $\delta = \sqrt{4.5} - 2 \approx 0.121$ at $a = 2$.)

A theorem of Eduard Heine (1872) says that every function continuous on a closed bounded interval $[a, b]$ is
uniformly continuous there; [Calculus, chapter 18](../calculus/18-The-Real-Numbers.md) proves it. The same
quantifier swap separates **pointwise** from **uniform convergence** of a sequence of functions, which is the subject
of [Calculus, chapter 19](../calculus/19-Uniform-Convergence.md): in "$\forall x\, \forall \varepsilon\, \exists N$"
the $N$ may depend on $x$, and in "$\forall \varepsilon\, \exists N\, \forall x$" it may not.

<figure class="play" data-play="quant"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> "Everyone likes some song" against "some song is liked by everyone": tap the squares and see that swapping ∀ and ∃ changes the meaning.</figcaption></figure>

## 3.4 Translating English into symbols and back

Translation is a skill, and like any translation it needs judgement: English is ambiguous where symbols are not. The
method is always the same.

1. Decide the domain and name the predicates.
2. Find the quantifier words ("every", "all", "any", "each", "no", "some", "a", "there is", "at least one").
3. Find the logical shape of what is said about the quantified things (and, or, if, not).
4. Write it down, then **read your symbols back in plain English** and check they say what was meant.

### Worked translations

Domain: people. $S(x)$ = "$x$ is a student", $E(y)$ = "$y$ is an exam", $P(x, y)$ = "$x$ passed $y$", $L(x, y)$ =
"$x$ likes $y$". (For mixed domains, think of the domain as "people and exams" and let the predicates sort them.)

1. "Every student passed some exam."
   $\forall x\, \big(S(x) \to \exists y\, (E(y) \wedge P(x, y))\big)$. Each student may have passed a different exam.
2. "Some exam was passed by every student."
   $\exists y\, \big(E(y) \wedge \forall x\, (S(x) \to P(x, y))\big)$. One exam, passed by all. This implies 1 but
   is stronger, by Theorem 3.2.
3. "No student passed every exam."
   $\neg \exists x\, \big(S(x) \wedge \forall y\, (E(y) \to P(x, y))\big)$, which by the negation rule is
   $\forall x\, \big(S(x) \to \exists y\, (E(y) \wedge \neg P(x, y))\big)$: every student failed at least one exam.
4. "Nobody likes everybody."
   $\neg \exists x\, \forall y\; L(x, y)$, or equivalently $\forall x\, \exists y\; \neg L(x, y)$.
5. "Everybody likes somebody who does not like them."
   $\forall x\, \exists y\, \big(L(x, y) \wedge \neg L(y, x)\big)$.

### Little words that change everything

- **"Only".** "Only students passed" means: whoever passed is a student, $\forall x\, (\exists y\, P(x, y) \to
  S(x))$. It does *not* say every student passed. "Only $A$ are $B$" means "all $B$ are $A$": the order flips, just
  as "$p$ only if $q$" is $p \to q$.
- **"A" or "an".** Sometimes universal, sometimes existential. "A square is a rectangle" means every square is.
  "A square is drawn on the board" means some square is.
- **"Any".** Usually universal: "any prime greater than 2 is odd". But beware: "if any student fails, the class
  repeats" is $\exists x\, F(x) \to R$, which (by a law in section 3.5) is equivalent to $\forall x\, (F(x) \to R)$.
  Both readings agree, and "any" is the word that captures both.
- **"At least two."** $\exists x\, \exists y\, (x \ne y \wedge P(x) \wedge P(y))$.
- **"At most one."** $\forall x\, \forall y\, \big(P(x) \wedge P(y) \to x = y\big)$. (True when there are none.)
- **"Exactly one."** "At least one" and "at most one", which is the $\exists!$ of section 3.1.
- **"Exactly two."** $\exists x\, \exists y\, \big(x \ne y \wedge P(x) \wedge P(y) \wedge \forall z\, (P(z) \to z = x
  \vee z = y)\big)$.

### Mathematical translations

**Worked example 3.6.** Translate into symbols.

1. "There is no largest prime." With $p, q$ ranging over primes: $\neg \exists p\, \forall q\; (q \le p)$, or
   equivalently $\forall p\, \exists q\; (q > p)$: for every prime there is a bigger one.
2. "Between any two distinct real numbers there is a rational number."
   $\forall x \in \mathbb{R}\; \forall y \in \mathbb{R}\; \big(x < y \to \exists q \in \mathbb{Q}\; (x < q < y)\big)$.
   ("Distinct" was turned into "$x < y$" by naming the smaller one $x$; this is true, and is called the *density* of
   $\mathbb{Q}$.)
3. "The function $f$ has a maximum value on $D$." $\exists a \in D\; \forall x \in D\; f(x) \le f(a)$.
4. "$f$ is increasing on $D$." $\forall x \in D\; \forall y \in D\; (x < y \to f(x) \le f(y))$.
5. "Every positive real number has a square root."
   $\forall x \in \mathbb{R}\; \big(x > 0 \to \exists y \in \mathbb{R}\; (y^2 = x)\big)$.

### From symbols to English

Good English hides the variables. Read the formula, understand it, then say it as a person would.

**Worked example 3.7.** Domain $\mathbb{R}$. Translate and decide.

1. $\forall x\, \exists y\, (x + y = 0)$. "Every real number has a negative" (an additive inverse). True: $y = -x$.
2. $\exists y\, \forall x\, (x + y = x)$. "There is a number that leaves every number unchanged when added." True:
   $y = 0$.
3. $\forall x\, \exists y\, (xy = 1)$. "Every real number has a reciprocal." False: $x = 0$ is a counterexample.
4. $\forall x\, \big(x \ne 0 \to \exists y\, (xy = 1)\big)$. "Every nonzero real has a reciprocal." True.
5. $\exists x\, \forall y\, (xy = y)$. True, $x = 1$. And $\exists x\, \forall y\, (xy = x)$? True too, $x = 0$.
6. $\forall x\, \forall y\, \big(x^2 = y^2 \to x = y\big)$. "Two numbers with the same square are equal." False:
   $x = 1$, $y = -1$. Over the domain $[0, \infty)$ it is true.

**Worked example 3.8.** Translate with the domain $\mathbb{N}$ and decide: $\forall x\, \exists y\, (x + y = 0)$.
Over $\mathbb{N}$ this says every natural number has a natural-number negative; false, counterexample $x = 1$ (no
$y \ge 0$ gives $1 + y = 0$). The same formula was true over $\mathbb{R}$, which shows again that a formula's truth
value depends on its domain. Over $\mathbb{Z}$ it is true. In the language of algebra, the integers form a group
under addition and the natural numbers do not ([Algebra, chapter 13](../algebra/13-Groups.md)).

## 3.5 Common traps

### Trap 1: "some" with "if"

"Some prime is even." The right translation is $\exists x\, (\text{Prime}(x) \wedge \text{Even}(x))$. The wrong one,
$\exists x\, (\text{Prime}(x) \to \text{Even}(x))$, is true for a silly reason: take $x = 4$. Then
$\text{Prime}(4)$ is false, so the conditional is vacuously true, and $4$ is a witness. The wrong formula would be
true even in a world with no even primes at all. **With $\exists$, use $\wedge$.**

### Trap 2: "all" with "and"

"All primes are odd" (false, because of 2). The right translation is $\forall x\, (\text{Prime}(x) \to
\text{Odd}(x))$. The wrong one, $\forall x\, (\text{Prime}(x) \wedge \text{Odd}(x))$, says *everything* is an odd
prime, and is false for the silly reason that 4 is not prime. **With $\forall$, use $\to$.**

### Trap 3: distributing a quantifier where it does not go

Some quantifier laws hold and some look plausible but fail.

**Laws that hold:**

$$
\forall x\, \big(P(x) \wedge Q(x)\big) \equiv \forall x\, P(x) \wedge \forall x\, Q(x), \qquad
\exists x\, \big(P(x) \vee Q(x)\big) \equiv \exists x\, P(x) \vee \exists x\, Q(x).
$$

*Proof of the first.* If every $a$ has $P(a) \wedge Q(a)$, then every $a$ has $P(a)$ and every $a$ has $Q(a)$.
Conversely, if every $a$ has $P(a)$ and every $a$ has $Q(a)$, then every $a$ has both. The second follows from the
first by negating both sides and using Theorem 3.1. $\blacksquare$

**Laws that fail:** $\forall$ does not distribute over $\vee$, and $\exists$ does not distribute over $\wedge$. On
the domain $\mathbb{Z}$:

- $\forall x\, (\text{Even}(x) \vee \text{Odd}(x))$ is true, but $\forall x\, \text{Even}(x) \vee \forall x\,
  \text{Odd}(x)$ is false (not all integers are even, and not all are odd).
- $\exists x\, \text{Even}(x) \wedge \exists x\, \text{Odd}(x)$ is true, but $\exists x\, (\text{Even}(x) \wedge
  \text{Odd}(x))$ is false.

Only one direction survives in each: $\forall x\, P(x) \vee \forall x\, Q(x)$ implies $\forall x\, (P(x) \vee
Q(x))$, and $\exists x\, (P(x) \wedge Q(x))$ implies $\exists x\, P(x) \wedge \exists x\, Q(x)$.

### Trap 4: the same letter is not the same thing

In $\exists x\, P(x) \wedge \exists x\, Q(x)$ the two $x$'s are bound by different quantifiers and need not be the
same object; it would be clearer to write $\exists x\, P(x) \wedge \exists y\, Q(y)$. "There is an even number and
there is an odd number" does not claim one number is both. In a long proof, when you have used "there exists an
$x$" once, give the next object a new name.

### Trap 5: hidden dependence

"For every $\varepsilon > 0$ there is a $\delta > 0$" allows $\delta$ to depend on $\varepsilon$ (and on everything
quantified before it). Some books write $\delta(\varepsilon)$ to make this visible. The opposite mistake is worse: in
a proof of "$\forall a\, \exists \delta$" you may let $\delta$ depend on $a$, but in a proof of "$\exists \delta\,
\forall a$" you may not, and a proof that silently does so proves only the weaker statement. Example 3.5 is exactly
this.

### Trap 6: quantifiers and conditionals with a fixed conclusion

If $R$ does not mention $x$, then

$$
\forall x\, \big(P(x) \to R\big) \equiv \big(\exists x\, P(x)\big) \to R, \qquad
\exists x\, \big(P(x) \to R\big) \equiv \big(\forall x\, P(x)\big) \to R \;\;\text{(on a nonempty domain)}.
$$

The quantifier changes when it moves out of the hypothesis. The first explains the "any" example of 3.4: "for every
student, if that student fails, the class repeats" is the same as "if some student fails, the class repeats".
*Proof of the first:* the left side fails exactly when some $a$ has $P(a)$ true and $R$ false; the right side fails
exactly when $\exists x\, P(x)$ is true and $R$ is false; these are the same situation. The second is an exercise.

### Trap 7: "not all" versus "all not"

"All that glitters is not gold" is usually meant as "not all that glitters is gold", $\neg \forall x\, (G(x) \to
\text{Au}(x))$, that is, some glittering things are not gold. Read literally it says $\forall x\, (G(x) \to \neg
\text{Au}(x))$: nothing glittering is gold, which is false of gold itself. When writing mathematics, never put "not"
next to "all"; write "not every" or "no".

### Trap 8: the empty domain and "for all" proofs

To prove $\forall x \in S\; P(x)$ you prove $P(x)$ for an arbitrary $x \in S$; this is fine even if $S$ turns out to
be empty. But do not then conclude $\exists x \in S\; P(x)$: that needs $S$ to have an element. "All of my
counterexamples have been checked" is true if you have none.

## A short history thread

Aristotle's syllogistic (4th century BC) was a logic of four sentence forms: "all $S$ are $P$", "no $S$ is $P$",
"some $S$ is $P$" and "some $S$ is not $P$". He already knew that "all $S$ are $P$" and "some $S$ is not $P$"
contradict each other (they appear at opposite corners of the later "square of opposition"), which is Theorem 3.1 in
a special case. What the syllogism could not do was nest quantifiers: "every number has a larger one" has the shape
$\forall\, \exists$, which no syllogism can express.

Nested quantifiers arrived in 1879, in **Gottlob Frege**'s *Begriffsschrift* ("concept-script"), which also
introduced the idea of variables bound by quantifiers. Independently, **Charles Sanders Peirce** and his student
**O. H. Mitchell** developed quantifiers in the early 1880s; Peirce's 1885 paper wrote them as $\Pi$ (for "all",
a product of many "and"s) and $\Sigma$ (for "some", a sum of many "or"s), exactly the finite-domain picture of 3.1.
The symbol $\exists$ was introduced by **Giuseppe Peano** in 1897, and $\forall$ by **Gerhard Gentzen** in 1935.

Meanwhile analysis was learning the same lesson the hard way. **Bernard Bolzano** (1817) and **Augustin-Louis
Cauchy** (1821) gave definitions of continuity in words; **Karl Weierstrass**, in his Berlin lectures from the
1860s on, insisted on the $\varepsilon$-$\delta$ form, with its quantifiers in a fixed order. Several published
"theorems" of the time were wrong because they confused pointwise with uniform convergence, that is, because a
$\delta$ or an $N$ was silently allowed to depend on a point. **Eduard Heine**'s 1872 paper made uniform continuity a
named concept.

## Check yourself

??? question "1. Decide each over the domain given: (a) $\forall x\, (x^2 > 0)$ over $\mathbb{R}$; (b) $\exists x\, (x^2 < x)$ over $\mathbb{Z}$; (c) $\exists x\, (x^2 < x)$ over $\mathbb{R}$; (d) $\forall x\, \exists y\, (y^2 = x)$ over $\mathbb{C}$."

    (a) False: $x = 0$ gives $0 > 0$, false. (b) False: worked example 3.1 showed $x^2 \ge x$ for every integer.
    (c) True: $x = \tfrac12$. (d) True: every complex number has a complex square root (write $x = r e^{i\theta}$ and
    take $y = \sqrt r\, e^{i\theta/2}$).

??? question "2. Negate, then simplify so that no $\neg$ stands in front of a quantifier: (a) $\forall x\, \exists y\, (x < y \wedge y < x + 1)$; (b) $\exists x\, \forall y\, (y \ne x \to y > x)$."

    (a) $\exists x\, \forall y\, \neg(x < y \wedge y < x + 1) \equiv \exists x\, \forall y\, (y \le x \vee y \ge x +
    1)$: some $x$ has no $y$ strictly between $x$ and $x + 1$. (Over $\mathbb{Z}$ this negation is true; over
    $\mathbb{R}$ the original is true.)
    (b) $\forall x\, \exists y\, \neg(y \ne x \to y > x) \equiv \forall x\, \exists y\, (y \ne x \wedge y \le x)$:
    every $x$ has some other $y$ not bigger than it. The original says "there is a least element"; over $\mathbb{N}$
    it is true ($x = 0$), and over $\mathbb{Z}$ the negation is true.

??? question "3. Write in symbols, then negate in plain English: 'Every student in the class has a friend in the class who scored higher.'"

    Domain: students in the class, $F(x, y)$ = "$x$ and $y$ are friends", $s(x)$ = score. Statement:
    $\forall x\, \exists y\, (F(x, y) \wedge s(y) > s(x))$. Negation: $\exists x\, \forall y\, (\neg F(x, y) \vee
    s(y) \le s(x))$: "some student has no friend in the class who scored higher." (In a finite class the statement
    itself must be false: a student with the top score has nobody higher.)

??? question "4. The domain is $\{1, 2, 3\}$ and $Q(x, y)$ is true exactly for the pairs $(1, 2)$, $(2, 3)$, $(3, 1)$. Decide $\forall x\, \exists y\; Q(x, y)$, $\exists y\, \forall x\; Q(x, y)$, $\exists x\, \forall y\; \neg Q(x, y)$."

    $\forall x\, \exists y\; Q(x, y)$: 1 has 2, 2 has 3, 3 has 1. True. $\exists y\, \forall x\; Q(x, y)$: we need a
    $y$ with $Q(1, y)$, $Q(2, y)$, $Q(3, y)$; but each $x$ is paired with only one $y$, all different, so no. False.
    $\exists x\, \forall y\; \neg Q(x, y)$: this says some $x$ is paired with nothing; it is the negation of the
    first, so false.

??? question "5. Translate: (a) 'Only the brave deserve the fair.' (b) 'There is exactly one even prime.' (c) 'Every integer greater than 1 has a prime divisor.'"

    (a) Domain people, $B(x)$ = brave, $D(x)$ = deserves the fair: $\forall x\, (D(x) \to B(x))$. (b) Domain
    $\mathbb{N}$: $\exists x\, \big(\text{Even}(x) \wedge \text{Prime}(x) \wedge \forall y\, (\text{Even}(y) \wedge
    \text{Prime}(y) \to y = x)\big)$; true, with $x = 2$. (c) $\forall n \in \mathbb{Z}\, \big(n > 1 \to \exists p\,
    (\text{Prime}(p) \wedge p \mid n)\big)$; true, as Chapter 4 proves.

??? question "6. Prove that $f(x) = 3x + 1$ is uniformly continuous on $\mathbb{R}$."

    Let $\varepsilon > 0$ and choose $\delta = \varepsilon / 3$. For any $a, x$ with $|x - a| < \delta$:
    $|f(x) - f(a)| = |3x - 3a| = 3|x - a| < 3\delta = \varepsilon$. The $\delta$ depends only on $\varepsilon$, as
    uniform continuity requires.

??? question "7. Prove that $f(x) = 1/x$ is continuous on $(0, 1)$ but not uniformly continuous there. (For continuity it is enough to show you can choose $\delta = \min(a/2, a^2\varepsilon/2)$.)"

    *Continuous.* Let $a \in (0, 1)$, $\varepsilon > 0$, $\delta = \min(a/2, a^2\varepsilon/2)$. If
    $|x - a| < \delta$ then $x > a - a/2 = a/2$, so $|1/x - 1/a| = |a - x|/(xa) < \delta / (a^2/2) \le \varepsilon$.

    *Not uniformly.* Choose $\varepsilon = 1$. Given any $\delta > 0$, let $a = \min(\delta, \tfrac12)$ and
    $x = a/2$. Both lie in $(0, 1)$, $|x - a| = a/2 < \delta$, and $|1/x - 1/a| = 2/a - 1/a = 1/a \ge 2 \ge 1$.
    (Again $a$ was chosen after $\delta$, near 0 where the graph is steep.)

??? question "8. Using the negation of the definition of convergence, prove that $a_n = (-1)^n$ converges to no number $L$."

    We must show $\forall L\; \exists \varepsilon > 0\; \forall N\; \exists n \ge N\; |a_n - L| \ge \varepsilon$. Let
    $L$ be arbitrary and choose $\varepsilon = 1$. By the triangle inequality, $|1 - L| + |{-1} - L| \ge |1 - (-1)| =
    2$, so at least one of $|1 - L|$, $|{-1} - L|$ is at least 1. If it is $|1 - L|$, then for any $N$ take
    $n = 2N$ (even, at least $N$): $|a_n - L| = |1 - L| \ge 1$. Otherwise take $n = 2N + 1$. Either way the
    negation holds.

??? question "9. Which of these are true for every predicate $P$, $Q$ on every nonempty domain? (a) $\exists x\, (P(x) \wedge Q(x)) \to \exists x\, P(x)$; (b) $\forall x\, (P(x) \vee Q(x)) \to (\forall x\, P(x) \vee \exists x\, Q(x))$; (c) $(\exists x\, P(x) \wedge \exists x\, Q(x)) \to \exists x\, (P(x) \wedge Q(x))$."

    (a) True: a witness for the left is a witness for $P$. (b) True: if $\forall x\, P(x)$ fails, some $a$ has
    $P(a)$ false; then $P(a) \vee Q(a)$ forces $Q(a)$, so $\exists x\, Q(x)$. (c) False: on $\mathbb{Z}$ with
    Even and Odd, the hypothesis is true and the conclusion false.

??? question "10. Prove the second law of Trap 6: on a nonempty domain, if $R$ does not mention $x$, then $\exists x\, (P(x) \to R) \equiv (\forall x\, P(x)) \to R$. Where is 'nonempty' used?"

    $\exists x\, (P(x) \to R) \equiv \exists x\, (\neg P(x) \vee R) \equiv \exists x\, \neg P(x) \vee \exists x\, R$
    (since $\exists$ distributes over $\vee$). On a nonempty domain $\exists x\, R \equiv R$, because $R$ does not
    depend on $x$ and there is at least one $x$. So we get $\exists x\, \neg P(x) \vee R \equiv \neg \forall x\, P(x)
    \vee R \equiv (\forall x\, P(x)) \to R$. On the empty domain the left side is false (no witness) while the right
    side is true ($\forall x\, P(x)$ is vacuously true, so if $R$ is true the conditional is true); the step
    $\exists x\, R \equiv R$ is where nonemptiness is used.

??? question "11. Swap the first two quantifiers in the definition of convergence: what does $\exists N\; \forall \varepsilon > 0\; \forall n \ge N\; |a_n - L| < \varepsilon$ say about the sequence?"

    For $n \ge N$, the number $|a_n - L|$ is less than every positive $\varepsilon$, so it is not positive; it is 0.
    So the sequence is **eventually constant** and equal to $L$: $a_n = L$ for all $n \ge N$. This implies
    convergence to $L$, but is far stronger; $a_n = 1/n$ converges to 0 without ever being 0.

??? question "12. Translate 'there are exactly two solutions of $x^2 = 4$ in $\mathbb{R}$' into symbols and prove it."

    $\exists x\, \exists y\, \big(x \ne y \wedge x^2 = 4 \wedge y^2 = 4 \wedge \forall z\, (z^2 = 4 \to z = x \vee z
    = y)\big)$. Proof: take $x = 2$, $y = -2$; they differ and both square to 4. If $z^2 = 4$ then $(z - 2)(z + 2) =
    z^2 - 4 = 0$, so $z = 2$ or $z = -2$, since a product of real numbers is 0 only if a factor is 0.

## What you learned

- A predicate becomes a statement when its variables are given values or bound by quantifiers; the domain must be
  fixed, and truth can change with it.
- $\forall x\, P(x)$ is true when every element satisfies $P$; $\exists x\, P(x)$ when at least one does. Over a
  finite domain they are a big "and" and a big "or".
- "All" goes with $\to$, "some" goes with $\wedge$; statements about all elements of the empty set are vacuously true.
- Negate by moving $\neg$ inward and flipping each quantifier: $\neg \forall \equiv \exists \neg$, $\neg \exists
  \equiv \forall \neg$.
- $\exists y\, \forall x$ implies $\forall x\, \exists y$ but not conversely; uniform continuity is continuity with
  "$\exists \delta$" moved in front of "$\forall a$".
- $\forall$ distributes over $\wedge$ and $\exists$ over $\vee$, but not the other way round; reading your symbols
  back in English catches most translation errors.

**Next:** [Chapter 4](04-Proofs.md) turns all this into the craft of proof: direct proof, contrapositive,
contradiction, cases and induction, with the classic proofs that $\sqrt 2$ is irrational and that the primes never
run out.

## Further reading

- Daniel J. Velleman, *How to Prove It: A Structured Approach*, 3rd edition, 2019, chapter 2 ("Quantificational
  logic") and chapter 3 (how quantifiers shape proofs).
- Richard Hammack, *Book of Proof*, 3rd edition, 2018, chapter 2, sections on quantifiers and their negation.
- Michael Spivak, *Calculus*, 4th edition, 2008, chapters 5 and 6 (limits and continuity) and the appendix on
  uniform continuity: quantifiers in use.
- Herbert B. Enderton, *A Mathematical Introduction to Logic*, 2nd edition, 2001, chapter 2 (first-order logic).
- Gottlob Frege, *Begriffsschrift*, 1879; English translation in Jean van Heijenoort (ed.), *From Frege to Gödel: A
  Source Book in Mathematical Logic, 1879-1931*, 1967.
- Patrick Suppes, *Introduction to Logic*, 1957, chapters 3 and 4: translating English with quantifiers.
- On this site: the Topics lessons [Quantifiers](../../topics/logic/level-5/04-quantifiers.md) and
  [Predicate logic](../../topics/logic/level-8/01-predicate-logic.md); the U of T guides
  [MAT137 Unit 1: Logic, Sets & Proofs](../../uoft/MAT137/unit01.md),
  [MAT137 Unit 2: Limits & Continuity](../../uoft/MAT137/unit02.md) and
  [MAT158H1 Unit 3: Limits](../../uoft/MAT158H1/unit03.md); the books
  [Calculus, chapter 2](../calculus/02-Limits.md), [chapter 3](../calculus/03-Continuity.md),
  [chapter 18](../calculus/18-The-Real-Numbers.md) and [chapter 19](../calculus/19-Uniform-Convergence.md).
