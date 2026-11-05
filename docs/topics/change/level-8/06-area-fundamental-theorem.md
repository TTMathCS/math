---
title: "Areas under curves and the fundamental theorem"
---

# Areas under curves and the fundamental theorem

*Change and motion · level 8, lesson 6 of 7*

## A question to start

Draw the curve $y = x^2$ from $x = 0$ to $x = 1$ inside a 1 by 1 square. The curve cuts the square into two parts: the
region under the curve, and the region above it.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 240 240" role="img" aria-label="A 1 by 1 square with the curve y equals x squared from the bottom-left corner to the top-right corner. The region under the curve is shaded blue; the rest of the square is shaded lightly.">
  <rect x="45.6" y="36.7" width="156" height="164.8" fill="#eea66f" fill-opacity="0.25" stroke="currentColor" stroke-width="0.8"/>
  <polygon points="45.6,201.5 45.6,201.5 47.2,201.5 48.7,201.5 50.3,201.4 51.8,201.3 53.4,201.1 55,200.9 56.5,200.7 58.1,200.5 59.6,200.2 61.2,199.9 62.8,199.5 64.3,199.1 65.9,198.7 67.4,198.3 69,197.8 70.6,197.3 72.1,196.8 73.7,196.2 75.2,195.6 76.8,194.9 78.4,194.3 79.9,193.5 81.5,192.8 83,192 84.6,191.2 86.2,190.4 87.7,189.5 89.3,188.6 90.8,187.7 92.4,186.7 94,185.7 95.5,184.6 97.1,183.6 98.6,182.5 100.2,181.3 101.8,180.2 103.3,179 104.9,177.7 106.4,176.5 108,175.2 109.6,173.8 111.1,172.4 112.7,171 114.2,169.6 115.8,168.1 117.4,166.6 118.9,165.1 120.5,163.6 122,162 123.6,160.3 125.2,158.7 126.7,157 128.3,155.2 129.8,153.5 131.4,151.7 133,149.8 134.5,148 136.1,146.1 137.6,144.2 139.2,142.2 140.8,140.2 142.3,138.2 143.9,136.1 145.4,134 147,131.9 148.6,129.7 150.1,127.5 151.7,125.3 153.2,123.1 154.8,120.8 156.4,118.4 157.9,116.1 159.5,113.7 161,111.3 162.6,108.8 164.2,106.3 165.7,103.8 167.3,101.3 168.8,98.7 170.4,96 172,93.4 173.5,90.7 175.1,88 176.6,85.2 178.2,82.5 179.8,79.6 181.3,76.8 182.9,73.9 184.4,71 186,68 187.6,65 189.1,62 190.7,59 192.2,55.9 193.8,52.8 195.4,49.6 196.9,46.5 198.5,43.2 200,40 201.6,36.7 201.6,201.5" fill="#9cc9ea" fill-opacity="0.8" stroke="none"/>
  <line x1="30" y1="201.5" x2="225" y2="201.5" stroke="currentColor" stroke-width="1.2"/>
  <line x1="45.6" y1="218" x2="45.6" y2="12" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="12" fill="currentColor"><line x1="201.6" y1="198.5" x2="201.6" y2="204.5" stroke="currentColor"/><text x="201.6" y="216.5" text-anchor="middle">1</text><line x1="42.6" y1="36.7" x2="48.6" y2="36.7" stroke="currentColor"/><text x="39.6" y="40.7" text-anchor="end">1</text><text x="225" y="195.5" text-anchor="end">x</text><text x="51.6" y="22">y</text></g>
  <polyline points="45.6,201.5 47.5,201.5 49.5,201.4 51.5,201.3 53.4,201.1 55.4,200.9 57.3,200.6 59.2,200.3 61.2,199.9 63.2,199.4 65.1,198.9 67,198.4 69,197.8 71,197.2 72.9,196.5 74.8,195.7 76.8,194.9 78.8,194.1 80.7,193.2 82.7,192.2 84.6,191.2 86.6,190.2 88.5,189.1 90.4,187.9 92.4,186.7 94.3,185.4 96.3,184.1 98.2,182.7 100.2,181.3 102.2,179.9 104.1,178.3 106,176.8 108,175.2 109.9,173.5 111.9,171.8 113.8,170 115.8,168.1 117.8,166.3 119.7,164.3 121.7,162.4 123.6,160.3 125.5,158.2 127.5,156.1 129.4,153.9 131.4,151.7 133.4,149.4 135.3,147 137.2,144.6 139.2,142.2 141.2,139.7 143.1,137.1 145.1,134.5 147,131.9 148.9,129.2 150.9,126.4 152.8,123.6 154.8,120.8 156.8,117.9 158.7,114.9 160.7,111.9 162.6,108.8 164.5,105.7 166.5,102.5 168.4,99.3 170.4,96 172.3,92.7 174.3,89.4 176.2,85.9 178.2,82.5 180.2,78.9 182.1,75.3 184,71.7 186,68 187.9,64.3 189.9,60.5 191.9,56.7 193.8,52.8 195.8,48.8 197.7,44.9 199.7,40.8 201.6,36.7" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <text x="151.7" y="171.9" font-size="18" text-anchor="middle" fill="currentColor">?</text>
  <text x="95.5" y="99.3" font-size="12" text-anchor="middle" fill="currentColor">the rest</text>
