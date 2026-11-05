# 1. Counting principles

*How many handshakes happen when ten people meet? How many eight-character passwords are there, and how many of
them contain a digit? Questions that begin "how many" look like the easiest in mathematics, and they are among the
easiest to get wrong. This chapter sets out the four or five ideas that every counting argument in this book is
built from: the sum and product rules, counting what you do not want, matching one set with another (a bijection),
and counting the same thing in two ways. Each comes with a proof and with worked examples, and each will come back,
in more powerful dress, in every later chapter.*

!!! abstract "In this chapter"

    **You will learn:**

    - why counting is harder than it looks, and the two classic mistakes (missing cases, counting twice)
    - the sum rule and the product rule, with proofs, and how to use the product rule when the choices depend on each other
    - how to count the complement: the things you do not want
    - what a bijection is, and why matching two sets one to one is the master key of combinatorics
    - double counting, and the handshake lemma that comes out of it

    **You need:** school arithmetic and the idea of a set (a collection of things, written with braces, like
    $\{1, 2, 3\}$). Nothing from earlier chapters: this is the first one. For a gentler version, see the Topics
    lessons [Handshakes](../../topics/counting/level-1/04-handshakes.md),
    [From trees to multiplying](../../topics/counting/level-2/02-trees-to-multiplying.md),
    ["And" multiplies, "or" adds](../../topics/counting/level-2/03-and-or.md),
    [Codes and locks](../../topics/counting/level-2/04-codes-and-locks.md),
    [Fussy parts first](../../topics/counting/level-3/02-fussy-parts-first.md),
    [Counting what you do not want](../../topics/counting/level-3/03-counting-the-rest.md) and
    [Factors and subsets](../../topics/counting/level-3/06-factors-and-subsets.md).

    **Levels:** 1.1 to 1.3 are beginner; 1.4 and 1.5 are beginner to intermediate (the proofs and the last examples
    are the intermediate part).

## 1.1 Why counting is hard

Here are three questions. Try each before reading on.

1. Ten people meet, and each shakes hands once with each of the others. How many handshakes are there?
2. A password is 8 characters long, each a lower-case letter, an upper-case letter or a digit. How many passwords
   are there?
3. How many of those passwords contain at least one digit?

**The handshakes.** A first thought: each of the 10 people shakes 9 hands, so $10 \times 9 = 90$. That is wrong,
and the reason it is wrong is the most important lesson in this chapter. When Ana shakes hands with Ben, that one
handshake was counted twice: once among Ana's 9 and once among Ben's 9. Every handshake was counted exactly twice,
so the true number is $90 / 2 = 45$. Check on a small case you can draw: with 3 people there are 3 handshakes
(the sides of a triangle), and the formula gives $3 \times 2 / 2 = 3$. With $n$ people the same argument gives

$$
\frac{n(n-1)}{2}
$$

handshakes. Notice what happened. The answer is not one number but a formula in $n$, and the formula came with a
reason. That is what combinatorics wants: not "45" but "why 45, and what happens for any $n$".

**The passwords.** There are $26 + 26 + 10 = 62$ possible characters. The first character can be any of 62, and
for each choice the second can be any of 62, and so on, so there are

$$
62^8 = 218\,340\,105\,584\,896
$$

passwords: about 218 million million. Section 1.2 makes the reasoning ("and for each choice") into a rule.

**At least one digit.** Counting this directly is messy: the digit could be in any position, there could be one
digit or two or eight, and if you count "passwords with a digit in position 1" plus "passwords with a digit in
position 2" you count a password like `4x7aaaaa` twice. It is much easier to count the passwords with *no* digit,
$52^8$, and subtract:

$$
62^8 - 52^8 = 218\,340\,105\,584\,896 - 53\,459\,728\,531\,456 = 164\,880\,377\,053\,440 .
$$

So about three passwords in four contain a digit. Section 1.3 is about this trick.

**The two classic mistakes.** Almost every wrong answer in counting comes from one of two places.

- **Counting something twice** (the 90 handshakes), or more generally counting some things more often than others.
- **Missing cases**, often because the problem was split into pieces that did not cover everything.

The cure for both is the same: before counting, say exactly *what objects* you are counting, and make sure your
method produces each object *exactly once*. Every principle in this chapter is a way of guaranteeing "exactly once".

**What combinatorics is.** Combinatorics is the mathematics of finite arrangements: counting them (how many?),
proving they exist (is there one?), finding the best (which is largest?) and understanding their structure. This
book starts with counting, because counting is the tool everything else uses, and works its way up to graphs,
Ramsey theory and problems that are still open. The name goes back to Gottfried Wilhelm Leibniz, whose early
work *Dissertatio de arte combinatoria* (1666), was about "the art of combinations".

## 1.2 The sum rule and the product rule

**A question.** A café offers 4 sandwiches and 3 soups. You may order one item for lunch. How many choices? If
instead you order one sandwich *and* one soup, how many lunches?

The first answer is $4 + 3 = 7$ and the second is $4 \times 3 = 12$. The rule of thumb is "or adds, and
multiplies". Here are the rules properly, because the exact conditions matter.

