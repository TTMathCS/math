# Glossary

*Short definitions of the terms this book uses, from A to Z, each with a link to the chapter that teaches it.*

## A

**Absorbing chain**
A Markov chain with at least one absorbing state, from which an absorbing state can be reached from every state. Questions about it (where it ends, how long it takes) are answered by the fundamental matrix or by first-step analysis.
See [Chapter 13](13-Markov-Chains.md#135-absorbing-chains).

**Absorbing state**
A state $a$ of a Markov chain with $p_{aa} = 1$: once the chain arrives there, it never leaves. In gambler's ruin, fortunes 0 and $N$ are absorbing.
See [Chapter 13](13-Markov-Chains.md#135-absorbing-chains).

**Accessible (state)**
State $j$ is accessible from state $i$, written $i \to j$, if the chain started at $i$ reaches $j$ with positive probability in some number $n \ge 0$ of steps.
See [Chapter 13](13-Markov-Chains.md#133-classification-of-states).

**Adapted**
A sequence $M_0, M_1, \dots$ is adapted to the information $X_1, X_2, \dots$ if each $M_n$ is determined by $X_1, \dots, X_n$. A martingale is an adapted sequence with a fairness condition.
See [Chapter 15](15-Random-Walks-and-Martingales.md#152-martingales).

**Addition rule**
For any two events, $P(A \cup B) = P(A) + P(B) - P(A \cap B)$: the overlap is counted twice and must be removed once. It is inclusion-exclusion for two events.
See [Chapter 1](01-What-Probability-Is.md#first-consequences).

**Age (in a renewal process)**
The time $A_t$ since the last event before time $t$, or since 0 if there was none. With the residual time it makes up the length of the gap that contains $t$.
See [Chapter 14](14-Poisson-Processes.md#145-the-inspection-paradox).

**Almost sure convergence**
$X_n \to X$ almost surely (a.s.) if $P(\{\omega : X_n(\omega) \to X(\omega)\}) = 1$: for almost every outcome the numbers themselves converge. It implies convergence in probability, but not the reverse.
See [Chapter 17](17-Measure-Theoretic-Probability.md#174-modes-of-convergence).

**Amplification**
Running a randomized algorithm several times independently and combining the answers, to push its error probability down exponentially in the number of runs.
See [Chapter 19](19-Randomness-in-Computing.md#192-randomized-algorithms).

**Aperiodic**
A state of a Markov chain with period 1. A state with a loop, $p_{ii} > 0$, is aperiodic; an irreducible chain is aperiodic if one of its states is.
See [Chapter 13](13-Markov-Chains.md#133-classification-of-states).

**Arbitrage**
A riskless profit from two ways of getting the same payoff at different prices. Option pricing assumes there is none, so a derivative must cost what it costs to replicate it.
See [Chapter 16](16-Brownian-Motion.md#166-a-first-look-at-stochastic-calculus-and-black-scholes).

**Arcsine law**
For the simple random walk, the time $L_{2n}$ of the last visit to 0 up to time $2n$ has $P(L_{2n} = 2k) = u_{2k}u_{2n-2k}$, largest at the ends. Long leads are the rule, not the exception; Brownian motion has the continuous version.
See [Chapter 15](15-Random-Walks-and-Martingales.md#the-arcsine-law).

**Arithmetic coding**
A compression method that codes a whole message as one subinterval of $[0, 1)$, avoiding the whole-bit rounding of symbol-by-symbol codes and getting very close to the entropy.
See [Chapter 18](18-Information-and-Entropy.md#huffmans-algorithm).

**Arrival times**
The times $S_1 < S_2 < S_3 < \cdots$ at which the events of a counting process happen. In a Poisson process $S_n$ has the gamma (Erlang) law with shape $n$.
See [Chapter 14](14-Poisson-Processes.md#141-counting-random-events-in-time).

**Asymptotic equipartition property (AEP)**
For $n$ independent copies of $X$ with entropy $H$, the probability $p(X_1, \dots, X_n)$ is close to $2^{-nH}$ with high probability. So about $2^{nH}$ typical sequences carry almost all the probability, each about equally likely.
See [Chapter 18](18-Information-and-Entropy.md#the-asymptotic-equipartition-property).

**Axiom of choice**
The axiom of set theory that allows choosing one element from each set of any family of nonempty sets. It is used to build the Vitali set, which has no length.
See [Chapter 17](17-Measure-Theoretic-Probability.md#171-why-we-need-measure).

**Axioms of probability**
Kolmogorov's three rules: $P(A) \ge 0$ (non-negativity), $P(\Omega) = 1$ (normalisation), and $P$ of a countable union of pairwise disjoint events is the sum of their probabilities (countable additivity).
See [Chapter 1](01-What-Probability-Is.md#the-axioms).

**Azuma-Hoeffding inequality**
For a martingale with $|M_i - M_{i-1}| \le c_i$, $P(|M_n - M_0| \ge t) \le 2\exp\big(-t^2/(2\sum c_i^2)\big)$. It turns bounded steps into Gaussian-type tails.
See [Chapter 20](20-Where-Probability-Goes.md#the-azuma-hoeffding-inequality).

## B

**Ballot theorem**
If A gets $a$ votes and B gets $b < a$, counted in a uniformly random order, the probability that A is strictly ahead throughout the count is $(a - b)/(a + b)$. It is due to Bertrand (1887).
See [Chapter 15](15-Random-Walks-and-Martingales.md#the-ballot-theorem).

**Barbier's theorem**
A rigid curve of total length $L$ dropped at random on lines spaced $d$ apart crosses them $2L/(\pi d)$ times on average, whatever its shape. The proof cuts the curve into pieces and uses linearity of expectation.
See [Chapter 9](09-Continuous-Random-Variables.md#barbiers-theorem-needles-and-noodles).

**Base rate**
The probability of a hypothesis before the evidence, such as the prevalence of a disease in the population tested. It largely decides what a positive test means.
See [Chapter 4](04-Bayes-Theorem.md#the-base-rate-decides).

**Base-rate fallacy**
Ignoring the base rate when judging evidence, for example reading a test's sensitivity as the chance that a positive patient is ill.
See [Chapter 4](04-Bayes-Theorem.md#the-base-rate-decides).

**Bayes factor**
Another name for the likelihood ratio $P(E \mid H)/P(E \mid H^c)$ of a piece of evidence: the number the prior odds are multiplied by.
See [Chapter 4](04-Bayes-Theorem.md#the-theorem).

**Bayes' theorem**
$P(B \mid A) = P(A \mid B)\,P(B)/P(A)$, and with a partition $B_1, \dots, B_n$ the denominator is $\sum_i P(A \mid B_i)P(B_i)$. In words: posterior is proportional to likelihood times prior.
See [Chapter 4](04-Bayes-Theorem.md#41-the-formula).

**Bayesian view**
The view that a probability measures how strongly a particular person, with particular information, believes something. It allows probabilities for one-off events and unknown constants, updated by Bayes' theorem.
See [Chapter 1](01-What-Probability-Is.md#view-3-degree-of-belief).

**Bernoulli distribution**
$X \sim \text{Bernoulli}(p)$ takes the value 1 (success) with probability $p$ and 0 (failure) with probability $1 - p$. Its mean is $p$ and its variance $p(1 - p)$.
See [Chapter 5](05-Discrete-Random-Variables.md#bernoulli-one-trial).

**Bernoulli trial**
An experiment with two outcomes, called success and failure, with $P(\text{success}) = p$.
See [Chapter 5](05-Discrete-Random-Variables.md#bernoulli-one-trial).

**Bernoulli's theorem**
The weak law for coin tossing: the proportion of successes in $n$ independent trials with success probability $p$ converges in probability to $p$. Jacob Bernoulli proved it in his *Ars Conjectandi* (1713).
See [Chapter 7](07-Inequalities-and-the-Law-of-Large-Numbers.md#72-the-weak-law-of-large-numbers).

**Berry-Esseen theorem**
For iid variables with finite third absolute central moment $\rho$, the cdf of the standardised sum differs from $\Phi$ by at most $C\rho/(\sigma^3\sqrt n)$, uniformly in $x$. The error of the CLT is of order $1/\sqrt n$.
See [Chapter 12](12-The-Central-Limit-Theorem.md#123-how-good-is-the-approximation).

**Bertrand's paradox**
"Choose a random chord of a circle; how likely is it longer than the side of the inscribed equilateral triangle?" Three natural meanings of "random" give $1/3$, $1/2$ and $1/4$. "At random" must be specified.
See [Chapter 2](02-Counting-and-Equally-Likely-Outcomes.md#26-when-equally-likely-fails-bertrands-paradox).

**Binary code**
A rule giving each symbol a string of bits, its codeword.
See [Chapter 18](18-Information-and-Entropy.md#prefix-codes).

**Binary entropy function**
$h(p) = -p\log_2 p - (1 - p)\log_2(1 - p)$, the entropy of a coin with $P(\text{heads}) = p$. It is 0 at $p = 0$ and $p = 1$ and largest, 1 bit, at $p = 1/2$.
See [Chapter 18](18-Information-and-Entropy.md#entropy).

**Binary symmetric channel**
The channel BSC($p$): each bit sent arrives flipped with probability $p$, independently, and correct with probability $1 - p$. Its capacity is $1 - h(p)$ bits per use.
See [Chapter 18](18-Information-and-Entropy.md#the-binary-symmetric-channel).

**Binomial distribution**
The number of successes in $n$ independent Bernoulli($p$) trials: $P(X = k) = \binom{n}{k}p^k q^{n-k}$ for $k = 0, \dots, n$, with $q = 1 - p$. It has mean $np$ and variance $npq$.
See [Chapter 5](05-Discrete-Random-Variables.md#binomial-how-many-successes-in-n-trials).

**Birthday bound**
A repeat among draws from $d$ equally likely values becomes likely after about $\sqrt d$ draws, not $d/2$. In cryptography it limits the security of a hash with $d$ outputs to about $\sqrt d$ work.
See [Chapter 2](02-Counting-and-Equally-Likely-Outcomes.md#a-quick-approximation-with-proof).

**Birthday problem**
How many people are needed before two probably share a birthday? Counting the complement, all birthdays different, gives 23 people for a chance above $1/2$ (0.507).
See [Chapter 2](02-Counting-and-Equally-Likely-Outcomes.md#22-the-birthday-problem).

**Bit**
The unit of information: the answer to one fair yes-or-no question. One of $n$ equally likely possibilities carries $\log_2 n$ bits.
See [Chapter 18](18-Information-and-Entropy.md#how-many-questions).

**Bivariate normal**
The joint law of two jointly normal variables. In standard form, with correlation $\rho$, its density is proportional to $\exp\big(-(x^2 - 2\rho xy + y^2)/(2(1 - \rho^2))\big)$; its marginals and conditionals are normal.
See [Chapter 11](11-Joint-Distributions.md#115-the-bivariate-normal).

**Black-Scholes formula**
The price of a European call option when the stock follows geometric Brownian motion: the expected discounted payoff in the risk-neutral model, where the drift is replaced by the interest rate $r$. It comes from replication and no arbitrage.
See [Chapter 16](16-Brownian-Motion.md#166-a-first-look-at-stochastic-calculus-and-black-scholes).

**Bond percolation**
On the grid $\mathbb{Z}^2$, each bond (edge) is declared open with probability $p$ and closed otherwise, independently. The question is whether an infinite open cluster exists.
See [Chapter 20](20-Where-Probability-Goes.md#the-model).

**Boole's inequality**
See *union bound*.
See [Chapter 1](01-What-Probability-Is.md#first-consequences).

**Borel sets**
The members of the Borel $\sigma$-algebra on $\mathbb{R}$, the smallest $\sigma$-algebra containing every interval $(a, b)$. Every set met in practice is Borel.
See [Chapter 17](17-Measure-Theoretic-Probability.md#sigma-algebras).

**Borel-Cantelli lemmas**
First: if $\sum P(A_n) < \infty$, then with probability 1 only finitely many $A_n$ happen. Second: if the $A_n$ are independent and $\sum P(A_n) = \infty$, then with probability 1 infinitely many happen.
See [Chapter 17](17-Measure-Theoretic-Probability.md#infinitely-often).

**Box-Muller method**
Turns two independent Uniform(0, 1) numbers $U_1, U_2$ into two independent standard normals, $\sqrt{-2\ln U_1}\cos(2\pi U_2)$ and $\sqrt{-2\ln U_1}\sin(2\pi U_2)$. It is the polar-coordinates proof of the Gaussian integral, run backwards.
See [Chapter 19](19-Randomness-in-Computing.md#modern-generators-honestly).

**BPP**
The class of problems solvable in polynomial time by a randomized algorithm with small two-sided error. Whether BPP equals P is open; most researchers believe it does.
See [Chapter 19](19-Randomness-in-Computing.md#does-randomness-really-help).

**Branching process**
See *Galton-Watson process*.
See [Chapter 8](08-Generating-Functions-in-Probability.md#83-branching-processes).

**Brownian motion**
A random continuous path $B_t$ with $B_0 = 0$, independent increments, and $B_t - B_s$ normal with mean 0 and variance $t - s$. It is the scaling limit of random walks; Wiener proved it exists (1923).
See [Chapter 16](16-Brownian-Motion.md#162-definition-and-properties).

**Buffon's needle**
A needle of length $\ell$ dropped at random on lines spaced $d \ge \ell$ apart crosses a line with probability $2\ell/(\pi d)$. Dropping many needles gives a (slow) experimental estimate of $\pi$.
See [Chapter 9](09-Continuous-Random-Variables.md#95-buffons-needle).

## C

**Cantor function**
The cdf of a random number whose base-3 digits are independent and equally likely to be 0 or 2. It is continuous, climbs from 0 to 1, and is flat off the Cantor set; it is also called the devil's staircase.
See [Chapter 17](17-Measure-Theoretic-Probability.md#a-distribution-that-is-neither-discrete-nor-continuous).

**Cantor set**
What is left of $[0, 1]$ after removing the open middle third and repeating forever on every remaining piece. It has length 0, yet it carries the whole law of the Cantor distribution, which is neither discrete nor continuous.
See [Chapter 17](17-Measure-Theoretic-Probability.md#a-distribution-that-is-neither-discrete-nor-continuous).

**Capacity (of a channel)**
$C = \max I(X; Y)$, the largest mutual information between input and output over all input distributions. Shannon's channel coding theorem says that every rate below $C$ can be sent with error probability as small as you like.
See [Chapter 18](18-Information-and-Entropy.md#capacity).

**Carathéodory's extension theorem**
A countably additive function on an algebra of sets extends to a measure on the $\sigma$-algebra it generates. Applied to lengths of intervals, it builds Lebesgue measure.
See [Chapter 17](17-Measure-Theoretic-Probability.md#building-measures).

**Cardy's formula**
John Cardy's 1992 prediction of the probability, at criticality, of an open crossing between two arcs of the boundary of a region. Smirnov proved it for site percolation on the triangular lattice (2001).
See [Chapter 20](20-Where-Probability-Goes.md#scaling-limits).

**Catalan number**
$C_m = \frac{1}{m+1}\binom{2m}{m}$, which counts rooted plane trees with $m$ edges. The even moments of the semicircle distribution are the Catalan numbers.
See [Chapter 20](20-Where-Probability-Goes.md#why-the-catalan-numbers-appear).

**Cauchy law**
The law with density $f(x) = \frac{1}{\pi(1 + x^2)}$, the position where a uniformly turning lighthouse beam hits the coast. It has no mean, and the average of $n$ independent copies has the same Cauchy law, so the law of large numbers and the CLT fail.
See [Chapter 9](09-Continuous-Random-Variables.md#the-formula-for-one-to-one-maps).

**Central limit theorem (CLT)**
If $X_1, X_2, \dots$ are iid with mean $\mu$ and finite variance $\sigma^2 > 0$, then $(S_n - n\mu)/(\sigma\sqrt n)$ converges in distribution to the standard normal. It explains why the normal law appears everywhere.
See [Chapter 12](12-The-Central-Limit-Theorem.md#121-statement-and-simulations).

**Certain event**
The whole sample space $\Omega$, which always happens. It has probability 1.
See [Chapter 1](01-What-Probability-Is.md#events).

**Chain rule (for probability)**
$P(A_1 \cap \cdots \cap A_n) = P(A_1)P(A_2 \mid A_1)\cdots P(A_n \mid A_1 \cap \cdots \cap A_{n-1})$: the multiplication rule repeated. It is the rule behind tree diagrams.
See [Chapter 3](03-Conditional-Probability-and-Independence.md#32-the-multiplication-rule-and-trees).

**Chain rule (for entropy)**
$H(X, Y) = H(X) + H(Y \mid X)$: the uncertainty of a pair is that of the first plus what remains of the second.
See [Chapter 18](18-Information-and-Entropy.md#joint-and-conditional-entropy).

**Chapman-Kolmogorov equations**
$p^{(m+n)}_{ij} = \sum_k p^{(m)}_{ik}p^{(n)}_{kj}$: to go from $i$ to $j$ in $m + n$ steps, pass through some state $k$ at time $m$. In matrix form $P^{m+n} = P^m P^n$, so the $n$-step matrix is $P^n$.
See [Chapter 13](13-Markov-Chains.md#132-n-step-probabilities).

**Characteristic function**
$\phi_X(t) = E[e^{itX}]$, which exists for every random variable and every real $t$. Like the mgf it determines the law and turns independent sums into products.
See [Chapter 12](12-The-Central-Limit-Theorem.md#removing-the-mgf-assumption).

**Chebyshev's inequality**
If $X$ has mean $\mu$ and finite variance $\sigma^2$, then $P(|X - \mu| \ge a) \le \sigma^2/a^2$; equivalently, $P(|X - \mu| \ge k\sigma) \le 1/k^2$. It follows from Markov's inequality applied to $(X - \mu)^2$.
See [Chapter 7](07-Inequalities-and-the-Law-of-Large-Numbers.md#71-markov-and-chebyshev).

**Chernoff bound**
A tail bound from Markov's inequality applied to $e^{tX}$: $P(X \ge a) \le e^{-ta}E[e^{tX}]$ for every $t > 0$, optimised over $t$. For sums of independent bounded variables it gives tails that fall exponentially fast.
See [Chapter 7](07-Inequalities-and-the-Law-of-Large-Numbers.md#74-chernoff-bounds).

**Chernoff-Hoeffding bound**
For $H_n$ heads in $n$ fair flips, $P(|H_n - n/2| \ge \delta n) \le 2e^{-2\delta^2 n}$. The chance of a given relative deviation falls exponentially in $n$.
See [Chapter 7](07-Inequalities-and-the-Law-of-Large-Numbers.md#fair-coins).

**Chi-squared law (one degree of freedom)**
The law of $Z^2$ for a standard normal $Z$, with density $\frac{1}{\sqrt{2\pi y}}e^{-y/2}$ for $y > 0$. It is found by the cdf method.
See [Chapter 9](09-Continuous-Random-Variables.md#the-cdf-method).

**Classical view**
The view that, when an experiment has finitely many equally likely results, the probability of an event is the number of favourable results divided by the total. It is circular and does not always apply.
See [Chapter 1](01-What-Probability-Is.md#view-1-equally-likely-outcomes).

**Closed class**
A set $C$ of states that no arrow leaves: $p_{ij} = 0$ for $i \in C$, $j \notin C$.
See [Chapter 13](13-Markov-Chains.md#133-classification-of-states).

**Communicate**
States $i$ and $j$ communicate, $i \leftrightarrow j$, if each is accessible from the other. Communicating splits the states into communicating classes.
See [Chapter 13](13-Markov-Chains.md#133-classification-of-states).

**Complement rule**
$P(A^c) = 1 - P(A)$. It is often easier to find the chance that something does not happen, as in the birthday problem.
See [Chapter 1](01-What-Probability-Is.md#first-consequences).

**Concave function**
A function is concave if every chord lies below its graph. Logarithm is concave, which with Jensen's inequality gives the bounds on entropy.
See [Chapter 18](18-Information-and-Entropy.md#182-properties-of-entropy).

**Concentration of measure**
The fact that a function of many independent variables, each having little effect, is nearly constant: it rarely strays far from its mean. Chernoff bounds and the Azuma-Hoeffding inequality are examples.
See [Chapter 20](20-Where-Probability-Goes.md#204-concentration-of-measure).

**Conditional entropy**
$H(Y \mid X) = \sum_x p(x)\,H(Y \mid X = x)$, the average uncertainty left in $Y$ once $X$ is known. Conditioning never increases entropy: $H(Y \mid X) \le H(Y)$.
See [Chapter 18](18-Information-and-Entropy.md#joint-and-conditional-entropy).

**Conditional expectation**
$E[Y \mid X = x]$ is the mean of the conditional law of $Y$ given $X = x$. Putting $X$ in place of $x$ gives the random variable $E[Y \mid X]$, the best prediction of $Y$ from $X$ in mean square.
See [Chapter 11](11-Joint-Distributions.md#116-conditional-expectation-and-the-tower-rule).

**Conditional probability**
For $P(B) > 0$, $P(A \mid B) = P(A \cap B)/P(B)$: the probability of $A$ once you know $B$ happened. For fixed $B$ it is itself a probability.
See [Chapter 3](03-Conditional-Probability-and-Independence.md#31-conditioning-shrinking-the-space).

**Conditional uniformity**
Given that a Poisson process has exactly $n$ events in $[0, t]$, their times are distributed like $n$ independent Uniform(0, $t$) points, sorted.
See [Chapter 14](14-Poisson-Processes.md#143-waiting-times).

**Conditionally independent**
Events are conditionally independent given $H$ if they are independent under the probability $P(\cdot \mid H)$. Then their likelihood ratios multiply.
See [Chapter 4](04-Bayes-Theorem.md#evidence-adds-on-the-log-scale).

**Confounder**
A hidden variable that drives two others, making them correlated without either causing the other. Randomisation breaks the link.
See [Chapter 11](11-Joint-Distributions.md#correlation-is-not-causation).

**Conformal invariance**
The property, expected of critical two-dimensional models, that the large-scale picture is unchanged by angle-preserving maps of the region. It is one of the two properties that characterise SLE.
See [Chapter 20](20-Where-Probability-Goes.md#203-sle-and-conformal-invariance).

**Connective constant**
The growth rate $\mu = \lim \sigma(n)^{1/n}$ of the number $\sigma(n)$ of self-avoiding paths of length $n$. On the square lattice it is about 2.638; its exact value is unknown.
See [Chapter 20](20-Where-Probability-Goes.md#bounds-by-counting-paths).

**Continuity correction**
When a normal approximates a distribution on the integers, move each endpoint half a unit outwards: $P(a \le X \le b) \approx P(a - \frac12 \le Y \le b + \frac12)$.
See [Chapter 10](10-The-Normal-Distribution.md#using-it-the-continuity-correction).

**Continuity of probability**
If events grow, $A_1 \subseteq A_2 \subseteq \cdots$, then $P(A_n) \to P(\bigcup A_n)$ (continuity from below); if they shrink, $P(C_n) \to P(\bigcap C_n)$ (continuity from above). Both follow from countable additivity.
See [Chapter 1](01-What-Probability-Is.md#continuity).

**Continuous random variable**
A random variable $X$ with a density $f \ge 0$ such that $P(a \le X \le b) = \int_a^b f(x)\,dx$ for all $a \le b$ (more precisely, absolutely continuous). Every single value then has probability 0.
See [Chapter 9](09-Continuous-Random-Variables.md#probability-as-paint).

**Convergence in distribution**
$X_n \Rightarrow X$ if $P(X_n \le x) \to P(X \le x)$ at every $x$ where the cdf of $X$ is continuous. It is a statement about laws, not about values, and is the weakest of the modes of convergence.
See [Chapter 12](12-The-Central-Limit-Theorem.md#convergence-in-distribution).

**Convergence in $L^p$**
$X_n \to X$ in $L^p$ if $E|X_n - X|^p \to 0$. For $p = 2$ it is called mean-square convergence.
See [Chapter 17](17-Measure-Theoretic-Probability.md#174-modes-of-convergence).

**Convergence in probability**
$Y_n \to c$ in probability if $P(|Y_n - c| > \varepsilon) \to 0$ for every $\varepsilon > 0$. It is the mode in the weak law of large numbers.
See [Chapter 7](07-Inequalities-and-the-Law-of-Large-Numbers.md#72-the-weak-law-of-large-numbers).

**Convolution**
The law of a sum of independent variables: $P(X + Y = n) = \sum_k P(X = k)P(Y = n - k)$ in the discrete case, and $f_{X+Y}(z) = \int f_X(x)f_Y(z - x)\,dx$ for densities.
See [Chapter 11](11-Joint-Distributions.md#114-sums-convolution).

**Correlation coefficient**
$\rho(X, Y) = \operatorname{Cov}(X, Y)/(\sigma_X\sigma_Y)$, the covariance with the units removed. It lies in $[-1, 1]$, and $\pm1$ exactly when $Y$ is a linear function of $X$; it measures linear association only.
See [Chapter 11](11-Joint-Distributions.md#113-covariance-and-correlation).

**Countable additivity**
The third axiom: if $A_1, A_2, \dots$ are pairwise disjoint, $P(\bigcup A_i) = \sum P(A_i)$. It is what makes limits of events behave.
See [Chapter 1](01-What-Probability-Is.md#the-axioms).

**Counting process**
A family $N(t)$, $t \ge 0$, where $N(t)$ counts the events up to time $t$: it starts at 0, takes whole-number values, and increases by jumps.
See [Chapter 14](14-Poisson-Processes.md#141-counting-random-events-in-time).

**Coupon collector**
Collecting all $n$ equally likely coupon types takes on average $nH_n \approx n\ln n$ draws, where $H_n$ is the $n$-th harmonic number. The wait is a sum of geometric waits, one for each new type.
See [Chapter 6](06-Expectation-and-Variance.md#62-linearity).

**Covariance**
$\operatorname{Cov}(X, Y) = E[(X - \mu_X)(Y - \mu_Y)] = E[XY] - E[X]E[Y]$. It is 0 for independent variables, but covariance 0 does not imply independence.
See [Chapter 6](06-Expectation-and-Variance.md#64-covariance-and-the-variance-of-a-sum).

**Critical probability**
The threshold $p_c$ in percolation: below it there is almost surely no infinite open cluster, above it there almost surely is one. For bond percolation on $\mathbb{Z}^2$, $p_c = 1/2$.
See [Chapter 20](20-Where-Probability-Goes.md#the-model).

**Cross-entropy**
$\sum_i p_i\log_2(1/q_i)$, the average codeword length when symbols follow $p$ but the code was designed for $q$. It exceeds the entropy by the Kullback-Leibler divergence, and is the loss most classifiers are trained on.
See [Chapter 18](18-Information-and-Entropy.md#186-the-kullback-leibler-divergence).

**Cryptographically secure generator**
A pseudo-random generator whose outputs no efficient adversary can predict, even after seeing many earlier outputs and knowing the algorithm. Yao showed this is equivalent to passing the next-bit test.
See [Chapter 19](19-Randomness-in-Computing.md#a-different-requirement).

**Cumulative distribution function (cdf)**
$F(x) = P(X \le x)$. Every random variable has one; it is non-decreasing and right-continuous, tends to 0 at $-\infty$ and 1 at $+\infty$, and it determines the law.
See [Chapter 5](05-Discrete-Random-Variables.md#53-the-cumulative-distribution-function).

**Cutoff phenomenon**
A sudden drop in the distance to equilibrium of some Markov chains: far from mixed for a while, then mixed within a short window. Riffle shuffles of 52 cards show it around 7 shuffles.
See [Chapter 13](13-Markov-Chains.md#how-many-shuffles-mix-a-deck).

## D

**Damping factor**
In PageRank, the probability $d$ (about 0.85) that the random surfer follows a link; otherwise it jumps to a page chosen uniformly at random.
See [Chapter 13](13-Markov-Chains.md#pagerank).

**De Moivre-Laplace theorem**
The normal approximation to the binomial: for $X \sim \text{Bin}(n, p)$, $(X - np)/\sqrt{npq}$ converges in distribution to the standard normal. It is the first central limit theorem, proved with Stirling's formula.
See [Chapter 10](10-The-Normal-Distribution.md#104-the-normal-as-the-limit-of-the-binomial).

**De Morgan's laws**
$(A \cup B)^c = A^c \cap B^c$ and $(A \cap B)^c = A^c \cup B^c$: "not (A or B)" is "not A and not B", and "not (A and B)" is "not A or not B".
See [Chapter 1](01-What-Probability-Is.md#two-laws-worth-knowing-de-morgan).

**Defence attorney's fallacy**
The mirror image of the prosecutor's fallacy: treating evidence as worthless because it narrows the suspects down only to a few, ignoring how much it raised the probability of guilt.
See [Chapter 4](04-Bayes-Theorem.md#44-the-prosecutors-fallacy).

**Density (probability density function)**
A function $f \ge 0$ with total integral 1 such that $P(a \le X \le b) = \int_a^b f(x)\,dx$. A density is not a probability and can exceed 1; $f(x)\,dx$ is the probability of a small interval.
See [Chapter 9](09-Continuous-Random-Variables.md#probability-as-paint).

**Detailed balance**
A distribution $\pi$ satisfies detailed balance for $P$ if $\pi_i p_{ij} = \pi_j p_{ji}$ for all $i, j$: in equilibrium, the flow from $i$ to $j$ equals the flow back. Such a $\pi$ is stationary.
See [Chapter 13](13-Markov-Chains.md#detailed-balance-and-random-walks-on-graphs).

**Diffusion coefficient**
The constant $D$ with $E[\Delta^2] = 2D\tau$ for the displacement $\Delta$ of a particle in time $\tau$. Einstein (1905) related it to the size of molecules, and the density of particles solves the heat equation with this constant.
See [Chapter 16](16-Brownian-Motion.md#165-diffusion-and-the-heat-equation).

**Diffusion model**
A generative model that learns to reverse a process gradually adding Gaussian noise to data, so that new samples can be made from pure noise.
See [Chapter 20](20-Where-Probability-Goes.md#205-probability-in-physics-and-machine-learning).

**Discrete random variable**
A random variable taking only finitely many values, or a countable list of values $x_1, x_2, \dots$. Its law is given by its probability mass function.
See [Chapter 5](05-Discrete-Random-Variables.md#51-random-variables-and-distributions).

**Disjoint events**
Events with no outcome in common, $A \cap B = \varnothing$; also called mutually exclusive. Disjoint events with positive probabilities are never independent.
See [Chapter 1](01-What-Probability-Is.md#set-language-not-and-or).

**Distribution (law)**
The probabilities with which a random variable takes its values: the pmf for a discrete variable, the density for a continuous one, and in general the measure $B \mapsto P(X \in B)$ on the Borel sets.
See [Chapter 5](05-Discrete-Random-Variables.md#51-random-variables-and-distributions).

**Domain Markov property**
For a random curve in a region: given the first part of the curve, the rest is the same kind of curve in the region with that part cut out. With conformal invariance it singles out SLE.
See [Chapter 20](20-Where-Probability-Goes.md#schramms-insight).

**Dominated convergence theorem**
If $X_n \to X$ almost surely and $|X_n| \le Y$ with $E[Y] < \infty$, then $E[X_n] \to E[X]$. It is the usual licence to swap limits and expectations.
See [Chapter 17](17-Measure-Theoretic-Probability.md#expectation-as-an-integral).

**Donsker's invariance principle**
The rescaled random walk path $W^{(n)}_t = S_{\lfloor nt \rfloor}/\sqrt n$, for any steps with mean 0 and variance 1, converges in distribution to Brownian motion as a whole path. It is the functional CLT.
See [Chapter 16](16-Brownian-Motion.md#161-from-random-walks-to-brownian-motion).

**Doob martingale**
$M_i = E[f \mid X_1, \dots, X_i]$, the best guess of $f(X_1, \dots, X_n)$ after seeing the first $i$ variables. It runs from $E[f]$ to $f$ and turns any function of independent variables into a martingale.
See [Chapter 20](20-Where-Probability-Goes.md#bounded-differences).

**Doubly stochastic matrix**
A stochastic matrix whose columns also sum to 1. For such a chain the uniform distribution is stationary; card shuffles are examples.
See [Chapter 13](13-Markov-Chains.md#how-many-shuffles-mix-a-deck).

**Drift**
The average growth rate $\mu$ in geometric Brownian motion $dS_t = \mu S_t\,dt + \sigma S_t\,dB_t$.
See [Chapter 16](16-Brownian-Motion.md#166-a-first-look-at-stochastic-calculus-and-black-scholes).

**Dual lattice**
For the grid $\mathbb{Z}^2$, the lattice with a vertex at the centre of each square face and a dual bond crossing each bond at right angles, declared open exactly when the bond it crosses is closed. A finite open cluster is surrounded by a closed dual circuit.
See [Chapter 20](20-Where-Probability-Goes.md#bounds-by-counting-paths).

**Dutch book argument**
If your betting odds break the rules of probability, someone can offer you a set of bets you accept one by one and lose on whatever happens. So degrees of belief that are coherent must obey the axioms.
See [Chapter 1](01-What-Probability-Is.md#view-3-degree-of-belief).

## E

**Edgeworth expansion**
A refinement of the normal approximation that adds correction terms to $\Phi$, the first proportional to the skewness divided by $\sqrt n$.
See [Chapter 12](12-The-Central-Limit-Theorem.md#123-how-good-is-the-approximation).

**Ehrenfest urn**
Two boxes hold $N$ balls; each step a uniformly random ball moves to the other box. It is a Markov chain model of diffusion, with a binomial stationary distribution.
See [Chapter 13](13-Markov-Chains.md#131-transition-matrices).

**Elementary event**
An event with exactly one outcome, such as $\{(6, 6)\}$.
See [Chapter 1](01-What-Probability-Is.md#events).

**Empirical distribution (of eigenvalues)**
For an $n \times n$ matrix with eigenvalues $\lambda_1, \dots, \lambda_n$, the distribution putting mass $1/n$ at each. For Wigner matrices it converges to the semicircle law.
See [Chapter 20](20-Where-Probability-Goes.md#wigners-semicircle).

**Entropy**
$H(X) = -\sum p_i\log_2 p_i$, the average surprise of $X$, in bits. It measures uncertainty before seeing $X$, information gained by seeing it, and the bits per symbol needed to record many copies.
See [Chapter 18](18-Information-and-Entropy.md#entropy).

**Entropy source**
A physical source of unpredictability (interrupt timing jitter, dedicated hardware noise) used to seed a cryptographic generator.
See [Chapter 19](19-Randomness-in-Computing.md#a-different-requirement).

**Equally likely outcomes**
When a sample space has finitely many outcomes, all equally probable, $P(A) = |A|/|\Omega|$. Choose a sample space whose outcomes really are equally likely, then count.
See [Chapter 2](02-Counting-and-Equally-Likely-Outcomes.md#21-dice-cards-and-lotteries).

**Erdős-Rényi random graph**
The random graph $G(n, p)$: $n$ labelled vertices, each of the $\binom n2$ possible edges present with probability $p$, independently.
See [Chapter 19](19-Randomness-in-Computing.md#194-random-graphs).

**Ergodic theorem (for Markov chains)**
For a finite irreducible chain, the long-run fraction of time spent in state $i$ converges to $\pi_i$ with probability 1, whatever the start. Time averages equal space averages.
See [Chapter 13](13-Markov-Chains.md#return-times-and-the-ergodic-theorem).

**Erlang law**
The gamma law with whole-number shape $n$: the waiting time until the $n$-th event of a Poisson process.
See [Chapter 14](14-Poisson-Processes.md#143-waiting-times).

**Event**
A set of outcomes, that is, a subset of the sample space. An event happens (occurs) if the outcome of the experiment is in it.
See [Chapter 1](01-What-Probability-Is.md#events).

**Exchangeability**
The symmetry by which, in draws without replacement, each draw has the same unconditional law: the second ball is as likely to be red as the first. It often replaces a whole tree.
See [Chapter 3](03-Conditional-Probability-and-Independence.md#tree-diagrams).

**Expected value (expectation, mean)**
For discrete $X$, $E[X] = \sum x_i P(X = x_i)$, when the sum converges absolutely; for a density, $\int x f(x)\,dx$. It is the long-run average and the balance point of the distribution.
See [Chapter 6](06-Expectation-and-Variance.md#61-expected-value).

**Experiment**
Anything with an uncertain result: rolling dice, dealing cards, measuring tomorrow's temperature.
See [Chapter 1](01-What-Probability-Is.md#outcomes-and-the-sample-space).

**Exponential distribution**
$T \sim \text{Exp}(\lambda)$ has density $\lambda e^{-\lambda t}$ for $t > 0$, so $P(T > t) = e^{-\lambda t}$. Its mean is $1/\lambda$ and its variance $1/\lambda^2$; it is the only continuous memoryless law.
See [Chapter 9](09-Continuous-Random-Variables.md#the-exponential-law-waiting-without-memory).

**Extinction probability**
For a Galton-Watson process with offspring pgf $G$ and mean $\mu$, the probability $\eta$ that the family dies out. It is the smallest nonnegative root of $G(s) = s$, equal to 1 when $\mu \le 1$ (and $p_1 \ne 1$) and below 1 when $\mu > 1$.
See [Chapter 8](08-Generating-Functions-in-Probability.md#83-branching-processes).

## F

**Factorial moment**
$E[X(X - 1)]$ (and more generally $E[X(X-1)\cdots(X-k+1)]$). For counts it is often easier to find than $E[X^2]$, and it is a derivative of the pgf at 1.
See [Chapter 6](06-Expectation-and-Variance.md#63-variance-and-standard-deviation).

**False positive**
A positive test result for someone who does not have the condition. Its probability is 1 minus the specificity.
See [Chapter 4](04-Bayes-Theorem.md#42-medical-tests-and-base-rates).

**Fatou's lemma**
For non-negative random variables, $E[\liminf X_n] \le \liminf E[X_n]$. Mass can escape in the limit, but not appear.
See [Chapter 17](17-Measure-Theoretic-Probability.md#expectation-as-an-integral).

**Filtration**
A growing sequence of $\sigma$-algebras $\mathcal{F}_0 \subseteq \mathcal{F}_1 \subseteq \cdots$, the information available at each time.
See [Chapter 17](17-Measure-Theoretic-Probability.md#sigma-algebras).

**First-step analysis**
Find an expected time or a probability for a chain by conditioning on its first step, which gives a linear equation for each starting state. It solves gambler's ruin and waiting times for patterns.
See [Chapter 13](13-Markov-Chains.md#135-absorbing-chains).

**Freivalds' algorithm**
To check $AB = C$ for $n \times n$ matrices, pick a random vector $r$ of 0s and 1s and compare $A(Br)$ with $Cr$, in $O(n^2)$ operations. A wrong product is caught with probability at least $1/2$ each run.
See [Chapter 19](19-Randomness-in-Computing.md#checking-a-product-freivalds-algorithm).

**Frequency view**
The view that the probability of an event is the long-run proportion of times it happens in repeated trials. The long run is never reached, and some events happen only once.
See [Chapter 1](01-What-Probability-Is.md#view-2-long-run-frequency).

**Full period**
A linear congruential generator has full period if it runs through all $m$ values before repeating. The Hull-Dobell theorem says exactly when this happens.
See [Chapter 19](19-Randomness-in-Computing.md#linear-congruential-generators).

**Fundamental matrix**
For an absorbing chain with transient-to-transient block $Q$, $F = (I - Q)^{-1} = I + Q + Q^2 + \cdots$. Its entry $F_{ij}$ is the expected number of visits to $j$ starting from $i$; row sums give expected times to absorption.
See [Chapter 13](13-Markov-Chains.md#135-absorbing-chains).

## G

**Galton-Watson process**
A branching process: each individual independently has a random number of children with a fixed offspring distribution, and $Z_n$ is the size of generation $n$. Its pgfs compose: generation $n$ has pgf $G_n = G \circ \cdots \circ G$.
See [Chapter 8](08-Generating-Functions-in-Probability.md#83-branching-processes).

**Gambler's fallacy**
The belief that after a run of heads, tails is "due". Independent tosses have no memory; the law of large numbers works by swamping, not by compensation.
See [Chapter 7](07-Inequalities-and-the-Law-of-Large-Numbers.md#73-what-the-law-does-and-does-not-say).

**Gambler's ruin**
A gambler with $k$ wins or loses one unit each round (with probabilities $p$ and $q$) until reaching $N$ or 0. In the fair case the chance of reaching $N$ is $k/N$; otherwise it is $(1 - r^k)/(1 - r^N)$ with $r = q/p$.
See [Chapter 3](03-Conditional-Probability-and-Independence.md#36-gamblers-ruin-by-conditioning).

**Gamma law**
The law of a sum of $n$ independent Exp($\lambda$) variables, with density $\lambda^n x^{n-1}e^{-\lambda x}/(n-1)!$ for $x > 0$: shape $n$, rate $\lambda$. It is also called the Erlang law.
See [Chapter 11](11-Joint-Distributions.md#continuous).

**Gaussian integral**
$\int_{-\infty}^{\infty} e^{-x^2/2}\,dx = \sqrt{2\pi}$. It is computed by squaring and switching to polar coordinates, and it makes the normal density integrate to 1.
See [Chapter 10](10-The-Normal-Distribution.md#why-is-the-area-1).

**Gaussian process**
A process in which every finite collection of values is jointly normal. Brownian motion is the Gaussian process with mean 0 and $\operatorname{Cov}(B_s, B_t) = \min(s, t)$.
See [Chapter 16](16-Brownian-Motion.md#162-definition-and-properties).

**Gaussian Unitary Ensemble (GUE)**
Random complex Hermitian matrices with Gaussian entries. Their eigenvalues repel, and their local spacing statistics appear to match the zeros of the Riemann zeta function.
See [Chapter 20](20-Where-Probability-Goes.md#beyond-the-semicircle).

**Generalised inverse**
For a cdf $F$, $x_p = \min\{x : F(x) \ge p\}$, which defines quantiles when $F$ has jumps or flat parts. It is what the inverse transform method uses.
See [Chapter 9](09-Continuous-Random-Variables.md#medians-and-quantiles).

**Generated sigma-algebra**
The smallest $\sigma$-algebra containing a given collection of sets. The $\sigma$-algebra $\sigma(X)$ generated by a random variable $X$ holds all events $\{X \in B\}$: what you know once you have seen $X$.
See [Chapter 17](17-Measure-Theoretic-Probability.md#measurable-functions).

**Geometric Brownian motion**
$S_t = S_0\exp\big((\mu - \frac12\sigma^2)t + \sigma B_t\big)$, the solution of $dS_t = \mu S_t\,dt + \sigma S_t\,dB_t$. It is the model of a stock price in the Black-Scholes theory.
See [Chapter 16](16-Brownian-Motion.md#166-a-first-look-at-stochastic-calculus-and-black-scholes).

**Geometric distribution**
The number of trials up to and including the first success: $P(X = k) = q^{k-1}p$ for $k = 1, 2, \dots$, with mean $1/p$. It is the only memoryless law on $\{1, 2, \dots\}$. Some books count failures instead.
See [Chapter 5](05-Discrete-Random-Variables.md#geometric-how-long-until-the-first-success).

**Giant component**
In $G(n, c/n)$ with $c > 1$, the unique component of about $yn$ vertices, where $1 - y = e^{-cy}$; all other components have $O(\log n)$ vertices.
See [Chapter 19](19-Randomness-in-Computing.md#the-giant-component).

**Gibbs distribution**
A distribution giving a configuration $x$ probability proportional to $e^{-E(x)/T}$, for an energy $E$ and temperature $T$. It is the law of statistical mechanics, sampled by the Metropolis algorithm.
See [Chapter 20](20-Where-Probability-Goes.md#205-probability-in-physics-and-machine-learning).

**Gibbs sampler**
A Markov chain Monte Carlo method that updates one coordinate at a time, drawing it from its conditional law given the others.
See [Chapter 19](19-Randomness-in-Computing.md#how-long-to-run-honestly).

**Gibbs' inequality**
$D(p \,\|\, q) \ge 0$, with equality only if $p = q$. Coding with the wrong distribution always costs extra bits on average.
See [Chapter 18](18-Information-and-Entropy.md#186-the-kullback-leibler-divergence).

**Gilbert-Shannon-Reeds model**
A model of the riffle shuffle: cut the deck binomially, then drop cards from the two halves with probabilities proportional to their sizes. Bayer and Diaconis used it to show about 7 shuffles mix 52 cards.
See [Chapter 13](13-Markov-Chains.md#how-many-shuffles-mix-a-deck).

**Grouping rule**
The property of entropy that choosing among outcomes in two stages (first a group, then within it) gives the same total uncertainty as choosing at once. With continuity and monotonicity it pins entropy down.
See [Chapter 18](18-Information-and-Entropy.md#182-properties-of-entropy).

## H

**Half-life**
The time after which half of a large sample of an isotope has decayed; for lifetimes Exp($\kappa$) it is the median, $\ln 2/\kappa$.
See [Chapter 14](14-Poisson-Processes.md#147-radioactive-decay).

**Harmonic number**
$H_n = 1 + \frac12 + \cdots + \frac1n$, about $\ln n$. It appears in the coupon collector problem and as the expected number of records among $n$ random values.
See [Chapter 6](06-Expectation-and-Variance.md#62-linearity).

**Heat equation**
$\partial_t u = D\,\partial_x^2 u$ (or $\frac12\partial_x^2 u$ for standard Brownian motion). The density of a diffusing particle solves it, and $u(t, x) = E[g(x + B_t)]$ solves it with initial value $g$.
See [Chapter 16](16-Brownian-Motion.md#165-diffusion-and-the-heat-equation).

**Heat kernel**
$p_t(x) = \frac{1}{\sqrt{2\pi t}}e^{-x^2/(2t)}$, the density of $B_t$. It solves the heat equation and spreads a point of heat into a widening bell.
See [Chapter 16](16-Brownian-Motion.md#165-diffusion-and-the-heat-equation).

**Heavy-tailed distribution**
A distribution whose tails decay more slowly than any exponential, so that its mgf is infinite for every $t > 0$. Chernoff bounds are unavailable, and single huge values can dominate sums.
See [Chapter 8](08-Generating-Functions-in-Probability.md#84-moment-generating-functions).

**Herschel-Maxwell theorem**
If two coordinates are independent and their joint law is rotation-invariant, each is normal with mean 0. It is a symmetry reason for the normal law.
See [Chapter 10](10-The-Normal-Distribution.md#reason-2-symmetry-herschel-and-maxwell).

**Hewitt-Savage zero-one law**
For iid variables, every event unchanged by permuting finitely many of them has probability 0 or 1.
See [Chapter 17](17-Measure-Theoretic-Probability.md#176-kolmogorovs-zero-one-law).

**Hitting time**
The first time $T_a$ a process reaches a level $a$. For Brownian motion, $P(T_a \le t) = 2P(B_t \ge a)$, so every level is reached with probability 1, but $E[T_a] = \infty$.
See [Chapter 16](16-Brownian-Motion.md#164-the-reflection-principle-and-hitting-times).

**Hoeffding's lemma**
If $E[X] = 0$ and $|X| \le c$, then $E[e^{\lambda X}] \le e^{\lambda^2c^2/2}$ for every real $\lambda$. It is the key step of the Azuma-Hoeffding inequality.
See [Chapter 20](20-Where-Probability-Goes.md#the-azuma-hoeffding-inequality).

**Huffman's algorithm**
Builds an optimal prefix code by repeatedly merging the two least likely symbols into one. No prefix code has smaller expected length (Huffman, 1952).
See [Chapter 18](18-Information-and-Entropy.md#huffmans-algorithm).

**Hull-Dobell theorem**
A linear congruential generator with $c \ne 0$ has full period $m$ exactly when $c$ and $m$ have no common factor, $a - 1$ is divisible by every prime dividing $m$, and $a - 1$ is divisible by 4 if $m$ is.
See [Chapter 19](19-Randomness-in-Computing.md#linear-congruential-generators).

**Hypergeometric distribution**
Draw $n$ without replacement from $N$ items of which $D$ are special; the number of special items drawn has $P(X = k) = \binom{D}{k}\binom{N - D}{n - k}/\binom{N}{n}$. For a large population it is close to the binomial.
See [Chapter 2](02-Counting-and-Equally-Likely-Outcomes.md#24-the-hypergeometric-distribution).

**Hypothesis**
In Bayes' theorem, one of the possible explanations $B_i$ (forming a partition) whose probabilities are updated by the evidence.
See [Chapter 4](04-Bayes-Theorem.md#the-vocabulary).

## I

**i.i.d. (iid)**
Independent and identically distributed: a sequence of independent random variables that all have the same law.
See [Chapter 5](05-Discrete-Random-Variables.md#51-random-variables-and-distributions).

**Impossible event**
The empty set $\varnothing$, with no outcomes in it. It has probability 0.
See [Chapter 1](01-What-Probability-Is.md#events).

**Inclusion-exclusion**
For two events, the addition rule; for three, $P(A \cup B \cup C) = \sum P(A) - \sum P(A \cap B) + P(A \cap B \cap C)$. Add singles, subtract pairs, add triples, and so on.
See [Chapter 1](01-What-Probability-Is.md#first-consequences).

**Increment**
For a process, the change $N(t) - N(s)$ (or $B_t - B_s$) over a time interval $(s, t]$.
See [Chapter 14](14-Poisson-Processes.md#141-counting-random-events-in-time).

**Independent events**
$A$ and $B$ are independent if $P(A \cap B) = P(A)P(B)$. Events $A_1, \dots, A_n$ are (mutually) independent if this product rule holds for every choice of two or more of them.
See [Chapter 3](03-Conditional-Probability-and-Independence.md#34-independence).

**Independent increments**
The changes of a process over disjoint time intervals are independent. Poisson processes and Brownian motion have them.
See [Chapter 16](16-Brownian-Motion.md#162-definition-and-properties).

**Independent random variables**
$X$ and $Y$ are independent if $P(X = x, Y = y) = P(X = x)P(Y = y)$ for all $x, y$; for densities, $f(x, y) = f_X(x)f_Y(y)$. In general, every event of $\sigma(X)$ is independent of every event of $\sigma(Y)$.
See [Chapter 11](11-Joint-Distributions.md#112-independence).

**Indicator**
The random variable $\mathbf{1}_A$ equal to 1 if $A$ happens and 0 otherwise. Its mean is $P(A)$.
See [Chapter 5](05-Discrete-Random-Variables.md#51-random-variables-and-distributions).

**Indicator method**
To find the mean of a count $N$, write $N = \sum_i \mathbf{1}_{A_i}$ and use linearity: $E[N] = \sum_i P(A_i)$, with no need for independence.
See [Chapter 6](06-Expectation-and-Variance.md#65-the-indicator-method).

**Infinite monkey theorem**
A random keyboard typing forever, with independent keystrokes, almost surely types any given finite text, and indeed types it infinitely often. It follows from the second Borel-Cantelli lemma.
See [Chapter 17](17-Measure-Theoretic-Probability.md#the-infinite-monkey-theorem).

**Infinitely often**
For events $A_1, A_2, \dots$, the event that infinitely many of them happen, $\bigcap_n\bigcup_{k \ge n}A_k$, also written $\limsup A_n$.
See [Chapter 17](17-Measure-Theoretic-Probability.md#infinitely-often).

**Initial distribution**
The distribution $\mu$ of $X_0$ in a Markov chain. With the transition matrix it fixes the law of the whole chain; the law at time $n$ is $\mu P^n$.
See [Chapter 13](13-Markov-Chains.md#131-transition-matrices).

**Inspection paradox**
Arriving at a random time, you land in a gap longer than a typical gap, because long gaps cover more time. For a Poisson process the gap you land in has mean about twice the average gap.
See [Chapter 14](14-Poisson-Processes.md#145-the-inspection-paradox).

**Integrable**
A random variable $X$ with $E|X| < \infty$, so that $E[X]$ exists and is finite.
See [Chapter 17](17-Measure-Theoretic-Probability.md#expectation-as-an-integral).

**Interarrival times**
The gaps $T_n = S_n - S_{n-1}$ between successive events of a counting process. In a Poisson process they are independent Exp($\lambda$).
See [Chapter 14](14-Poisson-Processes.md#141-counting-random-events-in-time).

**Inverse transform method**
If $U$ is Uniform(0, 1) and $F$ is a cdf, then $F^{-1}(U)$, using the generalised inverse, has cdf $F$. So any law can be made from a uniform one; for example $-\ln(U)/\lambda$ is Exp($\lambda$).
See [Chapter 9](09-Continuous-Random-Variables.md#making-any-law-from-a-uniform-one).

**Irreducible chain**
A Markov chain in which every state can be reached from every other: there is a single communicating class.
See [Chapter 13](13-Markov-Chains.md#133-classification-of-states).

**Ising model**
A model of a magnet: each site has a spin $\pm1$, and a configuration has Gibbs probability favouring aligned neighbours. It is sampled by Metropolis, and its critical interfaces in two dimensions are conformally invariant.
See [Chapter 19](19-Randomness-in-Computing.md#the-problem).

**Itô integral**
The stochastic integral $\int_0^t H_s\,dB_s$, a limit of sums $\sum H_{t_k}(B_{t_{k+1}} - B_{t_k})$ with $H$ evaluated at the left end of each interval (the stake chosen before the move). It is a martingale.
See [Chapter 16](16-Brownian-Motion.md#166-a-first-look-at-stochastic-calculus-and-black-scholes).

**Itô's formula**
The chain rule of stochastic calculus: $f(B_t) = f(B_0) + \int_0^t f'(B_s)\,dB_s + \frac12\int_0^t f''(B_s)\,ds$. The extra term comes from $(dB_t)^2 = dt$.
See [Chapter 16](16-Brownian-Motion.md#166-a-first-look-at-stochastic-calculus-and-black-scholes).

## J

**Jensen's inequality**
For a concave function $f$, $E[f(X)] \le f(E[X])$; for a convex one the inequality reverses. With $f = \log$ it gives the upper bound $\log_2 n$ on entropy.
See [Chapter 18](18-Information-and-Entropy.md#182-properties-of-entropy).

**Johnson-Lindenstrauss lemma**
Any $n$ points in a high-dimensional space can be mapped linearly into about $\log n/\varepsilon^2$ dimensions with all distances preserved up to a factor $1 \pm \varepsilon$; a random projection works with high probability.
See [Chapter 20](20-Where-Probability-Goes.md#bounded-differences).

**Joint density**
A function $f(x, y) \ge 0$ with $P((X, Y) \in A) = \iint_A f(x, y)\,dx\,dy$; then $X$ and $Y$ are jointly continuous.
See [Chapter 11](11-Joint-Distributions.md#the-continuous-case-a-surface).

**Joint entropy**
$H(X, Y) = -\sum_{x,y}p(x, y)\log_2 p(x, y)$, the entropy of the pair.
See [Chapter 18](18-Information-and-Entropy.md#joint-and-conditional-entropy).

**Joint probability mass function**
$p(x, y) = P(X = x, Y = y)$ for discrete $X$ and $Y$, often shown as a table.
See [Chapter 11](11-Joint-Distributions.md#the-discrete-case-a-table).

## K

**Kac's formula**
For a finite irreducible chain, the expected return time to state $i$ is $E_i[T_i] = 1/\pi_i$.
See [Chapter 13](13-Markov-Chains.md#return-times-and-the-ergodic-theorem).

**Khinchin's weak law**
The weak law of large numbers needs only a finite mean, not a finite variance: for iid $X_i$ with $E|X_1| < \infty$, $\bar X_n \to \mu$ in probability.
See [Chapter 7](07-Inequalities-and-the-Law-of-Large-Numbers.md#72-the-weak-law-of-large-numbers).

**Kolmogorov's extension theorem**
Guarantees a probability space carrying an infinite sequence of independent random variables with given laws, so that infinitely many coin tosses make sense.
See [Chapter 17](17-Measure-Theoretic-Probability.md#building-measures).

**Kolmogorov's zero-one law**
If $X_1, X_2, \dots$ are independent, every tail event has probability 0 or 1. For example, $\sum X_n$ either converges almost surely or diverges almost surely.
See [Chapter 17](17-Measure-Theoretic-Probability.md#176-kolmogorovs-zero-one-law).

**Kraft inequality**
A prefix code with codeword lengths $\ell_1, \dots, \ell_n$ exists if and only if $\sum 2^{-\ell_i} \le 1$. McMillan showed the same holds for every uniquely decodable code.
See [Chapter 18](18-Information-and-Entropy.md#prefix-codes).

**Kullback-Leibler divergence**
$D(p \,\|\, q) = \sum p_i\log_2(p_i/q_i)$, also called relative entropy: the extra bits per symbol paid for coding $p$ with a code built for $q$. It is non-negative but not symmetric, so it is not a distance.
See [Chapter 18](18-Information-and-Entropy.md#186-the-kullback-leibler-divergence).

## L

**Las Vegas algorithm**
A randomized algorithm that always gives the right answer but whose running time is random, such as randomized quicksort.
See [Chapter 19](19-Randomness-in-Computing.md#192-randomized-algorithms).

**Law of large numbers**
The sample mean $\bar X_n$ of iid variables with finite mean $\mu$ converges to $\mu$: in probability (the weak law) and with probability 1 (the strong law). It says nothing about luck evening out.
See [Chapter 7](07-Inequalities-and-the-Law-of-Large-Numbers.md#72-the-weak-law-of-large-numbers).

**Law of the iterated logarithm**
For a sum of iid variables with mean 0 and variance 1, $\limsup S_n/\sqrt{2n\ln\ln n} = 1$ with probability 1. It describes the largest fluctuations along a whole run; Brownian motion obeys the same law.
See [Chapter 12](12-The-Central-Limit-Theorem.md#the-difference-made-concrete).

**Law of total expectation**
See *tower rule*.
See [Chapter 11](11-Joint-Distributions.md#the-tower-rule).

**Law of total probability**
If $B_1, \dots, B_n$ is a partition with positive probabilities, $P(A) = \sum_i P(A \mid B_i)P(B_i)$. Split by cases, then average.
See [Chapter 3](03-Conditional-Probability-and-Independence.md#33-the-law-of-total-probability).

**Law of total variance**
$\operatorname{Var}(Y) = E[\operatorname{Var}(Y \mid X)] + \operatorname{Var}(E[Y \mid X])$: the variance within groups plus the variance between them.
See [Chapter 11](11-Joint-Distributions.md#the-law-of-total-variance).

**Lazy chain**
The chain $\frac12(I + P)$, which stays put with probability $1/2$ at each step and otherwise moves by $P$. It has the same stationary distribution and is always aperiodic.
See [Chapter 13](13-Markov-Chains.md#the-convergence-theorem).

**Le Cam's inequality**
For independent trials with success probabilities $p_i$ and $\lambda = \sum p_i$, the total distance between the law of the number of successes and Poisson($\lambda$) is at most $2\sum p_i^2$.
See [Chapter 5](05-Discrete-Random-Variables.md#poisson-rare-events).

**Lebesgue integral**
The expectation $E[X] = \int_\Omega X\,dP$, built from simple functions by limits. It covers discrete, continuous and mixed laws at once.
See [Chapter 17](17-Measure-Theoretic-Probability.md#expectation-as-an-integral).

**Lebesgue measure**
The measure on the Borel sets of $\mathbb{R}$ (or $[0, 1)$) that gives every interval its length. Uniform probability on $[0, 1)$ is Lebesgue measure.
See [Chapter 17](17-Measure-Theoretic-Probability.md#building-measures).

**Lebesgue's decomposition**
Every distribution on $\mathbb{R}$ is a mixture of a discrete part, an absolutely continuous part and a singular continuous part like the Cantor distribution.
See [Chapter 17](17-Measure-Theoretic-Probability.md#a-distribution-that-is-neither-discrete-nor-continuous).

**Length-biased distribution**
For gaps with density $f_G$ and mean $m$, the law with density $xf_G(x)/m$: the law of the gap containing a random moment. It explains the inspection paradox.
See [Chapter 14](14-Poisson-Processes.md#145-the-inspection-paradox).

**Lévy's continuity theorem**
$Y_n$ converges in distribution to $Y$ if and only if the characteristic functions $E[e^{itY_n}]$ converge to $E[e^{itY}]$ for every $t$. It removes the mgf assumption from the CLT proof.
See [Chapter 12](12-The-Central-Limit-Theorem.md#removing-the-mgf-assumption).

**Likelihood**
$P(A \mid B_j)$, the probability of the evidence under hypothesis $j$: how well that hypothesis predicted what was seen.
See [Chapter 4](04-Bayes-Theorem.md#the-vocabulary).

**Likelihood ratio**
$\Lambda = P(E \mid H)/P(E \mid H^c)$, how much more probable the evidence is if $H$ is true than if it is false. Posterior odds equal the likelihood ratio times prior odds.
See [Chapter 4](04-Bayes-Theorem.md#the-theorem).

**Lindeberg's condition**
A condition for the CLT with independent but not identically distributed terms: no single term contributes a non-negligible part of the total variance. "No single term matters."
See [Chapter 12](12-The-Central-Limit-Theorem.md#beyond-identical-laws-lindebergs-condition).

**Linear congruential generator (LCG)**
The pseudo-random generator $x_{n+1} = (ax_n + c) \bmod m$, with modulus $m$, multiplier $a$ and increment $c$. Its successive outputs lie on a few lattice planes, as RANDU showed badly.
See [Chapter 19](19-Randomness-in-Computing.md#linear-congruential-generators).

**Linearity of expectation**
$E[aX + bY] = aE[X] + bE[Y]$ for any random variables with finite means, independent or not. It is the most used fact in the subject.
See [Chapter 6](06-Expectation-and-Variance.md#62-linearity).

**Little's law**
In a stable system, the average number present $L$, the arrival rate $\lambda$ and the average time spent $W$ satisfy $L = \lambda W$.
See [Chapter 14](14-Poisson-Processes.md#146-queues-the-mm1-queue).

**Loop-erased random walk**
A random walk with its loops erased in the order they are made, leaving a self-avoiding path. In the plane it converges to $\text{SLE}_2$.
See [Chapter 20](20-Where-Probability-Goes.md#the-theorems).

## M

**M/M/1 queue**
One server, Poisson arrivals at rate $\lambda$ and exponential service at rate $\mu$. When $\rho = \lambda/\mu < 1$ the number present has stationary law $(1 - \rho)\rho^n$, with mean $\rho/(1 - \rho)$.
See [Chapter 14](14-Poisson-Processes.md#146-queues-the-mm1-queue).

**Marginal distribution**
The law of one variable alone, found from a joint law by summing (or integrating) out the other: $p_X(x) = \sum_y p(x, y)$. The name comes from totals written in the margins of a table.
See [Chapter 11](11-Joint-Distributions.md#111-joint-marginal-and-conditional-laws).

**Markov chain**
A sequence $X_0, X_1, \dots$ in a state space with the Markov property. A time-homogeneous chain is described by its transition matrix and initial distribution.
See [Chapter 13](13-Markov-Chains.md#131-transition-matrices).

**Markov chain Monte Carlo (MCMC)**
Sampling from a complicated distribution by running a Markov chain that has it as its stationary distribution, such as the Metropolis algorithm or the Gibbs sampler.
See [Chapter 19](19-Randomness-in-Computing.md#193-markov-chain-monte-carlo).

**Markov property**
Given the present, the past is irrelevant for the future: $P(X_{n+1} = j \mid X_n = i, X_{n-1}, \dots, X_0) = P(X_{n+1} = j \mid X_n = i)$.
See [Chapter 13](13-Markov-Chains.md#131-transition-matrices).

**Markov's inequality**
If $X \ge 0$ and $a > 0$, then $P(X \ge a) \le E[X]/a$. It is crude but always available, and it is the root of Chebyshev and Chernoff bounds.
See [Chapter 7](07-Inequalities-and-the-Law-of-Large-Numbers.md#71-markov-and-chebyshev).

**Martingale**
An adapted sequence $M_n$ with $E|M_n| < \infty$ and $E[M_{n+1} \mid \mathcal{F}_n] = M_n$: a fair game, whose expected next value given the past is the present value.
See [Chapter 15](15-Random-Walks-and-Martingales.md#152-martingales).

**Martingale convergence theorem**
A martingale with $\sup_n E|M_n| < \infty$ (in particular, a non-negative martingale) converges almost surely to a finite limit (Doob). The proof counts upcrossings.
See [Chapter 15](15-Random-Walks-and-Martingales.md#155-martingale-convergence).

**Martingale transform**
The winnings $W_n = \sum_{k \le n}H_k(S_k - S_{k-1})$ of a betting strategy with predictable stakes $H$. If $S$ is a martingale, so is $W$: no betting system beats a fair game.
See [Chapter 15](15-Random-Walks-and-Martingales.md#154-no-betting-system-beats-a-fair-game).

**Maximum entropy principle**
Among distributions satisfying the known constraints, choose the one with the largest entropy. With no constraints on finitely many values this is the uniform law; with given mean and variance on the line it is the normal.
See [Chapter 18](18-Information-and-Entropy.md#182-properties-of-entropy).

**Mean**
See *expected value*.
See [Chapter 6](06-Expectation-and-Variance.md#61-expected-value).

**Measurable function**
A function $X : \Omega \to \mathbb{R}$ with $\{X \in B\} \in \mathcal{F}$ for every Borel set $B$. In measure-theoretic probability a random variable is exactly this.
See [Chapter 17](17-Measure-Theoretic-Probability.md#measurable-functions).

**Measure**
A function $\mu$ on a $\sigma$-algebra with $\mu(A) \ge 0$, $\mu(\varnothing) = 0$, and countable additivity. A probability measure also has $\mu(\Omega) = 1$.
See [Chapter 17](17-Measure-Theoretic-Probability.md#measures).

**Median**
A number $m$ with $P(X \le m) \ge 1/2$ and $P(X \ge m) \ge 1/2$; for a continuous cdf, $F(m) = 1/2$. It is the $1/2$-quantile.
See [Chapter 9](09-Continuous-Random-Variables.md#medians-and-quantiles).

**Memoryless property**
$P(T > s + t \mid T > s) = P(T > t)$: having waited does not change the remaining wait. The exponential law (continuous) and the geometric law (discrete) are the only memoryless laws.
See [Chapter 9](09-Continuous-Random-Variables.md#the-exponential-law-waiting-without-memory).

**Mersenne Twister**
A widely used pseudo-random generator with period $2^{19937} - 1$, the default in Python's `random` module. It passes statistical tests but is not cryptographically secure.
See [Chapter 19](19-Randomness-in-Computing.md#modern-generators-honestly).

**Method of least squares**
Fitting a model by minimising the sum of squared errors. Gauss justified it by assuming normal errors, and in turn used it to argue for the normal law.
See [Chapter 10](10-The-Normal-Distribution.md#reason-3-least-squares-and-maximum-entropy).

**Method of moments**
Proving convergence of distributions by showing that all moments converge. It proves Wigner's semicircle law by counting closed walks.
See [Chapter 20](20-Where-Probability-Goes.md#why-the-catalan-numbers-appear).

**Metropolis algorithm**
To sample from weights $w(x)$, propose a move $x \to y$ with a symmetric proposal and accept it with probability $\min(1, w(y)/w(x))$, otherwise stay. Only ratios of weights are needed, so the normalising constant cancels.
See [Chapter 19](19-Randomness-in-Computing.md#the-metropolis-algorithm).

**Metropolis-Hastings algorithm**
The extension of Metropolis to non-symmetric proposals $q$: accept with probability $\min\big(1, \frac{w(y)q(y, x)}{w(x)q(x, y)}\big)$. Detailed balance makes $w$ stationary.
See [Chapter 19](19-Randomness-in-Computing.md#the-metropolis-algorithm).

**Miller-Rabin test**
A randomized primality test: for an odd composite $n$, at most a quarter of the bases pass, so $k$ independent rounds wrongly say "prime" with probability at most $4^{-k}$. Its error is one-sided.
See [Chapter 19](19-Randomness-in-Computing.md#primality-miller-rabin).

**Mills' ratio**
Bounds on the normal tail: for $z > 0$, $(1/z - 1/z^3)\varphi(z) \le 1 - \Phi(z) \le \varphi(z)/z$. Normal tails fall off like $e^{-z^2/2}/z$.
See [Chapter 10](10-The-Normal-Distribution.md#how-thin-are-the-tails).

**Mixing time**
How many steps a Markov chain needs before its distribution is close (in total variation) to the stationary one. Bounding it is often the hard part of MCMC.
See [Chapter 19](19-Randomness-in-Computing.md#how-long-to-run-honestly).

**Mode**
A most likely value of a distribution. For the binomial it is $\lfloor (n + 1)p \rfloor$.
See [Chapter 5](05-Discrete-Random-Variables.md#binomial-how-many-successes-in-n-trials).

**Moment generating function (mgf)**
$M(t) = E[e^{tX}]$. Its derivatives at 0 give the moments, the mgf of an independent sum is the product of mgfs, and when finite near 0 it determines the law.
See [Chapter 8](08-Generating-Functions-in-Probability.md#84-moment-generating-functions).

**Moments**
The numbers $E[X^k]$, $k = 1, 2, \dots$. The first is the mean; the second, with the first, gives the variance.
See [Chapter 8](08-Generating-Functions-in-Probability.md#84-moment-generating-functions).

**Monotone convergence theorem**
If $0 \le X_1 \le X_2 \le \cdots$ and $X_n \to X$, then $E[X_n] \to E[X]$.
See [Chapter 17](17-Measure-Theoretic-Probability.md#expectation-as-an-integral).

**Monotonicity (of probability)**
If $A \subseteq B$, then $P(A) \le P(B)$, and $P(B \setminus A) = P(B) - P(A)$.
See [Chapter 1](01-What-Probability-Is.md#first-consequences).

**Monte Carlo algorithm**
A randomized algorithm that runs in fixed time but may give a wrong answer with small probability, such as the Miller-Rabin test or Freivalds' check.
See [Chapter 19](19-Randomness-in-Computing.md#192-randomized-algorithms).

**Monte Carlo estimation**
Estimating a number as the average of many random samples, such as $\pi$ from the fraction of random points in a square that land in a quarter circle. The error shrinks like $1/\sqrt n$.
See [Chapter 7](07-Inequalities-and-the-Law-of-Large-Numbers.md#75-monte-carlo-estimation-of-pi).

**Monty Hall problem**
A prize is behind one of three doors; you pick one, the host, who knows, opens another door showing no prize and offers a switch. Under the standard rules switching wins with probability $2/3$; change the host's rules and the answer changes.
See [Chapter 3](03-Conditional-Probability-and-Independence.md#35-the-monty-hall-problem).

**Multiplication rule**
$P(A \cap B) = P(A)\,P(B \mid A)$. For joint densities, $f(x, y) = f_X(x)f_{Y \mid X}(y \mid x)$.
See [Chapter 3](03-Conditional-Probability-and-Independence.md#32-the-multiplication-rule-and-trees).

**Multivariate normal**
A random vector $\mathbf{X}$ in $\mathbb{R}^n$ of the form $\boldsymbol\mu + A\mathbf{Z}$ with $\mathbf{Z}$ a vector of independent standard normals, so that every linear combination of its coordinates is normal. It is fixed by its mean vector and covariance matrix.
See [Chapter 11](11-Joint-Distributions.md#building-it).

**Mutual information**
$I(X; Y) = H(Y) - H(Y \mid X)$, how much knowing $X$ reduces the uncertainty in $Y$. It is symmetric in $X$ and $Y$, and 0 exactly when they are independent.
See [Chapter 18](18-Information-and-Entropy.md#joint-and-conditional-entropy).

**Mutually exclusive**
See *disjoint events*.
See [Chapter 1](01-What-Probability-Is.md#set-language-not-and-or).

## N

**$n$-step transition probability**
$p^{(n)}_{ij} = P(X_n = j \mid X_0 = i)$, the $(i, j)$ entry of $P^n$.
See [Chapter 13](13-Markov-Chains.md#132-n-step-probabilities).

**Natural frequencies**
Stating a problem as counts in an imagined population ("of 10,000 people, 100 are ill, 90 of them test positive...") instead of conditional probabilities. It makes Bayes' theorem easy to apply correctly.
See [Chapter 4](04-Bayes-Theorem.md#with-natural-frequencies).

**Negative binomial distribution**
The number of trials needed for the $r$-th success: $P(X = k) = \binom{k-1}{r-1}p^r q^{k-r}$ for $k = r, r + 1, \dots$. It is a sum of $r$ independent geometrics, with mean $r/p$.
See [Chapter 5](05-Discrete-Random-Variables.md#negative-binomial-how-long-until-the-r-th-success).

**Next-bit test**
A generator passes if no efficient algorithm, given the first $k$ output bits, predicts the next with probability noticeably above $1/2$. Yao (1982) showed this is equivalent to passing every efficient statistical test.
See [Chapter 19](19-Randomness-in-Computing.md#a-different-requirement).

**Non-homogeneous Poisson process**
A Poisson process whose rate $\lambda(t)$ varies with time: the count in $(s, t]$ is Poisson with mean $\int_s^t \lambda(u)\,du$, with independent counts on disjoint intervals.
See [Chapter 14](14-Poisson-Processes.md#147-radioactive-decay).

**Normal distribution**
$X \sim N(\mu, \sigma^2)$ has density $\frac{1}{\sigma\sqrt{2\pi}}e^{-(x - \mu)^2/(2\sigma^2)}$, the bell curve with mean $\mu$ and variance $\sigma^2$. Sums of independent normals are normal.
See [Chapter 10](10-The-Normal-Distribution.md#101-the-bell-curve-and-the-gaussian-integral).

**Normal number**
A number in $[0, 1]$ whose digits, in every base, contain every finite block with the long-run frequency it would have if the digits were random. Borel proved that almost every number is normal.
See [Chapter 12](12-The-Central-Limit-Theorem.md#borels-normal-numbers).

## O

**Odds**
The odds of $H$ are $P(H)/P(H^c)$; probability $p$ corresponds to odds $p/(1 - p)$. Bayes' theorem is simplest in odds form.
See [Chapter 4](04-Bayes-Theorem.md#odds).

**Odds form of Bayes' theorem**
Posterior odds equal the likelihood ratio times prior odds: $\frac{P(H \mid E)}{P(H^c \mid E)} = \frac{P(E \mid H)}{P(E \mid H^c)}\cdot\frac{P(H)}{P(H^c)}$. On a log scale, independent pieces of evidence add.
See [Chapter 4](04-Bayes-Theorem.md#43-the-odds-form).

**Offspring distribution**
In a branching process, the law $p_0, p_1, p_2, \dots$ of the number of children of each individual.
See [Chapter 8](08-Generating-Functions-in-Probability.md#83-branching-processes).

**Open cluster**
In percolation, the set of vertices a given vertex can reach along open bonds.
See [Chapter 20](20-Where-Probability-Goes.md#the-model).

**Optional stopping theorem**
For a martingale $M$ and stopping time $T$, $E[M_T] = E[M_0]$ if $T$ is bounded, or if $T$ is finite and the stopped process is bounded, or if $E[T] < \infty$ and the increments are bounded. It gives gambler's ruin in a line.
See [Chapter 15](15-Random-Walks-and-Martingales.md#153-optional-stopping).

**Outcome**
One complete, detailed result of an experiment: a single point of the sample space.
See [Chapter 1](01-What-Probability-Is.md#outcomes-and-the-sample-space).

## P

**$p$-quantile**
A number $x_p$ with $F(x_p) = p$; in general $x_p = \min\{x : F(x) \ge p\}$. The median, quartiles and percentiles are quantiles.
See [Chapter 9](09-Continuous-Random-Variables.md#medians-and-quantiles).

**PageRank**
The stationary distribution of a random surfer who follows a random link with probability $d$ and otherwise jumps to a uniformly random page. A page is important if important pages link to it.
See [Chapter 13](13-Markov-Chains.md#pagerank).

**Pairwise independent**
Events are pairwise independent if every two of them are independent. This is weaker than mutual independence.
See [Chapter 3](03-Conditional-Probability-and-Independence.md#many-events).

**Pareto law**
The law with $P(X > x) = x^{-\alpha}$ for $x \ge 1$. It has a finite mean only when $\alpha > 1$ and a finite variance only when $\alpha > 2$.
See [Chapter 12](12-The-Central-Limit-Theorem.md#infinite-variance-with-a-finite-mean).

**Partition**
Events $B_1, \dots, B_n$ that are pairwise disjoint and whose union is $\Omega$: exactly one of them happens.
See [Chapter 1](01-What-Probability-Is.md#partitions).

**Percolation**
The study of random subgraphs of a lattice, each bond (or site) open independently with probability $p$, and of when an infinite open cluster appears.
See [Chapter 20](20-Where-Probability-Goes.md#201-percolation).

**Period (of a state)**
$d(i) = \gcd\{n \ge 1 : p^{(n)}_{ii} > 0\}$, the greatest common divisor of the possible return times. All states in a class share the same period.
See [Chapter 13](13-Markov-Chains.md#133-classification-of-states).

**Phase transition**
A sudden change in the large-scale behaviour of a random system as a parameter crosses a threshold, like the giant component appearing in $G(n, c/n)$ at $c = 1$ or percolation at $p_c$.
See [Chapter 19](19-Randomness-in-Computing.md#the-giant-component).

**Pinsker's inequality**
Total variation distance is controlled by the Kullback-Leibler divergence: $\|p - q\|_{TV} \le \sqrt{\frac{\ln 2}{2}D(p \,\|\, q)}$, with $D$ in bits.
See [Chapter 18](18-Information-and-Entropy.md#186-the-kullback-leibler-divergence).

**Poisson distribution**
$X \sim \text{Poisson}(\lambda)$ has $P(X = k) = e^{-\lambda}\lambda^k/k!$ for $k = 0, 1, 2, \dots$, with mean and variance both $\lambda$. It counts rare events with many opportunities.
See [Chapter 5](05-Discrete-Random-Variables.md#poisson-rare-events).

**Poisson limit theorem**
If $n \to \infty$ and $p \to 0$ with $np \to \lambda$, then $\text{Bin}(n, p)$ probabilities converge to Poisson($\lambda$) probabilities.
See [Chapter 5](05-Discrete-Random-Variables.md#poisson-rare-events).

**Poisson process**
A counting process with independent increments in which the count in any interval of length $t$ is Poisson with mean $\lambda t$. Equivalently, its interarrival times are independent Exp($\lambda$).
See [Chapter 14](14-Poisson-Processes.md#142-three-equivalent-definitions).

**Pólya's theorem**
The symmetric simple random walk on $\mathbb{Z}^d$ returns to its start with probability 1 if $d = 1$ or $2$, and with probability less than 1 if $d \ge 3$.
See [Chapter 8](08-Generating-Functions-in-Probability.md#85-random-walks-on-a-line).

**Pólya's urn**
An urn with red and blue balls; each draw, return the ball with another of the same colour. The fraction of red is a martingale, and converges to a random limit (uniform on $[0, 1]$ when starting from one of each).
See [Chapter 15](15-Random-Walks-and-Martingales.md#applications).

**Posterior**
$P(B_j \mid A)$, the probability of hypothesis $j$ after the evidence.
See [Chapter 4](04-Bayes-Theorem.md#the-vocabulary).

**Power method**
Computing a stationary distribution by starting anywhere and multiplying by the transition matrix repeatedly. It is how PageRank is computed.
See [Chapter 13](13-Markov-Chains.md#pagerank).

**Power set**
The collection $2^\Omega$ of all subsets of $\Omega$, the largest $\sigma$-algebra. For finite or countable $\Omega$ it is the usual choice of events.
See [Chapter 17](17-Measure-Theoretic-Probability.md#sigma-algebras).

**Predictable**
A sequence of stakes $H_n$ is predictable if each $H_n$ is decided by $X_1, \dots, X_{n-1}$, before the round it bets on.
See [Chapter 15](15-Random-Walks-and-Martingales.md#154-no-betting-system-beats-a-fair-game).

**Prefix code**
A code in which no codeword is the beginning of another, so a stream of bits can be decoded as it arrives.
See [Chapter 18](18-Information-and-Entropy.md#prefix-codes).

**Prevalence**
See *base rate*.
See [Chapter 4](04-Bayes-Theorem.md#the-base-rate-decides).

**Prior**
$P(B_j)$, the probability of hypothesis $j$ before the evidence.
See [Chapter 4](04-Bayes-Theorem.md#the-vocabulary).

**Probability**
A rule $P$ giving each event a number, satisfying the three axioms: non-negativity, normalisation $P(\Omega) = 1$, and countable additivity.
See [Chapter 1](01-What-Probability-Is.md#13-the-axioms-and-their-first-consequences).

**Probability generating function (pgf)**
$G_X(s) = E[s^X] = \sum_k P(X = k)s^k$ for $X$ with values in $\{0, 1, 2, \dots\}$. It determines the law, gives the mean as $G'(1)$, and turns independent sums into products.
See [Chapter 8](08-Generating-Functions-in-Probability.md#81-probability-generating-functions).

**Probability integral transform**
If $X$ has a continuous cdf $F$, then $F(X)$ is Uniform(0, 1). It is the inverse transform method read backwards.
See [Chapter 9](09-Continuous-Random-Variables.md#making-any-law-from-a-uniform-one).

**Probability mass function (pmf)**
$p_X(x) = P(X = x)$ for a discrete random variable $X$.
See [Chapter 5](05-Discrete-Random-Variables.md#51-random-variables-and-distributions).

**Probability measure**
A measure $P$ with $P(\Omega) = 1$.
See [Chapter 17](17-Measure-Theoretic-Probability.md#measures).

**Probability space**
The triple $(\Omega, \mathcal{F}, P)$: a sample space, a $\sigma$-algebra of events, and a probability measure on it.
See [Chapter 17](17-Measure-Theoretic-Probability.md#measures).

**Problem of points**
How to divide the stakes fairly when a game of several rounds is stopped early. Pascal and Fermat solved it in 1654, starting the mathematics of probability.
See [Chapter 1](01-What-Probability-Is.md#14-a-short-honest-history).

**Prosecutor's fallacy**
Confusing $P(\text{evidence} \mid \text{innocent})$ with $P(\text{innocent} \mid \text{evidence})$. A one-in-a-million match does not mean a one-in-a-million chance of innocence; the Sally Clark case is the tragic example.
See [Chapter 4](04-Bayes-Theorem.md#44-the-prosecutors-fallacy).

**Pseudo-random**
A deterministic sequence that passes the statistical tests a truly random sequence would pass.
See [Chapter 19](19-Randomness-in-Computing.md#random-looking-not-random).

**Pseudo-random number generator (PRNG)**
An algorithm with a hidden state, a rule updating the state and a rule turning it into output. You choose the starting state, the seed; the same seed gives the same sequence.
See [Chapter 19](19-Randomness-in-Computing.md#random-looking-not-random).

**Put-call parity**
Call price minus put price equals $S_0 - Ke^{-rT}$, since $\max(S - K, 0) - \max(K - S, 0) = S - K$.
See [Chapter 16](16-Brownian-Motion.md#166-a-first-look-at-stochastic-calculus-and-black-scholes).

## Q

**Quadratic variation**
For Brownian motion on $[0, t]$, the sum of squared increments over a fine partition tends to $t$, not 0. This is the precise sense of $(dB_t)^2 = dt$ and the source of the extra term in Itô's formula.
See [Chapter 16](16-Brownian-Motion.md#163-scaling-and-roughness).

**Quantile**
See *$p$-quantile*.
See [Chapter 5](05-Discrete-Random-Variables.md#53-the-cumulative-distribution-function).

**Quartiles**
The $1/4$ and $3/4$ quantiles of a distribution; with the median they cut it into four equal parts.
See [Chapter 9](09-Continuous-Random-Variables.md#medians-and-quantiles).

**Quicksort (randomized)**
Sort by choosing a pivot uniformly at random, splitting the others around it, and recursing. On every input its expected number of comparisons is $2n\ln n + O(n)$.
See [Chapter 19](19-Randomness-in-Computing.md#randomized-quicksort).

## R

**Random graph**
See *Erdős-Rényi random graph*.
See [Chapter 19](19-Randomness-in-Computing.md#194-random-graphs).

**Random sum**
$S_N = X_1 + \cdots + X_N$ with a random number $N$ of terms, independent of the iid $X_i$. Its pgf is $G_N(G_X(s))$ and its mean is $E[N]E[X]$ (Wald's identity).
See [Chapter 8](08-Generating-Functions-in-Probability.md#random-sums).

**Random surfer**
The Markov chain behind PageRank: follow a random link from the current page with probability $d$, otherwise jump to a uniformly random page.
See [Chapter 13](13-Markov-Chains.md#pagerank).

**Random variable**
A function $X : \Omega \to \mathbb{R}$ assigning a number to each outcome. In the measure-theoretic setting it must be measurable.
See [Chapter 5](05-Discrete-Random-Variables.md#51-random-variables-and-distributions).

**Random walk on a graph**
From each vertex, move to a uniformly chosen neighbour: $p_{ij} = 1/d_i$ for neighbours $j$, where $d_i$ is the degree. Its stationary distribution is proportional to degree.
See [Chapter 13](13-Markov-Chains.md#detailed-balance-and-random-walks-on-graphs).

**Randomisation**
Letting chance (such as a coin) decide who gets a treatment, so the treatment is independent of every possible confounder.
See [Chapter 11](11-Joint-Distributions.md#correlation-is-not-causation).

**Randomized algorithm**
An algorithm that flips coins as it runs. Its probabilities are over its own coins, not over the input, so it must do well on every input.
See [Chapter 19](19-Randomness-in-Computing.md#192-randomized-algorithms).

**Randomness extractor**
A procedure that turns weakly random bits into nearly uniform ones. Von Neumann's trick is the simplest.
See [Chapter 19](19-Randomness-in-Computing.md#extracting-fair-bits-from-a-biased-source).

**Record**
Position $i$ in a sequence is a record if its value is larger than every value before it. For iid continuous values, position $i$ is a record with probability $1/i$.
See [Chapter 6](06-Expectation-and-Variance.md#65-the-indicator-method).

**Recurrent state**
A state to which the chain, started there, returns with probability 1. Otherwise it is transient. Recurrence is a class property.
See [Chapter 13](13-Markov-Chains.md#133-classification-of-states).

**Reflection principle**
A path from one level to another that touches a barrier can be reflected after its first touch, giving a one-to-one correspondence of paths. For Brownian motion, $P(\max_{s \le t}B_s \ge a) = 2P(B_t \ge a)$.
See [Chapter 15](15-Random-Walks-and-Martingales.md#the-reflection-principle).

**Regression line**
The line $E[Y \mid X = x]$ for a bivariate normal: in standard units, $y = \rho x$.
See [Chapter 11](11-Joint-Distributions.md#conditional-laws-and-regression-to-the-mean).

**Regression to the mean**
Because $|\rho| < 1$, an extreme value of one variable predicts a less extreme value of the other, in standard units. Galton found it comparing parents' and children's heights (1886).
See [Chapter 11](11-Joint-Distributions.md#conditional-laws-and-regression-to-the-mean).

**Relative entropy**
See *Kullback-Leibler divergence*.
See [Chapter 18](18-Information-and-Entropy.md#186-the-kullback-leibler-divergence).

**Renewal process**
A counting process whose gaps between events are iid with a general law. The Poisson process is the case of exponential gaps.
See [Chapter 14](14-Poisson-Processes.md#145-the-inspection-paradox).

**Replication**
Building a portfolio of stock and cash whose value always equals that of an option. The option's price must be the cost of the portfolio.
See [Chapter 16](16-Brownian-Motion.md#166-a-first-look-at-stochastic-calculus-and-black-scholes).

**Reversible chain**
A Markov chain with a distribution satisfying detailed balance. Run in equilibrium, a film of it looks the same forwards and backwards.
See [Chapter 13](13-Markov-Chains.md#detailed-balance-and-random-walks-on-graphs).

**Riffle shuffle**
Cut the deck in two and interleave the halves. Modelled by Gilbert, Shannon and Reeds, it needs about 7 shuffles to mix 52 cards.
See [Chapter 13](13-Markov-Chains.md#how-many-shuffles-mix-a-deck).

**Rising sequence**
A maximal run of consecutive face values $v, v + 1, \dots$ appearing in increasing positions in a permutation. The number of rising sequences gives the exact law of a deck after $k$ riffle shuffles.
See [Chapter 13](13-Markov-Chains.md#how-many-shuffles-mix-a-deck).

**Risk-neutral model**
The stock model with the drift $\mu$ replaced by the interest rate $r$. Option prices are discounted expected payoffs under it.
See [Chapter 16](16-Brownian-Motion.md#166-a-first-look-at-stochastic-calculus-and-black-scholes).

**Rule of 68-95-99.7**
A normal variable lies within 1, 2 and 3 standard deviations of its mean with probabilities about 68%, 95% and 99.7%. It is usually called the 68-95-99.7 rule.
See [Chapter 10](10-The-Normal-Distribution.md#103-the-68-95-997-rule).

**Rule of succession**
Laplace's rule: after $s$ successes in $n$ trials with a uniform prior on the unknown success probability, the chance the next trial succeeds is $(s + 1)/(n + 2)$.
See [Chapter 4](04-Bayes-Theorem.md#many-hypotheses-how-biased-is-this-coin).

**Run**
A maximal block of equal results in a sequence of tosses; $HHTHHHT$ has 4 runs. The indicator method gives the expected number of runs as $1 + (n - 1)/2$ for $n$ fair tosses.
See [Chapter 6](06-Expectation-and-Variance.md#65-the-indicator-method).

## S

**Sample mean**
$\bar X_n = (X_1 + \cdots + X_n)/n$. For iid terms with mean $\mu$ and variance $\sigma^2$ it has mean $\mu$ and variance $\sigma^2/n$.
See [Chapter 6](06-Expectation-and-Variance.md#64-covariance-and-the-variance-of-a-sum).

**Sample space**
The set $\Omega$ of all outcomes of an experiment. Every possible result must correspond to exactly one outcome.
See [Chapter 1](01-What-Probability-Is.md#outcomes-and-the-sample-space).

**Sampling with and without replacement**
Drawing $k$ of $N$ items, returning each before the next draw or not. Ordered draws give $N^k$ or $N!/(N - k)!$ sequences; unordered draws without replacement give $\binom{N}{k}$ equally likely sets.
See [Chapter 2](02-Counting-and-Equally-Likely-Outcomes.md#23-sampling-with-and-without-replacement).

**Sanov's theorem**
The probability that the empirical distribution of $n$ samples from $q$ looks like $p$ is about $2^{-nD(p \| q)}$: the KL divergence measures how rare a deviation is.
See [Chapter 18](18-Information-and-Entropy.md#divergence-measures-how-rare-a-deviation-is).

**Scaling (of Brownian motion)**
For fixed $c > 0$, $\frac{1}{\sqrt c}B_{ct}$ is again a standard Brownian motion. Time scales like space squared.
See [Chapter 16](16-Brownian-Motion.md#162-definition-and-properties).

**Schramm-Loewner evolution (SLE)**
A one-parameter family $\text{SLE}_\kappa$ of random planar curves, the only ones with conformal invariance and the domain Markov property. They describe the scaling limits of critical interfaces.
See [Chapter 20](20-Where-Probability-Goes.md#schramms-insight).

**Schwartz-Zippel lemma**
A nonzero polynomial of degree $d$ vanishes at a point chosen uniformly from $S^n$ with probability at most $d/|S|$. It lets polynomial identities be checked by random evaluation.
See [Chapter 19](19-Randomness-in-Computing.md#checking-a-product-freivalds-algorithm).

**Seed**
The starting state chosen for a pseudo-random generator. The same seed gives the same sequence.
See [Chapter 19](19-Randomness-in-Computing.md#random-looking-not-random).

**Self-avoiding walk**
A lattice path that never revisits a vertex. Counting such paths bounds $p_c$ in percolation; how far a random one goes is open in dimensions 2 to 4.
See [Chapter 20](20-Where-Probability-Goes.md#bounds-by-counting-paths).

**Self-duality**
The square lattice's dual is another square lattice, and an open bond corresponds to a closed dual bond, so $p$ and $1 - p$ swap roles. It is why $p_c = 1/2$ for bond percolation on $\mathbb{Z}^2$.
See [Chapter 20](20-Where-Probability-Goes.md#the-exact-answer).

**Self-information**
See *surprise*.
See [Chapter 18](18-Information-and-Entropy.md#surprise).

**Semicircle distribution**
The law with density $\frac{1}{2\pi}\sqrt{4 - x^2}$ on $[-2, 2]$. Wigner's semicircle law says it is the limit of the eigenvalue distribution of large Wigner matrices.
See [Chapter 20](20-Where-Probability-Goes.md#wigners-semicircle).

**Sensitivity**
The probability that a test is positive for someone who has the condition, $P(+ \mid \text{ill})$.
See [Chapter 4](04-Bayes-Theorem.md#42-medical-tests-and-base-rates).

**Shannon limit**
The smallest energy per bit relative to noise, about $-1.59$ decibels, with which reliable communication over a Gaussian channel is possible at all.
See [Chapter 18](18-Information-and-Entropy.md#capacity).

**Shannon's channel coding theorem**
Over a noisy channel of capacity $C$, any rate below $C$ can be achieved with error probability as small as desired, and no rate above $C$ can.
See [Chapter 18](18-Information-and-Entropy.md#capacity).

**Shannon's source coding theorem**
The average number of bits per symbol needed to code a long sequence of independent symbols tends to the entropy $H$: compression below $H$ is impossible and $H$ can be approached.
See [Chapter 18](18-Information-and-Entropy.md#the-asymptotic-equipartition-property).

**Shannon-Hartley formula**
The capacity of a channel with bandwidth $B$ and signal-to-noise ratio $S/N$ is $C = B\log_2(1 + S/N)$ bits per second.
See [Chapter 18](18-Information-and-Entropy.md#capacity).

**Sigma-algebra ($\sigma$-algebra)**
A collection $\mathcal{F}$ of subsets of $\Omega$ containing $\Omega$ and closed under complements and countable unions. Its members are the events, the sets that get a probability.
See [Chapter 17](17-Measure-Theoretic-Probability.md#sigma-algebras).

**Simple function**
A random variable taking finitely many values, $\sum a_i\mathbf{1}_{A_i}$. Its expectation is $\sum a_iP(A_i)$, and the Lebesgue integral is built from these.
See [Chapter 17](17-Measure-Theoretic-Probability.md#expectation-as-an-integral).

**Simple random walk**
$S_n = X_1 + \cdots + X_n$ with independent steps $\pm1$, taking $+1$ with probability $p$; it is symmetric when $p = 1/2$.
See [Chapter 15](15-Random-Walks-and-Martingales.md#151-the-simple-random-walk).

**Simulated annealing**
Running the Metropolis algorithm on weights $e^{-E(x)/T}$ while slowly lowering the temperature $T$, to search for configurations of low energy.
See [Chapter 19](19-Randomness-in-Computing.md#how-long-to-run-honestly).

**Site percolation**
Percolation in which vertices, not bonds, are open independently with probability $p$. On the triangular lattice $p_c = 1/2$ exactly; on the square lattice $p_c \approx 0.5927$.
See [Chapter 20](20-Where-Probability-Goes.md#the-exact-answer).

**Specificity**
The probability that a test is negative for someone who does not have the condition, $P(- \mid \text{well})$.
See [Chapter 4](04-Bayes-Theorem.md#42-medical-tests-and-base-rates).

**St Petersburg paradox**
A game pays $2^k$ units if the first head comes on toss $k$. Its expected value is infinite, yet nobody would pay much to play; utility, finite wealth, and the gap between mean and typical outcome each explain part.
See [Chapter 6](06-Expectation-and-Variance.md#66-the-st-petersburg-paradox).

**Stable law**
A law whose independent copies add up to a scaled and shifted copy of itself, such as the normal and Cauchy laws. Stable laws are the only possible limits of rescaled iid sums (the generalised CLT).
See [Chapter 12](12-The-Central-Limit-Theorem.md#infinite-variance-with-a-finite-mean).

**Standard deviation**
$\sigma = \sqrt{\operatorname{Var}(X)}$, the spread of $X$ in the same units as $X$.
See [Chapter 6](06-Expectation-and-Variance.md#63-variance-and-standard-deviation).

**Standard normal**
$Z \sim N(0, 1)$, with density $\varphi(z) = \frac{1}{\sqrt{2\pi}}e^{-z^2/2}$ and cdf $\Phi$.
See [Chapter 10](10-The-Normal-Distribution.md#the-density).

**Standardising**
Replacing $X$ by $(X - \mu)/\sigma$, which has mean 0 and variance 1. If $X \sim N(\mu, \sigma^2)$, then $(X - \mu)/\sigma \sim N(0, 1)$, so one table serves every normal.
See [Chapter 10](10-The-Normal-Distribution.md#102-standardising-and-tables).

**State space**
The set $S$ of possible values (states) of a Markov chain or other process.
See [Chapter 13](13-Markov-Chains.md#131-transition-matrices).

**Stationary distribution**
A probability vector $\pi$ with $\pi P = \pi$: one step of the chain leaves it unchanged. A finite irreducible chain has exactly one, with $\pi_i = 1/E_i[T_i]$.
See [Chapter 13](13-Markov-Chains.md#134-stationary-distributions-and-convergence).

**Stirling's formula**
$n! \sim \sqrt{2\pi n}\,(n/e)^n$, the ratio tending to 1. It is the main tool in the de Moivre-Laplace theorem and in random walk return probabilities.
See [Chapter 10](10-The-Normal-Distribution.md#the-idea-of-the-proof).

**Stochastic matrix**
A square matrix with non-negative entries and rows summing to 1, such as a transition matrix.
See [Chapter 13](13-Markov-Chains.md#131-transition-matrices).

**Stopping time**
A random time $T$ such that whether $T = n$ is decided by $X_1, \dots, X_n$: no peeking into the future. "The first time the walk hits 10" is one; "the time of the maximum" is not.
See [Chapter 15](15-Random-Walks-and-Martingales.md#153-optional-stopping).

**Strong law of large numbers**
For iid variables with finite mean $\mu$, $\bar X_n \to \mu$ with probability 1 (Kolmogorov, 1933). The book proves it under a finite fourth moment, with the first Borel-Cantelli lemma.
See [Chapter 12](12-The-Central-Limit-Theorem.md#125-the-strong-law).

**Strong Markov property**
The Markov property holds at stopping times too: after a stopping time $T$, the process starts afresh from where it is, independently of the past before $T$.
See [Chapter 13](13-Markov-Chains.md#133-classification-of-states).

**Subjective view**
See *Bayesian view*.
See [Chapter 1](01-What-Probability-Is.md#view-3-degree-of-belief).

**Submartingale**
An adapted sequence with $E[M_{n+1} \mid \mathcal{F}_n] \ge M_n$: a favourable game.
See [Chapter 15](15-Random-Walks-and-Martingales.md#152-martingales).

**Supermartingale**
An adapted sequence with $E[M_{n+1} \mid \mathcal{F}_n] \le M_n$: an unfavourable game, like every casino game from the player's side.
See [Chapter 15](15-Random-Walks-and-Martingales.md#152-martingales).

**Superposition**
The sum of independent Poisson processes with rates $\lambda$ and $\mu$ is a Poisson process with rate $\lambda + \mu$.
See [Chapter 14](14-Poisson-Processes.md#144-splitting-and-merging).

**Surprise**
$s(p) = \log_2(1/p)$ bits, the information gained by seeing an event of probability $p$. It is the only decreasing, continuous measure additive for independent events, up to the unit.
See [Chapter 18](18-Information-and-Entropy.md#surprise).

**Survival function**
$G(t) = P(T > t)$, the chance of surviving past time $t$; it is $1 - F(t)$.
See [Chapter 9](09-Continuous-Random-Variables.md#the-exponential-law-waiting-without-memory).

**Swamping**
How the proportion of heads tends to $1/2$ after an early excess: not by compensation, but because later tosses vastly outnumber the early ones.
See [Chapter 7](07-Inequalities-and-the-Law-of-Large-Numbers.md#73-what-the-law-does-and-does-not-say).

## T

**Tail event**
An event that, for every $n$, is decided by $X_{n+1}, X_{n+2}, \dots$ alone, such as "the averages converge". Tail events form the tail $\sigma$-algebra $\bigcap_n\sigma(X_{n+1}, X_{n+2}, \dots)$.
See [Chapter 17](17-Measure-Theoretic-Probability.md#176-kolmogorovs-zero-one-law).

**Tail sum formula**
For $X$ with values in $\{0, 1, 2, \dots\}$, $E[X] = \sum_{k \ge 1}P(X \ge k)$; for $X \ge 0$ with a density, $E[X] = \int_0^\infty P(X > x)\,dx$.
See [Chapter 6](06-Expectation-and-Variance.md#61-expected-value).

**Thinning**
If each event of a Poisson process with rate $\lambda$ is kept independently with probability $p$, the kept events form a Poisson process of rate $p\lambda$, independent of the discarded ones (rate $(1 - p)\lambda$).
See [Chapter 14](14-Poisson-Processes.md#144-splitting-and-merging).

**Time-homogeneous**
A Markov chain whose transition probabilities $P(X_{n+1} = j \mid X_n = i)$ do not depend on $n$. All chains in this book are.
See [Chapter 13](13-Markov-Chains.md#131-transition-matrices).

**Time inversion**
For Brownian motion $B$, the process $X_t = tB_{1/t}$ (with $X_0 = 0$) is again a Brownian motion. It turns questions about large times into questions about small ones.
See [Chapter 16](16-Brownian-Motion.md#162-definition-and-properties).

**Total variation distance**
$\|\mu - \nu\|_{TV} = \max_A|\mu(A) - \nu(A)| = \frac12\sum_j|\mu_j - \nu_j|$, the largest disagreement of two distributions about any event.
See [Chapter 13](13-Markov-Chains.md#the-convergence-theorem).

**Tower rule**
$E\big[E[Y \mid X]\big] = E[Y]$: averaging the conditional averages gives the overall average. It is also called the law of total expectation.
See [Chapter 11](11-Joint-Distributions.md#the-tower-rule).

**Traffic intensity**
$\rho = \lambda/\mu$ in a queue, the arrival rate divided by the service rate. The M/M/1 queue is stable only when $\rho < 1$.
See [Chapter 14](14-Poisson-Processes.md#146-queues-the-mm1-queue).

**Transient state**
A state to which the chain, started there, returns with probability less than 1. It is visited only finitely often.
See [Chapter 13](13-Markov-Chains.md#133-classification-of-states).

**Transition diagram**
A picture of a Markov chain: a dot for each state and an arrow $i \to j$ labelled $p_{ij}$ whenever $p_{ij} > 0$.
See [Chapter 13](13-Markov-Chains.md#131-transition-matrices).

**Transition matrix**
The matrix $P = (p_{ij})$ of one-step probabilities $p_{ij} = P(X_{n+1} = j \mid X_n = i)$. Its rows are distributions, and one step of time is multiplication by $P$ on the right.
See [Chapter 13](13-Markov-Chains.md#131-transition-matrices).

**Tree diagram**
A drawing of a staged experiment, each branch labelled with its conditional probability. The probability of a path is the product along it, and of an event the sum over its paths.
See [Chapter 3](03-Conditional-Probability-and-Independence.md#tree-diagrams).

**Typical sequence**
A sequence of $n$ symbols whose probability lies between $2^{-n(H + \varepsilon)}$ and $2^{-n(H - \varepsilon)}$. By the AEP, typical sequences carry almost all the probability.
See [Chapter 18](18-Information-and-Entropy.md#the-asymptotic-equipartition-property).

## U

**Uncorrelated**
Two variables with covariance 0. Independent variables are uncorrelated, but not conversely; for jointly normal variables the two notions agree.
See [Chapter 11](11-Joint-Distributions.md#uncorrelated-is-not-independent).

**Uniform distribution (continuous)**
$X \sim \text{Uniform}(a, b)$ has density $1/(b - a)$ on $[a, b]$: no point is preferred. Its mean is $(a + b)/2$ and its variance $(b - a)^2/12$.
See [Chapter 9](09-Continuous-Random-Variables.md#the-uniform-law-no-point-is-preferred).

**Uniform distribution (discrete)**
A random variable is uniform on a set of $n$ values if each has probability $1/n$, like a fair die.
See [Chapter 5](05-Discrete-Random-Variables.md#51-random-variables-and-distributions).

**Uniform integrability**
A condition on a family of random variables ensuring that their tails contribute uniformly little to the expectation. With almost sure convergence it gives convergence of expectations, and it makes optional stopping work for martingales.
See [Chapter 15](15-Random-Walks-and-Martingales.md#applications).

**Uniform spanning tree**
A spanning tree of a graph chosen uniformly at random. In the plane, its boundary curve converges to $\text{SLE}_8$.
See [Chapter 20](20-Where-Probability-Goes.md#the-theorems).

**Union bound**
$P(A_1 \cup \cdots \cup A_n) \le P(A_1) + \cdots + P(A_n)$, also called Boole's inequality. It needs no independence.
See [Chapter 1](01-What-Probability-Is.md#first-consequences).

**Uniquely decodable code**
A code in which every string of bits splits into codewords in at most one way. Prefix codes are uniquely decodable.
See [Chapter 18](18-Information-and-Entropy.md#prefix-codes).

**Universality**
The principle that large-scale or local statistics of a random system do not depend on the fine details of its ingredients, such as the eigenvalue spacings of random matrices for general entry distributions.
See [Chapter 20](20-Where-Probability-Goes.md#beyond-the-semicircle).

**Upcrossing**
A stretch during which a sequence goes from at or below $a$ to at or above $b$. Doob's upcrossing inequality bounds their expected number for a martingale, which proves martingale convergence.
See [Chapter 15](15-Random-Walks-and-Martingales.md#the-upcrossing-argument).

**Utility**
The value of wealth to a person, as opposed to its amount. Daniel Bernoulli proposed $\ln w$, which gives the St Petersburg game a finite worth.
See [Chapter 6](06-Expectation-and-Variance.md#66-the-st-petersburg-paradox).

## V

**Vandermonde's identity**
$\sum_k \binom{D}{k}\binom{N - D}{n - k} = \binom{N}{n}$. It says the hypergeometric probabilities add up to 1.
See [Chapter 2](02-Counting-and-Equally-Likely-Outcomes.md#the-formula).

**Variance**
$\operatorname{Var}(X) = E[(X - \mu)^2] = E[X^2] - \mu^2$, the mean squared distance from the mean. For independent variables the variance of a sum is the sum of the variances.
See [Chapter 6](06-Expectation-and-Variance.md#63-variance-and-standard-deviation).

**Variance of a sum**
$\operatorname{Var}(X_1 + \cdots + X_n) = \sum_i\operatorname{Var}(X_i) + 2\sum_{i<j}\operatorname{Cov}(X_i, X_j)$; the covariances vanish for independent terms.
See [Chapter 6](06-Expectation-and-Variance.md#64-covariance-and-the-variance-of-a-sum).

**Venn diagram**
A picture of events as regions inside a rectangle standing for $\Omega$, showing unions, intersections and complements.
See [Chapter 1](01-What-Probability-Is.md#set-language-not-and-or).

**Vitali set**
A set of $[0, 1)$ containing one number from each class of numbers differing by a rational. It cannot have a length, which is why not every set can be an event.
See [Chapter 17](17-Measure-Theoretic-Probability.md#171-why-we-need-measure).

**Volatility**
The parameter $\sigma$ in geometric Brownian motion, measuring the size of random fluctuations of the price.
See [Chapter 16](16-Brownian-Motion.md#166-a-first-look-at-stochastic-calculus-and-black-scholes).

**Von Neumann's trick**
To get fair bits from a coin of unknown bias, flip in pairs: HT gives 0, TH gives 1, and HH or TT is discarded.
See [Chapter 19](19-Randomness-in-Computing.md#extracting-fair-bits-from-a-biased-source).

## W

**Wald's identity**
For a random sum $S_N = X_1 + \cdots + X_N$ with $N$ independent of iid $X_i$ (or $N$ a suitable stopping time), $E[S_N] = E[N]\,E[X_1]$.
See [Chapter 11](11-Joint-Distributions.md#random-sums).

**Weak law of large numbers**
For iid $X_i$ with mean $\mu$ and finite variance, $\bar X_n \to \mu$ in probability: $P(|\bar X_n - \mu| > \varepsilon) \to 0$ for every $\varepsilon > 0$. Chebyshev's inequality proves it in one line.
See [Chapter 7](07-Inequalities-and-the-Law-of-Large-Numbers.md#72-the-weak-law-of-large-numbers).

**Wiener process**
Another name for Brownian motion, after Norbert Wiener, who proved it exists in 1923.
See [Chapter 16](16-Brownian-Motion.md#162-definition-and-properties).

**Wigner matrix**
A random symmetric $n \times n$ matrix with independent entries on and above the diagonal, mean 0 and variance $1/n$ off the diagonal. Its eigenvalues follow the semicircle law as $n \to \infty$.
See [Chapter 20](20-Where-Probability-Goes.md#wigners-semicircle).

**Wigner's semicircle law**
The empirical distribution of the eigenvalues of an $n \times n$ Wigner matrix converges to the semicircle distribution on $[-2, 2]$ (Wigner, 1955 and 1958).
See [Chapter 20](20-Where-Probability-Goes.md#wigners-semicircle).

## Z

**Zero-one law**
A theorem saying that every event of a certain kind has probability 0 or 1, such as Kolmogorov's zero-one law for tail events and the Hewitt-Savage law for symmetric events.
See [Chapter 17](17-Measure-Theoretic-Probability.md#176-kolmogorovs-zero-one-law).

**$z$-score**
$z = (x - \mu)/\sigma$, how many standard deviations $x$ lies from the mean.
See [Chapter 10](10-The-Normal-Distribution.md#one-table-for-every-normal).
