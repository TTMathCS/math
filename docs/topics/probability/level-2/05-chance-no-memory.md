---
title: "Chance has no memory"
---

# Chance has no memory

*Probability · level 2, lesson 5 of 6*

## A question to start

You flip a fair coin five times. It lands heads, heads, heads, heads, heads.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 80" role="img" aria-label="Five coins showing heads in a row, followed by a sixth coin with a question mark">
  <g stroke="currentColor" stroke-width="1.5">
    <circle cx="35" cy="40" r="24" fill="#eea66f"/><circle cx="100" cy="40" r="24" fill="#eea66f"/><circle cx="165" cy="40" r="24" fill="#eea66f"/>
    <circle cx="230" cy="40" r="24" fill="#eea66f"/><circle cx="295" cy="40" r="24" fill="#eea66f"/>
    <circle cx="365" cy="40" r="24" fill="none" stroke-dasharray="5 4"/>
  </g>
  <g font-size="18" fill="currentColor" text-anchor="middle">
    <text x="35" y="46">H</text><text x="100" y="46">H</text><text x="165" y="46">H</text><text x="230" y="46">H</text><text x="295" y="46">H</text><text x="365" y="46">?</text>
  </g>
</svg>
</div>

Now you are about to flip it a sixth time. What is more likely: heads or tails?

Many people feel strongly that it **must** be tails now. "Five heads already! Tails is due." Others feel the opposite:
"Heads is on a streak, it will keep going."

Both feelings are wrong. The sixth flip is still an **even chance**: heads and tails are just as likely as ever. The
coin cannot remember what it did. This lesson explains why, why our brains find it so hard to believe, and when the
past **does** change the chances.

## The idea

### The coin does not know

A coin is a small round piece of metal. It has no eyes, no brain and no notebook. When you flip it, it spins in the
air and lands, and which side lands up depends on how you flicked it and how it spun **this time**. Nothing about the
last five flips is stored inside it.

Every flip, the coin is the same coin, with the same two sides, and the same 1 way for heads and 1 way for tails. So
every flip has the same even chance. Mathematicians say the flips are **independent**: what happens on one flip does
not change the chances of another.

The same is true for a die and for a spinner. A die that has not shown a 6 for ten rolls is not "saving up" a 6.
Each roll is a fresh start.

### Listing the ways proves it

Here is a way to see it with counting. Before you started, there were many ways six flips could go. But you already
know the first five were all heads. So only two ways are still possible:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 110" role="img" aria-label="The two ways six flips can go when the first five are heads: five heads then heads, or five heads then tails. Each has one way.">
  <g stroke="currentColor" stroke-width="1.2">
    <circle cx="25" cy="30" r="15" fill="#eea66f"/><circle cx="60" cy="30" r="15" fill="#eea66f"/><circle cx="95" cy="30" r="15" fill="#eea66f"/><circle cx="130" cy="30" r="15" fill="#eea66f"/><circle cx="165" cy="30" r="15" fill="#eea66f"/><circle cx="200" cy="30" r="15" fill="#eea66f"/>
    <circle cx="25" cy="80" r="15" fill="#eea66f"/><circle cx="60" cy="80" r="15" fill="#eea66f"/><circle cx="95" cy="80" r="15" fill="#eea66f"/><circle cx="130" cy="80" r="15" fill="#eea66f"/><circle cx="165" cy="80" r="15" fill="#eea66f"/><circle cx="200" cy="80" r="15" fill="#9cc9ea"/>
  </g>
  <g font-size="13" fill="currentColor" text-anchor="middle">
    <text x="25" y="35">H</text><text x="60" y="35">H</text><text x="95" y="35">H</text><text x="130" y="35">H</text><text x="165" y="35">H</text><text x="200" y="35">H</text>
    <text x="25" y="85">H</text><text x="60" y="85">H</text><text x="95" y="85">H</text><text x="130" y="85">H</text><text x="165" y="85">H</text><text x="200" y="85">T</text>
  </g>
  <g font-size="13" fill="currentColor"><text x="235" y="35">sixth flip heads: 1 way</text><text x="235" y="85">sixth flip tails: 1 way</text></g>
</svg>
</div>

One way ends in heads, one way ends in tails. One each: an **even chance**.

