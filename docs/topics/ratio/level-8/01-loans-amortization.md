---
title: "Loans and amortization"
---

# Loans and amortization

*Ratio, rates and money · level 8, lesson 1 of 6*

## A question to start

Someone borrows 300 000 dollars at 6% compounded monthly and pays it back in equal monthly payments over 25 years.
After 12½ years, exactly half the payments have been made. How much of the loan is still owed?

Half, surely? No: about **204 000 dollars**, roughly 68% of the original loan. Halfway through in time is nowhere near
halfway through in debt. This lesson explains why, with the tool lenders use to plan every loan: the **amortization
table**. (To **amortize** a debt means to pay it off gradually by regular payments; the word comes from an old French
word about bringing something to its death.)

## The idea

### The balance, one period at a time

Let $P$ be the amount borrowed (the **principal**), $i$ the interest rate per payment period and $R$ the payment. Write
$B_k$ for the **balance**, the amount still owed, just after payment $k$. Each period two things happen: interest is
added, then the payment is subtracted.

$$B_k = B_{k-1}(1 + i) - R, \qquad B_0 = P.$$

Unwinding this rule for $k$ steps gives

$$B_k = P(1 + i)^{k} - R\left[1 + (1 + i) + \cdots + (1 + i)^{k-1}\right] = P(1 + i)^{k} - R\,\frac{(1 + i)^{k} - 1}{i}.$$

In words: what the loan would have grown to with no payments, minus what the payments would have grown to (the
future value of an annuity, from [level 7](../level-7/05-annuities.md)).

### The payment formula

The loan is paid off when $B_n = 0$ after the last payment $n$. Set the formula to 0:

$$P(1 + i)^{n} = R\,\frac{(1 + i)^{n} - 1}{i}.$$

Multiply both sides by $(1 + i)^{-n}$ and solve for $R$:

$$R = \frac{P \cdot i}{1 - (1 + i)^{-n}}.$$

This is the same payment you found in [Present value of an annuity](../level-7/06-annuity-present-value.md), now reached
from the balance's point of view. Two different arguments giving the same formula is a good sign it is right.

### The amortization table

An **amortization table** follows the loan payment by payment. For each payment:

1. **Interest** for the period $= i \times$ (balance before the payment).
2. **Principal repaid** $=$ payment $-$ interest.
3. **New balance** $=$ old balance $-$ principal repaid.

Here is 10 000 dollars at 8% a year, repaid with 5 yearly payments. The payment is
$R = \dfrac{10\,000 \times 0.08}{1 - 1.08^{-5}} \approx 2504.56$ dollars. Amounts are rounded to the cent at each
step, as a lender would.

| Payment | Paid | Interest | Principal | Balance |
| --- | --- | --- | --- | --- |
| 0 | | | | 10 000.00 |
| 1 | 2504.56 | 800.00 | 1704.56 | 8295.44 |
| 2 | 2504.56 | 663.64 | 1840.92 | 6454.52 |
| 3 | 2504.56 | 516.36 | 1988.20 | 4466.32 |
| 4 | 2504.56 | 357.31 | 2147.25 | 2319.07 |
| 5 | 2504.60 | 185.53 | 2319.07 | 0.00 |

Because each payment was rounded down slightly, the **last payment** is adjusted (here up by 4 cents) to clear the
balance exactly. Total paid: $4 \times 2504.56 + 2504.60 = 12\,522.84$ dollars; total interest $2522.84$ dollars.

### Why early payments are mostly interest

The interest in each payment is $i$ times the balance, and the balance is largest at the start. So the first payments
are mostly interest, and only a small part goes to reducing the debt. As the balance falls, the interest part shrinks
and the principal part grows.

There is a beautiful exact pattern. Let $p_k$ be the principal part of payment $k$. Then $p_k = R - iB_{k-1}$ and
$p_{k+1} = R - iB_k$. Subtracting,

$$p_{k+1} - p_k = i\,(B_{k-1} - B_k) = i\,p_k, \qquad \text{so} \qquad p_{k+1} = p_k(1 + i).$$

