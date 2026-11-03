# 19. Statistical learning

*Much of modern data analysis asks not "what is the effect of $x$ on $y$?" but "given a new $x$, what will $y$ be?":
will this email be spam, will this patient be readmitted, what digit is in this picture? This is prediction, and the
methods built for it are called statistical learning or machine learning. They are statistics: every one of them
estimates something from a sample, and every one of them faces the trade-off between fitting the data you have and
predicting the data you do not. In this chapter you will prove the bias-variance decomposition, fit a logistic
regression by Newton's method, see how nearest neighbours, trees and random forests work and why averaging trees
helps (with proof), learn to judge a classifier honestly with confusion matrices, ROC curves and base rates, meet
neural networks as the statistical models they are, and face two problems that no algorithm fixes on its own: fairness
and leakage.*

!!! abstract "In this chapter"
    **You will learn:**

    - the bias-variance decomposition of prediction error (proof), and how it shapes every choice of model complexity
    - logistic regression: the model, its likelihood, why the likelihood has a single peak (proof), and how to read its coefficients as odds ratios
    - nearest neighbours, classification trees and random forests, and why averaging many trees reduces variance (proof)
    - confusion matrices, sensitivity, specificity, precision, ROC curves and the AUC, and why base rates (Bayes' theorem) decide what a positive prediction means
    - what a neural network is as a statistical model, what is proved about it and what is not
    - the impossibility result behind fairness debates (proof), and how data leakage manufactures accuracy

    **You need:** [Chapter 11](11-Linear-Regression.md) and [Chapter 12](12-Multiple-Regression.md) (regression,
    cross-validation), [Chapter 13](13-Likelihood-Theory.md) (maximum likelihood),
    [Chapter 18](18-High-Dimensional-Statistics.md) (shrinkage, the curse of dimensionality), Bayes' theorem from
    [Probability, Chapter 4](../probability/04-Bayes-Theorem.md), and derivatives of functions of several variables.

    **Levels:** 19.1 and 19.4 are advanced; 19.2 and 19.3 are advanced to expert; 19.5 and 19.6 are expert in content
    but written for any careful reader.

## 19.1 The bias-variance trade-off

*Level: advanced.*

### Fitting versus predicting

Suppose $y = f(x) + \varepsilon$, where $f$ is an unknown function and $\varepsilon$ is noise with mean 0 and variance
$\sigma^2$, independent of everything else. From a **training set** of $n$ pairs $(x_i, y_i)$ we build an estimate
$\hat f$. We care about how well $\hat f$ predicts a *new* response $y_0$ at a point $x_0$.

A flexible method (a polynomial of high degree, a very deep tree) can pass through every training point, so its
training error is zero; but that error measures memory, not prediction. A rigid method (a straight line) may miss
the shape of $f$ entirely. The right amount of flexibility lies in between, and the following identity says why.

**Theorem (bias-variance decomposition).** At a fixed point $x_0$, with expectation over both the training set and
the new noise,

$$
E\bigl[(y_0 - \hat f(x_0))^2\bigr] = \underbrace{\sigma^2}_{\text{irreducible}} + \underbrace{\bigl(E[\hat f(x_0)] - f(x_0)\bigr)^2}_{\text{bias}^2} + \underbrace{\operatorname{Var}\bigl(\hat f(x_0)\bigr)}_{\text{variance}} .
$$

*Proof.* Write $\hat f$ for $\hat f(x_0)$, $f$ for $f(x_0)$ and $\bar f = E[\hat f]$. Then
$y_0 - \hat f = \varepsilon_0 + (f - \bar f) + (\bar f - \hat f)$, where $\varepsilon_0$ is the noise in the new
response. Square and take expectations. The three squared terms give $\sigma^2$, $(f - \bar f)^2$ and
$\operatorname{Var}(\hat f)$. The cross terms vanish: $E[\varepsilon_0(\dots)] = 0$ because the new noise has mean
zero and is independent of the training set, and $E[(f - \bar f)(\bar f - \hat f)] = (f - \bar f)E[\bar f - \hat f] = 0$ because $f - \bar f$ is a constant. $\square$

The first term is beyond any method's reach. The other two pull against each other: flexible methods have low bias
and high variance (they chase the noise of the particular training set), rigid methods the reverse. This is the same
decomposition as the mean squared error of an estimator in [Chapter 7](07-Estimation.md), now applied to a predicted
value.

**Worked example 1 (a computed illustration).** Let $f(x) = x^2$, noise variance $\sigma^2 = 0.25$, and training
points at $x = \pm 0.1, \pm 0.2, \pm 0.3, \dots$ (one response at each). Predict at $x_0 = 0$ by **$k$-nearest
neighbours**: average the responses of the $k$ training points closest to 0. With $k = 2j$ the neighbours are
$\pm 0.1, \dots, \pm 0.1j$, so $E[\hat f(0)]$ is the average of $(0.1i)^2$ for $i = 1, \dots, j$ (the bias, since
$f(0) = 0$), and $\operatorname{Var}(\hat f(0)) = \sigma^2 / k$. Then

| $k$ | 2 | 4 | 6 | 10 | 14 | 20 |
|---|---|---|---|---|---|---|
| bias | 0.010 | 0.025 | 0.047 | 0.110 | 0.200 | 0.385 |
| bias$^2$ | 0.0001 | 0.0006 | 0.0022 | 0.0121 | 0.0400 | 0.1482 |
| variance | 0.125 | 0.0625 | 0.0417 | 0.025 | 0.0179 | 0.0125 |
| bias$^2$ + variance | 0.125 | 0.063 | 0.044 | 0.037 | 0.058 | 0.161 |

Small $k$ is unbiased but noisy; large $k$ is stable but averages over points where $f$ is far from $f(0)$. The best
among the values in the table is $k = 10$ (Exercise 2 looks between them). In practice $f$ is unknown, so the trade-off is tuned by **cross-validation**: hold out part of the
data, fit on the rest, measure prediction error on the held-out part, and repeat
([Chapter 12](12-Multiple-Regression.md)).

**An honest footnote.** The U-shaped picture (error falls then rises with complexity) is the classical one, and it
is right for the methods above. Mikhail Belkin, Daniel Hsu, Siyuan Ma and Soumik Mandal (2019) documented **double
descent**: for some very flexible models, past the point where the model can fit the training data exactly, test error
can fall again as complexity keeps growing. The decomposition still holds; what changes is how bias and variance move,
because among the many exact fits the training algorithm picks a particularly smooth one. Explaining exactly when this
happens is current research.

## 19.2 Classification: logistic regression

*Level: advanced to expert.*

### The model

In **classification** the response is a category. Take two classes, coded $y \in \{0, 1\}$ (failed or passed, healthy
or ill). Linear regression on $y$ can predict values below 0 or above 1, which make no sense as probabilities. The
**logistic regression** model instead says

$$
P(y = 1 \mid x) = p(x) = \frac{1}{1 + e^{-(\beta_0 + \beta_1x_1 + \dots + \beta_kx_k)}} .
$$

The function $\sigma(t) = \frac{1}{1 + e^{-t}}$, the **logistic** (or sigmoid) function, rises smoothly from 0 to 1,
and $\sigma(0) = \frac12$. Solving for the linear part gives

$$
\log\frac{p(x)}{1 - p(x)} = \beta_0 + \beta_1x_1 + \dots + \beta_kx_k ,
$$

so the model is linear in the **log odds**. That gives the coefficients a clean meaning: raising $x_j$ by one unit,
with the others fixed, adds $\beta_j$ to the log odds, that is, multiplies the odds by $e^{\beta_j}$, the **odds
ratio** of [Chapter 10](10-Categorical-Data.md).

### The likelihood and its single peak

Given data $(x_i, y_i)$, with $p_i = p(x_i)$, the likelihood ([Chapter 13](13-Likelihood-Theory.md)) is
$\prod_i p_i^{y_i}(1 - p_i)^{1 - y_i}$, and the log-likelihood is

$$
\ell(\beta) = \sum_{i=1}^n \bigl[y_i\log p_i + (1 - y_i)\log(1 - p_i)\bigr] = \sum_{i=1}^n \bigl[y_i\eta_i - \log(1 + e^{\eta_i})\bigr] ,
$$

where $\eta_i = x_i^{\top}\beta$ is the linear part (with $x_i$ including a leading 1 for the intercept). The second
form uses $\log p_i - \log(1 - p_i) = \eta_i$ and $\log(1 - p_i) = -\log(1 + e^{\eta_i})$. The negative of $\ell$,
averaged, is called the **cross-entropy loss** or **log loss** in machine learning; minimising it is maximum likelihood.

**Proposition.** The gradient and Hessian (matrix of second derivatives) of $\ell$ are

$$
\nabla\ell(\beta) = \sum_i (y_i - p_i)\,x_i, \qquad \nabla^2\ell(\beta) = -\sum_i p_i(1 - p_i)\,x_ix_i^{\top} ,
$$

and $\ell$ is concave, so any point where the gradient is zero is the global maximum.

*Proof.* $\frac{d}{d\eta}\log(1 + e^{\eta}) = \frac{e^{\eta}}{1 + e^{\eta}} = \sigma(\eta)$, and $\sigma'(\eta) = \sigma(\eta)(1 - \sigma(\eta))$. By the chain rule, $\frac{\partial\ell}{\partial\beta_j} = \sum_i (y_i - p_i)x_{ij}$ and $\frac{\partial^2\ell}{\partial\beta_j\partial\beta_k} = -\sum_i p_i(1 - p_i)x_{ij}x_{ik}$. For any
vector $v$, $v^{\top}\nabla^2\ell\,v = -\sum_i p_i(1 - p_i)(x_i^{\top}v)^2 \le 0$, so the Hessian is negative
semidefinite everywhere, which is the condition for concavity. A concave function has no local maxima other than
global ones. $\square$

The equation $\nabla\ell = 0$ has no closed-form solution, but **Newton's method** solves it fast: repeat
$\beta \leftarrow \beta - (\nabla^2\ell)^{-1}\nabla\ell$. Written out, each step is a weighted least squares fit with
weights $p_i(1 - p_i)$, so statisticians call it **iteratively reweighted least squares**.

**Worked example 2 (made-up data).** Ten students, hours of study $x$ and whether they passed:

| $x$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| passed | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 1 | 1 | 1 |

Starting from $\beta = (0, 0)$, Newton's method gives $(-2.533, 0.461)$, then $(-3.456, 0.628)$, $(-3.706, 0.674)$,
$(-3.722, 0.677)$, and settles at $\hat\beta_0 \approx -3.722$, $\hat\beta_1 \approx 0.677$. So each extra hour of
study multiplies the odds of passing by $e^{0.677} \approx 1.97$, roughly doubling them. The fitted probability is
$\frac12$ where $\hat\beta_0 + \hat\beta_1x = 0$, at $x = 3.722 / 0.677 = 5.5$ hours; at 8 hours it is about 0.84.
**Check:** at the solution the gradient must vanish, so the fitted probabilities must add up to the number of passes
(5), and $\sum p_ix_i$ must equal $\sum y_ix_i = 37$; both hold to many decimal places. The standard error of
$\hat\beta_1$ (from the inverse of minus the Hessian, [Chapter 13](13-Likelihood-Theory.md)) is about 0.40, so with
only ten students the evidence is weak: the 95% Wald interval for the odds ratio runs from about 0.9 to 4.3.

### Try it in Python

```python
import math
x = list(range(1, 11)); y = [0, 0, 0, 1, 0, 1, 0, 1, 1, 1]
b0 = b1 = 0.0
for _ in range(25):                                  # Newton's method
    p = [1 / (1 + math.exp(-(b0 + b1 * xi))) for xi in x]
    g0 = sum(yi - pi for yi, pi in zip(y, p))
    g1 = sum((yi - pi) * xi for xi, yi, pi in zip(x, y, p))
    w = [pi * (1 - pi) for pi in p]
    h00, h01 = sum(w), sum(wi * xi for wi, xi in zip(w, x))
    h11 = sum(wi * xi * xi for wi, xi in zip(w, x))
    det = h00 * h11 - h01 ** 2
    b0 += (h11 * g0 - h01 * g1) / det
    b1 += (h00 * g1 - h01 * g0) / det
print(round(b0, 3), round(b1, 3), round(math.exp(b1), 2))   # -3.722 0.677 1.97
```

**When it fails.** If some line separates the passes from the fails perfectly (**complete separation**), the
likelihood keeps increasing as the coefficients grow without bound, and there is no maximum. Software then reports
huge coefficients and standard errors. Penalising the coefficients (ridge or lasso, as in
[Chapter 18](18-High-Dimensional-Statistics.md)) restores a finite answer, and with many predictors penalised
logistic regression is the standard workhorse.

To turn probabilities into decisions, choose a **threshold**: predict class 1 when $\hat p(x) > c$. The value
$c = \frac12$ is natural only when both kinds of error cost the same and the classes are balanced; 19.4 shows why
the choice matters.

## 19.3 Nearest neighbours, trees and forests

*Level: advanced (ideas, with one proof).*

### Nearest neighbours

The **$k$-nearest-neighbour classifier** predicts the class held by the majority of the $k$ training points closest
to $x$. It assumes nothing about the shape of the boundary between classes. Thomas Cover and Peter Hart (1967) proved
a striking fact about the simplest version: as the training set grows, the error rate of the 1-nearest-neighbour rule
approaches a limit that is at most twice the **Bayes error rate**, the error of the best possible classifier (the one
that knows the true $P(y \mid x)$ and picks the more likely class). For two classes the precise bound is $2R^*(1 - R^*)$, where $R^*$ is the Bayes rate. Its weakness is the curse of dimensionality of
[Chapter 18](18-High-Dimensional-Statistics.md): with many variables, the nearest neighbours are not near.

### Classification trees

A **classification tree** asks a sequence of yes-or-no questions ("is age above 40?", "is the income below 30,000
dollars?"), each splitting the data in two, until it reaches a **leaf**, where it predicts the majority class. It is
grown greedily: at each step choose the question that makes the two resulting groups as pure as possible. One common
measure of impurity for a group with class proportions $p_1, \dots, p_K$ is the **Gini impurity**

$$
G = 1 - \sum_{c=1}^{K} p_c^2 ,
$$

the probability that two items drawn at random (with replacement) from the group belong to different classes. It is
0 for a pure group and largest when the classes are evenly mixed.

**Worked example 3 (made-up).** A node holds 6 positives and 4 negatives: $G = 1 - 0.6^2 - 0.4^2 = 0.48$. Two possible
splits:

- Split A: left 4 positive and 1 negative ($G = 1 - 0.64 - 0.04 = 0.32$), right 2 positive and 3 negative
  ($G = 0.48$). Weighted by size: $0.5 \times 0.32 + 0.5 \times 0.48 = 0.40$.
- Split B: left 3 positive and 0 negative ($G = 0$), right 3 positive and 4 negative ($G = 1 - \frac{9}{49} - \frac{16}{49} = \frac{24}{49} \approx 0.490$). Weighted: $0.3 \times 0 + 0.7 \times 0.490 \approx 0.343$.

Split B reduces impurity more ($0.48 \to 0.343$ against $0.48 \to 0.40$), so the tree takes it.

Trees are easy to read and handle mixed kinds of variables and interactions naturally. A tree grown until every leaf is
pure fits the training data perfectly and has very high variance: change a few training points and the tree changes
completely. Trees are therefore **pruned** (cut back, with the size chosen by cross-validation). The standard
reference is the CART book of Leo Breiman, Jerome Friedman, Richard Olshen and Charles Stone (1984).

### Averaging: bagging and random forests

Breiman's next idea (**bagging**, 1996) attacks the variance directly: draw $B$ bootstrap samples of the training set
([Chapter 15](15-Nonparametric-Methods.md)), grow a deep tree on each, and average their predictions (or take a
majority vote). How much does averaging help?

**Proposition.** Let $T_1, \dots, T_B$ be predictions at a point, each with variance $s^2$, and each pair with
correlation $\rho \ge 0$. Then

$$
\operatorname{Var}\left(\frac1B\sum_{b=1}^B T_b\right) = \rho s^2 + \frac{1 - \rho}{B}s^2 .
$$

*Proof.* The variance of a sum is the sum of all covariances:
$\operatorname{Var}(\sum_b T_b) = \sum_b \operatorname{Var}(T_b) + \sum_{b \ne c}\operatorname{Cov}(T_b, T_c) = Bs^2 + B(B - 1)\rho s^2$. Dividing by $B^2$ gives $\frac{s^2}{B} + \frac{B - 1}{B}\rho s^2 = \rho s^2 + \frac{1 - \rho}{B}s^2$. $\square$

As $B$ grows, the second term disappears but the first stays: the trees' **correlation** limits what averaging can do.
Trees grown on bootstrap samples of the same data are highly correlated, mostly because they all split first on the
same strong variables. **Random forests** (Breiman, 2001) decorrelate them: at each split, each tree may choose only
among a random subset of the variables (often about $\sqrt{p}$ of them for classification). Each tree gets a little
worse, but $\rho$ falls enough that the average gets better. Random forests work well with little tuning, which is
why they became a default method for tabular data.

**Boosting** is the other great ensemble idea: instead of averaging independent trees, fit small trees one after
another, each one focused on what the previous ones got wrong (AdaBoost, Yoav Freund and Robert Schapire, 1997;
gradient boosting, Friedman, 2001). Bagging mainly reduces variance; boosting mainly reduces bias.

## 19.4 Evaluating classifiers

*Level: advanced.*

### The confusion matrix

Compare a classifier's predictions with the truth on data it was *not* trained on. The four counts form the
**confusion matrix**:

| | truly positive | truly negative |
|---|---|---|
| predicted positive | true positives (TP) | false positives (FP) |
| predicted negative | false negatives (FN) | true negatives (TN) |

From it come several rates, each answering a different question:

- **Sensitivity** (recall, true positive rate) $= \frac{TP}{TP + FN}$: of the real positives, what share do we catch?
- **Specificity** $= \frac{TN}{TN + FP}$; the **false positive rate** is $1 -$ specificity.
- **Precision** (positive predictive value, PPV) $= \frac{TP}{TP + FP}$: when we say "positive", how often are we
  right?
- **Accuracy** $= \frac{TP + TN}{\text{total}}$.

### Base rates

**Worked example 4.** A screening classifier has sensitivity 95% and specificity 95%. It is applied to 10,000 people,
of whom 1% (100) have the condition. Then TP $= 95$, FN $= 5$; of the 9,900 without it, FP $= 495$ and TN $= 9{,}405$.
The precision is

$$
\frac{95}{95 + 495} = \frac{95}{590} \approx 16\% .
$$

Five of every six people the classifier flags are healthy, even though it is "95% accurate" in both directions. This
is Bayes' theorem ([Probability, Chapter 4](../probability/04-Bayes-Theorem.md)):

$$
\text{PPV} = \frac{\text{sens} \cdot \pi}{\text{sens} \cdot \pi + (1 - \text{spec})(1 - \pi)} ,
$$

where $\pi$ is the **base rate** (prevalence). Precision is not a property of the classifier alone: the same
classifier has different precision in populations with different base rates. And accuracy can be useless: a
"classifier" that says "negative" to everyone scores 99% here and finds no one.

### ROC curves and AUC

Most classifiers output a score (such as $\hat p(x)$), and the threshold is our choice. Lowering it catches more
positives and also raises more false alarms. The **ROC curve** (the name, receiver operating characteristic, comes
from radar engineering in the Second World War) plots the true positive rate against the false positive rate as the
threshold sweeps from high to low.

**Worked example 5 (made-up scores).** Four positives score 0.9, 0.8, 0.55, 0.4; five negatives score 0.7, 0.5, 0.3,
0.2, 0.1. Lower the threshold past each score in turn: each positive moves the curve up by $\frac14$, each negative
moves it right by $\frac15$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 290 300" role="img" aria-label="ROC curve for the example: a staircase from the origin up to true positive rate 0.5, right to false positive rate 0.2, up to 0.75, right to 0.4, up to 1, then right to 1. The shaded area under it is 0.85. A dashed diagonal shows a classifier that guesses at random.">
  <polygon points="50,250 50,150 90,150 90,100 130,100 130,50 250,50 250,250" fill="#9cc9ea" fill-opacity="0.45"/>
  <line x1="50" y1="250" x2="250" y2="50" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/>
  <polyline points="50,250 50,150 90,150 90,100 130,100 130,50 250,50" fill="none" stroke="#eea66f" stroke-width="3"/>
  <g stroke="currentColor" stroke-width="1.5" fill="none">
    <line x1="50" y1="250" x2="250" y2="250"/>
    <line x1="50" y1="250" x2="50" y2="50"/>
  </g>
  <g fill="currentColor" font-size="12">
    <text x="50" y="266" text-anchor="middle">0</text>
    <text x="150" y="266" text-anchor="middle">0.5</text>
    <text x="250" y="266" text-anchor="middle">1</text>
    <text x="42" y="254" text-anchor="end">0</text>
    <text x="42" y="154" text-anchor="end">0.5</text>
    <text x="42" y="54" text-anchor="end">1</text>
    <text x="150" y="288" text-anchor="middle">false positive rate</text>
    <text x="16" y="150" text-anchor="middle" transform="rotate(-90 16 150)">true positive rate</text>
    <text x="190" y="190" text-anchor="middle">AUC = 0.85</text>
  </g>
</svg>
</div>

The **area under the curve** (AUC) is 0.85 here: $0.2 \times 0.5 + 0.2 \times 0.75 + 0.6 \times 1 = 0.85$. A perfect
classifier has AUC 1; random guessing follows the diagonal, AUC $\frac12$.

**Proposition.** The AUC equals the probability that a randomly chosen positive scores higher than a randomly chosen
negative (with ties counted as one half).

*Proof sketch.* Each negative, as the threshold passes it, moves the curve right by $\frac{1}{n_-}$, at a height equal
to the share of positives already passed, which is the share of positives scoring above that negative. So the area is
$\frac{1}{n_-}\sum_{\text{negatives}}(\text{share of positives above it})$, the average over all positive-negative
pairs of the indicator "positive above negative". Ties produce diagonal segments, which give the half. $\square$

**Check:** of the $4 \times 5 = 20$ pairs, the positive wins $5 + 5 + 4 + 3 = 17$, and $\frac{17}{20} = 0.85$. This
is exactly the Mann-Whitney statistic of [Chapter 15](15-Nonparametric-Methods.md) divided by the number of pairs.

The AUC summarises ranking quality without choosing a threshold, but it does not say how well calibrated the
probabilities are (does "70%" happen 70% of the time?), and it weighs all thresholds equally, including ones nobody
would use. When positives are rare, the **precision-recall curve** is often more informative, because it shows the
precision problem of Worked example 4 directly.

## 19.5 Neural networks as statistical models

*Level: expert (survey, honestly).*

### What a network is

A logistic regression computes $\sigma(w^{\top}x + b)$: a weighted sum of the inputs, passed through a nonlinear
function. Call that one **neuron**. A **feed-forward neural network** stacks layers of them. With one hidden layer of
$m$ neurons,

$$
h_j = a(w_j^{\top}x + b_j) \quad (j = 1, \dots, m), \qquad \hat p(x) = \sigma\left(v^{\top}h + c\right) ,
$$

where $a$ is an **activation function** (today usually $a(t) = \max(0, t)$, the "rectified linear unit") and the
**parameters** are all the $w_j, b_j, v, c$. A network with one hidden layer and no hidden nonlinearity collapses back
to logistic regression. Deep networks repeat the hidden layer many times.

As a statistical model, a network for classification is a **nonlinear logistic regression**: the probability of
class 1 is a flexible function of $x$ with many parameters, and those parameters are fitted by minimising the same
cross-entropy loss of 19.2, that is, by maximum likelihood. For a numerical response with squared error loss, it is
nonlinear least squares. The fitting uses **gradient descent**: move the parameters a small step against the gradient,
computed efficiently by the chain rule organised layer by layer (**backpropagation**, popularised by David Rumelhart,
Geoffrey Hinton and Ronald Williams in 1986). In practice each step uses the gradient on a small random batch of
data (**stochastic gradient descent**).

### What is proved, and what is not

- **Approximation.** George Cybenko (1989) and Kurt Hornik (1991) proved **universal approximation theorems**: a
  network with one hidden layer and enough neurons can approximate any continuous function on a bounded region as
  closely as you like. This says the model class is rich. It says nothing about how many neurons are needed, whether
  gradient descent finds the right parameters, or whether the result predicts well from finite data. Polynomials have
  the same approximation property.
- **Optimisation.** Unlike the logistic likelihood, a network's loss is not concave: it has many local optima and
  flat regions. That gradient descent nevertheless finds good solutions for large networks is observed far more
  reliably than it is proved; there are proofs for special regimes (very wide networks, for example), not a general
  theory.
- **Generalisation.** Modern networks often have far more parameters than training examples, the $p > n$ situation of
  [Chapter 18](18-High-Dimensional-Statistics.md), and can fit random labels perfectly, yet predict well on real
  data. Classical bounds based on counting parameters do not explain this. The double descent of 19.1, the implicit
  shrinkage performed by gradient descent, and other ideas are partial explanations; this is one of the open problems
  of [Chapter 20](20-Where-Statistics-Goes.md).
- **Uncertainty.** A network's output probability is often poorly calibrated, and a network gives no standard error.
  Methods to attach honest uncertainty (ensembles, Bayesian neural networks, and the conformal prediction of
  [Chapter 20](20-Where-Statistics-Goes.md)) are active work.

The statistical lessons all carry over. Networks overfit without held-out evaluation, inherit every bias in their
training data, cannot tell correlation from causation, and need far more data than simple models to beat them. On
small tabular data sets, logistic regression, random forests and boosted trees remain strong competitors; on images,
sound and text, where the input has rich structure the network can exploit, networks have changed what is possible.

## 19.6 Fairness and leakage

*Level: expert (one proof; the rest is honest discussion).*

### Fairness: a debate with a theorem inside

In 2016 the news organisation ProPublica analysed COMPAS, a commercial score used in some US courts to estimate the
risk that a defendant will reoffend. They reported that among defendants who did *not* reoffend, Black defendants had
been labelled high risk about twice as often as white defendants: unequal **false positive rates**. The company that
made the tool replied that the score was equally **calibrated** for both groups: a given score meant about the same
chance of reoffending whatever the defendant's race. Both statements could be true at once, and a short theorem shows
why.

**Proposition (Chouldechova, 2017).** For any group, with base rate $\pi$ (share who are truly positive), positive
predictive value PPV and false negative rate FNR,

$$
\text{FPR} = \frac{\pi}{1 - \pi} \cdot \frac{1 - \text{PPV}}{\text{PPV}} \cdot (1 - \text{FNR}) .
$$

*Proof.* Let the group have $P$ true positives and $N$ true negatives, so $\frac{P}{N} = \frac{\pi}{1 - \pi}$. By
definition $TP = (1 - \text{FNR})P$. From $\text{PPV} = \frac{TP}{TP + FP}$ we get $FP = \frac{1 - \text{PPV}} {\text{PPV}}TP$. So $\text{FPR} = \frac{FP}{N} = \frac{1 - \text{PPV}}{\text{PPV}}(1 - \text{FNR})\frac{P}{N}$, which
is the formula. $\square$

**Consequence.** If two groups have *different* base rates, a classifier cannot have equal PPV (a form of
calibration), equal false negative rates and equal false positive rates in both, unless it is perfect. For example,
with PPV $= 0.7$ and FNR $= 0.3$ in both groups, a group with base rate 0.3 gets FPR $= \frac{0.3}{0.7} \cdot \frac{0.3}{0.7} \cdot 0.7 \approx 0.13$, and a group with base rate 0.5 gets FPR $= 1 \cdot \frac{0.3}{0.7} \cdot 0.7 = 0.30$. Jon Kleinberg, Sendhil Mullainathan and Manish Raghavan proved a closely related impossibility for
probabilistic scores in the same period.

So "is the algorithm fair?" has no single technical answer: different fairness criteria conflict, and choosing among
them is a question of values and of the decision being made, which statistics can inform but not settle. Honest
practice reports several criteria, asks where the base rate differences come from (they may themselves reflect
unequal treatment, for example in who gets arrested), and remembers that the labels used for training (here, re-arrest
rather than reoffending) may measure the wrong thing.

### Leakage: accuracy from nowhere

**Data leakage** means that information that would not be available at prediction time, or information from the test
data, slipped into training. It produces models that look excellent in evaluation and fail in use. Shachar Kaufman,
Saharon Rosset and Claudia Perlich (2011) gave a careful treatment. Common forms:

- **Target leakage**: a predictor that is a consequence of the outcome. A model predicting pneumonia from hospital
  records that includes "antibiotic prescribed" will look brilliant, because doctors prescribe antibiotics after
  diagnosing pneumonia.
- **Train-test contamination**: the same patient, photograph or near-duplicate appears in both training and test
  sets; or a time series is split at random, so the model is "predicting" the past from the future.
- **Preprocessing on all the data**: choosing variables, standardising or filling in missing values using the whole
  data set before splitting it.

The last is subtle enough to be worth a demonstration. Christophe Ambroise and Geoffrey McLachlan (2002) showed it in
published gene-expression classifiers.

**Worked example 6 (a simulation of pure noise).** Make 40 units with 1,000 random normal variables each and class
labels that have nothing to do with them, so no classifier can beat 50% accuracy on new data. Choose the 10 variables
whose class means differ most, then estimate accuracy by leave-one-out cross-validation of a nearest-class-mean
classifier.

```python
import random, statistics as st
random.seed(3)
n, p, keep = 40, 1000, 10
X = [[random.gauss(0, 1) for _ in range(p)] for _ in range(n)]
y = [i % 2 for i in range(n)]                  # labels unrelated to X

def top(rows):                                  # the 10 features whose class means differ most
    def gap(j):
        a = [X[i][j] for i in rows if y[i] == 1]; b = [X[i][j] for i in rows if y[i] == 0]
        return abs(st.mean(a) - st.mean(b))
    return sorted(range(p), key=gap)[-keep:]

def predict(rows, feats, i):                    # nearest class centroid
    d = {}
    for c in (0, 1):
        cen = [st.mean(X[r][j] for r in rows if y[r] == c) for j in feats]
        d[c] = sum((X[i][j] - m) ** 2 for j, m in zip(feats, cen))
    return min(d, key=d.get)

everyone = list(range(n))
wrong = top(everyone)                           # selection saw every label
acc_wrong = st.mean(predict([r for r in everyone if r != i], wrong, i) == y[i] for i in everyone)
acc_right = st.mean(predict(rest, top(rest), i) == y[i]
                    for i in everyone for rest in [[r for r in everyone if r != i]])
print(acc_wrong, acc_right)                     # 0.925 and 0.4 with this seed
```

Selecting the variables once, using all the labels, gives a cross-validated accuracy of 92.5% with this seed (other
seeds give 80% to 100%). Redoing the selection inside each fold, as one must, gives 40% (other seeds, 40% to 70%),
scattered around the true 50%. The leaky version found, among 1,000 noise variables, the ten that happen to separate
these 40 labels, and then "validated" them on the same labels. **The rule: every step that looks at the data,
including choosing variables and tuning, must be inside the cross-validation loop**, or evaluated on data kept aside
from the start and touched once.

## A short history

Logistic regression grew out of the logistic curve for population growth (Pierre-François Verhulst, 1830s and 1840s)
and was developed as a regression method for binary data by David Cox in 1958. Fisher's linear discriminant (1936),
tested on the iris data, was the first statistical classifier. Frank Rosenblatt's perceptron (1958) was an early
neural network; backpropagation became widely known in 1986. Nearest neighbours were analysed by Evelyn Fix and Joseph
Hodges (1951) and by Cover and Hart (1967). CART (1984), bagging (1996), boosting (1990s) and random forests (2001)
came from statisticians and computer scientists working on the same problems, and Breiman's 2001 essay "Statistical
modeling: the two cultures" argued that statisticians should take prediction seriously. Since about 2012, deep neural
networks trained on large data sets with graphics processors have dominated image, speech and text tasks. The formal
study of fairness in machine learning grew quickly from about 2016.

## Check yourself

??? question "1. A method has bias 0.3 and variance 0.05 at $x_0$, and the noise variance is 0.2. What is the expected squared prediction error there? Which term would you attack, and how?"

    $0.2 + 0.3^2 + 0.05 = 0.2 + 0.09 + 0.05 = 0.34$. The bias term (0.09) is larger than the variance, so a more
    flexible method (smaller $k$, a deeper tree, more terms) may help; the 0.2 cannot be reduced by any method.

??? question "2. In Worked example 1, find bias$^2$ + variance for $k = 8$ and $k = 12$. Is $k = 10$ the best even $k$?"

    $k = 8$: bias $= \frac{0.01 + 0.04 + 0.09 + 0.16}{4} = 0.075$, so $0.0056 + 0.25/8 = 0.0056 + 0.0313 = 0.0369$.
    $k = 12$: bias $= \frac{0.01(1 + 4 + 9 + 16 + 25 + 36)}{6} = \frac{0.91}{6} \approx 0.152$, so
    $0.0230 + 0.0208 = 0.0438$. And $k = 10$ gives $0.0371$. So no: $k = 8$ is marginally better, $0.0369$
    against $0.0371$, and is the best even $k$. The curve is flat near its bottom, and both 8 and 10 are
    near-optimal. (A good lesson: the exact best is fragile, the region is not.)

??? question "3. A logistic regression has $\hat\beta_0 = -2$ and $\hat\beta_1 = 0.5$. Find the predicted probability at $x = 4$ and at $x = 6$, and the odds ratio for one unit of $x$."

    At $x = 4$: $\eta = 0$, $p = 0.5$. At $x = 6$: $\eta = 1$, $p = \frac{1}{1 + e^{-1}} \approx 0.731$. Odds ratio
    $e^{0.5} \approx 1.65$. Check: odds go from 1 to $0.731 / 0.269 \approx 2.72 = e^1$, two units, $1.65^2 \approx 2.72$.

??? question "4. Show that at the maximum likelihood estimate of a logistic regression with an intercept, the fitted probabilities add up to the number of observed 1s."

    The gradient component for the intercept (whose $x_{i0} = 1$) is $\sum_i (y_i - p_i)$. At the maximum it is zero,
    so $\sum_i p_i = \sum_i y_i$.

??? question "5. Data: $x = 1, 2, 3$ with $y = 0$, and $x = 4, 5, 6$ with $y = 1$. Why does logistic regression fail to converge?"

    The classes are completely separated at $x = 3.5$. Taking $\beta_0 = -3.5t$, $\beta_1 = t$ and letting $t \to \infty$ makes every fitted probability approach the observed 0 or 1, so the likelihood approaches its supremum of 1
    without reaching it: there is no maximiser, and the coefficients run off to infinity.

??? question "6. Compute the Gini impurity of a node with classes in proportions $\frac12, \frac14, \frac14$, and of one with $\frac13, \frac13, \frac13$."

    $1 - \frac14 - \frac1{16} - \frac1{16} = \frac58 = 0.625$, and $1 - 3 \cdot \frac19 = \frac23 \approx 0.667$. The
    evenly mixed node is more impure.

??? question "7. Trees in a forest each have variance 1 and pairwise correlation 0.3. What is the variance of the average of 10 trees? Of infinitely many? What if the correlation were 0.1?"

    $\rho = 0.3$: $0.3 + 0.7 / 10 = 0.37$; limit $0.3$. $\rho = 0.1$: $0.1 + 0.9/10 = 0.19$; limit $0.1$. Lowering
    the correlation matters more than adding trees, which is the point of random forests.

??? question "8. A classifier with sensitivity 90% and specificity 99% is used where the base rate is 0.5%. Find its precision."

    $\text{PPV} = \frac{0.9 \times 0.005}{0.9 \times 0.005 + 0.01 \times 0.995} = \frac{0.0045}{0.0045 + 0.00995} = \frac{0.0045}{0.01445} \approx 31\%$. Even with 99% specificity, about two of every three positives are false.

??? question "9. Positives score 0.8, 0.6, 0.6 and negatives score 0.6, 0.3. Compute the AUC by counting pairs, with ties as one half."

    Pairs: $(0.8, 0.6)$ win, $(0.8, 0.3)$ win, $(0.6, 0.6)$ tie twice, $(0.6, 0.3)$ win twice. Total $1 + 1 + 0.5 + 0.5 + 1 + 1 = 5$ out of 6, so AUC $= \frac56 \approx 0.833$.

??? question "10. Use Chouldechova's identity: a group has base rate 0.2, PPV 0.6 and FNR 0.25. Find its FPR. What would the PPV have to be for its FPR to equal 0.1?"

    $\text{FPR} = \frac{0.2}{0.8} \cdot \frac{0.4}{0.6} \cdot 0.75 = 0.25 \cdot 0.667 \cdot 0.75 = 0.125$. For FPR 0.1:
    $0.25 \cdot \frac{1 - \text{PPV}}{\text{PPV}} \cdot 0.75 = 0.1$ gives $\frac{1 - \text{PPV}}{\text{PPV}} = \frac{0.1}{0.1875} \approx 0.533$, so $\text{PPV} = \frac{1}{1.533} \approx 0.652$.

??? question "11. A model to predict hospital readmission includes the variable 'number of days until next admission' (blank if none). Its test AUC is 0.99. What is wrong?"

    Target leakage: the variable is only known after the outcome happens, and a blank means "not readmitted", so it
    encodes the answer. At prediction time (at discharge) it does not exist. The 0.99 is meaningless; drop the
    variable and anything else recorded after the moment of prediction.

??? question "12. Explain why the universal approximation theorem does not imply that a neural network will predict well."

    It says that some choice of parameters approximates the target function well. It does not say that we can find
    those parameters by gradient descent, how many neurons are needed, or that parameters fitted to a finite noisy
    sample will be close to them; a model that can approximate anything can also fit the noise in the training set
    (high variance). Prediction depends on all of those, which is the bias-variance trade-off again.

## What you learned

- Expected prediction error is noise plus squared bias plus variance; flexible methods trade bias for variance, and
  the balance is tuned by cross-validation.
- Logistic regression models the log odds as linear, has a concave log-likelihood fitted by Newton's method, and its
  coefficients are log odds ratios.
- Nearest neighbours and trees are flexible but high-variance; averaging trees reduces variance down to a floor set by
  their correlation, which random forests lower.
- Precision depends on the base rate as Bayes' theorem says; the ROC curve shows all thresholds, and the AUC is the
  chance a positive outranks a negative.
- Neural networks are flexible nonlinear regressions fitted by maximum likelihood; their approximation power is proved,
  their good generalisation largely is not.
- Fairness criteria conflict when base rates differ (a provable identity), and leakage, especially selection done
  outside cross-validation, can manufacture accuracy from noise.

**Next:** [Chapter 20](20-Where-Statistics-Goes.md), the replication crisis, preregistration, conformal prediction,
causal machine learning, differential privacy, and the open questions of the field.

## Further reading

- G. James, D. Witten, T. Hastie and R. Tibshirani, *An Introduction to Statistical Learning*, 2nd edition, 2021 (free
  online from the authors), the gentlest complete introduction.
- T. Hastie, R. Tibshirani and J. Friedman, *The Elements of Statistical Learning*, 2nd edition, 2009.
- D. R. Cox, "The regression analysis of binary sequences", *Journal of the Royal Statistical Society, Series B* 20,
  1958.
- T. Cover and P. Hart, "Nearest neighbor pattern classification", *IEEE Transactions on Information Theory* 13, 1967.
- L. Breiman, J. Friedman, R. Olshen and C. Stone, *Classification and Regression Trees*, 1984; L. Breiman, "Random
  forests", *Machine Learning* 45, 2001; and "Statistical modeling: the two cultures", *Statistical Science* 16, 2001.
- M. Belkin, D. Hsu, S. Ma and S. Mandal, "Reconciling modern machine-learning practice and the classical bias-variance
  trade-off", *Proceedings of the National Academy of Sciences* 116, 2019.
- G. Cybenko, "Approximation by superpositions of a sigmoidal function", *Mathematics of Control, Signals and Systems*
  2, 1989.
- T. Fawcett, "An introduction to ROC analysis", *Pattern Recognition Letters* 27, 2006.
- A. Chouldechova, "Fair prediction with disparate impact: a study of bias in recidivism prediction instruments", *Big
  Data* 5, 2017; J. Kleinberg, S. Mullainathan and M. Raghavan, "Inherent trade-offs in the fair determination of risk
  scores", 2016 (Innovations in Theoretical Computer Science, 2017).
- S. Barocas, M. Hardt and A. Narayanan, *Fairness and Machine Learning*, 2023 (free online from the authors).
- S. Kaufman, S. Rosset and C. Perlich, "Leakage in data mining: formulation, detection, and avoidance", KDD 2011.
- C. Ambroise and G. J. McLachlan, "Selection bias in gene extraction on the basis of microarray gene-expression
  data", *Proceedings of the National Academy of Sciences* 99, 2002.
- On this site: [Probability, Chapter 4: Bayes' theorem](../probability/04-Bayes-Theorem.md) and the
  [Bayes' theorem lesson](../../topics/probability/level-8/01-bayes-theorem.md) for base rates; the
  [least squares lesson](../../topics/statistics/level-7/05-least-squares.md);
  [CSC148](../../uoft/CSC148H1/index.md) if you want to program these methods yourself; and the
  [Statistics book's contents](index.md).
