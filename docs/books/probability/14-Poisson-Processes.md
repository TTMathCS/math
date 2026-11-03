# 14. Poisson processes

*A Geiger counter clicks at random moments. Calls reach a help desk, raindrops hit a square of pavement, customers
join a queue. In each case events happen one at a time, at no fixed schedule, with no memory of when the last one
came. How many will happen in the next minute? How long until the next one? If you arrive at a bus stop at a random
moment, why does the wait feel longer than the timetable promises? This chapter builds the Poisson process, the basic
model of random events in continuous time. You will see three definitions and why they agree, compute waiting times,
split and merge processes, explain the inspection paradox, and solve the simplest queue.*

!!! abstract "In this chapter"
    **You will learn:**

    - what a counting process is, and how the Poisson distribution arises from many rare chances
    - three equivalent definitions of the Poisson process: exponential gaps, Poisson counts, and small-interval rates
    - the gamma distribution of the $n$-th arrival, and why arrivals given their number look uniformly scattered
    - splitting (thinning) and merging (superposition) of Poisson processes, with proofs
    - the inspection paradox: why the interval you land in is longer than average
    - the M/M/1 queue: its stationary distribution, mean queue length and Little's law
    - radioactive decay as a Poisson process, with Rutherford and Geiger's 1910 counts

    **You need:** [Chapter 5](05-Discrete-Random-Variables.md) (the Poisson distribution as a limit of binomials),
    [Chapter 9](09-Continuous-Random-Variables.md) (densities, the exponential distribution and its memoryless
    property), [Chapter 11](11-Joint-Distributions.md) (joint densities, convolution) and
    [Chapter 13](13-Markov-Chains.md) (Markov chains, stationary distributions, detailed balance). Calculus is used
    throughout: derivatives, integrals and one simple differential equation.

    **Levels:** 14.1 and 14.3 are intermediate; 14.2, 14.4 and 14.5 are intermediate to advanced; 14.6 is advanced;
    14.7 is an application at intermediate level.

## 14.1 Counting random events in time

A **counting process** is a family of random variables $N(t)$, one for each time $t \ge 0$, where $N(t)$ is the number
of events in the time interval $(0, t]$. So $N(0) = 0$, the values are whole numbers, and $N(t)$ only goes up, by
jumps. For $s < t$, the **increment** $N(t) - N(s)$ counts the events in $(s, t]$. The times of the events are the
**arrival times** $S_1 < S_2 < S_3 < \cdots$, and the gaps between them are the **interarrival times**
$T_1 = S_1$, $T_k = S_k - S_{k-1}$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 370 210" role="img" aria-label="A sample path of a counting process: a staircase that starts at 0 and jumps up by one at five arrival times. Below the time axis the gaps between arrivals are labelled T1 to T5.">
  <line x1="40" y1="170" x2="350" y2="170" stroke="currentColor" stroke-width="1.2"/>
  <line x1="40" y1="170" x2="40" y2="30" stroke="currentColor" stroke-width="1.2"/>
  <text x="356" y="174" font-size="13" fill="currentColor">t</text>
  <text x="14" y="40" font-size="13" fill="currentColor">N(t)</text>
  <g font-size="11" fill="currentColor" text-anchor="end">
    <text x="34" y="174">0</text><text x="34" y="149">1</text><text x="34" y="124">2</text>
    <text x="34" y="99">3</text><text x="34" y="74">4</text><text x="34" y="49">5</text>
  </g>
  <polyline points="40,170 76,170 76,145 130,145 130,120 148,120 148,95 232,95 232,70 304,70 304,45 340,45" fill="none" stroke="#eea66f" stroke-width="3"/>
  <g fill="#9cc9ea" stroke="currentColor" stroke-width="1">
    <circle cx="76" cy="170" r="4"/><circle cx="130" cy="170" r="4"/><circle cx="148" cy="170" r="4"/>
    <circle cx="232" cy="170" r="4"/><circle cx="304" cy="170" r="4"/>
  </g>
  <g font-size="11" fill="currentColor" text-anchor="middle">
    <text x="58" y="192">T1</text><text x="103" y="192">T2</text><text x="139" y="192">T3</text>
    <text x="190" y="192">T4</text><text x="268" y="192">T5</text>
  </g>
</svg>
</div>

What makes the Poisson process special is a set of plain assumptions that fit many situations:

1. **Independence.** What happens in disjoint time intervals is independent.
2. **Stationarity.** The chance of events in an interval depends only on its length, not on where it is.
3. **Orderliness.** Events come one at a time: two can't happen at the same instant.

