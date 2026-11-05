# 13. How primes are spread

*Euclid proved that the primes never run out. But how many are there up to a million, or up to $10^{100}$? Are they
spread evenly, or do they cluster? Is there always a prime between $n$ and $2n$? How close together can two primes be,
infinitely often? This chapter begins analytic number theory: the study of primes by estimates and inequalities
rather than exact formulas. You will count primes and compare the counts with Gauss's guess, prove Chebyshev's
bounds using nothing but binomial coefficients, prove Bertrand's postulate by Erdős's argument, prove that the sum of
the reciprocals of the primes diverges, meet Mertens' theorems, and end at the research frontier with Zhang's 2013
theorem on bounded gaps between primes.*

!!! abstract "In this chapter"
    **You will learn:**

    - what $\pi(x)$ is, how it compares with $x/\ln x$ and with Gauss's $\operatorname{li}(x)$, and what tables show
    - Legendre's formula for the power of $p$ in $n!$, and why the central binomial coefficient $\binom{2n}{n}$ knows so much about primes
    - Chebyshev's theorem: $\pi(x)$ is between two constant multiples of $x/\ln x$ (full proof)
    - Bertrand's postulate: there is always a prime between $n$ and $2n$ (Erdős's full proof)
    - why $\sum 1/p$ diverges, and Mertens' sharper statements (the first one proved)
    - what is known about gaps between primes: long gaps, Zhang's bounded gaps, Maynard, Polymath, and what is still open

    **You need:** [Chapter 2](02-Primes-and-Unique-Factorization.md) (primes and unique factorization) and basic
    calculus: logarithms, the integral of $1/t$, and comparing a sum with an integral (the U of T guide
    [MAT137 Unit 13, Series](../../uoft/MAT137/unit13.md) covers what is needed). For a gentler start, see the Topics
    lessons [How the primes are spread out](../../topics/number-theory/level-8/04-spread-of-primes.md) and
    [Famous open problems](../../topics/number-theory/level-8/05-open-problems.md).

    **Levels:** 13.1 is intermediate; 13.2, 13.3 and 13.4 are advanced (full proofs); 13.5 is advanced (one theorem
    proved, two stated); 13.6 is expert (statements and history of current research).

Throughout, $\ln$ is the natural logarithm and $p$ always stands for a prime. A sum or product "over $p \leq x$"
runs over the primes up to $x$.

## 13.1 Counting primes

*Level: intermediate.*

Let $\pi(x)$ be the number of primes up to $x$. (This $\pi$ has nothing to do with $3.14159\ldots$; the notation is
traditional.) So $\pi(10) = 4$, counting $2, 3, 5, 7$, and $\pi(2.5) = 1$. Here is what a computer finds, next to two
guesses that we will explain in a moment.

| $x$ | $\pi(x)$ | $x / \ln x$ | $\operatorname{li}(x)$ | $\pi(x) / (x/\ln x)$ |
| --- | --- | --- | --- | --- |
| $10$ | 4 | 4 | 6 | 0.921 |
| $10^2$ | 25 | 22 | 30 | 1.151 |
| $10^3$ | 168 | 145 | 178 | 1.161 |
| $10^4$ | 1229 | 1086 | 1246 | 1.132 |
| $10^5$ | 9592 | 8686 | 9630 | 1.104 |
| $10^6$ | 78498 | 72382 | 78628 | 1.084 |
| $10^7$ | 664579 | 620421 | 664918 | 1.071 |
| $10^8$ | 5761455 | 5428681 | 5762209 | 1.061 |
| $10^9$ | 50847534 | 48254942 | 50849235 | 1.054 |
| $10^{10}$ | 455052511 | 434294482 | 455055615 | 1.048 |

(The middle columns are rounded to whole numbers.) Three things stand out.

1. **The primes thin out**, but slowly. One number in 4 below 100 is prime, one in 8 below $10^4$, one in about 22
   below $10^{10}$. Each extra factor of 10 adds about $\ln 10 \approx 2.3$ to the "one in ...".
2. **$x/\ln x$ is a good guess**, too small by a few percent, with the ratio creeping down towards 1.
3. **$\operatorname{li}(x)$ is an astonishingly good guess.** The **logarithmic integral** is

$$
\operatorname{li}(x) = \int_0^x \frac{dt}{\ln t}
$$

(taken as a principal value through the bad point $t = 1$; many books use $\int_2^x$ instead, which differs by about
1.045). At $x = 10^{10}$ it is off by only about 3100 out of 455 million.

