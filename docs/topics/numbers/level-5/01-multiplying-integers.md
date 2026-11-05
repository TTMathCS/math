---
title: "Multiplying and dividing integers"
---

# Multiplying and dividing integers

*Numbers · level 5, lesson 1 of 7*

## A question to start

Everyone learns the rule "a negative times a negative is a positive". Most people learn it as a rule to obey, with no
reason given. It can even sound wrong: how can multiplying two "less than nothing" amounts give "more than nothing"?

Here is a story where it makes sense. The temperature outside is falling by 3 degrees every hour. It is 0 °C now.
What was the temperature 4 hours ago? Think about it before you read on. A fall of 3 each hour is a change of $-3$.
Four hours ago is a time of $-4$ hours. And the answer, as you probably worked out, is **12 degrees warmer**: $+12$.
So $(-4) \times (-3) = +12$ is not a strange rule. It is what the story forces. This lesson gives three different
reasons, and by the end the rule should feel as natural as $2 \times 3 = 6$.

## The idea

### Integers, and what we already know

The **integers** are the whole numbers together with their negatives and zero:

$$\ldots, -3, -2, -1, 0, 1, 2, 3, \ldots$$

Each integer has an **opposite** on the other side of 0, at the same distance: the opposite of 5 is $-5$, and the
opposite of $-5$ is 5. In level 4 you added and subtracted integers on the number line and with chips. Now we
multiply and divide them.

There are four cases, depending on the signs:

| | positive × positive | positive × negative | negative × positive | negative × negative |
| --- | --- | --- | --- | --- |
| example | $3 \times 2$ | $3 \times (-2)$ | $(-3) \times 2$ | $(-3) \times (-2)$ |
| answer | 6 | ? | ? | ? |

The first case is ordinary multiplication. The other three need a reason.

### Positive times negative: repeated adding

$3 \times (-2)$ means three lots of $-2$:

$$3 \times (-2) = (-2) + (-2) + (-2) = -6$$

On the number line, start at 0 and make three jumps of 2 to the **left**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 100" role="img" aria-label="A number line from minus 7 to 1; three jumps of 2 to the left start at 0 and land on minus 2, minus 4 and minus 6">
  <line x1="25" y1="70" x2="410" y2="70" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="2">
    <line x1="40" y1="64" x2="40" y2="76"/><line x1="85" y1="64" x2="85" y2="76"/><line x1="130" y1="64" x2="130" y2="76"/>
    <line x1="175" y1="64" x2="175" y2="76"/><line x1="220" y1="64" x2="220" y2="76"/><line x1="265" y1="64" x2="265" y2="76"/>
    <line x1="310" y1="64" x2="310" y2="76"/><line x1="355" y1="64" x2="355" y2="76"/><line x1="400" y1="64" x2="400" y2="76"/>
  </g>
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <text x="40" y="92">−7</text><text x="85" y="92">−6</text><text x="130" y="92">−5</text><text x="175" y="92">−4</text>
    <text x="220" y="92">−3</text><text x="265" y="92">−2</text><text x="310" y="92">−1</text><text x="355" y="92">0</text><text x="400" y="92">1</text>
  </g>
  <g fill="none" stroke-width="3">
    <path d="M 355 66 Q 310 20 265 66" stroke="#eea66f"/>
    <path d="M 265 66 Q 220 20 175 66" stroke="#9cc9ea"/>
    <path d="M 175 66 Q 130 20 85 66" stroke="#7ccf9a"/>
  </g>
  <circle cx="85" cy="70" r="5" fill="currentColor"/>
</svg>
</div>

So a positive times a negative is **negative**. In chips (level 4), three groups of two negative chips is six
negative chips.

### Negative times positive: turn it round

What about $(-3) \times 2$? "Minus three lots of 2" is hard to picture. But in level 2 you saw that turning an array
round shows $3 \times 4 = 4 \times 3$: the order of multiplying does not matter. This is called the **commutative
law**. Mathematicians want it to stay true for all numbers, so

