# 6. Functions

*So far we have solved equations: find the number that makes a statement true. Most of mathematics, and nearly
all of science, asks a different question: when one quantity changes, how does another one follow it? The
temperature depends on the time of day, the cost depends on the weight, the area of a square depends on its side.
The idea that captures "depends on" is the function. In this chapter you will meet functions as rules, as graphs,
as machines and finally as sets of pairs; you will move graphs around, chain functions together, run them
backwards, and end with the precise definition that every later chapter of this book stands on.*

!!! abstract "In this chapter"
    **You will learn:**

    - what a function is, and what its domain and range are
    - how to read a graph: intercepts, zeros, increasing and decreasing, the vertical line test
    - how to shift, stretch and reflect a graph, and why $f(x-3)$ moves the graph to the right
    - how to compose functions, and why the order matters
    - when a function can be run backwards (one-to-one and onto), and how to find the inverse
    - even, odd, periodic and piecewise functions, and why every function is "even plus odd"
    - the formal definition of a function as a set of ordered pairs, and how to count functions between finite sets

    **You need:** [Chapter 1](01-The-Language-of-Algebra.md) (expressions and substitution),
    [Chapter 3](03-Lines-and-Linear-Systems.md) (coordinates and lines) and
    [Chapter 5](05-Quadratics.md) (parabolas). Gentler versions:
    [Functions](../../topics/algebra/level-7/04-functions.md),
    [Transformations](../../topics/algebra/level-7/05-transformations.md),
    [Inverse functions](../../topics/algebra/level-7/06-inverse-functions.md) and
    [Combining functions](../../topics/algebra/level-8/06-combining-functions.md) on the Topics shelf.

    **Levels:** 6.1 to 6.3 are beginner to intermediate; 6.4 to 6.6 are intermediate; 6.7 is advanced.

## 6.1 What a function is

Here is a question. A shop sells rope at 3 dollars a metre. How much does a piece cost? The honest answer is "it
depends on how long the piece is". If the length is $x$ metres, the cost is $3x$ dollars. For every length there
is exactly one cost. That "exactly one" is the heart of the matter.

A **function** is a rule that takes an input and gives back exactly one output. We give functions names, usually
single letters such as $f$, $g$ or $h$, and write $f(x)$ (read "f of x") for the output when the input is $x$. For
the rope,

$$
f(x) = 3x .
$$

So $f(2) = 6$, $f(0.5) = 1.5$, and $f(10) = 30$. The letter $x$ is only a placeholder: $f(t) = 3t$ is the same
function, and so is "triple the input". The brackets in $f(x)$ do not mean multiplication. They mean "apply $f$
to $x$".

**Input, output, domain, range.** The set of inputs a function accepts is its **domain**. The set of outputs it
actually produces is its **range**. Often we also name a set the outputs are allowed to live in, the
**codomain**; we write

$$
f : A \to B
$$

to say "$f$ is a function with domain $A$ and outputs in $B$". The range is the part of $B$ that is really hit.
For the rope, a sensible domain is "all lengths $x \ge 0$", and the range is "all costs $\ge 0$".

Some sets have standard names that we will use from now on:

- $\mathbb{N}$, the **natural numbers** $0, 1, 2, 3, \dots$ (some books start at 1; we will say which when it matters),
- $\mathbb{Z}$, the **integers** $\dots, -2, -1, 0, 1, 2, \dots$,
- $\mathbb{Q}$, the **rationals** (fractions $p/q$ with $q \neq 0$),
- $\mathbb{R}$, the **real numbers** (every point of the number line).

An **interval** is a stretch of the number line: $[a, b]$ means $a \le x \le b$ (square brackets include the
ends), $(a, b)$ means $a < x < b$, and $[a, \infty)$ means $x \ge a$. The symbol $\infty$ is not a number; it only
says "no right end".

**Natural domains.** When a function is given by a formula and nobody says what the domain is, the convention is
to take every real number for which the formula makes sense. Two things go wrong in the real numbers: dividing by
zero, and taking an even root (such as a square root) of a negative number.

**Example 1.** $f(x) = x^2$. Every real number can be squared, so the domain is $\mathbb{R}$. A square is never
negative, and every $y \ge 0$ is a square ($y = (\sqrt{y})^2$), so the range is $[0, \infty)$.

**Example 2.** $g(x) = \dfrac{1}{x - 2}$. We cannot divide by zero, so $x \neq 2$; the domain is all reals except 2.
For the range, ask which $y$ can be an output. Solve $y = 1/(x-2)$ for $x$: $x - 2 = 1/y$, so $x = 2 + 1/y$, which
works for every $y \neq 0$, and $y = 0$ is impossible because a fraction with numerator 1 is never 0. The range is
all reals except 0.

Check: $y = 4$ should come from $x = 2 + 1/4 = 2.25$, and indeed $1/(2.25 - 2) = 1/0.25 = 4$.

**Example 3.** $h(x) = \sqrt{x - 3}$. We need $x - 3 \ge 0$, so the domain is $[3, \infty)$. The symbol $\sqrt{\ }$
always means the non-negative square root, so the range is $[0, \infty)$.

**Example 4.** $k(x) = \sqrt{\dfrac{x+1}{x-4}}$. We need $x \neq 4$ and the fraction $\ge 0$. A fraction is
non-negative when top and bottom have the same sign (or the top is zero). Both positive: $x > 4$. Both negative:
$x < -1$. Top zero: $x = -1$. So the domain is $(-\infty, -1] \cup (4, \infty)$, where $\cup$ ("union") means
"either one or the other".

**What is not a function.** "The number whose square is $x$" is not a function of $x$, because for $x = 9$ there
are two such numbers, 3 and $-3$. A function must give one answer. This is exactly why we define $\sqrt{x}$ to be
the non-negative one: choosing one answer turns a two-valued rule into a function.

Functions also need not be formulas. "The day of the week you were born on" is a function from people to the
seven days. "Your height on your birthday" is a function from whole numbers (ages) to lengths. The rule can be a
table, a sentence, a graph, or a computer program, as long as every allowed input has exactly one output.

## 6.2 Graphs and how to read them

The **graph** of a function $f$ is the set of all points $(x, f(x))$ in the plane, for $x$ in the domain. It turns a
rule into a picture: the input runs along the horizontal axis, the output is the height.

**The vertical line test.** A curve in the plane is the graph of a function of $x$ exactly when every vertical line
meets it at most once. The reason is the definition: a vertical line is "all points with one fixed $x$", and a
function gives that $x$ only one height. A circle $x^2 + y^2 = 25$ fails: the line $x = 3$ meets it at $(3, 4)$ and
$(3, -4)$. The circle is a perfectly good curve; it is just not the graph of a single function of $x$. Its top half,
$y = \sqrt{25 - x^2}$, is.

What can you read from a graph?

- **The $y$-intercept** is where the graph crosses the vertical axis, the point $(0, f(0))$. There is at most one.
- **The zeros** (or $x$-intercepts, or roots) are the inputs where $f(x) = 0$, where the graph meets the horizontal
  axis. There can be many, or none.
- **Increasing and decreasing.** $f$ is *increasing* on an interval if moving right always moves the graph up:
  whenever $a < b$ in the interval, $f(a) < f(b)$. *Decreasing* is the opposite. Where a graph turns from
  increasing to decreasing there is a local maximum, a hilltop; the other way there is a local minimum, a valley.
- **Sign.** Where the graph is above the axis $f(x) > 0$; below, $f(x) < 0$. Solving an inequality such as
  $f(x) > 0$ is reading off where the graph is above the axis.
