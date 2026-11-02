---
title: "Functions"
---

# Functions

*Algebra · level 7, lesson 4 of 7*

## A question to start

Think of two rules about the people in your school.

- Rule A: give it a person, and it tells you that person's birthday.
- Rule B: give it a birthday, and it tells you the person born on that day.

Rule A always works: every person has exactly one birthday. Rule B is in trouble. Some days nobody in the school was
born; on other days, two or three people were. (Even in a class of 30, it is more likely than not that two people
share a birthday: see [Probability](../../probability/index.md).) So Rule B cannot always give **one** answer.

Mathematicians care so much about the difference that rules like A have their own name. They are **functions**, and
they are the main characters of the rest of algebra.

## The idea

### What a function is

A **relation** is any pairing of inputs with outputs. A **function** is a relation in which **every input has exactly
one output**. Different inputs may share an output (two people can share a birthday), but one input may never have
two outputs.

A **mapping diagram** shows it with arrows from inputs to outputs:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 450 170" role="img" aria-label="Two mapping diagrams. Left: 1 to 4, 2 to 5, 3 to 4, a function. Right: 1 to 4 and 1 to 5, 2 to 6, not a function because 1 has two outputs">
  <ellipse cx="50" cy="80" rx="28" ry="58" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/>
  <ellipse cx="160" cy="80" rx="28" ry="58" fill="#eea66f" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/>
  <text x="50" y="50" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <text x="50" y="85" font-size="14" text-anchor="middle" fill="currentColor">2</text>
  <text x="50" y="120" font-size="14" text-anchor="middle" fill="currentColor">3</text>
  <text x="160" y="50" font-size="14" text-anchor="middle" fill="currentColor">4</text>
  <text x="160" y="85" font-size="14" text-anchor="middle" fill="currentColor">5</text>
  <line x1="62" y1="45" x2="138" y2="45" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="146,45 136.8,48.9 136.8,41.1" fill="currentColor"/>
  <line x1="62" y1="80" x2="138" y2="80" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="146,80 136.8,83.9 136.8,76.1" fill="currentColor"/>
  <line x1="62" y1="115" x2="139.9" y2="50.1" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="146,45 141.4,53.9 136.4,47.9" fill="currentColor"/>
  <text x="105" y="158" font-size="12" text-anchor="middle" fill="currentColor">a function</text>
  <text x="50" y="14" font-size="11" text-anchor="middle" fill="currentColor">input</text>
  <text x="160" y="14" font-size="11" text-anchor="middle" fill="currentColor">output</text>
  <ellipse cx="280" cy="80" rx="28" ry="58" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/>
  <ellipse cx="390" cy="80" rx="28" ry="58" fill="#eea66f" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"/>
  <text x="280" y="50" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <text x="280" y="85" font-size="14" text-anchor="middle" fill="currentColor">2</text>
  <text x="390" y="50" font-size="14" text-anchor="middle" fill="currentColor">4</text>
  <text x="390" y="85" font-size="14" text-anchor="middle" fill="currentColor">5</text>
  <text x="390" y="120" font-size="14" text-anchor="middle" fill="currentColor">6</text>
  <line x1="292" y1="45" x2="368" y2="45" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="376,45 366.8,48.9 366.8,41.1" fill="currentColor"/>
  <line x1="292" y1="45" x2="368.6" y2="76.9" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="376,80 366,80.1 369,72.9" fill="currentColor"/>
  <line x1="292" y1="80" x2="368.6" y2="111.9" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="376,115 366,115.1 369,107.9" fill="currentColor"/>
  <text x="335" y="158" font-size="12" text-anchor="middle" fill="currentColor">not a function</text>
  <text x="280" y="14" font-size="11" text-anchor="middle" fill="currentColor">input</text>
  <text x="390" y="14" font-size="11" text-anchor="middle" fill="currentColor">output</text>
</svg>
</div>

