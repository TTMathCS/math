---
title: "Searching and sorting"
---

# Searching and sorting

*Logic and puzzles · level 6, lesson 4 of 6*

## A question to start

I am thinking of a whole number from 1 to 1000. You guess, and after each guess I say "higher", "lower" or "got it".

How many guesses do you need, at most, if you play well? Most people expect something like 50 or 100. The answer is
**10**. Ten guesses are always enough for a thousand numbers, twenty for a million, and thirty for a billion.

And there is a second surprise: nine guesses are **not** always enough. By the end of this lesson you will know the
method, why it works, and why nobody can do better. Then you will use the same "split it in half" idea to sort a
deck of cards much faster than the obvious way.

## The idea

### Searching a list one by one

The simplest way to look for something in a list is to check the items in order, first to last, until you find it.
This is **linear search** ("in a line").

In the worst case (the item is last, or not there at all) you check every item: $n$ checks for a list of $n$. For a
list of 1000 names, up to 1000 checks. If the list is in **no particular order**, you cannot do better: any item you
skip might be the one you want.

### Binary search: halving

If the list is **sorted** (numbers in order, names in alphabetical order), you can do far better. Look at the
**middle** item. If it is too small, the target must be in the upper half; if it is too big, in the lower half.
Either way, one check throws away **half** of what is left. This is **binary search** ("binary" means "in two").

For the guessing game, the "list" is 1, 2, ..., 1000. Guess the middle, 500. If I say "higher", the number is in
501 to 1000: 500 numbers left. Guess the middle of those, and so on.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 175" role="img" aria-label="A bar from 1 to 1000 that halves at each guess: 1000, then 500, 250, 125 numbers left">
  <g stroke="currentColor">
    <rect x="20" y="15" width="400" height="22" fill="#9cc9ea"/>
    <rect x="220" y="55" width="200" height="22" fill="#9cc9ea"/>
    <rect x="220" y="95" width="100" height="22" fill="#9cc9ea"/>
    <rect x="270" y="135" width="50" height="22" fill="#9cc9ea"/>
  </g>
  <g stroke="#eea66f" stroke-width="4">
    <line x1="220" y1="11" x2="220" y2="41"/><line x1="320" y1="51" x2="320" y2="81"/><line x1="270" y1="91" x2="270" y2="121"/>
  </g>
  <g font-size="12" fill="currentColor">
    <text x="20" y="52">1</text><text x="400" y="52">1000</text>
    <text x="226" y="30">guess 500: higher</text>
    <text x="40" y="70">500 left</text><text x="326" y="70">guess 750: lower</text>
    <text x="40" y="110">250 left</text><text x="326" y="110">guess 625: higher</text>
    <text x="40" y="150">125 left</text><text x="326" y="150">and so on</text>
  </g>
</svg>
</div>

The numbers left after each wrong guess are at most

$$1000 \to 500 \to 250 \to 125 \to 62 \to 31 \to 15 \to 7 \to 3 \to 1.$$

After 9 wrong guesses only one number can be left, so the **10th** guess is certainly right. (When the number left
is odd, the middle guess leaves equal halves, like 125 becoming 62 and 62; when it is even, one side gets one more,
like 1000 becoming 499 below 500 and 500 above.)

### Why 10 is enough: powers of 2

Each guess halves the possibilities, so $k$ guesses can handle a range of about $2^k$ numbers:

| guesses $k$ | $2^k$ |
| --- | --- |
| 10 | 1,024 |
| 20 | 1,048,576 |
| 30 | 1,073,741,824 |

Since $2^{10} = 1024$ is more than 1000, ten guesses are enough. The number of guesses is how many times you can halve
$n$ before reaching 1. That number is called the **base 2 logarithm** of $n$, written $\log_2 n$
([Algebra level 8](../../algebra/level-8/04-logarithms.md)). It grows incredibly slowly: doubling the list adds just
**one** more guess.

### Why 9 is not enough

