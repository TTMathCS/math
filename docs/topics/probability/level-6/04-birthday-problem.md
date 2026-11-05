---
title: "The birthday problem"
---

# The birthday problem

*Probability · level 6, lesson 4 of 6*

## A question to start

How many people do you need in a room for it to be **more likely than not** that two of them share a birthday?

There are 365 possible birthdays, so most people guess something like 180 (about half of 365). The true answer is
**23**. With 23 people, the chance of a shared birthday is about 50.7%. With 30 people (a typical class) it is about
71%, and with 70 people it is over 99.9%.

This is one of the most famous surprises in probability. It is not a trick, and by the end of this lesson you will be
able to calculate it yourself and explain why our instinct is so far off.

## The idea

### The assumptions

To turn a real-life question into mathematics, we need a **model**: a simplified version we can calculate with. Here
the model is:

- a year has 365 days (we ignore 29 February);
- each person's birthday is equally likely to be any of the 365 days;
- different people's birthdays are independent (so, for example, no twins in the room).

Real birthdays are not exactly like this (more people are born in some months than others), and we will come back to
that at the end.

### Turn it round: all different

"At least two share a birthday" is an "at least one" question: at least one matching pair. There are many ways it can
happen (two people share, or three, or two separate pairs, ...). As in [level 5](../level-5/04-at-least-one.md), the
opposite is simpler:

$$P(\text{some shared birthday}) = 1 - P(\text{all birthdays different}).$$

### Building "all different" one person at a time

Bring the people into the room one at a time, and use the multiplication rule with conditional probabilities: each
new person must miss every birthday **already taken**, given that the earlier people all differ.

- Person 1: any birthday is fine. Chance $\tfrac{365}{365}$.
- Person 2 must miss person 1's day: 364 of the 365 days are free. Chance $\tfrac{364}{365}$.
- Person 3, given the first two differ, must miss **two** days: $\tfrac{363}{365}$.
- Person 4 must miss three days: $\tfrac{362}{365}$.
- ...
- Person $n$ must miss $n - 1$ days: $\tfrac{365 - (n - 1)}{365}$.

Multiply along this one long path:

$$P(\text{all different}) = \frac{365}{365} \times \frac{364}{365} \times \frac{363}{365} \times \cdots \times \frac{365 - n + 1}{365}.$$

For 23 people, the last factor is $\tfrac{343}{365}$. A calculator (or a short loop on a computer) gives

$$P(\text{all 23 different}) \approx 0.4927, \quad\text{so}\quad P(\text{some shared birthday}) \approx 0.5073.$$

The same formula comes from counting. There are $365^n$ equally likely lists of birthdays for $n$ people (365 choices
each). The lists where all are different number $365 \times 364 \times \cdots \times (365 - n + 1)$: 365 choices for
the first person, then 364 left for the second, and so on. Dividing gives the same product.

### How the chance grows

| People $n$ | 5 | 10 | 15 | 20 | 23 | 30 | 40 | 50 | 57 | 70 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P(shared) | 0.027 | 0.117 | 0.253 | 0.411 | 0.507 | 0.706 | 0.891 | 0.970 | 0.990 | 0.999 |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 410 215" role="img" aria-label="A graph of the chance of a shared birthday against the number of people from 0 to 70. The curve rises slowly, then steeply, crossing one half at 23 people, and levels off near 1 by about 60 people.">
  <line x1="40" y1="180" x2="395" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="180" x2="40" y2="25" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="105" x2="390" y2="105" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="40" y1="30" x2="390" y2="30" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="155" y1="180" x2="155" y2="104" stroke="#eea66f" stroke-width="2"/>
  <polyline fill="none" stroke="#9cc9ea" stroke-width="3" points="40,180.0 50,179.6 60,177.5 70,173.9 80,168.8 90,162.5 100,154.9 110,146.5 120,137.5 130,128.0 140,118.3 150,108.6 160,99.2 170,90.3 180,81.8 190,74.1 200,67.0 210,60.7 220,55.2 230,50.4 240,46.3 250,42.9 260,40.1 270,37.8 280,35.9 290,34.4 300,33.3 310,32.4 320,31.8 330,31.3 340,30.9 350,30.6 360,30.4 370,30.3 380,30.2 390,30.1"/>
  <circle cx="155" cy="104" r="4" fill="#eea66f"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="40" y="196">0</text><text x="90" y="196">10</text><text x="140" y="196">20</text><text x="190" y="196">30</text>
    <text x="240" y="196">40</text><text x="290" y="196">50</text><text x="340" y="196">60</text><text x="390" y="196">70</text>
    <text x="215" y="211">number of people</text><text x="155" y="96">23</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="34" y="184">0</text><text x="34" y="109">1/2</text><text x="34" y="34">1</text>
  </g>