Here is the heuristic that leads to the Poisson distribution. Suppose events happen at an average **rate** $\lambda$
per unit time. Cut $(0, t]$ into $n$ short slots of length $t/n$. If $n$ is large, a slot holds an event with
probability about $\lambda t / n$ and two events almost never; the slots are independent. So $N(t)$ is approximately
binomial$(n, \lambda t/n)$, and Chapter 5 proved that as $n \to \infty$ this tends to the Poisson distribution with
mean $\lambda t$:

$$
P(N(t) = k) = e^{-\lambda t}\frac{(\lambda t)^k}{k!}, \qquad k = 0, 1, 2, \dots
$$

**Worked example 1.** Calls reach a help desk at rate $\lambda = 3$ per hour. The chance of a quiet hour is
$P(N(1) = 0) = e^{-3} \approx 0.0498$. The chance of exactly 4 calls in two hours is $e^{-6}6^4/4! \approx 0.134$.
The expected number in two hours is $\lambda t = 6$ and so is the variance (for a Poisson distribution the mean
equals the variance).

**A short history.** Siméon-Denis Poisson derived the distribution in 1837 as a limit of binomial probabilities, in a
book on the probability of judgements in courts. Ladislaus Bortkiewicz's 1898 booklet *Das Gesetz der kleinen Zahlen*
(the law of small numbers) showed it fitting rare-event counts, most famously deaths by horse kick in Prussian army
corps over twenty years. Agner Krarup Erlang, working for the Copenhagen Telephone Company, applied Poisson arrivals
to telephone traffic from 1909 and founded queueing theory. Ernest Rutherford and Hans Geiger counted alpha particles
in 1910 (section 14.7).

## 14.2 Three equivalent definitions

*Level: intermediate to advanced.*

Fix a rate $\lambda > 0$. Here are three ways to say "Poisson process of rate $\lambda$".

**Definition A (exponential gaps).** The interarrival times $T_1, T_2, \dots$ are independent, each exponential with
rate $\lambda$ (density $\lambda e^{-\lambda x}$ for $x > 0$, mean $1/\lambda$). Then $S_n = T_1 + \cdots + T_n$ and
$N(t) = \max\{n : S_n \le t\}$.

**Definition B (Poisson counts).** $N(0) = 0$; the increments over disjoint intervals are independent; and for
$s < t$, $N(t) - N(s)$ has the Poisson distribution with mean $\lambda (t - s)$.

**Definition C (small intervals).** $N(0) = 0$; increments over disjoint intervals are independent and their
distributions depend only on the interval lengths; and for small $h$,

$$
P(N(t+h) - N(t) = 1) = \lambda h + o(h), \qquad P(N(t+h) - N(t) \ge 2) = o(h).
$$

Here $o(h)$ means a quantity that, divided by $h$, tends to 0 as $h \to 0$: something much smaller than $h$.

**Theorem.** Definitions A, B and C describe the same process.

Definition A is the one to simulate with. Definition B is the one to compute counts with. Definition C is the one to
recognise a Poisson process in the wild: it only asks that events be independent, steady and one at a time. We prove
the key steps; the parts left as sketches are proved in full in Durrett's or Grimmett and Stirzaker's books.

*C implies B.* Let $p_k(t) = P(N(t) = k)$. To be at 0 at time $t + h$ you must be at 0 at time $t$ and have no event
in $(t, t+h]$, independent of the past, which has probability $1 - \lambda h + o(h)$:

$$
p_0(t + h) = p_0(t)\,(1 - \lambda h + o(h)).
$$

Subtract $p_0(t)$, divide by $h$ and let $h \to 0$: $p_0'(t) = -\lambda p_0(t)$, with $p_0(0) = 1$. So
$p_0(t) = e^{-\lambda t}$. For $k \ge 1$, to be at $k$ at time $t+h$ you are at $k$ with no event, or at $k-1$ with
one event, or lower with two or more:

$$
p_k(t+h) = p_k(t)(1 - \lambda h) + p_{k-1}(t)\,\lambda h + o(h),
\qquad\text{so}\qquad
p_k'(t) = -\lambda p_k(t) + \lambda p_{k-1}(t).
$$

Multiply by $e^{\lambda t}$: $\frac{d}{dt}\left(e^{\lambda t}p_k(t)\right) = \lambda e^{\lambda t}p_{k-1}(t)$. If
$p_{k-1}(t) = e^{-\lambda t}(\lambda t)^{k-1}/(k-1)!$, then $\frac{d}{dt}(e^{\lambda t}p_k) = \lambda^k t^{k-1}/(k-1)!$,
and integrating from 0 (where $p_k(0) = 0$) gives $e^{\lambda t}p_k(t) = (\lambda t)^k/k!$. By induction
$N(t)$ is Poisson with mean $\lambda t$, and by stationarity the same holds for $N(t) - N(s)$ with $t - s$ in place
of $t$. $\square$

