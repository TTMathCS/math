---
title: "Making predictions"
---

# Making predictions

*Probability · level 2, lesson 6 of 6*

## A question to start

A spinner is half orange and half blue. You are going to spin it **40 times**. Before you start, write down a
prediction: how many times will it land on orange?

Most people write 20. That is a very good prediction. But here is the surprise: if you actually do it, you will
probably **not** get exactly 20. Exactly 20 happens only about 1 time in 8.

So was 20 a bad prediction? No. This lesson explains what a good prediction in chance really is: a number that the
real answer will be **close to**, not a number it will hit exactly.

## The idea

### Step 1: find the share

To predict, first find the **share** that wins: how many ways out of how many.

- Half-orange spinner: orange is 1 way out of 2.
- Die, rolling a 6: 1 way out of 6.
- Bag with 3 orange and 1 blue block: orange is 3 ways out of 4.

### Step 2: share out the tries the same way

Now take the number of tries and cut it into equal groups, one group for each way. Then count the groups that win.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 150" role="img" aria-label="Forty spins drawn as forty small squares. In the top row they are split into two groups of twenty; one group is orange. In the bottom row they are split into four groups of ten; one group is orange.">
  <g stroke="currentColor" stroke-width="1.5" fill="none">
    <rect x="10" y="20" width="200" height="36" fill="#eea66f"/><rect x="210" y="20" width="200" height="36" fill="#9cc9ea"/>
    <rect x="10" y="90" width="100" height="36" fill="#eea66f"/><rect x="110" y="90" width="100" height="36" fill="#9cc9ea"/><rect x="210" y="90" width="100" height="36" fill="#9cc9ea"/><rect x="310" y="90" width="100" height="36" fill="#9cc9ea"/>
  </g>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="110" y="43">20 spins</text><text x="310" y="43">20 spins</text>
    <text x="60" y="113">10</text><text x="160" y="113">10</text><text x="260" y="113">10</text><text x="360" y="113">10</text>
    <text x="210" y="13">half-orange spinner: 40 spins in 2 equal groups</text>
    <text x="210" y="83">quarter-orange spinner: 40 spins in 4 equal groups</text>
    <text x="210" y="145">about 20 orange (top), about 10 orange (bottom)</text>
  </g>
</svg>
</div>

- Half-orange spinner, 40 spins. Cut 40 into 2 equal groups: 20 and 20. Orange gets 1 group: **about 20**.
- A spinner that is one quarter orange, 40 spins. Cut 40 into 4 equal groups of 10. Orange gets 1 group: **about 10**.
- A die, 60 rolls, how many 6s? Cut 60 into 6 groups of 10. The 6 gets 1 group: **about 10**.
- The bag with 3 orange and 1 blue, 100 draws (putting back each time). Cut 100 into 4 groups of 25. Orange gets
  3 groups: 25 + 25 + 25 = **about 75**.

Why does this work? If every way is equally likely, then over many tries each way gets **about** the same number of
tries as every other way. So each way gets about one equal group, and you just count the groups that win.

### Step 3: say "about"

Notice the word **about** in every answer. Chance wobbles, as you saw in
[the coin flip experiment](../level-1/05-coin-flip-experiment.md). The real result will be near the prediction, but
not usually right on it.

Here is how often each result happens when you spin a half-orange spinner 40 times, out of every 100 times you do the
whole experiment (rounded):

| Orange spins | 16 | 17 | 18 | 19 | **20** | 21 | 22 | 23 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Times in 100 | 6 | 8 | 10 | 12 | **13** | 12 | 10 | 8 | 6 |

Exactly 20 is the **most common** single result, but it happens only about 13 times in 100. The rest of the time
you get something else. And yet the results crowd around 20: everything from 16 to 24 together happens about **85
times in 100**. Results like 10 or 30 almost never happen.

So a really good prediction says two things:

1. **The middle**: about 20.
2. **How close**: "probably between 16 and 24".

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 150" role="img" aria-label="Two number lines of the same length. Top: 0 to 40 spins, with a green band from 16 to 24 around a dot at 20. Bottom: 0 to 400 spins, with a narrower-looking green band from 180 to 220 around a dot at 200.">
  <rect x="180" y="22" width="80" height="16" fill="#7ccf9a"/>
  <line x1="20" y1="30" x2="420" y2="30" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="2"><line x1="20" y1="22" x2="20" y2="38"/><line x1="220" y1="22" x2="220" y2="38"/><line x1="420" y1="22" x2="420" y2="38"/></g>
  <circle cx="220" cy="30" r="5" fill="currentColor"/>
  <g font-size="12" fill="currentColor" text-anchor="middle"><text x="20" y="55">0</text><text x="180" y="55">16</text><text x="220" y="55">20</text><text x="260" y="55">24</text><text x="420" y="55">40</text><text x="220" y="14">40 spins</text></g>
  <rect x="200" y="97" width="40" height="16" fill="#7ccf9a"/>
  <line x1="20" y1="105" x2="420" y2="105" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="2"><line x1="20" y1="97" x2="20" y2="113"/><line x1="220" y1="97" x2="220" y2="113"/><line x1="420" y1="97" x2="420" y2="113"/></g>
  <circle cx="220" cy="105" r="5" fill="currentColor"/>
  <g font-size="12" fill="currentColor" text-anchor="middle"><text x="20" y="130">0</text><text x="190" y="130">180</text><text x="250" y="130">220</text><text x="420" y="130">400</text><text x="220" y="89">400 spins</text></g>
