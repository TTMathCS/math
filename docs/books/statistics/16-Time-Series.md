# 16. Time series

*Almost every method in this book so far assumed independent observations: shuffle the data and nothing changes. Data
recorded in time order break that rule. Today's temperature is close to yesterday's, this month's sales echo last
year's, the air pressure on Mars rises and falls with its seasons. This chapter asks how to describe and predict such
data honestly. You will split a series into trend, season and noise, measure how strongly a series remembers its past
with the autocorrelation function, smooth with moving averages, study the simplest model with memory, the AR(1), and
prove its variance and correlation formulas, make forecasts with error bars that grow the right way, and end with a
real example from Mars: the seasonal pressure cycle first measured by the Viking landers.*

!!! abstract "In this chapter"
    **You will learn:**

    - how to describe a series as trend plus seasonal pattern plus noise, additively or multiplicatively
    - the autocovariance and autocorrelation functions, how to estimate them, and what "significant" lags mean
    - moving averages and exponential smoothing, and how smoothing can create cycles that are not there
    - stationarity, the AR(1) model, and proofs of its variance $\sigma^2/(1-\phi^2)$ and correlations $\phi^h$
    - how to forecast with an AR(1), why forecast intervals widen and then level off, and how to test forecasts honestly
    - how the seasonal pressure cycle on Mars was measured and how a time-series analyst would approach it

    **You need:** [Chapter 4](04-Relationships-and-Correlation.md) (correlation), [Chapter 11](11-Linear-Regression.md)
    (least squares), and from the Probability book [expectation and variance](../probability/06-Expectation-and-Variance.md)
    and [joint distributions](../probability/11-Joint-Distributions.md) (covariance of sums). Geometric series are used in
    16.3 to 16.5 ([series](../../uoft/MAT137/unit13.md)). Sines and cosines appear in 16.6.

    **Levels:** 16.1 to 16.3 are intermediate; 16.4 and 16.5 are advanced (full proofs); 16.6 is intermediate, with
    an advanced part on harmonic regression.

## 16.1 Trend, season, noise

### A picture first

Here is four years of made-up monthly data, say the number of visitors to a museum, in thousands:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="Forty-eight months of a made-up series that rises steadily with a yearly up-and-down pattern; a centred 12-month moving average runs through it as a smooth rising line, removing the seasonal swings">
  <polyline fill="none" stroke="#9cc9ea" stroke-width="2" points="40.0,143.0 47.4,118.2 54.9,122.1 62.3,106.4 69.8,121.3 77.2,112.8 84.7,129.1 92.1,127.6 99.6,138.6 107.0,146.1 114.5,144.1 121.9,128.7 129.4,119.8 136.8,113.2 144.3,92.4 151.7,110.7 159.1,94.4 166.6,84.9 174.0,106.6 181.5,130.7 188.9,118.8 196.4,127.1 203.8,128.4 211.3,118.7 218.7,100.5 226.2,82.4 233.6,79.7 241.1,61.3 248.5,80.5 256.0,76.3 263.4,103.9 270.9,116.5 278.3,109.6 285.7,108.3 293.2,92.0 300.6,98.6 308.1,81.2 315.5,79.6 323.0,60.6 330.4,52.2 337.9,60.8 345.3,56.9 352.8,63.9 360.2,79.6 367.7,91.2 375.1,93.7 382.6,83.2 390.0,85.5"/>
  <circle cx="40.0" cy="143.0" r="2" fill="#9cc9ea"/>
  <circle cx="47.4" cy="118.2" r="2" fill="#9cc9ea"/>
  <circle cx="54.9" cy="122.1" r="2" fill="#9cc9ea"/>
  <circle cx="62.3" cy="106.4" r="2" fill="#9cc9ea"/>
  <circle cx="69.8" cy="121.3" r="2" fill="#9cc9ea"/>
  <circle cx="77.2" cy="112.8" r="2" fill="#9cc9ea"/>
  <circle cx="84.7" cy="129.1" r="2" fill="#9cc9ea"/>
  <circle cx="92.1" cy="127.6" r="2" fill="#9cc9ea"/>
  <circle cx="99.6" cy="138.6" r="2" fill="#9cc9ea"/>
  <circle cx="107.0" cy="146.1" r="2" fill="#9cc9ea"/>
  <circle cx="114.5" cy="144.1" r="2" fill="#9cc9ea"/>
  <circle cx="121.9" cy="128.7" r="2" fill="#9cc9ea"/>
  <circle cx="129.4" cy="119.8" r="2" fill="#9cc9ea"/>
  <circle cx="136.8" cy="113.2" r="2" fill="#9cc9ea"/>
  <circle cx="144.3" cy="92.4" r="2" fill="#9cc9ea"/>
  <circle cx="151.7" cy="110.7" r="2" fill="#9cc9ea"/>
  <circle cx="159.1" cy="94.4" r="2" fill="#9cc9ea"/>
  <circle cx="166.6" cy="84.9" r="2" fill="#9cc9ea"/>
  <circle cx="174.0" cy="106.6" r="2" fill="#9cc9ea"/>
  <circle cx="181.5" cy="130.7" r="2" fill="#9cc9ea"/>
  <circle cx="188.9" cy="118.8" r="2" fill="#9cc9ea"/>
  <circle cx="196.4" cy="127.1" r="2" fill="#9cc9ea"/>
  <circle cx="203.8" cy="128.4" r="2" fill="#9cc9ea"/>
  <circle cx="211.3" cy="118.7" r="2" fill="#9cc9ea"/>
  <circle cx="218.7" cy="100.5" r="2" fill="#9cc9ea"/>
  <circle cx="226.2" cy="82.4" r="2" fill="#9cc9ea"/>
  <circle cx="233.6" cy="79.7" r="2" fill="#9cc9ea"/>
  <circle cx="241.1" cy="61.3" r="2" fill="#9cc9ea"/>
  <circle cx="248.5" cy="80.5" r="2" fill="#9cc9ea"/>
  <circle cx="256.0" cy="76.3" r="2" fill="#9cc9ea"/>
  <circle cx="263.4" cy="103.9" r="2" fill="#9cc9ea"/>
  <circle cx="270.9" cy="116.5" r="2" fill="#9cc9ea"/>
  <circle cx="278.3" cy="109.6" r="2" fill="#9cc9ea"/>
  <circle cx="285.7" cy="108.3" r="2" fill="#9cc9ea"/>
  <circle cx="293.2" cy="92.0" r="2" fill="#9cc9ea"/>
  <circle cx="300.6" cy="98.6" r="2" fill="#9cc9ea"/>
  <circle cx="308.1" cy="81.2" r="2" fill="#9cc9ea"/>
  <circle cx="315.5" cy="79.6" r="2" fill="#9cc9ea"/>
  <circle cx="323.0" cy="60.6" r="2" fill="#9cc9ea"/>
  <circle cx="330.4" cy="52.2" r="2" fill="#9cc9ea"/>
  <circle cx="337.9" cy="60.8" r="2" fill="#9cc9ea"/>
  <circle cx="345.3" cy="56.9" r="2" fill="#9cc9ea"/>
  <circle cx="352.8" cy="63.9" r="2" fill="#9cc9ea"/>
  <circle cx="360.2" cy="79.6" r="2" fill="#9cc9ea"/>
  <circle cx="367.7" cy="91.2" r="2" fill="#9cc9ea"/>
  <circle cx="375.1" cy="93.7" r="2" fill="#9cc9ea"/>
  <circle cx="382.6" cy="83.2" r="2" fill="#9cc9ea"/>
  <circle cx="390.0" cy="85.5" r="2" fill="#9cc9ea"/>
  <polyline fill="none" stroke="#eea66f" stroke-width="3" points="84.7,127.2 92.1,126.0 99.6,124.6 107.0,123.5 114.5,122.6 121.9,120.3 129.4,118.2 136.8,117.4 144.3,116.7 151.7,115.1 159.1,113.6 166.6,112.5 174.0,111.3 181.5,109.2 188.9,107.4 196.4,104.8 203.8,102.2 211.3,101.3 218.7,100.8 226.2,100.1 233.6,99.1 241.1,98.0 248.5,95.7 256.0,93.3 263.4,91.7 270.9,90.7 278.3,89.8 285.7,88.7 293.2,87.5 300.6,85.8 308.1,83.3 315.5,80.1 323.0,77.8 330.4,76.5 337.9,75.5 345.3,74.6"/>
  <line x1="35" y1="175" x2="395" y2="175" stroke="currentColor" stroke-width="1.5"/>
  <line x1="35" y1="25" x2="35" y2="175" stroke="currentColor" stroke-width="1.5"/>
  <text x="30" y="179.0" text-anchor="end" font-size="11" fill="currentColor">80</text>
  <text x="30" y="104.0" text-anchor="end" font-size="11" fill="currentColor">120</text>
  <text x="30" y="29.0" text-anchor="end" font-size="11" fill="currentColor">160</text>
  <line x1="250" y1="22" x2="270" y2="22" stroke="#9cc9ea" stroke-width="2"/><text x="275" y="26" font-size="11" fill="currentColor">monthly values</text>
  <line x1="250" y1="40" x2="270" y2="40" stroke="#eea66f" stroke-width="3"/><text x="275" y="44" font-size="11" fill="currentColor">2×12 moving average</text>
  <text x="40.0" y="190" text-anchor="middle" font-size="11" fill="currentColor">0</text>
  <text x="129.4" y="190" text-anchor="middle" font-size="11" fill="currentColor">12</text>
  <text x="218.7" y="190" text-anchor="middle" font-size="11" fill="currentColor">24</text>
  <text x="308.1" y="190" text-anchor="middle" font-size="11" fill="currentColor">36</text>
  <text x="390.0" y="190" text-anchor="middle" font-size="11" fill="currentColor">47</text>
  <text x="215" y="207" text-anchor="middle" font-size="11" fill="currentColor">month</text>
