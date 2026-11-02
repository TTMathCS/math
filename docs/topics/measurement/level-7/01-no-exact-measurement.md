---
title: "No measurement is exact"
---

# No measurement is exact

*Measurement · level 7, lesson 1 of 6*

## A question to start

Ask five careful people to measure the width of the same school desk with the same metre stick. You might get
62.4 cm, 62.3 cm, 62.4 cm, 62.5 cm and 62.4 cm. Nobody was careless. Which one is the **true** width?

Here is the surprising answer: none of them, and you will never know the true width exactly. Not with a better ruler,
not with a laser, not with the best instrument in the world. Every measurement is a number **with a fuzz around it**.
A good scientist does not hide the fuzz. They say how big it is. This lesson is about how to say that honestly.

## The idea

### Counting is exact, measuring is not

Some numbers are exact. There are 28 students in the class, 7 days in a week, 3 sides on a triangle. These come from
**counting**, and counting whole things has no fuzz.

A **measurement** is different. A length, a mass, a time or a temperature can take any value on a smooth scale, not
just whole steps. When you read it off an instrument, you are choosing the nearest mark you can see. The true value
is somewhere near that mark, but almost never exactly on it.

### Precision: the smallest step you can read

The **precision** of an instrument is the size of the smallest step it can show. It is also called the **resolution**
or the **unit of measure**.

- A school ruler marked in millimetres has precision 1 mm = 0.1 cm.
- A kitchen scale that jumps in steps of 5 g has precision 5 g.
- A digital thermometer showing 21.4 °C has precision 0.1 °C.
- A stopwatch showing 9.58 s has precision 0.01 s.

Look at the end of a pencil against a millimetre ruler:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 150" role="img" aria-label="A ruler from 12.0 to 12.6 centimetres marked in millimetres. A pencil ends between 12.2 and 12.4; the shaded band from 12.25 to 12.35 shows every length that would be read as 12.3 centimetres">
  <rect x="180" y="20" width="60" height="70" fill="#9cc9ea" fill-opacity="0.45"/>
  <rect x="10" y="38" width="206" height="22" rx="4" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <line x1="10" y1="90" x2="430" y2="90" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="1.5">
    <line x1="30" y1="90" x2="30" y2="70"/><line x1="90" y1="90" x2="90" y2="78"/><line x1="150" y1="90" x2="150" y2="78"/>
    <line x1="210" y1="90" x2="210" y2="78"/><line x1="270" y1="90" x2="270" y2="78"/><line x1="330" y1="90" x2="330" y2="70"/>
    <line x1="390" y1="90" x2="390" y2="78"/>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="30" y="108">12.0</text><text x="90" y="108">12.1</text><text x="150" y="108">12.2</text>
    <text x="210" y="108">12.3</text><text x="270" y="108">12.4</text><text x="330" y="108">12.5</text><text x="390" y="108">12.6</text>
    <text x="210" y="138">every length in the blue band reads as 12.3 cm</text>
    <text x="180" y="14">12.25</text><text x="240" y="14">12.35</text>
  </g>
</svg>
</div>

The pencil ends a little past the 12.3 mark. You cannot see tenths of a millimetre, so you read **12.3 cm**. But any
pencil ending anywhere in the blue band, from 12.25 cm to 12.35 cm, would have been read as 12.3 cm too. The reading
tells you which band the true length is in. It does not tell you where in the band.

### Half the smallest division

The band reaches **half a step** on each side of the mark: half of 0.1 cm is 0.05 cm. So we write

$$L = 12.3 \pm 0.05 \text{ cm}$$

read "12.3 plus or minus 0.05 centimetres". It means

$$12.25 \le L < 12.35.$$

The number 0.05 cm is the **greatest possible error** (GPE): the furthest the true value can be from the reading,
just from the size of the step. The rule is:

**Greatest possible error = half the precision.**

**Why half?** You always read the **nearest** mark. If the true value were more than half a step from a mark, a
different mark would be nearer, and you would have read that one instead. So the true value is never more than half a
step from the mark you chose. (Strictly, a value exactly half way, like 12.35, sits on the border. We follow the usual
rounding rule and send it up, which is why one end has $\le$ and the other $<$.)

### Lower and upper bounds

The two ends of the band have names. In $12.25 \le L < 12.35$, the number 12.25 is the **lower bound** and 12.35 is
the **upper bound**. You met these with rounding (rounding to the nearest ten, nearest unit). A measurement read to a
precision is exactly a number rounded to that precision, by the instrument and your eye.

