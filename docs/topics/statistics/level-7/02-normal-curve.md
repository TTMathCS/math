---
title: "The normal curve as a model of data"
---

# The normal curve as a model of data

*Statistics and data · level 7, lesson 2 of 7*

## A question to start

Roll one die and the totals 1 to 6 are equally likely: a flat histogram. Roll two dice and add them: 7 is the most
likely total, and the histogram is a triangle. Roll five dice and add them, and something strange happens: the
histogram is already a smooth hill, low at both ends, high in the middle, the same on both sides.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 570 140" role="img" aria-label="Exact distributions of dice totals: one die is flat, two dice make a triangle, five dice already make a smooth bell shape">
  <rect x="15.0" y="20.0" width="20.0" height="90.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="35.0" y="20.0" width="20.0" height="90.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="55.0" y="20.0" width="20.0" height="90.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="75.0" y="20.0" width="20.0" height="90.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="95.0" y="20.0" width="20.0" height="90.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <rect x="115.0" y="20.0" width="20.0" height="90.0" fill="#9cc9ea" stroke="currentColor" stroke-width="0.8"/>
  <line x1="11" y1="110" x2="139" y2="110" stroke="currentColor" stroke-width="1.5"/>
  <text x="75.0" y="128" font-size="12" text-anchor="middle" fill="currentColor">1 die: totals 1 to 6</text>
  <rect x="175.0" y="95.0" width="13.6" height="15.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="188.6" y="80.0" width="13.6" height="30.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="202.3" y="65.0" width="13.6" height="45.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="215.9" y="50.0" width="13.6" height="60.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="229.5" y="35.0" width="13.6" height="75.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="243.2" y="20.0" width="13.6" height="90.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="256.8" y="35.0" width="13.6" height="75.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="270.5" y="50.0" width="13.6" height="60.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="284.1" y="65.0" width="13.6" height="45.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="297.7" y="80.0" width="13.6" height="30.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <rect x="311.4" y="95.0" width="13.6" height="15.0" fill="#eea66f" stroke="currentColor" stroke-width="0.8"/>
  <line x1="171" y1="110" x2="329" y2="110" stroke="currentColor" stroke-width="1.5"/>
  <text x="250.0" y="128" font-size="12" text-anchor="middle" fill="currentColor">2 dice: totals 2 to 12</text>
  <rect x="365.0" y="109.9" width="7.3" height="0.1" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="372.3" y="109.4" width="7.3" height="0.6" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="379.6" y="108.3" width="7.3" height="1.7" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="386.9" y="106.0" width="7.3" height="4.0" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="394.2" y="101.9" width="7.3" height="8.1" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="401.5" y="95.5" width="7.3" height="14.5" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="408.8" y="86.3" width="7.3" height="23.7" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="416.2" y="74.8" width="7.3" height="35.2" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="423.5" y="61.5" width="7.3" height="48.5" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="430.8" y="47.7" width="7.3" height="62.3" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="438.1" y="34.9" width="7.3" height="75.1" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="445.4" y="25.2" width="7.3" height="84.8" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="452.7" y="20.0" width="7.3" height="90.0" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="460.0" y="20.0" width="7.3" height="90.0" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="467.3" y="25.2" width="7.3" height="84.8" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="474.6" y="34.9" width="7.3" height="75.1" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="481.9" y="47.7" width="7.3" height="62.3" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="489.2" y="61.5" width="7.3" height="48.5" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="496.5" y="74.8" width="7.3" height="35.2" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="503.8" y="86.3" width="7.3" height="23.7" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="511.2" y="95.5" width="7.3" height="14.5" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="518.5" y="101.9" width="7.3" height="8.1" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="525.8" y="106.0" width="7.3" height="4.0" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="533.1" y="108.3" width="7.3" height="1.7" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="540.4" y="109.4" width="7.3" height="0.6" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <rect x="547.7" y="109.9" width="7.3" height="0.1" fill="#7ccf9a" stroke="currentColor" stroke-width="0.8"/>
  <line x1="361" y1="110" x2="559" y2="110" stroke="currentColor" stroke-width="1.5"/>
  <text x="460.0" y="128" font-size="12" text-anchor="middle" fill="currentColor">5 dice: totals 5 to 30</text>
