---
title: "Trigonometric identities and equations"
---

# Trigonometric identities and equations

*Algebra · level 8, lesson 7 of 8*

## A question to start

You know $\sin 30° = \tfrac12$ and $\sin 45° = \tfrac{\sqrt2}{2}$ exactly. What is $\sin 75°$ exactly?

It is tempting to add: $75 = 45 + 30$, so maybe $\sin 75° = \sin 45° + \sin 30° \approx 0.707 + 0.5 = 1.207$. But no
sine is ever bigger than 1, so that cannot be right. The true value is

$$\sin 75° = \frac{\sqrt6 + \sqrt2}{4} \approx 0.9659.$$

Where does that come from? From a formula for $\sin(a + b)$, which this lesson proves with nothing more than the unit
circle and the distance formula.

## The idea

### What you need from geometry

On the **unit circle** (radius 1, centre the origin), the point at angle $\theta$ is $(\cos\theta, \sin\theta)$. Angles
are measured anticlockwise from the positive $x$-axis, in degrees or in **radians** ($\pi$ radians $= 180°$). This
gives three facts you will use:

- $\sin^2\theta + \cos^2\theta = 1$ (the point is at distance 1 from the origin);
- $\cos(-\theta) = \cos\theta$ and $\sin(-\theta) = -\sin\theta$ (turning the other way reflects the point in the
  $x$-axis);
- $\sin\theta = \cos\left(\tfrac{\pi}{2} - \theta\right)$ and $\cos\theta = \sin\left(\tfrac{\pi}{2} - \theta\right)$
  (the **cofunction** identities).

All of this is in [Radians and the unit circle](../../geometry/level-8/02-radians-unit-circle.md).

An **identity** is an equation that is true for **every** value of the variable (where both sides are defined), like
$\sin^2\theta + \cos^2\theta = 1$. An ordinary **equation** like $2\sin x = 1$ is true only for some values, which we
have to find.

### The compound angle formula for $\cos(a - b)$, proved

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 280" role="img" aria-label="Two points P at angle a and Q at angle b on the unit circle, joined by the chord PQ; the angle between them at the centre is a − b">
  <line x1="25" y1="140" x2="275" y2="140" stroke="currentColor" stroke-width="1"/>
  <line x1="150" y1="15" x2="150" y2="265" stroke="currentColor" stroke-width="1"/>
  <circle cx="150" cy="140" r="110" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="150" y1="140" x2="103.5" y2="40.3" stroke="#9cc9ea" stroke-width="2.5"/>
  <line x1="150" y1="140" x2="245.3" y2="85" stroke="#9cc9ea" stroke-width="2.5"/>
  <line x1="103.5" y1="40.3" x2="245.3" y2="85" stroke="#eea66f" stroke-width="3"/>
  <path d="M 150 140 L 177.7 124 A 32 32 0 0 0 136.5 111 Z" fill="#7ccf9a" fill-opacity="0.6"/>
  <text x="164.4" y="98.2" font-size="12" text-anchor="middle" fill="currentColor">a − b</text>
  <circle cx="103.5" cy="40.3" r="4" fill="currentColor"/>
  <circle cx="245.3" cy="85" r="4" fill="currentColor"/>
  <text x="95.5" y="32.3" font-size="12" text-anchor="end" fill="currentColor">P (cos a, sin a)</text>
  <text x="253.3" y="77" font-size="12" fill="currentColor">Q (cos b, sin b)</text>
  <text x="174.4" y="54.7" font-size="12" text-anchor="middle" fill="currentColor">PQ</text>
  <text x="265" y="155" font-size="11" fill="currentColor">1</text>
</svg>
</div>

Put two points on the unit circle: $P = (\cos a, \sin a)$ at angle $a$ and $Q = (\cos b, \sin b)$ at angle $b$. The
angle between them, at the centre, is $a - b$.

**Measure $PQ$ directly.** By the distance formula,

$$PQ^2 = (\cos a - \cos b)^2 + (\sin a - \sin b)^2.$$

