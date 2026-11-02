---
title: "Master: Geometric sequences"
---

# Master: Multiplying by the same amount, geometric sequences

*Patterns and sequences · step 4 of 5*

## A question to start

An old story tells of a king who offered a reward to the inventor of chess. The inventor asked for rice: 1 grain on
the first square of the board, 2 on the second, 4 on the third, doubling on every square up to the 64th. The king
laughed at so small a wish. How much rice was it really? (Answer below: more rice than the whole world has ever
grown.)

## The idea

### What makes a sequence geometric

A sequence is **geometric** when you **multiply by the same number** each time to get the next term. That number is
the **common ratio**, written $r$.

- 1, 2, 4, 8, 16, ... has $r = 2$.
- 3, 15, 75, 375, ... has $r = 5$.
- 80, 40, 20, 10, 5, ... has $r = \tfrac12$. Multiplying by a number between 0 and 1 makes the terms shrink.
- 1, −3, 9, −27, ... has $r = -3$. A negative ratio makes the signs flip back and forth.

To test whether a sequence is geometric, divide each term by the one before it. If every answer is the same, it
is geometric.

### The formula for any term

As before, reaching position $n$ takes $n-1$ steps, but now each step **multiplies** by $r$:

$$a_n = a_1 \, r^{\,n-1}$$

$r^{\,n-1}$ means $r$ multiplied by itself $n-1$ times. Compare it with the arithmetic formula $a_1 + (n-1)d$:
adding $d$ again and again becomes multiplying by $r$ again and again.

### Why geometric sequences get huge (or tiny) so fast

Adding 2 each time, 30 steps take you from 1 to 61. Doubling each time, 30 steps take you from 1 to
$2^{29} = 536\,870\,912$. That is the difference between **linear** growth (arithmetic) and **exponential** growth
(geometric). Exponential growth always wins in the end, however slowly it starts.

### Adding up a geometric sequence

Call the sum $S_n = a_1 + a_1 r + a_1 r^2 + \cdots + a_1 r^{n-1}$. Multiply every term by $r$, then subtract:

$$
\begin{aligned}
S_n &= a_1 + a_1 r + a_1 r^2 + \cdots + a_1 r^{n-1}\\
r\,S_n &= \phantom{a_1 + {}} a_1 r + a_1 r^2 + \cdots + a_1 r^{n-1} + a_1 r^{n}\\
S_n - r\,S_n &= a_1 - a_1 r^{n}
\end{aligned}
$$

Almost everything cancels. Taking out the common factors, $S_n(1-r) = a_1(1-r^n)$, so

$$S_n = \frac{a_1\,(1 - r^{n})}{1 - r} \qquad (r \ne 1)$$

### Sums that go on forever

Walk halfway to a wall, then half of what is left, then half again. You walk $\tfrac12 + \tfrac14 + \tfrac18 + \cdots$
of the distance. You never take a last step, yet you never pass the wall either.

When $r$ is between −1 and 1, $r^n$ gets closer and closer to 0 as $n$ grows. Then the sum formula settles down to

$$S_\infty = \frac{a_1}{1 - r} \qquad (-1 < r < 1)$$

For the walk, $a_1 = \tfrac12$ and $r = \tfrac12$, so $S_\infty = \dfrac{1/2}{1/2} = 1$: the whole distance, exactly.
This is also why $0.999\ldots$ (nines forever) equals 1: it is $\tfrac{9}{10} + \tfrac{9}{100} + \cdots$, with
$a_1 = \tfrac{9}{10}$ and $r = \tfrac{1}{10}$, so the sum is $\dfrac{9/10}{9/10} = 1$.

## Worked examples

**1. The rice on the chessboard.** $a_1 = 1$, $r = 2$, $n = 64$:

$$S_{64} = \frac{1\times(1 - 2^{64})}{1 - 2} = 2^{64} - 1 = 18\,446\,744\,073\,709\,551\,615 \text{ grains.}$$

At roughly 50 000 grains in a kilogram, that is about 370 billion tonnes, hundreds of years of the whole world's rice
harvest.

**2. The power source on a Mars rover.** The Curiosity and Perseverance rovers are powered by the heat of
plutonium-238, which has a **half-life** of about 88 years: every 88 years, half of what is left decays. The amounts
after 0, 88, 176, 264 years form a geometric sequence with $r = \tfrac12$:

$$100\%,\ 50\%,\ 25\%,\ 12.5\%,\ \ldots \qquad a_n = 100\% \times \left(\tfrac12\right)^{n-1}$$

The rovers' power drops much faster than that in practice, because the parts that turn heat into electricity also
wear out, but the fuel itself follows this sequence exactly.

**3. Finding $r$ from two terms.** A geometric sequence has $a_2 = 12$ and $a_5 = 96$. From $a_2$ to $a_5$ is 3
steps, so $r^3 = \dfrac{96}{12} = 8$ and $r = 2$. Then $a_1 = \dfrac{12}{2} = 6$: the sequence is 6, 12, 24, 48, 96, ...

## Try it

1. Is 2, 6, 18, 54 geometric? What is $r$?
2. Find $a_{10}$ for 3, 6, 12, 24, ...
3. Add $1 + 3 + 9 + \cdots + 3^{7}$ (8 terms).
4. A ball is dropped from 2 m and each bounce reaches $\tfrac34$ of the height before. How far does it travel
   **up and down** in total, if it bounces forever?
5. Write $0.333\ldots$ as a fraction using the infinite sum formula.

??? note "Answers"
    1. Yes: $6 \div 2 = 18 \div 6 = 54 \div 18 = 3$, so $r = 3$.
    2. $a_{10} = 3 \times 2^{9} = 3 \times 512 = 1536$.
    3. $S_8 = \dfrac{1 - 3^8}{1 - 3} = \dfrac{1 - 6561}{-2} = 3280$.
    4. Down 2 m first. After that, each bounce goes up and comes down the same height: the heights are
       $1.5, 1.125, \ldots$ with $a_1 = 1.5$, $r = \tfrac34$, summing to $\dfrac{1.5}{1/4} = 6$ m. Up and down doubles
       that: 12 m. Total $2 + 12 = 14$ m.
    5. $0.3 + 0.03 + 0.003 + \cdots$ has $a_1 = \tfrac{3}{10}$, $r = \tfrac{1}{10}$: $\dfrac{3/10}{9/10} = \tfrac13$.

## Common mistake

**Using the infinite sum when $r$ is too big.** $1 + 2 + 4 + 8 + \cdots$ has no total: it grows without limit. The
formula $\dfrac{a_1}{1-r}$ would give $\dfrac{1}{1-2} = -1$, which is nonsense. Only use it when $r$ is strictly
between −1 and 1.

## Where it leads

- Next step: [Beyond: recursion and proof by induction](05-beyond.md).
- Back a step: [Build: arithmetic sequences](03-build.md)
- Exponential growth and decay continue in the guides to logarithms and $e$ on the U of T shelf:
  [MAT137 Unit 4](../../uoft/MAT137/unit04.md).
