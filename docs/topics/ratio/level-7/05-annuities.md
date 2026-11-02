---
title: "Annuities"
---

# Annuities

*Ratio, rates and money · level 7, lesson 5 of 7*

## A question to start

Two friends save for the day they turn 65. Both earn 7% a year on their savings.

- **Aya** puts 2000 dollars a year into savings for 10 years, the last deposit at age 35. Then she stops and adds
  nothing more, leaving the money to grow for 30 years. She has deposited 20 000 dollars.
- **Ben** waits. He puts in 2000 dollars a year for 30 years, the last deposit at age 65. He has deposited 60 000
  dollars, three times as much.

Who has more at 65? Surprisingly, **Aya**: about 210 000 dollars against Ben's 189 000. Her money had longer to
compound. By the end of this lesson you will be able to work out both numbers yourself, with one formula built from a
geometric series.

## The idea

### What an annuity is

An **annuity** is a sequence of **equal payments made at equal time intervals**: 100 dollars every month, 2000 dollars
every year. Savings plans, rent, car loans, mortgages and pensions are all annuities. The words:

- $R$: the regular **payment** (or deposit).
- $i$: the interest rate **per payment period**.
- $n$: the **number** of payments.
- In an **ordinary annuity**, each payment is made at the **end** of its period. In an **annuity due**, each is made at
  the **start**. Ordinary is the standard; assume it unless told otherwise.

The **future value** $FV$ of an annuity is what all the payments, plus all their interest, add up to at the time of the
last payment.

### Building the formula: one deposit at a time

Take 1000 dollars deposited at the end of each year for 5 years at 5%. Follow each deposit to the end of year 5.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 220" role="img" aria-label="A timeline from year 0 to year 5 with a deposit of 1000 at the end of years 1 to 5. Arrows carry each deposit to year 5, where they are worth 1000 times 1.05 to the power 4, 3, 2, 1 and 0">
  <line x1="30" y1="60" x2="380" y2="60" stroke="currentColor" stroke-width="1.5"/>
  <text x="40" y="45" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <line x1="40" y1="55" x2="40" y2="65" stroke="currentColor"/>
  <circle cx="100" cy="60" r="9" fill="#eea66f"/>
  <circle cx="160" cy="60" r="9" fill="#eea66f"/>
  <circle cx="220" cy="60" r="9" fill="#eea66f"/>
  <circle cx="280" cy="60" r="9" fill="#eea66f"/>
  <circle cx="340" cy="60" r="9" fill="#eea66f"/>
  <text x="100" y="45" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <text x="160" y="45" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <text x="220" y="45" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <text x="280" y="45" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <text x="340" y="45" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <text x="200" y="22" font-size="11" text-anchor="middle" fill="currentColor">1000 dollars at the end of each year</text>
  <polyline points="100,70 100,90 330,90" fill="none" stroke="#9cc9ea" stroke-width="2"/>
  <polyline points="160,70 160,115 330,115" fill="none" stroke="#9cc9ea" stroke-width="2"/>
  <polyline points="220,70 220,140 330,140" fill="none" stroke="#9cc9ea" stroke-width="2"/>
  <polyline points="280,70 280,165 330,165" fill="none" stroke="#9cc9ea" stroke-width="2"/>
  <line x1="340" y1="70" x2="340" y2="190" stroke="#9cc9ea" stroke-width="2"/>
  <text x="105" y="86" font-size="10" fill="currentColor">1000 × 1.05⁴ = 1215.51</text>
  <text x="165" y="111" font-size="10" fill="currentColor">1000 × 1.05³ = 1157.63</text>
  <text x="225" y="136" font-size="10" fill="currentColor">× 1.05² = 1102.50</text>
  <text x="285" y="161" font-size="10" fill="currentColor">1050.00</text>
  <text x="345" y="190" font-size="10" fill="currentColor">1000</text>
  <text x="200" y="214" font-size="11" text-anchor="middle" fill="currentColor">total at year 5: 5525.63</text>
</svg>
</div>

The last deposit arrives at the very end and earns nothing. The one before it earns one year of interest, and so on,
back to the first, which earns four years. So

