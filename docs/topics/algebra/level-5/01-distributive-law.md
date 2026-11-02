---
title: "The distributive law"
---

# The distributive law

*Algebra · level 5, lesson 1 of 6*

## A question to start

Work out $7 \times 98$ in your head, without paper.

Most people freeze, because 98 is an awkward number. But 98 is just $100 - 2$. Seven hundreds is 700, and seven
twos is 14, so

$$7 \times 98 = 7 \times 100 - 7 \times 2 = 700 - 14 = 686.$$

Here is another one: $23 \times 4 + 77 \times 4$. You could do two multiplications and an addition. Or you could
notice that both parts are "something times 4", so the whole thing is $(23 + 77) \times 4 = 100 \times 4 = 400$.

Both tricks use the same law of arithmetic, the **distributive law**. It is the most used rule in all of algebra: it
is how brackets are opened and closed, and almost every lesson after this one leans on it. This lesson shows what it
says, **why** it is true (with a picture), and how to use it forwards and backwards.

## The idea

### What the law says

For any numbers $a$, $b$ and $c$:

$$a(b + c) = ab + ac.$$

In words: multiplying a sum by a number is the same as multiplying **each part** of the sum by that number and then
adding. The number outside the bracket is "distributed" (handed out) to every term inside, like handing one leaflet to
every person in a room.

The same is true for a difference: $a(b - c) = ab - ac$. And it works for any number of terms inside:
$a(b + c + d) = ab + ac + ad$.

Two words you will use all the time:

- **Expanding** means using the law to remove brackets: $3(x + 4) \to 3x + 12$.
- **Factoring** (or factorising) means using it backwards to put brackets in: $3x + 12 \to 3(x + 4)$.

### Why it is true: the area picture

Think of $3(x + 4)$ as the area of a rectangle that is 3 tall and $x + 4$ long. The long side is made of two pieces,
one of length $x$ and one of length 4. Draw a line where the two pieces meet, and the rectangle splits into two
smaller rectangles.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 150" role="img" aria-label="A rectangle 3 tall and x plus 4 long, split into a 3 by x rectangle of area 3x and a 3 by 4 rectangle of area 12">
  <rect x="40" y="30" width="160" height="60" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <rect x="200" y="30" width="80" height="60" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <text x="120" y="22" font-size="14" text-anchor="middle" fill="currentColor">x</text>
  <text x="240" y="22" font-size="14" text-anchor="middle" fill="currentColor">4</text>
  <text x="28" y="65" font-size="14" text-anchor="middle" fill="currentColor">3</text>
  <text x="120" y="65" font-size="14" text-anchor="middle" fill="currentColor">3x</text>
  <text x="240" y="65" font-size="14" text-anchor="middle" fill="currentColor">12</text>
  <text x="340" y="55" font-size="13" text-anchor="middle" fill="currentColor">whole area</text>
  <text x="340" y="73" font-size="13" text-anchor="middle" fill="currentColor">3(x + 4)</text>
  <text x="160" y="125" font-size="13" text-anchor="middle" fill="currentColor">3(x + 4) = 3x + 12</text>
</svg>
</div>

The whole rectangle has area $3(x + 4)$, "height times length". The two pieces have areas $3 \times x = 3x$ and
$3 \times 4 = 12$. Cutting a rectangle into two does not change the total area, so

$$3(x + 4) = 3x + 12.$$

This is true whatever length $x$ is, because the picture works for any length. That is the whole reason the law
holds for positive numbers.

### Why it is true: counting groups

Here is a second reason, with no picture. $3(x + 4)$ means "3 lots of $(x + 4)$":

$$3(x + 4) = (x + 4) + (x + 4) + (x + 4).$$

Now collect like terms (level 4): there are three $x$'s and three 4's. So the total is $3x + 12$. Each copy of the
bracket brings one $x$ and one 4, so the 3 multiplies both.

### Checking with a number

Any time you expand, you can test your answer by putting in a number. Take $x = 5$:

- $3(x + 4) = 3 \times 9 = 27$;
- $3x + 12 = 15 + 12 = 27$. ✓

If the two sides disagree for even one number, the expansion is wrong. (If they agree, it is very likely right; try a
second number if you want to be sure.)

### Negative numbers outside the bracket

What is $-2(x - 5)$? The law still says: multiply **every** term inside by $-2$.

$$-2(x - 5) = (-2) \times x + (-2) \times (-5) = -2x + 10.$$