On the left, each input sends out exactly one arrow: a function, even though 1 and 3 both go to 4. On the right, the
input 1 sends out two arrows: not a function.

Why insist on one output? Because then the rule is **predictable**: tell me the input and I can tell you, without
doubt, the output. A calculator key, a formula for the cost of a taxi ride, the height of a ball at a given time: all
are functions.

### Function notation

We give a function a name, usually a letter such as $f$, and write $f(x)$ for "the output of $f$ when the input is
$x$". Read it "$f$ of $x$". For example, if $f(x) = 3x^2 - 2x + 1$, then

$$f(2) = 3(2)^2 - 2(2) + 1 = 12 - 4 + 1 = 9.$$

This says "the input 2 gives the output 9", or "the point $(2, 9)$ is on the graph". $f(x)$ is **not** $f$ times $x$:
the brackets hold the input.

You can put in anything, even an expression. Put brackets round it and replace every $x$:

$$f(a + 1) = 3(a + 1)^2 - 2(a + 1) + 1.$$

### Domain and range

- The **domain** is the set of all inputs allowed.
- The **range** is the set of all outputs that actually come out.

When a function is given by a formula and nobody says otherwise, the domain is every real number for which the
formula makes sense. Two things go wrong in real numbers:

- **dividing by zero:** in $h(x) = \dfrac{1}{x + 4}$, the input $x = -4$ is not allowed;
- **square roots of negatives:** in $g(x) = \sqrt{x - 3}$, we need $x - 3 \ge 0$, so $x \ge 3$.

Ways to write sets of numbers:

| In words | Set notation | Interval notation |
| --- | --- | --- |
| all real numbers | $\{x \in \mathbb{R}\}$ | $(-\infty, \infty)$ |
| $x$ is 3 or more | $\{x \in \mathbb{R} \mid x \ge 3\}$ | $[3, \infty)$ |
| $x$ is not $-4$ | $\{x \in \mathbb{R} \mid x \ne -4\}$ | $(-\infty, -4) \cup (-4, \infty)$ |

$\mathbb{R}$ is the set of real numbers, $\in$ means "is in", the bar $\mid$ means "such that", a square bracket
includes the end, a round bracket leaves it out, and $\cup$ means "or" (joining two sets). The symbol $\infty$ is not a
number, so it always gets a round bracket.

Finding the range takes more thought: you have to ask which outputs **can** come out. For a quadratic, the vertex
tells you. $k(x) = -2(x - 1)^2 + 5$ has a maximum of 5, and every number below 5 is reached too, so its range is
$y \le 5$.

### The vertical line test

