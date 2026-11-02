---
title: "Uncountable means a bigger size"
---

# Uncountable means a bigger size

*Infinity and strange math · level 7, lesson 2 of 6*

## A question to start

Throw a very thin dart at the number line between 0 and 1, so that every point is equally likely to be hit. What is
the chance that the dart lands on a **fraction**?

There are infinitely many fractions between 0 and 1, and they are everywhere: between any two numbers, however close,
there is a fraction. So the chance must be quite high, surely?

The answer is **zero**. Not "very small": zero. By the end of this lesson you will see why, and you will see that it
comes from the same fact that the diagonal argument proved: there are **more** real numbers than fractions, in a
precise sense of "more".

## The idea

### What "the same size" means for infinite sets

For finite sets you can count. For infinite sets, counting gives "infinity" every time and tells you nothing. Cantor's
idea was to compare sets by **pairing**, as you did with chairs and children in level 2.

Two sets $A$ and $B$ have the **same size** (mathematicians say the same **cardinality**) if there is a perfect
pairing between them: every member of $A$ is paired with exactly one member of $B$, and every member of $B$ is paired
with exactly one member of $A$. Such a pairing is called a **bijection** (or one-to-one correspondence). We write
$|A| = |B|$.

### What "smaller" means

A pairing that uses each member of $B$ **at most** once, but might leave some of $B$ unused, is called an
**injection** (or one-to-one map) from $A$ into $B$. It shows that $A$ fits inside $B$. We write $|A| \le |B|$.

Finally, $A$ is **strictly smaller** than $B$, written $|A| < |B|$, when $A$ fits inside $B$ but there is **no**
bijection between them at all.

Be careful with that last part. The even numbers fit inside the counting numbers with odd numbers left over, but that
does not make them smaller: a **different** pairing ($n \leftrightarrow 2n$) uses everything. For infinite sets,
"some pairing leaves things over" proves nothing. To be strictly smaller, **every** possible pairing must leave
something over.

### The real numbers are strictly bigger

Now put the pieces together.

- $\mathbb{N} = \{1, 2, 3, \ldots\}$ fits inside $\mathbb{R}$, the set of all real numbers, because every counting
  number is a real number. So $|\mathbb{N}| \le |\mathbb{R}|$.
- But there is no bijection between $\mathbb{N}$ and $\mathbb{R}$. A bijection with $\mathbb{N}$ is the same thing as a
  complete list (the number paired with 1 goes first, the number paired with 2 goes second, and so on), and the
  diagonal argument showed that no list contains even the reals between 0 and 1, let alone all of them.

So $|\mathbb{N}| < |\mathbb{R}|$. This is what **uncountable** means: an infinite set that is strictly bigger than
$\mathbb{N}$. For the first time, we have two infinities of **different sizes**.

The size of $\mathbb{N}$ is written $\aleph_0$ (say "aleph-null"; $\aleph$ is the first letter of the Hebrew
alphabet). The size of $\mathbb{R}$ is called **the continuum** and written $\mathfrak{c}$. Every countable infinite
set ($\mathbb{Z}$, $\mathbb{Q}$, the primes, the algebraic numbers) has size $\aleph_0$, and $\aleph_0 < \mathfrak{c}$.

### A short piece of line is as big as the whole line

Here is a surprise in the other direction. The interval $(0, 1)$, all real numbers strictly between 0 and 1, is
**just as big** as the whole real line.

