# 12. Multiple regression

*A used car's price depends on its age, but also on how far it has been driven, and older cars have usually been
driven further. If we regress price on age alone, the slope mixes the effect of age with the effect of distance.
To separate them we need a model with several predictors at once. In this chapter you will learn the language that
makes such models manageable, matrices, and use it to derive the least squares solution in one line, with a picture
that explains it: a perpendicular dropped onto a plane. You will prove the main properties of the estimates,
including the Gauss-Markov theorem; learn what a coefficient means when other variables are "held fixed" and what
goes wrong when predictors are nearly redundant; bring categorical predictors and interactions into the model;
learn why a model that fits the data better can predict worse, and how cross-validation catches it; and see that
Fisher's analysis of variance is a regression in disguise.*

!!! abstract "In this chapter"
    **You will learn:**

    - the matrix form $y = X\beta + \varepsilon$, with every matrix fact you need explained from scratch
    - the normal equations $X^{\mathsf T}X\hat\beta = X^{\mathsf T}y$, derived from a right angle, and the hat matrix
      as a projection
    - the mean and covariance of $\hat\beta$, why $\sigma^2$ is estimated with $n - p$, and the Gauss-Markov theorem
      (with proof)
    - how to read a coefficient "holding the others fixed", the omitted-variable formula, and collinearity and its
      variance inflation factor
    - dummy variables, the dummy variable trap, and interactions
    - overfitting, adjusted $R^2$, the nested F test, and cross-validation with the leave-one-out shortcut (proved)
    - one-way analysis of variance as a regression on dummy variables

    **You need:** [Chapter 11](11-Linear-Regression.md) (the simple linear model and its inference). Linear algebra
    is not assumed: the few matrix facts used are explained in 12.1. Readers who know some will find the U of T
    guides on [linear transformations](../../uoft/MAT240H1/unit04.md),
    [rank and matrices](../../uoft/MAT240H1/unit05.md) and
    [orthogonality](../../uoft/MAT247H1/unit02.md) helpful background.

    **Levels:** 12.1 is advanced (it is the heart of the chapter); 12.2 is intermediate with an advanced proof; 12.3
    and 12.4 are intermediate; 12.5 is intermediate to advanced; 12.6 is intermediate.

## 12.1 Several predictors and the matrix form

*Level: advanced.*

### The data and the model

Ten used cars of one model are offered for sale (made-up data). For each we know its age in years ($x_1$), the
distance it has been driven in units of 10 000 km ($x_2$), and the asking price in thousands of dollars ($y$).

| car | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| age $x_1$ | 1 | 2 | 2 | 3 | 4 | 5 | 5 | 6 | 7 | 8 |
| distance $x_2$ | 4 | 2 | 7 | 5 | 3 | 9 | 5 | 11 | 8 | 10 |
| price $y$ | 23.8 | 22.8 | 20.7 | 20.9 | 20.0 | 15.8 | 17.7 | 13.8 | 13.3 | 11.2 |

The **multiple linear regression model** with $k$ predictors is

$$
Y_i = \beta_0 + \beta_1x_{i1} + \beta_2x_{i2} + \dots + \beta_kx_{ik} + \varepsilon_i, \qquad i = 1, \dots, n,
$$

with the same assumptions as in [Chapter 11](11-Linear-Regression.md): the errors $\varepsilon_i$ are independent
$N(0, \sigma^2)$. There are $p = k + 1$ unknown coefficients. Here $k = 2$ and $p = 3$.

Writing out ten equations by hand is tedious, and with 20 predictors it is hopeless. Matrices let us write all of
them as one.

### Just enough matrix algebra

A **matrix** is a rectangular table of numbers. An $n \times p$ matrix has $n$ rows and $p$ columns; the entry in
row $i$ and column $j$ of a matrix $A$ is written $A_{ij}$. A **vector** here is a matrix with one column, a list of
numbers written vertically.

- **Product.** If $A$ is $n \times p$ and $B$ is $p \times m$, the product $AB$ is the $n \times m$ matrix whose
  $(i, j)$ entry is $\sum_{l} A_{il}B_{lj}$: row $i$ of $A$ times column $j$ of $B$, entry by entry, added up. The
  inner sizes must match. In particular, $A$ times a vector $b$ (of length $p$) is a vector whose entries are
  $\sum_l A_{il}b_l$. Equivalently, $Ab = b_1(\text{column 1 of }A) + \dots + b_p(\text{column } p)$: a
  **linear combination** of the columns of $A$. Matrix products are associative, $(AB)C = A(BC)$, but not
  commutative: usually $AB \ne BA$.
- **Transpose.** $A^{\mathsf T}$ is $A$ with rows and columns swapped: $(A^{\mathsf T})_{ij} = A_{ji}$. A useful rule
  is $(AB)^{\mathsf T} = B^{\mathsf T}A^{\mathsf T}$. For vectors $u, v$ of the same length, $u^{\mathsf T}v =
  \sum u_iv_i$ is the **dot product**, and $u^{\mathsf T}u = |u|^2$ is the squared length. Two vectors are
  **orthogonal** (perpendicular) when $u^{\mathsf T}v = 0$.
- **Identity and inverse.** The identity $I$ is the square matrix with 1 on the diagonal and 0 elsewhere; $IA = A$.
  A square matrix $M$ is **invertible** if there is a matrix $M^{-1}$ with $M^{-1}M = MM^{-1} = I$. Then the equation
  $Mb = c$ has exactly one solution, $b = M^{-1}c$.
- **Rank.** The columns of $X$ are **linearly independent** if no column is a linear combination of the others;
  equivalently, $Xv = 0$ only for $v = 0$. Then $X$ has **full column rank**.
- **Trace.** The trace of a square matrix, $\operatorname{tr}(M)$, is the sum of its diagonal entries. A useful fact:
  $\operatorname{tr}(AB) = \operatorname{tr}(BA)$ whenever both products are square (both sides equal
  $\sum_{i,l}A_{il}B_{li}$).
- **Random vectors.** For a vector $Y$ of random variables, $E[Y]$ is the vector of means and the **covariance
  matrix** $\operatorname{Cov}(Y)$ has $(i, j)$ entry $\operatorname{Cov}(Y_i, Y_j)$ (variances on the diagonal).
  For a fixed matrix $A$, linearity of expectation gives $E[AY] = A\,E[Y]$ and

$$
\operatorname{Cov}(AY) = A\,\operatorname{Cov}(Y)\,A^{\mathsf T},
$$

because entry $(i, j)$ of the left side is $\operatorname{Cov}(\sum_l A_{il}Y_l, \sum_m A_{jm}Y_m) =
\sum_{l, m}A_{il}\operatorname{Cov}(Y_l, Y_m)A_{jm}$, which is entry $(i, j)$ of the right side.

### The model in one line

Stack the responses into a vector $y$ (length $n$), the coefficients into $\beta$ (length $p$), the errors into
$\varepsilon$, and the predictors into the $n \times p$ **design matrix** $X$, whose first column is all 1s (for the
intercept) and whose other columns are the predictors. Then the $n$ equations become

$$
y = X\beta + \varepsilon, \qquad \varepsilon \sim N(0, \sigma^2I),
$$

where $N(0, \sigma^2I)$ means the errors have mean 0, variance $\sigma^2$ each, and are uncorrelated (independent,
under normality). For the cars,

