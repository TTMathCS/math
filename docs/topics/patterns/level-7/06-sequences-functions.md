---
title: "Sequences as functions"
---

# Sequences as functions

*Patterns and sequences · level 7, lesson 6 of 6*

## A question to start

The sequence $1, -1, 1, -1, 1, \ldots$ has terms $t_n = (-1)^n$ when you start counting at $n = 0$. Plot the terms as
dots: $(0, 1)$, $(1, -1)$, $(2, 1)$, $(3, -1)$, and so on. Now join the dots with a smooth curve. Which curve is the
right one?

A zig-zag of straight lines passes through every dot. So does the wave $y = \cos(\pi x)$. So does the faster wave
$y = \cos(3\pi x)$, and infinitely many others. The dots alone cannot tell them apart. So what is the graph of a
sequence, really? This lesson answers that question, and on the way connects everything you know about sequences to
everything you know about lines, parabolas and exponential curves.

## The idea

### A sequence is a function

A **function** is a rule that takes an input and gives exactly one output. You know functions like $f(x) = 3x + 2$:
put in $x = 4$, get out 14.

A sequence is also a rule that gives exactly one output for each input. The input is the **position** $n$ and the
output is the **term** $t_n$. The only difference is which inputs are allowed. The set of allowed inputs is called the
**domain**. For a sequence the domain is the **natural numbers** $1, 2, 3, \ldots$ (or $0, 1, 2, \ldots$ if you start
counting at 0). So

$$t_n = 3n + 2 \qquad\text{is the function}\qquad t(n) = 3n + 2 \text{ with domain } \{1, 2, 3, \ldots\}.$$

The writing $t_n$ is just a short way of writing $t(n)$. The set of outputs, here $\{5, 8, 11, 14, \ldots\}$, is the
**range**.

### Discrete and continuous

A function whose domain is all real numbers (or a whole interval of them) is called **continuous**-domain: its graph is
an unbroken line or curve. A function whose domain is made of separate points, with gaps between them, is called
**discrete**. A sequence is a discrete function. Its graph is a set of **dots**, one above each whole number, and the
spaces between the dots are not part of it. There is no "term number 2.5".

That answers the question at the start. The graph of $(-1)^n$ is the dots and nothing else. The curves through them
are graphs of **other** functions that happen to agree with the sequence at whole numbers. Joining the dots is often
helpful for the eye, but it adds information the sequence never had.

### Arithmetic sequences sit on lines

Take any arithmetic sequence, $t_n = a + (n - 1)d$. Multiply out:

$$t_n = dn + (a - d).$$

This has the form $y = mx + b$ with slope $m = d$ and intercept $b = a - d$. So the dots of an arithmetic sequence lie
on a straight line whose **slope is the common difference**, and whose $y$-intercept is the "zero term" $a - d$ that
you found in [level 4](../level-4/index.md). The reason is simple: going one step to the right (from $n$ to $n + 1$)
always goes up by $d$, and "the same rise for every step across" is exactly what makes a line straight.

### Geometric sequences sit on exponential curves

Take a geometric sequence, $t_n = ar^{\,n-1}$, with $r > 0$. Since $r^{\,n-1} = \frac{r^n}{r}$,

$$t_n = \frac{a}{r}\, r^n.$$

