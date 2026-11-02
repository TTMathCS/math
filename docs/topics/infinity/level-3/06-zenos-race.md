---
title: "Zeno's race"
---

# Zeno's race

*Infinity and strange math · level 3, lesson 6 of 6*

## A question to start

Here is an argument. Read it slowly and try to find the mistake.

> Achilles, the fastest runner in the Greek stories, races a tortoise. Because the tortoise is so slow, it gets a
> 100 metre head start. When the race begins, Achilles first has to run to the place where the tortoise started. But
> by the time he gets there, the tortoise has crawled a little further on. So now Achilles has to run to the
> tortoise's new place. By the time he gets there, the tortoise has crawled a little further again. This happens
> again and again, forever. Every time Achilles reaches the place where the tortoise was, the tortoise has moved on.
> So Achilles can **never** catch the tortoise.

Every sentence sounds true. But you know that a fast runner overtakes a slow one, every time, in real life. So
something must be wrong. What?

## The idea

### Who was Zeno?

Zeno of Elea was a Greek thinker who lived about 2,500 years ago in Elea, a Greek town in what is now southern Italy.
None of his own writing survives. We know his puzzles mostly because later writers, especially the philosopher
Aristotle, described them and argued about them. Zeno's puzzles are called **paradoxes**: arguments that seem to be
correct but lead to something that seems impossible.

The story goes that Zeno did not really believe runners cannot overtake tortoises. He wanted to show that our ideas
about space, time and motion are trickier than they look. He succeeded: people argued about his puzzles for over
2,000 years.

### The race with numbers

Let us put numbers on the story. Say Achilles runs at 10 metres every second, and the tortoise crawls at 1 metre
every second (a very fast tortoise, but it keeps the numbers simple). The tortoise starts 100 metres ahead.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 480 142" role="img" aria-label="A race track: Achilles starts at 0 metres and the tortoise at 100 metres; Achilles' stages to where the tortoise was are 100 metres, then 10, then 1, then 0.1, each arc a tenth of the one before">
  <line x1="20" y1="50" x2="460" y2="50" stroke="currentColor" stroke-width="2"/>
  <line x1="20.0" y1="42" x2="20.0" y2="58" stroke="currentColor" stroke-width="1.5"/>
  <text x="20" y="76" font-size="11" text-anchor="middle" fill="currentColor">0 m</text>
  <line x1="402.6" y1="42" x2="402.6" y2="58" stroke="currentColor" stroke-width="1.5"/>
  <text x="402.609" y="76" font-size="11" text-anchor="middle" fill="currentColor">100 m</text>
  <line x1="440.9" y1="42" x2="440.9" y2="58" stroke="currentColor" stroke-width="1.5"/>
  <text x="440.87" y="76" font-size="11" text-anchor="middle" fill="currentColor">110 m</text>
  <line x1="444.7" y1="42" x2="444.7" y2="58" stroke="currentColor" stroke-width="1.5"/>
  <text x="444.696" y="90" font-size="11" text-anchor="middle" fill="currentColor">111 m</text>
  <line x1="445.1" y1="42" x2="445.1" y2="58" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 20.0 40 Q 211.3 -59.7 402.6 40" fill="none" stroke="#eea66f" stroke-width="2.2"/>
  <path d="M 402.6 40 Q 421.7 26.4 440.9 40" fill="none" stroke="#9cc9ea" stroke-width="2.2"/>
  <path d="M 440.9 40 Q 442.8 30.0 444.7 40" fill="none" stroke="#7ccf9a" stroke-width="2.2"/>
  <path d="M 444.7 40 Q 444.9 30.0 445.1 40" fill="none" stroke="#eea66f" stroke-width="2.2"/>
  <circle cx="20" cy="50" r="6" fill="#eea66f" stroke="currentColor"/>
  <text x="24" y="112" font-size="11" text-anchor="start" fill="currentColor">Achilles (orange) starts at 0 m</text>
  <circle cx="402.6" cy="50" r="6" fill="#7ccf9a" stroke="currentColor"/>
  <text x="330" y="112" font-size="11" text-anchor="middle" fill="currentColor">tortoise (green) starts at 100 m</text>
  <text x="240" y="132" font-size="12" text-anchor="middle" fill="currentColor">each stage is a tenth of the one before: 100 m, 10 m, 1 m, 0.1 m, ...</text>
</svg>
</div>

Follow Zeno's stages.

- **Stage 1.** Achilles runs to where the tortoise started: 100 metres. At 10 metres a second, that takes 10 seconds.
  In those 10 seconds the tortoise crawls 10 metres. So it is now at 110 metres.
