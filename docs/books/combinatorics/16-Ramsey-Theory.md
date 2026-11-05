# 16. Ramsey theory

*Among any six people, some three all know each other or some three are all strangers. That small fact, proved in
[Chapter 4](04-The-Pigeonhole-Principle.md), is the first case of a theorem with a large reach: complete disorder is
impossible. Any large enough structure, however it is coloured or split up, contains a large orderly piece. In this
chapter you will prove Ramsey's theorem and its bounds, see why the exact Ramsey numbers are so hard to find that even
$R(5,5)$ is unknown, prove Erdős's lower bound by pure counting, meet Schur's and van der Waerden's theorems about
numbers, and finish with the breakthroughs of the last few years.*

!!! abstract "In this chapter"
    **You will learn:**

    - why $R(3,3) = 6$, and how the same argument gives Ramsey's theorem for any sizes and any number of colours
    - the recursive bound $R(s,t) \le R(s-1,t) + R(s,t-1)$, the binomial bound, and why $R(k,k) < 4^k$
    - the known Ramsey numbers, the clever constructions behind the lower bounds, and why the rest are so hard
    - Erdős's 1947 counting proof that $R(k,k) > 2^{k/2}$, with no example in sight
    - Schur's theorem on $x + y = z$ and van der Waerden's theorem on arithmetic progressions
    - the infinite Ramsey theorem, and the 2023 breakthrough that first improved the exponent 4

    **You need:** [Chapter 4](04-The-Pigeonhole-Principle.md) (pigeonhole, the six-people fact),
    [Chapter 3](03-Binomial-Coefficients.md) (binomial coefficients, Pascal's rule) and [Chapter 10](10-Graphs.md)
    (complete graphs, cliques). A gentler start: [The pigeonhole principle](../../topics/counting/level-4/06-pigeonhole-principle.md)
    and [Generalised pigeonhole](../../topics/counting/level-6/04-generalised-pigeonhole.md) in the Topics.

    **Levels:** 16.1 is intermediate; 16.2 to 16.5 are advanced (full proofs); 16.6 is expert, a survey of current
    research.

## 16.1 $R(3,3) = 6$ again

*Level: intermediate.*

Colour every edge of a complete graph either orange or blue. (Read orange as "know each other" and blue as "strangers"
if you like the party version.) A **monochromatic** triangle is one whose three edges have the same colour.

**Claim.** Every 2-colouring of the edges of $K_6$ has a monochromatic triangle, but some 2-colouring of $K_5$ does not.

*Proof.* Pick any vertex $v$ of $K_6$. It has 5 edges. By the pigeonhole principle, at least 3 of them have the same
colour, say orange, going to $a$, $b$, $c$. Now look at the triangle $abc$. If any of its edges, say $ab$, is orange,
then $v a b$ is an orange triangle. If none is orange, then $abc$ is a blue triangle. Either way there is one.

For $K_5$: colour the edges of a pentagon orange and the five diagonals (a five-pointed star) blue. Each colour class is
a 5-cycle, which has no triangle. $\square$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 210" role="img" aria-label="Left: the complete graph on 5 vertices with the outer pentagon in orange and the inner five-pointed star in blue; neither colour contains a triangle. Right: a vertex v of K6 with three orange edges to a, b and c; the edges among a, b and c are dashed, because whichever colour they get, a one-colour triangle appears">
<line x1="105.0" y1="25.0" x2="181.1" y2="80.3" stroke="#eea66f" stroke-width="3"/>
<line x1="105.0" y1="25.0" x2="152.0" y2="169.7" stroke="#9cc9ea" stroke-width="3"/>
<line x1="105.0" y1="25.0" x2="58.0" y2="169.7" stroke="#9cc9ea" stroke-width="3"/>
<line x1="105.0" y1="25.0" x2="28.9" y2="80.3" stroke="#eea66f" stroke-width="3"/>
<line x1="181.1" y1="80.3" x2="152.0" y2="169.7" stroke="#eea66f" stroke-width="3"/>
<line x1="181.1" y1="80.3" x2="58.0" y2="169.7" stroke="#9cc9ea" stroke-width="3"/>
<line x1="181.1" y1="80.3" x2="28.9" y2="80.3" stroke="#9cc9ea" stroke-width="3"/>
<line x1="152.0" y1="169.7" x2="58.0" y2="169.7" stroke="#eea66f" stroke-width="3"/>
<line x1="152.0" y1="169.7" x2="28.9" y2="80.3" stroke="#9cc9ea" stroke-width="3"/>
<line x1="58.0" y1="169.7" x2="28.9" y2="80.3" stroke="#eea66f" stroke-width="3"/>
<circle cx="105.0" cy="25.0" r="7" fill="currentColor"/>
<circle cx="181.1" cy="80.3" r="7" fill="currentColor"/>
<circle cx="152.0" cy="169.7" r="7" fill="currentColor"/>
<circle cx="58.0" cy="169.7" r="7" fill="currentColor"/>
<circle cx="28.9" cy="80.3" r="7" fill="currentColor"/>
<line x1="250" y1="105" x2="410" y2="30" stroke="#eea66f" stroke-width="3"/>
<line x1="250" y1="105" x2="420" y2="105" stroke="#eea66f" stroke-width="3"/>
<line x1="250" y1="105" x2="410" y2="180" stroke="#eea66f" stroke-width="3"/>
<line x1="410" y1="30" x2="420" y2="105" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
<path d="M 410 30 Q 470 105 410 180" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
<line x1="420" y1="105" x2="410" y2="180" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
<circle cx="250" cy="105" r="8" fill="#7ccf9a" stroke="currentColor"/>
<text x="234" y="110" text-anchor="middle" font-size="14" fill="currentColor">v</text>
<circle cx="410" cy="30" r="7" fill="currentColor"/>
<text x="392" y="22" text-anchor="middle" font-size="14" fill="currentColor">a</text>
<circle cx="420" cy="105" r="7" fill="currentColor"/>
<text x="402" y="95" text-anchor="middle" font-size="14" fill="currentColor">b</text>
<circle cx="410" cy="180" r="7" fill="currentColor"/>
<text x="392" y="198" text-anchor="middle" font-size="14" fill="currentColor">c</text>
</svg>
</div>

**Definition.** The **Ramsey number** $R(s, t)$ is the smallest $n$ such that every 2-colouring of the edges of $K_n$
has an orange $K_s$ (a set of $s$ vertices with all edges between them orange) or a blue $K_t$.

So $R(3,3) = 6$: the proof shows $R(3,3) \le 6$ (every colouring of $K_6$ works), and the pentagon shows $R(3,3) > 5$.
Every Ramsey number is settled the same way, by two separate arguments: an **upper bound** (a proof that every colouring
of $K_n$ has the pattern) and a **lower bound** (one colouring of $K_{n-1}$ without it). The difficulty is that the two
arguments are of completely different kinds, and for most Ramsey numbers they do not meet.

In graph language: think of the orange edges as a graph $G$ and the blue edges as its complement. A $K_s$ in $G$ is a
**clique** (vertices all joined); a blue $K_t$ is an **independent set** in $G$ (vertices with no edges between them).
So $R(s,t)$ is the smallest $n$ such that every graph on $n$ vertices has a clique of size $s$ or an independent set of
size $t$.

**Two easy facts.** $R(s, t) = R(t, s)$ (swap the colours). $R(2, t) = t$: in $K_t$, either some edge is orange (an
orange $K_2$) or all are blue (a blue $K_t$); and colouring all of $K_{t-1}$ blue avoids both.

**More than one triangle.** The proof finds one triangle, but there are always at least two. Count the triangles that
are *not* monochromatic. Call a pair of edges at a vertex with different colours a **bichromatic angle**. A vertex with
$r$ orange and $5 - r$ blue edges has $r(5 - r) \le 6$ such angles (the largest value of $r(5-r)$ for whole $r$ is at
$r = 2$ or 3). So $K_6$ has at most $6 \cdot 6 = 36$ bichromatic angles. A non-monochromatic triangle has exactly 2
bichromatic angles (two edges of one colour and one of the other: the angles at the two ends of the odd edge), and a
monochromatic one has none. So there are at most $36 / 2 = 18$ non-monochromatic triangles, out of
$\binom{6}{3} = 20$: at least 2 are monochromatic. (A. W. Goodman worked out the exact minimum for every $K_n$ in 1959.)

<figure class="play" data-play="ramsey"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Colour the lines between 6 points two ways: a one-colour triangle always appears. With 5 points it can be avoided.</figcaption></figure>

## 16.2 Ramsey's theorem

*Level: advanced.*

Is there always such a number? For triangles, yes. For $K_4$, $K_{10}$, $K_{100}$? The answer is yes, and the proof is
the six-people argument, run with induction.

**Theorem (Ramsey, 1930; this form Erdős and Szekeres, 1935).** For all $s, t \ge 2$, the number $R(s,t)$ exists, and

$$
R(s, t) \le R(s-1, t) + R(s, t-1) .
$$

*Proof.* We use induction on $s + t$. The base cases $R(2, t) = t$ and $R(s, 2) = s$ are done. Suppose $R(s-1, t)$ and
$R(s, t-1)$ exist, and let $n = R(s-1, t) + R(s, t-1)$. Take any 2-colouring of $K_n$ and any vertex $v$. The other
$n - 1$ vertices split into $O$ (joined to $v$ by orange) and $B$ (joined by blue), with

$$
|O| + |B| = n - 1 = R(s-1, t) + R(s, t-1) - 1 .
$$

So either $|O| \ge R(s-1, t)$ or $|B| \ge R(s, t-1)$ (if both were smaller, the total would be at most
$R(s-1,t) + R(s,t-1) - 2$).

- If $|O| \ge R(s-1, t)$: the colouring restricted to $O$ has an orange $K_{s-1}$ or a blue $K_t$. A blue $K_t$ is what
  we want. An orange $K_{s-1}$ in $O$, together with $v$ (joined to all of $O$ by orange), is an orange $K_s$.
- If $|B| \ge R(s, t-1)$: by the same argument with the colours swapped, $B$ has an orange $K_s$, or a blue $K_{t-1}$
  that becomes a blue $K_t$ with $v$.

So every colouring of $K_n$ has an orange $K_s$ or a blue $K_t$, and $R(s,t) \le n$. $\square$

Frank Ramsey, a Cambridge philosopher, economist and mathematician, proved his theorem in a 1930 paper "On a problem of
formal logic", as a lemma for a question about deciding the truth of certain logical formulas. He died in January 1930,
aged 26, before the paper appeared. The theorem became famous after Paul Erdős and George Szekeres rediscovered it in
1935, in the paper that also contains the monotone subsequence theorem of [Chapter 4](04-The-Pigeonhole-Principle.md).

### The binomial bound

The recursion looks like Pascal's rule $\binom{m}{j} = \binom{m-1}{j-1} + \binom{m-1}{j}$
([Chapter 3](03-Binomial-Coefficients.md)), and that is the right comparison.

**Corollary.** $R(s, t) \le \binom{s + t - 2}{s - 1}$. In particular $R(k, k) \le \binom{2k-2}{k-1} < 4^{k-1}$.

*Proof.* Induction on $s + t$. For $s = 2$: $\binom{t}{1} = t = R(2,t)$, and similarly for $t = 2$. Otherwise,

$$
R(s,t) \le R(s-1,t) + R(s,t-1) \le \binom{s+t-3}{s-2} + \binom{s+t-3}{s-1} = \binom{s+t-2}{s-1}
$$

by Pascal's rule. Finally $\binom{2k-2}{k-1}$ is one term of the expansion of $(1+1)^{2k-2} = 4^{k-1}$, so it is less
than $4^{k-1}$. $\square$

**Worked example.** $R(3,4) \le R(2,4) + R(3,3) = 4 + 6 = 10$, and $R(4,4) \le R(3,4) + R(4,3) \le 20$. The binomial
bound gives $R(4,4) \le \binom{6}{3} = 20$ as well.

### A sharper step when both are even

**Lemma (Greenwood and Gleason, 1955).** If $R(s-1, t)$ and $R(s, t-1)$ are both even, then
$R(s,t) \le R(s-1, t) + R(s, t-1) - 1$.

*Proof.* Let $p = R(s-1,t)$, $q = R(s,t-1)$, and colour $K_{p+q-1}$. Each vertex has $p + q - 2$ edges. Suppose there is
no orange $K_s$ and no blue $K_t$. Then, as in the proof above, every vertex has fewer than $p$ orange edges (or its
orange neighbours would give an orange $K_{s-1}$ or blue $K_t$, completing a pattern) and fewer than $q$ blue edges. With
$p + q - 2$ edges in total, each vertex has exactly $p - 1$ orange edges and $q - 1$ blue. So the orange graph has
$p + q - 1$ vertices, each of degree $p - 1$. Here $p + q - 1$ is odd and $p - 1$ is odd, so the sum of degrees is odd.
But the sum of degrees in any graph is twice the number of edges (the handshake lemma of [Chapter 10](10-Graphs.md)).
Contradiction. $\square$

With $p = R(2,4) = 4$ and $q = R(3,3) = 6$: $R(3,4) \le 9$.

### Many colours

The same argument works with any number of colours. Let $R(t_1, \dots, t_c)$ be the smallest $n$ such that every
colouring of the edges of $K_n$ in $c$ colours has, for some colour $i$, a $K_{t_i}$ all in colour $i$. Write
$R_c(3)$ for $R(3, 3, \dots, 3)$ with $c$ threes.

**Example: $R(3,3,3) \le 17$.** Colour $K_{17}$ in three colours. A vertex $v$ has 16 edges, so at least 6 share a colour,
say red, going to a set $S$ of 6 vertices (since $3 \cdot 5 = 15 < 16$). If any edge inside $S$ is red, it makes a red
triangle with $v$. Otherwise $S$ is a $K_6$ coloured with only the other two colours, and by 16.1 it has a monochromatic
triangle. $\square$

Greenwood and Gleason also found a colouring of $K_{16}$ in three colours with no monochromatic triangle, built from the
field with 16 elements, so $R(3,3,3) = 17$. In general the argument gives $R_c(3) \le c\,(R_{c-1}(3) - 1) + 2$, and
from it $R_c(3) \le \lfloor e \cdot c! \rfloor + 1$ (exercise 9 starts the induction).

### Infinite and higher versions

**Infinite Ramsey theorem.** If the edges of the complete graph on the natural numbers $\mathbb{N}$ are coloured with
finitely many colours, there is an infinite set $H \subseteq \mathbb{N}$ all of whose edges have the same colour.

*Proof.* Build a sequence. Let $A_0 = \mathbb{N}$. Pick $v_0 \in A_0$. Infinitely many edges go from $v_0$ to the rest of
$A_0$, and there are finitely many colours, so infinitely many of them share a colour $c_0$; let $A_1$ be the set of
their other endpoints. Pick $v_1 \in A_1$, find an infinite $A_2 \subseteq A_1$ joined to $v_1$ in one colour $c_1$, and
so on. Every $v_j$ with $j > i$ lies in $A_{i+1}$, so the edge $v_i v_j$ has colour $c_i$: the colour depends only on the
smaller index. The colours $c_0, c_1, \dots$ take finitely many values, so one value $c$ occurs infinitely often. The
vertices $v_i$ with $c_i = c$ form an infinite set $H$, and every edge inside it has colour $c$. $\square$

**Hypergraph Ramsey theorem.** Instead of colouring pairs, colour all the $r$-element subsets of a set. For any $r$, any
number of colours and any target size $m$, if the set is large enough there is an $m$-element subset all of whose
$r$-element subsets have the same colour. This is the version Ramsey proved. The proof is an induction on $r$ of the same
kind, and the bounds it gives grow like towers of exponentials; for $r \ge 3$ the true growth rate is a famous open
problem of Erdős, Hajnal and Rado.

A neat application, from Erdős and Szekeres's 1935 paper: for every $m$ there is an $N$ such that any $N$ points in the
plane, no three on a line, contain $m$ points forming a convex polygon. (Colour each 4-element subset by whether its
points are in convex position, and use the fact that $m$ points are in convex position when all of their 4-point subsets
are; the other colour cannot win, because any 5 points in general position include 4 in convex position.) The smallest such $N$ is the subject of the "happy ending problem", still open in general.

## 16.3 Known values and bounds

*Level: advanced.*

How far does the theory get with exact values? Not far. Here is what is known for two colours (as of 2026):

| | $t = 3$ | $t = 4$ | $t = 5$ |
|---|---|---|---|
| $s = 3$ | 6 | 9 | 14 |
| $s = 4$ | 9 | 18 | 25 |
| $s = 5$ | 14 | 25 | 43 to 46 |

Beyond the table, $R(3,6) = 18$, $R(3,7) = 23$, $R(3,8) = 28$ and $R(3,9) = 36$ are known, along with ranges for the
rest. Stanisław Radziszowski keeps a careful survey, "Small Ramsey numbers", in the *Electronic Journal of
Combinatorics*, updated every few years.

### Lower bounds by construction

The upper bounds for $R(3,4)$, $R(3,5)$ and $R(4,4)$ follow from 16.2:

$$
R(3,4) \le 9, \qquad R(3,5) \le R(2,5) + R(3,4) \le 5 + 9 = 14, \qquad R(4,4) \le R(3,4) + R(4,3) \le 18 .
$$

The matching lower bounds come from **circulant graphs**: put $n$ vertices around a circle, numbered $0, \dots, n-1$, and
join two vertices when their distance around the circle is in a chosen set $D$. These are very symmetric, which makes
them easy to check.

- **$R(3,4) > 8$.** Take $n = 8$, $D = \{1, 4\}$: join each vertex to its two neighbours and the opposite vertex. A
  triangle is impossible (exercise 5 checks the three steps around it), and a computer check, or a short case
  argument, shows that no 4 vertices are pairwise non-adjacent.
- **$R(3,5) > 13$.** $n = 13$, $D = \{1, 5\}$. No triangle, and no 5 pairwise non-adjacent vertices.
- **$R(4,4) > 17$.** The **Paley graph** on 17 vertices: join $i$ and $j$ when $i - j$ is a nonzero square mod 17. The
  squares mod 17 are $\{1, 2, 4, 8, 9, 13, 15, 16\}$. Since $-1 \equiv 16$ is a square, $i - j$ is a square exactly when
  $j - i$ is, so the rule makes sense. Multiplying by a non-square (such as 3) swaps edges and non-edges, so the graph
  looks the same as its complement. A computer check shows it has no $K_4$, and therefore also no independent set of
  size 4.

So $R(3,4) = 9$, $R(3,5) = 14$, $R(4,4) = 18$, all proved by Robert Greenwood and Andrew Gleason in 1955. **Check:**
each of these three graphs takes a computer a fraction of a second to verify.

### Why the rest is hard

$R(4,5) = 25$ was settled by Brendan McKay and Radziszowski in 1995, after a large computer search. $R(5,5)$ is still
unknown. The lower bound 43 comes from a colouring of $K_{42}$ found by Geoffrey Exoo in 1989. The upper bound has come
down slowly: 49 (McKay and Radziszowski, 1997), then 48 (Vigleik Angeltveit and McKay, 2018), and in 2024 Angeltveit
and McKay proved $R(5,5) \le 46$, by a combination of linear programming and enormous, independently repeated computer
checks.

Why not simply check every colouring of $K_{43}$? It has $\binom{43}{2} = 903$ edges, so there are $2^{903}$ colourings,
a number with 272 digits. Symmetry and clever pruning reduce this by enormous factors, but not nearly enough. Each
improvement in these bounds combines new mathematical constraints with very large computations.

## 16.4 Erdős's lower bound by counting

*Level: advanced.*

The upper bound $R(k,k) < 4^k$ is exponential in $k$. Is the truth exponential too, or could $R(k,k)$ grow like a
polynomial, say $k^3$? Constructions like the ones above give only weak lower bounds: for a long time the best explicit
colourings showed only that $R(k,k)$ grows faster than every polynomial, and nobody knows an explicit construction
anywhere near $2^{k/2}$. In 1947 Paul Erdős answered the question without constructing anything.

**Theorem (Erdős, 1947).** If $\binom{n}{k} 2^{1 - \binom{k}{2}} < 1$, then $R(k,k) > n$. In particular, for every
$k \ge 3$,

$$
R(k, k) > 2^{k/2} .
$$

*Proof.* Count colourings. There are $2^{\binom{n}{2}}$ colourings of the edges of $K_n$. Fix a set $S$ of $k$ vertices.
The colourings in which $S$ is monochromatic: the $\binom{k}{2}$ edges inside $S$ must all be orange or all blue (2
ways), and the other edges are free. So there are $2 \cdot 2^{\binom{n}{2} - \binom{k}{2}}$ of them. Add over the
$\binom{n}{k}$ choices of $S$: the number of colourings with *some* monochromatic $K_k$ is at most

$$
\binom{n}{k} \cdot 2^{1 - \binom{k}{2}} \cdot 2^{\binom{n}{2}} ,
$$

(at most, because a colouring with several monochromatic sets is counted several times). If
$\binom{n}{k} 2^{1 - \binom{k}{2}} < 1$, this is less than the total number of colourings. So some colouring has no
monochromatic $K_k$, and $R(k,k) > n$.

Now take $n = \lfloor 2^{k/2} \rfloor$. Using $\binom{n}{k} < n^k / k!$ and $n^k \le 2^{k^2/2}$:

$$
\binom{n}{k} 2^{1 - \binom{k}{2}} < \frac{2^{k^2/2}}{k!} \cdot 2^{1 - \frac{k^2}{2} + \frac{k}{2}} = \frac{2^{1 + k/2}}{k!} .
$$

For $k = 3$ this is $2^{2.5}/6 \approx 0.94 < 1$, and as $k$ grows the factorial wins even faster. So the condition holds
and $R(k,k) > n$; since $R(k,k)$ is a whole number greater than $\lfloor 2^{k/2} \rfloor$, it is greater than
$2^{k/2}$. $\square$

In the language of probability ([Chapter 17](17-The-Probabilistic-Method.md)): colour each edge orange or blue by a fair
coin toss. The expected number of monochromatic $K_k$ is $\binom{n}{k} 2^{1 - \binom{k}{2}}$. If that is less than 1,
some colouring has none. This was one of the first uses of what became the **probabilistic method**, and it is still the
model example: it proves that good colourings exist, indeed that almost all colourings are good, without showing a
single one.

**Worked example.** For $k = 10$, the condition holds up to $n = 100$: $\binom{100}{10} 2^{1 - 45} \approx 0.98 < 1$. So
$R(10,10) > 100$, while $2^{10/2} = 32$. Meanwhile the upper bound is $\binom{18}{9} = 48{,}620$.

So $2^{k/2} < R(k,k) < 4^k$: the base of the exponential is between $\sqrt{2} \approx 1.414$ and 4. Whether
$R(k,k)^{1/k}$ tends to a limit, and what it is, are among the best-known open questions in combinatorics. Erdős
offered 100 dollars for a proof that the limit exists and 10,000 dollars for its value (or a proof that it does not
exist).

## 16.5 Schur and van der Waerden

*Level: advanced.*

Ramsey's theorem is about graphs. Two older theorems show the same phenomenon in the whole numbers.

### Schur's theorem

**Theorem (Schur, 1916).** For every number of colours $c$, there is an $N$ such that whenever $\{1, 2, \dots, N\}$ is
coloured with $c$ colours, there are $x$, $y$, $z$ of the same colour with $x + y = z$ ($x = y$ allowed).

Issai Schur proved it while working on Fermat's last theorem modulo primes: he deduced that for every $m$, the equation
$x^m + y^m \equiv z^m \pmod p$ has solutions with $xyz \not\equiv 0$ for all large enough primes $p$, so Fermat's last
theorem cannot be proved by working modulo a single prime.

*Proof.* Let $N = R_c(3) - 1$, where $R_c(3)$ is the $c$-colour Ramsey number for triangles. Given a colouring $\chi$ of
$\{1, \dots, N\}$, colour the edges of the complete graph on the vertices $\{0, 1, \dots, N\}$ (that is $N + 1 = R_c(3)$
vertices) by the rule

$$
\text{colour of edge } \{i, j\} = \chi(|i - j|) .
$$

By Ramsey's theorem there is a monochromatic triangle, with vertices $i < j < l$. Put $x = j - i$, $y = l - j$,
$z = l - i$. These three differences are the colours of the three edges, so $\chi(x) = \chi(y) = \chi(z)$, and
$x + y = z$. $\square$

The proof is a nice example of turning numbers into a graph and back. The **Schur number** $S(c)$ is the largest $N$
for which some colouring avoids the pattern. Known values: $S(1) = 1$, $S(2) = 4$, $S(3) = 13$, $S(4) = 44$ (Leonard
Baumert, 1965) and $S(5) = 160$ (Marijn Heule, 2017, by a computer proof using a SAT solver that produced a proof file
of about two petabytes).

**Worked example: $S(2) = 4$.** Colour 1 and 4 orange, 2 and 3 blue. Orange sums: $1 + 1 = 2$, $1 + 4 = 5$, $4 + 4 = 8$:
none orange in range. Blue: $2 + 2 = 4$, $2 + 3 = 5$, $3 + 3 = 6$: none blue. So 4 numbers can be coloured. Now try 5.
Say 1 is orange. Then $2 = 1 + 1$ must be blue, then $4 = 2 + 2$ must be orange, then $3 = 4 - 1$ must be blue (since
$1 + 3 = 4$ with 1 and 4 orange), and then 5: $5 = 1 + 4$ forbids orange, and $5 = 2 + 3$ forbids blue. Stuck. So
$S(2) = 4$.

**Worked example: $S(3) \ge 13$.** Colour $\{1, 4, 10, 13\}$ orange, $\{2, 3, 11, 12\}$ blue, $\{5, 6, 7, 8, 9\}$ green.
Green sums are at least 10, outside the green set. Orange: differences of orange numbers are 3, 6, 9, 12 (and 0),
none orange. Blue: differences are 1, 8, 9, 10 (and 0), none blue. **Check:** a computer confirms no monochromatic
$x + y = z$.

### Van der Waerden's theorem

An **arithmetic progression** of length $k$ is a list $a, a + d, a + 2d, \dots, a + (k-1)d$ with $d \ge 1$.

**Theorem (van der Waerden, 1927).** For all $c$ and $k$ there is an $N$ such that whenever $\{1, \dots, N\}$ is coloured
with $c$ colours, some arithmetic progression of length $k$ is monochromatic.

The smallest such $N$ is the **van der Waerden number** $W(c, k)$.

**Worked example: $W(2, 3) = 9$.** The colouring of $1, \dots, 8$ as

$$
\text{O O B B O O B B}
$$

(orange 1, 2, 5, 6; blue 3, 4, 7, 8) has no monochromatic 3-term progression: the orange numbers 1, 2, 5, 6 contain no
three equally spaced ($1, 2, 3$? 3 is blue; $1, 5, 9$? out of range; $2, 5, 8$? 8 is blue; and so on), and the blue
ones likewise. For 9, a short case analysis or a computer check over all $2^9 = 512$ colourings shows that every one has
a monochromatic progression. **Check:** the computer finds exactly 6 good colourings of 1 to 8 and none of 1 to 9.

Van der Waerden's original proof uses a clever double induction, and gives bounds that grow like the Ackermann function,
far faster than towers of exponentials. Saharon Shelah gave a proof in 1988 with much smaller, though still enormous,
bounds, and Timothy Gowers in 2001 gave the first bounds of a reasonable shape,

$$
W(c, k) \le 2^{2^{c^{2^{2^{k+9}}}}} ,
$$

as a byproduct of his new proof of Szemerédi's theorem. The known exact values are few: $W(2,3) = 9$, $W(2,4) = 35$,
$W(2,5) = 178$, $W(2,6) = 1132$ (Michal Kouril and Jerome Paul, 2008), and $W(3,3) = 27$.

**Szemerédi's theorem** (1975) is the density version: any set of whole numbers with positive upper density (a fixed
fraction of $\{1, \dots, N\}$ for infinitely many $N$) contains arbitrarily long arithmetic progressions. A colouring
with $c$ colours has some colour class with density at least $1/c$, so Szemerédi implies van der Waerden. Ben Green and
Terence Tao (2008) proved that the primes, which have density zero, also contain arbitrarily long progressions. These
are in [Chapter 20](20-Where-Combinatorics-Goes.md).

