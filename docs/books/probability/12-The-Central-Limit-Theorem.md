# 12. The central limit theorem

*Add up many independent random quantities and something remarkable happens: the shape of their individual laws is
forgotten, and the sum, measured in standard deviations from its mean, follows the bell curve. Dice, coin flips,
waiting times, rounding errors, all end at the same shape. Chapter 10 saw this for coins; this chapter proves it for
everything with a finite variance. You will see the theorem at work in simulations, prove it completely using moment
generating functions, learn how close the approximation is after $n$ terms (the Berry-Esseen theorem), watch it fail
for the Cauchy law and other heavy tails, and meet its partner, the strong law of large numbers, which says that
averages converge not just "probably" but along almost every single run of the experiment.*

!!! abstract "In this chapter"
    **You will learn:**

    - the exact statement of the central limit theorem, and what "convergence in distribution" means
    - how to use it: sums of dice, rounding errors, sample sizes, with continuity corrections
    - a complete proof via moment generating functions, with the continuity theorem stated, and how characteristic
      functions remove the extra assumption
    - the Berry-Esseen bound: the error after $n$ terms is at most a constant times $1/\sqrt{n}$
    - when it fails: the Cauchy law (averages never settle), infinite variance, dependence, one dominant term
    - the strong law of large numbers, a full proof under a fourth-moment assumption, and how it differs from the weak law

    **You need:** [Chapter 7](07-Inequalities-and-the-Law-of-Large-Numbers.md) (Chebyshev, the weak law),
    [Chapter 8](08-Generating-Functions-in-Probability.md) (moment generating functions),
    [Chapter 10](10-The-Normal-Distribution.md) (the normal law, de Moivre-Laplace) and
    [Chapter 11](11-Joint-Distributions.md) (independence, sums by convolution). Calculus: Taylor expansions and limits
    (the MAT137 guide on [power and Taylor series](../../uoft/MAT137/unit14.md)). A gentler version is the Topics lesson
    on [large numbers and the CLT](../../topics/probability/level-8/05-large-numbers-clt.md).

    **Levels:** 12.1 is intermediate; 12.2 and 12.3 are advanced; 12.4 is intermediate to advanced; 12.5 is advanced
    with an expert ending.

## 12.1 Statement and simulations

### The setting

Let $X_1, X_2, X_3, \dots$ be **independent and identically distributed** (often shortened to **iid**): independent,
and all with the same law, like repeated rolls of one die. Suppose this law has a mean $\mu$ and a finite variance
$\sigma^2 > 0$. Let $S_n = X_1 + \dots + X_n$.

Then $E[S_n] = n\mu$ and, by independence, $\operatorname{Var}(S_n) = n\sigma^2$, so $S_n$ has standard deviation
$\sigma\sqrt{n}$. The weak law ([Chapter 7](07-Inequalities-and-the-Law-of-Large-Numbers.md)) says the average
$S_n/n$ is close to $\mu$. The central limit theorem looks closer: it measures the leftover error $S_n - n\mu$ in its
natural unit $\sigma\sqrt{n}$ and asks what law that has.

**Theorem (central limit theorem, CLT).** Let $X_1, X_2, \dots$ be iid with mean $\mu$ and variance $0 < \sigma^2 < \infty$.
Then for every real $x$,

$$
P\left( \frac{S_n - n\mu}{\sigma\sqrt{n}} \le x \right) \to \Phi(x) \quad \text{as } n \to \infty,
$$

where $\Phi$ is the standard normal cdf. Equivalently, in terms of the average $\bar X_n = S_n/n$,
$P\left(\frac{\sqrt n(\bar X_n - \mu)}{\sigma} \le x\right) \to \Phi(x)$.

Read it as: **for large $n$, $S_n$ is approximately $N(n\mu, n\sigma^2)$, and $\bar X_n$ is approximately
$N(\mu, \sigma^2/n)$, whatever the law of the $X_i$.** The only facts about the law that survive are its mean and its
variance. Everything else (its skewness, its being discrete or continuous, its shape) washes out.

The name "central limit theorem" was given by George Pólya in a 1920 paper; "central" because it is central to
probability.

### Convergence in distribution

The kind of convergence in the theorem has a name.

**Definition.** Random variables $Y_n$ **converge in distribution** to $Y$ (written $Y_n \Rightarrow Y$, or
$Y_n \xrightarrow{d} Y$) if $F_{Y_n}(x) \to F_Y(x)$ at every $x$ where $F_Y$ is continuous.

So the CLT says $Z_n = \frac{S_n - n\mu}{\sigma\sqrt n} \Rightarrow Z \sim N(0, 1)$. Two remarks:

- It is a statement about **laws**, not about the values of the variables. It does not say $Z_n$ gets close to some
  particular random $Z$; it says probabilities computed from $Z_n$ get close to probabilities computed from the normal law.
- The restriction to continuity points is needed. If $Y_n = 1/n$ (not random at all), surely $Y_n$ "tends to" $Y = 0$.
  But $F_{Y_n}(0) = P(1/n \le 0) = 0$ for every $n$, while $F_Y(0) = 1$. At the jump point $x = 0$ the cdfs do not
  converge, and we do not want that to matter. For the CLT the limit $\Phi$ is continuous everywhere, so the convergence
  holds at every $x$ (and in fact, uniformly in $x$).

### Seeing it

