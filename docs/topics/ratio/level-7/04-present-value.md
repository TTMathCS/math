---
title: "Present value"
---

# Present value

*Ratio, rates and money · level 7, lesson 4 of 7*

## A question to start

Someone offers you a choice: **10 000 dollars today**, or **12 000 dollars in 4 years**. Which should you take?

12 000 is more than 10 000, so the later offer looks better. But money today can be put in a bank and earn interest.
If the 10 000 dollars could grow to more than 12 000 dollars in 4 years, taking it now would be better. So the
answer depends on the interest rate, and there is a single rate at which the two offers are exactly equal. This
lesson shows how to compare money at different times, which is the idea underneath every loan, pension, bond and
lottery prize.

## The idea

### Money has a time value

A dollar today is worth more than a dollar next year, because today's dollar can earn interest in the meantime. That
is the **time value of money**. It means you cannot simply add or compare amounts paid at different times: 100 dollars
now and 100 dollars in ten years are different things, as different as 100 Canadian dollars and 100 euros. To compare
them we first "convert" them to the same date, using an interest rate as the exchange rate between times.

### Running compound interest backwards

In [lesson 3](03-compounding-periods.md), a principal $P$ grows over $N$ periods at rate $i$ per period to

$$A = P(1 + i)^{N}.$$

Now turn the question round. You **want** an amount $A$ at a future date. How much must you invest **now**? Divide
both sides by $(1 + i)^N$:

$$P = \frac{A}{(1 + i)^{N}} = A(1 + i)^{-N}.$$

This $P$ is the **present value** of $A$: the amount that, invested now at the given rate, grows to exactly $A$. The
negative exponent just means "divide by" (see [zero and negative exponents](../../numbers/level-5/04-zero-negative-exponents.md)).
The amount $A$ is called the **future value**. Finding a present value is also called **discounting**, and the number
$v = \tfrac{1}{1 + i}$ is the **discount factor** for one period.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 200" role="img" aria-label="Bars for each year from 0 to 5 showing the value of 10000 dollars due at year 5, at 4 percent: 8219 at year 0, 8548, 8890, 9246, 9615 and 10000 at year 5">
  <line x1="20" y1="160" x2="365" y2="160" stroke="currentColor" stroke-width="1.5"/>
  <rect x="28" y="61.4" width="24" height="98.6" fill="#9cc9ea"/>
  <text x="40" y="55.4" font-size="10" text-anchor="middle" fill="currentColor">8219</text>
  <text x="40" y="176" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <rect x="88" y="57.4" width="24" height="102.6" fill="#9cc9ea"/>
  <text x="100" y="51.4" font-size="10" text-anchor="middle" fill="currentColor">8548</text>
  <text x="100" y="176" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <rect x="148" y="53.3" width="24" height="106.7" fill="#9cc9ea"/>
  <text x="160" y="47.3" font-size="10" text-anchor="middle" fill="currentColor">8890</text>
  <text x="160" y="176" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <rect x="208" y="49.1" width="24" height="110.9" fill="#9cc9ea"/>
  <text x="220" y="43.1" font-size="10" text-anchor="middle" fill="currentColor">9246</text>
  <text x="220" y="176" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <rect x="268" y="44.6" width="24" height="115.4" fill="#9cc9ea"/>
  <text x="280" y="38.6" font-size="10" text-anchor="middle" fill="currentColor">9615</text>
  <text x="280" y="176" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <rect x="328" y="40.0" width="24" height="120.0" fill="#eea66f"/>
  <text x="340" y="34.0" font-size="10" text-anchor="middle" fill="currentColor">10000</text>
  <text x="340" y="176" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <text x="190" y="16" font-size="11" text-anchor="middle" fill="currentColor">each step back one year: divide by 1.04</text>
  <text x="190" y="194" font-size="11" text-anchor="middle" fill="currentColor">years from now</text>
</svg>
</div>

The drawing shows 10 000 dollars due in 5 years, at 4% compounded yearly. Each year closer to today, divide by 1.04.
Today it is worth about 8219 dollars: put 8219.27 dollars in the bank now and it becomes 10 000 dollars in 5 years.

### Comparing payments at different times

To compare or add payments made at different times, move them all to **one date**, called the **focal date**, using
$\times (1 + i)$ for each period you move forward and $\div (1 + i)$ for each period you move back. Then compare or add.

Does the choice of focal date matter? No. Moving everything from today to year $k$ multiplies **every** amount by the
same number $(1 + i)^k$. Multiplying two numbers by the same positive number never changes which is bigger, and
multiplying a sum multiplies each part. So any focal date gives the same decision. Today is usually the simplest.

### The rate matters a lot

The present value of a fixed future amount is **smaller** when the rate is **higher**, because you are dividing by a
bigger number $(1 + i)^N$. It is also smaller when the wait $N$ is **longer**. For 10 000 dollars due in 30 years, the
present value is about 3083 dollars at 4%, but only about 1741 dollars at 6%. Far-off amounts are very sensitive to
the rate, which is why long-term promises (pensions, long bonds) change value a lot when interest rates move.

### Solving for the rate or the time