## 16.6 Recent progress

*Level: expert.*

For 88 years, from 1935 to 2023, the upper bound $R(k,k) \le 4^{k + o(k)}$ (the Erdős-Szekeres bound, up to smaller
factors) was not improved in its exponential base. Better lower-order factors were found: Andrew Thomason (1988) improved
it by a polynomial factor, and David Conlon (2009) by a factor that grows faster than any polynomial. But the 4 stayed. On the other side, the lower bound
$\sqrt{2}^{\,k}$ from 1947 has only been improved by a constant factor: Joel Spencer in 1975 doubled it using the
Lovász local lemma ([Chapter 17](17-The-Probabilistic-Method.md)).

**The 2023 breakthrough.** In March 2023, Marcelo Campos, Simon Griffiths, Robert Morris and Julian Sahasrabudhe posted
a proof that

$$
R(k, k) \le (4 - \varepsilon)^k
$$

for some fixed $\varepsilon > 0$ and all large $k$. Their $\varepsilon$ is small (their argument gives a base of roughly
3.993), but it was the first exponential improvement since Erdős and Szekeres. The key idea is a new way to grow a
structure called a **book**: a set of vertices joined in one colour to everything in another set. The Erdős-Szekeres
argument of 16.2 picks one vertex at a time and keeps the neighbours of one colour; the new "book algorithm" keeps a
whole set of vertices at once and keeps careful track of the densities of colours, which lets it waste less at each
step. The paper was checked carefully by the community, and Bhavik Mehta completed a formal, computer-checked proof of
the result in the Lean proof assistant.

