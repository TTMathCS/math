---
title: "Zeno answered"
---

# Zeno answered

*Infinity and strange math · level 5, lesson 2 of 6*

## A question to start

The story goes back about 2400 years, to the Greek thinker Zeno of Elea. We know his puzzles mainly because
Aristotle wrote them down and argued with them. The most famous one is a race.

Achilles, the fastest runner in the Greek stories, races a tortoise. To be fair, the tortoise gets a 100 metre head
start. Achilles runs 10 metres every second; the tortoise crawls 1 metre every second.

Zeno says: first Achilles must reach the place where the tortoise started. By then the tortoise has crawled a bit
further. Then Achilles must reach **that** place, and by then the tortoise has moved on again. This happens again
and again, **infinitely many times**, and each time the tortoise is still ahead. So Achilles never catches the
tortoise.

You met this story in [level 3](../level-3/index.md), and you know that in real life fast runners pass slow ones.
So somewhere Zeno's argument goes wrong. In this lesson, with the limits from [lesson 1](01-settling-sequences.md),
we find exactly where, and we work out the precise moment Achilles draws level.

## The idea

### Zeno's stages, written out

Let us follow Zeno's argument with real numbers. Call each "catch up to where the tortoise was" a **stage**.

| Stage | Achilles runs | It takes him | Meanwhile the tortoise crawls |
| --- | --- | --- | --- |
| 1 | 100 m | 10 s | 10 m |
| 2 | 10 m | 1 s | 1 m |
| 3 | 1 m | 0.1 s | 0.1 m |
| 4 | 0.1 m | 0.01 s | 0.01 m |
| 5 | 0.01 m | 0.001 s | 0.001 m |

Each row comes from the one above: Achilles runs the distance the tortoise just crawled, at 10 times the
tortoise's speed, so each stage is **one tenth** of the stage before, in distance and in time.

Zeno is quite right that the stages never run out. After any number of stages, the tortoise is still a little way
ahead: after 5 stages it is 0.001 m (one millimetre) ahead.

### Add up the times

Now ask a different question: **how long do all the stages take, together?** Here are the running totals, the
**partial sums**:

| After stage | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- |
| Total time (s) | 10 | 11 | 11.1 | 11.11 | 11.111 | 11.1111 |

The totals form a sequence, and it clearly settles down. Its limit is $11.111\ldots$, a 1 followed by 1s forever
after the decimal point, which is the fraction $\dfrac{100}{9}$ (check: $100 \div 9 = 11.111\ldots$).

