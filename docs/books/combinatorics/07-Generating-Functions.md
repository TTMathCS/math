# 7. Generating functions

*How many ways are there to make change for a dollar? How do you solve a recurrence without guessing? Why does the
chance of a derangement tend to $1/e$, seen from a new side? One idea answers all three: take a whole sequence
$a_0, a_1, a_2, \dots$ and pack it into a single object, the power series $a_0 + a_1x + a_2x^2 + \dots$. Counting rules
then become algebra: adding sequences, multiplying series, solving equations. In this chapter you will learn to build
these series, to read numbers back out of them, to use their exponential cousins for labelled objects, to evaluate
hard sums by Wilf's "snake oil" method, and to see from where a series blows up how fast its numbers grow.*

!!! abstract "In this chapter"
    **You will learn:**

    - what a generating function is, and the algebra of formal power series
    - how to solve linear recurrences with generating functions and partial fractions, with a proof of the repeated-root rule
    - how products of series count combinations: making change, dice, partitions
    - exponential generating functions for labelled objects: derangements, set partitions, involutions
    - the snake oil method for evaluating sums with binomial coefficients
    - how the singularities of a generating function decide how fast its coefficients grow

    **You need:** [Chapter 2](02-Permutations-and-Combinations.md) (stars and bars),
    [Chapter 3](03-Binomial-Coefficients.md) (the binomial theorem), [Chapter 5](05-Inclusion-Exclusion.md)
    (derangements, onto functions) and [Chapter 6](06-Recurrences.md) (linear recurrences); geometric series
    $1 + x + x^2 + \dots = 1/(1-x)$ and, for §7.4, the series for $e^x$. The gentler version is
    [Generating functions](../../topics/counting/level-8/05-generating-functions.md).

    **Levels:** 7.1 and 7.2 are intermediate; 7.3 is intermediate; 7.4 and 7.5 are advanced; 7.6 is advanced to expert.

## 7.1 Power series as clotheslines

Herbert Wilf began his book *generatingfunctionology* (1990) with the sentence: "A generating function is a
clothesline on which we hang up a sequence of numbers for display." The sequence $a_0, a_1, a_2, \dots$ is hung on the
powers of a variable $x$:

$$
A(x) = \sum_{n \ge 0} a_n x^n = a_0 + a_1 x + a_2 x^2 + a_3 x^3 + \dots
$$

This is the **ordinary generating function** (OGF) of the sequence. The number $a_n$ is the **coefficient of $x^n$**,
written $[x^n]A(x)$. The variable $x$ is just a peg; we never need to put a number in for it (until §7.6).

Why bother? Because operations on the series correspond to useful operations on the sequence, and some of them are
much easier to do on the series.

### The first examples

The constant sequence $1, 1, 1, \dots$ has generating function $1 + x + x^2 + \dots$, and the geometric series formula
says

$$
\frac{1}{1 - x} = 1 + x + x^2 + x^3 + \dots
$$

Read it as an identity about series: multiply the right side by $1 - x$ and everything cancels except $1$. Replacing
$x$ by $ax$ gives the sequence $1, a, a^2, \dots$:

$$
\frac{1}{1 - ax} = \sum_{n \ge 0} a^n x^n .
$$

The binomial theorem ([Chapter 3](03-Binomial-Coefficients.md)) says $(1 + x)^m = \sum_k \binom{m}{k} x^k$: the
generating function of row $m$ of Pascal's triangle is a polynomial.

### Formal power series

To be careful: a **formal power series** is just an infinite list of coefficients, written as a series. Two series are
equal when all their coefficients are equal. We add them term by term, and multiply them as if they were very long
polynomials:

$$
\left(\sum_n a_n x^n\right)\left(\sum_n b_n x^n\right) = \sum_n c_n x^n, \qquad c_n = \sum_{k=0}^{n} a_k b_{n-k} .
$$

Each $c_n$ is a finite sum, so no question of convergence arises. The sequence $c$ is called the **convolution** of
$a$ and $b$. With these operations formal power series form a **ring** (a number system where you can add, subtract
and multiply with the usual rules), written $\mathbb{Q}[[x]]$ or $\mathbb{C}[[x]]$ depending on which numbers are
allowed as coefficients.

**Which series can be divided by?** A series $B(x)$ has an inverse $1/B(x)$ exactly when its constant term $b_0$ is
not zero. *Proof:* we need coefficients $c_n$ with $\sum_{k} b_k c_{n-k}$ equal to 1 for $n = 0$ and 0 for $n > 0$.
The first equation is $b_0c_0 = 1$, so $c_0 = 1/b_0$; then each later equation $b_0c_n + b_1c_{n-1} + \dots = 0$
determines $c_n$ from the earlier ones. If $b_0 = 0$, the first equation is impossible. $\square$ So $1/(1 - x)$ makes
sense, but $1/x$ is not a formal power series.

### A dictionary

Here is what common operations do. Let $A(x) = \sum a_n x^n$.

| on the series | on the sequence |
|---|---|
| $A(x) + B(x)$ | $a_n + b_n$ |
| $cA(x)$ | $c\,a_n$ |
| $x A(x)$ | shift right: $0, a_0, a_1, \dots$ |
| $(A(x) - a_0)/x$ | shift left: $a_1, a_2, \dots$ |
| $A(x)B(x)$ | convolution $\sum_k a_k b_{n-k}$ |
| $A(x)/(1 - x)$ | partial sums $a_0 + a_1 + \dots + a_n$ |
| $x A'(x)$ | $n\,a_n$ |
| $A(cx)$ | $c^n a_n$ |

The partial-sums rule is the convolution with $1, 1, 1, \dots$. The derivative is defined formally, term by term:
$A'(x) = \sum n a_n x^{n-1}$.

**Worked example: sum of squares.** Start from $1/(1 - x) = \sum x^n$. Apply $x\frac{d}{dx}$ twice:

$$
\frac{x}{(1-x)^2} = \sum n x^n, \qquad \frac{x(1+x)}{(1-x)^3} = \sum n^2 x^n .
$$

Dividing by $1 - x$ gives partial sums: $\frac{x(1+x)}{(1-x)^4}$ is the generating function of $1^2 + 2^2 + \dots + n^2$,
which starts $0, 1, 5, 14, 30, 55, \dots$ and, by the next fact, has the closed form
$\binom{n+2}{3} + \binom{n+1}{3} = \frac{n(n+1)(2n+1)}{6}$.

### Powers of $1/(1-x)$, and stars and bars again

The coefficient of $x^n$ in $\frac{1}{(1-x)^k} = (1 + x + x^2 + \dots)^k$ is the number of ways to write
$n = e_1 + e_2 + \dots + e_k$ with whole numbers $e_i \ge 0$ (choose the term $x^{e_i}$ from the $i$-th bracket). By
stars and bars ([Chapter 2](02-Permutations-and-Combinations.md)) that is $\binom{n + k - 1}{k - 1}$:

$$
\frac{1}{(1-x)^k} = \sum_{n \ge 0} \binom{n + k - 1}{k - 1} x^n .
$$

This one fact does a remarkable amount of work. For instance $\frac{x^r}{(1-x)^{r+1}} = \sum_m \binom{m}{r} x^m$
(shift the $k = r+1$ case by $r$), which we will use in §7.5.

