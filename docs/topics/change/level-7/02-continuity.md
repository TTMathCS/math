---
title: "Continuity"
---

# Continuity

*Change and motion · level 7, lesson 2 of 6*

## A question to start

A hiker leaves the bottom of a mountain at 6 in the morning and walks up the only trail, sometimes fast, sometimes
slowly, stopping for lunch, and reaches the top at 6 in the evening. She sleeps at the top. The next morning she
leaves at 6 and walks back down the same trail, again at whatever speeds she likes, arriving at the bottom at 6 in
the evening.

**Is there a spot on the trail that she passed at exactly the same time of day on both days?**

It seems impossible to know without her timetable. Yet the answer is **yes, always**, and the reason is one of the
simplest-sounding and deepest facts about continuous change. By the end of this lesson you will be able to prove it.

## The idea

### Continuous means "no breaks"

Loosely, a function is **continuous** if you can draw its graph without lifting your pen. Your height over your
life, the temperature outside, the position of a moving car: these change continuously. They never jump from one
value to another without passing through everything in between. The amount of money in a bank account, on the other
hand, jumps when a payment goes in.

Limits let us say exactly what "no break" means at a single point. A function $f$ is **continuous at $a$** when
three things hold:

1. $f(a)$ is defined (there is a point on the graph at $x = a$);
2. $\lim_{x \to a} f(x)$ exists (the graph heads for one height from both sides);
3. the two agree: $\lim_{x \to a} f(x) = f(a)$.

In words: **near $a$, the function is close to its value at $a$**. Small changes in the input give small changes in
the output. A function is continuous **on an interval** if it is continuous at every point of it.

### Three ways to break