</svg>
</div>

The curve rises slowly at first, then very steeply between about 10 and 40 people, then flattens close to 1.

### Why our instinct is wrong: count the pairs

Our instinct imagines **one** person looking for a match with **their own** birthday. But a match can be between
**any two** people. With 23 people, the number of pairs is

$$\binom{23}{2} = \frac{23 \times 22}{2} = 253.$$

Each pair has a $\tfrac{1}{365}$ chance of matching. 253 pairs, each a small chance, adds up to a lot of chances.
In fact, if we pretend the 253 pairs were independent (they are not quite, but nearly), the chance that **no** pair
matches would be about

$$\left(\frac{364}{365}\right)^{253} \approx 0.4995,$$

which is very close to the true 0.4927. The number of pairs grows much faster than the number of people: double the
people and you roughly **quadruple** the pairs. That is why the curve shoots up.

### "Someone shares **my** birthday" is a different question

If you walk into a room of 22 other people, the chance that at least one of them shares **your** birthday is

$$1 - \left(\frac{364}{365}\right)^{22} \approx 0.059,$$

only about 6%. Here only 22 pairs involve you. To have an even chance of someone sharing **your** birthday, you need
253 other people, because $\left(\tfrac{364}{365}\right)^{253} \approx 0.4995$, just under a half. This is the question
our instinct is really answering, and it is why the birthday problem feels wrong.

### What about real birthdays?

Real birthdays are not spread perfectly evenly. It can be proved that **any** unevenness makes a shared birthday
**more** likely, not less (if some days are more popular, people are more likely to collide on them). So in real
rooms, 23 people give at least the chance we calculated. Twins only help too.

### Going further: a quick estimate

For $n$ people and $d$ equally likely days, a good approximation is

$$P(\text{all different}) \approx e^{-n(n-1)/(2d)},$$

where $e \approx 2.718$ is the number you meet in [Change](../../change/index.md). For $n = 23$, $d = 365$, this gives
about 0.500, close to the exact 0.493. It shows that matches become likely once $n$ is around $\sqrt{d}$, not
around $d$.

<figure class="play" data-play="birthday"><span class="ai-tag">AI-created</span><figcaption><b>Shared birthdays.</b> It passes 50% at 23 people.</figcaption></figure>

## Worked examples

**1. Three people.** Find the chance that at least two of three people share a birthday.

$P(\text{all different}) = \tfrac{364}{365} \times \tfrac{363}{365} \approx 0.99180$, so
$P(\text{shared}) \approx 0.0082$, a little under 1%.

**2. A dice version you can check by hand.** Four people each roll a die. Find the chance that at least two get the
same number.

- All different: $\tfrac66 \times \tfrac56 \times \tfrac46 \times \tfrac36 = \tfrac{360}{1296} = \tfrac{5}{18}$.
- At least one match: $1 - \tfrac{5}{18} = \tfrac{13}{18} \approx 0.72$.

With only 6 "birthdays", 4 people are already very likely to collide. Try it with a real die!

**3. A class of 30.** From the table, $P(\text{shared}) \approx 0.706$. In about 7 out of 10 classes of 30, at least
two students share a birthday.

**4. Certainty.** How many people are needed to be **certain** of a shared birthday (ignoring 29 February)?