- **Stage 2.** Achilles runs to 110 metres: 10 more metres, taking 1 second. In 1 second the tortoise crawls 1 metre,
  to 111 metres.
- **Stage 3.** Achilles runs that 1 metre, taking a tenth of a second (0.1 s). The tortoise crawls 0.1 metres, to
  111.1 metres.
- **Stage 4.** Achilles runs 0.1 metres in 0.01 seconds. The tortoise is now at 111.11 metres.

And so on. Zeno is right about one thing: this list of stages never ends. After every stage there is another one,
just as in Hilbert's hotel after every room there is another room.

### Why the argument seems so strong

Zeno's argument rests on a hidden idea:

> Infinitely many stages, one after another, must take forever.

That hidden idea feels true. If you had to do infinitely many chores, and each chore took 1 minute, you would never
finish. So it seems that Achilles, with infinitely many stages to run, can never finish them either.

### Look at the times, not just the stages

But Achilles' stages are not all the same length. Each stage takes **a tenth** as long as the one before: 10 seconds,
then 1 second, then 0.1 seconds, then 0.01 seconds. Let us keep a running total of the time.

| After stage | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| Time for this stage | 10 s | 1 s | 0.1 s | 0.01 s | 0.001 s |
| Total time so far | 10 s | 11 s | 11.1 s | 11.11 s | 11.111 s |

The total time keeps growing, but look how: 10, 11, 11.1, 11.11, 11.111, ... It is creeping up on
$11.111\ldots$ which is the decimal that never stops from the last lesson. It never even reaches 11.2 seconds, however
many stages you add, because every new stage adds only one more 1 further to the right.

So **all** of Zeno's infinitely many stages fit inside the first 11.2 seconds of the race! Infinitely many stages do
not have to take forever, if the stages get shorter and shorter fast enough. That is the mistake in the hidden idea.

### What happens after 12 seconds?

To be completely sure, look at the race at 12 seconds.

- Achilles has run $10 \times 12 = 120$ metres.
- The tortoise started at 100 metres and has crawled $1 \times 12 = 12$ metres, so it is at 112 metres.

Achilles is **ahead**, by 8 metres. So at some moment before 12 seconds he must have drawn level and passed. Zeno's
stages describe only the part of the race **before** Achilles catches up, cut into smaller and smaller slices. They
never talk about what happens after.

### When exactly does he catch up?

There is a neat way to find the exact moment. Achilles gains on the tortoise by $10 - 1 = 9$ metres every second. He
has 100 metres to make up. So it takes $100 \div 9$ seconds. As a decimal, $100 \div 9 = 11.111\ldots$ seconds, exactly
the number the running totals were creeping up on. The two ways of thinking agree.

### Zeno's other puzzle: you can never leave the room

Zeno had a second puzzle, sometimes called the **dichotomy** (which means "cutting in two"). To walk to the door, you
must first walk half way. Then half of what is left. Then half of what is left again. There are infinitely many
halves to walk, so you can never reach the door.

It is the same puzzle in a different coat. If the door is 8 metres away and you walk 1 metre every second, the halves
are 4 m, 2 m, 1 m, 0.5 m, ... taking 4 s, 2 s, 1 s, 0.5 s, ... The running totals are 4, 6, 7, 7.5, 7.75, ... closing
in on 8 seconds and never passing it. After 8 seconds, all the halves are done, and you are at the door.

### So is the puzzle solved?

Mathematicians today say yes: an endless list of stages can fit into a limited amount of time, and you can work out
exactly how much. In level 4 you will see how infinitely many pieces add up to a finite total, and in level 5 you
will see the idea that makes it exact, called a **limit**. Some philosophers still enjoy arguing about whether
infinitely many things can really "happen" one after another. That is part of why Zeno is still famous.

## Worked examples

**1. A different race.** Achilles runs 5 metres a second, the tortoise 1 metre a second, with a 20 metre head start.
Follow the first three stages.

- Stage 1: Achilles runs 20 m in $20 \div 5 = 4$ s. The tortoise crawls 4 m, to 24 m.
- Stage 2: Achilles runs 4 m in $4 \div 5 = 0.8$ s. The tortoise crawls 0.8 m, to 24.8 m.
- Stage 3: Achilles runs 0.8 m in 0.16 s. The tortoise crawls 0.16 m, to 24.96 m.
- Running totals: 4, 4.8, 4.96 seconds. Each stage is a fifth of the one before.

