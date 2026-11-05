---
title: "Experimental and theoretical probability"
---

# Experimental and theoretical probability

*Probability · level 3, lesson 5 of 6*

## A question to start

Flip a fair coin 10 times and count the heads. The chance of heads is $\tfrac12$, so you "should" get 5 heads.

Here is a surprise: **most of the time, you will not get exactly 5.** Getting exactly 5 heads out of 10 happens only
about one time in four. Three times out of four you get some other number, like 4, or 6, or 3.

So what does "the chance of heads is $\tfrac12$" really promise? This lesson answers that, with real numbers from a
computer that flipped a coin a thousand times.

## The idea

### Two ways to find a probability

So far you have found probabilities by **thinking**: count the equally likely outcomes, and make a fraction. A coin
has 2 faces, so $P(\text{heads}) = \tfrac12$. This is called the **theoretical probability**. "Theoretical" means it
comes from reasoning, before anything is actually tried.

There is a second way: **do the experiment** many times, and count. If you flip a coin 100 times and get 43 heads,
then heads happened in $\tfrac{43}{100}$ of the flips. This fraction is called the **experimental probability**, or
the **relative frequency**:

$$\text{relative frequency} = \frac{\text{number of times the event happened}}{\text{number of tries}}$$

"Frequency" means how often something happens. "Relative" means compared with the number of tries. 43 heads is a lot
out of 100, but very few out of 10 000; the fraction tells you how often it happened **for its size**.

It is often easier to compare relative frequencies as decimals: $\tfrac{43}{100} = 0.43$, and the theoretical
probability $\tfrac12 = 0.5$.

### What a computer saw

A computer flipped a fair (pretend) coin 1000 times and kept count as it went. Here is how many heads it had seen
after different numbers of flips.

| Flips so far | 10 | 20 | 50 | 100 | 200 | 500 | 1000 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Heads so far | 3 | 6 | 19 | 43 | 94 | 232 | 495 |
| Relative frequency | 0.3 | 0.3 | 0.38 | 0.43 | 0.47 | 0.464 | 0.495 |

After 10 flips, only 3 were heads: 0.3, a long way from 0.5. That is not a broken coin. Small numbers of tries jump
around a lot. The same computer then did five more separate runs of 10 flips and got 6, 6, 3, 4 and 4 heads. Not one
of them was exactly 5.