This has the form $y = c\,b^x$, an **exponential function**, with base $b = r$ and $c = \frac{a}{r}$ (the "zero term"
again: one step before $a$ is $\frac{a}{r}$). So the dots lie on an exponential curve. Going one step to the right
always **multiplies** by $r$, the same growth factor every step.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 190" role="img" aria-label="Left: the dots of 5, 8, 11, 14, 17 lie on a dashed straight line. Right: the dots of 1, 2, 4, 8, 16 lie on a dashed exponential curve">
  <g stroke="currentColor" stroke-width="1.2">
    <line x1="30" y1="170" x2="180" y2="170"/><line x1="30" y1="170" x2="30" y2="15"/>
    <line x1="220" y1="170" x2="370" y2="170"/><line x1="220" y1="170" x2="220" y2="15"/>
  </g>
  <line x1="30.0" y1="153.3" x2="178.4" y2="20.8" stroke="#9cc9ea" stroke-width="2" stroke-dasharray="6 4"/>
  <polyline fill="none" stroke="#7ccf9a" stroke-width="2" stroke-dasharray="6 4" points="220.0,165.3 225.6,164.6 231.2,163.8 236.8,162.9 242.4,161.8 248.0,160.6 253.6,159.2 259.2,157.6 264.8,155.8 270.4,153.7 276.0,151.2 281.6,148.5 287.2,145.3 292.8,141.6 298.4,137.4 304.0,132.5 309.6,126.9 315.2,120.5 320.8,113.2 326.4,104.7 332.0,95.0 337.6,83.8 343.2,71.0 348.8,56.3 354.4,39.4 360.0,20.0"/>
  <g fill="#eea66f" stroke="currentColor" stroke-width="1">
    <circle cx="58.0" cy="128.3" r="4"/><circle cx="86.0" cy="103.3" r="4"/><circle cx="114.0" cy="78.3" r="4"/>
    <circle cx="142.0" cy="53.3" r="4"/><circle cx="170.0" cy="28.3" r="4"/>
    <circle cx="248.0" cy="160.6" r="4"/><circle cx="276.0" cy="151.2" r="4"/><circle cx="304.0" cy="132.5" r="4"/>
    <circle cx="332.0" cy="95.0" r="4"/><circle cx="360.0" cy="20.0" r="4"/>
  </g>
  <g font-size="11" fill="currentColor" text-anchor="middle">
    <text x="58" y="184">1</text><text x="86" y="184">2</text><text x="114" y="184">3</text><text x="142" y="184">4</text><text x="170" y="184">5</text>
    <text x="248" y="184">1</text><text x="276" y="184">2</text><text x="304" y="184">3</text><text x="332" y="184">4</text><text x="360" y="184">5</text>
  </g>
  <text x="40" y="20" font-size="12" fill="currentColor">tₙ = 3n + 2</text>
  <text x="230" y="20" font-size="12" fill="currentColor">tₙ = 2ⁿ⁻¹</text>
</svg>
</div>

### Quadratic sequences sit on parabolas

A sequence with constant second differences has a rule $t_n = an^2 + bn + c$ ([level 5](../level-5/index.md)), and
its dots lie on the parabola $y = ax^2 + bx + c$. The table below sums up the dictionary between the two worlds.

| Sequence | What stays the same each step | Function it sits on |
| --- | --- | --- |
| arithmetic, $t_n = a + (n - 1)d$ | the difference $d$ | linear, $y = dx + (a - d)$, slope $d$ |
| quadratic, $t_n = an^2 + bn + c$ | the second difference $2a$ | quadratic, a parabola |
| geometric, $t_n = ar^{\,n-1}$ | the ratio $r$ | exponential, $y = \frac{a}{r} r^x$, base $r$ |

### Words for how sequences behave

Thinking of a sequence as a function brings words with it.

- **Increasing**: each term is bigger than the one before ($t_{n+1} > t_n$ for every $n$). **Decreasing**: each is
  smaller. A sequence can be neither, like $(-1)^n$, or $n^2 - 6n$, which goes $-5, -8, -9, -8, -5, \ldots$
- **Bounded**: all the terms stay between two fixed numbers. $\frac{n}{n+1}$ is bounded (always between 0 and 1);
  $2^n$ is not.
- **Converges**: the terms close in on one number, the **limit**, getting as close as you like and staying there.
  $\frac{n}{n+1} = \frac12, \frac23, \frac34, \ldots$ converges to 1. A sequence that does not converge **diverges**.
  You met this idea for partial sums in [lesson 3](03-infinite-geometric.md); now it applies to any sequence.

On a graph, a sequence converging to $L$ has dots that crowd closer and closer to the horizontal line $y = L$.

### Who wins in the long run?

Lines, parabolas and exponentials grow at very different speeds. Compare $100n$, $n^2$ and $2^n$:

| $n$ | 5 | 10 | 20 | 100 | 200 |
| --- | --- | --- | --- | --- | --- |
| $100n$ | 500 | 1000 | 2000 | 10 000 | 20 000 |
| $n^2$ | 25 | 100 | 400 | 10 000 | 40 000 |
| $2^n$ | 32 | 1024 | 1 048 576 | about $1.3 \times 10^{30}$ | about $1.6 \times 10^{60}$ |

