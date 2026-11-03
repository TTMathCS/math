# 2. Equations and inequalities

*An equation is a question: which numbers make this statement true? An inequality asks the same question about
"less than" and "greater than". This chapter is about answering such questions for the simplest and most useful
kind, the linear ones, and about the moves that answer them: doing the same thing to both sides. It covers every
case (one answer, no answer, every number an answer), turning formulas round, turning stories into equations, the
famous sign flip for inequalities and the reason for it, and absolute values. It ends by asking why the methods
are safe at all, and finding the exact moves that are not.*

!!! abstract "In this chapter"
    **You will learn:**

    - what it means to solve an equation, and which moves keep the solutions unchanged
    - how to solve any linear equation, and how to recognise when there is no solution or infinitely many
    - how to rearrange a formula to make any letter the subject
    - a reliable method for turning a word problem into an equation
    - how to solve inequalities, and why multiplying by a negative number flips the sign
    - how to handle absolute values in equations and inequalities, and the triangle inequality
    - why some moves (squaring, multiplying by an expression) can add false solutions or lose true ones

    **You need:** [Chapter 1](01-The-Language-of-Algebra.md) (the laws of arithmetic, expanding, substitution).
    For a gentler version, see the Topics lessons
    [Balance scales](../../topics/algebra/level-1/02-balance-scales.md),
    [Solving equations](../../topics/algebra/level-4/04-solving-equations.md),
    [Brackets on both sides](../../topics/algebra/level-5/02-brackets-both-sides.md),
    [Rearranging formulas](../../topics/algebra/level-5/03-rearranging-formulas.md),
    [Equations from stories](../../topics/algebra/level-4/05-equations-from-stories.md) and
    [Solving inequalities](../../topics/algebra/level-5/05-solving-inequalities.md).

    **Levels:** 2.1 to 2.4 are beginner; 2.5 and 2.6 are intermediate; 2.7 is intermediate to advanced.

## 2.1 The balance idea

A shopkeeper's balance has a bag of unknown weight and three 1 kg weights on the left pan, and eight 1 kg weights
on the right. The pans are level. How heavy is the bag?

Take three 1 kg weights off each pan. The pans stay level, and now the bag balances five weights: it weighs 5 kg.
In symbols, with $x$ for the bag's weight, we went from $x + 3 = 8$ to $x = 5$ by subtracting 3 from both sides.

That is the whole idea of solving equations. An equation $A = B$ is a balance. **Whatever you do to one side, do to
the other, and the balance is kept.** The aim is to reach a balance so simple that the answer can be read off.

### The words

- An **equation in $x$** is a statement $A = B$ where $A$ and $B$ are expressions that may contain $x$.
- A **solution** (or **root**) is a number that makes the statement true when substituted for $x$. The number 5 is
  a solution of $x + 3 = 8$, since $5 + 3 = 8$; the number 4 is not.
- The **solution set** is the collection of all solutions. To **solve** an equation is to find its solution set:
  all the solutions, and a reason that there are no others.
- Two equations are **equivalent** if they have exactly the same solution set. $x + 3 = 8$ and $x = 5$ are
  equivalent.

Solving is therefore a chain of equivalent equations, ending in one whose solutions are obvious:

$$x + 3 = 8 \iff x = 5.$$

The arrow $\iff$ ("if and only if") says that each statement implies the other: any number making the first true
makes the second true, and any number making the second true makes the first true. Section 2.7 proves that the
standard moves really give equivalent equations, and shows the moves that do not.

### The safe moves

1. **Add or subtract the same number (or expression) on both sides.**
2. **Multiply or divide both sides by the same nonzero number.**
3. **Rewrite either side** by the laws of Chapter 1 (expand, collect like terms), which does not change its value.

Move 1 is the balance: equal amounts off both pans. Move 2 is the balance too: if two bags balance, three copies of
each balance. The word "nonzero" in move 2 matters. Multiplying both sides of $x = 5$ by 0 gives $0 = 0$, which is
true for every $x$: the information is destroyed.

## 2.2 Linear equations

A **linear equation** in $x$ is one that can be rewritten as

$$ax = b$$

for numbers $a$ and $b$. "Linear" because, as [Chapter 3](03-Lines-and-Linear-Systems.md) shows, such expressions
draw straight lines. The letter $x$ appears only to the first power, never squared, never under a root, never in a
denominator.

**Example 1.** Solve $3x + 7 = 22$.

$$
\begin{aligned}
3x + 7 &= 22 \\
3x &= 15 &&\text{(subtract 7 from both sides)} \\
x &= 5 &&\text{(divide both sides by 3)}
\end{aligned}
$$

**Check:** $3(5) + 7 = 22$. ✓

**Example 2.** Solve $5(x - 2) = 3x + 4$.

Expand: $5x - 10 = 3x + 4$. Subtract $3x$ from both sides: $2x - 10 = 4$. Add 10: $2x = 14$. Divide by 2: $x = 7$.
**Check:** $5(5) = 25$ and $21 + 4 = 25$. ✓

The strategy is always the same: **expand brackets, gather the $x$ terms on one side and the numbers on the other,
then divide by the coefficient of $x$.**

**Example 3 (fractions).** Solve $\dfrac{x}{3} + \dfrac{x - 1}{4} = 5$.

Fractions are easiest removed at the start. Multiply both sides by 12, the least common multiple of the
denominators, and multiply **every** term:

$$12 \cdot \frac{x}{3} + 12 \cdot \frac{x - 1}{4} = 60 \quad\Longrightarrow\quad 4x + 3(x - 1) = 60.$$

The bracket around $x - 1$ is essential: the 3 multiplies the whole numerator. Then $7x - 3 = 60$, $7x = 63$,
$x = 9$. **Check:** $\frac{9}{3} + \frac{8}{4} = 3 + 2 = 5$. ✓

**Example 4 (decimals).** Solve $0.2x + 1.5 = 0.05x + 2.1$.

Multiply by 100: $20x + 150 = 5x + 210$, so $15x = 60$ and $x = 4$. **Check:** $0.8 + 1.5 = 2.3$ and
$0.2 + 2.1 = 2.3$. ✓

### All the cases

Once an equation is in the form $ax = b$, there are exactly three possibilities.

- **If $a \neq 0$**, there is exactly one solution, $x = \frac{b}{a}$. (Dividing by $a$ is a safe move.)
- **If $a = 0$ and $b \neq 0$**, the equation says $0 = b$, which is false whatever $x$ is. There is **no
  solution**; the solution set is empty, written $\varnothing$.
- **If $a = 0$ and $b = 0$**, the equation says $0 = 0$, true whatever $x$ is. **Every number** is a solution; the
  original equation was an identity in disguise.

**Example 5.** Solve $2(x + 3) = 2x + 5$.

Expanding, $2x + 6 = 2x + 5$. Subtract $2x$: $6 = 5$. False, so there is no solution. Read it as a balance: the
left side is always exactly one more than the right side, so they can never be equal.

**Example 6.** Solve $3(x - 2) + x = 4x - 6$.

Expanding, $4x - 6 = 4x - 6$. Subtracting $4x$ leaves $-6 = -6$, always true. Every real number is a solution.

**Example 7 (a parameter).** For each value of the number $k$, solve $(k - 2)x = k^2 - 4$.

If $k \neq 2$, divide by $k - 2$; since $k^2 - 4 = (k - 2)(k + 2)$, the solution is $x = k + 2$. If $k = 2$, the
equation is $0 \cdot x = 0$, and every $x$ is a solution. The answer depends on the parameter, and a full answer
gives every case. This kind of reasoning, splitting into cases according to whether you are dividing by zero,
comes back in linear systems ([Chapter 3](03-Lines-and-Linear-Systems.md)) and in linear algebra.

## 2.3 Rearranging formulas

A formula like $v = u + at$ (final speed equals starting speed plus acceleration times time) is written to compute
$v$; we say $v$ is the **subject**. To compute a different letter, make it the subject by treating it as the
unknown and the other letters as numbers. The safe moves are the same.

**Example 8.** Make $t$ the subject of $v = u + at$.

Subtract $u$: $v - u = at$. Divide by $a$ (allowed if $a \neq 0$): $t = \dfrac{v - u}{a}$.

**Example 9.** Make $C$ the subject of $F = \frac{9}{5}C + 32$.

Subtract 32: $F - 32 = \frac{9}{5}C$. Multiply by $\frac{5}{9}$: $C = \frac{5}{9}(F - 32)$. **Check** at the one
temperature where the two scales agree: if $F = -40$, then $C = \frac{5}{9}(-72) = -40$. ✓

**Example 10 (the unknown in a denominator).** A thin lens with focal length $f$ makes an image of an object at
distance $u$ at distance $v$, where $\dfrac{1}{f} = \dfrac{1}{u} + \dfrac{1}{v}$. Make $v$ the subject.

Subtract $\frac{1}{u}$: $\frac{1}{v} = \frac{1}{f} - \frac{1}{u} = \frac{u - f}{uf}$. Take reciprocals of both
sides (allowed when both are nonzero): $v = \dfrac{uf}{u - f}$. **Check** with $f = 10$, $u = 30$:
$v = \frac{300}{20} = 15$, and $\frac{1}{30} + \frac{1}{15} = \frac{3}{30} = \frac{1}{10}$. ✓

**Example 11 (the unknown appears twice).** Make $x$ the subject of $y = \dfrac{x + 1}{x - 2}$.

Multiply by $x - 2$: $y(x - 2) = x + 1$, so $yx - 2y = x + 1$. Gather the $x$ terms: $yx - x = 2y + 1$. Factor out
$x$: $x(y - 1) = 2y + 1$. Divide (if $y \neq 1$): $x = \dfrac{2y + 1}{y - 1}$. The key move is **collecting every
$x$ on one side and factoring it out**. You have just found an inverse function, the subject of
[Chapter 6](06-Functions.md).

