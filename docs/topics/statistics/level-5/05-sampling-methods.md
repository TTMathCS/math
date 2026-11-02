---
title: "Sampling methods"
---

# Sampling methods

*Statistics and data · level 5, lesson 5 of 6*

## A question to start

Your school has 600 students, and the student council wants to know whether students would like a later start time.
They have time to ask 60 students. Here are three ideas from the council:

- Ask the 60 students who arrive first in the morning.
- Put a box in the hallway and let anyone who wants to drop in an answer, until 60 answers are in.
- Put all 600 names in a hat, mix them well, and draw 60.

Two of these ideas are badly unfair. Can you see which, and why? (Think about **who** arrives first in the morning.)

## The idea

### What makes a sample fair

In the last lesson a good sample was "a small copy of the population". You cannot check that directly, because you
do not know the population (that is why you are sampling!). So instead, statisticians make sure the **method** is
fair. The key idea is **chance**:

> A sample is chosen fairly when chance, not a person, decides who is in it, and every member of the population has a
> known chance of being picked.

Why chance? Any person choosing a sample has preferences, often without noticing: friendly-looking people, nearby
houses, students they know. Chance has no preferences. Over many draws it treats every kind of member alike, so the
sample's mix tends to match the population's mix. And because chance follows the rules of probability, we can later
calculate **how far off** a random sample is likely to be. With a hand-picked sample we cannot.

### Simple random sample

In a **simple random sample** of size $n$, every possible group of $n$ members is equally likely to be the sample.
Names in a well-mixed hat do this.

For a big population, number the members and use random numbers: a computer's random number generator, a calculator,
or a printed table of random digits. For 600 students, number them 001 to 600, then read random digits three at a
time. Keep a number if it is between 001 and 600 and not already chosen; skip it otherwise. Stop when you have 60.

Here is how the six methods of this lesson look on a population of 24 people in 4 rows (think of the rows as 4
grades, or 4 streets). The orange people are in the sample.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 115" role="img" aria-label="Three panels of 24 people in 4 rows. Simple random: 6 chosen scattered by chance. Systematic: every 4th person. Stratified: 2 chosen at random from each row">
  <text x="65" y="18" font-size="12" text-anchor="middle" fill="currentColor">simple random</text>
  <circle cx="17" cy="30" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="36" cy="30" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="55" cy="30" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="74" cy="30" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="93" cy="30" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="112" cy="30" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="17" cy="52" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="36" cy="52" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="55" cy="52" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="74" cy="52" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="93" cy="52" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="112" cy="52" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="17" cy="74" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="36" cy="74" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="55" cy="74" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="74" cy="74" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="93" cy="74" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="112" cy="74" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="17" cy="96" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="36" cy="96" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="55" cy="96" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="74" cy="96" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="93" cy="96" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="112" cy="96" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="210" y="18" font-size="12" text-anchor="middle" fill="currentColor">systematic</text>
  <circle cx="162" cy="30" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="181" cy="30" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="200" cy="30" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="219" cy="30" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="238" cy="30" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="257" cy="30" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="162" cy="52" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="181" cy="52" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="200" cy="52" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="219" cy="52" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="238" cy="52" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="257" cy="52" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="162" cy="74" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="181" cy="74" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="200" cy="74" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="219" cy="74" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="238" cy="74" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="257" cy="74" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="162" cy="96" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="181" cy="96" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="200" cy="96" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="219" cy="96" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="238" cy="96" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="257" cy="96" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="355" y="18" font-size="12" text-anchor="middle" fill="currentColor">stratified</text>
  <circle cx="307" cy="30" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="326" cy="30" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="345" cy="30" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="364" cy="30" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="383" cy="30" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="402" cy="30" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="307" cy="52" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="326" cy="52" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="345" cy="52" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="364" cy="52" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="383" cy="52" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="402" cy="52" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="307" cy="74" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="326" cy="74" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="345" cy="74" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="364" cy="74" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="383" cy="74" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="402" cy="74" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="307" cy="96" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="326" cy="96" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="345" cy="96" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="364" cy="96" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="383" cy="96" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="402" cy="96" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
