---
title: "Exponent laws with variables"
---

# Exponent laws with variables

*Algebra · level 6, lesson 1 of 6*

## A question to start

Without a calculator, write $4^5 \times 8^2$ as a single power of 2.

It looks like you need to work out $1024 \times 64$ and then find out which power of 2 that is. But there is a much
quicker way. $4 = 2^2$ and $8 = 2^3$, so the question is really about multiplying lots of 2's together, and all you
have to do is **count** them. The answer is $2^{16}$, worked out in two lines in worked example 6.

The rules that let you count instead of multiply are the **exponent laws**. You may have met them with numbers; in
this lesson they work with letters, and you will see exactly **why** each one is true, so you never need to memorise
them blindly.

## The idea

### Powers, bases and exponents

A **power** is a short way to write repeated multiplication:

$$x^5 = x \times x \times x \times x \times x.$$

The repeated number $x$ is the **base**, and the small raised number 5 is the **exponent** (or index). It counts how
many copies of the base are multiplied. For now the exponents are positive whole numbers; zero and negative
exponents come later in the lesson.

Every law below comes from one idea: **write the powers out in full, and count the factors.**

### Law 1: multiplying powers with the same base

$$x^3 \times x^4 = (x \times x \times x) \times (x \times x \times x \times x) = x^7.$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 100" role="img" aria-label="Three x factors times four x factors make seven x factors in a row">
  <g stroke="currentColor" stroke-width="1.5">
    <g fill="#9cc9ea"><rect x="20" y="20" width="34" height="34" rx="4"/><rect x="58" y="20" width="34" height="34" rx="4"/><rect x="96" y="20" width="34" height="34" rx="4"/></g>
    <g fill="#eea66f"><rect x="160" y="20" width="34" height="34" rx="4"/><rect x="198" y="20" width="34" height="34" rx="4"/><rect x="236" y="20" width="34" height="34" rx="4"/><rect x="274" y="20" width="34" height="34" rx="4"/></g>
  </g>
  <g font-size="14" fill="currentColor" text-anchor="middle">
    <text x="37" y="42">x</text><text x="75" y="42">x</text><text x="113" y="42">x</text>
    <text x="145" y="42">×</text>
    <text x="177" y="42">x</text><text x="215" y="42">x</text><text x="253" y="42">x</text><text x="291" y="42">x</text>
    <text x="75" y="80">x³: 3 factors</text><text x="234" y="80">x⁴: 4 factors</text>
    <text x="356" y="42">= x⁷</text><text x="356" y="80">3 + 4 = 7</text>
  </g>
</svg>
</div>

There are 3 factors of $x$ and then 4 more, so 7 altogether. In general:

$$x^a \times x^b = x^{a+b}.$$

**Multiplying powers of the same base adds the exponents.** The base must be the same: $x^3 \times y^4$ cannot be
combined, because the factors are of different kinds.

### Law 2: dividing powers with the same base

$$\frac{x^6}{x^2} = \frac{x \times x \times x \times x \times x \times x}{x \times x} = x \times x \times x \times x = x^4.$$

Each $x$ on the bottom cancels one $x$ on the top (because $\tfrac{x}{x} = 1$, as long as $x \ne 0$). Two factors
cancel, leaving $6 - 2 = 4$. In general:

$$\frac{x^a}{x^b} = x^{a-b}, \qquad x \ne 0.$$

**Dividing powers of the same base subtracts the exponents.**

### Law 3: a power of a power

$$(x^3)^4 = x^3 \times x^3 \times x^3 \times x^3 = x^{3+3+3+3} = x^{12}.$$

Four groups of 3 factors each is $4 \times 3 = 12$ factors. In general:

$$(x^a)^b = x^{ab}.$$

**A power of a power multiplies the exponents.** Compare carefully with Law 1: $x^3 \times x^4 = x^7$ (add), but
$(x^3)^4 = x^{12}$ (multiply).

### Law 4: a power of a product

$$(xy)^3 = (xy)(xy)(xy) = x \times x \times x \times y \times y \times y = x^3y^3.$$

Multiplication can be done in any order, so we can collect all the $x$'s together and all the $y$'s together. In
general:

$$(xy)^n = x^n y^n.$$

