---
title: "The gambler's fallacy and the hot hand"
---

# The gambler's fallacy and the hot hand

*Probability · level 5, lesson 6 of 6*

## A question to start

Here are two rows of 30 coin flips. Orange is heads, blue is tails. One row came from a computer imitating a fair coin.
The other was made up by a person trying to make it "look random".

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 520 105" role="img" aria-label="Two rows of 30 coin flips shown as orange (heads) and blue (tails) dots. Row A switches between heads and tails very often and never has more than 2 in a row. Row B has a run of six tails near the start.">
  <text x="12" y="40" font-size="14" fill="currentColor">A</text>
  <circle cx="40" cy="35" r="7" fill="#eea66f"/><circle cx="56" cy="35" r="7" fill="#9cc9ea"/><circle cx="72" cy="35" r="7" fill="#eea66f"/><circle cx="88" cy="35" r="7" fill="#eea66f"/><circle cx="104" cy="35" r="7" fill="#9cc9ea"/><circle cx="120" cy="35" r="7" fill="#eea66f"/><circle cx="136" cy="35" r="7" fill="#9cc9ea"/><circle cx="152" cy="35" r="7" fill="#9cc9ea"/><circle cx="168" cy="35" r="7" fill="#eea66f"/><circle cx="184" cy="35" r="7" fill="#9cc9ea"/><circle cx="200" cy="35" r="7" fill="#eea66f"/><circle cx="216" cy="35" r="7" fill="#9cc9ea"/><circle cx="232" cy="35" r="7" fill="#eea66f"/><circle cx="248" cy="35" r="7" fill="#eea66f"/><circle cx="264" cy="35" r="7" fill="#9cc9ea"/><circle cx="280" cy="35" r="7" fill="#9cc9ea"/><circle cx="296" cy="35" r="7" fill="#eea66f"/><circle cx="312" cy="35" r="7" fill="#9cc9ea"/><circle cx="328" cy="35" r="7" fill="#eea66f"/><circle cx="344" cy="35" r="7" fill="#9cc9ea"/><circle cx="360" cy="35" r="7" fill="#eea66f"/><circle cx="376" cy="35" r="7" fill="#eea66f"/><circle cx="392" cy="35" r="7" fill="#9cc9ea"/><circle cx="408" cy="35" r="7" fill="#eea66f"/><circle cx="424" cy="35" r="7" fill="#9cc9ea"/><circle cx="440" cy="35" r="7" fill="#9cc9ea"/><circle cx="456" cy="35" r="7" fill="#eea66f"/><circle cx="472" cy="35" r="7" fill="#9cc9ea"/><circle cx="488" cy="35" r="7" fill="#eea66f"/><circle cx="504" cy="35" r="7" fill="#9cc9ea"/>
  <text x="12" y="85" font-size="14" fill="currentColor">B</text>
  <circle cx="40" cy="80" r="7" fill="#9cc9ea"/><circle cx="56" cy="80" r="7" fill="#9cc9ea"/><circle cx="72" cy="80" r="7" fill="#eea66f"/><circle cx="88" cy="80" r="7" fill="#9cc9ea"/><circle cx="104" cy="80" r="7" fill="#9cc9ea"/><circle cx="120" cy="80" r="7" fill="#9cc9ea"/><circle cx="136" cy="80" r="7" fill="#9cc9ea"/><circle cx="152" cy="80" r="7" fill="#9cc9ea"/><circle cx="168" cy="80" r="7" fill="#9cc9ea"/><circle cx="184" cy="80" r="7" fill="#eea66f"/><circle cx="200" cy="80" r="7" fill="#eea66f"/><circle cx="216" cy="80" r="7" fill="#9cc9ea"/><circle cx="232" cy="80" r="7" fill="#eea66f"/><circle cx="248" cy="80" r="7" fill="#eea66f"/><circle cx="264" cy="80" r="7" fill="#9cc9ea"/><circle cx="280" cy="80" r="7" fill="#eea66f"/><circle cx="296" cy="80" r="7" fill="#9cc9ea"/><circle cx="312" cy="80" r="7" fill="#eea66f"/><circle cx="328" cy="80" r="7" fill="#eea66f"/><circle cx="344" cy="80" r="7" fill="#9cc9ea"/><circle cx="360" cy="80" r="7" fill="#9cc9ea"/><circle cx="376" cy="80" r="7" fill="#eea66f"/><circle cx="392" cy="80" r="7" fill="#9cc9ea"/><circle cx="408" cy="80" r="7" fill="#9cc9ea"/><circle cx="424" cy="80" r="7" fill="#9cc9ea"/><circle cx="440" cy="80" r="7" fill="#eea66f"/><circle cx="456" cy="80" r="7" fill="#9cc9ea"/><circle cx="472" cy="80" r="7" fill="#9cc9ea"/><circle cx="488" cy="80" r="7" fill="#9cc9ea"/><circle cx="504" cy="80" r="7" fill="#eea66f"/>
  <rect x="79" y="70" width="98" height="20" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
