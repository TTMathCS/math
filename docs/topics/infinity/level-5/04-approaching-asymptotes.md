---
title: "Approaching asymptotes"
---

# Approaching asymptotes

*Infinity and strange math · level 5, lesson 4 of 6*

## A question to start

Can a curve get closer and closer to a straight line, forever, without ever touching it?

Yes, and you will draw one in a minute. Here is the harder question: if a curve and a line get closer and closer
forever, is it true that the curve can **never** touch the line? Many textbooks used to say so. They were wrong, and
this lesson shows a curve that crosses the very line it is creeping towards.

## The idea

### The graph of y = 1/x

Take the rule $y = \dfrac1x$: for each number $x$, the height $y$ is 1 divided by $x$. Make a table, using negative
$x$ as well as positive:

| $x$ | $-4$ | $-2$ | $-1$ | $-\frac12$ | $\frac12$ | $1$ | $2$ | $4$ | $10$ | $100$ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $y = \frac1x$ | $-\frac14$ | $-\frac12$ | $-1$ | $-2$ | $2$ | $1$ | $\frac12$ | $\frac14$ | $\frac1{10}$ | $\frac1{100}$ |

There is no entry for $x = 0$, because $1 \div 0$ has no answer ([lesson 3](03-infinity-not-a-number.md)). Plot the
points and join them smoothly:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 260" role="img" aria-label="The graph of y = 1 over x: two curved branches, one in the top right and one in the bottom left; each hugs the x-axis far out and hugs the y-axis near the middle, without touching either axis">
  <line x1="20.0" y1="130.0" x2="440.0" y2="130.0" stroke="currentColor" stroke-width="1"/>
  <line x1="230.0" y1="10.0" x2="230.0" y2="250.0" stroke="currentColor" stroke-width="1"/>
  <path d="M 240.2 9.3 L 240.8 17.1 L 241.6 23.9 L 242.2 30.0 L 242.9 35.4 L 243.7 40.3 L 244.3 44.6 L 245.1 48.6 L 245.8 52.2 L 246.4 55.5 L 247.2 58.6 L 247.8 61.4 L 248.6 64.0 L 249.2 66.4 L 249.9 68.6 L 250.7 70.7 L 251.3 72.6 L 252.1 74.4 L 252.8 76.2 L 253.4 77.8 L 254.2 79.3 L 254.8 80.7 L 255.6 82.1 L 256.2 83.3 L 256.9 84.5 L 257.6 85.7 L 258.4 86.8 L 259.1 87.8 L 259.8 88.8 L 260.4 89.8 L 261.1 90.7 L 261.9 91.5 L 262.6 92.4 L 263.2 93.2 L 263.9 93.9 L 264.6 94.6 L 265.4 95.3 L 266.1 96.0 L 266.8 96.7 L 267.4 97.3 L 268.1 97.9 L 268.9 98.5 L 269.6 99.0 L 270.2 99.6 L 270.9 100.1 L 271.6 100.6 L 272.4 101.1 L 273.1 101.5 L 273.8 102.0 L 274.4 102.4 L 275.1 102.9 L 275.9 103.3 L 276.6 103.7 L 277.2 104.1 L 277.9 104.5 L 278.6 104.8 L 279.4 105.2 L 280.1 105.5 L 280.8 105.9 L 281.4 106.2 L 282.1 106.5 L 282.9 106.8 L 283.6 107.1 L 284.2 107.4 L 284.9 107.7 L 285.6 108.0 L 286.4 108.3 L 287.1 108.5 L 287.8 108.8 L 288.4 109.0 L 289.1 109.3 L 289.9 109.5 L 290.6 109.8 L 291.2 110.0 L 291.9 110.2 L 292.6 110.4 L 293.4 110.7 L 294.1 110.9 L 294.8 111.1 L 295.4 111.3 L 296.1 111.5 L 296.9 111.7 L 297.6 111.9 L 298.2 112.1 L 298.9 112.2 L 299.6 112.4 L 300.4 112.6 L 301.1 112.8 L 301.8 112.9 L 302.4 113.1 L 303.1 113.3 L 303.9 113.4 L 304.6 113.6 L 305.2 113.7 L 305.9 113.9 L 306.6 114.0 L 307.4 114.2 L 308.1 114.3 L 308.8 114.4 L 309.4 114.6 L 310.1 114.7 L 310.9 114.8 L 311.6 115.0 L 312.2 115.1 L 312.9 115.2 L 313.6 115.4 L 314.4 115.5 L 315.1 115.6 L 315.8 115.7 L 316.4 115.8 L 317.1 115.9 L 317.9 116.1 L 318.6 116.2 L 319.2 116.3 L 320.0 116.4 L 320.6 116.5 L 321.4 116.6 L 322.1 116.7 L 322.8 116.8 L 323.4 116.9 L 324.1 117.0 L 324.9 117.1 L 325.6 117.2 L 326.2 117.3 L 326.9 117.4 L 327.6 117.5 L 328.4 117.5 L 329.1 117.6 L 329.8 117.7 L 330.4 117.8 L 331.1 117.9 L 331.9 118.0 L 332.6 118.1 L 333.2 118.1 L 333.9 118.2 L 334.6 118.3 L 335.4 118.4 L 336.1 118.4 L 336.8 118.5 L 337.5 118.6 L 338.1 118.7 L 338.9 118.7 L 339.6 118.8 L 340.2 118.9 L 340.9 119.0 L 341.6 119.0 L 342.4 119.1 L 343.1 119.2 L 343.8 119.2 L 344.4 119.3 L 345.1 119.4 L 345.9 119.4 L 346.6 119.5 L 347.2 119.6 L 347.9 119.6 L 348.6 119.7 L 349.4 119.7 L 350.1 119.8 L 350.8 119.9 L 351.4 119.9 L 352.1 120.0 L 352.9 120.0 L 353.6 120.1 L 354.2 120.1 L 355.0 120.2 L 355.6 120.3 L 356.4 120.3 L 357.1 120.4 L 357.8 120.4 L 358.4 120.5 L 359.1 120.5 L 359.9 120.6 L 360.6 120.6 L 361.2 120.7 L 361.9 120.7 L 362.6 120.8 L 363.4 120.8 L 364.1 120.9 L 364.8 120.9 L 365.5 121.0 L 366.1 121.0 L 366.9 121.0 L 367.6 121.1 L 368.2 121.1 L 369.0 121.2 L 369.6 121.2 L 370.4 121.3 L 371.1 121.3 L 371.8 121.4 L 372.5 121.4 L 373.1 121.4 L 373.9 121.5 L 374.5 121.5 L 375.2 121.6 L 375.9 121.6 L 376.6 121.6 L 377.4 121.7 L 378.0 121.7 L 378.8 121.8 L 379.4 121.8 L 380.1 121.8 L 380.9 121.9 L 381.6 121.9 L 382.2 122.0 L 383.0 122.0 L 383.6 122.0 L 384.4 122.1 L 385.0 122.1 L 385.8 122.1 L 386.4 122.2 L 387.1 122.2 L 387.9 122.2 L 388.6 122.3 L 389.2 122.3 L 390.0 122.3 L 390.6 122.4 L 391.4 122.4 L 392.0 122.4 L 392.8 122.5 L 393.4 122.5 L 394.1 122.5 L 394.9 122.6 L 395.6 122.6 L 396.2 122.6 L 397.0 122.7 L 397.6 122.7 L 398.4 122.7 L 399.1 122.8 L 399.8 122.8 L 400.5 122.8 L 401.2 122.8 L 401.9 122.9 L 402.5 122.9 L 403.2 122.9 L 403.9 123.0 L 404.6 123.0 L 405.4 123.0 L 406.1 123.0 L 406.8 123.1 L 407.5 123.1 L 408.1 123.1 L 408.9 123.2 L 409.5 123.2 L 410.2 123.2 L 410.9 123.2 L 411.6 123.3 L 412.4 123.3 L 413.1 123.3 L 413.8 123.3 L 414.5 123.4 L 415.1 123.4 L 415.9 123.4 L 416.6 123.4 L 417.2 123.5 L 418.0 123.5 L 418.7 123.5 L 419.4 123.5 L 420.0 123.6 L 420.8 123.6 L 421.4 123.6 L 422.1 123.6 L 422.9 123.6 L 423.6 123.7 L 424.2 123.7 L 425.0 123.7 L 425.6 123.7 L 426.4 123.8 L 427.0 123.8 L 427.8 123.8 L 428.4 123.8 L 429.1 123.8 L 429.9 123.9 L 430.6 123.9 L 431.2 123.9 L 432.0 123.9 L 432.6 124.0 L 433.4 124.0 L 434.1 124.0 L 434.8 124.0 L 435.5 124.0 L 436.2 124.1 L 436.9 124.1 L 437.5 124.1 L 438.2 124.1 L 438.9 124.1 L 439.6 124.2" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <path d="M 219.8 250.7 L 219.2 242.9 L 218.4 236.1 L 217.8 230.0 L 217.1 224.6 L 216.3 219.7 L 215.7 215.4 L 214.9 211.4 L 214.2 207.8 L 213.6 204.5 L 212.8 201.4 L 212.2 198.6 L 211.4 196.0 L 210.8 193.6 L 210.1 191.4 L 209.3 189.3 L 208.7 187.4 L 207.9 185.6 L 207.2 183.8 L 206.6 182.2 L 205.8 180.7 L 205.2 179.3 L 204.4 177.9 L 203.8 176.7 L 203.1 175.5 L 202.4 174.3 L 201.6 173.2 L 200.9 172.2 L 200.2 171.2 L 199.6 170.2 L 198.9 169.3 L 198.1 168.5 L 197.4 167.6 L 196.8 166.8 L 196.1 166.1 L 195.4 165.4 L 194.6 164.7 L 193.9 164.0 L 193.2 163.3 L 192.6 162.7 L 191.9 162.1 L 191.1 161.5 L 190.4 161.0 L 189.8 160.4 L 189.1 159.9 L 188.4 159.4 L 187.6 158.9 L 186.9 158.5 L 186.2 158.0 L 185.6 157.6 L 184.9 157.1 L 184.1 156.7 L 183.4 156.3 L 182.8 155.9 L 182.1 155.5 L 181.4 155.2 L 180.6 154.8 L 179.9 154.5 L 179.2 154.1 L 178.6 153.8 L 177.9 153.5 L 177.1 153.2 L 176.4 152.9 L 175.8 152.6 L 175.1 152.3 L 174.4 152.0 L 173.6 151.7 L 172.9 151.5 L 172.2 151.2 L 171.6 151.0 L 170.9 150.7 L 170.1 150.5 L 169.4 150.2 L 168.8 150.0 L 168.1 149.8 L 167.4 149.6 L 166.6 149.3 L 165.9 149.1 L 165.2 148.9 L 164.6 148.7 L 163.9 148.5 L 163.1 148.3 L 162.4 148.1 L 161.8 147.9 L 161.1 147.8 L 160.4 147.6 L 159.6 147.4 L 158.9 147.2 L 158.2 147.1 L 157.6 146.9 L 156.9 146.7 L 156.1 146.6 L 155.4 146.4 L 154.8 146.3 L 154.1 146.1 L 153.4 146.0 L 152.6 145.8 L 151.9 145.7 L 151.2 145.6 L 150.6 145.4 L 149.9 145.3 L 149.1 145.2 L 148.4 145.0 L 147.8 144.9 L 147.1 144.8 L 146.4 144.6 L 145.6 144.5 L 144.9 144.4 L 144.2 144.3 L 143.6 144.2 L 142.9 144.1 L 142.1 143.9 L 141.4 143.8 L 140.8 143.7 L 140.0 143.6 L 139.4 143.5 L 138.6 143.4 L 137.9 143.3 L 137.2 143.2 L 136.6 143.1 L 135.9 143.0 L 135.1 142.9 L 134.4 142.8 L 133.8 142.7 L 133.1 142.6 L 132.4 142.5 L 131.6 142.5 L 130.9 142.4 L 130.2 142.3 L 129.6 142.2 L 128.9 142.1 L 128.1 142.0 L 127.4 141.9 L 126.8 141.9 L 126.1 141.8 L 125.4 141.7 L 124.6 141.6 L 123.9 141.6 L 123.2 141.5 L 122.5 141.4 L 121.9 141.3 L 121.1 141.3 L 120.4 141.2 L 119.8 141.1 L 119.1 141.0 L 118.4 141.0 L 117.6 140.9 L 116.9 140.8 L 116.2 140.8 L 115.6 140.7 L 114.9 140.6 L 114.1 140.6 L 113.4 140.5 L 112.8 140.4 L 112.1 140.4 L 111.4 140.3 L 110.6 140.3 L 109.9 140.2 L 109.2 140.1 L 108.6 140.1 L 107.9 140.0 L 107.1 140.0 L 106.4 139.9 L 105.8 139.9 L 105.0 139.8 L 104.4 139.7 L 103.6 139.7 L 102.9 139.6 L 102.2 139.6 L 101.6 139.5 L 100.9 139.5 L 100.1 139.4 L 99.4 139.4 L 98.8 139.3 L 98.1 139.3 L 97.4 139.2 L 96.6 139.2 L 95.9 139.1 L 95.2 139.1 L 94.5 139.0 L 93.9 139.0 L 93.1 139.0 L 92.4 138.9 L 91.8 138.9 L 91.0 138.8 L 90.4 138.8 L 89.6 138.7 L 88.9 138.7 L 88.2 138.6 L 87.5 138.6 L 86.9 138.6 L 86.1 138.5 L 85.5 138.5 L 84.8 138.4 L 84.1 138.4 L 83.4 138.4 L 82.6 138.3 L 82.0 138.3 L 81.2 138.2 L 80.6 138.2 L 79.9 138.2 L 79.1 138.1 L 78.4 138.1 L 77.8 138.0 L 77.0 138.0 L 76.4 138.0 L 75.6 137.9 L 75.0 137.9 L 74.2 137.9 L 73.6 137.8 L 72.9 137.8 L 72.1 137.8 L 71.4 137.7 L 70.8 137.7 L 70.0 137.7 L 69.4 137.6 L 68.6 137.6 L 68.0 137.6 L 67.2 137.5 L 66.6 137.5 L 65.9 137.5 L 65.1 137.4 L 64.4 137.4 L 63.8 137.4 L 63.0 137.3 L 62.4 137.3 L 61.6 137.3 L 60.9 137.2 L 60.2 137.2 L 59.5 137.2 L 58.8 137.2 L 58.1 137.1 L 57.5 137.1 L 56.8 137.1 L 56.1 137.0 L 55.4 137.0 L 54.6 137.0 L 53.9 137.0 L 53.2 136.9 L 52.5 136.9 L 51.9 136.9 L 51.1 136.8 L 50.5 136.8 L 49.8 136.8 L 49.1 136.8 L 48.4 136.7 L 47.6 136.7 L 46.9 136.7 L 46.2 136.7 L 45.5 136.6 L 44.9 136.6 L 44.1 136.6 L 43.4 136.6 L 42.8 136.5 L 42.0 136.5 L 41.3 136.5 L 40.6 136.5 L 40.0 136.4 L 39.2 136.4 L 38.6 136.4 L 37.9 136.4 L 37.1 136.4 L 36.4 136.3 L 35.8 136.3 L 35.0 136.3 L 34.4 136.3 L 33.6 136.2 L 33.0 136.2 L 32.2 136.2 L 31.6 136.2 L 30.9 136.2 L 30.1 136.1 L 29.4 136.1 L 28.8 136.1 L 28.0 136.1 L 27.4 136.0 L 26.6 136.0 L 25.9 136.0 L 25.2 136.0 L 24.5 136.0 L 23.8 135.9 L 23.1 135.9 L 22.5 135.9 L 21.8 135.9 L 21.1 135.9 L 20.4 135.8" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="55.0" y1="127.0" x2="55.0" y2="133.0" stroke="currentColor" stroke-width="1"/>
  <text x="55.0" y="146.0" font-size="10" text-anchor="middle" fill="currentColor">−5</text>
  <line x1="90.0" y1="127.0" x2="90.0" y2="133.0" stroke="currentColor" stroke-width="1"/>
  <text x="90.0" y="146.0" font-size="10" text-anchor="middle" fill="currentColor">−4</text>
  <line x1="125.0" y1="127.0" x2="125.0" y2="133.0" stroke="currentColor" stroke-width="1"/>
  <text x="125.0" y="146.0" font-size="10" text-anchor="middle" fill="currentColor">−3</text>
  <line x1="160.0" y1="127.0" x2="160.0" y2="133.0" stroke="currentColor" stroke-width="1"/>
  <text x="160.0" y="146.0" font-size="10" text-anchor="middle" fill="currentColor">−2</text>
  <line x1="195.0" y1="127.0" x2="195.0" y2="133.0" stroke="currentColor" stroke-width="1"/>
  <text x="195.0" y="146.0" font-size="10" text-anchor="middle" fill="currentColor">−1</text>
  <line x1="265.0" y1="127.0" x2="265.0" y2="133.0" stroke="currentColor" stroke-width="1"/>
  <text x="265.0" y="146.0" font-size="10" text-anchor="middle" fill="currentColor">1</text>
  <line x1="300.0" y1="127.0" x2="300.0" y2="133.0" stroke="currentColor" stroke-width="1"/>
  <text x="300.0" y="146.0" font-size="10" text-anchor="middle" fill="currentColor">2</text>
  <line x1="335.0" y1="127.0" x2="335.0" y2="133.0" stroke="currentColor" stroke-width="1"/>
  <text x="335.0" y="146.0" font-size="10" text-anchor="middle" fill="currentColor">3</text>
  <line x1="370.0" y1="127.0" x2="370.0" y2="133.0" stroke="currentColor" stroke-width="1"/>
  <text x="370.0" y="146.0" font-size="10" text-anchor="middle" fill="currentColor">4</text>
  <line x1="405.0" y1="127.0" x2="405.0" y2="133.0" stroke="currentColor" stroke-width="1"/>
  <text x="405.0" y="146.0" font-size="10" text-anchor="middle" fill="currentColor">5</text>
  <line x1="227.0" y1="235.0" x2="233.0" y2="235.0" stroke="currentColor" stroke-width="1"/>
  <text x="223.0" y="239.0" font-size="10" text-anchor="end" fill="currentColor">−3</text>
  <line x1="227.0" y1="200.0" x2="233.0" y2="200.0" stroke="currentColor" stroke-width="1"/>
  <text x="223.0" y="204.0" font-size="10" text-anchor="end" fill="currentColor">−2</text>
  <line x1="227.0" y1="165.0" x2="233.0" y2="165.0" stroke="currentColor" stroke-width="1"/>
  <text x="223.0" y="169.0" font-size="10" text-anchor="end" fill="currentColor">−1</text>
  <line x1="227.0" y1="95.0" x2="233.0" y2="95.0" stroke="currentColor" stroke-width="1"/>
  <text x="223.0" y="99.0" font-size="10" text-anchor="end" fill="currentColor">1</text>
  <line x1="227.0" y1="60.0" x2="233.0" y2="60.0" stroke="currentColor" stroke-width="1"/>
  <text x="223.0" y="64.0" font-size="10" text-anchor="end" fill="currentColor">2</text>
  <line x1="227.0" y1="25.0" x2="233.0" y2="25.0" stroke="currentColor" stroke-width="1"/>
  <text x="223.0" y="29.0" font-size="10" text-anchor="end" fill="currentColor">3</text>
  <text x="387.5" y="112.2" font-size="13" text-anchor="middle" fill="currentColor">y = 1/x</text>
  <circle cx="265.0" cy="95.0" r="3.5" fill="#9cc9ea"/>
  <text x="273.0" y="89.0" font-size="11" text-anchor="start" fill="currentColor">(1, 1)</text>
