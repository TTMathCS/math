---
title: "Expected value"
---

# Expected value

*Probability · level 7, lesson 2 of 7*

## A question to start

An old fairground game called **chuck-a-luck** works like this. You bet 1 dollar on a number from 1 to 6. Three dice
are rolled. If your number shows on one die, you get your dollar back plus 1 dollar; on two dice, your dollar back
plus 2; on all three, your dollar back plus 3. If it shows on none, you lose your dollar.

The stallholder's patter goes: "Three dice, and each one has a 1 in 6 chance of your number. That's three chances
in six, an even bet, and sometimes I pay double or triple!" It sounds generous. Is it? By the end of this lesson you
will find the exact amount the game takes from a player per bet, in the long run: about 8 cents.

## The idea

### The long-run average

Take the simplest game. Pay 1 dollar and roll a die; if you roll a 6 you are paid 5 dollars. Let $X$ be your
**profit**: $+4$ dollars on a 6 (paid 5, minus the 1 you spent), and $-1$ dollar otherwise.

| $x$ | $+4$ | $-1$ |
| --- | --- | --- |
| $P(X = x)$ | $\tfrac16$ | $\tfrac56$ |

Imagine playing $N$ times, where $N$ is large. About $\tfrac16 N$ of the games give $+4$ and about $\tfrac56 N$ give
$-1$. The total profit is about

$$4 \cdot \tfrac16 N + (-1) \cdot \tfrac56 N = \left(4 \cdot \tfrac16 - 1 \cdot \tfrac56\right) N = -\tfrac16 N.$$

The average profit per game is the total divided by $N$, and the $N$ cancels: $-\tfrac16$ of a dollar, about
$-17$ cents. What is left is "each value times its probability, added up". That is the definition.

### The definition

The **expected value** (or **mean**) of a discrete random variable $X$ is

$$E(X) = \sum x \, P(X = x),$$

the sum over every value $x$ of the value times its probability. It is also written $\mu$ (Greek "mu") or $\mu_X$.
It is a **weighted average** of the values: each value is weighted by how often it happens.

Three things to notice:

- It is a **long-run average**, not a prediction for one go. In one game of the die stall you win 4 or lose 1; you
  never lose 17 cents.
- It need **not** be a possible value. For one fair die,
  $E(X) = \tfrac{1 + 2 + 3 + 4 + 5 + 6}{6} = 3.5$, though nobody rolls 3.5.
- It is the **balance point** of the probability histogram. If the bars were blocks of wood on a weightless ruler,
  the ruler would balance on a pin placed at $E(X)$. For a symmetric histogram, like the sum of two dice, the balance
  point is the centre, 7.

Why it is called "expected" is a historical accident; "long-run average" is the honest name. The link between the
two, the fact that averages really do settle down near $E(X)$, is the **law of large numbers**, proved in
[level 8](../level-8/index.md).