**Example 12 (Kepler's third law).** For a planet going round the Sun, the time $T$ for one orbit (in Earth years)
and the average distance $a$ from the Sun (in astronomical units, Earth's average distance) satisfy, to a good
approximation, $T^2 = a^3$. Make $a$ the subject, and find Mars's distance from its year of about 1.881 Earth
years.

Take cube roots: $a = \sqrt[3]{T^2}$, which [Chapter 7](07-Exponents-and-Logarithms.md) will write as $T^{2/3}$.
For Mars, $T^2 \approx 3.538$ and $a \approx \sqrt[3]{3.538} \approx 1.524$. Mars orbits about one and a half times
as far from the Sun as Earth does. (Johannes Kepler found this law in 1618 by searching through tables of
planetary data.)

## 2.4 Word problems

Most equations in real life arrive as words. The translation is a skill of its own, and it improves with a method.
The one below is close to the four steps in George Pólya's *How to Solve It* (1945).

1. **Understand.** What is asked? What is known? Draw a picture or a table if anything moves or mixes.
2. **Name.** Choose a letter for one unknown, and write what it means, with units: "let $t$ be the time in hours".
   Express every other unknown in terms of it.
3. **Write the equation.** Find two different ways of describing the same quantity, and set them equal.
4. **Solve and check against the story,** not just against the equation; the equation itself could be wrong.

**Example 13 (consecutive numbers).** Three consecutive even numbers add up to 138. What are they?

Let the middle one be $n$; the others are $n - 2$ and $n + 2$. Then $3n = 138$, so $n = 46$, and the numbers are
44, 46, 48. **Check:** $44 + 46 + 48 = 138$, all even, consecutive. ✓

**Example 14 (ages).** A mother is four times as old as her son. In 20 years she will be twice as old as him. How
old are they?

Let the son be $s$ years old; the mother is $4s$. In 20 years they will be $s + 20$ and $4s + 20$, so
$4s + 20 = 2(s + 20)$. Then $4s + 20 = 2s + 40$, $2s = 20$, $s = 10$. The son is 10, the mother 40.
**Check:** in 20 years, 30 and 60, and $60 = 2 \times 30$. ✓

**Example 15 (motion).** A truck leaves a depot at 60 km/h. An hour later a car leaves the same depot along the
same road at 80 km/h. When does the car catch up?

Let $t$ be the car's time in hours when it catches up. The truck has then driven $t + 1$ hours. Distance is speed
times time, and at the catch-up point the distances are equal: $80t = 60(t + 1)$. So $20t = 60$ and $t = 3$. The
car catches up 3 hours after it leaves, 240 km from the depot. **Check:** truck $60 \times 4 = 240$. ✓

**Example 16 (mixture).** How many litres of 30% acid solution must be added to 10 litres of 50% solution to make a
35% solution?

Let $x$ be the litres of 30% solution. Count the pure acid two ways. Before mixing: $0.30x + 0.50(10)$. After: the
mixture has $x + 10$ litres at 35%, so $0.35(x + 10)$ litres of acid. Setting them equal,
$0.3x + 5 = 0.35x + 3.5$, so $1.5 = 0.05x$ and $x = 30$. **Check:** acid $9 + 5 = 14$ litres in 40 litres, which is
35%. ✓

**Example 17 (work).** One pipe fills a tank in 6 hours and another in 3 hours. How long do they take together?

Rates add, not times. The first pipe fills $\frac{1}{6}$ of the tank per hour and the second $\frac{1}{3}$. In $t$
hours together they fill $\frac{t}{6} + \frac{t}{3}$ of the tank, and we need this to be one whole tank:
$\frac{t}{6} + \frac{t}{3} = 1$. Multiply by 6: $t + 2t = 6$, so $t = 2$ hours.

**Example 18 (percent).** After a 20% discount a jacket costs 72 dollars. What was the original price?

Let $p$ be the original price. The discounted price is $p - 0.2p = 0.8p$, so $0.8p = 72$ and $p = 90$ dollars. The
tempting shortcut "add 20% back on", $72 \times 1.2 = 86.40$, is wrong, because the 20% was taken from 90, not
from 72.

## 2.5 Inequalities and the sign flip

*Level: intermediate.*

Many questions ask not "when is it equal?" but "when is it more?" A rover's battery holds 42 units of charge and
the driving uses 3.5 units per kilometre; it must keep at least 7 units in reserve. How far can it drive? With $d$
kilometres, the condition is $42 - 3.5d \geq 7$. That is an **inequality**.

The symbols: $a < b$ ("$a$ is less than $b$"), $a > b$ (greater than), $a \leq b$ (less than or equal to), and
$a \geq b$. On a number line, $a < b$ means $a$ lies to the left of $b$.

### What "less than" means

We need a definition to prove anything. Among the real numbers some are **positive**, and these facts hold:

- (P1) For every number $a$, exactly one of these is true: $a$ is positive, $a = 0$, or $-a$ is positive. (In the
  last case we call $a$ **negative**.)
- (P2) The sum of two positive numbers is positive.
- (P3) The product of two positive numbers is positive.

Then **$a < b$ means $b - a$ is positive**. Together with the laws of Chapter 1, these three facts are the axioms
of an **ordered field**; every rule about inequalities follows from them.

### The rules, with proofs

**Rule 1 (adding).** If $a < b$, then $a + c < b + c$ for every $c$.
*Proof.* $(b + c) - (a + c) = b - a$, which is positive. $\square$

**Rule 2 (multiplying by a positive).** If $a < b$ and $c > 0$, then $ac < bc$.
*Proof.* $bc - ac = (b - a)c$, a product of two positive numbers, so positive by (P3). $\square$

**Rule 3 (multiplying by a negative flips the sign).** If $a < b$ and $c < 0$, then $ac > bc$.
*Proof.* We need $ac - bc = (a - b)c$ to be positive. Both $a - b$ and $c$ are negative: $a - b = -(b - a)$ with
$b - a$ positive, and $c = -(-c)$ with $-c$ positive. By Fact 3 of [Chapter 1](01-The-Language-of-Algebra.md),
$(a - b)c = (-(b - a))(-(-c)) = (b - a)(-c)$, a product of two positives. So $ac - bc > 0$, which says $bc < ac$.
$\square$

So the sign flip is not a separate rule to memorise; it is the same fact as "negative times negative is positive".
The picture makes it obvious. Multiplying by $-1$ reflects the number line in 0, and a reflection reverses order:
$-3 < 2$, but $3 > -2$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 120" role="img" aria-label="A number line from minus 4 to 4. Minus 3 is reflected to 3 and 2 is reflected to minus 2, showing that multiplying by minus 1 reverses the order">
  <line x1="30" y1="75" x2="390" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <line x1="50" y1="70" x2="50" y2="80" stroke="currentColor"/>
  <line x1="90" y1="70" x2="90" y2="80" stroke="currentColor"/>
  <line x1="130" y1="70" x2="130" y2="80" stroke="currentColor"/>
  <line x1="170" y1="70" x2="170" y2="80" stroke="currentColor"/>
  <line x1="210" y1="68" x2="210" y2="82" stroke="currentColor" stroke-width="2"/>
  <line x1="250" y1="70" x2="250" y2="80" stroke="currentColor"/>
  <line x1="290" y1="70" x2="290" y2="80" stroke="currentColor"/>
  <line x1="330" y1="70" x2="330" y2="80" stroke="currentColor"/>
  <line x1="370" y1="70" x2="370" y2="80" stroke="currentColor"/>
  <text x="50" y="98" text-anchor="middle" font-size="13" fill="currentColor">−4</text>
  <text x="90" y="98" text-anchor="middle" font-size="13" fill="currentColor">−3</text>
  <text x="130" y="98" text-anchor="middle" font-size="13" fill="currentColor">−2</text>
  <text x="170" y="98" text-anchor="middle" font-size="13" fill="currentColor">−1</text>
  <text x="210" y="98" text-anchor="middle" font-size="13" fill="currentColor">0</text>
  <text x="250" y="98" text-anchor="middle" font-size="13" fill="currentColor">1</text>
  <text x="290" y="98" text-anchor="middle" font-size="13" fill="currentColor">2</text>
  <text x="330" y="98" text-anchor="middle" font-size="13" fill="currentColor">3</text>
  <text x="370" y="98" text-anchor="middle" font-size="13" fill="currentColor">4</text>
  <path d="M 90 68 Q 210 0 330 68" fill="none" stroke="#eea66f" stroke-width="2"/>
  <path d="M 290 68 Q 210 30 130 68" fill="none" stroke="#9cc9ea" stroke-width="2"/>
  <circle cx="90" cy="75" r="5" fill="#eea66f"/>
  <circle cx="330" cy="75" r="5" fill="#eea66f"/>
  <circle cx="290" cy="75" r="5" fill="#9cc9ea"/>
  <circle cx="130" cy="75" r="5" fill="#9cc9ea"/>
  <text x="210" y="116" text-anchor="middle" font-size="13" fill="currentColor">−3 &lt; 2, but after multiplying by −1: 3 &gt; −2</text>
</svg>
</div>

**Rule 4 (reciprocals of positives).** If $0 < a < b$, then $\frac{1}{a} > \frac{1}{b}$.
*Proof.* $\frac{1}{a} - \frac{1}{b} = \frac{b - a}{ab}$. The top is positive and $ab$ is positive, and the
reciprocal of a positive number is positive (if $\frac{1}{ab}$ were negative or zero, then
$1 = ab \cdot \frac{1}{ab}$ would be negative or zero). So the difference is positive. $\square$

**Rule 5 (transitivity).** If $a < b$ and $b < c$, then $a < c$.
*Proof.* $c - a = (c - b) + (b - a)$ is a sum of positives. $\square$

### Solving linear inequalities

The safe moves are those of 2.1, with one change: **multiplying or dividing by a negative number reverses the
inequality.**

**Example 19.** Solve the rover problem $42 - 3.5d \geq 7$.

Subtract 42: $-3.5d \geq -35$. Divide by $-3.5$, which is negative, so flip: $d \leq 10$. The rover can drive at
most 10 km. **Check** one value on each side: $d = 4$ gives $42 - 14 = 28 \geq 7$ ✓; $d = 12$ gives
$42 - 42 = 0 \geq 7$, false ✓.

The solution of an inequality is usually a whole stretch of the number line, an **interval**. The notation:

| Inequality | Interval | Picture |
|---|---|---|
| $a < x < b$ | $(a, b)$ | open at both ends |
| $a \leq x \leq b$ | $[a, b]$ | closed at both ends |
| $a < x \leq b$ | $(a, b]$ | open at $a$, closed at $b$ |
| $x > a$ | $(a, \infty)$ | everything to the right of $a$ |
| $x \leq b$ | $(-\infty, b]$ | everything up to and including $b$ |

A round bracket means the end is left out, a square bracket that it is included. The symbol $\infty$ is not a
number; $(a, \infty)$ is just shorthand for "all numbers greater than $a$", so it always gets a round bracket. The
symbol $\cup$ ("union") joins two intervals: $(-\infty, 0) \cup (\frac{1}{2}, \infty)$ means "less than 0 or
greater than $\frac{1}{2}$".

**Example 20 (a double inequality).** Solve $-3 < 2x + 1 \leq 7$.

Work on all three parts at once. Subtract 1: $-4 < 2x \leq 6$. Divide by 2: $-2 < x \leq 3$, the interval
$(-2, 3]$.

**Example 21 (a trap).** Solve $\dfrac{1}{x} < 2$.

It is tempting to multiply by $x$ and get $1 < 2x$, so $x > \frac{1}{2}$. But that ignores negative $x$, where
multiplying flips the sign. Split into cases.

- If $x > 0$, multiplying by $x$ keeps the direction: $1 < 2x$, so $x > \frac{1}{2}$.
- If $x < 0$, then $\frac{1}{x}$ is negative and so certainly less than 2: every negative $x$ works.
- $x = 0$ is not allowed ($\frac{1}{0}$ is undefined).

The solution set is $(-\infty, 0) \cup (\frac{1}{2}, \infty)$. **Check:** $x = -1$ gives $-1 < 2$ ✓;
$x = \frac{1}{4}$ gives $4 < 2$, false ✓; $x = 1$ gives $1 < 2$ ✓. **Never multiply an inequality by an
expression whose sign you do not know.**

**Example 22 (a sign table).** Solve $\dfrac{x - 1}{x + 2} \geq 0$.

A fraction is positive when its top and bottom have the same sign. The top changes sign at $x = 1$, the bottom at
$x = -2$. These **critical points** cut the line into three intervals; test the signs in each:

| | $x < -2$ | $-2 < x < 1$ | $x > 1$ |
|---|:---:|:---:|:---:|
| $x - 1$ | $-$ | $-$ | $+$ |
| $x + 2$ | $-$ | $+$ | $+$ |
| fraction | $+$ | $-$ | $+$ |

The fraction is also 0 at $x = 1$ (allowed, since we want $\geq 0$) and undefined at $x = -2$ (not allowed). So
the solution is $(-\infty, -2) \cup [1, \infty)$. This sign-table method is the standard tool for polynomial and
rational inequalities of every degree.

## 2.6 Absolute value

*Level: intermediate.*

The **absolute value** of a number is its size without its sign:

$$|x| = \begin{cases} x & \text{if } x \geq 0, \\ -x & \text{if } x < 0. \end{cases}$$

So $|5| = 5$, $|-5| = 5$, $|0| = 0$. The second line looks odd ("$-x$" for a value that should be positive) until
you remember that $x$ is negative there, so $-x$ is positive: $|-5| = -(-5) = 5$.

The best way to think of it is as **distance**: $|x|$ is the distance from $x$ to 0 on the number line, and
**$|a - b|$ is the distance between $a$ and $b$**. For example $|7 - 3| = |3 - 7| = 4$. Read every absolute value
problem as a distance problem and most of them become pictures.

Basic facts, each provable by checking the cases $x \geq 0$ and $x < 0$: $|x| \geq 0$; $|-x| = |x|$;
$|xy| = |x||y|$; and $\sqrt{x^2} = |x|$ (not $x$: $\sqrt{(-3)^2} = \sqrt{9} = 3$).

### Equations

**Example 23.** Solve $|x - 3| = 5$.

In words: $x$ is at distance 5 from 3. So $x = 3 + 5 = 8$ or $x = 3 - 5 = -2$. Algebraically, $|A| = 5$ means
$A = 5$ or $A = -5$.

**Example 24.** Solve $|2x + 1| = |x - 4|$.

Two numbers have equal absolute values exactly when they are equal or opposite. Case 1: $2x + 1 = x - 4$, so
$x = -5$. Case 2: $2x + 1 = -(x - 4) = -x + 4$, so $3x = 3$ and $x = 1$. **Check:** $x = -5$ gives $|-9| = |-9|$ ✓;
$x = 1$ gives $|3| = |-3|$ ✓.

**Example 25 (a check is needed).** Solve $|x - 1| = 2x + 1$.

Split by the sign inside. If $x \geq 1$, then $|x - 1| = x - 1$ and the equation is $x - 1 = 2x + 1$, giving
$x = -2$. But we assumed $x \geq 1$, so this does not count. If $x < 1$, then $|x - 1| = 1 - x$ and
$1 - x = 2x + 1$ gives $x = 0$, which does satisfy $x < 1$. So the only solution is $x = 0$. **Check:**
$|-1| = 1 = 2(0) + 1$ ✓. (The right side $2x + 1$ can be negative, while an absolute value cannot, which is why one
case had to be thrown away.)

**Example 26 (two absolute values).** Solve $|x - 1| + |x + 2| = 5$.

As distances: we want points whose distances to 1 and to $-2$ add up to 5. Between $-2$ and 1 the two distances
always add to 3 (the gap between them), so no point there works. To the right of 1, each step right adds 2 to the
total; we need 2 more, so go 1 step: $x = 2$. Symmetrically, $x = -3$. Algebra agrees: for $x \geq 1$ the equation
is $(x - 1) + (x + 2) = 5$, so $x = 2$; for $-2 \leq x < 1$ it is $(1 - x) + (x + 2) = 3 = 5$, impossible; for
$x < -2$ it is $(1 - x) + (-x - 2) = 5$, so $x = -3$.

### Inequalities

**Lemma.** For a number $c \geq 0$:

- $|A| \leq c$ exactly when $-c \leq A \leq c$;
- $|A| \geq c$ exactly when $A \leq -c$ or $A \geq c$.

*Proof of the first.* If $A \geq 0$, then $|A| = A$, and $A \leq c$ is the same as $-c \leq A \leq c$ (the left
half holds automatically since $-c \leq 0 \leq A$). If $A < 0$, then $|A| = -A$, and $-A \leq c$ is the same as
$A \geq -c$, while $A \leq c$ holds automatically. The second statement is the opposite of the strict version of
the first. $\square$

**Example 27.** Solve $|x - 3| < 5$.

Distance from 3 less than 5: $-5 < x - 3 < 5$, so $-2 < x < 8$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 90" role="img" aria-label="A number line from minus 4 to 10 with the interval from minus 2 to 8 shaded, centred at 3, with distance 5 marked on each side">
  <line x1="40" y1="55" x2="396" y2="55" stroke="currentColor" stroke-width="1.5"/>
  <line x1="98" y1="55" x2="338" y2="55" stroke="#eea66f" stroke-width="6"/>
  <circle cx="98" cy="55" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="338" cy="55" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="218" cy="55" r="4" fill="currentColor"/>
  <text x="98" y="80" text-anchor="middle" font-size="13" fill="currentColor">−2</text>
  <text x="218" y="80" text-anchor="middle" font-size="13" fill="currentColor">3</text>
  <text x="338" y="80" text-anchor="middle" font-size="13" fill="currentColor">8</text>
  <path d="M 104 38 L 212 38" stroke="currentColor" stroke-width="1"/>
  <path d="M 224 38 L 332 38" stroke="currentColor" stroke-width="1"/>
  <text x="158" y="30" text-anchor="middle" font-size="13" fill="currentColor">5</text>
  <text x="278" y="30" text-anchor="middle" font-size="13" fill="currentColor">5</text>
</svg>
</div>

**Example 28.** Solve $|2x - 1| \geq 3$.

Either $2x - 1 \geq 3$, giving $x \geq 2$, or $2x - 1 \leq -3$, giving $x \leq -1$. The solution set is
$(-\infty, -1] \cup [2, \infty)$.

**Example 29 (tolerance).** A machined part must be 25 mm long, within 0.05 mm. The allowed lengths $L$ satisfy
$|L - 25| \leq 0.05$, that is, $24.95 \leq L \leq 25.05$. Engineers write this $25 \pm 0.05$ mm.

### The triangle inequality

**Theorem.** For all real numbers $a$ and $b$, $\;|a + b| \leq |a| + |b|$.

*Proof.* From the definition, $-|a| \leq a \leq |a|$ and $-|b| \leq b \leq |b|$. Adding (Rule 1 twice and Rule 5),
$-(|a| + |b|) \leq a + b \leq |a| + |b|$. By the lemma with $c = |a| + |b|$, this says $|a + b| \leq |a| + |b|$.
$\square$

Equality holds when $a$ and $b$ have the same sign (or one is zero); when they have opposite signs, they partly
cancel and the left side is smaller. The name comes from the version for arrows in the plane: one side of a
triangle is never longer than the other two together. The triangle inequality is the single most used inequality
in analysis; every estimate of an error in calculus leans on it.

## 2.7 A first proof: why the methods are safe

*Level: intermediate to advanced.*

Every method so far has rested on a claim: each step produced an **equivalent** equation, one with exactly the same
solutions. It is time to prove that claim, and to find the steps where it fails. Here $A$ and $B$ stand for
expressions in $x$.

**Theorem 1.** For any number $c$, the equations $A = B$ and $A + c = B + c$ have the same solutions.

*Proof.* There are two directions. Suppose a number $x_0$ is a solution of $A = B$, so that $A$ and $B$ have the
same value when $x = x_0$. Adding $c$ to equal numbers gives equal numbers, so $A + c = B + c$ at $x_0$. Conversely,
if $A + c = B + c$ at $x_0$, add $-c$ to both: $A + c + (-c) = A$ and $B + c + (-c) = B$ are equal at $x_0$. So the
two solution sets contain each other, and are the same. $\square$

**Theorem 2.** For any number $c \neq 0$, the equations $A = B$ and $cA = cB$ have the same solutions.

*Proof.* If $A = B$ at $x_0$, then $cA = cB$ at $x_0$. Conversely, if $cA = cB$ at $x_0$, multiply by
$\frac{1}{c}$, which exists **because $c \neq 0$**: $\frac{1}{c}(cA) = A$ and $\frac{1}{c}(cB) = B$, so $A = B$ at
$x_0$. $\square$

The proofs show where the hypotheses are used. Each move must be **undoable**: adding $c$ is undone by adding
$-c$, multiplying by $c$ is undone by multiplying by $\frac{1}{c}$. A step that cannot be undone is a one-way
street, and it may change the solution set. Three such steps cause nearly all wrong answers in algebra.

### Multiplying by an expression that could be zero: false solutions appear

**Example 30.** Solve $\dfrac{x}{x - 2} = \dfrac{2}{x - 2} + 5$.

Multiply by $x - 2$: $x = 2 + 5(x - 2)$, so $x = 5x - 8$ and $x = 2$. But $x = 2$ makes the denominators zero; the
original equation is meaningless there. Multiplying by $x - 2$ was not reversible at $x = 2$ (you cannot divide by
$0$ to get back). The original equation has **no solution**. A number produced by a one-way step that fails the
original equation is called an **extraneous solution**.

### Dividing by an expression that could be zero: true solutions vanish

**Example 31.** Solve $x^2 = 3x$.

Dividing by $x$ gives $x = 3$, but $x = 0$ is also a solution ($0 = 0$), and it has been lost. Instead, move
everything to one side and factor: $x^2 - 3x = 0$, so $x(x - 3) = 0$, and by the zero product property
([Chapter 1](01-The-Language-of-Algebra.md), Fact 4) $x = 0$ or $x = 3$. **Never divide by an expression that might
be zero; factor it out instead.**

The same error hides in a famous fake proof. Let $a = b$. Then $a^2 = ab$, so $a^2 - b^2 = ab - b^2$, which factors
as $(a + b)(a - b) = b(a - b)$. Dividing by $a - b$ gives $a + b = b$, so $2b = b$ and $2 = 1$. The division was by
$a - b = 0$.

### Squaring both sides: false solutions appear

If $A = B$ then $A^2 = B^2$, but not conversely: $A^2 = B^2$ means $A = B$ **or** $A = -B$. Squaring is a one-way
step, needed to remove square roots, and it must be followed by a check.

**Example 32.** Solve $\sqrt{x + 6} = x$.

Square: $x + 6 = x^2$, so $x^2 - x - 6 = 0$, which factors as $(x - 3)(x + 2) = 0$. The candidates are $x = 3$ and
$x = -2$. **Check** in the original: $\sqrt{9} = 3$ ✓, but $\sqrt{4} = 2 \neq -2$ ✗. The only solution is $x = 3$.
The false root $-2$ is a solution of the other equation that squares to the same thing, $\sqrt{x + 6} = -x$.

### Logic, in one line

A chain of reversible steps ($\iff$) proves that the final solution set is exactly the original one: nothing gained,
nothing lost, and the check is just a safeguard against slips. A chain that includes one-way steps ($\Longrightarrow$)
proves only that every true solution is **among** the candidates; then the check is not optional, it is the rest of
the proof. For inequalities the same logic holds, with Theorem 2 replaced by Rules 2 and 3 of 2.5 (each of which is
reversible, by the same rules applied with $\frac{1}{c}$).

This habit of asking "is this step reversible?" is worth more than any single technique in the chapter. It is the
first piece of the reasoning that, in later chapters, proves when polynomial equations have solutions and how many.

## A short history thread

Al-Khwarizmi's two operations, around 820 CE, are exactly the safe moves of 2.1. *Al-jabr* ("restoring") moved a
subtracted term to the other side, where it is added: $x^2 = 40x - 4x^2$ becomes $5x^2 = 40x$. *Al-muqabala*
("balancing" or "confronting") cancelled like quantities from both sides. He worked entirely in words and with
positive quantities only, which is why he needed several types of equation where we need one.

Robert Recorde introduced the equals sign in 1557. The signs $<$ and $>$ appear in Thomas Harriot's *Artis
Analyticae Praxis*, published in 1631, ten years after his death. The vertical bars $|x|$ for absolute value were
introduced by Karl Weierstrass in 1841. Pólya's *How to Solve It* (1945), written for students and teachers, is
still the best short book on how to start a problem you have not seen before.

## Check yourself

??? question "1. Solve $4(2x - 3) - 3(x + 1) = 2x + 3$."

    $8x - 12 - 3x - 3 = 2x + 3$, so $5x - 15 = 2x + 3$, $3x = 18$, $x = 6$. Check: $4(9) - 3(7) = 36 - 21 = 15$
    and $12 + 3 = 15$. ✓

??? question "2. Solve $\frac{2x + 1}{3} - \frac{x - 2}{2} = 1$."

    Multiply by 6: $2(2x + 1) - 3(x - 2) = 6$, so $4x + 2 - 3x + 6 = 6$ and $x = -2$. Check:
    $\frac{-3}{3} - \frac{-4}{2} = -1 + 2 = 1$. ✓

??? question "3. For which values of $k$ does $kx + 3 = 2x + k$ have no solution? Exactly one? Infinitely many?"

    Rearranged: $(k - 2)x = k - 3$. If $k \neq 2$ there is exactly one solution, $x = \frac{k - 3}{k - 2}$. If
    $k = 2$ the equation reads $0 = -1$: no solution. There is no $k$ giving infinitely many, because that would
    need $k - 2 = 0$ and $k - 3 = 0$ at the same time.

??? question "4. The sum of an arithmetic sequence is $S = \frac{n}{2}(a + l)$. Make $l$ the subject."

    Multiply by 2: $2S = n(a + l)$. Divide by $n$ ($n \neq 0$): $\frac{2S}{n} = a + l$. Subtract $a$:
    $l = \frac{2S}{n} - a$.

??? question "5. A puzzle in the Greek Anthology says of Diophantus: his boyhood lasted a sixth of his life; his beard grew after a twelfth more; he married after a seventh more; five years later a son was born; the son lived half as long as his father; the father died four years after the son. How long did he live? (Nobody knows whether the story is true.)"

    With $x$ his age at death: $\frac{x}{6} + \frac{x}{12} + \frac{x}{7} + 5 + \frac{x}{2} + 4 = x$. Multiply by 84:
    $14x + 7x + 12x + 420 + 42x + 336 = 84x$, so $75x + 756 = 84x$, $9x = 756$, $x = 84$.

??? question "6. Solve $-4 \leq 3 - 2x < 9$ and write the answer as an interval."

    Subtract 3: $-7 \leq -2x < 6$. Divide by $-2$ and flip both signs: $\frac{7}{2} \geq x > -3$. So
    $-3 < x \leq \frac{7}{2}$, the interval $(-3, \frac{7}{2}]$.

??? question "7. Solve $|3x - 2| = 7$."

    $3x - 2 = 7$ gives $x = 3$; $3x - 2 = -7$ gives $x = -\frac{5}{3}$. Check: $|7| = 7$ and $|-7| = 7$. ✓

??? question "8. Solve $|x + 1| > 4$."

    $x + 1 > 4$ or $x + 1 < -4$, so $x > 3$ or $x < -5$: $(-\infty, -5) \cup (3, \infty)$. In words: the
    distance from $x$ to $-1$ is more than 4.

??? question "9. Solve $\frac{x + 3}{x - 1} \leq 2$."

    Do not multiply by $x - 1$ (its sign is unknown). Subtract 2 instead:
    $\frac{x + 3 - 2(x - 1)}{x - 1} = \frac{5 - x}{x - 1} \leq 0$. Critical points 1 and 5. For $x < 1$: top
    positive, bottom negative, fraction negative ✓. For $1 < x < 5$: both positive ✗. For $x > 5$: top negative,
    bottom positive ✓. At $x = 5$ the fraction is 0 ✓; $x = 1$ is excluded. Answer $(-\infty, 1) \cup [5, \infty)$.
    Check: $x = 0$ gives $-3 \leq 2$ ✓; $x = 2$ gives $5 \leq 2$ ✗; $x = 5$ gives $2 \leq 2$ ✓.

??? question "10. Solve $\sqrt{2x + 7} = x + 2$."

    Square: $2x + 7 = x^2 + 4x + 4$, so $x^2 + 2x - 3 = 0$, $(x + 3)(x - 1) = 0$. Candidates $x = 1$ and $x = -3$.
    Check: $\sqrt{9} = 3 = 1 + 2$ ✓; $\sqrt{1} = 1$ but $-3 + 2 = -1$ ✗. Only $x = 1$.

??? question "11. Prove the reverse triangle inequality: $\big||a| - |b|\big| \leq |a - b|$."

    By the triangle inequality, $|a| = |(a - b) + b| \leq |a - b| + |b|$, so $|a| - |b| \leq |a - b|$. Swapping
    the roles of $a$ and $b$, $|b| - |a| \leq |b - a| = |a - b|$. So $-|a - b| \leq |a| - |b| \leq |a - b|$, and by
    the lemma of 2.6 this says $\big||a| - |b|\big| \leq |a - b|$.

??? question "12. Prove: if $0 < a < b$ then $a^2 < b^2$. Is it still true without $0 < a$?"

    $b^2 - a^2 = (b - a)(b + a)$. Both factors are positive ($b + a > 0$ since both are positive), so the product
    is positive. Without $0 < a$ it fails: $-3 < 2$ but $9 > 4$. That is another reason squaring both sides is
    unsafe.

## What you learned

- To solve an equation is to find all its solutions; each step should produce an equivalent equation.
- Adding the same thing and multiplying by the same nonzero number are reversible, and so safe.
- Every linear equation reduces to $ax = b$: one solution if $a \neq 0$, none if $a = 0 \neq b$, all numbers if
  $a = b = 0$.
- Word problems become equations by naming one unknown and describing one quantity in two ways.
- Multiplying an inequality by a negative number reverses it; this is the same fact as "negative times negative is
  positive", and the sign-table method handles fractions.
- $|a - b|$ is the distance from $a$ to $b$; $|A| < c$ means $-c < A < c$; $|a + b| \leq |a| + |b|$.
- Squaring, and multiplying or dividing by an expression that may be zero, are one-way steps: check every
  candidate, and factor instead of dividing.

**Next:** [Chapter 3](03-Lines-and-Linear-Systems.md), where linear equations become straight lines, and two or
three of them are solved together.

## Further reading

- George Pólya, *How to Solve It*, 1945. The classic on turning problems into mathematics.
- I. M. Gelfand and A. Shen, *Algebra*, Birkhäuser, 1993.
- H. S. Hall and S. R. Knight, *Higher Algebra*, 1887. An old book with a deep supply of exercises on equations
  and inequalities.
- Jacques Sesiano, *An Introduction to the History of Algebra: Solving Equations from Mesopotamian Times to the
  Renaissance*, American Mathematical Society, 2009.
- Frederic Rosen (translator), *The Algebra of Mohammed ben Musa*, 1831. The first English translation of
  al-Khwarizmi's book.
- On this site: the Topics lessons [The equal sign as a balance](../../topics/algebra/level-2/02-equal-as-balance.md),
  [Inequalities on a number line](../../topics/algebra/level-4/06-inequalities-number-line.md),
  [Modelling with equations](../../topics/algebra/level-5/06-modelling-equations.md) and
  [Polynomial inequalities](../../topics/algebra/level-8/02-polynomial-inequalities.md); and, for the ordered-field
  axioms behind 2.5, the U of T guide [MAT158H1 Unit 2: Real Numbers and Least Upper Bounds](../../uoft/MAT158H1/unit02.md)
  and, for proofs, [MAT137 Unit 1: Logic, Sets and Proofs](../../uoft/MAT137/unit01.md).
