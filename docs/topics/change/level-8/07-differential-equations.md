---
title: "Differential equations: a first look"
---

# Differential equations: a first look

*Change and motion · level 8, lesson 7 of 7*

## A question to start

A cup of tea is poured at 90 °C in a room at 20 °C. Ten minutes later it has cooled to 60 °C.

**When will it be down to 30 °C?**

You might guess: it lost 30 degrees in 10 minutes, so another 30 degrees takes another 10 minutes. But a cup of tea
does not cool at a steady rate. It cools fast when it is hot and slowly when it is nearly at room temperature. The
real answer is about **35 minutes** after pouring. To find it we need a law about the **rate** of cooling, and then we
need to turn that law about rates into a formula for the temperature itself. A law about rates is a **differential
equation**, and solving one is the first step beyond school calculus.

## The idea

### Equations whose unknown is a function

An ordinary equation like $x^2 = 9$ has a number as its unknown. A **differential equation** has a **function** as its
unknown, and it tells you something about that function's derivative. Its **solution** is a function that makes the
equation true for every $t$.

You have already solved some:

- $\frac{dy}{dt} = 3$: the rate is constant, so $y = 3t + C$.
- $\frac{dy}{dt} = 2t$: $y = t^2 + C$ (an antiderivative, [lesson 6](06-area-fundamental-theorem.md)).
- $s''(t) = -9.8$: a thrown ball. Integrating twice gives $s = s_0 + v_0 t - 4.9t^2$
  ([level 7, lesson 6](../level-7/06-velocity-acceleration.md)).

There is always a constant $C$ (or more than one), because many functions share a derivative. One extra fact, such as
the value at $t = 0$ (an **initial condition**), picks out the single solution you want.

### Rate proportional to amount: $\frac{dy}{dt} = ky$

The most important differential equation of all says: **the rate of change is proportional to the amount**.

$$\frac{dy}{dt} = ky.$$

It describes anything whose growth feeds itself: bacteria (more bacteria, more divisions), money earning continuous
interest (more money, more interest), and, with $k$ negative, anything that decays by a fixed fraction, such as a
radioactive substance (more atoms, more decays).

**A solution.** From [lesson 2](02-exp-log-trig.md), $\frac{d}{dt}e^{kt} = ke^{kt}$. So $y = Ce^{kt}$ works for any
constant $C$: its derivative is $Cke^{kt} = ky$. At $t = 0$, $y = Ce^0 = C$, so $C$ is the starting amount $y_0$:

$$y = y_0 e^{kt}.$$

**The only solutions.** Could some other, stranger function also satisfy $y' = ky$? No, and here is a short proof.
Suppose $y' = ky$. Let $z = y e^{-kt}$. By the product rule,

$$z' = y' e^{-kt} - k y e^{-kt} = ky e^{-kt} - ky e^{-kt} = 0.$$

A function with derivative 0 everywhere is constant, so $z = C$ and $y = Ce^{kt}$. Every solution is an exponential.

That is why exponential growth and decay turn up everywhere in nature: they are what "rate proportional to amount"
**forces**. If $k > 0$ the amount grows, doubling every $\frac{\ln 2}{k}$ time units. If $k < 0$ it decays, halving every
$\frac{\ln 2}{|k|}$ (the **half-life**). (Doubling: $e^{kt} = 2$ when $kt = \ln 2$.)

### Newton's law of cooling

Isaac Newton proposed that a hot object cools at a rate proportional to **how much hotter it is than its
surroundings**. With room temperature $R$:

$$\frac{dT}{dt} = -k(T - R), \qquad k > 0.$$

The minus sign makes $T$ fall when $T > R$. To solve it, let $u = T - R$, the "excess" temperature. Since $R$ is
constant, $\frac{du}{dt} = \frac{dT}{dt} = -ku$. That is the equation above, with $-k$ in place of $k$. So
$u = u_0 e^{-kt}$, and

$$T = R + (T_0 - R)e^{-kt}.$$

The excess temperature decays exponentially, and $T$ creeps towards room temperature, getting closer and closer
but never quite reaching it in this model. This is the "fast at first, then slower" curve you met in
[level 3](../level-3/05-fast-then-slower.md), now with its formula explained.

### Slope fields: seeing solutions without solving

