# 11. Linear regression

*In [Chapter 4](04-Relationships-and-Correlation.md) you fitted a straight line to a scatter plot by least squares
and used it to describe the data in hand. Now the questions are about the world beyond the sample. If we collected
new data, how different would the slope be? Is the apparent trend real, or could chance have drawn it? How
precisely can we predict the average response at a given input, and how precisely one new individual's response? In
this chapter you will set up the simple linear regression model with its assumptions, find the sampling
distributions of the least squares estimates (with full proofs), test and estimate slopes, measure fit with
$R^2$, check the assumptions by studying residuals, meet the subtle phenomenon that gave regression its name, and
learn the difference between a confidence band and a prediction band.*

!!! abstract "In this chapter"
    **You will learn:**

    - the simple linear regression model and its four assumptions, and what each one buys
    - the least squares estimates as weighted sums of the responses, their means, variances and normal sampling
      distributions (proved), and why $\sigma^2$ is estimated with $n - 2$
    - t tests and confidence intervals for the slope and intercept
    - the decomposition of variation and $R^2$, with a proof that $R^2 = r^2$
    - residual plots, leverage, outliers and influence
    - regression to the mean, from Galton's heights to modern mistakes
    - confidence intervals for a mean response and prediction intervals for a new response

    **You need:** [Chapter 4](04-Relationships-and-Correlation.md) (correlation and the least squares line),
    [Chapter 8](08-Confidence-Intervals.md) and [Chapter 9](09-Hypothesis-Tests.md) (t intervals and tests), and the
    rules for means and variances of sums from the Probability book
    ([Chapter 6](../probability/06-Expectation-and-Variance.md) and
    [Chapter 11](../probability/11-Joint-Distributions.md)). Calculus is used once, to find the least squares line
    (partial derivatives set to zero). Gentler versions: the Topics lessons on the
    [correlation coefficient](../../topics/statistics/level-7/04-correlation-coefficient.md) and
    [least-squares regression](../../topics/statistics/level-7/05-least-squares.md).

    **Levels:** 11.1 is intermediate; 11.2 is advanced; 11.3 and 11.4 are intermediate with advanced proofs; 11.5 is
    intermediate; 11.6 is intermediate; 11.7 is intermediate to advanced.

## 11.1 The model and its assumptions

### From a line through points to a model of a process

Eight people learning to touch-type report how many hours a week they practise ($x$) and are then given a typing
test, scored in words per minute ($y$). The data are made up for this chapter.

| learner | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| practice $x$ (hours per week) | 2 | 4 | 5 | 6 | 8 | 9 | 10 | 12 |
| score $y$ (words per minute) | 55 | 60 | 59 | 66 | 68 | 71 | 72 | 81 |

A scatter plot shows a clear upward trend. The least squares line of [Chapter 4](04-Relationships-and-Correlation.md)
describes it. But a different eight learners would give a different line. To say how different, we need a
**model**: a description of the random process that produced the data.

**The simple linear regression model.** For $i = 1, \dots, n$,

$$
Y_i = \beta_0 + \beta_1 x_i + \varepsilon_i ,
$$

where:

- $x_i$ is the value of the **explanatory variable** (or predictor) for unit $i$, treated as a fixed known number;
- $Y_i$ is the **response**, a random variable;
- $\beta_0$ (the **intercept**) and $\beta_1$ (the **slope**) are unknown constants, the **parameters** of the
  **population regression line** $\beta_0 + \beta_1 x$;
- $\varepsilon_i$ is the **error** (or noise): everything that makes unit $i$ differ from the line, from
  measurement error to all the influences we did not record.

The word "simple" means one predictor; [Chapter 12](12-Multiple-Regression.md) allows many. The word "linear"
means linear in the parameters $\beta_0, \beta_1$, which, as we will see, still allows curves in $x$.

### The four assumptions

The standard assumptions about the errors are often remembered by the letters **LINE**:

1. **Linearity**: the errors have mean zero, $E[\varepsilon_i] = 0$. Equivalently, the mean of $Y$ at each $x$ lies
   exactly on the line: $E[Y_i] = \beta_0 + \beta_1x_i$.
2. **Independence**: the errors $\varepsilon_1, \dots, \varepsilon_n$ are independent.
3. **Normality**: each error is normally distributed.
4. **Equal variance**: all errors have the same variance $\sigma^2$, whatever $x$ is. (The technical name is
   **homoscedasticity**, Greek for "same scatter".)

In one line: $\varepsilon_1, \dots, \varepsilon_n$ are independent $N(0, \sigma^2)$. So the model has three unknown
parameters: $\beta_0$, $\beta_1$ and $\sigma$.

Picture it: at each $x$ there is a bell curve of possible $Y$ values, centred on the line, all with the same width;
nature picks one $Y$ from each bell, independently.

### What each assumption buys

The assumptions are not equally important, and it pays to know which result needs which.

- Linearity alone makes the least squares estimates **unbiased** (11.2).
- Linearity, independence and equal variance give the **variance formulas** for the estimates, and the
  Gauss-Markov theorem ([Chapter 12](12-Multiple-Regression.md)): least squares is the best linear unbiased
  estimator.
- Normality, in addition, makes the t tests and intervals **exact** for any $n$. Without it they are approximately
  right for large $n$, by a central limit theorem, since the estimates are weighted sums of many independent errors.

The most dangerous failures are of linearity (the line is the wrong shape, so everything built on it is biased)
and independence (for example, measurements over time, [Chapter 16](16-Time-Series.md), where neighbouring errors
are alike, which makes standard errors too small). Non-normality is usually the least serious for large $n$, unless
it comes as a few wild outliers.

### Interpreting the slope

$\beta_1$ is the **change in the mean response for a one-unit increase in $x$**. In the typing data, it is the
difference in average score between learners who practise one hour a week more. Two warnings:

- It is a statement about **means**, not individuals. A learner who adds an hour of practice will not gain exactly
  $\beta_1$ words per minute.
- In observational data it is a statement about **comparison**, not intervention. Learners who practise more may
  also be more motivated or have better keyboards. Whether *making* someone practise more would raise their score by
  $\beta_1$ is a causal question ([Chapter 4](04-Relationships-and-Correlation.md), and in depth
  [Chapter 17](17-Experimental-Design-and-Causal-Inference.md)). If the $x$ values were assigned at random, as in an
  experiment, the causal reading would be justified.

## 11.2 Least squares estimates and their sampling distributions

*Level: advanced.*

### The estimates

As in [Chapter 4](04-Relationships-and-Correlation.md), the least squares estimates $\hat\beta_0, \hat\beta_1$
minimise the sum of squared vertical distances

$$
S(b_0, b_1) = \sum_{i=1}^n (y_i - b_0 - b_1x_i)^2 .
$$

Setting the partial derivatives with respect to $b_0$ and $b_1$ to zero gives the **normal equations**

$$
\sum (y_i - b_0 - b_1x_i) = 0, \qquad \sum x_i(y_i - b_0 - b_1x_i) = 0,
$$

and solving them gives

$$
\hat\beta_1 = \frac{S_{xy}}{S_{xx}}, \qquad \hat\beta_0 = \bar y - \hat\beta_1\bar x,
$$