On a graph, an input $x = a$ is the vertical line through $a$. If some vertical line meets the graph **twice**, that
input has two outputs, and the graph is not a function.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 205" role="img" aria-label="Vertical line test: a vertical line meets y = x squared once, but meets the sideways parabola x = y squared twice, at (4, 2) and (4, −2)">
  <line x1="25" y1="155.7" x2="205" y2="155.7" stroke="currentColor" stroke-width="1"/>
  <text x="203" y="150.7" font-size="11" text-anchor="end" fill="currentColor" font-style="italic">x</text>
  <line x1="115" y1="180" x2="115" y2="10" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="20" font-size="11" fill="currentColor" font-style="italic">y</text>
  <polyline points="41.5,10 41.6,10.2 41.9,11.6 42.3,13 42.6,14.4 43,15.8 43.4,17.2 43.7,18.6 44.1,20 44.4,21.4 44.8,22.7 45.2,24.1 45.5,25.4 45.9,26.8 46.2,28.1 46.6,29.5 47,30.8 47.3,32.1 47.7,33.4 48,34.7 48.4,36 48.8,37.3 49.1,38.6 49.5,39.9 49.8,41.1 50.2,42.4 50.6,43.7 50.9,44.9 51.3,46.2 51.6,47.4 52,48.6 52.4,49.8 52.7,51 53.1,52.3 53.4,53.5 53.8,54.6 54.2,55.8 54.5,57 54.9,58.2 55.2,59.3 55.6,60.5 56,61.7 56.3,62.8 56.7,63.9 57,65.1 57.4,66.2 57.8,67.3 58.1,68.4 58.5,69.5 58.8,70.6 59.2,71.7 59.6,72.8 59.9,73.8 60.3,74.9 60.6,76 61,77 61.4,78.1 61.7,79.1 62.1,80.1 62.4,81.2 62.8,82.2 63.2,83.2 63.5,84.2 63.9,85.2 64.2,86.2 64.6,87.2 65,88.1 65.3,89.1 65.7,90.1 66,91 66.4,92 66.8,92.9 67.1,93.9 67.5,94.8 67.8,95.7 68.2,96.6 68.6,97.5 68.9,98.4 69.3,99.3 69.6,100.2 70,101.1 70.4,101.9 70.7,102.8 71.1,103.7 71.4,104.5 71.8,105.4 72.2,106.2 72.5,107 72.9,107.8 73.2,108.7 73.6,109.5 74,110.3 74.3,111.1 74.7,111.8 75,112.6 75.4,113.4 75.8,114.2 76.1,114.9 76.5,115.7 76.8,116.4 77.2,117.2 77.6,117.9 77.9,118.6 78.3,119.3 78.6,120 79,120.7 79.4,121.4 79.7,122.1 80.1,122.8 80.4,123.5 80.8,124.2 81.2,124.8 81.5,125.5 81.9,126.1 82.2,126.8 82.6,127.4 83,128 83.3,128.6 83.7,129.2 84,129.8 84.4,130.4 84.8,131 85.1,131.6 85.5,132.2 85.8,132.8 86.2,133.3 86.6,133.9 86.9,134.4 87.3,135 87.6,135.5 88,136 88.4,136.6 88.7,137.1 89.1,137.6 89.4,138.1 89.8,138.6 90.2,139.1 90.5,139.5 90.9,140 91.2,140.5 91.6,140.9 92,141.4 92.3,141.8 92.7,142.3 93,142.7 93.4,143.1 93.8,143.5 94.1,143.9 94.5,144.4 94.8,144.7 95.2,145.1 95.6,145.5 95.9,145.9 96.3,146.3 96.6,146.6 97,147 97.4,147.3 97.7,147.7 98.1,148 98.4,148.3 98.8,148.6 99.2,148.9 99.5,149.2 99.9,149.5 100.2,149.8 100.6,150.1 101,150.4 101.3,150.7 101.7,150.9 102,151.2 102.4,151.4 102.8,151.7 103.1,151.9 103.5,152.1 103.8,152.4 104.2,152.6 104.6,152.8 104.9,153 105.3,153.2 105.6,153.4 106,153.5 106.4,153.7 106.7,153.9 107.1,154 107.4,154.2 107.8,154.3 108.2,154.5 108.5,154.6 108.9,154.7 109.2,154.8 109.6,154.9 110,155 110.3,155.1 110.7,155.2 111,155.3 111.4,155.4 111.8,155.4 112.1,155.5 112.5,155.5 112.8,155.6 113.2,155.6 113.6,155.7 113.9,155.7 114.3,155.7 114.6,155.7 115,155.7 115.4,155.7 115.7,155.7 116.1,155.7 116.4,155.7 116.8,155.6 117.2,155.6 117.5,155.5 117.9,155.5 118.2,155.4 118.6,155.4 119,155.3 119.3,155.2 119.7,155.1 120,155 120.4,154.9 120.8,154.8 121.1,154.7 121.5,154.6 121.8,154.5 122.2,154.3 122.6,154.2 122.9,154 123.3,153.9 123.6,153.7 124,153.5 124.4,153.4 124.7,153.2 125.1,153 125.4,152.8 125.8,152.6 126.2,152.4 126.5,152.1 126.9,151.9 127.2,151.7 127.6,151.4 128,151.2 128.3,150.9 128.7,150.7 129,150.4 129.4,150.1 129.8,149.8 130.1,149.5 130.5,149.2 130.8,148.9 131.2,148.6 131.6,148.3 131.9,148 132.3,147.7 132.6,147.3 133,147 133.4,146.6 133.7,146.3 134.1,145.9 134.4,145.5 134.8,145.1 135.2,144.7 135.5,144.4 135.9,143.9 136.2,143.5 136.6,143.1 137,142.7 137.3,142.3 137.7,141.8 138,141.4 138.4,140.9 138.8,140.5 139.1,140 139.5,139.5 139.8,139.1 140.2,138.6 140.6,138.1 140.9,137.6 141.3,137.1 141.6,136.6 142,136 142.4,135.5 142.7,135 143.1,134.4 143.4,133.9 143.8,133.3 144.2,132.8 144.5,132.2 144.9,131.6 145.2,131 145.6,130.4 146,129.8 146.3,129.2 146.7,128.6 147,128 147.4,127.4 147.8,126.8 148.1,126.1 148.5,125.5 148.8,124.8 149.2,124.2 149.6,123.5 149.9,122.8 150.3,122.1 150.6,121.4 151,120.7 151.4,120 151.7,119.3 152.1,118.6 152.4,117.9 152.8,117.2 153.2,116.4 153.5,115.7 153.9,114.9 154.2,114.2 154.6,113.4 155,112.6 155.3,111.8 155.7,111.1 156,110.3 156.4,109.5 156.8,108.7 157.1,107.8 157.5,107 157.8,106.2 158.2,105.4 158.6,104.5 158.9,103.7 159.3,102.8 159.6,101.9 160,101.1 160.4,100.2 160.7,99.3 161.1,98.4 161.4,97.5 161.8,96.6 162.2,95.7 162.5,94.8 162.9,93.9 163.2,92.9 163.6,92 164,91 164.3,90.1 164.7,89.1 165,88.1 165.4,87.2 165.8,86.2 166.1,85.2 166.5,84.2 166.8,83.2 167.2,82.2 167.6,81.2 167.9,80.1 168.3,79.1 168.6,78.1 169,77 169.4,76 169.7,74.9 170.1,73.8 170.4,72.8 170.8,71.7 171.2,70.6 171.5,69.5 171.9,68.4 172.2,67.3 172.6,66.2 173,65.1 173.3,63.9 173.7,62.8 174,61.7 174.4,60.5 174.8,59.3 175.1,58.2 175.5,57 175.8,55.8 176.2,54.6 176.6,53.5 176.9,52.3 177.3,51 177.6,49.8 178,48.6 178.4,47.4 178.7,46.2 179.1,44.9 179.4,43.7 179.8,42.4 180.2,41.1 180.5,39.9 180.9,38.6 181.2,37.3 181.6,36 182,34.7 182.3,33.4 182.7,32.1 183,30.8 183.4,29.5 183.8,28.1 184.1,26.8 184.5,25.4 184.8,24.1 185.2,22.7 185.6,21.4 185.9,20 186.3,18.6 186.6,17.2 187,15.8 187.4,14.4 187.7,13 188.1,11.6 188.4,10.2 188.5,10" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="160" y1="180" x2="160" y2="10" stroke="#7ccf9a" stroke-width="2" stroke-dasharray="0"/>
  <circle cx="160" cy="101.1" r="3.5" fill="currentColor"/>
  <text x="115" y="198" font-size="11" text-anchor="middle" fill="currentColor">y = x²: one crossing, a function</text>
  <line x1="255" y1="95" x2="435" y2="95" stroke="currentColor" stroke-width="1"/>
  <text x="433" y="90" font-size="11" text-anchor="end" fill="currentColor" font-style="italic">x</text>
  <line x1="280.7" y1="180" x2="280.7" y2="10" stroke="currentColor" stroke-width="1"/>
  <text x="285.7" y="20" font-size="11" fill="currentColor" font-style="italic">y</text>
  <polyline points="435,164.4 434.8,164.4 433.3,164 431.8,163.7 430.3,163.3 428.8,163 427.4,162.7 425.9,162.3 424.4,162 423,161.6 421.5,161.3 420.1,161 418.6,160.6 417.2,160.3 415.8,159.9 414.4,159.6 413,159.3 411.6,158.9 410.2,158.6 408.8,158.2 407.4,157.9 406.1,157.6 404.7,157.2 403.4,156.9 402,156.5 400.7,156.2 399.4,155.9 398,155.5 396.7,155.2 395.4,154.8 394.1,154.5 392.8,154.2 391.5,153.8 390.3,153.5 389,153.1 387.7,152.8 386.5,152.5 385.2,152.1 384,151.8 382.8,151.4 381.5,151.1 380.3,150.8 379.1,150.4 377.9,150.1 376.7,149.7 375.5,149.4 374.3,149.1 373.2,148.7 372,148.4 370.8,148 369.7,147.7 368.5,147.4 367.4,147 366.3,146.7 365.1,146.3 364,146 362.9,145.7 361.8,145.3 360.7,145 359.6,144.6 358.6,144.3 357.5,144 356.4,143.6 355.4,143.3 354.3,142.9 353.3,142.6 352.3,142.3 351.2,141.9 350.2,141.6 349.2,141.2 348.2,140.9 347.2,140.6 346.2,140.2 345.2,139.9 344.3,139.5 343.3,139.2 342.3,138.9 341.4,138.5 340.4,138.2 339.5,137.8 338.6,137.5 337.6,137.2 336.7,136.8 335.8,136.5 334.9,136.1 334,135.8 333.2,135.5 332.3,135.1 331.4,134.8 330.5,134.4 329.7,134.1 328.8,133.8 328,133.4 327.2,133.1 326.3,132.7 325.5,132.4 324.7,132.1 323.9,131.7 323.1,131.4 322.3,131 321.5,130.7 320.8,130.4 320,130 319.2,129.7 318.5,129.3 317.7,129 317,128.7 316.3,128.3 315.6,128 314.8,127.6 314.1,127.3 313.4,127 312.7,126.6 312.1,126.3 311.4,125.9 310.7,125.6 310,125.3 309.4,124.9 308.7,124.6 308.1,124.2 307.5,123.9 306.8,123.6 306.2,123.2 305.6,122.9 305,122.5 304.4,122.2 303.8,121.9 303.2,121.5 302.7,121.2 302.1,120.8 301.5,120.5 301,120.2 300.4,119.8 299.9,119.5 299.4,119.1 298.9,118.8 298.3,118.5 297.8,118.1 297.3,117.8 296.8,117.4 296.4,117.1 295.9,116.8 295.4,116.4 294.9,116.1 294.5,115.7 294,115.4 293.6,115.1 293.2,114.7 292.7,114.4 292.3,114 291.9,113.7 291.5,113.4 291.1,113 290.7,112.7 290.3,112.3 290,112 289.6,111.7 289.2,111.3 288.9,111 288.5,110.6 288.2,110.3 287.9,110 287.6,109.6 287.2,109.3 286.9,108.9 286.6,108.6 286.3,108.3 286.1,107.9 285.8,107.6 285.5,107.2 285.3,106.9 285,106.6 284.7,106.2 284.5,105.9 284.3,105.5 284,105.2 283.8,104.9 283.6,104.5 283.4,104.2 283.2,103.8 283,103.5 282.8,103.2 282.7,102.8 282.5,102.5 282.3,102.1 282.2,101.8 282.1,101.5 281.9,101.1 281.8,100.8 281.7,100.4 281.5,100.1 281.4,99.8 281.3,99.4 281.2,99.1 281.2,98.7 281.1,98.4 281,98.1 281,97.7 280.9,97.4 280.8,97 280.8,96.7 280.8,96.4 280.7,96 280.7,95.7 280.7,95.3 280.7,95 280.7,94.7 280.7,94.3 280.7,94 280.8,93.6 280.8,93.3 280.8,93 280.9,92.6 281,92.3 281,91.9 281.1,91.6 281.2,91.3 281.2,90.9 281.3,90.6 281.4,90.2 281.5,89.9 281.7,89.6 281.8,89.2 281.9,88.9 282.1,88.5 282.2,88.2 282.3,87.9 282.5,87.5 282.7,87.2 282.8,86.8 283,86.5 283.2,86.2 283.4,85.8 283.6,85.5 283.8,85.1 284,84.8 284.3,84.5 284.5,84.1 284.7,83.8 285,83.4 285.3,83.1 285.5,82.8 285.8,82.4 286.1,82.1 286.3,81.7 286.6,81.4 286.9,81.1 287.2,80.7 287.6,80.4 287.9,80 288.2,79.7 288.5,79.4 288.9,79 289.2,78.7 289.6,78.3 290,78 290.3,77.7 290.7,77.3 291.1,77 291.5,76.6 291.9,76.3 292.3,76 292.7,75.6 293.2,75.3 293.6,74.9 294,74.6 294.5,74.3 294.9,73.9 295.4,73.6 295.9,73.2 296.4,72.9 296.8,72.6 297.3,72.2 297.8,71.9 298.3,71.5 298.9,71.2 299.4,70.9 299.9,70.5 300.4,70.2 301,69.8 301.5,69.5 302.1,69.2 302.7,68.8 303.2,68.5 303.8,68.1 304.4,67.8 305,67.5 305.6,67.1 306.2,66.8 306.8,66.4 307.5,66.1 308.1,65.8 308.7,65.4 309.4,65.1 310,64.7 310.7,64.4 311.4,64.1 312.1,63.7 312.7,63.4 313.4,63 314.1,62.7 314.8,62.4 315.6,62 316.3,61.7 317,61.3 317.7,61 318.5,60.7 319.2,60.3 320,60 320.8,59.6 321.5,59.3 322.3,59 323.1,58.6 323.9,58.3 324.7,57.9 325.5,57.6 326.3,57.3 327.2,56.9 328,56.6 328.8,56.2 329.7,55.9 330.5,55.6 331.4,55.2 332.3,54.9 333.2,54.5 334,54.2 334.9,53.9 335.8,53.5 336.7,53.2 337.6,52.8 338.6,52.5 339.5,52.2 340.4,51.8 341.4,51.5 342.3,51.1 343.3,50.8 344.3,50.5 345.2,50.1 346.2,49.8 347.2,49.4 348.2,49.1 349.2,48.8 350.2,48.4 351.2,48.1 352.3,47.7 353.3,47.4 354.3,47.1 355.4,46.7 356.4,46.4 357.5,46 358.6,45.7 359.6,45.4 360.7,45 361.8,44.7 362.9,44.3 364,44 365.1,43.7 366.3,43.3 367.4,43 368.5,42.6 369.7,42.3 370.8,42 372,41.6 373.2,41.3 374.3,40.9 375.5,40.6 376.7,40.3 377.9,39.9 379.1,39.6 380.3,39.2 381.5,38.9 382.8,38.6 384,38.2 385.2,37.9 386.5,37.5 387.7,37.2 389,36.9 390.3,36.5 391.5,36.2 392.8,35.8 394.1,35.5 395.4,35.2 396.7,34.8 398,34.5 399.4,34.1 400.7,33.8 402,33.5 403.4,33.1 404.7,32.8 406.1,32.4 407.4,32.1 408.8,31.8 410.2,31.4 411.6,31.1 413,30.7 414.4,30.4 415.8,30.1 417.2,29.7 418.6,29.4 420.1,29 421.5,28.7 423,28.4 424.4,28 425.9,27.7 427.4,27.3 428.8,27 430.3,26.7 431.8,26.3 433.3,26 434.8,25.6 435,25.6" fill="none" stroke="#9cc9ea" stroke-width="2.5"/>
  <line x1="383.6" y1="180" x2="383.6" y2="10" stroke="#7ccf9a" stroke-width="2" stroke-dasharray="0"/>
  <circle cx="383.6" cy="38.3" r="3.5" fill="currentColor"/>
  <text x="377.6" y="32.3" font-size="11" text-anchor="end" fill="currentColor">(4, 2)</text>
  <circle cx="383.6" cy="151.7" r="3.5" fill="currentColor"/>
  <text x="377.6" y="165.7" font-size="11" text-anchor="end" fill="currentColor">(4, −2)</text>
  <text x="345" y="198" font-size="11" text-anchor="middle" fill="currentColor">x = y²: two crossings, not a function</text>
