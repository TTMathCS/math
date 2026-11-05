# 14. Bayesian statistics

*Chapter 13 treated the parameter as a fixed unknown number and asked how estimators and tests behave over repeated
samples. There is another way to think, as old as the subject: describe what you do not know about the parameter by a
probability distribution, and let the data update it with Bayes' theorem. Then you can say things a confidence
interval never lets you say, such as "the probability that $p$ is above one half is 0.85", at the price of having to
choose a prior. In this chapter you will compute posteriors exactly for the classic conjugate models, compare credible
and confidence intervals honestly, see how priors are chosen and checked, use Markov chain Monte Carlo when no formula
exists, and meet hierarchical models, where groups borrow strength from each other.*

!!! abstract "In this chapter"
    **You will learn:**

    - how a prior and a likelihood combine into a posterior, and how to predict new data from it
    - the beta-binomial, gamma-Poisson and normal-normal conjugate pairs, derived step by step
    - what a credible interval says, how it differs from a confidence interval, and when the two agree
    - how priors are chosen in practice: informative, weakly informative, Jeffreys, and how to check them
    - how Markov chain Monte Carlo is used in practice, with a working Metropolis sampler and its diagnostics
    - hierarchical models and shrinkage, through the eight schools example

    **You need:** [Chapter 13](13-Likelihood-Theory.md) (likelihood, Fisher information) and
    [Chapter 8](08-Confidence-Intervals.md) (confidence intervals). From the Probability book:
    [Bayes' theorem](../probability/04-Bayes-Theorem.md), [continuous random
    variables](../probability/09-Continuous-Random-Variables.md), [the normal
    distribution](../probability/10-The-Normal-Distribution.md), [Markov chains](../probability/13-Markov-Chains.md) and
    [randomness in computing](../probability/19-Randomness-in-Computing.md) (the Metropolis algorithm). Calculus:
    integrals of densities, and the beta and gamma functions, which are explained where they appear.

    **Levels:** 14.1 is intermediate; 14.2 to 14.4 are advanced; 14.5 and 14.6 are advanced with expert remarks.

## 14.1 Priors and posteriors

### Bayes' theorem for a parameter

In [Probability, Chapter 4](../probability/04-Bayes-Theorem.md) Bayes' theorem updated the probability of an event,
such as "this patient has the disease", after seeing evidence, such as a positive test. Bayesian statistics applies the
same theorem with the unknown parameter in the role of the disease.

Start with a toy version. A coin comes from a box holding three kinds of coin, with chances of heads 0.3, 0.5 and 0.7,
in equal numbers. You do not know which kind you have. Before tossing, each kind has probability $1/3$: this is the
**prior distribution**. You toss 10 times and see 7 heads. Bayes' theorem says

$$
P(p = 0.7 \mid \text{data}) = \frac{P(\text{data} \mid p = 0.7)\,P(p = 0.7)}{\sum_{q} P(\text{data} \mid p = q)\, P(p = q)} .
$$

The factor $\binom{10}{7}$ is the same in every term and cancels, leaving $q^7(1-q)^3$ for each kind:

| kind $q$ | prior | likelihood $q^7(1-q)^3$ | prior × likelihood | posterior |
|---|---|---|---|---|
| 0.3 | 1/3 | 0.0000750 | 0.0000250 | 0.023 |
| 0.5 | 1/3 | 0.000977 | 0.000326 | 0.298 |
| 0.7 | 1/3 | 0.00222 | 0.000741 | 0.679 |

**Check:** $0.023 + 0.298 + 0.679 = 1$. After the data, the 0.7 coin is about twice as probable as the fair one, and
the 0.3 coin is nearly ruled out. That is the whole method; everything else in this chapter is technique.

### The general recipe

Let the data $x$ have density $f(x \mid \theta)$ (the same likelihood as in [Chapter 13](13-Likelihood-Theory.md),
now written with a bar because we treat it as conditional on $\theta$), and let $\pi(\theta)$ be a **prior density**
for $\theta$. The **posterior density** is

$$
\pi(\theta \mid x) = \frac{f(x \mid \theta)\,\pi(\theta)}{m(x)}, \qquad m(x) = \int f(x \mid \theta)\,\pi(\theta)\,d\theta .
$$

The denominator $m(x)$, the **marginal likelihood** or **evidence**, is just the number that makes the posterior
integrate to 1. So we usually write

$$
\pi(\theta \mid x) \propto f(x \mid \theta)\, \pi(\theta), \qquad \text{posterior} \propto \text{likelihood} \times \text{prior},
$$

where $\propto$ means "equal up to a factor that does not depend on $\theta$". Recognising the shape of the right side
as a known density is the key skill of 14.2.

Three things follow at once.

- **Only the likelihood carries the data.** Two experiments with proportional likelihoods give the same posterior.
  This is the **likelihood principle**, and it has real consequences: a Bayesian analysis of 7 heads in 10 tosses is
  the same whether the plan was "toss 10 times" or "toss until the third tail", while a p-value differs between the two
  plans.
- **Updating is consistent.** Updating on data set 1 and then on data set 2 (independent given $\theta$) gives the
  same posterior as updating on both at once, since the likelihoods multiply. Yesterday's posterior is today's prior.
- **Everything is a probability.** The posterior answers direct questions: the probability that $\theta$ lies in an
  interval, that one treatment beats another, that a future observation exceeds some value.

### Predicting new data

The **posterior predictive distribution** of a new observation $\tilde x$ averages the model over the posterior:

$$
p(\tilde x \mid x) = \int f(\tilde x \mid \theta)\, \pi(\theta \mid x)\, d\theta .
$$

For the box of coins, the chance that the next toss is heads is
$0.3 \times 0.023 + 0.5 \times 0.298 + 0.7 \times 0.679 = 0.631$. Notice it is below 0.7: the predictive distribution
keeps the uncertainty about which coin we have, instead of plugging in one best guess.

### History, briefly

Thomas Bayes' essay solving the problem for a binomial chance with a uniform prior was published after his death,
edited by Richard Price, in the *Philosophical Transactions of the Royal Society* in 1763. Pierre-Simon Laplace found
the same rule independently in 1774 and applied it far more widely, for instance to the ratio of boys to girls among
births. In the twentieth century the approach was out of favour with most statisticians, then defended in different
ways by Harold Jeffreys (*Theory of Probability*, 1939), Bruno de Finetti and Leonard Savage, and finally made practical
for complicated models by Markov chain Monte Carlo from around 1990.

## 14.2 Conjugate pairs

*Level: advanced.*

A family of priors is **conjugate** to a likelihood if the posterior is in the same family. Conjugate pairs give exact
formulas, they show clearly how prior and data combine, and they are the building blocks of larger models.

### Beta-binomial

The **beta distribution** with parameters $a, b > 0$ has density on $[0,1]$

$$
\pi(p) = \frac{p^{a-1}(1-p)^{b-1}}{B(a,b)}, \qquad B(a,b) = \int_0^1 t^{a-1}(1-t)^{b-1}\,dt = \frac{\Gamma(a)\Gamma(b)}{\Gamma(a+b)} .
$$

Here $\Gamma$ is the gamma function, with $\Gamma(n) = (n-1)!$ for whole numbers. Its mean is $a/(a+b)$ and, for
$a, b > 1$, its mode is $(a-1)/(a+b-2)$. Beta(1, 1) is the uniform distribution. You can think of Beta($a$, $b$) as the
belief of someone who has "seen" $a$ heads and $b$ tails in imaginary earlier tosses (with the uniform as the starting
point of one of each).

