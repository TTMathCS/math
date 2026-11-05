# 2. Counting and equally likely outcomes

*When all the outcomes of an experiment are equally likely, probability is counting: the number of outcomes in the
event divided by the number in the whole space. That sounds easy, and the formula is; the counting is not. In a
room of 23 people, is a shared birthday likely or unlikely? Is a full house rarer than a flush? What are your chances
in a 6-from-49 lottery? This chapter answers these with the counting tools of permutations and combinations, sorts out
the four ways of drawing a sample, meets the hypergeometric distribution, and ends with Bertrand's paradox, which shows
that "pick at random" can mean different things that give different answers.*

!!! abstract "In this chapter"

    **You will learn:**

    - how to set up equally likely outcomes for dice, cards and lotteries, and count the events you care about
    - the birthday problem, its exact answer, and a quick approximation with a proof
    - the four ways of drawing a sample (ordered or not, with or without replacement), and which of them are equally likely
    - the hypergeometric distribution: how many special items land in a random sample
    - the exact probability of every poker hand, and the classic way to miscount two pair
    - Bertrand's paradox: why "a random chord" has no single answer, and what that teaches about modelling

    **You need:** [Chapter 1](01-What-Probability-Is.md) (sample spaces, events, the axioms, the complement rule), and
    factorials and binomial coefficients $\binom{n}{k}$ from [Combinatorics, chapter 2](../combinatorics/02-Permutations-and-Combinations.md).
    For a gentler version, see the Topics lessons
    [Two dice: 36 outcomes](../../topics/probability/level-3/04-two-dice.md),
    [Equally likely or not](../../topics/probability/level-3/06-equally-likely.md),
    [Probability with combinations](../../topics/probability/level-6/03-combinations-probability.md),
    [The birthday problem](../../topics/probability/level-6/04-birthday-problem.md),
    [The hypergeometric distribution](../../topics/probability/level-7/06-hypergeometric-distribution.md) and
    [Geometric probability](../../topics/probability/level-6/06-geometric-probability.md).

    **Levels:** 2.1 to 2.3 are beginner; 2.4 and 2.5 are beginner to intermediate; 2.6 is intermediate (it uses a little
    geometry of the circle, and areas).

## 2.1 Dice, cards and lotteries

**A question.** Three dice are thrown. A total of 9 can be made from three numbers in six ways
(1+2+6, 1+3+5, 1+4+4, 2+2+5, 2+3+4, 3+3+3), and so can a total of 10 (1+3+6, 1+4+5, 2+2+6, 2+3+5, 2+4+4, 3+3+4).
Yet gamblers in Italy noticed that 10 comes up more often than 9. Why?

### The rule

From Chapter 1: if $\Omega$ is finite and all its outcomes are equally likely, then

$$
P(A) = \frac{|A|}{|\Omega|} ,
$$

where $|A|$ is the number of outcomes in $A$. All the work is in two steps:

1. **Choose a sample space whose outcomes really are equally likely.** For physical objects (dice, cards, balls),
   this almost always means treating every object as distinguishable, even if the objects look the same.
2. **Count** $|A|$ and $|\Omega|$, using the product rule, permutations and combinations.

### Dice

Treat three dice as red, green and blue. An outcome is an ordered triple $(r, g, b)$, and there are $6^3 = 216$ of them,
all equally likely: a fair die has no idea what the other dice are doing.

Now count *ordered* triples for each "way" listed in the question. A way with three different numbers, like $1+2+6$,
can be arranged in $3! = 6$ orders. A way with two equal numbers, like $1+4+4$, in 3 orders (choose which die shows the odd
one out). A way with all three equal, like $3+3+3$, in only 1.

| Total 9 | orders | Total 10 | orders |
|---|---|---|---|
| 1+2+6 | 6 | 1+3+6 | 6 |
| 1+3+5 | 6 | 1+4+5 | 6 |
| 1+4+4 | 3 | 2+2+6 | 3 |
| 2+2+5 | 3 | 2+3+5 | 6 |
| 2+3+4 | 6 | 2+4+4 | 3 |
| 3+3+3 | 1 | 3+3+4 | 3 |
| **total** | **25** | **total** | **27** |

So $P(9) = \frac{25}{216} \approx 0.116$ and $P(10) = \frac{27}{216} = \frac{1}{8} = 0.125$. The six "ways" are not equally likely, because $3+3+3$
needs all three dice to cooperate while $2+3+4$ can happen six ways. This is Galileo's explanation (§1.4).

**The lesson.** Unordered results ("a 1, a 4 and a 4") are usually *not* equally likely. Ordered results from
distinguishable objects usually are.

For two dice the 36 ordered pairs give the familiar triangle of totals:

| total | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| outcomes (of 36) | 1 | 2 | 3 | 4 | 5 | 6 | 5 | 4 | 3 | 2 | 1 |

For a total $s$ between 2 and 7 there are $s - 1$ pairs $(r, s - r)$ with $1 \le r \le s - 1$, and the table is symmetric about 7,
because replacing each die's value $x$ by $7 - x$ (turning the die upside down) changes a total $s$ into $14 - s$.

### Cards

A standard deck has 52 cards: 13 **ranks** (2, 3, ..., 10, jack, queen, king, ace) in each of 4 **suits** (clubs,
diamonds, hearts, spades). A well-shuffled deck means all $52!$ orders are equally likely.

