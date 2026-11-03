# 18. The real numbers

*Every theorem in this book so far has leaned on a few facts we took on trust: a continuous function that is negative at one
end and positive at the other crosses zero, a continuous function on a closed interval has a largest value, an increasing
bounded sequence settles down. None of these is true for the rational numbers alone. So what exactly is a real number, and
which property of the reals makes calculus work? In this chapter you find the gap in the rationals, state the one axiom that
fills it (every bounded set has a least upper bound), see two ways to build numbers that obey it, and then finally prove the
theorems that Chapters 3 and 8 had to postpone. At the end you meet a surprise: there are more real numbers than there are
fractions, in a precise sense.*

!!! abstract "In this chapter"
    **You will learn:**

    - why the rational numbers have gaps, and why calculus cannot live with them
    - the least upper bound axiom (completeness), with supremum and infimum explained
    - Dedekind cuts and Cauchy sequences: two ways to build the real numbers from the rationals
    - the Archimedean property and the density of the rationals and irrationals
    - the Bolzano-Weierstrass theorem, with a full proof
    - full proofs of the intermediate value theorem and the extreme value theorem
    - uniform continuity and the Heine-Cantor theorem, and why continuous functions are integrable
    - countable and uncountable sets, and Cantor's diagonal argument

    **You need:** [Chapter 2](02-Limits.md) (epsilon-delta limits), [Chapter 3](03-Continuity.md) (where the
    intermediate and extreme value theorems were stated), [Chapter 8](08-The-Integral.md) (upper and lower sums) and
    [Chapter 12](12-Sequences-and-Series.md) (sequences). A gentler start on irrational numbers is the Topics lesson
    [Why the square root of 2 is irrational](../../topics/numbers/level-6/03-root-two-irrational.md), and on sizes of
    infinity the lesson [Countable sets](../../topics/infinity/level-6/01-countable-sets.md).

    **Levels:** 18.1 and 18.4 are intermediate; 18.2, 18.3, 18.5, 18.6 and 18.8 are advanced; 18.7 is advanced with an
    expert remark at the end.

## 18.1 What is a real number?

Start with a question a twelve-year-old could ask. On a number line marked with all the fractions, is there a point whose
square is 2?

The Greeks knew the answer is no, at least among fractions. Suppose $\sqrt{2} = p/q$ with $p$ and $q$ whole numbers and the
fraction in lowest terms. Then $p^2 = 2q^2$, so $p^2$ is even, so $p$ is even (an odd number squared is odd). Write
$p = 2r$. Then $4r^2 = 2q^2$, so $q^2 = 2r^2$ and $q$ is even too. Both are even, contradicting "lowest terms". So no
fraction squares to 2.

That might seem a curiosity, but it breaks calculus. Look at the function $f(x) = x^2 - 2$ on the interval $[1, 2]$. It is
negative at 1 and positive at 2, and it is as continuous as a function can be. If our numbers were only the fractions,
$f$ would never be zero: it would jump from negative to positive without crossing. The intermediate value theorem
([Chapter 3](03-Continuity.md)) would be false.

The same gap breaks other theorems. The sequence

$$
1,\ 1.4,\ 1.41,\ 1.414,\ 1.4142,\ \ldots
$$

of decimal approximations to $\sqrt 2$ is made of fractions, it is increasing, and it is bounded above by 2. In the
rationals it has no limit. So "an increasing bounded sequence converges" would be false too. We could go on: every one
of the big theorems of calculus fails for the rationals.

Here is the gap seen from a different angle, which will matter in 18.2. Let

$$
A = \{ q \in \mathbb{Q} : q \le 0 \text{ or } q^2 < 2 \}.
$$

(Read $\mathbb{Q}$ as "the rational numbers", and $\in$ as "belongs to".) The set $A$ is bounded above: 2 is bigger than
every member. Is there a *smallest* rational number that is bigger than or equal to everything in $A$?

**Claim.** No rational number $p$ is a least upper bound of $A$.

*Proof.* For a rational $p > 0$, set

$$
q = p - \frac{p^2 - 2}{p + 2} = \frac{2p + 2}{p + 2}.
$$

A little algebra gives

$$
q^2 - 2 = \frac{(2p+2)^2 - 2(p+2)^2}{(p+2)^2} = \frac{2(p^2 - 2)}{(p + 2)^2}.
$$

So $q^2 - 2$ has the same sign as $p^2 - 2$. Now:

- If $p^2 < 2$, then $q > p$ (we subtracted a negative number) and $q^2 < 2$, so $q$ is a member of $A$ bigger than $p$.
  So $p$ is not an upper bound at all.
- If $p^2 > 2$, then $q < p$ and $q^2 > 2$, so $q$ is an upper bound of $A$ smaller than $p$. So $p$ is not the least.

And $p^2 = 2$ is impossible. A non-positive $p$ is not an upper bound since $1 \in A$. $\square$

**Example.** Take $p = 1$. Then $q = 4/3$ and $q^2 = 16/9 < 2$. Take $p = 3/2$. Then $q = 5/(7/2) = 10/7$ and
$q^2 = 100/49 \approx 2.04 > 2$. *Check:* $10/7 < 3/2$ and both squares are above 2, as the claim says.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 120" role="img" aria-label="A number line from 0 to 2. The rationals below the square root of 2 are drawn in orange, those above in blue, and at the square root of 2 there is an empty circle: the gap.">
  <line x1="20" y1="60" x2="320" y2="60" stroke="currentColor" stroke-width="1"/>
  <line x1="20" y1="60" x2="227" y2="60" stroke="#eea66f" stroke-width="6"/>
  <line x1="237" y1="60" x2="320" y2="60" stroke="#9cc9ea" stroke-width="6"/>
  <circle cx="232" cy="60" r="5" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <g stroke="currentColor" stroke-width="1">
    <line x1="20" y1="52" x2="20" y2="68"/><line x1="170" y1="52" x2="170" y2="68"/><line x1="320" y1="52" x2="320" y2="68"/>
  </g>
  <g fill="currentColor" font-size="12" text-anchor="middle">
    <text x="20" y="86">0</text><text x="170" y="86">1</text><text x="320" y="86">2</text>
    <text x="232" y="40">√2 ?</text>
    <text x="110" y="108">q² &lt; 2 (the set A)</text>
    <text x="280" y="108">q² &gt; 2</text>
  </g>
</svg>
</div>

So the rational line has a hole exactly where $\sqrt 2$ should be, and the hole shows itself as a bounded set with no least
upper bound. The real numbers are what you get by insisting that there be no such holes.

What, then, *is* a real number? There are three honest answers, and mathematicians use all three.

1. **Axiomatic.** The real numbers are a set with addition, multiplication and an order, obeying the usual rules of
   arithmetic (a "complete ordered field"), plus one extra axiom: completeness. We only ever use the axioms. This is the
   view of 18.2.
2. **Constructive.** Starting from the rationals, build the reals as certain sets of rationals (Dedekind cuts) or as
   classes of sequences of rationals (Cauchy sequences), and *prove* the axioms. This is 18.3.