Picture it like this. Bend the interval into a half circle with its two ends left open (0 and 1 are not included).
Put it above the number line, and from its centre $C$ draw a straight ray through each point of the half circle until
it hits the line.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 185" role="img" aria-label="A half circle above a line; rays from the centre through points of the half circle meet the line, pairing every point of the half circle with one point of the line">
  <line x1="5" y1="150" x2="335" y2="150" stroke="currentColor" stroke-width="2"/>
  <path d="M 110 60 A 60 60 0 0 0 230 60" fill="none" stroke="#9cc9ea" stroke-width="4"/>
  <circle cx="110" cy="60" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="230" cy="60" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="170" cy="60" r="3" fill="currentColor"/>
  <text x="170" y="50" font-size="12" text-anchor="middle" fill="currentColor">C</text>
  <line x1="170" y1="60" x2="14.1" y2="150" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <circle cx="118.0" cy="90.0" r="4" fill="#eea66f"/>
  <circle cx="14.1" cy="150" r="4" fill="#eea66f"/>
  <line x1="170" y1="60" x2="128.0" y2="150" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <circle cx="144.6" cy="114.4" r="4" fill="#7ccf9a"/>
  <circle cx="128.0" cy="150" r="4" fill="#7ccf9a"/>
  <line x1="170" y1="60" x2="212.0" y2="150" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <circle cx="195.4" cy="114.4" r="4" fill="#eea66f"/>
  <circle cx="212.0" cy="150" r="4" fill="#eea66f"/>
  <line x1="170" y1="60" x2="325.9" y2="150" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <circle cx="222.0" cy="90.0" r="4" fill="#7ccf9a"/>
  <circle cx="325.9" cy="150" r="4" fill="#7ccf9a"/>
  <text x="62" y="64" font-size="12" text-anchor="middle" fill="currentColor">bent interval</text>
  <text x="170" y="175" font-size="12" text-anchor="middle" fill="currentColor">the whole number line</text>
</svg>
</div>

Each point of the half circle sends its ray to exactly one point of the line. And each point of the line is hit by
exactly one ray, the one from $C$ through that point, which crosses the half circle once. Points near the open ends
of the half circle send their rays far out along the line, as far as you like. So this is a bijection between the
bent interval and the whole line, and $|(0,1)| = |\mathbb{R}|$.

If you prefer a formula: first stretch $(0,1)$ onto $(-1, 1)$ with $x \mapsto 2x - 1$, then use

$$f(x) = \frac{x}{1 - |x|},$$

which sends $(-1, 1)$ onto all of $\mathbb{R}$. Its inverse is $y \mapsto \dfrac{y}{1 + |y|}$. Check one: $f(0.5) =
0.5 / 0.5 = 1$, and $1/(1 + 1) = 0.5$. ✓

So length has nothing to do with size. A segment 1 cm long, a segment 1 km long and the whole infinite line all have
exactly $\mathfrak{c}$ points.

### Most real numbers are irrational

An **irrational number** is a real number that is not a fraction, like $\sqrt{2}$ or $\pi$. We know the rationals
$\mathbb{Q}$ are countable. What about the irrationals?

**Claim.** The irrational numbers are uncountable.

**Proof.** Suppose the irrationals could be listed: $s_1, s_2, s_3, \ldots$ The rationals can be listed too:
$q_1, q_2, q_3, \ldots$ Then we could list **all** real numbers by taking one from each list in turn:

$$q_1,\ s_1,\ q_2,\ s_2,\ q_3,\ s_3,\ \ldots$$

Every real number is rational or irrational, so every real number would appear. That would make $\mathbb{R}$
countable, which is false. So the irrationals cannot be listed. ∎

So the fractions, which seem to be everywhere, are only a countable sprinkle. The irrationals are an uncountable
ocean. In the sense of size, almost every real number is irrational.

### Countable sets have length zero

Now the dart. Here is a way to cover every fraction in $(0, 1)$ with tiny intervals whose total length is as small as
you like. List the fractions $q_1, q_2, q_3, \ldots$ (possible, because they are countable). Pick a small number,
say $\varepsilon = 0.01$ ($\varepsilon$ is the Greek letter epsilon, used for "a small amount").

- Cover $q_1$ with an interval of length $\varepsilon / 2 = 0.005$.
- Cover $q_2$ with an interval of length $\varepsilon / 4 = 0.0025$.
- Cover $q_3$ with an interval of length $\varepsilon / 8 = 0.00125$, and so on, halving each time.

Every fraction is covered (each one is on the list, so it gets an interval). The total length of all the intervals is
at most

