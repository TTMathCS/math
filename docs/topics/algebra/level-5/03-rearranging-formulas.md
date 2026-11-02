---
title: "Rearranging formulas"
---

# Rearranging formulas

*Algebra · level 5, lesson 3 of 6*

## A question to start

A weather report from the United States says it will be 86 degrees Fahrenheit today. Is that cold, or hot?

You may know the formula that turns Celsius into Fahrenheit:

$$F = \frac{9}{5}C + 32.$$

But here you know $F$ and want $C$. You could put $F = 86$ in and solve an equation: $86 = \tfrac95 C + 32$. That
works, but tomorrow the forecast will say 59 degrees and you will have to solve a new equation, and again the day
after. It would be far better to **turn the formula around once**, so that it starts "$C = \ldots$". Then every
conversion is a single calculation.

Turning a formula around is called **rearranging**, or **changing the subject**. By the end of this lesson you will
be able to do it for any formula you meet in school science. (86 °F is 30 °C, a hot day; see worked example 2.)

## The idea

### The subject of a formula

A **formula** is an equation that connects several quantities, each with its own letter. The letter standing alone on
one side is the formula's **subject**. In $F = \tfrac95 C + 32$ the subject is $F$: the formula tells you how to work
out $F$ when you know $C$.

To **make $C$ the subject** means to rewrite the formula, without changing what it says, so that $C$ stands alone on
one side.

### Rearranging is solving, with letters

Here is the key idea of the lesson. Rearranging is **exactly the same** as solving an equation. The only difference is
that some of the other quantities are letters instead of numbers. Every move you know still works, for the same
reason: whatever you do to one side, you do to the other, and the balance stays level.

Compare these two side by side:

| Solving $86 = \tfrac95 C + 32$ | Rearranging $F = \tfrac95 C + 32$ |
| --- | --- |
| subtract 32: $54 = \tfrac95 C$ | subtract 32: $F - 32 = \tfrac95 C$ |
| multiply by 5: $270 = 9C$ | multiply by 5: $5(F - 32) = 9C$ |
| divide by 9: $30 = C$ | divide by 9: $\dfrac{5(F - 32)}{9} = C$ |

The steps are identical. On the right, instead of getting one number, we get a **new formula**:

$$C = \frac{5(F - 32)}{9}.$$

Now 59 °F is $\tfrac{5 \times 27}{9} = 15$ °C, in one line.

### Undoing in reverse order

A formula is like a machine: it takes the starting quantity through a chain of operations. To find the starting
quantity again, you undo the operations **in reverse order**, like taking off your shoes before your socks.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 150" role="img" aria-label="Flow chart. Forwards: C, multiply by nine fifths, add 32, gives F. Backwards: F, subtract 32, multiply by five ninths, gives C.">
  <g font-size="14" fill="currentColor" text-anchor="middle">
    <text x="30" y="45">C</text><text x="390" y="45">F</text>
    <text x="30" y="115">C</text><text x="390" y="115">F</text>
    <text x="60" y="45">→</text><text x="210" y="45">→</text><text x="360" y="45">→</text>
    <text x="60" y="115">←</text><text x="210" y="115">←</text><text x="360" y="115">←</text>
  </g>
  <rect x="80" y="22" width="110" height="34" rx="6" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="230" y="22" width="110" height="34" rx="6" fill="#eea66f" stroke="currentColor"/>
  <rect x="80" y="92" width="110" height="34" rx="6" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="230" y="92" width="110" height="34" rx="6" fill="#eea66f" stroke="currentColor"/>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="135" y="44">× 9/5</text><text x="285" y="44">+ 32</text>
    <text x="135" y="114">× 5/9</text><text x="285" y="114">− 32</text>
    <text x="210" y="80">forwards: work out F</text><text x="210" y="145">backwards: undo in reverse order</text>
  </g>
</svg>
</div>

Going forwards, $C$ is multiplied by $\tfrac95$ first and 32 is added last. So going backwards, you undo the last
thing first: subtract 32, then multiply by $\tfrac59$ (the opposite of multiplying by $\tfrac95$).

To see the order of operations in a formula, ask "if I knew the subject's partner, what would I work out first?" In
$v = u + at$ (speed $v$ after accelerating at rate $a$ for time $t$, starting at speed $u$), to find $v$ you would
first multiply $a$ by $t$, then add $u$. So to make $t$ the subject, first subtract $u$, then divide by $a$:

$$v - u = at \quad\Rightarrow\quad t = \frac{v - u}{a}.$$

### Watch the brackets

When you divide a **whole side** by something, the whole side must be divided. So the answer above is
$t = \dfrac{v - u}{a}$, with the fraction bar under all of $v - u$. Writing $t = v - \dfrac{u}{a}$ would divide only
$u$, and that is a different formula. Check with numbers: if $u = 5$, $v = 25$ and $a = 4$, the right formula gives
$t = \tfrac{20}{4} = 5$, and indeed $5 + 4 \times 5 = 25$. ✓ The wrong one gives $25 - 1.25 = 23.75$.

### Squares and square roots

In $A = \pi r^2$ (the area of a circle) the last thing done to $r$ is squaring it, after which it is multiplied by
$\pi$. Undo in reverse: divide by $\pi$, then take the square root.

$$\frac{A}{\pi} = r^2 \quad\Rightarrow\quad r = \sqrt{\frac{A}{\pi}}.$$

Strictly, $r^2 = \tfrac{A}{\pi}$ has two solutions, a positive and a negative square root. But $r$ is a length, so
only the positive one makes sense. Always ask what the letters **mean**: it tells you which answers to keep.

### When the subject appears twice

In $P = 2l + 2w$ (the perimeter of a rectangle) the subject $w$ appears once, so it is straightforward:
$P - 2l = 2w$, so $w = \dfrac{P - 2l}{2}$.

But sometimes the letter you want appears in **two places**, as in $ax + b = cx + d$ when you want $x$. Then you
gather all the $x$ terms on one side, exactly as in the last lesson, and use the distributive law **backwards** to pull
$x$ out as a common factor:

$$
\begin{aligned}
ax + b &= cx + d\\
ax - cx &= d - b\\
x(a - c) &= d - b\\
x &= \frac{d - b}{a - c}.
\end{aligned}
$$

### Things you must not divide by

The last line divided by $a - c$. That is only allowed if $a - c$ is not zero, because dividing by zero has no
meaning. So the full answer is "$x = \tfrac{d - b}{a - c}$, as long as $a \ne c$". The same caution applies to
$t = \tfrac{v - u}{a}$: if $a = 0$ the speed never changes, and there is no time to find. Good mathematicians note
these restrictions, and they usually match something real about the situation.

### Check by putting numbers in

A rearranged formula can always be tested. Pick easy numbers that fit the **original** formula, and see whether the
new one gives them back. For $C = \tfrac{5(F - 32)}{9}$: water boils at 100 °C, which is 212 °F, and
$\tfrac{5 \times 180}{9} = 100$. ✓

## Worked examples

**1. The size of Mars.** Mars's equator is about 21,340 km around. Make $r$ the subject of $C = 2\pi r$ and find
the radius of Mars at its equator.

- The formula multiplies $r$ by $2\pi$. Undo it by dividing both sides by $2\pi$: $r = \dfrac{C}{2\pi}$.
- $r = \dfrac{21340}{2\pi} \approx 3396$ km. That is a bit over half of Earth's radius (about 6378 km at the
  equator).

**2. The forecast.** Make $C$ the subject of $F = \tfrac95 C + 32$, then convert 86 °F and −40 °F.

- From the table above, $C = \dfrac{5(F - 32)}{9}$.
- 86 °F: $C = \dfrac{5 \times 54}{9} = \dfrac{270}{9} = 30$ °C. A hot summer day.
- −40 °F: $C = \dfrac{5 \times (-72)}{9} = -40$ °C. The one temperature where both scales agree.

**3. A speed formula.** Make $t$ the subject of $v = u + at$. A cyclist speeds up from 5 m/s to 25 m/s with
acceleration 4 m/s every second. How long does it take?

- Subtract $u$: $v - u = at$. Divide by $a$: $t = \dfrac{v - u}{a}$.
- $t = \dfrac{25 - 5}{4} = 5$ seconds. Check: $5 + 4 \times 5 = 25$. ✓

**4. Two steps with a fraction.** Make $h$ the subject of $A = \tfrac12 bh$ (the area of a triangle).

- Multiply both sides by 2: $2A = bh$.
- Divide both sides by $b$: $h = \dfrac{2A}{b}$.
- Check: a triangle with base 6 and height 4 has area 12, and $\tfrac{2 \times 12}{6} = 4$. ✓