But look at what happens as the number of flips grows. Here is the relative frequency of heads after **every** flip,
from the first to the thousandth.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 450 230" role="img" aria-label="A line chart of the fraction of heads after each of 1000 computer coin flips: it jumps around a lot at first, then settles close to the dashed line at one half">
  <rect x="50" y="20" width="380" height="160" fill="none" stroke="currentColor" stroke-width="1"/>
  <line x1="50" y1="100.0" x2="430" y2="100.0" stroke="#eea66f" stroke-width="2" stroke-dasharray="6 4"/>
  <polyline fill="none" stroke="currentColor" stroke-width="1.5" points="50.4,20.0 51.1,126.7 51.9,116.0 52.7,111.4 53.4,126.7 54.2,136.4 54.9,143.1 55.7,137.3 56.5,132.9 57.2,129.5 58.0,134.3 58.7,131.3 59.5,128.8 60.3,132.6 61.0,135.9 61.8,128.4 62.5,126.7 63.3,125.1 64.1,128.1 64.8,126.7 65.6,121.5 66.3,120.5 67.1,116.0 67.9,118.7 68.6,118.0 69.4,117.3 70.1,116.6 70.9,116.0 71.7,112.6 72.4,109.5 73.2,111.8 73.9,111.4 74.7,108.6 75.5,108.4 76.2,108.1 77.0,107.9 77.7,109.9 78.5,111.7 79.3,111.4 80.0,111.1 80.8,110.9 81.5,108.7 82.3,108.5 83.1,108.3 83.8,108.1 84.6,107.9 85.3,107.7 86.1,109.3 86.9,110.7 87.6,110.5 88.4,110.3 89.1,111.7 89.9,111.4 90.7,112.7 91.4,112.5 92.2,110.8 92.9,109.2 93.7,109.0 94.5,107.5 95.2,107.4 96.0,107.3 96.7,107.2 97.5,108.3 98.3,109.4 99.0,109.3 99.8,109.2 100.5,110.2 101.3,110.1 102.1,108.8 102.8,109.8 103.6,110.8 104.3,110.6 105.1,111.6 105.9,111.4 106.6,111.3 107.4,111.1 108.1,109.9 108.9,109.8 109.7,108.7 110.4,108.6 111.2,108.4 111.9,107.4 112.7,107.3 113.5,108.1 114.2,108.0 115.0,107.0 115.7,107.9 116.5,106.9 117.3,106.8 118.0,106.7 118.8,106.6 119.5,106.6 120.3,107.4 121.1,107.3 121.8,108.0 122.6,108.0 123.3,107.9 124.1,107.0 124.9,106.1 125.6,105.2 126.4,105.2 127.1,104.3 127.9,103.5 128.7,103.5 129.4,104.2 130.2,104.2 130.9,104.9 131.7,104.8 132.5,105.5 133.2,106.2 134.0,105.4 134.7,106.1 135.5,106.0 136.3,106.7 137.0,106.6 137.8,105.9 138.5,105.8 139.3,105.8 140.1,105.7 140.8,106.4 141.6,106.3 142.3,106.3 143.1,106.2 143.9,105.5 144.6,104.8 145.4,105.4 146.1,104.7 146.9,104.1 147.7,104.0 148.4,104.6 149.2,104.6 149.9,105.2 150.7,105.7 151.5,105.1 152.2,105.1 153.0,105.6 153.7,106.2 154.5,106.1 155.3,106.1 156.0,106.0 156.8,106.0 157.5,105.9 158.3,105.9 159.1,105.9 159.8,106.4 160.6,106.3 161.3,106.3 162.1,106.2 162.9,105.7 163.6,106.2 164.4,106.1 165.1,105.5 165.9,105.0 166.7,104.4 167.4,104.9 168.2,105.4 168.9,104.9 169.7,104.3 170.5,103.8 171.2,103.3 172.0,103.7 172.7,104.2 173.5,104.7 174.3,104.6 175.0,105.1 175.8,105.1 176.5,105.0 177.3,105.0 178.1,105.5 178.8,105.9 179.6,105.9 180.3,105.8 181.1,105.8 181.9,105.3 182.6,105.7 183.4,105.7 184.1,105.7 184.9,105.6 185.7,106.1 186.4,106.5 187.2,106.9 187.9,106.8 188.7,106.8 189.5,106.8 190.2,106.7 191.0,106.7 191.7,107.1 192.5,107.0 193.3,107.4 194.0,107.4 194.8,107.3 195.5,107.3 196.3,106.9 197.1,107.2 197.8,106.8 198.6,106.8 199.3,106.7 200.1,106.7 200.9,106.6 201.6,106.6 202.4,107.0 203.1,106.9 203.9,106.9 204.7,106.9 205.4,107.2 206.2,107.6 206.9,107.2 207.7,106.7 208.5,106.7 209.2,106.7 210.0,106.7 210.7,106.6 211.5,107.0 212.3,106.9 213.0,106.9 213.8,107.2 214.5,107.2 215.3,107.2 216.1,106.8 216.8,106.7 217.6,106.3 218.3,106.3 219.1,106.7 219.9,106.6 220.6,106.6 221.4,106.6 222.1,106.5 222.9,106.5 223.7,106.1 224.4,106.4 225.2,106.1 225.9,106.0 226.7,106.0 227.5,106.0 228.2,106.0 229.0,105.9 229.7,105.6 230.5,105.2 231.3,105.5 232.0,105.5 232.8,105.8 233.5,106.1 234.3,106.4 235.1,106.1 235.8,106.1 236.6,106.0 237.3,106.0 238.1,106.0 238.9,106.0 239.6,105.9 240.4,105.6 241.1,105.2 241.9,105.2 242.7,104.9 243.4,104.6 244.2,104.5 244.9,104.8 245.7,104.5 246.5,104.2 247.2,104.2 248.0,103.8 248.7,104.1 249.5,104.4 250.3,104.1 251.0,103.8 251.8,104.1 252.5,104.4 253.3,104.3 254.1,104.3 254.8,104.3 255.6,104.3 256.3,104.0 257.1,104.0 257.9,103.9 258.6,103.9 259.4,103.6 260.1,103.3 260.9,103.3 261.7,103.6 262.4,103.6 263.2,103.3 263.9,103.6 264.7,103.3 265.5,103.0 266.2,103.2 267.0,102.9 267.7,103.2 268.5,103.2 269.3,103.2 270.0,102.9 270.8,102.9 271.5,103.2 272.3,103.1 273.1,103.1 273.8,103.4 274.6,103.4 275.3,103.4 276.1,103.4 276.9,103.6 277.6,103.6 278.4,103.9 279.1,103.8 279.9,103.8 280.7,103.8 281.4,103.8 282.2,103.5 282.9,103.3 283.7,103.0 284.5,103.0 285.2,103.0 286.0,102.7 286.7,102.7 287.5,102.7 288.3,102.7 289.0,102.4 289.8,102.4 290.5,102.7 291.3,102.6 292.1,102.4 292.8,102.4 293.6,102.4 294.3,102.1 295.1,102.1 295.9,102.1 296.6,101.8 297.4,102.1 298.1,102.3 298.9,102.3 299.7,102.3 300.4,102.5 301.2,102.3 301.9,102.5 302.7,102.3 303.5,102.3 304.2,102.5 305.0,102.5 305.7,102.7 306.5,102.7 307.3,102.5 308.0,102.7 308.8,102.7 309.5,102.7 310.3,102.9 311.1,102.9 311.8,103.1 312.6,103.1 313.3,103.1 314.1,102.9 314.9,103.1 315.6,103.1 316.4,102.9 317.1,102.8 317.9,103.1 318.7,103.1 319.4,103.0 320.2,102.8 320.9,102.8 321.7,102.6 322.5,102.6 323.2,102.8 324.0,102.8 324.7,102.8 325.5,103.0 326.3,102.8 327.0,102.7 327.8,102.7 328.5,102.9 329.3,102.7 330.1,102.7 330.8,102.9 331.6,102.9 332.3,102.9 333.1,102.7 333.9,102.5 334.6,102.5 335.4,102.2 336.1,102.2 336.9,102.4 337.7,102.4 338.4,102.2 339.2,102.0 339.9,101.8 340.7,101.8 341.5,101.6 342.2,101.4 343.0,101.6 343.7,101.6 344.5,101.5 345.3,101.5 346.0,101.7 346.8,101.9 347.5,101.9 348.3,102.1 349.1,102.3 349.8,102.5 350.6,102.7 351.3,102.9 352.1,102.7 352.9,102.7 353.6,102.7 354.4,102.7 355.1,102.7 355.9,102.9 356.7,103.1 357.4,102.9 358.2,102.9 358.9,102.7 359.7,102.5 360.5,102.4 361.2,102.2 362.0,102.4 362.7,102.2 363.5,102.2 364.3,102.0 365.0,102.0 365.8,102.2 366.5,102.4 367.3,102.4 368.1,102.4 368.8,102.2 369.6,102.0 370.3,102.0 371.1,102.0 371.9,102.0 372.6,102.2 373.4,102.2 374.1,102.0 374.9,102.0 375.7,102.1 376.4,102.1 377.2,102.1 377.9,102.3 378.7,102.3 379.5,102.3 380.2,102.5 381.0,102.5 381.7,102.5 382.5,102.3 383.3,102.1 384.0,101.9 384.8,101.9 385.5,101.9 386.3,101.9 387.1,101.7 387.8,101.7 388.6,101.9 389.3,101.9 390.1,101.7 390.9,101.5 391.6,101.5 392.4,101.5 393.1,101.7 393.9,101.7 394.7,101.7 395.4,101.5 396.2,101.7 396.9,101.7 397.7,101.7 398.5,101.8 399.2,101.8 400.0,101.8 400.7,101.8 401.5,101.6 402.3,101.6 403.0,101.5 403.8,101.3 404.5,101.1 405.3,101.1 406.1,100.9 406.8,101.1 407.6,101.3 408.3,101.3 409.1,101.4 409.9,101.6 410.6,101.4 411.4,101.3 412.1,101.3 412.9,101.4 413.7,101.6 414.4,101.6 415.2,101.6 415.9,101.4 416.7,101.4 417.5,101.4 418.2,101.2 419.0,101.1 419.7,100.9 420.5,101.1 421.3,101.2 422.0,101.1 422.8,101.1 423.5,100.9 424.3,100.9 425.1,100.7 425.8,100.9 426.6,100.9 427.3,100.9 428.1,100.7 428.9,100.7 429.6,100.7 430.0,100.8"/>
  <text x="42" y="184" font-size="11" text-anchor="end" fill="currentColor">0</text>
  <text x="42" y="104.0" font-size="11" text-anchor="end" fill="currentColor">0.5</text>
  <text x="42" y="24" font-size="11" text-anchor="end" fill="currentColor">1</text>
  <text x="50.0" y="196" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <text x="145.0" y="196" font-size="11" text-anchor="middle" fill="currentColor">250</text>
  <text x="240.0" y="196" font-size="11" text-anchor="middle" fill="currentColor">500</text>
  <text x="335.0" y="196" font-size="11" text-anchor="middle" fill="currentColor">750</text>
  <text x="430.0" y="196" font-size="11" text-anchor="middle" fill="currentColor">1000</text>
  <text x="240.0" y="214" font-size="12" text-anchor="middle" fill="currentColor">number of flips so far</text>
  <text x="426" y="92.0" font-size="11" text-anchor="end" fill="currentColor">one half</text>
