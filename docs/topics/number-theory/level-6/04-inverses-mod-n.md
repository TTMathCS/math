---
title: "Inverses mod n"
---

# Inverses mod n

*Number theory · level 6, lesson 4 of 6*

## A question to start

Solve $4x = 3$. In ordinary numbers the answer is the fraction $x = \frac{3}{4}$.

Now solve it on the mod 7 clock: find a whole number $x$ with $4x \equiv 3 \pmod 7$. There are no fractions on a clock.
Yet $x = 6$ works: $4 \times 6 = 24 = 3 \times 7 + 3$. ✓ So on the mod 7 clock, "three quarters" is 6.

Try the same on the mod 8 clock: $4x \equiv 3 \pmod 8$. Now **nothing** works. $4x$ is always 0 or 4 on that clock.
Why can we divide by 4 on one clock and not the other? This lesson answers that completely, and shows how to divide
whenever division is possible.

<figure class="sketch"><span class="ai-tag">AI-created</span><svg viewBox="0 0 640 420" role="img" aria-labelledby="sk-m-clocks-t"><title id="sk-m-clocks-t">On the mod 7 clock, 4 times x lands on every hour, so 4x = 3 has the answer x = 6; on the mod 8 clock, 4 times x lands only on 0 and 4, so it has none</title><defs><filter id="sk-m-clocks-pen"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="3.2"/></filter><filter id="sk-m-clocks-paper"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="7"/><feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 .10 0"/></filter><pattern id="sk-m-clocks-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="7" stroke="#8a4a2a" stroke-width="1.1" opacity=".55"/></pattern><pattern id="sk-m-clocks-dots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r="1" fill="#8a4a2a" opacity=".5"/><circle cx="6.5" cy="7" r=".8" fill="#8a4a2a" opacity=".4"/></pattern><marker id="sk-m-clocks-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L9 5L1 9" fill="none" stroke="#3a2a1e" stroke-width="1.6" stroke-linecap="round"/></marker></defs><rect width="640" height="420" filter="url(#sk-m-clocks-paper)"/><g filter="url(#sk-m-clocks-pen)"><text x="30" y="44" class="h">Times 4, on two clocks</text><circle cx="170" cy="210" r="110" class="p room"/><circle cx="170.0" cy="122.0" r="15" class="p gold"/><text x="170.0" y="128.0" text-anchor="middle" class="l">0</text><circle cx="238.8" cy="155.1" r="15" class="p gold"/><text x="238.8" y="161.1" text-anchor="middle" class="l">1</text><circle cx="255.8" cy="229.6" r="15" class="p gold"/><text x="255.8" y="235.6" text-anchor="middle" class="l">2</text><circle cx="208.2" cy="289.3" r="15" class="p gold"/><text x="208.2" y="295.3" text-anchor="middle" class="l">3</text><circle cx="131.8" cy="289.3" r="15" class="p gold"/><text x="131.8" y="295.3" text-anchor="middle" class="l">4</text><circle cx="84.2" cy="229.6" r="15" class="p gold"/><text x="84.2" y="235.6" text-anchor="middle" class="l">5</text><circle cx="101.2" cy="155.1" r="15" class="p gold"/><text x="101.2" y="161.1" text-anchor="middle" class="l">6</text><text x="170" y="216" text-anchor="middle" class="b">mod 7</text><circle cx="470" cy="210" r="110" class="p room"/><circle cx="470.0" cy="122.0" r="15" class="p gold"/><text x="470.0" y="128.0" text-anchor="middle" class="l">0</text><circle cx="532.2" cy="147.8" r="15" class="p "/><text x="532.2" y="153.8" text-anchor="middle" class="l">1</text><circle cx="558.0" cy="210.0" r="15" class="p "/><text x="558.0" y="216.0" text-anchor="middle" class="l">2</text><circle cx="532.2" cy="272.2" r="15" class="p "/><text x="532.2" y="278.2" text-anchor="middle" class="l">3</text><circle cx="470.0" cy="298.0" r="15" class="p gold"/><text x="470.0" y="304.0" text-anchor="middle" class="l">4</text><circle cx="407.8" cy="272.2" r="15" class="p "/><text x="407.8" y="278.2" text-anchor="middle" class="l">5</text><circle cx="382.0" cy="210.0" r="15" class="p "/><text x="382.0" y="216.0" text-anchor="middle" class="l">6</text><circle cx="407.8" cy="147.8" r="15" class="p "/><text x="407.8" y="153.8" text-anchor="middle" class="l">7</text><text x="470" y="216" text-anchor="middle" class="b">mod 8</text><text x="170" y="354" text-anchor="middle" class="s">4x lands on every hour,</text><text x="170" y="374" text-anchor="middle" class="s">so 4x ≡ 3 has an answer: x = 6</text><text x="470" y="354" text-anchor="middle" class="s">4x lands only on 0 and 4,</text><text x="470" y="374" text-anchor="middle" class="s">so 4x ≡ 3 has none</text><text x="30" y="408" class="s">4 and 8 share a factor; 4 and 7 do not.</text></g></svg><figcaption>Sketched for this page. The shaded hours are the ones 4x can reach.</figcaption></figure>

