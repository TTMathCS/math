---
title: "Random walks and Markov chains"
---

# Random walks and Markov chains

*Probability · level 8, lesson 6 of 7*

## A question to start

You have 3 dollars. You play a fair game over and over: each round you toss a coin and win 1 dollar on heads, lose 1
dollar on tails. You stop when you reach 10 dollars (your goal) or 0 dollars (you are ruined).

What is the chance you reach your goal? It seems like a hard question: the game could last 5 rounds or 500, and could
wander up and down in countless ways. Yet the answer is a single fraction, $\tfrac{3}{10}$, and it takes about three
lines to prove. And on average the game lasts exactly $3 \times 7 = 21$ rounds.

This lesson is a first look at **random processes**: chance that unfolds step by step, where each step depends on where
you are now. They model gamblers, molecules, stock prices, the weather and the pages of the web.

## The idea

### The simple random walk

A walker stands at 0 on a number line. Each second she tosses a fair coin and steps one place right (+1) on heads or
left ($-1$) on tails. Her position after $n$ steps is

$$S_n = X_1 + X_2 + \dots + X_n,$$

where each step $X_i$ is $+1$ or $-1$ with probability $\tfrac12$ each, independently. This is the **simple random walk**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 200" role="img" aria-label="Path of a simulated random walk of 60 steps, each step up or down by one, wandering away from zero and back">
  <line x1="30" y1="100" x2="450" y2="100" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="30" y1="12" x2="30" y2="188" stroke="currentColor" stroke-width="1.5"/>
  <text x="25.0" y="184.0" font-size="10" text-anchor="end" fill="currentColor">−10</text>
  <text x="25.0" y="144.0" font-size="10" text-anchor="end" fill="currentColor">−5</text>
  <text x="25.0" y="104.0" font-size="10" text-anchor="end" fill="currentColor">0</text>
  <text x="25.0" y="64.0" font-size="10" text-anchor="end" fill="currentColor">5</text>
  <text x="25.0" y="24.0" font-size="10" text-anchor="end" fill="currentColor">10</text>
  <polyline points="30.0,100.0 36.9,92.0 43.8,84.0 50.8,92.0 57.7,100.0 64.6,108.0 71.5,116.0 78.4,124.0 85.3,132.0 92.2,140.0 99.2,148.0 106.1,140.0 113.0,148.0 119.9,140.0 126.8,148.0 133.8,156.0 140.7,148.0 147.6,156.0 154.5,164.0 161.4,156.0 168.3,148.0 175.2,140.0 182.2,148.0 189.1,140.0 196.0,132.0 202.9,140.0 209.8,132.0 216.8,124.0 223.7,116.0 230.6,108.0 237.5,100.0 244.4,108.0 251.3,100.0 258.2,92.0 265.2,84.0 272.1,92.0 279.0,84.0 285.9,76.0 292.8,84.0 299.8,76.0 306.7,84.0 313.6,92.0 320.5,84.0 327.4,76.0 334.3,68.0 341.2,60.0 348.2,52.0 355.1,44.0 362.0,36.0 368.9,44.0 375.8,36.0 382.8,44.0 389.7,52.0 396.6,60.0 403.5,52.0 410.4,60.0 417.3,68.0 424.2,60.0 431.2,52.0 438.1,44.0 445.0,52.0" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <text x="445.0" y="196.0" font-size="10" text-anchor="end" fill="currentColor">step 60</text>
</svg>
</div>

That picture is one run of 60 steps made by a computer. The walker drifted down to $-8$, came back through 0 around
step 30, climbed to $+8$ and finished at $+6$. Every run is different, but the rules of level 7 tell us what to expect.

- Each step has mean $0$ and variance $E(X_i^2) - 0^2 = 1$.
- So $E(S_n) = 0$ and $\operatorname{Var}(S_n) = n$ (independent variances add), and $\operatorname{SD}(S_n) = \sqrt n$.

