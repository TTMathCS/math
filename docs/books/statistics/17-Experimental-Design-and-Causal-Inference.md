# 17. Experimental design and causal inference

*Does the new fertiliser make plants grow? Does a job-training programme raise wages? Does a drug save lives? These
are questions about what would happen if we did something, not about what we happen to see, and the difference is the
whole subject of this chapter. You will design experiments that test several factors at once and remove known
nuisances by blocking, write down the "potential outcomes" that define a causal effect, prove that randomisation makes
the simple difference of means an unbiased estimate of it, and then meet the tools people use when they cannot
randomise: matching, propensity scores, instrumental variables, difference in differences and causal diagrams. The
chapter ends with the work that won the 2021 economics prize, told honestly.*

!!! abstract "In this chapter"
    **You will learn:**

    - how factorial designs estimate main effects and interactions from the same runs, and why blocking shrinks the error (proof)
    - the potential outcomes language: individual effects, the average treatment effect, and the "fundamental problem" that we never see both outcomes
    - why randomisation makes the difference of means unbiased (proof), its exact variance, and Fisher's randomisation test, worked in full
    - the ideas behind matching, propensity scores (the balancing property and inverse weighting, with proofs), instrumental variables (the Wald estimator and the complier effect, with proof) and difference in differences
    - causal diagrams: chains, forks and colliders, the backdoor criterion and the adjustment formula, applied to a real data set
    - what Card, Angrist and Imbens were honoured for in 2021

    **You need:** [Chapter 5](05-Sampling-and-Experiments.md) (randomised experiments and blinding),
    [Chapter 4](04-Relationships-and-Correlation.md) (Simpson's paradox), [Chapter 9](09-Hypothesis-Tests.md)
    (tests and p-values), [Chapter 11](11-Linear-Regression.md) and [Chapter 12](12-Multiple-Regression.md)
    (regression), and conditional probability and expectation from the
    [Probability book](../probability/03-Conditional-Probability-and-Independence.md). For a gentler first look at
    experiments versus observational studies, see the
    [experiments and studies lesson](../../topics/statistics/level-8/04-experiments-studies.md).

    **Levels:** 17.1 is intermediate; 17.2 and 17.3 are advanced; 17.4 and 17.5 are expert in content but explained
    from the ground up; 17.6 is history for everyone.

## 17.1 Factorial designs and blocking

*Level: intermediate.*

### One factor at a time is wasteful

Suppose a greenhouse team wants to know whether more light and a richer nutrient mix raise the yield of a tomato
plant. The obvious plan is to change one thing at a time: some plots at the usual settings, some with more light only,
some with more nutrient only. This is called **one factor at a time** (OFAT), and Ronald Fisher spent much of his time
at the Rothamsted agricultural station in the 1920s and 1930s explaining why it is a poor plan.

A **factor** is something we set (light, nutrient); each factor has **levels** (low, high). A **factorial design**
runs every combination of levels. With two factors at two levels each, that is $2 \times 2 = 4$ combinations, called
**cells** or **treatment combinations**; a design with $k$ two-level factors has $2^k$ cells, and is called a
$2^k$ design.

**Worked example 1 (made-up data).** Eight plots, two in each cell, give these yields in kilograms:

| | nutrient low | nutrient high |
|---|---|---|
| light low | 10, 12 (mean 11) | 13, 13 (mean 13) |
| light high | 15, 17 (mean 16) | 22, 24 (mean 23) |

The **main effect** of a factor is the average yield at its high level minus the average at its low level, averaging
over the other factor:

- Light: $\frac{16 + 23}{2} - \frac{11 + 13}{2} = 19.5 - 12 = 7.5$ kg.
- Nutrient: $\frac{13 + 23}{2} - \frac{11 + 16}{2} = 18 - 13.5 = 4.5$ kg.

The **interaction** asks whether the effect of one factor depends on the level of the other. Light adds
$16 - 11 = 5$ kg when nutrient is low and $23 - 13 = 10$ kg when it is high. The interaction is defined as half the
difference, $\frac{10 - 5}{2} = 2.5$ kg. (Check: swapping the roles gives the same number. Nutrient adds $13 - 11 = 2$
at low light and $23 - 16 = 7$ at high light, and $\frac{7 - 2}{2} = 2.5$.) Here the two factors help each other:
light does more when the plant has the food to use it.

OFAT could never have found that interaction, because it never runs light-high with nutrient-high. And even when there
is no interaction, the factorial design is more efficient. Each main effect above is a difference of two averages of
four plots each. If each plot has independent error with variance $\sigma^2$, then

$$
\operatorname{Var}(\text{main effect}) = \frac{\sigma^2}{4} + \frac{\sigma^2}{4} = \frac{\sigma^2}{2} .
$$

Every one of the eight plots is used to estimate every effect. An OFAT plan with nine plots, three at baseline, three
with light raised and three with nutrient raised, estimates each effect as a difference of two averages of three, with
variance $\frac{2\sigma^2}{3}$: more plots, worse precision, and no information about the interaction. With $k$
factors the advantage grows, because a $2^k$ design uses every run for all $k$ main effects.

**How sure are we?** Each cell has two plots, so the spread inside cells estimates $\sigma^2$. The four cell sample
variances are $2, 2, 0, 2$ (for example, 10 and 12 have mean 11 and variance $\frac{1 + 1}{1} = 2$), and their
average, the **pooled variance**, is $s^2 = 1.5$ with $4$ degrees of freedom (one from each cell). The standard error
of each effect is $\sqrt{s^2 / 2} = \sqrt{0.75} \approx 0.87$ kg, so light ($7.5 / 0.87 \approx 8.7$ standard errors)
and nutrient ($\approx 5.2$) are clearly real, and the interaction ($\approx 2.9$) is likely real too, with a two-sided
$t$ p-value near 0.045 on 4 degrees of freedom. (The interaction contrast also uses all eight plots with weights
$\pm\frac14$, so its standard error is the same.)

With many factors, a full $2^k$ design grows quickly ($2^{10} = 1024$ runs). **Fractional factorial designs** run a
carefully chosen half, quarter or smaller fraction of the cells, giving up information about high-order interactions
(which are usually small) to keep all the main effects. Their construction uses the algebra of the group
$\{0,1\}^k$ under addition mod 2, and is a pleasant meeting point with coding theory.

### Blocking

Plots differ: one corner of a field is wetter, one bench of a greenhouse gets more sun. If these nuisance differences
are big, they swamp the treatment effect. The answer is **blocking**: group the units into **blocks** that are alike
(plots on the same bench, measurements on the same day, the two eyes of one patient), and compare treatments
*within* each block. The slogan, often attributed to George Box, is "block what you can, randomise what you cannot".

Here is why it works. Suppose we compare treatments A and B, and each unit's response is

$$
Y = \mu + \tau_{\text{trt}} + b + \varepsilon ,
$$

where $\tau_{\text{trt}}$ is the treatment effect, $b$ is the unit's block effect (random, mean 0, variance
$\sigma_b^2$) and $\varepsilon$ is independent noise (mean 0, variance $\sigma^2$).