Take $X_i \sim \text{Exp}(1)$, a very lopsided law: mean 1, variance 1, all its mass on the positive side, with a long
right tail. By [Chapter 11](11-Joint-Distributions.md), $S_n$ has the gamma density $x^{n-1}e^{-x}/(n - 1)!$, so we can
draw the exact density of $Z_n = (S_n - n)/\sqrt n$ and compare it with the bell curve.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="Exact densities of the standardised sum of n exponential variables for n equals 2, 6 and 30, drawn against the standard normal density. The n equals 2 curve is strongly skewed with its peak left of zero; n equals 6 is closer; n equals 30 nearly matches the bell curve">
  <polyline fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" points="40.0,173.8 42.5,173.7 45.0,173.5 47.5,173.2 50.0,172.9 52.5,172.6 55.0,172.3 57.5,171.9 60.0,171.5 62.5,171.0 65.0,170.4 67.5,169.8 70.0,169.2 72.5,168.4 75.0,167.6 77.5,166.7 80.0,165.8 82.5,164.7 85.0,163.6 87.5,162.3 90.0,161.0 92.5,159.5 95.0,157.9 97.5,156.3 100.0,154.5 102.5,152.6 105.0,150.5 107.5,148.4 110.0,146.2 112.5,143.8 115.0,141.3 117.5,138.7 120.0,136.1 122.5,133.3 125.0,130.4 127.5,127.5 130.0,124.5 132.5,121.5 135.0,118.4 137.5,115.2 140.0,112.1 142.5,108.9 145.0,105.8 147.5,102.7 150.0,99.7 152.5,96.7 155.0,93.8 157.5,91.0 160.0,88.4 162.5,85.8 165.0,83.5 167.5,81.3 170.0,79.2 172.5,77.4 175.0,75.8 177.5,74.5 180.0,73.3 182.5,72.4 185.0,71.8 187.5,71.4 190.0,71.3 192.5,71.4 195.0,71.8 197.5,72.4 200.0,73.3 202.5,74.5 205.0,75.8 207.5,77.4 210.0,79.2 212.5,81.3 215.0,83.5 217.5,85.8 220.0,88.4 222.5,91.0 225.0,93.8 227.5,96.7 230.0,99.7 232.5,102.7 235.0,105.8 237.5,108.9 240.0,112.1 242.5,115.2 245.0,118.4 247.5,121.5 250.0,124.5 252.5,127.5 255.0,130.4 257.5,133.3 260.0,136.1 262.5,138.7 265.0,141.3 267.5,143.8 270.0,146.2 272.5,148.4 275.0,150.5 277.5,152.6 280.0,154.5 282.5,156.3 285.0,157.9 287.5,159.5 290.0,161.0 292.5,162.3 295.0,163.6 297.5,164.7 300.0,165.8 302.5,166.7 305.0,167.6 307.5,168.4 310.0,169.2 312.5,169.8 315.0,170.4 317.5,171.0 320.0,171.5 322.5,171.9 325.0,172.3 327.5,172.6 330.0,172.9 332.5,173.2 335.0,173.5 337.5,173.7 340.0,173.8 342.5,174.0 345.0,174.2 347.5,174.3 350.0,174.4 352.5,174.5 355.0,174.6 357.5,174.6 360.0,174.7 362.5,174.7 365.0,174.8 367.5,174.8 370.0,174.8 372.5,174.9 375.0,174.9 377.5,174.9 380.0,174.9 382.5,174.9 385.0,174.9 387.5,175.0 390.0,175.0"/>
  <polyline fill="none" stroke="#9cc9ea" stroke-width="2.5" points="40.0,175.0 42.5,175.0 45.0,175.0 47.5,175.0 50.0,175.0 52.5,175.0 55.0,175.0 57.5,175.0 60.0,175.0 62.5,175.0 65.0,175.0 67.5,175.0 70.0,175.0 72.5,175.0 75.0,175.0 77.5,175.0 80.0,175.0 82.5,175.0 85.0,175.0 87.5,175.0 90.0,175.0 92.5,175.0 95.0,175.0 97.5,175.0 100.0,175.0 102.5,175.0 105.0,175.0 107.5,175.0 110.0,175.0 112.5,175.0 115.0,175.0 117.5,175.0 120.0,167.8 122.5,144.5 125.0,124.5 127.5,107.3 130.0,92.7 132.5,80.4 135.0,70.2 137.5,61.8 140.0,55.1 142.5,49.8 145.0,45.8 147.5,42.9 150.0,41.0 152.5,40.0 155.0,39.7 157.5,40.2 160.0,41.1 162.5,42.6 165.0,44.5 167.5,46.8 170.0,49.3 172.5,52.1 175.0,55.1 177.5,58.3 180.0,61.6 182.5,65.0 185.0,68.5 187.5,72.0 190.0,75.5 192.5,79.0 195.0,82.5 197.5,86.0 200.0,89.4 202.5,92.8 205.0,96.1 207.5,99.3 210.0,102.5 212.5,105.6 215.0,108.6 217.5,111.5 220.0,114.3 222.5,117.1 225.0,119.7 227.5,122.3 230.0,124.7 232.5,127.1 235.0,129.4 237.5,131.6 240.0,133.7 242.5,135.7 245.0,137.7 247.5,139.5 250.0,141.3 252.5,143.0 255.0,144.6 257.5,146.2 260.0,147.7 262.5,149.1 265.0,150.4 267.5,151.7 270.0,152.9 272.5,154.1 275.0,155.2 277.5,156.3 280.0,157.3 282.5,158.2 285.0,159.1 287.5,160.0 290.0,160.8 292.5,161.6 295.0,162.3 297.5,163.0 300.0,163.7 302.5,164.3 305.0,164.9 307.5,165.5 310.0,166.0 312.5,166.5 315.0,167.0 317.5,167.4 320.0,167.9 322.5,168.3 325.0,168.6 327.5,169.0 330.0,169.3 332.5,169.7 335.0,170.0 337.5,170.3 340.0,170.5 342.5,170.8 345.0,171.0 347.5,171.3 350.0,171.5 352.5,171.7 355.0,171.9 357.5,172.1 360.0,172.2 362.5,172.4 365.0,172.5 367.5,172.7 370.0,172.8 372.5,173.0 375.0,173.1 377.5,173.2 380.0,173.3 382.5,173.4 385.0,173.5 387.5,173.6 390.0,173.7"/>
  <polyline fill="none" stroke="#7ccf9a" stroke-width="2.5" points="40.0,175.0 42.5,175.0 45.0,175.0 47.5,175.0 50.0,175.0 52.5,175.0 55.0,175.0 57.5,175.0 60.0,175.0 62.5,175.0 65.0,175.0 67.5,175.0 70.0,175.0 72.5,175.0 75.0,175.0 77.5,174.9 80.0,174.8 82.5,174.5 85.0,174.0 87.5,173.2 90.0,172.1 92.5,170.7 95.0,168.9 97.5,166.7 100.0,164.0 102.5,160.9 105.0,157.3 107.5,153.4 110.0,149.2 112.5,144.6 115.0,139.7 117.5,134.6 120.0,129.4 122.5,124.1 125.0,118.8 127.5,113.5 130.0,108.2 132.5,103.1 135.0,98.2 137.5,93.5 140.0,89.0 142.5,84.9 145.0,81.1 147.5,77.6 150.0,74.5 152.5,71.7 155.0,69.4 157.5,67.4 160.0,65.9 162.5,64.7 165.0,63.8 167.5,63.4 170.0,63.3 172.5,63.5 175.0,64.0 177.5,64.8 180.0,65.9 182.5,67.3 185.0,68.9 187.5,70.7 190.0,72.7 192.5,74.9 195.0,77.2 197.5,79.6 200.0,82.2 202.5,84.9 205.0,87.6 207.5,90.4 210.0,93.2 212.5,96.0 215.0,98.9 217.5,101.8 220.0,104.6 222.5,107.5 225.0,110.3 227.5,113.1 230.0,115.8 232.5,118.4 235.0,121.1 237.5,123.6 240.0,126.1 242.5,128.5 245.0,130.8 247.5,133.1 250.0,135.3 252.5,137.4 255.0,139.4 257.5,141.4 260.0,143.2 262.5,145.0 265.0,146.7 267.5,148.4 270.0,149.9 272.5,151.4 275.0,152.8 277.5,154.2 280.0,155.4 282.5,156.7 285.0,157.8 287.5,158.9 290.0,159.9 292.5,160.9 295.0,161.8 297.5,162.7 300.0,163.5 302.5,164.3 305.0,165.0 307.5,165.7 310.0,166.3 312.5,166.9 315.0,167.5 317.5,168.0 320.0,168.5 322.5,168.9 325.0,169.4 327.5,169.8 330.0,170.1 332.5,170.5 335.0,170.8 337.5,171.1 340.0,171.4 342.5,171.7 345.0,171.9 347.5,172.2 350.0,172.4 352.5,172.6 355.0,172.8 357.5,172.9 360.0,173.1 362.5,173.2 365.0,173.4 367.5,173.5 370.0,173.6 372.5,173.7 375.0,173.8 377.5,173.9 380.0,174.0 382.5,174.1 385.0,174.2 387.5,174.2 390.0,174.3"/>
  <polyline fill="none" stroke="#eea66f" stroke-width="2.5" points="40.0,174.9 42.5,174.8 45.0,174.7 47.5,174.7 50.0,174.5 52.5,174.4 55.0,174.2 57.5,174.0 60.0,173.8 62.5,173.5 65.0,173.1 67.5,172.6 70.0,172.1 72.5,171.5 75.0,170.8 77.5,169.9 80.0,169.0 82.5,167.9 85.0,166.7 87.5,165.3 90.0,163.8 92.5,162.1 95.0,160.2 97.5,158.2 100.0,156.0 102.5,153.7 105.0,151.1 107.5,148.4 110.0,145.5 112.5,142.5 115.0,139.3 117.5,136.0 120.0,132.6 122.5,129.1 125.0,125.5 127.5,121.9 130.0,118.2 132.5,114.5 135.0,110.8 137.5,107.1 140.0,103.5 142.5,100.0 145.0,96.5 147.5,93.2 150.0,90.1 152.5,87.1 155.0,84.3 157.5,81.7 160.0,79.4 162.5,77.2 165.0,75.4 167.5,73.8 170.0,72.4 172.5,71.4 175.0,70.6 177.5,70.1 180.0,69.8 182.5,69.9 185.0,70.2 187.5,70.7 190.0,71.6 192.5,72.6 195.0,73.9 197.5,75.4 200.0,77.1 202.5,79.0 205.0,81.1 207.5,83.3 210.0,85.7 212.5,88.2 215.0,90.8 217.5,93.4 220.0,96.2 222.5,99.0 225.0,101.8 227.5,104.7 230.0,107.6 232.5,110.5 235.0,113.4 237.5,116.2 240.0,119.0 242.5,121.8 245.0,124.5 247.5,127.2 250.0,129.8 252.5,132.3 255.0,134.8 257.5,137.1 260.0,139.4 262.5,141.6 265.0,143.7 267.5,145.8 270.0,147.7 272.5,149.5 275.0,151.3 277.5,152.9 280.0,154.5 282.5,156.0 285.0,157.4 287.5,158.7 290.0,160.0 292.5,161.1 295.0,162.2 297.5,163.2 300.0,164.2 302.5,165.1 305.0,165.9 307.5,166.7 310.0,167.4 312.5,168.0 315.0,168.6 317.5,169.2 320.0,169.7 322.5,170.2 325.0,170.6 327.5,171.0 330.0,171.4 332.5,171.8 335.0,172.1 337.5,172.3 340.0,172.6 342.5,172.8 345.0,173.1 347.5,173.2 350.0,173.4 352.5,173.6 355.0,173.7 357.5,173.9 360.0,174.0 362.5,174.1 365.0,174.2 367.5,174.3 370.0,174.3 372.5,174.4 375.0,174.5 377.5,174.5 380.0,174.6 382.5,174.6 385.0,174.7 387.5,174.7 390.0,174.7"/>
  <line x1="35" y1="175" x2="395" y2="175" stroke="currentColor" stroke-width="1.5"/>
  <text x="40" y="190" text-anchor="middle" font-size="11" fill="currentColor">−3</text>
  <text x="90" y="190" text-anchor="middle" font-size="11" fill="currentColor">−2</text>
  <text x="140" y="190" text-anchor="middle" font-size="11" fill="currentColor">−1</text>
  <text x="190" y="190" text-anchor="middle" font-size="11" fill="currentColor">0</text>
  <text x="240" y="190" text-anchor="middle" font-size="11" fill="currentColor">1</text>
  <text x="290" y="190" text-anchor="middle" font-size="11" fill="currentColor">2</text>
  <text x="340" y="190" text-anchor="middle" font-size="11" fill="currentColor">3</text>
  <text x="390" y="190" text-anchor="middle" font-size="11" fill="currentColor">4</text>
  <line x1="300" y1="30" x2="325" y2="30" stroke="#9cc9ea" stroke-width="2.5"/>
  <text x="332" y="34" font-size="12" fill="currentColor">n = 2</text>
  <line x1="300" y1="48" x2="325" y2="48" stroke="#7ccf9a" stroke-width="2.5"/>
  <text x="332" y="52" font-size="12" fill="currentColor">n = 6</text>
  <line x1="300" y1="66" x2="325" y2="66" stroke="#eea66f" stroke-width="2.5"/>
  <text x="332" y="70" font-size="12" fill="currentColor">n = 30</text>
  <line x1="300" y1="84" x2="325" y2="84" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 4"/>
  <text x="332" y="88" font-size="12" fill="currentColor">normal</text>
  <text x="215" y="207" text-anchor="middle" font-size="12" fill="currentColor">z = (S − n)/√n</text>