$$(-3) \times 2 = 2 \times (-3) = (-3) + (-3) = -6$$

A negative times a positive is also **negative**.

### Negative times negative, reason 1: the pattern

Now the hard case. Write a column of products where the first number goes down by 1 each time, and the second number
stays $-2$:

| product | answer |
| --- | --- |
| $3 \times (-2)$ | $-6$ |
| $2 \times (-2)$ | $-4$ |
| $1 \times (-2)$ | $-2$ |
| $0 \times (-2)$ | $0$ |
| $(-1) \times (-2)$ | ? |
| $(-2) \times (-2)$ | ? |

Every row we know goes **up by 2**: $-6, -4, -2, 0$. That is no accident: each time we take away one lot of $-2$, and
taking away $-2$ is the same as adding 2. To keep the pattern going, the next answers must be $2$ and then $4$:

$$(-1) \times (-2) = 2 \qquad (-2) \times (-2) = 4$$

A pattern is a strong hint. But a careful reader should ask: does the pattern **have** to continue? Could we just
decide that $(-1) \times (-2) = -2$? The next reason shows that any other answer would break arithmetic.

### Negative times negative, reason 2: the distributive law

In level 3 you used the **distributive law** to build $7 \times 8$ from $7 \times 5 + 7 \times 3$. In general,

$$a \times (b + c) = a \times b + a \times c$$

It says that multiplying a sum is the same as multiplying each part and adding. Every bit of written multiplication
depends on it, so we want it to stay true for negative numbers too. Watch what it forces.

1. We know $2 + (-2) = 0$, since a number plus its opposite is zero.
2. So $(-1) \times \big(2 + (-2)\big) = (-1) \times 0 = 0$. (Anything times 0 is 0.)
3. Now use the distributive law on the left side instead:
   $(-1) \times 2 + (-1) \times (-2) = 0$.
4. We already know $(-1) \times 2 = -2$. So $-2 + (-1) \times (-2) = 0$.
5. The only number that adds to $-2$ to give 0 is $2$. So $(-1) \times (-2) = 2$.

There was no choice. If $(-1) \times (-2)$ were anything other than 2, the distributive law would fail, and with it
all of the arithmetic you already know. The same steps work for any two negatives: $(-a) \times (-b) = ab$.

### Negative times negative, reason 3: "the opposite of"

Multiplying by $-1$ gives the **opposite**: $(-1) \times 5 = -5$ and $(-1) \times (-5) = 5$ (from reason 2). On the
number line, multiplying by $-1$ **flips** a number to the other side of 0, like a mirror.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 110" role="img" aria-label="A number line from minus 6 to 6; an arrow flips 4 over zero to minus 4, and a second arrow flips minus 4 back to 4">
  <line x1="20" y1="70" x2="400" y2="70" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="2">
    <line x1="30" y1="64" x2="30" y2="76"/><line x1="90" y1="64" x2="90" y2="76"/><line x1="150" y1="64" x2="150" y2="76"/>
    <line x1="210" y1="62" x2="210" y2="78"/><line x1="270" y1="64" x2="270" y2="76"/><line x1="330" y1="64" x2="330" y2="76"/>
    <line x1="390" y1="64" x2="390" y2="76"/>
  </g>
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <text x="30" y="92">−6</text><text x="90" y="92">−4</text><text x="150" y="92">−2</text><text x="210" y="92">0</text>
    <text x="270" y="92">2</text><text x="330" y="92">4</text><text x="390" y="92">6</text>
  </g>
  <path d="M 330 62 Q 210 0 90 62" fill="none" stroke="#eea66f" stroke-width="3"/>
  <path d="M 90 78 Q 210 128 330 78" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <text x="210" y="24" font-size="12" text-anchor="middle" fill="currentColor">× (−1): flip</text>
  <text x="210" y="108" font-size="12" text-anchor="middle" fill="currentColor">× (−1) again: flip back</text>
</svg>
</div>