</svg>
</div>

Which one is real? Most people pick **A**, because B has six tails in a row, and "a fair coin would not do that".
In fact **B** is the real one, and A is the fake. By the end of this lesson you will see why long runs are a sign of
real randomness, not a sign that something is wrong, and why so many people (and gamblers) get this backwards.

## The idea

### The gambler's fallacy

A **fallacy** is a mistake in reasoning that seems convincing. The **gambler's fallacy** is the belief that after a
run of one outcome, the other outcome is "due": after five heads, tails must be more likely, to "even things out".

It is wrong for a coin, a die or a roulette wheel, because their results are **independent** (lesson 3). The coin has
no memory. It does not know what it did before, and nothing pushes it towards tails. The chance of heads on the next
flip is $\tfrac12$, whatever has happened.

### A proof by counting

Look at all the ways 6 flips can go. There are $2^6 = 64$ sequences, and for a fair coin they are all equally likely,
each with chance $\tfrac{1}{64}$. That includes

$$\text{HHHHHH} \quad\text{and}\quad \text{HHHHHT}.$$

Both have chance $\tfrac{1}{64}$. So **given** that the first five were heads, the sixth is equally likely to be H or
T. Six heads in a row is rare, but so is **every** particular sequence of six. What makes HHHHHH feel special is only
that it is easy to describe.

### "The law of averages" does not correct

People say "it will even out by the law of averages". There is a real law here, the **law of large numbers** (level 3
and [level 8](../level-8/index.md)): over many flips, the **fraction** of heads gets close to $\tfrac12$. But it does
this by **swamping**, not by **correcting**.

Suppose the first 20 flips gave 15 heads and 5 tails: 10 more heads than tails. Over the next 980 flips we expect
about 490 heads and 490 tails, with no catching up. After 1000 flips that is about $15 + 490 = 505$ heads, which is
50.5%. The **gap** in numbers is still about 10, but the **fraction** is now very close to a half, because 10 is tiny
compared with 1000. The early excess is not cancelled; it is diluted.

### Long streaks are normal

How long is the longest run in 100 fair flips? Most people guess 3 or 4. The truth is longer. Working through all the
possibilities (a computer can do this exactly) gives:

| In 100 fair flips | Chance |
| --- | --- |
| Some run of 5 or more the same | about 0.97 |
| Some run of 6 or more the same | about 0.81 |
| Some run of 7 or more the same | about 0.54 |
| Some run of 8 or more the same | about 0.31 |

So in 100 flips, a run of 6 is more likely than not, and a run of 7 happens about half the time. Even in only 20
flips, the chance of a run of at least 4 is about 0.77.

Why so many? Because there are so many **places** for a run to start. Any particular stretch of 6 flips is all the same
with chance only $2 \times \tfrac{1}{64} = \tfrac{1}{32}$, but 100 flips contain 95 such stretches, and that is a lot of
chances (compare "at least one", lesson 4).