With 365 people, all birthdays could still be different. With 366, there are more people than days, so two **must**
share. This is the **pigeonhole principle**: put more pigeons than holes and some hole holds two. So 366. (Counting
29 February as a possible birthday, 367.) Probability says 23 for an even chance; certainty needs 366.

## Try it

1. Two people meet. What is the chance they share a birthday?
2. Find the chance of a shared birthday among 4 people. Give 4 decimal places.
3. Use the formula and a calculator to check the table entry for 10 people.
4. In a class of 30, is a shared birthday more or less likely than tossing heads with a coin? By how much?
5. Five people each pick a whole number from 1 to 10 at random. Find the chance that at least two pick the same number.
6. How many other people must be in a room before it is more likely than not that someone shares **your** birthday?
7. A year on Mars lasts about 669 Martian days ("sols"). If people counted birthdays in sols, with 669 equally likely
   days, the chance of a match among 30 people is about 0.483 and among 31 people about 0.506. What is the "Mars
   birthday number", and why is it more than 23?
8. A website gives each user a random 4-digit PIN from 0000 to 9999. Using the quick estimate, roughly how many users
   are needed before two users probably share a PIN?

??? note "Answers"
    1. Person 2 must land on person 1's day: $\dfrac{1}{365} \approx 0.0027$.
    2. $P(\text{all different}) = \dfrac{364}{365} \times \dfrac{363}{365} \times \dfrac{362}{365} \approx 0.98364$,
       so $P(\text{shared}) \approx 0.0164$.
    3. $\dfrac{364}{365} \times \dfrac{363}{365} \times \cdots \times \dfrac{356}{365} \approx 0.8831$ (9 factors after
       the first), so $P(\text{shared}) \approx 0.1169$, which rounds to 0.117. ✓
    4. More likely: about 0.706 against 0.5, so about 0.21 more.
    5. All different: $\dfrac{10}{10} \times \dfrac{9}{10} \times \dfrac{8}{10} \times \dfrac{7}{10} \times \dfrac{6}{10} = \dfrac{30\,240}{100\,000} = 0.3024$.
       So at least two match: $1 - 0.3024 = 0.6976$.
    6. 253 others, since $\left(\dfrac{364}{365}\right)^{252} \approx 0.5009$ (over a half, so 252 is not enough) and
       $\left(\dfrac{364}{365}\right)^{253} \approx 0.4995$.
    7. **31**: that is the smallest number of people with a better than even chance. It is more than 23 because there
       are more days to spread over. The quick estimate says it grows like the square root of the number of days:
       $\sqrt{669} \approx 25.9$ against $\sqrt{365} \approx 19.1$, and $23 \times \tfrac{25.9}{19.1} \approx 31$.
    8. Here $d = 10\,000$. A match becomes likely when $e^{-n(n-1)/20\,000}$ drops to about a half, which happens when
       $n(n-1)/20\,000 \approx 0.69$, so $n^2 \approx 13\,900$ and $n \approx 118$. About 120 users. (That is why
       systems do not rely on random short codes being unique.)

## Common mistake

**Answering the "my birthday" question instead.** "Will someone match me?" and "will any two people match?" are
different events. The second has many more pairs, and so a much bigger chance.

**Adding instead of using the complement.** "Each pair has a $\tfrac{1}{365}$ chance, and there are 253 pairs, so
$\tfrac{253}{365} = 0.69$" is wrong: the pairs overlap, so adding overcounts (and with 30 people it would give
$\tfrac{435}{365}$, more than 1). Use $1 - P(\text{all different})$.

## Where it leads

- Back: [Probability with combinations](03-combinations-probability.md) · Next: [The Monty Hall problem](05-monty-hall.md).
- [Level 6 page](index.md) · [Probability topic page](../index.md)
- The pigeonhole principle and counting pairs: [Counting](../../counting/index.md).
- The same mathematics warns computer scientists about "collisions", two users or files given the same random code
  (question 8).
- Checking the answer by simulating many rooms on a computer: Monte Carlo methods in [level 8](../level-8/index.md).
