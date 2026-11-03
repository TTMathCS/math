# 3. GCD and Euclid's algorithm

*Two numbers share some divisors. The largest of them, the greatest common divisor, decides when a fraction is in
lowest terms, when two gears return to their starting position, which amounts two coins can pay and whether an
equation like $15x + 21y = 6$ has whole-number solutions. Factoring both numbers finds it, but factoring is slow. This
chapter gives a method that needs no factoring at all, Euclid's algorithm, proves it works and measures how fast it
is, then runs it backwards to get Bézout's identity, the tool that solves linear equations in integers. It ends with
an old puzzle: with coins of 3 and 5, what is the largest amount you cannot pay?*

!!! abstract "In this chapter"

    **You will learn:**

    - the gcd and lcm, and why $\gcd(a, b) \cdot \operatorname{lcm}(a, b) = ab$
    - Euclid's algorithm, why it works, and why it is fast (Lamé's theorem and the Fibonacci numbers)
    - Bézout's identity, and the extended algorithm that finds the coefficients
    - all integer solutions of $ax + by = c$, with proof
    - the coin problem for two coins: the largest unpayable amount is $ab - a - b$, and exactly half the amounts below
      it are unpayable

    **You need:** [Chapter 1](01-Divisibility.md) and [Chapter 2](02-Primes-and-Unique-Factorization.md). For a gentler
    version, see the Topics lessons
    [Greatest common divisor](../../topics/number-theory/level-4/01-greatest-common-divisor.md),
    [Least common multiple](../../topics/number-theory/level-4/02-least-common-multiple.md),
    [GCD × LCM = the product](../../topics/number-theory/level-4/03-gcd-times-lcm.md),
    [Euclid's algorithm](../../topics/number-theory/level-4/04-euclids-algorithm.md),
    [Bézout's identity](../../topics/number-theory/level-6/01-bezout-identity.md),
    [Linear Diophantine equations](../../topics/number-theory/level-6/02-linear-diophantine.md) and
    [The coin problem](../../topics/number-theory/level-6/03-coin-problem.md).

    **Levels:** 3.1 and 3.2 are beginner (the speed analysis in 3.2 is intermediate); 3.3 and 3.4 are intermediate;
    3.5 is intermediate to advanced.

## 3.1 The gcd and the lcm

### Definitions

**Definition.** Let $a$ and $b$ be integers, not both 0. The **greatest common divisor** $\gcd(a, b)$ is the largest
integer that divides both. If $\gcd(a, b) = 1$, we say $a$ and $b$ are **coprime** (or **relatively prime**).

The largest exists because 1 is a common divisor and every common divisor is at most $\max(|a|, |b|)$ (Theorem 1.1).
Some facts follow straight from the definition:

- $\gcd(a, b) = \gcd(b, a) = \gcd(|a|, |b|)$, since signs do not affect divisibility.
- $\gcd(a, 0) = |a|$ for $a \neq 0$, since every number divides 0.
- $\gcd(a, b) = |a|$ exactly when $a \mid b$.
- $\gcd(n, n + 1) = 1$: a common divisor divides the difference, 1.

**Definition.** For nonzero $a$ and $b$, the **least common multiple** $\operatorname{lcm}(a, b)$ is the smallest
positive integer that both divide.

**Example.** The divisors of 12 are $1, 2, 3, 4, 6, 12$ and of 18 are $1, 2, 3, 6, 9, 18$; the common ones are
$1, 2, 3, 6$, so $\gcd(12, 18) = 6$. Multiples of 12: $12, 24, 36, \dots$; of 18: $18, 36, \dots$; so
$\operatorname{lcm}(12, 18) = 36$. Notice $6 \cdot 36 = 216 = 12 \cdot 18$.

### Where they appear

- **Fractions.** $\frac{a}{b}$ is in lowest terms exactly when $\gcd(a, b) = 1$, and dividing top and bottom by
  $\gcd(a, b)$ reduces it in one step: $\frac{12}{18} = \frac{2}{3}$.
- **Adding fractions.** The least common denominator of $\frac{1}{12} + \frac{1}{18}$ is $\operatorname{lcm}(12, 18) = 36$.
- **Cycles.** Two gears with 12 and 18 teeth, meshed, return to their starting positions together after
  $\operatorname{lcm}(12, 18) = 36$ teeth have passed, that is after 3 turns of the small gear and 2 of the large.
  Two planets with periods $a$ and $b$ (in whole units) line up again after $\operatorname{lcm}(a, b)$ units; real
  periods are not whole numbers, which is one reason exact repetitions do not happen in the sky.

### Using prime factorizations

[Chapter 2](02-Primes-and-Unique-Factorization.md) showed: if $a = \prod p_i^{a_i}$ and $b = \prod p_i^{b_i}$, then

$$\gcd(a, b) = \prod p_i^{\min(a_i, b_i)}, \qquad \operatorname{lcm}(a, b) = \prod p_i^{\max(a_i, b_i)} .$$

**Theorem 3.1.** For positive integers $a$ and $b$, $\gcd(a, b) \cdot \operatorname{lcm}(a, b) = ab$.

*Proof.* For each prime, $\min(a_i, b_i) + \max(a_i, b_i) = a_i + b_i$, since one of the two is the min and the other
the max. Multiply over all primes. $\square$

**Example.** $84 = 2^2 \cdot 3 \cdot 7$ and $90 = 2 \cdot 3^2 \cdot 5$. The gcd takes the smaller power of each prime:
$2 \cdot 3 = 6$. The lcm takes the larger: $2^2 \cdot 3^2 \cdot 5 \cdot 7 = 1260$. *Check:*
$6 \cdot 1260 = 7560 = 84 \cdot 90$.

This is fine for small numbers. For numbers with hundreds of digits it is useless, because nobody knows how to
factor such numbers quickly (the security of RSA depends on it). We need a way to find the gcd without factoring.

## 3.2 Euclid's algorithm

### The key fact

**Lemma 3.2.** For integers $a, b$ and any integer $k$, $\gcd(a, b) = \gcd(b, a - kb)$. In particular, if $b > 0$,
$\gcd(a, b) = \gcd(b, a \bmod b)$.

*Proof.* We show the two pairs have exactly the same common divisors; then their greatest common divisors agree. If
$d \mid a$ and $d \mid b$, then $d \mid a - kb$ (Theorem 1.1). Conversely, if $d \mid b$ and $d \mid a - kb$, then
$d \mid (a - kb) + kb = a$. The second statement is the case $k = \lfloor a/b \rfloor$, where $a - kb = a \bmod b$.
$\square$

### The algorithm

To find $\gcd(a, b)$ with $a \ge b > 0$: divide $a$ by $b$ and replace the pair $(a, b)$ by $(b, r)$, where $r$ is the
remainder. Repeat until the remainder is 0. The last nonzero remainder is the gcd.

**Example 1.** $\gcd(8251, 6105)$.

$$\begin{aligned}
8251 &= 1 \cdot 6105 + 2146 \\
6105 &= 2 \cdot 2146 + 1813 \\
2146 &= 1 \cdot 1813 + 333 \\
1813 &= 5 \cdot 333 + 148 \\
333 &= 2 \cdot 148 + 37 \\
148 &= 4 \cdot 37 + 0
\end{aligned}$$

The last nonzero remainder is 37, so $\gcd(8251, 6105) = 37$. By Lemma 3.2 every line has the same gcd:
$\gcd(8251, 6105) = \gcd(6105, 2146) = \dots = \gcd(148, 37) = \gcd(37, 0) = 37$. *Check:*
$8251 = 37 \cdot 223$ and $6105 = 37 \cdot 165 = 37 \cdot 3 \cdot 5 \cdot 11$, and 223 is prime, so nothing more is shared.

**Why it stops.** The remainders strictly decrease, $b > r_1 > r_2 > \dots \ge 0$, and a strictly decreasing sequence
of non-negative integers cannot go on forever (well-ordering again). So a remainder 0 must come.

**Why the answer is right.** If the last division is $r_{n-1} = q \, r_n + 0$, then $r_n \mid r_{n-1}$, so
$\gcd(r_{n-1}, r_n) = r_n$, and by Lemma 3.2 this equals $\gcd(a, b)$.

**Example 2.** $\gcd(1071, 462)$: $1071 = 2 \cdot 462 + 147$, $462 = 3 \cdot 147 + 21$,
$147 = 7 \cdot 21$. The gcd is 21, in three steps.

### A picture: cutting squares

Euclid thought of numbers as lengths. Take a rectangle of sides $a$ and $b$ and cut off as many $b \times b$ squares as
fit. What remains is a $b \times r$ rectangle. Repeat. The last square, the one that fits exactly, has side
$\gcd(a, b)$, and it tiles the whole original rectangle.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 175" role="img" aria-label="A 30 by 12 rectangle cut into two 12 by 12 squares and two 6 by 6 squares, showing gcd of 30 and 12 is 6">
  <rect x="50" y="20" width="120" height="120" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="170" y="20" width="120" height="120" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="290" y="20" width="60" height="60" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="290" y="80" width="60" height="60" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <text x="110" y="85" text-anchor="middle" font-size="15" fill="currentColor">12</text>
  <text x="230" y="85" text-anchor="middle" font-size="15" fill="currentColor">12</text>
  <text x="320" y="55" text-anchor="middle" font-size="14" fill="currentColor">6</text>
  <text x="320" y="115" text-anchor="middle" font-size="14" fill="currentColor">6</text>
  <text x="200" y="165" text-anchor="middle" font-size="13" fill="currentColor">30 = 2 · 12 + 6,  12 = 2 · 6 + 0,  so gcd(30, 12) = 6</text>
</svg>
</div>

The Greeks called this procedure *anthyphairesis*, "alternately taking away". If the two lengths have no common
measure, as with the side and diagonal of a square, the cutting never ends; that is one way to see that $\sqrt 2$ is
irrational, and the sequence of quotients is the continued fraction of [Chapter 10](10-Continued-Fractions.md).

!!! note "Try it in Python"

    ```python
    def gcd(a, b):
        while b != 0:
            a, b = b, a % b
        return abs(a)

    print(gcd(8251, 6105), gcd(1071, 462))   # 37 21
    import math
    print(math.gcd(8251, 6105), math.lcm(84, 90))  # 37 1260 (math.lcm needs Python 3.9+)
    ```

### How fast is it?

*Level: intermediate.* Each step replaces $(a, b)$ by $(b, r)$ with $r < b$. That guarantees the process ends, but a
step could in principle reduce $b$ by only 1. In fact the remainders shrink fast. A first bound: **two steps at least halve the
smaller number.** After two steps the pair $(a, b)$ has become $(r, r')$. If $r < b/2$, then $r' < r < b/2$. If
$r \ge b/2$, the second division is $b = 1 \cdot r + r'$ with $r' = b - r \le b/2$. Either way $r' \le b/2$, so the number of steps is at most about
$2 \log_2 b$: for numbers of 600 digits (2000 bits), at most about 4000 steps. That is why the algorithm handles
cryptographic sizes instantly.

The exact worst case involves the **Fibonacci numbers** $F_1 = 1$, $F_2 = 1$, $F_{k+1} = F_k + F_{k-1}$:
$1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, \dots$ Run the algorithm on two consecutive ones:

$$\begin{aligned}
89 &= 1 \cdot 55 + 34, & 55 &= 1 \cdot 34 + 21, & 34 &= 1 \cdot 21 + 13, \\
21 &= 1 \cdot 13 + 8, & 13 &= 1 \cdot 8 + 5, & 8 &= 1 \cdot 5 + 3, \\
5 &= 1 \cdot 3 + 2, & 3 &= 1 \cdot 2 + 1, & 2 &= 2 \cdot 1 + 0 .
\end{aligned}$$

Every quotient is 1, the smallest possible, so the numbers shrink as slowly as they can: nine steps for numbers below
100.

**Theorem 3.3 (Lamé, 1844).** If Euclid's algorithm on $a > b > 0$ takes $n$ division steps, then $b \ge F_{n+1}$ and
$a \ge F_{n+2}$. Consequently the number of steps is at most five times the number of decimal digits of $b$.

*Proof.* Name the numbers $r_0 = a$, $r_1 = b$, and let the steps be $r_{i-1} = q_i r_i + r_{i+1}$ for
$i = 1, \dots, n$, with $r_{n+1} = 0$ and $r_n = \gcd(a, b) \ge 1$. We show $r_{n-j} \ge F_{j+2}$ for $j = 0, 1, \dots, n$
by induction on $j$.

- $j = 0$: $r_n \ge 1 = F_2$.
- $j = 1$: the last step is $r_{n-1} = q_n r_n$ with $r_{n-1} > r_n$, so $q_n \ge 2$ and $r_{n-1} \ge 2 r_n \ge 2 = F_3$.
- $j \ge 2$: every quotient is at least 1, so $r_{n-j} = q\, r_{n-j+1} + r_{n-j+2} \ge r_{n-j+1} + r_{n-j+2} \ge F_{j+1} + F_j = F_{j+2}$.

With $j = n - 1$ and $j = n$ this gives $b = r_1 \ge F_{n+1}$ and $a = r_0 \ge F_{n+2}$.

For the digit bound, let $\varphi = \frac{1 + \sqrt 5}{2} \approx 1.618$, the golden ratio, which satisfies
$\varphi^2 = \varphi + 1$. By induction $F_{k+1} \ge \varphi^{k-1}$: true for $k = 1$ ($1 \ge 1$) and $k = 2$
($2 \ge 1.618$), and $F_{k+2} = F_{k+1} + F_k \ge \varphi^{k-1} + \varphi^{k-2} = \varphi^{k-2}(\varphi + 1) = \varphi^k$.
So $b \ge F_{n+1} \ge \varphi^{n-1}$. If $b$ has $D$ digits, $b < 10^D$, and taking logarithms,
$(n - 1)\log_{10}\varphi < D$. Since $\log_{10} \varphi \approx 0.209 > \frac{1}{5}$, we get $n - 1 < 5D$, so $n \le 5D$.
$\square$

**Check:** 55 has 2 digits and the algorithm took $9 \le 10$ steps. This theorem, by Gabriel Lamé, is often called the
first result in the analysis of algorithms: a proof of how long a computation takes, not just that it ends. On
**average** the algorithm is faster still: for random inputs near $N$ the number of steps is about
$\frac{12 \ln 2}{\pi^2} \ln N \approx 0.84 \ln N$ (results of Heilbronn and Dixon around 1970; see Knuth's
*Seminumerical Algorithms*).

## 3.3 Bézout's identity and the extended algorithm

### The question

Can you combine 8251 and 6105 with integer coefficients to make 37? To make 1? To make 74? Any combination
$8251x + 6105y$ is a multiple of their gcd, 37 (Theorem 1.1). So 1 is impossible. Surprisingly, every multiple of 37
**is** possible.

**Theorem 3.4 (Bézout's identity).** For integers $a, b$, not both 0, there are integers $x, y$ with

$$ax + by = \gcd(a, b).$$

Moreover $\gcd(a, b)$ is the smallest positive integer of the form $ax + by$, and the integers of that form are
exactly the multiples of $\gcd(a, b)$.

*Proof.* Let $L = \{ax + by : x, y \in \mathbb{Z}\}$, the set of all integer combinations. It contains a positive
number ($a^2 + b^2$, with $x = a$, $y = b$). Let $d = ax_0 + by_0$ be the smallest positive element.

*$d$ divides $a$.* Divide: $a = qd + r$ with $0 \le r < d$. Then
$r = a - q(ax_0 + by_0) = a(1 - qx_0) + b(-qy_0)$ is in $L$. If $r > 0$ it would be a positive element smaller than
$d$; so $r = 0$ and $d \mid a$. In the same way, $d \mid b$.

*$d$ is the greatest common divisor.* $d$ is a common divisor. Any common divisor $c$ of $a$ and $b$ divides
$ax_0 + by_0 = d$, so $c \le d$. Hence $d = \gcd(a, b)$.

*$L$ is the set of multiples of $d$.* Every element of $L$ is a multiple of $d$ (since $d$ divides $a$ and $b$), and
every multiple $kd = a(kx_0) + b(ky_0)$ is in $L$. $\square$

This proof shows that a solution exists but does not find it. Running Euclid's algorithm backwards does.

### Back-substitution

Take Example 1 and solve each line for its remainder, starting from the gcd and working upwards:

$$\begin{aligned}
37 &= 333 - 2 \cdot 148 \\
   &= 333 - 2\,(1813 - 5 \cdot 333) = 11 \cdot 333 - 2 \cdot 1813 \\
   &= 11\,(2146 - 1813) - 2 \cdot 1813 = 11 \cdot 2146 - 13 \cdot 1813 \\
   &= 11 \cdot 2146 - 13\,(6105 - 2 \cdot 2146) = 37 \cdot 2146 - 13 \cdot 6105 \\
   &= 37\,(8251 - 6105) - 13 \cdot 6105 = 37 \cdot 8251 - 50 \cdot 6105 .
\end{aligned}$$

So $x = 37$, $y = -50$. *Check:* $37 \cdot 8251 = 305{,}287$ and $50 \cdot 6105 = 305{,}250$; the difference is 37.

### The extended algorithm as a table

Back-substitution needs you to keep every line. A tidier way carries the coefficients forward. Keep rows $(r, s, t)$
with the invariant $r = a s + b t$. Start with $(a, 1, 0)$ and $(b, 0, 1)$. Each new row is the row two above minus $q$
times the row above, where $q$ is the quotient of their $r$ entries. Because the invariant is linear, it survives the
subtraction.

| $q$ | $r$ | $s$ | $t$ |
| --- | --- | --- | --- |
| | 8251 | 1 | 0 |
| | 6105 | 0 | 1 |
| 1 | 2146 | 1 | $-1$ |
| 2 | 1813 | $-2$ | 3 |
| 1 | 333 | 3 | $-4$ |
| 5 | 148 | $-17$ | 23 |
| 2 | 37 | 37 | $-50$ |
| 4 | 0 | | |

The row with the last nonzero $r$ gives $37 = 8251 \cdot 37 + 6105 \cdot (-50)$, as before. *Check of one middle row:*
$8251 \cdot (-17) + 6105 \cdot 23 = -140{,}267 + 140{,}415 = 148$.

!!! note "Try it in Python"

    ```python
    def extended_gcd(a, b):
        r0, s0, t0 = a, 1, 0
        r1, s1, t1 = b, 0, 1
        while r1 != 0:
            q = r0 // r1
            r0, s0, t0, r1, s1, t1 = r1, s1, t1, r0 - q*r1, s0 - q*s1, t0 - q*t1
        return r0, s0, t0          # r0 = a*s0 + b*t0

    print(extended_gcd(8251, 6105))   # (37, 37, -50)
    print(extended_gcd(240, 46))      # (2, -9, 47)
    ```

### What Bézout gives

Bézout's identity is the source of many facts. Three are used constantly.

**Corollary 3.5.** Every common divisor of $a$ and $b$ divides $\gcd(a, b)$. (It divides $ax + by$.)

**Corollary 3.6 (Euclid's lemma, generalised).** If $a \mid bc$ and $\gcd(a, b) = 1$, then $a \mid c$.

*Proof.* Write $1 = ax + by$ and multiply by $c$: $c = acx + bcy$. Now $a \mid acx$ and $a \mid bc$, so $a \mid c$.
$\square$

With $a = p$ prime, $\gcd(p, b) = 1$ whenever $p \nmid b$, so this gives a second proof of Euclid's lemma from
[Chapter 2](02-Primes-and-Unique-Factorization.md): if $p \mid bc$ and $p \nmid b$ then $p \mid c$.

**Corollary 3.7.** If $a \mid n$, $b \mid n$ and $\gcd(a, b) = 1$, then $ab \mid n$.

*Proof.* $n = ak$, and $b \mid ak$ with $\gcd(b, a) = 1$, so $b \mid k$ by Corollary 3.6. Then $k = bm$ and
$n = abm$. $\square$

This settles the question left open in [Chapter 1](01-Divisibility.md): divisible by 2 and by 3 means divisible by 6,
because $\gcd(2, 3) = 1$; but divisible by 4 and by 6 does not mean divisible by 24, because $\gcd(4, 6) = 2$.

**Corollary 3.8.** If $d = \gcd(a, b)$, then $\gcd(a/d, b/d) = 1$.

*Proof.* Divide $ax + by = d$ by $d$: $(a/d)x + (b/d)y = 1$, so any common divisor of $a/d$ and $b/d$ divides 1.
$\square$

## 3.4 Linear Diophantine equations

### The problem

A **Diophantine equation** is an equation in which only integer solutions are wanted, named after Diophantus of
Alexandria, whose *Arithmetica* (probably third century AD) studies such problems (though Diophantus usually allowed
positive fractions). The simplest are linear: find all integers $x, y$ with $ax + by = c$.

A classic from China, in Zhang Qiujian's *Suanjing* (fifth century), is the **hundred fowls problem**: a rooster costs
5 coins, a hen 3 coins, and 3 chicks cost 1 coin. With 100 coins you buy 100 birds. How many of each? We will solve
it below.

### When is there a solution?

**Theorem 3.9.** Let $a, b$ be integers, not both 0, and $d = \gcd(a, b)$. The equation $ax + by = c$ has an integer
solution if and only if $d \mid c$. If $(x_0, y_0)$ is one solution, then all solutions are

$$x = x_0 + \frac{b}{d}\,t, \qquad y = y_0 - \frac{a}{d}\,t, \qquad t \in \mathbb{Z} .$$

*Proof.* *Existence.* If a solution exists, $d$ divides $ax + by = c$. Conversely, if $c = dk$, Bézout gives
$ax' + by' = d$, and then $x_0 = kx'$, $y_0 = ky'$ is a solution.

*The formula gives solutions.* $a\bigl(x_0 + \frac{b}{d}t\bigr) + b\bigl(y_0 - \frac{a}{d}t\bigr) = ax_0 + by_0 + \frac{ab}{d}t - \frac{ab}{d}t = c$.

*Every solution has this form.* Suppose $ax + by = c$. Subtract $ax_0 + by_0 = c$ and divide by $d$:

$$\frac{a}{d}(x - x_0) = -\frac{b}{d}(y - y_0).$$

So $\frac{b}{d}$ divides $\frac{a}{d}(x - x_0)$. By Corollary 3.8, $\gcd(\frac{a}{d}, \frac{b}{d}) = 1$, so by
Corollary 3.6, $\frac{b}{d} \mid x - x_0$: write $x - x_0 = \frac{b}{d}t$. (If $b = 0$ the equation is $ax = c$ and
the claim is direct; assume $b \neq 0$.) Substituting back, $\frac{a}{d}\cdot\frac{b}{d}t = -\frac{b}{d}(y - y_0)$, and
cancelling $\frac{b}{d} \neq 0$ gives $y - y_0 = -\frac{a}{d}t$. $\square$

Geometrically, $ax + by = c$ is a straight line, and the theorem says the points with integer coordinates on it (the
**lattice points**) are either absent or evenly spaced, one every $\bigl(\frac{b}{d}, -\frac{a}{d}\bigr)$ along the line.

### Worked examples

**Example 1.** $15x + 21y = 6$. Here $\gcd(15, 21) = 3$ and $3 \mid 6$, so there are solutions. Bézout:
$21 = 1 \cdot 15 + 6$, $15 = 2 \cdot 6 + 3$, so $3 = 15 - 2 \cdot 6 = 15 - 2(21 - 15) = 3 \cdot 15 - 2 \cdot 21$.
Multiply by 2: $6 = 6 \cdot 15 - 4 \cdot 21$, so $x_0 = 6$, $y_0 = -4$. All solutions:

$$x = 6 + 7t, \qquad y = -4 - 5t .$$

*Check* with $t = -1$: $x = -1$, $y = 1$, and $-15 + 21 = 6$.

**Example 2.** $15x + 21y = 7$ has no integer solutions, since $3 \nmid 7$. (Quick reason: the left side is always a
multiple of 3.)

**Example 3 (the hundred fowls).** Let $x$ roosters, $y$ hens, $z$ chicks. Then

$$x + y + z = 100, \qquad 5x + 3y + \frac{z}{3} = 100 .$$

Multiply the second by 3 and subtract the first: $15x + 9y + z - (x + y + z) = 300 - 100$, that is $14x + 8y = 200$,
or $7x + 4y = 100$. Since $\gcd(7, 4) = 1$ there are solutions; an obvious one is $x_0 = 0$, $y_0 = 25$. All solutions:
$x = 4t$, $y = 25 - 7t$. We need $x \ge 0$ and $y \ge 0$, so $0 \le t \le 3$, and $z = 100 - x - y$:

| $t$ | roosters $x$ | hens $y$ | chicks $z$ |
| --- | --- | --- | --- |
| 0 | 0 | 25 | 75 |
| 1 | 4 | 18 | 78 |
| 2 | 8 | 11 | 81 |
| 3 | 12 | 4 | 84 |

*Check* the second row: $4 + 18 + 78 = 100$ birds; $20 + 54 + 26 = 100$ coins. Zhang Qiujian's text gives the three
answers with at least one rooster.

**Example 4 (non-negative solutions).** In how many ways can you pay 200 cents with 7-cent and 11-cent stamps? Solve
$7x + 11y = 200$. Bézout: $11 = 7 + 4$, $7 = 4 + 3$, $4 = 3 + 1$, so
$1 = 4 - 3 = 4 - (7 - 4) = 2 \cdot 4 - 7 = 2(11 - 7) - 7 = 2 \cdot 11 - 3 \cdot 7$. Multiply by 200:
$x_0 = -600$, $y_0 = 400$. All solutions: $x = -600 + 11t$, $y = 400 - 7t$. We need $x \ge 0$, so $t \ge 55$ (since
$11 \cdot 55 = 605$), and $y \ge 0$, so $t \le 57$. Three ways: $t = 55, 56, 57$ give $(x, y) = (5, 15), (16, 8), (27, 1)$.
*Check:* $35 + 165 = 200$, $112 + 88 = 200$, $189 + 11 = 200$.

## 3.5 The coin problem

*Level: intermediate, with an advanced counting argument.*

### The question

A country has only 3-cent and 5-cent coins, and shops give no change. Which prices can you pay exactly? You can pay
$3, 5, 6, 8, 9, 10, \dots$ but not $1, 2, 4, 7$. And from 8 on, every amount is payable: $8 = 3 + 5$, $9 = 3 + 3 + 3$,
$10 = 5 + 5$, and adding a 3 to each of these covers $11, 12, 13$, and so on forever. The largest unpayable amount is
7, and there are 4 unpayable amounts. Is there a pattern?

In general, with coins worth $a$ and $b$, an amount $n \ge 0$ is **payable** if $n = ax + by$ with $x, y \ge 0$
integers. If $\gcd(a, b) = d > 1$, only multiples of $d$ are payable, so infinitely many amounts are not. So assume
$\gcd(a, b) = 1$.

### The picture

Arrange the amounts in columns by their remainder on division by $b = 5$. In each column, once you can pay an amount,
you can pay everything below it in the column (add 5-cent coins). The first payable amount in each column is the
first multiple of $a = 3$ that lands there.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 225" role="img" aria-label="Amounts 0 to 24 in five columns by remainder mod 5; in each column the first multiple of 3 is blue, amounts below it green and payable, amounts above it orange and not payable">
  <text x="100" y="20" text-anchor="middle" font-size="12" fill="currentColor">rem 0</text>
  <text x="150" y="20" text-anchor="middle" font-size="12" fill="currentColor">rem 1</text>
  <text x="200" y="20" text-anchor="middle" font-size="12" fill="currentColor">rem 2</text>
  <text x="250" y="20" text-anchor="middle" font-size="12" fill="currentColor">rem 3</text>
  <text x="300" y="20" text-anchor="middle" font-size="12" fill="currentColor">rem 4</text>
  <rect x="75" y="30" width="50" height="30" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <text x="100" y="50" text-anchor="middle" font-size="13" fill="currentColor">0</text>
  <rect x="125" y="30" width="50" height="30" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <text x="150" y="50" text-anchor="middle" font-size="13" fill="currentColor">1</text>
  <rect x="175" y="30" width="50" height="30" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <text x="200" y="50" text-anchor="middle" font-size="13" fill="currentColor">2</text>
  <rect x="225" y="30" width="50" height="30" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <text x="250" y="50" text-anchor="middle" font-size="13" fill="currentColor">3</text>
  <rect x="275" y="30" width="50" height="30" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <text x="300" y="50" text-anchor="middle" font-size="13" fill="currentColor">4</text>
  <rect x="75" y="60" width="50" height="30" fill="#7ccf9a" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <text x="100" y="80" text-anchor="middle" font-size="13" fill="currentColor">5</text>
  <rect x="125" y="60" width="50" height="30" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <text x="150" y="80" text-anchor="middle" font-size="13" fill="currentColor">6</text>
  <rect x="175" y="60" width="50" height="30" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <text x="200" y="80" text-anchor="middle" font-size="13" fill="currentColor">7</text>
  <rect x="225" y="60" width="50" height="30" fill="#7ccf9a" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <text x="250" y="80" text-anchor="middle" font-size="13" fill="currentColor">8</text>
  <rect x="275" y="60" width="50" height="30" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <text x="300" y="80" text-anchor="middle" font-size="13" fill="currentColor">9</text>
  <rect x="75" y="90" width="50" height="30" fill="#7ccf9a" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <text x="100" y="110" text-anchor="middle" font-size="13" fill="currentColor">10</text>
  <rect x="125" y="90" width="50" height="30" fill="#7ccf9a" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <text x="150" y="110" text-anchor="middle" font-size="13" fill="currentColor">11</text>
  <rect x="175" y="90" width="50" height="30" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <text x="200" y="110" text-anchor="middle" font-size="13" fill="currentColor">12</text>
  <rect x="225" y="90" width="50" height="30" fill="#7ccf9a" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <text x="250" y="110" text-anchor="middle" font-size="13" fill="currentColor">13</text>
  <rect x="275" y="90" width="50" height="30" fill="#7ccf9a" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <text x="300" y="110" text-anchor="middle" font-size="13" fill="currentColor">14</text>
  <rect x="75" y="120" width="50" height="30" fill="#7ccf9a" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <text x="100" y="140" text-anchor="middle" font-size="13" fill="currentColor">15</text>
  <rect x="125" y="120" width="50" height="30" fill="#7ccf9a" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <text x="150" y="140" text-anchor="middle" font-size="13" fill="currentColor">16</text>
  <rect x="175" y="120" width="50" height="30" fill="#7ccf9a" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <text x="200" y="140" text-anchor="middle" font-size="13" fill="currentColor">17</text>
  <rect x="225" y="120" width="50" height="30" fill="#7ccf9a" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <text x="250" y="140" text-anchor="middle" font-size="13" fill="currentColor">18</text>
  <rect x="275" y="120" width="50" height="30" fill="#7ccf9a" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <text x="300" y="140" text-anchor="middle" font-size="13" fill="currentColor">19</text>
  <rect x="75" y="150" width="50" height="30" fill="#7ccf9a" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <text x="100" y="170" text-anchor="middle" font-size="13" fill="currentColor">20</text>
  <rect x="125" y="150" width="50" height="30" fill="#7ccf9a" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <text x="150" y="170" text-anchor="middle" font-size="13" fill="currentColor">21</text>
  <rect x="175" y="150" width="50" height="30" fill="#7ccf9a" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <text x="200" y="170" text-anchor="middle" font-size="13" fill="currentColor">22</text>
  <rect x="225" y="150" width="50" height="30" fill="#7ccf9a" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <text x="250" y="170" text-anchor="middle" font-size="13" fill="currentColor">23</text>
  <rect x="275" y="150" width="50" height="30" fill="#7ccf9a" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <text x="300" y="170" text-anchor="middle" font-size="13" fill="currentColor">24</text>
  <rect x="20" y="195" width="14" height="14" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <text x="40" y="207" font-size="12" fill="currentColor">first multiple of 3 in column</text>
  <rect x="215" y="195" width="14" height="14" fill="#7ccf9a" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <text x="235" y="207" font-size="12" fill="currentColor">payable</text>
  <rect x="295" y="195" width="14" height="14" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <text x="315" y="207" font-size="12" fill="currentColor">not payable</text>
</svg>
</div>

The multiples $0, 3, 6, 9, 12$ of 3 land in five different columns (remainders $0, 3, 1, 4, 2$), because the
remainders of $0, a, 2a, \dots, (b - 1)a$ on division by $b$ are all different when $\gcd(a, b) = 1$. (If $ia$ and $ja$
had the same remainder, $b \mid (i - j)a$, so $b \mid i - j$ by Corollary 3.6, forcing $i = j$.) The latest column to
start is the one beginning at $(b - 1)a = 12$, and the amount just above it, $12 - 5 = 7$, is the largest unpayable
one. In general that is $(b - 1)a - b = ab - a - b$.

### The theorem

**Theorem 3.10 (Sylvester, 1884).** Let $a, b \ge 2$ be coprime. Then

1. $ab - a - b$ is not payable with coins $a$ and $b$, and every integer $n > ab - a - b$ is payable;
2. exactly $\frac{(a - 1)(b - 1)}{2}$ non-negative integers are not payable.

The number $ab - a - b$ is called the **Frobenius number** of $a$ and $b$, after Ferdinand Georg Frobenius, who is
reported to have asked about the general problem in his lectures.

*Proof.* **A standard form.** Every integer $n$ can be written $n = ax + by$ with $0 \le x \le b - 1$, in exactly one
way. Existence: Theorem 3.9 gives some solution $(x_0, y_0)$, and all solutions are $x = x_0 + bt$, $y = y_0 - at$
(here $d = 1$); exactly one choice of $t$ puts $x$ in $\{0, \dots, b - 1\}$, by the division algorithm applied to $x_0$.
Uniqueness: two such $x$ differ by a multiple of $b$ and both lie in $\{0, \dots, b - 1\}$, so they are equal, and
then $y$ is determined.

**Payable means $y \ge 0$ in the standard form.** If $y \ge 0$, then $n = ax + by$ pays $n$. Conversely, if
$n = ax' + by'$ with $x', y' \ge 0$, move to the standard form by $x = x' - bt$, $y = y' + at$ with $t \ge 0$ (we
reduce $x'$ into $\{0, \dots, b-1\}$ by subtracting multiples of $b$), and then $y = y' + at \ge 0$.

**Part 1.** $ab - a - b = a(b - 1) + b(-1)$ is in standard form (since $0 \le b - 1 \le b - 1$) with $y = -1 < 0$: not
payable. If $n > ab - a - b$ and its standard form had $y \le -1$, then $n = ax + by \le a(b - 1) - b = ab - a - b$, a
contradiction. So $y \ge 0$ and $n$ is payable.

**Part 2.** Let $g = ab - a - b$. Every unpayable non-negative integer lies in $\{0, 1, \dots, g\}$, a set of
$g + 1 = (a - 1)(b - 1)$ numbers. Pair each $n$ in this set with $g - n$. If $n = ax + by$ is in standard form, then

$$g - n = a(b - 1 - x) + b(-1 - y),$$

and $0 \le b - 1 - x \le b - 1$, so this is the standard form of $g - n$. Its $y$-value $-1 - y$ is negative exactly
when $y \ge 0$. So **exactly one of $n$ and $g - n$ is payable.** The pairing splits the $(a - 1)(b - 1)$ numbers into
pairs $\{n, g - n\}$ (no number is paired with itself, since one of each pair is payable and the other is not), with
one unpayable number per pair: $\frac{(a - 1)(b - 1)}{2}$ unpayable numbers in all. $\square$

**Check with 3 and 5:** $g = 15 - 3 - 5 = 7$ and $\frac{2 \cdot 4}{2} = 4$ unpayable amounts, namely $1, 2, 4, 7$. The
pairing: $0 \leftrightarrow 7$, $1 \leftrightarrow 6$, $2 \leftrightarrow 5$, $3 \leftrightarrow 4$; in each pair
exactly one is payable.

**Example.** Stamps of 5 and 8 cents: the largest impossible postage is $40 - 5 - 8 = 27$ cents, and there are
$\frac{4 \cdot 7}{2} = 14$ impossible amounts: $1, 2, 3, 4, 6, 7, 9, 11, 12, 14, 17, 19, 22, 27$.

### Three or more coins

With three coin values there is no formula of this kind. Chicken nuggets were once sold in boxes of 6, 9 and 20; the
largest number you could not buy was 43, and the unbuyable amounts were

$$1, 2, 3, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 22, 23, 25, 28, 31, 34, 37, 43 .$$

Frank Curtis proved in 1990 that the Frobenius number of three values cannot be given by any polynomial formula of a
certain natural kind, and for many values the problem is computationally hard. Fast algorithms exist for a fixed
number of coins, and the subject has a large literature (see Ramírez Alfonsín's book below).

## A short history thread

Euclid's algorithm appears in the *Elements*, Book VII, Propositions 1 and 2 (about 300 BC), for numbers, and in
Book X for lengths. It is one of the oldest algorithms still in daily use: every secure web connection runs it.

The method of solving $ax + by = c$ by running the algorithm backwards was developed in India: Aryabhata (AD 499)
describes the *kuṭṭaka* ("pulveriser"), and Brahmagupta and Bhāskara II refined it. Chinese mathematicians solved
similar problems; the hundred fowls problem is in Zhang Qiujian's *Suanjing*. In Europe, Claude-Gaspard Bachet de
Méziriac gave the method in 1624, and Étienne Bézout proved the analogous statement for polynomials in the 18th century,
which is why the identity carries his name.

Gabriel Lamé's 1844 bound on the number of steps is one of the earliest analyses of an algorithm's running time.
James Joseph Sylvester posed the two-coin count as a problem in the *Educational Times* in 1884.

## Check yourself

??? question "1. Find $\gcd(1517, 1001)$ by Euclid's algorithm. How many steps does it take?"

    $1517 = 1 \cdot 1001 + 516$; $1001 = 1 \cdot 516 + 485$; $516 = 1 \cdot 485 + 31$; $485 = 15 \cdot 31 + 20$;
    $31 = 1 \cdot 20 + 11$; $20 = 1 \cdot 11 + 9$; $11 = 1 \cdot 9 + 2$; $9 = 4 \cdot 2 + 1$; $2 = 2 \cdot 1 + 0$.
    The gcd is 1, after 9 steps. (Lamé allows at most $5 \cdot 4 = 20$.) *Check:* $1517 = 37 \cdot 41$ and
    $1001 = 7 \cdot 11 \cdot 13$ share no prime.

??? question "2. Find integers $x, y$ with $97x + 35y = 1$."

    $97 = 2 \cdot 35 + 27$; $35 = 1 \cdot 27 + 8$; $27 = 3 \cdot 8 + 3$; $8 = 2 \cdot 3 + 2$; $3 = 1 \cdot 2 + 1$.
    Back-substitute:
    $1 = 3 - 2 = 3 - (8 - 2 \cdot 3) = 3 \cdot 3 - 8 = 3(27 - 3 \cdot 8) - 8 = 3 \cdot 27 - 10 \cdot 8$
    $= 3 \cdot 27 - 10(35 - 27) = 13 \cdot 27 - 10 \cdot 35 = 13(97 - 2 \cdot 35) - 10 \cdot 35 = 13 \cdot 97 - 36 \cdot 35$.
    So $x = 13$, $y = -36$. *Check:* $1261 - 1260 = 1$.

??? question "3. Find $\operatorname{lcm}(84, 90)$ using Euclid's algorithm instead of factoring."

    $90 = 1 \cdot 84 + 6$, $84 = 14 \cdot 6$, so $\gcd = 6$, and by Theorem 3.1,
    $\operatorname{lcm} = \frac{84 \cdot 90}{6} = 1260$.

??? question "4. Show that $\gcd(2n + 1, 3n + 1) = 1$ for every integer $n$."

    $3(2n + 1) - 2(3n + 1) = 1$. Any common divisor divides this combination, so it divides 1.

??? question "5. Show that consecutive Fibonacci numbers are coprime."

    By Lemma 3.2, $\gcd(F_{k+1}, F_k) = \gcd(F_k, F_{k+1} - F_k) = \gcd(F_k, F_{k-1})$. Repeating,
    $\gcd(F_{k+1}, F_k) = \dots = \gcd(F_2, F_1) = \gcd(1, 1) = 1$.

??? question "6. Find all integer solutions of $21x + 35y = 14$, and the one with the smallest positive $x$."

    $\gcd(21, 35) = 7$ and $7 \mid 14$. Divide by 7: $3x + 5y = 2$. A solution: $x_0 = -1$, $y_0 = 1$
    ($-3 + 5 = 2$). All solutions: $x = -1 + 5t$, $y = 1 - 3t$. The smallest positive $x$ is $4$ ($t = 1$), with
    $y = -2$. *Check:* $84 - 70 = 14$.

??? question "7. How many steps does Euclid's algorithm take on $(144, 89)$? Compare with Lamé's bound."

    These are $F_{12}$ and $F_{11}$; every quotient is 1 until the end, and the remainders run
    $55, 34, 21, 13, 8, 5, 3, 2, 1, 0$: 10 steps. Lamé: $89 \ge F_{n+1}$ gives $n + 1 \le 11$, so $n \le 10$, and
    the bound is attained exactly. The digit form allows $5 \cdot 2 = 10$, also exact here.

??? question "8. With stamps of 4 and 9 cents, what is the largest postage you cannot make, and how many amounts are impossible? List them."

    $\gcd(4, 9) = 1$. Largest: $36 - 4 - 9 = 23$. Count: $\frac{3 \cdot 8}{2} = 12$. They are
    $1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 19, 23$. (Payable below 24: $0, 4, 8, 9, 12, 13, 16, 17, 18, 20, 21, 22$; twelve
    of each, matching the pairing $n \leftrightarrow 23 - n$.)

??? question "9. Show that with boxes of 6, 9 and 20, 43 cannot be bought but every larger amount can."

    For 43: using no 20s, $43$ is not a multiple of 3; one 20 leaves 23, not a multiple of 3; two 20s leave 3, which
    is not a sum of 6s and 9s. So 43 is impossible. For larger amounts: $44 = 20 + 24$, $45 = 9 \cdot 5$,
    $46 = 40 + 6$, $47 = 20 + 27$, $48 = 6 \cdot 8$, $49 = 40 + 9$. These are six consecutive amounts, and adding
    6-boxes reaches every amount beyond.

??? question "10. Prove that if $\gcd(a, b) = 1$, then $\gcd(a + b, a - b)$ is 1 or 2."

    Let $d = \gcd(a + b, a - b)$. Then $d$ divides the sum $2a$ and the difference $2b$, so $d \mid \gcd(2a, 2b)$. By
    Bézout, $ax + by = 1$ for some $x, y$, so $2ax + 2by = 2$, and $d \mid 2$. Both values occur: $a = 2, b = 1$ gives
    $\gcd(3, 1) = 1$; $a = 3, b = 1$ gives $\gcd(4, 2) = 2$.

??? question "11. Prove that $\gcd(2^m - 1, 2^n - 1) = 2^{\gcd(m, n)} - 1$."

    First, if $m = qn + r$, then $2^m - 1 = 2^r(2^{qn} - 1) + (2^r - 1)$, and $2^n - 1$ divides $2^{qn} - 1$ (by
    $x^q - 1 = (x - 1)(x^{q-1} + \dots + 1)$ with $x = 2^n$). So $2^m - 1 = (\text{multiple of } 2^n - 1) + (2^r - 1)$,
    and by Lemma 3.2, $\gcd(2^m - 1, 2^n - 1) = \gcd(2^n - 1, 2^r - 1)$. The exponents follow Euclid's algorithm on
    $(m, n)$ exactly, which ends at $\gcd(m, n)$ and remainder 0, giving $\gcd(2^{\gcd(m,n)} - 1, 2^0 - 1) = 2^{\gcd(m,n)} - 1$.
    *Check:* $\gcd(2^{12} - 1, 2^{18} - 1) = \gcd(4095, 262143) = 63 = 2^6 - 1$.

??? question "12. A frog jumps 12 cm or 20 cm in either direction along a line. Which points can it reach from 0, and in how few jumps can it reach 4 cm?"

    Positions reachable are $12x + 20y$ with any integers $x, y$ (negative means jumping backward): by Theorem 3.4,
    exactly the multiples of $\gcd(12, 20) = 4$. For 4: solve $12x + 20y = 4$, that is $3x + 5y = 1$: solutions
    $x = 2 + 5t$, $y = -1 - 3t$. The number of jumps is $|x| + |y|$: $t = 0$ gives $2 + 1 = 3$; $t = -1$ gives
    $3 + 2 = 5$; other $t$ are worse. So 3 jumps: two forward of 12 and one back of 20.

## What you learned

- $\gcd(a, b)$ is the largest common divisor and $\operatorname{lcm}(a, b)$ the smallest common multiple; their product
  is $ab$.
- Euclid's algorithm finds the gcd by repeated division with remainder, because $\gcd(a, b) = \gcd(b, a \bmod b)$; it
  needs no factoring.
- It is fast: at most five steps per decimal digit (Lamé), with consecutive Fibonacci numbers as the worst case.
- Bézout: $\gcd(a, b) = ax + by$ for some integers $x, y$, found by the extended algorithm; the combinations of $a$ and
  $b$ are exactly the multiples of the gcd.
- From Bézout: if $a \mid bc$ and $\gcd(a, b) = 1$ then $a \mid c$, which gives Euclid's lemma again.
- $ax + by = c$ is solvable exactly when $\gcd(a, b) \mid c$, and then all solutions are one solution plus multiples of
  $\bigl(\frac{b}{d}, -\frac{a}{d}\bigr)$.
- With coprime coins $a$ and $b$, the largest unpayable amount is $ab - a - b$, and exactly $\frac{(a-1)(b-1)}{2}$
  amounts are unpayable.

**Next:** [Chapter 4](04-Congruences.md), arithmetic with remainders: congruences, inverses modulo $n$, check digits
and the day of the week.

## Further reading

- Euclid, *Elements*, Book VII, Propositions 1 and 2 (about 300 BC).
- Donald E. Knuth, *The Art of Computer Programming, Volume 2: Seminumerical Algorithms*, 3rd edition, 1997.
  Section 4.5.3 analyses Euclid's algorithm completely, including Lamé's theorem and the average case.
- Jorge L. Ramírez Alfonsín, *The Diophantine Frobenius Problem*, Oxford University Press, 2005.
- Ivan Niven, Herbert S. Zuckerman and Hugh L. Montgomery, *An Introduction to the Theory of Numbers*, 5th edition,
  1991. Sections 1.2 and 5.1.
- Kenneth H. Rosen, *Elementary Number Theory and Its Applications*, 6th edition, 2011. Many exercises at this level.
- Joseph H. Silverman, *A Friendly Introduction to Number Theory*, 4th edition, 2012. Chapters 5 and 6.
- On this site: [Algebra, chapter 17](../algebra/17-Rings-and-Ideals.md) and
  [Algebra, chapter 18](../algebra/18-Factorization-in-Rings.md), where Bézout becomes the statement that every ideal
  of $\mathbb{Z}$ is generated by one number; the U of T guide
  [MAT240H1 Unit 9: Polynomials, UFD & Resultants](../../uoft/MAT240H1/unit09.md), where the same algorithm runs on
  polynomials; and the cryptography book's
  [The arithmetic of secrets](https://cryptography.akadian.ca/book/03-The-Arithmetic-of-Secrets/), where the
  extended algorithm computes RSA private keys.