</svg>
</div>

At the left the line leaps up and down: after 1 flip the fraction of heads can only be 0 or 1! As the flips pile up,
the line settles down and hugs the dashed line at one half.

### The law of large numbers, in plain words

What you see in the picture always happens, and it has a name: the **law of large numbers**. In plain words:

> If you repeat an experiment many, many times, the relative frequency of an event usually gets closer and closer to
> its probability.

That is what a probability of $\tfrac12$ promises. Not exactly 5 heads in 10 flips, but that **in the long run**
about half the flips are heads.

**Why does the line settle down?** Think about what one flip can do to the fraction.

- After 2 flips, one new flip changes the fraction a lot. Going from 1 head out of 2 (0.5) to 1 head out of 3 (about
  0.33) is a big jump.
- After 1000 flips, one new flip is only one part in a thousand. Going from 495 out of 1000 to 495 out of 1001
  hardly moves the fraction at all.

The more tries you already have, the less any single surprise can push the fraction around. Lucky and unlucky
streaks still happen, but they get swamped by everything else.

### What does not settle down

Here is something careful. The **fraction** of heads gets closer to $\tfrac12$. But the **number** of heads does not
get closer to exactly half.

- After 10 flips: 3 heads, 7 tails. Tails were ahead by 4.
- After 1000 flips: 495 heads, 505 tails. Tails were ahead by 10.

