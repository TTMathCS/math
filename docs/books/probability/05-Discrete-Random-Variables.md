# 5. Discrete random variables

*So far every question has been about an event: will the die show a six, will both children be girls, does the
patient have the disease. But most questions about chance ask for a number. How many heads in ten flips? How many
rolls until the first six? How many misprints on this page? This chapter turns outcomes into numbers. You will meet
the random variable, the table of chances that describes it (its distribution), the five discrete distributions that
appear again and again (Bernoulli, binomial, geometric, negative binomial, Poisson), the cumulative distribution
function, and the rules for a new random variable made from an old one. Along the way you will prove that the
binomial turns into the Poisson when successes are rare, and check that prediction against a famous data set about
soldiers killed by horses.*

!!! abstract "In this chapter"
    **You will learn:**

    - what a random variable is (a function on the sample space) and what its distribution is
    - the Bernoulli, binomial, geometric, negative binomial and Poisson distributions: where each comes from, its formula, and a proof that its probabilities add to 1
    - why the geometric distribution has no memory, and why it is the only one on the positive integers that does
    - a full proof that the binomial with $n$ large and $p = \lambda/n$ tends to the Poisson, and how good the approximation is
    - the cumulative distribution function, its properties, and how to read a distribution from it
    - how to find the distribution of $g(X)$, of a maximum, and of a sum of two independent variables

    **You need:** [Chapter 1](01-What-Probability-Is.md) (axioms), [Chapter 2](02-Counting-and-Equally-Likely-Outcomes.md)
    (binomial coefficients, the hypergeometric) and [Chapter 3](03-Conditional-Probability-and-Independence.md)
    (independence). Gentler versions: [Random variables and their distributions](../../topics/probability/level-7/01-random-variables.md),
    [The binomial distribution](../../topics/probability/level-7/04-binomial-distribution.md),
    [The geometric distribution](../../topics/probability/level-7/05-geometric-distribution.md),
    [Uniform distributions and choosing a model](../../topics/probability/level-7/07-choosing-a-model.md).
    No calculus is needed, only the series for $e^x$, which is recalled when it is used.

    **Levels:** 5.1 and 5.3 are beginner; 5.2 is beginner to intermediate (the Poisson limit is intermediate);
    5.4 is intermediate.

## 5.1 Random variables and distributions

Flip a fair coin three times. The sample space has eight outcomes, all equally likely:

$$
\Omega = \{HHH, HHT, HTH, HTT, THH, THT, TTH, TTT\}.
$$

Now ask: *how many heads?* That question attaches a number to every outcome: $HHH \mapsto 3$, $HHT \mapsto 2$,
$TTT \mapsto 0$, and so on. A rule that attaches a number to every outcome is exactly what mathematicians call a
**function**, and this particular kind of function has a special name.

**Definition.** A **random variable** is a function $X : \Omega \to \mathbb{R}$ from the sample space to the real
numbers. It is **discrete** if it takes only finitely many values, or a list of values $x_1, x_2, x_3, \dots$ that can
be numbered (a **countable** set).

The name is a famous misnomer: a random variable is neither random nor a variable. It is a fixed function. The
randomness is in which outcome $\omega$ the world picks; once $\omega$ is picked, $X(\omega)$ is determined. We write
capital letters $X, Y, N, S$ for random variables and small letters $x, y, k$ for the numbers they might take.

The event "$X$ takes the value $x$" is the set of outcomes that $X$ sends to $x$:

$$
\{X = x\} = \{\omega \in \Omega : X(\omega) = x\}.
$$

For three flips with $X$ = number of heads, $\{X = 2\} = \{HHT, HTH, THH\}$, so $P(X = 2) = 3/8$. Doing this for
every value gives a table:

| $x$ | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| $P(X = x)$ | 1/8 | 3/8 | 3/8 | 1/8 |

**Definition.** The **probability mass function** (pmf) of a discrete random variable $X$ is the function
$p_X(x) = P(X = x)$. The table of values with their probabilities is called the **distribution** of $X$.

Two facts about any pmf follow straight from the axioms of [Chapter 1](01-What-Probability-Is.md).

**Theorem 5.1.** If $X$ is discrete with values $x_1, x_2, \dots$, then $p_X(x_i) \ge 0$ for every $i$ and
$\sum_i p_X(x_i) = 1$.

*Proof.* Each $p_X(x_i)$ is the probability of an event, so it is at least 0. The events $\{X = x_1\}, \{X = x_2\},
\dots$ are disjoint (an outcome cannot be sent to two different numbers) and together they make up all of $\Omega$
(every outcome is sent somewhere). By countable additivity, $\sum_i P(X = x_i) = P(\Omega) = 1$. $\square$

The converse is also true and is what lets us invent distributions freely: *any* list of nonnegative numbers $p_1,
p_2, \dots$ adding to 1, attached to values $x_1, x_2, \dots$, is the pmf of some random variable. (Take
$\Omega = \{x_1, x_2, \dots\}$, give each point its $p_i$, and let $X$ be the identity function.) So from now on we
will often describe a random variable only by its pmf and forget the sample space behind it. Two random variables
with the same pmf are said to **have the same distribution**, even if they live on different sample spaces: the
number of heads in three coin flips and the number of even numbers among three die rolls have the same distribution.

**Example 5.1 (sum of two dice).** Roll two fair dice; $\Omega$ has 36 equally likely ordered pairs. Let $S$ be the
sum. The pairs with sum $s$ lie on a diagonal of the $6 \times 6$ grid, and the diagonal has $6 - |s - 7|$ squares, so

$$
P(S = s) = \frac{6 - |s - 7|}{36}, \qquad s = 2, 3, \dots, 12.
$$

Check: $1 + 2 + 3 + 4 + 5 + 6 + 5 + 4 + 3 + 2 + 1 = 36$, so the probabilities add to 1.

**Example 5.2 (the larger of two dice).** Same two dice, now $M = \max$ of the two. The pairs with maximum exactly $k$
form an L-shape in the grid: $k$ pairs with first die $k$ and second die at most $k$, plus $k$ pairs the other way,
minus the pair $(k, k)$ counted twice. So $P(M = k) = (2k - 1)/36$ for $k = 1, \dots, 6$: the values $1, 3, 5, 7, 9,
11$ over 36. Check: $1 + 3 + 5 + 7 + 9 + 11 = 36$. In 5.3 you will get the same answer with no picture at all.

**Example 5.3 (indicators).** For any event $A$, the **indicator** of $A$ is the random variable

$$
\mathbf{1}_A(\omega) = \begin{cases} 1 & \text{if } \omega \in A, \\ 0 & \text{if } \omega \notin A. \end{cases}
$$

