---
title: "RSA: a lock anyone can close"
---

# RSA: a lock anyone can close

*Number theory · level 8, lesson 2 of 6*

## A question to start

Imagine a padlock that you can hand out to the whole world, open. Anyone can put a letter in a box and snap your
padlock shut. But only you have the key, so only you can open the box. You never had to meet anyone to share a secret
key: the lock is public, the key is private.

Every code in lesson 1 failed this test: knowing how to lock (shift by 3, or $7x + 3$) told you at once how to unlock.
Can numbers make a lock where knowing how to close it does **not** tell you how to open it? In 1977 three
mathematicians showed how, using nothing but Euler's theorem from level 7 and the fact that factoring is hard.

## The idea

### Public and private keys

A **public-key cipher** has two keys. The **public key** is published for everyone and is used to encrypt. The
**private key** is kept secret by its owner and is used to decrypt. Its safety must not depend on keeping the method
secret, only the private key.

The system in this lesson is called **RSA**, after Ron Rivest, Adi Shamir and Leonard Adleman, who published it in
1977. (Clifford Cocks, working for the British intelligence agency GCHQ, had found an equivalent system in 1973, but
it was kept secret until 1997.) Today RSA, or systems built on the same ideas, protects web browsing, banking and
software updates.

### Making the keys

The owner does this once:

1. Choose two different large primes $p$ and $q$. (Level 7, lesson 4: finding primes is fast.)
2. Multiply: $n = pq$.
3. Compute $\varphi(n) = (p - 1)(q - 1)$ (level 7, lesson 3).
4. Choose a whole number $e$ with $1 < e < \varphi(n)$ and $\gcd(e, \varphi(n)) = 1$.
5. Find $d$, the inverse of $e$ mod $\varphi(n)$: $\;ed \equiv 1 \pmod{\varphi(n)}$. (Extended Euclid, level 6.)

**Publish** the pair $(n, e)$. **Keep secret** $d$, and also $p$, $q$ and $\varphi(n)$ (or destroy them).

### Locking and unlocking

A message is first turned into a whole number $m$ with $0 \le m < n$ (for instance by writing letters as numbers).
Then:

$$\text{encrypt: } c = m^{e} \bmod n, \qquad \text{decrypt: } m = c^{d} \bmod n.$$

Both are single fast powers (level 7, lesson 2), so they take a computer a moment even for 600-digit numbers.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 130" role="img" aria-label="The message m goes through 'raise to e mod n', the public lock, to become c; c goes through 'raise to d mod n', the private key, to become m again">
  <rect x="8" y="45" width="44" height="36" rx="6" fill="#9cc9ea" stroke="currentColor"/>
  <text x="30" y="68" font-size="14" text-anchor="middle" fill="currentColor">m</text>
  <line x1="52" y1="63" x2="80" y2="63" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="80,58 90,63 80,68" fill="currentColor"/>
  <rect x="92" y="40" width="64" height="46" rx="6" fill="#eea66f" stroke="currentColor"/>
  <text x="124" y="60" font-size="12" text-anchor="middle" fill="currentColor">power e</text>
  <text x="124" y="76" font-size="12" text-anchor="middle" fill="currentColor">mod n</text>
  <text x="124" y="30" font-size="11" text-anchor="middle" fill="currentColor">public lock</text>
  <line x1="156" y1="63" x2="170" y2="63" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="170,58 180,63 170,68" fill="currentColor"/>
  <text x="190" y="68" font-size="14" text-anchor="middle" fill="currentColor">c</text>
  <line x1="200" y1="63" x2="206" y2="63" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="206,58 216,63 206,68" fill="currentColor"/>
  <rect x="218" y="40" width="64" height="46" rx="6" fill="#7ccf9a" stroke="currentColor"/>
  <text x="250" y="60" font-size="12" text-anchor="middle" fill="currentColor">power d</text>
  <text x="250" y="76" font-size="12" text-anchor="middle" fill="currentColor">mod n</text>
  <text x="250" y="30" font-size="11" text-anchor="middle" fill="currentColor">private key</text>
  <line x1="282" y1="63" x2="292" y2="63" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="292,58 302,63 292,68" fill="currentColor"/>
  <text x="311" y="68" font-size="14" text-anchor="middle" fill="currentColor">m</text>
  <text x="160" y="115" font-size="12" text-anchor="middle" fill="currentColor">(m^e)^d ≡ m (mod n) because ed ≡ 1 (mod φ(n))</text>
