# 16. Brownian motion

*Look through a microscope at tiny particles suspended in water and you see them jiggle, endlessly and without
pattern. Speed up a coin-flipping random walk, shrink its steps, and its path starts to look the same. The limit is
Brownian motion, the most important random process in mathematics: a random continuous curve that is nowhere smooth,
that looks the same at every scale, and whose density spreads out exactly as heat does. In this chapter you will see
how it arose in physics, define it, prove its scaling and roughness, compute hitting times by a continuous reflection
principle, connect it to the heat equation, and take a first, honest look at stochastic calculus and the
Black-Scholes formula.*

!!! abstract "In this chapter"
    **You will learn:**

    - how Brownian motion arises as the limit of random walks, and its history from Brown to Einstein and Perrin
    - the definition, the covariance $\min(s, t)$, and the symmetries: reflection, time shift, scaling, time inversion
    - why its paths are continuous but nowhere differentiable, and why the quadratic variation over $[0, t]$ is $t$
    - the reflection principle, the distribution of the maximum, and hitting times
    - why the density of a Brownian particle solves the heat equation, and the Stokes-Einstein relation
    - Itô's integral and formula in a first form, geometric Brownian motion and the Black-Scholes price

    **You need:** [Chapter 10](10-The-Normal-Distribution.md) (the normal distribution), [Chapter 11](11-Joint-Distributions.md)
    (joint distributions, covariance, the bivariate normal), [Chapter 12](12-The-Central-Limit-Theorem.md) (the central
    limit theorem) and [Chapter 15](15-Random-Walks-and-Martingales.md) (random walks, martingales, optional stopping).
    Calculus is used throughout, including partial derivatives in 16.5 and 16.6.

    **Levels:** 16.1 is intermediate; 16.2 and 16.4 are advanced; 16.3 and 16.5 are advanced, with expert statements;
    16.6 is advanced, a first look at expert material.

## 16.1 From random walks to Brownian motion

*Level: intermediate.*

**A limit of walks.** Let $S_n$ be the simple random walk of Chapter 15. Speed it up and shrink it: for a large number
$n$, take $n$ steps per unit of time, each of size $1/\sqrt{n}$. That is, look at

$$
W^{(n)}(t) = \frac{S_{\lfloor nt \rfloor}}{\sqrt{n}}, \qquad t \ge 0,
$$

where $\lfloor nt \rfloor$ is $nt$ rounded down. Why $\sqrt{n}$? Because $S_{\lfloor nt \rfloor}$ has variance about
$nt$; dividing by $\sqrt n$ gives variance about $t$, so the picture neither blows up nor flattens out. By the central
limit theorem, $W^{(n)}(t)$ is approximately normal with mean 0 and variance $t$. More is true:

- for $s < t$, the change $W^{(n)}(t) - W^{(n)}(s)$ uses only the steps between times $s$ and $t$, so changes over
  disjoint time intervals are independent;
- each change is approximately normal with variance $t - s$.

