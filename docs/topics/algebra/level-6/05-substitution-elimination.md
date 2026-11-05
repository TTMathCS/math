---
title: "Linear systems by substitution and elimination"
---

# Linear systems by substitution and elimination

*Algebra · level 6, lesson 5 of 6*

## A question to start

A farmer keeps chickens and cows. Counting the animals, she finds 30 heads. Counting again, she finds 84 legs. How
many chickens and how many cows does she have?

There are two unknowns: chickens $c$ and cows $w$. Every animal has one head, so $c + w = 30$. Chickens have 2 legs
and cows have 4, so $2c + 4w = 84$. That is a system of two equations. You could graph it, but the lines would need to
be drawn carefully, and many systems have answers that are fractions. This lesson gives two methods that find the
exact answer with algebra alone. (The farm has 18 chickens and 12 cows: worked example 1.)

Here is a clever way to see it before any algebra. Ask every animal to lift two legs. Now 60 legs are in the air
(two per head), and $84 - 60 = 24$ legs are still on the ground. Only cows have legs left standing, two each, so there
are 12 cows. That trick is **elimination** in disguise, as you will see.

## The idea

### The goal: one equation in one unknown

Both methods do the same thing: they turn two equations in two unknowns into **one equation in one unknown**, which
you already know how to solve. Once you know one unknown, you put it back into either equation to find the other.

### Method 1: substitution

**Substitution** means "putting one thing in place of another". The steps:

1. **Isolate** one letter in one of the equations (choose one that is easy, with a coefficient of 1 if possible).
2. **Substitute** that expression into the **other** equation. Now it has only one letter.
3. **Solve** it.
4. **Back-substitute**: put the answer into the isolated equation to find the other letter.
5. **Check** in both original equations.

For the farm: from $c + w = 30$, isolate $c = 30 - w$. Substitute into $2c + 4w = 84$:

$$
\begin{aligned}
2(30 - w) + 4w &= 84\\
60 - 2w + 4w &= 84\\
60 + 2w &= 84\\
w &= 12.
\end{aligned}
$$

Back-substitute: $c = 30 - 12 = 18$. Check: $18 + 12 = 30$ ✓ and $36 + 48 = 84$ ✓.

**Why it is allowed.** In the system, $c$ and $w$ stand for the **same** numbers in both equations. The first equation
says that $c$ and $30 - w$ are equal, so wherever $c$ appears in the second equation we may write $30 - w$ instead, and
the second equation stays true. It is the same as substituting a number into a formula, except that what we substitute
is an expression.

### Method 2: elimination

**Elimination** means adding or subtracting the equations so that one letter disappears ("is eliminated").

Take $3x + 2y = 16$ and $5x - 2y = 0$. The $y$ terms are $+2y$ and $-2y$. Add the left sides together, and the right
sides together:

$$(3x + 2y) + (5x - 2y) = 16 + 0 \quad\Rightarrow\quad 8x = 16 \quad\Rightarrow\quad x = 2.$$

Then $3(2) + 2y = 16$ gives $2y = 10$ and $y = 5$. Check in the second: $10 - 10 = 0$ ✓.

**Why adding equations is allowed.** Each equation is a balance. If $A = B$ and $C = D$, then putting $A$ and $C$
together on one side and $B$ and $D$ on the other keeps it balanced: $A + C = B + D$. You are adding equal amounts to
equal amounts. Subtracting works for the same reason.

### Making the coefficients match

Usually no letter cancels straight away. Then you **multiply** one or both equations by a number first, so that one
letter has the same coefficient (to subtract) or opposite coefficients (to add). Multiplying a whole equation by a
number is allowed for the usual reason: both sides are scaled equally, but remember to multiply **every** term.

$$
\begin{aligned}
2x + 3y = 13 &\quad\xrightarrow{\times 4}\quad 8x + 12y = 52\\
3x - 4y = -6 &\quad\xrightarrow{\times 3}\quad 9x - 12y = -18
\end{aligned}
$$

Now add: $17x = 34$, so $x = 2$. Then $2(2) + 3y = 13$ gives $3y = 9$, so $y = 3$. Check in the second original:
$6 - 12 = -6$ ✓. The numbers 4 and 3 were chosen so that both $y$ terms became 12: it is like finding a common
denominator.