The second term is $+10$ because a negative times a negative is positive (see
[multiplying integers](../../numbers/level-5/01-multiplying-integers.md)). Check with $x = 1$: the left side is
$-2 \times (1 - 5) = -2 \times (-4) = 8$, and the right side is $-2 + 10 = 8$. ✓

A plain minus sign in front of a bracket is the same as $-1$ times the bracket. So

$$-(x - 3) = -x + 3.$$

Every sign inside the bracket flips. This is the place where most algebra mistakes happen, so slow down whenever you
see a minus in front of a bracket.

### Letters outside the bracket

The number outside can be a letter, or a mix of letters and numbers. You multiply each term in the usual way:

- $x(x + 3) = x \times x + x \times 3 = x^2 + 3x$;
- $2a(3a - b + 4) = 6a^2 - 2ab + 8a$.

The area picture still works: $x(x + 3)$ is a rectangle $x$ tall and $x + 3$ long, made of an $x$ by $x$ square
(area $x^2$) and an $x$ by 3 rectangle (area $3x$).

### Expanding and simplifying

Often there are several brackets. Expand each one, then collect like terms.

$$5(x + 2) - 2(x - 4) = 5x + 10 - 2x + 8 = 3x + 18.$$

Look at the $+8$: it came from $(-2) \times (-4)$. The $-2$ belongs to the second bracket, sign and all.

### Factoring: the law backwards

Factoring starts with $ab + ac$ and finds the $a(b + c)$. You look for a **common factor**: a number (or letter)
that divides every term.

Take $6x + 15$. Both 6 and 15 are multiples of 3, so

$$6x + 15 = 3 \times 2x + 3 \times 5 = 3(2x + 5).$$

To factor **fully**, take out the **greatest** common factor (GCF): the biggest number and the most letters that go
into every term. In $12a - 8ab$ the greatest common factor of 12 and 8 is 4, and both terms contain $a$, so

$$12a - 8ab = 4a(3 - 2b).$$

You could also write $2(6a - 4ab)$, which is true but not fully factored: the bracket still has a common factor of
$2a$ inside it.

To find what goes in the bracket, **divide each term by the common factor**: $12a \div 4a = 3$ and
$-8ab \div 4a = -2b$. Then always check by expanding: $4a(3 - 2b) = 12a - 8ab$. ✓

### Why factoring is useful

Expanding and factoring are opposite directions on the same road. Expanding makes things easier to add; factoring
makes things easier to divide and to solve. You will see this in level 6, where factoring $x^2 + 5x + 6$ into
$(x + 2)(x + 3)$ is the key to solving equations with $x^2$ in them. It also explains mental tricks like the ones at
the start:

$$23 \times 4 + 77 \times 4 = 4(23 + 77) = 4 \times 100 = 400.$$

### Dividing a sum

The distributive law also tells you how to divide a sum: each term gets divided.

$$\frac{6x + 9}{3} = \frac{6x}{3} + \frac{9}{3} = 2x + 3.$$

That is because dividing by 3 is multiplying by $\tfrac13$, and $\tfrac13$ distributes like any other number. The
fraction bar acts like a bracket around the whole top.

## Worked examples

**1. A simple expansion.** Expand $4(2x + 3)$.

- Multiply each term by 4: $4 \times 2x = 8x$ and $4 \times 3 = 12$.
- So $4(2x + 3) = 8x + 12$.
- Check with $x = 1$: $4 \times 5 = 20$ and $8 + 12 = 20$. ✓

**2. A negative outside.** Expand $-3(2x - 5)$.

- $(-3) \times 2x = -6x$.
- $(-3) \times (-5) = +15$.
- So $-3(2x - 5) = -6x + 15$.
- Check with $x = 2$: $-3 \times (4 - 5) = -3 \times (-1) = 3$, and $-12 + 15 = 3$. ✓

**3. Expand and simplify.** Simplify $5(x + 2) - 2(x - 4)$.

- First bracket: $5x + 10$.
- Second bracket with its $-2$: $-2x + 8$.
- Together: $5x + 10 - 2x + 8 = 3x + 18$.
- Check with $x = 1$: $5 \times 3 - 2 \times (-3) = 15 + 6 = 21$, and $3 + 18 = 21$. ✓

**4. Factoring.** Factor $18x - 24$ fully.