**Follow-ups.** Later in 2024, Parth Gupta, Ndiamé Ndiaye, Sergey Norin and Louis Wei refined the method and pushed the
bound to about $3.8^{k}$ (more exactly, $3.8^{k + o(k)}$). The true base remains unknown: somewhere between $\sqrt{2}$
and 3.8.

**Off-diagonal numbers.** For $R(3, t)$ the growth is known up to a constant factor: Miklós Ajtai, János Komlós and
Endre Szemerédi (1980) proved the upper bound and Jeong Han Kim (1995) the matching lower bound, giving
$R(3,t)$ of order $t^2 / \log t$. For $R(4, t)$, in 2023 Sam Mattheus and Jacques Verstraete proved a lower bound of order
$t^3 / (\log t)^4$, which matches the known upper bound up to logarithmic factors. Their construction uses finite
geometry (a structure called the Hermitian unital) combined with random choices. In 2025 Jie Ma, Wujie Shen and
Shengjie Xie gave the first exponential improvement over Erdős's random colouring lower bound for $R(k, Ck)$ with a
fixed constant $C > 1$, using random geometric graphs. The diagonal case $C = 1$ remains at $\sqrt{2}^{\,k}$.

**Small numbers.** $R(5,5)$ is between 43 and 46. Most experts guess it is 43, but this is a guess. Every recent
improvement for small Ramsey numbers has combined new mathematical inequalities with very large computer searches, and
each has been checked by independent computation.