Expand both squares and group $\cos^2 a + \sin^2 a = 1$ and $\cos^2 b + \sin^2 b = 1$:

$$PQ^2 = 2 - 2(\cos a\cos b + \sin a\sin b).$$

**Measure it after a rotation.** Turn the whole picture clockwise by $b$. Turning does not change lengths. Now $Q$
sits at $(1, 0)$ and $P$ sits at angle $a - b$, that is at $(\cos(a - b), \sin(a - b))$. So

$$PQ^2 = (\cos(a - b) - 1)^2 + \sin^2(a - b) = \cos^2(a - b) - 2\cos(a - b) + 1 + \sin^2(a - b) = 2 - 2\cos(a - b).$$

**Compare.** The two expressions for $PQ^2$ must be equal, so

$$\cos(a - b) = \cos a\cos b + \sin a\sin b. \qquad \blacksquare$$

### The other compound angle formulas

Everything else follows from this one with a little algebra.

**$\cos(a + b)$.** Replace $b$ by $-b$, and use $\cos(-b) = \cos b$ and $\sin(-b) = -\sin b$:

$$\cos(a + b) = \cos a\cos b - \sin a\sin b.$$

**$\sin(a + b)$.** Use the cofunction identity, then the formula for $\cos$ of a difference:

$$\sin(a + b) = \cos\left(\left(\tfrac{\pi}{2} - a\right) - b\right) = \cos\left(\tfrac{\pi}{2} - a\right)\cos b + \sin\left(\tfrac{\pi}{2} - a\right)\sin b,$$

and since $\cos\left(\tfrac{\pi}{2} - a\right) = \sin a$ and $\sin\left(\tfrac{\pi}{2} - a\right) = \cos a$:

$$\sin(a + b) = \sin a\cos b + \cos a\sin b.$$

**$\sin(a - b)$.** Replace $b$ by $-b$: $\sin(a - b) = \sin a\cos b - \cos a\sin b$.

### Double angle formulas

Put $b = a$ in the sum formulas:

$$\sin 2a = 2\sin a\cos a,$$

$$\cos 2a = \cos^2 a - \sin^2 a = 2\cos^2 a - 1 = 1 - 2\sin^2 a.$$

The last two forms come from replacing $\sin^2 a$ by $1 - \cos^2 a$, or $\cos^2 a$ by $1 - \sin^2 a$. Having three
forms of $\cos 2a$ is useful: choose the one that matches the rest of your equation.

### How to prove an identity

Start with **one side** (usually the more complicated one) and change it, step by step, into the other side, using
known identities. Do **not** start by writing the identity and doing the same thing to both sides: that assumes what
you are trying to prove. Useful moves: write everything in $\sin$ and $\cos$; use the Pythagorean identity; use common
denominators; factor.

### How to solve a trigonometric equation

1. Use identities so that only **one** trig function of **one** angle appears.
2. Solve for that function, like an ordinary equation (it is often a quadratic in disguise: put $s = \sin x$).
3. Find **every** angle in the interval with that value, using the unit circle: most values come up twice per turn.
4. Never divide by $\sin x$ or $\cos x$ (it might be 0); factor instead.

## Worked examples

**1. The opening question.** Find $\sin 75°$ exactly.

- $\sin(45° + 30°) = \sin 45°\cos 30° + \cos 45°\sin 30° = \dfrac{\sqrt2}{2}\cdot\dfrac{\sqrt3}{2} + \dfrac{\sqrt2}{2}\cdot\dfrac12
  = \dfrac{\sqrt6 + \sqrt2}{4} \approx 0.9659$. ✓

**2. Proving an identity.** Prove $(\sin x + \cos x)^2 = 1 + \sin 2x$.

- Left side $= \sin^2 x + 2\sin x\cos x + \cos^2 x = (\sin^2 x + \cos^2 x) + 2\sin x\cos x = 1 + \sin 2x$, the right
  side. ∎

**3. Another identity.** Prove $\dfrac{1 - \cos 2x}{\sin 2x} = \tan x$.

