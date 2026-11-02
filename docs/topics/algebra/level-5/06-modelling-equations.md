---
title: "Modelling with equations"
---

# Modelling with equations

*Algebra · level 5, lesson 6 of 6*

## A question to start

A bat and a ball cost 1.10 dollars together. The bat costs 1 dollar more than the ball. How much does the ball cost?

Most people answer "10 cents" straight away. It feels obvious. But check it: if the ball is 10 cents, the bat is 1
dollar more, which is 1.10 dollars, and together they cost 1.20 dollars, not 1.10. The quick answer is wrong.

This puzzle is famous because our first guess is so convincing. Algebra is the cure: name the unknown, write down
exactly what the story says, and let the equation do the thinking. This lesson is about that skill, called
**modelling**, and about the step most people skip: checking that the answer makes sense in the story. (The ball
costs 5 cents; see worked example 1.)

## The idea

### What a model is

A **mathematical model** is a description of a real situation in mathematical language: here, an equation. The
model leaves out details that do not matter (the colour of the bat) and keeps the quantities and how they are linked.
You solve the model with algebra, then translate the answer back into the story.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 190" role="img" aria-label="The modelling cycle: from the story write an equation, solve it, interpret the answer back in the story, and check it, then return to the story if it does not make sense">
  <rect x="20" y="20" width="150" height="44" rx="8" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="250" y="20" width="150" height="44" rx="8" fill="#eea66f" stroke="currentColor"/>
  <rect x="250" y="126" width="150" height="44" rx="8" fill="#eea66f" stroke="currentColor"/>
  <rect x="20" y="126" width="150" height="44" rx="8" fill="#7ccf9a" stroke="currentColor"/>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="95" y="47">1. the story</text><text x="325" y="47">2. the equation</text>
    <text x="325" y="153">3. the solution</text><text x="95" y="153">4. check in the story</text>
    <text x="210" y="36" font-size="11">define, translate</text><text x="345" y="98" font-size="11">solve</text>
    <text x="210" y="190" font-size="11">interpret</text><text x="75" y="98" font-size="11">makes sense?</text>
  </g>
  <g stroke="currentColor" stroke-width="2" fill="none">
    <line x1="172" y1="42" x2="244" y2="42"/><polyline points="238,37 246,42 238,47"/>
    <line x1="325" y1="66" x2="325" y2="120"/><polyline points="320,114 325,122 330,114"/>
    <line x1="248" y1="148" x2="176" y2="148"/><polyline points="182,143 174,148 182,153"/>
    <line x1="95" y1="124" x2="95" y2="70"/><polyline points="90,76 95,68 100,76"/>
  </g>
</svg>
</div>

The arrow from step 4 back to step 1 matters. If the answer does not fit the story, either the equation was wrong or
the story itself has a problem, and you go round again.

### Step 1: define the variable

Before writing any equation, write a sentence saying what your letter stands for, **with units**:

> Let $b$ be the cost of the ball, in dollars.

This sounds fussy, but it prevents the most common modelling error: mixing up which quantity is which. Pick the
quantity the question asks for, or the smallest one, and write everything else in terms of it. In the puzzle, the bat
is then $b + 1$ dollars.

### Step 2: translate, phrase by phrase

Turn each sentence of the story into symbols. Some phrases need care:

| Words | Symbols | Note |
| --- | --- | --- |
| 5 more than $x$ | $x + 5$ | |
| 5 less than $x$ | $x - 5$ | not $5 - x$: you start with $x$ and take 5 away |
| twice $x$, double $x$ | $2x$ | |
| $x$ is 3 times $y$ | $x = 3y$ | the bigger one gets no factor of 3 |
| the sum of $x$ and $y$ | $x + y$ | |
| consecutive numbers | $n$, $n + 1$, $n + 2$ | consecutive even or odd numbers go up by 2 |
| in 6 years' time | add 6 to **each** age | |

The word "is" or "equals" or "costs" usually becomes the equals sign. Find the one fact in the story that you have
not used yet to name things: that fact is your equation.

### Step 3: organise with a table

When the story has several quantities, such as speeds, times and distances, a small table keeps them straight. Each
row is one object; each column is one quantity; one column is found by multiplying the others (distance = speed × time,
total cost = price × number). Worked examples 3 and 4 use one.

### Step 4: solve, then interpret

