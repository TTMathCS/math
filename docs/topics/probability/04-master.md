---
title: "Master: Conditional probability"
---

# Master: When one thing changes the chances, conditional probability

*Probability · step 4 of 5*

## A question to start

A disease affects 1 person in every 100. A test for it gives a positive result for 90% of people who have the
disease. But it also wrongly gives a positive result for 9% of people who do **not** have it.

You take the test and it comes back positive. What is the chance that you really have the disease?

Most people say "about 90%". The true answer is **about 9%**. This is not a trick: it is how real screening tests
behave, and doctors are trained to think about it. This page shows how to work it out, using one new idea: the
probability of something **given** that you already know something else.

## The idea

### When the second stage depends on the first

In the Build step, the marble was put back before the second pick, so the second pick had the same chances as the
first. Now **do not** put it back.

A bag has 3 orange and 2 blue marbles. Take two, one after the other, without putting the first back.

- First pick: $P(\text{orange}) = \tfrac35$.
- If the first was orange, the bag now holds 2 orange and 2 blue. Second pick orange: $\tfrac24$.
- If the first was blue, the bag now holds 3 orange and 1 blue. Second pick orange: $\tfrac34$.

The chance for the second pick **depends** on what happened first. The events are **dependent**. The tree still
works: you just write the changed probabilities on the second-stage branches.

$$P(\text{orange, orange}) = \frac35 \times \frac24 = \frac{6}{20} = \frac{3}{10}.$$

### "Given": conditional probability

The probability of B **given** that A has happened is written

$$P(B \mid A),$$

read "the probability of B given A". The vertical line means "given". Above,
$P(\text{second orange} \mid \text{first orange}) = \tfrac24$.

Knowing that A happened **shrinks the sample space** down to just the outcomes in A. Inside that smaller world,
we ask how much of it is also B:

$$P(B \mid A) = \frac{P(A \text{ and } B)}{P(A)}.$$

Turned round, this is the general "and" rule, which works whether or not the events are independent:

$$P(A \text{ and } B) = P(A) \times P(B \mid A).$$

### Independence, properly

Now we can say exactly what **independent** means: knowing A does not change the chance of B.

$$P(B \mid A) = P(B).$$

In that case the general "and" rule becomes the simple one from the Build step, $P(A) \times P(B)$.

### Two-way tables

A survey of 100 students records their grade and how they get to school:

| | Walks | Takes the bus | Total |
| --- | --- | --- | --- |
| Grade 9 | 30 | 20 | 50 |
| Grade 10 | 15 | 35 | 50 |
| **Total** | 45 | 55 | 100 |

Pick a student at random.

- $P(\text{bus}) = \dfrac{55}{100} = 0.55$.
- $P(\text{bus} \mid \text{grade 10})$: look **only** at the grade 10 row. 35 of those 50 take the bus, so $\dfrac{35}{50} = 0.7$.
- $P(\text{grade 10} \mid \text{bus})$: look **only** at the bus column. 35 of those 55 are in grade 10, so $\dfrac{35}{55} = \dfrac{7}{11} \approx 0.64$.

Notice that $P(\text{bus} \mid \text{grade 10})$ and $P(\text{grade 10} \mid \text{bus})$ are **different**. Which
group you are "given" matters. Also $0.7 \ne 0.55$, so grade and bus-riding are **not** independent: knowing the grade
changes the chance.

## Worked examples

**1. The medical test.** The easiest way is to imagine a crowd of **10,000** people and follow them through. (This
is called using **natural frequencies**.)

1. 1 in 100 has the disease: **100** people have it, **9,900** do not.
2. Of the 100 with the disease, 90% test positive: **90** people.
3. Of the 9,900 without it, 9% test positive anyway: $0.09 \times 9900 = 891$ people.
4. Altogether, $90 + 891 = 981$ people test positive.
5. Of those 981, only 90 really have the disease:

$$P(\text{disease} \mid \text{positive}) = \frac{90}{981} \approx 0.092, \text{ about } 9\%.$$

