---
title: "The sieve of Eratosthenes"
---

# The sieve of Eratosthenes

*Number theory · level 2, lesson 5 of 6*

## A question to start

How many prime numbers are there from 1 to 100?

You could test each number one at a time: is 2 prime? Is 3? Is 4? ... That is a lot of work, 100 tests, each with
several tries. But there is a much faster way, more than 2,000 years old, that finds **all** of them at once. You
do not even need to divide. You only need to **count** and **cross out**. And here is a surprise: for numbers up to
100, you can finish after crossing out the multiples of just **four** numbers.

## The idea

### A sieve

A **sieve** is a kitchen tool with small holes, used to sift flour or drain pasta. The small bits fall through the
holes, and the big bits stay behind.

Our sieve works on numbers. We shake out all the **composite** numbers, and the **primes** stay behind.

The method is named after **Eratosthenes** (say "Era-TOSS-the-neez"), a Greek scholar who lived more than 2,000
years ago and worked in the great library of Alexandria, in Egypt. He is also famous for measuring the size of the
Earth using shadows. The sieve is credited to him by later writers.

### The big idea behind the sieve

A composite number is a **multiple** of some smaller number (other than 1). For example, 15 is a multiple of 3, and
28 is a multiple of 2. So if we cross out all the multiples of 2, all the multiples of 3, and so on, every composite
number gets crossed out. The numbers that are **never** crossed out are the primes.

But careful: we must not cross out the number **itself**. 3 is a multiple of 3 (3 × 1), but it is prime. So we start
crossing out at the **second** multiple: 6, 9, 12, ...

### Step 1: the 2s

Write the numbers from 1 to 100 in rows of ten. Colour 1 green and leave it aside, because it is not prime
(it is our special number). Then circle **2**: it is prime. Now cross out every **other multiple of 2**: 4, 6, 8, 10, ... You can count
by 2s, so you do not need to divide. Here is what the first 30 look like.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 120" role="img" aria-label="The numbers 1 to 30 after the first round of the sieve: 2 is circled in orange and every other even number is crossed out">
  <rect x="10" y="5" width="36" height="36" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="28.0" y="27.55" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <rect x="46" y="5" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="64.0" y="27.55" font-size="13" text-anchor="middle" fill="currentColor">2</text>
  <rect x="82" y="5" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="100.0" y="27.55" font-size="13" text-anchor="middle" fill="currentColor">3</text>
  <rect x="118" y="5" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="136.0" y="27.55" font-size="13" text-anchor="middle" fill="currentColor">4</text>
  <line x1="123" y1="36" x2="149" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <rect x="154" y="5" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="172.0" y="27.55" font-size="13" text-anchor="middle" fill="currentColor">5</text>
  <rect x="190" y="5" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="208.0" y="27.55" font-size="13" text-anchor="middle" fill="currentColor">6</text>
  <line x1="195" y1="36" x2="221" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <rect x="226" y="5" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="244.0" y="27.55" font-size="13" text-anchor="middle" fill="currentColor">7</text>
  <rect x="262" y="5" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="280.0" y="27.55" font-size="13" text-anchor="middle" fill="currentColor">8</text>
  <line x1="267" y1="36" x2="293" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <rect x="298" y="5" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="316.0" y="27.55" font-size="13" text-anchor="middle" fill="currentColor">9</text>
  <rect x="334" y="5" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="352.0" y="27.55" font-size="13" text-anchor="middle" fill="currentColor">10</text>
  <line x1="339" y1="36" x2="365" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <rect x="10" y="41" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="28.0" y="63.55" font-size="13" text-anchor="middle" fill="currentColor">11</text>
  <rect x="46" y="41" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="64.0" y="63.55" font-size="13" text-anchor="middle" fill="currentColor">12</text>
  <line x1="51" y1="72" x2="77" y2="46" stroke="currentColor" stroke-width="1.5"/>
  <rect x="82" y="41" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="100.0" y="63.55" font-size="13" text-anchor="middle" fill="currentColor">13</text>
  <rect x="118" y="41" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="136.0" y="63.55" font-size="13" text-anchor="middle" fill="currentColor">14</text>
  <line x1="123" y1="72" x2="149" y2="46" stroke="currentColor" stroke-width="1.5"/>
  <rect x="154" y="41" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="172.0" y="63.55" font-size="13" text-anchor="middle" fill="currentColor">15</text>
  <rect x="190" y="41" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="208.0" y="63.55" font-size="13" text-anchor="middle" fill="currentColor">16</text>
  <line x1="195" y1="72" x2="221" y2="46" stroke="currentColor" stroke-width="1.5"/>
  <rect x="226" y="41" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="244.0" y="63.55" font-size="13" text-anchor="middle" fill="currentColor">17</text>
  <rect x="262" y="41" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="280.0" y="63.55" font-size="13" text-anchor="middle" fill="currentColor">18</text>
  <line x1="267" y1="72" x2="293" y2="46" stroke="currentColor" stroke-width="1.5"/>
  <rect x="298" y="41" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="316.0" y="63.55" font-size="13" text-anchor="middle" fill="currentColor">19</text>
  <rect x="334" y="41" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="352.0" y="63.55" font-size="13" text-anchor="middle" fill="currentColor">20</text>
  <line x1="339" y1="72" x2="365" y2="46" stroke="currentColor" stroke-width="1.5"/>
  <rect x="10" y="77" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="28.0" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">21</text>
  <rect x="46" y="77" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="64.0" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">22</text>
  <line x1="51" y1="108" x2="77" y2="82" stroke="currentColor" stroke-width="1.5"/>
  <rect x="82" y="77" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="100.0" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">23</text>
  <rect x="118" y="77" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="136.0" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">24</text>
  <line x1="123" y1="108" x2="149" y2="82" stroke="currentColor" stroke-width="1.5"/>
  <rect x="154" y="77" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="172.0" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">25</text>
  <rect x="190" y="77" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="208.0" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">26</text>
  <line x1="195" y1="108" x2="221" y2="82" stroke="currentColor" stroke-width="1.5"/>
  <rect x="226" y="77" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="244.0" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">27</text>
  <rect x="262" y="77" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="280.0" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">28</text>
  <line x1="267" y1="108" x2="293" y2="82" stroke="currentColor" stroke-width="1.5"/>
  <rect x="298" y="77" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="316.0" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">29</text>
  <rect x="334" y="77" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="352.0" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">30</text>
  <line x1="339" y1="108" x2="365" y2="82" stroke="currentColor" stroke-width="1.5"/>