The gap in the counts got bigger, from 4 to 10, but the fraction got much closer to one half, from 0.3 to 0.495.
That is because 10 out of 1000 is a tiny part, while 4 out of 10 is a big part. The coin does not "catch up" by
throwing extra heads. It does not need to: the gap just becomes small **compared with** the number of flips.

### Using experiments

Experiments are useful in three ways.

1. **To check a theory.** If you think a die is fair, roll it 600 times. You expect each face roughly 100 times. If
   the 6 came up 180 times, something is probably wrong with the die.
2. **To find a probability you cannot work out by thinking.** Will a thumbtack land point up? Will a piece of toast
   land butter side down? There are no equally likely outcomes to count, so experiments are the main way to find out
   (more in [lesson 6](06-equally-likely.md)).
3. **To guess what is hidden.** In level 2 you drew from a hidden bag many times to guess what was inside. Relative
   frequency turns that guess into numbers.

<figure class="play" data-play="dice" data-n="1"><span class="ai-tag">AI-created</span><figcaption><b>Experiment against theory.</b> The gold line is what one die should do; the bars are what your rolls did.</figcaption></figure>

## Worked examples

**1. Working out a relative frequency.** A die is rolled 60 times and shows a 6 on 13 of them.

- Relative frequency of a 6: $\tfrac{13}{60}$, which is about 0.22.
- Theoretical probability: $\tfrac16$, about 0.17.
- 13 is a bit more than the 10 you might expect, but 60 rolls is not many. This is not good evidence that the die is
  unfair. (Rolling 30 sixes in 60 rolls would be very strong evidence; with a fair die that is almost impossible.)

**2. Guessing the inside of a bag.** A bag holds 10 marbles, some red and some white. You may not look. You draw a
marble, note its colour, put it back, shake, and repeat. After 200 draws you have 61 red.

- Relative frequency of red: $\tfrac{61}{200} = 0.305$.
- If there were $r$ red marbles out of 10, the probability of red would be $\tfrac{r}{10}$: 0.1, 0.2, 0.3, and so on.
- The closest is 0.3. So the best guess is **3 red and 7 white**. (You cannot be certain. But 2 red would give about
  40 reds in 200 draws, and 4 red about 80, and 61 is much closer to the 60 that 3 red would give.)

