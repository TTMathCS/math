---
title: "Tree diagrams"
---

# Tree diagrams

*Probability · level 4, lesson 2 of 6*

## A question to start

Flip a coin three times. What is the chance of getting **exactly two heads**?

Here are three answers people often give:

- "You can get 0, 1, 2 or 3 heads. That is four results, so $\tfrac14$."
- "Two heads out of three flips, so $\tfrac23$."
- "Each flip is a half, so it must be about a half."

None of them is right. The answer is $\tfrac38$. A **tree diagram** makes that answer easy to see, and it keeps working
when there are too many stages for a table.

## The idea

### Why we need something new

In [lesson 1](01-compound-tables.md), a table showed two experiments at once: one down the side, one across the top.
But a table has only two directions. Three coin flips would need a table with three directions, a cube of squares,
and four flips would need four. We need a picture that can keep growing.

### Building a tree

A **tree diagram** shows an experiment that happens in **stages**, one after another.

1. Start at a single point on the left.
2. Draw one **branch** for each possible result of the first stage. Write the result at the end of the branch and its
   probability on the branch.
3. From the end of **every** branch, draw branches for the second stage. Then the third, and so on.

Here is the tree for three coin flips. Each flip has two branches, heads (H) and tails (T), each with probability
$\tfrac12$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 255" role="img" aria-label="A tree diagram for three coin flips: each flip branches into heads and tails with probability one half, giving eight ends HHH to TTT, each one eighth; the three ends with exactly two heads, HHT, HTH and THH, are shaded green">
  <line x1="32" y1="118" x2="106" y2="62" stroke="currentColor" stroke-width="1.3"/>
  <text x="70" y="86" font-size="10" text-anchor="middle" fill="currentColor">1/2</text>
  <line x1="32" y1="118" x2="106" y2="174" stroke="currentColor" stroke-width="1.3"/>
  <text x="70" y="157" font-size="10" text-anchor="middle" fill="currentColor">1/2</text>
  <line x1="132" y1="62" x2="216" y2="34" stroke="currentColor" stroke-width="1.3"/>
  <text x="175" y="44" font-size="10" text-anchor="middle" fill="currentColor">1/2</text>
  <line x1="132" y1="62" x2="216" y2="90" stroke="currentColor" stroke-width="1.3"/>
  <text x="175" y="87" font-size="10" text-anchor="middle" fill="currentColor">1/2</text>
  <line x1="132" y1="174" x2="216" y2="146" stroke="currentColor" stroke-width="1.3"/>
  <text x="175" y="156" font-size="10" text-anchor="middle" fill="currentColor">1/2</text>
  <line x1="132" y1="174" x2="216" y2="202" stroke="currentColor" stroke-width="1.3"/>
  <text x="175" y="199" font-size="10" text-anchor="middle" fill="currentColor">1/2</text>
  <line x1="242" y1="34" x2="326" y2="20" stroke="currentColor" stroke-width="1.3"/>
  <text x="285" y="23" font-size="10" text-anchor="middle" fill="currentColor">1/2</text>
  <line x1="242" y1="34" x2="326" y2="48" stroke="currentColor" stroke-width="1.3"/>
  <text x="285" y="52" font-size="10" text-anchor="middle" fill="currentColor">1/2</text>
  <line x1="242" y1="90" x2="326" y2="76" stroke="currentColor" stroke-width="1.3"/>
  <text x="285" y="79" font-size="10" text-anchor="middle" fill="currentColor">1/2</text>
  <line x1="242" y1="90" x2="326" y2="104" stroke="currentColor" stroke-width="1.3"/>
  <text x="285" y="108" font-size="10" text-anchor="middle" fill="currentColor">1/2</text>
  <line x1="242" y1="146" x2="326" y2="132" stroke="currentColor" stroke-width="1.3"/>
  <text x="285" y="135" font-size="10" text-anchor="middle" fill="currentColor">1/2</text>
  <line x1="242" y1="146" x2="326" y2="160" stroke="currentColor" stroke-width="1.3"/>
  <text x="285" y="164" font-size="10" text-anchor="middle" fill="currentColor">1/2</text>
  <line x1="242" y1="202" x2="326" y2="188" stroke="currentColor" stroke-width="1.3"/>
  <text x="285" y="191" font-size="10" text-anchor="middle" fill="currentColor">1/2</text>
  <line x1="242" y1="202" x2="326" y2="216" stroke="currentColor" stroke-width="1.3"/>
  <text x="285" y="220" font-size="10" text-anchor="middle" fill="currentColor">1/2</text>
  <circle cx="120" cy="62" r="11" fill="#eea66f"/>
  <text x="120" y="66" font-size="12" text-anchor="middle" fill="currentColor">H</text>
  <circle cx="120" cy="174" r="11" fill="#9cc9ea"/>
  <text x="120" y="178" font-size="12" text-anchor="middle" fill="currentColor">T</text>
  <circle cx="230" cy="34" r="11" fill="#eea66f"/>
  <text x="230" y="38" font-size="12" text-anchor="middle" fill="currentColor">H</text>
  <circle cx="230" cy="90" r="11" fill="#9cc9ea"/>
  <text x="230" y="94" font-size="12" text-anchor="middle" fill="currentColor">T</text>
  <circle cx="230" cy="146" r="11" fill="#eea66f"/>
  <text x="230" y="150" font-size="12" text-anchor="middle" fill="currentColor">H</text>
  <circle cx="230" cy="202" r="11" fill="#9cc9ea"/>
  <text x="230" y="206" font-size="12" text-anchor="middle" fill="currentColor">T</text>
  <circle cx="340" cy="20" r="11" fill="#eea66f"/>
  <text x="340" y="24" font-size="12" text-anchor="middle" fill="currentColor">H</text>
  <circle cx="340" cy="48" r="11" fill="#9cc9ea"/>
  <text x="340" y="52" font-size="12" text-anchor="middle" fill="currentColor">T</text>
  <circle cx="340" cy="76" r="11" fill="#eea66f"/>
  <text x="340" y="80" font-size="12" text-anchor="middle" fill="currentColor">H</text>
  <circle cx="340" cy="104" r="11" fill="#9cc9ea"/>
  <text x="340" y="108" font-size="12" text-anchor="middle" fill="currentColor">T</text>
  <circle cx="340" cy="132" r="11" fill="#eea66f"/>
  <text x="340" y="136" font-size="12" text-anchor="middle" fill="currentColor">H</text>
  <circle cx="340" cy="160" r="11" fill="#9cc9ea"/>
  <text x="340" y="164" font-size="12" text-anchor="middle" fill="currentColor">T</text>
  <circle cx="340" cy="188" r="11" fill="#eea66f"/>
  <text x="340" y="192" font-size="12" text-anchor="middle" fill="currentColor">H</text>
  <circle cx="340" cy="216" r="11" fill="#9cc9ea"/>
  <text x="340" y="220" font-size="12" text-anchor="middle" fill="currentColor">T</text>
  <circle cx="20" cy="118" r="5" fill="currentColor"/>
  <text x="368" y="24" font-size="12" text-anchor="start" fill="currentColor">HHH  1/8</text>
  <rect x="360" y="37" width="88" height="22" rx="5" fill="#7ccf9a"/>
  <text x="368" y="52" font-size="12" text-anchor="start" fill="currentColor">HHT  1/8</text>
  <rect x="360" y="65" width="88" height="22" rx="5" fill="#7ccf9a"/>
  <text x="368" y="80" font-size="12" text-anchor="start" fill="currentColor">HTH  1/8</text>
  <text x="368" y="108" font-size="12" text-anchor="start" fill="currentColor">HTT  1/8</text>
  <rect x="360" y="121" width="88" height="22" rx="5" fill="#7ccf9a"/>
  <text x="368" y="136" font-size="12" text-anchor="start" fill="currentColor">THH  1/8</text>
  <text x="368" y="164" font-size="12" text-anchor="start" fill="currentColor">THT  1/8</text>
  <text x="368" y="192" font-size="12" text-anchor="start" fill="currentColor">TTH  1/8</text>
  <text x="368" y="220" font-size="12" text-anchor="start" fill="currentColor">TTT  1/8</text>
  <text x="70" y="245" font-size="11" text-anchor="middle" fill="currentColor">1st flip</text>
  <text x="175" y="245" font-size="11" text-anchor="middle" fill="currentColor">2nd flip</text>
  <text x="285" y="245" font-size="11" text-anchor="middle" fill="currentColor">3rd flip</text>
