---
title: "Scientific notation"
---

# Scientific notation

*Numbers · level 5, lesson 5 of 7*

## A question to start

On average, Mars is about 228 000 000 km from the Sun. A red blood cell is about 0.000 008 m across. Now try reading
those two numbers out loud quickly, or copying them without losing a zero. It is easy to slip, and one lost zero
makes a number ten times too big or too small.

Scientists have the same problem every day, with numbers far bigger and smaller than these. Their answer is a short,
neat way of writing that makes it almost impossible to lose a zero:

$$228\,000\,000 = 2.28 \times 10^8 \qquad 0.000\,008 = 8 \times 10^{-6}$$

By the end of this lesson you will be able to read these, write them, and calculate with them faster than with the
long forms.

## The idea

### The form

A number is in **scientific notation** (also called **standard form**) when it is written as

$$a \times 10^n$$

where:

- $a$, the **front number**, is at least 1 and less than 10 (so exactly one non-zero digit before the decimal point);
- $n$ is an integer: positive for big numbers, negative for small numbers, and 0 for numbers from 1 up to 10.

So $2.28 \times 10^8$ is in scientific notation, but $22.8 \times 10^7$ and $0.228 \times 10^9$ are not (even
though they are equal to it), because their front numbers are not between 1 and 10.

### Why it works: moving the point is multiplying by 10

Multiplying by 10 moves every digit one place to the left, which looks like moving the decimal point one place to the
right. So multiplying by $10^8$ moves the point 8 places to the right:

$$2.28 \times 10^8 = 228\,000\,000.$$

Starting from 2.28, the point jumps 8 places: 2 of them pass the digits 2 and 8, and the other 6 need new zeros.

Multiplying by $10^{-6}$ is dividing by $10^6$ (last lesson), which moves the point 6 places to the **left**:

$$8 \times 10^{-6} = 0.000\,008$$

### Converting to scientific notation

**A big number.** To write 45 600 000:

1. Put the point after the first non-zero digit: 4.56.
2. Count how many places the point has to move from 4.56 to get back to 45 600 000: 7 places to the right.
3. So $45\,600\,000 = 4.56 \times 10^7$.

**A small number.** To write 0.000 52:

1. Put the point after the first non-zero digit: 5.2.
2. To get back to 0.000 52, the point moves 4 places to the left.
3. So $0.000\,52 = 5.2 \times 10^{-4}$.

A quick check: **big numbers have positive exponents, small numbers (less than 1) have negative exponents.**

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 120" role="img" aria-label="A scale of powers of ten from ten to the minus 6 to ten to the 12, with a red blood cell near ten to the minus 6 metres, a person near one metre and Mars's distance from the Sun between ten to the 11 and ten to the 12 metres">
  <line x1="20" y1="60" x2="420" y2="60" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="2">
    <line x1="30" y1="54" x2="30" y2="66"/><line x1="90" y1="54" x2="90" y2="66"/><line x1="150" y1="54" x2="150" y2="66"/>
    <line x1="210" y1="54" x2="210" y2="66"/><line x1="270" y1="54" x2="270" y2="66"/><line x1="330" y1="54" x2="330" y2="66"/>
    <line x1="390" y1="54" x2="390" y2="66"/>
  </g>
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <text x="30" y="84">10⁻⁶</text><text x="90" y="84">10⁻³</text><text x="150" y="84">10⁰</text><text x="210" y="84">10³</text>
    <text x="270" y="84">10⁶</text><text x="330" y="84">10⁹</text><text x="390" y="84">10¹²</text>
  </g>
  <circle cx="48" cy="60" r="6" fill="#eea66f"/>
  <circle cx="153" cy="60" r="6" fill="#9cc9ea"/>
  <circle cx="377" cy="60" r="6" fill="#7ccf9a"/>
  <g font-size="11" text-anchor="middle" fill="currentColor">
    <text x="48" y="38">blood cell</text><text x="153" y="38">a person</text><text x="377" y="38">Mars to Sun</text>
  </g>
  <text x="220" y="110" font-size="12" text-anchor="middle" fill="currentColor">metres; each tick is 1000 times the one before</text>
</svg>
</div>

On this scale, equal steps mean **multiplying** by the same amount, not adding. A red blood cell (about
$8 \times 10^{-6}$ m) is about a millionth of the size of a person, and Mars's distance from the Sun (about
$2.28 \times 10^{11}$ m) is about a hundred billion times the size of a person.

### Comparing

