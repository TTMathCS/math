---
title: "The law of large numbers and the central limit theorem"
---

# The law of large numbers and the central limit theorem

*Probability · level 8, lesson 5 of 7*

## A question to start

Roll a die once: the result could be anything from 1 to 6. Roll it 1000 times and take the **average**: it will be very
close to 3.5, almost certainly between 3.4 and 3.6. Why? Each roll is just as wild as the first one. Nothing "corrects"
the die. So where does the steadiness of the average come from?

And there is a second surprise. The result of one die has a flat distribution, all six values equally likely. But the
average of many dice has a **bell-shaped** distribution, the normal curve of lesson 3, even though nothing bell-shaped
went in. Where does the bell come from?

These two facts, the **law of large numbers** and the **central limit theorem**, are the two great theorems of
probability. This lesson is a first look at both, with a real proof of the first.

## The idea

### Averages of independent copies

Let $X_1, X_2, \dots, X_n$ be **independent** random variables with the **same** distribution, each with mean $\mu$ and
standard deviation $\sigma$: $n$ rolls of a die, $n$ measurements of the same thing, $n$ people chosen at random. Their
**sample mean** is

$$\bar X = \frac{X_1 + X_2 + \dots + X_n}{n}.$$

(Read $\bar X$ as "X bar".) Using the rules from level 7:

- the sum has mean $n\mu$ and, since the $X_i$ are independent, variance $n\sigma^2$;
- dividing by $n$ divides the mean by $n$ and the variance by $n^2$.

So

$$E(\bar X) = \mu, \qquad \operatorname{Var}(\bar X) = \frac{\sigma^2}{n}, \qquad \operatorname{SD}(\bar X) = \frac{\sigma}{\sqrt n}.$$

This is the heart of everything in this lesson. The average is centred on the true mean, and its spread **shrinks** like
$\tfrac{1}{\sqrt n}$. For a die, $\sigma = \sqrt{35/12} \approx 1.71$. The average of 100 rolls has standard deviation
$\tfrac{1.71}{10} = 0.171$; of 10 000 rolls, 0.0171. To make the spread 10 times smaller you need 100 times as many
rolls.

### A simulation

