# 1. What statistics is for

*A poll of 1000 people claims to tell you what a country of millions thinks. A drug trial on a few thousand
patients decides what doctors will give to everyone. A table of numbers in the news says one thing "causes" another.
How can a small handful of observations say anything about a huge world, and when should you believe it? This
chapter sets out what statistics is for: the kinds of question data can answer and the kinds it cannot, the basic
words (population, sample, variable, parameter, statistic), and the single most important distinction in the
subject, between watching the world and changing it on purpose. It proves a first small theorem about random samples,
tells the story of how the subject began, and ends with a preview of the ways statistics goes wrong, each of which a
later chapter takes apart.*

!!! abstract "In this chapter"

    **You will learn:**

    - the four kinds of question data can answer (describe, infer, predict, explain) and the kinds it cannot
    - populations, samples, units and variables, and the types of variable (categorical, ordinal, discrete, continuous)
    - the difference between a parameter and a statistic, and a first theorem: a random sample's mean is right on average
    - why an experiment can show cause and effect and an observational study usually cannot, and what a confounder is
    - a short honest history: John Graunt's bills of mortality, Florence Nightingale's diagrams, Ronald Fisher's experiments
    - a preview of the classic ways statistics goes wrong

    **You need:** school arithmetic, fractions and percentages. Section 1.2 uses the binomial coefficient
    $\binom{N}{n}$ ("$N$ choose $n$") once; [Combinatorics, chapter 2](../combinatorics/02-Permutations-and-Combinations.md)
    explains it, but the section says what it means. For a gentler version, see the Topics lessons
    [Asking a question](../../topics/statistics/level-1/04-asking-question.md),
    [Sorting things](../../topics/statistics/level-1/01-sorting-things.md),
    [Good survey questions](../../topics/statistics/level-2/06-survey-questions.md),
    [Collecting your own data](../../topics/statistics/level-3/01-collecting-data.md),
    [Populations and samples](../../topics/statistics/level-5/04-populations-samples.md),
    [Sampling methods](../../topics/statistics/level-5/05-sampling-methods.md) and
    [Bias](../../topics/statistics/level-5/06-bias.md).

    **Levels:** 1.1, 1.3, 1.4 and 1.5 are beginner; 1.2 is beginner, with a theorem at the end that is intermediate.

## 1.1 Questions data can and cannot answer

**A question.** A school wants to know whether its students sleep enough. Where would you even start?

You could ask every student how many hours they slept last night. You could ask a few. You could look at whether
students who sleep more get better marks. You could make half of them go to bed earlier for a month and see what
happens. Each of these is a different kind of question, and statistics treats them differently.

**Statistics** is the science of learning from data when the data are incomplete, noisy or both. "Data" (the word is
plural; one item is a *datum*) are recorded observations: numbers, categories, measurements, answers. The word
"statistics" itself comes from the eighteenth-century German *Statistik*, the collection of facts about a state:
its population, its trade, its armies. Counting things for the government is still a large part of the job, but the
modern subject is about something harder: saying what the data mean beyond the data themselves, and how sure you can
be.

Almost every statistical question falls into one of four kinds.

**1. Describe.** *What do these data look like?* "The 412 students who answered slept a median of 7 hours; a quarter
slept less than 6." No guessing is involved: you summarise what you have. Chapters 2, 3 and 4 are about describing.

**2. Infer.** *What do these data say about a larger group I did not fully observe?* "From 412 answers, we estimate
that between 22% and 30% of all 3000 students sleep less than 6 hours." Now you are reaching beyond the data, and
you must say how far you might be wrong. Inference is the heart of the subject: Chapters 6 to 10 and 13 to 15.

**3. Predict.** *What will happen to a new case?* "A student who sleeps 5 hours will probably score about 6 points
lower than one who sleeps 8." A prediction can be useful even if nobody knows why it works. Chapters 11, 12, 16 and 19.

**4. Explain (cause and effect).** *If we changed something, what would happen?* "If students slept an hour more,
their marks would rise." This is the hardest kind. Students who sleep more may differ in many other ways (less
part-time work, calmer homes), so the link between sleep and marks in the data need not be what would happen if you
changed sleep. Section 1.3 says why, and Chapter 17 is devoted to it.

The four kinds are often confused, and much bad statistics comes from answering one and claiming the other. A
newspaper headline that says "coffee drinkers live longer" describes a pattern; the reader hears "coffee will make
you live longer", which is a causal claim the data may not support at all.

### What data cannot answer

Some questions are out of reach, however much data you collect.

- **Questions of value.** Data can tell you how many people support a law, and what the law would probably cost.
  Whether the law is *right* is not a statistical question. Statistics can inform a decision; it cannot make it.
- **Questions with no data behind them.** If nobody measured something, no clever method recovers it. A survey of
  people who own phones says nothing directly about people who do not. Statistics can sometimes adjust for missing
  groups, but only by making assumptions, and the honest analyst says what those assumptions are.
- **Exact facts about one individual from a pattern in a group.** "Smokers are about 15 to 30 times as likely to get
  lung cancer as non-smokers" (the figure varies by study and by how much is smoked) is a statement about groups. It
  does not say whether a particular smoker will get cancer. Statistics speaks about proportions, averages and
  chances; applying them to one person is a further step that needs care.
