---
title: "Least common multiple"
---

# Least common multiple

*Number theory · level 4, lesson 2 of 6*

## A question to start

Two lights on a tower are switched on at the same moment. The red one blinks every 6 seconds. The green one blinks
every 8 seconds. Right now they blink together. When will they next blink together?

You might guess 6 × 8 = 48 seconds. They do blink together at 48 seconds, but that is not the first time. They meet
much sooner, at **24 seconds**.

Here is a bigger version that happens in nature. In parts of North America, some kinds of cicada (a loud insect) spend
13 years underground and then come out all together; others spend 17 years. In 2024, a 13-year group and a 17-year
group came out in the same year in parts of Illinois. The last time those two groups had done that was 1803. Why such
a long wait? This lesson explains it.

## The idea

### Multiples and common multiples

The **multiples** of a number are the numbers in its times table: the multiples of 6 are 6, 12, 18, 24, 30, 36, ...
A **common multiple** of two numbers is a multiple of **both**. The smallest positive one is the **least common
multiple**, or **LCM**, written

$$\operatorname{lcm}(6, 8) = 24.$$

The blinking lights show it on a number line. Red dots mark the multiples of 6, green dots the multiples of 8.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 110" role="img" aria-label="A number line from 0 to 48. Dots above mark multiples of 6, dots below mark multiples of 8. They line up at 0, 24 and 48">
  <line x1="20" y1="55" x2="356" y2="55" stroke="currentColor" stroke-width="1.5"/>
  <line x1="188" y1="25" x2="188" y2="85" stroke="#7ccf9a" stroke-width="3"/>
  <line x1="356" y1="25" x2="356" y2="85" stroke="#7ccf9a" stroke-width="3"/>
  <line x1="20" y1="25" x2="20" y2="85" stroke="#7ccf9a" stroke-width="3"/>
  <g fill="#eea66f" stroke="currentColor" stroke-width="1">
    <circle cx="20" cy="40" r="6"/><circle cx="62" cy="40" r="6"/><circle cx="104" cy="40" r="6"/>
    <circle cx="146" cy="40" r="6"/><circle cx="188" cy="40" r="6"/><circle cx="230" cy="40" r="6"/>
    <circle cx="272" cy="40" r="6"/><circle cx="314" cy="40" r="6"/><circle cx="356" cy="40" r="6"/>
  </g>
  <g fill="#9cc9ea" stroke="currentColor" stroke-width="1">
    <circle cx="20" cy="70" r="6"/><circle cx="76" cy="70" r="6"/><circle cx="132" cy="70" r="6"/>
    <circle cx="188" cy="70" r="6"/><circle cx="244" cy="70" r="6"/><circle cx="300" cy="70" r="6"/>
    <circle cx="356" cy="70" r="6"/>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="20" y="102">0</text><text x="188" y="102">24</text><text x="356" y="102">48</text>
    <text x="104" y="22">every 6 s</text><text x="272" y="22">every 8 s</text>
  </g>
</svg>
</div>

The dots line up at 0, then at **24**, then at 48, and then every 24 seconds after that. The common multiples of 6 and
8 are 24, 48, 72, 96, ...: exactly the multiples of 24. That is not a coincidence, as we will see.

### Method 1: list the multiples

List the multiples of the **bigger** number and stop at the first one the smaller number divides:

- 8: does 6 divide it? No.
- 16: No.
- 24: Yes. So $\operatorname{lcm}(6, 8) = 24$.

This is quick for small numbers, but for the cicadas you would have to list 17, 34, 51, ... a long way.

### Method 2: use the prime factorizations

$6 = 2 \times 3$ and $8 = 2^3 = 2 \times 2 \times 2$.

A common multiple has to be a multiple of 8, so its recipe must contain **at least three 2s**. It must be a multiple
of 6, so it must contain **at least one 2 and at least one 3**. The smallest number that obeys both is the one with
exactly three 2s and one 3:

$$\operatorname{lcm}(6, 8) = 2^3 \times 3 = 24.$$

**The rule:** take **every** prime that appears in **either** number, with the **larger** of its two powers.

