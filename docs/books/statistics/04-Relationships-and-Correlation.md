# 4. Relationships and correlation

*So far each variable has been studied alone. But most interesting questions are about two variables together: does
using a phone at bedtime go with poorer sleep, does studying go with higher marks, does a university admit men and women
at different rates? This chapter builds the tools for two variables at once. For two categorical variables it uses
two-way tables and conditional proportions. For two quantitative variables it defines the correlation coefficient,
proves that it always lies between $-1$ and $1$, and derives the least squares line with nothing more than the algebra
of Chapter 3. Then it turns to the most important warnings in statistics: correlation is not causation, and an
association can reverse when you split the data into groups, as it famously did in the 1973 graduate admissions at the
University of California, Berkeley.*

!!! abstract "In this chapter"

    **You will learn:**

    - two-way tables: joint, marginal and conditional distributions, and what "association" means for categories
    - covariance and the correlation coefficient $r$, its properties, and a proof that $-1 \le r \le 1$ with equality only for a straight line
    - the least squares line, derived without calculus, and why its slope is $r\,s_y/s_x$
    - residuals, residual plots, and $r^2$ as the fraction of variation explained (with proof)
    - why correlation does not imply causation: reverse causation, confounders, selection and ecological fallacies
    - Simpson's paradox, its algebra, and the Berkeley admissions data of 1973 told accurately

    **You need:** [Chapter 2](02-Pictures-of-Data.md) (scatter plots) and [Chapter 3](03-Summaries.md) (means,
    standard deviations, z-scores, and Theorem 3.4, which says the mean minimises squared error). Lines and slopes from
    [Algebra, chapter 3](../algebra/03-Lines-and-Linear-Systems.md). For a gentler version, see the Topics lessons
    [Tables with totals](../../topics/statistics/level-2/02-tables-totals.md),
    [Correlation](../../topics/statistics/level-6/02-correlation.md),
    [Line of best fit by eye](../../topics/statistics/level-6/03-line-best-fit.md),
    [Correlation is not causation](../../topics/statistics/level-6/05-correlation-causation.md),
    [The correlation coefficient r](../../topics/statistics/level-7/04-correlation-coefficient.md),
    [Least-squares regression](../../topics/statistics/level-7/05-least-squares.md) and
    [Simpson's paradox](../../topics/statistics/level-8/05-simpsons-paradox.md).

    **Levels:** 4.1 and 4.5 are beginner; 4.2 is beginner, with proofs at intermediate level; 4.3 and 4.4 are
    intermediate; 4.6 is beginner to intermediate.

## 4.1 Two-way tables

**A question.** A made-up survey asks 200 adults two questions: "Do you use your phone in bed before sleeping?" and
"Would you call your sleep good or poor?". Is there a relationship between the answers?

When two **categorical** variables are recorded on the same units, count the units in each combination. The result is
a **two-way table** (or **contingency table**, or **cross-tabulation**).

| | good sleep | poor sleep | total |
| --- | --- | --- | --- |
| phone in bed: yes | 48 | 72 | 120 |
| phone in bed: no | 52 | 28 | 80 |
| **total** | 100 | 100 | 200 |

**Check:** $48 + 72 = 120$, $52 + 28 = 80$, $48 + 52 = 100$, $72 + 28 = 100$, and both sets of totals add to 200.

Three kinds of distribution can be read from it.

- **The joint distribution**: each cell divided by the grand total. $48/200 = 24\%$ of the people use their phone in bed
  *and* sleep well.
- **The marginal distributions**: the row and column totals divided by the grand total (they sit in the margins of the
  table). $120/200 = 60\%$ use their phone in bed; $100/200 = 50\%$ sleep well. Each marginal distribution describes one
  variable on its own and says nothing about the relationship.
- **The conditional distributions**: each cell divided by its row total (or its column total). Among phone users,
  $72/120 = 60\%$ sleep poorly; among non-users, $28/80 = 35\%$ sleep poorly.

**Definition.** Two categorical variables are **associated** in a table if the conditional distribution of one variable
differs from row to row (equivalently, from column to column). If every row has the same conditional distribution, there
is **no association**, and then each row's distribution equals the marginal one.

Here they are clearly associated: 60% poor sleep among phone users against 35% among non-users. In the language of
probability ([Probability, chapter 3](../probability/03-Conditional-Probability-and-Independence.md)), "no association"
in a table is the data version of **independence**: $P(\text{poor} \mid \text{phone}) = P(\text{poor})$.

**Which way to divide?** Divide by the totals of the variable you are treating as explanatory. If the question is "does
phone use go with poor sleep?", compare the rate of poor sleep across the phone groups, as above. Dividing the other way
("of the poor sleepers, what fraction use phones?") answers a different question: $72/100 = 72\%$ of poor sleepers use
a phone in bed, against $48/100 = 48\%$ of good sleepers. Both are correct; confusing them is a classic error (the
"prosecutor's fallacy" of [Probability, chapter 4](../probability/04-Bayes-Theorem.md) is the same confusion).

**Two ways to compare rates.** The **difference** in rates is $60\% - 35\% = 25$ percentage points. The **ratio** is
$0.60/0.35 \approx 1.71$: phone users in this made-up sample are about 1.7 times as likely to report poor sleep. Chapter
10 develops these (risk difference, relative risk, odds ratio) and tests whether an association in a sample could be
chance.

**What the table does not say.** That phones *cause* poor sleep. Perhaps people who sleep poorly reach for their phones
because they cannot sleep (reverse causation); perhaps stress causes both (a confounder). Section 4.5 is about this.

## 4.2 The correlation coefficient

**A question.** In Chapter 2 we described the scatter plot of study hours and test scores as "strong, positive and
linear". Can that be made into a single number that means the same thing whatever the units?

### Building it from z-scores

Take $n$ pairs $(x_1, y_1), \dots, (x_n, y_n)$, with means $\bar{x}, \bar{y}$ and standard deviations $s_x, s_y$. Draw a
vertical line at $\bar{x}$ and a horizontal line at $\bar{y}$; they cut the scatter plot into four quarters.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 250" role="img" aria-label="The 12 made-up students again, with a vertical line at the mean of 4.75 hours and a horizontal line at the mean score of about 68.2. Most points lie in the upper right and lower left quarters, where the product of the deviations is positive">
  <rect x="216.2" y="10" width="183.8" height="87.3" fill="#7ccf9a" fill-opacity="0.25"/>
  <rect x="50" y="97.3" width="166.2" height="112.7" fill="#7ccf9a" fill-opacity="0.25"/>
  <line x1="50" y1="210" x2="400" y2="210" stroke="currentColor"/>
  <line x1="50" y1="210" x2="50" y2="10" stroke="currentColor"/>
  <line x1="216.2" y1="210" x2="216.2" y2="10" stroke="currentColor" stroke-dasharray="5 4"/>
  <line x1="50" y1="97.3" x2="400" y2="97.3" stroke="currentColor" stroke-dasharray="5 4"/>
  <text x="50" y="226" text-anchor="middle" font-size="11" fill="currentColor">0</text>
  <text x="120" y="226" text-anchor="middle" font-size="11" fill="currentColor">2</text>
  <text x="190" y="226" text-anchor="middle" font-size="11" fill="currentColor">4</text>
  <text x="260" y="226" text-anchor="middle" font-size="11" fill="currentColor">6</text>
  <text x="330" y="226" text-anchor="middle" font-size="11" fill="currentColor">8</text>
  <text x="400" y="226" text-anchor="middle" font-size="11" fill="currentColor">10</text>
  <text x="44" y="214" text-anchor="end" font-size="11" fill="currentColor">40</text>
  <text x="44" y="174" text-anchor="end" font-size="11" fill="currentColor">50</text>
  <text x="44" y="134" text-anchor="end" font-size="11" fill="currentColor">60</text>
  <text x="44" y="94" text-anchor="end" font-size="11" fill="currentColor">70</text>
  <text x="44" y="54" text-anchor="end" font-size="11" fill="currentColor">80</text>
  <text x="44" y="14" text-anchor="end" font-size="11" fill="currentColor">90</text>
  <circle cx="85" cy="162" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="120" cy="150" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="120" cy="126" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="155" cy="138" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="190" cy="114" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="190" cy="90" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="225" cy="98" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="260" cy="70" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="260" cy="86" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="295" cy="50" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="330" cy="58" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="365" cy="26" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <text x="382.5" y="18" text-anchor="end" font-size="13" fill="currentColor">+ × + = +</text>
  <text x="60.5" y="202" font-size="13" fill="currentColor">− × − = +</text>
  <text x="60.5" y="18" font-size="13" fill="currentColor">− × + = −</text>
  <text x="382.5" y="202" text-anchor="end" font-size="13" fill="currentColor">+ × − = −</text>
</svg>
</div>

For a point in the upper right quarter, both deviations $x_i - \bar{x}$ and $y_i - \bar{y}$ are positive, so their
product is positive. In the lower left, both are negative, and the product is again positive. In the other two quarters
the product is negative. So the sum of the products $\sum (x_i - \bar{x})(y_i - \bar{y})$ is large and positive when
most points lie in the shaded quarters (a positive association), large and negative when most lie in the other two,
and near zero when they are spread evenly.

That sum depends on the units (minutes or hours) and on $n$. To remove both, use z-scores, which have no units, and
average.

**Definitions.** The **sample covariance** of $x$ and $y$ is

$$
s_{xy} = \frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})(y_i - \bar{y}),
$$