3. **Decimal.** A real number is an infinite decimal. This is the school answer, and it is fine, but it is awkward for
   proofs: adding two infinite decimals needs carrying from infinitely far to the right, and $0.999\ldots = 1.000\ldots$
   means two decimals can name the same number.

It is a theorem (proved in the books in the Further reading) that any two complete ordered fields are the same up to
renaming: there is exactly one real number system. So the three answers describe the same object.

## 18.2 Completeness: the least upper bound axiom

*Level: advanced.* First some words.

A set $S$ of real numbers is **bounded above** if there is a number $M$ with $s \le M$ for every $s \in S$. Such an $M$ is
an **upper bound** of $S$. A number $L$ is a **least upper bound**, or **supremum**, of $S$, written $L = \sup S$, if

1. $L$ is an upper bound of $S$, and
2. no smaller number is an upper bound: if $M$ is any upper bound, then $L \le M$.

Bounded below, lower bound, **greatest lower bound** and **infimum** ($\inf S$) are defined the same way with the
inequalities turned round.

A supremum, if it exists, is unique: if $L$ and $L'$ are both least upper bounds then $L \le L'$ and $L' \le L$.

**The completeness axiom (least upper bound property).** Every non-empty set of real numbers that is bounded above has a
supremum in $\mathbb{R}$.

That is the whole difference between $\mathbb{Q}$ and $\mathbb{R}$. The set $A$ of 18.1 has supremum $\sqrt 2$ in the
reals, and no supremum in the rationals.

The supremum does not have to belong to the set. Some examples:

- $S = \{1, 2, 3\}$: $\sup S = 3$, a member, and then it is also called the **maximum**.
- $S = (0, 1) = \{x : 0 < x < 1\}$: $\sup S = 1$, not a member; $\inf S = 0$, not a member.
- $S = \{1 - 1/n : n = 1, 2, 3, \ldots\} = \{0, 1/2, 2/3, 3/4, \ldots\}$: $\inf S = 0$ (a member) and $\sup S = 1$.

Let us prove the last one properly, because the style of argument is used all through analysis. Every element $1 - 1/n$ is
less than 1, so 1 is an upper bound. Is any smaller number $M < 1$ an upper bound? If $M < 1$, choose $n$ with
$1/n < 1 - M$ (possible by the Archimedean property, 18.4). Then $1 - 1/n > M$, so $M$ is not an upper bound. So 1 is the
least.

The pattern is worth stating as a tool.

**The epsilon test for a supremum.** An upper bound $L$ of $S$ is the supremum if and only if for every $\varepsilon > 0$
there is some $s \in S$ with $s > L - \varepsilon$.

*Proof.* If $L = \sup S$ and $\varepsilon > 0$, then $L - \varepsilon < L$ is not an upper bound, so some $s \in S$
exceeds it. Conversely, if the condition holds and $M < L$, take $\varepsilon = L - M$: some $s$ exceeds $M$, so $M$ is not
an upper bound. $\square$

**Infima come free.** If $S$ is non-empty and bounded below, then $-S = \{-s : s \in S\}$ is bounded above, and
$\inf S = -\sup(-S)$. So we never need a separate axiom for infima.

### The first consequence: monotone sequences converge

A sequence $(a_n)$ is **increasing** if $a_1 \le a_2 \le a_3 \le \cdots$ and **bounded above** if the set of its terms is.

**Monotone convergence theorem.** An increasing sequence that is bounded above converges, and its limit is the supremum of
its terms. (Likewise a decreasing sequence bounded below converges to its infimum.)

*Proof.* Let $L = \sup\{a_n\}$, which exists by completeness. Given $\varepsilon > 0$, the epsilon test gives an $N$ with
$a_N > L - \varepsilon$. For every $n \ge N$, being increasing gives $a_n \ge a_N > L - \varepsilon$, and being bounded by
$L$ gives $a_n \le L$. So $|a_n - L| < \varepsilon$ for all $n \ge N$. That is the definition of $a_n \to L$. $\square$

[Chapter 12](12-Sequences-and-Series.md) used this theorem freely; now you have seen that it is exactly as strong as the
completeness axiom. (In fact the two are equivalent: you can derive the least upper bound property from monotone
convergence plus the Archimedean property.)

**Example: the number $e$.** The sequence $a_n = (1 + 1/n)^n$ is increasing and bounded above by 3 (both facts can be
proved from the binomial theorem). So it converges, and its limit is what we called $e$ in
[Chapter 5](05-The-Chain-Rule-and-Special-Functions.md). Without completeness, $e$ would not exist.

### The nested interval property

**Nested interval theorem.** Suppose $[a_1, b_1] \supseteq [a_2, b_2] \supseteq [a_3, b_3] \supseteq \cdots$ are closed
bounded intervals, each inside the one before. Then there is at least one number in all of them. If also
$b_n - a_n \to 0$, there is exactly one.

*Proof.* The left ends $a_n$ increase and are all at most $b_1$; the right ends decrease. In fact every $a_m \le b_n$ for
all $m, n$ (both lie in the smaller of the two intervals). Let $x = \sup\{a_n\}$. Then $a_n \le x$ for all $n$, and each
$b_n$ is an upper bound of the $a$'s, so $x \le b_n$. So $x$ is in every interval. If two numbers $x < y$ were in all of
them, then $b_n - a_n \ge y - x > 0$ for all $n$, which cannot happen if the lengths go to zero. $\square$

This is the property behind the bisection method of [Chapter 3](03-Continuity.md): halve, keep the half where the sign
changes, and the nested intervals close in on a single number. In the rationals the method still runs, but the number it
closes in on may not exist.

!!! note "Try it in Python"
    Bisection for $\sqrt 2$ with exact fractions. Each step keeps the half on which $x^2 - 2$ changes sign.

    ```python
    from fractions import Fraction as F
    a, b = F(1), F(2)
    for step in range(5):
        m = (a + b) / 2
        if m * m < 2:
            a = m
        else:
            b = m
        print(a, b, float(a), float(b))
    # last line: 45/32 23/16 1.40625 1.4375
    ```

    Every interval contains a rational, yet the one point common to all of them, $\sqrt 2 = 1.41421\ldots$, is not rational.

## 18.3 Dedekind cuts and Cauchy sequences

