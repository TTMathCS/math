---
title: "Fermi estimates"
---

# Fermi estimates

*Measurement · level 7, lesson 6 of 6*

## A question to start

How many piano tuners work in Toronto?

You cannot measure it. You probably do not know a single piano tuner. And yet, in two minutes, with a pencil and some
common sense, you can give an answer that is very likely within a factor of 3 of the truth. The physicist Enrico Fermi
was famous for questions like this; the story goes that he asked his students how many piano tuners worked in
Chicago. Such questions are now called **Fermi problems**, and the answers **Fermi estimates**.

Fermi used the same skill for real science. At the first nuclear test in July 1945, he dropped small scraps of paper
as the blast wave passed, watched how far they were blown, and estimated the energy of the explosion as about the same
as 10 000 tonnes of TNT. Careful later analysis gave about twice that. A handful of paper, a pace count, and the right
order of magnitude.

## The idea

### What a Fermi estimate is

A **Fermi estimate** answers a question that seems impossible to measure by:

1. breaking it into smaller pieces you **can** guess sensibly;
2. guessing each piece to a round number;
3. multiplying (or dividing) the pieces together, with the units carried through;
4. reporting the answer to **one significant figure**, or just as a power of ten.

The goal is not the exact answer. The goal is the right **order of magnitude**.

### Orders of magnitude

The **order of magnitude** of a number is roughly the power of ten nearest to it. 60 and 120 have order of magnitude
$10^2$; 3 000 000 is about $10^{6.5}$, between $10^6$ and $10^7$. Two numbers that differ by a factor of 10 differ by
"one order of magnitude".

Think of a ruler where each step is **ten times** the one before:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 120" role="img" aria-label="A number line with marks at 1, 10, 100, 1000, ten thousand, a hundred thousand and a million, equally spaced, with examples placed along it">
  <line x1="20" y1="60" x2="440" y2="60" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="2">
    <line x1="30" y1="52" x2="30" y2="68"/><line x1="98" y1="52" x2="98" y2="68"/><line x1="166" y1="52" x2="166" y2="68"/>
    <line x1="234" y1="52" x2="234" y2="68"/><line x1="302" y1="52" x2="302" y2="68"/><line x1="370" y1="52" x2="370" y2="68"/>
    <line x1="438" y1="52" x2="438" y2="68"/>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="30" y="86">1</text><text x="98" y="86">10</text><text x="166" y="86">100</text><text x="234" y="86">1000</text>
    <text x="302" y="86">10⁴</text><text x="370" y="86">10⁵</text><text x="438" y="86">10⁶</text>
  </g>
  <circle cx="151" cy="60" r="6" fill="#eea66f" stroke="currentColor"/>
  <text x="151" y="38" font-size="12" text-anchor="middle" fill="currentColor">60 tuners</text>
  <circle cx="355" cy="60" r="6" fill="#9cc9ea" stroke="currentColor"/>
  <text x="355" y="38" font-size="12" text-anchor="middle" fill="currentColor">60 000 pianos</text>
</svg>
</div>

On this ruler, "within a factor of 3" means "within half a step". That is what a good Fermi estimate achieves.

### Why it works: errors cancel

Each guess in a Fermi estimate might be off by a factor of 2. Surely multiplying five rough guesses gives a terrible
answer? Usually not, for two reasons.

**Some guesses are too high and some too low.** If you have no reason to lean one way, roughly half your guesses
overshoot and half undershoot. When you multiply, an overestimate by 2 and an underestimate by 2 cancel exactly:
$2 \times \tfrac12 = 1$.

**Factors combine more gently than they look.** Errors in a product multiply (that is the relative-error rule from
[lesson 3](03-errors-that-grow.md), seen on the ×10 ruler). If five factors are each off by a factor of up to 2 in
a random direction, the total is rarely off by the worst case $2^5 = 32$. More often several cancel and the total is
off by a factor of 2 to 4. (The precise reason uses the statistics of random sums, applied to the logarithms of the
factors; see [Statistics](../../statistics/index.md).)

There is a catch: this only works if your guesses are honest and not all biased the same way. If you always guess
high, the errors pile up.

### Bounding: when you have no idea at all

