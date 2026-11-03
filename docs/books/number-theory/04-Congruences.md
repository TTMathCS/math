# 4. Congruences

*What is the last digit of $7^{2026}$? On what day of the week will 1 January 2100 fall? Why does a supermarket
scanner beep angrily when one digit of a barcode is misread? Each question cares only about remainders: the remainder
on division by 10, by 7, by 10 again. Gauss saw in 1801 that remainders can be added and multiplied as if they were
numbers in their own right, and gave the idea a notation so good that it changed the subject. This chapter builds
that arithmetic of remainders, proves its rules, finds out when you can divide in it, solves equations in it, and
uses it on ISBNs, credit card numbers and calendars.*

!!! abstract "In this chapter"

    **You will learn:**

    - congruence modulo $n$, residue classes, and the number systems $\mathbb{Z}/n\mathbb{Z}$
    - the rules for adding, multiplying and taking powers of congruences, with proofs, and the trap in dividing
    - when a number has an inverse modulo $n$, and how to find it with the extended Euclidean algorithm
    - how to solve every linear congruence $ax \equiv b \pmod n$, and how many solutions it has
    - how check digits (ISBN, barcodes, the Luhn algorithm) catch errors, and which errors they miss
    - a formula for the day of the week of any date, derived from scratch

    **You need:** [Chapter 1](01-Divisibility.md) and [Chapter 3](03-GCD-and-Euclids-Algorithm.md) (Euclid's algorithm
    and Bézout's identity). For a gentler version, see the Topics lessons
    [Remainders as a new kind of number](../../topics/number-theory/level-5/01-remainders.md),
    [Clocks of any size](../../topics/number-theory/level-5/02-clocks-any-size.md),
    [Congruence](../../topics/number-theory/level-5/03-congruence.md),
    [Last digits and big powers](../../topics/number-theory/level-5/04-last-digits-powers.md),
    [Check digits](../../topics/number-theory/level-5/06-check-digits.md) and
    [Inverses mod n](../../topics/number-theory/level-6/04-inverses-mod-n.md).

    **Levels:** 4.1 and 4.2 are beginner to intermediate; 4.3 and 4.4 are intermediate; 4.5 and 4.6 are intermediate
    applications.

## 4.1 Clock arithmetic

### The question

It is 7 o'clock. What time will it be in 8 hours? Not 15 o'clock but 3 o'clock: on a 12-hour clock, $7 + 8 = 3$. In
100 hours? $100 = 8 \cdot 12 + 4$, so the hand moves 4 places further than it started: 11 o'clock. A clock only ever
shows remainders on division by 12, and it adds them in its own way.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 200" role="img" aria-label="A clock face numbered 0 to 11; an arrow of 8 steps goes clockwise from 7 to 3, showing 7 plus 8 is 3 mod 12">
  <circle cx="110" cy="100" r="75" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="110.0" y="43.0" text-anchor="middle" font-size="14" fill="currentColor">0</text>
  <text x="141.0" y="51.3" text-anchor="middle" font-size="14" fill="currentColor">1</text>
  <text x="163.7" y="74.0" text-anchor="middle" font-size="14" fill="currentColor">2</text>
  <circle cx="172.0" cy="100.0" r="11" fill="#7ccf9a" fill-opacity="0.8"/>
  <text x="172.0" y="105.0" text-anchor="middle" font-size="14" fill="currentColor">3</text>
  <text x="163.7" y="136.0" text-anchor="middle" font-size="14" fill="currentColor">4</text>
  <text x="141.0" y="158.7" text-anchor="middle" font-size="14" fill="currentColor">5</text>
  <text x="110.0" y="167.0" text-anchor="middle" font-size="14" fill="currentColor">6</text>
  <circle cx="79.0" cy="153.7" r="11" fill="#eea66f" fill-opacity="0.8"/>
  <text x="79.0" y="158.7" text-anchor="middle" font-size="14" fill="currentColor">7</text>
  <text x="56.3" y="136.0" text-anchor="middle" font-size="14" fill="currentColor">8</text>
  <text x="48.0" y="105.0" text-anchor="middle" font-size="14" fill="currentColor">9</text>
  <text x="56.3" y="74.0" text-anchor="middle" font-size="14" fill="currentColor">10</text>
  <text x="79.0" y="51.3" text-anchor="middle" font-size="14" fill="currentColor">11</text>
  <path d="M66.0,176.2 A88,88 0 1 1 198.0,100.0" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <path d="M198.0,100.0 L203.0,92.0 L193.0,92.0 Z" fill="#9cc9ea"/>
  <text x="300" y="80" text-anchor="middle" font-size="15" fill="currentColor">7 + 8 = 15</text>
  <text x="300" y="105" text-anchor="middle" font-size="15" fill="currentColor">15 = 1 · 12 + 3</text>
  <text x="300" y="130" text-anchor="middle" font-size="15" fill="currentColor">7 + 8 ≡ 3 (mod 12)</text>
</svg>
</div>

We write 0 instead of 12 at the top, so the clock shows exactly the possible remainders $0, 1, \dots, 11$. The same
arithmetic runs the days of the week (modulo 7), the last digit of a number (modulo 10), the angle of a rotating wheel
in whole degrees (modulo 360) and even/odd (modulo 2).

### Congruence

**Definition (Gauss, 1801).** Let $n \ge 1$. Integers $a$ and $b$ are **congruent modulo $n$**, written

$$a \equiv b \pmod n,$$

if $n \mid a - b$. The number $n$ is the **modulus**. If $n \nmid a - b$ we write $a \not\equiv b \pmod n$.

Read "$a \equiv b \pmod n$" as "$a$ is congruent to $b$ mod $n$". Examples:

- $15 \equiv 3 \pmod{12}$, since $12 \mid 12$.
- $100 \equiv 4 \pmod{12}$, since $12 \mid 96$.
- $-1 \equiv 11 \pmod{12}$: one hour before 0 o'clock is 11 o'clock.
- $a \equiv 0 \pmod n$ means exactly $n \mid a$. So congruence contains divisibility as a special case.
- $a \equiv b \pmod 2$ means $a$ and $b$ have the same parity.

**Lemma 4.1.** $a \equiv b \pmod n$ if and only if $a$ and $b$ leave the same remainder on division by $n$.

*Proof.* Write $a = nq + r$ and $b = nq' + r'$ with $0 \le r, r' < n$. Then $a - b = n(q - q') + (r - r')$, so
$n \mid a - b$ exactly when $n \mid r - r'$. Since $-n < r - r' < n$, that happens only when $r = r'$. $\square$

So every integer is congruent to exactly one of $0, 1, \dots, n - 1$, its remainder $a \bmod n$. Note the two uses of
"mod": $a \bmod n$ (no brackets) is a **number**, the remainder; "$\pmod n$" in brackets qualifies a **statement**.
$17 \bmod 5 = 2$, and $17 \equiv 2 \equiv 7 \equiv -3 \pmod 5$ are all true.

### Residue classes

Congruence modulo $n$ is an **equivalence relation**: it is

- reflexive: $a \equiv a$ (since $n \mid 0$);
- symmetric: if $a \equiv b$ then $b \equiv a$ (since $n \mid a - b$ implies $n \mid b - a$);
- transitive: if $a \equiv b$ and $b \equiv c$ then $a \equiv c$ (since $a - c = (a - b) + (b - c)$).

So it sorts the integers into $n$ groups, the **residue classes** modulo $n$. The class of $a$ is

$$\bar a = \{\dots, a - 2n, a - n, a, a + n, a + 2n, \dots\}.$$

Modulo 4 the classes are $\bar 0 = \{\dots, -4, 0, 4, 8, \dots\}$, $\bar 1 = \{\dots, -3, 1, 5, 9, \dots\}$, $\bar 2$
and $\bar 3$: the four "types" from section 1.3. The set of residue classes modulo $n$ is written
$\mathbb{Z}/n\mathbb{Z}$ (read "Z mod n Z"; some books write $\mathbb{Z}_n$). It has exactly $n$ elements. A set of
integers containing exactly one member of each class, such as $\{0, 1, \dots, n - 1\}$ or $\{-2, -1, 0, 1, 2\}$
modulo 5, is a **complete residue system**.

## 4.2 The rules of congruence

### Adding and multiplying

The reason congruences are useful is that you can calculate with them exactly as with equations.

**Theorem 4.2.** Suppose $a \equiv b \pmod n$ and $c \equiv d \pmod n$. Then

1. $a + c \equiv b + d \pmod n$ and $a - c \equiv b - d \pmod n$;
2. $ac \equiv bd \pmod n$;
3. $a^k \equiv b^k \pmod n$ for every integer $k \ge 0$;
4. $f(a) \equiv f(b) \pmod n$ for every polynomial $f$ with integer coefficients.

*Proof.* Write $a = b + ns$ and $c = d + nt$.

1. $(a + c) - (b + d) = n(s + t)$. Subtraction is the same.
2. $ac - bd = ac - bc + bc - bd = (a - b)c + b(c - d) = nsc + bnt = n(sc + bt)$.
3. Apply 2 repeatedly (induction on $k$): $a^{k+1} = a^k \cdot a \equiv b^k \cdot b = b^{k+1}$.
4. A polynomial $f(x) = c_m x^m + \dots + c_1 x + c_0$ is built from powers, multiplication by the integers $c_i$ (use
   2 with $c \equiv c$) and addition. Apply 1, 2 and 3. $\square$

This theorem says that addition and multiplication of residue classes are **well defined**: to add two classes, add
any members and take the class of the result; the answer does not depend on which members you picked. So
$\mathbb{Z}/n\mathbb{Z}$ is a number system with its own addition and multiplication. Here are the multiplication
tables modulo 5 and modulo 6:

| $\times$ mod 5 | 0 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- | --- |
| **0** | 0 | 0 | 0 | 0 | 0 |
| **1** | 0 | 1 | 2 | 3 | 4 |
| **2** | 0 | 2 | 4 | 1 | 3 |
| **3** | 0 | 3 | 1 | 4 | 2 |
| **4** | 0 | 4 | 3 | 2 | 1 |

| $\times$ mod 6 | 0 | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- | --- |
| **0** | 0 | 0 | 0 | 0 | 0 | 0 |
| **1** | 0 | 1 | 2 | 3 | 4 | 5 |
| **2** | 0 | 2 | 4 | 0 | 2 | 4 |
| **3** | 0 | 3 | 0 | 3 | 0 | 3 |
| **4** | 0 | 4 | 2 | 0 | 4 | 2 |
| **5** | 0 | 5 | 4 | 3 | 2 | 1 |

Look at the difference. Modulo 5, every nonzero row contains each of $0, 1, 2, 3, 4$ exactly once, and every nonzero
row contains a 1. Modulo 6, the rows of 2, 3 and 4 repeat values and never reach 1, and there are products like
$2 \cdot 3 \equiv 0$ with neither factor 0. Section 4.3 explains this. In the language of
[Algebra, chapter 17](../algebra/17-Rings-and-Ideals.md), $\mathbb{Z}/n\mathbb{Z}$ is a **ring**, and it is a **field**
exactly when $n$ is prime.

### Reduce early, reduce often

Theorem 4.2 lets you replace any number by anything congruent to it, at any stage of a calculation. This keeps
numbers small.

**Example 1.** The last digit of $7^{2026}$. The last digit is the remainder mod 10. Powers of 7 mod 10:
$7^1 \equiv 7$, $7^2 = 49 \equiv 9$, $7^3 \equiv 9 \cdot 7 = 63 \equiv 3$, $7^4 \equiv 3 \cdot 7 = 21 \equiv 1$. Once a
power is $\equiv 1$, the pattern repeats with period 4. Since $2026 = 4 \cdot 506 + 2$,

$$7^{2026} = (7^4)^{506} \cdot 7^2 \equiv 1^{506} \cdot 49 \equiv 9 \pmod{10}.$$

The last digit is 9. *Check* (Python): `pow(7, 2026, 10)` gives 9.

**Example 2.** $2^{100} \bmod 7$. $2^3 = 8 \equiv 1 \pmod 7$, and $100 = 3 \cdot 33 + 1$, so
$2^{100} = (2^3)^{33} \cdot 2 \equiv 2 \pmod 7$.

**Example 3.** Is $3^{2n+1} + 2^{n+2}$ divisible by 7 for every $n \ge 0$? Mod 7, $3^{2n+1} = 3 \cdot 9^n \equiv 3 \cdot 2^n$
and $2^{n+2} = 4 \cdot 2^n$, so the sum is $\equiv 7 \cdot 2^n \equiv 0$. Yes, always. (Compare with proving it by
induction: congruences make it one line.)

**Example 4 (the divisibility rules again).** Since $10 \equiv 1 \pmod 9$, Theorem 4.2(4) with
$f(x) = d_k x^k + \dots + d_1 x + d_0$ gives $n = f(10) \equiv f(1) = d_k + \dots + d_0 \pmod 9$: a number is congruent
to its digit sum mod 9. Since $10 \equiv -1 \pmod{11}$, $n = f(10) \equiv f(-1) = d_0 - d_1 + d_2 - \dots \pmod{11}$.
The proofs of [Chapter 1](01-Divisibility.md) shrink to one line each.

**Example 5 (impossible equations).** Squares mod 4 are 0 or 1 ($0^2, 1^2, 2^2, 3^2 \equiv 0, 1, 0, 1$). So
$x^2 + y^2 \equiv 0, 1, 2 \pmod 4$, and $x^2 + y^2 = 2027$ has no integer solutions because $2027 \equiv 3 \pmod 4$.
Looking at an equation modulo a well-chosen $n$ is the first thing a number theorist tries: if there is no solution
mod $n$, there is no solution at all. (The converse is false, and [Chapter 18](18-p-adic-Numbers.md) studies when
"solvable mod everything" implies "solvable".)

### The trap: dividing

You can add, subtract and multiply congruences. You **cannot** always divide. $2 \cdot 3 \equiv 2 \cdot 8 \pmod{10}$
(both sides are $\equiv 6$), but $3 \not\equiv 8 \pmod{10}$. Cancelling the 2 failed because 2 shares a factor with 10.

**Theorem 4.3 (cancellation).** If $ac \equiv bc \pmod n$ and $d = \gcd(c, n)$, then $a \equiv b \pmod{n/d}$. In
particular, if $\gcd(c, n) = 1$, then $ac \equiv bc \pmod n$ implies $a \equiv b \pmod n$.

*Proof.* $n \mid (a - b)c$, so $\frac{n}{d} \mid (a - b)\frac{c}{d}$. By Corollary 3.8, $\gcd(\frac{n}{d}, \frac{c}{d}) = 1$,
and by Corollary 3.6, $\frac{n}{d} \mid a - b$. $\square$

In the example, $d = \gcd(2, 10) = 2$, so we may conclude only $3 \equiv 8 \pmod 5$, which is true.

## 4.3 Inverses modulo $n$

### The question

In ordinary arithmetic, dividing by 3 means multiplying by $\frac13$, the number whose product with 3 is 1. Modulo 7
there are no fractions, but $3 \cdot 5 = 15 \equiv 1 \pmod 7$, so 5 plays the role of $\frac13$. Modulo 6, nothing
times 3 gives 1 (the row of 3 in the table above is $0, 3, 0, 3, 0, 3$).

**Definition.** An integer $a'$ is an **inverse of $a$ modulo $n$** if $a a' \equiv 1 \pmod n$. We write
$a' \equiv a^{-1} \pmod n$. A number with an inverse is a **unit** modulo $n$.

**Theorem 4.4.** $a$ has an inverse modulo $n$ if and only if $\gcd(a, n) = 1$. The inverse is unique modulo $n$, and
it can be found with the extended Euclidean algorithm.

*Proof.* If $\gcd(a, n) = 1$, Bézout (Theorem 3.4) gives integers $x, y$ with $ax + ny = 1$. Then
$ax = 1 - ny \equiv 1 \pmod n$, so $x$ is an inverse. Conversely, if $ax \equiv 1 \pmod n$, then $ax - 1 = ny$ for some
$y$, so $ax - ny = 1$, and any common divisor of $a$ and $n$ divides 1.

Uniqueness: if $ax \equiv 1$ and $ax' \equiv 1$, then $x = x \cdot 1 \equiv x(ax') = (xa)x' \equiv x' \pmod n$. $\square$