**The principal part grows by the factor $1 + i$ every payment**: it is a geometric sequence. (Check the table:
$1704.56 \times 1.08 \approx 1840.92$.) It starts small and grows exponentially, which is why a long loan seems to
make no progress for years and then finishes quickly.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 210" role="img" aria-label="Twenty bars of equal height, one for each yearly payment on a 20-year loan at 8 percent. In each bar the interest part on top shrinks and the principal part below grows, from mostly interest at the start to mostly principal at the end">
  <line x1="40" y1="170" x2="350" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <rect x="45" y="139.4" width="11" height="30.6" fill="#7ccf9a"/><rect x="45" y="27.4" width="11" height="112.0" fill="#eea66f"/>
  <rect x="60" y="137.0" width="11" height="33.0" fill="#7ccf9a"/><rect x="60" y="27.4" width="11" height="109.6" fill="#eea66f"/>
  <rect x="75" y="134.3" width="11" height="35.7" fill="#7ccf9a"/><rect x="75" y="27.4" width="11" height="106.9" fill="#eea66f"/>
  <rect x="90" y="131.5" width="11" height="38.5" fill="#7ccf9a"/><rect x="90" y="27.4" width="11" height="104.1" fill="#eea66f"/>
  <rect x="105" y="128.4" width="11" height="41.6" fill="#7ccf9a"/><rect x="105" y="27.4" width="11" height="101.0" fill="#eea66f"/>
  <rect x="120" y="125.0" width="11" height="45.0" fill="#7ccf9a"/><rect x="120" y="27.4" width="11" height="97.6" fill="#eea66f"/>
  <rect x="135" y="121.5" width="11" height="48.5" fill="#7ccf9a"/><rect x="135" y="27.4" width="11" height="94.0" fill="#eea66f"/>
  <rect x="150" y="117.6" width="11" height="52.4" fill="#7ccf9a"/><rect x="150" y="27.4" width="11" height="90.2" fill="#eea66f"/>
  <rect x="165" y="113.4" width="11" height="56.6" fill="#7ccf9a"/><rect x="165" y="27.4" width="11" height="86.0" fill="#eea66f"/>
  <rect x="180" y="108.8" width="11" height="61.2" fill="#7ccf9a"/><rect x="180" y="27.4" width="11" height="81.4" fill="#eea66f"/>
  <rect x="195" y="104.0" width="11" height="66.0" fill="#7ccf9a"/><rect x="195" y="27.4" width="11" height="76.5" fill="#eea66f"/>
  <rect x="210" y="98.7" width="11" height="71.3" fill="#7ccf9a"/><rect x="210" y="27.4" width="11" height="71.3" fill="#eea66f"/>
  <rect x="225" y="93.0" width="11" height="77.0" fill="#7ccf9a"/><rect x="225" y="27.4" width="11" height="65.6" fill="#eea66f"/>
  <rect x="240" y="86.8" width="11" height="83.2" fill="#7ccf9a"/><rect x="240" y="27.4" width="11" height="59.4" fill="#eea66f"/>
  <rect x="255" y="80.1" width="11" height="89.9" fill="#7ccf9a"/><rect x="255" y="27.4" width="11" height="52.7" fill="#eea66f"/>
  <rect x="270" y="73.0" width="11" height="97.0" fill="#7ccf9a"/><rect x="270" y="27.4" width="11" height="45.5" fill="#eea66f"/>
  <rect x="285" y="65.2" width="11" height="104.8" fill="#7ccf9a"/><rect x="285" y="27.4" width="11" height="37.8" fill="#eea66f"/>
  <rect x="300" y="56.8" width="11" height="113.2" fill="#7ccf9a"/><rect x="300" y="27.4" width="11" height="29.4" fill="#eea66f"/>
  <rect x="315" y="47.7" width="11" height="122.3" fill="#7ccf9a"/><rect x="315" y="27.4" width="11" height="20.3" fill="#eea66f"/>
  <rect x="330" y="38.0" width="11" height="132.0" fill="#7ccf9a"/><rect x="330" y="27.4" width="11" height="10.6" fill="#eea66f"/>
  <rect x="60" y="8" width="10" height="10" fill="#eea66f"/>
  <text x="76" y="17" font-size="11" fill="currentColor">interest</text>
  <rect x="160" y="8" width="10" height="10" fill="#7ccf9a"/>
  <text x="176" y="17" font-size="11" fill="currentColor">principal repaid</text>
  <text x="50" y="186" font-size="10" text-anchor="middle" fill="currentColor">1</text>
  <text x="335" y="186" font-size="10" text-anchor="middle" fill="currentColor">20</text>
  <text x="195" y="202" font-size="11" text-anchor="middle" fill="currentColor">yearly payment number, 10 000 dollars at 8% over 20 years</text>
</svg>
</div>

In this 20-year loan, the principal and interest parts are equal only around the 12th payment, more than halfway
through.

### The balance at any time, without the table

There is a quick way to find the balance after $k$ payments: it is the **present value of the payments still to
come**, at the loan's rate:

$$B_k = R\,\frac{1 - (1 + i)^{-(n - k)}}{i}.$$

This makes sense: if you wanted to settle the loan today, the fair amount is what the remaining payments are worth
today. (It agrees with the formula at the top of the lesson; checking that is a good exercise in algebra.)

## Worked examples

**1. Splitting a car payment.** 20 000 dollars at 6% compounded monthly over 5 years has payment 386.66 dollars
([level 7, lesson 6](../level-7/06-annuity-present-value.md)). Split the first payment, and find the balance after
30 payments.

- First interest: $0.005 \times 20\,000 = 100$ dollars. Principal: $386.66 - 100 = 286.66$ dollars.
- After 30 payments, 30 remain: $B_{30} = 386.656 \times \dfrac{1 - 1.005^{-30}}{0.005} \approx 10\,746.74$ dollars.
  Half the time has passed, but about 54% of the loan is still owed.

**2. The question from the start.** 300 000 dollars at 6% compounded monthly, 25 years.