</svg>
</div>

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 115" role="img" aria-label="Three more panels. Cluster: two whole rows chosen. Convenience: the six nearest the top left corner. Voluntary response: only those who chose to answer, bunched on the right">
  <text x="65" y="18" font-size="12" text-anchor="middle" fill="currentColor">cluster</text>
  <circle cx="17" cy="30" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="36" cy="30" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="55" cy="30" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="74" cy="30" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="93" cy="30" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="112" cy="30" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="7" y="42" width="116" height="20" rx="5" fill="none" stroke="currentColor" stroke-dasharray="3 3"/>
  <circle cx="17" cy="52" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="36" cy="52" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="55" cy="52" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="74" cy="52" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="93" cy="52" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="112" cy="52" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="17" cy="74" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="36" cy="74" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="55" cy="74" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="74" cy="74" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="93" cy="74" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="112" cy="74" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="7" y="86" width="116" height="20" rx="5" fill="none" stroke="currentColor" stroke-dasharray="3 3"/>
  <circle cx="17" cy="96" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="36" cy="96" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="55" cy="96" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="74" cy="96" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="93" cy="96" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="112" cy="96" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="210" y="18" font-size="12" text-anchor="middle" fill="currentColor">convenience</text>
  <circle cx="162" cy="30" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="181" cy="30" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="200" cy="30" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="219" cy="30" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="238" cy="30" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="257" cy="30" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="162" cy="52" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="181" cy="52" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="200" cy="52" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="219" cy="52" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="238" cy="52" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="257" cy="52" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="162" cy="74" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="181" cy="74" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="200" cy="74" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="219" cy="74" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="238" cy="74" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="257" cy="74" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="162" cy="96" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="181" cy="96" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="200" cy="96" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="219" cy="96" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="238" cy="96" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="257" cy="96" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="355" y="18" font-size="12" text-anchor="middle" fill="currentColor">voluntary</text>
  <circle cx="307" cy="30" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="326" cy="30" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="345" cy="30" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="364" cy="30" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="383" cy="30" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="402" cy="30" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="307" cy="52" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="326" cy="52" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="345" cy="52" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="364" cy="52" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="383" cy="52" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="402" cy="52" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="307" cy="74" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="326" cy="74" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="345" cy="74" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="364" cy="74" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="383" cy="74" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="402" cy="74" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="307" cy="96" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="326" cy="96" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="345" cy="96" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="364" cy="96" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="383" cy="96" r="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="402" cy="96" r="6" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
</svg>
</div>

### Systematic sample

In a **systematic sample** you take every $k$-th member from a list, starting at a random place among the first $k$.

To choose 60 of 600 students, $k = 600 \div 60 = 10$. Roll a random number from 1 to 10, say 7. Then take students
7, 17, 27, 37, ..., 597. That is 60 students.

It is quick, and it spreads the sample evenly through the list. The danger is a **repeating pattern** in the list. If
an apartment building lists its apartments floor by floor with 10 per floor, every 10th apartment might be the corner
one, which is bigger and more expensive. A systematic sample would then contain only corner apartments.

### Stratified random sample

Sometimes the population falls naturally into groups that may answer differently, such as grades in a school. These
groups are called **strata** (one group is a **stratum**, a Latin word for "layer"). In a **stratified random
sample**, you take a separate simple random sample from **each** stratum, usually in proportion to its size.

Why bother? A simple random sample of 60 could, by bad luck, contain very few grade 9 students. Stratifying makes
sure every group is represented in the right amount, and this usually makes the estimate **more precise**.

### Cluster sample

Sometimes the population comes in ready-made groups that are each a bit like the whole population: homerooms in a
school, blocks in a city. In a **cluster sample**, you choose some whole groups (**clusters**) at random and ask
**everyone** in them.

It is cheap and convenient: visiting 3 homerooms is much easier than finding 60 students scattered over the school.
The risk: members of one cluster are often alike (people on one city block may have similar incomes), so a few
clusters can give a lopsided picture.

Notice the difference between strata and clusters. With **strata** you sample **from every** group. With **clusters**
you take **all of some** groups.

### Two unfair methods

- **Convenience sample**: you ask whoever is easy to reach. Your friends, people in the mall, the first 60 students to
  arrive. The people who are easy to reach are often different from everyone else. Early arrivers might be students
  who like mornings, which is exactly the wrong group to ask about a later start.
- **Voluntary response sample**: people decide for themselves whether to answer. Online polls, call-in shows, a box
  in the hallway. The people who bother to answer are usually those with **strong** feelings, and often strong
  negative feelings. The quiet majority stays silent.

In both, chance plays no part in who is chosen. So the results can be pushed in one direction, and there is no way to
know how far. That is called **bias**, the topic of the next lesson.

## Worked examples

**1. A stratified sample.** The school has 200 students in grade 7, 250 in grade 8 and 150 in grade 9 (600 in all).
Choose a stratified sample of 60.