*B implies the first gap is exponential.* $P(T_1 > t) = P(N(t) = 0) = e^{-\lambda t}$, the exponential tail. Moreover,
given the first arrival at $S_1 = s$, the process after $s$ is again a Poisson process (by independent increments; to
make this rigorous one needs the strong Markov property for $N$), so $T_2$ is exponential and independent of $T_1$,
and so on. This gives A.

*A implies B, the counts.* Under A, $S_n$ is a sum of $n$ independent exponentials. Section 14.3 shows that its
density is the gamma density $\lambda^n t^{n-1}e^{-\lambda t}/(n-1)!$, and computes $P(N(t) = n) =
P(S_n \le t) - P(S_{n+1} \le t) = e^{-\lambda t}(\lambda t)^n/n!$. The independence of increments under A comes from
the memoryless property: at any fixed time $t$, the time already waited since the last arrival tells you nothing
about the remaining wait, which is again exponential (Exercise 10 and section 14.5). $\square$

*B implies C.* $P(N(h) = 1) = \lambda h e^{-\lambda h} = \lambda h + o(h)$ and
$P(N(h) \ge 2) = 1 - e^{-\lambda h} - \lambda h e^{-\lambda h} = o(h)$, by the Taylor series of $e^{-\lambda h}$.
$\square$

**The memoryless property, once more.** Chapter 9 proved that an exponential $T$ satisfies $P(T > s + t \mid T > s) =
P(T > t)$, and that it is the only continuous distribution with this property. For a Poisson process this means:
**at any moment, the time until the next event is exponential with rate $\lambda$, no matter how long you have already
waited.** A light bulb that does not age, an atom that does not get "ready" to decay.

## 14.3 Waiting times

How long until the $n$-th event? $S_n$ is the sum of $n$ independent exponentials.

**Theorem.** $S_n$ has the **gamma** (or **Erlang**) density

$$
f_{S_n}(t) = \frac{\lambda^n t^{n-1}}{(n-1)!} e^{-\lambda t}, \qquad t > 0,
$$

with mean $n/\lambda$ and variance $n/\lambda^2$.

*Proof.* The $n$-th event has happened by time $t$ exactly when at least $n$ events happened in $(0, t]$:
$\{S_n \le t\} = \{N(t) \ge n\}$. Using Definition B,

$$
P(S_n \le t) = \sum_{k \ge n} e^{-\lambda t}\frac{(\lambda t)^k}{k!}.
$$

Differentiate term by term. The derivative of $e^{-\lambda t}(\lambda t)^k/k!$ is
$\lambda e^{-\lambda t}(\lambda t)^{k-1}/(k-1)! - \lambda e^{-\lambda t}(\lambda t)^k/k!$. Summed over $k \ge n$ the
terms telescope, leaving only the first positive term, $\lambda e^{-\lambda t}(\lambda t)^{n-1}/(n-1)!$, which is the
claimed density. The mean and variance add over the $n$ independent gaps, each with mean $1/\lambda$ and variance
$1/\lambda^2$. $\square$

(Alternatively, convolve the exponential density with itself $n$ times, as in Chapter 11.)

**Worked example 2.** With calls at rate 3 per hour, what is the probability that the third call arrives within the
first hour? $P(S_3 \le 1) = P(N(1) \ge 3) = 1 - e^{-3}(1 + 3 + 9/2) \approx 0.577$. The expected time of the third
call is $3/3 = 1$ hour, and its standard deviation is $\sqrt{3}/3 \approx 0.58$ hours.

**Where are the arrivals, given how many there were?** Suppose you are told that exactly one event happened in
$(0, t]$. When did it happen? For $0 < s < t$,

$$
P(S_1 \le s \mid N(t) = 1) = \frac{P(N(s) = 1,\ N(t) - N(s) = 0)}{P(N(t) = 1)}
= \frac{\lambda s e^{-\lambda s} \cdot e^{-\lambda (t-s)}}{\lambda t e^{-\lambda t}} = \frac{s}{t}.
$$

The event time is uniform on $(0, t]$. The general statement:

**Theorem (conditional uniformity).** Given $N(t) = n$, the arrival times $S_1 < \cdots < S_n$ have the same
distribution as $n$ independent uniform points on $(0, t]$ arranged in increasing order.

*Proof.* The joint density of $T_1, \dots, T_{n+1}$ is $\prod \lambda e^{-\lambda t_i}$. Change variables to
$s_k = t_1 + \cdots + t_k$ (a linear map with determinant 1): the joint density of $S_1, \dots, S_{n+1}$ is
$\lambda^{n+1}e^{-\lambda s_{n+1}}$ on $0 < s_1 < \cdots < s_{n+1}$. The event $N(t) = n$ is $S_n \le t < S_{n+1}$.
Integrating out $s_{n+1}$ over $(t, \infty)$ leaves $\lambda^n e^{-\lambda t}$ for $0 < s_1 < \cdots < s_n \le t$, a
constant. Dividing by $P(N(t) = n) = e^{-\lambda t}(\lambda t)^n/n!$ gives the constant density $n!/t^n$ on the
ordered region, which is exactly the density of $n$ sorted independent uniforms (the $n!$ counts the orders they
could have come in). $\square$