- Use $\cos 2x = 1 - 2\sin^2 x$ on top and $\sin 2x = 2\sin x\cos x$ below.
- Left side $= \dfrac{1 - (1 - 2\sin^2 x)}{2\sin x\cos x} = \dfrac{2\sin^2 x}{2\sin x\cos x} = \dfrac{\sin x}{\cos x} =
  \tan x$. ∎ (Valid where the left side is defined.)

**4. A quadratic in $\sin x$.** Solve $2\sin^2 x - \sin x - 1 = 0$ for $0 \le x \le 2\pi$.

- Put $s = \sin x$: $2s^2 - s - 1 = 0$, so $(2s + 1)(s - 1) = 0$, so $s = 1$ or $s = -\tfrac12$.
- $\sin x = 1$: $x = \dfrac{\pi}{2}$.
- $\sin x = -\tfrac12$: sine is negative in the third and fourth quarters, with reference angle $\tfrac{\pi}{6}$:
  $x = \pi + \tfrac{\pi}{6} = \dfrac{7\pi}{6}$ and $x = 2\pi - \tfrac{\pi}{6} = \dfrac{11\pi}{6}$.
- Three solutions: $\dfrac{\pi}{2}, \dfrac{7\pi}{6}, \dfrac{11\pi}{6}$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 215" role="img" aria-label="The graph of y = 2 sin squared x − sin x − 1 from 0 to 2 pi: it touches the x-axis at pi/2 and crosses it at 7 pi/6 and 11 pi/6">
  <line x1="30" y1="121.9" x2="360" y2="121.9" stroke="currentColor" stroke-width="1"/>
  <text x="358" y="116.9" font-size="11" text-anchor="end" fill="currentColor" font-style="italic">x</text>
  <line x1="30" y1="190" x2="30" y2="10" stroke="currentColor" stroke-width="1"/>
  <text x="35" y="20" font-size="11" fill="currentColor" font-style="italic">y</text>
  <line x1="112.5" y1="118.9" x2="112.5" y2="124.9" stroke="currentColor" stroke-width="1"/>
  <text x="112.5" y="135.9" font-size="10" text-anchor="middle" fill="currentColor">π/2</text>
  <line x1="195" y1="118.9" x2="195" y2="124.9" stroke="currentColor" stroke-width="1"/>
  <text x="195" y="135.9" font-size="10" text-anchor="middle" fill="currentColor">π</text>
  <line x1="277.5" y1="118.9" x2="277.5" y2="124.9" stroke="currentColor" stroke-width="1"/>
  <text x="277.5" y="135.9" font-size="10" text-anchor="middle" fill="currentColor">3π/2</text>
  <line x1="360" y1="118.9" x2="360" y2="124.9" stroke="currentColor" stroke-width="1"/>
  <text x="360" y="135.9" font-size="10" text-anchor="middle" fill="currentColor">2π</text>
  <line x1="27" y1="170.5" x2="33" y2="170.5" stroke="currentColor" stroke-width="1"/>
  <text x="25" y="174" font-size="10" text-anchor="end" fill="currentColor">−1</text>
  <line x1="27" y1="73.2" x2="33" y2="73.2" stroke="currentColor" stroke-width="1"/>
  <text x="25" y="76.7" font-size="10" text-anchor="end" fill="currentColor">1</text>
  <line x1="27" y1="24.6" x2="33" y2="24.6" stroke="currentColor" stroke-width="1"/>
  <text x="25" y="28.1" font-size="10" text-anchor="end" fill="currentColor">2</text>
  <polyline points="30,170.5 30.7,171.1 31.3,171.7 32,172.2 32.6,172.7 33.3,173.2 34,173.7 34.6,174.1 35.3,174.4 35.9,174.8 36.6,175.1 37.3,175.4 37.9,175.7 38.6,175.9 39.2,176.1 39.9,176.2 40.6,176.4 41.2,176.5 41.9,176.6 42.5,176.6 43.2,176.6 43.9,176.6 44.5,176.6 45.2,176.5 45.8,176.4 46.5,176.3 47.2,176.1 47.8,176 48.5,175.8 49.1,175.5 49.8,175.3 50.5,175 51.1,174.7 51.8,174.3 52.4,174 53.1,173.6 53.8,173.2 54.4,172.8 55.1,172.3 55.7,171.9 56.4,171.4 57.1,170.9 57.7,170.4 58.4,169.8 59,169.3 59.7,168.7 60.4,168.1 61,167.5 61.7,166.8 62.3,166.2 63,165.5 63.7,164.8 64.3,164.2 65,163.5 65.6,162.7 66.3,162 67,161.3 67.6,160.5 68.3,159.8 68.9,159 69.6,158.2 70.3,157.5 70.9,156.7 71.6,155.9 72.2,155.1 72.9,154.3 73.6,153.5 74.2,152.7 74.9,151.9 75.5,151.1 76.2,150.3 76.9,149.4 77.5,148.6 78.2,147.8 78.8,147 79.5,146.2 80.2,145.4 80.8,144.6 81.5,143.8 82.1,143 82.8,142.3 83.5,141.5 84.1,140.7 84.8,140 85.4,139.2 86.1,138.5 86.8,137.7 87.4,137 88.1,136.3 88.7,135.6 89.4,134.9 90.1,134.2 90.7,133.6 91.4,132.9 92,132.3 92.7,131.7 93.4,131.1 94,130.5 94.7,129.9 95.3,129.3 96,128.8 96.7,128.3 97.3,127.8 98,127.3 98.6,126.8 99.3,126.4 100,126 100.6,125.5 101.3,125.2 101.9,124.8 102.6,124.4 103.3,124.1 103.9,123.8 104.6,123.5 105.2,123.3 105.9,123 106.6,122.8 107.2,122.6 107.9,122.5 108.5,122.3 109.2,122.2 109.9,122.1 110.5,122 111.2,121.9 111.8,121.9 112.5,121.9 113.2,121.9 113.8,121.9 114.5,122 115.1,122.1 115.8,122.2 116.5,122.3 117.1,122.5 117.8,122.6 118.4,122.8 119.1,123 119.8,123.3 120.4,123.5 121.1,123.8 121.7,124.1 122.4,124.4 123.1,124.8 123.7,125.2 124.4,125.5 125,126 125.7,126.4 126.4,126.8 127,127.3 127.7,127.8 128.3,128.3 129,128.8 129.7,129.3 130.3,129.9 131,130.5 131.6,131.1 132.3,131.7 133,132.3 133.6,132.9 134.3,133.6 134.9,134.2 135.6,134.9 136.3,135.6 136.9,136.3 137.6,137 138.2,137.7 138.9,138.5 139.6,139.2 140.2,140 140.9,140.7 141.5,141.5 142.2,142.3 142.9,143 143.5,143.8 144.2,144.6 144.8,145.4 145.5,146.2 146.2,147 146.8,147.8 147.5,148.6 148.1,149.4 148.8,150.3 149.5,151.1 150.1,151.9 150.8,152.7 151.4,153.5 152.1,154.3 152.8,155.1 153.4,155.9 154.1,156.7 154.7,157.5 155.4,158.2 156.1,159 156.7,159.8 157.4,160.5 158,161.3 158.7,162 159.4,162.7 160,163.5 160.7,164.2 161.3,164.8 162,165.5 162.7,166.2 163.3,166.8 164,167.5 164.6,168.1 165.3,168.7 166,169.3 166.6,169.8 167.3,170.4 167.9,170.9 168.6,171.4 169.3,171.9 169.9,172.3 170.6,172.8 171.2,173.2 171.9,173.6 172.6,174 173.2,174.3 173.9,174.7 174.5,175 175.2,175.3 175.9,175.5 176.5,175.8 177.2,176 177.8,176.1 178.5,176.3 179.2,176.4 179.8,176.5 180.5,176.6 181.1,176.6 181.8,176.6 182.5,176.6 183.1,176.6 183.8,176.5 184.4,176.4 185.1,176.2 185.8,176.1 186.4,175.9 187.1,175.7 187.7,175.4 188.4,175.1 189.1,174.8 189.7,174.4 190.4,174.1 191,173.7 191.7,173.2 192.4,172.7 193,172.2 193.7,171.7 194.3,171.1 195,170.5 195.7,169.9 196.3,169.3 197,168.6 197.6,167.9 198.3,167.1 199,166.3 199.6,165.5 200.3,164.7 200.9,163.8 201.6,162.9 202.3,162 202.9,161 203.6,160.1 204.2,159 204.9,158 205.6,156.9 206.2,155.9 206.9,154.7 207.5,153.6 208.2,152.4 208.9,151.2 209.5,150 210.2,148.8 210.8,147.5 211.5,146.2 212.2,144.9 212.8,143.6 213.5,142.2 214.1,140.8 214.8,139.4 215.5,138 216.1,136.6 216.8,135.1 217.4,133.7 218.1,132.2 218.8,130.7 219.4,129.2 220.1,127.6 220.7,126.1 221.4,124.5 222.1,122.9 222.7,121.4 223.4,119.8 224,118.2 224.7,116.5 225.4,114.9 226,113.3 226.7,111.6 227.3,110 228,108.3 228.7,106.7 229.3,105 230,103.3 230.6,101.7 231.3,100 232,98.3 232.6,96.7 233.3,95 233.9,93.3 234.6,91.6 235.3,90 235.9,88.3 236.6,86.7 237.2,85 237.9,83.4 238.6,81.7 239.2,80.1 239.9,78.5 240.5,76.9 241.2,75.3 241.9,73.7 242.5,72.1 243.2,70.6 243.8,69 244.5,67.5 245.2,66 245.8,64.5 246.5,63 247.1,61.5 247.8,60.1 248.5,58.7 249.1,57.3 249.8,55.9 250.4,54.5 251.1,53.2 251.8,51.9 252.4,50.6 253.1,49.3 253.7,48.1 254.4,46.9 255.1,45.7 255.7,44.5 256.4,43.4 257,42.3 257.7,41.2 258.4,40.1 259,39.1 259.7,38.1 260.3,37.2 261,36.3 261.7,35.4 262.3,34.5 263,33.7 263.6,32.9 264.3,32.1 265,31.4 265.6,30.7 266.3,30.1 266.9,29.5 267.6,28.9 268.3,28.3 268.9,27.8 269.6,27.3 270.2,26.9 270.9,26.5 271.6,26.1 272.2,25.8 272.9,25.5 273.5,25.3 274.2,25.1 274.9,24.9 275.5,24.8 276.2,24.7 276.8,24.6 277.5,24.6 278.2,24.6 278.8,24.7 279.5,24.8 280.1,24.9 280.8,25.1 281.5,25.3 282.1,25.5 282.8,25.8 283.4,26.1 284.1,26.5 284.8,26.9 285.4,27.3 286.1,27.8 286.7,28.3 287.4,28.9 288.1,29.5 288.7,30.1 289.4,30.7 290,31.4 290.7,32.1 291.4,32.9 292,33.7 292.7,34.5 293.3,35.4 294,36.3 294.7,37.2 295.3,38.1 296,39.1 296.6,40.1 297.3,41.2 298,42.3 298.6,43.4 299.3,44.5 299.9,45.7 300.6,46.9 301.3,48.1 301.9,49.3 302.6,50.6 303.2,51.9 303.9,53.2 304.6,54.5 305.2,55.9 305.9,57.3 306.5,58.7 307.2,60.1 307.9,61.5 308.5,63 309.2,64.5 309.8,66 310.5,67.5 311.2,69 311.8,70.6 312.5,72.1 313.1,73.7 313.8,75.3 314.5,76.9 315.1,78.5 315.8,80.1 316.4,81.7 317.1,83.4 317.8,85 318.4,86.7 319.1,88.3 319.7,90 320.4,91.6 321.1,93.3 321.7,95 322.4,96.7 323,98.3 323.7,100 324.4,101.7 325,103.3 325.7,105 326.3,106.7 327,108.3 327.7,110 328.3,111.6 329,113.3 329.6,114.9 330.3,116.5 331,118.2 331.6,119.8 332.3,121.4 332.9,122.9 333.6,124.5 334.3,126.1 334.9,127.6 335.6,129.2 336.2,130.7 336.9,132.2 337.6,133.7 338.2,135.1 338.9,136.6 339.5,138 340.2,139.4 340.9,140.8 341.5,142.2 342.2,143.6 342.8,144.9 343.5,146.2 344.2,147.5 344.8,148.8 345.5,150 346.1,151.2 346.8,152.4 347.5,153.6 348.1,154.7 348.8,155.9 349.4,156.9 350.1,158 350.8,159 351.4,160.1 352.1,161 352.7,162 353.4,162.9 354.1,163.8 354.7,164.7 355.4,165.5 356,166.3 356.7,167.1 357.4,167.9 358,168.6 358.7,169.3 359.3,169.9 360,170.5" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <circle cx="112.5" cy="121.9" r="3.5" fill="currentColor"/>
  <circle cx="222.5" cy="121.9" r="3.5" fill="currentColor"/>
  <text x="218.5" y="113.9" font-size="11" text-anchor="end" fill="currentColor">7π/6</text>
  <circle cx="332.5" cy="121.9" r="3.5" fill="currentColor"/>
  <text x="327.5" y="113.9" font-size="11" text-anchor="end" fill="currentColor">11π/6</text>