So **all of Zeno's infinitely many stages are finished after exactly $\dfrac{100}{9}$ seconds**, a little over 11.1
seconds. At that moment Achilles is level with the tortoise, and a moment later he is ahead.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 240" role="img" aria-label="Distance against time: Achilles starts at 0 and runs 10 metres per second, the tortoise starts at 100 metres and crawls 1 metre per second; the two lines meet at about 11.1 seconds and 111 metres; dashed lines mark Zeno stages at 10, 11 and 11.1 seconds, bunching up just before the meeting point">
  <line x1="50.0" y1="200.0" x2="440.0" y2="200.0" stroke="currentColor" stroke-width="1.5"/>
  <line x1="50.0" y1="20.0" x2="50.0" y2="200.0" stroke="currentColor" stroke-width="1.5"/>
  <line x1="50.0" y1="200.0" x2="50.0" y2="204.0" stroke="currentColor" stroke-width="1"/>
  <text x="50.0" y="217.0" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <line x1="105.7" y1="200.0" x2="105.7" y2="204.0" stroke="currentColor" stroke-width="1"/>
  <text x="105.7" y="217.0" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <line x1="161.4" y1="200.0" x2="161.4" y2="204.0" stroke="currentColor" stroke-width="1"/>
  <text x="161.4" y="217.0" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <line x1="217.1" y1="200.0" x2="217.1" y2="204.0" stroke="currentColor" stroke-width="1"/>
  <text x="217.1" y="217.0" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <line x1="272.9" y1="200.0" x2="272.9" y2="204.0" stroke="currentColor" stroke-width="1"/>
  <text x="272.9" y="217.0" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <line x1="328.6" y1="200.0" x2="328.6" y2="204.0" stroke="currentColor" stroke-width="1"/>
  <text x="328.6" y="217.0" font-size="11" text-anchor="middle" fill="currentColor">10</text>
  <line x1="384.3" y1="200.0" x2="384.3" y2="204.0" stroke="currentColor" stroke-width="1"/>
  <text x="384.3" y="217.0" font-size="11" text-anchor="middle" fill="currentColor">12</text>
  <line x1="440.0" y1="200.0" x2="440.0" y2="204.0" stroke="currentColor" stroke-width="1"/>
  <text x="440.0" y="217.0" font-size="11" text-anchor="middle" fill="currentColor">14</text>
  <line x1="46.0" y1="200.0" x2="50.0" y2="200.0" stroke="currentColor" stroke-width="1"/>
  <text x="42.0" y="204.0" font-size="11" text-anchor="end" fill="currentColor">0</text>
  <line x1="46.0" y1="140.0" x2="50.0" y2="140.0" stroke="currentColor" stroke-width="1"/>
  <text x="42.0" y="144.0" font-size="11" text-anchor="end" fill="currentColor">50</text>
  <line x1="46.0" y1="80.0" x2="50.0" y2="80.0" stroke="currentColor" stroke-width="1"/>
  <text x="42.0" y="84.0" font-size="11" text-anchor="end" fill="currentColor">100</text>
  <line x1="46.0" y1="20.0" x2="50.0" y2="20.0" stroke="currentColor" stroke-width="1"/>
  <text x="42.0" y="24.0" font-size="11" text-anchor="end" fill="currentColor">150</text>
  <path d="M 50.0 200.0 L 440.0 32.0" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <path d="M 50.0 80.0 L 440.0 63.2" fill="none" stroke="#9cc9ea" stroke-width="2.5"/>
  <line x1="328.6" y1="80.0" x2="328.6" y2="200.0" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="356.4" y1="68.0" x2="356.4" y2="200.0" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="359.2" y1="66.8" x2="359.2" y2="200.0" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="359.5" y1="66.7" x2="359.5" y2="200.0" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="359.5" cy="66.7" r="5" fill="#7ccf9a"/>
  <text x="428.9" y="24.0" font-size="12" text-anchor="end" fill="currentColor">Achilles</text>
  <text x="428.9" y="81.2" font-size="12" text-anchor="end" fill="currentColor">tortoise</text>
  <text x="353.5" y="54.7" font-size="12" text-anchor="end" fill="currentColor">level at 11.1 s</text>
  <text x="245.0" y="232.0" font-size="12" text-anchor="middle" fill="currentColor">time (seconds)</text>
  <text x="14.0" y="110.0" font-size="12" text-anchor="middle" fill="currentColor">m</text>
</svg>
</div>

The graph shows the two runners' distances against time. Achilles' line is steep (10 m every second) and the
tortoise's line starts at 100 m and is almost flat (1 m every second). The dashed lines mark the ends of Zeno's
stages: at 10 s, at 11 s, at 11.1 s, at 11.11 s, ... They pile up closer and closer together, just to the left of
the crossing point. Infinitely many of them fit in the short time before 11.12 seconds. Zeno's stages are real, but
they are squeezed into a finite stretch of time, like the dots of $\frac1n$ squeezed near 0.

### Why the total is exactly 100/9

"It looks like it settles at $11.111\ldots$" is a good guess. Here is a proof. Call the total after $n$ stages
$S_n$:

$$S_n = 10 + 1 + 0.1 + \cdots + \frac{10}{10^{n-1}}.$$

Divide every term by 10. Each term turns into the next one, and a new tiny term appears at the end:

$$\frac{S_n}{10} = 1 + 0.1 + \cdots + \frac{10}{10^{n-1}} + \frac{10}{10^{n}}.$$

Subtract the second line from the first. Everything in the middle cancels, leaving only the first term of $S_n$
and the last term of $\frac{S_n}{10}$:

$$S_n - \frac{S_n}{10} = 10 - \frac{10}{10^n}, \quad\text{so}\quad \frac{9}{10}S_n = 10\left(1 - \frac{1}{10^n}\right),
\quad\text{so}\quad S_n = \frac{100}{9}\left(1 - \frac{1}{10^n}\right).$$

Now look at what happens as $n$ grows: $\dfrac{1}{10^n}$ shrinks to 0, exactly like in lesson 1, so the bracket
tends to 1 and $S_n$ tends to $\dfrac{100}{9}$. The gap between $S_n$ and $\dfrac{100}{9}$ is
$\dfrac{100}{9} \times \dfrac{1}{10^n}$, which beats any closeness the challenger names.

This is the same as the formula for an **infinite geometric series** (each term is the one before times the same
number, here $\frac{1}{10}$), which is worked out in full in
[Patterns level 7](../../patterns/level-7/03-infinite-geometric.md).

### What the sum of an endless list means

Nobody can do infinitely many additions, one after another. So what does
$10 + 1 + 0.1 + 0.01 + \cdots$ even **mean**? Mathematicians define it this way:

> The sum of an endless list of numbers is the **limit of its partial sums**, if that limit exists.

With this meaning, $10 + 1 + 0.1 + 0.01 + \cdots = \dfrac{100}{9}$ exactly, not approximately. The equals sign is
honest, because the limit is one exact number (lesson 1 showed a limit cannot be two numbers).

### Check with plain algebra

There is a quicker way that ignores the stages altogether. After $t$ seconds Achilles has run $10t$ metres. The
tortoise started at 100 m and has crawled $t$ metres, so it is at $100 + t$ metres. They are level when

$$10t = 100 + t, \quad 9t = 100, \quad t = \frac{100}{9}.$$

The same answer. They meet $\dfrac{1000}{9} \approx 111.1$ metres from Achilles' start. The infinite sum and the
simple equation agree, as they must: both describe the same race.

### So where did Zeno go wrong?

Zeno's hidden step was: **"infinitely many stages must take an infinitely long time."** That sounds natural, but it
is false. If the stages get shorter fast enough, infinitely many of them fit in a finite time. Here each stage is a
tenth of the one before, and their total is a little over 11 seconds.

(Not every endless sum is finite. $1 + 1 + 1 + \cdots$ grows forever, and so, more surprisingly, does
$1 + \frac12 + \frac13 + \frac14 + \cdots$, as you saw in [level 4](../level-4/index.md). Shrinking pieces are needed
for a finite total, but they are not enough on their own.)

### Zeno's other race: you can never cross the room

Zeno had a second puzzle, sometimes called the **dichotomy** (a Greek word for "cutting in two"). To walk across a
room you must first walk half of it, then half of what is left, then half of what is left again, forever. So you can
never arrive.

Walk a 4 metre room at 1 metre per second. The pieces are 2 m, 1 m, 0.5 m, 0.25 m, ..., taking 2 s, 1 s, 0.5 s,
0.25 s, ... The total time is

$$2 + 1 + 0.5 + 0.25 + \cdots = 4 \text{ seconds},$$

because the partial sums $2, 3, 3.5, 3.75, \ldots$ fall short of 4 by $2, 1, 0.5, 0.25, \ldots$, a gap that halves
each time and shrinks to 0. You arrive after 4 seconds, just as a stopwatch would say.

Philosophers still discuss whether limits answer **everything** Zeno was worried about: is it really possible to
"complete" infinitely many tasks? [Lesson 6](06-paradoxes.md) has some puzzles where that question bites. But the
mathematical part is settled: the times add up to a finite number, and that number is exactly when Achilles draws
level.

