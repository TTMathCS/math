---
title: "Infinity is not a number"
---

# Infinity is not a number

*Infinity and strange math · level 5, lesson 3 of 6*

## A question to start

Hilbert's hotel has infinitely many rooms, numbered 1, 2, 3, ..., and every room is full. Now some guests check
out. Try three different mornings:

- **Morning A:** every guest checks out. Rooms still full: none, 0.
- **Morning B:** the guests in the even rooms 2, 4, 6, ... check out. Rooms still full: 1, 3, 5, ..., infinitely
  many.
- **Morning C:** every guest in a room numbered 4 or more checks out. Rooms still full: 1, 2 and 3, so 3.

Each morning, infinitely many guests were there and infinitely many left. So each morning is "infinity minus
infinity". The answers were 0, infinity and 3. Which one is the real value of $\infty - \infty$?

None of them. This lesson explains why $\infty$ does not behave like a number, why some calculations with it have no
single answer, and why the same thing goes wrong when you divide by zero.

## The idea

### What the symbol ∞ really means

In [lesson 1](01-settling-sequences.md) we wrote "$n \to \infty$" for "$n$ grows without end". The symbol $\infty$
there is shorthand for a **process**, not a place you arrive at. When we say a sequence **tends to infinity**, we
mean:

> Name any number, however huge. From some position on, every term is bigger than it.

For example $a_n = n^2$ tends to infinity: to beat a million, go past term 1000 (since $1000^2 = 1000000$). This is
a closeness game again, with "bigger than any number you name" in place of "closer than any amount you name".

Notice that $\infty$ never appears as an actual value. Every term of every sequence is an ordinary number. That is
the key.

### If ∞ were a number, 1 would equal 0

Suppose, just to see what happens, that $\infty$ were an ordinary number that follows the usual rules of arithmetic.
In Hilbert's hotel, one new guest arrives and everyone moves up a room; the hotel is still exactly as full. So we
would want

$$\infty + 1 = \infty.$$

Now use an ordinary rule: you can subtract the same number from both sides of an equation. Subtract $\infty$ from
both sides, and you get $1 = 0$.

That is nonsense, so the supposition was wrong: $\infty$ **cannot** be a number that obeys the usual rules. This is
an example of **proof by contradiction**: assume something, follow the rules, reach something impossible, and
conclude the assumption was false (more in [Logic](../../logic/index.md)).

### ∞ − ∞ has no single answer

Mathematicians give $\infty - \infty$ a meaning through sequences. Take two sequences that **both** tend to
infinity, and look at what their **difference** does.

| First sequence $a_n$ | Second sequence $b_n$ | Difference $a_n - b_n$ | The difference tends to |
| --- | --- | --- | --- |
| $n$ | $n$ | $0$ | 0 |
| $n + 5$ | $n$ | $5$ | 5 |
| $n^2$ | $n$ | $n^2 - n = n(n - 1)$ | infinity |
| $n$ | $n^2$ | $n - n^2$ | minus infinity |
| $n + (-1)^n$ | $n$ | $(-1)^n$ | nothing (no limit) |

Every row is "infinity minus infinity", and the answers are all different. The answer depends on **how fast** each
sequence grows, which the symbol $\infty$ forgets. So $\infty - \infty$ is called an **indeterminate form**:
"indeterminate" means "not settled by the information given". It is not that the answer is unknown; there is no
single answer to know.

The hotel mornings are the same thing in picture form: which guests leave decides how many stay.

### ∞ ÷ ∞ and 0 × ∞: also no single answer

The same thing happens with division.

| $a_n$ | $b_n$ | $\dfrac{a_n}{b_n}$ | Tends to |
| --- | --- | --- | --- |
| $2n$ | $n$ | $2$ | 2 |
| $n^2$ | $n$ | $n$ | infinity |
| $n$ | $n^2$ | $\dfrac1n$ | 0 |
| $3n + 1$ | $n$ | $3 + \dfrac1n$ | 3 |

And with "something shrinking to 0, times something growing to infinity":

| Shrinks to 0 | Grows to infinity | Product | Tends to |
| --- | --- | --- | --- |
| $\dfrac1n$ | $n$ | $1$ | 1 |
| $\dfrac5n$ | $n$ | $5$ | 5 |
| $\dfrac1n$ | $n^2$ | $n$ | infinity |
| $\dfrac{1}{n^2}$ | $n$ | $\dfrac1n$ | 0 |

So $\dfrac{\infty}{\infty}$ and $0 \times \infty$ are indeterminate forms too. A shrinking number and a growing number
are in a tug of war, and either side can win, or they can draw at any value.

Some combinations **are** safe. If $a_n$ and $b_n$ both tend to infinity, then $a_n + b_n$ and $a_n \times b_n$ do too
(two huge positive numbers added or multiplied are even huger). And $a_n + 5$ tends to infinity. People sometimes
write these as "$\infty + \infty = \infty$", but always remember it is shorthand for a fact about sequences.