and the **correlation coefficient** (Pearson's $r$) is

$$
r = \frac{1}{n-1}\sum_{i=1}^{n} \left(\frac{x_i - \bar{x}}{s_x}\right)\left(\frac{y_i - \bar{y}}{s_y}\right) = \frac{s_{xy}}{s_x s_y} .
$$

The divisors $n - 1$ cancel, so it is often easiest to compute with the three sums

$$
S_{xx} = \sum (x_i - \bar{x})^2, \qquad S_{yy} = \sum (y_i - \bar{y})^2, \qquad S_{xy} = \sum (x_i - \bar{x})(y_i - \bar{y}),
$$

and then

$$
r = \frac{S_{xy}}{\sqrt{S_{xx}\,S_{yy}}} .
$$

(This needs $S_{xx} > 0$ and $S_{yy} > 0$: if all the $x$ are equal, or all the $y$, there is no correlation to speak
of.)

**Worked example 4.1.** Five made-up points: $(1, 2), (2, 4), (3, 5), (4, 4), (5, 5)$.

1. Means: $\bar{x} = 15/5 = 3$, $\bar{y} = 20/5 = 4$.
2. Deviations: $x_i - \bar{x} = -2, -1, 0, 1, 2$ and $y_i - \bar{y} = -2, 0, 1, 0, 1$.
3. $S_{xx} = 4 + 1 + 0 + 1 + 4 = 10$; $S_{yy} = 4 + 0 + 1 + 0 + 1 = 6$.
4. Products: $4, 0, 0, 0, 2$, so $S_{xy} = 6$.
5. $r = 6/\sqrt{10 \times 6} = 6/\sqrt{60} \approx 0.775$.

For the 12 students of Chapter 2, the same computation gives $r \approx 0.965$.

### Properties of $r$

**1. Symmetry.** Swapping the roles of $x$ and $y$ does not change $r$: the formula is symmetric. Correlation does not
care which variable is "explanatory".

**2. No units.** If $x$ is changed to $a + bx$ with $b > 0$ (say, minutes to hours, or Celsius to Fahrenheit), $r$ does
not change; if $b < 0$, $r$ changes sign only.

*Proof.* By §3.2, the new deviations are $b(x_i - \bar{x})$ and the new standard deviation is $|b|s_x$, so each z-score
$\frac{x_i - \bar{x}}{s_x}$ is multiplied by $\frac{b}{|b|}$, which is $1$ if $b > 0$ and $-1$ if $b < 0$. The
formula for $r$ is linear in the $x$ z-scores, so $r$ is multiplied by the same sign. $\blacksquare$

**3. Always between $-1$ and $1$.** This is the main theorem of the section.

**Theorem 4.1.** For any data with $s_x > 0$ and $s_y > 0$, $\ -1 \le r \le 1$. Moreover, $r = 1$ exactly when all the
points lie on a straight line of positive slope, and $r = -1$ exactly when they lie on a line of negative slope.

*Proof.* Write $u_i = \frac{x_i - \bar{x}}{s_x}$ and $v_i = \frac{y_i - \bar{y}}{s_y}$ for the z-scores. From the
definitions of $s_x$ and $s_y$, $\sum u_i^2 = n - 1$ and $\sum v_i^2 = n - 1$, and from the definition of $r$,
$\sum u_i v_i = (n-1)r$. Now a sum of squares is never negative, so

$$
0 \le \sum_{i=1}^{n} (u_i - v_i)^2 = \sum u_i^2 - 2\sum u_i v_i + \sum v_i^2 = (n-1) - 2(n-1)r + (n-1) = 2(n-1)(1 - r),
$$

which gives $r \le 1$. In the same way,

$$
0 \le \sum_{i=1}^{n} (u_i + v_i)^2 = 2(n-1)(1 + r),
$$

which gives $r \ge -1$.

For the equality cases: $r = 1$ exactly when $\sum (u_i - v_i)^2 = 0$, which happens exactly when $u_i = v_i$ for every
$i$ (a sum of squares is zero only if every term is). That says $\frac{y_i - \bar{y}}{s_y} = \frac{x_i - \bar{x}}{s_x}$,
that is, $y_i = \bar{y} + \frac{s_y}{s_x}(x_i - \bar{x})$ for all $i$: every point lies on one line of positive slope
$s_y/s_x$. Conversely, if every point lies on a line $y = a + bx$ with $b > 0$, then $y_i - \bar{y} = b(x_i - \bar{x})$ and
$s_y = b s_x$, so $v_i = u_i$ and $r = 1$. The case $r = -1$ is the same with $v_i = -u_i$ and $b < 0$. $\blacksquare$

**Another view: Cauchy-Schwarz.** Theorem 4.1 is a case of the **Cauchy-Schwarz inequality**: for any real numbers
$a_1, \dots, a_n$ and $b_1, \dots, b_n$,

$$
\left(\sum a_i b_i\right)^2 \le \left(\sum a_i^2\right)\left(\sum b_i^2\right).
$$

Here is the classic proof. If all $b_i = 0$ both sides are 0. Otherwise, for every real $t$,
$0 \le \sum (a_i + t b_i)^2 = \sum a_i^2 + 2t\sum a_i b_i + t^2\sum b_i^2$. A quadratic in $t$ with positive leading
coefficient that is never negative has at most one real root, so its discriminant is $\le 0$:
$4(\sum a_i b_i)^2 - 4\sum a_i^2 \sum b_i^2 \le 0$, which is the inequality
([Algebra, chapter 5](../algebra/05-Quadratics.md) on discriminants). With $a_i = x_i - \bar{x}$ and
$b_i = y_i - \bar{y}$ it reads $S_{xy}^2 \le S_{xx}S_{yy}$, which is $r^2 \le 1$. In the language of vectors, $r$ is the
**cosine of the angle** between the vectors of deviations $(x_1 - \bar{x}, \dots, x_n - \bar{x})$ and
$(y_1 - \bar{y}, \dots, y_n - \bar{y})$ in $n$-dimensional space, which is why it lies between $-1$ and $1$. (The U of T
guide to [inner product spaces](../../uoft/MAT247H1/unit01.md) has the general setting.)

### What $r$ does and does not measure

**$r$ measures only straight-line association.** Take $x = -2, -1, 0, 1, 2$ and $y = x^2 = 4, 1, 0, 1, 4$. Then $y$ is
completely determined by $x$, yet $S_{xy} = (-2)(2) + (-1)(-1) + 0 + (1)(-1) + (2)(2) = 0$ (using $\bar{y} = 2$), so
$r = 0$. A correlation of zero means "no *linear* trend", not "no relationship". Always look at the scatter plot.

**$r$ is not resistant.** It is built from means and standard deviations, so one outlier can change it a lot. In
Anscombe's set IV (Chapter 2), ten points have no relationship at all, and a single point at $x = 19$ produces
$r = 0.816$.

**$r$ is not a slope.** A correlation of 0.9 can go with a very steep line or a very shallow one; it says how tightly the
points cluster around a line, not how steep the line is. (The slope is $r\,s_y/s_x$, §4.3.)

**$r$ depends on the range.** If you look only at students who studied 4 to 6 hours, the correlation between hours and
score will usually be weaker than over the full range of 1 to 9 hours, because the narrow range hides the trend among
the noise. This **restriction of range** is why, for example, the correlation between an entrance test and later grades
is lower among the admitted students than it would be among all applicants.

**Rough guide.** There is no universal scale, but in many fields $|r|$ around $0.1$ is called weak, around $0.3$
moderate and $0.5$ or more strong. In physics experiments $r = 0.9$ may be disappointing; in psychology $r = 0.3$ may be
important. Context decides.

<figure class="play" data-play="scatter"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Change the strength and direction of a made-up link and watch r and the least squares line.</figcaption></figure>

## 4.3 The least squares line

*Level: intermediate.*

**A question.** Of all the straight lines you could draw through a scatter plot, which one fits "best"? And what does
"best" mean?

### The criterion

A line $y = a + bx$ has **intercept** $a$ (its height at $x = 0$) and **slope** $b$ (its rise for each unit of $x$). For
each data point, the line predicts $\hat{y}_i = a + b x_i$ (read "y-hat"), and misses by the **residual**

$$
e_i = y_i - \hat{y}_i = y_i - a - b x_i ,
$$

the vertical distance from the point to the line (positive if the point is above the line). The **least squares line**
is the one that makes the **sum of squared residuals**

$$
\text{SSE}(a, b) = \sum_{i=1}^{n} (y_i - a - b x_i)^2
$$

as small as possible. (SSE stands for "sum of squared errors".) Why squares? For the reasons of §3.6: squares make the
algebra simple and give the mean as the answer in the simplest case. Absolute values would give a different, more
robust line ("least absolute deviations"), which has no formula and needs an algorithm.

### The derivation, without calculus

**Theorem 4.2.** If $S_{xx} > 0$, the sum of squared residuals has a unique minimum, at

$$
b = \frac{S_{xy}}{S_{xx}} = r\,\frac{s_y}{s_x}, \qquad a = \bar{y} - b\,\bar{x} .
$$

The minimum value is $\text{SSE}_{\min} = S_{yy}(1 - r^2)$.

*Proof.* **Step 1: the best intercept for a given slope.** Fix $b$ and think of $c_i = y_i - b x_i$ as a list of numbers.
Then $\text{SSE}(a, b) = \sum (c_i - a)^2$, and by Theorem 3.4 this is smallest when $a$ is the mean of the $c_i$:

$$
a = \frac{1}{n}\sum (y_i - b x_i) = \bar{y} - b\bar{x} .
$$

So whatever the slope, the best line passes through the point of means $(\bar{x}, \bar{y})$.

**Step 2: the best slope.** Put $a = \bar{y} - b\bar{x}$ in. Each residual becomes
$y_i - \bar{y} - b(x_i - \bar{x})$, so

$$
\text{SSE} = \sum \big((y_i - \bar{y}) - b(x_i - \bar{x})\big)^2 = S_{yy} - 2b\,S_{xy} + b^2 S_{xx} .
$$

This is a quadratic in $b$ with positive leading coefficient $S_{xx}$. Complete the square:

$$
S_{xx}b^2 - 2S_{xy}b + S_{yy} = S_{xx}\left(b - \frac{S_{xy}}{S_{xx}}\right)^2 + S_{yy} - \frac{S_{xy}^2}{S_{xx}} .
$$

The squared term is $\ge 0$ and is zero only at $b = S_{xy}/S_{xx}$, so that is the unique best slope. The minimum value
is $S_{yy} - S_{xy}^2/S_{xx} = S_{yy}\left(1 - \frac{S_{xy}^2}{S_{xx}S_{yy}}\right) = S_{yy}(1 - r^2)$.

**Step 3: the slope in terms of $r$.** $S_{xx} = (n-1)s_x^2$, $S_{yy} = (n-1)s_y^2$ and $S_{xy} = (n-1)\,r\,s_x s_y$,
so $b = \frac{r s_x s_y}{s_x^2} = r\frac{s_y}{s_x}$.

Finally, any pair $(a, b)$ has $\text{SSE}(a, b) \ge \text{SSE}(\bar{y} - b\bar{x}, b)$ by Step 1, and that is
$\ge S_{yy}(1 - r^2)$ by Step 2, with equality throughout only at the stated $a$ and $b$. $\blacksquare$

The same identity also re-proves $r^2 \le 1$: $S_{yy}(1 - r^2)$ is a sum of squares, so it is $\ge 0$.

**Worked example 4.2.** For the five points of Worked example 4.1: $b = S_{xy}/S_{xx} = 6/10 = 0.6$ and
$a = 4 - 0.6 \times 3 = 2.2$. The least squares line is

$$
\hat{y} = 2.2 + 0.6x .
$$

**Check** with $b = r s_y/s_x$: $s_x = \sqrt{10/4} \approx 1.581$, $s_y = \sqrt{6/4} \approx 1.225$, and
$0.775 \times 1.225/1.581 \approx 0.600$.

For the 12 students of Chapter 2, the line is $\hat{y} \approx 49.07 + 4.02x$: each extra hour of study goes with about
4 more marks, on average, in these made-up data.

### Reading the slope through z-scores

Divide the equation of the line, $\hat{y} - \bar{y} = r\frac{s_y}{s_x}(x - \bar{x})$, by $s_y$:

$$
\frac{\hat{y} - \bar{y}}{s_y} = r \cdot \frac{x - \bar{x}}{s_x} .
$$

In z-scores, the prediction is simply $\hat{z}_y = r\,z_x$. A point one standard deviation above average in $x$ is
predicted to be only $r$ standard deviations above average in $y$. Since $|r| \le 1$, predictions are always pulled
toward the mean: this is **regression to the mean**, and it is where the word "regression" comes from. Francis Galton
noticed in the 1880s that the sons of very tall fathers were, on average, tall, but less extremely tall than their
fathers; he called it "regression towards mediocrity". Nothing biological shrinks the sons: it is the arithmetic of an
imperfect correlation. Chapter 11 tells the full story.

### Two regression lines

The least squares line for predicting $y$ from $x$ is not the same as the line for predicting $x$ from $y$. The second
minimises *horizontal* distances and has slope (as $x$ per unit $y$) $r\,s_x/s_y$. Drawn on the same axes, the two lines
cross at $(\bar{x}, \bar{y})$ and coincide only if $|r| = 1$. The product of the two slopes is
$r\frac{s_y}{s_x} \cdot r\frac{s_x}{s_y} = r^2$. Which one to use depends on which variable you want to predict.

### A short history thread

The method of least squares was first published by Adrien-Marie Legendre in 1805, in an appendix to a work on comet
orbits, as a practical way to combine more observations than unknowns. Carl Friedrich Gauss published it in 1809 in his
*Theoria motus*, claiming he had used it since 1795, and gave it a probabilistic justification. The priority dispute
was bitter; both contributions are real. The method's first great use was astronomy and geodesy: fitting orbits and the
shape of the Earth to imperfect measurements. Galton's "co-relation" came in 1888, and Karl Pearson put the
correlation coefficient into its modern form in 1896 (the formula had appeared earlier, in work of Auguste Bravais in
1846, without the statistical interpretation).

## 4.4 Residuals

*Level: intermediate.*

**A question.** You have fitted a line. How do you know whether a straight line was the right thing to fit at all?

### Properties of least squares residuals

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 270" role="img" aria-label="Five points (1,2), (2,4), (3,5), (4,4), (5,5) with the least squares line y = 2.2 + 0.6x drawn through them; vertical segments join each point to the line, showing the residuals -0.8, 0.6, 1.0, -0.6, -0.2">
  <line x1="60" y1="230" x2="400" y2="230" stroke="currentColor"/>
  <line x1="60" y1="230" x2="60" y2="30" stroke="currentColor"/>
  <text x="60" y="246" text-anchor="middle" font-size="11" fill="currentColor">0</text>
  <text x="116.7" y="246" text-anchor="middle" font-size="11" fill="currentColor">1</text>
  <text x="173.3" y="246" text-anchor="middle" font-size="11" fill="currentColor">2</text>
  <text x="230" y="246" text-anchor="middle" font-size="11" fill="currentColor">3</text>
  <text x="286.7" y="246" text-anchor="middle" font-size="11" fill="currentColor">4</text>
  <text x="343.3" y="246" text-anchor="middle" font-size="11" fill="currentColor">5</text>
  <text x="400" y="246" text-anchor="middle" font-size="11" fill="currentColor">6</text>
  <text x="54" y="234" text-anchor="end" font-size="11" fill="currentColor">1</text>
  <text x="54" y="194" text-anchor="end" font-size="11" fill="currentColor">2</text>
  <text x="54" y="154" text-anchor="end" font-size="11" fill="currentColor">3</text>
  <text x="54" y="114" text-anchor="end" font-size="11" fill="currentColor">4</text>
  <text x="54" y="74" text-anchor="end" font-size="11" fill="currentColor">5</text>
  <text x="54" y="34" text-anchor="end" font-size="11" fill="currentColor">6</text>
  <line x1="77" y1="174.8" x2="388.7" y2="42.8" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="116.7" y1="190" x2="116.7" y2="158" stroke="currentColor" stroke-dasharray="4 3"/>
  <line x1="173.3" y1="110" x2="173.3" y2="134" stroke="currentColor" stroke-dasharray="4 3"/>
  <line x1="230" y1="70" x2="230" y2="110" stroke="currentColor" stroke-dasharray="4 3"/>
  <line x1="286.7" y1="110" x2="286.7" y2="86" stroke="currentColor" stroke-dasharray="4 3"/>
  <line x1="343.3" y1="70" x2="343.3" y2="62" stroke="currentColor" stroke-dasharray="4 3"/>
  <circle cx="116.7" cy="190" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="173.3" cy="110" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="230" cy="70" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="286.7" cy="110" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="343.3" cy="70" r="5" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="230" cy="110" r="4" fill="#7ccf9a" stroke="currentColor"/>
  <text x="240" y="126" font-size="11" fill="currentColor">(x̄, ȳ) = (3, 4)</text>
  <text x="388.7" y="32.8" text-anchor="end" font-size="12" fill="currentColor">y = 2.2 + 0.6x</text>
</svg>
</div>

For the five points, the fitted values are $\hat{y} = 2.8, 3.4, 4.0, 4.6, 5.2$ and the residuals
$e_i = y_i - \hat{y}_i$ are

$$
-0.8, \quad 0.6, \quad 1.0, \quad -0.6, \quad -0.2 .
$$

**Check:** they add to 0. That is no accident.

**Theorem 4.3.** The residuals of the least squares line satisfy

$$
\sum_{i=1}^{n} e_i = 0 \qquad \text{and} \qquad \sum_{i=1}^{n} x_i e_i = 0 .
$$

So the residuals have mean zero and are uncorrelated with $x$.

*Proof.* $e_i = (y_i - \bar{y}) - b(x_i - \bar{x})$, using $a = \bar{y} - b\bar{x}$. Summing, both deviation sums are 0,
so $\sum e_i = 0$. Next, $\sum (x_i - \bar{x}) e_i = S_{xy} - b S_{xx} = S_{xy} - S_{xy} = 0$, and
$\sum x_i e_i = \sum (x_i - \bar{x})e_i + \bar{x}\sum e_i = 0$. Zero covariance means zero correlation (when the
residuals are not all zero). $\blacksquare$

**Check** on the example: $\sum x_i e_i = -0.8 + 1.2 + 3.0 - 2.4 - 1.0 = 0$.

The meaning: if the residuals still had a linear trend in $x$, you could tilt the line to reduce them. Least squares
has used up every bit of *linear* information in $x$. What is left over is whatever the line cannot explain.

### $r^2$: the fraction of variation explained

The **total sum of squares** $\text{SST} = S_{yy} = \sum (y_i - \bar{y})^2$ measures how much $y$ varies around its mean:
it is the error you would make by predicting every $y$ with $\bar{y}$, ignoring $x$. The line reduces this to
$\text{SSE} = \sum e_i^2$. Theorem 4.2 says $\text{SSE} = S_{yy}(1 - r^2)$, so

$$
r^2 = 1 - \frac{\text{SSE}}{\text{SST}} = \frac{\text{SST} - \text{SSE}}{\text{SST}} .
$$

**$r^2$ is the fraction of the variation in $y$ (measured by squares) that the line accounts for.** It is often written
$R^2$ and called the **coefficient of determination**. Moreover, the explained part is itself a sum of squares: with
$\text{SSR} = \sum (\hat{y}_i - \bar{y})^2$ (R for "regression"),

$$
\text{SST} = \text{SSR} + \text{SSE} .
$$

*Proof.* $y_i - \bar{y} = (\hat{y}_i - \bar{y}) + e_i$. Squaring and adding, the cross term is
$2\sum (\hat{y}_i - \bar{y})e_i = 2b\sum (x_i - \bar{x})e_i = 0$ by Theorem 4.3, since
$\hat{y}_i - \bar{y} = b(x_i - \bar{x})$. $\blacksquare$

This is Pythagoras's theorem again: the vector of deviations of $y$ splits into two perpendicular pieces, the fitted part
and the residual part. Chapter 12 uses exactly this picture for many predictors.

**Check** on the example: $\text{SST} = 6$; $\text{SSE} = 0.64 + 0.36 + 1 + 0.36 + 0.04 = 2.4$; $r^2 = 36/60 = 0.6$; and
$6 \times (1 - 0.6) = 2.4$. The line explains 60% of the variation in $y$. For the 12 students, $r^2 \approx 0.93$.

A warning about the word "explained": it means "accounted for by the line in this data", not "caused by". A line
through the heights of children against their shoe sizes may have a high $r^2$; shoe size causes nothing.

### Residual plots

Plot the residuals $e_i$ against $x_i$ (or against the fitted values $\hat{y}_i$). If a straight line is a good
description, the residual plot should look like a horizontal band of random scatter around zero, with no pattern. The
patterns to watch for:

- **A curve.** Residuals positive at both ends and negative in the middle (or the reverse) mean the relationship bends.
  Anscombe's set II has exactly this: its residuals from the line $y = 3 + 0.5x$ are negative at $x = 4$, positive in the
  middle and negative again at $x = 14$. Fit a curve, or transform a variable (Chapter 11).
- **A fan.** Residuals that spread out as $x$ grows mean the variability changes with $x$. The line may still be fine
  for the average, but statements about how far off a prediction may be will be wrong for some $x$ (Chapter 11).
- **An outlier.** A point with a huge residual does not follow the pattern; find out why.
- **An influential point.** A point far out in $x$ (high **leverage**) can pull the line toward itself and end up with a
  *small* residual, so it may not look odd on a residual plot. Refit without it: if the line changes a lot, the point
  is **influential**, and the conclusions hang on one observation. Anscombe's set IV is the extreme case.

**Try it in Python.**

```python
from statistics import linear_regression, correlation
x = [1, 2, 3, 4, 5]
y = [2, 4, 5, 4, 5]
fit = linear_regression(x, y)
res = [yi - (fit.intercept + fit.slope * xi) for xi, yi in zip(x, y)]
print(fit, correlation(x, y) ** 2)
print([round(e, 2) for e in res], round(sum(res), 10))
```

It prints slope 0.6 and intercept 2.2 (up to rounding in the last digit), $r^2 \approx 0.6$, the residuals
$-0.8, 0.6, 1.0, -0.6, -0.2$ and a sum of 0.

## 4.5 Correlation is not causation

**A question.** Across many towns, the number of ice creams sold in a month and the number of drownings that month go
up and down together. Should towns ban ice cream to save swimmers?

This is the standard textbook illustration, and the answer is obvious: hot weather increases both. But the same logic
is far less obvious in real cases, and it is the source of more bad conclusions than any other mistake in statistics. If
$x$ and $y$ are associated, there are at least six possible reasons.

1. **$x$ causes $y$.** Sometimes the association really is causal. Smoking causes lung cancer (§1.3).
2. **$y$ causes $x$ (reverse causation).** Cities with more police have more crime, because police are sent where the
   crime is. People who sleep poorly may use their phones in bed because they cannot sleep.
3. **A third variable causes both (confounding).** Temperature drives ice creams and drownings. In §1.3, healthier
   habits drove both hormone therapy use and fewer heart attacks.
4. **Chance.** In a small sample, a correlation can arise by luck. Search through enough pairs of variables and some
   will be strongly correlated by coincidence (Chapter 9 on multiple testing).
5. **Selection.** The way units got into the data can create an association that does not exist in the population.
   Joseph Berkson pointed out in 1946 that among *hospital patients*, two diseases can appear associated simply because
   having either one makes admission more likely. A classic everyday version: if a restaurant survives only when its food
   or its location is good, then among surviving restaurants, good food and good location will look negatively
   associated, even if they are unrelated across all restaurants that ever opened.
6. **Trends in time.** Any two quantities that both grew over the same years (a country's internet use and its average
   age, say) are strongly correlated, whether or not they have anything to do with each other. Correlations between
   time series need special care (Chapter 16).

### Confounders, more carefully

A **confounder** for the effect of $x$ on $y$ is a variable that affects both. To see whether it explains an association,
compare like with like: look at the association **within groups** that have the same value of the confounder. If the
link between ice cream and drowning vanishes when you compare only months with the same temperature, temperature
explains it. This is called **stratifying** or **controlling for** the confounder. Chapters 12 and 17 do it with
regression and with causal diagrams.

The catch is that you can only control for confounders you have measured. There may always be one more. That is why
randomised experiments (§1.3) are so valuable: they balance unmeasured confounders too.

### The ecological fallacy

A correlation between *group averages* need not hold for *individuals*. In a well-known 1950 paper, the sociologist
W. S. Robinson used the 1930 United States census to show that, across states, the proportion of residents born abroad
was *positively* correlated with the literacy rate, whereas among individuals, being born abroad went with a somewhat
*higher* chance of being illiterate. The state-level pattern arose because immigrants tended to settle in states whose
native-born populations were relatively literate. Concluding something about individuals from correlations between
group averages is called the **ecological fallacy**. Correlations between averages are also usually much stronger than
those between individuals, because averaging removes the individual variation.

### How causation is established without experiments

When experiments are impossible, the case for a cause is built from several kinds of evidence together (Hill's
considerations, §1.3): a strong association, a dose-response relationship, the right time order, consistency across
studies and populations, a plausible mechanism, and the failure of every confounder anyone can think of to explain it
away. Modern methods (Chapter 17) make some of this mathematical: natural experiments, instrumental variables,
differences in differences. The 2021 Nobel memorial prize in economics was awarded for such methods.

## 4.6 Simpson's paradox

**A question.** Can a treatment be better than another for mild cases, better for severe cases, and yet worse overall?

### A made-up example

Two drugs are compared in a hospital's records (made-up numbers). Doctors tended to give drug X to the severe cases.

| | mild cases: recovered | mild: rate | severe cases: recovered | severe: rate | all: recovered | all: rate |
| --- | --- | --- | --- | --- | --- | --- |
| drug X | 18 of 20 | 90% | 32 of 80 | 40% | 50 of 100 | 50% |
| drug Y | 70 of 80 | 87.5% | 7 of 20 | 35% | 77 of 100 | 77% |

Drug X has the higher recovery rate among mild cases (90% against 87.5%) *and* among severe cases (40% against 35%), but
the lower rate overall (50% against 77%). **Check:** $18 + 32 = 50$ and $70 + 7 = 77$.

The reversal is called **Simpson's paradox**, after Edward Simpson, who discussed it in a 1951 paper; George Udny Yule
had described the same effect in 1903, and the name "Simpson's paradox" was given by Colin Blyth in 1972. It is not a
contradiction, just arithmetic.

### The algebra

An overall rate is a **weighted average** of the group rates, weighted by how the units are split between the groups:

$$
\text{overall rate} = (\text{share of mild cases}) \times (\text{mild rate}) + (\text{share of severe cases}) \times (\text{severe rate}) .
$$

For drug X: $0.2 \times 0.90 + 0.8 \times 0.40 = 0.18 + 0.32 = 0.50$. For drug Y: $0.8 \times 0.875 + 0.2 \times 0.35 = 0.70 + 0.07 = 0.77$.
Drug X's average is dominated by the severe cases, whose recovery rate is low whatever the drug; drug Y's by the mild
cases. Severity is a confounder: it affects both which drug was given and the chance of recovery.

**Proposition 4.4.** If both treatments have the *same* split between groups (the same share $w$ of mild cases), no
reversal can happen: if X is at least as good as Y in each group, it is at least as good overall.

*Proof.* With rates $p_1, p_2$ for X and $q_1, q_2$ for Y in the two groups, and $p_1 \ge q_1$, $p_2 \ge q_2$:
overall X $= w p_1 + (1 - w)p_2 \ge w q_1 + (1 - w) q_2 =$ overall Y, since $w$ and $1 - w$ are non-negative. The same
argument works for any number of groups. $\blacksquare$

So the paradox needs two things at once: the groups have different baseline rates, and the treatments are distributed
differently across the groups. Randomisation guarantees equal splits on average, which is one more reason experiments
are trusted.

### Berkeley, 1973

In the autumn of 1973 the graduate division of the University of California, Berkeley, received applications from
8442 men and 4321 women. About 44% of the men and about 35% of the women were admitted. A gap that large in so many
applicants could not plausibly be chance, and it raised the question of discrimination against women. The statisticians
Peter Bickel, Eugene Hammel and J. William O'Connell analysed the data in a paper published in *Science* in 1975,
"Sex bias in graduate admissions: data from Berkeley".

Admissions at Berkeley were decided by each department separately, so they looked department by department. Here are the
figures for the six largest departments (their names were not published; they are labelled A to F). These six figures
are widely reproduced, for example as the `UCBAdmissions` dataset distributed with the R language.

| Department | men: applicants | men: admitted | women: applicants | women: admitted |
| --- | --- | --- | --- | --- |
| A | 825 | 512 (62%) | 108 | 89 (82%) |
| B | 560 | 353 (63%) | 25 | 17 (68%) |
| C | 325 | 120 (37%) | 593 | 202 (34%) |
| D | 417 | 138 (33%) | 375 | 131 (35%) |
| E | 191 | 53 (28%) | 393 | 94 (24%) |
| F | 373 | 22 (6%) | 341 | 24 (7%) |
| **all six** | 2691 | 1198 (45%) | 1835 | 557 (30%) |

**Check:** $512 + 353 + 120 + 138 + 53 + 22 = 1198$, and $1198/2691 \approx 44.5\%$; $89 + 17 + 202 + 131 + 94 + 24 = 557$,
and $557/1835 \approx 30.4\%$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 260" role="img" aria-label="Admission rates at Berkeley in 1973 for the six largest departments, men in blue and women in orange: A 62 and 82 percent, B 63 and 68, C 37 and 34, D 33 and 35, E 28 and 24, F 6 and 7; and for the six departments combined, men 45 and women 30 percent">
  <line x1="40" y1="210" x2="450" y2="210" stroke="currentColor"/>
  <line x1="40" y1="210" x2="40" y2="30" stroke="currentColor"/>
  <text x="34" y="214" text-anchor="end" font-size="11" fill="currentColor">0%</text>
  <text x="34" y="174" text-anchor="end" font-size="11" fill="currentColor">20%</text>
  <text x="34" y="134" text-anchor="end" font-size="11" fill="currentColor">40%</text>
  <text x="34" y="94" text-anchor="end" font-size="11" fill="currentColor">60%</text>
  <text x="34" y="54" text-anchor="end" font-size="11" fill="currentColor">80%</text>
  <rect x="55" y="85.8" width="18" height="124.2" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="73" y="45.2" width="18" height="164.8" fill="#eea66f" stroke="currentColor"/>
  <text x="73" y="226" text-anchor="middle" font-size="11" fill="currentColor">A</text>
  <rect x="111" y="84" width="18" height="126" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="129" y="74" width="18" height="136" fill="#eea66f" stroke="currentColor"/>
  <text x="129" y="226" text-anchor="middle" font-size="11" fill="currentColor">B</text>
  <rect x="167" y="136.2" width="18" height="73.8" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="185" y="141.8" width="18" height="68.2" fill="#eea66f" stroke="currentColor"/>
  <text x="185" y="226" text-anchor="middle" font-size="11" fill="currentColor">C</text>
  <rect x="223" y="143.8" width="18" height="66.2" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="241" y="140.2" width="18" height="69.8" fill="#eea66f" stroke="currentColor"/>
  <text x="241" y="226" text-anchor="middle" font-size="11" fill="currentColor">D</text>
  <rect x="279" y="154.6" width="18" height="55.4" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="297" y="162.2" width="18" height="47.8" fill="#eea66f" stroke="currentColor"/>
  <text x="297" y="226" text-anchor="middle" font-size="11" fill="currentColor">E</text>
  <rect x="335" y="198.2" width="18" height="11.8" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="353" y="196" width="18" height="14" fill="#eea66f" stroke="currentColor"/>
  <text x="353" y="226" text-anchor="middle" font-size="11" fill="currentColor">F</text>
  <rect x="401" y="121" width="18" height="89" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="419" y="149.2" width="18" height="60.8" fill="#eea66f" stroke="currentColor"/>
  <text x="419" y="226" text-anchor="middle" font-size="11" fill="currentColor">all six</text>
  <line x1="391" y1="40" x2="391" y2="210" stroke="currentColor" stroke-width="0.6" stroke-dasharray="3 3"/>
  <rect x="300" y="14" width="12" height="12" fill="#9cc9ea" stroke="currentColor"/><text x="317" y="25" font-size="11" fill="currentColor">men</text>
  <rect x="360" y="14" width="12" height="12" fill="#eea66f" stroke="currentColor"/><text x="377" y="25" font-size="11" fill="currentColor">women</text>
  <text x="200" y="250" text-anchor="middle" font-size="12" fill="currentColor">department</text>
</svg>
</div>

In the six departments together, men were admitted at 45% and women at 30%. Yet department by department, women were
admitted at a higher rate in four of the six (A, B, D, F) and at a slightly lower rate in two (C, E); in the largest gap,
department A admitted 82% of its women applicants and 62% of its men.

The explanation is where people applied. Look at the share of each sex's applications that went to each department:

| Department | A | B | C | D | E | F |
| --- | --- | --- | --- | --- | --- | --- |
| admission rate, both sexes | 64% | 63% | 35% | 34% | 25% | 6% |
| share of men's applications | 31% | 21% | 12% | 15% | 7% | 14% |
| share of women's applications | 6% | 1% | 32% | 20% | 21% | 19% |

Over half of the men applied to A and B, which admitted most of their applicants. Over 90% of the women applied to C, D,
E and F, which were much harder to get into for everybody. Each sex's overall rate is a weighted average of the
department rates, and the women's weights sat on the low rates. The department chosen is the confounder.

Bickel, Hammel and O'Connell's conclusion, in summary: the aggregate data show a clear but misleading pattern of bias
against women; examined department by department, the data show few departments with a statistically significant
difference, and those that do favour women about as often as men. The aggregate gap came from the choice of
departments, not from the departments' decisions. They added that the pattern itself raised a different question: they suggested that women had
been steered, by their earlier education and upbringing, toward fields that were more crowded and less well funded.
That is a question about the wider system, which a table of admissions cannot answer.

### Which table should you believe?

Simpson's paradox raises a real question: when the aggregated and the split tables disagree, which one answers your
question? Statistics alone cannot say; it depends on the causal story.

- In the drug example and at Berkeley, the grouping variable (severity, department) came **before** the treatment or
  decision and influenced it. It is a confounder, so you should compare within groups.
- If the grouping variable is instead a **consequence** of the treatment (for example, a drug that works by lowering
  blood pressure, with patients grouped by their blood pressure after treatment), then splitting by it removes part of
  the treatment's effect, and the aggregate table is the right one.

The arithmetic is identical in both cases; only knowledge of how the data came to be can decide. This is the starting
point of the modern theory of causal inference (causal diagrams and the "backdoor criterion" in Chapter 17), and of
Judea Pearl's argument that the paradox is resolved only by causal reasoning.

## Check yourself

??? question "1. In the made-up phone-and-sleep table of §4.1, find the conditional distribution of phone use among good sleepers and among poor sleepers. Are the variables associated?"
    Among good sleepers (column total 100): 48 use the phone, so $48\%$ yes and $52\%$ no. Among poor sleepers (100):
    $72\%$ yes and $28\%$ no. The conditional distributions differ, so the variables are associated. If they were not
    associated, both columns would show the marginal split, $60\%$ yes and $40\%$ no.

??? question "2. Compute $r$ by hand for the made-up points (2, 1), (4, 3), (6, 2), (8, 6)."
    Means: $\bar{x} = 20/4 = 5$, $\bar{y} = 12/4 = 3$. Deviations: $x$: $-3, -1, 1, 3$; $y$: $-2, 0, -1, 3$.
    $S_{xx} = 9 + 1 + 1 + 9 = 20$, $S_{yy} = 4 + 0 + 1 + 9 = 14$, $S_{xy} = 6 + 0 - 1 + 9 = 14$.
    $r = 14/\sqrt{20 \times 14} = 14/\sqrt{280} \approx 0.837$.

??? question "3. Heights are measured in centimetres and weights in kilograms, and $r = 0.62$. What is $r$ if heights are converted to inches and weights to pounds? What if weight is replaced by 'kilograms below 100' (that is, $100 - w$)?"
    Converting units multiplies each variable by a positive constant, so $r$ is unchanged: $0.62$. Replacing $w$ by
    $100 - w$ is $a + bw$ with $b = -1 < 0$, so $r$ changes sign: $-0.62$.

??? question "4. Show that $r = 0$ for the points with $x = -2, -1, 0, 1, 2$ and $y = x^2$, and explain why this does not mean 'no relationship'."
    $\bar{x} = 0$ and $\bar{y} = (4 + 1 + 0 + 1 + 4)/5 = 2$. $S_{xy} = \sum x_i (y_i - 2) = (-2)(2) + (-1)(-1) + 0 + (1)(-1) + (2)(2) = -4 + 1 - 1 + 4 = 0$,
    so $r = 0$. But $y$ is an exact function of $x$. The relationship is a perfect parabola, symmetric about $x = 0$, so
    the positive and negative products cancel. Correlation measures only the linear part of a relationship.

??? question "5. Find the least squares line for the points of question 2 and use it to predict $y$ at $x = 5$ and at $x = 7$. Compute the residuals and check that they add to 0."
    $b = S_{xy}/S_{xx} = 14/20 = 0.7$, $a = \bar{y} - b\bar{x} = 3 - 3.5 = -0.5$. Line: $\hat{y} = -0.5 + 0.7x$.
    At $x = 5$: $3.0$ (the mean, as it must be). At $x = 7$: $4.4$. Fitted values at $2, 4, 6, 8$: $0.9, 2.3, 3.7, 5.1$;
    residuals $0.1, 0.7, -1.7, 0.9$, which add to $0$. Also $\sum x_i e_i = 0.2 + 2.8 - 10.2 + 7.2 = 0$.

??? question "6. A study reports $r = 0.8$ between $x$ and $y$, with $\bar{x} = 10$, $s_x = 2$, $\bar{y} = 50$, $s_y = 5$. Write down the least squares line for predicting $y$ from $x$, and say what fraction of the variation in $y$ it explains."
    $b = r s_y/s_x = 0.8 \times 5/2 = 2$, $a = 50 - 2 \times 10 = 30$, so $\hat{y} = 30 + 2x$. It explains
    $r^2 = 0.64$, that is 64%, of the variation in $y$ (in the sense of sums of squares).

??? question "7. For the same data, a student scores 2 standard deviations above the mean in $x$. How many standard deviations above the mean in $y$ is the predicted value? Why is that called regression to the mean?"
    In z-scores the prediction is $\hat{z}_y = r z_x = 0.8 \times 2 = 1.6$. The prediction is less extreme, relative to
    its own spread, than the $x$ value it came from, because $|r| < 1$. Extreme values of $x$ go with values of $y$ that
    are, on average, closer to the mean: regression to the mean. (In units: $\hat{y} = 30 + 2 \times 14 = 58 = 50 + 1.6 \times 5$.)

??? question "8. Prove that the slope of the line predicting $y$ from $x$ times the slope of the line predicting $x$ from $y$ equals $r^2$. Check it for the 12 students of Chapter 2, whose two slopes are about 4.0214 and 0.23162."
    The slopes are $r s_y/s_x$ and $r s_x/s_y$; their product is $r^2$. For the students:
    $4.0214 \times 0.23162 \approx 0.9314$, and $r \approx 0.9651$ gives $r^2 \approx 0.9314$. The two lines coincide
    only when $r^2 = 1$.

??? question "9. A newspaper reports that children who own a pet have fewer allergies. Give three different explanations for the association, of three different kinds from §4.5."
    (1) Causation: early exposure to animals might train the immune system. (2) Reverse causation: families whose
    children already have allergies avoid getting pets. (3) Confounding: living in the countryside, or family size,
    might affect both pet ownership and allergies. (Other possibilities: chance in a small study; selection, if the
    children were recruited through a vet or an allergy clinic.) Only a careful design, or many studies with different
    designs pointing the same way, can tell these apart.

??? question "10. Two made-up hospitals treat patients for the same condition. Hospital P: 380 of 400 low-risk patients survive, and 60 of 100 high-risk. Hospital Q: 96 of 100 low-risk patients survive, and 260 of 400 high-risk. Which hospital has the better survival rate overall, and in each risk group?"
    Hospital P: low-risk $380/400 = 95\%$, high-risk $60/100 = 60\%$, overall $440/500 = 88\%$. Hospital Q: low-risk
    $96/100 = 96\%$, high-risk $260/400 = 65\%$, overall $356/500 = 71.2\%$. Q is better in both groups (96% against
    95%, 65% against 60%) but much worse overall, because 80% of Q's patients are high-risk against 20% of P's. Simpson's
    paradox: judged by overall survival, the hospital that takes the hardest cases looks worst.

??? question "11. Prove that if the residuals $e_i$ of the least squares line are all zero, then $r = \pm 1$, and conversely."
    By Theorem 4.2, $\sum e_i^2 = S_{yy}(1 - r^2)$, with $S_{yy} > 0$. So all residuals are zero exactly when
    $\sum e_i^2 = 0$, exactly when $1 - r^2 = 0$, that is $r = \pm 1$. Geometrically: all points lie on the fitted line.

??? question "12. The Berkeley table shows women admitted at a higher rate than men in department A (82% against 62%). Is that evidence that department A discriminated against men? What would you need to know?"
    Not by itself. The two groups of applicants might differ in qualifications (the table records only sex and
    outcome), the women's applications were few (108 against 825), and a single department's rates can differ by
    chance. Bickel, Hammel and O'Connell judged the department-level differences as a whole and found few that were
    statistically significant, about as many in each direction. To say more you would need the applicants'
    qualifications, to compare like with like, and a test of whether the difference is larger than chance would
    produce (Chapter 10). The same caution applies to reading the aggregate table as evidence against women: the lesson
    of Simpson's paradox is that the right comparison depends on what else differs between the groups.

## What you learned

- For two categorical variables, a two-way table gives joint, marginal and conditional distributions; the variables
  are associated when the conditional distributions differ.
- The correlation $r = \frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}$ is the average product of z-scores; it is symmetric, has no
  units, and satisfies $-1 \le r \le 1$, with $\pm 1$ only for points on a line (a case of Cauchy-Schwarz).
