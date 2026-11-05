---
title: "Coding with conditions"
---

# Coding with conditions

*Logic and puzzles · level 4, lesson 5 of 6*

## A question to start

A museum's ticket machine runs this program. It asks for your age, then:

```text
if age < 13
    price is 3 dollars
else if age < 5
    price is 0 dollars
else if age >= 65
    price is 4 dollars
else
    price is 8 dollars
```

The museum wants children under 5 to get in free. A family arrives with a 3-year-old, and the machine charges 3
dollars. Nobody under 5 ever gets in free. Why? The fix needs no new lines, only a change of order. Can you see it?

<figure class="sketch"><span class="ai-tag">AI-created</span><svg viewBox="0 0 640 400" role="img" aria-labelledby="sk-m-ticket-t"><title id="sk-m-ticket-t">The ticket machine's chain of questions: a 3-year-old answers yes to age under 13 and pays 3 dollars, so the free ticket for under 5 is never reached</title><defs><filter id="sk-m-ticket-pen"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="3.2"/></filter><filter id="sk-m-ticket-paper"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="7"/><feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 .10 0"/></filter><pattern id="sk-m-ticket-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="7" stroke="#8a4a2a" stroke-width="1.1" opacity=".55"/></pattern><pattern id="sk-m-ticket-dots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r="1" fill="#8a4a2a" opacity=".5"/><circle cx="6.5" cy="7" r=".8" fill="#8a4a2a" opacity=".4"/></pattern><marker id="sk-m-ticket-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L9 5L1 9" fill="none" stroke="#3a2a1e" stroke-width="1.6" stroke-linecap="round"/></marker></defs><rect width="640" height="400" filter="url(#sk-m-ticket-paper)"/><g filter="url(#sk-m-ticket-pen)"><text x="30" y="44" class="h">A 3-year-old at the ticket machine</text><path class="p gold" d="M60 90 L240 90 L240 134 L60 134Z"/><text x="150" y="118" text-anchor="middle" class="l">age < 13 ?</text><path class="p " d="M240 112 L330 112" marker-end="url(#sk-m-ticket-ah)"/><text x="286" y="104" text-anchor="middle" class="s">yes</text><text x="340" y="118" class="b">3 dollars</text><path class="p f" d="M150 134 L150 178" marker-end="url(#sk-m-ticket-ah)"/><text x="160" y="160" class="s">no</text><path class="p room" d="M60 180 L240 180 L240 224 L60 224Z"/><text x="150" y="208" text-anchor="middle" class="l">age < 5 ?</text><path class="p f" d="M240 202 L330 202" marker-end="url(#sk-m-ticket-ah)"/><text x="286" y="194" text-anchor="middle" class="s">yes</text><text x="340" y="208" class="l">0 dollars</text><path class="p f" d="M150 224 L150 268" marker-end="url(#sk-m-ticket-ah)"/><text x="160" y="250" class="s">no</text><path class="p room" d="M60 270 L240 270 L240 314 L60 314Z"/><text x="150" y="298" text-anchor="middle" class="l">age >= 65 ?</text><path class="p f" d="M240 292 L330 292" marker-end="url(#sk-m-ticket-ah)"/><text x="286" y="284" text-anchor="middle" class="s">yes</text><text x="340" y="298" class="l">4 dollars</text><path class="p f" d="M150 314 L150 358" marker-end="url(#sk-m-ticket-ah)"/><text x="160" y="340" class="s">no</text><text x="150" y="384" text-anchor="middle" class="l">8 dollars</text><text x="430" y="140" class="s">Age 3 stops at the first</text><text x="430" y="160" class="s">question: 3 dollars.</text><text x="430" y="210" class="s">Anyone under 5 is already</text><text x="430" y="230" class="s">under 13, so the free ticket</text><text x="430" y="250" class="s">can never be reached.</text><text x="430" y="300" class="s">Order matters: ask the</text><text x="430" y="320" class="s">narrow question first.</text></g></svg><figcaption>Sketched for this page from the program above.</figcaption></figure>

## The idea

### Conditions are statements

In [level 3](../level-3/04-coding-with-loops.md) code ran straight down, or round and round in loops. Now code makes
**choices**. A choice depends on a **condition**: a statement that is either true or false when the program reaches
it, like `age < 13` or `n is even`. Conditions are exactly the statements of [lesson 1](01-statements-letters.md), and
they can be joined with **and**, **or** and **not** using the same truth tables.

### If

```text
if temperature < 0
    say "wear a hat"
```

If the condition is true, the indented lines (the **body**) run. If it is false, they are skipped. Either way the
program then carries on below.

### If ... else

```text
if n mod 2 = 0
    say "even"
else
    say "odd"
```

Here exactly **one** of the two bodies runs: the first if the condition is true, the second if it is false. They can
never both run, and one of them always runs. That is the logic of a statement and its negation: exactly one is true.