**Donsker's invariance principle** (Monroe Donsker, 1951) says that the whole random path $W^{(n)}$ converges in
distribution to a random continuous path $B$ with exactly these properties: Brownian motion. "Invariance" refers to
the fact that the step distribution does not matter: any independent steps with mean 0 and variance 1 give the same
limit. A precise statement needs convergence in distribution of random functions (see Billingsley's book in Further
reading), but the content is the one above: **Brownian motion is what every fair random walk looks like from far
away.**

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 280" role="img" aria-label="Top: a jagged random path made of 360 small random steps, with a box around its first quarter. Bottom: the boxed part enlarged four times in time and twice in height; it looks just as jagged as the whole path.">
  <line x1="20" y1="80" x2="380" y2="80" stroke="currentColor" stroke-width="0.8" opacity="0.6"/>
  <polyline points="20,80.0 21,80.9 22,79.1 23,79.9 24,81.0 25,84.3 26,85.0 27,81.1 28,79.6 29,76.0 30,75.1 31,73.7 32,73.1 33,78.9 34,75.9 35,74.2 36,72.4 37,78.3 38,84.4 39,87.6 40,89.2 41,88.1 42,88.3 43,86.5 44,88.7 45,87.6 46,86.2 47,88.6 48,82.5 49,80.6 50,76.4 51,78.6 52,81.2 53,82.4 54,82.7 55,80.5 56,79.7 57,81.2 58,84.6 59,86.4 60,82.1 61,85.0 62,84.1 63,82.6 64,87.8 65,87.7 66,83.1 67,90.1 68,91.3 69,91.6 70,94.5 71,92.7 72,93.0 73,98.1 74,95.2 75,92.9 76,89.5 77,84.5 78,83.2 79,82.8 80,87.4 81,85.2 82,87.3 83,88.9 84,93.4 85,96.7 86,98.6 87,94.1 88,101.2 89,106.3 90,105.5 91,100.4 92,98.4 93,105.0 94,113.9 95,112.6 96,115.2 97,119.1 98,115.7 99,111.8 100,111.3 101,110.4 102,108.9 103,103.3 104,101.1 105,99.3 106,97.4 107,102.9 108,98.4 109,95.1 110,93.2 111,100.1 112,102.3 113,99.4 114,105.7 115,106.4 116,102.8 117,107.4 118,101.8 119,99.8 120,100.4 121,99.2 122,97.0 123,96.5 124,92.5 125,94.8 126,96.3 127,92.6 128,92.5 129,95.6 130,92.3 131,87.2 132,88.7 133,93.6 134,94.0 135,94.6 136,95.6 137,90.7 138,94.3 139,89.9 140,94.3 141,97.1 142,94.9 143,90.9 144,87.9 145,86.7 146,86.2 147,85.7 148,83.6 149,84.3 150,83.3 151,81.3 152,81.3 153,78.6 154,76.6 155,69.6 156,68.5 157,70.0 158,71.3 159,71.3 160,68.1 161,69.2 162,67.9 163,61.5 164,70.4 165,74.4 166,73.5 167,72.1 168,71.3 169,72.8 170,70.5 171,69.5 172,71.4 173,62.8 174,61.6 175,63.5 176,63.9 177,64.7 178,64.9 179,74.4 180,76.2 181,72.6 182,76.7 183,76.9 184,73.6 185,70.6 186,65.4 187,71.3 188,72.6 189,73.8 190,71.6 191,67.8 192,77.2 193,73.4 194,78.4 195,76.0 196,81.3 197,80.6 198,76.5 199,77.0 200,76.3 201,73.5 202,73.0 203,73.3 204,68.0 205,64.3 206,65.3 207,55.7 208,59.7 209,56.5 210,57.5 211,57.0 212,54.5 213,53.8 214,51.5 215,56.9 216,62.1 217,60.0 218,63.4 219,67.0 220,72.1 221,67.7 222,65.1 223,59.9 224,63.2 225,63.2 226,67.2 227,64.5 228,58.9 229,62.0 230,56.6 231,53.1 232,53.7 233,60.6 234,55.7 235,56.1 236,58.2 237,56.8 238,55.3 239,50.1 240,53.7 241,49.7 242,44.5 243,39.4 244,40.0 245,42.6 246,39.1 247,38.7 248,38.2 249,33.2 250,34.2 251,42.2 252,43.6 253,50.1 254,47.2 255,46.1 256,48.2 257,48.3 258,45.3 259,45.1 260,40.4 261,40.6 262,37.0 263,31.8 264,26.1 265,28.5 266,25.4 267,32.0 268,35.8 269,42.6 270,38.9 271,43.2 272,43.3 273,43.9 274,44.0 275,46.1 276,45.3 277,39.0 278,38.9 279,37.0 280,33.5 281,34.2 282,38.6 283,40.5 284,36.8 285,42.5 286,44.6 287,41.1 288,38.3 289,38.3 290,35.5 291,34.9 292,39.0 293,44.5 294,46.7 295,43.5 296,45.5 297,48.7 298,51.4 299,56.7 300,57.1 301,61.3 302,60.0 303,68.2 304,67.1 305,69.3 306,76.1 307,73.6 308,74.6 309,82.4 310,85.4 311,84.4 312,86.0 313,83.3 314,80.7 315,78.3 316,77.2 317,72.5 318,70.2 319,68.6 320,75.9 321,72.8 322,68.2 323,69.2 324,70.9 325,64.1 326,70.3 327,68.6 328,60.1 329,63.4 330,61.0 331,54.4 332,54.8 333,52.8 334,49.7 335,52.8 336,53.1 337,52.1 338,49.2 339,49.3 340,50.0 341,53.6 342,54.8 343,51.7 344,51.4 345,54.4 346,57.3 347,48.0 348,44.0 349,41.7 350,50.8 351,48.6 352,47.0 353,41.1 354,39.6 355,39.8 356,38.0 357,44.8 358,41.2 359,40.0 360,42.5 361,37.8 362,31.5 363,36.4 364,38.8 365,37.7 366,37.1 367,38.5 368,41.9 369,34.5 370,30.8 371,35.0 372,39.7 373,33.8 374,30.3 375,23.9 376,21.1 377,24.2 378,23.2 379,30.8 380,33.4" fill="none" stroke="#eea66f" stroke-width="1.3"/>
  <rect x="18" y="68" width="94" height="54" fill="none" stroke="#9cc9ea" stroke-width="1.5"/>
  <text x="200" y="150" text-anchor="middle" font-size="12" fill="currentColor">the boxed part, 4 times wider and 2 times taller</text>
  <line x1="20" y1="185" x2="380" y2="185" stroke="currentColor" stroke-width="0.8" opacity="0.6"/>
  <polyline points="20,185.0 24,186.8 28,183.2 32,184.8 36,187.0 40,193.5 44,195.0 48,187.2 52,184.3 56,177.0 60,175.2 64,172.5 68,171.2 72,182.9 76,176.9 80,173.3 84,169.8 88,181.7 92,193.9 96,200.1 100,203.4 104,201.2 108,201.6 112,197.9 116,202.4 120,200.3 124,197.5 128,202.1 132,190.1 136,186.2 140,177.8 144,182.2 148,187.3 152,189.7 156,190.5 160,186.1 164,184.3 168,187.5 172,194.2 176,197.8 180,189.3 184,194.9 188,193.2 192,190.2 196,200.6 200,200.3 204,191.2 208,205.3 212,207.5 216,208.3 220,214.0 224,210.5 228,210.9 232,221.2 236,215.4 240,210.7 244,204.1 248,194.0 252,191.5 256,190.6 260,199.7 264,195.4 268,199.7 272,202.9 276,211.7 280,218.5 284,222.2 288,213.2 292,227.4 296,237.6 300,235.9 304,225.8 308,221.8 312,235.1 316,252.7 320,250.2 324,255.4 328,263.2 332,256.4 336,248.6 340,247.5 344,245.8 348,242.8 352,231.6 356,227.3 360,223.7 364,219.8 368,230.8 372,221.8 376,215.2 380,211.4" fill="none" stroke="#7ccf9a" stroke-width="1.5"/>
</svg>
</div>

The picture shows the reason for the $\sqrt{n}$: stretching time by 4 and space by $\sqrt 4 = 2$ turns a piece of the
path into something that looks statistically like the whole. Section 16.3 makes this exact.

**History.** The botanist Robert Brown, in 1827, watched under a microscope the small particles released from pollen
grains suspended in water, and saw them in constant irregular motion. He published his observations in 1828, and
checked that particles of non-living matter (including powdered rock) moved in the same way, so the motion was not a
sign of life. Its cause stayed unclear for decades.