Where do these guesses come from? In a letter of 1849 to the astronomer Encke, Gauss recalled that as a boy, around
1792 or 1793, he had studied tables of primes and noticed that near $t$ the primes have density about $1/\ln t$: in
a stretch of length $\Delta$ near $t$, about $\Delta / \ln t$ of the numbers are prime. Adding up those densities from
2 to $x$ gives $\operatorname{li}(x)$. Legendre, independently, published in 1798 and 1808 the formula
$x/(\ln x - 1.08366)$, which fits small tables well.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 280" role="img" aria-label="The prime-counting function pi of x for x from 0 to 100 drawn as a staircase that reaches 25, with the smooth curves x over log x, which stays below it, and the logarithmic integral li of x, which stays a little above it.">
  <line x1="40" y1="250" x2="280" y2="250" stroke="currentColor" stroke-width="1"/>
  <line x1="40" y1="250" x2="40" y2="10" stroke="currentColor" stroke-width="1"/>
  <text x="36" y="174" font-size="10" text-anchor="end" fill="currentColor">10</text>
  <line x1="40" y1="170" x2="280" y2="170" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3"/>
  <text x="36" y="94" font-size="10" text-anchor="end" fill="currentColor">20</text>
  <line x1="40" y1="90" x2="280" y2="90" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3"/>
  <text x="36" y="14" font-size="10" text-anchor="end" fill="currentColor">30</text>
  <line x1="40" y1="10" x2="280" y2="10" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3"/>
  <text x="100" y="264" font-size="10" text-anchor="middle" fill="currentColor">25</text>
  <text x="160" y="264" font-size="10" text-anchor="middle" fill="currentColor">50</text>
  <text x="220" y="264" font-size="10" text-anchor="middle" fill="currentColor">75</text>
  <text x="280" y="264" font-size="10" text-anchor="middle" fill="currentColor">100</text>
  <polyline fill="none" stroke="#eea66f" stroke-width="2" points="40.0,250.0 44.8,250.0 44.8,242.0 47.2,242.0 47.2,234.0 52.0,234.0 52.0,226.0 56.8,226.0 56.8,218.0 66.4,218.0 66.4,210.0 71.2,210.0 71.2,202.0 80.8,202.0 80.8,194.0 85.6,194.0 85.6,186.0 95.2,186.0 95.2,178.0 109.6,178.0 109.6,170.0 114.4,170.0 114.4,162.0 128.8,162.0 128.8,154.0 138.4,154.0 138.4,146.0 143.2,146.0 143.2,138.0 152.8,138.0 152.8,130.0 167.2,130.0 167.2,122.0 181.6,122.0 181.6,114.0 186.4,114.0 186.4,106.0 200.8,106.0 200.8,98.0 210.4,98.0 210.4,90.0 215.2,90.0 215.2,82.0 229.6,82.0 229.6,74.0 239.2,74.0 239.2,66.0 253.6,66.0 253.6,58.0 272.8,58.0 272.8,50.0 280.0,50.0"/>
  <polyline fill="none" stroke="#9cc9ea" stroke-width="2" points="47.2,228.2 48.4,227.6 49.6,226.9 50.8,226.1 52.0,225.1 53.2,224.2 54.4,223.2 55.6,222.2 56.8,221.2 58.0,220.2 59.2,219.2 60.4,218.2 61.6,217.2 62.8,216.2 64.0,215.3 65.2,214.3 66.4,213.3 67.6,212.3 68.8,211.4 70.0,210.4 71.2,209.5 72.4,208.5 73.6,207.6 74.8,206.6 76.0,205.7 77.2,204.8 78.4,203.8 79.6,202.9 80.8,202.0 82.0,201.1 83.2,200.2 84.4,199.3 85.6,198.4 86.8,197.5 88.0,196.6 89.2,195.7 90.4,194.8 91.6,193.9 92.8,193.1 94.0,192.2 95.2,191.3 96.4,190.4 97.6,189.6 98.8,188.7 100.0,187.9 101.2,187.0 102.4,186.2 103.6,185.3 104.8,184.5 106.0,183.6 107.2,182.8 108.4,181.9 109.6,181.1 110.8,180.3 112.0,179.4 113.2,178.6 114.4,177.8 115.6,177.0 116.8,176.1 118.0,175.3 119.2,174.5 120.4,173.7 121.6,172.9 122.8,172.1 124.0,171.2 125.2,170.4 126.4,169.6 127.6,168.8 128.8,168.0 130.0,167.2 131.2,166.4 132.4,165.6 133.6,164.8 134.8,164.0 136.0,163.3 137.2,162.5 138.4,161.7 139.6,160.9 140.8,160.1 142.0,159.3 143.2,158.5 144.4,157.8 145.6,157.0 146.8,156.2 148.0,155.4 149.2,154.7 150.4,153.9 151.6,153.1 152.8,152.3 154.0,151.6 155.2,150.8 156.4,150.0 157.6,149.3 158.8,148.5 160.0,147.8 161.2,147.0 162.4,146.2 163.6,145.5 164.8,144.7 166.0,144.0 167.2,143.2 168.4,142.5 169.6,141.7 170.8,141.0 172.0,140.2 173.2,139.5 174.4,138.7 175.6,138.0 176.8,137.2 178.0,136.5 179.2,135.7 180.4,135.0 181.6,134.2 182.8,133.5 184.0,132.8 185.2,132.0 186.4,131.3 187.6,130.6 188.8,129.8 190.0,129.1 191.2,128.4 192.4,127.6 193.6,126.9 194.8,126.2 196.0,125.4 197.2,124.7 198.4,124.0 199.6,123.2 200.8,122.5 202.0,121.8 203.2,121.1 204.4,120.4 205.6,119.6 206.8,118.9 208.0,118.2 209.2,117.5 210.4,116.8 211.6,116.0 212.8,115.3 214.0,114.6 215.2,113.9 216.4,113.2 217.6,112.5 218.8,111.7 220.0,111.0 221.2,110.3 222.4,109.6 223.6,108.9 224.8,108.2 226.0,107.5 227.2,106.8 228.4,106.1 229.6,105.4 230.8,104.7 232.0,103.9 233.2,103.2 234.4,102.5 235.6,101.8 236.8,101.1 238.0,100.4 239.2,99.7 240.4,99.0 241.6,98.3 242.8,97.6 244.0,96.9 245.2,96.2 246.4,95.5 247.6,94.8 248.8,94.2 250.0,93.5 251.2,92.8 252.4,92.1 253.6,91.4 254.8,90.7 256.0,90.0 257.2,89.3 258.4,88.6 259.6,87.9 260.8,87.2 262.0,86.5 263.2,85.9 264.4,85.2 265.6,84.5 266.8,83.8 268.0,83.1 269.2,82.4 270.4,81.7 271.6,81.1 272.8,80.4 274.0,79.7 275.2,79.0 276.4,78.3 277.6,77.6 278.8,77.0 280.0,76.3"/>
  <polyline fill="none" stroke="#7ccf9a" stroke-width="2" points="44.8,241.6 46.0,236.7 47.2,232.7 48.4,229.3 49.6,226.3 50.8,223.5 52.0,220.9 53.2,218.5 54.4,216.2 55.6,214.0 56.8,211.9 58.0,209.9 59.2,208.0 60.4,206.1 61.6,204.2 62.8,202.4 64.0,200.7 65.2,199.0 66.4,197.3 67.6,195.6 68.8,194.0 70.0,192.4 71.2,190.8 72.4,189.3 73.6,187.8 74.8,186.2 76.0,184.8 77.2,183.3 78.4,181.8 79.6,180.4 80.8,179.0 82.0,177.6 83.2,176.2 84.4,174.8 85.6,173.5 86.8,172.1 88.0,170.8 89.2,169.4 90.4,168.1 91.6,166.8 92.8,165.5 94.0,164.2 95.2,162.9 96.4,161.7 97.6,160.4 98.8,159.1 100.0,157.9 101.2,156.7 102.4,155.4 103.6,154.2 104.8,153.0 106.0,151.8 107.2,150.6 108.4,149.4 109.6,148.2 110.8,147.0 112.0,145.8 113.2,144.6 114.4,143.5 115.6,142.3 116.8,141.2 118.0,140.0 119.2,138.9 120.4,137.7 121.6,136.6 122.8,135.5 124.0,134.3 125.2,133.2 126.4,132.1 127.6,131.0 128.8,129.9 130.0,128.8 131.2,127.7 132.4,126.6 133.6,125.5 134.8,124.4 136.0,123.3 137.2,122.2 138.4,121.1 139.6,120.0 140.8,119.0 142.0,117.9 143.2,116.8 144.4,115.8 145.6,114.7 146.8,113.7 148.0,112.6 149.2,111.6 150.4,110.5 151.6,109.5 152.8,108.4 154.0,107.4 155.2,106.4 156.4,105.3 157.6,104.3 158.8,103.3 160.0,102.3 161.2,101.2 162.4,100.2 163.6,99.2 164.8,98.2 166.0,97.2 167.2,96.2 168.4,95.2 169.6,94.2 170.8,93.1 172.0,92.2 173.2,91.2 174.4,90.2 175.6,89.2 176.8,88.2 178.0,87.2 179.2,86.2 180.4,85.2 181.6,84.2 182.8,83.3 184.0,82.3 185.2,81.3 186.4,80.3 187.6,79.4 188.8,78.4 190.0,77.4 191.2,76.4 192.4,75.5 193.6,74.5 194.8,73.6 196.0,72.6 197.2,71.6 198.4,70.7 199.6,69.7 200.8,68.8 202.0,67.8 203.2,66.9 204.4,65.9 205.6,65.0 206.8,64.0 208.0,63.1 209.2,62.2 210.4,61.2 211.6,60.3 212.8,59.4 214.0,58.4 215.2,57.5 216.4,56.6 217.6,55.6 218.8,54.7 220.0,53.8 221.2,52.8 222.4,51.9 223.6,51.0 224.8,50.1 226.0,49.2 227.2,48.2 228.4,47.3 229.6,46.4 230.8,45.5 232.0,44.6 233.2,43.7 234.4,42.7 235.6,41.8 236.8,40.9 238.0,40.0 239.2,39.1 240.4,38.2 241.6,37.3 242.8,36.4 244.0,35.5 245.2,34.6 246.4,33.7 247.6,32.8 248.8,31.9 250.0,31.0 251.2,30.1 252.4,29.2 253.6,28.3 254.8,27.5 256.0,26.6 257.2,25.7 258.4,24.8 259.6,23.9 260.8,23.0 262.0,22.1 263.2,21.2 264.4,20.4 265.6,19.5 266.8,18.6 268.0,17.7 269.2,16.8 270.4,16.0 271.6,15.1 272.8,14.2 274.0,13.3 275.2,12.5 276.4,11.6 277.6,10.7 278.8,9.9 280.0,9.0"/>
  <text x="60" y="30" font-size="11" fill="#eea66f">π(x)</text>
  <text x="60" y="44" font-size="11" fill="currentColor"><tspan fill="#9cc9ea">x / ln x</tspan>   <tspan fill="#7ccf9a">li(x)</tspan></text>