`n mod 2` means "the **remainder** when $n$ is divided by 2". An even number leaves remainder 0; an odd number leaves
remainder 1. So `n mod 2 = 0` is the computer's way of asking "is $n$ even?". (More on remainders in
[Number theory](../../number-theory/level-5/01-remainders.md).)

### A chain: if ... else if ... else

```text
if score >= 90
    grade is "A"
else if score >= 75
    grade is "B"
else if score >= 50
    grade is "C"
else
    grade is "try again"
```

The computer checks the conditions **from the top**, and runs the body of the **first** one that is true. Then it
skips all the rest of the chain. If none is true, the `else` body runs.

So a score of 95 gets "A". It is also at least 75 and at least 50, but those lines are never reached. Order matters!

That explains the ticket machine. A 3-year-old reaches `age < 13` first. It is true, so the price is 3 dollars, and
the `age < 5` line is never checked. In fact `age < 5` can **never** be reached as true: anyone under 5 is also under
13 and is caught first. The fix is to check the **narrower** condition first:

```text
if age < 5
    price is 0 dollars
else if age < 13
    price is 3 dollars
else if age >= 65
    price is 4 dollars
else
    price is 8 dollars
```

### Nested conditions

A condition can sit inside the body of another one. This is called **nesting**, just like loops inside loops.

```text
if a > b
    if a > c
        biggest is a
    else
        biggest is c
else
    if b > c
        biggest is b
    else
        biggest is c
```

This finds the biggest of three numbers $a$, $b$, $c$ (when they are all different). The outer `if` decides between
$a$ and $b$; the inner one compares the winner with $c$.

### Tracing by hand

To check code, **trace** it: pick some input values, follow the lines one by one, and write down what each condition
gives (T or F) and which line runs.

Trace the biggest-number code with $a = 4$, $b = 9$, $c = 7$:

| Line | Condition | Value | What happens |
| --- | --- | --- | --- |
| `if a > b` | $4 > 9$ | F | go to the outer `else` |
| `if b > c` | $9 > 7$ | T | biggest is $b$, which is **9** |

### Testing the edges

The best inputs to test are the ones at the **edges**, where a condition just changes from true to false: an age of
exactly 5, 13 or 65, a score of exactly 90. Many bugs hide there. Is a 13-year-old a child? With `age < 13`, no. If the
museum meant "13 and under", the code should say `age <= 13`.

## Worked examples

**1. Classifying triangles by their sides.** Given three lengths $a$, $b$, $c$, say whether they make an equilateral,
isosceles or scalene triangle, or no triangle at all.

First, not every three lengths make a triangle. Sides 2, 3 and 7 cannot meet: the two short sides together (5) do not
reach across the long one (7). The rule is that each side must be **shorter than the other two added together**. (This
is the **triangle inequality**; more in [Geometry](../../geometry/index.md).)

```text
if a >= b + c or b >= a + c or c >= a + b
    say "not a triangle"
else if a = b and b = c
    say "equilateral"
else if a = b or b = c or a = c
    say "isosceles"
else
    say "scalene"
```

Trace it with three inputs.

- $5, 5, 5$: the first condition is F ($5 \ge 10$ is false, three times). The second is T. **Equilateral.**
- $3, 5, 3$: the first is F ($3 \ge 8$, $5 \ge 6$, $3 \ge 8$ are all false). The second is F ($a = b$ is false). The
  third: $a = c$ is true, so the **or** is T. **Isosceles.**
- $4, 4, 8$: the first: $c \ge a + b$ is $8 \ge 8$, true. **Not a triangle** (the shape would be squashed flat).

Why must "equilateral" come before "isosceles"? An equilateral triangle **also** passes the isosceles test (it has two
equal sides, and more). If the isosceles line came first, $5, 5, 5$ would be called isosceles, and the equilateral line
could never be reached: the same bug as the ticket machine.

**2. Leap years.** The calendar rule is: a year is a **leap year** if it is divisible by 4, **except** years divisible
by 100, which are not, **except** years divisible by 400, which are. As one condition:

```text
if year mod 4 = 0 and (year mod 100 ≠ 0 or year mod 400 = 0)
    say "leap year"
else
    say "not a leap year"
```

Trace it.

| Year | `mod 4 = 0` | `mod 100 ≠ 0` | `mod 400 = 0` | bracket (or) | whole (and) |
| --- | --- | --- | --- | --- | --- |
| 2024 | T | T | F | T | **leap** |
| 2023 | F | T | F | T | **not leap** |
| 1900 | T | F | F | F | **not leap** |
| 2000 | T | F | T | T | **leap** |

The brackets matter: they say the **or** is worked out first, then the **and**, just as in a truth table.

**3. A loop with a condition inside.** Count from 1 to 15. For multiples of 3 say "Fizz", for multiples of 5 say "Buzz",
for multiples of both say "FizzBuzz", and otherwise say the number.