<figure class="play" data-play="seq" data-kind="geom"><span class="ai-tag">AI-created</span><figcaption><b>Infinitely many steps, a finite sum.</b> Add terms and watch the sum stop growing.</figcaption></figure>

## Worked examples

**1. A general race.** A runner at speed $v$ chases a walker at a slower speed $w$ who has a head start of $d$ metres.
Show that Zeno's stages take $\dfrac{d}{v - w}$ seconds in total.

1. Stage 1: the runner covers $d$ metres, taking $\dfrac{d}{v}$ seconds.
2. In that time the walker moves $w \times \dfrac{d}{v}$, which is $d$ times $\dfrac{w}{v}$. So each new gap is the
   old gap times $r = \dfrac{w}{v}$, a number less than 1. Each stage time is the one before times $r$.
3. The times are $\dfrac{d}{v}, \dfrac{d}{v}r, \dfrac{d}{v}r^2, \ldots$ The same subtract-the-shifted-sum trick as
   above gives the total $\dfrac{d/v}{1 - r}$.
4. Simplify: $\dfrac{d/v}{1 - w/v} = \dfrac{d/v}{(v - w)/v} = \dfrac{d}{v - w}$.

That is exactly what plain algebra gives: the gap $d$ closes at $v - w$ metres per second. For Achilles,
$\dfrac{100}{10 - 1} = \dfrac{100}{9}$. ✓

**2. New numbers.** Achilles runs 8 m/s, the tortoise 2 m/s, head start 60 m.

1. Stage 1 takes $60 \div 8 = 7.5$ s. The tortoise moves $2 \times 7.5 = 15$ m, so the ratio is $r = \frac{15}{60} = \frac14$
   (which is $\frac{w}{v} = \frac28$ ✓).
2. Stage times: 7.5, 1.875, 0.46875, ... Total $\dfrac{7.5}{1 - \frac14} = \dfrac{7.5}{0.75} = 10$ seconds.
3. Check: after 10 s Achilles has run 80 m; the tortoise is at $60 + 20 = 80$ m. ✓

**3. How many stages to get within a centimetre?** In the original race, after $n$ stages the tortoise is
$\dfrac{100}{10^n}$ metres ahead (10 m after one stage, 1 m after two, ...). When is the gap less than 0.01 m?

1. We need $\dfrac{100}{10^n} < 0.01$, so $10^n > \dfrac{100}{0.01} = 10000 = 10^4$.
2. That means $n > 4$: after **5 stages** the gap is 0.001 m, one millimetre.
3. The time then is 11.111 s, only about 0.0001 s before the meeting at $11.1111\ldots$ s.

## Try it

1. Achilles (10 m/s) gives the tortoise (1 m/s) only a 50 m head start. List the first four stage times and their
   total. What is the time when he draws level?
2. In question 1, how far from his start does Achilles draw level?
3. A runner at 6 m/s chases a walker at 2 m/s who is 40 m ahead. Find the stage ratio and the total time of all of
   Zeno's stages. Check with algebra.
4. Mars rovers drive slowly, a few centimetres per second. A rover crosses a 12 metre patch at 0.04 m/s. Split the
   drive Zeno's way (half, then half of the rest, ...). How long is each of the first three pieces, and what do all
   the pieces add up to?
5. In the original race, after how many stages is the tortoise less than 1 mm (0.001 m) ahead?
6. Suppose the tortoise were magically as fast as Achilles: both 10 m/s, head start 100 m. What are the stage times
   now? What is their total? Does Achilles catch up?
7. Explain, using the formula from worked example 1, why a runner who is **slower** than the walker never catches up,
   even though Zeno's stages still make sense.
8. Show that $3 + 0.3 + 0.03 + 0.003 + \cdots = \dfrac{10}{3}$ by the "divide by 10 and subtract" trick.