**Counting with restrictions.** In how many ways can $x_1 + x_2 + x_3 = 10$ in whole numbers with $x_1 \le 3$? The
first variable contributes $1 + x + x^2 + x^3 = \frac{1 - x^4}{1 - x}$, the others $\frac{1}{1-x}$ each, so we want

$$
[x^{10}]\,\frac{1 - x^4}{(1-x)^3} = \binom{12}{2} - \binom{8}{2} = 66 - 28 = 38 .
$$

That is inclusion-exclusion ([Chapter 5](05-Inclusion-Exclusion.md)) carried out automatically by the algebra.

### Not just whole-number exponents

Isaac Newton extended the binomial theorem to any exponent $\alpha$: as formal power series,

$$
(1 + x)^{\alpha} = \sum_{k \ge 0} \binom{\alpha}{k} x^k, \qquad \binom{\alpha}{k} = \frac{\alpha(\alpha - 1)\cdots(\alpha - k + 1)}{k!} .
$$

For $\alpha = -k$ this is the power-of-$1/(1-x)$ fact again (with $x$ replaced by $-x$). For $\alpha = \tfrac12$ it
gives the series for $\sqrt{1 + x}$, which is what [Chapter 8](08-Catalan-Numbers-and-Lattice-Paths.md) needs for the
Catalan numbers.

<figure class="sketch"><span class="ai-tag">AI-created</span><svg viewBox="0 0 640 316" role="img" aria-labelledby="sk-m-clothes-t"><title id="sk-m-clothes-t">The Fibonacci numbers 1, 1, 2, 3, 5, 8, 13, 21 hung as cards on a clothesline, each above its power of x, and the fraction that generates them</title><defs><filter id="sk-m-clothes-pen"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="3.2"/></filter><filter id="sk-m-clothes-paper"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="7"/><feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 .10 0"/></filter><pattern id="sk-m-clothes-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="7" stroke="#8a4a2a" stroke-width="1.1" opacity=".55"/></pattern><pattern id="sk-m-clothes-dots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r="1" fill="#8a4a2a" opacity=".5"/><circle cx="6.5" cy="7" r=".8" fill="#8a4a2a" opacity=".4"/></pattern><marker id="sk-m-clothes-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L9 5L1 9" fill="none" stroke="#3a2a1e" stroke-width="1.6" stroke-linecap="round"/></marker></defs><rect width="640" height="316" filter="url(#sk-m-clothes-paper)"/><g filter="url(#sk-m-clothes-pen)"><text x="30" y="44" text-anchor="start" class="h">A sequence hung on a clothesline</text><path class="p" style="fill:none" d="M30 90 Q320 120 610 90"/><path class="p" d="M56 88 L56 104 M64 88 L64 104"/><path class="p gold" d="M38 104 L82 104 L82 144 L38 144Z"/><text x="60" y="129.7681331747919" text-anchor="middle" class="l">1</text><text x="60" y="167.7681331747919" text-anchor="middle" class="s">x<tspan dy="-6" style="font-size:70%">0</tspan><tspan dy="6">​</tspan></text><path class="p" d="M128 99 L128 115 M136 99 L136 115"/><path class="p gold" d="M110 115 L154 115 L154 155 L110 155Z"/><text x="132" y="141.04430915576694" text-anchor="middle" class="l">1</text><text x="132" y="179.04430915576694" text-anchor="middle" class="s">x<tspan dy="-6" style="font-size:70%">1</tspan><tspan dy="6">​</tspan></text><path class="p" d="M200 107 L200 123 M208 107 L208 123"/><path class="p gold" d="M182 123 L226 123 L226 163 L182 163Z"/><text x="204" y="148.696" text-anchor="middle" class="l">2</text><text x="204" y="186.696" text-anchor="middle" class="s">x<tspan dy="-6" style="font-size:70%">2</tspan><tspan dy="6">​</tspan></text><path class="p" d="M272 111 L272 127 M280 111 L280 127"/><path class="p gold" d="M254 127 L298 127 L298 167 L254 167Z"/><text x="276" y="152.72320570749108" text-anchor="middle" class="l">3</text><text x="276" y="190.72320570749108" text-anchor="middle" class="s">x<tspan dy="-6" style="font-size:70%">3</tspan><tspan dy="6">​</tspan></text><path class="p" d="M344 111 L344 127 M352 111 L352 127"/><path class="p gold" d="M326 127 L370 127 L370 167 L326 167Z"/><text x="348" y="153.12592627824017" text-anchor="middle" class="l">5</text><text x="348" y="191.12592627824017" text-anchor="middle" class="s">x<tspan dy="-6" style="font-size:70%">4</tspan><tspan dy="6">​</tspan></text><path class="p" d="M416 108 L416 124 M424 108 L424 124"/><path class="p gold" d="M398 124 L442 124 L442 164 L398 164Z"/><text x="420" y="149.90416171224732" text-anchor="middle" class="l">8</text><text x="420" y="187.90416171224732" text-anchor="middle" class="s">x<tspan dy="-6" style="font-size:70%">5</tspan><tspan dy="6">​</tspan></text><path class="p" d="M488 101 L488 117 M496 101 L496 117"/><path class="p gold" d="M470 117 L514 117 L514 157 L470 157Z"/><text x="492" y="143.05791200951248" text-anchor="middle" class="l">13</text><text x="492" y="181.05791200951248" text-anchor="middle" class="s">x<tspan dy="-6" style="font-size:70%">6</tspan><tspan dy="6">​</tspan></text><path class="p" d="M560 91 L560 107 M568 91 L568 107"/><path class="p gold" d="M542 107 L586 107 L586 147 L542 147Z"/><text x="564" y="132.58717717003566" text-anchor="middle" class="l">21</text><text x="564" y="170.58717717003566" text-anchor="middle" class="s">x<tspan dy="-6" style="font-size:70%">7</tspan><tspan dy="6">​</tspan></text><text x="30" y="236" text-anchor="start" class="l">1 + x + 2x² + 3x³ + 5x⁴ + … = 1 / (1 − x − x²)</text><text x="30" y="280" text-anchor="start" class="s">The powers of x are only pegs: they keep each number in its place. One short fraction</text><text x="30" y="300" text-anchor="start" class="s">then holds the whole infinite sequence, and algebra on fractions becomes counting.</text></g></svg><figcaption>Sketched for this page after Wilf's clothesline picture.</figcaption></figure>

## 7.2 Ordinary generating functions and recurrences

*Level: intermediate.*

Here is the recipe for solving a recurrence with a generating function.

1. Write $A(x) = \sum a_n x^n$.
2. Multiply the recurrence by $x^n$ and sum over every $n$ for which it holds.
3. Express each sum in terms of $A(x)$, using the shift rules.
4. Solve for $A(x)$, which is now an ordinary algebraic equation.
5. Expand $A(x)$, usually by partial fractions, and read off $a_n$.

**Worked example 1.** $a_n = 5a_{n-1} - 6a_{n-2}$ for $n \ge 2$, with $a_0 = 2$, $a_1 = 5$ (solved by roots in
[Chapter 6](06-Recurrences.md)).

