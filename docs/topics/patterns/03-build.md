---
title: "Build: Arithmetic sequences"
---

# Build: Adding the same amount, arithmetic sequences

*Patterns and sequences · step 3 of 5*

## A question to start

A spacecraft can fly from Earth to Mars cheaply only when the two planets line up just right. That happens about
once every **26 months**. If one launch window opens in a given month, when do the 5th and the 20th windows after it
open? You could count on your fingers 20 times. On this page you will learn to answer in one line, and also to add
up 1 + 2 + 3 + ... + 100 in a few seconds.

## The idea

### What makes a sequence arithmetic

A sequence is **arithmetic** when you add the **same number** each time to get the next term. That number is the
**common difference**, written $d$.

- 4, 7, 10, 13, ... has $d = 3$.
- 20, 15, 10, 5, 0, −5, ... has $d = -5$. Adding a negative number makes the terms go down.
- 1.5, 2, 2.5, 3, ... has $d = 0.5$.

To test whether a sequence is arithmetic, subtract each term from the next one. If every answer is the same, it
is arithmetic.

### Names for the parts

Mathematicians write the terms as $a_1, a_2, a_3, \ldots$ The little number is the position, so $a_1$ is the first
term and $a_{10}$ is the 10th. A general term, at any position $n$, is $a_n$.

### The formula for any term

Watch how many times $d$ has been added:

| Term | Built from the first term | Times $d$ was added |
| --- | --- | --- |
| $a_1$ | $a_1$ | 0 |
| $a_2$ | $a_1 + d$ | 1 |
| $a_3$ | $a_1 + d + d$ | 2 |
| $a_4$ | $a_1 + d + d + d$ | 3 |
| $a_n$ | $a_1 + (n-1)d$ | $n - 1$ |

To reach position $n$ you take $n - 1$ steps, and each step adds $d$. So

$$a_n = a_1 + (n-1)\,d$$

This is why the trick in the Explore step works: the formula always contains "$d$ times the position".

### Adding up an arithmetic sequence fast

There is a famous story that a schoolteacher once asked a class to add all the whole numbers from 1 to 100, hoping
for a quiet hour, and young Carl Friedrich Gauss had the answer at once. Whether or not it happened exactly so, his
method is real and beautiful. Write the sum forwards and backwards, then add the two lines:

$$
\begin{aligned}
S &= 1 + 2 + 3 + \cdots + 99 + 100\\
S &= 100 + 99 + 98 + \cdots + 2 + 1\\
2S &= 101 + 101 + 101 + \cdots + 101 + 101
\end{aligned}
$$

There are 100 pairs and each pair makes 101, so $2S = 100 \times 101 = 10100$ and $S = 5050$.

The same idea works for every arithmetic sequence. The first and last terms always make the same total as the
second and second-to-last, and so on. For $n$ terms:

$$S_n = \frac{n\,(a_1 + a_n)}{2}$$

In words: *the number of terms, times the average of the first and last term.*

## Worked examples

**1. The launch windows.** Call the month of today's window month 0. Then the windows open in months
0, 26, 52, 78, ..., an arithmetic sequence with $a_1 = 0$ and $d = 26$. The 5th window after today is the
6th term (today's is the 1st):

$$a_6 = 0 + (6-1)\times 26 = 130 \text{ months}$$

130 months is 10 years and 10 months. The 20th window after today is $a_{21} = 20 \times 26 = 520$ months, about
43 years later. (Real windows drift by a few weeks because the orbits are ovals, not circles, but 26 months is the
average.)

**2. Seats in a theatre.** The first row has 18 seats and each row has 2 more than the row in front. There are
25 rows. How many seats are in the last row, and how many in total?

- Last row: $a_{25} = 18 + (25 - 1)\times 2 = 18 + 48 = 66$ seats.
- Total: $S_{25} = \dfrac{25 \times (18 + 66)}{2} = \dfrac{25 \times 84}{2} = 1050$ seats.

**3. Working backwards.** An arithmetic sequence has $a_3 = 11$ and $a_8 = 31$. Find $a_1$ and $d$.

- From the 3rd term to the 8th term is 5 steps, and the terms grew by $31 - 11 = 20$.
- So $5d = 20$ and $d = 4$.
- Going back 2 steps from $a_3$: $a_1 = 11 - 2 \times 4 = 3$. The sequence is 3, 7, 11, 15, 19, 23, 27, 31, ...

## Try it

1. Is 5, 9, 13, 18, 22 arithmetic? Why or why not?
2. Find $a_{40}$ for 7, 12, 17, 22, ...
3. Add up all the even numbers from 2 to 200.
4. A sequence starts at 100 and goes down by 7 each time. What is the first negative term, and at which position?
5. You save 5 dollars in week 1, 7 dollars in week 2, 9 dollars in week 3, and so on. How much have you saved after a
   year (52 weeks)?

??? note "Answers"
    1. No. The gaps are 4, 4, 5, 4. They are not all the same.
    2. $a_1 = 7$, $d = 5$: $a_{40} = 7 + 39 \times 5 = 202$.
    3. There are 100 even numbers from 2 to 200, so $S = \dfrac{100 \times (2 + 200)}{2} = 10100$. (It is exactly
       twice $1 + 2 + \cdots + 100$, which makes sense.)
    4. $a_n = 100 + (n-1)(-7) = 107 - 7n$. This is negative when $7n > 107$, that is $n > 15.3$, so at position 16:
       $a_{16} = 107 - 112 = -5$.
    5. Week 52 saves $5 + 51 \times 2 = 107$ dollars. Total $\dfrac{52 \times (5 + 107)}{2} = 2912$ dollars.

## Common mistake

**Using $n\,d$ instead of $(n-1)\,d$.** The first term has had no $d$ added yet, so the 10th term has had $d$ added
9 times, not 10. A quick check: put $n = 1$ into your formula. It must give back $a_1$.

## Where it leads

- Next step: [Master: geometric sequences](04-master.md), where you multiply instead of add, and sums can go on
  forever.
- Back a step: [Explore: number sequences and their rules](02-explore.md)
- The 26-month rhythm of trips to Mars is explained on akadian.ca's
  [Mars in space](https://www.akadian.ca/science/mars-facts/space.html) page.