</svg>
</div>

All the even numbers except 2 are gone. On the full chart, they make five straight columns, as you saw in
[Skip counting](../level-1/04-skip-counting.md).

### Step 2: the 3s

The first number after 2 that is **not crossed out** is **3**. Circle it: it is prime. (How do we know? Nothing
smaller than it, except 1, went into it, or it would have been crossed out.)

Now cross out the multiples of 3: 6, 9, 12, 15, 18, ... Some are already crossed out (6, 12, 18 are even). The
**new** ones are 9, 15, 21, 27, ..., shown in blue.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 120" role="img" aria-label="The numbers 1 to 30 after the second round: 2 and 3 are orange, and the multiples of 2 and of 3 are crossed out">
  <rect x="10" y="5" width="36" height="36" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="28.0" y="27.55" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <rect x="46" y="5" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="64.0" y="27.55" font-size="13" text-anchor="middle" fill="currentColor">2</text>
  <rect x="82" y="5" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="100.0" y="27.55" font-size="13" text-anchor="middle" fill="currentColor">3</text>
  <rect x="118" y="5" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="136.0" y="27.55" font-size="13" text-anchor="middle" fill="currentColor">4</text>
  <line x1="123" y1="36" x2="149" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <rect x="154" y="5" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="172.0" y="27.55" font-size="13" text-anchor="middle" fill="currentColor">5</text>
  <rect x="190" y="5" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="208.0" y="27.55" font-size="13" text-anchor="middle" fill="currentColor">6</text>
  <line x1="195" y1="36" x2="221" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <rect x="226" y="5" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="244.0" y="27.55" font-size="13" text-anchor="middle" fill="currentColor">7</text>
  <rect x="262" y="5" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="280.0" y="27.55" font-size="13" text-anchor="middle" fill="currentColor">8</text>
  <line x1="267" y1="36" x2="293" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <rect x="298" y="5" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="316.0" y="27.55" font-size="13" text-anchor="middle" fill="currentColor">9</text>
  <line x1="303" y1="36" x2="329" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <rect x="334" y="5" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="352.0" y="27.55" font-size="13" text-anchor="middle" fill="currentColor">10</text>
  <line x1="339" y1="36" x2="365" y2="10" stroke="currentColor" stroke-width="1.5"/>
  <rect x="10" y="41" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="28.0" y="63.55" font-size="13" text-anchor="middle" fill="currentColor">11</text>
  <rect x="46" y="41" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="64.0" y="63.55" font-size="13" text-anchor="middle" fill="currentColor">12</text>
  <line x1="51" y1="72" x2="77" y2="46" stroke="currentColor" stroke-width="1.5"/>
  <rect x="82" y="41" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="100.0" y="63.55" font-size="13" text-anchor="middle" fill="currentColor">13</text>
  <rect x="118" y="41" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="136.0" y="63.55" font-size="13" text-anchor="middle" fill="currentColor">14</text>
  <line x1="123" y1="72" x2="149" y2="46" stroke="currentColor" stroke-width="1.5"/>
  <rect x="154" y="41" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="172.0" y="63.55" font-size="13" text-anchor="middle" fill="currentColor">15</text>
  <line x1="159" y1="72" x2="185" y2="46" stroke="currentColor" stroke-width="1.5"/>
  <rect x="190" y="41" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="208.0" y="63.55" font-size="13" text-anchor="middle" fill="currentColor">16</text>
  <line x1="195" y1="72" x2="221" y2="46" stroke="currentColor" stroke-width="1.5"/>
  <rect x="226" y="41" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="244.0" y="63.55" font-size="13" text-anchor="middle" fill="currentColor">17</text>
  <rect x="262" y="41" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="280.0" y="63.55" font-size="13" text-anchor="middle" fill="currentColor">18</text>
  <line x1="267" y1="72" x2="293" y2="46" stroke="currentColor" stroke-width="1.5"/>
  <rect x="298" y="41" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="316.0" y="63.55" font-size="13" text-anchor="middle" fill="currentColor">19</text>
  <rect x="334" y="41" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="352.0" y="63.55" font-size="13" text-anchor="middle" fill="currentColor">20</text>
  <line x1="339" y1="72" x2="365" y2="46" stroke="currentColor" stroke-width="1.5"/>
  <rect x="10" y="77" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="28.0" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">21</text>
  <line x1="15" y1="108" x2="41" y2="82" stroke="currentColor" stroke-width="1.5"/>
  <rect x="46" y="77" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="64.0" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">22</text>
  <line x1="51" y1="108" x2="77" y2="82" stroke="currentColor" stroke-width="1.5"/>
  <rect x="82" y="77" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="100.0" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">23</text>
  <rect x="118" y="77" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="136.0" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">24</text>
  <line x1="123" y1="108" x2="149" y2="82" stroke="currentColor" stroke-width="1.5"/>
  <rect x="154" y="77" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="172.0" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">25</text>
  <rect x="190" y="77" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="208.0" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">26</text>
  <line x1="195" y1="108" x2="221" y2="82" stroke="currentColor" stroke-width="1.5"/>
  <rect x="226" y="77" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="244.0" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">27</text>
  <line x1="231" y1="108" x2="257" y2="82" stroke="currentColor" stroke-width="1.5"/>
  <rect x="262" y="77" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="280.0" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">28</text>
  <line x1="267" y1="108" x2="293" y2="82" stroke="currentColor" stroke-width="1.5"/>
  <rect x="298" y="77" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="316.0" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">29</text>
  <rect x="334" y="77" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="352.0" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">30</text>
  <line x1="339" y1="108" x2="365" y2="82" stroke="currentColor" stroke-width="1.5"/>