Steps 2 and 3: sum the recurrence times $x^n$ over $n \ge 2$. The left side is $A(x) - a_0 - a_1x = A(x) - 2 - 5x$.
On the right, $\sum_{n\ge2} a_{n-1}x^n = x(A(x) - a_0) = x(A(x) - 2)$ and $\sum_{n \ge 2} a_{n-2}x^n = x^2A(x)$. So

$$
A(x) - 2 - 5x = 5x(A(x) - 2) - 6x^2 A(x) .
$$

Step 4: $A(x)(1 - 5x + 6x^2) = 2 - 5x$, so

$$
A(x) = \frac{2 - 5x}{1 - 5x + 6x^2} = \frac{2 - 5x}{(1 - 2x)(1 - 3x)} .
$$

Step 5: partial fractions. Write $\frac{2 - 5x}{(1-2x)(1-3x)} = \frac{P}{1 - 2x} + \frac{Q}{1 - 3x}$, so
$2 - 5x = P(1 - 3x) + Q(1 - 2x)$. Put $x = \tfrac12$: $-\tfrac12 = -\tfrac12 P$, so $P = 1$. Put $x = \tfrac13$:
$\tfrac13 = \tfrac13 Q$, so $Q = 1$. Hence $A(x) = \frac{1}{1-2x} + \frac{1}{1-3x}$ and $a_n = 2^n + 3^n$, as before.

Notice the denominator $1 - 5x + 6x^2$: it is the characteristic polynomial $r^2 - 5r + 6$ "turned around",
$x^2 \cdot ((1/x)^2 - 5(1/x) + 6)$. Its factors $1 - 2x$ and $1 - 3x$ carry the characteristic roots 2 and 3.

**Worked example 2: Fibonacci.** $F_n = F_{n-1} + F_{n-2}$ for $n \ge 2$, $F_0 = 0$, $F_1 = 1$. The same steps give
$F(x) - x = xF(x) + x^2F(x)$, so

$$
F(x) = \frac{x}{1 - x - x^2} = x + x^2 + 2x^3 + 3x^4 + 5x^5 + 8x^6 + \dots
$$

Factor $1 - x - x^2 = (1 - \varphi x)(1 - \psi x)$ with $\varphi, \psi = (1 \pm \sqrt5)/2$ (check: $\varphi + \psi = 1$
and $\varphi\psi = -1$). Partial fractions give $F(x) = \frac{1}{\sqrt5}\left(\frac{1}{1 - \varphi x} - \frac{1}{1 - \psi
x}\right)$, which is Binet's formula.

**Worked example 3: Hanoi.** $H_n = 2H_{n-1} + 1$ for $n \ge 1$, $H_0 = 0$. Summing over $n \ge 1$:
$H(x) = 2xH(x) + \frac{x}{1-x}$ (the $+1$ for each $n \ge 1$ contributes $x + x^2 + \dots$). So

$$
H(x) = \frac{x}{(1 - x)(1 - 2x)} = \frac{1}{1 - 2x} - \frac{1}{1 - x}, \qquad H_n = 2^n - 1 .
$$

No guessing of a particular solution was needed: the non-homogeneous part simply became another factor in the
denominator.

### Rational generating functions: the general theorem

*Level: advanced.*

!!! note "Theorem"
    A sequence satisfies a linear recurrence $a_n = c_1a_{n-1} + \dots + c_ka_{n-k}$ (for all $n \ge k$) if and only if
    its generating function is $P(x)/Q(x)$ with $Q(x) = 1 - c_1x - \dots - c_kx^k$ and $P$ a polynomial of degree less than $k$.

**Proof.** If the recurrence holds, the coefficient of $x^n$ in $Q(x)A(x)$ is $a_n - c_1a_{n-1} - \dots - c_ka_{n-k}$,
which is 0 for $n \ge k$. So $Q(x)A(x)$ is a polynomial $P(x)$ of degree less than $k$. The argument runs backwards
just as well. $\square$

Now factor $Q(x) = \prod_i (1 - r_ix)^{m_i}$, where the $r_i$ are the distinct characteristic roots with
multiplicities $m_i$. Partial fractions (a theorem of algebra: any proper fraction of polynomials splits this way)
write $P/Q$ as a sum of terms $\frac{c}{(1 - r_ix)^j}$ with $1 \le j \le m_i$. By the power-of-$1/(1-x)$ fact,

$$
\frac{1}{(1 - rx)^j} = \sum_n \binom{n + j - 1}{j - 1} r^n x^n ,
$$

and $\binom{n+j-1}{j-1}$ is a polynomial in $n$ of degree $j - 1$. Adding up:

!!! note "Corollary (the repeated-root rule of Chapter 6)"
    $a_n = \sum_i p_i(n)\, r_i^n$, where each $p_i$ is a polynomial of degree less than $m_i$.

This is the promised proof of the repeated-root theorem of [Chapter 6](06-Recurrences.md), with independence for free:
partial fractions are unique. It also explains the resonance rule for non-homogeneous recurrences: an extra term
$n^d s^n$ has generating function with denominator $(1 - sx)^{d+1}$; if $s$ is already a root of multiplicity $m$, the
two factors merge into $(1 - sx)^{m + d + 1}$, which produces terms up to $n^{m+d}s^n$.

## 7.3 Making change

*Level: intermediate.*

In how many ways can you pay 20 cents with pennies (1 cent), nickels (5) and dimes (10)? You could list them (there
are 9: twenty pennies; fifteen pennies and a nickel; and so on). Generating functions organise the list.

The ways to use pennies alone are encoded by $1 + x + x^2 + \dots = \frac{1}{1-x}$: the term $x^k$ stands for "$k$ cents
in pennies". Nickels alone: $1 + x^5 + x^{10} + \dots = \frac{1}{1 - x^5}$. Dimes: $\frac{1}{1 - x^{10}}$. Multiplying the
three series, a term $x^a \cdot x^{5b} \cdot x^{10c}$ appears for each choice of $a$ cents in pennies, $b$ nickels and
$c$ dimes, and its exponent is the total. So

$$
\#\{\text{ways to pay } n \text{ cents}\} = [x^n]\,\frac{1}{(1-x)(1-x^5)(1-x^{10})} .
$$

This is the **product principle for generating functions**: if objects of type A of size $k$ are counted by $a_k$ and
of type B by $b_k$, then pairs (one of each) of total size $n$ are counted by $[x^n]A(x)B(x)$.

**A dollar.** For 100 cents with pennies, nickels, dimes and quarters, we need $[x^{100}]$ of

$$
\frac{1}{(1-x)(1-x^5)(1-x^{10})(1-x^{25})} .
$$

Multiplying by $\frac{1}{1 - x^c}$ means "replace each coefficient by the sum of itself and the coefficients $c$, $2c$,
$3c$, ... places earlier", which can be done one coin at a time: $w_n \leftarrow w_n + w_{n-c}$, going upward in $n$.

```python
def ways(target, coins):
    w = [1] + [0] * target          # the series 1
    for c in coins:                  # multiply by 1/(1 - x^c)
        for n in range(c, target + 1):
            w[n] += w[n - c]
    return w[target]

print(ways(100, [1, 5, 10, 25]))       # 242
print(ways(100, [1, 5, 10, 25, 50]))   # 292
print(ways(100, [5, 10, 25]))          # 29
```