**Proposition.** With $r$ blocks of two units each, one unit given A and one given B in each block, the estimate
$\bar D$ = average over blocks of $(Y_A - Y_B)$ has variance $\frac{2\sigma^2}{r}$. If instead the $2r$ units are
drawn from different blocks and split $r$ and $r$ at random, the difference of group means has variance
$\frac{2(\sigma^2 + \sigma_b^2)}{r}$.

*Proof.* In block $j$, $Y_A - Y_B = (\tau_A - \tau_B) + (b_j - b_j) + (\varepsilon_{Aj} - \varepsilon_{Bj})$. The block
effect cancels. The remaining noise has variance $2\sigma^2$, and averaging $r$ independent blocks divides by $r$.
Without blocks, each unit carries its own independent $b$, so each response has variance $\sigma^2 + \sigma_b^2$; each
group mean has variance $\frac{\sigma^2 + \sigma_b^2}{r}$ and the difference has twice that. $\square$

When $\sigma_b^2$ is large compared with $\sigma^2$, blocking is a large gain. The **paired $t$ test** of
[Chapter 9](09-Hypothesis-Tests.md) is exactly the analysis of this design. With more treatments the same idea gives
the **randomised complete block design**: each block contains every treatment once, in random order, and the
analysis is a two-way ANOVA (a regression with block dummies and treatment dummies, as in
[Chapter 12](12-Multiple-Regression.md)). A **Latin square** blocks two nuisances at once: with 4 treatments, 4 rows
(say, days) and 4 columns (say, machines), each treatment appears once in each row and once in each column.

Note the order of words in the slogan. Inside each block, which unit gets which treatment is still decided at random.
Blocking removes the nuisances you know about; randomisation protects you against the ones you do not, as the next
two sections prove.

## 17.2 Potential outcomes

*Level: advanced.*

### What does "the effect" mean?

"The drug lowered her blood pressure by 10 points." What is being claimed? Not just that her pressure fell: it might
have fallen anyway. The claim compares two worlds: the one where she took the drug and the one where she did not.

The **potential outcomes** framework writes this down. For each unit $i$ (a person, a plot, a school) and a binary
treatment, there are two numbers:

- $Y_i(1)$, the outcome unit $i$ *would* have if treated;
- $Y_i(0)$, the outcome it *would* have if not treated.

The **individual treatment effect** is $\tau_i = Y_i(1) - Y_i(0)$. The **average treatment effect** over a population
of $N$ units is

$$
\text{ATE} = \frac{1}{N}\sum_{i=1}^{N} \bigl(Y_i(1) - Y_i(0)\bigr) ,
$$

and the **average treatment effect on the treated** (ATT) is the same average taken only over the units that actually
got the treatment.

Let $T_i = 1$ if unit $i$ is treated and $0$ if not. What we observe is

$$
Y_i = T_i\,Y_i(1) + (1 - T_i)\,Y_i(0) ,
$$

one of the two potential outcomes, never both. Paul Holland (1986) called this the **fundamental problem of causal
inference**: an individual causal effect is never observed. All of causal inference is about learning averages of
$\tau_i$ in spite of it.

The framework hides one assumption, usually called **SUTVA** (the stable unit treatment value assumption, Rubin's
name): unit $i$'s outcome depends only on its own treatment, not on anyone else's, and there is only one version of
"treated". Vaccines break it (my outcome depends on whether *you* are vaccinated), and so do classroom experiments
where treated and control pupils talk to each other.

### A god's-eye table

**Worked example 2 (made-up data).** Eight units, with both potential outcomes shown, which in real life nobody can
see:

| unit | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| $Y(0)$ | 5 | 6 | 8 | 4 | 7 | 3 | 9 | 6 |
| $Y(1)$ | 7 | 6 | 11 | 6 | 8 | 6 | 10 | 10 |
| $\tau$ | 2 | 0 | 3 | 2 | 1 | 3 | 1 | 4 |

The effects add to 16, so the ATE is $16 / 8 = 2$.

Now suppose the units choose for themselves, and the four that would do well anyway (units 3, 5, 7, 8, with
$Y(0) = 8, 7, 9, 6$) choose treatment. We see $Y(1)$ for them, mean $\frac{11 + 8 + 10 + 10}{4} = 9.75$, and $Y(0)$ for
the rest, mean $\frac{5 + 6 + 4 + 3}{4} = 4.5$. The naive comparison says the treatment is worth $5.25$, more than
two and a half times the truth.

### The selection bias identity

**Proposition.** For any assignment,

$$
\underbrace{E[Y \mid T=1] - E[Y \mid T=0]}_{\text{naive difference}}
= \underbrace{E[Y(1) - Y(0) \mid T=1]}_{\text{ATT}}
+ \underbrace{E[Y(0) \mid T=1] - E[Y(0) \mid T=0]}_{\text{selection bias}} .
$$

Here the expectations are averages over the units in each group.

*Proof.* Among treated units $Y = Y(1)$, and among controls $Y = Y(0)$. Add and subtract $E[Y(0) \mid T = 1]$:

$$
E[Y(1) \mid T=1] - E[Y(0) \mid T=0] = \bigl(E[Y(1) \mid T=1] - E[Y(0) \mid T=1]\bigr) + \bigl(E[Y(0) \mid T=1] - E[Y(0) \mid T=0]\bigr). \quad \square
$$

**Check** on the example: the ATT is the mean of $\tau$ over units 3, 5, 7, 8, $\frac{3 + 1 + 1 + 4}{4} = 2.25$. The
selection bias is $\frac{8 + 7 + 9 + 6}{4} - 4.5 = 7.5 - 4.5 = 3$. And $2.25 + 3 = 5.25$, the naive difference.