- **Questions that are not well defined.** "Are people happier now?" cannot be answered until you say what
  "happier" means and how you will measure it. Much of the work of a statistician is turning a vague question into a
  precise one.

**Worked example 1.1.** Sort each question into describe, infer, predict or explain, or say that data cannot answer it.

1. What was the average daily rainfall in Toronto in June 2025, from the weather station records?
2. From a survey of 1500 voters, what share of all voters support candidate A?
3. Will it rain tomorrow?
4. Does a new teaching method raise reading scores?
5. Should the city spend its budget on parks or on roads?

*Answer.* (1) Describe: the records are complete, so you only summarise. (2) Infer: from a sample to a whole
population. (3) Predict. (4) Explain: it asks what *changing* the method would do. (5) Not a statistical question,
though data on costs and use would inform it.

## 1.2 Populations, samples and variables

**A question.** A poll asks 1000 people and reports "54% support the proposal". Of whom, exactly, is 54% a fact, and
of whom is it a guess?

### The words

- A **unit** (or **case**, or **individual**) is one thing you observe: a person, a household, a tree, a day, a
  rock sample. In a table of data, each unit is usually one row.
- The **population** is the whole collection of units you want to learn about: all adults in Canada, all the
  bolts a factory made today, every sol (Martian day) on which a rover has recorded the air pressure.
- A **sample** is the part of the population you actually observe. The poll's 1000 people are a sample; the voters
  of the whole country are the population.
- A **variable** is a property that can differ from unit to unit: age, height, opinion, colour, number of siblings.
  In a table, each variable is usually one column.
- A **value** is what a variable is for one unit: this person's age is 34.

In the language of functions: if $U$ is the set of units in the population, a variable is a function $x : U \to V$
that assigns to each unit $u$ a value $x(u)$ in some set $V$ of possible values. A dataset is a sample of units
together with the values of several variables on each.

So the poll's "54%" is a fact about the 1000 people in the sample (54% of *them* said yes). It is a guess about the
population. How good a guess depends on how the 1000 were chosen, which is the subject of Chapter 5, and on luck,
which is the subject of Chapter 6.

### Parameters and statistics

A number computed from the whole population is a **parameter**. A number computed from a sample is a **statistic**.
(This is a second meaning of the word "statistic": one number, as opposed to the subject.)

| | Computed from | Usually | Example |
| --- | --- | --- | --- |
| parameter | the whole population | unknown, fixed | the true share of all voters who support the proposal |
| statistic | the sample | known, varies from sample to sample | the 54% in this poll |

A common convention is to write parameters with Greek letters ($\mu$ for a population mean, $\sigma$ for a population
standard deviation, $p$ or $\pi$ for a population proportion) and statistics with Latin letters ($\bar{x}$ for a
sample mean, $s$ for a sample standard deviation, $\hat{p}$ for a sample proportion, read "p-hat"). The hat means "an
estimate of".

The central problem of statistical inference, in one line: **use a statistic to learn about a parameter, and say how
wrong you might be.**

### Types of variable

What you may sensibly do with a variable depends on what kind of values it takes.

**Categorical** (or **qualitative**) variables put units into groups.

- **Nominal**: the groups have no order. Blood type (A, B, AB, O), country of birth, favourite colour, the rock type of
  a sample (basalt, sandstone, ...).
- **Ordinal**: the groups have a natural order, but the gaps between them have no fixed size. Survey answers from
  "strongly disagree" to "strongly agree"; a pain scale from 1 to 10; school grades A, B, C.

**Quantitative** (or **numerical**) variables are numbers on which arithmetic makes sense.

- **Discrete**: values you can list one by one, usually counts. Number of siblings, number of cars in a household,
  number of craters in a square kilometre.
- **Continuous**: values that can, in principle, be anything in an interval. Height, time, temperature, pressure.
  (Every real measurement is rounded, so in practice continuous data come in steps; we still call the variable
  continuous when the steps are fine compared with the spread.)

The psychologist S. S. Stevens proposed a related four-way classification in 1946: **nominal**, **ordinal**,
**interval** and **ratio**. An *interval* scale has meaningful differences but no true zero: temperature in degrees
Celsius is the standard example, since $20$ °C is $10$ degrees warmer than $10$ °C, but it is not "twice as hot". A
*ratio* scale has a true zero, so ratios make sense: $20$ kelvin really is twice $10$ kelvin, and a rope of 4 metres
is twice one of 2 metres. Stevens's scheme is useful as a warning ("do not average postcodes"), though statisticians
have argued about how strictly to apply it ever since.

**A warning about numbers that are not quantities.** A variable can be written with digits and still be categorical.
Postal codes, phone numbers, jersey numbers and student numbers are labels. The "average jersey number" of a team is
a number you can compute and that means nothing.

**Worked example 1.2.** A dataset has one row per student, with these columns. Classify each.

| Column | Example value | Type |
| --- | --- | --- |
| school year | 10 | ordinal (or discrete; years are ordered and evenly spaced, so either view is defended) |
| height in cm | 168.5 | quantitative, continuous (ratio) |
| number of siblings | 2 | quantitative, discrete |
| favourite subject | music | categorical, nominal |
| "I enjoy maths" (1 = strongly disagree to 5 = strongly agree) | 4 | categorical, ordinal |
| student number | 104 233 | categorical, nominal (a label) |

The first row shows that the classification is a judgement, not a law. Whether you treat "school year" as a number
or an ordered category depends on the question you are asking.

