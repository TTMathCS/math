# 1. Divisibility

*Number theory is the study of the whole numbers $0, 1, 2, 3, \dots$ and their negatives. Its questions can be
asked by a child and some of them have resisted the best mathematicians for centuries. Almost all of them start
from one idea: one whole number dividing another exactly. This chapter makes that idea precise, proves the
divisibility rules you may have learned as tricks, proves the division algorithm that every later chapter leans on,
shows how far a simple "even or odd?" can take you, and ends with the way we write numbers in base ten, base two
or any other base.*

!!! abstract "In this chapter"

    **You will learn:**

    - what kind of questions number theory asks, and which famous ones are still open
    - what "$a$ divides $b$" means exactly, and the handful of rules it obeys
    - why the tests for 3, 9 and 11 work, and how to invent a test for 7, 13 or 37
    - the division algorithm, with a full proof from the well-ordering principle
    - how to settle questions by parity (even and odd) and by remainders
    - how to write a number in any base, and why the representation is unique

    **You need:** school arithmetic, including negative numbers, and a little algebra
    ([Algebra, chapter 1](../algebra/01-The-Language-of-Algebra.md) is plenty). For a gentler version, see the
    Topics lessons [Odd and even on the number line](../../topics/number-theory/level-1/02-odd-even-line.md),
    [Leftovers](../../topics/number-theory/level-1/06-leftovers.md),
    [Multiples](../../topics/number-theory/level-2/02-multiples.md),
    [Factors with arrays](../../topics/number-theory/level-2/03-factors-arrays.md),
    [Divisibility by 3 and 9](../../topics/number-theory/level-3/03-tests-3-and-9.md),
    [Divisibility by 6, 11 and others](../../topics/number-theory/level-3/04-tests-6-11-more.md) and
    [The divisibility tests explained](../../topics/number-theory/level-5/05-divisibility-tests-explained.md).

    **Levels:** 1.1, 1.2 and 1.4 are beginner; 1.3 and 1.5 are beginner to intermediate (the proofs are the
    intermediate part).

## 1.1 What number theory asks

Here are some questions about whole numbers. Read them and decide which you could answer.

1. Is $1{,}234{,}567{,}890$ divisible by 9?
2. Is there a largest prime number?
3. Can the number 2026 be written as a sum of two perfect squares?
4. Is every even number greater than 2 the sum of two primes? ($4 = 2 + 2$, $6 = 3 + 3$, $8 = 3 + 5$,
   $10 = 5 + 5$, $100 = 3 + 97$, ...)
5. Are there infinitely many pairs of primes that differ by 2, like $11, 13$ and $17, 19$ and $101, 103$?
6. Is there an odd perfect number, a number equal to the sum of its divisors smaller than itself? ($6 = 1 + 2 + 3$
   and $28 = 1 + 2 + 4 + 7 + 14$ are perfect, but both are even.)
7. Take any whole number. If it is even, halve it; if it is odd, multiply by 3 and add 1. Repeat. Do you always
   reach 1?
8. Can a cube be the sum of two cubes? Can $x^n + y^n = z^n$ with whole numbers $x, y, z \ge 1$ and $n \ge 3$?

Every one of these can be explained to a twelve-year-old in a minute. Their fates are very different.

- Question 1 takes three seconds, once you know the rule for 9 (section 1.2): the digits add up to 45, which is a
  multiple of 9, so yes.
- Question 2 was answered in Euclid's *Elements*, about 300 BC: there is no largest prime. You will see the proof
  in [Chapter 2](02-Primes-and-Unique-Factorization.md).
- Question 3 has a complete answer that Fermat stated in the 1600s and Euler proved about a century later; it
  depends on the primes that divide the number. ($2026 = 45^2 + 1^2$, so yes.) [Chapter 11](11-Sums-of-Squares.md)
  proves the full rule.
- Question 4 is **Goldbach's conjecture**, from a letter Christian Goldbach wrote to Euler in 1742. It has been
  checked by computer for every even number up to $4 \times 10^{18}$, and nobody can prove it.
- Question 5 is the **twin prime conjecture**. Open. Since 2013 we know there are infinitely many pairs of primes
  that differ by at most some fixed number (now 246), but not that the gap 2 occurs forever.
- Question 6 is open. Nobody has found an odd perfect number, and nobody can prove there is none.
- Question 7 is the **Collatz problem** (Lothar Collatz, 1930s). Open; it has been checked for enormous ranges of
  starting numbers.
- Question 8 is **Fermat's Last Theorem**. Pierre de Fermat wrote around 1637 that he had a marvellous proof which
  the margin of his book was too small to contain. Andrew Wiles proved it in 1994, with a final step completed with
  Richard Taylor, published in 1995, using mathematics Fermat could not have imagined.
  [Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md) tells that story.

This is the character of number theory: the questions are simple, the answers can be very deep, and the line
between "easy" and "unsolved" is impossible to see in advance. The tools that do the work, though, start very small.
The smallest of all is divisibility.

**A word on proof.** This book proves what it claims. In number theory that matters even more than elsewhere,
because patterns that hold for millions of cases can fail. The numbers $n^2 + n + 41$ are prime for
$n = 0, 1, 2, \dots, 39$ (Euler noticed this in 1772), and then $40^2 + 40 + 41 = 41^2$. Checking examples
suggests; only proof settles.

## 1.2 Divides, multiples and the divisibility rules

### The definition

**Definition.** Let $a$ and $b$ be integers. We say **$a$ divides $b$**, and write $a \mid b$, if there is an
integer $k$ with $b = ak$. Then $a$ is a **divisor** (or **factor**) of $b$, and $b$ is a **multiple** of $a$.
If $a$ does not divide $b$ we write $a \nmid b$.

The word **integer** means a whole number that may be negative: $\dots, -2, -1, 0, 1, 2, \dots$ The set of all
integers is written $\mathbb{Z}$ (from the German *Zahlen*, "numbers").