- **Solving equations graphically.** The solutions of $f(x) = g(x)$ are the $x$-coordinates of the points where the
  two graphs cross.

**Example 5.** Take $f(x) = x^2 - 4x + 3 = (x-1)(x-3)$, a parabola from [Chapter 5](05-Quadratics.md). Its
$y$-intercept is $f(0) = 3$. Its zeros are 1 and 3. Completing the square, $f(x) = (x-2)^2 - 1$, so the lowest point
is $(2, -1)$: the graph decreases on $(-\infty, 2]$ and increases on $[2, \infty)$. It is below the axis exactly
between the zeros, so $f(x) < 0$ for $1 < x < 3$. The range is $[-1, \infty)$.

**Example 6.** Where does the line $y = x + 1$ meet the parabola $y = x^2 - 4x + 3$? Set them equal:
$x^2 - 4x + 3 = x + 1$, so $x^2 - 5x + 2 = 0$ and $x = \dfrac{5 \pm \sqrt{17}}{2}$, about $0.438$ and $4.562$.
Check: at $x = 0.438$ the line gives $1.438$ and the parabola gives $0.192 - 1.752 + 3 = 1.440$, equal up to rounding.

**Plotting is not proving.** A graph drawn from a few points can lie. If you plot $y = \sin(\pi x)$ only at the
whole numbers $x = 0, 1, 2, \dots$, every value is 0 and you would draw a flat line. A graph is a guide; claims
about it (this is the lowest point, these are all the zeros) need algebra behind them, as in Example 5.

## 6.3 Moving graphs: transformations

You know the graph of $y = x^2$. What does $y = (x - 3)^2 + 1$ look like? You could plot it point by point, but
there is a better way: see it as the old graph, moved.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 245" role="img" aria-label="Graph of y equals x squared with vertex at the origin, and the same parabola moved 3 to the right and 1 up, with vertex at (3, 1)">
  <line x1="20.0" y1="220.0" x2="350.0" y2="220.0" stroke="currentColor" stroke-width="1.2"/>
  <line x1="100.0" y1="10.0" x2="100.0" y2="230.0" stroke="currentColor" stroke-width="1.2"/>
  <line x1="20.0" y1="217.0" x2="20.0" y2="223.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="20" y="236" font-size="11" text-anchor="middle" fill="currentColor">−2</text>
  <line x1="60.0" y1="217.0" x2="60.0" y2="223.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="60" y="236" font-size="11" text-anchor="middle" fill="currentColor">−1</text>
  <line x1="140.0" y1="217.0" x2="140.0" y2="223.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="140" y="236" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <line x1="180.0" y1="217.0" x2="180.0" y2="223.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="180" y="236" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <line x1="220.0" y1="217.0" x2="220.0" y2="223.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="220" y="236" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <line x1="260.0" y1="217.0" x2="260.0" y2="223.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="260" y="236" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <line x1="300.0" y1="217.0" x2="300.0" y2="223.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="300" y="236" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <line x1="340.0" y1="217.0" x2="340.0" y2="223.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="340" y="236" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <line x1="97.0" y1="180.0" x2="103.0" y2="180.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="90" y="184" font-size="11" text-anchor="end" fill="currentColor">1</text>
  <line x1="97.0" y1="140.0" x2="103.0" y2="140.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="90" y="144" font-size="11" text-anchor="end" fill="currentColor">2</text>
  <line x1="97.0" y1="100.0" x2="103.0" y2="100.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="90" y="104" font-size="11" text-anchor="end" fill="currentColor">3</text>
  <line x1="97.0" y1="60.0" x2="103.0" y2="60.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="90" y="64" font-size="11" text-anchor="end" fill="currentColor">4</text>
  <line x1="97.0" y1="20.0" x2="103.0" y2="20.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="90" y="24" font-size="11" text-anchor="end" fill="currentColor">5</text>
  <polyline fill="none" stroke="#9cc9ea" stroke-width="2.5" points="12.0,26.4 14.0,35.1 16.0,43.6 18.0,51.9 20.0,60.0 22.0,67.9 24.0,75.6 26.0,83.1 28.0,90.4 30.0,97.5 32.0,104.4 34.0,111.1 36.0,117.6 38.0,123.9 40.0,130.0 42.0,135.9 44.0,141.6 46.0,147.1 48.0,152.4 50.0,157.5 52.0,162.4 54.0,167.1 56.0,171.6 58.0,175.9 60.0,180.0 62.0,183.9 64.0,187.6 66.0,191.1 68.0,194.4 70.0,197.5 72.0,200.4 74.0,203.1 76.0,205.6 78.0,207.9 80.0,210.0 82.0,211.9 84.0,213.6 86.0,215.1 88.0,216.4 90.0,217.5 92.0,218.4 94.0,219.1 96.0,219.6 98.0,219.9 100.0,220.0 102.0,219.9 104.0,219.6 106.0,219.1 108.0,218.4 110.0,217.5 112.0,216.4 114.0,215.1 116.0,213.6 118.0,211.9 120.0,210.0 122.0,207.9 124.0,205.6 126.0,203.1 128.0,200.4 130.0,197.5 132.0,194.4 134.0,191.1 136.0,187.6 138.0,183.9 140.0,180.0 142.0,175.9 144.0,171.6 146.0,167.1 148.0,162.4 150.0,157.5 152.0,152.4 154.0,147.1 156.0,141.6 158.0,135.9 160.0,130.0 162.0,123.9 164.0,117.6 166.0,111.1 168.0,104.4 170.0,97.5 172.0,90.4 174.0,83.1 176.0,75.6 178.0,67.9 180.0,60.0 182.0,51.9 184.0,43.6 186.0,35.1 188.0,26.4"/>
  <polyline fill="none" stroke="#eea66f" stroke-width="2.5" points="140.0,20.0 142.0,27.9 144.0,35.6 146.0,43.1 148.0,50.4 150.0,57.5 152.0,64.4 154.0,71.1 156.0,77.6 158.0,83.9 160.0,90.0 162.0,95.9 164.0,101.6 166.0,107.1 168.0,112.4 170.0,117.5 172.0,122.4 174.0,127.1 176.0,131.6 178.0,135.9 180.0,140.0 182.0,143.9 184.0,147.6 186.0,151.1 188.0,154.4 190.0,157.5 192.0,160.4 194.0,163.1 196.0,165.6 198.0,167.9 200.0,170.0 202.0,171.9 204.0,173.6 206.0,175.1 208.0,176.4 210.0,177.5 212.0,178.4 214.0,179.1 216.0,179.6 218.0,179.9 220.0,180.0 222.0,179.9 224.0,179.6 226.0,179.1 228.0,178.4 230.0,177.5 232.0,176.4 234.0,175.1 236.0,173.6 238.0,171.9 240.0,170.0 242.0,167.9 244.0,165.6 246.0,163.1 248.0,160.4 250.0,157.5 252.0,154.4 254.0,151.1 256.0,147.6 258.0,143.9 260.0,140.0 262.0,135.9 264.0,131.6 266.0,127.1 268.0,122.4 270.0,117.5 272.0,112.4 274.0,107.1 276.0,101.6 278.0,95.9 280.0,90.0 282.0,83.9 284.0,77.6 286.0,71.1 288.0,64.4 290.0,57.5 292.0,50.4 294.0,43.1 296.0,35.6 298.0,27.9 300.0,20.0"/>
  <circle cx="100.0" cy="220.0" r="4" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="220.0" cy="180.0" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <path d="M 108 212 Q 160 172 212 178" fill="none" stroke="currentColor" stroke-width="1.3" stroke-dasharray="4 3"/>
  <polygon points="214,178 204,170 206,184" fill="currentColor"/>
  <text x="48" y="36" font-size="13" text-anchor="middle" fill="currentColor">y = x²</text>
  <text x="304" y="36" font-size="13" text-anchor="middle" fill="currentColor">y = (x − 3)² + 1</text>
  <text x="178" y="211" font-size="11" text-anchor="middle" fill="currentColor">3 right, 1 up</text>
