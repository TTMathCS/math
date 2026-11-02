---
title: "Paradoxes of the infinite"
---

# Paradoxes of the infinite

*Infinity and strange math · level 5, lesson 6 of 6*

## A question to start

A lamp has one button: press it and the lamp switches on if it was off, or off if it was on. The lamp starts **off**.

- One minute before noon, you press the button.
- Half a minute before noon, you press it again.
- A quarter of a minute before noon, again.
- And so on: each press comes after half the time that was left.

There are infinitely many presses, all before noon, because the waiting times $\frac12, \frac14, \frac18, \ldots$ of a
minute add up to exactly the one minute available ([lesson 2](02-zeno-answered.md)). The question, asked by the
philosopher James F. Thomson in 1954, is simple:

**At noon, is the lamp on or off?**

Think about it before reading on. Whatever you answer, someone will have a good argument against you.

## The idea

### Supertasks

A job made of infinitely many steps, finished in a limited time, is called a **supertask**. Zeno's race was one:
Achilles completes infinitely many stages in $\frac{100}{9}$ seconds. The lamp is another. The question is whether a
supertask always has a sensible "result".

### The lamp has no answer, and that is the answer

Write down the lamp's state just after each press:

$$\text{on},\ \text{off},\ \text{on},\ \text{off},\ \text{on},\ \ldots$$

If we write on as 1 and off as 0, this is the sequence $1, 0, 1, 0, \ldots$, and in [lesson 1](01-settling-sequences.md)
you showed it has **no limit**. So we cannot say "the lamp settles into the on state".

Could we argue directly? "It is not on, because every time it was switched on it was switched off again soon after."
"It is not off, because every time it was switched off it was switched on again soon after." Both arguments are true
about every moment **before** noon, and neither says anything about noon itself.

That is the point. The story tells us the lamp's state at every moment before noon. It says **nothing** about noon:
no press happens at noon, and there is no "last press" whose result would carry over. Both "on at noon" and "off at
noon" fit everything we were told. The question has no answer, not because it is too hard, but because the setup
does not decide it.

Why did Zeno's race have an answer, then? Because a runner's position changes **smoothly**: a runner cannot jump from
one place to another without passing through the places between. So his position at $\frac{100}{9}$ seconds must be
the limit of his positions just before, and that limit exists. A lamp jumps between on and off, and the on-off
sequence has no limit, so nothing pins down its state at noon. Limits answer a question only when the thing being
described has to follow its limit.

### The urn: adding forever, removing forever

Here is a stranger puzzle. It appears in J. E. Littlewood's book *A Mathematician's Miscellany* (1953), and Sheldon
Ross later made it famous in his probability textbook.

You have an endless supply of balls numbered 1, 2, 3, ... and a very large urn.

- One minute before noon, put in balls 1 to 10, and take one ball out.
- Half a minute before noon, put in balls 11 to 20, and take one ball out.
- A quarter of a minute before noon, put in balls 21 to 30, and take one ball out.
- And so on, forever.

Each step adds 10 balls and removes 1, so after $n$ steps there are $9n$ balls in the urn: 9, 18, 27, 36, ... The
count grows without limit. **How many balls are in the urn at noon?**

It depends on **which** ball you take out.

**Version A: remove the highest-numbered ball.** Step 1 removes ball 10, step 2 removes ball 20, step 3 removes ball
30, and so on. Ball 1 is never removed. Neither is ball 2, or 11, or any ball whose number is not a multiple of 10.
So at noon the urn holds infinitely many balls: 1 to 9, 11 to 19, 21 to 29, ...

**Version B: remove the lowest-numbered ball.** Step 1 removes ball 1, step 2 removes ball 2, step 3 removes ball 3.
Now pick any ball, say ball 37. It goes in at step 4 (with balls 31 to 40), and it comes out at step 37. Every ball
$k$ comes out at step $k$. So at noon **every single ball has been removed**, and the urn is **empty**.

In both versions the count after every step is the same, $9n$, growing without end. Yet at noon one urn has
infinitely many balls and the other has none.

### What went wrong with counting

The tempting argument is "the count tends to infinity, so at noon there are infinitely many balls". That treats the
number at noon as the **limit of the numbers** before noon. But nothing guarantees that. The right way to ask is ball
by ball: **ball $k$ is in the urn at noon exactly when it was put in and never taken out.** That question always has
a clear answer, and in version B the answer is "taken out" for every ball.

Sheldon Ross added a third version: at each step, take out a ball **chosen at random**. He showed that the urn is
then empty at noon with probability 1. The details need [Probability](../../probability/index.md) beyond this level,
but the lesson is the same: the answer depends on exactly how the question is set up.

### The staircase: lengths do not follow limits