The farm by elimination: multiply $c + w = 30$ by 2 to get $2c + 2w = 60$, and subtract it from $2c + 4w = 84$. The
$c$'s vanish: $2w = 24$, so $w = 12$. This is exactly the "lift two legs" trick: $2c + 2w = 60$ counts two legs per
animal.

### Which method to choose

Both methods always work, so the choice is about **convenience**:

| Use substitution when... | Use elimination when... |
| --- | --- |
| a letter is already alone, like $y = 2x - 3$ | both equations are in the form $ax + by = c$ |
| a letter has coefficient 1 or $-1$, so it is easy to isolate | a letter already has equal or opposite coefficients |
| you want to avoid multiplying whole equations | isolating a letter would create fractions |

For $y = 2x - 3$ and $3x + y = 12$, substitution is instant. For $3x + 2y = 7$ and $2x + 5y = 12$, isolating any
letter makes fractions, so elimination is easier.

### When there is no solution, or infinitely many

The algebra also detects the parallel and same-line cases from the last lesson.

- $x + 2y = 4$ and $2x + 4y = 10$. Double the first: $2x + 4y = 8$. Subtract from the second: $0 = 2$. Both letters
  vanished and left a **false** statement, so there is **no solution** (the lines are parallel).
- $x + 2y = 4$ and $2x + 4y = 8$. Double the first and subtract: $0 = 0$. A **true** statement with no letters means
  the equations are the same line: **infinitely many** solutions.

### Word problems with two unknowns

Many story problems are much easier with two letters than with one, because each fact in the story becomes its own
equation. Two kinds come up again and again.

**Mixtures.** Two ingredients of different strength (or price) are mixed. One equation counts the **amounts**; the
other counts the **substance** (the amount of salt, acid, money...), using amount × strength.

**Speed with a current or wind.** A boat or plane goes faster with the current than against it. If its speed in still
water is $b$ and the current is $c$, its speed is $b + c$ downstream and $b - c$ upstream. Each journey gives an
equation through distance = speed × time.

<figure class="play" data-play="graph" data-form="two"><span class="ai-tag">AI-created</span><figcaption><b>Check by graphing.</b> The crossing point is what substitution or elimination finds.</figcaption></figure>

## Worked examples

**1. The farm, by substitution.** Shown above: 18 chickens and 12 cows.

**2. Elimination by adding.** $3x + 2y = 16$ and $5x - 2y = 0$ (shown above): $x = 2$, $y = 5$.

**3. Elimination after multiplying.** $2x + 3y = 13$ and $3x - 4y = -6$ (shown above): $x = 2$, $y = 3$.

**4. A mixture.** A chemist has a 20% salt solution and a 50% salt solution. How many litres of each should she mix
to make 30 litres of a 30% solution?

| | Litres | Strength | Litres of salt |
| --- | --- | --- | --- |
| weak | $x$ | 0.20 | $0.2x$ |
| strong | $y$ | 0.50 | $0.5y$ |
| mixture | 30 | 0.30 | $0.3 \times 30 = 9$ |

- Amounts: $x + y = 30$. Salt: $0.2x + 0.5y = 9$.
- Substitute $y = 30 - x$: $0.2x + 0.5(30 - x) = 9$, so $0.2x + 15 - 0.5x = 9$, $-0.3x = -6$, $x = 20$.
- So **20 litres** of the 20% solution and **10 litres** of the 50% one. Check: salt $4 + 5 = 9$ litres ✓, which is
  30% of 30 ✓.

**5. A plane and the wind.** A plane flies 1800 km with the wind in 3 hours, and back against the wind in 4 hours.
Find the plane's speed in still air and the wind speed.

- Let $p$ be the plane's speed and $w$ the wind's, in km/h. With the wind: $1800 = 3(p + w)$, so $p + w = 600$.
  Against: $1800 = 4(p - w)$, so $p - w = 450$.
- Add: $2p = 1050$, so $p = 525$. Then $w = 600 - 525 = 75$.
- The plane flies at **525 km/h** in still air, and the wind blows at **75 km/h**. Check: $3 \times 600 = 1800$ ✓ and
  $4 \times 450 = 1800$ ✓.