Examples:

- $3 \mid 12$ because $12 = 3 \cdot 4$.
- $-3 \mid 12$ because $12 = (-3)(-4)$. Signs never matter for divisibility.
- $5 \nmid 12$: no integer $k$ has $5k = 12$.
- $7 \mid 0$ because $0 = 7 \cdot 0$. Every integer divides 0.
- $0 \mid b$ only when $b = 0$, since $0 \cdot k = 0$ for every $k$.
- $1 \mid b$ and $b \mid b$ for every $b$.

Be careful with the symbol. $a \mid b$ is a **statement**, true or false; $a / b$ is a **number**. "$3 \mid 12$" is
true; "$12 \mid 3$" is false, even though $3/12 = 1/4$ makes sense as a fraction. The whole point of the
definition is that it stays inside the integers: no fractions are needed to say it.

### The rules divisibility obeys

**Theorem 1.1.** For integers $a, b, c$:

1. (Transitivity) If $a \mid b$ and $b \mid c$, then $a \mid c$.
2. (Combinations) If $a \mid b$ and $a \mid c$, then $a \mid bx + cy$ for all integers $x, y$.
3. (Size) If $a \mid b$ and $b \neq 0$, then $|a| \le |b|$.
4. If $a \mid b$ and $b \mid a$, then $a = b$ or $a = -b$.

*Proof.* (1) $b = ak$ and $c = bm$ give $c = a(km)$, and $km$ is an integer.

(2) $b = ak$ and $c = am$ give $bx + cy = akx + amy = a(kx + my)$.

(3) $b = ak$ with $b \neq 0$ forces $k \neq 0$, so $|k| \ge 1$ and $|b| = |a||k| \ge |a|$.

(4) If $a = 0$ then $a \mid b$ forces $b = 0 = a$. Otherwise both are nonzero and (3) gives $|a| \le |b|$ and
$|b| \le |a|$, so $|a| = |b|$. $\square$

An expression $bx + cy$ with integers $x, y$ is called an **integer linear combination** of $b$ and $c$. Rule 2
says a common divisor of two numbers divides every combination of them. It is the most used fact in this book.
A first use: if $d \mid n$ and $d \mid n + 1$, then $d$ divides $(n + 1) - n = 1$, so $d = \pm 1$. Two
consecutive integers have no common divisor except $\pm 1$.

**Example.** If $7 \mid 2x + 3y$, show that $7 \mid 9x + 10y$. The trick is to find a multiple of $2x + 3y$ that
differs from $9x + 10y$ by a multiple of 7. Try $8(2x + 3y) = 16x + 24y$: the difference is
$(16x + 24y) - (9x + 10y) = 7x + 14y = 7(x + 2y)$. So

$$9x + 10y = 8(2x + 3y) - 7(x + 2y),$$

a combination of two multiples of 7, and rule 2 finishes the proof. How was 8 found? We wanted $2m - 9$ to be a
multiple of 7, and $m = 8$ gives $7$; then luckily $3m - 10 = 14$ is a multiple of 7 too.

That luck is not guaranteed. The similar-looking claim "if $7 \mid 2x + 3y$ then $7 \mid 9x + 5y$" is **false**:
take $x = 2$, $y = 1$; then $2x + 3y = 7$ but $9x + 5y = 23$. One counterexample is enough to kill a statement about
all $x$ and $y$. Exercise 2 at the end gives you one to try.

### Divisibility rules for 2, 4, 5, 8 and 10

We write numbers in base ten (section 1.5 explains this carefully). A number with digits $d_k d_{k-1} \dots d_1 d_0$
means

$$n = d_k 10^k + \dots + d_2 \cdot 100 + d_1 \cdot 10 + d_0 .$$

Split it as $n = 10 m + d_0$, where $m$ is the number formed by the other digits. Since $2 \mid 10$ and $5 \mid 10$,
rule 2 of Theorem 1.1 says $2 \mid 10m$ always, so $2 \mid n$ exactly when $2 \mid d_0$. The same holds for 5 and 10.
That is the whole proof of the last-digit tests.

For 4, split off two digits: $n = 100m + (\text{last two digits})$, and $4 \mid 100$. So 4 divides $n$ exactly when
it divides the number formed by the last two digits. For 8, use three digits and $8 \mid 1000$. For example,
$70{,}928$: the last three digits are 928 and $928 = 8 \cdot 116$, so $8 \mid 70{,}928$.

The general principle: **if $d \mid 10^j$, then $d$ divides $n$ exactly when it divides the number formed by the
last $j$ digits.**

### Why the tests for 3 and 9 work

The rule: a number is divisible by 9 exactly when the sum of its digits is; the same for 3. Why should adding
digits have anything to do with dividing?

Look at the powers of ten minus one:

$$10 - 1 = 9, \quad 100 - 1 = 99, \quad 1000 - 1 = 999, \quad \dots, \quad 10^k - 1 = \underbrace{99\dots9}_{k \text{ nines}} = 9 \cdot \underbrace{11\dots1}_{k \text{ ones}} .$$

So $9 \mid 10^k - 1$ for every $k \ge 0$ (for $k = 0$ it is $9 \mid 0$). Now write $S(n) = d_k + \dots + d_1 + d_0$
for the digit sum and subtract:

$$n - S(n) = d_k(10^k - 1) + \dots + d_2(100 - 1) + d_1(10 - 1) + d_0(1 - 1).$$

Every bracket is a multiple of 9, so $9 \mid n - S(n)$ by rule 2. Then $n = S(n) + 9t$ for some integer $t$, and
rule 2 again (in both directions) shows: $9 \mid n$ if and only if $9 \mid S(n)$. Since $3 \mid 9$, the same
argument works for 3.

