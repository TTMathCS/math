---
title: "Geometric sequences"
---

# Geometric sequences

*Patterns and sequences · level 6, lesson 1 of 6*

## A question to start

Two sequences start with the same two numbers:

$$3,\ 6,\ 9,\ 12,\ \ldots \qquad\qquad 3,\ 6,\ 12,\ 24,\ \ldots$$

The first adds 3 each time. The second doubles each time. After two terms they are level. How far apart are they at
the 20th term? Make a guess before you read on: twice as big? Ten times?

The first sequence reaches $3 \times 20 = 60$. The second reaches **1 572 864**. More than twenty-six thousand times
as big. This lesson explains the second kind of sequence, where you multiply instead of add.

## The idea

### Multiplying by the same number each time

> A **geometric sequence** is a sequence where each term is the one before it **multiplied by the same number**.
> That number is called the **common ratio**, written $r$.

("Ratio" means a comparison by division: the ratio of 6 to 3 is $6 \div 3 = 2$. The name "geometric" goes back to
the ancient Greeks, who studied these sequences with lengths in geometry; it does not mean the terms are shapes.)

Some examples:

- 3, 6, 12, 24, 48, ... has $r = 2$: **doubling**.
- 5, 15, 45, 135, ... has $r = 3$.
- 96, 48, 24, 12, 6, ... has $r = \tfrac12$: **halving**. Multiplying by a number between 0 and 1 makes the terms
  shrink.
- 2, −6, 18, −54, 162, ... has $r = -3$: the signs **alternate** (flip back and forth), because multiplying by a
  negative number changes the sign every time.
- 7, 7, 7, 7, ... has $r = 1$. A constant sequence is geometric (and also arithmetic, with $d = 0$).

Here are doubling and halving side by side:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 175" role="img" aria-label="Two bar charts: on the left bars of 1, 2, 4, 8, 16 doubling each time; on the right bars of 16, 8, 4, 2, 1 halving each time">
  <rect x="20" y="133" width="18" height="7" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="29" y="129" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <rect x="44" y="126" width="18" height="14" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="53" y="122" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <rect x="68" y="112" width="18" height="28" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="77" y="108" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <rect x="92" y="84" width="18" height="56" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="101" y="80" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <rect x="116" y="28" width="18" height="112" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="125" y="24" font-size="11" text-anchor="middle" fill="currentColor">16</text>
  <line x1="15" y1="140" x2="139" y2="140" stroke="currentColor" stroke-width="1.5"/>
  <text x="77" y="162" font-size="12" text-anchor="middle" fill="currentColor">r = 2: doubling</text>
  <rect x="175" y="28" width="18" height="112" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="184" y="24" font-size="11" text-anchor="middle" fill="currentColor">16</text>
  <rect x="199" y="84" width="18" height="56" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="208" y="80" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <rect x="223" y="112" width="18" height="28" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="232" y="108" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <rect x="247" y="126" width="18" height="14" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="256" y="122" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <rect x="271" y="133" width="18" height="7" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="280" y="129" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <line x1="170" y1="140" x2="294" y2="140" stroke="currentColor" stroke-width="1.5"/>
  <text x="232" y="162" font-size="12" text-anchor="middle" fill="currentColor">r = 1/2: halving</text>
</svg>
</div>

Notice how different the two charts look from an arithmetic sequence. Equal **added** steps make bars that grow like
a straight staircase. Equal **multiplied** steps make bars that curve upwards more and more steeply (or sink towards
zero and never quite reach it).

### How to test a sequence

To decide whether a list is geometric, **divide each term by the one before it**. If every answer is the same, the
sequence is geometric and that answer is $r$.

| Sequence | Ratios | Geometric? |
| --- | --- | --- |
| 5, 15, 45, 135 | 3, 3, 3 | yes, $r = 3$ |
| 64, −32, 16, −8 | $-\tfrac12$, $-\tfrac12$, $-\tfrac12$ | yes, $r = -\tfrac12$ |
| 4, 8, 12, 16 | 2, 1.5, 1.33... | no (it is arithmetic) |
| 1, 4, 9, 16 | 4, 2.25, 1.78... | no |