Could some clever player always win in 9? Think of all possible games as a tree. The first guess is one number: it is
right for **1** possible secret. If it is wrong, the answer "higher" or "lower" leads to two different second guesses,
so the second guess can be right for at most **2** more secrets. The third guess can be right for at most 4 more, and
so on, doubling. With 9 guesses, the secrets you can be sure to catch number at most

$$1 + 2 + 4 + 8 + 16 + 32 + 64 + 128 + 256 = 511.$$

That is fewer than 1000, so for some secret number 9 guesses fail. With 10 guesses the total is
$511 + 512 = 1023$, which covers 1000. So **10 is exactly the best possible**. (The sum $1 + 2 + \cdots + 2^{k-1}$
always equals $2^k - 1$: a [geometric sum](../../patterns/level-6/04-geometric-sums.md).)

### Sorting

Binary search only works on sorted lists. So how do we sort? **Sorting** means putting items in order, and the main
step we count is a **comparison** of two items.

### Bubble sort

**Bubble sort** walks along the list comparing **neighbours**, and swaps any pair in the wrong order. One walk along
the whole list is called a **pass**. Repeat passes until a pass makes no swaps.

Why does it work? In the first pass, the largest item is swapped forward every time it is compared, so it is carried
all the way to the end, like a bubble rising. After the second pass the second largest is in place, and so on: after
pass $k$, the $k$ largest items are in their final places. So after at most $n - 1$ passes, all are.

How much work? The first pass makes $n - 1$ comparisons, the second $n - 2$ (the last item is already placed), and so
on down to 1:

$$(n-1) + (n-2) + \cdots + 2 + 1 = \frac{n(n-1)}{2}.$$

