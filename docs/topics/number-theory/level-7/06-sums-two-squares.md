---
title: "Sums of two squares"
---

# Sums of two squares

*Number theory · level 7, lesson 6 of 6*

## A question to start

The year 2025 was a perfect square: $2025 = 45^2$. The year 2026 is a **sum of two squares**: $2026 = 45^2 + 1^2$.
What about 2027? You can try $44^2 + \ldots$, $43^2 + \ldots$, all the way down, and nothing works. In fact you do
not need to try anything: one division by 4 proves that 2027 can never be written as the sum of two squares.

Which numbers can? In 1640 Pierre de Fermat claimed a beautiful answer for the primes, and the full answer for all
numbers came out of it. This lesson proves most of it with tools from this level.

## The idea

### Which numbers are sums of two squares?

We ask which whole numbers $n$ can be written as $n = a^2 + b^2$ with $a$ and $b$ whole numbers ($0$ allowed, so
every square counts: $9 = 3^2 + 0^2$). In the grid below the numbers up to 50 that **are** sums of two squares are
orange. The numbers that are 3 more than a multiple of 4 (3, 7, 11, ...) are blue.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 200" role="img" aria-label="The numbers 1 to 50 in a grid of ten columns. Sums of two squares are orange: 1, 2, 4, 5, 8, 9, 10, 13, 16, 17, 18, 20, 25, 26, 29, 32, 34, 36, 37, 40, 41, 45, 49, 50. Numbers of the form 4k plus 3 are blue, and none of them is orange">
  <rect x="10" y="10" width="28" height="28" fill="#eea66f" stroke="currentColor"/><text x="24" y="29" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <rect x="38" y="10" width="28" height="28" fill="#eea66f" stroke="currentColor"/><text x="52" y="29" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <rect x="66" y="10" width="28" height="28" fill="#9cc9ea" stroke="currentColor"/><text x="80" y="29" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <rect x="94" y="10" width="28" height="28" fill="#eea66f" stroke="currentColor"/><text x="108" y="29" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <rect x="122" y="10" width="28" height="28" fill="#eea66f" stroke="currentColor"/><text x="136" y="29" font-size="12" text-anchor="middle" fill="currentColor">5</text>
  <rect x="150" y="10" width="28" height="28" fill="none" stroke="currentColor"/><text x="164" y="29" font-size="12" text-anchor="middle" fill="currentColor">6</text>
  <rect x="178" y="10" width="28" height="28" fill="#9cc9ea" stroke="currentColor"/><text x="192" y="29" font-size="12" text-anchor="middle" fill="currentColor">7</text>
  <rect x="206" y="10" width="28" height="28" fill="#eea66f" stroke="currentColor"/><text x="220" y="29" font-size="12" text-anchor="middle" fill="currentColor">8</text>
  <rect x="234" y="10" width="28" height="28" fill="#eea66f" stroke="currentColor"/><text x="248" y="29" font-size="12" text-anchor="middle" fill="currentColor">9</text>
  <rect x="262" y="10" width="28" height="28" fill="#eea66f" stroke="currentColor"/><text x="276" y="29" font-size="12" text-anchor="middle" fill="currentColor">10</text>
  <rect x="10" y="38" width="28" height="28" fill="#9cc9ea" stroke="currentColor"/><text x="24" y="57" font-size="12" text-anchor="middle" fill="currentColor">11</text>
  <rect x="38" y="38" width="28" height="28" fill="none" stroke="currentColor"/><text x="52" y="57" font-size="12" text-anchor="middle" fill="currentColor">12</text>
  <rect x="66" y="38" width="28" height="28" fill="#eea66f" stroke="currentColor"/><text x="80" y="57" font-size="12" text-anchor="middle" fill="currentColor">13</text>
  <rect x="94" y="38" width="28" height="28" fill="none" stroke="currentColor"/><text x="108" y="57" font-size="12" text-anchor="middle" fill="currentColor">14</text>
  <rect x="122" y="38" width="28" height="28" fill="#9cc9ea" stroke="currentColor"/><text x="136" y="57" font-size="12" text-anchor="middle" fill="currentColor">15</text>
  <rect x="150" y="38" width="28" height="28" fill="#eea66f" stroke="currentColor"/><text x="164" y="57" font-size="12" text-anchor="middle" fill="currentColor">16</text>
  <rect x="178" y="38" width="28" height="28" fill="#eea66f" stroke="currentColor"/><text x="192" y="57" font-size="12" text-anchor="middle" fill="currentColor">17</text>
  <rect x="206" y="38" width="28" height="28" fill="#eea66f" stroke="currentColor"/><text x="220" y="57" font-size="12" text-anchor="middle" fill="currentColor">18</text>
  <rect x="234" y="38" width="28" height="28" fill="#9cc9ea" stroke="currentColor"/><text x="248" y="57" font-size="12" text-anchor="middle" fill="currentColor">19</text>
  <rect x="262" y="38" width="28" height="28" fill="#eea66f" stroke="currentColor"/><text x="276" y="57" font-size="12" text-anchor="middle" fill="currentColor">20</text>
  <rect x="10" y="66" width="28" height="28" fill="none" stroke="currentColor"/><text x="24" y="85" font-size="12" text-anchor="middle" fill="currentColor">21</text>
  <rect x="38" y="66" width="28" height="28" fill="none" stroke="currentColor"/><text x="52" y="85" font-size="12" text-anchor="middle" fill="currentColor">22</text>
  <rect x="66" y="66" width="28" height="28" fill="#9cc9ea" stroke="currentColor"/><text x="80" y="85" font-size="12" text-anchor="middle" fill="currentColor">23</text>
  <rect x="94" y="66" width="28" height="28" fill="none" stroke="currentColor"/><text x="108" y="85" font-size="12" text-anchor="middle" fill="currentColor">24</text>
  <rect x="122" y="66" width="28" height="28" fill="#eea66f" stroke="currentColor"/><text x="136" y="85" font-size="12" text-anchor="middle" fill="currentColor">25</text>
  <rect x="150" y="66" width="28" height="28" fill="#eea66f" stroke="currentColor"/><text x="164" y="85" font-size="12" text-anchor="middle" fill="currentColor">26</text>
  <rect x="178" y="66" width="28" height="28" fill="#9cc9ea" stroke="currentColor"/><text x="192" y="85" font-size="12" text-anchor="middle" fill="currentColor">27</text>
  <rect x="206" y="66" width="28" height="28" fill="none" stroke="currentColor"/><text x="220" y="85" font-size="12" text-anchor="middle" fill="currentColor">28</text>
  <rect x="234" y="66" width="28" height="28" fill="#eea66f" stroke="currentColor"/><text x="248" y="85" font-size="12" text-anchor="middle" fill="currentColor">29</text>
  <rect x="262" y="66" width="28" height="28" fill="none" stroke="currentColor"/><text x="276" y="85" font-size="12" text-anchor="middle" fill="currentColor">30</text>
  <rect x="10" y="94" width="28" height="28" fill="#9cc9ea" stroke="currentColor"/><text x="24" y="113" font-size="12" text-anchor="middle" fill="currentColor">31</text>
  <rect x="38" y="94" width="28" height="28" fill="#eea66f" stroke="currentColor"/><text x="52" y="113" font-size="12" text-anchor="middle" fill="currentColor">32</text>
  <rect x="66" y="94" width="28" height="28" fill="none" stroke="currentColor"/><text x="80" y="113" font-size="12" text-anchor="middle" fill="currentColor">33</text>
  <rect x="94" y="94" width="28" height="28" fill="#eea66f" stroke="currentColor"/><text x="108" y="113" font-size="12" text-anchor="middle" fill="currentColor">34</text>
  <rect x="122" y="94" width="28" height="28" fill="#9cc9ea" stroke="currentColor"/><text x="136" y="113" font-size="12" text-anchor="middle" fill="currentColor">35</text>
  <rect x="150" y="94" width="28" height="28" fill="#eea66f" stroke="currentColor"/><text x="164" y="113" font-size="12" text-anchor="middle" fill="currentColor">36</text>
  <rect x="178" y="94" width="28" height="28" fill="#eea66f" stroke="currentColor"/><text x="192" y="113" font-size="12" text-anchor="middle" fill="currentColor">37</text>
  <rect x="206" y="94" width="28" height="28" fill="none" stroke="currentColor"/><text x="220" y="113" font-size="12" text-anchor="middle" fill="currentColor">38</text>
  <rect x="234" y="94" width="28" height="28" fill="#9cc9ea" stroke="currentColor"/><text x="248" y="113" font-size="12" text-anchor="middle" fill="currentColor">39</text>
  <rect x="262" y="94" width="28" height="28" fill="#eea66f" stroke="currentColor"/><text x="276" y="113" font-size="12" text-anchor="middle" fill="currentColor">40</text>
  <rect x="10" y="122" width="28" height="28" fill="#eea66f" stroke="currentColor"/><text x="24" y="141" font-size="12" text-anchor="middle" fill="currentColor">41</text>
  <rect x="38" y="122" width="28" height="28" fill="none" stroke="currentColor"/><text x="52" y="141" font-size="12" text-anchor="middle" fill="currentColor">42</text>
  <rect x="66" y="122" width="28" height="28" fill="#9cc9ea" stroke="currentColor"/><text x="80" y="141" font-size="12" text-anchor="middle" fill="currentColor">43</text>
  <rect x="94" y="122" width="28" height="28" fill="none" stroke="currentColor"/><text x="108" y="141" font-size="12" text-anchor="middle" fill="currentColor">44</text>
  <rect x="122" y="122" width="28" height="28" fill="#eea66f" stroke="currentColor"/><text x="136" y="141" font-size="12" text-anchor="middle" fill="currentColor">45</text>
  <rect x="150" y="122" width="28" height="28" fill="none" stroke="currentColor"/><text x="164" y="141" font-size="12" text-anchor="middle" fill="currentColor">46</text>
  <rect x="178" y="122" width="28" height="28" fill="#9cc9ea" stroke="currentColor"/><text x="192" y="141" font-size="12" text-anchor="middle" fill="currentColor">47</text>
  <rect x="206" y="122" width="28" height="28" fill="none" stroke="currentColor"/><text x="220" y="141" font-size="12" text-anchor="middle" fill="currentColor">48</text>
  <rect x="234" y="122" width="28" height="28" fill="#eea66f" stroke="currentColor"/><text x="248" y="141" font-size="12" text-anchor="middle" fill="currentColor">49</text>
  <rect x="262" y="122" width="28" height="28" fill="#eea66f" stroke="currentColor"/><text x="276" y="141" font-size="12" text-anchor="middle" fill="currentColor">50</text>
  <rect x="20" y="166" width="16" height="16" fill="#eea66f" stroke="currentColor"/>
  <text x="42" y="179" font-size="12" fill="currentColor">a² + b²</text>
  <rect x="140" y="166" width="16" height="16" fill="#9cc9ea" stroke="currentColor"/>
  <text x="162" y="179" font-size="12" fill="currentColor">4k + 3</text>