A differential equation $\frac{dy}{dt} = f(t, y)$ tells you the slope of the solution through **every** point. So you
can draw it: at many points $(t, y)$ draw a short segment with slope $f(t, y)$. The result is a **slope field**, and
every solution curve follows the segments, like a leaf floating on a stream.

Here is the slope field for the tea, $\frac{dT}{dt} = -0.1(T - 20)$, with three solution curves: starting at 90 °C, at
60 °C, and a cold drink starting at 5 °C.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 260" role="img" aria-label="A slope field for dT by dt equals minus 0.1 times T minus 20: short segments slope steeply down at high temperatures, are flat along the dashed line T equals 20, and slope up below it. Three solution curves follow the segments: from 90 and 60 degrees falling towards 20, and from 5 degrees rising towards 20.">
  <line x1="34" y1="238" x2="385" y2="238" stroke="currentColor" stroke-width="1.2"/>
  <line x1="34" y1="238" x2="34" y2="12" stroke="currentColor" stroke-width="1.2"/>
  <g font-size="12" fill="currentColor"><line x1="117.6" y1="235" x2="117.6" y2="241" stroke="currentColor"/><text x="117.6" y="253" text-anchor="middle">10</text><line x1="201.1" y1="235" x2="201.1" y2="241" stroke="currentColor"/><text x="201.1" y="253" text-anchor="middle">20</text><line x1="284.7" y1="235" x2="284.7" y2="241" stroke="currentColor"/><text x="284.7" y="253" text-anchor="middle">30</text><line x1="368.3" y1="235" x2="368.3" y2="241" stroke="currentColor"/><text x="368.3" y="253" text-anchor="middle">40</text><line x1="31" y1="192.8" x2="37" y2="192.8" stroke="currentColor"/><text x="28" y="196.8" text-anchor="end">20</text><line x1="31" y1="147.6" x2="37" y2="147.6" stroke="currentColor"/><text x="28" y="151.6" text-anchor="end">40</text><line x1="31" y1="102.4" x2="37" y2="102.4" stroke="currentColor"/><text x="28" y="106.4" text-anchor="end">60</text><line x1="31" y1="57.2" x2="37" y2="57.2" stroke="currentColor"/><text x="28" y="61.2" text-anchor="end">80</text><text x="385" y="232" text-anchor="end">t (min)</text><text x="40" y="22">T (°C)</text></g>
  <line x1="34" y1="192.8" x2="385" y2="192.8" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="44" y1="217.2" x2="57.5" y2="213.6" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="43.7" y1="192.8" x2="57.7" y2="192.8" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="44" y1="168.4" x2="57.5" y2="172" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="44.6" y1="144.3" x2="56.9" y2="150.9" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="45.3" y1="120.6" x2="56.2" y2="129.4" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="46" y1="97.3" x2="55.5" y2="107.5" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="46.6" y1="74.2" x2="54.9" y2="85.4" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="47" y1="51.2" x2="54.4" y2="63.2" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="47.4" y1="28.4" x2="54" y2="40.8" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="77.4" y1="217.2" x2="90.9" y2="213.6" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="77.1" y1="192.8" x2="91.1" y2="192.8" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="77.4" y1="168.4" x2="90.9" y2="172" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="78" y1="144.3" x2="90.3" y2="150.9" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="78.7" y1="120.6" x2="89.6" y2="129.4" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="79.4" y1="97.3" x2="88.9" y2="107.5" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="80" y1="74.2" x2="88.3" y2="85.4" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="80.5" y1="51.2" x2="87.8" y2="63.2" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="80.9" y1="28.4" x2="87.4" y2="40.8" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="110.8" y1="217.2" x2="124.3" y2="213.6" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="110.6" y1="192.8" x2="124.6" y2="192.8" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="110.8" y1="168.4" x2="124.3" y2="172" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="111.4" y1="144.3" x2="123.7" y2="150.9" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="112.1" y1="120.6" x2="123" y2="129.4" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="112.8" y1="97.3" x2="122.3" y2="107.5" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="113.4" y1="74.2" x2="121.7" y2="85.4" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="113.9" y1="51.2" x2="121.2" y2="63.2" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="114.3" y1="28.4" x2="120.8" y2="40.8" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="144.2" y1="217.2" x2="157.8" y2="213.6" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="144" y1="192.8" x2="158" y2="192.8" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="144.2" y1="168.4" x2="157.8" y2="172" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="144.8" y1="144.3" x2="157.2" y2="150.9" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="145.6" y1="120.6" x2="156.4" y2="129.4" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="146.2" y1="97.3" x2="155.8" y2="107.5" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="146.8" y1="74.2" x2="155.2" y2="85.4" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="147.3" y1="51.2" x2="154.7" y2="63.2" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="147.7" y1="28.4" x2="154.3" y2="40.8" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="177.7" y1="217.2" x2="191.2" y2="213.6" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="177.4" y1="192.8" x2="191.4" y2="192.8" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="177.7" y1="168.4" x2="191.2" y2="172" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="178.3" y1="144.3" x2="190.6" y2="150.9" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="179" y1="120.6" x2="189.9" y2="129.4" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="179.7" y1="97.3" x2="189.2" y2="107.5" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="180.3" y1="74.2" x2="188.6" y2="85.4" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="180.8" y1="51.2" x2="188.1" y2="63.2" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="181.2" y1="28.4" x2="187.7" y2="40.8" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="211.1" y1="217.2" x2="224.6" y2="213.6" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="210.9" y1="192.8" x2="224.9" y2="192.8" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="211.1" y1="168.4" x2="224.6" y2="172" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="211.7" y1="144.3" x2="224" y2="150.9" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="212.4" y1="120.6" x2="223.3" y2="129.4" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="213.1" y1="97.3" x2="222.6" y2="107.5" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="213.7" y1="74.2" x2="222" y2="85.4" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="214.2" y1="51.2" x2="221.5" y2="63.2" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="214.6" y1="28.4" x2="221.1" y2="40.8" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="244.5" y1="217.2" x2="258" y2="213.6" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="244.3" y1="192.8" x2="258.3" y2="192.8" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="244.5" y1="168.4" x2="258" y2="172" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="245.1" y1="144.3" x2="257.4" y2="150.9" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="245.8" y1="120.6" x2="256.7" y2="129.4" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="246.5" y1="97.3" x2="256" y2="107.5" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="247.1" y1="74.2" x2="255.4" y2="85.4" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="247.6" y1="51.2" x2="255" y2="63.2" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="248" y1="28.4" x2="254.6" y2="40.8" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="278" y1="217.2" x2="291.5" y2="213.6" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="277.7" y1="192.8" x2="291.7" y2="192.8" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="278" y1="168.4" x2="291.5" y2="172" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="278.6" y1="144.3" x2="290.9" y2="150.9" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="279.3" y1="120.6" x2="290.2" y2="129.4" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="280" y1="97.3" x2="289.5" y2="107.5" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="280.6" y1="74.2" x2="288.9" y2="85.4" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="281" y1="51.2" x2="288.4" y2="63.2" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="281.4" y1="28.4" x2="288" y2="40.8" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="311.4" y1="217.2" x2="324.9" y2="213.6" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="311.1" y1="192.8" x2="325.1" y2="192.8" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="311.4" y1="168.4" x2="324.9" y2="172" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="312" y1="144.3" x2="324.3" y2="150.9" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="312.7" y1="120.6" x2="323.6" y2="129.4" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="313.4" y1="97.3" x2="322.9" y2="107.5" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="314" y1="74.2" x2="322.3" y2="85.4" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="314.5" y1="51.2" x2="321.8" y2="63.2" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="314.9" y1="28.4" x2="321.4" y2="40.8" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="344.8" y1="217.2" x2="358.3" y2="213.6" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="344.6" y1="192.8" x2="358.6" y2="192.8" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="344.8" y1="168.4" x2="358.3" y2="172" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="345.4" y1="144.3" x2="357.7" y2="150.9" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="346.1" y1="120.6" x2="357" y2="129.4" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="346.8" y1="97.3" x2="356.3" y2="107.5" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="347.4" y1="74.2" x2="355.7" y2="85.4" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="347.9" y1="51.2" x2="355.2" y2="63.2" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <line x1="348.3" y1="28.4" x2="354.8" y2="40.8" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <polyline points="34,34.6 38.4,42.7 42.8,50.4 47.2,57.7 51.5,64.6 55.9,71.1 60.3,77.3 64.7,83.3 69.1,88.9 73.5,94.2 77.9,99.2 82.3,104 86.7,108.5 91,112.9 95.4,116.9 99.8,120.8 104.2,124.5 108.6,128 113,131.3 117.4,134.5 121.8,137.4 126.1,140.3 130.5,143 134.9,145.5 139.3,147.9 143.7,150.2 148.1,152.4 152.5,154.5 156.8,156.4 161.2,158.3 165.6,160.1 170,161.7 174.4,163.3 178.8,164.8 183.2,166.3 187.6,167.6 191.9,168.9 196.3,170.1 200.7,171.3 205.1,172.4 209.5,173.4 213.9,174.4 218.3,175.4 222.7,176.3 227.1,177.1 231.4,177.9 235.8,178.7 240.2,179.4 244.6,180.1 249,180.7 253.4,181.3 257.8,181.9 262.1,182.5 266.5,183 270.9,183.5 275.3,184 279.7,184.4 284.1,184.9 288.5,185.3 292.9,185.7 297.2,186 301.6,186.4 306,186.7 310.4,187 314.8,187.3 319.2,187.6 323.6,187.9 328,188.1 332.4,188.3 336.7,188.6 341.1,188.8 345.5,189 349.9,189.2 354.3,189.4 358.7,189.5 363.1,189.7 367.4,189.9 371.8,190 376.2,190.2 380.6,190.3 385,190.4" fill="none" stroke="#eea66f" stroke-width="3"/>
  <circle cx="34" cy="34.6" r="3.5" fill="currentColor"/>
  <polyline points="34,102.4 38.4,107 42.8,111.4 47.2,115.6 51.5,119.5 55.9,123.3 60.3,126.8 64.7,130.2 69.1,133.4 73.5,136.4 77.9,139.3 82.3,142.1 86.7,144.7 91,147.1 95.4,149.5 99.8,151.7 104.2,153.8 108.6,155.8 113,157.7 117.4,159.5 121.8,161.2 126.1,162.8 130.5,164.3 134.9,165.8 139.3,167.2 143.7,168.5 148.1,169.7 152.5,170.9 156.8,172 161.2,173.1 165.6,174.1 170,175 174.4,176 178.8,176.8 183.2,177.6 187.6,178.4 191.9,179.1 196.3,179.8 200.7,180.5 205.1,181.1 209.5,181.7 213.9,182.3 218.3,182.8 222.7,183.3 227.1,183.8 231.4,184.3 235.8,184.7 240.2,185.1 244.6,185.5 249,185.9 253.4,186.3 257.8,186.6 262.1,186.9 266.5,187.2 270.9,187.5 275.3,187.8 279.7,188 284.1,188.3 288.5,188.5 292.9,188.7 297.2,188.9 301.6,189.1 306,189.3 310.4,189.5 314.8,189.7 319.2,189.8 323.6,190 328,190.1 332.4,190.3 336.7,190.4 341.1,190.5 345.5,190.6 349.9,190.7 354.3,190.8 358.7,190.9 363.1,191 367.4,191.1 371.8,191.2 376.2,191.3 380.6,191.4 385,191.4" fill="none" stroke="#7ccf9a" stroke-width="3"/>
  <circle cx="34" cy="102.4" r="3.5" fill="currentColor"/>
  <polyline points="34,226.7 38.4,225 42.8,223.3 47.2,221.8 51.5,220.3 55.9,218.9 60.3,217.5 64.7,216.3 69.1,215.1 73.5,213.9 77.9,212.9 82.3,211.8 86.7,210.9 91,209.9 95.4,209.1 99.8,208.2 104.2,207.4 108.6,206.7 113,206 117.4,205.3 121.8,204.7 126.1,204.1 130.5,203.5 134.9,202.9 139.3,202.4 143.7,201.9 148.1,201.5 152.5,201 156.8,200.6 161.2,200.2 165.6,199.8 170,199.5 174.4,199.1 178.8,198.8 183.2,198.5 187.6,198.2 191.9,197.9 196.3,197.7 200.7,197.4 205.1,197.2 209.5,197 213.9,196.7 218.3,196.5 222.7,196.3 227.1,196.2 231.4,196 235.8,195.8 240.2,195.7 244.6,195.5 249,195.4 253.4,195.3 257.8,195.1 262.1,195 266.5,194.9 270.9,194.8 275.3,194.7 279.7,194.6 284.1,194.5 288.5,194.4 292.9,194.3 297.2,194.3 301.6,194.2 306,194.1 310.4,194 314.8,194 319.2,193.9 323.6,193.9 328,193.8 332.4,193.8 336.7,193.7 341.1,193.7 345.5,193.6 349.9,193.6 354.3,193.5 358.7,193.5 363.1,193.5 367.4,193.4 371.8,193.4 376.2,193.4 380.6,193.3 385,193.3" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <circle cx="34" cy="226.7" r="3.5" fill="currentColor"/>
