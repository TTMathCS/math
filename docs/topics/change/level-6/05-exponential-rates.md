---
title: "Rates in exponential change"
---

# Rates in exponential change

*Change and motion · level 6, lesson 5 of 6*

## A question to start

A jar holds a colony of bacteria that **doubles every hour**. At noon the jar is completely full. When was it half
full?

Not at 6 a.m. It was half full at **11 a.m.**, just one hour before: one more doubling filled it. At 10 a.m. it was a
quarter full, and at 9 a.m. only an eighth.

So in the last hour the colony grew by half a jar, but in the hour from 9 to 10 it grew by only an eighth of a jar.
Same colony, same rule, and yet it grows four times as fast later on. Why? This lesson finds out how fast an
exponential quantity changes at each instant, and discovers a beautifully simple rule: **the more there is, the
faster it grows**, in exact proportion.

## The idea

### Exponential change

When a quantity is **multiplied** by the same number in each equal step of time, its change is called
**exponential**. You met this as geometric sequences in [Patterns](../../patterns/level-6/01-geometric-sequences.md)
and as growth and decay in [Ratio](../../ratio/level-7/01-growth-decay-world.md).

A colony that starts with 100 bacteria and doubles every hour has

$$P(t) = 100 \times 2^t$$

bacteria after $t$ hours. $P(1) = 200$, $P(2) = 400$, $P(3) = 800$, and in between it is smooth: $P(0.5) = 100 \times 2^{0.5} \approx 141$, because two half-hours of growth must multiply to make one doubling, and $1.414 \times 1.414 \approx 2$.

### How fast is it growing at each instant?

Use the central estimate from the [last lesson](04-estimating-rates.md), with a very small step, $h = 0.01$ hours, on
each side:

$$\text{rate at } t \approx \frac{P(t + 0.01) - P(t - 0.01)}{0.02}.$$

| Time $t$ (h) | Amount $P(t)$ | Rate of growth (bacteria per hour) | Rate ÷ amount |
| --- | --- | --- | --- |
| 0 | 100 | 69.3 | 0.693 |
| 1 | 200 | 138.6 | 0.693 |
| 2 | 400 | 277.3 | 0.693 |
| 3 | 800 | 554.5 | 0.693 |
| 4 | 1600 | 1109.0 | 0.693 |

Look at the last column. The rate of growth is **always 0.693 times the amount**. When the amount doubles, the rate
doubles too.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 215" role="img" aria-label="The curve 100 times 2 to the t, from 100 at time 0 to 1600 at time 4, getting steeper and steeper. Short tangent lines at 1, 2 and 3 hours have slopes of about 139, 277 and 555 bacteria per hour, each twice the one before.">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.3">
    <line x1="60" y1="20" x2="380" y2="20"/><line x1="60" y1="60" x2="380" y2="60"/><line x1="60" y1="100" x2="380" y2="100"/><line x1="60" y1="140" x2="380" y2="140"/>
    <line x1="140" y1="20" x2="140" y2="180"/><line x1="220" y1="20" x2="220" y2="180"/><line x1="300" y1="20" x2="300" y2="180"/><line x1="380" y1="20" x2="380" y2="180"/>
  </g>
  <line x1="60" y1="180" x2="390" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="60" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="60.0,170.0 68.0,169.3 76.0,168.5 84.0,167.7 92.0,166.8 100.0,165.9 108.0,164.8 116.0,163.8 124.0,162.6 132.0,161.3 140.0,160.0 148.0,158.6 156.0,157.0 164.0,155.4 172.0,153.6 180.0,151.7 188.0,149.7 196.0,147.5 204.0,145.2 212.0,142.7 220.0,140.0 228.0,137.1 236.0,134.1 244.0,130.8 252.0,127.2 260.0,123.4 268.0,119.4 276.0,115.0 284.0,110.4 292.0,105.4 300.0,100.0 308.0,94.3 316.0,88.1 324.0,81.5 332.0,74.4 340.0,66.9 348.0,58.7 356.0,50.0 364.0,40.7 372.0,30.7 380.0,20.0" fill="none" stroke="#9cc9ea" stroke-width="3.5"/>
  <g stroke="#eea66f" stroke-width="2.5">
    <line x1="84.0" y1="169.7" x2="196.0" y2="150.3"/><line x1="164.0" y1="159.4" x2="276.0" y2="120.6"/><line x1="244.0" y1="138.8" x2="356.0" y2="61.2"/>
  </g>
  <g fill="currentColor"><circle cx="140" cy="160" r="4"/><circle cx="220" cy="140" r="4"/><circle cx="300" cy="100" r="4"/></g>
  <g font-size="12" fill="currentColor">
    <text x="146" y="175">139 per h</text><text x="226" y="156">277 per h</text><text x="306" y="116">555 per h</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="60" y="196">0</text><text x="140" y="196">1</text><text x="220" y="196">2</text><text x="300" y="196">3</text><text x="380" y="196">4</text>
    <text x="220" y="211">time (hours)</text>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="end">
    <text x="54" y="184">0</text><text x="54" y="144">400</text><text x="54" y="104">800</text><text x="54" y="64">1200</text><text x="54" y="24">1600</text>
  </g>