**Example 1.** $35^{-1} \bmod 97$. In [Chapter 3](03-GCD-and-Euclids-Algorithm.md), exercise 2, we found
$13 \cdot 97 - 36 \cdot 35 = 1$. So $35 \cdot (-36) \equiv 1 \pmod{97}$, and $35^{-1} \equiv -36 \equiv 61 \pmod{97}$.
*Check:* $35 \cdot 61 = 2135 = 22 \cdot 97 + 1$.

**Example 2.** Inverses mod 11. Since 11 is prime, every number from 1 to 10 has one. Pairing them:

$$1 \cdot 1 \equiv 1, \quad 2 \cdot 6 = 12 \equiv 1, \quad 3 \cdot 4 = 12 \equiv 1, \quad 5 \cdot 9 = 45 \equiv 1, \quad 7 \cdot 8 = 56 \equiv 1, \quad 10 \cdot 10 = 100 \equiv 1 .$$

Only 1 and 10 (that is, $\pm 1$) are their own inverses. This pairing is the heart of Wilson's theorem in
[Chapter 5](05-Fermat-Euler-and-Wilson.md).

**Example 3.** $6^{-1} \bmod 15$ does not exist: $\gcd(6, 15) = 3$, and indeed $6x \bmod 15$ only takes the values
$0, 6, 12, 3, 9$.