### Why we never divide by zero

Zero causes a similar problem, and the reason is simple once you remember what division **means**.

"$12 \div 3 = 4$" means: 4 is the number that, multiplied by 3, gives 12. Division undoes multiplication:

$$12 \div 3 = 4 \quad\text{because}\quad 4 \times 3 = 12.$$

Now try $6 \div 0$. We need a number that, multiplied by 0, gives 6. But **anything** times 0 is 0, never 6. There is
**no** such number. So $6 \div 0$ has no answer.

Try $0 \div 0$. We need a number that, multiplied by 0, gives 0. Now **every** number works: $5 \times 0 = 0$,
$-17 \times 0 = 0$, $\frac12 \times 0 = 0$. So $0 \div 0$ has every answer, which means it has no single answer.

Either way, division by zero cannot be given a value that keeps arithmetic working. We say it is **undefined**.

### Could we say 6 ÷ 0 = ∞?

It is tempting. Divide 6 by smaller and smaller numbers:

| $x$ | 1 | 0.1 | 0.01 | 0.001 | $-0.001$ | $-0.01$ |
| --- | --- | --- | --- | --- | --- | --- |
| $6 \div x$ | 6 | 60 | 600 | 6000 | $-6000$ | $-600$ |

As $x$ shrinks towards 0 from the positive side, $\dfrac6x$ grows towards infinity. But from the negative side it
plunges towards minus infinity. So "the" value at 0 would have to be both $+\infty$ and $-\infty$ at once, and we
already know $\infty$ is not a number anyway. The graph of this kind of function is the subject of
[lesson 4](04-approaching-asymptotes.md).

### 0 ÷ 0 is where calculus lives

Here is the surprise: the forms with no single answer are not useless. They are where the interesting mathematics
happens. As $x$ shrinks to 0 (but never equals 0):

- $\dfrac{x}{x} = 1$ for every such $x$, so it tends to 1.
- $\dfrac{2x}{x} = 2$, so it tends to 2.
- $\dfrac{x^2}{x} = x$, so it tends to 0.

All three are "$0 \div 0$" in the limit, and each has a perfectly good limit of its own. Calculus finds the speed of
a falling stone at one instant this way: distance gone divided by time taken, with both shrinking to 0. See
[Speed at an instant](../../change/level-6/index.md) in Change.

And one famous example. $\left(1 + \frac1n\right)^n$ is "a number close to 1, raised to a huge power", a form
written $1^\infty$. You might guess the answer is 1, since 1 to any power is 1. But:

| $n$ | 1 | 2 | 10 | 100 | 1000 | 1,000,000 |
| --- | --- | --- | --- | --- | --- | --- |
| $\left(1 + \frac1n\right)^n$ | 2 | 2.25 | 2.5937... | 2.7048... | 2.7169... | 2.71828... |

The sequence settles at a special number, about 2.71828, called $e$. It turns up all over mathematics, from
compound interest to radioactive decay. $1^\infty$ is indeterminate too.

## Worked examples

**1. Find the hidden division by zero.** Here is a "proof" that $2 = 1$.

1. Let $a = b$, with $a$ not zero.
2. Multiply both sides by $a$: $a^2 = ab$.
3. Subtract $b^2$ from both sides: $a^2 - b^2 = ab - b^2$.
4. Factor both sides: $(a + b)(a - b) = b(a - b)$.
5. Divide both sides by $(a - b)$: $a + b = b$.
6. Since $a = b$: $2b = b$, so $2 = 1$.

The broken step is 5. Since $a = b$, the bracket $a - b$ equals **0**, so step 5 divides by zero. Steps 1 to 4 are
all true (step 4 says $0 = 0$ in disguise), but step 5 is not allowed. This is why "never divide by zero" is a rule
and not just a habit.

**2. Infinity minus infinity in the hotel.** The hotel is full. The guests in rooms 11, 12, 13, ... check out. How
many guests remain?

Rooms 1 to 10 are still occupied, so **10** guests remain. Infinitely many left, from infinitely many, and 10 are
left: one more example showing $\infty - \infty$ has no fixed value.

**3. A tug of war.** Find the limit of $\dfrac{n^2 + 3n}{n^2}$.

1. Top and bottom both tend to infinity, so this is the form $\dfrac{\infty}{\infty}$. That tells us nothing yet.
2. Split it: $\dfrac{n^2 + 3n}{n^2} = \dfrac{n^2}{n^2} + \dfrac{3n}{n^2} = 1 + \dfrac3n$.
3. $\dfrac3n$ tends to 0, so the limit is **1**.

**4. Shrinking times growing.** Find the limit of $\dfrac{1}{n} \times (2n + 7)$.

The first factor shrinks to 0 and the second grows to infinity: the form $0 \times \infty$. Multiply out:
$\dfrac{2n + 7}{n} = 2 + \dfrac7n$, which tends to **2**.