| Reading | Precision | GPE | Interval |
| --- | --- | --- | --- |
| 12.3 cm | 0.1 cm | 0.05 cm | $12.25 \le L < 12.35$ |
| 340 g (scale in 10 g steps) | 10 g | 5 g | $335 \le m < 345$ |
| 21.4 °C | 0.1 °C | 0.05 °C | $21.35 \le T < 21.45$ |
| 2.0 h (to the nearest quarter hour) | 0.25 h | 0.125 h | $1.875 \le t < 2.125$ |

### The instrument is only part of the story

Half the smallest division is the **best** you can hope for from the scale. Real measurements can be worse, for
other reasons.

- **Reading error.** Looking at a scale from the side makes the mark seem to move. This is called **parallax error**
  (the same idea, used on purpose to measure stars, comes in level 8). Read with your eye straight in front of the
  mark.
- **Zero error.** A ruler with a worn end, or a scale that shows 3 g with nothing on it, adds the same mistake to
  every reading. You can fix it by starting at a clear mark, or by subtracting the empty reading (taring).
- **Human timing.** A stopwatch reads to 0.01 s, but a person's thumb reacts about 0.1 to 0.3 s late, and not by the
  same amount each time. The display's precision (0.01 s) is not the real uncertainty of a hand-timed race.
- **The thing itself.** A desk is not a perfect box; its width might differ by a millimetre from one end to the other.
  Then "the width" is itself a little fuzzy.

Errors that push every reading the same way (zero error, a stretched tape) are **systematic errors**. Errors that
scatter readings above and below (reaction time, eye position) are **random errors**. Repeating a measurement and
averaging helps against random errors (that is what the five people in the opening question could do). It does
nothing against systematic ones: five readings from a ruler with a missing first millimetre are all a millimetre out.

### Precision and accuracy are different words

In everyday speech they mean the same. In science they do not.

- **Precision** is how finely you can read, and how close repeated readings are to each other.
- **Accuracy** is how close the reading is to the true value.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 150" role="img" aria-label="Two targets. On the left, dots clustered tightly but far from the centre: precise but not accurate. On the right, dots spread loosely around the centre: accurate on average but not precise">
  <g fill="none" stroke="currentColor" stroke-width="1.5">
    <circle cx="110" cy="70" r="55"/><circle cx="110" cy="70" r="35"/><circle cx="110" cy="70" r="15"/>
    <circle cx="330" cy="70" r="55"/><circle cx="330" cy="70" r="35"/><circle cx="330" cy="70" r="15"/>
  </g>
  <g fill="#eea66f" stroke="currentColor">
    <circle cx="138" cy="40" r="4"/><circle cx="144" cy="44" r="4"/><circle cx="136" cy="48" r="4"/><circle cx="145" cy="37" r="4"/><circle cx="141" cy="51" r="4"/>
  </g>
  <g fill="#7ccf9a" stroke="currentColor">
    <circle cx="310" cy="58" r="4"/><circle cx="352" cy="64" r="4"/><circle cx="326" cy="98" r="4"/><circle cx="339" cy="45" r="4"/><circle cx="318" cy="83" r="4"/>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="110" y="142">precise, not accurate</text><text x="330" y="142">accurate on average, not precise</text>
  </g>
</svg>
</div>

A kitchen scale that reads to 1 g but was knocked and now reads 20 g too high is **precise but not accurate**. Good
measurement needs both.

### Relative precision

An error of 0.05 cm is tiny for a 12.3 cm pencil and large for a 0.4 cm screw. To compare, divide the error by the
reading:

$$\text{relative error} = \frac{\text{GPE}}{\text{reading}}, \qquad \text{percent error} = \frac{\text{GPE}}{\text{reading}} \times 100\%.$$

For the pencil: $0.05 \div 12.3 \approx 0.0041$, about 0.4%. For the screw: $0.05 \div 0.4 = 0.125$, a full 12.5%. Same
ruler, same GPE, but the pencil is measured about 30 times more precisely compared with its size. This is why
scientists measure long distances when they can: to time one swing of a pendulum, time 20 swings and divide by 20.

## Worked examples

**1. A measuring cylinder.** A measuring cylinder is marked every 2 mL. The water is at the 46 mL mark. Write the
reading with its error and as an interval.

1. Precision: 2 mL. Greatest possible error: half of 2 mL = 1 mL.
2. Reading: $V = 46 \pm 1$ mL.
3. Interval: $45 \le V < 47$ mL.

**2. A rounded distance.** A trail sign says 340 m, to the nearest 10 m. Find the bounds and the percent error.

1. Precision: 10 m, so GPE = 5 m.
2. Bounds: $335 \le d < 345$ m.
3. Percent error: $5 \div 340 \times 100\% \approx 1.5\%$.

**3. Which is more precise?** Measurement A: a room is 4.25 m, to the nearest centimetre. Measurement B: a coin is
2.3 cm, to the nearest millimetre. Which is more precise in absolute terms, and which compared with its size?

