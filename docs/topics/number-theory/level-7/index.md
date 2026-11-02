---
title: "Level 7: Powers on a clock"
---

# Level 7: Powers on a clock

*Number theory · level 7 of 8 · rough age 15-16 (a guide for parents; anyone can start anywhere)*

In level 6 you solved equations in whole numbers and learned to divide on a clock. This level is about **powers** on a
clock: why $a^{p-1}$ always comes back to 1 mod a prime, how a computer finds $a^n \bmod m$ for 300-digit numbers in a
blink, and how that lets it tell primes from non-primes without ever finding a factor. The level ends with two
classic questions about squares: which right triangles have whole-number sides, and which numbers are a sum of two
squares.

| Lesson | You will be able to |
| --- | --- |
| [Fermat's little theorem](01-fermats-little-theorem.md) | Prove $a^{p-1} \equiv 1 \pmod p$ by the shuffle argument, and use it to find remainders of huge powers |
| [Fast powers: square and multiply](02-fast-powers.md) | Compute $a^n \bmod m$ with about $2\log_2 n$ multiplications, using the binary form of $n$ |
| [Euler's phi function and Euler's theorem](03-euler-phi.md) | Find $\varphi(n)$ for any $n$, prove $a^{\varphi(n)} \equiv 1 \pmod n$, and find the last digits of huge powers |
| [Primality tests](04-primality-tests.md) | Test primes by trial division and by the Fermat test, explain Carmichael numbers, and see why testing is fast but factoring slow |
| [Pythagorean triples](05-pythagorean-triples.md) | Make every primitive triple from $m^2 - n^2$, $2mn$, $m^2 + n^2$, and prove the hidden factors 3, 4 and 5 |
| [Sums of two squares](06-sums-two-squares.md) | Decide which numbers are $a^2 + b^2$, prove that $4k + 3$ primes never are, and build sums by multiplying |

Previous: [Level 6: equations in whole numbers](../level-6/index.md) · Next:
[Level 8: secret codes and open questions](../level-8/index.md) · [Number theory topic page](../index.md)