$$FV = 1000 + 1000(1.05) + 1000(1.05)^2 + 1000(1.05)^3 + 1000(1.05)^4 \approx 5525.63.$$

### The future value is a geometric series

In general, with $n$ payments of $R$ at rate $i$ per period,

$$FV = R + R(1 + i) + R(1 + i)^2 + \cdots + R(1 + i)^{n-1}.$$

Each term is the one before times $1 + i$: a **geometric series** with first term $R$ and common ratio $1 + i$. You
can add it with the multiply-and-subtract trick from [Patterns](../../patterns/index.md). Multiply every term by
$(1 + i)$:

$$(1 + i)FV = R(1 + i) + R(1 + i)^2 + \cdots + R(1 + i)^{n-1} + R(1 + i)^{n}.$$

Subtract the first line from this one. Every term cancels except the last of the new line and the first of the old:

$$(1 + i)FV - FV = R(1 + i)^{n} - R, \qquad \text{so} \qquad i \cdot FV = R\left[(1 + i)^{n} - 1\right].$$

Divide by $i$:

$$FV = R \cdot \frac{(1 + i)^{n} - 1}{i}.$$

Check with the example: $1000 \times \dfrac{1.05^5 - 1}{0.05} = 1000 \times 5.52563 \approx 5525.63$. ✓

The fraction $\dfrac{(1 + i)^n - 1}{i}$ is the value of 1 dollar a period, so it is worth understanding on its own.
At $i = 0$ it would make no sense (you cannot divide by 0); with no interest, the future value is just $nR$.

### Annuity due

If every payment is made at the **start** of its period instead, each one gets one more period of interest. Every term
is multiplied by $(1 + i)$, so

$$FV_{\text{due}} = R \cdot \frac{(1 + i)^{n} - 1}{i} \cdot (1 + i).$$

### Payment period and interest period must match

The formula needs $i$ to be the rate **per payment period**. If you deposit monthly at 6% compounded monthly, $i =
0.005$. But if you deposit monthly and interest is compounded semi-annually, first find the **equivalent monthly rate**,
as in [lesson 3](03-compounding-periods.md).

### Solving for the payment

Often you know the goal and want the payment. A fund built up for a known future cost is called a **sinking fund**.
Rearranging,

$$R = \frac{FV \cdot i}{(1 + i)^{n} - 1}.$$

## Worked examples

**1. Saving 100 dollars a month for 10 years.** 100 dollars is deposited at the end of every month for 10 years at 5%
compounded monthly. Find the future value, and how much of it is interest.

- $i = 0.05 \div 12$, $n = 120$.
- $FV = 100 \times \dfrac{\left(1 + \tfrac{0.05}{12}\right)^{120} - 1}{0.05/12} \approx 15\,528.23$ dollars.
- Deposits: $100 \times 120 = 12\,000$ dollars. Interest: $15\,528.23 - 12\,000 = 3528.23$ dollars.
- If each deposit were made at the start of the month: $15\,528.23 \times \left(1 + \tfrac{0.05}{12}\right) \approx
  15\,592.93$ dollars.

**2. A sinking fund.** You want 50 000 dollars in 15 years. Interest is 4% compounded monthly. What monthly deposit
is needed?

- $i = 0.04 \div 12$, $n = 180$.
- $R = \dfrac{50\,000 \times (0.04/12)}{\left(1 + \tfrac{0.04}{12}\right)^{180} - 1} \approx 203.18$ dollars a month.

**3. Aya and Ben.** Check the numbers from the start.

- Aya: 10 yearly deposits at 7%: $2000 \times \dfrac{1.07^{10} - 1}{0.07} \approx 27\,632.90$ at age 35. Then 30 years
  of growth: $27\,632.90 \times 1.07^{30} \approx 210\,348.65$ dollars.
- Ben: 30 yearly deposits: $2000 \times \dfrac{1.07^{30} - 1}{0.07} \approx 188\,921.57$ dollars.
- At 5% instead, Aya ends with about 108 722 dollars and Ben with about 132 878. Starting early is powerful, but how
  powerful depends on the rate. (This is arithmetic about a made-up rate, not a forecast: real returns vary from year
  to year.)

