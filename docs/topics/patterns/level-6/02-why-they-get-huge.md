---
title: "Why geometric sequences get huge"
---

# Why geometric sequences get huge

*Patterns and sequences · level 6, lesson 2 of 6*

## A question to start

Take an ordinary sheet of paper, about 0.1 mm thick. Fold it in half: it is 0.2 mm thick. Fold again: 0.4 mm. Each
fold doubles the thickness.

If you could fold it **42 times**, how thick would it be? As thick as a book? As tall as a house? As tall as a
mountain?

The answer: about **440 000 kilometres**, more than the distance from the Earth to the Moon (about 384 400 km on
average). That sounds impossible, and in one sense it is: you cannot actually fold a sheet 42 times. This lesson
explains both why the number is so big and why the folding cannot be done.

## The idea

### Doubling, step by step

The thicknesses after 0, 1, 2, 3, ... folds form a geometric sequence with first term 0.1 mm and ratio 2. After $k$
folds the thickness is $0.1 \times 2^k$ mm. (Here it is natural to start counting at 0 folds, so the exponent is $k$,
not $k - 1$.)

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 150" role="img" aria-label="A sheet of paper folded 0, 1, 2 and 3 times: 1, 2, 4 and 8 layers, each stack half as wide as the one before">
  <rect x="10" y="105" width="120" height="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <text x="70" y="128" font-size="11" text-anchor="middle" fill="currentColor">0 folds</text>
  <text x="70" y="143" font-size="11" text-anchor="middle" fill="currentColor">1 layer</text>
  <rect x="150" y="105" width="60" height="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <rect x="150" y="100" width="60" height="5" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <text x="180" y="128" font-size="11" text-anchor="middle" fill="currentColor">1 fold</text>
  <text x="180" y="143" font-size="11" text-anchor="middle" fill="currentColor">2 layers</text>
  <rect x="230" y="105" width="30" height="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <rect x="230" y="100" width="30" height="5" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <rect x="230" y="95" width="30" height="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <rect x="230" y="90" width="30" height="5" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <text x="245" y="128" font-size="11" text-anchor="middle" fill="currentColor">2 folds</text>
  <text x="245" y="143" font-size="11" text-anchor="middle" fill="currentColor">4 layers</text>
  <rect x="280" y="105" width="15" height="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <rect x="280" y="100" width="15" height="5" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <rect x="280" y="95" width="15" height="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <rect x="280" y="90" width="15" height="5" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <rect x="280" y="85" width="15" height="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <rect x="280" y="80" width="15" height="5" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <rect x="280" y="75" width="15" height="5" fill="#9cc9ea" stroke="currentColor" stroke-width="0.6"/>
  <rect x="280" y="70" width="15" height="5" fill="#eea66f" stroke="currentColor" stroke-width="0.6"/>
  <text x="287.5" y="128" font-size="11" text-anchor="middle" fill="currentColor">3 folds</text>
  <text x="287.5" y="143" font-size="11" text-anchor="middle" fill="currentColor">8 layers</text>
  <text x="160" y="20" font-size="12" text-anchor="middle" fill="currentColor">each fold: twice as thick, half as wide</text>
</svg>
</div>

The first few folds are harmless. Ten folds give $0.1 \times 1024 \approx 102$ mm, about 10 cm: a thick book. But each
new fold does not add 10 cm; it **doubles** whatever is there. The amount added by each fold is as big as everything
before it put together.

### The handy fact: 2 to the 10 is about 1000

$$2^{10} = 1024 \approx 1000 = 10^3$$

This one fact lets you estimate any power of 2 in your head. Group the doublings in tens: every 10 doublings multiply
by about 1000, which adds three zeros.

| Doublings | Exact | Estimate |
| --- | --- | --- |
| $2^{10}$ | 1024 | about a thousand |
| $2^{20}$ | 1 048 576 | about a million |
| $2^{30}$ | 1 073 741 824 | about a billion |
| $2^{40}$ | 1 099 511 627 776 | about a trillion |

So 42 folds: $2^{42} = 2^2 \times 2^{40} \approx 4 \times 10^{12}$. Times 0.1 mm, that is about $4 \times 10^{11}$ mm.
Converting (1 km is $10^6$ mm) gives about $4 \times 10^5$ km = 400 000 km. The exact value is $0.1 \times 2^{42}$ mm,
about 439 805 km, so the estimate is close.

The estimate is a little low every time, because 1024 is 2.4% more than 1000. The error builds up with each group of
ten (it is itself geometric!): $2^{100}$ is about $1.27 \times 10^{30}$, while the estimate says $10^{30}$. For rough
work this is fine.

