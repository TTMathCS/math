---
title: "Monte Carlo methods"
---

# Monte Carlo methods

*Probability · level 8, lesson 7 of 7*

## A question to start

Draw a square on the ground, 1 metre on each side, and inside it draw a quarter circle of radius 1 metre with its centre
at one corner. Now throw grains of rice at the square from far away, so that they land at random all over it.

Count the grains inside the quarter circle and divide by all the grains in the square. Multiply by 4. You get, roughly,
$\pi = 3.14159\dots$

Rice can calculate $\pi$. This is not a trick; it is a method used every day by scientists and engineers, called the
**Monte Carlo method**: using random numbers to compute things that are not random at all. This last lesson shows why
it works, how accurate it is, and a famous experiment with needles that also finds $\pi$.

## The idea

### Probability as area, run backwards

In [level 6](../level-6/06-geometric-probability.md) you used geometric probability: a point chosen at random in a region lands in a part of
it with probability $\tfrac{\text{area of part}}{\text{area of region}}$. Monte Carlo turns this round: if you can
**simulate** the random point, the observed fraction **estimates** the area.

Choose a random point $(U, V)$ in the unit square, with $U$ and $V$ independent and uniform on $[0, 1]$ (lesson 2). It
lands inside the quarter circle when $U^2 + V^2 \le 1$. The quarter circle has area $\tfrac14\pi \cdot 1^2 = \tfrac{\pi}{4}$
and the square has area 1, so

$$P(U^2 + V^2 \le 1) = \frac{\pi}{4}.$$

Repeat $n$ times and let $H$ be the number of hits. By the law of large numbers (lesson 5), $\tfrac Hn \to \tfrac{\pi}{4}$,
so

$$\hat\pi = 4 \cdot \frac{H}{n}$$

