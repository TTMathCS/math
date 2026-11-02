---
title: "Fast powers: square and multiply"
---

# Fast powers: square and multiply

*Number theory · level 7, lesson 2 of 6*

## A question to start

To work out $3^{100}$, the obvious way is to start with 3 and multiply by 3 again and again: $3 \times 3 = 9$,
$9 \times 3 = 27$, and so on. That takes **99** multiplications.

Can you get there with fewer? Here is a hint: $3 \times 3 = 3^2$, then $3^2 \times 3^2 = 3^4$, then
$3^4 \times 3^4 = 3^8$. Each multiplication **doubles** the exponent instead of adding 1. In fact $3^{100}$ takes
only **8** multiplications. This lesson shows how, and why it is the trick that makes internet security possible.

## The idea

### Why we need speed

In the last lesson, Fermat's little theorem cut huge exponents down. But it only works for a prime modulus, and even
then the exponent left over can be large. In the codes of level 8, a computer must find numbers like

$$m^{e} \bmod n$$

where $m$, $e$ and $n$ each have **hundreds of digits**. Multiplying by $m$ one step at a time would take about $e$
steps. A number with 300 digits is around $10^{300}$, far more steps than there are atoms in the known universe
(about $10^{80}$, the usual estimate). Something much smarter is needed.

Two ideas together solve it:

1. **Reduce as you go.** Work mod $n$ after every multiplication, so the numbers never grow bigger than $n^2$.
2. **Square instead of multiply.** Build big exponents by doubling, not by adding 1.

### Idea 1: reduce as you go

In level 5 you saw that you may reduce mod $n$ at any step of a product: if $a \equiv a'$ and $b \equiv b'$ then
$ab \equiv a'b'$. So instead of working out the 48-digit number $3^{100}$ and then dividing by 7, we can keep every
number between 0 and 6 along the way. The answer is the same, and the numbers stay tiny.

### Idea 2: repeated squaring

Start with $a$ and keep squaring, reducing each time:

$$a,\quad a^2,\quad a^4,\quad a^8,\quad a^{16},\quad a^{32},\quad a^{64},\ \ldots$$

Each step is one multiplication (a number times itself), and each step doubles the exponent. After only 6 squarings
we reach $a^{64}$.

### Idea 3: write the exponent in binary

Every whole number is a sum of **different** powers of 2. That is exactly what **binary** (base 2) writing means.
For example

$$100 = 64 + 32 + 4, \qquad \text{so } 100 = 1100100_2.$$

Read the binary digits from the right: the 1s sit in the places worth 4, 32 and 64.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 110" role="img" aria-label="The number 100 in binary: boxes for 64, 32, 16, 8, 4, 2, 1 holding the digits 1, 1, 0, 0, 1, 0, 0; the boxes for 64, 32 and 4 are coloured">
  <rect x="20" y="30" width="40" height="40" fill="#eea66f" stroke="currentColor"/>
  <rect x="60" y="30" width="40" height="40" fill="#eea66f" stroke="currentColor"/>
  <rect x="100" y="30" width="40" height="40" fill="none" stroke="currentColor"/>
  <rect x="140" y="30" width="40" height="40" fill="none" stroke="currentColor"/>
  <rect x="180" y="30" width="40" height="40" fill="#eea66f" stroke="currentColor"/>
  <rect x="220" y="30" width="40" height="40" fill="none" stroke="currentColor"/>
  <rect x="260" y="30" width="40" height="40" fill="none" stroke="currentColor"/>
  <text x="40" y="22" font-size="12" text-anchor="middle" fill="currentColor">64</text>
  <text x="80" y="22" font-size="12" text-anchor="middle" fill="currentColor">32</text>
  <text x="120" y="22" font-size="12" text-anchor="middle" fill="currentColor">16</text>
  <text x="160" y="22" font-size="12" text-anchor="middle" fill="currentColor">8</text>
  <text x="200" y="22" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <text x="240" y="22" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <text x="280" y="22" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <text x="40" y="56" font-size="16" text-anchor="middle" fill="currentColor">1</text>
  <text x="80" y="56" font-size="16" text-anchor="middle" fill="currentColor">1</text>
  <text x="120" y="56" font-size="16" text-anchor="middle" fill="currentColor">0</text>
  <text x="160" y="56" font-size="16" text-anchor="middle" fill="currentColor">0</text>
  <text x="200" y="56" font-size="16" text-anchor="middle" fill="currentColor">1</text>
  <text x="240" y="56" font-size="16" text-anchor="middle" fill="currentColor">0</text>
  <text x="280" y="56" font-size="16" text-anchor="middle" fill="currentColor">0</text>
  <text x="160" y="96" font-size="13" text-anchor="middle" fill="currentColor">100 = 64 + 32 + 4</text>
