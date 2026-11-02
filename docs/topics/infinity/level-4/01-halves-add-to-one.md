---
title: "Halves that add up to 1"
---

# Halves that add up to 1

*Infinity and strange math · level 4, lesson 1 of 6*

## A question to start

You have a chocolate bar. You eat half of it. Then you eat half of what is left. Then half of what is left again, and
so on, forever. The pieces you eat are

$$\frac12, \quad \frac14, \quad \frac18, \quad \frac1{16}, \quad \frac1{32}, \quad \ldots$$

There are infinitely many pieces. So how much chocolate do you eat **altogether**? Infinitely many pieces, so
infinitely much chocolate? But it all came from one bar. Exactly one bar? Or a tiny bit less, because there is always
a crumb left?

## The idea

### The picture proof

Take a square with area 1. Colour half of it. Then colour half of what is left: a quarter of the square. Then half of
what is left again: an eighth. Keep going.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 280" role="img" aria-label="A square of area 1 cut into a half, a quarter, an eighth, a sixteenth and smaller and smaller pieces that spiral into the bottom right corner and fill the whole square">
  <rect x="20" y="20" width="240" height="240" fill="none" stroke="currentColor" stroke-width="2"/>
  <rect x="20.00" y="20.00" width="120.00" height="240.00" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="80" y="145.333" font-size="16" text-anchor="middle" fill="currentColor">1/2</text>
  <rect x="140.00" y="20.00" width="120.00" height="120.00" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="200" y="85" font-size="15" text-anchor="middle" fill="currentColor">1/4</text>
  <rect x="140.00" y="140.00" width="60.00" height="120.00" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="204.333" font-size="13" text-anchor="middle" fill="currentColor">1/8</text>
  <rect x="200.00" y="140.00" width="60.00" height="60.00" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="230" y="173.333" font-size="10" text-anchor="middle" fill="currentColor">1/16</text>
  <rect x="200.00" y="200.00" width="30.00" height="60.00" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="215" y="232.667" font-size="8" text-anchor="middle" fill="currentColor">1/32</text>
  <rect x="230.00" y="200.00" width="30.00" height="30.00" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <rect x="230.00" y="230.00" width="15.00" height="30.00" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <rect x="245.00" y="230.00" width="15.00" height="15.00" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <rect x="245.00" y="245.00" width="7.50" height="15.00" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="300" y="120" font-size="12" text-anchor="start" fill="currentColor">each piece is half</text>
  <text x="300" y="138" font-size="12" text-anchor="start" fill="currentColor">of what was left</text>
  <text x="300" y="170" font-size="12" text-anchor="start" fill="currentColor">the pieces fill</text>
  <text x="300" y="188" font-size="12" text-anchor="start" fill="currentColor">the whole square</text>
</svg>
</div>

Each new piece is half of the white part that remains, so the coloured pieces never overlap and never spill outside
the square. And the white part keeps shrinking towards nothing: after the first piece, half of the square is white;
after two pieces, a quarter; after three, an eighth. Every bit of the square gets coloured sooner or later. So the
pieces exactly fill the square:

$$\frac12 + \frac14 + \frac18 + \frac1{16} + \cdots = 1.$$

That is a picture proof, and it is a good one. But "the pieces fill the square" hides something subtle: it never
happens after any finite number of steps. Let us look closely at what the equals sign means.

### Partial sums

We cannot add infinitely many numbers one at a time, so we add the first few and watch what happens. A total of the
first few pieces is called a **partial sum**.

| Pieces added | 1 | 2 | 3 | 4 | 5 | 10 | 20 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Partial sum | $\frac12$ | $\frac34$ | $\frac78$ | $\frac{15}{16}$ | $\frac{31}{32}$ | $\frac{1023}{1024}$ | $\frac{1048575}{1048576}$ |
| Left over | $\frac12$ | $\frac14$ | $\frac18$ | $\frac1{16}$ | $\frac1{32}$ | $\frac1{1024}$ | $\frac1{1048576}$ |

There is a pattern. After $n$ pieces, the white part left over is the last piece you coloured, $\frac1{2^n}$ (here
$2^n$ means $n$ twos multiplied together, so $2^3 = 2 \times 2 \times 2 = 8$). So

$$\text{partial sum after } n \text{ pieces} = 1 - \frac1{2^n}.$$

**Why?** Each step colours half of what is white, which leaves the other half white. So the white part halves each
step: $1, \frac12, \frac14, \frac18, \ldots$. After $n$ steps it is $\frac1{2^n}$, and the coloured part is everything
else, $1 - \frac1{2^n}$.

