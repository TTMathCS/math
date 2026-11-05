# 6. The mean value theorem

*Two cameras on a motorway are 10 km apart. A car passes the first at 12:00 and the second at 12:05. The limit is
100 km/h, and the driver was never caught by either camera going faster than that. Is there proof the driver sped? The
average speed was 10 km in one twelfth of an hour, 120 km/h, and common sense says that at some instant the speedometer
must have read exactly 120. The mean value theorem is that common sense, made precise and proved. It is the most used
theorem in this part of the book: it is how facts about a derivative (a rate at each instant) become facts about the
function (what happens over a whole stretch). In this chapter you will prove Rolle's theorem and the mean value theorem,
use them to show that a zero derivative means a constant function and a positive derivative means an increasing one,
prove L'Hôpital's rule for limits of the form $0/0$ and $\infty/\infty$, and derive a series of useful inequalities.*

!!! abstract "In this chapter"
    **You will learn:**

    - Fermat's lemma (at an interior maximum or minimum the derivative is zero) and Rolle's theorem, with proofs
    - the mean value theorem, its proof, what it means for motion and for graphs, and why each hypothesis is needed
    - how the sign of $f'$ decides where $f$ increases or decreases, and why $f' = 0$ on an interval forces $f$ to be constant
    - Darboux's theorem: a derivative can never jump
    - Cauchy's mean value theorem and L'Hôpital's rule, with proofs, and the traps in using it
    - how to prove inequalities like $e^x \ge 1 + x$ and $e^\pi > \pi^e$ with one line of the mean value theorem

    **You need:** [Chapter 3](03-Continuity.md) (the intermediate value theorem and, above all, the extreme value theorem
    of 3.3), [Chapter 4](04-The-Derivative.md) (derivatives) and [Chapter 5](05-The-Chain-Rule-and-Special-Functions.md)
    (derivatives of $e^x$, $\ln x$, $\sin x$ and $\arctan x$). A gentler companion on the Topics shelf:
    [The derivative function](../../topics/change/level-7/05-derivative-function.md) and
    [Instant speed](../../topics/change/level-6/01-instant-speed.md).

    **Levels:** 6.1 to 6.3 are intermediate; Darboux's theorem (end of 6.3) and the $\infty/\infty$ proof in 6.4 are
    advanced; 6.5 is intermediate.

## 6.1 Rolle's theorem

Throw a ball straight up and catch it at the same height. Its height starts and ends at the same value, so somewhere in
between it reached a top, and at the top it was, for an instant, moving neither up nor down: its vertical velocity was zero.
Rolle's theorem says this always happens for a smooth enough function. We first need the reason that a top has a flat
tangent.

### Fermat's lemma

A function $f$ has a **local maximum** at $c$ if $f(c) \ge f(x)$ for all $x$ in some open interval around $c$, and a
**local minimum** if $f(c) \le f(x)$ there. Either is a **local extremum** ("extremum" is Latin for "outermost"; plural
extrema).

!!! note "Fermat's lemma"
    If $f$ has a local maximum or local minimum at an interior point $c$ and $f'(c)$ exists, then $f'(c) = 0$.

*Proof.* Take a local maximum (for a minimum apply the argument to $-f$). For all small $h$, $f(c + h) \le f(c)$, so
$f(c + h) - f(c) \le 0$. If $h > 0$, dividing by $h$ keeps the sign:

$$
\frac{f(c+h) - f(c)}{h} \le 0, \quad\text{so letting } h \to 0^+ \text{ gives } f'(c) \le 0 .
$$

If $h < 0$, dividing by $h$ flips the sign, the quotient is $\ge 0$, and letting $h \to 0^-$ gives $f'(c) \ge 0$. Both
one-sided limits equal $f'(c)$ because the derivative exists. So $f'(c) \le 0 \le f'(c)$, that is, $f'(c) = 0$. $\square$

Two warnings. First, the converse is false: $f(x) = x^3$ has $f'(0) = 0$ but no extremum at 0 (it keeps rising). Second,
the lemma needs $c$ to be interior and $f'(c)$ to exist: $f(x) = x$ on $[0, 1]$ has its maximum at the endpoint 1 with
slope 1, and $|x|$ has its minimum at 0 where there is no derivative. Points where $f'(c) = 0$ or $f'(c)$ does not exist are
called **critical points**; Fermat's lemma says interior extrema can only be found among them.

### Rolle's theorem

!!! note "Rolle's theorem"
    Let $f$ be continuous on the closed interval $[a, b]$ and differentiable on the open interval $(a, b)$, with
    $f(a) = f(b)$. Then there is at least one $c$ with $a < c < b$ and $f'(c) = 0$.

*Proof.* By the extreme value theorem (Chapter 3.3), the continuous function $f$ on the closed bounded interval $[a, b]$
reaches a largest value $M$ and a smallest value $m$.

- If both are reached only at the endpoints, then $M = m$ (since $f(a) = f(b)$), so $f$ is constant and $f'(c) = 0$ for
  every $c$ in $(a, b)$.
- Otherwise the maximum or the minimum is reached at some interior point $c$. It is in particular a local extremum, $f$
  is differentiable at $c$, and Fermat's lemma gives $f'(c) = 0$. $\square$

Notice how much the proof leans on the extreme value theorem. That theorem is a statement about the real numbers having no
gaps, and Chapter 18 finally proves it. Rolle's theorem would be false over the rational numbers alone.

**Example 1.** $f(x) = x^3 - x$ on $[-1, 1]$. Here $f(-1) = 0 = f(1)$, so Rolle promises a flat tangent. Indeed
$f'(x) = 3x^2 - 1 = 0$ at $c = \pm 1/\sqrt 3 \approx \pm 0.577$, both inside $(-1, 1)$.

