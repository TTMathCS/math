---
title: "Interpolation and extrapolation"
---

# Interpolation and extrapolation

*Statistics and data · level 6, lesson 4 of 6*

## A question to start

A child's height was measured every two years, from age 2 to age 10:

| Age (years) | 2 | 4 | 6 | 8 | 10 |
| --- | --- | --- | --- | --- | --- |
| Height (cm) | 87 | 102 | 115 | 127 | 138 |

The dots lie very close to a straight line, and the line of best fit is about

$$\text{height} = 6.35 \times \text{age} + 75.7.$$

It fits beautifully: each prediction is within 2 cm of the real height. So how tall will this child be at age 30?
The line says $6.35 \times 30 + 75.7 = 266.2$ cm, taller than any person has ever been measured. What went wrong? The
arithmetic is right, and the line fits the data very well. The problem is **where** we used it.

## The idea

### Inside and outside the data

Every line of best fit is built from data that cover some **range** of $x$ values. Here the ages go from 2 to 10.

- **Interpolation** means predicting for an $x$ value **inside** the range of the data. ("Inter" means "between": you
  predict between the values you have.) Predicting the height at age 7 is interpolation.
- **Extrapolation** means predicting for an $x$ value **outside** the range of the data, beyond the smallest or the
  largest. ("Extra" means "outside".) Predicting the height at age 30, or at age 0, is extrapolation.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 300" role="img" aria-label="Heights of a child at ages 2 to 10 rise along a straight line inside a shaded data band; the line is continued dashed out to age 30, where it predicts an impossible height">
  <line x1="60" y1="250" x2="400" y2="250" stroke="currentColor" stroke-width="1"/>
  <line x1="60" y1="250" x2="60" y2="20" stroke="currentColor" stroke-width="1"/>
  <line x1="60" y1="250" x2="60" y2="255" stroke="currentColor" stroke-width="1"/>
  <text x="60" y="268" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <line x1="116.7" y1="250" x2="116.7" y2="255" stroke="currentColor" stroke-width="1"/>
  <text x="116.7" y="268" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <line x1="173.3" y1="250" x2="173.3" y2="255" stroke="currentColor" stroke-width="1"/>
  <text x="173.3" y="268" font-size="11" text-anchor="middle" fill="currentColor">10</text>
  <line x1="230" y1="250" x2="230" y2="255" stroke="currentColor" stroke-width="1"/>
  <text x="230" y="268" font-size="11" text-anchor="middle" fill="currentColor">15</text>
  <line x1="286.7" y1="250" x2="286.7" y2="255" stroke="currentColor" stroke-width="1"/>
  <text x="286.7" y="268" font-size="11" text-anchor="middle" fill="currentColor">20</text>
  <line x1="343.3" y1="250" x2="343.3" y2="255" stroke="currentColor" stroke-width="1"/>
  <text x="343.3" y="268" font-size="11" text-anchor="middle" fill="currentColor">25</text>
  <line x1="400" y1="250" x2="400" y2="255" stroke="currentColor" stroke-width="1"/>
  <text x="400" y="268" font-size="11" text-anchor="middle" fill="currentColor">30</text>
  <line x1="55" y1="250" x2="60" y2="250" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="254" font-size="11" text-anchor="end" fill="currentColor">0</text>
  <line x1="55" y1="211.7" x2="60" y2="211.7" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="215.7" font-size="11" text-anchor="end" fill="currentColor">50</text>
  <line x1="55" y1="173.3" x2="60" y2="173.3" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="177.3" font-size="11" text-anchor="end" fill="currentColor">100</text>
  <line x1="55" y1="135" x2="60" y2="135" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="139" font-size="11" text-anchor="end" fill="currentColor">150</text>
  <line x1="55" y1="96.7" x2="60" y2="96.7" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="100.7" font-size="11" text-anchor="end" fill="currentColor">200</text>
  <line x1="55" y1="58.3" x2="60" y2="58.3" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="62.3" font-size="11" text-anchor="end" fill="currentColor">250</text>
  <line x1="55" y1="20" x2="60" y2="20" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="24" font-size="11" text-anchor="end" fill="currentColor">300</text>
  <text x="230" y="292" font-size="12" text-anchor="middle" fill="currentColor">age (years)</text>
  <text x="16" y="135" font-size="12" text-anchor="middle" fill="currentColor" transform="rotate(-90 16 135)">height (cm)</text>
  <circle cx="82.7" cy="183.3" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="105.3" cy="171.8" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="128" cy="161.8" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="150.7" cy="152.6" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="173.3" cy="144.2" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="82.7" y="20" width="90.7" height="230" fill="#7ccf9a" opacity="0.25"/>
  <text x="128" y="38" font-size="11" text-anchor="middle" fill="currentColor">data</text>
  <line x1="82.7" y1="182.2" x2="173.3" y2="143.3" stroke="#eea66f" stroke-width="2"/>
  <line x1="173.3" y1="143.3" x2="400" y2="45.9" stroke="#eea66f" stroke-width="2" stroke-dasharray="6 5"/>
  <text x="396" y="31.9" font-size="11" text-anchor="end" fill="currentColor">age 30: about 266 cm?</text>