### The story of the rice and the chessboard

The story goes that the inventor of chess was offered any reward by a king, and asked only for rice: one grain on the
first square of the board, two on the second, four on the third, doubling on every square to the 64th. The king
laughed at such a small request.

Square $n$ holds $2^{n-1}$ grains. The first row of eight squares is tiny: 1, 2, 4, ..., 128. By the end of the
second row, square 16 holds $2^{15} = 32\,768$ grains, a bowl or two. But the last square holds

$$2^{63} = 2^3 \times (2^{10})^6 \approx 8 \times 10^{18}$$

grains (exactly 9 223 372 036 854 775 808). Rice grains are small, roughly 40 000 to 50 000 of them to a kilogram,
yet this one square is hundreds of billions of tonnes of rice: hundreds of years of the whole world's harvest. The
king could not pay. (Lesson 4 adds up **all** 64 squares.)

### Why it gets out of hand: each step is as big as all the steps before

Here is the deep reason doubling runs away. Look at the doubling sequence and add up everything before each term:

$$1 + 2 = 3, \quad 1 + 2 + 4 = 7, \quad 1 + 2 + 4 + 8 = 15, \quad \ldots$$

Each total is **one less** than the next term. So each new square of the chessboard holds more rice than all the
squares before it **put together**. In an arithmetic sequence the opposite is true: each new term is a smaller and
smaller fraction of the total so far. That is the difference between **linear** growth (adding) and **exponential**
growth (multiplying). However slowly an exponential sequence starts, and however big the linear step is, exponential
growth wins in the end.

### Why you cannot fold paper 42 times

Each fold doubles the thickness, but it also **halves** the area of the folded stack. Folding a normal sheet
alternately in both directions, each side shrinks by half every two folds. After 42 folds an A4 sheet would be a
stack 440 000 km tall with a top only about a ten-thousandth of a millimetre across: a thousand times **narrower than
the paper is thick**. No stack like that can exist. Long before then, the paper is too thick and too small to bend;
most people get stuck around 7 folds.

In 2002 a high-school student in California, Britney Gallivan, worked out how much paper a fold uses up in the curved
part at the edge, and then folded a very long strip of thin paper (about 1.2 km long) in half **12 times**. Her
calculation showed why each extra fold needs much more paper than the one before: the folding limit is itself a
geometric-sequence problem.

### Shrinking: halving is just as fast

Halving goes the other way just as quickly. Cut a 1 metre string in half, then cut one half in half, and so on. After
10 cuts it is $\tfrac{1}{1024}$ m, under a millimetre. After 30 cuts it is about $\tfrac{1}{10^9}$ m, a nanometre,
only a few atoms wide. With $r = \tfrac12$ the terms rush towards zero but, in mathematics, never reach it.

<figure class="play" data-play="seq" data-kind="geom"><span class="ai-tag">AI-created</span><figcaption><b>Doubling.</b> With r = 2, twenty terms reach over half a million.</figcaption></figure>

## Worked examples

**1. Estimating a power of 2.** Estimate $2^{25}$.

$2^{25} = 2^5 \times 2^{20} \approx 32 \times 10^6 = 32$ million. (Exactly: 33 554 432.)

**2. How many doublings?** About how many times must you double 1 to pass a billion?

A billion is $10^9 = (10^3)^3 \approx (2^{10})^3 = 2^{30}$. So about 30 doublings. In fact $2^{29} = 536\,870\,912$
is short and $2^{30} = 1\,073\,741\,824$ passes it: exactly 30.

**3. Folding to Mars.** Mars at its very closest to Earth is about 55 to 60 million km away. How many folds of 0.1 mm
paper would reach that far?

We need $0.1 \times 2^k$ mm to pass $5.5 \times 10^{13}$ mm (55 million km), so $2^k$ must pass $5.5 \times 10^{14}$.
Estimate: $2^{48} = 2^8 \times 2^{40} \approx 256 \times 1.1 \times 10^{12} \approx 2.8 \times 10^{14}$, not enough;
$2^{49}$ is double that, about $5.6 \times 10^{14}$, which passes. So **49 folds**, giving about 56 million km. Just **seven** folds more than the Moon: each fold doubles, so seven
folds multiply by $2^7 = 128$, and Mars at its closest is roughly 150 times as far as the Moon.

**4. The penny that doubles.** Would you rather have 1 million dollars now, or 1 cent today, 2 cents tomorrow, 4 cents
the next day, doubling every day for 30 days?