</svg>
</div>

The same hill appears in the heights of adults, the weights of apples from one orchard and the errors in a thousand
careful measurements of the same distance. Why does one shape keep appearing in such different places, and what can
you do with it once you have it?

## The idea

### From histogram to smooth curve

Take a histogram of a very large data set and make the bins narrower and narrower. The jagged tops of the bars blur
into a smooth curve. If you scale the bars so that the **total area** of all the bars is 1, each bar's area is the
**fraction** of the data in that bin.

A smooth curve used this way is called a **density curve**. Its two rules are:

1. It never dips below the horizontal axis.
2. The total area under it is exactly 1 (that is, 100% of the data).

Then the area under the curve between two values $a$ and $b$ is the fraction of the data between $a$ and $b$.
Reading a density curve is reading areas, not heights.

### The normal curve

The most important density curve is the **normal curve**, also called the **bell curve**. A normal curve is:

- **single-peaked and symmetric**: the peak is at the mean, which is also the median and the mode;
- **completely fixed by two numbers**: the mean $\mu$ (Greek "mu"), which sets where the centre is, and the standard
  deviation $\sigma$ (Greek "sigma"), which sets how wide it is;
- **bending in a particular way**: near the peak the curve bends downwards like a dome; further out it bends upwards
  like a bowl. The points where the bending changes, called **inflection points**, are exactly at $\mu - \sigma$ and
  $\mu + \sigma$. So you can see one standard deviation on the picture;