Here is something surprising. Before you flipped at all, the six-flip result "H H H H H H" looked impossibly rare. But
"H H H H H T" is **exactly as rare**. Each is just 1 particular way out of all the ways six flips can go. Every
particular list of six flips is equally likely, because each flip has the same even chance. A streak of six heads
just **looks** more special to us.

### Why it feels so wrong

If the math is so clear, why do so many people feel that tails is due? There are some good reasons for the feeling,
even though it is wrong.

**1. Five heads in a row is rare, so we feel something must "fix" it.** It is true that five heads in a row is rare
**before you start**. Five flips can go 32 different ways (2 for the first flip, times 2, times 2, times 2, times 2),
and only 1 of them is all heads. But by the time you are about to flip the sixth time, the rare part has **already
happened**. It is over. The sixth flip only has to choose between its own two ways.

**2. We think random things should look mixed up.** If you ask people to write down a "random-looking" list of heads
and tails, they switch between H and T a lot, and hardly ever write four or five the same in a row. But real coins are
not like that. Streaks are **normal**. In 100 flips of a fair coin, a streak of at least 5 heads in a row happens
about 8 times out of 10. If you never see streaks, that is the strange thing!

**3. We have heard that "things even out".** It is true that over many, many flips, the **share** of heads gets close
to half. But not because the coin makes up for the past. It happens because the new flips **swamp** the old ones.

### Swamping, not fixing

Here is what "evening out" really means. Say you flip 10 times and get 8 heads and 2 tails. Heads is 6 ahead. That is
far from half: 8 out of 10.

Now flip 1000 more times. The coin does not try to catch up. It just does what fair coins do: about half heads, about
half tails, say 500 of each. Add everything up:

- Heads: 8 + 500 = 508.
- Tails: 2 + 500 = 502.
- Total: 1010 flips.

Heads is **still 6 ahead**. The coin did not fix anything. But 508 out of 1010 is very, very close to half. The early
lead of 6 is tiny compared with 1010. The new flips drowned it, like one drop of orange paint in a big bucket of blue.

So the share gets close to half, without any flip ever being "due".

### When the past does matter: the bag that changes

Not everything in chance is memoryless. Here is a case where the past **does** change the next chance.

A bag has 2 orange blocks and 2 blue blocks. You pull one out, it is orange, and you **keep it out**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 150" role="img" aria-label="Before: a bag with two orange and two blue blocks. After taking out one orange block and keeping it out: the bag has one orange and two blue blocks.">
  <g fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round">
    <path d="M 20 50 Q 20 40 30 40 L 170 40 Q 180 40 180 50 L 180 115 Q 180 130 165 130 L 35 130 Q 20 130 20 115 Z"/>
    <path d="M 240 50 Q 240 40 250 40 L 390 40 Q 400 40 400 50 L 400 115 Q 400 130 385 130 L 255 130 Q 240 130 240 115 Z"/>
  </g>
  <g stroke="currentColor" stroke-width="1.5">
    <rect x="35" y="70" width="28" height="28" fill="#eea66f"/><rect x="70" y="70" width="28" height="28" fill="#eea66f"/><rect x="105" y="70" width="28" height="28" fill="#9cc9ea"/><rect x="140" y="70" width="28" height="28" fill="#9cc9ea"/>
    <rect x="270" y="70" width="28" height="28" fill="#eea66f"/><rect x="306" y="70" width="28" height="28" fill="#9cc9ea"/><rect x="342" y="70" width="28" height="28" fill="#9cc9ea"/>
    <rect x="200" y="5" width="22" height="22" fill="#eea66f"/>
  </g>
  <g font-size="13" fill="currentColor" text-anchor="middle"><text x="100" y="147">before: 2 orange, 2 blue</text><text x="320" y="147">after: 1 orange, 2 blue</text></g>
  <path d="M 185 30 L 198 18" stroke="currentColor" stroke-width="1.5"/>
</svg>
</div>

Before, orange and blue had 2 ways each: even chance. Now the bag has 1 orange and 2 blue. On the next draw, blue has
2 ways and orange has only 1. **Blue is now more likely.** The past changed the chances, because it changed what is
**in the bag**.

So here is the real test. Ask: **"Did what happened change the thing I am using?"**

- A coin after five heads: still the same coin, same two sides. **No memory.**
- A die after ten rolls with no 6: still the same six faces. **No memory.**
- A bag where you **put the block back**: the same bag every time. **No memory.**
- A bag where you **keep the block out**: the bag is different now. **The past matters.**
- A pack of cards where you do not put the cards back: the pack is different now. **The past matters.**

