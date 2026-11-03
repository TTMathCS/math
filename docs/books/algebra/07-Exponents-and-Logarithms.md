# 7. Exponents and logarithms

*Some quantities grow by adding the same amount each step; many more grow by multiplying by the same factor: money
earning interest, bacteria dividing, a rumour spreading, a radioactive sample decaying. Multiplying again and again
is written with exponents, and running it backwards ("how many times must I multiply?") is the logarithm. In this
chapter you will see why $a^0 = 1$ and $a^{1/2} = \sqrt{a}$ are forced on us, model growth and decay, prove the laws
of logarithms, solve exponential equations, meet the number $e$ as the limit of compound interest, and see why
decibels, pH and earthquake magnitudes are all logarithms.*

!!! abstract "In this chapter"
    **You will learn:**

    - what $a^n$ means for whole, negative, fractional and irrational $n$, and why each definition is the only sensible one
    - how to model exponential growth and decay, with doubling times and half-lives
    - what a logarithm is, and proofs of the product, quotient and power laws
    - how to change the base of a logarithm, and count the digits of huge numbers
    - how to solve exponential and logarithmic equations, and avoid their traps
    - where the number $e$ comes from, with a proof that the compound-interest limit exists
    - why so many measuring scales (sound, acidity, earthquakes, star brightness) are logarithmic

    **You need:** [Chapter 6](06-Functions.md) (functions and inverses) and [Chapter 2](02-Equations-and-Inequalities.md)
    (solving equations and inequalities). Gentler versions:
    [Powers](../../topics/numbers/level-5/03-powers.md),
    [Zero and negative exponents](../../topics/numbers/level-5/04-zero-negative-exponents.md),
    [Exponent laws](../../topics/algebra/level-6/01-exponent-laws.md),
    [Exponential functions](../../topics/algebra/level-7/07-exponential-functions.md),
    [Logarithms](../../topics/algebra/level-8/04-logarithms.md) and
    [Exponential and log equations](../../topics/algebra/level-8/05-exp-log-equations.md) on the Topics shelf.

    **Levels:** 7.1 to 7.3 are beginner to intermediate; 7.4 to 7.6 and 7.8 are intermediate; 7.7 is advanced.

## 7.1 Exponents: whole, negative, fractional, real

**Whole-number exponents.** For a number $a$ and a whole number $n \ge 1$,

$$
a^n = \underbrace{a \cdot a \cdots a}_{n \text{ factors}} .
$$

$a$ is the **base** and $n$ the **exponent** (or power). Three laws follow by counting factors:

$$
a^m \cdot a^n = a^{m+n}, \qquad (a^m)^n = a^{mn}, \qquad (ab)^n = a^n b^n .
$$

*Why.* $a^m a^n$ is $m$ factors of $a$ followed by $n$ more: $m + n$ factors. $(a^m)^n$ is $n$ blocks of $m$ factors:
$mn$ factors. $(ab)^n$ is $n$ copies of $ab$, and since multiplication can be reordered
([Chapter 1](01-The-Language-of-Algebra.md)), that is $n$ $a$'s times $n$ $b$'s. $\square$

A fourth law, for $a \neq 0$ and $m > n$: $a^m / a^n = a^{m-n}$, because $n$ of the factors cancel.

**Zero exponent.** What should $a^0$ mean? "Zero factors of $a$" sounds like nothing at all. But we want the laws
to keep working. If $a^m \cdot a^0 = a^{m+0} = a^m$, then $a^0$ must be 1 (divide both sides by $a^m$, allowed when
$a \neq 0$). So for $a \neq 0$ we *define*

$$
a^0 = 1 .
$$

This is not a discovery about nature; it is the only choice that keeps the laws true. (The same reasoning makes an
empty product equal to 1, just as an empty sum is 0: multiplying by "nothing" should change nothing. The
expression $0^0$ is usually set to 1 in algebra and combinatorics, for this reason, but left undefined in some
parts of calculus.)

**Negative exponents.** Again, keep the laws: $a^n \cdot a^{-n} = a^0 = 1$, so $a^{-n}$ must be the reciprocal of
$a^n$:

$$
a^{-n} = \frac{1}{a^n} \qquad (a \neq 0).
$$

So $2^{-3} = 1/8$ and $10^{-2} = 0.01$. Now $a^m / a^n = a^{m-n}$ holds for all integers $m$, $n$, with no
condition $m > n$. A pattern shows it is natural: going down the list $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, each step
halves, so continuing gives $2^0 = 1$, $2^{-1} = 1/2$, $2^{-2} = 1/4$.

**Fractional exponents.** What should $a^{1/2}$ be? If the law $(a^m)^n = a^{mn}$ is to survive, then
$(a^{1/2})^2 = a^1 = a$. So $a^{1/2}$ must be a number whose square is $a$: a square root. For $a > 0$ there are two,
and we pick the positive one. In general, for $a > 0$ and a whole number $n \ge 1$,

$$
a^{1/n} = \sqrt[n]{a} \quad \text{(the positive number whose } n\text{th power is } a\text{)}, \qquad
a^{m/n} = \left(a^{1/n}\right)^m .
$$

So $8^{2/3} = (\sqrt[3]{8})^2 = 4$, $16^{3/4} = 2^3 = 8$, $27^{-2/3} = 1/9$.

There is a small thing to check: $m/n$ can be written in many ways ($2/3 = 4/6$), and the definition must not depend
on which. If $m/n = p/q$, is $(a^{1/n})^m = (a^{1/q})^p$? Raise both to the power $nq$: the left gives
$a^{mq}$ (since $(a^{1/n})^{n} = a$), the right gives $a^{pn}$, and $mq = pn$ because $m/n = p/q$. Two positive
numbers with the same $nq$-th power are equal (the function $x \mapsto x^{nq}$ is one-to-one on positive numbers).
So the definition is consistent. $\square$

**Why the base must be positive.** For negative bases, fractional powers misbehave. $\sqrt[3]{-8} = -2$ makes
sense, so one might write $(-8)^{1/3} = -2$. But $1/3 = 2/6$, and $\left((-8)^2\right)^{1/6} = 64^{1/6} = 2$. The
same exponent gives two answers depending on how it is written. To keep the laws, we only allow fractional and real
exponents for positive bases. (In [Chapter 9](09-Complex-Numbers.md) the complex numbers will explain what is
really going on: there are three cube roots of $-8$, and choosing among them is the problem.)