where $S_{xx} = \sum (x_i - \bar x)^2$ and $S_{xy} = \sum (x_i - \bar x)(y_i - \bar y)$. (The function $S$ is a sum of
squares of linear functions, a convex bowl, so this stationary point is the minimum.) The **fitted values** are
$\hat y_i = \hat\beta_0 + \hat\beta_1x_i$ and the **residuals** are $e_i = y_i - \hat y_i$. The normal equations say
exactly that $\sum e_i = 0$ and $\sum x_ie_i = 0$.

**Example 1 (typing).** Here $n = 8$, $\bar x = 56/8 = 7$, $\bar y = 532/8 = 66.5$.

*Step 1.* The deviations of $x$ from 7 are $-5, -3, -2, -1, 1, 2, 3, 5$, so $S_{xx} = 25 + 9 + 4 + 1 + 1 + 4 + 9 + 25 = 78$.

*Step 2.* The deviations of $y$ from 66.5 are $-11.5, -6.5, -7.5, -0.5, 1.5, 4.5, 5.5, 14.5$. Multiplying
pairwise and adding: $57.5 + 19.5 + 15 + 0.5 + 1.5 + 9 + 16.5 + 72.5 = 192 = S_{xy}$.

*Step 3.* $\hat\beta_1 = 192/78 = 32/13 \approx 2.462$ and $\hat\beta_0 = 66.5 - 2.462 \times 7 \approx 49.27$.

The fitted line is $\hat y = 49.27 + 2.462x$: each extra hour of weekly practice goes with about 2.5 more words per
minute, on average. The residuals are

| $x$ | 2 | 4 | 5 | 6 | 8 | 9 | 10 | 12 |
|---|---|---|---|---|---|---|---|---|
| $\hat y$ | 54.19 | 59.12 | 61.58 | 64.04 | 68.96 | 71.42 | 73.88 | 78.81 |
| $e$ | 0.81 | 0.88 | −2.58 | 1.96 | −0.96 | −0.42 | −1.88 | 2.19 |

Check: the residuals add to 0 (up to rounding), as the first normal equation demands.

### The slope is a weighted sum of the responses

The key to everything that follows is to write $\hat\beta_1$ as a linear combination of the $Y_i$. Since
$\sum (x_i - \bar x) = 0$, we have $\sum (x_i - \bar x)\bar Y = 0$, and so

$$
\hat\beta_1 = \frac{\sum (x_i - \bar x)(Y_i - \bar Y)}{S_{xx}} = \sum_{i=1}^n c_i Y_i, \qquad c_i = \frac{x_i - \bar x}{S_{xx}} .
$$

