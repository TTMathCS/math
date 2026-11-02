---
title: "Diffie-Hellman key exchange"
---

# Diffie-Hellman key exchange

*Number theory · level 8, lesson 3 of 6*

## A question to start

Alice and Bob have never met. They can only talk by shouting across a crowded room, and everyone hears every word.
Can they agree on a secret number that nobody else in the room learns?

It sounds impossible: anything Alice says, the crowd hears; anything Bob replies, the crowd hears too. Yet in 1976
Whitfield Diffie and Martin Hellman published a way to do exactly this, with powers on a clock. Your phone does it
every time it opens a secure web page.

## The idea

### Why agree on a key at all?

Fast ciphers that scramble long messages (the modern versions of lesson 1, far stronger) need both people to share
one secret key. RSA (lesson 2) could carry such a key, but there is a neater way: let the two sides **build** a shared
secret together in public. That is a **key exchange**.

### The paint-mixing picture

Here is the idea with paint, before any numbers. Mixing paint is easy, but **un**mixing it is practically impossible.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 200" role="img" aria-label="Paint mixing. Alice and Bob share a public orange paint. Alice adds her secret blue, Bob his secret green, and they swap the mixtures in public. Each adds their own secret colour to the mixture received, and both end with the same mix of orange, blue and green">
  <text x="60" y="16" font-size="13" text-anchor="middle" fill="currentColor">Alice</text>
  <text x="160" y="16" font-size="13" text-anchor="middle" fill="currentColor">in public</text>
  <text x="260" y="16" font-size="13" text-anchor="middle" fill="currentColor">Bob</text>
  <line x1="110" y1="24" x2="110" y2="190" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="210" y1="24" x2="210" y2="190" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="160" cy="45" r="10" fill="#eea66f" stroke="currentColor"/>
  <text x="160" y="72" font-size="11" text-anchor="middle" fill="currentColor">shared paint</text>
  <circle cx="60" cy="45" r="10" fill="#9cc9ea" stroke="currentColor"/>
  <text x="60" y="72" font-size="11" text-anchor="middle" fill="currentColor">secret</text>
  <circle cx="260" cy="45" r="10" fill="#7ccf9a" stroke="currentColor"/>
  <text x="260" y="72" font-size="11" text-anchor="middle" fill="currentColor">secret</text>
  <circle cx="135" cy="105" r="10" fill="#eea66f" stroke="currentColor"/>
  <circle cx="150" cy="105" r="10" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="170" cy="105" r="10" fill="#eea66f" stroke="currentColor"/>
  <circle cx="185" cy="105" r="10" fill="#7ccf9a" stroke="currentColor"/>
  <text x="160" y="132" font-size="11" text-anchor="middle" fill="currentColor">mixtures swapped</text>
  <circle cx="45" cy="165" r="10" fill="#eea66f" stroke="currentColor"/>
  <circle cx="60" cy="165" r="10" fill="#7ccf9a" stroke="currentColor"/>
  <circle cx="75" cy="165" r="10" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="245" cy="165" r="10" fill="#eea66f" stroke="currentColor"/>
  <circle cx="260" cy="165" r="10" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="275" cy="165" r="10" fill="#7ccf9a" stroke="currentColor"/>
  <text x="160" y="170" font-size="11" text-anchor="middle" fill="currentColor">same final mix</text>
</svg>
</div>

1. Alice and Bob agree in public on a starting paint (orange). Everyone sees it.
2. Alice secretly picks a colour (blue) and Bob secretly picks one (green). These never leave their rooms.
3. Alice mixes orange with her blue and sends the mixture across the room; Bob mixes orange with his green and sends
   his. Everyone sees both mixtures.
4. Alice adds her blue to Bob's mixture; Bob adds his green to Alice's. Both now hold orange + blue + green: the
   same colour, because the order of mixing does not matter.

The crowd saw orange, orange + blue, and orange + green. To make the final colour they would need to pull the blue
out of orange + blue, which nobody can do with paint. With numbers, "mixing" will be raising to a power on a clock.

### The numbers version

1. **In public**, agree on a large prime $p$ and a whole number $g$ with $1 < g < p$ (more on choosing $g$ below).
2. **Alice** picks a secret whole number $a$ and sends $A = g^{a} \bmod p$. **Bob** picks a secret $b$ and sends
   $B = g^{b} \bmod p$.
3. **Alice** computes $B^{a} \bmod p$. **Bob** computes $A^{b} \bmod p$.

They get the same number, because by the laws of exponents

$$B^{a} = \big(g^{b}\big)^{a} = g^{ab} = \big(g^{a}\big)^{b} = A^{b} \pmod p.$$

That shared number $K = g^{ab} \bmod p$ is their secret key. Each step is a single fast power (level 7, lesson 2),
easy even for numbers hundreds of digits long.