### One more twist: a suspicious coin

Suppose a coin lands heads **50 times in a row**. A fair coin almost never does that. So you should start to wonder:
is this a fair coin at all? Maybe it has heads on both sides! Then the next flip is **more** likely to be heads, not
less. If the past makes you think the coin is a trick coin, that is a reason to expect **more heads**. It is never a
reason to expect tails to be "due".

## Worked examples

**Example 1. A die with a long wait.**

Raj has rolled a die 12 times and has not got a 6. He says, "I am sure to get a 6 soon, it is due." Is he right?

1. The die is the same die, with the same 6 faces. Nothing has changed it.
2. On the next roll, a 6 is still 1 way out of 6, exactly as on the first roll.
3. Raj is **not** right. A 6 is not due. It may come on the next roll, or it may take 10 more.

**Example 2. Even or not?**

A spinner is half orange and half blue. It has landed on blue 4 times in a row. What is the chance of orange next?

1. The spinner has not changed: half orange, half blue.
2. **Even chance**, as always.

**Example 3. Cards that do not go back.**

You have 5 cards, numbered 1 to 5, face down. You turn one over: it is 3. You leave it face up and pick another. Is 3
still possible?

1. The 3 has been taken out. The cards left are 1, 2, 4 and 5.
2. Picking a 3 is now **impossible**. Each of the other four cards has 1 way out of 4.
3. Here the past did matter, because the cards did not go back.

## Try it

1. A coin lands tails 6 times in a row. What is the chance of heads on the next flip?
2. Which is more likely in four flips: H H H H, or H T T H?
3. A bag has 3 orange and 3 blue blocks. You draw orange and put it back. Is orange now less likely on the next draw?
4. The same bag. You draw orange and **keep it out**. Which colour is more likely next?
5. Lily says, "I flipped 20 times and got 14 heads. Now I'll get more tails to even it out." What would you tell her?
6. A friend writes down a "random" list of 20 flips with no streak longer than 2. Another flips a real coin 20 times
   and gets a streak of 5 heads. Which list is more likely to be the real coin?
7. You have a box of 10 crayons, 1 of them red. You take crayons out one at a time without putting them back, and the
   first 8 are not red. What is the chance that the next one is red?

??? note "Answers"
    1. **Even chance.** The coin has no memory: 1 way heads, 1 way tails.
    2. **Equally likely.** Each is 1 particular way out of the 16 ways four flips can go. H H H H only looks more
       special.
    3. **No.** You put it back, so the bag is the same as before: 3 and 3, even chance.
    4. **Blue.** Now the bag has 2 orange and 3 blue, so blue has more ways.
    5. The coin does not know it is behind. The next flips are still even chance. If she flips many more times, the
       **share** of heads will probably get close to half, but because the new flips swamp the old ones, not because
       tails tries to catch up.
    6. **The real coin with the streak of 5.** Real coins make streaks quite often. A list that never has more than 2
       the same in a row looks like it was made up by a person.
    7. The crayons did not go back, so 2 crayons are left, and the red one must be one of them (it has not come out).
       So red is **1 way out of 2: an even chance**. Here the past changed the box, so the chance changed (it was only
       1 out of 10 at the start).

## Common mistake

**The gambler's fallacy: "it's due".** A fallacy is a mistake in thinking that sounds right. Believing that tails is
due after many heads, or that a 6 is due after a long wait, is so common that it has a name: the **gambler's
fallacy**. Coins, dice and spinners have no memory.

**Forgetting that some things do have memory.** If you take things out and do not put them back, the chances change.
Always ask whether the thing you are using changed.

## Where it leads

- Previous lesson: [The dice sum race](04-dice-sum-race.md) · Next lesson: [Making predictions](06-making-predictions.md).
- This level: [Level 2: Fair or unfair?](index.md). The whole topic: [Probability](../index.md).
- Streaks in real coin flips: [The coin flip experiment](../level-1/05-coin-flip-experiment.md).
- Independent events, and drawing with and without putting back, are worked out with numbers in
  [level 4](../level-4/index.md) and [level 5](../level-5/index.md), where you will also meet the "hot hand".
- Chances that change when you learn something new are called conditional probability: [level 6](../level-6/index.md).