On average the walker goes nowhere, but her typical distance from the start grows like $\sqrt n$: about 8 after 60
steps, 10 after 100 steps, 100 after 10 000 steps. This $\sqrt n$ law is why a drop of ink spreads slowly in still
water: each molecule does something like a random walk, and to spread 10 times further takes 100 times as long.

By the central limit theorem (lesson 5), $S_n$ is approximately $\operatorname{N}(0, n)$ for large $n$. So after 100 steps,
the walker is within 20 places of the start (2 standard deviations) about 95% of the time.

**Back at the start.** The walker can only be at 0 after an even number of steps $2n$, with exactly $n$ steps each way:

$$P(S_{2n} = 0) = \binom{2n}{n}\frac{1}{2^{2n}}.$$

This is 0.5 after 2 steps, 0.246 after 10 and 0.080 after 100. It shrinks, but slowly (roughly like
$\tfrac{1}{\sqrt{\pi n}}$). A famous theorem (beyond this lesson) says that the one-dimensional walker returns to 0
**with probability 1**: however far she wanders, she is certain to come back eventually, though the expected time to do
so is infinite.

### The gambler's ruin

Now add two walls. A gambler has $k$ dollars and plays the fair coin game, stopping at $0$ (ruin) or $N$ (goal). Let
$p_k$ be the probability of reaching $N$ starting from $k$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 90" role="img" aria-label="A row of positions 0 to 10; the walker starts at 3, steps left or right by one each round, and stops on reaching 0 (ruin) or 10 (goal)">
  <circle cx="30" cy="40" r="13" fill="#eea66f" stroke="currentColor" stroke-width="1.2"/>
  <text x="30.0" y="44.0" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <circle cx="70" cy="40" r="13" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="70.0" y="44.0" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="110" cy="40" r="13" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="110.0" y="44.0" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <circle cx="150" cy="40" r="13" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
  <text x="150.0" y="44.0" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <circle cx="190" cy="40" r="13" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="190.0" y="44.0" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <circle cx="230" cy="40" r="13" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="230.0" y="44.0" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <circle cx="270" cy="40" r="13" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="270.0" y="44.0" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <circle cx="310" cy="40" r="13" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="310.0" y="44.0" font-size="11" text-anchor="middle" fill="currentColor">7</text>
  <circle cx="350" cy="40" r="13" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="350.0" y="44.0" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <circle cx="390" cy="40" r="13" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="390.0" y="44.0" font-size="11" text-anchor="middle" fill="currentColor">9</text>
  <circle cx="430" cy="40" r="13" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <text x="430.0" y="44.0" font-size="11" text-anchor="middle" fill="currentColor">10</text>
  <text x="30.0" y="75.0" font-size="11" text-anchor="middle" fill="currentColor">ruin</text>
  <text x="430.0" y="75.0" font-size="11" text-anchor="middle" fill="currentColor">goal</text>
  <text x="150.0" y="75.0" font-size="11" text-anchor="middle" fill="currentColor">start</text>
</svg>
</div>

**First-step analysis.** Look at one round from position $k$ (with $0 < k < N$). Half the time the gambler moves to
$k + 1$, half the time to $k - 1$, and from there the game simply carries on. So

$$p_k = \tfrac12 p_{k+1} + \tfrac12 p_{k-1}, \qquad \text{with } p_0 = 0,\ p_N = 1.$$

Rearranged: $p_{k+1} - p_k = p_k - p_{k-1}$. The gaps between neighbouring values are all **equal**, so the $p_k$ go
up in equal steps from $p_0 = 0$ to $p_N = 1$: each step is $\tfrac1N$, and

$$p_k = \frac{k}{N}.$$

With 3 dollars and a goal of 10, $p_3 = \tfrac{3}{10}$. Notice what it means: in a **fair** game, your chance of
doubling your money before losing it is exactly $\tfrac12$, whatever the stakes. You cannot beat a fair game by
choosing when to stop. (This follows from the expected value: your expected final fortune $N p_k + 0$ must equal your
starting $k$, because each fair round leaves the expected fortune unchanged.)

