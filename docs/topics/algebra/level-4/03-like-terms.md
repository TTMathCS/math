---
title: "Like terms"
---

# Like terms

*Algebra · level 4, lesson 3 of 7*

## A question to start

Look at this long expression:

$$x + 4 + x + x - 3 + 2x + 6 - x + 1$$

Put $x = 10$ into it and work it all out. Then put $x = 10$ into the short expression $4x + 8$. You get 48 both times.
Try $x = 3$: both give 20. Try $x = 0$: both give 8.

The long expression and the short one are **the same expression**, written in two ways. Turning the long one into the
short one is called **simplifying**, and it rests on one idea: you can only add things of the same kind. This lesson
shows that idea with tiles, and explains why $x$ and $x^2$ can never be added together.

## The idea

### Terms and like terms

Remember that the **terms** of an expression are the pieces joined by $+$ and $-$. In $3x + 5 + 2x - 1$ the terms
are $3x$, $5$, $2x$ and $-1$. The sign in front of a term belongs to it, like a label stuck to its front.

**Like terms** have exactly the same letter part, with the same powers. They may have different coefficients.

| Like terms | Not like terms |
| --- | --- |
| $3x$ and $2x$ | $3x$ and $3$ |
| $5$ and $-1$ (both constants) | $x$ and $x^2$ |
| $4ab$ and $-ab$ | $ab$ and $a$ |
| $7y^2$ and $y^2$ | $y^2$ and $2y$ |

**Collecting like terms** means adding or subtracting the like terms, to make the expression shorter.

### Tiles: a picture of each kind

Algebra **tiles** are a way to see terms. Each kind of term gets its own shape:

- a small square, 1 by 1, stands for the number **1**;
- a long bar, 1 by $x$, stands for **$x$** (its length $x$ is unknown, so we just draw it long);
- a big square, $x$ by $x$, stands for **$x^2$** (its area is $x \times x$).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 130" role="img" aria-label="Three tiles: a large square labelled x squared, a long thin bar labelled x, and a small square labelled 1">
  <rect x="20" y="20" width="80" height="80" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <text x="60" y="66" font-size="16" text-anchor="middle" fill="currentColor">x²</text>
  <text x="60" y="122" font-size="12" text-anchor="middle" fill="currentColor">x by x</text>
  <rect x="140" y="20" width="22" height="80" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <text x="151" y="66" font-size="14" text-anchor="middle" fill="currentColor">x</text>
  <text x="151" y="122" font-size="12" text-anchor="middle" fill="currentColor">1 by x</text>
  <rect x="210" y="78" width="22" height="22" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <text x="221" y="94" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="221" y="122" font-size="12" text-anchor="middle" fill="currentColor">1 by 1</text>
  <text x="300" y="50" font-size="12" text-anchor="middle" fill="currentColor">three different</text>
  <text x="300" y="68" font-size="12" text-anchor="middle" fill="currentColor">kinds of tile:</text>
  <text x="300" y="86" font-size="12" text-anchor="middle" fill="currentColor">x², x and 1</text>
</svg>
</div>

To simplify, you sort the tiles into piles of the same kind and count each pile. Here is $2x + 3 + x + 1$:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 140" role="img" aria-label="Two x bars and three units, plus one x bar and one unit, sorted into three x bars and four units">
  <g fill="#9cc9ea" stroke="currentColor" stroke-width="1.5">
    <rect x="10" y="20" width="16" height="64"/><rect x="30" y="20" width="16" height="64"/>
    <rect x="120" y="20" width="16" height="64"/>
    <rect x="250" y="20" width="16" height="64"/><rect x="270" y="20" width="16" height="64"/><rect x="290" y="20" width="16" height="64"/>
  </g>
  <g fill="#7ccf9a" stroke="currentColor" stroke-width="1.5">
    <rect x="54" y="68" width="16" height="16"/><rect x="74" y="68" width="16" height="16"/><rect x="94" y="68" width="16" height="16"/>
    <rect x="144" y="68" width="16" height="16"/>
    <rect x="318" y="68" width="16" height="16"/><rect x="338" y="68" width="16" height="16"/>
    <rect x="358" y="68" width="16" height="16"/><rect x="378" y="68" width="16" height="16"/>
  </g>
  <text x="58" y="112" font-size="13" text-anchor="middle" fill="currentColor">2x + 3</text>
  <text x="104" y="52" font-size="16" text-anchor="middle" fill="currentColor">+</text>
  <text x="140" y="112" font-size="13" text-anchor="middle" fill="currentColor">x + 1</text>
  <text x="205" y="58" font-size="16" text-anchor="middle" fill="currentColor">=</text>
  <text x="320" y="112" font-size="13" text-anchor="middle" fill="currentColor">3x + 4</text>
</svg>
</div>

Three bars and four small squares: $2x + 3 + x + 1 = 3x + 4$.

### Why $x$ and $x^2$ are not like terms

Look at the tiles again. A bar has area $x$; a big square has area $x^2$. You cannot put a bar and a big square
together and call the result "two bars" or "two big squares", because they are different shapes. So $x + x^2$ stays
as it is: it does **not** simplify to $2x^2$ or to $2x$ or to $x^3$.

You can test this with a number. Take $x = 3$:

- $x + x^2 = 3 + 9 = 12$;
- $2x^2 = 2 \times 9 = 18$;
- $2x = 6$, and $x^3 = 27$.

None of them is 12, so none of them is the same as $x + x^2$. The same is true of $3x$ and $3$: a bar and a small
square are different sizes (unless $x$ happens to be 1), so $3x + 3$ is not $6x$ and not $6$.

### Why collecting like terms works

