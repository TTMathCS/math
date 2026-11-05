---
title: "Greatest common divisor"
---

# Greatest common divisor

*Number theory · level 4, lesson 1 of 6*

## A question to start

You have 48 red beads and 36 blue beads. You want to make bracelets that are all **exactly the same**, and you want to
use **every** bead. What is the largest number of bracelets you can make?

You could make 2 bracelets (24 red and 18 blue each), or 3, or 4, or 6. Can you make 8? No: 36 blue beads do not
share into 8 equal groups. The largest number that works is **12**: twelve bracelets, each with 4 red and 3 blue
beads.

What makes 12 special? It is the biggest number that divides both 48 and 36. This lesson is about that number: how to
find it, why the methods work, and where it turns up (fractions, tiles, sharing, and much more).

## The idea

### Common divisors

A **divisor** of a number is the same as a factor: a whole number that divides it with no remainder. A **common
divisor** of two numbers divides **both** of them.

The divisors of 48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48.
The divisors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36.

The common divisors are the numbers in both lists: **1, 2, 3, 4, 6, 12**.

The biggest of them is the **greatest common divisor**, or **GCD**. We write

$$\gcd(48, 36) = 12.$$

Some books call it the **highest common factor** (HCF) or the **greatest common factor** (GCF). They all mean the same
thing.

In the bead puzzle, the number of bracelets must divide 48 (so the red beads share equally) and divide 36 (so the blue
beads share equally). So it must be a common divisor, and the largest possible number is the greatest common divisor.

### Method 1: list the divisors

The method above, listing both sets of divisors and picking the biggest number in both, always works. It is fine for
small numbers. For a number like 3,600, which has 45 divisors, it is slow and easy to get wrong. We need something
better.

### Method 2: use the prime factorizations

Write both numbers as products of primes (from [level 3](../level-3/05-prime-factorization.md)):

$$48 = 2^4 \times 3 = 2 \times 2 \times 2 \times 2 \times 3, \qquad 36 = 2^2 \times 3^2 = 2 \times 2 \times 3 \times 3.$$

Now put the primes in a picture with two overlapping circles. Primes that the two numbers **share** go in the
overlap. The rest go in their own circle.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 210" role="img" aria-label="Two overlapping circles. The left circle is 48, the right is 36. The overlap holds 2, 2 and 3, which multiply to 12. The left part alone holds 2 and 2; the right part alone holds 3">
  <circle cx="135" cy="105" r="88" fill="#eea66f" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="245" cy="105" r="88" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="15" fill="currentColor" text-anchor="middle">
    <text x="95" y="20">48</text>
    <text x="285" y="20">36</text>
    <text x="95" y="95">2</text><text x="95" y="125">2</text>
    <text x="190" y="80">2</text><text x="190" y="108">2</text><text x="190" y="136">3</text>
    <text x="290" y="110">3</text>
  </g>
  <text x="190" y="205" font-size="12" fill="currentColor" text-anchor="middle">overlap: 2 × 2 × 3 = 12 = gcd(48, 36)</text>
</svg>
</div>

48 has four 2s, and 36 has two. They **share** two 2s. 48 has one 3, and 36 has two. They share one 3. So the overlap
holds 2, 2, 3, and

$$\gcd(48, 36) = 2 \times 2 \times 3 = 2^2 \times 3 = 12.$$

**The rule:** for each prime that appears in **both** numbers, take it with the **smaller** of its two powers. Multiply
these together. Primes that appear in only one number are left out.

### Why the rule works

A common divisor $d$ divides 48, so every prime in $d$ comes from 48's recipe, and $d$ cannot use more copies of a
prime than 48 has. (This is the "one recipe" rule, the Fundamental Theorem of Arithmetic, from level 3.) In the same
way, $d$ cannot use more copies than 36 has.

So $d$ can only use 2s and 3s (5 and 7 are in neither number). It can use at most **two** 2s (36 has only two, even
though 48 has four) and at most **one** 3 (48 has only one). The biggest $d$ that obeys these limits uses exactly two
2s and one 3. That is $2^2 \times 3 = 12$.