$$
X = \begin{pmatrix} 1 & 1 & 4 \\ 1 & 2 & 2 \\ 1 & 2 & 7 \\ \vdots & \vdots & \vdots \\ 1 & 8 & 10 \end{pmatrix},
\qquad
\beta = \begin{pmatrix} \beta_0 \\ \beta_1 \\ \beta_2 \end{pmatrix}.
$$

Row $i$ of $X\beta$ is $\beta_0 + \beta_1x_{i1} + \beta_2x_{i2}$, the regression function for car $i$.

### Least squares as a perpendicular

Least squares chooses $b$ to make $|y - Xb|^2 = \sum_i (y_i - (Xb)_i)^2$ as small as possible. Here is the idea in a
picture. As $b$ varies, $Xb$ runs over all linear combinations of the columns of $X$: a flat subspace (a plane, when
there are two columns) inside $n$-dimensional space, called the **column space** of $X$. The data vector $y$ usually
does not lie in it, because of the noise. The closest point of the plane to $y$ is the foot of the perpendicular
from $y$, as in ordinary geometry.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 230" role="img" aria-label="A tilted plane stands for the column space of X, the set of all vectors X times b. The data vector y points up out of the plane. Its foot in the plane is the fitted vector y-hat. The residual e, from y-hat up to y, meets the plane at a right angle, so it is the shortest way from y to the plane">
  <polygon points="40,170 260,205 400,135 180,100" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1"/>
  <line x1="120" y1="160" x2="230" y2="185" stroke="#7ccf9a" stroke-width="2.5"/>
  <line x1="120" y1="160" x2="215" y2="122" stroke="#7ccf9a" stroke-width="2.5"/>
  <line x1="120" y1="160" x2="300" y2="150" stroke="currentColor" stroke-width="2.5"/>
  <line x1="120" y1="160" x2="300" y2="40" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="300" y1="150" x2="300" y2="40" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/>
  <polyline points="288,150.7 288,138.7 300,138" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="120" cy="160" r="3" fill="currentColor"/>
  <circle cx="300" cy="150" r="3" fill="currentColor"/>
  <circle cx="300" cy="40" r="3" fill="#eea66f"/>
  <text x="110" y="176" text-anchor="end" font-size="12" fill="currentColor">0</text>
  <text x="308" y="38" font-size="13" fill="currentColor">y (the data)</text>
  <text x="308" y="166" font-size="13" fill="currentColor">ŷ = Xβ̂</text>
  <text x="308" y="98" font-size="13" fill="currentColor">e = y − ŷ</text>
  <text x="236" y="196" font-size="12" fill="currentColor">column 1</text>
  <text x="166" y="118" font-size="12" fill="currentColor">column 2</text>
  <text x="56" y="222" font-size="12" fill="currentColor">plane: all vectors Xb (the column space of X)</text>
</svg>
</div>

**Theorem (normal equations).** A vector $\hat\beta$ minimises $|y - Xb|^2$ if and only if the residual
$e = y - X\hat\beta$ is orthogonal to every column of $X$, that is,

$$
X^{\mathsf T}(y - X\hat\beta) = 0, \qquad\text{equivalently}\qquad X^{\mathsf T}X\,\hat\beta = X^{\mathsf T}y .
$$

If $X$ has full column rank, $X^{\mathsf T}X$ is invertible and the unique solution is

$$
\hat\beta = (X^{\mathsf T}X)^{-1}X^{\mathsf T}y .
$$

*Proof.* Suppose $X^{\mathsf T}e = 0$. For any $b$, write $y - Xb = e + X(\hat\beta - b)$. The two pieces are
orthogonal, because $(X(\hat\beta - b))^{\mathsf T}e = (\hat\beta - b)^{\mathsf T}X^{\mathsf T}e = 0$. So by
Pythagoras,

$$
|y - Xb|^2 = |e|^2 + |X(\hat\beta - b)|^2 \ge |e|^2 = |y - X\hat\beta|^2 ,
$$

and $\hat\beta$ is a minimiser. Equality holds only if $X(\hat\beta - b) = 0$; when the columns are independent that
forces $b = \hat\beta$, so the minimiser is unique. (Conversely, a minimiser must satisfy the normal equations: the
gradient of $|y - Xb|^2$, which is $-2X^{\mathsf T}(y - Xb)$, must vanish there. Or: if $X^{\mathsf T}e \ne 0$,
moving $b$ a little in the direction $X^{\mathsf T}e$ lowers the sum of squares.)

For invertibility: if $X^{\mathsf T}Xv = 0$ then $0 = v^{\mathsf T}X^{\mathsf T}Xv = |Xv|^2$, so $Xv = 0$, so
$v = 0$ by full column rank. A square matrix whose only null vector is 0 is invertible. $\square$

With one predictor, $X$ has columns $(1, \dots, 1)$ and $(x_1, \dots, x_n)$, and the two normal equations are exactly
those of [Chapter 11](11-Linear-Regression.md): $\sum e_i = 0$ and $\sum x_ie_i = 0$.

The method of least squares itself is older than all of this. Adrien-Marie Legendre published it in 1805, for
fitting the orbits of comets; Carl Friedrich Gauss published his version in 1809, claimed to have used it since
1795, and connected it with the normal distribution, which led to a famous priority dispute.

**Example 1 (cars).** Multiply out (each entry of $X^{\mathsf T}X$ is a sum of products of two columns):

$$
X^{\mathsf T}X = \begin{pmatrix} 10 & 43 & 64 \\ 43 & 233 & 321 \\ 64 & 321 & 494 \end{pmatrix},
\qquad
X^{\mathsf T}y = \begin{pmatrix} 180 \\ 686.5 \\ 1051.1 \end{pmatrix}.
$$

For example $43 = \sum x_{i1}$, $233 = \sum x_{i1}^2$ and $321 = \sum x_{i1}x_{i2}$. Solving the three equations
(by elimination, or with the inverse, whose entries all have denominator $\det(X^{\mathsf T}X) = 19\,620$) gives

$$
\hat\beta_0 \approx 26.816, \qquad \hat\beta_1 \approx -1.4087, \qquad \hat\beta_2 \approx -0.4311 .
$$

The fitted equation is: price $\approx 26.82 - 1.409\,(\text{age}) - 0.431\,(\text{distance})$, in thousands of
dollars. Check: the residuals $0.12, -0.34, -0.28, 0.47, 0.11, -0.09, 0.08, 0.18, -0.21, -0.04$ add up to 0, and so
do their products with the ages and with the distances (up to rounding), as the normal equations require.

### Try it in Python

```python
from fractions import Fraction as F

age  = [1, 2, 2, 3, 4, 5, 5, 6, 7, 8]
dist = [4, 2, 7, 5, 3, 9, 5, 11, 8, 10]
price = [F(v) for v in ["23.8", "22.8", "20.7", "20.9", "20.0",
                        "15.8", "17.7", "13.8", "13.3", "11.2"]]
X = [[1, a, d] for a, d in zip(age, dist)]
XtX = [[sum(r[i] * r[j] for r in X) for j in range(3)] for i in range(3)]
Xty = [sum(r[i] * y for r, y in zip(X, price)) for i in range(3)]

# solve XtX b = Xty by Gauss-Jordan elimination, exactly
M = [row[:] + [c] for row, c in zip(XtX, Xty)]
for i in range(3):
    M[i] = [v / M[i][i] for v in M[i]]
    for k in range(3):
        if k != i:
            M[k] = [a - M[k][i] * b for a, b in zip(M[k], M[i])]
print([float(row[3]) for row in M])   # about [26.816, -1.4087, -0.4311]
```