</svg>
</div>

Now use the law of exponents $a^{x+y} = a^x \cdot a^y$:

$$a^{100} = a^{64} \cdot a^{32} \cdot a^{4}.$$

All three of those are in the squaring list. So the method, called **square and multiply**, is:

1. Write the exponent $n$ in binary.
2. Make the squaring list $a, a^2, a^4, \ldots$ up to the biggest power of 2 not more than $n$, reducing each time.
3. Multiply together the entries where the binary digit is 1, reducing each time.

### How many steps?

For $n = 100$: the squaring list $a^2, a^4, \ldots, a^{64}$ takes 6 squarings. Then multiplying three entries
together takes 2 more multiplications. Total: **8**, against 99 the slow way.

In general, if $n$ has $k$ binary digits, there are $k - 1$ squarings and at most $k - 1$ further multiplications,
so at most $2(k-1)$ multiplications in all. The number of binary digits of $n$ is about $\log_2 n$. A 300-digit
exponent is about $10^{300} \approx 2^{997}$, so it has about 1000 binary digits and needs at most about 2000
multiplications. A computer does that in a blink. That is the difference between **linear** cost (about $n$ steps)
and **logarithmic** cost (about $\log_2 n$ steps): the second barely grows at all as $n$ gets huge.

### Why it always works

The method rests on two facts, both proved earlier:

- **Every whole number has a binary form.** Take the biggest power of 2 not more than $n$, subtract it, and repeat
  with what is left. What is left is always smaller than the power you took, so you never need the same power twice.
- **Reducing mod $n$ at every step is allowed**, because congruences can be multiplied (level 5).

### The same idea, read from the left

There is a second way to run the method that needs no list. Read the binary digits of $n$ from the **left**. Start
with the answer 1. For each digit: **square** the answer; then, if the digit is 1, also **multiply by $a$**.

For $n = 100 = 1100100_2$ the exponent you hold grows like this:

$$1 \to 1\ (\text{digit }1) \to 3\ (1) \to 6\ (0) \to 12\ (0) \to 25\ (1) \to 50\ (0) \to 100\ (0).$$

Squaring doubles the exponent (it appends a 0 in binary) and multiplying by $a$ adds 1 (it turns that 0 into a 1).
Computers usually use this version because it keeps only one number in memory.

### Fast powers and Fermat together

When the modulus is a prime $p$, first cut the exponent down mod $p - 1$ (lesson 1), then use square and multiply on
what is left. When the modulus is not prime, square and multiply works on its own; lesson 3 gives a version of
Fermat for that case too.

## Worked examples

**1. $3^{100} \bmod 7$ by squaring.** (We know from lesson 1 the answer is 4; here is a check that does not use
Fermat.) The squaring list mod 7:

| power | $3^1$ | $3^2$ | $3^4$ | $3^8$ | $3^{16}$ | $3^{32}$ | $3^{64}$ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| mod 7 | 3 | 2 | 4 | 2 | 4 | 2 | 4 |