- $r$ measures only linear association, is not resistant to outliers, is not a slope, and shrinks when the range is
  restricted.
- The least squares line has slope $b = S_{xy}/S_{xx} = r s_y/s_x$ and passes through $(\bar{x}, \bar{y})$; in z-scores,
  $\hat{z}_y = r z_x$, which is regression to the mean.
- Its residuals add to zero and are uncorrelated with $x$; $\text{SST} = \text{SSR} + \text{SSE}$ and
  $r^2 = 1 - \text{SSE}/\text{SST}$ is the fraction of variation accounted for. Residual plots reveal curves, fans,
  outliers and influential points.
- Association can come from causation, reverse causation, confounding, chance, selection or common trends; group-level
  correlations need not hold for individuals.
- Simpson's paradox: an overall rate is a weighted average of group rates, so a comparison can reverse when groups are
  combined. At Berkeley in 1973 the aggregate gap against women came from which departments they applied to.

**Next:** [Chapter 5](05-Sampling-and-Experiments.md) is about collecting data well: random sampling and the
spectacular failure of the 1936 *Literary Digest* poll, stratified and cluster samples, randomised experiments,
controls and blinding, the placebo effect, and Fisher's lady tasting tea.

## Further reading

- David Freedman, Robert Pisani and Roger Purves, *Statistics* (4th edition, 2007), Chapters 8 to 12 on correlation and
  regression, and Chapter 2 on the Berkeley data.
