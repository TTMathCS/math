---
title: "A full investigation"
---

# A full investigation

*Statistics and data · level 8, lesson 7 of 7*

## A question to start

You have now met almost every tool a statistician uses in school and first-year university: graphs, averages and
spread, distributions and z-scores, correlation and regression, samples, confidence intervals, tests and experiments.
In real work they are never used one at a time. Someone has a question, and the tools are picked up in an order that
the question decides.

So here is the last question of the topic: if you had two weeks and a real question, how would you go from "I wonder
whether..." to a conclusion you could defend in front of a sceptical audience? This lesson gives the shape of a full
investigation and walks through one from start to finish.

## The idea

### The investigation cycle

Statistics teachers in many countries use a five-stage cycle, often called **PPDAC**:

1. **Problem.** Turn a vague interest into a precise, answerable question. Decide the population, the variables and
   how each will be measured.
2. **Plan.** Decide how to get data: an existing data set (secondary data) or your own (primary data); a survey, an
   observational study or an experiment; the sample size and how the sample will be chosen.
3. **Data.** Collect the data, record them in a tidy table with a codebook, and clean them with a log (level 7).
4. **Analysis.** Graph first. Then summarise, model and, where it fits, estimate or test.
5. **Conclusion.** Answer the question in plain words, give the size of the effect and its uncertainty, and state the
   **limits**: what the data cannot show.

The cycle often loops: the conclusion raises a new, sharper question.

### Problem: what makes a good question

A good statistical question:

- is about a **population** or a process, not about one case ("Do students in our school who sleep more react faster?",
  not "Do I react faster after a long sleep?");
