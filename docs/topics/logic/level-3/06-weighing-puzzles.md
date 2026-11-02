---
title: "Weighing puzzles"
---

# Weighing puzzles

*Logic and puzzles · level 3, lesson 6 of 6*

## A question to start

You have 9 coins that look exactly the same. Eight are real. One is a fake, and the fake is a little **heavier** than
the others. You also have a balance: two pans on a beam. Put things on both pans, and the balance tells you which side
is heavier, or that they weigh the same. It has no numbers; it can only compare.

You may use the balance only **twice**. Can you always find the fake?

Most people's first idea is to put 4 coins on each side. Try it in your head before reading on. Does it work every
time? The answer to this puzzle is short and clever, and the reason behind it is one of the nicest pieces of thinking
in this level.

## The idea

### What one weighing can tell you

Every time you use the balance, exactly one of **three** things happens:

1. the **left** pan goes down (the left side is heavier);
2. the **right** pan goes down;
3. the pans **balance** (both sides weigh the same).

That third answer is just as useful as the other two. If the pans balance, the fake is **not on either pan**, so it
must be among the coins you left off. This is the secret of the whole lesson: **one weighing can split the coins into
three groups, not two.**

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 170" role="img" aria-label="A balance with three coins on each pan and three more coins set aside on the table">
  <g stroke="currentColor" stroke-width="2" fill="none">
    <line x1="210" y1="40" x2="210" y2="150"/>
    <line x1="180" y1="150" x2="240" y2="150"/>
    <line x1="80" y1="40" x2="340" y2="40"/>
    <line x1="80" y1="40" x2="55" y2="100"/>
    <line x1="80" y1="40" x2="105" y2="100"/>
    <line x1="340" y1="40" x2="315" y2="100"/>
    <line x1="340" y1="40" x2="365" y2="100"/>
    <line x1="40" y1="100" x2="120" y2="100"/>
    <line x1="300" y1="100" x2="380" y2="100"/>
  </g>
  <circle cx="210" cy="40" r="5" fill="currentColor"/>
  <g stroke="currentColor" stroke-width="1.2">
    <circle cx="60" cy="90" r="10" fill="#eea66f"/>
    <circle cx="80" cy="90" r="10" fill="#eea66f"/>
    <circle cx="100" cy="90" r="10" fill="#eea66f"/>
    <circle cx="320" cy="90" r="10" fill="#9cc9ea"/>
    <circle cx="340" cy="90" r="10" fill="#9cc9ea"/>
    <circle cx="360" cy="90" r="10" fill="#9cc9ea"/>
    <circle cx="270" cy="140" r="10" fill="#7ccf9a"/>
    <circle cx="290" cy="140" r="10" fill="#7ccf9a"/>
    <circle cx="310" cy="140" r="10" fill="#7ccf9a"/>
  </g>
  <g font-size="13" text-anchor="middle" fill="currentColor">
    <text x="80" y="125">1 2 3</text>
    <text x="340" y="125">4 5 6</text>
    <text x="290" y="166">7 8 9 (off)</text>
  </g>
</svg>
</div>

### The solution: split into threes

Number the coins 1 to 9.

**First weighing:** put coins 1, 2, 3 on the left and 4, 5, 6 on the right. Leave 7, 8, 9 on the table.

- If the left goes down, the fake is among **1, 2, 3** (the heavy coin pulls its side down).
- If the right goes down, the fake is among **4, 5, 6**.
- If they balance, both pans hold only real coins, so the fake is among **7, 8, 9**.

Either way, you are down to **3** coins. Call them X, Y, Z.

**Second weighing:** put X on the left and Y on the right. Leave Z off.

- Left goes down: **X** is the fake.
- Right goes down: **Y** is the fake.
- Balance: **Z** is the fake.

Done, in two weighings, every time.