In fact we proved more: **$n$ and $S(n)$ leave the same remainder when divided by 9.** That is the old bookkeepers'
check called *casting out nines*. For $918{,}082$: $S = 9 + 1 + 8 + 0 + 8 + 2 = 28$, and $28 = 3 \cdot 9 + 1$, so
$918{,}082$ leaves remainder 1 when divided by 9 (and by 3).

### Why the test for 11 works

The rule: take the digits from the right with alternating signs, $d_0 - d_1 + d_2 - d_3 + \dots$; the number is
divisible by 11 exactly when this alternating sum is.

The reason is the same, with $-1$ in place of $1$. Since $10 = 11 - 1$, the powers of ten are close to $\pm 1$:

$$10 + 1 = 11, \quad 100 - 1 = 99 = 9 \cdot 11, \quad 1000 + 1 = 1001 = 91 \cdot 11, \quad 10000 - 1 = 9999 = 909 \cdot 11 .$$

**Lemma 1.2.** For every $k \ge 0$, $11 \mid 10^k - (-1)^k$.

*Proof.* For any numbers $x, y$ and $k \ge 1$ there is the factorisation

$$x^k - y^k = (x - y)(x^{k-1} + x^{k-2} y + \dots + x y^{k-2} + y^{k-1}),$$

which you can check by multiplying out: everything cancels except $x^k$ and $-y^k$. With $x = 10$, $y = -1$ the
first factor is $11$ and the second is an integer. For $k = 0$ the claim is $11 \mid 0$. $\square$

Now with $A(n) = d_0 - d_1 + d_2 - \dots$,

$$n - A(n) = d_0(1 - 1) + d_1(10 + 1) + d_2(100 - 1) + d_3(1000 + 1) + \dots,$$

and every bracket is $10^k - (-1)^k$, a multiple of 11. So 11 divides $n$ exactly when it divides $A(n)$.

**Example.** $918{,}082$: from the right, $2 - 8 + 0 - 8 + 1 - 9 = -22$, and $11 \mid -22$, so $11 \mid 918{,}082$.
*Check:* $918{,}082 = 11 \cdot 83{,}462$.

### Inventing tests: 7, 13 and 37

The method generalises. To build a test for $d$, find a power of ten that is close to a multiple of $d$.

- $1001 = 7 \cdot 11 \cdot 13$, so $1000 = 1001 - 1$ is "$-1$" as far as 7, 11 and 13 are concerned. Split $n$
  into blocks of three digits from the right and take the alternating sum of the blocks. For $91{,}827{,}364$ the
  blocks are $91 \mid 827 \mid 364$ and the alternating sum is $364 - 827 + 91 = -372$. Since $372 = 7 \cdot 53 + 1$,
  the number $-372$ is not a multiple of 7, so neither is $91{,}827{,}364$.
- $999 = 27 \cdot 37$, so $1000 = 999 + 1$ is "$+1$" for 37 (and 27). Add the blocks of three digits: the number is
  divisible by 37 exactly when the block sum is. Exercise 10 uses this.

This also explains a classic trick: write any three-digit number twice, as in $472{,}472$. The result is
$472 \cdot 1001$, so it is always divisible by 7, 11 and 13.

## 1.3 The division algorithm

### The question

If $a$ is not a multiple of $b$, what is left over? At school, $23 \div 5 = 4$ remainder $3$, meaning
$23 = 5 \cdot 4 + 3$. Every later chapter uses this, often for negative numbers or for numbers too large to divide
by hand, so we need to know exactly what is true and why.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 120" role="img" aria-label="A number line from 0 to 25 with jumps of 5 to 20, then a remainder of 3 from 20 to 23">
  <line x1="20" y1="70" x2="425" y2="70" stroke="currentColor" stroke-width="1.5"/>
  <path d="M20,70 Q60,30 100,70" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <path d="M100,70 Q140,30 180,70" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <path d="M180,70 Q220,30 260,70" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <path d="M260,70 Q300,30 340,70" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <line x1="340" y1="70" x2="388" y2="70" stroke="#eea66f" stroke-width="6"/>
  <line x1="20" y1="64" x2="20" y2="76" stroke="currentColor"/>
  <line x1="100" y1="64" x2="100" y2="76" stroke="currentColor"/>
  <line x1="180" y1="64" x2="180" y2="76" stroke="currentColor"/>
  <line x1="260" y1="64" x2="260" y2="76" stroke="currentColor"/>
  <line x1="340" y1="64" x2="340" y2="76" stroke="currentColor"/>
  <line x1="420" y1="64" x2="420" y2="76" stroke="currentColor"/>
  <circle cx="388" cy="70" r="5" fill="#7ccf9a" stroke="currentColor"/>
  <text x="20" y="94" text-anchor="middle" font-size="13" fill="currentColor">0</text>
  <text x="100" y="94" text-anchor="middle" font-size="13" fill="currentColor">5</text>
  <text x="180" y="94" text-anchor="middle" font-size="13" fill="currentColor">10</text>
  <text x="260" y="94" text-anchor="middle" font-size="13" fill="currentColor">15</text>
  <text x="340" y="94" text-anchor="middle" font-size="13" fill="currentColor">20</text>
  <text x="420" y="94" text-anchor="middle" font-size="13" fill="currentColor">25</text>
  <text x="388" y="56" text-anchor="middle" font-size="13" fill="currentColor">23</text>
  <text x="180" y="28" text-anchor="middle" font-size="13" fill="currentColor">q = 4 jumps of b = 5</text>
  <text x="364" y="112" text-anchor="middle" font-size="13" fill="currentColor">r = 3</text>
</svg>
</div>

The picture says it all: walk from 0 in jumps of $b$ as far as you can without passing $a$. The number of jumps is
the **quotient** $q$, and the distance left is the **remainder** $r$, which is at least 0 and less than one jump.

### The well-ordering principle

