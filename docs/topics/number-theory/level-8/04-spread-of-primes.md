---
title: "How the primes are spread out"
---

# How the primes are spread out

*Number theory · level 8, lesson 4 of 6*

## A question to start

Between 1 and 100 there are 25 primes: one number in four. Between 1 and 1000 there are 168: about one in six.
Between 1 and one million there are 78 498: about one in thirteen. The primes thin out as you go up.

Two questions follow. **How fast** do they thin out? And do they thin out **evenly**, or are there long deserts with
no primes at all? Here is a surprising answer to the second: there is a run of a **million** whole numbers in a row,
not one of them prime, and you can write down exactly where it starts.

## The idea

### Counting primes

We already know (level 4, Euclid's proof) that there are infinitely many primes. To measure how common they are,
mathematicians use the **prime counting function**:

$$\pi(x) = \text{the number of primes that are at most } x.$$

(This $\pi$ has nothing to do with 3.14159...; it is just the Greek letter p, for "prime".) So $\pi(10) = 4$ (2, 3, 5,
7) and $\pi(100) = 25$.

| $x$ | $\pi(x)$ | $x / \pi(x)$: one number in ... is prime |
| --- | --- | --- |
| $10$ | 4 | 2.5 |
| $100$ | 25 | 4.0 |
| $1000$ | 168 | 6.0 |
| $10^4$ | 1229 | 8.1 |
| $10^5$ | 9592 | 10.4 |
| $10^6$ | 78 498 | 12.7 |
| $10^7$ | 664 579 | 15.0 |
| $10^8$ | 5 761 455 | 17.4 |
| $10^9$ | 50 847 534 | 19.7 |

Look at the last column. Each time $x$ is multiplied by 10, the gap "one in ..." grows by about **2.3**. Adding a fixed
amount each time you multiply by a fixed amount is exactly how a **logarithm** behaves. And $2.3$ is about
$\ln 10 \approx 2.303$, where $\ln$ is the **natural logarithm**, the logarithm to base $e \approx 2.718$ (see
[Change](../../change/index.md)). So the table suggests: near $x$, about one number in $\ln x$ is prime.

### The prime number theorem

> **The prime number theorem.** For large $x$,
>
> $$\pi(x) \approx \frac{x}{\ln x},$$
>
> in the sense that the ratio
> $\pi(x) \big/ \dfrac{x}{\ln x}$ gets closer and closer to 1 as $x$ grows.

The drawing shows $\pi(x)$ (a staircase, going up one step at each prime) and the smooth curve $x / \ln x$, for $x$ up
to 100.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 200" role="img" aria-label="The prime counting function up to 100, a staircase rising one step at each prime to 25, and the smooth curve x over ln x, which stays a little below it and reaches about 21.7 at 100">
  <line x1="30" y1="170" x2="295" y2="170" stroke="currentColor" stroke-width="1"/>
  <line x1="30" y1="170" x2="30" y2="20" stroke="currentColor" stroke-width="1"/>
  <line x1="27" y1="115" x2="33" y2="115" stroke="currentColor"/><text x="22" y="119" font-size="10" text-anchor="end" fill="currentColor">10</text>
  <line x1="27" y1="60" x2="33" y2="60" stroke="currentColor"/><text x="22" y="64" font-size="10" text-anchor="end" fill="currentColor">20</text>
  <line x1="160" y1="167" x2="160" y2="173" stroke="currentColor"/><text x="160" y="185" font-size="10" text-anchor="middle" fill="currentColor">50</text>
  <line x1="290" y1="167" x2="290" y2="173" stroke="currentColor"/><text x="290" y="185" font-size="10" text-anchor="middle" fill="currentColor">100</text>
  <path d="M 30.0 170.0 L 35.2 170.0 L 35.2 164.5 L 37.8 164.5 L 37.8 159.0 L 43.0 159.0 L 43.0 153.5 L 48.2 153.5 L 48.2 148.0 L 58.6 148.0 L 58.6 142.5 L 63.8 142.5 L 63.8 137.0 L 74.2 137.0 L 74.2 131.5 L 79.4 131.5 L 79.4 126.0 L 89.8 126.0 L 89.8 120.5 L 105.4 120.5 L 105.4 115.0 L 110.6 115.0 L 110.6 109.5 L 126.2 109.5 L 126.2 104.0 L 136.6 104.0 L 136.6 98.5 L 141.8 98.5 L 141.8 93.0 L 152.2 93.0 L 152.2 87.5 L 167.8 87.5 L 167.8 82.0 L 183.4 82.0 L 183.4 76.5 L 188.6 76.5 L 188.6 71.0 L 204.2 71.0 L 204.2 65.5 L 214.6 65.5 L 214.6 60.0 L 219.8 60.0 L 219.8 54.5 L 235.4 54.5 L 235.4 49.0 L 245.8 49.0 L 245.8 43.5 L 261.4 43.5 L 261.4 38.0 L 282.2 38.0 L 282.2 32.5 L 290.0 32.5" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <path d="M 37.8 155.0 L 43.0 152.9 L 48.2 150.2 L 53.4 147.5 L 58.6 144.8 L 63.8 142.1 L 69.0 139.5 L 74.2 137.0 L 79.4 134.5 L 84.6 132.1 L 89.8 129.7 L 95.0 127.3 L 100.2 124.9 L 105.4 122.6 L 110.6 120.3 L 115.8 118.1 L 121.0 115.9 L 126.2 113.6 L 131.4 111.5 L 136.6 109.3 L 141.8 107.1 L 147.0 105.0 L 152.2 102.9 L 157.4 100.8 L 162.6 98.7 L 167.8 96.6 L 173.0 94.5 L 178.2 92.5 L 183.4 90.4 L 188.6 88.4 L 193.8 86.4 L 199.0 84.4 L 204.2 82.4 L 209.4 80.4 L 214.6 78.4 L 219.8 76.4 L 225.0 74.5 L 230.2 72.5 L 235.4 70.6 L 240.6 68.6 L 245.8 66.7 L 251.0 64.8 L 256.2 62.9 L 261.4 60.9 L 266.6 59.0 L 271.8 57.2 L 277.0 55.3 L 282.2 53.4 L 287.4 51.5" fill="none" stroke="#9cc9ea" stroke-width="2.5"/>
  <text x="200" y="40" font-size="12" fill="currentColor">π(x)</text>
  <text x="235" y="95" font-size="12" fill="currentColor">x / ln x</text>
</svg>
</div>

The theorem was guessed from tables. Carl Friedrich Gauss later wrote, in a letter of 1849, that he had noticed the
pattern as a teenager around 1792; Adrien-Marie Legendre published a similar guess in 1798. It was **proved** in
1896, by Jacques Hadamard and Charles de la Vallée Poussin, independently and in the same year. Their proofs use
complex numbers and calculus, far beyond this lesson, so here the theorem is **stated, not proved**.

Two honest remarks about what it says:

- It is about the **ratio**, not the difference. At $x = 10^9$ the estimate $x / \ln x \approx 48\,254\,942$ is off
  by more than two and a half million, yet the ratio is $1.054$, slowly approaching 1.
- A better estimate exists (the "logarithmic integral" $\operatorname{Li}(x)$, which adds up $1/\ln t$), but
  $x / \ln x$ is the simplest form of the idea.

### What it means: the chance that a number is prime

A way to read the theorem: **a number picked at random near $x$ is prime with probability about $1/\ln x$.** This is
very practical. For RSA (lesson 2) we need primes with about 300 digits. Near $10^{300}$, $\ln x = 300 \ln 10 \approx
691$, so about one number in 691 is prime. Skipping even numbers, about one odd number in 345. So a computer that tries
random odd 300-digit numbers with a fast primality test (level 7) finds a prime after a few hundred tries. **The prime
number theorem is why there are always plenty of primes for codes.**

### Gaps can be as long as you like

Now the opening puzzle. Take any whole number $n \ge 2$ and look at the $n - 1$ numbers

$$n! + 2,\quad n! + 3,\quad n! + 4,\quad \ldots,\quad n! + n.$$

Here $n! = 1 \times 2 \times 3 \times \cdots \times n$. Each one is composite:

- $n! + 2$: both $n!$ and 2 are multiples of 2, so their sum is too (and it is bigger than 2);
- $n! + 3$: $n!$ contains the factor 3, so $n! + 3$ is a multiple of 3;
- in general $n! + k$, for $2 \le k \le n$, is a multiple of $k$, because $k$ is one of the factors of $n!$.

So there are $n - 1$ composites in a row. With $n = 1\,000\,001$ you get a million composites in a row, starting at
$1\,000\,001! + 2$. These numbers are astronomically large, and real gaps of that length appear much earlier, but the
argument shows that **gaps between primes have no upper limit**.

For a small check, $n = 5$: $5! = 120$, and 122, 123, 124, 125 are divisible by 2, 3, 4, 5. (The real first run of 4
composites is much earlier: 24, 25, 26, 27, 28 between 23 and 29.)

### But never too long: Bertrand's postulate

Gaps can be long, but not too long compared with where they are.

> **Bertrand's postulate.** For every $n \ge 1$ there is a prime $p$ with $n < p \le 2n$.

Joseph Bertrand checked it numerically and Pafnuty Chebyshev proved it around 1850. So from any $n$ you never go past
$2n$ without meeting a prime. The prime number theorem says even more: for large $n$, the number of primes between
$n$ and $2n$ is about $n / \ln n$, a huge number.

### Primes in clock positions

One more pattern. Every prime above 3 is $1$ or $5 \bmod 6$ (anything else is a multiple of 2 or 3). Are the primes
shared fairly between these two positions? Yes: Peter Gustav Lejeune Dirichlet proved in 1837 that if $\gcd(a, n) =
1$ there are infinitely many primes that are $a \bmod n$, and later work showed they are shared out evenly among the
$\varphi(n)$ possible positions in the long run. So there are infinitely many primes of the form $4k + 1$ (the sums of
two squares of level 7) and infinitely many of the form $4k + 3$.

## Worked examples

**1. Using the estimate.** About how many primes are there below one billion? $x / \ln x = 10^9 / (9 \ln 10) \approx
10^9 / 20.72 \approx 48\,000\,000$. The true count is 50 847 534, so the estimate is about 5% low.

**2. Primes with 100 digits.** Near $10^{100}$, $\ln x = 100 \ln 10 \approx 230$. So about 1 in 230 numbers of that
size is prime, or about 1 in 115 odd ones.

**3. A gap of 6.** Find six composites in a row using factorials: $n = 7$, $7! = 5040$, so 5042, 5043, 5044, 5045,
5046, 5047 are divisible by 2, 3, 4, 5, 6, 7 in turn. The first such run in fact appears much earlier: 90, 91, 92, 93,
94, 95, 96 (seven composites between the primes 89 and 97).

**4. Bertrand in action.** Between 100 and 200: the theorem promises at least one prime; there are 21 of them (101,
103, 107, ...). Between 1000 and 2000 there are 135. The estimate $n / \ln n$ with $n = 1000$ gives about 145, which
is in the right range.

**5. How rare among 6-digit numbers?** Primes below $10^6$: 78 498; below $10^5$: 9592. So 6-digit primes number
$78\,498 - 9592 = 68\,906$ among $900\,000$ six-digit numbers: about 1 in 13, matching $\ln(10^6) \approx 13.8$ well
enough.

## Try it

1. List the primes up to 50 and find $\pi(50)$. Compare with $50 / \ln 50$ (use $\ln 50 \approx 3.91$).
2. Use factorials to write down five composite numbers in a row. Then find a smaller run of five by looking at a list
   of primes.
3. About what fraction of 50-digit numbers are prime? (Use $\ln 10 \approx 2.303$.)
4. A computer tests random odd 600-digit numbers for primality. About how many tests should it expect before finding a
   prime?
5. Explain why $n! + 1$ is **not** included in the gap argument, and why $n! + (n + 1)$ might be prime.
6. Use Bertrand's postulate to show that there is a prime with exactly 4 digits whose first digit is 1. (Hint: take
   $n = 500$, then think again with $n = 1000$.)