</svg>
</div>

### Step 3: the 5s

The next number not crossed out is 4? No, 4 is crossed out (it is even). The next is **5**. Circle it, and cross
out its multiples: 10, 15, 20, **25**, 30, **35**, ... Most are already gone. The first **new** one is **25**,
because 10, 15 and 20 were already crossed out as multiples of 2 or 3.

### Step 4: the 7s

The next number left is **7**. Circle it and cross out 14, 21, 28, 35, 42, **49**, ... The new ones are **49**,
**77** and **91**. (Others, like 56 or 63, were already crossed out.)

### Step 5: stop, and circle everything left

The next number left is **11**. And here is the surprise: you can **stop crossing out**. Every number that is not
yet crossed out is prime! Circle them all.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 380" role="img" aria-label="The finished sieve for 1 to 100. The 25 primes are orange; every other number except 1 is crossed out.">
  <rect x="10" y="10" width="36" height="36" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="28.0" y="32.55" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <rect x="46" y="10" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="64.0" y="32.55" font-size="13" text-anchor="middle" fill="currentColor">2</text>
  <rect x="82" y="10" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="100.0" y="32.55" font-size="13" text-anchor="middle" fill="currentColor">3</text>
  <rect x="118" y="10" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="136.0" y="32.55" font-size="13" text-anchor="middle" fill="currentColor">4</text>
  <line x1="123" y1="41" x2="149" y2="15" stroke="currentColor" stroke-width="1.5"/>
  <rect x="154" y="10" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="172.0" y="32.55" font-size="13" text-anchor="middle" fill="currentColor">5</text>
  <rect x="190" y="10" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="208.0" y="32.55" font-size="13" text-anchor="middle" fill="currentColor">6</text>
  <line x1="195" y1="41" x2="221" y2="15" stroke="currentColor" stroke-width="1.5"/>
  <rect x="226" y="10" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="244.0" y="32.55" font-size="13" text-anchor="middle" fill="currentColor">7</text>
  <rect x="262" y="10" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="280.0" y="32.55" font-size="13" text-anchor="middle" fill="currentColor">8</text>
  <line x1="267" y1="41" x2="293" y2="15" stroke="currentColor" stroke-width="1.5"/>
  <rect x="298" y="10" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="316.0" y="32.55" font-size="13" text-anchor="middle" fill="currentColor">9</text>
  <line x1="303" y1="41" x2="329" y2="15" stroke="currentColor" stroke-width="1.5"/>
  <rect x="334" y="10" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="352.0" y="32.55" font-size="13" text-anchor="middle" fill="currentColor">10</text>
  <line x1="339" y1="41" x2="365" y2="15" stroke="currentColor" stroke-width="1.5"/>
  <rect x="10" y="46" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="28.0" y="68.55" font-size="13" text-anchor="middle" fill="currentColor">11</text>
  <rect x="46" y="46" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="64.0" y="68.55" font-size="13" text-anchor="middle" fill="currentColor">12</text>
  <line x1="51" y1="77" x2="77" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <rect x="82" y="46" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="100.0" y="68.55" font-size="13" text-anchor="middle" fill="currentColor">13</text>
  <rect x="118" y="46" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="136.0" y="68.55" font-size="13" text-anchor="middle" fill="currentColor">14</text>
  <line x1="123" y1="77" x2="149" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <rect x="154" y="46" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="172.0" y="68.55" font-size="13" text-anchor="middle" fill="currentColor">15</text>
  <line x1="159" y1="77" x2="185" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <rect x="190" y="46" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="208.0" y="68.55" font-size="13" text-anchor="middle" fill="currentColor">16</text>
  <line x1="195" y1="77" x2="221" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <rect x="226" y="46" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="244.0" y="68.55" font-size="13" text-anchor="middle" fill="currentColor">17</text>
  <rect x="262" y="46" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="280.0" y="68.55" font-size="13" text-anchor="middle" fill="currentColor">18</text>
  <line x1="267" y1="77" x2="293" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <rect x="298" y="46" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="316.0" y="68.55" font-size="13" text-anchor="middle" fill="currentColor">19</text>
  <rect x="334" y="46" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="352.0" y="68.55" font-size="13" text-anchor="middle" fill="currentColor">20</text>
  <line x1="339" y1="77" x2="365" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <rect x="10" y="82" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="28.0" y="104.55" font-size="13" text-anchor="middle" fill="currentColor">21</text>
  <line x1="15" y1="113" x2="41" y2="87" stroke="currentColor" stroke-width="1.5"/>
  <rect x="46" y="82" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="64.0" y="104.55" font-size="13" text-anchor="middle" fill="currentColor">22</text>
  <line x1="51" y1="113" x2="77" y2="87" stroke="currentColor" stroke-width="1.5"/>
  <rect x="82" y="82" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="100.0" y="104.55" font-size="13" text-anchor="middle" fill="currentColor">23</text>
  <rect x="118" y="82" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="136.0" y="104.55" font-size="13" text-anchor="middle" fill="currentColor">24</text>
  <line x1="123" y1="113" x2="149" y2="87" stroke="currentColor" stroke-width="1.5"/>
  <rect x="154" y="82" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="172.0" y="104.55" font-size="13" text-anchor="middle" fill="currentColor">25</text>
  <line x1="159" y1="113" x2="185" y2="87" stroke="currentColor" stroke-width="1.5"/>
  <rect x="190" y="82" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="208.0" y="104.55" font-size="13" text-anchor="middle" fill="currentColor">26</text>
  <line x1="195" y1="113" x2="221" y2="87" stroke="currentColor" stroke-width="1.5"/>
  <rect x="226" y="82" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="244.0" y="104.55" font-size="13" text-anchor="middle" fill="currentColor">27</text>
  <line x1="231" y1="113" x2="257" y2="87" stroke="currentColor" stroke-width="1.5"/>
  <rect x="262" y="82" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="280.0" y="104.55" font-size="13" text-anchor="middle" fill="currentColor">28</text>
  <line x1="267" y1="113" x2="293" y2="87" stroke="currentColor" stroke-width="1.5"/>
  <rect x="298" y="82" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="316.0" y="104.55" font-size="13" text-anchor="middle" fill="currentColor">29</text>
  <rect x="334" y="82" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="352.0" y="104.55" font-size="13" text-anchor="middle" fill="currentColor">30</text>
  <line x1="339" y1="113" x2="365" y2="87" stroke="currentColor" stroke-width="1.5"/>
  <rect x="10" y="118" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="28.0" y="140.55" font-size="13" text-anchor="middle" fill="currentColor">31</text>
  <rect x="46" y="118" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="64.0" y="140.55" font-size="13" text-anchor="middle" fill="currentColor">32</text>
  <line x1="51" y1="149" x2="77" y2="123" stroke="currentColor" stroke-width="1.5"/>
  <rect x="82" y="118" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="100.0" y="140.55" font-size="13" text-anchor="middle" fill="currentColor">33</text>
  <line x1="87" y1="149" x2="113" y2="123" stroke="currentColor" stroke-width="1.5"/>
  <rect x="118" y="118" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="136.0" y="140.55" font-size="13" text-anchor="middle" fill="currentColor">34</text>
  <line x1="123" y1="149" x2="149" y2="123" stroke="currentColor" stroke-width="1.5"/>
  <rect x="154" y="118" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="172.0" y="140.55" font-size="13" text-anchor="middle" fill="currentColor">35</text>
  <line x1="159" y1="149" x2="185" y2="123" stroke="currentColor" stroke-width="1.5"/>
  <rect x="190" y="118" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="208.0" y="140.55" font-size="13" text-anchor="middle" fill="currentColor">36</text>
  <line x1="195" y1="149" x2="221" y2="123" stroke="currentColor" stroke-width="1.5"/>
  <rect x="226" y="118" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="244.0" y="140.55" font-size="13" text-anchor="middle" fill="currentColor">37</text>
  <rect x="262" y="118" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="280.0" y="140.55" font-size="13" text-anchor="middle" fill="currentColor">38</text>
  <line x1="267" y1="149" x2="293" y2="123" stroke="currentColor" stroke-width="1.5"/>
  <rect x="298" y="118" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="316.0" y="140.55" font-size="13" text-anchor="middle" fill="currentColor">39</text>
  <line x1="303" y1="149" x2="329" y2="123" stroke="currentColor" stroke-width="1.5"/>
  <rect x="334" y="118" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="352.0" y="140.55" font-size="13" text-anchor="middle" fill="currentColor">40</text>
  <line x1="339" y1="149" x2="365" y2="123" stroke="currentColor" stroke-width="1.5"/>
  <rect x="10" y="154" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="28.0" y="176.55" font-size="13" text-anchor="middle" fill="currentColor">41</text>
  <rect x="46" y="154" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="64.0" y="176.55" font-size="13" text-anchor="middle" fill="currentColor">42</text>
  <line x1="51" y1="185" x2="77" y2="159" stroke="currentColor" stroke-width="1.5"/>
  <rect x="82" y="154" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="100.0" y="176.55" font-size="13" text-anchor="middle" fill="currentColor">43</text>
  <rect x="118" y="154" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="136.0" y="176.55" font-size="13" text-anchor="middle" fill="currentColor">44</text>
  <line x1="123" y1="185" x2="149" y2="159" stroke="currentColor" stroke-width="1.5"/>
  <rect x="154" y="154" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="172.0" y="176.55" font-size="13" text-anchor="middle" fill="currentColor">45</text>
  <line x1="159" y1="185" x2="185" y2="159" stroke="currentColor" stroke-width="1.5"/>
  <rect x="190" y="154" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="208.0" y="176.55" font-size="13" text-anchor="middle" fill="currentColor">46</text>
  <line x1="195" y1="185" x2="221" y2="159" stroke="currentColor" stroke-width="1.5"/>
  <rect x="226" y="154" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="244.0" y="176.55" font-size="13" text-anchor="middle" fill="currentColor">47</text>
  <rect x="262" y="154" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="280.0" y="176.55" font-size="13" text-anchor="middle" fill="currentColor">48</text>
  <line x1="267" y1="185" x2="293" y2="159" stroke="currentColor" stroke-width="1.5"/>
  <rect x="298" y="154" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="316.0" y="176.55" font-size="13" text-anchor="middle" fill="currentColor">49</text>
  <line x1="303" y1="185" x2="329" y2="159" stroke="currentColor" stroke-width="1.5"/>
  <rect x="334" y="154" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="352.0" y="176.55" font-size="13" text-anchor="middle" fill="currentColor">50</text>
  <line x1="339" y1="185" x2="365" y2="159" stroke="currentColor" stroke-width="1.5"/>
  <rect x="10" y="190" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="28.0" y="212.55" font-size="13" text-anchor="middle" fill="currentColor">51</text>
  <line x1="15" y1="221" x2="41" y2="195" stroke="currentColor" stroke-width="1.5"/>
  <rect x="46" y="190" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="64.0" y="212.55" font-size="13" text-anchor="middle" fill="currentColor">52</text>
  <line x1="51" y1="221" x2="77" y2="195" stroke="currentColor" stroke-width="1.5"/>
  <rect x="82" y="190" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="100.0" y="212.55" font-size="13" text-anchor="middle" fill="currentColor">53</text>
  <rect x="118" y="190" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="136.0" y="212.55" font-size="13" text-anchor="middle" fill="currentColor">54</text>
  <line x1="123" y1="221" x2="149" y2="195" stroke="currentColor" stroke-width="1.5"/>
  <rect x="154" y="190" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="172.0" y="212.55" font-size="13" text-anchor="middle" fill="currentColor">55</text>
  <line x1="159" y1="221" x2="185" y2="195" stroke="currentColor" stroke-width="1.5"/>
  <rect x="190" y="190" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="208.0" y="212.55" font-size="13" text-anchor="middle" fill="currentColor">56</text>
  <line x1="195" y1="221" x2="221" y2="195" stroke="currentColor" stroke-width="1.5"/>
  <rect x="226" y="190" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="244.0" y="212.55" font-size="13" text-anchor="middle" fill="currentColor">57</text>
  <line x1="231" y1="221" x2="257" y2="195" stroke="currentColor" stroke-width="1.5"/>
  <rect x="262" y="190" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="280.0" y="212.55" font-size="13" text-anchor="middle" fill="currentColor">58</text>
  <line x1="267" y1="221" x2="293" y2="195" stroke="currentColor" stroke-width="1.5"/>
  <rect x="298" y="190" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="316.0" y="212.55" font-size="13" text-anchor="middle" fill="currentColor">59</text>
  <rect x="334" y="190" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="352.0" y="212.55" font-size="13" text-anchor="middle" fill="currentColor">60</text>
  <line x1="339" y1="221" x2="365" y2="195" stroke="currentColor" stroke-width="1.5"/>
  <rect x="10" y="226" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="28.0" y="248.55" font-size="13" text-anchor="middle" fill="currentColor">61</text>
  <rect x="46" y="226" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="64.0" y="248.55" font-size="13" text-anchor="middle" fill="currentColor">62</text>
  <line x1="51" y1="257" x2="77" y2="231" stroke="currentColor" stroke-width="1.5"/>
  <rect x="82" y="226" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="100.0" y="248.55" font-size="13" text-anchor="middle" fill="currentColor">63</text>
  <line x1="87" y1="257" x2="113" y2="231" stroke="currentColor" stroke-width="1.5"/>
  <rect x="118" y="226" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="136.0" y="248.55" font-size="13" text-anchor="middle" fill="currentColor">64</text>
  <line x1="123" y1="257" x2="149" y2="231" stroke="currentColor" stroke-width="1.5"/>
  <rect x="154" y="226" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="172.0" y="248.55" font-size="13" text-anchor="middle" fill="currentColor">65</text>
  <line x1="159" y1="257" x2="185" y2="231" stroke="currentColor" stroke-width="1.5"/>
  <rect x="190" y="226" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="208.0" y="248.55" font-size="13" text-anchor="middle" fill="currentColor">66</text>
  <line x1="195" y1="257" x2="221" y2="231" stroke="currentColor" stroke-width="1.5"/>
  <rect x="226" y="226" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="244.0" y="248.55" font-size="13" text-anchor="middle" fill="currentColor">67</text>
  <rect x="262" y="226" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="280.0" y="248.55" font-size="13" text-anchor="middle" fill="currentColor">68</text>
  <line x1="267" y1="257" x2="293" y2="231" stroke="currentColor" stroke-width="1.5"/>
  <rect x="298" y="226" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="316.0" y="248.55" font-size="13" text-anchor="middle" fill="currentColor">69</text>
  <line x1="303" y1="257" x2="329" y2="231" stroke="currentColor" stroke-width="1.5"/>
  <rect x="334" y="226" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="352.0" y="248.55" font-size="13" text-anchor="middle" fill="currentColor">70</text>
  <line x1="339" y1="257" x2="365" y2="231" stroke="currentColor" stroke-width="1.5"/>
  <rect x="10" y="262" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="28.0" y="284.55" font-size="13" text-anchor="middle" fill="currentColor">71</text>
  <rect x="46" y="262" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="64.0" y="284.55" font-size="13" text-anchor="middle" fill="currentColor">72</text>
  <line x1="51" y1="293" x2="77" y2="267" stroke="currentColor" stroke-width="1.5"/>
  <rect x="82" y="262" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="100.0" y="284.55" font-size="13" text-anchor="middle" fill="currentColor">73</text>
  <rect x="118" y="262" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="136.0" y="284.55" font-size="13" text-anchor="middle" fill="currentColor">74</text>
  <line x1="123" y1="293" x2="149" y2="267" stroke="currentColor" stroke-width="1.5"/>
  <rect x="154" y="262" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="172.0" y="284.55" font-size="13" text-anchor="middle" fill="currentColor">75</text>
  <line x1="159" y1="293" x2="185" y2="267" stroke="currentColor" stroke-width="1.5"/>
  <rect x="190" y="262" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="208.0" y="284.55" font-size="13" text-anchor="middle" fill="currentColor">76</text>
  <line x1="195" y1="293" x2="221" y2="267" stroke="currentColor" stroke-width="1.5"/>
  <rect x="226" y="262" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="244.0" y="284.55" font-size="13" text-anchor="middle" fill="currentColor">77</text>
  <line x1="231" y1="293" x2="257" y2="267" stroke="currentColor" stroke-width="1.5"/>
  <rect x="262" y="262" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="280.0" y="284.55" font-size="13" text-anchor="middle" fill="currentColor">78</text>
  <line x1="267" y1="293" x2="293" y2="267" stroke="currentColor" stroke-width="1.5"/>
  <rect x="298" y="262" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="316.0" y="284.55" font-size="13" text-anchor="middle" fill="currentColor">79</text>
  <rect x="334" y="262" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="352.0" y="284.55" font-size="13" text-anchor="middle" fill="currentColor">80</text>
  <line x1="339" y1="293" x2="365" y2="267" stroke="currentColor" stroke-width="1.5"/>
  <rect x="10" y="298" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="28.0" y="320.55" font-size="13" text-anchor="middle" fill="currentColor">81</text>
  <line x1="15" y1="329" x2="41" y2="303" stroke="currentColor" stroke-width="1.5"/>
  <rect x="46" y="298" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="64.0" y="320.55" font-size="13" text-anchor="middle" fill="currentColor">82</text>
  <line x1="51" y1="329" x2="77" y2="303" stroke="currentColor" stroke-width="1.5"/>
  <rect x="82" y="298" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="100.0" y="320.55" font-size="13" text-anchor="middle" fill="currentColor">83</text>
  <rect x="118" y="298" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="136.0" y="320.55" font-size="13" text-anchor="middle" fill="currentColor">84</text>
  <line x1="123" y1="329" x2="149" y2="303" stroke="currentColor" stroke-width="1.5"/>
  <rect x="154" y="298" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="172.0" y="320.55" font-size="13" text-anchor="middle" fill="currentColor">85</text>
  <line x1="159" y1="329" x2="185" y2="303" stroke="currentColor" stroke-width="1.5"/>
  <rect x="190" y="298" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="208.0" y="320.55" font-size="13" text-anchor="middle" fill="currentColor">86</text>
  <line x1="195" y1="329" x2="221" y2="303" stroke="currentColor" stroke-width="1.5"/>
  <rect x="226" y="298" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="244.0" y="320.55" font-size="13" text-anchor="middle" fill="currentColor">87</text>
  <line x1="231" y1="329" x2="257" y2="303" stroke="currentColor" stroke-width="1.5"/>
  <rect x="262" y="298" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="280.0" y="320.55" font-size="13" text-anchor="middle" fill="currentColor">88</text>
  <line x1="267" y1="329" x2="293" y2="303" stroke="currentColor" stroke-width="1.5"/>
  <rect x="298" y="298" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="316.0" y="320.55" font-size="13" text-anchor="middle" fill="currentColor">89</text>
  <rect x="334" y="298" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="352.0" y="320.55" font-size="13" text-anchor="middle" fill="currentColor">90</text>
  <line x1="339" y1="329" x2="365" y2="303" stroke="currentColor" stroke-width="1.5"/>
  <rect x="10" y="334" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="28.0" y="356.55" font-size="13" text-anchor="middle" fill="currentColor">91</text>
  <line x1="15" y1="365" x2="41" y2="339" stroke="currentColor" stroke-width="1.5"/>
  <rect x="46" y="334" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="64.0" y="356.55" font-size="13" text-anchor="middle" fill="currentColor">92</text>
  <line x1="51" y1="365" x2="77" y2="339" stroke="currentColor" stroke-width="1.5"/>
  <rect x="82" y="334" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="100.0" y="356.55" font-size="13" text-anchor="middle" fill="currentColor">93</text>
  <line x1="87" y1="365" x2="113" y2="339" stroke="currentColor" stroke-width="1.5"/>
  <rect x="118" y="334" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="136.0" y="356.55" font-size="13" text-anchor="middle" fill="currentColor">94</text>
  <line x1="123" y1="365" x2="149" y2="339" stroke="currentColor" stroke-width="1.5"/>
  <rect x="154" y="334" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="172.0" y="356.55" font-size="13" text-anchor="middle" fill="currentColor">95</text>
  <line x1="159" y1="365" x2="185" y2="339" stroke="currentColor" stroke-width="1.5"/>
  <rect x="190" y="334" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="208.0" y="356.55" font-size="13" text-anchor="middle" fill="currentColor">96</text>
  <line x1="195" y1="365" x2="221" y2="339" stroke="currentColor" stroke-width="1.5"/>
  <rect x="226" y="334" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="244.0" y="356.55" font-size="13" text-anchor="middle" fill="currentColor">97</text>
  <rect x="262" y="334" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="280.0" y="356.55" font-size="13" text-anchor="middle" fill="currentColor">98</text>
  <line x1="267" y1="365" x2="293" y2="339" stroke="currentColor" stroke-width="1.5"/>
  <rect x="298" y="334" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="316.0" y="356.55" font-size="13" text-anchor="middle" fill="currentColor">99</text>
  <line x1="303" y1="365" x2="329" y2="339" stroke="currentColor" stroke-width="1.5"/>
  <rect x="334" y="334" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="352.0" y="356.55" font-size="13" text-anchor="middle" fill="currentColor">100</text>
  <line x1="339" y1="365" x2="365" y2="339" stroke="currentColor" stroke-width="1.5"/>