- The greatest common factor of 18 and 24 is 6. The second term has no $x$, so $x$ is not a common factor.
- Divide each term by 6: $18x \div 6 = 3x$ and $-24 \div 6 = -4$.
- So $18x - 24 = 6(3x - 4)$. Check: $6 \times 3x - 6 \times 4 = 18x - 24$. ✓

**5. Mental arithmetic.** Work out $6 \times 47$ in your head.

- $47 = 40 + 7$, so $6 \times 47 = 6 \times 40 + 6 \times 7 = 240 + 42 = 282$.
- This is exactly what a rectangle picture with sides 6 and $40 + 7$ shows, and it is what written multiplication
  does too: it multiplies the tens and the ones separately and adds.

**6. Letters outside and inside.** Expand $3x(x - 2y + 1)$.

- $3x \times x = 3x^2$; $3x \times (-2y) = -6xy$; $3x \times 1 = 3x$.
- So $3x(x - 2y + 1) = 3x^2 - 6xy + 3x$.

## Try it

1. Expand $5(x + 3)$.
2. Expand $-4(y - 2)$.
3. Expand and simplify $3(2a + 1) + 2(a - 5)$.
4. Expand and simplify $7(x + 1) - 3(x - 2)$.
5. Factor fully: (a) $12x + 18$; (b) $15ab - 10a$.
6. Work out $9 \times 999$ in your head, and say which law you used.
7. Two rectangles are both 4 wide. One is $x + 7$ long and the other is $x - 2$ long. Write their total area as an
   expression, simplify it, then factor the answer.
8. Sam says $-(x - 6) = -x - 6$. Test his claim with $x = 10$, then give the correct expansion.

??? note "Answers"
    1. $5x + 15$. Check with $x = 1$: $5 \times 4 = 20$ and $5 + 15 = 20$. ✓
    2. $(-4) \times y = -4y$ and $(-4) \times (-2) = +8$, so $-4y + 8$.
    3. $6a + 3 + 2a - 10 = 8a - 7$. Check with $a = 1$: $3 \times 3 + 2 \times (-4) = 9 - 8 = 1$ and $8 - 7 = 1$. ✓
    4. $7x + 7 - 3x + 6 = 4x + 13$. (The $+6$ is $(-3) \times (-2)$.) Check with $x = 0$: $7 + 6 = 13$. ✓
    5. (a) The greatest common factor of 12 and 18 is 6: $12x + 18 = 6(2x + 3)$. (b) Both terms have the factor
       $5a$: $15ab \div 5a = 3b$ and $10a \div 5a = 2$, so $15ab - 10a = 5a(3b - 2)$.
    6. $9 \times 999 = 9 \times (1000 - 1) = 9000 - 9 = 8991$, by the distributive law.
    7. Total area $4(x + 7) + 4(x - 2) = 4x + 28 + 4x - 8 = 8x + 20$. Factored: $8x + 20 = 4(2x + 5)$. That makes
       sense: put the two rectangles end to end and you get one rectangle 4 wide and $(x + 7) + (x - 2) = 2x + 5$ long.
    8. With $x = 10$: $-(10 - 6) = -4$, but $-10 - 6 = -16$. They disagree, so Sam is wrong. The minus flips every
       sign: $-(x - 6) = -x + 6$, and $-10 + 6 = -4$. ✓

## Common mistake

**Multiplying only the first term.** $3(x + 4)$ is **not** $3x + 4$. The 3 multiplies everything inside. The area
picture shows it: the rectangle has two pieces, and both of them are 3 tall. Check with $x = 1$: $3 \times 5 = 15$,
but $3 + 4 = 7$.

**Losing a sign.** In $10 - 2(x - 3)$ the $-2$ multiplies the $-3$ too: $10 - 2x + 6 = 16 - 2x$. Writing
$10 - 2x - 6$ is wrong. When there is a minus in front of a bracket, write the multiplication of each term out in full
until it feels automatic.

## Where it leads

- Previous: [The mind-reading trick explained](../level-4/07-trick-explained.md) (level 4) · Next:
  [Equations with brackets and x on both sides](02-brackets-both-sides.md)
- [Level 5 page](index.md) · [Algebra topic page](../index.md)
- In [level 6](../level-6/02-polynomials.md) the same area picture multiplies two brackets, $(x + 3)(x + 5)$, and
  in [factoring](../level-6/03-factoring.md) you run it backwards.
- Why a negative times a negative is positive: [multiplying integers](../../numbers/level-5/01-multiplying-integers.md).
  Greatest common factors in general: [Number theory](../../number-theory/index.md).