</svg>
</div>

There are four basic moves. Let $f$ be any function, and $h$, $k$, $a$, $b$ numbers.

| New function | What happens to the graph |
|---|---|
| $y = f(x) + k$ | shifted up by $k$ (down if $k < 0$) |
| $y = f(x - h)$ | shifted right by $h$ (left if $h < 0$) |
| $y = a\,f(x)$ | stretched vertically by the factor $a$; if $a < 0$, also flipped upside down |
| $y = f(bx)$ | squeezed horizontally by the factor $b$; if $b < 0$, also flipped left to right |

Two of these surprise everyone at first: $f(x - 3)$ moves the graph to the **right**, the direction of $+3$, and
$f(2x)$ makes it **narrower**, not wider. Here is why, and the why is worth more than the table.

**Why $f(x - h)$ moves right.** Let $g(x) = f(x - h)$. Ask: where does $g$ take the value that $f$ takes at some
input $u$? We need $x - h = u$, that is $x = u + h$. So whatever $f$ does at $u$, $g$ does at $u + h$, which is $h$
further right. In terms of points: $(u, f(u))$ is on the graph of $f$ exactly when $(u + h, f(u))$ is on the graph
of $g$, because $g(u + h) = f(u + h - h) = f(u)$. Every point slides $h$ to the right. $\square$

**Why $f(bx)$ squeezes.** Let $g(x) = f(bx)$ with $b > 0$. Then $g(u/b) = f(u)$: whatever $f$ does at $u$, $g$
already does at $u/b$. For $b = 2$ that is half as far from the axis, so the graph is squeezed towards the
vertical axis by a factor 2. $\square$

The vertical moves are easier because they act on the output directly: adding $k$ to every height lifts every
point by $k$, and multiplying every height by $a$ stretches.

**Order matters.** To draw $y = 2(x - 3)^2 + 1$ from $y = x^2$: shift right 3 (giving $(x-3)^2$), stretch
vertically by 2 (giving $2(x-3)^2$), then shift up 1. If you lift first and stretch after, you get
$2((x-3)^2 + 1) = 2(x-3)^2 + 2$, a different curve. A safe rule: work from the inside of the formula outwards.

**Example 7.** Describe $y = -\sqrt{x + 4} + 2$ starting from $y = \sqrt{x}$. Inside first: $\sqrt{x + 4}$ is
$\sqrt{x - (-4)}$, a shift left by 4, so the graph now starts at $(-4, 0)$. Then the minus sign flips it upside down
(it now goes down from $(-4, 0)$). Then $+2$ lifts it: it starts at $(-4, 2)$ and decreases. Domain $[-4, \infty)$,
range $(-\infty, 2]$. Check: $x = 5$ gives $-\sqrt{9} + 2 = -1$, and the flipped, lifted curve should be below 2
there. It is.

**Example 8.** Vertex form, revisited. Every parabola $y = ax^2 + bx + c$ with $a \neq 0$ can be written as
$y = a(x - h)^2 + k$ by completing the square ([Chapter 5](05-Quadratics.md)). So **every parabola is the
standard parabola $y = x^2$, shifted, stretched and possibly flipped**. There is really only one parabola shape,
up to scale. This is the kind of simplification transformations buy: a whole family understood through one member.

**Reflections.** Two special cases deserve names. $y = -f(x)$ is the mirror image in the $x$-axis. $y = f(-x)$ is
the mirror image in the $y$-axis, because the point $(u, f(u))$ becomes $(-u, f(u))$.

## 6.4 Composition: one function after another

A shop charges 3 dollars a metre for rope, and then adds 13% sales tax. The pre-tax price is $g(x) = 3x$; the tax
step turns a price $p$ into $f(p) = 1.13p$. The final price for $x$ metres is $f$ applied to $g(x)$:

$$
f(g(x)) = 1.13 \cdot 3x = 3.39x .
$$

Doing one function and then feeding its output into another is called **composition**. We write

$$
(f \circ g)(x) = f(g(x)),
$$

read "$f$ after $g$" or "$f$ composed with $g$". Notice the order: in $f \circ g$, the function on the **right**, $g$,
acts first. This is the price of writing functions on the left of their inputs; it trips everyone up for a while.

**Example 9.** Let $f(x) = x^2$ and $g(x) = x + 3$. Then

$$
(f \circ g)(x) = f(x + 3) = (x + 3)^2 = x^2 + 6x + 9, \qquad (g \circ f)(x) = g(x^2) = x^2 + 3 .
$$

These are different functions: at $x = 1$ the first gives 16 and the second gives 4. **Composition is not
commutative.** Putting on socks and then shoes is not the same as shoes and then socks.

**The domain of a composition.** $f \circ g$ accepts $x$ only if $x$ is in the domain of $g$ **and** $g(x)$ is in
the domain of $f$. Let $f(x) = \sqrt{x}$ and $g(x) = x - 4$. Then $(f \circ g)(x) = \sqrt{x - 4}$ needs $x \ge 4$,
while $(g \circ f)(x) = \sqrt{x} - 4$ needs $x \ge 0$.

A trap: let $f(x) = x^2$ and $g(x) = \sqrt{x}$. The formula for $f \circ g$ simplifies to $(\sqrt{x})^2 = x$, which
looks as if it is defined everywhere, but $g$ only accepts $x \ge 0$, so $f \circ g$ is "$x$, on $[0, \infty)$".
The other way round, $(g \circ f)(x) = \sqrt{x^2} = |x|$, defined for every $x$; not $x$, because
$\sqrt{(-5)^2} = \sqrt{25} = 5$.

**Composition is associative.** For three functions,

$$
(f \circ g) \circ h = f \circ (g \circ h).
$$

*Proof.* Both sides are functions; two functions are equal when they have the same domain and the same output at
every input. At an input $x$: the left side gives $(f \circ g)(h(x)) = f(g(h(x)))$; the right side gives
$f((g \circ h)(x)) = f(g(h(x)))$. Same output, and the same inputs are allowed on both sides (those $x$ for which
$h(x)$, $g(h(x))$ and $f(g(h(x)))$ all make sense). $\square$

So we can write $f \circ g \circ h$ without brackets. This small fact matters a great deal later: it is one of the
reasons that symmetries form a *group* (Chapter 13).

**Taking functions apart.** Often the useful skill is the reverse: seeing a complicated function as a chain of
simple ones. $F(x) = \sqrt{1 + x^2}$ is "square, then add 1, then take the square root". $G(x) = (2x - 5)^{10}$ is
"double and subtract 5, then raise to the tenth power". Calculus's chain rule works exactly on such chains.

**The identity function.** $\mathrm{id}(x) = x$ does nothing. For every $f$, $f \circ \mathrm{id} = f$ and
$\mathrm{id} \circ f = f$ (on the appropriate domains). It plays the role for composition that 1 plays for
multiplication, which suggests the next question: when does a function have an "inverse" that undoes it?