## The idea

### What dividing really means

In ordinary arithmetic, dividing by 4 is the same as multiplying by $\frac{1}{4}$, the number that multiplies with 4
to give 1. That partner is called the **inverse** (or reciprocal) of 4.

On a clock we copy this idea:

> An **inverse of $a$ mod $n$** is a whole number $x$ with $ax \equiv 1 \pmod n$.

We often write it $a^{-1}$, read "$a$ inverse". It is a whole number, not a fraction. For example,
$3 \times 5 = 15 = 2 \times 7 + 1$, so $3 \times 5 \equiv 1 \pmod 7$: **5 is the inverse of 3 mod 7**, and 3 is the inverse of 5.

Once you have an inverse, you can divide. To solve $ax \equiv b \pmod n$, multiply both sides by $a^{-1}$:

$$x \equiv a^{-1} \times a \times x \equiv a^{-1} b \pmod n.$$

For $4x \equiv 3 \pmod 7$: the inverse of 4 mod 7 is 2 (since $4 \times 2 = 8 \equiv 1$). So
$x \equiv 2 \times 3 = 6 \pmod 7$. That is the 6 from the start.

### The inverse table mod 7

Look along the multiplication table mod 7 ([level 5](../level-5/02-clocks-any-size.md)) for the 1 in each row:

| $a$ | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- |
| $a^{-1}$ mod 7 | 1 | 4 | 5 | 2 | 3 | 6 |

Every non-zero number has an inverse. The inverses come in pairs (2 with 4, 3 with 5), and two numbers are their own
inverses: 1 and 6. (Since $6 \equiv -1$, and $(-1)(-1) = 1$.)

### When does an inverse exist?

On the mod 8 clock, 4 has no inverse: $4x$ is always a multiple of 4, and on an 8-hour clock the multiples of 4 only
land on 0 and 4, never on 1. The trouble is that 4 and 8 **share a factor**. Here is the full rule.

> **$a$ has an inverse mod $n$ exactly when $\gcd(a, n) = 1$.**