The selection bias term compares the *untreated* outcomes of the two groups: how different were these people
before the treatment did anything? Every famous failure of observational data (hormone replacement therapy, vitamin
supplements, the "healthy worker" effect) is a large selection bias term. The task of design is to make it zero.

## 17.3 Randomisation as the gold standard

*Level: advanced.*

### Unbiasedness, proved

In a **completely randomised experiment** with $N$ units, we choose $n_1$ of them uniformly at random to treat (every
subset of size $n_1$ equally likely), and the other $n_0 = N - n_1$ are controls. The potential outcomes are fixed
numbers; the only randomness is in who gets treated. This is the **design-based** (or **randomisation-based**) view,
due to Jerzy Neyman (1923).

**Theorem (Neyman).** The difference of observed means

$$
\hat\tau = \frac{1}{n_1}\sum_{i : T_i = 1} Y_i - \frac{1}{n_0}\sum_{i : T_i = 0} Y_i
$$

satisfies $E[\hat\tau] = \text{ATE}$.

*Proof.* Write $\hat\tau = \frac{1}{n_1}\sum_i T_i Y_i(1) - \frac{1}{n_0}\sum_i (1 - T_i) Y_i(0)$, summing over all
$N$ units. By symmetry each unit is equally likely to be in the treated set, so $P(T_i = 1) = \frac{n_1}{N}$ and
$E[T_i] = \frac{n_1}{N}$. Since $Y_i(1)$ and $Y_i(0)$ are constants,

$$
E[\hat\tau] = \frac{1}{n_1}\sum_i \frac{n_1}{N} Y_i(1) - \frac{1}{n_0}\sum_i \frac{n_0}{N} Y_i(0)
= \frac{1}{N}\sum_i \bigl(Y_i(1) - Y_i(0)\bigr) = \text{ATE}. \quad \square
$$

Look at what the proof did *not* need: no normal distribution, no linear model, no assumption that the units are a
sample from anything. It needed only that the coin flips deciding treatment were under our control. In the language
of 17.2, randomisation makes the treated and control groups the same in distribution, so the selection bias is zero
*on average over randomisations*, for every characteristic of the units, measured or not, known or not. No other
method can say "or not". That is why randomised experiments are called the gold standard.

### Its variance

**Theorem (Neyman, stated).** Let $S_1^2$ and $S_0^2$ be the variances (with divisor $N - 1$) of the $N$ numbers
$Y_i(1)$ and of the $N$ numbers $Y_i(0)$, and $S_\tau^2$ that of the $N$ effects $\tau_i$. Then

$$
\operatorname{Var}(\hat\tau) = \frac{S_1^2}{n_1} + \frac{S_0^2}{n_0} - \frac{S_\tau^2}{N} .
$$

The proof is a computation with the covariances of sampling without replacement ($\operatorname{Cov}(T_i, T_j)$ for
$i \ne j$ is $-\frac{n_1 n_0}{N^2(N-1)}$); it takes a page and is in Imbens and Rubin (2015), Chapter 6. The last term
involves $S_\tau^2$, which needs both potential outcomes of each unit, so it can never be estimated. Dropping it gives
the usual estimate $\frac{s_1^2}{n_1} + \frac{s_0^2}{n_0}$ (sample variances in each group), which is therefore
**conservative**: on average it is too large, never too small. When the effect is the same for everyone,
$S_\tau^2 = 0$ and it is exact on average.

**Worked example 3.** Return to the eight units, and randomise: choose 4 of the 8 at random to treat. There are
$\binom{8}{4} = 70$ possible assignments. Enumerating all 70 and averaging $\hat\tau$ gives exactly $2$, the ATE, as the
theorem says. The potential outcomes give $S_1^2 = \frac{30}{7}$, $S_0^2 = 4$, $S_\tau^2 = \frac{12}{7}$, so

$$
\operatorname{Var}(\hat\tau) = \frac{30/7}{4} + \frac{4}{4} - \frac{12/7}{8} = \frac{15}{14} + 1 - \frac{3}{14} = \frac{13}{7} \approx 1.86 ,
$$

and the variance of the 70 values of $\hat\tau$, computed directly, is also $\frac{13}{7}$. The standard error, about
1.36, is large compared with the ATE of 2: eight units is a small experiment.

### Fisher's randomisation test

Neyman asked about the *average* effect. Fisher (in *The Design of Experiments*, 1935) asked a sharper question:
is there any effect at all? His **sharp null hypothesis** says $Y_i(1) = Y_i(0)$ for every unit. Under it, the observed
outcome of each unit would have been the same whatever assignment was drawn, so we can compute what $\hat\tau$ would
have been under every possible assignment, and see where the observed one falls. You met this as the lady tasting tea
in [Chapter 5](05-Sampling-and-Experiments.md) and as the permutation test of
[Chapter 15](15-Nonparametric-Methods.md); here it is in the potential outcomes language.

**Worked example 4.** Suppose the draw treated units 1, 3, 6, 8. We observe

| unit | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| treated? | yes | no | yes | no | no | yes | no | yes |
| observed $Y$ | 7 | 6 | 11 | 4 | 7 | 6 | 9 | 10 |

The treated mean is $\frac{7 + 11 + 6 + 10}{4} = 8.5$, the control mean $\frac{6 + 4 + 7 + 9}{4} = 6.5$, and
$\hat\tau = 2$. Under the sharp null the eight observed numbers are fixed; we recompute the difference for all 70 ways
of choosing 4 "treated" units. Exactly 11 of the 70 give a difference of 2 or more, so the one-sided p-value is
$\frac{11}{70} \approx 0.157$; 22 give an absolute difference of 2 or more, so the two-sided p-value is
$\frac{22}{70} \approx 0.31$. The data do not rule out "no effect at all", even though the true ATE is 2: with eight
units the test has little power.

The p-value is exact, with no approximation and no model: its validity comes from the randomisation we performed.
This is Fisher's deepest point about design: **the physical act of randomisation is what justifies the test.**

### Try it in Python

```python
from itertools import combinations
Y = [7, 6, 11, 4, 7, 6, 9, 10]           # observed outcomes
def diff(T):
    C = [i for i in range(8) if i not in T]
    return sum(Y[i] for i in T)/4 - sum(Y[i] for i in C)/4
obs = diff((0, 2, 5, 7))                  # units 1, 3, 6, 8 treated
null = [diff(T) for T in combinations(range(8), 4)]
print(obs, sum(d >= obs for d in null), len(null))   # 2.0 11 70
```