</svg>
</div>

Each way of travelling from the start to a tip on the right is called a **path**. A path is one complete outcome: the
top path is H, then H, then H, written $HHH$. There are 8 tips, because the tree doubles at every stage:

$$2 \times 2 \times 2 = 8$$

That is the same multiplying you did for tables, now done once for each stage.

### Probability along a path: multiply

What is the probability of one path, say $HHT$?

Think of doing the three flips 800 times.

- The first flip is H about **half** the time: 400 times.
- Of those 400, the second flip is H about half the time: 200 times.
- Of those 200, the third flip is T about half the time: 100 times.

So $HHT$ happens about 100 times in 800, which is $\tfrac18$. Each step kept a **fraction of the previous group**.
Taking a half of a half of a half is

$$\frac12 \times \frac12 \times \frac12 = \frac18$$

This is the first rule of trees: **along a path, multiply the probabilities on the branches.**

It agrees with counting. All 8 paths have the same probability, $\tfrac18$, so they are 8 equally likely outcomes, and
listing them is just listing the sample space from [level 3](../level-3/06-equally-likely.md).

### Probability of an event: add the paths

Now the question at the start. Which paths have exactly two heads? They are shaded green: $HHT$, $HTH$ and $THH$. The
two heads can be in flips 1 and 2, flips 1 and 3, or flips 2 and 3. So three paths, and each has probability $\tfrac18$:

$$P(\text{exactly two heads}) = \frac18 + \frac18 + \frac18 = \frac38$$

This is the second rule: **for an event, add up the probabilities of all the paths that give it.** We can add because
the paths never overlap; each time you do the experiment, you travel along exactly one path.

Why were the popular answers wrong?

- "$\tfrac14$" treats 0, 1, 2 and 3 heads as equally likely. They are not: 0 heads is 1 path, 1 head is 3 paths, 2
  heads is 3 paths, 3 heads is 1 path. In eighths: $\tfrac18, \tfrac38, \tfrac38, \tfrac18$.
- "$\tfrac23$" is the fraction of flips that are heads in one particular result; it is not a probability at all.

### A check that always works

All the tips together cover every possible result, once each. So **the probabilities at the tips add to 1.** For three
coins: $8 \times \tfrac18 = 1$. ✓ If your tips do not add to 1, a branch is missing or wrong.

There is a second check at every fork: **the branches leaving one point add to 1**, because one of them must happen.

### Branches that are not equal

Trees really pay off when the branches are not equal. A spinner wins with probability $\tfrac14$ and loses with
probability $\tfrac34$. It is spun twice.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 470 220" role="img" aria-label="A tree for spinning a spinner twice, where each spin wins with probability one quarter and loses with probability three quarters; the four ends are 1/16, 3/16, 3/16 and 9/16">
  <line x1="26" y1="105" x2="120" y2="55" stroke="currentColor" stroke-width="1.3"/>
  <text x="73" y="75" font-size="11" text-anchor="middle" fill="currentColor">1/4</text>
  <line x1="26" y1="105" x2="120" y2="155" stroke="currentColor" stroke-width="1.3"/>
  <text x="73" y="125" font-size="11" text-anchor="middle" fill="currentColor">3/4</text>
  <line x1="156" y1="55" x2="260" y2="25" stroke="currentColor" stroke-width="1.3"/>
  <text x="208" y="35" font-size="11" text-anchor="middle" fill="currentColor">1/4</text>
  <line x1="156" y1="55" x2="260" y2="85" stroke="currentColor" stroke-width="1.3"/>
  <text x="208" y="65" font-size="11" text-anchor="middle" fill="currentColor">3/4</text>
  <line x1="156" y1="155" x2="260" y2="125" stroke="currentColor" stroke-width="1.3"/>
  <text x="208" y="135" font-size="11" text-anchor="middle" fill="currentColor">1/4</text>
  <line x1="156" y1="155" x2="260" y2="185" stroke="currentColor" stroke-width="1.3"/>
  <text x="208" y="165" font-size="11" text-anchor="middle" fill="currentColor">3/4</text>
  <circle cx="20" cy="105" r="5" fill="currentColor"/>
  <rect x="122" y="43" width="56" height="24" rx="6" fill="#7ccf9a"/>
  <text x="150" y="59" font-size="11" text-anchor="middle" fill="currentColor">win</text>
  <rect x="122" y="143" width="56" height="24" rx="6" fill="#9cc9ea"/>
  <text x="150" y="159" font-size="11" text-anchor="middle" fill="currentColor">lose</text>
  <rect x="262" y="13" width="56" height="24" rx="6" fill="#7ccf9a"/>
  <text x="290" y="29" font-size="11" text-anchor="middle" fill="currentColor">win</text>
  <rect x="262" y="73" width="56" height="24" rx="6" fill="#9cc9ea"/>
  <text x="290" y="89" font-size="11" text-anchor="middle" fill="currentColor">lose</text>
  <rect x="262" y="113" width="56" height="24" rx="6" fill="#7ccf9a"/>
  <text x="290" y="129" font-size="11" text-anchor="middle" fill="currentColor">win</text>
  <rect x="262" y="173" width="56" height="24" rx="6" fill="#9cc9ea"/>
  <text x="290" y="189" font-size="11" text-anchor="middle" fill="currentColor">lose</text>
  <text x="330" y="29" font-size="12" text-anchor="start" fill="currentColor">win, win: 1/16</text>
  <text x="330" y="89" font-size="12" text-anchor="start" fill="currentColor">win, lose: 3/16</text>
  <text x="330" y="129" font-size="12" text-anchor="start" fill="currentColor">lose, win: 3/16</text>
  <text x="330" y="189" font-size="12" text-anchor="start" fill="currentColor">lose, lose: 9/16</text>
  <text x="150" y="210" font-size="11" text-anchor="middle" fill="currentColor">1st spin</text>
  <text x="290" y="210" font-size="11" text-anchor="middle" fill="currentColor">2nd spin</text>