Now $(-3) \times (-2)$ is $(-1) \times 3 \times (-2)$. First $3 \times (-2) = -6$, then multiplying by $-1$ flips it
to $6$. Two flips bring you back to where you started. That is the picture behind "negative times negative is
positive": **each negative sign is one flip**.

### The sign rules

All three reasons agree:

| signs | answer's sign | example |
| --- | --- | --- |
| same signs | positive | $(-4) \times (-5) = 20$ |
| different signs | negative | $(-4) \times 5 = -20$ |

To multiply integers, multiply the sizes as usual, then decide the sign.

**Many factors.** Each negative factor is one flip. An **even** number of flips brings you back to positive; an
**odd** number leaves you negative. So $(-1) \times (-1) \times (-1) = -1$, and $(-2) \times (-2) \times (-2) \times
(-2) = 16$. Zero is different: if any factor is 0, the product is 0, whatever the signs.

### Dividing integers

Division undoes multiplication (level 2). So every division fact comes from a multiplication fact:

- $-12 \div 3 = -4$, because $3 \times (-4) = -12$.
- $-12 \div (-3) = 4$, because $(-3) \times 4 = -12$.
- $12 \div (-3) = -4$, because $(-3) \times (-4) = 12$.

So division has **the same sign rules**: same signs give a positive answer, different signs give a negative answer.

And, as always, you **cannot divide by zero**. $5 \div 0$ would need a number that gives 5 when multiplied by 0, and
there is none, because anything times 0 is 0.

<figure class="play" data-play="numline" data-mode="add"><span class="ai-tag">AI-created</span><figcaption><b>Hops left and right.</b> Repeated adding of a negative number goes left each time.</figcaption></figure>

## Worked examples

**1. Products.** Work out $(-7) \times 6$, $(-4) \times (-9)$ and $0 \times (-15)$.

1. $(-7) \times 6$: the sizes give $7 \times 6 = 42$. The signs are different, so the answer is **$-42$**.
2. $(-4) \times (-9)$: sizes give $36$. The signs are the same, so **$36$**.
3. $0 \times (-15) = 0$. Zero times anything is zero, and zero is neither positive nor negative.

**2. Quotients.** Work out $-72 \div (-8)$ and $54 \div (-6)$.

1. $72 \div 8 = 9$, and the signs are the same, so $-72 \div (-8) = 9$. Check: $(-8) \times 9 = -72$. ✓
2. $54 \div 6 = 9$, and the signs are different, so $54 \div (-6) = -9$. Check: $(-6) \times (-9) = 54$. ✓

**3. Many factors.** Work out $(-2) \times 3 \times (-5) \times (-1)$.

1. Multiply the sizes: $2 \times 3 \times 5 \times 1 = 30$.
2. Count the negative factors: $-2$, $-5$ and $-1$, so three flips. Three is odd.
3. The answer is **$-30$**. (Step by step: $(-2) \times 3 = -6$, then $(-6) \times (-5) = 30$, then
   $30 \times (-1) = -30$. ✓)

**4. A money story.** Sam spends 5 dollars every week, so each week his savings change by $-5$. How did his savings
three weeks ago compare with today?

1. Three weeks ago is a time of $-3$ weeks. The change per week is $-5$.
2. Change $= (-3) \times (-5) = 15$.
3. Three weeks ago he had **15 dollars more** than today. That makes sense: he has spent 15 dollars since then.

**5. Using the sign rules backwards.** Find the missing number: $? \times (-6) = 48$.

1. Sizes: $48 \div 6 = 8$.
2. The answer 48 is positive, and $-6$ is negative, so the missing number must also be negative (same signs give a
   positive).
3. The missing number is **$-8$**. Check: $(-8) \times (-6) = 48$. ✓

## Try it

1. Work out: (a) $8 \times (-5)$ (b) $(-6) \times (-7)$ (c) $(-9) \times 4$ (d) $0 \times (-13)$
2. Work out: (a) $-56 \div 7$ (b) $-45 \div (-9)$ (c) $63 \div (-9)$
3. Fill in the pattern and say what it shows: $(-3) \times 2$, $(-3) \times 1$, $(-3) \times 0$, $(-3) \times (-1)$,
   $(-3) \times (-2)$.
