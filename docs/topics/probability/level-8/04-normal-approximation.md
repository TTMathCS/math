---
title: "The normal approximation to the binomial"
---

# The normal approximation to the binomial

*Probability · level 8, lesson 4 of 7*

## A question to start

Flip a fair coin 100 times. What is the chance of getting between 45 and 55 heads?

With the binomial formula from level 7, that is eleven terms:

$$\sum_{k=45}^{55} \binom{100}{k} \left(\tfrac12\right)^{100},$$

with numbers like $\dbinom{100}{50} \approx 1.01 \times 10^{29}$. A computer does it in a blink: the answer is 0.7287.
But draw the binomial histogram for $n = 100$ and you will see something remarkable: the bars trace out, almost
perfectly, a **normal curve**. Using the curve instead of the bars gives 0.7287 too, to four decimal places, with one
look at a table. This lesson shows how, when it works, and one small adjustment that makes all the difference.

## The idea

### The binomial becomes a bell

From level 7, $X \sim \operatorname{B}(n, p)$ has mean $\mu = np$ and standard deviation $\sigma = \sqrt{np(1 - p)}$. For
100 fair flips, $\mu = 50$ and $\sigma = \sqrt{100 \times 0.5 \times 0.5} = 5$.

Here are the binomial bars from 30 to 70 heads, with the normal curve of mean 50 and standard deviation 5 drawn over
them:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 210" role="img" aria-label="Bars of the number of heads in 100 fair coin flips, from 30 to 70, with a normal curve of mean 50 and standard deviation 5 drawn over them; bars 45 to 55 are shaded">
  <line x1="40" y1="170" x2="448" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="18" x2="40" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <rect x="41.2" y="170.0" width="7.6" height="0.0" fill="#9cc9ea"/>
  <text x="45.0" y="185.0" font-size="9" text-anchor="middle" fill="currentColor">30</text>
  <rect x="51.1" y="169.9" width="7.6" height="0.1" fill="#9cc9ea"/>
  <rect x="61.1" y="169.8" width="7.6" height="0.2" fill="#9cc9ea"/>
  <rect x="71.0" y="169.6" width="7.6" height="0.4" fill="#9cc9ea"/>
  <rect x="81.0" y="169.2" width="7.6" height="0.8" fill="#9cc9ea"/>
  <rect x="91.0" y="168.5" width="7.6" height="1.5" fill="#9cc9ea"/>
  <text x="94.7" y="185.0" font-size="9" text-anchor="middle" fill="currentColor">35</text>
  <rect x="100.9" y="167.3" width="7.6" height="2.7" fill="#9cc9ea"/>
  <rect x="110.9" y="165.4" width="7.6" height="4.6" fill="#9cc9ea"/>
  <rect x="120.8" y="162.4" width="7.6" height="7.6" fill="#9cc9ea"/>
  <rect x="130.8" y="157.9" width="7.6" height="12.1" fill="#9cc9ea"/>
  <rect x="140.7" y="151.5" width="7.6" height="18.5" fill="#9cc9ea"/>
  <text x="144.5" y="185.0" font-size="9" text-anchor="middle" fill="currentColor">40</text>
  <rect x="150.7" y="142.9" width="7.6" height="27.1" fill="#9cc9ea"/>
  <rect x="160.6" y="132.0" width="7.6" height="38.0" fill="#9cc9ea"/>
  <rect x="170.6" y="118.7" width="7.6" height="51.3" fill="#9cc9ea"/>
  <rect x="180.5" y="103.6" width="7.6" height="66.4" fill="#9cc9ea"/>
  <rect x="190.5" y="87.3" width="7.6" height="82.7" fill="#eea66f"/>
  <text x="194.2" y="185.0" font-size="9" text-anchor="middle" fill="currentColor">45</text>
  <rect x="200.4" y="71.2" width="7.6" height="98.8" fill="#eea66f"/>
  <rect x="210.4" y="56.5" width="7.6" height="113.5" fill="#eea66f"/>
  <rect x="220.3" y="44.6" width="7.6" height="125.4" fill="#eea66f"/>
  <rect x="230.3" y="36.9" width="7.6" height="133.1" fill="#eea66f"/>
  <rect x="240.2" y="34.3" width="7.6" height="135.7" fill="#eea66f"/>
  <text x="244.0" y="185.0" font-size="9" text-anchor="middle" fill="currentColor">50</text>
  <rect x="250.2" y="36.9" width="7.6" height="133.1" fill="#eea66f"/>
  <rect x="260.1" y="44.6" width="7.6" height="125.4" fill="#eea66f"/>
  <rect x="270.1" y="56.5" width="7.6" height="113.5" fill="#eea66f"/>
  <rect x="280.0" y="71.2" width="7.6" height="98.8" fill="#eea66f"/>
  <rect x="290.0" y="87.3" width="7.6" height="82.7" fill="#eea66f"/>
  <text x="293.8" y="185.0" font-size="9" text-anchor="middle" fill="currentColor">55</text>
  <rect x="299.9" y="103.6" width="7.6" height="66.4" fill="#9cc9ea"/>
  <rect x="309.9" y="118.7" width="7.6" height="51.3" fill="#9cc9ea"/>
  <rect x="319.8" y="132.0" width="7.6" height="38.0" fill="#9cc9ea"/>
  <rect x="329.8" y="142.9" width="7.6" height="27.1" fill="#9cc9ea"/>
  <rect x="339.7" y="151.5" width="7.6" height="18.5" fill="#9cc9ea"/>
  <text x="343.5" y="185.0" font-size="9" text-anchor="middle" fill="currentColor">60</text>
  <rect x="349.7" y="157.9" width="7.6" height="12.1" fill="#9cc9ea"/>
  <rect x="359.6" y="162.4" width="7.6" height="7.6" fill="#9cc9ea"/>
  <rect x="369.6" y="165.4" width="7.6" height="4.6" fill="#9cc9ea"/>
  <rect x="379.5" y="167.3" width="7.6" height="2.7" fill="#9cc9ea"/>
  <rect x="389.5" y="168.5" width="7.6" height="1.5" fill="#9cc9ea"/>
  <text x="393.3" y="185.0" font-size="9" text-anchor="middle" fill="currentColor">65</text>
  <rect x="399.4" y="169.2" width="7.6" height="0.8" fill="#9cc9ea"/>
  <rect x="409.4" y="169.6" width="7.6" height="0.4" fill="#9cc9ea"/>
  <rect x="419.3" y="169.8" width="7.6" height="0.2" fill="#9cc9ea"/>
  <rect x="429.3" y="169.9" width="7.6" height="0.1" fill="#9cc9ea"/>
  <rect x="439.2" y="170.0" width="7.6" height="0.0" fill="#9cc9ea"/>
  <text x="443.0" y="185.0" font-size="9" text-anchor="middle" fill="currentColor">70</text>
  <polyline points="40.0,170.0 41.0,170.0 42.0,170.0 43.0,170.0 44.0,170.0 45.0,170.0 46.0,170.0 47.0,169.9 48.0,169.9 49.0,169.9 50.0,169.9 50.9,169.9 51.9,169.9 52.9,169.9 53.9,169.9 54.9,169.9 55.9,169.9 56.9,169.9 57.9,169.9 58.9,169.9 59.9,169.9 60.9,169.8 61.9,169.8 62.9,169.8 63.9,169.8 64.9,169.8 65.9,169.8 66.9,169.8 67.9,169.7 68.9,169.7 69.9,169.7 70.8,169.7 71.8,169.7 72.8,169.6 73.8,169.6 74.8,169.6 75.8,169.6 76.8,169.5 77.8,169.5 78.8,169.5 79.8,169.4 80.8,169.4 81.8,169.3 82.8,169.3 83.8,169.2 84.8,169.2 85.8,169.1 86.8,169.1 87.8,169.0 88.8,169.0 89.8,168.9 90.8,168.8 91.7,168.7 92.7,168.7 93.7,168.6 94.7,168.5 95.7,168.4 96.7,168.3 97.7,168.2 98.7,168.1 99.7,168.0 100.7,167.8 101.7,167.7 102.7,167.6 103.7,167.4 104.7,167.3 105.7,167.1 106.7,167.0 107.7,166.8 108.7,166.6 109.7,166.4 110.7,166.2 111.6,166.0 112.6,165.8 113.6,165.6 114.6,165.4 115.6,165.1 116.6,164.9 117.6,164.6 118.6,164.3 119.6,164.0 120.6,163.7 121.6,163.4 122.6,163.1 123.6,162.7 124.6,162.4 125.6,162.0 126.6,161.6 127.6,161.2 128.6,160.8 129.6,160.3 130.6,159.9 131.6,159.4 132.5,158.9 133.5,158.4 134.5,157.9 135.5,157.4 136.5,156.8 137.5,156.2 138.5,155.6 139.5,155.0 140.5,154.4 141.5,153.7 142.5,153.0 143.5,152.3 144.5,151.6 145.5,150.8 146.5,150.1 147.5,149.3 148.5,148.5 149.5,147.6 150.5,146.8 151.5,145.9 152.4,145.0 153.4,144.0 154.4,143.1 155.4,142.1 156.4,141.1 157.4,140.1 158.4,139.0 159.4,137.9 160.4,136.8 161.4,135.7 162.4,134.5 163.4,133.4 164.4,132.2 165.4,130.9 166.4,129.7 167.4,128.4 168.4,127.1 169.4,125.8 170.4,124.5 171.4,123.1 172.4,121.8 173.3,120.4 174.3,118.9 175.3,117.5 176.3,116.0 177.3,114.6 178.3,113.1 179.3,111.6 180.3,110.0 181.3,108.5 182.3,106.9 183.3,105.4 184.3,103.8 185.3,102.2 186.3,100.6 187.3,99.0 188.3,97.3 189.3,95.7 190.3,94.1 191.3,92.4 192.3,90.8 193.2,89.1 194.2,87.5 195.2,85.8 196.2,84.2 197.2,82.5 198.2,80.9 199.2,79.3 200.2,77.6 201.2,76.0 202.2,74.4 203.2,72.8 204.2,71.2 205.2,69.6 206.2,68.1 207.2,66.5 208.2,65.0 209.2,63.5 210.2,62.0 211.2,60.6 212.2,59.1 213.2,57.7 214.1,56.4 215.1,55.0 216.1,53.7 217.1,52.4 218.1,51.2 219.1,49.9 220.1,48.8 221.1,47.6 222.1,46.5 223.1,45.4 224.1,44.4 225.1,43.4 226.1,42.5 227.1,41.6 228.1,40.7 229.1,39.9 230.1,39.2 231.1,38.5 232.1,37.8 233.1,37.2 234.0,36.6 235.0,36.1 236.0,35.7 237.0,35.3 238.0,34.9 239.0,34.6 240.0,34.4 241.0,34.2 242.0,34.1 243.0,34.0 244.0,33.9 245.0,34.0 246.0,34.1 247.0,34.2 248.0,34.4 249.0,34.6 250.0,34.9 251.0,35.3 252.0,35.7 253.0,36.1 254.0,36.6 254.9,37.2 255.9,37.8 256.9,38.5 257.9,39.2 258.9,39.9 259.9,40.7 260.9,41.6 261.9,42.5 262.9,43.4 263.9,44.4 264.9,45.4 265.9,46.5 266.9,47.6 267.9,48.8 268.9,49.9 269.9,51.2 270.9,52.4 271.9,53.7 272.9,55.0 273.9,56.4 274.8,57.7 275.8,59.1 276.8,60.6 277.8,62.0 278.8,63.5 279.8,65.0 280.8,66.5 281.8,68.1 282.8,69.6 283.8,71.2 284.8,72.8 285.8,74.4 286.8,76.0 287.8,77.6 288.8,79.3 289.8,80.9 290.8,82.5 291.8,84.2 292.8,85.8 293.8,87.5 294.8,89.1 295.7,90.8 296.7,92.4 297.7,94.1 298.7,95.7 299.7,97.3 300.7,99.0 301.7,100.6 302.7,102.2 303.7,103.8 304.7,105.4 305.7,106.9 306.7,108.5 307.7,110.0 308.7,111.6 309.7,113.1 310.7,114.6 311.7,116.0 312.7,117.5 313.7,118.9 314.7,120.4 315.6,121.8 316.6,123.1 317.6,124.5 318.6,125.8 319.6,127.1 320.6,128.4 321.6,129.7 322.6,130.9 323.6,132.2 324.6,133.4 325.6,134.5 326.6,135.7 327.6,136.8 328.6,137.9 329.6,139.0 330.6,140.1 331.6,141.1 332.6,142.1 333.6,143.1 334.6,144.0 335.6,145.0 336.5,145.9 337.5,146.8 338.5,147.6 339.5,148.5 340.5,149.3 341.5,150.1 342.5,150.8 343.5,151.6 344.5,152.3 345.5,153.0 346.5,153.7 347.5,154.4 348.5,155.0 349.5,155.6 350.5,156.2 351.5,156.8 352.5,157.4 353.5,157.9 354.5,158.4 355.5,158.9 356.4,159.4 357.4,159.9 358.4,160.3 359.4,160.8 360.4,161.2 361.4,161.6 362.4,162.0 363.4,162.4 364.4,162.7 365.4,163.1 366.4,163.4 367.4,163.7 368.4,164.0 369.4,164.3 370.4,164.6 371.4,164.9 372.4,165.1 373.4,165.4 374.4,165.6 375.4,165.8 376.4,166.0 377.3,166.2 378.3,166.4 379.3,166.6 380.3,166.8 381.3,167.0 382.3,167.1 383.3,167.3 384.3,167.4 385.3,167.6 386.3,167.7 387.3,167.8 388.3,168.0 389.3,168.1 390.3,168.2 391.3,168.3 392.3,168.4 393.3,168.5 394.3,168.6 395.3,168.7 396.3,168.7 397.2,168.8 398.2,168.9 399.2,169.0 400.2,169.0 401.2,169.1 402.2,169.1 403.2,169.2 404.2,169.2 405.2,169.3 406.2,169.3 407.2,169.4 408.2,169.4 409.2,169.5 410.2,169.5 411.2,169.5 412.2,169.6 413.2,169.6 414.2,169.6 415.2,169.6 416.2,169.7 417.2,169.7 418.1,169.7 419.1,169.7 420.1,169.7 421.1,169.8 422.1,169.8 423.1,169.8 424.1,169.8 425.1,169.8 426.1,169.8 427.1,169.8 428.1,169.9 429.1,169.9 430.1,169.9 431.1,169.9 432.1,169.9 433.1,169.9 434.1,169.9 435.1,169.9 436.1,169.9 437.1,169.9 438.0,169.9 439.0,169.9 440.0,169.9 441.0,169.9 442.0,170.0 443.0,170.0 444.0,170.0 445.0,170.0 446.0,170.0 447.0,170.0 448.0,170.0" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="244.0" y="204.0" font-size="12" text-anchor="middle" fill="currentColor">number of heads</text>