(This is Gauss's trick: pair the first with the last, [Patterns level 5](../../patterns/level-5/03-gauss-trick.md).)
For 1000 items: $\frac{1000 \times 999}{2} = 499{,}500$ comparisons in the worst case. That is a lot.

### Merge sort: split, sort, merge

**Merge sort** uses the halving idea.

1. Split the list into two halves.
2. Sort each half (by the same method: split again, until pieces have one item, which is already sorted).
3. **Merge** the two sorted halves into one sorted list.

Merging is the clever part. Put two sorted piles face up side by side. The smallest card overall is on top of one of
the two piles, so compare the two top cards, take the smaller, and repeat. Each comparison places one card, so merging
piles with $m$ cards in total takes at most $m - 1$ comparisons.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 394 234" role="img" aria-label="Merge sort on 6, 2, 8, 4, 1, 7, 3, 5: single cards are merged into sorted pairs, then sorted fours, then one sorted list of eight">
  <rect x="12" y="12" width="34" height="30" fill="#eea66f" stroke="currentColor"/>
  <text x="29" y="32" font-size="14" text-anchor="middle" fill="currentColor">6</text>
  <rect x="60" y="12" width="34" height="30" fill="#eea66f" stroke="currentColor"/>
  <text x="77" y="32" font-size="14" text-anchor="middle" fill="currentColor">2</text>
  <rect x="108" y="12" width="34" height="30" fill="#eea66f" stroke="currentColor"/>
  <text x="125" y="32" font-size="14" text-anchor="middle" fill="currentColor">8</text>
  <rect x="156" y="12" width="34" height="30" fill="#eea66f" stroke="currentColor"/>
  <text x="173" y="32" font-size="14" text-anchor="middle" fill="currentColor">4</text>
  <rect x="204" y="12" width="34" height="30" fill="#eea66f" stroke="currentColor"/>
  <text x="221" y="32" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <rect x="252" y="12" width="34" height="30" fill="#eea66f" stroke="currentColor"/>
  <text x="269" y="32" font-size="14" text-anchor="middle" fill="currentColor">7</text>
  <rect x="300" y="12" width="34" height="30" fill="#eea66f" stroke="currentColor"/>
  <text x="317" y="32" font-size="14" text-anchor="middle" fill="currentColor">3</text>
  <rect x="348" y="12" width="34" height="30" fill="#eea66f" stroke="currentColor"/>
  <text x="365" y="32" font-size="14" text-anchor="middle" fill="currentColor">5</text>
  <rect x="40" y="72" width="34" height="30" fill="#9cc9ea" stroke="currentColor"/>
  <text x="57" y="92" font-size="14" text-anchor="middle" fill="currentColor">2</text>
  <rect x="74" y="72" width="34" height="30" fill="#9cc9ea" stroke="currentColor"/>
  <text x="91" y="92" font-size="14" text-anchor="middle" fill="currentColor">6</text>
  <rect x="122" y="72" width="34" height="30" fill="#9cc9ea" stroke="currentColor"/>
  <text x="139" y="92" font-size="14" text-anchor="middle" fill="currentColor">4</text>
  <rect x="156" y="72" width="34" height="30" fill="#9cc9ea" stroke="currentColor"/>
  <text x="173" y="92" font-size="14" text-anchor="middle" fill="currentColor">8</text>
  <rect x="204" y="72" width="34" height="30" fill="#9cc9ea" stroke="currentColor"/>
  <text x="221" y="92" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <rect x="238" y="72" width="34" height="30" fill="#9cc9ea" stroke="currentColor"/>
  <text x="255" y="92" font-size="14" text-anchor="middle" fill="currentColor">7</text>
  <rect x="286" y="72" width="34" height="30" fill="#9cc9ea" stroke="currentColor"/>
  <text x="303" y="92" font-size="14" text-anchor="middle" fill="currentColor">3</text>
  <rect x="320" y="72" width="34" height="30" fill="#9cc9ea" stroke="currentColor"/>
  <text x="337" y="92" font-size="14" text-anchor="middle" fill="currentColor">5</text>
  <rect x="54" y="132" width="34" height="30" fill="#7ccf9a" stroke="currentColor"/>
  <text x="71" y="152" font-size="14" text-anchor="middle" fill="currentColor">2</text>
  <rect x="88" y="132" width="34" height="30" fill="#7ccf9a" stroke="currentColor"/>
  <text x="105" y="152" font-size="14" text-anchor="middle" fill="currentColor">4</text>
  <rect x="122" y="132" width="34" height="30" fill="#7ccf9a" stroke="currentColor"/>
  <text x="139" y="152" font-size="14" text-anchor="middle" fill="currentColor">6</text>
  <rect x="156" y="132" width="34" height="30" fill="#7ccf9a" stroke="currentColor"/>
  <text x="173" y="152" font-size="14" text-anchor="middle" fill="currentColor">8</text>
  <rect x="204" y="132" width="34" height="30" fill="#7ccf9a" stroke="currentColor"/>
  <text x="221" y="152" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <rect x="238" y="132" width="34" height="30" fill="#7ccf9a" stroke="currentColor"/>
  <text x="255" y="152" font-size="14" text-anchor="middle" fill="currentColor">3</text>
  <rect x="272" y="132" width="34" height="30" fill="#7ccf9a" stroke="currentColor"/>
  <text x="289" y="152" font-size="14" text-anchor="middle" fill="currentColor">5</text>
  <rect x="306" y="132" width="34" height="30" fill="#7ccf9a" stroke="currentColor"/>
  <text x="323" y="152" font-size="14" text-anchor="middle" fill="currentColor">7</text>
  <rect x="61" y="192" width="34" height="30" fill="#eea66f" stroke="currentColor"/>
  <text x="78" y="212" font-size="14" text-anchor="middle" fill="currentColor">1</text>
  <rect x="95" y="192" width="34" height="30" fill="#eea66f" stroke="currentColor"/>
  <text x="112" y="212" font-size="14" text-anchor="middle" fill="currentColor">2</text>
  <rect x="129" y="192" width="34" height="30" fill="#eea66f" stroke="currentColor"/>
  <text x="146" y="212" font-size="14" text-anchor="middle" fill="currentColor">3</text>
  <rect x="163" y="192" width="34" height="30" fill="#eea66f" stroke="currentColor"/>
  <text x="180" y="212" font-size="14" text-anchor="middle" fill="currentColor">4</text>
  <rect x="197" y="192" width="34" height="30" fill="#eea66f" stroke="currentColor"/>
  <text x="214" y="212" font-size="14" text-anchor="middle" fill="currentColor">5</text>
  <rect x="231" y="192" width="34" height="30" fill="#eea66f" stroke="currentColor"/>
  <text x="248" y="212" font-size="14" text-anchor="middle" fill="currentColor">6</text>
  <rect x="265" y="192" width="34" height="30" fill="#eea66f" stroke="currentColor"/>
  <text x="282" y="212" font-size="14" text-anchor="middle" fill="currentColor">7</text>
  <rect x="299" y="192" width="34" height="30" fill="#eea66f" stroke="currentColor"/>
  <text x="316" y="212" font-size="14" text-anchor="middle" fill="currentColor">8</text>
</svg>
</div>

Read it from the top: eight single cards; merge neighbours into sorted pairs; merge pairs into sorted fours; merge the
fours into one sorted list. That took $4 + 6 + 7 = 17$ comparisons.

How much work? Each **row** of merging handles all $n$ items once, so it costs fewer than $n$ comparisons. And the
number of rows is the number of times you can halve $n$, about $\log_2 n$. So merge sort needs fewer than
$n \times \log_2 n$ comparisons. For 1000 items, $\log_2 1000$ is just under 10, so fewer than
$1000 \times 10 = 10{,}000$ comparisons, against bubble sort's 499,500. Fifty times less work, and the gap grows as
lists get longer: for a million items, about 20 million against about 500 billion.

## Worked examples

**1. A real game.** The secret is 700. Always guess the middle of what is left (rounding down).

| try | range left before | guess | answer |
| --- | --- | --- | --- |
| 1 | 1 to 1000 | 500 | higher |
| 2 | 501 to 1000 | 750 | lower |
| 3 | 501 to 749 | 625 | higher |
| 4 | 626 to 749 | 687 | higher |
| 5 | 688 to 749 | 718 | lower |
| 6 | 688 to 717 | 702 | lower |
| 7 | 688 to 701 | 694 | higher |
| 8 | 695 to 701 | 698 | higher |
| 9 | 699 to 701 | 700 | got it |

Nine guesses this time. The worst case is 10, never more.

**2. Bubble sort by hand.** Sort 5, 3, 8, 1, 4.

- Pass 1: (5, 3) swap; (5, 8) fine; (8, 1) swap; (8, 4) swap. Result 3, 5, 1, 4, **8**. The 8 has bubbled to the end.
- Pass 2: (3, 5) fine; (5, 1) swap; (5, 4) swap. Result 3, 1, 4, **5, 8**.
- Pass 3: (3, 1) swap; (3, 4) fine. Result 1, **3, 4, 5, 8**.
- Pass 4: (1, 3) fine. No swaps: done.

Comparisons: $4 + 3 + 2 + 1 = 10 = \frac{5 \times 4}{2}$. ✓

**3. Merging two piles.** Merge 2, 4, 6, 8 with 1, 3, 5, 7.

Compare tops 2 and 1: take **1**. Compare 2 and 3: take **2**. Then 4 and 3: **3**. 4 and 5: **4**. 6 and 5: **5**.
6 and 7: **6**. 8 and 7: **7**. The second pile is empty, so **8** goes on without a comparison. Result
1, 2, 3, 4, 5, 6, 7, 8 using 7 comparisons, which is $m - 1$ with $m = 8$.

**4. Linear or binary?** A phone has 1,000,000 contacts in alphabetical order. Linear search: up to 1,000,000 checks.
Binary search: $2^{20} = 1{,}048{,}576 \ge 1{,}000{,}000$, so at most 20 checks. Sorting first is worth it if you will
search many times.

**5. When the list is not sorted.** Your messy drawer has 30 socks and you want the one red sock. Binary search is
useless: looking at the middle sock tells you nothing about which half the red one is in. Linear search, up to 30
looks, is the best you can do.

## Try it

1. What is the most guesses needed for a secret number from 1 to 100? From 1 to 2000?
2. With 15 guesses, what is the largest range 1 to $N$ you can always win?
3. Use binary search (middle, rounding down) to find 37 in 1 to 100. List your guesses.
4. Bubble sort 4, 2, 5, 1. Show each pass and count the comparisons.
5. Merge 1, 5, 9 with 2, 3, 10. How many comparisons?
6. Merge sort 7, 3, 6, 1. Show each row.
7. How many comparisons does bubble sort need, in the worst case, for 100 items? About how many does merge sort need?
8. Explain why binary search on a list of 1000 needs at most 10 checks, using the halving chain.

??? note "Answers"
    1. $2^7 = 128 \ge 100$ and $2^6 = 64 < 100$, so **7** for 1 to 100 (the 6-guess limit is $2^6 - 1 = 63$). For
       2000: $2^{11} = 2048 \ge 2000$ and $2^{10} - 1 = 1023 < 2000$, so **11**.
    2. $2^{15} - 1 = 32{,}767$. So 1 to 32,767.
    3. 50 (lower), then 1 to 49: 25 (higher), then 26 to 49: 37. **Got it** on guess 3.
    4. Pass 1: (4, 2) swap, (4, 5) fine, (5, 1) swap: 2, 4, 1, 5. Pass 2: (2, 4) fine, (4, 1) swap: 2, 1, 4, 5.
       Pass 3: (2, 1) swap: 1, 2, 4, 5. Comparisons $3 + 2 + 1 = 6$.
    5. 1 vs 2: 1. 5 vs 2: 2. 5 vs 3: 3. 5 vs 10: 5. 9 vs 10: 9. Then 10 goes on free. Result 1, 2, 3, 5, 9, 10 with
       **5** comparisons ($6 - 1$).
    6. Singles: 7 | 3 | 6 | 1. Pairs: 3, 7 | 1, 6 (2 comparisons). Merge: 1 vs 3: 1; 3 vs 6: 3; 7 vs 6: 6; then 7.
       Result 1, 3, 6, 7 (3 comparisons). Total 5.
    7. Bubble: $\frac{100 \times 99}{2} = 4950$. Merge: fewer than $100 \times \log_2 100 \approx 100 \times 6.6$,
       so fewer than about 700.
    8. Each check removes at least half of what is left: 1000, 500, 250, 125, 62, 31, 15, 7, 3,
       1. After 9 checks at most one candidate remains, and the 10th check settles it.

## Common mistake

**Using binary search on an unsorted list.** Halving only works because the order tells you which half to keep. On a
jumbled list, the middle item tells you nothing about where the target is.

**Thinking a faster computer fixes a slow algorithm.** A computer a hundred times faster runs bubble sort a hundred
times faster. But for a million items, merge sort does about 25,000 times fewer comparisons than bubble sort. A better
algorithm beats faster hardware.

## Where it leads

- Back: [Algorithms and flowcharts](03-algorithms-flowcharts.md) · Next: [Networks](05-networks-euler.md)
- [Level 6 page](index.md) · [Logic topic page](../index.md)
- The halving count is a logarithm: [Algebra level 8](../../algebra/level-8/04-logarithms.md). The weighing puzzles of
  [level 3](../level-3/index.md) use the same idea with thirds instead of halves.
- On the U of T shelf: [CSC108 unit 9: searching, sorting and complexity](../../../uoft/CSC108H1/unit09.md),
  [CSC148 unit 5: recursion](../../../uoft/CSC148H1/unit05.md) (merge sort calls itself) and
  [CSC148 unit 10: sorting](../../../uoft/CSC148H1/unit10.md).