## 6.5 One-to-one, onto, and inverse functions

The rope costs 3 dollars a metre. If you paid 12 dollars, how much rope did you buy? You run the function
backwards: $12 / 3 = 4$ metres. The backwards function, $x \mapsto x/3$, is the **inverse** of $x \mapsto 3x$.
(The arrow $\mapsto$ is read "goes to", and names a function by what it does to an input.)

Not every function can be run backwards. If $f(x) = x^2$ and the output is 9, was the input 3 or $-3$? The
information is lost. Two things are needed for an inverse, and they have names.

**One-to-one (injective).** $f : A \to B$ is **one-to-one** if different inputs give different outputs:

$$
f(a_1) = f(a_2) \implies a_1 = a_2 .
$$

On a graph: every *horizontal* line meets the graph at most once (the horizontal line test).

**Onto (surjective).** $f : A \to B$ is **onto** if every element of $B$ is an output: for every $b \in B$ there is
some $a \in A$ with $f(a) = b$. In other words, the range is the whole codomain.

**Bijective.** A function that is both one-to-one and onto is a **bijection**. A bijection pairs off the elements of
$A$ and $B$ perfectly: each $b$ is hit exactly once.

Whether a function is onto depends on the codomain you name, so be precise. $f(x) = x^2$ as a function
$\mathbb{R} \to \mathbb{R}$ is neither one-to-one ($f(2) = f(-2)$) nor onto (nothing maps to $-1$). As a function
$[0, \infty) \to [0, \infty)$, the same formula is a bijection.

**Example 10.** Is $f(x) = 5x - 7$, from $\mathbb{R}$ to $\mathbb{R}$, a bijection? *One-to-one:* if
$5a_1 - 7 = 5a_2 - 7$ then $5a_1 = 5a_2$, so $a_1 = a_2$. *Onto:* given any $b$, take $a = (b + 7)/5$; then
$f(a) = b + 7 - 7 = b$. Yes, a bijection.

**Example 11.** Is $f(x) = x^3 - x$ one-to-one on $\mathbb{R}$? No: $f(0) = 0$ and $f(1) = 1 - 1 = 0$. A single
counterexample settles a "no".

**Definition.** Let $f : A \to B$. A function $g : B \to A$ is an **inverse** of $f$ if

$$
g(f(a)) = a \text{ for every } a \in A \qquad\text{and}\qquad f(g(b)) = b \text{ for every } b \in B .
$$

In the language of 6.4: $g \circ f = \mathrm{id}_A$ and $f \circ g = \mathrm{id}_B$. We write $g = f^{-1}$. Careful:
$f^{-1}(x)$ does **not** mean $1/f(x)$. The notation borrows the "$-1$" from $3^{-1} = 1/3$ because, for
composition, the inverse plays the part that $1/3$ plays for multiplication. When you mean the reciprocal, write
$1/f(x)$ or $(f(x))^{-1}$.

**Theorem 6.1.** A function $f : A \to B$ has an inverse if and only if it is a bijection. When it exists, the
inverse is unique.

*Proof.* Suppose first that $f$ has an inverse $g$.

- $f$ is one-to-one: if $f(a_1) = f(a_2)$, apply $g$ to both sides: $g(f(a_1)) = g(f(a_2))$, that is $a_1 = a_2$.
- $f$ is onto: given $b \in B$, the element $a = g(b)$ satisfies $f(a) = f(g(b)) = b$.

Conversely, suppose $f$ is a bijection. For each $b \in B$ there is at least one $a$ with $f(a) = b$ (onto) and at
most one (one-to-one), so exactly one. Define $g(b)$ to be that $a$. Then $f(g(b)) = b$ by construction. And for
$a \in A$, $g(f(a))$ is "the element that $f$ sends to $f(a)$", which is $a$ itself. So $g$ is an inverse.

Uniqueness: if $g$ and $h$ are both inverses, then for every $b$,
$g(b) = g(f(h(b))) = (g \circ f)(h(b)) = h(b)$. $\square$

**Finding an inverse by algebra.** Write $y = f(x)$, solve for $x$ in terms of $y$, and check that the solution is
unique and exists for every $y$ in the codomain. That is precisely proving "bijection", and the formula you get is
$f^{-1}(y)$.

**Example 12.** $f(x) = \dfrac{2x + 1}{x - 3}$, with domain $x \neq 3$. Set $y = \dfrac{2x+1}{x-3}$ and solve:

$$
\begin{aligned}
y(x - 3) &= 2x + 1 \\
yx - 3y &= 2x + 1 \\
yx - 2x &= 3y + 1 \\
x(y - 2) &= 3y + 1 \\
x &= \frac{3y + 1}{y - 2} \qquad (y \neq 2).
\end{aligned}
$$

For every $y \neq 2$ there is exactly one $x$, and $y = 2$ is never reached (if $y = 2$ the fourth line reads
$0 = 7$). So $f$ is a bijection from "all reals except 3" to "all reals except 2", and
$f^{-1}(x) = \dfrac{3x + 1}{x - 2}$.

Check: $f(4) = 9/1 = 9$, and $f^{-1}(9) = 28/7 = 4$.

**Restricting the domain.** $x^2$ has no inverse on $\mathbb{R}$, but on $[0, \infty)$ it is a bijection onto
$[0, \infty)$ and its inverse is $\sqrt{x}$. This is exactly how the square root is defined. In the same way the
inverse trigonometric functions come from restricting $\sin$, $\cos$ and $\tan$ to an interval where each is
one-to-one, and in [Chapter 7](07-Exponents-and-Logarithms.md) the logarithm will come from $2^x$, which needs no
restriction at all.

