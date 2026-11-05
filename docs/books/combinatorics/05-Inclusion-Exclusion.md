# 5. Inclusion-exclusion

*How many whole numbers up to 1000 are divisible by none of 2, 3, 5 and 7? How many ways can ten people take back
ten coats so that nobody gets their own? How many ways can five jobs go to three workers so that every worker gets
at least one? Each question asks for the things that avoid every one of several properties, and in each the direct
count is a mess while the count of things that HAVE a given property is easy. This chapter builds the tool that turns
the easy counts into the hard one: add, subtract the overlaps, add back the triple overlaps, and so on. You will
prove it in general, then use it to count derangements (and meet $1/e$ where you would never expect it), onto
functions, Euler's phi function and permutations with forbidden positions.*

!!! abstract "In this chapter"
    **You will learn:**

    - how to count a union of two or three sets without counting anything twice
    - the general inclusion-exclusion formula, with a proof, and the "none of the properties" form
    - derangements: the formula, the recurrence, and why the chance of no match tends to $1/e$
    - how to count onto functions, and how this leads to the Stirling numbers
    - Euler's phi function by inclusion-exclusion, and the sieve that counts primes
    - rook polynomials: counting permutations that avoid forbidden squares on a board

    **You need:** [Chapter 1](01-Counting-Principles.md) (sum rule, complements, bijections) and
    [Chapter 3](03-Binomial-Coefficients.md) (binomial coefficients, $\sum_k (-1)^k\binom{n}{k} = 0$).
    The gentler versions are [Counting the rest](../../topics/counting/level-3/03-counting-the-rest.md),
    [Inclusion-exclusion](../../topics/counting/level-6/01-inclusion-exclusion.md) and
    [Derangements](../../topics/counting/level-8/03-derangements.md).

    **Levels:** 5.1 is beginner; 5.2 to 5.4 are intermediate; 5.5 is intermediate with an advanced ending;
    5.6 is advanced.

## 5.1 Two and three sets

A class has 30 students. 18 play a sport, 12 play an instrument, and 7 do both. How many do neither?

The tempting answer adds: $18 + 12 = 30$, so everyone does something. That is wrong, and the reason is visible in a
picture. The 7 students who do both were counted once among the 18 and again among the 12. They were counted twice.
To count each student who does at least one activity exactly once, subtract the double count:

$$
18 + 12 - 7 = 23 .
$$

So $30 - 23 = 7$ students do neither.

Write $|A|$ for the number of elements of a finite set $A$ (its **size**, or **cardinality**), $A \cup B$ for the
**union** (elements in $A$ or $B$ or both) and $A \cap B$ for the **intersection** (elements in both). The rule we just
used is

$$
|A \cup B| = |A| + |B| - |A \cap B| .
$$

**Why it is true.** Look at one element $x$ of $A \cup B$ and ask how many times the right side counts it. If $x$ is in
$A$ only, it is counted once (by $|A|$). If it is in $B$ only, once. If it is in both, it is counted $+1$ by $|A|$,
$+1$ by $|B|$ and $-1$ by $|A \cap B|$: once in total. Every element is counted exactly once, so the right side is
$|A \cup B|$.

That way of proving it, by asking "how many times is each single element counted?", is the whole idea of this
chapter. Keep it in mind.

### Three sets

Now three properties. Among the numbers $1, 2, \dots, 100$, how many are divisible by 2, by 3 or by 5?

Let $A_2$, $A_3$, $A_5$ be the multiples of 2, 3 and 5 in that range. The number of multiples of $d$ up to $N$ is
$\lfloor N/d \rfloor$, the whole part of $N/d$. A number is divisible by both 2 and 3 exactly when it is divisible by
6 (because 2 and 3 have no common factor), so $A_2 \cap A_3$ is the multiples of 6, and so on.

| set | multiples of | size |
|---|---|---|
| $A_2$ | 2 | 50 |
| $A_3$ | 3 | 33 |
| $A_5$ | 5 | 20 |
| $A_2 \cap A_3$ | 6 | 16 |
| $A_2 \cap A_5$ | 10 | 10 |
| $A_3 \cap A_5$ | 15 | 6 |
| $A_2 \cap A_3 \cap A_5$ | 30 | 3 |

Add the singles: $50 + 33 + 20 = 103$, more than 100, so certainly too many. Subtract the pairs: $103 - 16 - 10 - 6 =
71$. But now look at a number like 30, which is in all three sets. The singles counted it 3 times; the pairs subtracted
it 3 times; it is now counted 0 times. So add the triple back:

$$
|A_2 \cup A_3 \cup A_5| = 50 + 33 + 20 - 16 - 10 - 6 + 3 = 74 .
$$

**Check.** A short loop in Python agrees: `sum(1 for n in range(1, 101) if n % 2 == 0 or n % 3 == 0 or n % 5 == 0)`
gives 74. So 26 numbers up to 100 are divisible by none of 2, 3, 5.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 230" role="img" aria-label="Three overlapping circles A, B and C. Regions in exactly one circle are marked +1, regions in exactly two circles are marked 1 + 1 minus 1, and the centre region in all three is marked 3 minus 3 plus 1.">
  <circle cx="150" cy="90" r="70" fill="#eea66f" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="230" cy="90" r="70" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="190" cy="155" r="70" fill="#7ccf9a" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <g fill="currentColor" font-size="14" text-anchor="middle">
    <text x="78" y="40">A</text>
    <text x="302" y="40">B</text>
    <text x="275" y="205">C</text>
    <text x="120" y="80">1</text>
    <text x="260" y="80">1</text>
    <text x="190" y="190">1</text>
    <text x="190" y="62">1+1−1</text>
    <text x="140" y="140">1+1−1</text>
    <text x="242" y="140">1+1−1</text>
    <text x="190" y="115" font-size="12">3−3+1</text>
  </g>
</svg>
</div>

