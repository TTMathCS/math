---
title: "Halving a cookie"
---

# Halving a cookie

*Infinity and strange math · level 1, lesson 2 of 6*

## A question to start

Ben has one big cookie. He makes a rule for himself:

> "Each day, I will eat **half** of the cookie that is left. Only half. I will save the rest for tomorrow."

On day 1 he eats half the cookie. On day 2 he eats half of what is left. On day 3, half of what is left again. And so
on, day after day.

When will Ben finish his cookie? On day 10? Day 100? Ever? Think about it before you read on. (Pretend for now that
the cookie can be cut as small as Ben likes.)

## The idea

### What a half is

When you cut something into **two parts that are the same size**, each part is a **half**. Two halves make the whole
thing again.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 120" role="img" aria-label="A round cookie cut into two equal halves, one orange and one blue">
  <path d="M 150 15 A 45 45 0 0 0 150 105 Z" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <path d="M 150 15 A 45 45 0 0 1 150 105 Z" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <g font-size="13" text-anchor="middle" fill="currentColor">
    <text x="75" y="64">a half</text><text x="225" y="64">a half</text>
  </g>
</svg>
</div>

Be careful: the two parts must be the **same size**. If you cut a cookie into a big bit and a small bit, those are
not halves. Fair halves are a fair share for two people.

### Halving again and again

Let us draw Ben's cookie as a long bar, so it is easy to see. Each row shows what is **left** after one more day.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 210" role="img" aria-label="Rows of bars: the whole cookie, then half, then a quarter, then an eighth, getting shorter by half each row">
  <rect x="60" y="10" width="300" height="20" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="60" y="40" width="150" height="20" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <rect x="60" y="70" width="75" height="20" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <rect x="60" y="100" width="37.5" height="20" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="60" y="130" width="18.75" height="20" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <rect x="60" y="160" width="9.4" height="20" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <rect x="60" y="190" width="4.7" height="12" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <g font-size="12" fill="currentColor">
    <text x="5" y="25">start</text><text x="5" y="55">day 1</text><text x="5" y="85">day 2</text>
    <text x="5" y="115">day 3</text><text x="5" y="145">day 4</text><text x="5" y="175">day 5</text>
    <text x="5" y="201">day 6</text>
  </g>
</svg>
</div>

Look at the bars. Each bar is **half as long** as the bar above it. The bar gets shorter and shorter. By day 6 it is
just a tiny sliver.

### Is there always a crumb left?

Here is the important question. Does the bar ever become **nothing**?

Think about one day. In the morning there is **some** cookie left, maybe a big piece, maybe a tiny one. Ben eats
**half** of it. What is left? The **other half**. And half of something is still something! It is smaller, but it is
not nothing.

So the next morning there is still some cookie. And the same thing happens again: Ben eats half, and the other half
is left. This happens **every** day. On no day does Ben eat the last piece, because he only ever eats half of what
is there.

> If you only ever eat **half** of what is left, there is **always** some left.

So in our pretend cookie, Ben **never** finishes. There is always a crumb left. The halving can go on forever. This is
a new kind of "forever": not numbers getting bigger and bigger (like in the [last lesson](01-biggest-number-game.md)),
but pieces getting **smaller and smaller**.

### Tinier and tinier

Even though Ben never finishes, the crumb gets tiny very fast. Let us cut a cookie into 64 small squares, like a
chocolate bar, and see how many squares are left each day.

| Day | Squares left |
| --- | --- |
| start | 64 |
| 1 | 32 |
| 2 | 16 |
| 3 | 8 |
| 4 | 4 |
| 5 | 2 |
| 6 | 1 |
| 7 | half a square |
| 8 | a quarter of a square |

After just 6 days, only **one** square is left out of 64. After 10 days, the piece left is less than one part in a
thousand of the whole cookie. That is smaller than a crumb you could pick up with your fingers. But it is still not
nothing.

### The cookie never grows

Here is a second surprise. Ben eats on **every** day, forever. Does he eat a giant amount of cookie?

No! Everything he eats came out of **one** cookie. You cannot eat more cookie than there was. Look at the picture:
every piece he eats fits inside the one bar.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 80" role="img" aria-label="One bar split into a half, a quarter, an eighth, a sixteenth and smaller pieces, all fitting inside the bar">
  <rect x="20" y="20" width="170" height="36" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="190" y="20" width="85" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <rect x="275" y="20" width="42.5" height="36" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <rect x="317.5" y="20" width="21.25" height="36" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="338.75" y="20" width="10.6" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <rect x="349.4" y="20" width="5.3" height="36" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <rect x="20" y="20" width="340" height="36" fill="none" stroke="currentColor" stroke-width="2"/>
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <text x="105" y="43">day 1</text><text x="232" y="43">day 2</text><text x="296" y="43">3</text>
    <text x="190" y="74">all the pieces fit inside one cookie</text>
  </g>
</svg>
</div>

Day 1's piece is the biggest. Day 2's piece fits in the half that was left. Day 3's piece fits in the quarter that
was left after that. The pieces get smaller and smaller and squeeze into the end of the bar. There are **more and
more pieces**, going on forever, but together they **never** make more than one cookie.