</svg>
</div>

What fraction of the square lies **under** the curve? It is clearly less than a half (the curve sags below the
diagonal). The answer is **exactly** $\frac13$. Under $y = x^3$ it is exactly $\frac14$, and under $y = x^4$ exactly
$\frac15$.

Those neat fractions are a clue. In $x^2 \to \frac13$, $x^3 \to \frac14$, $x^4 \to \frac15$ you might spot the power rule
running **backwards**. That is no coincidence. It is the **fundamental theorem of calculus**, which says that finding
areas and finding slopes are opposite processes. It is one of the great discoveries of all mathematics.

## The idea

### Distance is an area

In [level 5](../level-5/06-area-speed-time.md) you saw that on a speed-time graph, distance travelled is the area under
the graph. For a constant speed it is a rectangle (speed × time). For a steadily rising speed it is a triangle or a
trapezoid. But what if the speed graph is a curve?

The idea: cut the time into thin strips. In each thin strip the speed hardly changes, so the distance in that strip is
almost (speed) × (width): the area of a thin rectangle. Add them all up. The thinner the strips, the better the
answer. Any area under any curve can be found the same way.

### Riemann sums

To find the area under $y = f(x)$ from $x = a$ to $x = b$:

1. Cut $[a, b]$ into $n$ strips of equal width $\Delta x = \frac{b - a}{n}$.
2. In each strip, build a rectangle whose height is the value of $f$ at one point of the strip (the right edge, the
   left edge or the middle).
3. Add up the areas: height × width, for every strip.

This total is called a **Riemann sum**, after Bernhard Riemann, who made the idea precise in the 1850s. With right
edges at $x_1, x_2, \ldots, x_n$, in [sigma notation](../../patterns/level-7/01-sigma-notation.md):

$$R_n = \sum_{i=1}^{n} f(x_i)\,\Delta x.$$