In 1900, Louis Bachelier's thesis *Théorie de la spéculation* modelled prices on the Paris stock exchange with what we
now call Brownian motion, and found the connection with the heat equation; the work was little noticed at the time.
In 1905, Albert Einstein, who was not sure at first that the effect he predicted was the one Brown had seen, showed that if heat is the motion of
molecules, then a small particle in a liquid must be kicked about by molecular impacts, and its mean squared
displacement must grow in proportion to time, with a constant that depends on Avogadro's number. Marian Smoluchowski
reached similar conclusions independently in 1906. Between 1908 and 1909 Jean Perrin and his students measured the
displacements of tiny resin particles and confirmed Einstein's predictions, obtaining a value of Avogadro's number;
this was among the evidence that convinced the remaining sceptics that atoms are real, and Perrin received the Nobel
Prize in Physics in 1926. The mathematical object was constructed rigorously by Norbert Wiener in 1923 (it is also
called the **Wiener process**), and Paul Lévy discovered many of its finest properties in the 1930s and 1940s.

## 16.2 Definition and properties

*Level: advanced.*

**Definition.** A **standard Brownian motion** is a family of random variables $(B_t)_{t \ge 0}$ such that

1. $B_0 = 0$;
2. **independent increments:** for $0 \le t_0 < t_1 < \cdots < t_k$, the increments $B_{t_1} - B_{t_0}, \dots,
   B_{t_k} - B_{t_{k-1}}$ are independent;
3. **normal increments:** for $s < t$, $B_t - B_s$ is normal with mean 0 and variance $t - s$;
4. **continuous paths:** with probability 1, the function $t \mapsto B_t$ is continuous.

**Theorem (Wiener, 1923).** Brownian motion exists.

This is not obvious: conditions 1 to 3 are about finitely many times at once, while condition 4 is about the whole
path. Here is Lévy's construction in outline, which also shows how to simulate. Choose $B_1$ normal with mean 0 and
variance 1. Then fill in midpoints: given the values at the ends of an interval $[s, t]$, set

$$
B_{(s+t)/2} = \frac{B_s + B_t}{2} + \text{an independent normal with mean 0 and variance } \frac{t - s}{4}.
$$

*Why this is right, on $[0, 1]$.* If $B$ is a Brownian motion, $Z := B_{1/2} - \frac12 B_1$ has mean 0 and
$\operatorname{Cov}(Z, B_1) = \operatorname{Cov}(B_{1/2}, B_1) - \frac12\operatorname{Var}(B_1) = \frac12 - \frac12 = 0$
(using the covariance formula below). Jointly normal variables with zero covariance are independent (Chapter 11), so
$Z$ is independent of $B_1$, with variance $\frac12 - \frac12 + \frac14 = \frac14$. So the midpoint really is "the
average plus an independent $N(0, \frac14)$". Repeating at the dyadic points $k/2^m$ defines $B$ on a dense set of
times; joining the dots by straight lines gives continuous approximations, and one shows, using the fast decay of the
normal tail and the Borel-Cantelli lemma of [Chapter 17](17-Measure-Theoretic-Probability.md), that they converge
uniformly with probability 1. The limit is continuous and satisfies 1 to 4. The full proof takes about two pages; see
Mörters and Peres, chapter 1.

**Brownian motion is a Gaussian process.** For any times $t_1, \dots, t_k$, the vector $(B_{t_1}, \dots, B_{t_k})$ is
jointly normal, since it is a linear transformation of independent normal increments. A jointly normal vector with
mean 0 is determined by its covariances, and these are simple:

**Proposition.** $\operatorname{Cov}(B_s, B_t) = \min(s, t)$.

*Proof.* For $s \le t$, write $B_t = B_s + (B_t - B_s)$. The two parts are independent, so
$\operatorname{Cov}(B_s, B_t) = \operatorname{Var}(B_s) + \operatorname{Cov}(B_s, B_t - B_s) = s + 0$. $\square$

Conversely, a process with continuous paths whose finite-dimensional distributions are jointly normal with mean 0 and
covariance $\min(s, t)$ is a standard Brownian motion. This gives a quick way to check that something is a Brownian
motion.

**Symmetries.** If $B$ is a standard Brownian motion, so are:

- **reflection:** $-B_t$;
- **restarting:** $B_{s+t} - B_s$ for a fixed $s$ (independent of $(B_u)_{u \le s}$); this is the **Markov property**;
- **scaling:** $\frac{1}{\sqrt{c}}B_{ct}$ for a fixed $c > 0$;
- **time inversion:** $X_t = tB_{1/t}$ for $t > 0$, with $X_0 = 0$.

*Proof for scaling and inversion.* Both are Gaussian with mean 0. Scaling:
$\operatorname{Cov}\left(\frac{1}{\sqrt c}B_{cs}, \frac{1}{\sqrt c}B_{ct}\right) = \frac{1}{c}\min(cs, ct) =
\min(s, t)$. Inversion: $\operatorname{Cov}(sB_{1/s}, tB_{1/t}) = st\min(1/s, 1/t) = st/\max(s, t) = \min(s, t)$.
Continuity is clear for $t > 0$; continuity at 0 for time inversion means $tB_{1/t} \to 0$, that is $B_u/u \to 0$ as
$u \to \infty$, which is the strong law of large numbers for Brownian motion. $\square$

The **strong Markov property** says more: the restart property holds at stopping times too. If $T$ is a stopping time
(whether $T \le t$ is determined by the path up to time $t$) and $T < \infty$, then $B_{T+t} - B_T$ is a standard
Brownian motion independent of the path before $T$. For example, $T_a$, the first time $B$ reaches level $a$, is a
stopping time.

**Martingales of Brownian motion.** In continuous time a martingale satisfies $E[M_t \mid \mathcal{F}_s] = M_s$ for
$s < t$, where $\mathcal{F}_s$ is the information in the path up to time $s$. The three basic ones, with
$\theta$ any real number:

$$
B_t, \qquad B_t^2 - t, \qquad \exp\left(\theta B_t - \tfrac12\theta^2 t\right).
$$

*Proof for the last one.* Write $B_t = B_s + (B_t - B_s)$, with the increment independent of $\mathcal{F}_s$ and
$N(0, t - s)$. The normal moment generating function (Chapter 10) gives $E[e^{\theta(B_t - B_s)}] =
e^{\theta^2(t-s)/2}$. So $E[e^{\theta B_t} \mid \mathcal{F}_s] = e^{\theta B_s}e^{\theta^2(t-s)/2}$, and multiplying
by $e^{-\theta^2 t/2}$ gives $e^{\theta B_s - \theta^2 s/2}$. The other two are similar (Exercise 6). $\square$