</svg>
</div>

**5. Using a double angle.** Solve $\cos 2x = \sin x$ for $0 \le x \le 2\pi$.

- Choose the form of $\cos 2x$ with only sines: $1 - 2\sin^2 x = \sin x$, so $2\sin^2 x + \sin x - 1 = 0$.
- $(2\sin x - 1)(\sin x + 1) = 0$, so $\sin x = \tfrac12$ or $\sin x = -1$.
- $x = \dfrac{\pi}{6}, \dfrac{5\pi}{6}, \dfrac{3\pi}{2}$.

**6. Do not divide.** Solve $\sin 2x = \sin x$ for $0 \le x \le 2\pi$.

- $2\sin x\cos x - \sin x = 0$, so $\sin x\,(2\cos x - 1) = 0$.
- $\sin x = 0$: $x = 0, \pi, 2\pi$. $\cos x = \tfrac12$: $x = \dfrac{\pi}{3}, \dfrac{5\pi}{3}$.
- Five solutions. Dividing by $\sin x$ at the start would have lost $0, \pi, 2\pi$.

## Try it

1. Find $\cos 75°$ exactly, using $75° = 45° + 30°$.
2. Find $\sin\dfrac{\pi}{12}$ exactly, using $\dfrac{\pi}{12} = \dfrac{\pi}{4} - \dfrac{\pi}{6}$.
3. $\sin a = \tfrac35$ and $a$ is between 0 and $\tfrac{\pi}{2}$. Find $\sin 2a$ and $\cos 2a$.
4. Prove $\tan x + \dfrac{1}{\tan x} = \dfrac{2}{\sin 2x}$.
5. Solve $2\cos x + \sqrt3 = 0$ for $0 \le x \le 2\pi$.
6. Solve $2\cos^2 x - \cos x = 0$ for $0 \le x \le 2\pi$.
7. Solve $\sin^2 x = 3\cos^2 x$ for $0 \le x \le 2\pi$.
8. Prove $\sin 3x = 3\sin x - 4\sin^3 x$.