This includes numbers: $(3x)^2 = 3^2x^2 = 9x^2$. The 3 is inside the bracket, so it is squared too. The same idea
works for division: $\left(\dfrac{x}{y}\right)^n = \dfrac{x^n}{y^n}$.

### A warning: there is no law for sums

There is **no** law for $(x + y)^n$. In particular, $(x + y)^2$ is not $x^2 + y^2$. Test with $x = 1$ and $y = 2$:
$(1 + 2)^2 = 9$, but $1^2 + 2^2 = 5$. Law 4 works because multiplying can be rearranged; a sum inside a bracket cannot
be split up like that. What $(x + y)^2$ really equals is the subject of the next lesson.

### Coefficients and several letters

When a term has a number and letters, deal with each part separately: numbers with numbers, $x$'s with $x$'s, $y$'s
with $y$'s.

$$3x^2y \times 5x^4y^3 = (3 \times 5) \times x^{2+4} \times y^{1+3} = 15x^6y^4.$$

Remember that $y$ on its own means $y^1$.

### Zero as an exponent

What should $x^0$ mean? "Zero copies of $x$ multiplied" sounds meaningless. But Law 2 gives an answer. Divide any
power by itself:

$$\frac{x^3}{x^3} = x^{3-3} = x^0, \qquad\text{but also}\qquad \frac{x^3}{x^3} = 1.$$

For the law to stay true, we **must** define

$$x^0 = 1, \qquad x \ne 0.$$

A second way to see it: the list $x^3, x^2, x^1$ is made by dividing by $x$ each time. One more step down gives
$x^1 \div x = 1$, which is the next item, $x^0$.

### Negative exponents

The same pattern continues below zero. Dividing by $x$ again and again:

$$x^2,\quad x^1,\quad x^0 = 1,\quad x^{-1} = \frac{1}{x},\quad x^{-2} = \frac{1}{x^2},\quad \ldots$$

and Law 2 agrees: $\dfrac{x^2}{x^5} = x^{2-5} = x^{-3}$, while cancelling gives $\dfrac{1}{x^3}$. So we define

$$x^{-n} = \frac{1}{x^n}, \qquad x \ne 0.$$

A negative exponent means "one over", not "negative": $2^{-3} = \tfrac18$, a small positive number. With these
definitions, **all four laws keep working** for every whole-number exponent, positive, zero or negative. That is the
reason for choosing them. (The numbers version, with more examples, is in
[zero and negative exponents](../../numbers/level-5/04-zero-negative-exponents.md).)

### Simplified form

An expression is usually called **simplified** when each base appears once, there are no brackets left, and every
exponent is positive. So $\dfrac{3}{x^2}$ is preferred to $3x^{-2}$, though both are correct.

## Worked examples

**1. Law 1.** $x^4 \times x^7 = x^{11}$, and $a \times a^5 \times a^2 = a^{1+5+2} = a^8$.

**2. The outline's example.** Simplify $\dfrac{(2x^3y)^2}{4x^2y}$.

- Top, by Laws 4 and 3: $(2x^3y)^2 = 2^2 \times (x^3)^2 \times y^2 = 4x^6y^2$.
- Divide by Law 2, part by part: $\dfrac{4}{4} = 1$, $\dfrac{x^6}{x^2} = x^4$, $\dfrac{y^2}{y} = y$.
- Answer: $x^4y$.
- Check with $x = 1$, $y = 2$: top $(2 \times 1 \times 2)^2 = 16$, bottom $4 \times 1 \times 2 = 8$, so $16 \div 8 = 2$;
  and $x^4y = 1 \times 2 = 2$ ✓.

**3. A negative base.** Simplify $(-3a^2b)^3$.

- Cube each part: $(-3)^3 = -27$, $(a^2)^3 = a^6$, $b^3$.
- Answer: $-27a^6b^3$. An odd power of a negative is negative.

**4. Numbers that do not cancel fully.** Simplify $\dfrac{12a^5b^2}{8a^7b}$.

- Numbers: $\tfrac{12}{8} = \tfrac{3}{2}$. $a$'s: $a^{5-7} = a^{-2} = \tfrac{1}{a^2}$. $b$'s: $b^{2-1} = b$.
- Answer: $\dfrac{3b}{2a^2}$.

**5. Negative exponents.** Simplify $(x^{-2}y^3)^{-2}$, with positive exponents.