</svg>
</div>

The sideways parabola $x = y^2$ fails: the line $x = 4$ meets it at $(4, 2)$ and $(4, -2)$. The ordinary parabola
$y = x^2$ passes: every vertical line meets it exactly once. A circle fails too: $x^2 + y^2 = 25$ meets the line $x = 3$
at $y = 4$ and $y = -4$.

### Why $\sqrt{9}$ is 3, not ±3

Both 3 and $-3$ square to 9. But the symbol $\sqrt{\phantom{x}}$ is meant to be a function, so it must give **one**
answer. By agreement it gives the one that is not negative: $\sqrt9 = 3$. When you want both, you write $\pm\sqrt9$,
as in the quadratic formula. This one agreement is why the graph of $y = \sqrt{x}$ is only the top half of the
sideways parabola.

### Where the word comes from

The word "function" was used in this sense by Leibniz and Johann Bernoulli around 1700, and the notation $f(x)$ was
made popular by Euler in the 1730s. The modern "exactly one output" definition came later, in the 1800s, when
mathematicians found strange functions that no single formula seemed to describe.

## Worked examples

**1. Evaluating.** $f(x) = 3x^2 - 2x + 1$. Find $f(2)$, $f(-1)$ and $f(a + 1)$.

- $f(2) = 12 - 4 + 1 = 9$.
- $f(-1) = 3(1) + 2 + 1 = 6$. (Note $(-1)^2 = 1$, and $-2 \times (-1) = +2$.)
- $f(a + 1) = 3(a^2 + 2a + 1) - 2a - 2 + 1 = 3a^2 + 6a + 3 - 2a - 1 = 3a^2 + 4a + 2$.
- Check with $a = 1$: $f(2)$ should be 9, and $3 + 4 + 2 = 9$. ✓