The same reasoning shows something more: **every common divisor of 48 and 36 is a divisor of 12.** All the common
divisors live inside the overlap. Look back at the list: 1, 2, 3, 4, 6, 12 are exactly the divisors of 12. That is a
very useful fact and we will use it again.

### Coprime numbers

Sometimes two numbers share no prime at all. Then the overlap is empty, and the GCD is 1 (multiplying no primes at all
gives 1). For example $35 = 5 \times 7$ and $64 = 2^6$ share nothing: $\gcd(35, 64) = 1$.

Two numbers with GCD 1 are called **coprime** (or **relatively prime**). Note that they do not have to be prime
themselves: 35 and 64 are both composite, but they are coprime to each other.

Two numbers next to each other, like 1,000 and 1,001, are always coprime. Why? Anything that divides both must divide
their difference, which is 1. (If both numbers are made of $d$s, then so is the gap between them.) Only 1 divides 1.

### Simplifying fractions

A fraction is in **lowest terms** when its top and bottom are coprime: you cannot divide both by anything bigger than 1.
To get there in one step, divide top and bottom by their GCD.

$$\frac{36}{48} = \frac{36 \div 12}{48 \div 12} = \frac{3}{4}.$$

Why is $\frac34$ in lowest terms? Look at the picture again. Dividing by 12 removes the overlap. What is left of 36 is
the right-hand part (3), and what is left of 48 is the left-hand part (2 × 2 = 4). These two parts share no prime (if
they did, that prime would have been in the overlap). So 3 and 4 are coprime. **Dividing by the GCD always leaves
coprime numbers.**

You could also simplify in several small steps: $\frac{36}{48} = \frac{18}{24} = \frac{9}{12} = \frac34$. The GCD
just does all the steps at once.

<figure class="play" data-play="euclid"><span class="ai-tag">AI-created</span><figcaption><b>The greatest common divisor.</b> Euclid's steps find it without listing factors.</figcaption></figure>

## Worked examples

**1. Find gcd(126, 210) and simplify $\frac{126}{210}$.**

- $126 = 2 \times 3^2 \times 7$.
- $210 = 2 \times 3 \times 5 \times 7$.
- Shared primes: 2 (powers 1 and 1, take 1), 3 (powers 2 and 1, take 1), 7 (powers 1 and 1, take 1). 5 is only in
  210, so leave it out.

$$\gcd(126, 210) = 2 \times 3 \times 7 = 42.$$

Then $\frac{126}{210} = \frac{126 \div 42}{210 \div 42} = \frac{3}{5}$. Check: 3 and 5 are coprime. ✓

**2. Square tiles.** A floor is 84 cm by 60 cm. You want to cover it with equal square tiles, with no cutting and no
gaps, using the **biggest** tiles possible. How big are the tiles, and how many do you need?

The side of a tile must divide 84 (to fit along the length) and 60 (to fit along the width). The biggest such side is
the GCD. $84 = 2^2 \times 3 \times 7$ and $60 = 2^2 \times 3 \times 5$, so $\gcd(84, 60) = 2^2 \times 3 = 12$.

The tiles are **12 cm by 12 cm**. Along the length fit 84 ÷ 12 = 7 tiles, across the width 60 ÷ 12 = 5, so you need
7 × 5 = **35** tiles.

**3. Three numbers.** Find gcd(24, 36, 60).

$24 = 2^3 \times 3$, $36 = 2^2 \times 3^2$, $60 = 2^2 \times 3 \times 5$. Primes in **all three**: 2 (smallest power 2)
and 3 (smallest power 1). So the GCD is $2^2 \times 3 = 12$.

**4. Fruit baskets.** A shop has 60 apples, 84 oranges and 108 pears. It wants identical fruit baskets using all the
fruit. What is the largest number of baskets, and what goes in each?

$\gcd(60, 84, 108)$: $60 = 2^2 \times 3 \times 5$, $84 = 2^2 \times 3 \times 7$, $108 = 2^2 \times 3^3$. Shared by
all three: $2^2 \times 3 = 12$. So **12 baskets**, each with 60 ÷ 12 = 5 apples, 84 ÷ 12 = 7 oranges and 108 ÷ 12 = 9
pears.