### Random samples, and a first theorem

*Level: intermediate (the last part of this section).*

How should the sample be chosen? Chapter 5 is all about this, but the basic answer is: **at random**. A **simple
random sample** of size $n$ from a population of $N$ units is chosen so that every possible group of $n$ units has
the same chance of being the sample. The number of possible groups is the binomial coefficient

$$
\binom{N}{n} = \frac{N!}{n!\,(N-n)!},
$$

read "$N$ choose $n$": the number of ways to choose $n$ things out of $N$ when order does not matter. So each possible
sample has probability $1/\binom{N}{n}$.

Why at random? Because a random sample has no favourites. A sample chosen by the pollster's convenience (people who
answer the phone at noon, people who walk past a shop) can be systematically different from the population, and no
amount of extra data cures that. A random sample can still be unlucky, but its luck is the kind that probability can
measure. Here is the first precise statement of that idea.

**Worked example 1.3 (a tiny population).** A made-up street has five households, with these numbers of people:

$$
2, \quad 3, \quad 3, \quad 5, \quad 7 .
$$

The population mean (the parameter) is $\mu = (2+3+3+5+7)/5 = 20/5 = 4$. Suppose you can afford to visit only $n = 2$
households, chosen at random. There are $\binom{5}{2} = 10$ possible samples. Here they all are, with each sample's
mean $\bar{x}$:

| Households | Sizes | $\bar{x}$ | | Households | Sizes | $\bar{x}$ |
| --- | --- | --- | --- | --- | --- | --- |
| 1, 2 | 2, 3 | 2.5 | | 2, 3 | 3, 3 | 3 |
| 1, 3 | 2, 3 | 2.5 | | 2, 4 | 3, 5 | 4 |
| 1, 4 | 2, 5 | 3.5 | | 2, 5 | 3, 7 | 5 |
| 1, 5 | 2, 7 | 4.5 | | 3, 4 | 3, 5 | 4 |
| | | | | 3, 5 | 3, 7 | 5 |
| | | | | 4, 5 | 5, 7 | 6 |

The sample mean varies a lot: from 2.5 to 6. Only two of the ten samples give exactly the right answer, 4. But the
average of all ten sample means is

$$
\frac{2.5 + 2.5 + 3.5 + 4.5 + 3 + 4 + 5 + 4 + 5 + 6}{10} = \frac{40}{10} = 4 = \mu .
$$

**Check:** the ten means add to 40. So the method "take a random sample and use its mean" is *right on average*,
even though any one sample can miss. That is not a coincidence.

**Theorem 1.1.** Let a population have $N$ units with values $x_1, \dots, x_N$ and mean $\mu = \frac{1}{N}\sum_{i=1}^N x_i$.
Average the sample mean $\bar{x}$ over all $\binom{N}{n}$ simple random samples of size $n$ (where $1 \le n \le N$).
The result is exactly $\mu$.

*Proof.* Add up the sums of all the samples (not yet the means). Each unit $i$ appears in some of the samples; how
many? A sample containing unit $i$ is made by choosing its other $n - 1$ members from the remaining $N - 1$ units, so
unit $i$ is in exactly $\binom{N-1}{n-1}$ samples. Hence

$$
\sum_{\text{samples } S} \ \sum_{i \in S} x_i = \binom{N-1}{n-1} \sum_{i=1}^{N} x_i = \binom{N-1}{n-1} N \mu .
$$

Each sample mean is its sum divided by $n$, and there are $\binom{N}{n}$ samples, so the average of the sample means is

$$
\frac{1}{\binom{N}{n}} \cdot \frac{1}{n} \binom{N-1}{n-1} N \mu .
$$

Now use the identity $\binom{N}{n} = \frac{N}{n}\binom{N-1}{n-1}$, which follows from writing both sides with
factorials: $\frac{N}{n}\cdot\frac{(N-1)!}{(n-1)!\,(N-n)!} = \frac{N!}{n!\,(N-n)!}$. Substituting,

$$
\frac{1}{\frac{N}{n}\binom{N-1}{n-1}} \cdot \frac{1}{n} \binom{N-1}{n-1} N \mu = \mu . \qquad \blacksquare
$$

**Check against the example:** $N = 5$, $n = 2$; each household is in $\binom{4}{1} = 4$ of the 10 samples, the
sample sums add to $4 \times 20 = 80$, and the sample means add to $80/2 = 40$, average $4$.

In the language of probability ([Probability, chapter 6](../probability/06-Expectation-and-Variance.md)), Theorem 1.1
says that the **expected value** of the sample mean equals the population mean: $E[\bar{x}] = \mu$. An estimate with
this property is called **unbiased** (Chapter 7 makes this precise). A special case is a yes/no question: code "yes"
as 1 and "no" as 0, and the mean is the proportion who say yes. So a random sample's proportion $\hat{p}$ is an
unbiased estimate of the population proportion $p$.

Being right on average is not enough by itself: in the example, a single sample could be off by 2 people per
household, half the true value. How far a single sample typically misses is measured by the **standard error**, which
shrinks as the sample grows; Chapter 6 proves the formula. Here is a quick look by simulation.

**Try it in Python.** A made-up population of 10 000 people, 40% of whom would say "yes". Draw 1000 random samples
of 100 people each and look at the sample proportions.