We write $|A|$ for the number of elements of a finite set $A$ (its **size**, or **cardinality**). Two sets are
**disjoint** if they have no element in common. $A \cup B$ (the **union**) is everything in $A$ or $B$ or both;
$A \times B$ (the **Cartesian product**) is the set of all ordered pairs $(a, b)$ with $a \in A$ and $b \in B$.
The symbol $\in$ means "is an element of".

**The sum rule.** If $A$ and $B$ are finite and disjoint, then $|A \cup B| = |A| + |B|$. More generally, if
$A_1, \dots, A_k$ are pairwise disjoint (no two share an element), then

$$
|A_1 \cup A_2 \cup \dots \cup A_k| = |A_1| + |A_2| + \dots + |A_k| .
$$

*Why.* List the elements of $A$, then the elements of $B$. Every element of $A \cup B$ appears in the list (it is
in $A$ or in $B$), and none appears twice (no element is in both). So the list has $|A| + |B|$ entries and counts
$A \cup B$ exactly once each. For $k$ sets, repeat. $\square$

The word "disjoint" is essential. If 12 students play football and 9 play chess, the number who play at least one
is *not* 21 when some play both. Chapter 5 deals with overlapping sets (inclusion-exclusion); for now we only add
sets that do not overlap.

**The product rule.** If $A$ and $B$ are finite, then $|A \times B| = |A| \cdot |B|$. More generally,
$|A_1 \times \dots \times A_k| = |A_1| \cdots |A_k|$.

*Why.* Arrange the pairs $(a, b)$ in a table, one row for each $a \in A$ and one column for each $b \in B$. Each
pair sits in exactly one cell, and the table has $|A|$ rows of $|B|$ cells. By the sum rule (adding the rows,
which are disjoint), there are $|B| + |B| + \dots + |B| = |A| \cdot |B|$ pairs. For $k$ sets, use induction:
$A_1 \times \dots \times A_k$ matches $(A_1 \times \dots \times A_{k-1}) \times A_k$. $\square$

A **tree diagram** shows the same thing as a branching picture. Two shirts and three pairs of trousers make
$2 \times 3 = 6$ outfits, one for each path from the start to a leaf:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 190" role="img" aria-label="A tree diagram: from a start point two branches for the shirts, red and blue; from each shirt three branches for the trousers, giving six outfits">
  <circle cx="30" cy="95" r="5" fill="currentColor"/>
  <text x="30" y="117" text-anchor="middle" font-size="12" fill="currentColor">start</text>
  <line x1="30" y1="95" x2="150" y2="50" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="150" cy="50" r="9" fill="#eea66f" stroke="currentColor"/>
  <text x="150" y="36" text-anchor="middle" font-size="12" fill="currentColor">red shirt</text>
  <line x1="159" y1="50" x2="280" y2="20" stroke="currentColor" stroke-width="1.2"/>
  <rect x="280" y="12" width="16" height="16" fill="#7ccf9a" stroke="currentColor"/>
  <text x="304" y="24" font-size="12" fill="currentColor">1. red + jeans</text>
  <line x1="159" y1="50" x2="280" y2="50" stroke="currentColor" stroke-width="1.2"/>
  <rect x="280" y="42" width="16" height="16" fill="#7ccf9a" stroke="currentColor"/>
  <text x="304" y="54" font-size="12" fill="currentColor">2. red + shorts</text>
  <line x1="159" y1="50" x2="280" y2="80" stroke="currentColor" stroke-width="1.2"/>
  <rect x="280" y="72" width="16" height="16" fill="#7ccf9a" stroke="currentColor"/>
  <text x="304" y="84" font-size="12" fill="currentColor">3. red + skirt</text>
  <line x1="30" y1="95" x2="150" y2="140" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="150" cy="140" r="9" fill="#9cc9ea" stroke="currentColor"/>
  <text x="150" y="126" text-anchor="middle" font-size="12" fill="currentColor">blue shirt</text>
  <line x1="159" y1="140" x2="280" y2="110" stroke="currentColor" stroke-width="1.2"/>
  <rect x="280" y="102" width="16" height="16" fill="#7ccf9a" stroke="currentColor"/>
  <text x="304" y="114" font-size="12" fill="currentColor">4. blue + jeans</text>
  <line x1="159" y1="140" x2="280" y2="140" stroke="currentColor" stroke-width="1.2"/>
  <rect x="280" y="132" width="16" height="16" fill="#7ccf9a" stroke="currentColor"/>
  <text x="304" y="144" font-size="12" fill="currentColor">5. blue + shorts</text>
  <line x1="159" y1="140" x2="280" y2="170" stroke="currentColor" stroke-width="1.2"/>
  <rect x="280" y="162" width="16" height="16" fill="#7ccf9a" stroke="currentColor"/>
  <text x="304" y="174" font-size="12" fill="currentColor">6. blue + skirt</text>
</svg>
</div>

**The product rule in its useful form.** In practice we rarely have a Cartesian product. We have a *procedure*
that builds each object in stages, and the number of options at a stage may depend on what was chosen earlier,
but the *number* of options does not. The rule then reads:

> If an object is built in $k$ stages, stage $i$ can always be done in $n_i$ ways whatever happened before, and
> different sequences of choices always build different objects, and every object is built by some sequence, then
> there are $n_1 n_2 \cdots n_k$ objects.

The last two conditions say "each object exactly once". The proof is the tree diagram again: the tree has $n_1$
branches at the root, each of those has $n_2$ branches, and so on, and the objects match the leaves one to one.

**Worked example 1: four-digit numbers with all digits different.** Build the number from left to right. The first
digit cannot be 0, so it has 9 options. The second can be anything except the first digit: 9 options (0 is now
allowed). The third: 8 options. The fourth: 7. So there are $9 \cdot 9 \cdot 8 \cdot 7 = 4536$ such numbers.
Notice that *which* digits are available at stage 2 depends on stage 1, but *how many* does not; that is all the
rule needs. Check (with a computer): counting the numbers from 1000 to 9999 with four different digits gives 4536.

**Worked example 2: a trap, and how to get out of it.** How many *even* three-digit numbers have all digits
different? Try left to right: 9 choices for the first digit, 9 for the second, and then the last digit must be
even and different from the other two, but how many even digits are left depends on whether the first two were
even. The number of options at stage 3 is not constant, so the product rule does not apply as it stands.

The fix is the advice "**do the fussy part first**", and when that is still not enough, **split into cases**.

- *Last digit 0.* Then the first digit has 9 options (1 to 9) and the middle has 8. That gives $9 \cdot 8 = 72$.
- *Last digit 2, 4, 6 or 8* (4 options). The first digit cannot be 0 or the last digit: 8 options. The middle
  cannot be either of those two: 8 options. That gives $4 \cdot 8 \cdot 8 = 256$.

The two cases are disjoint, so by the sum rule there are $72 + 256 = 328$. Check: a computer search over 100 to 999
finds 328.

**Worked example 3: strings and subsets.** A **binary string** of length $n$ is a row of $n$ symbols, each 0 or 1.
By the product rule there are $2 \cdot 2 \cdots 2 = 2^n$ of them. A **subset** of a set $S$ is any set whose
elements all belong to $S$, including the empty set $\varnothing$ and $S$ itself. To build a subset of
$\{1, 2, \dots, n\}$, decide for element 1 "in or out", then for element 2, and so on: two options at each of $n$
stages, so there are $2^n$ subsets. For $n = 3$ the eight subsets are

$$
\varnothing,\ \{1\},\ \{2\},\ \{3\},\ \{1,2\},\ \{1,3\},\ \{2,3\},\ \{1,2,3\} .
$$

**Worked example 4: functions.** A **function** $f$ from a set $A$ to a set $B$ (written $f : A \to B$) assigns
to each element of $A$ one element of $B$. How many functions are there from a $k$-element set to an $n$-element
set? Choose $f$ of the first element ($n$ ways), of the second ($n$ ways), and so on: $n^k$ functions. Passwords
are exactly this: a password of length 8 is a function from the 8 positions to the 62 characters, and
$62^8$ is $n^k$ with $n = 62$, $k = 8$.

If the values must all be different (a **one-to-one** function), the first element has $n$ choices, the second
$n - 1$, and so on down to $n - k + 1$:

$$
n (n-1)(n-2) \cdots (n-k+1) .
$$

This product has $k$ factors and is called the **falling factorial**, written $n^{\underline{k}}$. It counts the
ways to award gold, silver and bronze among 8 runners, $8 \cdot 7 \cdot 6 = 336$, and it is the subject of
Chapter 2.

**Worked example 5: how many divisors?** How many positive whole numbers divide $360$? Factor it into primes:
$360 = 2^3 \cdot 3^2 \cdot 5$. A divisor of 360 is a number $2^a 3^b 5^c$ with $0 \le a \le 3$, $0 \le b \le 2$
and $0 \le c \le 1$, and different exponent triples give different numbers (that is the uniqueness of prime
factorization, proved in [Number theory, chapter 2](../number-theory/02-Primes-and-Unique-Factorization.md)).
So there are $4 \cdot 3 \cdot 2 = 24$ divisors. In general, if $N = p_1^{e_1} \cdots p_r^{e_r}$, the number of
divisors is $(e_1 + 1)(e_2 + 1) \cdots (e_r + 1)$. For example $10! = 3\,628\,800 = 2^8 \cdot 3^4 \cdot 5^2 \cdot 7$
has $9 \cdot 5 \cdot 3 \cdot 2 = 270$ divisors.

**Worked example 6: or and and together.** A licence plate has either 3 letters followed by 3 digits, or 2 letters
followed by 4 digits. How many plates? The two kinds are disjoint (they differ in position 3), so add:
$26^3 \cdot 10^3 + 26^2 \cdot 10^4 = 17\,576\,000 + 6\,760\,000 = 24\,336\,000$.

**Try it in Python.** The standard library's `itertools` builds the objects themselves, which is the best way to
check a small case:

```python
from itertools import product

digits = "0123456789"
count = sum(1 for d in product(digits, repeat=3)
            if d[0] != "0" and int(d[2]) % 2 == 0 and len(set(d)) == 3)
print(count)                      # 328: even three-digit numbers, digits all different
print(62**8, 62**8 - 52**8)       # 218340105584896 164880377053440
```