</svg>
</div>

### Why decrypting gives the message back

We need $(m^e)^d = m^{ed} \equiv m \pmod n$. Since $ed \equiv 1 \pmod{\varphi(n)}$, write $ed = 1 + k\,\varphi(n)$
for some whole number $k \ge 0$.

**If $m$ is coprime to $n$**, Euler's theorem says $m^{\varphi(n)} \equiv 1$, so

$$m^{ed} = m^{1 + k\varphi(n)} = m \cdot \big(m^{\varphi(n)}\big)^k \equiv m \cdot 1^k = m \pmod n.$$

**For every $m$**, even one sharing a factor with $n$, work mod $p$ and mod $q$ separately. Mod $p$: if $p$ divides
$m$, both $m^{ed}$ and $m$ are $0 \bmod p$. If not, Fermat gives $m^{p-1} \equiv 1$, and since $ed - 1 =
k(p-1)(q-1)$ is a multiple of $p - 1$, $m^{ed} = m \cdot (m^{p-1})^{k(q-1)} \equiv m \pmod p$. The same argument
works mod $q$. So both $p$ and $q$ divide $m^{ed} - m$, and since they are different primes, $n = pq$ divides it. ∎

### Why it is safe (as far as anyone knows)

An attacker sees $n$, $e$ and the ciphertext $c$. To decrypt like the owner, they want $d$. And $d$ is the inverse of
$e$ mod $\varphi(n)$, which is easy to find **if you know $\varphi(n)$**. So everything rests on: **can you find
$\varphi(n)$ from $n$?**

If you can factor $n = pq$, then $\varphi(n) = (p-1)(q-1)$ at once. And the other way round: if you know $n$ and
$\varphi(n)$, then

$$p + q = pq - (p - 1)(q - 1) + 1 = n - \varphi(n) + 1,$$

so you know the sum and the product of $p$ and $q$, and they are the two roots of $t^2 - (n - \varphi(n) + 1)t + n =
0$ (the quadratic formula, see [Algebra](../../algebra/index.md)). So **finding $\varphi(n)$ is exactly as hard as
factoring $n$.**

Real keys use $n$ with 2048 binary digits, which is 617 decimal digits. Multiplying the two primes takes a moment;
undoing it is far beyond the best known methods on today's computers. This is the gap from level 7, lesson 4:
**finding primes is easy, factoring is hard.** Two honest warnings:

- Nobody has **proved** factoring is hard. It is a belief backed by centuries of failed attempts.
- In 1994 Peter Shor showed that a large enough **quantum** computer could factor quickly. None that large exists yet,
  but this is why new "post-quantum" systems, based on different hard problems, are being introduced.

### Signatures: running the lock backwards

RSA can also **sign**. The owner computes $s = m^{d} \bmod n$ with the private key and sends $m$ and $s$. Anyone can
check $s^{e} \equiv m \pmod n$ with the public key. Only the holder of $d$ could have made an $s$ that passes, so the
signature proves who sent the message. The same algebra, $m^{de} \equiv m$, makes it work.

### What real RSA adds