The picture shows the count for each region of the three-set formula

$$
|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C| .
$$

An element in exactly one set is counted once. An element in exactly two sets is counted twice by the singles and
subtracted once by the one pair that holds it: once. An element in all three is counted 3 times, subtracted 3 times
(three pairs), and added once by the triple: once. Every region gets 1.

**Worked example.** In a group of 50 people, 22 speak French, 20 speak Spanish, 15 speak Mandarin, 8 speak French and
Spanish, 5 French and Mandarin, 4 Spanish and Mandarin, and 2 speak all three. How many speak none of the three?

Step 1, the union: $22 + 20 + 15 - 8 - 5 - 4 + 2 = 42$.
Step 2, the complement: $50 - 42 = 8$ speak none.

**Check.** Fill the Venn regions from the inside out. All three: 2. French and Spanish only: $8 - 2 = 6$; French and
Mandarin only: $5 - 2 = 3$; Spanish and Mandarin only: $4 - 2 = 2$. French only: $22 - 2 - 6 - 3 = 11$; Spanish only:
$20 - 2 - 6 - 2 = 10$; Mandarin only: $15 - 2 - 3 - 2 = 8$. Total: $2 + 6 + 3 + 2 + 11 + 10 + 8 = 42$. It agrees.

The Venn check is a good habit, and it also catches impossible data: if some region came out negative, the numbers
could not come from a real group.

<figure class="play" data-play="venn"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Inclusion-exclusion on two sets: |A ∪ B| = |A| + |B| − |A ∩ B|.</figcaption></figure>

## 5.2 The general formula

*Level: intermediate.*

With four sets the picture stops helping (four circles cannot show all 16 regions), but the pattern is clear: add
the sizes of single sets, subtract the sizes of all pairwise intersections, add all triple intersections, subtract all
quadruple ones, and so on, alternating signs.

To write it compactly, number the sets $A_1, \dots, A_n$, and for a set of indices $S \subseteq \{1, \dots, n\}$
write $A_S$ for the intersection of the sets with index in $S$. For example $A_{\{1,3\}} = A_1 \cap A_3$.

!!! note "Theorem (inclusion-exclusion)"
    For finite sets $A_1, \dots, A_n$,
    $|A_1 \cup \dots \cup A_n| = \sum_{\emptyset \ne S \subseteq \{1,\dots,n\}} (-1)^{|S|+1} |A_S|$.

Grouped by the size of $S$, with $\Sigma_k$ meaning the sum of $|A_S|$ over all $S$ of size $k$:

$$
|A_1 \cup \dots \cup A_n| = \Sigma_1 - \Sigma_2 + \Sigma_3 - \dots + (-1)^{n+1} \Sigma_n .
$$

**Proof.** Take one element $x$ of the union, and say it lies in exactly $m$ of the sets, where $m \ge 1$. Then $x$ is
in $A_S$ exactly when every index in $S$ is one of those $m$ sets. So the number of $S$ of size $k$ with $x \in A_S$
is $\binom{m}{k}$, and the right side counts $x$ this many times:

$$
\binom{m}{1} - \binom{m}{2} + \binom{m}{3} - \dots + (-1)^{m+1}\binom{m}{m} .
$$

The binomial theorem with $x = -1$ ([Chapter 3](03-Binomial-Coefficients.md)) gives
$0 = (1 - 1)^m = \sum_{k=0}^{m} (-1)^k \binom{m}{k}$, so the sum from $k = 1$ to $m$ of $(-1)^k\binom{m}{k}$ is $-1$.
The expression above is minus that, so it equals $1$. Every element of the union is counted once; an element outside
the union is in no $A_S$ and is counted zero times. That proves the formula. $\square$

Notice where $m \ge 1$ was used: if $m = 0$ the alternating sum is empty and gives 0, which is right too.

### The "none of them" form

Most problems ask for the elements of a big set $U$ (the **universe**) that have none of the properties. Write
$\overline{A}$ for the **complement** $U \setminus A$, the elements of $U$ not in $A$. Subtracting the union from $|U|$,
and using $A_\emptyset = U$ (the empty intersection is everything, by convention), gives the cleanest form:

$$
|\overline{A_1} \cap \dots \cap \overline{A_n}| = \sum_{S \subseteq \{1,\dots,n\}} (-1)^{|S|} |A_S| .
$$

This is the version to remember. It also has a one-line proof by the same count: an element in exactly $m$ sets is
counted $\sum_{k=0}^m (-1)^k\binom{m}{k}$ times, which is $1$ if $m = 0$ and $0$ if $m \ge 1$.

**The symmetric case.** Often $|A_S|$ depends only on the size of $S$, say $|A_S| = N_k$ when $|S| = k$. Then there
are $\binom{n}{k}$ terms equal to $N_k$, and

$$
|\overline{A_1} \cap \dots \cap \overline{A_n}| = \sum_{k=0}^{n} (-1)^k \binom{n}{k} N_k .
$$

Derangements, onto functions and many other counts below are of this kind.

**Worked example: numbers coprime to 210.** How many numbers in $1, \dots, 1000$ are divisible by none of 2, 3, 5, 7?

The universe has $1000$ elements. For a product $d$ of some of these primes, the multiples of $d$ number
$\lfloor 1000/d \rfloor$.

- Singles: $500 + 333 + 200 + 142 = 1175$.
- Pairs ($d = 6, 10, 14, 15, 21, 35$): $166 + 100 + 71 + 66 + 47 + 28 = 478$.
- Triples ($d = 30, 42, 70, 105$): $33 + 23 + 14 + 9 = 79$.
- All four ($d = 210$): $4$.

So the count is $1000 - 1175 + 478 - 79 + 4 = 228$.

**Check.** `sum(1 for n in range(1, 1001) if all(n % p for p in (2, 3, 5, 7)))` gives 228.

### Bonferroni inequalities

*Level: advanced.*