</svg>
</div>

Multiply along each path:

- win, win: $\tfrac14 \times \tfrac14 = \tfrac{1}{16}$
- win, lose: $\tfrac14 \times \tfrac34 = \tfrac{3}{16}$
- lose, win: $\tfrac34 \times \tfrac14 = \tfrac{3}{16}$
- lose, lose: $\tfrac34 \times \tfrac34 = \tfrac{9}{16}$

Check: $\tfrac{1 + 3 + 3 + 9}{16} = \tfrac{16}{16} = 1$. ✓ Here the four paths are **not** equally likely, so simply
counting paths would be wrong. Multiplying handles it.

### Trees can change shape

A tree does not have to have the same branches everywhere. If the second stage depends on the first, draw different
branches. For example: toss a coin; on heads roll a die, on tails spin a spinner with 4 parts. The heads branch then
splits into 6, the tails branch into 4. A tree can also **stop early** on some paths, as in a "best of three" match
(worked example 3).

<figure class="play" data-play="outfits"><span class="ai-tag">AI-created</span><figcaption><b>Every branch of the tree.</b> Each picture is one path through it.</figcaption></figure>

## Worked examples

**1. More from three flips.** Use the tree above.

- $P(\text{at least two heads})$: paths with 2 or 3 heads, $HHT, HTH, THH, HHH$. $\tfrac48 = \tfrac12$.
- $P(\text{all the same})$: $HHH$ and $TTT$. $\tfrac28 = \tfrac14$.
- $P(\text{at least one tail})$: every path except $HHH$. Use the opposite: $1 - \tfrac18 = \tfrac78$.

**2. Exactly one win.** In the spinner tree, "exactly one win" is win-lose or lose-win:

$$\frac{3}{16} + \frac{3}{16} = \frac{6}{16} = \frac38$$

A common slip is to stop at $\tfrac{3}{16}$, forgetting that the win can come first **or** second.

**3. Best of three.** Two players, A and B, play games until one has won 2. Each game is won by A with probability
$\tfrac12$. What is the chance the match needs all three games?

Draw the tree, but stop a path as soon as someone has 2 wins:

- $AA$: A wins in two games, probability $\tfrac14$. Stop.
- $BB$: B wins in two games, probability $\tfrac14$. Stop.
- $AB$ and $BA$: 1 win each, so a third game is played. These two paths have $\tfrac14 + \tfrac14 = \tfrac12$.

So $P(\text{three games}) = \tfrac12$. (The third game then splits each of those paths in two, giving the tips $ABA$,
$ABB$, $BAA$, $BAB$, each $\tfrac18$. Check: $\tfrac14 + \tfrac14 + 4 \times \tfrac18 = 1$. ✓)

**4. A bag, with the marble put back.** A bag has 2 red marbles and 1 blue. Take one, look, **put it back**, mix, and
take another. Each draw: red $\tfrac23$, blue $\tfrac13$.

- $P(RR) = \tfrac23 \times \tfrac23 = \tfrac49$
- $P(RB) = \tfrac23 \times \tfrac13 = \tfrac29$, and $P(BR) = \tfrac29$
- $P(BB) = \tfrac13 \times \tfrac13 = \tfrac19$

