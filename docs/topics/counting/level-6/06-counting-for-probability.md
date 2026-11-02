---
title: "Counting outcomes for probability"
---

# Counting outcomes for probability

*Counting and combinations · level 6, lesson 6 of 6*

## A question to start

In a lottery you choose 6 different numbers from 1 to 49. Six numbers are drawn. If yours match all six, you win the
jackpot. How many different tickets are there?

$$\binom{49}{6} = 13\,983\,816.$$

Only one of them wins. If you bought one ticket every week, you would expect to wait about 13 983 816 weeks for a
jackpot, which is about **269 000 years**. This lesson uses counting to measure chances like this, and then turns to
something you use every day: why a long password is so much stronger than a short clever one.

## The idea

### Equally likely outcomes

An **outcome** is one possible result of something random: one ticket that could be drawn, one hand that could be
dealt, one password a guesser could try. When all the outcomes are **equally likely**, the chance of an event is

$$\text{probability} = \frac{\text{number of outcomes where the event happens}}{\text{total number of outcomes}}.$$

So finding a chance is two counting problems, one on top of the other. Probability is written as a fraction, a
decimal or a percentage, and "1 in $N$" means $\dfrac{1}{N}$.

The words **equally likely** are important. As you saw in lesson 3, the 126 different results of four dice (ignoring
order) are not equally likely, but the $6^4 = 1296$ ordered outcomes are. Always count the outcomes that really are
equally likely.

### The lottery in full

The draw picks 6 of the 49 numbers, and every set of 6 is equally likely. How many tickets match **exactly $k$** of
the drawn numbers? A ticket like that has $k$ of the 6 winning numbers **and** $6 - k$ of the 43 losing numbers:

$$\binom{6}{k} \times \binom{43}{6-k}.$$

| Numbers matched | Tickets | Chance, about 1 in |
| --- | --- | --- |
| 6 | 1 | 13 983 816 |
| 5 | $\binom{6}{5}\binom{43}{1} = 258$ | 54 201 |
| 4 | $\binom{6}{4}\binom{43}{2} = 13\,545$ | 1 032 |
| 3 | $\binom{6}{3}\binom{43}{3} = 246\,820$ | 57 |
| 2 | $\binom{6}{2}\binom{43}{4} = 1\,851\,150$ | 7.6 |
| 1 | $\binom{6}{1}\binom{43}{5} = 5\,775\,588$ | 2.4 |
| 0 | $\binom{43}{6} = 6\,096\,454$ | 2.3 |

The tickets add up to $13\,983\,816$, a check that every ticket has been counted exactly once. Notice that matching
**none** of the numbers is the single most likely result.

### Passwords: counting what a guesser faces

Suppose a password is chosen **at random**, each character from an "alphabet" of $n$ symbols, and it is $L$ characters
long. Order matters and repeats are allowed, so there are

$$n^L$$

possible passwords. Someone who wants to break in by trying every password (a **brute-force** attack) may have to try
them all. To get a feel for the sizes, imagine an attacker with fast computers who tries 10 billion
($10^{10}$) passwords per second. That number is just for comparison; the point is how the totals grow.

| Password | Alphabet $n$ | Length $L$ | Possibilities | Time to try them all |
| --- | --- | --- | --- | --- |
| PIN | 10 digits | 4 | 10 000 | a millionth of a second |
| lowercase | 26 | 8 | about $2.1 \times 10^{11}$ | about 21 seconds |
| upper, lower, digits | 62 | 8 | about $2.2 \times 10^{14}$ | about 6 hours |
| all keyboard symbols | 94 | 8 | about $6.1 \times 10^{15}$ | about 7 days |
| lowercase | 26 | 12 | about $9.5 \times 10^{16}$ | about 110 days |
| lowercase | 26 | 16 | about $4.4 \times 10^{22}$ | about 138 000 years |

### Why length wins

Look at what each change does to $n^L$:

- Making the alphabet bigger changes the **base**: going from 26 to 94 symbols multiplies the count by
  $\left(\dfrac{94}{26}\right)^8$, which is about 29 000.
- Adding **one** more character multiplies the count by the whole alphabet size again, 26 or more. Adding 8 more
  lowercase letters (from 8 to 16) multiplies by $26^8$, about 200 thousand million.

The length is the **power**, and powers grow faster than anything you can do to the base. So 16 random lowercase
letters beat 8 characters from the whole keyboard by a huge margin, and they are easier to type.

The same counting explains "passphrases". Pick words at random from a list of 7776 words (a list made for this, small
enough to roll dice for: $6^5 = 7776$). Four random words give $7776^4 \approx 3.7 \times 10^{15}$ possibilities; six
words give $7776^6 \approx 2.2 \times 10^{23}$, more than 16 random lowercase letters, and far easier to remember.