</svg>
</div>

The statement that these guesses are right in the long run is the **prime number theorem**:

$$
\pi(x) \sim \frac{x}{\ln x}, \qquad\text{meaning}\qquad \lim_{x \to \infty} \frac{\pi(x)}{x / \ln x} = 1 .
$$

Since $\operatorname{li}(x) \sim x/\ln x$ too (integrate by parts), the theorem says the same about $\operatorname{li}(x)$,
although $\operatorname{li}(x)$ is the far better approximation. Hadamard and de la Vallée Poussin proved the theorem
independently in 1896, using Riemann's zeta function; that is the subject of
[Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md). In this chapter we prove what can be proved with
elementary tools, and that turns out to be a great deal.

**A warning from the table.** In every row, $\operatorname{li}(x) > \pi(x)$. In fact this holds for every $x$ ever
checked directly. Yet Littlewood proved in 1914 that $\pi(x) - \operatorname{li}(x)$ changes sign infinitely often.
The first sign change is known to be somewhere below about $10^{317}$, far beyond any table, and its exact location
is unknown. Numerical evidence in number theory can be overwhelming and still wrong.

**How is $\pi(10^{10})$ computed?** Not by listing primes. Legendre noticed that inclusion–exclusion over the primes up
to $\sqrt x$ counts the primes up to $x$, and Meissel in the 1870s turned this into a practical method; he computed
$\pi(10^9)$ by hand (getting it slightly wrong). Refinements by Lehmer, by Lagarias, Miller and Odlyzko, and by Deléglise
and Rivat, and analytic methods based on the zeta function, now give exact values of $\pi(x)$ far beyond $10^{20}$.

<figure class="play" data-play="primecount"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> π(x), the number of primes up to x, against x / ln x. Their ratio creeps towards 1, as the prime number theorem says.</figcaption></figure>

## 13.2 Chebyshev's bounds

*Level: advanced.*

Before 1896 nobody could prove the prime number theorem. But around 1850 Pafnuty Chebyshev proved that $\pi(x)$ is at
least *of the right size*: between two constant multiples of $x/\ln x$. The proof below follows the elementary
approach that grew out of Chebyshev's work, as streamlined by Erdős and others. It uses one object, the **central
binomial coefficient**

$$
\binom{2n}{n} = \frac{(2n)!}{n!\,n!}.
$$

### Three facts about $\binom{2n}{n}$

**Fact A (size).** For $n \geq 1$,

$$
\frac{4^n}{2n + 1} \leq \binom{2n}{n} \leq 4^n .
$$

*Proof.* By the binomial theorem, $4^n = (1 + 1)^{2n} = \sum_{k=0}^{2n} \binom{2n}{k}$. The sum has $2n + 1$ terms,
all positive, and the middle one is the largest (each $\binom{2n}{k+1} / \binom{2n}{k} = (2n - k)/(k + 1)$ is at least
1 exactly when $k < n$). So the middle term is at most the whole sum and at least the average. $\square$