A computer rolled a die 1000 times and kept a running average. The first ten rolls were 2, 1, 5, 6, 1, 2, 2, 1, 1, 6
(average 2.7, well below 3.5). After 100 rolls the average was 3.30; after 500, 3.572; after 1000, 3.512.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 200" role="img" aria-label="Running average of 1000 simulated die rolls, with the number of rolls on a log scale: it swings widely at first and settles near 3.5">
  <line x1="40" y1="170" x2="450" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="15" x2="40" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="92.5" x2="450" y2="92.5" stroke="#eea66f" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="34.0" y="174.0" font-size="10" text-anchor="end" fill="currentColor">1</text>
  <text x="34.0" y="143.0" font-size="10" text-anchor="end" fill="currentColor">2</text>
  <text x="34.0" y="112.0" font-size="10" text-anchor="end" fill="currentColor">3</text>
  <text x="34.0" y="81.0" font-size="10" text-anchor="end" fill="currentColor">4</text>
  <text x="34.0" y="50.0" font-size="10" text-anchor="end" fill="currentColor">5</text>
  <text x="34.0" y="19.0" font-size="10" text-anchor="end" fill="currentColor">6</text>
  <text x="34.0" y="96.5" font-size="10" text-anchor="end" fill="currentColor">3.5</text>
  <text x="40.0" y="185.0" font-size="10" text-anchor="middle" fill="currentColor">1</text>
  <text x="175.0" y="185.0" font-size="10" text-anchor="middle" fill="currentColor">10</text>
  <text x="310.0" y="185.0" font-size="10" text-anchor="middle" fill="currentColor">100</text>
  <text x="445.0" y="185.0" font-size="10" text-anchor="middle" fill="currentColor">1000</text>
  <polyline points="40.0,139.0 80.6,154.5 104.4,118.3 121.3,92.5 134.4,108.0 145.1,113.2 154.1,116.9 161.9,123.5 168.8,128.7 175.0,117.3 180.6,119.3 185.7,110.6 190.4,110.4 194.7,112.4 198.8,116.3 202.6,115.8 206.1,113.5 209.5,108.0 212.6,108.0 215.6,108.0 218.5,106.5 221.2,106.6 223.8,106.7 226.3,108.0 228.7,109.2 231.0,109.2 233.2,109.1 235.4,110.2 237.4,110.1 239.4,107.0 241.3,105.0 243.2,104.1 245.0,105.2 246.7,103.4 248.4,102.7 250.1,102.0 251.7,101.3 253.3,103.1 254.8,102.4 256.3,101.0 257.7,101.2 259.1,100.6 260.5,99.3 261.9,99.5 263.2,97.7 264.5,95.9 265.7,95.5 267.0,95.1 268.2,96.6 269.4,96.2 270.5,97.7 271.7,98.5 272.8,99.2 273.9,98.2 274.9,99.0 276.0,98.0 277.0,96.6 278.1,95.2 279.1,96.4 280.1,96.6 281.0,95.8 282.0,95.5 282.9,96.2 283.8,97.3 284.7,98.5 285.6,98.1 286.5,99.2 287.4,100.2 288.2,99.9 289.1,98.7 289.9,98.0 290.7,98.1 291.5,97.8 292.3,97.1 293.1,97.7 293.9,98.2 294.7,97.5 295.4,96.9 296.2,97.0 296.9,97.9 297.6,98.4 298.4,98.5 299.1,98.7 299.8,99.1 300.5,98.2 301.2,98.3 301.8,98.0 302.5,97.8 303.2,97.9 303.8,97.7 304.5,98.5 305.1,98.6 305.7,98.3 306.4,98.8 307.0,99.5 307.6,98.6 308.2,98.4 308.8,98.2 309.4,98.0 310.0,98.7 310.6,98.8 311.2,98.0 311.7,98.7 312.3,98.8 312.9,99.4 313.4,100.1 314.0,99.9 314.5,100.5 315.1,100.6 315.6,101.0 316.1,100.7 316.6,100.2 317.2,100.0 317.7,99.8 318.2,100.5 318.7,100.0 319.2,100.6 319.7,100.4 320.2,101.0 320.7,100.5 321.2,100.3 321.7,100.6 322.1,100.2 322.6,100.0 323.1,99.3 323.6,98.7 324.0,98.7 324.5,98.1 324.9,98.6 325.4,98.2 325.8,98.8 326.3,99.3 326.7,99.4 327.2,98.7 327.6,98.6 328.0,98.4 328.5,98.5 328.9,99.0 329.3,98.6 329.7,98.0 330.1,98.1 330.6,97.7 331.0,97.6 331.4,97.7 331.8,97.3 332.2,97.8 332.6,97.7 333.0,97.5 333.4,98.0 333.8,97.5 334.2,97.5 334.5,97.2 334.9,97.1 335.3,96.7 335.7,97.2 336.1,97.5 336.4,97.5 336.8,97.8 337.2,97.7 337.6,97.3 337.9,97.4 338.3,97.5 338.6,97.7 339.0,97.2 339.4,96.9 339.7,97.0 340.1,96.9 340.4,96.9 340.8,97.4 341.1,97.1 341.5,97.1 341.8,96.6 342.1,96.9 342.5,97.0 342.8,97.4 343.1,97.6 343.5,97.1 343.8,96.9 344.1,96.4 344.5,96.8 344.8,96.4 345.1,96.1 345.4,96.0 345.8,96.0 346.1,96.3 346.4,96.3 346.7,96.7 347.0,96.8 347.3,96.8 347.6,96.7 347.9,96.3 348.2,96.1 348.6,95.8 348.9,95.5 349.2,95.4 349.5,95.2 349.8,95.6 350.0,95.5 350.3,95.2 350.6,95.6 350.9,96.0 351.2,96.2 351.5,95.8 351.8,95.4 352.1,95.3 352.4,95.5 352.7,95.1 352.9,95.3 353.2,95.1 353.5,94.9 353.8,94.6 354.1,94.4 354.3,94.5 354.6,94.5 354.9,94.4 355.2,94.7 355.4,94.4 355.7,94.1 356.0,93.8 356.2,93.5 356.5,93.8 356.8,93.6 357.0,93.3 357.3,93.2 357.5,93.0 357.8,93.2 358.1,92.8 358.3,92.5 358.6,92.6 358.8,92.5 359.1,92.3 359.3,92.1 359.6,91.8 359.8,91.7 360.1,92.0 360.3,92.1 360.6,92.2 360.8,92.4 361.1,92.4 361.3,92.5 361.6,92.7 361.8,93.0 362.1,92.9 362.3,92.6 362.5,92.4 362.8,92.6 363.0,92.9 363.3,93.2 363.5,92.9 363.7,93.0 364.0,93.2 364.2,92.9 364.4,92.6 364.7,92.9 364.9,92.6 365.1,92.5 365.3,92.3 365.6,92.5 365.8,92.7 366.0,92.7 366.2,92.9 366.5,92.7 366.7,93.0 366.9,93.1 367.1,93.0 367.4,93.2 367.6,93.1 367.8,92.8 368.0,93.0 368.2,93.1 368.5,92.9 368.7,93.1 368.9,92.9 369.1,93.1 369.3,93.0 369.5,92.9 369.7,92.9 369.9,92.8 370.2,92.7 370.4,92.8 370.6,92.8 370.8,93.0 371.0,93.0 371.2,93.0 371.4,93.0 371.6,92.7 371.8,92.9 372.0,92.6 372.2,92.9 372.4,92.8 372.6,92.9 372.8,92.8 373.0,92.6 373.2,92.7 373.4,93.0 373.6,92.7 373.8,92.6 374.0,92.8 374.2,92.7 374.4,92.4 374.6,92.3 374.8,92.3 375.0,92.6 375.2,92.6 375.4,92.6 375.6,92.5 375.8,92.3 376.0,92.4 376.1,92.3 376.3,92.3 376.5,92.3 376.7,92.2 376.9,92.0 377.1,91.7 377.3,91.6 377.5,91.8 377.6,92.0 377.8,91.7 378.0,91.8 378.2,91.7 378.4,91.7 378.6,91.7 378.7,91.5 378.9,91.4 379.1,91.3 379.3,91.2 379.5,91.4 379.6,91.6 379.8,91.7 380.0,91.8 380.2,91.7 380.4,91.6 380.5,91.5 380.7,91.3 380.9,91.5 381.1,91.3 381.2,91.3 381.4,91.0 381.6,91.1 381.7,91.1 381.9,91.1 382.1,91.1 382.3,91.3 382.4,91.3 382.6,91.3 382.8,91.5 382.9,91.6 383.1,91.3 383.3,91.1 383.4,91.3 383.6,91.3 383.8,91.4 383.9,91.3 384.1,91.4 384.3,91.4 384.4,91.5 384.6,91.5 384.8,91.3 384.9,91.2 385.1,91.3 385.3,91.4 385.4,91.4 385.6,91.3 385.7,91.5 385.9,91.3 386.1,91.4 386.2,91.5 386.4,91.5 386.5,91.4 386.7,91.6 386.9,91.5 387.0,91.5 387.2,91.5 387.3,91.3 387.5,91.1 387.7,91.0 387.8,90.8 388.0,90.6 388.1,90.4 388.3,90.4 388.4,90.2 388.6,90.1 388.7,90.3 388.9,90.3 389.0,90.3 389.2,90.3 389.3,90.4 389.5,90.3 389.6,90.4 389.8,90.2 389.9,90.2 390.1,90.4 390.2,90.6 390.4,90.5 390.5,90.7 390.7,90.5 390.8,90.3 391.0,90.4 391.1,90.3 391.3,90.1 391.4,90.3 391.6,90.4 391.7,90.2 391.9,90.1 392.0,89.9 392.2,90.0 392.3,90.0 392.4,90.1 392.6,90.3 392.7,90.2 392.9,90.3 393.0,90.2 393.2,90.4 393.3,90.5 393.4,90.4 393.6,90.5 393.7,90.6 393.9,90.5 394.0,90.3 394.1,90.1 394.3,90.3 394.4,90.1 394.6,90.0 394.7,89.9 394.8,89.8 395.0,89.6 395.1,89.6 395.2,89.5 395.4,89.7 395.5,89.6 395.7,89.8 395.8,89.8 395.9,90.0 396.1,90.1 396.2,90.3 396.3,90.4 396.5,90.3 396.6,90.4 396.7,90.3 396.9,90.3 397.0,90.2 397.1,90.0 397.3,89.9 397.4,90.0 397.5,90.0 397.7,90.1 397.8,90.0 397.9,89.9 398.1,89.8 398.2,89.6 398.3,89.6 398.4,89.8 398.6,89.7 398.7,89.6 398.8,89.5 399.0,89.3 399.1,89.4 399.2,89.4 399.3,89.2 399.5,89.4 399.6,89.2 399.7,89.3 399.9,89.3 400.0,89.4 400.1,89.6 400.2,89.8 400.4,89.7 400.5,89.9 400.6,90.0 400.7,89.9 400.9,89.8 401.0,89.7 401.1,89.6 401.2,89.5 401.4,89.5 401.5,89.5 401.6,89.6 401.7,89.7 401.8,89.6 402.0,89.7 402.1,89.8 402.2,89.9 402.3,90.1 402.5,90.1 402.6,90.0 402.7,90.1 402.8,90.0 402.9,89.9 403.1,90.1 403.2,90.0 403.3,89.9 403.4,90.1 403.5,90.2 403.7,90.4 403.8,90.3 403.9,90.2 404.0,90.2 404.1,90.3 404.2,90.2 404.4,90.3 404.5,90.1 404.6,90.2 404.7,90.1 404.8,90.0 404.9,90.0 405.1,90.1 405.2,90.0 405.3,90.1 405.4,89.9 405.5,89.9 405.6,89.9 405.8,89.8 405.9,89.8 406.0,89.9 406.1,90.1 406.2,90.0 406.3,90.1 406.4,90.0 406.5,90.0 406.7,90.0 406.8,90.0 406.9,89.9 407.0,90.0 407.1,90.1 407.2,90.2 407.3,90.1 407.4,90.2 407.6,90.3 407.7,90.4 407.8,90.3 407.9,90.4 408.0,90.4 408.1,90.4 408.2,90.3 408.3,90.4 408.4,90.4 408.5,90.3 408.7,90.3 408.8,90.3 408.9,90.2 409.0,90.1 409.1,90.2 409.2,90.1 409.3,90.0 409.4,90.0 409.5,90.0 409.6,90.1 409.7,90.2 409.8,90.3 409.9,90.4 410.1,90.6 410.2,90.6 410.3,90.6 410.4,90.5 410.5,90.6 410.6,90.7 410.7,90.7 410.8,90.7 410.9,90.7 411.0,90.7 411.1,90.8 411.2,90.7 411.3,90.7 411.4,90.7 411.5,90.6 411.6,90.7 411.7,90.8 411.8,90.8 411.9,90.6 412.0,90.5 412.1,90.6 412.2,90.7 412.4,90.6 412.5,90.8 412.6,90.7 412.7,90.8 412.8,90.7 412.9,90.8 413.0,90.7 413.1,90.5 413.2,90.6 413.3,90.5 413.4,90.6 413.5,90.5 413.6,90.4 413.7,90.3 413.8,90.5 413.9,90.4 414.0,90.3 414.1,90.3 414.2,90.3 414.3,90.2 414.4,90.3 414.5,90.4 414.6,90.3 414.7,90.2 414.8,90.2 414.9,90.2 415.0,90.1 415.1,90.1 415.1,90.0 415.2,90.0 415.3,90.0 415.4,90.1 415.5,90.2 415.6,90.2 415.7,90.1 415.8,90.1 415.9,90.1 416.0,90.1 416.1,90.2 416.2,90.3 416.3,90.5 416.4,90.5 416.5,90.5 416.6,90.6 416.7,90.6 416.8,90.7 416.9,90.7 417.0,90.7 417.1,90.8 417.2,91.0 417.3,90.8 417.3,90.8 417.4,90.7 417.5,90.8 417.6,90.7 417.7,90.7 417.8,90.6 417.9,90.5 418.0,90.7 418.1,90.6 418.2,90.5 418.3,90.6 418.4,90.7 418.5,90.8 418.6,90.9 418.7,91.0 418.7,91.0 418.8,91.0 418.9,91.1 419.0,91.1 419.1,91.0 419.2,90.9 419.3,90.9 419.4,90.8 419.5,90.7 419.6,90.8 419.7,90.9 419.7,90.8 419.8,91.0 419.9,90.9 420.0,91.0 420.1,91.1 420.2,91.2 420.3,91.2 420.4,91.2 420.5,91.2 420.5,91.2 420.6,91.2 420.7,91.2 420.8,91.2 420.9,91.2 421.0,91.1 421.1,91.1 421.2,91.2 421.3,91.3 421.3,91.3 421.4,91.4 421.5,91.3 421.6,91.4 421.7,91.3 421.8,91.3 421.9,91.2 422.0,91.1 422.0,91.2 422.1,91.1 422.2,91.2 422.3,91.2 422.4,91.2 422.5,91.2 422.6,91.3 422.6,91.4 422.7,91.4 422.8,91.4 422.9,91.3 423.0,91.3 423.1,91.3 423.2,91.4 423.2,91.2 423.3,91.3 423.4,91.4 423.5,91.5 423.6,91.6 423.7,91.7 423.8,91.7 423.8,91.8 423.9,91.7 424.0,91.7 424.1,91.7 424.2,91.7 424.3,91.6 424.3,91.6 424.4,91.8 424.5,91.9 424.6,91.9 424.7,92.0 424.8,91.9 424.8,92.0 424.9,92.1 425.0,92.0 425.1,91.9 425.2,91.8 425.2,91.8 425.3,91.9 425.4,91.9 425.5,92.0 425.6,91.9 425.7,92.0 425.7,91.9 425.8,91.8 425.9,91.9 426.0,91.8 426.1,91.9 426.1,92.0 426.2,91.9 426.3,91.8 426.4,91.7 426.5,91.8 426.5,91.9 426.6,92.0 426.7,91.9 426.8,92.0 426.9,92.0 426.9,91.9 427.0,92.0 427.1,92.0 427.2,92.0 427.3,92.1 427.3,92.0 427.4,92.1 427.5,92.1 427.6,92.1 427.7,92.2 427.7,92.1 427.8,92.1 427.9,92.0 428.0,92.0 428.1,92.1 428.1,92.1 428.2,92.2 428.3,92.2 428.4,92.2 428.4,92.3 428.5,92.4 428.6,92.3 428.7,92.3 428.8,92.3 428.8,92.2 428.9,92.3 429.0,92.2 429.1,92.3 429.1,92.3 429.2,92.2 429.3,92.3 429.4,92.3 429.4,92.3 429.5,92.4 429.6,92.5 429.7,92.5 429.8,92.4 429.8,92.5 429.9,92.5 430.0,92.5 430.1,92.5 430.1,92.4 430.2,92.5 430.3,92.4 430.4,92.3 430.4,92.4 430.5,92.4 430.6,92.5 430.7,92.4 430.7,92.5 430.8,92.4 430.9,92.5 431.0,92.5 431.0,92.6 431.1,92.6 431.2,92.6 431.3,92.6 431.3,92.5 431.4,92.4 431.5,92.3 431.5,92.3 431.6,92.4 431.7,92.3 431.8,92.3 431.8,92.2 431.9,92.3 432.0,92.2 432.1,92.2 432.1,92.2 432.2,92.3 432.3,92.3 432.4,92.3 432.4,92.4 432.5,92.4 432.6,92.4 432.6,92.3 432.7,92.4 432.8,92.5 432.9,92.5 432.9,92.4 433.0,92.4 433.1,92.3 433.1,92.3 433.2,92.3 433.3,92.3 433.4,92.3 433.4,92.3 433.5,92.3 433.6,92.3 433.7,92.2 433.7,92.2 433.8,92.2 433.9,92.1 433.9,92.1 434.0,92.0 434.1,92.1 434.1,92.1 434.2,92.1 434.3,92.1 434.4,92.1 434.4,92.0 434.5,92.1 434.6,92.1 434.6,92.1 434.7,92.0 434.8,92.1 434.8,92.1 434.9,92.2 435.0,92.2 435.1,92.1 435.1,92.1 435.2,92.1 435.3,92.1 435.3,92.1 435.4,92.0 435.5,92.0 435.5,91.9 435.6,91.9 435.7,91.8 435.7,91.9 435.8,92.0 435.9,92.1 436.0,92.0 436.0,92.1 436.1,92.0 436.2,92.1 436.2,92.0 436.3,92.1 436.4,92.0 436.4,92.0 436.5,92.0 436.6,91.9 436.6,91.9 436.7,91.8 436.8,91.8 436.8,91.8 436.9,91.8 437.0,91.8 437.0,91.9 437.1,91.9 437.2,92.0 437.2,92.1 437.3,92.0 437.4,91.9 437.4,92.0 437.5,91.9 437.6,91.9 437.6,91.9 437.7,91.9 437.8,91.9 437.8,92.0 437.9,92.0 438.0,92.0 438.0,91.9 438.1,92.0 438.2,92.0 438.2,92.0 438.3,92.0 438.4,91.9 438.4,91.8 438.5,91.7 438.6,91.8 438.6,91.8 438.7,91.8 438.8,91.8 438.8,91.8 438.9,91.9 439.0,92.0 439.0,92.0 439.1,92.0 439.1,92.0 439.2,92.0 439.3,92.0 439.3,91.9 439.4,91.9 439.5,91.9 439.5,91.8 439.6,91.7 439.7,91.7 439.7,91.8 439.8,91.8 439.9,91.9 439.9,91.8 440.0,91.9 440.0,92.0 440.1,91.9 440.2,92.0 440.2,92.0 440.3,92.0 440.4,92.0 440.4,92.0 440.5,92.1 440.6,92.2 440.6,92.2 440.7,92.1 440.7,92.2 440.8,92.3 440.9,92.3 440.9,92.2 441.0,92.1 441.1,92.1 441.1,92.2 441.2,92.2 441.2,92.2 441.3,92.1 441.4,92.0 441.4,92.1 441.5,92.1 441.6,92.0 441.6,92.0 441.7,92.1 441.7,92.2 441.8,92.3 441.9,92.3 441.9,92.3 442.0,92.3 442.1,92.3 442.1,92.2 442.2,92.2 442.2,92.3 442.3,92.3 442.4,92.3 442.4,92.4 442.5,92.4 442.5,92.4 442.6,92.3 442.7,92.4 442.7,92.4 442.8,92.4 442.9,92.4 442.9,92.5 443.0,92.4 443.0,92.4 443.1,92.4 443.2,92.3 443.2,92.2 443.3,92.3 443.3,92.3 443.4,92.2 443.5,92.3 443.5,92.3 443.6,92.2 443.6,92.3 443.7,92.3 443.8,92.4 443.8,92.3 443.9,92.4 443.9,92.4 444.0,92.4 444.1,92.4 444.1,92.4 444.2,92.3 444.2,92.3 444.3,92.2 444.4,92.1 444.4,92.1 444.5,92.1 444.5,92.1 444.6,92.1 444.6,92.1 444.7,92.0 444.8,92.0 444.8,92.0 444.9,92.1 444.9,92.1 445.0,92.1" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="250.0" y="198.0" font-size="11" text-anchor="middle" fill="currentColor">number of rolls (each mark ten times the last)</text>