**Each hypothesis is needed.**

- *Continuity on the closed interval.* Let $f(x) = x$ for $0 \le x < 1$ and $f(1) = 0$. Then $f(0) = f(1) = 0$ and $f$ is
  differentiable on $(0, 1)$ with $f' = 1$, never 0. The jump at the end spoils it.
- *Differentiability inside.* $f(x) = |x|$ on $[-1, 1]$: $f(-1) = f(1)$, but $f'$ is $-1$ or $1$ wherever it exists. The
  corner at 0 is where the "flat point" should be.
- *Equal end values.* $f(x) = x$ on $[0, 1]$ has no flat point at all.

### Counting roots

Rolle's theorem says: between two roots of $f$ there is a root of $f'$. Turned around: if $f'$ is never zero on an interval,
$f$ has at most one root there.

**Example 2.** The equation $x^5 + x - 1 = 0$ has exactly one real solution. *Existence:* $f(x) = x^5 + x - 1$ has
$f(0) = -1 < 0 < 1 = f(1)$, so by the intermediate value theorem (Chapter 3.2) there is a root in $(0, 1)$. *Uniqueness:* if
there were two roots $r < s$, Rolle on $[r, s]$ would give $f'(c) = 0$; but $f'(x) = 5x^4 + 1 \ge 1$ for all $x$. So there is
exactly one. (Bisection or Newton's method of Chapter 7 finds it: $0.754877\ldots$.)

**Example 3.** $x^3 - 15x + k = 0$ has at most one root in $[-2, 2]$, whatever the constant $k$. Two roots there would give a
zero of $f'(x) = 3x^2 - 15$ between them; but on $[-2, 2]$, $3x^2 \le 12$, so $f'(x) \le -3 < 0$.

**Example 4.** A polynomial of degree $n \ge 1$ has at most $n$ real roots. By induction: degree 1 is clear. If $p$ of degree
$n$ had $n + 1$ distinct roots, then by Rolle between consecutive roots $p'$ would have $n$ distinct roots, but $p'$ has degree
$n - 1$, contradicting the induction hypothesis. (The Algebra book proves the same fact with the factor theorem; here it falls
out of calculus.)

## 6.2 The mean value theorem

Tilt Rolle's picture. Instead of a curve that starts and ends at the same height, take any smooth curve from $(a, f(a))$ to
$(b, f(b))$ and draw the straight line joining the ends, the **secant**. Slide a ruler parallel to the secant; somewhere it
will just touch the curve, and there the tangent is parallel to the secant.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 230" role="img" aria-label="The graph of the square root of x from 0 to 4.5. The secant line from (0, 0) to (4, 2) has slope one half; the tangent line at (1, 1) is parallel to it">
  <line x1="30" y1="200" x2="345" y2="200" stroke="currentColor" stroke-width="1.2"/>
  <line x1="40" y1="20" x2="40" y2="210" stroke="currentColor" stroke-width="1.2"/>
  <line x1="104" y1="197" x2="104" y2="203" stroke="currentColor" stroke-width="1.2"/>
  <text x="104" y="216" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <line x1="296" y1="197" x2="296" y2="203" stroke="currentColor" stroke-width="1.2"/>
  <text x="296" y="216" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <line x1="37" y1="130" x2="43" y2="130" stroke="currentColor" stroke-width="1.2"/>
  <text x="33" y="134" font-size="11" text-anchor="end" fill="currentColor">1</text>
  <line x1="37" y1="60" x2="43" y2="60" stroke="currentColor" stroke-width="1.2"/>
  <text x="33" y="64" font-size="11" text-anchor="end" fill="currentColor">2</text>
  <polyline fill="none" stroke="#eea66f" stroke-width="2.4" points="40.0,200.0 43.2,184.3 46.4,177.9 49.6,172.9 52.8,168.7 56.0,165.0 59.2,161.7 62.4,158.6 65.6,155.7 68.8,153.0 72.0,150.5 75.2,148.1 78.4,145.8 81.6,143.6 84.8,141.4 88.0,139.4 91.2,137.4 94.4,135.5 97.6,133.6 100.8,131.8 104.0,130.0 107.2,128.3 110.4,126.6 113.6,124.9 116.8,123.3 120.0,121.7 123.2,120.2 126.4,118.7 129.6,117.2 132.8,115.7 136.0,114.3 139.2,112.9 142.4,111.5 145.6,110.1 148.8,108.7 152.0,107.4 155.2,106.1 158.4,104.8 161.6,103.5 164.8,102.3 168.0,101.0 171.2,99.8 174.4,98.6 177.6,97.4 180.8,96.2 184.0,95.0 187.2,93.8 190.4,92.7 193.6,91.6 196.8,90.4 200.0,89.3 203.2,88.2 206.4,87.1 209.6,86.0 212.8,85.0 216.0,83.9 219.2,82.9 222.4,81.8 225.6,80.8 228.8,79.8 232.0,78.8 235.2,77.8 238.4,76.8 241.6,75.8 244.8,74.8 248.0,73.8 251.2,72.8 254.4,71.9 257.6,70.9 260.8,70.0 264.0,69.0 267.2,68.1 270.4,67.2 273.6,66.3 276.8,65.4 280.0,64.4 283.2,63.5 286.4,62.7 289.6,61.8 292.8,60.9 296.0,60.0 299.2,59.1 302.4,58.3 305.6,57.4 308.8,56.5 312.0,55.7 315.2,54.8 318.4,54.0 321.6,53.2 324.8,52.3 328.0,51.5"/>
  <line x1="40" y1="200" x2="296" y2="60" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="40" y1="165" x2="232" y2="60" stroke="#7ccf9a" stroke-width="2" stroke-dasharray="6 3"/>
  <circle cx="40" cy="200" r="3" fill="currentColor"/>
  <circle cx="296" cy="60" r="3" fill="currentColor"/>
  <circle cx="104" cy="130" r="3.5" fill="currentColor"/>
  <text x="108" y="146" font-size="11" fill="currentColor">c = 1</text>
  <text x="200" y="138" font-size="11" fill="#9cc9ea">secant, slope 1/2</text>
  <text x="120" y="80" font-size="11" fill="#7ccf9a">tangent at c, slope 1/2</text>
  <text x="305" y="52" font-size="12" fill="#eea66f">√x</text>
</svg>
</div>

!!! note "Mean value theorem (Lagrange)"
    Let $f$ be continuous on $[a, b]$ and differentiable on $(a, b)$. Then there is at least one $c$ with $a < c < b$ and

    $$
    f'(c) = \frac{f(b) - f(a)}{b - a} .
    $$

*Proof.* Subtract the secant line from $f$, so that the ends become level, and apply Rolle. The secant is
$s(x) = f(a) + \frac{f(b) - f(a)}{b - a}(x - a)$. Let $g(x) = f(x) - s(x)$. Then $g$ is continuous on $[a, b]$ and
differentiable on $(a, b)$ (a difference of such functions), and $g(a) = 0 = g(b)$. By Rolle there is $c$ in $(a, b)$ with

$$
0 = g'(c) = f'(c) - \frac{f(b) - f(a)}{b - a} . \qquad\square
$$

**What it means.** If $f(t)$ is the position of a car at time $t$, the right-hand side is the average velocity over $[a, b]$
and $f'(c)$ is the velocity at the instant $c$. So: *at some instant, the instantaneous velocity equals the average velocity.*
For the motorway cameras, the average was 120 km/h, so at some moment the car was doing exactly 120 km/h, above the limit.
(Whether a court accepts the mean value theorem is a matter of law, not mathematics; some countries do run "average speed"
cameras on exactly this idea.)

It is often used in the form

$$
f(b) - f(a) = f'(c)\,(b - a) \quad\text{for some } c \text{ between } a \text{ and } b ,
$$

which reads: *the change in $f$ equals (some value of the derivative) times (the change in $x$)*. We do not know $c$, but if we
know bounds on $f'$, we get bounds on the change. That is how almost every application goes.

**Example 5.** $f(x) = x^2$ on $[1, 3]$: the secant slope is $\frac{9 - 1}{2} = 4$, and $f'(c) = 2c = 4$ at $c = 2$. For a
parabola $c$ is always the midpoint (check: $\frac{b^2 - a^2}{b - a} = a + b = 2c$ gives $c = \frac{a+b}{2}$).

**Example 6.** $f(x) = \sqrt x$ on $[0, 4]$ (the figure): secant slope $\frac{2 - 0}{4} = \frac{1}{2}$, and
$f'(c) = \frac{1}{2\sqrt c} = \frac{1}{2}$ at $c = 1$. Note that $\sqrt x$ is not differentiable at 0, an endpoint; the theorem
only asks for differentiability inside, so it still applies.

**Example 7.** $f(x) = x^3$ on $[0, 2]$: secant slope $\frac{8}{2} = 4$, and $3c^2 = 4$ at $c = 2/\sqrt 3 \approx 1.1547$.

**Example 8 (a bound).** Suppose a rover's odometer function $f(t)$ (km driven after $t$ hours) has $f'(t) \le 0.15$ km per hour
at all times. Then in 8 hours it drives at most $0.15 \times 8 = 1.2$ km, because $f(8) - f(0) = f'(c)\cdot 8 \le 1.2$. This is
"obvious", but the MVT is what makes it a theorem, and the same argument works where intuition is weaker.

<figure class="play" data-play="tangent" data-f="cube" data-mode="mvt"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> The mean value theorem: somewhere between a and b the tangent runs parallel to the chord.</figcaption></figure>

## 6.3 Consequences: increasing, decreasing, constant

Here is the payoff. Each statement below is "obvious" from pictures, and each is false without the mean value theorem (over
the rational numbers, for instance).

!!! note "Theorem (sign of the derivative)"
    Let $f$ be continuous on an interval $I$ and differentiable at every interior point of $I$.

    1. If $f'(x) > 0$ for all interior $x$, then $f$ is strictly increasing on $I$.
    2. If $f'(x) \ge 0$ for all interior $x$, then $f$ is increasing (non-decreasing) on $I$.
    3. If $f'(x) < 0$ (or $\le 0$), then $f$ is strictly decreasing (or non-increasing).
    4. If $f'(x) = 0$ for all interior $x$, then $f$ is constant on $I$.

*Proof.* Take any two points $x_1 < x_2$ in $I$. The MVT on $[x_1, x_2]$ gives an interior $c$ with

$$
f(x_2) - f(x_1) = f'(c)\,(x_2 - x_1) .
$$

The factor $x_2 - x_1$ is positive. So if $f'(c) > 0$ the change is positive (part 1); if $f'(c) \ge 0$ it is $\ge 0$ (part 2);
part 3 is the same with signs reversed; and if $f'(c) = 0$ the change is 0, so $f(x_1) = f(x_2)$ for every pair (part 4). $\square$

**The converse needs care.** A strictly increasing function can have $f'(c) = 0$ at some points: $x^3$ is strictly increasing,
yet $f'(0) = 0$. What is true is: if $f$ is increasing and differentiable, then $f' \ge 0$ (the difference quotients are all
$\ge 0$, so their limit is too).

**The interval matters.** Part 4 fails on a domain with a gap. The function $f(x) = \frac{x}{|x|}$ on $\mathbb{R} \setminus \{0\}$
has $f'(x) = 0$ everywhere it is defined, yet it is $-1$ on the left and $1$ on the right. The MVT cannot be applied across the
gap.

**Corollary (same derivative, differ by a constant).** If $f' = g'$ on an interval, then $f - g$ has derivative 0, so
$f = g + C$ for a constant $C$. This is the foundation of the antiderivatives of Chapter 9: once you have found *one* function
with derivative $x^2$, say $x^3/3$, *every* such function on an interval is $x^3/3 + C$.

**Example 9 (an identity by calculus).** For $x > 0$, $\arctan x + \arctan\frac{1}{x} = \frac{\pi}{2}$. Let
$F(x) = \arctan x + \arctan\frac{1}{x}$. By Chapter 5,

$$
F'(x) = \frac{1}{1+x^2} + \frac{1}{1 + 1/x^2}\cdot\left(-\frac{1}{x^2}\right) = \frac{1}{1+x^2} - \frac{1}{x^2 + 1} = 0 .
$$

So $F$ is constant on $(0, \infty)$, and $F(1) = \frac{\pi}{4} + \frac{\pi}{4} = \frac{\pi}{2}$. On $(-\infty, 0)$ the same
computation shows $F$ is constant too, but $F(-1) = -\frac{\pi}{2}$: a different constant on the other side of the gap, just
as the warning above predicts.

**Example 10 (the exponential is the only solution).** Suppose $f'(x) = f(x)$ for all $x$ and $f(0) = 1$. Then $f(x) = e^x$.
*Proof:* let $g(x) = f(x)e^{-x}$. Then $g'(x) = f'(x)e^{-x} - f(x)e^{-x} = 0$, so $g$ is constant, equal to $g(0) = 1$. Hence
$f(x) = e^x$. More generally, $y' = ky$ forces $y = y(0)e^{kx}$. This uniqueness is why exponential models are not a guess but
a consequence: whenever a quantity's rate of change is proportional to the quantity, it *must* be exponential.

**Example 11 (bounded derivative, bounded change).** If $|f'(x)| \le M$ on an interval, then for any $x, y$ there,

$$
|f(x) - f(y)| = |f'(c)|\,|x - y| \le M\,|x - y| .
$$

A function with this property is called **Lipschitz** with constant $M$. Since $|\cos| \le 1$, $|\sin a - \sin b| \le |a - b|$
for all real $a, b$. Lipschitz bounds are what make numerical methods (Chapter 7) and existence theorems for differential
equations (Chapters 14 and 20) work.

### Darboux's theorem: derivatives cannot jump

*Level: advanced.* A derivative need not be continuous (Chapter 5, exercise 12, gives a derivative that oscillates wildly
near 0). But a derivative cannot do just anything: it always has the intermediate value property, even when it is not
continuous.

!!! note "Darboux's theorem"
    If $f$ is differentiable on $[a, b]$ (one-sided derivatives at the ends) and $k$ lies strictly between $f'(a)$ and
    $f'(b)$, then $f'(c) = k$ for some $c$ in $(a, b)$.

*Proof.* Suppose $f'(a) < k < f'(b)$ (the other case is the same with $-f$). Let $g(x) = f(x) - kx$, so $g'(a) < 0 < g'(b)$.
$g$ is continuous on $[a, b]$, so it has a minimum somewhere (extreme value theorem). The minimum is not at $a$: since
$g'(a) < 0$, the difference quotient $\frac{g(x) - g(a)}{x - a}$ is negative for $x$ slightly bigger than $a$, so $g(x) < g(a)$
there. It is not at $b$: since $g'(b) > 0$, $\frac{g(x) - g(b)}{x - b} > 0$ for $x$ slightly less than $b$, and $x - b < 0$, so
$g(x) < g(b)$. So the minimum is at an interior $c$, and Fermat's lemma gives $g'(c) = 0$, that is, $f'(c) = k$. $\square$

**Consequence.** A function with a jump, like the step function that is $0$ for $x < 0$ and $1$ for $x \ge 0$, is not the
derivative of anything on an interval containing 0. Chapter 9 meets this again: such a function still has an "integral
function", but that function has a corner at 0, not a derivative equal to the step.

## 6.4 Cauchy's mean value theorem and L'Hôpital's rule

Limits like

$$
\lim_{x \to 0}\frac{e^x - 1 - x}{x^2}
$$

are of the form "$0/0$": top and bottom both tend to 0, and the limit laws of Chapter 2 say nothing. Near 0 the top and the
bottom are both small, and the question is which shrinks faster. The idea of L'Hôpital's rule: near a common zero, two
functions behave like their tangent lines, so their ratio behaves like the ratio of their slopes. To make that precise we need
a mean value theorem for two functions at once.

### Cauchy's mean value theorem

Picture a point moving in the plane with position $(g(t), f(t))$ at time $t$, for $a \le t \le b$. The MVT idea says that at
some moment the direction of motion $(g'(c), f'(c))$ is parallel to the chord from start to finish,
$(g(b) - g(a), f(b) - f(a))$.

!!! note "Cauchy's mean value theorem"
    Let $f$ and $g$ be continuous on $[a, b]$ and differentiable on $(a, b)$. Then there is $c$ in $(a, b)$ with

    $$
    \bigl(f(b) - f(a)\bigr)\,g'(c) = \bigl(g(b) - g(a)\bigr)\,f'(c) .
    $$

    If moreover $g'(x) \ne 0$ on $(a, b)$, this can be written $\dfrac{f(b) - f(a)}{g(b) - g(a)} = \dfrac{f'(c)}{g'(c)}$.

*Proof.* Let $h(x) = \bigl(f(b) - f(a)\bigr)\bigl(g(x) - g(a)\bigr) - \bigl(g(b) - g(a)\bigr)\bigl(f(x) - f(a)\bigr)$. Then $h$ is
continuous on $[a, b]$, differentiable inside, and $h(a) = 0$, $h(b) = (f(b) - f(a))(g(b) - g(a)) - (g(b) - g(a))(f(b) - f(a)) = 0$.
Rolle gives $c$ with $h'(c) = 0$, which is the stated equation. If $g' \ne 0$ inside, then $g(b) \ne g(a)$ (otherwise Rolle would
give a zero of $g'$), so we may divide. $\square$

With $g(x) = x$ this is the ordinary MVT.

### L'Hôpital's rule

!!! note "L'Hôpital's rule ($0/0$ form)"
    Let $f$ and $g$ be differentiable on an open interval $(a, b)$, with $g'(x) \ne 0$ there, and suppose
    $\lim_{x \to a^+}f(x) = 0$ and $\lim_{x \to a^+}g(x) = 0$. If $\lim_{x \to a^+}\frac{f'(x)}{g'(x)} = L$ (a real number, or
    $\pm\infty$), then $\lim_{x \to a^+}\frac{f(x)}{g(x)} = L$ as well.

    The same holds for left limits, two-sided limits, and limits as $x \to \pm\infty$.

*Proof (right limit at $a$).* Define $f(a) = g(a) = 0$; now $f$ and $g$ are continuous on $[a, x]$ for each $x$ in $(a, b)$.
Also $g(x) \ne 0$, since $g(x) = 0 = g(a)$ would give, by Rolle, a zero of $g'$. Cauchy's theorem on $[a, x]$ gives a point
$c_x$ with $a < c_x < x$ and

$$
\frac{f(x)}{g(x)} = \frac{f(x) - f(a)}{g(x) - g(a)} = \frac{f'(c_x)}{g'(c_x)} .
$$

Now let $\varepsilon > 0$ (take $L$ finite; the infinite case is the same with "large" in place of "close"). Choose $\delta$ so
that $\left|\frac{f'(c)}{g'(c)} - L\right| < \varepsilon$ whenever $a < c < a + \delta$. If $a < x < a + \delta$, then also
$a < c_x < a + \delta$, so $\left|\frac{f(x)}{g(x)} - L\right| < \varepsilon$. That is the definition of the limit. The left limit is
the same; the two together give the two-sided limit. For $x \to \infty$, put $x = 1/t$ and apply the right-limit case at
$t = 0$ to $F(t) = f(1/t)$ and $G(t) = g(1/t)$: by the chain rule $\frac{F'(t)}{G'(t)} = \frac{-f'(1/t)/t^2}{-g'(1/t)/t^2} = \frac{f'(1/t)}{g'(1/t)}$. $\square$

**Example 12.** $\lim_{x \to 0}\frac{e^x - 1 - x}{x^2}$. Both tend to 0; the ratio of derivatives is $\frac{e^x - 1}{2x}$, again
$0/0$; apply the rule again: $\frac{e^x}{2} \to \frac{1}{2}$. So the limit is $\frac{1}{2}$. (Logically, read it backwards: the last
limit exists, so the middle one does, so the first one does.) This says $e^x \approx 1 + x + \frac{x^2}{2}$ near 0, the start of
the Taylor series of Chapter 13.

**Example 13.** $\lim_{x \to 0}\frac{1 - \cos x}{x^2} = \lim\frac{\sin x}{2x} = \frac{1}{2}$, so $\cos x \approx 1 - \frac{x^2}{2}$ for small
$x$.

**Example 14.** $\lim_{x \to 0}\frac{\tan x - x}{x^3}$. Derivatives: $\frac{\sec^2 x - 1}{3x^2} = \frac{\tan^2 x}{3x^2} = \frac{1}{3}\left(\frac{\tan x}{x}\right)^2 \to \frac{1}{3}$.

**A trap: circular reasoning.** Can L'Hôpital prove $\lim_{x \to 0}\frac{\sin x}{x} = 1$? Formally $\frac{\cos x}{1} \to 1$. But to
know $\sin' = \cos$ we used (Chapter 5.2) exactly this limit. The rule is correct; the argument is circular. That is why Chapter
2 proved it geometrically.

**Another trap: the rule only goes one way.** If $f'/g'$ has no limit, $f/g$ may still have one. For
$\frac{x + \sin x}{x}$ as $x \to \infty$, the ratio of derivatives $\frac{1 + \cos x}{1}$ oscillates between 0 and 2 forever, but
$\frac{x + \sin x}{x} = 1 + \frac{\sin x}{x} \to 1$.

**A third trap: check the form.** $\lim_{x \to 0}\frac{x + 1}{x + 2} = \frac{1}{2}$ by plugging in. "Applying L'Hôpital" would give
$\frac{1}{1} = 1$, which is wrong: the rule needs $0/0$ (or $\infty/\infty$).

### The $\infty/\infty$ form

!!! note "L'Hôpital's rule ($\infty/\infty$ form)"
    Let $f, g$ be differentiable on $(a, b)$ with $g' \ne 0$ there, and suppose $|g(x)| \to \infty$ as $x \to a^+$. If
    $\frac{f'(x)}{g'(x)} \to L$, then $\frac{f(x)}{g(x)} \to L$. (Again for other one-sided, two-sided and infinite limits.)

*Level: advanced.* *Proof for finite $L$.* Let $\varepsilon > 0$ and choose $y$ in $(a, b)$ so that
$\left|\frac{f'(c)}{g'(c)} - L\right| < \varepsilon$ for all $c$ in $(a, y)$. For $x$ in $(a, y)$, Cauchy's theorem on $[x, y]$ gives
$c$ in $(x, y)$ with $Q(x) := \frac{f(x) - f(y)}{g(x) - g(y)} = \frac{f'(c)}{g'(c)}$, so $|Q(x) - L| < \varepsilon$. (The denominator
is nonzero, by Rolle again.) Now an exact identity, checked by multiplying out:

$$
\frac{f(x)}{g(x)} = \frac{f(y)}{g(x)} + \left(1 - \frac{g(y)}{g(x)}\right)Q(x) .
$$

Keep $y$ fixed and let $x \to a^+$. Since $|g(x)| \to \infty$, the numbers $\frac{f(y)}{g(x)}$ and $\frac{g(y)}{g(x)}$ tend to 0. So for
$x$ close enough to $a$, $\frac{f(x)}{g(x)}$ is within about $\varepsilon$ of $Q(x)$, which is within $\varepsilon$ of $L$. More
carefully, $\left|\frac{f(x)}{g(x)} - L\right| \le \left|\frac{f(y)}{g(x)}\right| + \left|\frac{g(y)}{g(x)}\right|(|L| + \varepsilon) + \varepsilon$,
and the first two terms are below $\varepsilon$ for $x$ near $a$. So the distance is eventually less than $3\varepsilon$. Since
$\varepsilon$ was arbitrary, $\frac{f(x)}{g(x)} \to L$. $\square$

(Notice the proof only needs $|g| \to \infty$; nothing is assumed about $f$.)

**Example 15 (exponentials beat powers).** For any whole number $n$, $\lim_{x \to \infty}\frac{x^n}{e^x} = 0$. Apply the rule $n$ times:
$\frac{x^n}{e^x} \to \frac{nx^{n-1}}{e^x} \to \cdots \to \frac{n!}{e^x} \to 0$.

**Example 16 (powers beat logarithms).** For $p > 0$, $\lim_{x \to \infty}\frac{\ln x}{x^p} = \lim\frac{1/x}{px^{p-1}} = \lim\frac{1}{px^p} = 0$.
Even $\ln x / x^{0.01} \to 0$, although it first climbs to about 37 and does not drop back below 1 until $x$ is near $10^{281}$.

### Other indeterminate forms

Forms like $0 \cdot \infty$, $\infty - \infty$, $1^\infty$, $0^0$ and $\infty^0$ are turned into $0/0$ or $\infty/\infty$ first.

**Example 17 ($0 \cdot \infty$).** $\lim_{x \to 0^+}x\ln x = \lim\frac{\ln x}{1/x} = \lim\frac{1/x}{-1/x^2} = \lim(-x) = 0$.

**Example 18 ($0^0$).** $\lim_{x \to 0^+}x^x$. Write $x^x = e^{x\ln x}$; the exponent tends to 0 by Example 17, and $\exp$ is
continuous, so $x^x \to e^0 = 1$.

**Example 19 ($1^\infty$).** For a constant $a$, $\lim_{x \to \infty}\left(1 + \frac{a}{x}\right)^x$. Take logarithms:
$x\ln\left(1 + \frac{a}{x}\right) = \frac{\ln(1 + a/x)}{1/x}$, a $0/0$ form. Derivatives:
$\frac{\frac{1}{1 + a/x}\cdot(-a/x^2)}{-1/x^2} = \frac{a}{1 + a/x} \to a$. So the limit is $e^a$. With $a = 1$ this is the compound
interest limit of Chapter 5 again; with $a = 0.05$ it says that 5% interest compounded continuously multiplies money by
$e^{0.05} \approx 1.0513$ a year.

## 6.5 Inequalities from the mean value theorem

The MVT turns bounds on a derivative into bounds on a function. Many important inequalities are one application away.

**Example 20: $e^x \ge 1 + x$ for all $x$, with equality only at $x = 0$.** For $x > 0$, the MVT on $[0, x]$ gives
$e^x - 1 = e^c \cdot x$ with $0 < c < x$; since $e^c > 1$ and $x > 0$, $e^x - 1 > x$. For $x < 0$, on $[x, 0]$:
$1 - e^x = e^c(0 - x) = e^c|x|$ with $x < c < 0$, so $e^c < 1$ and $1 - e^x < |x| = -x$, which rearranges to $e^x > 1 + x$. Geometrically:
the graph of $e^x$ lies above its tangent line at 0.

**Example 21: $\frac{x}{1+x} < \ln(1 + x) < x$ for $x > 0$.** MVT for $\ln(1 + t)$ on $[0, x]$: $\ln(1 + x) = \frac{1}{1 + c}\cdot x$ with
$0 < c < x$. Since $1 < 1 + c < 1 + x$, the factor $\frac{1}{1+c}$ lies strictly between $\frac{1}{1+x}$ and 1. For example
$0.0909 < \ln 1.1 < 0.1$, and indeed $\ln 1.1 = 0.0953\ldots$

**Example 22: $\sin x < x$ for $x > 0$.** For $0 < x \le 1$, MVT: $\sin x = \cos c\cdot x$ with $0 < c < x$, and $\cos c < 1$ there,
so $\sin x < x$. For $x > 1$, $\sin x \le 1 < x$. (Example 11 already gave the weaker $|\sin x| \le |x|$.)

**Example 23: estimating a square root.** $\sqrt{101} = \sqrt{100} + \frac{1}{2\sqrt c}\cdot 1$ for some $c$ in $(100, 101)$. So
$\sqrt{101} < 10 + \frac{1}{20} = 10.05$. And since $\sqrt c < \sqrt{101} < 10.05$, the extra term is more than $\frac{1}{20.1}$, giving
$\sqrt{101} > 10 + \frac{1}{20.1} > 10.0497$. Check: $\sqrt{101} = 10.04987\ldots$, inside both bounds.

**Example 24: Bernoulli's inequality.** For $r \ge 1$ and $x > -1$, $(1 + x)^r \ge 1 + rx$. Let $f(t) = (1 + t)^r$. The MVT
between 0 and $x$ gives $(1 + x)^r - 1 = r(1 + c)^{r-1}x$ with $c$ between 0 and $x$. If $x > 0$, then $c > 0$ and
$(1+c)^{r-1} \ge 1$, so the right side is $\ge rx$. If $-1 < x < 0$, then $-1 < c < 0$, so $0 < (1 + c)^{r-1} \le 1$, and
multiplying by the negative number $rx$ gives $r(1+c)^{r-1}x \ge rx$. Either way $(1 + x)^r \ge 1 + rx$.

**Example 25: which is bigger, $e^\pi$ or $\pi^e$?** Taking logarithms, $e^\pi > \pi^e$ means $\pi > e\ln\pi$, that is,
$\frac{\ln \pi}{\pi} < \frac{1}{e} = \frac{\ln e}{e}$. Let $f(x) = \frac{\ln x}{x}$. Then $f'(x) = \frac{1 - \ln x}{x^2}$, which is negative for
$x > e$. By 6.3, $f$ is strictly decreasing on $[e, \infty)$, and $\pi > e$, so $f(\pi) < f(e)$. Hence $e^\pi > \pi^e$. Check:
$e^\pi = 23.1407\ldots$, $\pi^e = 22.4592\ldots$

**A general principle.** To prove $f(x) \ge g(x)$ for $x \ge a$: show $f(a) \ge g(a)$ and $f'(x) \ge g'(x)$ for $x > a$. Then
$f - g$ is increasing and starts $\ge 0$. Example: $\cos x \ge 1 - \frac{x^2}{2}$ for $x \ge 0$. Let $h(x) = \cos x - 1 + \frac{x^2}{2}$.
Then $h(0) = 0$ and $h'(x) = x - \sin x \ge 0$ for $x \ge 0$ by Example 22. So $h(x) \ge 0$. (By symmetry it holds for all $x$.)

!!! tip "Try it in Python"
    Checking an inequality numerically is not a proof, but it catches mistakes before you try to prove something false:

    ```python
    import math
    xs = [i / 100 for i in range(1, 1001)]                     # 0.01 .. 10
    print(all(math.exp(x) >= 1 + x for x in xs))                 # True
    print(all(x / (1 + x) < math.log1p(x) < x for x in xs))      # True
    print(all(math.cos(x) >= 1 - x * x / 2 for x in xs))         # True
    print(math.e ** math.pi, math.pi ** math.e)                  # 23.14... 22.45...
    ```

## A little history

Michel Rolle published the result now named after him in 1691, for polynomials only, and with an algebraic method rather than
derivatives (he was in fact a critic of the new calculus). Joseph-Louis Lagrange stated the mean value theorem, with his form
of the remainder in Taylor's formula, in his *Théorie des fonctions analytiques* (1797). Augustin-Louis Cauchy made it the centre
of the subject in his lectures at the École Polytechnique in the 1820s, where he also gave the two-function version of 6.4.

L'Hôpital's rule is named after the Marquis de l'Hôpital, whose *Analyse des infiniment petits* (1696) was the first textbook of
differential calculus. The rule itself came from Johann Bernoulli, who had taught L'Hôpital and had agreed, for a regular payment,
to send him his mathematical discoveries; their correspondence, published long afterwards, shows this. L'Hôpital acknowledged his
debt to the Bernoullis and to Leibniz in the preface of the book, though not for this rule in particular. Darboux's theorem is
from Gaston Darboux's 1875 memoir on discontinuous functions, the same work that gave the upper and lower sums of Chapter 8.

## Check yourself

??? question "1. Check that Rolle's theorem applies to $f(x) = x^2 - 4x + 3$ on $[1, 3]$ and find $c$."

    $f$ is a polynomial, so continuous and differentiable everywhere, and $f(1) = 0 = f(3)$. $f'(x) = 2x - 4 = 0$ at $c = 2$,
    which is in $(1, 3)$.

??? question "2. Find the number $c$ promised by the mean value theorem for $f(x) = 1/x$ on $[1, 4]$."

    Secant slope $\frac{1/4 - 1}{3} = -\frac{1}{4}$. $f'(c) = -\frac{1}{c^2} = -\frac{1}{4}$ gives $c = 2$ (we discard $-2$, outside
    the interval).

??? question "3. Show that $x^3 + 3x + 1 = 0$ has exactly one real root."

    Let $f(x) = x^3 + 3x + 1$. $f(-1) = -3 < 0 < 1 = f(0)$, so there is a root in $(-1, 0)$ by the intermediate value theorem.
    $f'(x) = 3x^2 + 3 > 0$, so $f$ is strictly increasing and cannot have two roots (or: two roots would give a zero of $f'$ by
    Rolle). Exactly one.

