# 18. High-dimensional statistics

*Classical statistics was built for a few variables measured on many units: height and weight of a thousand people.
Modern data are often the other way round: the activity of 20,000 genes in 100 tumours, the pixels of an image, the
words of a document. When there are more variables than observations, least squares breaks, "significant" results
appear by the thousand from pure noise, and our geometric intuition from two and three dimensions fails. This chapter
shows exactly how each thing breaks and what statisticians do about it: shrink the estimates (ridge regression,
derived in full), select a few variables (the lasso, with its geometry and the soft-threshold formula), find the
directions that carry the most variation (principal components, derived from the eigenvectors of the covariance
matrix), and control the share of false discoveries (Benjamini and Hochberg's procedure, with its proof).*

!!! abstract "In this chapter"
    **You will learn:**

    - why least squares has no unique answer when there are more variables $p$ than observations $n$ (proof)
    - ridge regression: its formula, why it always exists, why some shrinkage always beats least squares in the simplest case (proof), and its Bayesian reading
    - the lasso: soft thresholding (derivation), and why its diamond-shaped constraint sets coefficients exactly to zero
    - principal component analysis as variance maximisation, with the eigenvector facts it needs explained and proved
    - the curse of dimensionality in numbers: empty space, far corners, and distances that all look alike
    - the false discovery rate, the Benjamini-Hochberg procedure and a proof that it controls the rate, and what genomics learned the hard way

    **You need:** [Chapter 12](12-Multiple-Regression.md) (the matrix form of regression and the normal equations),
    [Chapter 9](09-Hypothesis-Tests.md) (p-values, multiple testing), [Chapter 7](07-Estimation.md) (bias, variance and
    mean squared error) and [Chapter 14](14-Bayesian-Statistics.md) for the Bayesian remark. The few facts of linear
    algebra used (rank, inverse, eigenvectors of symmetric matrices) are explained where they appear; for more, see
    the [MAT240 unit on eigenvalues](../../uoft/MAT240H1/unit10.md) and the
    [MAT247 unit on the spectral theorem](../../uoft/MAT247H1/unit06.md).

    **Levels:** 18.1 and 18.4 are advanced; 18.2, 18.3 and 18.5 are expert, with proofs at advanced level.

## 18.1 Many variables, few observations

*Level: advanced.*

### The problem

In [Chapter 12](12-Multiple-Regression.md) we wrote the regression model as $y = X\beta + \varepsilon$: $y$ is the
column of $n$ responses, $X$ is the $n \times p$ **design matrix** whose rows are the units and whose columns are the
predictors, $\beta$ is the column of $p$ unknown coefficients and $\varepsilon$ is noise. Least squares chooses
$\beta$ to minimise the residual sum of squares $\lVert y - X\beta \rVert^2$ (the double bars mean the length of a
vector, so $\lVert v \rVert^2 = v_1^2 + \dots + v_n^2$), and the minimiser solves the **normal equations**

$$
X^{\top}X\,\hat\beta = X^{\top}y .
$$

If the $p \times p$ matrix $X^{\top}X$ has an inverse, $\hat\beta = (X^{\top}X)^{-1}X^{\top}y$ is the unique answer.

Now picture a study of 100 patients with 20,000 gene measurements each: $n = 100$, $p = 20{,}000$. Or a hospital
with 300 patients and 1,000 recorded features. Then $X^{\top}X$ never has an inverse.

**Proposition.** If $p > n$, then $X^{\top}X$ is singular (has no inverse), and the normal equations have infinitely
many solutions.

*Proof.* The **rank** of a matrix is the largest number of its columns that are linearly independent (none is a
combination of the others); it is at most the number of rows and at most the number of columns. So
$\operatorname{rank}(X) \le n < p$. Then the $p$ columns of $X$ are linearly dependent: there is a nonzero vector $v$
with $Xv = 0$. It follows that $X^{\top}Xv = 0$, so $X^{\top}X$ sends a nonzero vector to zero and cannot be
invertible. And if $\hat\beta$ solves the normal equations, so does $\hat\beta + tv$ for every number $t$, since
$X^{\top}X(\hat\beta + tv) = X^{\top}X\hat\beta$. $\square$

It is worse than non-uniqueness. If the rows of $X$ are linearly independent (which is typical when $p \ge n$), we
can solve $X\beta = y$ *exactly*: the fit has zero residuals whatever $y$ is, even pure noise. A perfect fit that
would have been achieved for any data whatever tells us nothing. Classical estimates of $\sigma^2$, standard errors
and $R^2$ all collapse.

The same trouble appears in milder form well before $p > n$. When predictors are strongly correlated
(**collinearity**, [Chapter 12](12-Multiple-Regression.md)), $X^{\top}X$ is invertible but nearly singular, and
$\hat\beta$ swings wildly with small changes in the data.

**Worked example 1 (made-up data).** Five observations of two nearly identical predictors:

| $x_1$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
|---|---|---|---|---|---|
| $x_2$ | $-1.9$ | $-1.1$ | $0.1$ | $0.9$ | $2.0$ |
| $y$ | $-4.1$ | $-1.9$ | $0.1$ | $2.0$ | $3.9$ |

All three columns have mean zero, so we fit without an intercept. Then

$$
X^{\top}X = \begin{pmatrix} 10 & 9.8 \\ 9.8 & 9.64 \end{pmatrix}, \qquad X^{\top}y = \begin{pmatrix} 19.9 \\ 19.49 \end{pmatrix},
$$

and $\det(X^{\top}X) = 96.4 - 96.04 = 0.36$, tiny compared with the entries. Least squares gives
$\hat\beta \approx (2.317, -0.333)$. The response obviously rises with both predictors, yet $x_2$ gets a negative
coefficient, because the data cannot tell the two predictors apart and the fit exploits tiny differences between
them. The eigenvalues of $X^{\top}X$ (defined in 18.3) are about $19.6$ and $0.018$; in the direction of the small
one, the variance of $\hat\beta$ is multiplied by about $1 / 0.018 \approx 55$.

Three strategies cope with high dimensions: **shrink** (pull estimates towards zero to tame their variance),
**select** (assume only a few variables matter and find them), and **reduce** (replace many variables by a few
combinations). The next two sections take them in turn.

## 18.2 Ridge regression and the lasso

*Level: expert (derivations at advanced level).*

### Ridge regression

Arthur Hoerl and Robert Kennard (1970) proposed adding a penalty on the size of the coefficients. **Ridge
regression** minimises

$$
\lVert y - X\beta \rVert^2 + \lambda \lVert \beta \rVert^2 ,
$$

where $\lambda \ge 0$ is a **tuning parameter** chosen by the analyst. With $\lambda = 0$ it is least squares; as
$\lambda$ grows, large coefficients cost more, and the estimate is pulled towards zero. (Predictors are usually
standardised first, so that the penalty treats them alike, and the intercept is not penalised; here all columns are
centred and we drop it.)

**Theorem.** For every $\lambda > 0$ the ridge estimate exists, is unique, and equals

$$
\hat\beta_{\text{ridge}} = (X^{\top}X + \lambda I)^{-1}X^{\top}y ,
$$

where $I$ is the $p \times p$ identity matrix. This holds even when $p > n$.

*Proof.* Expand the objective:
$f(\beta) = y^{\top}y - 2\beta^{\top}X^{\top}y + \beta^{\top}(X^{\top}X + \lambda I)\beta$. Write
$A = X^{\top}X + \lambda I$. For any nonzero vector $v$,

$$
v^{\top}Av = v^{\top}X^{\top}Xv + \lambda v^{\top}v = \lVert Xv \rVert^2 + \lambda \lVert v \rVert^2 > 0 ,
$$

since the second term is positive. A matrix with this property is called **positive definite**, and such a matrix is
invertible (if $Av = 0$ then $v^{\top}Av = 0$, forcing $v = 0$). Let $\beta^* = A^{-1}X^{\top}y$. Completing the
square,

$$
f(\beta) = (\beta - \beta^*)^{\top}A(\beta - \beta^*) + y^{\top}y - \beta^{*\top}A\beta^* ,
$$

as you can check by expanding and using $A\beta^* = X^{\top}y$ and $A^{\top} = A$. The first term is positive unless
$\beta = \beta^*$, so $\beta^*$ is the unique minimiser. $\square$

**Worked example 1, continued.** Adding $\lambda = 1$ to the diagonal of $X^{\top}X$ gives
$\hat\beta_{\text{ridge}} \approx (0.987, 0.922)$: the two near-twins now share the effect almost equally, which is
the sensible answer. With $\lambda = 10$ both shrink further, to about $(0.673, 0.656)$. The residual sum of squares
rises from $0.035$ (least squares) to $0.189$ and $4.60$: ridge gives up some fit for stability.

### Why shrinking helps: a proof in the simplest case

Shrinking introduces bias, so why should it help? Take the cleanest case: the columns of $X$ are **orthonormal**
(each has length 1 and they are perpendicular), so $X^{\top}X = I$. Then least squares is $\hat\beta = X^{\top}y$,
each coordinate $\hat\beta_j$ is normal with mean $\beta_j$ and variance $\sigma^2$, and ridge is simply

$$
\hat\beta_{\text{ridge}, j} = \frac{\hat\beta_j}{1 + \lambda} .
$$

**Proposition.** In the orthonormal case, the mean squared error of the ridge coordinate is

$$
\operatorname{MSE}(\lambda) = \frac{\sigma^2 + \lambda^2\beta_j^2}{(1 + \lambda)^2} ,
$$

which is smallest at $\lambda = \sigma^2 / \beta_j^2$, and is strictly smaller than the least squares value $\sigma^2$
for all small enough $\lambda > 0$.

*Proof.* By the decomposition of [Chapter 7](07-Estimation.md), MSE is variance plus squared bias. The variance is
$\frac{\sigma^2}{(1 + \lambda)^2}$; the mean is $\frac{\beta_j}{1 + \lambda}$, so the bias is
$\frac{\beta_j}{1 + \lambda} - \beta_j = -\frac{\lambda\beta_j}{1 + \lambda}$. Adding gives the formula. Its
derivative is

$$
\operatorname{MSE}'(\lambda) = \frac{2\lambda\beta_j^2(1 + \lambda) - 2(\sigma^2 + \lambda^2\beta_j^2)}{(1 + \lambda)^3} = \frac{2(\lambda\beta_j^2 - \sigma^2)}{(1 + \lambda)^3} ,
$$

which is negative for $\lambda < \sigma^2 / \beta_j^2$ and positive after. So MSE decreases from its value $\sigma^2$
at $\lambda = 0$ and is smallest at $\lambda = \sigma^2 / \beta_j^2$. $\square$

The moral, which Hoerl and Kennard proved in general (not only for orthonormal columns): **there is always some
amount of ridge shrinkage that beats least squares in mean squared error.** The catch is that the best $\lambda$
depends on the unknown $\beta$. In practice $\lambda$ is chosen by cross-validation
([Chapter 12](12-Multiple-Regression.md)): try a grid of values, and keep the one whose predictions on held-out data
are best. A related and older surprise is **Stein's paradox** (Charles Stein, 1956; James and Stein, 1961): when
estimating three or more normal means at once, shrinking all of them towards a common point beats using each sample
mean on its own, whatever the true means are.

**The Bayesian reading.** Suppose $y \mid \beta \sim N(X\beta, \sigma^2 I)$ and the prior is
$\beta \sim N(0, \tau^2 I)$: each coefficient is believed to be near zero. Up to constants, minus the log posterior is

$$
\frac{1}{2\sigma^2}\lVert y - X\beta \rVert^2 + \frac{1}{2\tau^2}\lVert \beta \rVert^2 ,
$$

and multiplying by $2\sigma^2$ gives the ridge objective with $\lambda = \sigma^2 / \tau^2$. So ridge regression is the
posterior mode (and, since the posterior is normal, also the posterior mean) under a normal prior. Shrinkage is what a
prior belief that effects are small looks like; compare the hierarchical models of
[Chapter 14](14-Bayesian-Statistics.md).

### The lasso

Ridge shrinks every coefficient but sets none exactly to zero, so with 20,000 genes it gives 20,000 nonzero
coefficients. Robert Tibshirani (1996) changed the penalty from squares to absolute values. The **lasso** ("least
absolute shrinkage and selection operator") minimises

$$
\tfrac12\lVert y - X\beta \rVert^2 + \lambda \lVert \beta \rVert_1, \qquad \lVert \beta \rVert_1 = |\beta_1| + \dots + |\beta_p| .
$$

(The factor $\frac12$ only rescales $\lambda$; it makes the formulas cleaner.)

**Theorem (soft thresholding).** If $X^{\top}X = I$ and $z = X^{\top}y$ (the least squares estimate), the lasso
solution is

$$
\hat\beta_j = S_\lambda(z_j) = \begin{cases} z_j - \lambda & \text{if } z_j > \lambda, \\ 0 & \text{if } |z_j| \le \lambda, \\ z_j + \lambda & \text{if } z_j < -\lambda. \end{cases}
$$

*Proof.* Expanding, $\frac12\lVert y - X\beta \rVert^2 = \frac12 y^{\top}y - \beta^{\top}z + \frac12\lVert \beta \rVert^2$
because $X^{\top}X = I$. So the objective is a constant plus $\sum_j g(\beta_j)$, where
$g(b) = \frac12 b^2 - z_j b + \lambda|b|$, and each coordinate can be minimised separately. For $b > 0$,
$g(b) = \frac12 b^2 - (z_j - \lambda)b$, a parabola with vertex at $z_j - \lambda$; if $z_j > \lambda$ the vertex is
positive, and $g$ there equals $-\frac12(z_j - \lambda)^2 < 0 = g(0)$. If $z_j \le \lambda$, $g$ is increasing on
$b > 0$, so no positive $b$ beats $b = 0$. The case $b < 0$ is the mirror image, with vertex $z_j + \lambda$.
At most one of the two vertices can be on its own side, so the cases fit together into the formula. $\square$

Compare ridge in the same setting, $\frac{z_j}{1 + \lambda}$, which scales; the lasso subtracts, and anything smaller
than $\lambda$ in size becomes exactly zero. For example, with $z = (3.0, -0.4, 1.2)$ and $\lambda = 1$, the lasso gives
$(2.0, 0, 0.2)$ and ridge gives $(1.5, -0.2, 0.6)$.

**Worked example 1, again.** With the near-twin predictors, the lasso with $\lambda = 1$ gives
$\hat\beta \approx (1.89, 0)$: it picks one of the twins and drops the other. (Check the optimality conditions:
at this point the correlation of each predictor with the residual,
$x_j^{\top}(y - X\hat\beta)$, must equal $\lambda$ for a nonzero coefficient and be at most $\lambda$ in size for a
zero one; here they are $19.9 - 18.9 = 1.0$ and $19.49 - 9.8 \times 1.89 \approx 0.97$.) Which twin it keeps can
flip with tiny changes in the data, a known weakness; the **elastic net** (Hui Zou and Trevor Hastie, 2005) mixes the
two penalties to keep groups of correlated predictors together.

### The geometry

An equivalent form of each method minimises $\lVert y - X\beta \rVert^2$ subject to a budget: $\lVert \beta \rVert^2 \le t$ for ridge, $\lVert \beta \rVert_1 \le t$ for the lasso (each $\lambda$ corresponds to some $t$). With two
coefficients, the contours of the residual sum of squares are ellipses centred at the least squares point, and the
solution is where the smallest ellipse first touches the budget region.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 560 235" role="img" aria-label="Left: the lasso budget is a diamond; the elliptical contours of the squared error first touch it at a corner on the horizontal axis, so the second coefficient is exactly zero. Right: the ridge budget is a disc; the contours touch it at a point where both coefficients are nonzero.">
  <g stroke="currentColor" stroke-width="1" fill="none">
    <line x1="20" y1="140" x2="285" y2="140"/>
    <line x1="100" y1="25" x2="100" y2="210"/>
    <line x1="300" y1="140" x2="550" y2="140"/>
    <line x1="380" y1="25" x2="380" y2="210"/>
  </g>
  <polygon points="160,140 100,80 40,140 100,200" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="380" cy="140" r="60" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <polyline fill="none" stroke="#eea66f" stroke-width="1.8" points="225.1,80.9 227.8,83.7 230.2,86.7 232.5,89.8 234.5,93.1 236.3,96.4 237.8,99.7 239.0,103.1 239.9,106.5 240.6,109.9 241.0,113.3 241.1,116.5 240.8,119.7 240.3,122.8 239.5,125.7 238.4,128.4 237.0,131.0 235.4,133.4 233.5,135.5 231.4,137.4 229.0,139.0 226.4,140.4 223.7,141.5 220.8,142.3 217.7,142.8 214.5,143.1 211.3,143.0 207.9,142.6 204.5,141.9 201.1,141.0 197.7,139.8 194.4,138.3 191.1,136.5 187.8,134.5 184.7,132.2 181.7,129.8 178.9,127.1 176.2,124.3 173.8,121.3 171.5,118.2 169.5,114.9 167.7,111.6 166.2,108.3 165.0,104.9 164.1,101.5 163.4,98.1 163.0,94.7 162.9,91.5 163.2,88.3 163.7,85.2 164.5,82.3 165.6,79.6 167.0,77.0 168.6,74.6 170.5,72.5 172.6,70.6 175.0,69.0 177.6,67.6 180.3,66.5 183.2,65.7 186.3,65.2 189.5,64.9 192.7,65.0 196.1,65.4 199.5,66.1 202.9,67.0 206.3,68.2 209.6,69.7 212.9,71.5 216.2,73.5 219.3,75.8 222.3,78.2 225.1,80.9"/>
  <polyline fill="none" stroke="#eea66f" stroke-width="1.8" points="241.1,64.9 245.6,69.7 249.7,74.8 253.5,80.0 256.9,85.5 259.9,91.1 262.4,96.8 264.5,102.5 266.1,108.3 267.3,114.0 267.9,119.7 268.0,125.2 267.6,130.6 266.8,135.7 265.4,140.7 263.5,145.3 261.2,149.6 258.4,153.6 255.2,157.2 251.6,160.4 247.6,163.2 243.3,165.5 238.7,167.4 233.7,168.8 228.6,169.6 223.2,170.0 217.7,169.9 212.0,169.3 206.3,168.1 200.5,166.5 194.8,164.4 189.1,161.9 183.5,158.9 178.0,155.5 172.8,151.7 167.7,147.6 162.9,143.1 158.4,138.3 154.3,133.2 150.5,128.0 147.1,122.5 144.1,116.9 141.6,111.2 139.5,105.5 137.9,99.7 136.7,94.0 136.1,88.3 136.0,82.8 136.4,77.4 137.2,72.3 138.6,67.3 140.5,62.7 142.8,58.4 145.6,54.4 148.8,50.8 152.4,47.6 156.4,44.8 160.7,42.5 165.3,40.6 170.3,39.2 175.4,38.4 180.8,38.0 186.3,38.1 192.0,38.7 197.7,39.9 203.5,41.5 209.2,43.6 214.9,46.1 220.5,49.1 226.0,52.5 231.2,56.3 236.3,60.4 241.1,64.9"/>
  <polyline fill="none" stroke="#eea66f" stroke-width="1.8" points="501.0,85.0 503.2,87.3 505.2,89.8 507.1,92.3 508.7,95.0 510.2,97.7 511.4,100.5 512.4,103.3 513.2,106.1 513.8,108.9 514.1,111.6 514.1,114.3 513.9,116.9 513.5,119.4 512.8,121.8 511.9,124.1 510.8,126.2 509.5,128.2 507.9,129.9 506.2,131.5 504.2,132.8 502.1,133.9 499.8,134.8 497.4,135.5 494.9,135.9 492.3,136.1 489.6,136.1 486.9,135.8 484.1,135.2 481.3,134.4 478.5,133.4 475.7,132.2 473.0,130.7 470.3,129.1 467.8,127.2 465.3,125.2 463.0,123.0 460.8,120.7 458.8,118.2 456.9,115.7 455.3,113.0 453.8,110.3 452.6,107.5 451.6,104.7 450.8,101.9 450.2,99.1 449.9,96.4 449.9,93.7 450.1,91.1 450.5,88.6 451.2,86.2 452.1,83.9 453.2,81.8 454.5,79.8 456.1,78.1 457.8,76.5 459.8,75.2 461.9,74.1 464.2,73.2 466.6,72.5 469.1,72.1 471.7,71.9 474.4,71.9 477.1,72.2 479.9,72.8 482.7,73.6 485.5,74.6 488.3,75.8 491.0,77.3 493.7,78.9 496.2,80.8 498.7,82.8 501.0,85.0"/>
  <polyline fill="none" stroke="#eea66f" stroke-width="1.8" points="514.1,71.9 517.8,75.8 521.2,80.0 524.4,84.3 527.2,88.8 529.6,93.4 531.7,98.1 533.4,102.8 534.8,107.5 535.7,112.2 536.2,116.9 536.3,121.4 536.0,125.9 535.3,130.1 534.1,134.2 532.6,138.0 530.7,141.5 528.4,144.8 525.8,147.8 522.8,150.4 519.5,152.7 516.0,154.6 512.2,156.1 508.1,157.3 503.9,158.0 499.4,158.3 494.9,158.2 490.2,157.7 485.5,156.8 480.8,155.4 476.1,153.7 471.4,151.6 466.8,149.2 462.3,146.4 458.0,143.2 453.8,139.8 449.9,136.1 446.2,132.2 442.8,128.0 439.6,123.7 436.8,119.2 434.4,114.6 432.3,109.9 430.6,105.2 429.2,100.5 428.3,95.8 427.8,91.1 427.7,86.6 428.0,82.1 428.7,77.9 429.9,73.8 431.4,70.0 433.3,66.5 435.6,63.2 438.2,60.2 441.2,57.6 444.5,55.3 448.0,53.4 451.8,51.9 455.9,50.7 460.1,50.0 464.6,49.7 469.1,49.8 473.8,50.3 478.5,51.2 483.2,52.6 487.9,54.3 492.6,56.4 497.2,58.8 501.7,61.6 506.0,64.8 510.2,68.2 514.1,71.9"/>
  <circle cx="202" cy="104" r="3.5" fill="currentColor"/>
  <circle cx="482" cy="104" r="3.5" fill="currentColor"/>
  <circle cx="160" cy="140" r="5" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="434.1" cy="114.1" r="5" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <g fill="currentColor" font-size="12">
    <text x="202" y="95" text-anchor="middle">least squares</text>
    <text x="482" y="95" text-anchor="middle">least squares</text>
    <text x="275" y="155">β₁</text><text x="106" y="32">β₂</text>
    <text x="540" y="155">β₁</text><text x="386" y="32">β₂</text>
    <text x="100" y="228" text-anchor="middle">lasso: |β₁| + |β₂| ≤ t</text>
    <text x="380" y="228" text-anchor="middle">ridge: β₁² + β₂² ≤ t</text>
  </g>
</svg>
</div>

The diamond has corners on the axes, and an ellipse coming from a generic direction is likely to touch a corner first,
where one coefficient is exactly zero. The disc has no corners, so the touching point generally has both coefficients
nonzero. In $p$ dimensions the $\ell_1$ ball (the set where $\lVert \beta \rVert_1 \le t$) has corners and edges of
every dimension, all lying on coordinate subspaces, which is why the lasso returns **sparse** answers: most
coefficients exactly zero.

### What is known about the lasso

The lasso has no closed form in general, but it is a convex problem and is solved quickly by **coordinate descent**:
cycle through the coordinates, applying the soft-threshold formula to each in turn with the others held fixed (that
is how the numbers above were computed). Its theory is a large subject. Roughly stated, if only $s$ of the $p$ true
coefficients are nonzero and the predictors are not too correlated (precise "restricted eigenvalue" or
"compatibility" conditions), then with $\lambda$ of order $\sigma\sqrt{n \log p}$ the lasso's prediction error is of
order $\frac{\sigma^2 s \log p}{n}$: you pay only logarithmically for the number of variables you searched. The proofs
are in Bühlmann and van de Geer (2011). Closely related work by Emmanuel Candès, Justin Romberg and Terence Tao, and by
David Donoho (both 2006), on **compressed sensing** showed that sparse signals can be recovered exactly from far fewer
measurements than unknowns, using the same $\ell_1$ idea.

One caution is essential. After the lasso chooses variables, the usual p-values and confidence intervals for the chosen
coefficients are invalid, because the same data chose and tested them. **Post-selection inference**, which corrects
for this, is an active research area ([Chapter 20](20-Where-Statistics-Goes.md)).

## 18.3 Principal component analysis

*Level: expert (derivation at advanced level).*

### The question

Suppose each unit has $p$ measurements: a vector $x = (x_1, \dots, x_p)$. Can a few combinations of the variables
carry most of the information? Karl Pearson asked a geometric version in 1901 (which line or plane fits a cloud of
points best?) and Harold Hotelling a statistical one in 1933 (which combinations capture most of the variation?).
The answer to both is the same: the **principal components**.

Centre the data so each variable has mean zero. A combination of the variables is $w^{\top}x = w_1x_1 + \dots + w_px_p$ for a vector of weights $w$. Its variance can be made as large as we like by making $w$ large, so we fix
$\lVert w \rVert = 1$, which makes $w^{\top}x$ the coordinate of $x$ along the direction $w$.

Let $\Sigma$ be the $p \times p$ **covariance matrix**: its $(j, k)$ entry is $\operatorname{Cov}(x_j, x_k)$, so the
diagonal holds the variances. For a sample, $\Sigma = \frac{1}{n - 1}X^{\top}X$ with $X$ the centred data matrix.
Then

$$
\operatorname{Var}(w^{\top}x) = \sum_{j,k} w_jw_k\operatorname{Cov}(x_j, x_k) = w^{\top}\Sigma w ,
$$

by the bilinearity of covariance ([Probability, Chapter 11](../probability/11-Joint-Distributions.md)). The **first
principal component** direction is the unit vector $w$ that maximises $w^{\top}\Sigma w$.

### The eigen facts we need

A number $\lambda$ and a nonzero vector $v$ with $\Sigma v = \lambda v$ are an **eigenvalue** and **eigenvector** of
$\Sigma$: the matrix only stretches $v$, by the factor $\lambda$. A covariance matrix is **symmetric**
($\Sigma^{\top} = \Sigma$, since $\operatorname{Cov}(x_j, x_k) = \operatorname{Cov}(x_k, x_j)$) and **positive
semidefinite** ($w^{\top}\Sigma w = \operatorname{Var}(w^{\top}x) \ge 0$ for every $w$). Three facts follow.

1. *Eigenvalues are real and at least 0.* Realness is part of the spectral theorem below. If $\Sigma v = \lambda v$
   with $v$ real and $\lVert v \rVert = 1$, then $\lambda = v^{\top}\Sigma v \ge 0$.
2. *Eigenvectors for different eigenvalues are perpendicular.* If $\Sigma u = \lambda u$ and $\Sigma v = \mu v$ with
   $\lambda \ne \mu$, then $\lambda\,u^{\top}v = (\Sigma u)^{\top}v = u^{\top}\Sigma v = \mu\,u^{\top}v$, using symmetry
   in the middle step; so $(\lambda - \mu)u^{\top}v = 0$ and $u^{\top}v = 0$.
3. *The spectral theorem.* Every real symmetric $p \times p$ matrix has $p$ real eigenvalues
   $\lambda_1 \ge \lambda_2 \ge \dots \ge \lambda_p$ with eigenvectors $v_1, \dots, v_p$ that are orthonormal (unit
   length, mutually perpendicular), so they form a basis. The proof is a standard theorem of linear algebra; see the
   [MAT247 unit on the spectral theorem](../../uoft/MAT247H1/unit06.md).

### The derivation

**Theorem.** The maximum of $w^{\top}\Sigma w$ over unit vectors $w$ is $\lambda_1$, attained at $w = v_1$. Among
unit vectors perpendicular to $v_1, \dots, v_{k-1}$, the maximum is $\lambda_k$, attained at $v_k$.

*Proof.* Write any unit vector in the eigenvector basis: $w = c_1v_1 + \dots + c_pv_p$ with
$c_1^2 + \dots + c_p^2 = \lVert w \rVert^2 = 1$ (Pythagoras in an orthonormal basis). Then
$\Sigma w = \sum_i c_i\lambda_iv_i$ and, because the $v_i$ are orthonormal,

$$
w^{\top}\Sigma w = \sum_{i=1}^{p} \lambda_i c_i^2 \le \lambda_1 \sum_{i=1}^{p} c_i^2 = \lambda_1 ,
$$

with equality when $w = v_1$ ($c_1 = 1$, all other $c_i = 0$). If $w$ is perpendicular to $v_1, \dots, v_{k-1}$, then
$c_1 = \dots = c_{k-1} = 0$ and the same argument gives the bound $\lambda_k$, attained at $v_k$. $\square$

(The same result comes from Lagrange multipliers: maximising $w^{\top}\Sigma w$ subject to $w^{\top}w = 1$ gives
$2\Sigma w = 2\lambda w$, the eigenvector equation, and the value at such a point is $\lambda$.)

So the principal component directions are the eigenvectors of the covariance matrix, in order of eigenvalue; the
$k$th **principal component score** of a unit is $v_k^{\top}x$; the variance it carries is $\lambda_k$; and the
scores of different components are uncorrelated (since $v_j^{\top}\Sigma v_k = \lambda_k v_j^{\top}v_k = 0$). The
total variance $\sum_j \operatorname{Var}(x_j)$ is the sum of the diagonal of $\Sigma$, called the **trace**, and it
equals $\lambda_1 + \dots + \lambda_p$. So the **proportion of variance explained** by the first $k$ components is
$\frac{\lambda_1 + \dots + \lambda_k}{\lambda_1 + \dots + \lambda_p}$.

**Worked example 2.** Suppose two measurements have sample covariance matrix

$$
\Sigma = \begin{pmatrix} 5 & 2 \\ 2 & 2 \end{pmatrix} .
$$

The eigenvalues solve $\det(\Sigma - \lambda I) = (5 - \lambda)(2 - \lambda) - 4 = \lambda^2 - 7\lambda + 6 = 0$, so
$\lambda_1 = 6$ and $\lambda_2 = 1$. For $\lambda = 6$: $(5 - 6)a + 2b = 0$ gives $v_1 = \frac{1}{\sqrt5}(2, 1)$.
For $\lambda = 1$: $4a + 2b = 0$ gives $v_2 = \frac{1}{\sqrt5}(1, -2)$. **Check:** $\Sigma(2, 1)^{\top} = (12, 6)^{\top} = 6(2, 1)^{\top}$, and $(2, 1)\cdot(1, -2) = 0$. The first component,
$\frac{2x_1 + x_2}{\sqrt5}$, carries $\frac{6}{7} \approx 86\%$ of the total variance $5 + 2 = 7$.

### In practice

- **Computation.** For a centred data matrix, the **singular value decomposition** $X = UDV^{\top}$ (with $U$ and
  $V$ having orthonormal columns and $D$ diagonal with entries $d_1 \ge d_2 \ge \dots \ge 0$) gives the principal
  directions as the columns of $V$ and the eigenvalues as $\frac{d_i^2}{n - 1}$, without forming $X^{\top}X$, which is
  numerically safer. See the [MAT247 unit on the singular value decomposition](../../uoft/MAT247H1/unit07.md).
- **With $p > n$** there are at most $n - 1$ nonzero eigenvalues, since the rank of the centred $X$ is at most
  $n - 1$.
- **Scale matters.** PCA on raw variables is dominated by whichever has the largest units (grams versus kilograms).
  Usually each variable is standardised first, which means using the correlation matrix.
- **Variance is not importance.** The direction of greatest variation need not be the one that predicts the outcome
  you care about; **principal components regression**, which regresses on the first few scores, can discard exactly
  the direction that mattered.
- **When $p$ is comparable to $n$**, the sample eigenvalues are systematically spread out compared with the true ones:
  even if $\Sigma = I$, the largest sample eigenvalue is close to $(1 + \sqrt{p/n})^2$ for large $n$ and $p$. This is
  the Marchenko-Pastur law of random matrix theory (the [Probability book's last chapter](../probability/20-Where-Probability-Goes.md)
  surveys random matrices), and it means "the first component explains a lot" can be an artefact of dimension.

## 18.4 The curse of dimensionality

*Level: advanced.*

Richard Bellman coined the phrase "curse of dimensionality" in 1957 for the explosion of work in optimisation over
many variables. In statistics it names a group of facts that all say: high-dimensional space is enormous and strange,
and data in it are always sparse.

**1. Neighbourhoods are not local.** Spread $n$ points uniformly in the unit cube $[0, 1]^p$. To capture 10% of them
in a small cube around a point, the small cube must have 10% of the volume, so its edge length is $0.1^{1/p}$:

| $p$ | 1 | 2 | 3 | 10 | 100 |
|---|---|---|---|---|---|
| edge for 10% | 0.10 | 0.32 | 0.46 | 0.79 | 0.98 |

In 10 dimensions a "neighbourhood" holding 10% of the data spans 79% of the range of every variable. Methods that
average over nearby points (nearest neighbours, kernel smoothing as in [Chapter 15](15-Nonparametric-Methods.md))
stop being local.

**2. The volume is in the corners.** The ball of radius $\frac12$ inside the unit cube touches every face. Its volume
is $\frac{\pi^{p/2}}{\Gamma(p/2 + 1)}\left(\frac12\right)^p$, where $\Gamma$ is the gamma function
($\Gamma(k + 1) = k!$ for whole numbers, $\Gamma(\frac12) = \sqrt\pi$). The share of the cube it fills:

| $p$ | 2 | 3 | 5 | 10 | 20 |
|---|---|---|---|---|---|
| ball / cube | 0.785 | 0.524 | 0.164 | 0.0025 | $2.5 \times 10^{-8}$ |

Almost all of a high-dimensional cube is in its corners, far from the centre.

**3. The volume is in the skin.** A ball of radius 1 and the ball of radius 0.99 inside it differ by a shell of
thickness 0.01. Volume scales as radius to the power $p$, so the shell holds a fraction $1 - 0.99^p$ of the ball:
about 2% for $p = 2$, 63% for $p = 100$, and $99.996\%$ for $p = 1000$.

**4. All distances look alike.** Take two independent uniform points $U, V$ in $[0, 1]^p$. Their squared distance is a
sum of $p$ independent terms $(U_j - V_j)^2$, each with mean $\frac16$ and variance $\frac{1}{15} - \frac{1}{36} = \frac{7}{180}$ (from $E[(U - V)^2] = \frac16$ and $E[(U - V)^4] = \frac{1}{15}$ for independent uniforms; both are
short integrals). So the squared distance has mean $\frac{p}{6}$ and standard deviation $\sqrt{7p/180}$, and the
ratio

$$
\frac{\text{standard deviation}}{\text{mean}} = 6\sqrt{\frac{7}{180p}} \to 0 \quad \text{as } p \to \infty .
$$

It is about 0.84 for $p = 2$ and 0.037 for $p = 1000$. Among 200 random points in 1000 dimensions (a simulation),
the farthest pair was only about 1.16 times as far apart as the nearest pair; in two dimensions the ratio was over
3000. When every point is nearly equally far from every other, "nearest neighbour" means little.

**What saves us.** Real data are rarely spread evenly through all $p$ dimensions. Images, genomes and texts usually
lie near much lower-dimensional structures (a few strong principal components, a sparse set of relevant variables, a
curved surface). Every method that works in high dimensions bets on some such structure: sparsity for the lasso, low
rank for PCA, smoothness for kernels. When the bet is wrong, no method can beat the curse; when it is right, the
effective dimension is small.

## 18.5 False discoveries at scale

*Level: expert (proof at advanced level).*

### The arithmetic of many tests

A gene-expression study compares tumour and normal tissue for each of $m = 20{,}000$ genes, one test per gene, at
level $\alpha = 0.05$. If no gene truly differs, the expected number of "significant" genes is
$20{,}000 \times 0.05 = 1{,}000$. A list of 1,000 discoveries, all false.

[Chapter 9](09-Hypothesis-Tests.md) met the **Bonferroni** correction: test each hypothesis at level $\alpha/m$. By
the union bound, the probability of even one false rejection (the **family-wise error rate**) is at most $\alpha$.
With $m = 20{,}000$, each gene must reach $p < 2.5 \times 10^{-6}$. Bonferroni is safe but, at this scale, so strict
that real effects of moderate size are almost never found.

### The false discovery rate

Yoav Benjamini and Yosef Hochberg (1995) proposed controlling a different quantity. Among the $R$ hypotheses we
reject, let $V$ be the number that are actually true nulls (false discoveries). The **false discovery proportion** is
$V/R$ (taken as 0 when $R = 0$), and the **false discovery rate** is its expectation,

$$
\text{FDR} = E\left[\frac{V}{\max(R, 1)}\right] .
$$

Controlling the FDR at 5% means that, on average, at most 5% of the reported discoveries are false. For a screening
study, whose list will be checked further, that is often the right promise.

**The Benjamini-Hochberg (BH) procedure** at level $q$: sort the p-values,
$p_{(1)} \le p_{(2)} \le \dots \le p_{(m)}$; find the largest $k$ with

$$
p_{(k)} \le \frac{k}{m}q ;
$$

and reject the hypotheses with the $k$ smallest p-values (none if there is no such $k$).

**Worked example 3 (made-up p-values).** Ten tests at $q = 0.05$, so the thresholds are $\frac{k}{10} \times 0.05 = 0.005k$:

| $k$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| $p_{(k)}$ | 0.001 | 0.008 | 0.012 | 0.021 | 0.035 | 0.041 | 0.10 | 0.22 | 0.48 | 0.73 |
| $0.005k$ | 0.005 | 0.010 | 0.015 | 0.020 | 0.025 | 0.030 | 0.035 | 0.040 | 0.045 | 0.050 |
| $p_{(k)} \le 0.005k$? | yes | yes | yes | no | no | no | no | no | no | no |

The largest $k$ with "yes" is 3, so BH rejects three hypotheses. Bonferroni (threshold 0.005) rejects only one;
testing each at 0.05 with no correction rejects six.

**Theorem (Benjamini and Hochberg, 1995).** If the p-values of the true null hypotheses are independent of each other
and of the other p-values, and each is uniformly distributed on $[0, 1]$, then the BH procedure has
$\text{FDR} = \frac{m_0}{m}q \le q$, where $m_0$ is the number of true nulls.

*Proof.* Let $N(t)$ be the number of p-values at most $t$. The rule "largest $k$ with $p_{(k)} \le kq/m$" is the
same as "largest $k$ with $N(kq/m) \ge k$" (the $k$th smallest p-value is at most a threshold exactly when at least
$k$ p-values are). Call this $R$.

Fix a true null $i$, and let $R^{(i)}$ be the number BH would reject if $p_i$ were replaced by 0. Replacing $p_i$ by 0
changes $N(t)$ only for $t < p_i$. **Claim:** if $p_i \le kq/m$, then $R = k$ exactly when $R^{(i)} = k$. Indeed,
for all $j \ge k$ the thresholds $jq/m$ are at least $p_i$, so $N(jq/m)$ is the same in both cases; and $R = k$ means
"$N(kq/m) \ge k$ and $N(jq/m) < j$ for every $j > k$", a statement only about $j \ge k$.

Hypothesis $i$ is rejected with $R = k$ exactly when $p_i \le kq/m$ and $R = k$. So the contribution of $i$ to the
FDR is

$$
E\left[\frac{\mathbf 1\{i \text{ rejected}\}}{\max(R,1)}\right] = \sum_{k=1}^{m}\frac1k P\left(p_i \le \frac{kq}{m},\ R^{(i)} = k\right) = \sum_{k=1}^{m}\frac1k \cdot \frac{kq}{m}\,P(R^{(i)} = k) = \frac{q}{m} ,
$$

where the middle step uses the claim, then that $R^{(i)}$ depends only on the other p-values (independent of $p_i$)
and that $P(p_i \le t) = t$; the last step uses $\sum_k P(R^{(i)} = k) = 1$ (since $R^{(i)} \ge 1$ always: with
$p_i = 0$, at least $k = 1$ qualifies). Summing over the $m_0$ true nulls gives $\text{FDR} = \frac{m_0}{m}q$.
$\square$

Benjamini and Yekutieli (2001) showed that BH still controls the FDR under a common kind of positive dependence, and
that dividing $q$ by $\sum_{k=1}^m \frac1k$ (about $\ln m + 0.58$) controls it under any dependence. Later refinements
estimate $m_0$ (John Storey's q-values, 2002) or work with each hypothesis's posterior chance of being null (Bradley
Efron's local false discovery rate), an empirical Bayes idea: with thousands of parallel tests, the data themselves
reveal what null p-values look like.

### What genomics learned

Genetics met these problems early and at scale. In the "candidate gene" era (1990s to early 2000s), many studies
reported associations between a particular gene variant and a disease, often from small samples and with little
correction for the many variants, outcomes and subgroups that could have been tested. When these associations were
checked, most did not hold up: a review by Joel Hirschhorn and colleagues (2002) of associations that had been
studied three or more times found that only a small handful were consistently replicated.

The field responded in ways statisticians had been urging. **Genome-wide association studies** (GWAS), which became
possible in the mid-2000s, test hundreds of thousands to millions of variants at once, and adopted a strict
genome-wide significance threshold, conventionally $p < 5 \times 10^{-8}$, roughly a Bonferroni correction for the
equivalent of about a million independent tests. They pooled data into consortia with very large samples, and
required replication in independent samples before a finding was accepted. The result has been thousands of
robustly replicated associations, mostly of very small individual effect. A second lesson came with them: the many
small effects individually explain little, and "the gene for" a common trait is rarely a meaningful phrase.

The same arithmetic applies wherever many questions are asked of one data set: brain imaging (tens of thousands of
voxels), particle physics (where the "five sigma" convention, $p \approx 3 \times 10^{-7}$ one-sided, plays the role of
a strict threshold), and any analysis where the analyst tries many things before reporting one, which
[Chapter 20](20-Where-Statistics-Goes.md) takes up.

## A short history

Pearson (1901) and Hotelling (1933) created principal components. Stein's shrinkage result (1956, and James and Stein
1961) showed that the obvious estimator can be beaten in three or more dimensions, a shock that pointed towards
modern shrinkage. Hoerl and Kennard introduced ridge regression in 1970 to cope with collinearity, and Tikhonov had
used the same penalty for ill-posed problems in the 1940s and 1960s. Tibshirani's lasso (1996) became practical with
the LARS algorithm of Efron, Hastie, Johnstone and Tibshirani (2004) and with coordinate descent. Benjamini and
Hochberg's 1995 paper, initially hard to publish, became one of the most cited in statistics once genomics arrived.
Compressed sensing (2006) and the theory of high-dimensional estimation in the 2000s and 2010s turned these methods
into a mature mathematical subject.

## Check yourself

??? question "1. A study has $n = 50$ patients and $p = 50$ predictors plus an intercept. Is the least squares estimate unique? What happens to the residuals?"

    With the intercept there are 51 columns and only 50 rows, so $p > n$: $X^{\top}X$ is singular and there are
    infinitely many least squares solutions. Typically the columns span all of $\mathbb R^{50}$, so some solution fits
    exactly, with all residuals zero, whatever the data.

??? question "2. In the orthonormal case, a least squares coefficient is $\hat\beta_j = 4$. Find the ridge estimate for $\lambda = 1$ and the lasso estimate for $\lambda = 1$ (lasso objective with the factor $\frac12$). Repeat for $\hat\beta_j = 0.6$."

    Ridge: $\frac{4}{2} = 2$; lasso: $4 - 1 = 3$. For $0.6$: ridge $0.3$; lasso $0$, since $|0.6| \le 1$. Ridge
    shrinks proportionally; the lasso subtracts and zeroes small values.

??? question "3. In the orthonormal case with $\sigma^2 = 1$ and true $\beta_j = 2$, find the ridge MSE at $\lambda = 0$, at the best $\lambda$, and at $\lambda = 1$."

    $\operatorname{MSE}(\lambda) = \frac{1 + 4\lambda^2}{(1 + \lambda)^2}$. At $0$: $1$. Best $\lambda = \sigma^2 / \beta_j^2 = 0.25$: $\frac{1 + 0.25}{1.5625} = 0.8$. At $1$: $\frac{5}{4} = 1.25$, worse than least squares. Too
    much shrinkage hurts.

??? question "4. Show that the ridge estimate has smaller length than the least squares estimate in the orthonormal case, and say why this holds in general."

    Orthonormal: each coordinate is divided by $1 + \lambda > 1$, so the length is divided by $1 + \lambda$. In
    general, the ridge estimate minimises $\lVert y - X\beta \rVert^2 + \lambda\lVert\beta\rVert^2$. If it were longer
    than the least squares estimate $\hat\beta$, then $\hat\beta$ would have both a smaller (or equal) residual sum of
    squares and a smaller penalty, so a smaller objective, a contradiction.

??? question "5. Find the principal components of the covariance matrix with rows $(3, 1)$ and $(1, 3)$, and the proportion of variance explained by the first."

    $\det\begin{pmatrix} 3 - \lambda & 1 \\ 1 & 3 - \lambda \end{pmatrix} = (3 - \lambda)^2 - 1 = 0$ gives
    $\lambda = 4, 2$. Eigenvectors: $\frac{1}{\sqrt2}(1, 1)$ for 4 and $\frac{1}{\sqrt2}(1, -1)$ for 2. The first
    explains $\frac{4}{6} \approx 67\%$.

??? question "6. Why must PCA be applied to standardised variables when one variable is measured in millimetres and the others in metres?"

    Variances scale with the square of units: a length in millimetres has a variance $10^6$ times larger than the same
    length in metres. The first component would point almost exactly along the millimetre variable, for reasons of
    units, not structure. Standardising (or using the correlation matrix) puts the variables on a common scale.

??? question "7. In 50 dimensions, what edge length must a cube around a point have to contain 1% of uniformly spread data? What does this mean for nearest-neighbour methods?"

    $0.01^{1/50} = e^{(\ln 0.01)/50} \approx e^{-0.092} \approx 0.912$. A neighbourhood holding 1% of the data spans
    over 91% of each variable's range, so "neighbours" are not similar points at all; local averaging becomes nearly
    global averaging.

??? question "8. Apply the BH procedure at $q = 0.10$ to the ten p-values of Worked example 3."

    Thresholds are $0.01k$: $0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, \dots$ Compare: $0.001 \le 0.01$,
    $0.008 \le 0.02$, $0.012 \le 0.03$, $0.021 \le 0.04$, $0.035 \le 0.05$, $0.041 \le 0.06$, $0.10 > 0.07$,
    $0.22 > 0.08$, $0.48 > 0.09$, $0.73 > 0.10$. The largest $k$ that passes is 6, so six hypotheses are rejected.

??? question "9. Show that when all $m$ null hypotheses are true, controlling the FDR at $q$ is the same as controlling the family-wise error rate at $q$."

    If all nulls are true, every rejection is false, so $V = R$. The false discovery proportion $V / \max(R, 1)$ is 1
    when $R \ge 1$ and 0 otherwise, so $\text{FDR} = P(R \ge 1) = P(V \ge 1)$, which is the family-wise error rate.

??? question "10. A GWAS tests 800,000 variants, none of which truly matters, at threshold $5 \times 10^{-8}$. How many false positives are expected? What about at 0.05?"

    $800{,}000 \times 5 \times 10^{-8} = 0.04$ expected false positives (and, by the union bound, at most a 4% chance
    of any). At 0.05: $40{,}000$ expected false positives.

??? question "11. Prove that the total variance (sum of diagonal entries of $\Sigma$) equals the sum of the eigenvalues, using the orthonormal eigenvector basis."

    Write $V$ for the matrix with columns $v_1, \dots, v_p$ and $\Lambda$ for the diagonal matrix of eigenvalues, so
    $\Sigma V = V\Lambda$ and $V^{\top}V = I$, hence $\Sigma = V\Lambda V^{\top}$. The trace satisfies
    $\operatorname{tr}(AB) = \operatorname{tr}(BA)$ (both equal $\sum_{i,j}a_{ij}b_{ji}$). So
    $\operatorname{tr}(\Sigma) = \operatorname{tr}(V\Lambda V^{\top}) = \operatorname{tr}(\Lambda V^{\top}V) = \operatorname{tr}(\Lambda) = \lambda_1 + \dots + \lambda_p$.

## What you learned

- With more variables than observations, least squares is not unique and fits noise perfectly; near-collinearity
  causes the same instability in milder form.
- Ridge regression, $(X^{\top}X + \lambda I)^{-1}X^{\top}y$, always exists, trades a little bias for much less
  variance, and some amount of it always beats least squares; it is the posterior mode under a normal prior.
- The lasso's absolute-value penalty soft-thresholds coefficients, setting many exactly to zero; geometrically, its
  diamond has corners on the axes.
- Principal components are the eigenvectors of the covariance matrix, found by maximising variance; the eigenvalues
  are the variances they carry.
- High-dimensional space is mostly corners and skin, neighbourhoods are not local and distances concentrate; methods
  work only by exploiting structure such as sparsity or low rank.
- With thousands of tests, false discoveries are guaranteed; the Benjamini-Hochberg procedure controls their expected
  share, and genomics adopted strict thresholds and replication after early failures.

**Next:** [Chapter 19](19-Statistical-Learning.md), prediction as a statistical problem: the bias-variance trade-off,
classifiers and how to judge them honestly.

## Further reading

- T. Hastie, R. Tibshirani and J. Friedman, *The Elements of Statistical Learning*, 2nd edition, 2009 (free online
  from the authors), Chapters 3 and 14.
- T. Hastie, R. Tibshirani and M. Wainwright, *Statistical Learning with Sparsity: The Lasso and Generalizations*,
  2015.
- P. Bühlmann and S. van de Geer, *Statistics for High-Dimensional Data*, 2011.
- M. J. Wainwright, *High-Dimensional Statistics: A Non-Asymptotic Viewpoint*, 2019.
- A. E. Hoerl and R. W. Kennard, "Ridge regression: biased estimation for nonorthogonal problems", *Technometrics*
  12, 1970.
- R. Tibshirani, "Regression shrinkage and selection via the lasso", *Journal of the Royal Statistical Society,
  Series B* 58, 1996.
- K. Pearson, "On lines and planes of closest fit to systems of points in space", *Philosophical Magazine* 2, 1901;
  H. Hotelling, "Analysis of a complex of statistical variables into principal components", *Journal of Educational
  Psychology* 24, 1933.
- I. T. Jolliffe, *Principal Component Analysis*, 2nd edition, 2002.
- Y. Benjamini and Y. Hochberg, "Controlling the false discovery rate: a practical and powerful approach to multiple
  testing", *Journal of the Royal Statistical Society, Series B* 57, 1995.
- B. Efron, *Large-Scale Inference*, 2010.
- J. N. Hirschhorn, K. Lohmueller, E. Byrne and K. Hirschhorn, "A comprehensive review of genetic association
  studies", *Genetics in Medicine* 4, 2002.
- On this site: [MAT240 Unit 10: Eigenvalues and diagonalization](../../uoft/MAT240H1/unit10.md),
  [MAT247 Unit 6: The spectral theorem](../../uoft/MAT247H1/unit06.md),
  [MAT247 Unit 7: Polar and singular value decomposition](../../uoft/MAT247H1/unit07.md), the
  [Probability book's frontier chapter](../probability/20-Where-Probability-Goes.md) on random matrices, the
  [large data sets lesson](../../topics/statistics/level-7/07-large-data-sets.md), and the
  [Statistics book's contents](index.md).