</svg>
</div>

(The horizontal scale is stretched at the start so you can see the early swings: each labelled mark is ten times the
one before.) The average wanders a lot at first, then settles, more and more tightly, near the dashed line at 3.5.
Another run would wander differently, but it would settle near 3.5 too.

### Why it settles: Chebyshev's inequality

How unlikely is a value far from the mean? Here is a bound that works for **every** distribution.

**Chebyshev's inequality.** For any random variable with mean $\mu$ and variance $\sigma^2$, and any $c > 0$,

$$P\big(|X - \mu| \ge c\big) \le \frac{\sigma^2}{c^2}.$$

**Proof.** The variance is $\sigma^2 = \sum (x - \mu)^2 P(x)$, a sum of terms that are never negative. Throw away all
the terms with $|x - \mu| < c$; the sum can only get smaller. In each remaining term, $(x - \mu)^2 \ge c^2$. So

$$\sigma^2 \ge \sum_{|x - \mu| \ge c} (x - \mu)^2 P(x) \ge c^2 \sum_{|x - \mu| \ge c} P(x) = c^2\, P\big(|X - \mu| \ge c\big).$$

Divide by $c^2$. $\square$ (The same proof works for continuous variables with integrals.)

With $c = k\sigma$, it says at most $\tfrac{1}{k^2}$ of the probability lies $k$ or more standard deviations from the
mean: at most $\tfrac14$ beyond 2 standard deviations, at most $\tfrac19$ beyond 3. For a normal distribution the true
figures are much smaller (0.046 and 0.003), but Chebyshev's bound holds for **any** shape, which is what we need.