??? question "4. $f$ is differentiable, $f(1) = 2$ and $f'(x) \le 3$ for all $x$. How large can $f(4)$ be?"

    $f(4) - f(1) = f'(c)\cdot 3 \le 9$, so $f(4) \le 11$. The value 11 is reached by $f(x) = 3x - 1$.

??? question "5. Evaluate $\lim_{x \to 0}\frac{\sqrt{1+x} - 1 - x/2}{x^2}$."

    $0/0$. Derivatives: $\frac{\frac{1}{2}(1+x)^{-1/2} - \frac{1}{2}}{2x}$, still $0/0$. Again:
    $\frac{-\frac{1}{4}(1+x)^{-3/2}}{2} \to -\frac{1}{8}$. So the limit is $-\frac{1}{8}$, and
    $\sqrt{1+x} \approx 1 + \frac{x}{2} - \frac{x^2}{8}$ near 0.

??? question "6. Evaluate $\lim_{x \to \infty}x^{1/x}$."

    $x^{1/x} = e^{\ln x / x}$ and $\frac{\ln x}{x} \to 0$ (Example 16 with $p = 1$). So the limit is $e^0 = 1$.

??? question "7. Prove that $\ln x \le x - 1$ for all $x > 0$, with equality only at $x = 1$."

    Put $x = e^t$ in $e^t \ge 1 + t$ (Example 20): $x \ge 1 + \ln x$, with equality only when $t = 0$, i.e. $x = 1$.
    Or directly: $h(x) = x - 1 - \ln x$ has $h'(x) = 1 - \frac{1}{x}$, negative on $(0, 1)$ and positive on $(1, \infty)$, so $h$
    decreases then increases, with minimum $h(1) = 0$.