If you stop the alternating sum early, you do not get the right answer, but you get a bound, and the bounds alternate.
Write $T = |A_1 \cup \dots \cup A_n|$. Then

$$
T \le \Sigma_1, \qquad T \ge \Sigma_1 - \Sigma_2, \qquad T \le \Sigma_1 - \Sigma_2 + \Sigma_3, \quad \dots
$$

Stopping after a plus term overestimates; stopping after a minus term underestimates. These are the **Bonferroni
inequalities** (named after Carlo Emilio Bonferroni, who published them in 1936). The first one, $T \le \Sigma_1$,
is the **union bound** used constantly in probability.

**Proof.** An element in $m \ge 1$ sets is counted $\sum_{k=1}^{r} (-1)^{k+1}\binom{m}{k}$ times by the truncated sum
that stops at $\Sigma_r$. A standard identity (prove it by induction on $r$ with Pascal's rule
$\binom{m}{k} = \binom{m-1}{k} + \binom{m-1}{k-1}$, the terms telescope) says

$$
\sum_{k=0}^{r} (-1)^k \binom{m}{k} = (-1)^r \binom{m-1}{r} .
$$

So the truncated count is $1 - (-1)^r\binom{m-1}{r}$, which is at least 1 when $r$ is odd and at most 1 when $r$ is
even. Summing over the elements gives the inequalities. $\square$

In practice, when the higher intersections are small, the first two or three terms already pin the answer down well.

## 5.3 Derangements and $1/e$

*Level: intermediate.*

Ten people leave their coats at a cloakroom, and the attendant hands them back at random. What is the chance that
nobody gets their own coat?

A **permutation** of $\{1, \dots, n\}$ is a rearrangement, a bijection $\sigma$ from the set to itself; $\sigma(i)$ is
the coat person $i$ gets. A **fixed point** is an $i$ with $\sigma(i) = i$. A **derangement** is a permutation with no
fixed point. Write $D_n$ for the number of derangements of $n$ things.

Small cases by hand. $D_1 = 0$ (one person must get their own coat). $D_2 = 1$ (swap). $D_3 = 2$: the arrangements
$231$ and $312$ (writing $\sigma(1)\sigma(2)\sigma(3)$). For $n = 4$ listing is already tedious, so count instead.

**The formula.** The universe is all $n!$ permutations. Let $A_i$ be the permutations that fix $i$. A permutation in
$A_S$ fixes every element of $S$, where $|S| = k$, and can do anything with the other $n - k$ elements, so
$|A_S| = (n - k)!$. This is the symmetric case of §5.2:

$$
D_n = \sum_{k=0}^{n} (-1)^k \binom{n}{k} (n - k)! = \sum_{k=0}^{n} (-1)^k \frac{n!}{k!} = n! \left( 1 - \frac{1}{1!} + \frac{1}{2!} - \frac{1}{3!} + \dots + \frac{(-1)^n}{n!} \right).
$$

For $n = 4$: $24 - 24 + 12 - 4 + 1 = 9$. For $n = 5$: $120 - 120 + 60 - 20 + 5 - 1 = 44$.

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| $D_n$ | 0 | 1 | 2 | 9 | 44 | 265 | 1854 | 14833 | 133496 | 1334961 |

**Where $1/e$ comes from.** The bracket is the start of the series for $e^{-1}$:

$$
e^{-1} = \sum_{k=0}^{\infty} \frac{(-1)^k}{k!} = 1 - 1 + \frac{1}{2} - \frac{1}{6} + \frac{1}{24} - \dots
$$

So the chance that a random permutation is a derangement, $D_n/n!$, tends to $1/e \approx 0.367879$ as $n$ grows.
And it gets there extremely fast: for an alternating series whose terms shrink, the error after stopping is smaller
than the first term left out, so

$$
\left| \frac{D_n}{n!} - \frac{1}{e} \right| < \frac{1}{(n+1)!} .
$$

Multiply by $n!$: $|D_n - n!/e| < 1/(n+1) \le 1/2$ for $n \ge 1$. Since $D_n$ is a whole number, **$D_n$ is the
nearest whole number to $n!/e$.** For $n = 10$, $10!/e \approx 1334960.92$, and $D_{10} = 1334961$.

So with ten coats the chance nobody gets their own is $1334961/3628800 \approx 0.36788$, and with a thousand coats it
is the same to hundreds of decimal places. The answer barely depends on $n$: about 37 percent.

**Check.** Count the derangements of 5 by brute force:
`from itertools import permutations; sum(all(p[i] != i for i in range(5)) for p in permutations(range(5)))` gives 44.

### A recurrence, by a combinatorial argument

The formula is not the only route. Here is a recurrence with a direct proof:

$$
D_n = (n - 1)\,(D_{n-1} + D_{n-2}) \qquad (n \ge 2), \qquad D_0 = 1, \ D_1 = 0 .
$$

**Proof.** In a derangement of $\{1, \dots, n\}$, person $n$ gets someone else's coat, say coat $j$, with $j \ne n$:
$n - 1$ choices. Fix $j$. Now there are two kinds of derangement.

1. Person $j$ gets coat $n$ (the two swap). The other $n - 2$ people must form a derangement among themselves:
   $D_{n-2}$ ways.
2. Person $j$ does not get coat $n$. Then pretend coat $n$ is "person $j$'s own coat": the $n - 1$ people other than
   $n$ must take the $n - 1$ coats other than $j$, with each person avoiding their "own" coat (person $j$ avoiding coat
   $n$). That is a derangement of $n - 1$ things: $D_{n-1}$ ways.

Together, $(n - 1)(D_{n-1} + D_{n-2})$. $\square$

**Check.** $D_6 = 5(44 + 9) = 265$, matching the table.

From the recurrence one can also show $D_n = n D_{n-1} + (-1)^n$ (exercise 4), a second way to fill the table.

### History