Ramsey theory today reaches far beyond graphs. It is a branch of mathematics with connections to logic (where some
Ramsey-type statements are true but unprovable in Peano arithmetic, by the Paris-Harrington theorem of 1977), to
ergodic theory (Furstenberg's proof of Szemerédi's theorem, 1977), to number theory and to theoretical computer science.
Its core message is the one from the six-people puzzle: complete disorder is impossible.

## Check yourself

??? question "1. Explain directly why the pentagon colouring of $K_5$ (orange pentagon, blue star) cannot be extended to $K_6$ without a monochromatic triangle."

    The new vertex $w$ has 5 edges to the pentagon, so at least 3 share a colour, going to vertices $a, b, c$. If they
    are orange: among any 3 vertices of the pentagon, two are neighbours on the pentagon (the star is a 5-cycle and has no
    triangle, so $a, b, c$ cannot be pairwise joined by blue), and that orange pentagon edge makes an orange triangle
    with $w$. If they are blue: among any 3 vertices, two are not neighbours on the pentagon (the pentagon has no
    triangle), so they are joined by a blue diagonal, which makes a blue triangle with $w$.

??? question "2. Use the recursion and the even-case lemma to show $R(3,4) \le 9$, and then the recursion to show $R(3,5) \le 14$ and $R(4,4) \le 18$."

    $R(3,4) \le R(2,4) + R(3,3) = 4 + 6 = 10$; both 4 and 6 are even, so the lemma lowers it to 9. Then
    $R(3,5) \le R(2,5) + R(3,4) \le 5 + 9 = 14$, and $R(4,4) \le R(3,4) + R(4,3) \le 9 + 9 = 18$.