**The graph of an inverse is a mirror image.** If $(a, b)$ is on the graph of $f$, then $f(a) = b$, so
$f^{-1}(b) = a$, so $(b, a)$ is on the graph of $f^{-1}$. Swapping the coordinates is reflection in the line $y = x$.
Why? The segment from $(a, b)$ to $(b, a)$ has slope $\dfrac{a - b}{b - a} = -1$, so it is perpendicular to $y = x$
(slope 1, and $1 \cdot (-1) = -1$, as in [Chapter 3](03-Lines-and-Linear-Systems.md)), and its midpoint
$\left(\frac{a+b}{2}, \frac{a+b}{2}\right)$ lies on $y = x$. So $y = x$ is the perpendicular bisector of the segment,
which is exactly what "mirror image" means. $\square$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 285" role="img" aria-label="The graph of y equals x squared for x at least 0 and the graph of y equals the square root of x are mirror images in the dashed line y equals x; the point (2, 4) on one matches the point (4, 2) on the other">
  <line x1="30.0" y1="260.0" x2="290.0" y2="260.0" stroke="currentColor" stroke-width="1.2"/>
  <line x1="40.0" y1="10.0" x2="40.0" y2="270.0" stroke="currentColor" stroke-width="1.2"/>
  <line x1="80.0" y1="257.0" x2="80.0" y2="263.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="80" y="276" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <line x1="37.0" y1="220.0" x2="43.0" y2="220.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="32" y="224" font-size="11" text-anchor="end" fill="currentColor">1</text>
  <line x1="120.0" y1="257.0" x2="120.0" y2="263.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="120" y="276" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <line x1="37.0" y1="180.0" x2="43.0" y2="180.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="32" y="184" font-size="11" text-anchor="end" fill="currentColor">2</text>
  <line x1="160.0" y1="257.0" x2="160.0" y2="263.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="160" y="276" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <line x1="37.0" y1="140.0" x2="43.0" y2="140.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="32" y="144" font-size="11" text-anchor="end" fill="currentColor">3</text>
  <line x1="200.0" y1="257.0" x2="200.0" y2="263.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="200" y="276" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <line x1="37.0" y1="100.0" x2="43.0" y2="100.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="32" y="104" font-size="11" text-anchor="end" fill="currentColor">4</text>
  <line x1="240.0" y1="257.0" x2="240.0" y2="263.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="240" y="276" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <line x1="37.0" y1="60.0" x2="43.0" y2="60.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="32" y="64" font-size="11" text-anchor="end" fill="currentColor">5</text>
  <line x1="280.0" y1="257.0" x2="280.0" y2="263.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="280" y="276" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <line x1="37.0" y1="20.0" x2="43.0" y2="20.0" stroke="currentColor" stroke-width="1.2"/>
  <text x="32" y="24" font-size="11" text-anchor="end" fill="currentColor">6</text>
  <line x1="40.0" y1="260.0" x2="288.0" y2="12.0" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 4"/>
  <polyline fill="none" stroke="#eea66f" stroke-width="2.5" points="40.0,260.0 40.8,260.0 41.6,259.9 42.4,259.9 43.2,259.7 44.0,259.6 44.8,259.4 45.6,259.2 46.4,259.0 47.2,258.7 48.0,258.4 48.8,258.1 49.6,257.7 50.4,257.3 51.2,256.9 52.0,256.4 52.8,255.9 53.6,255.4 54.4,254.8 55.2,254.2 56.0,253.6 56.8,252.9 57.6,252.3 58.4,251.5 59.2,250.8 60.0,250.0 60.8,249.2 61.6,248.3 62.4,247.5 63.2,246.5 64.0,245.6 64.8,244.6 65.6,243.6 66.4,242.6 67.2,241.5 68.0,240.4 68.8,239.3 69.6,238.1 70.4,236.9 71.2,235.7 72.0,234.4 72.8,233.1 73.6,231.8 74.4,230.4 75.2,229.0 76.0,227.6 76.8,226.1 77.6,224.7 78.4,223.1 79.2,221.6 80.0,220.0 80.8,218.4 81.6,216.7 82.4,215.1 83.2,213.3 84.0,211.6 84.8,209.8 85.6,208.0 86.4,206.2 87.2,204.3 88.0,202.4 88.8,200.5 89.6,198.5 90.4,196.5 91.2,194.5 92.0,192.4 92.8,190.3 93.6,188.2 94.4,186.0 95.2,183.8 96.0,181.6 96.8,179.3 97.6,177.1 98.4,174.7 99.2,172.4 100.0,170.0 100.8,167.6 101.6,165.1 102.4,162.7 103.2,160.1 104.0,157.6 104.8,155.0 105.6,152.4 106.4,149.8 107.2,147.1 108.0,144.4 108.8,141.7 109.6,138.9 110.4,136.1 111.2,133.3 112.0,130.4 112.8,127.5 113.6,124.6 114.4,121.6 115.2,118.6 116.0,115.6 116.8,112.5 117.6,109.5 118.4,106.3 119.2,103.2 120.0,100.0 120.8,96.8 121.6,93.5 122.4,90.3 123.2,86.9 124.0,83.6 124.8,80.2 125.6,76.8 126.4,73.4 127.2,69.9 128.0,66.4 128.8,62.9 129.6,59.3 130.4,55.7 131.2,52.1 132.0,48.4 132.8,44.7 133.6,41.0 134.4,37.2 135.2,33.4 136.0,29.6 136.8,25.7 137.6,21.9 138.4,17.9 139.2,14.0 140.0,10.0"/>
  <polyline fill="none" stroke="#9cc9ea" stroke-width="2.5" points="40.0,260.0 40.0,259.2 40.1,258.4 40.1,257.6 40.3,256.8 40.4,256.0 40.6,255.2 40.8,254.4 41.0,253.6 41.3,252.8 41.6,252.0 41.9,251.2 42.3,250.4 42.7,249.6 43.1,248.8 43.6,248.0 44.1,247.2 44.6,246.4 45.2,245.6 45.8,244.8 46.4,244.0 47.1,243.2 47.7,242.4 48.5,241.6 49.2,240.8 50.0,240.0 50.8,239.2 51.7,238.4 52.5,237.6 53.5,236.8 54.4,236.0 55.4,235.2 56.4,234.4 57.4,233.6 58.5,232.8 59.6,232.0 60.7,231.2 61.9,230.4 63.1,229.6 64.3,228.8 65.6,228.0 66.9,227.2 68.2,226.4 69.6,225.6 71.0,224.8 72.4,224.0 73.9,223.2 75.3,222.4 76.9,221.6 78.4,220.8 80.0,220.0 81.6,219.2 83.3,218.4 84.9,217.6 86.7,216.8 88.4,216.0 90.2,215.2 92.0,214.4 93.8,213.6 95.7,212.8 97.6,212.0 99.5,211.2 101.5,210.4 103.5,209.6 105.5,208.8 107.6,208.0 109.7,207.2 111.8,206.4 114.0,205.6 116.2,204.8 118.4,204.0 120.7,203.2 122.9,202.4 125.3,201.6 127.6,200.8 130.0,200.0 132.4,199.2 134.9,198.4 137.3,197.6 139.9,196.8 142.4,196.0 145.0,195.2 147.6,194.4 150.2,193.6 152.9,192.8 155.6,192.0 158.3,191.2 161.1,190.4 163.9,189.6 166.7,188.8 169.6,188.0 172.5,187.2 175.4,186.4 178.4,185.6 181.4,184.8 184.4,184.0 187.5,183.2 190.5,182.4 193.7,181.6 196.8,180.8 200.0,180.0 203.2,179.2 206.5,178.4 209.7,177.6 213.1,176.8 216.4,176.0 219.8,175.2 223.2,174.4 226.6,173.6 230.1,172.8 233.6,172.0 237.1,171.2 240.7,170.4 244.3,169.6 247.9,168.8 251.6,168.0 255.3,167.2 259.0,166.4 262.8,165.6 266.6,164.8 270.4,164.0 274.3,163.2 278.1,162.4 282.1,161.6 286.0,160.8 290.0,160.0"/>
  <circle cx="120.0" cy="100.0" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="200.0" cy="180.0" r="4" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <line x1="120.0" y1="100.0" x2="200.0" y2="180.0" stroke="currentColor" stroke-width="1" stroke-dasharray="2 3"/>
  <text x="112" y="94" font-size="11" text-anchor="end" fill="currentColor">(2, 4)</text>
  <text x="208" y="194" font-size="11" text-anchor="start" fill="currentColor">(4, 2)</text>
  <text x="80" y="36" font-size="12" text-anchor="start" fill="currentColor">y = x², x ≥ 0</text>
  <text x="288" y="146" font-size="12" text-anchor="end" fill="currentColor">y = √x</text>
  <text x="264" y="20" font-size="12" text-anchor="end" fill="currentColor">y = x</text>
</svg>
</div>

**Undoing a chain.** If $f$ and $g$ are bijections, then $g \circ f$ is a bijection and

$$
(g \circ f)^{-1} = f^{-1} \circ g^{-1} .
$$

The order reverses: to undo "socks then shoes" you take off the shoes first. *Proof:* using associativity,
$(f^{-1} \circ g^{-1}) \circ (g \circ f) = f^{-1} \circ (g^{-1} \circ g) \circ f = f^{-1} \circ f = \mathrm{id}$,
and the same in the other order. $\square$