- names **variables that can be measured** (hours of sleep, reaction time in milliseconds);
- expects **variability** in the answers (everyone's answer would not be the same);
- is **small enough** to answer with the time and data you have.

It helps to say in advance what kind of question it is: a **summary** (what is typical?), a **comparison** (do two
groups differ?), a **relationship** (do two variables move together?) or a **cause** (does changing X change Y?). A
cause question needs an experiment.

### Plan: choose the design that fits the question

- A summary or comparison of a population needs a **random sample** of it, or a census.
- A relationship needs paired measurements on the same cases.
- A cause needs **random assignment** (lesson 4), a control group, and blinding if possible.

Decide in advance: what exactly will be measured, with which instrument, by whom, and how many cases you need. Write
down your hypothesis and the main analysis **before** you see the data (lesson 3). That protects you from finding
patterns that are only chance.

### Analysis: a reliable order

1. **Graph each variable alone** (histogram, box plot, bar graph) and look at shape and outliers.
2. **Summarise** with the right measures for the shape (mean and SD, or median and IQR).
3. **Graph the relationship** (side-by-side box plots, scatter plot, two-way table).
4. **Model**: a regression line, a comparison of means, a proportion.
5. **Check the model** (residual plot; normal shape where needed).
6. **Measure the uncertainty**: a confidence interval, or a test, or a simulation.

### Conclusion: state the limits

A good conclusion includes:

- the **answer**, in words someone outside the project understands;
- the **size** of the effect (not only "significant");
- the **uncertainty** (a margin of error or interval);
- the **scope**: which population the result applies to (only the one that was sampled);
- whether **cause** can be claimed (only with random assignment);
- what **could be wrong**: bias, measurement problems, small samples, lurking variables;
- what you would **do next**.

## Worked example: sleep and reaction time

Here is a complete small investigation (with made-up but realistic data) of the kind a student could carry out.

### Problem

"Among grade 12 students at our school, is more sleep the night before linked to faster reaction times?" This is a
**relationship** question. Population: grade 12 students at the school. Variables: hours of sleep the previous night
(self-reported, to the nearest half hour) and reaction time in milliseconds.

### Plan

- **Measuring reaction time.** The ruler-drop test: a partner holds a 30 cm ruler above your open hand and lets go
  without warning; you catch it and the distance $d$ it fell is read off. A falling object covers
  $d = \tfrac{1}{2} g t^2$, with $g = 9.8$ m/s², so the time is $t = \sqrt{2d/g}$. A catch at 25 cm means
  $t = \sqrt{0.5/9.8} \approx 0.226$ s, or 226 ms. Each student does five drops; we record the median of the five,
  to reduce the effect of one slip.
- **Sample.** 16 students chosen at random from the grade 12 class lists (a simple random sample). All tests at the
  same time of day (first period), to avoid the time of day being a lurking variable.
- **Hypothesis, written in advance**: more sleep goes with shorter reaction times (a negative correlation).

### Data

| sleep (h) | 5.5 | 6.0 | 6.0 | 6.5 | 6.5 | 7.0 | 7.0 | 7.0 | 7.5 | 7.5 | 8.0 | 8.0 | 8.5 | 8.5 | 9.0 | 9.5 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| reaction (ms) | 268 | 255 | 262 | 250 | 241 | 247 | 236 | 252 | 230 | 238 | 229 | 240 | 221 | 233 | 226 | 219 |

Cleaning log: all 16 students took part; no missing values; all reaction times between 200 and 300 ms (plausible);
all sleep values between 5 and 10 hours (plausible).

### Analysis

**Each variable.** Sleep: mean 7.375 h, standard deviation 1.15 h, roughly symmetric from 5.5 to 9.5. Reaction time:
mean 240.4 ms, median 239 ms, standard deviation 14.3 ms, roughly symmetric, no outliers.

**The relationship.**

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 232" role="img" aria-label="Scatter plot of 16 students: hours of sleep from 5.5 to 9.5 across, reaction time in milliseconds from about 219 to 268 up. The points fall from upper left to lower right close to the least-squares line y-hat equals 323.9 minus 11.3 x">
  <line x1="50" y1="190" x2="420" y2="190" stroke="currentColor" stroke-width="1.5"/>
  <line x1="50" y1="20" x2="50" y2="190" stroke="currentColor" stroke-width="1.5"/>
  <line x1="64.8" y1="46.0" x2="405.2" y2="182.2" stroke="currentColor" stroke-width="2"/>
  <circle cx="87.0" cy="38.3" r="4.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="124.0" cy="72.3" r="4.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="124.0" cy="54.0" r="4.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="161.0" cy="85.4" r="4.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="161.0" cy="108.9" r="4.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="198.0" cy="93.2" r="4.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="198.0" cy="122.0" r="4.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="198.0" cy="80.2" r="4.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="235.0" cy="137.7" r="4.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="235.0" cy="116.8" r="4.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="272.0" cy="140.3" r="4.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="272.0" cy="111.5" r="4.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="309.0" cy="161.2" r="4.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="309.0" cy="129.8" r="4.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="346.0" cy="148.2" r="4.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="383.0" cy="166.5" r="4.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="50.0" y="206.0" font-size="10" text-anchor="middle" fill="currentColor">5</text>
  <text x="124.0" y="206.0" font-size="10" text-anchor="middle" fill="currentColor">6</text>
  <text x="198.0" y="206.0" font-size="10" text-anchor="middle" fill="currentColor">7</text>
  <text x="272.0" y="206.0" font-size="10" text-anchor="middle" fill="currentColor">8</text>
  <text x="346.0" y="206.0" font-size="10" text-anchor="middle" fill="currentColor">9</text>
  <text x="420.0" y="206.0" font-size="10" text-anchor="middle" fill="currentColor">10</text>
  <text x="44.0" y="167.8" font-size="10" text-anchor="end" fill="currentColor">220</text>
  <text x="44.0" y="115.5" font-size="10" text-anchor="end" fill="currentColor">240</text>
  <text x="44.0" y="63.2" font-size="10" text-anchor="end" fill="currentColor">260</text>
  <text x="235.0" y="224.0" font-size="11" text-anchor="middle" fill="currentColor">hours of sleep</text>
  <text x="14.0" y="105.0" font-size="11" text-anchor="middle" fill="currentColor">ms</text>
  <text x="316.4" y="54.0" font-size="11" text-anchor="middle" fill="currentColor">ŷ = 323.9 − 11.3x</text>
</svg>
</div>

The scatter plot shows a clear downward, straight-line pattern with no outliers.

- Sums: $S_{xx} = 19.75$, $S_{xy} = -223.6$, $S_{yy} = 3071.9$.
- Correlation: $r = \dfrac{-223.6}{\sqrt{19.75 \times 3071.9}} \approx -0.91$: strong and negative.
- Least-squares line: $b = \dfrac{-223.6}{19.75} \approx -11.3$ ms per hour, 
  $a = 240.44 - (-11.32)(7.375) \approx 323.9$. So $\hat{y} = 323.9 - 11.3x$.
- $r^2 \approx 0.82$: sleep accounts for about 82% of the variation in reaction time in this sample.
- Residuals: $+6.3, -1.0, +6.0, -0.3, -9.3, +2.3, -8.7, +7.3, -9.0, -1.0, -4.4, +6.6, -6.7, +5.3, +4.0, +2.6$. They
  are all within about 10 ms and show no curve or fan: a straight line is a reasonable model.

**Could this be chance?** If sleep and reaction time were unrelated, any pairing of the 16 sleep values with the 16
reaction times would be equally likely. A computer shuffled the reaction times 10 000 times, re-paired them with the
sleep values at random and computed $r$ each time. Not one of the 10 000 shuffles gave an $r$ as far from 0 as
$-0.91$. So the p-value is less than 1 in 10 000: chance alone is a very poor explanation. (This **permutation test**
uses only the idea of a p-value from lesson 3 and needs no formula.)

**A second view.** Splitting at 7.5 hours: the 8 students with less than 7.5 hours had mean reaction time 251.4 ms;
the 8 with 7.5 hours or more had 229.5 ms. A difference of about 22 ms.

### Conclusion

"In a random sample of 16 grade 12 students at our school, those who slept more the night before had faster reaction
times. Each extra hour of sleep went with a reaction time about 11 ms shorter ($r = -0.91$). A relationship this
strong would be very unlikely if there were no link."

**Limits:**

- **Not cause.** This is an observational study. Students who sleep more might differ in other ways (less caffeine,
  less stress, fewer late-night screens) that also affect reaction time.
- **Small sample.** 16 students give a rough estimate. The slope of about 11 ms per hour could easily be several ms
  different in another sample.
- **Measurement.** Sleep was self-reported, and people misremember. The ruler-drop test is coarse (the ruler is read
  to the nearest centimetre or so).
- **Scope.** The result applies to grade 12 students at this school, at the time of day tested. It says nothing about
  very short or very long sleep outside 5.5 to 9.5 hours (no extrapolation).

**Next step:** an experiment. With consent and safe limits, randomly assign volunteers to a normal night or a
slightly shortened night (for example 1 hour less) and compare their reaction times the next morning, ideally in a
matched-pairs design (each person does both nights, in random order).

## Try it

1. Turn each vague interest into a good statistical question, naming the population and the variables: (a) "phones
   and sleep"; (b) "is the cafeteria food popular?"; (c) "do plants like music?"
2. For each question in 1, say whether it is a summary, comparison, relationship or cause question, and which design
   fits it.
3. In the ruler-drop test, a student catches the ruler after 30 cm. Find the reaction time.
4. Use the line $\hat{y} = 323.9 - 11.3x$ to predict the reaction time after 8 hours of sleep. Why should you not use
   it for 12 hours?
5. A classmate says, "$r^2 = 0.82$, so sleep causes 82% of reaction time." Correct the sentence.
6. Write two limits of the sleep study that are not in the list above.
7. If the same experiment were done by astronauts on Mars, where $g \approx 3.7$ m/s², how far would the ruler fall in
   0.226 s? Would the ruler test still work there?
8. Plan your own investigation in five lines, one for each stage of PPDAC.

??? note "Answers"
    1. Possible answers. (a) "Among students at our school, is screen time in the hour before bed linked to hours of
       sleep?" Population: students at the school; variables: minutes of screen time, hours of sleep. (b) "What
       proportion of students who buy lunch at the cafeteria rate it 4 or 5 out of 5?" Population: cafeteria users;
       variable: rating. (c) "Do bean plants grown with music playing grow taller in 3 weeks than plants grown in
       silence?" Population: bean plants of one variety grown in these conditions; variables: music or not, height.
    2. (a) Relationship: a random sample, paired measurements (or an experiment for cause). (b) Summary: a random
       sample of cafeteria users. (c) Cause: an experiment, with plants **randomly** assigned to music or silence and
       everything else (light, water, soil) kept the same.
    3. $t = \sqrt{2 \times 0.30 / 9.8} = \sqrt{0.0612} \approx 0.247$ s, about 247 ms.
    4. $323.9 - 11.3 \times 8 = 323.9 - 90.4 = 233.5$ ms. 12 hours is outside the data (5.5 to 9.5); the straight line
       may not continue (it would predict 188 ms), and very long sleep may even go with worse alertness.
    5. "Differences in sleep **account for** (go with) about 82% of the **variation** in reaction time in this
       sample." It is not 82% of the reaction time itself, and it does not show cause.
    6. Possible answers: students knew the hypothesis and may have tried harder or less hard; one night's sleep may
       matter less than the usual amount over a week; the partners dropping the ruler might give unintended
       warning signals; the time between waking and testing differed.
    7. $d = \tfrac{1}{2} \times 3.7 \times 0.226^2 \approx 0.095$ m, about 9.5 cm. The test still works, but the
       ruler falls more slowly, so the scale converting distance to time must use Mars's $g$.
    8. One example. Problem: "Do grade 9 students who eat breakfast have higher scores on a morning quiz?" Plan:
       random sample of 40 grade 9 students, record breakfast (yes/no) and quiz score. Data: tidy table, cleaning
       log. Analysis: side-by-side box plots, means and a confidence interval for the difference. Conclusion: size
       of the difference, uncertainty, observational so no cause, limits of self-report.

## Common mistake

**Collecting data before deciding the question.** Data gathered "just to see" rarely answer anything. Write the
question, the variables and the main analysis first.

**Ending with a number instead of a conclusion.** "$r = -0.91$" is a result, not an answer. Say what it means for the
question, how sure you are, and what it cannot tell you.

## Where it leads

- Back: [Statistics in the news](06-statistics-news.md) · [Level 8 page](index.md) · [Statistics topic page](../index.md)
- This is the end of the Statistics topic. Every earlier level feeds into the cycle: [Level 1](../level-1/index.md)
  started with asking a question, [Level 5](../level-5/index.md) with samples, [Level 7](../level-7/index.md) with
  models.
- The mathematics of chance behind tests and intervals: [Probability, level 8](../../probability/level-8/index.md),
  including [Monte Carlo methods](../../probability/level-8/07-monte-carlo.md) like the shuffling test above.
- Writing programs to clean and analyse data: [CSC108 (introduction to computer programming)](../../../uoft/CSC108H1/index.md).
- The linear algebra behind regression with many variables:
  [MAT247 Unit 2 (orthogonality and Gram–Schmidt)](../../../uoft/MAT247H1/unit02.md).