**5. Very big factorizations.** Find the GCD of $2^5 \times 3^2 \times 7$ and $2^3 \times 3^4 \times 5$.

You do not even need to multiply them out. Shared primes: 2 (powers 5 and 3, take 3) and 3 (powers 2 and 4, take 2).
7 and 5 are not shared. GCD $= 2^3 \times 3^2 = 72$.

## Try it

1. Find gcd(18, 24) by listing divisors.
2. Find gcd(90, 168) using prime factorizations.
3. Write $\frac{84}{120}$ in lowest terms.
4. Are 45 and 77 coprime? Are 51 and 85?
5. A rectangle of paper is 150 mm by 225 mm. What are the largest equal squares you can cut it into, with nothing
   wasted? How many squares?
6. Explain why gcd(1000, 1001) = 1 without factorizing either number.
7. The GCD of two numbers is 7. Both are less than 50, and they add up to 63. Find the two numbers. (There are two
   answers.)
8. Is it true that the GCD of two numbers can never be bigger than the smaller number? Explain.

??? note "Answers"
    1. Divisors of 18: 1, 2, 3, 6, 9, 18. Divisors of 24: 1, 2, 3, 4, 6, 8, 12, 24. Common: 1, 2, 3, 6. So
       $\gcd(18, 24) = 6$.
    2. $90 = 2 \times 3^2 \times 5$ and $168 = 2^3 \times 3 \times 7$. Shared: 2 (take power 1) and 3 (take power 1).
       $\gcd = 2 \times 3 = 6$.
    3. $84 = 2^2 \times 3 \times 7$, $120 = 2^3 \times 3 \times 5$, $\gcd = 2^2 \times 3 = 12$.
       $\frac{84}{120} = \frac{7}{10}$.
    4. $45 = 3^2 \times 5$ and $77 = 7 \times 11$ share no prime: **coprime**. $51 = 3 \times 17$ and
       $85 = 5 \times 17$ share 17: **not coprime**, gcd 17.
    5. $150 = 2 \times 3 \times 5^2$ and $225 = 3^2 \times 5^2$, so $\gcd = 3 \times 5^2 = 75$. Squares of
       **75 mm**: 150 ÷ 75 = 2 along one side and 225 ÷ 75 = 3 along the other, so **6 squares**.
    6. Any number that divides both 1,000 and 1,001 also divides their difference, 1,001 − 1,000 = 1. The only
       whole number that divides 1 is 1. So the GCD is 1.
    7. Both numbers are multiples of 7: say 7 × m and 7 × n with m + n = 63 ÷ 7 = 9. For the GCD to be exactly 7
       (not 14, 21, ...), m and n must be coprime. Both numbers are less than 50, so m and n are at most 7. The pairs
       adding to 9 with both at most 7 are 2 + 7, 3 + 6 and 4 + 5. But 3 and 6 share 3 (that would give 21 and 42,
       with GCD 21). So the answers are **14 and 49**, and **28 and 35**.
    8. **True.** The GCD divides the smaller number, and a number that divides another (positive) number cannot be
       bigger than it. The GCD equals the smaller number exactly when the smaller number divides the bigger one, like
       gcd(12, 36) = 12.

## Common mistake

**Taking the larger power, or including primes that are not shared.** For 48 and 36, taking $2^4 \times 3^2 = 144$ is
wrong: 144 does not even divide 48. The GCD uses only primes in **both** numbers, each with the **smaller** power.
Quick check: the GCD must divide both numbers, so it can never be bigger than the smaller one.

**Thinking "coprime" means "both prime".** 8 and 15 are coprime (gcd 1), though neither is prime. And 7 and 14 are not
coprime, though 7 is prime.

## Where it leads

- Next: [Least common multiple](02-least-common-multiple.md), the partner of the GCD.
- [Level 4 page](index.md) · [Number theory topic page](../index.md)
- Back to where the prime factorizations came from: [Level 3: prime factorization](../level-3/05-prime-factorization.md).
- Factorizing big numbers is hard. [Euclid's algorithm](04-euclids-algorithm.md) finds the GCD without factorizing.
- Lowest terms and equivalent fractions are a main tool in [Ratio](../../ratio/index.md).