**2. Domain and range.**

- $g(x) = \sqrt{x - 3} + 2$: need $x \ge 3$. The square root gives every number $\ge 0$, so $g$ gives every
  number $\ge 2$. Domain $[3, \infty)$, range $[2, \infty)$.
- $h(x) = \dfrac{1}{x + 4}$: domain $x \ne -4$. A fraction with top 1 can be any number **except 0**, so the
  range is $y \ne 0$.
- $k(x) = -2(x - 1)^2 + 5$: domain all real numbers, range $y \le 5$.

**3. Function or not?**

- $\{(1, 4), (2, 5), (3, 4)\}$: each input appears once. A function.
- $\{(1, 4), (1, 5), (2, 6)\}$: the input 1 has two outputs. Not a function.
- $y = \lvert x \rvert$: each $x$ gives one value. A function (a V-shaped graph that passes the vertical line test).

**4. Working backwards.** $f(x) = x^2 - 4x$. For which $x$ is $f(x) = 5$?

- $x^2 - 4x = 5$, so $x^2 - 4x - 5 = 0$, so $(x - 5)(x + 1) = 0$, so $x = 5$ or $x = -1$.
- Two inputs share the output 5. That is allowed for a function.

## Try it

1. $f(x) = 5 - 2x$. Find $f(0)$, $f(3)$ and $f(-4)$.
2. Which are functions? (a) $\{(2, 3), (3, 3), (4, 3)\}$ (b) $\{(3, 2), (3, 3)\}$ (c) $y = x^3$
   (d) $x^2 + y^2 = 9$