The sample is $60 \div 600 = \frac{1}{10}$ of the school, so take $\frac{1}{10}$ of each grade:

- grade 7: $200 \div 10 = 20$ students;
- grade 8: $250 \div 10 = 25$ students;
- grade 9: $150 \div 10 = 15$ students.

Check: $20 + 25 + 15 = 60$. ✓ Within each grade, choose the students by simple random sampling.

**2. A systematic sample.** A list of 450 library members; choose 30. $k = 450 \div 30 = 15$. Pick a random start
from 1 to 15, say 4. The sample is members 4, 19, 34, ..., and the 30th is $4 + 29 \times 15 = 439$.

**3. Using random digits.** A class list is numbered 01 to 40. You need a sample of 4. The random digits are
73 05 91 28 05 36 14 ... Read them in pairs:

- 73: too big, skip. 05: **keep**. 91: too big, skip. 28: **keep**. 05: already chosen, skip. 36: **keep**.
  14: **keep**.

The sample is students 05, 28, 36 and 14.

**4. Name the method.**

- A city chooses 10 of its 200 blocks at random and surveys every household on those blocks: **cluster**.
- A factory tests every 50th phone off the line, starting from a random one of the first 50: **systematic**.
- A TV show asks viewers to text in their vote: **voluntary response** (unfair).
- A researcher picks 30 boys at random from all the boys and 30 girls at random from all the girls: **stratified**.
- A reporter interviews shoppers at one mall: **convenience** (unfair).

## Try it

1. Name the method: (a) a teacher draws 5 names from a hat holding everyone's name; (b) a website asks visitors to
   rate the website; (c) a coach picks 4 players at random from each of the 3 teams in a club.
2. A sports league has 120 players under 12, 90 under 14 and 90 under 16. Plan a stratified sample of 30 players.
3. From a list of 800 voters you want a systematic sample of 40. What is $k$? If the random start is 13, what are the
   first three and the last voters chosen?
4. A class list is numbered 01 to 30. Use the random digits 47 12 30 08 12 95 21 to choose 4 students.
5. A survey about how often people exercise is done at the door of a gym. What is wrong with this sample?
6. A school has 24 homerooms of 25 students. Describe a cluster sample of about 75 students. Give one advantage and
   one danger.
7. In the question at the start, which ideas were unfair, and which kind of unfair sample is each?

??? note "Answers"
    1. (a) Simple random. (b) Voluntary response. (c) Stratified (the teams are the strata).
    2. There are $120 + 90 + 90 = 300$ players, and 30 is $\frac{1}{10}$ of them. Choose at random **12** under-12,
       **9** under-14 and **9** under-16 players. Check: $12 + 9 + 9 = 30$.
    3. $k = 800 \div 40 = 20$. Voters 13, 33, 53, and the last is $13 + 39 \times 20 = 793$.
    4. 47: skip. **12**: keep. **30**: keep. **08**: keep. 12: repeat, skip. 95: skip. **21**: keep. The sample is
       12, 30, 08, 21.
    5. It is a convenience sample of people who are at a gym, so they almost certainly exercise more than the
       population as a whole. The answer will be pushed too high.
    6. Choose 3 of the 24 homerooms at random and ask all 25 students in each ($3 \times 25 = 75$). Advantage: easy,
       only three rooms to visit. Danger: students in one homeroom may be alike (for example the same grade or the
       same program), so three rooms may not represent the whole school.
    7. "The first 60 to arrive" is a **convenience** sample: early arrivers may be students who like mornings.
       "The box in the hallway" is a **voluntary response** sample: only students with strong views will bother.
       The hat is a fair simple random sample.

## Common mistake

**Thinking "random" means "haphazard".** Stopping whoever walks by is not random: you choose, perhaps without
noticing, who looks approachable. A random sample needs a real chance device (a hat, dice, a random number generator)
so that a person's choice plays no part.

**Mixing up strata and clusters.** Stratified: some members from **every** group. Cluster: **every** member from
**some** groups.

## Where it leads

- Back: [Populations and samples](04-populations-samples.md) · Next: [Bias](06-bias.md)
- [Level 5 page](index.md) · [Statistics topic page](../index.md)
- "Every possible sample is equally likely" is the idea of equally likely outcomes: see
  [probability level 3](../../probability/level-3/06-equally-likely.md).
- How many different samples of 4 can be chosen from 40 students? That is a counting question: see
  [counting level 5](../../counting/level-5/01-choosing-not-arranging.md).
- Random assignment, the cousin of random sampling, is what makes experiments trustworthy:
  [level 8](../level-8/index.md).