So there are 242 ways to change a dollar with pennies, nickels, dimes and quarters, and 292 if half-dollars are
allowed. In Canada, where the penny was withdrawn from circulation in 2013, a dollar in nickels,
dimes and quarters can be paid 29 ways. The "dollar" problem was a favourite of George Pólya, who used it in his 1956
article "On picture-writing" to show how generating functions turn a counting problem into a calculation.

### Dice

The generating function of one fair die is $D(x) = x + x^2 + x^3 + x^4 + x^5 + x^6$: one way to roll each value.
By the product principle the ways to roll a total $n$ with two dice is $[x^n]D(x)^2$, giving $1, 2, 3, 4, 5, 6, 5, 4,
3, 2, 1$ for totals 2 to 12.

Is there another pair of dice, with positive whole numbers on their faces, not the usual ones, that gives exactly the
same totals with the same frequencies? Factor:

$$
D(x) = x(1 + x)(1 + x + x^2)(1 - x + x^2) .
$$

So $D(x)^2 = x^2(1+x)^2(1+x+x^2)^2(1-x+x^2)^2$, and we need to share these factors between two polynomials $A$, $B$
with non-negative coefficients, each equal to 6 at $x = 1$ (six faces) and 0 at $x = 0$ (no face shows 0). At $x = 1$
the factors are worth $2$, $3$ and $1$, so each die needs one $x$, one $(1 + x)$ and one $(1 + x + x^2)$; only the two
copies of $(1 - x + x^2)$ are free to move. Giving one to each die gives the ordinary dice. Giving both to one die:

$$
A(x) = x(1+x)(1+x+x^2) = x + 2x^2 + 2x^3 + x^4 ,
$$

$$
B(x) = x(1+x)(1+x+x^2)(1-x+x^2)^2 = x + x^3 + x^4 + x^5 + x^6 + x^8 .
$$

So dice with faces $1, 2, 2, 3, 3, 4$ and $1, 3, 4, 5, 6, 8$ roll every total exactly as often as ordinary dice, and
the argument shows they are the only other pair. These are **Sicherman dice**, found by George Sicherman and made
known by Martin Gardner in *Scientific American* in 1978.

**Check.** `sympy.expand(A*B - D**2)` is 0.

### Partitions

A **partition** of $n$ is a way to write $n$ as a sum of positive whole numbers, ignoring order: $4 = 3 + 1 = 2 + 2 =
2 + 1 + 1 = 1 + 1 + 1 + 1$, five partitions. It is the change problem with a coin of every value $1, 2, 3, \dots$:

$$
\sum_{n \ge 0} p(n) x^n = \prod_{k \ge 1} \frac{1}{1 - x^k} .
$$

(The infinite product makes sense formally, because only the first $n$ factors can affect the coefficient of $x^n$.)
Partitions into **distinct** parts have generating function $\prod_k (1 + x^k)$, and partitions into **odd** parts
$\prod_{k \text{ odd}} \frac{1}{1 - x^k}$. Euler noticed these are equal:

$$
\prod_{k \ge 1} (1 + x^k) = \prod_{k \ge 1} \frac{1 - x^{2k}}{1 - x^k} = \prod_{k \text{ odd}} \frac{1}{1 - x^k} ,
$$

because every factor $1 - x^{2k}$ on top cancels the even factor below. So the number of partitions of $n$ into
distinct parts equals the number into odd parts; for $n = 10$ both are 10. A one-line proof of a theorem that is
surprising to state: that is the power of the method. [Number Theory, Chapter 16](../number-theory/16-Partitions.md)
develops partitions much further, including Euler's pentagonal number theorem.

<figure class="sketch"><span class="ai-tag">AI-created</span><svg viewBox="0 0 640 324" role="img" aria-labelledby="sk-m-change-t"><title id="sk-m-change-t">Four rows of coins that each add up to 10 cents: ten pennies, a nickel and five pennies, two nickels, one dime; and the generating function whose x to the 10 coefficient is 4</title><defs><filter id="sk-m-change-pen"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="3.2"/></filter><filter id="sk-m-change-paper"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="7"/><feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 .10 0"/></filter><pattern id="sk-m-change-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="7" stroke="#8a4a2a" stroke-width="1.1" opacity=".55"/></pattern><pattern id="sk-m-change-dots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r="1" fill="#8a4a2a" opacity=".5"/><circle cx="6.5" cy="7" r=".8" fill="#8a4a2a" opacity=".4"/></pattern><marker id="sk-m-change-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L9 5L1 9" fill="none" stroke="#3a2a1e" stroke-width="1.6" stroke-linecap="round"/></marker></defs><rect width="640" height="324" filter="url(#sk-m-change-paper)"/><g filter="url(#sk-m-change-pen)"><text x="30" y="44" text-anchor="start" class="h">Four ways to make 10 cents</text><circle cx="50" cy="86" r="11" class="p rust"/><text x="50" y="91" text-anchor="middle" class="s">1</text><circle cx="80" cy="86" r="11" class="p rust"/><text x="80" y="91" text-anchor="middle" class="s">1</text><circle cx="110" cy="86" r="11" class="p rust"/><text x="110" y="91" text-anchor="middle" class="s">1</text><circle cx="140" cy="86" r="11" class="p rust"/><text x="140" y="91" text-anchor="middle" class="s">1</text><circle cx="170" cy="86" r="11" class="p rust"/><text x="170" y="91" text-anchor="middle" class="s">1</text><circle cx="200" cy="86" r="11" class="p rust"/><text x="200" y="91" text-anchor="middle" class="s">1</text><circle cx="230" cy="86" r="11" class="p rust"/><text x="230" y="91" text-anchor="middle" class="s">1</text><circle cx="260" cy="86" r="11" class="p rust"/><text x="260" y="91" text-anchor="middle" class="s">1</text><circle cx="290" cy="86" r="11" class="p rust"/><text x="290" y="91" text-anchor="middle" class="s">1</text><circle cx="320" cy="86" r="11" class="p rust"/><text x="320" y="91" text-anchor="middle" class="s">1</text><circle cx="50" cy="130" r="14" class="p room"/><text x="50" y="135" text-anchor="middle" class="s">5</text><circle cx="80" cy="130" r="11" class="p rust"/><text x="80" y="135" text-anchor="middle" class="s">1</text><circle cx="110" cy="130" r="11" class="p rust"/><text x="110" y="135" text-anchor="middle" class="s">1</text><circle cx="140" cy="130" r="11" class="p rust"/><text x="140" y="135" text-anchor="middle" class="s">1</text><circle cx="170" cy="130" r="11" class="p rust"/><text x="170" y="135" text-anchor="middle" class="s">1</text><circle cx="200" cy="130" r="11" class="p rust"/><text x="200" y="135" text-anchor="middle" class="s">1</text><circle cx="50" cy="174" r="14" class="p room"/><text x="50" y="179" text-anchor="middle" class="s">5</text><circle cx="80" cy="174" r="14" class="p room"/><text x="80" y="179" text-anchor="middle" class="s">5</text><circle cx="50" cy="218" r="12" class="p gold"/><text x="50" y="223" text-anchor="middle" class="s">10</text><text x="30" y="280" text-anchor="start" class="s">the coefficient of x<tspan dy="-6" style="font-size:70%">10</tspan><tspan dy="6">​</tspan> in</text><text x="30" y="306" text-anchor="start" class="l">1/((1 − x)(1 − x⁵)(1 − x<tspan dy="-6" style="font-size:70%">10</tspan><tspan dy="6">​</tspan>))  is 4</text><text x="390" y="100" text-anchor="start" class="s">Each factor is one coin:</text><text x="390" y="122" text-anchor="start" class="s">1/(1 − x⁵) = 1 + x⁵ + x<tspan dy="-6" style="font-size:70%">10</tspan><tspan dy="6">​</tspan> + …</text><text x="390" y="144" text-anchor="start" class="s">lists "no nickels, one, two, …".</text><text x="390" y="188" text-anchor="start" class="s">Multiplying the factors adds the</text><text x="390" y="210" text-anchor="start" class="s">amounts, so each way to pay 10¢</text><text x="390" y="232" text-anchor="start" class="s">adds one to the x<tspan dy="-6" style="font-size:70%">10</tspan><tspan dy="6">​</tspan> term.</text></g></svg><figcaption>Sketched for this page.</figcaption></figure>