**6. No solution.** Solve $x + 2y = 4$ and $2x + 4y = 10$: as shown above, elimination gives $0 = 2$, so there is no
solution.

## Try it

1. Solve by substitution: $y = 2x - 3$ and $3x + y = 12$.
2. Solve by elimination: $x + y = 15$ and $x - y = 3$.
3. Solve: $4x + 3y = 10$ and $2x - y = 0$.
4. Solve: $3x + 2y = 7$ and $2x + 5y = 12$.
5. Two adults and three children pay 34 dollars for a museum. Three adults and two children pay 36 dollars. Find the
   price of each ticket.
6. A shop mixes coffee costing 10 dollars per kilogram with coffee costing 16 dollars per kilogram, to make 12 kg
   worth 12 dollars per kilogram. How much of each does it use?
7. A boat travels 24 km downstream in 2 hours and takes 3 hours to come back. Find the boat's speed in still water and
   the speed of the current.
8. Solve $6x - 4y = 8$ and $3x - 2y = 4$. What does the answer mean for the graphs?

??? note "Answers"
    1. Substitute: $3x + (2x - 3) = 12$, so $5x = 15$ and $x = 3$. Then $y = 6 - 3 = 3$. Check: $9 + 3 = 12$ ✓.
    2. Add: $2x = 18$, so $x = 9$; then $y = 15 - 9 = 6$. Check: $9 - 6 = 3$ ✓.
    3. The second gives $y = 2x$. Substitute: $4x + 6x = 10$, so $x = 1$ and $y = 2$. Check: $4 + 6 = 10$ ✓ and
       $2 - 2 = 0$ ✓.
    4. Multiply the first by 2 and the second by 3: $6x + 4y = 14$ and $6x + 15y = 36$. Subtract: $11y = 22$, so
       $y = 2$. Then $3x + 4 = 7$, so $x = 1$. Check: $2 + 10 = 12$ ✓.
    5. $2a + 3c = 34$ and $3a + 2c = 36$. Adding gives $5a + 5c = 70$, so $a + c = 14$. Subtracting the first from
       the second gives $a - c = 2$. So $a = 8$ and $c = 6$: **8 dollars** for an adult and **6 dollars** for a child.
       Check: $16 + 18 = 34$ ✓ and $24 + 12 = 36$ ✓.
    6. $x + y = 12$ and $10x + 16y = 12 \times 12 = 144$. Substitute $x = 12 - y$: $120 - 10y + 16y = 144$, so
       $6y = 24$ and $y = 4$. **8 kg** of the cheaper coffee and **4 kg** of the dearer one. Check: $80 + 64 = 144$ ✓.
    7. Downstream speed $24 \div 2 = 12$, upstream $24 \div 3 = 8$. So $b + c = 12$ and $b - c = 8$. Adding:
       $2b = 20$, so $b = 10$ km/h and $c = 2$ km/h.
    8. Double the second: $6x - 4y = 8$, the same as the first. Subtracting gives $0 = 0$: **infinitely many**
       solutions. The two equations describe the same line, $y = \tfrac32 x - 2$.

## Common mistake

**Multiplying only one side, or only some terms.** To multiply $2x + 3y = 13$ by 4, every term changes:
$8x + 12y = 52$. Writing $8x + 12y = 13$ breaks the balance and gives a wrong answer that still "looks" fine.

**Subtracting with sign errors.** When you subtract one equation from another, every term of the second changes sign,
including negative ones: $(9x - 12y) - (8x - 12y)$ is $x + 0y$, because $-12y - (-12y) = 0$. If the signs feel risky,
multiply one equation by $-1$ and **add** instead.

## Where it leads

- Previous: [Linear systems by graphing](04-systems-graphing.md) · Next: [Linear and non-linear relations](06-linear-nonlinear.md)
- [Level 6 page](index.md) · [Algebra topic page](../index.md)
- One-unknown story problems: [Modelling with equations](../level-5/06-modelling-equations.md). Mixtures and
  percentages: [Ratio](../../ratio/index.md).
- In level 8 you solve three equations in three unknowns, as three planes meeting in space. The systematic version
  for any number of equations, row reduction, is in
  [MAT240 Unit 7 (systems and elementary operations)](../../../uoft/MAT240H1/unit07.md).
