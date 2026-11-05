# 7. Infinity and cardinality

*Are there more whole numbers than even numbers? More fractions than whole numbers? More points on a line than
fractions? For finite sets, "more" is settled by counting. For infinite sets counting never ends, and for centuries
the questions looked meaningless or paradoxical. In the 1870s Georg Cantor answered them with one idea from
[Chapter 6](06-Relations-and-Functions.md): two sets have the same size when there is a bijection between them. In
this chapter you will use that idea to show that the integers and the rationals are no bigger than the natural
numbers, that the real numbers are strictly bigger, and that for every set there is a bigger one. You will prove the
Schröder-Bernstein theorem, the main tool for showing two sets have the same size, and meet the question Cantor could
not answer, the continuum hypothesis, which turned out to be unanswerable from the usual axioms.*

!!! abstract "In this chapter"
    **You will learn:**

    - why "same size" must mean "there is a bijection", and what Hilbert's hotel shows about infinite sets
    - which sets are countable, with proofs for the integers, pairs of naturals, the rationals and the algebraic numbers
    - Cantor's diagonal argument that the real numbers are uncountable
    - Cantor's theorem: every set is strictly smaller than its power set
    - the Schröder-Bernstein theorem, with a complete proof, and how it shows $|\mathbb{R}| = |\mathcal{P}(\mathbb{N})|$
    - what the continuum hypothesis says, and what Gödel (1940) and Cohen (1963) proved about it

    **You need:** [Chapter 5](05-Sets.md) (sets, power sets, products) and [Chapter 6](06-Relations-and-Functions.md)
    (injections, surjections, bijections, inverses, composition). The gentler versions are the Topics lessons
    [A full hotel with room for one more](../../topics/infinity/level-3/01-room-for-one.md),
    [Countable sets](../../topics/infinity/level-6/01-countable-sets.md),
    [The rational numbers are countable](../../topics/infinity/level-6/04-rationals-countable.md),
    [Cantor's diagonal argument](../../topics/infinity/level-7/01-diagonal-argument.md),
    [Power sets and Cantor's theorem](../../topics/infinity/level-7/04-power-sets.md) and
    [The continuum hypothesis](../../topics/infinity/level-8/04-continuum-hypothesis.md).

    **Levels:** 7.1 and 7.2 are intermediate; 7.3 and 7.4 are intermediate to advanced; 7.5 is advanced; 7.6 is
    advanced in its statement and expert in its proofs, which are only described.

## 7.1 Same size means bijection

A child who cannot count can still tell whether there are as many cups as saucers: put one cup on each saucer and see
whether anything is left over. Matching comes before counting. In fact counting *is* matching: to count five apples is
to match them with the words "one, two, three, four, five". So the right definition of "same size" is the one that
does not mention numbers at all.

### The definition

Sets $A$ and $B$ have the **same cardinality**, written $|A| = |B|$ (or $A \approx B$), if there is a bijection
$f : A \to B$. We also say $A$ and $B$ are **equinumerous**.

For finite sets this is ordinary counting: $|A| = n$ means $A$ is in bijection with $\{1, 2, \ldots, n\}$. For infinite
sets it is a definition, and we will have to live with its consequences.

**Theorem 7.1.** For all sets $A, B, C$: $|A| = |A|$; if $|A| = |B|$ then $|B| = |A|$; and if $|A| = |B|$ and
$|B| = |C|$ then $|A| = |C|$.

*Proof.* The identity $\mathrm{id}_A$ is a bijection. The inverse of a bijection is a bijection (Theorem 6.8). The
composition of bijections is a bijection (Theorem 6.7). $\square$

So "having the same cardinality" behaves like an equivalence relation. (It is not literally one on "the set of all
sets", which does not exist by Theorem 5.10; it is a relation between any two sets you care to name.)

### Galileo's paradox

In *Two New Sciences* (1638), Galileo Galilei pointed out that the perfect squares $1, 4, 9, 16, \ldots$ are only a
small part of the positive whole numbers, getting rarer and rarer, yet each number $n$ has exactly one square $n^2$, and
each square comes from exactly one number. So by matching there are as many squares as numbers. Galileo concluded that
"equal", "greater" and "less" do not apply to infinite quantities.

Cantor drew the opposite conclusion. The matching $n \mapsto n^2$ is a bijection from the positive integers to the
squares, so they *do* have the same cardinality; what fails is the old rule that "the whole is greater than the part".
That rule is true for finite sets (Theorem 6.5 and the pigeonhole principle) and false for infinite ones.

### Hilbert's hotel

David Hilbert told a story along these lines in a 1924 lecture, and George Gamow's book *One Two Three... Infinity*
(1947) made it famous. A hotel has rooms numbered $0, 1, 2, 3, \ldots$, one for each natural number, and every room is
occupied.

- **One new guest arrives.** Move the guest in room $n$ to room $n + 1$, for every $n$ at once. Room 0 is now free.
  This is the map $n \mapsto n + 1$, a bijection from $\mathbb{N}$ to $\mathbb{N} \setminus \{0\}$.
- **A bus with infinitely many guests arrives**, numbered $0, 1, 2, \ldots$. Move the guest in room $n$ to room $2n$;
  the even rooms are now full and the odd rooms are free. Put bus passenger $k$ in room $2k + 1$. This shows
  $\mathbb{N}$ is in bijection with both the even and the odd numbers.
- **Infinitely many buses arrive, each with infinitely many guests.** Passenger $k$ of bus $j$ is the pair $(j, k)$.
  Section 7.2 gives a bijection between $\mathbb{N} \times \mathbb{N}$ and $\mathbb{N}$, so there is room for everyone.

Nothing is wrong with the hotel. It is just a vivid picture of the fact that an infinite set can be in bijection with
a proper part of itself.

**Definition (Dedekind, 1888).** A set is **Dedekind-infinite** if it is in bijection with a proper subset of itself.

Every set that contains a copy of $\mathbb{N}$ is Dedekind-infinite (shift the copy along by one, as in the hotel, and
fix everything else). Finite sets are never Dedekind-infinite, by the pigeonhole principle. Whether every infinite set
contains a copy of $\mathbb{N}$ depends on a weak form of the axiom of choice (exercise 12 and
[Chapter 8](08-Axiomatic-Set-Theory.md)); with it, "infinite" and "Dedekind-infinite" mean the same thing.

### Intervals of the line

Hilbert's hotel trick also works inside the real numbers.

**Example 7.1.** $|(-1, 1)| = |\mathbb{R}|$. The map $f(x) = \dfrac{x}{1 - |x|}$ sends $(-1, 1)$ to $\mathbb{R}$. It
is a bijection, with inverse $g(y) = \dfrac{y}{1 + |y|}$.

**Check:** for $y \in \mathbb{R}$, $|g(y)| = |y|/(1 + |y|) < 1$, so $g(y) \in (-1, 1)$, and $g(y)$ has the same sign as
$y$. Then $1 - |g(y)| = 1/(1 + |y|)$, so $f(g(y)) = \frac{y}{1+|y|} \cdot (1 + |y|) = y$. Similarly $g(f(x)) = x$ for
$x \in (-1, 1)$. So a bounded interval has as many points as the whole line. The same is true of any two open
intervals, by a linear map $x \mapsto a + (b - a)x$ from $(0, 1)$ onto $(a, b)$.

**Example 7.2.** $|[0, 1]| = |(0, 1)|$. The two sets differ by two points, and we make room for them hotel-style. Inside
$[0, 1]$ pick the sequence $0, 1, \tfrac12, \tfrac13, \tfrac14, \ldots$ and define

$$
h(0) = \tfrac12, \qquad h\!\left(\tfrac1n\right) = \tfrac{1}{n + 2} \ \ (n \geq 1), \qquad h(x) = x \ \text{otherwise}.
$$

Then $0 \mapsto \tfrac12$, $1 \mapsto \tfrac13$, $\tfrac12 \mapsto \tfrac14$, $\tfrac13 \mapsto \tfrac15$, and so on: the
sequence is shifted two places along, which frees up the room for 0 and 1. Every point not of the form $0$ or
$\tfrac1n$ stays put. The values are all in $(0, 1)$, the map is injective, and every point of $(0, 1)$ is hit: a
point $\tfrac1k$ with $k \geq 2$ is $h(0)$ if $k = 2$ and $h\!\left(\tfrac1{k-2}\right)$ if $k \geq 3$; any other point
is its own image.

Section 7.5 will make such fiddly constructions unnecessary.

## 7.2 Countable sets

The smallest infinite size is the size of $\mathbb{N}$. Sets of that size are the ones you can list.

### Definitions

A set $A$ is **countably infinite** if $|A| = |\mathbb{N}|$. It is **countable** if it is finite or countably infinite,
and **uncountable** otherwise. The cardinality of $\mathbb{N}$ is written $\aleph_0$ ("aleph-null"; $\aleph$ is the first
letter of the Hebrew alphabet, Cantor's choice).

A bijection $f : \mathbb{N} \to A$ is the same thing as a list $f(0), f(1), f(2), \ldots$ in which every element of $A$
appears exactly once. So "countably infinite" means "can be listed in a single infinite sequence without repeats". Allowing
repeats changes nothing, as the next theorem shows.

**Theorem 7.2.** For a nonempty set $A$ the following are equivalent:

1. $A$ is countable;
2. there is an injection $A \to \mathbb{N}$;
3. there is a surjection $\mathbb{N} \to A$ (a list, possibly with repeats, that includes every element).

*Proof.* (1 ⇒ 3) If $A$ is countably infinite, a bijection $\mathbb{N} \to A$ is a surjection. If $A = \{a_0, \ldots,
a_{n-1}\}$ is finite, send $k \mapsto a_k$ for $k < n$ and $k \mapsto a_0$ for $k \geq n$.

(3 ⇒ 2) If $s : \mathbb{N} \to A$ is surjective, define $i(a)$ to be the *least* $k$ with $s(k) = a$, which exists by
the well-ordering of $\mathbb{N}$. Different $a$ get different $k$ (since $s(i(a)) = a$), so $i$ is injective. Note that
no arbitrary choice is needed: "least" picks one.

(2 ⇒ 1) Let $i : A \to \mathbb{N}$ be injective; then $A$ is in bijection with its image $S = i[A] \subseteq \mathbb{N}$,
so it is enough to show every subset $S$ of $\mathbb{N}$ is countable. If $S$ is finite we are done. Otherwise list $S$
in increasing order: $s_0$ is the least element of $S$, $s_1$ the least element of $S \setminus \{s_0\}$, and so on.
Each $s_n$ exists because $S$ is infinite, so $S \setminus \{s_0, \ldots, s_{n-1}\}$ is nonempty. The list is strictly
increasing, so no repeats; and every $s \in S$ appears, because there are only finitely many elements of $S$ below
$s$, so $s$ is $s_n$ where $n$ is that number. $\square$

**Corollary.** Every subset of a countable set is countable, and the image of a countable set under any function is
countable.

### The integers

**Theorem 7.3.** $\mathbb{Z}$ is countable.

*Proof.* List the integers as $0, 1, -1, 2, -2, 3, -3, \ldots$. As a formula, $f : \mathbb{N} \to \mathbb{Z}$ with

$$
f(n) = \begin{cases} (n + 1)/2 & n \text{ odd}, \\ -n/2 & n \text{ even}. \end{cases}
$$

The odd $n$ go to the positive integers $1, 2, 3, \ldots$, bijectively, and the even $n$ go to $0, -1, -2, \ldots$,
bijectively. $\square$

Listing the integers in their usual order fails: $\ldots, -2, -1, 0, 1, 2, \ldots$ has no first term. Countability is
about the existence of *some* list, not about the natural order.

### Pairs

**Theorem 7.4.** $\mathbb{N} \times \mathbb{N}$ is countable. In fact the **Cantor pairing function**

$$
\pi(a, b) = \frac{(a + b)(a + b + 1)}{2} + b
$$

is a bijection $\mathbb{N} \times \mathbb{N} \to \mathbb{N}$.

Arrange the pairs in a grid and walk along the diagonals $a + b = 0, 1, 2, \ldots$ in turn, each from bottom right to
top left:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 260" role="img" aria-label="The pairs (a, b) of natural numbers with a and b from 0 to 4 drawn as a grid of dots, each labelled with its place in Cantor's list. The list walks along the diagonals a + b = 0, 1, 2, 3, 4 in turn, each from the bottom right to the top left: (0,0) is 0, (1,0) is 1, (0,1) is 2, (2,0) is 3, and so on up to (0,4), which is 14.">
  <line x1="50" y1="230" x2="420" y2="230" stroke="currentColor" stroke-width="1.2"/>
  <line x1="50" y1="230" x2="50" y2="15" stroke="currentColor" stroke-width="1.2"/>
  <text x="412" y="250" font-size="13" fill="currentColor">a</text>
  <text x="30" y="22" font-size="13" fill="currentColor">b</text>
  <line x1="70" y1="210" x2="70" y2="210" stroke="#eea66f" stroke-width="3"/>
  <line x1="140" y1="210" x2="70" y2="165" stroke="#eea66f" stroke-width="3"/>
  <line x1="210" y1="210" x2="70" y2="120" stroke="#eea66f" stroke-width="3"/>
  <line x1="280" y1="210" x2="70" y2="75" stroke="#eea66f" stroke-width="3"/>
  <line x1="350" y1="210" x2="70" y2="30" stroke="#eea66f" stroke-width="3"/>
  <line x1="70" y1="210" x2="140" y2="210" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="70" y1="165" x2="210" y2="210" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="70" y1="120" x2="280" y2="210" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="70" y1="75" x2="350" y2="210" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/>
  <text x="70" y="248" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <text x="36" y="214" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <text x="140" y="248" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <text x="36" y="169" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <text x="210" y="248" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <text x="36" y="124" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <text x="280" y="248" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <text x="36" y="79" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <text x="350" y="248" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <text x="36" y="34" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <circle cx="70" cy="210" r="13" fill="#9cc9ea" stroke="currentColor"/>
  <text x="70" y="214" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <circle cx="70" cy="165" r="13" fill="#9cc9ea" stroke="currentColor"/>
  <text x="70" y="169" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <circle cx="70" cy="120" r="13" fill="#9cc9ea" stroke="currentColor"/>
  <text x="70" y="124" font-size="12" text-anchor="middle" fill="currentColor">5</text>
  <circle cx="70" cy="75" r="13" fill="#9cc9ea" stroke="currentColor"/>
  <text x="70" y="79" font-size="12" text-anchor="middle" fill="currentColor">9</text>
  <circle cx="70" cy="30" r="13" fill="#9cc9ea" stroke="currentColor"/>
  <text x="70" y="34" font-size="12" text-anchor="middle" fill="currentColor">14</text>
  <circle cx="140" cy="210" r="13" fill="#9cc9ea" stroke="currentColor"/>
  <text x="140" y="214" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="140" cy="165" r="13" fill="#9cc9ea" stroke="currentColor"/>
  <text x="140" y="169" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <circle cx="140" cy="120" r="13" fill="#9cc9ea" stroke="currentColor"/>
  <text x="140" y="124" font-size="12" text-anchor="middle" fill="currentColor">8</text>
  <circle cx="140" cy="75" r="13" fill="#9cc9ea" stroke="currentColor"/>
  <text x="140" y="79" font-size="12" text-anchor="middle" fill="currentColor">13</text>
  <circle cx="140" cy="30" r="13" fill="none" stroke="currentColor"/>
  <circle cx="210" cy="210" r="13" fill="#9cc9ea" stroke="currentColor"/>
  <text x="210" y="214" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <circle cx="210" cy="165" r="13" fill="#9cc9ea" stroke="currentColor"/>
  <text x="210" y="169" font-size="12" text-anchor="middle" fill="currentColor">7</text>
  <circle cx="210" cy="120" r="13" fill="#9cc9ea" stroke="currentColor"/>
  <text x="210" y="124" font-size="12" text-anchor="middle" fill="currentColor">12</text>
  <circle cx="210" cy="75" r="13" fill="none" stroke="currentColor"/>
  <circle cx="210" cy="30" r="13" fill="none" stroke="currentColor"/>
  <circle cx="280" cy="210" r="13" fill="#9cc9ea" stroke="currentColor"/>
  <text x="280" y="214" font-size="12" text-anchor="middle" fill="currentColor">6</text>
  <circle cx="280" cy="165" r="13" fill="#9cc9ea" stroke="currentColor"/>
  <text x="280" y="169" font-size="12" text-anchor="middle" fill="currentColor">11</text>
  <circle cx="280" cy="120" r="13" fill="none" stroke="currentColor"/>
  <circle cx="280" cy="75" r="13" fill="none" stroke="currentColor"/>
  <circle cx="280" cy="30" r="13" fill="none" stroke="currentColor"/>
  <circle cx="350" cy="210" r="13" fill="#9cc9ea" stroke="currentColor"/>
  <text x="350" y="214" font-size="12" text-anchor="middle" fill="currentColor">10</text>
  <circle cx="350" cy="165" r="13" fill="none" stroke="currentColor"/>
  <circle cx="350" cy="120" r="13" fill="none" stroke="currentColor"/>
  <circle cx="350" cy="75" r="13" fill="none" stroke="currentColor"/>
  <circle cx="350" cy="30" r="13" fill="none" stroke="currentColor"/>
</svg>
</div>

*Proof.* Let $w = a + b$ be the diagonal of $(a, b)$. Diagonal $w$ contains the $w + 1$ pairs $(w, 0), (w-1, 1), \ldots,
(0, w)$. The diagonals before it contain $1 + 2 + \cdots + w = \frac{w(w+1)}{2}$ pairs, the $w$-th **triangular number**
$T_w$. So the walk reaches $(w, 0)$ at step $T_w$, and $(a, b)$, which is $b$ steps further along its diagonal, at step
$T_w + b = \pi(a, b)$. Every pair is reached exactly once, and the walk never stops, so every natural number is a step.
Formally: given $n$, let $w$ be the largest number with $T_w \leq n$, and put $b = n - T_w$; since
$T_{w+1} = T_w + w + 1 > n$ we get $0 \leq b \leq w$, and $a = w - b \geq 0$ is the unique pair with $\pi(a, b) = n$.
$\square$

**Example 7.3.** $\pi(3, 4) = \frac{7 \cdot 8}{2} + 4 = 32$. Which pair has $\pi(a, b) = 100$? The triangular numbers
are $\ldots, 78, 91, 105$, so $w = 13$, $b = 100 - 91 = 9$ and $a = 13 - 9 = 4$. **Check:**
$\pi(4, 9) = \frac{13 \cdot 14}{2} + 9 = 91 + 9 = 100$.

A cheaper injection, enough by Theorem 7.2, is $(a, b) \mapsto 2^a 3^b$: by unique factorization different pairs give
different numbers. By induction, $\mathbb{N}^k$ is countable for every $k$, and if $A$ and $B$ are countable, so is
$A \times B$.

**Theorem 7.5.** A countable union of countable sets is countable: if $A_0, A_1, A_2, \ldots$ are countable, so is
$\bigcup_n A_n$.

*Proof.* We may assume every $A_n$ is nonempty (drop empty ones; if all are empty the union is empty). For each $n$ pick
a surjection $s_n : \mathbb{N} \to A_n$ (Theorem 7.2). Then $(n, k) \mapsto s_n(k)$ is a surjection from
$\mathbb{N} \times \mathbb{N}$ onto the union, and composing with the inverse of $\pi$ gives a surjection from
$\mathbb{N}$. By Theorem 7.2 the union is countable. $\square$

An honest footnote: the proof *picks* a surjection $s_n$ for each of infinitely many $n$ at once, and each $A_n$ has many
surjections. That is a use of the axiom of choice, in a weak form called **countable choice**. Without any choice the
theorem can fail; there are models of set theory without choice in which $\mathbb{R}$ is a countable union of countable
sets. In everyday mathematics the sets usually come with explicit listings and no choice is needed, as in the next
examples.

### The rationals

**Theorem 7.6.** $\mathbb{Q}$ is countable.

*Proof.* Every rational can be written uniquely in lowest terms as $p/q$ with $q \geq 1$ and $\gcd(p, q) = 1$. The map
$p/q \mapsto (p, q)$ is then an injection $\mathbb{Q} \to \mathbb{Z} \times \mathbb{N}$, which is countable by
Theorems 7.3 and 7.4. By Theorem 7.2, $\mathbb{Q}$ is countable, and it is infinite, so countably infinite. $\square$

This surprises everyone at first. Between any two rationals there are infinitely many more, and the rationals are
dense in the line, yet they can be listed one after another like the whole numbers. Density is about order; cardinality
ignores order completely.

### Try it in Python

There is a beautiful explicit list of the positive rationals, each appearing exactly once, found by Neil Calkin and
Herbert Wilf (2000). Start at 1 and repeatedly apply $x \mapsto 1/(2\lfloor x \rfloor - x + 1)$:

```python
from fractions import Fraction
from math import floor

x = Fraction(1)
for _ in range(10):
    print(x, end=", ")
    x = 1 / (2 * floor(x) - x + 1)
# 1, 1/2, 2, 1/3, 3/2, 2/3, 3, 1/4, 4/3, 3/5,
```

Every positive rational turns up exactly once, already in lowest terms. The proof (in the paper listed at the end) uses
a binary tree in which $a/b$ has children $a/(a+b)$ and $(a+b)/b$.

### Algebraic numbers

A real number is **algebraic** if it is a root of a nonzero polynomial with integer coefficients, like $\sqrt 2$ (a
root of $x^2 - 2$) or the golden ratio (a root of $x^2 - x - 1$). Every rational is algebraic ($p/q$ is a root of
$qx - p$).

**Theorem 7.7 (Cantor, 1874).** The set of algebraic numbers is countable.

*Proof.* A polynomial $c_0 + c_1 x + \cdots + c_d x^d$ with integer coefficients is determined by the tuple
$(c_0, \ldots, c_d) \in \mathbb{Z}^{d+1}$, so for each degree $d$ there are countably many polynomials, and in all there are
countably many (Theorem 7.5, but with explicit listings of each $\mathbb{Z}^{d+1}$, so no choice is needed). A nonzero
polynomial of degree $d$ has at most $d$ real roots. List the roots of each polynomial in increasing order; the
algebraic numbers are then a countable union of finite lists, each given explicitly, and so countable. $\square$

The same idea shows that the set of finite strings over a countable alphabet is countable. So there are only
countably many English sentences, countably many computer programs, and countably many real numbers that can be
defined by a formula or computed by a program. Remember this when we reach 7.3.

## 7.3 Cantor's diagonal argument

Given all this, perhaps *every* infinite set is countable? Cantor proved in 1874 that the real numbers are not. His
first proof used nested intervals; in 1891 he found the much simpler **diagonal argument**, which has since become one
of the most copied ideas in mathematics.

**Theorem 7.8.** The interval $(0, 1)$, and so $\mathbb{R}$, is uncountable.

First, one fact about decimals. Every real number in $(0, 1)$ has a decimal expansion $0.d_1 d_2 d_3 \ldots$, and two
*different* expansions give the same number only in one situation: one ends in an endless string of 9s and the other in
an endless string of 0s, as in $0.4999\ldots = 0.5000\ldots$. In particular, a number whose digits are all 4s and 5s has
only one expansion, and differs from any real number whose expansion differs from it in some digit.

*Proof.* Suppose, for contradiction, that $r_1, r_2, r_3, \ldots$ is a list of every real number in $(0, 1)$. Write each
in decimal (if a number has two expansions, pick either):

$$
\begin{aligned}
r_1 &= 0.\,d_{11}\, d_{12}\, d_{13}\, d_{14} \ldots \\
r_2 &= 0.\,d_{21}\, d_{22}\, d_{23}\, d_{24} \ldots \\
r_3 &= 0.\,d_{31}\, d_{32}\, d_{33}\, d_{34} \ldots \\
&\ \ \vdots
\end{aligned}
$$

Build a new number $x = 0.e_1 e_2 e_3 \ldots$ by looking down the diagonal:

$$
e_n = \begin{cases} 4 & \text{if } d_{nn} = 5, \\ 5 & \text{if } d_{nn} \neq 5. \end{cases}
$$

Then $x \in (0, 1)$, and its digits are all 4s and 5s. For each $n$, the $n$-th digit of $x$ differs from the $n$-th
digit of $r_n$. Since $x$ has only one decimal expansion, $x \neq r_n$. This holds for every $n$, so $x$ is not on the
list, contradicting the assumption that the list contained every number in $(0, 1)$. So no list exists. Finally
$\mathbb{R}$ contains $(0, 1)$, and a subset of a countable set is countable, so $\mathbb{R}$ is uncountable too.
$\square$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 300" role="img" aria-label="Cantor's diagonal argument. Six listed numbers r1 to r6 between 0 and 1 are written as decimals in a table, one digit per cell. The diagonal cells, the first digit of r1, the second of r2 and so on, are highlighted: 5, 3, 8, 0, 7, 2. The new number x below uses digit 4 where the diagonal digit is 5 and digit 5 otherwise, giving x = 0.455555..., which differs from every r n in its n-th digit.">
  <text x="130" y="28" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <text x="170" y="28" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <text x="210" y="28" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <text x="250" y="28" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <text x="290" y="28" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <text x="330" y="28" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <text x="20" y="62" font-size="13" fill="currentColor">r1 = 0.</text>
  <rect x="110" y="40" width="40" height="34" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="130" y="62" font-size="14" text-anchor="middle" fill="currentColor">5</text>
  <rect x="150" y="40" width="40" height="34" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="170" y="62" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <rect x="190" y="40" width="40" height="34" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="210" y="62" font-size="14" text-anchor="middle" fill="currentColor">4</text>
  <rect x="230" y="40" width="40" height="34" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="250" y="62" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <rect x="270" y="40" width="40" height="34" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="290" y="62" font-size="14" text-anchor="middle" fill="currentColor">5</text>
  <rect x="310" y="40" width="40" height="34" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="330" y="62" font-size="14" text-anchor="middle" fill="currentColor">9</text>
  <text x="360" y="62" font-size="14" fill="currentColor">…</text>
  <text x="20" y="96" font-size="13" fill="currentColor">r2 = 0.</text>
  <rect x="110" y="74" width="40" height="34" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="130" y="96" font-size="14" text-anchor="middle" fill="currentColor">3</text>
  <rect x="150" y="74" width="40" height="34" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="170" y="96" font-size="14" text-anchor="middle" fill="currentColor">3</text>
  <rect x="190" y="74" width="40" height="34" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="210" y="96" font-size="14" text-anchor="middle" fill="currentColor">3</text>
  <rect x="230" y="74" width="40" height="34" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="250" y="96" font-size="14" text-anchor="middle" fill="currentColor">3</text>
  <rect x="270" y="74" width="40" height="34" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="290" y="96" font-size="14" text-anchor="middle" fill="currentColor">3</text>
  <rect x="310" y="74" width="40" height="34" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="330" y="96" font-size="14" text-anchor="middle" fill="currentColor">3</text>
  <text x="360" y="96" font-size="14" fill="currentColor">…</text>
  <text x="20" y="130" font-size="13" fill="currentColor">r3 = 0.</text>
  <rect x="110" y="108" width="40" height="34" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="130" y="130" font-size="14" text-anchor="middle" fill="currentColor">7</text>
  <rect x="150" y="108" width="40" height="34" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="170" y="130" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <rect x="190" y="108" width="40" height="34" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="210" y="130" font-size="14" text-anchor="middle" fill="currentColor">8</text>
  <rect x="230" y="108" width="40" height="34" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="250" y="130" font-size="14" text-anchor="middle" fill="currentColor">2</text>
  <rect x="270" y="108" width="40" height="34" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="290" y="130" font-size="14" text-anchor="middle" fill="currentColor">8</text>
  <rect x="310" y="108" width="40" height="34" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="330" y="130" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <text x="360" y="130" font-size="14" fill="currentColor">…</text>
  <text x="20" y="164" font-size="13" fill="currentColor">r4 = 0.</text>
  <rect x="110" y="142" width="40" height="34" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="130" y="164" font-size="14" text-anchor="middle" fill="currentColor">0</text>
  <rect x="150" y="142" width="40" height="34" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="170" y="164" font-size="14" text-anchor="middle" fill="currentColor">5</text>
  <rect x="190" y="142" width="40" height="34" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="210" y="164" font-size="14" text-anchor="middle" fill="currentColor">0</text>
  <rect x="230" y="142" width="40" height="34" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="250" y="164" font-size="14" text-anchor="middle" fill="currentColor">0</text>
  <rect x="270" y="142" width="40" height="34" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="290" y="164" font-size="14" text-anchor="middle" fill="currentColor">0</text>
  <rect x="310" y="142" width="40" height="34" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="330" y="164" font-size="14" text-anchor="middle" fill="currentColor">0</text>
  <text x="360" y="164" font-size="14" fill="currentColor">…</text>
  <text x="20" y="198" font-size="13" fill="currentColor">r5 = 0.</text>
  <rect x="110" y="176" width="40" height="34" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="130" y="198" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <rect x="150" y="176" width="40" height="34" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="170" y="198" font-size="14" text-anchor="middle" fill="currentColor">2</text>
  <rect x="190" y="176" width="40" height="34" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="210" y="198" font-size="14" text-anchor="middle" fill="currentColor">5</text>
  <rect x="230" y="176" width="40" height="34" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="250" y="198" font-size="14" text-anchor="middle" fill="currentColor">5</text>
  <rect x="270" y="176" width="40" height="34" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="290" y="198" font-size="14" text-anchor="middle" fill="currentColor">7</text>
  <rect x="310" y="176" width="40" height="34" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="330" y="198" font-size="14" text-anchor="middle" fill="currentColor">4</text>
  <text x="360" y="198" font-size="14" fill="currentColor">…</text>
  <text x="20" y="232" font-size="13" fill="currentColor">r6 = 0.</text>
  <rect x="110" y="210" width="40" height="34" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="130" y="232" font-size="14" text-anchor="middle" fill="currentColor">9</text>
  <rect x="150" y="210" width="40" height="34" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="170" y="232" font-size="14" text-anchor="middle" fill="currentColor">9</text>
  <rect x="190" y="210" width="40" height="34" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="210" y="232" font-size="14" text-anchor="middle" fill="currentColor">9</text>
  <rect x="230" y="210" width="40" height="34" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="250" y="232" font-size="14" text-anchor="middle" fill="currentColor">5</text>
  <rect x="270" y="210" width="40" height="34" fill="none" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="290" y="232" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <rect x="310" y="210" width="40" height="34" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="330" y="232" font-size="14" text-anchor="middle" fill="currentColor">2</text>
  <text x="360" y="232" font-size="14" fill="currentColor">…</text>
  <text x="20" y="280" font-size="13" fill="currentColor">x = 0.</text>
  <rect x="110" y="258" width="40" height="34" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="130" y="280" font-size="14" text-anchor="middle" fill="currentColor">4</text>
  <rect x="150" y="258" width="40" height="34" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="170" y="280" font-size="14" text-anchor="middle" fill="currentColor">5</text>
  <rect x="190" y="258" width="40" height="34" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="210" y="280" font-size="14" text-anchor="middle" fill="currentColor">5</text>
  <rect x="230" y="258" width="40" height="34" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="250" y="280" font-size="14" text-anchor="middle" fill="currentColor">5</text>
  <rect x="270" y="258" width="40" height="34" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="290" y="280" font-size="14" text-anchor="middle" fill="currentColor">5</text>
  <rect x="310" y="258" width="40" height="34" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>
  <text x="330" y="280" font-size="14" text-anchor="middle" fill="currentColor">5</text>
  <text x="360" y="280" font-size="14" fill="currentColor">…</text>
</svg>
</div>

The picture runs the construction on the first six numbers of a list. The argument does not say "this particular list
misses something, try another"; it says *every* list misses something, and it tells you what.

The digits 4 and 5 were chosen only to dodge the $0.4999\ldots = 0.5$ issue; any two digits other than 0 and 9 would do.
Applied to infinite strings of 0s and 1s instead of decimals, the same argument needs no such care:

**Theorem 7.9.** The set $\{0,1\}^{\mathbb{N}}$ of infinite binary sequences is uncountable.

*Proof.* Given any list $s_0, s_1, s_2, \ldots$ of binary sequences, the sequence $t$ with $t(n) = 1 - s_n(n)$ differs
from $s_n$ in place $n$, for every $n$. $\square$

### Consequences

- **Transcendental numbers exist.** A real number that is not algebraic is **transcendental**. The algebraic numbers
  are countable (Theorem 7.7) and $\mathbb{R}$ is not, so the transcendental numbers are uncountable; in the sense of
  cardinality, almost every real number is transcendental. Joseph Liouville had already constructed explicit
  transcendental numbers in 1844 and 1851, and Charles Hermite proved $e$ transcendental in 1873, but Cantor's proof
  showed existence without exhibiting a single example. That pure existence proof was controversial at the time and is
  now routine.
- **Most real numbers cannot be described.** There are only countably many finite descriptions or programs (7.2), so
  only countably many real numbers can be defined, or computed to any desired accuracy by a program. Almost all reals
  are neither. Turing's 1936 paper on computable numbers, the subject of
  [Chapter 13](13-Algorithms-and-Turing-Machines.md), begins from exactly this observation.
- **Functions from $\mathbb{N}$ to $\mathbb{N}$ are uncountable** (exercise 7), and so there are functions no program
  computes. The halting problem ([Chapter 14](14-Undecidability.md)) gives a specific one, by a diagonal argument.

### Size and length

Countable sets are "small" in another sense too. A countable set $\{x_1, x_2, \ldots\}$ of reals can be covered by
intervals of total length as small as you like: cover $x_n$ by an interval of length $\varepsilon / 2^n$, for a total of
at most $\varepsilon$. So $\mathbb{Q} \cap [0, 1]$, though dense, has "length zero", and this gives a second proof that
$[0, 1]$, of length 1, is uncountable (once you know that covering $[0, 1]$ by intervals needs total length at least 1,
a fact that itself takes proof). But the converse fails: the **Cantor set**
([Topics: The Cantor set](../../topics/infinity/level-7/05-cantor-set.md)) has length zero and is uncountable.
Cardinality and length measure different things.

<figure class="play" data-play="diagonal"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Cantor's diagonal argument: flip the diagonal and the new string is missing from any list.</figcaption></figure>

## 7.4 Cantor's theorem

The diagonal argument shows $\mathbb{N}$ is smaller than $\{0,1\}^{\mathbb{N}}$, which is the same as $\mathcal{P}(\mathbb{N})$
(a binary sequence is a yes/no for each $n$, that is, a subset; 6.4). Cantor saw that the argument works for every set.

### Comparing sizes

Write $|A| \leq |B|$ if there is an injection $A \to B$ ("$A$ fits inside $B$"), and $|A| < |B|$ if $|A| \leq |B|$ but
$|A| \neq |B|$, that is, there is an injection but no bijection. Composing injections shows $\leq$ is transitive.

**Theorem 7.10 (Cantor, 1891).** For every set $A$, there is no surjection $A \to \mathcal{P}(A)$. Consequently
$|A| < |\mathcal{P}(A)|$.

*Proof.* Let $f : A \to \mathcal{P}(A)$ be any function. So for each $a \in A$, $f(a)$ is a subset of $A$, and it either
contains $a$ or does not. Let

$$
D = \{a \in A : a \notin f(a)\},
$$

the set of elements not in their own image. $D$ is a subset of $A$, so $D \in \mathcal{P}(A)$. Suppose $D = f(d)$ for
some $d \in A$. Then

$$
d \in D \iff d \notin f(d) \iff d \notin D,
$$

the first by the definition of $D$ and the second because $f(d) = D$. That is a contradiction, so $D$ is not a value of
$f$, and $f$ is not surjective.

For the consequence: $a \mapsto \{a\}$ is an injection $A \to \mathcal{P}(A)$, so $|A| \leq |\mathcal{P}(A)|$. A
bijection would be a surjection, which we have just ruled out, so $|A| \neq |\mathcal{P}(A)|$. $\square$

**Example 7.4.** Take $A = \{1, 2, 3\}$ and $f(1) = \{1, 2\}$, $f(2) = \varnothing$, $f(3) = \{1, 3\}$. Then
$1 \in f(1)$, $2 \notin f(2)$, $3 \in f(3)$, so $D = \{2\}$. **Check:** $\{2\}$ is not among $f(1), f(2), f(3)$. Of
course no function from 3 elements onto 8 subsets could be surjective anyway; the point is that $D$ names a missed
subset explicitly, and does so for infinite sets just as well.

The proof is Russell's paradox ([Chapter 5](05-Sets.md)) turned into a theorem: "$a \notin f(a)$" is "$x \notin x$" with
$f$ in the middle. Historically it went the other way: Russell found his paradox by thinking about this proof.

### The ladder of infinities

Applying the theorem again and again gives an endless ladder

$$
|\mathbb{N}| < |\mathcal{P}(\mathbb{N})| < |\mathcal{P}(\mathcal{P}(\mathbb{N}))| < \cdots,
$$

each infinity strictly larger than the one before. And there is no largest infinity, nor a set of all sets: if $V$
contained every set, then $\mathcal{P}(V) \subseteq V$, so $|\mathcal{P}(V)| \leq |V|$, contradicting Cantor's theorem.
This is **Cantor's paradox**, which Cantor himself had noticed by the late 1890s. For a finite set, Cantor's theorem says
$n < 2^n$, which you can also prove by induction; for that reason the cardinality of $\mathcal{P}(A)$ is written
$2^{|A|}$ in general.

## 7.5 The Schröder-Bernstein theorem

*Level: advanced.*

Showing two sets are the same size means finding a bijection, and bijections can be fiddly (recall Example 7.2). Often it
is easy to fit each set inside the other. Is that enough? For finite sets, obviously: $m \leq n$ and $n \leq m$ give
$m = n$. For infinite sets it is a real theorem.

**Theorem 7.11 (Schröder-Bernstein).** If there are injections $f : A \to B$ and $g : B \to A$, then there is a bijection
$h : A \to B$. In symbols: if $|A| \leq |B|$ and $|B| \leq |A|$ then $|A| = |B|$.

*The idea.* We want to use $f$ on part of $A$ and $g^{-1}$ on the rest. The trouble is the points of $A$ that are not
values of $g$: they have no $g^{-1}$, so they must use $f$. But then their images $f(a)$ are "taken" in $B$, so the points
$g(f(a))$ in $A$ must also use $f$ (otherwise $g^{-1}$ would send them to $f(a)$ too), and so on. We collect all the
points forced to use $f$ this way.

*Proof.* Define subsets of $A$ by

$$
C_0 = A \setminus g[B], \qquad C_{n+1} = g[f[C_n]] \ \ (n \geq 0), \qquad C = \bigcup_{n \geq 0} C_n.
$$

So $C_0$ is the set of points of $A$ not hit by $g$, and $C$ is everything reachable from them by applying $g \circ f$
any number of times. Define $h : A \to B$ by

$$
h(a) = \begin{cases} f(a) & \text{if } a \in C, \\ g^{-1}(a) & \text{if } a \notin C. \end{cases}
$$

*$h$ is well defined.* If $a \notin C$ then $a \notin C_0$, so $a \in g[B]$: $a = g(b)$ for some $b$, and only one since
$g$ is injective. So $g^{-1}(a)$ makes sense.

*$h$ is injective.* Let $h(a) = h(a')$. If both are in $C$, then $f(a) = f(a')$ and $a = a'$ since $f$ is injective. If
neither is in $C$, then $g^{-1}(a) = g^{-1}(a')$, and applying $g$ gives $a = a'$. The mixed case cannot happen: suppose
$a \in C$, $a' \notin C$ and $f(a) = g^{-1}(a')$. Then $a' = g(f(a))$. Since $a \in C_n$ for some $n$, this says
$a' \in g[f[C_n]] = C_{n+1} \subseteq C$, a contradiction.

*$h$ is surjective.* Let $b \in B$, and look at the point $g(b) \in A$. *Case 1:* $g(b) \notin C$. Then
$h(g(b)) = g^{-1}(g(b)) = b$. *Case 2:* $g(b) \in C$. It is not in $C_0$, since it is a value of $g$; so
$g(b) \in C_{n+1} = g[f[C_n]]$ for some $n$, that is $g(b) = g(f(a))$ with $a \in C_n$. Since $g$ is injective, $b = f(a)$,
and $a \in C$, so $h(a) = f(a) = b$. $\square$

The proof constructs $h$ explicitly from $f$ and $g$, with no choices: it is valid without the axiom of choice.

**History.** Cantor stated the theorem in the 1880s and could prove it only using the assumption that any two sets are
comparable, which he could not prove either. Richard Dedekind found a proof in 1887 but did not publish it (it was found
in his papers later). Ernst Schröder announced a proof in 1896, published in 1898, which turned out to be flawed. Felix
Bernstein, then a 19-year-old student of Cantor's, gave a correct proof in 1897, published in Émile Borel's book on the
theory of functions (1898). The name honours the two published attempts; "Cantor-Bernstein" and
"Cantor-Schröder-Bernstein" are also used.

### Using it

**Example 7.5.** $|[0, 1]| = |(0, 1)|$ again, with no work: inclusion $(0, 1) \to [0, 1]$ is injective, and
$x \mapsto \tfrac14 + \tfrac{x}{2}$ is an injection $[0, 1] \to (0, 1)$ (its values are in $[\tfrac14, \tfrac34]$).

**Example 7.6.** Any two intervals with more than one point, open, closed or half-open, bounded or not, have the
cardinality of $\mathbb{R}$. Each contains a small open interval, which is in bijection with $\mathbb{R}$
(Example 7.1), and sits inside $\mathbb{R}$.

**Theorem 7.12.** $|\mathbb{R}| = |\mathcal{P}(\mathbb{N})|$.

*Proof.* Injection $\mathcal{P}(\mathbb{N}) \to \mathbb{R}$: send $S \subseteq \mathbb{N}$ to the number
$\sum_{n \in S} 10^{-(n+1)}$, whose decimal digits are 1 in the places $n + 1$ for $n \in S$ and 0 elsewhere. A number
whose digits are all 0s and 1s has only one expansion (no tail of 9s), so different sets give different numbers.

Injection $\mathbb{R} \to \mathcal{P}(\mathbb{Q})$: send $x$ to its **Dedekind cut** $\{q \in \mathbb{Q} : q < x\}$. If
$x < y$ there is a rational $q$ with $x < q < y$ (density of $\mathbb{Q}$), and $q$ is in the cut of $y$ but not of $x$;
so different reals give different cuts.

Since $\mathbb{Q}$ is countably infinite, a bijection $\mathbb{Q} \to \mathbb{N}$ induces a bijection
$\mathcal{P}(\mathbb{Q}) \to \mathcal{P}(\mathbb{N})$ (apply it to every element of a subset). Composing gives an injection
$\mathbb{R} \to \mathcal{P}(\mathbb{N})$. Schröder-Bernstein finishes the proof. $\square$

The cardinality of $\mathbb{R}$ is called the **cardinality of the continuum** and written $\mathfrak{c}$ or $2^{\aleph_0}$.

**Theorem 7.13.** $|\mathbb{R} \times \mathbb{R}| = |\mathbb{R}|$: the plane has as many points as the line.

*Proof.* By Theorem 7.12 it is enough to show $|\mathcal{P}(\mathbb{N}) \times \mathcal{P}(\mathbb{N})| =
|\mathcal{P}(\mathbb{N})|$. Send the pair $(S, T)$ to the set $\{2n : n \in S\} \cup \{2n + 1 : n \in T\}$. This is a
bijection: from the image you recover $S$ from the even members and $T$ from the odd members, and every subset of
$\mathbb{N}$ splits this way. $\square$

Cantor found this in 1877 and was astonished; in a letter to Dedekind he wrote that he saw it but did not believe it. It
means dimension is not a matter of cardinality. (The bijection is necessarily very discontinuous: a theorem of
topology, invariance of domain, shows no continuous bijection between $\mathbb{R}$ and $\mathbb{R}^2$ has a continuous
inverse.)

### Are any two sizes comparable?

For finite sets, either $|A| \leq |B|$ or $|B| \leq |A|$. Is this true for all sets? It turns out to be equivalent to the
axiom of choice (a theorem of Friedrich Hartogs, 1915). With choice, cardinals are totally ordered, and in fact
well-ordered, which is what allows the aleph notation in the next section. That story is
[Chapter 8](08-Axiomatic-Set-Theory.md).

## 7.6 The continuum hypothesis

*Level: advanced (statement); expert (the proofs, described only).*

We have two infinite sizes on the line: $\aleph_0$, the size of $\mathbb{N}$ and $\mathbb{Q}$, and $\mathfrak{c}$, the size
of $\mathbb{R}$, with $\aleph_0 < \mathfrak{c}$. Every subset of $\mathbb{R}$ we have met has one of these two sizes. Is
there anything in between?

**The continuum hypothesis (CH).** There is no set $S$ with $\aleph_0 < |S| < \mathfrak{c}$. Equivalently: every infinite
subset of $\mathbb{R}$ is either countable or in bijection with $\mathbb{R}$.

Cantor formulated it in 1878 and spent years trying to prove it. Using the axiom of choice, the infinite cardinals are
well-ordered: $\aleph_0$ is the smallest, $\aleph_1$ the next one, $\aleph_2$ the next, and so on. Then CH says
$2^{\aleph_0} = \aleph_1$. The **generalized continuum hypothesis** (GCH) says that for every infinite cardinal $\kappa$
there is nothing strictly between $\kappa$ and $2^\kappa$.

### What was proved

- **For nice sets, CH is true.** Every uncountable closed subset of $\mathbb{R}$ contains a copy of the Cantor set, so has
  cardinality $\mathfrak{c}$ (the Cantor-Bendixson theorem, 1883-1884). Pavel Alexandrov and Felix Hausdorff
  independently extended this in 1916 to all Borel sets, the sets built from intervals by countable unions,
  intersections and complements. So a counterexample to CH, if there is one, cannot be a set you can describe in that
  way.
- **Hilbert's first problem.** In his list of 23 problems for the new century (Paris, 1900), Hilbert put Cantor's
  continuum problem first.
- **Gödel (1938-1940): CH cannot be disproved.** Kurt Gödel built, inside any model of set theory, a smaller model
  called the **constructible universe** $L$, in which every set is built in stages by explicit definitions. He proved that
  $L$ satisfies all the axioms of ZF set theory together with the axiom of choice and the generalized continuum
  hypothesis. So if ZF is consistent, so is ZFC + CH: no proof of "CH is false" can exist in ZFC. He announced this in
  1938 and published the full proof in a monograph in 1940.
- **Cohen (1963): CH cannot be proved.** Paul Cohen invented **forcing**, a method of enlarging a model of set theory by
  adding new sets in a controlled way. He added $\aleph_2$ new subsets of $\mathbb{N}$ to a model and showed the result
  still satisfies ZFC, but now $2^{\aleph_0} \geq \aleph_2$, so CH fails. So if ZF is consistent, so is ZFC + not-CH. He
  received the Fields Medal in 1966 for this work.

Together: **the continuum hypothesis is independent of ZFC**. The standard axioms of mathematics, which settle almost
every question ordinary mathematics asks, neither prove nor refute it. Both results are relative: they assume ZF is
consistent, which by Gödel's second incompleteness theorem ([Chapter 18](18-Godels-Incompleteness-Theorems.md)) ZF
cannot prove about itself.

Independence is not the same as "CH has no answer". It means the current axioms do not decide it. Some set theorists
think new axioms, justified on other grounds, should settle it, and there are serious proposals that point in
different directions; others think there are many equally good universes of sets, in some of which CH holds. That debate
is still open, and [Chapter 20](20-Where-Logic-Goes.md) returns to it. Forcing itself became the main tool of set theory,
used to prove the independence of hundreds of statements ([Chapter 20](20-Where-Logic-Goes.md), 20.2).

## A short history

Cantor's 1874 paper "On a property of the collection of all real algebraic numbers" proved both that the algebraic
numbers are countable and that the reals are not, the latter by nested intervals. In 1877 he proved
$|\mathbb{R}^2| = |\mathbb{R}|$, and in 1878 he defined equal cardinality by bijection and stated the continuum hypothesis.
His theory of transfinite ordinal and cardinal numbers developed through the 1880s, and in 1891 he published the
diagonal argument and the theorem that bears his name. Dedekind (1888) defined infinite sets as those equinumerous with
a proper part. Cantor's ideas met resistance, most famously from Leopold Kronecker, and also great support; Hilbert
wrote in 1926 that no one would drive us from the paradise Cantor had created. Bernstein (1897) proved the comparison
theorem, and Russell (1901) turned Cantor's proof into a paradox. Gödel (1940) and Cohen (1963) closed the question
Cantor had opened, by showing it cannot be closed with the axioms of [Chapter 8](08-Axiomatic-Set-Theory.md).

## Check yourself

??? question "1. Give a bijection $\mathbb{N} \to \mathbb{Z}$ and use it to find which natural number is sent to $-5$ and what $9$ is sent to."

    Use $f(n) = (n + 1)/2$ for odd $n$ and $f(n) = -n/2$ for even $n$, which lists $0, 1, -1, 2, -2, \ldots$. Then
    $f(10) = -5$, and $f(9) = 5$. **Check:** the list $0, 1, -1, 2, -2, 3, -3, 4, -4, 5, -5$ has $-5$ in position 10
    (counting from 0) and $5$ in position 9.

??? question "2. Find a bijection from $(0, 1)$ to $(0, \infty)$, with its inverse."

    $f(x) = \dfrac{x}{1 - x}$. For $0 < x < 1$ it is positive, and solving $y = x/(1 - x)$ gives $x = y/(1 + y)$, which
    lies in $(0, 1)$ for every $y > 0$. **Check:** $f\!\left(\frac{y}{1+y}\right) = \frac{y/(1+y)}{1/(1+y)} = y$.

??? question "3. Find an explicit bijection from $[0, 1]$ to $[0, 1)$."

    Shift the sequence $1, \tfrac12, \tfrac13, \ldots$ one place along: $h(1/n) = 1/(n + 1)$ for $n \geq 1$, and
    $h(x) = x$ for all other $x$ (including 0). Then 1 goes to $\tfrac12$, $\tfrac12$ to $\tfrac13$, and so on; 1 is no
    longer a value, every $1/k$ with $k \geq 2$ is $h(1/(k-1))$, and the other points are fixed.

??? question "4. Compute the Cantor pairing $\pi(5, 2)$, and find the pair $(a, b)$ with $\pi(a, b) = 50$."

    $\pi(5, 2) = \frac{7 \cdot 8}{2} + 2 = 30$. For 50: triangular numbers $\ldots, 36, 45, 55$, so $w = 9$,
    $b = 50 - 45 = 5$, $a = 9 - 5 = 4$. **Check:** $\pi(4, 5) = \frac{9 \cdot 10}{2} + 5 = 50$.

??? question "5. Show that the set of finite subsets of $\mathbb{N}$ is countable."

    Send a finite set $S$ to the number $\sum_{n \in S} 2^n$, whose binary digits are 1 exactly in the places in $S$. By
    uniqueness of binary representation this is a bijection between finite subsets of $\mathbb{N}$ and $\mathbb{N}$
    itself (the empty set goes to 0, $\{0, 2\}$ to 5, and so on). So the set is countably infinite.

??? question "6. Show that the set of infinite subsets of $\mathbb{N}$ is uncountable."

    $\mathcal{P}(\mathbb{N})$ is the union of the finite subsets (countable, by question 5) and the infinite subsets.
    If the infinite subsets were countable too, $\mathcal{P}(\mathbb{N})$ would be a union of two countable sets, hence
    countable, contradicting Cantor's theorem. So they are uncountable.

??? question "7. Show that the set of all functions $\mathbb{N} \to \mathbb{N}$ is uncountable, by a diagonal argument."

    Given any list $g_0, g_1, g_2, \ldots$ of such functions, define $h(n) = g_n(n) + 1$. Then $h(n) \neq g_n(n)$, so
    $h \neq g_n$ for every $n$, and $h$ is not on the list. No list contains every function, so the set is uncountable.

??? question "8. Prove that the set of irrational numbers is uncountable, and that it has the same cardinality as $\mathbb{R}$."

    Let $I = \mathbb{R} \setminus \mathbb{Q}$. If $I$ were countable, $\mathbb{R} = \mathbb{Q} \cup I$ would be a union
    of two countable sets, hence countable, which it is not. So $I$ is uncountable.

    For the cardinality, use the hotel trick. The set $E = \{\sqrt 2 + n : n \in \mathbb{N}\}$ is a countably infinite
    subset of $I$. The set $\mathbb{Q} \cup E$ is a union of two disjoint countably infinite sets, so it is countably
    infinite, and there is a bijection $\varphi : \mathbb{Q} \cup E \to E$. Define $h : \mathbb{R} \to I$ by
    $h(x) = \varphi(x)$ for $x \in \mathbb{Q} \cup E$ and $h(x) = x$ otherwise. The first part maps
    $\mathbb{Q} \cup E$ bijectively onto $E$, and the second maps the rest, $I \setminus E$, identically onto itself.
    These pieces are disjoint and together make up $I$, so $h$ is a bijection and $|I| = |\mathbb{R}| = \mathfrak{c}$.

??? question "9. For $A = \{1, 2, 3, 4\}$ and $f(1) = \{2, 3\}$, $f(2) = \{2\}$, $f(3) = \{1, 2, 4\}$, $f(4) = \varnothing$, find Cantor's set $D$ and check that it is not a value of $f$."

    $1 \notin f(1)$, $2 \in f(2)$, $3 \notin f(3)$, $4 \notin f(4)$. So $D = \{1, 3, 4\}$. It differs from $f(1)$ at
    1, from $f(2)$ at 2, from $f(3)$ at 3, and from $f(4)$ at 4, so it is none of them.

??? question "10. Use Schröder-Bernstein to show $|\mathbb{N} \times \mathbb{N}| = |\mathbb{N}|$ without the pairing function."

    $n \mapsto (n, 0)$ is an injection $\mathbb{N} \to \mathbb{N} \times \mathbb{N}$. And $(a, b) \mapsto 2^a 3^b$ is an
    injection $\mathbb{N} \times \mathbb{N} \to \mathbb{N}$, since by unique factorization $2^a 3^b = 2^c 3^d$ forces
    $a = c$ and $b = d$. Schröder-Bernstein gives a bijection.

??? question "11. Show that the set of all real sequences $(x_0, x_1, x_2, \ldots)$ has cardinality $\mathfrak{c}$."

    A real sequence is a function $\mathbb{N} \to \mathbb{R}$. Replace each $x_n$ by a subset $S_n \subseteq \mathbb{N}$
    (Theorem 7.12 gives a bijection $\mathbb{R} \to \mathcal{P}(\mathbb{N})$). The sequence $(S_n)$ corresponds to the
    subset $\{\pi(n, k) : k \in S_n\}$ of $\mathbb{N}$, where $\pi$ is Cantor's pairing; since $\pi$ is a bijection
    this matches sequences of subsets with subsets of $\mathbb{N}$ exactly. So the set of real sequences is in
    bijection with $\mathcal{P}(\mathbb{N})$, which has cardinality $\mathfrak{c}$.

??? question "12. Show that every infinite set $A$ has a countably infinite subset. Where does the proof use a choice?"

    Since $A$ is infinite it is nonempty: choose $a_0 \in A$. Since $A$ is infinite, $A \setminus \{a_0\}$ is nonempty:
    choose $a_1$ in it. In general $A \setminus \{a_0, \ldots, a_{n-1}\}$ is nonempty (otherwise $A$ would be finite),
    so choose $a_n$ in it. The $a_n$ are all different, so $\{a_0, a_1, \ldots\}$ is a countably infinite subset.
    The proof makes infinitely many arbitrary choices, one after another, each depending on the earlier ones. This is
    the **axiom of dependent choice**, a weak form of the axiom of choice. Without any choice there can be infinite
    sets with no countably infinite subset (they are infinite but not Dedekind-infinite), as was shown in the 1960s
    using Cohen's methods.

## What you learned

- Two sets have the same cardinality when there is a bijection between them; for infinite sets a part can be as big as
  the whole (Galileo, Hilbert's hotel).
- A set is countable when it can be listed; $\mathbb{Z}$, $\mathbb{N} \times \mathbb{N}$, $\mathbb{Q}$ and the algebraic
  numbers are countable, and countable unions of countable sets are countable (with countable choice).
- Cantor's diagonal argument shows $\mathbb{R}$ and $\{0,1\}^{\mathbb{N}}$ are uncountable; so transcendental numbers
  exist, and almost all reals cannot be described or computed.
- Cantor's theorem: no set maps onto its power set, so there is an endless ladder of infinities and no largest one.
- Schröder-Bernstein: injections both ways give a bijection, proved without choice; with it,
  $|\mathbb{R}| = |\mathcal{P}(\mathbb{N})| = |\mathbb{R}^2|$.
- The continuum hypothesis, "nothing between $\aleph_0$ and $\mathfrak{c}$", is independent of ZFC (Gödel 1940,
  Cohen 1963).

**Next:** [Chapter 8](08-Axiomatic-Set-Theory.md), the axioms that make all of this rigorous, the axiom of choice and its
equivalents, and the Banach-Tarski paradox.

## Further reading

- G. Cantor, *Contributions to the Founding of the Theory of Transfinite Numbers*, translated by P. Jourdain, 1915
  (Dover reprint). Cantor's own exposition of 1895-1897.
- J. W. Dauben, *Georg Cantor: His Mathematics and Philosophy of the Infinite*, 1979. The standard history.
- H. B. Enderton, *Elements of Set Theory*, 1977. Chapter 6 on cardinal numbers.
- N. Calkin and H. S. Wilf, "Recounting the rationals", *American Mathematical Monthly* 107, 2000.
- K. Gödel, *The Consistency of the Continuum Hypothesis*, 1940.
- P. J. Cohen, *Set Theory and the Continuum Hypothesis*, 1966.
- R. Smullyan and M. Fitting, *Set Theory and the Continuum Problem*, 1996. A careful path to both independence proofs.
- On this site: the Topics lessons [A full hotel with room for one more](../../topics/infinity/level-3/01-room-for-one.md),
  [Hilbert's hotel with infinitely many buses](../../topics/infinity/level-4/06-infinitely-many-buses.md),
  [Countable sets](../../topics/infinity/level-6/01-countable-sets.md),
  [Pairs are countable](../../topics/infinity/level-6/03-pairs-countable.md),
  [Algebraic numbers are countable](../../topics/infinity/level-6/06-algebraic-numbers.md),
  [Cantor's diagonal argument](../../topics/infinity/level-7/01-diagonal-argument.md),
  [A line and a square have the same number of points](../../topics/infinity/level-7/06-line-and-square.md) and
  [The continuum hypothesis](../../topics/infinity/level-8/04-continuum-hypothesis.md);
  [Calculus, Chapter 18](../calculus/18-The-Real-Numbers.md) (18.8, countable and uncountable sets of reals).