**An honest warning.** All of this assumes the password is chosen **at random**. Real attackers do not start with
"aaaaaaaa"; they start with common passwords, names, words and dates, and with tricks like replacing "o" by "0".
A password you invented yourself, like "Sunshine2024!", is found long before the count says. Counting tells you how
strong a random password is; it cannot make a guessable one strong.

## Worked examples

**1. Matching three.** In the 6 from 49 lottery, what is the chance of matching exactly 3 numbers?

$\dfrac{246\,820}{13\,983\,816} \approx 0.0177$, about 1 in 57.

**2. A full house.** What is the chance that a random 5-card hand (level 5, lesson 6) is a full house?

$\dfrac{3744}{2\,598\,960} \approx 0.00144$, about 1 in 694.

**3. A PIN with no repeats.** A 4-digit PIN is chosen at random. What is the chance that all four digits are
different?

- All PINs: $10^4 = 10\,000$. All different: $10 \times 9 \times 8 \times 7 = 5040$.
- Probability $\dfrac{5040}{10\,000} = 0.504$. So almost half of random PINs have a repeated digit.

**4. Exactly 5 heads.** A coin is tossed 10 times. What is the chance of exactly 5 heads?

- Outcomes: strings of H and T of length 10, all equally likely: $2^{10} = 1024$.
- Exactly 5 heads: choose which 5 tosses are heads, $\dbinom{10}{5} = 252$.
- Probability $\dfrac{252}{1024} \approx 0.246$. Even the most likely number of heads happens less than a quarter of
  the time.

## Try it

1. A smaller lottery picks 5 numbers from 1 to 40. How many tickets are possible?
2. In the 6 from 49 lottery, what is the chance of matching exactly 5 numbers? Write it as "about 1 in ...".
3. How many passwords are there of 6 lowercase letters? Of 6 characters from upper case, lower case and digits?
4. Which gives more possible passwords: 10 random lowercase letters, or 8 random characters from 62 symbols? What
   about 11 lowercase letters?
5. A 3-letter code uses the letters A to Z, repeats allowed, chosen at random. What is the chance that no letter is
   repeated?
6. A committee of 4 is chosen at random from 6 boys and 5 girls. What is the chance that it has at least one girl?
   (Use level 5, lesson 5.)
7. A bike lock has 3 dials, each 0 to 9. A thief tries one code every 2 seconds. What is the longest it can take to
   open?
8. A password is 8 characters, each a lowercase letter or a digit, and it must contain at least one digit. How many
   such passwords are there? (Count the complement.)

??? note "Answers"
    1. $\dbinom{40}{5} = \dfrac{40 \times 39 \times 38 \times 37 \times 36}{120} = 658\,008$.
    2. $\dfrac{258}{13\,983\,816}$, about 1 in 54 201.
    3. $26^6 = 308\,915\,776$ and $62^6 = 56\,800\,235\,584$.
    4. $26^{10} \approx 1.41 \times 10^{14}$ and $62^8 \approx 2.18 \times 10^{14}$, so the 8 characters from 62
       symbols win, just. But $26^{11} \approx 3.67 \times 10^{15}$, which beats $62^8$ by a factor of about 17. One
       more character makes up for a much smaller alphabet.
    5. No repeats: $26 \times 25 \times 24 = 15\,600$; all codes $26^3 = 17\,576$. Probability
       $\dfrac{15\,600}{17\,576} \approx 0.888$.
    6. $\dfrac{315}{330} = \dfrac{21}{22} \approx 0.955$.
    7. $10^3 = 1000$ codes, at 2 seconds each: 2000 seconds, about 33 minutes.
    8. With 36 symbols: $36^8 = 2\,821\,109\,907\,456$. With no digit (letters only): $26^8 = 208\,827\,064\,576$.
       At least one digit: $36^8 - 26^8 = 2\,612\,282\,842\,880$.

## Common mistake

**Dividing counts of outcomes that are not equally likely.** "Four dice give 126 different results, and only one is
'all sixes', so the chance is 1 in 126" is wrong. All sixes happens in 1 of the 1296 equally likely ordered
outcomes, so the chance is 1 in 1296. Count the outcomes that really have equal chances.

**Thinking a few odd symbols make a password strong.** Changing a letter to a symbol in a short password raises the
count only a little, and attackers know those tricks anyway. Length, and true randomness, are what multiply the
count.

## Where it leads

- Back: [Counting by a bijection](05-counting-bijection.md) · Next level: [Level 7: the binomial
  theorem](../level-7/index.md)
- [Level 6 page](index.md) · [Counting topic page](../index.md)
- Card hands and their counts: [Level 5, cards and hands](../level-5/06-cards-hands.md).
- What to do with these chances, expected values and why lotteries always pay out less than they take in:
  [Probability](../../probability/index.md).
- Very large and very small numbers like $2.2 \times 10^{23}$: [Numbers](../../numbers/index.md).
- How fast a computer can search through possibilities: [CSC108 Unit 9 (searching, sorting and
  complexity)](../../../uoft/CSC108H1/unit09.md).