The crowd knows $p$, $g$, $A$ and $B$. To get $K$, the obvious way is to find $a$ from $A = g^{a}$ and then compute
$B^{a}$.

### The discrete logarithm problem

In ordinary arithmetic, "find $a$ with $2^{a} = 1024$" is easy: it is the **logarithm** $\log_2 1024 = 10$, and
powers of 2 grow steadily, so you can home in on the answer. On a clock, powers jump around. Here are the powers of
5 mod 23:

| $k$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $5^k \bmod 23$ | 5 | 2 | 10 | 4 | 20 | 8 | 17 | 16 | 11 | 9 | 22 |

| $k$ | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $5^k \bmod 23$ | 18 | 21 | 13 | 19 | 3 | 15 | 6 | 7 | 12 | 14 | 1 |

Knowing $5^{k} \equiv 13$ tells you nothing obvious about where $k$ is: the values do not grow or shrink, they
scatter. Finding $k$ from $g^{k} \bmod p$ is called the **discrete logarithm problem** ("discrete" because $k$ is
a whole number). For a prime $p$ with hundreds of digits, the best known methods on ordinary computers take far
too long, just as with factoring. The one-way street is:

- **forward** (given $k$, find $g^{k} \bmod p$): fast, by square and multiply;
- **backward** (given $g^{k} \bmod p$, find $k$): as far as anyone knows, hopelessly slow.

As with factoring, this is not proved, and a large quantum computer running Shor's 1994 method would solve discrete
logarithms quickly too.

### Choosing $g$: primitive roots

Look again at the table: the powers of 5 mod 23 hit **every** number from 1 to 22 exactly once before returning to 1.
Such a $g$ is called a **primitive root** mod $p$. (Gauss proved that every prime has one.) With a primitive root,
$g^{a}$ can be any non-zero remainder, so the secret $a$ is hidden among all $p - 1$ possibilities.

A poor $g$ makes the problem tiny. Mod 11, the powers of 3 are $3, 9, 5, 4, 1$ and then repeat: only five values.
An eavesdropper would have only five cases to try. Mod 11, the powers of 2 are $2, 4, 8, 5, 10, 9, 7, 3, 6, 1$: all
ten, so 2 is a primitive root mod 11.

By Fermat (level 7) the order of any $g$ divides $p - 1$, so to check that $g$ is a primitive root you only need to
check that $g^{(p-1)/r} \not\equiv 1$ for each prime $r$ dividing $p - 1$.

### The weak spot: the man in the middle

Diffie-Hellman protects against **listening**, but not against someone who can **change** messages. A villain in the
middle can run one exchange with Alice (pretending to be Bob) and another with Bob (pretending to be Alice), then read
and pass on everything. The fix is to **sign** the values $A$ and $B$, for example with RSA signatures (lesson 2), so
each side knows who sent them. Real secure connections do exactly this: key exchange plus signatures.

