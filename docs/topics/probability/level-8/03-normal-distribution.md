---
title: "The normal distribution"
---

# The normal distribution

*Probability · level 8, lesson 3 of 7*

## A question to start

A machine fills cereal boxes. The label says 500 g, and the machine is set to put in 505 g on average, but every box is
a little different: the fill amounts follow a bell-shaped curve with a standard deviation of 3 g.

About what fraction of boxes are underweight (less than 500 g)? And if the company wants only 1 box in 100 to be
underweight, what average should the machine be set to?

These questions have exact answers, and the same method answers questions about exam scores, measurement errors,
heights, and the averages of anything measured many times. The curve behind them all is the **normal distribution**,
the most important distribution in probability.

## The idea

### The bell curve

A continuous random variable $X$ has a **normal distribution** with mean $\mu$ and standard deviation $\sigma$, written
$X \sim \operatorname{N}(\mu, \sigma^2)$, if its density is the bell curve

$$f(x) = \frac{1}{\sigma\sqrt{2\pi}}\, e^{-\frac12 \left(\frac{x - \mu}{\sigma}\right)^2}.$$

(Some books write $\operatorname{N}(\mu, \sigma)$ with the standard deviation instead of the variance. Always check which.)

You will not need to work with this formula directly, but each part of it says something:

- the square $\left(\tfrac{x - \mu}{\sigma}\right)^2$ makes the curve **symmetric** about $\mu$, highest at $\mu$;
- $e^{-(\dots)^2}$ makes it fall away **very** fast: values more than 3 standard deviations from the mean are rare;
- $\sigma$ sets the width: double $\sigma$ and the curve becomes twice as wide and half as tall;
- the factor $\tfrac{1}{\sigma\sqrt{2\pi}}$ makes the total area exactly 1. That $\pi$ appears in a probability curve
  is a surprise; it comes from the famous integral $\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi}$.

The curve bends from "curving down" to "curving up" exactly at $\mu - \sigma$ and $\mu + \sigma$, so you can see the
standard deviation in the picture.

### The 68-95-99.7 rule