The disease is so rare that the few true positives are swamped by false alarms from the huge healthy group. That is
why a positive screening test is usually followed by a second, more careful test. Turning
$P(\text{positive} \mid \text{disease})$ into $P(\text{disease} \mid \text{positive})$ like this is called **Bayes' theorem**, after Thomas
Bayes, an English minister whose essay on it was published in 1763, after his death.

**2. Two aces.** Two cards are dealt from a full pack. What is the probability that both are aces?

$$P(\text{both aces}) = P(\text{1st ace}) \times P(\text{2nd ace} \mid \text{1st ace}) = \frac{4}{52} \times \frac{3}{51} = \frac{12}{2652} = \frac{1}{221}.$$

**3. The birthday surprise.** In a room of 23 people, what is the chance that at least two share a birthday?
(Ignore 29 February and assume every day is equally likely.)

Use the complement: find the chance that **all** birthdays are different. Take the people one at a time:

- The 2nd person must miss the 1st person's birthday: $\tfrac{364}{365}$.
- **Given** that, the 3rd must miss both: $\tfrac{363}{365}$.
- And so on, down to the 23rd person, who must miss 22 days: $\tfrac{343}{365}$.

$$P(\text{all different}) = \frac{364}{365} \times \frac{363}{365} \times \cdots \times \frac{343}{365} \approx 0.493.$$

So $P(\text{at least one shared birthday}) \approx 1 - 0.493 = 0.507$: better than an even chance, with only 23 people.
The surprise is that there are $\dbinom{23}{2} = 253$ **pairs** of people, and each pair is a chance for a match.

## Try it

1. A bag has 5 red and 3 blue counters. Two are taken without putting back. Find $P(\text{both red})$ and
   $P(\text{one of each colour})$.
2. Using the school table above, find $P(\text{walks} \mid \text{grade 9})$ and $P(\text{grade 9} \mid \text{walks})$.
3. Two dice are rolled and you are told the total is 8. What is the probability that one of the dice shows a 3?
4. A family has two children. Assume each child is equally likely to be a boy or a girl, independently. Given that
   **at least one** is a girl, what is the probability that both are girls?
5. A disease affects 2% of people. A test is positive for 95% of people with it and for 5% of people without it. If
   you test positive, what is the probability you have the disease?

??? note "Answers"
    1. $P(\text{both red}) = \dfrac58 \times \dfrac47 = \dfrac{20}{56} = \dfrac{5}{14}$. One of each: red then blue or
       blue then red, $\dfrac58 \times \dfrac37 + \dfrac38 \times \dfrac57 = \dfrac{30}{56} = \dfrac{15}{28}$.
    2. $P(\text{walks} \mid \text{grade 9}) = \dfrac{30}{50} = 0.6$. $P(\text{grade 9} \mid \text{walks}) = \dfrac{30}{45} = \dfrac23$.
    3. A total of 8 can happen 5 ways: (2, 6), (3, 5), (4, 4), (5, 3), (6, 2). Two of them include a 3. So the
       answer is $\dfrac25$.
    4. The equally likely families are BB, BG, GB, GG. "At least one girl" leaves BG, GB, GG. Only one of those three
       is two girls, so the answer is $\dfrac13$, not $\dfrac12$.
    5. Imagine 10,000 people: 200 have it and 190 of them test positive; 9,800 do not and 490 of them test positive.
       So $P = \dfrac{190}{190 + 490} = \dfrac{190}{680} \approx 0.28$, about 28%.

## Common mistake

**Swapping the condition.** $P(A \mid B)$ and $P(B \mid A)$ are usually different. "90% of people with the disease
test positive" is $P(\text{positive} \mid \text{disease})$; it does **not** mean 90% of people who test positive have
the disease. Mixing these up has misled patients, juries and newspapers. Always ask: *what am I given, and what am I
asking about?*

## Where it leads

- Next step: [Beyond: expected value](05-beyond.md), where you find out what a game is worth in the long run.
- Back a step: [Build: "and", "or", and tree diagrams](03-build.md)
- The 253 pairs in the birthday problem come from [Counting: combinations](../counting/level-5/index.md).