Each condition can fail, and each failure looks different.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 620 222" role="img" aria-label="Three kinds of break at x equals 2. Left, a hole: a line with an open circle, and a lone dot above it. Middle, a jump: the graph ends at one height and restarts higher. Right, the curve 1 over x minus 2, which shoots down on the left of x equals 2 and up on the right, with a dashed vertical asymptote.">
  <line x1="20" y1="168" x2="190" y2="168" stroke="currentColor" stroke-width="1.2"/>
  <line x1="20" y1="168" x2="20" y2="12" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="12" fill="currentColor"><line x1="105" y1="165" x2="105" y2="171" stroke="currentColor"/><text x="105" y="183" text-anchor="middle">2</text><text x="190" y="162" text-anchor="end">x</text></g>
  <polyline points="20,129 22.1,128 24.2,127.1 26.4,126.1 28.5,125.1 30.6,124.1 32.8,123.2 34.9,122.2 37,121.2 39.1,120.2 41.2,119.2 43.4,118.3 45.5,117.3 47.6,116.3 49.8,115.3 51.9,114.4 54,113.4 56.1,112.4 58.2,111.4 60.4,110.5 62.5,109.5 64.6,108.5 66.8,107.6 68.9,106.6 71,105.6 73.1,104.6 75.2,103.7 77.4,102.7 79.5,101.7 81.6,100.7 83.8,99.8 85.9,98.8 88,97.8 90.1,96.8 92.2,95.8 94.4,94.9 96.5,93.9 98.6,92.9 100.8,91.9 102.9,91 105,90 107.1,89 109.2,88.1 111.4,87.1 113.5,86.1 115.6,85.1 117.7,84.2 119.9,83.2 122,82.2 124.1,81.2 126.2,80.2 128.4,79.3 130.5,78.3 132.6,77.3 134.8,76.3 136.9,75.4 139,74.4 141.1,73.4 143.2,72.4 145.4,71.5 147.5,70.5 149.6,69.5 151.8,68.6 153.9,67.6 156,66.6 158.1,65.6 160.2,64.7 162.4,63.7 164.5,62.7 166.6,61.7 168.8,60.8 170.9,59.8 173,58.8 175.1,57.8 177.2,56.8 179.4,55.9 181.5,54.9 183.6,53.9 185.8,52.9 187.9,52 190,51" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="105" cy="90" r="5" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="105" cy="39.3" r="4" fill="currentColor"/>
  <text x="105" y="200" font-size="13" text-anchor="middle" fill="currentColor">hole</text>
  <line x1="230" y1="168" x2="400" y2="168" stroke="currentColor" stroke-width="1.2"/>
  <line x1="230" y1="168" x2="230" y2="12" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="12" fill="currentColor"><line x1="315" y1="165" x2="315" y2="171" stroke="currentColor"/><text x="315" y="183" text-anchor="middle">2</text><text x="400" y="162" text-anchor="end">x</text></g>
  <polyline points="230,136.8 231.1,136.5 232.1,136.2 233.2,135.9 234.2,135.6 235.3,135.3 236.4,135 237.4,134.8 238.5,134.5 239.6,134.2 240.6,133.9 241.7,133.6 242.8,133.3 243.8,133 244.9,132.7 245.9,132.4 247,132.1 248.1,131.8 249.1,131.5 250.2,131.2 251.2,130.9 252.3,130.7 253.4,130.4 254.4,130.1 255.5,129.8 256.6,129.5 257.6,129.2 258.7,128.9 259.8,128.6 260.8,128.3 261.9,128 262.9,127.7 264,127.4 265.1,127.1 266.1,126.9 267.2,126.6 268.2,126.3 269.3,126 270.4,125.7 271.4,125.4 272.5,125.1 273.6,124.8 274.6,124.5 275.7,124.2 276.8,123.9 277.8,123.6 278.9,123.3 279.9,123.1 281,122.8 282.1,122.5 283.1,122.2 284.2,121.9 285.2,121.6 286.3,121.3 287.4,121 288.4,120.7 289.5,120.4 290.6,120.1 291.6,119.8 292.7,119.5 293.8,119.2 294.8,119 295.9,118.7 296.9,118.4 298,118.1 299.1,117.8 300.1,117.5 301.2,117.2 302.2,116.9 303.3,116.6 304.4,116.3 305.4,116 306.5,115.7 307.6,115.4 308.6,115.2 309.7,114.9 310.8,114.6 311.8,114.3 312.9,114 313.9,113.7 315,113.4" fill="none" stroke="#eea66f" stroke-width="3"/>
  <polyline points="315,58.8 316.1,58.5 317.1,58.2 318.2,57.9 319.2,57.6 320.3,57.3 321.4,57 322.4,56.8 323.5,56.5 324.6,56.2 325.6,55.9 326.7,55.6 327.8,55.3 328.8,55 329.9,54.7 330.9,54.4 332,54.1 333.1,53.8 334.1,53.5 335.2,53.2 336.2,52.9 337.3,52.7 338.4,52.4 339.4,52.1 340.5,51.8 341.6,51.5 342.6,51.2 343.7,50.9 344.8,50.6 345.8,50.3 346.9,50 347.9,49.7 349,49.4 350.1,49.1 351.1,48.9 352.2,48.6 353.2,48.3 354.3,48 355.4,47.7 356.4,47.4 357.5,47.1 358.6,46.8 359.6,46.5 360.7,46.2 361.8,45.9 362.8,45.6 363.9,45.3 364.9,45.1 366,44.8 367.1,44.5 368.1,44.2 369.2,43.9 370.2,43.6 371.3,43.3 372.4,43 373.4,42.7 374.5,42.4 375.6,42.1 376.6,41.8 377.7,41.5 378.8,41.2 379.8,41 380.9,40.7 381.9,40.4 383,40.1 384.1,39.8 385.1,39.5 386.2,39.2 387.2,38.9 388.3,38.6 389.4,38.3 390.4,38 391.5,37.7 392.6,37.4 393.6,37.2 394.7,36.9 395.8,36.6 396.8,36.3 397.9,36 398.9,35.7 400,35.4" fill="none" stroke="#eea66f" stroke-width="3"/>
  <circle cx="315" cy="113.4" r="5" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="315" cy="58.8" r="4.5" fill="currentColor"/>
  <text x="315" y="200" font-size="13" text-anchor="middle" fill="currentColor">jump</text>
  <line x1="440" y1="90" x2="610" y2="90" stroke="currentColor" stroke-width="1.2"/>
  <line x1="440" y1="168" x2="440" y2="12" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="12" fill="currentColor"><line x1="525" y1="87" x2="525" y2="93" stroke="currentColor"/><text x="525" y="105" text-anchor="middle">2</text><text x="610" y="84" text-anchor="end">x</text></g>
  <line x1="525" y1="168" x2="525" y2="12" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <polyline points="440,99.8 440.7,99.8 441.4,99.9 442.1,100 442.8,100.1 443.5,100.2 444.2,100.3 444.9,100.4 445.6,100.4 446.3,100.5 447,100.6 447.8,100.7 448.5,100.8 449.2,100.9 449.9,101 450.6,101.1 451.3,101.2 452,101.3 452.7,101.5 453.4,101.6 454.1,101.7 454.8,101.8 455.5,101.9 456.2,102 456.9,102.2 457.6,102.3 458.3,102.4 459,102.6 459.7,102.7 460.4,102.8 461.1,103 461.8,103.1 462.6,103.3 463.3,103.4 464,103.6 464.7,103.7 465.4,103.9 466.1,104.1 466.8,104.2 467.5,104.4 468.2,104.6 468.9,104.8 469.6,105 470.3,105.2 471,105.4 471.7,105.6 472.4,105.8 473.1,106 473.8,106.2 474.5,106.4 475.2,106.7 475.9,106.9 476.6,107.1 477.4,107.4 478.1,107.7 478.8,107.9 479.5,108.2 480.2,108.5 480.9,108.8 481.6,109.1 482.3,109.4 483,109.7 483.7,110.1 484.4,110.4 485.1,110.8 485.8,111.1 486.5,111.5 487.2,111.9 487.9,112.4 488.6,112.8 489.3,113.2 490,113.7 490.7,114.2 491.4,114.7 492.2,115.2 492.9,115.8 493.6,116.4 494.3,117 495,117.6 495.7,118.3 496.4,119 497.1,119.7 497.8,120.5 498.5,121.3 499.2,122.1 499.9,123 500.6,124 501.3,125 502,126.1 502.7,127.2 503.4,128.4 504.1,129.7 504.8,131.1 505.5,132.6 506.3,134.2 507,135.9 507.7,137.8 508.4,139.8 509.1,142 509.8,144.4 510.5,147.1 511.2,150 511.9,153.2 512.6,156.8 513.3,160.8 514,165.4 514.7,170.5" fill="none" stroke="#7ccf9a" stroke-width="3"/>
  <polyline points="535.3,9.5 536,14.6 536.7,19.2 537.4,23.2 538.1,26.8 538.8,30 539.5,32.9 540.2,35.6 540.9,38 541.6,40.2 542.3,42.2 543,44.1 543.7,45.8 544.5,47.4 545.2,48.9 545.9,50.3 546.6,51.6 547.3,52.8 548,53.9 548.7,55 549.4,56 550.1,57 550.8,57.9 551.5,58.7 552.2,59.5 552.9,60.3 553.6,61 554.3,61.7 555,62.4 555.7,63 556.4,63.6 557.1,64.2 557.8,64.8 558.6,65.3 559.3,65.8 560,66.3 560.7,66.8 561.4,67.2 562.1,67.6 562.8,68.1 563.5,68.5 564.2,68.9 564.9,69.2 565.6,69.6 566.3,69.9 567,70.3 567.7,70.6 568.4,70.9 569.1,71.2 569.8,71.5 570.5,71.8 571.2,72.1 571.9,72.3 572.6,72.6 573.4,72.9 574.1,73.1 574.8,73.3 575.5,73.6 576.2,73.8 576.9,74 577.6,74.2 578.3,74.4 579,74.6 579.7,74.8 580.4,75 581.1,75.2 581.8,75.4 582.5,75.6 583.2,75.8 583.9,75.9 584.6,76.1 585.3,76.3 586,76.4 586.7,76.6 587.4,76.7 588.2,76.9 588.9,77 589.6,77.2 590.3,77.3 591,77.4 591.7,77.6 592.4,77.7 593.1,77.8 593.8,78 594.5,78.1 595.2,78.2 595.9,78.3 596.6,78.4 597.3,78.5 598,78.7 598.7,78.8 599.4,78.9 600.1,79 600.8,79.1 601.5,79.2 602.2,79.3 603,79.4 603.7,79.5 604.4,79.6 605.1,79.6 605.8,79.7 606.5,79.8 607.2,79.9 607.9,80 608.6,80.1 609.3,80.2 610,80.2" fill="none" stroke="#7ccf9a" stroke-width="3"/>
  <text x="525" y="200" font-size="13" text-anchor="middle" fill="currentColor">blows up</text>