<figure class="sketch"><span class="ai-tag">AI-created</span><svg viewBox="0 0 640 390" role="img" aria-labelledby="sk-m-chuck-t"><title id="sk-m-chuck-t">In 216 equally likely rolls of three dice, your number shows on no die 125 times, on one 75 times, on two 15 times and on all three once: in total the player loses 17 dollars, about 8 cents a bet</title><defs><filter id="sk-m-chuck-pen"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="3.2"/></filter><filter id="sk-m-chuck-paper"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="7"/><feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 .10 0"/></filter><pattern id="sk-m-chuck-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="7" stroke="#8a4a2a" stroke-width="1.1" opacity=".55"/></pattern><pattern id="sk-m-chuck-dots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r="1" fill="#8a4a2a" opacity=".5"/><circle cx="6.5" cy="7" r=".8" fill="#8a4a2a" opacity=".4"/></pattern><marker id="sk-m-chuck-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L9 5L1 9" fill="none" stroke="#3a2a1e" stroke-width="1.6" stroke-linecap="round"/></marker></defs><rect width="640" height="390" filter="url(#sk-m-chuck-paper)"/><g filter="url(#sk-m-chuck-pen)"><text x="30" y="44" class="h">Chuck-a-luck, 216 rolls</text><text x="40" y="106" class="l">on no die</text><path class="p rust" d="M200 86 L525.0 86 L525.0 114 L200 114Z"/><text x="535.0" y="106" class="s">125 times, lose 1</text><text x="40" y="158" class="l">on one die</text><path class="p gold" d="M200 138 L395.0 138 L395.0 166 L200 166Z"/><text x="405.0" y="158" class="s">75 times, win 1</text><text x="40" y="210" class="l">on two dice</text><path class="p gold" d="M200 190 L239.0 190 L239.0 218 L200 218Z"/><text x="249.0" y="210" class="s">15 times, win 2</text><text x="40" y="262" class="l">on all three</text><path class="p gold" d="M200 242 L202.6 242 L202.6 270 L200 270Z"/><text x="212.6" y="262" class="s">once, win 3</text><path class="p" d="M40 310 L610 310"/><text x="40" y="340" class="l">−125 + 75 + 30 + 3 = −17 dollars in 216 bets</text><text x="40" y="368" class="s">about 8 cents lost on every 1-dollar bet, in the long run. Not an even bet.</text></g></svg><figcaption>Sketched for this page. Bar lengths to scale.</figcaption></figure>

### Fair games, precisely

In early levels "fair" meant "everyone has the same chance". With money, a sharper definition is:

**A game is fair when the expected profit of a player is 0.**

Then nobody gains or loses in the long run. The die stall above is unfair to the player by about 17 cents a game. To
make it fair, choose the payout $w$ so that the expected amount received equals the cost:

$$w \cdot \tfrac16 = 1 \quad \Longrightarrow \quad w = 6 \text{ dollars}.$$

There is a neat way to see it: in six games you expect one 6, so a fair stall pays back the 6 dollars it took in
those six games. Real stalls, lotteries and casinos are never fair: the negative expected value for the player is
how they pay their bills.

### Rules for expected value

Two rules make expected values much easier.

**Rule 1: scaling and shifting.** For numbers $a$ and $b$,

$$E(aX + b) = a\,E(X) + b.$$

Reason: $E(aX + b) = \sum (ax + b) P(x) = a \sum x P(x) + b \sum P(x) = a E(X) + b \cdot 1$, because the
probabilities add to 1. Example: a die stall pays 2 dollars for every spot on the die and charges 8 dollars to play.
Profit is $2X - 8$, so $E = 2(3.5) - 8 = -1$ dollar.

**Rule 2: adding.** For any two random variables $X$ and $Y$ on the same experiment,

$$E(X + Y) = E(X) + E(Y).$$

Reason: $E(X + Y)$ adds $(x + y)$ times the probability of each **outcome**. Split it into the sum of the $x$ parts
and the sum of the $y$ parts; the first is $E(X)$ and the second is $E(Y)$. Nothing in this argument needs $X$ and
$Y$ to be independent, and that is what makes the rule so powerful.

Two dice: each has mean 3.5, so the expected sum is $3.5 + 3.5 = 7$, with no table needed. (The long way agrees:
the 36 sums add to 252, and $252 \div 36 = 7$.)

### Counting with indicators

Rule 2 gives a beautiful trick. To find the expected **number** of times something happens, write the count as a sum
of **indicators**: random variables that are 1 if a particular thing happens and 0 if not. An indicator $I$ with
$P(I = 1) = p$ has $E(I) = 1 \cdot p + 0 \cdot (1 - p) = p$.

**Example.** Roll a die 10 times. Let $S$ be the number of sixes. Then $S = I_1 + I_2 + \dots + I_{10}$, where $I_k$
is 1 if roll $k$ is a six. Each $E(I_k) = \tfrac16$, so $E(S) = 10 \cdot \tfrac16 = \tfrac53 \approx 1.67$.

