# 20. Where statistics goes

*The last chapter looks at statistics now and ahead. In the 2010s large replication projects found that many
published findings did not hold up, and the reasons turned out to be statistical: small studies, flexible analyses,
and a habit of publishing only what crossed $p < 0.05$. You will see that story accurately, do the arithmetic that
explains it, and meet the repairs (preregistration and registered reports). Then come four lines of work that shape
the field today: conformal prediction, which wraps any prediction method in intervals with a guaranteed coverage
(proved here); causal machine learning, which joins Chapter 17 to Chapter 19; differential privacy, a mathematical
definition of privacy now used in the United States census, with the Laplace mechanism proved; and a list of honest
open questions.*

!!! abstract "In this chapter"
    **You will learn:**

    - what the Open Science Collaboration's 2015 replication project did and found, and why low power plus selective reporting predicts it (the arithmetic of false discoveries, inflated effects)
    - how flexible analysis inflates false positives (a simulation), and what preregistration and registered reports change
    - split conformal prediction and a proof that its intervals cover new observations with probability at least $1 - \alpha$, for any model and any distribution
    - the ideas of causal machine learning: partialling out, double machine learning with cross-fitting, and heterogeneous effects
    - the definition of differential privacy, proofs for the Laplace mechanism, randomised response and composition, and how the 2020 US Census used it
    - open questions at the frontier, from why huge models generalise to valid inference after looking at the data

    **You need:** [Chapter 9](09-Hypothesis-Tests.md) (p-values, power, multiple testing),
    [Chapter 17](17-Experimental-Design-and-Causal-Inference.md) (potential outcomes),
    [Chapter 18](18-High-Dimensional-Statistics.md) (false discovery rate) and
    [Chapter 19](19-Statistical-Learning.md) (prediction, cross-validation). Exchangeability from
    [Chapter 15](15-Nonparametric-Methods.md) is used in 20.3.

    **Levels:** 20.1 and 20.2 are intermediate (everyone who has read Part III can follow them); 20.3 and 20.5 are
    advanced, with complete proofs; 20.4 and 20.6 are expert surveys.

## 20.1 The replication crisis

*Level: intermediate.*

### What was found

A result is **replicated** when an independent team repeats the study, with new data collected the same way, and
gets a consistent answer. Science assumes most published results would pass that test. In the early 2010s several
groups checked.

The best known is the **Reproducibility Project: Psychology**, organised by the Open Science Collaboration (a group of
about 270 researchers coordinated by Brian Nosek and the Center for Open Science) and published in *Science* in 2015.
They repeated 100 experimental and correlational studies published in 2008 in three leading psychology journals,
working with the original authors' materials where possible and with larger samples than the originals on average.
The main results:

- 97 of the 100 original studies had reported statistically significant results; only about 36% of the
  replications did.
- The replication effects were on average about half the size of the original effects (mean correlation about 0.20,
  against about 0.40).
- About 39% of the effects were judged by the replication teams to have replicated, and 47% of the original effect
  sizes fell inside the 95% confidence intervals of the replications.

The authors were careful about what this does and does not mean. A failed replication does not prove the original
effect false (the replication might be the unlucky one, or differ in some important way), and the project was a
sample of studies from one field and one year. But no single reading of the numbers made them comfortable. Other
fields saw similar results. A team led by Colin Camerer (2018) replicated 21 social science experiments published in
*Nature* and *Science* between 2010 and 2015 and found significant effects in the same direction for 13 of them, with
effects on average about half the original size. In cancer biology, C. Glenn Begley and Lee Ellis (2012) reported that
scientists at the company Amgen had been able to confirm the findings of only 6 of 53 "landmark" preclinical studies.

### Why: the arithmetic

None of this needs fraud. It follows from three ordinary habits: studies with low **power** (small samples for the
size of effect sought), testing many ideas of which few are true, and publishing mainly the results that reach
$p < 0.05$. John Ioannidis set out this argument in a 2005 essay with the deliberately provocative title "Why most
published research findings are false".

Suppose that of all the hypotheses a field tests, a share $\pi$ are true (there is a real effect), each test uses
level $\alpha$, and the power against the real effects is $1 - \beta$. Then among significant results, the share that
are real is

$$
\text{PPV} = \frac{(1 - \beta)\,\pi}{(1 - \beta)\,\pi + \alpha\,(1 - \pi)} .
$$