</svg>
</div>

- **A hole** (left). The limit exists, but either $f(a)$ is missing or it is the wrong value. This is called a
  **removable discontinuity**, because you can repair it by redefining one single value. The function
  $\frac{x^2 - 1}{x - 1}$ from the last lesson has a hole at $x = 1$; setting $f(1) = 2$ fills it, and the result is the
  continuous line $y = x + 1$.
- **A jump** (middle). The one-sided limits exist but differ. No choice of $f(a)$ can repair it: whichever height you
  choose, one side does not lead to it. Step functions, like postage prices or parking fees, jump.
- **An infinite discontinuity** (right). The function blows up near $a$, as $\frac{1}{x - 2}$ does at $x = 2$. There is
  a vertical asymptote.

### Which functions are continuous?

Fortunately, almost every function built from a formula is continuous wherever it makes sense.

- **Polynomials** are continuous everywhere. In the last lesson, the limit laws gave $\lim_{x \to a} p(x) = p(a)$ for
  every polynomial $p$, and that is exactly condition 3.
- **Sums, differences, products and constant multiples** of continuous functions are continuous (by the limit laws).
- **Quotients** of continuous functions are continuous wherever the bottom is not 0. So a **rational function** such
  as $\frac{x + 1}{x^2 - 4}$ is continuous everywhere except $x = 2$ and $x = -2$.