</svg>
</div>

The **25 primes up to 100** are:

**2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97**

### Why you can stop after 7

This is the clever part. Look at the **first new** number each prime crossed out:

| Prime | First new number crossed out | Why it is that one |
| --- | --- | --- |
| 2 | 4 | 2 × 2 |
| 3 | 9 | 3 × 3 (6 = 3 × 2 was already gone, as a multiple of 2) |
| 5 | 25 | 5 × 5 (10, 15, 20 were already gone) |
| 7 | 49 | 7 × 7 (14, 21, 28, 35, 42 were already gone) |

See the pattern? Each prime first crosses out **itself times itself**. Why? Take 7. Its smaller multiples are 7 × 2,
7 × 3, 7 × 4, 7 × 5 and 7 × 6. Each of those has a factor smaller than 7 (2, 3, 4, 5 or 6), so it was already crossed
out by a smaller prime. The first one with no smaller factor is 7 × 7 = 49.

Now think about 11. The first new number it could cross out is 11 × 11 = **121**. But our chart stops at 100! So 11
would cross out nothing new. Neither would 13 (13 × 13 = 169), or any bigger prime. All the crossing out is already
done.

Here is the same idea with arrays, from [Factors with arrays](03-factors-arrays.md). Any composite number up to 100
makes an array with a **short side** and a long side. The short side cannot be more than 10, because 10 rows of 10 is
already 100. So every composite up to 100 has a factor that is 10 or less, and so a **prime** factor of 2, 3, 5 or 7
(the primes up to 10). That means it was crossed out in steps 1 to 4.