Its distribution is $P(\mathbf{1}_A = 1) = P(A)$ and $P(\mathbf{1}_A = 0) = 1 - P(A)$. Indicators look trivial, but
they will be the most useful random variables in the next chapter: any count is a sum of indicators.

**Example 5.4 (the discrete uniform).** A random variable is **uniform** on a finite set of $n$ values if each value
has probability $1/n$. A fair die is uniform on $\{1, \dots, 6\}$; a random digit is uniform on $\{0, \dots, 9\}$.
"Equally likely outcomes" from [Chapter 2](02-Counting-and-Equally-Likely-Outcomes.md) is the special case where $X$
is a label on the outcomes.

**Several random variables at once.** Many questions involve two or more random variables on the same sample space:
the number of heads $X$ and the number of tails $Y = 3 - X$; the two dice $D_1$, $D_2$ and their sum. The idea of
independence from [Chapter 3](03-Conditional-Probability-and-Independence.md) carries over.

**Definition.** Discrete random variables $X$ and $Y$ are **independent** if

$$
P(X = x, Y = y) = P(X = x)\, P(Y = y) \quad \text{for all values } x, y.
$$

(The comma means "and".) More generally $X_1, \dots, X_n$ are independent if
$P(X_1 = x_1, \dots, X_n = x_n) = \prod_i P(X_i = x_i)$ for all choices of values. An infinite family is independent
if every finite subfamily is.

The two dice are independent; $X$ and $3 - X$ are not ($P(X = 0, Y = 0) = 0$ but $P(X = 0) P(Y = 0) = 1/64$). A
phrase you will see constantly is **i.i.d.**, "independent and identically distributed": a sequence of independent
random variables that all have the same distribution, like repeated rolls of one die. Chapter 11 treats several random
variables jointly in full; here we need only this definition.

## 5.2 The five families

Most discrete random variables met in practice belong to a handful of families. Each family is a whole collection of
distributions, indexed by one or two numbers called **parameters**. Learn where each comes from, not only its formula,
and you will recognise it in the wild.

### Bernoulli: one trial

A **Bernoulli trial** is an experiment with two outcomes, called **success** and **failure**, with
$P(\text{success}) = p$. The random variable $X$ = 1 on success, 0 on failure, is **Bernoulli with parameter $p$**,
written $X \sim \text{Bernoulli}(p)$ (the symbol $\sim$ reads "has the distribution"):

$$
P(X = 1) = p, \qquad P(X = 0) = 1 - p.
$$

We will often write $q = 1 - p$. Every indicator is Bernoulli. The name honours Jacob Bernoulli, whose book *Ars
Conjectandi* (published in 1713, eight years after his death) studied repeated trials of exactly this kind.

### Binomial: how many successes in $n$ trials

Repeat a Bernoulli($p$) trial $n$ times, independently, and let $X$ count the successes.

**Theorem 5.2 (binomial distribution).** $X$ takes the values $0, 1, \dots, n$ with

$$
P(X = k) = \binom{n}{k} p^k q^{n - k}, \qquad k = 0, 1, \dots, n.
$$

We write $X \sim \text{Bin}(n, p)$.

*Proof.* An outcome is a string of $n$ letters S and F. By independence, the probability of any particular string with
$k$ letters S and $n - k$ letters F is $p^k q^{n-k}$, whatever order the letters come in. The number of such strings
is the number of ways to choose which $k$ of the $n$ positions hold an S, which is $\binom{n}{k}$. Add the
probabilities of these disjoint strings. $\square$

*Check that they add to 1.* By the binomial theorem,

$$
\sum_{k=0}^{n} \binom{n}{k} p^k q^{n-k} = (p + q)^n = 1^n = 1.
$$

That is where the distribution gets its name.

**Example 5.5.** Ten flips of a fair coin: $P(\text{exactly 5 heads}) = \binom{10}{5}/2^{10} = 252/1024 \approx
0.246$. Even the single most likely count happens less than a quarter of the time.

**Example 5.6.** A multiple-choice test has 8 questions with 4 choices each; you guess every one. The number right is
$\text{Bin}(8, 1/4)$. $P(\text{exactly } 2) = \binom{8}{2} (1/4)^2 (3/4)^6 = 5103/16384 \approx 0.311$, and
$P(\text{at least } 1) = 1 - (3/4)^8 \approx 0.900$.

**The shape.** The binomial probabilities rise and then fall. To see where they peak, look at the ratio of neighbours:

$$
\frac{P(X = k)}{P(X = k - 1)} = \frac{\binom{n}{k}}{\binom{n}{k-1}} \cdot \frac{p}{q} = \frac{(n - k + 1)\, p}{k\, q}.
$$

This ratio is greater than 1 exactly when $(n - k + 1) p > k q$, that is when $k < (n + 1) p$. So the probabilities
increase while $k < (n+1)p$ and decrease after. **The most likely value (the mode) is $\lfloor (n + 1) p \rfloor$**,
the whole-number part of $(n+1)p$; when $(n+1)p$ is itself a whole number, the two values $(n+1)p - 1$ and $(n+1)p$
tie. For ten fair flips, $(n + 1)p = 5.5$ and the mode is 5. For $\text{Bin}(20, 0.3)$, $(n+1)p = 6.3$ and the mode
is 6 (probabilities 0.179, 0.192, 0.164 at $k = 5, 6, 7$).

**Sampling without replacement.** If you draw $n$ balls *without* replacement from an urn with $K$ red and $N - K$
blue, the draws are not independent and the count of reds is **hypergeometric** (Section 2.4):
$P(X = k) = \binom{K}{k}\binom{N-K}{n-k}/\binom{N}{n}$. When the urn is huge compared to $n$, removing a few balls
barely changes the proportions, and the hypergeometric is close to $\text{Bin}(n, K/N)$. Polls of a thousand people
from a country of millions are, for this reason, treated as binomial.

### Geometric: how long until the first success

Now repeat Bernoulli($p$) trials until the first success, and let $X$ be the number of trials needed, counting the
successful one. (Here $0 < p \le 1$.)

**Theorem 5.3 (geometric distribution).** $X$ takes the values $1, 2, 3, \dots$ with

$$
P(X = k) = q^{k-1} p, \qquad P(X > k) = q^k.
$$

We write $X \sim \text{Geom}(p)$.

*Proof.* $X = k$ means: failures on trials $1, \dots, k-1$ and success on trial $k$. By independence this has
probability $q^{k-1} p$. And $X > k$ means the first $k$ trials all fail, probability $q^k$. $\square$