To compare two numbers in scientific notation, look at the **exponents first**. A bigger exponent means a bigger
number, whatever the front numbers are (as long as both are positive). $1.2 \times 10^6$ is bigger than
$9.9 \times 10^5$, because one million beats anything under one million. Only when the exponents are equal do you
compare the front numbers.

### Multiplying and dividing

Here scientific notation really shines. Because the order of multiplying does not matter, you can multiply the front
numbers and the powers of 10 separately, using the law $10^m \times 10^n = 10^{m+n}$:

$$(3 \times 10^4) \times (8 \times 10^5) = (3 \times 8) \times (10^4 \times 10^5) = 24 \times 10^9$$

Then **tidy up**: 24 is not between 1 and 10, so write $24 = 2.4 \times 10^1$, and

$$24 \times 10^9 = 2.4 \times 10^1 \times 10^9 = 2.4 \times 10^{10}$$

Dividing works the same way, subtracting the exponents:

$$\frac{6 \times 10^8}{1.5 \times 10^2} = \frac{6}{1.5} \times 10^{8-2} = 4 \times 10^6$$

**Adding and subtracting** are different: you can only add the front numbers when the powers of 10 are the same (just
as you can only add fractions with the same denominator). $3 \times 10^5 + 4 \times 10^5 = 7 \times 10^5$, but for
$3 \times 10^5 + 4 \times 10^4$ you first rewrite $4 \times 10^4 = 0.4 \times 10^5$ and get $3.4 \times 10^5$.

### Scientific notation on a calculator

Calculators switch to scientific notation when a number is too long for the screen. Many show $6.42 \times 10^{23}$
as `6.42E23` or `6.42e23`: the E stands for "times ten to the". So `8E-6` means $8 \times 10^{-6}$.

To **type** $6.42 \times 10^{23}$, use the key marked EXP, EE or ×10ˣ: press 6.42, then that key, then 23. A common
slip is to press 6.42 × 10 and then EXP 23, which gives $6.42 \times 10 \times 10^{23}$, ten times too big.

### How many digits to keep

The front number shows how **precisely** we know a value. "Mars is $2.28 \times 10^8$ km from the Sun" gives three
meaningful digits, called **significant figures**. It does not claim the distance is exactly 228 000 000 km; it says
"about 228 million, to the nearest million". (Mars's distance actually changes through its year, from about 207 to
about 249 million km, so 228 million is an average.)

A good habit: when you calculate with measured numbers, round your answer to about as many significant figures as the
least precise number you started with. A calculator may show 9.299065..., but if your inputs had three significant
figures, report 9.30.

## Worked examples

**1. Convert.** Write in scientific notation: 228 000 000, 0.000 008 and 0.000 52.

1. 228 000 000: the point moves 8 places from 2.28. So $2.28 \times 10^8$.
2. 0.000 008: the first non-zero digit is 8, and the point moves 6 places left to get back. So $8 \times 10^{-6}$.
3. 0.000 52: $5.2 \times 10^{-4}$ (shown above).

**2. Multiply and tidy.** $(5 \times 10^{-4}) \times (7 \times 10^{9})$.

1. Front numbers: $5 \times 7 = 35$. Powers: $10^{-4} \times 10^9 = 10^{5}$.
2. $35 \times 10^5 = 3.5 \times 10^1 \times 10^5 = 3.5 \times 10^6$.

**3. Earth and Mars.** The mass of the Earth is about $5.97 \times 10^{24}$ kg and the mass of Mars is about
$6.42 \times 10^{23}$ kg. How many times heavier is the Earth?

1. Divide: $\dfrac{5.97 \times 10^{24}}{6.42 \times 10^{23}} = \dfrac{5.97}{6.42} \times 10^{24-23}$.
2. $\tfrac{5.97}{6.42} \approx 0.930$, so the answer is $0.930 \times 10^1 = 9.30$.
3. The Earth has about **9.3 times** the mass of Mars.

**4. Sunlight's trip.** Light travels about $3.00 \times 10^5$ km every second. How long does sunlight take to reach
Mars, at $2.28 \times 10^8$ km?

1. Time = distance ÷ speed $= \dfrac{2.28 \times 10^8}{3.00 \times 10^5} = 0.76 \times 10^3 = 7.6 \times 10^2$ s.
2. That is 760 seconds, and $760 \div 60 \approx 12.7$, so about **12.7 minutes**. (For the Earth, at
   $1.50 \times 10^8$ km, it is about 8.3 minutes.)