Here is the whole plan as a **tree**. Start at the top, and follow the branch that matches what the balance does.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 200" role="img" aria-label="A tree. Top: weigh 1 2 3 against 4 5 6. Left down leads to weigh 1 against 2, with answers 1, 3, 2. Balance leads to weigh 7 against 8, with answers 7, 9, 8. Right down leads to weigh 4 against 5, with answers 4, 6, 5.">
  <g stroke="currentColor" stroke-width="1.5">
    <line x1="230" y1="34" x2="80" y2="84"/>
    <line x1="230" y1="34" x2="230" y2="84"/>
    <line x1="230" y1="34" x2="380" y2="84"/>
    <line x1="80" y1="106" x2="35" y2="160"/><line x1="80" y1="106" x2="80" y2="160"/><line x1="80" y1="106" x2="125" y2="160"/>
    <line x1="230" y1="106" x2="185" y2="160"/><line x1="230" y1="106" x2="230" y2="160"/><line x1="230" y1="106" x2="275" y2="160"/>
    <line x1="380" y1="106" x2="335" y2="160"/><line x1="380" y1="106" x2="380" y2="160"/><line x1="380" y1="106" x2="425" y2="160"/>
  </g>
  <g stroke="currentColor" stroke-width="1.2">
    <rect x="160" y="10" width="140" height="24" rx="6" fill="#9cc9ea"/>
    <rect x="40" y="84" width="80" height="22" rx="6" fill="#eea66f"/>
    <rect x="190" y="84" width="80" height="22" rx="6" fill="#eea66f"/>
    <rect x="340" y="84" width="80" height="22" rx="6" fill="#eea66f"/>
  </g>
  <g stroke="currentColor" stroke-width="1.2" fill="#7ccf9a">
    <circle cx="35" cy="172" r="12"/><circle cx="80" cy="172" r="12"/><circle cx="125" cy="172" r="12"/>
    <circle cx="185" cy="172" r="12"/><circle cx="230" cy="172" r="12"/><circle cx="275" cy="172" r="12"/>
    <circle cx="335" cy="172" r="12"/><circle cx="380" cy="172" r="12"/><circle cx="425" cy="172" r="12"/>
  </g>
  <g font-size="13" text-anchor="middle" fill="currentColor">
    <text x="230" y="27">1 2 3 vs 4 5 6</text>
    <text x="80" y="100">1 vs 2</text>
    <text x="230" y="100">7 vs 8</text>
    <text x="380" y="100">4 vs 5</text>
    <text x="35" y="177">1</text><text x="80" y="177">3</text><text x="125" y="177">2</text>
    <text x="185" y="177">7</text><text x="230" y="177">9</text><text x="275" y="177">8</text>
    <text x="335" y="177">4</text><text x="380" y="177">6</text><text x="425" y="177">5</text>
  </g>
  <g font-size="11" text-anchor="middle" fill="currentColor">
    <text x="128" y="55">left down</text>
    <text x="252" y="64">level</text>
    <text x="332" y="55">right down</text>
  </g>
</svg>
</div>

In each lower group the three branches mean, from left to right: left pan down, level, right pan down.

### Why 4 against 4 does not always work

Put coins 1 to 4 on the left and 5 to 8 on the right, leaving coin 9 off.

- If they balance, the fake is coin 9. Lucky: done in one weighing.
- But if the left goes down, the fake is one of **four** coins: 1, 2, 3, 4. With one weighing left, you can only
  split into three groups (left pan, right pan, off). Four coins into three groups means some group has two coins, and
  if the fake is in that group, you cannot tell which of the two it is.

For example, weigh 1 against 2 with 3 and 4 off. If they balance, the fake is 3 **or** 4, and you have no weighings
left. So 4 against 4 can fail. The 3, 3, 3 split never fails.

### Why 9 is the most for two weighings

Each weighing has 3 possible results. Two weighings in a row give $3 \times 3 = 9$ possible **result pairs**: (left,
left), (left, level), (left, right), (level, left), and so on. Each result pair leads to exactly one answer at the
bottom of the tree.