3. Find the domain and range: (a) $f(x) = \sqrt{6 - 2x}$ (b) $g(x) = x^2 + 1$ (c) $h(x) = \dfrac{3}{x - 2}$
4. $f(x) = x^2 + x$. Find and simplify $f(t - 1)$.
5. $f(x) = 2x + 3$. Solve $f(x) = 11$.
6. Find the range of $f(x) = x^2 - 6x + 1$.
7. Is $f(x) = \dfrac{x^2 - 1}{x - 1}$ the same function as $g(x) = x + 1$? Explain.
8. $f(x) = x^2$. Is it true that $f(a + b) = f(a) + f(b)$ for all $a$, $b$?

??? note "Answers"
    1. $f(0) = 5$, $f(3) = 5 - 6 = -1$, $f(-4) = 5 + 8 = 13$.
    2. (a) Function: each input has one output (all the same output is fine). (b) Not a function: input 3 has two
       outputs. (c) Function. (d) Not a function: $x = 0$ gives $y = 3$ and $y = -3$.
    3. (a) Need $6 - 2x \ge 0$, so $x \le 3$. Domain $(-\infty, 3]$, range $[0, \infty)$. (b) Domain all reals;
       $x^2 \ge 0$, so range $[1, \infty)$. (c) Domain $x \ne 2$, range $y \ne 0$.
    4. $f(t - 1) = (t - 1)^2 + (t - 1) = t^2 - 2t + 1 + t - 1 = t^2 - t$.
    5. $2x + 3 = 11$, so $2x = 8$, so $x = 4$.
    6. Complete the square: $f(x) = (x - 3)^2 - 8$. The square is at least 0, so the range is $y \ge -8$, that is
       $[-8, \infty)$.
    7. **No.** For $x \ne 1$, $\dfrac{(x - 1)(x + 1)}{x - 1} = x + 1$, so they agree there. But $f(1)$ is $\dfrac00$,
       not defined, while $g(1) = 2$. They have different domains, so they are different functions. (The graph of
       $f$ is the line with a hole at $(1, 2)$: see [Rational functions](../level-8/03-rational-functions.md).)
    8. **No.** Try $a = 1$, $b = 2$: $f(3) = 9$ but $f(1) + f(2) = 1 + 4 = 5$. In general
       $(a + b)^2 = a^2 + 2ab + b^2$, not $a^2 + b^2$.

