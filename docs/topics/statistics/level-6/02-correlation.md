---
title: "Correlation"
---

# Correlation

*Statistics and data · level 6, lesson 2 of 6*

## A question to start

Here are three claims you might hear:

- "Older cars sell for less."
- "Taller people tend to have bigger feet."
- "Your birthday month tells you nothing about how good you are at math."

Each one is a claim about **two variables** and how they move together, or do not. In the last lesson you drew
scatter plots. Now you learn to describe what a scatter plot shows in precise, honest words, the way a statistician
would, so that "tend to" means something definite.

## The idea

### Correlation

When two variables tend to change together in a steady way, we say they are **correlated**, and the relationship is
called a **correlation**. A scatter plot shows it as a cloud of dots with a clear direction. Here are the main kinds:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 245" role="img" aria-label="Six small scatter plots: strong positive with dots close to a rising line; weak positive with a loose rising cloud; no correlation with dots everywhere; strong negative close to a falling line; weak negative loose and falling; and a U-shaped curve">
  <rect x="10" y="10" width="120" height="90" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="50.6" cy="63.6" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="23" cy="78.6" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="73.9" cy="53.4" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="70.8" cy="53.7" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="19.1" cy="85.7" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="25" cy="80.7" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="61.7" cy="59.1" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="39.6" cy="74.2" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="84" cy="42.9" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="58.6" cy="63" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="122.4" cy="18.5" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="46.9" cy="66.6" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="30.9" cy="75.7" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="104.8" cy="32.9" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="34.9" cy="79.4" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="56" cy="65.4" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <text x="70" y="116" font-size="11" text-anchor="middle" fill="currentColor">strong positive</text>
  <rect x="150" y="10" width="120" height="90" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="215.3" cy="48.8" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="177.7" cy="67.5" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="229.8" cy="55.7" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="219.4" cy="46.3" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="204.9" cy="63.8" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="231.9" cy="25.1" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="181.9" cy="80.4" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="251.3" cy="43.6" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="235.2" cy="51.9" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="168" cy="40.7" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="201" cy="58.6" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="208.8" cy="62.4" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="159.3" cy="87.2" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="218" cy="69.3" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="251.3" cy="44.2" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="220.4" cy="33.4" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <text x="210" y="116" font-size="11" text-anchor="middle" fill="currentColor">weak positive</text>
  <rect x="290" y="10" width="120" height="90" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="358.8" cy="58.5" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="387.4" cy="19.4" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="347.2" cy="41.9" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="301.7" cy="38.9" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="366.2" cy="15.6" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="385.4" cy="72.2" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="337.4" cy="41.5" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="297.5" cy="58.1" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="313.5" cy="85.6" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="301.5" cy="33.5" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="309.2" cy="75.2" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="338" cy="25.3" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="303.9" cy="59.1" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="355.4" cy="24.3" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="385.1" cy="25.9" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="325.6" cy="61.8" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <text x="350" y="116" font-size="11" text-anchor="middle" fill="currentColor">no correlation</text>
  <rect x="10" y="130" width="120" height="90" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="54.5" cy="160" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="31.6" cy="158" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="34.4" cy="154" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="68.3" cy="171.7" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="79.8" cy="180.7" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="61.1" cy="169.5" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="55.6" cy="173.9" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="91" cy="190.4" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="71.7" cy="179.5" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="20.9" cy="149.7" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="113.9" cy="199.3" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="102.8" cy="200.5" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="58.2" cy="169.3" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="84.8" cy="182.7" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="21.8" cy="145" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="32.9" cy="152.5" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <text x="70" y="236" font-size="11" text-anchor="middle" fill="currentColor">strong negative</text>
  <rect x="150" y="130" width="120" height="90" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="192.4" cy="167.1" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="171.6" cy="158.2" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="166.2" cy="157.7" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="251.2" cy="190.9" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="222.5" cy="175" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="193.2" cy="160.3" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="195.1" cy="151.8" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="264.2" cy="182.4" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="206.3" cy="178.4" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="166.2" cy="155.4" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="192.7" cy="169.5" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="172.8" cy="136.3" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="157.5" cy="138.1" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="171.1" cy="162.5" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="214.7" cy="162.6" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="262.6" cy="195.5" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <text x="210" y="236" font-size="11" text-anchor="middle" fill="currentColor">weak negative</text>
  <rect x="290" y="130" width="120" height="90" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="390" cy="173.8" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="335.3" cy="204.2" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="313.4" cy="178.2" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="380.7" cy="190" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="331.3" cy="198.8" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="403.3" cy="142.5" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="388.8" cy="173.6" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="376.4" cy="196.4" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="319.9" cy="190.1" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="298.2" cy="150.5" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="298.1" cy="150.3" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="371.2" cy="195.7" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="400.2" cy="159" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="403.7" cy="144.2" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="400.1" cy="155.1" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="320" cy="186.6" r="3" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <text x="350" y="236" font-size="11" text-anchor="middle" fill="currentColor">curved, not a line</text>
