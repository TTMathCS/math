---
title: "Hypothesis tests"
---

# Hypothesis tests

*Statistics and data · level 8, lesson 3 of 7*

## A question to start

The story goes that at a farm research station in England in the 1920s, a scientist named Muriel Bristol claimed she could taste whether the
milk had been poured into a cup before the tea or after it. The statistician Ronald Fisher designed a test. He
prepared 8 cups, 4 of each kind, in a random order, and asked her to pick out the 4 milk-first cups.

Suppose she has no special ability at all and is simply guessing. How likely is it that she picks all 4 correctly
anyway? If that chance is tiny and she does it, we have good reason to believe her. That is the whole idea of a
hypothesis test, and this lesson builds it carefully.

(The answer: there are $\binom{8}{4} = 70$ ways to choose 4 cups from 8, and only one is completely right, so a pure
guesser succeeds with probability $\dfrac{1}{70} \approx 0.014$. The story says she got them all right.)

## The idea

### Arguing from "nothing is going on"

A hypothesis test is an argument with a fixed shape, a bit like a proof by contradiction, but with chance instead of
certainty.

1. **Assume nothing special is going on.** This assumption is the **null hypothesis**, $H_0$ ("H-nought"). For the
   tea: she is guessing. For a coin: it is fair, $p = 0.5$. For a medicine: it works no better than a dummy pill.
2. **State what you suspect instead**: the **alternative hypothesis** $H_a$. She can taste the difference; the coin
   favours heads; the medicine helps.
3. **Collect data and measure how far they are from what $H_0$ predicts**, usually with a z-score called the **test
   statistic**.
4. **Ask how surprising the data would be if $H_0$ were true.** This is the **p-value**.
5. **Decide.** A small p-value means: either $H_0$ is true and something rare happened, or $H_0$ is false. We then say
   the data give evidence against $H_0$.

<figure class="sketch"><span class="ai-tag">AI-created</span><svg viewBox="0 0 640 370" role="img" aria-labelledby="sk-m-tea-t"><title id="sk-m-tea-t">Eight cups of tea, four poured milk first and four tea first, in random order: of the 70 ways to choose four, only one is all right, so a guesser succeeds with chance 1 in 70</title><defs><filter id="sk-m-tea-pen"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="3.2"/></filter><filter id="sk-m-tea-paper"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="7"/><feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 .10 0"/></filter><pattern id="sk-m-tea-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="7" stroke="#8a4a2a" stroke-width="1.1" opacity=".55"/></pattern><pattern id="sk-m-tea-dots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r="1" fill="#8a4a2a" opacity=".5"/><circle cx="6.5" cy="7" r=".8" fill="#8a4a2a" opacity=".4"/></pattern><marker id="sk-m-tea-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L9 5L1 9" fill="none" stroke="#3a2a1e" stroke-width="1.6" stroke-linecap="round"/></marker></defs><rect width="640" height="370" filter="url(#sk-m-tea-paper)"/><g filter="url(#sk-m-tea-pen)"><text x="30" y="44" class="h">Milk first or tea first?</text><path class="p room" d="M60 110 L104 110 L98 160 L66 160Z"/><path class="p" d="M104 120 q14 6 0 22"/><path class="p rust" d="M126 110 L170 110 L164 160 L132 160Z"/><path class="p" d="M170 120 q14 6 0 22"/><path class="p rust" d="M192 110 L236 110 L230 160 L198 160Z"/><path class="p" d="M236 120 q14 6 0 22"/><path class="p room" d="M258 110 L302 110 L296 160 L264 160Z"/><path class="p" d="M302 120 q14 6 0 22"/><path class="p room" d="M324 110 L368 110 L362 160 L330 160Z"/><path class="p" d="M368 120 q14 6 0 22"/><path class="p rust" d="M390 110 L434 110 L428 160 L396 160Z"/><path class="p" d="M434 120 q14 6 0 22"/><path class="p room" d="M456 110 L500 110 L494 160 L462 160Z"/><path class="p" d="M500 120 q14 6 0 22"/><path class="p rust" d="M522 110 L566 110 L560 160 L528 160Z"/><path class="p" d="M566 120 q14 6 0 22"/><text x="60" y="196" class="s">8 cups in a random order, 4 of each kind</text><text x="60" y="250" class="l">Ways to choose 4 cups from 8: 70.</text><text x="60" y="276" class="l">Only one of them is all right.</text><text x="60" y="320" class="s">A pure guesser picks all 4 correctly with chance 1/70 ≈ 0.014.</text><text x="60" y="344" class="s">If she does it, "she is only guessing" becomes hard to believe.</text></g></svg><figcaption>Sketched for this page from Fisher's test above.</figcaption></figure>

