# 3. Summaries

*Chapter 2 read the centre and spread of a distribution by eye. This chapter turns them into numbers: the mean,
median and mode for the centre; the range, interquartile range, variance and standard deviation for the spread;
z-scores and percentiles for saying where one value stands. Each summary answers a slightly different question, and
each can mislead in its own way, so the chapter shows when to use which, and what a single wild value does to each one.
It ends with a result that explains why there are several "averages" at all: the mean is the best single guess when
errors are measured by their squares, and the median is the best when errors are measured by their sizes. Both facts
are proved, with algebra only.*

!!! abstract "In this chapter"

    **You will learn:**

    - the mean, median and mode, how to compute them from raw data and from a frequency table, and when each misleads
    - the range, interquartile range, variance and standard deviation, and a first look at why the sample variance divides by $n - 1$
    - how shifting and rescaling data change each summary, and z-scores as the result
    - why there are several definitions of a percentile, and why they agree for large samples
    - Chebyshev's inequality for data: no more than $1/k^2$ of any dataset lies $k$ standard deviations from its mean
    - robustness: which summaries one bad value can wreck (the breakdown point), and trimmed means and the MAD
    - summaries as minimisers: proofs that the mean minimises squared error, the median absolute error, the mode the number of misses and the midrange the largest error

    **You need:** [Chapter 2](02-Pictures-of-Data.md) (distributions, quartiles, box plots). Summation notation
    $\sum$ is explained in §3.1. For a gentler version, see the Topics lessons
    [The mean](../../topics/statistics/level-3/02-the-mean.md),
    [The median and the mode](../../topics/statistics/level-3/03-median-and-mode.md),
    [The range](../../topics/statistics/level-3/04-the-range.md),
    [Which average is fair?](../../topics/statistics/level-4/01-which-average.md),
    [Standard deviation](../../topics/statistics/level-6/06-standard-deviation.md) and
    [z-scores and percentiles](../../topics/statistics/level-7/03-z-scores-percentiles.md).

    **Levels:** 3.1 to 3.3 are beginner; 3.4 and 3.5 are intermediate; 3.6 is intermediate, with proofs that a
    careful beginner can follow.

## 3.1 Mean, median and mode

**A question.** A small company has nine people. Eight employees earn (in thousands of dollars a year) 32, 35, 38, 40,
41, 44, 47 and 52; the owner pays herself 400. A job advert says "average salary 81 thousand dollars". Is that true? Is
it honest?

### Summation notation

We will add up lists of numbers constantly, so we need a short way to write it. If the data are $x_1, x_2, \dots, x_n$,
then

$$
\sum_{i=1}^{n} x_i = x_1 + x_2 + \dots + x_n .
$$

The symbol $\sum$ (capital Greek sigma, "S" for sum) means "add up"; $i$ is a counter that runs from 1 to $n$. Two
rules are used again and again: constants come out of sums, and sums of sums split:

$$
\sum_{i=1}^{n} (a x_i + b y_i) = a\sum_{i=1}^{n} x_i + b \sum_{i=1}^{n} y_i, \qquad \sum_{i=1}^{n} c = nc .
$$

Both are just the rules of ordinary addition, regrouped. When the range of $i$ is clear we write $\sum x_i$.

### The mean

The **mean** (or **arithmetic mean**, or **average**) of $x_1, \dots, x_n$ is

$$
\bar{x} = \frac{1}{n}\sum_{i=1}^{n} x_i ,
$$

read "x-bar". It is the value each unit would have if the total were shared out equally.

For the company, the total is $32 + 35 + 38 + 40 + 41 + 44 + 47 + 52 + 400 = 729$, and $\bar{x} = 729/9 = 81$. The
advert is arithmetically correct. But eight of the nine people earn less than 81, most of them much less.

**The mean is a balance point.** The **deviation** of $x_i$ from the mean is $x_i - \bar{x}$: how far, and in which
direction, it lies from the mean. The deviations always add to zero:

$$
\sum_{i=1}^{n} (x_i - \bar{x}) = \sum_{i=1}^{n} x_i - n\bar{x} = n\bar{x} - n\bar{x} = 0 .
$$