Whatever $\mu$ and $\sigma$ are, the areas within a whole number of standard deviations of the mean are always the
same:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 222" role="img" aria-label="Normal curve with bands: about 68 percent of the area lies within 1 standard deviation of the mean, 95 percent within 2, and 99.7 percent within 3">
  <polygon points="65.0,140.0 65.0,138.7 67.8,138.5 70.5,138.2 73.2,137.9 76.0,137.6 78.8,137.3 81.5,136.9 84.2,136.4 87.0,135.9 89.8,135.4 92.5,134.7 95.2,134.0 98.0,133.3 100.8,132.4 103.5,131.5 106.2,130.5 109.0,129.4 111.8,128.1 114.5,126.8 117.3,125.4 120.0,123.8 122.8,122.1 125.5,120.3 128.2,118.4 131.0,116.3 133.8,114.1 136.5,111.8 139.2,109.3 142.0,106.7 144.8,104.0 147.5,101.1 150.2,98.2 153.0,95.1 155.8,91.9 158.5,88.6 161.2,85.2 164.0,81.7 166.8,78.2 169.5,74.6 172.2,71.0 175.0,67.4 177.8,63.8 180.5,60.2 183.2,56.6 186.0,53.1 188.8,49.7 191.5,46.3 194.2,43.1 197.0,40.0 199.8,37.1 202.5,34.4 205.2,31.8 208.0,29.5 210.8,27.4 213.5,25.6 216.2,24.0 219.0,22.7 221.8,21.7 224.5,20.9 227.2,20.5 230.0,20.3 232.8,20.5 235.5,20.9 238.2,21.7 241.0,22.7 243.8,24.0 246.5,25.6 249.2,27.4 252.0,29.5 254.8,31.8 257.5,34.4 260.2,37.1 263.0,40.0 265.8,43.1 268.5,46.3 271.2,49.7 274.0,53.1 276.8,56.6 279.5,60.2 282.2,63.8 285.0,67.4 287.8,71.0 290.5,74.6 293.2,78.2 296.0,81.7 298.8,85.2 301.5,88.6 304.2,91.9 307.0,95.1 309.8,98.2 312.5,101.1 315.2,104.0 318.0,106.7 320.8,109.3 323.5,111.8 326.2,114.1 329.0,116.3 331.8,118.4 334.5,120.3 337.2,122.1 340.0,123.8 342.8,125.4 345.5,126.8 348.2,128.1 351.0,129.4 353.8,130.5 356.5,131.5 359.2,132.4 362.0,133.3 364.8,134.0 367.5,134.7 370.2,135.4 373.0,135.9 375.8,136.4 378.5,136.9 381.2,137.3 384.0,137.6 386.8,137.9 389.5,138.2 392.2,138.5 395.0,138.7 395.0,140.0" fill="#7ccf9a"/>
  <polygon points="120.0,140.0 120.0,123.8 122.8,122.1 125.5,120.3 128.2,118.4 131.0,116.3 133.8,114.1 136.5,111.8 139.2,109.3 142.0,106.7 144.8,104.0 147.5,101.1 150.2,98.2 153.0,95.1 155.8,91.9 158.5,88.6 161.2,85.2 164.0,81.7 166.8,78.2 169.5,74.6 172.2,71.0 175.0,67.4 177.8,63.8 180.5,60.2 183.2,56.6 186.0,53.1 188.8,49.7 191.5,46.3 194.2,43.1 197.0,40.0 199.8,37.1 202.5,34.4 205.2,31.8 208.0,29.5 210.8,27.4 213.5,25.6 216.2,24.0 219.0,22.7 221.8,21.7 224.5,20.9 227.2,20.5 230.0,20.3 232.8,20.5 235.5,20.9 238.2,21.7 241.0,22.7 243.8,24.0 246.5,25.6 249.2,27.4 252.0,29.5 254.8,31.8 257.5,34.4 260.2,37.1 263.0,40.0 265.8,43.1 268.5,46.3 271.2,49.7 274.0,53.1 276.8,56.6 279.5,60.2 282.2,63.8 285.0,67.4 287.8,71.0 290.5,74.6 293.2,78.2 296.0,81.7 298.8,85.2 301.5,88.6 304.2,91.9 307.0,95.1 309.8,98.2 312.5,101.1 315.2,104.0 318.0,106.7 320.8,109.3 323.5,111.8 326.2,114.1 329.0,116.3 331.8,118.4 334.5,120.3 337.2,122.1 340.0,123.8 340.0,140.0" fill="#9cc9ea"/>
  <polygon points="175.0,140.0 175.0,67.4 177.8,63.8 180.5,60.2 183.2,56.6 186.0,53.1 188.8,49.7 191.5,46.3 194.2,43.1 197.0,40.0 199.8,37.1 202.5,34.4 205.2,31.8 208.0,29.5 210.8,27.4 213.5,25.6 216.2,24.0 219.0,22.7 221.8,21.7 224.5,20.9 227.2,20.5 230.0,20.3 232.8,20.5 235.5,20.9 238.2,21.7 241.0,22.7 243.8,24.0 246.5,25.6 249.2,27.4 252.0,29.5 254.8,31.8 257.5,34.4 260.2,37.1 263.0,40.0 265.8,43.1 268.5,46.3 271.2,49.7 274.0,53.1 276.8,56.6 279.5,60.2 282.2,63.8 285.0,67.4 285.0,140.0" fill="#eea66f"/>
  <polyline points="21.0,139.9 23.8,139.9 26.5,139.9 29.2,139.8 32.0,139.8 34.8,139.8 37.5,139.7 40.2,139.7 43.0,139.6 45.8,139.6 48.5,139.5 51.2,139.4 54.0,139.3 56.8,139.2 59.5,139.0 62.2,138.9 65.0,138.7 67.8,138.5 70.5,138.2 73.2,137.9 76.0,137.6 78.8,137.3 81.5,136.9 84.2,136.4 87.0,135.9 89.8,135.4 92.5,134.7 95.2,134.0 98.0,133.3 100.8,132.4 103.5,131.5 106.2,130.5 109.0,129.4 111.8,128.1 114.5,126.8 117.3,125.4 120.0,123.8 122.8,122.1 125.5,120.3 128.2,118.4 131.0,116.3 133.8,114.1 136.5,111.8 139.2,109.3 142.0,106.7 144.8,104.0 147.5,101.1 150.2,98.2 153.0,95.1 155.8,91.9 158.5,88.6 161.2,85.2 164.0,81.7 166.8,78.2 169.5,74.6 172.2,71.0 175.0,67.4 177.8,63.8 180.5,60.2 183.2,56.6 186.0,53.1 188.8,49.7 191.5,46.3 194.2,43.1 197.0,40.0 199.8,37.1 202.5,34.4 205.2,31.8 208.0,29.5 210.8,27.4 213.5,25.6 216.2,24.0 219.0,22.7 221.8,21.7 224.5,20.9 227.2,20.5 230.0,20.3 232.8,20.5 235.5,20.9 238.2,21.7 241.0,22.7 243.8,24.0 246.5,25.6 249.2,27.4 252.0,29.5 254.8,31.8 257.5,34.4 260.2,37.1 263.0,40.0 265.8,43.1 268.5,46.3 271.2,49.7 274.0,53.1 276.8,56.6 279.5,60.2 282.2,63.8 285.0,67.4 287.8,71.0 290.5,74.6 293.2,78.2 296.0,81.7 298.8,85.2 301.5,88.6 304.2,91.9 307.0,95.1 309.8,98.2 312.5,101.1 315.2,104.0 318.0,106.7 320.8,109.3 323.5,111.8 326.2,114.1 329.0,116.3 331.8,118.4 334.5,120.3 337.2,122.1 340.0,123.8 342.8,125.4 345.5,126.8 348.2,128.1 351.0,129.4 353.8,130.5 356.5,131.5 359.2,132.4 362.0,133.3 364.8,134.0 367.5,134.7 370.2,135.4 373.0,135.9 375.8,136.4 378.5,136.9 381.2,137.3 384.0,137.6 386.8,137.9 389.5,138.2 392.2,138.5 395.0,138.7 397.8,138.9 400.5,139.0 403.2,139.2 406.0,139.3 408.8,139.4 411.5,139.5 414.2,139.6 417.0,139.6 419.8,139.7 422.5,139.7 425.2,139.8 428.0,139.8 430.8,139.8 433.5,139.9 436.2,139.9 439.0,139.9" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="10" y1="140" x2="450" y2="140" stroke="currentColor" stroke-width="1.5"/>
  <text x="65.0" y="155.0" font-size="10" text-anchor="middle" fill="currentColor">μ−3σ</text>
  <text x="120.0" y="155.0" font-size="10" text-anchor="middle" fill="currentColor">μ−2σ</text>
  <text x="175.0" y="155.0" font-size="10" text-anchor="middle" fill="currentColor">μ−σ</text>
  <text x="230.0" y="155.0" font-size="10" text-anchor="middle" fill="currentColor">μ</text>
  <text x="285.0" y="155.0" font-size="10" text-anchor="middle" fill="currentColor">μ+σ</text>
  <text x="340.0" y="155.0" font-size="10" text-anchor="middle" fill="currentColor">μ+2σ</text>
  <text x="395.0" y="155.0" font-size="10" text-anchor="middle" fill="currentColor">μ+3σ</text>
  <line x1="175" y1="176" x2="285" y2="176" stroke="currentColor" stroke-width="1"/>
  <text x="230.0" y="173.0" font-size="10" text-anchor="middle" fill="currentColor">about 68%</text>
  <line x1="120" y1="194" x2="340" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="230.0" y="191.0" font-size="10" text-anchor="middle" fill="currentColor">about 95%</text>
  <line x1="65" y1="212" x2="395" y2="212" stroke="currentColor" stroke-width="1"/>
  <text x="230.0" y="209.0" font-size="10" text-anchor="middle" fill="currentColor">about 99.7%</text>