### The hat matrix

The fitted values are $\hat y = X\hat\beta = X(X^{\mathsf T}X)^{-1}X^{\mathsf T}y = Hy$, where

$$
H = X(X^{\mathsf T}X)^{-1}X^{\mathsf T}
$$

is the **hat matrix** of [Chapter 11](11-Linear-Regression.md), now in general form. It is the matrix of the
perpendicular projection onto the column space. Two properties, each a one-line calculation:

- $H$ is **symmetric**: $H^{\mathsf T} = H$ (use $(AB)^{\mathsf T} = B^{\mathsf T}A^{\mathsf T}$ and the symmetry of
  $X^{\mathsf T}X$).
- $H$ is **idempotent**: $HH = H$ (the middle $X^{\mathsf T}X$ cancels one inverse). Projecting twice is the same as
  projecting once.

Its trace is the number of parameters:
$\operatorname{tr}(H) = \operatorname{tr}\big((X^{\mathsf T}X)^{-1}X^{\mathsf T}X\big) = \operatorname{tr}(I_p) = p$.
The diagonal entries $h_{ii}$ are the leverages; they add up to $p$ (it was 2 in Chapter 11). The residual vector is
$e = (I - H)y$, and $I - H$ is the projection onto the directions perpendicular to the column space, also symmetric
and idempotent.

### Properties of the estimates

**Theorem.** Under the model $y = X\beta + \varepsilon$ with $E[\varepsilon] = 0$ and $\operatorname{Cov}(\varepsilon)
= \sigma^2I$:

1. $E[\hat\beta] = \beta$ (unbiased);
2. $\operatorname{Cov}(\hat\beta) = \sigma^2(X^{\mathsf T}X)^{-1}$;
3. $E[\text{SSE}] = (n - p)\sigma^2$, where $\text{SSE} = |e|^2$, so $s^2 = \text{SSE}/(n-p)$ is unbiased.

*Proof.* Write $A = (X^{\mathsf T}X)^{-1}X^{\mathsf T}$, so $\hat\beta = Ay$ and $AX = I$.

1. $E[\hat\beta] = A\,E[y] = AX\beta = \beta$.
2. $\operatorname{Cov}(\hat\beta) = A(\sigma^2I)A^{\mathsf T} = \sigma^2(X^{\mathsf T}X)^{-1}X^{\mathsf T}X(X^{\mathsf T}X)^{-1} = \sigma^2(X^{\mathsf T}X)^{-1}$.
3. $e = (I - H)y = (I - H)(X\beta + \varepsilon) = (I - H)\varepsilon$, since $HX = X$. Then
   $|e|^2 = \varepsilon^{\mathsf T}(I - H)^{\mathsf T}(I - H)\varepsilon = \varepsilon^{\mathsf T}(I - H)\varepsilon$
   (symmetric and idempotent). A number is its own trace, so using $\operatorname{tr}(AB) = \operatorname{tr}(BA)$,
   $E[|e|^2] = E[\operatorname{tr}((I - H)\varepsilon\varepsilon^{\mathsf T})] = \operatorname{tr}((I-H)\,\sigma^2I) =
   \sigma^2(n - p)$. $\square$

Under normality, the rotation argument of [Chapter 9](09-Hypothesis-Tests.md) (now: choose an orthonormal basis whose
first $p$ vectors span the column space) shows that $\text{SSE}/\sigma^2 \sim \chi^2_{n-p}$, independent of
$\hat\beta$, and $\hat\beta \sim N(\beta, \sigma^2(X^{\mathsf T}X)^{-1})$. So each coefficient has a t test: with
$\operatorname{SE}(\hat\beta_j) = s\sqrt{[(X^{\mathsf T}X)^{-1}]_{jj}}$,

$$
\frac{\hat\beta_j - \beta_j}{\operatorname{SE}(\hat\beta_j)} \sim t_{n-p} .
$$

**Example 2 (cars).** $\text{SSE} \approx 0.5262$ with $n - p = 7$, so $s^2 \approx 0.07517$ and $s \approx 0.274$
(thousand dollars). The diagonal of $(X^{\mathsf T}X)^{-1}$ is about $0.6147, 0.04302, 0.02452$.

| coefficient | estimate | standard error | t (7 df) | p-value | 95% interval |
|---|---|---|---|---|---|
| intercept | 26.816 | 0.215 | 124.7 | $< 0.0001$ | |
| age | −1.409 | 0.0569 | −24.8 | $< 0.0001$ | −1.543 to −1.274 |
| distance | −0.431 | 0.0429 | −10.0 | $< 0.0001$ | −0.533 to −0.330 |

(Each standard error is $s$ times the square root of the diagonal entry: for age, $0.274 \times \sqrt{0.04302}
\approx 0.0569$. The t point is $t_{0.025, 7} = 2.365$.)

### The Gauss-Markov theorem

Why least squares, rather than some other way of fitting? Without assuming normality, least squares is still the
best in a precise sense.

An estimator of $\beta$ is **linear** if it has the form $Cy$ for a fixed $p \times n$ matrix $C$, and **unbiased** if
$E[Cy] = \beta$ for every $\beta$, which means $CX = I$.

**Theorem (Gauss-Markov).** Assume $E[\varepsilon] = 0$ and $\operatorname{Cov}(\varepsilon) = \sigma^2I$. Among all
linear unbiased estimators of $\beta$, least squares has the smallest variance: for every linear unbiased $Cy$ and
every fixed vector $a$, $\operatorname{Var}(a^{\mathsf T}Cy) \ge \operatorname{Var}(a^{\mathsf T}\hat\beta)$. In
short, least squares is **BLUE**: the best linear unbiased estimator.

*Proof.* Let $A = (X^{\mathsf T}X)^{-1}X^{\mathsf T}$ and write $C = A + D$. Unbiasedness gives $CX = I$; since
$AX = I$, we get $DX = 0$. Then

$$
\operatorname{Cov}(Cy) = \sigma^2(A + D)(A + D)^{\mathsf T} = \sigma^2\big(AA^{\mathsf T} + AD^{\mathsf T} + DA^{\mathsf T} + DD^{\mathsf T}\big).
$$

The cross terms vanish: $DA^{\mathsf T} = DX(X^{\mathsf T}X)^{-1} = 0$, and $AD^{\mathsf T}$ is its transpose. So
$\operatorname{Cov}(Cy) = \operatorname{Cov}(\hat\beta) + \sigma^2DD^{\mathsf T}$, and for any $a$,
$\operatorname{Var}(a^{\mathsf T}Cy) = \operatorname{Var}(a^{\mathsf T}\hat\beta) + \sigma^2|D^{\mathsf T}a|^2 \ge
\operatorname{Var}(a^{\mathsf T}\hat\beta)$. $\square$

Gauss proved a version of this in the 1820s; Andrey Markov's name was attached later. Two cautions keep it in
proportion. It compares only *linear unbiased* estimators: biased estimators such as ridge regression
([Chapter 18](18-High-Dimensional-Statistics.md)) can have smaller mean squared error. And it needs equal variances
and uncorrelated errors; without them, weighted or generalised least squares is better.