- Law 3 on each part: $x^{(-2)(-2)} = x^4$ and $y^{3 \times (-2)} = y^{-6}$.
- Answer: $x^4y^{-6} = \dfrac{x^4}{y^6}$.

**6. The question at the start.** $4^5 \times 8^2 = (2^2)^5 \times (2^3)^2 = 2^{10} \times 2^6 = 2^{16}$.
Check: $1024 \times 64 = 65536 = 2^{16}$ ✓.

## Try it

1. Simplify: (a) $y^3 \times y^9$; (b) $\dfrac{m^{10}}{m^4}$; (c) $(p^3)^5$.
2. Simplify $(4x^2y^3)^2$.
3. Simplify $\dfrac{15x^6y^2}{5x^2y^2}$.
4. Simplify $(2a^3)^2 \times 3a^4$.
5. Write with positive exponents: (a) $x^{-4} \times x^2$; (b) $(3x^{-1})^2$.
6. Evaluate $5^0$, $2^{-3}$ and $\left(\tfrac12\right)^{-2}$.
7. Find $n$ if $2^n = \dfrac{8^3 \times 4^2}{2}$.
8. True or false? Test each with $x = 1$ and $y = 2$. (a) $(x + y)^2 = x^2 + y^2$; (b) $(xy)^2 = x^2y^2$;
   (c) $x^2 \times x^3 = x^6$.

??? note "Answers"
    1. (a) $y^{12}$ (add). (b) $m^6$ (subtract). (c) $p^{15}$ (multiply).
    2. $4^2 \times x^{2 \times 2} \times y^{3 \times 2} = 16x^4y^6$.
    3. $\tfrac{15}{5} = 3$, $x^{6-2} = x^4$, $y^{2-2} = y^0 = 1$. Answer: $3x^4$.
    4. $(2a^3)^2 = 4a^6$, then $4a^6 \times 3a^4 = 12a^{10}$.
    5. (a) $x^{-4+2} = x^{-2} = \dfrac{1}{x^2}$. (b) $3^2x^{-2} = \dfrac{9}{x^2}$.
    6. $5^0 = 1$. $2^{-3} = \tfrac{1}{8}$. $\left(\tfrac12\right)^{-2} = \dfrac{1}{(1/2)^2} = \dfrac{1}{1/4} = 4$.
    7. $8^3 = 2^9$ and $4^2 = 2^4$, so the right side is $\dfrac{2^9 \times 2^4}{2^1} = 2^{9+4-1} = 2^{12}$. So $n = 12$.
       Check: $512 \times 16 \div 2 = 4096 = 2^{12}$ ✓.
    8. (a) False: $9 \ne 5$. (b) True: $(2)^2 = 4$ and $1 \times 4 = 4$, and Law 4 says it is always true.
       (c) False: $1 \times 1 = 1$ agrees by luck, since every power of 1 is 1, so test $x = 2$: $4 \times 8 = 32 = 2^5$,
       not $2^6 = 64$. The correct answer is $x^5$. (A test that agrees proves nothing; one that disagrees proves it false.)

## Common mistake

**Multiplying the bases or the exponents in Law 1.** $x^3 \times x^4$ is $x^7$, not $x^{12}$. And $2^3 \times 2^4$ is
$2^7$, not $4^7$: the base stays the same. Writing the factors out once, $(2 \times 2 \times 2)(2 \times 2 \times 2 \times 2)$,
shows seven 2's.

**Forgetting to raise the number.** $(3x)^2 = 9x^2$, not $3x^2$. But $3x^2$ means $3 \times x^2$: only $x$ is squared.
The bracket decides what the exponent applies to.

## Where it leads

- Previous: [Modelling with equations](../level-5/06-modelling-equations.md) (level 5) · Next: [Polynomials](02-polynomials.md)
- [Level 6 page](index.md) · [Algebra topic page](../index.md)
- The same laws with numbers: [powers](../../numbers/level-5/03-powers.md) and
  [zero and negative exponents](../../numbers/level-5/04-zero-negative-exponents.md); huge and tiny numbers in
  [scientific notation](../../numbers/level-5/05-scientific-notation.md).
- In level 7 exponents become fractions, $8^{2/3} = 4$, and the base becomes a variable's partner in exponential
  functions; in level 8 logarithms run the exponent laws backwards.
