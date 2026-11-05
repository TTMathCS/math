---
title: "Solving recurrences"
---

# Solving recurrences

*Patterns and sequences · level 8, lesson 4 of 6*

## A question to start

A sequence starts $a_0 = 1$, $a_1 = 4$, and after that follows the rule

$$a_n = 5a_{n-1} - 6a_{n-2}.$$

The terms are $1, 4, 14, 46, 146, 454, 1394, \ldots$. What is $a_{100}$?

Following the rule means 99 more steps with numbers that grow to 48 digits. But there is a formula that gives any term
at once:

$$a_n = 2 \cdot 3^n - 2^n.$$

Try it: $a_2 = 18 - 4 = 14$ ✓, $a_3 = 54 - 8 = 46$ ✓. Where did a formula with 3s and 2s come from, when the rule has
a 5 and a 6? This lesson shows how to find it, and uses the same method to **derive** Binet's formula for the
Fibonacci numbers, which you could only check in level 7.

## The idea

### Recurrences and closed forms

A **recurrence** (or recurrence relation) is a rule that gives each term from earlier ones, like
$a_n = 5a_{n-1} - 6a_{n-2}$. A **closed form** gives $a_n$ directly from $n$, like $a_n = 2 \cdot 3^n - 2^n$.
**Solving** a recurrence means finding a closed form for it. This lesson handles **linear recurrences with constant
coefficients**: each term is a fixed multiple of the previous term, plus a fixed multiple of the one before (plus,
at first order, a constant).

### First order: a constant added

The simplest case, $a_n = r\,a_{n-1}$, is a geometric sequence: $a_n = a_0 r^n$. Now add a constant:
$a_n = p\,a_{n-1} + q$ with $p \ne 1$.

The trick is to find the **fixed point**: the number $L$ that the rule leaves unchanged, $L = pL + q$, so
$L = \frac{q}{1 - p}$. Subtract $L = pL + q$ from $a_n = p\,a_{n-1} + q$:

$$a_n - L = p\,(a_{n-1} - L).$$

So the **distance from $L$** forms a geometric sequence with ratio $p$, and

$$a_n = L + (a_0 - L)\,p^n.$$

**Example: the Tower of Hanoi.** Moving a tower of $n$ discs takes $h_n = 2h_{n-1} + 1$ moves (move the top $n - 1$
discs away, move the biggest disc, move the $n - 1$ back on top), with $h_1 = 1$. The fixed point solves $L = 2L + 1$,
so $L = -1$. Then $h_n + 1 = 2(h_{n-1} + 1)$: the numbers $h_n + 1$ double each time, starting from $h_1 + 1 = 2$. So
$h_n + 1 = 2^n$ and $h_n = 2^n - 1$. (You can check this by induction, as in lesson 1.)

### Second order: try a power

Now $a_n = p\,a_{n-1} + q\,a_{n-2}$. Geometric sequences solved the first-order case, so try a geometric sequence
again: **guess $a_n = r^n$** for some number $r \ne 0$. Put it in:

$$r^n = p\,r^{n-1} + q\,r^{n-2}.$$

Divide by $r^{n-2}$:

$$r^2 = pr + q, \qquad\text{that is}\qquad r^2 - pr - q = 0.$$

This quadratic is called the **characteristic equation** of the recurrence. Each of its roots gives a geometric
sequence that obeys the rule. For $a_n = 5a_{n-1} - 6a_{n-2}$ it is $r^2 - 5r + 6 = 0$, which factors as
$(r - 2)(r - 3) = 0$. So $2^n$ and $3^n$ both obey the rule. Check $3^n$: $5 \cdot 3^{n-1} - 6 \cdot 3^{n-2} = 3^{n-2}(15 - 6) = 9 \cdot 3^{n-2} = 3^n$. ✓

