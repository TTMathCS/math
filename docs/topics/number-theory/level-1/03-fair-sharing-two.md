---
title: "Fair sharing between two friends"
---

# Fair sharing between two friends

*Number theory · level 1, lesson 3 of 6*

## A question to start

Mia and Leo find a bag of 13 marbles. They want to share them **fairly**, so that each one gets the same number.
Mia says, "Easy, we just keep giving them out." Leo says, "It won't work." Who is right?

Here is the interesting part. Leo knew the answer **before** a single marble was given out. How? In this lesson you
will learn his secret, and you will see that sharing between two friends is really the same thing as making pairs.

## The idea

### What fair means

Sharing **fairly** means everyone gets **the same number**. Not "about the same". Exactly the same. If Mia gets 6
marbles and Leo gets 7, that is not fair, even though it is close.

Each person's part is called their **share**.

### Dealing out, one by one

The easiest way to share fairly is to **deal**, like dealing cards. Give one to Mia, then one to Leo. One to Mia,
one to Leo. Keep going until the marbles run out or you cannot go on fairly.

Here are 8 marbles being dealt to two friends.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 130" role="img" aria-label="Eight marbles dealt to two friends: Mia's row has 4 orange marbles and Leo's row has 4 blue marbles. Nothing is left.">
  <g font-size="14" fill="currentColor">
    <text x="10" y="44">Mia</text><text x="10" y="94">Leo</text>
  </g>
  <g fill="#eea66f" stroke="currentColor" stroke-width="1.5">
    <circle cx="80" cy="40" r="14"/><circle cx="130" cy="40" r="14"/><circle cx="180" cy="40" r="14"/><circle cx="230" cy="40" r="14"/>
  </g>
  <g fill="#9cc9ea" stroke="currentColor" stroke-width="1.5">
    <circle cx="80" cy="90" r="14"/><circle cx="130" cy="90" r="14"/><circle cx="180" cy="90" r="14"/><circle cx="230" cy="90" r="14"/>
  </g>
  <g font-size="11" text-anchor="middle" fill="currentColor">
    <text x="80" y="122">round 1</text><text x="130" y="122">2</text><text x="180" y="122">3</text><text x="230" y="122">4</text>
  </g>
  <text x="310" y="70" font-size="13" text-anchor="middle" fill="currentColor">4 each,</text>
  <text x="310" y="86" font-size="13" text-anchor="middle" fill="currentColor">0 left</text>
</svg>
</div>

After 4 rounds, each friend has 4 marbles and nothing is left. That is fair.

Now look at the picture again. It is **two rows**, one marble above another. That is exactly the picture we drew
for pairs in [lesson 1](01-pairs-partners.md)! Every round of dealing gives out **one pair**: one marble for Mia and
its partner for Leo.

### The secret: sharing between two is making pairs

This is the big idea of the lesson.

- Each round of dealing uses up one **pair**.
- Each friend gets **one marble per pair**.
- So each friend's share is the **number of pairs**.

And now we know what happens at the end:

- If the number is **even**, every marble has a partner, so the dealing comes out perfectly. **Nothing is left.**
- If the number is **odd**, after all the pairs are dealt there is **one marble left**. It cannot go to Mia without
  being unfair to Leo, and it cannot go to Leo without being unfair to Mia.

That was Leo's secret. 13 ends in 3, so 13 is odd. He knew one marble would be left over before they started.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 130" role="img" aria-label="Thirteen marbles dealt to two friends: 6 for Mia, 6 for Leo, and one green marble left in the middle">
  <g font-size="14" fill="currentColor">
    <text x="10" y="44">Mia</text><text x="10" y="94">Leo</text>
  </g>
  <g fill="#eea66f" stroke="currentColor" stroke-width="1.5">
    <circle cx="70" cy="40" r="13"/><circle cx="110" cy="40" r="13"/><circle cx="150" cy="40" r="13"/>
    <circle cx="190" cy="40" r="13"/><circle cx="230" cy="40" r="13"/><circle cx="270" cy="40" r="13"/>
  </g>
  <g fill="#9cc9ea" stroke="currentColor" stroke-width="1.5">
    <circle cx="70" cy="90" r="13"/><circle cx="110" cy="90" r="13"/><circle cx="150" cy="90" r="13"/>
    <circle cx="190" cy="90" r="13"/><circle cx="230" cy="90" r="13"/><circle cx="270" cy="90" r="13"/>
  </g>
  <circle cx="340" cy="65" r="13" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <text x="340" y="105" font-size="12" text-anchor="middle" fill="currentColor">left over</text>
</svg>
</div>

So with 13 marbles, Mia gets 6, Leo gets 6, and 1 is left over. Check: 6 and 6 make 12, and 1 more makes 13. ✓

### What can you do with the one left over?

That depends on what you are sharing.

- **A cookie or an apple** can be cut in half. Each friend gets half of it. Then the sharing is fair again.
- **A marble, a toy car or a crayon** cannot be cut. You could put it back in the bag, give it to a third person,
  or play a game to decide who gets it.

In number theory we care about whole things that cannot be cut, like marbles. So we just say "1 is left over".
Fractions, like a half, are a different story, told in the [Numbers](../../numbers/index.md) topic.

### Doubles

When a number shares fairly between two friends, the whole amount is **double** one share. Double means "the same
number twice". 8 is double 4, because 4 and 4 make 8.