</svg>
</div>

Three things are visible at once. The values drift upwards over the years: a **trend**. They rise and fall in the same
pattern every twelve months: a **seasonal component**. And around that regular shape they jitter unpredictably:
**noise**, or the **irregular component**. (The made-up series was built exactly that way: a trend rising 0.8 per
month, a sine wave of height 12 with period 12, and normal noise with standard deviation 4.)

### The decomposition

A **time series** is a sequence of observations $x_1, x_2, \dots, x_n$ indexed by time, usually at equal spacing. The
classical **additive decomposition** writes

$$
x_t = T_t + S_t + E_t ,
$$

with a slowly varying trend $T_t$, a seasonal component $S_t$ that repeats with period $s$ ($S_{t+s} = S_t$, and by
convention $S_1 + \dots + S_s = 0$ so that the season does not secretly carry part of the level), and an irregular
component $E_t$. When the seasonal swings grow in proportion to the level, as they often do for sales or populations,
the **multiplicative decomposition** $x_t = T_t \times S_t \times E_t$ fits better; taking logarithms turns it into the
additive one.

The decomposition is a description, not a law of nature. "Trend" and "season" are names for the parts that change
slowly and the parts that repeat, and different methods split the same series differently. Still, it is the first thing
to do with any series, because each component answers a different question: is it growing, when in the year is it
high, and how unpredictable is it?

### A real example in general terms

The best-known real example is the record of carbon dioxide in the air measured at Mauna Loa Observatory in Hawaii,
begun by Charles David Keeling in 1958 and often called the Keeling curve. It shows a steady upward trend, from burning
fossil fuels, and a seasonal cycle of a few parts per million each year: concentrations fall during the northern
growing season, when plants take up carbon dioxide, and rise again in autumn and winter. Trend and season have
completely different causes, and the decomposition separates them.

### Why independence fails

In every earlier chapter the observations were independent. In a time series, neighbouring values are related: a month
above trend tends to be followed by another above trend. This changes everything that depended on independence. The
standard error $s/\sqrt n$ of a mean, for example, is wrong for correlated data, usually too small, because $n$
correlated observations carry less information than $n$ independent ones. Measuring that dependence is the job of the
next section.

## 16.2 Autocorrelation

### Covariance with yourself

**Definition.** For a series $X_t$ whose mean $\mu$ and variance do not change with time, the **autocovariance at lag
$h$** is

$$
\gamma(h) = \operatorname{Cov}(X_t, X_{t+h}) = E[(X_t - \mu)(X_{t+h} - \mu)],
$$

and the **autocorrelation at lag $h$** is $\rho(h) = \gamma(h)/\gamma(0)$, the ordinary correlation between the series
and itself shifted by $h$ steps. Always $\rho(0) = 1$, $\rho(-h) = \rho(h)$ and $|\rho(h)| \le 1$ (it is a correlation,
[Chapter 4](04-Relationships-and-Correlation.md)). The function $h \mapsto \rho(h)$ is the **autocorrelation function**
(ACF).

**Estimates.** From data $x_1, \dots, x_n$ with mean $\bar x$,

$$
\hat\gamma(h) = \frac1n\sum_{t=1}^{n-h}(x_t - \bar x)(x_{t+h} - \bar x), \qquad r_h = \hat\rho(h) = \frac{\hat\gamma(h)}{\hat\gamma(0)} .
$$

The divisor is $n$, not $n - h$, on purpose: with $n$ the estimated autocovariances always form a valid covariance
structure (the matrix they make is positive semi-definite), and the estimates are less noisy at long lags.

**Worked example (made-up data).** Ten daily counts: $3, 5, 4, 6, 5, 3, 2, 4, 5, 3$. The mean is 4, and the deviations
are $-1, 1, 0, 2, 1, -1, -2, 0, 1, -1$.

- $\hat\gamma(0) = (1 + 1 + 0 + 4 + 1 + 1 + 4 + 0 + 1 + 1)/10 = 14/10 = 1.4$.
- Lag 1 products of neighbours: $(-1)(1) + (1)(0) + (0)(2) + (2)(1) + (1)(-1) + (-1)(-2) + (-2)(0) + (0)(1) + (1)(-1) = 1$,
  so $\hat\gamma(1) = 0.1$ and $r_1 = 0.1/1.4 = 0.071$.
- Lag 2: $(-1)(0) + (1)(2) + (0)(1) + (2)(-1) + (1)(-2) + (-1)(0) + (-2)(1) + (0)(-1) = -4$, so $\hat\gamma(2) = -0.4$ and
  $r_2 = -0.286$.

### Is a sample autocorrelation real?

If the series is **white noise** (independent, identically distributed values with finite variance), then for each fixed
$h \ge 1$, $r_h$ is approximately normal with mean 0 and variance $1/n$ for large $n$ (a result due to Bartlett, 1946).
So values outside $\pm 1.96/\sqrt n$ are unusual at a single lag. For the ten counts the bands are $\pm 0.62$, and
neither $r_1$ nor $r_2$ is outside them: no evidence of memory, which with ten points is not surprising.

Two cautions. With 20 lags plotted, about one will cross the 5% bands by chance; a joint test such as the Ljung-Box
statistic $n(n+2)\sum_{h=1}^{H} r_h^2/(n-h)$, compared with a chi-square with $H$ degrees of freedom (Ljung and Box,
1978), is better than staring at single bars. And the bands assume white noise; they are not the right yardstick for
lags beyond the first in a series that does have memory.

### What the ACF shows

- **Trend.** A trending series has $r_h$ close to 1 for many lags, decaying very slowly, because values far apart are
  both above or both below the overall mean. The ACF of a trending series says "trend", and little else.