The same equation $A = P(1 + i)^N$ can be solved for any one of its letters.

- The rate: $(1 + i)^N = \dfrac{A}{P}$, so $i = \left(\dfrac{A}{P}\right)^{1/N} - 1$.
- The time: take logarithms, as in [lesson 2](02-doubling-half-life.md): $N = \dfrac{\ln(A/P)}{\ln(1 + i)}$.

## Worked examples

**1. Saving for a goal.** How much must you invest now to have 10 000 dollars in 5 years at 4% a year?

- Compounded yearly: $P = 10\,000 \times 1.04^{-5} \approx 8219.27$ dollars.
- Compounded monthly: $i = 0.04 \div 12$, $N = 60$, so $P = 10\,000 \times \left(1 + \tfrac{0.04}{12}\right)^{-60}
  \approx 8190.03$ dollars. Slightly less is needed, because monthly compounding grows money a little faster.

**2. The offer from the start.** 10 000 dollars today, or 12 000 dollars in 4 years?

- At 4% a year: present value of 12 000 is $12\,000 \times 1.04^{-4} \approx 10\,257.65$. That is more than 10 000,
  so the **later** payment is worth more.
- At 6% a year: $12\,000 \times 1.06^{-4} \approx 9505.12$. Less than 10 000, so take the money **now**.
- The break-even rate: $(1 + i)^4 = 1.2$, so $i = 1.2^{1/4} - 1 \approx 4.66\%$. Above that rate, take the money now.

**3. The rate of a bond.** You pay 900 dollars for a bond that pays back 1000 dollars in 3 years and nothing before
then. What yearly rate are you earning?

- $i = \left(\tfrac{1000}{900}\right)^{1/3} - 1 \approx 0.0357$, about **3.57%** a year, compounded yearly.

**4. Two payments in one number.** You will receive 2000 dollars in 1 year and 3000 dollars in 3 years. What are they
worth today at 5% a year?

- $2000 \times 1.05^{-1} \approx 1904.76$ and $3000 \times 1.05^{-3} \approx 2591.51$.
- Together: about **4496.27** dollars. (Adding 2000 + 3000 = 5000 would ignore the time value.)

## Try it

1. Find the present value of 5000 dollars due in 3 years at 6% compounded yearly.
2. Find the present value of 20 000 dollars due in 10 years at 5% compounded monthly.
3. At 3% a year, which is worth more: 8000 dollars now, or 9000 dollars in 3 years?
4. What yearly rate makes 2500 dollars grow to 4000 dollars in 8 years?
5. At 5% a year, how many whole years does it take 3000 dollars to reach at least 5000 dollars?
6. You owe 1000 dollars in 1 year and another 1000 dollars in 2 years. What single payment **today** would settle both,
   at 6% a year?
7. For the same two debts, what single payment **in 2 years** would settle both? Check that it equals your answer to
   question 6 moved forward 2 years.
8. Explain, without numbers, why a higher interest rate makes the present value of a future payment smaller.

??? note "Answers"
    1. $5000 \times 1.06^{-3} \approx 4198.10$ dollars.
    2. $20\,000 \times \left(1 + \tfrac{0.05}{12}\right)^{-120} \approx 12\,143.22$ dollars.
    3. Present value of 9000: $9000 \times 1.03^{-3} \approx 8236.27$, more than 8000. The **9000 dollars in 3 years**
       is worth more.
    4. $\left(\tfrac{4000}{2500}\right)^{1/8} - 1 = 1.6^{1/8} - 1 \approx 0.0605$, about **6.05%**.
    5. $N = \dfrac{\ln(5000/3000)}{\ln 1.05} \approx 10.47$. After 10 years: about 4886.68; after 11: about 5131.02. So
       **11 years**.
    6. $1000 \times 1.06^{-1} + 1000 \times 1.06^{-2} \approx 943.40 + 890.00 = 1833.39$ dollars.
    7. Move the first debt forward 1 year: $1000 \times 1.06 = 1060$; the second is already at year 2: 1000. Total
       **2060** dollars. Check: $1833.39 \times 1.06^2 \approx 2060.00$. ✓
    8. Present value is the amount that grows to the future payment. At a higher rate money grows faster, so a smaller
       starting amount is enough to reach the same target.

## Common mistake

**Adding amounts paid at different times.** 2000 dollars next year plus 3000 dollars in three years is not "worth
5000 dollars". Move every amount to the same focal date first.

**Using a positive exponent by habit.** If the answer to "how much now?" is **bigger** than the future amount (at a
positive rate), the exponent's sign is wrong. Present values are smaller than the future amounts they replace.

## Where it leads

- Back: [Compounding periods](03-compounding-periods.md) · Next: [Annuities](05-annuities.md), many payments in a row.
- [Level 7 page](index.md) · [Ratio, rates and money topic page](../index.md)
- Present value is the key to [the present value of an annuity](06-annuity-present-value.md) and to the price of a
  bond in [Investing](../level-8/03-investing.md).
- Weighing an uncertain future amount by its probability, as well as by time, is
  [expected value](../../probability/level-7/02-expected-value.md) in Probability.