**5. The subject twice.** Make $x$ the subject of $ax = bx + c$.

- Subtract $bx$ from both sides: $ax - bx = c$.
- Factor out $x$: $x(a - b) = c$.
- Divide by $a - b$ (allowed if $a \ne b$): $x = \dfrac{c}{a - b}$.
- Check with $a = 5$, $b = 2$, $c = 12$: $x = \tfrac{12}{3} = 4$, and indeed $5 \times 4 = 2 \times 4 + 12$. ✓

## Try it

1. Make $s$ the subject of $P = 4s$ (the perimeter of a square).
2. Make $x$ the subject of $y = 3x - 7$.
3. Make $b$ the subject of $A = \tfrac12 bh$.
4. Make $l$ the subject of $P = 2l + 2w$, then find $l$ when $P = 30$ and $w = 4$.
5. Use the formulas in this lesson to convert 20 °C into Fahrenheit and 50 °F into Celsius.
6. The distance travelled while speeding up steadily is $s = \tfrac12(u + v)t$. Make $v$ the subject.
7. Make $r$ the subject of $V = \pi r^2 h$ (the volume of a cylinder).
8. Make $x$ the subject of $5x + a = 2x + b$. What is $x$ when $a = 1$ and $b = 13$?

??? note "Answers"
    1. Divide by 4: $s = \dfrac{P}{4}$.
    2. Add 7: $y + 7 = 3x$. Divide by 3: $x = \dfrac{y + 7}{3}$. Check with $x = 2$: $y = -1$, and $\tfrac{-1 + 7}{3} = 2$. ✓
    3. Multiply by 2: $2A = bh$. Divide by $h$: $b = \dfrac{2A}{h}$.
    4. Subtract $2w$: $P - 2w = 2l$. Divide by 2: $l = \dfrac{P - 2w}{2}$ (which is also $\tfrac{P}{2} - w$). With
       $P = 30$, $w = 4$: $l = \tfrac{22}{2} = 11$. Check: $2 \times 11 + 2 \times 4 = 30$. ✓
    5. $F = \tfrac95 \times 20 + 32 = 36 + 32 = 68$ °F. $C = \tfrac{5(50 - 32)}{9} = \tfrac{90}{9} = 10$ °C.
    6. Multiply by 2: $2s = (u + v)t$. Divide by $t$: $\tfrac{2s}{t} = u + v$. Subtract $u$:
       $v = \dfrac{2s}{t} - u$. Check with $u = 2$, $v = 6$, $t = 3$: $s = \tfrac12 \times 8 \times 3 = 12$, and
       $\tfrac{24}{3} - 2 = 6$. ✓
    7. Divide by $\pi h$: $r^2 = \dfrac{V}{\pi h}$. Take the positive square root (a radius is a length):
       $r = \sqrt{\dfrac{V}{\pi h}}$.
    8. Subtract $2x$ and $a$: $3x = b - a$, so $x = \dfrac{b - a}{3}$. With $a = 1$, $b = 13$: $x = 4$. Check:
       $20 + 1 = 21$ and $8 + 13 = 21$. ✓

## Common mistake

**Dividing only part of a side.** From $v - u = at$, dividing by $a$ gives $t = \tfrac{v - u}{a}$, with the whole of
$v - u$ on top. Writing $v - \tfrac{u}{a}$ is a different formula. The fix: put brackets round the whole side before
you divide, $t = (v - u) \div a$, and then write it as a fraction.

**Undoing in the wrong order.** For $F = \tfrac95 C + 32$, dividing by $\tfrac95$ first and then subtracting 32 gives
$C = \tfrac59 F - 32$, which turns 212 °F into about 85.8 °C instead of 100 °C. The 32 was added **last**, so it must be
taken away **first**. Testing with a pair of numbers you know, like boiling water, catches this at once.

## Where it leads

- Previous: [Equations with brackets and x on both sides](02-brackets-both-sides.md) · Next:
  [Linear relations](04-linear-relations.md)
- [Level 5 page](index.md) · [Algebra topic page](../index.md)
- Filling numbers into formulas came first, in [Substitution](../level-4/02-substitution.md).
- The circle formulas come from [Geometry](../../geometry/level-6/04-pi-circumference.md); speed and
  acceleration belong to [Change](../../change/index.md).
- Undoing a formula is the first step towards **inverse functions** in level 7.