</svg>
</div>

You can read the whole story from the segments, without any formula. Above 20 they slope down, steeply when $T$ is far
above 20. Below 20 they slope up. Along $T = 20$ they are flat: room-temperature tea stays at room temperature (an
**equilibrium**). Every solution is drawn towards 20.

### Euler's method: solving with tiny steps

Most differential equations cannot be solved with a formula. But a computer can follow the slope field step by step.
Start at the initial point. Find the slope there from the equation. Walk a short step $\Delta t$ along that slope.
Repeat:

$$y_{\text{new}} = y_{\text{old}} + (\text{slope at the old point}) \times \Delta t.$$

This is **Euler's method** (after Leonhard Euler). Try it on $\frac{dy}{dt} = y$ with $y(0) = 1$, whose exact solution is
$e^t$. With step 0.25, each step multiplies $y$ by $1 + 0.25 = 1.25$ (because $y_{\text{new}} = y + y \times 0.25$). Four
steps reach $t = 1$:

$$y(1) \approx 1.25^4 \approx 2.441.$$

With step 0.1, ten steps give $1.1^{10} \approx 2.594$. The exact value is $e \approx 2.718$. Smaller steps get closer, and
with $n$ steps the estimate is $\left(1 + \frac1n\right)^n$: exactly the compound-interest formula for $e$. Euler's
method and compound interest are the same idea.