??? question "8. Prove $|\arctan a - \arctan b| \le |a - b|$ for all real $a, b$."

    $\frac{d}{dx}\arctan x = \frac{1}{1+x^2}$, which lies in $(0, 1]$. By the MVT, $|\arctan a - \arctan b| = \frac{1}{1+c^2}|a - b| \le |a - b|$.

??? question "9. $f$ is differentiable on $\mathbb{R}$, $f' = 3f$ and $f(0) = 2$. Find $f$, and prove your answer is the only one."

    $f(x) = 2e^{3x}$. Uniqueness: $g(x) = f(x)e^{-3x}$ has $g'(x) = (f'(x) - 3f(x))e^{-3x} = 0$, so $g$ is constant, $g(0) = 2$, and
    $f(x) = 2e^{3x}$.

??? question "10. What is wrong with this: $\lim_{x \to 0}\frac{x^2 + x}{x^2 + 2} = \lim\frac{2x + 1}{2x} = \infty$?"

    The original is not an indeterminate form: at $x = 0$ the top is 0 and the bottom is 2, so by continuity the limit is
    $0/2 = 0$. L'Hôpital's rule was applied where its hypothesis ($0/0$ or $\infty/\infty$) fails.

??? question "11. Show that the function $f(x) = x + 2x^2\sin(1/x)$, $f(0) = 0$, has $f'(0) = 1 > 0$ but is not increasing on any interval around 0. Why doesn't this contradict 6.3?"

    $\frac{f(h)}{h} = 1 + 2h\sin(1/h) \to 1$, so $f'(0) = 1$. For $x \ne 0$, $f'(x) = 1 + 4x\sin(1/x) - 2\cos(1/x)$. At
    $x = \frac{1}{2n\pi}$ this is $1 + 0 - 2 = -1 < 0$, and these points come arbitrarily close to 0. Since $f'$ is continuous away
    from 0, $f' < 0$ on a small interval around each such point, so $f$ decreases there. No contradiction: 6.3 needs $f' > 0$ at
    *every* point of the interval, not just at one point.