**Irrational exponents.** What is $2^{\sqrt 2}$? $\sqrt 2 = 1.41421\dots$ is not a fraction, so none of the
definitions apply. But $\sqrt 2$ is approached by fractions, and the powers approach a limit:

| $x$ | 1.4 | 1.41 | 1.414 | 1.4142 | $\sqrt 2$ |
|---|---|---|---|---|---|
| $2^x$ | 2.63902 | 2.65737 | 2.66475 | 2.66512 | 2.66514... |

We **define** $a^x$, for $a > 0$ and real $x$, as the limit of $a^{r}$ as the fraction $r$ approaches $x$. That the
limit exists, does not depend on the fractions chosen, and still obeys the three laws is proved in a first course
in analysis (it uses the completeness of the real numbers and the fact that $r \mapsto a^r$ is increasing for
$a > 1$); see [MAT158H1 Unit 11](../../uoft/MAT158H1/unit11.md) for one careful route, which instead defines the
logarithm first, by an integral, and the exponential as its inverse. For algebra, the upshot is simple: **for
$a > 0$, $a^x$ is defined for every real $x$, is always positive, and the laws**

$$
a^x a^y = a^{x+y}, \qquad (a^x)^y = a^{xy}, \qquad (ab)^x = a^x b^x, \qquad a^{-x} = \frac{1}{a^x}
$$

**hold for all real $x$, $y$.**

## 7.2 Exponential growth and decay