</svg>
</div>

The graph has two separate pieces, called **branches**, one in the top right and one in the bottom left. This curve
is called a **hyperbola**. Look at what each branch does at its two ends.

### Far out: getting close to the x-axis

As $x$ grows (10, 100, 1000, ...), $\dfrac1x$ shrinks (0.1, 0.01, 0.001, ...). This is the sequence $\frac1n$ from
[lesson 1](01-settling-sequences.md) again, except that $x$ can be any number, not just a whole one. The curve gets
as close as you like to the $x$-axis, the line $y = 0$, and stays that close. In limit language:

$$\frac1x \to 0 \quad\text{as}\quad x \to \infty.$$

On the left, as $x$ becomes very negative ($-10$, $-100$, ...), $\dfrac1x$ is a tiny negative number, so the left
branch hugs the $x$-axis from **below**.

Does the curve ever touch the $x$-axis? That would need $\dfrac1x = 0$, so $1 = 0 \times x = 0$. Impossible. So
**this** curve never touches the line.

### Near zero: shooting up the y-axis

Now let $x$ shrink towards 0 from the positive side: $x = 0.1, 0.01, 0.001$ give $y = 10, 100, 1000$. The curve
shoots upwards, getting as close as you like to the $y$-axis (the line $x = 0$) while climbing past every height. From
the negative side, $x = -0.1, -0.01, -0.001$ give $y = -10, -100, -1000$: the left branch plunges down.

