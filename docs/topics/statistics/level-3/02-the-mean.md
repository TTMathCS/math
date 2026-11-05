---
title: "The mean"
---

# The mean

*Statistics and data · level 3, lesson 2 of 6*

## A question to start

A town newspaper reports: "Families in our town have, on average, 1.8 children." Yet you have never met a family
with 1.8 children. Nobody has 0.8 of a child!

So how can an average be a number that no family actually has? Is the average wrong? It is not. It is answering a
different question from the one you might expect. By the end of this lesson you will know exactly what question the
**mean** answers, and why it so often lands **between** the values instead of on one of them.

## The idea

### One number for a whole list

Suppose four children build towers of cubes. The towers are 5, 2, 6 and 3 cubes tall. Someone asks: "How tall is a
typical tower?" You could read out all four numbers, but it would be handier to give **one** number that stands for
the whole list. A number like this is called an **average**. There are three common averages: the **mean** (this
lesson), the **median** and the **mode** (the next lesson). When people say "the average" without saying which one,
they usually mean the mean.

### The mean by levelling

Here is the idea of the mean, in pictures. Take cubes off the tall towers and put them on the short towers, until
all the towers are the **same height**. That shared height is the mean.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 150" role="img" aria-label="Before: towers of 5, 2, 6 and 3 cubes, with the cubes above height 4 shaded orange. After: four towers of 4 cubes, the orange cubes moved onto the two short towers">
  <line x1="14" y1="56" x2="146" y2="56" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <g stroke="currentColor" stroke-width="0.8">
    <rect x="20" y="104" width="24" height="16" fill="#9cc9ea"/><rect x="20" y="88" width="24" height="16" fill="#9cc9ea"/>
    <rect x="20" y="72" width="24" height="16" fill="#9cc9ea"/><rect x="20" y="56" width="24" height="16" fill="#9cc9ea"/>
    <rect x="20" y="40" width="24" height="16" fill="#eea66f"/>
    <rect x="52" y="104" width="24" height="16" fill="#9cc9ea"/><rect x="52" y="88" width="24" height="16" fill="#9cc9ea"/>
    <rect x="84" y="104" width="24" height="16" fill="#9cc9ea"/><rect x="84" y="88" width="24" height="16" fill="#9cc9ea"/>
    <rect x="84" y="72" width="24" height="16" fill="#9cc9ea"/><rect x="84" y="56" width="24" height="16" fill="#9cc9ea"/>
    <rect x="84" y="40" width="24" height="16" fill="#eea66f"/><rect x="84" y="24" width="24" height="16" fill="#eea66f"/>
    <rect x="116" y="104" width="24" height="16" fill="#9cc9ea"/><rect x="116" y="88" width="24" height="16" fill="#9cc9ea"/>
    <rect x="116" y="72" width="24" height="16" fill="#9cc9ea"/>
  </g>
  <text x="200" y="82" font-size="28" text-anchor="middle" fill="currentColor">→</text>
  <g stroke="currentColor" stroke-width="0.8">
    <rect x="260" y="104" width="24" height="16" fill="#9cc9ea"/><rect x="260" y="88" width="24" height="16" fill="#9cc9ea"/>
    <rect x="260" y="72" width="24" height="16" fill="#9cc9ea"/><rect x="260" y="56" width="24" height="16" fill="#9cc9ea"/>
    <rect x="292" y="104" width="24" height="16" fill="#9cc9ea"/><rect x="292" y="88" width="24" height="16" fill="#9cc9ea"/>
    <rect x="292" y="72" width="24" height="16" fill="#eea66f"/><rect x="292" y="56" width="24" height="16" fill="#eea66f"/>
    <rect x="324" y="104" width="24" height="16" fill="#9cc9ea"/><rect x="324" y="88" width="24" height="16" fill="#9cc9ea"/>
    <rect x="324" y="72" width="24" height="16" fill="#9cc9ea"/><rect x="324" y="56" width="24" height="16" fill="#9cc9ea"/>
    <rect x="356" y="104" width="24" height="16" fill="#9cc9ea"/><rect x="356" y="88" width="24" height="16" fill="#9cc9ea"/>
    <rect x="356" y="72" width="24" height="16" fill="#9cc9ea"/><rect x="356" y="56" width="24" height="16" fill="#eea66f"/>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="32" y="136">5</text><text x="64" y="136">2</text><text x="96" y="136">6</text><text x="128" y="136">3</text>
    <text x="272" y="136">4</text><text x="304" y="136">4</text><text x="336" y="136">4</text><text x="368" y="136">4</text>
  </g>
</svg>
</div>