Compare with the test for arithmetic sequences: there you **subtract** neighbours and look for a constant
**difference**; here you **divide** neighbours and look for a constant **ratio**.

For geometric sequences we always assume the first term and the ratio are not zero. (If $r = 0$, every term after the
first is 0, and you could not divide to find the ratios.) Then **no term is ever 0**: multiplying non-zero numbers
always gives a non-zero answer.

### The general term, and why it says n − 1

Call the first term $a$. Build the terms and count how many times $r$ has been multiplied in:

| Position $n$ | Term $t_n$ | Number of $r$'s multiplied in |
| --- | --- | --- |
| 1 | $a$ | 0 |
| 2 | $ar$ | 1 |
| 3 | $ar \times r = ar^2$ | 2 |
| 4 | $ar^3$ | 3 |
| 10 | $ar^9$ | 9 |
| $n$ | $ar^{n-1}$ | $n - 1$ |

So the **general term** of a geometric sequence is

$$t_n = ar^{n-1}$$

It is $n - 1$ for exactly the same reason as in arithmetic sequences: from position 1 to position $n$ there are
$n - 1$ steps, and each step multiplies by $r$ once. The small raised number is an **exponent**: $r^{n-1}$ means $n - 1$
copies of $r$ multiplied together. Check with $n = 1$: $ar^0 = a \times 1 = a$. ✓ (Any non-zero number to the power 0
is 1: it means "no multiplications at all", which leaves the number you started with unchanged.)

Be careful with the order of operations: $ar^{n-1}$ means $a \times (r^{n-1})$. Raise $r$ to the power first, then
multiply by $a$. It is **not** $(ar)^{n-1}$.

### Side by side with arithmetic

| | Arithmetic | Geometric |
| --- | --- | --- |
| each step | add $d$ | multiply by $r$ |
| test | differences equal | ratios equal |
| general term | $a + (n - 1)d$ | $ar^{n-1}$ |
| repeated step | $(n - 1)$ copies of $d$ **added** | $(n - 1)$ copies of $r$ **multiplied** |
| growth | steady (a straight line) | faster and faster, or shrinking to 0 |

Multiplication is repeated addition, and powers are repeated multiplication. So the geometric formula is the
arithmetic formula moved "one floor up".

### Negative ratios: which terms are negative?

With $r = -3$ and $a = 2$: $t_n = 2 \times (-3)^{n-1}$. A negative number raised to an **even** power is positive
(the minus signs pair up and cancel), and raised to an **odd** power is negative. So $t_1$, $t_3$, $t_5$, ... (powers
0, 2, 4, ...) are positive and $t_2$, $t_4$, ... are negative.

### Percent changes are geometric

"Increase by 5%" means "multiply by 1.05", because the new amount is the old amount plus 5 hundredths of it:
$1 + 0.05 = 1.05$. "Decrease by 20%" means "multiply by 0.8". So any amount that changes by the **same percentage**
each step forms a geometric sequence, even if the ratio is not a whole number. This is why prices with inflation,
savings with interest and populations that grow at a steady rate are all geometric.

<figure class="play" data-play="seq" data-kind="geom"><span class="ai-tag">AI-created</span><figcaption><b>Multiply each time.</b> Try r between 0 and 1, and a negative r.</figcaption></figure>

## Worked examples

**1. A doubling sequence.** Find $t_{10}$ for 3, 6, 12, 24, ...

$a = 3$, $r = 6 \div 3 = 2$, so $t_{10} = 3 \times 2^9 = 3 \times 512 = 1536$. Nine doublings, not ten.

**2. A halving sequence.** For 96, 48, 24, 12, ... write the general term and find $t_8$.

$a = 96$, $r = \tfrac12$, so $t_n = 96 \times \left(\tfrac12\right)^{n-1}$. Then
$t_8 = 96 \times \left(\tfrac12\right)^7 = \dfrac{96}{128} = 0.75$.

**3. Alternating signs.** For 2, −6, 18, −54, ... find $t_7$ and $t_8$.

$a = 2$, $r = -6 \div 2 = -3$. $t_7 = 2 \times (-3)^6 = 2 \times 729 = 1458$ (even power, positive).
$t_8 = 2 \times (-3)^7 = 2 \times (-2187) = -4374$ (odd power, negative).