??? note "Answers"
    1. $\cos 45°\cos 30° - \sin 45°\sin 30° = \dfrac{\sqrt2}{2}\cdot\dfrac{\sqrt3}{2} - \dfrac{\sqrt2}{2}\cdot\dfrac12 =
       \dfrac{\sqrt6 - \sqrt2}{4} \approx 0.2588$.
    2. $\sin\dfrac{\pi}{4}\cos\dfrac{\pi}{6} - \cos\dfrac{\pi}{4}\sin\dfrac{\pi}{6} = \dfrac{\sqrt6}{4} - \dfrac{\sqrt2}{4}
       = \dfrac{\sqrt6 - \sqrt2}{4}$. (The same as $\cos 75°$, because $15° + 75° = 90°$: a cofunction pair.)
    3. $\cos a = \sqrt{1 - \tfrac{9}{25}} = \tfrac45$ (positive, since $a$ is in the first quarter). $\sin 2a =
       2 \cdot \tfrac35 \cdot \tfrac45 = \tfrac{24}{25}$. $\cos 2a = 1 - 2 \cdot \tfrac{9}{25} = \tfrac{7}{25}$. Check:
       $\left(\tfrac{24}{25}\right)^2 + \left(\tfrac{7}{25}\right)^2 = \tfrac{576 + 49}{625} = 1$. ✓
    4. Left side $= \dfrac{\sin x}{\cos x} + \dfrac{\cos x}{\sin x} = \dfrac{\sin^2 x + \cos^2 x}{\sin x\cos x} =
       \dfrac{1}{\sin x\cos x} = \dfrac{2}{2\sin x\cos x} = \dfrac{2}{\sin 2x}$. ∎
    5. $\cos x = -\tfrac{\sqrt3}{2}$: cosine is negative in the second and third quarters, reference angle
       $\tfrac{\pi}{6}$: $x = \dfrac{5\pi}{6}$ and $x = \dfrac{7\pi}{6}$.
    6. $\cos x\,(2\cos x - 1) = 0$. $\cos x = 0$: $\dfrac{\pi}{2}, \dfrac{3\pi}{2}$. $\cos x = \tfrac12$:
       $\dfrac{\pi}{3}, \dfrac{5\pi}{3}$.
    7. If $\cos x = 0$ then $\sin^2 x = 1 \ne 0$, so such $x$ are not solutions, and we may divide by $\cos^2 x$:
       $\tan^2 x = 3$, so $\tan x = \pm\sqrt3$. $x = \dfrac{\pi}{3}, \dfrac{2\pi}{3}, \dfrac{4\pi}{3}, \dfrac{5\pi}{3}$.
    8. $\sin 3x = \sin(2x + x) = \sin 2x\cos x + \cos 2x\sin x = 2\sin x\cos^2 x + (1 - 2\sin^2 x)\sin x$. Replace
       $\cos^2 x$ by $1 - \sin^2 x$: $2\sin x - 2\sin^3 x + \sin x - 2\sin^3 x = 3\sin x - 4\sin^3 x$. ∎

