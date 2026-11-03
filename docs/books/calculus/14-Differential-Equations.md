# 14. Differential equations

*Most laws of nature do not tell you where a thing is; they tell you how fast it changes. Money grows at a rate
proportional to itself; a hot cup cools at a rate proportional to how much hotter it is than the room; a planet
accelerates towards the Sun at a rate set by its distance. Each of these is an equation for an unknown function that
involves its derivatives: a differential equation. In this chapter you set up such equations from physical rules,
solve the main kinds exactly, draw and compute solutions when no formula exists, learn when a solution is
guaranteed to exist and be unique, and finish by deriving the rocket equation and Kepler's laws of planetary motion
from Newton's law of gravity, with Mars as the example.*

!!! abstract "In this chapter"
    **You will learn:**

    - how to turn a rule about rates into a differential equation: growth, cooling, falling with air resistance
    - to solve separable equations, and to spot the solutions the method loses or the ones that blow up
    - to solve every linear first-order equation with an integrating factor
    - to solve second-order linear equations with constant coefficients, and what damping and resonance mean
    - slope fields and Euler's method, and how the error shrinks with the step size
    - the existence and uniqueness theorem (Picard–Lindelöf), with Picard's iteration and a proof of uniqueness
    - the rocket equation, and Kepler's three laws derived from Newton's law of gravity

    **You need:** derivatives and integrals ([Chapters 5](05-The-Chain-Rule-and-Special-Functions.md) to
    [10](10-Techniques-of-Integration.md)), partial fractions ([Chapter 10](10-Techniques-of-Integration.md)),
    Taylor series and Euler's formula ([Chapter 13](13-Power-Series-and-Taylor.md)). Vectors as in
    [Geometry, Chapter 9](../geometry/09-Vectors.md) for 14.7. A gentler first look is the Topics lesson
    [differential equations](../../topics/change/level-8/07-differential-equations.md).

    **Levels:** 14.1 to 14.3 and 14.5 are intermediate; 14.4 is intermediate to advanced; 14.6 and 14.7 are advanced.

## 14.1 Modelling with differential equations

A **differential equation** is an equation that links an unknown function with one or more of its derivatives. When
the unknown is a function of one variable it is an **ordinary differential equation** (ODE); when it depends on
several variables and partial derivatives appear, it is a partial differential equation (Chapters 17 and 21 meet a
few). The **order** is the highest derivative that appears. A **solution** is a function that makes the equation
true on some interval.

Usually a differential equation has many solutions, and one extra fact, such as the value at the start, picks out
one of them. An equation together with such a starting value is an **initial value problem**.

Where do the equations come from? From a rule about a rate, read off as an equation. Three models recur throughout
science.

**Growth and decay.** If a quantity changes at a rate proportional to its size, then

$$
\frac{dy}{dt} = k y .
$$

Bacteria with plenty of food ($k > 0$), radioactive nuclei ($k < 0$), money at continuous interest: all obey this
law while it lasts. Every function $y = Ce^{kt}$ is a solution, since its derivative is $kCe^{kt} = ky$. Are there
others? Suppose $y$ is any solution and look at $y e^{-kt}$. Its derivative is
$y'e^{-kt} - kye^{-kt} = (ky - ky)e^{-kt} = 0$, so it is a constant $C$ (a function with zero derivative on an
interval is constant, [Chapter 6](06-The-Mean-Value-Theorem.md)). So **every** solution is $Ce^{kt}$, and the
initial value $y(0) = y_0$ forces $C = y_0$.

The same law describes the air of a planet. In an atmosphere at roughly constant temperature, pressure falls with
height $h$ at a rate proportional to the pressure itself, $dp/dh = -p/H$, so $p = p_0 e^{-h/H}$. The constant $H$ is
the **scale height**, the climb over which pressure falls by a factor of $e$. For Mars it is about 11 km, so 22 km up
the pressure is about $e^{-2} \approx 13.5\%$ of the surface value, and it halves every $11 \ln 2 \approx 7.6$ km.
(The real atmosphere's temperature changes with height, so this is a model, not an exact law.)

**Newton's law of cooling.** An object at temperature $T$ in surroundings at temperature $T_s$ cools at a rate
proportional to the difference:

$$
\frac{dT}{dt} = -k(T - T_s), \qquad k > 0 .
$$

Put $u = T - T_s$; then $u' = T' = -ku$, which is the decay law, so $u = u_0 e^{-kt}$ and
$T = T_s + (T_0 - T_s)e^{-kt}$.

**Example 1.** Coffee at 90 °C is left in a 20 °C room, and after 10 minutes it is at 60 °C. When will it reach 30
°C? Here $T = 20 + 70e^{-kt}$, and $60 = 20 + 70e^{-10k}$ gives $e^{-10k} = 4/7$, so $k = \ln(7/4)/10 \approx 0.0560$
per minute. For 30 °C, $70e^{-kt} = 10$, so $t = \ln 7/k \approx 34.8$ minutes. Check: $20 + 70 \cdot (4/7)^{3.477}
\approx 30.0$.

**Falling with air resistance.** Newton's second law says mass times acceleration equals total force. A falling body
of mass $m$ feels gravity $mg$ downwards and air resistance upwards. For small, slow objects the drag is roughly
proportional to the speed, $cv$; for most everyday objects it is closer to proportional to the square of the speed,
$bv^2$. With downwards as positive:

$$
m\frac{dv}{dt} = mg - cv \qquad\text{or}\qquad m\frac{dv}{dt} = mg - bv^2 .
$$

You can learn a lot before solving anything. The speed stops changing when the right side is zero: at the
**terminal velocity** $v_T = mg/c$ in the first model and $v_T = \sqrt{mg/b}$ in the second. For quadratic drag,
$b = \tfrac12\rho C_d A$, where $\rho$ is the density of the air, $A$ the area facing the flow, and $C_d$ a number
(the drag coefficient) that depends on the shape. So

$$
v_T = \sqrt{\frac{2mg}{\rho\, C_d A}} .
$$

**Falling on Mars.** Mars has surface gravity $g = 3.71$ m/s² against Earth's 9.81, but its air near the surface is
far thinner: about 0.020 kg/m³ against Earth's 1.225 at sea level (Mars's figure changes with season and place).
For the same object the ratio of terminal velocities is

$$
\frac{v_T(\text{Mars})}{v_T(\text{Earth})} = \sqrt{\frac{3.71/9.81}{0.020/1.225}} \approx 4.8 .
$$

So, although things weigh less on Mars, a dropped object ends up falling almost five times faster than on Earth.
This is why landers on Mars need parachutes *and* rockets or airbags: a parachute alone cannot slow a heavy craft
enough in such thin air.

## 14.2 Separable equations

A first-order equation is **separable** if the rate is a product of a function of $x$ and a function of $y$:

$$
\frac{dy}{dx} = g(x)\,h(y) .
$$

**The method.** Where $h(y) \neq 0$, divide, and integrate both sides with respect to $x$:

$$
\int \frac{1}{h(y)}\frac{dy}{dx}\,dx = \int g(x)\,dx, \quad\text{that is,}\quad \int\frac{dy}{h(y)} = \int g(x)\,dx .
$$