- **Season.** A seasonal monthly series has peaks in its ACF at lags 12, 24, ..., and troughs at 6, 18, ....
- **Short memory.** A stationary series with short memory (16.4) has an ACF that dies away quickly.

### Nonsense correlations

In 1926 George Udny Yule published "Why do we sometimes get nonsense-correlations between time-series?" (*Journal of the
Royal Statistical Society*). His point, still ignored daily: two series that both trend, or that both wander like
random walks, will often show large correlations with each other even when they are completely unrelated, and the usual
significance test, which assumes independent observations, will declare the correlation significant far more often than
5% of the time. A correlation between two time series means little until the trends and the autocorrelation have been
dealt with, for example by correlating the changes $x_t - x_{t-1}$ instead of the levels.

## 16.3 Moving averages and smoothing

### Centred moving averages

To see the trend, average away the season and the noise. A **centred moving average of order $2k+1$** replaces each value
by the mean of itself and its $k$ neighbours on each side:

$$
\hat T_t = \frac{1}{2k+1}\sum_{j=-k}^{k} x_{t+j} .
$$

For monthly data the natural window is 12 months, which is even, so there is no middle month. The standard fix is the
**2×12 moving average**: average two consecutive 12-month averages, which is the same as giving weight $1/24$ to the two
end months and $1/12$ to the eleven in between:

$$
\hat T_t = \frac{1}{12}\left(\tfrac12 x_{t-6} + x_{t-5} + \dots + x_{t+5} + \tfrac12 x_{t+6}\right) .
$$

The weights add up to $\frac{1}{12}(\frac12 + 11 + \frac12) = 1$, and the
window covers each calendar month with total weight exactly $1/12$ (the month at both ends shares its weight). So a fixed
seasonal pattern $S_t$ with period 12 and sum zero is averaged to exactly zero, and a linear trend passes through
unchanged (the weights are symmetric). That is why the orange line in the picture in 16.1 is smooth and rises at about
0.8 per month. Its price: it is undefined for the first and last six months, exactly where people most want to know the
trend.

**Seasonal adjustment.** Subtracting the trend estimate leaves $S_t + E_t$; averaging these over all Januaries, all
Februaries, and so on (then shifting so that the twelve add to zero) estimates the seasonal component. The series minus
its seasonal component is the **seasonally adjusted** series that official statistics publish. Agencies use refined
versions of this idea (the X-13ARIMA-SEATS program of the US Census Bureau, for example), but the logic is the one above.

### Exponential smoothing

A moving average needs future values. For forecasting we need a smoother that uses only the past. **Simple exponential
smoothing** keeps a running level

$$
\ell_t = \alpha x_t + (1 - \alpha)\ell_{t-1}, \qquad 0 < \alpha \le 1,
$$

and forecasts every future value by the current level. Unrolling the recursion,

$$
\ell_t = \alpha x_t + \alpha(1-\alpha)x_{t-1} + \alpha(1-\alpha)^2 x_{t-2} + \dots + (1-\alpha)^t \ell_0 ,
$$

a weighted average of the past with weights that shrink geometrically (hence "exponential"). The weights add to 1:
$\alpha\sum_{j=0}^{t-1}(1-\alpha)^j + (1-\alpha)^t = \alpha \cdot \frac{1 - (1-\alpha)^t}{\alpha} + (1-\alpha)^t = 1$,
by the geometric series. A large $\alpha$ follows the data closely; a small one smooths heavily.

**Worked example (made-up data).** Weekly orders $12, 15, 11, 14, 16, 13$, with $\alpha = 0.3$ and $\ell_1 = 12$:

$$
\begin{aligned}
\ell_2 &= 0.3 \times 15 + 0.7 \times 12 = 12.9, \\
\ell_3 &= 0.3 \times 11 + 0.7 \times 12.9 = 12.33, \\
\ell_4 &= 0.3 \times 14 + 0.7 \times 12.33 = 12.831, \\
\ell_5 &= 0.3 \times 16 + 0.7 \times 12.831 = 13.782, \\
\ell_6 &= 0.3 \times 13 + 0.7 \times 13.782 = 13.547 .
\end{aligned}
$$

The forecast for week 7 (and, with this simple method, every later week) is about 13.5 orders.

Robert G. Brown developed exponential smoothing for inventory control in the 1950s; Charles Holt (1957) added a
smoothed trend, and Peter Winters (1960) a smoothed seasonal component. The Holt-Winters method is still a strong
baseline. These methods were later shown to be the optimal forecasts for certain statistical models (state space
models), which gave them error bars; see Hyndman and Athanasopoulos in the further reading.

### Smoothing can invent cycles