Here is $y = x^2$ on $[0, 1]$ with 4 strips of width $\frac14$, heights taken at the right edges:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 230" role="img" aria-label="The curve y equals x squared from 0 to 1, with four rectangles each a quarter wide. Each rectangle's height is the curve's height at its right edge, so the rectangles poke out above the curve.">
  <rect x="30" y="197.1" width="69.8" height="10.9" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <rect x="99.8" y="164.2" width="69.8" height="43.8" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <rect x="169.6" y="109.6" width="69.8" height="98.4" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <rect x="239.4" y="33" width="69.8" height="175" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="0.8"/>
  <line x1="30" y1="208" x2="365" y2="208" stroke="currentColor" stroke-width="1.2"/>
  <line x1="30" y1="208" x2="30" y2="12" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="12" fill="currentColor"><line x1="99.8" y1="205" x2="99.8" y2="211" stroke="currentColor"/><text x="99.8" y="223" text-anchor="middle">¼</text><line x1="169.6" y1="205" x2="169.6" y2="211" stroke="currentColor"/><text x="169.6" y="223" text-anchor="middle">½</text><line x1="239.4" y1="205" x2="239.4" y2="211" stroke="currentColor"/><text x="239.4" y="223" text-anchor="middle">¾</text><line x1="309.2" y1="205" x2="309.2" y2="211" stroke="currentColor"/><text x="309.2" y="223" text-anchor="middle">1</text><line x1="27" y1="33" x2="33" y2="33" stroke="currentColor"/><text x="24" y="37" text-anchor="end">1</text><text x="365" y="202" text-anchor="end">x</text></g>
  <polyline points="30,208 33.7,208 37.3,207.9 41,207.7 44.7,207.5 48.3,207.2 52,206.9 55.6,206.5 59.3,206.1 63,205.6 66.6,205 70.3,204.4 74,203.7 77.6,202.9 81.3,202.1 85,201.2 88.6,200.3 92.3,199.3 96,198.2 99.6,197.1 103.3,195.9 106.9,194.7 110.6,193.4 114.3,192.1 117.9,190.6 121.6,189.2 125.3,187.6 128.9,186 132.6,184.4 136.3,182.6 139.9,180.9 143.6,179 147.2,177.1 150.9,175.2 154.6,173.2 158.2,171.1 161.9,168.9 165.6,166.7 169.2,164.5 172.9,162.1 176.6,159.8 180.2,157.3 183.9,154.8 187.6,152.3 191.2,149.6 194.9,147 198.5,144.2 202.2,141.4 205.9,138.5 209.5,135.6 213.2,132.6 216.9,129.6 220.5,126.5 224.2,123.3 227.9,120.1 231.5,116.8 235.2,113.5 238.9,110.1 242.5,106.6 246.2,103.1 249.8,99.5 253.5,95.8 257.2,92.1 260.8,88.3 264.5,84.5 268.2,80.6 271.8,76.7 275.5,72.7 279.2,68.6 282.8,64.5 286.5,60.3 290.1,56 293.8,51.7 297.5,47.3 301.1,42.9 304.8,38.4 308.5,33.9 312.1,29.3 315.8,24.6 319.5,19.9 323.1,15.1" fill="none" stroke="#eea66f" stroke-width="3"/>
  <text x="329.1" y="25.1" font-size="12" text-anchor="start" fill="currentColor">y = x²</text>
</svg>
</div>

$$R_4 = \frac14\left(\frac{1}{16} + \frac{4}{16} + \frac{9}{16} + \frac{16}{16}\right) = \frac{30}{64} = 0.46875.$$

The rectangles poke out above the curve, so this is too big. Using left edges instead, every rectangle sits under the
curve, giving $L_4 = \frac14\left(0 + \frac{1}{16} + \frac{4}{16} + \frac{9}{16}\right) = 0.21875$, too small. The true
area is trapped between them. With more strips the trap closes:

| Strips $n$ | 4 | 10 | 100 | 1000 |
| --- | --- | --- | --- | --- |
| Right sum $R_n$ (too big) | 0.46875 | 0.385 | 0.33835 | 0.3338335 |
| Left sum $L_n$ (too small) | 0.21875 | 0.285 | 0.32835 | 0.3328335 |

Both close in on $\frac13$.

### Why exactly one third

With $n$ strips the right edges are $\frac1n, \frac2n, \ldots, \frac nn$, so

$$R_n = \frac1n\left[\left(\frac1n\right)^2 + \left(\frac2n\right)^2 + \cdots + \left(\frac nn\right)^2\right] = \frac{1^2 + 2^2 + \cdots + n^2}{n^3}.$$

The sum of the first $n$ squares is $\frac{n(n + 1)(2n + 1)}{6}$ (proved in
[Patterns: sums of squares and cubes](../../patterns/level-7/05-squares-cubes.md)). So

$$R_n = \frac{n(n + 1)(2n + 1)}{6n^3} = \frac{2n^2 + 3n + 1}{6n^2} = \frac13 + \frac{1}{2n} + \frac{1}{6n^2}.$$