This is useful: questions about a Poisson process on a fixed window, given the count, become questions about
uniform points. For instance, given $N(t) = n$, the number in $(0, s]$ is binomial$(n, s/t)$ (Exercise 5).

## 14.4 Splitting and merging

*Level: intermediate to advanced.*

Emails arrive at rate 10 per hour; each, independently, is spam with probability $0.2$. Is the stream of spam also a
Poisson process? And is it independent of the stream of real mail?

**Theorem (thinning).** Let $N$ be a Poisson process of rate $\lambda$. Mark each event, independently of everything
else, as type 1 with probability $p$ and type 2 with probability $1 - p$. Then the type 1 events form a Poisson process
$N_1$ of rate $\lambda p$, the type 2 events form a Poisson process $N_2$ of rate $\lambda (1-p)$, and **$N_1$ and $N_2$
are independent.**

*Proof of the key step.* Fix $t$. Given $N(t) = n$, the number of type 1 events is binomial$(n, p)$. So

$$
P(N_1(t) = j, N_2(t) = k) = e^{-\lambda t}\frac{(\lambda t)^{j+k}}{(j+k)!}\binom{j+k}{j}p^j(1-p)^k
= e^{-\lambda p t}\frac{(\lambda p t)^j}{j!} \cdot e^{-\lambda (1-p) t}\frac{(\lambda (1-p) t)^k}{k!}.
$$

The joint probability factors into a Poisson$(\lambda p t)$ and a Poisson$(\lambda(1-p)t)$ probability, so the two
counts are independent Poisson variables. Applying the same computation to each of several disjoint intervals (which
are independent for $N$, and are marked independently) gives independent increments for the pair, so both are Poisson
processes and they are independent. $\square$

The independence is the surprising part. Knowing that a lot of real mail arrived this hour tells you nothing about how
much spam arrived. (With a fixed total, such as $n$ marked balls, the two counts would be negatively dependent; the
Poisson randomness of the total exactly cancels this.)

**Theorem (superposition).** If $N_1$ and $N_2$ are independent Poisson processes with rates $\lambda_1$ and
$\lambda_2$, then $N = N_1 + N_2$ is a Poisson process of rate $\lambda_1 + \lambda_2$. Moreover, each event of $N$
comes from $N_1$ with probability $\lambda_1/(\lambda_1 + \lambda_2)$, independently of everything else.

*Proof.* Increments of $N$ over disjoint intervals are independent because those of $N_1$ and $N_2$ are. Each
increment is a sum of independent Poisson variables with means $\lambda_1 h$ and $\lambda_2 h$; using the
probability generating function $E[z^X] = e^{\mu(z - 1)}$ of a Poisson$(\mu)$ variable (Chapter 8), the sum has
generating function $e^{\lambda_1 h(z-1)}e^{\lambda_2 h(z-1)} = e^{(\lambda_1 + \lambda_2)h(z-1)}$, which is
Poisson with mean $(\lambda_1 + \lambda_2)h$. For the second claim, look at the first event: it is the smaller of the
first arrivals $E_1 \sim \text{Exp}(\lambda_1)$ and $E_2 \sim \text{Exp}(\lambda_2)$, and

$$
P(E_1 < E_2) = \int_0^\infty \lambda_1 e^{-\lambda_1 x}\, e^{-\lambda_2 x}\, dx = \frac{\lambda_1}{\lambda_1 + \lambda_2}.
$$

By memorylessness everything restarts after each event, so the same holds for every event, independently. $\square$

So merging and splitting are inverse operations: a Poisson stream with marks is the same thing as several independent
Poisson streams.

**Worked example 3.** Emails: 10 per hour, 20% spam. Spam is Poisson with rate 2 per hour, independent of real mail
(rate 8). The probability of no spam in half an hour is $e^{-2 \times 0.5} = e^{-1} \approx 0.368$, whatever the real
mail does.

**Worked example 4 (a race of exponentials).** A machine has two parts that fail independently, at rates 2 and 3 per
year (exponential lifetimes). The first failure comes after an exponential time with rate 5, so on average after
$1/5$ year, and it is part 1 with probability $2/5$. This "competing exponentials" fact is how continuous-time Markov
chains work: from each state, every possible jump has its own exponential clock, and the first clock to ring decides.

## 14.5 The inspection paradox

*Level: intermediate to advanced.*

Buses arrive at a stop as a Poisson process of rate 4 per hour, so the average gap between buses is 15 minutes. You
arrive at a random time. How long do you expect to wait?