- **never quite touching zero**: the tails go on forever, but they get thin very fast.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 170" role="img" aria-label="Two normal curves: one centred at 160 with standard deviation 6 is tall and narrow; one centred at 175 with standard deviation 10 is lower and wider">
  <polyline fill="none" stroke="#eea66f" stroke-width="2.5" points="20.0,140.0 23.3,140.0 26.7,140.0 30.0,140.0 33.3,140.0 36.7,140.0 40.0,140.0 43.3,140.0 46.7,140.0 50.0,140.0 53.3,140.0 56.7,139.9 60.0,139.9 63.3,139.9 66.7,139.8 70.0,139.7 73.3,139.6 76.7,139.4 80.0,139.2 83.3,138.8 86.7,138.4 90.0,137.8 93.3,137.1 96.7,136.2 100.0,135.0 103.3,133.6 106.7,131.8 110.0,129.7 113.3,127.2 116.7,124.4 120.0,121.1 123.3,117.3 126.7,113.2 130.0,108.8 133.3,104.0 136.7,99.0 140.0,93.9 143.3,88.8 146.7,83.8 150.0,79.2 153.3,74.9 156.7,71.2 160.0,68.1 163.3,65.9 166.7,64.5 170.0,64.0 173.3,64.5 176.7,65.9 180.0,68.1 183.3,71.2 186.7,74.9 190.0,79.2 193.3,83.8 196.7,88.8 200.0,93.9 203.3,99.0 206.7,104.0 210.0,108.8 213.3,113.2 216.7,117.3 220.0,121.1 223.3,124.4 226.7,127.2 230.0,129.7 233.3,131.8 236.7,133.6 240.0,135.0 243.3,136.2 246.7,137.1 250.0,137.8 253.3,138.4 256.7,138.8 260.0,139.2 263.3,139.4 266.7,139.6 270.0,139.7 273.3,139.8 276.7,139.9 280.0,139.9 283.3,139.9 286.7,140.0 290.0,140.0 293.3,140.0 296.7,140.0 300.0,140.0 303.3,140.0 306.7,140.0 310.0,140.0 313.3,140.0 316.7,140.0 320.0,140.0 323.3,140.0 326.7,140.0 330.0,140.0 333.3,140.0 336.7,140.0 340.0,140.0 343.3,140.0 346.7,140.0 350.0,140.0 353.3,140.0 356.7,140.0 360.0,140.0 363.3,140.0 366.7,140.0 370.0,140.0 373.3,140.0 376.7,140.0 380.0,140.0 383.3,140.0 386.7,140.0 390.0,140.0 393.3,140.0 396.7,140.0 400.0,140.0 403.3,140.0 406.7,140.0 410.0,140.0 413.3,140.0 416.7,140.0 420.0,140.0"/>
  <polyline fill="none" stroke="#9cc9ea" stroke-width="2.5" points="20.0,140.0 23.3,140.0 26.7,140.0 30.0,140.0 33.3,140.0 36.7,140.0 40.0,140.0 43.3,140.0 46.7,140.0 50.0,140.0 53.3,140.0 56.7,140.0 60.0,140.0 63.3,139.9 66.7,139.9 70.0,139.9 73.3,139.9 76.7,139.8 80.0,139.8 83.3,139.8 86.7,139.7 90.0,139.6 93.3,139.5 96.7,139.4 100.0,139.3 103.3,139.2 106.7,139.0 110.0,138.8 113.3,138.6 116.7,138.3 120.0,138.0 123.3,137.6 126.7,137.2 130.0,136.8 133.3,136.2 136.7,135.6 140.0,135.0 143.3,134.2 146.7,133.4 150.0,132.5 153.3,131.5 156.7,130.4 160.0,129.3 163.3,128.0 166.7,126.6 170.0,125.2 173.3,123.7 176.7,122.1 180.0,120.4 183.3,118.7 186.7,116.9 190.0,115.1 193.3,113.3 196.7,111.4 200.0,109.6 203.3,107.8 206.7,106.0 210.0,104.3 213.3,102.7 216.7,101.2 220.0,99.8 223.3,98.5 226.7,97.4 230.0,96.4 233.3,95.6 236.7,95.0 240.0,94.6 243.3,94.4 246.7,94.4 250.0,94.6 253.3,95.0 256.7,95.6 260.0,96.4 263.3,97.4 266.7,98.5 270.0,99.8 273.3,101.2 276.7,102.7 280.0,104.3 283.3,106.0 286.7,107.8 290.0,109.6 293.3,111.4 296.7,113.3 300.0,115.1 303.3,116.9 306.7,118.7 310.0,120.4 313.3,122.1 316.7,123.7 320.0,125.2 323.3,126.6 326.7,128.0 330.0,129.3 333.3,130.4 336.7,131.5 340.0,132.5 343.3,133.4 346.7,134.2 350.0,135.0 353.3,135.6 356.7,136.2 360.0,136.8 363.3,137.2 366.7,137.6 370.0,138.0 373.3,138.3 376.7,138.6 380.0,138.8 383.3,139.0 386.7,139.2 390.0,139.3 393.3,139.4 396.7,139.5 400.0,139.6 403.3,139.7 406.7,139.8 410.0,139.8 413.3,139.8 416.7,139.9 420.0,139.9"/>
  <line x1="20.0" y1="140.0" x2="420.0" y2="140.0" stroke="currentColor" stroke-width="1.2"/>
  <line x1="170.0" y1="140.0" x2="170.0" y2="64.0" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="245.0" y1="140.0" x2="245.0" y2="94.4" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="20.0" y="158.0" font-size="11" text-anchor="middle" fill="currentColor">130</text>
  <text x="70.0" y="158.0" font-size="11" text-anchor="middle" fill="currentColor">140</text>
  <text x="120.0" y="158.0" font-size="11" text-anchor="middle" fill="currentColor">150</text>
  <text x="170.0" y="158.0" font-size="11" text-anchor="middle" fill="currentColor">160</text>
  <text x="220.0" y="158.0" font-size="11" text-anchor="middle" fill="currentColor">170</text>
  <text x="270.0" y="158.0" font-size="11" text-anchor="middle" fill="currentColor">180</text>
  <text x="320.0" y="158.0" font-size="11" text-anchor="middle" fill="currentColor">190</text>
  <text x="370.0" y="158.0" font-size="11" text-anchor="middle" fill="currentColor">200</text>
  <text x="420.0" y="158.0" font-size="11" text-anchor="middle" fill="currentColor">210</text>
  <text x="120.0" y="60.0" font-size="11" text-anchor="end" fill="currentColor">μ = 160, σ = 6</text>
  <text x="300.0" y="92.0" font-size="11" text-anchor="start" fill="currentColor">μ = 175, σ = 10</text>