(History note: Malcolm Williamson at the British agency GCHQ had found the same method a few years before 1976, but it
was kept secret, like Cocks's version of RSA.)

## Worked examples

**1. A full exchange.** Public: $p = 23$, $g = 5$. Alice's secret is $a = 6$, Bob's is $b = 15$.

- Alice sends $A = 5^{6} \bmod 23$. From the table, $A = 8$.
- Bob sends $B = 5^{15} \bmod 23$. From the table, $B = 19$.
- Alice computes $19^{6} \bmod 23$: $19 \equiv -4$, so $19^2 \equiv 16$, $19^4 \equiv 256 = 11 \times 23 + 3 \equiv
  3$, and $19^6 = 19^4 \cdot 19^2 \equiv 3 \times 16 = 48 \equiv 2$.
- Bob computes $8^{15} \bmod 23$: $8^2 = 64 \equiv 18$, $8^4 \equiv 18^2 = 324 = 14 \times 23 + 2 \equiv 2$,
  $8^8 \equiv 4$, and $8^{15} = 8^8 \cdot 8^4 \cdot 8^2 \cdot 8 \equiv 4 \times 2 \times 18 \times 8 = 1152 = 50
  \times 23 + 2 \equiv 2$.

Both get $K = 2$. Check with the table: $K = 5^{ab} = 5^{90}$, and $90 = 4 \times 22 + 2$, so $5^{90} \equiv 5^{2} =
2$. ✓

**2. What the crowd sees.** They know 23, 5, 8 and 19. To find $K$ they must solve $5^{a} \equiv 8$: with the table,
$a = 6$ at once. That is why real $p$ must be enormous: a table with $10^{600}$ rows can never be made.

**3. Testing for a primitive root.** Is 3 a primitive root mod 17? $p - 1 = 16 = 2^4$, whose only prime factor is 2.
So check $3^{8} \bmod 17$: $3^4 = 81 \equiv 13 \equiv -4$, $3^8 \equiv 16 \equiv -1 \ne 1$. So yes: the order of 3
divides 16 but does not divide 8, so it is 16.

**4. Another exchange.** $p = 17$, $g = 3$, $a = 5$, $b = 11$. $A = 3^5 = 243 = 14 \times 17 + 5$, so $A = 5$.
$B = 3^{11} \bmod 17$: $3^8 \equiv -1$ and $3^3 = 27 \equiv 10$, so $B \equiv -10 \equiv 7$. Alice: $7^5 \bmod 17$:
$7^2 = 49 \equiv 15 \equiv -2$, $7^4 \equiv 4$, $7^5 \equiv 28 \equiv 11$. Bob: $5^{11} \bmod 17$: $5^2 = 25 \equiv
8$, $5^4 \equiv 64 \equiv 13$, $5^8 \equiv 169 \equiv 16 \equiv -1$, so $5^{11} = 5^8 \cdot 5^2 \cdot 5 \equiv -1
\times 8 \times 5 = -40 \equiv 11$. Shared key **11**. ✓

## Try it

1. With $p = 23$, $g = 5$: Alice picks $a = 4$ and Bob picks $b = 3$. Find $A$, $B$ and the shared key (use the
   table).
2. With $p = 11$, $g = 2$, $a = 4$, $b = 7$: find $A$, $B$ and the shared key both ways.
3. Using the table of powers of 5 mod 23, solve $5^{k} \equiv 13 \pmod{23}$ and $5^{k} \equiv 1 \pmod{23}$ with
   $1 \le k \le 22$.
4. List the powers of 2 mod 7. Is 2 a primitive root mod 7? Is 3?
5. Why must Alice's secret $a$ not be $p - 1$? (Hint: Fermat.)
6. Explain the paint picture's weak spot: what could a painter in the middle do if they could swap the mixtures in
   transit?

??? note "Answers"
    1. $A = 5^4 \equiv 4$, $B = 5^3 \equiv 10$. Shared key $5^{12} \equiv 18$ (table). Check: Alice computes
       $10^4 = 10000 = 434 \times 23 + 18$. ✓ Bob computes $4^3 = 64 = 2 \times 23 + 18$. ✓ Key **18**.
    2. $A = 2^4 = 16 \equiv 5$. $B = 2^7 = 128 = 11 \times 11 + 7$, so $B = 7$. Alice: $7^4 = 2401 = 218 \times 11 +
       3$, so 3. Bob: $5^7$: $5^2 = 25 \equiv 3$, $5^4 \equiv 9$, $5^7 = 5^4 \cdot 5^2 \cdot 5 \equiv 9 \times 3 \times
       5 = 135 = 12 \times 11 + 3$, so 3. Key **3** ($= 2^{28} \bmod 11$; $28 = 2 \times 10 + 8$ and $2^8 = 256 \equiv
       3$ ✓).
    3. $5^{14} \equiv 13$, so $k = 14$. $5^{22} \equiv 1$, so $k = 22$ (as Fermat promises, $22 = p - 1$).
    4. Powers of 2 mod 7: $2, 4, 1$, then repeat: only three values, so 2 is **not** a primitive root. Powers of 3:
       $3, 2, 6, 4, 5, 1$: all six, so 3 **is** a primitive root mod 7.
    5. $g^{p-1} \equiv 1$ by Fermat's little theorem, so Alice would send $A = 1$ and the shared key would be $1$ too:
       no secret at all. (Similarly secrets are taken between 2 and $p - 2$.)
    6. The middle painter takes Alice's mixture and sends Bob their own (orange + their secret), and does the same in
       the other direction. Alice then shares one colour with the painter, Bob shares another, and the painter can
       read and re-mix every message. Paint has no signatures; numbers can have them, and that is the fix.

## Common mistake

**Thinking the shared key is sent.** It never travels: only $A$ and $B$ are sent. Each side **computes** $K$ from
what it received and its own secret.

**Computing $B \cdot a$ or $B^{b}$ instead of $B^{a}$.** Alice raises **Bob's** number to **her own** secret power.
Write the exponents out: $\big(g^{b}\big)^{a} = g^{ab}$.

## Where it leads

- Previous: [RSA](02-rsa.md) · Next: [How the primes are spread out](04-spread-of-primes.md), which tells us there are
  plenty of large primes to choose $p$ from.
- [Level 8 page](index.md) · [Number theory topic page](../index.md)
- The tools: [Fermat's little theorem](../level-7/01-fermats-little-theorem.md) and
  [fast powers](../level-7/02-fast-powers.md).
- Ordinary logarithms, the "smooth" version of this problem: [Change](../../change/index.md) and
  [MAT137 Unit 4 (transcendental functions)](../../../uoft/MAT137/unit04.md).
- How key exchange, signatures and ciphers fit together in a real secure connection:
  [cryptography.akadian.ca](https://cryptography.akadian.ca/).