</svg>
</div>

### Why the rate is proportional to the amount

Here is the reason, and it needs only the rule for powers, $2^{t + h} = 2^t \times 2^h$. Over a short interval from $t$
to $t + h$:

$$P(t + h) - P(t) = 100 \times 2^t \times 2^h - 100 \times 2^t = P(t) \times (2^h - 1).$$

So the average rate of growth over that interval is

$$\frac{P(t + h) - P(t)}{h} = P(t) \times \frac{2^h - 1}{h}.$$

Look at the second part, $\dfrac{2^h - 1}{h}$. It has **no $t$ in it**. It depends only on how small $h$ is, not on
when you are. Shrink $h$ and watch it settle:

| $h$ | 1 | 0.1 | 0.01 | 0.001 | 0.0001 |
| --- | --- | --- | --- | --- | --- |
| $\dfrac{2^h - 1}{h}$ | 1 | 0.7177 | 0.6956 | 0.6934 | 0.6932 |

The limit is about **0.693**. So at every instant,

$$\text{rate of growth} = 0.693 \times \text{amount}.$$

In words: **the rate is proportional to the amount**. Each bacterium, on its own, adds new bacteria at the same pace,
so twice as many bacteria make new ones twice as fast. That is the real meaning of exponential growth, and why it
ends up so explosive: growth makes more stuff, which makes faster growth.

### Three kinds of change, side by side

| Kind of change | Example | The rate at time $t$ |
| --- | --- | --- |
| Linear | a tap adding 12 L/min | the same at every instant (constant) |
| Quadratic | a stone falling $4.9t^2$ m | grows steadily with time: $9.8t$ |
| Exponential | bacteria $100 \times 2^t$ | proportional to the **amount**: $0.693 \times P$ |

### Other growth factors, and decay

The number 0.693 belongs to doubling. Every growth factor has its own number $k$, the limit of
$\dfrac{(\text{factor})^h - 1}{h}$:

| Each step multiplies by | Example | $k$ (rate ÷ amount) |
| --- | --- | --- |
| 2 | doubling every hour | about 0.693 per hour |
| 3 | tripling every day | about 1.099 per day |
| 1.05 | 5% interest each year | about 0.0488 per year |
| 0.5 | halving every hour (decay) | about $-0.693$ per hour |
| 0.9 | losing 10% each minute | about $-0.105$ per minute |

For **decay**, the factor is less than 1, $k$ is negative, and the amount shrinks at a rate proportional to what is
left: the less there is, the more slowly it shrinks.

Notice that 5% interest gives $k \approx 0.0488$, a little less than 0.05. That is because the money keeps growing
during the year: interest on interest. A steady instant rate of 4.88% builds up to exactly 5% by the end of the year.

Is there a factor for which $k$ is exactly 1, so that the rate **equals** the amount? Between 2 (0.693) and 3 (1.099)
there must be one. It is a famous number, $e \approx 2.718$, and it is the star of calculus in
[level 8](../level-8/index.md) and of compound interest in [Ratio](../../ratio/index.md).

### The cocoa, again

The cocoa from the [last lesson](04-estimating-rates.md) cooled from 80 °C in a 20 °C room. Its temperature **above
the room** was 60 °C, then 54, then 48.6, ...: multiplied by 0.9 each minute. That difference decays exponentially, so

$$\text{rate of cooling} \approx -0.105 \times (\text{temperature} - 20).$$

At 4 minutes the cocoa is at 59.4 °C, which is 39.4 above the room, and $-0.105 \times 39.4 \approx -4.14$ °C per
minute. That matches the central estimate of $-4.15$. The hotter the cocoa compared with the room, the faster it
cools. This rule is called **Newton's law of cooling**, after Isaac Newton, who studied it.

<figure class="play" data-play="graph" data-form="exp"><span class="ai-tag">AI-created</span><figcaption><b>The steeper it gets.</b> An exponential curve rises faster the higher it is.</figcaption></figure>

## Worked examples

**1. The bacteria at 3 hours.** How fast is the colony growing at $t = 3$?

$P(3) = 800$, so the rate is $0.693 \times 800 \approx 554$ bacteria per hour. (The table gave 554.5.)

**2. When is it growing at 1000 per hour?** Rate $= 0.693 \times P = 1000$ gives $P = 1000 \div 0.693 \approx 1443$.
That is between 800 ($t = 3$) and 1600 ($t = 4$), a little before 4 hours.

**3. Savings.** An account holds 2000 dollars and grows by 5% each year. How fast is it growing right now, in dollars
per year?

$0.0488 \times 2000 \approx 97.6$ dollars per year. (Compare: 5% of 2000 is 100 dollars **over a whole year**, but at
this instant the account is a bit smaller than its average over the coming year.)