### Counting what we crossed out

From 1 to 100: 1 is special, 25 numbers are prime, and so 100 − 1 − 25 = **74** numbers are composite and got
crossed out. Of these 74, as many as 49 are even: all the even numbers from 4 to 100.

## Worked examples

**Example 1. The sieve up to 30.** Which primes do you need to sieve with, and what is left?

1. The next prime after 5 is 7, and 7 × 7 = 49 is bigger than 30. So you only need to sieve with **2, 3 and 5**.
2. Cross out the multiples of 2 (from 4), of 3 (from 9) and of 5 (from 25).
3. What is left: **2, 3, 5, 7, 11, 13, 17, 19, 23, 29**. Ten primes.

**Example 2. Why is 91 crossed out?**

1. 91 is odd, so the 2s missed it. It is not in the 3 times table (90, 93), so the 3s missed it. It
   does not end in 0 or 5, so the 5s missed it.
2. Count by 7s: 70, 77, 84, **91**. So the **7s** crossed it out: 91 = 7 × 13.
3. Its short side is 7, which is less than 10, just as the rule says.

**Example 3. Sieving up to 150.** Which primes would you need?

1. You need every prime whose "itself times itself" is not bigger than 150.
2. 7 × 7 = 49, 11 × 11 = 121, 13 × 13 = 169. 121 is not bigger than 150, but 169 is.
3. So you need **2, 3, 5, 7 and 11**. (11 would cross out 121 and 143 = 11 × 13 as new numbers.)