Textbook RSA as above has weaknesses: the same message always gives the same ciphertext, and tiny messages with tiny
$e$ can be undone. Real systems add random **padding** to the message before encrypting. The number theory is the
same; the engineering is in [cryptography.akadian.ca](https://cryptography.akadian.ca/).

## Worked examples

**1. A full key with small primes.** Take $p = 61$, $q = 53$.

- $n = 61 \times 53 = 3233$.
- $\varphi(n) = 60 \times 52 = 3120$.
- Choose $e = 17$: it is prime and does not divide 3120, so $\gcd(17, 3120) = 1$.
- Find $d$ by extended Euclid:

$$
\begin{aligned}
3120 &= 183 \times 17 + 9\\
17 &= 1 \times 9 + 8\\
9 &= 1 \times 8 + 1
\end{aligned}
$$

Backwards: $1 = 9 - 8 = 9 - (17 - 9) = 2 \times 9 - 17 = 2 \times (3120 - 183 \times 17) - 17 = 2 \times 3120 - 367
\times 17$. So $d \equiv -367 \equiv 3120 - 367 = 2753$. Check: $17 \times 2753 = 46801 = 15 \times 3120 + 1$. ✓

Public key $(n, e) = (3233, 17)$; private key $d = 2753$.

**2. Encrypting $m = 65$.** We need $65^{17} \bmod 3233$. Since $17 = 16 + 1$, square four times:

| power | $65^1$ | $65^2$ | $65^4$ | $65^8$ | $65^{16}$ |
| --- | --- | --- | --- | --- | --- |
| mod 3233 | 65 | 992 | 1232 | 1547 | 789 |

(For example $65^2 = 4225 = 3233 + 992$.) Then $65^{17} = 65^{16} \times 65 \equiv 789 \times 65 = 51285 = 15
\times 3233 + 2790$. The ciphertext is $c = 2790$.

**3. Decrypting with a shortcut.** The owner computes $2790^{2753} \bmod 3233$. A computer does it at once by square
and multiply. By hand, the owner can use $p$ and $q$ (the Chinese remainder theorem, level 6):

- Mod 61: $2790 \equiv 45$, and the exponent can be cut mod 60: $2753 \equiv 53$. A computer gives
  $45^{53} \equiv 4 \pmod{61}$.
- Mod 53: $2790 \equiv 34$, exponent mod 52: $2753 \equiv 49$, and $34^{49} \equiv 12 \pmod{53}$.

The number below 3233 that is 4 mod 61 and 12 mod 53 is $65$ ($65 = 61 + 4 = 53 + 12$). The message is back. ✓ Real
RSA software uses exactly this shortcut, because two half-size powers are faster than one full-size power.

**4. The attacker's problem, made easy.** Suppose someone learns $\varphi(3233) = 3120$. Then $p + q = 3233 - 3120 +
1 = 114$ and $pq = 3233$, so $p, q$ are the roots of $t^2 - 114t + 3233 = 0$: $t = \dfrac{114 \pm \sqrt{114^2 - 4
\times 3233}}{2} = \dfrac{114 \pm 8}{2}$, giving 61 and 53. Knowing $\varphi(n)$ cracks the key.

**5. A tiny key you can do fully by hand.** $p = 5$, $q = 11$, $n = 55$, $\varphi = 40$, $e = 3$, and $d = 27$
because $3 \times 27 = 81 = 2 \times 40 + 1$. Encrypt $m = 9$: $9^3 = 729 = 13 \times 55 + 14$, so $c = 14$.
Decrypt: $14^{27} \bmod 55$. Mod 5: $14 \equiv 4 \equiv -1$, and $(-1)^{27} = -1 \equiv 4$. Mod 11: $14 \equiv 3$,
and $3^5 = 243 = 22 \times 11 + 1$, so $3^{27} = (3^5)^5 \cdot 3^2 \equiv 9$. The number below 55 that is 4 mod 5 and
9 mod 11 is 9. ✓

## Try it

1. With $p = 3$, $q = 11$: find $n$ and $\varphi(n)$. Show that $e = 3$ is allowed and find $d$.
2. With that key, encrypt $m = 5$, then decrypt your answer to check.
3. With $p = 61$, $q = 53$ as in the examples, why is $e = 3$ **not** allowed? Is $e = 7$ allowed?
4. With $p = 7$, $q = 13$ and $e = 5$: find $d$, and encrypt $m = 10$.
5. Someone publishes $n = 391$, and you learn $\varphi(n) = 352$. Find $p$ and $q$.
6. Why must $p$ and $q$ be kept secret, and why must they be large? Why is it a bad idea to choose $p = q$?
7. Explain in two or three sentences why knowing how to **encrypt** in RSA does not tell you how to **decrypt**, while
   in an affine cipher it does.

??? note "Answers"
    1. $n = 33$, $\varphi(n) = 2 \times 10 = 20$. $\gcd(3, 20) = 1$, so $e = 3$ is allowed. $3 \times 7 = 21 \equiv 1
       \pmod{20}$, so $d = 7$.
    2. $5^3 = 125 = 3 \times 33 + 26$, so $c = 26$. Decrypt: $26 \equiv -7 \pmod{33}$. $(-7)^2 = 49 \equiv 16$,
       $(-7)^4 \equiv 256 \equiv 25$, $(-7)^6 \equiv 25 \times 16 = 400 \equiv 4$, $(-7)^7 \equiv 4 \times (-7) = -28
       \equiv 5$. Back to **5**. ✓
    3. $\varphi(3233) = 3120$ and $3120 = 3 \times 1040$, so $\gcd(3, 3120) = 3$: 3 has no inverse mod 3120, so there
       is no $d$. $e = 7$ is allowed: 3120 is not a multiple of 7 ($3120 = 445 \times 7 + 5$), and then
       $d = 1783$ ($7 \times 1783 = 12481 = 4 \times 3120 + 1$).
    4. $n = 91$, $\varphi = 6 \times 12 = 72$. $5d \equiv 1 \pmod{72}$: $5 \times 29 = 145 = 2 \times 72 + 1$, so
       $d = 29$. Encrypt: $10^2 = 100 \equiv 9$, $10^4 \equiv 81$, $10^5 \equiv 810 = 8 \times 91 + 82$, so
       $c = 82$. (A computer confirms $82^{29} \equiv 10 \pmod{91}$.)
    5. $p + q = 391 - 352 + 1 = 40$ and $pq = 391$. $t^2 - 40t + 391 = 0$: $t = \dfrac{40 \pm \sqrt{1600 - 1564}}{2} =
       \dfrac{40 \pm 6}{2}$, so $p, q = 23, 17$. Check: $23 \times 17 = 391$. ✓
    6. Anyone who knows $p$ and $q$ can compute $\varphi(n)$ and then $d$, so they are as secret as $d$. They must be
       large so that $n$ cannot be factored by computer. If $p = q$, then $n = p^2$ and $p = \sqrt n$ is found
       instantly (and also $\varphi(p^2) = p^2 - p$, not $(p-1)^2$, so the formula would be wrong anyway).
    7. In an affine cipher, the decryption key comes straight from the encryption key by finding an inverse mod 26,
       which is easy. In RSA, $d$ is the inverse of $e$ mod $\varphi(n)$, and $\varphi(n)$ is not published; computing
       it from $n$ is as hard as factoring $n$, which nobody can do for large $n$.

## Common mistake

**Inverting $e$ mod $n$ instead of mod $\varphi(n)$.** $d$ is the inverse of $e$ **mod $\varphi(n)$**, because
exponents live on the mod-$\varphi(n)$ clock (level 7). The base, the message, lives on the mod-$n$ clock.

**Choosing $e$ that shares a factor with $\varphi(n)$.** Then $e$ has no inverse and there is no $d$. Always check
$\gcd(e, \varphi(n)) = 1$; a popular choice in practice is $e = 65537 = 2^{16} + 1$, which is prime.

## Where it leads

- Previous: [Old codes and why they break](01-old-codes.md) · Next: [Diffie-Hellman key exchange](03-diffie-hellman.md)
- [Level 8 page](index.md) · [Number theory topic page](../index.md)
- The tools used here: [Euler's theorem](../level-7/03-euler-phi.md), [fast powers](../level-7/02-fast-powers.md),
  [primality tests](../level-7/04-primality-tests.md); extended Euclid and the Chinese remainder theorem in
  [level 6](../level-6/index.md).
- Real RSA, padding, signatures and post-quantum codes: [cryptography.akadian.ca](https://cryptography.akadian.ca/).
- The quadratic formula used to recover $p$ and $q$: [Algebra](../../algebra/index.md).