- $i = 0.005$, $n = 300$: $R = \dfrac{300\,000 \times 0.005}{1 - 1.005^{-300}} \approx 1932.90$ dollars a month.
- First month: interest $0.005 \times 300\,000 = 1500$ dollars, so only $432.90$ dollars reduces the debt. More than
  three quarters of the first payment is interest.
- After 150 payments: $B_{150} = 1932.90 \times \dfrac{1 - 1.005^{-150}}{0.005} \approx 203\,631$ dollars, about 68%
  of the loan.
- Total interest over 25 years: $300 \times 1932.904 - 300\,000 \approx 279\,871$ dollars, almost as much as was
  borrowed.

**3. The geometric pattern.** In example 1, what is the principal part of payment 13?

- Principal parts grow by $1.005$ per payment: $p_{13} = p_1 \times 1.005^{12} \approx 286.656 \times 1.0617 \approx
  304.34$ dollars.

## Try it

1. A loan of 5000 dollars at 10% a year is repaid with 3 equal yearly payments. Find the payment and build the
   amortization table.
2. 12 000 dollars is borrowed at 4.8% compounded monthly for 4 years. Find the monthly payment, and split the first
   payment into interest and principal.
3. For the loan in question 2, find the balance after 24 payments.
4. Find the total interest on the loan in question 2.
5. In your table for question 1, check that each principal part is 1.1 times the one before.
6. Explain why the balance column of an amortization table must end at 0.
7. Someone takes the 20 000 dollar loan of example 1 as **interest-only** for 5 years (paying just 100 dollars of
   interest a month) and then still owes the 20 000 dollars. Compare the total interest with the amortized loan.
8. (Harder.) Show that the two balance formulas agree: that
   $P(1 + i)^{k} - R\,\dfrac{(1 + i)^{k} - 1}{i} = R\,\dfrac{1 - (1 + i)^{-(n - k)}}{i}$ when $R = \dfrac{Pi}{1 - (1 + i)^{-n}}$.

??? note "Answers"
    1. $R = \dfrac{5000 \times 0.1}{1 - 1.1^{-3}} \approx 2010.57$ dollars.

        | Payment | Paid | Interest | Principal | Balance |
        | --- | --- | --- | --- | --- |
        | 1 | 2010.57 | 500.00 | 1510.57 | 3489.43 |
        | 2 | 2010.57 | 348.94 | 1661.63 | 1827.80 |
        | 3 | 2010.58 | 182.78 | 1827.80 | 0.00 |

        (The last payment is a cent higher because of rounding.)
    2. $i = 0.004$, $n = 48$: $R = \dfrac{12\,000 \times 0.004}{1 - 1.004^{-48}} \approx 275.27$ dollars. First
       interest $0.004 \times 12\,000 = 48$ dollars; principal $275.27 - 48 = 227.27$ dollars.
    3. $B_{24} = 275.266 \times \dfrac{1 - 1.004^{-24}}{0.004} \approx 6287.21$ dollars.
    4. $48 \times 275.266 - 12\,000 \approx 1212.75$ dollars.
    5. $1510.57 \times 1.1 \approx 1661.63$ ✓ and $1661.63 \times 1.1 \approx 1827.79$ ✓ (1827.80 after rounding).
    6. The payment was chosen exactly so that $B_n = 0$: the present value of all $n$ payments equals the amount
       borrowed. Any small leftover from rounding is cleared by adjusting the last payment.
    7. Interest-only: $60 \times 100 = 6000$ dollars of interest, and the 20 000 dollars is still owed. Amortized: about
       3199 dollars of interest, and nothing is owed. The amortized loan costs less interest because the balance falls
       every month.
    8. Put $x = (1 + i)$. Multiply the right side out: $\dfrac{R}{i}\left(1 - x^{k-n}\right)$. The left side is
       $Px^k - \dfrac{R}{i}(x^k - 1)$. With $P = \dfrac{R}{i}(1 - x^{-n})$, the left side is
       $\dfrac{R}{i}\left[(1 - x^{-n})x^k - x^k + 1\right] = \dfrac{R}{i}\left[1 - x^{k-n}\right]$. They agree.

## Common mistake

**Thinking each payment reduces the debt by the same amount.** That would be true only with no interest. With
interest, the debt falls slowly at first and quickly at the end, because the principal part grows geometrically.

**Computing interest on the original loan every period.** Interest is charged on the **current** balance. Using the
original principal each time would be simple interest, and would overcharge more and more as the loan is repaid.

## Where it leads

- Next: [Mortgages](02-mortgages.md), the biggest loan most people ever take, with Canada's semi-annual compounding.
- [Level 8 page](index.md) · [Ratio, rates and money topic page](../index.md)
- The loan payment as a present value: [Present value of an annuity](../level-7/06-annuity-present-value.md). The rule
  $B_k = B_{k-1}(1 + i) - R$ is a **recurrence relation**, studied in [Patterns](../../patterns/index.md).
- Spreadsheets build amortization tables in seconds, one row per payment, with the three rules above:
  [Spreadsheets](../../statistics/level-4/05-spreadsheets.md) in Statistics.