**2. When does he catch up in example 1?** He gains $5 - 1 = 4$ metres a second, and has 20 metres to make up, so
$20 \div 4 = 5$ seconds. The running totals 4, 4.8, 4.96, 4.992, ... are closing in on 5. Check at 5 seconds: Achilles
has run $5 \times 5 = 25$ m, and the tortoise is at $20 + 5 = 25$ m. Level. ✓

**3. The 100 metre race.** In the main race, where is the tortoise when Achilles passes it? He passes at
$11.111\ldots$ seconds. The tortoise started at 100 m and crawled $11.111\ldots$ m, so it is at $111.111\ldots$ metres.
Achilles has run $10 \times 11.111\ldots = 111.111\ldots$ metres. The same place. ✓

**4. Walking to a wall.** A wall is 2 metres away and you walk 1 metre a second. Zeno's halves are 1 m, 0.5 m,
0.25 m, ... taking 1 s, 0.5 s, 0.25 s, ... The running totals are 1, 1.5, 1.75, 1.875, ... The gap to 2 halves each
time: 1, 0.5, 0.25, 0.125, ... So the totals close in on 2 seconds, and after 2 seconds you touch the wall.

## Try it

1. In the main race (10 m/s against 1 m/s, 100 m head start), how far does Achilles run in stage 5, and how long does
   it take?
2. Where is the tortoise after stage 5?
3. Where are Achilles and the tortoise after 20 seconds? Who is ahead?
4. A cheetah runs 30 metres a second and chases a deer running 20 metres a second, with a 50 metre head start. How
   long until the cheetah catches up?
5. A door is 16 metres away and you walk 2 metres a second. Write the first four of Zeno's halves (in metres and in
   seconds). How long does it really take to reach the door?
6. Explain in your own words the mistake in Zeno's argument.
7. (Harder) In the main race, after how many stages is Achilles less than one millimetre behind the tortoise? (One
   millimetre is 0.001 metres.)

??? note "Answers"
    1. The distances are 100, 10, 1, 0.1, 0.01 metres, so stage 5 is **0.01 m**, taking $0.01 \div 10 = 0.001$ s.
    2. During stage 5 the tortoise crawls a tenth as far as Achilles: 0.001 m. Before it, after stage 4, it was at
       111.11 m, so it is now at **111.111 m**.
    3. Achilles: $10 \times 20 = 200$ m. Tortoise: $100 + 20 = 120$ m. Achilles is 80 m ahead.
    4. The cheetah gains $30 - 20 = 10$ metres a second, with 50 metres to make up: $50 \div 10 = 5$ seconds.
    5. Halves: 8 m, 4 m, 2 m, 1 m, taking 4 s, 2 s, 1 s, 0.5 s. Really it takes $16 \div 2 = 8$ seconds. The
       running totals 4, 6, 7, 7.5, ... close in on 8.
    6. Zeno assumes that infinitely many stages must take forever. But the stages get shorter and shorter (each a
       tenth of the one before), and their times add up to less than 11.2 seconds altogether. So all the stages are
       over in a limited time, and then Achilles passes the tortoise.
    7. After each stage, the gap between them is a tenth of what Achilles just ran: after stage 1 the gap is 10 m,
       after stage 2 it is 1 m, after stage 3 it is 0.1 m, after stage 4 it is 0.01 m, after stage 5 it is 0.001 m,
       after stage 6 it is 0.0001 m. So after **stage 6** the gap is less than a millimetre. (After stage 5 it is
       exactly a millimetre.)

## Common mistake

**Thinking "infinitely many steps" means "infinitely long".** Infinitely many steps can take a short time, if the
steps get short quickly. Only a steady supply of same-sized steps, like 1 minute each forever, takes forever.

**Thinking Zeno's stages describe the whole race.** They describe the race only up to the moment Achilles catches up,
chopped into smaller and smaller pieces. The race carries on after that, and Zeno's argument simply does not look
there.

## Where it leads

- Back: [Decimals that never stop](05-decimals-never-stop.md), where $11.111\ldots$ comes from.
- [Level 3 page](index.md) · [Infinity topic page](../index.md)
- Next level: [Level 4: endless sums and fractals](../level-4/index.md), starting with
  [1/2 + 1/4 + 1/8 + ... = 1](../level-4/01-halves-add-to-one.md), the dichotomy as a picture.
- Speed, distance and time, the tools for working out the catch-up moment: [Ratio and rates](../../ratio/index.md) and
  [Change and motion](../../change/index.md).
- In level 5, "Zeno answered" works out the total time exactly as a limit.