??? question "3. What does the binomial bound give for $R(3,t)$? Compare with the truth."

    $R(3,t) \le \binom{t+1}{2} = t(t+1)/2$, of order $t^2$. The truth is of order $t^2/\log t$ (Ajtai-Komlós-Szemerédi and
    Kim), so the simple bound is off only by a logarithmic factor. For $t = 5$: $\binom{6}{2} = 15$, against the true 14.

??? question "4. In any 2-colouring of $K_7$, how many monochromatic triangles must there be, by the bichromatic angle argument?"

    Each vertex has 6 edges; with $r$ orange, it has $r(6 - r) \le 9$ bichromatic angles. Total at most $7 \cdot 9 = 63$,
    so at most $\lfloor 63/2 \rfloor = 31$ non-monochromatic triangles out of $\binom{7}{3} = 35$. At least 4 are
    monochromatic.

??? question "5. Explain why the circulant graph on 8 vertices with $D = \{1, 4\}$ has no triangle."

    In a triangle $i, j, l$ the three steps $j - i$, $l - j$, $i - l$ add to 0 mod 8, and each is $\pm 1$ or $4$ mod 8
    ($-4 \equiv 4$). Sums of three such: with no 4s, $\pm1 \pm1 \pm1$ is odd, not 0 mod 8; with one 4, $4 \pm 1 \pm 1$ is
    2, 4 or 6; with two 4s, $8 \pm 1$ is odd; with three 4s, $12 \equiv 4$. None is 0 mod 8, so there is no triangle.