### What the equals sign means

No partial sum is ever exactly 1; there is always a crumb $\frac1{2^n}$ left. So how can the infinite sum be exactly
1? Here is the honest answer, in two parts.

**The total cannot be more than 1.** Every partial sum is less than 1, because all the pieces fit inside the square.

**The total cannot be less than 1.** Suppose someone says the total is some number less than 1, like 0.999. The
partial sums pass it: the gap $\frac1{2^n}$ gets smaller than 0.001 once $2^n$ is bigger than 1000, and
$2^{10} = 1024$. So after 10 pieces the partial sum is already more than 0.999. The same works for any number less
than 1, however close: the gap keeps halving, so it eventually becomes smaller than any gap you name, and the partial
sums go past.

So the only number the infinite sum can sensibly mean is exactly 1. This is how mathematicians **define** an infinite
sum: it is the number that the partial sums get as close to as you like and stay close to. That number is called the
**limit** of the partial sums, and you will study limits properly in level 5. When an infinite sum has a limit, we say
it **converges** (comes together).

So the question at the start has an answer: you eat **exactly one** bar of chocolate, not "nearly one". There is a
crumb left after every step, but no crumb is left after **all** the steps, because every crumb gets eaten at some
step.

### Other pictures, other sums

The same picture trick works with other fractions.

**Quarters.** Cut a square into 4 equal quarters. Colour one. Of the three quarters left, take the corner one and cut
it into 4 again; colour one of those (a sixteenth of the whole). Repeat in the corner. At every stage you look at a
corner square and colour 1 of its 4 small squares, leaving 2 white neighbours beside it and 1 corner to carry on with.
The coloured squares and the two white ones beside each are equal, so the colour takes exactly one third of everything
that gets used up. Since in the end the whole square is used up,

$$\frac14 + \frac1{16} + \frac1{64} + \cdots = \frac13.$$

### Each step a fixed fraction of the last

All these sums have the same shape: each piece is the one before multiplied by the same number (by $\frac12$, or by
$\frac14$). A sum like this is called a **geometric series**, and the number you multiply by is called the **ratio**.
When the ratio is between 0 and 1, the pieces shrink fast enough for the sum to settle on a finite total. The general
formula for the total, and why it works, is in [Patterns level 7: infinite geometric series](../../patterns/level-7/03-infinite-geometric.md).
Here we work each one out from the picture or the partial sums.

## Worked examples

**1. How many pieces to get within a thousandth?** How many pieces of $\frac12 + \frac14 + \cdots$ do you need before
the partial sum is within $\frac1{1000}$ of 1?

- The gap after $n$ pieces is $\frac1{2^n}$. We need $2^n > 1000$.
- $2^9 = 512$, which is too small. $2^{10} = 1024$, which is enough.
- So **10 pieces**: the partial sum is $\frac{1023}{1024}$, about 0.99902.

**2. A sum of thirds.** Find $\frac13 + \frac19 + \frac1{27} + \frac1{81} + \cdots$.

Here a picture is harder to draw, so use a trick. Call the total $S$:

$$S = \frac13 + \frac19 + \frac1{27} + \cdots$$

Multiply everything by 3. Each piece becomes the one before it:

$$3S = 1 + \frac13 + \frac19 + \frac1{27} + \cdots = 1 + S.$$

So $3S = 1 + S$, which gives $2S = 1$ and $S = \frac12$. Check with partial sums: $\frac13 \approx 0.333$, then
$\frac49 \approx 0.444$, then $\frac{13}{27} \approx 0.481$, then $\frac{40}{81} \approx 0.494$, closing in on 0.5.

**3. The halving sum with the same trick.** Let $S = \frac12 + \frac14 + \frac18 + \cdots$. Then
$2S = 1 + \frac12 + \frac14 + \cdots = 1 + S$, so $S = 1$. The trick agrees with the picture.

(The trick assumes the sum has a total to begin with. For sums that grow without limit it gives nonsense, as lesson 3
shows. Here the picture told us the total exists.)

**4. Starting bigger.** Find $2 + 1 + \frac12 + \frac14 + \cdots$.

- The part from $\frac12$ on is the halving sum, which is 1.
- So the total is $2 + 1 + 1 = 4$.
- Check: partial sums 2, 3, 3.5, 3.75, 3.875, ... and the gap to 4 halves each time.

