---
title: "Bias"
---

# Bias

*Statistics and data · level 5, lesson 6 of 6*

## A question to start

In 1936 the United States held a presidential election between Franklin Roosevelt and Alf Landon. A popular magazine,
the *Literary Digest*, ran one of the biggest polls ever attempted: it mailed about **10 million** ballots and got
about **2.4 million** back. Its prediction: Landon would win easily, with about 57% of the vote.

Roosevelt won with about 61% of the vote, and he carried every state except two. A much smaller poll by a young
researcher named George Gallup, with a few tens of thousands of people, correctly predicted that Roosevelt would win.

How can 2.4 million answers be beaten by a sample fifty times smaller? By the end of this lesson you will be able to
explain it, and it is one of the most important lessons in all of statistics.

## The idea

### Two kinds of error

When a sample's answer misses the truth, there are two very different reasons.

- **Random error** (sampling variability, from lesson 4). Different random samples give slightly different answers,
  some too high and some too low, scattered around the truth. Bigger samples make this error **smaller**.
- **Bias**. The method itself pushes the answer in **one direction**, too high or too low, every time. Bigger samples do
  **not** fix it. They just give the wrong answer more confidently.

A picture with targets helps. Each dot is the answer from one sample; the centre is the truth.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 125" role="img" aria-label="Four targets. First: shots tight around the centre. Second: shots scattered widely around the centre. Third: shots tight but off to the upper right. Fourth: shots scattered and off to the upper right">
  <circle cx="55" cy="55" r="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="55" cy="55" r="26" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="55" cy="55" r="12" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="64.4" cy="52.3" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="56.6" cy="55.6" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="58.3" cy="49.4" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="53.3" cy="52" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="50.7" cy="51.6" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="53" cy="53.9" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="51.4" cy="56.7" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="52.8" cy="42.2" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="55" y="113" font-size="11" text-anchor="middle" fill="currentColor">no bias, small spread</text>
  <circle cx="160" cy="55" r="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="160" cy="55" r="26" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="160" cy="55" r="12" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="177.9" cy="49.1" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="148.8" cy="59" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="163.4" cy="55.8" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="147.2" cy="57.9" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="136.9" cy="76.7" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="141" cy="51.9" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="160.3" cy="58.3" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="156.3" cy="62.2" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="160" y="113" font-size="11" text-anchor="middle" fill="currentColor">no bias, big spread</text>
  <circle cx="265" cy="55" r="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="265" cy="55" r="26" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="265" cy="55" r="12" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="270.5" cy="38.1" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="283.8" cy="36.7" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="290.6" cy="34.6" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="284.1" cy="30.3" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="285.6" cy="32" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="278.2" cy="47.9" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="287.3" cy="38.4" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="285.2" cy="32.7" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="265" y="113" font-size="11" text-anchor="middle" fill="currentColor">biased, small spread</text>
  <circle cx="370" cy="55" r="40" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="370" cy="55" r="26" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="370" cy="55" r="12" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="370.5" cy="46.8" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="356.5" cy="44.9" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="361.5" cy="42.9" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="369.6" cy="64.4" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="397.7" cy="34.5" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="359.4" cy="30.9" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="383.5" cy="28.2" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="388" cy="54.3" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="370" y="113" font-size="11" text-anchor="middle" fill="currentColor">biased, big spread</text>
</svg>
</div>

A large, biased poll is the third target: the dots are packed tightly (a huge sample, little random error), but they
are all in the wrong place. That was the *Literary Digest*.

Bias can creep in at every stage of collecting data. Statisticians give the main kinds names, so they can check for
each one.

### Sampling bias

**Sampling bias** (also called selection bias) happens when the **way the sample is chosen** favours some members of
the population over others. Convenience and voluntary response samples, from the last lesson, are the usual causes.

A special case is **undercoverage**: some part of the population has no chance at all of being chosen. A survey that
calls only landline phones misses people who have only a mobile phone, who tend to be younger. A survey done only in
English misses people who do not speak it.