The same first-step method for the expected length $D_k$ of the game gives
$D_k = 1 + \tfrac12 D_{k+1} + \tfrac12 D_{k-1}$, with solution $D_k = k(N - k)$. From 3 with goal 10: $3 \times 7 = 21$
rounds. (A computer simulation of 100 000 such games gave a win rate of 0.299 and an average of 21.06 rounds.)

**An unfair game.** If each round is won with probability $p \ne \tfrac12$ and lost with probability $q = 1 - p$, the
same method (with a little more algebra) gives

$$p_k = \frac{1 - r^k}{1 - r^N}, \qquad r = \frac{q}{p}.$$

Betting 1 dollar on red at roulette, $p = \tfrac{18}{37}$, so $r = \tfrac{19}{18}$. Starting with 10 dollars and aiming
for 20, the chance of success is about 0.368, not 0.5. Starting with 50 and aiming for 100 (still "doubling"), it falls
to about 0.063. A small edge against you becomes a huge one over a long game: a gambler's best hope in an unfair game is
to bet big and play briefly.

### Markov chains

The random walk has a key property: **where you go next depends only on where you are now**, not on how you got
there. A random process with this property is called a **Markov chain** (after the Russian mathematician Andrey Markov).
It has:

- a set of **states** (positions, weather types, web pages);
- **transition probabilities** $P(\text{next state} = j \mid \text{current state} = i)$, the same at every step.

**A weather model.** Suppose (as a simple model, with made-up numbers) tomorrow's weather depends only on today's:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 170" role="img" aria-label="Two-state weather chain: Sunny stays sunny with 0.8 and turns rainy with 0.2; Rainy stays rainy with 0.6 and turns sunny with 0.4">
  <circle cx="140" cy="90" r="38" fill="#eea66f"/>
  <text x="140.0" y="95.0" font-size="13" text-anchor="middle" fill="currentColor">Sunny</text>
  <circle cx="320" cy="90" r="38" fill="#9cc9ea"/>
  <text x="320.0" y="95.0" font-size="13" text-anchor="middle" fill="currentColor">Rainy</text>
  <defs><marker id="ah78" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
  <path d="M 172 70 Q 230 40 288 70" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#ah78)"/>
  <text x="230.0" y="46.0" font-size="12" text-anchor="middle" fill="currentColor">0.2</text>
  <path d="M 288 110 Q 230 140 172 110" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#ah78)"/>
  <text x="230.0" y="144.0" font-size="12" text-anchor="middle" fill="currentColor">0.4</text>
  <path d="M 106 72 C 60 40 60 140 106 108" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#ah78)"/>
  <text x="52.0" y="94.0" font-size="12" text-anchor="middle" fill="currentColor">0.8</text>
  <path d="M 354 72 C 400 40 400 140 354 108" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#ah78)"/>
  <text x="408.0" y="94.0" font-size="12" text-anchor="middle" fill="currentColor">0.6</text>
</svg>
</div>

| today \ tomorrow | Sunny | Rainy |
| --- | --- | --- |
| **Sunny** | 0.8 | 0.2 |
| **Rainy** | 0.4 | 0.6 |

Each **row** adds to 1, because tomorrow must be something. This table is the **transition matrix**.

**Two days ahead.** It is sunny today. What is the chance it is sunny in two days? Tomorrow is either sunny or rainy;
add the two paths (a tree, from level 4):

$$P(\text{S in 2 days}) = 0.8 \times 0.8 + 0.2 \times 0.4 = 0.64 + 0.08 = 0.72.$$

Doing this for every starting state and every ending state is exactly **matrix multiplication**: the two-step
transition matrix is the square of the one-step matrix.