*Check.* $\sum_{k \ge 1} q^{k-1} p = p \cdot \frac{1}{1 - q} = 1$ when $p > 0$, by the geometric series, which also
gives the family its name. So with probability 1 a success eventually comes. (If $p = 0$ it never does; we exclude
that case.)

**A warning about conventions.** Some books count the failures *before* the first success instead, $Y = X - 1$, with
$P(Y = k) = q^k p$ for $k = 0, 1, 2, \dots$. Both are called "geometric". Always check which one a book or a computer
library means.

**Example 5.7.** Roll a die until a six appears. $P(X = 3) = (5/6)^2 (1/6) = 25/216 \approx 0.116$. The chance you
need more than 6 rolls is $(5/6)^6 \approx 0.335$, and more than 10 rolls is $(5/6)^{10} \approx 0.162$: a die is
"due" a six far less often than people feel.

**Memorylessness.** Suppose you have already rolled 10 times with no six. What is the chance you need more than 3
further rolls? Intuition from the [gambler's fallacy](../../topics/probability/level-5/06-gamblers-fallacy.md) says a
six is "due"; the mathematics says otherwise.

**Theorem 5.4.** If $X \sim \text{Geom}(p)$ then for all whole numbers $m, n \ge 0$,

$$
P(X > m + n \mid X > m) = P(X > n).
$$

*Proof.* The event $\{X > m + n\}$ is contained in $\{X > m\}$, so

$$
P(X > m + n \mid X > m) = \frac{P(X > m + n)}{P(X > m)} = \frac{q^{m+n}}{q^m} = q^n = P(X > n). \qquad \square
$$

Having waited $m$ trials tells you nothing about how much longer you will wait. The die does not remember. More
surprising is that this property *characterises* the geometric distribution.

**Theorem 5.5.** Let $X$ take values in $\{1, 2, 3, \dots\}$ with $P(X > 1) = q$, $0 < q < 1$, and suppose
$P(X > m + n) = P(X > m) P(X > n)$ for all $m, n \ge 0$. Then $X \sim \text{Geom}(1 - q)$.

*Proof.* Write $G(n) = P(X > n)$. Then $G(0) = 1$, $G(1) = q$, and $G(n + 1) = G(n) G(1) = q\,G(n)$, so by induction
$G(n) = q^n$ for every $n$. Hence $P(X = k) = G(k - 1) - G(k) = q^{k-1} - q^k = q^{k-1}(1 - q)$. $\square$

Chapter 9 proves the same for continuous waiting times: the only memoryless one is the exponential distribution.

### Negative binomial: how long until the $r$-th success

Wait instead for the $r$-th success, and let $X$ be the number of trials needed.

**Theorem 5.6 (negative binomial distribution).** $X$ takes the values $r, r + 1, \dots$ with

$$
P(X = k) = \binom{k-1}{r-1} p^r q^{k-r}, \qquad k = r, r+1, \dots.
$$

*Proof.* $X = k$ means: trial $k$ is a success, and among the first $k - 1$ trials there are exactly $r - 1$
successes. The first part has probability $p$; the second is a binomial count, probability
$\binom{k-1}{r-1} p^{r-1} q^{k-r}$; by independence of disjoint blocks of trials, multiply. $\square$

For $r = 1$ this is the geometric. The name comes from writing the probabilities with a binomial coefficient of a
negative number; you will see why it adds to 1 in Chapter 8, where the negative binomial is shown to be a sum of $r$
independent geometrics.

**Example 5.8 (a best-of-seven series).** Two teams play until one has won 4 games. Team A wins each game
independently with probability 0.6. Team A takes the series if its 4th win comes on game $k$ for some
$k \in \{4, 5, 6, 7\}$:

$$
\sum_{k=4}^{7} \binom{k - 1}{3} (0.6)^4 (0.4)^{k - 4} = 0.1296 + 0.20736 + 0.20736 + 0.165888 = 0.710208.
$$

*Check* in a different way: imagine all 7 games are always played, even after the series is decided. A wins the series
exactly when it wins at least 4 of the 7, and $\sum_{j=4}^{7}\binom{7}{j} (0.6)^j (0.4)^{7-j} = 0.710208$ too. A
team that wins 60% of single games wins about 71% of series: longer contests favour the stronger side.

### Poisson: rare events

Count the misprints on a page, the calls to a help line in a minute, the radioactive atoms that decay in a second
in a small sample. Each is a count of events that each have a tiny chance of happening, with a great many
opportunities. The distribution that fits all of these is named after Siméon-Denis Poisson, who derived it in his
1837 book on the probability of judgements in courts.

**Definition.** For $\lambda > 0$, $X \sim \text{Poisson}(\lambda)$ if $X$ takes the values $0, 1, 2, \dots$ with

$$
P(X = k) = e^{-\lambda} \frac{\lambda^k}{k!}.
$$

*Check.* The exponential series is $e^{\lambda} = \sum_{k \ge 0} \lambda^k / k!$, valid for every real $\lambda$.
So $\sum_k e^{-\lambda}\lambda^k/k! = e^{-\lambda} e^{\lambda} = 1$.

Where does such a formula come from? From the binomial, when $n$ is large and $p$ is small.

**Theorem 5.7 (Poisson limit theorem).** Fix $\lambda > 0$ and let $X_n \sim \text{Bin}(n, \lambda/n)$ for
$n > \lambda$. Then for every fixed $k = 0, 1, 2, \dots$,

$$
\lim_{n \to \infty} P(X_n = k) = e^{-\lambda} \frac{\lambda^k}{k!}.
$$

*Proof.* Write out the binomial probability with $p = \lambda/n$ and regroup:

$$
P(X_n = k) = \frac{n(n-1)\cdots(n-k+1)}{k!} \cdot \frac{\lambda^k}{n^k} \cdot \left(1 - \frac{\lambda}{n}\right)^{n-k}
= \frac{\lambda^k}{k!} \cdot \underbrace{\frac{n}{n}\cdot\frac{n-1}{n}\cdots\frac{n-k+1}{n}}_{A_n} \cdot
\underbrace{\left(1 - \frac{\lambda}{n}\right)^{n}}_{B_n} \cdot \underbrace{\left(1 - \frac{\lambda}{n}\right)^{-k}}_{C_n}.
$$

Now let $n \to \infty$ with $k$ fixed. $A_n$ is a product of $k$ factors (a fixed number), each tending to 1, so
$A_n \to 1$. $C_n$ is a fixed power of something tending to 1, so $C_n \to 1$. And
$B_n = (1 - \lambda/n)^n \to e^{-\lambda}$. For completeness, here is why: $\ln B_n = n \ln(1 - \lambda/n)$, and
$\ln(1 - x)/(-x) \to 1$ as $x \to 0$ (this is the statement that the derivative of $\ln$ at 1 is 1), so
$n \ln(1 - \lambda/n) = -\lambda \cdot \frac{\ln(1 - \lambda/n)}{-\lambda/n} \to -\lambda$; since $\exp$ is
continuous, $B_n \to e^{-\lambda}$. Multiply the limits. $\square$

In words: **if there are many independent chances for an event, each with a small probability, the number of events
is approximately Poisson with $\lambda$ = (number of chances) $\times$ (probability of each).** Only the product
matters.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 240" role="img" aria-label="Bar chart of the binomial distribution with n equal to 10 and p equal to 0.3, with dots for the Poisson distribution with mean 3. The two are close but the Poisson is more spread out; both peak near 2 and 3">
<line x1="50" y1="190" x2="390" y2="190" stroke="currentColor" stroke-width="1.5"/>
<line x1="50" y1="190" x2="50" y2="30" stroke="currentColor" stroke-width="1.5"/>
<line x1="46" y1="140" x2="50" y2="140" stroke="currentColor"/><text x="43" y="144" text-anchor="end" font-size="11" fill="currentColor">0.1</text>
<line x1="46" y1="90" x2="50" y2="90" stroke="currentColor"/><text x="43" y="94" text-anchor="end" font-size="11" fill="currentColor">0.2</text>
<line x1="46" y1="40" x2="50" y2="40" stroke="currentColor"/><text x="43" y="44" text-anchor="end" font-size="11" fill="currentColor">0.3</text>
<rect x="60" y="175.9" width="20" height="14.1" fill="#eea66f"/>
<rect x="90" y="129.5" width="20" height="60.5" fill="#eea66f"/>
<rect x="120" y="73.3" width="20" height="116.7" fill="#eea66f"/>
<rect x="150" y="56.6" width="20" height="133.4" fill="#eea66f"/>
<rect x="180" y="89.9" width="20" height="100.1" fill="#eea66f"/>
<rect x="210" y="138.5" width="20" height="51.5" fill="#eea66f"/>
<rect x="240" y="171.6" width="20" height="18.4" fill="#eea66f"/>
<rect x="270" y="185.5" width="20" height="4.5" fill="#eea66f"/>
<rect x="300" y="189.3" width="20" height="0.7" fill="#eea66f"/>
<circle cx="70" cy="165.1" r="4" fill="#9cc9ea" stroke="currentColor"/>
<circle cx="100" cy="115.3" r="4" fill="#9cc9ea" stroke="currentColor"/>
<circle cx="130" cy="78" r="4" fill="#9cc9ea" stroke="currentColor"/>
<circle cx="160" cy="78" r="4" fill="#9cc9ea" stroke="currentColor"/>
<circle cx="190" cy="106" r="4" fill="#9cc9ea" stroke="currentColor"/>
<circle cx="220" cy="139.6" r="4" fill="#9cc9ea" stroke="currentColor"/>
<circle cx="250" cy="164.8" r="4" fill="#9cc9ea" stroke="currentColor"/>
<circle cx="280" cy="179.2" r="4" fill="#9cc9ea" stroke="currentColor"/>
<circle cx="310" cy="185.9" r="4" fill="#9cc9ea" stroke="currentColor"/>
<circle cx="340" cy="188.6" r="4" fill="#9cc9ea" stroke="currentColor"/>
<circle cx="370" cy="189.6" r="4" fill="#9cc9ea" stroke="currentColor"/>
<text x="70" y="205" text-anchor="middle" font-size="11" fill="currentColor">0</text>
<text x="100" y="205" text-anchor="middle" font-size="11" fill="currentColor">1</text>
<text x="130" y="205" text-anchor="middle" font-size="11" fill="currentColor">2</text>
<text x="160" y="205" text-anchor="middle" font-size="11" fill="currentColor">3</text>
<text x="190" y="205" text-anchor="middle" font-size="11" fill="currentColor">4</text>
<text x="220" y="205" text-anchor="middle" font-size="11" fill="currentColor">5</text>
<text x="250" y="205" text-anchor="middle" font-size="11" fill="currentColor">6</text>
<text x="280" y="205" text-anchor="middle" font-size="11" fill="currentColor">7</text>
<text x="310" y="205" text-anchor="middle" font-size="11" fill="currentColor">8</text>
<text x="340" y="205" text-anchor="middle" font-size="11" fill="currentColor">9</text>
<text x="370" y="205" text-anchor="middle" font-size="11" fill="currentColor">10</text>
<rect x="250" y="40" width="14" height="10" fill="#eea66f"/>
<text x="270" y="49" font-size="11" fill="currentColor">Bin(10, 0.3)</text>
<circle cx="257" cy="65" r="4" fill="#9cc9ea" stroke="currentColor"/>
<text x="270" y="69" font-size="11" fill="currentColor">Poisson(3)</text>
<text x="220" y="228" text-anchor="middle" font-size="12" fill="currentColor">k</text>
</svg>
</div>

The picture shows that even with $n$ only 10 the shapes agree roughly; with $n = 1000$ and $p = 0.002$ they agree to
three decimal places. How close, exactly? A theorem of Lucien Le Cam (1960) answers this in general, and it even
allows the success probabilities to differ from trial to trial.

**Theorem 5.8 (Le Cam's inequality; statement).** Let $X$ be the number of successes in $n$ independent trials with
success probabilities $p_1, \dots, p_n$, and let $\lambda = p_1 + \dots + p_n$. Then

$$
\sum_{k=0}^{\infty} \left| P(X = k) - e^{-\lambda}\frac{\lambda^k}{k!} \right| \le 2 \sum_{i=1}^{n} p_i^2.
$$

For $\text{Bin}(n, p)$ the right side is $2np^2 = 2\lambda p$: the approximation is good when $p$ is small, whatever
$n$ is. The proof is a short "coupling" argument (put a Bernoulli and a Poisson variable on one sample space so they
are usually equal); it is in Le Cam's paper and in the section on Poisson convergence of Durrett's *Probability: Theory and Examples*.

**Example 5.9.** A factory makes 1000 parts; each is faulty with probability 0.002, independently. Exactly,
$P(\text{no faulty part}) = 0.998^{1000} \approx 0.13506$. The Poisson approximation with $\lambda = 2$ gives
$e^{-2} \approx 0.13534$. Le Cam's bound on the total error over all $k$ is $2 \cdot 1000 \cdot 0.002^2 = 0.008$; the
true total error is about 0.0009.

**Example 5.10 (the Prussian cavalry).** In 1898 Ladislaus von Bortkiewicz published *Das Gesetz der kleinen Zahlen*
("The law of small numbers"). One of his data sets, now a classic, counts soldiers killed by kicks from horses in 10
Prussian army corps over the 20 years 1875 to 1894: 200 "corps-years". Each soldier in a corps had a small chance of
such a death in a year, and there were many soldiers, so the deaths per corps-year should be roughly Poisson. In total
there were 122 deaths, so the natural choice is $\lambda = 122/200 = 0.61$. Multiply each Poisson probability by 200
to predict how many corps-years should show each count:

| deaths in a corps-year | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| observed | 109 | 65 | 22 | 3 | 1 |
| Poisson prediction $200\,e^{-0.61}0.61^k/k!$ | 108.7 | 66.3 | 20.2 | 4.1 | 0.6 |

The agreement is striking, and it is the reason this dull-sounding statistic appears in so many textbooks. (Choosing
$\lambda$ from the data and then judging the fit is a question for the statistics book.)

**Try it in Python.** The standard library is enough to compare the two distributions.

```python
from math import comb, exp, factorial

n, p = 1000, 0.002
lam = n * p
for k in range(6):
    b = comb(n, k) * p**k * (1 - p)**(n - k)
    po = exp(-lam) * lam**k / factorial(k)
    print(k, round(b, 5), round(po, 5))
```

**Which family?** A quick guide.

| situation | count | family |
|---|---|---|
| one yes/no trial | 1 or 0 | Bernoulli($p$) |
| fixed number $n$ of independent trials | successes | binomial($n, p$) |
| draws without replacement from a finite urn | successes | hypergeometric |
| independent trials until the first success | trials | geometric($p$) |
| independent trials until the $r$-th success | trials | negative binomial($r, p$) |
| many chances, each rare, roughly independent | events | Poisson($\lambda$) |

## 5.3 The cumulative distribution function

The pmf works for discrete random variables but breaks down for continuous ones (Chapter 9), where every single value
has probability 0. One object works for every random variable whatsoever.

**Definition.** The **cumulative distribution function** (cdf) of a random variable $X$ is

$$
F_X(x) = P(X \le x), \qquad x \in \mathbb{R}.
$$

It is defined for *every* real number $x$, not only the values $X$ takes. For three coin flips, $F(x) = 0$ for
$x < 0$; $F(x) = 1/8$ for $0 \le x < 1$; $F(x) = 1/2$ for $1 \le x < 2$; $F(x) = 7/8$ for $2 \le x < 3$; and $F(x) = 1$
for $x \ge 3$. Its graph is a staircase.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 200" role="img" aria-label="The cumulative distribution function of the number of heads in three flips: a staircase at height 0 left of 0, jumping to one eighth at 0, to one half at 1, to seven eighths at 2 and to 1 at 3. Filled dots mark the value at each jump, open dots the limit from the left">
<line x1="40" y1="170" x2="405" y2="170" stroke="currentColor" stroke-width="1"/>
<line x1="120" y1="178" x2="120" y2="22" stroke="currentColor" stroke-width="1"/>
<line x1="50" y1="170" x2="120" y2="170" stroke="#eea66f" stroke-width="3"/>
<line x1="120" y1="152.5" x2="190" y2="152.5" stroke="#eea66f" stroke-width="3"/>
<line x1="190" y1="100" x2="260" y2="100" stroke="#eea66f" stroke-width="3"/>
<line x1="260" y1="47.5" x2="330" y2="47.5" stroke="#eea66f" stroke-width="3"/>
<line x1="330" y1="30" x2="400" y2="30" stroke="#eea66f" stroke-width="3"/>
<line x1="120" y1="170" x2="120" y2="152.5" stroke="#9cc9ea" stroke-width="1.5" stroke-dasharray="3 3"/>
<line x1="190" y1="152.5" x2="190" y2="100" stroke="#9cc9ea" stroke-width="1.5" stroke-dasharray="3 3"/>
<line x1="260" y1="100" x2="260" y2="47.5" stroke="#9cc9ea" stroke-width="1.5" stroke-dasharray="3 3"/>
<line x1="330" y1="47.5" x2="330" y2="30" stroke="#9cc9ea" stroke-width="1.5" stroke-dasharray="3 3"/>
<circle cx="120" cy="170" r="4" fill="none" stroke="currentColor"/>
<circle cx="190" cy="152.5" r="4" fill="none" stroke="currentColor"/>
<circle cx="260" cy="100" r="4" fill="none" stroke="currentColor"/>
<circle cx="330" cy="47.5" r="4" fill="none" stroke="currentColor"/>
<circle cx="120" cy="152.5" r="4" fill="#7ccf9a" stroke="currentColor"/>
<circle cx="190" cy="100" r="4" fill="#7ccf9a" stroke="currentColor"/>
<circle cx="260" cy="47.5" r="4" fill="#7ccf9a" stroke="currentColor"/>
<circle cx="330" cy="30" r="4" fill="#7ccf9a" stroke="currentColor"/>
<text x="120" y="190" text-anchor="middle" font-size="12" fill="currentColor">0</text>
<text x="190" y="190" text-anchor="middle" font-size="12" fill="currentColor">1</text>
<text x="260" y="190" text-anchor="middle" font-size="12" fill="currentColor">2</text>
<text x="330" y="190" text-anchor="middle" font-size="12" fill="currentColor">3</text>
<text x="112" y="156" text-anchor="end" font-size="11" fill="currentColor">1/8</text>
<text x="112" y="104" text-anchor="end" font-size="11" fill="currentColor">1/2</text>
<text x="112" y="51" text-anchor="end" font-size="11" fill="currentColor">7/8</text>
<text x="112" y="27" text-anchor="end" font-size="11" fill="currentColor">1</text>
<text x="400" y="190" text-anchor="end" font-size="12" fill="currentColor">x</text>
</svg>
</div>

Probabilities of intervals come from differences: since $\{X \le b\}$ is the disjoint union of $\{X \le a\}$ and
$\{a < X \le b\}$,

$$
P(a < X \le b) = F(b) - F(a) \qquad (a < b).
$$

Every cdf has the same four properties, and conversely any function with these properties is the cdf of some random
variable (a fact proved in Chapter 17).

**Theorem 5.9.** For any random variable $X$ with cdf $F$:

1. $F$ is nondecreasing: if $a < b$ then $F(a) \le F(b)$.
2. $F(x) \to 0$ as $x \to -\infty$.
3. $F(x) \to 1$ as $x \to +\infty$.
4. $F$ is right-continuous: $F(x + h) \to F(x)$ as $h \to 0$ with $h > 0$.

The proof needs one consequence of the axioms, which [Chapter 1](01-What-Probability-Is.md) may have shown you in
another form.

**Lemma 5.10 (continuity of probability).** If $A_1 \subseteq A_2 \subseteq \cdots$ and $A = \bigcup_n A_n$, then
$P(A_n) \to P(A)$. If $B_1 \supseteq B_2 \supseteq \cdots$ and $B = \bigcap_n B_n$, then $P(B_n) \to P(B)$.

*Proof.* For the increasing case, cut $A$ into disjoint rings: $R_1 = A_1$ and $R_n = A_n \setminus A_{n-1}$. Then
$A_n = R_1 \cup \dots \cup R_n$ and $A = \bigcup_n R_n$, all disjoint, so by countable additivity
$P(A) = \sum_{n} P(R_n) = \lim_{N} \sum_{n \le N} P(R_n) = \lim_N P(A_N)$. For the decreasing case, apply the
increasing case to the complements $B_n^c$, which increase to $B^c$. $\square$

*Proof of Theorem 5.9.* (1) If $a < b$ then $\{X \le a\} \subseteq \{X \le b\}$, and a smaller event has smaller
probability. (2) Because $F$ is monotone, it is enough to take $x = -n$, $n = 1, 2, \dots$. The events
$\{X \le -n\}$ decrease, and their intersection is empty (no real number is below every $-n$), so by the lemma
$F(-n) \to P(\emptyset) = 0$. (3) The events $\{X \le n\}$ increase to all of $\Omega$ (every real number is below
some $n$), so $F(n) \to 1$. (4) Again by monotonicity it is enough to take $h = 1/n$. The events
$\{X \le x + 1/n\}$ decrease, and their intersection is $\{X \le x\}$, so $F(x + 1/n) \to F(x)$. $\square$

Why *right*-continuous and not continuous? Approach $x$ from the left: the events $\{X \le x - 1/n\}$ increase to
$\{X < x\}$, not $\{X \le x\}$. So the limit from the left is $F(x^-) = P(X < x)$, and

$$
F(x) - F(x^-) = P(X = x).
$$

**The jumps of the cdf are exactly the pmf.** A discrete random variable has a staircase cdf whose jump at each value
$x$ is $P(X = x)$; a continuous one (Chapter 9) has a cdf with no jumps at all.

**Example 5.11 (the geometric cdf).** For $X \sim \text{Geom}(p)$ and a whole number $k \ge 0$,
$F(k) = P(X \le k) = 1 - P(X > k) = 1 - q^k$. How many rolls do you need to be 95% sure of seeing a six? We want
$1 - (5/6)^k \ge 0.95$, that is $(5/6)^k \le 0.05$, that is $k \ge \ln 0.05 / \ln(5/6) \approx 16.4$. So 17 rolls.

**Maxima through the cdf.** Here is the cleanest way to do Example 5.2, and it works for any number of dice. Roll $n$
fair dice independently and let $M$ be the largest. The maximum is at most $k$ exactly when *every* die is at most
$k$, so by independence

$$
P(M \le k) = \left(\frac{k}{6}\right)^n, \qquad P(M = k) = \left(\frac{k}{6}\right)^n - \left(\frac{k - 1}{6}\right)^n.
$$

For $n = 2$ this gives $(k^2 - (k-1)^2)/36 = (2k - 1)/36$, as before. For $n = 4$, $P(M = 6) = 1 - (5/6)^4 =
671/1296 \approx 0.518$: the chance of at least one six in four rolls, the bet that the Chevalier de Méré is said to
have found profitable. (The minimum works the same way with $P(\min > k)$.)

**Quantiles.** The cdf also answers "what value is $X$ below with probability 1/2?" A **median** of $X$ is any number
$m$ with $P(X \le m) \ge 1/2$ and $P(X \ge m) \ge 1/2$. For a staircase there may be a whole interval of medians: for a
fair die every $m$ in $[3, 4]$ qualifies. In general the **$\alpha$-quantile** is the smallest $x$ with
$F(x) \ge \alpha$; the smallest exists because $F$ is right-continuous. Quantiles come back in Chapter 9.

## 5.4 Functions of a random variable

*Level: intermediate.*

If $X$ is a random variable and $g$ is any function from the real numbers to the real numbers, then $Y = g(X)$ is a
new random variable: it is the composition $\omega \mapsto g(X(\omega))$. Its distribution comes from collecting
together all values of $X$ that $g$ sends to the same place.

**Theorem 5.11.** If $X$ is discrete and $Y = g(X)$, then

$$
P(Y = y) = \sum_{x \,:\, g(x) = y} P(X = x).
$$

*Proof.* The event $\{Y = y\}$ is the disjoint union of the events $\{X = x\}$ over all values $x$ with $g(x) = y$.
Apply countable additivity. $\square$

**Example 5.12.** Let $X$ be uniform on $\{-2, -1, 0, 1, 2\}$ and $Y = X^2$. Then $Y \in \{0, 1, 4\}$ with
$P(Y = 0) = P(X = 0) = 1/5$, $P(Y = 1) = P(X = -1) + P(X = 1) = 2/5$, $P(Y = 4) = 2/5$. The new variable is not uniform:
squaring folds the values together.

**Example 5.13 (a linear change).** If $Y = aX + b$ with $a \neq 0$, nothing folds: $P(Y = ax + b) = P(X = x)$, the
same probabilities on moved values. For instance if $X \sim \text{Bin}(n, p)$ counts successes then $n - X$ counts
failures, and swapping the names "success" and "failure" shows $n - X \sim \text{Bin}(n, q)$. Changing from the
"trials" geometric $X$ to the "failures" geometric $X - 1$ is another linear change.

**Example 5.14 (rounding and digits).** Let $N$ be uniform on $\{1, 2, \dots, 100\}$ and $D$ = number of decimal digits
of $N$. Then $P(D = 1) = 9/100$, $P(D = 2) = 90/100$, $P(D = 3) = 1/100$. Functions that throw information away
always give coarser distributions.

### Functions of two random variables

The same idea works for $Z = g(X, Y)$: add $P(X = x, Y = y)$ over all pairs with $g(x, y) = z$. The most important
case is the sum.

**Theorem 5.12 (convolution).** If $X$ and $Y$ are independent and take whole-number values, then

$$
P(X + Y = n) = \sum_{k} P(X = k)\, P(Y = n - k).
$$

*Proof.* The event $\{X + Y = n\}$ is the disjoint union over $k$ of $\{X = k, Y = n - k\}$, and each of these has
probability $P(X = k) P(Y = n - k)$ by independence. $\square$

The sum on the right is called the **convolution** of the two pmfs. Example 5.1 was a convolution of two uniform
distributions on $\{1, \dots, 6\}$.

**Theorem 5.13.** (a) If $X \sim \text{Bin}(m, p)$ and $Y \sim \text{Bin}(n, p)$ are independent, then
$X + Y \sim \text{Bin}(m + n, p)$. (b) If $X \sim \text{Poisson}(\lambda)$ and $Y \sim \text{Poisson}(\mu)$ are
independent, then $X + Y \sim \text{Poisson}(\lambda + \mu)$.

*Proof of (a), without computation.* Think of $X$ as the successes in trials $1, \dots, m$ and $Y$ as the successes in
trials $m + 1, \dots, m + n$ of one long sequence of independent Bernoulli($p$) trials. (This is allowed because only
the distributions matter, and in the long sequence the two blocks are independent with the right distributions.) Then
$X + Y$ counts the successes in $m + n$ trials. $\square$

(If you prefer computation: the convolution gives $\sum_k \binom{m}{k}\binom{n}{j-k} p^j q^{m+n-j}$, and Vandermonde's
identity $\sum_k \binom{m}{k}\binom{n}{j-k} = \binom{m+n}{j}$ from [Combinatorics, Chapter 3](../combinatorics/03-Binomial-Coefficients.md)
finishes it. The two proofs are the same idea seen from two sides.)

*Proof of (b).* By Theorem 5.12,

$$
P(X + Y = n) = \sum_{k=0}^{n} e^{-\lambda}\frac{\lambda^k}{k!} \cdot e^{-\mu}\frac{\mu^{n-k}}{(n-k)!}
= \frac{e^{-(\lambda + \mu)}}{n!} \sum_{k=0}^{n} \binom{n}{k} \lambda^k \mu^{n-k} = e^{-(\lambda+\mu)} \frac{(\lambda + \mu)^n}{n!},
$$

using the binomial theorem in the last step. $\square$

Part (b) fits the "rare events" story: the misprints on two pages, each Poisson, add to a Poisson count on the pair.
Chapter 8 proves both parts again in one line each, with generating functions.

**Example 5.15 (thinning).** Here is a function of two random variables that is not a sum. The number of eggs a
certain insect lays is $N \sim \text{Poisson}(\lambda)$; each egg hatches with probability $p$, independently of the
others and of $N$. Let $H$ be the number that hatch, so that given $N = n$, $H \sim \text{Bin}(n, p)$. By the law of
total probability ([Chapter 3](03-Conditional-Probability-and-Independence.md)),

$$
P(H = k) = \sum_{n \ge k} e^{-\lambda}\frac{\lambda^n}{n!} \binom{n}{k} p^k q^{n-k}
= e^{-\lambda} \frac{(\lambda p)^k}{k!} \sum_{n \ge k} \frac{(\lambda q)^{n-k}}{(n-k)!}
= e^{-\lambda}\frac{(\lambda p)^k}{k!} e^{\lambda q} = e^{-\lambda p}\frac{(\lambda p)^k}{k!}.
$$

So $H \sim \text{Poisson}(\lambda p)$. A Poisson count, randomly thinned, stays Poisson. This fact is the heart of
"splitting" a Poisson process in Chapter 14.

## A short history

Counting successes in repeated trials goes back to the correspondence of Pascal and Fermat in 1654
([Chapter 1](01-What-Probability-Is.md)), but the binomial distribution as a general tool belongs to Jacob Bernoulli,
whose *Ars Conjectandi* (1713) studied it in detail and proved the first law of large numbers for it (Chapter 7).
Abraham de Moivre, in *The Doctrine of Chances* (first edition 1718), worked with binomial and negative-binomial style
problems, and later found the normal approximation to the binomial (Chapter 10). Poisson's 1837 *Recherches sur la
probabilité des jugements en matière criminelle et en matière civile* derived the distribution now named after him as a
limit of the binomial; it was then little used until Bortkiewicz's 1898 monograph showed how well it fits counts of
rare events. The abstract word "random variable" and the cdf as the basic object came later, with the axiomatic
foundations of the twentieth century (Kolmogorov, 1933; Chapter 17).

## Check yourself

??? question "1. Roll two fair dice and let $D$ be the absolute difference of the two numbers. Find the distribution of $D$."

    Count the 36 ordered pairs. $D = 0$ for the 6 doubles. $D = d \ge 1$ for the pairs $(a, a + d)$ and $(a + d, a)$
    with $1 \le a \le 6 - d$: that is $2(6 - d)$ pairs. So $P(D = 0) = 6/36$, $P(D = 1) = 10/36$, $P(D = 2) = 8/36$,
    $P(D = 3) = 6/36$, $P(D = 4) = 4/36$, $P(D = 5) = 2/36$. Check: $6 + 10 + 8 + 6 + 4 + 2 = 36$.

??? question "2. A basketball player makes each free throw with probability 0.7, independently. In 10 throws, what is the probability she makes exactly 7? What is the most likely number made?"

    $X \sim \text{Bin}(10, 0.7)$, so $P(X = 7) = \binom{10}{7}(0.7)^7(0.3)^3 = 120 \cdot 0.0823543 \cdot 0.027
    \approx 0.267$. The mode is $\lfloor (n+1)p \rfloor = \lfloor 7.7 \rfloor = 7$.

??? question "3. Roll a fair die until a six appears. Find the probability that it takes exactly 3 rolls, and the probability that it takes more than 10."

    $X \sim \text{Geom}(1/6)$. $P(X = 3) = (5/6)^2 \cdot (1/6) = 25/216 \approx 0.116$.
    $P(X > 10) = (5/6)^{10} \approx 0.162$.

??? question "4. You have rolled a die 20 times without a six. What is the probability that the next 3 rolls contain no six either? Which theorem are you using?"

    By memorylessness (Theorem 5.4), $P(X > 23 \mid X > 20) = P(X > 3) = (5/6)^3 = 125/216 \approx 0.579$, exactly
    the same as if you had just started.

??? question "5. What is the probability that the third six appears on the tenth roll of a fair die?"

    Negative binomial with $r = 3$, $p = 1/6$, $k = 10$: $\binom{9}{2}(1/6)^3(5/6)^7 = 36 \cdot 5^7 / 6^{10}
    = 78125/1679616 \approx 0.0465$.

??? question "6. A book has on average 2 misprints per page, and the number on a page is modelled as Poisson(2). What is the probability that a page has at least 2 misprints?"

    $P(X \ge 2) = 1 - P(X = 0) - P(X = 1) = 1 - e^{-2} - 2e^{-2} = 1 - 3e^{-2} \approx 0.594$.

??? question "7. Among 500 people (birthdays independent and uniform over 365 days, ignoring 29 February), find the exact probability that at least one has a birthday today, and its Poisson approximation."

    The number with a birthday today is $\text{Bin}(500, 1/365)$. Exactly, $P(\text{at least one}) =
    1 - (364/365)^{500} \approx 0.7463$. With $\lambda = 500/365 \approx 1.370$, the Poisson approximation gives
    $1 - e^{-500/365} \approx 0.7459$. Le Cam's bound on the total error is $2 \cdot 500/365^2 \approx 0.0075$.

??? question "8. A random variable has cdf $F(x) = 0$ for $x < 1$, $F(x) = 0.2$ for $1 \le x < 2$, $F(x) = 0.7$ for $2 \le x < 5$, and $F(x) = 1$ for $x \ge 5$. Find its pmf, $P(1 < X \le 4)$ and $P(X \ge 2)$."

    The jumps give the pmf: $P(X = 1) = 0.2$, $P(X = 2) = 0.5$, $P(X = 5) = 0.3$. Then
    $P(1 < X \le 4) = F(4) - F(1) = 0.7 - 0.2 = 0.5$ and $P(X \ge 2) = 1 - P(X < 2) = 1 - F(2^-) = 1 - 0.2 = 0.8$.

??? question "9. Let $X$ be uniform on $\{-3, -2, \dots, 3\}$. Find the distributions of $Y = X^2$ and of $Z = \max(X, 0)$."

    Each value of $X$ has probability $1/7$. $Y$: $P(Y = 0) = 1/7$, and $P(Y = 1) = P(Y = 4) = P(Y = 9) = 2/7$.
    $Z$: the four values $-3, -2, -1, 0$ all go to 0, so $P(Z = 0) = 4/7$, and $P(Z = 1) = P(Z = 2) = P(Z = 3) = 1/7$.

??? question "10. Four fair dice are rolled. Find the probability that the smallest number showing is at least 3, and the distribution of the smallest number $L$."

    $P(L \ge k) = ((7 - k)/6)^4$, because each die must show at least $k$. So $P(L \ge 3) = (4/6)^4 = 16/81 \approx
    0.198$. Then $P(L = k) = P(L \ge k) - P(L \ge k + 1) = ((7-k)^4 - (6-k)^4)/1296$: for $k = 1, \dots, 6$ this is
    $671, 369, 175, 65, 15, 1$ over 1296. Check: these add to 1296.

??? question "11. Show that if $X$ takes values in $\{1, 2, \dots\}$ and $P(X = k + 1 \mid X > k) = P(X = 1)$ for every $k \ge 0$ (a constant 'hazard'), then $X$ is geometric."

    Let $p = P(X = 1)$ and $G(k) = P(X > k)$. The condition says $P(X = k+1) = p\,G(k)$, so
    $G(k + 1) = G(k) - P(X = k+1) = (1 - p) G(k)$. With $G(0) = 1$, induction gives $G(k) = (1 - p)^k$, and then
    $P(X = k) = G(k-1) - G(k) = (1-p)^{k-1} p$.

??? question "12. (Harder.) Let $X \sim \text{Poisson}(\lambda)$. For which $k$ is $P(X = k)$ largest? Prove it."

    The ratio of neighbours is $P(X = k)/P(X = k - 1) = \lambda / k$. It is greater than 1 when $k < \lambda$ and less
    than 1 when $k > \lambda$. So the probabilities rise up to $k = \lfloor \lambda \rfloor$ and fall after: the mode
    is $\lfloor \lambda \rfloor$, and if $\lambda$ is a whole number then $\lambda - 1$ and $\lambda$ tie (the ratio
    is exactly 1 at $k = \lambda$). For Poisson(3) the values at 2 and 3 are both $4.5 e^{-3} \approx 0.224$, as in
    the picture of 5.2.

## What you learned

- A random variable is a function from outcomes to numbers; its distribution (the pmf, for a discrete one) lists the
  chance of each value, and the probabilities add to 1.
- Bernoulli: one trial. Binomial: successes in $n$ trials, $\binom{n}{k}p^kq^{n-k}$, mode $\lfloor (n+1)p \rfloor$.
  Geometric: trials to the first success, $q^{k-1}p$, memoryless and the only memoryless one. Negative binomial: trials
  to the $r$-th success.
- Poisson($\lambda$), $e^{-\lambda}\lambda^k/k!$, is the limit of $\text{Bin}(n, \lambda/n)$, and Le Cam's inequality
  bounds the error by $2\sum p_i^2$.
- The cdf $F(x) = P(X \le x)$ exists for every random variable: nondecreasing, from 0 to 1, right-continuous, with
  jumps equal to the pmf.
- Maxima and minima are easiest through the cdf; $g(X)$ is found by adding the probabilities of all $x$ with the same
  $g(x)$; sums of independent variables by convolution.
- Independent binomials with the same $p$ add to a binomial, independent Poissons add to a Poisson, and a randomly
  thinned Poisson stays Poisson.

**Next:** [Chapter 6](06-Expectation-and-Variance.md) asks for the single number that best summarises a random
variable, its average, and for a second number that says how far from that average it typically strays.

## Further reading

- W. Feller, *An Introduction to Probability Theory and Its Applications*, Volume I, 3rd edition, 1968: Chapter VI on
  the binomial and Poisson distributions is still one of the best.
- S. Ross, *A First Course in Probability*, 10th edition, 2019: Chapter 4 covers this chapter with many examples.
- J. Pitman, *Probability*, 1993: Chapters 2 and 3, very good on the binomial and on functions of random variables.
- D. Bertsekas and J. Tsitsiklis, *Introduction to Probability*, 2nd edition, 2008: Chapter 2.
- L. Le Cam, "An approximation theorem for the Poisson binomial distribution", *Pacific Journal of Mathematics* 10,
  1960.
- R. Durrett, *Probability: Theory and Examples*, 5th edition, 2019: the section on Poisson convergence.
- On this site: the gentler lessons [Random variables and their distributions](../../topics/probability/level-7/01-random-variables.md),
  [The binomial distribution](../../topics/probability/level-7/04-binomial-distribution.md),
  [The geometric distribution](../../topics/probability/level-7/05-geometric-distribution.md),
  [The hypergeometric distribution](../../topics/probability/level-7/06-hypergeometric-distribution.md);
  [Combinatorics, Chapter 3](../combinatorics/03-Binomial-Coefficients.md) for the binomial theorem and Vandermonde's
  identity; [the Combinatorics book](../combinatorics/index.md) for counting in general.