7. The ratio $\pi(x) \big/ (x / \ln x)$ was 1.151 at $x = 100$ and 1.054 at $x = 10^9$. Does the prime number theorem
   say how fast it reaches 1? What does it say?

??? note "Answers"
    1. 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47: $\pi(50) = 15$. $50 / 3.91 \approx 12.8$, a little low.
    2. $6! = 720$: 722, 723, 724, 725, 726 are divisible by 2, 3, 4, 5, 6. Smaller: between the primes 23 and 29 lie
       24, 25, 26, 27, 28.
    3. $\ln(10^{50}) = 50 \times 2.303 \approx 115$, so about **1 in 115** fifty-digit numbers is prime.
    4. $\ln(10^{600}) \approx 600 \times 2.303 \approx 1382$. One number in 1382 is prime, and one **odd** number in
       about 691. So about **700** tests on average.
    5. $n! + 1$ is not a multiple of any $k$ from 2 to $n$ (it leaves remainder 1), so the argument says nothing about
       it; it may be prime ($3! + 1 = 7$) or not ($4! + 1 = 25$). $n! + (n + 1)$ is a multiple of $n + 1$ only when
       $n + 1$ divides $n!$, which fails when $n + 1$ is prime; e.g. $4! + 5 = 29$ is prime.
    6. With $n = 500$ we get a prime between 500 and 1000: only 3 digits, so not enough. With $n = 1000$: there is a
       prime $p$ with $1000 < p \le 2000$. It has 4 digits and first digit 1 (2000 itself is not prime). ✓ (1009 is
       one.)
    7. No. The prime number theorem only says the ratio **tends** to 1; it gives no speed. Sharper versions with error
       bounds exist, and the best possible error bound is tied to the Riemann hypothesis (lesson 5).

## Common mistake

**Reading $\pi(x)$ as the number 3.14159...** In this lesson $\pi(x)$ is a function: "how many primes up to $x$". The
symbol is the same, the meaning is not.

**Thinking the prime number theorem gives the exact count.** It is an approximation whose **ratio** tends to 1. At
$x = 10^9$ it is off by about 2.6 million. It describes the average density, and says nothing about where the next
prime is.

## Where it leads

- Previous: [Diffie-Hellman key exchange](03-diffie-hellman.md) · Next: [Famous open problems](05-open-problems.md),
  where the error in the prime number theorem meets the Riemann hypothesis.
- [Level 8 page](index.md) · [Number theory topic page](../index.md) · Euclid's proof that the primes never end:
  [Level 4](../level-4/index.md)
- Natural logarithms and $e$: [Change](../../change/index.md) and
  [MAT137 Unit 4 (transcendental functions)](../../../uoft/MAT137/unit04.md). Euler showed that the sum of $1/p$ over
  all primes is infinite, a fact about series: [MAT137 Unit 13 (series)](../../../uoft/MAT137/unit13.md).
- Factorials and the chance that a random number is prime: [Counting](../../counting/index.md) and
  [Probability](../../probability/index.md).