So here is another way to say it: the **even numbers are exactly the doubles**.

| Share | Double (both friends together) |
| --- | --- |
| 1 | 1 + 1 = 2 |
| 2 | 2 + 2 = 4 |
| 3 | 3 + 3 = 6 |
| 4 | 4 + 4 = 8 |
| 5 | 5 + 5 = 10 |
| 6 | 6 + 6 = 12 |
| 7 | 7 + 7 = 14 |

And the odd numbers are "a double plus one": 13 is 6 + 6 + 1, and 7 is 3 + 3 + 1.

### A sharing game: Guess, then deal

You need a bowl of counters (beans, buttons or pasta work well) and a friend.

1. One player grabs a handful of counters and puts them on the table.
2. **Before dealing**, both players count the counters and guess: will they share fairly, or will one be left?
3. Now deal them out, one to you, one to your friend.
4. Everyone who guessed right scores a point.
5. Swap who grabs. The first to 5 points wins.

At first you will count and think hard. After a few rounds you will just look at the last digit and know. That is
the even and odd trick at work.

## Worked examples

**Example 1. Strawberries.** Two friends share 14 strawberries fairly. How many does each get? Is any left over?

1. 14 ends in 4, so 14 is even. Nothing will be left over.
2. Each friend gets the number of pairs. Count up in doubles: 6 + 6 = 12, 7 + 7 = 14.
3. So each friend gets **7 strawberries**, and **none** is left over.

**Example 2. Stickers.** Two friends share 9 stickers. What happens?

1. 9 ends in 9, so 9 is odd. **One** sticker will be left over.
2. Take the leftover away: 9 take away 1 is 8. Now share 8 fairly: 4 + 4 = 8.
3. So each friend gets **4 stickers**, and **1 is left over**.
4. Check: 4 and 4 and 1 make 9. ✓

**Example 3. A fair share given.** Ana gave her brother a fair half of her shells. He got 10 shells. Nothing was
left over. How many shells did Ana have to start with?

1. Ana kept the same number she gave: 10.
2. So she had 10 + 10 = **20 shells**.
3. Check: 20 is even, and 20 shared between two gives 10 each. ✓

**Example 4. One more car.** Tom and Sam share 11 toy cars. Then Grandpa gives them one more car. Can
they share fairly now?

1. 11 is odd. Shared fairly, each gets 5, and 1 is left over.
2. Grandpa adds 1 car, so now there are 12. The new car becomes the partner of the lonely one.
3. 12 is even, so now **yes**: each boy gets **6 cars**.

## Try it

1. Two friends share 6 apples fairly. How many does each get?
2. Two friends share 15 cards. How many does each get? How many are left?
3. Which of these can be shared fairly between two, with nothing left: 10, 17, 22, 31?
4. What is double 9? What is half of 16?
5. Lily and Max shared some grapes fairly. Each got 8 grapes and 1 grape was left. How many grapes were there?
6. Play "Guess, then deal" with someone at home. Write down three handfuls: the number, your guess, and what
   happened.
7. Raj says: "I shared 20 crayons between two friends and 2 were left over." Can that be right?
8. A bag has an odd number of sweets. You eat one. Can the rest be shared fairly between two friends now?

??? note "Answers"
    1. **3 apples** each. 3 + 3 = 6.
    2. 15 is odd, so 1 is left over. Take it away: 14 is left, and 7 + 7 = 14. So each gets **7 cards** and **1 is
       left**. Check: 7 + 7 + 1 = 15. ✓
    3. **10 and 22**. They end in 0 and 2, so they are even. 17 and 31 are odd and leave 1 over.
    4. Double 9 is **18** (9 + 9). Half of 16 is **8**, because 8 + 8 = 16.
    5. 8 + 8 = 16 grapes were shared, and 1 more was left. So there were **17 grapes**.
    6. Answers will be different for everyone. Check each one: if the number ended in 0, 2, 4, 6 or 8, nothing
       should have been left. If it ended in 1, 3, 5, 7 or 9, one should have been left.
    7. **No.** If 2 crayons were left, they could still be dealt out: one more for each friend. Raj stopped too soon.
       20 is even, so the right answer is 10 each and nothing left.
    8. **Yes.** An odd number has one lonely sweet. Eating one sweet takes away one, and the number becomes even.
       (One less than an odd number is always even.) So the rest share fairly.

## Common mistake

**Giving "almost fair" shares.** Some children deal out 13 marbles and give the last one to one friend, so the
shares are 7 and 6. That is not fair: fair means exactly the same. The leftover marble stays **left over**.

**Forgetting to check.** After sharing, add the shares and the leftover back together. You should get the number you
started with. If you shared 15 and got "7 each, 2 left", the check gives 7 + 7 + 2 = 16, which is wrong, so look
again.

## Where it leads

- Back: [Odd and even on the number line](02-odd-even-line.md). Next lesson:
  [Skip counting by 2s, 5s and 10s](04-skip-counting.md).
- This level: [Level 1: Odd, even and sharing](index.md). The whole topic: [Number theory](../index.md).
- Sharing among **three or more** friends, and what the leftover can be: [Leftovers](06-leftovers.md).
- Doubles and halves come back in [Numbers](../../numbers/index.md), and sharing in equal parts is the start of
  [Ratio](../../ratio/index.md).
- In level 2, [Odd and even sums](../level-2/01-odd-even-sums.md) explains why two odd numbers always add to an
  even one.