$$\frac1x \to \infty \text{ as } x \to 0 \text{ from the right}, \qquad \frac1x \to -\infty \text{ as } x \to 0 \text{ from the left}.$$

### What an asymptote is

A straight line is an **asymptote** of a curve if the curve gets as close as you like to the line, and stays close,
as the curve heads off far away along the line. The word comes from Greek, meaning roughly "not falling together".

- The $x$-axis ($y = 0$) is a **horizontal asymptote** of $y = \frac1x$: the curve approaches it far to the right and
  far to the left.
- The $y$-axis ($x = 0$) is a **vertical asymptote**: the curve approaches it as it shoots up and down near $x = 0$.

Notice the names of the lines. A horizontal line has an equation of the form $y = c$, for some number $c$; a
vertical line has the form $x = c$. Mixing them up is very common.

### Moving the asymptotes

Change the rule a little, and the asymptotes move.

- $y = 2 + \dfrac1x$ is the same curve lifted up by 2. Far out, $\frac1x$ shrinks to 0, so $y$ approaches 2: the
  horizontal asymptote is $y = 2$. The vertical one is still $x = 0$.
- $y = \dfrac{1}{x - 3}$ is the same curve slid 3 to the right. The trouble spot is where the bottom is zero, at
  $x = 3$, so the vertical asymptote is $x = 3$. Far out, $y$ still approaches 0.