As $n \to \infty$ the last two terms vanish. In the same way $L_n = \frac13 - \frac{1}{2n} + \frac{1}{6n^2}$. The area is
always between $L_n$ and $R_n$, and both tend to $\frac13$, so the area is **exactly** $\frac13$.

### The definite integral

The limit of the Riemann sums, when it exists, is the **definite integral**:

$$\int_a^b f(x)\,dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i)\,\Delta x.$$

The tall $\int$ is a stretched S, for "sum", chosen by Leibniz. The $dx$ is what the thin width $\Delta x$ becomes. The
numbers $a$ and $b$ are the **limits of integration**. For a continuous function the limit always exists, whichever
point of each strip you use.

One detail: where the graph is **below** the $x$-axis, $f(x)$ is negative, so the rectangles count as negative. The
integral measures **signed area**: area above the axis minus area below. For a velocity graph that is exactly right:
time spent going backwards subtracts from the displacement.

### Antiderivatives

A function $F$ with $F' = f$ is called an **antiderivative** of $f$. Since adding a constant does not change a
derivative, if $F$ is one antiderivative then so is $F + C$ for every constant $C$, and these are all of them (two
functions with the same derivative differ by a constant; this follows from the mean value theorem). Running the rules
of this level backwards:

| $f(x)$ | $x^n$ (with $n \ne -1$) | $\frac1x$ | $e^x$ | $\cos x$ | $\sin x$ |
| --- | --- | --- | --- | --- | --- |
| antiderivative $F(x)$ | $\frac{x^{n+1}}{n + 1}$ | $\ln \lvert x \rvert$ | $e^x$ | $\sin x$ | $-\cos x$ |

Check any entry by differentiating it. For example, $\left(\frac{x^{n+1}}{n + 1}\right)' = \frac{(n + 1)x^n}{n + 1} = x^n$.

### The fundamental theorem, part 1: the area function

