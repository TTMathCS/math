# 4. The pigeonhole principle

*If eleven pigeons fly into ten holes, some hole gets at least two pigeons. Nothing could be more obvious, and yet
this remark proves that two people in a big city have exactly the same number of hairs, that every fraction's
decimal repeats, that every long enough sequence of numbers contains a long increasing or decreasing run, that every
real number has unusually good fractional approximations, and that among any six people there are three who all
know each other or three who are all strangers. This chapter states the principle carefully, in its simple and
strong forms, and works through these applications with complete proofs. The last one is the first theorem of
Ramsey theory, which returns at full strength in Chapter 16.*

!!! abstract "In this chapter"

    **You will learn:**

    - the pigeonhole principle in its simple, strong and average forms, and how to prove it
    - the real skill: choosing the pigeons and the holes
    - classic applications: socks, birthdays, hairs, divisibility, sums and differences, repeating decimals, compression
    - the Erdős-Szekeres theorem on increasing and decreasing subsequences, with Seidenberg's short proof
    - Dirichlet's approximation theorem: how pigeons find good fractions
    - a first Ramsey fact: among six people, three are mutual friends or three are mutual strangers, and five are not enough

    **You need:** [Chapter 1](01-Counting-Principles.md) (functions, injective maps and the bijection principle). Section
    4.4 uses the whole-number part $\lfloor x \rfloor$ of a real number. For a gentler version, see the Topics lessons
    [The pigeonhole principle](../../topics/counting/level-4/06-pigeonhole-principle.md) and
    [The generalised pigeonhole principle](../../topics/counting/level-6/04-generalised-pigeonhole.md).

    **Levels:** 4.1 and 4.2 are beginner; 4.3 and 4.4 are intermediate; 4.5 is intermediate, with advanced exercises.

## 4.1 The simple and strong forms

**A question.** A drawer holds red, blue and green socks, all mixed up, and the room is dark. How many socks must
you take out to be sure of having two of the same colour?

Three socks are not enough: you might draw one of each colour. Four are enough: four socks and only three colours
means some colour appears twice. The answer is 4, and the reason is the pigeonhole principle.

**Theorem 4.1 (pigeonhole principle, simple form).** If more than $n$ objects are put into $n$ boxes, some box
contains at least two objects.

*Proof.* If every box contained at most one object, there would be at most $n \cdot 1 = n$ objects in all. There are
more than $n$. $\square$

In the language of [Chapter 1](01-Counting-Principles.md#14-bijections-the-key-idea): if $|A| > |B|$, then no
function $f : A \to B$ is injective. Some two different elements $a \ne a'$ have $f(a) = f(a')$. The "objects" are
the elements of $A$, the "boxes" are the elements of $B$, and $f$ says which box each object goes into.

**Theorem 4.2 (strong form).** Let $n_1, n_2, \dots, n_k$ be positive whole numbers. If
$n_1 + n_2 + \dots + n_k - k + 1$ objects are put into $k$ boxes, then for some $i$, box $i$ contains at least $n_i$
objects.

*Proof.* If not, box $i$ holds at most $n_i - 1$ objects for every $i$, so the total is at most
$(n_1 - 1) + \dots + (n_k - 1) = n_1 + \dots + n_k - k$, one fewer than we have. $\square$

The simple form is the case where every $n_i = 2$: $2k - k + 1 = k + 1$ objects.

**Corollary 4.3 (average form).** If $N$ objects are put into $k$ boxes, some box contains at least
$\lceil N/k \rceil$ objects, where $\lceil x \rceil$ (the **ceiling** of $x$) is the smallest whole number at least
$x$. More generally, if real numbers $x_1, \dots, x_k$ have average $m$, then some $x_i \ge m$ and some $x_j \le m$.

*Proof.* If every $x_i < m$ then $x_1 + \dots + x_k < km$, but the sum is exactly $km$. Same for the other
inequality. For boxes, the numbers of objects $x_i$ have average $N/k$, so some box has $x_i \ge N/k$, and since
$x_i$ is a whole number, $x_i \ge \lceil N/k \rceil$. $\square$

For example, 100 objects in 7 boxes put at least $\lceil 100/7 \rceil = 15$ objects in some box (since
$7 \cdot 14 = 98 < 100$).

**The infinite form.** If infinitely many objects are put into finitely many boxes, some box contains infinitely
many. (If each box held only finitely many, the total would be a finite sum of finite numbers.) This form is the
seed of the infinite Ramsey theorem of Chapter 16, which shows, for example, that every infinite sequence of real
numbers has an infinite subsequence that is increasing or decreasing, a fact used in analysis to prove the
Bolzano-Weierstrass theorem.

**What the principle does not do.** It proves that a box with two objects *exists*. It does not say which box, and
it gives no way to find it other than looking. Proofs of this kind are called **existence proofs** or
**non-constructive**. That is their weakness, and also their power: they work in situations far too large to search.

**The skill is choosing the boxes.** The principle itself is trivial. Every interesting application has a clever
choice of what the "objects" are and what the "boxes" are, and once that choice is made the proof is one line. The
examples in the rest of the chapter are mainly lessons in how to choose.