- $y = 2 + \dfrac{1}{x - 3}$ does both: asymptotes $x = 3$ and $y = 2$.

To find a **vertical** asymptote, look for where you would divide by zero. To find a **horizontal** one, ask what $y$
settles to as $x$ grows huge.

### A curve that crosses its asymptote

Now the surprise. Take

$$y = \frac{x - 2}{x^2}.$$

Far out it settles to 0, because we can split it: $\dfrac{x - 2}{x^2} = \dfrac{x}{x^2} - \dfrac{2}{x^2} = \dfrac1x - \dfrac{2}{x^2}$,
and both parts shrink to 0. So $y = 0$ is a horizontal asymptote. But at $x = 2$ the top is zero,
so $y = 0$ exactly: **the curve is on its asymptote**.

| $x$ | 2 | 3 | 4 | 5 | 10 | 100 | 1000 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $y$ | 0 | 0.111... | 0.125 | 0.12 | 0.08 | 0.0098 | 0.000998 |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 210" role="img" aria-label="The graph of y = (x − 2) over x squared for x from about 1.6 to 20: it rises from below the x-axis, crosses the axis at x = 2, peaks at height 0.125 at x = 4, then sinks back towards the axis without reaching it again">
  <line x1="40.0" y1="110.0" x2="440.0" y2="110.0" stroke="currentColor" stroke-width="1"/>
  <line x1="40.0" y1="20.0" x2="40.0" y2="200.0" stroke="currentColor" stroke-width="1"/>
  <path d="M 72.4 196.9 L 72.8 190.3 L 73.2 184.0 L 73.6 178.0 L 74.0 172.3 L 74.4 166.8 L 74.8 161.5 L 75.2 156.5 L 75.6 151.7 L 76.0 147.0 L 76.4 142.6 L 76.8 138.4 L 77.2 134.3 L 77.6 130.4 L 78.0 126.6 L 78.4 123.0 L 78.8 119.6 L 79.2 116.2 L 79.6 113.1 L 80.0 110.0 L 80.4 107.1 L 80.8 104.2 L 81.2 101.5 L 81.6 98.9 L 82.0 96.4 L 82.4 94.0 L 82.8 91.7 L 83.2 89.4 L 83.6 87.3 L 84.0 85.2 L 84.4 83.2 L 84.8 81.3 L 85.2 79.5 L 85.6 77.7 L 86.0 76.0 L 86.4 74.3 L 86.8 72.7 L 87.2 71.2 L 87.6 69.7 L 88.0 68.3 L 88.4 67.0 L 88.8 65.7 L 89.2 64.4 L 89.6 63.2 L 90.0 62.0 L 90.4 60.9 L 90.8 59.8 L 91.2 58.7 L 91.6 57.7 L 92.0 56.7 L 92.4 55.8 L 92.8 54.9 L 93.2 54.0 L 93.6 53.2 L 94.0 52.4 L 94.4 51.6 L 94.8 50.9 L 95.2 50.1 L 95.6 49.4 L 96.0 48.8 L 96.4 48.1 L 96.8 47.5 L 97.2 46.9 L 97.6 46.3 L 98.0 45.8 L 98.4 45.3 L 98.8 44.7 L 99.2 44.3 L 99.6 43.8 L 100.0 43.3 L 100.4 42.9 L 100.8 42.5 L 101.2 42.1 L 101.6 41.7 L 102.0 41.3 L 102.4 41.0 L 102.8 40.6 L 103.2 40.3 L 103.6 40.0 L 104.0 39.7 L 104.4 39.4 L 104.8 39.1 L 105.2 38.9 L 105.6 38.6 L 106.0 38.4 L 106.4 38.1 L 106.8 37.9 L 107.2 37.7 L 107.6 37.5 L 108.0 37.3 L 108.4 37.2 L 108.8 37.0 L 109.2 36.8 L 109.6 36.7 L 110.0 36.5 L 110.4 36.4 L 110.8 36.3 L 111.2 36.1 L 111.6 36.0 L 112.0 35.9 L 112.4 35.8 L 112.8 35.7 L 113.2 35.6 L 113.6 35.6 L 114.0 35.5 L 114.4 35.4 L 114.8 35.4 L 115.2 35.3 L 115.6 35.3 L 116.0 35.2 L 116.4 35.2 L 116.8 35.1 L 117.2 35.1 L 117.6 35.1 L 118.0 35.0 L 118.4 35.0 L 118.8 35.0 L 119.2 35.0 L 119.6 35.0 L 120.0 35.0 L 120.4 35.0 L 120.8 35.0 L 121.2 35.0 L 121.6 35.0 L 122.0 35.0 L 122.4 35.1 L 122.8 35.1 L 123.2 35.1 L 123.6 35.1 L 124.0 35.2 L 124.4 35.2 L 124.8 35.2 L 125.2 35.3 L 125.6 35.3 L 126.0 35.4 L 126.4 35.4 L 126.8 35.5 L 127.2 35.5 L 127.6 35.6 L 128.0 35.6 L 128.4 35.7 L 128.8 35.7 L 129.2 35.8 L 129.6 35.9 L 130.0 35.9 L 130.4 36.0 L 130.8 36.1 L 131.2 36.1 L 131.6 36.2 L 132.0 36.3 L 132.4 36.4 L 132.8 36.4 L 133.2 36.5 L 133.6 36.6 L 134.0 36.7 L 134.4 36.7 L 134.8 36.8 L 135.2 36.9 L 135.6 37.0 L 136.0 37.1 L 136.4 37.2 L 136.8 37.3 L 137.2 37.3 L 137.6 37.4 L 138.0 37.5 L 138.4 37.6 L 138.8 37.7 L 139.2 37.8 L 139.6 37.9 L 140.0 38.0 L 140.4 38.1 L 140.8 38.2 L 141.2 38.3 L 141.6 38.4 L 142.0 38.5 L 142.4 38.6 L 142.8 38.7 L 143.2 38.8 L 143.6 38.9 L 144.0 39.0 L 144.4 39.1 L 144.8 39.2 L 145.2 39.3 L 145.6 39.4 L 146.0 39.5 L 146.4 39.6 L 146.8 39.7 L 147.2 39.8 L 147.6 39.9 L 148.0 40.0 L 148.4 40.1 L 148.8 40.3 L 149.2 40.4 L 149.6 40.5 L 150.0 40.6 L 150.4 40.7 L 150.8 40.8 L 151.2 40.9 L 151.6 41.0 L 152.0 41.1 L 152.4 41.2 L 152.8 41.3 L 153.2 41.5 L 153.6 41.6 L 154.0 41.7 L 154.4 41.8 L 154.8 41.9 L 155.2 42.0 L 155.6 42.1 L 156.0 42.2 L 156.4 42.3 L 156.8 42.4 L 157.2 42.6 L 157.6 42.7 L 158.0 42.8 L 158.4 42.9 L 158.8 43.0 L 159.2 43.1 L 159.6 43.2 L 160.0 43.3 L 160.4 43.4 L 160.8 43.6 L 161.2 43.7 L 161.6 43.8 L 162.0 43.9 L 162.4 44.0 L 162.8 44.1 L 163.2 44.2 L 163.6 44.3 L 164.0 44.4 L 164.4 44.6 L 164.8 44.7 L 165.2 44.8 L 165.6 44.9 L 166.0 45.0 L 166.4 45.1 L 166.8 45.2 L 167.2 45.3 L 167.6 45.4 L 168.0 45.5 L 168.4 45.7 L 168.8 45.8 L 169.2 45.9 L 169.6 46.0 L 170.0 46.1 L 170.4 46.2 L 170.8 46.3 L 171.2 46.4 L 171.6 46.5 L 172.0 46.6 L 172.4 46.7 L 172.8 46.9 L 173.2 47.0 L 173.6 47.1 L 174.0 47.2 L 174.4 47.3 L 174.8 47.4 L 175.2 47.5 L 175.6 47.6 L 176.0 47.7 L 176.4 47.8 L 176.8 47.9 L 177.2 48.0 L 177.6 48.1 L 178.0 48.2 L 178.4 48.4 L 178.8 48.5 L 179.2 48.6 L 179.6 48.7 L 180.0 48.8 L 180.4 48.9 L 180.8 49.0 L 181.2 49.1 L 181.6 49.2 L 182.0 49.3 L 182.4 49.4 L 182.8 49.5 L 183.2 49.6 L 183.6 49.7 L 184.0 49.8 L 184.4 49.9 L 184.8 50.0 L 185.2 50.1 L 185.6 50.2 L 186.0 50.3 L 186.4 50.4 L 186.8 50.5 L 187.2 50.6 L 187.6 50.7 L 188.0 50.8 L 188.4 50.9 L 188.8 51.0 L 189.2 51.1 L 189.6 51.2 L 190.0 51.3 L 190.4 51.4 L 190.8 51.5 L 191.2 51.6 L 191.6 51.7 L 192.0 51.8 L 192.4 51.9 L 192.8 52.0 L 193.2 52.1 L 193.6 52.2 L 194.0 52.3 L 194.4 52.4 L 194.8 52.5 L 195.2 52.6 L 195.6 52.7 L 196.0 52.8 L 196.4 52.9 L 196.8 53.0 L 197.2 53.1 L 197.6 53.2 L 198.0 53.3 L 198.4 53.4 L 198.8 53.5 L 199.2 53.6 L 199.6 53.7 L 200.0 53.8 L 200.4 53.8 L 200.8 53.9 L 201.2 54.0 L 201.6 54.1 L 202.0 54.2 L 202.4 54.3 L 202.8 54.4 L 203.2 54.5 L 203.6 54.6 L 204.0 54.7 L 204.4 54.8 L 204.8 54.9 L 205.2 54.9 L 205.6 55.0 L 206.0 55.1 L 206.4 55.2 L 206.8 55.3 L 207.2 55.4 L 207.6 55.5 L 208.0 55.6 L 208.4 55.7 L 208.8 55.8 L 209.2 55.8 L 209.6 55.9 L 210.0 56.0 L 210.4 56.1 L 210.8 56.2 L 211.2 56.3 L 211.6 56.4 L 212.0 56.5 L 212.4 56.5 L 212.8 56.6 L 213.2 56.7 L 213.6 56.8 L 214.0 56.9 L 214.4 57.0 L 214.8 57.1 L 215.2 57.1 L 215.6 57.2 L 216.0 57.3 L 216.4 57.4 L 216.8 57.5 L 217.2 57.6 L 217.6 57.7 L 218.0 57.7 L 218.4 57.8 L 218.8 57.9 L 219.2 58.0 L 219.6 58.1 L 220.0 58.1 L 220.4 58.2 L 220.8 58.3 L 221.2 58.4 L 221.6 58.5 L 222.0 58.6 L 222.4 58.6 L 222.8 58.7 L 223.2 58.8 L 223.6 58.9 L 224.0 59.0 L 224.4 59.0 L 224.8 59.1 L 225.2 59.2 L 225.6 59.3 L 226.0 59.4 L 226.4 59.4 L 226.8 59.5 L 227.2 59.6 L 227.6 59.7 L 228.0 59.8 L 228.4 59.8 L 228.8 59.9 L 229.2 60.0 L 229.6 60.1 L 230.0 60.1 L 230.4 60.2 L 230.8 60.3 L 231.2 60.4 L 231.6 60.4 L 232.0 60.5 L 232.4 60.6 L 232.8 60.7 L 233.2 60.7 L 233.6 60.8 L 234.0 60.9 L 234.4 61.0 L 234.8 61.0 L 235.2 61.1 L 235.6 61.2 L 236.0 61.3 L 236.4 61.3 L 236.8 61.4 L 237.2 61.5 L 237.6 61.6 L 238.0 61.6 L 238.4 61.7 L 238.8 61.8 L 239.2 61.9 L 239.6 61.9 L 240.0 62.0 L 240.4 62.1 L 240.8 62.1 L 241.2 62.2 L 241.6 62.3 L 242.0 62.4 L 242.4 62.4 L 242.8 62.5 L 243.2 62.6 L 243.6 62.6 L 244.0 62.7 L 244.4 62.8 L 244.8 62.9 L 245.2 62.9 L 245.6 63.0 L 246.0 63.1 L 246.4 63.1 L 246.8 63.2 L 247.2 63.3 L 247.6 63.3 L 248.0 63.4 L 248.4 63.5 L 248.8 63.5 L 249.2 63.6 L 249.6 63.7 L 250.0 63.7 L 250.4 63.8 L 250.8 63.9 L 251.2 63.9 L 251.6 64.0 L 252.0 64.1 L 252.4 64.1 L 252.8 64.2 L 253.2 64.3 L 253.6 64.3 L 254.0 64.4 L 254.4 64.5 L 254.8 64.5 L 255.2 64.6 L 255.6 64.7 L 256.0 64.7 L 256.4 64.8 L 256.8 64.9 L 257.2 64.9 L 257.6 65.0 L 258.0 65.1 L 258.4 65.1 L 258.8 65.2 L 259.2 65.2 L 259.6 65.3 L 260.0 65.4 L 260.4 65.4 L 260.8 65.5 L 261.2 65.6 L 261.6 65.6 L 262.0 65.7 L 262.4 65.7 L 262.8 65.8 L 263.2 65.9 L 263.6 65.9 L 264.0 66.0 L 264.4 66.1 L 264.8 66.1 L 265.2 66.2 L 265.6 66.2 L 266.0 66.3 L 266.4 66.4 L 266.8 66.4 L 267.2 66.5 L 267.6 66.5 L 268.0 66.6 L 268.4 66.7 L 268.8 66.7 L 269.2 66.8 L 269.6 66.8 L 270.0 66.9 L 270.4 67.0 L 270.8 67.0 L 271.2 67.1 L 271.6 67.1 L 272.0 67.2 L 272.4 67.3 L 272.8 67.3 L 273.2 67.4 L 273.6 67.4 L 274.0 67.5 L 274.4 67.5 L 274.8 67.6 L 275.2 67.7 L 275.6 67.7 L 276.0 67.8 L 276.4 67.8 L 276.8 67.9 L 277.2 67.9 L 277.6 68.0 L 278.0 68.1 L 278.4 68.1 L 278.8 68.2 L 279.2 68.2 L 279.6 68.3 L 280.0 68.3 L 280.4 68.4 L 280.8 68.4 L 281.2 68.5 L 281.6 68.6 L 282.0 68.6 L 282.4 68.7 L 282.8 68.7 L 283.2 68.8 L 283.6 68.8 L 284.0 68.9 L 284.4 68.9 L 284.8 69.0 L 285.2 69.0 L 285.6 69.1 L 286.0 69.2 L 286.4 69.2 L 286.8 69.3 L 287.2 69.3 L 287.6 69.4 L 288.0 69.4 L 288.4 69.5 L 288.8 69.5 L 289.2 69.6 L 289.6 69.6 L 290.0 69.7 L 290.4 69.7 L 290.8 69.8 L 291.2 69.8 L 291.6 69.9 L 292.0 69.9 L 292.4 70.0 L 292.8 70.0 L 293.2 70.1 L 293.6 70.1 L 294.0 70.2 L 294.4 70.2 L 294.8 70.3 L 295.2 70.3 L 295.6 70.4 L 296.0 70.4 L 296.4 70.5 L 296.8 70.5 L 297.2 70.6 L 297.6 70.6 L 298.0 70.7 L 298.4 70.7 L 298.8 70.8 L 299.2 70.8 L 299.6 70.9 L 300.0 70.9 L 300.4 71.0 L 300.8 71.0 L 301.2 71.1 L 301.6 71.1 L 302.0 71.2 L 302.4 71.2 L 302.8 71.3 L 303.2 71.3 L 303.6 71.4 L 304.0 71.4 L 304.4 71.5 L 304.8 71.5 L 305.2 71.6 L 305.6 71.6 L 306.0 71.7 L 306.4 71.7 L 306.8 71.8 L 307.2 71.8 L 307.6 71.9 L 308.0 71.9 L 308.4 72.0 L 308.8 72.0 L 309.2 72.0 L 309.6 72.1 L 310.0 72.1 L 310.4 72.2 L 310.8 72.2 L 311.2 72.3 L 311.6 72.3 L 312.0 72.4 L 312.4 72.4 L 312.8 72.5 L 313.2 72.5 L 313.6 72.6 L 314.0 72.6 L 314.4 72.6 L 314.8 72.7 L 315.2 72.7 L 315.6 72.8 L 316.0 72.8 L 316.4 72.9 L 316.8 72.9 L 317.2 73.0 L 317.6 73.0 L 318.0 73.0 L 318.4 73.1 L 318.8 73.1 L 319.2 73.2 L 319.6 73.2 L 320.0 73.3 L 320.4 73.3 L 320.8 73.4 L 321.2 73.4 L 321.6 73.4 L 322.0 73.5 L 322.4 73.5 L 322.8 73.6 L 323.2 73.6 L 323.6 73.7 L 324.0 73.7 L 324.4 73.7 L 324.8 73.8 L 325.2 73.8 L 325.6 73.9 L 326.0 73.9 L 326.4 74.0 L 326.8 74.0 L 327.2 74.0 L 327.6 74.1 L 328.0 74.1 L 328.4 74.2 L 328.8 74.2 L 329.2 74.2 L 329.6 74.3 L 330.0 74.3 L 330.4 74.4 L 330.8 74.4 L 331.2 74.5 L 331.6 74.5 L 332.0 74.5 L 332.4 74.6 L 332.8 74.6 L 333.2 74.7 L 333.6 74.7 L 334.0 74.7 L 334.4 74.8 L 334.8 74.8 L 335.2 74.9 L 335.6 74.9 L 336.0 74.9 L 336.4 75.0 L 336.8 75.0 L 337.2 75.1 L 337.6 75.1 L 338.0 75.1 L 338.4 75.2 L 338.8 75.2 L 339.2 75.3 L 339.6 75.3 L 340.0 75.3 L 340.4 75.4 L 340.8 75.4 L 341.2 75.5 L 341.6 75.5 L 342.0 75.5 L 342.4 75.6 L 342.8 75.6 L 343.2 75.6 L 343.6 75.7 L 344.0 75.7 L 344.4 75.8 L 344.8 75.8 L 345.2 75.8 L 345.6 75.9 L 346.0 75.9 L 346.4 75.9 L 346.8 76.0 L 347.2 76.0 L 347.6 76.1 L 348.0 76.1 L 348.4 76.1 L 348.8 76.2 L 349.2 76.2 L 349.6 76.2 L 350.0 76.3 L 350.4 76.3 L 350.8 76.4 L 351.2 76.4 L 351.6 76.4 L 352.0 76.5 L 352.4 76.5 L 352.8 76.5 L 353.2 76.6 L 353.6 76.6 L 354.0 76.7 L 354.4 76.7 L 354.8 76.7 L 355.2 76.8 L 355.6 76.8 L 356.0 76.8 L 356.4 76.9 L 356.8 76.9 L 357.2 76.9 L 357.6 77.0 L 358.0 77.0 L 358.4 77.0 L 358.8 77.1 L 359.2 77.1 L 359.6 77.2 L 360.0 77.2 L 360.4 77.2 L 360.8 77.3 L 361.2 77.3 L 361.6 77.3 L 362.0 77.4 L 362.4 77.4 L 362.8 77.4 L 363.2 77.5 L 363.6 77.5 L 364.0 77.5 L 364.4 77.6 L 364.8 77.6 L 365.2 77.6 L 365.6 77.7 L 366.0 77.7 L 366.4 77.7 L 366.8 77.8 L 367.2 77.8 L 367.6 77.8 L 368.0 77.9 L 368.4 77.9 L 368.8 77.9 L 369.2 78.0 L 369.6 78.0 L 370.0 78.0 L 370.4 78.1 L 370.8 78.1 L 371.2 78.1 L 371.6 78.2 L 372.0 78.2 L 372.4 78.2 L 372.8 78.3 L 373.2 78.3 L 373.6 78.3 L 374.0 78.4 L 374.4 78.4 L 374.8 78.4 L 375.2 78.5 L 375.6 78.5 L 376.0 78.5 L 376.4 78.6 L 376.8 78.6 L 377.2 78.6 L 377.6 78.7 L 378.0 78.7 L 378.4 78.7 L 378.8 78.8 L 379.2 78.8 L 379.6 78.8 L 380.0 78.9 L 380.4 78.9 L 380.8 78.9 L 381.2 79.0 L 381.6 79.0 L 382.0 79.0 L 382.4 79.0 L 382.8 79.1 L 383.2 79.1 L 383.6 79.1 L 384.0 79.2 L 384.4 79.2 L 384.8 79.2 L 385.2 79.3 L 385.6 79.3 L 386.0 79.3 L 386.4 79.4 L 386.8 79.4 L 387.2 79.4 L 387.6 79.5 L 388.0 79.5 L 388.4 79.5 L 388.8 79.5 L 389.2 79.6 L 389.6 79.6 L 390.0 79.6 L 390.4 79.7 L 390.8 79.7 L 391.2 79.7 L 391.6 79.8 L 392.0 79.8 L 392.4 79.8 L 392.8 79.8 L 393.2 79.9 L 393.6 79.9 L 394.0 79.9 L 394.4 80.0 L 394.8 80.0 L 395.2 80.0 L 395.6 80.1 L 396.0 80.1 L 396.4 80.1 L 396.8 80.1 L 397.2 80.2 L 397.6 80.2 L 398.0 80.2 L 398.4 80.3 L 398.8 80.3 L 399.2 80.3 L 399.6 80.3 L 400.0 80.4 L 400.4 80.4 L 400.8 80.4 L 401.2 80.5 L 401.6 80.5 L 402.0 80.5 L 402.4 80.5 L 402.8 80.6 L 403.2 80.6 L 403.6 80.6 L 404.0 80.7 L 404.4 80.7 L 404.8 80.7 L 405.2 80.7 L 405.6 80.8 L 406.0 80.8 L 406.4 80.8 L 406.8 80.9 L 407.2 80.9 L 407.6 80.9 L 408.0 80.9 L 408.4 81.0 L 408.8 81.0 L 409.2 81.0 L 409.6 81.0 L 410.0 81.1 L 410.4 81.1 L 410.8 81.1 L 411.2 81.2 L 411.6 81.2 L 412.0 81.2 L 412.4 81.2 L 412.8 81.3 L 413.2 81.3 L 413.6 81.3 L 414.0 81.3 L 414.4 81.4 L 414.8 81.4 L 415.2 81.4 L 415.6 81.5 L 416.0 81.5 L 416.4 81.5 L 416.8 81.5 L 417.2 81.6 L 417.6 81.6 L 418.0 81.6 L 418.4 81.6 L 418.8 81.7 L 419.2 81.7 L 419.6 81.7 L 420.0 81.7 L 420.4 81.8 L 420.8 81.8 L 421.2 81.8 L 421.6 81.8 L 422.0 81.9 L 422.4 81.9 L 422.8 81.9 L 423.2 82.0 L 423.6 82.0 L 424.0 82.0 L 424.4 82.0 L 424.8 82.1 L 425.2 82.1 L 425.6 82.1 L 426.0 82.1 L 426.4 82.2 L 426.8 82.2 L 427.2 82.2 L 427.6 82.2 L 428.0 82.3 L 428.4 82.3 L 428.8 82.3 L 429.2 82.3 L 429.6 82.4 L 430.0 82.4 L 430.4 82.4 L 430.8 82.4 L 431.2 82.5 L 431.6 82.5 L 432.0 82.5 L 432.4 82.5 L 432.8 82.6 L 433.2 82.6 L 433.6 82.6 L 434.0 82.6 L 434.4 82.7 L 434.8 82.7 L 435.2 82.7 L 435.6 82.7 L 436.0 82.8 L 436.4 82.8 L 436.8 82.8 L 437.2 82.8 L 437.6 82.9 L 438.0 82.9 L 438.4 82.9 L 438.8 82.9 L 439.2 83.0 L 439.6 83.0 L 440.0 83.0" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="80.0" y1="107.0" x2="80.0" y2="113.0" stroke="currentColor" stroke-width="1"/>
  <text x="80.0" y="126.0" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <line x1="120.0" y1="107.0" x2="120.0" y2="113.0" stroke="currentColor" stroke-width="1"/>
  <text x="120.0" y="126.0" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <line x1="240.0" y1="107.0" x2="240.0" y2="113.0" stroke="currentColor" stroke-width="1"/>
  <text x="240.0" y="126.0" font-size="11" text-anchor="middle" fill="currentColor">10</text>
  <line x1="440.0" y1="107.0" x2="440.0" y2="113.0" stroke="currentColor" stroke-width="1"/>
  <text x="440.0" y="126.0" font-size="11" text-anchor="middle" fill="currentColor">20</text>
  <line x1="37.0" y1="50.0" x2="43.0" y2="50.0" stroke="currentColor" stroke-width="1"/>
  <text x="34.0" y="54.0" font-size="10" text-anchor="end" fill="currentColor">0.1</text>
  <line x1="37.0" y1="170.0" x2="43.0" y2="170.0" stroke="currentColor" stroke-width="1"/>
  <text x="34.0" y="174.0" font-size="10" text-anchor="end" fill="currentColor">−0.1</text>
  <circle cx="80.0" cy="110.0" r="4" fill="#7ccf9a"/>
  <circle cx="120.0" cy="35.0" r="4" fill="#9cc9ea"/>
  <text x="92.0" y="150.0" font-size="11" text-anchor="start" fill="currentColor">crosses at x = 2</text>
  <text x="126.0" y="27.0" font-size="11" text-anchor="start" fill="currentColor">top: 0.125 at x = 4</text>
  <text x="420.0" y="98.0" font-size="11" text-anchor="end" fill="currentColor">asymptote y = 0</text>