```python
import random
random.seed(1)
population = [1]*4000 + [0]*6000      # made up: 40% say yes
results = []
for trial in range(1000):
    sample = random.sample(population, 100)
    results.append(sum(sample) / 100)
results.sort()
print("smallest:", results[0], "largest:", results[-1])
print("middle 95%:", results[25], "to", results[974])
```

With this seed it prints a smallest value of 0.24, a largest of 0.57, and a middle 95% from 0.30 to 0.49. So a random
sample of 100 usually lands within about 10 percentage points of the truth. Chapter 6 explains why that number is
close to $2\sqrt{0.4 \times 0.6 / 100} \approx 0.098$, and why quadrupling the sample halves it. Notice what does
*not* appear: the size of the population. A random sample of 1000 tells you about as much about a country of 40
million as about a city of 400 000, a fact that surprises almost everyone at first.

## 1.3 Observational studies and experiments

**A question.** In many countries, studies following thousands of women in the 1980s and 1990s found that those
taking hormone replacement therapy after menopause had fewer heart attacks than those who did not. Should doctors have
concluded that the therapy protects the heart?

### Two ways to get data

In an **observational study**, you record what is already happening, without influencing who gets what. You survey
people about their habits, or follow a group over years, or look at hospital records.

In an **experiment**, you decide which units get which **treatment** (a drug, a fertiliser, a teaching method, a
web page design) and then measure the result. In a **randomised experiment** (or **randomised controlled trial**),
the decision is made by chance: a coin, a random number, a shuffled list.

The difference matters because of confounding.

**Definition.** A **confounder** (or **confounding variable**, or **lurking variable**) is a variable that affects both
the "treatment" (the supposed cause) and the outcome, so that a link between treatment and outcome can appear, vanish
or reverse because of it.

In the hormone example, women who chose to take the therapy were, on average, wealthier, better educated, and more
health-conscious than those who did not; all of those are linked to fewer heart attacks on their own. When the
question was put to a large randomised trial, the Women's Health Initiative, the result was different: the arm of the
trial testing estrogen plus progestin was stopped early, in 2002, because the overall risks (including breast cancer
and, in that trial, a small increase in coronary heart disease rather than a decrease) outweighed the benefits. The
observational pattern had largely reflected *who chose* the treatment, not what the treatment did. (The full story is
more detailed, and later analyses looked at the age at which women started the therapy; but the episode is a standard
lesson in why randomisation matters.)

### Why randomisation works

Suppose you flip a coin for each person to decide who gets the treatment. Then whether someone is treated has
*nothing* to do with their wealth, habits, genes, or anything else, measured or not. On average the two groups are
alike in every respect except the treatment. If the outcomes then differ by more than chance would explain, the
treatment is the only systematic difference left, so it must be the cause.

The key words are "on average" and "more than chance would explain". Randomisation does not make the groups
identical; it makes the differences between them *random*, and random differences are what probability can measure.
That is the bridge between experimental design and the probability of later chapters. Chapter 5 shows Fisher's
design that made this precise, and Chapter 17 makes "cause" itself precise with potential outcomes.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 520 220" role="img" aria-label="Two diagrams. Left, an observational study: a confounder box has arrows to both the treatment box and the outcome box, and a dashed arrow with a question mark joins treatment to outcome. Right, a randomised experiment: a coin box has an arrow to treatment, treatment has an arrow to outcome, and the confounder now points only to the outcome">
  <text x="130" y="20" text-anchor="middle" font-size="14" fill="currentColor">observational study</text>
  <text x="390" y="20" text-anchor="middle" font-size="14" fill="currentColor">randomised experiment</text>
  <rect x="80" y="40" width="100" height="36" rx="6" fill="#eea66f" stroke="currentColor"/>
  <text x="130" y="63" text-anchor="middle" font-size="12" fill="currentColor">confounder</text>
  <rect x="10" y="160" width="100" height="36" rx="6" fill="#9cc9ea" stroke="currentColor"/>
  <text x="60" y="183" text-anchor="middle" font-size="12" fill="currentColor">treatment</text>
  <rect x="150" y="160" width="100" height="36" rx="6" fill="#7ccf9a" stroke="currentColor"/>
  <text x="200" y="183" text-anchor="middle" font-size="12" fill="currentColor">outcome</text>
  <line x1="115" y1="76" x2="72" y2="156" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="72,156 70,145 78,149" fill="currentColor"/>
  <line x1="145" y1="76" x2="188" y2="156" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="188,156 182,149 190,145" fill="currentColor"/>
  <line x1="110" y1="178" x2="146" y2="178" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/>
  <polygon points="150,178 142,174 142,182" fill="currentColor"/>
  <text x="130" y="210" text-anchor="middle" font-size="13" fill="currentColor">?</text>
  <line x1="260" y1="30" x2="260" y2="205" stroke="currentColor" stroke-width="0.5"/>
  <rect x="280" y="40" width="80" height="36" rx="6" fill="#9cc9ea" fill-opacity="0.4" stroke="currentColor"/>
  <text x="320" y="63" text-anchor="middle" font-size="12" fill="currentColor">coin</text>
  <rect x="410" y="40" width="100" height="36" rx="6" fill="#eea66f" stroke="currentColor"/>
  <text x="460" y="63" text-anchor="middle" font-size="12" fill="currentColor">confounder</text>
  <rect x="270" y="160" width="100" height="36" rx="6" fill="#9cc9ea" stroke="currentColor"/>
  <text x="320" y="183" text-anchor="middle" font-size="12" fill="currentColor">treatment</text>
  <rect x="410" y="160" width="100" height="36" rx="6" fill="#7ccf9a" stroke="currentColor"/>
  <text x="460" y="183" text-anchor="middle" font-size="12" fill="currentColor">outcome</text>
  <line x1="320" y1="76" x2="320" y2="154" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="320,158 316,150 324,150" fill="currentColor"/>
  <line x1="460" y1="76" x2="460" y2="154" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="460,158 456,150 464,150" fill="currentColor"/>
  <line x1="370" y1="178" x2="404" y2="178" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="408,178 400,174 400,182" fill="currentColor"/>