### Beyond this level

Two famous equations to look forward to:

- **Logistic growth**, $\frac{dP}{dt} = kP\left(1 - \frac{P}{K}\right)$: growth that slows as a population nears the
  most its environment can support, $K$. Its solutions are the S-shaped curves of
  [level 6](../level-6/06-fastest-change.md).
- **Oscillation**, $s'' = -\omega^2 s$: a spring or pendulum, where the pull back is proportional to the distance out.
  Its solutions are $\sin(\omega t)$ and $\cos(\omega t)$, because differentiating sine twice gives minus sine.

Much of physics, biology and economics is written in differential equations. This is where calculus stops being a
school subject and becomes the language of science.

## Worked examples

**1. Checking a solution.** Show that $y = 5e^{3t}$ solves $\frac{dy}{dt} = 3y$ with $y(0) = 5$.

$\frac{dy}{dt} = 5 \cdot 3e^{3t} = 3 \cdot 5e^{3t} = 3y$ ✓, and $y(0) = 5e^0 = 5$ ✓.

**2. Bacteria.** A culture of 1000 bacteria doubles every 3 hours. Find $k$ and the population after 10 hours.

1. Doubling time $\frac{\ln 2}{k} = 3$, so $k = \frac{\ln 2}{3} \approx 0.231$ per hour.
2. $P(10) = 1000e^{0.231 \times 10}$. More simply, 10 hours is $\frac{10}{3}$ doublings: $P = 1000 \times 2^{10/3} \approx 10\,080$.