</svg>
</div>

The curve comes up from below, crosses the $x$-axis at $x = 2$, climbs to a top of 0.125 at $x = 4$, then turns and
sinks back towards the axis forever, getting as close as you like but never reaching it again (for $x > 2$ the top
$x - 2$ is positive, so $y$ is positive).

So "never touches" is **not** part of the definition. An asymptote is about what happens **far away**. What the curve
does nearby, it is free to do. Some curves even cross their asymptote infinitely often, wiggling around it with
smaller and smaller wiggles, like a bouncing spring settling down.

A vertical asymptote is different. For a rule like $y = \frac1x$ there is **no** point of the curve at $x = 0$ at
all, so there is nothing that could touch the line there.

### A Mars example: gravity that fades but never vanishes

Mars pulls on everything near it. At the surface, the pull gives a falling object an acceleration of about
3.71 m/s² (a bit over a third of Earth's). Further away the pull weakens. Newton's law of gravity says that at
distance $r$ from the centre of Mars it is

$$g = 3.71 \times \left(\frac{R}{r}\right)^2 \text{ m/s}^2,$$

where $R$, about 3390 km, is the radius of Mars. At twice the radius it is a quarter as strong, about 0.93 m/s²; at
10 times the radius it is a hundredth, about 0.037 m/s². As $r$ grows the pull tends to 0, but it is never exactly
zero: the graph has the horizontal asymptote $g = 0$. A spacecraft leaving Mars feels a weaker and weaker tug, all
the way out.

## Worked examples

**1. Lifted curve.** For $y = 3 + \dfrac2x$, find the asymptotes, and find how big $x$ must be for $y$ to be within
0.01 of the horizontal one.

1. Vertical: the bottom of $\frac2x$ is zero at $x = 0$, so **$x = 0$**.
2. Horizontal: as $x$ grows, $\frac2x$ shrinks to 0, so $y$ settles to **$y = 3$**.
3. The distance from 3 is $\dfrac2x$ (for positive $x$). We need $\dfrac2x < 0.01$, so $x > 200$.

**2. Slid curve.** For $y = \dfrac{1}{x - 4}$, find the asymptotes and the values at $x = 4.1$ and $x = 3.9$.

1. The bottom is zero when $x = 4$: vertical asymptote **$x = 4$**. Far out, $y$ settles to 0: horizontal asymptote
   **$y = 0$**.
2. At $x = 4.1$: $y = \dfrac{1}{0.1} = 10$. At $x = 3.9$: $y = \dfrac{1}{-0.1} = -10$.
3. Just right of 4 the curve is high up; just left of 4 it is far down. That is the vertical asymptote at work.

**3. Rewrite first.** Find the asymptotes of $y = \dfrac{2x + 1}{x - 1}$.

1. Split the top: $2x + 1 = 2(x - 1) + 3$. So $y = \dfrac{2(x-1) + 3}{x - 1} = 2 + \dfrac{3}{x - 1}$.
2. Vertical asymptote where the bottom is zero: **$x = 1$**.
3. As $x$ grows, $\frac{3}{x-1}$ shrinks to 0: horizontal asymptote **$y = 2$**.
4. Does it cross $y = 2$? Only if $\frac{3}{x-1} = 0$, which never happens. So this one does not.

**4. Mars gravity.** How far from the centre of Mars is the pull 1% of its surface value?

1. We need $\left(\dfrac{R}{r}\right)^2 = \dfrac{1}{100}$, so $\dfrac{R}{r} = \dfrac{1}{10}$ and $r = 10R$.
2. That is about $10 \times 3390 = 33900$ km from the centre. The pull there is about $0.0371$ m/s², small but not
   zero.

## Try it

1. For $y = \dfrac1x$, find $y$ when $x = 0.5$, $x = 2$, $x = -4$ and $x = 100$.
2. Write down the asymptotes of $y = 5 + \dfrac1x$.
3. Write down the asymptotes of $y = \dfrac{1}{x + 2}$.
4. For $y = \dfrac1x$, how large must $x$ be for $y$ to be less than 0.001?
5. For $y = 4 - \dfrac3x$, find the asymptotes. For large positive $x$, is the curve above or below its horizontal
   asymptote? For very negative $x$?
6. Where does $y = \dfrac{x - 5}{x^2}$ cross its horizontal asymptote? Is the curve above or below the asymptote for
   $x > 5$?
7. Show that $\dfrac{3x - 1}{x + 1} = 3 - \dfrac{4}{x + 1}$, and use it to find the asymptotes.
8. Using the Mars gravity rule, find the pull at 4 times the radius. At what distance from the centre is the pull a
   quarter of its surface value?

??? note "Answers"
    1. $\frac{1}{0.5} = 2$, $\frac12 = 0.5$, $\frac{1}{-4} = -0.25$, $\frac{1}{100} = 0.01$.
    2. Vertical $x = 0$, horizontal $y = 5$.
    3. The bottom is zero at $x = -2$: vertical **$x = -2$**. Far out $y$ settles to 0: horizontal **$y = 0$**.
    4. $\dfrac1x < 0.001 = \dfrac{1}{1000}$ when $x > 1000$.
    5. Asymptotes $x = 0$ and $y = 4$. For large positive $x$, $\frac3x$ is positive, so $y = 4 - \frac3x$ is 4 minus
       something positive: **below** 4. For very negative $x$, $\frac3x$ is negative, so $y$ is 4 plus a little: **above**
       4.
    6. Its horizontal asymptote is $y = 0$ (split as $\frac1x - \frac{5}{x^2}$; both parts shrink). It crosses where
       the top is zero: **$x = 5$**. For $x > 5$ the top is positive and the bottom $x^2$ is positive, so the curve
       is **above** the asymptote.
    7. $3 - \dfrac{4}{x+1} = \dfrac{3(x + 1) - 4}{x + 1} = \dfrac{3x - 1}{x + 1}$. ✓ Vertical asymptote $x = -1$
       (bottom zero), horizontal asymptote $y = 3$ (since $\frac{4}{x+1}$ shrinks to 0).
    8. At $r = 4R$: $3.71 \times \frac{1}{16} \approx 0.23$ m/s². A quarter of the surface value needs
       $\left(\frac{R}{r}\right)^2 = \frac14$, so $\frac{R}{r} = \frac12$ and $r = 2R$, about 6780 km from the centre
       (one radius above the surface).

## Common mistake

**"An asymptote is a line the curve never touches."** Some do, some do not. $y = \frac{x - 2}{x^2}$ touches and
crosses its asymptote $y = 0$ at $x = 2$. What matters is the behaviour far away: closer than any amount you name,
and staying there.

**Mixing up "$x$ equals" and "$y$ equals".** The vertical asymptote of $y = \frac{1}{x - 3}$ is the line $x = 3$, which goes up
and down. Writing "$y = 3$" names a completely different, horizontal line.

## Where it leads

- Back: [Infinity is not a number](03-infinity-not-a-number.md) · Next: [Repeating decimals and limits](05-repeating-decimals.md)
- [Level 5 page](index.md) · [Infinity topic page](../index.md)
- Spin $y = \frac1x$ around the $x$-axis and you get Gabriel's horn, with finite volume and infinite surface:
  [level 8](../level-8/index.md).
- Graphs of rules like these, and many more: [Rational functions](../../algebra/level-8/03-rational-functions.md) in
  Algebra. Slopes of curves: [Change](../../change/index.md).
- On the U of T shelf, limits at infinity and infinite limits:
  [MAT137 Unit 2: limits and continuity](../../../uoft/MAT137/unit02.md).