### Why not always randomise?

Because often we cannot, or must not. We cannot randomise people to smoke, to be born in a recession, to attend a
selective school, or to live under a minimum wage law. Experiments can be expensive, slow, or too small to see rare
harms, and the people in a trial may differ from the people a policy will reach (the problem of **external
validity**). And some randomised experiments would be unethical. The rest of the chapter is about learning causes
from data we did not design, and about the extra assumptions that requires.

## 17.4 Observational methods

*Level: expert (ideas with proofs of the key facts).*

In an **observational study** the treatment was chosen by people, nature or history, not by us. Each method below
replaces "we randomised" with an assumption that, if true, makes the selection bias of 17.2 vanish. None of the
assumptions can be fully checked from the data, which is why they must be argued for in words.

### Matching on observed covariates

Let $X$ be the measured characteristics of a unit before treatment (age, income, severity of illness), called
**covariates**. The key assumption is

**Unconfoundedness** (also called "no unmeasured confounding", "ignorability" or "selection on observables"):
given $X$, treatment is as good as random, that is, $(Y(0), Y(1))$ is independent of $T$ given $X$.

Under it, within each value of $X$ the comparison of treated and control is a little randomised experiment, and

$$
\text{ATE} = \sum_x \bigl(E[Y \mid T = 1, X = x] - E[Y \mid T = 0, X = x]\bigr)\,P(X = x) ,
$$

because $E[Y \mid T = 1, X = x] = E[Y(1) \mid T = 1, X = x] = E[Y(1) \mid X = x]$, the second step using
unconfoundedness; similarly for $T = 0$; then average over $x$. This is **stratification**, or **subclassification**.
We also need **overlap**: every value of $X$ must have some chance of both treatments, $0 < P(T = 1 \mid X = x) < 1$,
or the difference inside that stratum is undefined.

**Matching** does the same thing one unit at a time: for each treated unit, find a control with the same (or a very
close) $X$, and compare. With many covariates, exact matches run out quickly (the curse of dimensionality of
[Chapter 18](18-High-Dimensional-Statistics.md)), which is where propensity scores help.

### Propensity scores

The **propensity score** is $e(x) = P(T = 1 \mid X = x)$, the probability of being treated given the covariates. Paul
Rosenbaum and Donald Rubin (1983) proved that this single number does the work of all of $X$.

**Theorem (balancing property).** $X$ and $T$ are independent given $e(X)$. Consequently, if treatment is
unconfounded given $X$, it is also unconfounded given $e(X)$.

*Proof of the first claim* (for discrete $X$). We show $P(T = 1 \mid X, e(X)) = P(T = 1 \mid e(X))$. The left side is
$P(T = 1 \mid X) = e(X)$, because $e(X)$ is a function of $X$ and adds nothing. For the right side, by the tower rule
(conditioning first on $X$ and then averaging),

$$
P(T = 1 \mid e(X)) = E\bigl[P(T = 1 \mid X) \bigm| e(X)\bigr] = E[e(X) \mid e(X)] = e(X) .
$$

The two sides agree, so given $e(X)$, knowing $X$ does not change the chance of treatment: $T$ and $X$ are
conditionally independent. The second claim follows by the same calculation with $(Y(0), Y(1))$ added to the
conditioning; see Rosenbaum and Rubin (1983) or Imbens and Rubin (2015), Chapter 12. $\square$

So one can match or stratify on a single number, the estimated propensity score, instead of on twenty covariates.
After matching, the covariates should be **balanced** (similar averages in the two groups), and checking that balance
is a required part of any honest analysis.

**Inverse probability weighting.** A second use of $e(X)$ reweights the data. Treated units that were unlikely to be
treated are rare, so each one stands for many similar units; give it weight $\frac{1}{e(X)}$.

**Proposition.** Under unconfoundedness and overlap, $E\left[\frac{T Y}{e(X)}\right] = E[Y(1)]$ and
$E\left[\frac{(1 - T) Y}{1 - e(X)}\right] = E[Y(0)]$.

*Proof.* $T Y = T Y(1)$, since $Y = Y(1)$ when $T = 1$. Condition on $X$:

$$
E\left[\frac{T\,Y(1)}{e(X)} \Bigm| X\right] = \frac{E[T \mid X]\,E[Y(1) \mid X]}{e(X)} = \frac{e(X)\,E[Y(1) \mid X]}{e(X)} = E[Y(1) \mid X] ,
$$

where the first step uses that $T$ and $Y(1)$ are independent given $X$. Averaging over $X$ gives $E[Y(1)]$. The
control case is the same. $\square$

### A real example: kidney stones

A 1986 study by C. R. Charig and colleagues in the *British Medical Journal* compared two treatments for kidney
stones: open surgery (call it A) and a less invasive one through a small puncture (percutaneous nephrolithotomy, B),
350 patients each. It is a standard example of Simpson's paradox ([Chapter 4](04-Relationships-and-Correlation.md)):

| | A: successes / patients | B: successes / patients |
|---|---|---|
| small stones | 81 / 87 (93%) | 234 / 270 (87%) |
| large stones | 192 / 263 (73%) | 55 / 80 (69%) |
| all | 273 / 350 (78%) | 289 / 350 (83%) |

A wins in each stratum but loses overall, because doctors gave the harder cases (large stones) to A. Stone size is a
**confounder**: it affects both the choice of treatment and the outcome. Stratifying on it (if it were the only
confounder, which is a strong assumption for a real hospital) gives, with $P(\text{small}) = \frac{357}{700} = 0.51$:

$$
\begin{aligned}
\text{A:}\quad & 0.931 \times 0.51 + 0.730 \times 0.49 \approx 0.833 , \\
\text{B:}\quad & 0.867 \times 0.51 + 0.688 \times 0.49 \approx 0.779 .
\end{aligned}
$$

So the adjusted success rates favour A by about 5 percentage points. **Check** with inverse weighting: the estimated
propensity of A is $\frac{87}{357} \approx 0.244$ for small stones and $\frac{263}{343} \approx 0.767$ for large ones.
Weighting each A success by the reciprocal, $\frac{1}{700}\left(\frac{81}{0.244} + \frac{192}{0.767}\right) \approx 0.833$, the same number. (With a discrete covariate and estimated propensities, the two methods always agree
exactly; with continuous covariates they differ, and each has its own pitfalls: weighting is unstable when some $e(x)$
is near 0 or 1.)