</svg>
</div>

### More tries: a bigger wobble, but a smaller one too

What if you spin 400 times instead of 40? The prediction is about 200 orange (half of 400). The real answer now
wobbles **more** in plain numbers: it is usually somewhere between 180 and 220, which is up to 20 away from 200
(this happens about 96 times in 100).

But look at the two number lines above. They are drawn the same length. Compared with the whole line, the band for
400 spins is **narrower**. 16 to 24 out of 40 is anywhere from 4 tenths to 6 tenths of the spins. 180 to 220 out of
400 is only from 45 hundredths to 55 hundredths. The **share** gets closer to half.

So, with more tries:

- the count wobbles **more** (by more spins either way), but
- the share wobbles **less** (the result is a smaller part of the whole away from half).

That is the "few tries jump around, many tries settle down" idea from level 1, now made a little more exact.

### Using a prediction to spot a problem

Predictions are also a tool for checking. Suppose a friend says their spinner is half orange, and you spin it 40
times and get 31 orange. You predicted about 20, probably between 16 and 24. 31 is far outside. A fair half-orange
spinner gives 31 or more only about 3 times in 10 000! So you have a good reason to suspect that the spinner is not
really half orange: maybe the orange part is bigger, or the arrow sticks. That is how scientists use predictions: if
the result is far from what you predicted, something is probably different from what you thought.

## Worked examples

**Example 1. A die.**

You roll a die 30 times. About how many even numbers do you predict?

1. Even is 2, 4, 6: 3 ways out of 6, which is half.
2. Half of 30 is 15.
3. Prediction: **about 15 even numbers**, probably within a few of 15.

**Example 2. A three-colour spinner.**

A spinner has 3 equal parts: orange, blue, green. You spin it 30 times. Predict each colour.

1. Each colour is 1 way out of 3.
2. Cut 30 into 3 equal groups: 10, 10, 10.
3. Prediction: **about 10 of each**. (Orange lands between 7 and 13 times about 83 times in 100.)
4. Check: 10 + 10 + 10 = 30. ✓ Predictions should add up to the number of tries.

**Example 3. Is this result surprising?**

A bag has 3 orange and 1 blue block. You draw 100 times, putting back each time, and get 78 orange. Is that
surprising?

1. Orange is 3 ways out of 4. Cut 100 into 4 groups of 25; orange gets 3 groups. Prediction: about 75.
2. 78 is only 3 more than 75.
3. **Not surprising.** Results from 70 to 80 happen about 80 times in 100. Exactly 75 happens only about 9 times in
   100, so missing it by a little is completely normal.

## Try it

1. A coin is flipped 50 times. Predict the number of heads.
2. A die is rolled 120 times. Predict the number of 3s.
3. A spinner has 4 equal parts, 3 orange and 1 blue. It is spun 80 times. Predict orange and blue.
4. A bag has 2 orange and 3 blue blocks. You draw 50 times, putting back each time. Predict orange.
5. You predicted about 20 orange in 40 spins of a half-orange spinner, and you got 23. Was your prediction wrong?
6. Which is more surprising for a fair coin: 7 heads in 10 flips, or 70 heads in 100 flips?
7. Mo rolls a die 60 times and gets only 2 sixes. He predicted about 10. Should he be suspicious of the die?

??? note "Answers"
    1. Heads is 1 way out of 2. Half of 50 is **about 25**.
    2. A 3 is 1 way out of 6. Cut 120 into 6 groups of 20. **About 20**.
    3. Cut 80 into 4 groups of 20. Orange gets 3 groups: **about 60 orange**. Blue gets 1: **about 20 blue**. Check:
       60 + 20 = 80. ✓
    4. Orange is 2 ways out of 5. Cut 50 into 5 groups of 10; orange gets 2 groups: **about 20**.
    5. **No.** "About 20" means close to 20, and 23 is close. Results from 16 to 24 happen about 85 times in 100.
    6. **70 in 100.** Both are 7 tenths heads, but with more flips the share settles closer to half, so being that far
       from half is much rarer with 100 flips. (7 or more heads in 10 flips happens about 17 times in 100; 70 or more
       in 100 flips happens fewer than 1 time in 10 000.)
    7. **A little.** 2 is far below 10. A fair die gives 2 or fewer sixes in 60 rolls only about 1 or 2 times in 1000.
       It is not impossible, but it is a good reason to roll more times and check whether that die really is fair.

## Common mistake

**Thinking a prediction must come true exactly.** "About 20" does not mean "exactly 20". Exactly 20 happens only
about 1 time in 8. A good prediction is close, and a great one also says how close.

**Forgetting to check that predictions add up.** If you predict for every colour, the predictions should add up to
the number of tries. If they do not, a share is wrong somewhere.

## Where it leads

- Previous lesson: [Chance has no memory](05-chance-no-memory.md).
- This level: [Level 2: Fair or unfair?](index.md). Next level: [Level 3: Chances as numbers](../level-3/index.md),
  where shares become fractions and predictions become exact calculations.
- Cutting a number into equal groups: [Dividing as fair sharing and as making groups](../../numbers/level-2/05-fair-sharing.md).
- Predictions from probability, and how far off they usually are, worked out with numbers: [level 4](../level-4/index.md).
- How much results usually wobble is the "spread" of [Statistics](../../statistics/index.md), and the bell-shaped pattern of
  wobbles is studied in [level 8](../level-8/index.md).