</svg>
</div>

### Direction: positive, negative or none

- **Positive correlation**: as one variable increases, the other **tends to increase** too. The dots rise from lower
  left to upper right. Hours studied and test score; height and foot length.
- **Negative correlation**: as one variable increases, the other **tends to decrease**. The dots fall from upper left
  to lower right. A car's age and its price; outdoor temperature and hot chocolate sales.
- **No correlation**: there is no steady up or down trend. The dots form a shapeless cloud. Birthday month and math
  marks.

"Positive" and "negative" here are about direction only. A negative correlation is not "bad"; the correlation between
practice mistakes and skill could be negative, and that is good news.

### Why the direction makes sense: the four boxes

Here is a way to see direction without guessing. Draw a vertical line at the **mean of the $x$ values** and a
horizontal line at the **mean of the $y$ values**. They cut the scatter plot into four boxes.

- A dot in the **upper right** box has an above-average $x$ **and** an above-average $y$.
- A dot in the **lower left** box has both below average.
- A dot in the **upper left** or **lower right** box has one above and one below average.

If most dots are in the upper right and lower left, then "above average" in one variable goes with "above average" in
the other: that is a **positive** correlation. If most are in the upper left and lower right, it is **negative**. If
the dots are spread evenly over all four boxes, there is **no** correlation.

For the study data of lesson 1, the means are $\bar{x} = 43 \div 10 = 4.3$ hours and $\bar{y} = 701 \div 10 = 70.1$
points. (The bar over a letter means "the mean of".) Counting dots: 5 are in the lower left, 4 in the upper right,
and just 1, student F at (5, 68), is in the lower right. Nine dots out of ten agree: a clear positive correlation.

This idea is not just a trick. In [level 7](../level-7/index.md) it grows into the **correlation coefficient** $r$, a
number from $-1$ to $1$ that is built by adding up exactly these "agree or disagree" amounts.

### Strength: strong, moderate or weak

**Strength** describes how closely the dots follow the trend.

- **Strong**: the dots lie in a narrow band. If you know $x$, you can predict $y$ quite well.
- **Moderate**: a clear trend, but with a lot of scatter.
- **Weak**: you can just about see a trend, but the dots are widely scattered. Knowing $x$ helps only a little.

Strength and direction are separate. A correlation can be strong and negative, or weak and positive. A **perfect**
correlation is one where every dot lies exactly on a line; real data are almost never perfect.

There is no exact border between "strong" and "moderate" in words. That is one reason statisticians invented the
number $r$. For now, judge by eye, and be honest about doubtful cases: "moderate to strong" is a fine answer.

### Form: straight or curved

The **form** is the shape of the pattern. Often the dots follow a roughly **straight line**: a **linear** pattern.
But sometimes they follow a **curve**, like the U-shape in the last small plot above, or the planets' year lengths in
lesson 1, which curve upwards.

A curved pattern can be very strong even though the dots do not lie along a line. The U-shape above is strong (the
dots hug the curve), but it is neither positive nor negative overall: it falls, then rises. Words like "positive" fit
best for patterns that go one way throughout.

### Outliers and clusters

Finally, look for dots that do not fit:

- An **outlier** is a dot far from the overall pattern. In a scatter plot, a dot can be an outlier even if its $x$
  and $y$ values are each ordinary. A student who studied 8 hours and scored 40 would be an outlier, though 8 hours
  and 40 points both occur elsewhere.
- **Clusters** are separate groups of dots. They often mean two different kinds of thing are mixed together (for
  example, children and adults in one plot of height and weight).

One outlier can make a correlation look weaker than it is, or a weak correlation look strong. Always mention them.

### Describing a scatter plot: the four words

A full description names **direction**, **strength**, **form**, and any **outliers or clusters**, and it uses the
names of the variables, in context. For example:

> "There is a strong, positive, roughly linear relationship between hours studied and test score: students who
> studied longer tended to score higher. There are no clear outliers."

Notice "tended to". A correlation describes a **tendency** in the group, not a rule for every person. Student F
studied more than E and scored less, and that does not contradict the positive correlation.

## Worked examples

**1. Cars.** The ages (in years) and prices (in thousands of dollars) of six used cars of the same model are:
(1, 28), (2, 25), (3, 22), (5, 17), (6, 15), (8, 11).