The problem of counting permutations with no fixed point is usually traced to Pierre Rémond de Montmort, who studied
a card game called *treize* ("thirteen") in his *Essay d'analyse sur les jeux de hazard* (1708): a player turns over
cards counting one, two, three, ..., and loses if no card matches its count. Montmort and Nicolaus Bernoulli
corresponded about it, and the answer, with its limit $1/e$, was known by the 1710s. In French it is still called the
*problème des rencontres* ("the problem of coincidences"). The general inclusion-exclusion formula was used by
Abraham de Moivre in the same period and stated in general form by many later writers, J. J. Sylvester among them in
the nineteenth century.

## 5.4 Onto functions

*Level: intermediate.*

A manager has 5 different jobs to hand out to 3 workers. Each job goes to one worker. In how many ways can she do it
so that **every worker gets at least one job**?

A **function** $f$ from a set $X$ to a set $Y$ assigns to each $x \in X$ one value $f(x) \in Y$. With $|X| = n$ and
$|Y| = k$ there are $k^n$ functions (each of the $n$ elements has $k$ choices). A function is **onto** (or
**surjective**) if every element of $Y$ is a value, that is, nobody in $Y$ is left out.

Count the functions that are not onto, by inclusion-exclusion over the elements of $Y$ that are missed. Let $A_y$ be
the functions that never take the value $y$. Functions in $A_S$, where $|S| = j$, miss all $j$ values in $S$, so they
map into the remaining $k - j$ values: $(k - j)^n$ of them. The symmetric form gives

$$
\operatorname{Onto}(n, k) = \sum_{j=0}^{k} (-1)^j \binom{k}{j} (k - j)^n .
$$

For the manager: $\operatorname{Onto}(5, 3) = 3^5 - 3 \cdot 2^5 + 3 \cdot 1^5 - 0 = 243 - 96 + 3 = 150$.

**Check by another route.** The job counts per worker must be $3 + 1 + 1$ or $2 + 2 + 1$ in some order.
For $3 + 1 + 1$: choose the worker with 3 jobs (3 ways), choose her 3 jobs ($\binom{5}{3} = 10$), then hand the last two
jobs to the other two workers ($2$ ways): $60$. For $2 + 2 + 1$: choose the worker with 1 job (3 ways), choose that job
(5 ways), then split the other 4 jobs into a pair for each of the remaining two workers ($\binom{4}{2} = 6$): $90$.
Total $150$.

**Two facts that fall out.**

1. If $n < k$ there is no onto function (not enough jobs to go round), so the sum is $0$. For example
   $\sum_{j=0}^{3}(-1)^j\binom{3}{j}(3-j)^2 = 9 - 12 + 3 - 0 = 0$. This is a non-obvious identity, proved for free.
2. If $n = k$, onto functions are the bijections, so $\sum_{j=0}^{n}(-1)^j\binom{n}{j}(n - j)^n = n!$. For $n = 3$:
   $27 - 24 + 3 - 0 = 6$.

**Stirling numbers of the second kind.** An onto function from $n$ jobs to $k$ workers splits the jobs into $k$
non-empty groups (the jobs each worker gets) and then says which worker gets which group. If the workers were
identical, only the split would matter. The number of ways to split an $n$-element set into $k$ non-empty unlabelled
blocks is the **Stirling number of the second kind** $S(n, k)$, written $\left\{ {n \atop k} \right\}$ by many authors.
Since the $k$ blocks can be given to the $k$ workers in $k!$ ways,

$$
\operatorname{Onto}(n, k) = k!\, S(n, k), \qquad S(n, k) = \frac{1}{k!} \sum_{j=0}^{k} (-1)^j \binom{k}{j} (k - j)^n .
$$

For example $S(5, 3) = 150/6 = 25$. [Chapter 9](09-Stirling-Numbers-and-Partitions.md) studies these numbers properly.

**Worked example: a die shows every face.** Roll a fair die 10 times. What is the chance that all six faces appear?

The outcomes are the $6^{10}$ functions from the 10 rolls to the 6 faces, all equally likely, and the good ones are
the onto functions:

$$
\operatorname{Onto}(10, 6) = 6^{10} - 6\cdot 5^{10} + 15 \cdot 4^{10} - 20 \cdot 3^{10} + 15 \cdot 2^{10} - 6 \cdot 1 = 16{,}435{,}440 .
$$

Divided by $6^{10} = 60{,}466{,}176$, that is about $0.272$. Even with 10 rolls, there is a better than 70 percent
chance some face is missing. (This is the "coupon collector" question; on average you need $6(1 + \tfrac12 + \dots +
\tfrac16) = 14.7$ rolls to see all six faces.)

**Try it in Python.**

```python
from math import comb

def onto(n, k):
    return sum((-1)**j * comb(k, j) * (k - j)**n for j in range(k + 1))

print(onto(5, 3), onto(10, 6), onto(10, 6) / 6**10)   # 150 16435440 0.2718...
```

## 5.5 Euler's phi function again

*Level: intermediate, with an advanced ending.*

**Euler's phi function** $\varphi(n)$ counts the numbers in $1, \dots, n$ that are **coprime** to $n$ (share no
factor with $n$ larger than 1). For example $\varphi(12) = 4$: the numbers $1, 5, 7, 11$. It is central in number theory
([Number Theory, Chapter 5](../number-theory/05-Fermat-Euler-and-Wilson.md)) and in RSA cryptography, and inclusion-
exclusion gives its formula in a few lines.

!!! note "Theorem"
    If $n$ has distinct prime factors $p_1, \dots, p_r$, then $\varphi(n) = n \left(1 - \frac{1}{p_1}\right)\left(1 - \frac{1}{p_2}\right)\cdots\left(1 - \frac{1}{p_r}\right)$.

