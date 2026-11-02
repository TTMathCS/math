---
title: "Dividing fractions"
---

# Dividing fractions

*Numbers · level 4, lesson 3 of 7*

## A question to start

You have 3 pizzas, and each person at a party eats a quarter of a pizza. How many people can you feed?

Each pizza feeds 4 people, so 3 pizzas feed $3 \times 4 = 12$. That question was $3 \div \tfrac14$, and the answer
was 12: **dividing by a quarter gave the same answer as multiplying by 4**. Coincidence? No. This lesson shows why
it always happens, and turns it into the famous rule "to divide by a fraction, multiply by its reciprocal", with two
different reasons why the rule is true. A rule you can explain is a rule you will never get backwards.

## The idea

### What dividing asks

$12 \div 3$ asks two questions that have the same answer:

- **Sharing**: 12 shared into 3 equal groups; how much in each? (4)
- **Measuring**: how many 3s fit into 12? (4)

For dividing **by a fraction**, the measuring question is the one that makes sense. $3 \div \tfrac14$ asks: **how
many quarters fit into 3?**

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 85" role="img" aria-label="A number line from 0 to 3 with 12 hops, each one quarter long">
  <line x1="25" y1="50" x2="395" y2="50" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="1.5"><line x1="30" y1="40" x2="30" y2="60"/><line x1="60" y1="44" x2="60" y2="56"/><line x1="90" y1="44" x2="90" y2="56"/><line x1="120" y1="44" x2="120" y2="56"/><line x1="150" y1="40" x2="150" y2="60"/><line x1="180" y1="44" x2="180" y2="56"/><line x1="210" y1="44" x2="210" y2="56"/><line x1="240" y1="44" x2="240" y2="56"/><line x1="270" y1="40" x2="270" y2="60"/><line x1="300" y1="44" x2="300" y2="56"/><line x1="330" y1="44" x2="330" y2="56"/><line x1="360" y1="44" x2="360" y2="56"/><line x1="390" y1="40" x2="390" y2="60"/></g>
  <g fill="none" stroke="#eea66f" stroke-width="2"><path d="M 30 50 Q 45 28 60 50"/><path d="M 60 50 Q 75 28 90 50"/><path d="M 90 50 Q 105 28 120 50"/><path d="M 120 50 Q 135 28 150 50"/><path d="M 150 50 Q 165 28 180 50"/><path d="M 180 50 Q 195 28 210 50"/><path d="M 210 50 Q 225 28 240 50"/><path d="M 240 50 Q 255 28 270 50"/><path d="M 270 50 Q 285 28 300 50"/><path d="M 300 50 Q 315 28 330 50"/><path d="M 330 50 Q 345 28 360 50"/><path d="M 360 50 Q 375 28 390 50"/></g>
  <g font-size="13" text-anchor="middle" fill="currentColor">
    <text x="30" y="78">0</text><text x="150" y="78">1</text><text x="270" y="78">2</text><text x="390" y="78">3</text>
    <text x="210" y="18">12 hops of 1/4 fit into 3</text>
  </g>
</svg>
</div>

Each whole holds 4 quarters, so 3 wholes hold 12. Dividing by $\tfrac14$ is multiplying by 4.

Notice something new: **dividing by a number smaller than 1 makes the answer bigger**. That is the twin of the last
lesson's surprise. Small things fit into a big thing many times.

### Same denominators: just divide the counts

How many eighths fit into $\tfrac34$? Change $\tfrac34$ into eighths: $\tfrac68$. Now the question is "how many
1-eighths fit into 6-eighths?", and the answer is plainly **6**.

$$\frac34 \div \frac18 = \frac68 \div \frac18 = 6 \div 1 = 6$$

This works for any pair. Once two fractions have the **same denominator**, they are counts of the same unit, and
dividing them is just dividing the counts. It is like asking "how many 3-metre poles fit in 12 metres?": the
"metres" do not matter, only $12 \div 3$ does.

What if the counts do not divide evenly? $\tfrac72 \div \tfrac34$. In quarters: $\tfrac{14}{4} \div \tfrac34$. How
many 3-quarters fit into 14-quarters? $14 \div 3 = \tfrac{14}{3} = 4\tfrac23$. Four whole times, and two thirds of
another time.

### The reciprocal

Two numbers whose product is 1 are **reciprocals** of each other. You find the reciprocal of a fraction by turning it
upside down:

- the reciprocal of $\tfrac34$ is $\tfrac43$, because $\tfrac34 \times \tfrac43 = \tfrac{12}{12} = 1$;
- the reciprocal of $\tfrac14$ is $\tfrac41 = 4$;
- the reciprocal of 5 (which is $\tfrac51$) is $\tfrac15$.

Zero has no reciprocal: nothing times 0 makes 1.

### The rule, and why it works

**To divide by a fraction, multiply by its reciprocal.**

$$\frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \times \frac{d}{c}$$

