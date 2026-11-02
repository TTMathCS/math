---
title: "River crossing"
---

# River crossing

*Logic and puzzles · level 2, lesson 5 of 6*

## A question to start

A farmer has a wolf, a goat and a cabbage. They are all on the left bank of a river, and they all need to get to the
right bank. There is a little boat, but it is so small that it holds the farmer and only **one** other thing.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 520 70" role="img" aria-label="A river. On the left bank: the farmer, the wolf, the goat and the cabbage, with a small boat. The right bank is empty.">
  <rect x="232" y="20" width="98" height="40" fill="#9cc9ea" fill-opacity="0.35"/>
  <rect x="172" y="27" width="52" height="26" rx="6" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <text x="198" y="43.85" font-size="11" text-anchor="middle" fill="currentColor">cabbage</text>
  <rect x="116" y="27" width="52" height="26" rx="6" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <text x="142" y="43.85" font-size="11" text-anchor="middle" fill="currentColor">goat</text>
  <rect x="60" y="27" width="52" height="26" rx="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="86" y="43.85" font-size="11" text-anchor="middle" fill="currentColor">wolf</text>
  <rect x="4" y="27" width="52" height="26" rx="6" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="30" y="43.85" font-size="11" text-anchor="middle" fill="currentColor">farmer</text>
  <path d="M 242 40 L 282 40 L 272 54 L 252 54 Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <text x="120" y="12" font-size="12" text-anchor="middle" fill="currentColor">left bank</text>
  <text x="281" y="12" font-size="12" text-anchor="middle" fill="currentColor">river</text>
  <text x="420" y="12" font-size="12" text-anchor="middle" fill="currentColor">right bank</text>
</svg>
</div>

There is a problem. If the farmer leaves the **wolf and the goat** alone together, the wolf eats the goat. If he leaves
the **goat and the cabbage** alone together, the goat eats the cabbage. (The wolf does not eat cabbage.) When the
farmer is there, everyone behaves.

How can the farmer get everyone across, safely? Try it with three coins or scraps of paper before you read on. Most
people get stuck the first time. The trick is something people forget they are allowed to do.

This puzzle is very old. One of the oldest written versions is in a collection of puzzles linked to Alcuin of York, a
teacher who lived about 1200 years ago.

## The idea

### Writing down the rules

A puzzle like this is all about **rules**. Before trying anything, write them down clearly.

1. The boat needs the farmer to row it. It never crosses by itself.
2. The boat holds the farmer and **at most one** other thing.
3. **Wolf and goat** must never be on a bank together without the farmer.
4. **Goat and cabbage** must never be on a bank together without the farmer.
5. Wolf and cabbage together are fine.

Notice that the **goat** is in both dangerous pairs. The goat is the troublemaker: it is either eaten or eating. That
is a clue.

### The first trip: try every choice

On the very first trip, the farmer has four choices. Let us check each one, by looking at what is left behind on the
left bank.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 160" role="img" aria-label="The four choices for the first trip. Take the wolf: goat and cabbage left behind, bad. Take the cabbage: wolf and goat left behind, bad. Go alone: all three left behind, bad. Take the goat: wolf and cabbage left behind, safe.">
  <rect x="10" y="14" width="140" height="28" rx="6" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="80" y="32.2" font-size="12" text-anchor="middle" fill="currentColor">take the wolf</text>
  <text x="165" y="33" font-size="13" text-anchor="start" fill="currentColor">goat and cabbage left behind</text>
  <text x="395" y="34" font-size="18" text-anchor="middle" fill="currentColor">✗</text>
  <rect x="10" y="50" width="140" height="28" rx="6" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="80" y="68.2" font-size="12" text-anchor="middle" fill="currentColor">take the cabbage</text>
  <text x="165" y="69" font-size="13" text-anchor="start" fill="currentColor">wolf and goat left behind</text>
  <text x="395" y="70" font-size="18" text-anchor="middle" fill="currentColor">✗</text>
  <rect x="10" y="86" width="140" height="28" rx="6" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="80" y="104.2" font-size="12" text-anchor="middle" fill="currentColor">go alone</text>
  <text x="165" y="105" font-size="13" text-anchor="start" fill="currentColor">all three left behind</text>
  <text x="395" y="106" font-size="18" text-anchor="middle" fill="currentColor">✗</text>
  <rect x="10" y="122" width="140" height="28" rx="6" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <text x="80" y="140.2" font-size="12" text-anchor="middle" fill="currentColor">take the goat</text>
  <text x="165" y="141" font-size="13" text-anchor="start" fill="currentColor">wolf and cabbage left behind</text>
  <text x="395" y="142" font-size="18" text-anchor="middle" fill="currentColor">✓</text>
