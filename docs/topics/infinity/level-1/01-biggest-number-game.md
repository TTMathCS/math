---
title: "The biggest number game"
---

# The biggest number game

*Infinity and strange math · level 1, lesson 1 of 6*

## A question to start

Sam and Lea play a game. Each one says a number. **The biggest number wins.**

Sam goes first. He thinks hard and says: "One hundred!"

Lea smiles. "One hundred and one!"

Sam tries again: "A thousand!"

"A thousand and one!" says Lea.

Sam is cross. "A million!" Lea does not even stop to think: "A million and one!"

Is Lea a magic number-finder? Can Sam **ever** win, if Lea goes second? Is there a number so big that nobody can
beat it? Think about it before you read on.

## The idea

### Counting on

When you count, you say the numbers in order: 1, 2, 3, 4, 5, ... Each number is **one more** than the number before
it. After 5 comes 6. After 6 comes 7. After 99 comes 100.

We can show this with a tower of blocks. Each new tower has **one more** block than the tower before.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 150" role="img" aria-label="Five towers of blocks with 1, 2, 3, 4 and 5 blocks, then three dots">
  <rect x="20" y="105" width="30" height="20" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="80" y="105" width="30" height="20" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <rect x="80" y="85" width="30" height="20" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <rect x="140" y="105" width="30" height="20" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <rect x="140" y="85" width="30" height="20" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <rect x="140" y="65" width="30" height="20" fill="#7ccf9a" stroke="currentColor" stroke-width="2"/>
  <rect x="200" y="105" width="30" height="20" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="200" y="85" width="30" height="20" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="200" y="65" width="30" height="20" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="200" y="45" width="30" height="20" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <rect x="260" y="105" width="30" height="20" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <rect x="260" y="85" width="30" height="20" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <rect x="260" y="65" width="30" height="20" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <rect x="260" y="45" width="30" height="20" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <rect x="260" y="25" width="30" height="20" fill="#9cc9ea" stroke="currentColor" stroke-width="2"/>
  <text x="330" y="100" font-size="26" text-anchor="middle" fill="currentColor">...</text>
  <g font-size="14" text-anchor="middle" fill="currentColor">
    <text x="35" y="143">1</text><text x="95" y="143">2</text><text x="155" y="143">3</text>
    <text x="215" y="143">4</text><text x="275" y="143">5</text>
  </g>
</svg>
</div>

Can you always build the next tower? Yes! Take the last tower and put **one more** block on top. That is all you
need to do. You never run out of next towers.

### The "one more" trick

Now go back to Sam and Lea. Lea has a secret trick. Whatever number Sam says, Lea says **that number and one more**.

- Sam says 100. One more is 101.
- Sam says 1000. One more is 1001.
- Sam says a million. One more is a million and one.

Lea does not need to know any special big numbers. She only needs to listen to Sam and add one. Her number is
**always** bigger, because one more is always bigger.

So, if Lea goes second and knows the trick, **Sam can never win**. And it is not because Sam is bad at the game.
Nobody could win, not even the cleverest person in the world, because whatever number they say, there is a bigger
one.

### There is no biggest number

Here is the big idea of this lesson, said slowly.

> **There is no biggest number.** Whatever number you think of, add one, and you get a bigger number.

How can we be so sure? We did not try every number. There are too many to try! But we did not need to. The trick
works for **every** number at once. Pick any number at all. Put one more block on its tower. The new tower is
taller. So the number you picked was not the biggest. That is true for every number anyone could ever pick.

Mathematicians love reasons like this one. A reason that works for every number at once, without trying them all, is
the start of what grown-up mathematicians call a **proof**.

### The number line goes on and on

Here is a **number line**. The numbers sit on it in order, with the same space between each one and the next.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 70" role="img" aria-label="A number line from 0 to 10 with an arrow at the right end showing it keeps going">
  <line x1="20" y1="30" x2="355" y2="30" stroke="currentColor" stroke-width="2"/>
  <polygon points="365,30 352,23 352,37" fill="currentColor"/>
  <g stroke="currentColor" stroke-width="2">
    <line x1="25" y1="22" x2="25" y2="38"/><line x1="55" y1="22" x2="55" y2="38"/><line x1="85" y1="22" x2="85" y2="38"/>
    <line x1="115" y1="22" x2="115" y2="38"/><line x1="145" y1="22" x2="145" y2="38"/><line x1="175" y1="22" x2="175" y2="38"/>
    <line x1="205" y1="22" x2="205" y2="38"/><line x1="235" y1="22" x2="235" y2="38"/><line x1="265" y1="22" x2="265" y2="38"/>
    <line x1="295" y1="22" x2="295" y2="38"/><line x1="325" y1="22" x2="325" y2="38"/>
  </g>
  <g font-size="13" text-anchor="middle" fill="currentColor">
    <text x="25" y="56">0</text><text x="55" y="56">1</text><text x="85" y="56">2</text><text x="115" y="56">3</text>
    <text x="145" y="56">4</text><text x="175" y="56">5</text><text x="205" y="56">6</text><text x="235" y="56">7</text>
    <text x="265" y="56">8</text><text x="295" y="56">9</text><text x="325" y="56">10</text>
  </g>
</svg>
</div>

Look at the **arrow** at the end. The arrow means: *it keeps going*. The page is too small to show 11, 12, 13 and all
the numbers after them, so we draw an arrow instead. If you had a paper strip as long as a road, you could write more
numbers on it. But even a road ends somewhere, and the numbers do not.

