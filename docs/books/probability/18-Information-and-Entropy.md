# 18. Information and entropy

*How much information is there in the result of a coin toss, a die roll, or a page of English? How far can a file be
compressed, and how fast can you send messages through a channel that flips some of your bits? In 1948 Claude Shannon
answered all three with one quantity, the entropy of a probability distribution, and two theorems that set limits no
engineer can beat. In this chapter you will define entropy from the idea of surprise, prove that the uniform
distribution has the most of it, build prefix codes and Huffman codes and prove the Kraft inequality, see why entropy
is the limit of compression, compute the capacity of a noisy binary channel, see why spacecraft at Mars use
error-correcting codes, and meet the Kullback-Leibler divergence, the measure of how far one distribution is from
another.*

!!! abstract "In this chapter"
    **You will learn:**

    - surprise $\log_2(1/p)$, entropy as average surprise, and joint, conditional and mutual information
    - why entropy is at most $\log_2 n$, with equality only for the uniform distribution (proof by Jensen's inequality)
    - prefix codes, the Kraft inequality (proof), Huffman's algorithm, and the bounds $H \le L < H + 1$ (proofs)
    - the asymptotic equipartition property and the source coding theorem
    - channel capacity, with the binary symmetric channel worked in full, and the channel coding theorem
    - why deep-space links to Mars and beyond use error-correcting codes
    - the Kullback-Leibler divergence, Gibbs' inequality, and its link to Chernoff bounds

    **You need:** expectation ([Chapter 6](06-Expectation-and-Variance.md)), the weak law and Chernoff bounds
    ([Chapter 7](07-Inequalities-and-the-Law-of-Large-Numbers.md)), and logarithms. Calculus helps for the
    concavity facts in 18.2. Chapter 17 is not needed.

    **Levels:** 18.1 is intermediate; 18.2 to 18.5 are advanced; 18.6 is advanced to expert.

## 18.1 Surprise and entropy

*Level: intermediate.*

### How many questions?

A friend thinks of a whole number from 1 to 100. You may ask yes/no questions. How many do you need? Halving the
range each time ("Is it at most 50?") finds the number in $\lceil \log_2 100 \rceil = 7$ questions, and no strategy
does better in the worst case, since 6 questions have only $2^6 = 64$ answer patterns. If the number were from 1 to
$2^k$, exactly $k$ questions are needed. So it is natural to say that learning one of $2^k$ equally likely things gives
$k$ **bits** of information, and one of $n$ equally likely things gives $\log_2 n$ bits. (Ralph Hartley proposed the
logarithm as the measure of information in 1928.)

But what if the possibilities are not equally likely? Suppose your friend picks "1" half the time and otherwise a
number from 2 to 100. Then "Is it 1?" settles the matter half the time with one question. The answer depends on the
probabilities.

### Surprise

**Definition.** The **surprise** (or **self-information**) of an outcome with probability $p$ is

$$
s(p) = \log_2 \frac{1}{p} \quad \text{bits}.
$$

A sure thing ($p = 1$) carries 0 bits; a fair coin's result carries 1 bit; one of 1024 equally likely outcomes, 10
bits; a one-in-a-million event, about 20 bits. Surprise is the only reasonable measure in one precise sense: if we want
$s$ to be decreasing, continuous, and **additive for independent events** ($s(pq) = s(p) + s(q)$, since learning two
independent facts should add their information), then $s(p) = c \log(1/p)$ for some constant $c$. The base of the
logarithm only chooses the unit: base 2 gives bits, base $e$ gives "nats".

### Entropy

**Definition.** Let $X$ take values $x_1, \ldots, x_n$ with probabilities $p_1, \ldots, p_n$. Its **entropy** is its
average surprise:

$$
H(X) = \sum_{i=1}^{n} p_i \log_2 \frac{1}{p_i} = -\sum_{i=1}^{n} p_i \log_2 p_i ,
$$

with the convention $0 \log_2(1/0) = 0$ (an impossible outcome contributes nothing; this matches the limit
$p \log(1/p) \to 0$ as $p \to 0$). Entropy depends only on the probabilities, not on the values: a coin labelled 0 and
1 has the same entropy as one labelled heads and tails.

**Worked example 1.**

- A fair coin: $H = \frac12 \cdot 1 + \frac12 \cdot 1 = 1$ bit.
- A fair die: $H = \log_2 6 \approx 2.585$ bits.
- Three outcomes with probabilities $\frac12, \frac14, \frac14$: $H = \frac12 \cdot 1 + \frac14 \cdot 2 +
  \frac14 \cdot 2 = 1.5$ bits.
- A loaded die with a six half the time and each other face $\frac{1}{10}$: $H = \frac12 \cdot 1 + 5 \cdot
  \frac{1}{10}\log_2 10 \approx 0.5 + 1.661 = 2.161$ bits, less than the fair die's 2.585. The loading makes the die
  more predictable.

For a coin with $P(\text{heads}) = p$, the entropy is the **binary entropy function**

$$
h(p) = p \log_2 \frac1p + (1-p)\log_2 \frac{1}{1-p}.
$$

It is 0 at $p = 0$ and $p = 1$ (no uncertainty), rises to 1 at $p = \frac12$, and is symmetric about $\frac12$. A coin
that lands heads 10% of the time has $h(0.1) \approx 0.469$ bits: less than half a bit per toss.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 500 240" role="img" aria-label="Graph of the binary entropy function h of p for p from 0 to 1. It is 0 at both ends and rises to a maximum of 1 bit at p equals one half. The point p equals 0.1, h equals 0.469 is marked">
  <line x1="60" y1="200" x2="470" y2="200" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="200" x2="60" y2="20" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="30" x2="460" y2="30" stroke="currentColor" stroke-dasharray="4 4" stroke-opacity="0.5"/>
  <polyline fill="none" stroke="#eea66f" stroke-width="3" points="60.0,200.0 70.0,171.3 80.0,151.3 90.0,134.7 100.0,120.3 110.0,107.6 120.0,96.3 130.0,86.3 140.0,77.3 150.0,69.2 160.0,62.1 170.0,55.7 180.0,50.2 190.0,45.3 200.0,41.2 210.0,37.7 220.0,34.9 230.0,32.8 240.0,31.2 250.0,30.3 260.0,30.0 270.0,30.3 280.0,31.2 290.0,32.8 300.0,34.9 310.0,37.7 320.0,41.2 330.0,45.3 340.0,50.2 350.0,55.7 360.0,62.1 370.0,69.2 380.0,77.3 390.0,86.3 400.0,96.3 410.0,107.6 420.0,120.3 430.0,134.7 440.0,151.3 450.0,171.3 460.0,200.0"/>
  <line x1="100" y1="200" x2="100" y2="120.3" stroke="#9cc9ea" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="60" y1="120.3" x2="100" y2="120.3" stroke="#9cc9ea" stroke-width="1.5" stroke-dasharray="3 3"/>
  <circle cx="100" cy="120.3" r="4.5" fill="#7ccf9a" stroke="currentColor"/>
  <text x="52" y="204" text-anchor="end" font-size="12" fill="currentColor">0</text>
  <text x="52" y="124" text-anchor="end" font-size="12" fill="currentColor">0.469</text>
  <text x="52" y="34" text-anchor="end" font-size="12" fill="currentColor">1</text>
  <text x="60" y="218" text-anchor="middle" font-size="12" fill="currentColor">0</text>
  <text x="100" y="218" text-anchor="middle" font-size="12" fill="currentColor">0.1</text>
  <text x="260" y="218" text-anchor="middle" font-size="12" fill="currentColor">0.5</text>
  <text x="460" y="218" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <text x="265" y="236" text-anchor="middle" font-size="13" fill="currentColor">p = P(heads)</text>
  <text x="300" y="70" font-size="14" fill="currentColor">h(p) bits</text>
</svg>
</div>

### What entropy measures

Entropy has three readings, and the rest of the chapter shows they agree:

1. **Uncertainty** before you see $X$.
2. **Information** gained when you see it.
3. **The number of bits per symbol** needed, on average, to record a long sequence of independent copies of $X$
   (the source coding theorem, 18.3).

For the three-outcome example, the code a = 0, b = 10, c = 11 uses $\frac12 \cdot 1 + \frac14 \cdot 2 + \frac14 \cdot
2 = 1.5$ bits per symbol on average, exactly $H$. Equivalently it is the question strategy "Is it a? If not, is it
b?". That is no accident: whenever every probability is a power of $\frac12$, a code with lengths $\log_2(1/p_i)$
exists and achieves $H$ exactly.

### Joint and conditional entropy

For two random variables $X$ and $Y$ with joint probabilities $p(x, y)$:

- The **joint entropy** $H(X, Y) = -\sum_{x,y} p(x,y)\log_2 p(x,y)$ is the entropy of the pair.
- The **conditional entropy** $H(Y \mid X) = \sum_x p(x)\, H(Y \mid X = x)$ is the average uncertainty left in $Y$ once
  $X$ is known, where $H(Y \mid X = x)$ is the entropy of the conditional distribution $p(y \mid x)$.
- The **mutual information** $I(X; Y) = H(Y) - H(Y \mid X)$ is how much knowing $X$ reduces the uncertainty in $Y$.

**Theorem 18.1 (chain rule).** $H(X, Y) = H(X) + H(Y \mid X)$.

*Proof.* Since $p(x,y) = p(x)\,p(y \mid x)$, take $-\log_2$ of both sides and average over $(X, Y)$:
$-\log_2 p(X,Y) = -\log_2 p(X) - \log_2 p(Y \mid X)$. The average of the left side is $H(X,Y)$, of the first term on
the right $H(X)$, and of the second $\sum_x p(x)\sum_y p(y \mid x)\log_2 (1/p(y\mid x)) = H(Y \mid X)$. $\square$

Exchanging the roles of $X$ and $Y$ gives $H(X) + H(Y \mid X) = H(Y) + H(X \mid Y)$, so
$I(X;Y) = H(X) + H(Y) - H(X,Y)$ is symmetric: $X$ tells you as much about $Y$ as $Y$ tells you about $X$.

**Worked example 2 (two dice).** Roll two fair dice. The pair $(D_1, D_2)$ has 36 equally likely values, so
$H(D_1, D_2) = \log_2 36 \approx 5.170$ bits. The sum $S = D_1 + D_2$ has probabilities $1, 2, 3, 4, 5, 6, 5, 4, 3,
2, 1$ over 36, and its entropy works out to about $3.274$ bits. Since the pair determines the sum,
$H(D_1, D_2) = H(S) + H(D_1, D_2 \mid S)$ by the chain rule, so about $5.170 - 3.274 = 1.896$ bits of uncertainty about
the pair remain after you learn the sum. *Check:* if the sum is 2 or 12, nothing remains; if it is 7, six equally
likely pairs remain, $\log_2 6 \approx 2.585$ bits.

### Try it in Python

```python
from math import log2
from collections import Counter

def H(probs):
    return -sum(p * log2(p) for p in probs if p > 0)

sums = Counter(a + b for a in range(1, 7) for b in range(1, 7))
print(H([1/36] * 36))                      # 5.1699...
print(H([c / 36 for c in sums.values()]))  # 3.2744...
```

## 18.2 Properties of entropy

*Level: advanced.*

The key tool is **Jensen's inequality**. A function $f$ is **concave** if every chord lies below its graph:
$f(tx + (1-t)y) \ge t f(x) + (1-t) f(y)$ for $0 \le t \le 1$. The logarithm is concave (its second derivative
$-1/(x^2 \ln 2)$ is negative). Jensen's inequality says that for a concave $f$ and any random variable $Z$,

$$
E[f(Z)] \le f(E[Z]),
$$

with equality for a strictly concave $f$ (like $\log$) only when $Z$ is constant (with probability 1). For a finite
distribution this is the chord inequality applied repeatedly, by induction on the number of values.

**Theorem 18.2 (bounds on entropy).** If $X$ takes at most $n$ values, then $0 \le H(X) \le \log_2 n$. The lower bound
is an equality exactly when $X$ is constant, and the upper bound exactly when $X$ is uniform on $n$ values.

*Proof.* Each term $p_i\log_2(1/p_i)$ is $\ge 0$ since $p_i \le 1$, and it is 0 only when $p_i$ is 0 or 1; so $H = 0$
only when one $p_i$ is 1.

For the upper bound, sum only over the values with $p_i > 0$, say $m \le n$ of them, and let $Z$ be the random variable
that equals $1/p_i$ when $X = x_i$. Then $H(X) = E[\log_2 Z]$, and by Jensen

$$
H(X) = E[\log_2 Z] \le \log_2 E[Z] = \log_2 \sum_{i} p_i \cdot \frac{1}{p_i} = \log_2 m \le \log_2 n .
$$

Equality in Jensen needs $Z$ constant, so all the $p_i$ are equal to $1/m$; equality in the last step needs $m = n$.
$\square$

So the uniform distribution is the most uncertain one: among all ways to load an $n$-sided die, the fair one is
hardest to predict. This **maximum entropy principle** has a continuous cousin: among densities on the real line with
a given variance, the normal density has the largest (differential) entropy, one more reason the normal distribution
of [Chapter 10](10-The-Normal-Distribution.md) appears when little is known except the spread.

**Theorem 18.3 (conditioning reduces entropy).** $H(Y \mid X) \le H(Y)$, that is, $I(X; Y) \ge 0$, with equality if and
only if $X$ and $Y$ are independent. Consequently $H(X, Y) \le H(X) + H(Y)$.

*Proof.* Write $p(x,y)$ for the joint and $p(x), p(y)$ for the marginals. Then

$$
-I(X;Y) = \sum_{x,y} p(x,y) \log_2 \frac{p(x)p(y)}{p(x,y)} \le \log_2 \sum_{x,y} p(x,y)\frac{p(x)p(y)}{p(x,y)} \le \log_2 1 = 0,
$$

by Jensen for the concave $\log_2$ (the sums run over pairs with $p(x,y) > 0$, and the second inequality holds because
leaving out pairs can only shrink $\sum p(x)p(y)$). Equality in Jensen needs $p(x)p(y)/p(x,y)$ constant on the
support, and summing shows the constant is 1: independence. $\square$

On average, more information never hurts. (A single observation $Y = y$ can increase the uncertainty about $X$: hearing
"the patient has a rare symptom" can make several diagnoses equally plausible. The theorem is about the average over
what you might hear.)

**Theorem 18.4 (Shannon's uniqueness theorem, statement).** Suppose a function $H(p_1, \ldots, p_n)$ is continuous,
increases with $n$ for uniform distributions, and satisfies the **grouping rule**: choosing among outcomes in two
stages (first a group, then a member of the group) gives the same total, $H$ of the groups plus the average $H$ within
groups. Then $H = K\sum p_i\log(1/p_i)$ for a positive constant $K$.

Shannon proved this in the appendix of his 1948 paper. He added, honestly, that the theorem was not needed for the
theory and was there mainly to lend the definition some plausibility; the real justification is the coding theorems.

## 18.3 Coding: Kraft, Huffman, and the source coding theorem

*Level: advanced.*

### Prefix codes

A **binary code** gives each symbol a string of bits, its **codeword**. A code is a **prefix code** if no codeword is
the beginning of another. Then a stream of codewords can be decoded on the fly, without separators: read bits until
they spell a codeword, output it, start again. For example a = 0, b = 10, c = 11 is a prefix code, and 0 1 0 1 1 0
decodes uniquely as a, b, c, a. The code a = 0, b = 01, c = 1 is not a prefix code, and 0 1 could be "b" or "a c".

A prefix code is the same thing as a set of leaves in a binary tree: start at the root, go left for 0 and right for 1;
each codeword is a path ending at a leaf, and "no codeword is a prefix of another" means no codeword's node lies above
another's.

**Theorem 18.5 (Kraft inequality).** A prefix code with codeword lengths $\ell_1, \ldots, \ell_n$ exists if and only if

$$
\sum_{i=1}^{n} 2^{-\ell_i} \le 1 .
$$

*Proof.* Let $L = \max \ell_i$. Think of the complete binary tree of depth $L$, with $2^L$ leaves at the bottom.

*Only if.* A codeword of length $\ell_i$ is a node at depth $\ell_i$, and it has $2^{L - \ell_i}$ descendants at the
bottom level. Because no codeword lies above another, these sets of bottom leaves are disjoint. So
$\sum_i 2^{L - \ell_i} \le 2^L$; divide by $2^L$.

*If.* Sort the lengths so that $\ell_1 \le \ell_2 \le \cdots \le \ell_n$. Give the first symbol the leftmost node at
depth $\ell_1$, and in general give symbol $i$ the leftmost node at depth $\ell_i$ that is not below an already used
codeword. Such a node exists. The codewords already placed sit above $\sum_{j < i} 2^{L - \ell_j}$ bottom leaves,
and by the inequality this is at most $2^L - 2^{L-\ell_i}$, so at least $2^{L - \ell_i}$ bottom leaves are free.
Because we always placed leftmost, the used bottom leaves form one block at the left end, and its size is a multiple of
$2^{L-\ell_i}$ (each earlier $\ell_j \le \ell_i$). So the next $2^{L-\ell_i}$ free leaves are exactly the leaves below
one node at depth $\ell_i$, and that node is not below any earlier codeword. $\square$

Brockway McMillan proved in 1956 that the same inequality holds for every **uniquely decodable** code, prefix or not, so
nothing is lost by insisting on prefix codes.

**Worked example 3.** Can a prefix code have lengths 1, 2, 2, 3? $\frac12 + \frac14 + \frac14 + \frac18 = \frac98 > 1$:
no. Lengths 1, 2, 3, 3? $\frac12 + \frac14 + \frac18 + \frac18 = 1$: yes, for example 0, 10, 110, 111.

### Entropy is a lower bound

Let symbol $i$ have probability $p_i$ and codeword length $\ell_i$. The **expected length** is
$L = \sum_i p_i \ell_i$ bits per symbol.

**Theorem 18.6.** Every prefix code has $L \ge H$. There is a prefix code with $L < H + 1$.

*Proof.* Lower bound: let $c = \sum_i 2^{-\ell_i} \le 1$. Then

$$
H - L = \sum_i p_i \log_2 \frac{2^{-\ell_i}}{p_i} \le \log_2 \sum_i p_i \frac{2^{-\ell_i}}{p_i} = \log_2 c \le 0,
$$

by Jensen and the Kraft inequality.

Upper bound: take the **Shannon code lengths** $\ell_i = \lceil \log_2(1/p_i) \rceil$. Then $2^{-\ell_i} \le p_i$, so
$\sum 2^{-\ell_i} \le 1$ and a prefix code with these lengths exists by Kraft. Since $\ell_i < \log_2(1/p_i) + 1$,
averaging gives $L < H + 1$. $\square$

The extra bit can be made negligible by coding **blocks**: treat $k$ consecutive independent symbols as one super-symbol.
Its entropy is $kH$ (entropy adds for independent variables, by the chain rule and Theorem 18.3), so a prefix code for
blocks has expected length below $kH + 1$, that is, below $H + 1/k$ bits per original symbol.

### Huffman's algorithm

Shannon's lengths are within 1 bit of optimal but not optimal. In 1952 David Huffman, then a graduate student at MIT,
found the algorithm that gives the best prefix code for given probabilities.

**Huffman's algorithm.** Repeatedly take the two least likely symbols (or groups), merge them into one group whose
probability is their sum, and record that the two parts are told apart by one more bit (0 for one, 1 for the other).
When one group remains, read each symbol's codeword along the merges from the last to the first.

**Worked example 4.** Five symbols with probabilities A 0.4, B 0.2, C 0.15, D 0.15, E 0.1.

1. Merge the two smallest, E (0.1) and C (0.15), into EC (0.25).
2. Now the smallest are D (0.15) and B (0.2): merge into DB (0.35).
3. Now EC (0.25) and DB (0.35): merge into ECDB (0.6).
4. Finally A (0.4) and ECDB (0.6).

Reading back: A = 0, E = 100, C = 101, D = 110, B = 111. The expected length is
$0.4 \cdot 1 + 0.6 \cdot 3 = 2.2$ bits. The entropy is $H \approx 2.146$ bits, so Huffman's code is within 0.06 bits of
the limit, while a fixed-length code for five symbols would need 3 bits. The Shannon code lengths here would be
2, 3, 3, 3, 4, with expected length 2.7.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 540 270" role="img" aria-label="The Huffman tree for probabilities A 0.4, B 0.2, C 0.15, D 0.15, E 0.1. The root splits into A with 0 and a node of weight 0.6 with 1. That node splits into a node of weight 0.25 holding E and C, and a node of weight 0.35 holding D and B. The codewords are A 0, E 100, C 101, D 110, B 111">
  <line x1="260" y1="34" x2="140" y2="104" stroke="currentColor" stroke-width="2"/>
  <line x1="260" y1="34" x2="360" y2="104" stroke="currentColor" stroke-width="2"/>
  <line x1="360" y1="104" x2="270" y2="174" stroke="currentColor" stroke-width="2"/>
  <line x1="360" y1="104" x2="450" y2="174" stroke="currentColor" stroke-width="2"/>
  <line x1="270" y1="174" x2="225" y2="236" stroke="currentColor" stroke-width="2"/>
  <line x1="270" y1="174" x2="315" y2="236" stroke="currentColor" stroke-width="2"/>
  <line x1="450" y1="174" x2="405" y2="236" stroke="currentColor" stroke-width="2"/>
  <line x1="450" y1="174" x2="495" y2="236" stroke="currentColor" stroke-width="2"/>
  <circle cx="260" cy="34" r="20" fill="#9cc9ea" stroke="currentColor"/>
  <text x="260" y="39" text-anchor="middle" font-size="13" fill="currentColor">1.0</text>
  <circle cx="360" cy="104" r="20" fill="#9cc9ea" stroke="currentColor"/>
  <text x="360" y="109" text-anchor="middle" font-size="13" fill="currentColor">0.6</text>
  <circle cx="270" cy="174" r="20" fill="#9cc9ea" stroke="currentColor"/>
  <text x="270" y="179" text-anchor="middle" font-size="13" fill="currentColor">0.25</text>
  <circle cx="450" cy="174" r="20" fill="#9cc9ea" stroke="currentColor"/>
  <text x="450" y="179" text-anchor="middle" font-size="13" fill="currentColor">0.35</text>
  <rect x="112" y="90" width="56" height="28" rx="5" fill="#eea66f" stroke="currentColor"/>
  <text x="140" y="109" text-anchor="middle" font-size="13" fill="currentColor">A 0.4</text>
  <rect x="197" y="222" width="56" height="28" rx="5" fill="#eea66f" stroke="currentColor"/>
  <text x="225" y="241" text-anchor="middle" font-size="13" fill="currentColor">E 0.1</text>
  <rect x="287" y="222" width="56" height="28" rx="5" fill="#eea66f" stroke="currentColor"/>
  <text x="315" y="241" text-anchor="middle" font-size="13" fill="currentColor">C 0.15</text>
  <rect x="377" y="222" width="56" height="28" rx="5" fill="#eea66f" stroke="currentColor"/>
  <text x="405" y="241" text-anchor="middle" font-size="13" fill="currentColor">D 0.15</text>
  <rect x="467" y="222" width="56" height="28" rx="5" fill="#eea66f" stroke="currentColor"/>
  <text x="495" y="241" text-anchor="middle" font-size="13" fill="currentColor">B 0.2</text>
  <text x="190" y="64" text-anchor="middle" font-size="14" fill="#7ccf9a" stroke="currentColor" stroke-width="0.3">0</text>
  <text x="320" y="64" text-anchor="middle" font-size="14" fill="#7ccf9a" stroke="currentColor" stroke-width="0.3">1</text>
  <text x="305" y="136" text-anchor="middle" font-size="14" fill="#7ccf9a" stroke="currentColor" stroke-width="0.3">0</text>
  <text x="414" y="136" text-anchor="middle" font-size="14" fill="#7ccf9a" stroke="currentColor" stroke-width="0.3">1</text>
  <text x="236" y="203" text-anchor="middle" font-size="14" fill="#7ccf9a" stroke="currentColor" stroke-width="0.3">0</text>
  <text x="304" y="203" text-anchor="middle" font-size="14" fill="#7ccf9a" stroke="currentColor" stroke-width="0.3">1</text>
  <text x="416" y="203" text-anchor="middle" font-size="14" fill="#7ccf9a" stroke="currentColor" stroke-width="0.3">0</text>
  <text x="484" y="203" text-anchor="middle" font-size="14" fill="#7ccf9a" stroke="currentColor" stroke-width="0.3">1</text>
  <text x="20" y="262" font-size="13" fill="currentColor">codewords: A 0, E 100, C 101, D 110, B 111</text>
</svg>
</div>

**Theorem 18.7 (Huffman, 1952).** Huffman's algorithm gives a prefix code of the smallest possible expected length.

*Proof sketch.* Two facts about an optimal code: a more likely symbol never has a longer codeword than a less likely
one (otherwise swap them and the length drops), and the deepest level of the tree holds at least two sibling leaves
(otherwise a lone deepest leaf could move up one level). So some optimal code has the two least likely symbols as
siblings at the bottom. Merging them into one symbol of probability $p + q$ gives a problem with one fewer symbol
whose optimal expected length is exactly $p + q$ less. By induction on the number of symbols, Huffman's merges produce
an optimal tree. The full proof is in Cover and Thomas, Section 5.8. $\square$

Huffman codes are inside many everyday formats (the DEFLATE method used in zip files and PNG images, and JPEG, use
them as one stage). Modern compressors also use **arithmetic coding**, which avoids the whole-bit rounding and gets
within a tiny fraction of a bit of $H$ per symbol over a long file.

### The asymptotic equipartition property

Why is $H$ the limit not only for symbol-by-symbol prefix codes but for every compression scheme? Look at long
sequences. Let $X_1, X_2, \ldots$ be independent copies of $X$ with distribution $p$.

**Theorem 18.8 (asymptotic equipartition property, AEP).** As $n \to \infty$,

$$
-\frac{1}{n}\log_2 p(X_1, \ldots, X_n) \to H(X) \quad \text{in probability.}
$$

*Proof.* By independence, $-\frac1n\log_2 p(X_1,\ldots,X_n) = \frac1n\sum_{i=1}^n \log_2 \frac{1}{p(X_i)}$. This is the
average of $n$ independent copies of the surprise $\log_2(1/p(X))$, whose mean is $H(X)$ and whose variance is finite
(it takes finitely many values). By the weak law of large numbers (Chapter 7) the average tends to $H(X)$ in
probability. $\square$

In words: almost every long sequence you will actually see has probability close to $2^{-nH}$. Call a sequence
**typical** if its probability lies between $2^{-n(H+\varepsilon)}$ and $2^{-n(H-\varepsilon)}$. Then

- the typical set has probability above $1 - \varepsilon$ for large $n$ (that is the AEP);
- it has at most $2^{n(H+\varepsilon)}$ members, since each has probability at least $2^{-n(H+\varepsilon)}$ and the
  probabilities add to at most 1;
- it has at least $(1-\varepsilon)2^{n(H-\varepsilon)}$ members for large $n$, by the same argument the other way.

Compare with all $2^n$ binary strings for a coin with $p = 0.1$, $n = 100$: $nH \approx 46.9$, so the typical set has
roughly $2^{47} \approx 1.3 \times 10^{14}$ members out of $2^{100} \approx 1.3 \times 10^{30}$. Nearly all the
probability sits on a vanishing fraction of the sequences, and those are nearly equally likely ("equipartition").

**Theorem 18.9 (Shannon's source coding theorem).** For independent symbols with entropy $H$: for any rate $R > H$
there are codes using $nR$ bits for blocks of $n$ symbols whose probability of failure tends to 0; for any $R < H$,
every such scheme fails with probability tending to 1.

*Proof of the first half.* Number the typical sequences, using $\lceil n(H + \varepsilon)\rceil$ bits, and declare
failure on the rest. Failure has probability below $\varepsilon$, and choosing $\varepsilon$ with $H + \varepsilon < R$
fits within $nR$ bits for large $n$. The second half uses the lower bound on the probability of each typical sequence:
$2^{nR}$ codewords can cover typical sequences of total probability at most $2^{nR} \cdot 2^{-n(H-\varepsilon)}$, which
tends to 0 when $R < H - \varepsilon$. $\square$

**How much information is in English?** Letters in English text are far from independent and uniform. In a 1951
paper Shannon had people guess the next letter of a text and estimated, from how often they were right, that printed
English carries roughly one bit per letter, against $\log_2 27 \approx 4.75$ bits for 26 letters and a space chosen
uniformly. That redundancy is why text files compress well, and why you can read a sentence with letters missing.

## 18.4 Channel capacity

*Level: advanced.*

### The binary symmetric channel

Now the problem of sending, not storing. The simplest noisy channel is the **binary symmetric channel** with crossover
probability $p$, written BSC($p$): you send a bit, and it arrives flipped with probability $p$, independently for
each bit, and correct with probability $1 - p$.

The obvious defence is repetition: send each bit three times and take a majority vote. A bit is decoded wrongly when at
least two of its three copies are flipped, with probability $3p^2(1-p) + p^3$. For $p = 0.1$ that is
$0.027 + 0.001 = 0.028$, down from 0.1, but at the price of sending three bits for every one: rate $\frac13$. Send each
bit $2k+1$ times and the error probability goes to 0, but so does the rate. Before 1948 engineers assumed this
trade-off was unavoidable: reliability costs rate, without limit.

### Capacity

A channel takes an input $X$ and gives an output $Y$ according to fixed probabilities $p(y \mid x)$. The mutual
information $I(X;Y)$ measures how much the output tells you about the input, and it depends on how you choose the
input distribution.

**Definition.** The **capacity** of the channel is $C = \max I(X;Y)$, the maximum over all input distributions.

**Theorem 18.10.** The capacity of BSC($p$) is $C = 1 - h(p)$ bits per channel use, reached by uniform input.

*Proof.* Given $X = x$, the output is $x$ or its flip with probabilities $1-p$ and $p$, so $H(Y \mid X = x) = h(p)$
for both inputs and $H(Y \mid X) = h(p)$. Then

$$
I(X;Y) = H(Y) - H(Y \mid X) = H(Y) - h(p) \le 1 - h(p),
$$

because $Y$ is a single bit and $H(Y) \le \log_2 2 = 1$ (Theorem 18.2). With uniform input, $Y$ is also uniform
($P(Y = 1) = \frac12(1-p) + \frac12 p = \frac12$), so $H(Y) = 1$ and the bound is reached. $\square$

**Worked example 5.**

| crossover $p$ | $h(p)$ | capacity $1 - h(p)$ |
|---|---|---|
| 0.01 | 0.081 | 0.919 |
| 0.1 | 0.469 | 0.531 |
| 0.11 | 0.500 | 0.500 |
| 0.25 | 0.811 | 0.189 |
| 0.5 | 1 | 0 |

At $p = \frac12$ the output is independent of the input and nothing gets through. A channel that flips 11% of bits can
still carry half a bit per use.

**Theorem 18.11 (Shannon's channel coding theorem, statement).** Let a memoryless channel have capacity $C$. For every
rate $R < C$ there are codes sending $nR$ message bits in $n$ channel uses whose probability of decoding error tends to
0 as $n \to \infty$. For $R > C$, the error probability of any code stays bounded away from 0.

So on BSC(0.1) you can send at rate $\frac12$ with error probability as small as you like, while triple repetition gets
only rate $\frac13$ with error 0.028. That was the shock of 1948: reliability does not require the rate to go to 0,
only below $C$.

*Idea of the proof.* Shannon's argument was probabilistic, in the spirit of the probabilistic method of
[Combinatorics Chapter 17](../combinatorics/17-The-Probabilistic-Method.md). Choose $2^{nR}$ codewords of length $n$
completely at random. When a codeword is sent through BSC($p$), about $np$ bits flip, so the received word is
"typical" for that codeword: it lies near distance $np$ from it. The number of words at that distance is about
$2^{nh(p)}$, so each codeword "owns" a cloud of about $2^{nh(p)}$ likely received words. The $2^n$ possible received
words can hold about $2^n / 2^{nh(p)} = 2^{n(1 - h(p))}$ disjoint clouds. So if $R < 1 - h(p)$ the random clouds
rarely overlap, and decoding to the nearest codeword works with high probability; averaged over the random choice of
code, the error is small, so some code does at least as well as the average. The converse uses Fano's inequality.
Full proofs are in Cover and Thomas, Chapter 7. The proof showed codes exist without building one; finding practical
codes near capacity took about 45 years.

For a channel with continuous signals, bandwidth $B$ hertz and additive Gaussian noise at signal-to-noise power ratio
$S/N$, the capacity is the **Shannon-Hartley** formula $C = B\log_2(1 + S/N)$ bits per second. In terms of the energy
per bit $E_b$ and noise density $N_0$, reliable communication at any rate needs $E_b/N_0 > \ln 2 \approx 0.693$, about
$-1.59$ decibels: the **Shannon limit**.

## 18.5 Deep-space links

*Level: advanced.*

Talking to a spacecraft at Mars is the binary symmetric channel at its hardest. The distance from Earth to Mars ranges
from about 55 million to about 400 million kilometres as the two planets move round the Sun, so radio signals take
roughly 3 to 22 minutes each way. Radio power spreads out over a sphere, so the power received falls with the square
of the distance: double the distance, a quarter of the power. A transmitter of some tens of watts, hundreds of
millions of kilometres away, arrives far weaker than the noise in an ordinary receiver; the huge dish antennas of
NASA's Deep Space Network collect what they can. Every decibel of coding gain is power the spacecraft does not need
to carry, or data it can send faster.

That is why deep space was the first big customer for error-correcting codes, the explicit codes that Shannon's theorem
promised:

- **Mariner 9** (in orbit around Mars from November 1971) sent each 6-bit pixel as a 32-bit codeword of the
  first-order Reed-Muller code, which corrects any 7 errors in 32 bits. Its construction and the fast decoder are in
  [Combinatorics Chapter 19](../combinatorics/19-Designs-and-Codes.md).
- The Voyager probes (launched 1977) used a **convolutional code**, decoded with Andrew Viterbi's algorithm (1967),
  and an outer **Reed-Solomon** code (also in Combinatorics Chapter 19) was wrapped around it. Such **concatenated
  codes** became a standard for deep space.
- In 1993 Claude Berrou, Alain Glavieux and Punya Thitimajshima announced **turbo codes**, which came within about a
  decibel of the Shannon limit. **Low-density parity-check (LDPC) codes**, invented by Robert Gallager in his 1960
  doctoral thesis and largely forgotten, were rediscovered in the 1990s and do as well. The international standards
  for space links, set by the Consultative Committee for Space Data Systems (CCSDS), include Reed-Solomon,
  convolutional, turbo and LDPC codes.
- Rovers on the surface of Mars send most of their data not straight to Earth but up to orbiters passing overhead
  (such as Mars Reconnaissance Orbiter and Mars Odyssey), which relay it home over their larger antennas.

Each of these is Shannon's theorem made concrete: add structured redundancy, at a rate below capacity, and errors that
the channel will certainly make can be corrected at the receiver.

**Worked example 6 (why coding beats shouting).** Suppose a link has raw bit error rate $p = 0.1$. Uncoded, one bit in
ten is wrong. Triple repetition costs a factor 3 in rate and still leaves 2.8% wrong. To get the uncoded error rate
down by "shouting" you need more power: doubling the transmitter power (3 decibels) helps, but every factor of 2 in
distance takes it away again. Shannon's theorem says a code of rate $\frac12$ (only a factor 2 in rate) can make the
error rate as small as you like on this very channel, since $\frac12 < C \approx 0.531$. Modern LDPC and turbo codes
come close to doing so.

## 18.6 The Kullback-Leibler divergence

*Level: advanced to expert.*

Suppose the truth is a distribution $p$, but you built your code (or your model) for a different distribution $q$.
With codeword lengths about $\log_2(1/q_i)$, your expected length is $\sum p_i \log_2(1/q_i)$, the **cross-entropy**,
instead of the ideal $\sum p_i\log_2(1/p_i) = H(p)$. The waste is

$$
D(p \,\|\, q) = \sum_i p_i \log_2 \frac{p_i}{q_i},
$$

the **Kullback-Leibler divergence** (or **relative entropy**) of $q$ from $p$. Solomon Kullback and Richard Leibler
introduced it in 1951. It is $+\infty$ if some $p_i > 0$ has $q_i = 0$ (you have no codeword for something that
happens).

**Theorem 18.12 (Gibbs' inequality).** $D(p \,\|\, q) \ge 0$, with equality if and only if $p = q$.

*Proof.* Summing over $i$ with $p_i > 0$, by Jensen for the concave $\log_2$:

$$
-D(p\,\|\,q) = \sum_i p_i \log_2\frac{q_i}{p_i} \le \log_2 \sum_i p_i \frac{q_i}{p_i} = \log_2 \sum_{i:\,p_i>0} q_i \le \log_2 1 = 0.
$$

Equality needs $q_i/p_i$ constant where $p_i > 0$ and no mass of $q$ elsewhere, so $q = p$. $\square$

Many earlier facts are special cases. Theorem 18.2 is $D(p \,\|\, \text{uniform}) = \log_2 n - H(p) \ge 0$. Theorem
18.3 is $I(X;Y) = D(p_{XY} \,\|\, p_X p_Y) \ge 0$: mutual information is the divergence of the joint distribution
from the product of its marginals, a measure of how far $X$ and $Y$ are from independent.

**It is not a distance.** $D$ is not symmetric and does not satisfy the triangle inequality. For a fair coin
$p = (\frac12, \frac12)$ and a biased one $q = (\frac14, \frac34)$:

$$
D(p\,\|\,q) = \tfrac12 \log_2 \tfrac{1/2}{1/4} + \tfrac12\log_2\tfrac{1/2}{3/4} \approx 0.2075, \qquad D(q\,\|\,p) = 1 - h(\tfrac14) \approx 0.1887 .
$$

**Pinsker's inequality (statement).** The total variation distance $\delta(p,q) = \frac12 \sum_i |p_i - q_i|$, the
largest difference between the probabilities $p$ and $q$ give to any event, satisfies
$\delta(p,q) \le \sqrt{\tfrac{\ln 2}{2} D(p\,\|\,q)}$ (with $D$ in bits). Small divergence forces the two
distributions to be close.

### Divergence measures how rare a deviation is

Chernoff bounds from [Chapter 7](07-Inequalities-and-the-Law-of-Large-Numbers.md) have an exact form in terms of
divergence. Toss a coin with heads probability $q$ independently $n$ times. For $a > q$, the optimised Chernoff bound
reads

$$
P(\text{at least } an \text{ heads}) \le 2^{-n D(a \,\|\, q)},
$$

where $D(a \,\|\, q)$ means the divergence between the coins with heads probabilities $a$ and $q$. And this exponent is
the right one: the probability is $2^{-n D(a\|q) + o(n)}$. **Sanov's theorem** (1957) extends this to any event about
the empirical distribution of independent samples: its probability decays like $2^{-n D^*}$, where $D^*$ is the
smallest divergence $D(r \,\|\, q)$ from the truth $q$ to a distribution $r$ inside the event. Rare events happen in the
least unlikely way.

**Worked example 7.** A fair coin tossed 100 times: the probability of at least 75 heads. Here $D(0.75 \,\|\, 0.5) =
1 - h(0.75) \approx 0.1887$, so the bound is $2^{-18.87} \approx 2.1 \times 10^{-6}$. The exact value, summing
binomial probabilities, is about $2.8 \times 10^{-7}$. The bound is about 7 times too big, a polynomial factor; both
fall off at the same exponential rate as $n$ grows.

```python
from math import comb, log2
def D(a, q):
    return a * log2(a / q) + (1 - a) * log2((1 - a) / (1 - q))
n = 100
exact = sum(comb(n, k) for k in range(75, n + 1)) / 2 ** n
print(exact, 2 ** (-n * D(0.75, 0.5)))   # 2.8e-07  2.1e-06
```

**In statistics and machine learning (honestly).** Minimising the cross-entropy $\sum_i p_i\log(1/q_i)$ over a model
$q$, with $p$ the observed data, is the same as minimising $D(p \,\|\, q)$, since $H(p)$ does not depend on the model.
That is what "cross-entropy loss" in neural network training does, and it is the same as maximum likelihood. Variational
methods minimise the divergence the other way round, $D(q \,\|\, p)$, which behaves differently (it prefers a $q$ that
fits one peak of $p$ well over one that spreads across all of them), and the choice between the two directions matters
in practice.

## A short history

Harry Nyquist (1924) and Ralph Hartley (1928), both at Bell Labs, studied how fast telegraph and telephone lines could
carry signals, and Hartley proposed the logarithm of the number of possible messages as the measure of information.
Claude Shannon's "A Mathematical Theory of Communication", published in two parts in the *Bell System Technical
Journal* in 1948, defined entropy for arbitrary probabilities, proved the source and channel coding theorems, and gave
the capacity of the Gaussian channel; the subject of information theory begins there. The Kraft inequality appeared in
Leon Kraft's 1949 MIT master's thesis, and McMillan's extension in 1956. Huffman's code came from a 1952 term paper.
Kullback and Leibler's divergence (1951) came from statistics. Explicit codes approaching Shannon's limits took decades:
Hamming codes (1950), Reed-Muller (1954), Reed-Solomon (1960), Gallager's LDPC codes (1960), convolutional codes with
Viterbi decoding (1967), turbo codes (1993), and polar codes, introduced by Erdal Arıkan in 2009, the first family proved
to reach capacity with efficient encoding and decoding.

## Check yourself

??? question "1. What is the entropy of a fair 8-sided die? Of a fair 6-sided die? Explain the first answer in terms of yes/no questions."

    $\log_2 8 = 3$ bits: three halving questions always identify the face. $\log_2 6 \approx 2.585$ bits: no fixed
    number of questions achieves this for a single roll, but for long sequences of rolls you need about 2.585
    questions (bits) per roll on average.

??? question "2. A biased coin shows heads with probability 0.9. Find its entropy, and the number of bits needed per toss to record 1000 tosses, roughly."

    $h(0.9) = h(0.1) \approx 0.469$ bits. By the source coding theorem, about $1000 \times 0.469 \approx 469$ bits
    suffice for 1000 tosses (with block coding), instead of 1000.

??? question "3. Can a prefix code have codeword lengths 2, 2, 2, 3, 3? Lengths 1, 2, 2, 3?"

    $3 \cdot \frac14 + 2 \cdot \frac18 = 1$: yes, for example 00, 01, 10, 110, 111. $\frac12 + \frac14 + \frac14 +
    \frac18 = \frac98 > 1$: no, by the Kraft inequality.

??? question "4. Find a Huffman code for probabilities 0.5, 0.25, 0.125, 0.125. Compare its expected length with the entropy, and explain."

    Merge the two 0.125s (0.25), then the two 0.25s (0.5), then the two 0.5s. Codewords: 0, 10, 110, 111, expected
    length $0.5 + 0.5 + 0.375 + 0.375 = 1.75$ bits. The entropy is also $0.5 \cdot 1 + 0.25 \cdot 2 + 2 \cdot 0.125
    \cdot 3 = 1.75$. Equality holds because every probability is a power of $\frac12$, so lengths $\log_2(1/p_i)$
    are whole numbers.

??? question "5. Show that the Shannon code lengths $\ell_i = \lceil\log_2(1/p_i)\rceil$ satisfy the Kraft inequality, and compute them for probabilities 0.4, 0.3, 0.2, 0.1."

    $\ell_i \ge \log_2(1/p_i)$ gives $2^{-\ell_i} \le p_i$, and summing gives at most 1. For the example:
    $\log_2(1/0.4) \approx 1.32$, so 2; $\log_2(1/0.3) \approx 1.74$, so 2; $\log_2 5 \approx 2.32$, so 3;
    $\log_2 10 \approx 3.32$, so 4. Kraft sum $\frac14 + \frac14 + \frac18 + \frac1{16} = \frac{11}{16} \le 1$.
    Expected length $0.8 + 0.6 + 0.6 + 0.4 = 2.4$, against $H \approx 1.846$.

??? question "6. Show that $H(X, Y) = H(X) + H(Y)$ when $X$ and $Y$ are independent, directly from the definition."

    $p(x,y) = p(x)p(y)$, so $-\log_2 p(x,y) = -\log_2 p(x) - \log_2 p(y)$. Averaging over the joint distribution gives
    $H(X,Y) = E[-\log_2 p(X)] + E[-\log_2 p(Y)] = H(X) + H(Y)$.

??? question "7. Compute the capacity of BSC(0.25). If you used triple repetition on this channel, what would the bit error rate be?"

    $C = 1 - h(0.25) \approx 1 - 0.811 = 0.189$ bits per use. Triple repetition errs when at least 2 of 3 copies
    flip: $3(0.25)^2(0.75) + (0.25)^3 = 0.140625 + 0.015625 = 0.15625$, still large, at rate $\frac13$, which is above
    capacity, so no code at rate $\frac13$ could make the error small here.

??? question "8. The binary erasure channel BEC($\varepsilon$) delivers each bit correctly with probability $1 - \varepsilon$ and otherwise replaces it with a symbol ? (erased). Show its capacity is $1 - \varepsilon$."

    Let $P(X = 1) = \pi$. Given the output, the input is known unless the output is ?, which happens with probability
    $\varepsilon$ regardless of $X$, and then the input still has its prior distribution. So
    $H(X \mid Y) = \varepsilon\, h(\pi)$ and $I(X;Y) = H(X) - H(X \mid Y) = (1 - \varepsilon) h(\pi)$, maximised at
    $\pi = \frac12$, giving $C = 1 - \varepsilon$. It is what you would guess: a fraction $\varepsilon$ of the bits is
    lost and the rest arrive perfectly.

??? question "9. Compute $D(p\,\|\,q)$ and $D(q\,\|\,p)$ for $p = (\frac12, \frac12)$, $q = (\frac14, \frac34)$, and confirm they differ."

    $D(p\|q) = \frac12\log_2 2 + \frac12\log_2\frac23 = \frac12 - \frac12\log_2 1.5 \approx 0.5 - 0.2925 = 0.2075$.
    $D(q\|p) = \frac14\log_2\frac12 + \frac34\log_2\frac32 = -0.25 + 0.4387 \approx 0.1887$. They differ, so $D$ is
    not symmetric.

??? question "10. Two fair dice: $H(D_1, D_2) \approx 5.170$ and $H(D_1 + D_2) \approx 3.274$. What is $I(D_1; D_1 + D_2)$?"

    $I(D_1; S) = H(S) - H(S \mid D_1)$. Given $D_1$, the sum is $D_1$ plus a fair die, uniform over 6 values, so
    $H(S \mid D_1) = \log_2 6 \approx 2.585$. Hence $I \approx 3.274 - 2.585 = 0.689$ bits: seeing the first die
    tells you about 0.69 bits about the sum.

??? question "11. Use the typical set to explain why a file of 1,000,000 independent tosses of a coin with $P(\text{heads}) = 0.1$ can be stored in about 469,000 bits but not much less."

    $nH = 10^6 \times 0.469 \approx 469{,}000$. The typical set has about $2^{469000}$ members and carries almost all the
    probability, so indexing it takes about 469,000 bits. With $nR$ bits for $R$ noticeably below $H$, the $2^{nR}$
    codewords cover typical sequences of total probability at most $2^{nR}2^{-n(H-\varepsilon)}$, tiny, so the scheme
    fails almost always (Theorem 18.9).

??? question "12. Prove that $H(X) \ge H(f(X))$ for any function $f$. When is there equality?"

    By the chain rule twice, $H(X, f(X)) = H(X) + H(f(X) \mid X) = H(X)$, since $f(X)$ is determined by $X$. Also
    $H(X, f(X)) = H(f(X)) + H(X \mid f(X)) \ge H(f(X))$. So $H(X) \ge H(f(X))$, with equality exactly when
    $H(X \mid f(X)) = 0$, that is, when $f$ is one-to-one on the values $X$ takes with positive probability.

## What you learned

- Surprise is $\log_2(1/p)$ bits; entropy $H = \sum p\log_2(1/p)$ is average surprise, from 0 (certainty) to
  $\log_2 n$ (uniform), proved with Jensen's inequality.
- The chain rule $H(X,Y) = H(X) + H(Y \mid X)$; mutual information is nonnegative and zero only for independence.
- Prefix codes exist exactly when $\sum 2^{-\ell_i} \le 1$ (Kraft); every prefix code has $L \ge H$, and Shannon or
  Huffman codes get $L < H + 1$; block coding approaches $H$.
- The AEP (a consequence of the weak law) shows that $H$ bits per symbol is the exact limit of compression.
- Channel capacity $C = \max I(X;Y)$; for BSC($p$) it is $1 - h(p)$; below capacity, reliable communication is
  possible at a fixed positive rate.
- Deep-space missions, from Mariner 9 at Mars to today's relays, use error-correcting codes because power is scarce
  and noise is not.
- The KL divergence $D(p\,\|\,q) \ge 0$ (Gibbs) measures the cost of using the wrong distribution, gives the exact
  exponent in Chernoff bounds, and underlies cross-entropy loss.

**Next:** [Chapter 19](19-Randomness-in-Computing.md) asks where computers get random numbers, and what randomness
buys algorithms: faster sorting, quick primality tests, sampling hard distributions, and secure keys.

## Further reading

- C. E. Shannon, "A Mathematical Theory of Communication", *Bell System Technical Journal* 27, 1948.
- C. E. Shannon, "Prediction and Entropy of Printed English", *Bell System Technical Journal* 30, 1951.
- D. A. Huffman, "A Method for the Construction of Minimum-Redundancy Codes", *Proceedings of the IRE* 40, 1952.
- S. Kullback and R. A. Leibler, "On Information and Sufficiency", *Annals of Mathematical Statistics* 22, 1951.
- T. M. Cover and J. A. Thomas, *Elements of Information Theory*, 2nd edition, 2006. The standard textbook.
- D. J. C. MacKay, *Information Theory, Inference, and Learning Algorithms*, 2003. Free online from the author, with
  an excellent treatment of modern codes.
- On this site: [Combinatorics Chapter 19, Designs and codes](../combinatorics/19-Designs-and-Codes.md) for Hamming,
  Reed-Muller and Reed-Solomon codes; [Combinatorics Chapter 17](../combinatorics/17-The-Probabilistic-Method.md) for
  the random-choice argument behind Shannon's proof; the [expected value lesson](../../topics/probability/level-7/02-expected-value.md)
  for a gentle start; and the cryptography book's chapter on
  [randomness and perfect secrecy](https://cryptography.akadian.ca/book/04-Randomness-and-Perfect-Secrecy/), where
  Shannon's other 1949 paper proves the one-time pad perfectly secret.