For instance $3^8 = (3^4)^2 \equiv 4^2 = 16 \equiv 2$. Then $3^{100} = 3^{64} \cdot 3^{32} \cdot 3^4 \equiv
4 \times 2 \times 4 = 32 \equiv 4 \pmod 7$. ✓ Same answer, 8 multiplications.

**2. The last three digits of $2^{100}$.** We want $2^{100} \bmod 1000$. The modulus is not prime, so this is a job
for square and multiply alone.

| power | $2^1$ | $2^2$ | $2^4$ | $2^8$ | $2^{16}$ | $2^{32}$ | $2^{64}$ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| mod 1000 | 2 | 4 | 16 | 256 | 536 | 296 | 616 |

Step by step: $256^2 = 65536 \to 536$; $536^2 = 287296 \to 296$; $296^2 = 87616 \to 616$. Then

$$2^{100} = 2^{64} \cdot 2^{32} \cdot 2^4 \equiv 616 \times 296 \times 16.$$

$616 \times 296 = 182336 \to 336$, and $336 \times 16 = 5376 \to 376$. So $2^{100}$ ends in **376**. (The full number
is $1\,267\,650\,600\,228\,229\,401\,496\,703\,205\,376$. ✓)

**3. $3^{45} \bmod 100$, the last two digits of $3^{45}$.** In binary $45 = 101101_2 = 32 + 8 + 4 + 1$.

| power | $3^1$ | $3^2$ | $3^4$ | $3^8$ | $3^{16}$ | $3^{32}$ |
| --- | --- | --- | --- | --- | --- | --- |
| mod 100 | 3 | 9 | 81 | 61 | 21 | 41 |

($81^2 = 6561 \to 61$, $61^2 = 3721 \to 21$, $21^2 = 441 \to 41$.) Multiply the entries for 32, 8, 4 and 1:
$41 \times 61 = 2501 \to 1$; $1 \times 81 = 81$; $81 \times 3 = 243 \to 43$. So $3^{45}$ ends in **43**.

**4. Left to right: $5^{13} \bmod 23$.** $13 = 1101_2$. Start with 1.

- digit 1: square $1 \to 1$, multiply by 5 $\to 5$ (exponent 1)
- digit 1: square $5 \to 25 \equiv 2$, multiply $\to 10$ (exponent 3)
- digit 0: square $10 \to 100 \equiv 8$ (exponent 6), since $100 = 4 \times 23 + 8$
- digit 1: square $8 \to 64 \equiv 18$, multiply $\to 90 \equiv 21$ (exponent 13)

So $5^{13} \equiv 21 \pmod{23}$.

**5. A test you will meet again.** Compute $2^{77} \bmod 91$. $77 = 64 + 8 + 4 + 1$. The list mod 91: $2, 4, 16, 74,
16, 74, 16$ for $2^1, 2^2, \ldots, 2^{64}$ (since $16^2 = 256 = 2 \times 91 + 74$ and $74^2 = 5476 = 60 \times 91 +
16$). Then $2^{64} \cdot 2^8 \cdot 2^4 \cdot 2 \equiv 16 \times 74 \times 16 \times 2$. $16 \times 74 = 1184 =
13 \times 91 + 1$, so this is $1 \times 16 \times 2 = 32$. So $2^{77} \equiv 32 \pmod{91}$.

## Try it

1. Write 37 and 200 in binary.
2. How many multiplications does square and multiply use for $a^{37}$? For $a^{1024}$?
3. Find $7^{128} \bmod 13$ by squaring seven times. (Then check with Fermat.)
4. Find $3^{200} \bmod 1000$, the last three digits of $3^{200}$.
5. Use the left-to-right method to find $6^{25} \bmod 35$.
6. Find the last two digits of $7^{2026}$. (Hint: first find $7^4 \bmod 100$.)
7. Explain why squaring is so much faster than adding 1 to the exponent: how many doublings take 1 to more than
   a million?

