# 10. Categorical data

*Many data are not measurements but labels: round or wrinkled, recovered or not, online or print, exposed or
unexposed. What we observe is how many items fall in each category, and the questions are about those counts. Do
they match a theory? Are two labels related? How much more likely is the outcome in one group than in another? In
this chapter you will build Karl Pearson's chi-square test from scratch and use it on Gregor Mendel's peas, together
with the famous and still debated charge that Mendel's data fit too well; test whether two categorical variables are
independent; compute exact p-values for small tables with Fisher's exact test; and learn the two numbers that
summarise a two-by-two table in medicine and public health, the relative risk and the odds ratio, including why
the odds ratio is the one a case-control study can estimate.*

!!! abstract "In this chapter"
    **You will learn:**

    - Pearson's chi-square statistic, why it is approximately chi-squared, and how to count its degrees of freedom
    - goodness-of-fit tests, with Mendel's 1866 pea data and Fisher's 1936 critique
    - the chi-square test of independence for a table of counts, with expected counts derived, not memorised
    - Fisher's exact test, and a proof that conditioning on the margins removes the unknown parameter
    - risk difference, relative risk and odds ratio; their confidence intervals; and why case-control studies need the
      odds ratio (with proof)

    **You need:** [Chapter 9](09-Hypothesis-Tests.md) (tests and p-values), [Chapter 6](06-Sampling-Distributions.md)
    (proportions and the normal approximation), and from the Probability book the binomial and hypergeometric laws
    ([Chapter 5](../probability/05-Discrete-Random-Variables.md)) and the central limit theorem
    ([Chapter 12](../probability/12-The-Central-Limit-Theorem.md)). The Topics lesson on
    [Simpson's paradox](../../topics/statistics/level-8/05-simpsons-paradox.md) is a gentle look at two-way tables.

    **Levels:** 10.1 is intermediate, with an advanced proof sketch; 10.2 is intermediate; 10.3 is intermediate to
    advanced; 10.4 is intermediate, with an advanced last part.

## 10.1 Chi-square goodness of fit

### The question

A die is rolled 120 times (made-up data) with these results:

| face | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| observed | 14 | 22 | 17 | 25 | 18 | 24 |
| expected if fair | 20 | 20 | 20 | 20 | 20 | 20 |

The counts are not all 20, but they never would be. Are these deviations bigger than chance would produce for a
fair die? We need one number that measures how far the whole table is from what the hypothesis predicts, and a
known distribution for that number.

### Pearson's statistic

Suppose $n$ items fall independently into $k$ categories, and the null hypothesis says category $i$ has probability
$p_i$ (with $p_1 + \dots + p_k = 1$). Then the **expected count** in category $i$ is $E_i = n p_i$. Write $O_i$ for
the **observed count**. Karl Pearson (1900) proposed

$$
X^2 = \sum_{i=1}^{k} \frac{(O_i - E_i)^2}{E_i} .
$$

Each term is a squared gap between observation and expectation, divided by the expectation. Why divide? Because
a gap of 5 means much more when 4 were expected than when 400 were. A count with expected value $E$ has variance
roughly $E$ (it is binomial with small $p_i$, or close to Poisson), so $(O_i - E_i)/\sqrt{E_i}$ is roughly a
standardised score, and $X^2$ adds up the squares of $k$ such scores.

**Theorem (Pearson).** If the null hypothesis is true, then as $n \to \infty$ the distribution of $X^2$ approaches
the **chi-squared distribution with $k - 1$ degrees of freedom**, $\chi^2_{k-1}$.

Recall from [Chapter 9](09-Hypothesis-Tests.md) that $\chi^2_m$ is the law of a sum of $m$ squared independent
standard normals. It has mean $m$, it is skewed to the right, and only large values of $X^2$ count against $H_0$
(small values mean the data are close to the prediction). So the p-value is $P(\chi^2_{k-1} \ge X^2)$.

**Example 1 (the die).** The six terms are $\frac{36}{20}, \frac{4}{20}, \frac{9}{20}, \frac{25}{20}, \frac{4}{20},
\frac{16}{20}$, which sum to $\frac{94}{20} = 4.7$. There are $k - 1 = 5$ degrees of freedom. The upper 5 percent
point of $\chi^2_5$ is 11.07, and $P(\chi^2_5 \ge 4.7) \approx 0.45$. The data are entirely consistent with a fair
die. Check: $\chi^2_5$ has mean 5, and 4.7 is just below its mean, about as ordinary as possible.

### Why $k - 1$? The case of two categories

With $k = 2$ categories the claim can be proved exactly with what we already have. Let $O_1$ be the number of
successes, binomial with parameters $n$ and $p$, and $O_2 = n - O_1$. Then $E_1 = np$, $E_2 = n(1 - p)$, and
$O_2 - E_2 = -(O_1 - E_1)$. So

$$
X^2 = (O_1 - np)^2\left(\frac{1}{np} + \frac{1}{n(1-p)}\right) = \frac{(O_1 - np)^2}{np(1-p)} = Z^2,
$$

where $Z = (O_1 - np)/\sqrt{np(1-p)}$ is the usual standardised binomial count. By the de Moivre-Laplace theorem
([Probability, Chapter 10](../probability/10-The-Normal-Distribution.md)) $Z$ is approximately $N(0,1)$, so $X^2$ is
approximately the square of one standard normal: $\chi^2_1$. Two categories, but one degree of freedom, because the
second count is determined by the first. Check with the coin of [Chapter 9](09-Hypothesis-Tests.md): 60 heads in 100
gives $X^2 = \frac{100}{50} + \frac{100}{50} = 4 = 2^2$, the same p-value 0.0455 as the z test.

### The general case

*Level: advanced.* For $k$ categories, let $U_i = (O_i - np_i)/\sqrt{np_i}$. The vector of counts is
**multinomial**, and the standard facts are $\operatorname{Var}(O_i) = np_i(1 - p_i)$ and
$\operatorname{Cov}(O_i, O_j) = -np_ip_j$ for $i \ne j$ (the counts are negatively related, since they share a
fixed total). Therefore

$$
\operatorname{Cov}(U_i, U_j) = \begin{cases} 1 - p_i & i = j \\ -\sqrt{p_i p_j} & i \ne j \end{cases}
\qquad\text{that is,}\qquad \operatorname{Cov}(U) = I - vv^{\mathsf T},
$$

where $v = (\sqrt{p_1}, \dots, \sqrt{p_k})$ is a column vector of length 1 and $I$ is the identity matrix. The
multivariate central limit theorem says $U$ is approximately normal with this covariance. The matrix
$I - vv^{\mathsf T}$ is the projection onto the $(k-1)$-dimensional space perpendicular to $v$: indeed
$U \cdot v = \sum (O_i - np_i)/\sqrt n = 0$ always, so $U$ lives in that space. A standard normal vector in a
$(k-1)$-dimensional space, written in an orthonormal basis of it, has $k - 1$ independent standard normal
coordinates, so its squared length $|U|^2 = X^2$ is approximately $\chi^2_{k-1}$. A full proof is in the books by
Casella and Berger or by Agresti listed at the end.

The general rule this suggests: **degrees of freedom = number of free cells minus number of estimated parameters.**
The $k$ counts have one constraint (they add to $n$), leaving $k - 1$ free. If the null hypothesis does not fix the
$p_i$ completely but says they come from a family with $s$ unknown parameters, and these are estimated from the same
data (by maximum likelihood on the counts), the degrees of freedom drop to $k - 1 - s$. Pearson himself did not
always subtract estimated parameters; Fisher showed in the early 1920s that one must, in a sharp exchange with
Pearson that did neither man's temper any good.

### When the approximation is good

The chi-squared law is a large-sample approximation. A common rule of thumb, due to William Cochran in the 1950s,
is that all expected counts should be at least 1 and most (say 80 percent) should be at least 5. When expected
counts are small, merge neighbouring categories, or use an exact method such as the one in 10.3.

### Mendel's peas

Gregor Mendel, an Augustinian friar in Brno, presented his experiments on pea hybrids in 1865 and published them in
1866. In one experiment he crossed plants that were pure-bred for round yellow seeds with plants pure-bred for
wrinkled green seeds. The hybrids all had round yellow seeds. Then he let the hybrids self-pollinate and classified
the 556 seeds of the next generation:

| seed type | round yellow | round green | wrinkled yellow | wrinkled green | total |
|---|---|---|---|---|---|
| observed | 315 | 108 | 101 | 32 | 556 |

His theory, in modern words: shape and colour are each controlled by one gene with a dominant form (round, yellow)
and a recessive form (wrinkled, green); each parent passes on one of its two copies at random; and the two genes are
inherited independently. Each trait then shows the dominant form with probability $\frac34$, and the four
combinations have probabilities $\frac{9}{16}, \frac{3}{16}, \frac{3}{16}, \frac{1}{16}$: the 9:3:3:1 ratio.

*Step 1: expected counts.* $556 \times \frac{9}{16} = 312.75$, $556 \times \frac{3}{16} = 104.25$ (twice), and
$556 \times \frac{1}{16} = 34.75$.

*Step 2: the terms.*

$$
\frac{(315 - 312.75)^2}{312.75} + \frac{(108 - 104.25)^2}{104.25} + \frac{(101 - 104.25)^2}{104.25} + \frac{(32 - 34.75)^2}{34.75}
\approx 0.016 + 0.135 + 0.101 + 0.218 = 0.470 .
$$

*Step 3: the p-value.* There are $4 - 1 = 3$ degrees of freedom (the theory fixes all four probabilities; nothing
is estimated). $P(\chi^2_3 \ge 0.470) \approx 0.93$.

The fit is excellent: deviations at least this large would occur 93 percent of the time if the theory were exactly
right. The figure shows where 0.47 falls on the $\chi^2_3$ curve.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 230" role="img" aria-label="Chi-squared densities with 2, 3 and 6 degrees of freedom. All are skewed to the right; more degrees of freedom move the peak right and spread the curve. For 3 degrees of freedom the upper 5 percent tail beyond 7.81 is shaded orange, and Mendel's statistic 0.47 is marked near zero, far from the tail">
  <path d="M215.8,180 L215.8,173.3 L218.1,173.6 L220.3,173.8 L222.6,174.1 L224.8,174.4 L227.1,174.6 L229.3,174.8 L231.6,175.1 L233.8,175.3 L236.1,175.5 L238.3,175.7 L240.6,175.9 L242.8,176.0 L245.1,176.2 L247.3,176.4 L249.6,176.5 L251.8,176.7 L254.1,176.8 L256.3,177.0 L258.6,177.1 L260.8,177.2 L263.1,177.4 L265.3,177.5 L267.6,177.6 L269.8,177.7 L272.1,177.8 L274.3,177.9 L276.6,178.0 L278.8,178.1 L281.1,178.2 L283.3,178.2 L285.6,178.3 L287.8,178.4 L290.1,178.5 L292.3,178.5 L294.6,178.6 L296.8,178.7 L299.1,178.7 L301.3,178.8 L303.6,178.8 L305.8,178.9 L308.1,178.9 L310.3,179.0 L312.6,179.0 L314.8,179.1 L317.1,179.1 L319.3,179.2 L321.6,179.2 L323.8,179.2 L326.1,179.3 L328.3,179.3 L330.6,179.3 L332.8,179.4 L335.1,179.4 L337.3,179.4 L339.6,179.4 L341.8,179.5 L344.1,179.5 L346.3,179.5 L348.6,179.5 L350.8,179.6 L353.1,179.6 L355.3,179.6 L357.6,179.6 L359.8,179.6 L362.1,179.6 L364.3,179.7 L366.6,179.7 L368.8,179.7 L371.1,179.7 L373.3,179.7 L375.6,179.7 L377.8,179.7 L380.1,179.8 L382.3,179.8 L384.6,179.8 L386.8,179.8 L389.1,179.8 L391.3,179.8 L393.6,179.8 L395.8,179.8 L398.1,179.8 L400.0,180 Z" fill="#eea66f" fill-opacity="0.85" stroke="none"/>
  <polyline fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" points="40.0,30.0 42.2,37.3 44.5,44.3 46.8,50.9 49.0,57.2 51.2,63.2 53.5,68.9 55.8,74.3 58.0,79.5 60.2,84.4 62.5,89.0 64.8,93.5 67.0,97.7 69.2,101.7 71.5,105.5 73.8,109.1 76.0,112.6 78.2,115.9 80.5,119.0 82.8,122.0 85.0,124.8 87.3,127.5 89.5,130.1 91.8,132.5 94.0,134.8 96.3,137.0 98.5,139.1 100.8,141.1 103.0,143.0 105.3,144.8 107.5,146.5 109.8,148.2 112.0,149.7 114.3,151.2 116.5,152.6 118.8,153.9 121.0,155.2 123.3,156.4 125.5,157.6 127.8,158.7 130.0,159.7 132.3,160.7 134.5,161.6 136.8,162.5 139.0,163.4 141.2,164.2 143.5,165.0 145.8,165.7 148.0,166.4 150.2,167.1 152.5,167.7 154.7,168.3 157.0,168.9 159.2,169.4 161.5,169.9 163.7,170.4 166.0,170.9 168.2,171.3 170.5,171.7 172.7,172.1 175.0,172.5 177.2,172.9 179.5,173.2 181.7,173.6 184.0,173.9 186.2,174.2 188.5,174.5 190.7,174.7 193.0,175.0 195.2,175.2 197.5,175.5 199.7,175.7 202.0,175.9 204.2,176.1 206.5,176.3 208.7,176.5 211.0,176.6 213.2,176.8 215.5,177.0 217.7,177.1 220.0,177.3 222.2,177.4 224.5,177.5 226.7,177.6 229.0,177.8 231.2,177.9 233.5,178.0 235.7,178.1 238.0,178.2 240.2,178.2 242.5,178.3 244.7,178.4 247.0,178.5 249.2,178.6 251.5,178.6 253.7,178.7 256.0,178.8 258.2,178.8 260.5,178.9 262.7,178.9 265.0,179.0 267.2,179.0 269.5,179.1 271.7,179.1 274.0,179.2 276.2,179.2 278.5,179.3 280.7,179.3 283.0,179.3 285.2,179.4 287.5,179.4 289.7,179.4 292.0,179.4 294.2,179.5 296.5,179.5 298.7,179.5 301.0,179.5 303.2,179.6 305.5,179.6 307.7,179.6 310.0,179.6 312.2,179.6 314.5,179.7 316.7,179.7 319.0,179.7 321.2,179.7 323.5,179.7 325.7,179.7 328.0,179.8 330.2,179.8 332.5,179.8 334.7,179.8 337.0,179.8 339.2,179.8 341.5,179.8 343.7,179.8 346.0,179.8 348.2,179.8 350.5,179.8 352.7,179.9 355.0,179.9 357.2,179.9 359.5,179.9 361.7,179.9 364.0,179.9 366.2,179.9 368.5,179.9 370.7,179.9 373.0,179.9 375.2,179.9 377.5,179.9 379.7,179.9 382.0,179.9 384.2,179.9 386.5,179.9 388.7,179.9 391.0,179.9 393.2,179.9 395.5,179.9 397.7,179.9 400.0,179.9"/>
  <polyline fill="none" stroke="#7ccf9a" stroke-width="2.5" points="40.0,180.0 42.2,144.0 44.5,131.6 46.8,123.6 49.0,118.0 51.2,114.1 53.5,111.3 55.8,109.4 58.0,108.2 60.2,107.6 62.5,107.4 64.8,107.6 67.0,108.0 69.2,108.8 71.5,109.7 73.8,110.8 76.0,112.0 78.2,113.3 80.5,114.7 82.8,116.2 85.0,117.7 87.3,119.3 89.5,120.9 91.8,122.5 94.0,124.2 96.3,125.8 98.5,127.4 100.8,129.0 103.0,130.6 105.3,132.2 107.5,133.7 109.8,135.3 112.0,136.8 114.3,138.2 116.5,139.7 118.8,141.1 121.0,142.5 123.3,143.8 125.5,145.1 127.8,146.4 130.0,147.6 132.3,148.8 134.5,150.0 136.8,151.1 139.0,152.2 141.2,153.2 143.5,154.3 145.8,155.3 148.0,156.2 150.2,157.1 152.5,158.0 154.7,158.9 157.0,159.7 159.2,160.5 161.5,161.3 163.7,162.1 166.0,162.8 168.2,163.5 170.5,164.1 172.7,164.8 175.0,165.4 177.2,166.0 179.5,166.6 181.7,167.1 184.0,167.7 186.2,168.2 188.5,168.7 190.7,169.1 193.0,169.6 195.2,170.0 197.5,170.4 199.7,170.8 202.0,171.2 204.2,171.6 206.5,172.0 208.7,172.3 211.0,172.6 213.2,172.9 215.5,173.2 217.7,173.5 220.0,173.8 222.2,174.1 224.5,174.3 226.7,174.6 229.0,174.8 231.2,175.0 233.5,175.2 235.7,175.4 238.0,175.6 240.2,175.8 242.5,176.0 244.7,176.2 247.0,176.4 249.2,176.5 251.5,176.7 253.7,176.8 256.0,176.9 258.2,177.1 260.5,177.2 262.7,177.3 265.0,177.4 267.2,177.6 269.5,177.7 271.7,177.8 274.0,177.9 276.2,178.0 278.5,178.1 280.7,178.1 283.0,178.2 285.2,178.3 287.5,178.4 289.7,178.4 292.0,178.5 294.2,178.6 296.5,178.6 298.7,178.7 301.0,178.8 303.2,178.8 305.5,178.9 307.7,178.9 310.0,179.0 312.2,179.0 314.5,179.1 316.7,179.1 319.0,179.1 321.2,179.2 323.5,179.2 325.7,179.3 328.0,179.3 330.2,179.3 332.5,179.4 334.7,179.4 337.0,179.4 339.2,179.4 341.5,179.5 343.7,179.5 346.0,179.5 348.2,179.5 350.5,179.6 352.7,179.6 355.0,179.6 357.2,179.6 359.5,179.6 361.7,179.6 364.0,179.7 366.2,179.7 368.5,179.7 370.7,179.7 373.0,179.7 375.2,179.7 377.5,179.7 379.7,179.8 382.0,179.8 384.2,179.8 386.5,179.8 388.7,179.8 391.0,179.8 393.2,179.8 395.5,179.8 397.7,179.8 400.0,179.8"/>
  <polyline fill="none" stroke="#9cc9ea" stroke-width="2.5" points="40.0,180.0 42.2,179.8 44.5,179.3 46.8,178.5 49.0,177.5 51.2,176.3 53.5,175.0 55.8,173.5 58.0,172.0 60.2,170.3 62.5,168.6 64.8,166.9 67.0,165.2 69.2,163.5 71.5,161.8 73.8,160.1 76.0,158.4 78.2,156.8 80.5,155.3 82.8,153.8 85.0,152.4 87.3,151.1 89.5,149.8 91.8,148.6 94.0,147.5 96.3,146.4 98.5,145.5 100.8,144.6 103.0,143.8 105.3,143.0 107.5,142.3 109.8,141.8 112.0,141.2 114.3,140.8 116.5,140.4 118.8,140.1 121.0,139.8 123.3,139.6 125.5,139.5 127.8,139.4 130.0,139.4 132.3,139.4 134.5,139.5 136.8,139.6 139.0,139.8 141.2,140.0 143.5,140.2 145.8,140.5 148.0,140.8 150.2,141.2 152.5,141.5 154.7,141.9 157.0,142.3 159.2,142.8 161.5,143.3 163.7,143.7 166.0,144.2 168.2,144.8 170.5,145.3 172.7,145.8 175.0,146.4 177.2,147.0 179.5,147.5 181.7,148.1 184.0,148.7 186.2,149.3 188.5,149.9 190.7,150.5 193.0,151.1 195.2,151.7 197.5,152.3 199.7,152.8 202.0,153.4 204.2,154.0 206.5,154.6 208.7,155.2 211.0,155.8 213.2,156.3 215.5,156.9 217.7,157.5 220.0,158.0 222.2,158.6 224.5,159.1 226.7,159.6 229.0,160.2 231.2,160.7 233.5,161.2 235.7,161.7 238.0,162.2 240.2,162.7 242.5,163.1 244.7,163.6 247.0,164.0 249.2,164.5 251.5,164.9 253.7,165.4 256.0,165.8 258.2,166.2 260.5,166.6 262.7,167.0 265.0,167.4 267.2,167.7 269.5,168.1 271.7,168.5 274.0,168.8 276.2,169.2 278.5,169.5 280.7,169.8 283.0,170.1 285.2,170.4 287.5,170.7 289.7,171.0 292.0,171.3 294.2,171.6 296.5,171.8 298.7,172.1 301.0,172.4 303.2,172.6 305.5,172.8 307.7,173.1 310.0,173.3 312.2,173.5 314.5,173.7 316.7,173.9 319.0,174.1 321.2,174.3 323.5,174.5 325.7,174.7 328.0,174.9 330.2,175.1 332.5,175.2 334.7,175.4 337.0,175.6 339.2,175.7 341.5,175.9 343.7,176.0 346.0,176.1 348.2,176.3 350.5,176.4 352.7,176.5 355.0,176.6 357.2,176.8 359.5,176.9 361.7,177.0 364.0,177.1 366.2,177.2 368.5,177.3 370.7,177.4 373.0,177.5 375.2,177.6 377.5,177.7 379.7,177.8 382.0,177.8 384.2,177.9 386.5,178.0 388.7,178.1 391.0,178.1 393.2,178.2 395.5,178.3 397.7,178.3 400.0,178.4"/>
  <line x1="40" y1="180" x2="400" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="180" x2="40" y2="30" stroke="currentColor" stroke-width="1"/>
  <text x="40.0" y="196" text-anchor="middle" font-size="11" fill="currentColor">0</text>
  <text x="85.0" y="196" text-anchor="middle" font-size="11" fill="currentColor">2</text>
  <text x="130.0" y="196" text-anchor="middle" font-size="11" fill="currentColor">4</text>
  <text x="175.0" y="196" text-anchor="middle" font-size="11" fill="currentColor">6</text>
  <text x="220.0" y="196" text-anchor="middle" font-size="11" fill="currentColor">8</text>
  <text x="265.0" y="196" text-anchor="middle" font-size="11" fill="currentColor">10</text>
  <text x="310.0" y="196" text-anchor="middle" font-size="11" fill="currentColor">12</text>
  <text x="355.0" y="196" text-anchor="middle" font-size="11" fill="currentColor">14</text>
  <text x="400.0" y="196" text-anchor="middle" font-size="11" fill="currentColor">16</text>
  <line x1="50.6" y1="180" x2="50.6" y2="186" stroke="currentColor" stroke-width="2"/>
  <line x1="215.8" y1="120" x2="215.8" y2="180" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="215.8" y="114" text-anchor="middle" font-size="11" fill="currentColor">7.81</text>
  <text x="256.0" y="165" text-anchor="start" font-size="11" fill="currentColor">top 5% (3 df)</text>
  <text x="44.6" y="208" text-anchor="start" font-size="11" fill="currentColor">Mendel 0.47</text>
  <text x="67.0" y="54.0" text-anchor="start" font-size="11" fill="currentColor">2 df (dashed)</text>
  <text x="98.5" y="120.0" text-anchor="start" font-size="11" fill="currentColor">3 df</text>
  <text x="179.5" y="133.5" text-anchor="start" font-size="11" fill="currentColor">6 df</text>
  <text x="220" y="218" text-anchor="middle" font-size="11" fill="currentColor">value of the statistic</text>
</svg>
</div>

### "Too good to be true"? Fisher's critique

A fit can also be suspiciously good. If $X^2$ is very *small*, the data are closer to the prediction than random
sampling usually allows. Under $H_0$, $P(\chi^2_3 \le 0.47) \approx 0.07$: a single result like Mendel's is not
remarkable. But in 1936 Ronald Fisher, in a paper titled "Has Mendel's work been rediscovered?", went through all of
Mendel's experiments. Since independent chi-squared statistics add (their degrees of freedom add too), he combined
them into one overall statistic. He found the total agreement so close that, by his calculation, results fitting
as well or better would arise by chance only a few times in a hundred thousand.

Fisher raised a second, sharper point. In some experiments Mendel had to decide whether a plant showing the
dominant trait was pure-bred or hybrid, and, as Mendel described it, he did this by growing 10 of its offspring: a
hybrid would show the recessive form in at least one of them, unless all 10 happened to show the dominant form,
which has chance $(\frac34)^{10} \approx 0.056$. So about 5.6 percent of hybrids would be misclassified as pure, and
the expected split of hybrid to pure among the dominant plants should be about
$\frac23 \times 0.944 : (1 - \frac23 \times 0.944) \approx 0.629 : 0.371$, a ratio of about 1.7 to 1, not the 2 to 1
that Mendel's theory predicts before misclassification. Fisher found Mendel's counts closer to 2 to 1.

What should we conclude? This is where honesty matters, because the story is often told as "Mendel cheated", and
that is not established.

- Fisher himself did not accuse Mendel of fraud. He suggested that an assistant who knew the expected results might
  have been responsible.
- Others have proposed innocent or semi-innocent mechanisms: unconscious bias in classifying borderline seeds,
  stopping counts when the ratio looked right, or reporting only the experiments that seemed clean.
- Some later authors have questioned parts of Fisher's own analysis, for example whether Mendel's procedure was
  really as Fisher read it.

A 2008 book edited by Allan Franklin and colleagues, *Ending the Mendel-Fisher Controversy*, collects the main
papers and arguments. Despite its title, the experts in it do not all agree. What is not in doubt is that Mendel's
laws are correct: they have been confirmed countless times since 1900. The episode is a lesson in two directions:
a test can flag data that fit too well, and the reason may be a human process rather than a dishonest one.

### Try it in Python

```python
obs = [315, 108, 101, 32]
n = sum(obs)
exp = [n * r / 16 for r in (9, 3, 3, 1)]
X2 = sum((o - e) ** 2 / e for o, e in zip(obs, exp))
print(n, exp, round(X2, 3))       # 556 [312.75, 104.25, 104.25, 34.75] 0.47
```

## 10.2 Tests of independence

### Two categorical variables

A survey (made-up data) asks 200 people their age group and their main source of news:

| | online | TV | print | total |
|---|---|---|---|---|
| under 40 | 48 | 30 | 12 | 90 |
| 40 and over | 42 | 40 | 28 | 110 |
| total | 90 | 70 | 40 | 200 |

A table like this, with counts for every combination of two categorical variables, is a **contingency table** (or
two-way table, as in [Chapter 4](04-Relationships-and-Correlation.md)). The row and column totals are its
**margins**. The question: is news source **independent** of age group, or does the mix differ by age?

### Expected counts under independence

Write $p_{ij}$ for the probability that a random person falls in row $i$ and column $j$, and $p_{i\cdot}$,
$p_{\cdot j}$ for the row and column probabilities (the dots mean "summed over the other index"). Independence
means

$$
p_{ij} = p_{i\cdot}\,p_{\cdot j} \quad \text{for every } i, j .
$$

We do not know the margins' probabilities, so we estimate them from the margins of the table: $\hat p_{i\cdot} =
R_i/N$ and $\hat p_{\cdot j} = C_j/N$, where $R_i$ and $C_j$ are the row and column totals and $N$ is the grand total.
(These are also the maximum likelihood estimates under independence, [Chapter 7](07-Estimation.md); the likelihood
factorises into a row part and a column part, each maximised by the observed proportions.) The expected count is
then

$$
E_{ij} = N\,\hat p_{i\cdot}\,\hat p_{\cdot j} = \frac{R_i\,C_j}{N}.
$$

In words: **row total times column total, divided by the grand total.** For the survey, under 40 and online:
$E_{11} = 90 \times 90/200 = 40.5$. All six:

| | online | TV | print |
|---|---|---|---|
| under 40 | 40.5 | 31.5 | 18.0 |
| 40 and over | 49.5 | 38.5 | 22.0 |

Check: the expected counts have the same margins as the observed ones (40.5 + 31.5 + 18 = 90, and so on). That is
always true, because summing $R_iC_j/N$ over $j$ gives $R_i$.

### The test

The statistic is Pearson's again, summed over all cells:

$$
X^2 = \sum_{i,j} \frac{(O_{ij} - E_{ij})^2}{E_{ij}} ,
$$

and under independence it is approximately $\chi^2$ with $(r - 1)(c - 1)$ degrees of freedom, for a table with $r$
rows and $c$ columns.

**Counting the degrees of freedom.** Use the rule from 10.1. A table of $rc$ cells with a fixed total has $rc - 1$
free cells. Under independence we estimate $r - 1$ free row probabilities and $c - 1$ free column probabilities
(the last of each is fixed because they add to 1). So

$$
(rc - 1) - (r - 1) - (c - 1) = rc - r - c + 1 = (r-1)(c-1).
$$

Another way to see it: once the margins are fixed, you can fill in the top-left $(r-1) \times (c-1)$ block freely,
and the last row and column are then forced by the totals.

**Example 2.** For the survey, the six terms are

| | online | TV | print |
|---|---|---|---|
| under 40 | $\frac{7.5^2}{40.5} = 1.389$ | $\frac{1.5^2}{31.5} = 0.071$ | $\frac{6^2}{18} = 2.000$ |
| 40 and over | $\frac{7.5^2}{49.5} = 1.136$ | $\frac{1.5^2}{38.5} = 0.058$ | $\frac{6^2}{22} = 1.636$ |

with sum $X^2 \approx 6.29$ on $(2-1)(3-1) = 2$ degrees of freedom. The 5 percent point of $\chi^2_2$ is 5.99, and
$P(\chi^2_2 \ge 6.29) \approx 0.043$. At the 5 percent level there is evidence that news source and age group are
related in the population this survey stands for.

The test says *that* the variables are related, not *how*. To see how, look at the **standardised residuals**
$(O_{ij} - E_{ij})/\sqrt{E_{ij}}$, the square roots of the terms with their signs: $+1.18$ for under-40 and online,
$-1.41$ for under-40 and print, $+1.28$ for 40-and-over and print. The younger group reads print less and goes
online more than independence predicts. Always report the proportions too: 13 percent of the younger group named
print, against 25 percent of the older group.

### Independence and homogeneity

The same calculation answers two different-sounding questions.

- **Independence**: one sample of $N$ people, each classified on two variables. Only $N$ is fixed by the design.
- **Homogeneity**: separate samples from several groups (say 90 people under 40 and 110 over 40, recruited
  separately), each classified on one variable. The row totals are fixed by the design. The null hypothesis is that
  the distribution across columns is the same in every group.

The expected counts, the statistic and the degrees of freedom are identical in both cases, so in practice the same
test is used.

### The two-by-two table

A table with two rows and two columns is so common that it has its own notation:

| | outcome yes | outcome no | total |
|---|---|---|---|
| group 1 | $a$ | $b$ | $a + b$ |
| group 2 | $c$ | $d$ | $c + d$ |
| total | $a + c$ | $b + d$ | $N$ |

**Theorem.** For a two-by-two table,

$$
X^2 = \frac{N\,(ad - bc)^2}{(a+b)(c+d)(a+c)(b+d)} .
$$

*Proof.* First, all four gaps $O - E$ have the same size. For the top-left cell,

$$
a - \frac{(a+b)(a+c)}{N} = \frac{a(a+b+c+d) - (a+b)(a+c)}{N} = \frac{ad - bc}{N},
$$

and since the observed and expected tables have the same margins, the other three gaps are $\pm(ad - bc)/N$ as well.
So $X^2 = \frac{(ad-bc)^2}{N^2}\sum_{i,j}\frac{1}{E_{ij}}$. Writing $R_1, R_2, C_1, C_2$ for the margins,

$$
\sum_{i,j}\frac{1}{E_{ij}} = N\left(\frac{1}{R_1} + \frac{1}{R_2}\right)\left(\frac{1}{C_1} + \frac{1}{C_2}\right)
= N \cdot \frac{N}{R_1R_2} \cdot \frac{N}{C_1C_2},
$$

and multiplying gives the formula. $\square$

The quantity $ad - bc$ is zero exactly when the two rows have the same proportion of "yes" ($a/(a+b) = c/(c+d)$
rearranges to $ad = bc$), so the formula measures departure from equal proportions directly. One can also check
(exercise 11) that this $X^2$ equals the square of the z statistic for comparing two proportions with a pooled
standard error, just as in the one-variable case.

**Yates's correction.** For small two-by-two tables, Frank Yates (1934) suggested replacing $|ad - bc|$ by
$|ad - bc| - N/2$ in the formula, a continuity correction like the one for the binomial. It makes the test more
conservative. With modern computers the usual advice is to use Fisher's exact test (10.3) for small tables
instead.

## 10.3 Fisher's exact test

### When counts are small

A small trial (made-up data) compares a new physiotherapy with standard care. Of 12 patients given the new
treatment, 9 improved; of 11 given standard care, 3 improved.

| | improved | not improved | total |
|---|---|---|---|
| new | 9 | 3 | 12 |
| standard | 3 | 8 | 11 |
| total | 12 | 11 | 23 |

The chi-square formula gives $X^2 \approx 5.24$ and $p \approx 0.022$ (or $X^2 \approx 3.50$ and $p \approx 0.061$
with Yates's correction). The expected counts are between 5.3 and 6.3, right at the edge of the rule of thumb, and the
two answers fall on opposite sides of 0.05. An exact calculation would settle it.

### The idea: condition on the margins

Under $H_0$ the chance of improving is the same number $\pi$ in both groups, but $\pi$ is unknown, and the
probability of any table depends on it. Fisher's trick is to look only at tables with the same margins as the one
observed. Given the margins, a two-by-two table is determined by one number, say the top-left count $A$.

**Theorem.** Let $A \sim \text{Binomial}(n_1, \pi)$ and $C \sim \text{Binomial}(n_2, \pi)$ be independent (the
numbers improving in the two groups, under $H_0$). Given that $A + C = m$, the law of $A$ is **hypergeometric** and
does not depend on $\pi$:

$$
P(A = a \mid A + C = m) = \frac{\binom{n_1}{a}\binom{n_2}{m - a}}{\binom{n_1 + n_2}{m}} .
$$

*Proof.* By the definition of conditional probability and independence,

$$
P(A = a \mid A + C = m) = \frac{P(A = a)\,P(C = m - a)}{P(A + C = m)}
= \frac{\binom{n_1}{a}\pi^a(1-\pi)^{n_1 - a}\,\binom{n_2}{m-a}\pi^{m-a}(1-\pi)^{n_2 - m + a}}{P(A + C = m)} .
$$

The numerator is $\binom{n_1}{a}\binom{n_2}{m-a}\,\pi^m(1-\pi)^{n_1 + n_2 - m}$. Under $H_0$, $A + C$ is the number
of successes in $n_1 + n_2$ independent trials with the same $\pi$, so it is
$\text{Binomial}(n_1 + n_2, \pi)$ and the denominator is $\binom{n_1+n_2}{m}\pi^m(1-\pi)^{n_1+n_2-m}$. The powers of
$\pi$ and $1 - \pi$ cancel, leaving the hypergeometric formula. $\square$

The unknown $\pi$ is a **nuisance parameter**: it affects the data but is not what we are asking about. Conditioning
on the total number of successes, which carries the information about $\pi$, removes it. (In the language of
[Chapter 13](13-Likelihood-Theory.md), the total is a sufficient statistic for $\pi$ under $H_0$.)

The hypergeometric law has a simple story: there are 23 patients, of whom 12 improved; if the treatment made no
difference, which 12 improved has nothing to do with which 12 received the new treatment, so the number of
"improvers" among the new-treatment patients is like drawing 12 balls without replacement from an urn of 12 red
and 11 white.

**Example 3.** Here $n_1 = 12$, $n_2 = 11$, $m = 12$, and the observed $a = 9$. The possible values of $a$ run from
1 to 12, and the probabilities $\binom{12}{a}\binom{11}{12-a}/\binom{23}{12}$ are (with $\binom{23}{12} = 1\,352\,078$):

| $a$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| probability | 0.00001 | 0.0005 | 0.0089 | 0.0604 | 0.1933 | 0.3157 | 0.2706 | 0.1208 | 0.0268 | 0.0027 | 0.0001 | 0.0000007 |

*One-sided p-value* (the new treatment is better): $P(A \ge 9) = 0.0268 + 0.0027 + 0.0001 + 0.0000007 \approx 0.0296$.

*Two-sided p-value:* the usual rule adds the probabilities of all tables *no more likely* than the observed one
(probability at most 0.0268). These are $a = 9, 10, 11, 12$ and $a = 1, 2, 3$, giving about $0.0391$.

So the exact test gives $p \approx 0.039$, between the uncorrected and corrected chi-square answers. With 23
patients, there is moderate evidence that the new treatment helps. Check: the probabilities in the table sum to 1
(up to rounding), as they must.

### The lady tasting tea again

The most famous use of this test is Fisher's lady tasting tea, set out in his 1935 book *The Design of Experiments*
and described in [Chapter 5](05-Sampling-and-Experiments.md): 8 cups, 4 with milk poured first, and the lady told to
pick the 4. That is a two-by-two table with all margins equal to 4, and the chance of picking all 4 correctly by
guessing is $1/\binom84 = 1/70$. Fisher's exact test is exactly that calculation, generalised. The method was
published at about the same time by Fisher, by Frank Yates and by Joseph Irwin, which is why it is sometimes called
the Fisher-Irwin test.

### A note on conservativeness

*Level: advanced.* Because the hypergeometric law is discrete, the exact test can only achieve certain p-values,
and its real type I error rate is at or below the nominal $\alpha$, often well below. Some statisticians (George
Barnard was the first, in 1945) argued that one should not condition on both margins when the design fixed only
one of them, and proposed **unconditional** exact tests that are more powerful. Fisher disagreed. Both kinds are
valid tests; Fisher's is by far the most used, and its conditioning argument reappears in permutation tests in
[Chapter 15](15-Nonparametric-Methods.md).

## 10.4 Odds ratios and relative risk

### Three ways to compare two proportions

A test tells us whether two groups differ. A report must also say *by how much*. For a two-by-two table there are
three standard measures. Take a cohort study (made-up data): 1000 workers exposed to a solvent and 1000 unexposed
workers are followed for five years, and the number who develop a skin condition is recorded.

| | condition | no condition | total |
|---|---|---|---|
| exposed | 30 | 970 | 1000 |
| unexposed | 10 | 990 | 1000 |

The **risk** in a group is the proportion with the outcome: $p_1 = 30/1000 = 0.03$ for the exposed and
$p_2 = 10/1000 = 0.01$ for the unexposed.

1. The **risk difference** is $p_1 - p_2 = 0.02$. Exposure adds 2 cases per 100 workers over five years. Its
   reciprocal, $1/0.02 = 50$, is the **number needed to harm**: for every 50 workers exposed, one extra case. (For a
   beneficial treatment the same idea is the **number needed to treat**.)
2. The **relative risk** (or risk ratio) is $\text{RR} = p_1/p_2 = 3$. Exposed workers are three times as likely to
   develop the condition.
3. The **odds ratio**. The **odds** of an event with probability $p$ are $p/(1-p)$: the chance it happens divided by
   the chance it does not (a probability of 0.2 is odds of 1 to 4, or 0.25). The odds ratio compares the odds in
   the two groups:

$$
\text{OR} = \frac{p_1/(1-p_1)}{p_2/(1-p_2)} = \frac{a/b}{c/d} = \frac{ad}{bc} .
$$

Here $\text{OR} = \frac{30 \times 990}{970 \times 10} \approx 3.06$.

Each measure tells a different story, and honest reporting gives at least one absolute measure (the risk
difference) alongside a relative one. "Triples the risk" sounds alarming; "from 1 in 100 to 3 in 100" is the same
fact with its scale attached. The same relative risk of 3 could mean going from 1 in a million to 3 in a million.

The chi-square test from 10.2 (the formula with $ad - bc$) gives $X^2 \approx 10.2$ with 1 degree of freedom,
$p \approx 0.0014$: the difference is very unlikely to be chance.

### When the odds ratio is close to the relative risk

From the definitions,

$$
\text{OR} = \frac{p_1}{p_2}\cdot\frac{1 - p_2}{1 - p_1} = \text{RR} \cdot \frac{1 - p_2}{1 - p_1}.
$$

When the outcome is rare in both groups, both $1 - p_1$ and $1 - p_2$ are close to 1, so $\text{OR} \approx
\text{RR}$. In the solvent example, $3 \times 0.99/0.97 \approx 3.06$. But when the outcome is common, they part
company: with $p_1 = 0.4$ and $p_2 = 0.2$ the relative risk is 2 while the odds ratio is
$\frac{0.4/0.6}{0.2/0.8} \approx 2.67$. An odds ratio is always further from 1 than the relative risk (when
$p_1 > p_2$, the factor $(1-p_2)/(1-p_1)$ is above 1), and reading an odds ratio as if it were a relative risk
exaggerates the effect of common outcomes. This is a frequent error in news reports of medical studies.

### Why the odds ratio exists: case-control studies

If the odds ratio is harder to interpret, why use it? Because of the **case-control study**, the main design for
studying rare diseases. Following 100 000 people for decades to see who develops a rare cancer is slow and costly.
Instead, find people who already have the disease (the **cases**) and a comparable group who do not (the
**controls**), and look back at how many in each group were exposed.

Suppose (made-up data) 100 cases and 200 controls are asked about a past exposure:

| | exposed | unexposed | total |
|---|---|---|---|
| cases | 40 | 60 | 100 |
| controls | 40 | 160 | 200 |

Can we compute the risk of disease among the exposed? No: $40/80$ would say "half of the exposed get the disease",
but that proportion was fixed by our decision to recruit twice as many controls as cases. With 400 controls it
would be about one third. **Risks, and hence the relative risk, cannot be estimated from a case-control study.**
But the odds ratio can.

**Theorem (Cornfield, 1951).** Let $D$ be the event of having the disease and $E$ the event of being exposed. The
odds ratio of exposure comparing cases with controls equals the odds ratio of disease comparing exposed with
unexposed:

$$
\frac{P(E \mid D)/P(\bar E \mid D)}{P(E \mid \bar D)/P(\bar E \mid \bar D)}
= \frac{P(D \mid E)/P(\bar D \mid E)}{P(D \mid \bar E)/P(\bar D \mid \bar E)} ,
$$

where the bar means "not".

*Proof.* Write every conditional probability as a joint probability divided by a marginal one, for example
$P(E \mid D) = P(E \cap D)/P(D)$. In the left side, the factors $P(D)$ and $P(\bar D)$ cancel inside each odds, and
it becomes

$$
\frac{P(E \cap D)\;P(\bar E \cap \bar D)}{P(\bar E \cap D)\;P(E \cap \bar D)} .
$$

The right side, the same way, with $P(E)$ and $P(\bar E)$ cancelling, becomes the same expression. $\square$

The left side involves only the exposure distribution *within* cases and *within* controls, and that is exactly what
a case-control study samples correctly, whatever the ratio of cases to controls. So the sample odds ratio from a
case-control study estimates the population odds ratio of disease. If the disease is rare, that in turn is close to
the relative risk. For the table above, $\text{OR} = \frac{40 \times 160}{40 \times 60} \approx 2.67$: exposure is
associated with about 2.7 times the odds of disease, and if the disease is rare, roughly 2.7 times the risk.

Jerome Cornfield showed this in 1951, and it made the case-control study a sound design. Richard Doll and Austin
Bradford Hill's case-control study of smoking and lung cancer, published in 1950, and their later cohort study of
British doctors, were landmark uses of these designs.

### A confidence interval for the odds ratio

*Level: advanced.* The sampling distribution of an odds ratio is skewed (it cannot go below 0 but can be huge), but
its logarithm is close to normal. Barnet Woolf (1955) gave the standard error

$$
\operatorname{SE}(\log \widehat{\text{OR}}) \approx \sqrt{\frac1a + \frac1b + \frac1c + \frac1d} .
$$

*Where it comes from.* $\log\widehat{\text{OR}} = \log a - \log b - \log c + \log d$. For a count $Y$ with mean $\mu$
and variance about $\mu$ (Poisson-like), a first-order Taylor expansion (the **delta method**) gives
$\log Y \approx \log\mu + (Y - \mu)/\mu$, so $\operatorname{Var}(\log Y) \approx \mu/\mu^2 = 1/\mu$. Treating the four
counts as roughly independent adds the four variances, and estimating each $\mu$ by the observed count gives the
formula. (A more careful argument with two binomial rows gives the same answer to first order.)

A 95 percent interval is $\exp\big(\log\widehat{\text{OR}} \pm 1.96\,\text{SE}\big)$.

**Example 4.** For the solvent cohort, $\log 3.062 \approx 1.119$ and
$\text{SE} = \sqrt{\frac1{30} + \frac1{970} + \frac1{10} + \frac1{990}} \approx 0.368$. The interval is
$\exp(1.119 \pm 0.721)$, that is, from about 1.49 to 6.30. For the case-control table,
$\text{SE} = \sqrt{\frac1{40} + \frac1{40} + \frac1{60} + \frac1{160}} \approx 0.271$, and the interval for the odds
ratio is about 1.57 to 4.53. Check: neither interval contains 1, matching the significant tests.

Note how wide these intervals are, even with 2000 workers: the information about a rare outcome comes mostly from
the small cells ($c = 10$ contributes $\frac1{10}$, by far the largest term). **The precision of a study of a rare
event is set by the number of events, not the number of people.**

The relative risk has a similar interval on the log scale, with
$\operatorname{SE}(\log\widehat{\text{RR}}) \approx \sqrt{\frac1a - \frac1{a+b} + \frac1c - \frac1{c+d}}$; for the
solvent data it gives about 1.47 to 6.10.

### Beyond two-by-two

Categorical data analysis goes much further: tables with three variables (where Simpson's paradox,
[Chapter 4](04-Relationships-and-Correlation.md), lives, and where the Mantel-Haenszel method combines odds ratios
across strata), and **logistic regression**, which models the log odds of an outcome as a linear function of
predictors, so that each coefficient is a log odds ratio. Logistic regression appears in
[Chapter 19](19-Statistical-Learning.md); the linear models it generalises are the subject of the next two
chapters.

## Check yourself

??? question "1. Recompute the die example's statistic from the table in 10.1 and say how many degrees of freedom it has. Would 'face 4 came up 25 times' alone be evidence of bias?"

    Gaps from 20: $-6, 2, -3, 5, -2, 4$. Squares: 36, 4, 9, 25, 4, 16, sum 94. Divided by 20: $X^2 = 4.7$ on
    $6 - 1 = 5$ degrees of freedom, $p \approx 0.45$. No: one face's count of 25 has binomial standard deviation
    $\sqrt{120 \cdot \frac16 \cdot \frac56} \approx 4.1$, so 25 is only about 1.2 standard deviations above 20. And
    picking the most extreme face after seeing the data is a multiple testing trap (Chapter 9).

??? question "2. Mendel also reported 5474 round and 1850 wrinkled seeds in another experiment. Test the 3:1 ratio."

    $n = 7324$; expected $5493$ and $1831$. $X^2 = \frac{19^2}{5493} + \frac{19^2}{1831} \approx 0.066 + 0.197 = 0.263$
    on 1 degree of freedom; $p \approx 0.61$. An excellent fit. (Equivalently $z = -19/\sqrt{7324 \cdot \frac34 \cdot
    \frac14} \approx -0.51$, and $z^2 \approx 0.26$.)

??? question "3. How many degrees of freedom does a test of independence on a 4-by-3 table have? Explain by filling in cells."

    $(4-1)(3-1) = 6$. With the margins fixed, the top-left 3-by-2 block (6 cells) can be filled freely; then each of
    the first 3 rows' last cell is forced by its row total, and the whole last row is forced by the column totals.

??? question "4. In the news survey of 10.2, compute the expected count for '40 and over, TV' and check that the expected table has the same margins as the observed one."

    $110 \times 70/200 = 38.5$. Row sums of the expected table: $40.5 + 31.5 + 18 = 90$ and $49.5 + 38.5 + 22 = 110$;
    column sums: $40.5 + 49.5 = 90$, $31.5 + 38.5 = 70$, $18 + 22 = 40$. All match.

??? question "5. Use the two-by-two formula to compute $X^2$ for the solvent cohort ($a = 30$, $b = 970$, $c = 10$, $d = 990$)."

    $ad - bc = 29\,700 - 9\,700 = 20\,000$. Margins: $1000, 1000, 40, 1960$. So
    $X^2 = \frac{2000 \times 20\,000^2}{1000 \times 1000 \times 40 \times 1960} = \frac{8 \times 10^{11}}{7.84 \times 10^{10}}
    \approx 10.20$, with 1 degree of freedom, $p \approx 0.0014$.

??? question "6. A made-up trial: 12 of 200 patients on a new dressing get an infection, against 24 of 200 on the old one. Compute the risk difference, number needed to treat, relative risk and odds ratio."

    Risks 0.06 and 0.12. Risk difference $0.12 - 0.06 = 0.06$ in favour of the new dressing; number needed to treat
    $1/0.06 \approx 16.7$, so about 17 patients treated with the new dressing to prevent one infection. Relative risk
    $0.06/0.12 = 0.5$ (the risk is halved). Odds ratio $\frac{12 \times 176}{188 \times 24} \approx 0.468$, a little
    further from 1 than the relative risk, as always.

??? question "7. In a case-control study, why can you not report 'the risk of disease among the exposed'? What can you report, and when is it close to a relative risk?"

    The proportion of cases in the study was chosen by the investigator (for example 1 case per 2 controls), so any
    proportion of diseased people in a row of the table reflects that choice, not the population. The odds ratio can
    be reported, because by Cornfield's theorem the exposure odds ratio (which the design samples correctly) equals
    the disease odds ratio. It approximates the relative risk when the disease is rare in both groups.

??? question "8. Three cups of tea have milk first and three have tea first; a taster must pick the three with milk first. What is the chance of a perfect score by guessing? Could such an experiment ever give $p < 0.01$?"

    There are $\binom63 = 20$ equally likely choices, one of them perfect: $p = \frac1{20} = 0.05$. That is the
    smallest p-value the design can produce, so it can never reach $p < 0.01$. This is why Fisher used 8 cups,
    where a perfect score has $p = \frac1{70} \approx 0.014$.

??? question "9. Verify the exact one-sided p-value 0.0296 of Example 3 by computing $P(A = 9)$ and $P(A = 10)$ from the hypergeometric formula."

    $\binom{23}{12} = 1\,352\,078$. $P(A = 9) = \binom{12}{9}\binom{11}{3}/\binom{23}{12} = 220 \times 165/1\,352\,078 =
    36\,300/1\,352\,078 \approx 0.02685$. $P(A = 10) = \binom{12}{10}\binom{11}{2}/\binom{23}{12} = 66 \times 55/1\,352\,078
    \approx 0.00268$. $P(A = 11) = 12 \times 11/1\,352\,078 \approx 0.0000976$ and $P(A = 12) = 1/1\,352\,078$. Sum:
    $\approx 0.02963$.

??? question "10. (Fitting a Poisson.) On 100 days (made-up data) a help desk gets 0, 1, 2, 3 and 4 calls on 14, 30, 28, 18 and 10 days. Fit a Poisson law and test the fit. How many degrees of freedom?"

    The mean is $(0 \cdot 14 + 1 \cdot 30 + 2 \cdot 28 + 3 \cdot 18 + 4 \cdot 10)/100 = 1.8$, so $\hat\lambda = 1.8$.
    Expected counts for 0, 1, 2, 3 and "4 or more": $100e^{-1.8} \approx 16.53$, then $29.75$, $26.78$, $16.07$, and
    the remainder $10.87$. The terms are about $0.387, 0.002, 0.056, 0.233, 0.070$, so $X^2 \approx 0.75$. Degrees of
    freedom: 5 cells, minus 1, minus 1 estimated parameter $= 3$. $p \approx 0.86$: the Poisson law fits well.

??? question "11. (Harder.) Show that for a two-by-two table, $X^2$ equals $z^2$, where $z = (\hat p_1 - \hat p_2)/\sqrt{\hat p(1 - \hat p)(1/n_1 + 1/n_2)}$ is the pooled two-proportion statistic, with $\hat p_1 = a/n_1$, $\hat p_2 = c/n_2$, $n_1 = a + b$, $n_2 = c + d$, $\hat p = (a + c)/N$."

    $\hat p_1 - \hat p_2 = \frac{a n_2 - c n_1}{n_1 n_2} = \frac{a(c + d) - c(a + b)}{n_1n_2} = \frac{ad - bc}{n_1n_2}$.
    Also $\hat p(1 - \hat p) = \frac{(a+c)(b+d)}{N^2}$ and $\frac1{n_1} + \frac1{n_2} = \frac{N}{n_1n_2}$. So
    $z^2 = \frac{(ad - bc)^2}{n_1^2n_2^2}\cdot\frac{N^2 n_1 n_2}{(a+c)(b+d)N} = \frac{N(ad-bc)^2}{n_1n_2(a+c)(b+d)}$,
    which is the formula for $X^2$. Check with the solvent data: $z \approx 3.194$ and $z^2 \approx 10.20$.

??? question "12. (Harder.) Show that if $p_1 > p_2$ then $\text{OR} > \text{RR} > 1$, and find OR when $p_1 = 0.5$, $p_2 = 0.25$."

    $\text{RR} = p_1/p_2 > 1$. $\text{OR} = \text{RR}\cdot\frac{1 - p_2}{1 - p_1}$, and $1 - p_2 > 1 - p_1 > 0$, so the
    factor is above 1 and $\text{OR} > \text{RR}$. With $p_1 = 0.5$, $p_2 = 0.25$: $\text{RR} = 2$ and
    $\text{OR} = 2 \times 0.75/0.5 = 3$.

## What you learned

- Pearson's statistic $X^2 = \sum (O - E)^2/E$ is approximately chi-squared, with degrees of freedom equal to free
  cells minus estimated parameters; for two categories it is exactly $z^2$, and in general it is the squared length
  of a nearly normal vector living in $k - 1$ dimensions.
- Goodness of fit compares counts with a theory: Mendel's 315, 108, 101, 32 fit 9:3:3:1 with $X^2 = 0.47$; Fisher
  argued that Mendel's data as a whole fit too well, a claim still debated, with no proof of fraud.
- For independence in an $r \times c$ table, $E_{ij} = R_iC_j/N$ and the degrees of freedom are $(r-1)(c-1)$; the
  same test serves for homogeneity.
- Fisher's exact test conditions on the margins, which removes the unknown common rate and leaves a hypergeometric
  law; it is the right tool for small tables.
- Risk difference, relative risk and odds ratio measure effect size; $\text{OR} = \text{RR}(1-p_2)/(1-p_1)$, close
  to RR only for rare outcomes.
- Case-control studies can estimate the odds ratio but not risks (Cornfield's theorem), and the log odds ratio has
  standard error about $\sqrt{1/a + 1/b + 1/c + 1/d}$.

**Next:** [Chapter 11](11-Linear-Regression.md), fitting a straight line to data with uncertainty attached: the
linear model, inference on slopes, residuals, and Galton's regression to the mean.

## Further reading

- K. Pearson, "On the criterion that a given system of deviations from the probable in the case of a correlated
  system of variables is such that it can be reasonably supposed to have arisen from random sampling",
  *Philosophical Magazine* 50, 1900.
- R. A. Fisher, "Has Mendel's work been rediscovered?", *Annals of Science* 1, 1936.
- A. Franklin, A. W. F. Edwards, D. J. Fairbanks, D. L. Hartl and T. Seidenfeld, *Ending the Mendel-Fisher
  Controversy*, 2008.
- R. A. Fisher, *The Design of Experiments*, 1935.
- J. Cornfield, "A method of estimating comparative rates from clinical data", *Journal of the National Cancer
  Institute* 11, 1951.
- B. Woolf, "On estimating the relation between blood group and disease", *Annals of Human Genetics* 19, 1955.
- W. G. Cochran, "Some methods for strengthening the common χ² tests", *Biometrics* 10, 1954.
- A. Agresti, *Categorical Data Analysis*, 3rd ed., 2013 (the standard reference; chapters 1 to 3 cover this
  chapter at full depth).
- A. Agresti, *An Introduction to Categorical Data Analysis*, 3rd ed., 2019 (gentler).
- G. Casella and R. L. Berger, *Statistical Inference*, 2nd ed., 2002 (the chi-square approximation and the
  delta method).
- On this site: the Topics lessons on [Simpson's paradox](../../topics/statistics/level-8/05-simpsons-paradox.md)
  and [statistics in the news](../../topics/statistics/level-8/06-statistics-news.md); the Probability book on
  [discrete random variables](../probability/05-Discrete-Random-Variables.md) (binomial and hypergeometric laws)
  and [Bayes' theorem](../probability/04-Bayes-Theorem.md); this book's [index](index.md).