An **exponential function** is $f(x) = a^x$ with base $a > 0$, $a \neq 1$, or more generally $f(t) = C a^t$. Its
defining feature: **equal steps in $t$ multiply $f$ by equal factors.** Indeed $f(t + 1) = C a^{t+1} = a \cdot f(t)$.
Compare a linear function $g(t) = C + mt$, where equal steps *add* equal amounts.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 330 270" role="img" aria-label="Graphs of y equals 2 to the x (rising, through (0, 1)), y equals one half to the x (falling, its mirror image in the y axis), and y equals log base 2 of x (through (1, 0)), the mirror image of 2 to the x in the dashed line y equals x">
  <line x1="10.0" y1="160.0" x2="320.0" y2="160.0" stroke="currentColor" stroke-width="1.2"/>
  <line x1="160.0" y1="10.0" x2="160.0" y2="265.0" stroke="currentColor" stroke-width="1.2"/>
  <line x1="10.0" y1="157.0" x2="10.0" y2="163.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="10" y="175" font-size="10" text-anchor="middle" fill="currentColor">−5</text>
  <line x1="40.0" y1="157.0" x2="40.0" y2="163.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="40" y="175" font-size="10" text-anchor="middle" fill="currentColor">−4</text>
  <line x1="70.0" y1="157.0" x2="70.0" y2="163.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="70" y="175" font-size="10" text-anchor="middle" fill="currentColor">−3</text>
  <line x1="100.0" y1="157.0" x2="100.0" y2="163.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="100" y="175" font-size="10" text-anchor="middle" fill="currentColor">−2</text>
  <line x1="130.0" y1="157.0" x2="130.0" y2="163.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="130" y="175" font-size="10" text-anchor="middle" fill="currentColor">−1</text>
  <line x1="190.0" y1="157.0" x2="190.0" y2="163.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="190" y="175" font-size="10" text-anchor="middle" fill="currentColor">1</text>
  <line x1="220.0" y1="157.0" x2="220.0" y2="163.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="220" y="175" font-size="10" text-anchor="middle" fill="currentColor">2</text>
  <line x1="250.0" y1="157.0" x2="250.0" y2="163.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="250" y="175" font-size="10" text-anchor="middle" fill="currentColor">3</text>
  <line x1="280.0" y1="157.0" x2="280.0" y2="163.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="280" y="175" font-size="10" text-anchor="middle" fill="currentColor">4</text>
  <line x1="310.0" y1="157.0" x2="310.0" y2="163.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="310" y="175" font-size="10" text-anchor="middle" fill="currentColor">5</text>
  <line x1="157.0" y1="250.0" x2="163.0" y2="250.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="152" y="254" font-size="10" text-anchor="end" fill="currentColor">−3</text>
  <line x1="157.0" y1="220.0" x2="163.0" y2="220.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="152" y="224" font-size="10" text-anchor="end" fill="currentColor">−2</text>
  <line x1="157.0" y1="190.0" x2="163.0" y2="190.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="152" y="194" font-size="10" text-anchor="end" fill="currentColor">−1</text>
  <line x1="157.0" y1="130.0" x2="163.0" y2="130.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="152" y="134" font-size="10" text-anchor="end" fill="currentColor">1</text>
  <line x1="157.0" y1="100.0" x2="163.0" y2="100.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="152" y="104" font-size="10" text-anchor="end" fill="currentColor">2</text>
  <line x1="157.0" y1="70.0" x2="163.0" y2="70.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="152" y="74" font-size="10" text-anchor="end" fill="currentColor">3</text>
  <line x1="157.0" y1="40.0" x2="163.0" y2="40.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="152" y="44" font-size="10" text-anchor="end" fill="currentColor">4</text>
  <line x1="58.0" y1="262.0" x2="298.0" y2="22.0" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <polyline fill="none" stroke="#eea66f" stroke-width="2.5" points="10.0,159.1 11.5,159.0 13.0,159.0 14.5,159.0 16.0,158.9 17.5,158.9 19.0,158.8 20.5,158.8 22.0,158.8 23.5,158.7 25.0,158.7 26.5,158.6 28.0,158.6 29.5,158.5 31.0,158.5 32.5,158.4 34.0,158.4 35.5,158.3 37.0,158.3 38.5,158.2 40.0,158.1 41.5,158.1 43.0,158.0 44.5,157.9 46.0,157.8 47.5,157.8 49.0,157.7 50.5,157.6 52.0,157.5 53.5,157.4 55.0,157.3 56.5,157.3 58.0,157.2 59.5,157.1 61.0,157.0 62.5,156.8 64.0,156.7 65.5,156.6 67.0,156.5 68.5,156.4 70.0,156.2 71.5,156.1 73.0,156.0 74.5,155.8 76.0,155.7 77.5,155.5 79.0,155.4 80.5,155.2 82.0,155.1 83.5,154.9 85.0,154.7 86.5,154.5 88.0,154.3 89.5,154.1 91.0,153.9 92.5,153.7 94.0,153.5 95.5,153.2 97.0,153.0 98.5,152.8 100.0,152.5 101.5,152.2 103.0,152.0 104.5,151.7 106.0,151.4 107.5,151.1 109.0,150.8 110.5,150.4 112.0,150.1 113.5,149.8 115.0,149.4 116.5,149.0 118.0,148.6 119.5,148.2 121.0,147.8 122.5,147.4 124.0,146.9 125.5,146.5 127.0,146.0 128.5,145.5 130.0,145.0 131.5,144.5 133.0,143.9 134.5,143.4 136.0,142.8 137.5,142.2 139.0,141.5 140.5,140.9 142.0,140.2 143.5,139.5 145.0,138.8 146.5,138.0 148.0,137.3 149.5,136.5 151.0,135.6 152.5,134.8 154.0,133.9 155.5,133.0 157.0,132.0 158.5,131.0 160.0,130.0 161.5,128.9 163.0,127.8 164.5,126.7 166.0,125.5 167.5,124.3 169.0,123.1 170.5,121.8 172.0,120.4 173.5,119.0 175.0,117.6 176.5,116.1 178.0,114.5 179.5,112.9 181.0,111.3 182.5,109.5 184.0,107.8 185.5,105.9 187.0,104.0 188.5,102.0 190.0,100.0 191.5,97.9 193.0,95.7 194.5,93.4 196.0,91.1 197.5,88.6 199.0,86.1 200.5,83.5 202.0,80.8 203.5,78.0 205.0,75.1 206.5,72.2 208.0,69.1 209.5,65.8 211.0,62.5 212.5,59.1 214.0,55.5 215.5,51.8 217.0,48.0 218.5,44.1 220.0,40.0 221.5,35.8 223.0,31.4 224.5,26.9 226.0,22.2"/>
  <polyline fill="none" stroke="#7ccf9a" stroke-width="2.5" points="94.0,22.2 95.5,26.9 97.0,31.4 98.5,35.8 100.0,40.0 101.5,44.1 103.0,48.0 104.5,51.8 106.0,55.5 107.5,59.1 109.0,62.5 110.5,65.8 112.0,69.1 113.5,72.2 115.0,75.1 116.5,78.0 118.0,80.8 119.5,83.5 121.0,86.1 122.5,88.6 124.0,91.1 125.5,93.4 127.0,95.7 128.5,97.9 130.0,100.0 131.5,102.0 133.0,104.0 134.5,105.9 136.0,107.8 137.5,109.5 139.0,111.3 140.5,112.9 142.0,114.5 143.5,116.1 145.0,117.6 146.5,119.0 148.0,120.4 149.5,121.8 151.0,123.1 152.5,124.3 154.0,125.5 155.5,126.7 157.0,127.8 158.5,128.9 160.0,130.0 161.5,131.0 163.0,132.0 164.5,133.0 166.0,133.9 167.5,134.8 169.0,135.6 170.5,136.5 172.0,137.3 173.5,138.0 175.0,138.8 176.5,139.5 178.0,140.2 179.5,140.9 181.0,141.5 182.5,142.2 184.0,142.8 185.5,143.4 187.0,143.9 188.5,144.5 190.0,145.0 191.5,145.5 193.0,146.0 194.5,146.5 196.0,146.9 197.5,147.4 199.0,147.8 200.5,148.2 202.0,148.6 203.5,149.0 205.0,149.4 206.5,149.8 208.0,150.1 209.5,150.4 211.0,150.8 212.5,151.1 214.0,151.4 215.5,151.7 217.0,152.0 218.5,152.2 220.0,152.5 221.5,152.8 223.0,153.0 224.5,153.2 226.0,153.5 227.5,153.7 229.0,153.9 230.5,154.1 232.0,154.3 233.5,154.5 235.0,154.7 236.5,154.9 238.0,155.1 239.5,155.2 241.0,155.4 242.5,155.5 244.0,155.7 245.5,155.8 247.0,156.0 248.5,156.1 250.0,156.2 251.5,156.4 253.0,156.5 254.5,156.6 256.0,156.7 257.5,156.8 259.0,157.0 260.5,157.1 262.0,157.2 263.5,157.3 265.0,157.3 266.5,157.4 268.0,157.5 269.5,157.6 271.0,157.7 272.5,157.8 274.0,157.8 275.5,157.9 277.0,158.0 278.5,158.1 280.0,158.1 281.5,158.2 283.0,158.3 284.5,158.3 286.0,158.4 287.5,158.4 289.0,158.5 290.5,158.5 292.0,158.6 293.5,158.6 295.0,158.7 296.5,158.7 298.0,158.8 299.5,158.8 301.0,158.8 302.5,158.9 304.0,158.9 305.5,159.0 307.0,159.0 308.5,159.0 310.0,159.1"/>
  <polyline fill="none" stroke="#9cc9ea" stroke-width="2.5" points="162.8,262.0 162.9,260.5 163.0,259.0 163.2,257.5 163.3,256.0 163.4,254.5 163.5,253.0 163.6,251.5 163.8,250.0 163.9,248.5 164.0,247.0 164.2,245.5 164.3,244.0 164.5,242.5 164.6,241.0 164.8,239.5 164.9,238.0 165.1,236.5 165.3,235.0 165.5,233.5 165.7,232.0 165.9,230.5 166.1,229.0 166.3,227.5 166.5,226.0 166.8,224.5 167.0,223.0 167.2,221.5 167.5,220.0 167.8,218.5 168.0,217.0 168.3,215.5 168.6,214.0 168.9,212.5 169.2,211.0 169.6,209.5 169.9,208.0 170.2,206.5 170.6,205.0 171.0,203.5 171.4,202.0 171.8,200.5 172.2,199.0 172.6,197.5 173.1,196.0 173.5,194.5 174.0,193.0 174.5,191.5 175.0,190.0 175.5,188.5 176.1,187.0 176.6,185.5 177.2,184.0 177.8,182.5 178.5,181.0 179.1,179.5 179.8,178.0 180.5,176.5 181.2,175.0 182.0,173.5 182.7,172.0 183.5,170.5 184.4,169.0 185.2,167.5 186.1,166.0 187.0,164.5 188.0,163.0 189.0,161.5 190.0,160.0 191.1,158.5 192.2,157.0 193.3,155.5 194.5,154.0 195.7,152.5 196.9,151.0 198.2,149.5 199.6,148.0 201.0,146.5 202.4,145.0 203.9,143.5 205.5,142.0 207.1,140.5 208.7,139.0 210.5,137.5 212.2,136.0 214.1,134.5 216.0,133.0 218.0,131.5 220.0,130.0 222.1,128.5 224.3,127.0 226.6,125.5 228.9,124.0 231.4,122.5 233.9,121.0 236.5,119.5 239.2,118.0 242.0,116.5 244.9,115.0 247.8,113.5 250.9,112.0 254.2,110.5 257.5,109.0 260.9,107.5 264.5,106.0 268.2,104.5 272.0,103.0 275.9,101.5 280.0,100.0 284.2,98.5 288.6,97.0 293.1,95.5 297.8,94.0"/>
  <circle cx="160.0" cy="130.0" r="3.5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="190.0" cy="160.0" r="3.5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="229" y="25" font-size="12" text-anchor="start" fill="currentColor">y = 2ˣ</text>
  <text x="91" y="25" font-size="12" text-anchor="end" fill="currentColor">y = (1/2)ˣ</text>
  <text x="310" y="82" font-size="12" text-anchor="end" fill="currentColor">y = log₂ x</text>
  <text x="307" y="16" font-size="11" text-anchor="end" fill="currentColor">y = x</text>
