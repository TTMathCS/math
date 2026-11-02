---
title: "Ice-cream towers"
---

# Ice-cream towers

*Counting and combinations · level 1, lesson 2 of 6*

## A question to start

Mia gets an ice-cream cone with two scoops: one chocolate scoop and one vanilla scoop. Her brother Leo gets one too,
with the same two flavours. Mia looks at Leo's cone and says: "That's not the same as mine!"

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 175" role="img" aria-label="Two ice-cream cones. Mia's has chocolate on top and vanilla below. Leo's has vanilla on top and chocolate below.">
  <g stroke="currentColor" stroke-width="2">
    <polygon points="132,112 168,112 150,160" fill="none"/>
    <circle cx="150" cy="96" r="18" fill="none"/>
    <circle cx="150" cy="62" r="18" fill="#eea66f"/>
    <polygon points="252,112 288,112 270,160" fill="none"/>
    <circle cx="270" cy="96" r="18" fill="#eea66f"/>
    <circle cx="270" cy="62" r="18" fill="none"/>
  </g>
  <g font-size="14" fill="currentColor" text-anchor="middle">
    <text x="150" y="67">C</text><text x="150" y="101">V</text>
    <text x="270" y="67">V</text><text x="270" y="101">C</text>
    <text x="150" y="25">Mia</text><text x="270" y="25">Leo</text>
  </g>
</svg>
</div>

Is Mia right? They have the same two flavours. But Mia's chocolate is on **top**, and Leo's chocolate is on the
**bottom**. If you eat a cone from the top, Mia tastes chocolate first and Leo tastes vanilla first.

So are these the same, or different? The surprising answer is: **it depends on the question you are asking.** This
lesson is about one of the biggest ideas in counting: sometimes the **order** matters, and sometimes it does not.

## The idea

### A tower has a top and a bottom

Think of a two-scoop cone as a little **tower**. A tower has a top place and a bottom place. When we say "a tower",
we care about which flavour is in which place.

- Chocolate on top, vanilla on the bottom: that is one tower.
- Vanilla on top, chocolate on the bottom: that is a **different** tower.

So with one chocolate scoop and one vanilla scoop, there are **2 towers**. When **order matters**, swapping the two
things gives something new.

### A cup has no top and bottom

Now put the same two scoops in a **cup** and stir them a little. It does not matter which went in first: the cup
just has "chocolate and vanilla" in it. Swapping does not change anything.

So with chocolate and vanilla, there is only **1 cup**. When **order does not matter**, swapping the two things
gives the same thing again.

Same scoops, different question, different answer: 2 towers, but 1 cup.

### Three flavours

Now the shop has three flavours: chocolate (C), vanilla (V) and mint (M). You want two **different** flavours.

**Towers first.** Be tidy: choose the **top** scoop first and keep it still, then try every bottom scoop that is
different.

- Chocolate on top: vanilla below, or mint below. **2 towers.**
- Vanilla on top: chocolate below, or mint below. **2 towers.**
- Mint on top: chocolate below, or vanilla below. **2 towers.**

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 150" role="img" aria-label="Six two-scoop towers in three pairs: chocolate on top with vanilla or mint below, vanilla on top with chocolate or mint below, mint on top with chocolate or vanilla below">
  <g stroke="currentColor" stroke-width="2">
    <polygon points="20,92 50,92 35,132" fill="none"/><circle cx="35" cy="79" r="14" fill="none"/><circle cx="35" cy="51" r="14" fill="#eea66f"/>
    <polygon points="75,92 105,92 90,132" fill="none"/><circle cx="90" cy="79" r="14" fill="#7ccf9a"/><circle cx="90" cy="51" r="14" fill="#eea66f"/>
    <polygon points="160,92 190,92 175,132" fill="none"/><circle cx="175" cy="79" r="14" fill="#eea66f"/><circle cx="175" cy="51" r="14" fill="none"/>
    <polygon points="215,92 245,92 230,132" fill="none"/><circle cx="230" cy="79" r="14" fill="#7ccf9a"/><circle cx="230" cy="51" r="14" fill="none"/>
    <polygon points="300,92 330,92 315,132" fill="none"/><circle cx="315" cy="79" r="14" fill="#eea66f"/><circle cx="315" cy="51" r="14" fill="#7ccf9a"/>
    <polygon points="355,92 385,92 370,132" fill="none"/><circle cx="370" cy="79" r="14" fill="none"/><circle cx="370" cy="51" r="14" fill="#7ccf9a"/>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="35" y="55">C</text><text x="35" y="83">V</text><text x="90" y="55">C</text><text x="90" y="83">M</text>
    <text x="175" y="55">V</text><text x="175" y="83">C</text><text x="230" y="55">V</text><text x="230" y="83">M</text>
    <text x="315" y="55">M</text><text x="315" y="83">C</text><text x="370" y="55">M</text><text x="370" y="83">V</text>
    <text x="62" y="22">C on top</text><text x="202" y="22">V on top</text><text x="342" y="22">M on top</text>
  </g>
</svg>
</div>

2 and 2 and 2 make **6 towers**.

**Now cups.** In a cup, "chocolate and vanilla" is one cup, whichever is on top. Look at the 6 towers and find the
**partners**: towers with the same two flavours, just swapped.

- C on top of V, and V on top of C: both are the cup **chocolate and vanilla**.
- C on top of M, and M on top of C: both are the cup **chocolate and mint**.
- V on top of M, and M on top of V: both are the cup **vanilla and mint**.

The 6 towers pair up into **3 cups**.

### Why towers are always double the cups

