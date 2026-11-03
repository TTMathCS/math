# Glossary

*Short definitions of the terms this book uses, from A to Z, each with a link to the chapter that teaches it.*

## A

**A/B test**
A randomised experiment that compares two versions of something, such as two designs of a web page, by assigning users to them at random. Large websites run thousands of them.
See [Chapter 1](01-What-Statistics-Is-For.md#when-experiments-are-impossible).

**Acceptance region**
For a test of $H_0: \theta = \theta_0$ at level $\alpha$, the set $A(\theta_0)$ of data sets for which the test does not reject. Inverting tests turns the acceptance regions into a confidence set.
See [Chapter 9](09-Hypothesis-Tests.md#the-duality-theorem).

**Accuracy**
The share of all cases that a classifier gets right, $(TP + TN)/\text{total}$. With rare positives it can be high for a useless classifier.
See [Chapter 19](19-Statistical-Learning.md#the-confusion-matrix).

**Activation function**
The nonlinear function $a$ applied inside each neuron of a neural network; today it is usually $a(t) = \max(0, t)$, the rectified linear unit. Without it a network collapses back to a linear model.
See [Chapter 19](19-Statistical-Learning.md#what-a-network-is).

**Adaptive data analysis**
The study of valid inference when each analysis is chosen after seeing the results of earlier ones on the same data. It is one answer to the problem of inference after looking at the data.
See [Chapter 20](20-Where-Statistics-Goes.md#206-open-questions).

**Additive decomposition**
The classical model of a time series as trend plus seasonal component plus irregular component, $x_t = T_t + S_t + E_t$. When the seasonal swing grows with the level, the multiplicative decomposition fits better.
See [Chapter 16](16-Time-Series.md#the-decomposition).

**Adjusted $R^2$**
A version of $R^2$ that replaces the sums of squares by their unbiased variance estimates, so that adding a useless predictor can lower it. It penalises model size, unlike plain $R^2$.
See [Chapter 12](12-Multiple-Regression.md#penalising-size-adjusted-r2-and-information-criteria).

**Adjustment formula**
If a set $S$ satisfies the backdoor criterion, the effect of setting $X$ is found by averaging the conditional distribution of $Y$ given $X$ and $S$ over the distribution of $S$. It is the stratification of observational studies written for a causal diagram.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#paths-blocking-and-the-backdoor-criterion).

**Agresti-Coull interval**
An interval for a proportion that uses the Wald formula with $\tilde{n} = n + z^2$ and $\tilde{p} = (x + z^2/2)/\tilde{n}$, about "add two successes and two failures". It has the same centre as the Wilson interval and slightly higher coverage.
See [Chapter 8](08-Confidence-Intervals.md#the-agresti-coull-interval).

**AIC**
Akaike's information criterion (1974), for a normal linear model $n\log(\text{SSE}/n) + 2p$ up to a constant. Smaller is better; it balances fit against the number of parameters.
See [Chapter 12](12-Multiple-Regression.md#penalising-size-adjusted-r2-and-information-criteria).

**Alternative hypothesis**
The statement $H_1$ (or $H_A$) that we will believe if the evidence against the null hypothesis is strong. It is two-sided, such as $\mu \ne 500$, or one-sided, such as $\mu > 500$.
See [Chapter 9](09-Hypothesis-Tests.md#the-pieces-of-a-test).

**Always-takers**
In an instrumental variable study, the units that take the treatment whatever the value of the instrument. Like never-takers, they contribute nothing to the Wald ratio.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#instrumental-variables).

**Analysis of covariance (ANCOVA)**
A regression with both a categorical predictor (coded by dummies) and a quantitative one, comparing group means while adjusting for the quantitative variable.
See [Chapter 12](12-Multiple-Regression.md#the-same-thing-as-a-regression).

**Analysis of variance (ANOVA)**
A test of whether several group means are equal, $H_0: \mu_A = \mu_B = \mu_C$, by splitting the variation into a between-group and a within-group part and comparing them with an F statistic. It is a regression on dummy variables; Fisher developed it.
See [Chapter 12](12-Multiple-Regression.md#comparing-several-means).

**Anscombe's quartet**
Four small data sets made by Francis Anscombe (1973) with the same means, variances, correlation and least squares line but completely different scatter plots. Its lesson: always plot your data.
See [Chapter 2](02-Pictures-of-Data.md#26-anscombes-quartet).

**Area under the curve (AUC)**
The area under a ROC curve. It equals the probability that a randomly chosen positive gets a higher score than a randomly chosen negative; 1 is perfect and 0.5 is guessing.
See [Chapter 19](19-Statistical-Learning.md#roc-curves-and-auc).

**Associated (categorical variables)**
Two categorical variables are associated in a table if the conditional distribution of one differs from row to row. If every row has the same conditional distribution, there is no association.
See [Chapter 4](04-Relationships-and-Correlation.md#41-two-way-tables).

**Association, direction and strength**
In a scatter plot, the association is positive if $y$ tends to rise as $x$ rises and negative if it tends to fall. It is strong if the points stay close to the form, weak if they form a loose cloud.
See [Chapter 2](02-Pictures-of-Data.md#24-scatter-plots).

**Asymptotic normality of the MLE**
Under regularity conditions, $\sqrt{n}(\hat\theta - \theta_0)$ tends in distribution to $N(0, 1/I(\theta_0))$, where $I$ is the Fisher information. So for large samples the MLE is nearly unbiased, nearly normal and reaches the Cramér-Rao bound.
See [Chapter 13](13-Likelihood-Theory.md#the-statement).

**Asymptotic relative efficiency (ARE)**
The limiting ratio of the sample sizes two tests need to reach the same power against the same small alternative. It measures what a nonparametric test loses by discarding values, which is usually little.
See [Chapter 15](15-Nonparametric-Methods.md#the-price-and-why-it-is-small).

**Autocorrelation**
For a series with constant mean and variance, $\rho(h) = \gamma(h)/\gamma(0)$, the correlation between the series and itself $h$ steps later. The sample version is written $r_h$.
See [Chapter 16](16-Time-Series.md#covariance-with-yourself).

**Autocorrelation function (ACF)**
The function $h \mapsto \rho(h)$, usually drawn as bars against the lag. A trend makes it decay slowly, a season gives peaks at the seasonal lags, and short memory makes it die away fast.
See [Chapter 16](16-Time-Series.md#covariance-with-yourself).

**Autocovariance**
The covariance $\gamma(h) = \operatorname{Cov}(X_t, X_{t+h})$ between a series and itself $h$ steps later, for a series whose mean and variance do not change with time.
See [Chapter 16](16-Time-Series.md#covariance-with-yourself).

**Autoregressive model of order 1 (AR(1))**
The model $X_t = \phi X_{t-1} + \varepsilon_t$ with $\varepsilon_t$ white noise: each value is a fraction of the previous one plus a new shock. For $|\phi| < 1$ it is stationary with $\rho(h) = \phi^{|h|}$.
See [Chapter 16](16-Time-Series.md#the-ar1-model).

**Average**
Another name for the mean.
See [Chapter 3](03-Summaries.md#the-mean).

**Average treatment effect (ATE)**
The mean of the individual treatment effects over a population, $E[Y(1) - Y(0)]$. It is the usual target of an experiment.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#what-does-the-effect-mean).

**Average treatment effect on the treated (ATT)**
The average of $Y(1) - Y(0)$ taken only over the units that actually received the treatment.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#what-does-the-effect-mean).

## B

**Backdoor criterion**
Pearl's condition on a set $S$ of variables, relative to $(X, Y)$: no member of $S$ is a descendant of $X$, and $S$ blocks every path from $X$ to $Y$ that starts with an arrow into $X$. Then adjusting for $S$ gives the causal effect.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#paths-blocking-and-the-backdoor-criterion).

**Backpropagation**
The computation of the gradient of a neural network's loss by the chain rule, organised layer by layer. It makes gradient descent on networks practical.
See [Chapter 19](19-Statistical-Learning.md#what-a-network-is).

**Bagging**
Bootstrap aggregating (Breiman, 1996): fit a model, such as a tree, to each of $B$ bootstrap samples of the training set and average the predictions (or take a vote). It reduces variance.
See [Chapter 19](19-Statistical-Learning.md#averaging-bagging-and-random-forests).

**Balancing property**
Given the propensity score $e(X)$, the covariates $X$ and the treatment $T$ are independent. So if treatment is unconfounded given $X$, it is unconfounded given $e(X)$ alone, and one can match or stratify on a single number.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#propensity-scores).

**Bandwidth**
The width $h > 0$ of the bumps in a kernel density estimate. Too small undersmooths (a bump for every point); too large oversmooths (real features vanish).
See [Chapter 15](15-Nonparametric-Methods.md#from-histogram-to-smooth-curve).

**Bar chart**
A picture of a categorical variable with one separate bar per category, its height equal to the count or proportion. The vertical axis must start at zero, because the reader compares lengths.
See [Chapter 2](02-Pictures-of-Data.md#bar-charts-for-categories).

**Base rate**
The share $\pi$ of cases that are truly positive, also called the prevalence. Precision depends on it, so the same classifier has very different precision in populations with different base rates.
See [Chapter 19](19-Statistical-Learning.md#base-rates).

**Baseline category**
The category of a categorical predictor that gets no dummy variable; each dummy's coefficient compares its category with the baseline.
See [Chapter 12](12-Multiple-Regression.md#categorical-predictors).

**Basic bootstrap interval**
The interval $(2\hat\theta - q^*_{0.975},\ 2\hat\theta - q^*_{0.025})$, also called the reverse percentile interval. It uses the bootstrap distribution of $\hat\theta^* - \hat\theta$ to imitate that of $\hat\theta - \theta$, and so flips the tails.
See [Chapter 8](08-Confidence-Intervals.md#the-basic-interval).

**Bayes error rate**
The error rate of the best possible classifier, the one that knows the true class probabilities. The error of the 1-nearest-neighbour rule tends to at most twice it.
See [Chapter 19](19-Statistical-Learning.md#nearest-neighbours).

**Bayes' theorem for a parameter**
The posterior density is proportional to the likelihood times the prior: $\pi(\theta \mid x) = f(x \mid \theta)\pi(\theta)/m(x)$. It turns a prior belief about $\theta$ into a posterior belief after seeing data.
See [Chapter 14](14-Bayesian-Statistics.md#bayes-theorem-for-a-parameter).

**BCa interval**
Efron's bias-corrected and accelerated bootstrap interval, which adjusts the percentile interval for bias and for a standard error that changes with the parameter.
See [Chapter 8](08-Confidence-Intervals.md#the-bootstrap-t-interval).

**Benjamini-Hochberg procedure**
A method that controls the false discovery rate at level $q$: sort the p-values, find the largest $k$ with $p_{(k)} \le kq/m$, and reject the hypotheses with the $k$ smallest p-values.
See [Chapter 9](09-Hypothesis-Tests.md#the-false-discovery-rate).

**Berkson's paradox**
A spurious association created by conditioning on a collider: two independent causes of being selected (for example, into a hospital) look related among those selected.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#drawing-the-assumptions).

**Bernoulli variable**
A random variable that is 1 with probability $p$ and 0 otherwise, with mean $p$ and variance $p(1-p)$. A sample proportion is the mean of Bernoulli variables.
See [Chapter 6](06-Sampling-Distributions.md#a-proportion-is-a-mean).

**Bernstein-von Mises theorem**
In regular models, with large samples, the posterior is approximately normal around the MLE with variance $1/(nI)$, whatever the (smooth, positive) prior. So credible and confidence intervals then nearly agree.
See [Chapter 14](14-Bayesian-Statistics.md#what-each-one-claims).

**Beta distribution**
The distribution on $[0, 1]$ with density proportional to $\theta^{a-1}(1-\theta)^{b-1}$, $a, b > 0$. It is the conjugate prior for a binomial proportion: the posterior after $x$ successes in $n$ trials is Beta$(a + x, b + n - x)$.
See [Chapter 14](14-Bayesian-Statistics.md#beta-binomial).

**Bias (of an estimator)**
$\operatorname{bias}(\hat\theta) = E[\hat\theta] - \theta$: how far the centre of the estimator's sampling distribution is from the truth.
See [Chapter 7](07-Estimation.md#the-words).

**Bias (of a sampling method)**
A systematic tendency of a method to miss in one direction. It is a property of the method, not of one sample, and a larger sample does not cure it.
See [Chapter 5](05-Sampling-and-Experiments.md#the-question).

**Biased sample**
A sample that systematically misrepresents the population, for example through self-selection.
See [Chapter 1](01-What-Statistics-Is-For.md#random-samples-and-a-first-theorem).

**Bias-variance trade-off**
At a point $x_0$, the expected squared prediction error is $\sigma^2$ plus squared bias plus variance. Flexible models have small bias and large variance, rigid ones the reverse, so test error is typically smallest in between.
See [Chapter 19](19-Statistical-Learning.md#fitting-versus-predicting).

**BIC**
Schwarz's Bayesian information criterion (1978): like AIC but with the penalty $2p$ replaced by $p\log n$, so it favours smaller models when $n$ is large.
See [Chapter 12](12-Multiple-Regression.md#penalising-size-adjusted-r2-and-information-criteria).

**Bills of mortality**
The weekly lists of burials and christenings published by the London parishes from the early seventeenth century. John Graunt's 1662 study of them was the start of statistics as a science.
See [Chapter 1](01-What-Statistics-Is-For.md#john-graunt-and-the-bills-of-mortality-1662).

**Blinding**
Hiding which treatment each subject received. In a single-blind study the subjects do not know their group; in a double-blind study neither the subjects nor the people who treat and assess them know.
See [Chapter 5](05-Sampling-and-Experiments.md#blinding).

**Blocked path**
A path in a causal diagram is blocked by a set $S$ if it contains a chain or fork whose middle node is in $S$, or a collider that is not in $S$ and has no descendant in $S$.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#paths-blocking-and-the-backdoor-criterion).

**Blocking**
Grouping the experimental units into blocks of similar units and randomising separately within each block, so that differences between blocks do not swamp the treatment effect.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#blocking).

**BLUE**
Best linear unbiased estimator. The Gauss-Markov theorem says least squares is BLUE: it has the smallest variance among all linear unbiased estimators.
See [Chapter 12](12-Multiple-Regression.md#the-gauss-markov-theorem).

**Bonferroni correction**
Testing each of $m$ hypotheses at level $\alpha/m$. By the union bound the family-wise error rate is then at most $\alpha$.
See [Chapter 9](09-Hypothesis-Tests.md#the-family-wise-error-rate-and-bonferroni).

**Boosting**
An ensemble method that fits small trees one after another, each concentrating on what the previous ones got wrong, and adds them up.
See [Chapter 19](19-Statistical-Learning.md#averaging-bagging-and-random-forests).

**Bootstrap**
Efron's idea of treating the empirical distribution of the data as if it were the population: draw many resamples of size $n$ with replacement from the data and use the spread of a statistic across them to estimate its sampling distribution.
See [Chapter 6](06-Sampling-Distributions.md#the-plug-in-principle).

**Bootstrap resample**
A sample $x_1^*, \dots, x_n^*$ of size $n$ drawn with replacement from the data. Some values appear more than once and others not at all; on average it contains about 63% of the distinct data points.
See [Chapter 6](06-Sampling-Distributions.md#the-plug-in-principle).

**Bootstrap standard error**
The standard deviation of a statistic over $B$ bootstrap resamples, used as an estimate of its standard error.
See [Chapter 6](06-Sampling-Distributions.md#the-plug-in-principle).

**Bootstrap-$t$ interval**
A bootstrap interval that imitates Student by bootstrapping the studentised quantity $(\hat\theta^* - \hat\theta)/\widehat{\operatorname{se}}^*$. When a good standard error is available, it is the best-behaved of the simple methods.
See [Chapter 8](08-Confidence-Intervals.md#the-bootstrap-t-interval).

**Box plot**
A picture of the five-number summary: a box from $Q_1$ to $Q_3$ with a line at the median, whiskers out to the most extreme values that are not flagged as outliers, and each outlier as a dot. Also called a box-and-whisker plot.
See [Chapter 2](02-Pictures-of-Data.md#drawing-the-box-plot).

**Breakdown point**
The smallest fraction of the data that, if replaced by arbitrary values, can carry a summary as far as you like. The mean has breakdown point $1/n$; the median about $\frac{1}{2}$.
See [Chapter 3](03-Summaries.md#the-breakdown-point).

**Burn-in**
The early part of an MCMC chain, before it reaches the bulk of the posterior, which is discarded.
See [Chapter 14](14-Bayesian-Statistics.md#diagnostics-how-do-you-know-it-worked).

## C

**Calibrated (classifier)**
A score is calibrated if a given score means the same probability of the outcome in every group. Chouldechova's result shows that with different base rates a classifier cannot be calibrated and also have equal error rates in both groups.
See [Chapter 19](19-Statistical-Learning.md#fairness-a-debate-with-a-theorem-inside).

**Calibration set**
In split conformal prediction, the part of the data held back from fitting, on which the scores are computed to set the width of the prediction intervals.
See [Chapter 20](20-Where-Statistics-Goes.md#split-conformal-prediction).

**Case-control study**
A study that finds people who have a disease (the cases) and a comparable group who do not (the controls), and looks back at their exposure. Risks cannot be estimated from it, but the odds ratio can.
See [Chapter 10](10-Categorical-Data.md#why-the-odds-ratio-exists-case-control-studies).

**Categorical variable**
A variable that puts units into groups, also called qualitative. It is nominal if the groups have no order and ordinal if they do.
See [Chapter 1](01-What-Statistics-Is-For.md#types-of-variable).

**Causal diagram**
A directed acyclic graph that writes down assumptions about what causes what, so that their consequences, such as which variables to adjust for, can be read off.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#drawing-the-assumptions).

**Causal discovery**
Learning the causal graph itself from data. It is possible only under further strong assumptions.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#paths-blocking-and-the-backdoor-criterion).

**Causal forest**
A random forest of "honest" trees that split on differences in treatment effect, used to estimate the conditional average treatment effect $\tau(x)$ (Wager and Athey, 2018).
See [Chapter 20](20-Where-Statistics-Goes.md#heterogeneous-effects).

**Central limit theorem (CLT)**
If $X_1, X_2, \dots$ are iid with mean $\mu$ and finite variance $\sigma^2 > 0$, then the standardised mean $(\bar{X} - \mu)/(\sigma/\sqrt{n})$ is approximately standard normal for large $n$, whatever the shape of the population.
See [Chapter 6](06-Sampling-Distributions.md#the-statement-we-use).

**Centred moving average**
The average of a value and the $k$ values on each side of it (order $2k+1$). It smooths away noise and, with the right order (such as the $2 \times 12$ average for monthly data), the season, leaving the trend.
See [Chapter 16](16-Time-Series.md#centred-moving-averages).

**Chain (in a causal diagram)**
A path $X \to M \to Y$ in which $X$ affects $Y$ through the mediator $M$. Holding $M$ fixed blocks the association it carries.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#drawing-the-assumptions).

**Chebyshev's inequality for data**
For any data set and any $k > 0$, at most a fraction $1/k^2$ of the values lie $k$ or more standard deviations (divisor $n$) from the mean.
See [Chapter 3](03-Summaries.md#chebyshevs-inequality-for-data).

**Chi-squared distribution**
The distribution of a sum of $\nu$ squared independent standard normals, written $\chi^2_\nu$. For normal data $(n-1)S^2/\sigma^2$ has the $\chi^2_{n-1}$ distribution, and Pearson's statistic is approximately chi-squared.
See [Chapter 9](09-Hypothesis-Tests.md#when-sigma-is-unknown).

**Chi-square goodness-of-fit test**
A test of whether counts in $k$ categories follow given probabilities $p_i$, using Pearson's statistic $X^2 = \sum (O_i - E_i)^2/E_i$, which is approximately $\chi^2_{k-1}$ under the null hypothesis.
See [Chapter 10](10-Categorical-Data.md#pearsons-statistic).

**Chi-square test of independence**
A test of whether two categorical variables are independent, comparing a contingency table's observed counts with the expected counts (row total times column total over grand total). It has $(r-1)(c-1)$ degrees of freedom.
See [Chapter 10](10-Categorical-Data.md#the-test).

**Classification**
Prediction when the response is a category, such as passed or failed.
See [Chapter 19](19-Statistical-Learning.md#the-model).

**Classification tree**
A classifier that asks a sequence of yes-or-no questions, each splitting the data in two, until it reaches a leaf, where it predicts the majority class. Splits are chosen to reduce impurity, such as the Gini impurity.
See [Chapter 19](19-Statistical-Learning.md#classification-trees).

**Cluster sampling**
Sampling whole groups (clusters, such as schools) at random and measuring all or some of the units in each. It is cheap, but members of a cluster tend to be alike, which raises the variance.
See [Chapter 5](05-Sampling-and-Experiments.md#cluster-sampling).

**Coefficient of determination ($R^2$)**
The fraction of the variation in $y$ that the regression accounts for, $R^2 = \text{SSR}/\text{SST} = 1 - \text{SSE}/\text{SST}$. In simple linear regression it equals $r^2$.
See [Chapter 11](11-Linear-Regression.md#splitting-the-variation).

**Collider**
A node $C$ with two arrows into it, $X \to C \leftarrow Y$. It blocks the path when left alone, but conditioning on it (or on a descendant) opens the path and can create a spurious association.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#drawing-the-assumptions).

**Collinearity**
Some predictors are nearly linear combinations of others (also called multicollinearity). It inflates the standard errors and makes coefficients unstable, but does not harm prediction for cases like the data.
See [Chapter 12](12-Multiple-Regression.md#when-predictors-overlap).

**Column space**
The set of all linear combinations $Xb$ of the columns of the design matrix. Least squares finds the point of the column space closest to $y$, the perpendicular projection.
See [Chapter 12](12-Multiple-Regression.md#least-squares-as-a-perpendicular).

**Complete pooling**
In a hierarchical setting, assuming all groups share one effect and estimating it by the precision-weighted mean. It is one extreme; no pooling is the other.
See [Chapter 14](14-Bayesian-Statistics.md#eight-schools).

**Complete separation**
A line that separates the two classes perfectly. Then the logistic regression likelihood has no maximum: the coefficients run off to infinity.
See [Chapter 19](19-Statistical-Learning.md#try-it-in-python).

**Complete statistic**
A statistic $T$ such that no nonzero function of $T$ has mean zero for every $\theta$. By the Lehmann-Scheffé theorem, an unbiased function of a complete sufficient statistic is the best unbiased estimator.
See [Chapter 13](13-Likelihood-Theory.md#rao-blackwell-sufficiency-improves-estimators).

**Completely randomised experiment**
An experiment in which $n_1$ of the $N$ units are chosen uniformly at random to be treated and the rest are controls.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#unbiasedness-proved).

**Compliers**
In an instrumental variable study, the units that take the treatment if and only if encouraged. The Wald estimator measures the average effect among them.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#instrumental-variables).

**Compressed sensing**
The result (Candès, Romberg and Tao; Donoho; 2006) that sparse signals can be recovered exactly from far fewer measurements than unknowns, by $\ell_1$ minimisation like the lasso.
See [Chapter 18](18-High-Dimensional-Statistics.md#what-is-known-about-the-lasso).

**Conditional average treatment effect**
The average effect for units with covariates $x$, $\tau(x) = E[Y(1) - Y(0) \mid X = x]$. It describes how a treatment's effect varies between people.
See [Chapter 20](20-Where-Statistics-Goes.md#heterogeneous-effects).

**Conditional distribution**
In a two-way table, each cell divided by its row total (or its column total): the distribution of one variable within one group of the other.
See [Chapter 4](04-Relationships-and-Correlation.md#41-two-way-tables).

**Confidence interval**
An interval $(L, U)$ computed from the data such that $P(L \le \theta \le U) = 1 - \alpha$ for every value of the parameter. The random things are $L$ and $U$, not $\theta$.
See [Chapter 8](08-Confidence-Intervals.md#the-definition).

**Confidence level**
The probability $1 - \alpha$, such as 0.95, that the procedure gives an interval containing the true parameter.
See [Chapter 8](08-Confidence-Intervals.md#the-definition).

**Confirmatory analysis**
An analysis that follows a preregistered plan; its p-values mean what they claim. Anything else is exploratory.
See [Chapter 20](20-Where-Statistics-Goes.md#202-preregistration).

**Conformal prediction**
A way to wrap any prediction method in intervals with guaranteed coverage, assuming only exchangeable data. In split conformal prediction the width is the $\lceil (n+1)(1-\alpha) \rceil$-th smallest score on a calibration set.
See [Chapter 20](20-Where-Statistics-Goes.md#split-conformal-prediction).

**Conformalised quantile regression**
Conformal prediction applied to quantile regression bands, giving intervals whose width adapts to $x$ while keeping the coverage guarantee.
See [Chapter 20](20-Where-Statistics-Goes.md#what-it-does-and-does-not-promise).

**Confounder**
A variable that affects both the treatment (or explanatory variable) and the outcome, so that it can create or hide an association. Also called a confounding or lurking variable.
See [Chapter 4](04-Relationships-and-Correlation.md#confounders-more-carefully).

**Confounding**
The mixing of the effect of a treatment with the effect of a background variable that also affects who gets the treatment. Randomisation is the cure.
See [Chapter 5](05-Sampling-and-Experiments.md#observing-versus-intervening).

**Confusion matrix**
The two-by-two table of a classifier's predictions against the truth, with true positives, false positives, false negatives and true negatives.
See [Chapter 19](19-Statistical-Learning.md#the-confusion-matrix).

**Conjugate prior**
A family of priors is conjugate to a likelihood if the posterior is in the same family, as with beta-binomial, gamma-Poisson and normal-normal. Conjugate pairs give exact posteriors by updating parameters.
See [Chapter 14](14-Bayesian-Statistics.md#142-conjugate-pairs).

**Conservative test**
A test that rejects a true null hypothesis with probability at most, and usually less than, its nominal level $\alpha$.
See [Chapter 9](09-Hypothesis-Tests.md#the-p-value-is-uniform-when-the-null-is-true).

**Consistent estimator**
A sequence of estimators $\hat\theta_n$ is consistent for $\theta$ if for every $\varepsilon > 0$, $P(|\hat\theta_n - \theta| > \varepsilon) \to 0$ as $n \to \infty$. A sufficient condition is that the MSE tends to 0.
See [Chapter 7](07-Estimation.md#homing-in-on-the-truth).

**Contingency table**
Another name for a two-way table of counts.
See [Chapter 4](04-Relationships-and-Correlation.md#41-two-way-tables).

**Continuity correction**
When approximating a discrete distribution by the normal, moving the cut-off by one half, so that $P(X \ge 100)$ becomes $P(X > 99.5)$.
See [Chapter 6](06-Sampling-Distributions.md#using-it).

**Continuous mapping theorem**
If $\hat\theta_n$ is consistent for $\theta$ and $g$ is continuous at $\theta$, then $g(\hat\theta_n)$ is consistent for $g(\theta)$.
See [Chapter 7](07-Estimation.md#examples_1).

**Continuous variable**
A quantitative variable whose values can in principle be anything in an interval, such as height or time.
See [Chapter 1](01-What-Statistics-Is-For.md#types-of-variable).

**Control group**
The group in an experiment that gets no treatment, a placebo, or the standard treatment, as a basis for comparison.
See [Chapter 5](05-Sampling-and-Experiments.md#observing-versus-intervening).

**Convenience sampling**
Taking the units easiest to reach. It is a common source of bias.
See [Chapter 5](05-Sampling-and-Experiments.md#the-kinds-of-bias).

**Convergence in probability**
$\hat\theta_n$ converges in probability to $\theta$ if $P(|\hat\theta_n - \theta| > \varepsilon) \to 0$ for every $\varepsilon > 0$. It is the mode of convergence in the weak law of large numbers and in the definition of consistency.
See [Chapter 7](07-Estimation.md#homing-in-on-the-truth).

**Cook's distance**
A single number for each point that combines its residual and its leverage, measuring how much the fitted values change when the point is removed (R. Dennis Cook, 1977).
See [Chapter 11](11-Linear-Regression.md#leverage-outliers-and-influence).

**Coordinate descent**
An algorithm that minimises a function by updating one coordinate at a time while holding the others fixed. For the lasso each update is a soft thresholding.
See [Chapter 18](18-High-Dimensional-Statistics.md#what-is-known-about-the-lasso).

**Correlation coefficient**
Pearson's $r = s_{xy}/(s_x s_y)$, the average product of the z-scores of $x$ and $y$ (with divisor $n - 1$). It lies between $-1$ and $1$, has no units, and measures only straight-line association.
See [Chapter 4](04-Relationships-and-Correlation.md#building-it-from-z-scores).

**Covariance matrix**
The $p \times p$ matrix whose $(j, k)$ entry is $\operatorname{Cov}(x_j, x_k)$, with the variances on the diagonal. It is symmetric, and its eigenvectors are the principal components.
See [Chapter 18](18-High-Dimensional-Statistics.md#the-question).

**Covariance, sample**
$s_{xy} = \frac{1}{n-1}\sum (x_i - \bar{x})(y_i - \bar{y})$, positive when $x$ and $y$ tend to be above their means together.
See [Chapter 4](04-Relationships-and-Correlation.md#building-it-from-z-scores).

**Covariates**
Background variables measured on each unit before treatment, used for matching, stratifying or adjusting.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#matching-on-observed-covariates).

**Coverage**
The fraction of intervals, over repeated samples, that contain the true parameter. A 95 percent confidence interval should have coverage 0.95.
See [Chapter 8](08-Confidence-Intervals.md#the-definition).

**Cramér-Rao bound**
Under regularity conditions, every unbiased estimator of $\theta$ has variance at least $1/(nI(\theta))$, where $I$ is the Fisher information in one observation.
See [Chapter 13](13-Likelihood-Theory.md#the-theorem).

**Credible interval**
An interval that contains the parameter with posterior probability 0.95 (or another level), given these data and this prior. It is a statement about $\theta$, unlike a confidence interval.
See [Chapter 14](14-Bayesian-Statistics.md#definitions).

**Cross-entropy loss**
The negative log-likelihood of a classifier's predicted probabilities, averaged over the data; also called log loss. Minimising it is maximum likelihood.
See [Chapter 19](19-Statistical-Learning.md#the-likelihood-and-its-single-peak).

**Cross-fitting**
Splitting the data into folds and computing each fold's nuisance predictions from models fitted on the other folds, so that no unit's residual comes from a model that has seen it. It is a step of double machine learning.
See [Chapter 20](20-Where-Statistics-Goes.md#double-machine-learning).

**Cross-validation**
Estimating prediction error by splitting the data into $K$ folds, fitting on $K - 1$ of them, predicting the one left out, and averaging over the folds. With $K = n$ it is leave-one-out cross-validation.
See [Chapter 12](12-Multiple-Regression.md#cross-validation).

**Curse of dimensionality**
The ways high-dimensional space defeats intuition: neighbourhoods are not local, the volume is in the corners and the skin, and all distances look alike. Methods that rely on nearby points need exponentially many of them.
See [Chapter 18](18-High-Dimensional-Statistics.md#184-the-curse-of-dimensionality).

## D

**d-separation**
Two nodes of a causal diagram are d-separated by a set $S$ if every path between them is blocked by $S$. Then they are independent given $S$ in every distribution compatible with the graph.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#paths-blocking-and-the-backdoor-criterion).

**Data distribution**
The $n$ values in your one sample, what a histogram of your data shows. It is distinct from the population distribution and from the sampling distribution of a statistic.
See [Chapter 6](06-Sampling-Distributions.md#the-words).

**Data leakage**
Information that would not be available at prediction time, or information from the test data, getting into the training of a model, which makes its measured accuracy too good. Target leakage and train-test contamination are two kinds.
See [Chapter 19](19-Statistical-Learning.md#leakage-accuracy-from-nowhere).

**Defiers**
In an instrumental variable study, units that would take the treatment only when not encouraged. The monotonicity assumption says there are none.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#instrumental-variables).

**Degrees of freedom**
The number of independent pieces of information left for estimating variation. The $n$ deviations from the mean add to zero, so only $n - 1$ are free, which is why the sample variance divides by $n - 1$.
See [Chapter 7](07-Estimation.md#the-proof).

**Delta method**
A first-order Taylor expansion giving the approximate standard error of $g(\hat\theta)$: about $|g'(\theta)|$ times that of $\hat\theta$.
See [Chapter 13](13-Likelihood-Theory.md#using-it).

**Density scale**
The vertical scale of a histogram with height equal to the fraction of the data in the bin divided by the bin width. Then the area of each bar is the fraction of the data in it, which keeps unequal bins honest.
See [Chapter 2](02-Pictures-of-Data.md#the-density-scale-and-unequal-bins).

**Design-based inference**
Inference in which the potential outcomes are fixed numbers and the only randomness is in who gets treated, also called randomisation-based inference.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#unbiasedness-proved).

**Design effect**
How many times larger the variance of a cluster sample is than that of a simple random sample of the same size: $1 + (m-1)\rho$ for clusters of $m$ members with intraclass correlation $\rho$.
See [Chapter 5](05-Sampling-and-Experiments.md#cluster-sampling).

**Design matrix**
The $n \times p$ matrix $X$ of predictor values, one row per unit, with a first column of 1s for the intercept. The multiple regression model is $y = X\beta + \varepsilon$.
See [Chapter 12](12-Multiple-Regression.md#the-model-in-one-line).

**Difference in differences**
The change over time in the treated group minus the change in a control group. Under the parallel trends assumption it estimates the effect of the treatment on the treated.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#difference-in-differences).

**Differential privacy**
A randomised algorithm $M$ is $\varepsilon$-differentially private if for all neighbouring data sets $D, D'$ and every set of outputs $A$, $P(M(D) \in A) \le e^{\varepsilon}P(M(D') \in A)$. No output reveals much about any one person.
See [Chapter 20](20-Where-Statistics-Goes.md#the-definition).

**Directed acyclic graph (DAG)**
A graph with a node for each variable and an arrow for each direct cause, with no path that follows the arrows from a variable back to itself.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#drawing-the-assumptions).

**Discrete variable**
A quantitative variable whose values can be listed one by one, usually counts.
See [Chapter 1](01-What-Statistics-Is-For.md#types-of-variable).

**Distribution (of a variable)**
The list of values a variable takes and how often it takes each.
See [Chapter 2](02-Pictures-of-Data.md#21-bar-charts-histograms-and-stem-plots).

**Distribution-free**
A test is distribution-free for a null hypothesis if its null distribution is the same for every continuous distribution allowed by that hypothesis, as for tests based on signs, ranks or rearrangements.
See [Chapter 15](15-Nonparametric-Methods.md#distribution-free).

**Distribution shift**
New data coming from a different distribution than the training or calibration data. It breaks guarantees such as conformal coverage that rest on exchangeability.
See [Chapter 20](20-Where-Statistics-Goes.md#what-it-does-and-does-not-promise).

**Double machine learning**
A recipe (Chernozhukov and others, 2018) for estimating a causal effect with machine learning for the nuisance parts: cross-fit predictions of the outcome and the treatment, then regress outcome residuals on treatment residuals.
See [Chapter 20](20-Where-Statistics-Goes.md#double-machine-learning).

**Dummy variable**
A 0/1 indicator for one category of a categorical predictor. With $k$ categories one uses $k - 1$ dummies and a baseline; using $k$ with an intercept is the dummy variable trap, because the columns become linearly dependent.
See [Chapter 12](12-Multiple-Regression.md#categorical-predictors).

## E

**E-value**
A non-negative statistic $E$ with $E[E] \le 1$ under the null hypothesis. By Markov's inequality, rejecting when $E \ge 1/\alpha$ has level $\alpha$, and e-values allow anytime-valid inference.
See [Chapter 20](20-Where-Statistics-Goes.md#206-open-questions).

**Ecological fallacy**
Drawing conclusions about individuals from correlations between group averages. Correlations of averages are also usually much stronger than those of individuals.
See [Chapter 4](04-Relationships-and-Correlation.md#the-ecological-fallacy).

**Effective sample size**
The number of independent observations that would carry the same information: $n/\text{deff}$ for a cluster sample, and the analogous quantity for correlated MCMC draws.
See [Chapter 5](05-Sampling-and-Experiments.md#cluster-sampling).

**Efficiency**
The ratio of the Cramér-Rao bound to an unbiased estimator's variance. An estimator whose variance reaches the bound is called efficient.
See [Chapter 13](13-Likelihood-Theory.md#when-is-the-bound-reached).

**Eigenvalue and eigenvector**
A number $\lambda$ and a nonzero vector $v$ with $\Sigma v = \lambda v$: the matrix only stretches $v$, by the factor $\lambda$. A symmetric matrix has real eigenvalues and orthonormal eigenvectors.
See [Chapter 18](18-High-Dimensional-Statistics.md#the-eigen-facts-we-need).

**Elastic net**
A penalised regression (Zou and Hastie, 2005) that mixes the ridge and lasso penalties, keeping groups of correlated predictors together.
See [Chapter 18](18-High-Dimensional-Statistics.md#the-lasso).

**Empirical distribution**
The distribution $\hat F$ that puts probability $1/n$ on each observed value. The bootstrap treats it as the population.
See [Chapter 6](06-Sampling-Distributions.md#the-plug-in-principle).

**Encouragement design**
An instrumental variable design in which a randomly chosen group is encouraged (for example by a letter) to take a treatment that everyone can choose freely.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#instrumental-variables).

**Equal-tailed interval**
The credible interval from the 2.5% point to the 97.5% point of the posterior.
See [Chapter 14](14-Bayesian-Statistics.md#definitions).

**Equivalence testing**
Testing that two treatments are practically the same, by checking that a confidence interval for the difference lies inside a range of negligible differences.
See [Chapter 9](09-Hypothesis-Tests.md#what-duality-buys-you).

**Error (in regression)**
The term $\varepsilon_i$ in the model: everything that makes unit $i$ differ from the population regression line. The residual is its estimate.
See [Chapter 11](11-Linear-Regression.md#from-a-line-through-points-to-a-model-of-a-process).

**Estimate**
The number an estimator gives for our particular data.
See [Chapter 7](07-Estimation.md#the-words).

**Estimated standard error**
The standard error with the unknown $\sigma$ replaced by the sample standard deviation, such as $s/\sqrt{n}$ for a mean.
See [Chapter 6](06-Sampling-Distributions.md#the-estimated-standard-error).

**Estimator**
A rule $\hat\theta$ that turns data into a guess of a parameter. Before the data are seen it is a random variable, with a sampling distribution.
See [Chapter 7](07-Estimation.md#the-words).

**Exchangeable**
Random variables are exchangeable if their joint distribution does not change when they are rearranged; more generally $Z$ is exchangeable under a group $G$ of rearrangements if $gZ$ has the same distribution as $Z$. It is what permutation tests and conformal prediction need.
See [Chapter 15](15-Nonparametric-Methods.md#exchangeability-and-the-validity-theorem).

**Exclusion restriction**
The assumption that an instrument affects the outcome only through the treatment.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#instrumental-variables).

**Expected count**
The count expected in a cell if the null hypothesis is true: $E_i = np_i$ in a goodness-of-fit test, row total times column total over the grand total in a test of independence.
See [Chapter 10](10-Categorical-Data.md#pearsons-statistic).

**Experiment**
A study in which the investigator decides which units get which treatment and then measures the result. In a randomised experiment chance makes that decision.
See [Chapter 1](01-What-Statistics-Is-For.md#two-ways-to-get-data).

**Experimental units**
The people, plots, animals or other things to which treatments are assigned in an experiment.
See [Chapter 5](05-Sampling-and-Experiments.md#observing-versus-intervening).

**Explanatory variable**
In a scatter plot or regression, the variable on the horizontal axis that may explain or predict the other; also called the predictor or $x$.
See [Chapter 2](02-Pictures-of-Data.md#24-scatter-plots).

**Exploratory analysis**
Any analysis not fixed in advance. It is welcome, but its p-values are read as hypotheses for a new study, not as tests.
See [Chapter 20](20-Where-Statistics-Goes.md#202-preregistration).

**Exponential family**
A family of distributions whose log-density has the form $A(\theta)T(x) + B(\theta) + C(x)$. Binomial, Poisson and normal are examples; they have conjugate priors, and only in them can an unbiased estimator reach the Cramér-Rao bound.
See [Chapter 14](14-Bayesian-Statistics.md#why-conjugacy-works-exponential-families).

**Exponential smoothing**
A smoother that uses only the past, keeping a level $\ell_t = \alpha x_t + (1 - \alpha)\ell_{t-1}$: a weighted average of past values with geometrically shrinking weights.
See [Chapter 16](16-Time-Series.md#exponential-smoothing).

**Extrapolation**
Using a fitted relationship to predict outside the range of the data. It is dangerous, and prediction bands there are still too optimistic.
See [Chapter 2](02-Pictures-of-Data.md#24-scatter-plots).

## F

**F distribution**
The law of the ratio of two independent chi-squared variables, each divided by its degrees of freedom; written $F_{q, n-p}$. It is the null distribution of the nested F statistic and of the ANOVA F statistic.
See [Chapter 12](12-Multiple-Regression.md#the-nested-f-test).

**F statistic (ANOVA)**
The between-group mean square divided by the within-group mean square. Large values are evidence that the group means differ.
See [Chapter 12](12-Multiple-Regression.md#splitting-the-variation).

**Factor**
In a designed experiment, something the experimenter sets, such as light or nutrient, at two or more levels.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#one-factor-at-a-time-is-wasteful).

**Factorial design**
An experiment that runs every combination of the levels of several factors. With $k$ two-level factors it has $2^k$ cells, and it estimates every main effect and interaction from all the runs.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#one-factor-at-a-time-is-wasteful).

**Factorisation theorem**
A statistic $T$ is sufficient for $\theta$ if and only if the density factors as $f(x; \theta) = g(T(x), \theta)\,h(x)$.
See [Chapter 13](13-Likelihood-Theory.md#the-factorisation-theorem).

**False discovery proportion**
Among $R$ rejected hypotheses, the share $V/R$ that are actually true nulls (taken as 0 when $R = 0$).
See [Chapter 9](09-Hypothesis-Tests.md#the-false-discovery-rate).

**False discovery rate (FDR)**
The expected false discovery proportion. The Benjamini-Hochberg procedure controls it, which is much less strict than controlling the family-wise error rate.
See [Chapter 9](09-Hypothesis-Tests.md#the-false-discovery-rate).

**False positive rate**
The share of real negatives that a classifier calls positive, $FP/(FP + TN)$, equal to one minus the specificity.
See [Chapter 19](19-Statistical-Learning.md#the-confusion-matrix).

**Family-wise error rate (FWER)**
The probability of at least one false rejection among a family of tests. The Bonferroni correction and Holm's procedure control it.
See [Chapter 9](09-Hypothesis-Tests.md#the-family-wise-error-rate-and-bonferroni).

**Fences**
The boundaries $Q_1 - 1.5 \times \text{IQR}$ and $Q_3 + 1.5 \times \text{IQR}$ of Tukey's rule; values beyond them are flagged as possible outliers.
See [Chapter 2](02-Pictures-of-Data.md#tukeys-rule-for-outliers).

**Finite population correction**
The factor $\frac{N-n}{N-1}$, roughly $1 - n/N$, by which the variance of a sample mean shrinks when sampling without replacement from a population of size $N$. It matters only when the sample is a sizeable fraction of the population.
See [Chapter 6](06-Sampling-Distributions.md#sampling-without-replacement-the-finite-population-correction).

**Fisher information**
The variance of the score in one observation, $I(\theta) = \operatorname{Var}(S)$, which under regularity conditions equals $-E[\partial^2 \log f/\partial\theta^2]$. It measures how sharply the data pin down $\theta$; $n$ independent observations carry $nI(\theta)$.
See [Chapter 13](13-Likelihood-Theory.md#two-identities).

**Fisher information matrix**
For a parameter vector, the $k \times k$ matrix of expected negative second derivatives of the log-density. Its inverse gives the approximate covariance of the MLE.
See [Chapter 13](13-Likelihood-Theory.md#several-parameters).

**Fisher's exact test**
A test for a two-by-two table that conditions on the margins, so that under the null hypothesis one cell has a hypergeometric distribution, free of the nuisance parameter. It is exact for small counts.
See [Chapter 10](10-Categorical-Data.md#the-idea-condition-on-the-margins).

**Fitted value**
The value $\hat y_i = \hat\beta_0 + \hat\beta_1 x_i$ that the fitted line gives at $x_i$.
See [Chapter 11](11-Linear-Regression.md#the-estimates).

**Five-number summary**
The minimum, $Q_1$, the median, $Q_3$ and the maximum. A box plot draws it.
See [Chapter 2](02-Pictures-of-Data.md#the-five-number-summary).

**Fork**
A path $X \leftarrow Z \to Y$ in which a common cause $Z$ makes $X$ and $Y$ associated though neither causes the other. Conditioning on $Z$ blocks it.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#drawing-the-assumptions).

**Fourier series**
A periodic function written as a sum of sines and cosines of whole multiples of the basic frequency. Harmonic regression fits a few of its terms as a seasonal component.
See [Chapter 16](16-Time-Series.md#harmonic-regression).

**Fractional factorial design**
A design that runs a carefully chosen fraction of the cells of a full $2^k$ factorial, giving up high-order interactions to save runs.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#one-factor-at-a-time-is-wasteful).

**Frequency**
The number of units in a category, also called the count. The relative frequency is the frequency divided by the total, the proportion.
See [Chapter 2](02-Pictures-of-Data.md#bar-charts-for-categories).

**Frisch-Waugh-Lovell theorem**
The coefficient of $x_1$ in a multiple regression equals the slope from regressing the residuals of $y$ on the other predictors against the residuals of $x_1$ on them. It makes "holding the others fixed" precise.
See [Chapter 12](12-Multiple-Regression.md#partialling-out).

**Full column rank**
A matrix has full column rank if its columns are linearly independent. Then $X^{\mathsf T}X$ is invertible and least squares has a unique solution.
See [Chapter 12](12-Multiple-Regression.md#just-enough-matrix-algebra).

## G

**Gamma distribution**
The distribution with density proportional to $\lambda^{a-1}e^{-b\lambda}$ for $\lambda > 0$, shape $a$ and rate $b$. It is the conjugate prior for a Poisson rate.
See [Chapter 14](14-Bayesian-Statistics.md#gamma-poisson).

**Garden of forking paths**
Gelman and Loken's phrase for the many analyses a researcher could have done, chosen after seeing the data without any conscious fishing. It makes p-values too small even without p-hacking.
See [Chapter 9](09-Hypothesis-Tests.md#p-hacking-and-the-garden-of-forking-paths).

**Gauss-Markov theorem**
If the errors have mean zero, equal variance and no correlation, least squares has the smallest variance among all linear unbiased estimators of $\beta$; it is BLUE.
See [Chapter 12](12-Multiple-Regression.md#the-gauss-markov-theorem).

**Genome-wide association study (GWAS)**
A study that tests hundreds of thousands of genetic variants for association with a trait, with very strict thresholds for significance and replication in independent samples.
See [Chapter 18](18-High-Dimensional-Statistics.md#what-genomics-learned).

**German tank problem**
Estimating the number $N$ of tanks from the serial numbers of $k$ captured ones. The MLE is the largest number seen, which is biased low; $M(1 + 1/k) - 1$ is unbiased.
See [Chapter 7](07-Estimation.md#the-german-tank-problem).

**Gibbs sampling**
An MCMC method that updates one parameter at a time from its conditional posterior given all the others.
See [Chapter 14](14-Bayesian-Statistics.md#what-people-actually-use).

**Gini impurity**
The impurity $1 - \sum_k p_k^2$ of a group with class proportions $p_1, \dots, p_K$; zero for a pure group. Classification trees choose splits that reduce it.
See [Chapter 19](19-Statistical-Learning.md#classification-trees).

**Gradient descent**
Fitting by repeatedly moving the parameters a small step against the gradient of the loss. Stochastic gradient descent uses the gradient on a small random batch of the data at each step.
See [Chapter 19](19-Statistical-Learning.md#what-a-network-is).

## H

**Hamiltonian Monte Carlo**
An MCMC method that uses the gradient of the log-posterior to make long, well-aimed proposals. It is the engine of modern Bayesian software such as Stan.
See [Chapter 14](14-Bayesian-Statistics.md#what-people-actually-use).

**Harmonic regression**
Regression on sines and cosines of the season angle, fitting a periodic seasonal component as a few terms of a Fourier series.
See [Chapter 16](16-Time-Series.md#harmonic-regression).

**Hat matrix**
The matrix $H = X(X^{\mathsf T}X)^{-1}X^{\mathsf T}$ with $\hat y = Hy$. It is symmetric and idempotent, the projection onto the column space of $X$; its diagonal entries are the leverages.
See [Chapter 12](12-Multiple-Regression.md#the-hat-matrix).

**Hat values**
The entries $h_{ij}$ of the hat matrix, which "put the hat on $Y$". The diagonal entry $h_{ii}$ is the leverage of point $i$.
See [Chapter 11](11-Linear-Regression.md#estimating-sigma2-with-n-2).

**Hierarchical model**
A model in which group-level parameters are themselves drawn from a common distribution, such as $\theta_j \sim N(\mu, \tau^2)$. It lets groups borrow strength, shrinking each estimate toward the overall mean.
See [Chapter 14](14-Bayesian-Statistics.md#the-model).

**Hierarchy principle**
The rule of keeping the main effects $x_1$ and $x_2$ in any model that contains their interaction $x_1x_2$.
See [Chapter 12](12-Multiple-Regression.md#interactions).

**High-leverage point**
A point whose $x$ value is far from $\bar x$. It can pull the fitted line toward itself.
See [Chapter 11](11-Linear-Regression.md#leverage-outliers-and-influence).

**Highest posterior density (HPD) interval**
The shortest credible interval, made of the parameter values whose posterior density is above some level.
See [Chapter 14](14-Bayesian-Statistics.md#definitions).

**Histogram**
A picture of a quantitative variable: the number line is divided into bins and a bar over each bin shows how many values fall in it. Unlike bar chart bars, the bars touch.
See [Chapter 2](02-Pictures-of-Data.md#histograms-for-numbers).

**Holm's step-down procedure**
Sort the p-values, compare the smallest with $\alpha/m$, the next with $\alpha/(m-1)$, and so on, rejecting until the first failure. It controls the family-wise error rate and rejects everything Bonferroni does, sometimes more.
See [Chapter 9](09-Hypothesis-Tests.md#the-family-wise-error-rate-and-bonferroni).

**Homogeneity, test of**
A chi-square test of whether separately sampled groups have the same distribution of a categorical variable. Its arithmetic is the same as the test of independence.
See [Chapter 10](10-Categorical-Data.md#independence-and-homogeneity).

**Homoscedasticity**
Equal variance of the errors at every $x$; Greek for "same scatter". It is the E of the LINE assumptions.
See [Chapter 11](11-Linear-Regression.md#the-four-assumptions).

**Hypergeometric distribution**
The distribution of the number of marked items in a sample drawn without replacement from a finite set. It gives the exact probabilities in the lady tasting tea and in Fisher's exact test.
See [Chapter 5](05-Sampling-and-Experiments.md#the-exact-probabilities).

**Hypothesis**
A statement about the population or process that produced the data, usually about a parameter.
See [Chapter 9](09-Hypothesis-Tests.md#the-pieces-of-a-test).

## I

**Idempotent**
A square matrix $H$ is idempotent if $HH = H$: applying it twice is the same as once, as with a projection.
See [Chapter 12](12-Multiple-Regression.md#the-hat-matrix).

**Improper prior**
A prior "density" that does not integrate to a finite number, such as a flat prior on the whole line. It is allowed only when the posterior is proper.
See [Chapter 14](14-Bayesian-Statistics.md#jeffreys-prior).

**Inadmissible**
An estimator is inadmissible if another has smaller or equal expected loss for every parameter value and smaller for some. Stein showed that the vector of sample means is inadmissible in three or more dimensions.
See [Chapter 14](14-Bayesian-Statistics.md#why-shrinkage-is-right-steins-paradox).

**Independent and identically distributed (iid)**
Observations $X_1, \dots, X_n$ that are independent and all have the same distribution. It is the standard model for a random sample.
See [Chapter 6](06-Sampling-Distributions.md#the-standard-model).

**Individual treatment effect**
The difference $\tau_i = Y_i(1) - Y_i(0)$ between a unit's two potential outcomes. It can never be observed, because only one of them happens.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#what-does-the-effect-mean).

**Influential point**
A point whose removal would change the fitted line a lot. Influence needs both a large residual and high leverage.
See [Chapter 11](11-Linear-Regression.md#leverage-outliers-and-influence).

**Informative prior**
A prior that carries real knowledge, from earlier studies, physical limits or carefully elicited expert judgement.
See [Chapter 14](14-Bayesian-Statistics.md#kinds-of-prior).

**Instrument (instrumental variable)**
A variable $Z$ that is as good as randomly assigned, changes the chance of treatment (relevance), and affects the outcome only through the treatment (exclusion restriction). It allows a causal estimate despite unmeasured confounding.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#instrumental-variables).

**Interaction**
When the effect of one predictor or factor depends on the level of another. In a regression it is modelled by a product term such as $x_1x_2$.
See [Chapter 12](12-Multiple-Regression.md#interactions).

**Intercept**
The height $a$ of the line $y = a + bx$ at $x = 0$.
See [Chapter 4](04-Relationships-and-Correlation.md#the-criterion).

**Interquartile range (IQR)**
$\text{IQR} = Q_3 - Q_1$, the width of the middle half of the data. It is resistant to outliers.
See [Chapter 2](02-Pictures-of-Data.md#the-five-number-summary).

**Intraclass correlation**
The correlation $\rho$ between two members of the same cluster. It drives the design effect of cluster sampling.
See [Chapter 5](05-Sampling-and-Experiments.md#cluster-sampling).

**Inverse probability weighting**
Reweighting each treated unit by $1/e(X)$ and each control by $1/(1 - e(X))$, where $e$ is the propensity score, so that the weighted groups each look like the whole population.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#propensity-scores).

**Invertible matrix**
A square matrix $M$ for which there is a matrix $M^{-1}$ with $M^{-1}M = MM^{-1} = I$.
See [Chapter 12](12-Multiple-Regression.md#just-enough-matrix-algebra).

**Irregular component**
The unpredictable jitter of a time series around its trend and seasonal component; also called noise.
See [Chapter 16](16-Time-Series.md#a-picture-first).

**Iteratively reweighted least squares**
Newton's method for logistic regression, so named because each step is a weighted least squares fit with weights $p_i(1 - p_i)$.
See [Chapter 19](19-Statistical-Learning.md#the-likelihood-and-its-single-peak).

## J

**Jeffreys' prior**
The prior $\pi_J(\theta) \propto \sqrt{I(\theta)}$, where $I$ is the Fisher information. It gives the same answer whatever parametrisation is used.
See [Chapter 14](14-Bayesian-Statistics.md#jeffreys-prior).

**Joint distribution**
In a two-way table, each cell divided by the grand total.
See [Chapter 4](04-Relationships-and-Correlation.md#41-two-way-tables).

## K

**$k$-nearest-neighbour classifier**
A classifier that predicts the class held by the majority of the $k$ training points closest to the new point.
See [Chapter 19](19-Statistical-Learning.md#nearest-neighbours).

**Kendall's tau**
A rank correlation $\tau = (n_c - n_d)/\binom{n}{2}$, where $n_c$ and $n_d$ count the concordant and discordant pairs of observations.
See [Chapter 15](15-Nonparametric-Methods.md#kendalls-tau).

**Kernel**
A probability density symmetric about 0, usually the standard normal, used as the bump in a kernel density estimate.
See [Chapter 15](15-Nonparametric-Methods.md#from-histogram-to-smooth-curve).

**Kernel density estimate**
A smooth estimate of a density that replaces each data point by a small bump and adds the bumps: $\hat f_h(x) = \frac{1}{nh}\sum K((x - x_i)/h)$.
See [Chapter 15](15-Nonparametric-Methods.md#from-histogram-to-smooth-curve).

## L

**Laplace mechanism**
Releasing $f(D) + Z$ with $Z$ drawn from a Laplace distribution of scale $\Delta/\varepsilon$, where $\Delta$ is the sensitivity of $f$. It is $\varepsilon$-differentially private.
See [Chapter 20](20-Where-Statistics-Goes.md#the-laplace-mechanism).

**Lasso**
Penalised least squares with an absolute-value penalty: minimise $\frac12\lVert y - X\beta \rVert^2 + \lambda\lVert\beta\rVert_1$ (Tibshirani, 1996). It shrinks coefficients and sets many exactly to zero, so it also selects variables.
See [Chapter 18](18-High-Dimensional-Statistics.md#the-lasso).

**Latin square**
A design that blocks two nuisance factors at once: with $k$ treatments, $k$ rows and $k$ columns, each treatment appears once in every row and every column.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#blocking).

**Least squares line**
The line that makes the sum of squared residuals as small as possible. Its slope is $b = rs_y/s_x$, and it passes through $(\bar x, \bar y)$.
See [Chapter 4](04-Relationships-and-Correlation.md#the-criterion).

**Leave-one-out cross-validation (LOOCV)**
Cross-validation with one point per fold. For linear models its sum of squared errors, PRESS, can be computed from a single fit using the leverages.
See [Chapter 12](12-Multiple-Regression.md#cross-validation).

**Leverage**
For point $i$, the diagonal entry $h_{ii}$ of the hat matrix; in simple regression it grows with the distance of $x_i$ from $\bar x$. High-leverage points can pull the fitted line toward themselves.
See [Chapter 11](11-Linear-Regression.md#leverage-outliers-and-influence).

**Lie factor**
Tufte's measure of distortion: the size of the effect shown in the graphic divided by the size of the effect in the data. Near 1 is honest.
See [Chapter 2](02-Pictures-of-Data.md#the-lie-factor).

**Life table**
A table of how many of a group of people born would survive to each age. John Graunt built an early one in 1662.
See [Chapter 1](01-What-Statistics-Is-For.md#john-graunt-and-the-bills-of-mortality-1662).

**Likelihood equation**
The equation $\ell'(\theta) = 0$, or $S(\theta) = 0$ in terms of the score, whose solution is usually the MLE.
See [Chapter 13](13-Likelihood-Theory.md#the-score).

**Likelihood function**
The probability (or density) of the observed data, seen as a function of the parameter with the data held fixed: $L(\theta) = \prod_i f(x_i \mid \theta)$ for independent data. It is not a probability distribution for $\theta$.
See [Chapter 7](07-Estimation.md#definitions).

**Likelihood interval**
The set of parameter values whose relative log-likelihood is above a cut-off, such as $-1.92$, which gives an approximate 95% interval by Wilks' theorem.
See [Chapter 13](13-Likelihood-Theory.md#the-coin).

**Likelihood principle**
The principle that two experiments with proportional likelihoods should give the same inference. Bayesian analysis obeys it; p-values do not.
See [Chapter 14](14-Bayesian-Statistics.md#the-general-recipe).

**Likelihood ratio statistic**
$\Lambda = 2(\ell(\hat\theta) - \ell(\hat\theta_0))$, twice the gap between the unrestricted maximum of the log-likelihood and its maximum under $H_0$.
See [Chapter 13](13-Likelihood-Theory.md#three-ways-to-test-with-a-likelihood).

**LINE assumptions**
The four assumptions of simple linear regression: Linearity (errors have mean zero), Independence, Normality and Equal variance of the errors.
See [Chapter 11](11-Linear-Regression.md#the-four-assumptions).

**Linear combination**
A sum of vectors each multiplied by a number, such as $Av$, a linear combination of the columns of $A$.
See [Chapter 12](12-Multiple-Regression.md#just-enough-matrix-algebra).

**Linearly independent**
Columns are linearly independent if none is a linear combination of the others; equivalently $Xv = 0$ only for $v = 0$.
See [Chapter 12](12-Multiple-Regression.md#just-enough-matrix-algebra).

**Local average treatment effect (LATE)**
The average treatment effect among compliers. Under relevance, exclusion and monotonicity, it is what the Wald estimator measures.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#instrumental-variables).

**Local differential privacy**
The model of differential privacy in which noise is added before data leave the person, as in randomised response, so that no one has to be trusted with the true answers.
See [Chapter 20](20-Where-Statistics-Goes.md#randomised-response-privacy-before-computers).

**Log-likelihood**
The natural logarithm of the likelihood, $\ell(\theta) = \log L(\theta) = \sum_i \log f(x_i \mid \theta)$ for independent data. It has its maximum at the same place as $L$ and turns products into sums.
See [Chapter 7](07-Estimation.md#definitions).

**Log odds**
The logarithm of the odds, $\log(p/(1-p))$. Logistic regression models it as a linear function of the predictors.
See [Chapter 19](19-Statistical-Learning.md#the-model).

**Logistic function**
The function $\sigma(t) = 1/(1 + e^{-t})$, also called the sigmoid, which rises smoothly from 0 to 1.
See [Chapter 19](19-Statistical-Learning.md#the-model).

**Logistic regression**
A model for a 0/1 response with $P(y = 1 \mid x) = \sigma(\beta_0 + \beta_1x_1 + \dots + \beta_px_p)$, so that the log odds are linear in the predictors. It is fitted by maximum likelihood.
See [Chapter 19](19-Statistical-Learning.md#the-model).

**Lurking variable**
Another name for a confounder.
See [Chapter 1](01-What-Statistics-Is-For.md#two-ways-to-get-data).

## M

**$m$-out-of-$n$ bootstrap**
A bootstrap that draws resamples of a size $m$ smaller than $n$. It can repair the bootstrap where the ordinary one fails, as for the sample maximum.
See [Chapter 15](15-Nonparametric-Methods.md#when-the-bootstrap-fails).

**Main effect**
In a factorial design, the average response at a factor's high level minus the average at its low level, averaging over the other factors.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#one-factor-at-a-time-is-wasteful).

**Mann-Whitney test**
A test for two independent samples based on $U$, the number of pairs in which the $X$ value beats the $Y$ value; equivalent to the Wilcoxon rank-sum test, since $W = U + m(m+1)/2$. $U/(mn)$ estimates $P(X > Y)$.
See [Chapter 15](15-Nonparametric-Methods.md#the-mann-whitney-test-wilcoxon-rank-sum).

**Margin of error**
Half the width of a confidence interval, such as $z_{\alpha/2}\,\sigma/\sqrt{n}$ for a mean with known $\sigma$.
See [Chapter 8](08-Confidence-Intervals.md#the-pivot).

**Marginal coverage**
Coverage averaged over new points, not guaranteed for each value of $x$ separately. It is what conformal prediction promises.
See [Chapter 20](20-Where-Statistics-Goes.md#what-it-does-and-does-not-promise).

**Marginal distribution**
In a two-way table, the row or column totals divided by the grand total. Each describes one variable on its own.
See [Chapter 4](04-Relationships-and-Correlation.md#41-two-way-tables).

**Marginal likelihood**
The denominator $m(x) = \int f(x \mid \theta)\pi(\theta)\,d\theta$ of Bayes' theorem, also called the evidence. It makes the posterior integrate to 1.
See [Chapter 14](14-Bayesian-Statistics.md#the-general-recipe).

**Markov chain Monte Carlo (MCMC)**
Simulating a Markov chain whose stationary distribution is the posterior, and using its draws in place of exact posterior calculations. It needs the posterior only up to a constant.
See [Chapter 14](14-Bayesian-Statistics.md#when-there-is-no-formula).

**Matching**
Comparing each treated unit with a control that has the same (or very similar) covariates.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#matching-on-observed-covariates).

**Maximum likelihood estimate (MLE)**
The parameter value $\hat\theta$ that makes the likelihood of the observed data as large as possible. It answers: if this were the truth, how probable would our data have been?
See [Chapter 7](07-Estimation.md#definitions).

**Mean**
The sum of the values divided by their number, $\bar{x} = \frac{1}{n}\sum x_i$; also called the arithmetic mean or average. It is the balance point of the data and minimises the sum of squared errors.
See [Chapter 3](03-Summaries.md#the-mean).

**Mean squared error (MSE)**
$\operatorname{MSE}(\hat\theta) = E[(\hat\theta - \theta)^2]$, which equals the variance plus the squared bias. A biased estimator can have smaller MSE than an unbiased one.
See [Chapter 7](07-Estimation.md#the-words).

**Median**
The middle value when the data are sorted (the average of the two middle values when $n$ is even). It is resistant to outliers and minimises the sum of absolute errors.
See [Chapter 3](03-Summaries.md#the-median).

**Median absolute deviation (MAD)**
The median of $|x_i - M|$, a resistant measure of spread to go with the median. For normal data $1.4826 \times \text{MAD}$ estimates $\sigma$.
See [Chapter 3](03-Summaries.md#two-compromises).

**Mediator**
A variable $M$ through which one variable affects another, as in the chain $X \to M \to Y$.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#drawing-the-assumptions).

**Method of moments**
Estimating parameters by setting the first few moments of the distribution equal to the sample moments and solving. It is simple and consistent but often not the most efficient.
See [Chapter 7](07-Estimation.md#the-idea).

**Metropolis algorithm**
An MCMC method: propose a random step, accept it with probability $\min\{1, \pi(\theta' \mid x)/\pi(\theta \mid x)\}$, otherwise stay. Only the ratio of posterior densities is needed.
See [Chapter 14](14-Bayesian-Statistics.md#metropolis-for-the-coin).

**Midrange**
The average of the smallest and largest values, $\frac{1}{2}(x_{(1)} + x_{(n)})$. It minimises the largest error.
See [Chapter 3](03-Summaries.md#the-mode-and-the-midrange).

**Minimal sufficient statistic**
A sufficient statistic that is a function of every other sufficient statistic: the greatest reduction of the data that loses nothing about $\theta$.
See [Chapter 13](13-Likelihood-Theory.md#worked-examples_1).

**Mode**
The most frequent value, or more loosely a peak of a distribution. It is the only one of mean, median and mode that makes sense for a nominal variable.
See [Chapter 3](03-Summaries.md#the-mode).

**Moment**
The $k$-th moment of a distribution is $E[X^k]$; the $k$-th sample moment is $\frac{1}{n}\sum x_i^k$.
See [Chapter 7](07-Estimation.md#the-idea).

**Monotone likelihood ratio**
A family has a monotone likelihood ratio in a statistic $T$ if the likelihood ratio $f_{\theta_1}(x)/f_{\theta_0}(x)$ increases in $T(x)$ for $\theta_1 > \theta_0$. Then one-sided uniformly most powerful tests exist.
See [Chapter 13](13-Likelihood-Theory.md#worked-example-normal-means).

**Monotonicity (instrumental variables)**
The assumption that the instrument never makes anyone less likely to take the treatment: there are no defiers.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#instrumental-variables).

**Monte Carlo error**
The error of a simulation that comes from using a finite number of runs. It shrinks like $1/\sqrt{B}$ for $B$ runs and is separate from the statistical error.
See [Chapter 6](06-Sampling-Distributions.md#how-accurate-is-a-simulation).

**Multinomial distribution**
The joint distribution of the counts in $k$ categories when $n$ independent units each fall in category $i$ with probability $p_i$. Each count has variance $np_i(1 - p_i)$.
See [Chapter 10](10-Categorical-Data.md#the-general-case).

**Multiple comparisons problem**
When many tests are run, the chance of at least one false alarm grows far above $\alpha$; at level 0.05 with 20 independent true nulls it is about 64%.
See [Chapter 9](09-Hypothesis-Tests.md#the-problem-of-many-tests).

**Multiple linear regression model**
The model $Y_i = \beta_0 + \beta_1x_{i1} + \dots + \beta_kx_{ik} + \varepsilon_i$ with several predictors, written in matrix form as $y = X\beta + \varepsilon$.
See [Chapter 12](12-Multiple-Regression.md#the-data-and-the-model).

**Multiplicative decomposition**
The model of a time series as $x_t = T_t \times S_t \times E_t$, used when the seasonal swing grows with the level. Taking logarithms makes it additive.
See [Chapter 16](16-Time-Series.md#the-decomposition).

**Multistage sampling**
Sampling clusters and then sampling units within them. Most large national surveys work this way.
See [Chapter 5](05-Sampling-and-Experiments.md#cluster-sampling).

## N

**Naive forecast**
The forecast that tomorrow equals today. The seasonal naive forecast repeats the value one season ago. Any model should beat these benchmarks.
See [Chapter 16](16-Time-Series.md#testing-forecasts-honestly).

**Natural experiment**
A situation in which something like random assignment happened without the researcher's control, such as a draft lottery or a policy change in one state but not its neighbour.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#176-the-2021-prize).

**Neighbouring data sets**
Two data sets that differ in one person's record. Differential privacy compares an algorithm's outputs on neighbours.
See [Chapter 20](20-Where-Statistics-Goes.md#the-definition).

**Neural network (feed-forward)**
A model that stacks layers of neurons, each a linear combination of its inputs passed through an activation function. For classification it is a nonlinear logistic regression.
See [Chapter 19](19-Statistical-Learning.md#what-a-network-is).

**Never-takers**
In an instrumental variable study, units that do not take the treatment whatever the value of the instrument.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#instrumental-variables).

**Newton's method**
Solving $\nabla\ell = 0$ by repeating $\beta \leftarrow \beta - H^{-1}\nabla\ell$, with $H$ the Hessian. For logistic regression it converges fast and is called iteratively reweighted least squares.
See [Chapter 19](19-Statistical-Learning.md#the-likelihood-and-its-single-peak).

**Neyman allocation**
In stratified sampling, taking sample sizes proportional to $W_h\sigma_h$, sampling more where the values vary more. It minimises the variance of the stratified estimator for a fixed total sample.
See [Chapter 5](05-Sampling-and-Experiments.md#stratified-sampling).

**Neyman orthogonality**
The property of an estimating equation that small errors in the nuisance functions change it only to second order. It is what lets double machine learning use flexible estimates of the nuisance parts.
See [Chapter 20](20-Where-Statistics-Goes.md#double-machine-learning).

**Neyman-Pearson lemma**
For testing a simple null against a simple alternative, the test that rejects when the likelihood ratio $f_1(x)/f_0(x)$ is large is the most powerful test of its size.
See [Chapter 13](13-Likelihood-Theory.md#the-lemma).

**No pooling**
In a hierarchical setting, estimating each group on its own data alone. It is one extreme; complete pooling is the other.
See [Chapter 14](14-Bayesian-Statistics.md#eight-schools).

**Nocebo effect**
Harm caused by negative expectations, the mirror image of the placebo effect.
See [Chapter 5](05-Sampling-and-Experiments.md#what-it-is).

**Nominal variable**
A categorical variable whose groups have no order, such as blood type.
See [Chapter 1](01-What-Statistics-Is-For.md#types-of-variable).

**Non-centred parametrisation**
Writing a hierarchical model as $\theta_j = \mu + \tau\eta_j$ with $\eta_j \sim N(0, 1)$. It changes nothing in the model but helps MCMC samplers when $\tau$ is small.
See [Chapter 14](14-Bayesian-Statistics.md#practical-cautions).

**Nonparametric**
Used broadly for methods that do not assume a particular family of distributions, such as rank tests, permutation tests, kernel density estimates and the bootstrap.
See [Chapter 15](15-Nonparametric-Methods.md#distribution-free).

**Nonresponse bias**
Bias that arises when chosen units do not answer and those who refuse differ from those who answer.
See [Chapter 5](05-Sampling-and-Experiments.md#the-kinds-of-bias).

**Normal equations**
The equations $X^{\mathsf T}X\hat\beta = X^{\mathsf T}y$ that the least squares estimate solves. They say the residual vector is perpendicular to every column of $X$.
See [Chapter 12](12-Multiple-Regression.md#least-squares-as-a-perpendicular).

**Normal quantile plot**
A plot of the sorted residuals (or data) against the values expected from a normal distribution; also called a Q-Q plot. Normal data lie close to a straight line.
See [Chapter 11](11-Linear-Regression.md#residuals-as-the-evidence).

**Nuisance parameter**
A parameter that affects the data but is not what we are asking about, such as the common success probability in Fisher's exact test.
See [Chapter 10](10-Categorical-Data.md#the-idea-condition-on-the-margins).

**Null hypothesis**
The "nothing is going on" statement $H_0$ (the setting is right, the drug does nothing), which a test assumes in order to judge how surprising the data are.
See [Chapter 9](09-Hypothesis-Tests.md#the-pieces-of-a-test).

**Number needed to treat**
The reciprocal of the risk difference for a beneficial treatment: how many people must be treated for one extra to benefit. For a harmful exposure the same idea is the number needed to harm.
See [Chapter 10](10-Categorical-Data.md#three-ways-to-compare-two-proportions).

## O

**Observational study**
A study that records what is already happening, without influencing who gets what. It can show association but is open to confounding.
See [Chapter 1](01-What-Statistics-Is-For.md#two-ways-to-get-data).

**Observed count**
The count $O_i$ actually seen in a category or cell, compared with the expected count in a chi-square test.
See [Chapter 10](10-Categorical-Data.md#pearsons-statistic).

**Observed information**
Minus the second derivative of the log-likelihood at the MLE, $-\ell''(\hat\theta)$: how sharp the peak of the likelihood is.
See [Chapter 13](13-Likelihood-Theory.md#how-sharp-is-the-peak).

**Odds**
The odds of an event with probability $p$ are $p/(1-p)$: the chance it happens divided by the chance it does not.
See [Chapter 10](10-Categorical-Data.md#three-ways-to-compare-two-proportions).

**Odds ratio**
The odds of the outcome in one group divided by the odds in another, $ad/(bc)$ for a two-by-two table. It is close to the relative risk for rare outcomes, and, unlike the relative risk, it can be estimated from a case-control study.
See [Chapter 10](10-Categorical-Data.md#three-ways-to-compare-two-proportions).

**One factor at a time (OFAT)**
Varying one factor while holding the others fixed. It is wasteful compared with a factorial design and cannot detect interactions.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#one-factor-at-a-time-is-wasteful).

**One-sided and two-sided alternatives**
A one-sided alternative looks for a departure in one direction ($\mu > \mu_0$); a two-sided one in either direction ($\mu \ne \mu_0$).
See [Chapter 9](09-Hypothesis-Tests.md#the-pieces-of-a-test).

**Ordinal variable**
A categorical variable whose groups have a natural order but no fixed gaps, such as survey answers from "strongly disagree" to "strongly agree".
See [Chapter 1](01-What-Statistics-Is-For.md#types-of-variable).

**Orthogonal**
Two vectors are orthogonal (perpendicular) when $u^{\mathsf T}v = 0$.
See [Chapter 12](12-Multiple-Regression.md#just-enough-matrix-algebra).

**Orthonormal columns**
Columns that are orthogonal to each other and each of length 1, so that $X^{\mathsf T}X = I$. In this case ridge and lasso have simple closed forms.
See [Chapter 18](18-High-Dimensional-Statistics.md#why-shrinking-helps-a-proof-in-the-simplest-case).

**Outlier**
A value that falls far from the overall pattern of the data. Tukey's rule flags values more than $1.5 \times \text{IQR}$ beyond the quartiles; in regression an outlier is a point with a large residual.
See [Chapter 2](02-Pictures-of-Data.md#tukeys-rule-for-outliers).

**Overall F test**
The F test of whether a regression model explains anything at all, that is, whether all the slope coefficients are zero.
See [Chapter 12](12-Multiple-Regression.md#the-nested-f-test).

**Overfitting**
Fitting the noise in the sample, not just the pattern. An overfitted model looks excellent on its own data and predicts new data badly.
See [Chapter 12](12-Multiple-Regression.md#overfitting-seen).

**Overlap**
The assumption that every covariate value has some chance of both treatments, $0 < P(T = 1 \mid X = x) < 1$. Without it there is no one to compare with.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#matching-on-observed-covariates).

**Oversmoothing**
Using too large a bandwidth in a kernel density estimate, so that real features such as a second peak are smoothed away. Its opposite, undersmoothing, chases noise.
See [Chapter 15](15-Nonparametric-Methods.md#from-histogram-to-smooth-curve).

## P

**p-hacking**
Trying analyses (outcomes, subgroups, covariates, exclusions, stopping points) until one gives $p < 0.05$, often without intending to cheat. It makes false positives far more common than the nominal level.
See [Chapter 9](09-Hypothesis-Tests.md#p-hacking-and-the-garden-of-forking-paths).

**p-value**
The probability, computed assuming $H_0$ is true, of a test statistic at least as extreme as the one observed. It is not the probability that $H_0$ is true, nor a measure of the size of an effect.
See [Chapter 9](09-Hypothesis-Tests.md#the-definition).

**Paired t test**
A one-sample t test applied to the differences within pairs, such as the same patient on two drugs. Pairing removes the between-unit variation.
See [Chapter 9](09-Hypothesis-Tests.md#students-sleep-data-and-the-paired-test).

**Parallel trends assumption**
In difference in differences, the assumption that without the treatment the treated and control groups would have changed by the same amount.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#difference-in-differences).

**Parameter**
A number that describes the population, such as the population mean $\mu$ or proportion $p$. It is fixed but usually unknown.
See [Chapter 1](01-What-Statistics-Is-For.md#parameters-and-statistics).

**Parameter space**
The set $\Theta$ of possible values of the parameter.
See [Chapter 13](13-Likelihood-Theory.md#the-question).

**Partially linear model**
The model $Y = \theta D + g(X) + \varepsilon$, with a treatment $D$ entering linearly and the covariates through an unknown function $g$. The target $\theta$ is the slope of residualised outcome on residualised treatment.
See [Chapter 20](20-Where-Statistics-Goes.md#partialling-out).

**Path (in a causal diagram)**
Any sequence of edges connecting two nodes, ignoring the arrow directions.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#paths-blocking-and-the-backdoor-criterion).

**Path analysis**
Sewall Wright's method, from around 1920, of reasoning about correlations through diagrams of causes. It is the ancestor of causal diagrams.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#drawing-the-assumptions).

**Percentile**
The $100p$-th percentile, or $p$-th quantile, is a value with about a fraction $p$ of the data below it. Software uses several slightly different definitions, which agree for large samples.
See [Chapter 3](03-Summaries.md#the-idea).

**Percentile interval (bootstrap)**
The middle 95 percent of the bootstrap values, $(q^*_{0.025}, q^*_{0.975})$. It respects transformations and works when some transformation makes the statistic nearly normal.
See [Chapter 8](08-Confidence-Intervals.md#the-percentile-interval).

**Percentile rank**
The percentage of the data below a given value.
See [Chapter 3](03-Summaries.md#percentile-ranks).

**Permutation test**
A test that compares the observed statistic with its values over all rearrangements of the data allowed by the null hypothesis (for example all relabellings of the groups). It is exact whenever the data are exchangeable under the null; also called a randomisation test.
See [Chapter 15](15-Nonparametric-Methods.md#the-idea).

**Pie chart**
A picture of the proportions of a categorical variable as slices of a circle, each slice's angle $360°$ times its proportion.
See [Chapter 2](02-Pictures-of-Data.md#bar-charts-for-categories).

**Pivot**
A function of the data and the parameter whose distribution is known and does not depend on the parameter, such as $(\bar X - \mu)/(\sigma/\sqrt{n})$. Solving the pivot's probability statement for the parameter gives a confidence interval.
See [Chapter 8](08-Confidence-Intervals.md#the-pivot).

**Placebo**
A treatment with no active ingredient, such as a sugar pill, a saline injection or a sham procedure, given to the control group so that subjects cannot tell which group they are in.
See [Chapter 5](05-Sampling-and-Experiments.md#what-it-is).

**Placebo effect**
The improvement caused by receiving a placebo, through expectation, conditioning or the care that comes with treatment. Much apparent improvement in placebo arms is natural course and regression to the mean.
See [Chapter 5](05-Sampling-and-Experiments.md#what-it-is).

**Plug-in principle**
Estimate a feature of the population by the same feature of the empirical distribution. The bootstrap applies it to whole sampling distributions.
See [Chapter 6](06-Sampling-Distributions.md#the-plug-in-principle).

**Pointwise band**
A band made by joining intervals that each cover at a single $x_0$ with the stated probability. It does not cover the whole line with that probability at once.
See [Chapter 11](11-Linear-Regression.md#bands-simultaneity-and-extrapolation).

**Pooled t test**
A two-sample t test that assumes equal variances and estimates the common variance by the pooled variance, a weighted average of the two sample variances. Welch's test drops the equal-variance assumption.
See [Chapter 9](09-Hypothesis-Tests.md#two-independent-samples).

**Pooled variance**
A weighted average of several sample variances, weighted by their degrees of freedom, used as an estimate of a common variance.
See [Chapter 9](09-Hypothesis-Tests.md#two-independent-samples).

**Population**
The whole collection of units you want to learn about. It has $N$ units.
See [Chapter 1](01-What-Statistics-Is-For.md#the-words).

**Population distribution**
The values of all $N$ units of the population, as opposed to the data distribution of one sample.
See [Chapter 6](06-Sampling-Distributions.md#the-words).

**Population regression line**
The line $\beta_0 + \beta_1x$ that gives the mean response at each $x$ in the simple linear regression model.
See [Chapter 11](11-Linear-Regression.md#from-a-line-through-points-to-a-model-of-a-process).

**Population variance and standard deviation**
For a whole population of $N$ values with mean $\mu$, $\sigma^2 = \frac{1}{N}\sum (x_i - \mu)^2$ and its square root $\sigma$.
See [Chapter 3](03-Summaries.md#variance-and-standard-deviation).

**Positive definite**
A symmetric matrix $M$ with $v^{\mathsf T}Mv > 0$ for every nonzero $v$. Such a matrix is invertible; $X^{\mathsf T}X + \lambda I$ in ridge regression is one.
See [Chapter 18](18-High-Dimensional-Statistics.md#ridge-regression).

**Post hoc power**
A power calculation that plugs the observed effect into the power formula after the study. It adds nothing to the p-value.
See [Chapter 9](09-Hypothesis-Tests.md#choosing-a-sample-size).

**Post-selection inference**
Methods that give valid tests and intervals after a model has been chosen from the same data, for example by the lasso. Classical p-values are invalid there, because the same data chose and tested the model.
See [Chapter 18](18-High-Dimensional-Statistics.md#what-is-known-about-the-lasso).

**Posterior distribution**
The distribution of the parameter after seeing the data, with density proportional to likelihood times prior. It answers direct probability questions about $\theta$.
See [Chapter 14](14-Bayesian-Statistics.md#the-general-recipe).

**Posterior predictive check**
Simulating replicate data sets from the posterior predictive distribution and comparing them with the real data, to check the model.
See [Chapter 14](14-Bayesian-Statistics.md#checking-a-prior).

**Posterior predictive distribution**
The distribution of a new observation, averaging the model over the posterior: $p(\tilde x \mid x) = \int f(\tilde x \mid \theta)\pi(\theta \mid x)\,d\theta$.
See [Chapter 14](14-Bayesian-Statistics.md#predicting-new-data).

**Potential outcomes**
For each unit $i$ and a binary treatment, the two outcomes $Y_i(1)$ and $Y_i(0)$ it would have with and without treatment. Only one is ever observed. The framework is due to Neyman and Rubin.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#what-does-the-effect-mean).

**Power**
The probability $1 - \beta$ that a test correctly rejects $H_0$ when it is false. As a function of the true parameter it is the power function. Low power makes significant results unreliable and exaggerated.
See [Chapter 9](09-Hypothesis-Tests.md#two-ways-to-be-wrong).

**Precision (Bayesian)**
The reciprocal of a variance. In the normal-normal model the posterior precision is the prior precision plus the data precision.
See [Chapter 14](14-Bayesian-Statistics.md#normal-normal).

**Precision (classifier)**
The share of predicted positives that are real, $TP/(TP + FP)$; also called the positive predictive value. It depends on the base rate.
See [Chapter 19](19-Statistical-Learning.md#the-confusion-matrix).

**Precision-recall curve**
A plot of precision against recall (sensitivity) as the threshold varies. When positives are rare it is often more informative than the ROC curve.
See [Chapter 19](19-Statistical-Learning.md#roc-curves-and-auc).

**Prediction interval**
An interval for one new response at $x_0$, accounting for both the uncertainty in the fitted line and the scatter of individuals about it. It is always wider than the confidence interval for the mean response.
See [Chapter 11](11-Linear-Regression.md#prediction-interval-for-a-new-response).

**Prediction-powered inference**
Methods (Angelopoulos and colleagues, 2023) for valid inference when most data are predicted by a model and a small set is measured, using the measured set to correct the predictions' bias.
See [Chapter 20](20-Where-Statistics-Goes.md#206-open-questions).

**Preregistration**
A time-stamped public record of the hypotheses, outcomes, sample size and analysis plan, made before the data are seen. It is the cure for the garden of forking paths.
See [Chapter 20](20-Where-Statistics-Goes.md#202-preregistration).

**PRESS**
The predicted residual sum of squares: the sum of squared errors of leave-one-out cross-validation.
See [Chapter 12](12-Multiple-Regression.md#cross-validation).

**Principal component score**
The $k$th principal component score of a unit is $v_k^{\mathsf T}x$, its coordinate along the $k$th principal component.
See [Chapter 18](18-High-Dimensional-Statistics.md#the-derivation).

**Principal components**
The eigenvectors $v_1, v_2, \dots$ of the covariance matrix, in order of decreasing eigenvalue: the directions of greatest variance, each perpendicular to the ones before.
See [Chapter 18](18-High-Dimensional-Statistics.md#the-derivation).

**Principal components regression**
Regressing the response on the first few principal component scores. It can discard exactly the direction that predicts the outcome, since variance is not importance.
See [Chapter 18](18-High-Dimensional-Statistics.md#in-practice).

**Prior distribution**
The distribution that describes what is believed about a parameter before seeing the data. Priors may be informative, weakly informative or reference priors.
See [Chapter 14](14-Bayesian-Statistics.md#bayes-theorem-for-a-parameter).

**Prior predictive check**
Simulating data from the prior and the model before seeing the real data, to check that the prior allows sensible data.
See [Chapter 14](14-Bayesian-Statistics.md#checking-a-prior).

**Privacy-loss budget**
The total $\varepsilon$ a data holder allows across everything it publishes. By composition, releases spend from it additively.
See [Chapter 20](20-Where-Statistics-Goes.md#composition).

**Propensity score**
The probability of being treated given the covariates, $e(x) = P(T = 1 \mid X = x)$ (Rosenbaum and Rubin, 1983). By the balancing property one can match, stratify or weight on it alone.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#propensity-scores).

**Proportion of variance explained**
The share of the total variance carried by the first $k$ principal components, $(\lambda_1 + \dots + \lambda_k)/(\lambda_1 + \dots + \lambda_p)$.
See [Chapter 18](18-High-Dimensional-Statistics.md#the-derivation).

**Proportional allocation**
In stratified sampling, taking $n_h = nW_h$ so that each stratum is represented in its true proportion. Its variance is never larger than that of a simple random sample.
See [Chapter 5](05-Sampling-and-Experiments.md#stratified-sampling).

**Pruning**
Cutting a classification tree back, with the size chosen by cross-validation, to stop it overfitting.
See [Chapter 19](19-Statistical-Learning.md#classification-trees).

## Q

**Quantile**
The $p$-th quantile is a value with about a fraction $p$ of the data below it and $1 - p$ above; it is the $100p$-th percentile.
See [Chapter 3](03-Summaries.md#the-idea).

**Quantitative variable**
A variable whose values are numbers on which arithmetic makes sense, also called numerical. It is discrete or continuous.
See [Chapter 1](01-What-Statistics-Is-For.md#types-of-variable).

**Quartiles**
The values $Q_1$ and $Q_3$ that, with the median, split the sorted data into four parts of about equal size. One way: $Q_1$ is the median of the lower half and $Q_3$ of the upper half.
See [Chapter 2](02-Pictures-of-Data.md#the-five-number-summary).

**Quick margin of error**
The pollster's bound $1/\sqrt{n}$ for a 95 percent margin of error on a proportion, which holds whatever $p$ is because $p(1-p) \le \frac14$. For $n = 1000$ it is about 3 points.
See [Chapter 6](06-Sampling-Distributions.md#the-largest-standard-error-and-the-quick-margin-of-error).

## R

**$\hat R$ statistic**
Gelman and Rubin's diagnostic for MCMC: it compares the variance between several chains with the variance within them. Values near 1 suggest the chains have mixed.
See [Chapter 14](14-Bayesian-Statistics.md#diagnostics-how-do-you-know-it-worked).

**Random forest**
Breiman's (2001) ensemble of bagged trees in which each split may choose only among a random subset of the predictors, which decorrelates the trees and makes averaging more effective.
See [Chapter 19](19-Statistical-Learning.md#averaging-bagging-and-random-forests).

**Random variable**
A quantity whose value is uncertain before the sample is drawn, with a probability distribution. Every statistic is a random variable.
See [Chapter 6](06-Sampling-Distributions.md#a-small-population-we-can-see-whole).

**Random walk**
The AR(1) model with $\phi = 1$, $X_t = X_{t-1} + \varepsilon_t$. It is not stationary: its variance grows with time, though its differences are white noise.
See [Chapter 16](16-Time-Series.md#the-random-walk-phi-1).

**Randomised complete block design**
A design in which each block contains every treatment once, assigned in random order. The paired design is the case of two treatments.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#blocking).

**Randomised controlled trial**
A randomised experiment, especially in medicine, in which chance decides which units get the treatment and which are controls.
See [Chapter 1](01-What-Statistics-Is-For.md#two-ways-to-get-data).

**Randomised response**
Warner's (1965) survey method for sensitive questions: each respondent answers truthfully or randomly according to a private coin flip. It hides each answer yet allows an unbiased estimate of the share, and it is $\ln 3$-differentially private.
See [Chapter 20](20-Where-Statistics-Goes.md#randomised-response-privacy-before-computers).

**Randomised test**
A test that, for some data, rejects with a probability between 0 and 1. It is needed with discrete data to hit a size exactly.
See [Chapter 13](13-Likelihood-Theory.md#the-simplest-testing-problem).

**Range**
Maximum minus minimum. A single outlier controls it.
See [Chapter 3](03-Summaries.md#range-and-iqr).

**Rank (of a matrix)**
The largest number of linearly independent columns. If $p > n$ the design matrix has rank at most $n$, so $X^{\top}X$ is singular.
See [Chapter 18](18-High-Dimensional-Statistics.md#the-problem).

**Rao-Blackwell theorem**
If $T$ is sufficient and $U$ is any estimator, then $E[U \mid T]$ is an estimator with the same mean and no larger variance. Sufficiency improves estimators.
See [Chapter 13](13-Likelihood-Theory.md#rao-blackwell-sufficiency-improves-estimators).

**Reference prior**
A prior that tries to let the data speak, sometimes called "objective"; the best known is Jeffreys' prior.
See [Chapter 14](14-Bayesian-Statistics.md#kinds-of-prior).

**Registered report**
A publication format in which the journal reviews the introduction and planned methods before the data are collected and commits to publish whatever the results.
See [Chapter 20](20-Where-Statistics-Goes.md#202-preregistration).

**Regression discontinuity**
A design for when treatment is given by a cut-off on some score: units just above and just below the cut-off are compared, as if randomly assigned.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#difference-in-differences).

**Regression fallacy**
Mistaking regression to the mean for a real effect, as when treatments seem to work because people seek them at their worst, or punishment seems to work better than praise.
See [Chapter 11](11-Linear-Regression.md#the-regression-fallacy).

**Regression sum of squares (SSR)**
The variation explained by the fitted line, $\sum (\hat y_i - \bar y)^2$. The total sum of squares splits as $\text{SST} = \text{SSR} + \text{SSE}$.
See [Chapter 11](11-Linear-Regression.md#splitting-the-variation).

**Regression to the mean**
When two measurements are imperfectly correlated, units extreme on the first tend to be less extreme on the second, because extremes are partly luck. Galton found it in heights, and it gave regression its name.
See [Chapter 11](11-Linear-Regression.md#116-regression-to-the-mean).

**Regularity conditions**
The conditions under which likelihood theory works: the support does not depend on $\theta$, the log-density is smooth enough, and differentiation and integration can be exchanged.
See [Chapter 13](13-Likelihood-Theory.md#two-identities).

**Rejection rule**
The rule that says which values of a test statistic count as too surprising to believe $H_0$.
See [Chapter 9](09-Hypothesis-Tests.md#the-pieces-of-a-test).

**Relative frequency**
The frequency of a category divided by the total: the proportion of units in it.
See [Chapter 2](02-Pictures-of-Data.md#bar-charts-for-categories).

**Relative log-likelihood**
$\ell(\theta) - \ell(\hat\theta)$, which is 0 at the MLE and negative elsewhere.
See [Chapter 13](13-Likelihood-Theory.md#the-coin).

**Relative risk**
The risk in one group divided by the risk in another, $p_1/p_2$; also called the risk ratio.
See [Chapter 10](10-Categorical-Data.md#three-ways-to-compare-two-proportions).

**Relevance (instrumental variables)**
The assumption that the instrument changes the chance of treatment.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#instrumental-variables).

**Replicated result**
A result is replicated when an independent team repeats the study with new data collected the same way and finds the same thing.
See [Chapter 20](20-Where-Statistics-Goes.md#what-was-found).

**Replication (in design)**
Using enough units that chance differences between groups are small compared with the effect being sought. It is one of Fisher's three principles, with control and randomisation.
See [Chapter 5](05-Sampling-and-Experiments.md#observing-versus-intervening).

**Reproducibility Project: Psychology**
The Open Science Collaboration's 2015 attempt to repeat 100 published psychology studies. 97 of the originals had reported significant results, but only about 36% of the replications did, and the replication effects were on average about half as large.
See [Chapter 20](20-Where-Statistics-Goes.md#what-was-found).

**Residual**
The vertical distance from a point to the fitted line, $e_i = y_i - \hat y_i$, positive when the point is above the line.
See [Chapter 4](04-Relationships-and-Correlation.md#the-criterion).

**Residual plot**
A plot of the residuals against the fitted values (or $x$). A good model leaves a shapeless horizontal band; curves, fans and outliers show problems.
See [Chapter 11](11-Linear-Regression.md#residuals-as-the-evidence).

**Resistant**
A summary is resistant (or robust) if a small fraction of the data, however wild, cannot change it much. The median is resistant; the mean is not.
See [Chapter 3](03-Summaries.md#resistant-and-non-resistant-summaries).

**Response bias**
Bias that arises when people answer, but not truthfully or accurately, because of question wording, the interviewer or the wish to please.
See [Chapter 5](05-Sampling-and-Experiments.md#the-kinds-of-bias).

**Response variable**
The variable whose value we want to explain or predict, on the vertical axis of a scatter plot; $y$.
See [Chapter 2](02-Pictures-of-Data.md#24-scatter-plots).

**Restriction of range**
Sampling only a narrow range of $x$, which weakens the correlation even when the relationship is strong.
See [Chapter 4](04-Relationships-and-Correlation.md#what-r-does-and-does-not-measure).

**Ridge regression**
Penalised least squares that minimises $\lVert y - X\beta \rVert^2 + \lambda\lVert\beta\rVert^2$ (Hoerl and Kennard, 1970). It always has a unique solution, shrinks all coefficients toward zero, and sets none exactly to zero.
See [Chapter 18](18-High-Dimensional-Statistics.md#ridge-regression).

**Risk**
The proportion of a group with the outcome.
See [Chapter 10](10-Categorical-Data.md#three-ways-to-compare-two-proportions).

**Risk difference**
The difference $p_1 - p_2$ between the risks in two groups. Its reciprocal is the number needed to treat or harm.
See [Chapter 10](10-Categorical-Data.md#three-ways-to-compare-two-proportions).

**ROC curve**
The receiver operating characteristic curve: a classifier's sensitivity plotted against its false positive rate as the threshold varies.
See [Chapter 19](19-Statistical-Learning.md#roc-curves-and-auc).

**Rule of three**
If there are no successes in $n$ trials, an approximate 95 percent upper bound for the success probability is $3/n$.
See [Chapter 8](08-Confidence-Intervals.md#when-there-are-no-successes-the-rule-of-three).

**Rule of thumb (68-95-99.7)**
For bell-shaped data, about 68%, 95% and 99.7% of values lie within 1, 2 and 3 standard deviations of the mean. It is exact for the normal distribution.
See [Chapter 3](03-Summaries.md#chebyshevs-inequality-for-data).

## S

**Sample**
The part of the population you actually observe.
See [Chapter 1](01-What-Statistics-Is-For.md#the-words).

**Sample splitting**
Choosing a model on one part of the data and testing it on another, so that the tests are honest.
See [Chapter 12](12-Multiple-Regression.md#honest-model-selection).

**Sample variance and standard deviation**
$s^2 = \frac{1}{n-1}\sum (x_i - \bar{x})^2$ and its square root $s$, the usual measures of spread around the mean. Dividing by $n - 1$ makes $s^2$ unbiased for $\sigma^2$.
See [Chapter 3](03-Summaries.md#variance-and-standard-deviation).

**Sampling distribution**
The distribution of the values a statistic takes over all possible random samples. You never see it, but it is what standard errors, intervals and tests are about.
See [Chapter 6](06-Sampling-Distributions.md#the-words).

**Sampling frame**
The list from which a sample is actually drawn, such as an electoral roll or a list of addresses.
See [Chapter 5](05-Sampling-and-Experiments.md#the-question).

**Scatter plot**
A picture of two quantitative variables measured on the same units, one point per unit. Read it for direction, form, strength and unusual points.
See [Chapter 2](02-Pictures-of-Data.md#24-scatter-plots).

**Score**
The derivative of the log-likelihood, $S(\theta) = \ell'(\theta)$. Under regularity conditions it has mean zero at the true parameter, and its variance is the Fisher information.
See [Chapter 13](13-Likelihood-Theory.md#the-score).

**Score test**
Rao's (1948) test, based on how steep the log-likelihood is at $\theta_0$: $R = S_n(\theta_0)^2/(nI(\theta_0))$. It needs only the fit under the null hypothesis.
See [Chapter 13](13-Likelihood-Theory.md#three-ways-to-test-with-a-likelihood).

**Seasonal component**
The part of a time series that repeats in the same pattern every period, such as every twelve months.
See [Chapter 16](16-Time-Series.md#a-picture-first).

**Seasonally adjusted series**
A series with its estimated seasonal component removed, as official statistics publish it.
See [Chapter 16](16-Time-Series.md#centred-moving-averages).

**Selection bias identity**
The naive difference in mean outcome between treated and untreated equals the ATT plus a selection bias term, $E[Y(0) \mid T=1] - E[Y(0) \mid T=0]$. Randomisation makes the bias term zero.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#the-selection-bias-identity).

**Sensitivity (classifier)**
The share of real positives that a classifier catches, $TP/(TP + FN)$; also called recall or the true positive rate.
See [Chapter 19](19-Statistical-Learning.md#the-confusion-matrix).

**Sensitivity (of a function)**
The most one person can change a quantity, $\Delta = \max|f(D) - f(D')|$ over neighbouring data sets. For a count it is 1.
See [Chapter 20](20-Where-Statistics-Goes.md#the-laplace-mechanism).

**Sensitivity analysis**
Reporting how a conclusion changes over a range of reasonable priors (or assumptions). If it changes a lot, the data alone do not settle the question.
See [Chapter 14](14-Bayesian-Statistics.md#checking-a-prior).

**Sharp null hypothesis**
Fisher's null hypothesis that the treatment has no effect on any unit, $Y_i(1) = Y_i(0)$ for every $i$. Under it all potential outcomes are known, so the randomisation distribution of any statistic can be computed exactly.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#fishers-randomisation-test).

**Shrinkage**
Pulling estimates toward a common value or toward zero. In a hierarchical model each group's estimate is a precision-weighted compromise between its own data and the overall mean; ridge and the lasso shrink coefficients toward zero.
See [Chapter 14](14-Bayesian-Statistics.md#the-model).

**Sign test**
A test of a zero median difference that counts the positive differences; under the null this count is Binomial$(n, 1/2)$ exactly, whatever the shape of the data. It is the oldest test.
See [Chapter 15](15-Nonparametric-Methods.md#the-sign-test).

**Significance level**
The risk $\alpha$ (often 0.05) of rejecting a true null hypothesis that we agree to accept, fixed in advance.
See [Chapter 9](09-Hypothesis-Tests.md#the-courtroom-picture).

**Silverman's rule of thumb**
A bandwidth for kernel density estimation, $h = 0.9\min(s, \text{IQR}/1.34)\,n^{-1/5}$.
See [Chapter 15](15-Nonparametric-Methods.md#choosing-h-in-practice).

**Simple linear regression model**
The model $Y_i = \beta_0 + \beta_1x_i + \varepsilon_i$, with errors usually assumed to satisfy the LINE assumptions.
See [Chapter 11](11-Linear-Regression.md#from-a-line-through-points-to-a-model-of-a-process).

**Simple random sample (SRS)**
A sample of size $n$ chosen so that every set of $n$ units in the population is equally likely to be the sample.
See [Chapter 5](05-Sampling-and-Experiments.md#simple-random-samples).

**Simpson's paradox**
An association that holds within every group but reverses when the groups are combined, because the groups differ in size and in the other variable. The Berkeley admissions of 1973 are the famous example.
See [Chapter 4](04-Relationships-and-Correlation.md#46-simpsons-paradox).

**Singular value decomposition (SVD)**
The factorisation $X = UDV^{\top}$ of a matrix, with $U$ and $V$ having orthonormal columns and $D$ diagonal. For a centred data matrix the columns of $V$ are the principal components.
See [Chapter 18](18-High-Dimensional-Statistics.md#in-practice).

**Size (of a test)**
The probability $\alpha$ that a test rejects when $H_0$ is true.
See [Chapter 13](13-Likelihood-Theory.md#the-simplest-testing-problem).

**Skewed distribution**
A distribution with one tail stretching out further than the other. It is right-skewed (positively skewed) if the long tail is on the right, left-skewed if on the left; in a right-skewed distribution the mean is usually larger than the median.
See [Chapter 2](02-Pictures-of-Data.md#22-shape-centre-and-spread-by-eye).

**Skewness**
For a random variable with mean $m$ and standard deviation $\tau$, $E[(Y - m)^3]/\tau^3$. The mean of $n$ iid values has skewness $\gamma/\sqrt{n}$, which is why the CLT works faster for symmetric populations.
See [Chapter 6](06-Sampling-Distributions.md#why-skewness-fades-like-1sqrtn).

**Slope**
The rise $b$ of the line $y = a + bx$ for each unit of $x$. In a regression model, $\beta_1$ is the change in the mean response for a one-unit increase in $x$.
See [Chapter 4](04-Relationships-and-Correlation.md#the-criterion).

**Slutsky's theorem**
If one sequence tends in distribution to a limit and another tends in probability to a constant, their product or ratio tends in distribution to the limit combined with the constant. It is a step in proving asymptotic normality of the MLE.
See [Chapter 13](13-Likelihood-Theory.md#the-idea-of-the-proof).

**Soft thresholding**
The lasso solution with orthonormal predictors: each least squares coefficient is moved toward zero by $\lambda$, and set to zero if it is smaller than $\lambda$ in size.
See [Chapter 18](18-High-Dimensional-Statistics.md#the-lasso).

**Sparse**
Having most coefficients exactly zero. The lasso gives sparse answers because the corners of its $\ell_1$ ball lie on coordinate axes.
See [Chapter 18](18-High-Dimensional-Statistics.md#the-geometry).

**Spearman's rank correlation**
The ordinary correlation of the ranks of $x$ and the ranks of $y$, written $r_s$. It measures monotone association and equals 1 exactly when $y$ always increases with $x$.
See [Chapter 15](15-Nonparametric-Methods.md#spearmans-rank-correlation).

**Specificity**
The share of real negatives that a classifier correctly calls negative, $TN/(TN + FP)$.
See [Chapter 19](19-Statistical-Learning.md#the-confusion-matrix).

**Standard error (SE)**
The standard deviation of a statistic's sampling distribution: how far the statistic typically misses its target. For a sample mean it is $\sigma/\sqrt{n}$.
See [Chapter 6](06-Sampling-Distributions.md#the-words).

**Standardised effect size**
The difference between the true and null means divided by the standard deviation of one observation. Power depends on it and on $n$.
See [Chapter 9](09-Hypothesis-Tests.md#power-of-the-z-test).

**Standardised residual**
A residual divided by its estimated standard deviation, $r_i = e_i/(s\sqrt{1 - h_{ii}})$, which puts all points on a common scale. In a contingency table the analogous quantity shows which cells drive a chi-square result.
See [Chapter 11](11-Linear-Regression.md#leverage-outliers-and-influence).

**Statistic**
A number computed from a sample, such as $\bar x$ or $\hat p$. It changes from sample to sample, so it is a random variable.
See [Chapter 1](01-What-Statistics-Is-For.md#parameters-and-statistics).

**Statistics**
The science of learning from data when the data are incomplete, noisy or both.
See [Chapter 1](01-What-Statistics-Is-For.md#11-questions-data-can-and-cannot-answer).

**Stein's paradox**
When three or more normal means are estimated together, the sample means are inadmissible: shrinking them all toward a common point (the James-Stein estimator) has smaller expected total squared error for every value of the means.
See [Chapter 14](14-Bayesian-Statistics.md#why-shrinkage-is-right-steins-paradox).

**Stem plot**
A picture that keeps every value: each number is split into a stem (all but the last digit) and a leaf (the last digit), the stems written in a column and the leaves beside them. Also called a stem-and-leaf plot; it needs a key.
See [Chapter 2](02-Pictures-of-Data.md#stem-plots).

**Stratification (causal inference)**
Comparing treated and untreated units within groups that share the same covariate values and then averaging over the groups; also called subclassification.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#matching-on-observed-covariates).

**Stratified sampling**
Splitting the population into non-overlapping groups called strata and taking a separate simple random sample in each. The stratified estimator weights the stratum means by the stratum sizes.
See [Chapter 5](05-Sampling-and-Experiments.md#stratified-sampling).

**Stratifying**
Looking at an association within groups that share the same value of a possible confounder, also called controlling for it. If the association persists within groups, the confounder does not explain it.
See [Chapter 4](04-Relationships-and-Correlation.md#confounders-more-carefully).

**Student's $t$ distribution**
The distribution of $Z/\sqrt{V/\nu}$, with $Z$ standard normal and $V$ an independent $\chi^2_\nu$, written $t_\nu$. It is like the normal with heavier tails and approaches it as $\nu$ grows; $(\bar X - \mu)/(S/\sqrt{n})$ has the $t_{n-1}$ distribution for normal data.
See [Chapter 8](08-Confidence-Intervals.md#the-t-distribution).

**Studentised**
Divided by an estimated standard error, as in $(\hat\theta - \theta)/\widehat{\operatorname{se}}$; named after Student.
See [Chapter 8](08-Confidence-Intervals.md#the-bootstrap-t-interval).

**Sufficient statistic**
A statistic $T$ is sufficient for $\theta$ if the conditional distribution of the data given $T$ does not depend on $\theta$: once $T$ is known, the rest of the data says nothing more about $\theta$.
See [Chapter 13](13-Likelihood-Theory.md#what-can-you-throw-away).

**Sum of squared residuals (SSE)**
$\sum (y_i - \hat y_i)^2$, the quantity the least squares line minimises.
See [Chapter 4](04-Relationships-and-Correlation.md#the-criterion).

**Survivorship bias**
Bias that arises when the data you can see were filtered by the very thing you want to study, as with the planes that came back from missions.
See [Chapter 1](01-What-Statistics-Is-For.md#15-how-statistics-goes-wrong-a-preview).

**SUTVA**
The stable unit treatment value assumption: one unit's outcome does not depend on the treatment of other units, and there is only one version of each treatment.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#what-does-the-effect-mean).

**Symmetric distribution**
A distribution whose two halves around the centre are roughly mirror images.
See [Chapter 2](02-Pictures-of-Data.md#22-shape-centre-and-spread-by-eye).

**Systematic sampling**
Taking every $k$-th unit on a list after a random start. It behaves like a simple random sample unless the list has a pattern with period near $k$.
See [Chapter 5](05-Sampling-and-Experiments.md#cluster-sampling).

## T

**$t$ interval**
The confidence interval $\bar x \pm t_{\alpha/2, n-1}\,s/\sqrt{n}$ for a mean with unknown $\sigma$. It is exact for normal data and fairly robust to non-normality, but not to strong skewness, outliers or dependence in small samples.
See [Chapter 8](08-Confidence-Intervals.md#the-t-interval).

**$t$ test, one-sample**
The test of $H_0: \mu = \mu_0$ using $T = (\bar X - \mu_0)/(S/\sqrt{n})$, which has the $t_{n-1}$ distribution under $H_0$ for normal data.
See [Chapter 9](09-Hypothesis-Tests.md#the-one-sample-t-test).

**Target leakage**
A predictor that is a consequence of the outcome, such as a treatment given only after diagnosis, so that the model will not have it at prediction time.
See [Chapter 19](19-Statistical-Learning.md#leakage-accuracy-from-nowhere).

**Test statistic**
A number computed from the data that measures how far the data are from what $H_0$ predicts.
See [Chapter 9](09-Hypothesis-Tests.md#the-pieces-of-a-test).

**Threshold**
The cut-off $c$ that turns predicted probabilities into decisions: predict class 1 when $\hat p(x) > c$. Moving it trades sensitivity against specificity.
See [Chapter 19](19-Statistical-Learning.md#try-it-in-python).

**Time plot**
A plot of each value against its time, with the dots joined. It shows order effects that a histogram throws away.
See [Chapter 2](02-Pictures-of-Data.md#22-shape-centre-and-spread-by-eye).

**Time series**
A sequence of observations $x_1, x_2, \dots, x_n$ indexed by time, usually at equal spacing. Its values are usually not independent.
See [Chapter 16](16-Time-Series.md#the-decomposition).

**Total sum of squares (SST)**
$\sum (y_i - \bar y)^2$, how much $y$ varies around its mean before any line is fitted.
See [Chapter 4](04-Relationships-and-Correlation.md#r2-the-fraction-of-variation-explained).

**Trace**
The sum of the diagonal entries of a square matrix, $\operatorname{tr}(M)$. The trace of a covariance matrix is the total variance and equals the sum of its eigenvalues.
See [Chapter 12](12-Multiple-Regression.md#just-enough-matrix-algebra).

**Trace plot**
A plot of an MCMC chain's values against step number. A good chain looks like a fuzzy horizontal band.
See [Chapter 14](14-Bayesian-Statistics.md#diagnostics-how-do-you-know-it-worked).

**Train-test contamination**
The same patient, photograph or near-duplicate appearing in both training and test data, so that test accuracy is too good.
See [Chapter 19](19-Statistical-Learning.md#leakage-accuracy-from-nowhere).

**Training set**
The data used to fit a model, as opposed to the test or calibration data used to judge it.
See [Chapter 19](19-Statistical-Learning.md#fitting-versus-predicting).

**Transportability**
Carrying causal conclusions from the population that was studied to a different one; part of external validity.
See [Chapter 20](20-Where-Statistics-Goes.md#206-open-questions).

**Treatment**
What an experimenter assigns to units and compares, such as a drug, a fertiliser or a web page design.
See [Chapter 1](01-What-Statistics-Is-For.md#two-ways-to-get-data).

**Trend**
The long-run drift of a time series, up or down over the years.
See [Chapter 16](16-Time-Series.md#a-picture-first).

**Trimmed mean**
The mean of the data after removing the $g$ smallest and $g$ largest values. It is a compromise between the mean ($g = 0$) and the median, with breakdown point $(g+1)/n$.
See [Chapter 3](03-Summaries.md#two-compromises).

**Truncated axis**
A vertical axis that does not start at zero. It exaggerates differences in a bar chart, though it is often right for a line graph.
See [Chapter 2](02-Pictures-of-Data.md#truncated-axes).

**Tuning parameter**
A number such as the penalty $\lambda$ in ridge or the lasso, chosen by the analyst (often by cross-validation) rather than estimated by the fit.
See [Chapter 18](18-High-Dimensional-Statistics.md#ridge-regression).

**Two-way ANOVA**
An analysis of variance with two factors, splitting the variation into the two main effects, their interaction and error.
See [Chapter 12](12-Multiple-Regression.md#a-short-history).

**Two-way table**
A table of counts for every combination of two categorical variables recorded on the same units; also called a contingency table or cross-tabulation.
See [Chapter 4](04-Relationships-and-Correlation.md#41-two-way-tables).

**Type I error**
Rejecting a true null hypothesis: a false alarm. Its probability is the significance level $\alpha$.
See [Chapter 9](09-Hypothesis-Tests.md#two-ways-to-be-wrong).

**Type II error**
Failing to reject a false null hypothesis: a miss. Its probability is $\beta$, and the power is $1 - \beta$.
See [Chapter 9](09-Hypothesis-Tests.md#two-ways-to-be-wrong).

**Type M and type S errors**
Gelman and Carlin's names for what low power does to significant results: they exaggerate the size of the effect (type M, magnitude) and sometimes have the wrong sign (type S).
See [Chapter 20](20-Where-Statistics-Goes.md#why-the-arithmetic).

## U

**Unbiased estimator**
An estimator whose expected value equals the parameter for every value of the parameter, so that its bias is zero.
See [Chapter 7](07-Estimation.md#the-words).

**Unconfoundedness**
The assumption that, given the observed covariates, treatment is independent of the potential outcomes; also called no unmeasured confounding, ignorability or selection on observables.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#matching-on-observed-covariates).

**Undercoverage**
Bias that arises when some of the population is not on the sampling frame at all; also called frame bias.
See [Chapter 5](05-Sampling-and-Experiments.md#the-kinds-of-bias).

**Uniformly most powerful (UMP) test**
A test that is most powerful at its size against every alternative in a composite alternative hypothesis. One-sided UMP tests exist when the likelihood ratio is monotone.
See [Chapter 13](13-Likelihood-Theory.md#worked-example-normal-means).

**Unimodal**
Having one clear peak. A distribution with two peaks is bimodal and with several multimodal; two peaks often mean two groups mixed together.
See [Chapter 2](02-Pictures-of-Data.md#22-shape-centre-and-spread-by-eye).

**Unit**
One thing you observe, such as a person, a household, a tree or a day; also called a case or individual.
See [Chapter 1](01-What-Statistics-Is-For.md#the-words).

**Unit root**
A series has a unit root (or is integrated) if it behaves like a random walk, $\phi = 1$, so that its differences rather than its levels are stationary. Testing for one is harder than it looks.
See [Chapter 16](16-Time-Series.md#the-random-walk-phi-1).

**Universal approximation theorems**
Results (Cybenko, 1989; Hornik, 1991) that a network with one hidden layer and enough neurons can approximate any continuous function on a bounded set as closely as desired. They say nothing about how to find the weights or how well the network generalises.
See [Chapter 19](19-Statistical-Learning.md#what-is-proved-and-what-is-not).

## V

**Variable**
A property that can differ from unit to unit, such as age, height or opinion.
See [Chapter 1](01-What-Statistics-Is-For.md#the-words).

**Variance (of an estimator)**
$\operatorname{Var}(\hat\theta)$, the spread of the estimator's sampling distribution; its square root is the standard error.
See [Chapter 7](07-Estimation.md#the-words).

**Variance inflation factor (VIF)**
The factor by which collinearity multiplies the variance of a coefficient, $1/(1 - R_j^2)$, where $R_j^2$ is from regressing predictor $j$ on the others.
See [Chapter 12](12-Multiple-Regression.md#the-variance-inflation-factor).

**Voluntary response bias**
Bias that arises when the sample chooses itself, as in call-in polls, online votes and product reviews. Strong opinions are over-represented.
See [Chapter 5](05-Sampling-and-Experiments.md#the-kinds-of-bias).

## W

**Wald estimator**
In an instrumental variable study, the difference in mean outcome between the instrument groups divided by the difference in treatment rates. Under the IV assumptions and monotonicity it estimates the local average treatment effect.
See [Chapter 17](17-Experimental-Design-and-Causal-Inference.md#instrumental-variables).

**Wald interval**
An interval of the form estimate $\pm z$ times estimated standard error, such as $\hat p \pm z\sqrt{\hat p(1 - \hat p)/n}$ for a proportion. For proportions it undercovers badly near 0 and 1 and erratically elsewhere.
See [Chapter 8](08-Confidence-Intervals.md#why-wald-fails).

**Wald test**
A likelihood-based test that asks how far $\hat\theta$ is from $\theta_0$ in standard errors: $W = (\hat\theta - \theta_0)^2\,nI(\hat\theta)$.
See [Chapter 13](13-Likelihood-Theory.md#three-ways-to-test-with-a-likelihood).

**Weakly informative prior**
A prior that rules out absurd values without pretending to know much, such as a normal with standard deviation around 1.5 for a log-odds.
See [Chapter 14](14-Bayesian-Statistics.md#kinds-of-prior).

**Weakly stationary**
A series is weakly stationary if its mean is the same at all times and $\operatorname{Cov}(X_t, X_{t+h})$ depends only on the lag $h$.
See [Chapter 16](16-Time-Series.md#stationarity).

**Weighted mean**
A mean in which each value is multiplied by a weight and the total divided by the sum of the weights. The mean from a frequency table weights each value by its relative frequency.
See [Chapter 3](03-Summaries.md#from-a-frequency-table).

**Welch's t test**
A two-sample t test that does not assume equal variances, with the Welch-Satterthwaite degrees of freedom. Many statisticians now use it by default.
See [Chapter 9](09-Hypothesis-Tests.md#two-independent-samples).

**White noise**
A series of uncorrelated values with mean 0 and constant variance $\sigma^2$; the simplest stationary series. Its sample autocorrelations are approximately $N(0, 1/n)$.
See [Chapter 16](16-Time-Series.md#stationarity).

**Wilcoxon signed-rank test**
A test for paired data: rank the absolute differences and add the ranks of the positive ones, $W^+$. Under the null of symmetry about zero its distribution is known exactly, with mean $n(n+1)/4$.
See [Chapter 15](15-Nonparametric-Methods.md#the-wilcoxon-signed-rank-test).

**Wilks' theorem**
Under regularity conditions, if $H_0$ fixes $r$ of the parameters, the likelihood ratio statistic $\Lambda$ tends in distribution to $\chi^2_r$ (Wilks, 1938).
See [Chapter 13](13-Likelihood-Theory.md#wilks-theorem).

**Wilson interval**
An interval for a proportion (Wilson, 1927) made of all $p$ with $|\hat p - p| \le z\sqrt{p(1-p)/n}$. Its centre is pulled toward $\frac12$; it never leaves $[0, 1]$ and its coverage is close to nominal.
See [Chapter 8](08-Confidence-Intervals.md#the-wilson-interval).

## Y

**Yates's correction**
A continuity correction for small two-by-two tables (Frank Yates, 1934) that replaces $|ad - bc|$ by $|ad - bc| - N/2$ in the chi-square statistic. It is conservative.
See [Chapter 10](10-Categorical-Data.md#the-two-by-two-table).

**Yule-Walker estimate**
The estimate of the AR(1) coefficient $\phi$ by the lag-1 sample autocorrelation $r_1$, since $\rho(1) = \phi$.
See [Chapter 16](16-Time-Series.md#estimating-phi).

## Z

**z statistic**
$Z = (\bar X - \mu_0)/(\sigma/\sqrt{n})$, standard normal under $H_0: \mu = \mu_0$ when $\sigma$ is known.
See [Chapter 9](09-Hypothesis-Tests.md#the-pieces-of-a-test).

**z-score**
The standardised value $z = (x - \bar{x})/s$: how many standard deviations $x$ lies above or below the mean. Standardised data have mean 0 and standard deviation 1.
See [Chapter 3](03-Summaries.md#33-z-scores).