In the 1920s Eugen Slutsky, working in Moscow, showed (his paper appeared in English in *Econometrica* in 1937 as "The
summation of random causes as the source of cyclic processes") that taking moving sums or averages of pure noise
produces series with smooth, wave-like swings that look like business cycles. The reason is the ACF: averaging $k$
neighbours makes values $k$ apart share terms, so they become correlated, and correlated noise drifts in waves. The
lesson is a warning. A smoothed series with regular-looking cycles is not evidence of a cycle in the world; the
smoother may have made them.

## 16.4 AR(1) and stationarity

*Level: advanced.*

### Stationarity

To use one series to learn about its own future, we need something that does not change over time. The standard
assumption is:

**Definition.** A series $X_t$ (with finite variances) is **weakly stationary** if $E[X_t] = \mu$ is the same for all
$t$, and $\operatorname{Cov}(X_t, X_{t+h}) = \gamma(h)$ depends only on the lag $h$, not on $t$.

A series with a trend is not stationary (its mean changes); a series with a season is not stationary (its mean depends
on the month). The decomposition of 16.1 and differencing ($x_t - x_{t-1}$ removes a linear trend; $x_t - x_{t-12}$
removes a fixed monthly season) are ways to get from a raw series to something stationary.

**White noise** is the simplest stationary series: $\varepsilon_t$ with mean 0, variance $\sigma^2$, and
$\operatorname{Cov}(\varepsilon_s, \varepsilon_t) = 0$ for $s \ne t$. It has no memory at all: $\rho(h) = 0$ for $h \ne 0$.

### The AR(1) model

The simplest model with memory says that each value is a fraction of the previous one plus a new shock:

$$
X_t = \phi X_{t-1} + \varepsilon_t ,
$$

where $\varepsilon_t$ is white noise and $\varepsilon_t$ is uncorrelated with all earlier $X_s$ ($s < t$). This is the
**autoregressive model of order 1**, AR(1): the series is regressed on itself. (A non-zero mean is added by writing
$X_t - \mu = \phi(X_{t-1} - \mu) + \varepsilon_t$.) The constant $\phi$ measures memory: $\phi = 0$ is white noise,
$\phi$ near 1 is a series with long swings, $\phi$ negative makes it zigzag.

Here are three series built from the same 150 shocks $\varepsilon_t$: white noise ($\phi = 0$), an AR(1) with
$\phi = 0.9$, and a random walk ($\phi = 1$):

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="Three series built from the same 150 random shocks: white noise stays in a narrow band around zero, the AR(1) series with phi 0.9 wanders in longer swings but keeps returning to zero, and the random walk drifts far away to above 20">
  <line x1="35" y1="145.0" x2="395" y2="145.0" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <polyline fill="none" stroke="#9cc9ea" stroke-width="1.5" points="40.0,144.8 42.3,142.7 44.7,147.3 47.0,143.2 49.4,140.4 51.7,142.9 54.1,137.2 56.4,149.4 58.8,144.7 61.1,148.5 63.5,148.9 65.8,145.9 68.2,143.9 70.5,142.9 72.9,142.5 75.2,133.8 77.6,140.7 79.9,153.0 82.3,144.0 84.6,148.1 87.0,147.6 89.3,138.5 91.7,146.1 94.0,154.8 96.4,143.4 98.7,146.5 101.1,150.9 103.4,149.6 105.8,148.1 108.1,145.1 110.5,147.1 112.8,144.6 115.2,135.8 117.5,149.0 119.9,149.0 122.2,146.2 124.6,139.5 126.9,148.5 129.3,137.8 131.6,151.5 134.0,150.2 136.3,145.3 138.7,149.3 141.0,148.1 143.4,142.7 145.7,141.4 148.1,144.4 150.4,146.4 152.8,138.3 155.1,143.0 157.4,146.2 159.8,138.9 162.1,149.5 164.5,144.2 166.8,141.7 169.2,145.1 171.5,147.9 173.9,143.2 176.2,147.7 178.6,148.0 180.9,150.1 183.3,138.5 185.6,147.7 188.0,139.2 190.3,143.1 192.7,146.3 195.0,141.7 197.4,143.6 199.7,144.3 202.1,151.9 204.4,144.6 206.8,140.5 209.1,142.6 211.5,140.0 213.8,137.5 216.2,142.9 218.5,135.1 220.9,152.6 223.2,146.2 225.6,157.6 227.9,140.9 230.3,144.5 232.6,136.6 235.0,146.8 237.3,155.1 239.7,138.6 242.0,151.7 244.4,151.3 246.7,145.9 249.1,141.9 251.4,147.5 253.8,144.1 256.1,154.4 258.5,136.3 260.8,145.3 263.2,144.4 265.5,142.1 267.9,144.2 270.2,144.0 272.6,149.6 274.9,145.6 277.2,142.8 279.6,139.8 281.9,145.6 284.3,144.5 286.6,143.3 289.0,142.1 291.3,144.0 293.7,146.3 296.0,147.6 298.4,139.4 300.7,143.5 303.1,144.9 305.4,127.6 307.8,140.6 310.1,140.7 312.5,144.2 314.8,150.1 317.2,139.3 319.5,145.4 321.9,144.7 324.2,139.9 326.6,139.9 328.9,143.8 331.3,144.9 333.6,134.5 336.0,142.1 338.3,150.1 340.7,141.2 343.0,144.2 345.4,144.8 347.7,141.6 350.1,143.8 352.4,135.0 354.8,144.0 357.1,143.7 359.5,139.2 361.8,147.8 364.2,139.9 366.5,145.3 368.9,139.1 371.2,149.2 373.6,142.9 375.9,153.0 378.3,147.2 380.6,144.9 383.0,142.5 385.3,135.1 387.7,135.8 390.0,151.7"/>
  <polyline fill="none" stroke="#7ccf9a" stroke-width="2" points="40.0,144.8 42.3,142.5 44.7,145.0 47.0,143.3 49.4,138.8 51.7,137.4 54.1,130.3 56.4,136.2 58.8,136.8 61.1,141.1 63.5,145.4 65.8,146.3 68.2,145.1 70.5,143.0 72.9,140.6 75.2,129.9 77.6,127.1 79.9,136.9 82.3,136.6 84.6,140.6 87.0,143.6 89.3,137.2 91.7,139.1 94.0,149.5 96.4,147.5 98.7,148.7 101.1,154.2 103.4,157.9 105.8,159.7 108.1,158.4 110.5,159.2 112.8,157.4 115.2,147.0 117.5,150.8 119.9,154.2 122.2,154.5 124.6,148.1 126.9,151.3 129.3,143.5 131.6,150.2 134.0,154.9 136.3,154.1 138.7,157.5 141.0,159.4 143.4,155.7 145.7,151.0 148.1,149.8 150.4,150.7 152.8,143.4 155.1,141.6 157.4,143.1 159.8,137.2 162.1,142.5 164.5,141.9 166.8,138.9 169.2,139.6 171.5,143.0 173.9,141.5 176.2,144.5 178.6,147.5 180.9,152.4 183.3,145.1 185.6,147.9 188.0,141.8 190.3,140.2 192.7,142.0 195.0,139.0 197.4,138.2 199.7,138.2 202.1,145.8 204.4,145.4 206.8,140.9 209.1,138.8 211.5,134.5 213.8,128.1 216.2,127.7 218.5,119.6 220.9,129.7 223.2,132.4 225.6,146.3 227.9,142.1 230.3,141.9 232.6,133.8 235.0,136.7 237.3,147.7 239.7,141.0 242.0,148.1 244.4,154.1 246.7,154.1 249.1,150.1 251.4,152.1 253.8,150.5 256.1,159.3 258.5,149.2 260.8,149.1 263.2,148.1 265.5,144.9 267.9,144.1 270.2,143.1 272.6,148.0 274.9,148.2 277.2,145.7 279.6,140.4 281.9,141.5 284.3,141.4 286.6,140.1 289.0,137.7 291.3,137.4 293.7,139.4 296.0,142.5 298.4,137.2 300.7,136.5 303.1,137.2 305.4,120.6 307.8,118.6 310.1,117.0 312.5,119.0 314.8,126.7 317.2,122.9 319.5,125.5 321.9,127.2 324.2,123.8 326.6,120.9 328.9,122.1 331.3,124.3 333.6,115.9 336.0,115.9 338.3,124.0 340.7,122.3 343.0,123.8 345.4,125.8 347.7,124.3 350.1,125.2 352.4,117.1 354.8,118.9 357.1,120.3 359.5,116.9 361.8,122.5 364.2,119.7 366.5,122.6 368.9,118.9 371.2,125.7 373.6,125.6 375.9,135.5 378.3,138.7 380.6,139.2 383.0,137.3 385.3,128.2 387.7,120.7 390.0,129.8"/>
  <polyline fill="none" stroke="#eea66f" stroke-width="2" points="40.0,144.8 42.3,142.5 44.7,144.8 47.0,143.0 49.4,138.4 51.7,136.3 54.1,128.5 56.4,132.9 58.8,132.6 61.1,136.1 63.5,140.0 65.8,141.0 68.2,139.9 70.5,137.8 72.9,135.2 75.2,124.1 77.6,119.7 79.9,127.7 82.3,126.7 84.6,129.8 87.0,132.4 89.3,125.9 91.7,127.0 94.0,136.7 96.4,135.2 98.7,136.6 101.1,142.5 103.4,147.1 105.8,150.2 108.1,150.4 110.5,152.5 112.8,152.1 115.2,142.9 117.5,146.9 119.9,151.0 122.2,152.2 124.6,146.8 126.9,150.3 129.3,143.1 131.6,149.7 134.0,154.8 136.3,155.1 138.7,159.4 141.0,162.5 143.4,160.2 145.7,156.6 148.1,156.1 150.4,157.4 152.8,150.7 155.1,148.7 157.4,149.9 159.8,143.8 162.1,148.3 164.5,147.5 166.8,144.2 169.2,144.2 171.5,147.1 173.9,145.4 176.2,148.1 178.6,151.0 180.9,156.2 183.3,149.6 185.6,152.4 188.0,146.6 190.3,144.7 192.7,146.0 195.0,142.7 197.4,141.3 199.7,140.6 202.1,147.5 204.4,147.2 206.8,142.7 209.1,140.3 211.5,135.3 213.8,127.8 216.2,125.8 218.5,115.9 220.9,123.5 223.2,124.7 225.6,137.3 227.9,133.2 230.3,132.7 232.6,124.3 235.0,126.1 237.3,136.2 239.7,129.9 242.0,136.6 244.4,142.9 246.7,143.8 249.1,140.6 251.4,143.2 253.8,142.3 256.1,151.7 258.5,143.0 260.8,143.3 263.2,142.7 265.5,139.8 267.9,139.0 270.2,138.0 272.6,142.6 274.9,143.2 277.2,141.0 279.6,135.8 281.9,136.4 284.3,135.9 286.6,134.2 289.0,131.4 291.3,130.3 293.7,131.6 296.0,134.1 298.4,128.5 300.7,127.1 303.1,127.0 305.4,109.6 307.8,105.2 310.1,100.9 312.5,100.1 314.8,105.2 317.2,99.5 319.5,100.0 321.9,99.7 324.2,94.6 326.6,89.5 328.9,88.3 331.3,88.2 333.6,77.7 336.0,74.8 338.3,79.9 340.7,76.2 343.0,75.4 345.4,75.3 347.7,71.9 350.1,70.7 352.4,60.7 354.8,59.6 357.1,58.4 359.5,52.6 361.8,55.4 364.2,50.3 366.5,50.6 368.9,44.7 371.2,49.0 373.6,46.9 375.9,54.8 378.3,57.1 380.6,57.0 383.0,54.5 385.3,44.6 387.7,35.4 390.0,42.1"/>
  <line x1="35" y1="175" x2="395" y2="175" stroke="currentColor" stroke-width="1.5"/>
  <line x1="35" y1="25" x2="35" y2="175" stroke="currentColor" stroke-width="1.5"/>
  <text x="30" y="149.0" text-anchor="end" font-size="11" fill="currentColor">0</text>
  <text x="30" y="99.0" text-anchor="end" font-size="11" fill="currentColor">10</text>
  <text x="30" y="49.0" text-anchor="end" font-size="11" fill="currentColor">20</text>
  <text x="40.0" y="190" text-anchor="middle" font-size="11" fill="currentColor">0</text>
  <text x="157.4" y="190" text-anchor="middle" font-size="11" fill="currentColor">50</text>
  <text x="274.9" y="190" text-anchor="middle" font-size="11" fill="currentColor">100</text>
  <text x="390.0" y="190" text-anchor="middle" font-size="11" fill="currentColor">149</text>
  <text x="215" y="207" text-anchor="middle" font-size="11" fill="currentColor">time step</text>
  <line x1="50" y1="22" x2="70" y2="22" stroke="#9cc9ea" stroke-width="1.5"/><text x="75" y="26" font-size="11" fill="currentColor">white noise</text>
  <line x1="50" y1="40" x2="70" y2="40" stroke="#7ccf9a" stroke-width="2"/><text x="75" y="44" font-size="11" fill="currentColor">AR(1), φ = 0.9</text>
  <line x1="50" y1="58" x2="70" y2="58" stroke="#eea66f" stroke-width="2"/><text x="75" y="62" font-size="11" fill="currentColor">random walk, φ = 1</text>
</svg>
</div>

The AR(1) series wanders in long swings but keeps coming back to 0; the random walk drifts away and does not come back.
The next theorem explains the difference.

### The variance and correlation formulas

**Theorem.** Let $\varepsilon_t$ be white noise with variance $\sigma^2$ and $|\phi| < 1$.

1. The series $X_t = \sum_{j=0}^{\infty}\phi^j \varepsilon_{t-j}$ is well defined, satisfies $X_t = \phi X_{t-1} + \varepsilon_t$, and is weakly stationary with mean 0.
2. Its variance is $\gamma(0) = \dfrac{\sigma^2}{1 - \phi^2}$.
3. Its autocorrelations are $\rho(h) = \phi^{|h|}$.
4. Conversely, any weakly stationary solution of the AR(1) equation has variance $\sigma^2/(1-\phi^2)$; and when $|\phi| \ge 1$ no weakly stationary solution with $\varepsilon_t$ uncorrelated with the past exists.

*Proof.* **Part 1 and 2.** Consider the partial sums $Y_N = \sum_{j=0}^{N}\phi^j \varepsilon_{t-j}$. The terms are
uncorrelated, so for $M < N$,

$$
E\big[(Y_N - Y_M)^2\big] = \sum_{j=M+1}^{N}\phi^{2j}\sigma^2 \le \sigma^2 \frac{\phi^{2(M+1)}}{1-\phi^2} \to 0 ,
$$

by the geometric series with ratio $\phi^2 < 1$. So the partial sums form a Cauchy sequence in mean square and converge
to a limit $X_t$ (this uses the completeness of the space of random variables with finite variance; for this book it is
enough to know that the limit exists, with the mean and variance that the formulas below give). Its mean is 0, and

$$
\operatorname{Var}(X_t) = \sum_{j=0}^{\infty}\phi^{2j}\sigma^2 = \frac{\sigma^2}{1-\phi^2} .
$$

Splitting off the $j = 0$ term, $X_t = \varepsilon_t + \phi\sum_{j=0}^{\infty}\phi^j\varepsilon_{t-1-j} = \varepsilon_t + \phi X_{t-1}$, so it solves the
equation; and $X_{t-1}$ is built from shocks up to time $t-1$, which are uncorrelated with $\varepsilon_t$.

**Part 3.** For $h \ge 1$, the equation gives $X_{t+h} = \phi X_{t+h-1} + \varepsilon_{t+h}$, and $\varepsilon_{t+h}$ is
uncorrelated with $X_t$ (which uses only shocks up to time $t$). Taking covariance with $X_t$:

$$
\gamma(h) = \operatorname{Cov}(X_{t+h}, X_t) = \phi\,\operatorname{Cov}(X_{t+h-1}, X_t) + 0 = \phi\,\gamma(h-1) .
$$

Repeating, $\gamma(h) = \phi^h\gamma(0)$, so $\rho(h) = \phi^h$; by symmetry $\rho(-h) = \rho(h)$. These depend only
on $h$, which completes the proof of stationarity.

**Part 4.** Suppose $X_t$ is weakly stationary and solves the equation, with $\varepsilon_t$ uncorrelated with
$X_{t-1}$. Take variances of both sides of $X_t = \phi X_{t-1} + \varepsilon_t$; the cross term vanishes, so

$$
\gamma(0) = \phi^2\gamma(0) + \sigma^2, \qquad\text{so}\qquad \gamma(0)(1 - \phi^2) = \sigma^2 .
$$

If $|\phi| < 1$ this gives $\gamma(0) = \sigma^2/(1-\phi^2)$. If $|\phi| \ge 1$ the left side is $\le 0$ while
$\sigma^2 > 0$, a contradiction, so no such stationary solution exists. $\blacksquare$

Two things are worth noticing in the formula $\sigma^2/(1-\phi^2)$. Memory inflates variance: with $\phi = 0.9$ the
series has $1/(1 - 0.81) = 5.26$ times the variance of its shocks, because shocks pile up before they fade. And as
$\phi \to 1$ the variance blows up: the stationary picture breaks down.

### The random walk: $\phi = 1$

With $\phi = 1$ and starting value $X_0 = 0$, $X_t = \varepsilon_1 + \dots + \varepsilon_t$, so
$\operatorname{Var}(X_t) = t\sigma^2$, growing without bound: the random walk of
[Probability, Chapter 15](../probability/15-Random-Walks-and-Martingales.md). It is not stationary, but its differences
$X_t - X_{t-1} = \varepsilon_t$ are. Such a series is called **integrated** or said to have a **unit root**. Many
economic and financial series behave like this, which is why analysts difference them first.

**Starting from a fixed value.** If an AR(1) with $|\phi| < 1$ starts at $X_0 = 0$ instead of in its stationary state,
then $X_t = \sum_{j=0}^{t-1}\phi^j\varepsilon_{t-j}$ and $\operatorname{Var}(X_t) = \sigma^2(1 - \phi^{2t})/(1 - \phi^2)$,
which rises towards $\sigma^2/(1-\phi^2)$ geometrically fast. That is why simulations throw away a start-up stretch.

### Estimating $\phi$

Because $\rho(1) = \phi$, a natural estimate is the lag-1 sample autocorrelation $r_1$ (the **Yule-Walker** estimate).
Regressing $x_t$ on $x_{t-1}$ by least squares gives almost the same number. For a stationary AR(1), $\hat\phi$ is
approximately normal with mean $\phi$ and variance $(1-\phi^2)/n$ for large $n$ (stated here without proof; see Brockwell
and Davis, chapter 8).

### Try it in Python

```python
import random, statistics

random.seed(1)
phi, n = 0.7, 500
x = [0.0]
for t in range(1, n + 200):
    x.append(phi * x[-1] + random.gauss(0, 1))
x = x[200:]                                   # drop the start-up stretch

m = statistics.mean(x)
c0 = sum((v - m) ** 2 for v in x) / n
c1 = sum((x[t] - m) * (x[t - 1] - m) for t in range(1, n)) / n
print(round(c0, 2), round(1 / (1 - phi ** 2), 2))   # sample variance vs theory
print(round(c1 / c0, 3))                            # estimate of phi
```

It prints a sample variance of 2.11 against the theoretical 1.96, and $\hat\phi = 0.732$ against the true 0.7, within
about one standard error ($\sqrt{(1 - 0.49)/500} = 0.032$).

**Testing for a unit root** is harder than it looks: when $\phi = 1$, $\hat\phi$ is not approximately normal, and the
usual $t$ statistic for $\phi = 1$ has a different distribution, tabulated by David Dickey and Wayne Fuller (1979). Using
ordinary $t$ tables there is a classic error.

### Beyond AR(1)

The AR($p$) model $X_t = \phi_1 X_{t-1} + \dots + \phi_p X_{t-p} + \varepsilon_t$ allows longer memory and cycles; Yule
used an AR(2) in 1927 to model sunspot numbers, finding a quasi-period of roughly a decade, and Gilbert Walker extended the
method in 1931. Adding moving-average terms in past shocks gives ARMA models, and differencing first gives ARIMA; George
Box and Gwilym Jenkins (1970) turned these into a complete method of identification, estimation and checking.

## 16.5 Forecasting honestly

*Level: advanced.*

### The best forecast for an AR(1)

Suppose $X_t - \mu = \phi(X_{t-1} - \mu) + \varepsilon_t$ with the $\varepsilon_t$ independent $N(0, \sigma^2)$ and $\phi$,
$\mu$, $\sigma$ known. Having seen the series up to time $n$, what should we predict for time $n + h$?

Apply the equation $h$ times:

$$
X_{n+h} - \mu = \phi^h(X_n - \mu) + \sum_{j=0}^{h-1}\phi^j\varepsilon_{n+h-j} .
$$

The first term is known at time $n$; the sum involves only future shocks, which have mean 0 and are independent of
everything up to time $n$. The forecast that minimises the expected squared error is the conditional mean given the
past (the fact from [Chapter 3](03-Summaries.md) that the mean minimises squared error, applied to the conditional
distribution), so

$$
\hat X_{n+h} = \mu + \phi^h(X_n - \mu) .
$$

The forecast decays geometrically from the last value back to the long-run mean. And the forecast error is the sum of
future shocks, with variance

$$
\operatorname{Var}\big(X_{n+h} - \hat X_{n+h}\big) = \sigma^2\sum_{j=0}^{h-1}\phi^{2j} = \sigma^2\,\frac{1 - \phi^{2h}}{1 - \phi^2} .
$$

At $h = 1$ this is $\sigma^2$ (only one new shock); as $h \to \infty$ it rises to $\sigma^2/(1-\phi^2)$, the variance
of the series itself. Far enough ahead, knowing today's value is useless, and the best forecast is the mean with the
series' full spread around it.

**Worked example.** An AR(1) with $\mu = 20$, $\phi = 0.6$, $\sigma = 2$, and last value $x_n = 26$:

| steps ahead $h$ | forecast $20 + 0.6^h \times 6$ | error s.d. $2\sqrt{(1 - 0.36^h)/0.64}$ | 95% interval |
|---|---|---|---|
| 1 | 23.60 | 2.00 | 19.7 to 27.5 |
| 2 | 22.16 | 2.33 | 17.6 to 26.7 |
| 3 | 21.30 | 2.44 | 16.5 to 26.1 |
| 5 | 20.47 | 2.49 | 15.6 to 25.4 |

The limit of the error standard deviation is $2/\sqrt{0.64} = 2.5$. **Check:** at $h = 2$, $0.6^2 \times 6 = 2.16$ and
$2\sqrt{1 + 0.36} = 2.332$.

### Why real forecast intervals are too narrow

The intervals above assume we know $\phi$, $\mu$ and $\sigma$, and that the model is right. In practice:

- **Parameter uncertainty.** Estimated parameters add error, roughly of order $1/n$ relative to the shock variance for
  stationary models; more for long horizons and near unit roots.
- **Model uncertainty.** The chosen model is one of many that fit the past about equally well, and they disagree about
  the future. Intervals computed from one model ignore this, and are the main reason published intervals cover less
  often than they claim.
- **Change.** The future may not resemble the past at all: a new policy, a pandemic, a broken sensor. No model fitted
  to the past can see a change that has not happened yet.

### Testing forecasts honestly

The only honest test of a forecasting method is how well it forecast data it had not seen.

- **Hold out the end.** Fit to the first part of the series, forecast the rest, and compare. Never choose the model by
  how well it fits the data it was fitted to; that rewards overfitting
  ([Chapter 12](12-Multiple-Regression.md)'s lesson, in time order).
- **Rolling origin.** Repeat: fit to data up to time $t$, forecast $t + 1, \dots, t + h$, move $t$ forward, and average
  the errors. This is cross-validation that respects time; ordinary random-split cross-validation leaks the future into
  the past.
- **Beat a benchmark.** Compare with the **naive forecast** (tomorrow equals today) and the **seasonal naive forecast**
  (this January equals last January). A method that cannot beat them is not worth its complexity. Scaled error measures
  such as the mean absolute scaled error of Hyndman and Koehler (2006) build this comparison in.

The forecasting competitions organised by Spyros Makridakis and colleagues since 1982 put these ideas to large-scale
tests on thousands of real series. Their recurring lessons have been that sophisticated methods do not automatically beat
simple ones, and that combinations of several methods are hard to beat; in the M4 competition (results published in
2020) several pure machine-learning entries did worse than simple statistical benchmarks, while in M5 (retail sales,
2022) tree-based machine-learning methods did best. What works depends on the data, which is exactly why out-of-sample
testing matters.

## 16.6 A Mars example: the seasonal pressure cycle

*Level: intermediate, with an advanced part on harmonic regression.*

### What was measured

When Viking Lander 1 (in Chryse Planitia) and Viking Lander 2 (in Utopia Planitia) set down on Mars in 1976, each carried
a meteorology instrument that recorded air pressure, temperature and wind. Viking Lander 1 kept sending data until
1982, covering several Mars years. The pressure record turned out to be one of the most striking time series in planetary
science (Hess and colleagues, 1980).

Mars' air is mostly carbon dioxide, and at the surface its pressure is less than one percent of Earth's. In the polar
winter it is cold enough for carbon dioxide to freeze out of the atmosphere onto the polar cap as frost and ice. So as
each pole goes into winter, it pulls a large part of the atmosphere down onto the ground, and the pressure everywhere
falls; in spring the ice turns back to gas and the pressure rises. Over a Mars year (687 Earth days, about 669 Mars
days or sols) a substantial fraction of the whole atmosphere, often quoted as roughly a quarter, cycles between the air
and the caps.

The seasonal curve is not a simple sine wave. It has **two minima and two maxima** per Mars year. Mars' orbit is
noticeably eccentric, and southern winter happens near the far point of the orbit, so it is longer and colder than
northern winter. The southern cap therefore takes up more carbon dioxide, and the deepest pressure minimum comes in
southern winter, with a shallower one in northern winter. On top of the seasonal cycle there are **daily oscillations**
driven by the Sun's heating (atmospheric thermal tides), weather systems passing through, and changes during dust
storms, which Viking observed in 1977.

Later missions repeated the measurement: Mars Pathfinder (1997), Phoenix (2008), the Curiosity rover's REMS
instrument (since 2012) and the InSight lander (2018 to 2022), among others. Each site sees the same basic shape, at a
different overall level because pressure falls with height (the atmosphere's scale height, the height over which
pressure falls by a factor $e$, is about 11 km).

### How a time-series analyst approaches it

Everything in this chapter applies. We use no numbers from the missions here, only the methods.

1. **Choose the time variable.** For seasons on Mars the natural clock is not the Earth date but the **solar longitude**
   $L_s$, the angle of Mars around its orbit, from $0°$ (northern spring) to $360°$. Using $L_s$ lines up the seasons of
   different Mars years exactly.
2. **Separate time scales.** Average each sol's readings to remove the daily tide (a moving average over one sol, as in
   16.3), or model the daily cycle separately if it is the object of interest.
3. **Decompose.** Daily-mean pressure = seasonal component + weather and noise. Because different sites have different
   levels, a **multiplicative** description, pressure divided by its annual mean, puts them on a common scale (16.1).
4. **Fit the season** by harmonic regression (below), with at least two harmonics to capture the two minima.
5. **Look at the residuals.** They are not white noise: weather systems make them autocorrelated over days, so the ACF
   (16.2) and models like AR(1) (16.4) are needed before attaching standard errors to anything.
6. **Compare years and missions.** The same season in different Mars years, at the same site, can be compared directly.
   Comparing missions decades apart is a way to ask whether the amount of carbon dioxide stored in the caps is changing.
   It requires correcting for elevation, sensor calibration and the weather of particular years, which is exactly the
   kind of careful, honest time-series work this chapter describes.

### Harmonic regression

*Level: advanced.*

A periodic seasonal component with period one year can be written as a **Fourier series** in the season angle $s$
(for Mars, $s = L_s$ in radians):

$$
S(s) = a_0 + \sum_{k=1}^{K}\big(a_k\cos ks + b_k\sin ks\big) .
$$

The $k = 1$ terms give one rise and fall per year; $k = 2$ adds a second, which is what makes two minima possible. This
is a linear regression ([Chapter 12](12-Multiple-Regression.md)) on the predictors $\cos s, \sin s, \cos 2s, \sin 2s, \dots$,
so least squares applies directly.

When the observations are equally spaced over whole cycles, the least squares solution has a simple form, because the
predictors are **orthogonal**. Take $N$ observations at angles $s_m = 2\pi m/N$, $m = 0, \dots, N-1$. For any whole
number $k$ that is not a multiple of $N$, let $z = e^{2\pi \mathrm{i} k/N}$, where $\mathrm{i} = \sqrt{-1}$; then $z \ne 1$ and

$$
\sum_{m=0}^{N-1} e^{\,\mathrm{i} k s_m} = \sum_{m=0}^{N-1} z^m = \frac{z^N - 1}{z - 1} = 0,
$$

since $z^N = e^{2\pi \mathrm{i} k} = 1$. Taking real and imaginary parts, $\sum_m \cos ks_m = \sum_m \sin ks_m = 0$. Writing
products as sums ($\cos A\cos B = \frac12[\cos(A-B) + \cos(A+B)]$ and similar), it follows that for $1 \le j, k < N/2$ the
columns $\cos js$, $\sin js$, $\cos ks$, $\sin ks$ are orthogonal to each other and to the constant, with
$\sum_m \cos^2 ks_m = \sum_m \sin^2 ks_m = N/2$. The normal equations then separate, one unknown at a time, and give

$$
\hat a_0 = \bar y, \qquad \hat a_k = \frac2N\sum_{m} y_m\cos ks_m, \qquad \hat b_k = \frac2N\sum_m y_m\sin ks_m .
$$

These are the discrete Fourier coefficients of the data.

**Try it in Python (made-up data, not Mars data).** The series below is invented: a seasonal shape with two harmonics,
sampled 24 times per cycle for three cycles, plus noise. The fit recovers the shape.

```python
import math, random

random.seed(3)
N, K = 72, 2                       # 72 equally spaced points over 3 cycles
true = lambda s: 8 - 0.9 * math.cos(s) + 0.5 * math.sin(s) + 0.6 * math.cos(2 * s)
season = [2 * math.pi * (i % 24) / 24 for i in range(N)]
y = [true(s) + random.gauss(0, 0.2) for s in season]

a0 = sum(y) / N
for k in range(1, K + 1):
    a = 2 / N * sum(v * math.cos(k * s) for v, s in zip(y, season))
    b = 2 / N * sum(v * math.sin(k * s) for v, s in zip(y, season))
    print(k, round(a, 2), round(b, 2))
print(round(a0, 2))
```

It prints $\hat a_1 = -0.92$, $\hat b_1 = 0.50$, $\hat a_2 = 0.63$, $\hat b_2 = -0.02$ and $\hat a_0 = 7.95$, close to the
true $-0.9$, $0.5$, $0.6$, $0$ and $8$. With real data the samples are not perfectly equally spaced and some sols are
missing, so one solves the normal equations in general, but the idea is the same. And the residuals must be checked for
autocorrelation before trusting any standard error that the regression prints.

## Check yourself

??? question "1. For the ten counts $3, 5, 4, 6, 5, 3, 2, 4, 5, 3$, verify $r_1 = 0.071$ and $r_2 = -0.286$, and say whether either is significant at 5%."

    Deviations from the mean 4: $-1, 1, 0, 2, 1, -1, -2, 0, 1, -1$; sum of squares 14, so $\hat\gamma(0) = 1.4$.
    Lag-1 products sum to 1 ($\hat\gamma(1) = 0.1$, $r_1 = 0.071$); lag-2 products sum to $-4$ ($\hat\gamma(2) = -0.4$,
    $r_2 = -0.286$). The white-noise bands are $\pm 1.96/\sqrt{10} = \pm 0.62$; neither is outside them.

??? question "2. An AR(1) has $\phi = 0.8$ and shock variance 1. Find its variance and its autocorrelation at lag 3."

    $\gamma(0) = 1/(1 - 0.64) = 2.78$. $\rho(3) = 0.8^3 = 0.512$.

??? question "3. Describe the ACF of an AR(1) with $\phi = -0.5$, and the look of the series."

    $\rho(h) = (-0.5)^h$: $-0.5, 0.25, -0.125, \dots$, alternating in sign and halving. The series tends to jump from
    above its mean to below it and back: a zigzag.

??? question "4. For a random walk $X_t = \varepsilon_1 + \dots + \varepsilon_t$ with shock variance $\sigma^2$, find $\operatorname{Cov}(X_s, X_t)$ for $s \le t$ and the correlation between $X_{10}$ and $X_{20}$."

    $X_t = X_s + (\varepsilon_{s+1} + \dots + \varepsilon_t)$, and the bracket is uncorrelated with $X_s$, so
    $\operatorname{Cov}(X_s, X_t) = \operatorname{Var}(X_s) = s\sigma^2$. Correlation:
    $10\sigma^2/\sqrt{10\sigma^2 \cdot 20\sigma^2} = \sqrt{10/20} = 0.707$. It depends on $s$ and $t$, not only on
    $t - s$: not stationary.

??? question "5. With simple exponential smoothing and $\alpha = 0.3$, what weight does the forecast put on the most recent observation, the one before it, and the one five steps back?"

    $\alpha = 0.3$, $\alpha(1-\alpha) = 0.21$, and $\alpha(1-\alpha)^5 = 0.3 \times 0.16807 = 0.050$.

??? question "6. Show that the 2×12 moving average turns any seasonal pattern with period 12 and sum zero into exactly zero."

    Over the 13 terms from $t - 6$ to $t + 6$, months $t - 6$ and $t + 6$ are the same calendar month and get weight
    $\frac1{24}$ each, a total of $\frac1{12}$; the eleven months in between each get $\frac1{12}$. So every calendar month
    gets total weight $\frac1{12}$, and the average of $S$ is $\frac1{12}(S_1 + \dots + S_{12}) = 0$.

??? question "7. Using the AR(1) with $\mu = 20$, $\phi = 0.6$, $\sigma = 2$ and last value 26, give the 3-step-ahead forecast and a 95% forecast interval."

    $\hat X = 20 + 0.6^3 \times 6 = 20 + 1.296 = 21.30$. Error variance $4(1 + 0.36 + 0.1296) = 5.958$, s.d. 2.441.
    Interval $21.30 \pm 1.96 \times 2.441 = (16.5, 26.1)$.

??? question "8. A series has a linear trend, $x_t = a + bt + \varepsilon_t$ with white noise $\varepsilon_t$. What does differencing give? Is the result white noise?"

    $x_t - x_{t-1} = b + \varepsilon_t - \varepsilon_{t-1}$. The trend becomes a constant $b$, but the noise becomes
    $\varepsilon_t - \varepsilon_{t-1}$, which has lag-1 correlation $-\sigma^2/(2\sigma^2) = -0.5$: not white noise.
    Differencing a series that did not need it introduces negative correlation (over-differencing).

??? question "9. For the moving-average model $X_t = \varepsilon_t + \theta\varepsilon_{t-1}$, find $\rho(1)$ and $\rho(h)$ for $h \ge 2$. What is the largest possible $|\rho(1)|$?"

    $\gamma(0) = (1 + \theta^2)\sigma^2$, $\gamma(1) = \operatorname{Cov}(\varepsilon_t + \theta\varepsilon_{t-1}, \varepsilon_{t+1} + \theta\varepsilon_t) = \theta\sigma^2$,
    and $\gamma(h) = 0$ for $h \ge 2$ (no shared shocks). So $\rho(1) = \theta/(1 + \theta^2)$. Since
    $1 + \theta^2 \ge 2|\theta|$, $|\rho(1)| \le \frac12$, with equality at $\theta = \pm1$.

??? question "10. Why does the ordinary test for a correlation coefficient mislead when applied to two independent random walks?"

    The test assumes the pairs are independent across time. Random walks are strongly autocorrelated: each wanders in
    long excursions, so the effective number of independent observations is tiny, and two unrelated walks often share
    long upward or downward stretches by chance. Large sample correlations appear far more often than the test's 5%,
    Yule's nonsense correlation. Correlating the differences, which are independent, gives a valid test.

??? question "11. Show that $\sum_{m=0}^{N-1}\cos(2\pi k m/N) = 0$ when $k$ is a whole number that is not a multiple of $N$, and check it for $N = 4$, $k = 1$."

    With $z = e^{2\pi \mathrm{i} k/N} \ne 1$, $\sum_{m=0}^{N-1} z^m = (z^N - 1)/(z - 1) = 0$ because $z^N = 1$; the cosine
    sum is the real part. For $N = 4$, $k = 1$: $\cos 0 + \cos\frac\pi2 + \cos\pi + \cos\frac{3\pi}2 = 1 + 0 - 1 + 0 = 0$.

??? question "12. (Harder.) An AR(1) started at $X_0 = 0$ with $|\phi| < 1$. Show that $\operatorname{Var}(X_t) = \sigma^2(1 - \phi^{2t})/(1 - \phi^2)$, and find how many steps it takes to reach 99% of the stationary variance when $\phi = 0.9$."

    $X_t = \sum_{j=0}^{t-1}\phi^j\varepsilon_{t-j}$, a sum of $t$ uncorrelated terms, so the variance is
    $\sigma^2\sum_{j=0}^{t-1}\phi^{2j} = \sigma^2(1 - \phi^{2t})/(1 - \phi^2)$. It is 99% of the limit when
    $\phi^{2t} \le 0.01$, that is $t \ge \log 0.01/(2\log 0.9) = 21.9$: 22 steps.

## What you learned

- A time series is often described as trend + season + noise (or a product of them); the decomposition separates parts
  with different causes, like the trend and the growing-season cycle in the Keeling curve.
- The autocorrelation function measures memory; for white noise, sample autocorrelations are roughly $N(0, 1/n)$, and
  trending series produce nonsense correlations.
- Centred moving averages estimate trends and remove seasons; exponential smoothing forecasts with geometrically
  decaying weights; smoothing noise can create cycles that are not there.
- A weakly stationary AR(1) needs $|\phi| < 1$, and then has variance $\sigma^2/(1-\phi^2)$ and autocorrelations
  $\phi^h$; at $\phi = 1$ it becomes a random walk whose variance grows like $t$.
- AR(1) forecasts decay to the mean as $\phi^h$, and their error variance rises to the series' variance; real intervals
  must also allow for parameter and model uncertainty, and methods must be judged out of sample against naive benchmarks.
- Mars' surface pressure has a strong seasonal cycle, with two minima per Mars year, because carbon dioxide freezes onto
  and sublimes from the polar caps; harmonic regression in the solar longitude is the natural way to model it.

**Next:** [Chapter 17](17-Experimental-Design-and-Causal-Inference.md), from patterns to causes: designed experiments,
potential outcomes and what can be learned from observational data.

## Further reading

- G. U. Yule, "Why do we sometimes get nonsense-correlations between time-series?", *Journal of the Royal Statistical
  Society* 89, 1926, and "On a method of investigating periodicities in disturbed series, with special reference to
  Wolfer's sunspot numbers", *Philosophical Transactions of the Royal Society A* 226, 1927.
- E. Slutsky, "The summation of random causes as the source of cyclic processes", *Econometrica* 5, 1937.
- G. E. P. Box and G. M. Jenkins, *Time Series Analysis: Forecasting and Control*, Holden-Day, 1970 (later editions with
  G. C. Reinsel and G. M. Ljung).
- P. J. Brockwell and R. A. Davis, *Time Series: Theory and Methods*, 2nd edition, Springer, 1991, and their
  *Introduction to Time Series and Forecasting*, 3rd edition, Springer, 2016.
- R. J. Hyndman and G. Athanasopoulos, *Forecasting: Principles and Practice*, 3rd edition, OTexts, 2021. Free online,
  practical and honest about forecast evaluation.
- R. H. Shumway and D. S. Stoffer, *Time Series Analysis and Its Applications*, 4th edition, Springer, 2017.
- D. A. Dickey and W. A. Fuller, "Distribution of the estimators for autoregressive time series with a unit root",
  *Journal of the American Statistical Association* 74, 1979.
- S. L. Hess, R. M. Henry, C. B. Leovy, J. A. Ryan and J. E. Tillman, "Meteorological results from the surface of Mars:
  Viking 1 and 2", *Journal of Geophysical Research* 82, 1977, and S. L. Hess and colleagues, "The annual cycle of
  pressure on Mars measured by Viking Landers 1 and 2", *Geophysical Research Letters* 7, 1980.
- C. B. Leovy, "Weather and climate on Mars", *Nature* 412, 2001.
- On this site: [Series](../../uoft/MAT137/unit13.md) (geometric series),
  [Random walks and martingales](../probability/15-Random-Walks-and-Martingales.md) and
  [Markov chains](../probability/13-Markov-Chains.md) in the Probability book,
  [Correlation](../../topics/statistics/level-6/02-correlation.md) and
  [Correlation and causation](../../topics/statistics/level-6/05-correlation-causation.md) (gentler), and the
  [Statistics book's contents](index.md).
