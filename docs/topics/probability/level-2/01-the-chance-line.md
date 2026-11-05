---
title: "The chance line"
---

# The chance line

*Probability · level 2, lesson 1 of 6*

## A question to start

Which is more likely?

- **A:** you roll a die and get a 6.
- **B:** you flip a coin twice and get heads **both** times.

Both sound unlikely. A 6 is only one face out of six. Two heads in a row sounds hard, because you need to be lucky
twice. Most people guess A, or say "about the same".

The answer is **B**. Two heads in a row is more likely than a 6. By the end of this lesson you will be able to see
why, with a picture, and you will be able to put both of them on a line that shows exactly how likely they are.

## The idea

### From three piles to a line

In level 1 you sorted things into three piles: **sure**, **maybe** and **never**. But the maybe pile was very
crowded. "A coin lands heads" and "you find a gold coin on the way to school" were both in it, and they are not
alike at all.

So instead of piles, we use a **line**. One end is for things that can never happen. The other end is for things that
are sure to happen. Everything else goes somewhere in between, and the more likely it is, the further along it goes.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 90" role="img" aria-label="The chance line: impossible at the left end, then unlikely, even chance in the middle, likely, and certain at the right end">
  <line x1="20" y1="30" x2="420" y2="30" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="2"><line x1="20" y1="20" x2="20" y2="40"/><line x1="220" y1="20" x2="220" y2="40"/><line x1="420" y1="20" x2="420" y2="40"/></g>
  <rect x="24" y="24" width="192" height="12" fill="#9cc9ea" fill-opacity="0.6"/>
  <rect x="224" y="24" width="192" height="12" fill="#eea66f" fill-opacity="0.6"/>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="22" y="60">impossible</text><text x="120" y="60">unlikely</text><text x="220" y="60">even chance</text>
    <text x="320" y="60">likely</text><text x="415" y="60">certain</text>
  </g>
  <g font-size="11" fill="currentColor" text-anchor="middle"><text x="22" y="78">(never)</text><text x="415" y="78">(sure)</text></g>
</svg>
</div>

This is the **chance line**. It has five words on it.

- **Impossible**: it cannot happen. This is the left end, the never pile from level 1.
- **Certain**: it must happen. This is the right end, the sure pile.
- **Even chance**: it is just as likely to happen as not to happen. This is the exact middle. A coin landing heads
  goes here: heads has 1 way, tails has 1 way.
- **Unlikely**: it can happen, but it is less likely to happen than not. It goes somewhere between impossible and
  the middle.
- **Likely**: it is more likely to happen than not. It goes somewhere between the middle and certain.

Notice that "unlikely" and "likely" are not single points. They are whole stretches of the line. Rolling a 6 and
finding a gold coin are both unlikely, but the gold coin is much nearer the impossible end.

### Placing things from a bag

Bags of marbles make placing easy. Take a bag of 10 marbles and ask, "How likely is it that I pull out orange?"

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 120" role="img" aria-label="Five rows of ten marbles, with 0, 2, 5, 8 and 10 orange marbles, each placed on the chance line at the matching point">
  <line x1="20" y1="100" x2="420" y2="100" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="2">
    <line x1="20" y1="92" x2="20" y2="108"/><line x1="100" y1="92" x2="100" y2="108"/><line x1="220" y1="92" x2="220" y2="108"/><line x1="340" y1="92" x2="340" y2="108"/><line x1="420" y1="92" x2="420" y2="108"/>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="20" y="80">0 of 10</text><text x="100" y="80">2 of 10</text><text x="220" y="80">5 of 10</text><text x="340" y="80">8 of 10</text><text x="420" y="80">10 of 10</text>
  </g>
  <g stroke="currentColor" stroke-width="1">
    <rect x="5" y="10" width="30" height="58" fill="#9cc9ea"/>
    <rect x="85" y="10" width="30" height="46.4" fill="#9cc9ea"/><rect x="85" y="56.4" width="30" height="11.6" fill="#eea66f"/>
    <rect x="205" y="10" width="30" height="29" fill="#9cc9ea"/><rect x="205" y="39" width="30" height="29" fill="#eea66f"/>
    <rect x="325" y="10" width="30" height="11.6" fill="#9cc9ea"/><rect x="325" y="21.6" width="30" height="46.4" fill="#eea66f"/>
    <rect x="405" y="10" width="30" height="58" fill="#eea66f"/>
  </g>
</svg>
</div>

Each column is a bag of 10 marbles, coloured to show how many are orange.