</svg>
</div>

Two things jump out. **No blue number is orange.** And among the other numbers some are sums (5, 13, 17, 29, 37, 41)
and some are not (21, 33).

### Numbers of the form $4k + 3$ never are

This is the one-division proof. Every square is 0 or 1 mod 4 (lesson 5: $(2k)^2 = 4k^2$ and
$(2k+1)^2 = 4k^2 + 4k + 1$). So $a^2 + b^2$ mod 4 is one of

$$0 + 0 = 0, \qquad 0 + 1 = 1, \qquad 1 + 1 = 2.$$

It is **never 3**. Since $2027 = 506 \times 4 + 3$, the year 2027 is not a sum of two squares. Neither is any number
3 more than a multiple of 4.

### The primes: Fermat's two-square theorem

Now look at the primes only. $2 = 1^2 + 1^2$. The odd primes are either $4k + 1$ or $4k + 3$, and the second kind is
ruled out above. What about the first kind?

| $p$ | 5 | 13 | 17 | 29 | 37 | 41 | 53 | 61 | 73 | 89 | 97 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $a^2 + b^2$ | $1 + 4$ | $4 + 9$ | $1 + 16$ | $4 + 25$ | $1 + 36$ | $16 + 25$ | $4 + 49$ | $25 + 36$ | $9 + 64$ | $25 + 64$ | $16 + 81$ |