<figure class="play" data-play="outfits"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> The product rule: a shirts and b trousers make a × b outfits.</figcaption></figure>

## 1.3 Counting the complement

**A question.** How many whole numbers from 1 to 1000 contain the digit 7 at least once?

Counting them directly means splitting into "one 7", "two 7s", "three 7s", each with positions, and it is easy to
slip. Instead count the numbers with **no** 7. Pad every number below 1000 with zeros to three digits (so 42 is
042, and 0 is 000). The numbers from 000 to 999 with no 7 have each digit chosen from 9 options, so there are
$9^3 = 729$ of them. The list 000 to 999 contains 000 instead of 1000, but neither contains a 7, so the numbers
from 1 to 1000 without a 7 also number 729, and the answer is $1000 - 729 = 271$.

**The complement rule.** If $A$ is a subset of a finite set $U$ (the "universe" of everything under
consideration), the **complement** $\overline{A}$ is the set of elements of $U$ not in $A$. Then

$$
|A| = |U| - |\overline{A}| .
$$

*Why.* $A$ and $\overline{A}$ are disjoint and together make up $U$, so by the sum rule
$|A| + |\overline{A}| = |U|$. $\square$

The rule is trivial; knowing *when* to use it is the skill. The signal is the phrase **"at least one"**: "at least
one digit", "at least one 7", "at least two people share". The opposite of "at least one" is "none", and "none" is
usually a clean product.

**Worked example 1: repeated digits.** How many three-digit numbers have at least one repeated digit? All
three-digit numbers: 900. Those with three different digits: $9 \cdot 9 \cdot 8 = 648$. So $900 - 648 = 252$ have a
repeat.

**Worked example 2: five-letter words with a vowel.** Using the 26 letters, of which 5 (A, E, I, O, U) are vowels,
how many five-letter strings contain at least one vowel? All strings: $26^5 = 11\,881\,376$. Strings with no vowel:
$21^5 = 4\,084\,101$. Answer: $7\,797\,275$.

**Worked example 3: shared birthdays.** In a group of 23 people, in how many ways can their birthdays fall (out of
365 days, ignoring 29 February) so that at least two share a birthday? All ways: $365^{23}$. Ways with all
birthdays different: $365 \cdot 364 \cdots 343$ (a falling factorial with 23 factors). The answer is the
difference. As a fraction of all the ways it is about $0.507$: if birthdays are equally likely and independent,
there is a better than even chance that two of 23 people share one. That is the "birthday problem"; its
probability belongs to the probability book, but the count is pure complement.

**When the complement is not simpler.** How many 8-character passwords (from the 62 characters) contain at least
one digit *and* at least one letter? The complement is "no digit, or no letter", and "or" between overlapping sets
is not a simple sum. Here we are lucky: a password cannot have no digit *and* no letter at the same time (it has to
be made of something), so "no digit" and "no letter" are disjoint, and the answer is

$$
62^8 - 52^8 - 10^8 = 164\,880\,277\,053\,440 .
$$

When the bad sets do overlap we need inclusion-exclusion, the subject of
[Chapter 5](05-Inclusion-Exclusion.md).

## 1.4 Bijections: the key idea

**A question.** A knockout tennis tournament has 100 players. In each match two players meet and the loser is out;
when the number of players left in a round is odd, one player gets a free pass (a "bye") into the next round. How
many matches are played?

You could follow it round by round: 50 matches leave 50 players, 25 matches leave 25, then 12 matches and one bye
leave 13, then 6 matches and a bye leave 7, then 3 and a bye leave 4, then 2, then 1. Total
$50 + 25 + 12 + 6 + 3 + 2 + 1 = 99$. There is a far better way. Every match produces exactly one loser, and every
player except the champion loses exactly one match. So matches and losers can be paired off, one to one, and there
are as many matches as losers: $100 - 1 = 99$. No arithmetic about byes is needed, and the same argument gives
$n - 1$ for any $n$.

That argument is a **bijection**, and it is the most important idea in this book.

**Definitions.** Let $f : A \to B$ be a function.