**Why, if $\gcd(a, n) = 1$.** By [Bézout's identity](01-bezout-identity.md) there are whole numbers $x$, $y$ with

$$ax + ny = 1.$$

On the mod $n$ clock, $ny \equiv 0$, so this says $ax \equiv 1 \pmod n$. The $x$ from Bézout **is** the inverse. And
extended Euclid finds it.

**Why not, if $\gcd(a, n) = d > 1$.** Suppose $ax \equiv 1 \pmod n$. Then $ax - 1$ is a multiple of $n$, say
$ax - 1 = nk$, so $ax - nk = 1$. The left side is a combination of $a$ and $n$, so it is a multiple of $d$. But $d > 1$
does not divide 1. Impossible.

Two big consequences:

- **On a prime clock, every non-zero number has an inverse.** If $p$ is prime and $a$ is between 1 and $p - 1$, the
  only factors of $p$ are 1 and $p$, and $p$ does not divide $a$, so $\gcd(a, p) = 1$. You can divide by anything
  except 0, just as with fractions.
- **Cancelling is safe exactly when the number is coprime to $n$.** If $ac \equiv bc \pmod n$ and $\gcd(c, n) = 1$,
  multiply both sides by $c^{-1}$ to get $a \equiv b$. That settles the warning from
  [level 5, lesson 3](../level-5/03-congruence.md).

### The inverse is unique on the clock

Could 3 have two different inverses mod 7? Suppose $3x \equiv 1$ and $3x' \equiv 1$. Multiply the first by $x'$:
$x' \equiv x' \times 3x = (3x') \times x \equiv x$. So $x \equiv x'$: any two inverses land on the **same position** of
the clock. (Of course 5, 12, 19, ... are all inverses of 3 mod 7, but they are all the same clock position.)

### When there is no inverse: $ax \equiv b$ with a shared factor

What about $6x \equiv 4 \pmod{10}$? Here $\gcd(6, 10) = 2$, so 6 has no inverse. But the equation may still have
solutions. Write it as $6x - 10k = 4$: a Diophantine equation from [lesson 2](02-linear-diophantine.md). It has
solutions exactly when $\gcd(6, 10) = 2$ divides 4, which it does. Divide everything, modulus included, by 2:

$$3x \equiv 2 \pmod 5.$$

Now 3 is coprime to 5, with inverse 2 ($3 \times 2 = 6 \equiv 1$). So $x \equiv 2 \times 2 = 4 \pmod 5$. On the
original mod 10 clock, that is $x \equiv 4$ or $x \equiv 9 \pmod{10}$. Check: $6 \times 4 = 24 \equiv 4$ and
$6 \times 9 = 54 \equiv 4 \pmod{10}$. ✓

> **Solving $ax \equiv b \pmod n$.** Let $d = \gcd(a, n)$. If $d$ does not divide $b$, there are no solutions. If it
> does, there are exactly $d$ solutions on the mod $n$ clock, found by dividing $a$, $b$ and $n$ by $d$ and using an
> inverse.

### A bonus: Wilson's theorem

Here is a lovely use of inverses. On the mod 7 clock, multiply all the non-zero numbers together:

$$6! = 1 \times 2 \times 3 \times 4 \times 5 \times 6.$$

Group each number with its inverse: $(2 \times 4) \times (3 \times 5) \equiv 1 \times 1$. What is left over is the
numbers that are their own inverse, 1 and 6. So $6! \equiv 1 \times 6 = 6 \equiv -1 \pmod 7$. Check:
$6! = 720 = 102 \times 7 + 6$. ✓

The same pairing works on every prime clock: every number pairs off with its inverse except 1 and $p - 1$ (you prove
this in question 8 below), so

$$(p - 1)! \equiv -1 \pmod p \quad \text{for every prime } p.$$

This is **Wilson's theorem**, named after John Wilson, an 18th-century English mathematician.

## Worked examples

**1. An inverse by search.** Find the inverse of 3 mod 11.

- Try multiples of 3 until one is 1 more than a multiple of 11: 3, 6, 9, 12. And $12 = 11 + 1$.
- So $3 \times 4 \equiv 1 \pmod{11}$, and $3^{-1} \equiv$ **4**.

**2. An inverse by extended Euclid.** Find the inverse of 7 mod 26.

- $\gcd(7, 26)$: $26 = 3 \times 7 + 5$; $7 = 1 \times 5 + 2$; $5 = 2 \times 2 + 1$. The gcd is 1, so an inverse
  exists.
- Backwards:
  $1 = 5 - 2 \times 2 = 5 - 2(7 - 5) = 3 \times 5 - 2 \times 7 = 3(26 - 3 \times 7) - 2 \times 7 = 3 \times 26 - 11 \times 7$.
- Mod 26 the $3 \times 26$ vanishes: $-11 \times 7 \equiv 1$. So the inverse is $-11 \equiv$ **15** (mod 26).
- Check: $7 \times 15 = 105 = 4 \times 26 + 1$. ✓

The mod 26 clock is the alphabet clock (A = 0, ..., Z = 25). Codes that multiply letter numbers by 7 can be undone by
multiplying by 15, which is how the **affine ciphers** on [cryptography.akadian.ca](https://cryptography.akadian.ca/)
are decoded.

**3. Solving an equation.** Solve $5x \equiv 2 \pmod 7$.

- The inverse of 5 mod 7 is 3 (from the table).
- $x \equiv 3 \times 2 = 6 \pmod 7$.
- Check: $5 \times 6 = 30 = 4 \times 7 + 2$. ✓

**4. No solution.** Solve $10x \equiv 3 \pmod{15}$.

- $\gcd(10, 15) = 5$, which does not divide 3. **No solutions.**
- Reason in plain words: $10x$ is a multiple of 5, and on the mod 15 clock the multiples of 5 land only on 0, 5, 10.

## Try it

1. Find the inverses of 2, 3 and 5 mod 11.
2. Which of the numbers 1 to 11 have an inverse mod 12? What is each one's inverse?
3. Solve $5x \equiv 4 \pmod 9$.
4. Use extended Euclid to find the inverse of 17 mod 43.
5. Solve $9x \equiv 6 \pmod{15}$. How many solutions are there on the mod 15 clock?
6. Solve $8x \equiv 3 \pmod{12}$, or explain why it has no solutions.
7. Pair up the numbers 1 to 12 with their inverses mod 13, and use the pairing to find $12! \bmod 13$.
8. Harder: let $p$ be a prime. Show that if $x^2 \equiv 1 \pmod p$ then $x \equiv 1$ or $x \equiv -1 \pmod p$. (Hint:
   $p$ divides $x^2 - 1 = (x - 1)(x + 1)$, and use [Euclid's lemma](06-unique-factorisation.md): a prime that
   divides a product divides one of the factors.) Why does this not hold mod 8?

??? note "Answers"
    1. $2 \times 6 = 12 \equiv 1$, so $2^{-1} = 6$. $3 \times 4 = 12 \equiv 1$, so $3^{-1} = 4$.
       $5 \times 9 = 45 = 44 + 1$, so $5^{-1} = 9$.
    2. The numbers coprime to 12: **1, 5, 7, 11**. Each is its own inverse: $1 \times 1 = 1$,
       $5 \times 5 = 25 \equiv 1$, $7 \times 7 = 49 \equiv 1$, $11 \times 11 = 121 \equiv 1 \pmod{12}$.
    3. $5 \times 2 = 10 \equiv 1 \pmod 9$, so $5^{-1} = 2$ and $x \equiv 2 \times 4 = 8$. Check:
       $5 \times 8 = 40 = 36 + 4$. ✓
    4. $43 = 2 \times 17 + 9$; $17 = 1 \times 9 + 8$; $9 = 1 \times 8 + 1$. Backwards:
       $1 = 9 - 8 = 9 - (17 - 9) = 2 \times 9 - 17 = 2(43 - 2 \times 17) - 17 = 2 \times 43 - 5 \times 17$. So $17^{-1} \equiv -5 \equiv$ **38**
       (mod 43). Check: $17 \times 38 = 646 = 15 \times 43 + 1$. ✓
    5. $\gcd(9, 15) = 3$ divides 6, so there are 3 solutions. Divide by 3: $3x \equiv 2 \pmod 5$. $3^{-1} = 2$ mod 5,
       so $x \equiv 4 \pmod 5$, which on the mod 15 clock is $x \equiv$ **4, 9, 14**. Check: $36, 81, 126$ are each 6
       more than a multiple of 15. ✓
    6. $\gcd(8, 12) = 4$ does not divide 3: **no solutions**. ($8x$ mod 12 is always 0, 8 or 4.)
    7. Pairs: $(2, 7)$, $(3, 9)$, $(4, 10)$, $(5, 8)$, $(6, 11)$, and 1 and 12 are their own inverses. So
       $12! \equiv 1 \times 12 \times 1 \times 1 \times 1 \times 1 \times 1 = 12 \equiv -1 \pmod{13}$. (Wilson's
       theorem for $p = 13$.)
    8. $x^2 \equiv 1$ means $p$ divides $x^2 - 1 = (x - 1)(x + 1)$. By Euclid's lemma, $p$ divides $x - 1$ or
       $x + 1$, that is, $x \equiv 1$ or $x \equiv -1$. Mod 8 it fails because 8 is not prime: $3^2 = 9 \equiv 1$,
       yet $3 \not\equiv \pm 1$. (8 divides $2 \times 4$ without dividing 2 or 4.)

## Common mistake

**Writing the inverse as a fraction.** On the mod 7 clock, "the inverse of 4" is the whole number 2, not
$\frac{1}{4}$ or 0.25. Clock arithmetic only has whole numbers.

**Dividing without checking the gcd.** Before cancelling or dividing by $a$ mod $n$, check $\gcd(a, n) = 1$. If not,
either there is no solution, or there are several, and you must divide the modulus too.

## Where it leads

- Back: [The coin problem](03-coin-problem.md) · Next: [The Chinese remainder theorem](05-chinese-remainder.md),
  which uses inverses to solve several clock equations at once.
- [Level 6 page](index.md) · [Number theory topic page](../index.md)
- In [Level 7](../level-7/index.md), inverses prove Fermat's little theorem, and in [Level 8](../level-8/index.md)
  the inverse of $e$ mod $\varphi(n)$ is the secret key in RSA.
- Clocks where you can always divide (prime moduli) are **fields**, the number systems of linear algebra:
  [MAT240 Unit 1: Fields and vector spaces](../../../uoft/MAT240H1/unit01.md).
- Codes that multiply letters on the mod 26 clock: [cryptography.akadian.ca](https://cryptography.akadian.ca/).