This is Bayes' theorem again, exactly as in the screening test of [Chapter 19](19-Statistical-Learning.md): power plays
the role of sensitivity, $\alpha$ of the false positive rate, and $\pi$ of the base rate.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 560 165" role="img" aria-label="A bar standing for 1000 tested hypotheses. 100 are real effects, of which 80 are found and 20 missed; 900 have no effect, of which 45 are falsely significant. Of the 125 significant results, 45, or 36 percent, are false.">
  <rect x="30" y="40" width="40" height="40" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <rect x="70" y="40" width="10" height="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="80" y="40" width="22.5" height="40" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="102.5" y="40" width="427.5" height="40" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1"/>
  <line x1="80" y1="22" x2="80" y2="88" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/>
  <g fill="currentColor" font-size="12">
    <text x="55" y="32" text-anchor="middle">100 real</text>
    <text x="305" y="32" text-anchor="middle">900 with no real effect</text>
    <rect x="30" y="98" width="12" height="12" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
    <text x="48" y="109">80 real effects found (power 0.8); the 20 missed are the empty box</text>
    <rect x="30" y="118" width="12" height="12" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
    <text x="48" y="129">45 false positives (5% of 900)</text>
    <text x="30" y="152">Significant: 80 + 45 = 125, of which 45 (36%) are false.</text>
  </g>
</svg>
</div>

With $\pi = 0.1$, $\alpha = 0.05$ and power 0.8, $\text{PPV} = \frac{0.08}{0.08 + 0.045} = 0.64$: about a third of
significant findings are false, as in the picture. With power 0.35, more typical of small studies, PPV falls to
$\frac{0.035}{0.035 + 0.045} \approx 0.44$, and with power 0.2 to about $0.31$. With half of all tested hypotheses
true and power 0.8 it would be 0.94. The field's prior plausibility and its power matter as much as $\alpha$.

**Inflated effects.** Low power also distorts the effects that *are* real. Andrew Gelman and John Carlin (2014) called
the exaggeration a **type M (magnitude) error**. Suppose the true effect is 1.12 standard errors, which gives power
about 0.20 at the two-sided 5% level. Only estimates beyond $\pm 1.96$ are significant, so the significant ones are
the lucky overestimates. A short calculation (integrating the normal density over the significant region) shows that
the average size of a significant estimate is about 2.52 standard errors, **2.25 times the truth**; and about 0.5% of
significant estimates even have the wrong sign (a **type S error**). If only significant results are published, the
literature overstates effects, and a replication with the true effect will look like a "failure". This is the winner's
curse, and it explains the halving of effect sizes seen above.

### Flexible analysis

The third ingredient is subtler. Joseph Simmons, Leif Nelson and Uri Simonsohn (2011) showed how ordinary, defensible
choices made *after* seeing the data (which outcome to report, whether to collect more data, which observations to
exclude, which covariates to include) can push the real false positive rate far above the nominal 5%, without anyone
intending to cheat. Gelman and Eric Loken called this the **garden of forking paths**: the analysis that was done may
have been just one test, but a different data set would have led to a different, equally reasonable test.

**Worked example 1 (a simulation).** Two groups of 20, no true difference, two correlated outcome measures (correlation
0.5). The analyst tests outcome 1, outcome 2 and their average; if none is significant, collects 10 more per group
and tests all three again; and reports a finding if any test gives $p < 0.05$. In 40,000 simulated studies, a single
pre-chosen test was significant 5.1% of the time, as it should be, while the flexible strategy found "an effect"
**14.8%** of the time, nearly three times the nominal rate. Simmons and colleagues, combining more such choices,
obtained rates above 50%.

Note that the analyst need not run all the tests; it is enough that the choice of test *would have been different*
with different data. That is why the problem is hard to see from inside a single study.

## 20.2 Preregistration

*Level: intermediate.*

The cure for forking paths is to choose the path before seeing the data. A **preregistration** is a time-stamped
public document, written before the data are collected (or at least before they are examined), that states the
hypotheses, the sample size and stopping rule, the primary outcome, the exclusion rules and the analysis. Analyses that
follow the plan are **confirmatory**; anything else is welcome but labelled **exploratory**, and its p-values are read
as hints, not evidence.

Medicine adopted this first, for clinical trials. The International Committee of Medical Journal Editors announced in
2004 that its journals would publish trials only if they had been registered in a public registry before enrolling
patients, for trials starting from July 2005, and US law (the FDA Amendments Act of 2007) required registration and
results reporting for many trials on ClinicalTrials.gov. An effect was visible. Robert Kaplan and Veronica Irvin (2015)
looked at large trials funded by the US National Heart, Lung, and Blood Institute: of 30 published before 2000, when
registering the primary outcome was not required, 17 (57%) reported a significant benefit; of 25 published after,
only 2 (8%) did. The trials after 2000 were not worse; they could no longer choose their outcome after the fact.

A **registered report** goes one step further: the journal reviews the introduction and planned methods *before* the
data exist, and if they are sound, commits to publishing the paper whatever the results. This removes the incentive to
find $p < 0.05$, because the decision to publish no longer depends on it. The journal *Cortex* introduced the format
in 2013, led by Chris Chambers, and hundreds of journals now offer it.