*Level: advanced.* An axiom says what we want; a construction shows we can have it. If we can build, out of the rationals
alone, a system obeying all the field and order axioms plus completeness, then the axioms are consistent (as consistent as
the rationals are). Here are the two classical constructions. Doing either one in full takes a long, careful chapter of
routine checks (Rudin's *Principles* gives the cut construction in an appendix of about ten pages); we give the ideas and
the one check that matters most, completeness.

### Dedekind cuts

Richard Dedekind's idea, published in 1872, is to identify a real number with the set of rationals below it. In 18.1 the
gap at $\sqrt 2$ showed itself as a split of the rationals into a lower set $A$ and an upper set. Dedekind's bold step is to
say that the split itself *is* the number.

**Definition.** A **cut** is a set $\alpha$ of rational numbers such that

1. $\alpha$ is not empty and is not all of $\mathbb{Q}$;
2. it is closed downwards: if $p \in \alpha$ and $q < p$ is rational, then $q \in \alpha$;
3. it has no largest element.

The rational number $r$ becomes the cut $r^* = \{q \in \mathbb{Q} : q < r\}$. The number $\sqrt 2$ is the cut $A$ of 18.1
(check the three conditions: $A$ contains 1, misses 2, is closed downwards, and the claim in 18.1 showed it has no largest
element).

**Order.** Say $\alpha \le \beta$ when $\alpha \subseteq \beta$: a smaller number has fewer rationals below it.

**Completeness, proved.** Let $\mathcal{S}$ be a non-empty set of cuts, all contained in some cut $\beta$. Let $\gamma$ be
the union of all the cuts in $\mathcal{S}$. Then:

- $\gamma$ is not empty (it contains a non-empty cut) and is not all of $\mathbb{Q}$ (it lies inside $\beta$, which is not).
- It is closed downwards: if $p \in \gamma$ then $p \in \alpha$ for some $\alpha \in \mathcal{S}$, so every $q < p$ is in
  $\alpha$ and hence in $\gamma$.
- It has no largest element: if $p \in \gamma$, then $p \in \alpha$ for some $\alpha$, and $\alpha$ contains a larger
  rational, which is also in $\gamma$.

So $\gamma$ is a cut. It contains every $\alpha \in \mathcal{S}$, so it is an upper bound. If $\delta$ is any upper bound,
then $\delta$ contains every $\alpha$, so it contains their union: $\gamma \le \delta$. So $\gamma = \sup \mathcal{S}$.
$\square$

That is the reason cuts are pleasant: the supremum is simply the union. The work is in arithmetic. Addition is easy,
$\alpha + \beta = \{p + q : p \in \alpha, q \in \beta\}$. Multiplication is fiddly because multiplying by a negative number
reverses inequalities; one defines it first for positive cuts and then extends by sign rules. Then one checks, one by one,
the field axioms. None of this is deep, all of it is careful.

### Cauchy sequences

The second construction, due independently to Charles Méray (1869) and Georg Cantor (1872), builds a real number from a
sequence of rationals that "ought to converge".

A sequence $(a_n)$ is **Cauchy** if its terms eventually stay close to *each other*: for every $\varepsilon > 0$ there is
an $N$ such that $|a_m - a_n| < \varepsilon$ for all $m, n \ge N$. The definition mentions no limit, so it makes sense in
the rationals even when the limit we want is missing.

**Example.** Newton's method for $x^2 = 2$, starting at 1, gives the rationals

$$
1,\ \tfrac{3}{2},\ \tfrac{17}{12},\ \tfrac{577}{408},\ \tfrac{665857}{470832},\ \ldots
$$

with each term $a_{n+1} = \tfrac{1}{2}(a_n + 2/a_n)$. The squares are $1, 2.25, 2.0069\ldots, 2.000006\ldots$: the terms
crowd together, so the sequence is Cauchy, but no rational is its limit.

**Construction.** Say two Cauchy sequences of rationals $(a_n)$ and $(b_n)$ are **equivalent** if $a_n - b_n \to 0$. A real
number is an equivalence class. So $\sqrt 2$ is the class containing Newton's sequence, the decimal sequence
$1, 1.4, 1.41, \ldots$, and every other rational sequence that approaches the same place. Add and multiply term by term;
check that the result is well defined (does not depend on which sequence you chose from each class) and obeys the
axioms. The completeness check here takes a diagonal style argument: given a Cauchy sequence of these new reals, choose a
rational very close to the $n$th one, and show the rationals you chose form a Cauchy sequence whose class is the limit.

The Cauchy construction has a great advantage: it works for any **metric space** (Chapter 20). Starting from the
rationals with a different notion of distance, the $p$-adic distance, the same construction gives the $p$-adic numbers of
[Number Theory Chapter 18](../number-theory/18-p-adic-Numbers.md), a completely different completion of $\mathbb{Q}$.

**A theorem we will use later.** In $\mathbb{R}$, a sequence converges if and only if it is Cauchy. One direction is easy:
if $a_n \to L$, then for $m, n$ large, $|a_m - a_n| \le |a_m - L| + |L - a_n|$ is small. The other direction needs
completeness, and the cleanest proof uses Bolzano-Weierstrass, so we prove it in 18.5.

## 18.4 The Archimedean property and density

Here is a property so obvious you might never think to ask for a proof: the whole numbers are not bounded above. Given any
real number, some integer is bigger.

**Archimedean property.** For any real numbers $x > 0$ and $y$, there is a positive integer $n$ with $nx > y$.

In words: however small a step $x$ and however far away a target $y$, enough steps get you past it. The name honours
Archimedes, who used an equivalent statement (it is in Euclid as well, as part of Eudoxus's theory of ratios).

*Proof.* Suppose not: then $nx \le y$ for every $n$, so the set $\{nx : n = 1, 2, 3, \ldots\}$ is bounded above by $y$.
By completeness it has a supremum $L$. Since $x > 0$, $L - x < L$ is not an upper bound, so some $mx > L - x$. Then
$(m + 1)x > L$, and $(m+1)x$ is in the set, contradicting that $L$ is an upper bound. $\square$

Taking $x = 1$: the integers are unbounded. Taking $y = 1$: for every $\varepsilon > 0$ there is $n$ with
$1/n < \varepsilon$. That small fact is the one we used in 18.2 to show $\sup\{1 - 1/n\} = 1$, and it is behind
$1/n \to 0$, which in turn is behind almost every limit in this book.

Is the Archimedean property not automatic? No. There are ordered fields in which it fails: fields that contain
"infinitesimals", positive elements smaller than every $1/n$. The field of rational functions $p(t)/q(t)$, ordered by
which is bigger for very large $t$, is one: there $1/t$ is positive but below every $1/n$. The proof above shows such a
field cannot be complete. (Abraham Robinson's non-standard analysis of the 1960s uses a larger field with infinitesimals
to put Leibniz's infinitely small quantities on a rigorous footing; it gives the same theorems by a different road.)

**Density of the rationals.** Between any two real numbers $a < b$ there is a rational number.

*Proof.* By the Archimedean property choose $n$ with $n(b - a) > 1$, so the numbers $na$ and $nb$ are more than 1 apart.
Let $m$ be the smallest integer greater than $na$ (the integers greater than $na$ are not empty by the Archimedean
property, and a set of integers bounded below has a least element). Then $m - 1 \le na < m$, so

$$
na < m \le na + 1 < nb.
$$

Dividing by $n$: $a < m/n < b$. $\square$

**Example.** Between $a = 0.31$ and $b = 0.32$. We need $n(b - a) > 1$, so $n = 101$ works. Then $na = 31.31$, the smallest
integer above it is $m = 32$, and $32/101 \approx 0.3168$. *Check:* $0.31 < 0.3168 < 0.32$. (The proof's choice is safe, not clever: the
neatest answer is $0.315 = 63/200$.)

**Density of the irrationals.** Between any two reals $a < b$ there is an irrational number.

*Proof.* Apply density of the rationals to $a/\sqrt 2 < b/\sqrt 2$ to get a rational $r \neq 0$ between them (if the one
you get is 0, apply it again between 0 and $b/\sqrt 2$). Then $r\sqrt 2$ lies between $a$ and $b$, and it is irrational,
because if $r\sqrt 2 = s$ were rational then $\sqrt 2 = s/r$ would be too. $\square$

So rationals and irrationals are both everywhere, packed into every interval, however short. In 18.8 you will see the
surprise: even so, there are far more irrationals than rationals.

## 18.5 The Bolzano-Weierstrass theorem

*Level: advanced.* A bounded sequence need not converge: $1, -1, 1, -1, \ldots$ bounces for ever. But it has a part that
converges: take every other term. Is that always possible?

A **subsequence** of $(a_n)$ is a sequence $a_{n_1}, a_{n_2}, a_{n_3}, \ldots$ with $n_1 < n_2 < n_3 < \cdots$: you keep
infinitely many terms, in their original order, and drop the rest.

**Bolzano-Weierstrass theorem.** Every bounded sequence of real numbers has a convergent subsequence.

We give two proofs, because both ideas come back later.

### Proof by peaks

**Lemma.** Every sequence of real numbers has a monotone (increasing or decreasing) subsequence.

*Proof.* Call an index $m$ a **peak** if $a_m \ge a_n$ for every $n > m$: from the top of $a_m$ you can see the whole rest
of the sequence below you.

- If there are infinitely many peaks $m_1 < m_2 < \cdots$, then $a_{m_1} \ge a_{m_2} \ge \cdots$ (each is a peak, so it is
  at least everything later, in particular the next peak). That is a decreasing subsequence.
- If there are only finitely many peaks, choose $n_1$ beyond the last one. Since $n_1$ is not a peak, some later
  $n_2 > n_1$ has $a_{n_2} > a_{n_1}$. Since $n_2$ is not a peak either, some $n_3 > n_2$ has $a_{n_3} > a_{n_2}$. Going on,
  we get an increasing subsequence. $\square$

*Proof of Bolzano-Weierstrass.* A bounded sequence has a monotone subsequence by the lemma, and that subsequence is
bounded, so it converges by the monotone convergence theorem. $\square$

### Proof by bisection

Say all terms lie in $[a, b]$. Cut the interval in half. At least one half contains infinitely many terms (meaning: $a_n$
lies in it for infinitely many $n$); pick that half and call it $I_1$, and pick one term $a_{n_1}$ in it. Halve $I_1$,
pick a half $I_2$ with infinitely many terms, and a term $a_{n_2}$ in it with $n_2 > n_1$. Go on. The intervals are nested
with lengths $(b-a)/2^k \to 0$, so by the nested interval theorem they close in on one number $x$. Both $a_{n_k}$ and $x$
lie in $I_k$, so $|a_{n_k} - x| \le (b - a)/2^k \to 0$. $\square$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 170" role="img" aria-label="Five nested intervals for the bisection proof. Each row is half the length of the row above and lies inside it, closing in on one point.">
  <g stroke-width="8" stroke-linecap="butt">
    <line x1="20" y1="25" x2="320" y2="25" stroke="#9cc9ea"/>
    <line x1="20" y1="55" x2="170" y2="55" stroke="#9cc9ea"/>
    <line x1="95" y1="85" x2="170" y2="85" stroke="#9cc9ea"/>
    <line x1="95" y1="115" x2="132.5" y2="115" stroke="#9cc9ea"/>
    <line x1="113.75" y1="145" x2="132.5" y2="145" stroke="#eea66f"/>
  </g>
  <line x1="123" y1="10" x2="123" y2="160" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <g fill="currentColor" font-size="11">
    <text x="325" y="29">I0</text><text x="175" y="59">I1</text><text x="175" y="89">I2</text>
    <text x="137" y="119">I3</text><text x="137" y="149">I4</text>
    <text x="128" y="167">x</text>
  </g>
</svg>
</div>

The bisection proof works word for word in $\mathbb{R}^n$, cutting a box into $2^n$ smaller boxes each time. So every
bounded sequence in $\mathbb{R}^n$ has a convergent subsequence too, a fact used in Chapter 15 for maxima of functions of
several variables.

**Example.** The sequence $a_n = \sin n$ (in radians) is bounded by 1 and does not converge. Bolzano-Weierstrass promises
a convergent subsequence, but it does not tell you which. (In fact, because $\pi$ is irrational, the values $\sin n$ come
arbitrarily close to every number in $[-1, 1]$, so for every $y$ in $[-1, 1]$ some subsequence converges to $y$. That needs
more than this chapter.)

**Cauchy implies convergent.** Now we can finish the theorem promised in 18.3.

*Proof.* Let $(a_n)$ be Cauchy. First it is bounded: with $\varepsilon = 1$ there is $N$ such that $|a_n - a_N| < 1$ for
$n \ge N$, so every term is within the largest of $|a_1|, \ldots, |a_{N}|$ plus 1 of zero. By Bolzano-Weierstrass a
subsequence $a_{n_k} \to L$. Given $\varepsilon > 0$, choose $N$ with $|a_m - a_n| < \varepsilon/2$ for $m, n \ge N$, and
choose $k$ with $n_k \ge N$ and $|a_{n_k} - L| < \varepsilon/2$. Then for $n \ge N$,

$$
|a_n - L| \le |a_n - a_{n_k}| + |a_{n_k} - L| < \varepsilon. \quad \square
$$

So in the reals, "the terms crowd together" and "the terms approach a limit" are the same thing. This is the form of
completeness that generalises to other spaces (Chapter 20), and it is what made the series tests of
[Chapter 12](12-Sequences-and-Series.md) work: absolute convergence implies convergence because the partial sums of an
absolutely convergent series are Cauchy.

## 18.6 Proofs of the intermediate and extreme value theorems

*Level: advanced.* Chapter 3 stated two theorems and asked you to trust them. Now we pay the debt. Recall that $f$ is
**continuous at $c$** if for every $\varepsilon > 0$ there is $\delta > 0$ with $|f(x) - f(c)| < \varepsilon$ whenever
$|x - c| < \delta$, and that this is equivalent to: whenever $x_n \to c$, also $f(x_n) \to f(c)$ (the sequence form of
continuity, proved in [Chapter 3](03-Continuity.md)).

### The intermediate value theorem

**Theorem (IVT).** If $f$ is continuous on $[a, b]$ and $f(a) < 0 < f(b)$, then $f(c) = 0$ for some $c$ in $(a, b)$.

(The general form, for any value between $f(a)$ and $f(b)$, follows by applying this to $f(x) - y$.)

*Proof.* Let $S = \{x \in [a, b] : f(x) < 0\}$. It is not empty ($a \in S$) and is bounded above by $b$, so it has a
supremum $c = \sup S$, with $a \le c \le b$. We show $f(c) = 0$ by ruling out the other two cases.

- *Suppose $f(c) < 0$.* Then $c \neq b$. By continuity, with $\varepsilon = -f(c)$, there is $\delta > 0$ such that
  $f(x) < 0$ for all $x$ in $[a,b]$ with $|x - c| < \delta$. In particular some $x$ slightly bigger than $c$ (and at most
  $b$) has $f(x) < 0$, so $x \in S$ and $x > c$. That contradicts $c$ being an upper bound of $S$.
- *Suppose $f(c) > 0$.* Then $c \neq a$. By continuity there is $\delta > 0$ with $f(x) > 0$ for all $x$ in $[a,b]$ with
  $|x - c| < \delta$. So no point of $(c - \delta, c]$ is in $S$, and no point above $c$ is in $S$ either (since $c$ is an
  upper bound). So $c - \delta$, or $a$ if that is bigger, is an upper bound of $S$ smaller than $c$. That contradicts
  $c$ being the *least* upper bound.

So $f(c) = 0$, and since $f(a) \neq 0 \neq f(b)$, $c$ is strictly between $a$ and $b$. $\square$

Where was completeness used? In the very first line: the supremum exists. Run the same argument with $f(x) = x^2 - 2$ in
the rationals and the set $S$ is essentially the set $A$ of 18.1, which has no rational supremum. The proof breaks exactly
where the theorem fails.

**Example.** Every polynomial of odd degree has a real root. Take $p(x) = x^3 - 4x + 7$. For large positive $x$ the $x^3$
term wins, so $p$ is positive; for large negative $x$, negative. Concretely $p(-3) = -27 + 12 + 7 = -8 < 0$ and
$p(0) = 7 > 0$, so there is a root in $(-3, 0)$. *Check:* $p(-2.7) = -19.683 + 10.8 + 7 = -1.883$ and
$p(-2.5) = -15.625 + 10 + 7 = 1.375$, so the root is between $-2.7$ and $-2.5$ (it is about $-2.59$).

### The extreme value theorem

**Theorem (EVT).** If $f$ is continuous on the closed bounded interval $[a, b]$, then $f$ is bounded, and it attains a
maximum and a minimum: there are $c, d$ in $[a, b]$ with $f(d) \le f(x) \le f(c)$ for all $x \in [a, b]$.

*Proof. Step 1, bounded.* Suppose $f$ were not bounded above. Then for each $n$ there is $x_n \in [a, b]$ with
$f(x_n) > n$. The sequence $(x_n)$ is bounded, so by Bolzano-Weierstrass some subsequence $x_{n_k} \to c$. Because
$a \le x_{n_k} \le b$, also $a \le c \le b$ (limits keep non-strict inequalities). By continuity $f(x_{n_k}) \to f(c)$, a
finite number. But $f(x_{n_k}) > n_k \to \infty$. Contradiction.

*Step 2, attained.* Let $M = \sup\{f(x) : a \le x \le b\}$, which exists by Step 1 and completeness. By the epsilon test,
for each $n$ there is $x_n$ with $M - 1/n < f(x_n) \le M$. Again a subsequence $x_{n_k} \to c \in [a, b]$, and by
continuity $f(c) = \lim f(x_{n_k}) = M$. So the maximum is attained at $c$. For the minimum apply this to $-f$. $\square$

Every hypothesis matters, and a counterexample for each one is good practice:

- *Not closed:* $f(x) = x$ on $(0, 1)$ has supremum 1, never reached.
- *Not bounded:* $f(x) = x$ on $[0, \infty)$ is unbounded.
- *Not continuous:* $f(x) = 1/x$ for $x \in (0, 1]$ and $f(0) = 0$ is unbounded on $[0, 1]$.
- *Not complete:* $f(x) = 1/(x^2 - 2)$ on the rational interval $[1, 2]$ is continuous
  at every rational point and unbounded, because rationals near $\sqrt 2$ make the denominator tiny.

Chapter 3 used the EVT to justify optimisation, and Chapter 6 used it in the proof of Rolle's theorem (a continuous
function on $[a, b]$ with $f(a) = f(b)$ has an interior maximum or minimum, where the derivative vanishes). So the mean
value theorem, L'Hôpital's rule and Taylor's theorem all rest on this proof, and through it on completeness.

## 18.7 Uniform continuity and the Heine-Cantor theorem

*Level: advanced.* Look again at the definition of continuity at a point $c$: for each $\varepsilon$ there is a $\delta$.
That $\delta$ is allowed to depend on $c$ as well as on $\varepsilon$. Sometimes one $\delta$ works everywhere at once;
sometimes it cannot.

**Example.** Take $f(x) = x^2$ and $\varepsilon = 1$. Near $c$, how close must $x$ be to keep $|x^2 - c^2| < 1$? Since
$x^2 - c^2 = (x - c)(x + c)$, and $x + c \approx 2c$, we need roughly $|x - c| < 1/(2c)$. Near $c = 100$ that means within
about $0.005$; near $c = 10^6$, within about $5 \times 10^{-7}$. No single $\delta$ works on the whole line: the graph gets
steeper and steeper.

**Definition.** A function $f$ is **uniformly continuous** on a set $D$ if for every $\varepsilon > 0$ there is a
$\delta > 0$ such that $|f(x) - f(y)| < \varepsilon$ for *all* $x, y \in D$ with $|x - y| < \delta$.

The difference from continuity is the order of the words. Continuity: for every point and every $\varepsilon$ there is a
$\delta$. Uniform continuity: for every $\varepsilon$ there is a $\delta$ that serves every point.

**Examples.**

1. $f(x) = 3x + 1$ on $\mathbb{R}$ is uniformly continuous: $|f(x) - f(y)| = 3|x - y|$, so $\delta = \varepsilon/3$ works
   everywhere.
2. More generally, any **Lipschitz** function, one with $|f(x) - f(y)| \le K|x - y|$ for a constant $K$, is uniformly
   continuous with $\delta = \varepsilon/K$. By the mean value theorem ([Chapter 6](06-The-Mean-Value-Theorem.md)), a
   differentiable function with $|f'| \le K$ is Lipschitz. So $\sin x$ is uniformly continuous on $\mathbb{R}$, with
   $K = 1$.
3. $f(x) = x^2$ on $\mathbb{R}$ is not. *Proof:* take $\varepsilon = 1$. For any $\delta > 0$, let $x = 1/\delta$ and
   $y = x + \delta/2$. Then $|x - y| < \delta$, but $y^2 - x^2 = \delta x + \delta^2/4 > \delta x = 1$.
4. $f(x) = 1/x$ on $(0, 1)$ is not. Points $x = 1/n$ and $y = 1/(n+1)$ get as close as you like, yet
   $f(y) - f(x) = 1$.
5. $f(x) = \sqrt{x}$ on $[0, \infty)$ is uniformly continuous, although its slope is infinite at 0 (Exercise 7).

Examples 3 and 4 fail for different reasons: an unbounded domain, and a domain with a missing end point. Remove both
problems and the failure disappears.

**Heine-Cantor theorem.** A function continuous on a closed bounded interval $[a, b]$ is uniformly continuous there.

*Proof.* Suppose not. Then for some $\varepsilon > 0$ no $\delta$ works; in particular $\delta = 1/n$ fails for each $n$,
so there are points $x_n, y_n \in [a, b]$ with $|x_n - y_n| < 1/n$ but $|f(x_n) - f(y_n)| \ge \varepsilon$. By
Bolzano-Weierstrass a subsequence $x_{n_k} \to c \in [a, b]$. Since $|y_{n_k} - x_{n_k}| < 1/n_k \to 0$, also
$y_{n_k} \to c$. By continuity at $c$, both $f(x_{n_k})$ and $f(y_{n_k})$ tend to $f(c)$, so their difference tends to 0.
That contradicts $|f(x_{n_k}) - f(y_{n_k})| \ge \varepsilon$ for all $k$. $\square$

The proof has the same skeleton as the EVT: assume failure, collect a sequence of witnesses, extract a convergent
subsequence, contradict continuity at the limit. In Chapter 20 you will see that the skeleton is really about one property
of $[a, b]$, called compactness.

### Paying the debt of Chapter 8

[Chapter 8](08-The-Integral.md) proved that monotone functions are integrable and said that continuous functions are too,
"but the proof needs uniform continuity". Here it is.

**Theorem.** A continuous function on $[a, b]$ is (Riemann) integrable.

*Proof.* Let $\varepsilon > 0$. By Heine-Cantor choose $\delta > 0$ with $|f(x) - f(y)| < \varepsilon/(b - a)$ whenever
$|x - y| < \delta$. Take any partition $a = x_0 < x_1 < \cdots < x_n = b$ with every piece shorter than $\delta$. On the
piece $[x_{i-1}, x_i]$, $f$ attains a maximum $M_i$ and a minimum $m_i$ (EVT), at points less than $\delta$ apart, so
$M_i - m_i < \varepsilon/(b - a)$. Then the upper sum minus the lower sum is

$$
U - L = \sum_{i=1}^{n} (M_i - m_i)(x_i - x_{i-1}) < \frac{\varepsilon}{b - a} \sum_{i=1}^{n} (x_i - x_{i-1}) = \varepsilon.
$$

Since $\varepsilon$ was arbitrary, Darboux's criterion from Chapter 8 says $f$ is integrable. $\square$

Notice that plain continuity would not do: we needed one $\delta$ that controls *every* piece of the partition at once.

*Expert remark.* The idea of uniformity, one choice serving infinitely many cases at once, is the theme of the next
chapter. There it is applied not to points but to a whole sequence of functions.

## 18.8 Countable and uncountable

*Level: advanced.* Are there more real numbers than rational numbers? Both sets are infinite, and both are packed into
every interval. Georg Cantor's answer (1874) was yes, and he made the question precise.

Two sets have the **same size** (the same **cardinality**) if there is a **bijection** between them: a pairing that
matches every element of one with exactly one element of the other, with nothing left over on either side. For finite sets
this is counting. For infinite sets it gives surprises at once: the map $n \mapsto 2n$ pairs the positive integers with the
even positive integers, so a set can be the same size as a part of itself.

A set is **countable** if it is finite or has the same size as $\mathbb{N} = \{1, 2, 3, \ldots\}$: its elements can be
listed as a first, second, third, and so on, with every element appearing somewhere in the list. Otherwise it is
**uncountable**.

### Countable sets

1. **The integers** are countable: $0, 1, -1, 2, -2, 3, -3, \ldots$
2. **Pairs of positive integers** are countable. Arrange them in a grid, with $(m, n)$ in row $m$ and column $n$, and list
   them diagonal by diagonal: $(1,1)$; $(1,2), (2,1)$; $(1,3), (2,2), (3,1)$; and so on. The pair $(m, n)$ is on diagonal
   $m + n - 1$ and every diagonal is finite, so every pair gets a place (the formula is just below the list).

3. **The rationals** are countable: every positive rational is $m/n$ for some pair, so list the pairs and skip fractions
   not in lowest terms; then interleave negatives and 0 as for the integers.
4. **A countable union of countable sets** is countable: if $A_1, A_2, \ldots$ are each listed, put the $n$th element of
   $A_m$ at grid position $(m, n)$ and use the diagonal listing. (This uses a choice of listing for each $A_m$ at once, a
   mild use of the axiom of choice.)
5. **The algebraic numbers**, real roots of polynomials with integer coefficients, are countable. For each $h$ there are
   only finitely many polynomials of degree at most $h$ with all coefficients of size at most $h$, each with finitely many
   roots. So the algebraic numbers are a countable union of finite sets.

The place of the pair $(m, n)$ in the diagonal listing of item 2 is

$$
\text{position}(m, n) = \frac{(m + n - 1)(m + n - 2)}{2} + m,
$$

because the diagonals before it hold $1 + 2 + \cdots + (m + n - 2)$ pairs. *Check:* $(1,1) \mapsto 0 + 1 = 1$,
$(2,1) \mapsto 1 + 2 = 3$, $(1,3) \mapsto 3 + 1 = 4$.

!!! note "Try it in Python"
    List the positive rationals in Cantor's diagonal order, skipping repeats.

    ```python
    from math import gcd
    out, d = [], 2
    while len(out) < 12:
        for m in range(1, d):
            n = d - m
            if gcd(m, n) == 1:
                out.append(f"{m}/{n}")
        d += 1
    print(out[:12])
    # ['1/1', '1/2', '2/1', '1/3', '3/1', '1/4', '2/3', '3/2', '4/1', '1/5', '5/1', '1/6']
    ```

### The reals are uncountable

**Theorem (Cantor).** The interval $(0, 1)$ is uncountable. Hence $\mathbb{R}$ is uncountable.

*Proof (the diagonal argument, 1891).* Suppose we had a list $x_1, x_2, x_3, \ldots$ containing every number in $(0, 1)$.
Write each as a decimal:

$$
\begin{aligned}
x_1 &= 0.\,d_{11}\, d_{12}\, d_{13}\, d_{14} \ldots \\
x_2 &= 0.\,d_{21}\, d_{22}\, d_{23}\, d_{24} \ldots \\
x_3 &= 0.\,d_{31}\, d_{32}\, d_{33}\, d_{34} \ldots
\end{aligned}
$$

Build a new number $y = 0.e_1 e_2 e_3 \ldots$ digit by digit, looking down the diagonal: let $e_n = 5$ if $d_{nn} \neq 5$,
and $e_n = 4$ if $d_{nn} = 5$. Then $y$ is in $(0, 1)$, and its decimal uses only the digits 4 and 5, so it is the *only*
decimal for $y$ (the double names like $0.4999\ldots = 0.5000\ldots$ involve endless 9s or 0s). Now $y$ differs from $x_n$
in the $n$th digit, for every $n$. So $y$ is not $x_1$, not $x_2$, not any $x_n$: it is missing from the list. No list can
contain every real number. $\square$

**Example.** If the list began $x_1 = 0.\mathbf{1}415\ldots$, $x_2 = 0.7\mathbf{1}82\ldots$, $x_3 = 0.50\mathbf{5}0\ldots$,
$x_4 = 0.333\mathbf{3}\ldots$, the diagonal digits are 1, 1, 5, 3 and $y$ starts $0.5545\ldots$, which differs from each of
the four in the marked place.

Cantor's first proof, in 1874, was different: it used nested intervals (18.2). Given a list, choose a closed interval
avoiding $x_1$, inside it a smaller one avoiding $x_2$, and so on; the point common to all the intervals is on no list.
That proof shows directly that completeness is the cause.

### What it means

- **Transcendental numbers exist.** The algebraic numbers are countable and the reals are not, so some real number is not
  algebraic. Joseph Liouville had already built explicit transcendental numbers in 1844 (such as
  $\sum 10^{-k!}$); Cantor's argument shows, without exhibiting one, that almost all real numbers are transcendental.
- **Size zero for countable sets.** Any countable set of reals can be covered by intervals of total length as small as you
  like: cover the $n$th element by an interval of length $\varepsilon/2^n$, for total length at most $\varepsilon$. So the
  rationals, dense as they are, take up "no room" on the line. This is the first step of Lebesgue's measure in
  [Chapter 21](21-Lebesgue-Integration-and-Fourier-Series.md).
- **Bigger and bigger infinities.** The same diagonal idea proves that every set $S$ is strictly smaller than the set of
  all its subsets. *Proof:* given any map $f$ from $S$ to its subsets, let $D = \{s \in S : s \notin f(s)\}$. If
  $D = f(t)$ for some $t$, then $t \in D$ exactly when $t \notin f(t) = D$, which is impossible. So no map from $S$ onto its
  subsets exists. $\square$
- **The continuum hypothesis.** Cantor asked whether there is a set bigger than $\mathbb{N}$ and smaller than
  $\mathbb{R}$. Kurt Gödel (1940) and Paul Cohen (1963) showed that the usual axioms of set theory can neither prove nor
  disprove that there is none. The Topics lesson
  [The continuum hypothesis](../../topics/infinity/level-8/04-continuum-hypothesis.md) tells that story gently.

## A short history

The Greeks met the gap first. The discovery that the side and diagonal of a square have no common measure is usually
credited to the Pythagorean school, though who found it and when is not known reliably. Eudoxus answered it with a theory
of ratios, preserved in Book V of Euclid's *Elements*, that compares two magnitudes by asking which fractions lie below
each: very close in spirit to Dedekind's cuts.

Calculus then ran for nearly two centuries on intuition about the continuum. Bernard Bolzano, in a paper of 1817, gave a
proof of the intermediate value theorem that tried to avoid geometric intuition, and in doing so he needed a form of the
least upper bound property, which he could only argue for. Augustin-Louis Cauchy's *Cours d'analyse* (1821) made limits the
foundation of calculus and used the condition we now call Cauchy's criterion, but he took the existence of limits of such
sequences for granted.

The construction of the real numbers came around 1870, when several mathematicians, partly prompted by the need to teach
the subject properly and partly by problems about Fourier series, decided that the continuum itself had to be defined.
Dedekind wrote that the idea of cuts came to him in 1858 while preparing lectures on calculus in Zurich, and he published
*Stetigkeit und irrationale Zahlen* (Continuity and irrational numbers) in 1872. In the same years Méray and Cantor gave the
Cauchy sequence construction, and Karl Weierstrass gave his own in his Berlin lectures. Eduard Heine published the theorem
on uniform continuity in 1872 (Dirichlet had used the idea in lectures earlier). Cantor's work on the sizes of infinite sets
began with his 1874 paper on the countability of the algebraic numbers and the uncountability of the reals, and the
diagonal argument appeared in 1891.

## Check yourself

??? question "1. Find the supremum and infimum of $S = \{1/n : n = 1, 2, 3, \ldots\}$. Are they in $S$?"

    $\sup S = 1$, which is in $S$ (it is the maximum, at $n = 1$), because every $1/n \le 1$.
    $\inf S = 0$, not in $S$. Every $1/n > 0$, so 0 is a lower bound. If $m > 0$, the Archimedean property gives $n$ with
    $1/n < m$, so $m$ is not a lower bound. So 0 is the greatest lower bound, and no $1/n$ equals 0.

??? question "2. Find $\sup$ and $\inf$ of $\{(-1)^n (1 - 1/n) : n \ge 1\}$."

    The even terms are $1 - 1/n$: $1/2, 3/4, 5/6, \ldots$, increasing towards 1. The odd terms are $-(1 - 1/n)$:
    $0, -2/3, -4/5, \ldots$, decreasing towards $-1$. So $\sup = 1$ and $\inf = -1$, and neither is attained, because
    $1 - 1/n < 1$ for every $n$.

??? question "3. Let $A, B$ be non-empty sets bounded above and $A + B = \{a + b : a \in A, b \in B\}$. Prove $\sup(A + B) = \sup A + \sup B$."

    Let $\alpha = \sup A$ and $\beta = \sup B$. Every $a + b \le \alpha + \beta$, so $\alpha + \beta$ is an upper bound.
    Given $\varepsilon > 0$, the epsilon test gives $a > \alpha - \varepsilon/2$ and $b > \beta - \varepsilon/2$, so
    $a + b > \alpha + \beta - \varepsilon$. By the epsilon test again, $\alpha + \beta$ is the supremum.

??? question "4. Run five steps of bisection for $\sqrt 3$ on $[1, 2]$. What interval do you end with?"

    Midpoints and squares: $1.5^2 = 2.25 < 3$, keep $[1.5, 2]$; $1.75^2 = 3.0625 > 3$, keep $[1.5, 1.75]$;
    $1.625^2 = 2.640625 < 3$, keep $[1.625, 1.75]$; $1.6875^2 = 2.84765625 < 3$, keep $[1.6875, 1.75]$;
    $1.71875^2 = 2.9541015625 < 3$, keep $[1.71875, 1.75]$. *Check:* $\sqrt 3 = 1.7320\ldots$ is inside, and the length is
    $1/32$.

??? question "5. Use the IVT to show that $x^5 + x = 1$ has exactly one real solution, and find an interval of length 1/4 containing it."

    Let $f(x) = x^5 + x - 1$, continuous. $f(0) = -1 < 0$ and $f(1) = 1 > 0$, so a root lies in $(0, 1)$. It is the only
    one because $f'(x) = 5x^4 + 1 > 0$, so $f$ is strictly increasing. Halving: $f(0.5) = 0.03125 + 0.5 - 1 < 0$ and
    $f(0.75) = 0.2373\ldots + 0.75 - 1 = -0.0127 < 0$, so the root is in $(0.75, 1)$. (It is about $0.7549$.)

??? question "6. Find a convergent subsequence of $a_n = (-1)^n + 1/n$, and two different limits that subsequences can have."

    The even terms $a_{2k} = 1 + 1/(2k) \to 1$; the odd terms $a_{2k+1} = -1 + 1/(2k+1) \to -1$. So the subsequence of
    even terms converges to 1 and that of odd terms to $-1$. No subsequence converges to anything else, since every term is
    within $1/n$ of $\pm 1$.

??? question "7. Prove that $f(x) = \sqrt{x}$ is uniformly continuous on $[0, \infty)$."

    First show $|\sqrt x - \sqrt y| \le \sqrt{|x - y|}$. If $x \ge y \ge 0$, then
    $(\sqrt x - \sqrt y)^2 = x - 2\sqrt{xy} + y \le x - 2y + y = x - y$, since $\sqrt{xy} \ge y$. Taking square roots gives
    the claim. Now given $\varepsilon > 0$ let $\delta = \varepsilon^2$: if $|x - y| < \delta$ then
    $|\sqrt x - \sqrt y| < \sqrt{\delta} = \varepsilon$. One $\delta$ for all points.

??? question "8. Show that $f(x) = \sin(1/x)$ is continuous on $(0, 1)$ but not uniformly continuous there."

    It is a composition of continuous functions, so continuous at every point of $(0,1)$. Take $\varepsilon = 1$. The
    points $x_n = 1/(2\pi n + \pi/2)$ and $y_n = 1/(2\pi n)$ (for $n \ge 1$) satisfy $f(x_n) = 1$, $f(y_n) = 0$, and
    $|x_n - y_n| \to 0$. So for any $\delta$ some pair closer than $\delta$ has values differing by 1. (This does not
    contradict Heine-Cantor: $(0,1)$ is not closed, and no value of $f(0)$ makes $f$ continuous at 0.)

??? question "9. Prove that every continuous $f : [0, 1] \to [0, 1]$ has a fixed point, a $c$ with $f(c) = c$."

    Let $g(x) = f(x) - x$, continuous. $g(0) = f(0) \ge 0$ and $g(1) = f(1) - 1 \le 0$. If either is 0 we are done.
    Otherwise $g(0) > 0 > g(1)$ and the IVT gives $c$ with $g(c) = 0$, that is $f(c) = c$. (This is the one-dimensional
    case of Brouwer's fixed point theorem.)

??? question "10. Where is the pair $(3, 4)$ in Cantor's listing of pairs, and which pair is in position 20?"

    Position$(m, n) = (m + n - 1)(m + n - 2)/2 + m$, so $(3,4) \mapsto 6 \cdot 5/2 + 3 = 18$. For position 20: diagonals
    $1$ to $5$ hold $1 + 2 + 3 + 4 + 5 = 15$ pairs, so position 20 is the 5th pair on diagonal 6 (where $m + n = 7$),
    which is $(5, 2)$. *Check:* $(5 + 2 - 1)(5 + 2 - 2)/2 + 5 = 15 + 5 = 20$.

??? question "11. Show that the set of all infinite sequences of 0s and 1s is uncountable."

    Given any list $s_1, s_2, \ldots$ of such sequences, define $t$ by flipping the diagonal: the $n$th entry of $t$ is
    $1$ minus the $n$th entry of $s_n$. Then $t$ differs from every $s_n$ in place $n$, so it is not on the list. (These
    sequences correspond to subsets of $\mathbb{N}$, so this is also the subset theorem for $S = \mathbb{N}$.)

??? question "12. Using the least upper bound axiom, prove that $0.999\ldots = 1$."

    By definition the infinite decimal $0.999\ldots$ is the limit, which is the supremum, of the increasing sequence
    $a_n = 0.99\ldots9$ ($n$ nines) $= 1 - 10^{-n}$. Every $a_n < 1$, so 1 is an upper bound. Given $\varepsilon > 0$,
    choose $n$ with $10^{-n} < \varepsilon$ (possible since $10^{-n} \le 1/n$); then $a_n > 1 - \varepsilon$. By the
    epsilon test, $\sup a_n = 1$.

## What you learned

- The rational numbers have gaps: bounded sets like $\{q : q^2 < 2\}$ with no rational least upper bound, and the big
  theorems of calculus fail there.
- The real numbers are a complete ordered field: every non-empty set bounded above has a supremum. Dedekind cuts and
  Cauchy sequences both build such a field from the rationals.
- Completeness gives the monotone convergence theorem, nested intervals, the Archimedean property and density.
- Bolzano-Weierstrass: every bounded sequence has a convergent subsequence; and in $\mathbb{R}$ Cauchy sequences converge.
- With these, the intermediate value and extreme value theorems are proved, and each proof uses completeness exactly once.
- Continuous functions on $[a, b]$ are uniformly continuous (Heine-Cantor), which proves they are integrable.
- The rationals and algebraic numbers are countable; the reals are not (Cantor's diagonal argument), so transcendental
  numbers exist in abundance.

**Next:** [Chapter 19](19-Uniform-Convergence.md), when a limit of functions keeps the properties of the functions, and
when it does not.

## Further reading

- R. Dedekind, *Stetigkeit und irrationale Zahlen*, 1872; English translation "Continuity and Irrational Numbers" in
  *Essays on the Theory of Numbers*, 1901.
- G. Cantor, "Über eine Eigenschaft des Inbegriffes aller reellen algebraischen Zahlen", *Journal für die reine und
  angewandte Mathematik*, 1874; and "Über eine elementare Frage der Mannigfaltigkeitslehre", 1891.
- W. Rudin, *Principles of Mathematical Analysis*, 3rd edition, 1976 (Chapter 1 and its appendix construct the reals by
  cuts).
- M. Spivak, *Calculus*, 4th edition, 2008 (Part V constructs the reals and proves their uniqueness).
- S. Abbott, *Understanding Analysis*, 2nd edition, 2015.
- T. Tao, *Analysis I*, 2006 (builds the reals from Cauchy sequences of rationals).
- U of T guides: [MAT158 Unit 2, Real numbers and least upper bounds](../../uoft/MAT158H1/unit02.md),
  [MAT158 Unit 5, The three hard theorems](../../uoft/MAT158H1/unit05.md),
  [MAT159 Unit 3, Sequences and Cauchy sequences](../../uoft/MAT159H1/unit03.md),
  [MAT137 Unit 1, Logic, sets and proofs](../../uoft/MAT137/unit01.md).
- Topics lessons: [The real numbers](../../topics/numbers/level-6/05-real-numbers.md),
  [Does 0.999... equal 1?](../../topics/infinity/level-4/02-does-point-nine.md),
  [The diagonal argument](../../topics/infinity/level-7/01-diagonal-argument.md),
  [Transcendental numbers](../../topics/infinity/level-7/03-transcendental-numbers.md).
- Other books on this site: [Number Theory, p-adic numbers](../number-theory/18-p-adic-Numbers.md) (another completion of
  the rationals), [Number Theory, continued fractions](../number-theory/10-Continued-Fractions.md) (the best rational
  approximations to irrationals).