</svg>
</div>

Changing $\mu$ slides the curve along the axis without changing its shape. Changing $\sigma$ stretches it: a bigger
$\sigma$ makes it wider, and, because the area must stay 1, also lower.

The curve's equation is

$$f(x) = \frac{1}{\sigma\sqrt{2\pi}}\, e^{-\frac{(x - \mu)^2}{2\sigma^2}}$$

You will not need to work with it here. Two things are worth noticing. The square $(x - \mu)^2$ makes the curve
symmetric: a value 5 above the mean gives the same height as a value 5 below. And the minus sign in the power of $e$
makes the curve fall off very quickly as you move away from $\mu$; that is why values more than 3 standard
deviations from the mean are rare.

### Why the bell keeps appearing

Look again at the dice. Each total is a **sum of many small random pieces**. Extreme totals need every piece to be
extreme in the same direction (five 6s, or five 1s), which can happen in only one way out of $6^5 = 7776$. Middle
totals can be made in hundreds of ways, because highs and lows cancel. So sums pile up in the middle, and the pile
takes the bell shape.

A person's height is the result of many genes and many years of meals and sleep, each nudging it a little up or
down. A measurement error is the sum of many tiny disturbances: a small shake of the hand, a little heat, a slight
misreading. When many small, independent effects add up, the result is close to normal, whatever the shape of each
small effect. This is a real theorem, the **central limit theorem**, proved in
[Probability, level 8](../../probability/level-8/05-large-numbers-clt.md). It is why the normal curve is a good
**model** for so many kinds of data.

A **model** is a simple, exact description that fits real data well enough to be useful. Real heights are not
perfectly normal (nobody is 3 metres tall, though the curve allows it), but the normal model predicts percentages of
heights very well.

### The 68–95–99.7 rule

For **every** normal curve, whatever $\mu$ and $\sigma$ are:

- about **68%** of values lie within 1 standard deviation of the mean, between $\mu - \sigma$ and $\mu + \sigma$;
- about **95%** lie within 2 standard deviations;
- about **99.7%** lie within 3 standard deviations.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 180" role="img" aria-label="A normal curve. The middle band within one standard deviation holds 68 percent, the bands between one and two standard deviations hold 13.5 percent each, and the bands between two and three hold about 2.35 percent each">
  <polygon fill="#7ccf9a" fill-opacity="1" points="108.9,150.0 108.9,134.6 110.3,133.8 111.7,133.0 113.1,132.1 114.4,131.3 115.8,130.3 117.2,129.4 118.6,128.4 120.0,127.4 121.4,126.4 122.8,125.3 124.2,124.3 125.6,123.1 126.9,122.0 128.3,120.8 129.7,119.6 131.1,118.3 132.5,117.0 133.9,115.7 135.3,114.4 136.7,113.0 138.1,111.6 139.4,110.2 140.8,108.7 142.2,107.2 143.6,105.7 145.0,104.2 146.4,102.6 147.8,101.0 149.2,99.4 150.6,97.8 151.9,96.2 153.3,94.5 154.7,92.8 156.1,91.2 157.5,89.5 158.9,87.8 160.3,86.0 161.7,84.3 163.1,82.6 164.4,80.9 164.4,150.0"/>
  <polygon fill="#7ccf9a" fill-opacity="1" points="275.6,150.0 275.6,80.9 276.9,82.6 278.3,84.3 279.7,86.0 281.1,87.8 282.5,89.5 283.9,91.2 285.3,92.8 286.7,94.5 288.1,96.2 289.4,97.8 290.8,99.4 292.2,101.0 293.6,102.6 295.0,104.2 296.4,105.7 297.8,107.2 299.2,108.7 300.6,110.2 301.9,111.6 303.3,113.0 304.7,114.4 306.1,115.7 307.5,117.0 308.9,118.3 310.3,119.6 311.7,120.8 313.1,122.0 314.4,123.1 315.8,124.3 317.2,125.3 318.6,126.4 320.0,127.4 321.4,128.4 322.8,129.4 324.2,130.3 325.6,131.3 326.9,132.1 328.3,133.0 329.7,133.8 331.1,134.6 331.1,150.0"/>
  <polygon fill="#9cc9ea" fill-opacity="1" points="164.4,150.0 164.4,80.9 167.2,77.4 170.0,74.0 172.8,70.6 175.6,67.2 178.3,64.0 181.1,60.8 183.9,57.7 186.7,54.8 189.4,52.0 192.2,49.4 195.0,47.0 197.8,44.8 200.6,42.8 203.3,41.0 206.1,39.5 208.9,38.3 211.7,37.3 214.4,36.6 217.2,36.2 220.0,36.0 222.8,36.2 225.6,36.6 228.3,37.3 231.1,38.3 233.9,39.5 236.7,41.0 239.4,42.8 242.2,44.8 245.0,47.0 247.8,49.4 250.6,52.0 253.3,54.8 256.1,57.7 258.9,60.8 261.7,64.0 264.4,67.2 267.2,70.6 270.0,74.0 272.8,77.4 275.6,80.9 275.6,150.0"/>
  <polygon fill="#eea66f" fill-opacity="1" points="53.3,150.0 53.3,148.7 54.7,148.6 56.1,148.5 57.5,148.4 58.9,148.3 60.3,148.2 61.7,148.0 63.1,147.9 64.4,147.7 65.8,147.6 67.2,147.4 68.6,147.2 70.0,147.0 71.4,146.8 72.8,146.6 74.2,146.4 75.6,146.1 76.9,145.9 78.3,145.6 79.7,145.3 81.1,145.0 82.5,144.7 83.9,144.3 85.3,144.0 86.7,143.6 88.1,143.2 89.4,142.8 90.8,142.4 92.2,141.9 93.6,141.4 95.0,140.9 96.4,140.4 97.8,139.9 99.2,139.3 100.6,138.7 101.9,138.1 103.3,137.4 104.7,136.8 106.1,136.1 107.5,135.3 108.9,134.6 108.9,150.0"/>
  <polygon fill="#eea66f" fill-opacity="1" points="331.1,150.0 331.1,134.6 332.5,135.3 333.9,136.1 335.3,136.8 336.7,137.4 338.1,138.1 339.4,138.7 340.8,139.3 342.2,139.9 343.6,140.4 345.0,140.9 346.4,141.4 347.8,141.9 349.2,142.4 350.6,142.8 351.9,143.2 353.3,143.6 354.7,144.0 356.1,144.3 357.5,144.7 358.9,145.0 360.3,145.3 361.7,145.6 363.1,145.9 364.4,146.1 365.8,146.4 367.2,146.6 368.6,146.8 370.0,147.0 371.4,147.2 372.8,147.4 374.2,147.6 375.6,147.7 376.9,147.9 378.3,148.0 379.7,148.2 381.1,148.3 382.5,148.4 383.9,148.5 385.3,148.6 386.7,148.7 386.7,150.0"/>
  <polyline fill="none" stroke="currentColor" stroke-width="2" points="20.0,149.8 23.3,149.8 26.7,149.7 30.0,149.7 33.3,149.6 36.7,149.5 40.0,149.4 43.3,149.3 46.7,149.1 50.0,148.9 53.3,148.7 56.7,148.5 60.0,148.2 63.3,147.9 66.7,147.5 70.0,147.0 73.3,146.5 76.7,145.9 80.0,145.2 83.3,144.5 86.7,143.6 90.0,142.6 93.3,141.5 96.7,140.3 100.0,138.9 103.3,137.4 106.7,135.8 110.0,133.9 113.3,132.0 116.7,129.8 120.0,127.4 123.3,124.9 126.7,122.2 130.0,119.3 133.3,116.2 136.7,113.0 140.0,109.6 143.3,106.0 146.7,102.3 150.0,98.5 153.3,94.5 156.7,90.5 160.0,86.4 163.3,82.2 166.7,78.1 170.0,74.0 173.3,69.9 176.7,65.9 180.0,62.0 183.3,58.3 186.7,54.8 190.0,51.5 193.3,48.4 196.7,45.6 200.0,43.2 203.3,41.0 206.7,39.3 210.0,37.8 213.3,36.8 216.7,36.2 220.0,36.0 223.3,36.2 226.7,36.8 230.0,37.8 233.3,39.3 236.7,41.0 240.0,43.2 243.3,45.6 246.7,48.4 250.0,51.5 253.3,54.8 256.7,58.3 260.0,62.0 263.3,65.9 266.7,69.9 270.0,74.0 273.3,78.1 276.7,82.2 280.0,86.4 283.3,90.5 286.7,94.5 290.0,98.5 293.3,102.3 296.7,106.0 300.0,109.6 303.3,113.0 306.7,116.2 310.0,119.3 313.3,122.2 316.7,124.9 320.0,127.4 323.3,129.8 326.7,132.0 330.0,133.9 333.3,135.8 336.7,137.4 340.0,138.9 343.3,140.3 346.7,141.5 350.0,142.6 353.3,143.6 356.7,144.5 360.0,145.2 363.3,145.9 366.7,146.5 370.0,147.0 373.3,147.5 376.7,147.9 380.0,148.2 383.3,148.5 386.7,148.7 390.0,148.9 393.3,149.1 396.7,149.3 400.0,149.4 403.3,149.5 406.7,149.6 410.0,149.7 413.3,149.7 416.7,149.8 420.0,149.8"/>
  <line x1="20.0" y1="150.0" x2="420.0" y2="150.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="220.0" y="107.1" font-size="13" text-anchor="middle" fill="currentColor">68%</text>
  <text x="136.7" y="140.0" font-size="11" text-anchor="middle" fill="currentColor">13.5%</text>
  <text x="303.3" y="140.0" font-size="11" text-anchor="middle" fill="currentColor">13.5%</text>
  <text x="81.1" y="118.0" font-size="10" text-anchor="middle" fill="currentColor">2.35%</text>
  <text x="358.9" y="118.0" font-size="10" text-anchor="middle" fill="currentColor">2.35%</text>
  <text x="53.3" y="168.0" font-size="11" text-anchor="middle" fill="currentColor">μ−3σ</text>
  <text x="108.9" y="168.0" font-size="11" text-anchor="middle" fill="currentColor">μ−2σ</text>
  <text x="164.4" y="168.0" font-size="11" text-anchor="middle" fill="currentColor">μ−σ</text>
  <text x="220.0" y="168.0" font-size="11" text-anchor="middle" fill="currentColor">μ</text>
  <text x="275.6" y="168.0" font-size="11" text-anchor="middle" fill="currentColor">μ+σ</text>
  <text x="331.1" y="168.0" font-size="11" text-anchor="middle" fill="currentColor">μ+2σ</text>
  <text x="386.7" y="168.0" font-size="11" text-anchor="middle" fill="currentColor">μ+3σ</text>
