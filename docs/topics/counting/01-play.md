---
title: "Play: How many ways?"
---

# Play: How many ways?

*Counting and combinations · step 1 of 5*

## A question to start

You have 3 T-shirts (orange, blue and green) and 2 pairs of shorts (black and white). How many different outfits can
you wear?

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 100" role="img" aria-label="Three T-shirts, orange, blue and green, and two pairs of shorts, black and white">
  <g>
    <path d="M20 20 L40 12 L60 12 L80 20 L72 36 L64 32 L64 70 L36 70 L36 32 L28 36 Z" fill="#eea66f"/>
    <path d="M100 20 L120 12 L140 12 L160 20 L152 36 L144 32 L144 70 L116 70 L116 32 L108 36 Z" fill="#9cc9ea"/>
    <path d="M180 20 L200 12 L220 12 L240 20 L232 36 L224 32 L224 70 L196 70 L196 32 L188 36 Z" fill="#7ccf9a"/>
  </g>
  <path d="M290 15 L340 15 L344 70 L322 70 L315 38 L308 70 L286 70 Z" fill="currentColor"/>
  <path d="M360 15 L410 15 L414 70 L392 70 L385 38 L378 70 L356 70 Z" fill="none" stroke="currentColor" stroke-width="2"/>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="130" y="92">3 T-shirts</text><text x="350" y="92">2 pairs of shorts</text>
  </g>
</svg>
</div>

Many people guess 5, because 3 and 2 make 5. But each T-shirt can go with **either** pair of shorts. Count them:
orange with black, orange with white, blue with black, blue with white, green with black, green with white. That is
**6 outfits**. Counting carefully, so that you miss nothing and count nothing twice, is a real part of mathematics,
called **combinatorics**.

## The idea

### Make an organised list

The secret of counting is to **be tidy**. If you write outfits down in any old order, you will lose track. Instead,
pick the first thing and go through every choice for the second thing. Then move on to the next first thing.

- Orange T-shirt: with black, with white.
- Blue T-shirt: with black, with white.
- Green T-shirt: with black, with white.

Each T-shirt gets its own line, and every line has the same 2 shorts. Three lines of 2 is 6.

### Draw a tree

A **tree diagram** shows the same thing as a picture. Start at one point. Draw a branch for each first choice. From the
end of each branch, draw a branch for each second choice. Every path from the start to a tip is one outfit, so you
just count the tips.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 180" role="img" aria-label="A tree diagram: three branches for the T-shirts, each splitting into two branches for the shorts, giving six tips">
  <g stroke="currentColor" stroke-width="1.5">
    <line x1="30" y1="90" x2="150" y2="30"/><line x1="30" y1="90" x2="150" y2="90"/><line x1="30" y1="90" x2="150" y2="150"/>
    <line x1="150" y1="30" x2="290" y2="15"/><line x1="150" y1="30" x2="290" y2="45"/>
    <line x1="150" y1="90" x2="290" y2="75"/><line x1="150" y1="90" x2="290" y2="105"/>
    <line x1="150" y1="150" x2="290" y2="135"/><line x1="150" y1="150" x2="290" y2="165"/>
  </g>
  <circle cx="30" cy="90" r="6" fill="currentColor"/>
  <circle cx="150" cy="30" r="11" fill="#eea66f"/><circle cx="150" cy="90" r="11" fill="#9cc9ea"/><circle cx="150" cy="150" r="11" fill="#7ccf9a"/>
  <g font-size="13" fill="currentColor">
    <text x="298" y="19">black</text><text x="298" y="49">white</text>
    <text x="298" y="79">black</text><text x="298" y="109">white</text>
    <text x="298" y="139">black</text><text x="298" y="169">white</text>
  </g>
  <g font-size="13" fill="currentColor"><text x="350" y="94">6 tips</text></g>
</svg>
</div>

### Handshakes at a party

Four friends, Ana, Ben, Cai and Dee, meet at a party. Everyone shakes hands with everyone else, once. How many
handshakes are there?