So here is something strange and wonderful: **pieces that never stop can still fit inside something small.** Grown-up
mathematicians use this idea all the time. You will meet it again in later levels.

### A real cookie is different

Our pretend cookie can be cut forever. A real cookie cannot.

A real cookie is made of very, very tiny bits, much too small to see. Scientists call them **atoms**. You cannot cut
an atom of cookie in half and still have cookie. If you could halve a real cookie with a perfect, super-tiny knife,
you would get down to single atoms after about 80 halvings. Then you would have to stop.

So in real life, Ben's cookie does end: it ends as a crumb too small to see, or a bird eats it! But in **math**, where
a cookie is a pretend shape that can be cut as small as we like, the halving never ends. Math lets us think about
"forever" even when real things stop.

## Worked examples

**1. A ribbon.** A ribbon is 16 centimetres long. Each time, you cut it in half and keep one half. How long is the
ribbon after each cut?

Half of 16 is 8. Half of 8 is 4. Half of 4 is 2. Half of 2 is 1. Half of 1 is a half. So the lengths are
**16, 8, 4, 2, 1, a half, ...** centimetres. After 4 cuts, the ribbon is 1 centimetre long. After that, it is less
than 1 centimetre, but you can keep cutting (if your scissors are good enough).

**2. A pizza with 8 slices.** A pizza has 8 slices. You eat half the slices that are left, each evening. Evening 1:
eat 4, so 4 are left. Evening 2: eat 2, so 2 are left. Evening 3: eat 1, so 1 slice is left. Evening 4: eat half a
slice, so **half a slice** is left. Evening 5: a quarter of a slice is left. The pizza never quite runs out.

**3. Walking to the wall.** Ava stands 8 big steps from a wall. Each time, she walks **half** the way that is left.
First she walks 4 steps (4 left). Then 2 steps (2 left). Then 1 step (1 left). Then half a step, then a quarter of a
step, and so on. Each walk takes her closer, but there is always a little gap left. She gets as close as she likes,
but in the pretend game she never quite touches the wall.

**4. What if we eat more than half?** Suppose Ben eats **all** that is left on day 2. Then on day 3 there is nothing.
The cookie is finished. The halving rule is what makes the cookie last forever: half is always left behind.

## Try it

1. What is half of 10? Half of 6? Half of 2?
2. A bag has 32 marbles. Each day you give away half the marbles that are left. How many are left after 1 day? After
   2 days? After 5 days?
3. After how many days are there **no** marbles left in question 2? (Careful: you cannot cut a marble!)
4. A sandwich is cut in half, then one half is cut in half again. Draw it. How many pieces are there? Are they all the
   same size?
5. Ben eats half of what is left each day. After day 1, is the piece he has left bigger or smaller than the piece he
   ate on day 1?
6. Lily says: "If Ben eats a piece every day forever, he must eat an enormous amount of cookie!" Is she right?
7. A string is 64 centimetres long. Each time you cut it in half and keep one half. After how many cuts is the piece
   1 centimetre long?

??? note "Answers"
    1. Half of 10 is **5**. Half of 6 is **3**. Half of 2 is **1**.
    2. After 1 day: **16** (half of 32). After 2 days: **8**. Then 4, then 2, then 1. So after 5 days: **1** marble.
    3. After 5 days there is 1 marble. Half of one marble is not a marble, so the real game has to stop here. Maybe on
       day 6 you give the last marble away. Real things like marbles **cannot be halved forever**; pretend cookies in
       math can.
    4. There are **3 pieces**: one half, and two quarters. They are **not** all the same size. The half is as big as
       the two quarters together.
    5. The **same size**. He ate half and half is left. Two halves are the same size.
    6. **No.** Every piece comes out of one cookie, so all of them together are never more than one cookie. The pieces
       get tinier and tinier, so they all fit.
    7. 64, then 32, 16, 8, 4, 2, 1. Count the cuts: 64 to 32 is one cut, then to 16 is two, to 8 is three, to 4 is
       four, to 2 is five, to 1 is **six cuts**.

## Common mistake

**Thinking "smaller and smaller" means it must reach zero.** The piece gets tiny, but half of a tiny piece is still a
piece. In the math cookie there is always a crumb left. Getting **close** to nothing is not the same as **being**
nothing.

**Thinking "forever" means "enormous".** Ben eats on infinitely many days, but all the pieces come from one cookie.
Something can go on forever and still stay small.

## Where it leads

- Previous lesson: [The biggest number game](01-biggest-number-game.md). Next lesson:
  [Going round and round](03-round-and-round.md).
- This level: [Level 1: Does it ever end?](index.md). The whole topic: [Infinity and strange math](../index.md).
- Fair halves and quarters: [Numbers: halves, thirds and quarters](../../numbers/level-2/06-halves-thirds-quarters.md)
  and [Ratio: fair shares](../../ratio/level-1/01-fair-shares.md).
- Splitting into two equal groups: [Number theory: fair sharing between two](../../number-theory/level-1/03-fair-sharing-two.md).
- Patterns that shrink each step: [Patterns: growing and shrinking](../../patterns/level-2/02-growing-shrinking.md).
- Halving forever, and adding up all the pieces, comes back in level 4 of this topic.