- **0 orange out of 10**: impossible. Left end.
- **2 out of 10**: unlikely. Two tenths of the way along.
- **5 out of 10**: even chance. Exactly halfway.
- **8 out of 10**: likely. Eight tenths of the way along.
- **10 out of 10**: certain. Right end.

The rule is simple: **the bigger the share of the bag that is orange, the further along the line it goes.** The
position on the line shows the **share**, the part of the whole.

### Comparing when the totals are different

Now the opening question. A die has 6 equal ways. Two coin flips have 4 equal ways (H H, H T, T H, T T, as you found
in [the coin flip lesson](../level-1/05-coin-flip-experiment.md)). How do you compare "1 way out of 6" with "1 way out
of 4"?

Draw each one as a **strip** of the same length, cut into equal pieces, one piece for each way.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 170" role="img" aria-label="Two strips of the same length. The die strip is cut into six equal pieces with one shaded. The coins strip is cut into four equal pieces with one shaded. The shaded piece of the coins strip is longer. Below, both are marked on the chance line, with two heads further along than a six.">
  <g stroke="currentColor" stroke-width="1.5">
    <rect x="20" y="20" width="400" height="26" fill="none"/>
    <rect x="20" y="20" width="66.7" height="26" fill="#eea66f"/>
    <line x1="86.7" y1="20" x2="86.7" y2="46"/><line x1="153.3" y1="20" x2="153.3" y2="46"/><line x1="220" y1="20" x2="220" y2="46"/><line x1="286.7" y1="20" x2="286.7" y2="46"/><line x1="353.3" y1="20" x2="353.3" y2="46"/>
    <rect x="20" y="72" width="400" height="26" fill="none"/>
    <rect x="20" y="72" width="100" height="26" fill="#9cc9ea"/>
    <line x1="120" y1="72" x2="120" y2="98"/><line x1="220" y1="72" x2="220" y2="98"/><line x1="320" y1="72" x2="320" y2="98"/>
  </g>
  <g font-size="12" fill="currentColor"><text x="20" y="14">die: 1 way out of 6 wins (a six)</text><text x="20" y="66">two coins: 1 way out of 4 (H H)</text></g>
  <line x1="20" y1="135" x2="420" y2="135" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="2"><line x1="20" y1="127" x2="20" y2="143"/><line x1="220" y1="127" x2="220" y2="143"/><line x1="420" y1="127" x2="420" y2="143"/></g>
  <circle cx="86.7" cy="135" r="7" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="120" cy="135" r="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="12" fill="currentColor" text-anchor="middle"><text x="20" y="160">impossible</text><text x="220" y="160">even chance</text><text x="420" y="160">certain</text><text x="80" y="122">6</text><text x="125" y="122">H H</text></g>
</svg>
</div>

The die strip is cut into 6 pieces; the coin strip is cut into only 4. **Fewer pieces means each piece is bigger.**
So 1 piece out of 4 is a bigger share than 1 piece out of 6. It goes further along the chance line.

That is why two heads in a row (1 way out of 4) is **more likely** than a 6 (1 way out of 6). Both are unlikely, but
two heads is less unlikely. Think of a pizza: one slice of a pizza cut into 4 is bigger than one slice of the same
pizza cut into 6.

The same trick works for any two things: make a strip for each, cut it into the equal ways, shade the winning ways,
and see which shaded part is longer.

### Arguing about real life

Real life is harder, because the ways are not equally likely and you cannot always count them. Then people
**argue**, and that is a good thing, as long as they give reasons.

- "It will rain tomorrow." Where? When? In a rainy month in Vancouver, it is likely. In a desert, it is very unlikely.
  A good answer says what it depends on.
- "A baby born today is a girl." Nearly even chance. (In fact, slightly more boys than girls are born, about 105 boys
  for every 100 girls, so it is just a tiny bit less than even.)
- "The sun will rise tomorrow." Certain.
- "Your teacher gives you no homework all year." Very unlikely, but not impossible!

When you argue, use evidence: what has happened before, what you know about how things work, and what could change
it.

<figure class="play" data-play="spinner" data-parts="red:1,blue:3"><span class="ai-tag">AI-created</span><figcaption><b>Spin it.</b> Blue is three quarters of the circle, so it sits near "likely" on the chance line; red near "unlikely".</figcaption></figure>

## Worked examples

**Example 1. Placing die events.**

Roll a die. Place each event on the chance line.

1. "Roll a 9." No face has 9. **Impossible.**
2. "Roll a 1 or a 2." 2 ways out of 6: less than half. **Unlikely**, a third of the way along.
3. "Roll an odd number." 1, 3, 5: 3 ways out of 6, exactly half. **Even chance.**
4. "Roll more than 1." 2, 3, 4, 5, 6: 5 ways out of 6. **Likely**, close to certain.
5. "Roll a number less than 10." All 6 ways. **Certain.**