**5. Decimals.** Find $\frac1{10} + \frac1{100} + \frac1{1000} + \cdots$.

As a decimal this is $0.1 + 0.01 + 0.001 + \cdots = 0.111\ldots$, and from level 3, $0.111\ldots = \frac19$. With the
trick: $10S = 1 + S$, so $9S = 1$ and $S = \frac19$. ✓

## Try it

1. Write the partial sums of $\frac12 + \frac14 + \frac18 + \cdots$ after 6 and after 7 pieces, as fractions.
2. How many pieces of the halving sum are needed to get within one millionth of 1? (Use $2^{20} = 1048576$.)
3. Find $1 + \frac12 + \frac14 + \frac18 + \cdots$.
4. Find $\frac34 + \frac3{16} + \frac3{64} + \cdots$. (Hint: compare with the quarters picture.)
5. Use the multiply trick to find $\frac15 + \frac1{25} + \frac1{125} + \cdots$.
6. Find $\frac9{10} + \frac9{100} + \frac9{1000} + \cdots$. What decimal is this?
7. Zeno's dichotomy: you walk to a door 1 metre away, first half the way, then half of what is left, and so on. Each
   piece takes you 1 second. Will you ever arrive? Now suppose instead you walk at a steady 1 metre a second. How long
   does each piece take, and how long do they take altogether?
8. (Harder) A ball is dropped from 2 metres. Each bounce reaches half the height of the one before. What total
   distance does the ball travel, up and down, before it comes to rest?

??? note "Answers"
    1. After 6: $1 - \frac1{64} = \frac{63}{64}$. After 7: $1 - \frac1{128} = \frac{127}{128}$.
    2. We need $2^n > 1000000$. $2^{19} = 524288$ is too small; $2^{20} = 1048576$ is enough. So **20 pieces**.
    3. $1 + 1 = 2$ (the 1 at the front, plus the halving sum).
    4. Each piece is 3 times the matching piece of $\frac14 + \frac1{16} + \frac1{64} + \cdots = \frac13$, so the total
       is $3 \times \frac13 = 1$. (Picture: colour 3 of the 4 quarters, then 3 of the 4 small squares in the corner
       left, and so on; the whole square gets coloured.)
    5. $5S = 1 + S$, so $4S = 1$ and $S = \frac14$.
    6. This is $0.999\ldots$ With the trick: $10S = 9 + S$, so $9S = 9$ and $S = 1$. So $0.999\ldots = 1$. The next
       lesson is all about that.
    7. If every piece takes 1 second, then infinitely many pieces take forever, so you never arrive. But at a steady
       1 metre a second the pieces take $\frac12$ s, $\frac14$ s, $\frac18$ s, ... and these add to exactly 1 second.
       You arrive after 1 second, as you would expect. Zeno's puzzle mixes up these two situations.
    8. It falls 2 m. Then it rises 1 m and falls 1 m, rises $\frac12$ m and falls $\frac12$ m, and so on. The total is
       $2 + 2 \times (1 + \frac12 + \frac14 + \cdots) = 2 + 2 \times 2 = 6$ metres.

## Common mistake

**"It never reaches 1, so the sum is a little less than 1."** Every partial sum is less than 1, true. But the infinite
sum is not any one partial sum; it is the number they all close in on. Ask: "less than 1 by how much?" Any amount you
name, however tiny, is passed by the partial sums after enough steps. The only amount left is 0.

**Using the multiply trick on any sum at all.** The trick $2S = 1 + S$ only works when the sum has a finite total.
Try it on $S = 1 + 2 + 4 + 8 + \cdots$: then $2S = 2 + 4 + 8 + \cdots = S - 1$, which gives $S = -1$. That is
nonsense, because this sum grows without limit. Always check first that the pieces shrink fast enough.

## Where it leads

- Next: [Does 0.999... equal 1?](02-does-point-nine.md)
- [Level 4 page](index.md) · [Infinity topic page](../index.md)
- Back to the story: [Zeno's race](../level-3/06-zenos-race.md) in level 3. Halving forever on the number line:
  [Numbers between numbers](../level-3/04-numbers-between.md).
- Powers of 2 and why they grow so fast: [Patterns level 6](../../patterns/level-6/02-why-they-get-huge.md). The
  formula for any geometric series: [Infinite geometric series](../../patterns/level-7/03-infinite-geometric.md).
- In level 5, the word "limit" gets an exact meaning. At university: [MAT137 Unit 13: series](../../../uoft/MAT137/unit13.md).