### Non-response bias

Even a perfectly random sample can go wrong if many of the chosen people **do not answer**. If the people who answer
are different from those who do not, the answers are biased. This is **non-response bias**.

Think about who skips a survey: people who are very busy, people who are away, people who distrust surveys, people who
do not care about the topic. If the survey asks "How busy is your life?", the busiest people are the least likely to
reply, so the answer comes out too low.

The **response rate** is the share of chosen people who answered. A low response rate is a warning sign. It does not
prove the result is biased, but it means the result **could** be.

### Response bias

**Response bias** happens when people answer, but their answers are not accurate. Common causes:

- **Leading questions.** "Don't you agree that the park is a disgrace?" invites "yes". A fair question gives both
  sides equally: "Do you think the park is in good condition or poor condition?"
- **Sensitive questions.** People under-report things they are embarrassed about and over-report things they are proud
  of. Asked by a teacher face to face "Have you ever copied homework?", few students will say yes.
- **Who is asking.** Answers can change depending on the interviewer, or whether other people are listening.
- **Memory.** "How many hours of TV did you watch last month?" Nobody remembers exactly, and guesses tend to drift.

### Measurement bias

**Measurement bias** happens when the measuring tool or method is off in the same direction every time. A bathroom
scale that reads 0.5 kg too heavy, a thermometer left in the sun, a stopwatch started late every time. Every
measurement is wrong by about the same amount in the same direction, so averaging many of them does not cancel the
error.

Notice something useful: if every value is shifted up by 0.5, the **mean** goes up by 0.5 but the **spread** (range,
IQR) does not change at all. Measurement bias can hide, because the data look perfectly sensible.

### What went wrong in 1936

Now back to the *Literary Digest*. The magazine got its 10 million names mainly from telephone directories, lists of
car owners, and its own readers. In 1936, in the middle of the Great Depression, many families could not afford a
telephone or a car. The people on those lists were, on average, better off, and better-off voters were more likely
to vote for Landon. That is **sampling bias** (undercoverage of poorer voters).

Then only about one in four of the people mailed a ballot sent it back. Those who bothered to reply may well have been
the ones most eager for a change of president. That is **non-response bias**. Researchers who later studied the poll
concluded that the non-response was probably a large part of the problem, perhaps the larger part.

Gallup's poll was far smaller, but he worked hard to make his sample a fair copy of the voters. A smaller fair sample
beat a huge biased one. The *Literary Digest* closed down not long afterwards.

### Bias is not only in polls

Every kind of data can be biased: medical studies that include only volunteers, product reviews written mainly by
very happy or very angry customers, a weather station placed next to a hot parking lot. Whenever you see a statistic,
ask: **who** was measured, **how** were they chosen, **who** did not answer, **what** exactly was asked, and **how**
was it measured?

## Worked examples

**1. Name the bias.**

- A radio host asks listeners to phone in about a new tax. 90% of callers are against it. **Sampling bias**
  (voluntary response): angry people call.
- A random sample of 2000 households is mailed a survey; 350 reply. **Non-response bias** is possible: the response
  rate is only $350 \div 2000 = 17.5\%$.
- "Should the school stop wasting money on a useless new gym?" **Response bias** (leading question): "wasting" and
  "useless" push towards yes.
- Students measure their heights with a tape that has its first 2 cm torn off, but they read the numbers as printed,
  starting at the torn edge. Every height reads 2 cm too tall. **Measurement bias**.

**2. Measurement bias in numbers.** A scale reads every mass 0.3 kg too heavy. A class weighs its backpacks: the
measured mean is 6.8 kg and the measured range is 4.1 kg. The true mean is $6.8 - 0.3 = 6.5$ kg. The true range is
still **4.1 kg**: every backpack moved up by the same 0.3, so the distance from lightest to heaviest is unchanged.