## 16.3 Scaling and roughness

*Level: advanced, with expert statements.*

The scaling property says that zooming into a Brownian path, by a factor $c$ in time and $\sqrt{c}$ in space, gives a
path with exactly the same distribution. A smooth curve is different: zoom into it and it looks more and more like a
straight line. So a Brownian path cannot be smooth.

**Not differentiable at a given time.** Fix $t$. The difference quotient $\frac{B_{t+h} - B_t}{h}$ is normal with
mean 0 and variance $h/h^2 = 1/h$. So for any $M$,

$$
P\left(\left|\frac{B_{t+h} - B_t}{h}\right| > M\right) = P\left(|Z| > M\sqrt{h}\right) \to 1 \quad \text{as } h \to 0,
$$

where $Z$ is standard normal. The quotients do not settle at any finite value: they blow up like $1/\sqrt{h}$. Much
more is true, though the proof is longer:

**Theorem (Paley, Wiener and Zygmund, 1933).** With probability 1, the Brownian path is differentiable at **no** time
$t$.

(The fixed-$t$ argument above does not prove this, since there are uncountably many $t$. The proof covers $[0, 1]$ by
small intervals and shows that it is very unlikely that the path is nearly linear on any of them; see Mörters and
Peres, chapter 1.)

**Quadratic variation.** Here is a precise measure of the roughness. Split $[0, t]$ into $n$ equal pieces of length
$\Delta = t/n$ at the points $t_k = k\Delta$, and add up the squared increments:

$$
Q_n = \sum_{k=0}^{n-1}\left(B_{t_{k+1}} - B_{t_k}\right)^2 .
$$

**Theorem.** $Q_n \to t$ as $n \to \infty$, in the sense that $E[(Q_n - t)^2] \to 0$.

*Proof.* The increments are independent $N(0, \Delta)$. Each squared increment has mean $\Delta$ and variance
$E[Z^4]\Delta^2 - \Delta^2 = 2\Delta^2$, since a standard normal has $E[Z^4] = 3$. So $E[Q_n] = n\Delta = t$ and
$\operatorname{Var}(Q_n) = n \cdot 2\Delta^2 = 2t^2/n \to 0$. $\square$