- $\sqrt{x}$ is continuous for $x \ge 0$; $\sin x$, $\cos x$ and $2^x$ are continuous everywhere.
- **Compositions** (one function inside another) of continuous functions are continuous: $\sqrt{x^2 + 1}$ is
  continuous everywhere.

So, in practice, to find where a formula is **not** continuous, look for the places where it breaks down: division
by zero, square roots of negatives, and the joins in a function defined in pieces.

### The intermediate value theorem

Here is the big fact. Its name sounds grand; its meaning is simple.

**Intermediate value theorem (IVT).** Suppose $f$ is continuous on the closed interval $[a, b]$, and $N$ is any number
between $f(a)$ and $f(b)$. Then there is at least one number $c$ between $a$ and $b$ with $f(c) = N$.

In plain words: **a continuous function cannot get from one height to another without passing through every height
in between.** If a graph starts below a horizontal line and ends above it, and has no breaks, it must cross the line.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 620 200" role="img" aria-label="Left: a continuous curve from a point below the dashed line y equals N at x equals a to a point above it at x equals b; it crosses the line at x equals c. Right: a function with a jump starts below the line and ends above it but leaps over the line without touching it.">
  <line x1="30" y1="178" x2="285" y2="178" stroke="currentColor" stroke-width="1.2"/>
  <line x1="30" y1="178" x2="30" y2="12" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="12" fill="currentColor"><line x1="61.9" y1="175" x2="61.9" y2="181" stroke="currentColor"/><text x="61.9" y="193" text-anchor="middle">a</text><line x1="253.1" y1="175" x2="253.1" y2="181" stroke="currentColor"/><text x="253.1" y="193" text-anchor="middle">b</text><text x="285" y="172" text-anchor="end">x</text></g>
  <line x1="30" y1="86.7" x2="285" y2="86.7" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="36" y="81.7" font-size="12" text-anchor="start" fill="currentColor">N</text>
  <polyline points="61.9,126.3 64.3,124.3 66.7,122.5 69,120.8 71.4,119.3 73.8,117.9 76.2,116.6 78.6,115.5 81,114.5 83.4,113.6 85.8,112.9 88.2,112.3 90.6,111.8 93,111.5 95.3,111.3 97.7,111.2 100.1,111.2 102.5,111.3 104.9,111.4 107.3,111.7 109.7,112 112.1,112.3 114.5,112.7 116.9,113.2 119.2,113.6 121.6,114.1 124,114.6 126.4,115 128.8,115.4 131.2,115.8 133.6,116.2 136,116.4 138.4,116.6 140.8,116.8 143.2,116.8 145.5,116.8 147.9,116.6 150.3,116.3 152.7,115.9 155.1,115.4 157.5,114.7 159.9,114 162.3,113 164.7,112 167.1,110.8 169.5,109.4 171.8,107.9 174.2,106.3 176.6,104.5 179,102.7 181.4,100.6 183.8,98.5 186.2,96.2 188.6,93.9 191,91.4 193.4,88.8 195.8,86.2 198.1,83.4 200.5,80.6 202.9,77.8 205.3,74.9 207.7,72 210.1,69 212.5,66.1 214.9,63.1 217.3,60.2 219.7,57.3 222,54.4 224.4,51.6 226.8,48.8 229.2,46.1 231.6,43.4 234,40.9 236.4,38.5 238.8,36.1 241.2,33.9 243.6,31.8 246,29.8 248.3,28 250.7,26.3 253.1,24.7" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="195.3" cy="86.7" r="5" fill="#eea66f"/>
  <line x1="195.3" y1="178" x2="195.3" y2="86.7" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="195.3" y="193" font-size="12" text-anchor="middle" fill="currentColor">c</text>
  <circle cx="61.9" cy="126.3" r="4" fill="currentColor"/>
  <circle cx="253.1" cy="24.7" r="4" fill="currentColor"/>
  <line x1="350" y1="178" x2="605" y2="178" stroke="currentColor" stroke-width="1.2"/>
  <line x1="350" y1="178" x2="350" y2="12" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="12" fill="currentColor"><line x1="381.9" y1="175" x2="381.9" y2="181" stroke="currentColor"/><text x="381.9" y="193" text-anchor="middle">a</text><line x1="573.1" y1="175" x2="573.1" y2="181" stroke="currentColor"/><text x="573.1" y="193" text-anchor="middle">b</text><text x="605" y="172" text-anchor="end">x</text></g>
  <line x1="350" y1="86.7" x2="605" y2="86.7" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="356" y="81.7" font-size="12" text-anchor="start" fill="currentColor">N</text>
  <polyline points="381.9,144.8 383.1,144.5 384.3,144.2 385.5,143.9 386.7,143.6 387.9,143.2 389,142.9 390.2,142.6 391.4,142.3 392.6,142 393.8,141.7 395,141.4 396.2,141.1 397.4,140.8 398.6,140.4 399.8,140.1 401,139.8 402.2,139.5 403.4,139.2 404.6,138.9 405.8,138.6 407,138.3 408.2,138 409.4,137.6 410.6,137.3 411.8,137 413,136.7 414.1,136.4 415.3,136.1 416.5,135.8 417.7,135.5 418.9,135.2 420.1,134.8 421.3,134.5 422.5,134.2 423.7,133.9 424.9,133.6 426.1,133.3 427.3,133 428.5,132.7 429.7,132.3 430.9,132 432.1,131.7 433.3,131.4 434.5,131.1 435.7,130.8 436.9,130.5 438.1,130.2 439.2,129.9 440.4,129.5 441.6,129.2 442.8,128.9 444,128.6 445.2,128.3 446.4,128 447.6,127.7 448.8,127.4 450,127.1 451.2,126.7 452.4,126.4 453.6,126.1 454.8,125.8 456,125.5 457.2,125.2 458.4,124.9 459.6,124.6 460.8,124.3 462,123.9 463.2,123.6 464.4,123.3 465.5,123 466.7,122.7 467.9,122.4 469.1,122.1 470.3,121.8 471.5,121.5 472.7,121.1 473.9,120.8 475.1,120.5 476.3,120.2 477.5,119.9" fill="none" stroke="#eea66f" stroke-width="3"/>
  <polyline points="477.5,57.7 478.7,57.3 479.9,57 481.1,56.7 482.3,56.4 483.5,56.1 484.7,55.8 485.9,55.5 487.1,55.2 488.3,54.8 489.5,54.5 490.6,54.2 491.8,53.9 493,53.6 494.2,53.3 495.4,53 496.6,52.7 497.8,52.4 499,52 500.2,51.7 501.4,51.4 502.6,51.1 503.8,50.8 505,50.5 506.2,50.2 507.4,49.9 508.6,49.6 509.8,49.2 511,48.9 512.2,48.6 513.4,48.3 514.6,48 515.8,47.7 516.9,47.4 518.1,47.1 519.3,46.8 520.5,46.4 521.7,46.1 522.9,45.8 524.1,45.5 525.3,45.2 526.5,44.9 527.7,44.6 528.9,44.3 530.1,44 531.3,43.6 532.5,43.3 533.7,43 534.9,42.7 536.1,42.4 537.3,42.1 538.5,41.8 539.7,41.5 540.9,41.2 542,40.8 543.2,40.5 544.4,40.2 545.6,39.9 546.8,39.6 548,39.3 549.2,39 550.4,38.7 551.6,38.4 552.8,38 554,37.7 555.2,37.4 556.4,37.1 557.6,36.8 558.8,36.5 560,36.2 561.2,35.9 562.4,35.6 563.6,35.2 564.8,34.9 566,34.6 567.1,34.3 568.3,34 569.5,33.7 570.7,33.4 571.9,33.1 573.1,32.8" fill="none" stroke="#eea66f" stroke-width="3"/>
  <circle cx="477.5" cy="119.9" r="4.5" fill="currentColor"/>
  <circle cx="477.5" cy="57.7" r="5" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="381.9" cy="144.8" r="4" fill="currentColor"/>
  <circle cx="573.1" cy="32.8" r="4" fill="currentColor"/>
