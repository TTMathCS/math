# 18. p-adic numbers

*Add up $1 + 2 + 4 + 8 + 16 + \cdots$ and the sum runs off to infinity. But stop after $n$ terms and you have
$2^n - 1$, which is $-1$ plus a number divisible by a huge power of 2. If "divisible by a huge power of 2" counted as
"tiny", the sum would close in on $-1$. This chapter takes that idea seriously. For each prime $p$ it builds a new way to
measure the size of a number, finds that the rational numbers have holes in it, fills the holes, and gets a new number
system, the $p$-adic numbers $\mathbb{Q}_p$. There you can solve equations one digit at a time (Hensel's lemma), you meet
the only possible ways of measuring size on $\mathbb{Q}$ (Ostrowski's theorem), and you learn to ask the question that
drives much of modern number theory: if an equation can be solved modulo every power of every prime, and in the real
numbers, can it be solved in the rationals?*

!!! abstract "In this chapter"
    **You will learn:**

    - the $p$-adic valuation and absolute value, the strong triangle inequality, and why every $p$-adic triangle is isosceles
    - the product formula that ties all the absolute values of a rational number together
    - how $\mathbb{Q}_p$ is built from $\mathbb{Q}$ as the reals are, and how to write $p$-adic numbers as digit strings that run to the left
    - Hensel's lemma, with a full proof, and how to use it to find square roots and roots of unity in $\mathbb{Q}_p$
    - Ostrowski's theorem: the real absolute value and the $p$-adic ones are the only ones on $\mathbb{Q}$
    - the local-global principle, the Hasse-Minkowski theorem for quadratic forms, and equations where it fails

    **You need:** congruences and inverses mod $n$ ([Chapter 4](04-Congruences.md)), quadratic residues
    ([Chapter 8](08-Quadratic-Residues-and-Reciprocity.md)) and some comfort with limits of sequences. Rings of
    integers ([Chapter 17](17-Algebraic-Number-Theory.md)) appear only in remarks. For limits and Cauchy sequences, the
    U of T guide [MAT159 Unit 3: Sequences and Cauchy sequences](../../uoft/MAT159H1/unit03.md) is a good refresher.

    **Levels:** 18.1 is intermediate (only divisibility); 18.2 and 18.3 are advanced, with full proofs; 18.4 and 18.5
    are expert, with honest statements and the proofs that fit.

## 18.1 A new size for numbers

*Level: intermediate.* When are two whole numbers "close"? On a ruler, 1000 and 1001 are close and 1 and 1001 are far
apart. But for a number theorist, 1 and 1001 have something in common: $1001 - 1 = 1000 = 2^3 \cdot 5^3$, so they agree
modulo 8 and modulo 125. And $1$ and $1 + 5^{20}$ agree modulo $5^{20}$: as far as any question about remainders mod 5,
25, 125, ..., $5^{20}$ is concerned, they are the same number. The idea of this chapter is to turn "agree modulo a high
power of $p$" into "are close together", and see what follows.

### The p-adic valuation

Fix a prime $p$. Every nonzero rational number $x$ can be written as

$$
x = p^k \cdot \frac{a}{b},
$$

where $k$ is an integer (possibly negative) and $a$, $b$ are integers not divisible by $p$. This is just unique
factorization ([Chapter 2](02-Primes-and-Unique-Factorization.md)): pull every factor $p$ out of the top and the bottom.
The exponent $k$ is the **$p$-adic valuation** of $x$, written $v_p(x)$. It counts how many times $p$ divides $x$, with
negative counts for $p$ in the denominator. By convention $v_p(0) = +\infty$ (zero is divisible by every power of $p$).

Examples with $p = 2$: $v_2(12) = 2$ because $12 = 2^2 \cdot 3$; $v_2(3/8) = -3$; $v_2(5) = 0$. With $p = 3$:
$v_3(12) = 1$, $v_3(1/9) = -2$, $v_3(-81/4) = 4$.

Two rules make $v_p$ useful. For all rational $x$ and $y$:

1. $v_p(xy) = v_p(x) + v_p(y)$;
2. $v_p(x + y) \ge \min(v_p(x), v_p(y))$.

*Proof.* Write $x = p^k a/b$ and $y = p^m c/d$ with $a, b, c, d$ prime to $p$. Then $xy = p^{k+m} (ac)/(bd)$, and $ac$
and $bd$ are prime to $p$ because $p$ is prime (Euclid's lemma), so rule 1 holds. For rule 2, say $k \le m$. Then

$$
x + y = p^k \left( \frac{a}{b} + p^{m-k} \frac{c}{d} \right) = p^k \cdot \frac{ad + p^{m-k} bc}{bd}.
$$

The denominator $bd$ is prime to $p$, and the numerator is an integer, so $v_p(x+y) \ge k$. If one of $x$, $y$ is 0 the
rules are clear. $\square$

Notice that rule 2 can be an inequality: $v_3(1) = v_3(2) = 0$ but $v_3(1 + 2) = 1$. But if $k < m$ strictly, the
numerator $ad + p^{m-k}bc$ is $ad$ plus a multiple of $p$, so it is prime to $p$, and then $v_p(x + y) = k$ exactly.

### The p-adic absolute value

Now turn the valuation into a size. The **$p$-adic absolute value** of $x$ is

$$
|x|_p = p^{-v_p(x)}, \qquad |0|_p = 0.
$$

The more often $p$ divides $x$, the *smaller* $|x|_p$ is. So $|12|_2 = 2^{-2} = 1/4$, $|1/9|_3 = 3^2 = 9$, $|5|_2 = 1$,
and $|2^{100}|_2 = 2^{-100}$, a very small number. In this world the powers $p, p^2, p^3, \ldots$ shrink to 0, and the
distance between $x$ and $y$ is $|x - y|_p$: so $1$ and $1 + 5^{20}$ are at 5-adic distance $5^{-20}$.

The two rules for $v_p$ become, for $|\cdot|_p$:

- $|xy|_p = |x|_p \, |y|_p$ (multiplicative);
- $|x + y|_p \le \max(|x|_p, |y|_p)$, the **strong triangle inequality**, also called the **ultrametric inequality**.

The second is stronger than the usual triangle inequality $|x + y| \le |x| + |y|$, because the larger of two
non-negative numbers is at most their sum. An absolute value obeying it is called **non-archimedean**. The name comes
from the archimedean property of the reals: however small $\varepsilon > 0$ is, adding it to itself enough times
exceeds any bound. In $\mathbb{Q}$ with $|\cdot|_p$, adding 1 to itself never gives anything bigger than 1:
$|n|_p \le 1$ for every integer $n$.

**Worked example.** Take $x = -12/35$. Then $-12/35 = -2^2 \cdot 3 / (5 \cdot 7)$, so

$$
|x|_2 = \tfrac14,\quad |x|_3 = \tfrac13,\quad |x|_5 = 5,\quad |x|_7 = 7,\quad |x|_p = 1 \text{ for every other } p,
$$

and the ordinary absolute value is $|x|_\infty = 12/35$. Multiply them all:
$\tfrac{12}{35} \cdot \tfrac14 \cdot \tfrac13 \cdot 5 \cdot 7 = 1$.

That is no accident. Writing $|\cdot|_\infty$ for the ordinary absolute value, we have the

**Product formula.** For every nonzero rational $x$,

$$
|x|_\infty \prod_{p} |x|_p = 1,
$$

where the product is over all primes, and only finitely many factors differ from 1.

*Proof.* Both sides are multiplicative in $x$, and both are 1 for $x = -1$ (since $|-1|_p = 1$ for every $p$). So it
is enough to check $x = q$ a prime, since every nonzero rational is $\pm$ a product of primes and their inverses. For a
prime $q$: $|q|_\infty = q$, $|q|_q = 1/q$, and $|q|_p = 1$ for $p \ne q$. The product is $q \cdot (1/q) = 1$.
$\square$

The product formula says that the real size and all the $p$-adic sizes of a rational number are not independent: if a
rational number is small in some of them, it must be large in others. It is one of the reasons number theorists speak
of the reals as "the prime at infinity", one place among the others.

### Strange geometry: every triangle is isosceles

The strong triangle inequality makes $p$-adic geometry feel odd at first.

**Fact 1.** If $|x|_p \ne |y|_p$, then $|x + y|_p = \max(|x|_p, |y|_p)$.

*Proof.* Say $|x|_p > |y|_p$. Then $|x + y|_p \le |x|_p$. Also $x = (x + y) - y$, so
$|x|_p \le \max(|x+y|_p, |y|_p)$. The maximum cannot be $|y|_p$, which is smaller than $|x|_p$, so it is $|x + y|_p$,
and $|x|_p \le |x + y|_p$. Both inequalities give equality. $\square$

(This is the absolute value form of what we saw for $v_p$: when $k < m$, $v_p(x + y) = k$.)

**Fact 2: every triangle is isosceles.** Take three points $x$, $y$, $z$. The sides are $a = x - y$, $b = y - z$, and
$a + b = x - z$. If $|a|_p \ne |b|_p$, Fact 1 says $|a + b|_p$ equals the larger of them. So the two longest sides
of the triangle are always equal.

**Fact 3: every point of a disc is its centre.** The closed **disc** (or **ball**) of radius $r$ around $a$ is
$B(a, r) = \{x : |x - a|_p \le r\}$. If $b$ is in $B(a, r)$ then $B(b, r) = B(a, r)$.

*Proof.* If $|x - a|_p \le r$, then $|x - b|_p = |(x - a) + (a - b)|_p \le \max(|x-a|_p, |a-b|_p) \le r$, so
$B(a,r) \subseteq B(b,r)$. Swap $a$ and $b$ for the other inclusion. $\square$

A consequence: two $p$-adic discs are either disjoint or one is inside the other. They never partly overlap. That is
exactly how the residue classes behave: the integers that are $\equiv 4 \pmod 9$ all lie in the class $\equiv 1 \pmod 3$,
and the classes $1 \bmod 3$ and $2 \bmod 3$ do not meet. The disc $B(4, 1/9)$ in the integers is the class
$4 + 9\mathbb{Z}$, and it sits inside $B(1, 1/3) = 1 + 3\mathbb{Z}$.

**Check.** $|10 - 1|_3 = |9|_3 = 1/9$, $|10 - 4|_3 = |6|_3 = 1/3$, $|4 - 1|_3 = |3|_3 = 1/3$. Two sides of length
$1/3$, one shorter: isosceles, as promised.

## 18.2 The p-adic numbers $\mathbb{Q}_p$

*Level: advanced.* The rational numbers have holes for the ordinary absolute value: the decimals
$1, 1.4, 1.41, 1.414, \ldots$ get closer and closer together but have no rational limit, because $\sqrt 2$ is
irrational. Filling those holes gives the real numbers $\mathbb{R}$. Exactly the same thing happens for $|\cdot|_p$, and
filling the holes gives $\mathbb{Q}_p$.

### A sequence with no rational limit

Look for integers $x$ with $x^2 \equiv -1$ modulo higher and higher powers of 5. Modulo 5, $x = 2$ works:
$2^2 + 1 = 5$. Modulo 25, try $x = 2 + 5t$: we need $(2 + 5t)^2 + 1 = 5 + 20t + 25t^2 \equiv 0 \pmod{25}$, that is
$5 + 20t \equiv 0 \pmod{25}$, that is $1 + 4t \equiv 0 \pmod 5$, so $t = 1$ and $x = 7$. Check: $49 + 1 = 50$. Going on
the same way gives

$$
x_1 = 2,\quad x_2 = 7,\quad x_3 = 57,\quad x_4 = 182,\quad x_5 = 2057, \ldots
$$

with $x_n^2 + 1$ divisible by $5^n$ and $x_{n+1} \equiv x_n \pmod{5^n}$. (Check: $57^2 + 1 = 3250 = 2 \cdot 5^3 \cdot 13$
and $182^2 + 1 = 33125 = 5^4 \cdot 53$.) So $|x_{n+1} - x_n|_5 \le 5^{-n}$: the terms get 5-adically close together. In
the language of analysis, the sequence is **Cauchy**: for every $\varepsilon > 0$ there is an $N$ with
$|x_m - x_n|_5 < \varepsilon$ for all $m, n > N$. (For $m > n$, the strong triangle inequality gives
$|x_m - x_n|_5 \le \max_{n \le k < m} |x_{k+1} - x_k|_5 \le 5^{-n}$.)

If the sequence had a rational limit $L$, then $|x_n^2 - L^2|_5 \to 0$, and since $|x_n^2 + 1|_5 \le 5^{-n} \to 0$,
we would get $L^2 = -1$. No rational number squares to $-1$. So $\mathbb{Q}$ has a hole for $|\cdot|_5$ exactly
where "$\sqrt{-1}$" should be.

### Completing $\mathbb{Q}$

The construction is the one that builds $\mathbb{R}$ from Cauchy sequences, with $|\cdot|_p$ in place of $|\cdot|$:

- A point of $\mathbb{Q}_p$ is a Cauchy sequence of rationals for $|\cdot|_p$, where two sequences count as the same
  point if their difference tends to 0.
- Add and multiply sequences term by term. The rationals sit inside as constant sequences.
- The absolute value extends: $|(x_n)|_p = \lim |x_n|_p$. (This limit exists, and in fact $|x_n|_p$ is eventually
  constant for a sequence not tending to 0, by Fact 1 of 18.1.)

One checks, as for the reals, that this gives a field $\mathbb{Q}_p$ with an absolute value that still obeys the strong
triangle inequality, in which $\mathbb{Q}$ is **dense** (every point is a limit of rationals) and which is **complete**
(every Cauchy sequence converges). It is the **completion** of $\mathbb{Q}$ for $|\cdot|_p$. The proofs are word for
word those for $\mathbb{R}$; Gouvêa's book (see Further reading) writes them out.

One new feature: the values of $|\cdot|_p$ on $\mathbb{Q}_p$ are still just the powers $p^k$ and 0, since the limit of
the eventually constant sequence $|x_n|_p$ is a power of $p$. So the valuation $v_p$ extends to $\mathbb{Q}_p$ too.

### The p-adic integers

The **$p$-adic integers** are

$$
\mathbb{Z}_p = \{ x \in \mathbb{Q}_p : |x|_p \le 1 \}.
$$

By the strong triangle inequality, sums and products of elements of size at most 1 still have size at most 1, so
$\mathbb{Z}_p$ is a ring. It contains $\mathbb{Z}$, and also every rational $a/b$ with $p \nmid b$, such as $1/3$ in
$\mathbb{Z}_2$. Its **units** (elements with an inverse in $\mathbb{Z}_p$) are the $x$ with $|x|_p = 1$: if $|x|_p = 1$
then $|1/x|_p = 1$ too. Every nonzero $x \in \mathbb{Q}_p$ is uniquely $x = p^k u$ with $k = v_p(x)$ and $u$ a unit.

### Digits that run to the left

Every real number has a decimal expansion, with finitely many digits to the left of the point and possibly infinitely
many to the right. $p$-adic numbers are the other way round.

**Theorem (p-adic expansion).** Every $x \in \mathbb{Z}_p$ can be written in exactly one way as a convergent series

$$
x = a_0 + a_1 p + a_2 p^2 + a_3 p^3 + \cdots, \qquad a_i \in \{0, 1, \ldots, p-1\}.
$$

Every $x \in \mathbb{Q}_p$ is $p^{-k}$ times such a series, so it has finitely many digits after the "point".

*Proof.* First a key fact: every $x \in \mathbb{Z}_p$ is congruent modulo $p^n$ to exactly one integer in
$\{0, 1, \ldots, p^n - 1\}$, meaning $|x - m|_p \le p^{-n}$. Existence: $x$ is a limit of rationals, so some rational
$a/b$ has $|x - a/b|_p \le p^{-n}$; then $|a/b|_p \le 1$, so $p \nmid b$, and $b$ has an inverse $b'$ modulo $p^n$;
take $m \equiv a b' \pmod {p^n}$. Then
$a/b - m = (a - bm)/b$ and $a - bm \equiv a - b a b' \equiv 0 \pmod{p^n}$, so $|a/b - m|_p \le p^{-n}$, and by the
strong triangle inequality $|x - m|_p \le p^{-n}$. Uniqueness: two such integers differ by a multiple of $p^n$ less than
$p^n$ in size, so they are equal.

Now write $m_n$ for the integer in $[0, p^n)$ congruent to $x$ modulo $p^n$. Then $m_{n+1} \equiv m_n \pmod{p^n}$
(both are congruent to $x$), so $m_{n+1} = m_n + a_n p^n$ for a unique digit $a_n \in \{0, \ldots, p-1\}$. So
$m_n = a_0 + a_1 p + \cdots + a_{n-1}p^{n-1}$ and $|x - m_n|_p \le p^{-n} \to 0$: the series converges to $x$. Different
digit strings give different $m_n$ for some $n$, so different limits. For $x \in \mathbb{Q}_p$ with $v_p(x) = -k < 0$,
apply this to $p^k x \in \mathbb{Z}_p$. $\square$

In $\mathbb{Q}_p$ a series converges as soon as its terms tend to 0. (*Proof:* the partial sums $s_n$ have
$|s_m - s_n|_p \le \max_{n < k \le m} |a_k|_p$ by the strong triangle inequality, so they form a Cauchy sequence, and
$\mathbb{Q}_p$ is complete.) Nothing like this is true in $\mathbb{R}$, where $\sum 1/n$ diverges although $1/n \to 0$.
This is why $p$-adic series are so pleasant.

We write $p$-adic numbers like ordinary numerals, digits read from right to left, with the dots on the left:
$x = \ldots a_3 a_2 a_1 a_0$ in base $p$.

**Example: $-1$.** In $\mathbb{Q}_5$,
$4 + 4\cdot 5 + 4 \cdot 25 + \cdots = 4(1 + 5 + 25 + \cdots) = 4 \cdot \frac{1}{1 - 5} = -1$.
(The geometric series $\sum p^n$ converges in $\mathbb{Q}_p$ because $|p^n|_p \to 0$, and its sum is $1/(1-p)$ by the
usual telescoping: $(1-p)(1 + p + \cdots + p^{n-1}) = 1 - p^n \to 1$.) So $-1 = \ldots 44444$ in base 5. Add 1 and every
digit carries: $\ldots 44444 + 1 = \ldots 00000$. This is the same as the odometer of a car rolling over.

And the opening question: in $\mathbb{Q}_2$, $1 + 2 + 4 + 8 + \cdots = 1/(1 - 2) = -1$. The partial sums $2^n - 1$ really
do converge to $-1$, because $|(2^n - 1) - (-1)|_2 = |2^n|_2 = 2^{-n}$.

**Example: $1/3$ in $\mathbb{Q}_5$.** We need the digits of $m_n \equiv 3^{-1} \pmod{5^n}$. Modulo 5, $3^{-1} = 2$ (since
$3 \cdot 2 = 6 \equiv 1$). Modulo 25 it is 17 ($3 \cdot 17 = 51$), and $17 = 2 + 3 \cdot 5$. Modulo 125 it is 42
($3 \cdot 42 = 126$), and $42 = 2 + 3\cdot 5 + 1 \cdot 25$. Continuing,

$$
\tfrac13 = \ldots 1313132 \text{ (base 5)}.
$$

**Check.** Multiply $\ldots 1313132$ by 3 by hand, from the right: $3 \cdot 2 = 6 = 1 + 1 \cdot 5$, write 1 carry 1;
$3 \cdot 3 + 1 = 10 = 0 + 2 \cdot 5$, write 0 carry 2; $3 \cdot 1 + 2 = 5$, write 0 carry 1; $3 \cdot 3 + 1 = 10$,
write 0 carry 2; and the pattern repeats forever. Result: $\ldots 0001 = 1$.

**Example: $1/3$ and $-1/3$ in $\mathbb{Q}_2$.** Similarly $1/3 = \ldots 0101011$ and $-1/3 = \ldots 0101010101$ in base 2.
Check the second: $\ldots 010101 = 1 \cdot 1 + 0 \cdot 2 + 1 \cdot 4 + \cdots = 1 + 4 + 16 + \cdots = 1/(1-4) = -1/3$.

As with decimals, **a $p$-adic number is rational exactly when its digits are eventually periodic.** One direction is
the geometric series trick we just used: a periodic tail is a rational multiple of $1/(1 - p^r)$. The other direction
comes from the long division that produces the digits: for $a/b$ with $p \nmid b$, the digits are produced by a process
whose state is a remainder that, after the first few steps, can only take finitely many values, so it must repeat.

Arithmetic with these digit strings is ordinary school arithmetic with carries, done right to left, never stopping.
That is how a computer handles $\mathbb{Z}_p$ in practice: it keeps the last $n$ digits, which means it computes in
$\mathbb{Z}/p^n\mathbb{Z}$. The map $\mathbb{Z}_p \to \mathbb{Z}/p^n\mathbb{Z}$ that keeps the last $n$ digits is a
ring homomorphism, and a $p$-adic integer is the same thing as a list of residues $m_1, m_2, m_3, \ldots$ modulo
$p, p^2, p^3, \ldots$ that are compatible ($m_{n+1} \equiv m_n \bmod p^n$). Algebraists write this as
$\mathbb{Z}_p = \varprojlim \mathbb{Z}/p^n\mathbb{Z}$, the **inverse limit**.

### The tree of p-adic integers

Since a $p$-adic integer is a path of choices, one digit at a time, $\mathbb{Z}_p$ looks like an infinite tree. The
drawing shows the first two levels for $p = 3$: the root is all of $\mathbb{Z}_3$, which splits into three discs (the
classes mod 3), each of which splits into three smaller discs (the classes mod 9), and so on forever. A 3-adic integer
is an infinite path down the tree. The orange path is $-1 = \ldots 222$, which goes to $2 \bmod 3$, then $8 \bmod 9$,
then $26 \bmod 27$, always taking the last branch.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 480 250" role="img" aria-label="A tree. The root, labelled Z3, has three children labelled 0, 1 and 2 mod 3. Each child has three children, the classes mod 9: 0, 3, 6 under 0; 1, 4, 7 under 1; 2, 5, 8 under 2. The path from the root through 2 mod 3 to 8 mod 9 is drawn in orange.">
  <g stroke="currentColor" stroke-width="1.2" fill="none">
    <line x1="240" y1="38" x2="90" y2="102"/>
    <line x1="240" y1="38" x2="240" y2="102"/>
    <line x1="90" y1="118" x2="40" y2="192"/>
    <line x1="90" y1="118" x2="90" y2="192"/>
    <line x1="90" y1="118" x2="140" y2="192"/>
    <line x1="240" y1="118" x2="190" y2="192"/>
    <line x1="240" y1="118" x2="240" y2="192"/>
    <line x1="240" y1="118" x2="290" y2="192"/>
    <line x1="390" y1="118" x2="340" y2="192"/>
    <line x1="390" y1="118" x2="390" y2="192"/>
  </g>
  <g stroke="#eea66f" stroke-width="3" fill="none">
    <line x1="240" y1="38" x2="390" y2="102"/>
    <line x1="390" y1="118" x2="440" y2="192"/>
  </g>
  <circle cx="240" cy="30" r="8" fill="#9cc9ea" stroke="currentColor"/>
  <g fill="#7ccf9a" stroke="currentColor">
    <circle cx="90" cy="110" r="8"/>
    <circle cx="240" cy="110" r="8"/>
  </g>
  <circle cx="390" cy="110" r="8" fill="#eea66f" stroke="currentColor"/>
  <g fill="#9cc9ea" stroke="currentColor">
    <circle cx="40" cy="200" r="7"/><circle cx="90" cy="200" r="7"/><circle cx="140" cy="200" r="7"/>
    <circle cx="190" cy="200" r="7"/><circle cx="240" cy="200" r="7"/><circle cx="290" cy="200" r="7"/>
    <circle cx="340" cy="200" r="7"/><circle cx="390" cy="200" r="7"/>
  </g>
  <circle cx="440" cy="200" r="7" fill="#eea66f" stroke="currentColor"/>
  <g fill="currentColor" font-size="13" text-anchor="middle">
    <text x="272" y="34">Z3</text>
    <text x="134" y="114">0 mod 3</text>
    <text x="284" y="114">1 mod 3</text>
    <text x="434" y="114">2 mod 3</text>
    <text x="40" y="226">0</text><text x="90" y="226">3</text><text x="140" y="226">6</text>
    <text x="190" y="226">1</text><text x="240" y="226">4</text><text x="290" y="226">7</text>
    <text x="340" y="226">2</text><text x="390" y="226">5</text><text x="440" y="226">8</text>
    <text x="240" y="246">classes mod 9 (discs of radius 1/9)</text>
  </g>
</svg>
</div>

The picture explains Fact 3 of 18.1: a disc is a whole subtree, and two subtrees are either nested or disjoint. It also
suggests two facts we state without proof: $\mathbb{Z}_p$ is **compact** (every sequence has a convergent subsequence:
some branch at the first level contains infinitely many terms, then some branch below it, and so on), and it is
**totally disconnected** (any two different points can be separated into different discs).

**Try it in Python.** The last $n$ digits of a rational $a/b$ with $p \nmid b$:

```python
def padic_digits(a, b, p, n):
    m = a * pow(b, -1, p**n) % p**n       # a/b modulo p^n
    return [(m // p**i) % p for i in range(n)]   # a_0, a_1, ..., a_(n-1)

print(padic_digits(1, 3, 5, 8))    # [2, 3, 1, 3, 1, 3, 1, 3]  so 1/3 = ...31313132 in base 5
print(padic_digits(-1, 3, 2, 8))   # [1, 0, 1, 0, 1, 0, 1, 0]  so -1/3 = ...01010101 in base 2
```

## 18.3 Hensel's lemma

*Level: advanced.* In 18.2 we built $\sqrt{-1}$ in $\mathbb{Q}_5$ by hand, one digit at a time. Every step was the same:
we had a root modulo $5^n$, wrote the next candidate as $x + t \cdot 5^n$, and found that the condition on $t$ was a
*linear* congruence modulo 5. Hensel's lemma says this always works when the derivative does not vanish modulo $p$.

For a polynomial $f(x) = c_0 + c_1 x + \cdots + c_d x^d$, its **derivative** is the polynomial
$f'(x) = c_1 + 2c_2 x + \cdots + d c_d x^{d-1}$, defined by this formula with no limits needed.

**Hensel's lemma.** Let $f$ be a polynomial with coefficients in $\mathbb{Z}_p$, and let $a \in \mathbb{Z}_p$ with

$$
f(a) \equiv 0 \pmod p \quad \text{and} \quad f'(a) \not\equiv 0 \pmod p.
$$

Then there is exactly one $\alpha \in \mathbb{Z}_p$ with $f(\alpha) = 0$ and $\alpha \equiv a \pmod p$.

(Here $x \equiv y \pmod{p^n}$ for $p$-adic integers means $|x - y|_p \le p^{-n}$, that is, $x - y \in p^n\mathbb{Z}_p$.)

*Proof.* We build $a_1 = a, a_2, a_3, \ldots$ with $f(a_n) \equiv 0 \pmod{p^n}$ and $a_{n+1} \equiv a_n \pmod{p^n}$,
and show each $a_{n+1}$ is determined modulo $p^{n+1}$.

The tool is Taylor's formula for polynomials, which is pure algebra: expanding $f(x + h)$ in powers of $h$ gives

$$
f(x + h) = f(x) + f'(x)\, h + h^2 \, g(x, h)
$$

for some polynomial $g$ with coefficients in $\mathbb{Z}_p$. (Each term $c_k (x + h)^k$ expands by the binomial theorem
to $c_k x^k + k c_k x^{k-1} h + h^2 \cdot (\text{integer combination of } x \text{ and } h)$.)

Suppose $f(a_n) \equiv 0 \pmod{p^n}$, so $f(a_n) = p^n c$ with $c \in \mathbb{Z}_p$. Try $a_{n+1} = a_n + t p^n$ with
$t \in \mathbb{Z}_p$. Then

$$
f(a_n + tp^n) = p^n c + f'(a_n)\, t p^n + t^2 p^{2n} g = p^n \big( c + f'(a_n) t \big) + p^{2n}(\ldots).
$$

Since $2n \ge n + 1$, this is $\equiv 0 \pmod{p^{n+1}}$ exactly when $c + f'(a_n) t \equiv 0 \pmod p$. Now
$a_n \equiv a \pmod p$, so $f'(a_n) \equiv f'(a) \not\equiv 0 \pmod p$ (a polynomial with $p$-adic integer coefficients
respects congruences). So $f'(a_n)$ is invertible modulo $p$, and the condition has exactly one solution
$t \equiv -c \, f'(a_n)^{-1} \pmod p$. This gives $a_{n+1}$, unique modulo $p^{n+1}$ among numbers $\equiv a_n
\pmod{p^n}$.

The sequence $(a_n)$ is Cauchy ($|a_{n+1} - a_n|_p \le p^{-n}$), so it converges to some $\alpha \in \mathbb{Z}_p$
(complete, and the disc $\mathbb{Z}_p$ is closed). Since $\alpha \equiv a_n \pmod{p^n}$, $f(\alpha) \equiv f(a_n)
\equiv 0 \pmod{p^n}$ for every $n$, so $|f(\alpha)|_p \le p^{-n}$ for all $n$, and $f(\alpha) = 0$.

Uniqueness: if $\beta \equiv a \pmod p$ is another root, then by induction $\beta \equiv a_n \pmod{p^n}$ for every $n$
(at each stage, $\beta$ reduced mod $p^{n+1}$ is a root mod $p^{n+1}$ lying over $a_n$, and that lift is unique). So
$\beta = \alpha$. $\square$

The proof is an algorithm, and it is Newton's method in disguise: $t p^n \equiv -f(a_n)/f'(a_n)$, so
$a_{n+1} \equiv a_n - f(a_n)/f'(a_n)$. If you use the full Newton step $a \mapsto a - f(a)/f'(a)$, computed modulo a
growing power of $p$, the number of correct digits **doubles** at each step, just as Newton's method doubles the
number of correct decimals in $\mathbb{R}$.

### Worked example: $\sqrt{-1}$ in $\mathbb{Q}_5$

$f(x) = x^2 + 1$, $f'(x) = 2x$. Start at $a = 2$: $f(2) = 5 \equiv 0$ and $f'(2) = 4 \not\equiv 0 \pmod 5$. Hensel's
lemma gives a unique root $\alpha \equiv 2 \pmod 5$ in $\mathbb{Z}_5$. Digit by digit we found $2, 7, 57, 182, 2057$ in
18.2, so

$$
\alpha = 2 + 1 \cdot 5 + 2 \cdot 5^2 + 1 \cdot 5^3 + 3 \cdot 5^4 + \cdots = \ldots 31212_5.
$$

Newton's method from $a = 2$, working modulo $25$, then $625$, then $390625$: $2 \mapsto 7 \mapsto 182 \mapsto 280182$,
the precision doubling each time. (Check: $182^2 + 1 = 33125 = 53 \cdot 625$.) Starting from $a = 3$ instead gives the
other root, which is $-\alpha$, since $-\alpha \equiv -2 \equiv 3 \pmod 5$. So $\mathbb{Q}_5$ contains $i$, and in fact
two square roots of $-1$, as it must.

This is a striking difference between $\mathbb{Q}_5$ and $\mathbb{R}$: the field $\mathbb{Q}_5$ contains a square root of
$-1$, so $\mathbb{Q}_5$ cannot be ordered the way $\mathbb{R}$ is. In $\mathbb{Q}_3$, by contrast, $x^2 + 1$ has no root
even modulo 3, so there is no $\sqrt{-1}$ in $\mathbb{Q}_3$. Whether $\sqrt{-1} \in \mathbb{Q}_p$ depends on whether $-1$
is a quadratic residue mod $p$, which by [Chapter 8](08-Quadratic-Residues-and-Reciprocity.md) is exactly when
$p \equiv 1 \pmod 4$.

### Squares in $\mathbb{Q}_p$

**Theorem.** Let $p$ be odd. A nonzero $x = p^k u \in \mathbb{Q}_p$ ($u$ a unit) is a square in $\mathbb{Q}_p$ if and
only if $k$ is even and $u \bmod p$ is a nonzero square modulo $p$.

*Proof.* If $x = y^2$ then $v_p(x) = 2 v_p(y)$ is even, and the unit part of $x$ is the square of the unit part of $y$,
so it is a square mod $p$. Conversely, if $k = 2j$ and $u \equiv b^2 \pmod p$ with $p \nmid b$, apply Hensel to
$f(x) = x^2 - u$ at $a = b$: $f(b) \equiv 0$ and $f'(b) = 2b \not\equiv 0 \pmod p$ because $p$ is odd. So $u = \beta^2$
and $x = (p^j \beta)^2$. $\square$

So for odd $p$, a nonzero $p$-adic number is a square according to two yes/no tests (even valuation? residue a square?),
and the group $\mathbb{Q}_p^\times / (\mathbb{Q}_p^\times)^2$ of "numbers up to squares" has exactly four elements,
represented by $1, n, p, np$ where $n$ is any non-residue mod $p$.

**Example.** Is 2 a square in $\mathbb{Q}_7$? Yes: $3^2 = 9 \equiv 2 \pmod 7$. Hensel lifts 3 to $3, 10, 108, 2166,
\ldots$ modulo $7, 49, 343, 2401$, so $\sqrt 2 = 3 + 1 \cdot 7 + 2 \cdot 49 + 6 \cdot 343 + \cdots$ in $\mathbb{Q}_7$.
(Check: $10^2 = 100 = 2 + 2 \cdot 49$.) In $\mathbb{Q}_5$, 2 is not a square, because the squares modulo 5 are 1 and 4.

### When $p = 2$, or when the derivative vanishes

For $p = 2$ Hensel's lemma as stated never applies to $x^2 - u$, since $f'(x) = 2x \equiv 0 \pmod 2$. Something more is
needed, and there is a stronger version.

**Hensel's lemma, strong form.** If $f$ has coefficients in $\mathbb{Z}_p$, $a \in \mathbb{Z}_p$, and

$$
|f(a)|_p < |f'(a)|_p^2,
$$

then there is a unique root $\alpha$ of $f$ with $|\alpha - a|_p < |f'(a)|_p$.

When $|f'(a)|_p = 1$ this is the version above. The proof is the same Newton iteration: with
$a_{n+1} = a_n - f(a_n)/f'(a_n)$, one shows from the Taylor formula that $|f'(a_n)|_p$ stays equal to $|f'(a)|_p$ and
that $|f(a_n)|_p / |f'(a)|_p^2$ is squared at each step, so it tends to 0 very fast. (Full details: Gouvêa's
chapter on Hensel's lemma, or Koblitz, Chapter I.)

**Squares in $\mathbb{Q}_2$.** An odd number squared is $\equiv 1 \pmod 8$ (since $(2m+1)^2 = 4m(m+1) + 1$ and
$m(m+1)$ is even). So a unit $u \in \mathbb{Z}_2$ can only be a square if $u \equiv 1 \pmod 8$. Conversely, if
$u \equiv 1 \pmod 8$, take $f(x) = x^2 - u$ and $a = 1$: $|f(1)|_2 = |1 - u|_2 \le 1/8$ and $|f'(1)|_2^2 = |2|_2^2 = 1/4$.
Since $1/8 < 1/4$, the strong form gives a root. So:

*A unit of $\mathbb{Z}_2$ is a square exactly when it is $\equiv 1 \pmod 8$.* For example 17 is a square in
$\mathbb{Q}_2$; modulo 64 its square roots are $9, 23, 41, 55$ (Check: $9^2 = 81 = 17 + 64$). And $3, 5, 7$ are not
squares in $\mathbb{Q}_2$, so $\mathbb{Q}_2^\times/(\mathbb{Q}_2^\times)^2$ has eight elements, represented by
$\pm 1, \pm 2, \pm 5, \pm 10$.

### Roots of unity

Apply Hensel to $f(x) = x^{p-1} - 1$. By Fermat's little theorem every $a \in \{1, \ldots, p-1\}$ is a root mod $p$, and
$f'(a) = (p-1)a^{p-2} \not\equiv 0 \pmod p$. So each lifts to a unique root in $\mathbb{Z}_p$:

**$\mathbb{Q}_p$ contains exactly $p - 1$ roots of $x^{p-1} = 1$, one in each nonzero class mod $p$.** These are the
**Teichmüller representatives**. In $\mathbb{Q}_5$ they are $1$, $-1$ and the two square roots of $-1$ found above
(modulo 25: $1, 7, 18, 24$). In $\mathbb{Q}_7$ there is a primitive cube root of unity, a root of $x^2 + x + 1$; the one
$\equiv 2 \pmod 7$ is $\equiv 30 \pmod{49}$. (Check: $30^2 + 30 + 1 = 931 = 19 \cdot 49$.)

## 18.4 Ostrowski's theorem

*Level: expert.* We now have infinitely many ways to measure a rational number: $|\cdot|_\infty$ and one $|\cdot|_p$
for each prime. Are there more? Ostrowski's theorem (1916) says no.

**Definition.** An **absolute value** on a field $K$ is a function $|\cdot| : K \to [0, \infty)$ with

1. $|x| = 0$ only for $x = 0$;
2. $|xy| = |x|\,|y|$;
3. $|x + y| \le |x| + |y|$.

The **trivial** absolute value has $|x| = 1$ for all $x \ne 0$. Two absolute values are **equivalent** if they define
the same notion of convergence; one can show this happens exactly when $|x|_1 = |x|_2^{\,c}$ for a constant $c > 0$.
For example $|\cdot|_\infty^{1/2}$ is an absolute value equivalent to $|\cdot|_\infty$, and $2^{-v_2(x)}$ and
$10^{-v_2(x)}$ are equivalent to each other (both give "2-adically close").

**Ostrowski's theorem.** Every nontrivial absolute value on $\mathbb{Q}$ is equivalent to the ordinary absolute value
$|\cdot|_\infty$ or to $|\cdot|_p$ for exactly one prime $p$.

The theorem splits along a dividing line that we can prove.

**Lemma.** An absolute value on $\mathbb{Q}$ is non-archimedean (obeys $|x + y| \le \max(|x|, |y|)$) if and only if
$|n| \le 1$ for every integer $n$.

*Proof.* If it is non-archimedean then $|n| = |1 + \cdots + 1| \le |1| = 1$. Conversely, suppose $|n| \le 1$ for all
integers. For $x, y$ and any $N \ge 1$, the binomial theorem gives

$$
|x + y|^N = \left| \sum_{k=0}^{N} \binom{N}{k} x^k y^{N-k} \right| \le \sum_{k=0}^N |x|^k |y|^{N-k} \le (N + 1) \max(|x|, |y|)^N.
$$

Take $N$-th roots: $|x + y| \le (N+1)^{1/N} \max(|x|, |y|)$. As $N \to \infty$, $(N+1)^{1/N} \to 1$. $\square$

**Proof of Ostrowski, non-archimedean case.** Suppose $|n| \le 1$ for all integers and $|\cdot|$ is nontrivial. Then
some integer has $|n| < 1$ (if every nonzero integer had $|n| = 1$, every rational would too, by multiplicativity).
The set $I = \{n \in \mathbb{Z} : |n| < 1\}$ is closed under addition (strong triangle inequality) and under
multiplication by any integer (since $|mn| = |m||n| \le |n|$), so it is an ideal of $\mathbb{Z}$, so $I = p\mathbb{Z}$ for
some $p \ge 2$. It is a prime ideal: if $|ab| < 1$ then $|a| < 1$ or $|b| < 1$. So $p$ is prime. Let
$c = -\log |p| / \log p > 0$, so that $|p| = p^{-c}$. Any integer $n = p^k m$ with $p \nmid m$ has $|m| = 1$ (as
$m \notin I$), so $|n| = p^{-ck} = |n|_p^{\,c}$. By multiplicativity this holds for all rationals. $\square$

**The archimedean case (idea).** If some integer has $|n| > 1$, one shows $|n| = n^{c}$ for a fixed
$0 < c \le 1$, so $|\cdot| = |\cdot|_\infty^{\,c}$. Ostrowski's trick: fix integers $m, n > 1$ and write $m^k$ in base
$n$. It has about $k \log m / \log n$ digits, each less than $n$, and the triangle inequality bounds $|m^k|$ by (number
of digits) $\times$ (largest digit size) $\times\, \max(1, |n|)^{\text{number of digits}}$. Taking $k$-th roots and
letting $k \to \infty$ kills the polynomial factors and leaves $|m|^{1/\log m} \le |n|^{1/\log n}$, and by symmetry the
two are equal. So $\log |n| / \log n$ is a constant $c$. The full proof, about two pages, is in Gouvêa's book and in
Koblitz, Chapter I.

**Why this matters.** The completions of $\mathbb{Q}$ are therefore exactly $\mathbb{R}$ and the $\mathbb{Q}_p$. Number
theorists call them the **places** of $\mathbb{Q}$, or its **local fields**, and they write $\mathbb{Q}_\infty = \mathbb{R}$.
The product formula of 18.1 is then a single relation linking all places at once. The same picture works for every
number field $K$ ([Chapter 17](17-Algebraic-Number-Theory.md)): its non-archimedean places correspond to the prime
ideals of its ring of integers, its archimedean places to its embeddings into $\mathbb{R}$ and $\mathbb{C}$, and a
product formula holds again. This analogy, between primes and "points", and between number fields and curves, runs
through the rest of the book.

## 18.5 Local-global: the Hasse-Minkowski theorem

*Level: expert.* Here is the main reason number theorists care about $\mathbb{Q}_p$. Suppose you want to know whether
an equation, say $3x^2 + 5y^2 = 7z^2$, has a solution in rational numbers other than $(0,0,0)$. That is a **global**
question (about $\mathbb{Q}$). Two kinds of easier **local** questions come first:

- Does it have a nonzero solution in $\mathbb{R}$? (A question of signs and inequalities.)
- Does it have a nonzero solution in $\mathbb{Q}_p$, for each prime $p$?

A rational solution is also a real solution and a $p$-adic solution for every $p$, since $\mathbb{Q}$ sits inside all of
these fields. So if any local test fails, there is no rational solution. The question is the converse.

### What a p-adic solution means in practice

For a homogeneous equation $F(x_1, \ldots, x_n) = 0$ with integer coefficients, a nonzero solution in $\mathbb{Q}_p$
can be scaled to one in $\mathbb{Z}_p$ with at least one coordinate a unit. Reducing modulo $p^k$ gives a solution
modulo $p^k$ that is not all divisible by $p$, for every $k$. Conversely, if such "primitive" solutions exist modulo
every $p^k$, compactness of $\mathbb{Z}_p$ (the tree argument of 18.2) produces a $p$-adic solution. So:

*Solvable in $\mathbb{Q}_p$ = solvable modulo every power of $p$, not all coordinates divisible by $p$.*

That turns the local questions into finite computations, helped by Hensel's lemma, which says a good solution
mod $p$ (one where some partial derivative is nonzero mod $p$) already lifts.

### A local obstruction

**Example.** $x^2 + y^2 = 3z^2$ has no solution in rationals except $(0, 0, 0)$.

*Proof (a 3-adic argument).* Suppose there is a nonzero solution in $\mathbb{Q}_3$; scale it so that $x, y, z \in
\mathbb{Z}_3$ and not all are divisible by 3. Modulo 3, squares are 0 or 1, so $x^2 + y^2 \equiv 0 \pmod 3$ forces
$x \equiv y \equiv 0 \pmod 3$. Then $9 \mid x^2 + y^2 = 3z^2$, so $3 \mid z^2$ and $3 \mid z$. All three are divisible
by 3, a contradiction. So there is no nonzero solution in $\mathbb{Q}_3$, hence none in $\mathbb{Q}$. $\square$

The equation has real solutions, so the obstruction is purely 3-adic. This is Fermat's method of descent
([Chapter 9](09-Diophantine-Equations.md)) dressed in $p$-adic clothes.

### The theorem

A **quadratic form** over $\mathbb{Q}$ is a homogeneous polynomial of degree 2,
$Q(x_1, \ldots, x_n) = \sum_{i \le j} c_{ij} x_i x_j$ with rational coefficients. By completing squares (or by the
diagonalisation of symmetric matrices, U of T guide [MAT247 Unit 10](../../uoft/MAT247H1/unit10.md)) it can be brought,
after a rational change of variables, to the form $a_1 x_1^2 + \cdots + a_n x_n^2$. It **represents zero** (is
**isotropic**) over a field $K$ if $Q(x) = 0$ for some nonzero $x$ with coordinates in $K$.

**Hasse-Minkowski theorem.** A quadratic form with rational coefficients represents zero over $\mathbb{Q}$ if and only if
it represents zero over $\mathbb{R}$ and over $\mathbb{Q}_p$ for every prime $p$.

For forms in three variables this goes back to Legendre's theorem (1785): if $a, b, c$ are nonzero, squarefree, pairwise
coprime integers, not all of the same sign, then $ax^2 + by^2 + cz^2 = 0$ has a nontrivial integer solution if and only if
$-bc$ is a square mod $|a|$, $-ca$ is a square mod $|b|$ and $-ab$ is a square mod $|c|$. Minkowski proved the
corresponding statements for forms with rational coefficients in the 1880s and 1890s in a different language, and
Helmut Hasse, in his doctoral thesis of 1921, gave the statement in terms of $\mathbb{Q}_p$ and proved it. The full proof
fills a chapter: Serre, *A Course in Arithmetic*, Chapter IV, is the classic account, using the Hilbert symbol and
quadratic reciprocity. Two consequences show its power.

**Only finitely many checks.** For a diagonal form $a_1 x_1^2 + \cdots + a_n x_n^2$ with integer coefficients, at every
odd prime $p$ dividing none of the $a_i$, a form in $n \ge 3$ variables always represents zero over $\mathbb{Q}_p$ (by the
Chevalley-Warning theorem there is a nonzero solution mod $p$, and Hensel lifts it). So only the primes dividing
$2 a_1 \cdots a_n$, and the real place, need checking. The infinitely many local conditions are really finitely many.

**Five variables.** Every quadratic form in five or more variables represents zero over every $\mathbb{Q}_p$ (Serre,
Chapter IV). With Hasse-Minkowski this gives **Meyer's theorem** (1884): a quadratic form over $\mathbb{Q}$ in at least
five variables that takes both positive and negative values represents zero over $\mathbb{Q}$.

**Worked example.** Does $3x^2 + 5y^2 = 7z^2$ have a nonzero rational solution? It is real-solvable (mixed signs). In
Legendre's form $3x^2 + 5y^2 - 7z^2 = 0$ with $a = 3$, $b = 5$, $c = -7$: we need $-bc = 35 \equiv 2$ to be a square
mod 3 (it is not: squares mod 3 are 0, 1). So there is no solution. A direct 3-adic check confirms it: modulo 3 the
equation reads $5y^2 \equiv 7z^2$, i.e. $2y^2 \equiv z^2 \pmod 3$; since 2 is not a square mod 3, $y \equiv z \equiv 0$,
then $9 \mid 3x^2$ so $3 \mid x$, and descent finishes it.

### When the principle fails

Hasse-Minkowski is about degree 2. For higher degree, local solvability everywhere does not imply global solvability.
Two examples, one easy and one famous.

**A one-variable example.** The equation

$$
(x^2 - 2)(x^2 - 17)(x^2 - 34) = 0
$$

has no rational root, since 2, 17 and 34 are not squares. But it has a root in $\mathbb{R}$ (namely $\sqrt 2$) and in
every $\mathbb{Q}_p$:

- for $p = 2$: $17 \equiv 1 \pmod 8$, so 17 is a square in $\mathbb{Q}_2$ (18.3);
- for $p = 17$: $2 \equiv 6^2 \pmod{17}$ ($36 = 2 + 34$), so 2 is a square in $\mathbb{Q}_{17}$;
- for any other odd prime $p$: 2 and 17 are units. If neither is a square mod $p$, their product 34 is a square mod $p$
  (the Legendre symbol is multiplicative, [Chapter 8](08-Quadratic-Residues-and-Reciprocity.md)). So one of 2, 17, 34
  is a nonzero square mod $p$, and Hensel lifts it.

So the equation is solvable everywhere locally and not globally. (It is not a quadratic form, so Hasse-Minkowski is not
contradicted.)

**Selmer's cubic.** In 1951 Ernst Selmer showed that

$$
3x^3 + 4y^3 + 5z^3 = 0
$$

has nonzero solutions in $\mathbb{R}$ and in every $\mathbb{Q}_p$, but none in $\mathbb{Q}$. The local part is a finite
check of the kind above (plus Hensel); the global part is genuinely hard and uses a descent on a related elliptic curve, the
curve $x^3 + y^3 + 60z^3 = 0$ (its Jacobian; $60 = 3 \cdot 4 \cdot 5$). A plane cubic curve with a rational
point is an elliptic curve, the subject of [Chapter 19](19-Elliptic-Curves.md), and Selmer's curve is a "twisted form" of
one. Its failure to have a point is measured by a group attached to that elliptic curve, the **Tate-Shafarevich group**
Ш, whose elements are, roughly, the curves of this kind that have points everywhere locally, with all the curves that have
a rational point counted as the zero element. Ш appears again in the Birch and Swinnerton-Dyer conjecture (19.6).

**Try it in Python.** No small solutions, but local solutions exist; here is the search for small nonzero integer
solutions, which finds nothing:

```python
sols = [(x, y, z) for x in range(-30, 31) for y in range(-30, 31) for z in range(-30, 31)
        if (x, y, z) != (0, 0, 0) and 3*x**3 + 4*y**3 + 5*z**3 == 0]
print(sols)    # []  (Selmer: there are none at all, of any size)
```

A finite search proves nothing by itself; Selmer's theorem is what says the list is empty forever.

### A short history

Kurt Hensel introduced $p$-adic numbers in a paper of 1897, thinking of them as analogues of power series expansions of
functions around a point: an integer is like a polynomial, its base $p$ digits like its Taylor coefficients at a point,
and $\mathbb{Z}_p$ like the ring of power series. That analogy between primes and points is the one we met at the end of
18.4. József Kürschák defined general absolute values (valuations) on fields in 1913, and Alexander Ostrowski classified
those on $\mathbb{Q}$ soon after. Hasse's 1921 thesis turned the $p$-adic numbers from a curiosity into a central tool by
proving the local-global theorem for quadratic forms. Today $p$-adic methods are everywhere in number theory, from
Wiles's proof of Fermat's last theorem ([Chapter 20](20-Modular-Forms-and-Fermats-Last-Theorem.md)) to $p$-adic
$L$-functions and $p$-adic Hodge theory.

## Check yourself

??? question "1. Compute $|600|_2$, $|600|_3$, $|600|_5$, $|600|_7$, and check the product formula for $600$."

    $600 = 2^3 \cdot 3 \cdot 5^2$. So $|600|_2 = 1/8$, $|600|_3 = 1/3$, $|600|_5 = 1/25$, $|600|_7 = 1$ (and
    $|600|_p = 1$ for all $p \ge 7$). Product formula: $|600|_\infty \cdot \frac18 \cdot \frac13 \cdot \frac1{25} =
    600/600 = 1$.

??? question "2. Show that $1 + 3 + 9 + 27 + \cdots = -\tfrac12$ in $\mathbb{Q}_3$."

    The partial sum is $s_n = 1 + 3 + \cdots + 3^{n-1} = (3^n - 1)/2$. Then $s_n - (-\tfrac12) = 3^n/2$, and
    $|3^n/2|_3 = 3^{-n} \to 0$. So $s_n \to -\tfrac12$ 3-adically. (Also the geometric series formula:
    $1/(1-3) = -1/2$.)

??? question "3. Write $-1$ and $\tfrac12$ as 3-adic digit strings."

    $-1 = 2(1 + 3 + 9 + \cdots) = 2 \cdot (-\tfrac12)$, so $-1 = \ldots 2222_3$. From question 2,
    $-\tfrac12 = \ldots 1111_3$, so $\tfrac12 = -\tfrac12 + 1 = \ldots 1112_3$. Check: $2 \cdot \ldots 1112_3$: $2 \cdot 2 = 4 = 1 + 1\cdot 3$,
    write 1 carry 1; $2 \cdot 1 + 1 = 3$, write 0 carry 1; and so on forever, giving $\ldots 0001 = 1$.

??? question "4. Is $2$ a square in $\mathbb{Q}_7$? In $\mathbb{Q}_5$? In $\mathbb{Q}_2$?"

    $\mathbb{Q}_7$: yes, $2 \equiv 3^2 \pmod 7$ and Hensel lifts (18.3). $\mathbb{Q}_5$: no, the nonzero squares mod 5 are
    1 and 4, and 2 is a unit. $\mathbb{Q}_2$: no, $v_2(2) = 1$ is odd, and a square has even valuation.

??? question "5. Find the square root of 6 in $\mathbb{Z}_5$ that is $\equiv 1 \pmod 5$, modulo $625$."

    $f(x) = x^2 - 6$, $f'(1) = 2 \not\equiv 0 \pmod 5$. Lift to mod 25: $x = 1 + 5t$, $x^2 = 1 + 10t + 25t^2$, need
    $1 + 10t \equiv 6 \pmod{25}$, i.e. $2t \equiv 1 \pmod 5$, $t = 3$, $x = 16$. Mod 125: $16^2 - 6 = 250 \equiv 0
    \pmod{125}$, so $x = 16$ already works (the next digit is 0). Mod 625: $x = 16 + 125s$,
    $x^2 - 6 = 250 + 4000s + \ldots \equiv 250 + 250 s \pmod{625}$, so need $2 + 2s \equiv 0 \pmod 5$, $s = 4$,
    $x = 516$. Check: $516^2 - 6 = 266250 = 426 \cdot 625$. So $\sqrt 6 \equiv 516 \pmod{625}$; its digits are
    $1, 3, 0, 4$, i.e. $\sqrt 6 = \ldots 4031_5$.

??? question "6. Show that $3$, $5$ and $7$ are not squares in $\mathbb{Q}_2$, but $-7$ is."

    They are units of $\mathbb{Z}_2$, and a unit is a square exactly when it is $\equiv 1 \pmod 8$ (18.3). $3, 5, 7$ are not
    $\equiv 1 \pmod 8$, but $-7 \equiv 1 \pmod 8$. So $\sqrt{-7} \in \mathbb{Q}_2$.

??? question "7. Prove that $\sum_{n \ge 0} n!$ converges in $\mathbb{Q}_p$ for every prime $p$."

    In $\mathbb{Q}_p$ a series converges when its terms tend to 0. For $n \ge kp$, the product $n!$ contains the $k$
    factors $p, 2p, \ldots, kp$, so $v_p(n!) \ge k$ and $|n!|_p \le p^{-k}$. Hence $|n!|_p \to 0$. (Whether this sum is
    rational is, as far as the author knows, an open question.)

??? question "8. Hensel needs $f'(a) \not\equiv 0$. Show what goes wrong for $f(x) = x^2 - 5$ in $\mathbb{Z}_2$ with $a = 1$."

    $f(1) = -4 \equiv 0 \pmod 2$, but $f'(1) = 2 \equiv 0 \pmod 2$, so the simple form does not apply. The strong form
    needs $|f(1)|_2 = 1/4 < |f'(1)|_2^2 = 1/4$, which fails too. And indeed there is no root: $5 \not\equiv 1 \pmod 8$, so
    5 is not a square in $\mathbb{Q}_2$. A root mod 2 (even mod 4) need not lift.

??? question "9. Find the primitive cube root of unity in $\mathbb{Z}_7$ that is $\equiv 4 \pmod 7$, modulo $49$."

    $f(x) = x^2 + x + 1$, $f(4) = 21 \equiv 0 \pmod 7$, $f'(4) = 9 \equiv 2 \not\equiv 0$. Put $x = 4 + 7t$:
    $f = 21 + 9 \cdot 7t + 49t^2 \equiv 7(3 + 9t) \pmod{49}$, need $3 + 2t \equiv 0 \pmod 7$, $t = 2$, $x = 18$. Check:
    $18^2 + 18 + 1 = 343 = 7 \cdot 49$. (The other root is $30$, and $18 + 30 = 48 \equiv -1$, as the sum of the roots of
    $x^2 + x + 1$ must be.)

??? question "10. In $\mathbb{Q}_p$, show that if $|x - y|_p < |y|_p$ then $|x|_p = |y|_p$."

    Write $x = y + (x - y)$. The two summands have different absolute values ($|x - y|_p < |y|_p$), so by Fact 1 of 18.1
    $|x|_p = \max(|y|_p, |x - y|_p) = |y|_p$. (This is why, in the completion, $|x_n|_p$ is eventually constant for a
    Cauchy sequence not tending to 0.)

??? question "11. Show that $x^2 + y^2 + z^2 = 7$ has no rational solution."

    Suppose $x = a/d$, $y = b/d$, $z = c/d$ with $d > 0$ minimal. Then $a^2 + b^2 + c^2 = 7d^2$. Squares mod 8 are
    $0, 1, 4$. If $d$ is odd, $7d^2 \equiv 7 \pmod 8$, but no three squares sum to $7$ mod 8 (the possible sums are
    $0, 1, \ldots, 6$). If $d$ is even, $7d^2 \equiv 0 \pmod 4$, which forces $a, b, c$ all even (an odd square is
    $1 \bmod 4$, and one or two or three of them would give a sum $\equiv 1, 2, 3 \pmod 4$). Then divide $a, b, c, d$ by 2,
    contradicting minimality. In $p$-adic language: the form $x^2 + y^2 + z^2 - 7w^2$ does not represent 0 over
    $\mathbb{Q}_2$. (This is Legendre's three-square theorem for the number 7, [Chapter 11](11-Sums-of-Squares.md).)

??? question "12. Use Legendre's criterion to decide whether $x^2 + y^2 = 5z^2$ and $x^2 + 2y^2 = 7z^2$ have nontrivial rational solutions; find one where it exists."

    $x^2 + y^2 - 5z^2$: $a = 1$, $b = 1$, $c = -5$. Conditions mod $|a| = 1$ and $|b| = 1$ are empty; mod 5 we need
    $-ab = -1$ to be a square mod 5: $-1 \equiv 4 = 2^2$. Yes. Solution: $(1, 2, 1)$, since $1 + 4 = 5$.
    $x^2 + 2y^2 - 7z^2$: $a = 1$, $b = 2$, $c = -7$. Mod 2: $-ca = 7 \equiv 1$, a square. Mod 7: $-ab = -2 \equiv 5$; squares
    mod 7 are $1, 2, 4$, so 5 is not a square. No nontrivial solution.

## What you learned

- For each prime $p$, $|x|_p = p^{-v_p(x)}$ measures how divisible $x$ is by $p$; it obeys the strong triangle
  inequality, so every triangle is isosceles and discs are nested or disjoint.
- The product formula $|x|_\infty \prod_p |x|_p = 1$ links all the sizes of a rational number.
- $\mathbb{Q}_p$ is the completion of $\mathbb{Q}$ for $|\cdot|_p$; its elements are digit strings running to the left,
  $\mathbb{Z}_p$ is a tree of residues mod $p^n$, and series converge when their terms tend to 0.
- Hensel's lemma lifts a simple root mod $p$ to a unique $p$-adic root; it decides which numbers are squares in
  $\mathbb{Q}_p$ and gives the $p - 1$ roots of unity.
- Ostrowski: $|\cdot|_\infty$ and the $|\cdot|_p$ are the only absolute values on $\mathbb{Q}$, up to equivalence.
- Hasse-Minkowski: a rational quadratic form represents 0 over $\mathbb{Q}$ exactly when it does over $\mathbb{R}$ and
  every $\mathbb{Q}_p$. For higher degree the local-global principle can fail, as Selmer's cubic $3x^3 + 4y^3 + 5z^3 = 0$
  shows.

**Next:** [Chapter 19](19-Elliptic-Curves.md), cubic curves whose rational points form a group, and the questions about
them that lead to the frontier.

## Further reading

- F. Q. Gouvêa, *p-adic Numbers: An Introduction*, 2nd ed., 1997 (the friendliest full account; Hensel's lemma and
  Ostrowski's theorem with all details).
- N. Koblitz, *p-adic Numbers, p-adic Analysis, and Zeta-Functions*, 2nd ed., 1984.
- J.-P. Serre, *A Course in Arithmetic*, 1973 (Chapters II to IV: $\mathbb{Q}_p$, the Hilbert symbol, and the
  Hasse-Minkowski theorem with complete proof).
- J. W. S. Cassels, *Local Fields*, 1986; and *Rational Quadratic Forms*, 1978.
- Z. I. Borevich and I. R. Shafarevich, *Number Theory*, 1966 (local methods and Diophantine equations).
- E. S. Selmer, "The Diophantine equation $ax^3 + by^3 + cz^3 = 0$", *Acta Mathematica* 85, 1951.
- On this site: the gentler lessons [Congruence](../../topics/number-theory/level-5/03-congruence.md) and
  [Quadratic residues](../../topics/number-theory/level-8/06-quadratic-residues.md) (Topics); U of T guides
  [MAT159 Unit 3: Sequences and Cauchy sequences](../../uoft/MAT159H1/unit03.md),
  [MAT158 Unit 2: Real numbers and least upper bounds](../../uoft/MAT158H1/unit02.md) and
  [MAT247 Unit 10: Rational form, bilinear and quadratic forms](../../uoft/MAT247H1/unit10.md); in the Algebra book,
  [Fields and extensions](../algebra/19-Fields-and-Extensions.md) and [Where algebra goes](../algebra/22-Where-Algebra-Goes.md).