**4. A medicine wearing off.** The amount of a medicine in the blood halves every 6 hours. Right now there are 400 mg.
How fast is it falling?

Halving every 6 hours means $k = -0.693$ per 6 hours, which is $-0.693 \div 6 \approx -0.1155$ per hour. Rate
$\approx -0.1155 \times 400 \approx -46$ mg per hour. When only 200 mg are left, it will fall half as fast, about
$-23$ mg per hour.

**5. A steady tap against a growing colony.** A tap adds 100 litres an hour, steadily. A colony starts at 100 and
doubles every hour. Compare their rates at $t = 0$ and $t = 5$.

- Tap: 100 L per hour at both times (linear: constant rate).
- Colony: at $t = 0$, $0.693 \times 100 \approx 69$ per hour, **slower** than the tap. At $t = 5$, $P = 3200$, so
  $0.693 \times 3200 \approx 2218$ per hour, **22 times faster**. Exponential growth may start slowly, but it always
  overtakes steady growth in the end.

## Try it

1. A colony of 500 doubles every hour. How fast is it growing when it has 500? When it has 4000?
2. Use the table of $\dfrac{2^h - 1}{h}$ to explain why the rate of growth of $100 \times 2^t$ at $t = 0$ is about 69.3.
3. Work out $\dfrac{3^{0.001} - 1}{0.001}$ on a calculator. A population of 50 triples every day: how fast is it growing
   at the start, per day?
4. A savings account grows by 5% a year and holds 10 000 dollars. About how fast is it growing at this instant?
5. A radioactive sample halves every hour and has 80 g left. How fast is it decaying? How fast when 10 g are left?
6. The cocoa is at 50 °C in a 20 °C room. Using the rule rate $\approx -0.105 \times (T - 20)$, how fast is it cooling?
   Check against the table in lesson 4 (it reads 51.9 at 6 min and 48.7 at 7 min).
7. For a quantity that is multiplied by 1.5 each hour, estimate $k$ using $h = 0.001$.
8. Explain, in words, why a colony twice as big grows twice as fast, but a falling stone twice as far down is **not**
   falling twice as fast.

??? note "Answers"
    1. $0.693 \times 500 \approx 347$ per hour; $0.693 \times 4000 \approx 2772$ per hour.
    2. Average rate over $[0, h]$ is $100 \times \dfrac{2^h - 1}{h}$. As $h$ shrinks, $\dfrac{2^h - 1}{h}$ heads to
       about 0.693, so the rate heads to $100 \times 0.693 = 69.3$ per hour.
    3. About 1.0992 (the limit is 1.0986). Rate at the start $\approx 1.099 \times 50 \approx 55$ per day.
    4. $0.0488 \times 10\,000 = 488$ dollars per year.
    5. $k = -0.693$ per hour. At 80 g: $-0.693 \times 80 \approx -55.4$ g per hour. At 10 g: $-6.9$ g per hour.
    6. $-0.105 \times 30 = -3.15$ °C per minute. From the table, 50 °C is between 6 and 7 minutes, where the
       one-minute change is $48.7 - 51.9 = -3.2$ °C. They agree well.
    7. $(1.5^{0.001} - 1) \div 0.001 \approx 0.4055$. (Between 0 for a factor of 1 and 0.693 for a factor of 2, as
       you would expect.)
    8. Each bacterium makes new bacteria at its own pace, so twice as many bacteria make new ones twice as fast: the
       rate depends on the amount. A stone's speed depends on how **long** it has been falling ($9.8t$), not on how far
       it has gone. After falling 4 times as far it is only twice as fast, since distance grows like $t^2$.

## Common mistake

**Thinking 5% growth means a rate of 0.05 × amount exactly.** The 5% is the total gain over a whole year, with interest
on interest building up inside the year. The instant rate is a bit smaller, $0.0488 \times$ amount. For small
percentages the two are close; for big growth factors they are very different (doubling is 100% per hour, but $k$ is
only 0.693).

**Thinking exponential means "fast".** At the start, exponential growth can be slower than steady growth (example 5).
What makes it exponential is that its rate is proportional to its size, so it keeps speeding up.

## Where it leads

- Back: [Estimating instantaneous rates from data and graphs](04-estimating-rates.md) · Next: [Where is change fastest?](06-fastest-change.md)
- [Level 6 page](index.md) · [Change and motion topic page](../index.md)
- Geometric sequences and why they get huge: [Geometric sequences](../../patterns/level-6/01-geometric-sequences.md) and
  [Why they get huge](../../patterns/level-6/02-why-they-get-huge.md).
- Doubling time and half-life: [Doubling and half-life](../../ratio/level-7/02-doubling-half-life.md); compound interest in
  [Ratio](../../ratio/index.md); exponential functions in [Algebra](../../algebra/level-7/07-exponential-functions.md).
- The number $e$ and "the rate equals the amount": [level 8](../level-8/index.md).
- On the U of T shelf: [MAT137 Unit 4: transcendental functions](../../../uoft/MAT137/unit04.md).
