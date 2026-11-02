---
title: "Experiments versus observational studies"
---

# Experiments versus observational studies

*Statistics and data · level 8, lesson 4 of 7*

## A question to start

For years, large studies found that women who took hormone pills after menopause had **fewer** heart attacks than
women who did not. Doctors recommended the pills partly for that reason. Then, around 2002, a large randomised trial,
in which a coin-toss-like process decided who got the pills, found no protection at all, and some extra risks.

The early studies were not careless and their arithmetic was right. So what went wrong? The women who chose to take
the pills were, on average, healthier and better off in many ways to begin with. The pills were getting the credit
for the women's other advantages. This lesson explains the difference between watching and intervening, and why only
one of them can, on its own, show cause and effect.

## The idea

### Two ways to get data about cause

- In an **observational study**, researchers **observe** and record what people (or animals, or places) already do,
  without changing anything. Surveys, health records and most data about society are observational.
- In an **experiment**, researchers **impose** a treatment: they decide who gets what, and then measure the result.

Vocabulary for experiments:

- The **subjects** (or experimental units) are those the treatments are applied to.
- The **explanatory variable** (or **factor**) is what the researchers change; its values are the **treatments**.
- The **response variable** is what they measure afterwards.

### Confounding: why watching is not enough

In [level 6](../level-6/05-correlation-causation.md) you met **lurking variables**: hidden variables that affect
both the explanatory and the response variable. When a lurking variable is mixed up with the explanatory variable so
that you cannot separate their effects, the two are **confounded**.

In the hormone studies, health-consciousness and income were confounded with taking the pills: the women who took them
differed in many ways, and any of those ways could explain the fewer heart attacks. Statisticians can adjust for
confounders that they **measured** (age, smoking, income), but never for those they did not think of or could not
measure.

### Random assignment: the key idea

In a good experiment the subjects are split into groups **by chance**: drawing names from a hat, or a computer's
random numbers. This is **random assignment**, and it is the single most important idea in the design of
experiments.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 560 210" role="img" aria-label="Flow of a randomised controlled experiment: volunteers are split by random assignment into group 1, which gets the new treatment, and group 2, which gets a placebo; then the results of the two groups are compared">
  <defs><marker id="ah84" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
  <rect x="10" y="70" width="100" height="50" rx="8" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <text x="60.0" y="99.0" font-size="12" text-anchor="middle" fill="currentColor">volunteers</text>
  <rect x="150" y="70" width="100" height="50" rx="8" fill="#7ccf9a" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <text x="200.0" y="92.0" font-size="12" text-anchor="middle" fill="currentColor">random</text>
  <text x="200.0" y="108.0" font-size="12" text-anchor="middle" fill="currentColor">assignment</text>
  <rect x="290" y="15" width="120" height="50" rx="8" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <text x="350.0" y="37.0" font-size="12" text-anchor="middle" fill="currentColor">group 1:</text>
  <text x="350.0" y="53.0" font-size="12" text-anchor="middle" fill="currentColor">new treatment</text>
  <rect x="290" y="125" width="120" height="50" rx="8" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <text x="350.0" y="147.0" font-size="12" text-anchor="middle" fill="currentColor">group 2:</text>
  <text x="350.0" y="163.0" font-size="12" text-anchor="middle" fill="currentColor">placebo</text>
  <rect x="450" y="70" width="100" height="50" rx="8" fill="#7ccf9a" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <text x="500.0" y="92.0" font-size="12" text-anchor="middle" fill="currentColor">compare</text>
  <text x="500.0" y="108.0" font-size="12" text-anchor="middle" fill="currentColor">results</text>
  <line x1="110" y1="95" x2="148" y2="95" stroke="currentColor" stroke-width="1.5" marker-end="url(#ah84)"/>
  <line x1="250" y1="88" x2="288" y2="45" stroke="currentColor" stroke-width="1.5" marker-end="url(#ah84)"/>
  <line x1="250" y1="102" x2="288" y2="145" stroke="currentColor" stroke-width="1.5" marker-end="url(#ah84)"/>
  <line x1="410" y1="40" x2="448" y2="85" stroke="currentColor" stroke-width="1.5" marker-end="url(#ah84)"/>
  <line x1="410" y1="150" x2="448" y2="105" stroke="currentColor" stroke-width="1.5" marker-end="url(#ah84)"/>
  <text x="350.0" y="198.0" font-size="11" text-anchor="middle" fill="currentColor">blind: nobody knows who is in which group until the end</text>