Solve with the methods of this level. Then answer the **question that was asked**, in a sentence, with units. If you
found $x$ but the question asks for the bat, the ages, or how many buses, you are not finished.

### Step 5: check that it makes sense

Two checks, both important:

- **Check in the story, not in your equation.** If the equation was wrong, the answer will satisfy the wrong equation
  perfectly. Read the original words and test each fact.
- **Check the answer is reasonable.** Real quantities have limits. Numbers of people, tickets or buses must be whole
  numbers and cannot be negative. Lengths are positive. A person's age is not 140. If the answer breaks a rule like
  this, something is wrong: a slip in the algebra, a wrong equation, or a story whose numbers cannot happen.

Sometimes a fractional answer needs **rounding**, and the story tells you which way. If 230 students need buses that
hold 48, you get $230 \div 48 \approx 4.8$, but you cannot hire 0.8 of a bus, and 4 buses leave students behind. You
need **5**. Rounding the usual way would give the wrong answer here.

### Models have assumptions

Every model assumes things. A speed problem usually assumes the speed is **constant**; a ticket problem assumes every
ticket sold was paid for. When the real world breaks the assumption, the model's answer is only approximate. It is
good practice to say what you assumed.

## Worked examples

**1. The bat and the ball.**

- Let $b$ be the cost of the ball in dollars. The bat costs 1 dollar more: $b + 1$.
- Together: $b + (b + 1) = 1.10$, so $2b + 1 = 1.10$, $2b = 0.10$, $b = 0.05$.
- The ball costs **5 cents** and the bat 1.05 dollars.
- Check in the story: together $0.05 + 1.05 = 1.10$ ✓; the bat costs $1.05 - 0.05 = 1$ dollar more ✓.

**2. Ages.** Maya is 4 times as old as her brother. In 6 years she will be twice as old as him. How old are they now?

- Let $b$ be the brother's age now, in years. Then Maya is $4b$.
- In 6 years: brother $b + 6$, Maya $4b + 6$. The story says $4b + 6 = 2(b + 6)$.
- Expand: $4b + 6 = 2b + 12$. Subtract $2b$ and 6: $2b = 6$, so $b = 3$.
- The brother is **3** and Maya is **12**. Check: in 6 years they are 9 and 18, and 18 is twice 9 ✓.

**3. Catching up.** Suppose a rover leaves a base and drives at a steady 100 metres per hour. Two hours later a
second rover follows the same track at 150 metres per hour. When does the second one catch up?

| | Speed (m/h) | Time (h) | Distance (m) |
| --- | --- | --- | --- |
| first rover | 100 | $t$ | $100t$ |
| second rover | 150 | $t - 2$ | $150(t - 2)$ |

- Let $t$ be the time in hours since the first rover left. It catches up when the distances are equal:
  $100t = 150(t - 2)$.
- Expand: $100t = 150t - 300$. Subtract $100t$ and add 300: $300 = 50t$, so $t = 6$.
- The second rover catches up **6 hours after the first one left** (4 hours after it set off itself), 600 m from
  the base. Check: $100 \times 6 = 600$ and $150 \times 4 = 600$ ✓. (Real Mars rovers really are this slow: they
  drive carefully over rough ground, often well under a kilometre in a sol.)

**4. Tickets.** A school sold 200 tickets for a play. Adult tickets cost 12 dollars and student tickets 5 dollars,
and the total was 1560 dollars. How many of each were sold?

| | Price (dollars) | Number | Money (dollars) |
| --- | --- | --- | --- |
| adult | 12 | $a$ | $12a$ |
| student | 5 | $200 - a$ | $5(200 - a)$ |

- Let $a$ be the number of adult tickets. Then $12a + 5(200 - a) = 1560$.
- Expand: $12a + 1000 - 5a = 1560$, so $7a = 560$ and $a = 80$.
- **80 adult and 120 student tickets.** Check: $960 + 600 = 1560$ ✓, and $80 + 120 = 200$ ✓.

**5. An answer that does not make sense.** A group pays 7 dollars per person plus a 10 dollar booking fee, 60 dollars
in all. How many people are in the group?

- Let $n$ be the number of people. Then $7n + 10 = 60$, so $7n = 50$ and $n = \tfrac{50}{7} \approx 7.14$.
- A group cannot have 7.14 people. The algebra is right, so the **story's numbers are impossible**: with 7 people the
  bill would be 59 dollars, with 8 people 66 dollars. Someone has made a mistake with the bill. Saying so is the
  correct answer.