</svg>
</div>

- about 68% of the probability lies within 1 standard deviation of the mean (more precisely 0.6827);
- about 95% within 2 (0.9545);
- about 99.7% within 3 (0.9973).

So for the cereal boxes, about 95% weigh between $505 - 6 = 499$ g and $505 + 6 = 511$ g.

### The standard normal and z-scores

Every normal curve is the same shape, just shifted and stretched. So we only need a table for one of them: the
**standard normal** $Z \sim \operatorname{N}(0, 1)$, with mean 0 and standard deviation 1.

To move any normal $X$ onto it, compute the **z-score**

$$Z = \frac{X - \mu}{\sigma},$$

which says how many standard deviations $X$ is above (positive) or below (negative) its mean. By the rules for
$aX + b$ from level 7, $Z$ has mean $\tfrac{\mu - \mu}{\sigma} = 0$ and standard deviation $\tfrac{\sigma}{\sigma} = 1$; and a
shifted, stretched normal is still normal. So

$$P(X \le x) = P\!\left(Z \le \frac{x - \mu}{\sigma}\right).$$

### Finding areas: $\Phi(z)$

The cumulative probability $P(Z \le z)$ is written $\Phi(z)$ (capital Greek "phi"). There is no simple formula for it,
so it comes from a table, a calculator (`normalcdf` on a TI-84), a spreadsheet (`NORM.S.DIST(z, TRUE)`) or Python
(`statistics.NormalDist().cdf(z)`). Some values:

| $z$ | 0 | 0.5 | 1 | 1.25 | 1.5 | 1.645 | 1.96 | 2 | 2.326 | 2.5 | 3 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $\Phi(z)$ | 0.5000 | 0.6915 | 0.8413 | 0.8944 | 0.9332 | 0.9500 | 0.9750 | 0.9772 | 0.9900 | 0.9938 | 0.9987 |

For example, $P(Z < 1.5) = \Phi(1.5) \approx 0.9332$:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 190" role="img" aria-label="Standard normal bell curve centred at 0; the area to the left of z = 1.5 is shaded, about 0.9332 of the total">
  <polygon points="21.0,150.0 21.0,149.9 23.8,149.9 26.5,149.9 29.2,149.8 32.0,149.8 34.8,149.8 37.5,149.7 40.2,149.7 43.0,149.6 45.8,149.6 48.5,149.5 51.2,149.4 54.0,149.3 56.8,149.2 59.5,149.0 62.2,148.9 65.0,148.7 67.8,148.5 70.5,148.2 73.2,147.9 76.0,147.6 78.8,147.3 81.5,146.9 84.2,146.4 87.0,145.9 89.8,145.4 92.5,144.7 95.2,144.0 98.0,143.3 100.8,142.4 103.5,141.5 106.2,140.5 109.0,139.4 111.8,138.1 114.5,136.8 117.3,135.4 120.0,133.8 122.8,132.1 125.5,130.3 128.2,128.4 131.0,126.3 133.8,124.1 136.5,121.8 139.2,119.3 142.0,116.7 144.8,114.0 147.5,111.1 150.2,108.2 153.0,105.1 155.8,101.9 158.5,98.6 161.2,95.2 164.0,91.7 166.8,88.2 169.5,84.6 172.2,81.0 175.0,77.4 177.8,73.8 180.5,70.2 183.2,66.6 186.0,63.1 188.8,59.7 191.5,56.3 194.2,53.1 197.0,50.0 199.8,47.1 202.5,44.4 205.2,41.8 208.0,39.5 210.8,37.4 213.5,35.6 216.2,34.0 219.0,32.7 221.8,31.7 224.5,30.9 227.2,30.5 230.0,30.3 232.8,30.5 235.5,30.9 238.2,31.7 241.0,32.7 243.8,34.0 246.5,35.6 249.2,37.4 252.0,39.5 254.8,41.8 257.5,44.4 260.2,47.1 263.0,50.0 265.8,53.1 268.5,56.3 271.2,59.7 274.0,63.1 276.8,66.6 279.5,70.2 282.2,73.8 285.0,77.4 287.8,81.0 290.5,84.6 293.2,88.2 296.0,91.7 298.8,95.2 301.5,98.6 304.2,101.9 307.0,105.1 309.8,108.2 312.5,111.1 312.5,150.0" fill="#9cc9ea"/>
  <polyline points="21.0,149.9 23.8,149.9 26.5,149.9 29.2,149.8 32.0,149.8 34.8,149.8 37.5,149.7 40.2,149.7 43.0,149.6 45.8,149.6 48.5,149.5 51.2,149.4 54.0,149.3 56.8,149.2 59.5,149.0 62.2,148.9 65.0,148.7 67.8,148.5 70.5,148.2 73.2,147.9 76.0,147.6 78.8,147.3 81.5,146.9 84.2,146.4 87.0,145.9 89.8,145.4 92.5,144.7 95.2,144.0 98.0,143.3 100.8,142.4 103.5,141.5 106.2,140.5 109.0,139.4 111.8,138.1 114.5,136.8 117.3,135.4 120.0,133.8 122.8,132.1 125.5,130.3 128.2,128.4 131.0,126.3 133.8,124.1 136.5,121.8 139.2,119.3 142.0,116.7 144.8,114.0 147.5,111.1 150.2,108.2 153.0,105.1 155.8,101.9 158.5,98.6 161.2,95.2 164.0,91.7 166.8,88.2 169.5,84.6 172.2,81.0 175.0,77.4 177.8,73.8 180.5,70.2 183.2,66.6 186.0,63.1 188.8,59.7 191.5,56.3 194.2,53.1 197.0,50.0 199.8,47.1 202.5,44.4 205.2,41.8 208.0,39.5 210.8,37.4 213.5,35.6 216.2,34.0 219.0,32.7 221.8,31.7 224.5,30.9 227.2,30.5 230.0,30.3 232.8,30.5 235.5,30.9 238.2,31.7 241.0,32.7 243.8,34.0 246.5,35.6 249.2,37.4 252.0,39.5 254.8,41.8 257.5,44.4 260.2,47.1 263.0,50.0 265.8,53.1 268.5,56.3 271.2,59.7 274.0,63.1 276.8,66.6 279.5,70.2 282.2,73.8 285.0,77.4 287.8,81.0 290.5,84.6 293.2,88.2 296.0,91.7 298.8,95.2 301.5,98.6 304.2,101.9 307.0,105.1 309.8,108.2 312.5,111.1 315.2,114.0 318.0,116.7 320.8,119.3 323.5,121.8 326.2,124.1 329.0,126.3 331.8,128.4 334.5,130.3 337.2,132.1 340.0,133.8 342.8,135.4 345.5,136.8 348.2,138.1 351.0,139.4 353.8,140.5 356.5,141.5 359.2,142.4 362.0,143.3 364.8,144.0 367.5,144.7 370.2,145.4 373.0,145.9 375.8,146.4 378.5,146.9 381.2,147.3 384.0,147.6 386.8,147.9 389.5,148.2 392.2,148.5 395.0,148.7 397.8,148.9 400.5,149.0 403.2,149.2 406.0,149.3 408.8,149.4 411.5,149.5 414.2,149.6 417.0,149.6 419.8,149.7 422.5,149.7 425.2,149.8 428.0,149.8 430.8,149.8 433.5,149.9 436.2,149.9 439.0,149.9" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="10" y1="150" x2="450" y2="150" stroke="currentColor" stroke-width="1.5"/>
  <line x1="65" y1="150" x2="65" y2="154" stroke="currentColor"/>
  <text x="65.0" y="166.0" font-size="11" text-anchor="middle" fill="currentColor">−3</text>
  <line x1="120" y1="150" x2="120" y2="154" stroke="currentColor"/>
  <text x="120.0" y="166.0" font-size="11" text-anchor="middle" fill="currentColor">−2</text>
  <line x1="175" y1="150" x2="175" y2="154" stroke="currentColor"/>
  <text x="175.0" y="166.0" font-size="11" text-anchor="middle" fill="currentColor">−1</text>
  <line x1="230" y1="150" x2="230" y2="154" stroke="currentColor"/>
  <text x="230.0" y="166.0" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <line x1="285" y1="150" x2="285" y2="154" stroke="currentColor"/>
  <text x="285.0" y="166.0" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <line x1="340" y1="150" x2="340" y2="154" stroke="currentColor"/>
  <text x="340.0" y="166.0" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <line x1="395" y1="150" x2="395" y2="154" stroke="currentColor"/>
  <text x="395.0" y="166.0" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <line x1="312.5" y1="86.1" x2="312.5" y2="150" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="316.5" y="83.1" font-size="11" text-anchor="start" fill="currentColor">z = 1.5</text>
  <text x="210.0" y="110.0" font-size="12" text-anchor="middle" fill="currentColor">area 0.9332</text>
  <text x="230.0" y="186.0" font-size="12" text-anchor="middle" fill="currentColor">z</text>