The exponential passes the line at $n = 10$ and the parabola passes it at $n = 100$. However large the slope and
however small the starting value, an exponential sequence with $r > 1$ eventually beats every linear and every
quadratic one. The ratio $\frac{t_{n+1}}{t_n}$ tells you why: for $2^n$ it is always 2, while for $n^2$ it is
$\left(1 + \frac1n\right)^2$, which shrinks towards 1.

### Recursive sequences as repeated functions

A rule like $t_n = 3t_{n-1} - 1$ ([level 6](../level-6/index.md)) is a function $g(x) = 3x - 1$ applied again and
again: $t_2 = g(t_1)$, $t_3 = g(g(t_1))$, and so on. Repeating a function is called **iteration**. When the
outputs settle down, they settle on a number with $g(x) = x$. In [level 8](../level-8/index.md) you will draw iteration
as a picture and see when it settles and when it does not.

## Worked examples

**1. A decreasing arithmetic sequence.** Describe $t_n = 7 - 2n$ as a function.

Domain $\{1, 2, 3, \ldots\}$. Terms $5, 3, 1, -1, -3, \ldots$, so the range is the odd numbers 5 and below. It is
arithmetic with $d = -2$, so its dots lie on the line $y = -2x + 7$, slope $-2$. It is decreasing, not bounded below,
and it diverges.

**2. Finding the exponential.** The dots $(1, 4)$, $(2, 12)$, $(3, 36)$ are from a geometric sequence. Find its rule and
the exponential function the dots lie on.

Ratios: $\frac{12}{4} = \frac{36}{12} = 3$, so $r = 3$ and $t_n = 4 \cdot 3^{\,n-1}$. Since $3^{\,n-1} = \frac{3^n}{3}$,
this is $t_n = \frac43 \cdot 3^n$, and the dots lie on $y = \frac43 \cdot 3^x$. (The curve has a value at $x = 1.5$,
about 6.93, but the sequence does not: there is no term 1.5.)

**3. A converging sequence.** Show that $t_n = \frac{n}{n+1}$ is increasing and converges to 1, and find how big $n$
must be for $t_n$ to be within 0.001 of 1.

The gap from 1 is $1 - \frac{n}{n+1} = \frac{1}{n+1}$. As $n$ grows the gap shrinks, so the terms increase towards 1,
and the gap becomes smaller than any size you name. For the gap to be less than 0.001 we need $n + 1 > 1000$, that is
$n \ge 1000$.

**4. Exponential beats linear.** When does $2^n$ first pass $1000n$?

$2^{13} = 8192 < 13\,000$, but $2^{14} = 16\,384 > 14\,000$. From $n = 14$ on, the doubling stays ahead: each step,
$2^n$ doubles, while $1000n$ grows only by the fraction $\frac{n+1}{n}$, which is much less than 2.

**5. Quadratic dots.** The sequence $2, 6, 12, 20, 30, \ldots$ has first differences $4, 6, 8, 10$ and constant second
difference 2, so $t_n = n^2 + bn + c$. From $t_1 = 2$ and $t_2 = 6$: $1 + b + c = 2$ and $4 + 2b + c = 6$, so $b = 1$
and $c = 0$, and $t_n = n^2 + n = n(n+1)$. The dots lie on the parabola $y = x^2 + x$, which crosses the axis at $x = 0$
and $x = -1$: the "terms" there would be 0, the term before the start.

## Try it

1. For $t_n = 4n - 1$: give the slope and intercept of the line its dots lie on. Is 99 in its range? Is 100?
2. A sequence's graph has dots at $(1, 10)$, $(2, 7)$, $(3, 4)$, $(4, 1)$. Write its rule.
3. Write $t_n = 6\left(\frac12\right)^{n-1}$ in the form $c\,b^n$. Is it increasing, decreasing, or neither? Does it
   converge?
4. Increasing, decreasing or neither? (a) $\frac1n$ (b) $\frac{(-1)^n}{n}$ (c) $n^2 - 6n$
5. Find the first $n$ for which $2^n > 100n$.
6. Show that $\cos(\pi n) = (-1)^n$ and $\cos(3\pi n) = (-1)^n$ for every whole number $n$. What does this tell you
   about "the" curve through the dots of a sequence?