**Example.** What is the probability that the top two cards are both aces?

*Ordered method.* Look only at the top two positions. There are $52 \times 51$ equally likely ordered pairs of cards for them,
and $4 \times 3$ of these are two aces. So the probability is $\frac{12}{2652} = \frac{1}{221} \approx 0.0045$.

*Unordered method.* The top two cards form a set of 2 out of 52; all $\binom{52}{2} = 1326$ sets are equally likely, and $\binom{4}{2} = 6$
of them are two aces. Probability $\frac{6}{1326} = \frac{1}{221}$. The same.

Both methods work, because in the ordered sample space every unordered set corresponds to exactly $2! = 2$ ordered pairs,
so dividing both counts by 2 changes nothing. This is a general principle, proved in §2.3.

**Example.** A hand of 5 cards is dealt. What is the probability that it contains at least one ace? The complement is
"no aces": all 5 cards come from the 48 non-aces. So

$$
P(\text{at least one ace}) = 1 - \frac{\binom{48}{5}}{\binom{52}{5}} = 1 - \frac{1712304}{2598960} \approx 0.3412 .
$$

### Lotteries

In a 6-from-49 lottery (Canada's Lotto 6/49 is one), you choose 6 different numbers from 1 to 49, and the machine draws
6. The order does not matter, and every set of 6 is equally likely to be drawn. The number of possible draws is

$$
\binom{49}{6} = \frac{49 \cdot 48 \cdot 47 \cdot 46 \cdot 45 \cdot 44}{6!} = 13\,983\,816 .
$$

So one ticket wins the jackpot with probability $\frac{1}{13\,983\,816}$, about 1 in 14 million.

**How many of your numbers match?** For your ticket to match exactly $k$ of the drawn numbers, the draw must contain $k$ of
your 6 numbers and $6 - k$ of the 43 you did not pick. So

$$
P(\text{exactly } k \text{ matches}) = \frac{\binom{6}{k}\binom{43}{6-k}}{\binom{49}{6}} .
$$

| matches $k$ | draws | probability |
|---|---|---|
| 0 | 6 096 454 | 0.4360 |
| 1 | 5 775 588 | 0.4130 |
| 2 | 1 851 150 | 0.1324 |
| 3 | 246 820 | 0.01765 (about 1 in 57) |
| 4 | 13 545 | 0.000969 (about 1 in 1032) |
| 5 | 258 | 0.0000184 |
| 6 | 1 | 0.0000000715 |

*Check:* the draw counts add to $13\,983\,816$. Matching nothing at all is the most likely result. This formula is our first
**hypergeometric** probability; §2.4 treats it in general.

**Is any ticket better than another?** No: every set of 6 is equally likely to be drawn, including $\{1, 2, 3, 4, 5, 6\}$. What
differs is how many other people chose the same numbers, and so how many share the prize. Many people pick birthdays
(numbers up to 31) and patterns, so unpopular numbers do not raise your chance of winning but may raise what you get if
you do.

## 2.2 The birthday problem

**A question.** How many people must be in a room before it is more likely than not that two of them share a
birthday?

Most people guess around 180, half of 365. The answer is 23.

### The model

Assume (we return to these assumptions below):

- a year has 365 days (ignore 29 February),
- each person's birthday is equally likely to be any of the 365 days,
- different people's birthdays have nothing to do with each other.

Then a room of $n$ people has a sample space of $365^n$ equally likely ordered lists of birthdays (person 1's birthday,
person 2's, ...).

### The count

Shared birthdays can happen in many overlapping ways, so count the complement: **all $n$ birthdays different**. Person 1
can have any of 365 days, person 2 any of the other 364, person 3 any of the remaining 363, and so on. By the product rule
the number of lists with no repeat is $365 \cdot 364 \cdots (365 - n + 1)$. So

$$
P(\text{all different}) = \frac{365 \cdot 364 \cdots (365 - n + 1)}{365^n} = \prod_{i=0}^{n-1}\left(1 - \frac{i}{365}\right) ,
$$

and $P(\text{some shared birthday}) = 1$ minus this. (The symbol $\prod$ means "multiply together", as $\sum$ means "add".)

| people $n$ | 10 | 20 | 22 | **23** | 30 | 40 | 50 | 57 | 70 |
|---|---|---|---|---|---|---|---|---|---|
| $P(\text{shared})$ | 0.117 | 0.411 | 0.476 | **0.507** | 0.706 | 0.891 | 0.970 | 0.990 | 0.999 |

**Try it in Python.**

```python
def shared(n, days=365):
    p_all_different = 1.0
    for i in range(n):
        p_all_different *= (days - i) / days
    return 1 - p_all_different

n = 1
while shared(n) < 0.5:
    n += 1
print(n, shared(n))   # 23 0.5072972343239857
```

### Why so few?

The surprise comes from thinking about *your* birthday. The question is about *any pair*. With 23 people there are
$\binom{23}{2} = 253$ pairs, and each pair has a $\frac{1}{365}$ chance of matching. That is a lot of chances.

Compare the different question: **how many other people must there be before one of them shares *my* birthday?** Each
other person misses my birthday with probability $\frac{364}{365}$, independently, so with $n$ others,
$P(\text{someone matches me}) = 1 - (364/365)^n$. This first passes $\frac{1}{2}$ at $n = 253$. (That 253 is also the number of pairs among 23
people is a pleasing near-coincidence: in both cases about 253 "chances" of probability $\frac{1}{365}$ are needed.)

### A quick approximation, with proof

*Level: beginner to intermediate.*

**Theorem 2.1.** With $d$ equally likely days and $n$ people,

$$
P(\text{all different}) \le \exp\!\left(-\frac{n(n-1)}{2d}\right) ,
$$

and for $n$ much smaller than $d$ the two sides are close.

*Proof.* For every real number $x$, $1 - x \le e^{-x}$. (The curve $y = e^{-x}$ lies above its tangent line $y = 1 - x$ at $x = 0$, because
it is convex: it bends upwards.) Apply this to each factor:

$$
\prod_{i=0}^{n-1}\left(1 - \frac{i}{d}\right) \le \prod_{i=0}^{n-1} e^{-i/d} = \exp\!\left(-\frac{0 + 1 + \cdots + (n-1)}{d}\right) = \exp\!\left(-\frac{n(n-1)}{2d}\right) . \qquad \square
$$

When $i/d$ is small, $1 - i/d$ and $e^{-i/d}$ are very close (they differ by about $(i/d)^2/2$), which is why the bound is also a good
approximation. Setting the right side equal to $\frac{1}{2}$ gives $n(n-1) \approx 2d \ln 2$, so

$$
n \approx \sqrt{2 \ln 2 \cdot d} \approx 1.18\sqrt{d} .
$$

For $d = 365$ this gives about 22.5. The important fact is the **square root**: a repeat becomes likely after about $\sqrt{d}$
draws, not $d/2$. In cryptography this is the **birthday bound**: a hash function with $2^{128}$ possible outputs is
expected to show a collision after about $2^{64}$ tries, which is why hash outputs are made twice as long as the security
level they promise.

### The assumptions, honestly

- **Leap days.** Including 29 February with its true small frequency changes the answers very slightly.
- **Unequal days.** Real birthdays are not uniform: there are seasonal patterns, and fewer births are scheduled on
  public holidays. It can be proved that *any* unevenness makes a shared birthday *more* likely, not less (the uniform
  distribution is the hardest case for a match), so 23 remains enough.
- **Independence.** Twins break it, in the direction of more matches.

So the model is a slight underestimate of the real chance, and the conclusion "23 is enough" stands.

<figure class="play" data-play="birthday"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> The chance that at least two of n people share a birthday passes one half at just 23 people.</figcaption></figure>

## 2.3 Sampling with and without replacement

**A question.** An urn holds $N$ balls, numbered $1$ to $N$. You draw $k$ of them. How many results are possible, and are they
equally likely?

That depends on two choices.

- **With replacement:** each ball is put back before the next draw, so a ball can be drawn more than once.
- **Without replacement:** drawn balls stay out.
- **Ordered:** we record the sequence (first ball, second ball, ...).
- **Unordered:** we record only which balls were drawn (with multiplicities, if replacing).

| | ordered | unordered |
|---|---|---|
| **with replacement** | $N^k$ sequences | $\binom{N + k - 1}{k}$ multisets |
| **without replacement** | $N(N-1)\cdots(N-k+1) = \frac{N!}{(N-k)!}$ sequences | $\binom{N}{k}$ sets |

These four counts are proved in [Combinatorics, chapter 2](../combinatorics/02-Permutations-and-Combinations.md)
(the bottom-right one is a combination; the top-right one is "stars and bars").

### Which are equally likely?

**Ordered, with replacement.** Each draw is a fresh, fair choice among $N$ balls, so all $N^k$ sequences are equally likely.
The birthday problem is exactly this, with $N = 365$ days and $k$ people.

**Ordered, without replacement.** The first ball is any of $N$, the second any of the $N - 1$ left, and so on, each equally
likely given the past. All $N!/(N-k)!$ sequences are equally likely.

**Unordered, without replacement.** All $\binom{N}{k}$ sets are equally likely.

*Proof.* Each $k$-set corresponds to exactly $k!$ ordered sequences (its $k!$ orderings), and those sequences are equally
likely. So each set has probability $k! \cdot \frac{(N-k)!}{N!} = \frac{1}{\binom{N}{k}}$, the same for every set. $\square$

This is why we may switch freely between ordered and unordered counting for draws without replacement, as in the two
aces example: as long as the event is about *which* balls are drawn (not their order), both methods give the same
answer.

**Unordered, with replacement: NOT equally likely.** Draw twice, with replacement, from $\{1, 2\}$. The unordered results
are $\{1,1\}$, $\{1,2\}$, $\{2,2\}$: three multisets. But $\{1,2\}$ arises from two sequences, $(1,2)$ and $(2,1)$, while $\{1,1\}$ arises from only $(1,1)$.
The true probabilities are $\frac{1}{4}$, $\frac{1}{2}$, $\frac{1}{4}$, not $\frac{1}{3}$ each.

This is precisely the mistake of the "six ways" to make 9 with three dice. It is also a mistake made by Jean le Rond
d'Alembert in the article "Croix ou pile" ("Heads or tails") of the *Encyclopédie* (1754): he argued that the
probability of at least one head in two tosses is $\frac{2}{3}$, reasoning that the possibilities are "head on the first toss
(game over)", "tail then head" and "tail then tail". These three are not equally likely; the right answer is $\frac{3}{4}$.

(In physics, something remarkable happens: for certain particles, called bosons, the unordered results *are* the
equally likely ones. This is Bose-Einstein statistics, and it is an experimental fact about nature, not a counting
mistake. Probability does not decide which outcomes are equally likely; the world does.)

### With versus without: the difference fades for large populations

**Example.** Ten people are chosen from a town of $N$ people, with replacement (the same person can be chosen twice) or
without. The probability that the "with replacement" sample has no repeats is

$$
\frac{N(N-1)\cdots(N-9)}{N^{10}} .
$$

For $N = 1000$ this is about 0.956; for $N = 1\,000\,000$ about 0.99996. When the population is much larger than the sample,
sampling with and without replacement are nearly the same thing. This is why surveys of a few thousand people out of
millions can treat each answer as an independent draw.

**Example.** A box of 20 light bulbs contains 5 faulty ones. You test 4, chosen at random without replacement. What is
the probability that exactly one is faulty?

The sample is an unordered set of 4 from 20: $\binom{20}{4} = 4845$ equally likely sets. Exactly one faulty means choosing 1 of the
5 faulty bulbs and 3 of the 15 good ones: $\binom{5}{1}\binom{15}{3} = 5 \times 455 = 2275$ sets. So the probability is $\frac{2275}{4845} \approx 0.4696$.

## 2.4 The hypergeometric distribution

*Level: beginner to intermediate.*

**A question.** The lottery and the light bulbs had the same shape: a population with some "special" members, a sample
drawn without replacement, and a question about how many special members the sample contains. Can we solve all such
problems at once?

### The formula

A population has $N$ members, of which $D$ are special (faulty bulbs, your lottery numbers, hearts in a deck). A sample of $n$
members is drawn at random without replacement. Let $K$ be the number of special members in the sample.

**Theorem 2.2.** For each whole number $k$,

$$
P(K = k) = \frac{\binom{D}{k}\binom{N-D}{n-k}}{\binom{N}{n}} ,
$$

with the convention that $\binom{a}{b} = 0$ when $b < 0$ or $b > a$.

*Proof.* All $\binom{N}{n}$ samples are equally likely (§2.3). A sample with exactly $k$ special members is made by choosing $k$ of
the $D$ special members and $n - k$ of the $N - D$ others; by the product rule there are $\binom{D}{k}\binom{N-D}{n-k}$ such samples. $\square$

The list of these probabilities, for all $k$, is the **hypergeometric distribution** with parameters $N$, $D$, $n$. (The odd name
comes from a family of series in analysis, the hypergeometric series, whose coefficients have the same shape.) The word
**distribution** here means: a list of the possible values of some quantity together with their probabilities. Chapter 5
makes this precise under the name "random variable".

**The probabilities add up to 1.** They must, since $K$ takes exactly one value. Directly, this says

$$
\sum_{k} \binom{D}{k}\binom{N-D}{n-k} = \binom{N}{n} ,
$$

which is **Vandermonde's identity**. Its counting proof is the proof of Theorem 2.2 read backwards: every $n$-subset of the
population has *some* number $k$ of special members, so sorting the $\binom{N}{n}$ subsets by $k$ and adding gives the identity.

### Examples

**Bridge hands.** A bridge hand is 13 cards from 52. The number of hearts in it is hypergeometric with $N = 52$, $D = 13$, $n = 13$:

| hearts | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|---|
| probability | 0.0128 | 0.0801 | 0.2059 | 0.2863 | 0.2386 | 0.1247 | 0.0416 | 0.0088 |

(Eight or more hearts have total probability about 0.0013.) Three hearts, the "fair share" of 13/4 rounded down, is the most likely.

**Committees.** A committee of 4 is chosen at random from 6 women and 5 men. The number of women is hypergeometric with
$N = 11$, $D = 6$, $n = 4$, and $P(\text{exactly 2 women}) = \frac{\binom{6}{2}\binom{5}{2}}{\binom{11}{4}} = \frac{15 \cdot 10}{330} = \frac{5}{11}$.

**A symmetry.** *Level: intermediate.* Swapping the roles of "special" and "sampled" gives the same numbers:
$\frac{\binom{D}{k}\binom{N-D}{n-k}}{\binom{N}{n}} = \frac{\binom{n}{k}\binom{N-n}{D-k}}{\binom{N}{D}}$. Algebraically, both sides equal
$\frac{D!\,(N-D)!\,n!\,(N-n)!}{N!\,k!\,(D-k)!\,(n-k)!\,(N-D-n+k)!}$, as you can check by writing out the factorials. Conceptually: the
number of items that are both special and sampled does not care which property you thought of first.

### Hypergeometric versus binomial

If the bulbs were tested *with* replacement, each test would find a faulty bulb with probability $\frac{D}{N} = \frac{1}{4}$, independently
of the others, and the number of faulty results would follow the **binomial distribution** of Chapter 5:
$P(K = k) = \binom{4}{k}(1/4)^k(3/4)^{4-k}$. Compare:

| faulty in sample $k$ | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| without replacement, $N = 20$, $D = 5$ | 0.2817 | 0.4696 | 0.2167 | 0.0310 | 0.0010 |
| without replacement, $N = 1000$, $D = 250$ | 0.3158 | 0.4227 | 0.2111 | 0.0466 | 0.0038 |
| with replacement (binomial) | 0.3164 | 0.4219 | 0.2109 | 0.0469 | 0.0039 |

With only 20 bulbs, drawing a faulty one makes the next one less likely to be faulty, so the hypergeometric piles up in
the middle. With 1000 bulbs the effect is tiny and the two distributions almost agree, as §2.3 led us to expect. The
binomial is the large-population limit of the hypergeometric.

## 2.5 Poker hands

*Level: beginner to intermediate.*

**A question.** In five-card poker, a flush beats a straight and a full house beats a flush. Is that because each is rarer
than the one it beats?

A poker hand is 5 cards dealt from a well-shuffled deck, so the sample space is the set of all $\binom{52}{5} = 2\,598\,960$ unordered hands,
all equally likely. The categories, from best to worst, are below; each hand is put in the *best* category it fits. A
**straight** is five consecutive ranks, where the ace may count low (A-2-3-4-5) or high (10-J-Q-K-A) but not in the middle; so there are
10 possible straights by rank, with highest card 5, 6, ..., ace.

### Counting each hand

Each count is a short product-rule argument: decide the ranks, then the suits.

**Straight flush** (a straight, all one suit, including the royal flush 10-J-Q-K-A). Choose the straight (10 ways) and the suit (4):
**40** hands. Of these, 4 are **royal flushes**, leaving **36** other straight flushes.

**Four of a kind** (four cards of one rank). Choose the rank (13), take all four cards of it, then any fifth card from the
other 48: $13 \times 48 =$ **624**.

**Full house** (three of one rank and two of another). Choose the rank of the three (13) and which 3 of its 4 suits ($\binom{4}{3} = 4$), then the
rank of the pair (12 left) and which 2 suits ($\binom{4}{2} = 6$): $13 \cdot 4 \cdot 12 \cdot 6 =$ **3744**.

**Flush** (five of one suit, not a straight). Choose the suit (4) and 5 of its 13 ranks ($\binom{13}{5} = 1287$), then remove the 40 straight
flushes: $5148 - 40 =$ **5108**.

**Straight** (five consecutive ranks, not all one suit). Choose the straight (10) and a suit for each card ($4^5 = 1024$), then remove the
40 straight flushes: $10240 - 40 =$ **10 200**.

**Three of a kind** (three of one rank, the other two of two different other ranks). Choose the rank (13) and 3 suits (4). The
other two cards have two *different* ranks from the remaining 12, chosen together: $\binom{12}{2} = 66$, and a suit for each, $4^2 = 16$.
Total $13 \cdot 4 \cdot 66 \cdot 16 =$ **54 912**.

**Two pair.** Choose the two ranks for the pairs *together*: $\binom{13}{2} = 78$. Choose 2 suits for each pair: $6 \cdot 6 = 36$. The fifth card
is any of the $52 - 8 = 44$ cards of the other 11 ranks. Total $78 \cdot 36 \cdot 44 =$ **123 552**.

**One pair.** Choose the pair's rank (13) and suits (6). The other three cards have three different ranks from the other 12,
chosen together, $\binom{12}{3} = 220$, and any suit each, $4^3 = 64$. Total $13 \cdot 6 \cdot 220 \cdot 64 =$ **1 098 240**.

**High card** (none of the above). Five different ranks that are not a straight: $\binom{13}{5} - 10 = 1277$ rank sets; suits not all the same:
$4^5 - 4 = 1020$. Total $1277 \times 1020 =$ **1 302 540**.

| hand | count | probability | about 1 in |
|---|---|---|---|
| royal flush | 4 | 0.0000015 | 649 740 |
| other straight flush | 36 | 0.0000139 | 72 193 |
| four of a kind | 624 | 0.000240 | 4 165 |
| full house | 3 744 | 0.00144 | 694 |
| flush | 5 108 | 0.00197 | 509 |
| straight | 10 200 | 0.00392 | 255 |
| three of a kind | 54 912 | 0.0211 | 47 |
| two pair | 123 552 | 0.0475 | 21 |
| one pair | 1 098 240 | 0.4226 | 2.4 |
| high card | 1 302 540 | 0.5012 | 2.0 |
| **total** | **2 598 960** | **1** | |

*Check:* the counts add exactly to $\binom{52}{5}$, and a computer that lists all 2,598,960 hands and classifies each one gets the
same table. So yes: the ranking of poker hands is exactly the order of rarity.

### The classic mistake: two pair counted twice

A tempting count for two pair is: "choose the rank of the first pair (13) and its suits (6), then the rank of the second
pair (12) and its suits (6), then the fifth card (44)", giving $13 \cdot 6 \cdot 12 \cdot 6 \cdot 44 = 247\,104$. That is exactly twice the true
count. The hand with a pair of kings and a pair of fives is produced twice: once as "first pair kings, second pair fives",
once as "first pair fives, second pair kings". The two pairs play the same role, so they must be chosen together, with
$\binom{13}{2}$, not one after the other. The same trap catches the two odd cards in three of a kind and the three odd cards in one pair.

**The rule of thumb.** In a product-rule count, every factor must describe a different *role*. If two choices are
interchangeable, choose them as a set.

**Try it in Python.** A brute-force check of the whole table takes under a minute:

```python
import itertools
from collections import Counter

deck = [(rank, suit) for rank in range(13) for suit in range(4)]   # rank 12 = ace
tally = Counter()
for hand in itertools.combinations(deck, 5):
    ranks = sorted(r for r, s in hand)
    flush = len({s for r, s in hand}) == 1
    shape = sorted(Counter(ranks).values(), reverse=True)
    straight = len(set(ranks)) == 5 and (ranks[4] - ranks[0] == 4 or ranks == [0, 1, 2, 3, 12])
    if straight and flush: tally["straight flush"] += 1
    elif shape[0] == 4:    tally["four of a kind"] += 1
    elif shape == [3, 2]:  tally["full house"] += 1
    elif flush:            tally["flush"] += 1
    elif straight:         tally["straight"] += 1
    elif shape[0] == 3:    tally["three of a kind"] += 1
    elif shape == [2, 2, 1]: tally["two pair"] += 1
    elif shape[0] == 2:    tally["one pair"] += 1
    else:                  tally["high card"] += 1
print(tally)
```

## 2.6 When "equally likely" fails: Bertrand's paradox

*Level: intermediate.*

**A question.** Draw a circle, and inside it an equilateral triangle whose corners lie on the circle. Now draw a chord of
the circle "at random". What is the probability that the chord is longer than a side of the triangle?

Joseph Bertrand posed this in his *Calcul des probabilités* (1889). He gave three natural answers, all different.

Let the circle have radius $r$. The triangle's side is $r\sqrt{3}$. A chord at distance $d$ from the centre has length $2\sqrt{r^2 - d^2}$ (by Pythagoras,
half the chord, the distance $d$ and the radius make a right triangle). So

$$
\text{chord longer than } r\sqrt{3} \iff 2\sqrt{r^2 - d^2} > r\sqrt{3} \iff r^2 - d^2 > \tfrac{3}{4}r^2 \iff d < \tfrac{r}{2} .
$$

So the question is: how likely is a random chord to pass within $\frac{r}{2}$ of the centre?

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 300" role="img" aria-label="A circle of radius 120 with an inscribed equilateral triangle and an inner circle of radius 60; chords longer than a side of the triangle are exactly those that cross the inner circle">
  <circle cx="150" cy="150" r="120" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="150" cy="150" r="60" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor"/>
  <polygon points="150,30 253.92,210 46.08,210" fill="none" stroke="#eea66f" stroke-width="2"/>
  <line x1="40.91" y1="100" x2="259.09" y2="100" stroke="#7ccf9a" stroke-width="2.5"/>
  <line x1="188.25" y1="263.74" x2="267.63" y2="126.26" stroke="currentColor" stroke-dasharray="5 4"/>
  <circle cx="150" cy="150" r="2.5" fill="currentColor"/>
  <line x1="150" y1="150" x2="150" y2="100" stroke="currentColor"/>
  <text x="156" y="130" font-size="12" fill="currentColor">d</text>
  <text x="150" y="292" text-anchor="middle" font-size="12" fill="currentColor">longer than a side ⇔ crosses the inner circle (radius r/2)</text>
</svg>
</div>

(The green chord is at distance $d = 50 < 60 = \frac{r}{2}$ and is longer than a side; the dashed chord misses the inner circle and is shorter.)

### Three answers

**Method 1: random endpoints. Answer $\frac{1}{3}$.** Choose two points independently and uniformly on the circle, and join them.
By rotating the picture, we may take the first point at a corner of the triangle. The chord is longer than a side
exactly when the second point lands on the arc *opposite* that corner, between the other two corners. The three corners
cut the circle into three equal arcs of 120°, so the probability is $\frac{1}{3}$.

**Method 2: random radius, random distance. Answer $\frac{1}{2}$.** Choose a radius at random, then a point uniformly along it, and
draw the chord through that point perpendicular to the radius. The distance $d$ is uniform on $[0, r]$, and $d < \frac{r}{2}$ for half of
that interval. Probability $\frac{1}{2}$.

**Method 3: random midpoint. Answer $\frac{1}{4}$.** Choose a point uniformly in the disc (every region gets probability proportional
to its area) and draw the chord that has this point as its midpoint. The chord passes within $\frac{r}{2}$ of the centre exactly when its
midpoint does, that is, when the point lies in the inner disc of radius $\frac{r}{2}$. The probability is the ratio of areas,
$\frac{\pi (r/2)^2}{\pi r^2} = \frac{1}{4}$.

### What went wrong?

Nothing went wrong with the arithmetic. Each method is a correct computation for a *different experiment*. "A random
chord" does not name an experiment until you say how the chord is produced, and the three procedures put probability on
the set of chords in different ways:

- Method 1 favours long chords less than method 2 does, because a uniformly chosen second endpoint often lands near the
  first and gives a short chord.
- Method 3 favours short chords most, because most of a disc's area is near its edge, and a midpoint near the edge
  means a chord far from the centre.

The classical definition "favourable over possible" needs a way to *count* or *measure* possibilities, and with infinitely
many chords there is no single obvious way. **Equally likely is a modelling choice, and a continuum of outcomes has many
inequivalent "uniform" choices.** In a finite space, symmetry often makes the choice obvious; here it does not.

**Try it in Python.** Simulate all three experiments with $r = 1$:

```python
import math, random

def method1():
    a, b = random.uniform(0, 2*math.pi), random.uniform(0, 2*math.pi)
    return 2 * abs(math.sin((a - b) / 2))          # chord length from the angle between endpoints

def method2():
    d = random.uniform(0, 1)
    return 2 * math.sqrt(1 - d*d)

def method3():
    while True:                                     # uniform point in the disc by rejection
        x, y = random.uniform(-1, 1), random.uniform(-1, 1)
        if x*x + y*y < 1:
            return 2 * math.sqrt(1 - x*x - y*y)

side = math.sqrt(3)
for m in (method1, method2, method3):
    n = 200_000
    print(m.__name__, sum(m() > side for _ in range(n)) / n)   # about 0.333, 0.5, 0.25
```

### Is there a "right" answer?

In 1973 the physicist Edwin Jaynes argued, in a paper titled "The well-posed problem", that if the problem is meant to
describe *straws thrown onto a circle from a distance*, without any preferred position, size or direction, then the
answer should not change when the circle is moved, rotated or rescaled, and that this invariance singles out method 2 and
the answer $\frac{1}{2}$. He reported that experiments with straws agreed. That is a good argument for that physical situation. It
does not make $\frac{1}{3}$ or $\frac{1}{4}$ wrong for the experiments they describe; it shows how to choose a model by thinking about
where the randomness comes from.

**The lesson for the rest of the book.** Before computing a probability, say precisely what experiment produces the
outcome. When there are finitely many outcomes, look for the distinguishable objects and use symmetry. When there are
infinitely many, as in Part III, the choice of distribution is part of the model, and it must be justified by the
situation, not by the word "random".

## Check yourself

??? question "1. Three dice are thrown. What is the probability that all three show different numbers? That the total is 10?"

    Different numbers: $6 \cdot 5 \cdot 4 = 120$ ordered triples out of 216, so $\frac{120}{216} = \frac{5}{9}$. Total 10: $\frac{27}{216} = \frac{1}{8}$, from the table in §2.1.

??? question "2. Five cards are dealt. What is the probability of exactly three aces?"

    Choose 3 of the 4 aces, $\binom{4}{3} = 4$, and 2 of the 48 non-aces, $\binom{48}{2} = 1128$. Probability $\frac{4 \cdot 1128}{2598960} = \frac{4512}{2598960} \approx 0.00174$,
    about 1 in 576. This is hypergeometric with $N = 52$, $D = 4$, $n = 5$, $k = 3$.

??? question "3. In the 6-from-49 lottery, a prize is paid for matching 3 numbers or more. What is the probability of winning some prize with one ticket?"

    Add the rows $k = 3$ to $6$ of the table: $\frac{246820 + 13545 + 258 + 1}{13983816} = \frac{260624}{13983816} \approx 0.01864$, about 1 in 54.

??? question "4. A room has 10 married couples. Two of the 20 people are chosen at random. What is the probability that they are married to each other?"

    There are $\binom{20}{2} = 190$ equally likely pairs, of which 10 are couples: $\frac{10}{190} = \frac{1}{19}$. *Check another way:* whoever is chosen
    first, the second is one of 19 others, exactly one of whom is the spouse.

??? question "5. A Mars year lasts about 669 sols (Mars days). Assuming birthdays are spread evenly over 669 sols, how many people must be in a room on Mars before a shared birthday is more likely than not?"

    The approximation $n \approx 1.18\sqrt{669} \approx 30.5$ suggests about 31. Exactly: with 30 people $P(\text{shared}) \approx 0.483$, with 31 it is about 0.506,
    computed from $1 - \prod_{i=0}^{n-1}(1 - i/669)$. So 31 people.

??? question "6. Explain why 'choose the first pair's rank, then the second pair's rank' overcounts two pair by a factor of exactly 2, and not by some other factor."

    Each two-pair hand has two pairs with different ranks, say $a$ and $b$. The "ordered" count produces it once with $a$ first and once
    with $b$ first, and in no other way, since the fifth card's rank is different from both and so cannot be mistaken for a pair. So
    every hand is counted exactly twice, and the true count is $247104/2 = 123552$.

??? question "7. A committee of 5 is chosen at random from 8 engineers and 7 geologists. Find the probability that geologists are in the majority."

    Hypergeometric with $N = 15$, $D = 7$ geologists, $n = 5$. Majority means 3, 4 or 5 geologists:
    $\frac{\binom{7}{3}\binom{8}{2} + \binom{7}{4}\binom{8}{1} + \binom{7}{5}\binom{8}{0}}{\binom{15}{5}} = \frac{35 \cdot 28 + 35 \cdot 8 + 21}{3003} = \frac{980 + 280 + 21}{3003} = \frac{1281}{3003} = \frac{61}{143} \approx 0.427$.

??? question "8. A deck is shuffled and dealt to four players, 13 cards each. What is the probability that each player gets exactly one ace?"

    Look only at where the 4 aces end up: they occupy a random set of 4 of the 52 positions in the deal, all $\binom{52}{4} = 270725$ sets
    equally likely. Each player owns 13 positions, and "one ace each" means choosing one position from each player's 13: $13^4 = 28561$
    sets. Probability $\frac{28561}{270725} \approx 0.1055$.

??? question "9. With two fair coins, d'Alembert said the chance of at least one head is 2/3. Give the right answer two ways."

    Ordered sample space $\{HH, HT, TH, TT\}$, equally likely: three contain a head, so $\frac{3}{4}$. Or by the complement: no head means $TT$,
    probability $\frac{1}{4}$, so $1 - \frac{1}{4} = \frac{3}{4}$. D'Alembert's three cases "$H$", "$TH$", "$TT$" have probabilities $\frac{1}{2}, \frac{1}{4}, \frac{1}{4}$.

??? question "10. In Bertrand's problem, find the probability that a random chord is longer than the radius $r$, under each of the three methods."

    Longer than $r$ means $2\sqrt{r^2 - d^2} > r$, that is $d < \frac{\sqrt{3}}{2}r$. Method 2: $d$ is uniform on $[0, r]$, so $\frac{\sqrt{3}}{2} \approx 0.866$.
    Method 3: the midpoint lies in the disc of radius $\frac{\sqrt{3}}{2}r$, probability $(\frac{\sqrt{3}}{2})^2 = \frac{3}{4}$. Method 1: the chord is longer than $r$
    when the arc between the endpoints is more than 60° (a chord of length $r$ subtends 60°, making an equilateral triangle with the
    centre); the second endpoint must avoid the arc within 60° of the first on either side, 120° of 360°, so the probability is $\frac{2}{3}$.

??? question "11. Prove that, when drawing $k$ balls with replacement from $N$, the probability that all are different is $\frac{N!}{(N-k)!\,N^k}$, and use it to find the chance that 4 rolls of a die are all different."

    The sample space is the $N^k$ equally likely sequences (§2.3). Sequences with no repeat: $N$ choices for the first, $N - 1$ for the
    second, ..., $N - k + 1$ for the $k$-th, which is $\frac{N!}{(N-k)!}$. Divide. For a die, $N = 6$, $k = 4$: $\frac{6 \cdot 5 \cdot 4 \cdot 3}{6^4} = \frac{360}{1296} = \frac{5}{18} \approx 0.278$.

??? question "12. (Harder.) Show that the hypergeometric probabilities $h(k) = P(K = k)$ satisfy $\frac{h(k+1)}{h(k)} = \frac{(D-k)(n-k)}{(k+1)(N-D-n+k+1)}$, and use this to explain why 3 is the most likely number of hearts in a bridge hand."

    Write $h(k)$ with factorials and divide: $\frac{\binom{D}{k+1}}{\binom{D}{k}} = \frac{D-k}{k+1}$ and $\frac{\binom{N-D}{n-k-1}}{\binom{N-D}{n-k}} = \frac{n-k}{N-D-n+k+1}$; the $\binom{N}{n}$ cancels.
    The ratio is more than 1 (probabilities still rising) exactly when $(D-k)(n-k) > (k+1)(N-D-n+k+1)$. For hearts, $N = 52$, $D = n = 13$: at $k = 2$ the
    ratio is $\frac{11 \cdot 11}{3 \cdot 28} = \frac{121}{84} > 1$, at $k = 3$ it is $\frac{10 \cdot 10}{4 \cdot 29} = \frac{100}{116} < 1$. So $h$ rises up to $k = 3$ and falls after: 3 is the peak.

## What you learned

- With equally likely outcomes, $P(A) = |A|/|\Omega|$. Make the outcomes equally likely by treating physical objects as
  distinguishable; unordered results are usually not equally likely.
- The birthday problem: 23 people give a better-than-even chance of a shared birthday; a repeat among $d$ equally likely
  values becomes likely after about $1.18\sqrt{d}$ draws, a fact with a one-line proof from $1 - x \le e^{-x}$.
- Of the four ways to sample, three are equally likely (ordered with or without replacement, unordered without); unordered
  with replacement is not, which is d'Alembert's mistake.
- The hypergeometric distribution, $\binom{D}{k}\binom{N-D}{n-k}/\binom{N}{n}$, counts special items in a sample without replacement; for a large
  population it is close to the binomial.
- The poker table: every category counted by choosing ranks then suits, with interchangeable choices made together.
- Bertrand's paradox: "random" must name a procedure; with infinitely many outcomes, different procedures give different
  answers, and the model has to come from the situation.

**Next:** [Chapter 3](03-Conditional-Probability-and-Independence.md), on how probabilities change when you learn
something: conditional probability, trees, the law of total probability, independence, Monty Hall and the gambler's ruin.

## Further reading

- William Feller, *An Introduction to Probability Theory and Its Applications*, Volume 1 (3rd edition, 1968), Chapter II
  (combinatorial analysis, including the birthday problem and occupancy).
- Sheldon Ross, *A First Course in Probability* (10th edition, 2019), Chapter 2, Section 5.
- Frederick Mosteller, *Fifty Challenging Problems in Probability with Solutions* (1965), for the birthday problem,
  the ace problem and many more.
- Joseph Bertrand, *Calcul des probabilités* (1889), Chapter I.
- E. T. Jaynes, "The well-posed problem", *Foundations of Physics* 3 (1973), 477 to 492.
- Persi Diaconis and Brian Skyrms, *Ten Great Ideas about Chance* (2018), Chapters 1 and 2, on the history of equally likely
  outcomes.
- On this site: the Topics lessons [Rolling a die](../../topics/probability/level-1/06-rolling-a-die.md),
  [The dice sum race](../../topics/probability/level-2/04-dice-sum-race.md),
  [Compound events with tables](../../topics/probability/level-4/01-compound-tables.md) and
  [Uniform distributions and choosing a model](../../topics/probability/level-7/07-choosing-a-model.md);
  [Combinatorics, chapter 2](../combinatorics/02-Permutations-and-Combinations.md) and
  [chapter 3](../combinatorics/03-Binomial-Coefficients.md) for permutations, combinations and Vandermonde's identity;
  the cryptography book's chapter on hash functions, [cryptography.akadian.ca/book/](https://cryptography.akadian.ca/book/),
  for the birthday bound in practice.