## Common mistake

**Splitting a sine like a bracket.** $\sin(a + b)$ is not $\sin a + \sin b$. Sine is a function, not a number that
multiplies. Test with $a = b = 90°$: $\sin 180° = 0$, but $\sin 90° + \sin 90° = 2$.

**Missing solutions.** A value like $\sin x = -\tfrac12$ gives **two** angles in each full turn. Draw the unit circle
or the graph and look for all of them. And never divide by a trig function that could be 0.

## Where it leads

- Back: [Combining functions](06-combining-functions.md) · Next: [Lines and planes in space](08-lines-planes-space.md).
- [Level 8 page](index.md) · [Algebra topic page](../index.md)
- The unit circle, radians and exact values: [Radians and the unit
  circle](../../geometry/level-8/02-radians-unit-circle.md). The waves these equations describe: [Graphs of sine and
  cosine](../../geometry/level-8/03-sine-cosine-graphs.md).
- With complex numbers the compound angle formulas come for free from $e^{i(a + b)} = e^{ia}e^{ib}$: [Euler's
  formula](../../numbers/level-8/04-euler-formula.md).
- At university, sine and cosine are defined without triangles and differentiated: [MAT137 Unit 4 (transcendental
  functions)](../../../uoft/MAT137/unit04.md). Waves and oscillations in physics: [PHY131 Unit 9
  (oscillations)](../../../uoft/PHY131H1/unit09.md).