### The p-value, carefully

> The **p-value** is the probability, **assuming $H_0$ is true**, of getting data at least as extreme as the data
> actually observed.

"At least as extreme" means: as far from what $H_0$ predicts, or further, in the direction(s) that $H_a$ cares about.

- If $H_a$ says "bigger" (the coin favours heads), extreme means "this many heads or more". That is a **one-sided**
  test.
- If $H_a$ says "different" (the coin is unfair in either direction), extreme means "this far from 50 in either
  direction". That is a **two-sided** test, and its p-value is double the one-sided one (for a symmetric
  distribution).

A small p-value says: "if nothing were going on, results like these would be rare." A large p-value says: "results
like these happen often by chance alone, so they are not evidence of anything."

### What the p-value is not

- It is **not** the probability that $H_0$ is true. It is calculated by **assuming** $H_0$ is true. (The probability
  that a hypothesis is true needs Bayes' theorem and a starting belief; see
  [Probability, level 8](../../probability/level-8/01-bayes-theorem.md).)
- It is **not** the size or the importance of an effect. A huge sample can make a tiny, useless difference give a tiny
  p-value.
- A large p-value does **not** prove $H_0$. It means "not enough evidence against it". Absence of evidence is not
  evidence of absence, especially with a small sample.

### Why 0.05? A convention, not a law

Many studies call a result **statistically significant** when $p < 0.05$, and the cut-off is called the
**significance level** $\alpha$ ("alpha"). Fisher suggested 1 in 20 in the 1920s as a convenient line for deciding when
a result deserves a second look. Nothing in mathematics makes 0.05 special: $p = 0.049$ and $p = 0.051$ are almost the
same evidence. Particle physicists, who test enormous numbers of possibilities, ask for about 3 in 10 million (a
z-score of 5) before announcing a discovery. Good practice is to report the p-value itself, not only "significant" or
"not significant".

### Two ways to be wrong

| | $H_0$ really true | $H_0$ really false |
| --- | --- | --- |
| Reject $H_0$ | **Type I error** (false alarm) | correct |
| Do not reject $H_0$ | correct | **Type II error** (missed effect) |

If you reject whenever $p < 0.05$, then when $H_0$ is true you raise a false alarm 5% of the time: $\alpha$ is the
Type I error rate. Making $\alpha$ smaller makes false alarms rarer but missed effects more common. A larger sample
reduces both.

### The multiple-testing trap

Test 20 things that all have no real effect, each at $\alpha = 0.05$. The chance that **at least one** looks
significant is $1 - 0.95^{20} \approx 0.64$. Search through enough comparisons (every food against every illness)
and "significant" findings appear by chance alone. Honest studies state their hypothesis **before** collecting the
data and report every test they ran.

## Worked examples

**1. A coin.** A coin lands heads 60 times in 100 flips. Is it fair?

- $H_0$: $p = 0.5$. $H_a$: $p \ne 0.5$ (two-sided).
- Under $H_0$ the number of heads has mean $100 \times 0.5 = 50$ and standard deviation
  $\sqrt{100 \times 0.5 \times 0.5} = 5$. The observed 60 is $z = \dfrac{60 - 50}{5} = 2$.
- p-value: the chance of 60 or more heads, or 40 or fewer. The exact binomial calculation (technology) gives
  $P(X \ge 60) \approx 0.028$, so two-sided $p \approx 0.057$. (The plain normal estimate $2 \times 0.023 = 0.046$ is
  a bit low, because 100 flips is a whole-number count; the "continuity correction" in
  [Probability, level 8](../../probability/level-8/04-normal-approximation.md) fixes this and gives 0.057 too.)
- Conclusion: $p \approx 0.057$. Results this lopsided happen about 6% of the time with a fair coin. That is weak
  evidence, and by the 5% convention not significant. With 61 heads the p-value would be 0.035. One flip moves the
  verdict across the line: a reminder that the line is a convention.

**2. The tea test.** $H_0$: she is guessing. The p-value of "all 4 right" is $\dfrac{1}{70} \approx 0.014$, below
0.05. If she had got only 3 of the 4 right, "at least as extreme" would be "3 or 4 right". There are
$\binom{4}{3}\binom{4}{1} = 16$ ways to get exactly 3 right, so $p = \dfrac{16 + 1}{70} \approx 0.24$: not convincing
at all. This is why Fisher's design needed a perfect score.

**3. A suspicious die.** A die is rolled 120 times and shows 30 sixes. Does it favour six?

- $H_0$: $p = \tfrac{1}{6}$. $H_a$: $p > \tfrac{1}{6}$ (one-sided; we suspected sixes in advance).
- Expected sixes: $120 \div 6 = 20$; standard deviation
  $\sqrt{120 \times \tfrac{1}{6} \times \tfrac{5}{6}} \approx 4.08$; $z = \dfrac{30 - 20}{4.08} \approx 2.45$.
