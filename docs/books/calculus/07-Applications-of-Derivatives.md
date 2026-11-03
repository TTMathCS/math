# 7. Applications of derivatives

*We now have derivatives of every common function (Chapters 4 and 5) and a theorem that says what the derivative tells
us about the function (Chapter 6). This chapter puts them to work on the questions that made calculus famous. What does
the graph of a function look like, without plotting a thousand points? What is the biggest box you can fold from a sheet of
card, and why does light bend when it enters water? If a ladder slides down a wall, how fast does its top fall? How can
you compute $\sqrt 2$ to sixteen digits in four steps? And how does a stone fall, here and on Mars? Each section takes one
kind of question, gives a method, proves why the method works, and does worked examples from start to finish.*

!!! abstract "In this chapter"
    **You will learn:**

    - how the first and second derivatives describe a graph: rising and falling, peaks and valleys, concavity, inflection
      points, asymptotes
    - a reliable method for optimisation problems, applied to boxes, cans, and Snell's law of refraction
    - how to set up and solve related-rates problems
    - linear approximation, with a proved error bound, and differentials for estimating errors
    - Newton's method for solving equations, why it converges so fast, and how it can fail
    - how position, velocity and acceleration are linked, and how falling and throwing differ on Earth and on Mars

    **You need:** [Chapter 4](04-The-Derivative.md) (derivatives and the rules),
    [Chapter 5](05-The-Chain-Rule-and-Special-Functions.md) (the chain rule, implicit differentiation, derivatives of
    exponentials and trigonometric functions) and [Chapter 6](06-The-Mean-Value-Theorem.md) (the sign of the derivative,
    Cauchy's mean value theorem). Gentler versions on the Topics shelf:
    [Curve sketching](../../topics/change/level-8/03-curve-sketching.md),
    [Optimisation](../../topics/change/level-8/04-optimization.md),
    [Related rates](../../topics/change/level-8/05-related-rates.md),
    [Velocity and acceleration](../../topics/change/level-7/06-velocity-acceleration.md) and
    [Falling bodies](../../topics/change/level-5/05-falling-bodies.md).

    **Levels:** 7.1 to 7.3 and 7.6 are intermediate; 7.4 is intermediate with an advanced proof; the convergence proof in
    7.5 is advanced.

## 7.1 Curve sketching and concavity

A computer can plot any graph. So why learn to sketch? Because a plot only shows what is in the window, at the resolution of
the screen. It can miss a tiny wiggle, cut off an asymptote, or hide where exactly the peak is. The derivative tells you,
with certainty, where the function rises and falls and where its turning points are. A sketch made with calculus is a
*proof* of what the graph looks like.

### The first derivative: rising, falling, turning

From Chapter 6.3: on an interval where $f' > 0$, $f$ is increasing; where $f' < 0$, decreasing. The places where $f'$ can
change sign are the **critical points**: where $f' = 0$ or $f'$ does not exist.

!!! note "First derivative test"
    Let $f$ be continuous at a critical point $c$ and differentiable near $c$ (except possibly at $c$).

    - If $f'$ changes from positive to negative at $c$, then $f$ has a local maximum at $c$.
    - If $f'$ changes from negative to positive at $c$, then $f$ has a local minimum at $c$.
    - If $f'$ has the same sign on both sides, $c$ is not a local extremum.

*Proof of the first case.* On a small interval $(c - \delta, c]$, $f' > 0$ to the left of $c$, so $f$ is increasing there and
$f(x) \le f(c)$ (Chapter 6.3, applied on $[x, c]$; continuity at $c$ lets us include the endpoint). On $[c, c + \delta)$, $f' < 0$,
so $f$ is decreasing and $f(x) \le f(c)$. So $f(c)$ is the largest value near $c$. The other cases are the same. $\square$

### The second derivative: concavity

Two increasing functions can look very different: $x^2$ (for $x > 0$) rises faster and faster, bending upward, while
$\sqrt x$ rises more and more slowly, bending downward. The difference is in how the slope changes.

A differentiable function is **concave up** on an interval if $f'$ is increasing there, and **concave down** if $f'$ is
decreasing. (Some books say "convex" for concave up.) By Chapter 6.3 applied to $f'$: if $f'' > 0$ on an interval, $f$ is
concave up; if $f'' < 0$, concave down. A point where the concavity changes is an **inflection point**.

What does concave up look like? The curve lies *above its tangent lines*, like a bowl.

!!! note "Theorem"
    If $f$ is differentiable on an open interval $I$ and $f'$ is increasing on $I$, then for every $a$ and $x$ in $I$,

    $$
    f(x) \ge f(a) + f'(a)(x - a) .
    $$

*Proof.* Let $g(x) = f(x) - f(a) - f'(a)(x - a)$, the height of the curve above its tangent at $a$. Then $g(a) = 0$ and
$g'(x) = f'(x) - f'(a)$. Since $f'$ is increasing, $g'(x) \ge 0$ for $x > a$ and $g'(x) \le 0$ for $x < a$. So $g$ decreases up to
$a$ and increases after it (Chapter 6.3), and its smallest value is $g(a) = 0$. $\square$

This is the inequality $e^x \ge 1 + x$ of Chapter 6 in general form: $e^x$ is concave up and $1 + x$ is its tangent at 0.

!!! note "Second derivative test"
    If $f'(c) = 0$ and $f''(c)$ exists, then $f''(c) > 0$ implies a local minimum at $c$, and $f''(c) < 0$ implies a local
    maximum. If $f''(c) = 0$, the test says nothing.

*Proof.* Suppose $f''(c) > 0$. By definition $f''(c) = \lim_{x \to c}\frac{f'(x) - f'(c)}{x - c} = \lim_{x \to c}\frac{f'(x)}{x - c}$. Since
the limit is positive, the quotient is positive for $x$ close to $c$. So $f'(x) > 0$ for $x$ slightly bigger than $c$ and $f'(x) < 0$
for $x$ slightly smaller: $f'$ changes from negative to positive, and the first derivative test gives a minimum. ($f'$ exists near
$c$ because $f''(c)$ exists.) The maximum case is the same. When $f''(c) = 0$, anything can happen: $x^4$ has a minimum at 0,
$-x^4$ a maximum, and $x^3$ neither, and all three have $f'(0) = f''(0) = 0$. $\square$

### A checklist

1. **Domain**, and any symmetry (even, odd, periodic).
2. **Intercepts**: $f(0)$, and the roots if they can be found.
3. **Asymptotes**: vertical ones where $f \to \pm\infty$; horizontal ones from $\lim_{x \to \pm\infty}f(x)$.
4. **$f'$**: critical points, intervals of increase and decrease, local extrema.
5. **$f''$**: intervals of concavity, inflection points.
6. **Plot** the special points and join them, following the shape.

**Example 1.** $f(x) = x^3 - 3x^2 - 9x + 5$.

- Domain all of $\mathbb{R}$; no symmetry; $f(0) = 5$. As $x \to \infty$, $f \to \infty$; as $x \to -\infty$, $f \to -\infty$ (the $x^3$
  term wins). No asymptotes.
- $f'(x) = 3x^2 - 6x - 9 = 3(x + 1)(x - 3)$. Critical points $-1$ and $3$. Sign of $f'$: positive for $x < -1$, negative between
  $-1$ and $3$, positive for $x > 3$. So a local maximum $f(-1) = -1 - 3 + 9 + 5 = 10$ and a local minimum
  $f(3) = 27 - 27 - 27 + 5 = -22$.
- $f''(x) = 6x - 6$: negative for $x < 1$ (concave down), positive for $x > 1$ (concave up). Inflection point at $(1, -6)$. Check
  with the second derivative test: $f''(-1) = -12 < 0$ (maximum), $f''(3) = 12 > 0$ (minimum).
- Roots: $f$ changes sign three times (from $-\infty$ up to 10, down to $-22$, up to $\infty$), so there are exactly three real
  roots, near $-2.18$, $0.49$ and $4.69$ (Newton's method of 7.5 finds them).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 225" role="img" aria-label="Graph of x cubed minus 3 x squared minus 9 x plus 5 for x from minus 2.6 to 5.2: a local maximum at (minus 1, 10), an inflection point at (1, minus 6), a local minimum at (3, minus 22), and three roots near minus 2.18, 0.49 and 4.69">
  <line x1="20" y1="108" x2="350" y2="108" stroke="currentColor" stroke-width="1.2"/>
  <line x1="134" y1="10" x2="134" y2="220" stroke="currentColor" stroke-width="1.2"/>
  <line x1="94" y1="105" x2="94" y2="111" stroke="currentColor" stroke-width="1.2"/>
  <text x="94" y="122" font-size="11" text-anchor="middle" fill="currentColor">−1</text>
  <line x1="174" y1="105" x2="174" y2="111" stroke="currentColor" stroke-width="1.2"/>
  <text x="174" y="100" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <line x1="254" y1="105" x2="254" y2="111" stroke="currentColor" stroke-width="1.2"/>
  <text x="254" y="100" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <line x1="131" y1="64" x2="137" y2="64" stroke="currentColor" stroke-width="1.2"/>
  <text x="128" y="62" font-size="11" text-anchor="end" fill="currentColor">10</text>
  <polyline fill="none" stroke="#eea66f" stroke-width="2.4" points="30.0,149.6 34.0,138.2 38.0,127.8 42.0,118.3 46.0,109.6 50.0,101.8 54.0,94.8 58.0,88.6 62.0,83.1 66.0,78.4 70.0,74.5 74.0,71.2 78.0,68.5 82.0,66.5 86.0,65.1 90.0,64.3 94.0,64.0 98.0,64.3 102.0,65.0 106.0,66.3 110.0,67.9 114.0,70.0 118.0,72.6 122.0,75.4 126.0,78.6 130.0,82.2 134.0,86.0 138.0,90.1 142.0,94.4 146.0,98.9 150.0,103.7 154.0,108.5 158.0,113.6 162.0,118.7 166.0,123.9 170.0,129.1 174.0,134.4 178.0,139.7 182.0,144.9 186.0,150.1 190.0,155.2 194.0,160.3 198.0,165.1 202.0,169.9 206.0,174.4 210.0,178.7 214.0,182.8 218.0,186.6 222.0,190.2 226.0,193.4 230.0,196.2 234.0,198.8 238.0,200.9 242.0,202.5 246.0,203.8 250.0,204.5 254.0,204.8 258.0,204.5 262.0,203.7 266.0,202.3 270.0,200.3 274.0,197.7 278.0,194.3 282.0,190.4 286.0,185.7 290.0,180.2 294.0,174.0 298.0,167.0 302.0,159.2 306.0,150.5 310.0,141.0 314.0,130.6 318.0,119.2 322.0,106.9 326.0,93.6 330.0,79.3 334.0,64.0 338.0,47.6 342.0,30.2"/>
  <circle cx="94" cy="64" r="3.5" fill="#9cc9ea"/>
  <circle cx="254" cy="204.8" r="3.5" fill="#9cc9ea"/>
  <circle cx="174" cy="134.4" r="3.5" fill="#7ccf9a"/>
  <text x="70" y="50" font-size="11" fill="currentColor">max (−1, 10)</text>
  <text x="182" y="219" font-size="11" fill="currentColor">min (3, −22)</text>
  <text x="182" y="130" font-size="11" fill="currentColor">inflection (1, −6)</text>
  <text x="200" y="40" font-size="11" fill="currentColor">concave down left of 1,</text>
  <text x="200" y="54" font-size="11" fill="currentColor">concave up right of 1</text>
</svg>
</div>

**Example 2.** $f(x) = xe^{-x}$ (met in Chapter 5).

- Domain $\mathbb{R}$; $f(0) = 0$, the only root. As $x \to \infty$, $f(x) = x/e^x \to 0$ (exponentials beat powers, Chapter 6
  Example 15): the line $y = 0$ is a horizontal asymptote on the right. As $x \to -\infty$, $f(x) \to -\infty$.
- $f'(x) = (1 - x)e^{-x}$: positive for $x < 1$, negative for $x > 1$. Maximum $f(1) = 1/e \approx 0.368$.
- $f''(x) = (x - 2)e^{-x}$: concave down for $x < 2$, up for $x > 2$. Inflection at $(2, 2/e^2) \approx (2, 0.271)$.

So the graph comes up steeply from the lower left, crosses the origin with slope 1, peaks at $(1, 0.368)$, and then decays toward
the $x$-axis, changing from a dome to a tail at $x = 2$. Functions shaped like this describe a drug's concentration in the blood
after one dose, among other things.

**Example 3.** $f(x) = \frac{x}{x^2 + 1}$.

- Odd function ($f(-x) = -f(x)$), so the graph is symmetric about the origin. $f(x) \to 0$ as $x \to \pm\infty$.
- $f'(x) = \frac{(x^2 + 1) - 2x^2}{(x^2+1)^2} = \frac{1 - x^2}{(x^2+1)^2}$. Maximum $f(1) = \frac{1}{2}$, minimum $f(-1) = -\frac{1}{2}$.
- $f''(x) = \frac{2x(x^2 - 3)}{(x^2 + 1)^3}$, zero at $0$ and $\pm\sqrt 3$, changing sign at each: three inflection points.

Without calculus you would not easily guess that $\frac{1}{2}$ is the exact largest value, or that this harmless-looking function has
three inflection points.

## 7.2 Optimisation

Many real questions are "what is the best?": the largest volume, the least cost, the shortest time. Calculus answers them with a
method that always works when the function is continuous on a closed interval.

!!! note "The closed interval method"
    To find the largest and smallest values of a continuous $f$ on $[a, b]$: compute $f$ at the critical points inside $(a, b)$
    and at the two endpoints $a$ and $b$. The biggest of these numbers is the maximum and the smallest is the minimum.

*Why it works.* The extreme value theorem (Chapter 3.3) says the maximum and minimum exist. Each is reached either at an endpoint
or at an interior point; at an interior point, Fermat's lemma (Chapter 6.1) says it is a critical point. So the list contains them.
$\square$

On an open or infinite interval there may be no maximum, and then you need another argument, usually the first derivative test:
if $f' < 0$ to the left of a single critical point and $f' > 0$ to the right, that point is the minimum over the whole interval.

**The method for word problems.** (1) Draw a picture and name the quantities. (2) Write the quantity to optimise as a function
of *one* variable, using the constraints. (3) Find its domain. (4) Find the critical points. (5) Decide which is the answer, by the
closed interval method or the first derivative test. (6) Answer the question that was asked, with units.

**Example 4: the open box.** From a 12 cm by 12 cm square of card, cut equal squares of side $x$ from the four corners and fold up
the sides. Which $x$ gives the biggest box?

The base is $(12 - 2x)$ by $(12 - 2x)$ and the height is $x$, so $V(x) = x(12 - 2x)^2$, for $0 \le x \le 6$. Then

$$
V'(x) = (12 - 2x)^2 + x\cdot 2(12 - 2x)(-2) = (12 - 2x)\bigl(12 - 2x - 4x\bigr) = (12 - 2x)(12 - 6x) .
$$

Critical points in $(0, 6)$: $x = 2$ only ($x = 6$ is an endpoint). Values: $V(0) = 0$, $V(2) = 2 \cdot 8^2 = 128$, $V(6) = 0$. So cut
2 cm squares; the box holds 128 cubic cm. Check: $V(1.9) = 1.9 \times 8.2^2 = 127.756$ and $V(2.1) = 2.1 \times 7.8^2 = 127.764$, both
smaller.

**Example 5: the cheapest can.** A cylindrical can must hold $V = 500$ cubic cm. What shape uses the least metal? With radius $r$
and height $h$, $\pi r^2 h = 500$, so $h = \frac{500}{\pi r^2}$. The surface area (top, bottom and side) is

$$
A(r) = 2\pi r^2 + 2\pi r h = 2\pi r^2 + \frac{1000}{r}, \qquad r > 0 .
$$

$A'(r) = 4\pi r - \frac{1000}{r^2} = 0$ when $r^3 = \frac{1000}{4\pi} = \frac{250}{\pi}$, so $r = \left(\frac{250}{\pi}\right)^{1/3} \approx 4.30$ cm.
For smaller $r$, $A' < 0$; for larger, $A' > 0$, so this is the minimum over all $r > 0$. Then $h = \frac{500}{\pi r^2} \approx 8.60$ cm.
In general, $4\pi r^3 = 2V = 2\pi r^2 h$ gives $h = 2r$: **the best can is as tall as it is wide.** Real cans are often taller, because
metal is not the only cost (the top and bottom are thicker, there are seams, and shelf shapes matter).

**Example 6: Snell's law, derived.** Light travels at speed $v_1$ in air and a slower $v_2$ in water. A ray goes from a point $A$ in the
air to a point $B$ in the water. Which path does it take? In 1662 Pierre de Fermat proposed the **principle of least time**: light
takes the path that takes the least time. Let us see what that predicts.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 230" role="img" aria-label="A ray from A in the upper medium to the point P on the flat boundary, then to B in the lower medium. A is at height a above the boundary, B at depth b below; the horizontal distances are x and d minus x. The angles theta one and theta two are measured from the dashed normal line at P">
  <rect x="20" y="120" width="320" height="100" fill="#9cc9ea" fill-opacity="0.25"/>
  <line x1="20" y1="120" x2="340" y2="120" stroke="currentColor" stroke-width="1.4"/>
  <line x1="190" y1="15" x2="190" y2="220" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="60" y1="30" x2="190" y2="120" stroke="#eea66f" stroke-width="2.4"/>
  <line x1="190" y1="120" x2="290" y2="210" stroke="#eea66f" stroke-width="2.4"/>
  <circle cx="60" cy="30" r="3.5" fill="currentColor"/>
  <circle cx="290" cy="210" r="3.5" fill="currentColor"/>
  <circle cx="190" cy="120" r="3" fill="currentColor"/>
  <text x="48" y="26" font-size="12" fill="currentColor">A</text>
  <text x="297" y="214" font-size="12" fill="currentColor">B</text>
  <text x="194" y="114" font-size="12" fill="currentColor">P</text>
  <line x1="60" y1="30" x2="60" y2="120" stroke="currentColor" stroke-width="1" stroke-dasharray="2 3"/>
  <text x="50" y="80" font-size="11" text-anchor="end" fill="currentColor">a</text>
  <line x1="290" y1="120" x2="290" y2="210" stroke="currentColor" stroke-width="1" stroke-dasharray="2 3"/>
  <text x="298" y="170" font-size="11" fill="currentColor">b</text>
  <text x="125" y="136" font-size="11" text-anchor="middle" fill="currentColor">x</text>
  <text x="240" y="136" font-size="11" text-anchor="middle" fill="currentColor">d − x</text>
  <path d="M 190 85 A 35 35 0 0 0 161.2 100.1" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="168" y="80" font-size="11" fill="currentColor">θ₁</text>
  <path d="M 190 155 A 35 35 0 0 0 216.0 143.4" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="200" y="172" font-size="11" fill="currentColor">θ₂</text>
  <text x="250" y="40" font-size="11" fill="currentColor">air: speed v₁</text>
  <text x="30" y="205" font-size="11" fill="currentColor">water: speed v₂ &lt; v₁</text>
</svg>
</div>

Put the boundary on the $x$-axis, $A$ at height $a$ above the point 0, and $B$ at depth $b$ below the point $d$. If the ray crosses the
boundary at $P = (x, 0)$, the time taken is

$$
T(x) = \frac{\sqrt{a^2 + x^2}}{v_1} + \frac{\sqrt{b^2 + (d - x)^2}}{v_2} .
$$

Differentiate:

$$
T'(x) = \frac{x}{v_1\sqrt{a^2 + x^2}} - \frac{d - x}{v_2\sqrt{b^2 + (d - x)^2}} = \frac{\sin\theta_1}{v_1} - \frac{\sin\theta_2}{v_2} ,
$$

where $\theta_1$ and $\theta_2$ are the angles between the ray and the **normal** (the line perpendicular to the boundary), read off the
two right triangles in the figure. At the best point $T'(x) = 0$:

$$
\frac{\sin\theta_1}{v_1} = \frac{\sin\theta_2}{v_2} .
$$

Is it really a minimum, and the only one? $T'(0) = -\frac{d}{v_2\sqrt{b^2 + d^2}} < 0$ and $T'(d) = \frac{d}{v_1\sqrt{a^2 + d^2}} > 0$, so $T'$
has a zero in $(0, d)$ (intermediate value theorem). And

$$
T''(x) = \frac{a^2}{v_1(a^2 + x^2)^{3/2}} + \frac{b^2}{v_2\bigl(b^2 + (d - x)^2\bigr)^{3/2}} > 0 ,
$$

so $T'$ is strictly increasing and the zero is unique: $T$ falls, then rises, and the critical point is the global minimum.

This is **Snell's law**. Physicists write it with the **refractive index** $n = c/v$ ($c$ the speed of light in a vacuum):
$n_1\sin\theta_1 = n_2\sin\theta_2$. For water, $n_2 \approx 1.33$; a ray hitting water at $\theta_1 = 45^\circ$ from air ($n_1 \approx 1$)
continues at $\theta_2$ with $\sin\theta_2 = \frac{0.7071}{1.33} = 0.532$, so $\theta_2 \approx 32.1^\circ$: it bends toward the normal. That is why
a straw in a glass looks broken. The law was found by experiment (by Ibn Sahl in tenth-century Baghdad, and again by Willebrord
Snellius in 1621, and published by Descartes in 1637); Fermat's least-time derivation explained *why*.

## 7.3 Related rates

When two quantities are tied by an equation and both change with time, their rates of change are tied too. Differentiate the
equation with respect to time $t$ (using the chain rule on every quantity) to get an equation between rates.

**Method.** (1) Picture and names. (2) Write an equation connecting the quantities that holds *at all times*. (3) Differentiate it with
respect to $t$. (4) Only now substitute the numbers for the particular moment. (Substituting too early turns a varying quantity into a
constant, and its rate into 0.)

**Example 7: the sliding ladder.** A 5 m ladder leans against a wall. Its foot slides away from the wall at 1 m/s. How fast is the top
sliding down when the foot is 3 m from the wall?

Let $x$ be the distance of the foot from the wall and $y$ the height of the top. At all times $x^2 + y^2 = 25$. Differentiate with respect
to $t$: $2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$. At the moment in question $x = 3$, so $y = 4$, and $\frac{dx}{dt} = 1$:

$$
\frac{dy}{dt} = -\frac{x}{y}\frac{dx}{dt} = -\frac{3}{4}\ \text{m/s} .
$$

The top slides down at 0.75 m/s. Note that as $y \to 0$ the formula gives a speed tending to infinity; the model breaks down (the
top leaves the wall before that), which is a good reminder that a formula is only as good as its assumptions.

**Example 8: filling a cone.** A water tank is a cone, point down, 4 m deep with a top radius of 2 m. Water is pumped in at 2 cubic
metres per minute. How fast is the level rising when the water is 3 m deep?

When the depth is $h$, the water is a smaller cone of the same shape, with radius $r = h/2$ (similar triangles). Its volume is

$$
V = \frac{1}{3}\pi r^2 h = \frac{1}{3}\pi\frac{h^2}{4}h = \frac{\pi h^3}{12} .
$$

Differentiate: $\frac{dV}{dt} = \frac{\pi h^2}{4}\frac{dh}{dt}$. With $\frac{dV}{dt} = 2$ and $h = 3$: $\frac{dh}{dt} = \frac{4 \cdot 2}{9\pi} = \frac{8}{9\pi} \approx 0.283$ m
per minute. The factor $\frac{\pi h^2}{4}$ is the area of the water's surface: the rate of rise is (rate of inflow) divided by (surface area),
which makes sense, since a thin layer of thickness $dh$ has volume (area)$\times dh$.

**Example 9: an angle.** A rocket rises vertically from a pad, watched by a camera 2 km away on level ground. When the rocket is 2 km
up, it is climbing at 0.3 km/s. How fast is the camera's angle of elevation $\theta$ changing? Here $\tan\theta = \frac{y}{2}$, so
$\sec^2\theta\,\frac{d\theta}{dt} = \frac{1}{2}\frac{dy}{dt}$. When $y = 2$, $\theta = \pi/4$ and $\sec^2\theta = 2$, so
$\frac{d\theta}{dt} = \frac{0.3}{4} = 0.075$ radians per second, about $4.3^\circ$ per second.

## 7.4 Linear approximation and differentials

Near a point $a$, a differentiable function looks like its tangent line. The tangent line function

$$
L(x) = f(a) + f'(a)(x - a)
$$

is the **linear approximation** (or linearisation) of $f$ at $a$. It is the best straight-line approximation in a precise sense: the
error $f(x) - L(x)$ is small *compared with* $x - a$, since $\frac{f(x) - L(x)}{x - a} = \frac{f(x) - f(a)}{x - a} - f'(a) \to 0$.

**Example 10.** $\sqrt{4.1}$. Take $f(x) = \sqrt x$, $a = 4$: $f(4) = 2$, $f'(4) = \frac{1}{4}$. So $\sqrt{4.1} \approx 2 + \frac{0.1}{4} = 2.025$.
The true value is $2.024846\ldots$, an error of about 0.00015.

**Example 11.** For small $x$ (radians), $\sin x \approx x$, $\cos x \approx 1$, $e^x \approx 1 + x$, $\ln(1 + x) \approx x$, and
$(1 + x)^r \approx 1 + rx$. Physicists use $\sin\theta \approx \theta$ to turn the pendulum equation into the simple oscillator of
Chapter 14; $(1 + x)^r \approx 1 + rx$ is how small corrections are handled everywhere.

### How big is the error?

An approximation without an error bound is a guess. The error comes from the curve bending away from its tangent, which is measured
by $f''$.

!!! note "Theorem (error of the linear approximation)"
    If $f$ is twice differentiable on an interval containing $a$ and $x$, then for some $\xi$ between $a$ and $x$,

    $$
    f(x) = f(a) + f'(a)(x - a) + \frac{f''(\xi)}{2}(x - a)^2 .
    $$

    So if $|f''| \le M$ between $a$ and $x$, then $|f(x) - L(x)| \le \frac{M}{2}(x - a)^2$.

*Level: advanced.* *Proof.* Fix $x \ne a$. Let $g(t) = f(t) - f(a) - f'(a)(t - a)$ and $k(t) = (t - a)^2$. Both vanish at $t = a$, and
$k'(t) = 2(t - a) \ne 0$ for $t \ne a$. By Cauchy's mean value theorem (Chapter 6.4) on the interval between $a$ and $x$, there is $c$
strictly between them with

$$
\frac{g(x)}{k(x)} = \frac{g(x) - g(a)}{k(x) - k(a)} = \frac{g'(c)}{k'(c)} = \frac{f'(c) - f'(a)}{2(c - a)} .
$$

By the ordinary mean value theorem applied to $f'$ between $a$ and $c$, $f'(c) - f'(a) = f''(\xi)(c - a)$ for some $\xi$ between $a$ and $c$.
So $\frac{g(x)}{k(x)} = \frac{f''(\xi)}{2}$, that is, $f(x) - f(a) - f'(a)(x - a) = \frac{f''(\xi)}{2}(x - a)^2$. $\square$

This is the first case of Taylor's theorem; Chapter 13 continues to any number of terms.

**Example 10 again.** For $\sqrt x$, $f''(x) = -\frac{1}{4}x^{-3/2}$, whose size on $[4, 4.1]$ is at most $\frac{1}{4}\cdot 4^{-3/2} = \frac{1}{32}$. So
the error is at most $\frac{1}{2}\cdot\frac{1}{32}\cdot(0.1)^2 = 0.00015625$. The actual error, 0.000154, is just inside. Also $f'' < 0$, so the
error term is negative and $2.025$ is an *overestimate*: the curve is concave down and lies below its tangent.

### Differentials

Leibniz wrote $dx$ for a small change in $x$ and $dy = f'(x)\,dx$ for the corresponding change along the tangent line. These
**differentials** give the linear estimate of the change: $\Delta y \approx dy$. They are especially handy for estimating how errors in
measurement spread to computed quantities.

**Example 12.** The radius of a ball is measured as 10 cm, with a possible error of 0.1 cm. How uncertain is the computed volume?
$V = \frac{4}{3}\pi r^3$, so $dV = 4\pi r^2\,dr = 4\pi(100)(0.1) = 40\pi \approx 126$ cubic cm, out of $V \approx 4189$. The **relative error** is
$\frac{dV}{V} = 3\frac{dr}{r} = 3 \times 1\% = 3\%$. In general, for $y = x^n$, $\frac{dy}{y} = n\frac{dx}{x}$: a relative error is multiplied by the
power. Measuring a radius to 1% gives a volume only to 3%.

## 7.5 Newton's method

Most equations cannot be solved by formula: $\cos x = x$, $x^5 + x - 1 = 0$, Kepler's equation for a planet's position. Bisection
(Chapter 3.2) always works but gains only one binary digit per step. Newton's method usually gains far more.

**The idea.** Guess $x_0$. Replace the curve $y = f(x)$ by its tangent line at $x_0$, which is easy to solve: the tangent
$y = f(x_0) + f'(x_0)(x - x_0)$ crosses zero at

$$
x_1 = x_0 - \frac{f(x_0)}{f'(x_0)} .
$$

Take $x_1$ as the new guess and repeat: $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$.

**Example 13: $\sqrt 2$.** Solve $f(x) = x^2 - 2 = 0$. Then $x_{n+1} = x_n - \frac{x_n^2 - 2}{2x_n} = \frac{1}{2}\left(x_n + \frac{2}{x_n}\right)$: average
the guess with 2 divided by the guess. (This recipe is very old; it was known in antiquity, long before calculus.) From $x_0 = 1$:

| $n$ | $x_n$ | correct digits |
|---|---|---|
| 0 | 1 | 1 |
| 1 | 1.5 | 1 |
| 2 | 1.416666666666667 | 3 |
| 3 | 1.414215686274510 | 6 |
| 4 | 1.414213562374690 | 12 |
| 5 | 1.414213562373095 | all 16 shown |

The number of correct digits roughly *doubles* each step. This is called **quadratic convergence**.

**Example 14.** The root of $x^5 + x - 1$ from Chapter 6: $x_{n+1} = x_n - \frac{x_n^5 + x_n - 1}{5x_n^4 + 1}$. From $x_0 = 1$: 0.8333, 0.76438,
0.755025, 0.7548777, 0.75487766625. Check: $0.75487766625^5 + 0.75487766625 - 1 \approx 0$ to ten decimal places.

### Why it converges so fast

*Level: advanced.* Let $r$ be the root and $e_n = x_n - r$ the error. The error theorem of 7.4, applied at the point $x_n$ and evaluated at $r$,
gives (for some $\xi_n$ between $x_n$ and $r$)

$$
0 = f(r) = f(x_n) + f'(x_n)(r - x_n) + \frac{f''(\xi_n)}{2}(r - x_n)^2 .
$$

Divide by $f'(x_n)$ and rearrange: $x_n - \frac{f(x_n)}{f'(x_n)} - r = \frac{f''(\xi_n)}{2f'(x_n)}(x_n - r)^2$, that is,

$$
e_{n+1} = \frac{f''(\xi_n)}{2f'(x_n)}\,e_n^2 .
$$

The new error is a constant times the *square* of the old one. If the error is $10^{-6}$, the next is about $10^{-12}$.

!!! note "Theorem (local convergence of Newton's method)"
    Suppose $f(r) = 0$, $f''$ is continuous near $r$ and $f'(r) \ne 0$. Then there is $\delta > 0$ such that for every start
    $x_0$ with $|x_0 - r| \le \delta$, Newton's method converges to $r$, and $|e_{n+1}| \le K e_n^2$ for a constant $K$.

*Proof.* Since $f'(r) \ne 0$ and $f'$ is continuous, we can pick $\delta_0 > 0$ so that on $I = [r - \delta_0, r + \delta_0]$, $|f'| \ge m > 0$, and
$|f''| \le M$ (a continuous function is bounded on a closed interval). Let $K = \frac{M}{2m}$ and choose $\delta \le \delta_0$ with $K\delta \le \frac{1}{2}$. If
$x_n$ is in $[r - \delta, r + \delta]$, then $\xi_n$ is too, and the formula gives $|e_{n+1}| \le K e_n^2 \le (K\delta)|e_n| \le \frac{1}{2}|e_n|$. So $x_{n+1}$ is again
within $\delta$ of $r$, and by induction every $x_n$ is, with $|e_n| \le 2^{-n}\delta \to 0$. $\square$

**When it fails.** The theorem only promises success *near* the root.

- *Flat tangent.* If $f'(x_n) = 0$, the method divides by zero; if $f'(x_n)$ is tiny, $x_{n+1}$ shoots far away.
- *Cycling.* For $f(x) = x^3 - 2x + 2$ from $x_0 = 0$: $x_1 = 0 - \frac{2}{-2} = 1$, and $x_2 = 1 - \frac{1}{1} = 0$. It cycles 0, 1, 0, 1, ...
  forever, though there is a real root near $-1.77$.
- *Divergence.* For $f(x) = x^{1/3}$ (root 0), $x_{n+1} = x_n - \frac{x_n^{1/3}}{\frac{1}{3}x_n^{-2/3}} = x_n - 3x_n = -2x_n$. Each step doubles the
  distance from the root. Here $f'(0)$ does not exist, so the theorem does not apply.

In practice, programs combine Newton with a safe method like bisection: take a Newton step when it lands inside the bracket, a bisection
step when it does not.

!!! tip "Try it in Python"
    ```python
    import math

    def newton(f, df, x, steps=6):
        for _ in range(steps):
            x = x - f(x) / df(x)
            print(x)
        return x

    newton(lambda x: math.cos(x) - x, lambda x: -math.sin(x) - 1, 1.0)
    # 0.7503638678402439, 0.7391128909113617, 0.739085133385284, 0.7390851332151607, ...
    ```

    The solution of $\cos x = x$ is $0.7390851332\ldots$ (sometimes called the Dottie number): press cos on a calculator in radian mode
    again and again from any start and you get there too, but much more slowly.

**History.** Isaac Newton described the method for polynomial equations in work of the late 1660s, in a form that rewrote the
polynomial at each step. Joseph Raphson published a simpler version in 1690, and the modern form with the derivative $f'(x_n)$ came
later in the eighteenth century, which is why it is often called the Newton-Raphson method.

## 7.6 Motion: falling on Earth and on Mars

If $s(t)$ is the position of an object moving along a line at time $t$, then $v(t) = s'(t)$ is its **velocity** and $a(t) = v'(t) = s''(t)$
its **acceleration**. Velocity has a sign (direction); **speed** is $|v(t)|$. When $v$ and $a$ have the same sign the object speeds up;
when they have opposite signs it slows down.

### Constant acceleration

Near the surface of a planet, ignoring air, a falling object has constant acceleration $-g$ (taking "up" as positive). What can we
deduce from $s''(t) = -g$ alone? Chapter 6.3 says functions with the same derivative on an interval differ by a constant.

- $v'(t) = -g$, and $-gt$ also has derivative $-g$, so $v(t) = -gt + C$. At $t = 0$, $v(0) = v_0$, so $C = v_0$: $v(t) = v_0 - gt$.
- $s'(t) = v_0 - gt$, and $v_0t - \frac{1}{2}gt^2$ has this derivative, so $s(t) = s_0 + v_0t - \frac{1}{2}gt^2$, where $s_0 = s(0)$.

These are not guesses that happen to fit: they are the *only* functions with constant acceleration $-g$ and the given starting position
and velocity.

The value of $g$ depends on the planet. At Earth's surface $g \approx 9.81$ m/s$^2$; at Mars's, $g \approx 3.71$ m/s$^2$, a little over a third.

**Example 15: dropping a stone from 20 m.** Here $s_0 = 20$, $v_0 = 0$, so $s(t) = 20 - \frac{1}{2}gt^2$, which is 0 when $t = \sqrt{40/g}$. The
impact speed is $|v| = gt = \sqrt{40g}$.

| | Earth ($g = 9.81$) | Mars ($g = 3.71$) |
|---|---|---|
| time to fall 20 m | 2.02 s | 3.28 s |
| speed on impact | 19.8 m/s | 12.2 m/s |

**Example 16: throwing a ball straight up at 10 m/s.** It rises until $v(t) = 10 - gt = 0$, at $t = 10/g$; the greatest height is
$s = 10\cdot\frac{10}{g} - \frac{1}{2}g\frac{100}{g^2} = \frac{100}{2g}$. In general, with launch speed $v_0$, the maximum height is $\frac{v_0^2}{2g}$ and the
time in the air (back to launch height) is $\frac{2v_0}{g}$.

| | Earth | Mars |
|---|---|---|
| greatest height | 5.10 m | 13.48 m |
| time in the air | 2.04 s | 5.39 s |

Since height is proportional to $1/g$, a person who can jump 0.5 m on Earth would, with the same take-off speed, rise
$0.5 \times \frac{9.81}{3.71} \approx 1.32$ m on Mars (ignoring the spacesuit).

**Example 17: the best angle for a throw.** Launch at speed $v_0$ at angle $\theta$ above level ground. Horizontal and vertical motion
separate: $x(t) = v_0\cos\theta\,t$ (no horizontal acceleration) and $y(t) = v_0\sin\theta\,t - \frac{1}{2}gt^2$. It lands when $y = 0$, at
$t = \frac{2v_0\sin\theta}{g}$, having travelled

$$
R(\theta) = v_0\cos\theta\cdot\frac{2v_0\sin\theta}{g} = \frac{v_0^2\sin 2\theta}{g} .
$$

$R'(\theta) = \frac{2v_0^2\cos 2\theta}{g} = 0$ at $\theta = 45^\circ$ (for $0 < \theta < 90^\circ$), and $R'' < 0$ there: the best angle is $45^\circ$ on any
planet. The range itself is $\frac{v_0^2}{g}$: at 10 m/s, about 10.2 m on Earth and 27.0 m on Mars.

**How honest is "ignoring air"?** On Earth, air drag matters a lot for light or fast objects (a feather, a raindrop, a thrown
ball), and Chapter 14 adds it as a differential equation. Mars's atmosphere is very thin: the surface pressure is less than one percent
of Earth's. So for a stone or a ball, the drag-free formulas above are a better description on Mars than they are on Earth. They still
fail for spacecraft entering at thousands of metres per second, where even thin air produces enormous heating and drag.

## A little history

Problems of maxima and minima were studied by Pierre de Fermat in the 1630s, with a method of "adequality" that is close to setting a
derivative to zero; his least-time principle for light came later. Galileo's experiments and reasoning on falling bodies (published in
his *Two New Sciences*, 1638) established that free fall has constant acceleration, before calculus existed; Newton's laws then
explained it. L'Hôpital's 1696 textbook already contains curve sketching with first and second derivatives and many optimisation
problems. Newton's method is discussed in 7.5.

## Check yourself

??? question "1. Sketch $f(x) = x^4 - 4x^3$: find the critical points, local extrema, intervals of concavity and inflection points."

    $f'(x) = 4x^3 - 12x^2 = 4x^2(x - 3)$. Critical points 0 and 3. $f' < 0$ for $x < 3$ (except $f'(0) = 0$) and $f' > 0$ for $x > 3$,
    so $f$ decreases until 3 and increases after: local (and global) minimum $f(3) = 81 - 108 = -27$; no extremum at 0.
    $f''(x) = 12x^2 - 24x = 12x(x - 2)$: concave up for $x < 0$, down on $(0, 2)$, up for $x > 2$. Inflection points $(0, 0)$ and
    $(2, -16)$. Roots: $x^3(x - 4) = 0$, so $x = 0$ and $x = 4$.

??? question "2. A farmer has 100 m of fence to enclose a rectangle along a straight river (no fence needed on the river side). What is the largest area?"

    Sides $x$ (two of them, perpendicular to the river) and $y$: $2x + y = 100$, so $A(x) = x(100 - 2x)$ for $0 \le x \le 50$.
    $A'(x) = 100 - 4x = 0$ at $x = 25$. $A(0) = A(50) = 0$ and $A(25) = 25 \times 50 = 1250$ square metres.

??? question "3. Find the points on the parabola $y = x^2$ closest to the point $(0, 2)$."

    Minimise the squared distance $D(x) = x^2 + (x^2 - 2)^2 = x^4 - 3x^2 + 4$. $D'(x) = 4x^3 - 6x = 2x(2x^2 - 3)$, zero at $0$ and
    $\pm\sqrt{3/2}$. $D(0) = 4$; $D(\pm\sqrt{3/2}) = \frac{9}{4} - \frac{9}{2} + 4 = \frac{7}{4}$. Since $D \to \infty$ as $|x| \to \infty$, the minimum is
    $\frac{7}{4}$, at the points $\left(\pm\sqrt{3/2}, \frac{3}{2}\right)$, distance $\frac{\sqrt 7}{2} \approx 1.32$. (The vertex, at distance 2, is a local
    maximum of the distance.)

??? question "4. Air is pumped into a spherical balloon at 100 cubic cm per second. How fast is the radius growing when it is 5 cm?"

    $V = \frac{4}{3}\pi r^3$, so $\frac{dV}{dt} = 4\pi r^2\frac{dr}{dt}$. Then $\frac{dr}{dt} = \frac{100}{4\pi\cdot 25} = \frac{1}{\pi} \approx 0.318$ cm per second.

??? question "5. A person 1.8 m tall walks away from a 6 m street lamp at 1.5 m/s. How fast does the tip of their shadow move?"

    Let $x$ be the person's distance from the lamp and $s$ the shadow's length. Similar triangles: $\frac{s}{1.8} = \frac{x + s}{6}$, so
    $6s = 1.8x + 1.8s$, $s = \frac{3}{7}x$. The tip is at $x + s = \frac{10}{7}x$, moving at $\frac{10}{7}\times 1.5 = \frac{15}{7} \approx 2.14$ m/s, whatever
    the distance.

??? question "6. Use a linear approximation to estimate $\sqrt[3]{8.1}$, and say whether it is too big or too small."

    $f(x) = x^{1/3}$, $a = 8$: $f(8) = 2$, $f'(8) = \frac{1}{3}\cdot 8^{-2/3} = \frac{1}{12}$. So $\sqrt[3]{8.1} \approx 2 + \frac{0.1}{12} = 2.008333$.
    $f''(x) = -\frac{2}{9}x^{-5/3} < 0$, so the curve is below the tangent: an overestimate. The true value is $2.0082988\ldots$

??? question "7. Use Newton's method with $x_0 = 1$ to solve $\cos x = x$. Give three steps."

    $f(x) = \cos x - x$, $f'(x) = -\sin x - 1$. $x_1 = 1 - \frac{\cos 1 - 1}{-\sin 1 - 1} = 0.750364$, $x_2 = 0.739113$,
    $x_3 = 0.7390851334$ (the true root is $0.7390851332\ldots$).

??? question "8. On Mars, a ball is thrown straight up from the ground at 15 m/s. How high does it go, and when does it land?"

    Greatest height $\frac{v_0^2}{2g} = \frac{225}{7.42} \approx 30.3$ m. Time in the air $\frac{2v_0}{g} = \frac{30}{3.71} \approx 8.09$ s. (On Earth: about
    11.5 m and 3.06 s.)

??? question "9. A ray of light passes from air ($n_1 = 1$) into water ($n_2 = 1.33$) at $30^\circ$ to the normal. At what angle does it continue?"

    $\sin\theta_2 = \frac{\sin 30^\circ}{1.33} = \frac{0.5}{1.33} = 0.3759$, so $\theta_2 \approx 22.1^\circ$.

??? question "10. Show that for Newton's method on $x^2 - 2$, the errors satisfy exactly $x_{n+1} - \sqrt 2 = \frac{(x_n - \sqrt 2)^2}{2x_n}$. Why does this prove that from any $x_0 > 0$ the method converges to $\sqrt 2$?"

    $x_{n+1} - \sqrt 2 = \frac{x_n^2 + 2}{2x_n} - \sqrt 2 = \frac{x_n^2 - 2\sqrt 2 x_n + 2}{2x_n} = \frac{(x_n - \sqrt 2)^2}{2x_n}$.
    If $x_0 > 0$, this shows $x_1 \ge \sqrt 2$, and then every later $x_n \ge \sqrt 2$. For $x_n \ge \sqrt 2$,
    $0 \le x_{n+1} - \sqrt 2 = (x_n - \sqrt 2)\cdot\frac{x_n - \sqrt 2}{2x_n} \le \frac{1}{2}(x_n - \sqrt 2)$, since $\frac{x_n - \sqrt 2}{2x_n} < \frac{1}{2}$. So the
    error at least halves each step and tends to 0 (and once small, it squares).

??? question "11. Use the error theorem of 7.4 to show that $1 - \frac{x^2}{2} \le \cos x$ for all $x$, and bound the error of $\cos x \approx 1$ for $|x| \le 0.1$."

    With $a = 0$: $\cos x = 1 + 0\cdot x + \frac{-\cos\xi}{2}x^2$, so $|\cos x - 1| \le \frac{x^2}{2}$, and in particular $\cos x \ge 1 - \frac{x^2}{2}$.
    For $|x| \le 0.1$ the error of $\cos x \approx 1$ is at most $\frac{0.01}{2} = 0.005$.

??? question "12. (Harder) Prove that among all rectangles with perimeter $P$, the square has the largest area, and among all rectangles with area $A$, the square has the smallest perimeter."

    Sides $x$ and $\frac{P}{2} - x$: area $f(x) = x\left(\frac{P}{2} - x\right)$ on $\left[0, \frac{P}{2}\right]$, $f'(x) = \frac{P}{2} - 2x = 0$ at $x = \frac{P}{4}$,
    and $f = 0$ at the ends, so the maximum is at $x = \frac{P}{4}$, a square. For fixed area, perimeter $g(x) = 2\left(x + \frac{A}{x}\right)$ for
    $x > 0$; $g'(x) = 2\left(1 - \frac{A}{x^2}\right)$ is negative for $x < \sqrt A$ and positive after, so the minimum over all $x > 0$ is at
    $x = \sqrt A$, a square.

## What you learned

- $f'$ shows where a function rises and falls and where its local extrema are (first derivative test); $f''$ shows concavity, and a
  concave-up graph lies above its tangent lines.
- Optimisation: write one function of one variable, find critical points, compare with endpoints (closed interval method) or use the
  sign of $f'$. The best can has $h = 2r$; least time gives Snell's law $\frac{\sin\theta_1}{v_1} = \frac{\sin\theta_2}{v_2}$.
- Related rates: differentiate the equation that holds at all times, then substitute.
- $f(x) \approx f(a) + f'(a)(x - a)$ with error $\frac{f''(\xi)}{2}(x - a)^2$; relative errors multiply by the power.
- Newton's method $x_{n+1} = x_n - f(x_n)/f'(x_n)$ roughly doubles the correct digits per step near a simple root, but can cycle or diverge
  from a bad start.
- Constant acceleration $-g$ forces $s(t) = s_0 + v_0t - \frac{1}{2}gt^2$; with $g = 3.71$ m/s$^2$, things on Mars fall more slowly, fly higher and
  land softer than on Earth.

**Next:** [Chapter 8](08-The-Integral.md), the second great question of calculus: area, and what it means to add up infinitely many
infinitely thin pieces.

## Further reading

- Michael Spivak, *Calculus*, 4th edition (2008), chapters 11 and 12 (graphs, extrema, convexity).
- Richard Courant and Fritz John, *Introduction to Calculus and Analysis*, Volume I (1965): many physical applications, done carefully.
- Paul J. Nahin, *When Least Is Best* (2004): the history and mathematics of optimisation problems, including Fermat's principle and
  Snell's law.
- Tjalling J. Ypma, "Historical development of the Newton-Raphson method", *SIAM Review* 37 (1995).
- On this site: [Unit 6: Applications of derivatives and limits](../../uoft/MAT137/unit06.md) (MAT137).
- Topics shelf: [Curve sketching](../../topics/change/level-8/03-curve-sketching.md),
  [Optimisation](../../topics/change/level-8/04-optimization.md),
  [Related rates](../../topics/change/level-8/05-related-rates.md),
  [Velocity and acceleration](../../topics/change/level-7/06-velocity-acceleration.md).
- Other books here: [Geometry](../geometry/index.md) (similar triangles and the geometry behind the optimisation problems),
  [Algebra](../algebra/index.md) (solving equations, and why most cannot be solved by formula).