Every one of them works.

> **Fermat's two-square theorem.** An odd prime $p$ is a sum of two squares exactly when $p \equiv 1 \pmod 4$. In
> that case it can be done in only one way (apart from swapping $a$ and $b$).

Fermat stated this in a letter to Marin Mersenne dated Christmas Day 1640, so it is sometimes called Fermat's
Christmas theorem. As usual he gave no proof. Euler published the first full proof in the 1750s, after years of work.
The "never" half for $4k + 3$ you have just proved. The "always" half for $4k + 1$ is harder; at the end of this lesson
there is a complete proof that uses one fact from level 8.

### Multiplying sums of two squares

Here is an identity you can check by expanding both sides:

$$(a^2 + b^2)(c^2 + d^2) = (ac - bd)^2 + (ad + bc)^2.$$

The right side is $a^2c^2 - 2abcd + b^2d^2 + a^2d^2 + 2abcd + b^2c^2$; the $2abcd$ terms cancel, and what is left is
$a^2c^2 + a^2d^2 + b^2c^2 + b^2d^2$, which is the left side. It appears in the work of the Indian mathematician
Brahmagupta (7th century) and in Fibonacci's *Book of Squares* (1225).

It says: **the product of two sums of two squares is again a sum of two squares.** For example
$5 = 1^2 + 2^2$ and $13 = 2^2 + 3^2$, so with $a = 1, b = 2, c = 2, d = 3$:

$$65 = (2 - 6)^2 + (3 + 4)^2 = 16 + 49 = 4^2 + 7^2.$$

Swapping the roles of $c$ and $d$ gives a second way: $65 = (3 - 4)^2 + (2 + 6)^2 = 1^2 + 8^2$. So 65 is a sum of two
squares in two different ways, because it is a product of two different primes of the form $4k + 1$.

(If you know complex numbers: this identity is $|z|^2 |w|^2 = |zw|^2$ for $z = a + bi$ and $w = c + di$. See
[Numbers](../../numbers/index.md).)

### The full answer

Putting the pieces together gives the answer for every whole number.

> **Two-square theorem.** A whole number $n \ge 1$ is a sum of two squares exactly when every prime of the form
> $4k + 3$ appears in its prime factorisation an **even** number of times.

**Why such numbers are sums.** Split $n$ into its prime factors. Each factor 2 is $1^2 + 1^2$; each prime
$p \equiv 1 \pmod 4$ is a sum of two squares by Fermat; and a pair $q^2$ of a $4k + 3$ prime is $q^2 + 0^2$. Multiply
them all together, two at a time, with the identity above: the result stays a sum of two squares.

**Why other numbers are not.** This needs a key fact.

> If a prime $q \equiv 3 \pmod 4$ divides $a^2 + b^2$, then $q$ divides both $a$ and $b$.