As the age goes up by 1 year, the price drops by about 2 or 3 thousand dollars each time, very steadily. Description:
"a **strong, negative, linear** relationship between age and price: older cars of this model sell for less."

**2. The four boxes.** For the five points (2, 3), (3, 6), (4, 2), (7, 8), (9, 6):

1. $\bar{x} = (2 + 3 + 4 + 7 + 9) \div 5 = 25 \div 5 = 5$ and $\bar{y} = (3 + 6 + 2 + 8 + 6) \div 5 = 25 \div 5 = 5$.
2. (2, 3) and (4, 2): both coordinates below 5, **lower left**. (7, 8) and (9, 6): both above, **upper right**.
   (3, 6): $x$ below and $y$ above, **upper left**.
3. Four of five dots agree, one disagrees: a **positive** correlation, probably moderate, since there are few points
   and one goes against the trend.

**3. The planets.** For the planets' distances and year lengths (lesson 1), the description is: "a **strong, positive,
curved** relationship: the further a planet is from the Sun, the longer its year, and the year length grows faster
and faster as distance increases." Here the form matters: a straight line would describe these data badly.

**4. No correlation.** Thirty students' birthday months (1 to 12) and math marks: the scatter plot is a shapeless
cloud, with high and low marks in every month. Description: "**no** correlation between birthday month and math
mark." That is a result too: it tells us birthday month is no use for predicting marks.

## Try it

1. Positive, negative or none? (a) Hours of practice and number of mistakes in a piano piece. (b) Height of a
   building and number of floors. (c) Last digit of your phone number and your height.
2. Describe in full (direction, strength, form) the arm span and height data of lesson 1:
   (150, 148), (162, 160), (170, 172), (158, 155), (175, 178), (165, 163).
3. For the points (1, 9), (2, 8), (4, 6), (6, 5), (7, 2), find $\bar{x}$ and $\bar{y}$ and use the four boxes to
   decide the direction.
4. A scatter plot of age (5 to 60 years) against height shows the dots rising steeply until about age 18, then going
   flat. Describe the form. Is "positive correlation" a good full description?
5. Explain the difference between a **weak** positive correlation and a **negative** correlation.
6. In a scatter plot of 30 students' heights and weights, one student is very tall but very light. What is this dot
   called, and why should you mention it?
7. "There is a strong positive correlation between hours studied and score, so if I study one more hour I will
   certainly score higher." What is wrong with this sentence?

??? note "Answers"
    1. (a) **Negative**: more practice tends to go with fewer mistakes. (b) **Positive**, and very strong: taller
       buildings have more floors. (c) **None**: the last digit of a phone number has nothing to do with height.
    2. "A **strong, positive, linear** relationship: people with longer arm spans tend to be taller, and the dots lie
       close to a straight line. No outliers."
    3. $\bar{x} = 20 \div 5 = 4$, $\bar{y} = 30 \div 5 = 6$. (1, 9) and (2, 8): $x$ below 4, $y$ above 6, **upper
       left**. (6, 5) and (7, 2): $x$ above, $y$ below, **lower right**. (4, 6) lies on both lines. The dots sit in
       the upper left and lower right: a **negative** correlation.
    4. The form is **curved** (it bends and levels off). "Positive correlation" alone hides the most interesting part,
       that growth stops around 18. A good description: "strong and positive up to about 18, then roughly flat."
    5. In a weak positive correlation, $y$ still tends to go **up** as $x$ goes up, but the dots are widely scattered.
       In a negative correlation, $y$ tends to go **down** as $x$ goes up. Strength (weak or strong) and direction
       (positive or negative) are separate features.
    6. It is an **outlier**: a dot far from the overall pattern. You should mention it because it may be a mistake in
       the data, or a real but unusual person, and it can make the correlation look weaker than it is.
    7. A correlation describes a **tendency** in a group, not a promise for each person (student E beat student F with
       less study). And a correlation alone does not prove that studying **causes** the higher score (lesson 5).

## Common mistake

**Using "negative" to mean "no correlation" or "bad".** Negative correlation is a real, often strong, relationship:
as one goes up, the other goes down. "No correlation" means no steady trend at all.

**Forgetting the form.** Saying "there is no correlation" for a strong U-shaped pattern is misleading: there is a
strong relationship, just not a straight-line one. Describe what you see.

## Where it leads

- Back: [Scatter plots](01-scatter-plots.md) · Next: [Line of best fit by eye](03-line-best-fit.md)
- [Level 6 page](index.md) · [Statistics topic page](../index.md)
- The four-boxes idea becomes the correlation coefficient $r$ in [level 7](../level-7/index.md).
- When two events are linked in probability, it is called dependence: see
  [probability level 6](../../probability/level-6/02-independence-properly.md).