The proof rests on a property of the whole numbers so basic that it is usually taken as an axiom.

**The well-ordering principle.** Every nonempty set of non-negative integers has a smallest element.

This is false for other number systems: the positive fractions have no smallest element (halve any one), and the
integers have no smallest element (subtract 1). It is true for $\{0, 1, 2, \dots\}$ because you can count up from 0
and must eventually meet an element of the set. Logically, well-ordering is equivalent to the principle of
mathematical induction ([Algebra, chapter 8](../algebra/08-Sequences-Series-and-Induction.md)): either can be
proved from the other. We will use it again and again, in the form "take the smallest counterexample" or "take the
smallest positive element".

### The theorem

**Theorem 1.3 (division algorithm).** Let $a$ and $b$ be integers with $b > 0$. There are unique integers $q$ and $r$
with

$$a = bq + r \quad \text{and} \quad 0 \le r < b .$$

*Proof of existence.* Consider the set

$$S = \{\, a - bk : k \in \mathbb{Z} \text{ and } a - bk \ge 0 \,\}.$$

These are the non-negative numbers you can reach from $a$ by subtracting multiples of $b$ (subtracting a negative
multiple means adding). $S$ is not empty: take $k = -|a|$; then $a - bk = a + b|a| \ge a + |a| \ge 0$, because
$b \ge 1$. By well-ordering, $S$ has a smallest element; call it $r$, and let $q$ be the $k$ that gives it, so
$r = a - bq \ge 0$.

Suppose $r \ge b$. Then $r - b = a - b(q + 1)$ is still $\ge 0$, so it is in $S$, and it is smaller than $r$. That
contradicts the choice of $r$ as the smallest. So $r < b$, and $a = bq + r$ with $0 \le r < b$.

*Proof of uniqueness.* Suppose also $a = bq' + r'$ with $0 \le r' < b$. Subtract: $b(q - q') = r' - r$. The right side
lies strictly between $-b$ and $b$, because both remainders are in $[0, b)$. The left side is a multiple of $b$. The
only multiple of $b$ strictly between $-b$ and $b$ is 0. So $r' = r$, and then $b(q - q') = 0$ with $b \neq 0$ gives
$q' = q$. $\square$

The name is traditional; it is a theorem, not an algorithm, though its proof hides one (keep subtracting $b$).

**Notation.** The quotient is $q = \lfloor a/b \rfloor$, the **floor** of $a/b$, meaning the largest integer that
is at most $a/b$. The remainder is written $r = a \bmod b$. So $23 \bmod 5 = 3$ and $\lfloor 23/5 \rfloor = 4$.

### Worked examples

**Example 1.** $a = 100$, $b = 7$. Multiples of 7 near 100: $98 = 7 \cdot 14$. So $100 = 7 \cdot 14 + 2$, $q = 14$,
$r = 2$. *Check:* $98 + 2 = 100$, and $0 \le 2 < 7$.

**Example 2.** $a = -17$, $b = 5$. The remainder must be in $\{0, 1, 2, 3, 4\}$, so we need the multiple of 5 just
**below** $-17$, which is $-20$. Then $-17 = 5 \cdot (-4) + 3$, so $q = -4$, $r = 3$. The tempting answer
"$-17 = 5 \cdot (-3) - 2$" has a negative remainder and is not what the theorem gives. On the number line, from
$-20$ you step **forward** 3 to reach $-17$.

**Example 3.** $a = 0$, any $b$: $0 = b \cdot 0 + 0$.

**Example 4.** $b \mid a$ exactly when the remainder is 0. This is the link between the two halves of this chapter:
divisibility is the special case $r = 0$ of division with remainder.

!!! note "Try it in Python"

    Python's `//` and `%` follow the theorem when $b > 0$, including for negative $a$:

    ```python
    print(divmod(100, 7))    # (14, 2)
    print(divmod(-17, 5))    # (-4, 3)
    print(-17 // 5, -17 % 5) # -4 3
    ```

    Some other languages (C, Java, JavaScript) give $-17 \,\%\, 5 = -2$, because they round the quotient toward
    zero instead of down. Programmers who forget this get bugs with negative numbers.

### Every integer has a type

The division algorithm sorts all integers into $b$ classes by their remainder. With $b = 2$, every integer is
$2q$ or $2q + 1$: even or odd, and never both (uniqueness). With $b = 3$, every integer is $3q$, $3q + 1$ or
$3q + 2$. With $b = 4$, it is one of $4q, 4q + 1, 4q + 2, 4q + 3$. This sorting is the engine of the next section,
and in [Chapter 4](04-Congruences.md) it becomes arithmetic in its own right.

## 1.4 Even and odd, and other remainder arguments

### Parity

An integer is **even** if $2 \mid n$, that is $n = 2k$, and **odd** if $n = 2k + 1$. Whether a number is even or odd
is called its **parity**. By the division algorithm every integer has exactly one parity. The rules
"even + even = even, odd + odd = even, even + odd = odd, odd $\times$ odd = odd, even $\times$ anything = even"
all follow from algebra; for example,

$$(2j + 1)(2k + 1) = 4jk + 2j + 2k + 1 = 2(2jk + j + k) + 1 .$$

Simple as it is, parity solves problems that look hard.

**Example 1 (signs).** Can you put $+$ and $-$ signs in $\pm 1 \pm 2 \pm 3 \pm \dots \pm 10$ to make the total 0?
Changing a $+k$ to $-k$ changes the total by $2k$, an even number. With all plus signs the total is
$1 + 2 + \dots + 10 = 55$, which is odd. Every choice of signs gives $55$ minus an even number: always odd, never 0.
So it is impossible. (Exercise 8 asks for which $n$ it is possible.)