</svg>
</div>

Tables usually give only positive $z$. Symmetry does the rest:

- **above** a value: $P(Z > z) = 1 - \Phi(z)$;
- **negative** $z$: $\Phi(-z) = 1 - \Phi(z)$ (the area left of $-z$ equals the area right of $z$);
- **between** two values: $P(a < Z < b) = \Phi(b) - \Phi(a)$.

**Always draw the curve and shade the area first.** It takes ten seconds and catches most mistakes: if the shaded area
is clearly less than half, your answer must be less than 0.5.

### Working backwards

Sometimes you know the probability and want the value. Find $z$ with $\Phi(z)$ equal to the probability (the
**inverse** normal, `invNorm` on a TI-84 or `NORM.S.INV` in a spreadsheet), then undo the z-score: $x = \mu + z\sigma$.
Useful values: $\Phi(1.2816) = 0.90$, $\Phi(1.645) = 0.95$, $\Phi(1.96) = 0.975$, $\Phi(2.326) = 0.99$.

### Sums of normals are normal

If $X$ and $Y$ are independent and normal, then $X + Y$ is **also** normal, with mean $\mu_X + \mu_Y$ and variance
$\sigma_X^2 + \sigma_Y^2$ (the rules from level 7). This is special: the sum of two uniforms is a triangle, not a
rectangle, but the sum of two bells is a bell. Lesson 5 shows that sums of many random parts of **any** shape end up
close to a bell, which is why the normal is everywhere.