A geometric version of the same trap. Draw a square with sides 1. Walk from the bottom-left corner to the top-right
corner along a staircase that only goes up and right.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 145" role="img" aria-label="Four staircases inside the same square, with 1, 2, 4 and 16 steps; each hugs the dashed diagonal more closely, but each has total length 2">
  <line x1="20.0" y1="110.0" x2="110.0" y2="20.0" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <path d="M 20.0 110.0 L 20.0 20.0 L 110.0 20.0" fill="none" stroke="#eea66f" stroke-width="2"/>
  <text x="65.0" y="132.0" font-size="12" text-anchor="middle" fill="currentColor">1 step</text>
  <line x1="130.0" y1="110.0" x2="220.0" y2="20.0" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <path d="M 130.0 110.0 L 130.0 65.0 L 175.0 65.0 L 175.0 20.0 L 220.0 20.0" fill="none" stroke="#eea66f" stroke-width="2"/>
  <text x="175.0" y="132.0" font-size="12" text-anchor="middle" fill="currentColor">2 steps</text>
  <line x1="240.0" y1="110.0" x2="330.0" y2="20.0" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <path d="M 240.0 110.0 L 240.0 87.5 L 262.5 87.5 L 262.5 65.0 L 285.0 65.0 L 285.0 42.5 L 307.5 42.5 L 307.5 20.0 L 330.0 20.0" fill="none" stroke="#eea66f" stroke-width="2"/>
  <text x="285.0" y="132.0" font-size="12" text-anchor="middle" fill="currentColor">4 steps</text>
  <line x1="350.0" y1="110.0" x2="440.0" y2="20.0" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <path d="M 350.0 110.0 L 350.0 104.4 L 355.6 104.4 L 355.6 98.8 L 361.2 98.8 L 361.2 93.1 L 366.9 93.1 L 366.9 87.5 L 372.5 87.5 L 372.5 81.9 L 378.1 81.9 L 378.1 76.2 L 383.8 76.2 L 383.8 70.6 L 389.4 70.6 L 389.4 65.0 L 395.0 65.0 L 395.0 59.4 L 400.6 59.4 L 400.6 53.8 L 406.2 53.8 L 406.2 48.1 L 411.9 48.1 L 411.9 42.5 L 417.5 42.5 L 417.5 36.9 L 423.1 36.9 L 423.1 31.2 L 428.8 31.2 L 428.8 25.6 L 434.4 25.6 L 434.4 20.0 L 440.0 20.0" fill="none" stroke="#eea66f" stroke-width="2"/>
  <text x="395.0" y="132.0" font-size="12" text-anchor="middle" fill="currentColor">16 steps</text>
</svg>
</div>

However many steps you use, the staircase has total length **2**: all the upward pieces together add up to the full
height 1, and all the across pieces add up to the full width 1. With more and more steps, the staircase hugs the
diagonal more and more closely; with $k$ steps every point of it is within about $\frac{0.71}{k}$ of the diagonal. So
the staircases "tend to" the diagonal.

But the diagonal is $\sqrt{2} \approx 1.414$ long (by Pythagoras: $1^2 + 1^2 = 2$). The lengths are 2, 2, 2, 2, ...,
with limit 2, while the limit shape has length 1.414. **The limit of the lengths is not the length of the limit.**
Getting close in position is not the same as getting close in direction, and length depends on direction: the
staircase is always travelling straight up or straight across, never along the diagonal.

### What the paradoxes teach

These puzzles are not mistakes in mathematics. They are warnings about using it carelessly:

1. Say **exactly** what you are taking the limit of: the positions, the counts, the set of balls, the lengths?
2. A sequence can have no limit (the lamp), and then the question may have no answer.
3. The limit of some measurement (a count, a length) does not have to equal the measurement of the limit.

Mathematicians spent much of the 1800s learning which limits can be trusted and when. Level 8 and the U of T
courses below meet the tools they built.

## Worked examples

**1. Timing the lamp.** The presses happen 60, 30, 15, 7.5, ... seconds before noon. When is the 5th press? How many
presses happen in the last second before noon?

1. The $k$th press is $\dfrac{60}{2^{k-1}}$ seconds before noon. The 5th is $\dfrac{60}{16} = 3.75$ seconds before.
2. A press is in the last second when $\dfrac{60}{2^{k-1}} < 1$, so $2^{k-1} > 60$, so $k - 1 \ge 6$: every press
   from the 7th on. That is **infinitely many** presses in the last second, and also in the last thousandth of a
   second.

**2. Which balls, after three steps?** Find exactly which balls are in the urn after 3 steps, in each version.

1. After 3 steps, balls 1 to 30 have gone in and 3 have come out: 27 balls.
2. Version A removed 10, 20 and 30: the urn holds 1 to 9, 11 to 19 and 21 to 29.
3. Version B removed 1, 2 and 3: the urn holds 4 to 30.
4. Same count, different balls. Far along, that difference becomes "infinitely many" against "none".

**3. A staircase with 4 steps.** Find its length and how far its corners are from the diagonal.

1. Each step is $\frac14$ up and $\frac14$ across. Four steps: $4 \times \frac14 + 4 \times \frac14 = 2$.
2. The outer corners stick out from the diagonal. A corner with legs $\frac14$ and $\frac14$ is at distance
   $\frac14 \times \frac{1}{\sqrt2} \approx 0.177$ from it (half the diagonal of a small $\frac14$ square).