</svg>
</div>

The picture shows why continuity is needed. On the right, a function with a jump starts below the line $y = N$ and
ends above it, but leaps over the line without ever touching it.

**Why is it true?** It feels obvious, but it secretly depends on the real number line having **no gaps**. Here is a
surprise that shows this. Suppose we only allowed **rational** numbers (fractions). The function $f(x) = x^2 - 2$ is
$-1$ at $x = 1$ and $2$ at $x = 2$, and it is a perfectly smooth polynomial. Yet there is **no fraction** $c$ with
$f(c) = 0$, because $c$ would have to be $\sqrt{2}$, which is irrational (see
[Numbers: why root 2 is irrational](../../numbers/level-6/03-root-two-irrational.md)). The graph slips through a gap in
the fractions. The real numbers fill in all such gaps, and that "completeness" is what a full university proof of
the IVT uses. You will meet it on the U of T shelf.

### Using the IVT to find roots

The IVT is most often used to show that an equation **has** a solution, even when we cannot solve it with algebra.

If $f$ is continuous and $f(a)$ and $f(b)$ have **opposite signs**, then 0 lies between them, so $f(c) = 0$ for some
$c$ between $a$ and $b$.

It even gives a way to **find** the solution, called **bisection** (cutting in half). Check the sign at the midpoint;
the root is in whichever half still has a sign change. Each step halves the interval, so ten steps make it about 1000
times shorter ($2^{10} = 1024$).