!!! note "Try it in Python"

    Since Python 3.8, `pow(a, -1, n)` computes an inverse (it raises `ValueError` if none exists):

    ```python
    print(pow(35, -1, 97))   # 61
    print(pow(17, -1, 43))   # 38
    print([(a, pow(a, -1, 11)) for a in range(1, 11)])
    ```

### Units and fields

The units modulo $n$, that is the classes of $a$ with $\gcd(a, n) = 1$, are closed under multiplication (if $a$ and
$b$ have inverses, $b^{-1}a^{-1}$ is an inverse of $ab$), so they form a group under multiplication, written
$(\mathbb{Z}/n\mathbb{Z})^\times$. The number of units is **Euler's phi function** $\varphi(n)$, the star of
[Chapter 5](05-Fermat-Euler-and-Wilson.md). For example, the units mod 12 are $1, 5, 7, 11$, so $\varphi(12) = 4$.

A non-unit $a \not\equiv 0$ is a **zero divisor**: if $d = \gcd(a, n) > 1$, then $a \cdot \frac{n}{d} = \frac{a}{d} n \equiv 0$
with $\frac{n}{d} \not\equiv 0$. That is the $2 \cdot 3 \equiv 0 \pmod 6$ of the table.

**Corollary 4.5.** If $p$ is prime, every $a \not\equiv 0 \pmod p$ has an inverse modulo $p$. So in
$\mathbb{Z}/p\mathbb{Z}$ you can add, subtract, multiply, and divide by anything nonzero: it is a **field**, usually
written $\mathbb{F}_p$. If $n$ is composite, $\mathbb{Z}/n\mathbb{Z}$ has zero divisors and is not a field.