**Proof.** A number $m \le n$ fails to be coprime to $n$ exactly when some prime $p_i$ divides both, so the numbers we
want are the ones in none of the sets $A_i = \{m \le n : p_i \mid m\}$ (read $p \mid m$ as "$p$ divides $m$").
For a set $S$ of indices, $A_S$ is the multiples of $d_S = \prod_{i \in S} p_i$, and since $d_S$ divides $n$ there are
exactly $n/d_S$ of them, with no rounding. So

$$
\varphi(n) = \sum_{S \subseteq \{1,\dots,r\}} (-1)^{|S|} \frac{n}{\prod_{i \in S} p_i} = n \prod_{i=1}^{r} \left(1 - \frac{1}{p_i}\right) .
$$

The last step is just expanding the product: choosing either $1$ or $-1/p_i$ from each bracket gives exactly the terms
of the sum. $\square$

**Worked example.** $360 = 2^3 \cdot 3^2 \cdot 5$, so
$\varphi(360) = 360 \cdot \tfrac12 \cdot \tfrac23 \cdot \tfrac45 = 96$.

**Check.** `from math import gcd; sum(gcd(m, 360) == 1 for m in range(1, 361))` gives 96.

The same expansion shows something deeper. Each term $n/d$ in the sum comes with sign $(-1)^{(\text{number of primes in } d)}$,
and only squarefree divisors $d$ (products of distinct primes) appear. That sign is the **Möbius function**:
$\mu(d) = (-1)^r$ if $d$ is a product of $r$ distinct primes, and $\mu(d) = 0$ if a square divides $d$. So

$$
\varphi(n) = \sum_{d \mid n} \mu(d) \frac{n}{d} .
$$

[Number Theory, Chapter 6](../number-theory/06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md) builds
Möbius inversion from this point of view; here you can see that it is inclusion-exclusion in disguise.

### The sieve of Eratosthenes, counted

How many primes are there up to 100? The **sieve of Eratosthenes** crosses out the multiples of 2, 3, 5 and 7 (the
primes up to $\sqrt{100} = 10$). Every composite number up to 100 has a prime factor at most 10, so what survives,
apart from 1, is the primes bigger than 7. Inclusion-exclusion counts the survivors without listing them:

$$
100 - (50 + 33 + 20 + 14) + (16 + 10 + 7 + 6 + 4 + 2) - (3 + 2 + 1 + 0) + 0 = 22 .
$$

(The pairs are the multiples of 6, 10, 14, 15, 21, 35; the triples of 30, 42, 70, 105; the quadruple of 210.) The 22
survivors are 1 and 21 primes larger than 7. Adding back 2, 3, 5, 7 gives $21 + 4 = 25$ primes up to 100, which is
right.

This is **Legendre's formula** (Adrien-Marie Legendre, around 1800): with $P$ the product of the primes up to
$\sqrt{x}$,

$$
\pi(x) - \pi(\sqrt{x}) + 1 = \sum_{d \mid P} \mu(d) \left\lfloor \frac{x}{d} \right\rfloor ,
$$

where $\pi(x)$ is the number of primes up to $x$.

**Why it stops being useful (advanced).** Without the floors, the sum would be exactly $x \prod_p (1 - 1/p)$, a nice
smooth main term. Each floor introduces an error less than 1, but there are $2^{\pi(\sqrt{x})}$ terms, far more than
$x$ itself once $x$ is large. The errors swamp the answer. Making sieves work despite this, by truncating the
inclusion-exclusion cleverly with Bonferroni-type bounds, is the subject of modern sieve theory (Brun, Selberg and
many others); [Number Theory, Chapter 13](../number-theory/13-How-Primes-Are-Spread.md) tells part of that story.

## 5.6 Rook polynomials and forbidden positions

*Level: advanced.*

Four volunteers, Ana, Ben, Cy and Dee, are to be given four tasks, one each, numbered 1 to 4. Some pairings are not
allowed: Ana cannot do tasks 1 or 2, Ben cannot do task 2, Cy cannot do task 3, and Dee cannot do tasks 3 or 4. How
many assignments are possible?

Draw a $4 \times 4$ grid, rows for people and columns for tasks, and shade the forbidden squares. An assignment is a
permutation, which is the same as placing 4 **rooks** (chess castles) on the grid so that no two share a row or a
column: no two rooks "attack" each other. We want the placements that avoid every shaded square.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 220" role="img" aria-label="A 4 by 4 board with rows Ana, Ben, Cy, Dee and columns 1 to 4. Shaded forbidden squares: Ana 1, Ana 2, Ben 2 in orange (top-left block), and Cy 3, Dee 3, Dee 4 in blue (bottom-right block).">
  <g fill="#eea66f">
    <rect x="80" y="20" width="40" height="40"/>
    <rect x="120" y="20" width="40" height="40"/>
    <rect x="120" y="60" width="40" height="40"/>
  </g>
  <g fill="#9cc9ea">
    <rect x="160" y="100" width="40" height="40"/>
    <rect x="160" y="140" width="40" height="40"/>
    <rect x="200" y="140" width="40" height="40"/>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.5">
    <rect x="80" y="20" width="160" height="160"/>
    <line x1="120" y1="20" x2="120" y2="180"/><line x1="160" y1="20" x2="160" y2="180"/><line x1="200" y1="20" x2="200" y2="180"/>
    <line x1="80" y1="60" x2="240" y2="60"/><line x1="80" y1="100" x2="240" y2="100"/><line x1="80" y1="140" x2="240" y2="140"/>
  </g>
  <g fill="currentColor" font-size="14" text-anchor="end">
    <text x="72" y="45">Ana</text><text x="72" y="85">Ben</text><text x="72" y="125">Cy</text><text x="72" y="165">Dee</text>
  </g>
  <g fill="currentColor" font-size="14" text-anchor="middle">
    <text x="100" y="205">1</text><text x="140" y="205">2</text><text x="180" y="205">3</text><text x="220" y="205">4</text>
  </g>
</svg>
</div>