</svg>
</div>

*Exact densities of the standardised sum of $n$ exponential variables, for $n = 2, 6, 30$, against the standard normal
(dashed). The skew to the right fades slowly, like $1/\sqrt{n}$.*

**Example 1 (100 dice).** A fair die has mean $3.5$ and variance $\tfrac{35}{12}$. The sum $S$ of 100 dice has mean 350
and standard deviation $\sqrt{100 \cdot 35/12} \approx 17.08$. How likely is a total of 380 or more? With a continuity
correction (the sum is a whole number, as in [Chapter 10](10-The-Normal-Distribution.md)),

$$
P(S \ge 380) = P(S \ge 379.5) \approx 1 - \Phi\left(\frac{379.5 - 350}{17.08}\right) = 1 - \Phi(1.727) \approx 0.0421 .
$$

The exact value, computed by convolving the die's law with itself 100 times, is $0.04203$. The approximation is
correct to three decimal places.

**Example 2 (rounding errors).** An accountant adds 100 amounts, each rounded to the nearest whole dollar. Model each
rounding error as uniform on $[-\tfrac12, \tfrac12]$, independent: mean 0, variance $\tfrac{1}{12}$. The total error
has standard deviation $\sqrt{100/12} \approx 2.89$ dollars, and

$$
P(|\text{total error}| > 5) \approx 2\left(1 - \Phi\left(\frac{5}{2.89}\right)\right) = 2(1 - \Phi(1.732)) \approx 0.083 .
$$

The worst case is 50 dollars, but the CLT says errors that large essentially never happen: errors cancel. The
independence assumption is the thing to check in practice. If all amounts end in 0.50 because of a pricing rule, the
errors do not cancel at all.

**Example 3 (how many trials?).** How many flips of a fair coin are needed so that the proportion of heads is within
0.01 of $\tfrac12$ with probability at least 0.95? The proportion $\bar X_n$ is approximately
$N\left(\tfrac12, \frac{1}{4n}\right)$, so we need $0.01 \ge 1.96 \cdot \frac{1}{2\sqrt n}$, that is,
$n \ge \left(\frac{1.96}{0.02}\right)^2 = 9604$. Chebyshev's inequality, which knows only the variance, would ask for
$\frac{1}{4n(0.01)^2} \le 0.05$, that is $n \ge 50\,000$. The CLT's extra knowledge of the shape saves a factor of five.
(This is the calculation behind the "margin of error" of a poll of about 1000 people being about 3 percentage points:
$1.96 \times \frac{1}{2\sqrt{1000}} \approx 0.031$. How to *use* such a margin is statistics, and belongs to the
Statistics book.)

### Try it in Python

```python
import random, statistics, math

random.seed(12)
def standardised_sum(n):
    s = sum(random.expovariate(1.0) for _ in range(n))   # mean 1, variance 1
    return (s - n) / math.sqrt(n)

for n in (1, 5, 30, 200):
    zs = [standardised_sum(n) for _ in range(40_000)]
    inside = sum(abs(z) <= 1.96 for z in zs) / len(zs)
    skew = statistics.mean(z**3 for z in zs)
    print(n, round(inside, 3), round(skew, 2))   # inside -> 0.95, skew -> 0
```