Fix a starting point $a$ and let $A(x)$ be the area under $f$ from $a$ up to $x$. As $x$ moves right, $A(x)$ grows.
**How fast?**

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 220" role="img" aria-label="A curve over the x-axis. The area under it from a to x is shaded and labelled A of x. A thin extra strip from x to x plus h is shaded in a second colour: its area is about f of x times h.">
  <polygon points="63.5,198 63.5,128.9 65.1,128.1 66.6,127.3 68.2,126.5 69.8,125.7 71.3,124.9 72.9,124.1 74.4,123.4 76,122.6 77.6,121.8 79.1,121.1 80.7,120.3 82.3,119.6 83.8,118.8 85.4,118.1 87,117.4 88.5,116.7 90.1,116 91.6,115.3 93.2,114.6 94.8,114 96.3,113.3 97.9,112.7 99.5,112 101,111.4 102.6,110.8 104.1,110.2 105.7,109.6 107.3,109 108.8,108.5 110.4,107.9 112,107.4 113.5,106.9 115.1,106.3 116.7,105.8 118.2,105.4 119.8,104.9 121.3,104.4 122.9,104 124.5,103.5 126,103.1 127.6,102.7 129.2,102.3 130.7,101.9 132.3,101.6 133.8,101.2 135.4,100.9 137,100.5 138.5,100.2 140.1,99.9 141.7,99.6 143.2,99.3 144.8,99.1 146.4,98.8 147.9,98.6 149.5,98.3 151,98.1 152.6,97.9 154.2,97.7 155.7,97.5 157.3,97.4 158.9,97.2 160.4,97.1 162,96.9 163.6,96.8 165.1,96.7 166.7,96.6 168.2,96.5 169.8,96.4 171.4,96.3 172.9,96.2 174.5,96.1 176.1,96.1 177.6,96 179.2,96 180.8,96 182.3,95.9 183.9,95.9 185.4,95.9 187,95.9 188.6,95.9 190.1,95.9 191.7,95.9 193.3,95.9 194.8,95.9 196.4,95.9 197.9,95.9 199.5,95.9 201.1,95.9 202.6,95.9 204.2,95.9 205.8,96 207.3,96 208.9,96 210.5,96 212,96 213.6,96 215.1,96 216.7,96 218.3,96 219.8,96 219.8,198" fill="#9cc9ea" fill-opacity="0.6" stroke="none"/>
  <polygon points="219.8,198 219.8,96 220.2,96 220.6,96 221,96 221.4,96 221.8,96 222.2,96 222.6,96 223,96 223.4,96 223.7,96 224.1,96 224.5,96 224.9,96 225.3,96 225.7,96 226.1,95.9 226.5,95.9 226.9,95.9 227.3,95.9 227.6,95.9 228,95.9 228.4,95.9 228.8,95.9 229.2,95.9 229.6,95.9 230,95.8 230.4,95.8 230.8,95.8 231.2,95.8 231.6,95.8 231.9,95.8 232.3,95.8 232.7,95.7 233.1,95.7 233.5,95.7 233.9,95.7 234.3,95.7 234.7,95.7 235.1,95.6 235.5,95.6 235.9,95.6 236.2,95.6 236.6,95.6 237,95.5 237.4,95.5 237.8,95.5 238.2,95.5 238.6,95.4 239,95.4 239.4,95.4 239.8,95.4 240.2,95.3 240.5,95.3 240.9,95.3 241.3,95.2 241.7,95.2 242.1,95.2 242.5,95.1 242.9,95.1 243.3,95.1 243.7,95 244.1,95 244.5,95 244.8,94.9 245.2,94.9 245.6,94.9 246,94.8 246.4,94.8 246.8,94.7 247.2,94.7 247.6,94.6 248,94.6 248.4,94.6 248.8,94.5 249.1,94.5 249.5,94.4 249.9,94.4 250.3,94.3 250.7,94.3 251.1,94.2 251.5,94.2 251.9,94.1 252.3,94.1 252.7,94 253.1,94 253.4,93.9 253.8,93.8 254.2,93.8 254.6,93.7 255,93.7 255.4,93.6 255.8,93.5 256.2,93.5 256.6,93.4 257,93.4 257.4,93.3 257.7,93.2 258.1,93.2 258.5,93.1 258.9,93 258.9,198" fill="#eea66f" fill-opacity="0.8" stroke="none"/>
  <line x1="30" y1="198" x2="365" y2="198" stroke="currentColor" stroke-width="1.2"/>
  <line x1="30" y1="198" x2="30" y2="12" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="12" fill="currentColor"><line x1="63.5" y1="195" x2="63.5" y2="201" stroke="currentColor"/><text x="63.5" y="213" text-anchor="middle">a</text><line x1="219.8" y1="195" x2="219.8" y2="201" stroke="currentColor"/><text x="219.8" y="213" text-anchor="middle">x</text><line x1="258.9" y1="195" x2="258.9" y2="201" stroke="currentColor"/><text x="258.9" y="213" text-anchor="middle">x + h</text></g>
  <polyline points="30,146.3 34,144.3 38.1,142.2 42.1,140.1 46.2,138 50.2,135.9 54.3,133.7 58.3,131.6 62.4,129.5 66.4,127.4 70.5,125.3 74.5,123.3 78.6,121.3 82.6,119.4 86.7,117.5 90.7,115.7 94.8,114 98.8,112.3 102.9,110.7 106.9,109.2 111,107.7 115,106.4 119.1,105.1 123.1,103.9 127.1,102.8 131.2,101.8 135.2,100.9 139.3,100.1 143.3,99.3 147.4,98.6 151.4,98.1 155.5,97.6 159.5,97.1 163.6,96.8 167.6,96.5 171.7,96.3 175.7,96.1 179.8,96 183.8,95.9 187.9,95.9 191.9,95.9 196,95.9 200,95.9 204.1,95.9 208.1,96 212.2,96 216.2,96 220.3,96 224.3,96 228.3,95.9 232.4,95.8 236.4,95.6 240.5,95.3 244.5,95 248.6,94.5 252.6,94 256.7,93.4 260.7,92.7 264.8,91.8 268.8,90.9 272.9,89.8 276.9,88.5 281,87.2 285,85.7 289.1,84 293.1,82.2 297.2,80.2 301.2,78 305.3,75.7 309.3,73.2 313.4,70.6 317.4,67.7 321.4,64.7 325.5,61.5 329.5,58.2 333.6,54.6 337.6,50.9 341.7,47 345.7,43 349.8,38.8 353.8,34.4" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <text x="141.7" y="156.7" font-size="14" text-anchor="middle" fill="currentColor">A(x)</text>
  <line x1="239.4" y1="174.8" x2="267.3" y2="174.8" stroke="currentColor" stroke-width="1"/>
  <text x="270.1" y="178.8" font-size="11" text-anchor="start" fill="currentColor">strip ≈ f(x) × h</text>