## Try it

1. Do the sieve yourself on a hundred chart. Use a different colour for each prime's multiples.
2. Which prime crosses out 35 first? Which crosses out 77 first?
3. Is 97 prime? Use the sieve idea: which primes do you need to try?
4. How many primes are there from 1 to 50? From 51 to 100?
5. Which primes would you need to sieve up to 50?
6. A number up to 100 was not crossed out by 2, 3, 5 or 7. It is not 1. What must it be?
7. Why does the sieve never cross out a prime?
8. Twin primes are two primes with just one number between them, like 11 and 13. Find all the twin primes up to 100.

??? note "Answers"
    1. You should end with the 25 primes in the list above. The 2s colour the most numbers, the 7s the fewest new
       ones (just 49, 77 and 91).
    2. **35**: 35 is odd, and not a multiple of 3, so the **5s** cross it out first (35 = 5 × 7). **77**: odd, not a
       multiple of 3 (75, 78) or 5, so the **7s** (77 = 7 × 11).
    3. **Yes.** Try 2 (odd: no), 3 (96, 99: no), 5 (ends in 7: no), 7 (91, 98: no). 11 × 11 = 121 is more than 97,
       so stop. 97 is prime: it is the biggest prime below 100.
    4. **15** primes up to 50 (2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47). So 25 − 15 = **10** from 51
       to 100 (53, 59, 61, 67, 71, 73, 79, 83, 89, 97).
    5. 7 × 7 = 49 is not bigger than 50, so 7 is needed (it crosses out 49). 11 × 11 = 121 is too big. So
       **2, 3, 5 and 7**.
    6. **Prime.** Every composite up to 100 has a prime factor of 2, 3, 5 or 7, so it would have been crossed out.
    7. A prime is only a multiple of 1 and of itself. The sieve never crosses out a number for being a multiple of
       itself (it starts at the second multiple), and it never uses 1. So nothing ever crosses out a prime.
    8. 3 and 5, 5 and 7, 11 and 13, 17 and 19, 29 and 31, 41 and 43, 59 and 61, 71 and 73: **8 pairs**. (Nobody
       knows whether the twin primes go on for ever. It is one of the most famous unsolved questions in math!)

## Common mistake

**Crossing out the prime itself.** When you cross out the multiples of 3, leave 3 standing and start at 6. The prime
is a multiple of itself, but it is still prime.

**Sieving with 9 or 4.** You only sieve with the numbers that are still standing (the primes). The multiples of 4
are already gone, because they are multiples of 2. Sieving with 4 or 9 does no harm, but it does no good either.

**Thinking you must sieve up to 50 for a chart of 100.** You only need primes up to 10 for a chart of 100, because
10 × 10 = 100.

## Where it leads

- Back: [Primes and composites](04-primes-composites.md). Next lesson:
  [Square numbers and the locker puzzle](06-square-numbers-lockers.md).
- This level: [Level 2: Factors and multiples](index.md). The whole topic: [Number theory](../index.md).
- The hundred chart patterns are also in [Multiples](02-multiples.md) and in [Patterns](../../patterns/index.md).
- The idea "you only need to check up to the number that, times itself, passes your number" comes back in level 7,
  as a test for big primes. Computers still use sieves like this one to make lists of primes.
- Twin primes and other unsolved questions about primes are in level 8.