**The general theorem.** Let $B$ be a set of forbidden squares (a **board**) inside an $n \times n$ grid. Let $r_k(B)$
be the number of ways to put $k$ non-attacking rooks on squares of $B$ (with $r_0(B) = 1$). The **rook polynomial** of
$B$ is

$$
R_B(x) = \sum_{k \ge 0} r_k(B)\, x^k .
$$

!!! note "Theorem (permutations with forbidden positions)"
    The number of permutations of $n$ things that use no square of $B$ is $\sum_{k=0}^{n} (-1)^k\, r_k(B)\, (n - k)!$.

**Proof.** The universe is all $n!$ permutations, thought of as placements of $n$ non-attacking rooks on the full
grid. For each forbidden square $s \in B$, let $A_s$ be the permutations that put a rook on $s$. For a set $T$ of
forbidden squares, $A_T$ is the set of permutations using all of them. If two squares of $T$ share a row or column, no
permutation uses both, so $|A_T| = 0$. Otherwise $T$ is a set of $k = |T|$ non-attacking rooks; they fill $k$ rows and
$k$ columns, and the rest of the permutation is any arrangement of the other $n - k$ rows and columns: $(n - k)!$
ways. By the "none of them" form,

$$
\#\{\text{permutations avoiding } B\} = \sum_{T \subseteq B} (-1)^{|T|} |A_T| = \sum_{k} (-1)^k\, r_k(B)\, (n - k)! . \qquad \square
$$

**Derangements are a special case.** For derangements the board is the diagonal: $B = \{(i, i)\}$. Any $k$ diagonal
squares are non-attacking, so $r_k = \binom{n}{k}$, and the theorem gives the formula of §5.3.

### Computing rook polynomials

Two rules make $R_B$ easy to find.

**Rule 1 (split boards).** If $B$ splits into two parts $B_1$ and $B_2$ that share no row and no column, then
$R_B(x) = R_{B_1}(x)\, R_{B_2}(x)$.

*Why:* rooks on $B_1$ never attack rooks on $B_2$, so a placement of $k$ rooks on $B$ is a placement of $i$ on $B_1$
together with $k - i$ on $B_2$, for some $i$. That gives $r_k(B) = \sum_i r_i(B_1)\, r_{k-i}(B_2)$, which is exactly
the rule for multiplying polynomials.

**Rule 2 (pick a square).** For any square $s$ of $B$, $R_B(x) = R_{B - s}(x) + x\, R_{B_s}(x)$, where $B - s$ is $B$
with $s$ removed, and $B_s$ is $B$ with the whole row and column of $s$ removed.

*Why:* a placement either leaves $s$ empty (a placement on $B - s$) or puts a rook on $s$ (one rook there, and the
others on squares not attacked by it, which form $B_s$).

**Back to the volunteers.** The forbidden squares split into $B_1 = \{$Ana 1, Ana 2, Ben 2$\}$ (rows Ana, Ben; columns
1, 2) and $B_2 = \{$Cy 3, Dee 3, Dee 4$\}$ (rows Cy, Dee; columns 3, 4). They share no row or column.

For $B_1$: one rook can go on any of 3 squares; two non-attacking rooks must be Ana 1 and Ben 2 (the only pair not in
a common row or column). So $R_{B_1}(x) = 1 + 3x + x^2$. By the same reasoning $R_{B_2}(x) = 1 + 3x + x^2$ (only Cy 3
with Dee 4). By Rule 1,

$$
R_B(x) = (1 + 3x + x^2)^2 = 1 + 6x + 11x^2 + 6x^3 + x^4 .
$$

So the number of allowed assignments is

$$
4! - 6 \cdot 3! + 11 \cdot 2! - 6 \cdot 1! + 1 \cdot 0! = 24 - 36 + 22 - 6 + 1 = 5 .
$$

**Check.** List them. Ana must do 3 or 4.
If Ana does 3: Dee cannot do 3 or 4 and 3 is taken, so Dee does 1 or 2. Dee 1: Ben and Cy share tasks 2 and 4, Ben
cannot do 2, so Ben 4, Cy 2. Dee 2: Ben and Cy share 1 and 4: Ben 1, Cy 4 or Ben 4, Cy 1. That is 3.
If Ana does 4: Dee does 1 or 2. Dee 1: Ben and Cy share 2 and 3; Ben cannot do 2 and Cy cannot do 3, so this fails.
Dee 2: Ben and Cy share 1 and 3: Ben 3, Cy 1 (Cy cannot do 3). That is 2.
Total 5.

### The ménage problem

A famous problem where this method shines: $n$ married couples sit around a round table, men and women alternating,
and no one sits next to their own spouse. Seat the women first; then the question is how many ways to seat the men in
the $n$ gaps so that no man is in either of the two gaps next to his wife. With the right numbering, man $i$ may not take
gap $i$ or gap $i+1$ (counting mod $n$). The forbidden board is a "staircase" of $2n$ squares that wraps around, and
one can show its rook numbers are

$$
r_k = \frac{2n}{2n - k} \binom{2n - k}{k} .
$$

(The idea: the $2n$ forbidden squares, read in order around the staircase, form a cycle in which two squares attack
each other exactly when they are neighbours, and $\frac{2n}{2n-k}\binom{2n-k}{k}$ counts the ways to choose $k$ points
of a $2n$-cycle with no two adjacent.) That gives **Touchard's formula** (Jacques Touchard, 1934) for the number of ways
to seat the men:

$$
U_n = \sum_{k=0}^{n} (-1)^k \frac{2n}{2n - k}\binom{2n - k}{k} (n - k)! ,
$$

so $U_3 = 1$, $U_4 = 2$, $U_5 = 13$, $U_6 = 80$, $U_7 = 579$. The question goes back to Édouard Lucas in 1891, and the
rook-polynomial view of it, and the name "rook polynomial", come from Irving Kaplansky and John Riordan in 1946.