Some piece of the problem might feel impossible to guess. Then **bound** it. Ask: what is surely too small? What is
surely too big? Then take the **geometric mean** of the two bounds, $\sqrt{\text{low} \times \text{high}}$, which is the
middle on the ×10 ruler.

How many hairs on a head? Surely more than 10 000 (that would be a sparse lawn), surely fewer than 1 000 000. The
geometric mean is $\sqrt{10^4 \times 10^6} = 10^5$, a hundred thousand. Typical counts for a full head of hair are
indeed around 100 000.

Why the geometric mean and not the ordinary average? The average of 10 000 and 1 000 000 is 505 000, which is about half the high bound
but 50 times the low one: on the ×10 ruler it lies almost on top of "surely too big". The
geometric mean sits exactly in the middle of the ×10 ruler: 10 times the low bound and $\tfrac1{10}$ of the high one.

### Handy numbers to remember

| Quantity | Round value |
| --- | --- |
| seconds in a year | about $3 \times 10^7$ (in fact close to $\pi \times 10^7$) |
| people in Canada | about $4 \times 10^7$ |
| people on Earth | about $8 \times 10^9$ |
| people per household (Canada) | about 2.5 |
| human lifetime | about 80 years |
| walking speed | about 5 km/h |
| 1 m³ of water | 1000 L, 1000 kg |
| Earth's circumference | about 40 000 km |

## Worked examples

**1. Piano tuners in Toronto.** Carry the units, round freely.

1. People in Toronto: about 3 million.
2. Households: $3\,000\,000 \div 2.5 \approx 1\,200\,000$.
3. Households with a piano: maybe 1 in 20. Add a few in schools and churches: about $60\,000$ pianos.
4. Each piano is tuned about once a year: $60\,000$ tunings per year.
5. A tuner does about 4 tunings a day, 5 days a week, 50 weeks a year:
   $4 \times 5 \times 50 = 1000$ tunings per tuner per year.
6. Tuners: $\dfrac{60\,000 \text{ tunings/year}}{1000 \text{ tunings/(tuner·year)}} = 60$ tuners.

Answer: **about 60**, order of magnitude $10^2$. A business directory search would very likely find a few dozen. If
you are unsure of a step (1 piano in 20 homes or in 10?), the answer moves by a factor of 2, not 100. That is the
strength of the method.

**2. Water in Lake Ontario.** In litres.

1. On a map, Lake Ontario is roughly 300 km long and 80 km wide, but tapered: call the area about
   $300 \times 80 \times 0.8 \approx 20\,000$ km².
2. Average depth: big lakes are tens to hundreds of metres deep. Bound it: deeper than 10 m, shallower than 1000 m;
   geometric mean 100 m $= 0.1$ km.
3. Volume: $20\,000 \text{ km}^2 \times 0.1 \text{ km} = 2000$ km³.
4. One km³ is $(1000 \text{ m})^3 = 10^9$ m³, and each m³ is 1000 L: $1 \text{ km}^3 = 10^{12}$ L.
5. $2000 \times 10^{12} = 2 \times 10^{15}$ L.

The measured values are an area of about 19 000 km², an average depth of about 86 m and a volume of about 1600 km³,
that is $1.6 \times 10^{15}$ L. The estimate is within 25%.

**3. Heartbeats in a lifetime.**

$$70 \ \frac{\text{beats}}{\text{min}} \times 60 \ \frac{\text{min}}{\text{h}} \times 24 \ \frac{\text{h}}{\text{day}} \times 365 \ \frac{\text{days}}{\text{year}} \times 80 \text{ years} \approx 2.9 \times 10^9 \text{ beats}.$$

About **3 billion**. Every unit cancels except "beats", which is how you know the setup is right.

**4. Walking round Mars.** Mars's equator is about 21 000 km round. If you could walk 8 hours a day at 5 km/h,
how long would it take?

1. Distance per day: $8 \times 5 = 40$ km.
2. Days: $21\,000 \div 40 \approx 525$, so **about 500 days**, roughly a year and a half of Earth days, or most of one
   Mars year (about 687 Earth days).

## Try it