**Derivation.** Observe $x$ successes in $n$ independent trials. Then

$$
\pi(p \mid x) \propto \underbrace{p^x (1-p)^{n-x}}_{\text{likelihood}} \cdot \underbrace{p^{a-1}(1-p)^{b-1}}_{\text{prior}} = p^{a + x - 1}(1-p)^{b + n - x - 1} .
$$

This is the shape of a Beta($a + x$, $b + n - x$) density, and since a density is fixed by its shape (the constant
must make it integrate to 1), the posterior **is** Beta($a + x$, $b + n - x$). Add the successes to $a$, the failures
to $b$.

**The posterior mean is a compromise.**

$$
E[p \mid x] = \frac{a + x}{a + b + n} = \frac{a+b}{a+b+n} \cdot \frac{a}{a+b} + \frac{n}{a+b+n} \cdot \frac{x}{n} ,
$$

a weighted average of the prior mean and the sample proportion, with weights proportional to the prior's "imaginary
sample size" $a + b$ and the real sample size $n$. As $n$ grows the data win.

**Worked example.** A prior Beta(5, 5) says "probably a fairly normal coin" (mean 0.5, with most of its mass between
0.2 and 0.8). After 7 heads in 10, the posterior is Beta(12, 8), with mean $12/20 = 0.6$, exactly halfway between the
prior mean 0.5 and the data's 0.7, because the prior and data both count as 10 tosses.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="A Beta(5,5) prior centred at 0.5, the normalised likelihood of 7 heads in 10 tosses peaking at 0.7, and the Beta(12,8) posterior peaking between them near 0.61">
  <polyline fill="none" stroke="#9cc9ea" stroke-width="2.5" points="41.8,175.0 43.5,175.0 45.2,175.0 47.0,175.0 48.8,175.0 50.5,175.0 52.2,175.0 54.0,175.0 55.8,174.9 57.5,174.9 59.2,174.8 61.0,174.8 62.8,174.7 64.5,174.6 66.2,174.5 68.0,174.4 69.8,174.2 71.5,174.0 73.2,173.8 75.0,173.6 76.8,173.3 78.5,173.0 80.2,172.6 82.0,172.3 83.8,171.8 85.5,171.4 87.2,170.9 89.0,170.4 90.8,169.8 92.5,169.2 94.2,168.5 96.0,167.8 97.8,167.1 99.5,166.3 101.2,165.4 103.0,164.5 104.8,163.6 106.5,162.6 108.2,161.6 110.0,160.5 111.8,159.4 113.5,158.3 115.2,157.1 117.0,155.9 118.8,154.6 120.5,153.3 122.2,152.0 124.0,150.6 125.8,149.2 127.5,147.7 129.2,146.3 131.0,144.8 132.8,143.3 134.5,141.7 136.2,140.2 138.0,138.6 139.8,137.0 141.5,135.4 143.2,133.7 145.0,132.1 146.8,130.5 148.5,128.8 150.2,127.2 152.0,125.6 153.8,123.9 155.5,122.3 157.2,120.7 159.0,119.1 160.8,117.5 162.5,115.9 164.2,114.4 166.0,112.9 167.8,111.4 169.5,109.9 171.2,108.5 173.0,107.1 174.8,105.7 176.5,104.4 178.2,103.1 180.0,101.8 181.8,100.6 183.5,99.5 185.2,98.4 187.0,97.4 188.8,96.4 190.5,95.4 192.2,94.5 194.0,93.7 195.8,93.0 197.5,92.3 199.2,91.6 201.0,91.1 202.8,90.5 204.5,90.1 206.2,89.7 208.0,89.4 209.8,89.2 211.5,89.0 213.2,88.9 215.0,88.9 216.8,88.9 218.5,89.0 220.2,89.2 222.0,89.4 223.8,89.7 225.5,90.1 227.2,90.5 229.0,91.1 230.8,91.6 232.5,92.3 234.3,93.0 236.0,93.7 237.7,94.5 239.5,95.4 241.2,96.4 243.0,97.4 244.8,98.4 246.5,99.5 248.2,100.6 250.0,101.8 251.8,103.1 253.5,104.4 255.2,105.7 257.0,107.1 258.8,108.5 260.5,109.9 262.2,111.4 264.0,112.9 265.8,114.4 267.5,115.9 269.2,117.5 271.0,119.1 272.8,120.7 274.5,122.3 276.2,123.9 278.0,125.6 279.8,127.2 281.5,128.8 283.2,130.5 285.0,132.1 286.8,133.7 288.5,135.4 290.2,137.0 292.0,138.6 293.8,140.2 295.5,141.7 297.2,143.3 299.0,144.8 300.8,146.3 302.5,147.7 304.2,149.2 306.0,150.6 307.8,152.0 309.5,153.3 311.2,154.6 313.0,155.9 314.8,157.1 316.5,158.3 318.2,159.4 320.0,160.5 321.8,161.6 323.5,162.6 325.2,163.6 327.0,164.5 328.8,165.4 330.5,166.3 332.2,167.1 334.0,167.8 335.8,168.5 337.5,169.2 339.2,169.8 341.0,170.4 342.8,170.9 344.5,171.4 346.2,171.8 348.0,172.3 349.8,172.6 351.5,173.0 353.2,173.3 355.0,173.6 356.8,173.8 358.5,174.0 360.2,174.2 362.0,174.4 363.8,174.5 365.5,174.6 367.2,174.7 369.0,174.8 370.8,174.8 372.5,174.9 374.2,174.9 376.0,175.0 377.8,175.0 379.5,175.0 381.2,175.0 383.0,175.0 384.8,175.0 386.5,175.0 388.2,175.0"/>
  <polyline fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" points="41.8,175.0 43.5,175.0 45.2,175.0 47.0,175.0 48.8,175.0 50.5,175.0 52.2,175.0 54.0,175.0 55.8,175.0 57.5,175.0 59.2,175.0 61.0,175.0 62.8,175.0 64.5,175.0 66.2,175.0 68.0,175.0 69.8,175.0 71.5,175.0 73.2,175.0 75.0,175.0 76.8,175.0 78.5,175.0 80.2,175.0 82.0,175.0 83.8,175.0 85.5,175.0 87.2,175.0 89.0,175.0 90.8,175.0 92.5,175.0 94.2,174.9 96.0,174.9 97.8,174.9 99.5,174.9 101.2,174.9 103.0,174.8 104.8,174.8 106.5,174.8 108.2,174.7 110.0,174.7 111.8,174.6 113.5,174.6 115.2,174.5 117.0,174.5 118.8,174.4 120.5,174.3 122.2,174.2 124.0,174.1 125.8,173.9 127.5,173.8 129.2,173.7 131.0,173.5 132.8,173.3 134.5,173.1 136.2,172.9 138.0,172.7 139.8,172.4 141.5,172.1 143.2,171.9 145.0,171.5 146.8,171.2 148.5,170.8 150.2,170.4 152.0,170.0 153.8,169.6 155.5,169.1 157.2,168.6 159.0,168.0 160.8,167.4 162.5,166.8 164.2,166.2 166.0,165.5 167.8,164.8 169.5,164.0 171.2,163.2 173.0,162.4 174.8,161.5 176.5,160.6 178.2,159.7 180.0,158.7 181.8,157.6 183.5,156.5 185.2,155.4 187.0,154.2 188.8,153.0 190.5,151.7 192.2,150.4 194.0,149.1 195.8,147.7 197.5,146.3 199.2,144.8 201.0,143.3 202.8,141.7 204.5,140.2 206.2,138.5 208.0,136.9 209.8,135.2 211.5,133.4 213.2,131.7 215.0,129.9 216.8,128.1 218.5,126.2 220.2,124.4 222.0,122.5 223.8,120.6 225.5,118.7 227.2,116.7 229.0,114.8 230.8,112.8 232.5,110.9 234.3,109.0 236.0,107.0 237.7,105.1 239.5,103.2 241.2,101.3 243.0,99.4 244.8,97.6 246.5,95.8 248.2,94.0 250.0,92.2 251.8,90.5 253.5,88.9 255.2,87.3 257.0,85.7 258.8,84.2 260.5,82.8 262.2,81.5 264.0,80.2 265.8,79.0 267.5,77.9 269.2,76.9 271.0,75.9 272.8,75.1 274.5,74.4 276.2,73.7 278.0,73.2 279.8,72.8 281.5,72.5 283.2,72.3 285.0,72.3 286.8,72.3 288.5,72.5 290.2,72.8 292.0,73.3 293.8,73.8 295.5,74.5 297.2,75.4 299.0,76.3 300.8,77.4 302.5,78.6 304.2,80.0 306.0,81.5 307.8,83.1 309.5,84.8 311.2,86.6 313.0,88.6 314.8,90.7 316.5,92.8 318.2,95.1 320.0,97.5 321.8,100.0 323.5,102.5 325.2,105.1 327.0,107.8 328.8,110.6 330.5,113.4 332.2,116.3 334.0,119.2 335.8,122.1 337.5,125.0 339.2,128.0 341.0,130.9 342.8,133.8 344.5,136.7 346.2,139.6 348.0,142.4 349.8,145.1 351.5,147.8 353.2,150.4 355.0,152.9 356.8,155.3 358.5,157.6 360.2,159.8 362.0,161.8 363.8,163.7 365.5,165.5 367.2,167.1 369.0,168.5 370.8,169.8 372.5,171.0 374.2,171.9 376.0,172.8 377.8,173.5 379.5,174.0 381.2,174.4 383.0,174.7 384.8,174.9 386.5,175.0 388.2,175.0"/>
  <polyline fill="none" stroke="#eea66f" stroke-width="2.5" points="41.8,175.0 43.5,175.0 45.2,175.0 47.0,175.0 48.8,175.0 50.5,175.0 52.2,175.0 54.0,175.0 55.8,175.0 57.5,175.0 59.2,175.0 61.0,175.0 62.8,175.0 64.5,175.0 66.2,175.0 68.0,175.0 69.8,175.0 71.5,175.0 73.2,175.0 75.0,175.0 76.8,175.0 78.5,175.0 80.2,175.0 82.0,175.0 83.8,175.0 85.5,175.0 87.2,175.0 89.0,175.0 90.8,175.0 92.5,175.0 94.2,175.0 96.0,175.0 97.8,175.0 99.5,175.0 101.2,175.0 103.0,175.0 104.8,175.0 106.5,174.9 108.2,174.9 110.0,174.9 111.8,174.9 113.5,174.9 115.2,174.8 117.0,174.8 118.8,174.7 120.5,174.7 122.2,174.6 124.0,174.5 125.8,174.4 127.5,174.3 129.2,174.2 131.0,174.1 132.8,173.9 134.5,173.7 136.2,173.5 138.0,173.2 139.8,173.0 141.5,172.7 143.2,172.3 145.0,171.9 146.8,171.5 148.5,171.0 150.2,170.5 152.0,169.9 153.8,169.2 155.5,168.5 157.2,167.7 159.0,166.9 160.8,166.0 162.5,165.0 164.2,163.9 166.0,162.7 167.8,161.5 169.5,160.2 171.2,158.7 173.0,157.2 174.8,155.6 176.5,153.9 178.2,152.1 180.0,150.2 181.8,148.1 183.5,146.0 185.2,143.8 187.0,141.5 188.8,139.1 190.5,136.6 192.2,134.0 194.0,131.3 195.8,128.5 197.5,125.6 199.2,122.7 201.0,119.7 202.8,116.7 204.5,113.5 206.2,110.4 208.0,107.2 209.8,104.0 211.5,100.7 213.2,97.5 215.0,94.3 216.8,91.1 218.5,87.9 220.2,84.7 222.0,81.6 223.8,78.6 225.5,75.6 227.2,72.8 229.0,70.0 230.8,67.3 232.5,64.8 234.3,62.5 236.0,60.2 237.7,58.2 239.5,56.3 241.2,54.6 243.0,53.1 244.8,51.8 246.5,50.7 248.2,49.8 250.0,49.2 251.8,48.8 253.5,48.6 255.2,48.7 257.0,49.0 258.8,49.5 260.5,50.3 262.2,51.4 264.0,52.6 265.8,54.1 267.5,55.8 269.2,57.8 271.0,59.9 272.8,62.3 274.5,64.8 276.2,67.6 278.0,70.5 279.8,73.5 281.5,76.7 283.2,80.0 285.0,83.5 286.8,87.0 288.5,90.6 290.2,94.3 292.0,98.0 293.8,101.8 295.5,105.5 297.2,109.3 299.0,113.1 300.8,116.8 302.5,120.4 304.2,124.0 306.0,127.6 307.8,131.0 309.5,134.3 311.2,137.6 313.0,140.7 314.8,143.7 316.5,146.5 318.2,149.2 320.0,151.7 321.8,154.1 323.5,156.4 325.2,158.5 327.0,160.4 328.8,162.2 330.5,163.8 332.2,165.3 334.0,166.7 335.8,167.9 337.5,168.9 339.2,169.9 341.0,170.8 342.8,171.5 344.5,172.1 346.2,172.7 348.0,173.1 349.8,173.5 351.5,173.9 353.2,174.1 355.0,174.3 356.8,174.5 358.5,174.6 360.2,174.7 362.0,174.8 363.8,174.9 365.5,174.9 367.2,175.0 369.0,175.0 370.8,175.0 372.5,175.0 374.2,175.0 376.0,175.0 377.8,175.0 379.5,175.0 381.2,175.0 383.0,175.0 384.8,175.0 386.5,175.0 388.2,175.0"/>
  <line x1="35" y1="175" x2="395" y2="175" stroke="currentColor" stroke-width="1.5"/>
  <text x="40.0" y="190" text-anchor="middle" font-size="11" fill="currentColor">0.0</text>
  <text x="110.0" y="190" text-anchor="middle" font-size="11" fill="currentColor">0.2</text>
  <text x="180.0" y="190" text-anchor="middle" font-size="11" fill="currentColor">0.4</text>
  <text x="250.0" y="190" text-anchor="middle" font-size="11" fill="currentColor">0.6</text>
  <text x="320.0" y="190" text-anchor="middle" font-size="11" fill="currentColor">0.8</text>
  <text x="390.0" y="190" text-anchor="middle" font-size="11" fill="currentColor">1.0</text>
  <text x="215" y="207" text-anchor="middle" font-size="11" fill="currentColor">p (chance of heads)</text>
  <line x1="50" y1="22" x2="70" y2="22" stroke="#9cc9ea" stroke-width="2.5"/><text x="75" y="26" font-size="11" fill="currentColor">prior Beta(5, 5)</text>
  <line x1="50" y1="40" x2="70" y2="40" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><text x="75" y="44" font-size="11" fill="currentColor">likelihood, 7 of 10</text>
  <line x1="50" y1="58" x2="70" y2="58" stroke="#eea66f" stroke-width="2.5"/><text x="75" y="62" font-size="11" fill="currentColor">posterior Beta(12, 8)</text>