Why is this legitimate? Let $H$ be an antiderivative of $1/h$ and $G$ one of $g$. By the chain rule,
$\frac{d}{dx}H(y(x)) = \frac{y'(x)}{h(y(x))} = g(x) = G'(x)$, so $H(y(x)) - G(x)$ has derivative 0 and is a constant:
$H(y) = G(x) + C$. The shorthand "multiply by $dx$" is a memory aid for this chain-rule argument.

**Example 2.** $y' = xy$. Separate: $\int dy/y = \int x\,dx$, so $\ln|y| = x^2/2 + C$ and $|y| = e^C e^{x^2/2}$.
Removing the absolute value lets the constant have either sign: $y = Ae^{x^2/2}$. The division by $y$ assumed
$y \neq 0$; but $y = 0$ is also a solution, and it is the case $A = 0$. So all solutions are $y = Ae^{x^2/2}$.

**Example 3 (the logistic equation).** Real populations cannot grow exponentially forever. Pierre-François Verhulst
proposed in 1838 that the growth rate falls as the population $P$ approaches a carrying capacity $K$:

$$
\frac{dP}{dt} = rP\left(1 - \frac{P}{K}\right) .
$$

Separate and use partial fractions, $\dfrac{K}{P(K-P)} = \dfrac1P + \dfrac{1}{K-P}$:

$$
\int\left(\frac1P + \frac{1}{K-P}\right)dP = \int r\,dt, \qquad \ln\left|\frac{P}{K-P}\right| = rt + C .
$$

So $\dfrac{P}{K-P} = Be^{rt}$, and solving for $P$,

$$
P(t) = \frac{K}{1 + Ae^{-rt}}, \qquad A = \frac{K - P_0}{P_0} .
$$

Check: at $t = 0$ this is $K/(1 + A) = P_0$, and as $t \to \infty$, $P \to K$. The graph is the S-shaped logistic
curve: almost exponential at first, fastest at $P = K/2$, then levelling off. The constant solutions $P = 0$ and
$P = K$ were lost by the division and must be added back.

**Example 4 (blow-up).** $y' = y^2$, $y(0) = 1$. Separate: $-1/y = x + C$, and $y(0) = 1$ gives $C = -1$, so

$$
y = \frac{1}{1-x} .
$$

The solution exists only for $x < 1$; it runs off to infinity at $x = 1$, although the equation itself, $y' = y^2$,
looks harmless everywhere. Nonlinear equations can have solutions that **blow up in finite time**. Compare $y' = y$,
whose solutions grow but exist forever: squaring the rate makes the growth feed itself fast enough to reach infinity.

**Example 5 (non-uniqueness).** $y' = 3y^{2/3}$, $y(0) = 0$. Separating gives $y^{1/3} = x + C$, so $y = x^3$ is a
solution. But $y = 0$ is also a solution with the same starting value. In fact, for any $a \geq 0$, the function
that is 0 for $x \le a$ and $(x-a)^3$ for $x > a$ is a solution. One starting value, infinitely many futures. Section
14.6 explains what goes wrong: the rate $3y^{2/3}$ is too steep near $y = 0$.

**Example 6.** $y' = 2x(1+y^2)$, $y(0) = 0$. Separate: $\arctan y = x^2 + C$, $C = 0$, so $y = \tan(x^2)$. It blows
up when $x^2 = \pi/2$, at $x = \pm\sqrt{\pi/2} \approx \pm 1.25$.

## 14.3 Linear first-order equations

A first-order equation is **linear** if it has the form

$$
y' + p(x)\,y = q(x),
$$

where $p$ and $q$ are continuous on an interval. Linear means that $y$ and $y'$ appear only to the first power and
are not multiplied together. Such an equation need not be separable, but it can always be solved.

**The idea.** The left side looks almost like the result of the product rule. Multiply the equation by a positive
function $\mu(x)$ chosen so that $\mu y' + \mu p y$ is exactly $(\mu y)' = \mu y' + \mu' y$. That needs
$\mu' = \mu p$, a separable equation with solution

$$
\mu(x) = e^{\int p(x)\,dx},
$$

called an **integrating factor**. Then the equation becomes $(\mu y)' = \mu q$, so

$$
y = \frac{1}{\mu(x)}\left(\int \mu(x) q(x)\,dx + C\right) .
$$

**Theorem.** On an interval where $p$ and $q$ are continuous, every solution of $y' + py = q$ has this form, and for
each $x_0$ in the interval and each number $y_0$ exactly one solution has $y(x_0) = y_0$; it exists on the whole
interval.

*Proof.* Multiplying by $\mu > 0$ is reversible, so $y$ solves the equation exactly when $(\mu y)' = \mu q$, that is,
exactly when $\mu y$ is an antiderivative of $\mu q$. Antiderivatives on an interval differ by constants (Chapter 6),
so all solutions have the form above. Taking the antiderivative $\int_{x_0}^x \mu q$ (which exists because $\mu q$
is continuous, by the fundamental theorem, [Chapter 9](09-The-Fundamental-Theorem.md)), the condition $y(x_0) = y_0$
fixes $C = \mu(x_0)y_0$, and no other choice works. $\square$

Notice the contrast with 14.2: linear equations never blow up inside the interval and never have two solutions
through one point.

**Example 7.** $y' + y/x = x^2$ for $x > 0$. Here $p = 1/x$, $\mu = e^{\ln x} = x$, and $(xy)' = x^3$, so
$xy = x^4/4 + C$ and

$$
y = \frac{x^3}{4} + \frac{C}{x} .
$$

Check: $y' = \frac{3x^2}{4} - \frac{C}{x^2}$ and $y/x = \frac{x^2}{4} + \frac{C}{x^2}$; their sum is $x^2$.

**Example 8 (falling with linear drag).** $v' + (c/m)v = g$, $v(0) = 0$. Here $\mu = e^{ct/m}$ and

$$
(ve^{ct/m})' = ge^{ct/m}, \qquad ve^{ct/m} = \frac{mg}{c}e^{ct/m} + C .
$$

With $v(0) = 0$, $C = -mg/c$, and

$$
v(t) = \frac{mg}{c}\left(1 - e^{-ct/m}\right) .
$$

The speed rises towards the terminal velocity $mg/c$ found in 14.1, reaching about 63% of it ($1 - 1/e$) after a
time $m/c$ and 95% after about three times that.

**Example 9 (a mixing tank).** A tank holds 100 litres of pure water. Brine with 0.2 kg of salt per litre flows in
at 5 litres per minute, the tank is kept well stirred, and the mixture flows out at 5 litres per minute. How much
salt $Q(t)$ is in the tank? Salt comes in at $5 \times 0.2 = 1$ kg per minute and leaves at
$5 \times Q/100 = Q/20$ kg per minute, so

$$
Q' = 1 - \frac{Q}{20}, \qquad Q(0) = 0 .
$$

This is linear (and also separable). The solution is $Q = 20(1 - e^{-t/20})$. After 20 minutes the tank holds
$20(1 - 1/e) \approx 12.6$ kg; in the long run it approaches 20 kg, which is 0.2 kg per litre, the concentration
coming in, as common sense says it must.

## 14.4 Second-order linear equations with constant coefficients

*Level: intermediate to advanced.*

Newton's second law involves acceleration, a second derivative, so the most important equations of mechanics are of
second order. A weight of mass $m$ on a spring, displaced by $x$ from its rest position, feels a restoring force $-kx$
(Hooke's law) and perhaps a friction force $-c\,x'$ against its velocity:

$$
m x'' + c x' + k x = 0 .
$$

The same equation describes an electrical circuit with a coil, a resistor and a capacitor. It is a
**second-order linear equation with constant coefficients**. In general:

$$
a y'' + b y' + c y = 0, \qquad a \neq 0 .
$$

It is **homogeneous** (right side 0). Two facts make it tractable. First, **superposition**: if $y_1$ and $y_2$ are
solutions, so is $Ay_1 + By_2$ for any constants, because derivatives are linear. Second, exponentials reproduce
themselves: try $y = e^{rx}$. Then $y' = re^{rx}$ and $y'' = r^2 e^{rx}$, and the equation becomes
$(ar^2 + br + c)e^{rx} = 0$. So $e^{rx}$ is a solution exactly when $r$ is a root of the **characteristic equation**

$$
ar^2 + br + c = 0 .
$$

Three cases, by the sign of the discriminant $b^2 - 4ac$.

**Theorem.** Let $r_1, r_2$ be the roots of $ar^2 + br + c = 0$. Every solution of $ay'' + by' + cy = 0$ is

1. $y = Ae^{r_1 x} + Be^{r_2 x}$ if $r_1 \neq r_2$ are real;
2. $y = (A + Bx)e^{rx}$ if $r_1 = r_2 = r$;
3. $y = e^{\alpha x}(A\cos\beta x + B\sin\beta x)$ if $r = \alpha \pm i\beta$ with $\beta \neq 0$;

with real constants $A, B$. Two initial values $y(x_0)$ and $y'(x_0)$ fix $A$ and $B$ uniquely.

*Proof.* Divide by $a$; then $y'' - (r_1 + r_2)y' + r_1 r_2 y = 0$, because $r_1 + r_2 = -b/a$ and $r_1 r_2 = c/a$.
Write $D$ for "differentiate". The equation says $(D - r_1)(D - r_2)y = 0$: indeed, with $u = y' - r_2 y$,

$$
u' - r_1 u = y'' - r_2 y' - r_1 y' + r_1 r_2 y = y'' - (r_1 + r_2)y' + r_1 r_2 y .
$$

So $y$ is a solution exactly when $u = y' - r_2 y$ solves the first-order equation $u' = r_1 u$. By 14.1 (whose
argument works word for word with a complex constant $r_1$ and complex-valued functions, using $(e^{rx})' = re^{rx}$
from Chapter 13), $u = Ke^{r_1 x}$ for some constant $K$. Now $y' - r_2 y = Ke^{r_1 x}$ is linear first order;
multiply by $e^{-r_2 x}$:

$$
(ye^{-r_2 x})' = Ke^{(r_1 - r_2)x} .
$$

If $r_1 \ne r_2$, integrate: $ye^{-r_2 x} = \frac{K}{r_1 - r_2}e^{(r_1 - r_2)x} + B$, so $y = Ae^{r_1 x} + Be^{r_2 x}$.
If $r_1 = r_2 = r$, the right side is the constant $K$, so $ye^{-rx} = Kx + C$ and $y = (C + Kx)e^{rx}$, which is
the form claimed. In the complex case, $r_{1,2} = \alpha \pm i\beta$, the solutions are $Ce^{(\alpha + i\beta)x} + De^{(\alpha - i\beta)x}$;
by Euler's formula, $e^{(\alpha \pm i\beta)x} = e^{\alpha x}(\cos\beta x \pm i\sin\beta x)$, and the real solutions
are exactly $e^{\alpha x}(A\cos\beta x + B\sin\beta x)$. Finally, every step fixed its constant uniquely from the
values of $u$ and $y$ at $x_0$, which are determined by $y(x_0)$ and $y'(x_0)$. $\square$

This proof needs no general theory: it factors a second-order problem into two first-order ones.

**Example 10.** $y'' + 3y' + 2y = 0$, $y(0) = 1$, $y'(0) = 0$. Roots of $r^2 + 3r + 2 = (r+1)(r+2)$: $-1, -2$. So
$y = Ae^{-x} + Be^{-2x}$, with $A + B = 1$ and $-A - 2B = 0$, giving $A = 2$, $B = -1$:
$y = 2e^{-x} - e^{-2x}$. Check: $y'(0) = -2 + 2 = 0$.

**Example 11.** $y'' - 4y' + 4y = 0$, $y(0) = 1$, $y'(0) = 0$. Double root $r = 2$, so $y = (A + Bx)e^{2x}$;
$A = 1$, and $y'(0) = B + 2A = 0$ gives $B = -2$: $y = (1 - 2x)e^{2x}$.

**Example 12 (a damped spring).** $x'' + 2x' + 5x = 0$. Roots $r = -1 \pm 2i$, so
$x = e^{-t}(A\cos 2t + B\sin 2t)$: an oscillation with angular frequency 2 whose amplitude shrinks like $e^{-t}$.

### What the three cases mean for a spring

For $mx'' + cx' + kx = 0$ the roots are $\left(-c \pm \sqrt{c^2 - 4mk}\right)/(2m)$.

- **No friction**, $c = 0$: $x = A\cos\omega_0 t + B\sin\omega_0 t$ with $\omega_0 = \sqrt{k/m}$, the **natural
  frequency**. The weight oscillates forever with period $2\pi/\omega_0$.
- **Underdamped**, $c^2 < 4mk$: complex roots, a decaying oscillation (Example 12).
- **Critically damped**, $c^2 = 4mk$: a double root; the weight returns to rest as fast as possible without
  overshooting. Car shock absorbers are designed near this case.
- **Overdamped**, $c^2 > 4mk$: two negative real roots; the weight creeps back without oscillating (Example 10).

### Forcing and resonance

Now push the spring with a periodic force: $mx'' + cx' + kx = F\cos\omega t$. The equation is no longer homogeneous.
If $x_p$ is any one solution (a **particular solution**), then every solution is $x_p$ plus a solution of the
homogeneous equation, since the difference of two solutions solves the homogeneous one.

Take $m = 1$ and no friction first: $x'' + \omega_0^2 x = F\cos\omega t$. Guess $x_p = M\cos\omega t$:
$(-\omega^2 + \omega_0^2)M = F$, so for $\omega \neq \omega_0$,

$$
x_p = \frac{F}{\omega_0^2 - \omega^2}\cos\omega t .
$$

The closer the driving frequency $\omega$ is to the natural frequency $\omega_0$, the larger the response. At
$\omega = \omega_0$ the guess fails (it solves the homogeneous equation). Instead try $x_p = Mt\sin\omega_0 t$:

$$
x_p'' = 2M\omega_0\cos\omega_0 t - M\omega_0^2 t\sin\omega_0 t,
$$

so $x_p'' + \omega_0^2 x_p = 2M\omega_0\cos\omega_0 t$, and $M = F/(2\omega_0)$:

$$
x_p = \frac{F}{2\omega_0}\,t\sin\omega_0 t .
$$

The amplitude grows without bound, linearly in time. This is **resonance**: pushing at the natural frequency adds
energy on every cycle, as when you push a child on a swing in time with the swing.

With friction the response stays bounded. For $x'' + cx' + \omega_0^2 x = F\cos\omega t$ the steady oscillation has
amplitude

$$
\frac{F}{\sqrt{(\omega_0^2 - \omega^2)^2 + c^2\omega^2}},
$$

which peaks near $\omega = \omega_0$ (a two-line computation with $x_p = M\cos\omega t + N\sin\omega t$, left as
exercise 7). With $\omega_0 = 2$, $c = 0.4$, $F = 1$, the amplitude is $0.33$ at $\omega = 1$, $1.25$ at $\omega = 2$,
and $0.19$ at $\omega = 3$.

The 1940 collapse of the Tacoma Narrows bridge is often given as an example of resonance. Engineers now explain it
differently: the wind did not push at a fixed frequency; the bridge's own motion changed the forces of the wind on
it, a feedback called aeroelastic flutter. Resonance in the textbook sense is real and important (it is why
soldiers break step on some bridges, and how a radio picks one station), but that famous film shows something
subtler.

## 14.5 Slope fields and Euler's method

Most differential equations cannot be solved with formulas. Even then, you can see the solutions and compute them.

A first-order equation $y' = f(x, y)$ assigns a slope to every point of the plane: if a solution passes through
$(x, y)$, its tangent there has slope $f(x, y)$. Drawing a short segment with that slope at many points gives a
**slope field** (or direction field). Solutions are the curves that follow the segments everywhere.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 300" role="img" aria-label="Slope field of y prime equals x minus y on a grid, with short segments of the given slope. The straight line y equals x minus 1 is a solution, and the solution through (0, 1), y equals x minus 1 plus 2 e to the minus x, falls and then bends towards that line.">
  <line x1="30" y1="160" x2="390" y2="160" stroke="currentColor" stroke-width="1"/>
  <line x1="180" y1="280" x2="180" y2="10" stroke="currentColor" stroke-width="1"/>
  <line x1="22.8" y1="276.4" x2="37.2" y2="283.6" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="24.3" y1="244.3" x2="35.7" y2="255.7" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="25.6" y1="213.3" x2="34.4" y2="226.7" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="26.4" y1="182.8" x2="33.6" y2="197.2" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="27.0" y1="152.6" x2="33.0" y2="167.4" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="27.5" y1="122.4" x2="32.5" y2="137.6" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="27.8" y1="92.3" x2="32.2" y2="107.7" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="28.1" y1="62.2" x2="31.9" y2="77.8" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="28.3" y1="32.2" x2="31.7" y2="47.8" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="28.4" y1="2.2" x2="31.6" y2="17.8" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="52.0" y1="280.0" x2="68.0" y2="280.0" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="52.8" y1="246.4" x2="67.2" y2="253.6" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="54.3" y1="214.3" x2="65.7" y2="225.7" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="55.6" y1="183.3" x2="64.4" y2="196.7" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="56.4" y1="152.8" x2="63.6" y2="167.2" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="57.0" y1="122.6" x2="63.0" y2="137.4" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="57.5" y1="92.4" x2="62.5" y2="107.6" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="57.8" y1="62.3" x2="62.2" y2="77.7" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="58.1" y1="32.2" x2="61.9" y2="47.8" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="58.3" y1="2.2" x2="61.7" y2="17.8" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="82.8" y1="283.6" x2="97.2" y2="276.4" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="82.0" y1="250.0" x2="98.0" y2="250.0" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="82.8" y1="216.4" x2="97.2" y2="223.6" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="84.3" y1="184.3" x2="95.7" y2="195.7" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="85.6" y1="153.3" x2="94.4" y2="166.7" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="86.4" y1="122.8" x2="93.6" y2="137.2" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="87.0" y1="92.6" x2="93.0" y2="107.4" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="87.5" y1="62.4" x2="92.5" y2="77.6" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="87.8" y1="32.3" x2="92.2" y2="47.7" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="88.1" y1="2.2" x2="91.9" y2="17.8" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="114.3" y1="285.7" x2="125.7" y2="274.3" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="112.8" y1="253.6" x2="127.2" y2="246.4" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="112.0" y1="220.0" x2="128.0" y2="220.0" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="112.8" y1="186.4" x2="127.2" y2="193.6" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="114.3" y1="154.3" x2="125.7" y2="165.7" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="115.6" y1="123.3" x2="124.4" y2="136.7" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="116.4" y1="92.8" x2="123.6" y2="107.2" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="117.0" y1="62.6" x2="123.0" y2="77.4" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="117.5" y1="32.4" x2="122.5" y2="47.6" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="117.8" y1="2.3" x2="122.2" y2="17.7" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="145.6" y1="286.7" x2="154.4" y2="273.3" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="144.3" y1="255.7" x2="155.7" y2="244.3" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="142.8" y1="223.6" x2="157.2" y2="216.4" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="142.0" y1="190.0" x2="158.0" y2="190.0" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="142.8" y1="156.4" x2="157.2" y2="163.6" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="144.3" y1="124.3" x2="155.7" y2="135.7" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="145.6" y1="93.3" x2="154.4" y2="106.7" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="146.4" y1="62.8" x2="153.6" y2="77.2" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="147.0" y1="32.6" x2="153.0" y2="47.4" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="147.5" y1="2.4" x2="152.5" y2="17.6" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="176.4" y1="287.2" x2="183.6" y2="272.8" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="175.6" y1="256.7" x2="184.4" y2="243.3" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="174.3" y1="225.7" x2="185.7" y2="214.3" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="172.8" y1="193.6" x2="187.2" y2="186.4" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="172.0" y1="160.0" x2="188.0" y2="160.0" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="172.8" y1="126.4" x2="187.2" y2="133.6" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="174.3" y1="94.3" x2="185.7" y2="105.7" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="175.6" y1="63.3" x2="184.4" y2="76.7" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="176.4" y1="32.8" x2="183.6" y2="47.2" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="177.0" y1="2.6" x2="183.0" y2="17.4" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="207.0" y1="287.4" x2="213.0" y2="272.6" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="206.4" y1="257.2" x2="213.6" y2="242.8" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="205.6" y1="226.7" x2="214.4" y2="213.3" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="204.3" y1="195.7" x2="215.7" y2="184.3" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="202.8" y1="163.6" x2="217.2" y2="156.4" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="202.0" y1="130.0" x2="218.0" y2="130.0" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="202.8" y1="96.4" x2="217.2" y2="103.6" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="204.3" y1="64.3" x2="215.7" y2="75.7" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="205.6" y1="33.3" x2="214.4" y2="46.7" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="206.4" y1="2.8" x2="213.6" y2="17.2" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="237.5" y1="287.6" x2="242.5" y2="272.4" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="237.0" y1="257.4" x2="243.0" y2="242.6" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="236.4" y1="227.2" x2="243.6" y2="212.8" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="235.6" y1="196.7" x2="244.4" y2="183.3" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="234.3" y1="165.7" x2="245.7" y2="154.3" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="232.8" y1="133.6" x2="247.2" y2="126.4" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="232.0" y1="100.0" x2="248.0" y2="100.0" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="232.8" y1="66.4" x2="247.2" y2="73.6" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="234.3" y1="34.3" x2="245.7" y2="45.7" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="235.6" y1="3.3" x2="244.4" y2="16.7" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="267.8" y1="287.7" x2="272.2" y2="272.3" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="267.5" y1="257.6" x2="272.5" y2="242.4" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="267.0" y1="227.4" x2="273.0" y2="212.6" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="266.4" y1="197.2" x2="273.6" y2="182.8" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="265.6" y1="166.7" x2="274.4" y2="153.3" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="264.3" y1="135.7" x2="275.7" y2="124.3" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="262.8" y1="103.6" x2="277.2" y2="96.4" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="262.0" y1="70.0" x2="278.0" y2="70.0" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="262.8" y1="36.4" x2="277.2" y2="43.6" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="264.3" y1="4.3" x2="275.7" y2="15.7" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="298.1" y1="287.8" x2="301.9" y2="272.2" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="297.8" y1="257.7" x2="302.2" y2="242.3" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="297.5" y1="227.6" x2="302.5" y2="212.4" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="297.0" y1="197.4" x2="303.0" y2="182.6" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="296.4" y1="167.2" x2="303.6" y2="152.8" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="295.6" y1="136.7" x2="304.4" y2="123.3" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="294.3" y1="105.7" x2="305.7" y2="94.3" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="292.8" y1="73.6" x2="307.2" y2="66.4" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="292.0" y1="40.0" x2="308.0" y2="40.0" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="292.8" y1="6.4" x2="307.2" y2="13.6" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="328.3" y1="287.8" x2="331.7" y2="272.2" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="328.1" y1="257.8" x2="331.9" y2="242.2" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="327.8" y1="227.7" x2="332.2" y2="212.3" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="327.5" y1="197.6" x2="332.5" y2="182.4" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="327.0" y1="167.4" x2="333.0" y2="152.6" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="326.4" y1="137.2" x2="333.6" y2="122.8" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="325.6" y1="106.7" x2="334.4" y2="93.3" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="324.3" y1="75.7" x2="335.7" y2="64.3" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="322.8" y1="43.6" x2="337.2" y2="36.4" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="322.0" y1="10.0" x2="338.0" y2="10.0" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="358.4" y1="287.8" x2="361.6" y2="272.2" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="358.3" y1="257.8" x2="361.7" y2="242.2" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="358.1" y1="227.8" x2="361.9" y2="212.2" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="357.8" y1="197.7" x2="362.2" y2="182.3" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="357.5" y1="167.6" x2="362.5" y2="152.4" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="357.0" y1="137.4" x2="363.0" y2="122.6" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="356.4" y1="107.2" x2="363.6" y2="92.8" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="355.6" y1="76.7" x2="364.4" y2="63.3" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="354.3" y1="45.7" x2="365.7" y2="34.3" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="352.8" y1="13.6" x2="367.2" y2="6.4" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="388.6" y1="287.9" x2="391.4" y2="272.1" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="388.4" y1="257.8" x2="391.6" y2="242.2" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="388.3" y1="227.8" x2="391.7" y2="212.2" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="388.1" y1="197.8" x2="391.9" y2="182.2" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="387.8" y1="167.7" x2="392.2" y2="152.3" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="387.5" y1="137.6" x2="392.5" y2="122.4" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="387.0" y1="107.4" x2="393.0" y2="92.6" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="386.4" y1="77.2" x2="393.6" y2="62.8" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="385.6" y1="46.7" x2="394.4" y2="33.3" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="384.3" y1="15.7" x2="395.7" y2="4.3" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="120" y1="280" x2="390" y2="10" stroke="#7ccf9a" stroke-width="2.5"/>
  <polyline points="138.0,20.3 139.3,24.1 140.5,27.8 141.8,31.3 143.0,34.8 144.3,38.1 145.6,41.4 146.8,44.6 148.1,47.6 149.3,50.6 150.6,53.5 151.9,56.3 153.1,59.1 154.4,61.7 155.6,64.3 156.9,66.7 158.2,69.2 159.4,71.5 160.7,73.7 161.9,75.9 163.2,78.0 164.5,80.1 165.7,82.0 167.0,83.9 168.2,85.8 169.5,87.6 170.8,89.3 172.0,90.9 173.3,92.5 174.5,94.0 175.8,95.5 177.1,96.9 178.3,98.3 179.6,99.6 180.8,100.8 182.1,102.0 183.4,103.2 184.6,104.3 185.9,105.3 187.1,106.3 188.4,107.3 189.7,108.2 190.9,109.0 192.2,109.9 193.4,110.6 194.7,111.4 196.0,112.1 197.2,112.7 198.5,113.3 199.7,113.9 201.0,114.4 202.3,114.9 203.5,115.4 204.8,115.8 206.0,116.2 207.3,116.6 208.6,116.9 209.8,117.2 211.1,117.4 212.3,117.7 213.6,117.9 214.9,118.0 216.1,118.2 217.4,118.3 218.6,118.3 219.9,118.4 221.2,118.4 222.4,118.4 223.7,118.4 224.9,118.3 226.2,118.2 227.5,118.1 228.7,118.0 230.0,117.9 231.2,117.7 232.5,117.5 233.8,117.3 235.0,117.0 236.3,116.8 237.5,116.5 238.8,116.2 240.1,115.8 241.3,115.5 242.6,115.1 243.8,114.8 245.1,114.4 246.4,113.9 247.6,113.5 248.9,113.0 250.1,112.6 251.4,112.1 252.7,111.6 253.9,111.1 255.2,110.5 256.4,110.0 257.7,109.4 259.0,108.9 260.2,108.3 261.5,107.7 262.7,107.0 264.0,106.4 265.3,105.8 266.5,105.1 267.8,104.4 269.0,103.8 270.3,103.1 271.6,102.4 272.8,101.6 274.1,100.9 275.3,100.2 276.6,99.4 277.9,98.7 279.1,97.9 280.4,97.1 281.6,96.3 282.9,95.5 284.2,94.7 285.4,93.9 286.7,93.0 287.9,92.2 289.2,91.4 290.5,90.5 291.7,89.6 293.0,88.8 294.2,87.9 295.5,87.0 296.8,86.1 298.0,85.2 299.3,84.3 300.5,83.4 301.8,82.4 303.1,81.5 304.3,80.6 305.6,79.6 306.8,78.7 308.1,77.7 309.4,76.7 310.6,75.8 311.9,74.8 313.1,73.8 314.4,72.8 315.7,71.8 316.9,70.8 318.2,69.8 319.4,68.8 320.7,67.8 322.0,66.8 323.2,65.8 324.5,64.7 325.7,63.7 327.0,62.6 328.3,61.6 329.5,60.6 330.8,59.5 332.0,58.4 333.3,57.4 334.6,56.3 335.8,55.2 337.1,54.2 338.3,53.1 339.6,52.0 340.9,50.9 342.1,49.8 343.4,48.7 344.6,47.6 345.9,46.5 347.2,45.4 348.4,44.3 349.7,43.2 350.9,42.1 352.2,41.0 353.5,39.9 354.7,38.8 356.0,37.6 357.2,36.5 358.5,35.4 359.8,34.2 361.0,33.1 362.3,32.0 363.5,30.8 364.8,29.7 366.1,28.5 367.3,27.4 368.6,26.2 369.8,25.1 371.1,23.9 372.4,22.8 373.6,21.6 374.9,20.5 376.1,19.3 377.4,18.1 378.7,17.0 379.9,15.8 381.2,14.6 382.4,13.4 383.7,12.3 385.0,11.1" fill="none" stroke="#eea66f" stroke-width="3" stroke-linejoin="round"/>
  <circle cx="180" cy="100" r="4" fill="currentColor"/>
  <text x="188" y="92" font-size="12" fill="currentColor">(0, 1)</text>
  <text x="312" y="130" font-size="12" fill="currentColor">y = x − 1</text>
  <text x="386" y="174" text-anchor="end" font-size="12" fill="currentColor">x</text>
  <text x="186" y="22" font-size="12" fill="currentColor">y</text>
</svg>
</div>

The picture shows $y' = x - y$. Along the line $y = x - 1$ the slope is $x - (x - 1) = 1$, the slope of the line
itself, so that line is a solution. Every other solution approaches it: the equation is linear, and its general
solution is $y = x - 1 + Ce^{-x}$ (exercise 4). The orange curve is the one through $(0, 1)$, with $C = 2$.

**Euler's method** turns the picture into arithmetic. Start at $(x_0, y_0)$, choose a small **step** $h$, and walk
along the slope:

$$
x_{n+1} = x_n + h, \qquad y_{n+1} = y_n + h\,f(x_n, y_n) .
$$

Each step replaces the curve by its tangent line over a short stretch, the linear approximation of
[Chapter 7](07-Applications-of-Derivatives.md). Leonhard Euler described it in his *Institutionum calculi
integralis* (1768).

**Example 13.** $y' = y$, $y(0) = 1$, whose solution is $e^x$. Each step multiplies $y$ by $1 + h$. With $h = 0.1$, ten
steps reach $x = 1$ with $y_{10} = 1.1^{10} = 2.5937$, against $e = 2.7183$: error $0.1245$. With $h = 0.05$, twenty
steps give $1.05^{20} = 2.6533$, error $0.0650$. Halving the step roughly halves the error. (And as $h \to 0$,
$(1 + 1/n)^n \to e$, which is one way to define $e$.)

**Example 14.** $y' = x - y$, $y(0) = 1$, $h = 0.5$. The steps are

| $x_n$ | $y_n$ | slope $x_n - y_n$ | exact $x - 1 + 2e^{-x}$ |
| --- | --- | --- | --- |
| 0 | 1 | $-1$ | 1 |
| 0.5 | 0.5 | 0 | 0.713 |
| 1.0 | 0.5 | 0.5 | 0.736 |
| 1.5 | 0.75 | 0.75 | 0.946 |
| 2.0 | 1.125 | | 1.271 |

The method follows the shape but lags behind: with such a big step it overshoots the dip.

**How big is the error?** Over one step, Taylor's theorem says the true solution satisfies
$y(x + h) = y(x) + hy'(x) + \tfrac12 h^2 y''(c)$, so each step makes an error of order $h^2$ (the **local error**).
Reaching a fixed $x$ takes about $1/h$ steps, so the errors add up to something of order $h$, provided they do not
grow too much as they are carried along (which a Lipschitz condition, 14.6, controls). Euler's method is therefore
**first order**: the global error is at most a constant times $h$. Better methods use several slopes per step and do
much better: the classical fourth-order Runge–Kutta method (Carl Runge 1895, Wilhelm Kutta 1901) has error of order
$h^4$, so halving the step divides the error by about 16.

**Try it in Python.**

```python
import math

def euler(f, x, y, h, steps):
    for _ in range(steps):
        y += h * f(x, y)
        x += h
    return y

for n in (10, 100, 1000):
    approx = euler(lambda x, y: y, 0.0, 1.0, 1.0 / n, n)
    print(n, approx, math.e - approx)
```

The error column shrinks by a factor of about 10 each time $n$ grows tenfold: first order, as promised.

## 14.6 Existence and uniqueness

*Level: advanced.*

Examples 4 and 5 were warnings: a solution may stop existing, and there may be more than one. Physics needs to know
that the future is determined by the present. When is it?

A function $f(x, y)$ is **Lipschitz in $y$** on a region if there is a constant $L$ with

$$
|f(x, y_1) - f(x, y_2)| \le L|y_1 - y_2|
$$

for all points $(x, y_1), (x, y_2)$ of the region. It says the rate cannot change faster than proportionally when
$y$ changes. If $\partial f/\partial y$ exists and $|\partial f/\partial y| \le L$ on a region that contains the
vertical segment between the two points, the mean value theorem gives this at once. So $f = x - y$ ($L = 1$) and
$f = y^2$ on $|y| \le 10$ ($L = 20$) are Lipschitz, but $f = 3y^{2/3}$ is not near $y = 0$: there
$|f(y) - f(0)|/|y| = 3|y|^{-1/3}$, which is unbounded.

**Theorem (Picard–Lindelöf).** Suppose $f$ is continuous on a rectangle $|x - x_0| \le a$, $|y - y_0| \le b$, and
Lipschitz in $y$ there. Then the initial value problem $y' = f(x, y)$, $y(x_0) = y_0$ has exactly one solution on some
interval $|x - x_0| \le \delta$ with $\delta > 0$.

This explains the examples. In Example 5, $f = 3y^{2/3}$ is not Lipschitz at $y = 0$, and uniqueness fails. In
Example 4, $f = y^2$ is Lipschitz on every bounded rectangle, so solutions are unique, but the theorem only promises a
solution on *some* interval: the larger the solution gets, the larger the constant $L$ needed, and the solution can
escape every rectangle in finite time.

**The idea of the proof: Picard's iteration.** By the fundamental theorem, $y$ solves the initial value problem
exactly when it solves the **integral equation**

$$
y(x) = y_0 + \int_{x_0}^x f(t, y(t))\,dt .
$$

Start with a guess, the constant $y_0(x) = y_0$, and improve it again and again:

$$
y_{n+1}(x) = y_0 + \int_{x_0}^{x} f(t, y_n(t))\,dt .
$$

**Example 15.** $y' = y$, $y(0) = 1$. Then $y_0 = 1$, $y_1 = 1 + \int_0^x 1\,dt = 1 + x$,
$y_2 = 1 + \int_0^x (1 + t)\,dt = 1 + x + x^2/2$, and in general $y_n = \sum_{k=0}^{n}x^k/k!$. The iterates are the
Taylor polynomials of $e^x$, and they converge to the solution.

In general, the Lipschitz condition gives, for $|x - x_0| \le \delta$,

$$
|y_{n+1}(x) - y_n(x)| \le L\left|\int_{x_0}^{x}|y_n(t) - y_{n-1}(t)|\,dt\right|,
$$

and by induction $|y_{n+1} - y_n| \le M L^n |x - x_0|^{n+1}/(n+1)!$, where $M$ bounds $|f|$. These bounds are the
terms of the exponential series, so the iterates converge (uniformly, Chapter 19) to a function that solves the
integral equation. The cleanest way to organise this is the **contraction mapping theorem**, proved in
[Chapter 20](20-Metric-Spaces-and-Topology-of-R.md), where Picard's theorem is proved in full. The choice of $\delta$
(small enough that $M\delta \le b$ keeps the iterates inside the rectangle) is part of that proof.

**Uniqueness, proved.** The uniqueness half has a short proof. Suppose $y$ and $z$ both solve the problem on an
interval $[x_0, x_0 + \delta]$ and stay in the rectangle. Let $w = |y - z|$. Subtracting the two integral equations
and using the Lipschitz condition,

$$
w(x) \le \int_{x_0}^{x}|f(t, y(t)) - f(t, z(t))|\,dt \le L\int_{x_0}^{x}w(t)\,dt .
$$

Put $W(x) = \int_{x_0}^{x}w(t)\,dt$. Then $W \ge 0$, $W(x_0) = 0$, and the inequality says $W' \le LW$. So

$$
\left(e^{-L(x - x_0)}W(x)\right)' = e^{-L(x - x_0)}\left(W' - LW\right) \le 0,
$$

and $e^{-L(x-x_0)}W$ is a non-increasing function that starts at 0 and is never negative. It must be 0 throughout, so
$W = 0$, so $w = W' \le LW = 0$, and $y = z$. The same argument works to the left of $x_0$. $\square$ (This is a
special case of **Grönwall's inequality**.)

**Existence without uniqueness.** Giuseppe Peano proved (in a paper of 1890, after a first attempt in 1886) that continuity of $f$ alone guarantees at least one
solution near $x_0$. Example 5 shows that uniqueness then may fail. Émile Picard published his method of successive
approximations in 1890 and Ernst Lindelöf refined it in 1894.

One more consequence matters for 14.4: the theorem applies to *systems* of first-order equations (with $y$ a vector
and $|\cdot|$ its length), and a second-order equation $y'' = F(x, y, y')$ is the system $y' = v$, $v' = F(x, y, v)$.
So a solution of a nice second-order equation is fixed by $y(x_0)$ and $y'(x_0)$, the position and velocity at one
moment. That is the mathematical content of the determinism of Newton's mechanics.

## 14.7 The rocket equation and the orbits of planets

*Level: advanced.*

### The rocket equation

A rocket moves by throwing mass backwards. Let the rocket (with its remaining fuel) have mass $m(t)$ and speed $v(t)$,
far from any gravity, and let the exhaust leave at speed $u$ relative to the rocket. In a short time $dt$ the rocket
throws out mass $-dm > 0$ (its mass decreases, so $dm < 0$). Momentum is conserved: before, it is $mv$; after, the
rocket has $(m + dm)(v + dv)$ and the exhaust has $(-dm)(v - u)$. Setting these equal and dropping the product
$dm\,dv$ of two small quantities:

$$
mv = mv + m\,dv + v\,dm - v\,dm + u\,dm, \qquad\text{so}\qquad m\,\frac{dv}{dt} = -u\frac{dm}{dt} .
$$

This is separable: $dv = -u\,dm/m$. Integrating from the start (mass $m_0$) to burnout (mass $m_1$):

$$
\Delta v = u\ln\frac{m_0}{m_1} .
$$

This is **Tsiolkovsky's rocket equation**, published by Konstantin Tsiolkovsky in 1903 (it had appeared earlier, and others found it
independently). Its message is harsh: the speed gained grows only like the *logarithm* of the mass ratio. To double
$\Delta v$ you must square the mass ratio.

**Example 16.** A good hydrogen–oxygen engine has an exhaust speed of roughly 4.4 km/s. Reaching low Earth orbit
needs a $\Delta v$ of roughly 9 to 10 km/s once losses to gravity and drag are counted; with 9.4 km/s,
$m_0/m_1 = e^{9.4/4.4} \approx 8.5$. So about 88% of the rocket at lift-off must be propellant, which is why rockets
are built in stages, dropping empty tanks as they go.

### Kepler's laws from Newton's law

Johannes Kepler, working from Tycho Brahe's observations of Mars, published his first two laws in *Astronomia Nova*
(1609) and the third in *Harmonices Mundi* (1619):

1. Each planet moves on an ellipse with the Sun at one focus.
2. The line from the Sun to the planet sweeps out equal areas in equal times.
3. The square of the period is proportional to the cube of the semi-major axis (half the long axis of the ellipse).

Isaac Newton showed in the *Principia* (1687) that all three follow from his law of motion and an inverse-square
attraction. Here is the outline in modern notation. Put the Sun (assumed fixed, since it is far heavier) at the
origin and let $\mathbf r(t)$ be the planet's position, $r = |\mathbf r|$, and $\mu = GM$ for the Sun's mass $M$.
Newton's laws give

$$
\mathbf r'' = -\frac{\mu}{r^3}\,\mathbf r .
$$

**Second law.** Let $\mathbf h = \mathbf r \times \mathbf r'$ (the angular momentum per unit mass). Then

$$
\mathbf h' = \mathbf r' \times \mathbf r' + \mathbf r \times \mathbf r'' = \mathbf 0 + \mathbf r \times\left(-\frac{\mu}{r^3}\mathbf r\right) = \mathbf 0,
$$

because the cross product of parallel vectors is zero. So $\mathbf h$ is constant. Its direction is fixed, so the
motion stays in the plane through the Sun perpendicular to $\mathbf h$. In polar coordinates $(r, \theta)$ in that
plane, $|\mathbf h| = r^2\theta'$, a constant $h$. The area swept as the angle grows by $d\theta$ is a thin triangle of
area $\tfrac12 r^2 d\theta$, so the rate of sweeping area is

$$
\frac{dA}{dt} = \frac12 r^2\frac{d\theta}{dt} = \frac{h}{2},
$$

a constant. That is the second law, and it holds for *any* force directed towards the Sun.

**First law.** In polar coordinates the radial part of the acceleration is $r'' - r\theta'^2$, so

$$
r'' - r\theta'^2 = -\frac{\mu}{r^2} .
$$

The trick is to use $u = 1/r$ as the unknown and $\theta$ as the
variable. Since $\theta' = hu^2$, the chain rule gives $r' = -\frac{1}{u^2}\frac{du}{d\theta}\theta' = -h\frac{du}{d\theta}$,
and again $r'' = -h\frac{d^2u}{d\theta^2}\theta' = -h^2u^2\frac{d^2u}{d\theta^2}$. Substituting, and using
$r\theta'^2 = \frac1u h^2u^4 = h^2u^3$:

$$
-h^2u^2\frac{d^2u}{d\theta^2} - h^2u^3 = -\mu u^2, \qquad\text{that is,}\qquad \frac{d^2u}{d\theta^2} + u = \frac{\mu}{h^2} .
$$

This is the forced spring equation of 14.4 with a constant force. A particular solution is the constant $\mu/h^2$,
and the homogeneous solutions are $A\cos(\theta - \theta_0)$. So $u = \frac{\mu}{h^2}\left(1 + e\cos(\theta - \theta_0)\right)$
for a constant $e \ge 0$, and

$$
r = \frac{p}{1 + e\cos(\theta - \theta_0)}, \qquad p = \frac{h^2}{\mu} .
$$

This is the polar equation of a conic section with a focus at the origin and **eccentricity** $e$
([Geometry, Chapter 8](../geometry/08-Coordinate-Geometry.md)): a circle if $e = 0$, an ellipse if $e < 1$, a
parabola if $e = 1$, a hyperbola if $e > 1$. Bound planets have $e < 1$: the first law.

**Third law.** For an ellipse with semi-axes $a$ and $b$, $p = a(1 - e^2)$ and $b^2 = a^2(1 - e^2) = ap$. The whole
area $\pi ab$ is swept in one period $T$ at the rate $h/2$, so $T = 2\pi ab/h$, and

$$
T^2 = \frac{4\pi^2a^2b^2}{h^2} = \frac{4\pi^2a^2\cdot ap}{\mu p} = \frac{4\pi^2}{\mu}a^3 .
$$

The constant $4\pi^2/\mu$ is the same for every planet: the third law. (The fixed-Sun assumption makes it very
slightly wrong; with both bodies moving, $\mu$ becomes $G(M + m)$.)

**Mars's orbit, honestly.** Measured in astronomical units (AU, the mean Earth–Sun distance) and years, the third
law reads $T^2 = a^3$. Mars has $a \approx 1.5237$ AU, so $T \approx 1.5237^{1.5} \approx 1.881$ years
$\approx 687$ days, which matches the observed period of 686.98 days. Its eccentricity is about $0.093$, much larger
than Earth's $0.017$; that is why Kepler, using Mars, could see that orbits are not circles. Its distance from the
Sun ranges from $a(1 - e) \approx 1.381$ AU to $a(1 + e) \approx 1.666$ AU, so at its closest it receives about
$(1.666/1.381)^2 \approx 1.45$ times the sunlight it gets at its farthest, and by the second law it moves faster near
the Sun: about 26.5 km/s at perihelion against 22.0 km/s at aphelion. This is why Martian seasons have unequal
lengths.

**Going to Mars.** The cheapest simple route between two circular orbits is a **Hohmann transfer** (Walter Hohmann,
1925): half of an ellipse that touches Earth's orbit at perihelion and Mars's at aphelion. Treating both orbits as
circles of radius 1 and 1.524 AU, the transfer ellipse has $a = 1.262$ AU, so the trip takes half its period,
$\tfrac12 \cdot 1.262^{1.5}$ years $\approx 259$ days. Relative to the Sun, the spacecraft must speed up by about 2.9
km/s on leaving Earth's orbit and by about 2.6 km/s on arriving at Mars's (from the formula
$v^2 = \mu(2/r - 1/a)$, called the vis-viva equation, which follows from conservation of energy). Those are the
heliocentric numbers only: escaping Earth's gravity and being captured by Mars's change the real budget (from low
Earth orbit the departure burn is roughly 3.6 km/s), and a transfer works only when the planets are lined up, which
happens about every 26 months.

## Check yourself

??? question "1. A sample of a radioactive isotope loses 10% of its mass in 3 days. What is its half-life?"

    $m = m_0e^{-kt}$ with $e^{-3k} = 0.9$, so $k = \ln(10/9)/3 \approx 0.0351$ per day. Half-life
    $t = \ln 2/k = 3\ln2/\ln(10/9) \approx 19.7$ days.

??? question "2. Solve $y' = y\cos x$ with $y(0) = 2$."

    Separate: $\ln|y| = \sin x + C$, so $y = Ae^{\sin x}$; $y(0) = A = 2$. Answer $y = 2e^{\sin x}$.
    Check: $y' = 2e^{\sin x}\cos x = y\cos x$.

??? question "3. A logistic population has $K = 1000$, $r = 0.5$ per year and $P_0 = 100$. When does it reach 500?"

    $A = (1000 - 100)/100 = 9$, and $P = 1000/(1 + 9e^{-0.5t})$. $P = 500$ when $9e^{-0.5t} = 1$, so
    $t = 2\ln 9 \approx 4.39$ years. (Half the capacity is also where growth is fastest.)

??? question "4. Solve $y' = x - y$ with an integrating factor, and find the solution through $(0, 1)$."

    $y' + y = x$, $\mu = e^x$, $(ye^x)' = xe^x$, so $ye^x = (x - 1)e^x + C$ (integration by parts) and
    $y = x - 1 + Ce^{-x}$. $y(0) = -1 + C = 1$ gives $C = 2$.

??? question "5. Solve $y'' + 4y = 0$ with $y(0) = 1$, $y'(0) = 6$, and give the amplitude of the oscillation."

    $r = \pm 2i$, so $y = A\cos2x + B\sin2x$; $A = 1$, $2B = 6$, $B = 3$. Amplitude $\sqrt{1^2 + 3^2} = \sqrt{10}$,
    since $A\cos2x + B\sin2x = \sqrt{A^2 + B^2}\cos(2x - \varphi)$ for a suitable angle $\varphi$.

??? question "6. Find all solutions of $y'' - y' - 6y = e^{x}$."

    Homogeneous: $r^2 - r - 6 = (r - 3)(r + 2)$, so $Ae^{3x} + Be^{-2x}$. Particular: try $Me^x$:
    $(1 - 1 - 6)M = 1$, $M = -\tfrac16$. All solutions: $y = Ae^{3x} + Be^{-2x} - \tfrac16 e^x$.

??? question "7. Find the steady-state amplitude of $x'' + cx' + \omega_0^2x = F\cos\omega t$."

    Try $x = M\cos\omega t + N\sin\omega t$. Comparing $\cos$ and $\sin$ terms:
    $(\omega_0^2 - \omega^2)M + c\omega N = F$ and $-c\omega M + (\omega_0^2 - \omega^2)N = 0$.
    Squaring and adding, $\left((\omega_0^2 - \omega^2)^2 + c^2\omega^2\right)(M^2 + N^2) = F^2$, so the amplitude
    $\sqrt{M^2 + N^2} = F/\sqrt{(\omega_0^2 - \omega^2)^2 + c^2\omega^2}$.

??? question "8. Do two steps of Euler's method with $h = 0.1$ for $y' = x + y^2$, $y(0) = 1$."

    Step 1: slope $0 + 1 = 1$, $y_1 = 1 + 0.1 = 1.1$ at $x = 0.1$. Step 2: slope $0.1 + 1.21 = 1.31$,
    $y_2 = 1.1 + 0.131 = 1.231$ at $x = 0.2$.

??? question "9. Compute three Picard iterates for $y' = 2xy$, $y(0) = 1$, and guess the solution."

    $y_0 = 1$; $y_1 = 1 + \int_0^x 2t\,dt = 1 + x^2$; $y_2 = 1 + \int_0^x 2t(1 + t^2)dt = 1 + x^2 + x^4/2$;
    $y_3 = 1 + x^2 + x^4/2 + x^6/6$. These are partial sums of $\sum (x^2)^k/k! = e^{x^2}$, the solution (by
    separation, as in Example 2).

??? question "10. Show that $y' = \sqrt{|y|}$, $y(0) = 0$, has more than one solution, and say which hypothesis of Picard–Lindelöf fails."

    $y = 0$ is a solution, and so is $y = x^2/4$ for $x \ge 0$ (and 0 for $x < 0$): its derivative is $x/2 = \sqrt{x^2/4}$.
    The function $\sqrt{|y|}$ is continuous but not Lipschitz near $y = 0$, since $\sqrt{|y|}/|y| = |y|^{-1/2}$ is
    unbounded.

??? question "11. A rocket stage with exhaust speed 3 km/s starts at 100 tonnes and burns 80 tonnes of propellant. What $\Delta v$ does it give? What if it were two equal stages of 50 tonnes, each burning 40 tonnes and dropping its empty 10-tonne shell?"

    One stage: $3\ln(100/20) = 3\ln5 \approx 4.83$ km/s. Two stages: first, $100 \to 60$ tonnes,
    $3\ln(100/60) \approx 1.53$; drop 10 tonnes, then $50 \to 10$, $3\ln5 \approx 4.83$. Total about 6.36 km/s.
    Throwing away dead mass makes the difference.

??? question "12. Use Kepler's third law to find the semi-major axis of an orbit around Mars whose period is one rotation of Mars (its sidereal day, about 88 643 s). Mars has $\mu = GM \approx 4.283 \times 10^{13}$ m³/s²."

    $a^3 = \mu T^2/(4\pi^2) = 4.283 \times 10^{13} \times 88643^2/39.48 \approx 8.52 \times 10^{21}$ m³, so
    $a \approx 2.04 \times 10^7$ m $= 20\,400$ km from Mars's centre, about 17 000 km above the surface (Mars's mean
    radius is about 3390 km). That is the areostationary orbit, the Martian version of a geostationary one.