Preregistration is not a cure-all. Plans can be vague, deviations can go unreported, and exploratory work is essential
to discovery: nobody can preregister a surprise. Other parts of the reform are as important: sharing data and code,
larger samples (often through multi-site collaborations), reporting estimates and intervals instead of
significant-or-not, and replication itself. The American Statistical Association's 2016 statement on p-values
([Chapter 9](09-Hypothesis-Tests.md)) is part of the same movement. A group of 72 researchers led by Daniel Benjamin
(2018) proposed lowering the default threshold for claiming new discoveries to $p < 0.005$; with $\alpha = 0.005$ the
PPV in the example above (power 0.8, $\pi = 0.1$) rises from 0.64 to about 0.95, at the cost of needing larger
studies. Others argued against any fixed threshold. The debate continues, and is itself a sign of a healthier field.

## 20.3 Conformal prediction

*Level: advanced (proof complete).*

### The problem

A prediction method (a regression, a random forest, a neural network) gives a point prediction $\hat y$ for a new
$x$. How far off might it be? Classical prediction intervals ([Chapter 11](11-Linear-Regression.md)) rely on the model
being correct, with normal errors. For a random forest or a neural network there is usually no such theory. **Conformal
prediction**, developed by Vladimir Vovk, Alexander Gammerman and Glenn Shafer from the late 1990s, gives intervals
with a guaranteed coverage for *any* method, assuming only that the data points are **exchangeable**: their joint
distribution does not change if we reorder them (true, in particular, for independent draws from one distribution).

### Split conformal prediction

1. Split the data in two: a **training set** and a **calibration set** of $n$ points.
2. Fit any model $\hat f$ on the training set.
3. On each calibration point compute a **score** of how badly the model does, for example the absolute residual
   $S_i = |y_i - \hat f(x_i)|$.
4. Let $k = \lceil (n + 1)(1 - \alpha) \rceil$ (the ceiling, that is, round up), and let $\hat q$ be the $k$th smallest of
   $S_1, \dots, S_n$. (If $k > n$, take $\hat q = \infty$: there is not enough data for that coverage.)
5. For a new $x$, the prediction interval is $C(x) = [\hat f(x) - \hat q,\ \hat f(x) + \hat q]$.

**Worked example 2 (made-up residuals).** With $n = 19$ calibration points and $\alpha = 0.1$, $k = \lceil 20 \times 0.9 \rceil = 18$. Suppose the sorted absolute residuals are

$$
0.2,\ 0.3,\ 0.4,\ 0.5,\ 0.6,\ 0.7,\ 0.8,\ 0.9,\ 1.0,\ 1.1,\ 1.2,\ 1.4,\ 1.5,\ 1.7,\ 1.9,\ 2.1,\ 2.4,\ 2.8,\ 3.5 .
$$

The 18th smallest is $\hat q = 2.8$. If the model predicts $\hat f(x) = 10.0$ for a new point, the 90% conformal
interval is $[7.2, 12.8]$.

**Theorem (coverage).** If the calibration points and the new point $(x_{n+1}, y_{n+1})$ are exchangeable (and the
model was fitted on separate data), then

$$
P\bigl(y_{n+1} \in C(x_{n+1})\bigr) \ge 1 - \alpha .
$$

If moreover the scores have no ties (for example, they have a continuous distribution), the probability is also less
than $1 - \alpha + \frac{1}{n + 1}$.

*Proof.* The model $\hat f$ is fixed once the training set is fixed, so the scores $S_1, \dots, S_n, S_{n+1}$, where
$S_{n+1} = |y_{n+1} - \hat f(x_{n+1})|$, are computed by the same function from exchangeable points; hence they are
exchangeable too. Assume first there are no ties. By exchangeability, every ordering of the $n + 1$ scores is equally
likely, so the **rank** of $S_{n+1}$ among them (1 for the smallest, $n + 1$ for the largest) is uniformly distributed
on $\{1, \dots, n + 1\}$.

Now $y_{n+1} \in C(x_{n+1})$ exactly when $S_{n+1} \le \hat q$, the $k$th smallest calibration score. That holds exactly
when fewer than $k$ calibration scores are below $S_{n+1}$, that is, when the rank of $S_{n+1}$ is at most $k$. So

$$
P\bigl(y_{n+1} \in C(x_{n+1})\bigr) = \frac{k}{n + 1} = \frac{\lceil (n + 1)(1 - \alpha) \rceil}{n + 1} ,
$$

which is at least $1 - \alpha$, and less than $1 - \alpha + \frac{1}{n + 1}$ because rounding up adds less than 1.
With ties, break them at random: the resulting rank is again uniform, and whenever it is at most $k$, at most
$k - 1$ calibration scores are strictly smaller than $S_{n+1}$, which is exactly the event $S_{n+1} \le \hat q$. So
that event still has probability at least $\frac{k}{n + 1}$. $\square$

**Check** with the example: $\frac{18}{20} = 0.90$, between $0.9$ and $0.9 + \frac{1}{20} = 0.95$.

### What it does and does not promise