**Example 2 (the chessboard).** Cut two opposite corner squares off an $8 \times 8$ chessboard. Can the remaining
62 squares be covered by 31 dominoes, each covering two neighbouring squares?

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 200" role="img" aria-label="An eight by eight chessboard with two opposite corners removed, both of the same colour, and a domino covering one square of each colour">
  <rect x="100" y="10" width="20" height="20" fill="none" stroke="currentColor" stroke-dasharray="3 3"/>
  <path d="M104,14 L116,26 M116,14 L104,26" stroke="currentColor" stroke-width="1.5"/>
  <rect x="120" y="10" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="140" y="10" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="160" y="10" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="180" y="10" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="200" y="10" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="220" y="10" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="240" y="10" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="100" y="30" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="120" y="30" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="140" y="30" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="160" y="30" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="180" y="30" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="200" y="30" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="220" y="30" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="240" y="30" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="100" y="50" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="120" y="50" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="140" y="50" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="160" y="50" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="180" y="50" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="200" y="50" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="220" y="50" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="240" y="50" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="100" y="70" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="120" y="70" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="140" y="70" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="160" y="70" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="180" y="70" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="200" y="70" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="220" y="70" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="240" y="70" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="100" y="90" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="120" y="90" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="140" y="90" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="160" y="90" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="180" y="90" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="200" y="90" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="220" y="90" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="240" y="90" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="100" y="110" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="120" y="110" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="140" y="110" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="160" y="110" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="180" y="110" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="200" y="110" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="220" y="110" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="240" y="110" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="100" y="130" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="120" y="130" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="140" y="130" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="160" y="130" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="180" y="130" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="200" y="130" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="220" y="130" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="240" y="130" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="100" y="150" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="120" y="150" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="140" y="150" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="160" y="150" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="180" y="150" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="200" y="150" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="220" y="150" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.5"/>
  <rect x="240" y="150" width="20" height="20" fill="none" stroke="currentColor" stroke-dasharray="3 3"/>
  <path d="M244,154 L256,166 M256,154 L244,166" stroke="currentColor" stroke-width="1.5"/>
  <rect x="300" y="70" width="20" height="20" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <rect x="320" y="70" width="20" height="20" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="320" y="110" text-anchor="middle" font-size="12" fill="currentColor">a domino covers</text>
  <text x="320" y="126" text-anchor="middle" font-size="12" fill="currentColor">one of each colour</text>
  <text x="180" y="190" text-anchor="middle" font-size="12" fill="currentColor">removed corners: both orange</text>
</svg>
</div>

Colour the board in the usual two colours. Opposite corners have the same colour (in the picture, both are
orange), so what remains has 30 orange squares and 32 blue ones. A domino always covers one square of each colour,
so 31 dominoes cover 31 of each. Impossible. The colouring is parity in disguise: a square in row $i$, column $j$
is orange when $i + j$ is even.

**Example 3 (squares and even numbers).** If $n^2$ is even, then $n$ is even. *Proof.* Suppose not: $n$ is odd,
$n = 2k + 1$. Then $n^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$ is odd, a contradiction. $\square$ This is a proof
by **contrapositive**: to show "if $P$ then $Q$" we showed "if not $Q$ then not $P$". It is the key step in the proof
that $\sqrt 2$ is irrational, which [Chapter 2](02-Primes-and-Unique-Factorization.md) gives.

**Example 4 (a product of consecutive numbers).** $n(n + 1)$ is always even: one of two consecutive integers is
even. Hence $\frac{n(n+1)}{2}$ is always a whole number, as the formula $1 + 2 + \dots + n = \frac{n(n+1)}{2}$
needs.

### Which numbers are differences of two squares?

Here parity gives a complete answer to a real question.

**Theorem 1.4.** An integer $n$ can be written as $x^2 - y^2$ with integers $x, y$ if and only if $n$ is odd or
divisible by 4. Numbers of the form $4k + 2$ (like $2, 6, 10, 14$) are never a difference of two squares.

*Proof.* If $n$ is odd, $n = 2k + 1 = (k + 1)^2 - k^2$. If $4 \mid n$, $n = 4k = (k + 1)^2 - (k - 1)^2$; check:
$(k^2 + 2k + 1) - (k^2 - 2k + 1) = 4k$.

Conversely suppose $n = x^2 - y^2 = (x - y)(x + y)$. The two factors $x - y$ and $x + y$ differ by $2y$, an even
number, so they have the same parity. If both are odd, the product is odd. If both are even, each has a factor 2 and
the product is divisible by 4. Either way $n$ is not of the form $4k + 2$. $\square$

**Check:** $15 = 8^2 - 7^2 = 64 - 49$; $12 = 4^2 - 2^2$; and no pair works for 6, as the theorem says.

### Squares and remainders

Splitting into the cases given by the division algorithm, as we just did with parity, works for any $b$.

**Odd squares.** Every odd square leaves remainder 1 when divided by 8. *Proof.* $n = 2k + 1$ gives
$n^2 = 4k^2 + 4k + 1 = 4k(k + 1) + 1$. By Example 4, $k(k + 1)$ is even, so $4k(k+1)$ is a multiple of 8. $\square$
So $1, 9, 25, 49, 81, 121$ are $1, 1 + 8, 1 + 24, 1 + 48, 1 + 80, 1 + 120$.

**Squares and 4.** Every square leaves remainder 0 or 1 on division by 4: $(2k)^2 = 4k^2$ and
$(2k + 1)^2 = 4(k^2 + k) + 1$. **Consequence:** a sum of two squares leaves remainder 0, 1 or 2 on division by 4,
never 3. So $3, 7, 11, 15, 19, \dots, 2027$ are not sums of two squares. This is the easy half of question 3 in
section 1.1; [Chapter 11](11-Sums-of-Squares.md) does the hard half.

**Squares and 3.** Every square leaves remainder 0 or 1 on division by 3: $(3k)^2 = 3(3k^2)$,
$(3k \pm 1)^2 = 3(3k^2 \pm 2k) + 1$. Exercise 9 turns this into a useful fact.