*Proof.* Suppose $q$ does not divide $a$. Then $a$ has an inverse mod $q$ (level 6); call $x = b \cdot a^{-1}$. From
$a^2 + b^2 \equiv 0$ we get, multiplying by $(a^{-1})^2$, that $1 + x^2 \equiv 0$, that is, $x^2 \equiv -1
\pmod q$. Now raise both sides to the power $\tfrac{q-1}{2}$. Since $q = 4k + 3$, this power is $2k + 1$, an odd
number. The left side becomes $x^{q-1} \equiv 1$ by Fermat's little theorem (lesson 1). The right side becomes
$(-1)^{2k+1} = -1$. So $1 \equiv -1 \pmod q$, which means $q$ divides 2: impossible for $q \ge 3$. So $q$ divides $a$,
and then $q$ divides $b^2 = (a^2 + b^2) - a^2$, so (Euclid's lemma) $q$ divides $b$. ∎

So if $q \equiv 3 \pmod 4$ divides $a^2 + b^2$, then $q^2$ divides it too, and dividing $a$ and $b$ by $q$ gives a
smaller sum of two squares, $\left(\tfrac aq\right)^2 + \left(\tfrac bq\right)^2 = \tfrac{n}{q^2}$. Repeat. The
factors $q$ come off in pairs, so $q$ appears an even number of times in $n$.

For example $21 = 3 \times 7$ has 3 (and 7) once: not a sum of two squares, even though $21 \equiv 1 \pmod 4$. But
$45 = 3^2 \times 5$ has 3 twice: $45 = 3^2 + 6^2$.

### Why $4k + 1$ primes are sums: a proof by pigeonholes

Level 8 (lesson 6) proves that **$-1$ is a square mod $p$ when $p \equiv 1 \pmod 4$**: there is an $x$ with
$x^2 \equiv -1 \pmod p$. For $p = 13$, $x = 5$ works: $25 = 26 - 1$. Granting that, here is how to finish.

Let $s$ be the whole number with $s < \sqrt p < s + 1$ ($\sqrt p$ is not whole, since $p$ is prime). Look at all the
numbers $u + xv$ with $u$ and $v$ each in $\{0, 1, \ldots, s\}$. There are $(s + 1)^2 > p$ choices of the pair
$(u, v)$, but only $p$ remainders mod $p$. So two different pairs give the same remainder (this is the **pigeonhole
principle**: more pigeons than holes means two share a hole):

$$u_1 + x v_1 \equiv u_2 + x v_2 \pmod p.$$

Let $a = u_1 - u_2$ and $b = v_1 - v_2$. Then $a \equiv -xb$, so $a^2 \equiv x^2 b^2 \equiv -b^2$, that is,
$p$ divides $a^2 + b^2$. Also $a$ and $b$ are not both 0, and each is at most $s$ in size, so
$0 < a^2 + b^2 \le 2s^2 < 2p$. The only multiple of $p$ strictly between 0 and $2p$ is $p$ itself. So
$a^2 + b^2 = p$. ∎

For $p = 13$, $x = 5$, $s = 3$: the pair $b = 2$ gives $a \equiv -10 \equiv 3$, and $3^2 + 2^2 = 13$. ✓

## Worked examples

**1. Is 333 a sum of two squares?** $333 = 3^2 \times 37$. The only $4k + 3$ prime is 3, and it appears twice; 37 is
$4 \times 9 + 1$. So yes. $37 = 1^2 + 6^2$, and multiplying by $3^2$: $333 = 3^2 + 18^2$. Check: $9 + 324 = 333$. ✓

**2. Is 300 a sum of two squares?** $300 = 2^2 \times 3 \times 5^2$. The prime 3 appears **once**, so no. (Note
$300 \equiv 0 \pmod 4$, so the quick mod-4 test could not decide this one.)

**3. Write 221 as a sum of two squares in two ways.** $221 = 13 \times 17$, with $13 = 2^2 + 3^2$ and
$17 = 1^2 + 4^2$. The identity with $a = 2, b = 3, c = 1, d = 4$: $(2 - 12)^2 + (8 + 3)^2 = 100 + 121$, so
$221 = 10^2 + 11^2$. With $c$ and $d$ swapped ($c = 4, d = 1$): $(8 - 3)^2 + (2 + 12)^2 = 25 + 196$, so
$221 = 5^2 + 14^2$.

**4. Is 2026 a sum of two squares, by the theorem?** $2026 = 2 \times 1013$, and 1013 is prime with
$1013 = 253 \times 4 + 1$. So yes: no $4k + 3$ prime at all. Indeed $1013 = 22^2 + 23^2$, and
$2 \times 1013 = (1^2 + 1^2)(22^2 + 23^2) = (22 - 23)^2 + (23 + 22)^2 = 1 + 2025$.

**5. 98 and 63.** $98 = 2 \times 7^2$: the 7 appears twice, so yes, $98 = 7^2 + 7^2$. $63 = 3^2 \times 7$: the 7
appears once, so no.

## Try it

1. Without trying any squares, explain why 999 and 1003 are not sums of two squares.
2. Write 29, 37 and 41 as sums of two squares.
3. Use the identity to write $5 \times 29 = 145$ as a sum of two squares in two ways.
4. Which of these are sums of two squares: 90, 147, 490, 500? Give a sum for each one that is.
5. Show that $1105 = 5 \times 13 \times 17$ is a sum of two squares in at least two ways.
6. Prove that if $n$ is a sum of two squares, so is $2n$. (Hint: $2 = 1^2 + 1^2$.)
7. For $p = 17$, $x = 4$ satisfies $x^2 \equiv -1 \pmod{17}$. Follow the pigeonhole proof: find $b$ in $\{1, 2, 3,
   4\}$ and the matching small $a \equiv -4b \pmod{17}$ with $a^2 + b^2 = 17$.

??? note "Answers"
    1. $999 = 249 \times 4 + 3$ and $1003 = 250 \times 4 + 3$. Both are 3 mod 4, and a sum of two squares is 0, 1 or
       2 mod 4.
    2. $29 = 2^2 + 5^2$, $37 = 1^2 + 6^2$, $41 = 4^2 + 5^2$.
    3. $5 = 1^2 + 2^2$, $29 = 2^2 + 5^2$. With $a = 1, b = 2, c = 2, d = 5$: $(2 - 10)^2 + (5 + 4)^2 = 64 + 81$, so
       $145 = 8^2 + 9^2$. With $c = 5, d = 2$: $(5 - 4)^2 + (2 + 10)^2 = 1 + 144$, so $145 = 1^2 + 12^2$.
    4. $90 = 2 \times 3^2 \times 5$: yes, $90 = 3^2 + 9^2$. $147 = 3 \times 7^2$: 3 appears once, **no**.
       $490 = 2 \times 5 \times 7^2$: yes, $490 = 7^2 + 21^2$. $500 = 2^2 \times 5^3$: yes, $500 = 10^2 + 20^2$.
    5. $65 = 5 \times 13 = 1^2 + 8^2 = 4^2 + 7^2$, and $17 = 1^2 + 4^2$. From $(4^2 + 7^2)(1^2 + 4^2)$:
       $(4 - 28)^2 + (16 + 7)^2 = 576 + 529$, so $1105 = 24^2 + 23^2$; swapping gives
       $(16 - 7)^2 + (4 + 28)^2 = 81 + 1024$, so $1105 = 9^2 + 32^2$. (There are four ways in all:
       $4^2 + 33^2$, $9^2 + 32^2$, $12^2 + 31^2$, $23^2 + 24^2$.)
    6. If $n = a^2 + b^2$, then $2n = (1^2 + 1^2)(a^2 + b^2) = (a - b)^2 + (a + b)^2$. Check:
       $(a - b)^2 + (a + b)^2 = 2a^2 + 2b^2$. ✓
    7. $-4b \bmod 17$ for $b = 1, 2, 3, 4$ is $13, 9, 5, 1$. The small ones (at most $s = 4$, since
       $4 < \sqrt{17} < 5$) are $b = 4$, $a = 1$: $1^2 + 4^2 = 17$. ✓ (Using $a \equiv -13 \equiv 4$ for $b = 1$ gives
       the same pair the other way round.)

## Common mistake

**Thinking every number that is 1 mod 4 is a sum of two squares.** The mod-4 test only rules numbers **out**. 21 and
33 are both 1 mod 4 and neither is a sum of two squares; you must look at the prime factors.

**Counting a $4k + 3$ prime once when it appears twice.** $45 = 3^2 \times 5$ **is** a sum of two squares
($3^2 + 6^2$), because 3 appears an even number of times. Always write out the full factorisation with powers.

## Where it leads

- Previous: [Pythagorean triples](05-pythagorean-triples.md). The hypotenuse $c = m^2 + n^2$ of a primitive triple is
  always a sum of two squares, so its prime factors are all of the form $4k + 1$.
- Next level: [Level 8: secret codes and open questions](../level-8/index.md); its last lesson proves that $-1$ is a
  square mod $p$ exactly when $p \equiv 1 \pmod 4$.
- [Level 7 page](index.md) · [Number theory topic page](../index.md)
- The pigeonhole principle: [Counting](../../counting/index.md). Complex numbers and $|zw| = |z||w|$:
  [Numbers](../../numbers/index.md).
- Polynomials and unique factorisation, the same ideas one level up:
  [MAT240 Unit 9 (polynomials, UFD and resultants)](../../../uoft/MAT240H1/unit09.md).