</svg>
</div>

For $a > 1$ the graph rises, slowly at first and then steeply; for $0 < a < 1$ it falls towards zero without ever
reaching it. All of them pass through $(0, 1)$, since $a^0 = 1$, and all are positive. The graph of $(1/a)^x$ is the
mirror image of $a^x$ in the $y$-axis, since $(1/a)^x = a^{-x}$ (a reflection from [Chapter 6](06-Functions.md)).

**Growth.** A population of bacteria doubles every 20 minutes. Starting from $N_0$ cells, after $t$ hours (three
doublings an hour) there are

$$
N(t) = N_0 \cdot 2^{3t}
$$

cells. After 3 hours, $2^9 = 512$ times as many. After a day, $2^{72} \approx 4.7 \times 10^{21}$ times as many, which
is why real colonies stop growing exponentially: they run out of food. Every exponential model in the real world
is valid only for a while.

**Percentage growth.** Money growing at 7% a year is multiplied by 1.07 each year: after $t$ years, $P(t) = P_0 (1.07)^t$.
How long until it doubles? We need $1.07^t = 2$. By trial, $1.07^{10} \approx 1.967$, just short, so a little over 10
years; in 7.6 we will solve it exactly ($t \approx 10.24$). Bankers use the **rule of 72**: at $r$ percent, money
doubles in about $72/r$ years ($72/7 \approx 10.3$). It is an approximation that works well for rates of a few percent.

**Decay and half-life.** A radioactive isotope decays so that in each fixed time, the **half-life** $T$, half of
what remains decays. After time $t$ the amount left is

$$
N(t) = N_0 \left(\tfrac12\right)^{t/T} = N_0 \, 2^{-t/T} .
$$

Carbon-14 has a half-life of about 5730 years. After 10 000 years the fraction left is
$2^{-10000/5730} \approx 0.298$, about 30%. Radiocarbon dating runs this backwards: measure the fraction, solve
for $t$; and solving for an exponent is exactly what logarithms are for.

**Exponentials beat powers.** Compare $2^n$ with $n^{10}$. At $n = 10$, $2^{10} = 1024$ while
$10^{10}$ is ten billion; the power is far ahead. But from $n = 59$ on, $2^n > n^{10}$ forever. Why must the
exponential win eventually? Look at what happens from one step to the next: $2^n$ is multiplied by 2, while
$n^{10}$ is multiplied by $\left(\frac{n+1}{n}\right)^{10} = \left(1 + \frac1n\right)^{10}$, which gets closer and
closer to 1 as $n$ grows (for $n \ge 15$ it is below 2, since $(16/15)^{10} \approx 1.91$). Once each step multiplies
the exponential by more than the power, the ratio $2^n / n^{10}$ grows by a fixed factor above 1 at every step and
must eventually pass any bound. The same argument shows that $a^n$ beats $n^k$ for any $a > 1$ and any $k$.

## 7.3 Logarithms: the inverse of exponentials

$2^x = 8$ has the solution $x = 3$. What about $2^x = 10$? Somewhere between 3 and 4, since $2^3 = 8 < 10 < 16 = 2^4$.
We need a name for "the exponent that turns 2 into 10".

For $a > 0$, $a \neq 1$, the function $x \mapsto a^x$ is a bijection from $\mathbb{R}$ onto $(0, \infty)$: it is
one-to-one because it is strictly increasing (for $a > 1$) or strictly decreasing (for $a < 1$), and it is onto
$(0, \infty)$ because it takes every positive value. (The second claim needs the intermediate value theorem of
calculus; we take it as given here.) So by Theorem 6.1 of [Chapter 6](06-Functions.md) it has an inverse, the
**logarithm to base $a$**:

$$
\log_a y = x \quad \text{means} \quad a^x = y .
$$

In words: **$\log_a y$ is the power you must raise $a$ to, to get $y$.** So $\log_2 8 = 3$, $\log_{10} 1000 = 3$,
$\log_{10} 0.01 = -2$, $\log_5 1 = 0$, $\log_9 3 = 1/2$, and $\log_2 10 \approx 3.3219$.

Because they are inverse functions,

$$
a^{\log_a y} = y \quad (y > 0), \qquad \log_a(a^x) = x \quad (\text{all } x).
$$

Facts that follow at once:

- $\log_a y$ is defined only for $y > 0$. There is no power of 2 that equals 0 or $-3$.
- $\log_a 1 = 0$ and $\log_a a = 1$.
- The graph of $\log_a$ is the mirror image of the graph of $a^x$ in the line $y = x$; it passes through $(1, 0)$,
  climbs slowly for $a > 1$, and plunges down as $y$ approaches 0.
- For $a > 1$, $\log_a$ is increasing: bigger numbers have bigger logs. It grows very slowly:
  $\log_{10}$ of a billion is only 9.

Two bases have special names. $\log_{10}$ is the **common logarithm**, often written just $\log$ on calculators;
$\log_e$, with the number $e \approx 2.718$ of 7.7, is the **natural logarithm**, written $\ln$. In much of pure
mathematics "$\log$" means $\ln$; in computer science it often means $\log_2$. When it matters, say which.

**A logarithm counts multiplications.** $\log_{10} y$ is roughly "how many digits $y$ has"; $\log_2 y$ is "how many
times can you halve $y$ before reaching 1". A binary search through a sorted list of a million names takes about
$\log_2 10^6 \approx 20$ halvings. This is why logarithms show up wherever things are repeatedly split or multiplied.

