---
title: "Doubling time and half-life"
---

# Doubling time and half-life

*Ratio, rates and money · level 7, lesson 2 of 7*

## A question to start

Bankers have an old trick called the **rule of 72**: to find how many years money takes to double, divide 72 by the
yearly interest rate in percent. At 8% a year, $72 \div 8 = 9$ years. Check it: $1.08^9 \approx 1.999$. Almost exactly
double.

That is suspiciously good for a rule that only needs one division. But try it at 72% a year: the rule says the money
doubles in $72 \div 72 = 1$ year, yet after one year you have only 1.72 times what you started with. So the rule is
sometimes excellent and sometimes poor. Why 72, of all numbers? And when can you trust it? By the end of this lesson
you will know exactly.

## The idea

### Doubling time

For something growing exponentially, the **doubling time** $T$ is the time it takes to double. It is the time that
makes the growth factor reach 2:

$$b^{\,T} = 2.$$

A surprising fact: the doubling time is the same **whatever the starting point**. It takes as long to grow from 100 to
200 as from 5000 to 10 000. Here is why. At any time $t$ the amount is $N_0 b^{\,t}$. One doubling time later it is

$$N_0 \, b^{\,t + T} = N_0 \, b^{\,t} \times b^{\,T} = N_0 \, b^{\,t} \times 2.$$

Twice what it was, wherever you start. (A linear quantity is the opposite: going from 100 to 200 takes far longer than
going from 5000 to 10 000 when you add the same amount each year.)

So an exponential can be described by its doubling time instead of its rate. If $T$ is the doubling time, then after
time $t$ there have been $t / T$ doublings, and

$$N(t) = N_0 \times 2^{\,t/T}.$$

### Half-life

For decay, the matching idea is the **half-life** $h$: the time to fall to half. It also does not depend on the
starting amount, by the same argument, and

$$N(t) = N_0 \left(\tfrac12\right)^{t/h}.$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 210" role="img" aria-label="A decay curve falling from 100 percent to 50, 25, 12.5 and 6.25 percent at one, two, three and four half-lives">
  <line x1="40" y1="170" x2="350" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="170" x2="40" y2="20" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="40,30.0 55,52.3 70,71.0 85,86.8 100,100.0 115,111.1 130,120.5 145,128.4 160,135.0 175,140.6 190,145.3 205,149.2 220,152.5 235,155.3 250,157.6 265,159.6 280,161.2 295,162.6 310,163.8 325,164.8 340,165.6" fill="none" stroke="#9cc9ea" stroke-width="3"/>
  <line x1="100" y1="170" x2="100" y2="100" stroke="currentColor" stroke-dasharray="4 3"/>
  <line x1="160" y1="170" x2="160" y2="135" stroke="currentColor" stroke-dasharray="4 3"/>
  <line x1="220" y1="170" x2="220" y2="152.5" stroke="currentColor" stroke-dasharray="4 3"/>
  <line x1="280" y1="170" x2="280" y2="161.25" stroke="currentColor" stroke-dasharray="4 3"/>
  <circle cx="40" cy="30" r="4" fill="#eea66f"/>
  <circle cx="100" cy="100" r="4" fill="#eea66f"/>
  <circle cx="160" cy="135" r="4" fill="#eea66f"/>
  <circle cx="220" cy="152.5" r="4" fill="#eea66f"/>
  <circle cx="280" cy="161.25" r="4" fill="#eea66f"/>
  <text x="48" y="28" font-size="11" fill="currentColor">100%</text>
  <text x="108" y="96" font-size="11" fill="currentColor">50%</text>
  <text x="166" y="130" font-size="11" fill="currentColor">25%</text>
  <text x="226" y="146" font-size="11" fill="currentColor">12.5%</text>
  <text x="286" y="155" font-size="11" fill="currentColor">6.25%</text>
  <text x="100" y="186" font-size="11" text-anchor="middle" fill="currentColor">h</text>
  <text x="160" y="186" font-size="11" text-anchor="middle" fill="currentColor">2h</text>
  <text x="220" y="186" font-size="11" text-anchor="middle" fill="currentColor">3h</text>
  <text x="280" y="186" font-size="11" text-anchor="middle" fill="currentColor">4h</text>
  <text x="195" y="204" font-size="11" text-anchor="middle" fill="currentColor">time, in half-lives</text>
</svg>
</div>

Each half-life cuts what is left in half: 100%, 50%, 25%, 12.5%, 6.25%, ... After 10 half-lives about 0.1% is left
($\tfrac{1}{1024}$). It never reaches exactly zero in the model, though in real life a sample has a whole number of
atoms, and eventually the last one decays.

Two famous half-lives:

- **Carbon-14**, a radioactive kind of carbon, has a half-life of about **5730 years**. Living plants and animals keep
  taking in carbon, so their share of carbon-14 matches the air's. When they die, the intake stops and the carbon-14
  slowly decays. Measuring what fraction is left tells how long ago they died. (Real carbon dating also corrects for
  small changes in the air's carbon-14 over the centuries.)
- **Plutonium-238** has a half-life of about **87.7 years**. Its decay gives off steady heat, which the Mars rovers
  Curiosity and Perseverance turn into electricity. That is why they can keep driving through dusty seasons and the
  Martian night, when solar panels would struggle.

### Finding the time exactly: logarithms

To find $T$ from $b^{\,T} = 2$ we need to bring $T$ down from the exponent. That is the job of the **logarithm**. The
natural logarithm, written $\ln$, is the button on a calculator that undoes powers of the number $e \approx 2.718$
(you will meet $e$ properly in [level 8](../level-8/05-continuous-e.md)). The one fact we need is the power rule:

$$\ln\left(b^{\,T}\right) = T \ln b.$$

Take $\ln$ of both sides of $b^{\,T} = 2$: $T \ln b = \ln 2$, so

$$T = \frac{\ln 2}{\ln b} = \frac{\ln 2}{\ln(1 + r)}.$$

For half-life, $b^{\,h} = \tfrac12$ gives $h = \dfrac{\ln 0.5}{\ln b}$. (Both logs are negative, so $h$ is positive.)
Any base of logarithm works in these formulas, as long as you use the same one on top and bottom.

### Why the rule of 72 works, and when it fails

Here are the natural logs of some growth factors near 1:

| $b = 1 + r$ | 1.01 | 1.05 | 1.10 | 1.20 |
| --- | --- | --- | --- | --- |
| $\ln b$ | 0.00995 | 0.0488 | 0.0953 | 0.182 |
| $r$ | 0.01 | 0.05 | 0.10 | 0.20 |

For small $r$, $\ln(1 + r)$ is very close to $r$ itself. (In calculus, this is because the graph of $\ln x$ has slope 1
at $x = 1$.) So for small rates,

$$T \approx \frac{\ln 2}{r} = \frac{0.693}{r} = \frac{69.3}{R},$$

where $R$ is the rate in percent. That is a "rule of 69.3".

But $\ln(1 + r)$ is always a little **less** than $r$: a better estimate is $\ln(1 + r) \approx r - \tfrac{r^2}{2}$.
Dividing by a slightly smaller number gives a slightly bigger time. Working it through (for small $r$,
$\tfrac{1}{1 - r/2} \approx 1 + \tfrac{r}{2}$):

$$T \approx \frac{0.693}{r}\left(1 + \frac r2\right) = \frac{69.3}{R} + 0.35.$$

The rule of 72 replaces this by $\tfrac{72}{R}$. The two agree when $\tfrac{72 - 69.3}{R} = 0.35$, that is, when $R$ is
about 8. So **the rule of 72 is tuned for rates near 8%**, typical of the old interest rates bankers worked with, and
72 was chosen over 70 or 69 because it divides evenly by 2, 3, 4, 6, 8, 9 and 12.

| Rate $R$% | Exact $T$ | $72 \div R$ | $69.3 \div R$ |
| --- | --- | --- | --- |
| 1 | 69.66 | 72 | 69.3 |
| 3 | 23.45 | 24 | 23.1 |
| 6 | 11.90 | 12 | 11.55 |
| 8 | 9.01 | 9 | 8.66 |
| 12 | 6.12 | 6 | 5.78 |
| 24 | 3.22 | 3 | 2.89 |
| 72 | 1.28 | 1 | 0.96 |

From about 2% to 15% the rule of 72 is within a few percent. For large rates the approximation $\ln(1 + r) \approx r$
breaks down, and so does the rule.

For decay, $\ln(1 - r) \approx -r - \tfrac{r^2}{2}$, which pushes the other way: the half-life is a little **shorter**
than $72 \div R$. At 3% decay a year, the rule says 24 years; the truth is about 22.8.

<figure class="play" data-play="graph" data-form="exp"><span class="ai-tag">AI-created</span><figcaption><b>Doubling and halving.</b> b = 2 doubles each step; b = 0.5 halves.</figcaption></figure>

## Worked examples

**1. Rule against exact.** How long does money take to double at 6% a year, compounded yearly?

- Rule of 72: $72 \div 6 = 12$ years.
- Exact: $T = \dfrac{\ln 2}{\ln 1.06} \approx \dfrac{0.6931}{0.0583} \approx 11.9$ years. After 12 years the money is
  $1.06^{12} \approx 2.01$ times as much.

**2. Carbon dating.** A piece of charcoal has 60% of the carbon-14 of living wood. How old is it?

- $\left(\tfrac12\right)^{t/5730} = 0.6$.
- Take logs: $\dfrac{t}{5730} \ln 0.5 = \ln 0.6$, so $t = 5730 \times \dfrac{\ln 0.6}{\ln 0.5} \approx 5730 \times 0.737
  \approx 4220$ years.
- Sense check: 60% is between 100% and 50%, so the age must be less than one half-life. ✓

**3. A rover's fuel.** Curiosity landed on Mars in 2012. What fraction of its plutonium-238's heat output was left 10
years later?

- $\left(\tfrac12\right)^{10/87.7} \approx 0.924$, so about 92% of the fuel's heat output remained. (The electricity
  falls a little faster, because the parts that turn heat into electricity also wear out slowly.)