</svg>
</div>

Move $x$ on by a small $h$. The area grows by a thin strip from $x$ to $x + h$. That strip is at least
$m \cdot h$ and at most $M \cdot h$, where $m$ and $M$ are the smallest and largest heights of $f$ on $[x, x + h]$.
Divide by $h$:

$$m \le \frac{A(x + h) - A(x)}{h} \le M.$$

As $h \to 0$, if $f$ is continuous, both $m$ and $M$ are squeezed towards $f(x)$. So

$$A'(x) = f(x).$$

**The rate at which the area grows is the height of the curve.** The taller the curve at the moving edge, the faster
area is swept up. So the area function is an antiderivative of $f$.

### The fundamental theorem, part 2: the shortcut

Now let $F$ be **any** antiderivative of $f$. Both $A$ and $F$ have derivative $f$, so they differ by a constant:
$A(x) = F(x) + C$. At $x = a$ there is no area yet, so $0 = A(a) = F(a) + C$, giving $C = -F(a)$. So
$A(x) = F(x) - F(a)$, and at $x = b$:

$$\int_a^b f(x)\,dx = F(b) - F(a).$$

This is often written $\big[F(x)\big]_a^b$. For the opening question, $F(x) = \frac{x^3}{3}$, so
$\int_0^1 x^2\,dx = \frac13 - 0 = \frac13$, with no rectangles and no sum of squares. The same works for $x^3$
($\frac{x^4}{4}$, area $\frac14$) and $x^4$ ($\frac{x^5}{5}$, area $\frac15$): the pattern from the question.

### Why integration undoes differentiation

Read part 2 with $f = F'$:

$$\int_a^b F'(x)\,dx = F(b) - F(a).$$

**Adding up a rate of change over an interval gives the total change.** Add up velocity over time, and you get the
change in position. Add up a flow rate, and you get the total amount that flowed. Differentiating turns an amount into
its rate; integrating turns the rate back into the amount. Isaac Newton and Gottfried Leibniz, working separately in
the second half of the 1600s, each saw this link, and it is why the two halves of calculus are one subject.

<figure class="play" data-play="riemann"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Fill the area under y = x² from 0 to 2 with rectangles. The more rectangles, the closer the total gets to the exact 8/3, which the antiderivative x³/3 gives in one step.</figcaption></figure>

## Worked examples

**1. An area between two points.** Find $\int_1^2 x^2\,dx$.

$F(x) = \frac{x^3}{3}$, so the area is $\frac83 - \frac13 = \frac73 \approx 2.33$. Sense check: on $[1, 2]$ the height
goes from 1 to 4 and the width is 1, so the area must be between 1 and 4. ✓

**2. Distance from a changing speed.** A cart's speed is $v(t) = 3t^2$ m/s. How far does it go from $t = 0$ to $t = 2$?

Distance $= \int_0^2 3t^2\,dt = \big[t^3\big]_0^2 = 8 - 0 = 8$ m.

**3. Falling on Mars.** A stone dropped on Mars has speed about $v(t) = 3.71t$ m/s. How far does it fall in the first
3 seconds?

$\int_0^3 3.71t\,dt = \left[1.855t^2\right]_0^3 = 1.855 \times 9 \approx 16.7$ m. That is the formula $d \approx 1.86t^2$
from level 5, now produced by integration. (The graph is a triangle with base 3 and height 11.13, area
$\frac12 \times 3 \times 11.13 \approx 16.7$ ✓.)

**4. One arch of a sine wave.** Find the area under $y = \sin x$ from 0 to $\pi$.