$$\frac{\varepsilon}{2} + \frac{\varepsilon}{4} + \frac{\varepsilon}{8} + \cdots = \varepsilon,$$

by the halving sum from level 4. So all the fractions fit inside a set of total length at most $0.01$, or $0.000001$,
or any $\varepsilon$ you choose. The only "length" smaller than every positive number is 0. Mathematicians say the
rationals have **measure zero**, and the chance of a random dart hitting one is 0.

The same trick works for **any** countable set: the list lets you give the $n$th member an interval of length
$\varepsilon / 2^n$. The interval $(0, 1)$ has length 1, so it cannot be countable. That is a second, completely
different reason why the real numbers are uncountable. (Making it watertight needs the fact that intervals of total
length less than 1 cannot cover all of $[0, 1]$; this is true, and is proved in university analysis using an idea
called compactness.)

## Worked examples

**1. Stretching an interval.** Show that $(0, 1)$ and $(0, 5)$ have the same size.

Pair $x$ with $5x$. If $0 < x < 1$ then $0 < 5x < 5$, so each $x$ gets a partner in $(0, 5)$. Each $y$ in $(0, 5)$ is
the partner of exactly one $x$, namely $x = y/5$. So $x \mapsto 5x$ is a bijection. Stretching does not add points.

**2. Interval to half-line.** Show that $(0, 1)$ and $(1, \infty)$, all real numbers bigger than 1, have the same
size.

Pair $x$ with $1/x$. If $0 < x < 1$ then $1/x > 1$. Each $y > 1$ comes from exactly one $x$, namely $x = 1/y$, which
lies in $(0, 1)$. So $x \mapsto 1/x$ is a bijection. For example $0.5 \mapsto 2$, $0.01 \mapsto 100$, and numbers
close to 0 go very far out.

**3. Some numbers are not counting numbers' partners.** Explain, in terms of pairings, why $|\mathbb{N}| < |(0,1)|$.

Fits inside: pair $n$ with $1/(n+1)$, so $1 \mapsto \tfrac12$, $2 \mapsto \tfrac13$, and so on. Different $n$ give
different numbers, so this is an injection: $|\mathbb{N}| \le |(0,1)|$. No bijection: a bijection would be a complete
list of $(0,1)$, and the diagonal argument destroys every such list. So the size is strictly bigger.

**4. Covering a few fractions.** With $\varepsilon = 0.01$, the first four fractions on a list get intervals of
lengths $0.005$, $0.0025$, $0.00125$ and $0.000625$, a total of $0.009375$. All of them together, forever, add up to
less than $0.01$, one hundredth of the interval. Shrink $\varepsilon$ and the cover shrinks with it.

**5. Decimals with no 7.** Is the set of numbers in $(0, 1)$ whose decimals contain no digit 7 countable?

No. Every decimal made only of 4s and 5s has no 7, and the last lesson showed those are already uncountable (they
pair perfectly with 0-1 sequences). A set containing an uncountable set is uncountable. (Yet this set also has
measure zero, as you will see from the Cantor set in lesson 5: uncountable and "length zero" can happen together.)

## Try it

1. Give a bijection from $(0, 1)$ to $(2, 7)$, and check it on $x = 0.4$.
2. Give a bijection from $(0, 1)$ to $(0, \infty)$. (Hint: try $x/(1-x)$.) Find the partner of $0.75$, and the
   number whose partner is $9$.
3. Is the set of numbers in $(0, 1)$ with a **finite** decimal (like $0.37$) countable or uncountable? Explain.
4. Show that the set of irrational numbers between 0 and 1 is uncountable.
5. With $\varepsilon = 0.1$, what lengths do the 1st, 2nd and 10th intervals of the cover have? What is the most the
   whole cover can add up to?
6. True or false: "If $A$ is a part of $B$ and some of $B$ is left over, then $|A| < |B|$." Give a reason or a
   counterexample.
7. Challenge: show that the closed interval $[0, 1]$ (with its ends) has the same size as the open interval $(0, 1)$.
   (Hint: Hilbert's hotel. Make room for two new guests, 0 and 1, by moving the numbers $\tfrac12, \tfrac13, \tfrac14,
   \ldots$)