Argument one: on average you arrive in the middle of a gap, so you wait half a gap, 7.5 minutes. Argument two: by
memorylessness, the wait from any fixed moment is exponential with rate 4 per hour, so the expected wait is 15 minutes.
Argument two is right. The flaw in argument one is the words "a gap": **the gap you land in is not a typical gap.**
Long gaps cover more of the time line, so a random moment is more likely to fall in a long one. This is the
**inspection paradox** (or waiting time paradox).

**For the Poisson process.** At a fixed time $t$, let $R_t$ be the time until the next event (the **residual**) and
$A_t$ the time since the last event, or since 0 if there was none (the **age**). Then:

- $R_t$ is exponential with rate $\lambda$ (memorylessness);
- $P(A_t > a) = P(\text{no events in } (t - a, t]) = e^{-\lambda a}$ for $a < t$, so $A_t$ is exponential, cut off at $t$;
- $A_t$ and $R_t$ are independent (they depend on disjoint intervals).

So the gap containing $t$, of length $A_t + R_t$, has expected length $\frac{1}{\lambda}(1 - e^{-\lambda t}) +
\frac{1}{\lambda}$, which tends to $2/\lambda$: **twice the average gap.** In the bus example, you land in a gap of 30
minutes on average, and wait half of it, 15 minutes. Both arguments are now consistent.

**The general formula.** Suppose the gaps $G_1, G_2, \dots$ are independent and identically distributed, positive,
with mean $m = E[G]$ (a **renewal process**; Poisson is the special case of exponential gaps). Over a long time, the
fraction of time covered by gaps of length about $x$ is proportional to $x$ times how often such gaps occur. So a
random moment falls in a gap whose length has the **length-biased** distribution, with density $x f_G(x)/m$, and since
your position inside that gap is uniform, the expected wait is

$$
E[\text{wait}] = \frac{1}{m}\int x \cdot \frac{x}{2}\, f_G(x)\,dx = \frac{E[G^2]}{2\,E[G]}
= \frac{m}{2} + \frac{\operatorname{Var}(G)}{2m}.
$$

(This is the renewal reward theorem; a full proof uses the strong law of large numbers, see Grimmett and Stirzaker,
chapter 10.) The wait equals half the mean gap only if the gaps have no variance, that is, if buses run exactly on
schedule. Irregular service always costs waiting passengers more than its average gap suggests.

**Worked example 5.** Buses come in bunches: gaps alternate between 5 minutes and 25 minutes (average 15). A random
moment falls in a 25-minute gap with probability $25/30$, not $1/2$. Expected wait:

$$
\frac{E[G^2]}{2E[G]} = \frac{(25 + 625)/2}{2 \times 15} = \frac{325}{30} \approx 10.8 \text{ minutes},
$$

compared with 7.5 minutes for perfectly regular buses every 15 minutes. Check directly:
$\frac{5}{30}\cdot 2.5 + \frac{25}{30}\cdot 12.5 = \frac{12.5 + 312.5}{30} = 10.83$.

**The same effect elsewhere.** A school has one class of 10 students and one of 90. The average class size is 50.
Ask each student the size of their class and average: $(10 \cdot 10 + 90 \cdot 90)/100 = 82$. Both numbers are
correct; they answer different questions. Surveys that sample people to learn about groups (or sample moments to learn
about intervals) see a length-biased picture. The same effect explains why your friends, on average, have more friends
than you do (people with many friends are more likely to be among your friends).

## 14.6 Queues: the M/M/1 queue

*Level: advanced.*

Customers arrive at a single server as a Poisson process of rate $\lambda$. The server serves one at a time, in order
of arrival, and service times are independent exponentials with rate $\mu$ (mean $1/\mu$). This is the **M/M/1
queue**: in David Kendall's 1953 notation, M (Markovian, that is Poisson) arrivals, M (exponential) service times, 1
server. Let $X(t)$ be the number of customers in the system (waiting or being served) at time $t$.

**$X$ is a continuous-time Markov chain.** By memorylessness, the future of $X$ depends only on the present number of
customers: the time to the next arrival is Exp$(\lambda)$, and if $X > 0$ the remaining service time is
Exp$(\mu)$, whatever has happened. From state $n \ge 1$, two clocks race: an arrival (rate $\lambda$) takes $X$ to
$n + 1$, a departure (rate $\mu$) takes it to $n - 1$. From state 0 only arrivals happen. This is a **birth-death
chain**: it moves only to neighbouring states.

**Stationary distribution.** As for discrete chains, a distribution $\pi$ on $\{0, 1, 2, \dots\}$ is stationary if the
probability flows balance. For a birth-death chain detailed balance between $n$ and $n+1$ says: in equilibrium, the
rate of moves up from $n$ equals the rate of moves down from $n+1$,