## Try it

1. Three consecutive whole numbers add up to 141. What are they?
2. A rectangle is 5 cm longer than it is wide, and its perimeter is 58 cm. Find its length and width.
3. A father is 3 times as old as his son. In 12 years he will be twice as old as his son. How old is each now?
4. A concert sold 150 tickets: adults pay 10 dollars and children 6 dollars. The total was 1180 dollars. How many
   adults and how many children went?
5. 230 students are going on a trip, and each bus holds 48. How many buses are needed?
6. Two cyclists start 60 km apart and ride towards each other, one at 18 km/h and one at 12 km/h. After how long do
   they meet?
7. Twice a number plus 7 is 4 less than five times the number. Find the number. If the question had said "a whole
   number", what would the answer be?
8. A jacket in a sale costs 36 dollars after 20 percent is taken off. What was the price before the sale?

??? note "Answers"
    1. Let the numbers be $n$, $n + 1$, $n + 2$. Then $3n + 3 = 141$, so $3n = 138$ and $n = 46$. The numbers are
       46, 47, 48. Check: $46 + 47 + 48 = 141$ ✓.
    2. Let $w$ be the width in cm; the length is $w + 5$. Perimeter: $2w + 2(w + 5) = 58$, so $4w + 10 = 58$,
       $4w = 48$, $w = 12$. Width 12 cm, length 17 cm. Check: $2 \times 12 + 2 \times 17 = 24 + 34 = 58$ ✓.
    3. Let $s$ be the son's age; the father is $3s$. In 12 years: $3s + 12 = 2(s + 12) = 2s + 24$, so $s = 12$. The
       son is 12 and the father 36. Check: in 12 years they are 24 and 48, and 48 is twice 24 ✓.
    4. Let $a$ be the number of adults; children $150 - a$. Then $10a + 6(150 - a) = 1180$, so $4a + 900 = 1180$,
       $4a = 280$, $a = 70$. **70 adults and 80 children.** Check: $700 + 480 = 1180$ ✓.
    5. Let $b$ be the number of buses: $48b \ge 230$, so $b \ge 4.79\ldots$. Buses are whole, so **5 buses**.
       (4 buses hold only 192 students.)
    6. Let $t$ be the time in hours. Together they close the gap by $18 + 12 = 30$ km every hour, so
       $18t + 12t = 60$, $30t = 60$, $t = 2$ hours. Check: $36 + 24 = 60$ km ✓.
    7. Let the number be $n$. "4 less than five times the number" is $5n - 4$. So $2n + 7 = 5n - 4$, which gives
       $11 = 3n$ and $n = \tfrac{11}{3}$. Check: $\tfrac{22}{3} + 7 = \tfrac{43}{3}$ and $\tfrac{55}{3} - 4 = \tfrac{43}{3}$ ✓.
       If the number had to be whole, there would be **no answer**, since $\tfrac{11}{3}$ is not whole.
    8. Let $p$ be the old price in dollars. Taking off 20 percent leaves 80 percent: $0.8p = 36$, so
       $p = 36 \div 0.8 = 45$ dollars. Check: 20 percent of 45 is 9, and $45 - 9 = 36$ ✓. (Not $36 + 20\%$ of 36,
       which gives 43.20.)

## Common mistake

**Not defining the variable, then answering the wrong question.** In the ages problem, a student who writes
"$x = 3$" and stops has not said whose age it is, and has not given Maya's age at all. Write "Let $b$ be the brother's
age now" at the start, and finish with a sentence that answers exactly what was asked.

**Translating "less than" backwards.** "5 less than a number" is $n - 5$, not $5 - n$. Test it with a number: 5 less
than 12 is 7, and $12 - 5 = 7$.

## Where it leads

- Previous: [Solving inequalities](05-solving-inequalities.md) · Next level:
  [Exponent laws with variables](../level-6/01-exponent-laws.md), the start of level 6.
- [Level 5 page](index.md) · [Algebra topic page](../index.md)
- The first story problems were in [Equations from stories](../level-4/05-equations-from-stories.md).
- Problems with **two** unknowns and two facts, like the tickets, are solved as systems in
  [Linear systems by substitution and elimination](../level-6/05-substitution-elimination.md).
- Percent problems like question 8: [Ratio](../../ratio/index.md). Fitting a model to real data:
  [Statistics](../../statistics/index.md).