This is how the fake in the question gives itself away. A person trying to look random switches between H and T far
too often. Row A switches 23 times in 29 gaps; a fair coin switches about half the time, so about 14 or 15 times. Row
B switches 15 times. And row A never has more than 2 in a row, which in 30 real flips is very unusual.

### A famous run

The story goes that in 1913, at the casino in Monte Carlo, a roulette ball landed on black 26 times in a row, and
gamblers lost a great deal betting on red, sure that red was "due". A European roulette wheel has 18 red pockets, 18
black and 1 green zero, so black comes up with chance $\tfrac{18}{37}$. Twenty-six blacks in a row from a given spin
has chance

$$\left(\frac{18}{37}\right)^{26} \approx 0.0000000073,$$

about 1 in 137 million. Very rare for one particular start. But casinos spin wheels millions of times, so somewhere,
at some time, very long runs will happen. And at every spin during that run, red still had its usual
$\tfrac{18}{37}$.

### The hot hand: the opposite belief

The **hot hand** is the opposite feeling: after a run of successes, success is **more** likely. "She has scored five in
a row, give her the ball!"

For a coin, this is just as wrong as the gambler's fallacy: the coin is no more "hot" than "due". But a person is not
a coin. Confidence, tiredness, an easy or hard defender could make one shot depend on the last. So for people, the
hot hand is a **question about data**, not something we can settle by thinking.

A well-known 1985 study of basketball shooting by Thomas Gilovich, Robert Vallone and Amos Tversky found that players'
hits and misses looked much like independent coin flips, and called the hot hand a "cognitive illusion". In 2018 the
economists Joshua Miller and Adam Sanjurjo showed that the usual way of counting "what happens after a streak" in a
short sequence has a hidden bias, and that after correcting for it, the old data show some evidence of a small hot
hand. Researchers still argue about how big it is. The lesson for us: independence is a claim about the world, and
for people it has to be checked, not assumed.

### When the past really does matter

The gambler's fallacy is a mistake only when the events are independent. When they are **not**, the past can change
the chances, and that is just ordinary probability:

- **Drawing without replacement.** If 10 cards have been dealt from a pack and none was an ace, the next card is an
  ace with chance $\tfrac{4}{42}$, more than the usual $\tfrac{4}{52}$. Some card players keep track of cards seen
  for exactly this reason.
- **Learning about a coin or die.** If a "fair" coin lands heads 10 times in a row, the chance is
  $\left(\tfrac12\right)^{10} = \tfrac{1}{1024}$. You might start to suspect the coin is **biased**. But notice which
  way: a bias would favour heads, not tails. The past is evidence about the coin, never a reason to expect the coin
  to "make up for it".
- **Weather.** Rainy days tend to follow rainy days, so yesterday really does change today's chance.

<figure class="play" data-play="spinner" data-parts="red:1,blue:1"><span class="ai-tag">AI-created</span><figcaption><b>No memory.</b> After five reds in a row, blue is still exactly as likely as red on the next spin.</figcaption></figure>

## Worked examples

**1. After five heads.** A fair coin has landed heads 5 times. Find the chance the next flip is heads.

The flips are independent, so it is $\tfrac12$. In terms of sequences: HHHHHH and HHHHHT each have chance
$\tfrac{1}{64}$, so each is half of the "five heads first" cases, whose chance is $\tfrac{2}{64} = \tfrac{1}{32}$.

**2. Swamping.** After 100 flips there are 60 heads. About how many heads will there be after 1000 flips in all?

The next 900 flips should give about 450 heads. Total about $60 + 450 = 510$ heads, which is 51%, close to a half,
even though nothing "corrected" the first 100.

**3. Runs in 4 flips, by listing.** Find the chance of a run of at least 3 the same in 4 flips.