4. Work out $(-1) \times (-2) \times (-3) \times (-4)$, and then the same with $\times (-5)$ on the end.
5. Find the missing numbers: (a) $? \times (-6) = -42$ (b) $-84 \div ? = 12$ (c) $? \div (-4) = -9$
6. The water in a tank goes down 4 cm every hour. Compared with now, where was the water 5 hours ago? Write it as a
   product of two integers.
7. Without multiplying it all out, say whether $(-1)^{100}$ is positive or negative. What about $(-1)^{101}$?
8. Use the distributive law, as in reason 2, to show that $(-3) \times (-5)$ must be 15. Start from
   $(-3) \times \big(5 + (-5)\big)$.

??? note "Answers"
    1. (a) $-40$ (different signs). (b) $42$ (same signs). (c) $-36$. (d) $0$.
    2. (a) $-8$, since $7 \times (-8) = -56$. (b) $5$, since $(-9) \times 5 = -45$. (c) $-7$, since
       $(-9) \times (-7) = 63$.
    3. $-6, -3, 0, 3, 6$. Each step takes away one lot of $-3$, which adds 3, so the answers go up by 3. Continuing
       the pattern past 0 gives $(-3) \times (-1) = 3$ and $(-3) \times (-2) = 6$: negative times negative is
       positive.
    4. Sizes: $1 \times 2 \times 3 \times 4 = 24$. Four negatives (even), so the answer is $24$. With $\times (-5)$
       the size is $120$ and there are five negatives (odd), so the answer is $-120$.
    5. (a) $42 \div 6 = 7$; the answer is negative and $-6$ is negative, so the missing number is positive: $7$.
       Check $7 \times (-6) = -42$. (b) $84 \div 12 = 7$; a negative divided by it gives a positive, so it is
       negative: $-7$. Check $-84 \div (-7) = 12$. (c) The missing number is $(-9) \times (-4) = 36$. Check
       $36 \div (-4) = -9$.
    6. Time $-5$ hours, change $-4$ cm per hour: $(-5) \times (-4) = 20$. Five hours ago the water was **20 cm
       higher**.
    7. $(-1)^{100}$ is 100 factors of $-1$: 100 flips, an even number, so it is $+1$. $(-1)^{101}$ has 101 flips, odd,
       so it is $-1$.
    8. $5 + (-5) = 0$, so $(-3) \times \big(5 + (-5)\big) = (-3) \times 0 = 0$. By the distributive law the left side
       is also $(-3) \times 5 + (-3) \times (-5) = -15 + (-3) \times (-5)$. So $-15 + (-3) \times (-5) = 0$, and the
       only number that works is $15$. So $(-3) \times (-5) = 15$.

## Common mistake

**Using the multiplying rule for adding.** "Two negatives make a positive" is about **multiplying** (and dividing).
For adding, $(-3) + (-5) = -8$: two debts make a bigger debt, not a gift. Ask yourself which operation you are doing
before you use a sign rule.

**Losing track of signs in a long product.** Do not try to sort out the signs as you go. Multiply the sizes, then
count the negative factors once at the end: even means positive, odd means negative.

## Where it leads

- Back: [Negative numbers](../level-4/06-negative-numbers.md) in level 4, where you added and subtracted them · Next:
  [Rational numbers](02-rational-numbers.md), where fractions get negative signs too.
- [Level 5 page](index.md) · [Numbers topic page](../index.md)
- The sign rules are used every time you expand brackets like $(x - 3)(x - 5)$: see [Algebra](../../algebra/index.md).
- The patterns of signs in sequences like $1, -2, 4, -8, \ldots$ are in [Patterns](../../patterns/index.md).
- At university, these rules are not taken on trust: they are **proved** from a short list of laws (the field
  axioms), exactly as in reason 2. See [MAT158 Unit 2 (real numbers)](../../../uoft/MAT158H1/unit02.md).