## What you learned

- A differential equation is a rule about rates; with a starting value it usually picks out one function.
- Separable equations are solved by integrating both sides (the chain rule justifies it); watch for lost constant
  solutions, blow-up in finite time and non-uniqueness.
- Every linear first-order equation is solved by an integrating factor $e^{\int p}$, and its solutions exist and are
  unique on the whole interval.
- $ay'' + by' + cy = 0$ is solved through the characteristic equation; complex roots mean oscillation, and forcing at
  the natural frequency means resonance.
- Slope fields show solutions; Euler's method computes them with error proportional to the step.
- Picard–Lindelöf: a Lipschitz rate gives a unique local solution; Picard's iteration builds it, and a Grönwall
  argument proves uniqueness.
- Momentum gives the rocket equation $\Delta v = u\ln(m_0/m_1)$; Newton's inverse-square law gives Kepler's three laws,
  and Mars's period, 687 days, falls out of $T^2 = a^3$.

**Next:** [Chapter 15](15-Functions-of-Several-Variables.md), calculus for functions of several variables: partial
derivatives, gradients and how to find the best point on a surface.

## Further reading

- W. E. Boyce and R. C. DiPrima, *Elementary Differential Equations and Boundary Value Problems* (first edition
  1965; many later editions).
- V. I. Arnold, *Ordinary Differential Equations* (Russian 1971; English translations 1973 and 1992): a geometric
  view, with existence and uniqueness done carefully.
- G. F. Simmons, *Differential Equations with Applications and Historical Notes* (1972; 3rd edition 2016).
- M. W. Hirsch, S. Smale and R. L. Devaney, *Differential Equations, Dynamical Systems, and an Introduction to Chaos*
  (2004).
- H. D. Curtis, *Orbital Mechanics for Engineering Students* (2005): Kepler's laws, the vis-viva equation and
  Hohmann transfers in detail.
- K. Y. Billah and R. H. Scanlan, "Resonance, Tacoma Narrows bridge failure, and undergraduate physics textbooks",
  *American Journal of Physics* 59 (1991).
- On this site: the gentler [differential equations lesson](../../topics/change/level-8/07-differential-equations.md)
  and [falling bodies](../../topics/change/level-5/05-falling-bodies.md);
  [Probability, Chapter 14](../probability/14-Poisson-Processes.md) for exponential waiting times;
  [Geometry, Chapter 8](../geometry/08-Coordinate-Geometry.md) for conic sections.