</svg>
</div>

(More exactly: 68.27%, 95.45% and 99.73%.) Why is the rule the same for every normal curve? Because every normal
curve is the same shape, only slid and stretched. Measure distances in units of $\sigma$ and all normal curves become
one curve. That idea gets a name, the z-score, in the next lesson.

Because the curve is symmetric, the rule splits into pieces:

- from $\mu$ to $\mu + \sigma$: half of 68%, that is **34%**;
- from $\mu + \sigma$ to $\mu + 2\sigma$: $(95 - 68) \div 2 =$ **13.5%**;
- from $\mu + 2\sigma$ to $\mu + 3\sigma$: $(99.7 - 95) \div 2 =$ **2.35%**;
- above $\mu + 2\sigma$: $(100 - 95) \div 2 =$ **2.5%**; above $\mu + 3\sigma$: **0.15%**.

### Is the normal model right for these data?

Before using the rule, check that the data look normal. Three checks:

1. **Draw a histogram.** It should have one hump and be roughly symmetric, with no long tail.
2. **Count.** Find what fraction of the data is within 1, 2 and 3 standard deviations of the mean. It should be
   near 68%, 95% and 99.7%.
3. **Use a normal probability plot** (technology draws it). It plots each value against where it would be if the data
   were exactly normal. Normal data give points close to a straight line; skewed data give a curve.