## Worked examples

**1. Making a join continuous.** Find $k$ so that this function is continuous everywhere:
$f(x) = kx + 1$ for $x < 2$, and $f(x) = x^2$ for $x \ge 2$.

1. Each piece is a polynomial, so the only possible break is at the join, $x = 2$.
2. From the right (and at 2): $f(2) = 2^2 = 4$. From the left: $kx + 1 \to 2k + 1$.
3. Continuity needs $2k + 1 = 4$, so $k = \dfrac32$.

**2. Classifying breaks.** Where is $g(x) = \dfrac{x^2 - 4}{x^2 - x - 2}$ discontinuous, and what kind of break is
each?

1. Factor: $g(x) = \dfrac{(x - 2)(x + 2)}{(x - 2)(x + 1)}$. The bottom is 0 at $x = 2$ and $x = -1$, so $g$ is
   discontinuous there and continuous everywhere else.
2. At $x = 2$: for $x \ne 2$, $g(x) = \dfrac{x + 2}{x + 1} \to \dfrac{4}{3}$. The limit exists, so this is a
   **removable** discontinuity (a hole at $\left(2, \frac43\right)$).
3. At $x = -1$: the top tends to $(-3)(1) = -3$ while the bottom tends to 0. The function blows up: an **infinite**
   discontinuity, with a vertical asymptote $x = -1$.