**4. From half-life to an hourly rate.** Caffeine's half-life in an adult is often quoted as about 5 hours (it varies a
lot from person to person). Using 5 hours, what percent is removed each hour, and how much of a 200 mg dose is left
after 12 hours?

- Hourly factor $b$ with $b^5 = 0.5$: $b = 0.5^{1/5} \approx 0.8706$. About **12.9%** is removed each hour.
- After 12 hours: $200 \times 0.5^{12/5} \approx 37.9$ mg.

## Try it

1. Use the rule of 72 to estimate the doubling time at 4%, 9% and 12% a year.
2. What yearly rate doubles money in 6 years? Answer with the rule of 72, then exactly.
3. Find the exact doubling time at 5% a year, compounded yearly.
4. A substance has a half-life of 8 days. You start with 80 g. How much is left after 24 days? After 30 days?
5. A population doubles every 25 years. How many times bigger is it after 100 years? After 10 years?
6. A bone has 30% of the carbon-14 of a living animal. Roughly how old is it?
7. Use the table above to explain in one sentence why the rule of 72 is poor at a rate of 72%.
8. (Harder.) Find a "rule of $k$" for **tripling** time, in the style of the rule of 69.3, and test it at 7%.

??? note "Answers"
    1. $72 \div 4 = 18$ years; $72 \div 9 = 8$ years; $72 \div 12 = 6$ years.
    2. Rule: $72 \div 6 = 12\%$. Exact: $(1 + r)^6 = 2$, so $r = 2^{1/6} - 1 \approx 0.1225$, about **12.25%**.
    3. $T = \dfrac{\ln 2}{\ln 1.05} \approx \dfrac{0.6931}{0.04879} \approx 14.2$ years.
    4. 24 days is 3 half-lives: $80 \times \tfrac18 = 10$ g. 30 days is $30 \div 8 = 3.75$ half-lives:
       $80 \times 0.5^{3.75} \approx 5.95$ g.
    5. 100 years is 4 doublings: $2^4 = 16$ times. 10 years is $10 \div 25 = 0.4$ doublings: $2^{0.4} \approx 1.32$,
       about 32% bigger.
    6. $t = 5730 \times \dfrac{\ln 0.3}{\ln 0.5} \approx 5730 \times 1.737 \approx 9950$ years, roughly **10 000
       years**. (Between two half-lives, 25%, and one, 50%, so between 5730 and 11 460 years. ✓)
    7. At $r = 0.72$, $\ln(1.72) \approx 0.542$ is far below 0.72, so the approximation $\ln(1 + r) \approx r$ fails
       and the true doubling time, $0.693 \div 0.542 \approx 1.28$ years, is well above the rule's 1 year.
    8. Tripling needs $(1 + r)^T = 3$, so $T = \dfrac{\ln 3}{\ln(1 + r)} \approx \dfrac{1.0986}{r} = \dfrac{109.9}{R}$:
       a **rule of 110**. At 7%: $110 \div 7 \approx 15.7$ years; exact $\dfrac{\ln 3}{\ln 1.07} \approx 16.2$ years.
       (As with doubling, a slightly bigger number such as 114 works better at rates near 7%, because $\ln(1 + r)$ is
       a little below $r$.)

## Common mistake

**Thinking half-life means "half the time, all gone".** After two half-lives, a quarter is left, not nothing. Decay
halves what **remains**, again and again.

**Trusting the rule of 72 for big rates.** The rule rests on $\ln(1 + r) \approx r$, which is only true for small $r$.
For a credit card at 20% a year compounded monthly, or anything doubling in a couple of periods, use the exact formula.

## Where it leads

- Back: [Exponential growth and decay in the world](01-growth-decay-world.md) · Next:
  [Compounding periods](03-compounding-periods.md)
- [Level 7 page](index.md) · [Ratio, rates and money topic page](../index.md)
- Logarithms and their rules, properly: [Algebra](../../algebra/index.md). Powers with fractional exponents such as
  $0.5^{1/5}$: [Powers in Numbers](../../numbers/level-5/03-powers.md).
- Why $\ln(1 + r) \approx r - \tfrac{r^2}{2}$: it is the start of a Taylor series, in
  [MAT137 Unit 14 (power series and Taylor series)](../../../uoft/MAT137/unit14.md). The logarithm and $e^x$ as
  functions: [MAT137 Unit 4](../../../uoft/MAT137/unit04.md).