</svg>
</div>

The shaded band shows where we have data. Inside it, the line is supported by real measurements on both sides. Outside
it, the dashed line is just the solid line carried on with a ruler, and nothing in the data says the pattern carries
on.

### Why interpolation is fairly safe

When you interpolate, there are data points on both sides of your prediction, close by. If the pattern is roughly
straight across the whole range, it is very likely roughly straight in the gaps too. For age 7:

$$6.35 \times 7 + 75.7 = 44.45 + 75.7 = 120.15,$$

about 120 cm, nicely between the measured 115 cm (age 6) and 127 cm (age 8). It is still an estimate, not a fact; but
the data hold it in place from both sides.

### Why extrapolation is risky

Outside the data, nothing holds the line in place. There are three common reasons the pattern breaks.

- **The pattern changes.** Children grow fast and then **stop**, around their late teens. The straight line knows
  nothing about that, because none of the data come from after age 10. The line also fails backwards: at age 0 it
  says $75.7$ cm, but newborn babies are usually around 50 cm long. Babies grow **faster** than 6.35 cm a year, so the
  real curve is steeper before age 2.
- **There are limits.** A test score cannot go above 100. A battery cannot go below 0%. A price cannot be negative.
  A straight line goes on forever in both directions and ignores all limits.
- **Something new happens.** Predicting the future is extrapolation in time. New inventions, new rules or new events
  can change any trend.

The further you go from the data, the less you can trust the line. A small step beyond the data (age 11) is a
reasonable guess; a giant step (age 30) is nonsense.

### The intercept is often an extrapolation

The $y$-intercept is the prediction at $x = 0$. If the data do not include values near $x = 0$, then the intercept is
an extrapolation, and it may mean nothing. For the heights, 75.7 cm is not a newborn's length. For the arm span line in
the last lesson, the intercept was −39 cm, which is plainly impossible: nobody has an arm span of 0. In such cases the
intercept is only a number that fixes where the line sits. It should not be read as a fact about the world.

### How to extrapolate honestly, when you must

Sometimes people must predict beyond their data: a city planning schools for the next ten years, a scientist
forecasting the weather. Good practice:

1. Say clearly that it is an extrapolation.
2. Go only a little way beyond the data if you can.
3. Ask whether there is a reason, beyond the data, to think the pattern continues (knowledge of how the thing works).
4. Check against limits and common sense: is the answer even possible?

<figure class="play" data-play="scatter"><span class="ai-tag">AI-created</span><figcaption><b>Reading the line.</b> Inside the cloud of points the line is a fair guess; far outside it is not.</figcaption></figure>

## Worked examples

**1. Which kind?** The study data had hours from 1 to 8. Using score = 4.75 × hours + 50:

- 3.5 hours: **interpolation** (inside 1 to 8). Prediction $4.75 \times 3.5 + 50 \approx 66.6$, about 67.
- 10 hours: **extrapolation**, a little beyond 8. Prediction $4.75 \times 10 + 50 = 97.5$. Possible, but uncertain.
- 20 hours: **extrapolation**, far beyond. Prediction $4.75 \times 20 + 50 = 145$, which is impossible on a test
  out of 100. The real pattern must flatten out as scores approach 100.

**2. A phone battery.** A phone's battery level was recorded every hour:

| Hours | 0 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- | --- |
| Battery (%) | 100 | 92 | 83 | 76 | 67 |

A line of best fit is about battery = 100 − 8.2 × hours.

- At 2.5 hours (interpolation): $100 - 8.2 \times 2.5 = 100 - 20.5 = 79.5\%$. Sensible.
- When will it reach 0? $100 - 8.2t = 0$ gives $t = 100 \div 8.2 \approx 12.2$ hours. This is an extrapolation, three
  times beyond the data, and the phone's use might change (screen off at night, a video in the evening). Treat it as
  a rough guess.