### A special word: infinite

Something that goes on and on and **never stops** is called **infinite** (say "IN-fin-it"). The counting numbers are
infinite: there are always more of them.

The idea of going on forever has its own name too: **infinity** (say "in-FIN-it-ee"). Sometimes people draw infinity
with a sideways eight, like this: ∞. It looks like a loop you could run round and round without stopping.

### Infinity is not a number at the end

Here is a tricky part. Lots of children (and grown-ups!) think infinity is the **biggest number**, sitting at the very
end of the number line. But the number line **has no end**. There is no last stop.

Think of a train that stops at station 1, station 2, station 3, and so on. If someone asks "what is the last
station?", the true answer is: "There is no last station. The train always has a next stop." Infinity is not a last
station. Infinity is a way of saying **there is no last station**.

So in the biggest number game, shouting "infinity!" is not really playing. Infinity is not a number you can add one
to. It is the name for the fact that the game can never end.

### Counting sols on Mars

Here is a real place where counting keeps going. On Mars a day is called a **sol**, and it is a little longer than a
day on Earth. The rovers driving on Mars count their days in sols: sol 1, sol 2, sol 3, and so on. The rover called
Curiosity has counted past sol 4000. Each new day on Mars, the count goes up by one. The rover will stop one day, but
the numbers would never run out: there is always a next sol to count.

## Worked examples

**1. Beat the number.** Sam says "five hundred". What can Lea say to win?

Lea adds one. Five hundred and one more is **five hundred and one** (501). Lea wins. She could also say 502, or 600,
or 1000. Any bigger number wins. "One more" is just the easiest way to be sure.

**2. Can Sam win if he goes second?** Now Lea goes first and says "a thousand". Sam says "a thousand and one". Sam
wins! So the game is not fair. **The player who goes second can always win**, by adding one. The player who goes
first can never be safe, because no number is the biggest.

**3. Is there a biggest number of claps?** Mia claps 10 times. Her brother claps 11 times. Can someone always clap
more? Yes. Whatever number of claps someone does, the next person can do one more clap. (Their hands might get very
tired! But the **number** of claps can always be one more.) There is no biggest number of claps.

**4. Is there a smallest counting number?** The counting numbers start 1, 2, 3, ... Is there a smallest? **Yes**: it
is 1. You cannot go one step back from 1 and stay a counting number. So the counting numbers have a **start** but no
**end**. They go on forever in one direction only, like the number line with its arrow on one side.

**5. Two more each time.** Count by twos: 2, 4, 6, 8, 10, ... Is there a biggest number in this list? No. Whatever
number you reach, add two more and you get the next one in the list, and it is bigger. This list goes on forever too.

## Try it

1. Sam says "twenty". What number can Lea say to win, using the one more trick?
2. What number is one more than 99? What number is one more than 999?
3. Lea says "a million and one". Can Sam still win? How?
4. Is there a biggest number of steps you can walk? (Pretend you never get tired.)
5. Count by tens: 10, 20, 30, 40, ... What are the next three numbers? Does this list ever stop?
6. Tom says: "Infinity is the biggest number, so I win!" What would you tell Tom?
7. Is there a biggest number of grains of sand in a bucket? Careful: think about how big the bucket is.

??? note "Answers"
    1. **Twenty-one** (21), because 20 and one more is 21. Any bigger number would also win.
    2. One more than 99 is **100**. One more than 999 is **1000**. Every time you go past all 9s, a new place
       opens up, and you need one more digit to write the number.
    3. **Yes.** Sam says "a million and two". That is one more than Lea's number, so it is bigger.
    4. **No.** Whatever number of steps you have walked, you can take one more step. So no number of steps is the
       biggest.
    5. **50, 60, 70.** The list never stops: whatever number you reach, add ten more and you get the next one.
    6. Infinity is **not a number** at the end of the number line. It is a word for "it never ends". The number line
       has no end, so there is no biggest number, and "infinity" cannot win the game.
    7. Here the answer is different! A bucket is a real thing, and it can only hold so much sand. When it is full,
       you cannot squeeze in one more grain. So a bucket **does** have a biggest number of grains it can hold. We
       may not know that number, but it is there. Numbers go on forever, but things in a bucket do not. You will
       see more about this in [lesson 6](06-big-not-infinite.md).

## Common mistake

**Thinking infinity is the biggest number.** Infinity is not at the end of the number line, because the number line
has no end. If infinity were a number, you could add one to it, and it would not be the biggest any more. Infinity
means "**there is no end**", not "here is the end".

**Thinking a very big number is infinite.** A million is big. A billion is bigger. But each one is a real number, and
one more than it is even bigger. A number can be very, very big and still **not** be infinite.

## Where it leads

- Next lesson: [Halving a cookie](02-halving-cookie.md), where a cookie gets cut smaller and smaller forever.
- This level: [Level 1: Does it ever end?](index.md). The whole topic: [Infinity and strange math](../index.md).
- Learn to count and to write the next number in [Numbers: counting things](../../numbers/level-1/01-counting-things.md)
  and [Teens and beyond](../../numbers/level-1/06-teens-and-beyond.md).
- Counting by twos and tens is skip counting: see
  [Number theory: skip counting](../../number-theory/level-1/04-skip-counting.md).
- Towers that grow by one more each time are a growing pattern: see
  [Patterns: growing patterns](../../patterns/level-1/05-growing-patterns.md).