- Exact p-value (technology): $P(X \ge 30) \approx 0.013$. Strong evidence the die favours six.

**4. A filling machine.** A machine is set to fill bags with mean 500 g; $\sigma = 2.5$ g. A sample of 40 bags has
mean 500.9 g. Has the mean drifted?

- $H_0$: $\mu = 500$. $H_a$: $\mu \ne 500$.
- Standard error $2.5 / \sqrt{40} \approx 0.395$; $z = 0.9 / 0.395 \approx 2.28$.
- Two-sided p-value: $2 \times (1 - 0.9887) \approx 0.023$. Evidence that the mean has drifted. Whether 0.9 g
  matters is a business question, not a statistics one.

**5. Significant but tiny.** A website tests two button colours on a million visitors each. The new colour gets
50.2% clicks against 50.0%. The test gives $z = 4$ and $p \approx 0.00006$: extremely significant. But the difference
is 0.2 percentage points. **Statistical significance** says the difference is probably real; it does not say the
difference is big enough to care about. Report the size of the effect, ideally with a confidence interval.

## Try it

1. Write $H_0$ and $H_a$ for: (a) a new fertiliser makes plants taller than the old mean of 30 cm; (b) a dice game's
   die is not fair for the number 1; (c) a claim that 80% of customers are satisfied, which you think is too high.
2. A test gives $p = 0.003$. Explain in one sentence what this number means.
3. A coin gives 56 heads in 100 flips. Find the z-score. Without exact calculation, is this good evidence of
   unfairness?
4. In the tea test, what would the p-value be if she had to identify 5 milk-first cups among 10 (5 of each) and got
   them all right?
5. A study tests 40 different foods for a link with headaches, at $\alpha = 0.05$, and none truly has any effect.
   How many "significant" links would you expect by chance?
6. A small study of 12 people finds $p = 0.30$ for a new medicine. A newspaper says "Study proves the medicine does
   not work." What is wrong?
7. Explain the difference between a Type I and a Type II error in a test for a disease in a patient, where $H_0$ is
   "the patient is healthy".
8. True or false: "$p = 0.02$ means there is a 2% chance that the null hypothesis is true." Explain.

??? note "Answers"
    1. (a) $H_0$: $\mu = 30$; $H_a$: $\mu > 30$. (b) $H_0$: $p = \tfrac{1}{6}$; $H_a$: $p \ne \tfrac{1}{6}$.
       (c) $H_0$: $p = 0.8$; $H_a$: $p < 0.8$.
    2. If the null hypothesis were true, data at least as extreme as ours would happen only about 3 times in 1000.
    3. $z = (56 - 50) / 5 = 1.2$. Results at least this far from 50 happen roughly 20% to 25% of the time with a fair
       coin, so this is **not** good evidence.
    4. $\binom{10}{5} = 252$ ways, one completely right: $p = 1/252 \approx 0.004$.
    5. $40 \times 0.05 = 2$ false "links" on average (and the chance of at least one is $1 - 0.95^{40} \approx 0.87$).
    6. A large p-value means the study did not find good evidence of an effect. With only 12 people, it could easily
       miss a real effect (a Type II error). "Not shown to work" is not "shown not to work".
    7. Type I: telling a healthy patient they have the disease (false alarm). Type II: telling a sick patient they are
       healthy (missed disease). Which is worse depends on the disease and the treatment.
    8. **False.** The p-value is computed assuming $H_0$ is true; it is the chance of such extreme data **given**
       $H_0$, not the chance of $H_0$ given the data.

## Common mistake

**Reading the p-value as the chance the null hypothesis is true.** It is the other way round: the chance of the data
(or more extreme) if the null hypothesis were true.

**Treating 0.05 as a cliff.** $p = 0.049$ is not strong proof and $p = 0.051$ is not proof of nothing. Report the
p-value and the size of the effect, and let readers judge.

## Where it leads

- Back: [Margin of error and confidence intervals](02-confidence-intervals.md) · Next: [Experiments versus observational studies](04-experiments-studies.md)
- [Level 8 page](index.md) · [Statistics topic page](../index.md)
- Counting the ways to choose cups: [Counting](../../counting/index.md). Binomial probabilities:
  [Probability, level 7: the binomial distribution](../../probability/level-7/04-binomial-distribution.md).
- Proof by contradiction, the certain cousin of this argument: [Logic](../../logic/index.md) and
  [MAT137 Unit 1 (logic, sets and proofs)](../../../uoft/MAT137/unit01.md).