is an estimate of $\pi$ that gets better as $n$ grows. (The hat on $\hat\pi$ means "estimate of".)

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 240 240" role="img" aria-label="200 random points in a unit square; points inside the quarter circle of radius 1 are green, the rest are orange">
  <rect x="20" y="20" width="200" height="200" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 20 20 A 200 200 0 0 1 220 220" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="59.3" cy="197.7" r="2.6" fill="#7ccf9a"/>
  <circle cx="20.5" cy="94.4" r="2.6" fill="#7ccf9a"/>
  <circle cx="66.8" cy="178.5" r="2.6" fill="#7ccf9a"/>
  <circle cx="129.4" cy="130.0" r="2.6" fill="#7ccf9a"/>
  <circle cx="146.8" cy="184.2" r="2.6" fill="#7ccf9a"/>
  <circle cx="41.6" cy="171.3" r="2.6" fill="#7ccf9a"/>
  <circle cx="25.6" cy="172.4" r="2.6" fill="#7ccf9a"/>
  <circle cx="71.0" cy="178.2" r="2.6" fill="#7ccf9a"/>
  <circle cx="89.8" cy="56.6" r="2.6" fill="#7ccf9a"/>
  <circle cx="123.4" cy="106.7" r="2.6" fill="#7ccf9a"/>
  <circle cx="63.1" cy="152.3" r="2.6" fill="#7ccf9a"/>
  <circle cx="98.9" cy="29.1" r="2.6" fill="#eea66f"/>
  <circle cx="146.2" cy="190.3" r="2.6" fill="#7ccf9a"/>
  <circle cx="30.5" cy="131.8" r="2.6" fill="#7ccf9a"/>
  <circle cx="143.4" cy="113.6" r="2.6" fill="#7ccf9a"/>
  <circle cx="212.9" cy="111.7" r="2.6" fill="#eea66f"/>
  <circle cx="28.8" cy="202.8" r="2.6" fill="#7ccf9a"/>
  <circle cx="114.4" cy="84.5" r="2.6" fill="#7ccf9a"/>
  <circle cx="116.6" cy="197.6" r="2.6" fill="#7ccf9a"/>
  <circle cx="37.1" cy="157.5" r="2.6" fill="#7ccf9a"/>
  <circle cx="145.0" cy="140.1" r="2.6" fill="#7ccf9a"/>
  <circle cx="88.3" cy="102.2" r="2.6" fill="#7ccf9a"/>
  <circle cx="186.4" cy="164.1" r="2.6" fill="#7ccf9a"/>
  <circle cx="29.9" cy="173.9" r="2.6" fill="#7ccf9a"/>
  <circle cx="59.7" cy="217.6" r="2.6" fill="#7ccf9a"/>
  <circle cx="107.9" cy="159.6" r="2.6" fill="#7ccf9a"/>
  <circle cx="86.8" cy="218.7" r="2.6" fill="#7ccf9a"/>
  <circle cx="32.8" cy="43.4" r="2.6" fill="#7ccf9a"/>
  <circle cx="150.5" cy="167.0" r="2.6" fill="#7ccf9a"/>
  <circle cx="85.9" cy="139.5" r="2.6" fill="#7ccf9a"/>
  <circle cx="69.9" cy="65.8" r="2.6" fill="#7ccf9a"/>
  <circle cx="89.3" cy="131.2" r="2.6" fill="#7ccf9a"/>
  <circle cx="79.4" cy="219.1" r="2.6" fill="#7ccf9a"/>
  <circle cx="83.3" cy="185.5" r="2.6" fill="#7ccf9a"/>
  <circle cx="189.7" cy="27.4" r="2.6" fill="#eea66f"/>
  <circle cx="96.6" cy="149.8" r="2.6" fill="#7ccf9a"/>
  <circle cx="36.8" cy="172.0" r="2.6" fill="#7ccf9a"/>
  <circle cx="163.3" cy="172.3" r="2.6" fill="#7ccf9a"/>
  <circle cx="138.1" cy="169.8" r="2.6" fill="#7ccf9a"/>
  <circle cx="21.5" cy="122.9" r="2.6" fill="#7ccf9a"/>
  <circle cx="146.1" cy="137.5" r="2.6" fill="#7ccf9a"/>
  <circle cx="85.6" cy="118.7" r="2.6" fill="#7ccf9a"/>
  <circle cx="60.8" cy="87.4" r="2.6" fill="#7ccf9a"/>
  <circle cx="185.2" cy="215.3" r="2.6" fill="#7ccf9a"/>
  <circle cx="38.8" cy="28.2" r="2.6" fill="#7ccf9a"/>
  <circle cx="173.6" cy="180.8" r="2.6" fill="#7ccf9a"/>
  <circle cx="131.1" cy="146.0" r="2.6" fill="#7ccf9a"/>
  <circle cx="129.6" cy="175.3" r="2.6" fill="#7ccf9a"/>
  <circle cx="193.0" cy="57.1" r="2.6" fill="#eea66f"/>
  <circle cx="192.8" cy="183.3" r="2.6" fill="#7ccf9a"/>
  <circle cx="179.3" cy="207.7" r="2.6" fill="#7ccf9a"/>
  <circle cx="133.5" cy="150.9" r="2.6" fill="#7ccf9a"/>
  <circle cx="135.7" cy="26.9" r="2.6" fill="#eea66f"/>
  <circle cx="184.0" cy="61.2" r="2.6" fill="#eea66f"/>
  <circle cx="185.4" cy="111.3" r="2.6" fill="#7ccf9a"/>
  <circle cx="163.0" cy="24.6" r="2.6" fill="#eea66f"/>
  <circle cx="117.7" cy="128.7" r="2.6" fill="#7ccf9a"/>
  <circle cx="68.0" cy="74.5" r="2.6" fill="#7ccf9a"/>
  <circle cx="219.7" cy="170.5" r="2.6" fill="#eea66f"/>
  <circle cx="119.2" cy="135.8" r="2.6" fill="#7ccf9a"/>
  <circle cx="167.3" cy="155.8" r="2.6" fill="#7ccf9a"/>
  <circle cx="29.7" cy="56.5" r="2.6" fill="#7ccf9a"/>
  <circle cx="126.7" cy="118.8" r="2.6" fill="#7ccf9a"/>
  <circle cx="167.0" cy="110.7" r="2.6" fill="#7ccf9a"/>
  <circle cx="86.3" cy="158.9" r="2.6" fill="#7ccf9a"/>
  <circle cx="31.4" cy="69.9" r="2.6" fill="#7ccf9a"/>
  <circle cx="46.4" cy="198.9" r="2.6" fill="#7ccf9a"/>
  <circle cx="132.4" cy="53.0" r="2.6" fill="#eea66f"/>
  <circle cx="62.5" cy="25.9" r="2.6" fill="#7ccf9a"/>
  <circle cx="154.6" cy="149.2" r="2.6" fill="#7ccf9a"/>
  <circle cx="194.3" cy="76.5" r="2.6" fill="#eea66f"/>
  <circle cx="37.9" cy="140.6" r="2.6" fill="#7ccf9a"/>
  <circle cx="64.7" cy="177.0" r="2.6" fill="#7ccf9a"/>
  <circle cx="25.4" cy="73.5" r="2.6" fill="#7ccf9a"/>
  <circle cx="150.3" cy="110.5" r="2.6" fill="#7ccf9a"/>
  <circle cx="74.6" cy="176.6" r="2.6" fill="#7ccf9a"/>
  <circle cx="112.3" cy="115.5" r="2.6" fill="#7ccf9a"/>
  <circle cx="195.9" cy="204.9" r="2.6" fill="#7ccf9a"/>
  <circle cx="29.3" cy="159.7" r="2.6" fill="#7ccf9a"/>
  <circle cx="97.9" cy="79.8" r="2.6" fill="#7ccf9a"/>
  <circle cx="23.1" cy="83.7" r="2.6" fill="#7ccf9a"/>
  <circle cx="66.4" cy="33.1" r="2.6" fill="#7ccf9a"/>
  <circle cx="196.3" cy="51.3" r="2.6" fill="#eea66f"/>
  <circle cx="154.4" cy="46.9" r="2.6" fill="#eea66f"/>
  <circle cx="189.7" cy="69.9" r="2.6" fill="#eea66f"/>
  <circle cx="198.6" cy="50.8" r="2.6" fill="#eea66f"/>
  <circle cx="79.8" cy="116.2" r="2.6" fill="#7ccf9a"/>
  <circle cx="115.3" cy="135.9" r="2.6" fill="#7ccf9a"/>
  <circle cx="161.3" cy="42.8" r="2.6" fill="#eea66f"/>
  <circle cx="32.6" cy="211.7" r="2.6" fill="#7ccf9a"/>
  <circle cx="50.3" cy="172.9" r="2.6" fill="#7ccf9a"/>
  <circle cx="170.4" cy="176.4" r="2.6" fill="#7ccf9a"/>
  <circle cx="75.2" cy="193.7" r="2.6" fill="#7ccf9a"/>
  <circle cx="110.7" cy="193.4" r="2.6" fill="#7ccf9a"/>
  <circle cx="98.6" cy="218.0" r="2.6" fill="#7ccf9a"/>
  <circle cx="92.7" cy="182.1" r="2.6" fill="#7ccf9a"/>
  <circle cx="215.9" cy="138.6" r="2.6" fill="#eea66f"/>
  <circle cx="30.6" cy="216.2" r="2.6" fill="#7ccf9a"/>
  <circle cx="210.6" cy="83.7" r="2.6" fill="#eea66f"/>
  <circle cx="62.5" cy="82.5" r="2.6" fill="#7ccf9a"/>
  <circle cx="61.1" cy="87.0" r="2.6" fill="#7ccf9a"/>
  <circle cx="193.1" cy="116.8" r="2.6" fill="#eea66f"/>
  <circle cx="151.1" cy="138.7" r="2.6" fill="#7ccf9a"/>
  <circle cx="32.3" cy="63.3" r="2.6" fill="#7ccf9a"/>
  <circle cx="76.0" cy="203.5" r="2.6" fill="#7ccf9a"/>
  <circle cx="113.8" cy="116.2" r="2.6" fill="#7ccf9a"/>
  <circle cx="97.4" cy="22.9" r="2.6" fill="#eea66f"/>
  <circle cx="93.1" cy="200.2" r="2.6" fill="#7ccf9a"/>
  <circle cx="25.5" cy="54.4" r="2.6" fill="#7ccf9a"/>
  <circle cx="77.9" cy="185.5" r="2.6" fill="#7ccf9a"/>
  <circle cx="210.1" cy="52.0" r="2.6" fill="#eea66f"/>
  <circle cx="70.1" cy="219.9" r="2.6" fill="#7ccf9a"/>
  <circle cx="193.6" cy="213.0" r="2.6" fill="#7ccf9a"/>
  <circle cx="160.7" cy="96.4" r="2.6" fill="#7ccf9a"/>
  <circle cx="99.3" cy="103.3" r="2.6" fill="#7ccf9a"/>
  <circle cx="160.9" cy="160.7" r="2.6" fill="#7ccf9a"/>
  <circle cx="152.4" cy="30.6" r="2.6" fill="#eea66f"/>
  <circle cx="39.7" cy="40.1" r="2.6" fill="#7ccf9a"/>
  <circle cx="147.4" cy="175.6" r="2.6" fill="#7ccf9a"/>
  <circle cx="184.3" cy="152.7" r="2.6" fill="#7ccf9a"/>
  <circle cx="32.3" cy="102.3" r="2.6" fill="#7ccf9a"/>
  <circle cx="201.9" cy="198.9" r="2.6" fill="#7ccf9a"/>
  <circle cx="157.9" cy="213.4" r="2.6" fill="#7ccf9a"/>
  <circle cx="94.7" cy="66.9" r="2.6" fill="#7ccf9a"/>
  <circle cx="53.9" cy="104.2" r="2.6" fill="#7ccf9a"/>
  <circle cx="58.0" cy="50.1" r="2.6" fill="#7ccf9a"/>
  <circle cx="191.9" cy="171.5" r="2.6" fill="#7ccf9a"/>
  <circle cx="106.9" cy="214.8" r="2.6" fill="#7ccf9a"/>
  <circle cx="103.6" cy="147.6" r="2.6" fill="#7ccf9a"/>
  <circle cx="28.3" cy="139.1" r="2.6" fill="#7ccf9a"/>
  <circle cx="31.2" cy="20.1" r="2.6" fill="#eea66f"/>
  <circle cx="78.5" cy="100.4" r="2.6" fill="#7ccf9a"/>
  <circle cx="128.5" cy="126.8" r="2.6" fill="#7ccf9a"/>
  <circle cx="159.1" cy="212.7" r="2.6" fill="#7ccf9a"/>
  <circle cx="63.1" cy="41.0" r="2.6" fill="#7ccf9a"/>
  <circle cx="147.1" cy="22.2" r="2.6" fill="#eea66f"/>
  <circle cx="98.5" cy="189.0" r="2.6" fill="#7ccf9a"/>
  <circle cx="131.0" cy="217.6" r="2.6" fill="#7ccf9a"/>
  <circle cx="193.9" cy="175.8" r="2.6" fill="#7ccf9a"/>
  <circle cx="37.2" cy="161.2" r="2.6" fill="#7ccf9a"/>
  <circle cx="169.0" cy="63.2" r="2.6" fill="#eea66f"/>
  <circle cx="40.6" cy="198.0" r="2.6" fill="#7ccf9a"/>
  <circle cx="197.9" cy="53.2" r="2.6" fill="#eea66f"/>
  <circle cx="215.1" cy="148.2" r="2.6" fill="#eea66f"/>
  <circle cx="116.9" cy="105.7" r="2.6" fill="#7ccf9a"/>
  <circle cx="81.5" cy="83.2" r="2.6" fill="#7ccf9a"/>
  <circle cx="64.6" cy="43.1" r="2.6" fill="#7ccf9a"/>
  <circle cx="104.0" cy="175.2" r="2.6" fill="#7ccf9a"/>
  <circle cx="52.1" cy="218.7" r="2.6" fill="#7ccf9a"/>
  <circle cx="180.3" cy="27.3" r="2.6" fill="#eea66f"/>
  <circle cx="53.0" cy="138.4" r="2.6" fill="#7ccf9a"/>
  <circle cx="188.0" cy="96.6" r="2.6" fill="#eea66f"/>
  <circle cx="192.0" cy="215.7" r="2.6" fill="#7ccf9a"/>
  <circle cx="177.4" cy="136.3" r="2.6" fill="#7ccf9a"/>
  <circle cx="136.7" cy="41.9" r="2.6" fill="#eea66f"/>
  <circle cx="69.3" cy="55.8" r="2.6" fill="#7ccf9a"/>
  <circle cx="74.4" cy="189.6" r="2.6" fill="#7ccf9a"/>
  <circle cx="204.0" cy="42.5" r="2.6" fill="#eea66f"/>
  <circle cx="212.6" cy="129.4" r="2.6" fill="#eea66f"/>
  <circle cx="114.2" cy="74.5" r="2.6" fill="#7ccf9a"/>
  <circle cx="181.5" cy="65.5" r="2.6" fill="#eea66f"/>
  <circle cx="159.7" cy="165.5" r="2.6" fill="#7ccf9a"/>
  <circle cx="183.9" cy="188.2" r="2.6" fill="#7ccf9a"/>
  <circle cx="187.6" cy="54.9" r="2.6" fill="#eea66f"/>
  <circle cx="41.3" cy="91.5" r="2.6" fill="#7ccf9a"/>
  <circle cx="53.6" cy="114.8" r="2.6" fill="#7ccf9a"/>
  <circle cx="63.9" cy="118.8" r="2.6" fill="#7ccf9a"/>
  <circle cx="196.3" cy="70.0" r="2.6" fill="#eea66f"/>
  <circle cx="89.8" cy="49.6" r="2.6" fill="#7ccf9a"/>
  <circle cx="186.4" cy="40.2" r="2.6" fill="#eea66f"/>
  <circle cx="36.0" cy="109.3" r="2.6" fill="#7ccf9a"/>
  <circle cx="83.5" cy="189.4" r="2.6" fill="#7ccf9a"/>
  <circle cx="154.9" cy="143.3" r="2.6" fill="#7ccf9a"/>
  <circle cx="171.7" cy="200.0" r="2.6" fill="#7ccf9a"/>
  <circle cx="71.4" cy="139.8" r="2.6" fill="#7ccf9a"/>
  <circle cx="117.3" cy="27.5" r="2.6" fill="#eea66f"/>
  <circle cx="119.9" cy="160.3" r="2.6" fill="#7ccf9a"/>
  <circle cx="33.9" cy="61.4" r="2.6" fill="#7ccf9a"/>
  <circle cx="37.2" cy="44.1" r="2.6" fill="#7ccf9a"/>
  <circle cx="213.7" cy="208.2" r="2.6" fill="#7ccf9a"/>
  <circle cx="205.2" cy="103.0" r="2.6" fill="#eea66f"/>
  <circle cx="30.0" cy="84.7" r="2.6" fill="#7ccf9a"/>
  <circle cx="186.9" cy="203.9" r="2.6" fill="#7ccf9a"/>
  <circle cx="58.0" cy="219.7" r="2.6" fill="#7ccf9a"/>
  <circle cx="201.4" cy="174.7" r="2.6" fill="#7ccf9a"/>
  <circle cx="131.9" cy="113.0" r="2.6" fill="#7ccf9a"/>
  <circle cx="27.8" cy="48.5" r="2.6" fill="#7ccf9a"/>
  <circle cx="185.9" cy="184.4" r="2.6" fill="#7ccf9a"/>
  <circle cx="171.5" cy="25.4" r="2.6" fill="#eea66f"/>
  <circle cx="73.1" cy="32.9" r="2.6" fill="#7ccf9a"/>
  <circle cx="25.9" cy="36.2" r="2.6" fill="#7ccf9a"/>
  <circle cx="76.0" cy="26.1" r="2.6" fill="#eea66f"/>
  <circle cx="169.4" cy="172.4" r="2.6" fill="#7ccf9a"/>
  <circle cx="125.3" cy="165.5" r="2.6" fill="#7ccf9a"/>
  <circle cx="127.8" cy="29.2" r="2.6" fill="#eea66f"/>
  <circle cx="217.6" cy="32.6" r="2.6" fill="#eea66f"/>
  <circle cx="23.9" cy="188.0" r="2.6" fill="#7ccf9a"/>
  <circle cx="29.3" cy="40.7" r="2.6" fill="#7ccf9a"/>
  <circle cx="22.3" cy="210.2" r="2.6" fill="#7ccf9a"/>
  <circle cx="106.8" cy="105.4" r="2.6" fill="#7ccf9a"/>
  <text x="20.0" y="234.0" font-size="10" text-anchor="middle" fill="currentColor">0</text>
  <text x="220.0" y="234.0" font-size="10" text-anchor="middle" fill="currentColor">1</text>
  <text x="14.0" y="24.0" font-size="10" text-anchor="end" fill="currentColor">1</text>
