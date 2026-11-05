---
title: "Correlation is not causation"
---

# Correlation is not causation

*Statistics and data · level 6, lesson 5 of 6*

## A question to start

In many towns, the months when the most ice cream is sold are also the months with the most drownings. Plot ice cream
sales against drownings, month by month, and you get a clear positive correlation.

So does eating ice cream make people drown? Should towns ban ice cream to save lives? Almost everyone laughs at this,
and they are right to. But **why** exactly is it wrong? The same mistake, in less obvious forms, appears in news
headlines every week. In this lesson you learn to catch it.

## The idea

### Correlation and causation

Two variables are **correlated** when they tend to move together (lesson 2). One variable **causes** another when
changing the first would **make** the second change. Pushing a light switch causes the light to come on.

Causation usually produces correlation: if studying really raises scores, then students who study more will tend to
score more. But the reverse is not true. **A correlation can appear without any causation between the two
variables.** A scatter plot shows that two things go together; it cannot, by itself, tell you why.

When you see a correlation between A and B, there are at least four possible explanations. A good statistician checks
all of them.

### Explanation 1: A causes B

Sometimes the obvious story is right. More hours of practice really do lead to fewer mistakes on the piano. But this
is only one of the four possibilities, and you need more than a scatter plot to show it.

### Explanation 2: B causes A (reverse cause)

Maybe the arrow points the other way. Here is an example: students who have a tutor tend to have **lower** math marks
than students who do not. Does tutoring make students worse? Much more likely, students who are struggling are the
ones whose families get them a tutor. The low marks cause the tutoring, not the other way round.

Another: people who visit a doctor often tend to be less healthy than people who rarely do. Doctor visits do not
make people ill; being ill makes people visit the doctor.

### Explanation 3: a lurking variable causes both

A **lurking variable** (also called a **confounding variable**) is a third variable, often not measured at all, that
affects both A and B. It makes them move together, even though neither affects the other.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 175" role="img" aria-label="Hot weather has arrows to ice cream sales and to drownings; a dashed line joins ice cream sales and drownings, marked correlated but with no arrow">
  <rect x="150" y="10" width="120" height="34" rx="6" fill="#eea66f" stroke="currentColor"/>
  <text x="210" y="32" font-size="12" text-anchor="middle" fill="currentColor">hot weather</text>
  <rect x="20" y="110" width="140" height="34" rx="6" fill="#9cc9ea" stroke="currentColor"/>
  <text x="90" y="132" font-size="12" text-anchor="middle" fill="currentColor">ice cream sales</text>
  <rect x="260" y="110" width="140" height="34" rx="6" fill="#9cc9ea" stroke="currentColor"/>
  <text x="330" y="132" font-size="12" text-anchor="middle" fill="currentColor">drownings</text>
  <line x1="190" y1="44" x2="107.3" y2="104.7" stroke="currentColor" stroke-width="2"/>
  <polygon points="100,110 110.2,108.7 104.3,100.6" fill="currentColor"/>
  <line x1="230" y1="44" x2="312.7" y2="104.7" stroke="currentColor" stroke-width="2"/>
  <polygon points="320,110 315.7,100.6 309.8,108.7" fill="currentColor"/>
  <line x1="160" y1="127" x2="260" y2="127" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="210" y="160" font-size="11" text-anchor="middle" fill="currentColor">correlated, but no arrow</text>
</svg>
</div>

For ice cream and drownings, the lurking variable is **hot weather**. In summer, more people buy ice cream, and more
people go swimming, so more people drown. Ice cream and drownings rise and fall together because both follow the
weather.

More lurking variables:

- **Shoe size and reading level** among children aged 5 to 12 are positively correlated. The lurking variable is
  **age**: older children have bigger feet and read better.
- **Number of firefighters** at a fire and **damage** done are positively correlated. Lurking variable: the **size of
  the fire**. Big fires get more firefighters and do more damage.
- A well-known teaching example compares the number of **storks** and the number of **births** in European countries:
  they are positively correlated. The lurking variable is the **size of the country**: bigger countries have more
  storks and more people.
- Many things that grow over the years (phone sales, average height, the number of TV channels) are correlated with
  each other just because all of them grow with **time**. Time is a common lurking variable.

### Explanation 4: coincidence

With only a few data points, a correlation can appear by pure luck. Two friends each roll a die four times and pair
up their rolls: (2, 1), (3, 4), (5, 5), (6, 6). The scatter plot rises almost perfectly, yet the dice cannot affect
each other.

Coincidence also strikes when someone searches through **many** pairs of variables. If you compare hundreds of
unrelated things, a few pairs will line up closely just by chance, and those are the ones that get noticed. The more
pairs you search, the more surprising matches you will find, with no meaning at all.

### So how can we ever show cause?

The strongest way is an **experiment**. Instead of just watching what people do, the researcher **decides** who gets
the treatment, and decides it **at random**, like tossing a coin for each person.

Why does randomness help? Suppose we want to know whether a new study app raises test scores. If students **choose**
whether to use the app, keen students may choose it more often, and keenness is a lurking variable. But if a coin
decides, then keen and less keen students, older and younger, tired and rested, all end up spread fairly evenly
between the two groups. The only steady difference between the groups is the app. So if the app group scores clearly
higher, the app is the likely cause.