The weights $c_i$ are fixed numbers (they depend only on the $x$'s) with three properties, each easy to check:

$$
\sum c_i = 0, \qquad \sum c_i x_i = 1, \qquad \sum c_i^2 = \frac{1}{S_{xx}} .
$$

(For the second: $\sum (x_i - \bar x)x_i = \sum (x_i - \bar x)(x_i - \bar x) = S_{xx}$, again because
$\sum (x_i - \bar x)\bar x = 0$.) Notice that points far from $\bar x$ get the largest weights: they have the most
leverage on the slope, a point we return to in 11.5.

### Unbiasedness

**Theorem.** Under assumption 1 (linearity), $E[\hat\beta_1] = \beta_1$ and $E[\hat\beta_0] = \beta_0$.

*Proof.* By linearity of expectation and the properties of the $c_i$,

$$
E[\hat\beta_1] = \sum c_i E[Y_i] = \sum c_i(\beta_0 + \beta_1x_i) = \beta_0\sum c_i + \beta_1\sum c_ix_i = 0 + \beta_1 .
$$

Then $E[\hat\beta_0] = E[\bar Y] - \bar x\,E[\hat\beta_1] = (\beta_0 + \beta_1\bar x) - \bar x\beta_1 = \beta_0$. $\square$

### Variances

**Theorem.** Under assumptions 1, 2 and 4,

$$
\operatorname{Var}(\hat\beta_1) = \frac{\sigma^2}{S_{xx}}, \qquad
\operatorname{Var}(\hat\beta_0) = \sigma^2\left(\frac1n + \frac{\bar x^2}{S_{xx}}\right), \qquad
\operatorname{Cov}(\bar Y, \hat\beta_1) = 0 .
$$

*Proof.* The $Y_i$ are independent with common variance $\sigma^2$, so the variance of a weighted sum is the sum of
squared weights times $\sigma^2$:
$\operatorname{Var}(\hat\beta_1) = \sigma^2\sum c_i^2 = \sigma^2/S_{xx}$. For the covariance, $\bar Y = \sum \frac1n Y_i$,
and for independent terms $\operatorname{Cov}(\sum a_iY_i, \sum b_iY_i) = \sigma^2\sum a_ib_i$, so
$\operatorname{Cov}(\bar Y, \hat\beta_1) = \sigma^2\sum \frac1n c_i = 0$. Finally
$\hat\beta_0 = \bar Y - \bar x\hat\beta_1$, and since the covariance term vanishes,
$\operatorname{Var}(\hat\beta_0) = \frac{\sigma^2}{n} + \bar x^2\frac{\sigma^2}{S_{xx}}$. $\square$

Read the slope formula: the slope is estimated precisely when the noise $\sigma$ is small and when $S_{xx}$ is large,
that is, when the $x$ values are **spread out**. If you can choose the $x$ values (in an experiment), spreading them
widely sharpens the slope; this is a first lesson in experimental design. (But if all the $x$'s sit at two extremes,
you can no longer see whether the relation is really a straight line.)

### Normality

Under all four assumptions, $\hat\beta_1$ and $\hat\beta_0$ are linear combinations of independent normal variables,
so they are normal:

$$
\hat\beta_1 \sim N\!\left(\beta_1, \frac{\sigma^2}{S_{xx}}\right), \qquad
\hat\beta_0 \sim N\!\left(\beta_0, \sigma^2\left(\frac1n + \frac{\bar x^2}{S_{xx}}\right)\right).
$$

### Estimating $\sigma^2$ with $n - 2$

$\sigma^2$ is the variance of the errors, and the residuals are our stand-ins for the errors. The **error sum of
squares** (or residual sum of squares) is $\text{SSE} = \sum e_i^2$, and the estimate is

$$
s^2 = \frac{\text{SSE}}{n - 2} .
$$

The divisor $n - 2$ (not $n$, and not $n - 1$ as in [Chapter 7](07-Estimation.md)) is there because the residuals
satisfy two constraints ($\sum e_i = 0$ and $\sum x_ie_i = 0$), so only $n - 2$ of them are free. Two parameters were
estimated, and each costs one degree of freedom. Here is the precise statement.

**Theorem.** Under assumptions 1, 2 and 4, $E[\text{SSE}] = (n-2)\sigma^2$, so $s^2$ is unbiased for $\sigma^2$.

*Proof.* Each fitted value is a weighted sum of the responses. From $\hat Y_i = \bar Y + \hat\beta_1(x_i - \bar x)$,

$$
\hat Y_i = \sum_j h_{ij}Y_j, \qquad h_{ij} = \frac1n + \frac{(x_i - \bar x)(x_j - \bar x)}{S_{xx}} .
$$

The numbers $h_{ij}$ are called **hat values** (they "put the hat on $Y$"); $h_{ii}$ is the **leverage** of point
$i$. A short computation, using $\sum_j (x_j - \bar x) = 0$ and $\sum_j (x_j - \bar x)^2 = S_{xx}$, shows that
$\sum_j h_{ij}^2 = h_{ii}$. Now:

- $E[e_i] = 0$, since both $Y_i$ and $\hat Y_i$ have mean $\beta_0 + \beta_1x_i$ (by unbiasedness).
- $\operatorname{Var}(\hat Y_i) = \sigma^2\sum_j h_{ij}^2 = \sigma^2h_{ii}$ and
  $\operatorname{Cov}(Y_i, \hat Y_i) = \sigma^2h_{ii}$.
- So $\operatorname{Var}(e_i) = \operatorname{Var}(Y_i) - 2\operatorname{Cov}(Y_i, \hat Y_i) + \operatorname{Var}(\hat Y_i) = \sigma^2(1 - h_{ii})$.

Therefore $E[\text{SSE}] = \sum E[e_i^2] = \sum \operatorname{Var}(e_i) = \sigma^2\big(n - \sum_i h_{ii}\big)$. Finally,
$\sum_i h_{ii} = n \cdot \frac1n + \frac{\sum (x_i - \bar x)^2}{S_{xx}} = 1 + 1 = 2$. So $E[\text{SSE}] = (n-2)\sigma^2$. $\square$

Under normality more is true, by the same rotation argument as in [Chapter 9](09-Hypothesis-Tests.md) (section 9.4):
$\text{SSE}/\sigma^2 \sim \chi^2_{n-2}$, independent of $(\hat\beta_0, \hat\beta_1)$. The proof is cleanest in the
matrix language of [Chapter 12](12-Multiple-Regression.md).

The residuals also tell us something by the way: $\operatorname{Var}(e_i) = \sigma^2(1 - h_{ii})$ is *smaller* than
$\sigma^2$, and smallest for high-leverage points, because the line is pulled towards them. This matters for
diagnostics.

**Example 2.** For the typing data, the squared residuals sum to $\text{SSE} = 278/13 \approx 21.38$, so
$s^2 = 21.38/6 \approx 3.564$ and $s \approx 1.888$ words per minute. A typical learner is within about 2 words per
minute of the line.

<figure class="play" data-play="linefit"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Tap to add points; the least squares line and R² update at once.</figcaption></figure>

## 11.3 Inference on slopes

### The t statistic

Replacing the unknown $\sigma$ by $s$ in the standard deviation of $\hat\beta_1$ gives its **standard error**

$$
\operatorname{SE}(\hat\beta_1) = \frac{s}{\sqrt{S_{xx}}} ,
$$

and, exactly as with Student's t for a mean, the facts in 11.2 give

$$
T = \frac{\hat\beta_1 - \beta_1}{\operatorname{SE}(\hat\beta_1)} \sim t_{n-2} .
$$

(Numerator: a standard normal times $\sigma/\sqrt{S_{xx}}$. Denominator: $\sigma/\sqrt{S_{xx}}$ times
$\sqrt{\chi^2_{n-2}/(n-2)}$, independent of the numerator. That ratio is the definition of $t_{n-2}$.)

From this follow, by the usual recipe:

- a **confidence interval** for the slope: $\hat\beta_1 \pm t_{\alpha/2, n-2}\operatorname{SE}(\hat\beta_1)$;
- a **test** of $H_0: \beta_1 = 0$ ("no linear relation") with statistic $t = \hat\beta_1/\operatorname{SE}(\hat\beta_1)$
  on $n - 2$ degrees of freedom.

The same works for the intercept with $\operatorname{SE}(\hat\beta_0) = s\sqrt{1/n + \bar x^2/S_{xx}}$, though the
intercept is often of little interest (it is the mean response at $x = 0$, which may be far from the data, or
meaningless).

**Example 3 (typing).**

*Step 1.* $\operatorname{SE}(\hat\beta_1) = 1.888/\sqrt{78} \approx 0.2138$.

*Step 2.* $t = 2.462/0.2138 \approx 11.5$ on 6 degrees of freedom; the two-sided p-value is about $0.00003$.

*Step 3.* With $t_{0.025, 6} = 2.447$, the 95 percent interval is $2.462 \pm 2.447 \times 0.2138$, that is,
from 1.94 to 2.98 words per minute per weekly hour.

*In words:* there is very strong evidence of a positive linear relation between practice and score in the population
these learners come from, and each extra weekly hour goes with somewhere between about 2 and 3 more words per minute on
average. Check: the interval excludes 0, consistent with the tiny p-value (duality, [Chapter 9](09-Hypothesis-Tests.md)).

### Testing the slope is testing the correlation

**Theorem.** The t statistic for $H_0: \beta_1 = 0$ can be written in terms of the sample correlation $r$ alone:

$$
t = \frac{r\sqrt{n-2}}{\sqrt{1 - r^2}} .
$$

*Proof.* We use two facts from 11.4 (proved there): $\hat\beta_1 = r\sqrt{S_{yy}/S_{xx}}$ and
$\text{SSE} = (1 - r^2)S_{yy}$, where $S_{yy} = \sum (y_i - \bar y)^2$. Then

$$
t = \frac{\hat\beta_1\sqrt{S_{xx}}}{s} = \frac{r\sqrt{S_{yy}}}{\sqrt{(1 - r^2)S_{yy}/(n - 2)}} = \frac{r\sqrt{n-2}}{\sqrt{1-r^2}} . \qquad\square
$$

So "is the slope zero?" and "is the population correlation zero?" are the same test. Check with the typing data:
$r \approx 0.9781$, and $0.9781\sqrt6/\sqrt{1 - 0.9567} \approx 11.5$, the same $t$.

### Significance is not strength

With large samples, tiny slopes are "highly significant". With 10 000 observations and $r = 0.03$, the formula gives
$t \approx 3.0$ and $p \approx 0.003$, yet $x$ explains less than 0.1 percent of the variation in $y$ (11.4). As
always, report the estimate and its interval, not just the p-value.

### Try it in Python

```python
import statistics as st
from math import sqrt

x = [2, 4, 5, 6, 8, 9, 10, 12]
y = [55, 60, 59, 66, 68, 71, 72, 81]
fit = st.linear_regression(x, y)            # Python 3.10 or later
b1, b0 = fit.slope, fit.intercept
res = [yi - (b0 + b1 * xi) for xi, yi in zip(x, y)]
s = sqrt(sum(e * e for e in res) / (len(x) - 2))
Sxx = sum((xi - st.mean(x)) ** 2 for xi in x)
print(round(b1, 3), round(b0, 2), round(s / sqrt(Sxx), 4))   # 2.462 49.27 0.2138
```

## 11.4 R squared

### Splitting the variation

How much of the variation in $y$ does the line account for? Measure the total variation by the **total sum of
squares** $\text{SST} = S_{yy} = \sum (y_i - \bar y)^2$. Each deviation splits in two:

$$
y_i - \bar y = (\hat y_i - \bar y) + (y_i - \hat y_i),
$$

the part explained by the line, plus the residual.

**Theorem.** The squares add up as well:

$$
\underbrace{\sum (y_i - \bar y)^2}_{\text{SST}} = \underbrace{\sum (\hat y_i - \bar y)^2}_{\text{SSR}} + \underbrace{\sum (y_i - \hat y_i)^2}_{\text{SSE}} .
$$

Here SSR is the **regression sum of squares** (variation explained by the line).

*Proof.* Square the split and add over $i$. The squares give SSR and SSE, and the cross term is
$2\sum (\hat y_i - \bar y)e_i$. Since $\hat y_i - \bar y = \hat\beta_1(x_i - \bar x)$, the cross term is
$2\hat\beta_1\big(\sum x_ie_i - \bar x\sum e_i\big) = 0$ by the two normal equations. $\square$

Geometrically, this is Pythagoras: the vector of explained deviations and the vector of residuals are perpendicular.
[Chapter 12](12-Multiple-Regression.md) makes that picture precise.

**Definition.** The **coefficient of determination** is

$$
R^2 = \frac{\text{SSR}}{\text{SST}} = 1 - \frac{\text{SSE}}{\text{SST}},
$$

the fraction of the variation in $y$ explained by the linear relation with $x$. It lies between 0 (the line is flat
and explains nothing) and 1 (every point is on the line).

### $R^2$ equals $r^2$

**Theorem.** In simple linear regression, $R^2 = r^2$, where $r = S_{xy}/\sqrt{S_{xx}S_{yy}}$ is the correlation
coefficient. Also $\hat\beta_1 = r\sqrt{S_{yy}/S_{xx}}$ and $\text{SSE} = (1 - r^2)S_{yy}$.

*Proof.* The formula for the slope follows from $\hat\beta_1 = S_{xy}/S_{xx}$ by writing
$S_{xy} = r\sqrt{S_{xx}S_{yy}}$. Then

$$
\text{SSR} = \sum \hat\beta_1^2(x_i - \bar x)^2 = \hat\beta_1^2S_{xx} = r^2\frac{S_{yy}}{S_{xx}}S_{xx} = r^2S_{yy},
$$

so $R^2 = \text{SSR}/\text{SST} = r^2$, and $\text{SSE} = \text{SST} - \text{SSR} = (1 - r^2)S_{yy}$. $\square$

**Example 4.** For the typing data, $S_{yy} = 494$, $\text{SSE} \approx 21.38$, so $R^2 = 1 - 21.38/494 \approx 0.957$.
Check: $r = 192/\sqrt{78 \times 494} \approx 0.978$ and $r^2 \approx 0.957$. Practice time explains about 96 percent of
the variation in scores among these eight learners. (Made-up data are often tidier than real data.)

### What $R^2$ does not tell you

- **It does not say the model is right.** Anscombe's quartet ([Chapter 2](02-Pictures-of-Data.md)) consists of four
  datasets with the same fitted line ($\hat y = 3 + 0.5x$, to two decimals), the same correlation (about 0.816) and
  hence the same $R^2$ (about 0.67), yet one is a curve, one is a perfect line spoiled by one outlier, and one has all
  its slope coming from a single point. Only a plot reveals this.
- **It depends on the range of $x$.** Sample only learners who practise between 5 and 6 hours and $R^2$ will be
  small, though the relation is the same: $S_{xx}$ shrinks while the noise stays.
- **A low $R^2$ is not a failed study.** In medicine and social science a variable explaining 5 percent of the
  variation can matter a great deal, and the slope may be estimated precisely.
- **It never decreases when you add predictors**, even useless ones, which is why [Chapter 12](12-Multiple-Regression.md)
  needs adjusted $R^2$ and cross-validation.

## 11.5 Residual diagnostics

### Residuals as the evidence

Every assumption in 11.1 is about the errors, which we never see. The residuals are our evidence about them. If the
model is right, the residuals should look like patternless noise. Patterns in the residuals are messages from the
data that the model is wrong.

The basic tool is the **residual plot**: residuals $e_i$ on the vertical axis against fitted values $\hat y_i$ (or
against $x_i$, which in simple regression gives the same picture, reflected if the slope is negative). What to look
for:

| pattern in the residual plot | what it suggests | common remedy |
|---|---|---|
| a horizontal band of even width around 0 | the model looks fine | none |
| a curve (U shape or arch) | the relation is not linear | add $x^2$, or transform $x$ or $y$ |
| a funnel (spread grows with $\hat y$) | unequal variances | transform $y$ (often a logarithm), or weighted least squares |
| one or two points far from the band | outliers | check the data; report results with and without |
| a wave when plotted in time order | dependent errors | time series methods, [Chapter 16](16-Time-Series.md) |

To check normality, a **normal quantile plot** (or Q-Q plot) puts the sorted residuals against the values expected
from a normal sample of the same size. Points close to a straight line suggest normality; an S shape suggests
heavy or light tails; a bend at one end suggests skewness.

For the typing data, the residuals $0.81, 0.88, -2.58, 1.96, -0.96, -0.42, -1.88, 2.19$ show no clear pattern
against $x$; with only 8 points, though, we could not detect anything subtle. Small samples have little power to
reveal broken assumptions, which is no proof that they hold.

### Transformations

Many relations become linear after a transformation. If $y$ grows by a constant *percentage* for each unit of
$x$ (as with compound growth), then $\log y$ is linear in $x$. If $y$ is proportional to a power of $x$ (as with many
laws in physics and biology), then $\log y$ is linear in $\log x$, with the power as its slope. The model
$Y = \beta_0 + \beta_1x + \beta_2x^2 + \varepsilon$ is still a *linear* model (linear in the $\beta$'s), fitted
by the methods of [Chapter 12](12-Multiple-Regression.md). A logarithm of $y$ also often cures a funnel-shaped
residual plot, because it turns multiplicative noise into additive noise.

### Leverage, outliers and influence

Three different ideas are often confused.

- An **outlier** is a point whose *response* is far from the line: a large residual.
- A **high-leverage point** is one whose *$x$ value* is far from $\bar x$. Its leverage is
  $h_{ii} = \frac1n + \frac{(x_i - \bar x)^2}{S_{xx}}$ (from 11.2). Leverages always lie between $1/n$ and 1 and add
  up to 2, so their average is $2/n$; a common rule of thumb flags points with leverage above two or three times
  that average.
- An **influential point** is one whose removal would change the fitted line a lot. Influence needs both: a
  sizeable residual *and* some leverage.

Because $\operatorname{Var}(e_i) = \sigma^2(1 - h_{ii})$, raw residuals of high-leverage points are artificially small
(the line bends towards them). Dividing each residual by its own estimated standard deviation gives the
**standardised residual** $r_i = e_i/(s\sqrt{1 - h_{ii}})$, which puts all points on a common scale; values beyond
about $\pm 2$ deserve a look, beyond $\pm 3$ almost always.

A single number combining residual and leverage is **Cook's distance** (R. Dennis Cook, 1977), which for a model
with $p$ parameters ($p = 2$ here) is

$$
D_i = \frac{e_i^2}{p\,s^2}\cdot\frac{h_{ii}}{(1 - h_{ii})^2} .
$$

It measures how far all the fitted values move when point $i$ is deleted. Values near or above 1 indicate a point
that is driving the fit.

**Example 5.** In the typing data, $S_{xx} = 78$ and the leverages are $h = 0.125 + (x - 7)^2/78$: they are
$0.446$ for $x = 2$ and $x = 12$, down to $0.138$ for $x = 6$ and $x = 8$, and they add up to 2. The learner with
$x = 12$ has residual 2.19, standardised residual $2.19/(1.888\sqrt{1 - 0.446}) \approx 1.56$, and Cook's distance
$\frac{2.19^2}{2 \times 3.564}\cdot\frac{0.446}{0.554^2} \approx 0.98$. That learner is the most influential point:
not an outlier, but an end point with a moderately large residual. With 8 points, any end point matters.

**What to do with an outlier.** First check whether it is an error (a typing slip, a broken instrument). If so,
correct or remove it and say so. If it is real, it is information: maybe the model is wrong for that kind of unit.
Never delete a real point just because it spoils the fit; report the analysis with and without it, and let the
reader see the difference.

## 11.6 Regression to the mean

### Galton's discovery

The word "regression" has a strange history. Francis Galton, a cousin of Charles Darwin, studied heredity. In his
1886 paper "Regression towards mediocrity in hereditary stature", he analysed the adult heights of 928 children
from 205 families together with the heights of their parents. To put men and women on one scale he multiplied
women's heights by 1.08, and he summarised the two parents by their average, the **mid-parent** height.

He found that children of unusually tall parents were, on average, tall, but less tall than their parents; and
children of unusually short parents were short, but less short. Measured from the overall mean, the children's
average deviation was about two thirds of the mid-parent's deviation. Galton called this "regression towards
mediocrity" (meaning towards the average). The line through the children's averages became the "regression line",
and the name stuck to the whole method, though it now has nothing to do with going backwards.

Galton at first looked for a biological cause. But the effect is statistical, and it appears whenever two
measurements are imperfectly correlated.

### Why it happens

Standardise both variables: $z_x = (x - \bar x)/s_x$ and $z_y = (y - \bar y)/s_y$. The least squares line in these
units is

$$
\hat z_y = r\,z_x ,
$$

because the slope $\hat\beta_1 = rs_y/s_x$ (from 11.4) becomes $r$ when both standard deviations are 1, and the line
passes through the means (both 0). Since $|r| < 1$ unless the relation is perfect, **the predicted $z_y$ is always
closer to 0 than $z_x$.** Someone 2 standard deviations above average in $x$ is predicted to be only $2r$ standard
deviations above average in $y$.

For a population model: if $(X, Y)$ have the same mean $\mu$, the same standard deviation and correlation $\rho$,
and the regression of $Y$ on $X$ is linear (as for the bivariate normal,
[Probability, Chapter 11](../probability/11-Joint-Distributions.md)), then

$$
E[Y \mid X = x] - \mu = \rho\,(x - \mu),
$$

so the expected follow-up is a fraction $\rho$ of the way out.

**Intuition.** Think of each measurement as a stable part plus luck. An extreme first measurement is extreme
partly because of good (or bad) luck. The stable part carries over to the second measurement; the luck, on
average, does not. So extreme values are followed, on average, by less extreme ones.

**It is not a trend.** Regression to the mean does not mean the population is getting more uniform. It works in both
directions: regress parents' heights on children's heights and you find that tall children have, on average,
less-tall parents. The spread of heights stays the same from one generation to the next; individuals simply do not
keep their exact rank.

### The regression fallacy

Mistaking regression to the mean for a real effect is the **regression fallacy**, and it is everywhere.

- **Treatments that seem to work.** People seek treatment when their symptoms are at their worst. Symptoms that
  fluctuate will, on average, be better at the next visit whatever is done. Without a randomised control group
  ([Chapter 5](05-Sampling-and-Experiments.md)), any treatment will look effective.
- **Praise and blame.** Daniel Kahneman tells of flight instructors who believed that praising a good landing made
  the next one worse and shouting at a bad landing made the next one better. Both patterns are what regression to
  the mean predicts if praise and shouting had no effect at all.
- **Business and sport.** In 1933 Horace Secrist published *The Triumph of Mediocrity in Business*, finding that
  firms with unusually high or low profits tended towards the average over time, which he took as an economic law.
  Harold Hotelling's review in the *Journal of the American Statistical Association* pointed out that the finding
  was a statistical necessity, not a discovery. The "cover jinx", by which athletes do worse after appearing on a
  magazine cover, is the same thing: they made the cover after an unusually good season.
- **Policy.** Speed cameras placed at sites with the most crashes last year will be followed by fewer crashes at
  those sites, even if cameras do nothing, because last year's count was partly bad luck.

The cure is a comparison group selected the same way but not treated.

## 11.7 Prediction versus confidence bands

### Two different questions

At $x_0 = 7$ hours of practice, the fitted line gives $\hat y_0 = 66.5$ words per minute. That one number answers two
different questions with very different uncertainties:

1. What is the **mean** score of all learners who practise 7 hours? (A parameter, $\mu_0 = \beta_0 + \beta_1x_0$.)
2. What will **one new learner** who practises 7 hours score? (A random variable,
   $Y_0 = \beta_0 + \beta_1x_0 + \varepsilon_0$.)

The first is uncertain only because the line is estimated. The second has that uncertainty *plus* the scatter of an
individual around the line, which no amount of data removes.

### Confidence interval for the mean response

**Theorem.** $\hat Y_0 = \hat\beta_0 + \hat\beta_1x_0$ is unbiased for $\mu_0$, with

$$
\operatorname{Var}(\hat Y_0) = \sigma^2\left(\frac1n + \frac{(x_0 - \bar x)^2}{S_{xx}}\right).
$$

*Proof.* Write $\hat Y_0 = \bar Y + \hat\beta_1(x_0 - \bar x)$. Its mean is $\beta_0 + \beta_1\bar x +
\beta_1(x_0 - \bar x) = \mu_0$. Since $\operatorname{Cov}(\bar Y, \hat\beta_1) = 0$ (11.2), the variances add:
$\frac{\sigma^2}{n} + (x_0 - \bar x)^2\frac{\sigma^2}{S_{xx}}$. $\square$

So a $1 - \alpha$ **confidence interval for the mean response** at $x_0$ is

$$
\hat y_0 \pm t_{\alpha/2, n-2}\; s\sqrt{\frac1n + \frac{(x_0 - \bar x)^2}{S_{xx}}} .
$$

The term $(x_0 - \bar x)^2$ makes the interval narrowest at $\bar x$ and wider as $x_0$ moves away. The reason is
that the estimated line pivots around the point $(\bar x, \bar y)$: errors in the slope matter more the further you
go from the centre.

### Prediction interval for a new response

**Theorem.** If the new response $Y_0$ is independent of the data, then $Y_0 - \hat Y_0$ has mean 0 and variance

$$
\operatorname{Var}(Y_0 - \hat Y_0) = \sigma^2\left(1 + \frac1n + \frac{(x_0 - \bar x)^2}{S_{xx}}\right).
$$

*Proof.* $Y_0 = \mu_0 + \varepsilon_0$ is independent of $\hat Y_0$, so the variance of the difference is
$\sigma^2 + \operatorname{Var}(\hat Y_0)$. $\square$

Under normality $(Y_0 - \hat Y_0)/(s\sqrt{1 + 1/n + (x_0 - \bar x)^2/S_{xx}}) \sim t_{n-2}$, and a $1 - \alpha$
**prediction interval** for the new response is

$$
\hat y_0 \pm t_{\alpha/2, n-2}\; s\sqrt{1 + \frac1n + \frac{(x_0 - \bar x)^2}{S_{xx}}} .
$$

The extra "1" under the square root is the individual scatter. As $n$ grows, the confidence interval shrinks to a
point, but the prediction interval shrinks only to about $\hat y_0 \pm 1.96\sigma$. Note too that the prediction
interval leans heavily on the normality assumption, because it is about one observation, not an average: the central
limit theorem does not come to the rescue.

**Example 6 (typing).** With $s = 1.888$, $t_{0.025, 6} = 2.447$, $\bar x = 7$ and $S_{xx} = 78$:

| $x_0$ | $\hat y_0$ | 95% interval for the mean | 95% interval for one new learner |
|---|---|---|---|
| 7 (the centre) | 66.5 | 64.9 to 68.1 | 61.6 to 71.4 |
| 12 (edge of the data) | 78.8 | 75.7 to 81.9 | 73.3 to 84.4 |
| 15 (beyond the data) | 86.2 | 81.7 to 90.7 | 79.7 to 92.6 |

Step by step for $x_0 = 7$: the mean-response standard error is $1.888\sqrt{1/8 + 0} \approx 0.667$, and
$2.447 \times 0.667 \approx 1.63$; the prediction standard error is $1.888\sqrt{1 + 1/8} \approx 2.002$, and
$2.447 \times 2.002 \approx 4.90$.

Joining the intervals over all $x_0$ gives two **bands** around the line, drawn below. The inner one (blue) is the
confidence band for the mean; the outer one (orange) is the prediction band for individuals. Both flare out away
from $\bar x = 7$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 240" role="img" aria-label="Eight data points rising from left to right with the least squares line through them. A narrow blue band around the line is the 95 percent confidence band for the mean; a wider orange band is the 95 percent prediction band for a single new learner. Both bands are narrowest at the mean practice time of 7 hours and widen towards the ends, most of all beyond the data at 13 to 16 hours">
  <polygon points="50.0,146.4 55.6,144.9 61.2,143.4 66.9,141.8 72.5,140.3 78.1,138.7 83.8,137.2 89.4,135.6 95.0,134.1 100.6,132.5 106.2,130.9 111.9,129.3 117.5,127.7 123.1,126.1 128.8,124.5 134.4,122.9 140.0,121.3 145.6,119.6 151.2,118.0 156.9,116.3 162.5,114.7 168.1,113.0 173.8,111.3 179.4,109.6 185.0,107.9 190.6,106.2 196.2,104.5 201.9,102.8 207.5,101.0 213.1,99.3 218.8,97.5 224.4,95.8 230.0,94.0 235.6,92.2 241.2,90.4 246.9,88.6 252.5,86.8 258.1,84.9 263.8,83.1 269.4,81.3 275.0,79.4 280.6,77.6 286.2,75.7 291.9,73.8 297.5,71.9 303.1,70.0 308.8,68.1 314.4,66.2 320.0,64.3 325.6,62.4 331.2,60.5 336.9,58.5 342.5,56.6 348.1,54.6 353.8,52.7 359.4,50.7 365.0,48.8 370.6,46.8 376.2,44.8 381.9,42.8 387.5,40.9 393.1,38.9 398.8,36.9 404.4,34.9 410.0,32.9 410.0,71.4 404.4,72.9 398.8,74.4 393.1,75.9 387.5,77.4 381.9,78.9 376.2,80.4 370.6,81.9 365.0,83.4 359.4,85.0 353.8,86.5 348.1,88.0 342.5,89.6 336.9,91.1 331.2,92.7 325.6,94.2 320.0,95.8 314.4,97.4 308.8,98.9 303.1,100.5 297.5,102.1 291.9,103.7 286.2,105.3 280.6,106.9 275.0,108.6 269.4,110.2 263.8,111.8 258.1,113.5 252.5,115.2 246.9,116.8 241.2,118.5 235.6,120.2 230.0,121.9 224.4,123.6 218.8,125.3 213.1,127.1 207.5,128.8 201.9,130.5 196.2,132.3 190.6,134.1 185.0,135.9 179.4,137.6 173.8,139.4 168.1,141.2 162.5,143.1 156.9,144.9 151.2,146.7 145.6,148.6 140.0,150.4 134.4,152.3 128.8,154.1 123.1,156.0 117.5,157.9 111.9,159.8 106.2,161.7 100.6,163.6 95.0,165.5 89.4,167.4 83.8,169.4 78.1,171.3 72.5,173.2 66.9,175.2 61.2,177.1 55.6,179.1 50.0,181.1" fill="#eea66f" fill-opacity="0.35" stroke="none"/>
  <polygon points="50.0,152.4 55.6,151.0 61.2,149.6 66.9,148.2 72.5,146.7 78.1,145.3 83.8,143.9 89.4,142.5 95.0,141.1 100.6,139.6 106.2,138.2 111.9,136.7 117.5,135.3 123.1,133.8 128.8,132.4 134.4,130.9 140.0,129.4 145.6,127.9 151.2,126.4 156.9,124.9 162.5,123.4 168.1,121.8 173.8,120.2 179.4,118.7 185.0,117.0 190.6,115.4 196.2,113.7 201.9,112.0 207.5,110.3 213.1,108.5 218.8,106.7 224.4,104.9 230.0,103.1 235.6,101.2 241.2,99.3 246.9,97.4 252.5,95.5 258.1,93.5 263.8,91.6 269.4,89.6 275.0,87.6 280.6,85.6 286.2,83.6 291.9,81.5 297.5,79.5 303.1,77.5 308.8,75.4 314.4,73.4 320.0,71.3 325.6,69.2 331.2,67.2 336.9,65.1 342.5,63.0 348.1,61.0 353.8,58.9 359.4,56.8 365.0,54.7 370.6,52.7 376.2,50.6 381.9,48.5 387.5,46.4 393.1,44.3 398.8,42.2 404.4,40.1 410.0,38.0 410.0,66.3 404.4,67.7 398.8,69.1 393.1,70.5 387.5,71.8 381.9,73.2 376.2,74.6 370.6,76.1 365.0,77.5 359.4,78.9 353.8,80.3 348.1,81.7 342.5,83.1 336.9,84.5 331.2,85.9 325.6,87.4 320.0,88.8 314.4,90.2 308.8,91.6 303.1,93.1 297.5,94.5 291.9,96.0 286.2,97.5 280.6,98.9 275.0,100.4 269.4,101.9 263.8,103.4 258.1,104.9 252.5,106.5 246.9,108.0 241.2,109.6 235.6,111.2 230.0,112.8 224.4,114.4 218.8,116.1 213.1,117.8 207.5,119.5 201.9,121.3 196.2,123.1 190.6,124.9 185.0,126.8 179.4,128.6 173.8,130.5 168.1,132.4 162.5,134.4 156.9,136.3 151.2,138.3 145.6,140.3 140.0,142.3 134.4,144.3 128.8,146.3 123.1,148.3 117.5,150.3 111.9,152.4 106.2,154.4 100.6,156.5 95.0,158.5 89.4,160.6 83.8,162.6 78.1,164.7 72.5,166.8 66.9,168.9 61.2,170.9 55.6,173.0 50.0,175.1" fill="#9cc9ea" fill-opacity="0.75" stroke="none"/>
  <line x1="50.0" y1="163.7" x2="410.0" y2="52.1" stroke="currentColor" stroke-width="2"/>
  <circle cx="95.0" cy="147.5" r="4" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="140.0" cy="133.3" r="4" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="162.5" cy="136.2" r="4" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="185.0" cy="116.3" r="4" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="230.0" cy="110.7" r="4" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="252.5" cy="102.2" r="4" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="275.0" cy="99.3" r="4" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="320.0" cy="73.8" r="4" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <line x1="50" y1="190" x2="410" y2="190" stroke="currentColor" stroke-width="1.5"/>
  <line x1="50" y1="190" x2="50" y2="20" stroke="currentColor" stroke-width="1.5"/>
  <text x="50.0" y="205" text-anchor="middle" font-size="11" fill="currentColor">0</text>
  <text x="140.0" y="205" text-anchor="middle" font-size="11" fill="currentColor">4</text>
  <text x="230.0" y="205" text-anchor="middle" font-size="11" fill="currentColor">8</text>
  <text x="320.0" y="205" text-anchor="middle" font-size="11" fill="currentColor">12</text>
  <text x="410.0" y="205" text-anchor="middle" font-size="11" fill="currentColor">16</text>
  <text x="44" y="194.0" text-anchor="end" font-size="11" fill="currentColor">40</text>
  <text x="44" y="137.3" text-anchor="end" font-size="11" fill="currentColor">60</text>
  <text x="44" y="80.7" text-anchor="end" font-size="11" fill="currentColor">80</text>
  <text x="44" y="24.0" text-anchor="end" font-size="11" fill="currentColor">100</text>
  <text x="230" y="228" text-anchor="middle" font-size="11" fill="currentColor">practice (hours per week)</text>
  <text x="60" y="30" text-anchor="start" font-size="11" fill="currentColor">score (words per minute)</text>
  <line x1="218.8" y1="158.8" x2="232.8" y2="158.8" stroke="#9cc9ea" stroke-width="8"/>
  <text x="238.8" y="162.8" font-size="11" fill="currentColor">mean (confidence)</text>
  <line x1="218.8" y1="171.6" x2="232.8" y2="171.6" stroke="#eea66f" stroke-opacity="0.6" stroke-width="8"/>
  <text x="238.8" y="175.6" font-size="11" fill="currentColor">new learner (prediction)</text>
</svg>
</div>

### Bands, simultaneity and extrapolation

*Level: advanced.* The band made by joining 95 percent intervals is **pointwise**: at each single $x_0$ it covers the
true mean with probability 0.95, but the chance that it covers the *whole* true line at once is lower. Holbrook
Working and Harold Hotelling (1929) showed that replacing $t_{\alpha/2, n-2}$ by $\sqrt{2F_{\alpha; 2, n-2}}$, where
$F$ is the upper point of an F distribution (met in [Chapter 12](12-Multiple-Regression.md)), gives a band that covers
the entire line with probability $1 - \alpha$. For the typing data that multiplier is about 3.21 instead of 2.45.

Finally, **extrapolation**: the bands at $x_0 = 15$ are wider, but they are still too optimistic, because they assume
the straight line continues beyond the data, and nothing in the data can tell us that. Typing speed cannot grow
without limit as practice increases; at 40 hours a week the line would predict 148 words per minute, from a model fitted to people
practising 2 to 12 hours, and nothing in the data supports or refutes that. The formulas measure only the
uncertainty that comes from noise, never the uncertainty of the model's shape.

## Check yourself

??? question "1. In a model for house prices, $\hat\beta_1 = 1800$ dollars per square metre of floor area, from observational data. Give a correct sentence interpreting it, and one sentence it does not justify."

    Correct: "Among houses like those in the data, those with one more square metre of floor area sold for about
    1800 dollars more on average." Not justified: "Adding a square metre to your house will raise its price by 1800
    dollars." Larger houses differ in other ways (location, age, quality), and the slope compares houses rather than
    measuring the effect of changing one.

??? question "2. Fit the least squares line to $x = 1, 2, 3, 4, 5$ and $y = 2, 4, 5, 4, 5$. Find $s$, the standard error of the slope, and test $H_0: \beta_1 = 0$."

    $\bar x = 3$, $\bar y = 4$, $S_{xx} = 10$, $S_{xy} = (-2)(-2) + (-1)(0) + 0 + (1)(0) + (2)(1) = 6$. So
    $\hat\beta_1 = 0.6$ and $\hat\beta_0 = 4 - 1.8 = 2.2$. Fitted values $2.8, 3.4, 4.0, 4.6, 5.2$; residuals
    $-0.8, 0.6, 1.0, -0.6, -0.2$; $\text{SSE} = 2.4$, $s^2 = 2.4/3 = 0.8$, $s \approx 0.894$.
    $\operatorname{SE}(\hat\beta_1) = 0.894/\sqrt{10} \approx 0.283$, $t \approx 2.12$ on 3 degrees of freedom,
    $p \approx 0.12$. Not significant: with 5 points the 95 percent interval $0.6 \pm 3.182 \times 0.283$ runs from
    about $-0.30$ to $1.50$.

??? question "3. Using the normal equations, show that the residuals of a least squares fit sum to zero and that the fitted line passes through $(\bar x, \bar y)$."

    The first normal equation is $\sum (y_i - \hat\beta_0 - \hat\beta_1x_i) = 0$, which is $\sum e_i = 0$. Dividing
    it by $n$ gives $\bar y - \hat\beta_0 - \hat\beta_1\bar x = 0$, so $\bar y = \hat\beta_0 + \hat\beta_1\bar x$: the
    point $(\bar x, \bar y)$ is on the line.

??? question "4. For the data of exercise 2, compute $R^2$ two ways."

    $\text{SST} = (-2)^2 + 0 + 1 + 0 + 1 = 6$, so $R^2 = 1 - 2.4/6 = 0.6$. And
    $r = S_{xy}/\sqrt{S_{xx}S_{yy}} = 6/\sqrt{60} \approx 0.775$, so $r^2 = 36/60 = 0.6$. They agree.

??? question "5. Why is the slope estimated more precisely when the $x$ values are spread out? If you could take 10 measurements anywhere in $0 \le x \le 10$ and were sure the relation is linear, where would you put them?"

    $\operatorname{Var}(\hat\beta_1) = \sigma^2/S_{xx}$, and $S_{xx}$ grows with the spread of the $x$'s. To maximise
    $S_{xx}$, put 5 measurements at $x = 0$ and 5 at $x = 10$: then $S_{xx} = 10 \times 25 = 250$, the largest
    possible. But this design cannot detect curvature, so in practice one keeps a few points in the middle.

??? question "6. Galton found that children's heights deviate from the mean about two thirds as much as their mid-parent's. A couple's mid-parent height is 3 inches above average. What is the predicted average height of their adult children? And for a child 3 inches above average, what does the regression of mid-parent on child predict?"

    $\frac23 \times 3 = 2$ inches above average. The reverse regression has its own slope (in Galton's data,
    mid-parents vary less than children, because an average of two heights varies less than one height, so the
    reverse slope is smaller still). Either way the prediction is closer to the mean:
    regression to the mean works in both directions.

??? question "7. On a test with retest correlation 0.5, a student scores 2 standard deviations above the mean. Assuming linear regression with equal means and variances, what is her expected retest score? Does this show the test is unfair?"

    $\hat z = 0.5 \times 2 = 1$ standard deviation above the mean. No: it reflects that part of her first score was
    luck that will not, on average, repeat. Students who scored 2 standard deviations below the mean will, on
    average, rise to 1 below.

??? question "8. In the typing example, compute the leverages of the points at $x = 2$ and $x = 6$, and check that all eight leverages add up to 2."

    $h = \frac18 + \frac{(x - 7)^2}{78}$. For $x = 2$: $0.125 + 25/78 \approx 0.4455$. For $x = 6$:
    $0.125 + 1/78 \approx 0.1378$. The sum is $8 \times \frac18 + \frac{78}{78} = 2$.

??? question "9. Using Example 6, explain in words why the interval for one new learner at $x_0 = 7$ is about three times as wide as the interval for the mean. Would collecting 800 learners instead of 8 shrink both?"

    The mean-response interval reflects only the uncertainty in the fitted line ($s\sqrt{1/8} \approx 0.67$); the
    prediction interval adds the individual scatter $s \approx 1.89$, giving $s\sqrt{1 + 1/8} \approx 2.00$. With 800
    learners the mean interval would shrink by about a factor of 10, but the prediction interval would shrink only
    slightly, to about $\pm 1.96\sigma$, since individuals still scatter around the line.

??? question "10. (Harder.) Show that the slope of the regression of $x$ on $y$ times the slope of the regression of $y$ on $x$ equals $r^2$. What does this say about the two lines?"

    The slope of $y$ on $x$ is $S_{xy}/S_{xx}$; the slope of $x$ on $y$ is $S_{xy}/S_{yy}$. Their product is
    $S_{xy}^2/(S_{xx}S_{yy}) = r^2$. If the two lines were the same line, drawn in the same axes, the slope of the
    second (as $dx/dy$) would be the reciprocal of the first and the product would be 1. Since $r^2 < 1$ unless all
    points are on a line, the two regression lines are different: both are flatter towards their own mean, which is
    regression to the mean again. For the typing data the product is $\frac{192}{78}\cdot\frac{192}{494} \approx 0.957 = r^2$.

??? question "11. (Harder.) Prove that $\sum_j h_{ij}^2 = h_{ii}$ for the hat values $h_{ij} = \frac1n + \frac{(x_i - \bar x)(x_j - \bar x)}{S_{xx}}$."

    Write $a_k = x_k - \bar x$, so $\sum_j a_j = 0$ and $\sum_j a_j^2 = S_{xx}$. Then
    $\sum_j h_{ij}^2 = \sum_j \left(\frac1{n^2} + \frac{2a_ia_j}{nS_{xx}} + \frac{a_i^2a_j^2}{S_{xx}^2}\right) =
    \frac1n + \frac{2a_i}{nS_{xx}}\cdot 0 + \frac{a_i^2S_{xx}}{S_{xx}^2} = \frac1n + \frac{a_i^2}{S_{xx}} = h_{ii}$.

??? question "12. (Harder.) A drug is given to the 50 patients with the highest blood pressure out of 1000 screened. At follow-up their average blood pressure has fallen. Give two explanations, and design a study that tells them apart."

    (1) The drug lowers blood pressure. (2) Regression to the mean: blood pressure readings fluctuate, so those
    selected for extreme first readings will tend to read lower later anyway. A design that separates them: screen
    the same way, then randomly assign the selected patients to the drug or to a placebo. Both groups regress to the
    mean equally, so the difference between the groups at follow-up estimates the drug's effect.

## What you learned

- The simple linear model $Y_i = \beta_0 + \beta_1x_i + \varepsilon_i$ with independent $N(0, \sigma^2)$ errors;
  linearity gives unbiasedness, independence and equal variance give the variance formulas, normality makes the t
  methods exact.
- $\hat\beta_1 = \sum c_iY_i$ with $c_i = (x_i - \bar x)/S_{xx}$; it is unbiased with variance $\sigma^2/S_{xx}$,
  normal under normal errors, and $s^2 = \text{SSE}/(n-2)$ is unbiased because leverages add up to 2.
- Inference on the slope uses $t = \hat\beta_1/(s/\sqrt{S_{xx}})$ on $n - 2$ degrees of freedom; this is the same as
  testing the correlation, $t = r\sqrt{n-2}/\sqrt{1-r^2}$.
- $\text{SST} = \text{SSR} + \text{SSE}$ and $R^2 = r^2$; a high $R^2$ does not validate the model (Anscombe).
- Residual plots, normal quantile plots, leverage $h_{ii}$, standardised residuals and Cook's distance check the
  assumptions and find influential points.
- Regression to the mean ($\hat z_y = rz_x$) gave the method its name through Galton; mistaking it for a real effect
  is the regression fallacy, cured by a randomised control group.
- The confidence interval for a mean response and the prediction interval for a new response differ by the "1"
  under the square root; both widen away from $\bar x$, and neither protects against extrapolation.

**Next:** [Chapter 12](12-Multiple-Regression.md), many predictors at once: the matrix form of least squares,
interpreting coefficients, collinearity, dummy variables, overfitting and cross-validation, and ANOVA as a
regression.

## Further reading

- F. Galton, "Regression towards mediocrity in hereditary stature", *Journal of the Anthropological Institute of
  Great Britain and Ireland* 15, 1886.
- S. M. Stigler, *The History of Statistics: The Measurement of Uncertainty before 1900*, 1986 (Part Three,
  on Galton and the birth of regression and correlation).
- F. J. Anscombe, "Graphs in statistical analysis", *The American Statistician* 27, 1973.
- R. D. Cook, "Detection of influential observation in linear regression", *Technometrics* 19, 1977.
- H. Working and H. Hotelling, "Applications of the theory of error to the interpretation of trends", *Journal of
  the American Statistical Association* 24 (supplement), 1929.
- H. Secrist, *The Triumph of Mediocrity in Business*, 1933, and H. Hotelling's review of it in the *Journal of the
  American Statistical Association* 28, 1933.
- D. Kahneman, *Thinking, Fast and Slow*, 2011 (chapter 17, on regression to the mean).
- S. Weisberg, *Applied Linear Regression*, 4th ed., 2014.
- M. H. Kutner, C. J. Nachtsheim, J. Neter and W. Li, *Applied Linear Statistical Models*, 5th ed., 2005.
- D. Freedman, R. Pisani and R. Purves, *Statistics*, 4th ed., 2007 (chapters 10 to 12: a beautifully clear
  non-mathematical treatment of regression and the regression effect).
- On this site: the Topics lessons on [scatter plots](../../topics/statistics/level-6/01-scatter-plots.md),
  [the correlation coefficient](../../topics/statistics/level-7/04-correlation-coefficient.md),
  [least-squares regression](../../topics/statistics/level-7/05-least-squares.md) and
  [interpolation and extrapolation](../../topics/statistics/level-6/04-interpolation-extrapolation.md); the
  Probability book on [joint distributions](../probability/11-Joint-Distributions.md) (the bivariate normal and
  regression to the mean); the MAT137 guide on [applications of derivatives](../../uoft/MAT137/unit06.md) for
  minimising functions; this book's [index](index.md).