3. With $k$ steps it is $\frac1k \times \frac{1}{\sqrt2} \approx \frac{0.71}{k}$, which tends to 0, while the length
   stays 2.

**4. A slower urn.** At each step put in 2 new balls and take out the lowest-numbered ball. How many balls are there
after $n$ steps, and at noon?

1. Each step adds 2 and removes 1, so after $n$ steps there are $n$ balls.
2. Balls $2n - 1$ and $2n$ go in at step $n$. Ball $k$ comes out at step $k$, and it went in at step $\frac{k}{2}$ or
   $\frac{k+1}{2}$, which is no later than $k$, so it is in the urn when its turn comes.
3. Every ball is removed at some step, so at noon the urn is **empty**, though the count before noon grew forever.

## Try it

1. Thomson's lamp starts off. Is it on or off just after the 3rd press? After the 100th press?
2. At noon the lamp's state is not decided. Suppose a second rule is added: "the lamp is on at noon." Does this
   contradict anything in the story? What about "off at noon"?
3. In urn version A, how many balls are in the urn after 5 steps? Is ball 37 in the urn at noon? Ball 40?
4. In urn version B, at which step is ball 37 removed? How many seconds before noon is that? (Step 1 is 60 seconds
   before noon, and each step halves the time left.)
5. A new urn: at step $n$ put in balls $10n - 9$ to $10n$, and take out balls $2n - 1$ and $2n$. How many balls after
   $n$ steps? What is in the urn at noon?
6. A staircase in a unit square has 10 steps. What is its total length? What about one with a million steps?
7. A famous internet "proof" that $\pi = 4$: draw a square around a circle of diameter 1 (perimeter 4), then keep
   folding the corners inwards so the outline hugs the circle, each fold keeping the perimeter at 4. "In the limit
   the outline is the circle, so $\pi = 4$." What is wrong?
8. Explain in two or three sentences why the limit gives the answer for Achilles' position at $\frac{100}{9}$ seconds,
   but no answer for the lamp at noon.

??? note "Answers"
    1. The states go off (start), on, off, on: after the 3rd press it is **on**. After an even number of presses it
       is off, so after the 100th it is **off**.
    2. Neither contradicts anything. The story describes every moment before noon and no press happens at noon, so
       "on at noon" fits all the facts, and so does "off at noon". That is why the original question has no answer.
    3. After 5 steps: $9 \times 5 = 45$ balls. Ball 37 is not a multiple of 10, so it is never removed: it **is** in
       the urn at noon. Ball 40 goes in at step 4 and is removed at step 4: **not** there.
    4. Ball 37 is removed at step 37. Step $k$ is $\dfrac{60}{2^{k-1}}$ seconds before noon, so step 37 is
       $\dfrac{60}{2^{36}}$ seconds before noon, about 0.00000000087 seconds.
    5. Each step adds 10 and removes 2: after $n$ steps there are $8n$ balls. Ball $k$ is removed at step
       $\frac{k}{2}$ or $\frac{k+1}{2}$, and it was put in at an earlier or the same step (ball $k$ goes in at step
       $\frac{k}{10}$ rounded up), so every ball is removed: the urn is **empty** at noon.
    6. Length **2** in both cases: the upward pieces always add to 1 and the across pieces always add to 1.
    7. It is the staircase mistake. The folded outlines get close to the circle in **position**, but they are always
       made of horizontal and vertical pieces, so their direction never matches the circle's. The limit of the
       perimeters (4) is not the perimeter of the limit ($\pi \approx 3.14$).
    8. Achilles' position changes smoothly, without jumps, so at $\frac{100}{9}$ s he must be at the limit of his
       positions just before, and that limit exists. The lamp jumps between on and off, nothing forces its noon state
       to follow the earlier ones, and the on-off sequence has no limit anyway.

## Common mistake

**Assuming the count at the end is the limit of the counts.** In the urn, the count grows forever in both versions,
but one urn ends full and the other empty. Ask about each object separately: when (if ever) does it go in, and when
(if ever) does it come out?

**Assuming every question must have an answer.** A question about the result of a supertask may simply not be
settled by its description, like the lamp at noon. Saying "the setup does not decide this" is a correct mathematical
answer, not a failure.

## Where it leads

- Back: [Repeating decimals and limits](05-repeating-decimals.md) · Next level: [Level 6: countable infinity](../level-6/index.md),
  where we stop asking "how close?" and start asking "how many?"
- [Level 5 page](index.md) · [Infinity topic page](../index.md)
- More paradoxes, from liars to barbers: [Paradoxes](../../logic/level-7/06-paradoxes.md) in Logic. Pythagoras and
  the diagonal: [Geometry](../../geometry/index.md).
- Infinite surface with finite volume, the painter's paradox: [level 8](../level-8/index.md).
- On the U of T shelf, "changes smoothly, without jumps" becomes the idea of a **continuous function**, the reason
  Achilles' position follows its limit: [MAT158 Unit 4: continuous functions](../../../uoft/MAT158H1/unit04.md).