??? question "6. Use Erdős's condition to show $R(4,4) > 6$ and $R(5,5) > 11$."

    $k = 4$, $n = 6$: $\binom{6}{4} 2^{1-6} = 15/32 < 1$. $k = 5$, $n = 11$: $\binom{11}{5} 2^{1-10} = 462/512 < 1$.
    (For $n = 12$, $\binom{12}{5}/512 = 792/512 > 1$, so the method stops at 11, far below the true values 18 and 43
    or more. The method is weak for small $k$ and strong for large $k$.)

??? question "7. Show that $R(3,3,3) \le 17$ and explain where 17 comes from."

    A vertex of $K_{17}$ has 16 edges in 3 colours; since $3 \cdot 5 = 15 < 16$, at least 6 share a colour, say red, to
    a set $S$. A red edge inside $S$ gives a red triangle with the vertex; otherwise $S$ is a $K_6$ in two colours and has a
    monochromatic triangle by $R(3,3) = 6$. The 17 is $3 \cdot (6 - 1) + 2$: enough edges that one colour gets
    $R(3,3)$ of them.

??? question "8. Find a colouring of $\{1, \dots, 8\}$ in two colours with no monochromatic 3-term arithmetic progression, different from O O B B O O B B and its colour swap."

    O B B O O B B O: orange 1, 4, 5, 8 and blue 2, 3, 6, 7. The orange triples are $(1,4,5)$, $(1,4,8)$, $(1,5,8)$,
    $(4,5,8)$, with gaps $(3,1)$, $(3,4)$, $(4,3)$, $(1,3)$: never two equal gaps. The blue triples $(2,3,6)$, $(2,3,7)$,
    $(2,6,7)$, $(3,6,7)$ have gaps $(1,3)$, $(1,4)$, $(4,1)$, $(3,1)$: none equal. So no monochromatic progression. (A
    computer finds exactly six good colourings: O O B B O O B B, O B O B B O B O, O B B O O B B O and their colour swaps.)

