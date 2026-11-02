---
title: "Beyond: Reading data honestly"
---

# Beyond: Reading data honestly

*Statistics and data · step 5 of 5*

## A question to start

Here is a puzzle with made-up but perfectly possible numbers. Two hospitals each treat 500 patients with the same
illness. At Hospital A, 290 recover (58%). At Hospital B, 380 recover (76%). Hospital B looks far better. But when
you split the patients into mild cases and severe cases, Hospital A has the **higher** recovery rate in **both**
groups. How can a hospital be better for mild cases and better for severe cases, but worse overall? By the end of
this page you will see exactly how, and you will have a set of questions to ask of any number you read in the news.

## The idea

### Samples and populations

The **population** is the whole group you want to know about: every voter in a country, every lake in a province.
Usually you cannot measure them all, so you measure a **sample**, a smaller group, and use it to estimate the
population. A number that describes the population (such as the true mean) is a **parameter**; the matching number
from the sample is a **statistic**.

A sample is only useful if it is like the population. The best way to make sure of that is a **random sample**,
where every member of the population has the same chance of being chosen.

### Bias: when the sample lies

A sample is **biased** if the way it was chosen pushes the answer in one direction.

- **Convenience sampling.** Asking only the people near you. A survey about bus fares taken at a bus stop hears
  only from people who ride buses.
- **Voluntary response.** Letting people choose whether to answer. People with strong feelings reply; the rest stay
  quiet.
- **Leading questions.** "Don't you agree that the park is a disgrace?" invites a yes.
- **Survivorship.** Looking only at what is left. If you study only companies that still exist, every strategy looks
  successful, because the failures are not there to count.

A huge biased sample is worse than a small random one, because it gives a wrong answer with great confidence.

### How sure can a sample be?

Even a perfect random sample will not hit the population's value exactly; a different sample would give a slightly
different answer. For a poll that estimates a percentage from $n$ randomly chosen people, a good rule of thumb for
the **margin of error** (at the usual 95% level of confidence) is

$$\text{margin of error} \approx \frac{1}{\sqrt{n}}.$$

With $n = 1000$, $\dfrac{1}{\sqrt{1000}} \approx 0.032$, so the result is good to about 3 percentage points either
way. This is why so many polls ask about a thousand people. Notice the square root: to halve the margin of error you
need **four** times as many people. And the margin of error measures only the luck of the draw; it says nothing
about bias.

### Correlation: two things moving together

A **scatter plot** shows pairs of values, such as hours studied and test score, as dots. If the dots slope upwards,
the two are **positively correlated**; downwards, **negatively correlated**. The **correlation coefficient** $r$
measures how close the dots are to a straight line:

$$r = \frac{\sum (x - \bar{x})(y - \bar{y})}{\sqrt{\sum (x - \bar{x})^2 \, \sum (y - \bar{y})^2}}$$

It is always between −1 and 1. $r = 1$ means a perfect upward line, $r = -1$ a perfect downward line, and $r$ near 0
means no straight-line pattern (though there might be a curved one).

### Correlation is not causation

Towns that eat more ice cream have more drownings. Ice cream does not cause drowning: hot weather causes both more
ice cream and more swimming. A hidden third thing like the weather is called a **lurking variable** (or confounder).
Before believing that A causes B, ask: could B cause A? Could something else cause both? Could it be chance? The
reliable way to show cause is an **experiment** in which the groups are chosen at random, so that lurking variables
are spread evenly between them.

### The line of best fit

When a scatter plot looks roughly straight, you can summarise it with a line $y = a + bx$. The **least-squares
line** is the line that makes the sum of the squared vertical distances from the dots to the line as small as
possible. Its slope and intercept are

$$b = \frac{\sum (x - \bar{x})(y - \bar{y})}{\sum (x - \bar{x})^2}, \qquad a = \bar{y} - b\,\bar{x}.$$

The line always passes through the point $(\bar{x}, \bar{y})$. Using it to predict inside the range of your data is
**interpolation**, and it is fairly safe; predicting far outside it is **extrapolation**, and it can go badly wrong.

### Graphs that mislead

A bar chart whose axis starts at 48 instead of 0 can make 52 look twice as big as 50. A chart with uneven gaps
between dates can turn a slow change into a sudden jump. A picture where a doubled quantity is drawn twice as tall
**and** twice as wide looks four times bigger. Always read the axes before you read the picture.

### Simpson's paradox

Back to the hospitals. Here is the full table.

