---
title: "Proportions"
---

# Proportions

*Ratio, rates and money · level 5, lesson 1 of 7*

## A question to start

A car uses 7 litres of fuel to drive 100 km. How much fuel does it need for a trip of 260 km?

Three friends solve it.

- **Amir** says: "100 km is 7 litres, so 200 km is 14 litres. 60 km is a bit more than half of 100, so... wait, I
  can do it exactly: 260 is 2.6 times 100, so the fuel is 2.6 times 7, which is **18.2 litres**."
- **Bea** says: "One kilometre uses $7 \div 100 = 0.07$ litres. So 260 km uses $260 \times 0.07 =$ **18.2 litres**."
- **Chen** writes $\dfrac{x}{260} = \dfrac{7}{100}$, then $100x = 7 \times 260 = 1820$, so $x =$ **18.2 litres**.

Three different methods, one answer. Is that luck? No. All three are the same idea seen from three sides. This lesson
is about that idea, called a **proportion**, and about **why** each method works, especially Chen's, which looks like
a magic trick until you see what is underneath.

## The idea

### What a proportion is

You already know that a **ratio** compares two amounts, like 7 litres for every 100 km, and that **equivalent
ratios** describe the same comparison: 7 : 100 and 14 : 200 and 18.2 : 260 all mean "7 litres for every 100 km"
(level 3).

A **proportion** is a statement that two ratios are equal. Written with fractions:

$$\frac{a}{b} = \frac{c}{d}$$

Read it as "$a$ is to $b$ as $c$ is to $d$". For example, $\dfrac{7}{100} = \dfrac{14}{200}$ is a true proportion,
and $\dfrac{3}{4} = \dfrac{5}{6}$ is a false one.

Most proportion problems give you **three** of the four numbers and ask for the fourth. The missing number is usually
called $x$. Before any method, there is one thing to check.

### First check: is it really a proportion?

A proportion only fits when the two amounts grow together at a fixed rate: double one and the other doubles, and zero
of one means zero of the other. Fuel and distance (at a steady speed) behave like that. Many things do not.

- A taxi charges 4 dollars to start plus 2 dollars per km. A 3 km ride costs 10 dollars. A 6 km ride does **not**
  cost 20 dollars: it costs $4 + 12 = 16$ dollars, because the 4 dollar start is paid only once.
- A 12-year-old is 150 cm tall. A 24-year-old is not 300 cm tall.

So always ask first: "If I doubled this, would that double too?" If yes, carry on. You will look at this question
much more closely in the [next lesson](02-direct-inverse.md).

### Method 1: scaling

Put the numbers in a **ratio table** or on a **double number line**, with the matching amounts lined up.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 110" role="img" aria-label="A double number line: litres on top at 0, 7, 14 and 18.2, kilometres underneath at 0, 100, 200 and 260, each pair lined up">
  <line x1="40" y1="35" x2="430" y2="35" stroke="currentColor" stroke-width="2"/>
  <line x1="40" y1="75" x2="430" y2="75" stroke="currentColor" stroke-width="2"/>
  <text x="20" y="39" font-size="12" text-anchor="middle" fill="currentColor">L</text>
  <text x="20" y="79" font-size="12" text-anchor="middle" fill="currentColor">km</text>
  <line x1="40" y1="28" x2="40" y2="82" stroke="currentColor" stroke-width="1.5"/>
  <line x1="180" y1="28" x2="180" y2="82" stroke="#9cc9ea" stroke-width="3"/>
  <line x1="320" y1="28" x2="320" y2="82" stroke="#9cc9ea" stroke-width="3"/>
  <line x1="404" y1="28" x2="404" y2="82" stroke="#eea66f" stroke-width="3"/>
  <text x="40" y="20" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <text x="180" y="20" font-size="12" text-anchor="middle" fill="currentColor">7</text>
  <text x="320" y="20" font-size="12" text-anchor="middle" fill="currentColor">14</text>
  <text x="404" y="20" font-size="12" text-anchor="middle" fill="currentColor">18.2 ?</text>
  <text x="40" y="98" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <text x="180" y="98" font-size="12" text-anchor="middle" fill="currentColor">100</text>
  <text x="320" y="98" font-size="12" text-anchor="middle" fill="currentColor">200</text>
  <text x="404" y="98" font-size="12" text-anchor="middle" fill="currentColor">260</text>
</svg>
</div>

Then find the number that takes you from the known row to the new row. Here 100 km becomes 260 km by multiplying by
2.6, so the litres must also be multiplied by 2.6: $7 \times 2.6 = 18.2$. This number, 2.6, is called the **scale
factor** (the "between" multiplier, because it goes between the two situations).