??? question "12. (Harder) Suppose $f$ is differentiable on $(0, \infty)$ and $f'(x) \to L$ (a real number) as $x \to \infty$. Prove that $f(x + 1) - f(x) \to L$ and that $f(x)/x \to L$."

    MVT on $[x, x+1]$: $f(x+1) - f(x) = f'(c_x)$ for some $c_x$ in $(x, x + 1)$. As $x \to \infty$, $c_x \to \infty$, so
    $f'(c_x) \to L$. For the second, use the $\infty/\infty$ form of L'Hôpital's rule with $g(x) = x$: its proof needs only
    $|g(x)| \to \infty$ and nothing about $f$, and $\frac{f'(x)}{g'(x)} = f'(x) \to L$. So $\frac{f(x)}{x} \to L$, whatever $f$ itself does.

## What you learned

- Fermat's lemma: an interior extremum with a derivative has a flat tangent. Rolle: equal end values force a flat point inside.
- The mean value theorem: $f(b) - f(a) = f'(c)(b - a)$ for some $c$ in between. Instantaneous rate equals average rate somewhere.
- The sign of $f'$ on an interval decides whether $f$ increases or decreases; $f' = 0$ on an interval means constant, and two
  functions with the same derivative differ by a constant.
- $y' = ky$ forces $y = y(0)e^{kx}$.
- Derivatives have the intermediate value property (Darboux), so they cannot have jumps.
- Cauchy's MVT proves L'Hôpital's rule for $0/0$ and $\infty/\infty$; check the form first, and do not use it in circles.
- Bounds on $f'$ give inequalities: $e^x \ge 1 + x$, $\frac{x}{1+x} < \ln(1+x) < x$, $|\sin a - \sin b| \le |a - b|$, $e^\pi > \pi^e$.