$$
\lambda\,\pi_n = \mu\,\pi_{n+1}.
$$

(For continuous time, rates take the place of transition probabilities; the proof that this balance implies
stationarity is the same computation as in 13.4.) So $\pi_{n+1} = \rho\,\pi_n$ with $\rho = \lambda/\mu$, the
**traffic intensity**, and $\pi_n = \rho^n \pi_0$. These add up to 1 only if $\rho < 1$, and then

$$
\pi_n = (1 - \rho)\rho^n, \qquad n = 0, 1, 2, \dots
$$

a geometric distribution. If $\rho \ge 1$, customers arrive at least as fast as they can be served, and the queue
grows without bound: there is no stationary distribution.

**Consequences.** In equilibrium:

- the server is idle with probability $\pi_0 = 1 - \rho$, busy with probability $\rho$;
- the probability of at least $k$ customers present is $\rho^k$;
- the mean number in the system is $L = \sum_n n(1-\rho)\rho^n = \dfrac{\rho}{1 - \rho}$;
- the mean number waiting (not in service) is $L_q = L - \rho = \dfrac{\rho^2}{1 - \rho}$.

**Little's law.** How long does a customer spend in the system? A simple and very general relation connects the
average number in a system $L$, the arrival rate $\lambda$ and the average time each customer spends there $W$:

$$
L = \lambda W .
$$

*Idea of proof.* Draw, for each customer, a bar as long as their time in the system. Over a long time $\tau$, the total
area of the bars is about (number of customers, $\lambda\tau$) times (average bar, $W$); it is also about $\tau$ times
(average number of bars stacked at a moment, $L$). John Little gave a rigorous proof in 1961, under mild conditions,
for any queueing discipline and any distributions. For the M/M/1 queue:

$$
W = \frac{L}{\lambda} = \frac{1}{\mu - \lambda}, \qquad W_q = \frac{L_q}{\lambda} = \frac{\rho}{\mu - \lambda}.
$$

**Worked example 6.** A help desk gets $\lambda = 4$ requests per hour, and one person handles $\mu = 5$ per hour on
average. Then $\rho = 0.8$: the desk is busy 80% of the time. On average $L = 0.8/0.2 = 4$ requests are in the system
and $L_q = 3.2$ are waiting; a request spends $W = 1/(5 - 4) = 1$ hour in the system, of which $W_q = 0.8$ hours
waiting. The chance of finding 5 or more requests present is $0.8^5 \approx 0.33$.

**Why queues get bad so fast.** $L = \rho/(1-\rho)$ blows up as $\rho \to 1$. Raising the load from 80% to 90%
($\lambda = 4.5$) raises $L$ from 4 to 9 and $W$ from 1 hour to 2 hours. A system run close to full capacity has long
queues even though, on average, it has enough capacity. Randomness, not lack of capacity, makes the queue.

One more subtle fact: an arriving customer sees the queue in its stationary distribution. This is a property of
Poisson arrivals ("PASTA": Poisson arrivals see time averages); with other arrival patterns, arrivals can see a
different picture from a random moment, by the same kind of bias as in 14.5.

## 14.7 Radioactive decay

*Level: intermediate.*

A radioactive sample contains an enormous number $n$ of unstable nuclei. Physics says that each nucleus, independently,
decays in a short time $h$ with probability $\kappa h$, regardless of its age: the lifetime of each nucleus is
exponential with rate $\kappa$, and its **half-life** (the median lifetime) is $\ln 2/\kappa$. Carbon-14, for example,
has a half-life of about 5730 years, so $\kappa \approx 0.693/5730 \approx 1.21 \times 10^{-4}$ per year.

Over a time short compared with the half-life, the number of nuclei hardly changes, so decays happen at a nearly
constant rate $\lambda = n\kappa$, independently in disjoint intervals, one at a time: Definition C. The count of decays
in a window of length $t$ is therefore Poisson with mean $\lambda t$, with the binomial-to-Poisson limit of 14.1 doing
the work (many nuclei, each with a tiny chance).

**Rutherford and Geiger, 1910.** In "The probability variations in the distribution of $\alpha$ particles"
(*Philosophical Magazine*, 1910, with a mathematical note by Harry Bateman), Rutherford and Geiger counted the alpha
particles from a polonium source in 2608 intervals of 7.5 seconds each: 10,097 particles in all, an average of
$m = 10097/2608 \approx 3.87$ per interval. Here are their counts beside the Poisson prediction $2608\,e^{-m}m^k/k!$:

| particles $k$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11+ |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| intervals observed | 57 | 203 | 383 | 525 | 532 | 408 | 273 | 139 | 45 | 27 | 10 | 6 |
| Poisson prediction | 54.3 | 210.3 | 407.1 | 525.3 | 508.4 | 393.7 | 254.0 | 140.5 | 68.0 | 29.2 | 11.3 | 5.8 |