</svg>
</div>

Why does it work? Chance does not care about anything. Every characteristic of the subjects, measured or not, known or
unknown (fitness, genes, mood, diet), ends up spread roughly evenly between the groups. Then the groups differ
systematically in **only one** way: the treatment. If the outcomes differ by more than chance alone would produce
(a hypothesis test, last lesson), the treatment must be the cause.

The balance is only approximate and improves with group size. Suppose 10 of 20 volunteers exercise a lot, and you
randomly put 10 volunteers in each group. The number of exercisers in group 1 has the hypergeometric distribution
(see [Probability, level 7](../../probability/level-7/06-hypergeometric-distribution.md)): it is 4, 5 or 6 with
probability about 82%, and as lopsided as 8 or more in one group with probability only about 2.3%. With 200 volunteers
(100 exercisers), a split worse than 60 to 40 has probability under 1%.

### The other parts of a good experiment

- **Control group.** A group that gets no treatment, the old treatment, or a **placebo**, so that there is something to
  compare with. Without it, you cannot tell the treatment's effect from what would have happened anyway (many
  illnesses get better on their own).
- **Placebo.** A dummy treatment that looks the same as the real one: a sugar pill, a salt-water injection. People
  often feel better just because they are being treated; this is the **placebo effect**, and a placebo group lets you
  subtract it.
- **Blinding.** In a **single-blind** experiment the subjects do not know their group. In a **double-blind** experiment
  neither the subjects nor the people measuring the results know. This stops expectations from shaping the results or
  the measurements.
- **Replication.** Use enough subjects that chance differences average out; and the whole experiment should be
  repeatable by others.
- **Blocking** (optional). If you know a variable matters (say, sex or age), first split subjects into blocks by that
  variable, then randomise within each block. It is stratified sampling (level 5) applied to experiments.

### What observational studies are good for

Experiments are not always possible or ethical. Nobody may randomly assign people to smoke for twenty years. The case
against smoking was built from observational studies, starting with the work of Richard Doll and Austin Bradford Hill
around 1950. The evidence became convincing because many different studies agreed, the effect was large, heavier
smokers had more risk (a dose–response pattern), quitting lowered the risk, and laboratory work explained a mechanism.
Strong causal conclusions from observational data are possible, but they need this kind of many-sided evidence, not
one correlation.

### Two classic studies

- **James Lind, 1747.** On a ship, the naval surgeon Lind took 12 sailors with scurvy, as alike as he could find, and
  gave pairs of them six different additions to their diet. The two given oranges and lemons recovered fastest. It
  was a controlled comparison, though tiny and not randomised.
- **The 1954 polio vaccine trial.** In the United States, hundreds of thousands of children were randomly given
  either the Salk vaccine or a salt-water placebo, in a double-blind design. The polio rate in the vaccine group was
  far lower (about 28 cases per 100 000 against 71 per 100 000 in the placebo group), and the vaccine was approved the
  next year.

## Worked examples

**1. Which kind of study?** (a) Researchers compare the reading scores of children whose parents read to them daily
with those of children whose parents do not. (b) Researchers randomly assign 200 classrooms to a new reading program
or the usual one, and compare scores at the end of the year.

(a) is **observational**: the researchers did not decide which parents read. (b) is an **experiment**: the
researchers assigned the treatment, at random.

**2. Finding confounders.** A study finds that people who drink a glass of red wine daily live longer. Suggest
possible confounders.

Daily moderate wine drinkers may on average be wealthier, have better access to healthcare and eat differently. Also,
the "non-drinkers" group may include people who stopped drinking because they were already ill. Each of these could
explain longer life without the wine doing anything.

**3. Designing an experiment.** Does a new sports drink improve 1 km running times? Design an experiment with 40
volunteers.

- Record each volunteer's usual 1 km time (useful for blocking or for comparing improvement).
- Randomly assign 20 to the sports drink and 20 to a placebo drink that looks and tastes the same (number the
  volunteers 1 to 40 and use a random number generator to choose 20).