Think of the data as equal weights on a weightless ruler. The total turning effect about a point $c$ is
$\sum (x_i - c)$, and it is zero exactly when $c = \bar{x}$. So the ruler balances at the mean. This is why one heavy
value far out (the owner's 400) drags the mean a long way: it has a long lever.

**The mean of a 0/1 variable is a proportion.** If $x_i = 1$ for "yes" and $0$ for "no", then $\sum x_i$ counts the
yeses and $\bar{x}$ is the proportion of yeses. Proportions are means, so everything we prove about means applies to
them.

### The median

The **median** $M$ is the middle value when the data are sorted: the value at position $\frac{n+1}{2}$ if $n$ is odd,
and the average of the values at positions $\frac{n}{2}$ and $\frac{n}{2} + 1$ if $n$ is even. At least half the data
are $\le M$ and at least half are $\ge M$.

For the company, $n = 9$, so the median is the 5th sorted value: $M = 41$. That is a fair description of a typical
salary here. Remove the owner and the median of the other eight is $(40 + 41)/2 = 40.5$, hardly changed, while the mean
drops from 81 to $329/8 = 41.125$.

<figure class="sketch"><span class="ai-tag">AI-created</span><svg viewBox="0 0 640 264" role="img" aria-labelledby="sk-m-owner-t"><title id="sk-m-owner-t">Nine salaries on a line, eight between 32 and 52 thousand and one at 400; the mean of 81 sits far right of the cluster, the median of 41 inside it</title><defs><filter id="sk-m-owner-pen"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="3.2"/></filter><filter id="sk-m-owner-paper"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="7"/><feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 .10 0"/></filter><pattern id="sk-m-owner-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="7" stroke="#8a4a2a" stroke-width="1.1" opacity=".55"/></pattern><pattern id="sk-m-owner-dots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r="1" fill="#8a4a2a" opacity=".5"/><circle cx="6.5" cy="7" r=".8" fill="#8a4a2a" opacity=".4"/></pattern><marker id="sk-m-owner-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L9 5L1 9" fill="none" stroke="#3a2a1e" stroke-width="1.6" stroke-linecap="round"/></marker></defs><rect width="640" height="264" filter="url(#sk-m-owner-paper)"/><g filter="url(#sk-m-owner-pen)"><text x="30" y="44" text-anchor="start" class="h">Nine salaries, one of them the owner's</text><path class="p" d="M40.0 160 L614 160"/><path class="p" d="M40 156 L40 164"/><text x="40" y="184" text-anchor="middle" class="s">0</text><path class="p" d="M180 156 L180 164"/><text x="180" y="184" text-anchor="middle" class="s">100</text><path class="p" d="M320 156 L320 164"/><text x="320" y="184" text-anchor="middle" class="s">200</text><path class="p" d="M460 156 L460 164"/><text x="460" y="184" text-anchor="middle" class="s">300</text><path class="p" d="M600 156 L600 164"/><text x="600" y="184" text-anchor="middle" class="s">400</text><circle cx="85" cy="148" r="5" class="p gold"/><circle cx="89" cy="148" r="5" class="p gold"/><circle cx="93" cy="136" r="5" class="p gold"/><circle cx="96" cy="148" r="5" class="p gold"/><circle cx="97" cy="136" r="5" class="p gold"/><circle cx="102" cy="124" r="5" class="p gold"/><circle cx="106" cy="148" r="5" class="p gold"/><circle cx="113" cy="148" r="5" class="p gold"/><circle cx="600" cy="148" r="5" class="p rust"/><path class="p red" d="M153 70 L153 156"/><text x="159" y="84" text-anchor="start" class="s">mean 81</text><path class="p blue" d="M97 100 L97 156"/><text x="91" y="96" text-anchor="end" class="s">median 41</text><text x="600" y="130" text-anchor="middle" class="s">owner</text><text x="30" y="226" text-anchor="start" class="s">Thousands of dollars a year. The advert's "average 81" is true, but eight of the nine earn less.</text><text x="30" y="246" text-anchor="start" class="s">Drop the owner and the mean falls to 41.1; the median hardly moves.</text></g></svg><figcaption>Sketched for this page from its company example.</figcaption></figure>

### The mode

The **mode** is the most frequent value. It is the only one of the three that makes sense for a **nominal** variable:
the "average" blood type is meaningless, but the most common blood type is a fair question. For continuous data with
no repeated values the mode is useless as a number, and "mode" usually means a peak of the histogram, as in Chapter 2.

### From a frequency table

Data often come already counted. Made-up example: 20 students were asked how many siblings they have.

| Siblings $x$ | 0 | 1 | 2 | 3 |
| --- | --- | --- | --- | --- |
| Number of students $f$ | 5 | 9 | 4 | 2 |

The value 0 occurs 5 times, so it contributes $0 \times 5$ to the total, and so on. In general, if value $v_j$ occurs
$f_j$ times and $n = \sum f_j$, then

$$
\bar{x} = \frac{1}{n} \sum_j f_j v_j = \sum_j \frac{f_j}{n} v_j ,
$$

a **weighted mean**: each value weighted by its relative frequency. Here
$\bar{x} = (0 \cdot 5 + 1 \cdot 9 + 2 \cdot 4 + 3 \cdot 2)/20 = 23/20 = 1.15$. The median is the average of the 10th
and 11th values; the first 5 are 0 and the next 9 (positions 6 to 14) are 1, so $M = 1$. The mode is also 1.

### When each one misleads

- **The mean misleads with skewed data or outliers.** The company's 81 is the example. "Average income" in a country
  is pulled up by the very rich; statistical agencies usually report the median household income for that reason.
- **The median misleads when the total matters.** An insurer has 10 made-up customers whose claims this year were
  0, 0, 0, 0, 0, 0, 0, 0, 500 and 9500 dollars. The median claim is 0. The mean is 1000 dollars, and that is what the
  insurer must charge each customer, on average, to cover its costs. The median ignores how big the large values are;
  sometimes that is exactly what you need to know.
- **The median also hides a split.** In a class where half scored 40 and half scored 90, the median (65, the average
  of the two middle values) is a score nobody got.
- **The mode is unstable.** In small datasets one repeated value makes a mode; change one number and the mode jumps
  somewhere else entirely.

**Rule of thumb.** For roughly symmetric data without outliers, mean and median are close and the mean is the usual
choice (it uses all the information, and Chapter 6 shows it has the simplest sampling behaviour). For strongly skewed
data or data with outliers, report the median, or better, both, and say why they differ.

## 3.2 Range, IQR, variance and standard deviation

**A question.** Two made-up classes both have mean score 70. In one, every student scored between 65 and 75; in the
other, scores ran from 30 to 100. The mean cannot tell them apart. What number can?

### Range and IQR

The **range** is maximum minus minimum. It is simple and depends only on the two most extreme values, so a single
outlier controls it. The **interquartile range** IQR $= Q_3 - Q_1$ (Chapter 2) is the width of the middle half of the
data and ignores the extremes entirely. For the commute times of Chapter 2, the range is $61 - 4 = 57$ minutes and the
IQR is $27 - 12 = 15$ minutes.

### Variance and standard deviation

A natural measure of spread is the typical size of the deviations $x_i - \bar{x}$. Their plain average is useless (it is
always 0, as shown above). Two ways out: average their absolute values (a good idea that §3.5 returns to), or average
their **squares**, which is what the classical measure does.

**Definition.** The **sample variance** of $x_1, \dots, x_n$ (with $n \ge 2$) is

$$
s^2 = \frac{1}{n - 1}\sum_{i=1}^{n} (x_i - \bar{x})^2 ,
$$

and the **sample standard deviation** is its square root, $s = \sqrt{s^2}$. For a whole population of $N$ values with
mean $\mu$, the **population variance** and **population standard deviation** are

$$
\sigma^2 = \frac{1}{N}\sum_{i=1}^{N} (x_i - \mu)^2, \qquad \sigma = \sqrt{\sigma^2} .
$$

Why the square root? The variance is in squared units (minutes squared, dollars squared), which are hard to picture.
The standard deviation is back in the original units, so it can be compared with the data: "the commute times are
typically about 13 minutes from their mean".

**Worked example 3.1.** Made-up data: $2, 4, 4, 4, 5, 5, 7, 9$ ($n = 8$).

1. Mean: $\bar{x} = 40/8 = 5$.
2. Deviations: $-3, -1, -1, -1, 0, 0, 2, 4$ (**check:** they add to 0).
3. Squared deviations: $9, 1, 1, 1, 0, 0, 4, 16$, with sum $32$.
4. Sample variance: $s^2 = 32/7 \approx 4.571$; sample standard deviation $s \approx 2.138$.

If these 8 values were a whole population, $\sigma^2 = 32/8 = 4$ and $\sigma = 2$.

**A shortcut formula.** Expanding the square,

$$
\sum (x_i - \bar{x})^2 = \sum x_i^2 - 2\bar{x}\sum x_i + n\bar{x}^2 = \sum x_i^2 - 2n\bar{x}^2 + n\bar{x}^2 = \sum x_i^2 - n\bar{x}^2 .
$$

**Check** on the example: $\sum x_i^2 = 4 + 16 + 16 + 16 + 25 + 25 + 49 + 81 = 232$, and $232 - 8 \times 25 = 32$.
(The shortcut is handy by hand but can lose accuracy on a computer when the numbers are large and close together;
software uses more careful methods.)

### Why divide by $n - 1$? A first look

This is the question everyone asks. The full answer is a theorem in Chapter 7; here is the idea and a tiny example.

The variance is meant to measure spread around the *population* mean $\mu$. We do not know $\mu$, so we use $\bar{x}$
instead. But $\bar{x}$ is computed from the same data, and it sits in the middle of them by construction. Section 3.6
proves that, for every number $c$,

$$
\sum_{i=1}^{n}(x_i - c)^2 = \sum_{i=1}^{n}(x_i - \bar{x})^2 + n(\bar{x} - c)^2 .
$$

Put $c = \mu$: the sum of squared deviations from $\bar{x}$ is *smaller* than the sum from $\mu$ (unless $\bar{x} = \mu$
exactly). So dividing it by $n$ would tend to underestimate the true spread. Dividing by the slightly smaller number
$n - 1$ makes up for this, and Chapter 7 proves that it does so exactly, on average, for random samples.

A second way to see it: the $n$ deviations $x_i - \bar{x}$ always add to zero, so once you know $n - 1$ of them, the
last one is determined. Only $n - 1$ of them are free to vary; statisticians say the sum of squares has $n - 1$
**degrees of freedom**.

**A tiny exact check.** A made-up population consists of the two values 1 and 3, so $\mu = 2$ and $\sigma^2 = 1$. Draw a
sample of $n = 2$ *with replacement* (each draw independently picks 1 or 3 with probability $\frac{1}{2}$). The four
equally likely samples are:

| Sample | $\bar{x}$ | $\sum (x_i - \bar{x})^2$ | divide by $n = 2$ | divide by $n - 1 = 1$ |
| --- | --- | --- | --- | --- |
| 1, 1 | 1 | 0 | 0 | 0 |
| 1, 3 | 2 | 2 | 1 | 2 |
| 3, 1 | 2 | 2 | 1 | 2 |
| 3, 3 | 3 | 0 | 0 | 0 |
| **average** | | | **0.5** | **1** |

Dividing by $n$ gives $0.5$ on average, half the truth. Dividing by $n - 1$ gives exactly $\sigma^2 = 1$ on average.

### Shifting and rescaling

Suppose every value is transformed by $y_i = a + b x_i$ (for example, converting Celsius to Fahrenheit:
$a = 32$, $b = 1.8$). Then

$$
\bar{y} = a + b\bar{x}, \qquad s_y = |b|\, s_x .
$$

*Proof.* $\bar{y} = \frac{1}{n}\sum (a + bx_i) = \frac{1}{n}(na + b\sum x_i) = a + b\bar{x}$. Then
$y_i - \bar{y} = b(x_i - \bar{x})$, so $(y_i - \bar{y})^2 = b^2 (x_i - \bar{x})^2$, hence $s_y^2 = b^2 s_x^2$ and
$s_y = |b| s_x$. $\blacksquare$

Adding a constant moves the centre and leaves the spread alone; multiplying stretches both. The median, quartiles and
IQR transform the same way (for $b > 0$: $M_y = a + bM_x$, $\text{IQR}_y = b\,\text{IQR}_x$), because a rule that
preserves order preserves positions in the sorted list.

### Chebyshev's inequality for data

How much of a dataset can lie far from its mean? Without knowing the shape, here is a guarantee. Let $s_n$ be the
standard deviation computed with divisor $n$, $s_n^2 = \frac{1}{n}\sum (x_i - \bar{x})^2$.

**Theorem 3.1 (Chebyshev's inequality for data).** For any dataset with $s_n > 0$ and any $k > 0$, the fraction of
values with $|x_i - \bar{x}| \ge k s_n$ is at most $1/k^2$.

*Proof.* Let $D$ be the set of indices $i$ with $|x_i - \bar{x}| \ge k s_n$, and $|D|$ its size. Every term in the sum
of squares is non-negative, so dropping the terms outside $D$ can only make the sum smaller, and each term inside $D$
is at least $k^2 s_n^2$:

$$
n s_n^2 = \sum_{i=1}^{n} (x_i - \bar{x})^2 \ \ge\ \sum_{i \in D} (x_i - \bar{x})^2 \ \ge\ |D|\, k^2 s_n^2 .
$$

Divide by $n k^2 s_n^2$: $\frac{|D|}{n} \le \frac{1}{k^2}$. $\blacksquare$

So at least $1 - \frac{1}{4} = 75\%$ of any dataset lies within 2 standard deviations of its mean, and at least
$1 - \frac{1}{9} \approx 88.9\%$ within 3. Since $s \ge s_n$, the same holds with $s$ in place of $s_n$. This is the
data version of the inequality proved for random variables in
[Probability, chapter 7](../probability/07-Inequalities-and-the-Law-of-Large-Numbers.md); it is the same proof.

For bell-shaped data much more is true: roughly 68% within 1 standard deviation, 95% within 2 and 99.7% within 3 (the
**68-95-99.7 rule**, exact for the normal distribution: [Probability, chapter 10](../probability/10-The-Normal-Distribution.md)).
Chebyshev's bound is weaker because it must hold for every shape, including the worst. **Check** on the commute
times: $\bar{x} = 21.6$, $s_n \approx 13.22$; only 2 of 30 values (52 and 61, so $6.7\%$) are at least 2 standard
deviations from the mean, well inside the guaranteed $25\%$.

<figure class="sketch"><span class="ai-tag">AI-created</span><svg viewBox="0 0 640 342" role="img" aria-labelledby="sk-m-cheb-t"><title id="sk-m-cheb-t">A lopsided histogram with its mean marked, and two brackets two and three standard deviations wide each side, holding at least 75 and 88.9 percent of the data</title><defs><filter id="sk-m-cheb-pen"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="3.2"/></filter><filter id="sk-m-cheb-paper"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="7"/><feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 .10 0"/></filter><pattern id="sk-m-cheb-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="7" stroke="#8a4a2a" stroke-width="1.1" opacity=".55"/></pattern><pattern id="sk-m-cheb-dots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r="1" fill="#8a4a2a" opacity=".5"/><circle cx="6.5" cy="7" r=".8" fill="#8a4a2a" opacity=".4"/></pattern><marker id="sk-m-cheb-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L9 5L1 9" fill="none" stroke="#3a2a1e" stroke-width="1.6" stroke-linecap="round"/></marker></defs><rect width="640" height="342" filter="url(#sk-m-cheb-paper)"/><g filter="url(#sk-m-cheb-pen)"><text x="30" y="44" text-anchor="start" class="h">Whatever the shape, most data sit near the mean</text><path class="p gold" d="M120 186 L150 186 L150 200 L120 200Z"/><path class="p gold" d="M150 158 L180 158 L180 200 L150 200Z"/><path class="p gold" d="M180 116 L210 116 L210 200 L180 200Z"/><path class="p gold" d="M210 88 L240 88 L240 200 L210 200Z"/><path class="p gold" d="M240 102 L270 102 L270 200 L240 200Z"/><path class="p gold" d="M270 130 L300 130 L300 200 L270 200Z"/><path class="p gold" d="M300 151 L330 151 L330 200 L300 200Z"/><path class="p gold" d="M330 165 L360 165 L360 200 L330 200Z"/><path class="p gold" d="M360 179 L390 179 L390 200 L360 200Z"/><path class="p gold" d="M390 186 L420 186 L420 200 L390 200Z"/><path class="p gold" d="M420 193 L450 193 L450 200 L420 200Z"/><path class="p gold" d="M450 193 L480 193 L480 200 L450 200Z"/><path class="p red" d="M246 66 L246 206"/><text x="246" y="62" text-anchor="middle" class="s">mean</text><path class="p" d="M102 228 L390 228 M102 222 L102 234 M390 222 L390 234"/><text x="400" y="233" text-anchor="start" class="s">2 SDs: at least 75%</text><path class="p" d="M30 262 L462 262 M30 256 L30 268 M462 256 L462 268"/><text x="472" y="267" text-anchor="start" class="s">3 SDs: at least 88.9%</text><text x="30" y="306" text-anchor="start" class="s">Chebyshev: at most 1/k² of the values lie k or more standard deviations from the mean, for any</text><text x="30" y="326" text-anchor="start" class="s">data at all. For a bell shape the true shares are higher, about 95% and 99.7%.</text></g></svg><figcaption>Sketched for this page. A made-up histogram.</figcaption></figure>

## 3.3 z-scores

**A question.** Ana scored 82 on a chemistry test where the class mean was 70 and the standard deviation 8. Ben
scored 74 on a history test where the mean was 60 and the standard deviation 10. Who did better, relative to their
class?

Raw scores on different tests cannot be compared directly. Measure each instead in standard deviations from its own
mean. The **z-score** (or **standardised value**) of $x$ in a dataset with mean $\bar{x}$ and standard deviation $s$ is

$$
z = \frac{x - \bar{x}}{s} .
$$

It says how many standard deviations $x$ lies above ($z > 0$) or below ($z < 0$) the mean.

- Ana: $z = (82 - 70)/8 = 1.5$.
- Ben: $z = (74 - 60)/10 = 1.4$.

Ana did slightly better relative to her class. (Whether the comparison is meaningful depends on the two classes being
comparable groups, which a z-score cannot tell you.)

**Standardised data have mean 0 and standard deviation 1.** The z-score is the transformation $y = a + bx$ with
$b = 1/s$ and $a = -\bar{x}/s$. By the rule in §3.2, the new mean is $-\bar{x}/s + \bar{x}/s = 0$ and the new standard
deviation is $s/s = 1$. Standardising removes the units and the location, keeping only the shape. Chapter 4 builds the
correlation coefficient from products of z-scores.

**Reading z-scores.** By Chebyshev, at most $1/k^2$ of any dataset has $|z| \ge k$; so $|z| \ge 3$ is rare in any
data (at most 11%) and very rare in bell-shaped data (about 0.3%). A z-score above 3 or below $-3$ is a common
informal flag for an outlier, though the rule is fragile: an extreme outlier inflates $s$ and so can hide itself
(exercise 9 shows this), which is one reason §3.5 prefers summaries that outliers cannot move.

## 3.4 Percentiles

*Level: intermediate.*

**A question.** A paediatrician says a baby's weight is "at the 90th percentile". What does that mean, exactly, and
why do two spreadsheet programs give different answers for the 90th percentile of the same list?

### The idea

The **$p$-th quantile** (for $0 < p < 1$), or **$100p$-th percentile**, is a value with about a fraction $p$ of the data
below it and $1 - p$ above. The median is the 50th percentile; $Q_1$ and $Q_3$ are the 25th and 75th. A baby at the
90th percentile weighs more than about 90% of babies of the same age in the reference population.

### Why there are several definitions

With finitely many data points, "a fraction $p$ below" usually cannot be exact. Ten values cannot be split 25% / 75%
at a data point. So a rule is needed, and different fields chose different rules. Rob Hyndman and Yanan Fan (1996)
catalogued **nine** definitions in use in statistical software. Here are two of the most common.

Write the sorted data as $x_{(1)} \le x_{(2)} \le \dots \le x_{(n)}$; $x_{(j)}$ is called the $j$-th **order
statistic**.

**Definition 1 (inverse of the empirical distribution).** The **empirical distribution function** is

$$
F_n(t) = \frac{\text{number of } x_i \le t}{n},
$$

the fraction of the data at or below $t$. It is a staircase rising from 0 to 1, with a step of $\frac{1}{n}$ at each data
point. The type 1 quantile is the smallest data value where the staircase reaches $p$:

$$
Q_1(p) = x_{(j)}, \qquad j = \lceil np \rceil ,
$$

where $\lceil y \rceil$ is $y$ rounded up to a whole number.

**Definition 7 (linear interpolation).** Put the data at equally spaced positions $1, 2, \dots, n$ and interpolate.
Compute the position $h = (n - 1)p + 1$, write $h = j + g$ with $j$ a whole number and $0 \le g < 1$, and set

$$
Q_7(p) = x_{(j)} + g\,(x_{(j+1)} - x_{(j)}) .
$$

(If $j = n$, take $x_{(n)}$.) This is the default in R, in NumPy and in the spreadsheet function `PERCENTILE.INC`.

**Worked example 3.2.** Made-up data $15, 20, 35, 40, 50$; the 40th percentile ($p = 0.4$).

- Type 1: $np = 2$, so $j = 2$ and $Q_1(0.4) = x_{(2)} = 20$.
- Type 7: $h = 4 \times 0.4 + 1 = 2.6$, so $j = 2$, $g = 0.6$, and $Q_7(0.4) = 20 + 0.6 \times (35 - 20) = 29$.

Two respectable definitions, two answers: 20 and 29. For the 30 commute times of Chapter 2, type 7 gives quartiles
$12.25$ and $26.5$, the halves method of Chapter 2 gives $12$ and $27$, and Python's `statistics.quantiles` (which by
default uses Hyndman and Fan's type 6) gives $12$ and $27.5$. The median is 18 in every case.

### Why it does not matter much for large samples

**Proposition 3.2.** For every $n$ and $p$, the type 7 quantile lies between $x_{(j-1)}$ and $x_{(j+1)}$, where
$j = \lceil np \rceil$ is the type 1 index (reading $x_{(0)}$ as $x_{(1)}$ and $x_{(n+1)}$ as $x_{(n)}$).

*Proof.* The type 7 position is $h = (n-1)p + 1 = np + (1 - p)$, so $np \le h \le np + 1$. On the one hand,
$\lfloor h \rfloor \ge \lfloor np \rfloor \ge \lceil np \rceil - 1 = j - 1$, so the interpolation starts at or after
position $j - 1$. On the other hand, $h \le np + 1 \le j + 1$, so it ends at or before position $j + 1$. The type 7 value
is a weighted average of two neighbouring order statistics between those positions, so it lies between $x_{(j-1)}$ and
$x_{(j+1)}$. $\blacksquare$

So the two definitions differ by at most two adjacent gaps in the sorted data. For a large sample from a continuous
distribution, neighbouring order statistics are close together (except far out in the tails), so all reasonable
definitions agree to within a hair. The differences matter only for small datasets, and there the honest move is to
say which definition you used.

### Percentile ranks

Going the other way, the **percentile rank** of a value $x$ is the percentage of the data below it (some definitions
count values equal to $x$ as half below). A score of 74 in a class where 30 of 40 students scored lower has percentile
rank $75$. For bell-shaped data there is a dictionary between z-scores and percentiles: $z = 0$ is the 50th percentile,
$z = 1$ about the 84th, $z = 2$ about the 97.7th (from the normal table, [Probability, chapter 10](../probability/10-The-Normal-Distribution.md)).

## 3.5 Robustness and outliers

*Level: intermediate.*

**A question.** A clerk typing the company's salaries into a spreadsheet adds three zeros by mistake, entering one
salary of 40 as 40 000. Which summaries are ruined, and which barely notice?

### Resistant and non-resistant summaries

Recompute with the typo. The mean jumps by $(40\,000 - 40)/9 \approx 4440$ thousand dollars. The standard deviation
explodes. The range explodes. The median moves only from 41 to 44: the sorted list becomes
$32, 35, 38, 41, 44, 47, 52, 400, 40\,000$, so one value has jumped from below the middle to the top and the middle
shifts by one place. Making the typo a million times worse would not move it any further. The quartiles (halves method,
Chapter 2) behave the same way, though with only nine values the effect is larger: $Q_1$ stays at $36.5$, while $Q_3$
moves from $(47 + 52)/2 = 49.5$ (the middle of the upper half $44, 47, 52, 400$) to $(52 + 400)/2 = 226$, because the owner's 400 is
now one of the middle values of the upper half. Still, $Q_3$ is capped by the original data: no single typo, however
wild, can carry it past 400.

A summary is **resistant** (or **robust**) if a small fraction of the data, however wild, cannot change it much. The
mean, standard deviation and range are not resistant; the median, quartiles and IQR are.

### The breakdown point

To make "however wild" precise, ask: what is the smallest number of data values that, if replaced by arbitrary
numbers, can carry the summary as far as you like? Divided by $n$, this is the (finite-sample) **breakdown point**.

**The mean has breakdown point $1/n$.** Replace a single value $x_1$ by $t$; the mean becomes
$\bar{x} + (t - x_1)/n$, which goes to infinity as $t$ does. One bad value is enough.

**The median has breakdown point about $\frac{1}{2}$.**

**Proposition 3.3.** Let $n = 2k + 1$ be odd. If at most $k$ of the values are replaced by arbitrary numbers, the new
median lies between the smallest and largest of the unchanged values. So the median breaks down only when $k + 1$
values (more than half) are replaced: the breakdown point is $\frac{k+1}{2k+1}$, which tends to $\frac{1}{2}$.

*Proof.* Let $m \le k$ values be replaced, and let $a$ and $b$ be the smallest and largest of the $n - m \ge k + 1$
values left unchanged. The new median $M'$ is the $(k + 1)$-th smallest value, so at least $k + 1$ values are
$\le M'$. If $M' < a$, all those $k + 1$ values would be below $a$, so they would all have to be replaced values; but
only $m \le k$ values were replaced. So $M' \ge a$. In the same way, at least $k + 1$ values are $\ge M'$, and if
$M' > b$ they would all be replaced values, which is impossible; so $M' \le b$. Since $a$ and $b$ are original data,
$M'$ stays within the range of the original data. With $k + 1$ replacements, on the other hand, set them all to a value
$t$ larger than every original value. Then the $k + 1$ largest values are all equal to $t$, and since $n = 2k + 1$ the
median (the $(k+1)$-th smallest) is also the $(k+1)$-th largest, so it equals $t$, which can be as large as you
like. $\blacksquare$

(A similar argument works for even $n$.) No summary of location can have a breakdown point above $\frac{1}{2}$: if
more than half the data are replaced, the bad values *are* the majority, and nothing can tell which half is "right".

### Two compromises

**The trimmed mean.** Sort the data, remove the $g$ smallest and the $g$ largest values, and average the rest. With
$g = 0$ it is the mean; with $g$ as large as possible it is the median. Trimming 10% or 20% from each end is common.
Its breakdown point is $\frac{g+1}{n}$: you must corrupt $g + 1$ values on one side before one of them survives the
trimming. Trimming one value from each end of the company's salaries (about 11%) gives
$(35 + 38 + 40 + 41 + 44 + 47 + 52)/7 = 297/7 \approx 42.4$. Judges' scores in some sports are combined this way, by
dropping the highest and lowest.

**The median absolute deviation.** A resistant measure of spread to go with the median:

$$
\text{MAD} = \text{median of } |x_i - M| .
$$

For the salaries, $M = 41$ and the absolute deviations are $9, 6, 3, 1, 0, 3, 6, 11, 359$, with median 6, so
$\text{MAD} = 6$ thousand dollars, a sensible spread for the eight employees, untouched by the owner. (The standard
deviation is about 120.) For normal data the MAD is about $0.6745\sigma$, so $1.4826 \times \text{MAD}$ is used as a
robust estimate of $\sigma$; here $1.4826 \times 6 \approx 8.9$.

### The price of robustness

If resistant summaries are safer, why use the mean at all? Because for clean, bell-shaped data the mean is more
**efficient**: it uses the exact size of every value, so it varies less from sample to sample than the median does.
For large samples from a normal distribution the median needs about $\pi/2 \approx 1.57$ times as many observations
to be as precise as the mean (Chapter 7 makes "precise" exact). Robust statistics, a field built up by Peter Huber,
Frank Hampel, John Tukey and others from the 1960s, is the study of this trade-off: summaries that lose little when the
data are clean and much less than the mean when they are not.

**What to do with an outlier.** Look at it. If it is a recording error you can prove (a height of 17 metres), correct it
or remove it and say so. If it is real, keep it, and report summaries with and without it, or use resistant ones. An
automatic rule that throws away every "impossible" value will one day throw away the most important observation in the
dataset.

## 3.6 Summaries as minimisers

*Level: intermediate.*

**A question.** You must guess the commute time of a person picked at random from the 30 in Chapter 2, and you will be
fined according to how wrong you are. What single number should you guess? The answer depends on how the fine works,
and the four answers are the four summaries of this chapter.

Fix the data $x_1, \dots, x_n$ and consider a guess $c$. Here are four ways to score it.

| Fine for the guess $c$ | Best $c$ |
| --- | --- |
| total squared error $\sum (x_i - c)^2$ | the mean $\bar{x}$ |
| total absolute error $\sum \lvert x_i - c \rvert$ | any median |
| number of misses, $\#\{i : x_i \ne c\}$ | any mode |
| worst error $\max_i \lvert x_i - c \rvert$ | the midrange $\frac{1}{2}(x_{(1)} + x_{(n)})$ |

Each row is a theorem. None needs calculus.

### The mean minimises squared error

**Theorem 3.4.** For every real number $c$,

$$
\sum_{i=1}^{n}(x_i - c)^2 = \sum_{i=1}^{n}(x_i - \bar{x})^2 + n(\bar{x} - c)^2 .
$$

Hence $\sum (x_i - c)^2$ is smallest exactly when $c = \bar{x}$, and its minimum value is $\sum (x_i - \bar{x})^2$.

*Proof.* Write $x_i - c = (x_i - \bar{x}) + (\bar{x} - c)$ and square:

$$
(x_i - c)^2 = (x_i - \bar{x})^2 + 2(\bar{x} - c)(x_i - \bar{x}) + (\bar{x} - c)^2 .
$$

Add over $i$. The middle term gives $2(\bar{x} - c)\sum (x_i - \bar{x}) = 0$, because deviations from the mean add to
zero (§3.1). The last term gives $n(\bar{x} - c)^2$. This proves the identity. The first term on the right does not
depend on $c$, and the second is $\ge 0$ with equality only when $c = \bar{x}$. $\blacksquare$

This is the algebra of completing the square ([Algebra, chapter 5](../algebra/05-Quadratics.md)): as a function of
$c$, the total squared error is a parabola with its lowest point at $\bar{x}$. It is also the identity used in §3.2 to
see why $n - 1$ appears, and in Chapter 4 it will find the least squares line. Geometrically it is Pythagoras's theorem
in $n$ dimensions, a view Chapter 12 develops.

**Check** with $2, 4, 4, 4, 5, 5, 7, 9$ and $c = 4$: $\sum (x_i - 4)^2 = 4 + 0 + 0 + 0 + 1 + 1 + 9 + 25 = 40$, and the
formula gives $32 + 8 \times (5 - 4)^2 = 40$.

### The median minimises absolute error

**Theorem 3.5.** The total absolute error $f(c) = \sum_{i=1}^{n} |x_i - c|$ is smallest when $c$ is a median. Precisely:
if $n = 2k + 1$ is odd, the unique minimiser is $c = x_{(k+1)}$; if $n = 2k$ is even, every $c$ in the interval
$[x_{(k)}, x_{(k+1)}]$ is a minimiser, and no other $c$ is.

*Proof.* Sort the data and pair them from the outside in: the smallest with the largest, the second smallest with the
second largest, and so on. For one pair $x_{(i)} \le x_{(n+1-i)}$, the triangle inequality on the number line says

$$
|x_{(i)} - c| + |x_{(n+1-i)} - c| \ \ge\ x_{(n+1-i)} - x_{(i)} ,
$$

with equality exactly when $c$ lies between them, $x_{(i)} \le c \le x_{(n+1-i)}$. (If $c$ is between, the two distances
add up to the gap; if $c$ is outside, you travel past one end and back.) The intervals
$[x_{(i)}, x_{(n+1-i)}]$ are nested: each lies inside the previous one. So a single $c$ can make *every* pair's sum as
small as possible at once, provided it lies in the innermost interval.

- If $n = 2k$, there are $k$ pairs and the innermost is $[x_{(k)}, x_{(k+1)}]$. Every $c$ in it makes all $k$ pair-sums
  minimal, so $f(c) = \sum_{i=1}^{k} (x_{(n+1-i)} - x_{(i)})$, the smallest value possible. A $c$ outside it (say
  $c < x_{(k)}$) has strict inequality for the innermost pair, so $f(c)$ is larger. (If $x_{(k)} = x_{(k+1)}$, the
  interval is a single point.)
- If $n = 2k + 1$, there are $k$ pairs plus the middle value $x_{(k+1)}$ on its own, contributing $|x_{(k+1)} - c|$. The
  innermost pair interval is $[x_{(k)}, x_{(k+2)}]$, which contains $x_{(k+1)}$. Taking $c = x_{(k+1)}$ makes all pair
  sums minimal and the lone term zero; any other $c$ makes the lone term positive (and cannot make any pair-sum smaller
  than its minimum). $\blacksquare$

**Worked example 3.3.** For $1, 3, 8, 10$: any $c$ in $[3, 8]$ gives $f(c) = (10 - 1) + (8 - 3) = 14$. **Check** at
$c = 5$: $4 + 2 + 3 + 5 = 14$. At $c = 2$: $1 + 1 + 6 + 8 = 16$, larger.

Another way to see it: as $c$ moves right by a small step $\delta$ (not crossing any data point), each value to the left
of $c$ adds $\delta$ to $f$ and each value to the right subtracts $\delta$. So $f$ decreases while more than half the
data are to the right of $c$, and increases once more than half are to the left. The bottom is where the data are
balanced in *number*, not in *weight*: that is the median. The mean balances weights (moments), the median balances
counts. This is why the median ignores how far out an outlier is: moving the owner's salary from 400 to 40 000 does
not change which side of 41 it is on.

### The mode and the midrange

**Proposition 3.6.** The number of misses $\#\{i : x_i \ne c\}$ is smallest when $c$ is a most frequent value.

*Proof.* The number of misses is $n$ minus the number of $i$ with $x_i = c$, so it is smallest when $c$ occurs most
often. $\blacksquare$

**Proposition 3.7.** The worst error $g(c) = \max_i |x_i - c|$ is smallest at the midrange $c^* = \frac{1}{2}(x_{(1)} + x_{(n)})$,
where it equals half the range.

*Proof.* The farthest data point from $c$ is always the minimum or the maximum, so
$g(c) = \max(c - x_{(1)},\ x_{(n)} - c)$. These two numbers add to $x_{(n)} - x_{(1)}$, so the larger is at least half
of that, with equality exactly when they are equal, at $c = c^*$. $\blacksquare$

The midrange depends only on the two most extreme values: it is the least robust summary of all (breakdown point
$1/n$), and the worst-case fine shows why: it cares only about the worst case.

### A bonus: the mean and median are never far apart

The minimiser facts give a neat inequality. Let $s_n = \sqrt{\frac{1}{n}\sum (x_i - \bar{x})^2}$.

**Theorem 3.8.** For any dataset, $|\bar{x} - M| \le s_n$: the mean and the median are within one standard deviation of
each other.

*Proof.* Three steps.

1. $|\bar{x} - M| = \left|\frac{1}{n}\sum (x_i - M)\right| \le \frac{1}{n}\sum |x_i - M|$, by the triangle inequality
   (the size of a sum is at most the sum of the sizes).
2. $\frac{1}{n}\sum |x_i - M| \le \frac{1}{n}\sum |x_i - \bar{x}|$, because the median minimises total absolute error
   (Theorem 3.5).
3. Write $d_i = |x_i - \bar{x}|$ and $\bar{d} = \frac{1}{n}\sum d_i$. Then
   $0 \le \frac{1}{n}\sum (d_i - \bar{d})^2 = \frac{1}{n}\sum d_i^2 - \bar{d}^2$ (the shortcut formula of §3.2 with
   divisor $n$), so $\bar{d} \le \sqrt{\frac{1}{n}\sum d_i^2} = s_n$.

Chaining the three, $|\bar{x} - M| \le s_n$. $\blacksquare$

**Check** with the salaries: $|\bar{x} - M| = |81 - 41| = 40$, and $s_n \approx 112.9$. The gap between mean and
median, measured in standard deviations, is a simple measure of skewness; Theorem 3.8 says it always lies between $-1$
and $1$.

### Why squares won

If the median is more robust, why did the mean and the sum of squares become the standard? Partly convenience:
squared error leads to linear equations (Theorem 3.4 and Chapter 4's least squares), which could be solved by hand in
the nineteenth century; absolute error leads to problems that needed linear programming, solved efficiently only in the
twentieth. Partly theory: Gauss showed in 1809 that if errors follow the normal distribution, the mean is the most
probable value, and the central limit theorem (Chapter 6) explains why the normal distribution is common. The idea of
minimising absolute deviations is older: Roger Boscovich used it in the 1750s to fit a line to measurements of the
shape of the Earth, and Laplace developed it. Today both are standard, chosen by the job: squares when the data are
clean and the mathematics should be simple, absolute values (and other robust losses) when outliers are expected. The
choice of loss is the choice of summary.

## Check yourself

??? question "1. Find the mean, median and mode of the made-up data 3, 7, 7, 2, 9, 7, 4, 1."
    Sorted: $1, 2, 3, 4, 7, 7, 7, 9$ ($n = 8$). Sum $= 40$, mean $= 5$. Median: average of the 4th and 5th values,
    $(4 + 7)/2 = 5.5$. Mode: 7 (three times). The mean is a little below the median because of the low values 1, 2, 3.

??? question "2. In a made-up survey, 45 of 120 people answered yes. Code yes as 1 and no as 0. What are the mean and the (population) standard deviation of the codes?"
    The mean is $45/120 = 0.375$, the proportion of yeses. With $p = 0.375$, each code is 1 or 0 and $x_i^2 = x_i$, so
    $\frac{1}{n}\sum x_i^2 = p$ and $\sigma^2 = p - p^2 = p(1 - p) = 0.375 \times 0.625 = 0.234375$, giving
    $\sigma \approx 0.484$. The formula $\sqrt{p(1-p)}$ for the spread of 0/1 data comes back in Chapter 6.

??? question "3. Compute the sample variance and standard deviation of 6, 8, 10, 12, 14 in two ways: from the deviations and by the shortcut formula."
    Mean $= 50/5 = 10$. Deviations $-4, -2, 0, 2, 4$; squares $16, 4, 0, 4, 16$; sum $40$. Shortcut:
    $\sum x_i^2 = 36 + 64 + 100 + 144 + 196 = 540$ and $540 - 5 \times 10^2 = 40$. So $s^2 = 40/4 = 10$ and
    $s = \sqrt{10} \approx 3.162$.

??? question "4. Daily high temperatures for a month have mean 12 °C and standard deviation 5 °C. Find the mean and standard deviation in Fahrenheit, using F = 32 + 1.8C."
    By the rule for $y = a + bx$: mean $= 32 + 1.8 \times 12 = 53.6$ °F, standard deviation $= 1.8 \times 5 = 9$ °F.
    The added 32 shifts the centre but not the spread.

??? question "5. Carla ran 100 m in 12.4 s in a group with mean 13.1 s and standard deviation 0.5 s. Dev threw a ball 41 m in a group with mean 35 m and standard deviation 4 m. Who did better relative to their group? Be careful about direction."
    Carla: $z = (12.4 - 13.1)/0.5 = -1.4$. For a race, lower is better, so she was 1.4 standard deviations *better*
    than average. Dev: $z = (41 - 35)/4 = 1.5$, and for a throw higher is better, so 1.5 standard deviations better.
    Dev did slightly better relative to his group. A z-score's sign must be read with the meaning of the variable.

??? question "6. For the data 15, 20, 35, 40, 50, find the 75th percentile by definitions 1 and 7."
    Type 1: $np = 5 \times 0.75 = 3.75$, so $j = \lceil 3.75 \rceil = 4$ and $Q_1(0.75) = x_{(4)} = 40$. Type 7:
    $h = 4 \times 0.75 + 1 = 4$, so $j = 4$, $g = 0$, and $Q_7(0.75) = x_{(4)} = 40$. Here they agree. (For $p = 0.4$
    they gave 20 and 29, as in Worked example 3.2.)

??? question "7. What does Chebyshev's inequality guarantee about the fraction of any dataset within 1.5 standard deviations of its mean? Check it on the commute times of Chapter 2 (mean 21.6, $s_n \approx 13.22$)."
    At most $1/1.5^2 = 4/9 \approx 44.4\%$ lie 1.5 or more standard deviations away, so at least $55.6\%$ lie within.
    For the commutes, $21.6 \pm 1.5 \times 13.22 = 21.6 \pm 19.83$, the interval $[1.77, 41.43]$. The values outside it
    are 44, 52 and 61, which is 3 of 30, or 10%. So 90% lie within, comfortably above the guaranteed 55.6%.

??? question "8. A 10% trimmed mean of 20 values removes the 2 smallest and 2 largest. What is the smallest number of values that must be corrupted to make it arbitrarily large? What is its breakdown point?"
    If only 2 values are made huge, they are the 2 largest and get trimmed, so the trimmed mean stays bounded (the
    remaining 16 values are all original, or lie between original values). With 3 values made huge, one of them
    survives the trimming and the average of the 16 middle values contains it, so it can be made as large as you like.
    The answer is 3, and the breakdown point is $3/20 = 15\%$, matching the formula $\frac{g+1}{n}$ with $g = 2$.

??? question "9. A made-up dataset has nine values equal to 10 and one value equal to 100. Compute the z-score of the 100 using the sample standard deviation. What does this show about the rule 'flag $|z| > 3$'?"
    Mean $= (90 + 100)/10 = 19$. Deviations: nine of $-9$ and one of $81$; squares sum to $9 \times 81 + 6561 = 729 + 6561 = 7290$.
    $s^2 = 7290/9 = 810$, $s \approx 28.46$. The z-score of 100 is $81/28.46 \approx 2.85$, below 3, so the rule does
    not flag it, though it is obviously an outlier. The outlier inflated both the mean and the standard deviation and so
    hid itself. In fact, with $n$ values, no z-score computed with $s$ can exceed $(n-1)/\sqrt{n}$, which is about 2.85
    for $n = 10$. Resistant rules (Tukey's fences, or the median and MAD) do not have this problem: here
    $M = 10$ and $\text{MAD} = 0$, so the 100 stands out at once.

??? question "10. Find every $c$ that minimises $\lvert 1 - c\rvert + \lvert 3 - c\rvert + \lvert 8 - c\rvert + \lvert 10 - c\rvert + \lvert 20 - c\rvert$, and the minimum value."
    $n = 5$ is odd, so by Theorem 3.5 the unique minimiser is the median, $c = 8$. The value is
    $7 + 5 + 0 + 2 + 12 = 26$. **Check** a neighbour: at $c = 9$ it is $8 + 6 + 1 + 1 + 11 = 27$; at $c = 7$ it is
    $6 + 4 + 1 + 3 + 13 = 27$. Note that the outlying 20 does not pull the minimiser toward it, unlike the mean
    ($42/5 = 8.4$).

??? question "11. Weighted squared error. Positive weights $w_1, \dots, w_n$ are given. Prove that $\sum w_i (x_i - c)^2$ is smallest when $c$ is the weighted mean $\bar{x}_w = \sum w_i x_i / \sum w_i$."
    Let $W = \sum w_i$. Write $x_i - c = (x_i - \bar{x}_w) + (\bar{x}_w - c)$ and expand:
    $\sum w_i (x_i - c)^2 = \sum w_i (x_i - \bar{x}_w)^2 + 2(\bar{x}_w - c)\sum w_i (x_i - \bar{x}_w) + W(\bar{x}_w - c)^2$.
    The middle sum is $\sum w_i x_i - \bar{x}_w W = 0$ by the definition of $\bar{x}_w$. So the total is a constant plus
    $W(\bar{x}_w - c)^2$, which is smallest, uniquely, at $c = \bar{x}_w$. This is Theorem 3.4 with weights; with all
    $w_i = 1$ it is Theorem 3.4 itself.

??? question "12. Prove that the median minimises total absolute error by a different route: show that for $c < d$ with no data strictly between them, $f(d) - f(c) = (d - c)(L - R)$, where $L$ is the number of values $\le c$ and $R$ the number of values $\ge d$. Deduce where $f$ is smallest."
    For a value $x_i \le c$: $|x_i - d| - |x_i - c| = (d - x_i) - (c - x_i) = d - c$. For a value $x_i \ge d$:
    $|x_i - d| - |x_i - c| = (x_i - d) - (x_i - c) = -(d - c)$. No value lies strictly between $c$ and $d$, so every value
    is in one of the two groups, and $f(d) - f(c) = (d - c)(L - R)$. So moving right decreases $f$ while $L < R$ (fewer
    values on the left than the right) and increases it once $L > R$. The data points cut the line into pieces on which
    $f$ is linear, and the slope $L - R$ goes from $-n$ to $+n$ as $c$ moves from far left to far right. The minimum is
    where the slope changes sign, where at most half the values are on each side: at a median. If $n$ is even and the
    two middle values differ, the slope is exactly 0 between them, so the whole interval minimises $f$, agreeing with
    Theorem 3.5.

## What you learned

- The mean $\bar{x} = \frac{1}{n}\sum x_i$ is the balance point (deviations add to 0); the median is the middle of the
  sorted data; the mode is the most common value. Proportions are means of 0/1 data.
- The mean misleads with skew and outliers; the median misleads when totals matter; the mode is unstable.
- Spread: range, IQR, and the variance $s^2 = \frac{1}{n-1}\sum (x_i - \bar{x})^2$ with its square root $s$. Dividing by
  $n - 1$ corrects for measuring deviations from $\bar{x}$ instead of $\mu$ (proof in Chapter 7).
- For $y = a + bx$: $\bar{y} = a + b\bar{x}$ and $s_y = |b|s_x$; z-scores have mean 0 and standard deviation 1.
- Chebyshev: at most $1/k^2$ of any dataset lies $k$ standard deviations or more from its mean.
- Percentiles have several definitions that agree up to adjacent gaps in the sorted data.
- The mean has breakdown point $1/n$, the median about $\frac{1}{2}$; trimmed means and the MAD sit in between or
  alongside, trading efficiency for resistance.
- The mean minimises squared error, the median absolute error, the mode the number of misses, and the midrange the
  worst error; as a corollary $|\bar{x} - M| \le s_n$.

**Next:** [Chapter 4](04-Relationships-and-Correlation.md) moves from one variable to two: tables of two categorical
variables, the correlation coefficient and its properties, the least squares line, residuals, why correlation is not
causation, and Simpson's paradox in the Berkeley admissions data.

## Further reading

- David Freedman, Robert Pisani and Roger Purves, *Statistics* (4th edition, 2007), Chapters 4 and 5.
- John W. Tukey, *Exploratory Data Analysis* (1977).
- Rob J. Hyndman and Yanan Fan, "Sample quantiles in statistical packages", *The American Statistician* 50 (1996),
  361 to 365: the nine definitions.
- Peter J. Huber, "Robust estimation of a location parameter", *Annals of Mathematical Statistics* 35 (1964).
- Peter J. Huber and Elvezio M. Ronchetti, *Robust Statistics* (2nd edition, 2009).
- Frank R. Hampel, Elvezio M. Ronchetti, Peter J. Rousseeuw and Werner A. Stahel, *Robust Statistics: The Approach
  Based on Influence Functions* (1986).
- Stephen M. Stigler, *The History of Statistics* (1986), Chapter 1, on Legendre, Gauss, Boscovich and Laplace.
- On this site: the Topics lessons [Quartiles and the five-number summary](../../topics/statistics/level-5/01-quartiles-five-number.md),
  [Interquartile range and outliers](../../topics/statistics/level-5/03-iqr-outliers.md) and
  [Organising large data sets](../../topics/statistics/level-7/07-large-data-sets.md);
  [Probability, chapter 6](../probability/06-Expectation-and-Variance.md) for expectation and variance of random
  variables, [Probability, chapter 7](../probability/07-Inequalities-and-the-Law-of-Large-Numbers.md) for Chebyshev's
  inequality, and [Algebra, chapter 5](../algebra/05-Quadratics.md) for completing the square; and the
  [Probability book](../probability/index.md).