### The law of large numbers

Apply Chebyshev to $\bar X$, which has variance $\tfrac{\sigma^2}{n}$. For any small distance $\varepsilon > 0$
(Greek "epsilon"),

$$P\big(|\bar X - \mu| \ge \varepsilon\big) \le \frac{\sigma^2}{n\varepsilon^2}.$$

As $n$ grows, the right side goes to 0. So, however small a distance $\varepsilon$ you choose, the chance that the average
is further than $\varepsilon$ from $\mu$ can be made as small as you like by taking $n$ large enough. That is the
**(weak) law of large numbers**:

$$P\big(|\bar X - \mu| \ge \varepsilon\big) \to 0 \quad \text{as } n \to \infty.$$

This is the promise made back in level 3 ("relative frequency settles down") and in level 7 ("expected value is the
long-run average"), now proved. Applied to an indicator (1 if an event happens, 0 if not), $\bar X$ is the **relative
frequency** of the event and $\mu$ is its probability, so relative frequencies settle down to probabilities.

### What the law does **not** say

It does not say the die "evens out" by correcting itself. After ten rolls averaging 2.7, the die is not more likely to
roll high. The early shortfall is not cancelled; it is **diluted**. The first 10 rolls were 8 below the expected total
of 35. After 1000 rolls that same shortfall of 8, spread over 1000, moves the average by only 0.008. New rolls swamp
the old ones. This is why the law of large numbers and the gambler's fallacy of [level 5](../level-5/06-gamblers-fallacy.md) do not
contradict each other.

### The central limit theorem

The law of large numbers says where $\bar X$ ends up. The **central limit theorem** (CLT) describes the **shape** of
its wobbles along the way:

**For large $n$, the sample mean $\bar X$ of $n$ independent copies of any random variable with mean $\mu$ and standard
deviation $\sigma$ is approximately normal:**

$$\bar X \approx \operatorname{N}\!\left(\mu, \frac{\sigma^2}{n}\right), \qquad X_1 + \dots + X_n \approx \operatorname{N}(n\mu, n\sigma^2).$$

The original distribution can be flat, skewed or lumpy; it does not matter. Here are the **exact** distributions of the
average of 1, 2 and 5 dice:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 170" role="img" aria-label="Exact distributions of the average of 1, 2 and 5 dice: one die is flat, two dice make a triangle, five dice already look like a bell">
  <line x1="12" y1="125" x2="148" y2="125" stroke="currentColor" stroke-width="1.2"/>
  <rect x="14.27" y="35.0" width="18.13" height="90.0" fill="#eea66f"/>
  <rect x="36.93" y="35.0" width="18.13" height="90.0" fill="#eea66f"/>
  <rect x="59.60" y="35.0" width="18.13" height="90.0" fill="#eea66f"/>
  <rect x="82.27" y="35.0" width="18.13" height="90.0" fill="#eea66f"/>
  <rect x="104.93" y="35.0" width="18.13" height="90.0" fill="#eea66f"/>
  <rect x="127.60" y="35.0" width="18.13" height="90.0" fill="#eea66f"/>
  <text x="23.3" y="138.0" font-size="10" text-anchor="middle" fill="currentColor">1</text>
  <text x="136.7" y="138.0" font-size="10" text-anchor="middle" fill="currentColor">6</text>
  <text x="80.0" y="155.0" font-size="11" text-anchor="middle" fill="currentColor">average of 1 die</text>
  <line x1="164" y1="125" x2="300" y2="125" stroke="currentColor" stroke-width="1.2"/>
  <rect x="165.24" y="110.0" width="9.89" height="15.0" fill="#9cc9ea"/>
  <rect x="177.60" y="95.0" width="9.89" height="30.0" fill="#9cc9ea"/>
  <rect x="189.96" y="80.0" width="9.89" height="45.0" fill="#9cc9ea"/>
  <rect x="202.33" y="65.0" width="9.89" height="60.0" fill="#9cc9ea"/>
  <rect x="214.69" y="50.0" width="9.89" height="75.0" fill="#9cc9ea"/>
  <rect x="227.05" y="35.0" width="9.89" height="90.0" fill="#9cc9ea"/>
  <rect x="239.42" y="50.0" width="9.89" height="75.0" fill="#9cc9ea"/>
  <rect x="251.78" y="65.0" width="9.89" height="60.0" fill="#9cc9ea"/>
  <rect x="264.15" y="80.0" width="9.89" height="45.0" fill="#9cc9ea"/>
  <rect x="276.51" y="95.0" width="9.89" height="30.0" fill="#9cc9ea"/>
  <rect x="288.87" y="110.0" width="9.89" height="15.0" fill="#9cc9ea"/>
  <text x="170.2" y="138.0" font-size="10" text-anchor="middle" fill="currentColor">1</text>
  <text x="293.8" y="138.0" font-size="10" text-anchor="middle" fill="currentColor">6</text>
  <text x="232.0" y="155.0" font-size="11" text-anchor="middle" fill="currentColor">average of 2 dice</text>
  <line x1="316" y1="125" x2="452" y2="125" stroke="currentColor" stroke-width="1.2"/>
  <rect x="316.52" y="124.9" width="4.18" height="0.1" fill="#7ccf9a"/>
  <rect x="321.75" y="124.4" width="4.18" height="0.6" fill="#7ccf9a"/>
  <rect x="326.98" y="123.3" width="4.18" height="1.7" fill="#7ccf9a"/>
  <rect x="332.22" y="121.0" width="4.18" height="4.0" fill="#7ccf9a"/>
  <rect x="337.45" y="116.9" width="4.18" height="8.1" fill="#7ccf9a"/>
  <rect x="342.68" y="110.5" width="4.18" height="14.5" fill="#7ccf9a"/>
  <rect x="347.91" y="101.3" width="4.18" height="23.7" fill="#7ccf9a"/>
  <rect x="353.14" y="89.8" width="4.18" height="35.2" fill="#7ccf9a"/>
  <rect x="358.37" y="76.5" width="4.18" height="48.5" fill="#7ccf9a"/>
  <rect x="363.60" y="62.7" width="4.18" height="62.3" fill="#7ccf9a"/>
  <rect x="368.83" y="49.9" width="4.18" height="75.1" fill="#7ccf9a"/>
  <rect x="374.06" y="40.2" width="4.18" height="84.8" fill="#7ccf9a"/>
  <rect x="379.29" y="35.0" width="4.18" height="90.0" fill="#7ccf9a"/>
  <rect x="384.52" y="35.0" width="4.18" height="90.0" fill="#7ccf9a"/>
  <rect x="389.75" y="40.2" width="4.18" height="84.8" fill="#7ccf9a"/>
  <rect x="394.98" y="49.9" width="4.18" height="75.1" fill="#7ccf9a"/>
  <rect x="400.22" y="62.7" width="4.18" height="62.3" fill="#7ccf9a"/>
  <rect x="405.45" y="76.5" width="4.18" height="48.5" fill="#7ccf9a"/>
  <rect x="410.68" y="89.8" width="4.18" height="35.2" fill="#7ccf9a"/>
  <rect x="415.91" y="101.3" width="4.18" height="23.7" fill="#7ccf9a"/>
  <rect x="421.14" y="110.5" width="4.18" height="14.5" fill="#7ccf9a"/>
  <rect x="426.37" y="116.9" width="4.18" height="8.1" fill="#7ccf9a"/>
  <rect x="431.60" y="121.0" width="4.18" height="4.0" fill="#7ccf9a"/>
  <rect x="436.83" y="123.3" width="4.18" height="1.7" fill="#7ccf9a"/>
  <rect x="442.06" y="124.4" width="4.18" height="0.6" fill="#7ccf9a"/>
  <rect x="447.29" y="124.9" width="4.18" height="0.1" fill="#7ccf9a"/>
  <text x="318.6" y="138.0" font-size="10" text-anchor="middle" fill="currentColor">1</text>
  <text x="449.4" y="138.0" font-size="10" text-anchor="middle" fill="currentColor">6</text>
  <text x="384.0" y="155.0" font-size="11" text-anchor="middle" fill="currentColor">average of 5 dice</text>
</svg>
</div>

One die is flat; two dice make a triangle (lesson 1 of level 7); five dice already look like a bell. The proof needs
tools beyond this level (it is met in university probability courses), but the pictures make it believable,
and you can test it yourself by simulation.

This is why the normal curve is everywhere. A measurement error is the sum of many small independent disturbances. A
binomial count is a sum of indicators (lesson 4). A person's height results from many genetic and environmental
contributions. Whenever a quantity is a sum of many small independent parts, the CLT says to expect a bell.

How large must $n$ be? For a symmetric starting distribution like a die, $n = 5$ to 10 already looks good; for a very
skewed one (like the geometric) you may need 30, 50 or more.

<figure class="play" data-play="galton"><span class="ai-tag">AI-created</span><figcaption><b>Drop the balls.</b> A Galton board: at each of 12 pins a ball goes left or right, like a coin toss. The pile takes the bell shape of the normal curve (dashed), as the central limit theorem says.</figcaption></figure>

## Worked examples

**1. The average of 100 dice.** Find $P(3.3 \le \bar X \le 3.7)$.

$E(\bar X) = 3.5$ and $\operatorname{SD}(\bar X) = \tfrac{1.708}{10} = 0.1708$. By the CLT,
$z = \tfrac{0.2}{0.1708} \approx 1.17$, so $P \approx \Phi(1.17) - \Phi(-1.17) \approx 0.76$.

(More precisely, the **sum** is a whole number from 330 to 370, so with the continuity correction of lesson 4 the
bounds are 329.5 and 370.5 for a sum with standard deviation 17.08: $z = \pm 1.20$, giving 0.770. The exact answer,
from all $6^{100}$ outcomes by computer, is 0.770.)

**2. The sum of 30 dice.** Chance the total is at least 120? The sum has mean $30 \times 3.5 = 105$ and standard
deviation $\sqrt{30 \times \tfrac{35}{12}} = \sqrt{87.5} \approx 9.35$. With continuity correction,
$z = \tfrac{119.5 - 105}{9.35} \approx 1.55$, so $P \approx 1 - 0.9394 = 0.061$. (Exact: 0.0607.)

**3. Chebyshev versus the CLT.** How likely is the average of 1000 die rolls to be within 0.1 of 3.5?

- Chebyshev guarantees: $P(|\bar X - 3.5| \ge 0.1) \le \tfrac{35/12}{1000 \times 0.01} \approx 0.29$, so at least
  71% within 0.1.
- The CLT estimates: $\operatorname{SD}(\bar X) = \tfrac{1.708}{\sqrt{1000}} \approx 0.054$, $z = \tfrac{0.1}{0.054} \approx 1.85$, so
  about 94% within 0.1.

Chebyshev is a guarantee that holds for every distribution, so it is cautious; the CLT is an approximation that uses
the bell shape, so it is sharper.

**4. A lift.** A lift's safe limit is 1300 kg. Suppose people's masses have mean 75 kg and standard deviation 12 kg
(no need to assume a normal shape). Sixteen people get in. Their total has mean $16 \times 75 = 1200$ kg and standard
deviation $\sqrt{16} \times 12 = 48$ kg, and by the CLT it is roughly normal. $P(\text{total} > 1300) \approx P(Z > 2.08) \approx 0.019$,
about 1 in 50.

## Try it

1. A random variable has $\mu = 10$ and $\sigma = 4$. Find the mean and standard deviation of the average of 25
   independent copies, and of 400 copies.
2. Use Chebyshev to give a bound on the chance that any random variable is 3 or more standard deviations from its mean.
   What is the chance for a normal distribution?
3. A fair coin is tossed $n$ times. Use Chebyshev to find an $n$ that guarantees the proportion of heads is within 0.05
   of 0.5 with probability at least 0.95. (The proportion has variance $\tfrac{1}{4n}$.)
4. For the coin in question 3, use the CLT instead. How many tosses does it suggest?
5. After 10 coin tosses you have 8 heads. Explain why, after 10 000 tosses, the proportion of heads is still expected to
   be very close to 0.5, even though the coin does not "make up" for the extra heads.
6. Waiting times for a bus are uniform on 0 to 12 minutes (lesson 2). You wait for the bus on 36 different days. Find the
   approximate chance that your average wait is more than 7 minutes.
7. Explain why the sum of 2 dice is not normal but the sum of 50 dice is very nearly normal.
8. A casino's roulette bet has expected profit $-\tfrac{1}{37}$ dollar for the player and standard deviation about 1 dollar
   per 1-dollar bet. In one night players make 100 000 such bets. Estimate the casino's mean profit and the chance it
   loses money that night.

??? note "Answers"
    1. 25 copies: mean 10, SD $\tfrac{4}{5} = 0.8$. 400 copies: mean 10, SD $\tfrac{4}{20} = 0.2$.
    2. At most $\tfrac{1}{9} \approx 0.111$. For a normal it is about 0.0027, far less.
    3. $P(|\bar X - 0.5| \ge 0.05) \le \tfrac{1/(4n)}{0.05^2} = \tfrac{100}{n}$. For this to be at most 0.05 we need
       $n \ge 2000$.
    4. $\operatorname{SD} = \tfrac{1}{2\sqrt n}$, and we want $1.96 \times \tfrac{1}{2\sqrt n} \le 0.05$, so
       $\sqrt n \ge 19.6$ and $n \ge 384.16$: about 385 tosses. Much fewer than Chebyshev's 2000, because the CLT uses
       the bell shape.
    5. The extra 3 heads (8 instead of the expected 5) stay. But in 10 000 tosses they are diluted: they shift the
       proportion by only $\tfrac{3}{10\,000} = 0.0003$, while the other 9990 tosses give a proportion close to 0.5 by the
       law of large numbers.
    6. One wait: $\mu = 6$, $\sigma = \tfrac{12}{\sqrt{12}} = \sqrt{12} \approx 3.46$. The average of 36:
       SD $= \tfrac{3.46}{6} \approx 0.577$. $z = \tfrac{7 - 6}{0.577} \approx 1.73$, $P \approx 0.042$.
    7. Two dice give a triangle with only 11 values, far from a smooth bell. Fifty dice give a sum of 50 independent
       parts, and the CLT says such sums are close to normal; the exact distribution, drawn, is indistinguishable from a
       bell at ordinary scales.
    8. Mean player total: $100\,000 \times \left(-\tfrac{1}{37}\right) \approx -2703$ dollars, so the casino expects to win
       about 2703 dollars. SD of the total: $\sqrt{100\,000} \times 1 \approx 316$ dollars. The casino loses if the
       players' total is above 0: $z = \tfrac{2703}{316} \approx 8.5$, a probability so small it is effectively 0. The
       law of large numbers is the casino's business model.

## Common mistake

**Thinking the law of large numbers works by correction.** Chance has no memory. Averages settle because new results
swamp old ones, not because the past is balanced out.

**Applying the CLT to a single observation.** The CLT is about **sums and averages** of many independent parts. One
roll of a die is still uniform, however many dice you rolled yesterday; one skewed measurement is still skewed.

## Where it leads

- Back: [The normal approximation to the binomial](04-normal-approximation.md) · Next: [Random walks and Markov chains](06-random-walks-markov.md)
- [Level 8 page](index.md) · [Probability topic page](../index.md)
- Limits, and what "as $n \to \infty$" means precisely: [U of T MAT137, unit 11](../../../uoft/MAT137/unit11.md)
  (sequences).
- Sample means, standard errors and confidence intervals: [Statistics](../../statistics/index.md).