Compare this with the GCD from [lesson 1](01-greatest-common-divisor.md): the GCD takes only the shared primes, with
the smaller powers. In the two-circle picture, the GCD is the **overlap** and the LCM is **everything** in both circles
(counting the overlap once).

### Why every common multiple is a multiple of the LCM

Any common multiple of 6 and 8 must contain at least three 2s and at least one 3. So it contains $2^3 \times 3 = 24$,
possibly with more primes on top. That means it is 24 times something: a multiple of 24.

This explains the lights: they line up every 24 seconds, forever. It also explains the rule from
[level 3](../level-3/04-tests-6-11-more.md) about joining divisibility tests. A number divisible by 4 and by 6 is a
common multiple of 4 and 6, so it is a multiple of $\operatorname{lcm}(4, 6) = 2^2 \times 3 = 12$, **not** necessarily
of 24. Joining tests for 3 and 4 gives divisibility by $\operatorname{lcm}(3, 4) = 12 = 3 \times 4$, because 3 and 4
share nothing.

### Coprime numbers: just multiply

If two numbers are **coprime** (they share no prime), every prime appears in only one of them, and the LCM is just
the product: $\operatorname{lcm}(3, 4) = 12$, $\operatorname{lcm}(13, 17) = 221$.

That solves the cicada puzzle. 13 and 17 are both prime, so they share nothing, and

$$\operatorname{lcm}(13, 17) = 13 \times 17 = 221.$$

Two groups on 13-year and 17-year cycles come out together only once every 221 years. And 2024 − 221 = 1803. (One idea
biologists have suggested is that prime cycles help cicadas avoid predators that come and go on shorter cycles. That is
still a suggestion, not a settled fact.)

When the numbers share primes, the product is a common multiple, but too big: 6 × 8 = 48 counts the shared 2 twice.
The LCM counts it once.

### Adding fractions

To add $\frac16 + \frac38$, you need a common denominator: a number that 6 and 8 both divide. Any common multiple
works, but the **least** one keeps the numbers smallest. It is called the **lowest common denominator**:

$$\frac16 + \frac38 = \frac{4}{24} + \frac{9}{24} = \frac{13}{24}.$$

(24 ÷ 6 = 4, so multiply the top and bottom of $\frac16$ by 4; 24 ÷ 8 = 3, so multiply $\frac38$ by 3.) Using 48 would
also work, but you would get $\frac{26}{48}$ and have to simplify.

## Worked examples

**1. Gears.** A small gear with 12 teeth turns a big gear with 18 teeth. A tooth on each is painted, and right now the
two painted teeth touch. How many turns of each gear until they touch again?

The teeth pass the meeting point one at a time. The small painted tooth is back every 12 teeth; the big one every 18.
They meet again after $\operatorname{lcm}(12, 18)$ teeth.

$12 = 2^2 \times 3$, $18 = 2 \times 3^2$. Larger powers: $2^2 \times 3^2 = 36$. After 36 teeth, the small gear has made
36 ÷ 12 = **3 turns** and the big gear 36 ÷ 18 = **2 turns**.

**2. Adding fractions.** Work out $\frac{5}{12} + \frac{7}{18}$.

$\operatorname{lcm}(12, 18) = 36$. So $\frac{5}{12} = \frac{15}{36}$ and $\frac{7}{18} = \frac{14}{36}$, giving
$\frac{29}{36}$. (29 is prime and does not divide 36, so this is in lowest terms.)

**3. Three numbers.** Find $\operatorname{lcm}(4, 6, 10)$.

$4 = 2^2$, $6 = 2 \times 3$, $10 = 2 \times 5$. Every prime that appears: 2 (largest power 2), 3 (power 1), 5 (power 1).
LCM $= 2^2 \times 3 \times 5 = 60$.

**4. A rover's routine.** A rover on Mars takes a weather reading every 4 sols (a sol is a Mars day, about 24 hours
and 40 minutes) and a full panorama every 10 sols. Both happen on sol 0. On which sols do both happen?

$4 = 2^2$ and $10 = 2 \times 5$, so $\operatorname{lcm}(4, 10) = 2^2 \times 5 = 20$. Both happen on **sols 20, 40, 60,
...**, every 20 sols. (Not every 40 sols: 4 and 10 share a 2.)

