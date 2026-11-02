---
title: "Beyond: Growth and decay"
---

# Beyond: Growth and decay

*Ratio and rates · step 5 of 5*

## A question to start

You put 1000 dollars in a savings account that pays 5% interest a year, and leave it alone for 30 years. One friend
says you will have $1000 + 30 \times 50 = 2500$ dollars. Another says it will be over 4300 dollars. Who is right? It
depends on one small detail: whether the interest itself earns interest. That detail, applied year after year, is the
difference between a straight line and an exponential curve, and it describes savings, debts, populations, medicines
and radioactive fuel alike.

## The idea

### Simple and compound interest

The amount you start with is the **principal** $P$. With **simple interest** you earn the same amount each year,
a fixed percent of the principal. After $t$ years at rate $r$ (written as a decimal, so 5% is $r = 0.05$):

$$A = P(1 + rt).$$

That is linear growth: the same amount is **added** each year. With **compound interest** each year's interest is
added to the account and earns interest too. Each year the amount is **multiplied** by $1 + r$, the multiplier from
[Master](04-master.md):

$$A = P(1 + r)^t.$$

For the question, simple interest gives $1000(1 + 0.05 \times 30) = 2500$ dollars, while compound interest gives
$1000 \times 1.05^{30} \approx 4321.94$ dollars. Both friends were right, about different accounts.

### Compounding more often

Banks often add interest monthly or daily. If a yearly rate $r$ is compounded $n$ times a year, each period uses the
rate $\tfrac{r}{n}$, and there are $nt$ periods:

$$A = P\left(1 + \frac{r}{n}\right)^{nt}.$$

More frequent compounding gives a little more, but not without limit. Take $P = 1$, $r = 1$ (100%) and $t = 1$:

| $n$ | 1 | 2 | 12 | 365 | 1 000 000 |
| --- | --- | --- | --- | --- | --- |
| $\left(1 + \frac1n\right)^n$ | 2 | 2.25 | 2.613 | 2.715 | 2.718 |

The values close in on the number $e \approx 2.71828$. Compounding "every instant", called **continuous
compounding**, gives

$$A = Pe^{rt}.$$

### Exponential growth and decay

All of these have the same shape: a starting amount times a fixed multiplier raised to the time.

$$N(t) = N_0 \, b^{\,t}$$

where $N_0$ is the amount at time 0. If $b > 1$ it is **exponential growth**; if $0 < b < 1$ it is **exponential
decay**. A quantity that shrinks by 15% a year has $b = 0.85$.

### Half-life and doubling time

For decay, it is natural to ask how long it takes to fall to **half**. That time, the **half-life** $h$, is the
same whatever amount you start with. After one half-life, $\tfrac12$ is left; after two, $\tfrac14$; after three,
$\tfrac18$:

$$N(t) = N_0 \left(\frac12\right)^{t/h}.$$

For growth, the matching idea is the **doubling time**. Growth at $r$ per period doubles when $(1 + r)^t = 2$, and
taking logarithms (see [algebra](../algebra/index.md), Beyond step):

$$t = \frac{\ln 2}{\ln(1 + r)}.$$

A handy estimate is the **rule of 72**: at $R\%$ growth per period, the doubling time is about $72 \div R$ periods.
It works because $\ln 2 \approx 0.693$ and, for small $r$, $\ln(1 + r) \approx r$; 72 is used instead of 69.3
because it is close and has so many factors, which makes the mental division easy.

### Linear against exponential

A quantity growing by a fixed **amount** grows linearly; one growing by a fixed **percent** grows exponentially. In
the short run they can look alike. In the long run exponential growth overtakes any linear growth, however slow the
percent and however fast the line.

## Worked examples

**1. Carbon dating.** Carbon-14 has a half-life of about 5730 years. A piece of old wood has 25% of the carbon-14 that
a living tree has. How old is it?