**Name and history.** The principle is also called **Dirichlet's box principle** or **drawer principle**, from
Peter Gustav Lejeune Dirichlet, who used it in 1842 in the approximation theorem of §4.4; in German it is the
*Schubfachprinzip* (drawer principle). The argument is older: Benoît Rittaud and Albrecht Heeffer found it in a book
of 1622 by the French Jesuit Jean Leurechon, who used it to argue that two people must have the same number of hairs.
The word "pigeonhole" refers to the small compartments of an old writing desk, not to birds, although the birds have
taken over the pictures.

## 4.2 Classic uses

**Socks and gloves.** With 10 red, 10 blue and 10 green socks in the drawer, how many socks must you take to be sure
of two *red* ones? Now the colour is prescribed, and the worst case is that you first draw every blue and green sock:
20 of them. So you need $20 + 2 = 22$. The pigeonhole principle answers "two of *some* colour"; for "two of a given
colour" think about the worst case directly.

**Birthdays (no probability needed).** Among 367 people, two share a birthday, because there are only 366 possible
birthdays (counting 29 February). Among 13 people, two were born in the same month. Among 25 people, three were born in
the same month: by the strong form with 12 boxes and each $n_i = 3$, we need $12 \cdot 3 - 12 + 1 = 25$ people, and 24
people (two per month) shows that 24 is not enough. These are **certainties**. The famous "birthday problem" asks
something different: how many people make it *likely* that two share a birthday. The answer, 23, is about
probability and comes from counting the complement ([§1.3](01-Counting-Principles.md#13-counting-the-complement)); the
pigeonhole principle by itself cannot reach below 367.

**Hairs.** A typical human head has around 100,000 hairs, and nobody has as many as a million. So in any city of more
than a million people, two people have exactly the same number of hairs: the people are the objects, and the boxes
are the numbers $0, 1, 2, \dots, 999\,999$.

**Points in a square.** Five points are placed in a square of side 1. Show that two of them are at most
$\frac{\sqrt 2}{2} \approx 0.707$ apart. *Boxes:* cut the square into four small squares of side $\tfrac12$. Five points,
four small squares, so two points lie in the same small square (a point on a dividing line can be assigned to either
side). Two points in a square of side $\tfrac12$ are at most its diagonal apart, $\tfrac{\sqrt 2}{2}$. The bound is
the best possible: put the five points at the four corners and the centre.

**Lattice midpoints.** Five points with whole-number coordinates are marked in the plane. Show that the midpoint of
some two of them also has whole-number coordinates. *Boxes:* the four **parity classes** (even, even), (even, odd),
(odd, even), (odd, odd) of the coordinates. Two of the five points are in the same class. Their coordinates then have
even sums, $x_1 + x_2$ and $y_1 + y_2$, so the midpoint $\left(\frac{x_1+x_2}{2}, \frac{y_1+y_2}{2}\right)$ has
whole-number coordinates. For the points $(0,0), (1,2), (3,1), (2,5), (4,3)$, the two in the same class are $(2,5)$
and $(4,3)$, with midpoint $(3,4)$. Four points are not enough: take one from each class.

**Divisibility 1: sums of consecutive terms.** *Claim:* among any $n$ whole numbers $a_1, \dots, a_n$ there is a
block of consecutive ones, $a_{i+1} + a_{i+2} + \dots + a_j$, whose sum is divisible by $n$.

*Proof.* Look at the $n + 1$ **prefix sums** $S_0 = 0$, $S_1 = a_1$, $S_2 = a_1 + a_2$, ..., $S_n = a_1 + \dots + a_n$.
There are only $n$ possible remainders on division by $n$. So two prefix sums, $S_i$ and $S_j$ with $i < j$, leave the
same remainder, and their difference $S_j - S_i = a_{i+1} + \dots + a_j$ is divisible by $n$. $\square$

*Example.* For $3, 8, 6, 1, 9$ and $n = 5$: the prefix sums are $0, 3, 11, 17, 18, 27$, with remainders
$0, 3, 1, 2, 3, 2$. The remainder 3 appears for $S_1$ and $S_4$, so $a_2 + a_3 + a_4 = 8 + 6 + 1 = 15$ is a multiple of
5. (The remainder 2 repeats too: $S_5 - S_3 = 1 + 9 = 10$.)

**Divisibility 2: one divides another.** *Claim:* among any $n + 1$ numbers chosen from $\{1, 2, \dots, 2n\}$, one
divides another. (This was a favourite problem of Paul Erdős.)

*Proof.* Write each chosen number as $2^a \cdot m$ with $m$ odd; $m$ is its **odd part**. The odd parts lie among the
$n$ odd numbers $1, 3, 5, \dots, 2n - 1$. With $n + 1$ numbers and $n$ possible odd parts, two chosen numbers have the
same odd part: $2^a m$ and $2^b m$ with $a < b$. Then the first divides the second. $\square$

The result is the best possible: the $n$ numbers $n + 1, n + 2, \dots, 2n$ contain no pair where one divides another,
since any multiple of one of them other than itself is at least twice as big, so larger than $2n$.

**Divisibility 3: two are coprime.** Among any $n + 1$ numbers from $\{1, \dots, 2n\}$, two are **coprime** (have no
common factor larger than 1). *Boxes:* the $n$ pairs $\{1, 2\}, \{3, 4\}, \dots, \{2n-1, 2n\}$. Two chosen numbers fall
in the same pair, so they are consecutive, and consecutive numbers are coprime (a common factor would divide their
difference, 1).

**Sums and differences.** Among any 7 whole numbers, two have a sum or a difference divisible by 10. *Boxes:* six
groups of remainders mod 10: $\{0\}$, $\{5\}$, $\{1, 9\}$, $\{2, 8\}$, $\{3, 7\}$, $\{4, 6\}$. Two of the 7 numbers land
in the same group. If they have the same remainder, their difference is divisible by 10; if their remainders are the
two different members of a pair, like 3 and 7, their sum is. Here the boxes are not single remainders, and that is
the whole idea.

**Repeating decimals.** Why does every fraction $\frac{a}{n}$ have a decimal that eventually repeats, with a period of
at most $n - 1$? Long division of $a$ by $n$ produces at each step a remainder from $0$ to $n - 1$, and each step
depends only on the remainder before it. If a remainder 0 appears the decimal stops. Otherwise only $n - 1$ remainders
are possible, so within $n$ steps some remainder repeats, and from then on the division repeats itself. For $1/7$:
the remainders cycle through $1, 3, 2, 6, 4, 5$ and $1/7 = 0.\overline{142857}$, with period exactly 6.

**A multiple made of ones.** *Claim:* every whole number $n$ coprime to 10 divides some number $11\ldots1$ whose
digits are all 1. (Such numbers are called **repunits**.)

*Proof.* Look at the $n + 1$ repunits $R_1 = 1$, $R_2 = 11$, ..., $R_{n+1}$. Two have the same remainder mod $n$, say
$R_i$ and $R_j$ with $i < j$. Then $n$ divides $R_j - R_i = 11\ldots1\,00\ldots0 = R_{j-i} \cdot 10^i$. Since $n$ is
coprime to 10, it is coprime to $10^i$, so $n$ divides $R_{j-i}$. $\square$ For example $7$ divides
$111\,111 = 7 \cdot 15\,873$. For the prime 2027 the shortest such repunit has 1013 ones; the proof promises one with at
most 2027.

**No perfect compression.** A compression program turns files into files. If it is lossless (the original can always
be recovered), it is an injective function. *Claim:* no lossless compressor can make every file of $n$ bits shorter.
*Proof:* there are $2^n$ files of exactly $n$ bits, but only $2^0 + 2^1 + \dots + 2^{n-1} = 2^n - 1$ files that are
shorter (including the empty file). A function from a set of size $2^n$ into a set of size $2^n - 1$ cannot be
injective. $\square$ So every lossless compressor makes some files longer; it wins only on files with patterns, which
real files have. The same counting shows that most files of $n$ bits cannot be compressed by even 10 bits: fewer than
$2^{n-10}$ files are that short, so at most one $n$-bit file in 1024 can be.

**Handshakes again.** At a party of $n \ge 2$ people, two people shook the same number of hands. *Proof:* each person
shook between $0$ and $n - 1$ hands, which is $n$ possible numbers for $n$ people, so the pigeonhole principle seems
not to apply. But 0 and $n - 1$ cannot both occur: someone who shook everyone's hand shook the hand of the person who
shook none, a contradiction. So only $n - 1$ values are possible for $n$ people, and two people share one. $\square$
Choosing the boxes sometimes needs an extra observation to remove one.

## 4.3 Monotone subsequences: Erdős-Szekeres

*Level: intermediate.*

**A question.** Ten different numbers are written in a row in some order. Must some four of them, read from left to
right, be increasing, or some four be decreasing?

A **subsequence** of a sequence $a_1, a_2, \dots, a_N$ is what is left after deleting some terms, keeping the order:
$a_{i_1}, a_{i_2}, \dots$ with $i_1 < i_2 < \dots$. It is **increasing** if each term is larger than the one before, and
**decreasing** if each is smaller. "Monotone" means one or the other.

Try to beat it with 9 numbers first. The sequence

$$
3, 2, 1, \ 6, 5, 4, \ 9, 8, 7
$$

has no increasing subsequence of length 4 (an increasing subsequence takes at most one number from each block of
three, since each block is decreasing) and no decreasing one of length 4 (a decreasing subsequence stays inside one
block, since every number in a later block is bigger). So 9 numbers are not enough. The theorem says 10 are.

**Theorem 4.4 (Erdős-Szekeres, 1935).** Let $r, s \ge 1$. Every sequence of $rs + 1$ different real numbers contains an
increasing subsequence of length $r + 1$ or a decreasing subsequence of length $s + 1$.

With $r = s = 3$: 10 numbers contain 4 increasing or 4 decreasing. In general, $n^2 + 1$ different numbers always
contain a monotone subsequence of length $n + 1$.

*Proof (A. Seidenberg, 1959).* Call the sequence $a_1, \dots, a_N$ with $N = rs + 1$. Give each position $k$ a label,
the pair $(i_k, d_k)$, where

- $i_k$ is the length of the longest increasing subsequence that **ends** at $a_k$, and
- $d_k$ is the length of the longest decreasing subsequence that ends at $a_k$.

Both are at least 1 (the term $a_k$ alone is a subsequence of length 1).

*Different positions have different labels.* Take positions $j < k$. The numbers are different, so either
$a_j < a_k$ or $a_j > a_k$. If $a_j < a_k$, then any increasing subsequence ending at $a_j$ can be extended by $a_k$,
so $i_k \ge i_j + 1$, and the labels differ in their first entry. If $a_j > a_k$, a decreasing subsequence ending at
$a_j$ extends by $a_k$, so $d_k \ge d_j + 1$, and the labels differ in their second entry.

*Counting the labels.* Suppose, to get a contradiction, that there is no increasing subsequence of length $r + 1$ and
no decreasing one of length $s + 1$. Then every $i_k$ is one of $1, \dots, r$ and every $d_k$ is one of $1, \dots, s$, so
there are at most $rs$ possible labels. But there are $rs + 1$ positions, all with different labels. By the pigeonhole
principle, that is impossible. $\square$

Here the objects are the positions, the boxes are the possible labels, and the clever part is the label: a pair of
numbers that is guaranteed to change from one position to any later one.

**Worked example.** Take the 10 numbers $6, 2, 9, 4, 8, 1, 7, 3, 10, 5$. Compute the labels left to right; for each
term, $i_k$ is one more than the largest $i_j$ over earlier smaller terms (or 1 if there are none), and similarly for
$d_k$ with earlier larger terms.

| term | 6 | 2 | 9 | 4 | 8 | 1 | 7 | 3 | 10 | 5 |
|---|---|---|---|---|---|---|---|---|---|---|
| $i_k$ | 1 | 1 | 2 | 2 | 3 | 1 | 3 | 2 | 4 | 3 |
| $d_k$ | 1 | 2 | 1 | 2 | 2 | 3 | 3 | 4 | 1 | 4 |

All ten pairs are different, as the proof says they must be. The label $(4, 1)$ at 10 shows an increasing
subsequence of length 4 ending there; tracing back through smaller terms with labels 3, 2, 1: $2, 4, 8, 10$. The label
$(2, 4)$ at 3 shows a decreasing one of length 4: $9, 8, 7, 3$. This sequence happens to have both.

**The bound is the best possible.** The example $3,2,1,6,5,4,9,8,7$ generalises: write $r$ blocks, each a decreasing run
of $s$ numbers, with every block above the one before. That is $rs$ numbers with no increasing subsequence longer than
$r$ (at most one per block) and no decreasing one longer than $s$ (within one block). So $rs + 1$ cannot be lowered.

**History and what followed.** Paul Erdős and George Szekeres proved the theorem in their 1935 paper "A combinatorial
problem in geometry", as a step towards a question of Esther Klein: must any 5 points in the plane, no three on a line,
include 4 that form a convex quadrilateral? (Yes; Klein proved it.) Erdős and Szekeres conjectured that $2^{m-2} + 1$
points always contain the corners of a convex $m$-gon. This "happy ending problem" (Klein and Szekeres married) is still
open in general; it is known for $m \le 6$, and in 2017 Andrew Suk proved that $2^{m + o(m)}$ points suffice. The
monotone subsequence theorem has also a probabilistic side: for a random ordering of $n$ numbers, the longest
increasing subsequence has length about $2\sqrt{n}$ (Vershik and Kerov, and Logan and Shepp, 1977), with fluctuations
described by the Baik-Deift-Johansson theorem of 1999. These belong to [Chapter 20](20-Where-Combinatorics-Goes.md)'s
world of algebraic combinatorics.

## 4.4 Dirichlet's approximation theorem

*Level: intermediate.*

**A question.** The fraction $\frac{22}{7}$ is a famous approximation to $\pi$: it is off by about $0.00126$. That is
much better than you would expect from a fraction with denominator 7, since fractions with denominator 7 are spaced
$\frac17 \approx 0.14$ apart. Is that luck, or does every number have unusually good approximations?

To measure "unusually good": for any real $x$ and any denominator $q$, the nearest fraction $\frac{p}{q}$ is within
$\frac{1}{2q}$ of $x$, because the fractions with denominator $q$ are spaced $\frac1q$ apart. An approximation is
unusually good if it is much closer than that, say within $\frac{1}{q^2}$.

Write $\lfloor y \rfloor$ for the **floor** of $y$, the largest whole number at most $y$, and
$\{y\} = y - \lfloor y \rfloor$ for its **fractional part**, which lies in $[0, 1)$. For example
$\lfloor 7.07 \rfloor = 7$ and $\{7.07\} = 0.07$.

**Theorem 4.5 (Dirichlet, 1842).** Let $x$ be a real number and $N \ge 1$ a whole number. There are whole numbers $p$
and $q$ with $1 \le q \le N$ and

$$
|q x - p| < \frac{1}{N} .
$$

Consequently $\left| x - \frac{p}{q} \right| < \frac{1}{qN} \le \frac{1}{q^2}$.

*Proof.* Look at the $N + 1$ fractional parts $\{0 \cdot x\}, \{1 \cdot x\}, \{2x\}, \dots, \{Nx\}$, all in $[0, 1)$.
Cut $[0, 1)$ into $N$ boxes of length $\frac1N$:
$\left[0, \frac1N\right), \left[\frac1N, \frac2N\right), \dots, \left[\frac{N-1}{N}, 1\right)$.
There are $N + 1$ fractional parts and $N$ boxes, so two of them, $\{ax\}$ and $\{bx\}$ with $0 \le a < b \le N$, fall
in the same box, and so differ by less than $\frac1N$. Now

$$
\{bx\} - \{ax\} = (bx - \lfloor bx \rfloor) - (ax - \lfloor ax \rfloor) = (b - a) x - \bigl(\lfloor bx \rfloor - \lfloor ax \rfloor\bigr) .
$$

Put $q = b - a$, which is between 1 and $N$, and $p = \lfloor bx \rfloor - \lfloor ax \rfloor$, a whole number. Then
$|qx - p| < \frac1N$. Dividing by $q$ gives $\left|x - \frac pq\right| < \frac{1}{qN}$, and since $q \le N$ this is at
most $\frac{1}{q^2}$. $\square$

**Worked example 1: $\sqrt 2$ with $N = 10$.** The theorem promises some $q \le 10$ with $q\sqrt2$ within $0.1$ of a
whole number. Checking: $\sqrt 2 \approx 1.414$, $2\sqrt2 \approx 2.828$, $3\sqrt 2 \approx 4.243$,
$4\sqrt2 \approx 5.657$, $5\sqrt 2 \approx 7.071$. So $q = 5$, $p = 7$ works: $|5\sqrt2 - 7| \approx 0.071 < 0.1$, and
$\left|\sqrt2 - \frac75\right| \approx 0.0142 < \frac{1}{25}$.

**Worked example 2: $\pi$ with $N = 10$.** $7\pi \approx 21.991$, so $q = 7$, $p = 22$: $|7\pi - 22| \approx 0.0089$,
far below $0.1$. So $\frac{22}{7}$ is not luck; Dirichlet guarantees an approximation at least this good in the
sense of $\frac{1}{q^2}$ (here $\frac{1}{49} \approx 0.02$, and the true error $0.00126$ beats it).

**Infinitely many good fractions.** If $x$ is irrational (not a fraction), then there are infinitely many fractions
$\frac pq$ in lowest terms with $\left| x - \frac pq \right| < \frac{1}{q^2}$. *Proof:* suppose there were only finitely
many. Since $x$ is irrational, none of them equals $x$, so each is at some positive distance from $x$; let $\delta$ be the
smallest such distance. Choose $N$ with $\frac1N < \delta$. Dirichlet gives a fraction $\frac pq$ with
$\left|x - \frac pq\right| < \frac{1}{qN} \le \frac1N < \delta$ and $\left|x - \frac pq\right| < \frac{1}{q^2}$ (reducing
to lowest terms only makes $q$ smaller, which keeps the second inequality true). It is closer than every fraction on
the list, so it is a new one. Contradiction. $\square$

**Where this leads.** Continued fractions produce such approximations explicitly (the convergents of
$\pi = [3; 7, 15, 1, 292, \dots]$ are $3, \frac{22}{7}, \frac{333}{106}, \frac{355}{113}, \dots$), and a famous series of
theorems by Liouville, Thue, Siegel and Roth says how much better than $\frac{1}{q^2}$ an algebraic number can be
approximated. All of this is in [Number theory, chapter 10](../number-theory/10-Continued-Fractions.md#106-how-well-can-numbers-be-approximated),
which proves Dirichlet's theorem again and takes it much further. The pigeonhole proof has one advantage over
continued fractions: it works in several dimensions at once. Cutting the unit cube $[0,1)^d$ into $N^d$ small cubes
gives, for any reals $x_1, \dots, x_d$, a common denominator $q \le N^d$ with every $|q x_i - p_i| < \frac1N$.

**History.** Dirichlet published the theorem in 1842, and its proof made the box principle famous.

## 4.5 A first Ramsey fact

*Level: intermediate.*

**A question.** At a party of six people, any two are either friends or strangers. Must there be three people who are
all friends with each other, or three who are all strangers to each other?

It helps to draw the party. Put a dot for each person and join every two dots by a line, coloured orange if the two are
friends and blue if they are strangers. A drawing in which every two of $n$ dots are joined is called the **complete
graph** $K_n$; the dots are **vertices** and the lines are **edges** ([Chapter 10](10-Graphs.md) gives the language
properly). Three mutual friends are an orange triangle; three mutual strangers are a blue triangle. A triangle whose
three edges have the same colour is called **monochromatic**. The question becomes:

> If every edge of $K_6$ is coloured orange or blue, must there be a monochromatic triangle?

**Five people are not enough.** Put five people at the corners of a regular pentagon. Let neighbours on the pentagon be
strangers (blue) and every other pair be friends (orange): the orange edges form a five-pointed star. Any three of the
five corners include two that are neighbours on the pentagon and two that are not (with five corners in a cycle, three
of them can't be pairwise non-adjacent, and can't be pairwise adjacent either), so no triangle is monochromatic. The
left half of the picture shows it.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 210" role="img" aria-label="Left: five points with the outer pentagon edges in blue and the inner star edges in orange; no triangle has all three edges the same colour. Right: a point v with three orange edges to points a, b and c; the edges among a, b and c are dashed, and any one of them coloured orange would complete an orange triangle">
  <line x1="105.0" y1="25.0" x2="181.1" y2="80.3" stroke="#9cc9ea" stroke-width="3"/>
  <line x1="105.0" y1="25.0" x2="152.0" y2="169.7" stroke="#eea66f" stroke-width="3"/>
  <line x1="105.0" y1="25.0" x2="58.0" y2="169.7" stroke="#eea66f" stroke-width="3"/>
  <line x1="105.0" y1="25.0" x2="28.9" y2="80.3" stroke="#9cc9ea" stroke-width="3"/>
  <line x1="181.1" y1="80.3" x2="152.0" y2="169.7" stroke="#9cc9ea" stroke-width="3"/>
  <line x1="181.1" y1="80.3" x2="58.0" y2="169.7" stroke="#eea66f" stroke-width="3"/>
  <line x1="181.1" y1="80.3" x2="28.9" y2="80.3" stroke="#eea66f" stroke-width="3"/>
  <line x1="152.0" y1="169.7" x2="58.0" y2="169.7" stroke="#9cc9ea" stroke-width="3"/>
  <line x1="152.0" y1="169.7" x2="28.9" y2="80.3" stroke="#eea66f" stroke-width="3"/>
  <line x1="58.0" y1="169.7" x2="28.9" y2="80.3" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="105.0" cy="25.0" r="6" fill="currentColor"/>
  <circle cx="181.1" cy="80.3" r="6" fill="currentColor"/>
  <circle cx="152.0" cy="169.7" r="6" fill="currentColor"/>
  <circle cx="58.0" cy="169.7" r="6" fill="currentColor"/>
  <circle cx="28.9" cy="80.3" r="6" fill="currentColor"/>
  <line x1="260" y1="105" x2="390" y2="35" stroke="#eea66f" stroke-width="3"/>
  <line x1="260" y1="105" x2="390" y2="105" stroke="#eea66f" stroke-width="3"/>
  <line x1="260" y1="105" x2="390" y2="175" stroke="#eea66f" stroke-width="3"/>
  <line x1="390" y1="35" x2="390" y2="105" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <path d="M390,35 Q430,105 390,175" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="390" y1="105" x2="390" y2="175" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <circle cx="260" cy="105" r="6" fill="currentColor"/>
  <text x="246" y="110" text-anchor="end" font-size="14" fill="currentColor">v</text>
  <circle cx="390" cy="35" r="6" fill="currentColor"/>
  <text x="378" y="27" text-anchor="end" font-size="14" fill="currentColor">a</text>
  <circle cx="390" cy="105" r="6" fill="currentColor"/>
  <text x="378" y="124" text-anchor="end" font-size="14" fill="currentColor">b</text>
  <circle cx="390" cy="175" r="6" fill="currentColor"/>
  <text x="378" y="194" text-anchor="end" font-size="14" fill="currentColor">c</text>
</svg>
</div>

**Theorem 4.6.** However the 15 edges of $K_6$ are coloured orange or blue, there is a monochromatic triangle.

*Proof.* Pick any vertex $v$. It has 5 edges, to the other 5 vertices, each orange or blue. By the strong pigeonhole
principle (5 objects, 2 boxes), at least $\lceil 5/2 \rceil = 3$ of them have the same colour; say, without loss of
generality, orange (the argument for blue is the same with the colours swapped). Call three of the vertices at the
other ends of these orange edges $a$, $b$, $c$, as in the right half of the picture.

Now look at the three edges $ab$, $bc$, $ca$ (dashed in the picture).

- If any one of them is orange, say $ab$, then $v$, $a$, $b$ form an orange triangle: $va$ and $vb$ are orange, and so
  is $ab$.
- If none of them is orange, all three are blue, and $a$, $b$, $c$ form a blue triangle.

Either way there is a monochromatic triangle. $\square$

The proof used the pigeonhole principle twice in disguise: once to find three edges of one colour at $v$, and once in the
final "either some edge is orange or all are blue", which is the simple observation that a set of three edges either
meets the orange box or lies entirely in the blue one.

**Ramsey numbers.** For whole numbers $s, t \ge 2$, the **Ramsey number** $R(s, t)$ is the smallest $n$ such that every
orange-blue colouring of the edges of $K_n$ contains an orange $K_s$ (a set of $s$ vertices with all edges among them
orange) or a blue $K_t$. Theorem 4.6 shows $R(3,3) \le 6$, and the pentagon shows $R(3,3) > 5$. So

$$
R(3, 3) = 6 .
$$

It is not even obvious that $R(s, t)$ exists, that is, that some finite $n$ always works. Frank Ramsey proved in 1930,
in a paper on a problem in logic, a theorem that implies it does, for every $s$ and $t$ and for any number of colours.
The proof of Theorem 4.6 is the model: choose a vertex, use pigeonholes to find many neighbours joined to it in one
colour, and look inside that neighbourhood for a smaller problem. Chapter 16 turns this into the general proof, with the
bound $R(s, t) \le R(s-1, t) + R(s, t-1)$; Exercise 12 below does one case by hand. Ramsey numbers are very hard to
compute. $R(3,4) = 9$ and $R(4,4) = 18$ were found by Robert Greenwood and Andrew Gleason in 1955, and $R(5,5)$ is still
unknown. [Chapter 16](16-Ramsey-Theory.md) tells the story, up to recent progress.

**The meaning.** Ramsey's theorem is often summed up in a phrase attributed to Theodore Motzkin: *complete disorder is
impossible*. However you colour a large enough structure, some part of it is perfectly orderly. Erdős-Szekeres says the
same thing about sequences (a long sequence has a long monotone piece), and Dirichlet says it about multiples of a real
number (some multiple is very close to a whole number). All three come from the same humble principle.

**Try it in Python.** A computer can check Theorem 4.6 by brute force: there are $2^{15} = 32\,768$ colourings of $K_6$.
It can also find the *smallest* number of monochromatic triangles, which turns out to be 2 (Exercise 11 proves it).

```python
from itertools import combinations

edges = list(combinations(range(6), 2))            # the 15 edges of K6
triangles = list(combinations(range(6), 3))        # the 20 triangles
least = min(
    sum(1 for a, b, c in triangles
        if (mask >> edges.index((a, b)) & 1) == (mask >> edges.index((a, c)) & 1) == (mask >> edges.index((b, c)) & 1))
    for mask in range(2**15))
print(least)                                       # 2: every colouring has at least two monochromatic triangles
```

## Check yourself

??? question "1. A drawer has 10 red, 10 blue and 10 green socks. How many must you take, in the dark, to be sure of (a) two of the same colour, (b) two red ones, (c) a pair of each colour?"

    (a) 4: three colours are the boxes, and 4 socks overfill them. (b) 22: in the worst case you first take all 20
    blue and green socks, and then 2 more are both red. (c) 22 again: with 22 socks, no colour has more than 10, so
    each colour has at least $22 - 20 = 2$. With 21 you might have 10 red, 10 blue and only 1 green.

??? question "2. How many people must be in a room to be sure that three of them were born in the same month? On the same day of the week?"

    Months: by the strong form with 12 boxes and each $n_i = 3$, $12 \cdot 2 + 1 = 25$ people; 24 people, two per month,
    show 24 is not enough. Days of the week: $7 \cdot 2 + 1 = 15$.

??? question "3. Prove that among any 7 whole numbers there are two whose sum or difference is divisible by 10."

    Sort the numbers by their remainder mod 10 into six boxes: $\{0\}, \{5\}, \{1, 9\}, \{2, 8\}, \{3, 7\}, \{4, 6\}$.
    Two of the 7 numbers share a box. If they have the same remainder, their difference is divisible by 10. If not,
    their remainders are $r$ and $10 - r$, and their sum is divisible by 10.

??? question "4. Fifty-one numbers are chosen from $\{1, 2, \dots, 100\}$. Prove that two of them are consecutive, and that one of them divides another. Show that 50 numbers are not enough for either."

    Consecutive: the 50 boxes $\{1,2\}, \{3,4\}, \dots, \{99,100\}$ receive 51 numbers, so some box gets both its
    members. The 50 odd numbers have no two consecutive. Divides: the odd parts of the chosen numbers lie among the 50
    odd numbers below 100, so two chosen numbers have the same odd part, $2^a m$ and $2^b m$, and the smaller divides
    the larger. The 50 numbers $51, \dots, 100$ have no such pair.

??? question "5. Find a block of consecutive terms of $4, 7, 1, 8, 6, 2$ whose sum is divisible by 6, using prefix sums."

    Prefix sums: $0, 4, 11, 12, 20, 26, 28$; remainders mod 6: $0, 4, 5, 0, 2, 2, 4$. Repeats: $S_0$ and $S_3$ give
    $4 + 7 + 1 = 12$; $S_4$ and $S_5$ give $6$ alone; $S_1$ and $S_6$ give $7 + 1 + 8 + 6 + 2 = 24$. Each is a multiple
    of 6.

??? question "6. Nine points with whole-number coordinates are chosen in space. Show that the midpoint of some two of them has whole-number coordinates. Is 8 enough?"

    There are $2^3 = 8$ parity classes of triples (each coordinate even or odd). Nine points, so two share a class;
    then each coordinate sum is even and the midpoint has whole-number coordinates. Eight is not enough: take one
    point from each class, for example the corners of the cube $\{0, 1\}^3$, where any two differ in parity in some
    coordinate.

??? question "7. Prove that some number of the form $2027, 20272027, 202720272027, \dots$ is divisible by 2029. (2029 is prime.)"

    Let $A_k$ be 2027 written $k$ times. Of $A_1, \dots, A_{2030}$, two have the same remainder mod 2029, say $A_i$ and
    $A_j$ with $i < j$. Then 2029 divides $A_j - A_i = A_{j-i} \cdot 10^{4i}$. Since 2029 is a prime other than 2 and
    5, it does not divide $10^{4i}$, so it divides $A_{j-i}$.

??? question "8. For the sequence $5, 1, 8, 3, 9, 2, 7, 4, 10, 6$ compute the Erdős-Szekeres labels, and read off a monotone subsequence of length 4. Then write a sequence of 16 different numbers with no monotone subsequence of length 5."

    Labels $(i_k, d_k)$: 5: $(1,1)$; 1: $(1,2)$; 8: $(2,1)$; 3: $(2,2)$; 9: $(3,1)$; 2: $(2,3)$; 7: $(3,2)$;
    4: $(3,3)$; 10: $(4,1)$; 6: $(4,3)$. The label $(4,1)$ at 10 gives the increasing subsequence $5, 8, 9, 10$ (or
    $1, 3, 7, 10$). For 16 numbers: four decreasing blocks of four, each above the last:
    $4,3,2,1,\ 8,7,6,5,\ 12,11,10,9,\ 16,15,14,13$.

??? question "9. Find $q \le 10$ and $p$ with $|q\sqrt3 - p| < \frac{1}{10}$, as Dirichlet's theorem promises."

    $\sqrt3 \approx 1.7321$. The multiples are $1.732, 3.464, 5.196, 6.928, \dots$; $4\sqrt 3 \approx 6.9282$ is within
    $0.072$ of 7. So $q = 4$, $p = 7$, and $\left|\sqrt3 - \frac74\right| \approx 0.018 < \frac{1}{16}$.

??? question "10. A program claims to compress every file of exactly 1000 bits into a file of at most 999 bits, losslessly. Prove the claim is false, and estimate what fraction of 1000-bit files can be shortened by at least 20 bits."

    There are $2^{1000}$ files of 1000 bits and $2^{1000} - 1$ files of at most 999 bits (counting the empty file), so
    two inputs would share an output, and the original could not be recovered. Files of at most 980 bits number
    $2^{981} - 1 < 2^{981}$, so at most a fraction $2^{981}/2^{1000} = 2^{-19}$, about one in half a million, of 1000-bit
    files can be compressed by 20 bits or more.

??? question "11. Prove that every orange-blue colouring of $K_6$ has at least two monochromatic triangles."

    Call an **angle** a pair of edges at a common vertex, and call it **mixed** if the two edges have different
    colours. A vertex with $r$ orange and $5 - r$ blue edges has $r(5 - r) \le 6$ mixed angles (the product is largest,
    6, at $r = 2$ or 3). So there are at most $6 \cdot 6 = 36$ mixed angles. A triangle that is not monochromatic has
    exactly 2 mixed angles (two of its edges share a colour and the third differs, and the third edge makes a mixed
    angle with each of the others), and a monochromatic triangle has none; each angle lies in exactly one triangle.
    So there are at most $36/2 = 18$ non-monochromatic triangles. $K_6$ has $\binom{6}{3} = 20$ triangles, so at least
    2 are monochromatic. (This argument is due to A. W. Goodman, 1959, who found the least number for every $K_n$.)

??? question "12. Prove that every orange-blue colouring of $K_{10}$ contains an orange triangle or a blue $K_4$. (So $R(3,4) \le 10$; the true value is 9.)"

    Pick a vertex $v$; it has 9 edges. If at most 3 were orange and at most 5 blue, there would be at most 8 edges, so
    either at least 4 are orange or at least 6 are blue. *Case 1: four orange neighbours.* If any edge among them is
    orange, it makes an orange triangle with $v$. Otherwise all six edges among the four are blue: a blue $K_4$.
    *Case 2: six blue neighbours.* By Theorem 4.6 these six contain a monochromatic triangle. An orange one is what we
    want. A blue one, together with $v$ (joined to all three by blue edges), is a blue $K_4$.

## What you learned

- **Pigeonhole:** more than $n$ objects in $n$ boxes put two in some box. The strong form: $n_1 + \dots + n_k - k + 1$
  objects put at least $n_i$ in some box $i$; the average form: some box holds at least $\lceil N/k \rceil$.
- The principle proves existence without construction; the skill is in choosing the objects and the boxes (parity
  classes, remainders, odd parts, pairs, labels, fractional parts).
- Classic uses: two people with the same number of hairs, a block of consecutive terms with sum divisible by $n$, one
  of $n+1$ numbers up to $2n$ dividing another, repeating decimals, repunit multiples, and the impossibility of
  compressing every file.
- **Erdős-Szekeres:** $rs + 1$ different numbers contain an increasing subsequence of length $r + 1$ or a decreasing
  one of length $s + 1$, and $rs$ numbers may not. The proof labels each position with a pair of lengths.
- **Dirichlet:** every real $x$ has, for each $N$, a fraction $\frac pq$ with $q \le N$ and
  $\left|x - \frac pq\right| < \frac{1}{qN}$; irrational $x$ has infinitely many with error below $\frac1{q^2}$.
- **Ramsey:** $R(3,3) = 6$. Every 2-colouring of the edges of $K_6$ has a monochromatic triangle (in fact two), and the
  pentagon and pentagram colour $K_5$ without one.

**Next:** [Chapter 5](05-Inclusion-Exclusion.md) counts the union of overlapping sets, with derangements, onto
functions and Euler's phi function as the main examples.

## Further reading

- Martin Aigner and Günter M. Ziegler, *Proofs from THE BOOK* (6th edition, 2018), the chapter "Pigeon-hole and double
  counting".
- Paul Erdős and George Szekeres, "A combinatorial problem in geometry", *Compositio Mathematica* 2 (1935).
- A. Seidenberg, "A simple proof of a theorem of Erdős and Szekeres", *Journal of the London Mathematical Society* 34
  (1959).
- J. Michael Steele, "Variations on the monotone subsequence theme of Erdős and Szekeres", in *Discrete Probability and
  Algorithms* (IMA Volumes in Mathematics and its Applications 72, 1995).
- Dan Romik, *The Surprising Mathematics of Longest Increasing Subsequences* (2015).
- Benoît Rittaud and Albrecht Heeffer, "The pigeonhole principle, two centuries before Dirichlet", *The Mathematical
  Intelligencer* 36 (2014).
- F. P. Ramsey, "On a problem of formal logic", *Proceedings of the London Mathematical Society* (2) 30 (1930).
- Ronald L. Graham, Bruce L. Rothschild and Joel H. Spencer, *Ramsey Theory* (2nd edition, 1990).
- On this site: the Topics lessons [The pigeonhole principle](../../topics/counting/level-4/06-pigeonhole-principle.md)
  and [The generalised pigeonhole principle](../../topics/counting/level-6/04-generalised-pigeonhole.md);
  [Number theory, chapter 10](../number-theory/10-Continued-Fractions.md) for continued fractions and the deeper
  approximation theorems; [Number theory, chapter 1](../number-theory/01-Divisibility.md) for divisibility and
  remainders; the U of T guide [MAT137 Unit 11, Sequences](../../uoft/MAT137/unit11.md) for monotone subsequences and
  the Bolzano-Weierstrass theorem.