So $\tfrac72 \div \tfrac34 = \tfrac72 \times \tfrac43 = \tfrac{28}{6} = \tfrac{14}{3}$, the same answer as before.
Here are two reasons this is always true.

**Reason 1: common denominators.** Give both fractions the denominator $b \times d$:

$$\frac{a}{b} \div \frac{c}{d} = \frac{a \times d}{b \times d} \div \frac{c \times b}{d \times b}$$

Now they are counts of the same unit, so divide the counts: the answer is $\dfrac{a \times d}{c \times b}$. And that
is exactly $\dfrac{a}{b} \times \dfrac{d}{c}$. The rule is just the common-denominator method, done in one step.

**Reason 2: division undoes multiplication.** $12 \div 3 = 4$ because $4 \times 3 = 12$. In the same way,
$\tfrac{a}{b} \div \tfrac{c}{d}$ is the number that, multiplied by $\tfrac{c}{d}$, gives back $\tfrac{a}{b}$. Let us
test the number $\tfrac{a}{b} \times \tfrac{d}{c}$:

$$\left(\frac{a}{b} \times \frac{d}{c}\right) \times \frac{c}{d} = \frac{a}{b} \times \left(\frac{d}{c} \times \frac{c}{d}\right) = \frac{a}{b} \times 1 = \frac{a}{b}$$

It gives back $\tfrac{a}{b}$, so it is the answer. The reciprocal is exactly the thing that **cancels out** the
$\tfrac{c}{d}$.

A third way to see it, without letters: dividing by $\tfrac14$ asks how many quarters fit, and every whole holds 4
of them, so multiply by 4. Dividing by $\tfrac34$: each whole holds 4 quarters, and every 3 quarters make one
$\tfrac34$, so each whole holds $\tfrac43$ of a "three-quarters". Multiply by $\tfrac43$.

### Mixed numbers and whole numbers

Change mixed numbers to improper fractions, and write whole numbers over 1:

$$3\tfrac34 \div \frac58 = \frac{15}{4} \times \frac85 = \frac{120}{20} = 6$$

Dividing a fraction by a whole number: $\tfrac43 \div 2 = \tfrac43 \times \tfrac12 = \tfrac46 = \tfrac23$. That is
just "half of $\tfrac43$", as it should be.

### What does a fraction left over mean?

A recipe uses $\tfrac34$ cup of rice per serving. You have $2\tfrac12$ cups. How many servings?

$$2\tfrac12 \div \frac34 = \frac52 \times \frac43 = \frac{10}{3} = 3\tfrac13$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 90" role="img" aria-label="A number line from 0 to 3 in quarters. Three hops of three quarters reach two and a quarter; the last quarter up to two and a half is one third of another hop">
  <line x1="25" y1="50" x2="395" y2="50" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="1.5"><line x1="30" y1="40" x2="30" y2="60"/><line x1="60" y1="44" x2="60" y2="56"/><line x1="90" y1="44" x2="90" y2="56"/><line x1="120" y1="44" x2="120" y2="56"/><line x1="150" y1="40" x2="150" y2="60"/><line x1="180" y1="44" x2="180" y2="56"/><line x1="210" y1="44" x2="210" y2="56"/><line x1="240" y1="44" x2="240" y2="56"/><line x1="270" y1="40" x2="270" y2="60"/><line x1="300" y1="44" x2="300" y2="56"/><line x1="330" y1="44" x2="330" y2="56"/><line x1="360" y1="44" x2="360" y2="56"/><line x1="390" y1="40" x2="390" y2="60"/></g>
  <rect x="30" y="46" width="300" height="8" fill="#9cc9ea" opacity="0.6"/>
  <g fill="none" stroke="#eea66f" stroke-width="2"><path d="M 30 50 Q 75 14 120 50"/><path d="M 120 50 Q 165 14 210 50"/><path d="M 210 50 Q 255 14 300 50"/></g>
  <path d="M 300 50 Q 345 14 390 50" fill="none" stroke="#7ccf9a" stroke-width="2" stroke-dasharray="4 3"/>
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <text x="30" y="78">0</text><text x="150" y="78">1</text><text x="270" y="78">2</text><text x="330" y="78">2 1/2</text><text x="390" y="78">3</text>
    <text x="75" y="24">1</text><text x="165" y="24">2</text><text x="255" y="24">3</text><text x="345" y="18">1/3 of a hop</text>
  </g>
</svg>
</div>

Three full servings use $3 \times \tfrac34 = 2\tfrac14$ cups. The $\tfrac14$ cup left over is **a third of a
serving**, not "a third of a cup". The fraction in the answer counts **servings**, the thing we divided by.

## Worked examples

**1. How many fit?** $5 \div \tfrac13$. Each whole holds 3 thirds; 5 wholes hold **15**.
($5 \times 3 = 15$.)