## 12.2 Interpreting coefficients

### "Holding the others fixed"

In the car model, the coefficient of age is $-1.409$: **comparing cars that have been driven the same distance**,
each extra year of age goes with a price about 1409 dollars lower, on average. The coefficient of distance,
$-0.431$, says: comparing cars of the same age, each extra 10 000 km goes with a price about 431 dollars lower.

Compare the simple regressions, each with one predictor:

| model | coefficient of age | coefficient of distance |
|---|---|---|
| price on age only | −1.819 | |
| price on distance only | | −1.195 |
| price on both | −1.409 | −0.431 |

The distance coefficient shrinks from $-1.195$ to $-0.431$ once age is in the model. Why? In the simple regression,
"cars driven 10 000 km further" are also, typically, older cars, so their lower price reflects both. The multiple
regression separates the two. The simple slope answers "how do prices differ between cars that differ in distance?",
the multiple regression coefficient answers "how do prices differ between cars that differ in distance *but have the
same age*?". Both are legitimate questions; they are different questions.

### The omitted-variable formula

The relation between the two kinds of slope is exact.

**Theorem.** Fit $y$ on $x_1$ and $x_2$ (with intercept), giving coefficients $\hat\beta_1, \hat\beta_2$. Fit $y$ on
$x_1$ alone, giving slope $\tilde\beta_1$. Fit $x_2$ on $x_1$, giving slope $\hat\delta$. Then

$$
\tilde\beta_1 = \hat\beta_1 + \hat\beta_2\,\hat\delta .
$$

*Proof.* Write $y = \hat\beta_0 + \hat\beta_1x_1 + \hat\beta_2x_2 + e$, where $e$ is the residual of the full fit, so
$\sum e_i = 0$ and $\sum x_{i1}e_i = 0$. The simple slope is a linear function of the response:
$\tilde\beta_1 = \sum c_iy_i$ with $c_i = (x_{i1} - \bar x_1)/S_{11}$, as in [Chapter 11](11-Linear-Regression.md).
Apply it to each piece. It sends a constant to 0, sends $x_1$ to 1, sends $x_2$ to $\hat\delta$ (by definition), and
sends $e$ to $\sum c_ie_i = 0$ (since $e$ is orthogonal to both $1$ and $x_1$). So
$\tilde\beta_1 = \hat\beta_1 + \hat\beta_2\hat\delta$. $\square$

**Check (cars).** Regressing distance on age gives slope $\hat\delta \approx 0.952$ (each year of age goes with about
9500 km more). Then $-1.409 + (-0.431)(0.952) \approx -1.819$, the simple slope of age.

The formula says: leaving out $x_2$ changes the slope of $x_1$ by $\hat\beta_2\hat\delta$, which is zero only if $x_2$
has no partial effect ($\beta_2 = 0$) or is uncorrelated with $x_1$ ($\delta = 0$). In the language of
[Chapter 4](04-Relationships-and-Correlation.md), $x_2$ is a **confounder** of the relation between $x_1$ and $y$.
When the omitted variable was never measured, the formula still tells us which way the bias goes, which is the
start of sensitivity analysis.

### Partialling out

*Level: advanced.* There is a neat way to see what a multiple regression coefficient *is*. Regress $x_1$ on all the
other predictors and keep the residuals $\tilde x_1$: the part of $x_1$ that the others cannot explain. Then the
multiple regression coefficient $\hat\beta_1$ equals the slope of the simple regression of $y$ on $\tilde x_1$. This
is the **Frisch-Waugh-Lovell theorem** (Ragnar Frisch and Frederick Waugh, 1933; Michael Lovell, 1963). The proof
uses the same projection reasoning: $\tilde x_1$ is orthogonal to the other columns, so in $y = X\hat\beta + e$ every
term except $\hat\beta_1x_1 + e$ is orthogonal to $\tilde x_1$, and $x_1^{\mathsf T}\tilde x_1 = \tilde x_1^{\mathsf T}\tilde x_1$.
The theorem makes "holding the others fixed" precise: a multiple regression coefficient uses only the variation
in $x_1$ that is not shared with the other predictors.

### Cautions

- **Fixed is statistical, not physical.** "Holding distance fixed" means comparing cars in the data that have
  similar distances, as summarised by a linear model. It is not an experiment in which we drove cars.
- **Causal reading needs more.** A coefficient is a causal effect only if every confounder is in the model and the
  model's form is right, which observational data cannot guarantee. Adding a variable that is itself caused by $x_1$
  (a "mediator") or by both $x_1$ and $y$ (a "collider") can make things worse, not better. Causal diagrams in
  [Chapter 17](17-Experimental-Design-and-Causal-Inference.md) sort out which variables to include.
- **Some combinations do not exist.** If the data contain no new cars with high mileage, the model's statement about
  them is extrapolation, even if age and distance are each within their ranges.

## 12.3 Collinearity

### When predictors overlap

**Collinearity** (or multicollinearity) means that some predictors are nearly linear combinations of others. In the
extreme, if $x_2 = 2x_1$ exactly, then $X$ does not have full column rank, $X^{\mathsf T}X$ is not invertible, and
the coefficients are not determined: the model $\beta_1x_1 + \beta_2x_2$ only fixes $\beta_1 + 2\beta_2$. In practice
the dependence is near, not exact, and the symptoms are milder but real.

### The variance inflation factor

**Theorem.** In a regression with two predictors $x_1, x_2$ (plus intercept), let $r_{12}$ be their sample
correlation and $S_{11} = \sum (x_{i1} - \bar x_1)^2$. Then

$$
\operatorname{Var}(\hat\beta_1) = \frac{\sigma^2}{S_{11}}\cdot\frac{1}{1 - r_{12}^2} .
$$

*Proof.* By Frisch-Waugh-Lovell (12.2), $\hat\beta_1$ is the simple-regression slope of $y$ on the residual
$\tilde x_1$ of $x_1$ after regressing on $x_2$, so by [Chapter 11](11-Linear-Regression.md) its variance is
$\sigma^2/\sum\tilde x_{i1}^2$. That sum is the error sum of squares of the regression of $x_1$ on $x_2$, which by
the $R^2$ theorem of Chapter 11 equals $(1 - r_{12}^2)S_{11}$. $\square$

The first factor, $\sigma^2/S_{11}$, is the variance the slope would have if $x_1$ were the only predictor. The second
factor is the **variance inflation factor**. In general, with many predictors,

$$
\text{VIF}_j = \frac{1}{1 - R_j^2},
$$

where $R_j^2$ is the $R^2$ from regressing $x_j$ on all the other predictors; the same proof works. It says how many
times larger the variance of $\hat\beta_j$ is than it would be if $x_j$ were uncorrelated with the others.

| $R_j^2$ | 0 | 0.5 | 0.8 | 0.9 | 0.95 | 0.99 |
|---|---|---|---|---|---|---|
| VIF | 1 | 2 | 5 | 10 | 20 | 100 |

A common rule of thumb calls a VIF above 5 or 10 a concern; a VIF of 100 means the standard error is 10 times larger
than it could be.