An antiderivative is $-\cos x$. Area $= -\cos\pi - (-\cos 0) = 1 + 1 = 2$. Exactly 2: a surprisingly tidy answer for a
curved region with $\pi$ in it.

**5. Signed area.** Find $\int_0^2 (x^2 - 2x)\,dx$ and explain the sign.

$\left[\frac{x^3}{3} - x^2\right]_0^2 = \frac83 - 4 = -\frac43$. Negative, because on $(0, 2)$ the curve $x^2 - 2x = x(x - 2)$
is below the axis. The region between the curve and the axis has area $\frac43$.

## Try it

1. A car drives at a steady 25 m/s for 40 seconds. Sketch the speed-time graph and find the distance.
2. Find the left-edge sum $L_4$ for $x^2$ on $[0, 1]$ yourself, and average it with $R_4 = 0.46875$. How close is the
   average to $\frac13$?
3. Find $\int_0^3 x^2\,dx$.
4. Find $\int_0^2 (3x^2 + 1)\,dx$.
5. Find $\int_1^e \frac1x\,dx$.
6. Find $\int_0^{\pi/2} \cos x\,dx$.
7. Water flows into a tank at $r(t) = 6t$ litres per minute. How much flows in during the first 4 minutes? Check with
   a triangle.
8. Find $\int_{-1}^{1} x^3\,dx$. Explain the answer with a sketch.

??? note "Answers"
    1. A flat line at 25 from $t = 0$ to 40: a rectangle, area $25 \times 40 = 1000$ m.
    2. $L_4 = \frac14\left(0 + \frac{1}{16} + \frac{4}{16} + \frac{9}{16}\right) = \frac{14}{64} = 0.21875$. Average
       $\frac{0.21875 + 0.46875}{2} = 0.34375$, only about 0.01 more than $\frac13 \approx 0.3333$.
    3. $\left[\frac{x^3}{3}\right]_0^3 = 9 - 0 = 9$.
    4. $\left[x^3 + x\right]_0^2 = (8 + 2) - 0 = 10$.
    5. $\big[\ln x\big]_1^e = \ln e - \ln 1 = 1 - 0 = 1$. (This is one way to define $e$: the number where the area
       under $\frac1x$ from 1 reaches exactly 1.)
    6. $\big[\sin x\big]_0^{\pi/2} = 1 - 0 = 1$.
    7. $\left[3t^2\right]_0^4 = 48$ litres. The graph is a triangle with base 4 and height 24: $\frac12 \times 4 \times 24 = 48$ ✓.
    8. $\left[\frac{x^4}{4}\right]_{-1}^{1} = \frac14 - \frac14 = 0$. The curve $x^3$ is below the axis on $[-1, 0]$ and
       above it on $[0, 1]$, and the two pieces are the same shape turned round (the graph has half-turn symmetry),
       so the negative area cancels the positive area exactly. The actual shaded area is $\frac14 + \frac14 = \frac12$.

## Common mistake

**Forgetting to subtract $F(a)$.** $\int_1^2 x^2\,dx$ is not $F(2) = \frac83$. It is the area from 1 to 2, so the area
from 0 to 1 must come off: $F(2) - F(1) = \frac73$. Write both terms every time.

**Treating every integral as an area.** A definite integral is a **signed** area. If you want the actual area of a
region that dips below the axis, split it where the graph crosses the axis and add the sizes of the pieces
(question 8).

## Where it leads

- Back: [Related rates](05-related-rates.md) · Next: [Differential equations: a first look](07-differential-equations.md)
- [Level 8 page](index.md) · [Change and motion topic page](../index.md)
- Sums that go on forever, and how a limit can capture them: [Infinity](../../infinity/index.md).
- Areas of curved shapes without calculus: [Measurement: curved areas](../../measurement/level-8/04-curved-areas.md).
- Continuous probability is area under a curve: [Probability: continuous random variables](../../probability/level-8/02-continuous-random-variables.md).
- On the U of T shelf: [MAT137 Unit 7: the definition of the integral](../../../uoft/MAT137/unit07.md) and
  [Unit 8: the fundamental theorem of calculus](../../../uoft/MAT137/unit08.md).