**Three in a row.** $n^3 - n$ is divisible by 6 for every integer $n$. *Proof.* $n^3 - n = (n - 1)n(n + 1)$, a
product of three consecutive integers. One of any two consecutive integers is even, and one of any three
consecutive integers is a multiple of 3 (their remainders on division by 3 are three different values among
$0, 1, 2$, so one of them is 0). A number divisible by 2 and by 3 is divisible by 6: if $n^3 - n = 2m$ and $3 \mid 2m$,
then $3 \mid 3m - 2m = m$, so $6 \mid 2m$. $\square$

The last step, "divisible by 2 and by 3 means divisible by 6", looks obvious, but it is not true for every pair:
$12$ is divisible by 4 and by 6 but not by 24. What makes 2 and 3 work is that they have no common factor;
[Chapter 3](03-GCD-and-Euclids-Algorithm.md) proves the general rule.

## 1.5 Number bases

### What a numeral means

The string of symbols "2026" is a **numeral**: a name for a number. It names

$$2 \cdot 10^3 + 0 \cdot 10^2 + 2 \cdot 10^1 + 6 \cdot 10^0 .$$

Nothing about the number itself is special to ten; ten is the number of fingers we count on. Other bases have been
used for thousands of years. The Babylonians wrote in base 60, which survives in 60 minutes and 360 degrees. The
Maya used a mostly base-20 system. Computers use base 2, because a switch has two states.

**Definition.** Let $b \ge 2$ be an integer, the **base**. A **base-$b$ representation** of a positive integer $n$ is
an expression

$$n = d_k b^k + d_{k-1} b^{k-1} + \dots + d_1 b + d_0, \qquad 0 \le d_i \le b - 1, \quad d_k \neq 0 .$$

The $d_i$ are the **digits**; we write $n = (d_k d_{k-1} \dots d_1 d_0)_b$. Base 2 is **binary**, base 8 **octal**,
base 16 **hexadecimal**; in hexadecimal the digits 10 to 15 are written A to F.

### Existence and uniqueness

**Theorem 1.5.** Every positive integer has exactly one base-$b$ representation.

*Proof.* The key observation is that the last digit is forced. If $n = (d_k \dots d_1 d_0)_b$ then

$$n = b\,(d_k b^{k-1} + \dots + d_1) + d_0, \qquad 0 \le d_0 < b,$$

which is the division algorithm for $n$ divided by $b$. By uniqueness in Theorem 1.3, $d_0$ must be $n \bmod b$, and
the number $(d_k \dots d_1)_b$ formed by the other digits must be the quotient $\lfloor n/b \rfloor$.

*Existence,* by strong induction on $n$. If $n < b$, the single digit $d_0 = n$ works. If $n \ge b$, divide:
$n = bq + r$ with $0 \le r < b$ and $1 \le q < n$. By induction $q$ has a representation $(e_j \dots e_0)_b$; then
$n = (e_j \dots e_0\, r)_b$, appending $r$ as the last digit.

*Uniqueness,* also by strong induction. If $n$ had two representations, their last digits would both equal
$n \bmod b$, and the numbers formed by the remaining digits would both equal $\lfloor n/b \rfloor$, which is smaller
than $n$ and so (by induction) has only one representation. If $n < b$ there is nothing left after the last digit,
since any representation with two or more digits is at least $b$. $\square$

The proof is also a method: **divide by $b$ repeatedly; the remainders are the digits, last digit first.**

**Example 1.** 2026 in base 2. Halve repeatedly, noting remainders:

| $n$ | 2026 | 1013 | 506 | 253 | 126 | 63 | 31 | 15 | 7 | 3 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $n \bmod 2$ | 0 | 1 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | 1 | 1 |

Reading the remainders from right to left: $2026 = (11111101010)_2$. *Check:*
$1024 + 512 + 256 + 128 + 64 + 32 + 8 + 2 = 2026$.

**Example 2.** 2026 in base 16: $2026 = 16 \cdot 126 + 10$ and $126 = 16 \cdot 7 + 14$, so the digits are
$7, 14, 10$, written $(7\mathrm{EA})_{16}$. *Check:* $7 \cdot 256 + 14 \cdot 16 + 10 = 1792 + 224 + 10 = 2026$.
Since $16 = 2^4$, each hexadecimal digit is exactly four binary digits: $7 = 0111$, $\mathrm{E} = 1110$,
$\mathrm{A} = 1010$, and $0111\,1110\,1010$ is the binary string above. That is why programmers like hexadecimal.

**Example 3.** Going the other way, $(2101)_3 = 2 \cdot 27 + 1 \cdot 9 + 0 \cdot 3 + 1 = 64$. A fast way to evaluate,
called **Horner's rule**, reads the digits left to right, multiplying by the base and adding:
$2 \to 2 \cdot 3 + 1 = 7 \to 7 \cdot 3 + 0 = 21 \to 21 \cdot 3 + 1 = 64$.

!!! note "Try it in Python"

    ```python
    def to_base(n, b):
        digits = []
        while n > 0:
            n, r = divmod(n, b)   # the division algorithm
            digits.append(r)
        return digits[::-1]       # last digit was found first

    print(to_base(2026, 2))   # [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0]
    print(to_base(2026, 16))  # [7, 14, 10]
    print(int("2101", 3))     # 64
    ```

### Divisibility rules in any base

Everything in section 1.2 used only the fact that $10 = 9 + 1 = 11 - 1$. In base $b$, $b = (b - 1) + 1 = (b + 1) - 1$,
so the same proofs give:

- $n$ is divisible by $b - 1$ (or any divisor of $b - 1$) exactly when its base-$b$ digit sum is;
- $n$ is divisible by $b + 1$ exactly when its alternating base-$b$ digit sum is;
- the last digit decides divisibility by any divisor of $b$.