**3. A root by bisection.** Show that $x^3 + x - 1 = 0$ has a solution between 0 and 1, and find it to one decimal
place.

1. $f(x) = x^3 + x - 1$ is a polynomial, so it is continuous. $f(0) = -1 < 0$ and $f(1) = 1 > 0$. By the IVT there is
   a root between 0 and 1.
2. $f(0.5) = 0.125 + 0.5 - 1 = -0.375$, negative, so the root is in $[0.5, 1]$.
3. $f(0.75) = 0.421875 + 0.75 - 1 = 0.171875$, positive: the root is in $[0.5, 0.75]$.
4. $f(0.625) \approx -0.1309$, negative: $[0.625, 0.75]$.
5. $f(0.6875) \approx 0.0125$, positive: $[0.625, 0.6875]$.
6. $f(0.65) = 0.274625 + 0.65 - 1 = -0.075375$, still negative, so the root lies between 0.65 and 0.6875 and rounds to
   **0.7**. (More steps give $0.6823\ldots$)

**4. The hiker.** Measure time $t$ in hours after 6 am, from 0 to 12. Let $U(t)$ be her distance along the trail
from the bottom on the way up, and $D(t)$ her distance from the bottom on the way down. Both are continuous (she does
not teleport). Let $f(t) = U(t) - D(t)$, which is continuous too.

- At $t = 0$: $U(0) = 0$ (at the bottom) and $D(0) = L$, the full trail length (at the top). So $f(0) = -L < 0$.
- At $t = 12$: $U(12) = L$ and $D(12) = 0$, so $f(12) = L > 0$.

By the IVT, $f(c) = 0$ for some time $c$: then $U(c) = D(c)$, so at time $c$ she was at the same spot on both days.
(Picture both walks happening on the same day, by two hikers: one going up, one coming down. They must meet.)

## Try it

1. Where is $f(x) = \dfrac{1}{x - 3}$ discontinuous, and what kind of discontinuity is it?
2. The function $\dfrac{x^2 - 9}{x - 3}$ has one discontinuity. What kind is it, and what value at $x = 3$ would
   repair it?
3. Find $c$ so that $f(x) = x^2 + c$ for $x < 1$ and $f(x) = 3x$ for $x \ge 1$ is continuous.
4. Show that $x^5 - 3x + 1 = 0$ has a solution between 0 and 1.
5. Use three steps of bisection on $x^2 - 2$, starting with $[1, 2]$. What interval contains $\sqrt{2}$ at the end?
6. A courier charges 5 dollars for any parcel up to 1 kg, 8 dollars for over 1 kg up to 2 kg, and 11 dollars for over
   2 kg up to 3 kg. Sketch the price against the mass. Where is it discontinuous, and of which kind?