??? note "Answers"
    1. $37 = 32 + 4 + 1 = 100101_2$. $200 = 128 + 64 + 8 = 11001000_2$.
    2. 37 has 6 binary digits with three 1s: 5 squarings ($a^2$ up to $a^{32}$) and 2 multiplications to join
       $a^{32}$, $a^4$, $a$: **7**. $1024 = 2^{10}$: 10 squarings and nothing to join: **10**.
    3. Mod 13: $7, 49 \equiv 10, 100 \equiv 9, 81 \equiv 3, 9, 3, 9, 3$ for $7^1, 7^2, \ldots, 7^{128}$. So
       $7^{128} \equiv$ **3**. Fermat check: $7^{12} \equiv 1$ and $128 = 10 \times 12 + 8$, so
       $7^{128} \equiv 7^8 \equiv 3$. ✓
    4. $200 = 128 + 64 + 8$. List mod 1000: $3^1 = 3$, $3^2 = 9$, $3^4 = 81$, $3^8 = 6561 \to 561$,
       $3^{16} = 561^2 = 314721 \to 721$, $3^{32} = 721^2 = 519841 \to 841$, $3^{64} = 841^2 = 707281 \to 281$,
       $3^{128} = 281^2 = 78961 \to 961$. Then $961 \times 281 = 270041 \to 41$, and $41 \times 561 = 23001 \to 1$.
       So $3^{200}$ ends in **001**.
    5. $25 = 11001_2$. Start 1. Digit 1: $1 \to 1 \to 6$. Digit 1: $6^2 = 36 \equiv 1$, times 6 $\to 6$. Digit 0:
       $6^2 \equiv 1$. Digit 0: $1^2 = 1$. Digit 1: $1^2 = 1$, times 6 $\to 6$. So $6^{25} \equiv$ **6**
       $\pmod{35}$. (The key was $6^2 = 36 \equiv 1$.)
    6. $7^2 = 49$, $7^4 = 49^2 = 2401 \equiv 1 \pmod{100}$. So the powers of 7 repeat every 4 steps mod 100.
       $2026 = 506 \times 4 + 2$, so $7^{2026} \equiv 7^2 = 49$. The last two digits are **49**.
    7. Each doubling multiplies the exponent by 2: after $k$ doublings it is $2^k$. $2^{19} = 524288$ and
       $2^{20} = 1048576$, so **20** doublings pass a million, against nearly a million steps of adding 1.

## Common mistake

**Not reducing along the way.** If you square 616 you get 379456; square that without reducing and you get a 12-digit
number, and soon numbers too big for any calculator. Reduce **after every single multiplication**. The answer is the
same and every number stays below the square of the modulus.

**Adding exponents that are not in the list.** $a^{100}$ is $a^{64} \cdot a^{32} \cdot a^4$, **not**
$a^{64} \cdot a^{36}$: $a^{36}$ was never computed. Only powers of 2 come from squaring; use the binary form.

## Where it leads

- Previous: [Fermat's little theorem](01-fermats-little-theorem.md) · Next: [Euler's phi function and Euler's
  theorem](03-euler-phi.md)
- Square and multiply is used in every lesson from here on: the [Fermat test](04-primality-tests.md) for primes,
  and RSA and Diffie-Hellman in [level 8](../level-8/index.md).
- [Level 7 page](index.md) · [Number theory topic page](../index.md)
- Binary and place value: [Numbers](../../numbers/index.md). Doubling and exponential growth:
  [Patterns](../../patterns/index.md).
- Counting the steps an algorithm takes, and why $\log_2 n$ beats $n$:
  [CSC148 Unit 9 (efficiency analysis)](../../../uoft/CSC148H1/unit09.md). The method itself is a natural example of
  recursion: [CSC148 Unit 5](../../../uoft/CSC148H1/unit05.md).