</svg>
</div>

With the uniform prior Beta(1, 1) instead, the posterior is Beta(8, 4): mean $8/12 = 0.667$, mode 0.7 (the MLE). The
predictive probability that the next toss is heads is the posterior mean, $(x+1)/(n+2) = 8/12$. This is **Laplace's
rule of succession**: after $x$ successes in $n$ trials, with a uniform prior, predict the next success with
probability $(x+1)/(n+2)$.

### Gamma-Poisson

The **gamma distribution** with shape $a > 0$ and rate $b > 0$ has density
$\pi(\lambda) = b^a \lambda^{a-1} e^{-b\lambda}/\Gamma(a)$ on $\lambda > 0$, mean $a/b$ and variance $a/b^2$. For
Poisson counts $x_1, \dots, x_n$ with total $s$:

$$
\pi(\lambda \mid x) \propto \left(\prod_{i} e^{-\lambda}\lambda^{x_i}\right) \lambda^{a-1}e^{-b\lambda} = \lambda^{a + s - 1} e^{-(b + n)\lambda},
$$

a Gamma($a + s$, $b + n$) density. The shape counts events, the rate counts exposure. For the made-up flaw counts of
[Chapter 13](13-Likelihood-Theory.md) ($n = 8$, $s = 20$) and a prior Gamma(2, 1) (mean 2 flaws per sheet, from an
imagined single earlier sheet with 2 flaws), the posterior is Gamma(22, 9), with mean $22/9 = 2.44$ and standard
deviation $\sqrt{22}/9 = 0.52$, close to the MLE 2.5 and its standard error 0.56.