**5. From factorizations.** Find the LCM of $2^3 \times 3 \times 5^2$ and $2 \times 3^4 \times 7$.

Every prime, larger power: $2^3$, $3^4$, $5^2$, $7$. So

$$\operatorname{lcm} = 2^3 \times 3^4 \times 5^2 \times 7 = 8 \times 81 \times 25 \times 7 = 113{,}400.$$

## Try it

1. Find $\operatorname{lcm}(9, 12)$ by listing multiples of 12.
2. Two buses leave the station at 8:00. One leaves every 15 minutes and the other every 20 minutes. When do they next
   leave together?
3. Work out $\frac{3}{10} + \frac{4}{15}$ using the lowest common denominator.
4. Three lights blink every 4, 6 and 9 seconds. They blink together now. When do all three next blink together?
5. Find $\operatorname{lcm}(7, 11)$ and $\operatorname{lcm}(14, 22)$. Why is the second not 4 times the first?
6. What is the smallest number that every whole number from 1 to 10 divides?
7. Explain why the LCM of two numbers can never be smaller than the bigger of the two.
8. Explain why $\operatorname{lcm}(n, n + 1) = n \times (n + 1)$ for every whole number $n$.

??? note "Answers"
    1. Multiples of 12: 12 (9 does not divide it), 24 (no), **36** (36 = 9 × 4, yes). So the LCM is 36.
    2. $15 = 3 \times 5$, $20 = 2^2 \times 5$, LCM $= 2^2 \times 3 \times 5 = 60$ minutes. They next leave together at
       **9:00**.
    3. $\operatorname{lcm}(10, 15) = 30$. $\frac{3}{10} = \frac{9}{30}$ and $\frac{4}{15} = \frac{8}{30}$, so the sum is
       $\frac{17}{30}$.
    4. $4 = 2^2$, $6 = 2 \times 3$, $9 = 3^2$. LCM $= 2^2 \times 3^2 = 36$ seconds.
    5. 7 and 11 are coprime: $\operatorname{lcm}(7, 11) = 77$. $14 = 2 \times 7$ and $22 = 2 \times 11$ share a 2, so
       $\operatorname{lcm}(14, 22) = 2 \times 7 \times 11 = 154$, which is 2 × 77, not 4 × 77. The shared 2 is counted
       only once.
    6. That is $\operatorname{lcm}(1, 2, \ldots, 10)$. The largest powers of each prime up to 10 are $2^3 = 8$,
       $3^2 = 9$, 5 and 7. So it is $8 \times 9 \times 5 \times 7 =$ **2,520**.
    7. The LCM is a multiple of the bigger number, and the smallest positive multiple of a number is the number itself.
       (It equals the bigger number exactly when the smaller divides the bigger: $\operatorname{lcm}(6, 18) = 18$.)
    8. Two numbers next to each other are coprime: anything that divides both divides their difference, 1. Coprime
       numbers share no primes, so their LCM is their product.

## Common mistake

**Always multiplying the two numbers.** $6 \times 8 = 48$ is a common multiple, but not the least. The product is the
LCM only when the numbers are coprime. Otherwise, use the larger powers of the primes.

**Mixing up the LCM and the GCD.** The GCD divides both numbers, so it is never bigger than the smaller one. The LCM
is a multiple of both, so it is never smaller than the bigger one. For 6 and 8: GCD 2, LCM 24. If your "LCM" is
smaller than one of the numbers, you have found the wrong one.

## Where it leads

- Back: [Greatest common divisor](01-greatest-common-divisor.md) · Next: [GCD × LCM = the product](03-gcd-times-lcm.md),
  a short formula that links the two.
- [Level 4 page](index.md) · [Number theory topic page](../index.md)
- Repeating cycles that line up again are a kind of pattern: see [Patterns](../../patterns/index.md).
- Adding fractions with common denominators is a main tool in [Ratio](../../ratio/index.md) and
  [Numbers](../../numbers/index.md).
- In [level 6](../level-6/index.md) the cycles get remainders: "every 3 days, starting on day 2" and "every 5 days,
  starting on day 3". When do they meet? That is the Chinese remainder theorem.