For $n = 1$ the fraction within $\pm 1.96$ is about $0.95$ by coincidence (it is $P(X \le 2.96) = 1 - e^{-2.96} \approx 0.948$),
but the third moment, which is 2 for one exponential, shows the lopsidedness. It falls like $2/\sqrt n$, and for
$n = 200$ it is about $0.14$.

### A short history

De Moivre (1733) proved the theorem for fair coins and Laplace (1812, with a version in 1810) for general binomials and,
in outline, for sums of other variables. A rigorous general proof waited until the turn of the twentieth century:
Aleksandr Lyapunov proved it in 1901 under a condition on third moments, using what are now called characteristic
functions; Jarl Waldemar Lindeberg found in 1922 a much weaker sufficient condition; and in 1935 William Feller and Paul
Lévy showed that Lindeberg's condition is also necessary, under a natural assumption that no single term dominates.

<figure class="play" data-play="clt"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Averages of samples from a lopsided distribution pile up in a bell curve, narrower as the sample grows: the central limit theorem.</figcaption></figure>

## 12.2 A proof via moment generating functions

*Level: advanced.*

### The plan

[Chapter 8](08-Generating-Functions-in-Probability.md) showed that a moment generating function $M_X(t) = E[e^{tX}]$,
when it is finite near $t = 0$, determines the law of $X$, and that the mgf of a sum of independent variables is the
product of their mgfs. Products are much easier to handle in a limit than convolutions. So the plan is:

1. compute the mgf of $Z_n = (S_n - n\mu)/(\sigma\sqrt n)$;
2. show it tends to $e^{t^2/2}$, the mgf of $N(0, 1)$ ([Chapter 10](10-The-Normal-Distribution.md));
3. conclude that $Z_n \Rightarrow N(0, 1)$ by a theorem that turns convergence of mgfs into convergence of laws.

Step 3 is a real theorem that we state without proof.

**Theorem (continuity theorem for mgfs).** Let $Y_n$ and $Y$ be random variables whose mgfs are finite on a common
interval $(-h, h)$, $h > 0$. If $M_{Y_n}(t) \to M_Y(t)$ for every $t$ in $(-h, h)$, then $Y_n \Rightarrow Y$.

The proof (due in this form to J. H. Curtiss, 1942) needs some analysis: the mgfs extend to analytic functions in a
strip of the complex plane, and one shows that the cdfs have a convergent subsequence whose limit must have mgf $M_Y$,
hence equals $F_Y$ by uniqueness. The proof is in Curtiss's paper (*Annals of Mathematical Statistics*, 1942), and the
analogous theorem for characteristic functions, which is the one used in practice, is proved in every graduate text.

### Two lemmas

**Lemma 1 (Taylor expansion of an mgf).** Let $Y$ have $E[Y] = 0$, $E[Y^2] = 1$ and an mgf finite on $(-h, h)$. Then

$$
M_Y(s) = 1 + \frac{s^2}{2} + r(s), \qquad \text{where } \frac{r(s)}{s^2} \to 0 \text{ as } s \to 0 .
$$

*Proof.* Where the mgf is finite it may be differentiated under the expectation any number of times (the exponential
dominates every power of $|y|$; this is the analytic fact behind [Chapter 8](08-Generating-Functions-in-Probability.md)'s
"$M^{(k)}(0) = E[Y^k]$"). So $M_Y$ is twice continuously differentiable near 0 with $M_Y(0) = 1$, $M_Y'(0) = E[Y] = 0$
and $M_Y''(0) = E[Y^2] = 1$. Taylor's theorem with the Peano form of the remainder gives exactly the claim. $\square$

**Lemma 2.** If $c_n \to c$, then $\left(1 + \frac{c_n}{n}\right)^n \to e^c$.

*Proof.* For large $n$, $|c_n/n| < \tfrac12$, so the logarithm is defined. The Taylor expansion of the logarithm gives
$|\ln(1 + x) - x| \le x^2$ for $|x| \le \tfrac12$. Hence

$$
\left| n\ln\left(1 + \frac{c_n}{n}\right) - c_n \right| \le n \cdot \frac{c_n^2}{n^2} = \frac{c_n^2}{n} \to 0,
$$

because $c_n$ is bounded. So $n\ln(1 + c_n/n) \to c$, and taking exponentials (a continuous function) gives the result.
$\square$

This is the fact behind compound interest: $(1 + c/n)^n \to e^c$. The lemma allows the "$c$" to wobble, which is what
we need.

### The proof

**Theorem (CLT, mgf version).** Let $X_1, X_2, \dots$ be iid with mean $\mu$, variance $\sigma^2 > 0$, and an mgf that
is finite on some interval $(-h, h)$. Then $Z_n = \dfrac{S_n - n\mu}{\sigma\sqrt n} \Rightarrow N(0, 1)$.

*Proof.* Standardise each term: $Y_i = (X_i - \mu)/\sigma$. The $Y_i$ are iid with mean 0 and variance 1, their mgf
$M(s) = e^{-\mu s/\sigma}M_X(s/\sigma)$ is finite near 0, and

$$
Z_n = \frac{Y_1 + Y_2 + \dots + Y_n}{\sqrt n} .
$$

By independence, the mgf of $Z_n$ is a product of $n$ equal factors:

$$
M_{Z_n}(t) = E\left[e^{tY_1/\sqrt n} \cdots e^{tY_n/\sqrt n}\right] = \left( M\left(\frac{t}{\sqrt n}\right) \right)^n .
$$

Fix $t$. For $n$ large, $t/\sqrt n$ is inside the interval where $M$ is finite, and Lemma 1 with $s = t/\sqrt n$ gives

$$
M\left(\frac{t}{\sqrt n}\right) = 1 + \frac{t^2}{2n} + r\left(\frac{t}{\sqrt n}\right) = 1 + \frac{c_n}{n}, \qquad \text{where } c_n = \frac{t^2}{2} + n\,r\left(\frac{t}{\sqrt n}\right) .
$$

Now $n\,r(t/\sqrt n) = t^2 \cdot \dfrac{r(t/\sqrt n)}{(t/\sqrt n)^2} \to t^2 \cdot 0 = 0$ (for $t \ne 0$; for $t = 0$
everything is 1). So $c_n \to \tfrac{t^2}{2}$, and Lemma 2 gives

$$
M_{Z_n}(t) = \left(1 + \frac{c_n}{n}\right)^n \to e^{t^2/2} .
$$

This holds for every $t$ in a fixed interval around 0 (once $n$ is large enough for that $t$), and $e^{t^2/2}$ is the
mgf of $N(0, 1)$. By the continuity theorem, $Z_n \Rightarrow N(0, 1)$. $\square$

### What the proof shows

Look at where the information went. The mgf of each term was expanded as $1 + 0 \cdot s + \tfrac12 s^2 + \dots$, and
only the first three coefficients (total mass 1, mean 0, variance 1) survived the limit. The cubic and higher terms of
$M(t/\sqrt n)$ are of size $n^{-3/2}$, and $n$ of them add up to $n^{-1/2} \to 0$. **That is why the limit forgets
everything but the mean and variance**, and also why the error is of order $1/\sqrt n$ and is controlled by the third
moment (section 12.3).

It also shows why $\sqrt n$ is the right scale. Dividing by $n^a$ with $a > \tfrac12$ would send the variance to 0 and
the limit would be the constant 0 (the law of large numbers); with $a < \tfrac12$ the variance would blow up. Only
$a = \tfrac12$ gives a non-trivial limit.

### Removing the mgf assumption