## 7.4 Exponential generating functions

*Level: advanced.*

Ordinary generating functions multiply well when objects are put side by side with nothing to interleave, like coins.
Many structures are built from **labelled** atoms instead: people, numbered points, positions in a permutation. When
you combine two labelled structures you must also decide which labels go to which part. The right tool is the
**exponential generating function** (EGF):

$$
\hat{A}(x) = \sum_{n \ge 0} a_n \frac{x^n}{n!} .
$$

Basic examples:

- One structure of each size (for example "a set of $n$ labelled things, with nothing more"): $\sum x^n/n! = e^x$.
- All $n!$ orderings: $\sum n!\,x^n/n! = \frac{1}{1-x}$.
- Cycles: the number of ways to arrange $n$ labelled people around a round table, up to rotation, is $(n-1)!$ for
  $n \ge 1$, so $\sum_{n \ge 1}(n-1)!\,x^n/n! = \sum x^n/n = -\ln(1 - x)$.

### The product rule

!!! note "Theorem (labelled product)"
    Suppose $a_k$ counts A-structures on a $k$-element label set and $b_k$ counts B-structures. Split a set of $n$ labels into two parts, put an A-structure on the first and a B-structure on the second. The number of ways is $c_n = \sum_k \binom{n}{k} a_k b_{n-k}$, and $\hat{C}(x) = \hat{A}(x)\hat{B}(x)$.

**Proof.** Choose which $k$ labels go to the first part ($\binom{n}{k}$ ways), then an A-structure on them ($a_k$) and
a B-structure on the rest ($b_{n-k}$); sum over $k$. On the other side, the coefficient of $x^n$ in $\hat{A}\hat{B}$ is
$\sum_k \frac{a_k}{k!}\frac{b_{n-k}}{(n-k)!}$, and multiplying by $n!$ gives $\sum_k \frac{n!}{k!(n-k)!}a_kb_{n-k}$,
the same thing. $\square$

The factorials in the EGF are there precisely to absorb the binomial coefficient that counts the ways to share out the
labels.

### Derangements again

Every permutation of $n$ things splits into its set of fixed points and a derangement of the rest. The fixed points form
"just a set" (EGF $e^x$) and the rest is a derangement (EGF $\hat{D}(x)$). By the product rule,

$$
e^x \hat{D}(x) = \frac{1}{1 - x}, \qquad \hat{D}(x) = \frac{e^{-x}}{1 - x} .
$$

Now $e^{-x} = \sum (-1)^k x^k/k!$, and dividing by $1 - x$ takes partial sums, so
$\frac{D_n}{n!} = \sum_{k=0}^{n}\frac{(-1)^k}{k!}$: the formula of [Chapter 5](05-Inclusion-Exclusion.md), with no
inclusion-exclusion in sight.

### Onto functions and set partitions

A function from an $n$-set onto a $k$-set is the same as an ordered list of $k$ non-empty blocks (block $i$ is
everything sent to the $i$-th value). A non-empty set has EGF $e^x - 1$, so the product rule, used $k$ times, gives

$$
\sum_n \operatorname{Onto}(n,k)\frac{x^n}{n!} = (e^x - 1)^k .
$$

Expanding $(e^x - 1)^k = \sum_j \binom{k}{j}(-1)^j e^{(k-j)x}$ and reading off $x^n/n!$ gives
$\sum_j (-1)^j\binom{k}{j}(k-j)^n$, the formula of Chapter 5 again. Forgetting the order of the blocks divides by $k!$:
the Stirling numbers $S(n,k)$ have EGF $(e^x - 1)^k/k!$. Summing over all $k$,

$$
\sum_n B_n \frac{x^n}{n!} = \sum_k \frac{(e^x - 1)^k}{k!} = e^{e^x - 1} ,
$$

where $B_n$, the number of ways to split an $n$-set into blocks of any sizes, is the $n$-th **Bell number**:
$1, 1, 2, 5, 15, 52, 203, 877, \dots$. [Chapter 9](09-Stirling-Numbers-and-Partitions.md) studies them.

### The exponential formula

That last step is an instance of a general principle. A **set** of $k$ structures of some kind, on disjoint label sets
covering $\{1, \dots, n\}$, is counted by $\hat{C}(x)^k/k!$: the product rule counts ordered lists, and each set
appears $k!$ times as a list.

!!! note "Exponential formula"
    If $\hat{C}(x)$ is the EGF of "connected" structures, with $c_0 = 0$, then the EGF of all structures that are sets of connected ones is $\exp(\hat{C}(x))$.

Examples:

- A permutation is a set of cycles. Cycles have EGF $-\ln(1-x)$, and $\exp(-\ln(1 - x)) = \frac{1}{1-x}$. Correct.
- A derangement is a set of cycles of length at least 2: $\exp(-\ln(1-x) - x) = \frac{e^{-x}}{1-x}$. Correct again.
- An **involution** is a permutation with $\sigma(\sigma(i)) = i$ for all $i$, which means all its cycles have length 1
  or 2. Cycles of length 1 have EGF $x$ and of length 2 have EGF $x^2/2$ (one 2-cycle on 2 labels). So involutions have
  EGF $e^{x + x^2/2}$, giving $1, 1, 2, 4, 10, 26, 76, 232, \dots$ For example, the 4 involutions of $\{1,2,3\}$ are the
  identity and the three swaps.

**Try it in Python (sympy).**

```python
import sympy as sp
x = sp.symbols('x')
s = sp.series(sp.exp(x + x**2/2), x, 0, 9).removeO()
print([s.coeff(x, n) * sp.factorial(n) for n in range(9)])   # [1, 1, 2, 4, 10, 26, 76, 232, 764]
```

**A word-counting example.** How many strings of length $n$ over $\{a, b, c\}$ have an even number of $a$'s? A string
is a labelled structure (positions are labels) split into the positions with $a$, with $b$ and with $c$. The $a$-part
must have even size: EGF $1 + x^2/2! + x^4/4! + \dots = \cosh x = \frac{e^x + e^{-x}}{2}$. The others are any sets:
$e^x$ each. So the EGF is $\frac{e^x + e^{-x}}{2}e^{2x} = \frac{e^{3x} + e^{x}}{2}$, and the answer is
$\frac{3^n + 1}{2}$. For $n = 2$: 5 ($bb, bc, cb, cc, aa$).