### Is it really normal?

The normal is a **model**. Many measurements are roughly normal near the middle, but real data often have heavier
tails, skew, or limits (a weight cannot be negative, yet every normal curve gives negative values a tiny probability).
The model is excellent for "how likely is something within 2 or 3 standard deviations?" and much less reliable for
"how likely is something 6 standard deviations away?". Checking whether data look normal is part of
[Statistics](../../statistics/index.md).

## Worked examples

**1. Underweight cereal.** $X \sim \operatorname{N}(505, 3^2)$. $P(X < 500)$:

- $z = \tfrac{500 - 505}{3} = -1.67$ (to two decimal places).
- $P(Z < -1.67) = 1 - \Phi(1.67) \approx 1 - 0.9525 = 0.0475$. (With the unrounded $z = -\tfrac53$, a calculator
  gives 0.0478.)

About 4.8% of boxes, roughly 1 in 21, are underweight.

**2. Setting the machine.** Keep $\sigma = 3$ g. Choose $\mu$ so that $P(X < 500) = 0.01$. The z-score of 500 must be
$-2.326$ (because $\Phi(-2.326) = 0.01$):

$$\frac{500 - \mu}{3} = -2.326 \quad \Longrightarrow \quad \mu = 500 + 2.326 \times 3 \approx 507.0 \text{ g}.$$

Setting the average 2 g higher cuts underweight boxes from about 1 in 21 to 1 in 100. (A better machine with smaller
$\sigma$ would allow a lower setting and save cereal.)

**3. Battery life.** A battery's life is $\operatorname{N}(500, 40^2)$ hours.

- Chance it lasts less than 450 hours: $z = \tfrac{450 - 500}{40} = -1.25$, $P = 1 - 0.8944 = 0.1056$.
- Chance it lasts between 480 and 560 hours: $z$ from $-0.5$ to $1.5$, so
  $P = \Phi(1.5) - \Phi(-0.5) = 0.9332 - (1 - 0.6915) = 0.9332 - 0.3085 = 0.6247$.
- The life exceeded by only the best 10%: $z = 1.2816$, so $x = 500 + 1.2816 \times 40 \approx 551$ hours.

**4. Two boxes.** A shop sells cereal boxes in packs of two. Each box is $\operatorname{N}(505, 3^2)$, independently.
The pack total $T$ is normal with mean 1010 and variance $9 + 9 = 18$, so $\sigma_T = \sqrt{18} \approx 4.24$. The chance
the pack is under 1000 g: $z = \tfrac{1000 - 1010}{4.24} \approx -2.36$, $P \approx 0.009$. Under 1% for a pack, though
almost 5% for a single box: the excesses and shortfalls of two boxes partly cancel.