## Common mistake

**Reading $f(x)$ as $f \times x$.** $f(x + 2)$ is "the output for the input $x + 2$", not $f(x) + 2$ and not
$fx + 2f$. With $f(x) = x^2$: $f(x + 2) = (x + 2)^2 = x^2 + 4x + 4$, while $f(x) + 2 = x^2 + 2$.

**Thinking that two inputs with the same output break the rule.** $f(x) = x^2$ sends both 3 and $-3$ to 9, and it is a
perfectly good function. The rule is only "one input, one output", not "one output, one input". (Functions that also
have the second property are special. They are the ones with inverses: see lesson 6.)

## Where it leads

- Back: [Solving quadratic equations](03-solving-quadratics.md) · Next: [Transformations of
  functions](05-transformations.md).
- [Level 7 page](index.md) · [Algebra topic page](../index.md)
- Interval notation and absolute value: [Intervals and absolute value](../../numbers/level-7/06-intervals-absolute-value.md).
- Sequences are functions whose inputs are 1, 2, 3, ...: [Patterns](../../patterns/index.md). How fast a function's
  output changes: [Change](../../change/index.md).
- At university, a function is defined using sets of pairs, and proofs about them start in [MAT137 Unit 1 (logic, sets
  and proofs)](../../../uoft/MAT137/unit01.md).