A study where researchers only **observe** what people already do, without assigning anything, is an **observational
study**. It can show correlation and give good hints, but lurking variables can never be fully ruled out. You will
study experiments properly in [level 8](../level-8/index.md).

Sometimes an experiment is impossible or wrong: you cannot make people smoke to see if they get sick. Then scientists
build a case from many observational studies, from a known **mechanism** (how the cause works), and from a
**dose-response** pattern (more of the cause, more of the effect). That is how the harm of smoking was established.

### Questions to ask about any correlation

1. Could B cause A instead?
2. Is there a lurking variable that could affect both?
3. How many data points are there, and how many pairs were searched? Could it be chance?
4. Was it an experiment with random assignment, or an observational study?

<figure class="play" data-play="scatter"><span class="ai-tag">AI-created</span><figcaption><b>A link is not a cause.</b> Two things can move together because a third thing drives both. Made-up points.</figcaption></figure>

## Worked examples

**1. Lurking variable.** In a survey, people who use more sunscreen got sunburned more often last summer. Does
sunscreen cause sunburn?

Lurking variable: **time spent in strong sun**. People who spend many hours in the sun use more sunscreen **and** get
sunburned more. The correlation says nothing about whether sunscreen works.

**2. Reverse cause.** Cities with more police officers have more crime. Do police cause crime?

More likely the reverse: cities with more crime **hire** more police. (Size of the city is also a lurking variable:
bigger cities have more of both.)

**3. Designing an experiment.** A school wants to know whether a 10-minute morning exercise session improves
concentration.

1. Take 100 volunteer students.
2. For each, toss a coin: heads, the student joins the exercise session for a month; tails, they do not.
3. At the end, give both groups the same concentration test.
4. Because a coin decided the groups, other differences (sleep, age, interest in sport) should be spread evenly. A
   clear difference in test results can be credited to the exercise.

**4. A headline.** "Children who eat breakfast do better at school." Possible explanations besides "breakfast
causes better marks": families that have time and money for breakfast every day may also have time to help with
homework, quiet places to study, and so on (lurking variable: home situation). The headline may still be true, but this
study alone cannot show it.

## Try it

1. For each correlation, give a likely lurking variable: (a) Countries with more TVs per person have longer life
   expectancy. (b) Among adults, people with grey hair have more wrinkles. (c) In a year, months with more
   sunglasses sold have more cases of sunstroke.
2. Students who sit at the front of the class tend to get higher marks. Give a reverse-cause explanation and a
   lurking-variable explanation.
3. Explain why "a strong correlation" is not enough to show cause, in one or two sentences.
4. A researcher looks at 500 pairs of unrelated variables and reports the one pair with the strongest correlation.
   Why should you be suspicious?
5. Design a simple experiment to test whether listening to music while studying changes test scores.
6. In the dice example, the four pairs showed a near perfect correlation. What would probably happen with 100 rolls
   each?
7. Which of these can show cause: (a) a survey of 10 000 people about their habits, (b) an experiment where a coin
   decides who gets a new medicine and who gets a dummy pill? Explain.

??? note "Answers"
    1. (a) **Wealth** of the country: richer countries have more TVs and better health care, food and water.
       (b) **Age**: older people have more grey hair and more wrinkles. (c) **Sunny, hot weather**: it sells
       sunglasses and causes sunstroke.
    2. Reverse cause (or rather, choice): students who already work hard and like the subject may **choose** to sit
       at the front. Lurking variable: **motivation** or interest, which affects both where students sit and how much
       they study. (Also possible: students who see and hear poorly at the back really do learn less, a true cause.
       Only an experiment that assigns seats at random could tell.)
    3. A correlation only shows that two variables move together. The cause could run the other way, a lurking
       variable could cause both, or it could be chance.
    4. Among 500 unrelated pairs, some will look strongly correlated just by chance. Picking the best of many is
       almost guaranteed to find a coincidence.
    5. For example: take a group of volunteers. For each, toss a coin to decide **music** or **silence**. Both groups
       study the same material for the same time, then take the same test. Compare the groups' scores. Random
       assignment spreads other differences evenly, so a clear difference points to the music.
    6. With 100 rolls each, the scatter plot would almost certainly look like a shapeless cloud, with no correlation.
       The pattern in 4 rolls was luck.
    7. (b). A survey (a) is observational: people choose their own habits, so lurking variables may explain any link.
       In the experiment (b), chance decides who gets the medicine, so the groups are alike in everything except the
       medicine.

## Common mistake

**Reading "linked to" as "causes".** Headlines often say a food is "linked to" a disease. "Linked" usually means
correlated in an observational study. Before believing that one thing causes another, ask how the study was done and
whether a lurking variable could explain the link.

**Thinking correlation means nothing.** The opposite mistake is also wrong. A correlation is a real fact about the
data and often a valuable clue. It is a starting point for asking "why?", not a final answer.

## Where it leads

- Back: [Interpolation and extrapolation](04-interpolation-extrapolation.md) · Next: [Standard deviation](06-standard-deviation.md)
- [Level 6 page](index.md) · [Statistics topic page](../index.md)
- Experiments, control groups, placebos and Simpson's paradox (a lurking variable that flips a result):
  [level 8](../level-8/index.md).
- "If A then B" is not the same as "if B then A": see [logic](../../logic/index.md).
- Chance coincidences and why searching many pairs finds them: [probability](../../probability/index.md).