??? note "Answers"
    1. Stage times: $50 \div 10 = 5$ s, then 0.5 s, 0.05 s, 0.005 s. Four stages total $5.555$ s. The total of all
       stages is $5.555\ldots = \dfrac{50}{9}$ s (or from the formula, $\dfrac{50}{10 - 1} = \dfrac{50}{9} \approx 5.56$
       s).
    2. Achilles runs $10 \times \dfrac{50}{9} = \dfrac{500}{9} \approx 55.6$ m. (Check: the tortoise is at
       $50 + \frac{50}{9} = \frac{500}{9}$ m. ✓)
    3. Ratio $r = \dfrac{2}{6} = \dfrac13$. First stage $\dfrac{40}{6} = \dfrac{20}{3}$ s. Total
       $\dfrac{20/3}{1 - 1/3} = \dfrac{20/3}{2/3} = 10$ s. Algebra: $6t = 40 + 2t$, so $4t = 40$ and $t = 10$. ✓
    4. The whole drive takes $12 \div 0.04 = 300$ s. The pieces are 6 m, 3 m, 1.5 m, ..., taking 150 s, 75 s,
       37.5 s, ... They add up to $150 + 75 + 37.5 + \cdots = 300$ s, five minutes, because the partial sums fall
       short of 300 by 150, 75, 37.5, ..., a gap that halves each time.
    5. We need $\dfrac{100}{10^n} < 0.001$, so $10^n > 100000 = 10^5$, so $n > 5$: after **6 stages**.
    6. Each stage Achilles runs the gap, but the tortoise moves exactly as far, so the gap is always 100 m. Every
       stage takes 10 s. The partial sums are 10, 20, 30, ..., which grow forever: the total is **not** finite, and
       Achilles never catches up. Here Zeno's conclusion is right, because the stages do not shrink.
    7. If $v < w$, then $v - w$ is negative and $\dfrac{d}{v - w}$ is a negative time, which makes no sense for the
       future. In stage terms, $r = \dfrac{w}{v}$ is bigger than 1, so each stage is **longer** than the one before
       and the partial sums grow without limit. The gap grows, so there is no meeting.
    8. Let $S_n = 3 + 0.3 + \cdots$ ($n$ terms). Then $\frac{S_n}{10}$ is the same terms shifted one place, with a
       new last term $\dfrac{3}{10^n}$. Subtracting, $S_n - \frac{S_n}{10} = 3 - \dfrac{3}{10^n}$, so
       $\frac{9}{10}S_n = 3\left(1 - \frac{1}{10^n}\right)$ and $S_n = \frac{10}{3}\left(1 - \frac{1}{10^n}\right)$.
       As $n$ grows the bracket tends to 1, so the limit is $\dfrac{10}{3} = 3.333\ldots$ ✓

## Common mistake

**"Infinitely many pieces must add up to infinity."** Not if the pieces shrink fast enough. The stages of the race
are infinitely many but last $\frac{100}{9}$ seconds in total. (And watch out for the opposite mistake: shrinking
pieces do not **guarantee** a finite total; $1 + \frac12 + \frac13 + \cdots$ is the famous warning.)

**"The sum is only roughly $\frac{100}{9}$, because you never finish adding."** The sum of an endless list is
**defined** as the limit of the partial sums. The limit is one exact number, so the sum is exactly $\frac{100}{9}$.
No partial sum equals it, but the infinite sum does.

## Where it leads

- Back: [Sequences that settle down](01-settling-sequences.md) · Next: [Infinity is not a number](03-infinity-not-a-number.md)
- [Level 5 page](index.md) · [Infinity topic page](../index.md) · The story first told: [level 3](../level-3/index.md)
- The formula $\dfrac{a}{1 - r}$ for infinite geometric series, proved in general:
  [Patterns level 7](../../patterns/level-7/03-infinite-geometric.md).
- Distance, speed and time graphs like the one above: [Change level 4](../../change/level-4/index.md).
- On the U of T shelf: [MAT137 Unit 13: series](../../../uoft/MAT137/unit13.md).
