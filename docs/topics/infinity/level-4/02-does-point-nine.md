---
title: "Does 0.999... equal 1?"
---

# Does 0.999... equal 1?

*Infinity and strange math · level 4, lesson 2 of 6*

## A question to start

Write a zero, a decimal point, and then 9s that go on forever:

$$0.999999999\ldots$$

Is this number equal to 1? Or is it just a tiny bit less than 1?

Ask a room full of people and most will say "a tiny bit less". It feels obvious: it starts with 0, not 1, and however
many 9s you write, you never quite get there. Yet mathematicians all agree that $0.999\ldots$ is **exactly** 1. Not
nearly 1, not 1 rounded off: exactly 1. This lesson gives three different reasons, and then explains why it still
feels wrong.

## The idea

### First, what does 0.999... mean?

A decimal is a short way of writing a sum. The decimal 0.37 means 3 tenths plus 7 hundredths:
$\frac3{10} + \frac7{100}$. So a decimal with infinitely many digits means an infinite sum. Here:

$$0.999\ldots = \frac9{10} + \frac9{100} + \frac9{1000} + \frac9{10000} + \cdots$$

From the last lesson, an infinite sum means the number its partial sums close in on. The partial sums are 0.9, 0.99,
0.999, 0.9999, and so on. So the real question is: what number do 0.9, 0.99, 0.999, ... close in on?

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 520 162" role="img" aria-label="Three bars, each a whole of length 1: 0.9 leaves a gap of 0.1, 0.99 leaves a gap of 0.01, 0.999 leaves a gap of 0.001 that is too thin to see">
  <rect x="40" y="20" width="400" height="22" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <rect x="40" y="20" width="360.00" height="22" fill="#eea66f"/>
  <text x="34" y="35" font-size="12" text-anchor="end" fill="currentColor">0.9</text>
  <text x="446" y="35" font-size="11" text-anchor="start" fill="currentColor">gap 0.1</text>
  <rect x="40" y="60" width="400" height="22" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <rect x="40" y="60" width="396.00" height="22" fill="#9cc9ea"/>
  <text x="34" y="75" font-size="12" text-anchor="end" fill="currentColor">0.99</text>
  <text x="446" y="75" font-size="11" text-anchor="start" fill="currentColor">gap 0.01</text>
  <rect x="40" y="100" width="400" height="22" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <rect x="40" y="100" width="399.60" height="22" fill="#7ccf9a"/>
  <text x="34" y="115" font-size="12" text-anchor="end" fill="currentColor">0.999</text>
  <text x="446" y="115" font-size="11" text-anchor="start" fill="currentColor">gap 0.001</text>
  <text x="240" y="152" font-size="12" text-anchor="middle" fill="currentColor">each extra 9 makes the gap ten times smaller</text>
</svg>
</div>

After one 9, the gap to 1 is 0.1. After two 9s, the gap is 0.01. After three, 0.001. Each extra 9 makes the gap ten
times smaller. With $n$ nines, the gap is $\frac1{10^n}$, a 1 in the $n$th decimal place.

### Argument 1: three thirds

From level 3, long division gives

$$\frac13 = 0.333\ldots$$

with 3s forever. Multiply both sides by 3. On the left, $3 \times \frac13 = 1$. On the right, multiply each digit by 3:
every 3 becomes a 9, and since $3 \times 3 = 9$ there is never anything to carry. So

$$1 = 0.999\ldots$$

Many people find this one convincing. Some say: "Then maybe $\frac13$ is not really $0.333\ldots$ either!" That is a
fair worry, and it shows the two facts stand or fall together. If you accept that $0.333\ldots$ is exactly a third
(and long division says it is), you have to accept $0.999\ldots = 1$.

### Argument 2: ten times and take away

This is the trick from the last lesson. Call the number $x$:

$$x = 0.999\ldots$$

Multiply by 10. Multiplying by 10 moves every digit one place to the left:

$$10x = 9.999\ldots$$

Now take the first line away from the second. After the decimal point, both have 9s forever, in exactly the same
places, so they cancel completely:

$$10x - x = 9.999\ldots - 0.999\ldots = 9.$$

So $9x = 9$, and $x = 1$.

**Is the cancelling allowed?** It is the step people question. The key point is that $9.999\ldots$ has the same
infinitely many 9s after the point as $0.999\ldots$: there is no "last 9" that got lost or shifted. Each 9 in $10x$
lines up with a 9 in $x$. (If you still worry, you are in good company; level 5 makes this step completely solid using
limits.)

### Argument 3: nothing fits in between

This is the deepest argument. If two numbers are **different**, there is a gap between them, and other numbers fit in
the gap. In level 3 you saw that the average of two different numbers is always strictly between them.

So suppose $0.999\ldots$ is less than 1. Then their average, or some other number, must lie between them. What could it
be? A number bigger than $0.999\ldots$ would need a bigger digit somewhere. But every digit of $0.999\ldots$ is
already 9, the biggest digit there is. So any number bigger than $0.999\ldots$ must be at least 1. Nothing fits in
between.

Here is the same idea with sizes. How big is the gap $1 - 0.999\ldots$? It is smaller than 0.1 (since
$0.999\ldots$ is bigger than 0.9). It is smaller than 0.01 (since it is bigger than 0.99). It is smaller than 0.001,
and smaller than $\frac1{10^n}$ for every $n$. The only number that is not negative but smaller than every one of
0.1, 0.01, 0.001, ... is 0. So the gap is 0, and the two numbers are equal.

### Why it feels wrong

Three good arguments, and still it feels wrong to most people. Here is why.

**It feels like a process, not a number.** We picture someone writing 9s, one after another, never finishing, always
just short of 1. But $0.999\ldots$ is not a person still writing; it is the number you get when **all** the 9s are
already there. Every 9 is already in place. No 9 is "still to come".

**People imagine a last 9.** They picture $0.999\ldots9$ with a final 9 and a tiny gap after it. But there is no last
9. A decimal with a last 9, like $0.999$ (three nines) or a decimal with a million 9s, really is less than 1. Endless
9s are different.

**Two names for one number seems odd.** But numbers often have several names. $\frac12$, $\frac24$, $\frac{50}{100}$
and $0.5$ are all the same number. $1$ and $\frac77$ and $0.999\ldots$ are all the same number too. In the decimal
system, every decimal that stops has a second name ending in 9s forever: $0.5 = 0.4999\ldots$, and
$2.37 = 2.36999\ldots$

**"Infinitely small" numbers are tempting.** It is tempting to say the gap is "infinitely small but not zero". In the
ordinary numbers used in school and science, there is no such thing: a gap that is smaller than 0.1, 0.01, 0.001, and
so on forever, is zero. (Mathematicians have invented other number systems with infinitely small numbers, in level 8,
but in those, $0.999\ldots$ still means 1.)

## Worked examples

**1. $0.4999\ldots$** Show that $0.4999\ldots = 0.5$.

Let $x = 0.4999\ldots$. Then $10x = 4.999\ldots$, and $4.999\ldots = 4 + 0.999\ldots = 4 + 1 = 5$. So $10x = 5$ and
$x = 0.5$. Or: $0.4999\ldots = 0.4 + 0.0999\ldots$, and $0.0999\ldots$ is a tenth of $0.999\ldots$, which is a tenth of
1, so $0.4 + 0.1 = 0.5$.

**2. Adding two repeating decimals.** Find $0.333\ldots + 0.666\ldots$

- Add digit by digit: $3 + 6 = 9$ in every place, with no carrying: $0.999\ldots$
- As fractions: $\frac13 + \frac23 = 1$.
- The two answers agree, as they must: $0.999\ldots = 1$.

**3. A finite number of 9s.** Is $0.99999$ (five 9s) equal to 1?

No. $1 - 0.99999 = 0.00001$, which is not zero. Any decimal that **stops** after a few 9s is less than 1. Only the
endless one equals 1.

**4. Using the average argument.** What is the average of $0.999\ldots$ and 1?