Check: the observed row adds to 2608, and $\sum k \cdot (\text{count}) = 10097$ using the full data (the "11+" column
is 4 intervals with 11, 1 with 13 and 1 with 14). The agreement is close across the whole range; Bateman's note
supplied the formula. Measuring how close is a question for statistics (the planned Statistics book), but the picture
is clear: decay counts behave like a Poisson process.

**Counting particles elsewhere.** The same model is the starting point for any detector counting independent
particles from a steady source: Geiger counters, photon counters in telescopes and cameras, and the radiation
detectors carried by spacecraft and Mars rovers to measure the particle environment that future crews would face.
Over short windows with a steady source, counts are close to Poisson, and the $\sqrt{\lambda t}$ standard deviation
("shot noise") sets the precision of any such measurement: to halve the relative error you must count four times as
long. When the source is not steady (a burst of solar particles, say), the rate becomes a function $\lambda(t)$ and the
model becomes a **non-homogeneous Poisson process**, in which the count in $(s, t]$ is Poisson with mean
$\int_s^t \lambda(u)\,du$.

## Check yourself

??? question "1. Calls arrive at rate 3 per hour. Find the probability of no calls in 20 minutes, and of at least 2 calls in one hour."

    In 20 minutes the mean is $3 \times \frac13 = 1$, so $P(0) = e^{-1} \approx 0.368$. In one hour, mean 3:
    $P(N \ge 2) = 1 - e^{-3}(1 + 3) = 1 - 4e^{-3} \approx 0.801$.

??? question "2. Exactly one event of a Poisson process happened in $(0, 1]$. What is the probability it happened in the first quarter?"

    By conditional uniformity (14.3), the event time is uniform on $(0, 1]$, so the answer is $1/4$, whatever the rate.

??? question "3. Two independent exponential clocks have rates 2 and 3. Find the distribution of the first ring and the probability that the rate-2 clock rings first."

    $P(\min > t) = e^{-2t}e^{-3t} = e^{-5t}$, so the minimum is exponential with rate 5 (mean $1/5$). The rate-2 clock
    is first with probability $2/(2+3) = 2/5$.

??? question "4. Emails arrive at 10 per hour and 20% are spam. In an hour with 12 real emails, what is the expected number of spam emails?"

    By the thinning theorem the spam count is independent of the real-mail count, so the information is irrelevant:
    the expected number of spam emails is $10 \times 0.2 = 2$.

??? question "5. For a Poisson process and $0 < s < t$, show that given $N(t) = n$, $N(s)$ is binomial$(n, s/t)$."

    $P(N(s) = k \mid N(t) = n) = \dfrac{P(N(s) = k)\,P(N(t) - N(s) = n - k)}{P(N(t) = n)}$ by independent increments.
    Substituting the Poisson formulas, the exponentials cancel ($e^{-\lambda s}e^{-\lambda(t-s)} = e^{-\lambda t}$) and
    the powers of $\lambda$ cancel, leaving $\dfrac{n!}{k!\,(n-k)!}\dfrac{s^k (t-s)^{n-k}}{t^n} = \binom{n}{k}\left(\frac st\right)^k\left(1 - \frac st\right)^{n-k}$.

??? question "6. For a Poisson process of rate $\lambda$, find $E[S_n]$ and $\operatorname{Var}(S_n)$. With $\lambda = 2$ per minute, when do you expect the 10th event?"

    $S_n$ is a sum of $n$ independent Exp$(\lambda)$ gaps, each with mean $1/\lambda$ and variance $1/\lambda^2$, so
    $E[S_n] = n/\lambda$ and $\operatorname{Var}(S_n) = n/\lambda^2$. With $\lambda = 2$, $n = 10$: mean 5 minutes,
    standard deviation $\sqrt{10}/2 \approx 1.58$ minutes.

??? question "7. Buses run exactly every 10 minutes. What is your expected wait if you arrive at a random time? What if instead they form a Poisson process with the same average rate?"

    Regular buses: you arrive uniformly within a 10-minute gap, wait 5 minutes on average ($E[G^2]/(2E[G]) = 100/20 = 5$).
    Poisson buses with rate 6 per hour: the wait is exponential with mean 10 minutes (here $E[G^2] = 2 \cdot 10^2$,
    so $E[G^2]/(2E[G]) = 200/20 = 10$).

??? question "8. An M/M/1 queue has $\lambda = 9$ and $\mu = 10$ per hour. Find $L$, $W$ and $W_q$. What happens if $\lambda$ drops to 8?"

    $\rho = 0.9$: $L = 0.9/0.1 = 9$, $W = 1/(10 - 9) = 1$ hour, $W_q = 0.9/1 = 0.9$ hours. With $\lambda = 8$: $\rho = 0.8$,
    $L = 4$, $W = 1/2$ hour, $W_q = 0.4$ hours. An 11% drop in demand halves the time in the system.