## Try it

1. Explain, using multiplication, why $20 \div 5 = 4$, and why $20 \div 0$ has no answer.
2. Find two sequences, both tending to infinity, whose difference tends to 10.
3. Find the limit, if it exists: (a) $(n + 7) - (n + 2)$; (b) $\dfrac{4n}{2n}$; (c) $\dfrac{n^2}{n^3}$;
   (d) $\dfrac{n^3}{n^2}$.
4. Hilbert's hotel is full. (a) The guests in rooms numbered more than 100 check out. How many remain? (b) The guests
   in the odd rooms check out. How many remain?
5. Find the mistake: "$0 \times 1 = 0$ and $0 \times 2 = 0$, so $0 \times 1 = 0 \times 2$. Dividing both sides by 0,
   $1 = 2$."
6. Work out $\dfrac{6}{x}$ for $x = 0.01$, $x = -0.01$ and $x = 0.0001$. What happens as $x$ gets close to 0?
7. Find the limit of $\dfrac{5n - 2}{n}$ and of $\dfrac1n \times n^3$.
8. Work out $\left(1 + \frac1n\right)^n$ for $n = 1, 2, 3$ as exact fractions. Explain in your own words why the
   form $1^\infty$ does not have to give 1.

??? note "Answers"
    1. $20 \div 5 = 4$ because $4 \times 5 = 20$. For $20 \div 0$ we would need a number that gives 20 when
       multiplied by 0, but every number times 0 is 0. No number works, so there is no answer.
    2. For example $a_n = n + 10$ and $b_n = n$. Both grow without end, and $a_n - b_n = 10$ for every $n$, so the
       difference tends to 10. (Many other pairs work, such as $n^2 + 10$ and $n^2$.)
    3. (a) The difference is always 5, so the limit is **5**. (b) $\dfrac{4n}{2n} = 2$: limit **2**.
       (c) $\dfrac{n^2}{n^3} = \dfrac1n$: limit **0**. (d) $\dfrac{n^3}{n^2} = n$: tends to **infinity**, no
       limit.
    4. (a) Rooms 1 to 100 stay full: **100** guests. (b) The even rooms stay full: **infinitely many** guests.
    5. Dividing by 0 is not allowed. The true statement $0 \times 1 = 0 \times 2$ says nothing about 1 and 2; it
       is just $0 = 0$.
    6. $\dfrac{6}{0.01} = 600$, $\dfrac{6}{-0.01} = -600$, $\dfrac{6}{0.0001} = 60000$. From the positive side the
       values grow without end; from the negative side they become hugely negative. There is no single value they
       head for.
    7. $\dfrac{5n - 2}{n} = 5 - \dfrac2n$, which tends to **5**. And $\dfrac1n \times n^3 = n^2$, which tends to
       **infinity** (a $0 \times \infty$ form where infinity wins).
    8. $n = 1$: $2^1 = 2$. $n = 2$: $\left(\frac32\right)^2 = \frac94 = 2.25$. $n = 3$:
       $\left(\frac43\right)^3 = \frac{64}{27} \approx 2.370$. The base is a bit more than 1, and the power grows.
       A bit more than 1 makes the answer grow, a huge power makes it grow a lot, but the "bit more" shrinks at the
       same time. The two effects pull against each other; here they settle at $e \approx 2.718$, not at 1.

## Common mistake

**Treating ∞ like a big number.** Writing $\infty - \infty = 0$ or $\dfrac{\infty}{\infty} = 1$ looks like ordinary
arithmetic, but it is wrong: the tables above show these forms can come out as anything. Whenever you see one,
go back to the sequences and work out what they really do.

**"6 ÷ 0 = 0" or "6 ÷ 0 = 6".** A calculator says "error" for a reason. Check any answer by multiplying back:
$0 \times 0 = 0$, not 6, and $6 \times 0 = 0$, not 6. No number passes the check.

## Where it leads

- Back: [Zeno answered](02-zeno-answered.md) · Next: [Approaching asymptotes](04-approaching-asymptotes.md)
- [Level 5 page](index.md) · [Infinity topic page](../index.md)
- Proof by contradiction, used above to show $\infty$ is not a number:
  [Proof by contradiction](../../logic/level-7/04-proof-by-contradiction.md) in Logic.
- Negative numbers and the rules of arithmetic: [Numbers](../../numbers/index.md). The $0 \div 0$ limits that give
  speeds: [Change level 6](../../change/level-6/index.md).
- Counting past infinity in a way that **does** work, with new rules: [level 8](../level-8/index.md).
- On the U of T shelf, indeterminate forms and how to handle them:
  [MAT137 Unit 2: limits and continuity](../../../uoft/MAT137/unit02.md) and
  [Unit 6: applications of derivatives and limits](../../../uoft/MAT137/unit06.md).