- 25% is $\tfrac14 = \left(\tfrac12\right)^2$: two half-lives.
- Age $\approx 2 \times 5730 = 11\,460$ years.

If only 10% were left: $\left(\tfrac12\right)^{t/5730} = 0.1$. Take logs: $\dfrac{t}{5730}\ln 0.5 = \ln 0.1$, so
$t = 5730 \times \dfrac{\ln 0.1}{\ln 0.5} \approx 5730 \times 3.32 \approx 19\,000$ years.

**2. Doubling time.** At 7% a year, how long does money take to double?

- Exactly: $t = \dfrac{\ln 2}{\ln 1.07} \approx \dfrac{0.6931}{0.0677} \approx 10.2$ years.
- Rule of 72: $72 \div 7 \approx 10.3$ years. Very close.

**3. A rover's power source.** The Curiosity rover on Mars is powered by the heat from decaying plutonium-238, which
has a half-life of about 87.7 years. What fraction of the fuel's original heat output is left after 14 years?

- $\left(\tfrac12\right)^{14/87.7} = 0.5^{0.1596} \approx 0.895$.
- About 90% of the heat is still being produced. (The electricity the rover gets falls a little faster than this,
  because the parts that turn heat into electricity also wear out slowly; the 90% is for the fuel alone.)

## Try it

1. 2000 dollars is invested at 3% a year, compounded yearly. How much is there after 10 years?
2. The same, but compounded monthly.
3. The same, but compounded continuously.
4. A medicine has a half-life of 6 hours in the body. A patient takes 200 mg. How much is left after 24 hours?
5. A town of 5000 people grows by 4% a year. After how many years does it first pass 10 000?
6. A car loses 15% of its value every year. After how many whole years is it worth less than half of what it cost?

??? note "Answers"
    1. $2000 \times 1.03^{10} \approx 2687.83$ dollars.
    2. $2000 \left(1 + \dfrac{0.03}{12}\right)^{120} = 2000 \times 1.0025^{120} \approx 2698.71$ dollars.
    3. $2000\,e^{0.03 \times 10} = 2000\,e^{0.3} \approx 2699.72$ dollars. Only about a dollar more than monthly.
    4. 24 hours is $24 \div 6 = 4$ half-lives, so $200 \times \left(\tfrac12\right)^4 = 200 \div 16 = 12.5$ mg.
    5. Doubling: $t = \dfrac{\ln 2}{\ln 1.04} \approx 17.7$ years. After 17 years it is still just under 10 000
       ($5000 \times 1.04^{17} \approx 9740$); after 18 years it is about 10 129. So **18 years**. (Rule of 72:
       $72 \div 4 = 18$.)
    6. Need $0.85^t < 0.5$, so $t > \dfrac{\ln 0.5}{\ln 0.85} \approx 4.27$. After 4 years it is worth
       $0.85^4 \approx 52\%$; after 5 years, about 44%. So **5 years**.

## Common mistake

**Adding the percents instead of multiplying the multipliers.** 5% a year for 30 years is **not** 150% growth; it
is $1.05^{30} \approx 4.32$, a 332% increase. And a 50% loss followed by a 50% gain does not bring you back:
$0.5 \times 1.5 = 0.75$, a 25% loss. Exponential change works on the multiplier, every period, on whatever amount is
there at the time.

## Where it leads

- Back a step: [Master: percent](04-master.md)
- The logarithms that solve for time, and the number $e$: [algebra](../algebra/index.md), Beyond step. The
  whole-number version, geometric sequences: [patterns and sequences](../patterns/index.md), Master step.
- Why $\left(1 + \frac1n\right)^n$ approaches $e$, and why $e^x$ is its own rate of change:
  [MAT137 Unit 4 (transcendental functions)](../../uoft/MAT137/unit04.md) and
  [Unit 11 (sequences)](../../uoft/MAT137/unit11.md).
- The other topics: [all topics](../index.md).
