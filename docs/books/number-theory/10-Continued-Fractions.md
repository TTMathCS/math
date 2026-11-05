# 10. Continued fractions

*Why is $22/7$ such a good stand-in for $\pi$, and why is $355/113$ so astonishingly better? How do calendar makers
decide how many leap years to put in a cycle, and how did an instrument maker choose the teeth on a pair of gears
to model a planet? All of these are one question: given a real number, which fractions with small denominators come
closest to it? This chapter answers it with the continued fraction, a way of writing any number that is really
Euclid's algorithm run on a real number. You will compute continued fractions, prove why their pieces (the
convergents) are the best possible approximations, see why square roots give repeating patterns, use them to solve
Pell's equation from the last chapter in a few lines, and then meet the deep theorems of Dirichlet, Liouville and
Roth on how well numbers can be approximated at all.*

!!! abstract "In this chapter"
    **You will learn:**

    - how to expand any real number as a continued fraction, and why a rational number gives a finite one
    - the recurrence for the convergents $p_n/q_n$ and the identity $p_n q_{n-1} - p_{n-1} q_n = (-1)^{n-1}$, with proofs
    - why convergents are the best approximations, and how to tell a convergent when you see one (Legendre's test)
    - why quadratic irrationals such as $\sqrt{7}$ have repeating continued fractions (Euler and Lagrange)
    - how to read off the smallest solution of Pell's equation $x^2 - dy^2 = 1$ from the expansion of $\sqrt{d}$
    - Dirichlet's approximation theorem by pigeonholes, Liouville's construction of a transcendental number, and Roth's theorem
    - how calendars and gear trains use convergents, with honest numbers for the Earth and Mars years

    **You need:** [Chapter 3](03-GCD-and-Euclids-Algorithm.md) (Euclid's algorithm) and
    [Chapter 9](09-Diophantine-Equations.md) (Pell's equation). A little algebra with fractions and the idea of a
    limit. For a gentler start on Euclid's algorithm, see the Topics lesson
    [Euclid's algorithm](../../topics/number-theory/level-4/04-euclids-algorithm.md).

    **Levels:** 10.1 is intermediate; 10.2, 10.3 and 10.5 are advanced (full proofs); 10.4 and 10.6 are advanced
    to expert (some proofs sketched, with references); 10.7 is intermediate and applied.

## 10.1 The algorithm

Start with a rectangle 43 units wide and 19 units tall. Cut off the biggest square you can, as many times as you
can. Two squares of side 19 fit, leaving a strip 5 wide. Turn to the strip, 19 by 5: three squares of side 5 fit,
leaving 4 by 5. One square of side 4 fits, leaving 1 by 4, which is exactly four squares of side 1. The numbers of
squares you cut were $2, 3, 1, 4$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 321 173" role="img" aria-label="A 43 by 19 rectangle cut greedily into squares: two of side 19, three of side 5, one of side 4 and four of side 1, matching the continued fraction 2, 3, 1, 4.">
  <rect x="10" y="10" width="133" height="133" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/>
  <text x="76.5" y="81.5" font-size="14" text-anchor="middle" fill="currentColor">19</text>
  <rect x="143" y="10" width="133" height="133" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/>
  <text x="209.5" y="81.5" font-size="14" text-anchor="middle" fill="currentColor">19</text>
  <rect x="276" y="10" width="35" height="35" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/>
  <text x="293.5" y="32.5" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <rect x="276" y="45" width="35" height="35" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/>
  <text x="293.5" y="67.5" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <rect x="276" y="80" width="35" height="35" fill="#9cc9ea" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/>
  <text x="293.5" y="102.5" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <rect x="276" y="115" width="28" height="28" fill="#7ccf9a" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/>
  <text x="290" y="134" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <rect x="304" y="115" width="7" height="7" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/>
  <rect x="304" y="122" width="7" height="7" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/>
  <rect x="304" y="129" width="7" height="7" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/>
  <rect x="304" y="136" width="7" height="7" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="1"/>
  <text x="160.5" y="165" font-size="11" text-anchor="middle" fill="currentColor">43 = 2·19 + 5, 19 = 3·5 + 4, 5 = 1·4 + 1, 4 = 4·1</text>
</svg>
</div>

The caption under the picture is Euclid's algorithm on 43 and 19 ([Chapter 3](03-GCD-and-Euclids-Algorithm.md)).
Now read the same steps as a statement about the fraction $43/19$:

$$
\frac{43}{19} = 2 + \frac{5}{19} = 2 + \cfrac{1}{\frac{19}{5}} = 2 + \cfrac{1}{3 + \frac{4}{5}}
= 2 + \cfrac{1}{3 + \cfrac{1}{1 + \cfrac{1}{4}}} .
$$

A tower of fractions like this, each with numerator 1, is a **(simple) continued fraction**. We write it compactly
as $[2; 3, 1, 4]$. The numbers $2, 3, 1, 4$ are its **partial quotients**. The semicolon separates the whole-number
part from the rest.

### The algorithm for any real number

The square-cutting works for any real number $x$, not only fractions. Write $\lfloor x \rfloor$ for the **floor**
of $x$, the largest whole number not above $x$ (so $\lfloor 2.7 \rfloor = 2$ and $\lfloor -2.7 \rfloor = -3$).

1. Set $x_0 = x$ and $a_0 = \lfloor x_0 \rfloor$.
2. If $x_n = a_n$ exactly, stop. Otherwise set $x_{n+1} = 1/(x_n - a_n)$ and $a_{n+1} = \lfloor x_{n+1} \rfloor$.

Since $0 < x_n - a_n < 1$, each $x_{n+1}$ is greater than 1, so every partial quotient after the first is a
positive whole number. The first one, $a_0$, can be any integer. The numbers $x_n$ are called the **complete
quotients**: at every stage,

$$
x = [a_0; a_1, \dots, a_{n-1}, x_n],
$$

where the last entry is allowed to be a real number. That one line is the whole definition; everything else is
bookkeeping.

**Example ($\sqrt{2}$).** $x_0 = \sqrt 2 \approx 1.414$, so $a_0 = 1$. Then
$x_1 = 1/(\sqrt 2 - 1) = \sqrt 2 + 1 \approx 2.414$ (multiply top and bottom by $\sqrt 2 + 1$), so $a_1 = 2$. Then
$x_2 = 1/(x_1 - 2) = 1/(\sqrt 2 - 1) = \sqrt 2 + 1$ again. The process repeats forever:

$$
\sqrt 2 = [1; 2, 2, 2, \dots] .
$$

**Example ($\pi$).** With $\pi = 3.14159265\ldots$: $a_0 = 3$, $x_1 = 1/0.14159265\ldots = 7.0625\ldots$ so $a_1 = 7$;
$x_2 = 1/0.0625133\ldots = 15.9965\ldots$ so $a_2 = 15$; $x_3 = 1.0034\ldots$ so $a_3 = 1$; $x_4 = 292.63\ldots$ so
$a_4 = 292$. Continuing,

$$
\pi = [3; 7, 15, 1, 292, 1, 1, 1, 2, 1, 3, 1, \dots] .
$$

Nobody has found a pattern in these numbers, and nobody expects one. Contrast Euler's discovery for $e$:

$$
e = [2; 1, 2, 1, 1, 4, 1, 1, 6, 1, 1, 8, \dots],
$$

with the pattern $1, 2k, 1$ going on forever. And the golden ratio $\varphi = (1 + \sqrt 5)/2$ is the simplest of
all: $\varphi = 1 + 1/\varphi$, so $\varphi = [1; 1, 1, 1, \dots]$.

### Rational numbers stop, irrational numbers do not

**Theorem 10.1.** The continued fraction algorithm stops after finitely many steps if and only if $x$ is rational.

*Proof.* If the algorithm stops at $x_n = a_n$, then $x$ is built from whole numbers by finitely many additions and
divisions, so it is rational. Conversely, let $x = a/b$ with $b > 0$. Each step replaces a fraction $r/s$ (with
$0 < r/s$ not whole) by $s/(r - \lfloor r/s \rfloor s)$, whose denominator $r \bmod s$ is the remainder of $r$
divided by $s$, strictly smaller than $s$. So the denominators form a strictly decreasing sequence of positive whole
numbers, which cannot go on forever. In fact the steps are exactly the divisions of Euclid's algorithm on $a$ and $b$,
and the partial quotients are its quotients. $\square$

So $[2; 3, 1, 4]$ for $43/19$ is just the list of quotients in Euclid's algorithm, and its length is the number of
division steps, which by Lamé's theorem in [Chapter 3](03-GCD-and-Euclids-Algorithm.md) is small.

A finite continued fraction can be written two ways, because $[\dots, a_n] = [\dots, a_n - 1, 1]$ when $a_n \geq 2$
(for example $[2; 3, 1, 4] = [2; 3, 1, 3, 1]$). The algorithm always produces the first form, with last entry at
least 2 (unless the number is a whole number). For an irrational number there is no such ambiguity: we will see in
10.2 that the infinite expansion is unique.

!!! note "Try it in Python"
    ```python
    from fractions import Fraction
    from math import floor

    def cf(x, terms=12):
        out = []
        for _ in range(terms):
            a = floor(x); out.append(a)
            if x == a: break
            x = 1 / (x - a)
        return out

    print(cf(Fraction(43, 19)))     # [2, 3, 1, 4]
    print(cf(Fraction(415, 93)))    # [4, 2, 6, 7]
    ```
    With a float such as `math.pi`, only the first dozen or so terms are right: rounding errors grow with every step,
    which is itself a sign of how sensitive the expansion is.

## 10.2 Convergents and their properties

*Level: advanced.*

Cut the expansion of $\pi$ off after a few terms and you get fractions:

$$
[3] = 3, \quad [3; 7] = \frac{22}{7}, \quad [3; 7, 15] = \frac{333}{106}, \quad [3; 7, 15, 1] = \frac{355}{113},
\quad [3; 7, 15, 1, 292] = \frac{103993}{33102} .
$$

These are the **convergents** of $\pi$. Computing each one from the top of the tower would be slow. A recurrence
does it in one pass.

**Theorem 10.2 (the recurrence).** Let $a_0, a_1, a_2, \dots$ be numbers with $a_i > 0$ for $i \geq 1$. Define

$$
p_{-2} = 0,\; p_{-1} = 1,\; p_n = a_n p_{n-1} + p_{n-2}; \qquad q_{-2} = 1,\; q_{-1} = 0,\; q_n = a_n q_{n-1} + q_{n-2} .
$$

Then for every $n \geq 0$ and every positive real $t$,

$$
[a_0; a_1, \dots, a_{n-1}, t] = \frac{t\, p_{n-1} + p_{n-2}}{t\, q_{n-1} + q_{n-2}}, \qquad\text{and in particular}\qquad
[a_0; a_1, \dots, a_n] = \frac{p_n}{q_n}.
$$

*Proof.* By induction on $n$. For $n = 0$ the claim reads $[t] = (t \cdot 1 + 0)/(t \cdot 0 + 1) = t$, true. Suppose
it holds for $n$, for every positive $t$. The continued fraction $[a_0; \dots, a_{n-1}, a_n, t]$ is the same as
$[a_0; \dots, a_{n-1}, a_n + 1/t]$, a fraction of length $n+1$ whose last entry is the real number $a_n + 1/t$. By
the induction hypothesis,

$$
[a_0; \dots, a_n, t] = \frac{(a_n + \frac1t) p_{n-1} + p_{n-2}}{(a_n + \frac1t) q_{n-1} + q_{n-2}}
= \frac{p_n + \frac1t p_{n-1}}{q_n + \frac1t q_{n-1}} = \frac{t\,p_n + p_{n-1}}{t\,q_n + q_{n-1}} .
$$

That is the claim for $n+1$. Putting $t = a_n$ in the claim for $n$ gives $[a_0; \dots, a_n] = p_n/q_n$. $\square$

In practice you lay it out as a table. Each new column is "partial quotient times the last entry, plus the one
before":

| $n$ | $-2$ | $-1$ | 0 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $a_n$ | | | 3 | 7 | 15 | 1 | 292 |
| $p_n$ | 0 | 1 | 3 | 22 | 333 | 355 | 103993 |
| $q_n$ | 1 | 0 | 1 | 7 | 106 | 113 | 33102 |

Check: $15 \cdot 22 + 3 = 333$, $1 \cdot 333 + 22 = 355$, $292 \cdot 355 + 333 = 103993$; and below,
$15 \cdot 7 + 1 = 106$, $113$, $292 \cdot 113 + 106 = 33102$.

**Theorem 10.3 (the determinant identity).** For $n \geq -1$,

$$
p_n q_{n-1} - p_{n-1} q_n = (-1)^{n-1} .
$$

*Proof.* For $n = -1$: $p_{-1} q_{-2} - p_{-2} q_{-1} = 1 \cdot 1 - 0 = 1 = (-1)^{-2}$. For the step, substitute
the recurrence:

$$
p_n q_{n-1} - p_{n-1} q_n = (a_n p_{n-1} + p_{n-2}) q_{n-1} - p_{n-1}(a_n q_{n-1} + q_{n-2})
= -(p_{n-1} q_{n-2} - p_{n-2} q_{n-1}),
$$

so the sign flips at each step. $\square$

Check on $\pi$: $355 \cdot 106 - 333 \cdot 113 = 37630 - 37629 = 1 = (-1)^{3-1}$.

Three consequences follow at once.

- **Convergents are in lowest terms.** Any common divisor of $p_n$ and $q_n$ divides $(-1)^{n-1}$, so
  $\gcd(p_n, q_n) = 1$. (When all $a_i$ are whole numbers, $p_n$ and $q_n$ are whole numbers too.)
- **Neighbouring convergents are close.** Dividing the identity by $q_n q_{n-1}$:
  $\dfrac{p_n}{q_n} - \dfrac{p_{n-1}}{q_{n-1}} = \dfrac{(-1)^{n-1}}{q_n q_{n-1}}$.
- **Denominators grow at least like Fibonacci numbers.** Since $a_n \geq 1$, $q_n \geq q_{n-1} + q_{n-2}$, and
  $q_0 = 1$, $q_1 = a_1 \geq 1$. So $q_n \geq F_{n+1}$, the $(n+1)$-st Fibonacci number, which grows like
  $\varphi^n$. The golden ratio, with every $a_n = 1$, has the slowest-growing denominators possible: its convergents
  are $1, 2, 3/2, 5/3, 8/5, \dots$, ratios of Fibonacci numbers.

### How close is a convergent?

Now let $x$ be irrational with complete quotients $x_n$. Using Theorem 10.2 with $t = x_{n+1}$,

$$
x - \frac{p_n}{q_n} = \frac{x_{n+1} p_n + p_{n-1}}{x_{n+1} q_n + q_{n-1}} - \frac{p_n}{q_n}
= \frac{q_n p_{n-1} - p_n q_{n-1}}{q_n (x_{n+1} q_n + q_{n-1})} = \frac{(-1)^n}{q_n (x_{n+1} q_n + q_{n-1})} .
$$


**Theorem 10.4.** Let $x$ be irrational with convergents $p_n/q_n$. For every $n \geq 0$:

1. the convergents alternate sides of $x$: $\dfrac{p_0}{q_0} < \dfrac{p_2}{q_2} < \dfrac{p_4}{q_4} < \dots < x < \dots < \dfrac{p_5}{q_5} < \dfrac{p_3}{q_3} < \dfrac{p_1}{q_1}$;
2. $\dfrac{1}{q_n(q_n + q_{n+1})} < \left| x - \dfrac{p_n}{q_n} \right| < \dfrac{1}{q_n q_{n+1}} \leq \dfrac{1}{q_n^2}$;
3. the "errors" $|q_n x - p_n|$ strictly decrease as $n$ grows;
4. $p_n/q_n \to x$, and the infinite continued fraction of $x$ is the only one (with whole $a_i$, $a_i \geq 1$ for $i \geq 1$) whose value is $x$.

*Proof.* (1) The formula above shows that $x - p_n/q_n$ has the sign of $(-1)^n$: below $x$ for even $n$, above for
odd $n$. The ordering within each side follows from (3), since the distance to $x$ shrinks.

(2) Since $a_{n+1} < x_{n+1} < a_{n+1} + 1$ (strictly, because $x$ is irrational), the number
$x_{n+1} q_n + q_{n-1}$ lies strictly between $a_{n+1} q_n + q_{n-1} = q_{n+1}$ and $q_{n+1} + q_n$. Put this in the
denominator of the formula.

(3) From the same formula, $|q_n x - p_n| = 1/(x_{n+1} q_n + q_{n-1})$. We just saw that $x_{n+1}q_n + q_{n-1} <
q_{n+1} + q_n$. On the other side, $x_{n+2} > 1$ gives $x_{n+2} q_{n+1} + q_n > q_{n+1} + q_n$. So
$|q_{n+1} x - p_{n+1}| < 1/(q_{n+1} + q_n) < |q_n x - p_n|$.

(4) Convergence follows from (2), because $q_n \geq F_{n+1} \to \infty$. For uniqueness, suppose
$x = [b_0; b_1, b_2, \dots]$ is any convergent infinite continued fraction with whole $b_i$ and $b_i \geq 1$ for
$i \geq 1$. Its tail $y = [b_1; b_2, \dots]$ is greater than $b_1 \geq 1$, so $x = b_0 + 1/y$ lies strictly between
$b_0$ and $b_0 + 1$. Hence $b_0 = \lfloor x \rfloor = a_0$, and $y = 1/(x - a_0) = x_1$. Repeating the argument on
$x_1$ gives $b_1 = a_1$, and so on. $\square$

**Worked example.** For $\pi$ and $355/113$ (so $n = 3$, $q_3 = 113$, $q_4 = 33102$), part (2) promises

$$
\frac{1}{113 \cdot 33215} \approx 2.6643 \times 10^{-7} \;<\; \left|\pi - \frac{355}{113}\right| \;<\; \frac{1}{113 \cdot 33102} \approx 2.6734 \times 10^{-7}.
$$

Check: $355/113 = 3.14159292\ldots$ and $\pi = 3.14159265\ldots$, a difference of $2.6676 \times 10^{-7}$, inside the
window. The huge next partial quotient $a_4 = 292$ is what makes $q_4$ large and $355/113$ so good: the error is about
$1/(292 \cdot 113^2)$ instead of the typical $1/113^2$.

<figure class="play" data-play="contfrac"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> The convergents of π, √2, e and the golden ratio, each closer than the one before. 355/113 is π's famous one.</figcaption></figure>

## 10.3 Best approximations

*Level: advanced.*

What exactly does "best" mean? There are two natural answers.

- A fraction $p/q$ (with $q > 0$) is a **best approximation of the first kind** to $x$ if every fraction closer to
  $x$ has a larger denominator: $|x - p'/q'| < |x - p/q|$ implies $q' > q$.
- It is a **best approximation of the second kind** if the stronger statement holds with $|qx - p|$ in place of
  $|x - p/q|$: $|q'x - p'| < |qx - p|$ implies $q' > q$.

The second kind measures the error *times the denominator*, which is the natural quantity when you think of gears or
calendars: in a cycle of $q$ years you are off by $|qx - p|$ days, however you count.

**Theorem 10.5 (Lagrange).** Let $x$ be irrational and $n \geq 0$. If $p, q$ are integers with $0 < q < q_{n+1}$,
then $|qx - p| \geq |q_n x - p_n|$, with equality only when $(p, q) = (p_n, q_n)$.

*Proof.* Because $p_n q_{n+1} - p_{n+1} q_n = \pm 1$, the matrix
$\begin{pmatrix} p_n & p_{n+1} \\ q_n & q_{n+1} \end{pmatrix}$ has determinant $\pm 1$, so its inverse has integer
entries and we can solve

$$
p = u\,p_n + v\,p_{n+1}, \qquad q = u\,q_n + v\,q_{n+1}
$$

with whole numbers $u, v$. Then $qx - p = u(q_n x - p_n) + v(q_{n+1} x - p_{n+1})$.

- If $v = 0$, then $(p, q) = u(p_n, q_n)$ with $u \geq 1$ (because $q > 0$), so $|qx - p| = u|q_n x - p_n|$, which is
  at least $|q_n x - p_n|$, with equality exactly when $u = 1$.
- If $u = 0$, then $q = v q_{n+1} \geq q_{n+1}$, which is excluded.
- Otherwise $u$ and $v$ are both nonzero and have opposite signs: if $v > 0$ then $u q_n = q - v q_{n+1} < 0$, and if
  $v < 0$ then $u q_n = q - v q_{n+1} > 0$. By Theorem 10.4(1), $q_n x - p_n$ and $q_{n+1} x - p_{n+1}$ also have
  opposite signs. So the two terms $u(q_n x - p_n)$ and $v(q_{n+1} x - p_{n+1})$ have the *same* sign, and
  $|qx - p| = |u|\,|q_n x - p_n| + |v|\,|q_{n+1} x - p_{n+1}| > |q_n x - p_n|$. $\square$

**Corollary 10.6.** Every convergent $p_n/q_n$ with $n \geq 1$ is a best approximation of both kinds. In particular,
no fraction with denominator at most $q_n$ is closer to $x$ than $p_n/q_n$.

*Proof.* Second kind is Theorem 10.5 (if $q \le q_n < q_{n+1}$ then $|qx - p| \geq |q_n x - p_n|$). For the first
kind, if $q \leq q_n$ then $|x - p/q| = |qx - p|/q \geq |q_n x - p_n|/q \geq |q_n x - p_n|/q_n = |x - p_n/q_n|$. $\square$

So $355/113$ beats every fraction with denominator up to 113, and in fact, by Theorem 10.5, no fraction with
denominator below $q_4 = 33102$ has a smaller value of $|q\pi - p|$. A short computer search confirms the first-kind
statement and shows something more: the first fraction closer to $\pi$ than $355/113$ is $52163/16604$.

That fraction is not a convergent. It is a **semiconvergent** (or intermediate fraction),
$(k p_3 + p_2)/(k q_3 + q_2)$ with $k = 146$, one of the fractions "on the way" from $p_2/q_2$ to $p_4/q_4$ (which is
the case $k = 292$). The full answer to "which fractions are best of the first kind" is: the convergents, together
with those semiconvergents $(k p_n + p_{n-1})/(k q_n + q_{n-1})$ with $a_{n+1}/2 < k < a_{n+1}$, and sometimes the one
with $k = a_{n+1}/2$. Below denominator 120 the best approximations of the first kind to $\pi$ are

$$
\frac{3}{1}, \frac{13}{4}, \frac{16}{5}, \frac{19}{6}, \frac{22}{7}, \frac{179}{57}, \frac{201}{64}, \frac{223}{71},
\frac{245}{78}, \frac{267}{85}, \frac{289}{92}, \frac{311}{99}, \frac{333}{106}, \frac{355}{113}.
$$

For example, if you insist on a denominator of at most 100, the best you can do is $311/99$, not $22/7$. The
best approximations of the second kind are exactly the convergents: that is the cleaner theory, and the one
calendars and gears need.

### How to recognise a convergent

**Theorem 10.7 (Legendre).** If $x$ is irrational and $p/q$ is a fraction with $q \geq 1$ and

$$
\left| x - \frac{p}{q} \right| < \frac{1}{2q^2},
$$

then $p/q$ is a convergent of $x$.

*Proof.* We may assume $\gcd(p, q) = 1$ (reducing the fraction only makes $q$ smaller and the inequality stronger).
Suppose $p/q$ is not a convergent. Since $q_0 = 1 \leq q$ and $q_n \to \infty$, there is an $n$ with
$q_n \leq q < q_{n+1}$. By Theorem 10.5, $|q_n x - p_n| \leq |qx - p| < 1/(2q)$, so
$|x - p_n/q_n| < 1/(2 q q_n)$. Since $p/q \neq p_n/q_n$, the numerator of their difference is a nonzero integer:

$$
\frac{1}{q q_n} \leq \left| \frac{p}{q} - \frac{p_n}{q_n} \right| \leq \left| x - \frac{p}{q} \right| + \left| x - \frac{p_n}{q_n} \right|
< \frac{1}{2q^2} + \frac{1}{2 q q_n} .
$$

Subtracting $1/(2qq_n)$ gives $1/(2 q q_n) < 1/(2q^2)$, that is $q < q_n$, a contradiction. $\square$

The constant $\tfrac12$ cannot be raised to 1. For example $4/3$ satisfies $|\sqrt 2 - 4/3| \approx 0.081 < 1/9$, but
it is not a convergent of $\sqrt 2$ (those are $1, 3/2, 7/5, 17/12, \dots$). What matters for us is the use of the theorem in
10.5: it turns "find all solutions of Pell's equation" into "look at the convergents of $\sqrt d$".

## 10.4 Periodic continued fractions and quadratic irrationals

*Level: advanced.*

Here are the expansions of a few square roots, with a bar over the part that repeats:

| $d$ | $\sqrt d$ | period length |
| --- | --- | --- |
| 2 | $[1; \overline{2}]$ | 1 |
| 3 | $[1; \overline{1, 2}]$ | 2 |
| 7 | $[2; \overline{1, 1, 1, 4}]$ | 4 |
| 13 | $[3; \overline{1, 1, 1, 1, 6}]$ | 5 |
| 19 | $[4; \overline{2, 1, 3, 1, 2, 8}]$ | 6 |
| 61 | $[7; \overline{1, 4, 3, 1, 2, 2, 1, 3, 4, 1, 14}]$ | 11 |

Two patterns jump out. Every expansion repeats, and the repeating block (apart from its last entry, which is always
$2a_0$) reads the same backwards. The second pattern is a theorem of Legendre that we state without proof; the first
is a theorem of Lagrange, and we prove it fully.

A **quadratic irrational** is an irrational number that is a root of a quadratic equation $Ax^2 + Bx + C = 0$ with
integer coefficients, $A \neq 0$. Equivalently, it has the form $(P + \sqrt D)/Q$ with integers $P, Q \neq 0$ and
$D > 0$ not a perfect square. Its **conjugate** is $(P - \sqrt D)/Q$, the other root.

**Theorem 10.8 (Euler; Lagrange, 1770).** The continued fraction of a real number $x$ is eventually
periodic if and only if $x$ is a quadratic irrational.

*Proof that periodic implies quadratic (Euler).* First suppose the expansion is purely periodic,
$x = [\overline{a_0; a_1, \dots, a_{l-1}}]$. Then $x = [a_0; a_1, \dots, a_{l-1}, x]$, and Theorem 10.2 gives

$$
x = \frac{x\,p_{l-1} + p_{l-2}}{x\,q_{l-1} + q_{l-2}}, \qquad\text{so}\qquad q_{l-1} x^2 + (q_{l-2} - p_{l-1}) x - p_{l-2} = 0,
$$

a quadratic with integer coefficients and $q_{l-1} \neq 0$. The number is irrational because its expansion is
infinite (Theorem 10.1). If the expansion is only eventually periodic, $x = [a_0; \dots, a_{k-1}, y]$ with $y$ purely
periodic, so $x = (y p_{k-1} + p_{k-2})/(y q_{k-1} + q_{k-2})$. A fraction $(ay + b)/(cy + d)$ with integers
$a, b, c, d$ and $ad - bc = \pm 1$ applied to a quadratic irrational $y$ is again in $\mathbb{Q}(\sqrt D)$ and not
rational, so it is again a quadratic irrational.

*Proof that quadratic implies periodic (Lagrange).* Let $x$ be a root of $f(t) = At^2 + Bt + C$, with integer
coefficients and discriminant $\Delta = B^2 - 4AC > 0$, not a square. Write $x = (p_{n-1} x_n + p_{n-2})/(q_{n-1} x_n
+ q_{n-2})$ and substitute into $f(x) = 0$, then clear denominators. You get an equation

$$
A_n x_n^2 + B_n x_n + C_n = 0, \qquad A_n = A p_{n-1}^2 + B p_{n-1} q_{n-1} + C q_{n-1}^2 = q_{n-1}^2\, f\!\left(\frac{p_{n-1}}{q_{n-1}}\right), \qquad C_n = A_{n-1},
$$

with integer coefficients. A direct calculation (or the fact that a change of variable with determinant $\pm 1$
preserves discriminants) shows $B_n^2 - 4A_n C_n = \Delta$ for every $n$. Now the key estimate. Factor
$f(t) = A(t - x)(t - x')$, where $x'$ is the conjugate. With $p/q = p_{n-1}/q_{n-1}$ we know
$|p/q - x| < 1/q^2$, so

$$
|A_n| = q^2 |A| \left|\frac pq - x\right| \left|\frac pq - x'\right| < |A| \left( |x - x'| + \frac{1}{q^2} \right) \leq |A|\,(|x - x'| + 1).
$$

So $|A_n|$ is bounded by a number that does not depend on $n$. So is $|C_n| = |A_{n-1}|$, and then
$B_n^2 = \Delta + 4 A_n C_n$ is bounded too. There are only finitely many integer triples $(A_n, B_n, C_n)$ within
these bounds, and each has at most two roots. So among the infinitely many complete quotients $x_n$ only finitely many
different values occur: some value repeats, $x_m = x_{m+l}$ with $l \geq 1$. Since each complete quotient determines
all later ones (by the algorithm), the expansion is periodic from position $m$ onwards. $\square$

**Which numbers are purely periodic?** Galois (1829, his first published paper) found the answer: a quadratic
irrational $x$ has a purely periodic expansion exactly when $x > 1$ and its conjugate lies between $-1$ and 0. Such
numbers are called **reduced**. For example $\sqrt 7 + 2$ is reduced (its conjugate $2 - \sqrt 7 \approx -0.65$), so
$\sqrt 7 + 2 = [\overline{4; 1, 1, 1}]$, and therefore $\sqrt 7 = [2; \overline{1, 1, 1, 4}]$: the shape
$[a_0; \overline{a_1, \dots, a_{l-1}, 2a_0}]$ for every square root comes from this.

### Computing the expansion of $\sqrt d$ exactly

Decimals are a bad way to expand $\sqrt d$ because errors pile up. There is an exact method using only whole numbers.
Every complete quotient has the form

$$
x_n = \frac{P_n + \sqrt d}{Q_n}
$$

with integers $P_n, Q_n > 0$, and they obey

$$
a_n = \left\lfloor \frac{a_0 + P_n}{Q_n} \right\rfloor, \qquad P_{n+1} = a_n Q_n - P_n, \qquad Q_{n+1} = \frac{d - P_{n+1}^2}{Q_n},
$$

starting from $P_0 = 0$, $Q_0 = 1$, $a_0 = \lfloor \sqrt d \rfloor$. (That $Q_{n+1}$ is a whole number is part of the
claim; it follows by induction, because $P_{n+1} \equiv -P_n \pmod{Q_n}$ gives $d - P_{n+1}^2 \equiv d - P_n^2
= Q_n Q_{n-1} \equiv 0 \pmod{Q_n}$. The formula for $a_n$ uses $\lfloor (P_n + \sqrt d)/Q_n \rfloor = \lfloor
(P_n + a_0)/Q_n \rfloor$, which holds because $\lfloor y/Q \rfloor = \lfloor \lfloor y \rfloor / Q \rfloor$ for any
positive whole number $Q$, and $\lfloor P_n + \sqrt d \rfloor = P_n + a_0$.)

**Worked example ($\sqrt 7$, $a_0 = 2$).**

| $n$ | $P_n$ | $Q_n$ | $a_n$ |
| --- | --- | --- | --- |
| 0 | 0 | 1 | 2 |
| 1 | $2 \cdot 1 - 0 = 2$ | $(7 - 4)/1 = 3$ | $\lfloor 4/3 \rfloor = 1$ |
| 2 | $1 \cdot 3 - 2 = 1$ | $(7 - 1)/3 = 2$ | $\lfloor 3/2 \rfloor = 1$ |
| 3 | $1 \cdot 2 - 1 = 1$ | $(7 - 1)/2 = 3$ | $\lfloor 3/3 \rfloor = 1$ |
| 4 | $1 \cdot 3 - 1 = 2$ | $(7 - 4)/3 = 1$ | $\lfloor 4/1 \rfloor = 4$ |
| 5 | $4 \cdot 1 - 2 = 2$ | $(7-4)/1 = 3$ | 1 (repeats) |

Check: $x_1 = (2 + \sqrt 7)/3$ should equal $1/(\sqrt 7 - 2)$. Multiply: $(\sqrt 7 - 2)(\sqrt 7 + 2) = 3$. Yes.
When $Q_n = 1$ appears again (at $n = 4$), the period is complete.

## 10.5 Solving Pell's equation with continued fractions

*Level: advanced.*

In [Chapter 9](09-Diophantine-Equations.md) you met **Pell's equation** $x^2 - d y^2 = 1$, for a positive whole
number $d$ that is not a square. You saw that its solutions in positive integers, if there are any, are all powers of
the smallest one: $x_k + y_k \sqrt d = (x_1 + y_1 \sqrt d)^k$. What was missing was a way to *find* the smallest
solution, and a proof that one always exists. Continued fractions supply both.

**Step 1: every solution is a convergent.** If $x^2 - d y^2 = 1$ with $x, y > 0$, then
$x - y\sqrt d = 1/(x + y \sqrt d)$, which is positive, so $x > y\sqrt d$ and $x + y\sqrt d > 2y\sqrt d$. Dividing by
$y$,

$$
0 < \frac{x}{y} - \sqrt d = \frac{1}{y(x + y\sqrt d)} < \frac{1}{2 y^2 \sqrt d} < \frac{1}{2y^2} .
$$

By Legendre's test (Theorem 10.7), $x/y$ is a convergent $p_n/q_n$ of $\sqrt d$. (It is in lowest terms because any
common factor of $x$ and $y$ would divide 1.)

**Step 2: which convergents work.** The next identity tells us exactly what $p_n^2 - d q_n^2$ is.

**Theorem 10.9.** For the convergents of $\sqrt d$ and the numbers $Q_n$ of 10.4,

$$
p_n^2 - d\,q_n^2 = (-1)^{n+1} Q_{n+1} \qquad (n \geq 0).
$$

*Proof.* Write $y = x_{n+1} = (P + \sqrt d)/Q$ with $P = P_{n+1}$, $Q = Q_{n+1}$. By Theorem 10.2,
$\sqrt d\,(y q_n + q_{n-1}) = y p_n + p_{n-1}$. Multiply by $Q$ and expand:

$$
\sqrt d\,(P q_n + Q q_{n-1}) + d\,q_n = (P p_n + Q p_{n-1}) + \sqrt d\, p_n .
$$

Since $\sqrt d$ is irrational, the rational parts and the $\sqrt d$ parts must match separately:
$d q_n = P p_n + Q p_{n-1}$ and $p_n = P q_n + Q q_{n-1}$. Multiply the first by $q_n$ and the second by $p_n$, and
subtract:

$$
p_n^2 - d q_n^2 = Q\,(p_n q_{n-1} - p_{n-1} q_n) = Q \cdot (-1)^{n-1} = (-1)^{n+1} Q_{n+1}. \qquad \square
$$

Check on $\sqrt 7$, whose convergents are $2/1, 3/1, 5/2, 8/3, \dots$: $2^2 - 7 = -3 = -Q_1$; $3^2 - 7 = 2 = Q_2$;
$5^2 - 28 = -3 = -Q_3$; $8^2 - 63 = 1 = Q_4$.

So $p_n^2 - d q_n^2 = 1$ exactly when $Q_{n+1} = 1$ and $n$ is odd. One more fact, which we state with a sketch of the
reason: **$Q_k = 1$ happens exactly when $k$ is a multiple of the period length $l$.** (If $Q_k = 1$ then
$x_k = P_k + \sqrt d$ with $P_k = a_0$, which is reduced, so it begins a new period; conversely at $k = l$ the
complete quotient is $a_0 + \sqrt d$ again. And $Q_k = -1$ never happens because all $Q_k$ are positive.) Putting
everything together:

**Theorem 10.10.** Let $\sqrt d$ have period length $l$. The smallest positive solution of $x^2 - d y^2 = 1$ is

- $(x, y) = (p_{l-1}, q_{l-1})$ if $l$ is even;
- $(x, y) = (p_{2l-1}, q_{2l-1})$ if $l$ is odd. In this case $(p_{l-1}, q_{l-1})$ solves the **negative Pell
  equation** $x^2 - d y^2 = -1$.

In particular a solution always exists, because every $\sqrt d$ has a periodic expansion (Theorem 10.8). This settles
the existence statement that [Chapter 9](09-Diophantine-Equations.md) had to take on trust.

**Worked example ($d = 7$, $l = 4$, even).** The convergents of $[2; 1, 1, 1, 4, \dots]$ are $2/1, 3/1, 5/2, 8/3$. So
the smallest solution is $(8, 3)$. Check: $64 - 63 = 1$.

**Worked example ($d = 13$, $l = 5$, odd).** $\sqrt{13} = [3; \overline{1, 1, 1, 1, 6}]$. The convergents are

$$
\frac31, \frac41, \frac72, \frac{11}{3}, \frac{18}{5}, \frac{119}{33}, \frac{137}{38}, \frac{256}{71}, \frac{393}{109}, \frac{649}{180}.
$$

At $n = l - 1 = 4$: $18^2 - 13 \cdot 5^2 = 324 - 325 = -1$. At $n = 2l - 1 = 9$: $649^2 - 13 \cdot 180^2 = 421201 -
421200 = 1$. And indeed $(18 + 5\sqrt{13})^2 = 649 + 180\sqrt{13}$.

**Worked example ($d = 61$).** The period is 11 (odd), the entries are shown in the table of 10.4, and the
convergent at $n = 10$ is $29718/3805$, with $29718^2 - 61 \cdot 3805^2 = -1$. Squaring,
$(29718 + 3805\sqrt{61})^2 = 1766319049 + 226153980\sqrt{61}$, so the smallest solution of $x^2 - 61y^2 = 1$ is

$$
x = 1766319049, \qquad y = 226153980 .
$$

A ten-digit answer to an equation with a two-digit coefficient: this is why $d = 61$ became famous. Bhāskara II
solved it in the twelfth century with the Indian *chakravāla* method, and Fermat set the same case as a challenge
to other mathematicians in 1657. The continued fraction method, worked out by Euler and Lagrange, is the one that
comes with a proof that it always succeeds.

!!! note "Try it in Python"
    ```python
    from math import isqrt

    def pell(d):
        a0 = isqrt(d); P, Q, a = 0, 1, a0
        p0, p1, q0, q1 = 1, a0, 0, 1          # p_{-1}, p_0, q_{-1}, q_0
        while p1 * p1 - d * q1 * q1 != 1:
            P = a * Q - P; Q = (d - P * P) // Q; a = (a0 + P) // Q
            p0, p1 = p1, a * p1 + p0
            q0, q1 = q1, a * q1 + q0
        return p1, q1

    print(pell(7), pell(13), pell(61))
    # (8, 3) (649, 180) (1766319049, 226153980)
    ```

The period of $\sqrt d$ can be as long as roughly $\sqrt d \log d$, and the smallest solution can have about that
many digits, so for $d$ with hundreds of digits the method above becomes hopeless and faster methods (using the
"regulator" of the number field $\mathbb{Q}(\sqrt d)$, see [Chapter 17](17-Algebraic-Number-Theory.md)) take over.
That is honest but advanced; for any $d$ you are likely to write by hand, the loop above finishes instantly.

## 10.6 How well can numbers be approximated?

*Level: advanced to expert.*

Theorem 10.4 says every irrational $x$ has infinitely many fractions with $|x - p/q| < 1/q^2$. There is a second
proof of this that uses no continued fractions at all, and its idea goes much further.

**Theorem 10.11 (Dirichlet's approximation theorem, 1842).** Let $x$ be any real number and $N \geq 1$ a whole
number. There are integers $p, q$ with $1 \leq q \leq N$ and

$$
|qx - p| < \frac{1}{N} .
$$

*Proof.* Look at the $N + 1$ numbers $\{0 \cdot x\}, \{1 \cdot x\}, \dots, \{N x\}$, where $\{y\} = y - \lfloor y
\rfloor$ is the fractional part, a number in $[0, 1)$. Cut $[0, 1)$ into the $N$ boxes $[0, \tfrac1N),
[\tfrac1N, \tfrac2N), \dots, [\tfrac{N-1}{N}, 1)$. There are more numbers than boxes, so by the **pigeonhole
principle** two of them, say $\{ix\}$ and $\{jx\}$ with $0 \leq i < j \leq N$, land in the same box, and differ by
less than $1/N$. Now $\{jx\} - \{ix\} = (j - i)x - (\lfloor jx \rfloor - \lfloor ix \rfloor)$, so $q = j - i$ and
$p = \lfloor jx \rfloor - \lfloor ix \rfloor$ work, with $1 \leq q \leq N$. $\square$

**Corollary.** If $x$ is irrational, there are infinitely many fractions $p/q$ with $|x - p/q| < 1/q^2$.

*Proof.* Theorem 10.11 gives $|x - p/q| < 1/(qN) \leq 1/q^2$. If there were only finitely many such fractions, each
has $|qx - p| > 0$ (as $x$ is irrational); choose $N$ so large that $1/N$ is smaller than all of these values.
Dirichlet's theorem with this $N$ produces a fraction with $|qx - p| < 1/N$, which must be a new one. $\square$

The pigeonhole proof works just as well for several numbers at once (put the points $(\{qx_1\}, \dots, \{qx_k\})$ in
$N^k$ small cubes), which continued fractions cannot do. That is why Dirichlet's argument, not the continued fraction,
is the starting point of the modern subject of *Diophantine approximation*.

### Can we do better than $1/q^2$?

**Hurwitz's theorem (1891).** Every irrational $x$ has infinitely many fractions with
$|x - p/q| < 1/(\sqrt 5\, q^2)$, and $\sqrt 5$ cannot be replaced by any larger constant.

The extreme case is the golden ratio. Its convergents are ratios of Fibonacci numbers, and $q^2 |\varphi - p/q|$
tends to $1/\sqrt 5 \approx 0.4472$: every partial quotient is 1, so by Theorem 10.4 the error is as large as it can
ever be. In this precise sense **the golden ratio is the hardest number to approximate by fractions**. The proof of
Hurwitz's theorem shows that among any three consecutive convergents, one satisfies the bound (see Hardy and Wright,
Chapter 11). If you remove $\varphi$ and the numbers whose expansions end in all 1s, the best constant rises to
$\sqrt 8$, then to $\sqrt{221}/5$, and so on: Markov showed around 1880 that the constants below 3 are exactly
$\sqrt{9 - 4/m^2}$ for the Markov numbers $m = 1, 2, 5, 13, 29, \dots$ of [Chapter 9](09-Diophantine-Equations.md).

### Liouville: approximation proves transcendence

A number is **algebraic** if it is a root of a nonzero polynomial with integer coefficients, and **transcendental**
otherwise. Its **degree** is the smallest degree of such a polynomial. Rationals have degree 1, $\sqrt 2$ has degree 2,
$\sqrt[3]{2}$ has degree 3. Until 1844 nobody could prove that any particular number is transcendental. Liouville did it by showing
that algebraic numbers are *badly* approximable in a precise sense.

**Theorem 10.12 (Liouville, 1844).** Let $\alpha$ be a real algebraic number of degree $d \geq 1$. There is a
constant $c > 0$ such that for every fraction $p/q \neq \alpha$ with $q \geq 1$,

$$
\left| \alpha - \frac pq \right| > \frac{c}{q^d} .
$$

*Proof.* Let $f$ be a polynomial of degree $d$ with integer coefficients and $f(\alpha) = 0$, of smallest degree.
It has no rational root other than possibly $\alpha$ itself when $d = 1$ (if $d \geq 2$ and $f(r) = 0$ for a
rational $r$, then $f$ would have the factor $t - r$ and $\alpha$ would be a root of a polynomial of smaller degree).
So for $p/q \neq \alpha$, $f(p/q) \neq 0$. But $q^d f(p/q)$ is a whole number (every term $c_k p^k q^{d-k}$ is), and
it is nonzero, so $|f(p/q)| \geq 1/q^d$.

If $|\alpha - p/q| \geq 1$ the inequality holds for any $c < 1$. Otherwise $p/q$ lies in $[\alpha - 1, \alpha + 1]$.
Let $M$ be the largest value of $|f'|$ on that interval (a continuous function on a closed interval has a maximum).
By the mean value theorem, $f(p/q) = f(p/q) - f(\alpha) = f'(\xi)(p/q - \alpha)$ for some $\xi$ between them, so

$$
\frac{1}{q^d} \leq |f(p/q)| \leq M \left|\alpha - \frac pq\right| .
$$

So $c = \tfrac12 \min(1, 1/M)$ works. $\square$

**Corollary (Liouville's number is transcendental).** Liouville published this explicit example in 1851. Let

$$
L = \sum_{k=1}^{\infty} 10^{-k!} = 0.110001000000000000000001000\ldots,
$$

with ones in the decimal places $1, 2, 6, 24, 120, \dots$. Take $p/q$ to be the sum of the first $n$ terms, so
$q = 10^{n!}$. Then

$$
0 < L - \frac pq = \sum_{k > n} 10^{-k!} < 2 \cdot 10^{-(n+1)!} = \frac{2}{q^{n+1}} .
$$

If $L$ were algebraic of degree $d$, Liouville's theorem would give $c/q^d < 2/q^{n+1}$, that is $c < 2 q^{d - n - 1}$
for every $n$. For $n > d$ the right side tends to 0 as $n$ grows, which is impossible. So $L$ is transcendental. (The
case $d = 1$ is included: $L$ is not rational either.)

### Roth's theorem

Liouville's exponent $d$ is far from the truth. Thue (1909), Siegel (1921) and Dyson (1947) lowered it step by step,
and Klaus Roth reached the end of the road.

**Theorem 10.13 (Roth, 1955).** Let $\alpha$ be an irrational algebraic number and $\varepsilon > 0$. Then there are
only finitely many fractions $p/q$ with

$$
\left| \alpha - \frac pq \right| < \frac{1}{q^{2 + \varepsilon}} .
$$

Since Dirichlet gives infinitely many with exponent exactly 2, Roth's theorem says that **algebraic numbers behave,
as far as this exponent can see, like random numbers**: in fact, by a theorem of Khinchin, almost every real number
(in the sense of measure) also has only finitely many solutions for each $\varepsilon > 0$. Roth's proof is about
twenty pages of hard but elementary analysis; it won him the Fields Medal in 1958. It is *ineffective*: it proves
that the exceptions are finite in number without giving any way to find the largest one. Thue's weaker version was
already enough to prove that equations like $x^3 - 2y^3 = 1$ have only finitely many integer solutions, which links
this section back to [Chapter 9](09-Diophantine-Equations.md).

What Roth's theorem does not say: whether $\sqrt[3]{2}$ has bounded partial quotients (like $\sqrt 2$ does) or
unbounded ones. Nobody knows, for any algebraic number of degree 3 or more. The computed partial quotients of
$\sqrt[3]{2}$ look like those of a "random" number, with occasional large ones, but this is an open problem.

## 10.7 Calendars and gears

*Level: intermediate.*

### The Earth's year

The **tropical year**, from one spring equinox to the next, is about $365.24219$ days (it changes very slowly over
the centuries). A calendar must have a whole number of days each year, so it chooses a cycle of $q$ years containing
$p$ days with $p/q$ close to $365.24219$. That is exactly a best approximation problem. The continued fraction is

$$
365.24219 = [365; 4, 7, 1, 3, 24, 6, \dots],
$$

with convergents

$$
365, \quad \frac{1461}{4}, \quad \frac{10592}{29}, \quad \frac{12053}{33}, \quad \frac{46751}{128}, \quad \dots
$$

- $1461/4 = 365.25$: one leap day every 4 years, the **Julian calendar**. It gains about $0.0078$ days a year, a
  full day in about 128 years. By the sixteenth century the equinox had drifted by about ten days.
- $12053/33 = 365 + 8/33 = 365.24242\ldots$: eight leap years in every 33. The error is about $0.00023$ days a year,
  one day in about 4300 years. Cycles of 33 years have long been discussed for the Iranian calendar.
- The **Gregorian calendar** (1582) uses $365 + 97/400 = 365.2425$, dropping three leap days every 400 years. That is
  *not* a convergent: it was chosen because centuries are easy to count. Its error is about $0.0003$ days a year, one
  day in about 3200 years, slightly worse than the 33-year cycle but with simpler rules.

### The Mars year

A **sol**, the Martian solar day, is about 24 hours 39 minutes 35 seconds. The Martian year, counted from one
northern spring equinox to the next, is about 687 Earth days or about $668.59$ sols. (The exact value depends on
which kind of year you mean: equinox to equinox gives about $668.59$, while one orbit relative to the stars gives
about $668.60$. Rounding in the fourth digit matters here, as we will see.)

Take $668.5907$ sols, a value used in some proposals for a Martian calendar. Its expansion and convergents:

$$
668.5907 = [668; 1, 1, 2, 3, 1, \dots], \qquad 668, \; 669, \; \frac{1337}{2}, \; \frac{3343}{5}, \; \frac{11366}{17}, \; \dots
$$

- $3343/5 = 668.6$: in every 5 Mars years, 3 have 669 sols and 2 have 668. Error about $0.009$ sols a year, one sol
  in about 108 Mars years.
- $11366/17 = 668.588\ldots$: in every 17 years, 10 have 669 sols and 7 have 668. Error about $0.0025$ sols a year,
  one sol in about 400 Mars years.

Now try the sidereal value $668.5991$ instead: $668.5991 = [668; 1, 1, 2, 44, \dots]$. The first convergents
($669$, $1337/2$, $3343/5$) are the same, but the next one is $148429/222$. The 5-year rule is robust; anything finer
depends on deciding which year you want to keep in step with, which is a question of definitions, not arithmetic.
This is the honest lesson of calendar design on any planet: continued fractions tell you the good cycles once you have
fixed the year, and they also show you how much of the answer depends on the last digits you are unsure of.

### Gear trains and planetary cycles

An **orrery** (a mechanical model of the solar system) must turn a Mars wheel 1 time while the Earth wheel turns
$686.98 / 365.256 \approx 1.88081$ times. Gears have whole numbers of teeth, so you need a fraction $p/q$ close to
$1.88081$ with small $p$ and $q$:

$$
1.88081 = [1; 1, 7, 2, 1, 1, 3, \dots], \qquad 2,\; \frac{15}{8},\; \frac{32}{17},\; \frac{47}{25},\; \frac{79}{42},\; \frac{284}{151},\; \dots
$$

A pair of wheels with 79 and 42 teeth gives the ratio to about one part in 14000, and 284 and 151 teeth to about one part in 90000. In the 1680s Christiaan Huygens
designed a planetarium for which he chose gear ratios this way, and his description, published after his death,
explains the continued fraction method as a general tool.

The same fractions have a second meaning: $79/42$ says that 79 Earth years are very close to 42 Mars years, so after
79 years Earth and Mars return to nearly the same positions, and the pattern of Mars's oppositions (when Mars is
closest and brightest) repeats. Babylonian astronomers used periods of 47 and 79 years to predict the positions of
Mars, and both are convergents above. They found them by long observation, not by continued fractions, but the
arithmetic explains why those periods work.

## Check yourself

??? question "1. Find the continued fraction of $43/30$, and check that $[1; 2, 3, 4] = 43/30$."
    Euclid on 43 and 30: $43 = 1 \cdot 30 + 13$, $30 = 2 \cdot 13 + 4$, $13 = 3 \cdot 4 + 1$, $4 = 4 \cdot 1$. So
    $43/30 = [1; 2, 3, 4]$. Check from the top: $3 + 1/4 = 13/4$, then $2 + 4/13 = 30/13$, then $1 + 13/30 = 43/30$.

??? question "2. Find the continued fraction of $\sqrt{11}$ by the exact $P, Q$ method, and the smallest solution of $x^2 - 11y^2 = 1$."
    $a_0 = 3$. $P_1 = 3$, $Q_1 = (11 - 9)/1 = 2$, $a_1 = \lfloor 6/2 \rfloor = 3$. $P_2 = 3 \cdot 2 - 3 = 3$,
    $Q_2 = (11 - 9)/2 = 1$, $a_2 = \lfloor 6/1 \rfloor = 6$. Since $Q_2 = 1$ the period is complete:
    $\sqrt{11} = [3; \overline{3, 6}]$, period $l = 2$ (even). The convergents are $3/1$, $10/3$. By Theorem 10.10
    the smallest solution is $(p_1, q_1) = (10, 3)$. Check: $100 - 99 = 1$.

??? question "3. Use the table method to compute the convergents of $[1; 2, 2, 2, 2, 2]$, and check the determinant identity on two neighbours."
    $p$: $1, 3, 7, 17, 41, 99$; $q$: $1, 2, 5, 12, 29, 70$. These approximate $\sqrt 2$. Check:
    $p_5 q_4 - p_4 q_5 = 99 \cdot 29 - 41 \cdot 70 = 2871 - 2870 = 1 = (-1)^{4}$. Also notice $99^2 - 2 \cdot 70^2 = 9801 - 9800 = 1$.

??? question "4. Without searching, explain why no fraction with denominator at most 7 is closer to $\pi$ than $22/7$."
    $22/7$ is the convergent $p_1/q_1$ of $\pi = [3; 7, 15, \dots]$. By Corollary 10.6 every convergent with $n \geq 1$
    is a best approximation of the first kind: no fraction with denominator at most $q_1 = 7$ is closer. (A search
    shows that in fact none with denominator below 57 is closer; the next best approximation is $179/57$.)

??? question "5. Find the smallest solution of $x^2 - 14 y^2 = 1$ using continued fractions."
    $a_0 = 3$. $(P, Q, a)$: $(3, 5, 1)$, $(2, 2, 2)$, $(2, 5, 1)$, $(3, 1, 6)$. So $\sqrt{14} = [3; \overline{1, 2, 1, 6}]$,
    period 4 (even). Convergents: $3/1$, $4/1$, $11/3$, $15/4$. The smallest solution is $(15, 4)$: $225 - 224 = 1$.
    Check with Theorem 10.9 on the others: $9 - 14 = -5 = -Q_1$, $16 - 14 = 2 = Q_2$, $121 - 126 = -5 = -Q_3$.

??? question "6. Show that the convergents of the golden ratio are $F_{n+2}/F_{n+1}$ (ratios of Fibonacci numbers), and deduce Cassini's identity $F_{n+1}^2 - F_n F_{n+2} = (-1)^n$."
    With all $a_n = 1$ the recurrences become $p_n = p_{n-1} + p_{n-2}$, $q_n = q_{n-1} + q_{n-2}$, the Fibonacci rule.
    Starting values $p_0 = 1, p_1 = 2$ and $q_0 = 1, q_1 = 1$ give $p_n = F_{n+2}$ and $q_n = F_{n+1}$ (with
    $F_1 = F_2 = 1$). The determinant identity $p_n q_{n-1} - p_{n-1} q_n = (-1)^{n-1}$ becomes
    $F_{n+2} F_n - F_{n+1}^2 = (-1)^{n-1}$, which is Cassini's identity $F_{n+1}^2 - F_n F_{n+2} = (-1)^n$.
    Check with $n = 3$: $F_4^2 - F_3 F_5 = 9 - 2 \cdot 5 = -1$.

??? question "7. Prove directly (without Liouville's theorem) that $|\sqrt 2 - p/q| > 1/(4q^2)$ for every fraction $p/q$ with $q \geq 1$."
    If $|\sqrt 2 - p/q| \geq 1$ there is nothing to prove. Otherwise $p/q < \sqrt 2 + 1$, so $p/q + \sqrt 2 < 2\sqrt 2 + 1 < 4$.
    Since $\sqrt 2$ is irrational, $p^2 - 2q^2$ is a nonzero integer, so $|p^2 - 2q^2| \geq 1$. Then
    $|p/q - \sqrt 2| = |p^2 - 2q^2| / (q^2 (p/q + \sqrt 2)) > 1/(4q^2)$. (The convergents show the truth is about
    $1/(2\sqrt 2\, q^2) \approx 0.354/q^2$.)

??? question "8. A calendar uses 8 leap years in every 33. Taking the year as 365.24219 days, how many years until it is a full day off? Compare the Gregorian calendar."
    The 33-year cycle has mean year $365 + 8/33 = 365.242424\ldots$ days, too long by $0.000234$ days a year, so it
    drifts one day in about $1/0.000234 \approx 4270$ years. The Gregorian year $365.2425$ is too long by $0.00031$ days,
    one day in about 3230 years. The 33-year cycle is more accurate; the Gregorian rule is easier to apply.

??? question "9. For a Mars year of 668.5907 sols, a 22-year cycle comes from the convergent $14709/22$. How many leap years (669 sols) does it have, and how accurate is it?"
    $668 \cdot 22 = 14696$, so $14709 - 14696 = 13$ of the 22 years have 669 sols. The mean year is
    $14709/22 = 668.59091\ldots$, too long by about $0.00021$ sols a year, one sol in about 4800 Mars years. (But
    remember from 10.7 that the year's length is not known to that accuracy in any agreed sense.)

??? question "10. Show that if $x$ has partial quotients bounded by $B$, then $|x - p/q| > 1/((B + 2) q^2)$ for every fraction $p/q$."
    For a convergent, Theorem 10.4(2) gives $|x - p_n/q_n| > 1/(q_n(q_n + q_{n+1}))$, and
    $q_{n+1} = a_{n+1} q_n + q_{n-1} \leq (B + 1) q_n$, so the error exceeds $1/((B + 2) q_n^2)$. For a fraction $p/q$
    that is not a convergent, choose $n$ with $q_n \leq q < q_{n+1}$; Theorem 10.5 gives
    $|qx - p| \geq |q_n x - p_n| > 1/(q_n + q_{n+1}) \geq 1/((B+2) q_n) \geq 1/((B + 2) q)$, and dividing by $q$ gives
    the claim. Such numbers are called **badly approximable**; quadratic irrationals are examples.

??? question "11. Prove that a purely periodic continued fraction $x = [\overline{a_0; a_1, \dots, a_{l-1}}]$ with $a_0 \geq 1$ is reduced: $x > 1$ and its conjugate $x'$ lies in $(-1, 0)$."
    $x > a_0 \geq 1$. From the proof of Theorem 10.8, $x$ and $x'$ are the roots of
    $g(t) = q_{l-1} t^2 + (q_{l-2} - p_{l-1}) t - p_{l-2}$. Evaluate: $g(0) = -p_{l-2} < 0$ (for $l \ge 2$; and
    $p_{-1} = 1$ when $l = 1$), while $g(-1) = q_{l-1} - q_{l-2} + p_{l-1} - p_{l-2} > 0$ because $q_{l-1} \geq q_{l-2}$ and
    $p_{l-1} > p_{l-2}$. A quadratic with positive leading coefficient that changes sign between $-1$ and $0$ has a
    root there, and since $x > 1$ is the other root, $x' \in (-1, 0)$.

??? question "12. Show that $e$ is not a quadratic irrational, using a fact from this chapter."
    Euler showed $e = [2; 1, 2, 1, 1, 4, 1, 1, 6, \dots]$, whose partial quotients $2, 4, 6, \dots$ grow without
    bound, so the expansion is not eventually periodic. By Lagrange's theorem (10.8) only quadratic irrationals have
    periodic expansions, so $e$ is not a quadratic irrational. (It is not rational either, since the expansion is
    infinite. Hermite proved in 1873 that it is transcendental.)

## What you learned

- The continued fraction algorithm is Euclid's algorithm run on a real number; it stops exactly for rationals.
- Convergents obey $p_n = a_n p_{n-1} + p_{n-2}$ (same for $q_n$) and $p_n q_{n-1} - p_{n-1} q_n = (-1)^{n-1}$, so
  they are in lowest terms, alternate around $x$, and satisfy $|x - p_n/q_n| < 1/(q_n q_{n+1})$.
- Convergents are best approximations (Lagrange), and any $p/q$ with $|x - p/q| < 1/(2q^2)$ is a convergent (Legendre).
- Continued fractions are eventually periodic exactly for quadratic irrationals (Euler, Lagrange).
- The smallest solution of Pell's equation $x^2 - dy^2 = 1$ is a convergent of $\sqrt d$ at the end of the first or
  second period; so a solution always exists.
- Dirichlet's pigeonhole theorem gives $|x - p/q| < 1/q^2$ infinitely often; Liouville showed algebraic numbers resist
  better approximation and built a transcendental number; Roth proved exponent $2 + \varepsilon$ is the truth.
- Calendars and gear trains are best approximation problems, and their answers are convergents.

**Next:** [Chapter 11](11-Sums-of-Squares.md), which numbers are sums of two, three or four squares, with Fermat's,
Zagier's and Lagrange's proofs.

## Further reading

- A. Ya. Khinchin, *Continued Fractions* (English translation of the third edition, 1964; Dover reprint 1997). Short
  and classic.
- G. H. Hardy and E. M. Wright, *An Introduction to the Theory of Numbers* (1938; 6th edition revised by D. R.
  Heath-Brown and J. H. Silverman, 2008), Chapters 10 and 11.
- I. Niven, H. S. Zuckerman and H. L. Montgomery, *An Introduction to the Theory of Numbers* (5th edition, 1991),
  Chapter 7.
- C. D. Olds, *Continued Fractions* (1963). Gentle, with many worked examples.
- K. F. Roth, "Rational approximations to algebraic numbers", *Mathematika* 2 (1955).
- W. M. Schmidt, *Diophantine Approximation* (Lecture Notes in Mathematics 785, 1980).
- On this site: the Topics lesson [Euclid's algorithm](../../topics/number-theory/level-4/04-euclids-algorithm.md);
  the U of T guide [MAT158H1 Unit 2, Real numbers and least upper bounds](../../uoft/MAT158H1/unit02.md) for limits
  of sequences of rationals; [Algebra, chapter 19](../algebra/19-Fields-and-Extensions.md) for algebraic numbers and
  degrees; the [Algebra book](../algebra/index.md).