</svg>
</div>

- Take the **wolf**: goat and cabbage are left alone. The goat eats the cabbage. ✗
- Take the **cabbage**: wolf and goat are left alone. The wolf eats the goat. ✗
- Go **alone**: all three are left. Disaster. ✗
- Take the **goat**: wolf and cabbage are left. That is safe. ✓

So the first trip **must** be the goat. We did not guess: we tried every choice and only one survived. This is the
same as the clue riddles from level 1: cross out what cannot work.

### The trick: going back is allowed

After the goat is across, the farmer rows back alone (that is safe: the goat is alone on the right, and the wolf and
cabbage are fine together on the left). Now he takes, say, the cabbage across.

Now there is a problem. If he rows back alone, the goat and the cabbage are left together on the right bank. ✗

Most people get stuck here. The trick: the farmer can **take something back with him**. He brings the **goat back** to
the left bank! That feels like going backwards. But it is the key to the whole puzzle.

### The whole answer, trip by trip

Here is every trip. After each one, check both banks: is any dangerous pair left without the farmer?

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 522 410" role="img" aria-label="The seven trips, one row each, numbered 1 to 7 under a first row with no number for the start. Start: everyone left. Trip 1: farmer and goat right. Trip 2: farmer back left. Trip 3: farmer and cabbage right. Trip 4: farmer and goat back left. Trip 5: farmer and wolf right. Trip 6: farmer back left. Trip 7: farmer and goat right; everyone is across.">
  <text x="130" y="14" font-size="12" text-anchor="middle" fill="currentColor">left bank</text>
  <text x="266" y="14" font-size="12" text-anchor="middle" fill="currentColor">river</text>
  <text x="400" y="14" font-size="12" text-anchor="middle" fill="currentColor">right bank</text>
  <rect x="232" y="24" width="68" height="40" fill="#9cc9ea" fill-opacity="0.35"/>
  <rect x="176" y="31" width="48" height="26" rx="6" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <text x="200" y="47.85" font-size="11" text-anchor="middle" fill="currentColor">cabbage</text>
  <rect x="124" y="31" width="48" height="26" rx="6" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <text x="148" y="47.85" font-size="11" text-anchor="middle" fill="currentColor">goat</text>
  <rect x="72" y="31" width="48" height="26" rx="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="96" y="47.85" font-size="11" text-anchor="middle" fill="currentColor">wolf</text>
  <rect x="20" y="31" width="48" height="26" rx="6" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="44" y="47.85" font-size="11" text-anchor="middle" fill="currentColor">farmer</text>
  <path d="M 242 44 L 282 44 L 272 58 L 252 58 Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <rect x="232" y="70" width="68" height="40" fill="#9cc9ea" fill-opacity="0.35"/>
  <text x="8" y="94" font-size="12" text-anchor="start" fill="currentColor">1</text>
  <rect x="176" y="77" width="48" height="26" rx="6" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <text x="200" y="93.85" font-size="11" text-anchor="middle" fill="currentColor">cabbage</text>
  <rect x="124" y="77" width="48" height="26" rx="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="148" y="93.85" font-size="11" text-anchor="middle" fill="currentColor">wolf</text>
  <rect x="308" y="77" width="48" height="26" rx="6" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="332" y="93.85" font-size="11" text-anchor="middle" fill="currentColor">farmer</text>
  <rect x="360" y="77" width="48" height="26" rx="6" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <text x="384" y="93.85" font-size="11" text-anchor="middle" fill="currentColor">goat</text>
  <path d="M 250 90 L 290 90 L 280 104 L 260 104 Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <rect x="232" y="116" width="68" height="40" fill="#9cc9ea" fill-opacity="0.35"/>
  <text x="8" y="140" font-size="12" text-anchor="start" fill="currentColor">2</text>
  <rect x="176" y="123" width="48" height="26" rx="6" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <text x="200" y="139.85" font-size="11" text-anchor="middle" fill="currentColor">cabbage</text>
  <rect x="124" y="123" width="48" height="26" rx="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="148" y="139.85" font-size="11" text-anchor="middle" fill="currentColor">wolf</text>
  <rect x="72" y="123" width="48" height="26" rx="6" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="96" y="139.85" font-size="11" text-anchor="middle" fill="currentColor">farmer</text>
  <rect x="308" y="123" width="48" height="26" rx="6" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <text x="332" y="139.85" font-size="11" text-anchor="middle" fill="currentColor">goat</text>
  <path d="M 242 136 L 282 136 L 272 150 L 252 150 Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <rect x="232" y="162" width="68" height="40" fill="#9cc9ea" fill-opacity="0.35"/>
  <text x="8" y="186" font-size="12" text-anchor="start" fill="currentColor">3</text>
  <rect x="176" y="169" width="48" height="26" rx="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="200" y="185.85" font-size="11" text-anchor="middle" fill="currentColor">wolf</text>
  <rect x="308" y="169" width="48" height="26" rx="6" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="332" y="185.85" font-size="11" text-anchor="middle" fill="currentColor">farmer</text>
  <rect x="360" y="169" width="48" height="26" rx="6" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <text x="384" y="185.85" font-size="11" text-anchor="middle" fill="currentColor">goat</text>
  <rect x="412" y="169" width="48" height="26" rx="6" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <text x="436" y="185.85" font-size="11" text-anchor="middle" fill="currentColor">cabbage</text>
  <path d="M 250 182 L 290 182 L 280 196 L 260 196 Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <rect x="232" y="208" width="68" height="40" fill="#9cc9ea" fill-opacity="0.35"/>
  <text x="8" y="232" font-size="12" text-anchor="start" fill="currentColor">4</text>
  <rect x="176" y="215" width="48" height="26" rx="6" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <text x="200" y="231.85" font-size="11" text-anchor="middle" fill="currentColor">goat</text>
  <rect x="124" y="215" width="48" height="26" rx="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="148" y="231.85" font-size="11" text-anchor="middle" fill="currentColor">wolf</text>
  <rect x="72" y="215" width="48" height="26" rx="6" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="96" y="231.85" font-size="11" text-anchor="middle" fill="currentColor">farmer</text>
  <rect x="308" y="215" width="48" height="26" rx="6" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <text x="332" y="231.85" font-size="11" text-anchor="middle" fill="currentColor">cabbage</text>
  <path d="M 242 228 L 282 228 L 272 242 L 252 242 Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <rect x="232" y="254" width="68" height="40" fill="#9cc9ea" fill-opacity="0.35"/>
  <text x="8" y="278" font-size="12" text-anchor="start" fill="currentColor">5</text>
  <rect x="176" y="261" width="48" height="26" rx="6" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <text x="200" y="277.85" font-size="11" text-anchor="middle" fill="currentColor">goat</text>
  <rect x="308" y="261" width="48" height="26" rx="6" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="332" y="277.85" font-size="11" text-anchor="middle" fill="currentColor">farmer</text>
  <rect x="360" y="261" width="48" height="26" rx="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="384" y="277.85" font-size="11" text-anchor="middle" fill="currentColor">wolf</text>
  <rect x="412" y="261" width="48" height="26" rx="6" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <text x="436" y="277.85" font-size="11" text-anchor="middle" fill="currentColor">cabbage</text>
  <path d="M 250 274 L 290 274 L 280 288 L 260 288 Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <rect x="232" y="300" width="68" height="40" fill="#9cc9ea" fill-opacity="0.35"/>
  <text x="8" y="324" font-size="12" text-anchor="start" fill="currentColor">6</text>
  <rect x="176" y="307" width="48" height="26" rx="6" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <text x="200" y="323.85" font-size="11" text-anchor="middle" fill="currentColor">goat</text>
  <rect x="124" y="307" width="48" height="26" rx="6" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="148" y="323.85" font-size="11" text-anchor="middle" fill="currentColor">farmer</text>
  <rect x="308" y="307" width="48" height="26" rx="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="332" y="323.85" font-size="11" text-anchor="middle" fill="currentColor">wolf</text>
  <rect x="360" y="307" width="48" height="26" rx="6" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <text x="384" y="323.85" font-size="11" text-anchor="middle" fill="currentColor">cabbage</text>
  <path d="M 242 320 L 282 320 L 272 334 L 252 334 Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <rect x="232" y="346" width="68" height="40" fill="#9cc9ea" fill-opacity="0.35"/>
  <text x="8" y="370" font-size="12" text-anchor="start" fill="currentColor">7</text>
  <rect x="308" y="353" width="48" height="26" rx="6" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="332" y="369.85" font-size="11" text-anchor="middle" fill="currentColor">farmer</text>
  <rect x="360" y="353" width="48" height="26" rx="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="384" y="369.85" font-size="11" text-anchor="middle" fill="currentColor">wolf</text>
  <rect x="412" y="353" width="48" height="26" rx="6" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <text x="436" y="369.85" font-size="11" text-anchor="middle" fill="currentColor">goat</text>
  <rect x="464" y="353" width="48" height="26" rx="6" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <text x="488" y="369.85" font-size="11" text-anchor="middle" fill="currentColor">cabbage</text>
  <path d="M 250 366 L 290 366 L 280 380 L 260 380 Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <text x="8" y="14" font-size="11" text-anchor="start" fill="currentColor">trip</text>