Scaling is fastest when the scale factor is a nice number: 3 notebooks to 12 notebooks is $\times 4$, so the price is
$\times 4$ too. It gets clumsy when the scale factor is ugly, like going from 7 to 11.

### Method 2: the unit rate

Find how much goes with **one** unit, then multiply. This is also called the **unitary method**. Bea found
0.07 litres for 1 km. That number does not change for the whole trip; it is the **unit rate** (level 3), the "within"
multiplier, because it turns km into litres inside one situation:

$$\text{litres} = 0.07 \times \text{km}.$$

The unit rate is the most powerful of the three methods because, once you have it, every question about the same
situation is one multiplication. 50 km? $0.07 \times 50 = 3.5$ litres. 1000 km? 70 litres.

### Method 3: cross multiplying, and why it works

Chen's method uses a rule:

$$\frac{a}{b} = \frac{c}{d} \quad \text{exactly when} \quad a \times d = b \times c.$$

The products $a \times d$ and $b \times c$ are called the **cross products**, because if you draw lines joining the
numbers you multiply, they make a cross. The numbers $b$ and $d$ must not be zero (you can never divide by zero).

**Why it works (reason 1: same denominator).** To compare two fractions, give them the same denominator. Multiply the
top and bottom of $\dfrac{a}{b}$ by $d$, and the top and bottom of $\dfrac{c}{d}$ by $b$:

$$\frac{a}{b} = \frac{a \times d}{b \times d}, \qquad \frac{c}{d} = \frac{b \times c}{b \times d}.$$

Now both fractions have the same bottom, $b \times d$. Two fractions with the same bottom are equal exactly when their
tops are equal. So the fractions are equal exactly when $a \times d = b \times c$. That is the whole trick: cross
multiplying is just "put both fractions over the same denominator and compare the tops", with the bottoms left out.

**Why it works (reason 2: balancing).** Start from $\dfrac{a}{b} = \dfrac{c}{d}$. An equation stays true if you do the
same thing to both sides. Multiply both sides by $b$, then by $d$:

$$\frac{a}{b} \times b \times d = \frac{c}{d} \times b \times d \quad\Longrightarrow\quad a \times d = c \times b.$$

On the left the $b$'s cancel; on the right the $d$'s cancel. Same answer, from algebra instead of fractions.

A quick check with numbers: $\dfrac{7}{100} = \dfrac{14}{200}$, and $7 \times 200 = 1400 = 100 \times 14$. ✓ And
$\dfrac{3}{4} \ne \dfrac{5}{6}$, because $3 \times 6 = 18$ but $4 \times 5 = 20$.

### Setting up the proportion

The biggest danger is putting the numbers in the wrong places. A safe habit: write the **units** next to the numbers
and keep the same unit in the same place on both sides.

$$\frac{\text{litres}}{\text{km}}: \qquad \frac{x}{260} = \frac{7}{100}$$

Litres on top on both sides, km underneath on both sides. You could also write $\dfrac{x}{7} = \dfrac{260}{100}$
(trip compared with trip), which is just as correct, because it says the scale factor is the same for litres and km.
What you must **not** write is $\dfrac{x}{260} = \dfrac{100}{7}$, which mixes litres-per-km with km-per-litre.

### Which method when?

| Situation | Good method |
| --- | --- |
| The scale factor is a whole number or a simple fraction | Scaling |
| You will answer several questions about the same rate | Unit rate |
| The numbers are awkward, or the unknown is in a strange place | Cross multiplying |

All three give the same answer, so one method can check another.

## Worked examples

**1. Notebooks, three ways.** 5 notebooks cost 8 dollars. How much do 12 cost?

- Unit rate: one notebook costs $8 \div 5 = 1.60$ dollars, so 12 cost $12 \times 1.60 =$ **19.20 dollars**.
- Scaling: 5 to 12 is $\times 2.4$, and $8 \times 2.4 = 19.2$.
- Cross multiplying: $\dfrac{x}{12} = \dfrac{8}{5}$ (dollars over notebooks), so $5x = 96$ and $x = 19.2$.

**2. A bare proportion.** Solve $\dfrac{x}{12} = \dfrac{5}{8}$.

- Cross products: $8 \times x = 12 \times 5$, so $8x = 60$.
- Divide both sides by 8: $x = 7.5$.
- Check: $7.5 \div 12 = 0.625$ and $5 \div 8 = 0.625$. ✓

**3. The unknown on the bottom.** A printer prints 45 pages in 3 minutes. How long does it take to print 120 pages?

- Minutes over pages: $\dfrac{x}{120} = \dfrac{3}{45}$.
- Cross multiply: $45x = 360$, so $x = 8$ minutes.
- Unit rate check: 15 pages per minute, and $120 \div 15 = 8$. ✓

