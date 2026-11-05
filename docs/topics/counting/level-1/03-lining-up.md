---
title: "Lining up"
---

# Lining up

*Counting and combinations · level 1, lesson 3 of 6*

## A question to start

Three friends, Ana, Ben and Cai, line up for the slide every day. They decide: "Let's stand in a different order
every day, until we run out of new orders." How many days can they keep this up?

Some people guess 3, because there are 3 friends. Some guess 9. Let's find out, by **acting it out** and then by
thinking. The answer is a number you will meet again and again in counting.

## The idea

### What is a line-up?

A **line-up** (grown-ups also say an **arrangement** or an **order**) is the friends standing one behind the other:
someone is first, someone is second, someone is last. Two line-ups are **different** if anybody is standing in a
different place.

So "Ana, Ben, Cai" and "Ben, Ana, Cai" are different line-ups: Ana is first in one and second in the other. Order
matters, just like the [ice-cream towers](02-ice-cream-towers.md) in the last lesson. A line-up is a tower lying on
its side!

### Act it out

If you can, find two friends (or use three toys, or three cups with letters on them) and try it. Here is a way to
stay tidy, the same trick as before: **keep the front person still** and move only the others.

1. Ana stands at the front. Behind her, Ben and Cai can stand two ways: Ben then Cai, or Cai then Ben.
2. Now Ben goes to the front. Behind him, Ana and Cai can stand two ways: Ana then Cai, or Cai then Ana.
3. Now Cai goes to the front. Behind her, Ana and Ben can stand two ways: Ana then Ben, or Ben then Ana.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 150" role="img" aria-label="Six line-ups of three friends in three groups. Ana first: A B C and A C B. Ben first: B A C and B C A. Cai first: C A B and C B A.">
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="70" y="25">Ana first</text><text x="210" y="25">Ben first</text><text x="350" y="25">Cai first</text>
  </g>
  <g stroke="currentColor" stroke-width="1.5">
    <circle cx="40" cy="60" r="13" fill="#eea66f"/><circle cx="70" cy="60" r="13" fill="#9cc9ea"/><circle cx="100" cy="60" r="13" fill="#7ccf9a"/>
    <circle cx="40" cy="105" r="13" fill="#eea66f"/><circle cx="70" cy="105" r="13" fill="#7ccf9a"/><circle cx="100" cy="105" r="13" fill="#9cc9ea"/>
    <circle cx="180" cy="60" r="13" fill="#9cc9ea"/><circle cx="210" cy="60" r="13" fill="#eea66f"/><circle cx="240" cy="60" r="13" fill="#7ccf9a"/>
    <circle cx="180" cy="105" r="13" fill="#9cc9ea"/><circle cx="210" cy="105" r="13" fill="#7ccf9a"/><circle cx="240" cy="105" r="13" fill="#eea66f"/>
    <circle cx="320" cy="60" r="13" fill="#7ccf9a"/><circle cx="350" cy="60" r="13" fill="#eea66f"/><circle cx="380" cy="60" r="13" fill="#9cc9ea"/>
    <circle cx="320" cy="105" r="13" fill="#7ccf9a"/><circle cx="350" cy="105" r="13" fill="#9cc9ea"/><circle cx="380" cy="105" r="13" fill="#eea66f"/>
  </g>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="40" y="65">A</text><text x="70" y="65">B</text><text x="100" y="65">C</text>
    <text x="40" y="110">A</text><text x="70" y="110">C</text><text x="100" y="110">B</text>
    <text x="180" y="65">B</text><text x="210" y="65">A</text><text x="240" y="65">C</text>
    <text x="180" y="110">B</text><text x="210" y="110">C</text><text x="240" y="110">A</text>
    <text x="320" y="65">C</text><text x="350" y="65">A</text><text x="380" y="65">B</text>
    <text x="320" y="110">C</text><text x="350" y="110">B</text><text x="380" y="110">A</text>
    <text x="210" y="142">the front of the line is on the left</text>
  </g>
</svg>
</div>

Count them: 2 and 2 and 2 make **6 line-ups**. The friends can stand in a new order for **6 days**. On day 7 they
must repeat one.

### Why exactly 6?

Let's make sure we have not missed one or counted one twice.

**Nothing is missed.** Every line-up has **somebody** at the front. That somebody is Ana, Ben or Cai, so every
line-up belongs to one of our three groups. Inside a group, the front person is fixed, and the other two friends can
only stand in 2 ways (one of them goes second, the other goes last). We wrote both ways in every group. So every
possible line-up is somewhere in the picture.

**Nothing is counted twice.** Two line-ups in different groups have a different person at the front, so they are
different. Two line-ups in the same group have a different person second. So all 6 are different.

That is a complete reason. There are exactly 6.

### Two friends, three friends, four friends

Let's look at smaller and bigger groups.

- **1 friend**: only **1** way. Ana stands there alone.
- **2 friends**: **2** ways. Ana then Ben, or Ben then Ana.
- **3 friends**: **6** ways, as we found. 3 groups (one for each front person) of 2.