- At 15 hours: $100 - 8.2 \times 15 = 100 - 123 = -23\%$. Impossible. The line ignores the limit at 0.

**3. Interpolation is not a guarantee either.** Suppose the heights had been measured only at ages 2 and 18. A straight
line between them would miss the growth spurt in the early teens. Interpolation is safe only if the data are close
enough together to show the shape of the pattern. That is one reason to collect data across the whole range you care
about.

**4. Seasons.** A town's mean monthly temperatures rise steadily from January to June. A line fitted to these six
months, extrapolated to December, predicts a very hot December. In Canada, December is cold: the pattern is a yearly
cycle, not a line. The data from January to June could not show that.

## Try it

1. The study data cover 1 to 8 hours. Is each prediction interpolation or extrapolation? (a) 6.5 hours; (b) 12 hours;
   (c) 0 hours.
2. Use height = 6.35 × age + 75.7 to predict the child's height at age 9 and at age 50. Which do you trust, and why?
3. For the battery line, battery = 100 − 8.2 × hours, predict the battery at 3.5 hours. Is it interpolation?
4. A plant's height (cm) at days 0, 5, 10, 15, 20 was 2, 6, 11, 15, 20. A line of best fit is height = 0.9 × day + 1.8.
   Predict the height at day 12 and at day 365. Comment.
5. Why might the $y$-intercept of a line of best fit have no real meaning? Give an example.
6. A shop's sales grew by about 10% a month for its first 6 months. The owner fits a line and predicts sales five
   years ahead. Give two reasons to be careful.
7. Explain the difference between interpolation and extrapolation to a younger student, in two sentences.

??? note "Answers"
    1. (a) **Interpolation** (6.5 is between 1 and 8). (b) **Extrapolation** (12 is beyond 8). (c) **Extrapolation**
       (0 is below 1): this is the intercept.
    2. Age 9: $6.35 \times 9 + 75.7 = 57.15 + 75.7 = 132.85$, about 133 cm. Age 50:
       $6.35 \times 50 + 75.7 = 317.5 + 75.7 = 393.2$ cm. Trust the age 9 prediction (interpolation, between 127 and
       138). The age 50 one is a huge extrapolation and impossible: people stop growing.
    3. $100 - 8.2 \times 3.5 = 100 - 28.7 = 71.3\%$. Yes, interpolation: 3.5 is between 0 and 4.
    4. Day 12: $0.9 \times 12 + 1.8 = 10.8 + 1.8 = 12.6$ cm (interpolation, sensible: between 11 and 15). Day 365:
       $0.9 \times 365 + 1.8 = 328.5 + 1.8 = 330.3$ cm, more than 3 metres. A huge extrapolation; the plant will stop
       growing, flower or die long before that.
    5. The intercept is the prediction at $x = 0$. If the data are far from $x = 0$, it is an extrapolation and may be
       impossible. Example: the arm span line $h = 1.24a - 39$ gives a height of −39 cm for an arm span of 0.
    6. For example: five years (60 months) is ten times beyond the data, a huge extrapolation; growth of "10% a month"
       is not even a straight-line pattern (it grows faster and faster); a new shop's early growth usually slows down;
       competitors, prices or the economy may change.
    7. For example: "Interpolation is guessing a value in between values you have measured, like guessing your height
       halfway between two birthdays. Extrapolation is guessing far outside what you measured, like guessing your
       height at 40 from your heights as a little kid, and it can go badly wrong."

## Common mistake

**Trusting a prediction because the line fits well.** A line can fit the data perfectly and still be useless outside
them. How well the line fits tells you about the region where you have data, and nothing about the region where you
do not.

**Forgetting that the intercept can be an extrapolation.** Before you explain what the intercept "means", check
whether $x = 0$ is anywhere near your data.

## Where it leads

- Back: [Line of best fit by eye](03-line-best-fit.md) · Next: [Correlation is not causation](05-correlation-causation.md)
- [Level 6 page](index.md) · [Statistics topic page](../index.md)
- Curved patterns that a straight line cannot follow are fitted with other models in [level 7](../level-7/index.md).
- Patterns that grow by a percent each time (like the shop's 10% a month) are exponential: see
  [patterns](../../patterns/index.md) and [change](../../change/index.md).