**5. Tiny things in a row.** How many red blood cells, each $8 \times 10^{-6}$ m across, would fit side by side
across 1 cm?

1. 1 cm is $0.01$ m $= 1 \times 10^{-2}$ m.
2. $\dfrac{1 \times 10^{-2}}{8 \times 10^{-6}} = 0.125 \times 10^{-2-(-6)} = 0.125 \times 10^{4} = 1.25 \times 10^3$.
3. About **1250** cells.

## Try it

1. Write in scientific notation: (a) 45 000 (b) 6 779 (the diameter of Mars in km) (c) 0.0062 (d) 0.000 000 1
2. Write as ordinary numbers: (a) $3.1 \times 10^5$ (b) $7.04 \times 10^{-3}$
3. Put in order, smallest first: $4.1 \times 10^5$, $9.9 \times 10^4$, $1.2 \times 10^6$, $3 \times 10^{-2}$.
4. Work out $(2 \times 10^3) \times (4.5 \times 10^6)$.
5. Work out $(6 \times 10^8) \div (1.5 \times 10^2)$ and $(9 \times 10^{-3}) \div (3 \times 10^{-7})$.
6. Each of these is equal to a number in scientific notation but is not written properly. Fix them:
   (a) $34.5 \times 10^6$ (b) $0.8 \times 10^{-3}$
7. Work out $3 \times 10^5 + 4 \times 10^4$ and give the answer in scientific notation.
8. When Mars is on the far side of the Sun from the Earth, the two planets can be about $4.0 \times 10^8$ km apart.
   How long does a radio message take to cross that gap at $3.0 \times 10^5$ km/s? Give your answer in seconds and
   in minutes.

??? note "Answers"
    1. (a) $4.5 \times 10^4$. (b) $6.779 \times 10^3$. (c) $6.2 \times 10^{-3}$. (d) $1 \times 10^{-7}$.
    2. (a) $310\,000$. (b) $0.00704$.
    3. Look at the exponents first: $3 \times 10^{-2}$ (exponent $-2$), then $9.9 \times 10^4$, then
       $4.1 \times 10^5$, then $1.2 \times 10^6$.
    4. $2 \times 4.5 = 9$ and $10^{3+6} = 10^9$, so $9 \times 10^9$.
    5. $\tfrac{6}{1.5} = 4$ and $10^{8-2} = 10^6$, so $4 \times 10^6$. And $\tfrac93 = 3$ and
       $10^{-3-(-7)} = 10^{4}$, so $3 \times 10^4$.
    6. (a) $34.5 = 3.45 \times 10^1$, so $3.45 \times 10^7$. (b) $0.8 = 8 \times 10^{-1}$, so
       $8 \times 10^{-4}$.
    7. $4 \times 10^4 = 0.4 \times 10^5$, so the sum is $(3 + 0.4) \times 10^5 = 3.4 \times 10^5$. (Check:
       $300\,000 + 40\,000 = 340\,000$. ✓)
    8. $\dfrac{4.0 \times 10^8}{3.0 \times 10^5} \approx 1.33 \times 10^3$ s, about 1330 seconds, which is about
       **22 minutes**. A question sent to a rover and its answer back would take about 44 minutes at that distance.

## Common mistake

**Getting the sign of the exponent backwards.** $0.0004$ is a small number, so its exponent must be negative:
$4 \times 10^{-4}$, not $4 \times 10^4$ (which is 40 000). Always check: big number, positive exponent; small number,
negative exponent.

**Forgetting to tidy up.** $(5 \times 10^3) \times (6 \times 10^4) = 30 \times 10^7$ is correct but not in scientific
notation. Move one power of 10 across: $3 \times 10^8$. When the front number gets bigger by a factor of 10, the
exponent must go up by 1 to keep the value the same.

## Where it leads

- Back: [Zero and negative exponents](04-zero-negative-exponents.md) · Next: [Square roots](06-square-roots.md)
- [Level 5 page](index.md) · [Numbers topic page](../index.md)
- Speeds, distances and unit changes such as km to m: [Ratio and rates](../../ratio/index.md) and
  [Measurement](../../measurement/index.md).
- How sure we can be of a measured value: [Statistics](../../statistics/index.md). Rounding and errors in more depth:
  [Estimation and precision](../level-6/06-estimation-precision.md) in level 6.
- Computers store numbers in a kind of scientific notation in base 2, called floating point: see
  [CSC108 Unit 10 (floating point)](../../../uoft/CSC108H1/unit10.md).