- P. J. Bickel, E. A. Hammel and J. W. O'Connell, "Sex bias in graduate admissions: data from Berkeley", *Science* 187
  (1975), 398 to 404.
- E. H. Simpson, "The interpretation of interaction in contingency tables", *Journal of the Royal Statistical Society,
  Series B* 13 (1951), 238 to 241.
- G. Udny Yule, "Notes on the theory of association of attributes in statistics", *Biometrika* 2 (1903).
- Colin R. Blyth, "On Simpson's paradox and the sure-thing principle", *Journal of the American Statistical
  Association* 67 (1972).
- W. S. Robinson, "Ecological correlations and the behavior of individuals", *American Sociological Review* 15 (1950).
- Joseph Berkson, "Limitations of the application of fourfold table analysis to hospital data", *Biometrics Bulletin* 2
  (1946).
- Judea Pearl and Dana Mackenzie, *The Book of Why* (2018), Chapter 6 on Simpson's paradox.
- Stephen M. Stigler, *The History of Statistics* (1986), on Legendre, Gauss, Galton and Pearson.
- On this site: the Topics lessons [Scatter plots](../../topics/statistics/level-6/01-scatter-plots.md),
  [Interpolation and extrapolation](../../topics/statistics/level-6/04-interpolation-extrapolation.md) and
  [Non-linear models](../../topics/statistics/level-7/06-non-linear-models.md);
  [Probability, chapter 11](../probability/11-Joint-Distributions.md) for covariance and correlation of random
  variables; the U of T guides [MAT247 Unit 1 (inner product spaces)](../../uoft/MAT247H1/unit01.md) for
  Cauchy-Schwarz and [MAT247 Unit 2 (orthogonality and Gram-Schmidt)](../../uoft/MAT247H1/unit02.md) for least squares
  as a projection; and the [Probability book](../probability/index.md).