1. A: precision 0.01 m = 1 cm, GPE 0.5 cm. B: precision 0.1 cm, GPE 0.05 cm. In absolute terms, **B** is finer (its
   steps are 10 times smaller).
2. Relative: A: $0.5 \div 425 \approx 0.0012$, about 0.12%. B: $0.05 \div 2.3 \approx 0.022$, about 2.2%.
3. Compared with its size, **A** is about 18 times more precise. Both answers matter, and they are not the same
   question.

**4. Timing a pendulum.** A stopwatch reads to 0.01 s, but hand timing has an uncertainty of about 0.2 s. Twenty
swings take 28.4 s. Find the time for one swing, with its uncertainty.

1. One swing: $28.4 \div 20 = 1.42$ s.
2. The 0.2 s uncertainty belongs to the whole 20-swing timing (you start and stop the watch once). Dividing by 20
   divides it too: $0.2 \div 20 = 0.01$ s.
3. So one swing is $1.42 \pm 0.01$ s. Timing a single swing would have given about $\pm 0.2$ s, twenty times worse.

## Try it

1. A ruler is marked in millimetres. What is the greatest possible error of a reading, in centimetres?
2. A bathroom scale shows whole kilograms and reads 58 kg. Write the reading as an interval.
3. A length is given as $7.60 \pm 0.005$ m. What was the precision of the instrument?
4. A temperature is 18 °C to the nearest 2 °C. Give the GPE, the bounds and the percent error.
5. Two readings: $3.2 \pm 0.05$ cm and $85.0 \pm 0.5$ cm. Which has the smaller percent error?
6. A digital scale reads 0.0 g with nothing on it, but 2.4 g when a known 2.0 g mass is placed on it. Is this a
   random or a systematic error? What would you do about it?
7. Explain, in two sentences, why "the stopwatch shows 11.27 s, so my sprint time is known to 0.01 s" is not honest
   for a hand-timed race.
8. You want the thickness of one sheet of paper, but your ruler only reads millimetres. A stack of 400 sheets is
   42 mm thick. Find the thickness of one sheet with its GPE.

??? note "Answers"
    1. Precision 1 mm = 0.1 cm, so GPE = 0.05 cm.
    2. Precision 1 kg, GPE 0.5 kg: $57.5 \le m < 58.5$ kg.
    3. The GPE is half the precision, so the precision is $2 \times 0.005 = 0.01$ m (a centimetre).
    4. GPE $= 2 \div 2 = 1$ °C. Bounds $17 \le T < 19$ °C. Percent error $1 \div 18 \times 100\% \approx 5.6\%$.
    5. $0.05 \div 3.2 \approx 1.6\%$; $0.5 \div 85.0 \approx 0.59\%$. The 85.0 cm reading has the smaller percent
       error, even though its GPE is ten times bigger.
    6. **Systematic**: the scale reads 0.4 g (20%) too high every time, not randomly. Recalibrate it against known
       masses, or correct each reading (here by multiplying by $2.0 \div 2.4$, if the error grows in proportion).
       Repeating and averaging would not help.
    7. The display's step is 0.01 s, but the person starting and stopping it reacts with an uncertainty of about
       0.1 to 0.3 s. The honest uncertainty is the larger one, so the time is only known to a few tenths of a second.
    8. GPE of the stack: 0.5 mm. One sheet: $42 \div 400 = 0.105$ mm, with GPE $0.5 \div 400 = 0.00125$ mm. So one
       sheet is about $0.105 \pm 0.001$ mm thick, far finer than the ruler can read directly.

## Common mistake

**Thinking more digits means more accurate.** A calculator or a digital display can show many digits that mean
nothing. Before you trust a digit, ask what the instrument (and the person using it) could really tell apart.

**Using the whole step as the error.** A ruler in millimetres gives $\pm 0.05$ cm, not $\pm 0.1$ cm. The true value
is at most **half** a step away, because you chose the nearest mark.

## Where it leads

- Back: [Level 6: Solids and sizes](../level-6/index.md) · Next: [Significant figures](02-significant-figures.md),
  where the number of digits you write tells the reader the precision.
- [Level 7 page](index.md) · [Measurement topic page](../index.md)
- Rounding, truncating and bounds with numbers: [Estimation and precision](../../numbers/level-6/06-estimation-precision.md).
- Many readings and their spread: [Statistics](../../statistics/index.md), especially
  [standard deviation](../../statistics/level-6/06-standard-deviation.md).
- Physicists start every course with this: [PHY131 Unit 1: units, vectors and estimation](../../../uoft/PHY131H1/unit01.md).