### Not all data are normal

Incomes are the classic counter-example. They are strongly skewed right: most people earn a moderate amount, and a
few earn many times more. Mean minus two standard deviations is often a **negative** income, which is impossible.
Waiting times, the sizes of earthquakes, the populations of towns and the number of followers people have online
are all skewed right. For them the 68–95–99.7 rule gives wrong answers, and the median and IQR describe the data
better.

<figure class="play" data-play="normal"><span class="ai-tag">AI-created</span><figcaption><b>The normal curve.</b> 68%, 95% and 99.7% within 1, 2 and 3 standard deviations.</figcaption></figure>

## Worked examples

The heights of the adult women in a town are close to normal with mean $\mu = 163$ cm and standard deviation
$\sigma = 7$ cm. (These are made-up but realistic numbers.)

**1. A middle band.** What percent are between 149 cm and 177 cm?

$149 = 163 - 14 = \mu - 2\sigma$ and $177 = 163 + 14 = \mu + 2\sigma$. Within 2 standard deviations: about **95%**.

**2. One tail.** What percent are taller than 170 cm?

$170 = \mu + \sigma$. Within 1 standard deviation is 68%, so 32% is outside, half on each side: **16%** taller.

**3. A lopsided band.** What percent are between 156 cm and 177 cm?

$156 = \mu - \sigma$ and $177 = \mu + 2\sigma$. Add the pieces: from $\mu - \sigma$ to $\mu$ is 34%, from $\mu$ to
$\mu + \sigma$ is 34%, from $\mu + \sigma$ to $\mu + 2\sigma$ is 13.5%. Total: $34 + 34 + 13.5 =$ **81.5%**.

**4. A machine that fills bags.** A machine fills flour bags with a mean of 505 g and a standard deviation of 2.5 g,
normally distributed. The label says 500 g. What fraction of bags are underweight?

$500 = 505 - 5 = \mu - 2\sigma$. Below $\mu - 2\sigma$ is about **2.5%**, so about 1 bag in 40 is underweight. To
make underweight bags rarer, the factory can raise the mean (costing flour) or reduce $\sigma$ (a more precise
machine). Setting the mean to $500 + 3 \times 2.5 = 507.5$ g makes underweight bags about 0.15%: fewer than 2 in
1000.

**5. Testing the model on real-looking data.** The clinic waiting times from the last lesson were

1, 2, 2, 3, 3, 3, 4, 4, 5, 6, 8, 12, 19

Their mean is about 5.54 and their standard deviation (the sample version, level 6) is about 4.99.

- Within 1 standard deviation means between $5.54 - 4.99 = 0.55$ and $5.54 + 4.99 = 10.53$. That includes 11 of the
  13 values, which is 85%, not 68%.