??? note "Answers"
    1. Stretch then shift: $f(x) = 5x + 2$. If $0 < x < 1$ then $2 < 5x + 2 < 7$, and each $y$ in $(2, 7)$ comes from
       exactly one $x = (y - 2)/5$. Check: $f(0.4) = 2 + 2 = 4$, which is in $(2, 7)$.
    2. $g(x) = \dfrac{x}{1 - x}$. For $0 < x < 1$ both top and bottom are positive, so $g(x) > 0$. Solving
       $y = x/(1-x)$ for $x$ gives $x = y/(1+y)$, which is in $(0,1)$ for every $y > 0$, so each $y$ has exactly one
       partner. $g(0.75) = 0.75 / 0.25 = 3$. The number whose partner is 9 is $9 / 10 = 0.9$ (check:
       $0.9/0.1 = 9$ ✓).
    3. **Countable.** Each finite decimal is a whole number of tenths, hundredths, thousandths, and so on. List all
       the one-digit ones ($0.1$ to $0.9$), then the two-digit ones, then the three-digit ones; each group is finite,
       so every finite decimal gets a place. (They are all rational, and the rationals are countable anyway.)
    4. If the irrationals in $(0,1)$ could be listed, take the countable list of rationals in $(0,1)$ and alternate
       between the two lists. That would list every real number in $(0,1)$, contradicting the diagonal argument. So
       they are uncountable.
    5. Lengths $\varepsilon/2 = 0.05$, $\varepsilon/4 = 0.025$ and $\varepsilon/2^{10} = 0.1/1024 \approx 0.0000977$.
       The whole cover adds up to at most $0.1$.
    6. **False** for infinite sets. Counterexample: the even numbers are part of $\mathbb{N}$ with the odd numbers
       left over, yet $n \leftrightarrow 2n$ is a bijection, so they are the same size. For finite sets the statement
       is true.
    7. Send $0 \mapsto \tfrac12$, $1 \mapsto \tfrac13$, and $\tfrac1n \mapsto \tfrac1{n+2}$ for $n = 2, 3, 4, \ldots$
       (so $\tfrac12 \mapsto \tfrac14$, $\tfrac13 \mapsto \tfrac15$, and so on). Every other number goes to itself.
       Each number of $(0, 1)$ is hit exactly once: $\tfrac12$ and $\tfrac13$ by the two new guests, $\tfrac14,
       \tfrac15, \ldots$ by the old "$\tfrac1n$" guests who moved up two rooms, and everything else by itself. So this
       is a bijection from $[0, 1]$ to $(0, 1)$.

## Common mistake

**"There is room left over, so it is smaller."** This is how finite sets work, and it is wrong for infinite ones. To
show $|A| < |B|$ you must show that **no** bijection exists, which usually needs an argument like the diagonal one.

**"Dense means big."** The fractions are dense (there is one between any two numbers), but they are only countable,
and they have total length zero. Being everywhere is not the same as being many.

## Where it leads

- Previous: [Cantor's diagonal argument](01-diagonal-argument.md). Next:
  [Transcendental numbers exist](03-transcendental-numbers.md), where this counting gives a famous existence proof.
- [Level 7 page](index.md) · [Infinity topic page](../index.md)
- Rational and irrational numbers: [Numbers, level 6](../../numbers/level-6/02-rational-irrational.md) and the proof
  that [$\sqrt 2$ is irrational](../../numbers/level-6/03-root-two-irrational.md). Chance as a number from 0 to 1:
  [Probability](../../probability/index.md).
- Pairings as a counting tool: [Counting by bijection](../../counting/level-6/05-counting-bijection.md).
- On the U of T shelf: the real numbers in [MAT158 Unit 2](../../../uoft/MAT158H1/unit02.md), and functions that are
  one-to-one and onto in [MAT137 Unit 5](../../../uoft/MAT137/unit05.md).