Here is the reason, and it works for any flavours. Take any cup with two different flavours. Tip it out and build a
tower. You can put either flavour on top, so **every cup makes exactly 2 towers**. And every tower comes from
exactly one cup (just squash it into a cup). So there are always twice as many towers as cups.

3 cups make 3 and 3 towers, which is 6. ✓

### What about two scoops of the same flavour?

Some shops let you have **double chocolate**: two chocolate scoops. If you swap the two scoops of a double chocolate
tower, nothing changes. Both are chocolate! So a double tower has **no partner**, and it is a cup and a tower at
the same time.

With chocolate and vanilla, and doubles allowed, the towers are:

- chocolate on top: chocolate below (double), or vanilla below;
- vanilla on top: chocolate below, or vanilla below (double).

That is **4 towers**. Notice it is a box, just like Teddy's outfits in the last lesson: 2 rows (top flavour) and 2
columns (bottom flavour), and 2 and 2 make 4.

## Worked examples

**1. Three flavours, doubles allowed, towers.** Chocolate, vanilla and mint, and you may pick the same flavour
twice. How many towers?

Make a box. Each row is a top flavour, each column is a bottom flavour.

| top \ bottom | C | V | M |
| --- | --- | --- | --- |
| **C** | C on C | C on V | C on M |
| **V** | V on C | V on V | V on M |
| **M** | M on C | M on V | M on M |

3 rows of 3 make **9 towers**. The 3 doubles sit on the slanting line from the top-left corner to the bottom-right
corner. The other 6 are the towers with two different flavours, which we found before. 9 is 6 and 3. ✓

**2. Three flavours, doubles allowed, cups.** Now the same, but in cups. The 6 towers with different flavours make 3
cups (they pair up). The 3 doubles make 3 cups (they have no partner). So there are 3 and 3, which makes **6 cups**:

chocolate and vanilla, chocolate and mint, vanilla and mint, double chocolate, double vanilla, double mint.

**3. Is it a tower or a cup?** For each one, does the order matter?

- Two children sit on a seesaw, one on each end. **Order matters** if you care who is on the left: Ana on the left
  and Ben on the right is a different picture from Ben on the left and Ana on the right.
- Two children are chosen to carry the class ball. **Order does not matter**: "Ana and Ben" is the same pair as
  "Ben and Ana".
- Two digits make a number, like 12 or 21. **Order matters**: twelve and twenty-one are different numbers.
- Two coins go in a piggy bank. **Order does not matter**: the bank has the same money either way.

**4. Four flavours, towers with different scoops.** Add blueberry. Keep the top scoop still and try each different
bottom: each top flavour has 3 partners below. 4 top flavours, 3 each: 3 and 3 and 3 and 3 make **12 towers**. And
the cups are half of that: **6 cups**.

## Try it

1. You have a strawberry scoop and a lemon scoop. How many different two-scoop towers can you make? How many cups?
2. Write all the towers you can make with two **different** scoops from banana, cherry and grape.
3. How many cups (order does not matter) can you make from the flavours in question 2?
4. Peanut butter and jam: does it matter which is on top in a sandwich? (There is no wrong answer if you explain
   it, but say what you are counting.)
5. Is the order important? (a) the two digits on a two-digit lock; (b) two friends you invite to play; (c) the first
   and second place in a race.
6. With chocolate and vanilla, doubles allowed, how many **cups** are there?
7. A shop has 4 flavours. You want a two-scoop tower, doubles allowed. How many towers? (Hint: draw a box with 4 rows
   and 4 columns.)

??? note "Answers"
    1. **2 towers** (strawberry on top, or lemon on top) and **1 cup** (strawberry and lemon).
    2. Banana on top: cherry or grape below. Cherry on top: banana or grape below. Grape on top: banana or cherry
       below. That is 2 and 2 and 2, **6 towers**.
    3. **3 cups**: banana and cherry, banana and grape, cherry and grape. Half of the 6 towers, because each cup makes
       2 towers.
    4. If you only care what is **in** the sandwich, order does not matter: peanut butter and jam is one sandwich.
       If you care which is on top (some people say the jam must touch the top bread!), then it matters and there
       are 2 ways.
    5. (a) **Yes**: 1 then 2 is a different code from 2 then 1. (b) **No**: inviting Ana and Ben is the same as
       inviting Ben and Ana. (c) **Yes**: winning and coming second are very different.
    6. **3 cups**: chocolate and vanilla, double chocolate, double vanilla.
    7. **16 towers.** 4 rows of 4: 4 and 4 and 4 and 4 make 16. (Of these, 4 are doubles and 12 have two different
       flavours.)

## Common mistake

**Forgetting to ask about order.** Before you count, ask: *if I swap these two, do I get something new?* For towers,
codes and races the answer is yes. For cups, pairs of friends and handshakes the answer is no. The same scoops can
give 6 or 3 depending on this one question.

**Pairing up the doubles.** A double chocolate tower has no partner, because swapping chocolate with chocolate
changes nothing. Do not halve it.

## Where it leads

- Previous: [Dressing a teddy](01-dressing-teddy.md) · Next: [Lining up](03-lining-up.md), where three friends
  make a three-person "tower".
- [Level 1 page](index.md) · [Counting topic page](../index.md)
- Pairs where order does not matter come back as [handshakes](04-handshakes.md) in lesson 4.
- Much later, in level 2, towers become [codes and locks](../level-2/04-codes-and-locks.md), where order always
  matters.
- Asking "what are the chances of getting chocolate on top?" is the start of [Probability](../../probability/index.md).