### Instrumental variables

Unconfoundedness fails when there are confounders we did not measure. Sometimes nature offers a substitute for
randomisation: an **instrument** $Z$, a variable that

1. is as good as randomly assigned (independent of the potential outcomes),
2. changes the chance of treatment (**relevance**), and
3. affects the outcome only through the treatment (the **exclusion restriction**).

The classic example is an **encouragement design**: a randomly chosen half of a population gets a letter encouraging
a flu jab. Not everyone encouraged gets the jab, and some unencouraged people get it anyway, but the letter was
random.

**Worked example 5 (made-up numbers).** Among those encouraged ($Z = 1$), 60% were treated and the mean outcome was
12.0; among the others ($Z = 0$), 20% were treated and the mean outcome was 10.0. The **Wald estimator** divides the
effect of $Z$ on the outcome by its effect on the treatment:

$$
\hat\beta_{\text{IV}} = \frac{E[Y \mid Z=1] - E[Y \mid Z=0]}{E[T \mid Z=1] - E[T \mid Z=0]} = \frac{12.0 - 10.0}{0.6 - 0.2} = 5 .
$$

What does 5 measure? Guido Imbens and Joshua Angrist (1994) answered this. Each person has two *potential
treatments*, $T(1)$ and $T(0)$, the treatment they would take if encouraged or not. There are four kinds of people:
**compliers** ($T(1) = 1, T(0) = 0$), **always-takers** (1, 1), **never-takers** (0, 0) and **defiers** (0, 1).
Assume **monotonicity**: there are no defiers (the letter never puts anyone off).

**Theorem (local average treatment effect).** Under assumptions 1 to 3 and monotonicity, the Wald ratio equals
$E[Y(1) - Y(0) \mid \text{complier}]$.

*Proof.* By the exclusion restriction a person's outcome depends on $Z$ only through $T$. For always-takers and
never-takers, $T$ does not change with $Z$, so neither does $Y$; their contribution to
$E[Y \mid Z=1] - E[Y \mid Z=0]$ is zero (using assumption 1, the mix of types is the same in both arms). For compliers
the outcome is $Y(1)$ when $Z = 1$ and $Y(0)$ when $Z = 0$. There are no defiers. So

$$
E[Y \mid Z=1] - E[Y \mid Z=0] = P(\text{complier})\,E[Y(1) - Y(0) \mid \text{complier}] .
$$

Similarly $E[T \mid Z=1] - E[T \mid Z=0]$ is the share whose treatment changes with $Z$, which is
$P(\text{complier})$. Divide. $\square$

In the example, 40% are compliers and their average effect is 5. Note the word *local*: we learn nothing about
always-takers and never-takers, who may respond quite differently. The exclusion restriction is the weak point and
must be argued from knowledge of the problem; a "weak instrument" (small denominator) also makes the estimate very
unstable.

### Difference in differences

Sometimes a policy changes in one place and not in a similar place nearby. Compare the change over time in the
treated place with the change over time in the untreated one.

**Worked example 6 (made-up numbers).** Average weekly hours worked per shop:

| | before | after | change |
|---|---|---|---|
| region with the new rule | 20.0 | 21.0 | +1.0 |
| neighbouring region | 23.0 | 21.5 | $-1.5$ |

The **difference in differences** (DiD) is $1.0 - (-1.5) = 2.5$ hours. Comparing only "after" levels would give
$21.0 - 21.5 = -0.5$; comparing only the treated region before and after would give $+1.0$. Both are contaminated: the
first by permanent differences between regions, the second by whatever changed everywhere over the period.

**Why it works.** Write $Y_{gt}(0)$ for the average untreated outcome of group $g$ (treated T or control C) at time
$t$ (0 or 1). The **parallel trends assumption** says that without the policy the two groups would have changed by
the same amount: $Y_{T1}(0) - Y_{T0}(0) = Y_{C1}(0) - Y_{C0}(0)$. Only the treated group's after-period is treated, so
the observed DiD is

$$
\bigl(Y_{T1}(1) - Y_{T0}(0)\bigr) - \bigl(Y_{C1}(0) - Y_{C0}(0)\bigr) = Y_{T1}(1) - Y_{T1}(0) + \Bigl[\bigl(Y_{T1}(0) - Y_{T0}(0)\bigr) - \bigl(Y_{C1}(0) - Y_{C0}(0)\bigr)\Bigr] ,
$$

and the bracket is zero under parallel trends, leaving $Y_{T1}(1) - Y_{T1}(0)$, the effect on the treated group after
the policy. Parallel trends cannot be tested for the after-period, but trends over several *earlier* periods can be
compared, and an honest DiD study shows them.

The most famous DiD study is David Card and Alan Krueger's of 1994. New Jersey raised its minimum wage in April 1992;
neighbouring eastern Pennsylvania did not. They surveyed fast-food restaurants in both states before and after, and
found no evidence that employment in New Jersey fell relative to Pennsylvania; their estimate was, if anything, a small
relative rise. This contradicted the textbook prediction of the time, started a long debate (including a reanalysis
with payroll data by David Neumark and William Wascher and a reply by Card and Krueger in 2000), and changed how
economists study such questions.

**Regression discontinuity** is a fourth design worth knowing by name: when treatment is given by a cut-off (a
scholarship for a test score of 80 or more), units just above and just below the cut-off are nearly identical, so
comparing them near the line estimates the effect there.

## 17.5 Causal diagrams

*Level: expert (statements, with the logic explained).*

### Drawing the assumptions

Every method above rests on assumptions about what causes what. Judea Pearl and others developed **causal diagrams**
to write those assumptions down and read off their consequences. A **directed acyclic graph** (DAG) has a node for
each variable and an arrow $A \to B$ when $A$ is a direct cause of $B$; "acyclic" means no chain of arrows leads from a
variable back to itself. The idea goes back to the geneticist Sewall Wright's **path analysis** around 1920.