The guarantee is remarkable: no model assumptions, no large-sample approximation, exact in finite samples. A bad model
still gets valid intervals; they are just wide. But the coverage is **marginal**: averaged over new points, not for
each $x$. The intervals above have the same width everywhere, even if the noise is larger for some $x$ than others.
Variants fix this partly: scaling the scores by an estimate of local spread, or using quantile regression
(**conformalised quantile regression**, Yaniv Romano, Evan Patterson and Emmanuel Candès, 2019). Exact coverage
*conditional* on each $x$ is impossible in general without assumptions, a theorem of the subject. And the guarantee
needs exchangeability: when the new data differ in distribution from the calibration data (**distribution shift**), it
can fail, and extending conformal methods to shift is an active research area.

## 20.4 Causal machine learning

*Level: expert (ideas).*

[Chapter 17](17-Experimental-Design-and-Causal-Inference.md) showed that under unconfoundedness, causal effects are
identified by adjusting for covariates $X$. With many covariates, or a complicated relation between $X$ and the
outcome, the adjustment needs flexible regression, which is what [Chapter 19](19-Statistical-Learning.md) provides.
The difficulty is that machine learning methods are built to predict well, not to estimate one parameter without
bias, and their errors (from regularisation and overfitting) leak into the causal estimate. **Causal machine
learning** is the work on combining the two correctly.

### Partialling out

Take the **partially linear model** (Peter Robinson, 1988):

$$
Y = \theta D + g(X) + \varepsilon, \qquad E[\varepsilon \mid D, X] = 0 ,
$$

where $D$ is the treatment (possibly continuous), $\theta$ is the effect we want, and $g$ is an unknown function of the
covariates. Let $m(X) = E[D \mid X]$ and $\ell(X) = E[Y \mid X]$. Taking the expectation of the model given $X$ gives
$\ell(X) = \theta m(X) + g(X)$, and subtracting,

$$
Y - \ell(X) = \theta\bigl(D - m(X)\bigr) + \varepsilon .
$$

So $\theta$ is the slope from regressing the **residualised** outcome on the **residualised** treatment:
$\theta = \frac{E[(Y - \ell(X))(D - m(X))]}{E[(D - m(X))^2]}$. This is the Frisch-Waugh-Lovell idea from linear
regression ([Chapter 12](12-Multiple-Regression.md)), with the two regressions on $X$ done by any method.

### Double machine learning

Victor Chernozhukov, Denis Chetverikov, Mert Demirer, Esther Duflo, Christian Hansen, Whitney Newey and James Robins
(2018) turned this into a general recipe:

1. Estimate $\ell$ and $m$ with any machine learning method (lasso, random forest, boosting, a network).
2. **Cross-fit**: split the data into folds; for each fold, fit $\hat\ell$ and $\hat m$ on the *other* folds and
   compute residuals on this fold. This keeps each unit's residual from being computed by a model that has seen it,
   which avoids the overfitting bias of [Chapter 19](19-Statistical-Learning.md)'s leakage example.
3. Regress the outcome residuals on the treatment residuals to get $\hat\theta$.

The key property is **Neyman orthogonality**: the estimating equation $E[(Y - \ell(X) - \theta(D - m(X)))(D - m(X))] = 0$ is insensitive, to first order, to small errors in $\ell$ and $m$. The error in $\hat\theta$ then
involves the *product* of the errors of $\hat\ell$ and $\hat m$, so if each converges faster than $n^{-1/4}$ (a rate
many machine learning methods achieve under conditions), $\hat\theta$ is still approximately normal around $\theta$
with the usual $\frac{1}{\sqrt n}$ rate, and has valid confidence intervals. The proofs are in the 2018 paper. The
same construction underlies the "doubly robust" estimators of epidemiology, studied by James Robins and colleagues
from the 1990s, which combine a propensity model and an outcome model and remain consistent if either is right.

### Heterogeneous effects

An average effect hides variation: a treatment may help some people and harm others. The **conditional average
treatment effect** $\tau(x) = E[Y(1) - Y(0) \mid X = x]$ describes it. Susan Athey and Guido Imbens (2016) adapted
regression trees to split on differences in treatment effect rather than in outcome, using separate samples to build
the tree and to estimate effects in its leaves ("honest" trees), and Stefan Wager and Athey (2018) built **causal
forests** from them, with proofs of asymptotic normality. "Meta-learners" (Sören Künzel and colleagues, 2019) build
$\tau(x)$ from any pair of outcome models.

Honesty requires two cautions. Machine learning does not remove the need for unconfoundedness: a perfect fit to
confounded data still gives a confounded answer. And estimates of $\tau(x)$ for individuals are much noisier than the
average, so claims that a model has found who benefits should themselves be tested, ideally in a new randomised
experiment.

## 20.5 Differential privacy

*Level: advanced (proofs complete).*

### Why "anonymised" is not enough

Publishing aggregate statistics seems safe: counts and averages, no names. But many statistics about the same people
can be combined. Irit Dinur and Kobbi Nissim (2003) proved that answering too many queries too accurately allows
reconstruction of nearly the whole private database. The US Census Bureau tested this against its own 2010
publications and reported that it could reconstruct a large share of individual records (age, sex, race, ethnicity,
census block) from the published tables, and re-identify a smaller share by linking to commercial data. Removing names
does not protect people whose combination of characteristics is rare.