## 7.4 The laws of logarithms, proved

**Theorem 7.1.** For $a > 0$, $a \neq 1$, positive $x$, $y$ and any real $r$:

1. $\log_a (xy) = \log_a x + \log_a y$ (product law),
2. $\log_a (x/y) = \log_a x - \log_a y$ (quotient law),
3. $\log_a (x^r) = r \log_a x$ (power law).

*Proof.* Let $u = \log_a x$ and $v = \log_a y$, so that $x = a^u$ and $y = a^v$.

1. $xy = a^u a^v = a^{u+v}$, so the power that gives $xy$ is $u + v$: $\log_a(xy) = u + v$.
2. $x / y = a^u / a^v = a^{u - v}$, so $\log_a(x/y) = u - v$.
3. $x^r = (a^u)^r = a^{ur}$, so $\log_a(x^r) = ru$. $\square$

Each law is an exponent law read backwards. The product law is the reason logarithms were invented: it **turns
multiplication into addition**. Before electronic calculators, to multiply two eight-digit numbers you looked up
their logarithms in a printed table, added them, and looked up the number with that logarithm. A slide rule does
the same with two rulers marked in logarithmic distances: sliding one along the other adds lengths, so it
multiplies numbers.

**Example 1.** Expand $\log_3 \dfrac{9x^4}{\sqrt{y}}$. Product and quotient: $\log_3 9 + \log_3 x^4 - \log_3 y^{1/2}$.
Power law and $\log_3 9 = 2$: $2 + 4\log_3 x - \tfrac12 \log_3 y$.

**Example 2.** Combine $2\ln x - \ln(x + 1) + \tfrac13 \ln 8$ into one logarithm. Power law first:
$\ln x^2 - \ln(x + 1) + \ln 2$. Then: $\ln \dfrac{2x^2}{x + 1}$.

**Common mistakes, and why they are wrong.** $\log(x + y)$ is **not** $\log x + \log y$: try $x = y = 1$ in base 10:
$\log 2 \approx 0.301$, but $\log 1 + \log 1 = 0$. And $\dfrac{\log x}{\log y}$ is **not** $\log(x/y)$: in base 10 with
$x = 100$, $y = 10$, the first is $2/1 = 2$ and the second is $\log 10 = 1$. The laws convert products into sums,
nothing else.

## 7.5 Change of base

Calculators have only $\log_{10}$ and $\ln$. How do we compute $\log_2 10$?

**Theorem 7.2 (change of base).** For positive $a, b \neq 1$ and $y > 0$,

$$
\log_a y = \frac{\log_b y}{\log_b a} .
$$

*Proof.* Let $x = \log_a y$, so $a^x = y$. Take $\log_b$ of both sides and use the power law:
$x \log_b a = \log_b y$. Since $a \neq 1$, $\log_b a \neq 0$, and dividing gives the result. $\square$

So $\log_2 10 = \dfrac{\ln 10}{\ln 2} \approx \dfrac{2.302585}{0.693147} \approx 3.321928$. Two special cases are worth
remembering: $\log_a b = \dfrac{1}{\log_b a}$ (take $y = b$), and every logarithm is a constant multiple of every
other: $\log_a y = (\text{constant}) \cdot \ln y$ with constant $1/\ln a$. So there is essentially one logarithm
function, in different units, just as there is one length measured in metres or feet.

**Counting digits.** A whole number $N \ge 1$ has $d$ digits exactly when $10^{d-1} \le N < 10^d$, that is
$d - 1 \le \log_{10} N < d$. So

$$
\text{number of digits of } N = \lfloor \log_{10} N \rfloor + 1 .
$$

**Example 3.** How many digits does $2^{100}$ have? $\log_{10} 2^{100} = 100 \log_{10} 2 \approx 100 \times 0.30103 = 30.103$.
So 31 digits. Check: $2^{100} = 1\,267\,650\,600\,228\,229\,401\,496\,703\,205\,376$, which has 31 digits. The
fractional part tells even more: $10^{0.103} \approx 1.27$, so the number starts 127.

**Try it in Python.**

```python
import math
N = 2**100
print(len(str(N)), math.floor(100 * math.log10(2)) + 1)   # 31 31
print(math.log(10) / math.log(2), math.log2(10))          # both 3.3219...
```

## 7.6 Solving exponential and logarithmic equations

The strategy: **when the unknown is in an exponent, take logarithms; when the unknown is inside a logarithm,
exponentiate.** Then check every answer in the original equation, because the domain of $\log$ (positive numbers
only) can create false solutions.

**Example 4.** $3^x = 20$. Take $\ln$: $x \ln 3 = \ln 20$, so $x = \dfrac{\ln 20}{\ln 3} \approx 2.7268$.
Check: $3^{2.7268} \approx 20.0$.

**Example 5.** Doubling at 7%: $1.07^t = 2$ gives $t = \dfrac{\ln 2}{\ln 1.07} \approx 10.24$ years. In general,
growth at rate $r$ per period doubles in $\ln 2 / \ln(1 + r)$ periods. For small $r$, $\ln(1 + r) \approx r$, so the
doubling time is about $0.693/r$; using 72 instead of 69.3 makes the rule easy to divide and slightly more accurate
for rates near 8%.

**Example 6.** $2^{x+1} = 5^x$. Take $\ln$: $(x + 1)\ln 2 = x \ln 5$. Collect $x$: $x(\ln 5 - \ln 2) = \ln 2$, so
$x = \dfrac{\ln 2}{\ln 2.5} \approx 0.7565$. Check: $2^{1.7565} \approx 3.378$ and $5^{0.7565} \approx 3.378$.

**Example 7.** $5 \cdot 3^{2x} = 2 \cdot 7^x$. Take $\ln$: $\ln 5 + 2x\ln 3 = \ln 2 + x \ln 7$, so
$x(2\ln 3 - \ln 7) = \ln 2 - \ln 5$, that is $x \ln \tfrac97 = \ln 0.4$, and $x = \dfrac{\ln 0.4}{\ln(9/7)} \approx -3.646$.

**Example 8 (a quadratic in disguise).** $4^x - 3 \cdot 2^x - 4 = 0$. Since $4^x = (2^x)^2$, put $u = 2^x$:
$u^2 - 3u - 4 = 0$, $(u - 4)(u + 1) = 0$, so $u = 4$ or $u = -1$. But $u = 2^x > 0$, so only $2^x = 4$, $x = 2$.
Check: $16 - 12 - 4 = 0$.