## Try it

1. Find $P(Z > 2)$, $P(Z < -0.75)$ and $P(-1 < Z < 2)$. ($\Phi(0.75) = 0.7734$.)
2. Find the $z$ that has 95% of the area to its left, and the $z$ that cuts off the top 2.5%.
3. Test scores are $\operatorname{N}(100, 15^2)$. What fraction score above 130? Between 85 and 115?
4. In question 3, what score marks the top 10%?
5. Use the 68-95-99.7 rule: heights in a group are roughly $\operatorname{N}(170, 8^2)$ cm. About what fraction are taller
   than 186 cm? Between 162 and 178 cm?
6. A bolt's length is $\operatorname{N}(50, 0.2^2)$ mm. Bolts outside 49.6 to 50.4 mm are rejected. What fraction are
   rejected? If the machine drifts so the mean becomes 50.1 mm, what fraction are rejected now?
7. Show that the quartiles of $\operatorname{N}(\mu, \sigma^2)$ are about $\mu \pm 0.674\sigma$, given $\Phi(0.674) \approx 0.75$.
8. $X \sim \operatorname{N}(20, 3^2)$ and $Y \sim \operatorname{N}(15, 4^2)$ are independent. Find the distribution of
   $X - Y$, and $P(X > Y)$.

??? note "Answers"
    1. $P(Z > 2) = 1 - 0.9772 = 0.0228$. $P(Z < -0.75) = 1 - 0.7734 = 0.2266$.
       $P(-1 < Z < 2) = 0.9772 - (1 - 0.8413) = 0.9772 - 0.1587 = 0.8185$.
    2. $z = 1.645$. The top 2.5% starts at $z = 1.96$.
    3. Above 130: $z = 2$, $P = 0.0228$, about 2.3%. Between 85 and 115: $z = \pm 1$, about 68% (0.6827).
    4. $100 + 1.2816 \times 15 \approx 119.2$.
    5. 186 is $\mu + 2\sigma$. About 95% are within 2 standard deviations, so 5% outside, half of it above: about 2.5%.
       162 to 178 is $\mu \pm \sigma$: about 68%.
    6. The limits are $z = \pm 2$, so $1 - 0.9545 = 0.0455$, about 4.6% rejected. With mean 50.1: the limits become
       $z = \tfrac{49.6 - 50.1}{0.2} = -2.5$ and $z = \tfrac{50.4 - 50.1}{0.2} = 1.5$. Accepted:
       $\Phi(1.5) - \Phi(-2.5) = 0.9332 - 0.0062 = 0.9270$, so about 7.3% rejected. A small drift raises the reject
       rate by more than half.
    7. The upper quartile $q$ has $P(X \le q) = 0.75$, so its z-score is 0.674 and $q = \mu + 0.674\sigma$. By symmetry the
       lower quartile is $\mu - 0.674\sigma$.
    8. $X - Y$ is normal with mean $20 - 15 = 5$ and variance $9 + 16 = 25$ (variances add, even for a difference), so
       $\sigma = 5$. $P(X > Y) = P(X - Y > 0) = P(Z > -1) = 0.8413$.

## Common mistake

**Forgetting to standardise, or standardising with the variance.** $z = \tfrac{x - \mu}{\sigma}$ divides by the standard
deviation. If a question says $\operatorname{N}(500, 1600)$, then $\sigma = 40$, not 1600.

**Getting the side wrong.** Tables give the area to the **left**. For "more than", subtract from 1. A quick sketch
with the shaded area shows at once whether the answer should be above or below a half.

## Where it leads

- Back: [Continuous random variables](02-continuous-random-variables.md) · Next: [The normal approximation to the binomial](04-normal-approximation.md)
- [Level 8 page](index.md) · [Probability topic page](../index.md)
- The integral $\int e^{-x^2}\,dx = \sqrt\pi$ that makes the area 1: [U of T MAT137, unit 12](../../../uoft/MAT137/unit12.md)
  (improper integrals).
- Normal data, z-scores of real measurements and confidence intervals: [Statistics](../../statistics/index.md).