**2. Common denominators.** $\tfrac56 \div \tfrac23$. In sixths:
$\tfrac56 \div \tfrac46 = 5 \div 4 = \tfrac54 = 1\tfrac14$. With the rule: $\tfrac56 \times \tfrac32 = \tfrac{15}{12} = \tfrac54$. ✓

**3. The rule with cancelling.** $\tfrac{15}{4} \div \tfrac58 = \tfrac{15}{4} \times \tfrac85$. Cancel 5 (15 and 5)
and 4 (4 and 8): $\tfrac31 \times \tfrac21 = 6$.

**4. Check by multiplying.** Is $\tfrac{9}{10} \div \tfrac35 = \tfrac32$? Check:
$\tfrac32 \times \tfrac35 = \tfrac{9}{10}$. ✓

**5. A story.** A ribbon is 6 m long. How many pieces of $\tfrac34$ m can you cut?
$6 \div \tfrac34 = 6 \times \tfrac43 = 8$ pieces, none left over.

**6. Bigger or smaller?** Without calculating, is $\tfrac25 \div \tfrac37$ more or less than $\tfrac25$? Dividing
by a number less than 1 makes it bigger, so **more**. Exactly: $\tfrac25 \times \tfrac73 = \tfrac{14}{15}$, which is
indeed more than $\tfrac25 = \tfrac{6}{15}$.

## Try it

1. Write the reciprocal of: (a) $\tfrac27$ (b) 9 (c) $1\tfrac12$.
2. How many sixths are in 4? Write it as a division and answer it.
3. $\tfrac78 \div \tfrac18$ and $\tfrac{9}{10} \div \tfrac{3}{10}$ (no rule needed).
4. $\tfrac23 \div \tfrac49$ by the rule. Check your answer by multiplying.
5. $4\tfrac12 \div 1\tfrac12$.
6. You have $3\tfrac13$ litres of juice and glasses that hold $\tfrac14$ litre. How many full glasses can you pour,
   and what fraction of a glass is left?
7. Which is bigger, $10 \div \tfrac12$ or $10 \times \tfrac12$? Explain without calculating, then calculate.
8. Harder: explain with Reason 1 why $\tfrac{a}{b} \div \tfrac{a}{b} = 1$ for any fraction that is not zero, and then
   show it with the rule.

??? note "Answers"
    1. (a) $\tfrac72$ (b) $\tfrac19$ (c) $1\tfrac12 = \tfrac32$, so its reciprocal is $\tfrac23$.
    2. $4 \div \tfrac16 = 4 \times 6 = 24$ sixths.
    3. 7 eighths ÷ 1 eighth = **7**. 9 tenths ÷ 3 tenths = **3**.
    4. $\tfrac23 \times \tfrac94 = \tfrac{18}{12} = \tfrac32$. Check:
       $\tfrac32 \times \tfrac49 = \tfrac{12}{18} = \tfrac23$. ✓
    5. $\tfrac92 \div \tfrac32$: both are halves, so $9 \div 3 = 3$. (Rule: $\tfrac92 \times \tfrac23 = \tfrac{18}{6} = 3$.)
    6. $3\tfrac13 \div \tfrac14 = \tfrac{10}{3} \times 4 = \tfrac{40}{3} = 13\tfrac13$. **13 full glasses**, and a
       third of a glass left over (which is $\tfrac13 \times \tfrac14 = \tfrac{1}{12}$ litre).
    7. $10 \div \tfrac12$ asks how many halves fit in 10: 20. $10 \times \tfrac12$ is half of 10: 5. So
       $10 \div \tfrac12$ is bigger (dividing by a number less than 1 makes bigger; multiplying by it makes smaller).
    8. Reason 1: both fractions already have the same denominator, so divide the counts: $a \div a = 1$ (as long as
       $a$ is not 0). With the rule: $\tfrac{a}{b} \times \tfrac{b}{a} = \tfrac{ab}{ba} = 1$.

## Common mistake

**Flipping the wrong fraction.** In $\tfrac23 \div \tfrac49$ you flip the **second** fraction (the one you divide
by), not the first. Flipping the first gives $\tfrac32 \times \tfrac49 = \tfrac23$, which is wrong. Check by
multiplying back: the answer times $\tfrac49$ must give $\tfrac23$.

**Misreading the leftover.** In $2\tfrac12 \div \tfrac34 = 3\tfrac13$, the $\tfrac13$ means a third of a **serving**
($\tfrac34$ cup), not a third of a cup. The fraction in a division answer is always measured in the thing you divided
by.

## Where it leads

- Previous: [Multiplying fractions](02-multiplying-fractions.md) · Next: [Calculating with
  decimals](04-decimal-operations.md).
- [Level 4 page](index.md) · [Numbers topic page](../index.md)
- Dividing to find a rate, like kilometres per hour or price per gram: [Ratio](../../ratio/index.md).
- In [Algebra](../../algebra/index.md), "dividing by $\tfrac{c}{d}$" becomes "multiplying both sides by
  $\tfrac{d}{c}$", the move that solves $\tfrac34 x = 6$.