Every connection between two variables is built from three small patterns:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 600 160" role="img" aria-label="Three causal diagrams. Chain: X causes M, which causes Y. Fork: Z causes both X and Y. Collider: X and Y both cause C.">
  <defs>
    <marker id="ch17arrow" viewBox="0 0 8 8" refX="8" refY="4" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
      <path d="M0,0 L8,4 L0,8 z" fill="currentColor"/>
    </marker>
  </defs>
  <g stroke="currentColor" stroke-width="1.5">
    <circle cx="40" cy="75" r="18" fill="#9cc9ea" fill-opacity="0.45"/>
    <circle cx="100" cy="75" r="18" fill="#eea66f" fill-opacity="0.45"/>
    <circle cx="160" cy="75" r="18" fill="#9cc9ea" fill-opacity="0.45"/>
    <line x1="58" y1="75" x2="82" y2="75" marker-end="url(#ch17arrow)"/>
    <line x1="118" y1="75" x2="142" y2="75" marker-end="url(#ch17arrow)"/>
    <circle cx="300" cy="35" r="18" fill="#eea66f" fill-opacity="0.45"/>
    <circle cx="240" cy="115" r="18" fill="#9cc9ea" fill-opacity="0.45"/>
    <circle cx="360" cy="115" r="18" fill="#9cc9ea" fill-opacity="0.45"/>
    <line x1="289.2" y1="49.4" x2="250.8" y2="100.6" marker-end="url(#ch17arrow)"/>
    <line x1="310.8" y1="49.4" x2="349.2" y2="100.6" marker-end="url(#ch17arrow)"/>
    <circle cx="440" cy="35" r="18" fill="#9cc9ea" fill-opacity="0.45"/>
    <circle cx="560" cy="35" r="18" fill="#9cc9ea" fill-opacity="0.45"/>
    <circle cx="500" cy="115" r="18" fill="#eea66f" fill-opacity="0.45"/>
    <line x1="450.8" y1="49.4" x2="489.2" y2="100.6" marker-end="url(#ch17arrow)"/>
    <line x1="549.2" y1="49.4" x2="510.8" y2="100.6" marker-end="url(#ch17arrow)"/>
  </g>
  <g fill="currentColor" font-size="14" text-anchor="middle">
    <text x="40" y="80">X</text><text x="100" y="80">M</text><text x="160" y="80">Y</text>
    <text x="300" y="40">Z</text><text x="240" y="120">X</text><text x="360" y="120">Y</text>
    <text x="440" y="40">X</text><text x="560" y="40">Y</text><text x="500" y="120">C</text>
    <text x="100" y="152">chain</text><text x="300" y="152">fork</text><text x="500" y="152">collider</text>
  </g>
</svg>
</div>

- **Chain** $X \to M \to Y$: $X$ affects $Y$ through the **mediator** $M$. $X$ and $Y$ are associated; if we hold $M$
  fixed (condition on it), the association disappears.
- **Fork** $X \leftarrow Z \to Y$: a **common cause** $Z$ makes $X$ and $Y$ associated though neither causes the
  other. Conditioning on $Z$ removes the association. This is confounding.
- **Collider** $X \to C \leftarrow Y$: $X$ and $Y$ are independent, but both affect $C$. Conditioning on $C$
  *creates* an association.

The collider is the surprising one. **Worked example 7 (made-up).** A college admits a student if their test score
plus an interview score exceeds a threshold. Suppose the two scores are independent in the population of applicants.
Among *admitted* students they are negatively correlated: a student with a weak test score must have had a strong
interview to get in. Conditioning on admission (a collider) has made two independent things look like rivals. This is
**Berkson's paradox** (Joseph Berkson described it for hospital patients in 1946), and it is one reason "control for
everything" is bad advice: adjusting for a collider, or for anything caused by the treatment, can create bias where
there was none.

```python
import random
pairs = [(random.gauss(0, 1), random.gauss(0, 1)) for _ in range(100_000)]
adm = [(a, b) for a, b in pairs if a + b > 1.5]          # admitted only
def corr(p):
    n = len(p); ma = sum(a for a, _ in p)/n; mb = sum(b for _, b in p)/n
    sab = sum((a-ma)*(b-mb) for a, b in p)
    saa = sum((a-ma)**2 for a, _ in p); sbb = sum((b-mb)**2 for _, b in p)
    return sab / (saa*sbb) ** 0.5
print(round(corr(pairs), 3), round(corr(adm), 3))      # about 0.0 and about -0.7
```

### Paths, blocking and the backdoor criterion

A **path** between two nodes is any sequence of edges connecting them, ignoring the arrow directions. A path is
**blocked** by a set of variables $S$ if it contains a chain or fork whose middle node is in $S$, or a collider whose
middle node is *not* in $S$ and has no descendant in $S$. If every path between $X$ and $Y$ is blocked by $S$, the
two are said to be **d-separated** by $S$, and then (for any probability distribution compatible with the graph)
$X$ and $Y$ are independent given $S$. That is the rule the three pictures illustrate, applied to every path at once.

Pearl writes $P(y \mid \operatorname{do}(x))$ for the distribution of $Y$ when we *set* $X$ to $x$ by intervention,
as an experiment would, which differs from $P(y \mid x)$, the distribution among units that happen to have $X = x$.

**Backdoor criterion (Pearl).** A set $S$ of variables satisfies the backdoor criterion relative to $(X, Y)$ if no
variable in $S$ is a descendant of $X$, and $S$ blocks every path between $X$ and $Y$ that starts with an arrow *into*
$X$ (a "backdoor path"). If $S$ satisfies it, then

$$
P(y \mid \operatorname{do}(x)) = \sum_{s} P(y \mid x, s)\,P(s) .
$$

This is the **adjustment formula**, exactly the stratification of 17.4. The proof uses Pearl's rules for
manipulating graphs (the "do-calculus") and is in Pearl's *Causality* (2009), Chapter 3; the idea is that cutting the
arrows into $X$ (which is what an intervention does) leaves the distribution of $S$ and the conditional law of $Y$
given $(x, s)$ unchanged, while the backdoor paths, which carried the non-causal association, are exactly the ones
the cut removes. In the kidney stone example the DAG is size $\to$ treatment, size $\to$ success,
treatment $\to$ success; $S = \{\text{size}\}$ blocks the one backdoor path, and the formula gives the 83% and 78%
computed above.

What the diagram adds to the formulas of 17.4 is a way to *decide* what to adjust for. Adjust for confounders (forks);
do not adjust for mediators (chains) if you want the total effect; never adjust for colliders. And the graph makes the
assumptions visible, so that a reader can disagree with a specific arrow instead of with a vague "we controlled for
the usual variables". The graph itself, though, comes from knowledge of the subject, not from the data. Learning a
graph from data (**causal discovery**) is possible only under further strong assumptions, and is a research area of its
own.