<figure class="sketch"><span class="ai-tag">AI-created</span><svg viewBox="0 0 640 400" role="img" aria-labelledby="sk-m-recur-t"><title id="sk-m-recur-t">The terms 1, 4, 14, 46, 146 drawn as bars, each equal to 2 times 3 to the n with 2 to the n taken away</title><defs><filter id="sk-m-recur-pen"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="3.2"/></filter><filter id="sk-m-recur-paper"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="7"/><feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 .10 0"/></filter><pattern id="sk-m-recur-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="7" stroke="#8a4a2a" stroke-width="1.1" opacity=".55"/></pattern><pattern id="sk-m-recur-dots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r="1" fill="#8a4a2a" opacity=".5"/><circle cx="6.5" cy="7" r=".8" fill="#8a4a2a" opacity=".4"/></pattern><marker id="sk-m-recur-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L9 5L1 9" fill="none" stroke="#3a2a1e" stroke-width="1.6" stroke-linecap="round"/></marker></defs><rect width="640" height="400" filter="url(#sk-m-recur-paper)"/><g filter="url(#sk-m-recur-pen)"><text x="30" y="44" class="h">aₙ = 2·3ⁿ − 2ⁿ</text><text x="40" y="102" class="l">a₀</text><path class="p gold" d="M90 80 L92.4 80 L92.4 110 L90 110Z"/><path class="p dash" d="M92.4 80 L94.8 80 L94.8 110 L92.4 110"/><text x="104.8" y="102" class="s">2 − 1 = 1</text><text x="40" y="158" class="l">a₁</text><path class="p gold" d="M90 136 L99.6 136 L99.6 166 L90 166Z"/><path class="p dash" d="M99.6 136 L104.4 136 L104.4 166 L99.6 166"/><text x="114.4" y="158" class="s">6 − 2 = 4</text><text x="40" y="214" class="l">a₂</text><path class="p gold" d="M90 192 L123.6 192 L123.6 222 L90 222Z"/><path class="p dash" d="M123.6 192 L133.2 192 L133.2 222 L123.6 222"/><text x="143.2" y="214" class="s">18 − 4 = 14</text><text x="40" y="270" class="l">a₃</text><path class="p gold" d="M90 248 L200.39999999999998 248 L200.39999999999998 278 L90 278Z"/><path class="p dash" d="M200.39999999999998 248 L219.6 248 L219.6 278 L200.39999999999998 278"/><text x="229.6" y="270" class="s">54 − 8 = 46</text><text x="40" y="326" class="l">a₄</text><path class="p gold" d="M90 304 L440.4 304 L440.4 334 L90 334Z"/><path class="p dash" d="M440.4 304 L478.8 304 L478.8 334 L440.4 334"/><text x="488.8" y="326" class="s">162 − 16 = 146</text><text x="30" y="384" class="s">The rule aₙ = 5aₙ₋₁ − 6aₙ₋₂ hides two powers, 3ⁿ and 2ⁿ: 3 + 2 = 5 and 3 × 2 = 6.</text></g></svg><figcaption>Sketched for this page. Bar lengths to scale; the dashed ends are the 2ⁿ taken away.</figcaption></figure>

### Mixing solutions

Here is the key fact. If $x_n$ and $y_n$ both obey $a_n = p\,a_{n-1} + q\,a_{n-2}$, then so does $A x_n + B y_n$ for
any numbers $A$ and $B$:

$$p(Ax_{n-1} + By_{n-1}) + q(Ax_{n-2} + By_{n-2}) = A(p\,x_{n-1} + q\,x_{n-2}) + B(p\,y_{n-1} + q\,y_{n-2}) = Ax_n + By_n.$$

(That is what **linear** means: solutions can be scaled and added.) So $a_n = A \cdot 2^n + B \cdot 3^n$ obeys the rule
for every $A$ and $B$. Now choose $A$ and $B$ to match the start:

- $n = 0$: $A + B = 1$.
- $n = 1$: $2A + 3B = 4$.

Subtract twice the first from the second: $B = 2$, then $A = -1$. So $a_n = -2^n + 2 \cdot 3^n$, the formula from the
start.

### Why this gives the only answer

A second-order recurrence is completely decided by its first two terms: once $a_0$ and $a_1$ are fixed, the rule fixes
$a_2$, then $a_3$, and so on (strong induction, if you want it formally). Our formula obeys the rule **and** has the
right $a_0$ and $a_1$, so it must agree with the sequence at every $n$. As long as the characteristic equation has two
**different** roots $r_1$ and $r_2$, the two equations $A + B = a_0$ and $Ar_1 + Br_2 = a_1$ can always be solved, so
the method always works:

$$\text{if } r^2 = pr + q \text{ has different roots } r_1, r_2, \text{ then } a_n = A\,r_1^{\,n} + B\,r_2^{\,n}.$$

### A repeated root

If the characteristic equation has only one root (a **repeated root**), we need a second solution. For
$a_n = 4a_{n-1} - 4a_{n-2}$, the equation is $r^2 - 4r + 4 = (r - 2)^2 = 0$. One solution is $2^n$. The other turns
out to be $n \cdot 2^n$. Check:

$$4(n - 1)2^{n-1} - 4(n - 2)2^{n-2} = 2^n\bigl[2(n - 1) - (n - 2)\bigr] = 2^n \cdot n. \ ✓$$

So the general solution is $a_n = (A + Bn)\,2^n$, and again $A$ and $B$ come from the first two terms.

## Worked examples

**1. Fibonacci, derived: Binet's formula.** Solve $F_n = F_{n-1} + F_{n-2}$ with $F_0 = 0$, $F_1 = 1$.

- Characteristic equation: $r^2 = r + 1$, that is $r^2 - r - 1 = 0$. The roots are
  $\varphi = \frac{1 + \sqrt5}{2}$ and $\psi = \frac{1 - \sqrt5}{2}$ (the golden ratio and its partner from
  [level 7](../level-7/04-golden-ratio.md)).
- General solution: $F_n = A\varphi^n + B\psi^n$.
- $n = 0$: $A + B = 0$, so $B = -A$.
- $n = 1$: $A\varphi + B\psi = A(\varphi - \psi) = 1$. Since $\varphi - \psi = \sqrt5$, $A = \frac{1}{\sqrt5}$ and
  $B = -\frac{1}{\sqrt5}$.

$$F_n = \frac{\varphi^n - \psi^n}{\sqrt5}.$$

That is Binet's formula, now derived rather than pulled out of a hat. It also explains why the ratios approach
$\varphi$: since $|\psi| < 1$, the $\psi^n$ part fades away and $F_n$ behaves like $\frac{\varphi^n}{\sqrt5}$.

**2. A rule from level 6.** Solve $t_n = 3t_{n-1} - 1$ with $t_1 = 2$ (terms $2, 5, 14, 41, 122, \ldots$).

Fixed point: $L = 3L - 1$, so $L = \frac12$. Then $t_n - \frac12 = 3\left(t_{n-1} - \frac12\right)$, and
$t_1 - \frac12 = \frac32$. So $t_n - \frac12 = \frac32 \cdot 3^{\,n-1} = \frac{3^n}{2}$, and

$$t_n = \frac{3^n + 1}{2}.$$

Check: $t_3 = \frac{27 + 1}{2} = 14$. ✓

**3. A repeated root.** Solve $a_n = 4a_{n-1} - 4a_{n-2}$ with $a_0 = 1$, $a_1 = 4$.

General solution $(A + Bn)2^n$. $n = 0$: $A = 1$. $n = 1$: $2(A + B) = 4$, so $B = 1$. So $a_n = (n + 1)2^n$.
Check: the rule gives $a_2 = 16 - 4 = 12$, and the formula gives $3 \times 4 = 12$. ✓

**4. Which root wins.** In example 1 of the lesson, $a_n = 2 \cdot 3^n - 2^n$. For large $n$, $3^n$ is far bigger
than $2^n$ (their ratio $\left(\frac32\right)^n$ grows without end), so $a_n \approx 2 \cdot 3^n$ and
$\frac{a_{n+1}}{a_n} \to 3$. In general, the root of larger size **dominates**, and the ratios of terms close in on it,
just as the Fibonacci ratios close in on $\varphi$. For $a_{100}$: about $2 \times 3^{100} \approx 1.03 \times 10^{48}$.

## Try it

1. Solve $a_n = a_{n-1} + 6a_{n-2}$ with $a_0 = 1$, $a_1 = 8$.
2. Solve $a_n = 2a_{n-1} + 3$ with $a_0 = 1$.
3. The Lucas numbers are $L_0 = 2$, $L_1 = 1$, $L_n = L_{n-1} + L_{n-2}$. Find a closed form.
4. Solve $a_n = 6a_{n-1} - 9a_{n-2}$ with $a_0 = 1$, $a_1 = 6$.
5. Solve $a_n = 3a_{n-1} - 2a_{n-2}$ with $a_0 = 2$, $a_1 = 3$. What do the ratios $\frac{a_{n+1}}{a_n}$ approach?
6. A 2 by $n$ strip is to be covered with 2 by 1 dominoes. Let $T_n$ be the number of ways. Explain why
   $T_n = T_{n-1} + T_{n-2}$, find $T_1$ and $T_2$, and connect $T_n$ to the Fibonacci numbers.
7. Let $s_n$ be the number of strings of 0s and 1s of length $n$ with no two 1s next to each other. Find a recurrence
   for $s_n$ and the first few values.
8. Use Binet's formula to explain why $F_n$ is always the whole number nearest to $\frac{\varphi^n}{\sqrt5}$.