</svg>
</div>

In that picture 200 random points were drawn and 159 landed inside, giving $\hat\pi = 4 \times \tfrac{159}{200} = 3.18$.

### How accurate is it?

Each point is a trial with success chance $p = \tfrac{\pi}{4} \approx 0.785$. So $H \sim \operatorname{B}(n, p)$, and the
estimate $4\tfrac Hn$ has standard deviation

$$4\sqrt{\frac{p(1 - p)}{n}} \approx \frac{1.64}{\sqrt n}.$$

One computer run gave:

| points $n$ | hits $H$ | estimate $4H/n$ | standard deviation $1.64/\sqrt n$ |
| --- | --- | --- | --- |
| 100 | 83 | 3.32 | 0.16 |
| 1 000 | 778 | 3.112 | 0.052 |
| 10 000 | 7 801 | 3.1204 | 0.016 |
| 100 000 | 78 531 | 3.14124 | 0.0052 |
| 1 000 000 | 785 697 | 3.14279 | 0.0016 |

Every estimate is within about 2 standard deviations of the true $\pi$, just as the normal approximation says it should
be about 95% of the time. And notice the price of accuracy: **each extra correct decimal place costs 100 times as many
points**, because the error shrinks like $\tfrac{1}{\sqrt n}$. A million points give about two or three decimal places.
As a way to compute $\pi$ this is hopeless (formulas give millions of digits); the point is that the same method works
for problems no formula can touch.