### The definition

Cynthia Dwork, Frank McSherry, Kobbi Nissim and Adam Smith (2006) proposed a definition that measures privacy by
what any output can reveal about one person. Two data sets are **neighbours** if they differ in one person's record.

**Definition.** A randomised algorithm $M$ is **$\varepsilon$-differentially private** if for every pair of neighbouring
data sets $D, D'$ and every set $A$ of possible outputs,

$$
P\bigl(M(D) \in A\bigr) \le e^{\varepsilon}\,P\bigl(M(D') \in A\bigr) .
$$

In words: whether or not your record is in the data, every outcome is about equally likely (within a factor
$e^{\varepsilon}$, close to $1 + \varepsilon$ for small $\varepsilon$). So nobody looking at the output, whatever else
they know, can learn much more about you than if you had not taken part. The parameter $\varepsilon$, the **privacy
loss**, must be chosen: smaller is more private and noisier. The definition requires randomness: a deterministic
algorithm that ever gives different answers on neighbours violates it for every $\varepsilon$.

### The Laplace mechanism

To release a number $f(D)$ (a count, a sum), add noise. The **sensitivity** of $f$ is the most one person can change
it: $\Delta = \max |f(D) - f(D')|$ over neighbours. For a count, $\Delta = 1$. The **Laplace distribution** with scale
$b$ has density $\frac{1}{2b}e^{-|z|/b}$: a two-sided exponential, mean 0, standard deviation $\sqrt2\,b$.

**Theorem.** $M(D) = f(D) + Z$, with $Z$ Laplace of scale $b = \Delta/\varepsilon$, is $\varepsilon$-differentially
private.

*Proof.* The output has density $p_D(z) = \frac{1}{2b}e^{-|z - f(D)|/b}$. For neighbours $D, D'$ and every $z$,

$$
\frac{p_D(z)}{p_{D'}(z)} = \exp\left(\frac{|z - f(D')| - |z - f(D)|}{b}\right) \le \exp\left(\frac{|f(D) - f(D')|}{b}\right) \le e^{\Delta/b} = e^{\varepsilon} ,
$$

using the triangle inequality $|z - f(D')| \le |z - f(D)| + |f(D) - f(D')|$. Integrating $p_D(z) \le e^{\varepsilon}p_{D'}(z)$ over any set $A$ gives the definition. $\square$

**Worked example 3.** A table reports how many people in a small area have some condition; the true count is 42.
With $\varepsilon = 0.5$, the noise has scale $b = 1/0.5 = 2$ and standard deviation $2\sqrt2 \approx 2.8$. The
chance that the noise exceeds 4 in size is $P(|Z| > 4) = e^{-4/2} = e^{-2} \approx 0.14$. A count of 42 is published
as something like 40.7 or 44.1: useful for planning, but no longer able to reveal whether one particular person is
counted. For a count of 3,000,000 the same noise is negligible. Privacy costs accuracy most for small groups, a
tension at the centre of every application.

### Randomised response: privacy before computers

Stanley Warner (1965) invented a survey method for sensitive questions. Each respondent flips a coin in private. On
heads, they answer the question truthfully. On tails, they flip again and answer "yes" on heads, "no" on tails.

**Proposition.** Randomised response is $\ln 3$-differentially private for each respondent, and if a share $\hat y$ of
answers are "yes", then $\hat p = 2\hat y - \frac12$ is an unbiased estimate of the true share $p$.

*Proof.* A person whose true answer is yes says yes with probability $\frac12 + \frac14 = \frac34$; a person whose
true answer is no says yes with probability $\frac14$. The ratio of the probabilities of any response under the two
truths is at most $\frac{3/4}{1/4} = 3 = e^{\ln 3}$. For the estimate, $E[\hat y] = \frac34p + \frac14(1 - p) = \frac14 + \frac p2$, so $E[2\hat y - \frac12] = p$. $\square$

Each person has plausible deniability (a "yes" might be the coin), yet the population share can be estimated, at the
price of extra variance: $\operatorname{Var}(\hat p) = 4\operatorname{Var}(\hat y)$, four times the variance of $\hat y$
itself. This is the **local** model of differential privacy, where noise is added before data leave the person;
Google (the RAPPOR system, 2014) and Apple have used local privacy for collecting usage statistics.

### Composition

Each released statistic spends privacy. **Proposition (basic composition).** If $M_1$ is $\varepsilon_1$-DP and
$M_2$ is $\varepsilon_2$-DP (with independent randomness), releasing both is $(\varepsilon_1 + \varepsilon_2)$-DP.

*Proof* (for discrete outputs). $P(M_1(D) = a, M_2(D) = b) = P(M_1(D) = a)P(M_2(D) = b) \le e^{\varepsilon_1} P(M_1(D') = a)\,e^{\varepsilon_2}P(M_2(D') = b)$; sum over the outcomes in any set. $\square$

So a data holder has a **privacy-loss budget** to divide among everything it publishes, which is how the Dinur-Nissim
reconstruction is prevented: too many accurate answers would exceed the budget. Sharper accounting (advanced
composition, and variants of the definition such as **zero-concentrated differential privacy**, Mark Bun and Thomas
Steinke, 2016) lets the budget grow more slowly than the sum.

### The 2020 US Census

For the 2020 census, the US Census Bureau replaced its earlier methods of protecting published tables (such as
swapping records between households) with a system based on differential privacy, the **Disclosure Avoidance System**,
whose core is the **TopDown algorithm**. It adds carefully calibrated noise to counts at the national level, then
states, counties and smaller units down to census blocks, and then post-processes the noisy counts so that they are
consistent (non-negative whole numbers that add up across levels). The production system used zero-concentrated
differential privacy with noise drawn from a discrete version of the Gaussian distribution. Some figures were held
exact by policy, including the total population of each state, which is used to apportion seats in the House of
Representatives.

The decision was debated. Demographers and users of small-area data, including people who draw electoral districts,
raised concerns about the accuracy of counts for small places and small groups, and the Bureau revised the
algorithm and its parameters several times in response to evaluations. Supporters pointed out that the old methods
had no measurable guarantee and that the reconstruction experiment showed they were weaker than assumed. Whatever one
concludes, it was the largest use of differential privacy to date, and it made the trade-off between privacy and
accuracy explicit and public, chosen by a published budget instead of hidden in undisclosed procedures. John Abowd,
the Bureau's chief scientist at the time, and colleagues described the system in detail in the statistics literature.

## 20.6 Open questions

*Level: expert (survey).*

A field is alive when its open problems are clearly stated. Here are some at the edge of statistics, each with a
reason it matters. Not all are problems with a single answer; several are about building methods that are honest about
what they do not know.

1. **Why do huge models generalise?** Networks with far more parameters than data points fit noise perfectly yet
   predict well ([Chapter 19](19-Statistical-Learning.md)). Double descent, the implicit regularisation of gradient
   descent and the geometry of high-dimensional interpolation explain parts of it, in simplified models. A theory as
   reliable as the one for linear regression does not exist.

2. **Inference after looking at the data.** Almost every real analysis chooses its model after seeing the data,
   which invalidates classical p-values (the forking paths of 20.1). **Post-selection inference** gives valid tests for
   specific selection procedures such as the lasso; **adaptive data analysis** (Dwork and colleagues, 2015) used
   differential privacy itself to allow a held-out set to be reused safely many times. A general, practical theory for
   the way people actually analyse data is open.

3. **Anytime-valid inference.** Classical tests forbid peeking at the data as they arrive (the optional stopping of
   20.1). An **e-value** is a non-negative statistic $E$ with $E[E] \le 1$ under the null hypothesis; by Markov's
   inequality, $P(E \ge 1/\alpha) \le \alpha$, so rejecting when $E \ge 1/\alpha$ is a valid level-$\alpha$ test. Built
   as a running product of likelihood ratios (a martingale, [Probability, Chapter 15](../probability/15-Random-Walks-and-Martingales.md)),
   it stays valid under continuous monitoring by Ville's inequality. How to choose good e-values and combine them is a
   fast-moving area (see Ramdas, Grünwald, Vovk and Shafer, 2023).

4. **Causal inference beyond the ideal.** How to combine experiments with large observational data sets; how to carry
   effects from one population to another (**transportability** and external validity); how to learn causal structure
   from data with fewer assumptions; how to do causal inference when units interfere with each other (networks,
   markets, vaccines), breaking SUTVA.

5. **Statistics with machine learning inside.** Scientific data are increasingly *predicted* rather than measured:
   a protein structure from a network, a land-use class from a satellite image. Using such predictions as if they were
   data gives overconfident inference. **Prediction-powered inference** (Anastasios Angelopoulos and colleagues, 2023)
   corrects for this with a small sample of real measurements; making such corrections routine is open.

6. **Distribution shift.** Models are trained in one place and time and used in another. Guarantees like conformal
   coverage break under shift. Detecting shift, adapting to it, and stating what can still be promised is a central
   practical problem.

7. **Privacy and accuracy.** The census showed that the trade-off is real and political. Better algorithms for
   particular statistics, honest communication of noisy data to users, and privacy for complex analyses (not just
   counts) are all open.

8. **Making the replication repairs work.** Whether preregistration, registered reports and data sharing raise the
   replication rate as much as hoped is itself an empirical question being studied with the methods of this book.

## A short history

The 2005 essay by Ioannidis and the 2011 "false-positive psychology" paper sharpened long-standing warnings; Jacob
Cohen had shown in 1962 that typical psychology studies had low power, and Theodore Sterling had noted in 1959 that
journals published almost only significant results. The large replication projects followed in 2011 to 2018. Conformal
prediction grew from Vovk, Gammerman and Shafer's work on algorithmic learning in the late 1990s, summarised in their
2005 book, and reached mainstream statistics through Jing Lei, Larry Wasserman and colleagues in the 2010s. Double
machine learning appeared in 2016 to 2018, building on semiparametric theory going back to Robinson (1988) and to
Robins's doubly robust estimators. Differential privacy was defined in 2006, three years after Dinur and Nissim's
reconstruction results; the Census Bureau described its adoption for the 2020 census in 2018. Most of the
open questions of 20.6 were posed in their present form within the last fifteen years.

## Check yourself

??? question "1. A field tests hypotheses of which 20% are true, with power 0.5 and $\alpha = 0.05$. What share of its significant findings are real?"

    $\text{PPV} = \frac{0.5 \times 0.2}{0.5 \times 0.2 + 0.05 \times 0.8} = \frac{0.10}{0.10 + 0.04} = \frac{0.10} {0.14} \approx 0.71$. About 29% of its significant findings are false.

??? question "2. In the same field, how much would PPV improve by raising power to 0.9? By lowering $\alpha$ to 0.005 at power 0.5?"

    Power 0.9: $\frac{0.18}{0.18 + 0.04} = \frac{0.18}{0.22} \approx 0.82$. $\alpha = 0.005$: $\frac{0.10}{0.10 + 0.004} = \frac{0.10}{0.104} \approx 0.96$. A stricter threshold helps PPV more here, but at fixed sample size it also
    lowers power, so in practice the two go together.

??? question "3. Explain in two sentences why significant results from low-powered studies overestimate effects, even when the effects are real."

    When power is low, the estimate reaches significance only when random error happens to push it well above the true
    value. Selecting the significant estimates therefore selects overestimates (a type M error), and the average
    published effect is too large.

??? question "4. An analyst plans one test but, if it fails, will try a second, independent test of a different outcome. Under the null, what is the chance of at least one $p < 0.05$?"

    $1 - 0.95^2 = 0.0975$, nearly double. With the correlated outcomes of Worked example 1 the inflation is smaller
    for each extra test, but optional stopping and a third test pushed it to about 15%.

??? question "5. What does a registered report guarantee that a preregistration alone does not?"

    Publication regardless of the result, decided on the question and methods before data exist. That removes
    publication bias for that study. A preregistration alone fixes the analysis, but the study might still go
    unpublished if the result is null.

??? question "6. With $n = 99$ calibration points and $\alpha = 0.05$, which order statistic of the scores is $\hat q$? What are the bounds on coverage?"

    $k = \lceil 100 \times 0.95 \rceil = 95$, the 95th smallest score. Coverage is at least 0.95 and (without ties)
    exactly $\frac{95}{100} = 0.95$, below $0.95 + \frac{1}{100} = 0.96$.

??? question "7. With $n = 9$ calibration points and $\alpha = 0.05$, what happens, and why does this make sense?"

    $k = \lceil 10 \times 0.95 \rceil = 10 > 9$, so $\hat q = \infty$ and the interval is the whole line. With 9
    calibration points the new score is the largest of 10 with probability $\frac{1}{10} > 0.05$, so no finite
    threshold from these data can promise 95% coverage.

??? question "8. Conformal intervals have guaranteed 90% coverage. A doctor says: so for my patient, there is a 90% chance the truth is inside. What is wrong?"

    The guarantee is marginal: averaged over patients drawn like the calibration data. For a particular kind of
    patient (say, older patients for whom the model is worse), coverage can be well below 90% while others are above.
    Also, if the patient comes from a different population than the calibration data, even the average guarantee
    may fail.

??? question "9. In the partially linear model, show that redefining the treatment as $D + h(X)$, for any function $h$, leaves the treatment residual and $\theta$ unchanged. Then say why cross-fitting is needed in practice."

    Residualising removes $E[D \mid X]$, so replacing $D$ by $D + h(X)$ changes $m(X)$ to $m(X) + h(X)$ and leaves
    $D - m(X)$ exactly the same; $\theta$ is defined from these residuals, so it is unchanged. In practice $m$ and
    $\ell$ are estimated, and if a flexible model is fitted and evaluated on the same unit it partly memorises that
    unit's noise, making the residuals too small and correlated with the noise; cross-fitting computes each unit's
    residual from a model that never saw it.

??? question "10. A count with sensitivity 1 is released with Laplace noise at $\varepsilon = 0.1$. What is the noise's standard deviation? Is the count useful for a town of 50 people? For a state of 5 million?"

    $b = 1/0.1 = 10$, standard deviation $10\sqrt2 \approx 14$. For a town of 50, an error of about 14 is
    large (over a quarter of the count). For 5 million it is negligible. Strong privacy is cheap for big groups and
    expensive for small ones.

??? question "11. In randomised response, the answer 'yes' came from 40% of 1,000 respondents. Estimate the true share and its standard error."

    $\hat p = 2(0.40) - 0.5 = 0.30$. $\operatorname{Var}(\hat y) \approx \frac{0.4 \times 0.6}{1000} = 0.00024$, so
    $\operatorname{SE}(\hat p) = 2\sqrt{0.00024} \approx 0.031$. A direct survey with honest answers would have had
    $\operatorname{SE} \approx \sqrt{0.3 \times 0.7/1000} \approx 0.014$: privacy cost more than doubles the error.

??? question "12. A data holder answers 20 counting queries, each with the Laplace mechanism at $\varepsilon = 0.05$. What privacy guarantee does basic composition give? Why can't it answer unlimited queries this way?"

    $20 \times 0.05 = 1$, so the whole release is $1$-differentially private. Each further query adds to the total,
    and as the total grows the guarantee becomes meaningless, which is exactly what Dinur and Nissim's reconstruction
    theorem says must happen if too many accurate answers are released.

## What you learned

- Large replication projects found that many published findings, especially in psychology and some social and
  biomedical sciences, did not replicate, and effects shrank by about half; low power, low prior plausibility and
  selective publication explain this by Bayes' theorem and the winner's curse.
- Flexible analysis choices inflate false positives far above 5%; preregistration, registered reports, open data and
  larger studies are the repairs.
- Split conformal prediction wraps any model in intervals whose coverage is at least $1 - \alpha$, proved from
  exchangeability alone; the guarantee is marginal and needs no distribution shift.
- Causal machine learning residualises outcome and treatment with flexible models, cross-fits, and relies on Neyman
  orthogonality; it does not remove the need for unconfoundedness.
- Differential privacy bounds what any output reveals about one person; the Laplace mechanism, randomised response
  and composition are its basic tools, and the 2020 US Census used it at scale, with a debated accuracy cost.
- The open questions run from the theory of huge models to valid inference after data exploration and under shift.

**The end of the road:** this is the last chapter of the Statistics book. Return to the
[Statistics book's contents](index.md) to revisit any chapter, or continue in the
[Probability book](../probability/index.md), whose own frontier chapter,
[Where probability goes](../probability/20-Where-Probability-Goes.md), meets this one in random matrices and
concentration.

## Further reading

- Open Science Collaboration, "Estimating the reproducibility of psychological science", *Science* 349, 2015.
- C. F. Camerer et al., "Evaluating the replicability of social science experiments in *Nature* and *Science*
  between 2010 and 2015", *Nature Human Behaviour* 2, 2018.
- C. G. Begley and L. M. Ellis, "Raise standards for preclinical cancer research", *Nature* 483, 2012.
- J. P. A. Ioannidis, "Why most published research findings are false", *PLoS Medicine* 2, 2005.
- A. Gelman and J. Carlin, "Beyond power calculations: assessing type S (sign) and type M (magnitude) errors",
  *Perspectives on Psychological Science* 9, 2014.
- J. P. Simmons, L. D. Nelson and U. Simonsohn, "False-positive psychology", *Psychological Science* 22, 2011.
- R. M. Kaplan and V. L. Irvin, "Likelihood of null effects of large NHLBI clinical trials has increased over time",
  *PLoS ONE* 10, 2015.
- D. J. Benjamin et al., "Redefine statistical significance", *Nature Human Behaviour* 2, 2018.
- V. Vovk, A. Gammerman and G. Shafer, *Algorithmic Learning in a Random World*, 2005; J. Lei, M. G'Sell, A. Rinaldo,
  R. J. Tibshirani and L. Wasserman, "Distribution-free predictive inference for regression", *Journal of the American
  Statistical Association* 113, 2018; A. N. Angelopoulos and S. Bates, "A gentle introduction to conformal prediction
  and distribution-free uncertainty quantification", 2021.
- V. Chernozhukov et al., "Double/debiased machine learning for treatment and structural parameters", *The
  Econometrics Journal* 21, 2018; S. Wager and S. Athey, "Estimation and inference of heterogeneous treatment effects
  using random forests", *Journal of the American Statistical Association* 113, 2018.
- C. Dwork, F. McSherry, K. Nissim and A. Smith, "Calibrating noise to sensitivity in private data analysis", Theory
  of Cryptography Conference, 2006; C. Dwork and A. Roth, *The Algorithmic Foundations of Differential Privacy*, 2014.
- S. L. Warner, "Randomized response: a survey technique for eliminating evasive answer bias", *Journal of the
  American Statistical Association* 60, 1965.
- J. M. Abowd et al., "The 2020 Census Disclosure Avoidance System TopDown Algorithm", *Harvard Data Science Review*,
  2022.
- A. Ramdas, P. Grünwald, V. Vovk and G. Shafer, "Game-theoretic statistics and safe anytime-valid inference",
  *Statistical Science* 38, 2023.
- On this site: the [statistics in the news lesson](../../topics/statistics/level-8/06-statistics-news.md), the
  [hypothesis tests lesson](../../topics/statistics/level-8/03-hypothesis-tests.md), the
  [Probability book](../probability/index.md) (martingales in
  [Chapter 15](../probability/15-Random-Walks-and-Martingales.md), information in
  [Chapter 18](../probability/18-Information-and-Entropy.md)), and the cryptography site's
  [book](https://cryptography.akadian.ca/book/), where randomness and privacy meet secrecy.