**3. Carbon dating.** Carbon-14 has a half-life of about 5730 years. What fraction is left after 10 000 years?

$\frac{10\,000}{5730} \approx 1.745$ half-lives, so the fraction is $\left(\frac12\right)^{1.745} \approx 0.298$: about 30%.
Measuring the fraction left in old wood or bone is how such materials are dated.

**4. The tea.** $T = 20 + 70e^{-kt}$ (room 20 °C, start 90 °C, excess 70).

1. At $t = 10$, $T = 60$: $70e^{-10k} = 40$, so $e^{-10k} = \frac47$ and $k = \frac{\ln(7/4)}{10} \approx 0.0560$ per minute.
2. Reaching 30 °C: $70e^{-kt} = 10$, so $e^{-kt} = \frac17$ and $t = \frac{\ln 7}{k} \approx \frac{1.946}{0.0560} \approx 34.8$
   minutes.

So about 35 minutes after pouring: the second 30 degrees take nearly 25 minutes, not 10. The excess temperature
has to fall from 40 to 10, a factor of 4, while the first 10 minutes only shrank it by a factor of $\frac{7}{4}$.

**5. Euler by hand.** Use Euler's method with step 0.5 on $\frac{dy}{dt} = y$, $y(0) = 1$, to estimate $y(1)$.