$$\begin{pmatrix} 0.8 & 0.2 \\ 0.4 & 0.6 \end{pmatrix}^2 = \begin{pmatrix} 0.72 & 0.28 \\ 0.56 & 0.44 \end{pmatrix}.$$

**The long run.** Keep going: after 3 days, from sunny, $P(\text{S}) = 0.688$; from rainy, $0.624$. After 10 days, both
are about $0.667$. The starting weather is forgotten, and the chain settles into a **stationary distribution**
$(\pi_S, \pi_R)$ that does not change from one day to the next:

$$\pi_S = 0.8\,\pi_S + 0.4\,\pi_R \quad \Longrightarrow \quad 0.2\,\pi_S = 0.4\,\pi_R \quad \Longrightarrow \quad \pi_S = 2\pi_R.$$

With $\pi_S + \pi_R = 1$: $\pi_S = \tfrac23$, $\pi_R = \tfrac13$. In the long run, two days in three are sunny. In the
equation, "sunny tomorrow" comes from sunny today (0.8 of them) plus rainy today (0.4 of them), and the balance says
the flow into "sunny" equals the amount already there.

Stationary distributions are the idea behind the PageRank method for ranking web pages (a "random surfer" clicking links forms a
Markov chain, and pages visited more in the long run rank higher), and how Markov chain Monte Carlo methods, used in
physics and statistics, sample from complicated distributions.

<figure class="play" data-play="galton"><span class="ai-tag">AI-created</span><figcaption><b>Random steps.</b> Each ball takes left or right steps at random and lands near the middle most often.</figcaption></figure>

## Worked examples

**1. A walk's spread.** After 400 steps of a simple random walk, find the mean and standard deviation of the position,
and the approximate chance the walker is more than 40 places from the start. $E = 0$, $\sigma = \sqrt{400} = 20$.
More than 40 away is beyond 2 standard deviations, so about 5% (CLT).

**2. Ruin with a small goal.** A gambler with 8 dollars plays the fair game, aiming for 10. Chance of success:
$\tfrac{8}{10} = 0.8$. Expected length: $8 \times 2 = 16$ rounds. Expected final fortune: $0.8 \times 10 + 0.2 \times 0 = 8$,
equal to the start, as a fair game must give.

**3. Rain in two days.** It is rainy today. $P(\text{rainy in 2 days}) = 0.4 \times 0.2 + 0.6 \times 0.6 = 0.08 + 0.36 = 0.44$,
matching the bottom-right entry of the squared matrix.