??? question "9. Show that $R_c(3) \le c\,(R_{c-1}(3) - 1) + 2$, and use it with $R_1(3) = 3$ to get $R_2(3) \le 6$ and $R_3(3) \le 17$."

    Let $n = c(R_{c-1}(3) - 1) + 2$ and colour $K_n$ with $c$ colours. A vertex has $n - 1 = c(R_{c-1}(3) - 1) + 1$
    edges, so some colour gets at least $R_{c-1}(3)$ of them (pigeonhole). If any edge among those neighbours has that
    colour, there is a triangle with the vertex; otherwise they span a $K_{R_{c-1}(3)}$ in the other $c - 1$ colours,
    which has a monochromatic triangle. With $R_1(3) = 3$: $R_2(3) \le 2 \cdot 2 + 2 = 6$; $R_3(3) \le 3 \cdot 5 + 2 = 17$.

??? question "10. Prove that $S(2) = 4$ using the Schur proof's bound: what does $R(3,3) = 6$ give?"

    The proof of Schur's theorem gives $S(c) \le R_c(3) - 2$: any colouring of $\{1, \dots, R_c(3) - 1\}$ has a
    monochromatic solution. With $R(3,3) = 6$: every 2-colouring of $\{1, \dots, 5\}$ has one, so $S(2) \le 4$. The
    colouring $\{1,4\}$, $\{2,3\}$ shows $S(2) \ge 4$.