The 16 sequences include HHHH, HHHT, THHH, TTTT, TTTH and HTTT, and no others with three in a row. So the chance is
$\tfrac{6}{16} = \tfrac38$. Even in just 4 flips, a run of 3 happens more than a third of the time.

**4. When it is not independent.** Twenty cards are dealt from a full pack and none of them is a heart. Find the
chance the next card is a heart.

All 13 hearts are among the 32 cards left, so the chance is $\tfrac{13}{32} \approx 0.41$, much more than
$\tfrac14$. This is not the gambler's fallacy: dealing without replacement really does change the pack.

## Try it

1. A family has four boys. Assuming each child is a boy or girl with chance $\tfrac12$, independently, what is the
   chance the next child is a girl?
2. Which is more likely in 5 fair flips: HHHHH or HTHHT?
3. A roulette wheel (18 red, 18 black, 1 green) has landed on red 8 times in a row. What is the chance of red on the
   next spin?
4. After 50 flips a coin shows 32 heads. About how many heads would you expect after 1050 flips in total? What
   fraction is that?
5. A die has been rolled 12 times without a 6. A player says "a 6 is due, it must be very likely now". What is the
   real chance of a 6 on the next roll, and why?
6. Twelve cards have been dealt from a full pack, including all four kings. What is the chance the next card is a
   king? Is this the gambler's fallacy?
7. A coin lands heads 10 times in a row. Find the chance of this for a fair coin. If you began to doubt the coin,
   would you bet on heads or tails next?
8. Explain in two or three sentences why a basketball player's hot streak might be different from a coin's, and what
   you would need to find out.

??? note "Answers"
    1. $\dfrac12$. The earlier children do not change the chance for the next one (under the stated assumption).
    2. Equally likely. Each particular sequence of 5 flips has chance $\left(\dfrac12\right)^5 = \dfrac{1}{32}$.
    3. Still $\dfrac{18}{37} \approx 0.49$. The wheel has no memory.
    4. The next 1000 flips should give about 500 heads, so about $32 + 500 = 532$ heads out of 1050, which is about
       $\dfrac{532}{1050} \approx 0.507$, or 50.7%.
    5. Still $\dfrac16$, assuming the die is fair and the rolls are independent. Twelve rolls without a 6 is not even
       unusual: it has chance $\left(\dfrac56\right)^{12} \approx 0.11$.
    6. All four kings are gone, so the chance is $0$. This is **not** the gambler's fallacy: cards dealt without
       replacement are not independent, and the pack really has changed.
    7. $\left(\dfrac12\right)^{10} = \dfrac{1}{1024}$. If you doubt the coin, the evidence suggests it may favour
       **heads**, so heads is the sensible bet (and a fair coin would make the bet even anyway).
    8. A coin cannot feel confident or tired, so its flips are independent. A player's shots might depend on each
       other (confidence, fatigue, how the other team defends). To find out, you would need lots of real data on
       what happens right after streaks, compared with the player's usual rate, and you would have to count carefully
       to avoid the hidden bias that Miller and Sanjurjo found.

## Common mistake

**"It's due."** For independent events nothing is ever due. The chance is the same on every try. If you catch
yourself thinking a result is due, ask: "how would the coin know?"

**Thinking a long streak proves something is wrong.** In a long sequence of random events, long runs are expected.
A streak is evidence of a problem only if it is much longer than chance usually gives for that many tries, and you
need to work that out, not feel it.

## Where it leads

- Back: [Trees with unequal branches](05-unequal-branch-trees.md) · Next level: [Level 6: Conditional probability](../level-6/index.md),
  which starts with the exact meaning of "given" and of "independent".
- [Level 5 page](index.md) · [Probability topic page](../index.md)
- Testing whether a coin or die is really fair from data is a question for [Statistics](../../statistics/index.md).
- The waiting time for the first 6 (a die can go a long time without one) is the geometric distribution in
  [level 7](../level-7/index.md).
- The law of large numbers, properly stated, is in [level 8](../level-8/index.md).