- Double-blind: drinks are in identical bottles labelled only with codes; the timers do not know who drank what.
- Everyone runs 1 km after drinking, under the same conditions.
- Compare the mean improvement of the two groups, with a hypothesis test or a confidence interval for the
  difference.

**4. A better design: each subject is their own control.** Since runners differ a lot, a **matched-pairs** design is
stronger: each volunteer runs twice, on two days, once with each drink, in a random order. Comparing each runner with
themselves removes the differences between runners.

**5. What a study can conclude.** A survey finds that teenagers who sleep more than 8 hours have higher marks. Can
we conclude that more sleep causes higher marks?

No, it is observational. Students with more sleep may differ in other ways (less part-time work, less screen time,
more support at home). It could even run partly backwards (students who are doing well may feel less stress and sleep
better). The survey is a reason to run an experiment, not a proof.

## Try it

1. Observational study or experiment? (a) A doctor checks the records of 5000 patients to see whether those who took
   vitamin D had fewer colds. (b) A farmer plants a new seed in 10 randomly chosen fields and the old seed in 10 others.
   (c) A poll asks people how many hours of television they watch.
2. Name the explanatory variable, the response variable and the treatments in question 1(b).
3. Why is a placebo group needed when testing a new headache pill?
4. A school lets students choose whether to join a new study-skills program. At the end of the year, those who joined
   have higher marks. Give two reasons this does not show that the program works.
5. Explain why double-blinding matters when the response is "how much pain do you feel, from 0 to 10?"
6. With 10 exercisers among 20 volunteers split randomly 10 and 10, which split of exercisers between the groups is
   the most likely? Explain why bigger experiments balance better.
7. Explain why it would be unethical to run an experiment on whether smoking causes lung disease, and what kind of
   evidence was used instead.

??? note "Answers"
    1. (a) Observational: nobody was assigned vitamin D. (b) Experiment, with random assignment. (c) Observational (a
       survey).
    2. Explanatory variable: type of seed. Response: the crop yield (or plant growth). Treatments: new seed and old
       seed.
    3. People often report feeling better after taking any pill, and headaches often pass on their own. A placebo
       group shows how much improvement happens without the real medicine; the pill's effect is the extra improvement
       beyond that.
    4. Students who chose to join may be more motivated, or have more support at home (confounding by self-selection).
       And there is no random assignment, so the groups may differ in many ways besides the program. (Also: no
       placebo-like control, and students may have worked harder because they knew they were in a program.)
    5. Pain ratings are subjective. If subjects know they got the real drug, they may expect less pain and report less;
       if the person recording knows, they might, without meaning to, encourage some answers. Blinding removes both.
    6. 5 and 5 is the most likely (about 34%). With more subjects, the proportion in each group stays close to half
       with very high probability: the chance differences shrink relative to the group size, like the
       $\sigma / \sqrt{n}$ law.
    7. Assigning people to smoke would knowingly expose them to serious harm. Instead, many observational studies were
       combined: large effects, dose–response (more smoking, more disease), lower risk after quitting, agreement across
       countries and study types, and laboratory evidence of how smoke damages cells.

## Common mistake

**Concluding cause from an observational study.** "People who do X have more Y" is a correlation. Without random
assignment, a confounder may be doing the work. Look for the words "randomly assigned" before believing "X causes Y".

**Thinking random assignment and random sampling are the same.** Random **sampling** (choosing who is studied) lets
you generalise to a population. Random **assignment** (choosing who gets which treatment) lets you conclude cause. A
study can have one, both or neither.

## Where it leads

- Back: [Hypothesis tests](03-hypothesis-tests.md) · Next: [Simpson's paradox](05-simpsons-paradox.md)
- [Level 8 page](index.md) · [Statistics topic page](../index.md)
- Lurking variables, first look: [Level 6: correlation is not causation](../level-6/05-correlation-causation.md).
  Choosing samples: [Level 5: sampling methods](../level-5/05-sampling-methods.md).
- Simulating random assignment: [Probability, level 8: Monte Carlo methods](../../probability/level-8/07-monte-carlo.md).