??? question "11. Prove the infinite Ramsey theorem implies the finite one (for two colours): if for some $s$ every $K_n$ had a 2-colouring with no monochromatic $K_s$, derive a contradiction."

    Suppose for every $n$ there is a colouring $\chi_n$ of $K_n$ (on vertices $1, \dots, n$) with no monochromatic $K_s$.
    Build a colouring of all pairs of natural numbers by compactness: list the pairs $\{1,2\}, \{1,3\}, \{2,3\}, \dots$.
    Infinitely many $\chi_n$ agree on $\{1,2\}$; among those, infinitely many agree on $\{1,3\}$; and so on. Let $\chi$
    take these agreed colours. Every finite set of pairs is coloured by $\chi$ as some $\chi_n$ colours it, so $\chi$ has
    no monochromatic $K_s$. But the infinite Ramsey theorem gives an infinite monochromatic set, which contains a
    monochromatic $K_s$. Contradiction. (This is König's infinity lemma at work; the argument proves existence but gives
    no bound.)

??? question "12. A 2-colouring of the edges of $K_n$ is chosen by fair coin tosses. Show that the expected number of monochromatic triangles is $\binom{n}{3}/4$, and deduce that some colouring of $K_n$ has at most $\binom{n}{3}/4$ of them."

    A given triangle is monochromatic when its three edges are all orange or all blue: probability $2 \cdot (1/2)^3 = 1/4$.
    By linearity of expectation ([Chapter 17](17-The-Probabilistic-Method.md)) the expected count is $\binom{n}{3}/4$. A
    random variable cannot always exceed its average, so some colouring has at most that many. For $n = 6$:
    $20/4 = 5$, while the true minimum is 2 (16.1). Goodman showed that $\binom{n}{3}/4$ is the right order: the minimum
    is about one quarter of all triangles for large $n$.

## What you learned

- $R(s,t)$ is the smallest $n$ such that every 2-colouring of $K_n$ has an orange $K_s$ or a blue $K_t$; $R(3,3) = 6$.
- Ramsey's theorem: $R(s,t) \le R(s-1,t) + R(s,t-1)$, hence $R(s,t) \le \binom{s+t-2}{s-1}$ and $R(k,k) < 4^k$; it
  extends to many colours, to infinite sets and to hypergraphs.
- Exact values are known only for small cases: 6, 9, 14, 18, 25, ...; $R(5,5)$ is between 43 and 46. Lower bounds come
  from symmetric constructions such as Paley graphs, upper bounds from proofs plus computation.
- Erdős's counting argument shows $R(k,k) > 2^{k/2}$ without constructing a colouring: the start of the probabilistic
  method.
- Schur's theorem ($x + y = z$) follows from Ramsey's theorem by colouring differences; van der Waerden's theorem gives
  monochromatic arithmetic progressions, and Szemerédi's theorem strengthens it to dense sets.
- In 2023 the exponential upper bound was improved for the first time since 1935, to $(4 - \varepsilon)^k$, and since
  then to about $3.8^k$.

**Next:** [Chapter 17](17-The-Probabilistic-Method.md), where Erdős's counting trick grows into a method: proving that
something exists by showing that a random choice works with positive probability.

## Further reading

- F. P. Ramsey, "On a problem of formal logic", *Proceedings of the London Mathematical Society* (2) 30, 1930.
- P. Erdős and G. Szekeres, "A combinatorial problem in geometry", *Compositio Mathematica* 2, 1935.
- P. Erdős, "Some remarks on the theory of graphs", *Bulletin of the American Mathematical Society* 53, 1947.
- R. E. Greenwood and A. M. Gleason, "Combinatorial relations and chromatic graphs", *Canadian Journal of Mathematics*
  7, 1955.
- R. L. Graham, B. L. Rothschild and J. H. Spencer, *Ramsey Theory*, 2nd edition, 1990.
- S. P. Radziszowski, "Small Ramsey numbers", *Electronic Journal of Combinatorics*, Dynamic Survey DS1 (regularly
  revised).
- V. Angeltveit and B. D. McKay, "$R(5,5) \le 46$", arXiv:2409.15709, 2024.
- M. Campos, S. Griffiths, R. Morris and J. Sahasrabudhe, "An exponential improvement for diagonal Ramsey",
  arXiv:2303.09521, 2023.
- P. Gupta, N. Ndiaye, S. Norin and L. Wei, "Optimizing the CGMS upper bound on Ramsey numbers", arXiv:2407.19026, 2024.
- S. Mattheus and J. Verstraete, "The asymptotics of $r(4,t)$", *Annals of Mathematics* 199, 2024.
- J. Ma, W. Shen and S. Xie, "An exponential improvement for Ramsey lower bounds", arXiv:2507.12926, 2025.
- M. J. H. Heule, "Schur number five", *Proceedings of AAAI*, 2018.
- On this site: [The pigeonhole principle](../../topics/counting/level-4/06-pigeonhole-principle.md) and
  [Generalised pigeonhole](../../topics/counting/level-6/04-generalised-pigeonhole.md) (gentle),
  [Pigeonhole, Chapter 4](04-The-Pigeonhole-Principle.md), the [Number theory book](../number-theory/index.md) for
  quadratic residues, and the [Combinatorics book](index.md).