Many laws with a finite variance have no mgf: for example the law with density proportional to $1/(1 + |x|)^5$ has
$E[e^{tX}] = \infty$ for every $t \ne 0$. The CLT holds for them too, and the fix is to use the **characteristic
function** $\phi_X(t) = E[e^{itX}] = E[\cos tX] + iE[\sin tX]$ instead. Since $|e^{itX}| = 1$, it exists for *every*
random variable and every real $t$. It shares the two key properties of the mgf: it determines the law, and it turns
independent sums into products. **Lévy's continuity theorem** (Paul Lévy, 1920s) says $Y_n \Rightarrow Y$ if and only
if $\phi_{Y_n}(t) \to \phi_Y(t)$ for every $t$.

The proof then runs exactly as above. Finite variance alone gives the expansion
$\phi_Y(s) = 1 - \tfrac{s^2}{2} + o(s^2)$ (this needs a little care, because only two moments are available), Lemma 2
works for complex $c_n$ too, and the limit is $e^{-t^2/2}$, the characteristic function of $N(0, 1)$. That proves the
CLT exactly as stated in 12.1, for every iid sequence with finite variance. The details are in Durrett's *Probability:
Theory and Examples* (chapter 3) or Billingsley (section 27).

### Beyond identical laws: Lindeberg's condition

In practice the terms are often independent but not identical: errors from different instruments, say. Let
$X_1, X_2, \dots$ be independent with means $\mu_k$ and variances $\sigma_k^2$, and $s_n^2 = \sigma_1^2 + \dots + \sigma_n^2$.

**Theorem (Lindeberg, 1922; statement).** If for every $\varepsilon > 0$

$$
\frac{1}{s_n^2}\sum_{k=1}^n E\Big[(X_k - \mu_k)^2\;\mathbf{1}\big[|X_k - \mu_k| > \varepsilon s_n\big]\Big] \to 0,
$$

then $\frac{S_n - E[S_n]}{s_n} \Rightarrow N(0, 1)$.

The condition says: the part of the total variance that comes from terms which are individually large (more than a
fixed fraction of the total standard deviation) is negligible. In other words, **no single term matters**. For iid
terms with finite variance it holds automatically. Feller and Lévy showed that if each $\sigma_k^2/s_n^2 \to 0$, the
condition is also necessary.

## 12.3 How good is the approximation?

*Level: advanced.*

A limit theorem by itself says nothing about any particular $n$. For $n = 100$ dice the approximation was excellent;
for the binomial with $p = \tfrac16$ in [Chapter 10](10-The-Normal-Distribution.md) it was off by 10% in the tail. A
practical user wants a bound.

**Theorem (Berry-Esseen; statement).** Let $X_1, X_2, \dots$ be iid with mean $\mu$, variance $\sigma^2$, and finite
third absolute central moment $\rho = E|X_1 - \mu|^3$. Then for every $n$ and every real $x$,

$$
\left| P\left(\frac{S_n - n\mu}{\sigma\sqrt n} \le x\right) - \Phi(x) \right| \le \frac{C\rho}{\sigma^3\sqrt n},
$$

where $C$ is an absolute constant (the same for every law).

Andrew Berry (1941) and Carl-Gustav Esseen (1942) proved this independently. The best value of $C$ has been chased for
eighty years: Esseen showed in 1956 that $C$ cannot be smaller than $\frac{\sqrt{10} + 3}{6\sqrt{2\pi}} \approx 0.4097$,
and Irina Shevtsova proved in 2011 that $C = 0.4748$ works. The proof uses characteristic functions and a "smoothing
inequality" that compares two cdfs through their characteristic functions; it takes several pages and is in Feller,
Volume II, chapter XVI, and in Durrett.

Three things to take from it:

1. **The rate is $1/\sqrt n$.** Halving the error needs four times as many terms. This cannot be improved in general:
   for coin flips the cdf of $S_n$ jumps by about $\frac{0.8}{\sqrt n}$ at its centre (the local de Moivre-Laplace
   approximation $\varphi(0)\cdot\frac{2}{\sqrt n}$), while $\Phi$ is continuous, so somewhere near the jump the error is
   at least half of that, about $\frac{0.4}{\sqrt n}$.
2. **Skewness costs.** The ratio $\rho/\sigma^3$ measures how lopsided the law is. For a fair coin ($\pm$ symmetric
   Bernoulli) $\rho/\sigma^3 = 1$; for a Bernoulli with $p = 0.1$ it is $\frac{p^2 + q^2}{\sqrt{pq}} \approx 2.73$.
3. **It is uniform in $x$** but says nothing special about the tails. For a tail probability of $0.001$, an absolute
   error of $0.01$ is useless. Tail approximations need other tools (Chernoff bounds from
   [Chapter 7](07-Inequalities-and-the-Law-of-Large-Numbers.md), or large deviation theory).

**Example 4.** For $n$ fair coin flips, the bound is $0.4748/\sqrt n$. The largest actual error (over all $x$) can be
computed exactly:

| $n$ and $p$ | largest error | Berry-Esseen bound |
|---|---|---|
| $n = 100$, $p = 0.5$ | 0.0398 | 0.0475 |
| $n = 1000$, $p = 0.5$ | 0.0126 | 0.0150 |
| $n = 100$, $p = 0.1$ | 0.0832 | 0.1298 |

For the fair coin the bound is within 20% of the truth, which shows how good Shevtsova's constant is. Most of that
error is the continuity issue (the jumps of a discrete cdf); with a continuity correction the practical error for
probabilities of intervals is much smaller, as Examples 1 and 2 showed.

Finer approximations exist. The **Edgeworth expansion** adds correction terms to $\Phi$: the first one is
$-\frac{\kappa_3}{6\sqrt n}(x^2 - 1)\varphi(x)$, where $\kappa_3 = E[(X - \mu)^3]/\sigma^3$ is the skewness. It explains
the lopsided curves in the picture of 12.1 quantitatively.

## 12.4 When it fails

The CLT has two hypotheses beyond independence and identical laws: **finite variance**, and (implicitly) that $\sqrt n$
is the right scale. Remove them and the theorem can fail completely.

### The Cauchy law

In [Chapter 9](09-Continuous-Random-Variables.md) we met the Cauchy law: the point where a lighthouse beam, turned to a
uniformly random angle, hits the shore. Its density is

$$
f(x) = \frac{1}{\pi(1 + x^2)} .
$$

It is symmetric about 0, bell-shaped, and looks harmless. But $\int |x| f(x)\,dx = \frac{2}{\pi}\int_0^\infty \frac{x}{1 + x^2}\,dx = \frac{1}{\pi}\Big[\ln(1 + x^2)\Big]_0^\infty = \infty$:
**it has no mean**, and so no variance. Its tails fall like $1/x^2$, so slowly that the occasional enormous value
dominates any sum.

**Theorem.** If $X_1, \dots, X_n$ are iid Cauchy, then the average $\bar X_n = (X_1 + \dots + X_n)/n$ is again Cauchy,
with exactly the same law as $X_1$.

So averaging a million Cauchy measurements gives an estimate of the centre that is *no better than a single
measurement*. There is no law of large numbers and no central limit theorem.

*Proof for $n = 2$, and so for $n = 2^k$.* By the convolution formula of [Chapter 11](11-Joint-Distributions.md), the
density of $X_1 + X_2$ is

$$
\int_{-\infty}^{\infty} \frac{1}{\pi^2 (1 + x^2)(1 + (z - x)^2)}\,dx = \frac{2}{\pi(4 + z^2)} .
$$