</svg>
</div>

In the left picture, the confounder pushes both the treatment and the outcome, so they move together even if the
treatment does nothing. In the right picture, the coin decides the treatment; the confounder can still affect the
outcome, but it can no longer affect who is treated, so it cannot create a false link.

### When experiments are impossible

You cannot randomly assign people to smoke for thirty years, to grow up poor, or to live near a volcano. Many of the
most important questions can be studied only by observation. Then the work is harder and the conclusions weaker, but
not hopeless.

The classic case is smoking and lung cancer. In 1950 Richard Doll and Austin Bradford Hill in Britain, and Ernst
Wynder and Evarts Graham in the United States, published studies comparing lung-cancer patients with other patients
and found that the cancer patients were far more often heavy smokers. Doll and Hill then followed tens of thousands
of British doctors for decades (the British Doctors Study, begun in 1951), recording their smoking and their deaths.
No experiment was possible, yet by the 1960s the evidence was overwhelming, because it had features that confounding
struggles to explain: the effect was very large, it grew steadily with the amount smoked, it fell after people
stopped, it was seen in many populations, and it had a biological mechanism. Hill set out considerations of this kind
in a 1965 lecture, often (and against his intention) quoted as a checklist of "criteria for causation".

Not everyone was convinced at first. R. A. Fisher, the most famous statistician of the age (and a smoker), argued in
the late 1950s that a common genetic factor might cause both the desire to smoke and the cancer. It was a legitimate
question to ask, and it was answered by data: among other things, the risk fell in people who gave up, which a fixed
genetic factor would not explain. The episode shows both sides of statistics: the confounder argument is always
available, and sometimes it is wrong.

**Worked example 1.4.** For each study, say whether it is observational or an experiment, and name a possible
confounder where one applies.

1. Researchers compare the test scores of students who chose to attend a summer reading camp with those who did not.
2. A farmer splits a field into 20 plots and uses a random number generator to pick 10 to receive a new fertiliser.
3. A website shows each visitor, at random, one of two versions of its sign-up page and records who signs up.
4. A study finds that people who own more books have children with larger vocabularies.

*Answer.* (1) Observational: students chose. Confounders: motivation, family income, parents' interest in reading.
(2) Experiment, randomised. (3) Experiment, randomised (this is called an **A/B test**; large websites run thousands).
(4) Observational. Confounders: parents' education and income, which affect both how many books there are and how
much the children are read to and talked with. Owning the books need not be the cause.

## 1.4 A short honest history

Statistics grew from three roots: counting people for governments, combining measurements in astronomy, and
comparing treatments in medicine and farming. Here are three moments, told as plainly as the sources allow.

### John Graunt and the bills of mortality (1662)

From the early seventeenth century, the parishes of London published weekly **bills of mortality**: lists of burials
(with a stated cause of death, as reported by "searchers", usually elderly women who viewed the bodies) and of
christenings. They were printed mainly as an early warning of plague. John Graunt, a London haberdasher with no
university training, collected decades of these sheets and in 1662 published *Natural and Political Observations
Made upon the Bills of Mortality*.

Graunt did something new: he treated the bills as data about a population and asked what could be **inferred** from
them, while being frank about their flaws. Among his findings:

- More boys than girls were christened, year after year, in a ratio he put at about 14 to 13. This is the first
  recorded statement of the stable sex ratio at birth.
- Causes of death that are roughly constant from year to year (many chronic diseases, accidents) could be told apart
  from epidemic causes (plague) that came in waves.
- From the numbers of burials and his own estimates of family size, he estimated London's population, at a time when
  people guessed it at millions; his figure was a few hundred thousand, far more realistic.
- He constructed a rough table of how many of 100 people born would survive to each age, an early **life table**.

His methods were crude and some of his estimates involved guesswork that he admitted. But the idea, that mass
records of individual events show stable regularities that no single event does, is the founding idea of the
subject. Graunt's friend William Petty pushed the same programme, which they called "political arithmetic".

### Florence Nightingale and the diagrams of the Crimean War (1858)

Florence Nightingale is remembered as a nurse, but she was also a serious statistician. During the Crimean War
(1853 to 1856) she ran the nursing at the British army hospital at Scutari, near Constantinople. Afterwards, with the
help of the statistician William Farr, she analysed the army's records of deaths. Her central finding was that far
more soldiers had died of preventable diseases (cholera, typhus, dysentery), made worse by overcrowding and poor
sanitation, than of wounds received in battle, and that the death rate fell sharply after a Sanitary Commission sent
from London in 1855 cleaned up the drains, ventilation and water supply.