**Example 9 (a false solution).** $\log_{10} x + \log_{10}(x - 3) = 1$. Combine: $\log_{10}(x(x - 3)) = 1$, so
$x(x - 3) = 10$, $x^2 - 3x - 10 = 0$, $(x - 5)(x + 2) = 0$. Candidates 5 and $-2$. But $\log_{10}(-2)$ is undefined,
so $-2$ is rejected. Answer: $x = 5$. Check: $\log 5 + \log 2 = \log 10 = 1$.

Where did $-2$ come from? Combining the logs replaced "$x > 0$ and $x - 3 > 0$" by the weaker "$x(x - 3) > 0$", which
$x = -2$ satisfies. This is the general lesson of [Chapter 2](02-Equations-and-Inequalities.md): a step that is not
reversible can add solutions, and only a check catches them.

**Example 10 (an inequality).** A filter removes 10% of the remaining dust on each pass. How many passes until less
than 1% remains? We need $0.9^n < 0.01$. Take $\ln$ (an increasing function, so the inequality keeps its direction):
$n \ln 0.9 < \ln 0.01$. Now divide by $\ln 0.9$, which is **negative**, so the inequality flips:
$n > \dfrac{\ln 0.01}{\ln 0.9} \approx 43.7$. So 44 passes. Check: $0.9^{43} \approx 0.0108$, $0.9^{44} \approx 0.0097$.

## 7.7 The number $e$

*Level: advanced.*

**The compound interest question.** Put 1 dollar in a bank that pays 100% interest a year. Paid once, at the end of
the year, you have 2 dollars. Paid as two half-yearly instalments of 50%, you have $1.5^2 = 2.25$. Paid $n$ times,
each time $1/n$ of 100%, you have

$$
a_n = \left(1 + \frac{1}{n}\right)^n .
$$

More frequent payments help, because interest earns interest. Does it grow without limit?

| $n$ | 1 | 2 | 4 | 12 (monthly) | 365 (daily) | 8760 (hourly) | 1 000 000 |
|---|---|---|---|---|---|---|---|
| $a_n$ | 2 | 2.25 | 2.4414 | 2.6130 | 2.7146 | 2.7181 | 2.7182805 |

The values climb, but more and more slowly, and seem to settle near 2.71828. Jacob Bernoulli asked this question
in 1683 and showed the answer lies between 2 and 3. The limit is called $e$.

**Theorem 7.3.** The sequence $a_n = (1 + 1/n)^n$ is increasing and always less than 3. Hence it has a limit,
$e = \lim_{n \to \infty} a_n$, with $2 < e \le 3$.

*Proof.* We need two tools.

*Bernoulli's inequality:* for $x \ge -1$ and whole $m \ge 1$, $(1 + x)^m \ge 1 + mx$. It holds for $m = 1$, and if
it holds for $m$ then

$$
(1 + x)^{m+1} = (1 + x)^m (1 + x) \ge (1 + mx)(1 + x) = 1 + (m+1)x + mx^2 \ge 1 + (m+1)x ,
$$

