---
title: "Beyond: Exponentials and logarithms"
---

# Beyond: Exponentials and logarithms

*Algebra · step 5 of 5*

## A question to start

A sheet of paper is about 0.1 mm thick. Fold it in half and it is 0.2 mm; fold again and it is 0.4 mm. Suppose you
could keep folding (you cannot: real paper gives up after about seven folds). How many folds would make the stack
reach the Moon, 384 400 km away? And how many to reach Mars at its very closest, about 55 million km?

After $n$ folds the thickness is $0.1 \times 2^n$ mm. So you need to solve an equation like $2^n = 3.844 \times 10^{12}$,
where the unknown is up in the **exponent**. None of the tools so far can do that. This page builds the one that can:
the **logarithm**. (Answers: 42 folds to the Moon, 49 to Mars.)

## The idea

### The laws of exponents

$a^n$ means $a$ multiplied by itself $n$ times; $a$ is the **base** and $n$ the **exponent** (or power). Counting
the factors gives three laws, for any base $a > 0$:

$$a^m \times a^n = a^{m+n}, \qquad \frac{a^m}{a^n} = a^{m-n}, \qquad (a^m)^n = a^{mn}.$$

For example $2^3 \times 2^4 = (2 \cdot 2 \cdot 2)(2 \cdot 2 \cdot 2 \cdot 2) = 2^7$.

### Zero, negative and fraction exponents

We want the laws to keep working for every exponent, and that forces the meaning of new ones:

- **Zero.** $\dfrac{a^3}{a^3} = 1$, but the law says it is $a^0$. So $a^0 = 1$.
- **Negative.** $a^0 \div a^n = a^{-n}$, so $a^{-n} = \dfrac{1}{a^n}$. For example $2^{-3} = \dfrac18$.
- **Fractions.** $(a^{1/2})^2 = a^1 = a$, so $a^{1/2}$ is the number whose square is $a$: $a^{1/2} = \sqrt{a}$.
  In general $a^{1/n} = \sqrt[n]{a}$ and $a^{m/n} = \left(\sqrt[n]{a}\right)^m$. For example
  $8^{2/3} = (\sqrt[3]{8})^2 = 2^2 = 4$.

Nobody voted for these definitions. They are the only ones that keep the laws true.

### Exponential functions

A function of the form $f(x) = a \cdot b^x$ with $b > 0$ and $b \ne 1$ is an **exponential function**. Each time $x$
goes up by 1, the output is **multiplied** by $b$ (compare a linear function, where it is *added* to). If $b > 1$ the
graph rises ever more steeply (growth); if $0 < b < 1$ it sinks towards zero (decay) without ever reaching it. The
graph of $y = b^x$ always passes through $(0, 1)$, because $b^0 = 1$, and it is always above the $x$-axis.

### Logarithms: the undo button

Just as subtraction undoes addition and square roots undo squaring, the **logarithm** undoes raising to a power:

$$\log_b y = x \quad \text{means exactly} \quad b^x = y.$$

Read $\log_b y$ as "the power you must raise $b$ to, to get $y$". So $\log_2 8 = 3$ because $2^3 = 8$, and
$\log_{10} 0.01 = -2$ because $10^{-2} = 0.01$. Logarithms are only defined for $y > 0$, since $b^x$ is never zero or
negative.

Two bases have special names. $\log_{10}$ is the **common logarithm**, often written just $\log$. And there is a
special number

$$e = \lim_{n \to \infty}\left(1 + \frac1n\right)^n \approx 2.718\,281\ldots$$

which appears naturally whenever growth happens continuously. $\log_e$ is the **natural logarithm**, written
$\ln$. The function $y = \ln x$ is the mirror image of $y = e^x$ in the line $y = x$, as every function and its
inverse are.

### The laws of logarithms, and why they are true

$$\log_b(MN) = \log_b M + \log_b N, \qquad \log_b\!\left(\frac{M}{N}\right) = \log_b M - \log_b N, \qquad \log_b(M^k) = k \log_b M.$$

**Proof of the first.** Let $p = \log_b M$ and $q = \log_b N$, so $M = b^p$ and $N = b^q$. Then
$MN = b^p b^q = b^{p+q}$ by the first exponent law, and so $\log_b(MN) = p + q$. The other two follow in the same way
from the other two exponent laws. Logarithms turn multiplying into adding; before calculators, that is how
scientists multiplied big numbers, using printed tables of logarithms.

From the third law comes the **change of base** formula, which lets a calculator with only $\log$ or $\ln$ find any
logarithm:

$$\log_b y = \frac{\log y}{\log b} = \frac{\ln y}{\ln b}.$$

### Solving equations with the unknown in the exponent

Two methods:

1. **Same base.** If you can write both sides as powers of one base, set the exponents equal.
2. **Take logs.** Otherwise take the logarithm of both sides and use $\log(b^x) = x \log b$ to bring $x$ down.

### Logarithmic scales

When numbers range over many powers of ten, scientists use their logarithms instead. Sound levels in **decibels**
are 10 times the common logarithm of an intensity ratio, so each extra 10 decibels means 10 times the sound
intensity, and 20 decibels more means 100 times. Equal steps on a log scale mean equal **multiplications**.

## Worked examples

**1. Same base.** Solve $3 \cdot 2^x = 48$.

- Divide by 3: $2^x = 16 = 2^4$. So $x = 4$.

**2. Taking logs.** Solve $5^x = 200$.

- Take $\log$ of both sides: $x \log 5 = \log 200$.
- $x = \dfrac{\log 200}{\log 5} \approx \dfrac{2.3010}{0.6990} \approx 3.29$.
- Check: $5^3 = 125$ and $5^4 = 625$, so an answer between 3 and 4, nearer 3, makes sense.

**3. The paper.** Solve $0.1 \times 2^n = 384\,400\,000\,000$ (the Moon's distance in millimetres).

- Divide by 0.1: $2^n = 3.844 \times 10^{12}$.
- $n = \dfrac{\log(3.844 \times 10^{12})}{\log 2} \approx \dfrac{12.585}{0.30103} \approx 41.8$.
- 41 folds is not quite enough, so it takes **42 folds**. For Mars at 55 million km, $2^n = 5.5 \times 10^{14}$ gives
  $n \approx 49.0$, just under 49, so **49 folds**.

**4. Using the laws.** Write $\log_2 40 - \log_2 5$ as a whole number.

- By the second law, it is $\log_2\left(\dfrac{40}{5}\right) = \log_2 8 = 3$.

## Try it

1. Simplify $\dfrac{2^5 \times 2^3}{2^6}$.
2. Evaluate $16^{-1/2}$ and $27^{2/3}$.
3. Evaluate $\log_3 81$ and $\log_{10} 0.001$.
4. Solve $4^x = 32$ exactly.
5. Solve $2^x = 50$ to two decimal places.
6. Write $\log\left(\dfrac{x^2 y}{z}\right)$ in terms of $\log x$, $\log y$ and $\log z$.

??? note "Answers"
    1. $2^{5+3-6} = 2^2 = 4$.
    2. $16^{-1/2} = \dfrac{1}{\sqrt{16}} = \dfrac14$. $27^{2/3} = (\sqrt[3]{27})^2 = 3^2 = 9$.
    3. $\log_3 81 = 4$ because $3^4 = 81$. $\log_{10} 0.001 = -3$ because $10^{-3} = 0.001$.
    4. Write both as powers of 2: $4^x = 2^{2x}$ and $32 = 2^5$. So $2x = 5$ and $x = \dfrac52$. Check:
       $4^{5/2} = (\sqrt4)^5 = 2^5 = 32$.
    5. $x = \dfrac{\log 50}{\log 2} \approx \dfrac{1.69897}{0.30103} \approx 5.64$. Check: $2^5 = 32$ and $2^6 = 64$.
    6. $\log(x^2 y) - \log z = \log x^2 + \log y - \log z = 2\log x + \log y - \log z$.

## Common mistake

**Inventing a law for the log of a sum.** $\log(M + N)$ is **not** $\log M + \log N$. The true law is about a
*product*: $\log(MN) = \log M + \log N$. Test with numbers: $\log(10 + 10) = \log 20 \approx 1.30$, but
$\log 10 + \log 10 = 2 = \log 100$. Similarly, $(a + b)^n$ is not $a^n + b^n$; exponent laws work for products, not
sums.

## Where it leads

- Back a step: [Master: polynomials and quadratics](04-master.md)
- Exponentials at work, in compound interest, half-lives and doubling times: [ratio and rates](../ratio/index.md),
  Beyond step. Geometric sequences, the whole-number version of $b^x$, are in
  [patterns and sequences](../patterns/index.md).
- How fast $e^x$ and $\ln x$ change, and why $e$ is the "natural" base, is calculus:
  [MAT137 Unit 4 (transcendental functions)](../../uoft/MAT137/unit04.md) and, with full proofs,
  [MAT158 Unit 11](../../uoft/MAT158H1/unit11.md).
- The other topics: [all topics](../index.md).
