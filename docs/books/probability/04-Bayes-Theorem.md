# 4. Bayes' theorem

*A screening test for a disease is 90% accurate on people who have it, and gives few false alarms on people who do not.
Your test comes back positive. How worried should you be? Most people, including many doctors when asked, say "about
90%". For a rare disease the true answer can be under 10%. The gap between those two numbers is the gap between
$P(\text{positive} \mid \text{disease})$ and $P(\text{disease} \mid \text{positive})$, and the tool that turns one into the other is Bayes'
theorem. This chapter proves it, works the medical example in numbers and in pictures, rewrites it in the odds form
that makes evidence easy to combine, uses it to expose a reasoning error that helped send an innocent woman to
prison, shows how to update beliefs one piece of evidence at a time, and ends with one honest page on the two great
schools of statistics that grew from it.*

!!! abstract "In this chapter"

    **You will learn:**

    - Bayes' theorem, with a one-line proof, and its version for several hypotheses
    - why a positive result on an accurate test for a rare condition is often a false alarm (base rates), worked with natural frequencies
    - the odds form: posterior odds equal the likelihood ratio times prior odds, and why evidence then multiplies
    - the prosecutor's fallacy, and the Sally Clark case of 1999 as a documented example
    - how to update beliefs step by step, and why the order of the evidence does not matter
    - what Bayesians and frequentists disagree about, in one honest page

    **You need:** [Chapter 3](03-Conditional-Probability-and-Independence.md) (conditional probability, the
    multiplication rule, the law of total probability, independence). For a gentler version, see the Topics lessons
    ["Given": conditional probability](../../topics/probability/level-6/01-given-two-way-tables.md),
    [Trees with unequal branches](../../topics/probability/level-5/05-unequal-branch-trees.md) and
    [Bayes' theorem](../../topics/probability/level-8/01-bayes-theorem.md).

    **Levels:** 4.1 and 4.2 are beginner; 4.3 and 4.4 are beginner to intermediate; 4.5 is intermediate; 4.6 is a
    discussion with no formulas, readable at any level.

## 4.1 The formula

**A question.** In the factory of §3.3, machines A, B and C make 50%, 30% and 20% of the parts, with defect rates 1%, 2%
and 3%. A part is found to be defective. Which machine most likely made it?

We know the probability of a defect *given* the machine. We want the probability of the machine *given* a defect. That
is the reverse conditional, and getting it is the whole job of Bayes' theorem.

**Theorem 4.1 (Bayes' theorem).** If $P(A) > 0$ and $P(B) > 0$, then

$$
P(B \mid A) = \frac{P(A \mid B)\,P(B)}{P(A)} .
$$

*Proof.* By the multiplication rule, $P(A \cap B)$ equals both $P(B \mid A)\,P(A)$ and $P(A \mid B)\,P(B)$. Set them equal and divide by $P(A)$. $\square$

That is the whole proof. The theorem is easy; what is hard is remembering to use it, and recognising which
probability is which.

Usually the denominator is not given directly, and we expand it with the law of total probability over a partition of
possible causes.

**Theorem 4.2 (Bayes' theorem with a partition).** Let $B_1, \dots, B_n$ be a partition of $\Omega$ with all $P(B_i) > 0$, and let $P(A) > 0$. Then
for each $j$,

$$
P(B_j \mid A) = \frac{P(A \mid B_j)\,P(B_j)}{\sum_{i=1}^{n} P(A \mid B_i)\,P(B_i)} .
$$

*Proof.* Theorem 4.1 with $B = B_j$, and Theorem 3.4 for the denominator. $\square$

### The vocabulary

Bayes' theorem is so often used for learning from evidence that its parts have names. Think of the $B_i$ as **hypotheses**
(possible explanations: "machine A made it", "the patient has the disease") and of $A$ as the **evidence** (what you
observed: "the part is defective", "the test is positive").

- $P(B_j)$ is the **prior** probability of hypothesis $j$: how likely it was before the evidence.
- $P(A \mid B_j)$ is the **likelihood** of the evidence under hypothesis $j$: how well that hypothesis predicted what you saw.
- $P(B_j \mid A)$ is the **posterior** probability: how likely hypothesis $j$ is after the evidence.

In words: **posterior is proportional to likelihood times prior.** The denominator only rescales, so that the posteriors add
up to 1.

### The factory, answered

| machine | prior $P(B_i)$ | likelihood $P(\text{defect} \mid B_i)$ | product | posterior |
|---|---|---|---|---|
| A | 0.5 | 0.01 | 0.005 | $\frac{5}{17} \approx 0.294$ |
| B | 0.3 | 0.02 | 0.006 | $\frac{6}{17} \approx 0.353$ |
| C | 0.2 | 0.03 | 0.006 | $\frac{6}{17} \approx 0.353$ |
| **total** | 1 | | 0.017 | 1 |

A defective part is equally likely to have come from B or C, and least likely from A, even though A makes half of all
parts. The large prior of A is outweighed by its small likelihood. This table layout (priors, likelihoods, products,
normalise) solves every discrete Bayes problem, and you should use it until it is automatic.

### A little history

Thomas Bayes, an English Presbyterian minister with an interest in mathematics, died in 1761. Among his papers his friend
Richard Price found "An Essay towards solving a Problem in the Doctrine of Chances", which Price edited and sent to the
Royal Society; it was published in the *Philosophical Transactions* in 1763. Its problem was the reverse of the usual
one: given how often an event has happened, what can be said about its unknown probability? (Section 4.5 shows a discrete
version.) Pierre-Simon Laplace, apparently unaware of Bayes, published the same principle in much greater generality in
1774, and used it for decades in astronomy and population statistics. For most of the nineteenth century, "Bayesian"
reasoning was simply called "inverse probability", and it was mostly Laplace's.

## 4.2 Medical tests and base rates

**A question.** A disease affects 1% of a population. A screening test has

- **sensitivity** 90%: if you have the disease, it is positive with probability 0.90;
- **specificity** 91%: if you do not, it is negative with probability 0.91 (so it gives a **false positive** with probability 0.09).

A person picked at random tests positive. What is the probability that they have the disease?

### With the formula

Let $D$ be "has the disease" and $+$ be "tests positive". We know $P(D) = 0.01$, $P(+ \mid D) = 0.90$ and $P(+ \mid D^c) = 0.09$. So

$$
P(D \mid +) = \frac{P(+ \mid D)\,P(D)}{P(+ \mid D)\,P(D) + P(+ \mid D^c)\,P(D^c)} = \frac{0.90 \times 0.01}{0.90 \times 0.01 + 0.09 \times 0.99} = \frac{0.009}{0.0981} \approx 0.092 .
$$

About **9%**. More than nine out of ten positive results are false alarms.

### With natural frequencies

The formula is correct, but it hides *why*. Replace probabilities by counts in an imagined group of 10,000 people:

- 1% of them, **100**, have the disease. The test catches 90% of these: **90 true positives**, and misses 10.
- The other **9,900** are healthy. The test wrongly flags 9% of these: **891 false positives**.
- Altogether $90 + 891 = 981$ people test positive, and only 90 of them are ill: $\frac{90}{981} \approx 0.092$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 520 250" role="img" aria-label="Natural frequency tree: 10,000 people split into 100 with the disease and 9,900 without; the 100 split into 90 positive and 10 negative; the 9,900 split into 891 positive and 9,009 negative; the positives are 90 plus 891">
  <rect x="200" y="10" width="120" height="34" rx="6" fill="none" stroke="currentColor"/>
  <text x="260" y="32" text-anchor="middle" font-size="13" fill="currentColor">10 000 people</text>
  <rect x="60" y="90" width="140" height="34" rx="6" fill="#eea66f" stroke="currentColor"/>
  <text x="130" y="112" text-anchor="middle" font-size="13" fill="currentColor">100 disease</text>
  <rect x="320" y="90" width="140" height="34" rx="6" fill="#9cc9ea" stroke="currentColor"/>
  <text x="390" y="112" text-anchor="middle" font-size="13" fill="currentColor">9 900 healthy</text>
  <rect x="10" y="175" width="110" height="34" rx="6" fill="#eea66f" stroke="currentColor" stroke-width="2.5"/>
  <text x="65" y="197" text-anchor="middle" font-size="13" fill="currentColor">90 positive</text>
  <rect x="135" y="175" width="110" height="34" rx="6" fill="none" stroke="currentColor"/>
  <text x="190" y="197" text-anchor="middle" font-size="13" fill="currentColor">10 negative</text>
  <rect x="275" y="175" width="110" height="34" rx="6" fill="#9cc9ea" stroke="currentColor" stroke-width="2.5"/>
  <text x="330" y="197" text-anchor="middle" font-size="13" fill="currentColor">891 positive</text>
  <rect x="400" y="175" width="110" height="34" rx="6" fill="none" stroke="currentColor"/>
  <text x="455" y="197" text-anchor="middle" font-size="13" fill="currentColor">9 009 negative</text>
  <g stroke="currentColor" fill="none">
    <line x1="240" y1="44" x2="150" y2="90"/>
    <line x1="280" y1="44" x2="370" y2="90"/>
    <line x1="110" y1="124" x2="70" y2="175"/>
    <line x1="150" y1="124" x2="185" y2="175"/>
    <line x1="370" y1="124" x2="335" y2="175"/>
    <line x1="410" y1="124" x2="450" y2="175"/>
  </g>
  <g font-size="11" fill="currentColor">
    <text x="168" y="62">1%</text>
    <text x="330" y="62">99%</text>
    <text x="58" y="152">90%</text>
    <text x="172" y="152">10%</text>
    <text x="320" y="152">9%</text>
    <text x="438" y="152">91%</text>
  </g>
  <text x="260" y="238" text-anchor="middle" font-size="13" fill="currentColor">P(disease | positive) = 90 / (90 + 891) ≈ 0.092</text>
</svg>
</div>

Now the reason is plain: **the healthy group is so much bigger that even a small false-positive rate produces many more
false alarms than there are sick people to find.** The proportion of the population with the condition, here 1%, is
called the **base rate** (or **prevalence**), and ignoring it is the **base-rate fallacy**.

The psychologists Gerd Gigerenzer and Ulrich Hoffrage showed in 1995 that people solve problems like this far more often
when they are given natural frequencies ("90 of 100") instead of percentages and conditional probabilities. If you have
to explain a test result to someone, use counts.

### The base rate decides

The same test, with the same sensitivity and specificity, in populations where the disease is more or less common:

| prevalence $P(D)$ | 0.1% | 1% | 10% | 50% |
|---|---|---|---|---|
| $P(D \mid +)$ | 0.010 | 0.092 | 0.526 | 0.909 |

A positive result means very different things in a general screening of healthy people and in a clinic for people who
already have symptoms (where the "prior" is much higher). This is why doctors do not screen everyone for everything: in a
low-risk group, most positives are false and lead to worry, further tests and sometimes harm.

### What the other numbers say

- **A negative result.** $P(D \mid -) = \frac{0.10 \times 0.01}{0.10 \times 0.01 + 0.91 \times 0.99} = \frac{0.001}{0.9019} \approx 0.0011$. A negative result is very reassuring: the risk falls from 1% to
  about 0.1%.
- **A second test.** Suppose a positive person takes a second, independent test of the same kind (independent *given* their
  true status; this is an assumption, often false when both tests react to the same thing). The posterior after the first
  test, $0.0917$, becomes the prior for the second:

$$
P(D \mid +,+) = \frac{0.90 \times 0.0917}{0.90 \times 0.0917 + 0.09 \times 0.9083} \approx 0.502 .
$$

Two positives bring the probability to about one half; §4.3 shows a quicker way to see this.

## 4.3 The odds form

*Level: beginner to intermediate.*

**A question.** In the medical example, every positive test seems to multiply the evidence for disease by the same
factor. Is there a form of Bayes' theorem in which that is exactly true?

### Odds

The **odds** of an event $H$ are

$$
O(H) = \frac{P(H)}{P(H^c)} = \frac{P(H)}{1 - P(H)} .
$$

Odds of 3 (often written "3 to 1") mean $H$ is three times as likely as not: $P(H) = \frac{3}{4}$. To go back, $P(H) = \frac{O}{1 + O}$. Odds run from 0 to
infinity; probability $\frac{1}{2}$ is odds 1 ("evens").

### The theorem

**Theorem 4.3 (Bayes' theorem in odds form).** For a hypothesis $H$ and evidence $E$ with all the probabilities below positive,

$$
\frac{P(H \mid E)}{P(H^c \mid E)} = \frac{P(E \mid H)}{P(E \mid H^c)} \times \frac{P(H)}{P(H^c)} .
$$

In words: **posterior odds = likelihood ratio × prior odds.**

*Proof.* Write Bayes' theorem for $H$ and for $H^c$:
$P(H \mid E) = \frac{P(E \mid H)P(H)}{P(E)}$ and $P(H^c \mid E) = \frac{P(E \mid H^c)P(H^c)}{P(E)}$. Divide the first by the second; the awkward $P(E)$ cancels. $\square$

The number $\Lambda = \frac{P(E \mid H)}{P(E \mid H^c)}$ is the **likelihood ratio** (or **Bayes factor**) of the evidence. It measures how much more probable the
evidence is if $H$ is true than if it is false, and it is the only thing about the evidence that matters for updating
belief in $H$.

**The medical test in odds.** Prior odds of disease: $\frac{0.01}{0.99} = \frac{1}{99}$. Likelihood ratio of a positive test: $\frac{0.90}{0.09} = 10$. Posterior odds:
$\frac{10}{99}$, so $P(D \mid +) = \frac{10}{109} \approx 0.092$. Same answer, and you can do it in your head.

A second positive, independent given disease status, multiplies the odds by 10 again: $\frac{100}{99}$, probability $\frac{100}{199} \approx 0.503$.
(The small difference from §4.2's 0.502 comes from rounding 0.0917 there.) A third gives $\frac{1000}{99}$, probability about 0.91.

**Monty Hall in odds.** You picked door 1, the host opened door 3 (standard rules, §3.5). Compare "car behind 2" with "car
behind 1". Prior odds: 1. Likelihood of "host opens 3": 1 if the car is behind 2 (he must), $\frac{1}{2}$ if it is behind 1 (he could have
opened 2). Likelihood ratio 2, posterior odds 2 to 1: probability $\frac{2}{3}$ for door 2.

### Evidence adds, on the log scale

When several pieces of evidence $E_1, \dots, E_n$ are **conditionally independent** given $H$ and given $H^c$ (that is, independent within each
hypothesis), the likelihood ratios multiply:

$$
O(H \mid E_1, \dots, E_n) = \Lambda_1 \Lambda_2 \cdots \Lambda_n \cdot O(H) .
$$

Taking logarithms turns this product into a sum: each piece of evidence *adds* its "weight" $\log \Lambda_i$ to the log-odds. Evidence
for $H$ has positive weight, evidence against it negative weight, irrelevant evidence ($\Lambda = 1$) weight zero. During the Second
World War, Alan Turing and I. J. Good, breaking codes at Bletchley Park, measured evidence in exactly this way, in units
they called **bans** and **decibans** (a ban is a likelihood ratio of 10; a deciban, a tenth of that on the log scale, was roughly
the smallest change in weight of evidence a person can feel). Good later wrote about the method in his book *Probability and
the Weighing of Evidence* (1950).

The same additive structure is the heart of the "naive Bayes" spam filter: each word in an email has a likelihood ratio
(how much more often it appears in spam than in normal mail), and the filter adds their logarithms, pretending the words
are conditionally independent. The pretence is false, but the method works surprisingly well.

**A warning about conditional independence.** Two tests for the same disease are rarely independent given the disease:
if one misses a case because the patient's condition is unusual, the other may miss it for the same reason. Multiplying
likelihood ratios that are not independent overstates the evidence. This mistake, in a much more serious setting, is the
first error in the next section.

## 4.4 The prosecutor's fallacy

*Level: beginner to intermediate.*

**A question.** At a trial, an expert testifies: "if the defendant were innocent, the chance of this evidence would be
1 in a million." Does that mean the chance that the defendant is innocent is 1 in a million?

No. The expert's number is $P(E \mid \text{innocent})$. The jury needs $P(\text{innocent} \mid E)$. Confusing the two is the **prosecutor's fallacy**
(the name comes from a 1987 paper by the psychologists William Thompson and Edward Schumann, who studied it in mock juries).

### A DNA example

A crime is committed in a city of 2,000,001 people. A DNA trace from the scene matches the defendant. The lab says that a
random person matches with probability 1 in a million. Suppose there is no other evidence at all, so that before the DNA
test every person in the city was equally likely to be the culprit.

- Prior odds that the defendant is guilty: 1 to 2,000,000.
- Likelihood ratio of a match: $\frac{P(\text{match} \mid \text{guilty})}{P(\text{match} \mid \text{innocent})} = \frac{1}{10^{-6}} = 10^6$.
- Posterior odds: $\frac{10^6}{2 \times 10^6} = \frac{1}{2}$, so $P(\text{guilty} \mid \text{match}) = \frac{1}{3}$.

In natural frequencies: among the 2,000,000 innocent people, about 2 will match by chance; with the true culprit, about 3
people in the city match, and the defendant is just one of them. A "one in a million" match, on its own, leaves the
defendant more likely innocent than guilty.

In a real case there is usually other evidence (the defendant was near the scene, had a motive), which raises the prior
odds a great deal, and then the DNA is overwhelming. The point is not that DNA evidence is weak; it is that **the
probability of the evidence given innocence is not the probability of innocence given the evidence**, and the step from
one to the other needs the prior.

There is a mirror-image error, the **defence attorney's fallacy**: "the match only narrows it down to 3 people, so the DNA
is worthless." It is not worthless: it multiplied the odds by a million. It just cannot do the job alone.

### The Sally Clark case

Sally Clark was a solicitor in England. Her first son died in 1996, aged 11 weeks, and her second in 1998, aged 8 weeks.
She was charged with murdering both, and in November 1999 she was convicted.

At the trial, the paediatrician Sir Roy Meadow testified that the chance of two sudden infant deaths (SIDS, "cot deaths")
in a family like hers was about 1 in 73 million. He took a published estimate of about 1 in 8,543 for a single SIDS death in
an affluent, non-smoking family and squared it ($8543^2 \approx 73$ million). The figure was widely reported.

The statistics contained two serious errors, both of which the Royal Statistical Society pointed out in a public statement
in October 2001.

1. **The squaring assumed independence.** Multiplying assumes that one SIDS death in a family tells you nothing about the
   chance of another. But SIDS is thought to have genetic and environmental risk factors shared within a family, so given one
   death, a second is *more* likely than the population rate. The true probability of two natural deaths was much higher
   than 1 in 73 million. (This is the warning at the end of §4.3.)
2. **The prosecutor's fallacy.** Even if two SIDS deaths were that rare, the relevant comparison is with the alternative
   explanation. A double murder of infants by their mother is *also* extremely rare. The evidence (two dead infants) has to be
   weighed by the odds form: the posterior odds of murder versus natural death are the prior odds of a double infant murder
   against a double natural death, times the likelihood ratio of any further medical evidence. A small $P(\text{two deaths} \mid \text{innocent})$
   is not a small $P(\text{innocent} \mid \text{two deaths})$. The mathematician Ray Hill, analysing the data available, argued that before any
   medical evidence is considered, two natural deaths were the *more* likely explanation.

Sally Clark's first appeal, in 2000, failed. Her conviction was quashed on a second appeal in January 2003, mainly because
medical evidence that had not been disclosed to the defence came to light, and she was released after more than three years
in prison. Several other convictions that had depended on similar testimony were later reviewed. She died in 2007.

The lesson of the case, for this book, is narrow and important: **a probability means nothing until you say what it is
conditional on, and an argument from rarity must compare the rarity of the evidence under every explanation, not just under
one.**

## 4.5 Updating step by step

*Level: intermediate.*

**A question.** Evidence usually arrives a piece at a time. Do we have to start over each time, or can today's posterior be
tomorrow's prior?

### Two bags

There are two bags. Bag A holds 3 red balls and 1 blue; bag B holds 1 red and 3 blue. A friend picks a bag by tossing a
fair coin, then draws balls from it *with replacement*, telling you each colour: red, red, blue, red. How sure can you be
that it is bag A?

Use the odds form with $H$ = "bag A". The prior odds are 1. A red ball has likelihood $\frac{3}{4}$ under A and $\frac{1}{4}$ under B: likelihood ratio 3.
A blue ball has likelihood ratio $\frac{1/4}{3/4} = \frac{1}{3}$. Update after each draw:

| draw | likelihood ratio | odds for A | $P(\text{A})$ |
|---|---|---|---|
| (start) | | 1 | 0.5 |
| red | 3 | 3 | 0.75 |
| red | 3 | 9 | 0.9 |
| blue | $\frac{1}{3}$ | 3 | 0.75 |
| red | 3 | 9 | 0.9 |

After the four draws, $P(\text{A}) = 0.9$. Notice that the blue ball exactly cancelled one red ball, and that the final answer depends only on
the *counts* (3 red, 1 blue), not the order: multiplication does not care about order.

### Sequential updating is consistent

**Theorem 4.4.** Suppose evidence $E_1$ and $E_2$ are conditionally independent given each hypothesis $B_i$ of a partition: $P(E_1 \cap E_2 \mid B_i) = P(E_1 \mid B_i)\,P(E_2 \mid B_i)$
for every $i$. Then updating the prior $P(B_i)$ on $E_1$, and then using the result as the prior for an update on $E_2$, gives the same posterior
as updating on $E_1 \cap E_2$ all at once.

*Proof.* Updating on both at once gives, by Theorem 4.2,

$$
P(B_j \mid E_1 \cap E_2) = \frac{P(E_1 \mid B_j)\,P(E_2 \mid B_j)\,P(B_j)}{\sum_i P(E_1 \mid B_i)\,P(E_2 \mid B_i)\,P(B_i)} .
$$

Updating in two steps: after $E_1$ the new prior is $\pi_j = \frac{P(E_1 \mid B_j)P(B_j)}{c}$, where $c = \sum_i P(E_1 \mid B_i)P(B_i)$. Updating on $E_2$ with the
likelihoods $P(E_2 \mid B_i, E_1) = P(E_2 \mid B_i)$ (this is where conditional independence is used: given the hypothesis, $E_1$ says nothing more about $E_2$)
gives

$$
\frac{P(E_2 \mid B_j)\,\pi_j}{\sum_i P(E_2 \mid B_i)\,\pi_i} = \frac{P(E_2 \mid B_j)\,P(E_1 \mid B_j)\,P(B_j)/c}{\sum_i P(E_2 \mid B_i)\,P(E_1 \mid B_i)\,P(B_i)/c} ,
$$

and the $c$'s cancel, leaving the same expression. $\square$

So a Bayesian can process evidence in any order, in batches or one item at a time, and always reach the same beliefs. Without
conditional independence the same is true, provided each step uses the likelihood $P(E_2 \mid B_i, E_1)$ given everything seen so far; the proof
is the chain rule.

### Many hypotheses: how biased is this coin?

A coin may be biased; its probability of heads, $\theta$ (the Greek letter theta), is unknown. To keep the arithmetic finite, suppose
$\theta$ is one of the eleven values $0, 0.1, 0.2, \dots, 1$, and that before any tosses you think all eleven are equally likely. You toss the coin
10 times and get 7 heads and 3 tails (in some order).

For a given $\theta$, the probability of a particular sequence with 7 heads and 3 tails is $\theta^7(1-\theta)^3$ (the tosses are independent given $\theta$). The
prior is the same for every $\theta$, so the posterior is proportional to the likelihood:

$$
P(\theta \mid \text{data}) = \frac{\theta^7(1-\theta)^3}{\sum_{t} t^7(1-t)^3} ,
$$

the sum running over the eleven values $t$.

| $\theta$ | 0.0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1.0 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| posterior | 0 | <0.0001 | 0.0009 | 0.0099 | 0.0467 | 0.1288 | 0.2363 | 0.2932 | 0.2212 | 0.0631 | 0 |

The values 0 and 1 are ruled out completely (a coin that never shows heads cannot show 7). The most probable value is 0.7,
the observed proportion, but the posterior is spread out: ten tosses do not pin the coin down. The fair value 0.5 keeps
probability 0.13.

**What is the probability that the next toss is heads?** By the law of total probability, averaging over the posterior,

$$
P(\text{next is heads} \mid \text{data}) = \sum_{\theta} \theta \, P(\theta \mid \text{data}) \approx 0.667 .
$$

This is *not* 0.7. It is pulled toward the middle, because the posterior still gives weight to values below 0.7.

**Try it in Python.**

```python
from fractions import Fraction as F

thetas = [F(i, 10) for i in range(11)]
prior = [F(1, 11)] * 11
heads, tails = 7, 3

unnorm = [p * t**heads * (1 - t)**tails for p, t in zip(prior, thetas)]
total = sum(unnorm)
post = [u / total for u in unnorm]
for t, p in zip(thetas, post):
    print(float(t), round(float(p), 4))
print("P(next heads) =", float(sum(t * p for t, p in zip(thetas, post))))   # 0.6669...
```

**Laplace's rule of succession.** If, instead of eleven values, $\theta$ may be any number from 0 to 1 with a uniform prior, the same
reasoning (with integrals in place of sums) gives a famous formula: after $s$ heads in $n$ tosses,

$$
P(\text{next is heads} \mid s \text{ heads in } n) = \frac{s + 1}{n + 2} .
$$

For 7 heads in 10 tosses that is $\frac{8}{12} \approx 0.667$, almost exactly our discrete answer. The proof needs the beta integral
$\int_0^1 \theta^a(1-\theta)^b\,d\theta = \frac{a!\,b!}{(a+b+1)!}$, and belongs to Part III; here we only state it. Laplace used it, half seriously, to compute the
probability that the sun will rise tomorrow given that it has risen every day of recorded history, and was criticised then
and since, rightly, for treating the sunrise as a coin of unknown bias.

## 4.6 Bayesian and frequentist: one honest page

*Level: any; there are no formulas here.*

Bayes' theorem itself is not controversial. It is a two-line consequence of the definition of conditional probability, and
every statistician uses it when the prior probabilities are known frequencies, as in the medical test (the prevalence of a
disease is a measured fact). The controversy is about **what may have a probability**, and so about how to learn from data
when the prior is not a known frequency.

**The frequentist position.** Probability is long-run frequency (§1.1, view 2). A coin's bias $\theta$ is a fixed, unknown number, not
a random quantity, so "the probability that $\theta$ is between 0.6 and 0.8" is meaningless. Instead, frequentist methods are judged
by how they behave over many hypothetical repetitions: a procedure for estimating $\theta$ should be close to the truth *most of the
time*, whatever $\theta$ is. The great frequentist methods (confidence intervals, significance tests) were built in the early
twentieth century by Ronald Fisher, Jerzy Neyman and Egon Pearson, partly in reaction against Laplace's free use of
uniform priors.

**The Bayesian position.** Probability is degree of belief (§1.1, view 3), so an unknown $\theta$ *can* have a probability distribution,
describing what you know about it. Learning from data is just Bayes' theorem: prior times likelihood, normalised. The
answer is a full posterior distribution, which says directly what people usually want to know ("given the data, how likely is
it that the treatment works?").

**What each side says about the other, fairly.**

- Bayesians say: frequentist answers are often misread. A "95% confidence interval" does *not* mean "95% probability that the
  true value is inside", although almost everyone reads it that way; and a small p-value is not the probability that the
  hypothesis is false (it is a cousin of the prosecutor's fallacy). Bayesian answers mean what they say.
- Frequentists say: the prior is subjective. Two scientists with different priors reach different conclusions from the same
  data, and a conclusion that depends on the analyst's opinions is not what science should report. Frequentist guarantees hold
  whatever the truth is.

**Where things stand.** Most working statisticians today use both, choosing by the problem. With plenty of data the two
usually agree closely, because the likelihood overwhelms any reasonable prior (as in §4.5, where more tosses would sharpen the
posterior around the true $\theta$ whatever the starting prior, unless the prior ruled the truth out completely). They differ most with
little data, with many unknowns, or when real prior information exists. Computing posteriors for realistic models was
impractical until the 1990s, when Markov chain Monte Carlo methods (Chapter 19) made it routine, and Bayesian methods have
grown greatly since.

This book is about probability, not statistics, so we do not need to take sides: every theorem here holds under either
reading. The future Statistics book on this site will take up estimation and testing properly.

## Check yourself

??? question "1. In the factory example, a part is found to be defective. What is the probability that it came from machine A? Check that the three posteriors add to 1."

    $P(\text{A} \mid \text{defect}) = \frac{0.5 \times 0.01}{0.017} = \frac{0.005}{0.017} = \frac{5}{17} \approx 0.294$. The others are $\frac{6}{17}$ each, and $\frac{5 + 6 + 6}{17} = 1$.

??? question "2. The test of §4.2 is used in a clinic where 10% of patients have the disease. Find $P(D \mid +)$ with natural frequencies."

    Of 1,000 patients, 100 are ill and 90 of these test positive; of the 900 healthy, 9%, that is 81, test positive. So
    $P(D \mid +) = \frac{90}{90 + 81} = \frac{90}{171} \approx 0.526$.

??? question "3. Using odds, how many independent positive tests (each with likelihood ratio 10) are needed to raise a 1% prior above 99%?"

    Prior odds $\frac{1}{99}$; after $n$ positives, $\frac{10^n}{99}$. We need odds above 99 (probability above 0.99), so $10^n > 99^2 = 9801$, which needs $n = 4$.
    *Check:* 3 positives give odds $\frac{1000}{99} \approx 10.1$, probability 0.910; 4 give $\frac{10000}{99} \approx 101$, probability 0.990.

??? question "4. In a city, 85% of taxis are green and 15% are blue. A witness says the taxi in an accident was blue. Tests show the witness identifies colours correctly 80% of the time (for either colour). What is the probability that the taxi was blue?"

    Likelihood ratio of "says blue": $\frac{0.8}{0.2} = 4$. Prior odds of blue: $\frac{15}{85}$. Posterior odds $\frac{60}{85}$, so $P(\text{blue}) = \frac{60}{145} \approx 0.41$. Despite the
    witness, green is more likely. (This problem was made famous by Amos Tversky and Daniel Kahneman's studies of how people
    neglect base rates.)

??? question "5. A DNA profile occurs in 1 person in 10,000. A suspect from a town of 50,001 people matches, and there is no other evidence. Find the probability that the suspect is the source."

    Prior odds 1 to 50,000; likelihood ratio 10,000; posterior odds $\frac{10000}{50000} = \frac{1}{5}$, so the probability is $\frac{1}{6} \approx 0.17$. In counts: about 5
    innocent people in the town match by chance, plus the source.

??? question "6. An email filter knows that the word 'prize' appears in 20% of spam and 1% of normal email, and that half of all email is spam. Given that an email contains 'prize', what is the probability that it is spam? If it also contains 'winner' (10% of spam, 0.5% of normal email), and the words are treated as conditionally independent?"

    Prior odds 1; likelihood ratio $\frac{0.20}{0.01} = 20$; posterior odds 20, probability $\frac{20}{21} \approx 0.952$. With 'winner' too, the odds are multiplied
    by $\frac{0.10}{0.005} = 20$ again: 400, probability $\frac{400}{401} \approx 0.9975$. (Real filters work on log-odds and many words; the independence
    assumption is false but useful.)

??? question "7. A coin is either fair or biased with $P(\text{heads}) = \frac{3}{4}$, each with prior probability $\frac{1}{2}$. It is tossed four times: H, H, T, H. What is the probability that it is the biased coin?"

    Likelihood ratios (biased over fair): $\frac{3/4}{1/2} = \frac{3}{2}$ for a head and $\frac{1/4}{1/2} = \frac{1}{2}$ for a tail. Posterior odds $\left(\frac{3}{2}\right)^3 \cdot \frac{1}{2} = \frac{27}{16}$, so
    $P(\text{biased}) = \frac{27}{43} \approx 0.628$.

??? question "8. Explain in two sentences why '1 in 73 million' was not the probability that Sally Clark was innocent, even if the number had been correct."

    It was (at best) the probability of two natural infant deaths in such a family, that is $P(\text{evidence} \mid \text{innocent})$. The probability of innocence
    given the evidence also depends on how likely the alternative, a double murder by the mother, was, which is also very small, and
    the odds form compares the two.

??? question "9. Prove that $P(A \mid B) > P(A)$ if and only if $P(B \mid A) > P(B)$, when both events have positive probability. What does this say about evidence?"

    $P(A \mid B) > P(A)$ means $\frac{P(A \cap B)}{P(B)} > P(A)$, that is $P(A \cap B) > P(A)P(B)$. Dividing by $P(A)$ instead, the same inequality says $P(B \mid A) > P(B)$. So
    "$B$ is evidence for $A$" (it raises $A$'s probability) holds exactly when "$A$ makes $B$ more likely". In odds language: $B$ raises the odds
    of $A$ exactly when its likelihood ratio is more than 1.

??? question "10. In the two-bag problem of §4.5, you see 10 draws (with replacement) and they include $r$ red and $10 - r$ blue. Show that $P(\text{A})$ depends only on $r$, and find the smallest $r$ for which $P(\text{A}) > 0.99$."

    Each red multiplies the odds by 3, each blue by $\frac{1}{3}$, so the posterior odds are $3^r \cdot 3^{-(10-r)} = 3^{2r - 10}$, a function of $r$ alone. We need
    $3^{2r-10} > 99$; since $3^4 = 81 < 99 < 243 = 3^5$, we need $2r - 10 \ge 5$, so $r \ge 7.5$, that is $r = 8$. *Check:* $r = 8$ gives odds $3^6 = 729$, probability
    $\frac{729}{730} \approx 0.9986$; $r = 7$ gives odds 81, probability $\frac{81}{82} \approx 0.988$.

??? question "11. A rare disease has prevalence 1 in 1,000. A test has sensitivity 99% and false-positive rate 1%. What is $P(D \mid +)$? How small must the false-positive rate be for a positive to mean at least a 50% chance of disease?"

    Prior odds $\frac{1}{999}$, likelihood ratio $\frac{0.99}{0.01} = 99$, posterior odds $\frac{99}{999} = \frac{11}{111}$, probability $\frac{11}{122} \approx 0.090$. For posterior odds at least 1,
    the likelihood ratio $\frac{0.99}{f}$ must be at least 999, so $f \le \frac{0.99}{999} \approx 0.00099$: the false-positive rate must be about 0.1% or lower. For rare
    conditions, specificity matters more than sensitivity.

??? question "12. (Harder.) In the eleven-value coin problem of §4.5, suppose the coin is tossed many more times and the true bias is 0.7. Explain, using the odds form, why the posterior probability of every value other than 0.7 tends to 0."

    Compare $\theta = 0.7$ with another value $t$ that has positive prior. After $n$ tosses with $h$ heads, the posterior odds of $t$ against 0.7 are the prior
    odds times $\left(\frac{t}{0.7}\right)^h\left(\frac{1-t}{0.3}\right)^{n-h}$. Its logarithm is $n\left[\frac{h}{n}\ln\frac{t}{0.7} + \frac{n-h}{n}\ln\frac{1-t}{0.3}\right]$. When $h/n$ is close to 0.7 (the law of large
    numbers, Chapter 7, says it will be), the bracket is close to $0.7\ln\frac{t}{0.7} + 0.3\ln\frac{1-t}{0.3}$, which is negative for $t \ne 0.7$ (by the inequality
    $\ln x < x - 1$, it is less than $0.7(\frac{t}{0.7} - 1) + 0.3(\frac{1-t}{0.3} - 1) = 0$). So the log-odds behave like $n$ times a negative number and tend to $-\infty$: the
    odds tend to 0. The bracket's limit is minus a quantity called the Kullback-Leibler divergence, which reappears in Chapter 18.

## What you learned

- Bayes' theorem: $P(B \mid A) = P(A \mid B)P(B)/P(A)$; with a partition of hypotheses, posterior is proportional to likelihood times prior.
- A table of priors, likelihoods, products and normalised posteriors solves every discrete Bayes problem.
- Base rates matter: for a rare condition, most positives of a good test can be false; natural frequencies make this
  obvious.
- Odds form: posterior odds = likelihood ratio × prior odds; conditionally independent pieces of evidence multiply their
  likelihood ratios, and add on the log scale.
- The prosecutor's fallacy confuses $P(\text{evidence} \mid \text{innocent})$ with $P(\text{innocent} \mid \text{evidence})$; the Sally Clark case shows it, along with a false
  independence assumption.
- Updating step by step gives the same answer as updating all at once, in any order; posteriors become priors.
- Bayesians and frequentists agree on the theorem and disagree on which unknowns may carry probabilities.

**Next:** [Chapter 5](05-Discrete-Random-Variables.md) turns outcomes into numbers: random variables, their
distributions, and the binomial, geometric and Poisson families that model counts.

## Further reading

- Thomas Bayes, "An Essay towards solving a Problem in the Doctrine of Chances", *Philosophical Transactions of the Royal
  Society* 53 (1763).
- Sheldon Ross, *A First Course in Probability* (10th edition, 2019), Chapter 3, Section 3.
- Gerd Gigerenzer and Ulrich Hoffrage, "How to improve Bayesian reasoning without instruction: frequency formats",
  *Psychological Review* 102 (1995), 684 to 704.
- Gerd Gigerenzer, *Reckoning with Risk: Learning to Live with Uncertainty* (2002), on medical tests and the courtroom.
- Ray Hill, "Multiple sudden infant deaths: coincidence or beyond coincidence?", *Paediatric and Perinatal Epidemiology* 18
  (2004), 320 to 326.
- William C. Thompson and Edward L. Schumann, "Interpretation of statistical evidence in criminal trials: the prosecutor's
  fallacy and the defense attorney's fallacy", *Law and Human Behavior* 11 (1987), 167 to 187.
- I. J. Good, *Probability and the Weighing of Evidence* (1950).
- Sharon Bertsch McGrayne, *The Theory That Would Not Die* (2011), a popular history of Bayes' theorem.
- Andrew Gelman and others, *Bayesian Data Analysis* (3rd edition, 2013), for where Bayesian statistics goes next.
- On this site: the Topics lessons [Bayes' theorem](../../topics/probability/level-8/01-bayes-theorem.md),
  [Fractions, decimals and percents](../../topics/probability/level-4/03-fraction-decimal-percent.md),
  [Making predictions](../../topics/probability/level-2/06-making-predictions.md) and
  [The gambler's fallacy and the hot hand](../../topics/probability/level-5/06-gamblers-fallacy.md);
  [Combinatorics, chapter 17](../combinatorics/17-The-Probabilistic-Method.md) for probability used as a proof tool.