To make the point to politicians who would not read tables, she drew **polar area diagrams**: each month is a wedge
of a circle, and the *area* of each coloured part is proportional to deaths from each cause. The diagrams appear in
her 1858 report *Notes on Matters Affecting the Health, Efficiency, and Hospital Administration of the British Army*
and related publications. In 1858 she became the first woman elected a Fellow of the (Royal) Statistical Society.

Her work is a model of statistics used for a purpose: collect the data, find the pattern, show it so that it cannot
be ignored, and change the practice. (She also understood a point Chapter 2 returns to: in such a diagram, the
*area*, not the radius, must carry the number, or the picture exaggerates.)

### Ronald Fisher and the design of experiments (1919 to 1935)

In 1919 the young mathematician Ronald Aylmer Fisher took a post at the Rothamsted Experimental Station, an
agricultural research centre in Hertfordshire, England, which had decades of records of crop yields under different
fertilisers. He found that the old records were hard to interpret: plots differed in soil and drainage, weather
changed from year to year, and these differences were tangled with the treatments.

His answer was to change how experiments are done. Fisher argued that treatments should be assigned to plots **at
random**, that each treatment should be **replicated** on several plots, and that plots should be grouped into similar
**blocks**, so that the variation between plots could be measured and separated from the effect of the treatments.
He developed the mathematics to go with it, including the **analysis of variance** (Chapter 12) and much of the
theory of estimation, including **maximum likelihood** (Chapters 7 and 13). His books *Statistical Methods for
Research Workers* (1925) and *The Design of Experiments* (1935) shaped how science was done for the rest of the
century. *The Design of Experiments* contains the "lady tasting tea", which Chapter 5 works through.

Honesty requires two more sentences. Fisher was also a founder of modern population genetics and a lifelong advocate
of eugenics, views now rejected, and he was combative in scientific disputes, including the smoking debate described in
§1.3. His mathematics stands; the history is part of why statisticians today pay close attention to how their tools
are used.

### And many others

These three are only landmarks. The least-squares method of Adrien-Marie Legendre (1805) and Carl Friedrich Gauss
(1809) came from astronomy and is the subject of Chapter 4. Pierre-Simon Laplace and Adolphe Quetelet applied
probability to social data in the early nineteenth century. Francis Galton and Karl Pearson created correlation and
regression in the late nineteenth century (Chapters 4 and 11). William Sealy Gosset, a brewer at Guinness, found the
$t$ distribution in 1908 (Chapter 8). Jerzy Neyman and Egon Pearson built the theory of tests and confidence
intervals in the 1930s (Chapters 8, 9 and 13). And the arrival of cheap computing after about 1980 changed the
subject again (the bootstrap, Chapters 6 and 15; statistical learning, Chapter 19). Stephen Stigler's books, listed
at the end, tell the story properly.

## 1.5 How statistics goes wrong (a preview)

**A question.** During the Second World War, analysts looked at bombers returning from missions and recorded where
they had been hit by enemy fire. The damage was concentrated on the wings and fuselage, with few hits near the
engines. Where should extra armour go?

The tempting answer is "where the holes are". The statistician Abraham Wald, working for the Statistical Research
Group at Columbia University, analysed this kind of problem in a series of memoranda written in 1943. The key point
of his analysis is that the data came only from planes that *returned*. A plane hit in the engines was more likely
not to come back, so it was missing from the data. Few holes near the engines among survivors suggests that hits
there were the dangerous ones. Wald turned this into a method for estimating how vulnerable each part of a plane was,
using only the damage on survivors. (The popular retelling, with a single diagram of a plane and a dramatic moment of
insight, is a simplification; the memoranda are technical and were reprinted in 1980.)

This is **survivorship bias**: the data you can see were filtered by the very thing you want to study. It is one of a
handful of mistakes that recur so often they are worth naming now. Each one gets a full treatment later.

1. **A biased sample** (Chapter 5). If the sample is not chosen at random, it can be systematically different from
   the population, and a larger sample only makes you more confidently wrong. Survivorship bias is one kind; people
   who choose to answer a survey ("self-selection") are another.
2. **Confounding** (§1.3, Chapters 4 and 17). A link between two variables is created by a third.
3. **Chance mistaken for a pattern** (Chapters 6 and 9). Small samples vary a lot. A school with 20 students can
   easily have the best *and* the worst average in a district from luck alone.
4. **Too many tries** (Chapter 9). Test twenty unrelated things at the usual 5% threshold, and on average one will look
   "significant" by luck. Report only that one, and you have published noise.
5. **Misleading pictures** (Chapter 2). A bar chart whose vertical axis starts at 95 instead of 0 makes a 2% difference
   look enormous.
6. **Ignoring the base rate** (Probability, [chapter 4](../probability/04-Bayes-Theorem.md)). A test that is "99%
   accurate" for a rare disease gives mostly false alarms.
7. **Regression to the mean** (Chapter 11). Those who did best on the first test tend, on average, to do less well on
   the second, even if nothing changed, because part of their first score was luck.