**3. Rewriting a question.** Leading: "Most doctors recommend 9 hours of sleep. How many hours do you sleep?" This
tells people what the "right" answer is before they answer. Fairer: "On a typical school night, about how many hours
do you sleep?"

**4. Bigger is not better.** An online poll gets 100 000 votes on whether people enjoy reading, and 85% say yes. A
random sample of 1000 people finds 62% say yes. Which should you trust more? The random sample. The online poll is
a voluntary response sample on a website that people chose to visit, so it is biased towards keen readers, and
100 000 votes cannot fix that. The random sample has some random error (a few percentage points) but no built-in push
in one direction.

## Try it

1. Name the kind of bias: (a) a survey about public transit done by calling landline phones only; (b) a teacher asks
   the class aloud, "Who here did not do the homework?"; (c) a stopwatch is always started a fraction of a second late;
   (d) a survey is mailed to 1500 randomly chosen people and 210 reply.
2. Rewrite this question so it is fair: "Don't you agree that video games are a waste of time?"
3. A thermometer reads 1.5 degrees too high. The measured temperatures over a week have a mean of 21.5 degrees and an
   IQR of 3 degrees. What are the true mean and the true IQR?
4. Which target in the picture matches each of these? (a) A large online poll. (b) A small random sample. (c) A large
   random sample.
5. A study of how long phones last looks only at old phones that are **still working** today, and finds that they
   are on average 6 years old. Why is "phones last about 6 years" a biased conclusion, and in which direction?
6. Explain in two or three sentences why the *Literary Digest*'s 2.4 million answers did not give the right answer.
7. A random sample is chosen perfectly, but 70% of the people chosen do not answer. A friend says: "It was a random
   sample, so it is fine." Is that right?

??? note "Answers"
    1. (a) **Sampling bias** (undercoverage: people with only mobile phones are missed). (b) **Response bias**
       (a sensitive question asked in public; few will admit it). (c) **Measurement bias** (every time is too short).
       (d) **Non-response bias** is possible: the response rate is $210 \div 1500 = 14\%$.
    2. For example: "How do you feel about video games: mostly a good use of time, mostly a waste of time, or
       somewhere in between?" Both sides are offered, and the question does not hint at an answer.
    3. True mean: $21.5 - 1.5 = 20$ degrees. True IQR: still **3** degrees, because every reading moved by the same
       amount.
    4. (a) Biased, small spread: a big sample but a biased method. (b) No bias, big spread: a fair method but    5. Every phone that broke early has been left out of the sample, so only the toughest phones were looked at.
       This is sampling bias (it has a special name, survivorship bias, which returns in level 8). It makes phones
       seem to last **longer** than they really do.
an they are, because people who switch
       phones often are excluded.
    6. The names came from phone books, car registrations and the magazine's readers, who were better off than
       average in 1936 and leaned towards Landon (sampling bias). Then only about a quarter replied, and those who
       replied may have differed from those who did not (non-response bias). Size cannot fix a biased method.
    7. No. Once 70% are missing, the people who answered are no longer a random sample: they chose themselves by
       answering. If answerers differ from non-answerers, the result has non-response bias.

## Common mistake

**Believing a big sample cannot be biased.** Sample size controls random error only. Bias comes from **how** the data
were collected, and it stays the same however many people you ask. When you meet a statistic, ask how the sample was
chosen before you ask how big it was.

**Calling every error "bias".** If a fair random sample of 100 is off by 3 percentage points, that is random error,
not bias. Bias is a push in one direction built into the method.

## Where it leads

- Back: [Sampling methods](05-sampling-methods.md) · Next level: [Level 6: two variables](../level-6/index.md),
  starting with [scatter plots](../level-6/01-scatter-plots.md).
- [Level 5 page](index.md) · [Statistics topic page](../index.md)
- Misleading graphs, the picture version of bias: [level 4](../level-4/index.md).
- Survivorship bias, margins of error and how polls report their accuracy: [level 8](../level-8/index.md).
- The chance behind random error: [probability](../../probability/index.md).
