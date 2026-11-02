---
title: "Equations from stories"
---

# Equations from stories

*Algebra · level 4, lesson 5 of 7*

## A question to start

Three numbers in a row (like 8, 9, 10) add up to 72. What are they?

You could guess and check: $20 + 21 + 22 = 63$, too small; $25 + 26 + 27 = 78$, too big; then $23 + 24 + 25 = 72$.
It works, but it took three tries. With algebra it takes one line, and it shows something beautiful along the way:
the middle number is always the total divided by 3. In this lesson you learn to turn a story into an equation, which
is the step where most of the real thinking happens.

## The idea

### Algebra is a translation

A word problem is written in English. To solve it with algebra, you **translate** it into an equation, solve the
equation, and translate the answer back into English. The solving part is what you practised in the last lesson. The
translating is new, and it follows a plan.

### The plan

1. **Read** the whole problem. What is it asking for?
2. **Define the variable.** Choose a letter for one unknown amount, and write down exactly what it means, with units:
   "Let $n$ be the smallest number" or "Let $w$ be the width in cm". This is the most important step.
3. **Write every other amount using the variable.** If the other number is 1 more, it is $n + 1$.
4. **Write an equation.** Find a fact in the story that says two things are equal (often a total), and write it.
5. **Solve** the equation.
6. **Check in the story**, not just in the equation. Does the answer fit every fact in the words?
7. **Answer the question in a sentence**, with units.

### Why define the variable first?

Without a clear meaning, a letter causes trouble. In an ages problem, is $x$ the son's age or the mother's age?
Now or in 5 years? If you write "Let $s$ be the son's age now, in years", every later line is clear, and at the end
you know exactly what your number means.

A good choice is usually the **smallest** or the **first** amount, so the others can be written by adding to it.

### Consecutive numbers

**Consecutive** numbers follow each other without gaps: 23, 24, 25. If the first is $n$, the next ones are $n + 1$
and $n + 2$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 120" role="img" aria-label="Three bars n, n plus 1 and n plus 2 side by side, with the extra pieces 1 and 2 shown in a different colour">
  <rect x="20" y="20" width="200" height="22" fill="#eea66f" stroke="currentColor"/>
  <text x="120" y="36" font-size="13" text-anchor="middle" fill="currentColor">n</text>
  <rect x="20" y="50" width="200" height="22" fill="#eea66f" stroke="currentColor"/>
  <text x="120" y="66" font-size="13" text-anchor="middle" fill="currentColor">n</text>
  <rect x="220" y="50" width="20" height="22" fill="#7ccf9a" stroke="currentColor"/>
  <rect x="20" y="80" width="200" height="22" fill="#eea66f" stroke="currentColor"/>
  <text x="120" y="96" font-size="13" text-anchor="middle" fill="currentColor">n</text>
  <rect x="220" y="80" width="40" height="22" fill="#7ccf9a" stroke="currentColor"/>
  <text x="300" y="66" font-size="13" fill="currentColor">n + 1</text>
  <text x="300" y="96" font-size="13" fill="currentColor">n + 2</text>
  <text x="300" y="36" font-size="13" fill="currentColor">n</text>
</svg>
</div>

The picture shows the total is three $n$ bars plus 3 extra: $n + (n + 1) + (n + 2) = 3n + 3$. For a total of 72:

$$
\begin{aligned}
3n + 3 &= 72\\
3n &= 69 \qquad \text{(subtract 3)}\\
n &= 23 \qquad \text{(divide by 3)}
\end{aligned}
$$

The numbers are 23, 24 and 25. Check: $23 + 24 + 25 = 72$. ✓

**Why is the middle number the total divided by 3?** Take 1 from the biggest number and give it to the smallest. Now
all three equal the middle number, and the total has not changed. So three middle numbers make 72, and the middle
number is $72 \div 3 = 24$. If instead you let the middle number be $m$, the three are $m - 1$, $m$, $m + 1$, the total
is $3m$, and the equation $3m = 72$ is solved in one step. Choosing the variable cleverly can make the algebra
shorter.

### Ages problems

Ages problems have a trap: time passes for **everyone**. If Lea is $L$ years old now, in 5 years she is $L + 5$, and
so is everyone else 5 years older. A table keeps it straight:

| | Now | In 5 years |
| --- | --- | --- |
| Lea | $L$ | $L + 5$ |
| Dad (3 times as old now) | $3L$ | $3L + 5$ |

### Is the answer sensible?

After solving, ask whether the answer fits the real world. A number of people must be a whole number and not
negative. A length must be positive. If a problem about children gives 7.5 children, either the problem has no
answer or (more often) there is a mistake.

## Worked examples

**1. Consecutive numbers.** Three consecutive numbers add to 72. Done above: **23, 24 and 25**.

**2. Two ages.** Jo is 5 years older than Kim. Their ages add to 31. How old is each?

- Let $k$ be Kim's age in years. Then Jo's age is $k + 5$.
- The ages add to 31: $k + (k + 5) = 31$, so $2k + 5 = 31$.
- Subtract 5: $2k = 26$. Divide by 2: $k = 13$.
- Check in the story: Kim 13, Jo 18. Jo is 5 years older ✓, and $13 + 18 = 31$ ✓.
- **Kim is 13 and Jo is 18.**

**3. Times as old.** Dad is three times as old as Lea. Together they are 48. How old is each?