Draw four dots for the friends and a line for each handshake.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 150" role="img" aria-label="Four dots at the corners of a square, joined by six lines: four sides and two diagonals">
  <g stroke="#9cc9ea" stroke-width="3">
    <line x1="150" y1="25" x2="270" y2="25"/><line x1="270" y1="25" x2="270" y2="125"/>
    <line x1="270" y1="125" x2="150" y2="125"/><line x1="150" y1="125" x2="150" y2="25"/>
    <line x1="150" y1="25" x2="270" y2="125"/><line x1="270" y1="25" x2="150" y2="125"/>
  </g>
  <g fill="#eea66f">
    <circle cx="150" cy="25" r="11"/><circle cx="270" cy="25" r="11"/><circle cx="270" cy="125" r="11"/><circle cx="150" cy="125" r="11"/>
  </g>
  <g font-size="14" fill="currentColor">
    <text x="105" y="30">Ana</text><text x="285" y="30">Ben</text><text x="285" y="130">Cai</text><text x="105" y="130">Dee</text>
  </g>
</svg>
</div>

There are **6 lines**, so 6 handshakes. You can also count them tidily:

- Ana shakes hands with Ben, Cai and Dee: 3 handshakes.
- Ben has already shaken Ana's hand. He still shakes Cai and Dee: 2 more.
- Cai has already met Ana and Ben. She still shakes Dee: 1 more.
- Dee has already shaken everyone's hand: 0 more.

3 + 2 + 1 = 6. The tidy list never counts "Ana and Ben" and "Ben and Ana" twice, because they are the **same**
handshake.

### When the order matters

Now three toys, a car, a duck and a robot, stand in a row on a shelf. How many different ways can you line them up?
This time the order **does** matter: car, duck, robot looks different from robot, duck, car.

Choose the first toy, then go through the rest:

- Car first: car, duck, robot or car, robot, duck.
- Duck first: duck, car, robot or duck, robot, car.
- Robot first: robot, car, duck or robot, duck, car.

**6 ways.** Three choices for the first place, and then 2 ways to finish each one.

## Worked example

**An ice-cream shop sells three flavours: vanilla, strawberry and chocolate. You may choose two different
flavours in a cup. How many different cups can you have?**

1. Make a tidy list. Start with vanilla and pair it with each of the others: vanilla and strawberry, vanilla and
   chocolate.
2. Now strawberry. It has already been paired with vanilla, so only one new cup: strawberry and chocolate.
3. Now chocolate. It has already been paired with both the others. Nothing new.
4. Count: 2 + 1 = **3 cups**.

Now change the question: you want two scoops in a **cone**, one on top of the other, and you care which is on top.
Then vanilla on top of strawberry is different from strawberry on top of vanilla, so every cup turns into 2 cones:
3 × 2 = **6 cones**. Whether the order matters changes the answer. You will see this idea again and again in the
steps that follow.

## Try it

1. You have 2 hats and 3 scarves. How many hat-and-scarf outfits can you make?
2. Five friends meet and everyone shakes hands with everyone else once. How many handshakes?
3. In how many ways can you arrange the letters of the word CAT? List them.
4. Using the digits 1, 2 and 3, how many two-digit numbers can you make if you may not use a digit twice?
5. A pizza shop has 3 toppings: cheese, mushroom and pepper. You can have any of them on your pizza, or none at
   all. How many different pizzas are there?

??? note "Answers"
    1. **6.** Each hat goes with any of the 3 scarves: 3 outfits for the first hat and 3 for the second.
    2. **10.** The first friend shakes 4 hands, the next 3 new ones, then 2, then 1, then 0: 4 + 3 + 2 + 1 = 10.
       Drawing 5 dots and joining every pair also gives 10 lines.
    3. **6:** CAT, CTA, ACT, ATC, TCA, TAC. Three choices of first letter, and 2 ways to finish each.
    4. **6:** 12, 13, 21, 23, 31, 32. Order matters here: 12 and 21 are different numbers.
    5. **8.** For each topping you decide "yes" or "no". List them tidily: none; cheese; mushroom; pepper; cheese and
       mushroom; cheese and pepper; mushroom and pepper; all three. A tree with a yes/no split for each topping has
       2, then 4, then 8 tips.

## Common mistake

**Counting the same thing twice.** When Ana shakes Ben's hand, Ben also shakes Ana's hand, but it is **one**
handshake. If you count "4 friends each shake 3 hands, so 12", you have counted every handshake twice: the true
answer is 12 ÷ 2 = 6. Always ask: *does swapping the order give something new, or the same thing?*

## Where it leads

- Next step: [Explore: the multiplication principle](02-explore.md), where trees turn into one quick
  multiplication.
- Being tidy and finding a rule is the heart of [Patterns and sequences](../patterns/index.md): the handshake
  numbers 1, 3, 6, 10 are the triangle numbers.
- Counting the ways something can happen is the first step in working out its chance:
  [Probability](../probability/index.md).