For a function with a continuous derivative, the same sum tends to 0 (each increment is about $f'\Delta$, so the sum
is about $\sum f'^2\Delta^2 \to 0$). Brownian motion's sum tends to $t$: in a tiny time $\Delta$ it moves about
$\sqrt{\Delta}$, much more than $\Delta$. We write this rule as

$$
(dB_t)^2 = dt ,
$$

and it is the source of everything new in stochastic calculus (16.6).

**Infinite length.** A consequence: the path has infinite **total variation** (the total up-and-down distance
travelled, $\sup \sum |B_{t_{k+1}} - B_{t_k}|$) on every interval. If it were finite, say $V$, then
$Q_n \le \max_k |B_{t_{k+1}} - B_{t_k}| \cdot V$, and the max tends to 0 by continuity, so $Q_n \to 0$, contradicting
$Q_n \to t > 0$ (along a subsequence $Q_n \to t$ with probability 1). A Brownian particle travels infinitely far in
every second, which is why the physical motion is only approximately Brownian: at very short times a real particle has
momentum and moves smoothly.

**How far does it go?** $B_t$ is typically of size $\sqrt{t}$, but over all large times it occasionally goes further.
The **law of the iterated logarithm** (Khinchin, 1924, for coin tossing; for Brownian motion, Lévy) says that with
probability 1,

$$
\limsup_{t \to \infty} \frac{B_t}{\sqrt{2t\log\log t}} = 1 .
$$

(Statement only; see Mörters and Peres, chapter 5.) The zero set $\{t : B_t = 0\}$ is also remarkable: with probability
1 it is a closed set with no isolated points, uncountable, of total length 0, and of fractal dimension $1/2$.

## 16.4 The reflection principle and hitting times

*Level: advanced.*

What is the probability that a Brownian motion reaches height $a > 0$ before time $t$? Let $M_t = \max_{0 \le s \le t}
B_s$ and $T_a = \min\{s : B_s = a\}$, so the question is about $P(M_t \ge a) = P(T_a \le t)$.

**Theorem (reflection principle).** For $a > 0$,

$$
P(M_t \ge a) = 2P(B_t \ge a) = P(|B_t| \ge a).
$$

So the running maximum $M_t$ has the same distribution as $|B_t|$.

*Proof.* If $B_t \ge a$ then certainly $T_a \le t$, so $P(B_t \ge a) = P(T_a \le t,\ B_t \ge a)$. At the stopping
time $T_a$ the path is at $a$, and by the strong Markov property $B_{T_a + s} - a$ is a fresh Brownian motion,
symmetric about 0. So given $T_a \le t$, the path at time $t$ is equally likely to be above or below $a$ (the
probability of being exactly at $a$ is 0). Hence $P(T_a \le t, B_t \ge a) = \frac12 P(T_a \le t)$, and
$P(T_a \le t) = 2P(B_t \ge a)$. $\square$

The picture is the same as for the random walk in Chapter 15: reflect the part of the path after $T_a$ in the line at
height $a$. Every path that reaches $a$ and ends below it corresponds to one that ends above it.

**Worked example 1.** The chance that a standard Brownian motion reaches 1 by time 1 is
$2P(Z \ge 1) = 2(1 - \Phi(1)) \approx 0.317$, where $\Phi$ is the standard normal cdf. By scaling, the chance it
reaches 2 by time 4 is the same.

**The hitting time.** With $\Phi$ the standard normal cdf, $P(T_a \le t) = 2\left(1 - \Phi(a/\sqrt{t})\right)$.
Differentiating in $t$ gives the density

$$
f_{T_a}(t) = \frac{a}{\sqrt{2\pi t^3}}\, e^{-a^2/(2t)}, \qquad t > 0.
$$

Two consequences:

- As $t \to \infty$, $P(T_a \le t) \to 2(1 - \Phi(0)) = 1$: **Brownian motion reaches every level**, with probability 1.
- But for large $t$ the density is about $\frac{a}{\sqrt{2\pi}}t^{-3/2}$, so $P(T_a > t) \approx a\sqrt{2/(\pi t)}$ and
  $E[T_a] = \int_0^\infty P(T_a > t)\,dt = \infty$. **The expected waiting time is infinite**, exactly as for the
  random walk in Chapters 8 and 15.

By scaling, $T_a$ has the same distribution as $a^2T_1$: reaching twice as far takes four times as long.

**Exit from an interval.** Let $T$ be the first time $B$ hits $a > 0$ or $-b < 0$. Optional stopping (Chapter 15) holds
for continuous martingales under the same kind of conditions, and here $B_{\min(t,T)}$ is bounded. Applying it to
$B_t$ and to $B_t^2 - t$ gives, exactly as for gambler's ruin,

$$
P(B_T = a) = \frac{b}{a + b}, \qquad E[T] = ab .
$$

(From $0 = aP(B_T = a) - b(1 - P(B_T = a))$, and $E[T] = E[B_T^2] = a^2\frac{b}{a+b} + b^2\frac{a}{a+b} = ab$.)

**The arcsine law again.** Let $G$ be the last time before 1 that $B$ is at 0. Lévy showed that $P(G \le x) =
\frac{2}{\pi}\arcsin\sqrt{x}$, the continuous form of Chapter 15's law; by Donsker's theorem the discrete statement
follows from it, and vice versa.

## 16.5 Diffusion and the heat equation

*Level: advanced.*

Release a drop of ink in still water. Each ink particle does its own Brownian motion; the cloud as a whole spreads in
a smooth, predictable way. The randomness of each particle becomes the determinism of the crowd, and the law of the
crowd is a partial differential equation.

**Einstein's argument.** Let $u(t, x)$ be the density of particles at position $x$ at time $t$ (in one dimension).
Over a short time $\tau$, each particle moves by a random displacement $\Delta$, independent of where it is, with
$E[\Delta] = 0$ and $E[\Delta^2] = 2D\tau$, where $D$ is the **diffusion coefficient**. The particles at $x$ at time
$t + \tau$ came from $x - \Delta$, so

$$
u(t + \tau, x) = E[u(t, x - \Delta)] \approx u(t, x) - E[\Delta]\,\frac{\partial u}{\partial x} + \frac{1}{2}E[\Delta^2]\,\frac{\partial^2 u}{\partial x^2},
$$

by a second-order Taylor expansion. Subtract $u(t, x)$, divide by $\tau$, let $\tau \to 0$:

$$
\frac{\partial u}{\partial t} = D\,\frac{\partial^2 u}{\partial x^2} .
$$

This is the **heat equation** (or diffusion equation), the same equation Joseph Fourier wrote for the flow of heat in
1822. Standard Brownian motion corresponds to $D = \frac12$.

**The theorem.** For standard Brownian motion the exact statement is:

**Theorem.** Let $f$ be bounded and continuous, and let $u(t, x) = E[f(x + B_t)]$, the average of $f$ at the position
of a Brownian particle started at $x$. Then for $t > 0$,

$$
\frac{\partial u}{\partial t} = \frac{1}{2}\,\frac{\partial^2 u}{\partial x^2}, \qquad u(t, x) \to f(x) \text{ as } t \to 0 .
$$

*Proof.* Since $B_t$ has the $N(0, t)$ density,

$$
u(t, x) = \int_{-\infty}^{\infty} f(y)\, p_t(x - y)\, dy, \qquad p_t(z) = \frac{1}{\sqrt{2\pi t}}\,e^{-z^2/(2t)} .
$$

The **heat kernel** $p_t$ satisfies the heat equation itself. Indeed

$$
\frac{\partial p_t}{\partial t} = p_t(z)\left(-\frac{1}{2t} + \frac{z^2}{2t^2}\right), \qquad
\frac{\partial^2 p_t}{\partial z^2} = p_t(z)\left(\frac{z^2}{t^2} - \frac{1}{t}\right),
$$

so $\partial_t p_t = \frac12\partial_z^2 p_t$. Because the Gaussian and all its derivatives decay fast, we may
differentiate under the integral sign, and $u$ inherits the equation. As $t \to 0$, $x + B_t \to x$, and by
continuity and boundedness of $f$, $E[f(x + B_t)] \to f(x)$. $\square$

So the Brownian motion is the "microscopic" picture and the heat equation the "macroscopic" one. This goes in both
directions: one can solve heat equations by simulating random paths (a Monte Carlo method), and one can learn about
Brownian motion by solving equations. In higher dimensions the same holds with the Laplacian
$\Delta u = \sum_i \partial^2 u/\partial x_i^2$. A beautiful example (Kakutani, 1944): for a region $\Omega$ in the
plane and a function $g$ on its boundary, $h(x) = E[g(\text{the point where Brownian motion started at } x \text{ first
leaves } \Omega)]$ is the harmonic function ($\Delta h = 0$) in $\Omega$ with boundary values $g$. The exit
probabilities $b/(a+b)$ of 16.4 are the one-dimensional case: harmonic functions on an interval are linear.

**Back to physics: Stokes-Einstein.** Einstein also found $D$ for a sphere of radius $r$ in a fluid of viscosity
$\eta$ at absolute temperature $T$:

$$
D = \frac{k_B T}{6\pi\eta r},
$$

where $k_B = R/N_A$ is Boltzmann's constant, the gas constant divided by Avogadro's number. Measuring $D$ (from the mean
squared displacement $2Dt$ along one axis) and knowing $T$, $\eta$, $r$ and $R$ gives $N_A$. This is what Perrin did.

**Worked example 2.** A sphere of diameter 1 micrometre ($r = 0.5 \times 10^{-6}$ m) in water at 20 °C
($T = 293.15$ K, $\eta \approx 1.002 \times 10^{-3}$ Pa s), with $k_B = 1.380649 \times 10^{-23}$ J/K:

$$
D = \frac{1.380649 \times 10^{-23} \times 293.15}{6\pi \times 1.002 \times 10^{-3} \times 0.5 \times 10^{-6}} \approx 4.3 \times 10^{-13}\ \text{m}^2/\text{s}.
$$

In one minute its root-mean-square displacement along one axis is $\sqrt{2Dt} = \sqrt{2 \times 4.3 \times 10^{-13}
\times 60} \approx 7 \times 10^{-6}$ m, about 7 micrometres: easily seen in a microscope. But to wander 1 millimetre
it needs about $(10^{-3})^2/(2D) \approx 1.2 \times 10^6$ seconds, about two weeks. Distance grows like $\sqrt{t}$, so
diffusion is fast over tiny distances and hopelessly slow over large ones. That is why cells can rely on diffusion
inside themselves, while large organisms need hearts and blood vessels.

## 16.6 A first look at stochastic calculus and Black-Scholes

*Level: advanced; a first look at expert material.*

In Chapter 15, the winnings of a betting system on a random walk were $\sum H_k(S_k - S_{k-1})$, with the stake $H_k$
chosen before the step. The continuous version is a **stochastic integral**

$$
\int_0^t H_s\, dB_s = \lim \sum_k H_{t_k}\left(B_{t_{k+1}} - B_{t_k}\right),
$$

where, crucially, $H$ is evaluated at the **left** end of each small interval (the stake is chosen before the move).
Because $B$ has infinite total variation, this is not an ordinary (Riemann-Stieltjes) integral; Kiyosi Itô showed in
1944 how to define it as a limit in mean square, for any $H$ that depends only on the past and has
$E\int_0^t H_s^2\,ds < \infty$. Like its discrete version, **the Itô integral is a martingale**: no strategy beats
Brownian motion.

**Worked example 3: $\int_0^t B_s\,dB_s$.** For ordinary calculus we would expect $\frac12 B_t^2$. Use the identity
$b(c - b) = \frac12(c^2 - b^2) - \frac12(c - b)^2$ with $b = B_{t_k}$, $c = B_{t_{k+1}}$, and sum over $k$: the first
terms telescope, so

$$
\sum_k B_{t_k}\left(B_{t_{k+1}} - B_{t_k}\right) = \frac12 B_t^2 - \frac12 \sum_k \left(B_{t_{k+1}} - B_{t_k}\right)^2
\to \frac12 B_t^2 - \frac12 t,
$$

by the quadratic variation theorem of 16.3. So $\int_0^t B_s\,dB_s = \frac12(B_t^2 - t)$. The extra $-\frac12 t$ is
the quadratic variation at work, and it makes the answer a martingale (16.2), as it must be. (Evaluating at the
midpoint instead would give $\frac12B_t^2$; that is the Stratonovich integral, also used, especially in physics, but it
is not a martingale.)

**Itô's formula.** For a smooth function $f$, Taylor's theorem gives
$df(B_t) = f'(B_t)\,dB_t + \frac12 f''(B_t)\,(dB_t)^2 + \cdots$. In ordinary calculus the second-order term would
vanish; here $(dB_t)^2 = dt$, so it survives, while higher terms vanish:

$$
f(B_t) = f(B_0) + \int_0^t f'(B_s)\,dB_s + \frac12\int_0^t f''(B_s)\,ds .
$$

This is **Itô's formula**, the chain rule of stochastic calculus. A full proof uses the same idea as the quadratic
variation theorem, with care about the limits (see Øksendal's book). Check with $f(x) = x^2$:
$B_t^2 = \int_0^t 2B_s\,dB_s + t$, which is Worked example 3 again. More generally, for $f(t, x)$,
$df(t, B_t) = \partial_x f\,dB_t + \left(\partial_t f + \frac12\partial_x^2 f\right)dt$. If $\partial_t f + \frac12
\partial_x^2 f = 0$ (the backward heat equation) then $f(t, B_t)$ is a martingale: the link between 16.5 and martingales.

**Geometric Brownian motion.** A price cannot go negative, and its random changes are naturally proportional to its
size. The standard model, already used by Paul Samuelson in the 1960s, is

$$
S_t = S_0 \exp\left(\left(\mu - \tfrac12\sigma^2\right)t + \sigma B_t\right),
$$

where $\mu$ is the **drift** (average growth rate) and $\sigma$ the **volatility**. Itô's formula with
$f(t, x) = S_0e^{(\mu - \sigma^2/2)t + \sigma x}$ gives $dS_t = \mu S_t\,dt + \sigma S_t\,dB_t$: relative change
$= \mu\,dt$ plus noise. The $-\frac12\sigma^2$ is again Itô's correction. Its effect: the mean is
$E[S_t] = S_0e^{\mu t}$ (normal moment generating function), but the median is $S_0e^{(\mu - \sigma^2/2)t}$, lower.
With $\mu = 0.07$ and $\sigma = 0.2$ per year, after one year a unit grows on average to $e^{0.07} \approx 1.073$, but
the median outcome is $e^{0.05} \approx 1.051$. Volatility costs typical growth.

**Black-Scholes.** A **European call option** gives the right, but not the obligation, to buy a share at price $K$
(the **strike**) at a future time $T$. At time $T$ it is worth $\max(S_T - K, 0)$. What is a fair price for it today?
In 1973 Fischer Black and Myron Scholes, and Robert Merton in a companion paper, gave an answer that does not depend on
anyone's opinion of $\mu$. The idea, in brief:

1. In the geometric Brownian motion model, by trading the share and a riskless bond continuously, in amounts that
   depend on the current price, one can build a portfolio whose value at $T$ is exactly the option's payoff
   (**replication**); Itô's formula is how one finds the amounts.
2. If the option traded at any other price than the cost of that portfolio, one could make riskless profit
   (**arbitrage**) by selling the dearer one and buying the cheaper. So, assuming no arbitrage, the price is the cost of
   replication.
3. That cost can be computed as an expectation, discounted at the interest rate $r$, in a model where $\mu$ is
   replaced by $r$ (the **risk-neutral** model). The result is the Black-Scholes formula.

With $\Phi$ the standard normal cdf, the price at time 0 is

$$
C = S_0\,\Phi(d_1) - Ke^{-rT}\,\Phi(d_2), \qquad
d_1 = \frac{\ln(S_0/K) + (r + \frac12\sigma^2)T}{\sigma\sqrt{T}}, \qquad d_2 = d_1 - \sigma\sqrt{T}.
$$

**Worked example 4.** $S_0 = 100$, $K = 100$, $r = 0.05$, $\sigma = 0.2$, $T = 1$ year. Then $d_1 = (0 + 0.07)/0.2
= 0.35$, $d_2 = 0.15$, and $C = 100\,\Phi(0.35) - 100e^{-0.05}\,\Phi(0.15) \approx 10.45$. The matching put option
(the right to sell at $K$) costs about $5.57$. Check by **put-call parity**: since $\max(S - K, 0) - \max(K - S, 0) =
S - K$ for every $S$, a call minus a put pays $S_T - K$, which is worth $S_0 - Ke^{-rT}$ today; and indeed
$10.45 - 5.57 = 4.88 \approx 100 - 100e^{-0.05}$.

```python
from math import log, sqrt, exp, erf

def Phi(x):
    return 0.5 * (1 + erf(x / sqrt(2)))

def black_scholes_call(S, K, r, sigma, T):
    d1 = (log(S / K) + (r + sigma**2 / 2) * T) / (sigma * sqrt(T))
    d2 = d1 - sigma * sqrt(T)
    return S * Phi(d1) - K * exp(-r * T) * Phi(d2)

print(round(black_scholes_call(100, 100, 0.05, 0.2, 1), 2))   # 10.45
```

**Honestly.** Scholes and Merton received the 1997 Nobel Memorial Prize in Economic Sciences for this work (Black had
died in 1995). The formula's mathematics is correct; the model's assumptions are not exactly true. Real price
changes have heavier tails than the normal (large moves are far more common than geometric Brownian motion predicts),
volatility is not constant, prices jump, and trading is neither continuous nor free. In practice the formula is used
more as a language than as a prediction: traders quote the "implied volatility" that makes the formula match market
prices, and these implied volatilities differ across strikes, which is itself evidence that the model is
incomplete. The hedge fund Long-Term Capital Management, with Merton and Scholes among its directors, suffered huge
losses in 1998 and was rescued by a group of banks in an operation organised by the Federal Reserve Bank of New York;
models had underestimated how strongly markets can move together in a crisis. Nothing in this section is investment
advice; it is mathematics about a model.

Stochastic calculus reaches far beyond finance: stochastic differential equations $dX_t = b(X_t)\,dt +
\sigma(X_t)\,dB_t$ model particles, populations, neurons and noisy control systems, and the connection with partial
differential equations of 16.5 (the Feynman-Kac formula) runs through physics and engineering. That road leads to
[Chapter 17](17-Measure-Theoretic-Probability.md), where the foundations needed to make all this rigorous are laid.

## Check yourself

??? question "1. Compute $\operatorname{Var}(B_3 - 2B_1)$ and $\operatorname{Cov}(B_2, B_5 - B_1)$."

    $\operatorname{Var}(B_3 - 2B_1) = \operatorname{Var}(B_3) + 4\operatorname{Var}(B_1) - 4\operatorname{Cov}(B_3, B_1)
    = 3 + 4 - 4 \times 1 = 3$. (Or: $B_3 - 2B_1 = (B_3 - B_1) - B_1$, independent parts with variances 2 and 1.)
    $\operatorname{Cov}(B_2, B_5 - B_1) = \min(2, 5) - \min(2, 1) = 2 - 1 = 1$.

??? question "2. Find $P(B_2 > 1)$."

    $B_2 \sim N(0, 2)$, so $P(B_2 > 1) = P(Z > 1/\sqrt2) = 1 - \Phi(0.707) \approx 0.240$.

??? question "3. Show that $X_t = tB_{1/t}$ has the covariance of a Brownian motion, and compute $\operatorname{Var}(X_t)$ directly."

    $\operatorname{Var}(X_t) = t^2\operatorname{Var}(B_{1/t}) = t^2 \cdot \frac1t = t$. For $s < t$:
    $\operatorname{Cov}(X_s, X_t) = st\,\min(1/s, 1/t) = st \cdot \frac1t = s = \min(s, t)$.

??? question "4. Find the probability that Brownian motion reaches 2 before time 4, and the probability that it stays below 2 up to time 4."

    $P(M_4 \ge 2) = 2P(B_4 \ge 2) = 2P(Z \ge 1) \approx 0.317$. Staying below 2: $1 - 0.317 = 0.683$.

??? question "5. Brownian motion starts at 0 and stops when it first hits 2 or $-1$. Find the probability it ends at 2 and the expected stopping time."

    With $a = 2$, $b = 1$: $P(B_T = 2) = b/(a+b) = 1/3$, and $E[T] = ab = 2$.

??? question "6. Show that $B_t^2 - t$ is a martingale, and compute $E[e^{\theta B_t}]$."

    For $s < t$: $B_t^2 = B_s^2 + 2B_s(B_t - B_s) + (B_t - B_s)^2$. Given $\mathcal{F}_s$, the middle term has
    conditional mean 0 and the last has mean $t - s$ (independent increment). So $E[B_t^2 - t \mid \mathcal{F}_s] =
    B_s^2 + (t - s) - t = B_s^2 - s$. For the second part, $B_t \sim N(0, t)$, and the normal mgf gives
    $E[e^{\theta B_t}] = e^{\theta^2 t/2}$.

??? question "7. Find the quadratic variation on $[0, t]$ of $3B_s$ and of $B_s + s$."

    For $3B$: every squared increment is multiplied by 9, so $9t$. For $B_s + s$: the increments are $\Delta B + \Delta$,
    and $\sum(\Delta B + \Delta)^2 = \sum(\Delta B)^2 + 2\sum \Delta B\,\Delta + \sum \Delta^2$. The first tends to $t$,
    the last is $t\Delta \to 0$, and the middle is at most $2\max|\Delta B| \cdot t \to 0$. So $t$: adding a smooth
    function does not change quadratic variation.

??? question "8. Use Itô's formula to write $B_t^3$ as a stochastic integral plus an ordinary integral."

    With $f(x) = x^3$, $f' = 3x^2$, $f'' = 6x$: $B_t^3 = \int_0^t 3B_s^2\,dB_s + \int_0^t 3B_s\,ds$. Consequently
    $B_t^3 - 3\int_0^t B_s\,ds$ is a martingale.

??? question "9. For the 1-micrometre sphere of Worked example 2 ($D \approx 4.3 \times 10^{-13}$ m²/s), how long does it take for the root-mean-square displacement along one axis to reach 10 micrometres?"

    Solve $2Dt = (10^{-5})^2$: $t = 10^{-10}/(2 \times 4.29 \times 10^{-13}) \approx 117$ seconds, about two minutes.
    Ten times farther takes a hundred times longer.

??? question "10. Explain, using scaling, why $T_a$ has the same distribution as $a^2T_1$. Deduce the median of $T_a$ from the median $m$ of $T_1$."

    $\tilde B_t = \frac1a B_{a^2t}$ is a standard Brownian motion. $B$ reaches $a$ at time $s$ exactly when $\tilde B$
    reaches 1 at time $s/a^2$. So $T_a = a^2\tilde T_1$, and $\tilde T_1$ has the distribution of $T_1$. The median of
    $T_a$ is $a^2 m$. (Numerically, $P(T_1 \le t) = 2(1 - \Phi(1/\sqrt t)) = 1/2$ needs $1/\sqrt{t} \approx 0.674$, so
    $m \approx 2.2$.)

??? question "11. Show that $u(t, x) = x^2 + t$ solves $\partial_t u = \frac12\partial_x^2 u$, and that it equals $E[(x + B_t)^2]$."

    $\partial_t u = 1$ and $\partial_x^2 u = 2$, so $\frac12 \cdot 2 = 1$. And $E[(x + B_t)^2] = x^2 + 2xE[B_t] + E[B_t^2]
    = x^2 + t$, as the theorem of 16.5 predicts with $f(x) = x^2$ (unbounded, but the proof still works since the
    Gaussian decays fast).

??? question "12. Using the Black-Scholes formula, what happens to the call price of Worked example 4 as $\sigma \to 0$? Explain."

    As $\sigma \to 0$, $d_1, d_2 \to +\infty$ (since $\ln(S_0/K) + rT = 0.05 > 0$), so $C \to S_0 - Ke^{-rT} = 100 -
    100e^{-0.05} \approx 4.88$. With no randomness the share surely grows at the riskless rate (in the risk-neutral
    model) and the option is surely exercised, so it is worth exactly the share minus the discounted strike.

## What you learned

- Brownian motion is the scaling limit of every fair random walk (Donsker): Gaussian, independent increments,
  variance $t$, continuous paths, covariance $\min(s, t)$.
- It is invariant under reflection, restarting (also at stopping times), scaling $c^{-1/2}B_{ct}$ and time inversion.
- Its paths are nowhere differentiable, have infinite length and quadratic variation $t$: $(dB)^2 = dt$.
- The reflection principle gives $P(\max_{s \le t} B_s \ge a) = 2P(B_t \ge a)$; every level is reached, but in
  infinite expected time; exit from $(-b, a)$ happens at $a$ with probability $b/(a+b)$ after expected time $ab$.
- The density of a Brownian particle solves the heat equation; $u(t, x) = E[f(x + B_t)]$; Einstein's
  $D = k_BT/(6\pi\eta r)$ let Perrin count molecules.
- The Itô integral is the continuous limit of betting systems; Itô's formula has the extra $\frac12 f''\,dt$ term;
  geometric Brownian motion and no-arbitrage give the Black-Scholes price, a useful model with known flaws.

**Next:** [Chapter 17](17-Measure-Theoretic-Probability.md), the measure-theoretic foundations that make limits,
infinite sequences and continuous-time processes rigorous.

## Further reading

- P. Mörters and Y. Peres, *Brownian Motion*, Cambridge University Press, 2010. Construction, path properties, the
  reflection principle, fractal properties, with complete proofs.
- R. Durrett, *Probability: Theory and Examples*, 5th edition, Cambridge University Press, 2019, chapters 7 and 8.
- B. Øksendal, *Stochastic Differential Equations: An Introduction with Applications*, 6th edition, Springer, 2003.
  Itô calculus at an accessible level.
- P. Billingsley, *Convergence of Probability Measures*, 2nd edition, Wiley, 1999. Donsker's theorem.
- A. Einstein, *Investigations on the Theory of the Brownian Movement*, Dover reprint of the English translation
  (1926) of his papers from 1905 onward.
- J. Perrin, *Atoms*, English translation 1916 of *Les Atomes* (1913).
- F. Black and M. Scholes, "The pricing of options and corporate liabilities", *Journal of Political Economy* 81(3),
  1973; R. C. Merton, "Theory of rational option pricing", *Bell Journal of Economics and Management Science* 4(1), 1973.
- S. E. Shreve, *Stochastic Calculus for Finance II: Continuous-Time Models*, Springer, 2004.
- On this site: [Differential equations: a first look](../../topics/change/level-8/07-differential-equations.md),
  [The normal distribution](../../topics/probability/level-8/03-normal-distribution.md) (gentler),
  [Chapter 15](15-Random-Walks-and-Martingales.md) (random walks and martingales),
  [Unit 12, Improper integrals](../../uoft/MAT137/unit12.md) (for $E[T_a] = \infty$), and the
  [Probability book's contents](index.md).