??? note "Answers"
    1. $r^2 - r - 6 = (r - 3)(r + 2) = 0$, so $a_n = A \cdot 3^n + B(-2)^n$. $A + B = 1$ and $3A - 2B = 8$ give
       $5A = 10$, $A = 2$, $B = -1$: **$a_n = 2 \cdot 3^n - (-2)^n$**. Check: rule gives $a_2 = 8 + 6 = 14$; formula
       $18 - 4 = 14$. ✓
    2. $L = 2L + 3$ gives $L = -3$. $a_n + 3 = 2(a_{n-1} + 3)$ with $a_0 + 3 = 4$, so $a_n + 3 = 4 \cdot 2^n$ and
       **$a_n = 2^{n+2} - 3$**. Check: $a_1 = 2 + 3 = 5 = 8 - 3$. ✓
    3. Same characteristic equation as Fibonacci: $L_n = A\varphi^n + B\psi^n$. $A + B = 2$ and $A\varphi + B\psi = 1$.
       Since $\varphi + \psi = 1$, $A = B = 1$ works: **$L_n = \varphi^n + \psi^n$**. (Check: $\varphi^2 + \psi^2 = (\varphi + 1) + (\psi + 1) = 3$. ✓)
    4. $r^2 - 6r + 9 = (r - 3)^2$, a repeated root, so $a_n = (A + Bn)3^n$. $A = 1$, and $3(1 + B) = 6$ gives $B = 1$:
       **$a_n = (n + 1)3^n$**. Check: $a_2 = 36 - 9 = 27 = 3 \times 9$. ✓
    5. $r^2 - 3r + 2 = (r - 1)(r - 2)$, so $a_n = A + B \cdot 2^n$. $A + B = 2$ and $A + 2B = 3$ give $B = 1$, $A = 1$:
       **$a_n = 2^n + 1$** ($2, 3, 5, 9, 17, \ldots$). The larger root 2 dominates, so the ratios approach **2**.
    6. Look at the left end of the strip. Either one domino stands upright there, leaving a 2 by $(n - 1)$ strip
       ($T_{n-1}$ ways), or two dominoes lie flat, one above the other, leaving a 2 by $(n - 2)$ strip ($T_{n-2}$ ways).
       So $T_n = T_{n-1} + T_{n-2}$, with $T_1 = 1$ and $T_2 = 2$. The values $1, 2, 3, 5, 8, \ldots$ are
       **$T_n = F_{n+1}$**.
    7. A good string of length $n$ either ends in 0 (and the first $n - 1$ characters can be any good string:
       $s_{n-1}$ ways) or ends in 1, in which case the character before must be 0, and the first $n - 2$ can be any
       good string ($s_{n-2}$ ways). So $s_n = s_{n-1} + s_{n-2}$, with $s_1 = 2$ (0, 1) and $s_2 = 3$ (00, 01, 10).
       Values: $2, 3, 5, 8, 13, 21, \ldots$, so $s_n = F_{n+2}$.
    8. $F_n - \frac{\varphi^n}{\sqrt5} = -\frac{\psi^n}{\sqrt5}$, and $\left|\frac{\psi^n}{\sqrt5}\right| \le \frac{|\psi|}{\sqrt5} \approx 0.276 < \frac12$
       for $n \ge 1$ (and $\frac{1}{\sqrt5} \approx 0.447$ for $n = 0$). A whole number less than $\frac12$ away from
       $\frac{\varphi^n}{\sqrt5}$ must be the nearest whole number to it.

## Common mistake

**Fitting the constants to the wrong starting index.** If the sequence starts at $a_1$, use $n = 1$ and $n = 2$ in the
equations for $A$ and $B$, not $n = 0$ and $n = 1$. Check your final formula on the first three terms.

**Using $A r^n + B r^n$ for a repeated root.** That is just $(A + B)r^n$, one constant in disguise, and it cannot match
two starting values. The second solution is $n r^n$.

## Where it leads

- Back: [Strong induction](03-strong-induction.md) · Next: [Iteration and fixed points](05-iteration-fixed-points.md).
- [Level 8 page](index.md) · [Patterns topic page](../index.md)
- Recurrences are a main tool for counting (tilings, strings, paths): [Counting](../../counting/index.md).
- Solving the characteristic quadratic: [Algebra](../../algebra/index.md).
- The same "try an exponential" idea solves differential equations, the continuous cousins of recurrences:
  [Change](../../change/index.md), and the exponential function in [MAT137 Unit 4](../../../uoft/MAT137/unit04.md).