</svg>
</div>

| Trip | Boat carries | Left bank | Right bank |
| --- | --- | --- | --- |
| start | | farmer, wolf, goat, cabbage | |
| 1 → | farmer and goat | wolf, cabbage | farmer, goat |
| 2 ← | farmer alone | farmer, wolf, cabbage | goat |
| 3 → | farmer and cabbage | wolf | farmer, goat, cabbage |
| 4 ← | farmer and **goat** | farmer, wolf, goat | cabbage |
| 5 → | farmer and wolf | goat | farmer, wolf, cabbage |
| 6 ← | farmer alone | farmer, goat | wolf, cabbage |
| 7 → | farmer and goat | | farmer, wolf, goat, cabbage |

Check the dangerous moments. After trip 3, goat and cabbage are together on the right, but the farmer is there. ✓
After trip 5, the goat is alone on the left, and the wolf and cabbage are together on the right with the farmer. ✓
After trip 6, wolf and cabbage are alone together, and that is allowed. ✓

**Seven trips**, and everyone is safe.

### A second answer

At trip 3 the farmer took the cabbage. He could have taken the **wolf** instead! Then: trip 4 brings the goat back,
trip 5 takes the cabbage, trip 6 the farmer comes back alone, trip 7 takes the goat. That also works. The two answers
are mirror images: the wolf and the cabbage swap jobs. That makes sense, because they play the same part in the
puzzle: each is dangerous only with the goat.