- $f$ is **injective** (one-to-one) if different elements of $A$ go to different elements of $B$: $f(a) = f(a')$
  only when $a = a'$.
- $f$ is **surjective** (onto) if every element of $B$ is hit: for each $b \in B$ there is some $a$ with
  $f(a) = b$.
- $f$ is **bijective** (a **bijection**, or **one-to-one correspondence**) if it is both. Then every element of
  $B$ is hit exactly once, and $f$ has an **inverse** $f^{-1} : B \to A$ that undoes it.

**The bijection principle.** If there is a bijection between finite sets $A$ and $B$, then $|A| = |B|$.

*Why.* List the elements of $A$ as $a_1, \dots, a_m$. Then $f(a_1), \dots, f(a_m)$ is a list of elements of $B$
with no repeats (injective) that includes every element of $B$ (surjective). So it lists $B$ exactly once each,
and $|B| = m$. $\square$

The same argument proves two half-rules that we will use constantly. If $f : A \to B$ is injective, the list
$f(a_1), \dots, f(a_m)$ has no repeats, so $|A| \le |B|$. If $f$ is surjective, the list covers $B$, so
$|A| \ge |B|$. The first half-rule, turned around, is the pigeonhole principle of
[Chapter 4](04-The-Pigeonhole-Principle.md): if $|A| > |B|$, no function $A \to B$ can be injective, so two
elements of $A$ must land on the same element of $B$.

**Why bijections matter.** Counting a set directly is often hard. The bijection principle lets you trade it for a
different set that has the same size and is easier to count, as the tennis matches were traded for the losers. Much
of combinatorics is the art of finding the right partner set. Here are several, each of which returns later in the
book.

**Example 1: subsets and binary strings.** Match each subset $S$ of $\{1, \dots, n\}$ with the binary string
whose $i$th symbol is 1 if $i \in S$ and 0 if not. For $n = 5$, $\{1, 4, 5\}$ matches $10011$ and $\varnothing$
matches $00000$. Each string comes from exactly one subset (read off the positions of the 1s), so this is a
bijection, and the $2^n$ strings tell us again that there are $2^n$ subsets.

**Example 2: handshakes and pairs.** Handshakes among $n$ people match the 2-element subsets $\{x, y\}$ of the
people. So the number of 2-element subsets of an $n$-element set is $n(n-1)/2$. The same number counts the
diagonals and sides of an $n$-sided polygon together (pairs of corners), and the games in a round-robin league where
each team plays each other once.

**Example 3: grid paths and words.** On a grid of streets, how many shortest routes go from the corner $(0, 0)$ to
$(4, 3)$, moving only right (R) or up (U)? Each route is a sequence of 7 moves, 4 of them R and 3 of them U, so
routes match the words of length 7 with four Rs and three Us, such as RRURUUR. And a word is fixed by choosing
which 3 of the 7 positions hold the U, so routes match the 3-element subsets of $\{1, \dots, 7\}$. Chapter 2 counts
those: there are 35.

**Example 4: divisors and exponent triples.** The divisor count in §1.2 was a bijection: divisors of
$2^3 \cdot 3^2 \cdot 5$ match triples $(a, b, c)$ with $0 \le a \le 3$, $0 \le b \le 2$, $0 \le c \le 1$. Here is
a neat variant. How many divisors of 360 are multiples of 6? The map $d \mapsto d/6$ is a bijection from the
divisors of 360 that are multiples of 6 to the divisors of $360/6 = 60 = 2^2 \cdot 3 \cdot 5$, and 60 has
$3 \cdot 2 \cdot 2 = 12$ divisors. So 12. (The inverse map is $e \mapsto 6e$.)

**Example 5: even and odd subsets.** Of the $2^n$ subsets of $\{1, \dots, n\}$ (with $n \ge 1$), how many have an
even number of elements? Define $f(S)$ by "toggling" the element 1: if $1 \in S$ remove it, otherwise add it. Then
$f$ changes the size by exactly one, so it sends even-sized subsets to odd-sized ones and back, and $f(f(S)) = S$,
so $f$ is its own inverse and therefore a bijection between the two kinds. There are as many even subsets as odd
ones: $2^{n-1}$ each. For $n = 3$: $\varnothing, \{1,2\}, \{1,3\}, \{2,3\}$ are even, and the other four are odd.

**Example 6: compositions.** A **composition** of $n$ is a way of writing $n$ as an ordered sum of positive whole
numbers. The compositions of 4 are $4$, $3+1$, $1+3$, $2+2$, $2+1+1$, $1+2+1$, $1+1+2$ and $1+1+1+1$: eight of
them. Why $8 = 2^3$? Write $n$ as a row of $n$ ones, with $n - 1$ gaps between them:

$$
1 \ \square\ 1 \ \square\ 1 \ \square\ 1 .
$$

In each gap put either a plus sign or a comma-like "bar" that ends a part. For example "1 + 1 | 1 | 1" is the
composition $2 + 1 + 1$. Every choice of gaps gives one composition and every composition comes from one choice, so
compositions of $n$ match subsets of the $n - 1$ gaps, and there are $2^{n-1}$ of them. This "ones and bars"
picture grows into the stars and bars method of [Chapter 2](02-Permutations-and-Combinations.md#24-with-repetition-stars-and-bars).

**Example 7: pairs of nested subsets.** How many pairs $(A, B)$ of subsets of $\{1, \dots, n\}$ have
$A \subseteq B$? (The symbol $\subseteq$ means every element of $A$ is in $B$.) For each element there are exactly
three possibilities: in neither set, in $B$ only, or in both. (It cannot be in $A$ only.) Matching each pair with
the string of these three labels is a bijection to strings of length $n$ over a three-letter alphabet, so there are
$3^n$ pairs. Check for $n = 1$: the pairs are $(\varnothing, \varnothing)$, $(\varnothing, \{1\})$ and
$(\{1\}, \{1\})$, three of them. A computer check for $n = 4$ gives 81.

**How to prove a map is a bijection.** Two standard ways. Either check injective and surjective directly, or, often
easier, write down a map going the other way and check that the two maps undo each other ($g(f(a)) = a$ for all
$a$ and $f(g(b)) = b$ for all $b$). Both directions matter: a map that only "looks" reversible can lose
information. In Example 6, the inverse map reads off the gaps where one part ends and the next begins.

## 1.5 Double counting

**A question.** At a party, people shake hands (not necessarily with everyone). Afterwards each person writes down
how many hands they shook. Prove that the number of people who wrote down an odd number is even.

This looks like a puzzle about parties. It is really a statement about counting the same thing in two ways.

**The idea.** If you count one set in two different ways, the two answers are equal. That sounds empty. Its power
is that the two ways can look completely different, and setting them equal gives an identity, an inequality or a
proof that something is impossible. The standard device is to count **pairs**: pick a relation between two kinds of
objects and count the related pairs first by going through the objects of the first kind, then by going through
the objects of the second kind.

Picture it as a table. Put one row for each object of the first kind, one column for each object of the second kind,
and a mark in a cell when the two are related. The number of marks is the sum of the row totals and also the sum of
the column totals.

**The handshake lemma.** Suppose $n$ people take part and $h$ handshakes happen in total. Let $d_i$ be the number
of hands that person $i$ shook (their **degree**). Then

$$
d_1 + d_2 + \dots + d_n = 2h .
$$

*Proof.* Count the pairs (person, handshake) in which the person took part in the handshake. Going through the
people, person $i$ is in $d_i$ such pairs, so there are $d_1 + \dots + d_n$ pairs. Going through the handshakes,
each handshake involves exactly two people, so there are $2h$ pairs. The two counts are of the same set, so they are
equal. $\square$

**The party puzzle.** The total $d_1 + \dots + d_n$ is even (it is $2h$). Split the people into those with even
degree and those with odd degree. The even degrees add up to an even number, so the odd degrees must also add up to
an even number, and a sum of odd numbers is even only when there is an even number of them. $\square$

The lemma is as old as graph theory. Leonhard Euler made essentially this observation in his 1736 paper on the
bridges of Königsberg, where he noted that if you count, region by region, the bridges touching each region, every
bridge is counted twice. It returns as the first theorem of [Chapter 10](10-Graphs.md).

**Worked example 1: is it possible?** Can 7 people each shake hands with exactly 3 of the others? The degrees would
add to $7 \cdot 3 = 21$, which is odd, but the sum must be $2h$. So no. (Six people each shaking 3 hands is
possible: seat them round a table and let each shake hands with both neighbours and the person opposite.)

**Worked example 2: a football.** A classic football is stitched from 12 pentagons and 20 hexagons, with exactly
two patches meeting along each seam. How many seams? Count pairs (patch, side of that patch): the patches have
$12 \cdot 5 + 20 \cdot 6 = 180$ sides in total, and each seam is made of exactly two sides. So there are
$180 / 2 = 90$ seams. Since three patches meet at each corner, the same trick gives $180 / 3 = 60$ corners. (Euler's
formula for solids, corners minus seams plus patches equals 2, checks it: $60 - 90 + 32 = 2$. See
[Geometry, chapter 11](../geometry/11-Solid-Geometry.md).)

**Worked example 3: clubs.** In a school of 30 students, every student belongs to exactly 5 clubs and every club
has exactly 10 members. How many clubs are there? Count pairs (student, club) with the student in the club: by
students, $30 \cdot 5 = 150$; by clubs, $10c$ where $c$ is the number of clubs. So $10c = 150$ and $c = 15$.

**Worked example 4: a sum of divisor counts.** Let $d(k)$ be the number of positive divisors of $k$. What is
$d(1) + d(2) + \dots + d(10)$? Adding term by term, $1+2+2+3+2+4+2+4+3+4 = 27$. Double counting gives a second,
better formula. Count the pairs $(j, k)$ with $1 \le k \le 10$ and $j$ dividing $k$. Going through $k$, each $k$
gives $d(k)$ pairs, which is our sum. Going through $j$, the multiples of $j$ up to 10 number
$\lfloor 10/j \rfloor$ (the whole-number part of $10/j$). So

$$
\sum_{k=1}^{10} d(k) = \sum_{j=1}^{10} \left\lfloor \frac{10}{j} \right\rfloor = 10 + 5 + 3 + 2 + 2 + 1 + 1 + 1 + 1 + 1 = 27 .
$$

(The symbol $\sum_{k=1}^{10}$ means "add up, for $k$ from 1 to 10".) The second formula is the useful one: since
$\lfloor n/j \rfloor$ is close to $n/j$, the sum $d(1) + \dots + d(n)$ is close to $n (1 + \tfrac12 + \dots + \tfrac1n)$,
which is about $n \ln n$. So a number up to $n$ has, on average, about $\ln n$ divisors. That is a theorem of
Dirichlet, and the double count is the first step of its proof.

**Worked example 5: the sum $1 + 2 + \dots + n$.** Count the pairs $\{x, y\}$ of different numbers from
$\{1, \dots, n+1\}$ in two ways. By the handshake count there are $(n+1)n/2$ of them. Alternatively, sort the pairs
by their larger element: if the larger element is $y$, the smaller can be any of $1, \dots, y - 1$, which is
$y - 1$ choices. As $y$ runs from 2 to $n + 1$, that gives $1 + 2 + \dots + n$ pairs. So

$$
1 + 2 + \dots + n = \frac{n(n+1)}{2} .
$$

There was no algebra and no induction: the formula fell out of counting one set two ways. Chapter 3 proves many
identities like this, and gives them a name, **combinatorial proofs**.

**Worked example 6: a timetable that cannot exist.** In a class of 25 students, each project is done by exactly
3 students. Each student does exactly 4
projects. Is that possible? Count pairs (student, project): $25 \cdot 4 = 100$, which must equal $3p$. But 100 is
not a multiple of 3. So it is impossible. Double counting often proves that something cannot exist, by showing that
the counts would not match. Chapter 19 uses exactly this argument to decide which "block designs" can exist.

**Try it in Python.** Build the table of divisor pairs and add it up both ways:

```python
n = 10
pairs = [(j, k) for k in range(1, n + 1) for j in range(1, k + 1) if k % j == 0]
by_k = sum(sum(1 for j in range(1, k + 1) if k % j == 0) for k in range(1, n + 1))
by_j = sum(n // j for j in range(1, n + 1))
print(len(pairs), by_k, by_j)     # 27 27 27
```

## A short history thread

Counting problems are among the oldest in mathematics. Indian writers were counting arrangements very early:
Pingala's work on poetic metre (around the 3rd to 2nd century BC) counts the patterns of long and short syllables,
which are binary strings, and the medical text attributed to Sushruta counts the combinations of six basic tastes.
Bhaskara II's *Lilavati* (1150) has rules for arrangements and selections. In medieval Europe, Levi ben Gershon
(Gersonides) proved formulas for arrangements and selections in 1321, using what we would now call induction. The
subject became a branch of mathematics in the 17th century: Blaise Pascal's treatise on the arithmetic triangle
(written in 1654), Leibniz's *De arte combinatoria* (1666), and above all Jacob Bernoulli's *Ars Conjectandi*
(published in 1713, after his death), whose second part is a systematic course on permutations and combinations,
written because probability needed it. The idea of a bijection as the definition of "same size" was made central by
Georg Cantor in the 1870s and 1880s, who used it to compare infinite sets, where it gives surprising answers (see
the [Topics lessons on infinity](../../topics/infinity/index.md)).

## Check yourself

??? question "1. A restaurant has 4 starters, 6 main courses and 3 desserts. A meal is a main course, with or without a starter, and with or without a dessert. How many different meals are there?"

    Treat "no starter" as a fifth option for the starter stage and "no dessert" as a fourth option for the dessert
    stage. Then a meal is a choice from 5 starter options, 6 mains and 4 dessert options, and the product rule
    gives $5 \cdot 6 \cdot 4 = 120$ meals. Check by cases: with both extras $4 \cdot 6 \cdot 3 = 72$, starter only
    $24$, dessert only $18$, neither $6$; $72 + 24 + 18 + 6 = 120$.

??? question "2. How many positive divisors does 720 have? How many of them are even?"

    $720 = 2^4 \cdot 3^2 \cdot 5$, so there are $5 \cdot 3 \cdot 2 = 30$ divisors. An even divisor has exponent of
    2 from 1 to 4 (4 choices), so there are $4 \cdot 3 \cdot 2 = 24$ even divisors. (The other 6 are the odd
    divisors of 720, which are the divisors of 45.)

??? question "3. How many three-digit numbers have at least one repeated digit? How many have exactly two equal digits?"

    By the complement: $900 - 9 \cdot 9 \cdot 8 = 900 - 648 = 252$ have a repeat. Those with all three digits equal
    are $111, 222, \dots, 999$: 9 numbers. So $252 - 9 = 243$ have exactly two equal digits and one different.

??? question "4. Using 26 letters, how many five-letter strings contain at least one vowel (A, E, I, O, U)?"

    All strings $26^5 = 11\,881\,376$; strings with no vowel $21^5 = 4\,084\,101$. The answer is
    $11\,881\,376 - 4\,084\,101 = 7\,797\,275$.

??? question "5. Ten people sit at a long table, five couples. Each person shakes hands with everyone except their own partner. How many handshakes?"

    Without the restriction there are $10 \cdot 9 / 2 = 45$ handshakes. The 5 forbidden ones (one per couple) are
    removed: $45 - 5 = 40$. Check with the degree sum: each person shakes 8 hands, so the degrees add to
    $10 \cdot 8 = 80 = 2 \cdot 40$.

??? question "6. A knockout tournament has 37 teams (with byes when needed). How many matches are played? And if every match were instead played as a best of three (two or three games), what are the least and most games possible?"

    Matches match losers one to one: $37 - 1 = 36$ matches. Each match has 2 or 3 games, so between
    $2 \cdot 36 = 72$ and $3 \cdot 36 = 108$ games, and every number in between can happen.

??? question "7. How many rectangles (of any size) can be drawn along the lines of an $8 \times 8$ chessboard?"

    A rectangle is fixed by its two vertical sides and its two horizontal sides. The board has 9 vertical lines and
    9 horizontal lines, so the rectangles match the pairs (pair of vertical lines, pair of horizontal lines).
    There are $9 \cdot 8 / 2 = 36$ pairs of each kind, so $36 \cdot 36 = 1296$ rectangles. (Squares are included.)

??? question "8. Can 9 people each shake hands with exactly 5 others? Can 9 people shake hands so that the numbers of handshakes are 1, 1, 2, 2, 3, 3, 4, 4, 5?"

    First: the degrees would add to $45$, which is odd, but they must add to twice the number of handshakes. No.
    Second: the sum is $1+1+2+2+3+3+4+4+5 = 25$, also odd. No again. In any handshake list the number of odd entries
    must be even; here there are five (1, 1, 3, 3, 5).

??? question "9. Show, by a bijection, that the number of subsets of $\{1, \dots, n\}$ that contain the element 1 is $2^{n-1}$."

    Send a subset $S$ containing 1 to $S \setminus \{1\}$ (remove the 1). The result is a subset of
    $\{2, \dots, n\}$, and the inverse map adds 1 back. So these subsets match the subsets of an $(n-1)$-element
    set, of which there are $2^{n-1}$. (So exactly half of all subsets contain 1, as you would expect.)

??? question "10. How many ordered pairs $(A, B)$ of subsets of $\{1, \dots, n\}$ are disjoint (have no element in common)?"

    For each element there are three possibilities: in $A$ only, in $B$ only, or in neither (it cannot be in both).
    These choices are independent, so there are $3^n$ disjoint pairs. Notice that this is the same number as the
    nested pairs $A \subseteq B$ of §1.4; the map $(A, B) \mapsto (A, A \cup B)$ is a bijection from disjoint pairs
    to nested pairs, with inverse $(A, C) \mapsto (A, C \setminus A)$.

??? question "11. In a group of 20 students, each student is in exactly 3 study groups and each study group has exactly 4 students. How many study groups are there? Could each group instead have exactly 7 students?"

    Count pairs (student, group): $20 \cdot 3 = 60 = 4g$, so $g = 15$. With 7 per group we would need $7g = 60$,
    and 60 is not a multiple of 7. So no.

??? question "12. How many 8-character passwords over the 62 characters (lower case, upper case, digit) contain at least one digit and at least one letter?"

    The bad passwords have no digit ($52^8$ of them) or no letter ($10^8$). No password is in both bad sets, since
    it would have no characters at all. So the bad sets are disjoint and the answer is
    $62^8 - 52^8 - 10^8 = 218\,340\,105\,584\,896 - 53\,459\,728\,531\,456 - 100\,000\,000 = 164\,880\,277\,053\,440$.
    If you also demand an upper-case letter, the bad sets start to overlap and you need
    [inclusion-exclusion](05-Inclusion-Exclusion.md).

## What you learned

- Counting is about producing every object **exactly once**; the two classic mistakes are counting twice and
  missing cases.
- The **sum rule** adds the sizes of disjoint sets; the **product rule** multiplies the numbers of options at the
  stages of a construction, as long as the number of options at each stage is fixed. When it is not, do the fussy
  part first or split into cases.
- **"At least one"** usually means: count the complement ("none") and subtract.
- A **bijection** matches two sets one to one, so they have the same size. Trading a hard set for an easy partner is
  the master technique of combinatorics: subsets and binary strings, routes and words, matches and losers.
- **Double counting** counts one set two ways. It proves the handshake lemma (degrees add to twice the number of
  handshakes), formulas like $1 + 2 + \dots + n = n(n+1)/2$, and impossibility results.

**Next:** [Chapter 2](02-Permutations-and-Combinations.md) counts arrangements and selections, with factorials,
binomial coefficients, stars and bars, and the twelvefold way that organises them all.

## Further reading

- Richard A. Brualdi, *Introductory Combinatorics* (5th edition, 2010), Chapters 1 and 2.
- Miklós Bóna, *A Walk Through Combinatorics* (4th edition, 2017), Chapters 1 to 3. Friendly and full of examples.
- Arthur T. Benjamin and Jennifer J. Quinn, *Proofs That Really Count: The Art of Combinatorial Proof* (2003). A
  whole book of double counting and bijections.
- Martin Aigner and Günter M. Ziegler, *Proofs from THE BOOK* (6th edition, 2018); the chapter on the pigeonhole
  principle and double counting.
- Jacob Bernoulli, *The Art of Conjecturing* (1713), translated by Edith Dudley Sylla (2006); Part II is an early
  course in combinatorics.
- On this site: the Topics lessons [Tree diagrams](../../topics/counting/level-2/01-tree-diagrams.md),
  [Repeats allowed or not](../../topics/counting/level-3/01-repeats-or-not.md),
  [Counting by a bijection](../../topics/counting/level-6/05-counting-bijection.md) and
  [Proof by counting](../../topics/counting/level-7/05-double-counting.md); the U of T guide
  [MAT137 Unit 1, Logic, sets and proofs](../../uoft/MAT137/unit01.md) for sets, functions and proof writing;
  [Number theory, chapter 2](../number-theory/02-Primes-and-Unique-Factorization.md) for the prime factorization
  behind the divisor count; the [Algebra book](../algebra/index.md).