In hexadecimal, the digit sum tests for 15, 5 and 3. For $(7\mathrm{EA})_{16}$: $7 + 14 + 10 = 31$, which leaves
remainder 1 on division by 15; and $2026 = 15 \cdot 135 + 1$. In binary, the last digit tests for 2 (even numbers end
in 0) and the alternating digit sum tests for 3.

### Weighing with powers of 3

A last example shows a base with a twist. With weights of 1, 3, 9 and 27 grams and a balance, you can weigh every
whole number of grams from 1 to 40, because weights may go in **either** pan. This is **balanced ternary**:
every integer can be written uniquely as $\sum e_i 3^i$ with digits $e_i \in \{-1, 0, 1\}$. For example
$20 = 27 - 9 + 3 - 1$: put the object with the 9 and the 1 on one side, and the 27 and 3 on the other. The proof is
the division algorithm again, with remainders taken in $\{-1, 0, 1\}$ instead of $\{0, 1, 2\}$: a remainder of 2 is
replaced by $-1$ and the quotient goes up by one.

## A short history thread

Books VII to IX of Euclid's *Elements* (Alexandria, about 300 BC) contain the first systematic number theory that
survives: divisibility, primes, the greatest common divisor and the infinitude of primes. Euclid's numbers were
lengths and his proofs are written in geometric language, but the arguments are the ones used in this book.

Place-value notation with a zero developed in India; Brahmagupta's *Brāhmasphuṭasiddhānta* (628) gives rules for
calculating with zero and negative numbers. The Persian mathematician al-Khwarizmi wrote a book on Indian numerals in
the ninth century, and through Latin translations of it and through Fibonacci's *Liber Abaci* (1202) the decimal
system spread across Europe. Casting out nines was known to medieval Indian and Arab calculators.

Gottfried Wilhelm Leibniz published an account of binary arithmetic in 1703. Binary became central with electronic
computers in the 1940s; Claude Shannon's 1937 master's thesis showed how switching circuits carry out Boolean logic.

The deeper questions in section 1.1 came later: Fermat in the 1600s, Euler and Goldbach in the 1700s. Carl Friedrich
Gauss's *Disquisitiones Arithmeticae* (1801) turned the subject into a unified theory, and its first idea is the
subject of [Chapter 4](04-Congruences.md).

## Check yourself

??? question "1. Is $7{,}654{,}321$ divisible by 3? By 9? By 11? Give the remainders."

    Digit sum: $7 + 6 + 5 + 4 + 3 + 2 + 1 = 28$, which leaves remainder 1 on division by 3 and by 9. So the number
    leaves remainder 1 on division by 3 and by 9, and is divisible by neither.

    Alternating sum from the right: $1 - 2 + 3 - 4 + 5 - 6 + 7 = 4$. So the remainder on division by 11 is 4, and it
    is not divisible by 11. *Check:* $7{,}654{,}321 = 11 \cdot 695{,}847 + 4$.

??? question "2. Show that if $a \mid b$ and $a \mid c$ then $a \mid 3b - 5c$. Then show: if $13 \mid 2x + 3y$, then $13 \mid 5x + y$."

    The first part is rule 2 of Theorem 1.1 with $x = 3$, $y = -5$: $b = ak$, $c = am$ give $3b - 5c = a(3k - 5m)$.

    For the second, look for a multiple of $2x + 3y$ that differs from $5x + y$ by a multiple of 13. Try
    $9(2x + 3y) = 18x + 27y$. Then $(18x + 27y) - (5x + y) = 13x + 26y = 13(x + 2y)$. So
    $5x + y = 9(2x + 3y) - 13(x + 2y)$, a combination of two multiples of 13, hence a multiple of 13.

??? question "3. Find the quotient and remainder of the division algorithm for $a = -45$, $b = 7$."

    The remainder must be in $\{0, \dots, 6\}$, so take the multiple of 7 just below $-45$, namely $-49$.
    Then $-45 = 7 \cdot (-7) + 4$: $q = -7$, $r = 4$. *Check:* $-49 + 4 = -45$.

??? question "4. Prove that $n^2 + n + 1$ is odd for every integer $n$."

    $n^2 + n = n(n + 1)$ is a product of consecutive integers, so it is even. Adding 1 gives an odd number.

??? question "5. Prove that $n^2 + 2$ is never divisible by 4."

    A square leaves remainder 0 or 1 on division by 4 (section 1.4). So $n^2 + 2$ leaves remainder 2 or 3, never 0.

??? question "6. Write 100 in bases 2, 3 and 7."

    Base 2: $100 \to 50 \to 25 \to 12 \to 6 \to 3 \to 1$ with remainders $0, 0, 1, 0, 0, 1, 1$, so
    $100 = (1100100)_2$; check $64 + 32 + 4 = 100$.

    Base 3: $100 = 3 \cdot 33 + 1$, $33 = 3 \cdot 11 + 0$, $11 = 3 \cdot 3 + 2$, $3 = 3 \cdot 1 + 0$, $1$. So
    $100 = (10201)_3$; check $81 + 2 \cdot 9 + 1 = 100$.

    Base 7: $100 = 7 \cdot 14 + 2$, $14 = 7 \cdot 2 + 0$, so $100 = (202)_7$; check $2 \cdot 49 + 2 = 100$.

??? question "7. Show that every six-digit number of the form $abcabc$ is divisible by 7, 11 and 13."

    $(abcabc)_{10} = 1000 \cdot (abc)_{10} + (abc)_{10} = 1001 \cdot (abc)_{10}$, and $1001 = 7 \cdot 11 \cdot 13$.