### Why it cannot be done in fewer than 7 trips

Every trip **to the right** carries at most one thing. Three things must get to the right, so that is at least 3 trips
right. But we saw the goat must go first, and then the next thing to go over cannot be left with the goat, so the goat
has to come **back** and cross a second time. So the trips to the right carry: goat, one thing, the other thing, and
the goat again. That is **4 trips right**.

Between two trips to the right, the farmer must row back to the left, so there are **3 trips left** in between. 4 and 3
make **7**. No answer can be shorter.

### How to solve a crossing puzzle

1. Write the rules, especially what cannot be left together.
2. At each step, list the choices: who goes in the boat?
3. For each choice, check both banks. Cross out choices that break a rule.
4. Remember that **bringing something back** is a choice too.
5. If you reach a dead end, go back to an earlier step and try a different choice.
6. Keep a table, so you do not go round in circles.

## Worked examples

**Example 1. The grown-up and two children.** A grown-up and two children need to cross a river. The boat holds **one
grown-up, or one or two children**, but not a grown-up and a child together. Everyone can row. How do they all cross?

1. If the grown-up goes first, someone has to bring the boat back, and the grown-up is the only one on the right. He
   comes straight back. That gets nowhere.
2. So send **both children** first (trip 1).
3. **One child** brings the boat back (trip 2).
4. Now the **grown-up** crosses alone (trip 3). The other child is waiting on the right, with the boat now on the right.
5. That child brings the boat back (trip 4).
6. **Both children** cross together (trip 5).

**5 trips.** The children act as the boat's "taxi": every time the grown-up crosses, a child must bring the boat back.

**Example 2. Two grown-ups and two children.** Same boat. Repeat the pattern.

1. Trips 1 to 4 are exactly as in Example 1, and the first grown-up crosses. Where are the children now? After trip 2
   one child is on the left; after trip 4 the other child has rowed back too. So **both** children and the boat are on
   the left again, just like at the start.
2. The first grown-up is now on the right. Do the same four trips again for the second grown-up: children cross, one
   child back, grown-up crosses, other child back (trips 5 to 8).