The integral is done by splitting the integrand into partial fractions in $x$ (a page of algebra, or a short contour
integral); you can check it numerically for any $z$, for example $z = 0$, where both sides equal $\frac{1}{2\pi}$
because $\int \frac{dx}{(1 + x^2)^2} = \frac{\pi}{2}$. Then by the linear change of variables of Chapter 9, the average
$W = (X_1 + X_2)/2$ has density $2 \cdot \frac{2}{\pi(4 + 4w^2)} = \frac{1}{\pi(1 + w^2)}$: Cauchy again. Averaging
two averages of $2^{k-1}$ variables each gives the result for $2^k$ by induction. $\square$

For general $n$ the clean proof uses the characteristic function of the Cauchy law, $\phi(t) = e^{-|t|}$ (computed by a
contour integral). Then $\phi_{\bar X_n}(t) = \phi(t/n)^n = e^{-n|t|/n} = e^{-|t|}$.

### Try it in Python

```python
import random, math

random.seed(5)
def cauchy():
    return math.tan(math.pi * (random.random() - 0.5))   # the lighthouse

total = 0.0
for n in range(1, 1_000_001):
    total += cauchy()
    if n in (10, 100, 1_000, 10_000, 100_000, 1_000_000):
        print(n, total / n)      # the running average keeps jumping
```

Compare with exponential or uniform variables, where the running average settles visibly by $n = 1000$. With Cauchy
variables it never does: every so often one value is so large that it moves the whole average.

### Infinite variance with a finite mean

Between "finite variance" (CLT) and "no mean" (Cauchy) lie laws such as the **Pareto** law $P(X > x) = x^{-\alpha}$ for
$x \ge 1$, with $1 < \alpha < 2$. It has a mean $\frac{\alpha}{\alpha - 1}$ but infinite variance. The law of large
numbers still holds (the strong law of 12.5 needs only a finite mean), but the fluctuations of $S_n$ around $n\mu$ are of
size $n^{1/\alpha}$, larger than $\sqrt n$, and their limit law is not normal.

**Theorem (generalised CLT; statement).** If $S_n$, suitably centred and divided by some $a_n$, converges in
distribution to a non-constant limit, that limit is a **stable law**: one whose independent copies add up to a scaled
and shifted copy of itself. The stable laws form a family indexed by $\alpha \in (0, 2]$; $\alpha = 2$ is the normal law,
$\alpha = 1$ (symmetric) is the Cauchy law, and for $\alpha < 2$ the tails decay like $|x|^{-\alpha}$.

This theory was built by Paul Lévy and Aleksandr Khinchin in the 1920s and 1930s and set out by Boris Gnedenko and
Andrey Kolmogorov in their book *Limit Distributions for Sums of Independent Random Variables* (Russian 1949, English
1954). The normal law is special among stable laws because it is the only one with a finite variance. That, and not
any magic, is why it is the universal limit in the finite-variance world.

### Dependence and dominance

- **Dependence.** If $X_1 = X_2 = \dots = X_n$ (complete dependence), then $S_n/n = X_1$ and the "sum" has the same
  shape as one term. Weak dependence (for example in a Markov chain, [Chapter 13](13-Markov-Chains.md)) usually still
  allows a CLT, with a variance that includes the covariances; strong long-range dependence can break it.
- **One dominant term.** Let $X_k = \pm 2^k$ with equal chances, independent. Then the last term is larger than all the
  others put together, so the sum is never close to normal. In fact $S_n/2^n = \varepsilon_n + \frac{\varepsilon_{n-1}}{2} + \frac{\varepsilon_{n-2}}{4} + \cdots$
  with independent random signs $\varepsilon_k$, and this tends in distribution to the **uniform** law on $[-2, 2]$
  (exercise 11). Lindeberg's condition fails here.

## 12.5 The strong law

*Level: advanced; the last part is expert.*

### Two kinds of "converges"

The weak law of large numbers ([Chapter 7](07-Inequalities-and-the-Law-of-Large-Numbers.md)) says: for every
$\varepsilon > 0$,

$$
P\left(\left|\bar X_n - \mu\right| > \varepsilon\right) \to 0 \quad \text{as } n \to \infty .
$$

This is **convergence in probability**. It is a statement about each large $n$ separately: at time $n$, a big
deviation is unlikely. It does not forbid a single run of the experiment from having big deviations again and again,
at rarer and rarer times, forever.

The strong law is about whole runs. Imagine one infinite sequence of coin flips, and the sequence of running averages
$\bar X_1, \bar X_2, \dots$ along it. Does *this* sequence of numbers converge to $\tfrac12$?

**Theorem (strong law of large numbers, SLLN).** If $X_1, X_2, \dots$ are iid with $E|X_1| < \infty$ and mean $\mu$, then

$$
P\left( \lim_{n \to \infty} \bar X_n = \mu \right) = 1 .
$$

This is **almost sure convergence**: the set of runs on which the averages fail to converge to $\mu$ has probability 0.
It implies the weak law, and is strictly stronger (an example follows). The SLLN is what justifies the frequency
interpretation of [Chapter 1](01-What-Probability-Is.md) in the strongest sense the mathematics allows: with
probability 1, the long-run frequency of heads in *your* sequence of flips is $\tfrac12$.

History: Émile Borel proved the first strong law in 1909, for the binary digits of a random number in $[0, 1]$
(see below). Francesco Cantelli proved it in 1917 under a fourth-moment condition, by the argument we give next. Andrey
Kolmogorov proved the theorem in the generality stated, assuming only a finite mean, around 1930, and in 1981 Nasrollah
Etemadi gave a short proof that needs only pairwise independence.

### A proof with four moments

We prove the strong law under the extra assumption $E[X_1^4] < \infty$. The proof needs one tool, the first
Borel-Cantelli lemma, which [Chapter 17](17-Measure-Theoretic-Probability.md) treats properly together with its partner.

**Lemma (first Borel-Cantelli lemma).** If events $A_1, A_2, \dots$ have $\sum_n P(A_n) < \infty$, then with probability
1 only finitely many of them occur.

*Proof.* Let $N = \sum_n \mathbf{1}_{A_n}$ count how many occur. Then $E[N] = \sum_n P(A_n) < \infty$ (taking the
expectation inside an infinite sum of non-negative terms is allowed; this is the monotone convergence theorem of
Chapter 17). A random variable with finite mean is finite with probability 1, so $N < \infty$ with probability 1.
$\square$

**Theorem (Cantelli).** If $X_1, X_2, \dots$ are iid with $E[X_1^4] < \infty$, then $\bar X_n \to \mu$ with probability 1.

*Proof.* Replacing $X_i$ by $X_i - \mu$, we may assume $\mu = 0$. Write $\sigma^2 = E[X_1^2]$ and $K = E[X_1^4]$.

*Step 1: the fourth moment of $S_n$.* Expand

$$
E[S_n^4] = \sum_{i, j, k, l} E[X_i X_j X_k X_l],
$$

a sum over all $n^4$ ordered choices of four indices. If some index appears exactly once, say $i$ differs from $j, k, l$,
then by independence the term is $E[X_i]\,E[X_j X_k X_l] = 0$. So only two patterns survive: all four indices equal
($n$ terms, each $K$), or two different indices each appearing twice. For the second pattern there are 3 ways to split
the four positions into two pairs and $n(n - 1)$ ordered choices of the two distinct indices, each term being
$E[X_i^2]E[X_j^2] = \sigma^4$. So

$$
E[S_n^4] = nK + 3n(n - 1)\sigma^4 \le Cn^2
$$