| | Mild: recovered / treated | Severe: recovered / treated | All patients |
| --- | --- | --- | --- |
| Hospital A | 90 / 100 = 90% | 200 / 400 = 50% | 290 / 500 = 58% |
| Hospital B | 340 / 400 = 85% | 40 / 100 = 40% | 380 / 500 = 76% |

Hospital A wins among mild patients (90% against 85%) and among severe patients (50% against 40%). But Hospital A
treats mostly **severe** cases, which recover less often whoever treats them, while Hospital B treats mostly mild
ones. The overall percentage mixes the groups in different amounts, and the mix, not the quality of care, decides
who looks better. This reversal is called **Simpson's paradox**, and it has turned up in real studies of medicine,
university admissions and sport. The lesson: when groups differ in an important way, compare like with like.

## Worked example: correlation and a line of best fit

Five students record hours of practice $x$ and points scored $y$ in a game:

| $x$ | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| $y$ | 2 | 4 | 5 | 4 | 5 |

1. **Means.** $\bar{x} = 15 \div 5 = 3$ and $\bar{y} = 20 \div 5 = 4$.
2. **Deviations.** $x - \bar{x}$: $-2, -1, 0, 1, 2$. $y - \bar{y}$: $-2, 0, 1, 0, 1$.
3. **Sums.** Products: $4 + 0 + 0 + 0 + 2 = 6$. Squares of $x$ deviations: $4 + 1 + 0 + 1 + 4 = 10$. Squares of $y$
   deviations: $4 + 0 + 1 + 0 + 1 = 6$.
4. **Correlation.** $r = \dfrac{6}{\sqrt{10 \times 6}} = \dfrac{6}{\sqrt{60}} \approx 0.77$, a fairly strong
   positive correlation.
5. **Slope.** $b = \dfrac{6}{10} = 0.6$ points per hour.
6. **Intercept.** $a = 4 - 0.6 \times 3 = 2.2$.

The line of best fit is $y = 2.2 + 0.6x$. Check: at $x = 3$ it gives $2.2 + 1.8 = 4$, which is $\bar{y}$, as it must.
With only five students, though, we should not trust it too far, and it says nothing about whether practice
*causes* the points.

## Try it

1. A bar chart's axis starts at 48. Bar P shows 50 and bar Q shows 52. How many times taller does Q's bar look than
   P's? How much bigger is Q really, as a percent?
2. A poll of 400 random people finds that 55% like a plan. Roughly what is the margin of error? How many people would
   you need to halve it?
3. Cities with more firefighters on duty at a fire have more fire damage. Should cities send fewer firefighters?
4. Use the line $y = 2.2 + 0.6x$ from the worked example to predict the score after 4.5 hours of practice. Why would
   it be silly to predict the score after 50 hours?
5. A website asks its readers to vote on whether they enjoy the website. 92% say yes. What is wrong with
   concluding that 92% of people enjoy it?

??? note "Answers"
    1. Above the axis start, P's bar is $50 - 48 = 2$ units tall and Q's is $52 - 48 = 4$, so Q looks **twice** as
       tall. Really Q is bigger by $\dfrac{2}{50} = 4\%$.
    2. $\dfrac{1}{\sqrt{400}} = \dfrac{1}{20} = 5\%$, so the true value is likely between about 50% and 60%. To halve
       the margin you need 4 times as many people: 1600.
    3. No. A lurking variable, the size of the fire, causes both: bigger fires get more firefighters **and** do more
       damage. Correlation alone does not show that firefighters cause damage.
    4. $2.2 + 0.6 \times 4.5 = 2.2 + 2.7 = 4.9$ points. 50 hours is far outside the data (1 to 5 hours), so
       extrapolating would predict 32.2 points, and nothing tells us the straight-line pattern goes on that far.
    5. It is a voluntary response sample of the website's own readers, who already chose to visit it. People who
       dislike the site are mostly not there to vote. The sample is biased, so it says little about people in general.

## Common mistake

**Trusting a big sample because it is big.** Size fixes only the random wobble from sample to sample; it does
nothing about bias. A million self-selected online votes can be further from the truth than a thousand people chosen
at random. Ask *how* the data was collected before you ask how much of it there is.

## Where it leads

- Back a step: [Master: distributions and the normal curve](04-master.md)
- Polls, margins of error and experiments rest on [probability](../probability/index.md); the slope of a line is
  studied in [algebra](../algebra/index.md) and [change and motion](../change/index.md).
- The least-squares line is an *orthogonal projection*, a central idea of linear algebra:
  [MAT247 Unit 2 (orthogonality and Gram–Schmidt)](../../uoft/MAT247H1/unit02.md).
- The other topics: [all topics](../index.md).