- Let $L$ be Lea's age in years. Dad is $3L$.
- $L + 3L = 48$, so $4L = 48$ and $L = 12$.
- Check: Lea 12, Dad 36; $36 = 3 \times 12$ ✓, $12 + 36 = 48$ ✓.
- **Lea is 12 and Dad is 36.** In 5 years they will be 17 and 41: Dad will no longer be three times as old.

**4. A rectangle.** A rectangle is 4 cm longer than it is wide, and its perimeter is 36 cm. Find its length and
width.

- Let $w$ be the width in cm. The length is $w + 4$.
- Perimeter: $2w + 2(w + 4) = 36$. Writing it out: $w + (w + 4) + w + (w + 4) = 4w + 8$. So $4w + 8 = 36$.
- Subtract 8: $4w = 28$, so $w = 7$.
- Check: width 7, length 11, perimeter $7 + 11 + 7 + 11 = 36$. ✓
- **The rectangle is 11 cm long and 7 cm wide.**

**5. Shopping.** Three friends buy cinema tickets and one 6 dollar popcorn to share. They pay 42 dollars in all. How
much is one ticket?

- Let $t$ be the price of one ticket in dollars.
- $3t + 6 = 42$, so $3t = 36$ and $t = 12$.
- Check: three tickets 36 dollars and popcorn 6 dollars make 42 dollars. ✓
- **One ticket costs 12 dollars.**

**6. Consecutive even numbers.** Two consecutive even numbers add to 50. What are they?

- Let $e$ be the smaller. The next even number is $e + 2$ (not $e + 1$, which would be odd).
- $e + (e + 2) = 50$, so $2e + 2 = 50$, $2e = 48$, $e = 24$.
- **24 and 26.** Check: both even, $24 + 26 = 50$. ✓

## Try it

1. A number is doubled and then 7 is added. The result is 43. Write an equation and find the number.
2. Four consecutive numbers add to 90. Find them.
3. Mia is 4 years younger than her brother. Their ages add to 30. How old is each?
4. A rectangle is 3 times as long as it is wide. Its perimeter is 48 cm. Find its length and width.
5. A taxi charges 4 dollars plus 2 dollars per km. A ride cost 26 dollars. How long was it?
6. Three consecutive odd numbers add to 87. Find them.
7. A pencil costs $p$ cents and a pen costs 30 cents more. Two pencils and one pen cost 120 cents. Find the price of
   each.
8. Three consecutive numbers add to 100. Write the equation and solve it. What does the answer tell you?

??? note "Answers"
    1. Let $n$ be the number. $2n + 7 = 43$, so $2n = 36$ and $n = 18$. Check: $36 + 7 = 43$. ✓
    2. Let $n$ be the smallest: $n + (n + 1) + (n + 2) + (n + 3) = 4n + 6 = 90$, so $4n = 84$ and $n = 21$. The
       numbers are **21, 22, 23, 24**. Check: $21 + 22 + 23 + 24 = 90$. ✓
    3. Let $b$ be the brother's age; Mia is $b - 4$. $b + (b - 4) = 30$, so $2b - 4 = 30$, $2b = 34$, $b = 17$.
       **Brother 17, Mia 13.** Check: $17 + 13 = 30$ and $17 - 13 = 4$. ✓
    4. Let $w$ be the width in cm; the length is $3w$. Perimeter: $w + 3w + w + 3w = 8w = 48$, so $w = 6$. **Width
       6 cm, length 18 cm.** Check: $6 + 18 + 6 + 18 = 48$. ✓
    5. Let $k$ be the distance in km. $4 + 2k = 26$, so $2k = 22$ and $k = 11$. **11 km.**
    6. Let $n$ be the smallest odd number; the next two are $n + 2$ and $n + 4$. $3n + 6 = 87$, so $3n = 81$ and
       $n = 27$. **27, 29, 31.** Check: $27 + 29 + 31 = 87$. ✓
    7. Two pencils $2p$, one pen $p + 30$: $2p + p + 30 = 120$, so $3p + 30 = 120$, $3p = 90$, $p = 30$. **Pencil
       30 cents, pen 60 cents.** Check: $30 + 30 + 60 = 120$. ✓
    8. $3n + 3 = 100$, so $3n = 97$ and $n = 32.33...$, not a whole number. So **no** three consecutive whole numbers
       add to 100. (Their total is always $3n + 3 = 3(n + 1)$, a multiple of 3, and 100 is not a multiple of 3.)

## Common mistake

**Not saying what the letter means.** "$x = 13$" is not an answer to "how old is each?". Write "Let $k$ be Kim's age
in years" at the start, and finish with a sentence: "Kim is 13 and Jo is 18."

**Writing $n + 1$ for the next even (or odd) number.** Even numbers go up in twos: $e$, $e + 2$, $e + 4$. The same
is true of odd numbers.

## Where it leads

- Previous: [Solving one- and two-step equations](04-solving-equations.md) · Next:
  [Inequalities on the number line](06-inequalities-number-line.md)
- [Level 4 page](index.md) · [Algebra topic page](../index.md)
- Modelling with equations goes much further in [level 5](../level-5/index.md), with problems where the letter ends up
  on both sides (like "in 12 years Mum will be twice as old as her son").
- "A total of three consecutive numbers is always a multiple of 3" is a fact about divisibility: see
  [Number theory](../../number-theory/index.md). Guess-and-check tables are in
  [Level 3: guess and check](../level-3/03-guess-and-check.md).