```text
repeat for n from 1 to 15
    if n mod 15 = 0
        say "FizzBuzz"
    else if n mod 3 = 0
        say "Fizz"
    else if n mod 5 = 0
        say "Buzz"
    else
        say n
```

It says: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz.

The `mod 15` test must come first. A number divisible by both 3 and 5 is divisible by 15 (because 3 and 5 share no
factor). If the `mod 3` line came first, 15 would just say "Fizz".

## Try it

1. What does this code say when $n = 7$? When $n = 12$?

    ```text
    if n mod 2 = 0
        say "even"
    else
        say "odd"
    ```

2. Trace the grade code above for scores of 75, 74 and 50. Which grade does each get?
3. Write code that says "positive", "negative" or "zero" for a number $x$.
4. Trace the biggest-number code with $a = 8$, $b = 3$, $c = 10$. Which lines run?
5. Use the triangle code: what does it say for (a) $6, 6, 11$; (b) $3, 4, 5$; (c) $2, 3, 7$?
6. Use the leap-year condition to decide whether 2100 and 2400 are leap years. Show the T and F values.
7. Find the bug: this code should say "teen" for ages 13 to 19.

    ```text
    if age > 13 and age < 19
        say "teen"
    ```

8. The biggest-number code assumes $a$, $b$, $c$ are all different. What does it say for $a = 5$, $b = 5$, $c = 2$? Is
   the answer still correct?

??? note "Answers"
    1. $n = 7$: $7 \bmod 2 = 1$, so the condition is F and it says **"odd"**. $n = 12$: $12 \bmod 2 = 0$, so it says
       **"even"**.
    2. 75: $75 \ge 90$ is F, $75 \ge 75$ is T, so **"B"**. 74: F, F ($74 \ge 75$ is false), then $74 \ge 50$ is T, so
       **"C"**. 50: F, F, then $50 \ge 50$ is T, so **"C"**.
    3. One way:

        ```text
        if x > 0
            say "positive"
        else if x < 0
            say "negative"
        else
            say "zero"
        ```

        If both tests fail, $x$ is not more than 0 and not less than 0, so it must be 0.
    4. `if a > b`: $8 > 3$ is T, so go into the first part. `if a > c`: $8 > 10$ is F, so the inner `else` runs:
       biggest is $c$, **10**.
    5. (a) $6 + 6 = 12 > 11$ and the others are fine, so it is a triangle; $a = b$ but $b \ne c$, so not equilateral;
       $a = b$, so **isosceles**. (b) $3 + 4 = 7 > 5$, so a triangle; no two sides equal, so **scalene** (it is the
       right triangle from the last lesson). (c) $2 + 3 = 5$, and $7 \ge 5$, so **not a triangle**.
    6. 2100: `mod 4 = 0` is T; `mod 100 ≠ 0` is F; `mod 400 = 0` is F (2100 is not a multiple of 400); the bracket is
       F, so the whole is F: **not a leap year**. 2400: T; F; T (2400 = 6 × 400); the bracket is T, so the whole is T:
       **leap year**.
    7. The edges are wrong. `age > 13` is false for 13, and `age < 19` is false for 19, so 13- and 19-year-olds are not
       called teens. Fix: `if age >= 13 and age <= 19`.
    8. `if a > b`: $5 > 5$ is F, so go to the outer `else`. `if b > c`: $5 > 2$ is T, so biggest is $b$, which is 5.
       The answer **5 is still correct** (both $a$ and $b$ are biggest). It is worth checking such "equal" cases: they
       are edges too.

## Common mistake

**Putting a wide condition before a narrow one.** In an `else if` chain, only the **first** true condition counts.
If a wider test (`age < 13`, isosceles, `mod 3`) comes before a narrower one inside it (`age < 5`, equilateral,
`mod 15`), the narrower one is never reached. Put the most special case first.

**Getting the edges wrong.** `<` and `<=` differ in exactly one value, and that value is usually the one in the
question ("13 and over", "at least 50"). Test the edge on purpose.

## Where it leads

- Back: [Converse, inverse and contrapositive](04-converse-contrapositive.md) · Next: [Winning strategies](06-nim-strategy.md).
- [Level 4 page](index.md) · [Logic topic page](../index.md)
- Loops, the other half of programming: [Coding with loops](../level-3/04-coding-with-loops.md).
- Flowcharts and algorithms, and how fast they run: [level 6](../level-6/index.md).
- Remainders and "mod": [Number theory](../../number-theory/index.md). Triangles by their sides:
  [Geometry: triangles by sides and by angles](../../geometry/level-3/04-triangles-sides-angles.md).
- On the U of T shelf, if, elif and else in Python are in [CSC108 Unit 2: control flow](../../../uoft/CSC108H1/unit02.md).