**A surprising example.** Ten people throw their hats in a pile and each takes one at random. What is the expected
number who get their own hat back? Let $I_k$ be 1 if person $k$ gets their own hat; $P(I_k = 1) = \tfrac{1}{10}$.
So the expected number is $10 \cdot \tfrac{1}{10} = 1$. With 100 people, it is still $100 \cdot \tfrac{1}{100} = 1$.
The indicators here are **not** independent (if nine people have their own hats, so does the tenth), but Rule 2 does
not care.

### When the average is infinite

Expected value is not always finite. In the **St Petersburg game**, a coin is tossed until the first head; if that
happens on toss $k$, you are paid $2^k$ dollars. The chance of the first head on toss $k$ is $\left(\tfrac12\right)^k$,
so

$$E = 2 \cdot \tfrac12 + 4 \cdot \tfrac14 + 8 \cdot \tfrac18 + \dots = 1 + 1 + 1 + \dots,$$

which grows without limit. Yet nobody would pay a million dollars to play: half the time you win only 2. This
puzzle (posed in the 1700s) is one reason people think about **risk** as well as the average, which is the subject of
the next lesson.

<figure class="play" data-play="dice" data-n="1"><span class="ai-tag">AI-created</span><figcaption><b>The long-run average.</b> Over many rolls a die averages 3.5, a value it can never show.</figcaption></figure>

## Worked examples

**1. Chuck-a-luck.** Let $X$ be the player's profit on a 1-dollar bet. The number of dice showing your number is
like three independent trials with chance $\tfrac16$. Out of the $6^3 = 216$ equally likely outcomes:

- none of the three dice show your number: $5^3 = 125$ outcomes, profit $-1$;
- exactly one: $3 \times 5^2 = 75$ outcomes (choose which die, the other two miss), profit $+1$;
- exactly two: $3 \times 5 = 15$ outcomes, profit $+2$;
- all three: 1 outcome, profit $+3$.

Check: $125 + 75 + 15 + 1 = 216$. ✓

$$E(X) = \frac{-125 + 75 + 30 + 3}{216} = \frac{-17}{216} \approx -0.079.$$

The player loses about 7.9 cents per dollar bet. The patter's "three chances in six" counts the outcomes with two or
three matches several times over: the chance that your number shows **at all** is $\tfrac{91}{216} \approx 0.42$, less
than a half.

**2. A raffle.** 500 tickets are sold at 2 dollars each. There is one prize of 100 dollars and four prizes of 25
dollars. Expected prize money per ticket:
$100 \cdot \tfrac{1}{500} + 25 \cdot \tfrac{4}{500} = \tfrac{200}{500} = 0.40$ dollars. Expected profit:
$0.40 - 2 = -1.60$ dollars. The organisers collect 1000 dollars and pay out 200, raising 800, which is
$500 \times 1.60$.

**3. Roulette.** A European roulette wheel has 37 pockets: 0, and 1 to 36, of which 18 are red. A 1-dollar bet on red
pays 1 dollar profit if red comes up and loses the dollar otherwise.

$$E = 1 \cdot \tfrac{18}{37} + (-1) \cdot \tfrac{19}{37} = -\tfrac{1}{37} \approx -0.027.$$

The single green zero is the whole of the casino's edge: about 2.7 cents per dollar, every bet, for ever.

**4. Making a game fair.** A game costs 2 dollars. You roll a die. On a 6 you receive $w$ dollars, on a 4 or 5 you
receive 2 dollars, otherwise nothing. Find $w$ for a fair game.

Expected amount received: $w \cdot \tfrac16 + 2 \cdot \tfrac26 = \tfrac{w + 4}{6}$. Fair means this equals the
2-dollar cost: $\tfrac{w + 4}{6} = 2$, so $w + 4 = 12$ and $w = 8$ dollars.

## Try it

1. A spinner gives 0 points with probability $\tfrac12$, 3 points with probability $\tfrac13$ and 12 points with
   probability $\tfrac16$. Find the expected score.
2. A game costs 2 dollars. Toss two coins; you receive 5 dollars if both are heads. Find the expected profit. What
   price would make it fair?