3. Both children cross (trip 9).

**9 trips.** Each grown-up costs 4 trips, and the final trip brings the children. The key check was step 1: the
children end up back where they began, so the same four trips can be used again.

**Example 3. A bigger boat.** Back to the farmer, but now the boat holds the farmer and **two** things.

1. Take the **wolf and the cabbage** (trip 1). The goat is left alone on the left: safe.
2. Come back alone (trip 2). The wolf and cabbage are together on the right: safe.
3. Take the goat (trip 3).

**3 trips.** A bigger boat changes everything. The rules of a puzzle decide how hard it is.

## Try it

1. Explain why the farmer cannot take the wolf on the first trip.
2. In the 7-trip answer, what goes wrong if the farmer **does not** bring the goat back at trip 4?
3. Write out the second answer (the one where the wolf crosses at trip 3), trip by trip.
4. A girl must take a **fox**, a **chicken** and a bag of **corn** across a river, with a boat that holds her and one
   thing. The fox eats the chicken, and the chicken eats the corn. How is this the same as the farmer's puzzle?
5. What if the wolf ate the cabbage too? (So **every** pair is dangerous.) Can the farmer still do it with the small
   boat? Explain.
6. Three grown-ups and two children, with the same boat as Example 1. How many trips? Can you see a pattern for 1, 2, 3
   grown-ups?
7. Why does the farmer never need to take the wolf **back** to the left bank?

??? note "Answers"
    1. If he takes the wolf, the goat and the cabbage are left together on the left bank without him, and the goat eats
       the cabbage.
    2. He has just put the cabbage (or the wolf) on the right bank with the goat. If he rows back alone, the goat and
       that thing are left together, and something gets eaten. Rowing back with the goat is the only safe choice.
    3. Trip 1: farmer takes the goat over. Trip 2: farmer comes back alone. Trip 3: farmer takes the **wolf** over.
       Trip 4: farmer brings the **goat back**. Trip 5: farmer takes the **cabbage** over. Trip 6: farmer comes back
       alone (wolf and cabbage are safe together). Trip 7: farmer takes the goat over. 7 trips.
    4. The fox plays the wolf, the chicken plays the goat, and the corn plays the cabbage. The dangerous pairs are the
       same shape: the chicken is in both. So the same answer works: chicken over, back alone, fox over, chicken back,
       corn over, back alone, chicken over. 7 trips.
    5. **No.** On the first trip he can take only one thing, so **two** things are left behind on the left bank, and
       every pair is dangerous. Something is always eaten. (Going alone leaves three, which is worse.) There is no safe
       first trip, so it cannot be done.
    6. Each grown-up needs 4 trips (children cross, one child back, grown-up crosses, other child back), and then 1
       last trip for the children. 1 grown-up: 4 and 1 make **5**. 2 grown-ups: 8 and 1 make **9**. 3 grown-ups: 12
       and 1 make **13**. The pattern goes up by **4** for each extra grown-up.
    7. Taking something back is only useful to stop it being left with the goat. The wolf on the right bank is only in
       danger with the goat, and the farmer can always take the goat back instead. Bringing the goat back fixes the
       problem, because the goat is the troublemaker.

## Common mistake

**Thinking the boat must always carry something forward.** People try only moves that take things to the right bank,
and they get stuck after trip 3. The rules never say you cannot bring something back. Read the rules for what they
**say**, not for what you expect.

**Checking only one bank.** After each trip, check **both** banks. A trip can make the side you left safe and the side
you arrived at dangerous, or the other way round.

## Where it leads

- Previous lesson: [Coding with steps](04-coding-with-steps.md). Next lesson: [Logic grid puzzles](06-logic-grids.md).
- This level: [Level 2: Rules and puzzles](index.md). The whole topic: [Logic and puzzles](../index.md).
- Keeping a careful list of every choice is how you count all the ways to do something: [Being organised](../../counting/level-1/06-being-organised.md)
  in Counting.
- Going back to an earlier step and trying another choice is a real method that computers use to solve puzzles, like
  Sudoku: [4-by-4 Sudoku](03-four-by-four-sudoku.md).
- The grown-ups pattern (5, 9, 13, going up by 4) is a growing pattern: [Rules in words](../../patterns/level-2/01-rules-in-words.md)
  in Patterns.
- In level 4 you will work backwards from the end to win games: [Level 4](../level-4/index.md).