### Normal-normal

Let $x_1, \dots, x_n$ be normal with unknown mean $\mu$ and known standard deviation $\sigma$, and give $\mu$ a normal
prior $N(\mu_0, \tau_0^2)$. It is easiest to work with **precisions**, the reciprocals of variances: the prior
precision is $1/\tau_0^2$, and the data's precision about $\mu$ is $n/\sigma^2$.

**Derivation.** The likelihood, as a function of $\mu$, depends on the data only through $\bar x$ (sufficiency,
[Chapter 13](13-Likelihood-Theory.md)): $f(x \mid \mu) \propto \exp\!\left(-n(\bar x - \mu)^2/(2\sigma^2)\right)$. So

$$
\pi(\mu \mid x) \propto \exp\!\left( -\frac{n(\mu - \bar x)^2}{2\sigma^2} - \frac{(\mu - \mu_0)^2}{2\tau_0^2} \right) .
$$

The exponent is a quadratic in $\mu$. Write $A = n/\sigma^2 + 1/\tau_0^2$ and $B = n\bar x/\sigma^2 + \mu_0/\tau_0^2$.
Expanding the squares, the exponent is $-\frac12(A\mu^2 - 2B\mu) + \text{const}$, and completing the square,

$$
-\frac{A}{2}\left(\mu - \frac{B}{A}\right)^2 + \text{const} .
$$

That is the exponent of a normal density with mean $B/A$ and variance $1/A$. So the posterior is normal, with

$$
\frac{1}{\tau_1^2} = \frac{1}{\tau_0^2} + \frac{n}{\sigma^2}, \qquad \mu_1 = \tau_1^2 \left( \frac{\mu_0}{\tau_0^2} + \frac{n \bar x}{\sigma^2}\right) .
$$

In words: **precisions add, and the posterior mean is the precision-weighted average of the prior mean and the sample
mean.**

**Worked example (made-up numbers).** A lab knows its scale has measurement error $\sigma = 6$ grams. From the supplier's
specification, a part should weigh about 100 g, with uncertainty $\tau_0 = 4$ g. Four weighings average
$\bar x = 106$ g. Prior precision $1/16 = 0.0625$, data precision $4/36 = 0.1111$, posterior precision $0.1736$, so
$\tau_1^2 = 5.76$ and $\tau_1 = 2.4$. The posterior mean is

$$
\mu_1 = 5.76 \times \left(\frac{100}{16} + \frac{4 \times 106}{36}\right) = 5.76 \times (6.25 + 11.778) = 103.84 .
$$

The data get weight $0.1111/0.1736 = 0.64$ and the prior $0.36$. **Check:** $0.36 \times 100 + 0.64 \times 106 = 103.84$.

### Why conjugacy works: exponential families

The three examples are not luck. Each likelihood is an **exponential family**, with log-density of the form
$\eta(\theta)T(x) - A(\theta) + C(x)$ (the same family where the Cramér-Rao bound is attained in Chapter 13). Any such
family has the conjugate prior $\pi(\theta) \propto \exp(\eta(\theta)\nu - \kappa A(\theta))$, and the update is
$\nu \to \nu + \sum T(x_i)$, $\kappa \to \kappa + n$: the prior acts like $\kappa$ earlier observations with total
$\nu$. Diaconis and Ylvisaker (1979) characterised these priors as exactly the ones that make the posterior mean
of the expected value a linear function of the sample mean.

<figure class="play" data-play="betacoin"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> A Beta prior updated flip by flip: the posterior narrows round the coin's true chance of heads.</figcaption></figure>

## 14.3 Credible intervals and confidence intervals

*Level: advanced.*

### Definitions

A **95% credible interval** is an interval $C$ with $P(\theta \in C \mid x) = 0.95$ under the posterior. Two common
choices:

- the **equal-tailed** interval, from the 2.5% point to the 97.5% point of the posterior;
- the **highest posterior density** (HPD) interval, the shortest one, made of the $\theta$ values whose posterior
  density is above some level.

For the coin with uniform prior, posterior Beta(8, 4): the equal-tailed 95% interval is $(0.390, 0.891)$; the HPD
interval is about $(0.400, 0.896)$, a little shorter because the posterior is skewed. Compare
[Chapter 13](13-Likelihood-Theory.md)'s likelihood interval $(0.393, 0.915)$ and Wald interval $(0.42, 0.98)$.

### What each one claims

The statements sound alike and are logically different.

- **Confidence interval.** The *procedure* captures the true $\theta$ in 95% of repeated samples, whatever $\theta$
  is. Once the data are in, the interval is fixed and $\theta$ is fixed, and the 95% describes the method, not this
  interval ([Chapter 8](08-Confidence-Intervals.md)).
- **Credible interval.** Given *these* data, and *this* prior, the probability that $\theta$ is in the interval is 0.95.
  The probability is about $\theta$, but it is only as good as the prior and the model.

Many people read confidence intervals as if they were credible intervals. For the commonest cases this does little
harm, because the two nearly coincide:

**When they agree exactly.** For normal data with known $\sigma$ and a flat prior $\pi(\mu) \propto 1$ (the limit of
the normal-normal model as $\tau_0 \to \infty$), the posterior is $N(\bar x, \sigma^2/n)$, so the 95% credible
interval is $\bar x \pm 1.96\,\sigma/\sqrt n$, the textbook confidence interval, number for number.