*Proof.* If $p \nmid a$, then $\gcd(a, p) = 1$ because the only positive divisors of $p$ are 1 and $p$. If $n = ab$
with $1 < a, b < n$, then $a \cdot b \equiv 0$ with $a, b \not\equiv 0$. $\square$

A consequence used constantly: **modulo a prime, if $xy \equiv 0$ then $x \equiv 0$ or $y \equiv 0$** (this is Euclid's
lemma). For example, $x^2 \equiv 1 \pmod p$ means $(x - 1)(x + 1) \equiv 0$, so $x \equiv 1$ or $x \equiv -1$. Modulo 8
this fails: $1, 3, 5, 7$ all square to 1.

## 4.4 Solving linear congruences

### One unknown

**Problem.** Solve $ax \equiv b \pmod n$: find every $x$, or rather every residue class of $x$, that works.

If $\gcd(a, n) = 1$ the answer is immediate: multiply by $a^{-1}$, and $x \equiv a^{-1} b \pmod n$ is the unique
solution. In general:

**Theorem 4.6.** Let $d = \gcd(a, n)$. The congruence $ax \equiv b \pmod n$ has a solution if and only if $d \mid b$. In
that case it has exactly $d$ solutions modulo $n$: if $x_0$ is one, they are

$$x_0, \quad x_0 + \frac{n}{d}, \quad x_0 + 2\frac{n}{d}, \quad \dots, \quad x_0 + (d - 1)\frac{n}{d} .$$