**Example 13.** $F(x) = 2x^3 + 5$ is "cube, then double, then add 5". Undo in reverse order: subtract 5, halve,
take the cube root. $F^{-1}(x) = \sqrt[3]{\dfrac{x - 5}{2}}$. Check: $F(2) = 21$ and $F^{-1}(21) = \sqrt[3]{8} = 2$.

**Left and right inverses.** *Level: advanced.* The theorem splits into two halves that are useful on their own.
A function $f : A \to B$ (with $A$ not empty) is one-to-one exactly when it has a *left inverse*, some $g$ with
$g \circ f = \mathrm{id}_A$; it is onto exactly when it has a *right inverse*, some $h$ with $f \circ h = \mathrm{id}_B$.
The proofs are the two halves above. For the "onto implies right inverse" direction with an infinite $B$ we must
choose one preimage for every $b$ at once; that this is always possible is the *axiom of choice*, one of the basic
assumptions of modern set theory. For finite sets, and for most functions given by formulas, no axiom is needed
because a choice can be written down.

## 6.6 Even, odd, periodic and piecewise functions

Some functions have symmetry, and symmetry saves work.

**Even and odd.** $f$ is **even** if $f(-x) = f(x)$ for every $x$ in its domain; its graph is symmetric in the
$y$-axis. $f$ is **odd** if $f(-x) = -f(x)$; its graph is symmetric under a half-turn about the origin. The names
come from powers: $x^2$, $x^4$, $x^6$ are even, and $x$, $x^3$, $x^5$ are odd, because $(-x)^n = (-1)^n x^n$.
$\cos$ is even and $\sin$ is odd. Most functions are neither: $f(x) = x + 1$ has $f(-1) = 0$ but $f(1) = 2$ and
$-f(1) = -2$.

(The domain must itself be symmetric, containing $-x$ whenever it contains $x$, for these words to make sense.)

**Facts, with proofs.**

- If $f$ is odd and $0$ is in its domain, then $f(0) = 0$. *Proof:* $f(0) = f(-0) = -f(0)$, so $2f(0) = 0$.
- The product of two odd functions is even: $(fg)(-x) = f(-x)g(-x) = (-f(x))(-g(x)) = f(x)g(x)$.
  Similarly even times even is even, and even times odd is odd: the same rule as for signs, with "even" as $+$ and
  "odd" as $-$.
- The only function that is both even and odd is the zero function: $f(x) = f(-x) = -f(x)$ gives $f(x) = 0$.

**Theorem 6.2.** Every function $f$ on a symmetric domain is, in exactly one way, the sum of an even function and
an odd function.

*Proof.* Existence: define

$$
E(x) = \frac{f(x) + f(-x)}{2}, \qquad O(x) = \frac{f(x) - f(-x)}{2}.
$$

Then $E(-x) = \frac{f(-x) + f(x)}{2} = E(x)$, so $E$ is even; $O(-x) = \frac{f(-x) - f(x)}{2} = -O(x)$, so $O$ is
odd; and $E(x) + O(x) = f(x)$. Uniqueness: if $f = E_1 + O_1 = E_2 + O_2$, then $E_1 - E_2 = O_2 - O_1$ is both even
and odd, hence zero. $\square$

**Example 14.** For $f(x) = x^3 + 4x^2 - x + 7$, the even part collects the even powers, $E(x) = 4x^2 + 7$, and the
odd part the odd powers, $O(x) = x^3 - x$. Check with the formulas at $x = 2$: $f(2) = 8 + 16 - 2 + 7 = 29$ and
$f(-2) = -8 + 16 + 2 + 7 = 17$, so $E(2) = (29 + 17)/2 = 23 = 4 \cdot 4 + 7$ and $O(2) = (29 - 17)/2 = 6 = 8 - 2$.
Watch the signs inside $f(-x)$: that is where errors live.

For $f(x) = 2^x$ the even part is $\frac{2^x + 2^{-x}}{2}$ and the odd part $\frac{2^x - 2^{-x}}{2}$. With the
number $e$ of [Chapter 7](07-Exponents-and-Logarithms.md) in place of 2 these are the **hyperbolic functions**
$\cosh x$ and $\sinh x$, and in [Chapter 9](09-Complex-Numbers.md) the same split of $e^{ix}$ produces $\cos x$ and
$i \sin x$.

**Periodic functions.** $f$ is **periodic** with period $p > 0$ if $f(x + p) = f(x)$ for every $x$. The graph repeats
every $p$ units. $\sin$ and $\cos$ have period $2\pi$. The **fractional part** $\{x\} = x - \lfloor x \rfloor$, where
$\lfloor x \rfloor$ (the **floor**) is the largest integer $\le x$, has period 1: $\{3.7\} = 0.7$, $\{-1.2\} = 0.8$.

If $p$ is a period, so is $2p$, $3p$ and so on: $f(x + 2p) = f((x + p) + p) = f(x + p) = f(x)$. The smallest positive
period, when there is one, is called *the* period. A constant function has every positive number as a period and
so no smallest one.

Periodic functions describe anything that repeats: tides, seasons, a spinning wheel. Mars turns on its axis once
in about 24 hours 37 minutes relative to the stars, and its solar day, the **sol**, is about 24 hours 39 minutes
35 seconds. A lander's solar panel output, as a function of time, is close to periodic with period one sol (it
is not exactly periodic, since dust and the seasons change it slowly). The Martian year, about 687 Earth days,
is a second, much longer period on top.

**Piecewise functions.** A function can use different formulas on different parts of its domain. The
**absolute value** is the first example:

$$
|x| = \begin{cases} x & \text{if } x \ge 0, \\ -x & \text{if } x < 0. \end{cases}
$$

It measures distance from 0, so $|{-5}| = 5$. Piecewise functions are everywhere in real rules: postage that
jumps at each weight band, tax brackets, a phone plan that is flat up to some limit and then charges per unit.

**Example 15.** A courier charges 8 dollars for parcels up to 2 kg, then 3 dollars for each further kilogram or part
of one. As a function of the weight $w > 0$ in kg:

$$
C(w) = \begin{cases} 8 & \text{if } 0 < w \le 2, \\ 8 + 3\lceil w - 2 \rceil & \text{if } w > 2, \end{cases}
$$

where $\lceil t \rceil$ (the **ceiling**) is the smallest integer $\ge t$. A 4.3 kg parcel costs
$8 + 3\lceil 2.3 \rceil = 8 + 9 = 17$ dollars. The graph is a staircase, with jumps at 2, 3, 4, ... kg.

**Example 16.** Solve $|2x - 3| = x + 3$. Split by the sign of $2x - 3$. If $x \ge 1.5$: $2x - 3 = x + 3$, so $x = 6$,
which satisfies $x \ge 1.5$. If $x < 1.5$: $-(2x - 3) = x + 3$, so $-2x + 3 = x + 3$, $x = 0$, which satisfies
$x < 1.5$. Solutions $x = 0$ and $x = 6$. Check: $|{-3}| = 3 = 0 + 3$ and $|9| = 9 = 6 + 3$.

## 6.7 Functions as sets of pairs: the formal definition

*Level: advanced.*

We have said "a function is a rule". But what is a rule? Two different formulas can describe the same function:
$f(x) = (x + 1)^2 - 1$ and $g(x) = x^2 + 2x$ give the same output for every input, and we want to call them equal.
And a function need not have any formula: think of an assignment of a random number to each person. What matters
is only *which output goes with which input*, and that is recorded perfectly by the list of pairs.