??? question "8. For which $n$ can you choose signs in $\pm 1 \pm 2 \pm \dots \pm n$ to get 0?"

    **Necessary:** as in Example 1 of section 1.4, every choice of signs gives $\frac{n(n+1)}{2}$ minus an even
    number, so the total has the same parity as $\frac{n(n+1)}{2}$. We need $\frac{n(n+1)}{2}$ even, that is
    $4 \mid n(n + 1)$. Since one of $n, n + 1$ is odd, the other must be divisible by 4: $n$ leaves remainder 0 or 3
    on division by 4.

    **Sufficient:** four consecutive numbers can cancel: $a - (a + 1) - (a + 2) + (a + 3) = 0$. If $n = 4m$, split
    $1, \dots, n$ into $m$ blocks of four and cancel each. If $n = 4m + 3$, use $1 + 2 - 3 = 0$ for the first three
    and blocks of four after. So the answer is: exactly when $n$ leaves remainder 0 or 3 on division by 4. For
    example, $n = 7$: $1 + 2 - 3 + 4 - 5 - 6 + 7 = 0$.

??? question "9. Show that if $3 \mid a^2 + b^2$, then $3 \mid a$ and $3 \mid b$."

    A square leaves remainder 0 or 1 on division by 3, and 0 only when the number itself is a multiple of 3
    (section 1.4: $(3k \pm 1)^2$ leaves 1). The possible remainders of $a^2 + b^2$ are $0 + 0 = 0$, $0 + 1 = 1$,
    $1 + 0 = 1$ and $1 + 1 = 2$. Only the first is 0, and it needs both squares, hence both $a$ and $b$, to be
    multiples of 3.

??? question "10. Use $999 = 27 \cdot 37$ to find the remainder when $123{,}456{,}789$ is divided by 37."

    Since $1000 = 999 + 1$, and $10^6 - 1 = (10^3 - 1)(10^3 + 1)$ is also a multiple of 999, the number and the sum
    of its three-digit blocks leave the same remainder on division by 37. Block sum: $123 + 456 + 789 = 1368$. Again:
    $1 + 368 = 369 = 37 \cdot 9 + 36$. The remainder is 36. *Check:*
    $123{,}456{,}789 = 37 \cdot 3{,}336{,}669 + 36$.

??? question "11. For which divisors $d$ does the last base-10 digit alone decide whether $d \mid n$? Explain."

    Exactly the divisors of 10: $d = 1, 2, 5, 10$. If $d \mid 10$, then $n = 10m + d_0$ and $d \mid 10m$, so
    $d \mid n$ exactly when $d \mid d_0$. If $d \nmid 10$, the last digit cannot decide: the numbers $0$ and $10$ have
    the same last digit, but $d \mid 0$ while $d \nmid 10$.

??? question "12. Prove that $24 \mid p^2 - 1$ for every prime $p > 3$."

    A prime $p > 3$ is odd, so $8 \mid p^2 - 1$ (odd squares leave remainder 1 on division by 8). It is also not a
    multiple of 3, so $p^2$ leaves remainder 1 on division by 3, and $3 \mid p^2 - 1$. Write $p^2 - 1 = 8m$; then
    $3 \mid 8m$, and $3 \mid 9m - 8m = m$, so $p^2 - 1 = 8 \cdot 3 j = 24 j$. *Check:* $5^2 - 1 = 24$,
    $7^2 - 1 = 48$, $11^2 - 1 = 120$, $13^2 - 1 = 168 = 24 \cdot 7$.

## What you learned

- Number theory asks simple questions about whole numbers; some take a line to answer and some are still open.
- $a \mid b$ means $b = ak$ for an integer $k$. A common divisor of two numbers divides every integer combination
  of them.
- The tests for 3, 9 and 11 work because $10^k - 1$ is a multiple of 9 and $10^k - (-1)^k$ is a multiple of 11;
  the same idea gives tests for 7, 13, 37 and for any base.
- The division algorithm: for $b > 0$ there are unique $q, r$ with $a = bq + r$, $0 \le r < b$. Its proof uses the
  well-ordering principle.
- Splitting into cases by remainder (parity is the case $b = 2$) answers questions such as which numbers are
  differences of two squares.
- Every positive integer has exactly one representation in each base $b \ge 2$, found by repeated division.

**Next:** [Chapter 2](02-Primes-and-Unique-Factorization.md), the building blocks: primes, why they never run out,
and why every number breaks into primes in exactly one way.

## Further reading

- Euclid, *Elements*, Books VII to IX (about 300 BC); T. L. Heath's translation with commentary (1908).
- G. H. Hardy and E. M. Wright, *An Introduction to the Theory of Numbers*, 6th edition (revised by D. R. Heath-Brown
  and J. H. Silverman), 2008. Chapter 1 and chapter 9 (decimals).
- Harold Davenport, *The Higher Arithmetic*, 8th edition, 2008. The best short introduction; chapter 1.
- Joseph H. Silverman, *A Friendly Introduction to Number Theory*, 4th edition, 2012.
- Ivan Niven, Herbert S. Zuckerman and Hugh L. Montgomery, *An Introduction to the Theory of Numbers*, 5th edition,
  1991.
- Richard K. Guy, *Unsolved Problems in Number Theory*, 3rd edition, 2004. The open questions of section 1.1, and
  hundreds more.
- On this site: the Topics lessons [Divisibility by 2, 5 and 10](../../topics/number-theory/level-3/01-tests-2-5-10.md),
  [Divisibility by 4 and 8](../../topics/number-theory/level-3/02-tests-4-and-8.md),
  [Odd and even sums](../../topics/number-theory/level-2/01-odd-even-sums.md),
  [Remainders as a new kind of number](../../topics/number-theory/level-5/01-remainders.md) and
  [Famous open problems](../../topics/number-theory/level-8/05-open-problems.md); the U of T guide
  [MAT137 Unit 1: Logic, Sets & Proofs](../../uoft/MAT137/unit01.md) for proof techniques; and
  [Algebra, chapter 8](../algebra/08-Sequences-Series-and-Induction.md) for induction.