</svg>
</div>

The curve runs through the tops of the bars. Why should it? A binomial count is a **sum** of $n$ independent indicators
(each flip adds 0 or 1). Lesson 5 explains the general fact, the central limit theorem: a sum of many independent random
parts is approximately normal, whatever the shape of each part. The binomial is the first and oldest example; Abraham
de Moivre worked it out for coin tossing in the 1730s.

So, when $n$ is large,

$$\operatorname{B}(n, p) \approx \operatorname{N}\big(np,\; np(1 - p)\big).$$

### When is $n$ "large enough"?

The approximation is good when the histogram is reasonably symmetric and not squashed against 0 or $n$. A common rule:

$$np \ge 5 \quad \text{and} \quad n(1 - p) \ge 5.$$

(Some books ask for 10 instead of 5, for more accuracy.) Both conditions say "expect at least a handful of successes
**and** of failures". With $n = 20$ and $p = 0.05$, $np = 1$: the histogram is a steep slide down from 0 with a long tail
to the right, nothing like a bell, and the approximation is poor. There the Poisson of level 7 does better.

### The continuity correction

The binomial is **discrete**: only whole numbers. The normal is **continuous**. In the picture, the bar for $k$ heads
stands on the interval from $k - 0.5$ to $k + 0.5$, and its area is $P(X = k)$ (each bar has width 1). So to catch the
bars from 45 to 55 **inclusive**, the area under the curve should run from **44.5** to **55.5**, the outer edges of the
end bars. That half-unit adjustment is the **continuity correction**.