*Proof.* $ax \equiv b \pmod n$ means $ax - b = ny$ for some integer $y$, that is $ax - ny = b$. This is a linear
Diophantine equation, solvable exactly when $d \mid b$ (Theorem 3.9). Its solutions have $x = x_0 + \frac{n}{d}t$ for all
integers $t$. These values of $x$ fall into exactly $d$ classes modulo $n$: $t$ and $t'$ give the same class exactly when
$n \mid \frac{n}{d}(t - t')$, that is when $d \mid t - t'$. So $t = 0, 1, \dots, d - 1$ give one representative of each.
$\square$

**The method.** Divide everything by $d$ to get $\frac{a}{d} x \equiv \frac{b}{d} \pmod{\frac{n}{d}}$, where now
$\gcd(\frac{a}{d}, \frac{n}{d}) = 1$; solve by an inverse; then list the $d$ lifts modulo $n$.

**Example 1.** $6x \equiv 4 \pmod{10}$. $d = 2$ and $2 \mid 4$, so there are 2 solutions. Divide: $3x \equiv 2 \pmod 5$.
$3^{-1} \equiv 2 \pmod 5$ (since $3 \cdot 2 = 6 \equiv 1$), so $x \equiv 4 \pmod 5$. Modulo 10: $x \equiv 4$ or $9$.
*Check:* $6 \cdot 4 = 24 \equiv 4$ and $6 \cdot 9 = 54 \equiv 4 \pmod{10}$.

**Example 2.** $35x \equiv 10 \pmod{50}$. $d = 5$, $5 \mid 10$. Divide: $7x \equiv 2 \pmod{10}$. $7^{-1} \equiv 3 \pmod{10}$
($21 \equiv 1$), so $x \equiv 6 \pmod{10}$. Modulo 50: $x \equiv 6, 16, 26, 36, 46$. *Check:*
$35 \cdot 16 = 560 = 11 \cdot 50 + 10$.

**Example 3.** $12x \equiv 5 \pmod{18}$: $d = 6 \nmid 5$, no solutions. (Reason without the theorem: $12x - 5$ is odd
and $18y$ is even.)

### Several moduli at once

Systems like $x \equiv 2 \pmod 3$, $x \equiv 3 \pmod 5$, $x \equiv 2 \pmod 7$ (the oldest recorded problem of this type,
from the Chinese *Sunzi Suanjing*) are solved by the Chinese remainder theorem, the subject of
[Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md). Its proof uses exactly the inverses of
this section.

## 4.5 Check digits

### The problem

People copy numbers badly. Studies of human copying errors (for example by J. Verhoeff in 1969) found that the most
common are a single wrong digit ($\dots 3 \dots$ becomes $\dots 8 \dots$) and swapping two neighbouring digits ($\dots 47 \dots$
becomes $\dots 74 \dots$). A **check digit** is an extra digit computed from the others so that a congruence holds; a
typo usually breaks the congruence, and the computer knows something is wrong. The design question is pure number
theory: which congruence catches the most errors?

### ISBN-10: a prime modulus catches everything

From 1970 to 2006, books carried a 10-digit International Standard Book Number $d_1 d_2 \dots d_{10}$, with the rule

$$10 d_1 + 9 d_2 + 8 d_3 + \dots + 2 d_9 + 1 \cdot d_{10} \equiv 0 \pmod{11}.$$

The last digit $d_{10}$ is chosen to make this true. It can be any value from 0 to 10, and the value 10 is written X.
Since $11 - i \equiv -i \pmod{11}$, the rule is the same as $\sum_{i=1}^{10} i\, d_i \equiv 0 \pmod{11}$, which is easier to
compute.

**Example.** Make the check digit for the (made-up) number $1\,234\,56789\,?$. With the second form,
$\sum_{i=1}^{9} i \cdot d_i = 1 + 4 + 9 + 16 + 25 + 36 + 49 + 64 + 81 = 285$, and we need $285 + 10 d_{10} \equiv 0$. Since
$10 \equiv -1 \pmod{11}$, this says $d_{10} \equiv 285 \equiv 10 \pmod{11}$. So the ISBN is $1\text{-}234\text{-}56789\text{-}X$.
*Check* with the official weights: $10 \cdot 1 + 9 \cdot 2 + 8 \cdot 3 + 7 \cdot 4 + 6 \cdot 5 + 5 \cdot 6 + 4 \cdot 7 + 3 \cdot 8 + 2 \cdot 9 + 1 \cdot 10 = 220 = 11 \cdot 20$.

**Theorem 4.7.** The ISBN-10 rule detects every single-digit error and every transposition of two digits (adjacent or
not).

*Proof.* Use the form $S = \sum i\,d_i \equiv 0$. If digit $d_i$ is changed to $d_i + e$ with $e \neq 0$, $|e| \le 10$,
then $S$ changes by $ie$. Both $i$ and $e$ are between 1 and 10 in absolute value, so neither is divisible by the prime
11, and by Euclid's lemma $11 \nmid ie$. The new sum is not $\equiv 0$.

If the digits in positions $i < j$ are swapped, $S$ changes by $i d_j + j d_i - i d_i - j d_j = (j - i)(d_i - d_j)$. If
$d_i \neq d_j$ this is a product of two numbers with absolute values between 1 and 10, so again $11$ does not divide it.
$\square$

Everything hinges on 11 being prime. The price is the awkward symbol X.

### ISBN-13 and barcodes: modulus 10 misses some swaps

Since 2007 books use 13-digit ISBNs, the same format as the EAN barcodes on products. The rule has weights
$1, 3, 1, 3, \dots$:

$$d_1 + 3d_2 + d_3 + 3d_4 + \dots + 3d_{12} + d_{13} \equiv 0 \pmod{10}.$$

**Example.** The made-up ISBN-10 above becomes the ISBN-13 $978\text{-}1\text{-}234\text{-}56789\text{-}?$. The weighted
sum of the first twelve digits $9, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 9$ is
$9 + 21 + 8 + 3 + 2 + 9 + 4 + 15 + 6 + 21 + 8 + 27 = 133$, so $d_{13} \equiv -133 \equiv 7 \pmod{10}$: the full number
is $978\text{-}1\text{-}234\text{-}56789\text{-}7$.

**Single errors are caught.** Changing a digit by $e$ (with $0 < |e| \le 9$) changes the sum by $e$ or $3e$. Since
$\gcd(3, 10) = 1$, $3e \equiv 0 \pmod{10}$ forces $e \equiv 0$ (Theorem 4.3), which is impossible.

**Some swaps are missed.** Swapping neighbours $a$ and $b$ changes the sum by $\pm(3a + b - a - 3b) = \pm 2(a - b)$. This is
$\equiv 0 \pmod{10}$ exactly when $a - b \equiv 0 \pmod 5$: the swaps $0 \leftrightarrow 5$, $1 \leftrightarrow 6$,
$2 \leftrightarrow 7$, $3 \leftrightarrow 8$, $4 \leftrightarrow 9$ go undetected. The weight 3 shares no factor with 10,
but the **difference** of the weights, 2, does. That is the cost of using the non-prime modulus 10 to avoid an extra
symbol.

### The Luhn algorithm: credit cards

Credit card numbers, many national identity numbers and the IMEI numbers of mobile phones use a rule patented by Hans
Peter Luhn of IBM (filed 1954, granted 1960). Starting from the rightmost digit (the check digit) and moving left,
double every second digit; if a doubled value exceeds 9, subtract 9 (equivalently, add its two digits). The number is
valid if the total is $\equiv 0 \pmod{10}$.

**Example.** The standard test number $79927398713$. From the right, the digits are $3, 1, 7, 8, 9, 3, 7, 2, 9, 9, 7$.
Double the 2nd, 4th, 6th, 8th and 10th: $1 \to 2$, $8 \to 16 \to 7$, $3 \to 6$, $2 \to 4$, $9 \to 18 \to 9$. Total:
$3 + 2 + 7 + 7 + 9 + 6 + 7 + 4 + 9 + 9 + 7 = 70 \equiv 0$. Valid. If the last digit were 0 instead of 3, the total would
be 67: invalid.

Write $D(x)$ for the doubled-and-reduced value: $D(0), \dots, D(9) = 0, 2, 4, 6, 8, 1, 3, 5, 7, 9$.

**Theorem 4.8.** The Luhn rule detects every single-digit error, and every swap of adjacent digits except
$09 \leftrightarrow 90$.

*Proof.* A single error in an undoubled position changes the total by $e \not\equiv 0$. In a doubled position it changes
$D(x)$ to $D(y)$, and $D$ takes ten different values, so $D(x) \not\equiv D(y) \pmod{10}$ when $x \neq y$.

For adjacent digits $a$ (undoubled) and $b$ (doubled), the pair contributes $a + D(b)$ before the swap and
$b + D(a)$ after. The swap is missed when these agree mod 10, that is when $D(a) - a \equiv D(b) - b$. The values of
$D(x) - x$ for $x = 0, \dots, 9$ are $0, 1, 2, 3, 4, -4, -3, -2, -1, 0$, which modulo 10 are
$0, 1, 2, 3, 4, 6, 7, 8, 9, 0$. These are all different except at $x = 0$ and $x = 9$. So a swap of distinct adjacent
digits is missed only for $\{a, b\} = \{0, 9\}$. $\square$

In 1969 Jacobus Verhoeff found a scheme that catches every single error and every adjacent swap with one decimal check
digit; it replaces addition mod 10 by the multiplication of the dihedral group of order 10
([Algebra, chapter 13](../algebra/13-Groups.md)). No scheme that just adds weighted digits mod 10 can do it, by an
argument like the one for ISBN-13 (exercise 11).

## 4.6 The day of the week

### Counting days mod 7

A week has 7 days, so the weekday of a date is "number of days since a fixed date, mod 7". The task is to count days
modulo 7 without counting them one by one. Three facts do it:

- A common year has $365 = 52 \cdot 7 + 1 \equiv 1 \pmod 7$ days, so the same date moves **one** weekday later each
  year, and **two** after a leap day.
- In the Gregorian calendar (introduced in 1582, adopted in Britain and its colonies in 1752), a year is a leap year if
  it is divisible by 4, except century years, which are leap years only if divisible by 400. So 2000 was a leap year
  and 2100 will not be.
- The months have unequal lengths. The trick, due in this form to Christian Zeller (1880s), is to **start the year in
  March**, so that the awkward February comes last and the leap day is the last day of the year.

### The formula

Number the months March $= 1$, April $= 2$, ..., December $= 10$, January $= 11$, February $= 12$, and count January and
February as belonging to the **previous** year. Let $Y$ be that year, $c = \lfloor Y/100 \rfloor$ the century and
$y = Y \bmod 100$ the year in the century. Then the weekday $w$ of day $d$ of month $m$ is

$$w \equiv d + \left\lfloor 2.6m - 0.2 \right\rfloor + y + \left\lfloor \frac{y}{4} \right\rfloor + \left\lfloor \frac{c}{4} \right\rfloor - 2c \pmod 7,$$

with $w = 0$ for Sunday, $1$ for Monday, ..., $6$ for Saturday.

**Why it works.** Read it term by term, each counting days modulo 7.

- **$d$:** each day of the month moves the weekday by one.
- **The month term.** The months from March have lengths $31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 31$, that is $28$ plus
  $3, 2, 3, 2, 3, 3, 2, 3, 2, 3, 3$. Since $28 \equiv 0 \pmod 7$, the weekday of the first of month $m$ is shifted from
  the first of March by the sum of these excesses for the months before $m$: $0, 3, 5, 8, 10, 13, 16, 18, 21, 23, 26, 29$
  for $m = 1, \dots, 12$. The expression $\lfloor 2.6m - 0.2 \rfloor$ takes the values
  $2, 5, 7, 10, 12, 15, 18, 20, 23, 25, 28, 31$: exactly these plus 2. (The pattern of 3s and 2s repeats every five
  months with total 13, and $13/5 = 2.6$; that is where the 2.6 comes from.) The extra 2 is a constant that fixes the
  starting point of the count.
- **The year terms.** From one March 1 to the next, the weekday moves by 1, or by 2 if the year just ended contains a
  29 February. Counting from year 0, the total shift for year $Y$ is $Y$ plus the number of leap days, which is
  $\lfloor Y/4 \rfloor - \lfloor Y/100 \rfloor + \lfloor Y/400 \rfloor$. Write $Y = 100c + y$; then
  $\lfloor Y/4 \rfloor = 25c + \lfloor y/4 \rfloor$, $\lfloor Y/100 \rfloor = c$ and $\lfloor Y/400 \rfloor = \lfloor c/4 \rfloor$,
  so the shift is $100c + y + 25c + \lfloor y/4 \rfloor - c + \lfloor c/4 \rfloor = 124c + y + \lfloor y/4 \rfloor + \lfloor c/4 \rfloor$.
  Since $124 = 126 - 2 \equiv -2 \pmod 7$, this is $\equiv y + \lfloor y/4 \rfloor + \lfloor c/4 \rfloor - 2c$.

Putting the pieces together gives the formula up to one constant, and that constant has been chosen (absorbed in the
month term's extra 2) so that $w = 0$ means Sunday. Checking a single known date fixes it; a computer check confirms
the formula for every day from 1 March 1600 to 31 December 2400.

**Example 1.** 3 November 2026. November is $m = 9$; $Y = 2026$, $c = 20$, $y = 26$.

$$w \equiv 3 + \lfloor 23.2 \rfloor + 26 + 6 + 5 - 40 = 3 + 23 + 26 + 6 + 5 - 40 = 23 \equiv 2 \pmod 7 .$$

A Tuesday. *Check:* it was.

**Example 2.** 20 July 1969, the first Moon landing. $m = 5$, $c = 19$, $y = 69$:
$20 + 12 + 69 + 17 + 4 - 38 = 84 \equiv 0$. A Sunday.

**Example 3.** 1 January 2000. January counts as month 11 of 1999: $c = 19$, $y = 99$:
$1 + 28 + 99 + 24 + 4 - 38 = 118 = 16 \cdot 7 + 6 \equiv 6$. A Saturday.

!!! note "Try it in Python"

    ```python
    import datetime

    def weekday(d, m, Y):
        m = (m - 3) % 12 + 1          # March = 1, ..., February = 12
        if m >= 11:                   # January and February
            Y -= 1
        c, y = divmod(Y, 100)
        return (d + (26*m - 2)//10 + y + y//4 + c//4 - 2*c) % 7   # 0 = Sunday

    print(weekday(3, 11, 2026))                      # 2, Tuesday
    print(datetime.date(2026, 11, 3).isoweekday() % 7)   # 2 as well
    ```

    Writing $(26m - 2)/10$ in place of $2.6m - 0.2$ keeps the arithmetic in integers.

John Conway's "Doomsday rule" (1973) is a way to do the same count in your head, using the fact that certain
easy-to-remember dates (4/4, 6/6, 8/8, 10/10, 12/12, the last day of February) all fall on the same weekday in any
given year.

### A note on Mars

Mars does not fit a seven-day week neatly either: a Martian solar day, the **sol**, lasts about 24 hours 39 minutes
35 seconds, and a Mars year is about 668.6 sols. Rover teams number their sols from landing day rather than use weeks,
and calendars proposed for Mars face the same arithmetic problem as Zeller's: fitting whole days into a year that is not
a whole number of days. [Chapter 10](10-Continued-Fractions.md) shows how continued fractions choose the best leap-year
rules.

## A short history thread

The idea of working with remainders is ancient: Chinese and Indian astronomers solved remainder problems for
calendars, and the *Sunzi Suanjing* (between the third and fifth centuries) poses the "3, 5, 7" problem mentioned in
section 4.4. Euler worked with remainders throughout his number theory in the 18th century.

The notation $a \equiv b \pmod n$ and the systematic theory are due to Carl Friedrich Gauss, in the first section of
his *Disquisitiones Arithmeticae* (1801), written when he was in his early twenties. Gauss chose the symbol $\equiv$
because of the strong analogy with equality, and the book's influence made it universal.

Check digits are a 20th-century application. The ISBN system was standardised as ISO 2108 in 1970; Luhn's patent was
granted in 1960; Verhoeff's study of error patterns and his dihedral-group scheme appeared in 1969. Zeller published
his weekday formulas in the 1880s; Gauss had earlier given a rule for the weekday of 1 January.

## Check yourself

??? question "1. Find $2^{100} \bmod 11$ and $3^{100} \bmod 100$ (the last two digits of $3^{100}$)."

    Mod 11: $2^5 = 32 \equiv -1$, so $2^{10} \equiv 1$ and $2^{100} = (2^{10})^{10} \equiv 1$.

    Mod 100: $3^5 = 243 \equiv 43$, $3^{10} \equiv 43^2 = 1849 \equiv 49$, $3^{20} \equiv 49^2 = 2401 \equiv 1$. So
    $3^{100} = (3^{20})^5 \equiv 1 \pmod{100}$: the last two digits are 01.

??? question "2. Find $17^{-1} \bmod 43$."

    Euclid: $43 = 2 \cdot 17 + 9$; $17 = 1 \cdot 9 + 8$; $9 = 1 \cdot 8 + 1$. Back up:
    $1 = 9 - 8 = 9 - (17 - 9) = 2 \cdot 9 - 17 = 2(43 - 2 \cdot 17) - 17 = 2 \cdot 43 - 5 \cdot 17$. So
    $17^{-1} \equiv -5 \equiv 38 \pmod{43}$. *Check:* $17 \cdot 38 = 646 = 15 \cdot 43 + 1$.

??? question "3. Solve $14x \equiv 21 \pmod{35}$."

    $d = \gcd(14, 35) = 7$, and $7 \mid 21$: seven solutions. Divide by 7: $2x \equiv 3 \pmod 5$. $2^{-1} \equiv 3$, so
    $x \equiv 9 \equiv 4 \pmod 5$. Modulo 35: $x \equiv 4, 9, 14, 19, 24, 29, 34$. *Check:* $14 \cdot 4 = 56 = 35 + 21$.

??? question "4. Does $12x \equiv 5 \pmod{18}$ have a solution? Does $12x \equiv 6 \pmod{18}$?"

    $\gcd(12, 18) = 6$. Since $6 \nmid 5$, the first has none. Since $6 \mid 6$, the second has six solutions:
    $2x \equiv 1 \pmod 3$ gives $x \equiv 2 \pmod 3$, so $x \equiv 2, 5, 8, 11, 14, 17 \pmod{18}$.

??? question "5. Show that squares mod 8 are 0, 1 or 4, and deduce that no number $\equiv 7 \pmod 8$ is a sum of three squares."

    $0^2, 1^2, \dots, 7^2 \equiv 0, 1, 4, 1, 0, 1, 4, 1 \pmod 8$. A sum of three values from $\{0, 1, 4\}$ is at most
    12, and checking all combinations, the possible sums mod 8 are $0, 1, 2, 3, 4, 5, 6$ (for example
    $4 + 1 + 1 = 6$, $4 + 4 + 1 = 9 \equiv 1$, $4 + 4 + 4 = 12 \equiv 4$), never 7. So $7, 15, 23, \dots$ are not sums of
    three squares. ([Chapter 11](11-Sums-of-Squares.md) states exactly which numbers are.)

??? question "6. Find the ISBN-10 check digit for the made-up number $0\text{-}19\text{-}123456\text{-}?$."

    $\sum_{i=1}^{9} i\,d_i$ with digits $0, 1, 9, 1, 2, 3, 4, 5, 6$:
    $0 + 2 + 27 + 4 + 10 + 18 + 28 + 40 + 54 = 183$. We need $d_{10} \equiv 183 \pmod{11}$, and $183 = 16 \cdot 11 + 7$.
    The check digit is 7.

??? question "7. Is $4539\,1488\,0343\,6467$ a valid Luhn number?"

    From the right the digits are $7, 6, 4, 6, 3, 4, 3, 0, 8, 8, 4, 1, 9, 3, 5, 4$. Keep the 1st, 3rd, ...:
    $7 + 4 + 3 + 3 + 8 + 4 + 9 + 5 = 43$. Double the 2nd, 4th, ...: $6, 6, 4, 0, 8, 1, 3, 4$ give
    $12 \to 3$, $12 \to 3$, $8$, $0$, $16 \to 7$, $2$, $6$, $8$, total $37$. Sum $43 + 37 = 80 \equiv 0$. Valid.

??? question "8. Prove that $n^5 \equiv n \pmod{30}$ for every integer $n$."

    By Corollary 3.7 it is enough to show $n^5 \equiv n$ mod 2, mod 3 and mod 5 (since 2, 3, 5 are pairwise
    coprime, divisibility by each gives divisibility by 30). Check every residue: mod 2, $0^5 = 0$, $1^5 = 1$. Mod 3,
    $2^5 = 32 \equiv 2$. Mod 5, $2^5 = 32 \equiv 2$, $3^5 = 243 \equiv 3$, $4^5 = 1024 \equiv 4$. (Chapter 5's
    Fermat's little theorem explains why this had to work.)

??? question "9. On what day of the week will 1 January 2100 fall?"

    January counts as month $m = 11$ of 2099: $c = 20$, $y = 99$.
    $w \equiv 1 + \lfloor 28.4 \rfloor + 99 + 24 + 5 - 40 = 1 + 28 + 99 + 24 + 5 - 40 = 117 = 16 \cdot 7 + 5 \equiv 5$.
    A Friday.

??? question "10. Show that if $p$ is prime and $x^2 \equiv 1 \pmod p$, then $x \equiv \pm 1 \pmod p$. Find all solutions of $x^2 \equiv 1 \pmod{15}$ to see that this fails for composite moduli."

    $p \mid x^2 - 1 = (x - 1)(x + 1)$, so by Euclid's lemma $p \mid x - 1$ or $p \mid x + 1$.

    Mod 15, checking $0, \dots, 14$: $x \equiv 1, 4, 11, 14$. Here $4^2 = 16 \equiv 1$ although $4 \not\equiv \pm 1$; this
    happens because $15 \mid (4 - 1)(4 + 1) = 15$ with neither factor divisible by 15.

??? question "11. Show that no check-digit rule of the form $\sum w_i d_i \equiv 0 \pmod{10}$, with integer weights, can detect every single-digit error and every adjacent swap."

    To catch every single error in position $i$, we need $w_i e \not\equiv 0 \pmod{10}$ for all $e = 1, \dots, 9$, so
    $w_i$ must be coprime to 10 (if $\gcd(w_i, 10) = 2$ take $e = 5$; if it is 5 take $e = 2$; if it is 10, any $e$).
    So every weight is odd. A swap of neighbours $a, b$ in positions $i, i+1$ changes the sum by
    $(w_i - w_{i+1})(b - a)$, and $w_i - w_{i+1}$ is a difference of two odd numbers, hence even. Taking $b - a = 5$
    (for example $a = 0$, $b = 5$) makes the change a multiple of 10, so that swap is missed.

??? question "12. Find the smallest positive $x$ with $x \equiv 3 \pmod 4$ and $3x \equiv 5 \pmod 7$."

    $3^{-1} \equiv 5 \pmod 7$ (since $15 \equiv 1$), so the second says $x \equiv 25 \equiv 4 \pmod 7$. Numbers
    $\equiv 4 \pmod 7$: $4, 11, 18, 25, \dots$; the first that is $\equiv 3 \pmod 4$ is $11$. *Check:* $11 = 2 \cdot 4 + 3$,
    and $33 = 4 \cdot 7 + 5$. (Chapter 6 shows that the answer is unique modulo 28.)

## What you learned

- $a \equiv b \pmod n$ means $n \mid a - b$, or equivalently that $a$ and $b$ leave the same remainder; it sorts the
  integers into $n$ residue classes, the elements of $\mathbb{Z}/n\mathbb{Z}$.
- Congruences can be added, subtracted, multiplied and raised to powers, so you can reduce at every step of a
  calculation. Cancelling a factor $c$ is safe only when $\gcd(c, n) = 1$.
- $a$ has an inverse mod $n$ exactly when $\gcd(a, n) = 1$, found by the extended Euclidean algorithm; modulo a prime
  every nonzero class is invertible, so $\mathbb{Z}/p\mathbb{Z}$ is a field.
- $ax \equiv b \pmod n$ is solvable exactly when $\gcd(a, n) \mid b$, and then has $\gcd(a, n)$ solutions mod $n$.
- Check digits are congruences: a prime modulus (ISBN-10) catches every single error and swap; modulus 10 (ISBN-13,
  Luhn) must miss some swaps.
- The weekday of any date is a sum of day, month, year and century terms modulo 7.

**Next:** [Chapter 5](05-Fermat-Euler-and-Wilson.md), the three great theorems about powers and factorials modulo
$n$, fast powering, and the numbers that fool Fermat's test.

## Further reading

- Carl Friedrich Gauss, *Disquisitiones Arithmeticae* (1801), Section I; English translation by A. A. Clarke, 1966.
- Harold Davenport, *The Higher Arithmetic*, 8th edition, 2008. Chapter II.
- Ivan Niven, Herbert S. Zuckerman and Hugh L. Montgomery, *An Introduction to the Theory of Numbers*, 5th edition,
  1991. Sections 2.1 to 2.3.
- Joseph A. Gallian, "The mathematics of identification numbers", *The College Mathematics Journal* 22 (1991).
  A readable survey of check-digit schemes.
- J. Verhoeff, *Error Detecting Decimal Codes*, Mathematical Centre Tracts 29, Amsterdam, 1969.
- Edward M. Reingold and Nachum Dershowitz, *Calendrical Calculations*, 3rd edition, 2008. Every calendar, with
  algorithms.
- On this site: the U of T guide [MAT240H1 Unit 1: Fields & Vector Spaces](../../uoft/MAT240H1/unit01.md), where
  $\mathbb{Z}/p\mathbb{Z}$ appears as a field; [Algebra, chapter 13](../algebra/13-Groups.md) and
  [Algebra, chapter 17](../algebra/17-Rings-and-Ideals.md) for groups and rings such as $\mathbb{Z}/n\mathbb{Z}$; and
  the cryptography book's [The arithmetic of secrets](https://cryptography.akadian.ca/book/03-The-Arithmetic-of-Secrets/),
  where congruences modulo huge numbers carry encrypted messages.