**Example 2. Two bags with different totals.**

Bag P has 3 orange and 1 blue marble. Bag Q has 5 orange and 5 blue. Which bag is more likely to give orange?

1. Bag P: 3 ways out of 4. Draw a strip of 4 pieces and shade 3. Three quarters of the strip is shaded: **likely**.
2. Bag Q: 5 ways out of 10. Shade 5 of 10 pieces. Exactly half: **even chance**.
3. Three quarters is further along than half. **Bag P** is more likely to give orange, even though bag Q has more
   orange marbles.

**Example 3. An argument.**

Two children disagree. Kai says "it will snow on New Year's Day in Ottawa" is likely. Zoe says it is even chance.

1. Neither can count equal ways, because weather does not come in equal ways.
2. They can use evidence. Ottawa is very cold in January and often has snow falling in winter.
3. But "snow will fall on that one day" is not the same as "there will be snow on the ground". On many winter days
   no new snow falls.
4. A good answer: "Somewhere around even chance or a bit below; we would need to look at many past New Year's Days
   to know better." Looking at what happened in the past to judge a chance is exactly what you will do in
   [Experiments and tallies](03-experiments-and-tallies.md).

## Try it

1. Place on the chance line: (a) a coin lands tails; (b) you roll a 0 on a die; (c) you pick a blue marble from a bag
   of 9 blue and 1 orange.
2. A bag has 10 marbles: 3 orange and 7 blue. Is picking orange unlikely, even chance or likely?
3. Which is further along the chance line: rolling a 5 on a die, or rolling a number bigger than 2?
4. Which is more likely: 1 way out of 3, or 1 way out of 5? Draw strips to show why.
5. Spinner X is cut into 4 equal parts, 1 of them green. Spinner Y is cut into 8 equal parts, 3 of them green.
   Which spinner is more likely to land on green?
6. Put these in order from least to most likely, for one roll of a die: an even number; a 6; a number from 1 to 5; a 7.
7. Make up something that is likely but not certain, and something that is unlikely but not impossible.

??? note "Answers"
    1. (a) **Even chance**: 1 way out of 2. (b) **Impossible**: no face has 0. (c) **Likely**, very close to certain:
       9 ways out of 10.
    2. **Unlikely.** 3 out of 10 is less than half (half of 10 is 5).
    3. **Bigger than 2**: that is 3, 4, 5, 6, so 4 ways out of 6, which is likely. Rolling a 5 is 1 way out of 6,
       which is unlikely.
    4. **1 way out of 3.** A strip cut into 3 pieces has bigger pieces than a strip of the same length cut into 5.
       So one piece of 3 is a bigger share than one piece of 5.
    5. **Spinner Y.** Draw both as strips of 8: spinner X's 4 equal parts are each the same as 2 eighths, so 1 part
       of 4 is 2 parts of 8. Spinner Y has 3 parts of 8 green. 3 is more than 2, so Y is a bit more likely.
    6. **A 7** (impossible, 0 ways), **a 6** (1 way), **an even number** (3 ways: 2, 4, 6), **a number from 1 to 5**
       (5 ways).
    7. Many answers. Likely: "the next car I see will not be purple". Unlikely: "I will roll three 6s in a row". The
       important thing is that likely still has a way to fail, and unlikely still has a way to happen.

## Common mistake

**Comparing only the number of winning ways.** "1 way" from a die and "1 way" from two coins are not the same chance,
because one is out of 6 and the other out of 4. Always think about the **share**: the winning ways compared with all
the ways.

**Using "unlikely" to mean "impossible".** Unlikely things happen all the time. Something that has a small chance,
tried many times, will happen sooner or later.

## Where it leads

- Previous level: [Level 1](../level-1/index.md), ending with [Rolling a die](../level-1/06-rolling-a-die.md) ·
  Next lesson: [Fair games](02-fair-games.md).
- This level: [Level 2: Fair or unfair?](index.md). The whole topic: [Probability](../index.md).
- Strips cut into equal parts are how fractions begin: [Halves, thirds and quarters](../../numbers/level-2/06-halves-thirds-quarters.md).
- In [level 3](../level-3/index.md), the chance line gets numbers: impossible becomes 0, certain becomes 1, and even
  chance becomes one half.
- Using past evidence to judge a chance, like the weather, is a big part of [Statistics](../../statistics/index.md).