**Example 3 (cars).** Age and distance have correlation $r_{12} \approx 0.719$, so $\text{VIF} = 1/(1 - 0.517)
\approx 2.07$. The standard errors are inflated by $\sqrt{2.07} \approx 1.44$: noticeable, harmless here.

### The symptoms, and what to do

- **Large standard errors** for individual coefficients, even when the model as a whole fits well (the overall F
  test of 12.5 is highly significant, but no single t test is).
- **Unstable estimates**: adding or removing a few observations, or another predictor, changes coefficients a lot,
  even flipping their signs.
- **Prediction is not harmed**, as long as new cases follow the same pattern of predictors. Collinearity makes it
  hard to *apportion* the effect between predictors, not to predict the total.

Remedies depend on the goal. If you need separate effects, collect data that break the link (an experiment can
choose the $x$'s to be uncorrelated, which is one reason designed experiments are so powerful). If two predictors
measure the same thing, combine them or drop one. If you only need prediction, leave them in, or use ridge
regression ([Chapter 18](18-High-Dimensional-Statistics.md)), which deliberately trades a little bias for a large
reduction in variance.

## 12.4 Dummy variables and interactions

### Categorical predictors

Suppose the cars come in three trim levels: basic, comfort and sport. A category is not a number, and coding it as
1, 2, 3 would force the price difference from basic to comfort to equal that from comfort to sport. Instead, choose
one category as the **baseline** (say basic) and create one **dummy variable** (or indicator) for each of the
others:

$$
d_{\text{comfort}} = \begin{cases} 1 & \text{comfort} \\ 0 & \text{otherwise} \end{cases}, \qquad
d_{\text{sport}} = \begin{cases} 1 & \text{sport} \\ 0 & \text{otherwise} \end{cases}.
$$

The model $\text{price} = \beta_0 + \beta_1\,\text{age} + \gamma_1d_{\text{comfort}} + \gamma_2d_{\text{sport}} + \varepsilon$
gives three parallel lines in age, one per trim: basic cars have intercept $\beta_0$, comfort cars $\beta_0 + \gamma_1$,
sport cars $\beta_0 + \gamma_2$. So $\gamma_1$ is the average price difference between comfort and basic cars **of the
same age**, and a t test on $\gamma_1$ tests whether that difference is zero.

**The dummy variable trap.** Why not three dummies, one for each trim? Because every car is in exactly one trim, so
$d_{\text{basic}} + d_{\text{comfort}} + d_{\text{sport}} = 1$, the intercept column. The columns of $X$ would be
linearly dependent, $X^{\mathsf T}X$ would not be invertible, and the coefficients would not be determined. **A
categorical variable with $m$ levels needs $m - 1$ dummies** (plus the intercept). Which level is the baseline
changes the meaning of the coefficients but not the fitted values.

### Interactions

The parallel-lines model assumes that age lowers the price by the same amount per year in every trim. Perhaps sport
cars lose value faster. To allow that, add products of predictors, called **interaction** terms:

$$
\text{price} = \beta_0 + \beta_1\,\text{age} + \gamma\,d_{\text{sport}} + \delta\,(\text{age} \times d_{\text{sport}}) + \varepsilon .
$$

For non-sport cars ($d = 0$) the line is $\beta_0 + \beta_1\,\text{age}$; for sport cars it is
$(\beta_0 + \gamma) + (\beta_1 + \delta)\,\text{age}$. So $\delta$ is the *difference in slopes*, and testing
$\delta = 0$ tests whether the lines are parallel.

**Example 4 (reading an interaction).** Suppose such a fit (made-up coefficients) gave $\hat\beta_0 = 26$,
$\hat\beta_1 = -1.4$, $\hat\gamma = 3$, $\hat\delta = -0.5$. Then a new sport car is predicted at
$26 + 3 = 29$ thousand dollars, against 26 for the others; but it loses $1.4 + 0.5 = 1.9$ thousand a year, against
1.4. The two lines cross where $3 - 0.5\,\text{age} = 0$, at 6 years: after that, the sport version is predicted to
be the cheaper one. Note that $\hat\gamma = 3$ is the sport premium **at age 0** only. Once an interaction is in a
model, a "main effect" coefficient describes the effect when the other variable is zero, which may not be an
interesting value. (Centring the predictors, for example measuring age from its mean, makes such coefficients
easier to read.)

Interactions between two numerical predictors work the same way: in
$\beta_0 + \beta_1x_1 + \beta_2x_2 + \beta_3x_1x_2$, the slope of $x_1$ is $\beta_1 + \beta_3x_2$, changing with $x_2$.
The usual **hierarchy principle** is to keep the main effects $x_1$ and $x_2$ in any model that contains $x_1x_2$.

Polynomial terms are handled the same way: $x$ and $x^2$ are just two columns of $X$, and the model
$\beta_0 + \beta_1x + \beta_2x^2$ is still linear in the coefficients, so everything in 12.1 applies.

## 12.5 Model choice, overfitting and cross-validation

### $R^2$ always rises

**Theorem.** Adding a predictor to a linear model never increases SSE, so never decreases $R^2$.

*Proof.* The larger model minimises the sum of squares over a set of coefficient vectors that includes every vector
of the smaller model (set the new coefficient to 0). A minimum over a larger set is at most the minimum over the
smaller one. $\square$

So $R^2$ cannot be used to choose between models of different sizes: it would always pick the biggest. A predictor
made of pure random numbers will raise $R^2$ a little. With $n$ observations and $n$ coefficients, a model fits
any data perfectly, $R^2 = 1$, and has learned nothing.

### Overfitting, seen

A model that fits the noise in the sample, not just the pattern, is **overfitted**. It looks excellent on the data
used to fit it and predicts poorly on new data. Here is a demonstration with 12 points simulated (made-up) from a
curve plus noise, at $x = 0, 1, \dots, 11$, with $y$ values $5.8, 5.8, 8.7, 11.1, 10.0, 9.9, 12.5, 11.8, 10.5, 12.1,
9.6, 9.4$ (the curve was $5 + 2x - 0.15x^2$). Fitting polynomials of increasing degree:

| degree | number of coefficients | SSE on the data | $R^2$ | leave-one-out prediction error (PRESS) |
|---|---|---|---|---|
| 1 (line) | 2 | 33.80 | 0.353 | 53.19 |
| 2 | 3 | 9.38 | 0.820 | 15.35 |
| 3 | 4 | 9.38 | 0.820 | 20.56 |
| 5 | 6 | 9.18 | 0.824 | 145.0 |
| 7 | 8 | 6.13 | 0.883 | 1448 |

The fit to the data keeps improving with degree. The ability to predict a point that was **not** used in the fit
(last column, explained below) is best at degree 2, the true shape, and collapses for high degrees, where the curve
swings wildly between the data points to chase the noise. This U-shaped pattern of prediction error, falling and
then rising as the model grows, is the **bias-variance trade-off**, analysed in
[Chapter 19](19-Statistical-Learning.md): too simple a model is biased, too flexible a model has high variance.

### Penalising size: adjusted $R^2$ and information criteria

**Adjusted $R^2$** replaces the sums of squares by their unbiased variance estimates:

$$
R^2_{\text{adj}} = 1 - \frac{\text{SSE}/(n - p)}{\text{SST}/(n - 1)} .
$$

It rises when a new predictor reduces SSE by more than its share and can fall otherwise. For the cars, $R^2 \approx
0.9969$ and $R^2_{\text{adj}} \approx 0.9960$ with both predictors, against $0.9455$ with age alone.

**Information criteria** balance fit against size more formally. Hirotugu Akaike's **AIC** (1974) is, for a normal
linear model up to a constant, $n\log(\text{SSE}/n) + 2p$; Gideon Schwarz's **BIC** (1978) replaces $2p$ by
$p\log n$, penalising size more for large $n$. Smaller is better. AIC aims at good prediction; BIC aims at finding
the true model if it is among the candidates. [Chapter 13](13-Likelihood-Theory.md) explains the likelihood behind
them.

### The nested F test

To test whether a group of $q$ predictors adds anything, compare the **full** model with the **reduced** model that
leaves them out. Under $H_0$ (all $q$ coefficients are zero) and normal errors,

$$
F = \frac{(\text{SSE}_{\text{reduced}} - \text{SSE}_{\text{full}})/q}{\text{SSE}_{\text{full}}/(n - p)}
$$

has the **F distribution with $q$ and $n - p$ degrees of freedom**, written $F_{q, n-p}$: by definition the law of
$(U/q)/(V/(n-p))$ for independent $U \sim \chi^2_q$ and $V \sim \chi^2_{n-p}$. (The numerator is the squared length
of the projection of the noise onto the $q$ extra dimensions, the denominator onto the $n - p$ residual dimensions;
these are independent by the rotation argument.) Ronald Fisher introduced the ratio; George Snedecor tabulated it and
named it F in Fisher's honour.

Two special cases:

- With $q = 1$, the F statistic is the square of the t statistic for that coefficient. For the cars, dropping
  distance raises SSE from 0.526 to 8.106, so $F = (8.106 - 0.526)/(0.526/7) \approx 100.8 = (-10.04)^2$.
- With all $k$ predictors dropped (the reduced model is the intercept alone, with $\text{SSE} = \text{SST}$), it is
  the **overall F test** of whether the model explains anything:
  $F = \frac{\text{SSR}/k}{\text{SSE}/(n - p)}$. For the cars, $F \approx 1109$ on 2 and 7 degrees of freedom.

### Cross-validation

The most direct test of a model is to see how well it predicts data it has not seen. With a fresh dataset, use it.
Without one, **cross-validation** imitates it: split the data into $K$ parts (**folds**), fit the model on $K - 1$
of them, predict the left-out fold, repeat for each fold and average the squared prediction errors. With $K = n$,
each fold is one point: **leave-one-out cross-validation** (LOOCV). The sum of its squared errors is called
**PRESS** (predicted residual sum of squares). The idea was developed in the 1970s; Mervyn Stone's 1974 paper set it
out clearly.

For least squares, LOOCV needs no refitting at all.

**Theorem (leave-one-out shortcut).** Let $\hat y_{(i)}$ be the prediction for point $i$ from the model fitted
without point $i$. Then

$$
y_i - \hat y_{(i)} = \frac{e_i}{1 - h_{ii}},
$$

where $e_i$ and $h_{ii}$ are the ordinary residual and leverage from the full fit. So
$\text{PRESS} = \sum_i \big(e_i/(1 - h_{ii})\big)^2$.

*Proof.* Let $b_{(i)}$ be the coefficients fitted without point $i$, and form a new response vector $y^*$ equal to
$y$ except that $y_i^* = \hat y_{(i)} = x_i^{\mathsf T}b_{(i)}$ (here $x_i^{\mathsf T}$ is row $i$ of $X$). Fit the full
model to $y^*$. The vector $b_{(i)}$ minimises the sum of squares over the other $n - 1$ points, and it makes the
$i$th squared residual zero, which is as small as possible. So it minimises the total for $y^*$, and (by uniqueness)
the full fit to $y^*$ is $b_{(i)}$. Its fitted value at point $i$ is therefore $\hat y_{(i)}$. But fitted values are
$Hy^*$, so

$$
\hat y_{(i)} = \sum_j h_{ij}y_j^* = \sum_j h_{ij}y_j - h_{ii}y_i + h_{ii}\hat y_{(i)} = \hat y_i - h_{ii}y_i + h_{ii}\hat y_{(i)} .
$$

Rearranging, $(1 - h_{ii})\hat y_{(i)} = \hat y_i - h_{ii}y_i$, and then
$(1 - h_{ii})(y_i - \hat y_{(i)}) = y_i - \hat y_i = e_i$. $\square$

High-leverage points ($h_{ii}$ near 1) have small ordinary residuals but large leave-one-out errors, which is exactly
the overfitting effect the table above showed. For the cars, PRESS is about 1.01 against SSE 0.53.

### Honest model selection

*Level: advanced.* Choosing a model by looking at the data and then reporting its p-values and intervals as if the
model had been fixed in advance is a form of the multiple testing problem of [Chapter 9](09-Hypothesis-Tests.md).
David Freedman (1983) showed by simulation that screening 50 pure-noise predictors for 100 observations, keeping
the promising ones and refitting, routinely produces a "significant" overall F test and several "significant"
coefficients. The honest options are to fix the model in advance, to select on one part of the data and estimate on
another (**sample splitting**), or to use methods of **post-selection inference** developed since the 2010s that
correct for the selection.

## 12.6 ANOVA as regression

### Comparing several means

A trial compares three fertilisers on 12 plots, 4 plots each (made-up data, yields in kilograms):

| fertiliser | yields | mean |
|---|---|---|
| A | 20, 22, 19, 23 | 21.0 |
| B | 25, 27, 24, 26 | 25.5 |
| C | 21, 24, 22, 25 | 23.0 |

Is there any difference among the three population means? Running three two-sample t tests would raise the multiple
testing problem. The **analysis of variance** (ANOVA) answers the single question $H_0: \mu_A = \mu_B = \mu_C$ with
one test.

### Splitting the variation

With $k$ groups, $n_j$ observations in group $j$, group means $\bar y_j$, grand mean $\bar y$ and $N$ observations in
all, the total variation splits as

$$
\underbrace{\sum_{j}\sum_{i}(y_{ij} - \bar y)^2}_{\text{SST}} = \underbrace{\sum_j n_j(\bar y_j - \bar y)^2}_{\text{SSB (between groups)}} + \underbrace{\sum_j\sum_i (y_{ij} - \bar y_j)^2}_{\text{SSW (within groups)}} ,
$$

(the cross term vanishes because deviations from a group mean add to zero within the group). If the means are equal,
the between-group variation should be comparable to the within-group variation, scaled by degrees of freedom. The
**F statistic** is

$$
F = \frac{\text{SSB}/(k - 1)}{\text{SSW}/(N - k)} ,
$$

which under $H_0$, with normal errors of equal variance, has the $F_{k-1, N-k}$ distribution.

**Example 5.** The grand mean is $278/12 \approx 23.17$.

*Step 1.* $\text{SSB} = 4\big((21 - 23.17)^2 + (25.5 - 23.17)^2 + (23 - 23.17)^2\big) = 122/3 \approx 40.67$.

*Step 2.* Within groups: A gives $1 + 1 + 4 + 4 = 10$, B gives $0.25 + 2.25 + 2.25 + 0.25 = 5$, C gives
$4 + 1 + 1 + 4 = 10$, so $\text{SSW} = 25$.

*Step 3.* $F = (40.67/2)/(25/9) = 20.33/2.778 \approx 7.32$ on 2 and 9 degrees of freedom. The 5 percent point of
$F_{2, 9}$ is 4.26, and the p-value is about 0.013.

There is evidence that the fertilisers differ. The F test does not say which; follow-up comparisons, with a
multiple-testing correction such as Bonferroni or John Tukey's method, address that.

### The same thing as a regression

Code the fertiliser with two dummies, $d_B$ and $d_C$, with A as baseline, and fit
$y = \beta_0 + \beta_1d_B + \beta_2d_C + \varepsilon$.

**Theorem.** In this regression the fitted value of every observation is its group mean, so $\hat\beta_0 = \bar y_A$,
$\hat\beta_1 = \bar y_B - \bar y_A$, $\hat\beta_2 = \bar y_C - \bar y_A$; the regression's SSE is SSW; its SSR is SSB;
and its overall F test is the ANOVA F test.

*Proof.* The column space of $X$ is spanned by the intercept and the two dummies, equivalently by the three group
indicators $d_A = 1 - d_B - d_C$, $d_B$, $d_C$. Any vector that is constant within each group is a combination of
these. The vector of group means is constant within groups, so it lies in the column space; and the residual
$y_{ij} - \bar y_j$ adds to zero within each group, so it is orthogonal to each group indicator, hence to the whole
column space. By the normal equations theorem of 12.1, the vector of group means is the projection $\hat y$. The
coefficients follow by reading off the three groups' fitted values. Then $\text{SSE} = \sum (y_{ij} - \bar y_j)^2 =
\text{SSW}$, $\text{SSR} = \text{SST} - \text{SSE} = \text{SSB}$, the model has $k - 1$ predictors and $N - k$ residual
degrees of freedom, and the two F statistics coincide. $\square$

**Check.** For the fertilisers the regression gives $\hat\beta_0 = 21$, $\hat\beta_1 = 4.5$, $\hat\beta_2 = 2$, and
$R^2 = \text{SSB}/\text{SST} = 40.67/65.67 \approx 0.62$.

This unification is why statistical software fits ANOVA, t tests and regression with the same machinery: a two-sample
pooled t test is an ANOVA with $k = 2$ (and then $F = t^2$), and **analysis of covariance** (ANCOVA) is a regression
with dummies plus a numerical predictor, like the trim-level model of 12.4. All are cases of the **general linear
model** $y = X\beta + \varepsilon$.

### A short history

Ronald Fisher developed the analysis of variance at Rothamsted Experimental Station in England, an agricultural
research centre where he worked from 1919 to 1933, to make sense of decades of field trial data and to design new
trials. It appeared in his *Statistical Methods for Research Workers* (1925), and its use in designed experiments,
with randomisation and blocking ([Chapter 17](17-Experimental-Design-and-Causal-Inference.md)), in *The Design of
Experiments* (1935). The matrix formulation of linear models that unifies ANOVA and regression became standard in the
mid-twentieth century, as statisticians such as Alexander Aitken (who wrote least squares in matrix form in the
1930s) and C. R. Rao developed it.

With **two** factors (say fertiliser and irrigation), a **two-way ANOVA** splits the variation into the two main
effects, their interaction, and error, again a regression with dummies for each factor and products of dummies for
the interaction.

## Check yourself

??? question "1. For the model $Y_i = \beta_0 + \beta_1x_{i1} + \beta_2x_{i2} + \varepsilon_i$ with $n = 4$ observations $(x_1, x_2) = (0, 1), (1, 0), (1, 1), (2, 3)$, write the design matrix $X$ and compute $X^{\mathsf T}X$."

    $X$ has rows $(1, 0, 1)$, $(1, 1, 0)$, $(1, 1, 1)$, $(1, 2, 3)$. Then $X^{\mathsf T}X$ has entries: $n = 4$;
    $\sum x_1 = 4$; $\sum x_2 = 5$; $\sum x_1^2 = 0 + 1 + 1 + 4 = 6$; $\sum x_1x_2 = 0 + 0 + 1 + 6 = 7$;
    $\sum x_2^2 = 1 + 0 + 1 + 9 = 11$. So $X^{\mathsf T}X = \begin{pmatrix} 4 & 4 & 5 \\ 4 & 6 & 7 \\ 5 & 7 & 11 \end{pmatrix}$.

??? question "2. Show that the hat matrix $H = X(X^{\mathsf T}X)^{-1}X^{\mathsf T}$ satisfies $HX = X$, and explain in words why this must be so."

    $HX = X(X^{\mathsf T}X)^{-1}(X^{\mathsf T}X) = X$. In words: $H$ projects onto the column space of $X$, and each
    column of $X$ already lies in that space, so projecting leaves it unchanged. Equivalently, if the data were
    exactly $y = Xb$, least squares would fit them perfectly.

??? question "3. Use $\operatorname{Cov}(\hat\beta) = \sigma^2(X^{\mathsf T}X)^{-1}$ in simple regression to recover $\operatorname{Var}(\hat\beta_1) = \sigma^2/S_{xx}$."

    Here $X^{\mathsf T}X = \begin{pmatrix} n & \sum x_i \\ \sum x_i & \sum x_i^2 \end{pmatrix}$, with determinant
    $n\sum x_i^2 - (\sum x_i)^2 = nS_{xx}$. The inverse of a 2-by-2 matrix $\begin{pmatrix} a & b \\ c & d\end{pmatrix}$ is
    $\frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a\end{pmatrix}$, so the bottom-right entry of the inverse is
    $n/(nS_{xx}) = 1/S_{xx}$. Hence $\operatorname{Var}(\hat\beta_1) = \sigma^2/S_{xx}$.

??? question "4. In the car model, interpret the coefficient $-0.431$ of distance in a sentence a car buyer would understand, and explain why it differs from the simple slope $-1.195$."

    Among cars of the same age, each extra 10 000 km on the odometer goes with an asking price about 431 dollars lower,
    on average. The simple slope compares cars that differ in distance without matching their age; since cars driven
    further also tend to be older, it includes part of the age effect. By the omitted-variable formula applied with
    the roles swapped, the simple slope equals $-0.431$ plus the age coefficient $-1.409$ times the slope of age on
    distance ($45.8/84.4 \approx 0.543$): $-0.431 - 0.765 \approx -1.195$.

??? question "5. Two predictors have correlation 0.95. What is the variance inflation factor, and by what factor are the standard errors of their coefficients multiplied, compared with uncorrelated predictors with the same spreads?"

    $\text{VIF} = 1/(1 - 0.95^2) = 1/0.0975 \approx 10.3$. Standard errors are multiplied by
    $\sqrt{10.3} \approx 3.2$. With correlation 0.99 the VIF would be about 50 and the factor about 7.

??? question "6. A study records the region of each customer: North, South, East, West. How many dummy variables go into a regression with an intercept? What goes wrong with four?"

    Three, with one region as baseline. With four, the dummies add up to the intercept column, so the columns of $X$
    are linearly dependent, $X^{\mathsf T}X$ is singular, and the coefficients are not uniquely determined (you can
    add any constant to all four region coefficients and subtract it from the intercept).

??? question "7. A fitted model is $\hat y = 10 + 2x + 5d + 1.5\,xd$, where $d$ is a 0/1 dummy. Write the two fitted lines. At what $x$ does the group difference equal 11?"

    For $d = 0$: $\hat y = 10 + 2x$. For $d = 1$: $\hat y = 15 + 3.5x$. The group difference is $5 + 1.5x$, which
    equals 11 when $x = 4$.

??? question "8. Why can a model with a higher $R^2$ predict new data worse? Use the polynomial table of 12.5."

    $R^2$ measures fit to the data used for fitting, and a larger model can always fit those data at least as well,
    including their noise. The degree-7 polynomial has the highest $R^2$ (0.883) but by far the worst leave-one-out
    error (PRESS about 1448, against 15.35 for degree 2), because it bends to pass near each noisy point and swings
    wildly in between.

??? question "9. A point has residual $e_i = 0.5$ and leverage $h_{ii} = 0.75$. What is its leave-one-out prediction error? What if $h_{ii} = 0.1$?"

    $0.5/(1 - 0.75) = 2$. With $h_{ii} = 0.1$ it is $0.5/0.9 \approx 0.56$. A high-leverage point pulls the fit towards
    itself, so its ordinary residual understates how badly it would be predicted from the others.

??? question "10. Compute the ANOVA F statistic for three groups of three made-up values: $\{4, 5, 6\}$, $\{6, 7, 8\}$, $\{9, 10, 11\}$."

    Group means 5, 7, 10; grand mean $66/9 = 22/3 \approx 7.33$. $\text{SSB} = 3\big((5 - 7.33)^2 + (7 - 7.33)^2 +
    (10 - 7.33)^2\big) = 3(5.444 + 0.111 + 7.111) = 38$. Each group has deviations $-1, 0, 1$, so $\text{SSW} = 3 \times 2 = 6$.
    $F = (38/2)/(6/6) = 19$ on 2 and 6 degrees of freedom, well above the 5 percent point 5.14 ($p \approx 0.0025$).

??? question "11. (Harder.) Show that $\hat\beta$ and the residual vector $e$ are uncorrelated: $\operatorname{Cov}(\hat\beta, e) = 0$."

    $\hat\beta = Ay$ with $A = (X^{\mathsf T}X)^{-1}X^{\mathsf T}$, and $e = (I - H)y$. For fixed matrices,
    $\operatorname{Cov}(Ay, By) = A\operatorname{Cov}(y)B^{\mathsf T} = \sigma^2AB^{\mathsf T}$. Here
    $A(I - H)^{\mathsf T} = A(I - H) = A - AH$, and $AH = (X^{\mathsf T}X)^{-1}X^{\mathsf T}X(X^{\mathsf T}X)^{-1}X^{\mathsf T}
    = A$. So the covariance is 0. Under normality, uncorrelated jointly normal vectors are independent, which is why
    $s^2$ is independent of $\hat\beta$ and the t statistics have t distributions.

??? question "12. (Harder.) Prove that in any regression with an intercept, $R^2$ equals the squared correlation between $y$ and the fitted values $\hat y$."

    With an intercept, $\sum e_i = 0$, so $\bar{\hat y} = \bar y$, and $e$ is orthogonal to $\hat y - \bar y\mathbf 1$
    (which lies in the column space). Write $u = y - \bar y\mathbf 1$ and $v = \hat y - \bar y\mathbf 1$, so $u = v + e$
    with $v \perp e$. Then $u^{\mathsf T}v = |v|^2$, and the squared correlation is
    $\frac{(u^{\mathsf T}v)^2}{|u|^2|v|^2} = \frac{|v|^4}{|u|^2|v|^2} = \frac{|v|^2}{|u|^2} = \frac{\text{SSR}}{\text{SST}} = R^2$.

## What you learned

- The multiple regression model is $y = X\beta + \varepsilon$; matrix products, transposes, inverses, rank and
  trace are all the algebra it needs.
- Least squares is the perpendicular projection of $y$ onto the column space of $X$; the normal equations
  $X^{\mathsf T}X\hat\beta = X^{\mathsf T}y$ say the residual is orthogonal to every predictor, and
  $\hat\beta = (X^{\mathsf T}X)^{-1}X^{\mathsf T}y$.
- $\hat\beta$ is unbiased with covariance $\sigma^2(X^{\mathsf T}X)^{-1}$, $s^2 = \text{SSE}/(n - p)$ because
  $\operatorname{tr}(H) = p$, and Gauss-Markov makes least squares the best linear unbiased estimator.
- A coefficient compares units that differ in one predictor but share the others; omitting a correlated predictor
  shifts a slope by $\hat\beta_2\hat\delta$; collinearity inflates variances by $\text{VIF} = 1/(1 - R_j^2)$.
- Categorical predictors enter as $m - 1$ dummies; interactions let slopes differ between groups.
- $R^2$ never falls when predictors are added, so model choice uses adjusted $R^2$, AIC or BIC, nested F tests,
  and above all cross-validation, with the shortcut $y_i - \hat y_{(i)} = e_i/(1 - h_{ii})$.
- One-way ANOVA is a regression on group dummies: fitted values are group means and the F tests coincide.

**Next:** [Chapter 13](13-Likelihood-Theory.md), the general theory behind estimation and testing: likelihood,
Fisher information, the Cramér-Rao bound, likelihood ratio tests and the Neyman-Pearson lemma.

## Further reading

- A.-M. Legendre, *Nouvelles méthodes pour la détermination des orbites des comètes*, 1805 (the appendix that
  introduced least squares).
- R. A. Fisher, *Statistical Methods for Research Workers*, 1925, and *The Design of Experiments*, 1935.
- R. Frisch and F. V. Waugh, "Partial time regressions as compared with individual trends", *Econometrica* 1, 1933.
- M. C. Lovell, "Seasonal adjustment of economic time series and multiple regression analysis", *Journal of the
  American Statistical Association* 58, 1963.
- M. Stone, "Cross-validatory choice and assessment of statistical predictions", *Journal of the Royal Statistical
  Society B* 36, 1974.
- H. Akaike, "A new look at the statistical model identification", *IEEE Transactions on Automatic Control* 19, 1974.
- D. A. Freedman, "A note on screening regression equations", *The American Statistician* 37, 1983.
- S. R. Searle, *Linear Models*, 1971 (the matrix theory in full).
- C. R. Rao, *Linear Statistical Inference and Its Applications*, 2nd ed., 1973.
- S. Weisberg, *Applied Linear Regression*, 4th ed., 2014.
- A. Gelman, J. Hill and A. Vehtari, *Regression and Other Stories*, 2020 (interpretation, interactions and
  causal cautions, with many real examples).
- T. Hastie, R. Tibshirani and J. Friedman, *The Elements of Statistical Learning*, 2nd ed., 2009 (chapter 3 on
  linear methods, chapter 7 on cross-validation).
- On this site: the U of T guides on [linear transformations](../../uoft/MAT240H1/unit04.md),
  [rank-nullity and matrices](../../uoft/MAT240H1/unit05.md), [systems and elementary
  operations](../../uoft/MAT240H1/unit07.md) and [orthogonality and Gram-Schmidt](../../uoft/MAT247H1/unit02.md);
  the Topics lesson on [non-linear models](../../topics/statistics/level-7/06-non-linear-models.md); the
  [Algebra book](../algebra/index.md); this book's [index](index.md).