$3x + 2x$ means "3 lots of $x$, then 2 more lots of $x$". That is 5 lots of $x$, whatever $x$ is: $3x + 2x = 5x$.
It is exactly like 3 apples plus 2 apples making 5 apples. The letter is the "kind of thing", and the coefficient
says how many. Adding like terms adds the coefficients and keeps the letter part the same.

Subtracting works the same way: $7x - 4x$ is 7 lots of $x$, take away 4 lots, leaving $3x$.

### Moving terms around

You may move the terms of an expression into any order you like, **as long as each term keeps its own sign**. That
is because adding can be done in any order, and a subtraction is just adding a negative: $5 - 1$ is $5 + (-1)$.

$$3x + 5 + 2x - 1 = 3x + 2x + 5 - 1 = 5x + 4$$

A good method:

1. Underline (or colour) each kind of term in a different way, including the sign in front.
2. Collect each kind.
3. Write the answer, usually with the highest power first and the constant last.
4. Check by substituting a number into the long and short versions.

## Worked examples

**1. The outline example.** Simplify $3x + 5 + 2x - 1$.

- $x$ terms: $3x + 2x = 5x$. Constants: $5 - 1 = 4$.
- Answer: $5x + 4$.
- Check with $x = 2$: long: $6 + 5 + 4 - 1 = 14$; short: $10 + 4 = 14$. ✓

**2. Negatives.** Simplify $4a - 7 - 6a + 2$.

- $a$ terms: $4a - 6a = -2a$. Constants: $-7 + 2 = -5$.
- Answer: $-2a - 5$.
- Check with $a = 1$: long: $4 - 7 - 6 + 2 = -7$; short: $-2 - 5 = -7$. ✓

**3. Two letters.** Simplify $7a - 3b + 2a + 5b$.

- $a$ terms: $7a + 2a = 9a$. $b$ terms: $-3b + 5b = 2b$.
- Answer: $9a + 2b$.

**4. Squares.** Simplify $x^2 + 3x + 2x^2 - x + 4$.

- $x^2$ terms: $x^2 + 2x^2 = 3x^2$. $x$ terms: $3x - x = 2x$. Constant: 4.
- Answer: $3x^2 + 2x + 4$.
- Check with $x = 2$: long: $4 + 6 + 8 - 2 + 4 = 20$; short: $12 + 4 + 4 = 20$. ✓

**5. A perimeter.** A triangle has sides $x$, $x + 2$ and $2x - 1$ cm. Write its perimeter as simply as possible.

- $x + (x + 2) + (2x - 1) = x + x + 2x + 2 - 1 = 4x + 1$ cm.
- If $x = 5$ the sides are 5, 7 and 9, and the perimeter is 21; $4 \times 5 + 1 = 21$. ✓

**6. The starting puzzle.** $x + 4 + x + x - 3 + 2x + 6 - x + 1$: the $x$ terms are $1 + 1 + 1 + 2 - 1 = 4$ lots of
$x$; the constants are $4 - 3 + 6 + 1 = 8$. So it is $4x + 8$.

## Try it

1. Simplify $6y + 2y$.
2. Simplify $5n + 3 + 2n + 8$.
3. Simplify $9k - 4 - 3k + 10$.
4. Simplify $2p - 5q + 4p + 7q$.
5. Simplify $3x^2 + 2x - x^2 + 5x - 6$.
6. A rectangle is $3x + 1$ long and $x + 2$ wide. Write its perimeter as simply as possible.
7. Leah writes $4x + 3 = 7x$. Use tiles or a number to explain why she is wrong.
8. Which of these are equal to $2x + 6$ for every $x$? (a) $x + 6 + x$; (b) $8x$; (c) $3x + 2 - x + 4$;
   (d) $2(x + 3)$.

??? note "Answers"
    1. $8y$.
    2. $7n + 11$.
    3. $6k + 6$.
    4. $6p + 2q$.
    5. $2x^2 + 7x - 6$.
    6. $2(3x + 1) + 2(x + 2) = 6x + 2 + 2x + 4 = 8x + 6$. (Or add the four sides:
       $3x + 1 + x + 2 + 3x + 1 + x + 2 = 8x + 6$.)
    7. $4x$ is four bars and 3 is three small squares: different kinds of tile, so they cannot make seven bars. With
       $x = 2$: $4 \times 2 + 3 = 11$, but $7 \times 2 = 14$.
    8. (a) yes: $x + x = 2x$. (b) no: with $x = 2$, $2x + 6 = 10$ but $8x = 16$. (They happen to agree when
       $x = 1$, both 8, but one match is not enough: they must agree for **every** $x$.) (c) yes: $3x - x = 2x$ and $2 + 4 = 6$. (d) yes: two lots
       of $x + 3$ is two bars and six small squares.

## Common mistake

**Collecting unlike terms.** $5x + 2$ is not $7x$, and $x + x^2$ is not $2x^2$. If the letter parts are not exactly
the same, the terms stay separate.

**Losing a minus sign.** In $8 - 3a + 5a$, the term is $-3a$, so the $a$ terms give $-3a + 5a = 2a$, and the answer
is $8 + 2a$. Keep each sign glued to the term after it when you move terms around.

## Where it leads

- Previous: [Substitution](02-substitution.md) · Next: [Solving one- and two-step equations](04-solving-equations.md)
- [Level 4 page](index.md) · [Algebra topic page](../index.md)
- Tiles return in [level 5](../level-5/index.md) (the distributive law, with an area picture) and in level 6, where
  you multiply and factor expressions like $x^2 + 5x + 6$.
- The tile for $x^2$ is a square with side $x$: areas of squares and rectangles are in
  [Measurement](../../measurement/index.md).