**Check.** A brute-force count of permutations $p$ of $\{0, \dots, n-1\}$ with $p(i) \ne i$ and $p(i) \ne i + 1 \bmod n$
gives 1, 2, 13, 80, 579 for $n = 3, \dots, 7$.

### Beyond: inclusion-exclusion on a poset

*Level: expert, a sketch.* Everything in this chapter is one instance of a general idea. Suppose you have a function $g$
on subsets of a finite set and you define $f(S) = \sum_{T \supseteq S} g(T)$ ("$f(S)$ counts the objects having at least
the properties in $S$"). Then you can recover $g$ by $g(S) = \sum_{T \supseteq S} (-1)^{|T| - |S|} f(T)$ ("exactly the
properties in $S$"). Taking $S = \emptyset$ is the "none of them" formula. Gian-Carlo Rota showed in 1964 ("On the
foundations of combinatorial theory I") that this works on any finite **partially ordered set**, with $(-1)^{|T|-|S|}$
replaced by its **Möbius function**; on the divisors of $n$ ordered by divisibility it is the number-theoretic $\mu$ of
§5.5. This is why inclusion-exclusion and Möbius inversion are the same idea.

## Check yourself

??? question "1. How many numbers from 1 to 600 are divisible by 4 or 6?"

    Multiples of 4: $150$. Multiples of 6: $100$. Divisible by both means divisible by $\operatorname{lcm}(4, 6) = 12$
    (not 24, a common slip): $50$. So $150 + 100 - 50 = 200$.

??? question "2. How many 5-letter strings over the alphabet {a, b, c} use every letter at least once?"

    These are onto functions from 5 positions to 3 letters: $3^5 - 3 \cdot 2^5 + 3 \cdot 1^5 = 243 - 96 + 3 = 150$.

??? question "3. In how many ways can the letters of WORD be rearranged so that no letter stays in its place? And for BANANA, how many arrangements have no two equal letters together? (Only the first needs this chapter; the second is a harder challenge.)"

    WORD has 4 distinct letters, so the answer is $D_4 = 9$.

    For BANANA (letters A, A, A, N, N, B) a direct count is quickest. With three A's among 6 places and no two
    adjacent, the A's must sit at positions
    $\{1,3,5\}$, $\{1,3,6\}$, $\{1,4,6\}$ or $\{2,4,6\}$. The other three positions get N, N, B (3 orders each) but
    the two N's must not be adjacent. For $\{1,3,5\}$ the free positions are 2, 4, 6 (none adjacent): 3 orders.
    For $\{2,4,6\}$, free 1, 3, 5: 3. For $\{1,3,6\}$, free 2, 4, 5: N's must avoid $\{4,5\}$, so B is at 4 or 5:
    2 orders. For $\{1,4,6\}$, free 2, 3, 5: B at 2 or 3: 2. Total $3 + 3 + 2 + 2 = 10$.

??? question "4. Show that $D_n = n D_{n-1} + (-1)^n$ for $n \ge 1$."

    From the formula, $D_n = n! \sum_{k=0}^{n} (-1)^k/k!$ and $n D_{n-1} = n \cdot (n-1)! \sum_{k=0}^{n-1}
    (-1)^k/k! = n! \sum_{k=0}^{n-1} (-1)^k/k!$. The difference is the last term $n! \cdot (-1)^n/n! = (-1)^n$.
    Check: $D_5 = 5 \cdot 9 - 1 = 44$.

??? question "5. Eight letters are put at random into eight addressed envelopes. What is the probability that exactly two letters are in the right envelope?"

    Choose the two that are right: $\binom{8}{2} = 28$. The other six must all be wrong: $D_6 = 265$. So
    $28 \cdot 265 = 7420$ of the $8! = 40320$ arrangements, probability $7420/40320 \approx 0.184$. (In general it
    tends to $e^{-1}/2! \approx 0.184$: the number of fixed points of a random permutation is close to a Poisson
    distribution with mean 1.)

??? question "6. How many solutions does $x_1 + x_2 + x_3 = 15$ have in whole numbers $0 \le x_i \le 6$?"

    Without the upper bounds, stars and bars gives $\binom{17}{2} = 136$. Let $A_i$ be the solutions with
    $x_i \ge 7$; substituting $x_i' = x_i - 7$ leaves a sum of 8: $\binom{10}{2} = 45$ each. Two of them at least 7
    leaves a sum of 1: $\binom{3}{2} = 3$ for each pair. All three at least 7 would need a sum of at least 21: 0.
    So $136 - 3 \cdot 45 + 3 \cdot 3 - 0 = 10$. Check: the solutions are the permutations of $(6,6,3)$ (3),
    $(6,5,4)$ (6) and $(5,5,5)$ (1): 10.

??? question "7. Compute $\varphi(1001)$ and $\varphi(100)$ by the product formula."

    $1001 = 7 \cdot 11 \cdot 13$, so $\varphi = 1001 \cdot \tfrac67 \cdot \tfrac{10}{11} \cdot \tfrac{12}{13} =
    6 \cdot 10 \cdot 12 = 720$. $100 = 2^2 \cdot 5^2$, so $\varphi = 100 \cdot \tfrac12 \cdot \tfrac45 = 40$.

??? question "8. A permutation of 1, ..., 6 is chosen at random. What is the probability that 1 is not followed immediately by 2, 2 not immediately by 3, ..., 5 not immediately by 6?"

    Let $A_i$ be "$i$ is immediately followed by $i+1$", $i = 1, \dots, 5$. If $S$ has $k$ of these conditions, glue
    each required pair together; the conditions link into chains, and in every case the $6$ numbers become $6 - k$
    blocks, which can be ordered in $(6-k)!$ ways. So the count is $\sum_{k=0}^{5} (-1)^k \binom{5}{k} (6-k)! =
    720 - 600 + 240 - 60 + 10 - 1 = 309$, probability $309/720 \approx 0.429$.

??? question "9. Find the rook polynomial of the 2 by 2 board (all four squares) and of the board of three squares {(1,1), (1,2), (2,1)}."

    $2 \times 2$: one rook, 4 ways; two non-attacking rooks, 2 ways (the two diagonals). $R = 1 + 4x + 2x^2$.
    The L-shape: one rook, 3 ways; two rooks must avoid sharing a row or column, and only $(1,2)$ with $(2,1)$
    works. $R = 1 + 3x + x^2$. Check the second with Rule 2 on $s = (1,1)$: $B - s = \{(1,2),(2,1)\}$ has
    $R = 1 + 2x + x^2$, $B_s$ is empty with $R = 1$, and $1 + 2x + x^2 + x = 1 + 3x + x^2$.

??? question "10. Use the full 4 by 4 board with forbidden squares (1,1), (1,2), (2,1), (2,2), (3,3), (4,4) to count the permutations avoiding them."

    The board splits into the $2 \times 2$ block (rows and columns 1, 2) and the two separate squares $(3,3)$ and
    $(4,4)$. So $R = (1 + 4x + 2x^2)(1 + x)^2 = 1 + 6x + 11x^2 + 8x^3 + 2x^4$. The count is
    $24 - 6 \cdot 6 + 11 \cdot 2 - 8 \cdot 1 + 2 \cdot 1 = 4$. Check: positions 1, 2 must get values from $\{3,4\}$
    (2 ways), and then 3, 4 get $\{1,2\}$ with no restriction left (2 ways): $4$.

??? question "11. Prove that $\sum_{j=0}^{k} (-1)^j \binom{k}{j} (k-j)^n = 0$ whenever $n < k$, using a counting argument."

    The sum is the number of onto functions from an $n$-element set to a $k$-element set, by §5.4. An onto function
    has at least $k$ different values, but a set of $n < k$ elements has at most $n$ values. So there are none.

??? question "12. (Harder.) Show that the number of permutations of $1, \dots, n$ with exactly $j$ fixed points is $\binom{n}{j} D_{n-j}$, and deduce that the average number of fixed points of a random permutation is exactly 1."

    Choose the $j$ fixed points, $\binom{n}{j}$ ways, then derange the rest, $D_{n-j}$ ways. For the average, a slicker
    route is linearity of expectation: the number of fixed points is $\sum_i X_i$ where $X_i = 1$ if $\sigma(i) = i$.
    Each $X_i$ is 1 for $(n-1)!$ of the $n!$ permutations, so has average $1/n$, and the total average is
    $n \cdot 1/n = 1$. (Equivalently $\sum_j j \binom{n}{j} D_{n-j} = n!$; for $n = 4$: $1 \cdot 4 \cdot 2 + 2 \cdot 6
    \cdot 1 + 3 \cdot 4 \cdot 0 + 4 \cdot 1 \cdot 1 = 8 + 12 + 0 + 4 = 24$.)

## What you learned

- To count a union, add the single sizes, subtract the pairwise overlaps, add the triple overlaps, and so on; the
  proof counts how often each element is counted, using $\sum_k (-1)^k\binom{m}{k} = 0$.
- The "none of the properties" form $\sum_S (-1)^{|S|}|A_S|$ is the one to use, and when $|A_S|$ depends only on
  $|S|$ it becomes $\sum_k (-1)^k\binom{n}{k}N_k$.
- Stopping early gives the Bonferroni inequalities, starting with the union bound.
- Derangements: $D_n = n!\sum_k (-1)^k/k!$, the nearest integer to $n!/e$; about 37 percent of permutations have no
  fixed point, whatever $n$ is.
- Onto functions: $\sum_j (-1)^j\binom{k}{j}(k-j)^n = k!\,S(n,k)$, which introduces the Stirling numbers.
- Euler's $\varphi(n) = n\prod_{p \mid n}(1 - 1/p)$ and Legendre's prime sieve are inclusion-exclusion, and the
  Möbius function is its sign pattern.
- Rook polynomials count permutations that avoid a board of forbidden squares, with derangements and the ménage
  problem as examples.

**Next:** [Chapter 6](06-Recurrences.md), counting by breaking a problem into smaller copies of itself and solving
the recurrences that result.

## Further reading

- R. A. Brualdi, *Introductory Combinatorics*, 5th ed., 2010 (inclusion-exclusion, derangements and rook polynomials
  at an accessible pace).
- J. Riordan, *An Introduction to Combinatorial Analysis*, 1958 (the classic source for rook polynomials and ménage
  numbers).
- I. Kaplansky and J. Riordan, "The problem of the rooks and its applications", *Duke Mathematical Journal* 13, 1946.
- R. P. Stanley, *Enumerative Combinatorics, Volume 1*, 2nd ed., 2012 (Chapter 2 on the sieve methods, Chapter 3 on
  Möbius inversion on posets).
- G.-C. Rota, "On the foundations of combinatorial theory I: Theory of Möbius functions", *Zeitschrift für
  Wahrscheinlichkeitstheorie* 2, 1964.
- J. H. van Lint and R. M. Wilson, *A Course in Combinatorics*, 2nd ed., 2001 (Chapter 10).
- On this site: the gentler lessons [Counting the rest](../../topics/counting/level-3/03-counting-the-rest.md),
  [Inclusion-exclusion](../../topics/counting/level-6/01-inclusion-exclusion.md) and
  [Derangements](../../topics/counting/level-8/03-derangements.md);
  [Number Theory, Chapter 6](../number-theory/06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md) for
  Möbius inversion; [Number Theory, Chapter 5](../number-theory/05-Fermat-Euler-and-Wilson.md) for Euler's
  theorem; and the cryptography book's [RSA chapter](https://cryptography.akadian.ca/book/13-RSA/), where
  $\varphi(n)$ for $n = pq$ is the secret that makes the private key.