- Mean minus 2 standard deviations is $5.54 - 9.98 \approx -4.4$ minutes: a negative waiting time.

The data are skewed right, and the normal model does not fit. Use the median and IQR instead.

## Try it

IQ-style test scores are scaled to be normal with mean 100 and standard deviation 15.

1. What percent of people score between 85 and 115? Between 70 and 130?
2. What percent score above 115? Above 145?
3. What percent score between 70 and 115?
4. A normal distribution has $\mu = 40$. About 2.5% of values are above 52. What is $\sigma$?
5. Sketch two normal curves on the same axis: one with $\mu = 50, \sigma = 5$ and one with $\mu = 50, \sigma = 10$.
   Which is taller? Why must it be?
6. Explain why the 68–95–99.7 rule is the same for every normal curve.
7. A data set of 200 times has mean 12 minutes and standard deviation 9 minutes, and no time is negative. Explain
   why these data cannot be close to normal.
8. Among 1000 values from a normal distribution, about how many would you expect more than 3 standard deviations
   from the mean? If you saw 40 such values, what would you conclude?

??? note "Answers"
    1. 85 to 115 is $\mu \pm \sigma$: **68%**. 70 to 130 is $\mu \pm 2\sigma$: **95%**.
    2. Above 115 ($\mu + \sigma$): $(100 - 68) \div 2 =$ **16%**. Above 145 ($\mu + 3\sigma$):
       $(100 - 99.7) \div 2 =$ **0.15%**.
    3. From 70 to 100 is half of 95%, that is 47.5%. From 100 to 115 is 34%. Total **81.5%**.
    4. Above $\mu + 2\sigma$ is 2.5%, so $52 = 40 + 2\sigma$, giving $2\sigma = 12$ and $\sigma = 6$.
    5. The $\sigma = 5$ curve is narrower and **taller**. Both curves must enclose area 1; the wider curve spreads
       that area over more of the axis, so it has to be lower. (In fact its peak is exactly half as high.)
    6. Every normal curve is the same shape, only moved along (by $\mu$) and stretched (by $\sigma$). Moving and
       stretching do not change what fraction lies within "1 stretch-unit" of the centre, so the fractions are the
       same for all of them.
    7. If they were normal, about 2.5% of them (5 times) would be below $\mu - 2\sigma = 12 - 18 = -6$ minutes, and
       even more would be below 0. But no time is below 0. The lowest possible value, 0, is only
       $12 \div 9 \approx 1.3$ standard deviations below the mean, while the times can reach far above it: the data
       must be bunched near 0 with a long tail to the right, that is skewed right.
    8. About 0.3% of 1000, that is **3** values. Seeing 40 means the tails are much heavier than normal: the normal
       model does not fit (or something unusual, such as a measuring fault, is in the data).

## Common mistake

**Using the 68–95–99.7 rule on any data at all.** The rule belongs to the normal curve. For skewed data it gives
wrong percentages and can predict impossible values. Look at the shape first.

**Reading heights instead of areas.** The height of a density curve at one value is not a percentage. Percentages
are **areas** under the curve, between two values.

## Where it leads

- Back: [Shapes of distributions](01-distribution-shapes.md) · Next: [z-scores and percentiles](03-z-scores-percentiles.md)
- [Level 7 page](index.md) · [Statistics topic page](../index.md)
- The standard deviation used here is built in [Level 6: standard deviation](../level-6/06-standard-deviation.md).
- The normal distribution as a probability model, and why the central limit theorem is true:
  [Probability, level 8: the normal distribution](../../probability/level-8/03-normal-distribution.md) and
  [the law of large numbers and the CLT](../../probability/level-8/05-large-numbers-clt.md).
- Areas under curves are **integrals**: [MAT137 Unit 7 (the definition of the integral)](../../../uoft/MAT137/unit07.md).
  The number $e$ is explained in [MAT137 Unit 4 (transcendental functions)](../../../uoft/MAT137/unit04.md).