??? question "9. A shop has customers arriving as a Poisson process of rate 5 per hour; each spends an independent random amount with mean 20 dollars and standard deviation 10 dollars. Find the mean and standard deviation of the total spent in an hour."

    The total is a compound Poisson sum $Y_1 + \cdots + Y_N$ with $N \sim$ Poisson(5). By the tower rule (Chapter 11),
    $E = E[N]\,E[Y] = 5 \times 20 = 100$ dollars. For the variance, $\operatorname{Var} = E[N]\operatorname{Var}(Y) +
    \operatorname{Var}(N)E[Y]^2 = 5 \times 100 + 5 \times 400 = 2500$ (for Poisson $N$ this is $\lambda E[Y^2]$), so
    the standard deviation is 50 dollars.

??? question "10. Let $T$ be exponential with rate $\lambda$, and let $s > 0$. Show that given $T > s$, the remaining time $T - s$ is again exponential with rate $\lambda$, and explain what this means for a Poisson process observed from time $s$."

    $P(T - s > t \mid T > s) = P(T > s + t)/P(T > s) = e^{-\lambda(s+t)}/e^{-\lambda s} = e^{-\lambda t}$. For a Poisson
    process: at time $s$, whatever happened before, the wait for the next event is Exp$(\lambda)$ and the later gaps are
    fresh independent exponentials, so the process seen from $s$ is again a Poisson process of rate $\lambda$,
    independent of the past. This is the source of independent increments in Definition A.

??? question "11. Carbon-14 has a half-life of about 5730 years. What fraction of the carbon-14 in a sample survives 1000 years?"

    Each nucleus survives time $t$ with probability $e^{-\kappa t} = 2^{-t/5730}$. For $t = 1000$: $2^{-0.1745} \approx 0.886$,
    so about 88.6% survives (and by the law of large numbers the surviving fraction of a huge number of nuclei is
    essentially exactly this).

## What you learned

- A Poisson process of rate $\lambda$ counts events that are independent, steady and one at a time; the count in an
  interval of length $t$ is Poisson with mean $\lambda t$.
- Equivalent views: independent Exp$(\lambda)$ gaps; independent Poisson increments; rate $\lambda h$ in small intervals.
- The $n$-th arrival has a gamma distribution with mean $n/\lambda$; given the number of events in a window, their
  times are independent uniforms, sorted.
- Independent marking splits a Poisson process into independent Poisson processes; independent Poisson processes
  merge into one, with each event's type chosen in proportion to the rates.
- The interval containing a random moment is length-biased: the expected wait is $E[G^2]/(2E[G])$, twice the
  naive guess for Poisson arrivals.
- The M/M/1 queue has a geometric stationary distribution when $\rho = \lambda/\mu < 1$; $L = \rho/(1-\rho)$ and
  $W = 1/(\mu - \lambda)$, linked by Little's law $L = \lambda W$.
- Radioactive decay counts fit the Poisson model, as Rutherford and Geiger's 1910 data showed.

**Next:** [Chapter 15](15-Random-Walks-and-Martingales.md), the random walk in depth and the theory of fair games.

## Further reading

- S. M. Ross, *Introduction to Probability Models*, 12th edition, Academic Press, 2019. Poisson processes and queues
  with many worked examples.
- G. Grimmett and D. Stirzaker, *Probability and Random Processes*, 4th edition, Oxford University Press, 2020,
  chapters 6 and 10 (Poisson and renewal processes, the inspection paradox) and 11 (queues).
- R. Durrett, *Essentials of Stochastic Processes*, 3rd edition, Springer, 2016, chapters 2 and 3.
- J. F. C. Kingman, *Poisson Processes*, Oxford University Press, 1993. The elegant general theory (Poisson processes
  in space as well as time).
- W. Feller, *An Introduction to Probability Theory and Its Applications*, Volume 2, 2nd edition, Wiley, 1971, for the
  waiting time paradox.
- E. Rutherford and H. Geiger, with a note by H. Bateman, "The probability variations in the distribution of
  $\alpha$ particles", *Philosophical Magazine* 20, 1910.
- J. D. C. Little, "A proof for the queuing formula: $L = \lambda W$", *Operations Research* 9(3), 1961.
- On this site: [Derivatives of e^x, ln x, sin x and cos x](../../topics/change/level-8/02-exp-log-trig.md) and
  [Differential equations: a first look](../../topics/change/level-8/07-differential-equations.md) (the calculus used in 14.2),
  [Chapter 13](13-Markov-Chains.md) (Markov chains), and the [Probability book's contents](index.md).