$$P(45 \le X \le 55) \approx P(44.5 < Y < 55.5), \qquad Y \sim \operatorname{N}(50, 5^2).$$

In z-scores: $\tfrac{44.5 - 50}{5} = -1.1$ and $\tfrac{55.5 - 50}{5} = 1.1$, so the probability is
$\Phi(1.1) - \Phi(-1.1) = 0.8643 - 0.1357 = 0.7287$. The exact binomial answer is 0.7287. ✓

Without the correction, using 45 to 55 directly, you get $\Phi(1) - \Phi(-1) = 0.6827$: wrong by 0.046, because
it cuts each end bar in half. With $\sigma = 5$, half a unit is a tenth of a standard deviation, and that matters.

How to apply it: picture the bars and ask which bars you want.

| Binomial question | Bars wanted | Normal area |
| --- | --- | --- |
| $P(X = 50)$ | the bar at 50 | from 49.5 to 50.5 |
| $P(X \le 55)$ | up to and including 55 | below 55.5 |
| $P(X < 55)$ | up to 54 | below 54.5 |
| $P(X \ge 60)$ | 60 and above | above 59.5 |
| $P(X > 60)$ | 61 and above | above 60.5 |

The trap is "$<$" versus "$\le$". For the discrete binomial they are different (lesson 2's warning), so translate the
question into a list of whole numbers **first**, then widen by a half at each end.

### Why bother, when computers exist?

Software gives exact binomial probabilities, so the approximation is no longer needed for arithmetic. It matters for
**understanding**. It tells you, without calculating anything, that the number of heads in 100 flips is almost always
within $50 \pm 10$ (two standard deviations, about 95%), and within $50 \pm 15$ almost certainly. It shows that the
spread grows like $\sqrt n$, so the **proportion** of heads, $\tfrac{X}{n}$, has standard deviation
$\tfrac{\sqrt{np(1 - p)}}{n} = \sqrt{\tfrac{p(1 - p)}{n}}$, which shrinks as $n$ grows. That is the margin of error of every
opinion poll, and it is the start of the law of large numbers in lesson 5.

## Worked examples

**1. Exactly 50 heads in 100 flips.** $P(X = 50) \approx P(49.5 < Y < 50.5)$, $z = \pm 0.1$:
$\Phi(0.1) - \Phi(-0.1) = 0.5398 - 0.4602 = 0.0796$ (0.0797 with more decimal places). Exact: 0.0796. Even the single
most likely result happens less than 8% of the time.

**2. At least 60 heads.** $P(X \ge 60) \approx P(Y > 59.5)$, $z = \tfrac{59.5 - 50}{5} = 1.9$:
$1 - \Phi(1.9) = 1 - 0.9713 = 0.0287$. Exact: 0.0284. Getting 60 or more heads in 100 fair flips happens about 1 time in
35.

**3. Is the die fair?** A die is rolled 600 times and shows 120 sixes. For a fair die, $X \sim \operatorname{B}(600, \tfrac16)$,
with $\mu = 100$ and $\sigma = \sqrt{600 \times \tfrac16 \times \tfrac56} = \sqrt{83.3} \approx 9.13$. Check the rule:
$np = 100$, $n(1 - p) = 500$, both large.

$$P(X \ge 120) \approx P\!\left(Z > \tfrac{119.5 - 100}{9.13}\right) = P(Z > 2.14) \approx 0.016.$$

(Exact binomial: 0.018.) A fair die would do this rarely, about 1 time in 60. That is evidence, though not proof, that
the die favours six. Turning this kind of reasoning into a careful test is the job of [Statistics](../../statistics/index.md).

**4. Overbooking.** An airline sells 200 tickets for a flight with 185 seats. Each passenger turns up with probability
0.9, independently. Chance everyone who turns up gets a seat? $X \sim \operatorname{B}(200, 0.9)$: $\mu = 180$,
$\sigma = \sqrt{200 \times 0.9 \times 0.1} = \sqrt{18} \approx 4.24$; $n(1 - p) = 20 \ge 5$.

$$P(X \le 185) \approx P\!\left(Z < \tfrac{185.5 - 180}{4.24}\right) = P(Z < 1.30) \approx 0.903.$$

(Exact: 0.907.) About 1 flight in 10 would have someone without a seat.

## Try it

1. For 100 fair flips, use the normal approximation with continuity correction to find $P(X \le 40)$.
2. Write the continuity-corrected normal interval for each: $P(X < 30)$, $P(X > 30)$, $P(20 \le X < 25)$.
3. Can the normal approximation be used for $\operatorname{B}(30, 0.1)$? For $\operatorname{B}(200, 0.1)$? Explain.
4. A coin is flipped 400 times. Find (approximately) the chance of at least 220 heads.
5. A packet of 300 seeds has a germination rate of 80%. Find the approximate chance that 230 or fewer germinate.
6. A quiz has 50 questions with 4 choices each, and a student guesses every one. Find the approximate chance of a score
   of 20 or more. Compare with the exact value 0.0139, and with the answer you get if you forget the continuity
   correction.
7. Show that the standard deviation of the **proportion** of heads in $n$ fair flips is $\tfrac{1}{2\sqrt n}$. How many
   flips are needed to make it 0.01?
8. Explain in words why the continuity correction matters more when $\sigma$ is small.

??? note "Answers"
    1. $P(X \le 40) \approx P(Y < 40.5)$, $z = \tfrac{40.5 - 50}{5} = -1.9$, so $1 - 0.9713 = 0.0287$. (By symmetry, the
       same as at least 60.)
    2. $P(X < 30) = P(X \le 29) \approx P(Y < 29.5)$. $P(X > 30) = P(X \ge 31) \approx P(Y > 30.5)$.
       $P(20 \le X < 25) = P(20 \le X \le 24) \approx P(19.5 < Y < 24.5)$.
    3. $\operatorname{B}(30, 0.1)$: $np = 3 < 5$, so no; the histogram is skewed. $\operatorname{B}(200, 0.1)$:
       $np = 20$ and $n(1 - p) = 180$, so yes.
    4. $\mu = 200$, $\sigma = \sqrt{100} = 10$. $P(X \ge 220) \approx P(Z > \tfrac{219.5 - 200}{10}) = P(Z > 1.95) \approx 0.0256$.
    5. $\mu = 240$, $\sigma = \sqrt{300 \times 0.8 \times 0.2} = \sqrt{48} \approx 6.93$.
       $P(X \le 230) \approx P(Z < \tfrac{230.5 - 240}{6.93}) = P(Z < -1.37) \approx 0.085$. (Exact: 0.087.)
    6. $\mu = 12.5$, $\sigma = \sqrt{50 \times 0.25 \times 0.75} \approx 3.06$. With correction:
       $z = \tfrac{19.5 - 12.5}{3.06} \approx 2.29$, $P \approx 0.011$. Without: $z = \tfrac{20 - 12.5}{3.06} \approx 2.45$,
       $P \approx 0.007$. The corrected answer is much closer to 0.0139; in a far tail of a skewed binomial even the
       corrected answer is only rough.
    7. The proportion is $\tfrac{X}{n}$, with standard deviation $\tfrac{\sigma_X}{n} = \tfrac{\sqrt{n/4}}{n} = \tfrac{\sqrt n}{2n} = \tfrac{1}{2\sqrt n}$.
       For 0.01: $2\sqrt n = 100$, $\sqrt n = 50$, $n = 2500$ flips.
    8. The correction shifts by half a unit. If $\sigma$ is small, half a unit is a large fraction of a standard
       deviation and changes the z-score a lot. If $\sigma$ is huge (say 100), half a unit is $0.005\sigma$ and hardly
       matters.

## Common mistake

**Leaving out the continuity correction, or moving the wrong way.** List the whole numbers you want, then extend half a
unit **outward** to cover their bars. "At least 60" starts at 59.5, not 60.5.

**Using it when $np$ or $n(1 - p)$ is small.** A binomial with few expected successes is skewed, and the symmetric
bell fits it badly. Use the exact binomial (or the Poisson) instead.

## Where it leads

- Back: [The normal distribution](03-normal-distribution.md) · Next: [The law of large numbers and the central limit theorem](05-large-numbers-clt.md)
- [Level 8 page](index.md) · [Probability topic page](../index.md)
- The binomial distribution itself: [level 7, lesson 4](../level-7/04-binomial-distribution.md).
- Margins of error in polls and testing whether a coin is fair: [Statistics](../../statistics/index.md).