One of each colour: $\tfrac29 + \tfrac29 = \tfrac49$. Check all tips: $\tfrac{4 + 2 + 2 + 1}{9} = 1$. ✓

(If the marble is **not** put back, the second branches change, because the bag has changed. That is the subject of
[level 5](../level-5/index.md).)

## Try it

1. Draw the tree for two coin flips. What is $P(HT)$? What is $P(\text{one head and one tail})$?
2. For three coin flips, find $P(\text{exactly one head})$ and $P(\text{no heads})$.
3. For **four** coin flips: how many tips does the tree have? How many paths have exactly two heads? What is
   $P(\text{exactly two heads})$?
4. A spinner lands on red with probability $\tfrac13$. It is spun twice. Find $P(\text{two reds})$ and
   $P(\text{exactly one red})$.
5. Toss a coin. On heads, roll a die. On tails, spin a spinner numbered 1 to 4. What is the chance of ending with the
   number 4?
6. In a best-of-three match, A wins each game with probability $\tfrac23$. Find $P(\text{A wins the match})$.
7. A friend says: "In three flips, $P(\text{exactly two heads}) = \tfrac14$, because the number of heads is 0, 1, 2
   or 3." Explain to them, using the tree, what is wrong.

??? note "Answers"
    1. Tips $HH, HT, TH, TT$, each $\tfrac12 \times \tfrac12 = \tfrac14$. $P(HT) = \tfrac14$. One of each: $HT$ or $TH$,
       $\tfrac14 + \tfrac14 = \tfrac12$.
    2. Exactly one head: $HTT, THT, TTH$, $\tfrac38$. No heads: $TTT$, $\tfrac18$.
    3. $2 \times 2 \times 2 \times 2 = 16$ tips. Exactly two heads: $HHTT, HTHT, HTTH, THHT, THTH, TTHH$, 6 paths. So
       $\tfrac{6}{16} = \tfrac38$.
    4. Two reds: $\tfrac13 \times \tfrac13 = \tfrac19$. Exactly one red: red then not, or not then red:
       $\tfrac13 \times \tfrac23 + \tfrac23 \times \tfrac13 = \tfrac29 + \tfrac29 = \tfrac49$.
    5. Heads then 4: $\tfrac12 \times \tfrac16 = \tfrac{1}{12}$. Tails then 4: $\tfrac12 \times \tfrac14 = \tfrac18$.
       Add: $\tfrac{2}{24} + \tfrac{3}{24} = \tfrac{5}{24}$.
    6. A wins by $AA$: $\tfrac23 \times \tfrac23 = \tfrac49 = \tfrac{12}{27}$. By $ABA$:
       $\tfrac23 \times \tfrac13 \times \tfrac23 = \tfrac{4}{27}$. By $BAA$: $\tfrac13 \times \tfrac23 \times \tfrac23 = \tfrac{4}{27}$. Total: $\tfrac{12 + 4 + 4}{27} = \tfrac{20}{27}$, about 0.74. Better than A's chance in a single
       game ($\tfrac23$, about 0.67): longer matches favour the stronger player.
    7. The tree has 8 equally likely tips. Exactly two heads is 3 of them ($HHT$, $HTH$, $THH$), so $\tfrac38$. The
       four results 0, 1, 2, 3 heads are not equally likely: they have 1, 3, 3 and 1 paths.

## Common mistake

**Adding along a path or multiplying across paths.** Along one path ("this **and then** that"), multiply. Across
different paths ("this path **or** that path"), add. Mixing them up gives numbers bigger than 1, or far too small.

**Forgetting the other order.** "One win and one loss" is two paths, win-lose and lose-win. Look for every path that
gives the event, not just the first one you think of.

## Where it leads

- Back: [Compound events with tables](01-compound-tables.md) · Next:
  [Fractions, decimals and percents](03-fraction-decimal-percent.md).
- [Level 4 page](index.md) · [Probability topic page](../index.md)
- Why multiplying along branches is right for coins and dice: [independent events](04-independent-events.md).
- The path counts 1, 3, 3, 1 and 1, 4, 6, 4, 1 are rows of Pascal's triangle: see [Patterns](../../patterns/index.md)
  and [Counting](../../counting/index.md). In [level 7](../level-7/index.md) they become the binomial distribution.
- Trees where the second stage depends on the first (no putting back): [level 5](../level-5/index.md).
- Multiplying fractions: [Numbers level 4](../../numbers/level-4/02-multiplying-fractions.md).