The **Cartesian product** of sets $A$ and $B$ is the set of all ordered pairs:

$$
A \times B = \{(a, b) : a \in A, \ b \in B\}.
$$

The plane is $\mathbb{R} \times \mathbb{R}$, written $\mathbb{R}^2$.

**Definition.** A **function** from $A$ to $B$ is a subset $f \subseteq A \times B$ such that for every $a \in A$
there is exactly one $b \in B$ with $(a, b) \in f$. That $b$ is written $f(a)$.

Notice what this does. "The graph of $f$" in 6.2 was the set of pairs $(x, f(x))$. The formal definition says the
function **is** its graph. "Exactly one" is the vertical line test, written in words. A function is not a process
or a machine, it is a set of facts of the form "this input goes with that output". The machine picture of 6.4 is
still the best way to *think*; the set picture is the way to be *precise*.

Equality is now clear: two functions $f, g : A \to B$ are equal when they are the same set of pairs, that is,
$f(a) = g(a)$ for every $a \in A$. So $(x+1)^2 - 1$ and $x^2 + 2x$ really are one function.

Composition is also a statement about pairs: $(a, c) \in g \circ f$ exactly when there is some $b$ with
$(a, b) \in f$ and $(b, c) \in g$. The inverse of a bijection is the set of reversed pairs,
$f^{-1} = \{(b, a) : (a, b) \in f\}$, and the mirror-image fact of 6.5 is nothing more than this sentence.

A set of pairs where an $a$ can go with several $b$'s, or none, is still useful; it is called a **relation**. "Is less
than" is a relation on $\mathbb{R}$; the circle $x^2 + y^2 = 25$ is a relation. A function is a relation that
passes the "exactly one" test.

**Counting functions.** With functions as sets of pairs, we can count them. Let $A$ have $m$ elements and $B$ have
$n$.

- **All functions $A \to B$:** each of the $m$ inputs independently picks one of $n$ outputs, so there are
  $n \cdot n \cdots n = n^m$. This is why the set of all functions from $A$ to $B$ is often written $B^A$.
- **One-to-one functions:** the first input has $n$ choices, the second must differ ($n - 1$ choices), and so on:
  $n(n-1)\cdots(n - m + 1)$, which is 0 if $m > n$. With $m > n$ two inputs must share an output: this is the
  **pigeonhole principle**, stated as a fact about functions.
- **Bijections** exist only if $m = n$, and there are $n! = n(n-1)\cdots 2 \cdot 1$ of them. A bijection from a set to
  itself is a **permutation**, the raw material of group theory (Chapter 13).

**Example 17.** From $A = \{1, 2, 3, 4\}$ to $B = \{x, y, z\}$ there are $3^4 = 81$ functions and no one-to-one
ones. How many are onto? Count the functions that miss some output and subtract. Functions missing $x$: $2^4 = 16$,
and the same for missing $y$ or $z$. Functions missing two named outputs, say both $x$ and $y$: only 1 (everything
to $z$), and there are 3 such pairs. Missing all three: 0. By inclusion-exclusion, the number missing at least one
output is $3 \cdot 16 - 3 \cdot 1 + 0 = 45$, so the number of onto functions is $81 - 45 = 36$.

Check: an onto function from 4 elements to 3 must send two inputs to one output and one input to each of the
others. Choose the pair that shares: $\binom{4}{2} = 6$ ways (the binomial coefficient of
[Chapter 8](08-Sequences-Series-and-Induction.md)); then send the three "blocks" to $x, y, z$ bijectively: $3! = 6$
ways. Total $6 \times 6 = 36$.

**Try it in Python.**

```python
from itertools import product
A, B = [1, 2, 3, 4], ['x', 'y', 'z']
funcs = list(product(B, repeat=len(A)))        # each tuple lists f(1), f(2), f(3), f(4)
onto = [f for f in funcs if set(f) == set(B)]
print(len(funcs), len(onto))                   # 81 36
```

**Comparing sizes with functions.** Two finite sets have the same number of elements exactly when there is a
bijection between them; that is what counting *is* (pairing objects with the numbers $1, 2, \dots, n$). Georg Cantor,
in the 1870s and 1880s, took this as the *definition* of "same size" for infinite sets too, and found that
infinities come in different sizes. Here is one of his results, with its whole proof, because it uses nothing but
the definition of a function.

**Theorem 6.3 (Cantor).** For any set $A$, there is no onto function from $A$ to the set $\mathcal{P}(A)$ of all its
subsets.

*Proof.* Let $f : A \to \mathcal{P}(A)$ be any function; each $f(a)$ is a subset of $A$. Build the subset

$$
D = \{a \in A : a \notin f(a)\},
$$

the elements that are not in their own image. Suppose $D = f(d)$ for some $d \in A$. Is $d \in D$? If it is, then
by the definition of $D$, $d \notin f(d) = D$; if it is not, then $d \notin f(d)$, so by definition $d \in D$. Both
answers contradict themselves, so no such $d$ exists. $D$ is a subset that $f$ misses, and $f$ is not onto. $\square$

For a finite set with $m$ elements this says $2^m > m$, which you knew. For the natural numbers it says that the
subsets of $\mathbb{N}$ cannot be listed as a first, second, third, ...: there are "more" of them than natural
numbers. The [Infinity topic](../../topics/infinity/index.md) tells that story at a gentler pace.

**A short history.** The word *function* was used by Leibniz in the 1670s and 1690s for quantities attached to a
curve, and Johann Bernoulli and then Euler made it mean "an expression built from a variable". Euler's notation
$f(x)$ dates from the 1730s. Through the eighteenth century a function was a formula. Problems about vibrating
strings and heat flow, where Fourier (early 1800s) used sums of sines to represent quite arbitrary shapes, forced
a wider idea, and Dirichlet in 1837 described a function as any rule assigning one value to each input, formula or
not. The set-of-pairs definition was settled in the set theory of the late nineteenth and early twentieth
centuries. Each step widened the idea so that it could hold the examples mathematicians actually met.

## Check yourself

??? question "1. Find the domain and range of $f(x) = \dfrac{1}{\sqrt{5 - x}}$."

    We need $5 - x > 0$ (strictly, since we cannot divide by $\sqrt{0} = 0$), so the domain is $(-\infty, 5)$.
    As $x$ runs over this interval, $5 - x$ takes every positive value, so $\sqrt{5 - x}$ takes every positive value,
    and so does its reciprocal. Range: $(0, \infty)$.

??? question "2. For $f(x) = x^2 - 6x + 5$, find the $y$-intercept, the zeros, the lowest point and where $f(x) < 0$."

    $f(0) = 5$. Factor: $(x - 1)(x - 5)$, zeros 1 and 5. Complete the square: $(x - 3)^2 - 4$, lowest point $(3, -4)$.
    The parabola opens upward, so it is below the axis between its zeros: $1 < x < 5$.

??? question "3. Starting from $y = x^2$, describe the steps that give $y = -2(x + 1)^2 + 3$, and find its vertex and range."

    Shift left 1 (giving $(x+1)^2$), stretch vertically by 2 and flip (giving $-2(x+1)^2$), shift up 3. The vertex moves
    from $(0, 0)$ to $(-1, 3)$, and it is now the highest point. Range $(-\infty, 3]$. Check: $x = 0$ gives $-2 + 3 = 1 < 3$.