7. Explain, using the ratio of consecutive terms, why $1.01^n$ must eventually pass $1000n^2$, even though it starts
   far below.
8. Find the limit of $t_n = \frac{2n + 1}{n + 3}$, and the smallest $n$ for which $t_n$ is within 0.01 of it.

??? note "Answers"
    1. $t_n = 4n - 1$ is on $y = 4x - 1$: **slope 4, intercept $-1$**. $4n - 1 = 99$ gives $n = 25$, so **99 is**
       in the range (the 25th term). $4n - 1 = 100$ gives $n = 25.25$, not a whole number, so **100 is not**.
    2. The terms drop by 3 each step, starting at 10: $t_n = 10 - 3(n - 1) =$ **$13 - 3n$**.
    3. $\left(\frac12\right)^{n-1} = 2\left(\frac12\right)^n$, so $t_n = 12\left(\frac12\right)^n$: **$c = 12$,
       $b = \frac12$**. Terms $6, 3, 1.5, \ldots$: **decreasing**, and it **converges to 0**.
    4. (a) **Decreasing**: $1, \frac12, \frac13, \ldots$ (b) **Neither**: $-1, \frac12, -\frac13, \frac14, \ldots$
       jumps up and down (though it converges to 0). (c) **Neither**: $-5, -8, -9, -8, -5, 0, \ldots$ goes down, then up.
    5. $2^9 = 512 < 900$ and $2^{10} = 1024 > 1000$: **$n = 10$**.
    6. $\cos(\pi n)$ is $\cos 0 = 1$, $\cos \pi = -1$, $\cos 2\pi = 1$, ..., which is $(-1)^n$. And
       $\cos(3\pi n) = \cos(\pi \cdot 3n) = (-1)^{3n} = \bigl((-1)^3\bigr)^n = (-1)^n$. Two different curves pass through
       all the same dots, so **there is no single curve** through a sequence's dots: the sequence is only the dots.
    7. The ratio of consecutive terms of $1.01^n$ is always 1.01. For $1000n^2$ it is $\left(\frac{n+1}{n}\right)^2$,
       which shrinks towards 1. From $n = 400$ on, the quadratic's factor is at most $(1.0025)^2 \approx 1.005$, so at
       every step the exponential gains on the quadratic by a factor of at least $\frac{1.01}{1.005} > 1.004$. A factor
       bigger than 1, repeated enough times, overcomes any head start (that is what "exponential" means), so the
       exponential must catch up and pass. (It takes a while: the first $n$ with $1.01^n > 1000n^2$ is $n = 2246$.)
    8. Divide top and bottom by $n$: $\frac{2 + 1/n}{1 + 3/n}$, which closes in on $\frac21 = 2$. The gap is
       $2 - \frac{2n + 1}{n + 3} = \frac{2n + 6 - 2n - 1}{n + 3} = \frac{5}{n + 3}$. We need $\frac{5}{n + 3} < 0.01$,
       so $n + 3 > 500$, **$n \ge 498$**.

## Common mistake

**Joining the dots and reading off non-terms.** The curve $y = 1.5 \cdot 2^x$ has a value at $x = 2.5$, but the
sequence $3, 6, 12, \ldots$ has no term number 2.5. When a question asks for a term, the position must be a whole
number in the domain.

**Mixing up the slope with the first term.** For $t_n = a + (n - 1)d$, the slope of the line is $d$ and the intercept is
$a - d$, not $a$. The first term $a$ is the height at $x = 1$, not at $x = 0$.

## Where it leads

- Back: [Sums of squares and cubes](05-squares-cubes.md) · Next level: [Level 8: recursion and induction](../level-8/index.md),
  starting with [proof by induction](../level-8/01-proof-by-induction.md).
- [Level 7 page](index.md) · [Patterns topic page](../index.md)
- Lines, parabolas and exponential functions: [Algebra](../../algebra/index.md). How fast things change, and the
  rate of change of a function: [Change](../../change/index.md).
- The exact definition of a limit of a sequence, with proofs: [MAT137 Unit 11 (sequences)](../../../uoft/MAT137/unit11.md).
