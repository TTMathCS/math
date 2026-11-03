# 8. The integral

*Chapter 1 asked two old questions: how fast is something changing at an instant, and how much area lies under a
curve. Chapters 2 to 7 answered the first one completely. This chapter answers the second, and it has to start
from the beginning: what does "the area under a curve" even mean, when the curve is not made of straight pieces?
The answer, worked out by Cauchy, Riemann and Darboux in the nineteenth century, is to trap the area between sums
of rectangles that lie below the curve and sums that lie above it, and to call the function integrable when the
two can be squeezed together. You will compute areas from the definition, prove the basic properties of the
integral, prove that every monotone function and every continuous function is integrable, and meet a function so
badly behaved that it has no integral at all.*

!!! abstract "In this chapter"
    **You will learn:**

    - how Riemann sums approximate an area, a distance or any accumulated total
    - the precise definition of the integral through upper and lower (Darboux) sums, and the Riemann criterion
    - the basic properties: linearity, order, additivity over intervals, the mean value theorem for integrals
    - a proof that monotone functions are integrable, and a proof for continuous functions (given uniform continuity)
    - why changing a function at a few points does not change its integral
    - Dirichlet's function, which is not integrable, and Thomae's function, which surprisingly is

    **You need:** [Chapter 1](01-Rates-and-Areas.md) (areas by rectangles and Archimedes' parabola),
    [Chapter 2](02-Limits.md) (limits and the $\varepsilon$ language) and [Chapter 3](03-Continuity.md) (the extreme
    value theorem). Sums and sigma notation from [Algebra Chapter 8](../algebra/08-Sequences-Series-and-Induction.md).
    Gentler versions on the Topics shelf:
    [Area under a speed-time graph](../../topics/change/level-5/06-area-speed-time.md) and
    [Area and the fundamental theorem](../../topics/change/level-8/06-area-fundamental-theorem.md).

    **Levels:** 8.1 is intermediate; 8.2 and 8.3 are intermediate to advanced (definitions and proofs at first-year
    university level); 8.4 and 8.5 are advanced.

## 8.1 Riemann sums

### Distance from speed

A stone is dropped on Mars. Its speed after $t$ seconds is $v(t) = 3.71t$ metres per second (Chapter 7.6). How far does
it fall in the first 4 seconds? If the speed were constant, distance would be speed times time. It is not constant, but
over a short stretch of time it hardly changes. So cut $[0, 4]$ into four one-second pieces and pretend the speed is
constant on each.

- Using the speed at the **start** of each second (0, 3.71, 7.42, 11.13 m/s): distance $\approx (0 + 3.71 + 7.42 + 11.13)\times 1 = 22.26$ m.
  Since the stone is speeding up, this is too small.
- Using the speed at the **end** of each second (3.71, 7.42, 11.13, 14.84 m/s): $\approx 37.10$ m, too big.

The true distance is between 22.26 and 37.10 m. From Chapter 7, $s(t) = \frac{1}{2}(3.71)t^2$, so the true value is $\frac{1}{2}(3.71)(16) = 29.68$ m.
Cutting time into smaller pieces squeezes the two estimates together. On a graph of $v$ against $t$, each product (speed)
$\times$ (time) is the area of a rectangle, so the distance is the **area under the speed graph**. That is the link between
the two old questions, and Chapter 9 will make it a theorem.

### Area under $y = x^2$

Archimedes found the area of a parabolic segment by a clever geometric argument (Chapter 1.4). Here is the rectangle method,
which works for any function. Cut $[0, 1]$ into $n$ equal pieces of width $\frac{1}{n}$, with endpoints $x_k = \frac{k}{n}$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 225" role="img" aria-label="The curve y equals x squared on 0 to 1, with five lower rectangles (green, under the curve, heights at left endpoints) and five upper rectangles (orange outlines, above the curve, heights at right endpoints). The area lies between the two totals, 0.24 and 0.44">
  <rect x="96.0" y="192.8" width="56" height="7.2" fill="#7ccf9a" fill-opacity="0.6"/>
  <rect x="152.0" y="171.2" width="56" height="28.8" fill="#7ccf9a" fill-opacity="0.6"/>
  <rect x="208.0" y="135.2" width="56" height="64.8" fill="#7ccf9a" fill-opacity="0.6"/>
  <rect x="264.0" y="84.8" width="56" height="115.2" fill="#7ccf9a" fill-opacity="0.6"/>
  <rect x="40.0" y="192.8" width="56" height="7.2" fill="none" stroke="#eea66f" stroke-width="1.6"/>
  <rect x="96.0" y="171.2" width="56" height="28.8" fill="none" stroke="#eea66f" stroke-width="1.6"/>
  <rect x="152.0" y="135.2" width="56" height="64.8" fill="none" stroke="#eea66f" stroke-width="1.6"/>
  <rect x="208.0" y="84.8" width="56" height="115.2" fill="none" stroke="#eea66f" stroke-width="1.6"/>
  <rect x="264.0" y="20.0" width="56" height="180.0" fill="none" stroke="#eea66f" stroke-width="1.6"/>
  <polyline fill="none" stroke="currentColor" stroke-width="2.2" points="40.0,200.0 47.0,199.9 54.0,199.6 61.0,199.0 68.0,198.2 75.0,197.2 82.0,195.9 89.0,194.5 96.0,192.8 103.0,190.9 110.0,188.8 117.0,186.4 124.0,183.8 131.0,181.0 138.0,177.9 145.0,174.7 152.0,171.2 159.0,167.5 166.0,163.6 173.0,159.4 180.0,155.0 187.0,150.4 194.0,145.5 201.0,140.5 208.0,135.2 215.0,129.7 222.0,123.9 229.0,118.0 236.0,111.8 243.0,105.4 250.0,98.8 257.0,91.9 264.0,84.8 271.0,77.5 278.0,70.0 285.0,62.2 292.0,54.2 299.0,46.0 306.0,37.6 313.0,28.9 320.0,20.0"/>
  <line x1="30" y1="200" x2="345" y2="200" stroke="currentColor" stroke-width="1.2"/>
  <line x1="40" y1="10" x2="40" y2="210" stroke="currentColor" stroke-width="1.2"/>
  <text x="40" y="216" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <text x="320" y="216" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <text x="33" y="24" font-size="11" text-anchor="end" fill="currentColor">1</text>
  <text x="60" y="60" font-size="12" fill="currentColor">y = x²</text>
  <text x="60" y="80" font-size="11" fill="#7ccf9a">lower sum 0.24</text>
  <text x="60" y="96" font-size="11" fill="#eea66f">upper sum 0.44</text>
</svg>
</div>

Since $x^2$ is increasing on $[0, 1]$, its smallest value on $[x_{k-1}, x_k]$ is at the left end and its largest at the right.
The total of the rectangles below the curve and above it are

$$
L_n = \sum_{k=1}^{n}\left(\frac{k-1}{n}\right)^2\frac{1}{n} = \frac{1}{n^3}\sum_{j=0}^{n-1}j^2, \qquad U_n = \sum_{k=1}^{n}\left(\frac{k}{n}\right)^2\frac{1}{n} = \frac{1}{n^3}\sum_{k=1}^{n}k^2 .
$$

The sum of the first $n$ squares is $\frac{n(n+1)(2n+1)}{6}$ (proved by induction in [Algebra Chapter 8](../algebra/08-Sequences-Series-and-Induction.md)).
So

$$
U_n = \frac{n(n+1)(2n+1)}{6n^3} = \frac{1}{6}\left(1 + \frac{1}{n}\right)\left(2 + \frac{1}{n}\right), \qquad L_n = U_n - \frac{1}{n} ,
$$

because the two sums differ only by the last rectangle, of height 1 and width $\frac{1}{n}$. As $n \to \infty$, $U_n \to \frac{2}{6} = \frac{1}{3}$ and
$L_n \to \frac{1}{3}$.

| $n$ | $L_n$ | $U_n$ |
|---|---|---|
| 5 | 0.24 | 0.44 |
| 10 | 0.285 | 0.385 |
| 100 | 0.32835 | 0.33835 |
| 1000 | 0.3328335 | 0.3338335 |

The area is trapped between $L_n$ and $U_n$ for every $n$, and the only number between all of them is $\frac{1}{3}$. Archimedes'
answer, with no cleverness needed.

### The general Riemann sum

Let $f$ be a function on $[a, b]$.

- A **partition** $P$ of $[a, b]$ is a finite list of points $a = x_0 < x_1 < \cdots < x_n = b$. It cuts $[a, b]$ into $n$
  subintervals $[x_{k-1}, x_k]$ of widths $\Delta x_k = x_k - x_{k-1}$. The largest width is the **mesh** of $P$, written $\|P\|$.
- A **tag** is a choice of one point $t_k$ in each subinterval.
- The **Riemann sum** is

$$
S(f, P, t) = \sum_{k=1}^{n}f(t_k)\,\Delta x_k .
$$

Each term is the signed area of a rectangle: positive where $f > 0$, negative where $f < 0$. Left sums take $t_k = x_{k-1}$,
right sums $t_k = x_k$, midpoint sums the middle. The hope is that as the mesh shrinks to 0, all Riemann sums approach one
number, whatever tags are chosen. When they do, that number is the integral.

!!! tip "Try it in Python"
    ```python
    import math

    def riemann(f, a, b, n, where=0.5):        # where=0 left, 1 right, 0.5 midpoint
        h = (b - a) / n
        return sum(f(a + (k + where) * h) for k in range(n)) * h

    print(riemann(lambda x: x * x, 0, 1, 100, 0))      # 0.32835
    print(riemann(lambda x: x * x, 0, 1, 100, 0.5))    # 0.333325
    print(riemann(lambda x: 1 / x, 1, 2, 1000))        # 0.69314... (ln 2, see Chapter 9)
    ```

    Midpoint sums are usually much better than left or right sums; Chapter 10 explains why and gives the error bounds.

## 8.2 The definite integral: upper and lower sums

*Level: intermediate to advanced.* "All Riemann sums approach one number as the mesh shrinks" is awkward to work with,
because there are infinitely many tag choices. Gaston Darboux found a cleaner route: instead of sample values, use the
largest and smallest values on each piece. Then there is just one upper sum and one lower sum for each partition.

Throughout, $f$ is **bounded** on $[a, b]$: there is $B$ with $|f(x)| \le B$ for all $x$. (An unbounded function cannot be
squeezed between rectangles of finite height; Chapter 11 handles it as an improper integral.)

A small piece of vocabulary first. A function may have no largest value on an interval (for example $x$ on $[0, 1)$), but it
always has a **supremum**: the least number that is $\ge$ all its values (here 1). Similarly the **infimum** is the greatest
number $\le$ all its values. That these exist for every bounded set of real numbers is the completeness of the real numbers,
which Chapter 18 studies; for a continuous function on a closed interval they are simply the maximum and minimum.

!!! note "Definition (upper and lower sums)"
    For a partition $P$, on the $k$-th subinterval let $M_k = \sup\{f(x) : x_{k-1} \le x \le x_k\}$ and
    $m_k = \inf\{f(x) : x_{k-1} \le x \le x_k\}$. The **upper sum** and **lower sum** are

    $$
    U(f, P) = \sum_{k=1}^{n}M_k\,\Delta x_k, \qquad L(f, P) = \sum_{k=1}^{n}m_k\,\Delta x_k .
    $$

Clearly $L(f, P) \le S(f, P, t) \le U(f, P)$ for every choice of tags, since $m_k \le f(t_k) \le M_k$. Two lemmas say that upper
sums are always above lower sums, even for *different* partitions.

A partition $Q$ is a **refinement** of $P$ if it contains all the points of $P$ (and maybe more).

!!! note "Lemma 1 (refining helps)"
    If $Q$ refines $P$, then $L(f, P) \le L(f, Q) \le U(f, Q) \le U(f, P)$.

*Proof.* It is enough to add one point, since any refinement is reached by adding points one at a time. Say we add $y$
inside $[x_{k-1}, x_k]$. In the upper sum, the term $M_k(x_k - x_{k-1})$ is replaced by $M'(y - x_{k-1}) + M''(x_k - y)$, where
$M'$ and $M''$ are the suprema over the two halves. Each half is part of the whole subinterval, so $M' \le M_k$ and $M'' \le M_k$, and
the new terms total at most $M_k(x_k - x_{k-1})$. So the upper sum can only go down. The same argument with infima shows the lower
sum can only go up. The middle inequality is $m_k \le M_k$. $\square$

!!! note "Lemma 2 (every lower sum is below every upper sum)"
    For any two partitions $P_1$ and $P_2$, $L(f, P_1) \le U(f, P_2)$.

*Proof.* Let $Q$ be the **common refinement**, containing the points of both. By Lemma 1,
$L(f, P_1) \le L(f, Q) \le U(f, Q) \le U(f, P_2)$. $\square$

So the set of all lower sums lies entirely to the left of the set of all upper sums on the number line. Define the **lower
integral** as the supremum of all lower sums and the **upper integral** as the infimum of all upper sums:

$$
\underline{\int_a^b} f = \sup_P L(f, P), \qquad \overline{\int_a^b} f = \inf_P U(f, P) .
$$

By Lemma 2, the lower integral is $\le$ the upper integral. The area, if it means anything, must be between them.

!!! note "Definition (the Riemann integral)"
    A bounded function $f$ on $[a, b]$ is **integrable** if its lower and upper integrals are equal. Their common value is
    the **integral** of $f$ from $a$ to $b$, written

    $$
    \int_a^b f(x)\,dx .
    $$

The notation is Leibniz's: $\int$ is a long S for "sum" (*summa*), and $f(x)\,dx$ is the area of a thin strip of height $f(x)$ and
width $dx$. The letter $x$ is a **dummy variable**: $\int_a^b f(x)\,dx$, $\int_a^b f(t)\,dt$ and $\int_a^b f(u)\,du$ are the same number.
The numbers $a$ and $b$ are the **limits of integration** (the word "limit" here just means "end", not a limit in the sense of
Chapter 2).

In practice we use this test:

!!! note "Riemann's criterion"
    A bounded $f$ is integrable on $[a, b]$ if and only if for every $\varepsilon > 0$ there is a partition $P$ with

    $$
    U(f, P) - L(f, P) < \varepsilon .
    $$

*Proof.* Suppose for every $\varepsilon$ such a $P$ exists. Since $L(f, P) \le \underline{\int} f \le \overline{\int} f \le U(f, P)$, the gap between the
upper and lower integrals is less than $\varepsilon$, for every $\varepsilon > 0$, so it is 0.

Conversely, suppose the two integrals are equal to $I$. Given $\varepsilon$, by the definitions of sup and inf there are partitions
$P_1$, $P_2$ with $L(f, P_1) > I - \frac{\varepsilon}{2}$ and $U(f, P_2) < I + \frac{\varepsilon}{2}$. Their common refinement $P$ does at least as well
for both (Lemma 1), so $U(f, P) - L(f, P) < \varepsilon$. $\square$

The gap $U - L = \sum(M_k - m_k)\Delta x_k$ is the total area of the little boxes in which the graph is trapped. A function is
integrable when these boxes can be made as thin in total as we like.

**Example 1.** $\int_0^1 x^2\,dx = \frac{1}{3}$. With the equal partition $P_n$, we found $U - L = \frac{1}{n}$, which is less than $\varepsilon$
once $n > 1/\varepsilon$: so $x^2$ is integrable. And since $L_n \le \frac{1}{3} \le U_n$ for every $n$ while both tend to $\frac{1}{3}$, the
integral, which is also between every $L_n$ and $U_n$, must be $\frac{1}{3}$. The same computation on $[0, b]$ (widths $\frac{b}{n}$) gives

$$
\int_0^b x^2\,dx = \frac{b^3}{3} .
$$

**Example 2.** $\int_a^b c\,dx = c(b - a)$: for a constant, every upper and lower sum equals $c(b - a)$.

**Example 3.** $\int_0^b x\,dx = \frac{b^2}{2}$. With $n$ equal pieces, $U_n = \sum_{k=1}^{n}\frac{kb}{n}\cdot\frac{b}{n} = \frac{b^2}{n^2}\cdot\frac{n(n+1)}{2} \to \frac{b^2}{2}$ and
$L_n = U_n - \frac{b^2}{n} \to \frac{b^2}{2}$. It is the area of a triangle with base $b$ and height $b$, as it should be.

**Example 4: the exponential.** $\int_0^1 e^x\,dx$. With $n$ equal pieces, the lower sum uses left endpoints:

$$
L_n = \frac{1}{n}\sum_{k=0}^{n-1}e^{k/n} = \frac{1}{n}\cdot\frac{e - 1}{e^{1/n} - 1} = (e - 1)\cdot\frac{1/n}{e^{1/n} - 1} ,
$$

summing the geometric series with ratio $e^{1/n}$. With $h = \frac{1}{n} \to 0$, the last factor is $\frac{h}{e^h - 1} \to 1$ (Chapter 5.3, where
$e$ was defined by $\frac{e^h - 1}{h} \to 1$). So $L_n \to e - 1$. Also $U_n = e^{1/n}L_n$ (each right endpoint value is $e^{1/n}$ times the left
one), which tends to the same limit. Hence

$$
\int_0^1 e^x\,dx = e - 1 \approx 1.71828 .
$$

(With $n = 100$, $L_{100} = 1.70970\ldots$) Notice what has happened: $e^x$ is its own derivative, and its integral from 0 to 1 is
$e^1 - e^0$. That is not a coincidence, and Chapter 9 explains it.

### Riemann sums and Darboux sums agree

We now have two possible definitions: Riemann's (all tagged sums converge as the mesh goes to 0) and Darboux's (upper and lower
integrals agree). They give the same integrable functions and the same integrals. One direction is easy: every Riemann sum lies
between $L(f, P)$ and $U(f, P)$, so if those two squeeze together, so do all the Riemann sums. The other direction, that Darboux
integrability makes the sums converge for *every* partition with small enough mesh (not just some well-chosen ones), needs a careful
counting argument; it is proved, for instance, in Bartle and Sherbert's *Introduction to Real Analysis* (see Further reading). We will
use whichever form is convenient. In particular, if $f$ is integrable, the integral is the limit of the sums with $n$ equal pieces and
any tags:

$$
\int_a^b f(x)\,dx = \lim_{n \to \infty}\sum_{k=1}^{n}f(t_k)\,\frac{b - a}{n} .
$$

## 8.3 Properties of the integral

All the following hold for integrable functions $f$ and $g$ on $[a, b]$ and constants $c$.

**1. Linearity.** $f + g$ and $cf$ are integrable, and

$$
\int_a^b (f + g) = \int_a^b f + \int_a^b g, \qquad \int_a^b cf = c\int_a^b f .
$$

*Proof of the sum rule.* On any subinterval, $\sup(f + g) \le \sup f + \sup g$ (each value $f(x) + g(x)$ is at most $\sup f + \sup g$),
and similarly $\inf(f + g) \ge \inf f + \inf g$. So for every partition,

$$
L(f, P) + L(g, P) \le L(f + g, P) \le U(f + g, P) \le U(f, P) + U(g, P) .
$$

Given $\varepsilon$, choose partitions with $U(f, P) - L(f, P) < \frac{\varepsilon}{2}$ and the same for $g$; their common refinement works for both
(Lemma 1). Then $U(f + g, P) - L(f + g, P) < \varepsilon$, so $f + g$ is integrable by Riemann's criterion. Its integral and
$\int f + \int g$ both lie between $L(f, P) + L(g, P)$ and $U(f, P) + U(g, P)$, an interval of length less than $\varepsilon$; so they differ by
less than $\varepsilon$, for every $\varepsilon$, and are equal. For $cf$: if $c \ge 0$, sups and infs are multiplied by $c$; if $c < 0$, multiplying by
$c$ turns sups into $c$ times infs and vice versa, and the same squeeze works. $\square$

**2. Order.** If $f(x) \le g(x)$ for all $x$, then $\int_a^b f \le \int_a^b g$. *Proof:* every lower sum of $f$ is at most the corresponding
lower sum of $g$, so the supremum is too. In particular, if $f \ge 0$ then $\int_a^b f \ge 0$.

**3. Bounds.** If $m \le f(x) \le M$ on $[a, b]$, then

$$
m(b - a) \le \int_a^b f(x)\,dx \le M(b - a) .
$$

This is property 2 with constant functions (Example 2). For instance, on $[0, 1]$, $\frac{1}{2} \le \frac{1}{1 + x^2} \le 1$, so
$\frac{1}{2} \le \int_0^1\frac{dx}{1 + x^2} \le 1$. (The true value is $\frac{\pi}{4} \approx 0.785$, from $\arctan$; see Chapter 9.)

**4. Additivity over intervals.** If $a < c < b$, then $f$ is integrable on $[a, b]$ if and only if it is integrable on $[a, c]$ and on
$[c, b]$, and then

$$
\int_a^b f = \int_a^c f + \int_c^b f .
$$

*Proof sketch.* A partition of $[a, b]$ that contains $c$ is a partition of $[a, c]$ joined to one of $[c, b]$, and its upper and lower sums are
the sums of the two halves. Adding $c$ to any partition only improves it (Lemma 1), so it is enough to consider such partitions, and the
statement follows from Riemann's criterion. $\square$

We extend the notation so that additivity holds for any order of $a, b, c$: define $\int_a^a f = 0$ and $\int_b^a f = -\int_a^b f$. Going
"backwards" along the axis counts area negatively.

**5. Absolute values.** If $f$ is integrable, so is $|f|$, and

$$
\left|\int_a^b f\right| \le \int_a^b |f| .
$$

*Proof.* For $x, y$ in a subinterval, $\bigl||f(x)| - |f(y)|\bigr| \le |f(x) - f(y)| \le M_k - m_k$. So the oscillation of $|f|$ on each piece is at most that
of $f$, and $U(|f|, P) - L(|f|, P) \le U(f, P) - L(f, P)$: Riemann's criterion for $f$ gives it for $|f|$. Then $-|f| \le f \le |f|$ and
property 2 give $-\int|f| \le \int f \le \int|f|$. $\square$

(Products are integrable too: if $f$ and $g$ are, so is $fg$. The proof uses $fg = \frac{1}{4}\bigl((f + g)^2 - (f - g)^2\bigr)$ and a check that
squares of integrable functions are integrable; see the books by Spivak or Abbott in Further reading.)

**6. Signed area.** Where $f < 0$, the rectangles have negative height, so $\int_a^b f$ counts area below the axis as negative. For
example $\int_{-1}^{1}x^3\,dx = 0$: with a partition symmetric about 0 and tags placed symmetrically, every term on the right cancels a
term on the left. To find the *total* area between the graph and the axis, integrate $|f|$.

### The mean value theorem for integrals

The **average value** of $f$ on $[a, b]$ is

$$
\bar f = \frac{1}{b - a}\int_a^b f(x)\,dx .
$$

It is the natural continuous version of "add up and divide by how many": the Riemann sum with $n$ equal pieces is
$\frac{b - a}{n}\sum f(t_k)$, so $\frac{1}{b - a}$ times it is the ordinary average of the $n$ sample values $f(t_k)$. The average speed of the
Mars stone over 4 seconds is $\frac{29.68}{4} = 7.42$ m/s.

!!! note "Mean value theorem for integrals"
    If $f$ is continuous on $[a, b]$, there is $c$ in $[a, b]$ with $f(c) = \dfrac{1}{b - a}\displaystyle\int_a^b f(x)\,dx$.

*Proof.* By the extreme value theorem, $f$ has a minimum $m$ and maximum $M$ on $[a, b]$. By property 3, the average lies between $m$ and
$M$. By the intermediate value theorem, $f$ takes every value between $m$ and $M$, so it takes the average value at some $c$. $\square$

For the stone, $v(c) = 3.71c = 7.42$ at $c = 2$ s: the average speed is reached exactly halfway, because the speed grows linearly.

## 8.4 Which functions are integrable?

*Level: advanced.* The definition is only useful if many functions satisfy it. Two large families do.

### Monotone functions

!!! note "Theorem"
    Every monotone (increasing or decreasing) function on $[a, b]$ is integrable.

*Proof.* Say $f$ is increasing (for decreasing, use $-f$). It is bounded, by $f(a)$ below and $f(b)$ above. Take $n$ equal pieces of width
$h = \frac{b - a}{n}$. On $[x_{k-1}, x_k]$ the infimum is $f(x_{k-1})$ and the supremum $f(x_k)$. So

$$
U(f, P) - L(f, P) = \sum_{k=1}^{n}\bigl(f(x_k) - f(x_{k-1})\bigr)h = h\bigl(f(b) - f(a)\bigr) = \frac{(b - a)\bigl(f(b) - f(a)\bigr)}{n} ,
$$

because the sum telescopes (each $f(x_k)$ appears once with $+$ and once with $-$, except the two ends). This is less than any given
$\varepsilon$ once $n$ is large. $\square$

Notice that no continuity was needed. An increasing function can jump, even at infinitely many points (for example at every $x = 1 - \frac{1}{n}$),
and it is still integrable. The proof also gives a practical error bound: for monotone $f$, the left and right sums with $n$ equal pieces
differ from the integral by at most $\frac{(b - a)|f(b) - f(a)|}{n}$.

### Continuous functions

The proof for continuous functions needs a stronger form of continuity. Continuity at each point says: for each $x$ and each $\varepsilon$, there
is a $\delta$ that works *at that $x$*. But the $\delta$ may need to shrink as $x$ moves; for $f(x) = 1/x$ on $(0, 1]$, the closer $x$ is to 0, the
smaller $\delta$ must be. We need one $\delta$ that works everywhere at once.

!!! note "Definition (uniform continuity)"
    $f$ is **uniformly continuous** on a set $D$ if for every $\varepsilon > 0$ there is a $\delta > 0$ such that $|f(x) - f(y)| < \varepsilon$ for
    **all** $x, y$ in $D$ with $|x - y| < \delta$.

!!! note "Theorem (Heine-Cantor)"
    A function continuous on a closed bounded interval $[a, b]$ is uniformly continuous there.

This theorem, like the extreme value theorem, depends on the completeness of the real numbers, and its proof is in
[Chapter 18](18-The-Real-Numbers.md), where we have the tools (the Bolzano-Weierstrass theorem). We use it now.

!!! note "Theorem"
    Every continuous function on $[a, b]$ is integrable.

*Proof.* $f$ is bounded, by the extreme value theorem. Let $\varepsilon > 0$. By uniform continuity there is $\delta > 0$ with
$|f(x) - f(y)| < \frac{\varepsilon}{b - a}$ whenever $|x - y| < \delta$. Take any partition $P$ with mesh less than $\delta$. On each subinterval, the
maximum $M_k$ and minimum $m_k$ are values of $f$ at two points less than $\delta$ apart (extreme value theorem again), so
$M_k - m_k < \frac{\varepsilon}{b - a}$. Therefore

$$
U(f, P) - L(f, P) = \sum_{k=1}^{n}(M_k - m_k)\Delta x_k < \frac{\varepsilon}{b - a}\sum_{k=1}^{n}\Delta x_k = \varepsilon .
$$

By Riemann's criterion, $f$ is integrable. $\square$

The proof shows more: for continuous $f$, $U - L \to 0$ for *every* sequence of partitions whose mesh tends to 0, so all Riemann sums
converge to the integral. That is the version Cauchy used in 1823.

### Changing a few values, and piecewise continuous functions

!!! note "Theorem"
    If $f$ is integrable on $[a, b]$ and $g$ differs from $f$ at only finitely many points, then $g$ is integrable and
    $\int_a^b g = \int_a^b f$.

*Proof.* Write $g = f + h$, where $h$ is zero except at finitely many points, say $N$ points, where $|h| \le K$. By linearity it is enough to
show $\int_a^b h = 0$. For a partition with mesh $\delta$, each exceptional point lies in at most two subintervals, so at most $2N$ subintervals have a
nonzero sup or inf, each at most $K$ in size. Hence $-2NK\delta \le L(h, P) \le U(h, P) \le 2NK\delta$. Letting $\delta \to 0$, both sums tend to 0, so $h$ is
integrable with integral 0. $\square$

So a single point has no area, and integrals cannot see what a function does at finitely many points. Combined with additivity (property 4),
one can show that a bounded function with finitely many discontinuities is integrable. *Sketch:* trap each bad point inside a tiny
subinterval; these contribute at most (number of bad points) $\times\,2B\,\times$ (width) to $U - L$, which is as small as we like. On the
closed intervals left between them the function is continuous, hence integrable (above), so their contribution to $U - L$ can be made small
too. Step functions, square waves and sawtooth waves are all integrable.

## 8.5 A function with no integral

Is every bounded function integrable? In 1829, Peter Gustav Lejeune Dirichlet, writing about Fourier series, described a function that
shows the answer is no:

$$
D(x) = \begin{cases} 1 & \text{if } x \text{ is rational,} \\ 0 & \text{if } x \text{ is irrational.} \end{cases}
$$

It is bounded (between 0 and 1) and impossible to draw: it jumps between 0 and 1 in every interval, however small.

!!! note "Theorem"
    Dirichlet's function is not integrable on $[0, 1]$.

*Proof.* Every interval of positive length contains both rational numbers and irrational numbers (rationals are dense, and so are the
irrationals: if $q$ is rational, $q + \frac{\sqrt 2}{n}$ is irrational and close to $q$; Chapter 18 proves density in general). So on every subinterval of
every partition, $M_k = 1$ and $m_k = 0$. Hence $U(D, P) = 1$ and $L(D, P) = 0$ for every $P$: the upper integral is 1, the lower is 0, and they
differ. $\square$

Riemann sums show the same thing: with rational tags the sum is 1, with irrational tags it is 0, however fine the partition.

Strange as it is, this function is not exotic. It is the limit of very simple functions: list the rationals in $[0, 1]$ as $q_1, q_2, q_3, \ldots$
(they can be listed, see Chapter 18.8), and let $D_n$ be 1 at $q_1, \ldots, q_n$ and 0 elsewhere. Each $D_n$ differs from 0 at only finitely
many points, so it is integrable with integral 0. And $D_n(x) \to D(x)$ for every $x$. So **a limit of integrable functions need not be
integrable**, even when the functions are bounded by 1 and all have integral 0. This weakness of Riemann's integral led to the theory of
uniform convergence (Chapter 19) and to Lebesgue's integral (Chapter 21), in which $D$ is integrable with integral 0, because the rationals,
though dense, are "only countably many" and take up no length at all.

### Thomae's function: integrable after all

Now a function that looks almost as bad. **Thomae's function** on $[0, 1]$ is

$$
T(x) = \begin{cases} \frac{1}{q} & \text{if } x = \frac{p}{q} \text{ in lowest terms, } q \ge 1, \\ 0 & \text{if } x \text{ is irrational.} \end{cases}
$$

So $T(\frac{1}{2}) = \frac{1}{2}$, $T(\frac{1}{3}) = T(\frac{2}{3}) = \frac{1}{3}$, $T(0) = T(1) = 1$, and so on. It is discontinuous at every rational (nearby irrationals
give 0), but continuous at every irrational (near an irrational, rationals with small denominators are kept at a distance, so $T$ is small).

!!! note "Theorem"
    Thomae's function is integrable on $[0, 1]$, and $\int_0^1 T(x)\,dx = 0$.

*Proof.* Every lower sum is 0, since every subinterval contains irrationals. Now let $\varepsilon > 0$. Only finitely many points of $[0, 1]$ have
$T(x) \ge \frac{\varepsilon}{2}$: they are the fractions $\frac{p}{q}$ with $q \le \frac{2}{\varepsilon}$, and there are finitely many of those; say there are $N$. Choose a
partition in which each of these $N$ points lies inside a subinterval of width less than $\frac{\varepsilon}{4N}$ (each point can touch at most two
such subintervals). These special subintervals have total width less than $2N\cdot\frac{\varepsilon}{4N} = \frac{\varepsilon}{2}$, and $T \le 1$ on them,
contributing less than $\frac{\varepsilon}{2}$ to the upper sum. On all other subintervals $T < \frac{\varepsilon}{2}$, and their total width is at most 1, so
they contribute at most $\frac{\varepsilon}{2}$. So $U(T, P) < \varepsilon$ while $L(T, P) = 0$. By Riemann's criterion $T$ is integrable, and its integral is 0.
$\square$

### Lebesgue's criterion

Dirichlet's function is discontinuous everywhere and is not integrable. Thomae's is discontinuous at infinitely many points (all the
rationals) and is integrable. What is the real dividing line? The answer, found by Henri Lebesgue in his thesis of 1902, is about how
much room the discontinuities take up.

A set $Z$ of real numbers has **measure zero** if for every $\varepsilon > 0$ it can be covered by a list (finite or infinite) of intervals of total
length less than $\varepsilon$. Every countable set has measure zero: cover the $n$-th point by an interval of length $\varepsilon/2^{n+1}$; the total is at most
$\frac{\varepsilon}{2}$.

!!! note "Lebesgue's criterion (statement)"
    A bounded function on $[a, b]$ is Riemann integrable if and only if the set of points where it is discontinuous has measure zero.

Thomae's function is discontinuous exactly on the rationals, a countable set: integrable. Dirichlet's function is discontinuous on all of
$[0, 1]$, which does not have measure zero: not integrable. The proof is not long but needs compactness; it is in Abbott's *Understanding
Analysis* (section 7.6) and is within reach after [Chapter 20](20-Metric-Spaces-and-Topology-of-R.md).

One last warning that leads to the next chapter. A derivative can be bounded and still fail to be Riemann integrable: Vito Volterra
constructed such a function in 1881. So "integrate a derivative and get the function back", the fundamental theorem of Chapter 9, needs
the hypothesis that the derivative is integrable.

## A little history

Archimedes computed areas by exhaustion, and seventeenth-century mathematicians (Cavalieri, Fermat, Wallis and others) found areas under
$x^n$ by summing thin strips; Newton and Leibniz then reduced area to antiderivatives. For more than a century the integral *was* the
antiderivative, and no one defined area itself. Augustin-Louis Cauchy, in his *Résumé des leçons sur le calcul infinitésimal* (1823), defined
the integral of a continuous function as a limit of sums and proved that it exists, using (without the name) the uniform continuity that a
later generation made precise. Bernhard Riemann extended the definition to discontinuous functions in his 1854 habilitation thesis on
trigonometric series (published in 1868), because Fourier series forced mathematicians to integrate functions with jumps. Gaston Darboux
introduced upper and lower sums in 1875. Henri Lebesgue's 1902 thesis gave the criterion of 8.5 and, more importantly, a new integral that
handles limits far better, the subject of Chapter 21.

## Check yourself

??? question "1. Compute the left and right sums for $f(x) = x$ on $[0, 2]$ with 4 equal pieces. What is the exact integral?"

    Width $\frac{1}{2}$, points $0, 0.5, 1, 1.5, 2$. Left: $\frac{1}{2}(0 + 0.5 + 1 + 1.5) = 1.5$. Right: $\frac{1}{2}(0.5 + 1 + 1.5 + 2) = 2.5$.
    The exact value is the triangle's area $\frac{1}{2}\cdot 2\cdot 2 = 2$, the average of the two (true for every linear function).

??? question "2. Using $1^3 + 2^3 + \cdots + n^3 = \left(\frac{n(n+1)}{2}\right)^2$, show from the definition that $\int_0^1 x^3\,dx = \frac{1}{4}$."

    $x^3$ is increasing, so with $n$ equal pieces $U_n = \frac{1}{n^4}\sum_{k=1}^n k^3 = \frac{(n+1)^2}{4n^2} \to \frac{1}{4}$, and
    $L_n = U_n - \frac{1}{n} \to \frac{1}{4}$ (the two differ by the last rectangle, height 1, width $\frac{1}{n}$). The integral lies between
    all $L_n$ and $U_n$, so it is $\frac{1}{4}$.

??? question "3. Estimate $\int_1^2\frac{dx}{x}$ with the midpoint sum for 4 equal pieces."

    Width 0.25, midpoints 1.125, 1.375, 1.625, 1.875:
    $0.25\left(\frac{1}{1.125} + \frac{1}{1.375} + \frac{1}{1.625} + \frac{1}{1.875}\right) = 0.69122\ldots$
    The exact value is $\ln 2 = 0.69315\ldots$ (Chapter 9), so the error is about 0.002.

??? question "4. Given $\int_0^3 f = 5$ and $\int_0^1 f = 2$, find $\int_1^3(2f(x) + 1)\,dx$."

    By additivity $\int_1^3 f = 5 - 2 = 3$. By linearity $\int_1^3(2f + 1) = 2\cdot 3 + \int_1^3 1\,dx = 6 + 2 = 8$.

??? question "5. Without computing it exactly, show that $1 \le \int_0^1 e^{x^2}\,dx \le e$. Then use upper and lower sums with 2 and 4 equal pieces to narrow the range."

    On $[0, 1]$, $1 \le e^{x^2} \le e$, so by the bounds property the integral is between 1 and $e$. With the partition $\{0, \frac{1}{2}, 1\}$
    and the increasing function $e^{x^2}$, the upper sum is $\frac{1}{2}\left(e^{1/4} + e\right) = \frac{1}{2}(1.2840 + 2.7183) = 2.0012$, and the
    lower sum is $\frac{1}{2}(1 + 1.2840) = 1.1420$. With four pieces the upper sum is
    $\frac{1}{4}\left(e^{1/16} + e^{1/4} + e^{9/16} + e\right) \approx 1.7055$ and the lower sum is
    $\frac{1}{4}\left(1 + e^{1/16} + e^{1/4} + e^{9/16}\right) \approx 1.2759$. (The true value is about 1.4627.)

??? question "6. Find the average value of $f(x) = x^2$ on $[0, 3]$ and the point $c$ where $f(c)$ equals it."

    $\int_0^3 x^2\,dx = \frac{27}{3} = 9$ (Example 1 with $b = 3$), so the average is $\frac{9}{3} = 3$, and $c^2 = 3$ gives $c = \sqrt 3 \approx 1.732$.

??? question "7. Let $f(x) = 1$ if $x = \frac{1}{n}$ for some whole number $n \ge 1$, and $f(x) = 0$ otherwise, on $[0, 1]$. Is $f$ integrable? If so, find the integral."

    Yes, with integral 0. Lower sums are 0. Given $\varepsilon$, all but finitely many of the points $\frac{1}{n}$ lie in $[0, \frac{\varepsilon}{2}]$; put that as the
    first subinterval (upper sum contribution at most $\frac{\varepsilon}{2}$). The remaining points, finitely many, say $N$ of them, are each placed in
    subintervals of total width less than $\frac{\varepsilon}{2}$. Everywhere else $f = 0$. So $U < \varepsilon$. (Also: $f$ is discontinuous only at the
    countable set $\{0\} \cup \{\frac{1}{n}\}$, so Lebesgue's criterion agrees.)

??? question "8. Let $g(x) = x$ for rational $x$ and $g(x) = 0$ for irrational $x$, on $[0, 1]$. Find the upper and lower integrals. Is $g$ integrable?"

    Every lower sum is 0 (irrationals in every piece, and $g \ge 0$). On $[x_{k-1}, x_k]$ the supremum is $x_k$ (rationals approach $x_k$), so
    $U(g, P) = \sum x_k\Delta x_k$, which is the right sum for the function $x$. Every such sum is $\ge \int_0^1 x\,dx = \frac{1}{2}$ (the function $x$ is
    increasing), and they approach $\frac{1}{2}$ as the mesh shrinks. So the upper integral is $\frac{1}{2}$, the lower is 0, and $g$ is not integrable.

??? question "9. Prove that if $f$ is continuous on $[a, b]$, $f \ge 0$, and $\int_a^b f = 0$, then $f(x) = 0$ for every $x$."

    Suppose $f(c) > 0$ for some $c$. By continuity there is an interval $[c - \delta, c + \delta]$ (intersected with $[a, b]$, of length at least $\delta$)
    on which $f > \frac{f(c)}{2}$. Then by properties 2 to 4, $\int_a^b f \ge \int_{\text{that interval}} f \ge \frac{f(c)}{2}\cdot\delta > 0$, a contradiction.
    (Without continuity this fails: a function that is 1 at one point and 0 elsewhere has integral 0.)

??? question "10. Use a geometric series to show that $\int_0^b 2^x\,dx = \frac{2^b - 1}{\ln 2}$."

    With $n$ equal pieces of width $h = \frac{b}{n}$, the left sum is $h\sum_{k=0}^{n-1}2^{kh} = h\cdot\frac{2^b - 1}{2^h - 1} = (2^b - 1)\cdot\frac{h}{2^h - 1}$.
    As $h \to 0$, $\frac{2^h - 1}{h} \to \ln 2$ (Chapter 5: the slope of $2^x$ at 0), so the sum tends to $\frac{2^b - 1}{\ln 2}$. The function is increasing
    and continuous, so it is integrable and this limit is the integral.

??? question "11. Prove that if $f$ is integrable on $[a, b]$, then $\left|\int_a^b f\right| \le B(b - a)$ where $B$ bounds $|f|$, and use it to show that $F(x) = \int_a^x f$ satisfies $|F(x) - F(y)| \le B|x - y|$."

    The first is the bounds property with $m = -B$, $M = B$. For the second, by additivity $F(x) - F(y) = \int_y^x f$, whose absolute value is at
    most $B|x - y|$ by the first part (applied on the interval between $y$ and $x$). So $F$ is Lipschitz, and in particular continuous, even if $f$ is
    not. This is the starting point of Chapter 9.

??? question "12. (Harder) How many equal pieces guarantee that the left sum for $\int_0^1 e^{-x^2}\,dx$ is within 0.001 of the integral?"

    $e^{-x^2}$ is decreasing on $[0, 1]$, so by the monotone bound the error is at most $\frac{(1 - 0)(e^0 - e^{-1})}{n} = \frac{0.63212\ldots}{n}$.
    This is at most 0.001 when $n \ge 633$. (This function has no elementary antiderivative, Chapter 10, so numerical methods like this
    one, or the much faster ones of Chapter 10, are how its integral is actually computed.)

## What you learned

- A Riemann sum $\sum f(t_k)\Delta x_k$ approximates area, distance, or any total built from a rate.
- Upper and lower Darboux sums trap the integral; refining a partition moves them together, and every lower sum is below every upper sum.
- $f$ is integrable when the upper and lower integrals agree; Riemann's criterion: $U(f, P) - L(f, P)$ can be made smaller than any $\varepsilon$.
- The integral is linear, respects order, adds over adjacent intervals, satisfies $|\int f| \le \int|f|$, and for continuous $f$ equals
  $(b - a)$ times some value $f(c)$.
- Monotone functions are integrable (the gap telescopes); continuous functions are integrable (by uniform continuity, proved in Chapter 18).
- Changing finitely many values does not change an integral; Dirichlet's function is not integrable, Thomae's is, and Lebesgue's criterion
  explains why.

**Next:** [Chapter 9](09-The-Fundamental-Theorem.md), the fundamental theorem of calculus, which shows that integrals can be computed with
antiderivatives, and why $\int_0^1 e^x\,dx$ came out as $e^1 - e^0$.

## Further reading

- Michael Spivak, *Calculus*, 4th edition (2008), chapter 13 ("Integrals"), which uses upper and lower sums exactly as here.
- Stephen Abbott, *Understanding Analysis*, 2nd edition (2015), chapter 7: the Riemann integral, Thomae's function and Lebesgue's criterion.
- Robert G. Bartle and Donald R. Sherbert, *Introduction to Real Analysis*, 4th edition (2011), chapter 7: the Riemann integral by tagged
  partitions, and its equivalence with the Darboux integral.
- Walter Rudin, *Principles of Mathematical Analysis*, 3rd edition (1976), chapter 6 (the Riemann-Stieltjes integral).
- Thomas Hawkins, *Lebesgue's Theory of Integration: Its Origins and Development* (1970): from Cauchy and Riemann to Lebesgue.
- William Dunham, *The Calculus Gallery* (2005): chapters on Cauchy, Riemann and Lebesgue with their original arguments.
- On this site: [Unit 7: The definition of the integral](../../uoft/MAT137/unit07.md) (MAT137) and
  [Unit 9: The Riemann integral](../../uoft/MAT158H1/unit09.md) (MAT158).
- Topics shelf: [Area under a speed-time graph](../../topics/change/level-5/06-area-speed-time.md),
  [Area and the fundamental theorem](../../topics/change/level-8/06-area-fundamental-theorem.md).
- Other books here: [Probability](../probability/index.md) (densities, where integrals become probabilities) and
  [Algebra](../algebra/index.md) (sums and induction in Chapter 8).