3. Using the distribution of the larger of two dice from lesson 1 ($P(M = m) = \tfrac{2m - 1}{36}$), find $E(M)$.
4. $E(X) = 3.5$. Find $E(3X + 1)$ and $E(10 - X)$.
5. A raffle sells 1000 tickets at 5 dollars. Prizes: one of 1000 dollars and two of 250 dollars. Find the expected
   profit per ticket.
6. A phone costs 300 dollars and has a 5% chance of breaking in a year. Insurance costs 20 dollars a year. What is the
   expected cost of breakage without insurance? Why might someone still buy it?
7. Shuffle a deck of 52 cards and turn them over one by one while counting "ace, two, three, ..., king, ace, two,
   ..." (four times through). A **match** is when the card turned shows the rank you say. Find the expected number of
   matches.
8. A coin is tossed until the first head, at most 3 times. You win 2, 4 or 8 dollars if the first head is on toss 1,
   2 or 3, and nothing if there is no head. Find the expected win. What would the fair price be?

??? note "Answers"
    1. $0 \cdot \tfrac12 + 3 \cdot \tfrac13 + 12 \cdot \tfrac16 = 0 + 1 + 2 = 3$ points.
    2. Expected amount received: $5 \cdot \tfrac14 = 1.25$ dollars. Expected profit $1.25 - 2 = -0.75$ dollars. A
       price of 1.25 dollars would make it fair.
    3. $E(M) = \tfrac{1 \cdot 1 + 2 \cdot 3 + 3 \cdot 5 + 4 \cdot 7 + 5 \cdot 9 + 6 \cdot 11}{36} = \tfrac{1 + 6 + 15 + 28 + 45 + 66}{36} = \tfrac{161}{36} \approx 4.47$.
    4. $E(3X + 1) = 3(3.5) + 1 = 11.5$. $E(10 - X) = 10 - 3.5 = 6.5$.
    5. Expected prize: $\tfrac{1000 + 2 \times 250}{1000} = 1.50$ dollars. Expected profit: $1.50 - 5 = -3.50$
       dollars.
    6. $0.05 \times 300 = 15$ dollars a year, less than the 20 dollar price, so on average the buyer loses 5 dollars
       a year. Someone might still buy it because a sudden 300 dollar bill could be much harder to pay than a steady
       20 dollars: the expected value ignores how much a big loss hurts.
    7. Let $I_k$ be 1 if card $k$ matches the rank called. Whatever rank is called at position $k$, 4 of the 52
       cards have that rank, so $P(I_k = 1) = \tfrac{4}{52} = \tfrac{1}{13}$. Expected matches:
       $52 \cdot \tfrac{1}{13} = 4$.
    8. $2 \cdot \tfrac12 + 4 \cdot \tfrac14 + 8 \cdot \tfrac18 + 0 \cdot \tfrac18 = 1 + 1 + 1 = 3$ dollars. A price of
       3 dollars would make it fair.

## Common mistake

**Reading the expected value as "what will happen".** An expected profit of $-0.17$ dollars does not mean you lose
17 cents a game. It means the **average** over many games is close to $-0.17$. In a handful of games anything can
happen, which is exactly why games of chance tempt people.

**Using profit and payout inconsistently.** Decide first whether $X$ is the amount you are **paid** or your
**profit** (paid minus cost). Profit = payout $-$ cost, and by Rule 1, $E(\text{profit}) = E(\text{payout}) - \text{cost}$.
Mixing them (adding the stake back in for some values but not others) is the most common error in game questions.

## Where it leads

- Back: [Random variables and their distributions](01-random-variables.md) · Next: [Spread of a random variable](03-variance-spread.md)
- [Level 7 page](index.md) · [Probability topic page](../index.md)
- The mean of data, which this mirrors: [Statistics](../../statistics/index.md).
- The St Petersburg sum $1 + 1 + 1 + \dots$ is a divergent series: see [U of T MAT137, unit 13](../../../uoft/MAT137/unit13.md)
  and [Infinity](../../infinity/index.md).