## 7.5 The snake oil method

*Level: advanced.*

Wilf called this the "snake oil method", tongue in cheek, because it cures so many sums. To evaluate a sum $f(n) =
\sum_k (\text{something in } n \text{ and } k)$:

1. Do not try to evaluate $f(n)$. Write down its generating function $F(x) = \sum_n f(n)x^n$.
2. Swap the order of summation: sum over $n$ first, $k$ second.
3. The inner sum over $n$ is usually a known series. Do it.
4. The outer sum over $k$ is usually a geometric series. Do it.
5. Read $f(n)$ off the resulting closed form.

The key known series, from §7.1, is

$$
\sum_{m \ge 0} \binom{m}{r} y^m = \frac{y^r}{(1 - y)^{r+1}} .
$$

**Example 1: a shallow diagonal of Pascal's triangle.** Let $f(n) = \sum_k \binom{n-k}{k}$. Then

$$
F(x) = \sum_k \sum_n \binom{n - k}{k} x^n = \sum_k x^k \sum_m \binom{m}{k} x^m = \sum_k x^k \frac{x^k}{(1-x)^{k+1}}
$$

(putting $m = n - k$). The sum over $k$ is geometric with ratio $\frac{x^2}{1-x}$:

$$
F(x) = \frac{1}{1-x}\cdot\frac{1}{1 - \frac{x^2}{1-x}} = \frac{1}{1 - x - x^2} .
$$

That is the generating function of $1, 1, 2, 3, 5, \dots$, so $f(n) = F_{n+1}$, the tiling identity of
[Chapter 6](06-Recurrences.md), now proved by pure algebra.