**4. Mismatched periods.** 300 dollars is deposited at the end of each month for 5 years at 6% compounded
semi-annually. Find the future value.

- Semi-annual rate 0.03. Equivalent monthly rate $i = 1.03^{1/6} - 1 \approx 0.0049386$.
- $n = 60$: $FV = 300 \times \dfrac{(1 + i)^{60} - 1}{i} \approx 20\,891.44$ dollars.

## Try it

1. Use the formula to add $1 + 1.05 + 1.05^2 + 1.05^3$, and check by adding directly.
2. 500 dollars is deposited at the end of every quarter for 8 years at 6% compounded quarterly. Find the future
   value.
3. 200 dollars a month for 20 years at 6% compounded monthly. Find the future value and the total interest.
4. The same as question 3, but each deposit is made at the start of the month.
5. What yearly deposit grows to 20 000 dollars in 10 years at 6% compounded yearly?
6. You deposit 150 dollars at the end of each month at 4.8% compounded monthly. How many months until the account
   first reaches 10 000 dollars?
7. Explain why the future value of $n$ deposits of $R$ is more than $nR$ whenever the rate is positive.
8. Explain in words why, in example 3, Aya can finish ahead of Ben at 7% but behind him at 5%.

??? note "Answers"
    1. $\dfrac{1.05^4 - 1}{0.05} = \dfrac{0.21550625}{0.05} = 4.310125$. Directly:
       $1 + 1.05 + 1.1025 + 1.157625 = 4.310125$. ✓
    2. $i = 0.015$, $n = 32$: $500 \times \dfrac{1.015^{32} - 1}{0.015} \approx 20\,344.14$ dollars.
    3. $i = 0.005$, $n = 240$: $200 \times \dfrac{1.005^{240} - 1}{0.005} \approx 92\,408.18$ dollars. Deposits
       $200 \times 240 = 48\,000$, so interest $\approx 44\,408.18$ dollars, almost as much as was deposited.
    4. $92\,408.18 \times 1.005 \approx 92\,870.22$ dollars.
    5. $R = \dfrac{20\,000 \times 0.06}{1.06^{10} - 1} \approx 1517.36$ dollars a year.
    6. $150 \times \dfrac{1.004^{N} - 1}{0.004} \ge 10\,000$ gives $1.004^N \ge 1 + \dfrac{10\,000 \times 0.004}{150}
       \approx 1.2667$, so $N \ge \dfrac{\ln 1.2667}{\ln 1.004} \approx 59.2$. **60 months.**
    7. Every deposit except the last earns some interest, so each term $R(1 + i)^k$ with $k \ge 1$ is more than $R$;
       the sum of $n$ terms, each at least $R$ and most of them bigger, is more than $nR$.
    8. Aya's money compounds for longer, but Ben deposits three times as much. A higher rate makes extra years of
       compounding worth more (the factor $1.07^{30} \approx 7.6$ against $1.05^{30} \approx 4.3$), so at 7% time beats
       the extra deposits, and at 5% the extra deposits win.

## Common mistake

**Using a nominal yearly rate with monthly payments.** In the formula, $i$ must be the rate per **payment** period and
$n$ the number of **payments**. 100 dollars a month for 10 years at 5% is $n = 120$ and $i = 0.05/12$ (when compounded
monthly), never $n = 10$ and $i = 0.05$.

**Forgetting that the last deposit earns nothing.** In an ordinary annuity the final payment is made at the moment the
future value is measured. The top power in the series is $n - 1$, not $n$.

## Where it leads

- Back: [Present value](04-present-value.md) · Next: [Present value of an annuity](06-annuity-present-value.md), the
  same stream of payments valued today.
- [Level 7 page](index.md) · [Ratio, rates and money topic page](../index.md)
- The sum of a geometric series and why the trick works: [Patterns](../../patterns/index.md).
- Using these numbers in a whole financial plan: [Planning a financial life](07-financial-life.md).
- Infinite geometric series, which give the value of payments that go on for ever:
  [MAT137 Unit 13 (series)](../../../uoft/MAT137/unit13.md).