for a constant $C$ (for example $C = K + 3\sigma^4$).

*Step 2: Markov's inequality on the fourth power.* For $\varepsilon > 0$,

$$
P\left(|\bar X_n| > \varepsilon\right) = P\left(S_n^4 > n^4\varepsilon^4\right) \le \frac{E[S_n^4]}{n^4\varepsilon^4} \le \frac{C}{\varepsilon^4 n^2} .
$$

*Step 3: Borel-Cantelli.* Since $\sum 1/n^2 < \infty$, the events $A_n = \{|\bar X_n| > \varepsilon\}$ have a finite sum
of probabilities. So with probability 1 only finitely many occur: from some point on, $|\bar X_n| \le \varepsilon$. That
is, $\limsup_n |\bar X_n| \le \varepsilon$ with probability 1.

*Step 4: all $\varepsilon$ at once.* Apply step 3 with $\varepsilon = 1, \tfrac12, \tfrac13, \dots$. Each gives an event
of probability 1; a countable intersection of events of probability 1 has probability 1 (its complement is a countable
union of events of probability 0). On that intersection $\limsup_n |\bar X_n| \le 1/m$ for every $m$, so $\bar X_n \to 0$.
$\square$

Notice why Chebyshev was not enough: with only the second moment, step 2 gives $P(|\bar X_n| > \varepsilon) \le \frac{\sigma^2}{n\varepsilon^2}$,
and $\sum 1/n$ diverges, so Borel-Cantelli does not apply. The fourth moment buys a bound of order $1/n^2$, which sums.
Kolmogorov's and Etemadi's proofs remove the extra moments with a cleverer argument (truncating the variables and
looking only along a geometric subsequence of times).

### Borel's normal numbers

Choose $U$ uniformly in $[0, 1]$ and write it in binary, $U = 0.d_1d_2d_3\ldots$. Then the digits $d_1, d_2, \dots$ are
iid fair bits: $d_1 = 1$ exactly when $U \ge \tfrac12$ (chance $\tfrac12$), and given the first $k$ digits, $U$ is uniform
on an interval of length $2^{-k}$, half of which has $d_{k+1} = 1$. By the strong law (the bits are bounded, so all
moments are finite),

$$
\frac{d_1 + \dots + d_n}{n} \to \frac12 \quad \text{with probability 1.}
$$

So **almost every number in $[0, 1]$ has, in the long run, as many 1s as 0s in its binary expansion**. The same
argument applied to blocks of digits and to every base shows that almost every number is **normal**: every finite block
of digits appears with its fair frequency, in every base. This was Borel's 1909 theorem. Strangely, although almost all
numbers are normal, it is not known whether $\sqrt2$, $\pi$ or $e$ is normal in any base.

### The difference, made concrete

*Level: expert.*

**Example 5 (in probability, not almost surely).** Let $A_1, A_2, \dots$ be independent events with $P(A_n) = 1/n$, and
$Y_n = \mathbf{1}_{A_n}$. Then $P(|Y_n| > \varepsilon) = 1/n \to 0$: $Y_n \to 0$ in probability. But
$\sum 1/n = \infty$, and the **second** Borel-Cantelli lemma (for independent events, proved in
[Chapter 17](17-Measure-Theoretic-Probability.md)) says that then infinitely many $A_n$ occur with probability 1. So on
almost every run, $Y_n = 1$ again and again: $Y_n$ does not converge to 0 almost surely. Each time is quiet with high
probability, yet every run has infinitely many bumps.

For averages of iid variables the gap between the two laws is narrow but real. Kolmogorov and Feller characterised the
weak law: $\bar X_n - E[X_1\mathbf{1}\{|X_1| \le n\}] \to 0$ in probability if and only if $x\,P(|X_1| > x) \to 0$. The
strong law, on the other hand, holds if and only if $E|X_1| < \infty$. A symmetric law with
$P(|X_1| > x) \approx \frac{1}{x \ln x}$ for large $x$ satisfies the first condition but not the second: for it,
$\bar X_n \to 0$ in probability, yet on almost every run $\bar X_n$ swings arbitrarily far from 0 infinitely often.

**Beyond the strong law.** The CLT says that at a fixed large time $n$, $S_n - n\mu$ is of size about $\sigma\sqrt n$.
Along a whole run the deviations occasionally get slightly larger: the **law of the iterated logarithm** (Khinchin 1924
for coin flips; Hartman and Wintner 1941 for any iid sequence with finite variance) says that with probability 1,

$$
\limsup_{n \to \infty} \frac{S_n - n\mu}{\sigma\sqrt{2n\ln\ln n}} = 1 .
$$

The weak law, the strong law, the CLT and the law of the iterated logarithm form a ladder of ever finer descriptions of
the same sums: where they go, how surely, with what shape of fluctuation at one time, and how large the fluctuations get
along a whole run.

## Check yourself

??? question "1. The sum of 50 independent uniform $[0,1]$ variables: estimate the chance that it exceeds 27."

    Mean 25, variance $50/12$, standard deviation $\approx 2.041$. $P(S > 27) \approx 1 - \Phi(2/2.041) = 1 - \Phi(0.98) \approx 0.164$.
    (No continuity correction: $S$ is continuous.)

??? question "2. How many fair coin flips are needed so that the proportion of heads is within 0.02 of $\tfrac12$ with probability 0.99?"

    Need $2.576 \cdot \frac{1}{2\sqrt n} \le 0.02$, so $\sqrt n \ge 64.4$ and $n \ge 4148$ (to the next whole number,
    $(2.576/0.04)^2 \approx 4147.4$).

??? question "3. Why does the mgf proof show the error is of order $1/\sqrt n$ and not $1/n$?"

    The first term of $M(t/\sqrt n)$ that the limit forgets is the cubic one, $\frac{E[Y^3]t^3}{6n^{3/2}}$. Raised to
    the $n$-th power, it contributes a factor of about $1 + \frac{E[Y^3]t^3}{6\sqrt n}$. So unless the third moment is
    zero (as for symmetric laws), the mgf of $Z_n$ differs from $e^{t^2/2}$ at order $1/\sqrt n$, and so does its cdf.

??? question "4. Prove Lemma 2 in the special case $c_n = c$ for all $n$, using $\ln(1+x) \le x$ and $\ln(1+x) \ge x - x^2$ for small $|x|$."

    $n\ln(1 + c/n)$ lies between $c - c^2/n$ and $c$, so it tends to $c$, and $(1 + c/n)^n = e^{n\ln(1 + c/n)} \to e^c$.

??? question "5. Let $Y_n$ be Poisson with mean $n$. Show that the mgf of $(Y_n - n)/\sqrt n$ tends to $e^{t^2/2}$. What does this say about $e^{-n}\sum_{k=0}^n n^k/k!$?"

    The Poisson mgf is $e^{n(e^s - 1)}$, so the mgf of $(Y_n - n)/\sqrt n$ is
    $\exp\left(n(e^{t/\sqrt n} - 1) - t\sqrt n\right) = \exp\left(n\left(\frac{t^2}{2n} + O(n^{-3/2})\right)\right) \to e^{t^2/2}$.
    So $(Y_n - n)/\sqrt n \Rightarrow N(0, 1)$ and $P(Y_n \le n) = e^{-n}\sum_{k=0}^n \frac{n^k}{k!} \to \Phi(0) = \tfrac12$.
    (For $n = 50$ the sum is about $0.538$; the convergence is slow, as Berry-Esseen predicts.)