**3. Is 5 heads out of 10 the most likely?** Yes, it is the single most likely number, but it is still not likely.
Among the $2 \times 2 \times \dots \times 2 = 1024$ equally likely lists of 10 flips, 252 have exactly 5 heads. So
$P(\text{exactly 5 heads}) = \tfrac{252}{1024}$, about 0.25. Getting 4, 5 or 6 heads covers about 0.66: roughly two
times in three. The other third of the time you see 3 or fewer, or 7 or more.

**4. Comparing classes.** Two classes test a spinner that should land on blue with probability $\tfrac14$.

- Class A: 12 blues in 40 spins, relative frequency $\tfrac{12}{40} = 0.3$.
- Class B: 255 blues in 1000 spins, relative frequency $\tfrac{255}{1000} = 0.255$.

Class B's answer is closer to 0.25, and also more trustworthy, because it comes from far more spins. The best single
estimate uses **all** the spins together: $\tfrac{12 + 255}{40 + 1000} = \tfrac{267}{1040}$, about 0.257.

## Try it

1. A coin is flipped 50 times and lands heads 28 times. What is the relative frequency of heads, as a fraction and a
   decimal? What is the theoretical probability?
2. A spinner is spun 80 times and lands on green 20 times. Estimate $P(\text{green})$.
3. A die is rolled 300 times. About how many times would you expect a 1? Would 47 be surprising? Would 150?
4. Mia flips a coin 4 times and gets 4 heads. She says "the coin must be unfair". Is she right?
5. After 100 flips a coin has shown 46 heads; after 1000 flips, 488 heads. For each, find the relative frequency of
   heads and how far the number of heads is from half the flips. Which got closer to $\tfrac12$, and which got
   further from half?
6. A bag has 5 marbles, some blue. You draw with replacement 100 times and get blue 59 times. How many blue marbles do
   you think are in the bag?
7. Why is it impossible for the relative frequency of heads to be exactly 0.5 after 7 flips?

??? note "Answers"
    1. $\tfrac{28}{50} = 0.56$. The theoretical probability is $\tfrac12 = 0.5$.
    2. $\tfrac{20}{80} = \tfrac14 = 0.25$.
    3. $P(1) = \tfrac16$, and a sixth of 300 is **50**. 47 is close to 50: not surprising at all. 150 would be
       hugely surprising (half the rolls!) and would suggest the die is not fair.
    4. No. With only 4 flips this happens to a fair coin quite often: 1 of the 16 equally likely lists is HHHH, so the
       chance is $\tfrac{1}{16}$. She would need many more flips to have real evidence.
    5. 100 flips: $0.46$, and 46 is **4** below 50. 1000 flips: $0.488$, and 488 is **12** below 500. The relative
       frequency got closer to 0.5 (0.04 away, then 0.012 away), while the gap in the count grew from 4 to 12. Just
       like the computer's coin.
    6. $\tfrac{59}{100} = 0.59$. With $b$ blue out of 5, the chance is $\tfrac{b}{5}$: 0.2, 0.4, 0.6, 0.8 or 1. The
       closest to 0.59 is 0.6, so probably **3 blue**.
    7. Half of 7 is 3.5, and you cannot have 3.5 heads. The fraction can be $\tfrac37$ (about 0.43) or $\tfrac47$
       (about 0.57), but never exactly $\tfrac12$.

## Common mistake

**Expecting the experiment to match the theory exactly.** A fair coin flipped 10 times gives exactly 5 heads only
about a quarter of the time. "Close" is the most you can expect, and close gets closer only with many tries.

**Thinking the coin "catches up".** The law of large numbers does not mean that after lots of tails, heads become more
likely. Each flip is still $\tfrac12$. The fraction settles because each new flip matters less and less, not because
the coin remembers. (Level 2's [chance has no memory](../level-2/index.md) is the same idea.)

## Where it leads

- Back: [Two dice](04-two-dice.md) · Next: [Equally likely or not](06-equally-likely.md), where experiments are the
  only way in.
- [Level 3 page](index.md) · [Probability topic page](../index.md)
- Using experiments on purpose, with dice or a computer, to estimate hard probabilities:
  [level 4, simulations](../level-4/05-simulations.md). How far off the counts usually are:
  [level 4, expected counts](../level-4/06-expected-counts.md).
- The law of large numbers, stated properly: [level 8](../level-8/index.md).
- Collecting and describing real data: [Statistics](../../statistics/index.md).
- Turning fractions into decimals: [Numbers level 3](../../numbers/level-3/07-decimals.md).