**4. Is it a proportion?** Two orange drinks: one is 4 cups of juice to 10 cups of water, the other is 6 cups of juice
to 15 cups of water. Do they taste the same?

- They taste the same if $\dfrac{4}{10} = \dfrac{6}{15}$.
- Cross products: $4 \times 15 = 60$ and $10 \times 6 = 60$. Equal, so **yes**. (Both simplify to $\dfrac{2}{5}$.)

**5. An unknown on both sides.** Solve $\dfrac{x}{x + 4} = \dfrac{3}{5}$.

- Cross multiply: $5x = 3(x + 4) = 3x + 12$.
- Subtract $3x$: $2x = 12$, so $x = 6$.
- Check: $\dfrac{6}{10} = \dfrac{3}{5}$. ✓ (Brackets matter here: the whole of $x + 4$ is multiplied by 3.)

## Try it

1. Solve $\dfrac{x}{9} = \dfrac{4}{6}$.
2. Solve $\dfrac{3}{x} = \dfrac{12}{20}$.
3. A recipe for 6 muffins needs 150 g of sugar. How much sugar for 15 muffins? Solve it two different ways.
4. Is $\dfrac{4}{10} = \dfrac{6}{15}$ a true proportion? Is $\dfrac{5}{8} = \dfrac{7}{11}$?
5. A 4-litre can of paint covers 36 square metres. Paint is sold in 1-litre cans. How many cans do you need for a
   wall of 50 square metres?
6. A taxi charges 4 dollars plus 2 dollars per km. Sam says: "3 km costs 10 dollars, so 6 km costs 20 dollars." Is he
   right? Explain.
7. Solve $\dfrac{x + 2}{5} = \dfrac{6}{10}$.
8. Explain, without cross multiplying, why $\dfrac{a}{b} = \dfrac{c}{d}$ also means $\dfrac{a}{c} = \dfrac{b}{d}$.
   (Hint: what do the cross products of the second one say?)

??? note "Answers"
    1. Cross products: $6x = 36$, so $x = 6$. Check: $\dfrac{6}{9} = \dfrac{2}{3} = \dfrac{4}{6}$. ✓
    2. Cross products: $12x = 60$, so $x = 5$. Check: $\dfrac{3}{5} = 0.6$ and $\dfrac{12}{20} = 0.6$. ✓
    3. Unit rate: $150 \div 6 = 25$ g per muffin, so $15 \times 25 = 375$ g. Scaling: 6 to 15 is $\times 2.5$, and
       $150 \times 2.5 = 375$ g. Same answer.
    4. First: $4 \times 15 = 60$ and $10 \times 6 = 60$, so yes. Second: $5 \times 11 = 55$ and $8 \times 7 = 56$,
       so no (very close, but not equal).
    5. Litres over square metres: $\dfrac{x}{50} = \dfrac{4}{36}$, so $36x = 200$ and $x = 5.55...$ litres. You
       cannot buy part of a can, so you need **6 cans** (5 would leave part of the wall bare).
    6. No. 6 km costs $4 + 2 \times 6 = 16$ dollars. The 4 dollar start is paid once, so the cost is not
       proportional to the distance: doubling the distance does not double the cost.
    7. Cross products: $10(x + 2) = 30$, so $x + 2 = 3$ and $x = 1$. Check: $\dfrac{3}{5} = \dfrac{6}{10}$. ✓
    8. The cross products of $\dfrac{a}{c} = \dfrac{b}{d}$ are $a \times d$ and $c \times b$. Those are the same two
       products as for $\dfrac{a}{b} = \dfrac{c}{d}$. So one proportion is true exactly when the other is. (In words:
       if the litres-per-km match, then the trip-to-trip scale factors match too.)

## Common mistake

**Scaling something that is not proportional.** Before you set up a proportion, check that doubling one amount
doubles the other and that zero goes with zero. Fixed fees (the taxi), starting amounts and things like age and height
break the rule.

**Mixing the order.** $\dfrac{x}{260} = \dfrac{100}{7}$ puts litres-per-km on one side and km-per-litre on the
other. Write the units beside the numbers and make them match on both sides. A quick sense check also helps: 260 km
is more than 100 km, so the answer must be more than 7 litres, not less.

## Where it leads

- Back: [Level 4](../level-4/index.md), percent, which is a proportion with 100 on the bottom · Next:
  [Direct and inverse proportion](02-direct-inverse.md)
- [Level 5 page](index.md) · [Ratio, rates and money topic page](../index.md)
- The unit rates behind method 2: [Rates and unit rates](../level-3/04-rates-unit-rates.md).
- Solving equations with brackets and unknowns on both sides, as in worked example 5: [Algebra](../../algebra/index.md).
- Proportions in shapes (similar triangles, scale drawings and maps): [Geometry](../../geometry/index.md).