**Next:** [Chapter 7](07-Applications-of-Derivatives.md), using everything so far to sketch curves, optimise, track related
rates, approximate and solve equations, and describe motion on Earth and on Mars.

## Further reading

- Michael Spivak, *Calculus*, 4th edition (2008), chapter 11 ("Significance of the derivative"), with Rolle, the MVT, Cauchy's
  form and L'Hôpital's rule.
- Stephen Abbott, *Understanding Analysis*, 2nd edition (2015), chapter 5: the MVT, Darboux's theorem and the
  $\infty/\infty$ form of L'Hôpital's rule at university level.
- Walter Rudin, *Principles of Mathematical Analysis*, 3rd edition (1976), chapter 5.
- Judith V. Grabiner, *The Origins of Cauchy's Rigorous Calculus* (1981): how the mean value theorem became the foundation of
  calculus.
- On this site: [Unit 5: The MVT and inverse functions](../../uoft/MAT137/unit05.md) and
  [Unit 6: Applications of derivatives and limits](../../uoft/MAT137/unit06.md) (MAT137),
  [Unit 7: The mean value theorem](../../uoft/MAT158H1/unit07.md) (MAT158).
- Topics shelf: [The derivative function](../../topics/change/level-7/05-derivative-function.md).
- Other books here: [Algebra](../algebra/index.md) (polynomials and their roots).