The dashed line is at height 4. The orange cubes stick up above it: 1 on the first tower and 2 on the third, which
makes 3 spare cubes. The short towers need exactly 3 cubes to reach the line: 2 for the second tower and 1 for the
fourth. Move them across, and every tower is 4 tall. So the mean of 5, 2, 6 and 3 is **4**.

### The mean by adding and dividing

Levelling works, but it is slow for big numbers. Here is the fast way, and the reason it gives the same answer.

When you move cubes from one tower to another, you never add cubes and never throw any away. So the **total** number
of cubes stays the same: $5 + 2 + 6 + 3 = 16$. At the end, those 16 cubes are shared equally among 4 towers. Sharing
16 equally among 4 is division: $16 \div 4 = 4$.

So the rule for the mean is:

$$\text{mean} = \text{total of all the values} \div \text{how many values there are}$$

The mean is the **fair share**: what each one would get if everything were put in one pile and shared out equally.

### Why the mean need not be one of the values

Take two towers, 1 cube and 2 cubes. Together they have 3 cubes. Shared equally between 2 towers, that is
$3 \div 2 = 1.5$ cubes each. With real cubes you cannot do it without cutting a cube in half. But the mean is not a
tower anyone built. It is the answer to "**if** we shared fairly, how much would each get?" That answer can be a
fraction or a decimal, even when every value is a whole number.

That is how families have "1.8 children" on average. The mean is not a family. It says: "if all the children were
shared out equally among the families, each family would get 1.8". It is a way of describing the **whole group**, not
any one family.

The mean can also be a whole number that nobody has. The mean of 2 and 8 is $10 \div 2 = 5$, and nobody had 5.

### The mean as a balance point

There is a second picture of the mean. Put the values as dots on a number line, and imagine the line is a ruler
balanced on your finger. Where must your finger go so that the ruler does not tip? Exactly at the mean.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 120" role="img" aria-label="Dots at 2, 3, 5 and 6 on a number line balanced on a triangle at 4. Distances below 4 are 2 and 1; distances above are 1 and 2">
  <line x1="30" y1="60" x2="390" y2="60" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="1.5">
    <line x1="50" y1="55" x2="50" y2="65"/><line x1="100" y1="55" x2="100" y2="65"/><line x1="150" y1="55" x2="150" y2="65"/>
    <line x1="200" y1="55" x2="200" y2="65"/><line x1="250" y1="55" x2="250" y2="65"/><line x1="300" y1="55" x2="300" y2="65"/>
    <line x1="350" y1="55" x2="350" y2="65"/>
  </g>
  <circle cx="100" cy="46" r="8" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="150" cy="46" r="8" fill="#9cc9ea" stroke="currentColor"/>
  <circle cx="250" cy="46" r="8" fill="#eea66f" stroke="currentColor"/>
  <circle cx="300" cy="46" r="8" fill="#eea66f" stroke="currentColor"/>
  <polygon points="200,62 188,84 212,84" fill="#7ccf9a" stroke="currentColor"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="50" y="100">1</text><text x="100" y="100">2</text><text x="150" y="100">3</text><text x="200" y="100">4</text>
    <text x="250" y="100">5</text><text x="300" y="100">6</text><text x="350" y="100">7</text>
    <text x="125" y="24">2 + 1 = 3 below</text><text x="275" y="24">1 + 2 = 3 above</text>
  </g>
</svg>
</div>

For our towers, 5, 2, 6 and 3 have mean 4. Measure how far each value is from 4:

- Below 4: the 2 is 2 away, the 3 is 1 away. Together: 3.
- Above 4: the 5 is 1 away, the 6 is 2 away. Together: 3.

The amounts below and above are **equal**. That is not luck: the amounts above the mean are exactly the cubes that
were moved, and the amounts below are exactly the gaps they filled. This gives you a way to **check** any mean: the
distances above it and below it must balance.

### Total = mean × how many

If you know the mean and how many values there are, you can get the total back by multiplying. Four towers with mean 4
hold $4 \times 4 = 16$ cubes. This little turnaround solves many puzzles, such as "what score do I need on the last
test?" (worked example 3).

<figure class="play" data-play="stats" data-show="centre"><span class="ai-tag">AI-created</span><figcaption><b>The mean as a balance point.</b> Tap the line to add a value; tap a dot to remove it.</figcaption></figure>

## Worked examples

**1. The mean of five scores.** Ben's scores in a game are 7, 9, 6, 10 and 8.

1. Total: $7 + 9 + 6 + 10 + 8 = 40$.
2. How many: 5.
3. Mean: $40 \div 5 = 8$.
4. Check by balancing. Below 8: the 7 is 1 away, the 6 is 2 away, total 3. Above 8: the 9 is 1 away, the 10 is 2
   away, total 3. Equal, so 8 is right. ✓