**4. A three-state chain.** A web visitor on page A goes to B or C with probability $\tfrac12$ each; from B always to C;
from C always to A. Long-run share: $\pi_A = \pi_C$ (only C leads to A, always), $\pi_B = \tfrac12\pi_A$ (only half of
A's visitors go to B), and $\pi_C = \tfrac12\pi_A + \pi_B = \pi_A$ ✓. With $\pi_A + \tfrac12\pi_A + \pi_A = 1$:
$\pi_A = \pi_C = \tfrac25$ and $\pi_B = \tfrac15$.

## Try it

1. A simple random walk takes 4 steps. List the possible final positions and their probabilities. Check that the
   variance is 4.
2. Find $P(S_6 = 0)$ for a simple random walk.
3. A gambler has 20 dollars, plays the fair coin game and stops at 0 or 50. Find the chance of reaching 50 and the
   expected number of rounds.
4. Use the formula $p_k = \tfrac{1 - r^k}{1 - r^N}$ to show that $p_1 = \tfrac{18}{37}$ when $N = 2$ at roulette (start
   with 1 dollar, stop at 2). Why is that obvious?
5. In the weather model, it is sunny on Monday. Find the probability that it is sunny on Wednesday and on Thursday.
6. Change the weather model so that a sunny day is followed by a sunny day with probability 0.9 (and rainy 0.1), and a
   rainy day by sunny with 0.3. Find the long-run fraction of sunny days.
7. Explain why a fair-coin random walk spreads only about 100 places in 10 000 steps, even though it moves 10 000 times.
8. Show that $p_k = \tfrac kN$ satisfies $p_k = \tfrac12 p_{k+1} + \tfrac12 p_{k-1}$ and the end conditions, and that
   $D_k = k(N - k)$ satisfies $D_k = 1 + \tfrac12 D_{k+1} + \tfrac12 D_{k-1}$ with $D_0 = D_N = 0$.

??? note "Answers"
    1. Positions $-4, -2, 0, 2, 4$ with probabilities $\tfrac{1}{16}, \tfrac{4}{16}, \tfrac{6}{16}, \tfrac{4}{16}, \tfrac{1}{16}$
       (number of right steps 0 to 4, binomial). Mean 0. $E(S^2) = \tfrac{16 + 4 \cdot 4 + 0 + 4 \cdot 4 + 16}{16} = \tfrac{64}{16} = 4$. ✓
    2. $\dbinom63 / 2^6 = \tfrac{20}{64} = 0.3125$.
    3. $\tfrac{20}{50} = 0.4$. Expected rounds $20 \times 30 = 600$.
    4. $r = \tfrac{19}{18}$: $p_1 = \tfrac{1 - r}{1 - r^2} = \tfrac{1}{1 + r} = \tfrac{1}{1 + 19/18} = \tfrac{18}{37}$. Obvious
       because from 1 with walls at 0 and 2, the very first round decides the game: win it (chance $\tfrac{18}{37}$) or
       lose it.
    5. Wednesday is two days on: 0.72. Thursday is three days on: $0.72 \times 0.8 + 0.28 \times 0.4 = 0.576 + 0.112 = 0.688$.
    6. $\pi_S = 0.9\pi_S + 0.3\pi_R$, so $0.1\pi_S = 0.3\pi_R$ and $\pi_S = 3\pi_R$. So $\pi_S = \tfrac34$.
    7. The steps cancel each other: the position is a sum of 10 000 independent $\pm 1$ steps with mean 0, so its
       standard deviation is $\sqrt{10\,000} = 100$. Most of the movement is back and forth.
    8. $\tfrac12 \cdot \tfrac{k + 1}{N} + \tfrac12 \cdot \tfrac{k - 1}{N} = \tfrac{2k}{2N} = \tfrac kN$ ✓, and
       $p_0 = 0$, $p_N = 1$ ✓. For $D$: $\tfrac12(k + 1)(N - k - 1) + \tfrac12(k - 1)(N - k + 1)$; expand each:
       $(k + 1)(N - k - 1) = k(N - k) + (N - k) - k - 1$ and $(k - 1)(N - k + 1) = k(N - k) - (N - k) + k - 1$.
       Their average is $k(N - k) - 1$, so $1 + [k(N - k) - 1] = k(N - k)$ ✓. And $D_0 = 0$, $D_N = 0$ ✓.

## Common mistake

**Thinking a fair game can be beaten by a stopping rule.** "Stop when I'm ahead" does not change the odds: in a fair
game, the chance of reaching a goal before ruin exactly balances so that the expected fortune stays where it started.

**Reading the transition table by columns.** Each **row** is "from this state" and must add to 1. The columns need not
add to anything in particular.

## Where it leads

- Back: [The law of large numbers and the central limit theorem](05-large-numbers-clt.md) · Next: [Monte Carlo methods](07-monte-carlo.md)
- [Level 8 page](index.md) · [Probability topic page](../index.md)
- Matrices, matrix powers and the eigenvalues behind stationary distributions:
  [U of T MAT240, unit 10](../../../uoft/MAT240H1/unit10.md) (eigenvalues and diagonalization).
- Recurrences like $p_{k+1} - p_k = p_k - p_{k-1}$: [Patterns](../../patterns/index.md) and [Algebra](../../algebra/index.md).