**4. Growth by a percentage.** A town has 200 bikes for rent, and the number grows by 5% every year. Write the
number in year $n$ and find it in year 5.

The ratio is 1.05, so $t_n = 200 \times 1.05^{n-1}$ and $t_5 = 200 \times 1.05^4 = 243.10125$. About 243 bikes.

**5. Which term?** Which term of 3, 6, 12, 24, ... is 3072?

$3 \times 2^{n-1} = 3072$ gives $2^{n-1} = 1024 = 2^{10}$, so $n - 1 = 10$ and $n = 11$. It is the 11th term.

## Try it

1. Which of these are geometric? Give $r$ for each one that is.
   (a) 5, 15, 45, 135; (b) 4, 8, 12, 16; (c) 64, −32, 16, −8; (d) 7, 7, 7, 7.
2. Write the general term of 4, 12, 36, ... and find $t_6$.
3. Find $t_9$ for 1024, 512, 256, ...
4. For 1, −2, 4, −8, ... find $t_{11}$ and $t_{12}$.
5. For 81, 54, 36, ... find $r$, the next two terms, and $t_6$ as a fraction.
6. A bike costs 50 dollars and its price goes up 10% every year. What does it cost after 3 rises?
7. Which term of 5, 10, 20, 40, ... is 5120?
8. Can a geometric sequence (with $a$ and $r$ not zero) ever have a term equal to 0? Can its terms ever change from
   positive to negative and **stay** negative? Explain.

??? note "Answers"
    1. (a) Ratios all 3: geometric, $r = 3$. (b) Ratios 2, 1.5, 1.33...: not geometric (it is arithmetic with
       $d = 4$). (c) Ratios all $-\tfrac12$: geometric, $r = -\tfrac12$. (d) Ratios all 1: geometric, $r = 1$.
    2. $r = 3$: $t_n = 4 \times 3^{n-1}$, and $t_6 = 4 \times 3^5 = 4 \times 243 = 972$.
    3. $r = \tfrac12$: $t_9 = 1024 \times \left(\tfrac12\right)^8 = \dfrac{1024}{256} = 4$.
    4. $r = -2$: $t_{11} = (-2)^{10} = 1024$ and $t_{12} = (-2)^{11} = -2048$.
    5. $r = 54 \div 81 = \tfrac23$. Next terms $36 \times \tfrac23 = 24$ and $24 \times \tfrac23 = 16$. Then
       $t_6 = 16 \times \tfrac23 = \tfrac{32}{3}$. (By formula: $81 \times \left(\tfrac23\right)^5 = \dfrac{81 \times 32}{243} = \dfrac{32}{3}$.)
    6. Multiply by 1.1 three times: $50 \times 1.1^3 = 50 \times 1.331 = 66.55$ dollars.
    7. $5 \times 2^{n-1} = 5120$ gives $2^{n-1} = 1024 = 2^{10}$, so $n = 11$.
    8. No term is 0: each term is a product of non-zero numbers, and a product of non-zero numbers is never 0. The
       signs: if $r > 0$ every term has the same sign as $a$; if $r < 0$ the signs alternate forever. So the terms
       never switch sign once and stay switched.

## Common mistake

**Computing $(ar)^{n-1}$ instead of $a \times r^{n-1}$.** For $a = 3$, $r = 2$, $n = 4$ the right answer is
$3 \times 2^3 = 24$; the wrong one is $6^3 = 216$. Powers come before multiplication.

**Treating "add 10%" as "add 10".** A 10% rise on 50 dollars is 5 dollars, but on 60.50 dollars it is 6.05 dollars:
the amount added grows each time. That is why percentage change is geometric, not arithmetic.

## Where it leads

- Next: [Why geometric sequences get huge](02-why-they-get-huge.md).
- [Level 6 page](index.md) · [Patterns topic page](../index.md)
- The adding version of all of this: [Arithmetic sequences](../level-5/01-arithmetic-sequences.md) in level 5.
- Exponents and their laws: [Algebra level 6](../../algebra/level-6/01-exponent-laws.md).
- Percentages and multipliers: [Ratio](../../ratio/index.md).