8. **Averaging over groups that differ** (Simpson's paradox, Chapter 4). A treatment can be better in every subgroup
   and worse overall.
9. **Fitting the noise** (Chapters 12 and 19). A model with enough adjustable parts can fit any past data perfectly
   and predict the future badly.

None of these is exotic. Each has led to real wrong decisions in medicine, economics and public policy. The point of
learning the mathematics is not to produce numbers but to know when a number can be trusted.

## Check yourself

??? question "1. A health agency measures the blood pressure of 2000 randomly chosen adults in a province and finds that 23% have high blood pressure. Name the population, the sample, the variable, the parameter and the statistic."
    The **population** is all adults in the province. The **sample** is the 2000 adults measured. The **variable** is
    "has high blood pressure" (categorical, yes or no), recorded from a measurement of blood pressure (quantitative,
    continuous). The **parameter** is the proportion $p$ of all adults in the province with high blood pressure,
    unknown. The **statistic** is $\hat{p} = 0.23$, the proportion in the sample.

??? question "2. Classify each variable: (a) the number of moons of a planet; (b) the time a runner takes for 100 m; (c) a hotel's star rating; (d) eye colour; (e) a Canadian postal code; (f) temperature in degrees Celsius."
    (a) Quantitative, discrete (a count). (b) Quantitative, continuous (ratio scale: 12 seconds is twice 6). (c)
    Categorical, ordinal: 4 stars is better than 3, but the "gap" from 3 to 4 need not equal the gap from 1 to 2.
    (d) Categorical, nominal. (e) Categorical, nominal: it is a label, even though it contains digits. (f) Quantitative,
    continuous, on an interval scale: differences make sense, but $0$ °C is not "no temperature", so ratios do not.

??? question "3. Describe, infer, predict, explain, or none? (a) Will this customer repay a loan? (b) Did the minimum wage increase in 2024 reduce youth employment? (c) What fraction of the books in this library were published before 1950, according to the complete catalogue? (d) Is it fair to tax inheritances?"
    (a) Predict: one new case. (b) Explain: a cause-and-effect question, and a hard one, since nobody randomised
    the wage. (c) Describe: the catalogue is complete, so you only count. (d) None: a question of values. Data on who
    pays and how much could inform the debate.

??? question "4. A study reports that children who eat breakfast every day get better grades than those who skip it. Is this an experiment? Name two possible confounders, and say how you could find out whether breakfast itself helps."
    It is observational: the children (or their families) chose whether to eat breakfast. Possible confounders:
    family income (affects both regular meals and access to books, tutors and quiet study space); how organised the
    household is (regular routines affect both); sleep (children who go to bed on time are more likely to have time for
    breakfast and are more alert). To test the effect of breakfast itself you would randomise: for example, provide a
    breakfast programme to randomly chosen schools or classes and compare their grades with those of the others.
    Randomisation breaks the link between breakfast and the confounders.

??? question "5. A population has the values 1, 4, 7. List all simple random samples of size 2 and their means. Check that the average of the sample means equals the population mean."
    The samples are $\{1, 4\}$, $\{1, 7\}$, $\{4, 7\}$ with means $2.5$, $4$, $5.5$. Their average is
    $(2.5 + 4 + 5.5)/3 = 12/3 = 4$, and the population mean is $(1 + 4 + 7)/3 = 4$. They agree, as Theorem 1.1 says.

??? question "6. How many simple random samples of size 3 can be drawn from 6 units? In how many of them does a particular unit appear? What fraction is that?"
    $\binom{6}{3} = 20$ samples. A sample containing a given unit picks its other 2 members from the other 5 units:
    $\binom{5}{2} = 10$. The fraction is $10/20 = 1/2$, which equals $n/N = 3/6$.

??? question "7. Prove that in simple random sampling of $n$ from $N$, each unit is in the sample with probability exactly $n/N$."
    The number of samples is $\binom{N}{n}$, all equally likely, and the number containing a given unit is
    $\binom{N-1}{n-1}$ (choose the other $n-1$ from the other $N-1$). So the probability is
    $\binom{N-1}{n-1} / \binom{N}{n}$. Writing in factorials,
    $\frac{(N-1)!}{(n-1)!\,(N-n)!} \cdot \frac{n!\,(N-n)!}{N!} = \frac{(N-1)!\, n!}{(n-1)!\, N!} = \frac{n}{N}$.
    This is the fact behind Theorem 1.1: each unit's value enters the average with the same weight.

??? question "8. Explain why the mean of the jersey numbers of a basketball team is meaningless, but the mean of the heights of the same players is meaningful."
    Jersey numbers are labels: the number 23 is not "more" of anything than 7, and swapping numbers between players
    changes nothing real. Adding them and dividing produces a number that answers no question. Heights are
    quantities on a ratio scale: adding them gives the total height, and dividing by the number of players gives the
    height each would have if the total were shared equally, which is a meaningful summary.

??? question "9. A company surveys its customers by email about satisfaction and gets a 6% response rate. 85% of those who replied were satisfied. What can you conclude about all customers? Which mistake from §1.5 is at risk?"
    Only that 85% of the 6% who chose to reply were satisfied. The respondents chose themselves, so the sample may
    differ systematically from all customers: very satisfied and very angry customers are often the most likely to
    reply, and customers who have already left may no longer read the emails (a survivorship effect). This is a
    **biased sample** through self-selection. The 85% could be far from the true figure in either direction, and
    collecting more replies the same way would not fix it.

??? question "10. A city notices that neighbourhoods with more police officers have more crime. A councillor proposes reducing police numbers to reduce crime. What is wrong with the argument?"
    It reads a causal claim ("police cause crime") off an observational association. The more likely direction is
    the reverse: police are sent to where crime is high, so crime causes police presence. There may also be
    confounders such as population density, which raises both. Cutting police numbers might raise crime, not lower
    it. To learn the effect of police on crime, you would need an experiment (some cities have randomised where extra
    patrols go) or a careful observational design (Chapter 17).

??? question "11. Let a population of $N$ units have values that are each 0 or 1, with $K$ ones. Show directly that the average of the sample proportions over all simple random samples of size $n$ is $K/N$."
    The sample proportion is the number of ones in the sample divided by $n$. Summing the number of ones over all
    samples counts each one-valued unit once for every sample it is in, namely $\binom{N-1}{n-1}$ times, so the total
    is $K\binom{N-1}{n-1}$. Dividing by $n$ and by the number of samples $\binom{N}{n}$, and using
    $\binom{N}{n} = \frac{N}{n}\binom{N-1}{n-1}$, gives
    $\frac{K\binom{N-1}{n-1}}{n \cdot \frac{N}{n}\binom{N-1}{n-1}} = \frac{K}{N}$. This is Theorem 1.1 for 0/1 values.

??? question "12. Design an experiment to test whether a new fertiliser increases the yield of tomato plants. You have 40 plants in pots in a greenhouse. Say what you randomise, why, and what you would compare."
    Number the pots 1 to 40 and use a random number generator (or shuffle 40 cards, 20 marked "new") to choose 20
    pots for the new fertiliser; the other 20 get the usual one (the **control** group). Randomise because the pots
    differ in ways you cannot fully control (position in the greenhouse, light, the plant itself), and you want those
    differences to be spread by chance between the groups, not to line up with the treatment. If the greenhouse has a
    sunny side and a shady side, a better design **blocks**: randomise separately within each side, 10 new and 10 old
    on each. Treat everything else the same (water, pot size), ideally with the person weighing the tomatoes not
    knowing which pots got which fertiliser. Then compare the mean yields of the two groups, and ask (Chapters 5 and 9)
    whether the difference is larger than chance assignment alone would plausibly produce.

## What you learned

- Statistics learns from incomplete and noisy data. Its questions describe, infer, predict or explain; questions of
  value, and questions about one individual, are beyond it.
- A population is everything you want to know about; a sample is what you observe. Parameters describe populations
  and are usually unknown; statistics are computed from samples and vary from sample to sample.
- Variables are categorical (nominal or ordinal) or quantitative (discrete or continuous); what you may compute
  depends on the type, and digits do not make a label a quantity.
- A simple random sample gives every group of $n$ units the same chance. Its mean is right on average
  (Theorem 1.1), and its typical error shrinks as the sample grows, regardless of the population's size.
- Observational studies can be misled by confounders; randomised experiments break the link between treatment and
  confounders, which is why they can show cause and effect.
- The subject grew from Graunt's bills of mortality (1662), Nightingale's diagrams (1858) and Fisher's experiments
  (1920s and 1930s), among many others.
- Recurring mistakes: biased samples, confounding, chance mistaken for pattern, too many tries, misleading graphs,
  ignored base rates, regression to the mean, Simpson's paradox and overfitting.

**Next:** [Chapter 2](02-Pictures-of-Data.md) draws data: bar charts, histograms, box plots and scatter plots, how
to read shape, centre and spread by eye, how graphs mislead, and four datasets that have the same summaries and look
nothing alike.

## Further reading

- David Freedman, Robert Pisani and Roger Purves, *Statistics* (4th edition, 2007), Parts I and II: the classic
  introduction to experiments and observational studies.
- David Spiegelhalter, *The Art of Statistics: Learning from Data* (2019), Chapters 1 to 4: a readable modern tour.
- Stephen M. Stigler, *The History of Statistics: The Measurement of Uncertainty before 1900* (1986).
- Stephen M. Stigler, *The Seven Pillars of Statistical Wisdom* (2016): seven ideas that made the subject.
- John Graunt, *Natural and Political Observations Made upon the Bills of Mortality* (1662).
- R. A. Fisher, *The Design of Experiments* (1935).
- S. S. Stevens, "On the theory of scales of measurement", *Science* 103 (1946), 677 to 680.
- Richard Doll and A. Bradford Hill, "Smoking and carcinoma of the lung", *British Medical Journal* (1950).
- Austin Bradford Hill, "The environment and disease: association or causation?", *Proceedings of the Royal Society
  of Medicine* 58 (1965).
- Writing Group for the Women's Health Initiative Investigators, "Risks and benefits of estrogen plus progestin in
  healthy postmenopausal women", *JAMA* 288 (2002).
- Marc Mangel and Francisco J. Samaniego, "Abraham Wald's work on aircraft survivability", *Journal of the American
  Statistical Association* 79 (1984).
- On this site: the Topics lessons [Counting what we sorted](../../topics/statistics/level-1/02-counting-groups.md),
  [Experiments versus observational studies](../../topics/statistics/level-8/04-experiments-studies.md) and
  [Statistics in the news](../../topics/statistics/level-8/06-statistics-news.md);
  [Probability, chapter 1](../probability/01-What-Probability-Is.md) for the language of chance that inference
  uses; [Combinatorics, chapter 2](../combinatorics/02-Permutations-and-Combinations.md) for $\binom{N}{n}$; and the
  [Probability book](../probability/index.md) as a whole.