**Fact B (Legendre's formula, 1808).** The exponent of a prime $p$ in $m!$ is

$$
v_p(m!) = \left\lfloor \frac mp \right\rfloor + \left\lfloor \frac m{p^2} \right\rfloor + \left\lfloor \frac m{p^3} \right\rfloor + \cdots .
$$

*Proof.* $v_p(m!) = \sum_{j=1}^m v_p(j)$. A number $j$ with $v_p(j) = e$ is counted once in each of the first $e$
terms: once as a multiple of $p$, once as a multiple of $p^2$, ..., once as a multiple of $p^e$. The $i$-th term
$\lfloor m/p^i \rfloor$ counts the multiples of $p^i$ up to $m$. $\square$

Example: $v_3(30!) = 10 + 3 + 1 = 14$.

**Fact C (each prime power in $\binom{2n}{n}$ is at most $2n$).** If $p^e$ exactly divides $\binom{2n}{n}$, then
$p^e \leq 2n$. Moreover every prime $p$ with $n < p \leq 2n$ divides $\binom{2n}{n}$ exactly once.

*Proof.* By Fact B,

$$
v_p\binom{2n}{n} = \sum_{i \geq 1} \left( \left\lfloor \frac{2n}{p^i} \right\rfloor - 2 \left\lfloor \frac{n}{p^i} \right\rfloor \right).
$$

Each bracket is 0 or 1 (for any real $y$, $\lfloor 2y \rfloor - 2\lfloor y \rfloor$ is 0 or 1), and it is 0 once
$p^i > 2n$. So the exponent is at most the number of $i$ with $p^i \leq 2n$, which gives $p^e \leq 2n$. For
$n < p \leq 2n$, only $i = 1$ counts, and $\lfloor 2n/p \rfloor - 2\lfloor n/p \rfloor = 1 - 0 = 1$. $\square$

Example: $\binom{30}{15} = 155117520 = 2^4 \cdot 3^2 \cdot 5 \cdot 17 \cdot 19 \cdot 23 \cdot 29$. The primes
$17, 19, 23, 29$ between 15 and 30 each appear once; $2^4 = 16$, $3^2 = 9$ and $5$ are all at most 30; and 7, 11, 13
are missing altogether.

### The upper bound

**Lemma 13.1 (Erdős).** For every whole number $x \geq 1$, the product of all primes $p \leq x$ is less than $4^x$.

*Proof.* By strong induction on $x$. For $x = 1, 2$: the products are $1 < 4$ and $2 < 16$. If $x > 2$ is even, it is
not prime and the product is the same as for $x - 1$, which is less than $4^{x-1}$. If $x = 2m + 1$ is odd, split the
primes at $m + 1$. Every prime $p$ with $m + 1 < p \leq 2m + 1$ divides

$$
\binom{2m+1}{m} = \frac{(2m+1)!}{m!\,(m+1)!}
$$

(it divides the numerator, not the denominator). This coefficient appears twice in the sum
$\sum_k \binom{2m+1}{k} = 2^{2m+1}$ (as $\binom{2m+1}{m}$ and $\binom{2m+1}{m+1}$), so it is at most $4^m$. Hence

$$
\prod_{p \leq 2m+1} p = \prod_{p \leq m+1} p \cdot \prod_{m+1 < p \leq 2m+1} p < 4^{m+1} \cdot 4^m = 4^{2m+1}. \qquad \square
$$

Taking logarithms: the **Chebyshev function** $\theta(x) = \sum_{p \leq x} \ln p$ satisfies $\theta(x) < x \ln 4$.

**Theorem 13.2 (upper bound).** For $x \geq 2$, $\displaystyle \pi(x) < (1 + 4\ln 2)\, \frac{x}{\ln x} \approx 3.77\, \frac{x}{\ln x}$.

*Proof.* Primes above $\sqrt x$ each contribute more than $\ln \sqrt x = \tfrac12 \ln x$ to $\theta(x)$, and there are
$\pi(x) - \pi(\sqrt x)$ of them. So

$$
\bigl(\pi(x) - \pi(\sqrt x)\bigr) \cdot \tfrac12 \ln x \leq \theta(x) < x \ln 4,
\qquad\text{so}\qquad \pi(x) < \sqrt x + \frac{2 x \ln 4}{\ln x} .
$$

Finally $\sqrt x \leq x/\ln x$ (that is, $\ln x \leq \sqrt x$, true for all $x > 0$), and $2\ln 4 = 4 \ln 2$. $\square$

### The lower bound

**Theorem 13.3 (lower bound).** For every $n \geq 1$, $\displaystyle \pi(2n) \geq \frac{\ln 2}{2} \cdot \frac{2n}{\ln(2n)}$.

*Proof.* By Fact C, $\binom{2n}{n}$ is a product of prime powers, one for each prime up to $2n$ at most, each at most
$2n$. So $\binom{2n}{n} \leq (2n)^{\pi(2n)}$. On the other hand $\binom{2n}{n} = \prod_{k=1}^{n} \frac{n + k}{k} \geq
2^n$, since each factor $(n + k)/k \geq 2$. Taking logarithms, $n \ln 2 \leq \pi(2n) \ln(2n)$. $\square$

Odd $x$ costs only a little: $\pi(x) \geq \pi(x - 1)$. Using the stronger $\binom{2n}{n} \geq 4^n/(2n+1)$ from Fact A
pushes the constant up towards $\ln 2 \approx 0.69$. A computer check shows that in fact
$\pi(x) \geq \frac{\ln 2}{2} \cdot \frac{x}{\ln x}$ for every $x$ from 2 to 20000, with equality at $x = 2$.

Check with $n = 50$: $\pi(100) = 25$, and the bound promises $0.3466 \cdot 100/4.605 \approx 7.5$. True, and far from
sharp, but the point is the *shape*: $\pi(x)$ is squeezed between $c_1 x/\ln x$ and $c_2 x/\ln x$.

**What Chebyshev did.** Chebyshev worked with the more refined weighted counts $\theta(x)$ and
$\psi(x) = \sum_{p^k \leq x} \ln p$ and with $\ln(\lfloor x \rfloor !)$, and obtained for large $x$ the constants
$c_1 \approx 0.921$ and $c_2 \approx 1.106$, remarkably close to 1. He also proved: *if* $\pi(x) / (x/\ln x)$ has a
limit, that limit must be 1. Proving the limit exists was the hard part, left to 1896.

## 13.3 Bertrand's postulate

*Level: advanced.*

In 1845 Joseph Bertrand, working on a question about permutation groups, checked that for every $n$ up to three
million there is a prime $p$ with $n < p < 2n$, and assumed it in general. Chebyshev proved it around 1850. In 1932
Paul Erdős, aged 19, published the proof below in his first paper; it is a sharpened version of the arguments of 13.2.

**Theorem 13.4 (Bertrand's postulate).** For every whole number $n \geq 1$ there is a prime $p$ with $n < p \leq 2n$.

*Proof.* **Small $n$.** The primes

$$
2, \; 3, \; 5, \; 7, \; 13, \; 23, \; 43, \; 83, \; 163, \; 317, \; 631
$$

each is less than twice the one before. For $1 \leq n < 631$, let $q$ be the first prime in this list that is larger
than $n$, and $q'$ the one before it (or take $q = 2$ if $n = 1$). Then $q' \leq n < q < 2q' \leq 2n$. So the theorem
holds for $n < 631$, and in particular for $n < 468$, which is all we need below.

**Large $n$.** Suppose $n \geq 468$ and there is no prime in $(n, 2n]$. We look at which primes divide
$\binom{2n}{n}$ and how often.

- *Primes $p > 2n$:* do not divide it (they do not divide $(2n)!$).
- *Primes $n < p \leq 2n$:* none exist, by assumption.
- *Primes $\frac{2n}{3} < p \leq n$:* do not divide it. Here $p \geq 3$ and $p^2 > \frac{4n^2}{9} > 2n$ (as $n > 4$), so
  only the first term in Fact C counts, and $\lfloor 2n/p \rfloor - 2\lfloor n/p \rfloor = 2 - 2 = 0$ because
  $1 \leq n/p < \tfrac32$.
- *Primes $\sqrt{2n} < p \leq \frac{2n}{3}$:* divide it at most once, since $p^2 > 2n$ and Fact C. Their product is
  at most $\prod_{p \leq 2n/3} p < 4^{2n/3}$ by Lemma 13.1.
- *Primes $p \leq \sqrt{2n}$:* there are fewer than $\sqrt{2n}$ of them, and each contributes $p^e \leq 2n$ by Fact C.
  Their product is at most $(2n)^{\sqrt{2n}}$.

Multiplying, and using Fact A in the form $\binom{2n}{n} \geq \frac{4^n}{2n}$ (valid for $n \geq 1$: in the sum of the
$2n + 1$ coefficients, group the two end terms, $1 + 1 \leq \binom{2n}{n}$, to get $2n$ terms each at most the middle
one):

$$
\frac{4^n}{2n} \leq \binom{2n}{n} \leq (2n)^{\sqrt{2n}} \cdot 4^{2n/3},
\qquad\text{that is}\qquad 4^{n/3} \leq (2n)^{1 + \sqrt{2n}} .
$$

Take logarithms: $\tfrac{n}{3} \ln 4 \leq (1 + \sqrt{2n}) \ln(2n)$. The left side grows like $n$, the right like
$\sqrt n \ln n$, so this fails for large $n$; a direct check shows it fails at $n = 468$ (left $\approx 216.26$, right
$\approx 216.15$) and for every larger $n$, since the derivative of the left side, $\tfrac13 \ln 4 \approx 0.462$,
exceeds that of the right side, $\frac{\ln(2n)}{\sqrt{2n}} + \frac{1 + \sqrt{2n}}{n}$, which at $n = 468$ is about $0.29$
and decreases. The contradiction proves that a prime exists in $(n, 2n]$. $\square$

**Worked example ($n = 10$).** $\binom{20}{10} = 184756 = 2^2 \cdot 11 \cdot 13 \cdot 17 \cdot 19$. The primes 11, 13,
17, 19 in $(10, 20]$ are all present, as Fact C predicts. The prime 7, in $(20/3, 10]$, is absent, as the proof
predicts. Without the primes in $(10, 20]$, all that would be left is $2^2 = 4$, nowhere near $184756$: that
shortfall is the whole proof in miniature.

**Consequences and stronger versions.**

- For every $k \geq 1$ there is a prime with exactly $k$ digits (take $n = 10^{k-1}$; there is a prime in
  $(10^{k-1}, 2 \cdot 10^{k-1}]$).
- The prime number theorem gives more: for any $\varepsilon > 0$, there is a prime in $(n, (1 + \varepsilon) n]$ for
  all large $n$. With explicit constants, Nagura proved in 1952 that for $n \geq 25$ there is always a prime between
  $n$ and $\tfrac65 n$.
- **Legendre's conjecture**, that there is a prime between $n^2$ and $(n + 1)^2$ for every $n$, is still open. It
  would need gaps of size about $\sqrt p$, and even the Riemann hypothesis only gives about $\sqrt p \ln p$.

## 13.4 The sum of the reciprocals of the primes diverges

*Level: advanced.*

The harmonic series $1 + \tfrac12 + \tfrac13 + \cdots$ diverges, but slowly: its partial sums grow like $\ln x$.
The sum of the reciprocals of the squares converges (to $\pi^2/6$, [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md)).
Where do the primes sit? Euler stated in 1737 that

$$
\frac12 + \frac13 + \frac15 + \frac17 + \frac1{11} + \cdots = \infty,
$$

and that the partial sums grow like $\ln \ln x$. This is a much stronger statement than "there are infinitely many
primes": it says the primes are *not* as sparse as the squares, which have a convergent reciprocal sum.

**Theorem 13.5.** For $x \geq 2$, $\displaystyle \sum_{p \leq x} \frac1p > \ln \ln x - 1$. In particular the sum over all
primes diverges.

*Proof.* **Step 1: an Euler product inequality.** For each prime, $\left(1 - \frac1p\right)^{-1} = 1 + \frac1p + \frac1{p^2} + \cdots$
(a geometric series). Multiply these for all $p \leq x$. Expanding the product gives $\sum 1/m$ over all $m$ whose
prime factors are all at most $x$, each exactly once by unique factorization. Every $m \leq x$ is such a number, so

$$
\prod_{p \leq x} \left(1 - \frac1p\right)^{-1} \geq \sum_{m \leq x} \frac1m \geq \int_1^{\lfloor x \rfloor + 1} \frac{dt}{t} > \ln x .
$$

(The middle inequality compares the sum with the area under $1/t$: on $[m, m + 1]$, $1/t \leq 1/m$.)

**Step 2: take logarithms.** For $0 < u \leq \tfrac12$, the series $-\ln(1 - u) = u + \frac{u^2}{2} + \frac{u^3}{3} + \cdots$
gives $-\ln(1 - u) \leq u + u^2(1 + u + u^2 + \cdots) = u + \frac{u^2}{1 - u}$. With $u = 1/p$:

$$
\ln \ln x < \sum_{p \leq x} -\ln\left(1 - \frac1p\right) \leq \sum_{p \leq x} \frac1p + \sum_{p \leq x} \frac{1}{p(p-1)} .
$$

**Step 3: the second sum is small.** $\sum_p \frac{1}{p(p - 1)} < \sum_{m \geq 2} \frac{1}{m(m-1)} = \sum_{m \geq 2}
\left(\frac1{m-1} - \frac1m\right) = 1$. Combining, $\sum_{p \leq x} 1/p > \ln \ln x - 1$. $\square$

How slowly does it diverge? $\ln \ln x$ passes 3 only around $x \approx 5 \times 10^8$, and passes 4 around
$x \approx 5 \times 10^{23}$. The sum of the reciprocals of all the primes ever listed is still a small number.

### Erdős's proof by counting

Here is a completely different proof, found by Erdős in 1938, which uses no calculus at all.

*Proof.* Suppose $\sum_p 1/p$ converges. Then there is a $k$ with $\sum_{i > k} 1/p_i < \tfrac12$, where
$p_1 = 2, p_2 = 3, \ldots$ are the primes in order. Call $p_1, \dots, p_k$ the *small* primes and the rest *big*. Fix
$N$ and count the numbers $1 \leq m \leq N$ in two groups.

- *Those divisible by some big prime.* For each big $p$, at most $N/p$ multiples of $p$ are at most $N$. In total, at
  most $\sum_{i > k} N/p_i < N/2$.
- *Those with only small prime factors.* Write such an $m$ as $m = r s^2$ with $r$ squarefree (no repeated prime
  factor). There are at most $2^k$ choices for $r$ (each small prime is in it or not), and $s \leq \sqrt N$. So there
  are at most $2^k \sqrt N$ such $m$.

Every $m \leq N$ is in one of the groups, so $N < N/2 + 2^k \sqrt N$. Take $N = 2^{2k + 2}$: then $2^k \sqrt N =
2^{2k+1} = N/2$, and the inequality says $N < N$. This contradiction shows the sum diverges. $\square$

## 13.5 Mertens' theorems

*Level: advanced.*

In 1874 Franz Mertens sharpened Theorem 13.5 into three precise statements, proved without knowing the prime number
theorem.

**Theorem 13.6 (Mertens).** As $x \to \infty$:

$$
\text{(1)} \quad \sum_{p \leq x} \frac{\ln p}{p} = \ln x + O(1),
$$

$$
\text{(2)} \quad \sum_{p \leq x} \frac1p = \ln \ln x + M + O\!\left(\frac{1}{\ln x}\right), \qquad M \approx 0.2614972128,
$$

$$
\text{(3)} \quad \prod_{p \leq x} \left(1 - \frac1p\right) \sim \frac{e^{-\gamma}}{\ln x}, \qquad e^{-\gamma} \approx 0.5614594836 .
$$

Here $O(1)$ means "a quantity bounded in absolute value by a constant", $O(1/\ln x)$ means "at most a constant times
$1/\ln x$", $M$ is the **Meissel–Mertens constant**, and $\gamma \approx 0.5772$ is **Euler's constant**, the limit of
$1 + \tfrac12 + \cdots + \tfrac1n - \ln n$.

The numbers bear them out:

| $x$ | $\sum_{p \leq x} 1/p$ | $\ln \ln x$ | difference | $\ln x \prod_{p \leq x}(1 - 1/p)$ |
| --- | --- | --- | --- | --- |
| $10^3$ | 2.1981 | 1.9326 | 0.2654 | 0.5593 |
| $10^4$ | 2.4831 | 2.2203 | 0.2627 | |
| $10^5$ | 2.7053 | 2.4435 | 0.2618 | |
| $10^6$ | 2.8873 | 2.6258 | 0.2615 | 0.5614 |

*Proof of (1).* We compute $\ln(n!)$ in two ways, for a whole number $n \geq 2$.

*Analytically:* $\ln(n!) = \sum_{m \leq n} \ln m$, and comparing with $\int_1^n \ln t\,dt = n\ln n - n + 1$ gives
$n \ln n - n < \ln(n!) \leq n \ln n$.

*Arithmetically:* by Legendre's formula (Fact B), $\ln(n!) = \sum_{p \leq n} v_p(n!) \ln p$ with
$v_p(n!) = \sum_i \lfloor n/p^i \rfloor$. Bounding this,

$$
\frac np - 1 < \left\lfloor \frac np \right\rfloor \leq v_p(n!) \leq \frac np + \frac n{p^2} + \cdots = \frac{n}{p - 1} = \frac np + \frac{n}{p(p - 1)} .
$$

Multiply by $\ln p$ and add over $p \leq n$. Writing $S = \sum_{p \leq n} \frac{\ln p}{p}$ and
$C = \sum_p \frac{\ln p}{p(p - 1)}$ (a convergent series, about 0.755):

$$
nS - \theta(n) < \ln(n!) \leq nS + nC .
$$

Now combine with the analytic estimate and with $\theta(n) < n \ln 4$ (Lemma 13.1). From the left inequality,
$nS < \ln(n!) + \theta(n) < n \ln n + n\ln 4$, so $S < \ln n + \ln 4$. From the right one,
$n \ln n - n < nS + nC$, so $S > \ln n - 1 - C$. Hence $|S - \ln n| < 2$ for all $n \geq 2$, and the step from whole
numbers $n$ to real $x$ changes nothing. $\square$

From (1), statement (2) follows by **partial summation** (a discrete form of integration by parts: write
$1/p = \frac{\ln p}{p} \cdot \frac{1}{\ln p}$); statement (3) then follows by taking logarithms as in the proof of
Theorem 13.5, with Euler's constant appearing through a comparison with the zeta function near $s = 1$. Both are
done carefully in Hardy and Wright, Chapter 22, or in Tenenbaum's book.

**A cautionary remark about probability.** It is tempting to argue: "$n$ is prime when no prime $p \leq \sqrt n$
divides it; the chance that $p$ does not divide $n$ is $1 - 1/p$; so the chance that $n$ is prime is
$\prod_{p \leq \sqrt n}(1 - 1/p)$." By Mertens (3) this is about $e^{-\gamma}/\ln \sqrt n = 2e^{-\gamma}/\ln n \approx
1.12/\ln n$. But the prime number theorem says the true density is $1/\ln n$. The heuristic is wrong by 12 percent,
because divisibility by different large primes is not independent in the range up to $n$. Understanding exactly how
such "sieve" heuristics fail is a large part of modern prime number theory, and it is behind the parity problem
mentioned in 13.6.

## 13.6 Gaps between primes

*Level: expert.*

Write $p_1 = 2, p_2 = 3, p_3 = 5, \ldots$ and call $g_n = p_{n+1} - p_n$ the $n$-th **prime gap**. By the prime number
theorem, the *average* gap near $x$ is about $\ln x$: near $10^6$ it is about 13.8 (the last thousand primes below
$10^6$ have average gap 13.9). Two questions: how large can gaps be, and how small, infinitely often?

### Long gaps

**Gaps can be arbitrarily long.** For any $k \geq 2$, the $k - 1$ numbers

$$
k! + 2, \; k! + 3, \; \dots, \; k! + k
$$

are all composite, since $k! + j$ is divisible by $j$ for $2 \leq j \leq k$. For $k = 6$: $722, 723, 724, 725, 726$
are divisible by $2, 3, 4, 5, 6$. (The first run of five composites is much earlier, $24, \ldots, 28$; the
factorial is overkill but it always works.)

Record gaps below $10^6$ (the gap after the prime shown is larger than every gap before it):

| prime $p$ | 113 | 523 | 1327 | 9551 | 31397 | 155921 | 370261 | 492113 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| gap | 14 | 18 | 34 | 36 | 72 | 86 | 112 | 114 |

These records grow roughly like $(\ln p)^2$: for $p = 492113$, $(\ln p)^2 \approx 172$. **Cramér's conjecture**
(1936), based on a random model of the primes, says $g_n = O((\ln p_n)^2)$. It is unproved, and refined models
suggest the constant may be a bit larger than Cramér's. The best unconditional upper bound is far weaker: Baker,
Harman and Pintz proved in 2001 that for large $x$ there is always a prime in $[x, x + x^{0.525}]$. Assuming the Riemann
hypothesis, Cramér showed gaps are $O(\sqrt{p}\, \ln p)$.

In the other direction, it is known that gaps can be noticeably *larger* than average infinitely often:
Westzynthius (1931) showed $g_n / \ln p_n$ is unbounded, Rankin (1938) gave an explicit growth rate, and in 2014 Ford,
Green, Konyagin and Tao, and independently Maynard, improved Rankin's rate, settling a question for which Erdős had
offered a prize.

### Short gaps and twin primes

Apart from $2, 3$, two primes differ by at least 2. Pairs with gap exactly 2 are **twin primes**: $(3, 5), (5, 7),
(11, 13), (17, 19), \ldots$. There are 35 twin pairs below 1000 and 8169 below $10^6$. The **twin prime conjecture**
says there are infinitely many. Hardy and Littlewood (1923) conjectured more precisely that the number of twin pairs
up to $x$ is about $2C_2 \, x/(\ln x)^2$, where $C_2 \approx 0.66016$ is the "twin prime constant", and the count fits
the data well.

What is proved:

- **Brun (1919)**: the sum of the reciprocals of the twin primes converges. So twin primes, if infinite, are much
  rarer than primes. Brun invented a new sieve method to prove it.
- **Goldston, Pintz and Yıldırım (2005)**: gaps can be arbitrarily small compared with the average, that is,
  $\liminf g_n / \ln p_n = 0$.
- **Yitang Zhang (2013)**: $\liminf g_n < 70{,}000{,}000$. There are infinitely many pairs of primes differing by at
  most 70 million. This was the first proof that *some* finite gap occurs infinitely often. Zhang, then a lecturer at
  the University of New Hampshire who had worked largely in isolation, sent his paper to the *Annals of Mathematics*
  in April 2013; it was checked quickly and published in 2014.
- **Polymath8 (2013)**: an open online collaboration organized by Terence Tao optimized Zhang's argument and brought
  the bound down to 4680.
- **James Maynard (late 2013)**, and independently Tao: a simpler and stronger method gave $\liminf g_n \leq 600$, and
  showed much more: for every $m$, there are infinitely many intervals of bounded length containing $m$ primes, that
  is, $\liminf (p_{n+m} - p_n) < \infty$.
- **Polymath8b (2014)**, combining Maynard's method with the earlier work: $\liminf g_n \leq 246$. Assuming a strong
  form of a conjecture on the distribution of primes in progressions (the generalized Elliott–Halberstam conjecture),
  the same methods give 6.

Why not 2? These sieve methods cannot tell numbers with an even number of prime factors from those with an odd
number, the **parity problem** identified by Selberg; getting to twin primes seems to need a genuinely new idea. As of
2024, 246 is the best unconditional bound.

The twin prime conjecture and its relatives (Goldbach's conjecture, primes of the form $n^2 + 1$, Legendre's
conjecture) are discussed again in [Chapter 21](21-Where-Number-Theory-Goes.md). Primes in arithmetic progressions,
including the Green–Tao theorem that the primes contain arbitrarily long arithmetic progressions, are the subject of
[Chapter 15](15-Primes-in-Progressions.md).

## Check yourself

??? question "1. Compute $\pi(50)$, and compare with $50/\ln 50$ and with $\operatorname{li}(50) \approx 18.5$."
    The primes up to 50 are $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47$: $\pi(50) = 15$. Since
    $\ln 50 \approx 3.912$, $50/\ln 50 \approx 12.8$ (too small) while $\operatorname{li}(50) \approx 18.5$ (too large).
    At such small $x$ neither guess is precise; the ratios improve as $x$ grows.

??? question "2. Use Legendre's formula to find the exponent of 2 in $100!$, and the number of zeros at the end of $100!$."
    $v_2(100!) = 50 + 25 + 12 + 6 + 3 + 1 = 97$. Zeros at the end count factors of 10, limited by the factors of 5:
    $v_5(100!) = 20 + 4 = 24$. So $100!$ ends in 24 zeros.

??? question "3. Factor $\binom{30}{15}$ using only Fact C and Legendre's formula, without multiplying it out."
    Primes in $(15, 30]$: $17, 19, 23, 29$, each once. Primes in $(10, 15]$ (that is, in $(2n/3, n]$): 11, 13, absent.
    For $p = 7$: $\lfloor 30/7 \rfloor - 2\lfloor 15/7 \rfloor = 4 - 4 = 0$. For $p = 5$: $(6 - 6) + (1 - 0) = 1$. For
    $p = 3$: $(10 - 10) + (3 - 2) + (1 - 0) = 2$. For $p = 2$: $(15 - 14) + (7 - 6) + (3 - 2) + (1 - 0) = 4$. So
    $\binom{30}{15} = 2^4 \cdot 3^2 \cdot 5 \cdot 17 \cdot 19 \cdot 23 \cdot 29 = 155117520$.

??? question "4. Check Lemma 13.1 for $x = 20$."
    The primes up to 20 are $2, 3, 5, 7, 11, 13, 17, 19$, with product $9699690 \approx 9.7 \times 10^6$. And
    $4^{20} = 1099511627776 \approx 1.1 \times 10^{12}$. The lemma holds with lots of room.

??? question "5. Using only Bertrand's postulate, show that $p_{n+1} < 2p_n$ for every $n$, and that $p_n \leq 2^n$."
    Apply the postulate with $n = p_n$: there is a prime in $(p_n, 2p_n]$, and $2p_n$ is not prime (for $p_n \geq 2$,
    it is even and bigger than 2), so $p_{n+1} < 2p_n$. Then by induction $p_1 = 2 = 2^1$ and
    $p_{n+1} < 2p_n \leq 2^{n+1}$.

??? question "6. Find the first run of seven consecutive composite numbers, and compare with the factorial construction."
    Scanning a prime table: $89$ and $97$ are consecutive primes, so $90, 91, \dots, 96$ are seven composites, and no
    earlier gap is that long (the gaps below 89 are at most 6). The factorial method uses $8! + 2, \ldots, 8! + 8$,
    that is $40322$ to $40328$, which is far later.

??? question "7. Show that every twin prime pair other than $(3, 5)$ has the form $(6k - 1, 6k + 1)$, and deduce that the number between them is divisible by 6."
    A prime greater than 3 is not divisible by 2 or 3, so it is $\equiv 1$ or $5 \pmod 6$. If $p$ and $p + 2$ are both
    such primes, $p \equiv 5$ and $p + 2 \equiv 1 \pmod 6$ (the other choice, $p \equiv 1$, gives $p + 2 \equiv 3$,
    divisible by 3, and it would have to be 3 itself). So $p = 6k - 1$, $p + 2 = 6k + 1$, and the middle number is
    $6k$.

??? question "8. Compute $\sum_{p \leq 30} 1/p$ and compare with $\ln \ln 30 + M$."
    $\frac12 + \frac13 + \frac15 + \frac17 + \frac1{11} + \frac1{13} + \frac1{17} + \frac1{19} + \frac1{23} + \frac1{29}
    \approx 1.5334$. And $\ln \ln 30 + 0.2615 \approx 1.2241 + 0.2615 = 1.4856$. Close, already at $x = 30$; the
    difference shrinks like $1/\ln x$.

??? question "9. Use Mertens (3) to estimate how many numbers up to 1000 have no prime factor at most 100, and compare with the truth (144)."
    The proportion with no prime factor up to 100 is roughly $\prod_{p \leq 100}(1 - 1/p) \approx 0.1203$ (Mertens
    estimates $e^{-\gamma}/\ln 100 \approx 0.1219$). That predicts about 120 numbers. The truth is 144: the number 1
    and the 143 primes between 101 and 1000. The "independence" heuristic is visibly off at this range, the same
    failure as in the cautionary remark of 13.5.

??? question "10. In Erdős's counting proof, how many numbers up to $N = 100$ have only the prime factors 2 and 3, and how does that compare with the bound $2^k \sqrt N$ for $k = 2$?"
    They are $2^a 3^b \leq 100$: $1, 2, 3, 4, 6, 8, 9, 12, 16, 18, 24, 27, 32, 36, 48, 54, 64, 72, 81, 96$, which is
    20 numbers. The bound gives $2^2 \cdot 10 = 40$. The true count is far smaller than $N$, which is the point: numbers
    built from a few primes are rare.

??? question "11. Prove the upper bound $\pi(2n) - \pi(n) \leq \frac{n \ln 4}{\ln n}$ for $n \geq 2$ (so there are not too many primes between $n$ and $2n$)."
    Each prime in $(n, 2n]$ divides $\binom{2n}{n}$ (Fact C), so their product is at most $\binom{2n}{n} \leq 4^n$.
    Each such prime is greater than $n$, so the product exceeds $n^{\pi(2n) - \pi(n)}$. Taking logarithms,
    $(\pi(2n) - \pi(n)) \ln n \leq n \ln 4$.

??? question "12. Why does the factorial construction show that the gaps $g_n$ are not bounded, but say nothing about how often large gaps occur?"
    It produces, for each $k$, one run of $k - 1$ composites, starting at $k! + 2$, so some gap is at least $k$; hence
    $\sup g_n = \infty$. But it gives only one such run for each $k$, placed at a huge number. It says nothing about
    $\liminf$ (small gaps occurring infinitely often), nor about the typical size of the largest gap below $x$, which
    is what Cramér's conjecture and the Ford–Green–Konyagin–Maynard–Tao theorem address.

## What you learned

- $\pi(x)$ grows like $x/\ln x$; Gauss's $\operatorname{li}(x)$ fits the tables astonishingly well, yet
  $\pi(x) - \operatorname{li}(x)$ changes sign infinitely often (Littlewood).
- The central binomial coefficient $\binom{2n}{n}$, Legendre's formula and the bound $\prod_{p \leq x} p < 4^x$ give
  Chebyshev's theorem: $\pi(x)$ lies between constant multiples of $x/\ln x$.
- Bertrand's postulate (a prime in $(n, 2n]$) follows by showing that $\binom{2n}{n}$ would be too small without
  primes in that range (Erdős).
- $\sum 1/p$ diverges like $\ln \ln x$, by Euler's product or by Erdős's counting; Mertens made this precise, with
  $\sum \ln p/p = \ln x + O(1)$ proved from $\ln n!$.
- Naive probabilistic reasoning about primes can be off by a constant factor ($2e^{-\gamma}$ instead of 1).
- Gaps can be arbitrarily long; their typical size is $\ln p$; Zhang (2013), Maynard, Tao and Polymath proved that
  gaps of at most 246 occur infinitely often; twin primes remain open.

**Next:** [Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md), Euler's product, Riemann's zeta function
and the proof of the prime number theorem.

## Further reading

- G. H. Hardy and E. M. Wright, *An Introduction to the Theory of Numbers* (1938; 6th edition 2008), Chapter 22.
- M. Aigner and G. M. Ziegler, *Proofs from THE BOOK* (1998; later editions), chapters on Bertrand's postulate and
  on the infinity of primes.
- P. Erdős, "Beweis eines Satzes von Tschebyschef", *Acta Scientiarum Mathematicarum (Szeged)* 5 (1932).
- G. Tenenbaum, *Introduction to Analytic and Probabilistic Number Theory* (3rd English edition, 2015).
- H. L. Montgomery and R. C. Vaughan, *Multiplicative Number Theory I: Classical Theory* (2007).
- Y. Zhang, "Bounded gaps between primes", *Annals of Mathematics* 179 (2014); J. Maynard, "Small gaps between
  primes", *Annals of Mathematics* 181 (2015); D. H. J. Polymath, "Variants of the Selberg sieve, and bounded
  intervals containing many primes", *Research in the Mathematical Sciences* 1 (2014).
- A. Granville, "Primes in intervals of bounded length", *Bulletin of the AMS* 52 (2015). An expository account of
  Zhang's and Maynard's work.
- On this site: the Topics lessons [How the primes are spread out](../../topics/number-theory/level-8/04-spread-of-primes.md)
  and [Famous open problems](../../topics/number-theory/level-8/05-open-problems.md); the U of T guide
  [MAT137 Unit 13, Series](../../uoft/MAT137/unit13.md); [Chapter 2](02-Primes-and-Unique-Factorization.md) of this
  book for Euclid's proof and the first patterns among primes.