??? question "6. Compute the Berry-Esseen bound for 10 000 fair coin flips, and for the sum of 100 fair dice."

    Coin: $\rho/\sigma^3 = 1$, so the bound is $0.4748/\sqrt{10000} \approx 0.0047$. Die: $\rho = E|X - 3.5|^3 = \tfrac{2(0.5^3 + 1.5^3 + 2.5^3)}{6} = 6.375$,
    $\sigma^3 = (35/12)^{3/2} \approx 4.981$, ratio $\approx 1.28$, bound $\approx 0.4748 \times 1.28/10 \approx 0.061$.
    The real error in Example 1 was far smaller: the bound is a worst case over all $x$ and all laws with that ratio.

??? question "7. Show that for iid Cauchy variables, $P(|\bar X_n| > 1) = \tfrac12$ for every $n$."

    $\bar X_n$ is standard Cauchy, and $P(|X| \le 1) = \int_{-1}^{1}\frac{dx}{\pi(1 + x^2)} = \frac{2}{\pi}\arctan 1 = \frac12$.
    So however many measurements you average, half the time the average is off by more than 1.

??? question "8. Let $X_n$ be uniform on $\{1/n, 2/n, \dots, n/n\}$. Show that $X_n \Rightarrow U$, uniform on $[0,1]$."

    For $0 \le x \le 1$, $F_{X_n}(x) = \frac{\lfloor nx \rfloor}{n}$, which lies between $x - \frac1n$ and $x$, so it tends
    to $x = F_U(x)$. Outside $[0, 1]$ both cdfs are 0 or 1. So the cdfs converge everywhere.

??? question "9. For iid $\pm 1$ fair signs, compute $E[S_n^4]$ exactly and check the formula of the strong law proof."

    $K = E[X^4] = 1$ and $\sigma^4 = 1$, so $E[S_n^4] = n + 3n(n - 1) = 3n^2 - 2n$. Check for $n = 2$: $S_2$ is $\pm 2$
    with chance $\tfrac14$ each and 0 with chance $\tfrac12$, so $E[S_2^4] = 16 \cdot \tfrac12 = 8 = 3 \cdot 4 - 4$.

??? question "10. Explain, with the strong law, why the long-run fraction of sixes in one infinite sequence of fair die rolls is $\tfrac16$ with probability 1. Does the weak law alone say this?"

    Apply the SLLN to the indicators $\mathbf{1}[\text{roll } k \text{ is a six}]$, which are iid with mean $\tfrac16$ and
    bounded (so all moments are finite). The running fraction converges to $\tfrac16$ on a set of runs of probability 1.
    The weak law only says that at each large time a deviation is unlikely; it does not by itself rule out a run whose
    fraction keeps wandering away infinitely often.

??? question "11. (Harder.) Let $\varepsilon_0, \varepsilon_1, \dots$ be independent fair random signs. Show that $W = \sum_{j \ge 0} \varepsilon_j 2^{-j}$ is uniform on $[-2, 2]$. Why does this make the sum in 12.4 with terms $\pm 2^k$ non-normal?"

    Write $\varepsilon_j = 2b_j - 1$ with $b_j$ independent fair bits. Then
    $W = \sum_j (2b_j - 1)2^{-j} = 4\sum_{j \ge 0} b_j 2^{-j-1} - 2 = 4U - 2$, where $U = 0.b_0b_1b_2\ldots$ in binary is
    uniform on $[0, 1]$ (the digits of a uniform number are iid fair bits, and conversely). So $W$ is uniform on
    $[-2, 2]$. The sum $S_n$ of $\pm 2^k$, $k = 1..n$, divided by $2^n$, has the law of the first $n$ terms of $W$, so
    $S_n/2^n \Rightarrow$ uniform on $[-2, 2]$. Dividing by the standard deviation instead only rescales, so the
    standardised sum tends to a uniform law, not a normal one.

??? question "12. (Harder.) Give an example of independent (not identical) variables with finite variances for which the CLT fails, and say which hypothesis of Lindeberg's theorem breaks."

    Exercise 11's example works: $X_k = \pm 2^k$. Here $s_n^2 = \sum_{k \le n} 4^k \approx \tfrac43 4^n$, and the last
    term alone has $|X_n| = 2^n \approx 0.87 s_n$, so for $\varepsilon < 0.87$ the Lindeberg sum includes the whole
    variance of the last term, $4^n/s_n^2 \to \tfrac34$, which does not tend to 0. One term dominates.

## What you learned

- The CLT: for iid terms with mean $\mu$ and finite variance $\sigma^2$, $\frac{S_n - n\mu}{\sigma\sqrt n}$ converges in
  distribution to $N(0, 1)$, whatever the law of the terms.
- In use: $S_n \approx N(n\mu, n\sigma^2)$ and $\bar X_n \approx N(\mu, \sigma^2/n)$, with a continuity correction for
  whole-number sums; it beats Chebyshev because it knows the shape.
- The proof: the mgf of the standardised sum is $M(t/\sqrt n)^n = (1 + \frac{t^2}{2n} + o(\frac1n))^n \to e^{t^2/2}$,
  then the continuity theorem; characteristic functions remove the mgf assumption, and Lindeberg's condition handles
  non-identical terms.
- Berry-Esseen: the error is at most $0.4748\,\rho/(\sigma^3\sqrt n)$; the rate $1/\sqrt n$ is the truth, and
  skewness makes it worse.
- It fails without finite variance (the Cauchy average is as spread as one Cauchy value; heavy tails lead to other
  stable laws), under strong dependence, or when one term dominates.
- The strong law: $\bar X_n \to \mu$ with probability 1 when $E|X_1| < \infty$; proved here with four moments and the
  first Borel-Cantelli lemma; it gives Borel's normal numbers and is strictly stronger than the weak law.

**Next:** [Chapter 13](13-Markov-Chains.md), random processes with memory of one step: Markov chains, their long-run
behaviour, PageRank and card shuffling.

## Further reading

- W. Feller, *An Introduction to Probability Theory and Its Applications*, Vol. I (3rd ed., 1968) chapters VII and X, and Vol. II (2nd ed., 1971) chapters XV to XVII (characteristic functions, Berry-Esseen, stable laws and their domains of attraction).
- P. Billingsley, *Probability and Measure*, 3rd ed., 1995 (sections 6, 22, 26 to 30: strong laws, characteristic functions, the CLT, mgfs).
- R. Durrett, *Probability: Theory and Examples*, 5th ed., 2019 (chapters 2 and 3).
- B. V. Gnedenko and A. N. Kolmogorov, *Limit Distributions for Sums of Independent Random Variables*, English translation 1954.
- I. G. Shevtsova, "On the absolute constants in the Berry-Esseen type inequalities for identically distributed summands", preprint, 2011.
- H. Fischer, *A History of the Central Limit Theorem: From Classical to Modern Probability Theory*, 2011.
- N. Etemadi, "An elementary proof of the strong law of large numbers", *Zeitschrift für Wahrscheinlichkeitstheorie und verwandte Gebiete* 55, 1981.
- On this site: Topics lessons on [large numbers and the CLT](../../topics/probability/level-8/05-large-numbers-clt.md)
  and [the normal approximation](../../topics/probability/level-8/04-normal-approximation.md); MAT137 guides on
  [sequences](../../uoft/MAT137/unit11.md), [series](../../uoft/MAT137/unit13.md) and
  [Taylor series](../../uoft/MAT137/unit14.md); the [Number Theory book](../number-theory/index.md) for the question of
  whether famous constants are normal numbers.