**2. A mean that is not a whole number.** The number of pets owned by six children: 0, 1, 1, 2, 3, 4.

1. Total: $0 + 1 + 1 + 2 + 3 + 4 = 11$.
2. Mean: $11 \div 6 = 1.8333...$, about **1.8** pets.

Nobody owns 1.8 pets, and that is fine: it is the fair share. Notice that the child with 0 pets still counts. Zero is
a value: leaving it out would make the mean $11 \div 5 = 2.2$, which is wrong.

**3. Finding a missing value.** Five friends read a mean of 6 books each in the summer. Four of them read 4, 8, 5 and
4 books. How many did the fifth friend read?

1. The total must be $6 \times 5 = 30$ books.
2. The four friends read $4 + 8 + 5 + 4 = 21$.
3. The fifth read $30 - 21 = 9$ books.
4. Check: $(4 + 8 + 5 + 4 + 9) \div 5 = 30 \div 5 = 6$. ✓

**4. What happens when a value is added?** The mean height of three plants is 10 cm (heights 8, 10 and 12 cm). A
fourth plant, 18 cm tall, is added.

1. Old total: $10 \times 3 = 30$ cm. New total: $30 + 18 = 48$ cm.
2. New mean: $48 \div 4 = 12$ cm.

The new plant was taller than the old mean, so it pulled the mean **up**. A value below the mean pulls it down; a value
exactly equal to the mean leaves it where it is.

## Try it

1. Find the mean of 3, 7, 5, 9 by levelling (draw the towers) and by adding and dividing.
2. Find the mean of 12, 15, 9, 14, 10.
3. Find the mean of 2, 3, 3, 4. Is it one of the values?
4. Find the mean of 4, 0, 5, 3. Why must you not leave out the 0?
5. The mean of four numbers is 7. Three of them are 5, 9 and 6. What is the fourth?
6. Your mean score on three spelling tests is 15. What must you score on the fourth test to make your mean 16?
7. Make up a list of four whole numbers whose mean is 2.5.
8. Lily says the mean of 10, 20, 30 must be 20 "because 20 is in the middle". Show that she is right here, then give
   a list of three numbers where the middle one is **not** the mean.

??? note "Answers"
    1. Total $3 + 7 + 5 + 9 = 24$, and $24 \div 4 = 6$. Levelling: the 7 gives 1 cube and the 9 gives 3, which is 4
       spare; the 3 needs 3 and the 5 needs 1, which is 4. All towers become 6.
    2. Total $12 + 15 + 9 + 14 + 10 = 60$, and $60 \div 5 = 12$.
    3. Total 12, and $12 \div 4 = 3$. Yes, 3 is in the list this time (it does not have to be, but it can be).
    4. Total 12, and $12 \div 4 = 3$. The 0 is a real value (someone had none); leaving it out gives $12 \div 3 = 4$,
       which pretends there were only three values.
    5. Total $7 \times 4 = 28$. Known: $5 + 9 + 6 = 20$. Fourth: $28 - 20 = 8$.
    6. You have $15 \times 3 = 45$ so far. You need a total of $16 \times 4 = 64$. Score $64 - 45 = 19$.
    7. The total must be $2.5 \times 4 = 10$. One answer: 1, 2, 3, 4. Another: 0, 0, 5, 5.
    8. $(10 + 20 + 30) \div 3 = 60 \div 3 = 20$, so yes. But for 1, 2, 9 the middle value is 2 while the mean is
       $12 \div 3 = 4$. The middle value is a different average, the median (next lesson).

## Common mistake

**Dividing by the wrong number.** Count the values carefully, including any zeros. For 4, 0, 5, 3 there are **four**
values, not three. A quick check: the mean must lie between the smallest and largest values. If your mean is outside
them, something has gone wrong.

**Forgetting to divide at all.** The total ($16$ cubes) is not the mean; the fair share ($16 \div 4 = 4$) is.

## Where it leads

- Back: [Collecting your own data](01-collecting-data.md) · Next: [The median and the mode](03-median-and-mode.md)
- [Level 3 page](index.md) · [Statistics topic page](../index.md)
- Sharing equally is division; see [Long division](../../numbers/level-3/04-long-division.md) in Numbers, and
  [Calculating with decimals](../../numbers/level-4/04-decimal-operations.md) for means that come out as decimals.
- In [level 4](../level-4/index.md) you will see when the mean gives an unfair picture, and what to use instead.
- The fair share is a rate ("books per friend"): see [Ratio](../../ratio/index.md).