1. Give the order of magnitude (nearest power of ten) of: (a) 830; (b) 0.004; (c) the number of seconds in a day.
2. Estimate the number of seconds you have been alive. Give one significant figure.
3. Estimate how many litres of water a person drinks in a lifetime.
4. Use bounds and the geometric mean to estimate the number of words in a 300-page novel, if you are sure a page has
   more than 100 words and fewer than 1000.
5. Estimate how many tennis balls (diameter about 6.5 cm) would fill your classroom.
6. Estimate how many times a person breathes in a lifetime.
7. A Fermi estimate multiplies four factors. You guessed two of them twice too big and two of them twice too small.
   How far off is the answer? What if all four were twice too big?
8. A friend estimates 50 piano tuners in Toronto and you estimate 150. Are your estimates in agreement, in the Fermi
   sense? Explain using the ×10 ruler.

??? note "Answers"
    1. On the ×10 ruler, the halfway point between two powers of ten is their geometric mean. (a) Halfway between
       100 and 1000 is $\sqrt{100 \times 1000} \approx 316$; 830 is above it, so **$10^3$**. (b) Halfway between
       $10^{-3}$ and $10^{-2}$ is $\sqrt{10^{-5}} \approx 0.0032$; 0.004 is above it, so **$10^{-2}$**.
       (c) $24 \times 3600 = 86\,400$, about $10^5$.
    2. For a 15-year-old: $15 \times 3.2 \times 10^7 \approx 4.7 \times 10^8$, so about $5 \times 10^8$ seconds. (Use
       your own age: each year adds about $3 \times 10^7$.)
    3. About 1.5 to 2 L a day: $1.5 \times 365 \times 80 \approx 44\,000$ L, so about $4 \times 10^4$ L, or 40 m³
       (a small swimming pool's worth).
    4. Geometric mean of 100 and 1000: $\sqrt{100\,000} \approx 316$, say 300 words a page. $300 \times 300 = 90\,000$,
       about $10^5$ words. (Real novels: often 60 000 to 120 000.)
    5. A room about $9 \times 7 \times 3 = 189$ m³, say 200 m³. A ball fills a cube about 6.5 cm across, about
       $0.065^3 \approx 2.7 \times 10^{-4}$ m³. $200 \div 2.7 \times 10^{-4} \approx 7 \times 10^5$: **under a
       million**, around half a million to a million (packing balls closely fits a few more).
    6. About 12 breaths a minute: $12 \times 60 \times 24 \times 365 \times 80 \approx 5 \times 10^8$, half a
       billion.
    7. $2 \times 2 \times \tfrac12 \times \tfrac12 = 1$: **exactly right**, the errors cancel. All four twice too big:
       $2^4 = 16$ times too big, more than one order of magnitude out.
    8. $150 \div 50 = 3$, about half a step on the ×10 ruler. In the Fermi sense, **yes**: both say "about $10^2$". A
       factor of 3 is the normal spread of honest Fermi estimates.

## Common mistake

**Spending time on precision that is not there.** Writing "Toronto has 2 794 356 people, so 1 117 742 households" is
wasted effort when "1 piano in 20 homes" is a rough guess. Round every factor; give the answer to one figure.

**Dropping units.** In a long chain of factors, units are the check. If the units do not cancel to the unit you want
("tuners", "litres"), a factor is missing or upside down. (This is [dimensional analysis](04-dimensional-analysis.md)
at work.)

## Where it leads

- Back: [The square-cube law in nature](05-square-cube-law.md) · Next level: [Level 8: Measuring the
  unreachable](../level-8/index.md), where estimates and clever geometry measure the Earth, the planets and the stars.
- [Level 7 page](index.md) · [Measurement topic page](../index.md)
- Powers of ten and big numbers: [Scientific notation](../../numbers/level-5/05-scientific-notation.md).
- The ×10 ruler is a logarithmic scale: [Logarithms](../../algebra/level-8/04-logarithms.md), and in level 8 the
  lesson on [logarithmic measures](../level-8/06-logarithmic-measures.md).
- Estimation is the first unit of first-year physics at U of T:
  [PHY131 Unit 1: units, vectors and estimation](../../../uoft/PHY131H1/unit01.md).