Now **4 friends**: Ana, Ben, Cai and Dee. Use the same trick. Pick who goes at the front: 4 choices, so 4 groups.
In each group, the other 3 friends line up behind the front person, and we already know that 3 friends can line up
in 6 ways. So there are 4 groups of 6:

6 and 6 and 6 and 6 make **24 line-ups**.

| friends | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- |
| line-ups | 1 | 2 | 6 | 24 |

Look how fast that grows! Each time one more friend joins, the number of groups is the number of friends, and each
group holds all the line-ups of the smaller team. With 5 friends there would be 5 groups of 24, which is 120
line-ups. That is about four months of new orders, one each day.

### Building on what you know

Notice what we did for 4 friends. We did not list all 24. We used the answer for 3 friends (6) as a building block.
This is a very powerful habit in mathematics: **solve a smaller problem first, then use it to solve the bigger
one.**

<figure class="play" data-play="arrange" data-mode="perm"><span class="ai-tag">AI-created</span><figcaption><b>Lining up.</b> Every order of n friends: n × (n − 1) × …</figcaption></figure>

## Worked examples

**1. Three toys on a shelf.** A car, a duck and a robot stand in a row. How many ways can you arrange them?

This is exactly the same as three friends lining up: the toys are the "friends", and the shelf is the line. Car
first: car, duck, robot or car, robot, duck. Duck first: 2 ways. Robot first: 2 ways. **6 ways.**

**2. The letters of CAT.** How many ways can you write the letters C, A and T in a row? (They don't all have to
make real words.)

C first: CAT, CTA. A first: ACT, ATC. T first: TCA, TAC. **6 ways**, and two of them (CAT and ACT) are real words.

**3. Ana must go first.** Ana says: "I'm always first!" Now how many line-ups of Ana, Ben and Cai are there?

Only the "Ana first" group is allowed: Ana, Ben, Cai and Ana, Cai, Ben. **2 line-ups.** A rule (grown-ups say a
**condition**) can make the count smaller.

**4. Two red blocks and one blue block.** You line up 3 blocks in a row: 2 red ones (exactly alike) and 1 blue one.
How many different-looking rows?

If the red blocks were different, there would be 6 rows. But they look the same, so some rows look identical. The
easy way: just ask **where the blue block goes**. It can be first, second or last:

blue, red, red · red, blue, red · red, red, blue.

**3 rows.** The 6 rows have paired up into 3, because swapping the two red blocks changes nothing you can see. (This
is the "double scoop" idea again from the ice-cream lesson.)

## Try it

1. Two friends, Pip and Max, line up. List all the line-ups.
2. List all 6 ways to line up a cat, a dog and a fish.
3. Three runners, Zoe, Yan and Xavi, finish a race, and there are no ties. In how many different orders can they
   finish?
4. Ana, Ben and Cai line up, but Cai wants to be **last**. How many line-ups are allowed? List them.
5. How many ways can you write the letters of the word TOP in a row? How many are real English words?
6. Four friends line up. How many line-ups have Dee at the front?
7. You line up 3 blocks: 2 green (alike) and 1 orange. How many different-looking rows? What if there are 4 blocks:
   3 green and 1 orange?

??? note "Answers"
    1. **2**: Pip, Max and Max, Pip.
    2. Cat first: cat, dog, fish and cat, fish, dog. Dog first: dog, cat, fish and dog, fish, cat. Fish first: fish,
       cat, dog and fish, dog, cat. **6**.
    3. **6**. A finishing order is a line-up: first, second, third.
    4. **2**: Ana, Ben, Cai and Ben, Ana, Cai. With Cai fixed at the back, only Ana and Ben move, and two people can
       stand in 2 ways.
    5. **6** ways: TOP, TPO, OTP, OPT, PTO, POT. Real words: TOP, POT and OPT (to opt means to choose), so **3**.
    6. **6**. With Dee fixed at the front, the other 3 friends line up behind her, and 3 friends can line up in 6
       ways. (This is one of the 4 groups of 6 that made 24.)
    7. **3** rows: the orange block is first, second or last. With 3 green and 1 orange: the orange block is first,
       second, third or last, so **4** rows.

## Common mistake

**Saying "3 friends, so 3 ways".** Three ways is how many people could be at the **front**. But each front person
starts a whole group of line-ups. Always ask: *after I choose the front, how many ways are there to finish?*

**Missing one because you jumped around.** "ABC, BCA, CAB, ACB, CBA..." Did you get them all? It is hard to tell!
Keep the front person still and finish their group before moving on.

## Where it leads

- Previous: [Ice-cream towers](02-ice-cream-towers.md) · Next: [Handshakes](04-handshakes.md), where pairs of
  friends meet and the order does **not** matter.
- [Level 1 page](index.md) · [Counting topic page](../index.md)
- The numbers 1, 2, 6, 24, 120 are a famous pattern. In level 4 they get a name, **factorials**, and you will see
  how quickly they grow. The growing table is also a pattern of its own: [Patterns](../../patterns/index.md).
- In level 2, lining up becomes a [tree diagram](../level-2/01-tree-diagrams.md).