Add them: $0.999\ldots + 1 = 1.999\ldots$, and half of that is $0.999\ldots$ (half of 1 is 0.5, half of $0.999\ldots$
is $0.4999\ldots$, and $0.5 + 0.4999\ldots = 0.999\ldots$). The average is $0.999\ldots$ itself, which is also 1. For
two different numbers, the average is different from both. Here it is not, so the numbers are the same.

**5. Two names for 3.** Write 3 as a decimal ending in endless 9s.

$3 = 2 + 1 = 2 + 0.999\ldots = 2.999\ldots$

## Try it

1. What is $1 - 0.9999$? What is $1 - 0.999\ldots$ (endless)?
2. Show that $2.999\ldots = 3$ using the "ten times and take away" argument.
3. Write $0.25$ in another way, ending in endless 9s.
4. Find $0.111\ldots \times 9$ as a decimal, and as a fraction. What does it show?
5. Show that $0.0999\ldots = 0.1$.
6. A friend says "$0.999\ldots$ is the biggest number less than 1." Explain why there is no biggest number less than 1.
   (Hint: lesson 4 of level 3.)
7. (Harder) Use "ten times and take away" to find $5.24999\ldots$ as a decimal that stops.

??? note "Answers"
    1. $1 - 0.9999 = 0.0001$. And $1 - 0.999\ldots = 0$, because the two numbers are equal.
    2. Let $x = 2.999\ldots$ Then $10x = 29.999\ldots$, and $10x - x = 29.999\ldots - 2.999\ldots = 27$. So $9x = 27$
       and $x = 3$.
    3. $0.25 = 0.24999\ldots$
    4. $0.111\ldots \times 9 = 0.999\ldots$ (each 1 becomes a 9, no carrying). As a fraction,
       $\frac19 \times 9 = 1$. So again $0.999\ldots = 1$.
    5. Let $x = 0.0999\ldots$ Then $10x = 0.999\ldots = 1$, so $x = \frac1{10} = 0.1$. Or: $100x = 9.999\ldots$, and
       $100x - 10x = 9.999\ldots - 0.999\ldots = 9$, so $90x = 9$ and $x = 0.1$.
    6. Take any number $y$ less than 1. The average of $y$ and 1 is bigger than $y$ and still less than 1. So $y$ was
       not the biggest. Whatever number less than 1 anyone names, there is a bigger one, so there is no biggest
       number less than 1. (And $0.999\ldots$ is not less than 1 at all; it **is** 1.)
    7. Let $x = 5.24999\ldots$ Then $100x = 524.999\ldots$ and $1000x = 5249.999\ldots$ Subtract:
       $1000x - 100x = 5249.999\ldots - 524.999\ldots = 4725$. So $900x = 4725$ and $x = \frac{4725}{900} = 5.25$.

## Common mistake

**Imagining a last 9.** "$0.999\ldots$ is 1 minus a 1 in the last place." There is no last place. The endless 9s have
no end, so there is nowhere to put that last 1.

**Treating "0.999..." as "very close to 1".** Very close to 1 is something like 0.9999999, which is not 1. The three
dots are part of the number: they say every digit, forever, is 9. With that, the gap is not small, it is zero.

## Where it leads

- Back: [Halves that add up to 1](01-halves-add-to-one.md) · Next: [Sums that blow up](03-sums-blow-up.md).
- [Level 4 page](index.md) · [Infinity topic page](../index.md)
- Where $0.333\ldots$ comes from: [Decimals that never stop](../level-3/05-decimals-never-stop.md). There is always
  another number in a gap: [Numbers between numbers](../level-3/04-numbers-between.md).
- Turning any repeating decimal into a fraction: [Repeating decimals to fractions](../../numbers/level-6/01-repeating-decimals.md).
  Why the real numbers have no gaps at all: [The real numbers](../../numbers/level-6/05-real-numbers.md).
- Level 5 explains that $0.333\ldots$ and $0.999\ldots$ are defined as limits, so every equals sign here is exact.
  The real numbers and why they have no gaps, with full proofs: [MAT158 Unit 2: real numbers and least upper bounds](../../../uoft/MAT158H1/unit02.md).