Step 1: slope at $(0, 1)$ is 1; $y = 1 + 1 \times 0.5 = 1.5$. Step 2: slope at $(0.5, 1.5)$ is 1.5;
$y = 1.5 + 1.5 \times 0.5 = 2.25$. Estimate 2.25, against the true $e \approx 2.718$. Too low, because the true curve keeps
getting steeper during each step, while Euler uses the slope from the start of the step.

## Try it

1. Solve $\frac{dy}{dt} = 6t^2$ with $y(0) = 4$.
2. Check that $y = 3e^{-2t}$ solves $\frac{dy}{dt} = -2y$. What is $y(0)$?
3. Solve $\frac{dy}{dt} = 0.04y$ with $y(0) = 500$, and find $y(10)$.
4. A substance decays with $\frac{dm}{dt} = -0.1m$ ($t$ in days). What is its half-life?
5. Soup at 80 °C is left in a 20 °C room, with $k = 0.05$ per minute in Newton's law. What is its temperature after 10
   minutes?
6. Use Euler's method with step 0.25 on $\frac{dy}{dt} = y$, $y(0) = 1$, writing down each of the four steps.
7. In the slope field for $\frac{dT}{dt} = -0.1(T - 20)$, where are the segments flat? What happens in the long run to a
   drink that starts at 5 °C?
8. Use the proof in the lesson to show: if $y' = ky$ and $y(0) = 0$, then $y(t) = 0$ for every $t$.

??? note "Answers"
    1. $y = 2t^3 + C$, and $y(0) = 4$ gives $C = 4$: $y = 2t^3 + 4$.
    2. $\frac{dy}{dt} = 3 \times (-2)e^{-2t} = -2 \times 3e^{-2t} = -2y$ ✓. $y(0) = 3$.
    3. $y = 500e^{0.04t}$. $y(10) = 500e^{0.4} \approx 745.9$.
    4. Half-life $\frac{\ln 2}{0.1} \approx 6.93$ days.
    5. $T = 20 + 60e^{-0.05t}$, so $T(10) = 20 + 60e^{-0.5} \approx 20 + 36.4 = 56.4$ °C.
    6. Each step multiplies by 1.25: $1 \to 1.25 \to 1.5625 \to 1.953125 \to 2.44140625$. So $y(1) \approx 2.441$
       (true value $e \approx 2.718$).
    7. Flat where the slope $-0.1(T - 20)$ is 0: along $T = 20$. The cold drink's curve slopes upwards, less and less
       steeply, and creeps up towards 20 °C: it warms to room temperature.
    8. Let $z = ye^{-kt}$. As in the lesson, $z' = 0$, so $z$ is constant, and $z(0) = y(0) \times 1 = 0$. So $z = 0$
       always, and $y = ze^{kt} = 0$ always. (If nothing is there, nothing can grow.)

## Common mistake

**Treating a rate law as a formula for the amount.** $\frac{dT}{dt} = -0.1(T - 20)$ is not the temperature; it is how
fast the temperature changes. To get $T$ you must solve the equation. Plugging a time into the rate law does not
give a temperature.

**Assuming steady change.** The opening guess (another 10 minutes) assumed a constant rate. Whenever the rate depends
on the amount, the change is not steady, and straight-line thinking gives the wrong answer.

## Where it leads

- Back: [Areas under curves and the fundamental theorem](06-area-fundamental-theorem.md)
- [Level 8 page](index.md) · [Change and motion topic page](../index.md)
- Exponential growth and decay with money and half-lives: [Ratio: doubling and half-life](../../ratio/level-7/02-doubling-half-life.md)
  and [Ratio: continuous growth and e](../../ratio/level-8/05-continuous-e.md).
- Step-by-step processes like Euler's method: [Patterns: recursive sequences](../../patterns/level-6/05-recursive-sequences.md).
- Infinite processes and limits: [Infinity](../../infinity/index.md).
- On the U of T shelf: the whole [MAT137 course](../../../uoft/MAT137/index.md), and the physics of motion in
  [PHY131](../../../uoft/PHY131H1/index.md).