where multiplying by $1 + x$ was allowed because $1 + x \ge 0$. So it holds for every $m$. (This "if for $m$ then for
$m + 1$" argument is proof by induction, the subject of [Chapter 8](08-Sequences-Series-and-Induction.md).)

*Increasing.* Compare consecutive terms:

$$
\frac{a_{n+1}}{a_n} = \frac{\left(\frac{n+2}{n+1}\right)^{n+1}}{\left(\frac{n+1}{n}\right)^{n}}
= \frac{n+1}{n} \left(\frac{n(n+2)}{(n+1)^2}\right)^{n+1}
= \frac{n+1}{n} \left(1 - \frac{1}{(n+1)^2}\right)^{n+1} .
$$

By Bernoulli with $x = -1/(n+1)^2$ and $m = n + 1$, the bracket raised to the power is at least
$1 - \frac{n+1}{(n+1)^2} = 1 - \frac{1}{n+1} = \frac{n}{n+1}$. So $\dfrac{a_{n+1}}{a_n} \ge \dfrac{n+1}{n} \cdot \dfrac{n}{n+1} = 1$.
(It is in fact strictly bigger, since $mx^2 > 0$ in the inequality above.)

*Bounded.* Expand with the binomial theorem ([Chapter 8](08-Sequences-Series-and-Induction.md), §8.4):

$$
a_n = \sum_{k=0}^{n} \binom{n}{k} \frac{1}{n^k}, \qquad
\binom{n}{k}\frac{1}{n^k} = \frac{1}{k!} \cdot \frac{n}{n} \cdot \frac{n-1}{n} \cdots \frac{n-k+1}{n} \le \frac{1}{k!} .
$$

And $k! = 1 \cdot 2 \cdot 3 \cdots k \ge 2^{k-1}$ (each factor after the first is at least 2). So

$$
a_n \le 1 + 1 + \frac12 + \frac14 + \cdots + \frac{1}{2^{n-1}} < 1 + 2 = 3 .
$$

An increasing sequence that stays below a fixed number has a limit: this is the **completeness** of the real numbers,
the property that the number line has no gaps (see [MAT158H1 Unit 2](../../uoft/MAT158H1/unit02.md)). And $a_2 = 2.25 > 2$
with the sequence increasing gives $e > 2$. $\square$

The same comparison, pushed a little further, shows

$$
e = \sum_{k=0}^{\infty} \frac{1}{k!} = 1 + 1 + \frac{1}{2} + \frac{1}{6} + \frac{1}{24} + \cdots = 2.718281828459045\dots
$$

and this series converges very fast: twelve terms give eight correct decimals. $e$ is irrational (Euler showed this
in 1737) and even transcendental (Hermite, 1873), which Chapter 19 of this book discusses.

**Continuous growth.** With interest at rate $r$ compounded $n$ times a year for $t$ years, 1 dollar becomes
$(1 + r/n)^{nt}$. As $n \to \infty$ this approaches $e^{rt}$, because $(1 + r/n)^{n} \to e^r$ (substitute $n = rm$:
$(1 + 1/m)^{rm} = \left((1 + 1/m)^m\right)^r \to e^r$). So **continuous compounding** gives

$$
A = P e^{rt} .
$$

1000 dollars at 5% for 10 years: yearly compounding gives $1000 \times 1.05^{10} \approx 1628.89$ dollars, monthly
$1000(1 + 0.05/12)^{120} \approx 1647.01$, continuous $1000 e^{0.5} \approx 1648.72$. The jump from yearly to monthly is
large; from monthly to continuous, tiny.

**Why $e$ is "natural".** Of all exponential curves $y = a^x$, the one with $a = e$ is the one whose slope where it
crosses the $y$-axis is exactly 1. From that one fact, calculus derives that the rate of change of $e^x$ is $e^x$
itself: a quantity growing at a rate equal to its size. That is why $e$ appears in every law of natural growth and
decay, and why $\ln$ is the logarithm of choice. In the language of half-lives, $N_0 2^{-t/T} = N_0 e^{-kt}$ with
$k = \ln 2 / T$. The full story belongs to calculus; see [Exponential, log and trig derivatives](../../topics/change/level-8/02-exp-log-trig.md)
and [MAT137 Unit 4](../../uoft/MAT137/unit04.md).

## 7.8 Logarithmic scales

When a quantity ranges over many powers of ten, a scale that counts **factors of ten** is more useful than one that
counts units. Such a scale takes a logarithm.

**Sound: decibels.** The intensity of sound we can hear ranges over a factor of about $10^{12}$. The sound level in
decibels (dB) is

$$
L = 10 \log_{10} \frac{I}{I_0},
$$

where $I_0 = 10^{-12}$ watts per square metre is a reference near the quietest audible sound. Every factor of 10 in
intensity adds 10 dB; doubling adds $10 \log_{10} 2 \approx 3$ dB. A 90 dB sound is not "1.5 times" a 60 dB sound;
it is $10^3 = 1000$ times as intense.

**Acidity: pH.** $\mathrm{pH} = -\log_{10} [\mathrm{H}^+]$, where $[\mathrm{H}^+]$ is the concentration of hydrogen
ions in moles per litre. Pure water at 25 °C has pH 7. Lemon juice, around pH 2, has $10^5$ times the hydrogen
ion concentration. The minus sign is there only so that the numbers come out positive.

**Earthquakes: magnitude.** Charles Richter's 1935 scale took the logarithm of the largest swing of a standard
seismograph. Today seismologists use the **moment magnitude**,

$$
M_w = \tfrac23\left(\log_{10} M_0 - 9.1\right),
$$

where $M_0$ is the seismic moment in newton-metres, a measure of the size of the fault slip. One step in magnitude
multiplies $M_0$, and roughly the energy released, by $10^{1.5} \approx 31.6$; two steps by 1000. NASA's InSight lander
recorded more than a thousand marsquakes from 2019 to 2022; the largest, in May 2022, had magnitude about 4.7. An
Earth quake of magnitude 6.7 would release about $10^{1.5 \times 2} = 1000$ times as much energy.

**Stars: apparent magnitude.** Astronomers grade brightness on a scale inherited from ancient Greek catalogues,
fixed precisely by Norman Pogson in 1856: a difference of 5 magnitudes is a factor of exactly 100 in brightness, and
**brighter objects have smaller magnitudes**. So

$$
m_1 - m_2 = -2.5 \log_{10} \frac{F_1}{F_2},
$$

where $F$ is the light flux received. One magnitude is a factor $100^{1/5} \approx 2.512$. At its brightest Mars
reaches about magnitude $-2.9$; Sirius, the brightest star, is about $-1.46$; so Mars at its best outshines Sirius by
a factor $10^{0.4 \times 1.44} \approx 3.8$.

**Log-log and semi-log graphs.** Plot $y = C a^x$ with a logarithmic vertical axis and it becomes a straight line,
since $\log y = \log C + x \log a$, a line with slope $\log a$. A curve that looks straight on such a plot is
exponential, and the slope reads off the growth rate. Similarly a power law $y = Cx^k$ is a straight line when
both axes are logarithmic, with slope $k$. Scientists use these plots to discover laws: Kepler's third law
(period squared proportional to orbit size cubed) is a straight line of slope $3/2$ on a log-log plot of the planets'
periods against their distances, Mars included.

**A short history.** John Napier, a Scottish landowner, published the first table of logarithms in 1614, in
*Mirifici Logarithmorum Canonis Descriptio*; his logarithms were built for trigonometry and did not use any of the
bases we use now. Jost Bürgi in Switzerland made a similar table independently, published in 1620. Henry Briggs,
after visiting Napier, proposed base 10 and published large tables of common logarithms, notably the *Arithmetica
Logarithmica* of 1624. These tables, and the slide rules built from them (from the 1620s on), were the
calculators of astronomers, navigators and engineers for three and a half centuries. Johannes Kepler used
logarithms in the calculations for his *Rudolphine Tables* (1627), the planetary tables built on his laws of
planetary motion, which he had found by studying the orbit of Mars. The number $e$ came later: Bernoulli's interest
problem (1683), and Euler, who used the letter $e$ in his writings from the late 1720s and in his *Introductio in
analysin infinitorum* (1748) set out exponentials and logarithms as inverse functions, much as this chapter does.

## Check yourself

??? question "1. Simplify $\dfrac{(2x^3)^2 \cdot x^{-4}}{8x^{1/2}}$ for $x > 0$."

    $(2x^3)^2 = 4x^6$. Then $4x^6 \cdot x^{-4} = 4x^2$, and $\dfrac{4x^2}{8x^{1/2}} = \tfrac12 x^{3/2}$.

??? question "2. Evaluate $32^{3/5}$, $\left(\tfrac{4}{9}\right)^{-3/2}$ and $\log_4 \tfrac18$."

    $32^{1/5} = 2$, so $32^{3/5} = 8$. $\left(\tfrac49\right)^{-3/2} = \left(\tfrac94\right)^{3/2} = \left(\tfrac32\right)^3 = \tfrac{27}{8}$.
    $\tfrac18 = 2^{-3} = 4^{-3/2}$, so $\log_4 \tfrac18 = -\tfrac32$.

??? question "3. A drug's amount in the blood halves every 6 hours. What fraction is left after 1 day, and after how many hours is 10% left?"

    After 24 hours, 4 half-lives: $(1/2)^4 = 1/16$. For 10%: $2^{-t/6} = 0.1$, so $t/6 = \log_2 10 \approx 3.3219$ and
    $t \approx 19.9$ hours.

??? question "4. Prove that $\log_a x \cdot \log_x b = \log_a b$ (for positive $a, x, b$ with $a, x \neq 1$)."

    Change base to $\ln$: $\dfrac{\ln x}{\ln a} \cdot \dfrac{\ln b}{\ln x} = \dfrac{\ln b}{\ln a} = \log_a b$.

??? question "5. Solve $7^{2x - 1} = 3^{x + 2}$."

    $(2x - 1)\ln 7 = (x + 2)\ln 3$, so $x(2\ln 7 - \ln 3) = \ln 7 + 2\ln 3$, that is $x \ln\tfrac{49}{3} = \ln 63$, and
    $x = \dfrac{\ln 63}{\ln(49/3)} \approx 1.4833$. Check: $7^{1.9666} \approx 45.9$ and $3^{3.4833} \approx 45.9$.

??? question "6. Solve $\log_2(x + 2) + \log_2(x - 4) = 4$."

    $\log_2((x+2)(x-4)) = 4$ gives $(x + 2)(x - 4) = 16$, $x^2 - 2x - 24 = 0$, $(x - 6)(x + 4) = 0$. $x = -4$ makes
    $x + 2 < 0$, rejected. $x = 6$: $\log_2 8 + \log_2 2 = 3 + 1 = 4$. Answer $x = 6$.

??? question "7. Solve $9^x - 4 \cdot 3^x + 3 = 0$."

    $u = 3^x$: $u^2 - 4u + 3 = 0$, $(u - 1)(u - 3) = 0$. $3^x = 1$ gives $x = 0$; $3^x = 3$ gives $x = 1$. Both check: $1 - 4 + 3 = 0$ and $9 - 12 + 3 = 0$.

??? question "8. How many digits does $3^{50}$ have, and what is its first digit?"

    $\log_{10} 3^{50} = 50 \log_{10} 3 \approx 23.856$. So 24 digits, and $10^{0.856} \approx 7.18$, first digit 7. (In fact
    $3^{50} = 717\,897\,987\,691\,852\,588\,770\,249$.)

??? question "9. 500 dollars is invested at 3% a year. Compare yearly compounding for 5 years with continuous compounding."

    Yearly: $500 \times 1.03^5 \approx 579.64$ dollars. Continuous: $500 e^{0.15} \approx 580.92$ dollars. The difference is about 1.28 dollars.

??? question "10. A concert is 110 dB and a conversation is 60 dB. How many times more intense is the concert?"

    The difference is 50 dB, that is 5 factors of 10: $10^5 = 100\,000$ times the intensity.

??? question "11. Show that $\log_2 3$ is irrational."

    Suppose $\log_2 3 = p/q$ with whole numbers $p, q > 0$. Then $2^{p/q} = 3$, so $2^p = 3^q$. The left side is even and
    the right side is odd: a contradiction. (The same argument shows $\log_a b$ is irrational whenever $a$ and $b$ are
    powers of different primes.)

??? question "12. Using Bernoulli's inequality, show that $(1 + 1/n)^{n+1}$ is decreasing, and conclude that $e < (1 + 1/n)^{n+1}$ for every $n$."

    Let $b_n = (1 + 1/n)^{n+1}$. Then $\dfrac{b_{n-1}}{b_n} = \dfrac{(n/(n-1))^{n}}{((n+1)/n)^{n+1}} = \dfrac{n}{n+1}\left(\dfrac{n^2}{n^2 - 1}\right)^{n} = \dfrac{n}{n+1}\left(1 + \dfrac{1}{n^2 - 1}\right)^{n}$.
    By Bernoulli, $\left(1 + \frac{1}{n^2 - 1}\right)^n \ge 1 + \frac{n}{n^2 - 1} > 1 + \frac1n = \frac{n+1}{n}$. So $b_{n-1}/b_n > 1$:
    the sequence decreases. Since $b_n = a_n (1 + 1/n)$ and $1 + 1/n \to 1$, $b_n \to e$ too, and a decreasing sequence
    stays above its limit. For example $n = 1000$ gives $2.71692 < e < 2.71964$.

## What you learned

- The meanings of $a^0 = 1$, $a^{-n} = 1/a^n$ and $a^{m/n} = (\sqrt[n]{a})^m$ are forced by keeping the exponent laws;
  real exponents are defined as limits, for positive bases only.
- Exponential functions multiply by a fixed factor at each step; doubling time and half-life describe them, and
  they eventually beat every power of $x$.
- $\log_a y$ is the exponent that turns $a$ into $y$; it is the inverse function of $a^x$ and is defined only for $y > 0$.
- The product, quotient and power laws of logarithms are the exponent laws read backwards; change of base shows all
  logarithms are multiples of one another.
- To solve for an exponent, take logs; to solve inside a log, exponentiate; always check against the domain, and
  flip an inequality when dividing by a negative log.
- $e = \lim (1 + 1/n)^n \approx 2.71828$ exists because the sequence increases and stays below 3; it gives continuous
  growth $Pe^{rt}$ and the natural logarithm $\ln$.
- Decibels, pH, earthquake and star magnitudes are logarithmic scales: equal steps mean equal factors.

**Next:** [Chapter 8](08-Sequences-Series-and-Induction.md), sequences and sums, and the method of proof by induction.

## Further reading

- E. Maor, *e: The Story of a Number*, 1994.
- J. Havil, *John Napier: Life, Logarithms, and Legacy*, 2014.
- M. Spivak, *Calculus*, 4th edition, 2008, Chapter 18 ("The Logarithm and Exponential Functions").
- L. Euler, *Introductio in analysin infinitorum*, 1748, Volume I, Chapters 6 and 7 (English translation by J. D. Blanton, *Introduction to Analysis of the Infinite*, 1988).
- T. C. Hanks and H. Kanamori, "A Moment Magnitude Scale", *Journal of Geophysical Research* 84(B5), 1979.
- On this site: the Topics lessons [Exponential functions](../../topics/algebra/level-7/07-exponential-functions.md),
  [Logarithms](../../topics/algebra/level-8/04-logarithms.md),
  [Exponential and log equations](../../topics/algebra/level-8/05-exp-log-equations.md),
  [Why they get huge](../../topics/patterns/level-6/02-why-they-get-huge.md) and
  [Exponential rates](../../topics/change/level-6/05-exponential-rates.md); the U of T guides
  [MAT137 Unit 4: Transcendental Functions](../../uoft/MAT137/unit04.md) and
  [MAT158H1 Unit 11: Transcendental Functions](../../uoft/MAT158H1/unit11.md), and
  [MAT158H1 Unit 2: Real Numbers & Least Upper Bounds](../../uoft/MAT158H1/unit02.md) for completeness; and the [Algebra book's contents](index.md).