**Example 2 (an example from Wilf's book).** Evaluate $f(n) = \sum_k \binom{n+k}{2k} 2^{n-k}$.

The first values are $1, 3, 11, 43, 171$, which do not suggest much. Snake oil:

$$
F(x) = \sum_k 2^{-k} \sum_n \binom{n + k}{2k} (2x)^n .
$$

Put $m = n + k$ in the inner sum: $\sum_m \binom{m}{2k}(2x)^{m-k} = (2x)^{-k} \frac{(2x)^{2k}}{(1-2x)^{2k+1}} =
\frac{(2x)^k}{(1-2x)^{2k+1}}$. (Terms with $m < 2k$ are zero, so nothing is lost.) Then

$$
F(x) = \frac{1}{1 - 2x}\sum_k \left(\frac{x}{(1-2x)^2}\right)^k = \frac{1}{1-2x}\cdot\frac{(1-2x)^2}{(1-2x)^2 - x} = \frac{1 - 2x}{(1 - x)(1 - 4x)} .
$$

Partial fractions: $\frac{1 - 2x}{(1-x)(1-4x)} = \frac{1/3}{1 - x} + \frac{2/3}{1 - 4x}$. So

$$
f(n) = \frac{1}{3} + \frac{2}{3}4^n = \frac{2^{2n+1} + 1}{3} .
$$

**Check.** For $n = 3$ the terms are $k = 0$: $\binom{3}{0}2^3 = 8$; $k = 1$: $\binom{4}{2}2^2 = 24$;
$k = 2$: $\binom{5}{4}2^1 = 10$; $k = 3$: $\binom{6}{6}2^0 = 1$. Total $43 = (128 + 1)/3$.

**Example 3: Vandermonde by multiplication.** Even the simplest use of the product rule is a proof: $(1 + x)^a(1 + x)^b
= (1 + x)^{a+b}$, and comparing coefficients of $x^n$ gives $\sum_k \binom{a}{k}\binom{b}{n-k} = \binom{a+b}{n}$, the
Vandermonde identity of [Chapter 3](03-Binomial-Coefficients.md).

The method fails gracefully: if step 3 or 4 does not close up, you have learned that the sum probably has no simple
closed form. For sums where snake oil stalls, there are complete algorithms (Gosper's algorithm and the
Wilf-Zeilberger method) that either find a closed form or prove a recurrence; Petkovšek, Wilf and Zeilberger's book
*A = B* (1996) explains them.

## 7.6 Asymptotics from generating functions

*Level: advanced to expert. Statements with proofs in the simplest case; the general theory is named.*

So far $x$ was only a peg. Now put numbers in. If the coefficients do not grow too fast, $A(x) = \sum a_nx^n$ converges
for small $|x|$ and defines a function. The idea of this section is: **the place where that function first goes wrong
tells you how fast $a_n$ grows.**

### Exponential growth and the radius of convergence

A power series converges for $|x| < R$ and diverges for $|x| > R$, for some $R$ between 0 and $\infty$, its **radius
of convergence**. The **Cauchy-Hadamard formula** says

$$
\frac{1}{R} = \limsup_{n \to \infty} |a_n|^{1/n} .
$$

Roughly: $a_n$ grows like $(1/R)^n$, up to factors that grow slower than any exponential. And from complex analysis:
the radius of convergence is the distance from 0 to the nearest **singularity** of the function in the complex plane
(a point where it cannot be extended smoothly, such as a pole where it blows up). So **the nearest singularity sets
the exponential growth rate.** For series with non-negative coefficients, Pringsheim's theorem adds that a nearest
singularity lies on the positive real axis, at $x = R$ itself.

### Rational functions: dominant poles

**Theorem.** Let $A(x) = P(x)/Q(x)$ be rational, and suppose $Q$ has a unique root $\rho$ of smallest absolute value,
of multiplicity $m$, not cancelled by $P$. Then $a_n \sim C\,n^{m-1}\rho^{-n}$ for a constant $C \ne 0$. ("$\sim$" means
the ratio tends to 1.)

**Proof.** By §7.2, $a_n = \sum_i p_i(n)r_i^n$ (plus finitely many corrections if $\deg P \ge \deg Q$), with
$r_i = 1/\rho_i$ the reciprocals of the roots. The term from $\rho$ has $|r| = 1/|\rho|$ strictly larger than every
other $|r_i|$, and its polynomial has degree exactly $m - 1$ because the partial fraction term $c/(1 - rx)^m$ has
$c \ne 0$. That term dominates. $\square$

**Examples.**

- Fibonacci: $1 - x - x^2$ has roots $1/\varphi \approx 0.618$ and $1/\psi \approx -1.618$. The nearest is
  $1/\varphi$, simple, so $F_n \sim C\varphi^n$; we know $C = 1/\sqrt5$.
- Stair-climbing with steps 1, 2, 3 (Chapter 6, exercise 1): $\frac{1}{1 - x - x^2 - x^3}$ has its smallest root at
  $x \approx 0.5437$, so the counts grow like $(1/0.5437)^n \approx 1.839^n$.
- Making change: $\frac{1}{(1-x)(1-x^5)(1-x^{10})(1-x^{25})}$ has its poles at roots of unity, all on the circle
  $|x| = 1$. Here $\rho = 1$ is not the unique nearest root, but it has the highest multiplicity (4, one from each
  factor), while every other root of unity is a pole of order at most 3 (a fifth root of unity, for example, is a root of
  $1 - x^5$, $1 - x^{10}$ and $1 - x^{25}$). Near $x = 1$, $1 - x^c \approx c(1 - x)$, so the
  function looks like $\frac{1}{1\cdot5\cdot10\cdot25\,(1-x)^4}$, whose coefficients are about
  $\frac{1}{1250}\cdot\frac{n^3}{6} = \frac{n^3}{7500}$. The true counts for $n = 1000, 10^4, 10^5$ are 142511,
  134235101 and 133423351001, against $n^3/7500 \approx$ 133333, 133333333 and 133333333333: the ratio tends to 1,
  slowly, because of the lower-order terms. (For $n = 100$, the estimate 133 is far below the true 242.)

### Other singularities

Poles are not the only kind of singularity.

- **Derangements.** $\hat{D}(x) = e^{-x}/(1-x)$ has a simple pole at $x = 1$, near which it looks like
  $\frac{e^{-1}}{1 - x}$. So $D_n/n! \to e^{-1}$: the $1/e$ of [Chapter 5](05-Inclusion-Exclusion.md) is the residue
  of a pole.
- **Square roots.** The Catalan generating function of [Chapter 8](08-Catalan-Numbers-and-Lattice-Paths.md),
  $\frac{1 - \sqrt{1 - 4x}}{2x}$, has no pole; it has a square-root singularity at $x = \tfrac14$. Philippe Flajolet and
  Andrew Odlyzko's **transfer theorems** (1990) say that near such a point, a singularity of the form $(1 - x/\rho)^{\alpha}$
  (with $\alpha$ not a whole number $\ge 0$) produces coefficients about $\frac{n^{-\alpha - 1}}{\Gamma(-\alpha)}\rho^{-n}$.
  With $\alpha = \tfrac12$ this gives the Catalan growth $\frac{4^n}{\sqrt{\pi}\,n^{3/2}}$, proved in Chapter 8.
- **No singularity at all.** $e^x$ and $e^{e^x - 1}$ are entire (no singularities anywhere), which says their
  coefficients $a_n$ shrink faster than any exponential; in EGF terms, $a_n/n!$ is tiny. To estimate them one uses the
  **saddle point method** instead, which gives Stirling's formula for $n!$ and the growth of the Bell numbers.
- **Natural boundaries.** The partition function $\prod 1/(1 - x^k)$ has a pole at every root of unity, so the whole
  unit circle is singular. Hardy and Ramanujan's circle method (1918) handles it; see
  [Number Theory, Chapter 16](../number-theory/16-Partitions.md).

This whole subject, "analytic combinatorics", is laid out in Flajolet and Sedgewick's book of that name (2009).

### History

Abraham de Moivre used generating functions in the 1720s to solve linear recurrences ("recurring series"), which is how
he found the formula now named after Binet. Leonhard Euler used infinite products for partitions in the 1740s and 1750s,
including the odd-distinct theorem of §7.3. Pierre-Simon Laplace gave the name *fonction génératrice* in his
*Théorie analytique des probabilités* (1812), where he used them systematically for probability.

## Check yourself

??? question "1. Find the generating function of $a_n = 3n + 2$, and of $b_n = n\,2^n$."

    $\sum (3n + 2)x^n = 3\frac{x}{(1-x)^2} + \frac{2}{1-x} = \frac{2 + x}{(1-x)^2}$. For $b_n$, apply $x\frac{d}{dx}$
    to $\frac{1}{1-2x}$: $\frac{2x}{(1-2x)^2}$. Check: $\frac{2x}{(1-2x)^2} = 2x(1 + 4x + 12x^2 + \dots) = 2x + 8x^2 + \dots$,
    and $1 \cdot 2 = 2$, $2 \cdot 4 = 8$.

??? question "2. Use a generating function to solve $a_n = 3a_{n-1} + 4a_{n-2}$, $a_0 = 1$, $a_1 = 2$."

    $A(x)(1 - 3x - 4x^2) = a_0 + (a_1 - 3a_0)x = 1 - x$. Since $1 - 3x - 4x^2 = (1 - 4x)(1 + x)$,
    $\frac{1 - x}{(1-4x)(1+x)} = \frac{P}{1 - 4x} + \frac{Q}{1 + x}$ with $1 - x = P(1 + x) + Q(1 - 4x)$. At $x = -1$:
    $2 = 5Q$, $Q = \tfrac25$. At $x = \tfrac14$: $\tfrac34 = \tfrac54P$, $P = \tfrac35$. So
    $a_n = \frac{3 \cdot 4^n + 2(-1)^n}{5}$. Check: $a_2 = 6 + 4 = 10$ and $(48 + 2)/5 = 10$.

??? question "3. How many ways can you pay 30 cents with pennies, nickels and dimes? Do it by hand with the generating function idea."

    Choose the number of dimes $c \in \{0, 1, 2, 3\}$; the rest, $30 - 10c$, is paid by nickels and pennies, which
    can be done in $\lfloor (30 - 10c)/5 \rfloor + 1$ ways (choose the number of nickels). That is $7 + 5 + 3 + 1 = 16$.
    (This is computing $[x^{30}]$ of $\frac{1}{1-x^{10}}\cdot\frac{1}{(1-x)(1-x^5)}$ one factor at a time.)

??? question "4. In how many ways can you choose 12 pieces of fruit from apples, bananas and oranges if you must take an even number of bananas and at most 4 oranges?"

    The generating function is $\frac{1}{1-x}\cdot\frac{1}{1-x^2}\cdot(1 + x + x^2 + x^3 + x^4)$. Count directly: for
    $j$ oranges ($0 \le j \le 4$) the bananas $2b \le 12 - j$ can be chosen in $\lfloor (12 - j)/2 \rfloor + 1$ ways and
    the apples fill the rest. That is $7 + 6 + 6 + 5 + 5 = 29$.

??? question "5. Show that the number of partitions of $n$ in which no part appears more than twice equals the number with no part divisible by 3. Check for $n = 6$."

    The first has generating function $\prod_k (1 + x^k + x^{2k}) = \prod_k \frac{1 - x^{3k}}{1 - x^k}$. The factors
    $1 - x^{3k}$ on top cancel exactly the factors $1 - x^m$ below with $3 \mid m$, leaving
    $\prod_{3 \nmid m} \frac{1}{1 - x^m}$, the second. For $n = 6$ the first kind: $6, 5{+}1, 4{+}2, 4{+}1{+}1,
    3{+}3, 3{+}2{+}1, 2{+}2{+}1{+}1$ (7). The second kind (parts from 1, 2, 4, 5): $5{+}1, 4{+}2, 4{+}1{+}1, 2{+}2{+}2,
    2{+}2{+}1{+}1, 2{+}1{+}1{+}1{+}1, 1{+}1{+}1{+}1{+}1{+}1$ (7).

??? question "6. Using the EGF $(e^x - 1)^3$, find the number of onto functions from a 5-set to a 3-set."

    $(e^x - 1)^3 = e^{3x} - 3e^{2x} + 3e^x - 1$, so the coefficient of $x^5/5!$ is $3^5 - 3\cdot2^5 + 3 = 150$, as in
    Chapter 5.

??? question "7. Find the EGF and a formula for the number of strings of length $n$ over {a, b, c, d} in which a and b both appear an even number of times."

    $\cosh^2 x \cdot e^{2x} = \frac{(e^x + e^{-x})^2}{4}e^{2x} = \frac{e^{4x} + 2e^{2x} + 1}{4}$. So the count is
    $\frac{4^n + 2 \cdot 2^n}{4} = 4^{n-1} + 2^{n-1}$ for $n \ge 1$. Check $n = 1$: only c or d, 2 strings, and
    $1 + 1 = 2$. $n = 2$: $4 + 2 = 6$ (aa, bb, cc, cd, dc, dd).

??? question "8. Use the exponential formula to find the EGF of permutations all of whose cycles have odd length, and compute how many there are for $n = 4$."

    Odd cycles: $\sum_{k \text{ odd}} x^k/k = \frac12\ln\frac{1+x}{1-x}$. So the EGF is
    $\exp\left(\tfrac12\ln\frac{1+x}{1-x}\right) = \sqrt{\frac{1+x}{1-x}}$. For $n = 4$, count directly: cycle types
    $1+1+1+1$ (1 permutation) and $3+1$ ($4 \cdot 2 = 8$): 9 in all. (The coefficients are $1, 1, 1, 3, 9, 45, 225,
    \dots$; for even $n$ the count is the square of a product of odd numbers: $9 = 3^2$, $225 = 15^2$.)

??? question "9. By snake oil, show that $\sum_k \binom{n}{k}\binom{k}{m} = \binom{n}{m}2^{n-m}$."

    Fix $m$ and sum over $n$: $\sum_n x^n\sum_k \binom{n}{k}\binom{k}{m} = \sum_k \binom{k}{m}\sum_n \binom{n}{k}x^n =
    \sum_k \binom{k}{m}\frac{x^k}{(1-x)^{k+1}}$. With $y = \frac{x}{1-x}$ this is $\frac{1}{1-x}\sum_k
    \binom{k}{m}y^k = \frac{1}{1-x}\frac{y^m}{(1-y)^{m+1}}$, and $1 - y = \frac{1 - 2x}{1-x}$, so it equals
    $\frac{x^m}{(1-2x)^{m+1}}$, whose coefficient of $x^n$ is $\binom{n}{m}2^{n-m}$. (A counting proof: choose a
    committee of $k$ from $n$ and a subcommittee of $m$ from it, or first the subcommittee and then which of the
    other $n - m$ people are also on the committee.)

??? question "10. What is the exponential growth rate of the number of binary strings of length $n$ with no three consecutive 1s?"

    Splitting on the last 0 gives the recurrence $a_n = a_{n-1} + a_{n-2} + a_{n-3}$, with generating function
    denominator $1 - x - x^2 - x^3$. Its smallest root is about $0.5437$, so $a_n$ grows like $1.839^n$ (the
    "tribonacci constant"). Check: $a_1, a_2, a_3, a_4 = 2, 4, 7, 13$, and $13/7 \approx 1.857$.

??? question "11. (Harder.) Prove that the number of partitions of $n$ into distinct parts equals the number into odd parts by a bijection, not by generating functions."

    Glaisher's bijection. Given a partition into odd parts, group equal parts: if the odd part $m$ appears $c$ times,
    write $c$ in binary as a sum of distinct powers of 2, $c = 2^{e_1} + 2^{e_2} + \dots$, and replace the $c$ copies
    of $m$ by the parts $2^{e_1}m, 2^{e_2}m, \dots$. These are distinct (every whole number is uniquely an odd number
    times a power of 2). Conversely, split each distinct part $2^e m$ ($m$ odd) into $2^e$ copies of $m$. Example:
    $3 + 3 + 3 + 1 = 10$ becomes $6 + 3 + 1$.

??? question "12. (Harder.) Show that the EGF of the Bell numbers satisfies $\hat{B}'(x) = e^x\hat{B}(x)$, and deduce $B_{n+1} = \sum_k \binom{n}{k}B_k$."

    Differentiate $e^{e^x - 1}$: $e^x \cdot e^{e^x-1}$. Comparing coefficients of $x^n/n!$: on the left, differentiation
    shifts an EGF, giving $B_{n+1}$; on the right, the product rule gives $\sum_k \binom{n}{k}\cdot 1 \cdot B_k$.
    Combinatorially: in a partition of $\{1, \dots, n+1\}$, the block containing $n + 1$ also contains some $n - k$ of
    the others, and the remaining $k$ elements are partitioned freely. Check: $B_4 = B_0 + 3B_1 + 3B_2 + B_3 =
    1 + 3 + 6 + 5 = 15$.

## What you learned

- A generating function hangs a sequence on the powers of $x$; formal power series can be added, multiplied
  (convolution) and divided when the constant term is nonzero, with no convergence needed.
- $\frac{1}{(1-x)^k} = \sum \binom{n+k-1}{k-1}x^n$ is stars and bars, and it powers most calculations.
- A linear recurrence with constant coefficients is the same as a rational generating function; partial fractions
  solve it and prove the repeated-root rule.
- Products of series count combinations: 242 ways to change a dollar, Sicherman dice, and Euler's distinct-equals-odd
  partitions theorem.
- Exponential generating functions count labelled structures; the product rule and the exponential formula give
  derangements, onto functions, Bell numbers and involutions in a line each.
- The snake oil method evaluates binomial sums by summing over $n$ first.
- The nearest singularity of a generating function sets the growth rate of its coefficients: poles give
  $n^{m-1}\rho^{-n}$, and other singularities are handled by transfer theorems and saddle points.

**Next:** [Chapter 8](08-Catalan-Numbers-and-Lattice-Paths.md), where paths on a grid lead to the Catalan numbers,
found three ways: by reflection, by a cyclic trick, and by a generating function.

## Further reading

- H. S. Wilf, *generatingfunctionology*, 1990 (3rd ed. 2006; the author made the second edition freely available).
- R. L. Graham, D. E. Knuth and O. Patashnik, *Concrete Mathematics*, 2nd ed., 1994 (Chapter 7).
- G. Pólya, "On picture-writing", *American Mathematical Monthly* 63, 1956.
- P. Flajolet and R. Sedgewick, *Analytic Combinatorics*, 2009.
- P. Flajolet and A. Odlyzko, "Singularity analysis of generating functions", *SIAM Journal on Discrete Mathematics*
  3, 1990.
- M. Petkovšek, H. S. Wilf and D. Zeilberger, *A = B*, 1996.
- R. P. Stanley, *Enumerative Combinatorics, Volume 1*, 2nd ed., 2012, and *Volume 2*, 1999 (Chapter 5 for the
  exponential formula).
- On this site: the gentler lesson [Generating functions](../../topics/counting/level-8/05-generating-functions.md);
  [Number Theory, Chapter 16](../number-theory/16-Partitions.md) for partitions;
  [Algebra, Chapter 8](../algebra/08-Sequences-Series-and-Induction.md) for geometric series; and the U of T guides
  [MAT137 Unit 14: Power Series & Taylor Series](../../uoft/MAT137/unit14.md) and
  [MAT159 Unit 7: Power Series](../../uoft/MAT159H1/unit07.md) for radius of convergence.