**When they agree approximately.** The **Bernstein-von Mises theorem** says that in regular models (the conditions of
Chapter 13's asymptotic normality), for any prior with a continuous positive density near the true value, the posterior
is close to $N(\hat\theta, 1/(nI(\hat\theta)))$ when $n$ is large, in total variation distance. So in large regular
problems credible intervals are approximate confidence intervals, and the prior washes out. (Proof: van der Vaart,
*Asymptotic Statistics*, chapter 10. It can fail in high-dimensional or nonparametric models; see Freedman, 1999.)

**When they disagree.** With small samples, with parameters near a boundary, or with strong priors.

*Zero successes.* A new process has produced 0 defects in 20 items. The Wald interval is $0 \pm 0$, useless. With a
uniform prior the posterior is Beta(1, 21), whose density is $21(1-p)^{20}$; the 95% upper credible bound solves
$(1-p)^{21} = 0.05$, giving $p = 1 - 0.05^{1/21} = 0.133$. The classical exact one-sided bound solves $(1-p)^{20} = 0.05$,
giving 0.139, and the "rule of three" approximation is $3/20 = 0.15$. Close, but not the same, and each answers its own
question.

*Strong prior.* In the scale example, the 95% credible interval is $103.84 \pm 1.96 \times 2.4 = (99.1, 108.5)$, while the
confidence interval from the data alone is $106 \pm 1.96 \times 6/2 = (100.1, 111.9)$. If the supplier's specification
is trustworthy, the credible interval is better; if not, it is wrong in a way no amount of arithmetic will reveal.
That is the honest trade.

### Coverage of credible intervals

Is a Bayesian interval a bad confidence interval? Averaged over the prior, a 95% credible interval covers $\theta$ exactly
95% of the time: if $\theta$ is drawn from $\pi$ and then $x$ from $f(x\mid\theta)$, the event $\theta \in C(x)$ has
probability $E[P(\theta \in C(x) \mid x)] = 0.95$. At a particular fixed $\theta$ far from where the prior puts its mass,
coverage can be much lower. Frequentist coverage at every $\theta$ and Bayesian coverage on average over $\theta$ are
different guarantees.

## 14.4 Choosing priors honestly

*Level: advanced.*

### Kinds of prior

- **Informative priors** carry real knowledge: earlier studies, physical limits, expert judgement elicited carefully.
  The scale example is one. They should be written down and justified before the data are seen, like a pre-registered
  analysis plan.
- **Weakly informative priors** rule out absurd values without pretending to know much: for a log-odds, a normal with
  standard deviation around 1.5 says "probabilities very close to 0 or 1 are not expected". Gelman and coauthors
  (2008) proposed a Cauchy prior with scale 2.5 as a default of this kind for logistic regression coefficients.
- **Reference or "objective" priors** try to let the data speak. The best known is Jeffreys' prior.

### "Flat" is not neutral

A uniform prior on $p$ is not uniform on the log-odds $\theta = \log(p/(1-p))$, and vice versa. Worse, a prior that looks
vague on one scale can be strong on another. Take $\theta \sim N(0, 10^2)$, which looks harmless. On the probability
scale it puts about 41% of its mass below $p = 0.1$ and another 41% above $p = 0.9$: it strongly expects extreme
probabilities. The milder $N(0, 1.5^2)$ puts only about 7% below 0.1. Always look at what a prior implies on the scale
you care about.

### Jeffreys' prior

Harold Jeffreys (1946) asked for a rule that gives the same answer whatever parameter you use. Chapter 13 showed that
if $\eta = g(\theta)$, then $I_\theta(\theta) = I_\eta(\eta)\,g'(\theta)^2$. Define

$$
\pi_J(\theta) \propto \sqrt{I(\theta)} .
$$

**Invariance.** A density for $\theta$ transforms to a density for $\eta$ by the change of variables
$\pi(\eta) = \pi(\theta)\,|d\theta/d\eta| = \pi(\theta)/|g'(\theta)|$. Applying this to $\pi_J$:

$$
\pi_J(\theta) / |g'(\theta)| \propto \sqrt{I_\theta(\theta)}/|g'(\theta)| = \sqrt{I_\eta(\eta)},
$$

which is Jeffreys' prior computed directly in $\eta$. So the rule does not depend on how you label the parameter.

**Examples.** Bernoulli: $I(p) = 1/(p(1-p))$, so $\pi_J(p) \propto p^{-1/2}(1-p)^{-1/2}$, the Beta(1/2, 1/2) density.
After 7 heads in 10 the posterior is Beta(7.5, 3.5), mean 0.682, 95% interval $(0.394, 0.907)$, close to the likelihood
interval. Poisson: $I(\lambda) = 1/\lambda$, so $\pi_J \propto \lambda^{-1/2}$. Normal mean: $I = 1/\sigma^2$, constant,
so the flat prior.

The last two do not integrate to a finite number: they are **improper priors**. They are allowed only when the
posterior is proper (integrates to 1), which must be checked each time. In several dimensions Jeffreys' rule can give
poor answers, and Jeffreys himself modified it; Bernardo's reference priors (1979) are the modern refinement.

### Checking a prior

Honest practice has three habits.

1. **Prior predictive checks.** Simulate data from the prior and the model before seeing the real data. If the prior
   predicts absurd data (negative weights, 99% of patients cured by a placebo), fix it.
2. **Sensitivity analysis.** Report how the conclusion changes over a range of reasonable priors. If it changes a lot,
   say that the data do not settle the question.
3. **Posterior predictive checks.** Simulate replicate data sets from the posterior predictive and compare them with the
   real data on features the model should reproduce. Systematic misfit means the model, not just the prior, is wrong.

The deepest argument for priors is not that they are objective (they are not) but that every analysis makes
assumptions, and a prior makes some of them explicit and open to criticism.

## 14.5 MCMC in practice

*Level: advanced.*

### When there is no formula

Change the coin model slightly: put a weakly informative prior $N(0, 1.5^2)$ on the log-odds $\theta = \log(p/(1-p))$
instead of a beta prior on $p$. The posterior is

$$
\pi(\theta \mid x) \propto \frac{e^{7\theta}}{(1 + e^\theta)^{10}} \, e^{-\theta^2/(2 \times 1.5^2)} ,
$$

which is not any named distribution, and its normalising constant has no closed form. With one parameter we could
integrate numerically. With fifty parameters, numerical integration on a grid is hopeless (ten grid points per
parameter would mean $10^{50}$ evaluations).

**Markov chain Monte Carlo** (MCMC) avoids the constant altogether. It builds a Markov chain whose stationary
distribution is the posterior ([Probability, Chapter 13](../probability/13-Markov-Chains.md)), runs it for a long time,
and uses the visited points as an approximate sample. The Metropolis algorithm and its proof of correctness by detailed
balance are in [Probability, Chapter 19](../probability/19-Randomness-in-Computing.md); here we use it.

### Metropolis for the coin

From the current $\theta$, propose $\theta' = \theta + \varepsilon$ with $\varepsilon \sim N(0, 1)$. Accept with
probability $\min\{1, \pi(\theta' \mid x)/\pi(\theta \mid x)\}$; otherwise stay. Only the **ratio** of posterior
densities is needed, so the unknown constant cancels. That is the whole trick.

### Try it in Python

```python
import math, random

def log_post(theta):                      # theta = log-odds of heads
    p_log = 7 * theta - 10 * math.log(1 + math.exp(theta))   # binomial: 7 heads in 10
    prior_log = -theta**2 / (2 * 1.5**2)                     # prior N(0, 1.5^2)
    return p_log + prior_log

random.seed(2026)
theta, draws, accepted = 0.0, [], 0
for step in range(60_000):
    proposal = theta + random.gauss(0, 1.0)                   # random-walk proposal
    if math.log(random.random()) < log_post(proposal) - log_post(theta):
        theta, accepted = proposal, accepted + 1
    draws.append(theta)

kept = draws[10_000:]                                         # discard burn-in
ps = sorted(1 / (1 + math.exp(-t)) for t in kept)
print(round(accepted / 60_000, 2))                            # acceptance rate
print(round(sum(ps) / len(ps), 3))                            # posterior mean of p
print(round(ps[int(0.025 * len(ps))], 3), round(ps[int(0.975 * len(ps))], 3))
```

It prints an acceptance rate of 0.57, a posterior mean of $p$ of 0.668, and a 95% interval of $(0.393, 0.889)$.
**Check** by numerical integration of the one-dimensional posterior: mean 0.666, interval $(0.390, 0.887)$. The sample
is correct to about two decimals, as you would expect from tens of thousands of correlated draws. Notice the posterior
mean of $p$ is close to the Beta(8, 4) answer, because this prior happens to be fairly flat on the probability scale
in the region the data favour.

Working on the log scale (adding log-densities rather than multiplying densities) avoids numbers too small for the
computer to store, which matters as soon as there are hundreds of observations.

### Diagnostics: how do you know it worked?

You never know for certain; you look for evidence that it failed.

- **Burn-in.** The chain starts somewhere arbitrary; discard the early part, before it reaches the bulk of the
  posterior. Above, the first 10,000 draws.
- **Trace plots.** Plot $\theta$ against step number. A good chain looks like a fuzzy horizontal band; trends, long
  flat stretches (proposals always rejected) or slow wandering are warnings.
- **Acceptance rate.** For a random-walk proposal, a rate near 1 means steps are too small (the chain crawls), a rate
  near 0 means they are too large (it never moves). Theory for idealised high-dimensional targets suggests about 0.234
  (Roberts, Gelman and Gilks, 1997); in one dimension rates around 0.4 to 0.5 work well.
- **Several chains from dispersed starting points.** If they settle in different places, the chain has not mixed. The
  **$\hat R$ statistic** of Gelman and Rubin (1992) compares the variance between chains with the variance within
  them; values close to 1 (modern advice: below 1.01) are required, not sufficient.
- **Effective sample size.** Successive draws are correlated, so 50,000 draws carry less information than 50,000
  independent ones. If the lag-$k$ autocorrelations of the chain are $\rho_k$, the effective sample size is about
  $N/(1 + 2\sum_{k \ge 1}\rho_k)$ (the same autocorrelation idea as in [Chapter 16](16-Time-Series.md)).

### What people actually use

Hand-written Metropolis samplers are for learning. In practice, **Gibbs sampling** (update one parameter at a time from
its conditional posterior; Geman and Geman 1984, brought to statistics by Gelfand and Smith 1990), and above all
**Hamiltonian Monte Carlo**, which uses the gradient of the log-posterior to make long, well-aimed proposals, do the
work. The probabilistic programming language Stan (Carpenter and others, 2017) implements an adaptive Hamiltonian
method, and lets you write the model and the prior and leaves the sampler to the software. Variational inference, which
replaces sampling by fitting an approximate distribution, is faster but gives no guarantee of being close to the true
posterior.

## 14.6 Hierarchical models

*Level: advanced, with an expert remark.*

### Eight schools

This is a real data set, analysed by Donald Rubin in "Estimation in parallel randomized experiments" (*Journal of
Educational Statistics*, 1981) and made famous by Gelman and coauthors' *Bayesian Data Analysis*. Separate randomised
experiments in eight high schools measured the effect of special coaching programmes on SAT verbal scores (a US college
admissions test). Each school gave an estimated effect $y_j$ (in score points) with a standard error $\sigma_j$, which we
treat as known:

| school | A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|---|
| estimate $y_j$ | 28 | 8 | −3 | 7 | −1 | 1 | 18 | 12 |
| standard error $\sigma_j$ | 15 | 10 | 16 | 11 | 9 | 11 | 10 | 18 |

How large is the effect in school A? Two obvious answers are both unsatisfying.

- **No pooling:** each school on its own. School A: 28, with standard error 15. But the standard errors are large, and
  28 may be mostly luck.
- **Complete pooling:** all schools have the same effect. The precision-weighted mean is
  $\sum (y_j/\sigma_j^2)/\sum (1/\sigma_j^2) = 7.7$, with standard error 4.1. A test of equal effects gives
  $\sum (y_j - 7.7)^2/\sigma_j^2 = 4.7$ on 7 degrees of freedom (p about 0.7), so the data do not contradict equal
  effects. But they do not prove it either; the programmes and schools differed.

### The model

A **hierarchical model** puts the truth in between. Each school has its own true effect $\theta_j$, and the
$\theta_j$ are themselves drawn from a common distribution whose spread is learned from the data:

$$
y_j \mid \theta_j \sim N(\theta_j, \sigma_j^2), \qquad \theta_j \mid \mu, \tau \sim N(\mu, \tau^2), \qquad (\mu, \tau) \sim \text{prior}.
$$

The parameter $\tau$ says how different schools really are. If $\tau = 0$, we are back to complete pooling; as
$\tau \to \infty$, to no pooling.

**Shrinkage, given $\tau$.** For fixed $\mu$ and $\tau$, school $j$ is a normal-normal problem (14.2) with prior
$N(\mu, \tau^2)$ and one observation $y_j$ with variance $\sigma_j^2$. So

$$
E[\theta_j \mid y, \mu, \tau] = \frac{y_j/\sigma_j^2 + \mu/\tau^2}{1/\sigma_j^2 + 1/\tau^2} ,
$$

a precision-weighted average that pulls ("shrinks") each school's estimate towards the common mean, and pulls hardest
on schools with large standard errors. With $\tau = 5$ and $\mu$ at its best estimate for that $\tau$ (7.85), school A's
estimate becomes $(28/225 + 7.85/25)/(1/225 + 1/25) = 9.9$.

**Learning $\tau$.** With flat priors on $\mu$ and $\tau$, as in *Bayesian Data Analysis*, one can integrate out the
$\theta_j$ and $\mu$ exactly and compute the posterior of $\tau$ on a grid. It is broad, with posterior median about 5
and mean about 6.5, and its density is highest at $\tau = 0$: the data cannot tell whether schools differ by a little or
not at all. Averaging the shrinkage formula over this posterior gives the posterior means below (computed for this book
with a grid of $\tau$ values from 0.01 to 40):

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="Eight schools: each school's own estimate on the left, from minus 3 to 28, joined by a line to its hierarchical posterior mean on the right, all between about 5 and 11.5, pulled towards the pooled value 7.7">
  <line x1="110" y1="20" x2="110" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="310" y1="20" x2="310" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <text x="102" y="184.0" text-anchor="end" font-size="11" fill="currentColor">-5</text>
  <line x1="105" y1="180.0" x2="110" y2="180.0" stroke="currentColor"/>
  <text x="102" y="161.1" text-anchor="end" font-size="11" fill="currentColor">0</text>
  <line x1="105" y1="157.1" x2="110" y2="157.1" stroke="currentColor"/>
  <text x="102" y="115.4" text-anchor="end" font-size="11" fill="currentColor">10</text>
  <line x1="105" y1="111.4" x2="110" y2="111.4" stroke="currentColor"/>
  <text x="102" y="69.7" text-anchor="end" font-size="11" fill="currentColor">20</text>
  <line x1="105" y1="65.7" x2="110" y2="65.7" stroke="currentColor"/>
  <text x="102" y="24.0" text-anchor="end" font-size="11" fill="currentColor">30</text>
  <line x1="105" y1="20.0" x2="110" y2="20.0" stroke="currentColor"/>
  <line x1="105" y1="121.9" x2="330" y2="121.9" stroke="#7ccf9a" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="334" y="125.9" font-size="11" fill="currentColor">pooled 7.7</text>
  <line x1="110" y1="29.1" x2="310" y2="105.0" stroke="#9cc9ea" stroke-width="2"/>
  <circle cx="110" cy="29.1" r="3.5" fill="#eea66f"/>
  <circle cx="310" cy="105.0" r="3.5" fill="#eea66f"/>
  <line x1="110" y1="120.6" x2="310" y2="121.0" stroke="#9cc9ea" stroke-width="2"/>
  <circle cx="110" cy="120.6" r="3.5" fill="#eea66f"/>
  <circle cx="310" cy="121.0" r="3.5" fill="#eea66f"/>
  <line x1="110" y1="170.9" x2="310" y2="129.3" stroke="#9cc9ea" stroke-width="2"/>
  <circle cx="110" cy="170.9" r="3.5" fill="#eea66f"/>
  <circle cx="310" cy="129.3" r="3.5" fill="#eea66f"/>
  <line x1="110" y1="125.1" x2="310" y2="122.4" stroke="#9cc9ea" stroke-width="2"/>
  <circle cx="110" cy="125.1" r="3.5" fill="#eea66f"/>
  <circle cx="310" cy="122.4" r="3.5" fill="#eea66f"/>
  <line x1="110" y1="161.7" x2="310" y2="133.8" stroke="#9cc9ea" stroke-width="2"/>
  <circle cx="110" cy="161.7" r="3.5" fill="#eea66f"/>
  <circle cx="310" cy="133.8" r="3.5" fill="#eea66f"/>
  <line x1="110" y1="152.6" x2="310" y2="129.3" stroke="#9cc9ea" stroke-width="2"/>
  <circle cx="110" cy="152.6" r="3.5" fill="#eea66f"/>
  <circle cx="310" cy="129.3" r="3.5" fill="#eea66f"/>
  <line x1="110" y1="74.9" x2="310" y2="108.2" stroke="#9cc9ea" stroke-width="2"/>
  <circle cx="110" cy="74.9" r="3.5" fill="#eea66f"/>
  <circle cx="310" cy="108.2" r="3.5" fill="#eea66f"/>
  <line x1="110" y1="102.3" x2="310" y2="118.3" stroke="#9cc9ea" stroke-width="2"/>
  <circle cx="110" cy="102.3" r="3.5" fill="#eea66f"/>
  <circle cx="310" cy="118.3" r="3.5" fill="#eea66f"/>
  <text x="110" y="200" text-anchor="middle" font-size="11" fill="currentColor">own estimate</text>
  <text x="310" y="200" text-anchor="middle" font-size="11" fill="currentColor">hierarchical</text>
</svg>
</div>

School A's 28 becomes about 11.4, school C's −3 becomes about 6.1; all eight end between 5 and 11.5. The order is kept
(A is still highest), but the spread is far smaller, because the data say much of the spread in the raw estimates is
noise. The posterior intervals stay wide: we have learned that no school's effect is well determined.

### Why shrinkage is right: Stein's paradox

*Expert remark.* Shrinkage is not only a Bayesian taste. In 1956 Charles Stein proved that when estimating three or
more normal means at once, with total squared error as the loss, the obvious estimator (each mean estimated by its own
observation) is **inadmissible**: another estimator has smaller expected total error for every value of the means. James
and Stein (1961) gave an explicit one: for $y_j \sim N(\theta_j, 1)$, $j = 1, \dots, k$ with $k \ge 3$,

$$
\hat\theta_j^{JS} = \left(1 - \frac{k-2}{\sum_i y_i^2}\right) y_j ,
$$

which shrinks every estimate towards 0 (or, in a variant, towards the common mean). The proof uses Stein's identity
$E[(Y - \theta) g(Y)] = E[g'(Y)]$ for $Y \sim N(\theta, 1)$, and is in Lehmann and Casella, chapter 5. Efron and Morris
(1975) showed it in action on batting averages, and explained it as an empirical Bayes method: it is what you get from
a hierarchical model by estimating $\tau$ from the data and plugging it in. The lesson is general: when many related
quantities are estimated at once, borrowing strength across them beats treating each alone. This is why hierarchical
models are standard in small-area estimation, meta-analysis, sports ratings and the analysis of many genes at once
([Chapter 18](18-High-Dimensional-Statistics.md)).

### Practical cautions

Hierarchical posteriors with few groups can be hard for MCMC: when $\tau$ is near 0 the $\theta_j$ are squeezed together,
creating a narrow "funnel" that random-walk and even Hamiltonian samplers explore badly. The usual fix is a
**non-centred parametrisation**, $\theta_j = \mu + \tau \eta_j$ with $\eta_j \sim N(0,1)$, which changes nothing in the
model but much in the geometry. And the prior on $\tau$ matters when there are few groups: Gelman (2006) showed that the
once-popular inverse-gamma "vague" priors on $\tau^2$ can dominate the answer, and recommended flat or half-Cauchy priors
on $\tau$ instead.

## Check yourself

??? question "1. With the box of coins (prior 1/3 each on $p = 0.3, 0.5, 0.7$), you toss twice and get two heads. Find the posterior."

    Prior × likelihood: $\frac13(0.09, 0.25, 0.49)$. The total is $\frac13 \times 0.83$, so the posterior is
    $(0.09, 0.25, 0.49)/0.83 = (0.108, 0.301, 0.590)$. **Check:** the three add to 1 (up to rounding).

??? question "2. Prior Beta(2, 2), data 3 successes in 5 trials. Give the posterior, its mean, and the weight given to the data."

    Posterior Beta(2 + 3, 2 + 2) = Beta(5, 4), mean $5/9 = 0.556$. The weights are $(a+b)/(a+b+n) = 4/9$ on the prior
    mean 0.5 and $n/(a+b+n) = 5/9$ on the sample proportion 0.6. **Check:** $\frac49 \times 0.5 + \frac59 \times 0.6 = 0.222 + 0.333 = 0.556$.

??? question "3. Under the posterior Beta(8, 4), what is the probability that the next two tosses are both heads?"

    $E[p^2 \mid x]$. For Beta($a$, $b$), $E[p^2] = \frac{a(a+1)}{(a+b)(a+b+1)} = \frac{8 \times 9}{12 \times 13} = \frac{72}{156} = 0.462$.
    It is larger than $(2/3)^2 = 0.444$: seeing the first head would raise our estimate of $p$ for the second.

??? question "4. Prior $\mu \sim N(0, 1)$ and one observation $x = 2$ from $N(\mu, 1)$. Find the posterior."

    Precisions $1 + 1 = 2$, so the posterior variance is $1/2$. Mean $\frac12(0/1 + 2/1) = 1$. Posterior $N(1, 1/2)$: halfway
    between prior mean and data, because prior and data are equally precise.

??? question "5. Show that the gamma-Poisson posterior mean is a weighted average of the prior mean and the sample mean."

    $\frac{a+s}{b+n} = \frac{b}{b+n}\cdot\frac{a}{b} + \frac{n}{b+n}\cdot\frac{s}{n}$. The prior counts as $b$ units of
    exposure, the data as $n$.

??? question "6. Find Jeffreys' prior for the Poisson mean and the resulting posterior for counts with total $s$ in $n$ observations. Is it proper?"

    $I(\lambda) = 1/\lambda$, so $\pi_J(\lambda) \propto \lambda^{-1/2}$, which is improper (its integral over
    $(0, \infty)$ diverges). The posterior is $\propto \lambda^{s - 1/2}e^{-n\lambda}$, a Gamma($s + 1/2$, $n$), which is
    proper for every $s \ge 0$ and $n \ge 1$. For the flaw data: Gamma(20.5, 8), mean 2.56.

??? question "7. Explain why, for normal data with known $\sigma$ and a flat prior on $\mu$, the 95% credible and confidence intervals coincide, yet mean different things."

    The posterior is $N(\bar x, \sigma^2/n)$, so the central 95% credible interval is $\bar x \pm 1.96\sigma/\sqrt n$, the
    same numbers as the confidence interval. The credible statement is "given these data and this prior, $\mu$ is in
    the interval with probability 0.95". The confidence statement is "this procedure covers the true $\mu$ in 95% of
    repeated samples". Same numbers, different probability spaces.

??? question "8. A process produced 0 defects in 20 items. With a uniform prior, find the 95% upper credible bound for the defect rate."

    Posterior Beta(1, 21), with $P(p > c \mid x) = (1-c)^{21}$. Setting this to 0.05: $c = 1 - 0.05^{1/21} = 0.133$.

??? question "9. In the Metropolis sampler, why do we never need the marginal likelihood $m(x)$? What would go wrong if the proposal were not symmetric?"

    The acceptance probability uses $\pi(\theta'\mid x)/\pi(\theta\mid x) = \frac{f(x\mid\theta')\pi(\theta')}{f(x\mid\theta)\pi(\theta)}$;
    $m(x)$ appears in both and cancels. With an asymmetric proposal $q(\theta' \mid \theta)$, detailed balance fails
    unless the ratio is multiplied by $q(\theta \mid \theta')/q(\theta' \mid \theta)$ (the Hastings correction, 1970);
    without it the chain converges to the wrong distribution.

??? question "10. In the eight schools model with $\tau = 5$ and $\mu = 7.85$, compute the shrunken estimate for school C ($y = -3$, $\sigma = 16$)."

    $\frac{-3/256 + 7.85/25}{1/256 + 1/25} = \frac{-0.01172 + 0.314}{0.003906 + 0.04} = \frac{0.3023}{0.04391} = 6.9$.
    School C, with the largest-but-one standard error, is pulled almost all the way to the common mean.

??? question "11. Show that updating a Beta($a$, $b$) prior on two batches of data one after the other gives the same posterior as updating once on the combined data."

    After batch 1 ($x_1$ successes in $n_1$): Beta($a + x_1$, $b + n_1 - x_1$). Using that as the prior for batch 2
    gives Beta($a + x_1 + x_2$, $b + n_1 - x_1 + n_2 - x_2$), which is the posterior from $x_1 + x_2$ successes in
    $n_1 + n_2$ trials. In general, independent likelihoods multiply, and multiplication is associative.

## What you learned

- Posterior ∝ likelihood × prior; the posterior answers direct probability questions, and the posterior predictive
  averages over what we do not know.
- Conjugate pairs give exact posteriors: beta-binomial, gamma-Poisson, normal-normal; precisions add and posterior
  means are weighted averages of prior and data.
- A credible interval is a probability statement about the parameter given the data and prior; a confidence interval
  is a property of a procedure. They coincide for normal means with flat priors and agree in large regular samples
  (Bernstein-von Mises).
- No prior is neutral; Jeffreys' prior $\propto \sqrt{I(\theta)}$ is invariant under reparametrisation, and honest
  practice uses prior predictive checks, sensitivity analysis and posterior predictive checks.
- MCMC samples a posterior known only up to a constant; diagnostics (burn-in, trace plots, several chains, $\hat R$,
  effective sample size) detect failure but cannot prove success.
- Hierarchical models learn how similar groups are and shrink noisy estimates towards each other, which Stein's
  paradox shows is better than estimating each alone.

**Next:** [Chapter 15](15-Nonparametric-Methods.md), methods that work without assuming a particular distribution at
all.

## Further reading

- T. Bayes, "An essay towards solving a problem in the doctrine of chances", *Philosophical Transactions of the Royal
  Society* 53, 1763 (communicated by R. Price).
- H. Jeffreys, *Theory of Probability*, Oxford University Press, 1939 (3rd edition 1961), and "An invariant form for
  the prior probability in estimation problems", *Proceedings of the Royal Society A* 186, 1946.
- A. Gelman, J. B. Carlin, H. S. Stern, D. B. Dunson, A. Vehtari and D. B. Rubin, *Bayesian Data Analysis*, 3rd
  edition, CRC Press, 2013. The standard text; the eight schools are in chapter 5.
- D. B. Rubin, "Estimation in parallel randomized experiments", *Journal of Educational Statistics* 6, 1981.
- R. McElreath, *Statistical Rethinking*, 2nd edition, CRC Press, 2020. A gentle, practical course.
- C. P. Robert, *The Bayesian Choice*, 2nd edition, Springer, 2007. The decision-theoretic foundations.
- W. James and C. Stein, "Estimation with quadratic loss", *Proceedings of the Fourth Berkeley Symposium*, 1961, and
  B. Efron and C. Morris, "Data analysis using Stein's estimator and its generalizations", *Journal of the American
  Statistical Association* 70, 1975.
- A. Gelman and D. B. Rubin, "Inference from iterative simulation using multiple sequences", *Statistical Science* 7,
  1992.
- B. Carpenter and others, "Stan: a probabilistic programming language", *Journal of Statistical Software* 76, 2017.
- A. Gelman, A. Jakulin, M. G. Pittau and Y.-S. Su, "A weakly informative default prior distribution for logistic and
  other regression models", *Annals of Applied Statistics* 2, 2008.
- S. B. McGrayne, *The Theory That Would Not Die*, Yale University Press, 2011. A popular history of Bayes' rule.
- On this site: [Bayes' theorem](../../topics/probability/level-8/01-bayes-theorem.md) and
  [Monte Carlo methods](../../topics/probability/level-8/07-monte-carlo.md) (gentler),
  [Bayes' theorem](../probability/04-Bayes-Theorem.md) and [Markov chains](../probability/13-Markov-Chains.md) in the
  Probability book, [Improper integrals](../../uoft/MAT137/unit12.md) (for improper priors), and the
  [Statistics book's contents](index.md).