### Monte Carlo integration

The same idea finds any area, and so any integral. To estimate $I = \int_0^1 g(x)\,dx$, notice that if $U$ is uniform on
$[0, 1]$ then $E\big(g(U)\big) = \int_0^1 g(x) \cdot 1\,dx = I$ (lesson 2's formula for an expected value). So

$$I \approx \frac{g(U_1) + g(U_2) + \dots + g(U_n)}{n},$$

the average of $g$ at $n$ random points, with an error that shrinks like $\tfrac{\sigma}{\sqrt n}$ by the central limit
theorem.

**Example.** The bell-curve integral $\int_0^1 e^{-x^2}\,dx$ has no formula in terms of ordinary functions. Averaging
$e^{-u^2}$ over 10 000 random $u$ gave 0.7460, with a standard deviation of about 0.002. The true value is 0.74682.

The real power appears in **many dimensions**. A grid with 10 points along each axis needs $10^{d}$ points in $d$
dimensions: $10^{20}$ for 20 dimensions, which is impossible. Monte Carlo's error is $\tfrac{\sigma}{\sqrt n}$ whatever
the dimension. That is why it is used to price financial options, render realistic light in films (tracing random light
paths), model particles in physics, and plan the paths of spacecraft through uncertain conditions.

The story goes that the method got its name in the 1940s from the Monte Carlo casino in Monaco, when Stanislaw Ulam,
John von Neumann and colleagues used random sampling for calculations in nuclear physics.

### Buffon's needle

A much older experiment, posed by the French naturalist Georges-Louis Leclerc, Comte de Buffon, in the 1700s: a floor
has parallel lines 1 unit apart. Drop a needle of length 1 at random. What is the chance it crosses a line?

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 200" role="img" aria-label="Parallel lines 1 unit apart and a needle of length 1. The distance x from the needle's centre to the nearest line and the angle theta between the needle and the lines are marked; the needle crosses when x is at most one half of sine theta">
  <line x1="20" y1="40" x2="440" y2="40" stroke="currentColor" stroke-width="2"/>
  <line x1="20" y1="160" x2="440" y2="160" stroke="currentColor" stroke-width="2"/>
  <line x1="195.6" y1="124.1" x2="264.4" y2="25.9" stroke="#eea66f" stroke-width="5" stroke-linecap="round"/>
  <circle cx="230" cy="75" r="3.5" fill="currentColor"/>
  <line x1="230" y1="75" x2="230" y2="40" stroke="#9cc9ea" stroke-width="2.5"/>
  <text x="224.0" y="61.0" font-size="13" text-anchor="end" fill="currentColor">x</text>
  <line x1="276.4" y1="75" x2="276.4" y2="25.9" stroke="#7ccf9a" stroke-width="2.5"/>
  <text x="282.4" y="54.4" font-size="12" text-anchor="start" fill="currentColor">½ sin θ</text>
  <line x1="230" y1="75" x2="290" y2="75" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <path d="M 258 75 A 28 28 0 0 0 246.1 52.1" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="268.0" y="67.0" font-size="13" text-anchor="start" fill="currentColor">θ</text>
  <line x1="40" y1="40" x2="40" y2="160" stroke="currentColor" stroke-width="1"/>
  <text x="46.0" y="104.0" font-size="11" text-anchor="start" fill="currentColor">spacing 1</text>
  <text x="430.0" y="190.0" font-size="11" text-anchor="end" fill="currentColor">needle length 1</text>
</svg>
</div>

Describe where the needle lands with two numbers:

- $x$, the distance from the needle's **centre** to the nearest line: uniform on $\left[0, \tfrac12\right]$;
- $\theta$, the angle between the needle and the lines: uniform on $\left[0, \tfrac{\pi}{2}\right]$ (by symmetry, angles
  beyond $\tfrac{\pi}{2}$ behave the same).

The half-needle on the side of that line reaches a height $\tfrac12\sin\theta$ above (or below) the centre. So the
needle **crosses** exactly when

$$x \le \tfrac12 \sin\theta.$$

The pair $(\theta, x)$ is a random point in a rectangle of width $\tfrac{\pi}{2}$ and height $\tfrac12$, area
$\tfrac{\pi}{4}$. The crossing region is the area under the curve $x = \tfrac12\sin\theta$:

$$\int_0^{\pi/2} \tfrac12 \sin\theta\,d\theta = \tfrac12\Big[-\cos\theta\Big]_0^{\pi/2} = \tfrac12(0 + 1) = \tfrac12.$$

So

$$P(\text{cross}) = \frac{1/2}{\pi/4} = \frac{2}{\pi} \approx 0.6366.$$

$\pi$ appears because the needle's angle is uniformly spread around a circle. Turning it round, dropping $n$ needles
and counting $C$ crossings gives the estimate $\hat\pi = \tfrac{2n}{C}$. A computer dropped 10 000 virtual needles and
got 6266 crossings: $\hat\pi = \tfrac{20\,000}{6266} \approx 3.19$. The crossing fraction 0.6266 is about 2 standard
deviations below 0.6366 (the standard deviation is $\sqrt{0.6366 \times 0.3634 / 10\,000} \approx 0.0048$): an unluckier
run than most, but well within what chance allows. Buffon's needle is a slow way to find $\pi$, but a beautiful link
between geometry and probability.

### Pseudo-random numbers

Computers do not toss coins. They use **pseudo-random number generators**: fixed formulas whose output looks random and
passes statistical tests, but is completely determined by a starting value called the **seed**. That is useful: running
again with the same seed repeats the same "random" numbers, so results can be checked. The simulations in this level
(the dice average, the random walk, the points above) were all made this way.

## Worked examples

**1. A simulated probability.** To check the gambler's-ruin answer $\tfrac{3}{10}$ from lesson 6, a computer played
100 000 fair games from 3 dollars with goal 10, and won 29 853. Estimate: 0.2985. The standard deviation of the
estimate is $\sqrt{0.3 \times 0.7 / 100\,000} \approx 0.0014$, so 0.2985 is about 1 standard deviation from 0.3: consistent.

**2. How many points for a target accuracy?** To estimate $\pi$ by the quarter circle with a standard deviation of
0.001: $\tfrac{1.64}{\sqrt n} = 0.001$, so $\sqrt n = 1640$ and $n \approx 2.7$ million points.

**3. Estimating an area.** An odd-shaped lake lies inside a 2 km by 3 km rectangle on a map. A computer picks 5000
random points in the rectangle and finds 1850 in the lake. Estimated area: $6 \times \tfrac{1850}{5000} = 2.22$ km².
Standard deviation: $6\sqrt{0.37 \times 0.63 / 5000} \approx 0.041$ km².

**4. A probability with no easy formula.** What is the chance that three random points in a unit square form an
obtuse triangle? There is an exact answer, but it is hard; a simulation of a million triangles gives it to about three
decimal places in a second. Simulation is often the fastest way to check a difficult calculation, or to find an answer
when no one knows how to calculate it.

## Try it

1. In a quarter-circle experiment, 7 900 of 10 000 points land inside. Estimate $\pi$ and give the standard deviation
   of the estimate.
2. Explain why multiplying the number of points by 4 only halves the error.
3. Describe a Monte Carlo estimate of $\int_0^2 x^3\,dx$ using uniform random numbers on $[0, 2]$. What is the exact
   value?
4. In Buffon's experiment with needle length equal to line spacing, 500 needles give 320 crossings. Estimate $\pi$.
5. Check the integral $\int_0^{\pi/2} \tfrac12\sin\theta\,d\theta = \tfrac12$ by finding the area under the curve with a
   sketch: is $\tfrac12$ a reasonable fraction of the rectangle?
6. Describe how to estimate the chance that the sum of three dice is at least 15 by simulation. Then find the exact
   answer by counting, and say how many simulated rolls you would need for an error of about 0.005.
7. A needle of length $\ell$ less than the spacing 1 is used instead. Show that the crossing chance becomes
   $\tfrac{2\ell}{\pi}$.
8. Why is it useful that a pseudo-random generator gives the same numbers from the same seed?

??? note "Answers"
    1. $\hat\pi = 4 \times 0.79 = 3.16$. Standard deviation $\approx \tfrac{1.64}{\sqrt{10\,000}} = 0.0164$. (The true $\pi$ is
       about 1.1 standard deviations away.)
    2. The error is proportional to $\tfrac{1}{\sqrt n}$; multiplying $n$ by 4 multiplies $\sqrt n$ by 2, so the error is
       halved.
    3. If $U$ is uniform on $[0, 2]$ (density $\tfrac12$), then $E(U^3) = \int_0^2 x^3 \cdot \tfrac12\,dx$, so the
       integral is $2E(U^3)$. Estimate: twice the average of $U_i^3$ over many random $U_i$. Exact: $\tfrac{2^4}{4} = 4$.
    4. $\hat\pi = \tfrac{2 \times 500}{320} = 3.125$.
    5. The curve rises from 0 to $\tfrac12$ over the width $\tfrac{\pi}{2} \approx 1.57$; the rectangle has area about 0.785.
       The region under the curve is a bit more than half the rectangle, since the sine curve bulges upward. $\tfrac12$
       out of 0.785 is about 64%: reasonable.
    6. Simulate three dice many times and record the fraction with sum at least 15. Exact: sums 15, 16, 17, 18 have 10,
       6, 3 and 1 outcomes, total 20 out of 216, so $p = \tfrac{20}{216} \approx 0.0926$. The standard deviation of the
       estimate is $\sqrt{\tfrac{p(1 - p)}{n}}$; for 0.005 we need $n \approx \tfrac{0.0926 \times 0.9074}{0.005^2} \approx 3361$
       rolls.
    7. Now the half-needle reaches $\tfrac{\ell}{2}\sin\theta$, and the crossing area is $\int_0^{\pi/2} \tfrac{\ell}{2}\sin\theta\,d\theta = \tfrac{\ell}{2}$.
       Divided by the rectangle's area $\tfrac{\pi}{4}$: $\tfrac{2\ell}{\pi}$. (The condition $\ell \le 1$ makes sure the
       needle can cross at most one line.)
    8. Results can be repeated exactly: someone checking your work, or you fixing a bug, can rerun the simulation and get
       the same numbers. Changing the seed gives a fresh, independent-looking run.

## Common mistake

**Expecting a simulation to be exact.** A Monte Carlo answer is an estimate with a random error of about
$\tfrac{\sigma}{\sqrt n}$. Always report how many trials you used, and ideally the standard deviation, so others know how
much to trust it.

**Using too few trials.** A hundred trials pin a probability down to only about $\pm 0.05$ to $\pm 0.1$. Before
concluding anything surprising from a simulation, work out its standard deviation.

## Where it leads

- Back: [Random walks and Markov chains](06-random-walks-markov.md) · You have reached the end of the probability
  levels: back to the [Probability topic page](../index.md)
- [Level 8 page](index.md)
- Simulations at a younger level: [level 4](../level-4/05-simulations.md). Geometric probability: [level 6](../level-6/06-geometric-probability.md).
- The integral of $\sin\theta$ and areas under curves: [U of T MAT137, unit 8](../../../uoft/MAT137/unit08.md).
- Areas of circles and why $\pi$ is in them: [Geometry](../../geometry/index.md) and [Measurement](../../measurement/index.md).
- Using simulation to test claims about data (bootstrap and randomisation tests): [Statistics](../../statistics/index.md).