On day 30 alone you get $2^{29}$ cents $= 536\,870\,912$ cents $= 5\,368\,709.12$ dollars. The doubling offer is far
better, and that is only the last day's payment.

## Try it

1. Use $2^{10} \approx 1000$ to estimate $2^{20}$, $2^{33}$ and $2^{64}$. Which estimate is furthest off, and why?
2. How thick is a 0.1 mm sheet after 10 folds? After 20 folds (give your answer in metres)?
3. How many folds of 0.1 mm paper would make a stack more than 1 km tall?
4. A message is passed on: in hour 1 one person knows it, and every hour each new person tells 3 people who did not
   know. In which hour do more than 40 million new people hear it? (Assume enough people exist.)
5. Which is bigger, $2^{100}$ or $100^{10}$? Explain without a calculator.
6. A 1 m string is cut in half again and again. After how many cuts is a piece shorter than 1 mm?
7. Explain, using the chessboard, why $1 + 2 + 4 + \cdots + 2^9$ is one less than $2^{10}$.
8. Plan A pays 1000 dollars a day for 30 days. Plan B pays 1 cent on day 1 and doubles every day. On which day does
   B's payment **for that day** first pass 1000 dollars?

??? note "Answers"
    1. $2^{20} \approx 10^6$ (exact 1 048 576). $2^{33} = 2^3 \times 2^{30} \approx 8 \times 10^9$ (exact
       8 589 934 592). $2^{64} = 2^4 \times 2^{60} \approx 16 \times 10^{18} = 1.6 \times 10^{19}$ (exact about
       $1.84 \times 10^{19}$). The last is furthest off because it used six groups of ten, and each group adds another
       2.4% error.
    2. 10 folds: $0.1 \times 1024 = 102.4$ mm. 20 folds: $0.1 \times 1\,048\,576 = 104\,857.6$ mm, about 105 m: taller
       than most buildings.
    3. 1 km is 1 000 000 mm, so we need $0.1 \times 2^k > 1\,000\,000$, that is $2^k > 10^7$. $2^{23} = 8\,388\,608$
       is not enough; $2^{24} = 16\,777\,216$ is. **24 folds** (about 1.7 km).
    4. New people in hour $n$: $3^{n-1}$ (1, 3, 9, ...). $3^{15} = 14\,348\,907$ is too few; $3^{16} = 43\,046\,721$
       passes 40 million. So when $n - 1 = 16$: **hour 17**.
    5. $100^{10} = (10^2)^{10} = 10^{20}$. $2^{100} = (2^{10})^{10} \approx (10^3)^{10} = 10^{30}$, and the true value is
       even bigger. So $2^{100}$ is bigger, by a factor of about ten billion.
    6. After $k$ cuts the piece is $\tfrac{1}{2^k}$ m. Below 1 mm needs $2^k > 1000$: $2^9 = 512$ is not enough,
       $2^{10} = 1024$ is. **10 cuts** (about 0.98 mm).
    7. The grains on the first 10 squares are $1 + 2 + \cdots + 2^9$. Each square holds one more grain than all the
       squares before it together, so square 11, with $2^{10}$ grains, holds one more than the first 10 squares. So
       the sum is $2^{10} - 1 = 1023$.
    8. Day $n$ pays $2^{n-1}$ cents. 1000 dollars is 100 000 cents. $2^{16} = 65\,536$ is too small,
       $2^{17} = 131\,072$ passes it, so $n - 1 = 17$: **day 18**. From then on B pays more than A every day.

## Common mistake

**Thinking doubling adds a fixed amount.** "Ten folds made it 10 cm, so 40 folds make it 40 cm" treats folding like
adding. It is multiplying: 40 folds is $2^{30} \approx$ a billion times thicker than 10 folds.

**Forgetting what the exponent counts.** With the chessboard, square $n$ holds $2^{n-1}$ grains (square 1 holds
$2^0 = 1$). With folding, $k$ folds give $2^k$ layers, because we started at fold 0. Always check the first case.

## Where it leads

- Previous: [Geometric sequences](01-geometric-sequences.md) · Next: [Finding a and r](03-finding-a-and-r.md).
- [Level 6 page](index.md) · [Patterns topic page](../index.md)
- Exponential growth as a function, with graphs and the lily pond puzzle:
  [Algebra level 7](../../algebra/level-7/07-exponential-functions.md).
- Writing huge and tiny numbers with powers of 10: [Numbers](../../numbers/index.md).
- On the U of T shelf, exponential functions in calculus: [MAT137 Unit 4](../../../uoft/MAT137/unit04.md).