7. At noon the temperature is 2 °C and at 6 pm it is $-3$ °C. Must the temperature have been exactly 0 °C at some
   moment in between? Must it have been exactly 5 °C?
8. Leo says: "$f(x) = \dfrac{1}{x}$ has $f(-1) = -1$ and $f(1) = 1$, so by the IVT it has a root between $-1$ and 1."
   What is wrong?

??? note "Answers"
    1. At $x = 3$ the bottom is 0 and the top is 1, so the function blows up: an **infinite** discontinuity, with
       vertical asymptote $x = 3$. It is continuous everywhere else.
    2. For $x \ne 3$ it equals $x + 3$, which tends to 6. So it is a **removable** discontinuity, repaired by
       setting the value at 3 to **6**.
    3. From the left, $x^2 + c \to 1 + c$; at 1 and from the right, $3 \times 1 = 3$. So $1 + c = 3$ and $c = 2$.
    4. $f(x) = x^5 - 3x + 1$ is a polynomial, so it is continuous on $[0, 1]$. $f(0) = 1 > 0$ and
       $f(1) = 1 - 3 + 1 = -1 < 0$. Since 0 is between $-1$ and 1, the IVT gives some $c$ in $(0, 1)$ with
       $f(c) = 0$.
    5. $f(1) = -1 < 0$, $f(2) = 2 > 0$. Midpoint 1.5: $2.25 - 2 = 0.25 > 0$, so $[1, 1.5]$. Midpoint 1.25:
       $1.5625 - 2 = -0.4375 < 0$, so $[1.25, 1.5]$. Midpoint 1.375: $1.890625 - 2 = -0.109375 < 0$, so
       $[1.375, 1.5]$. Indeed $\sqrt{2} \approx 1.414$.
    6. A staircase: flat at 5 up to 1 kg, then flat at 8, then flat at 11. It **jumps** at 1 kg and at 2 kg (jump
       discontinuities). At exactly 1 kg the price is 5 dollars (filled dot on the lower step), and just over 1 kg
       it is 8 dollars.
    7. Temperature changes continuously, and 0 is between 2 and $-3$, so **yes**, by the IVT. But 5 °C is not
       between 2 and $-3$, so the IVT says **nothing**: the temperature may or may not have reached 5 °C (it could
       have risen to 6 °C at 1 pm and then fallen).
    8. $\frac{1}{x}$ is **not continuous** on $[-1, 1]$: it breaks at $x = 0$, so the IVT does not apply. In fact
       $\frac{1}{x}$ is never 0. The graph jumps from $-\infty$ to $+\infty$ across the asymptote.

## Common mistake

**Using the IVT without checking continuity.** The theorem needs a continuous function on the whole closed interval.
Question 8 shows how it fails otherwise. Always say "$f$ is continuous on $[a, b]$ because ..." before you use it.

**Expecting the IVT to say more than it does.** It says there is **at least one** $c$. It does not say where, and it
does not say how many: $\sin x$ goes from $-1$ to $1$ and crosses 0 many times on a long interval.

## Where it leads

- Back: [Limits](01-limits.md) · Next: [The derivative from first principles](03-first-principles.md)
- [Level 7 page](index.md) · [Change and motion topic page](../index.md)
- Continuity and the gaps in the fractions: [Numbers: the real numbers](../../numbers/level-6/05-real-numbers.md).
- Bisection is an algorithm; more on step-by-step methods in [Logic: algorithms and flowcharts](../../logic/level-6/03-algorithms-flowcharts.md).
  Another way of closing in on a root, by repeating a function, is
  [Patterns: iteration and fixed points](../../patterns/level-8/05-iteration-fixed-points.md).
- On the U of T shelf: [MAT137 Unit 2: limits and continuity](../../../uoft/MAT137/unit02.md), where the IVT is
  proved from the completeness of the real numbers.