??? question "4. The graph of $y = f(x)$ passes through $(2, 5)$. Name a point on each of: $y = f(x - 4)$, $y = f(3x)$, $y = 2f(x) - 1$, $y = f(-x)$."

    $f(x - 4)$: shift right 4, giving $(6, 5)$, since $f(6 - 4) = f(2) = 5$. $f(3x)$: squeeze by 3, giving
    $(2/3, 5)$, since $f(3 \cdot 2/3) = f(2)$. $2f(x) - 1$: $(2, 9)$. $f(-x)$: $(-2, 5)$.

??? question "5. Let $f(x) = 2x + 1$ and $g(x) = x^2 - 3$. Find $f \circ g$, $g \circ f$ and $f \circ f$."

    $(f \circ g)(x) = 2(x^2 - 3) + 1 = 2x^2 - 5$. $(g \circ f)(x) = (2x + 1)^2 - 3 = 4x^2 + 4x - 2$.
    $(f \circ f)(x) = 2(2x + 1) + 1 = 4x + 3$. Check at $x = 1$: $f(g(1)) = f(-2) = -3 = 2 - 5$; $g(f(1)) = g(3) = 6 = 4 + 4 - 2$.

??? question "6. Find the inverse of $f(x) = \dfrac{x - 1}{2x + 3}$ and state the domains of $f$ and $f^{-1}$."

    $y(2x + 3) = x - 1$ gives $2xy + 3y = x - 1$, so $x(2y - 1) = -3y - 1$ and $x = \dfrac{-3y - 1}{2y - 1} = \dfrac{3y + 1}{1 - 2y}$.
    So $f^{-1}(x) = \dfrac{3x + 1}{1 - 2x}$. Domain of $f$: $x \neq -3/2$. Domain of $f^{-1}$: $x \neq 1/2$
    (the value $y = 1/2$ is never reached by $f$: it would need $0 = -5/2$). Check: $f(1) = 0$ and $f^{-1}(0) = 1$.

??? question "7. Show that $f(x) = x^3 + x$ is one-to-one on $\mathbb{R}$."

    Suppose $a^3 + a = b^3 + b$. Then $a^3 - b^3 + a - b = 0$, so $(a - b)(a^2 + ab + b^2 + 1) = 0$. Now
    $a^2 + ab + b^2 = (a + b/2)^2 + 3b^2/4 \ge 0$, so the second bracket is at least 1 and never zero. Hence
    $a - b = 0$.

??? question "8. Write $f(x) = \dfrac{1}{1 - x}$ (for $x \neq \pm 1$) as an even function plus an odd function."

    $f(-x) = \dfrac{1}{1 + x}$. Even part $E = \frac12\left(\frac{1}{1-x} + \frac{1}{1+x}\right) = \dfrac{1}{1 - x^2}$.
    Odd part $O = \frac12\left(\frac{1}{1-x} - \frac{1}{1+x}\right) = \dfrac{x}{1 - x^2}$. Check: $\dfrac{1 + x}{1 - x^2} = \dfrac{1}{1 - x}$.

??? question "9. Solve $|x - 2| + |x + 1| = 5$."

    The corners are at $x = -1$ and $x = 2$. For $x \ge 2$: $(x - 2) + (x + 1) = 2x - 1 = 5$, $x = 3$, valid.
    For $-1 \le x < 2$: $(2 - x) + (x + 1) = 3 \neq 5$, no solution. For $x < -1$: $(2 - x) - (x + 1) = 1 - 2x = 5$,
    $x = -2$, valid. Solutions $-2$ and $3$. (The left side is the total distance from $x$ to 2 and to $-1$.)

??? question "10. Prove: if $g \circ f$ is one-to-one, then $f$ is one-to-one. Must $g$ be one-to-one?"

    If $f(a_1) = f(a_2)$, then $g(f(a_1)) = g(f(a_2))$, and since $g \circ f$ is one-to-one, $a_1 = a_2$.
    $g$ need not be: take $f : \{1\} \to \{1, 2\}$ with $f(1) = 1$, and $g : \{1, 2\} \to \{1\}$ sending both to 1.
    Then $g \circ f$ is one-to-one (its domain has one element) but $g$ is not.

??? question "11. How many functions are there from a 3-element set to a 5-element set? How many are one-to-one? How many onto?"

    All: $5^3 = 125$. One-to-one: $5 \cdot 4 \cdot 3 = 60$. Onto: none, since 3 inputs cannot hit 5 outputs.

??? question "12. Let $f : A \to B$ and $g : B \to A$ with $g \circ f = \mathrm{id}_A$. Show that $f$ is one-to-one and $g$ is onto, and give an example where neither is a bijection."

    If $f(a_1) = f(a_2)$, apply $g$: $a_1 = a_2$. For any $a \in A$, $a = g(f(a))$, so $a$ is an output of $g$.
    Example: $A = \{1\}$, $B = \{1, 2\}$, $f(1) = 1$, $g(1) = g(2) = 1$. Then $g(f(1)) = 1$, but $f$ is not onto
    and $g$ is not one-to-one.

## What you learned

- A function gives exactly one output for each input in its domain; its range is the set of outputs actually reached.
- A graph is the set of points $(x, f(x))$; the vertical line test says which curves are graphs, and the graph shows
  zeros, intercepts, increase, decrease and sign at a glance (but proofs still need algebra).
- $f(x - h) + k$ shifts right by $h$ and up by $k$; $a f(x)$ stretches vertically; $f(bx)$ squeezes horizontally.
- Composition $f \circ g$ means "$g$ first, then $f$"; it is associative but not commutative.
- A function has an inverse exactly when it is a bijection (one-to-one and onto); the inverse's graph is the mirror
  image in $y = x$, and $(g \circ f)^{-1} = f^{-1} \circ g^{-1}$.
- Every function on a symmetric domain is uniquely an even part plus an odd part; periodic functions repeat;
  piecewise functions glue formulas together.
- Formally, a function from $A$ to $B$ is a subset of $A \times B$ with exactly one pair for each $a$; with that
  definition we can count functions and prove Cantor's theorem.

**Next:** [Chapter 7](07-Exponents-and-Logarithms.md), the exponential functions and their inverses, the logarithms.

## Further reading

- I. M. Gelfand, E. G. Glagoleva and E. E. Shnol, *Functions and Graphs* (Birkhäuser reprint, 1990).
- M. Spivak, *Calculus*, 4th edition, 2008, Chapter 3 ("Functions") and Chapter 4 ("Graphs").
- P. R. Halmos, *Naive Set Theory*, 1960, the sections on relations and functions.
- D. J. Velleman, *How to Prove It: A Structured Approach*, 3rd edition, 2019, Chapter 5 ("Functions").
- I. Kleiner, "Evolution of the Function Concept: A Brief Survey", *The College Mathematics Journal* 20(4), 1989.
- On this site: the Topics lessons [Functions](../../topics/algebra/level-7/04-functions.md),
  [Transformations](../../topics/algebra/level-7/05-transformations.md),
  [Inverse functions](../../topics/algebra/level-7/06-inverse-functions.md) and
  [Combining functions](../../topics/algebra/level-8/06-combining-functions.md); the U of T guides
  [MAT137 Unit 1: Logic, Sets & Proofs](../../uoft/MAT137/unit01.md),
  [MAT137 Unit 5: The MVT & Inverse Functions](../../uoft/MAT137/unit05.md) and
  [MAT158H1 Unit 8: Inverse Functions](../../uoft/MAT158H1/unit08.md); and the [Algebra book's contents](index.md).