Now suppose you had **10** coins. There are 10 possible answers (the fake could be any of them), but only 9 result
pairs. So at least two different coins would have to share the same result pair, and then when you see that pair, you
could not tell those two coins apart. So **no plan at all** can always find the fake among 10 coins in two weighings.
Not "we have not found a clever plan yet": it is impossible. (This kind of reason, "more answers than boxes to put them
in", is the **pigeonhole principle**, in [Counting](../../counting/level-4/06-pigeonhole-principle.md).)

The same reasoning for more weighings:

| Weighings | Result lists | Most coins you can always solve |
| --- | --- | --- |
| 1 | 3 | 3 |
| 2 | $3 \times 3 = 9$ | 9 |
| 3 | $3 \times 3 \times 3 = 27$ | 27 |
| 4 | $3 \times 3 \times 3 \times 3 = 81$ | 81 |

Each extra weighing lets you handle three times as many coins.

### Why not split into halves?

If you only ever put coins on the pans and never leave any off, each weighing can only split the coins into **two**
groups. Then 2 weighings handle only $2 \times 2 = 4$ coins. By using the "off the balance" pile, splitting into
threes, you handle 9. Ignoring the "balance" answer throws away a whole third of what the balance can tell you.

## Worked examples

**1. Three coins, one weighing.** Weigh coin 1 against coin 2. Left down: 1 is fake. Right down: 2 is fake. Balance:
3 is fake.

**2. Eight coins, two weighings.** Split 3, 3, 2: weigh 1, 2, 3 against 4, 5, 6, with 7 and 8 off.

- Left down: the fake is among 1, 2, 3. Weigh 1 against 2 as before.
- Right down: among 4, 5, 6. Weigh 4 against 5.
- Balance: the fake is 7 or 8. Weigh 7 against 8; the heavier one is fake. (They cannot balance, because one of them
  is the fake.)

**3. Twenty-seven coins, three weighings.** Split into three piles of 9. Weigh pile A against pile B. The heavier pile,
or pile C if they balance, has the fake. Now you have 9 coins and two weighings left: use the plan from this lesson.
Three weighings in all.

**4. A lighter fake.** If the fake is **lighter**, the same plan works, but read it the other way: the side that goes
**up** has the fake.

## Try it

1. You have 3 coins and one heavier fake. How many weighings do you need? Describe the plan.
2. You have 6 coins and one heavier fake. Find a plan with two weighings.
3. With 27 coins, Tom first weighs 13 against 13, leaving one off. Explain why this is a poor first weighing.
4. How many weighings do you need for 81 coins? Explain the plan in one or two sentences.
5. You have 10 coins. Explain why two weighings can never be enough, but three are.
6. What is the fewest number of weighings that always finds the heavy fake among 100 coins? Explain.
7. You have 9 coins and the fake is **lighter**. In the first weighing, coins 1, 2, 3 go up (the left side is
   lighter). What do you do next?
8. On Mars, gravity pulls everything with only about 38 percent of its pull on Earth. Would the 9-coin plan still work
   with a balance on Mars? Would a bathroom scale (a spring scale) read the same as on Earth?

??? note "Answers"
    1. **One.** Weigh coin 1 against coin 2. Left down: 1. Right down: 2. Balance: 3.
    2. Split 2, 2, 2. Weigh 1, 2 against 3, 4. Left down: weigh 1 against 2. Right down: weigh 3 against 4. Balance:
       weigh 5 against 6. In each case the heavier one is fake (the second weighing cannot balance, because one of the
       two is the fake).
    3. If the pans tip, the fake is among 13 coins, and only two weighings are left. Two weighings can handle at most 9
       coins, so Tom may fail. (If they balance he is lucky: the one coin off is the fake.) A good first weighing is
       9 against 9 with 9 off.
    4. **Four.** Split 81 into three piles of 27 and weigh two of them: that finds the pile of 27 with the fake. Then
       27 needs three more weighings (worked example 3). One plus three is four.
    5. Two weighings have only $3 \times 3 = 9$ possible result pairs, but there are 10 coins that could be fake, so two
       coins would share a result pair and could not be told apart. Three weighings work: split 3, 3, 4. Weigh 3
       against 3. If one side goes down, the fake is among those 3, and one more weighing finds it (two in all). If
       they balance, the fake is among the 4 off. Weigh 1 against 1 of those four: if it tips, done; if it balances,
       weigh the last two against each other. That is three weighings at most.
    6. **Five.** Four weighings handle at most 81 coins, and $81 < 100$, so four is not enough. Five weighings handle
       up to $81 \times 3 = 243$ coins, and $100 \le 243$. A plan: split 100 into 34, 33, 33. Weigh 33 against 33. If
       one side goes down, the fake is among 33; if they balance, among the 34 off. Either way it is in a pile of at
       most 34, and 34 is at most 81, so four more weighings finish (split into piles of up to 12, then up to 4, then
       up to 2, then 1). Five in all.
    7. The lighter side has the fake, so it is among **1, 2, 3**. Weigh 1 against 2. The side that goes **up** is the
       fake; if they balance, coin 3 is.
    8. **The balance plan works the same.** Both pans are pulled down by the same weaker gravity, so the heavier side
       still goes down. A balance compares the two sides, and that comparison does not depend on how strong gravity
       is. A spring scale is different: it measures how hard gravity pulls, so on Mars it would read only about 38
       percent of the Earth reading.

## Common mistake

**Forgetting the third answer.** A balance does not only say "left" or "right". "Level" is an answer too, and it
tells you the fake is in the pile you left off. Plans that put every coin on the pans waste it.

**Making piles of different sizes on the two pans.** If you weigh 3 coins against 4, the side with 4 may go down just
because it has more coins, real or not. You learn nothing. The two pans must always hold the **same number** of coins.

## Where it leads

- Back: [9-by-9 Sudoku moves](05-sudoku-moves.md) · Next: [Level 4: statements and truth tables](../level-4/index.md).
- [Level 3 page](index.md) · [Logic topic page](../index.md)
- Multiplying 3 by itself again and again makes powers: $3, 9, 27, 81, 243$. More in [Numbers](../../numbers/index.md)
  and [Patterns](../../patterns/index.md).
- A famous harder puzzle: 12 coins, one fake, but you do **not** know if it is heavier or lighter, and you have three
  weighings. It can be done, and the same counting of results helps explain why.
- Halving instead of splitting in three is the idea behind **binary search** ("guess my number"), in
  [level 6](../level-6/index.md).