## 17.6 The 2021 prize

*Level: for everyone.*

The Sveriges Riksbank Prize in Economic Sciences in Memory of Alfred Nobel (usually called the economics Nobel,
though it is not one of the prizes Nobel's will created) was awarded in 2021 half to **David Card** "for his empirical
contributions to labour economics", and half jointly to **Joshua Angrist** and **Guido Imbens** "for their
methodological contributions to the analysis of causal relationships".

The common thread is the **natural experiment**: a situation in which something like random assignment happened
without a researcher arranging it.

- **Card** studied, among other things, the minimum wage (the New Jersey and Pennsylvania study of 17.4, with Alan
  Krueger) and the effect of immigration on local wages, using the 1980 Mariel boatlift, which suddenly added many
  Cuban workers to the labour force of Miami (1990). Krueger, his co-author on much of this work, died in 2019; the
  prize is not given posthumously.
- **Angrist** used the Vietnam-era draft lottery, in which young American men were called up by randomly drawn birth
  dates, as an instrument to estimate the effect of military service on later earnings (1990), and, with Krueger,
  used the quarter of the year in which a person was born, which through school-entry and leaving-age rules shifts how
  long people stay in school, as an instrument for the effect of education (1991).
- **Imbens and Angrist** (1994) clarified exactly what such instrumental variable estimates measure, the local average
  treatment effect of 17.4, under assumptions they stated precisely; this paper, and later work with Rubin, joined the
  economists' instrument tradition to the statisticians' potential outcomes.

Honest caveats belong to the story. The quarter-of-birth instrument was later criticised as weak (John Bound, David
Jaeger and Regina Baker, 1995), which showed how unstable estimates from weak instruments can be. The minimum wage
findings remain debated, though the research methods they popularised are now standard. And the prize was for
methods and evidence, not for settling the policy questions.

## A short history

Fisher's work at Rothamsted in the 1920s, summarised in *The Design of Experiments* (1935), introduced
randomisation, replication and blocking, factorial designs and the randomisation test. Neyman's 1923 master's thesis,
written in Polish, used potential outcomes for agricultural trials; it became widely known in statistics only after
an English translation appeared in 1990. Donald Rubin (from 1974) extended potential outcomes to observational studies,
and Holland (1986) named the "fundamental problem". Wright's path diagrams (around 1920) were revived and made into a
full theory by Pearl and by Peter Spirtes, Clark Glymour and Richard Scheines in the 1990s. Rosenbaum and Rubin
introduced propensity scores in 1983. Instrumental variables go back to the economists Philip and Sewall Wright in the
1920s; the local average treatment effect is from 1994. Since then the field has been called the "credibility
revolution" in empirical economics, and causal inference is now taught to statisticians, economists, epidemiologists
and computer scientists from shared foundations.

## Check yourself

??? question "1. In Worked example 1, suppose the high-light, high-nutrient cell had mean 18 instead of 23. Recompute the two main effects and the interaction."

    Light: $\frac{16 + 18}{2} - \frac{11 + 13}{2} = 17 - 12 = 5$. Nutrient: $\frac{13 + 18}{2} - \frac{11 + 16}{2} = 15.5 - 13.5 = 2$. Interaction: light adds 5 at low nutrient and $18 - 13 = 5$ at high nutrient, so the interaction
    is $\frac{5 - 5}{2} = 0$: the effects simply add.

??? question "2. Blocks of two plots have $\sigma_b^2 = 9$ and $\sigma^2 = 1$. With 10 blocks, compare the standard error of the treatment difference in a blocked design with an unblocked one using 20 plots from different blocks."

    Blocked: $\sqrt{2 \cdot 1 / 10} = \sqrt{0.2} \approx 0.45$. Unblocked: $\sqrt{2(1 + 9)/10} = \sqrt{2} \approx 1.41$.
    Blocking cuts the standard error by a factor of $\sqrt{10} \approx 3.2$; an unblocked experiment would need ten
    times as many plots for the same precision.

??? question "3. Explain in your own words why we can never compute an individual treatment effect from data, but can estimate an average one."

    For one unit we see either $Y_i(1)$ or $Y_i(0)$, never both, so $\tau_i = Y_i(1) - Y_i(0)$ is missing half its
    information. An average $\frac1N \sum Y_i(1) - \frac1N \sum Y_i(0)$ splits into two separate averages, and each can
    be estimated from a different group of units, provided the groups are comparable (for example, chosen at random).

??? question "4. In the eight-unit table of 17.2, suppose instead units 1, 2, 4, 6 (the ones with the lowest $Y(0)$) choose treatment. Find the naive difference, the ATT and the selection bias, and check the identity."

    Treated $Y(1)$: $7, 6, 6, 6$, mean $6.25$. Controls (units 3, 5, 7, 8) $Y(0)$: $8, 7, 9, 6$, mean $7.5$. Naive
    difference $= -1.25$: the treatment looks harmful. ATT: effects $2, 0, 2, 3$, mean $1.75$. Selection bias:
    $E[Y(0) \mid T=1] = \frac{5 + 6 + 4 + 3}{4} = 4.5$, minus $7.5$, is $-3$. Check: $1.75 - 3 = -1.25$.

??? question "5. Use Neyman's formula to find the variance of $\hat\tau$ in the eight-unit example if every unit had effect exactly 2 (so $Y_i(1) = Y_i(0) + 2$)."

    Then $S_1^2 = S_0^2 = 4$ (adding a constant does not change variance) and $S_\tau^2 = 0$, so
    $\operatorname{Var}(\hat\tau) = \frac44 + \frac44 - 0 = 2$. Here the conservative estimate is unbiased.

??? question "6. Why does Fisher's randomisation test give an exact p-value with no distributional assumptions? What assumption does it need?"

    Under the sharp null every unit's outcome is fixed whatever the assignment, so the distribution of the test
    statistic over all possible assignments is known exactly: it is computed from the observed numbers and the
    randomisation scheme we actually used. The test needs that scheme to have been followed (each assignment chosen
    with the stated probability) and the sharp null itself, which is stronger than "the average effect is zero".

??? question "7. A study finds that propensity scores range from 0.001 to 0.999. What problem does this cause for inverse probability weighting, and what does it say about overlap?"

    A treated unit with $e(x) = 0.001$ gets weight 1000, so a single unit can dominate the estimate and the variance
    explodes. Scores near 0 or 1 mean some kinds of units almost never (or almost always) get treated: overlap is
    poor, and the data contain little information about the effect for those units. Remedies include restricting to
    the region of overlap (and saying so), or trimming weights, each of which changes the population the answer is
    about.

??? question "8. In an encouragement design, encouraged people were treated 50% of the time with mean outcome 30, and non-encouraged people 10% of the time with mean outcome 28. Find the Wald estimate and say whom it describes."

    $\frac{30 - 28}{0.5 - 0.1} = \frac{2}{0.4} = 5$. Under the IV assumptions and monotonicity it is the average effect
    among compliers, the 40% of people who take the treatment if and only if encouraged.

??? question "9. In a DiD study, the treated group goes from 50 to 58 and the control group from 45 to 49. Find the DiD estimate. What would make it wrong?"

    $(58 - 50) - (49 - 45) = 8 - 4 = 4$. It is wrong if the treated group would have changed by a different amount
    than 4 without the treatment, for example if it was already on a steeper trend, or if something else happened only
    to the treated group at the same time.

??? question "10. In the DAG Smoking $\to$ Tar $\to$ Cancer, Genes $\to$ Smoking, Genes $\to$ Cancer, which sets satisfy the backdoor criterion for the effect of Smoking on Cancer?"

    The one backdoor path is Smoking $\leftarrow$ Genes $\to$ Cancer. $\{\text{Genes}\}$ blocks it and is not a
    descendant of Smoking, so it works. $\{\text{Tar}\}$ fails (it is a descendant of Smoking). The empty set fails,
    because the backdoor path is open. $\{\text{Genes}, \text{Tar}\}$ fails too, since Tar is a descendant. (If Genes
    is unmeasured, Pearl's "front-door" formula can still identify the effect through Tar, under further assumptions.)

??? question "11. Use the kidney stone table to show that the crude comparison is confounded: what share of A patients and of B patients had large stones?"

    A: $\frac{263}{350} \approx 75\%$ large. B: $\frac{80}{350} \approx 23\%$ large. Large stones have lower success
    with either treatment, so A was handicapped by its harder caseload. This is the selection bias of 17.2 in a real
    data set.

??? question "12. Prove that if $T$ is assigned by a fair coin independently of everything, then $e(x) = \frac12$ for all $x$ and the IPW estimator of $E[Y(1)]$ is twice the average of $TY$."

    Independence of $T$ and $X$ gives $e(x) = P(T = 1 \mid X = x) = P(T = 1) = \frac12$. Then $\frac{TY}{e(X)} = 2TY$,
    and the sample version is $\frac1N \sum_i 2T_iY_i$, twice the average of $T_iY_i$ over all units (which equals the
    treated mean when exactly half are treated). In a randomised experiment, weighting adds nothing new.

## What you learned

- Factorial designs estimate every main effect and interaction from all the runs; blocking removes known nuisance
  variation, and the variance gain is $\frac{\sigma^2}{\sigma^2 + \sigma_b^2}$.
- A causal effect compares potential outcomes $Y(1)$ and $Y(0)$, of which we see only one; the naive difference is
  the effect on the treated plus selection bias.
- Randomisation makes the difference of means unbiased for the average effect, with no model, and justifies Fisher's
  exact test; Neyman's variance has a term that can never be estimated, so the usual standard error is conservative.
- Without randomisation, matching, propensity scores and weighting rely on "no unmeasured confounding"; instruments
  rely on exclusion and monotonicity and estimate an effect for compliers; difference in differences relies on
  parallel trends.
- Causal diagrams make the assumptions explicit: adjust for forks, not for mediators or colliders; the backdoor
  criterion says when the adjustment formula is valid.
- Card, Angrist and Imbens were honoured for using and clarifying natural experiments.

**Next:** [Chapter 18](18-High-Dimensional-Statistics.md), what happens when there are more variables than
observations, and how ridge, lasso and principal components cope.

## Further reading

- R. A. Fisher, *The Design of Experiments*, 1935.
- G. E. P. Box, J. S. Hunter and W. G. Hunter, *Statistics for Experimenters*, 2nd edition, 2005, the practical
  classic on factorial designs and blocking.
- J. Splawa-Neyman, "On the application of probability theory to agricultural experiments" (1923), English
  translation in *Statistical Science* 5(4), 1990.
- D. B. Rubin, "Estimating causal effects of treatments in randomized and nonrandomized studies", *Journal of
  Educational Psychology* 66, 1974; P. W. Holland, "Statistics and causal inference", *Journal of the American
  Statistical Association* 81, 1986.
- P. R. Rosenbaum and D. B. Rubin, "The central role of the propensity score in observational studies for causal
  effects", *Biometrika* 70, 1983.
- G. W. Imbens and J. D. Angrist, "Identification and estimation of local average treatment effects",
  *Econometrica* 62, 1994.
- D. Card and A. B. Krueger, "Minimum wages and employment: a case study of the fast-food industry in New Jersey and
  Pennsylvania", *American Economic Review* 84, 1994.
- C. R. Charig, D. R. Webb, S. R. Payne and J. E. A. Wickham, "Comparison of treatment of renal calculi by open
  surgery, percutaneous nephrolithotomy, and extracorporeal shockwave lithotripsy", *British Medical Journal* 292,
  1986.
- G. W. Imbens and D. B. Rubin, *Causal Inference for Statistics, Social, and Biomedical Sciences*, 2015.
- J. Pearl, *Causality*, 2nd edition, 2009; J. Pearl, M. Glymour and N. P. Jewell, *Causal Inference in Statistics:
  A Primer*, 2016.
- J. D. Angrist and J.-S. Pischke, *Mostly Harmless Econometrics*, 2009.
- M. A. Hernán and J. M. Robins, *Causal Inference: What If*, 2020 (free online from the authors).
- On this site: the [experiments and studies lesson](../../topics/statistics/level-8/04-experiments-studies.md), the
  [Simpson's paradox lesson](../../topics/statistics/level-8/05-simpsons-paradox.md), the
  [correlation and causation lesson](../../topics/statistics/level-6/05-correlation-causation.md),
  [Chapter 3 of the Probability book](../probability/03-Conditional-Probability-and-Independence.md) for conditional
  independence, and the [Statistics book's contents](index.md).
