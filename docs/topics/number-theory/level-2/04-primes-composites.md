---
title: "Primes and composites"
---

# Primes and composites

*Number theory · level 2, lesson 4 of 6*

## A question to start

Is 51 a "line-only" number? It is odd, so it does not make 2 rows. It does not end in 0 or 5, so it does not make 5
rows. It looks lonely and line-only.

But try 3 rows: 3 rows of 17 make exactly 51! So 51 is **not** line-only. It was in disguise.

Some numbers can only ever make one array, the long thin line. Others hide their arrays well. In this lesson these
two kinds of numbers get their real names, and you will meet a question that sounds silly but is very important:
**is the number 1 one of them?**

## The idea

### Counting factors

In the [last lesson](03-factors-arrays.md) you found all the factors of a number using arrays. Let us count how many
factors each number from 1 to 12 has.

| Number | Factors | How many |
| --- | --- | --- |
| 1 | 1 | 1 |
| 2 | 1, 2 | 2 |
| 3 | 1, 3 | 2 |
| 4 | 1, 2, 4 | 3 |
| 5 | 1, 5 | 2 |
| 6 | 1, 2, 3, 6 | 4 |
| 7 | 1, 7 | 2 |
| 8 | 1, 2, 4, 8 | 4 |
| 9 | 1, 3, 9 | 3 |
| 10 | 1, 2, 5, 10 | 4 |
| 11 | 1, 11 | 2 |
| 12 | 1, 2, 3, 4, 6, 12 | 6 |

Some numbers have **exactly two** factors: 2, 3, 5, 7, 11. Their only factors are **1 and themselves**. They can only
make the line array: 1 row. These are the line-only numbers from [level 1](../level-1/05-rectangle-numbers.md).

### Primes

A **prime number** (or just a **prime**) is a number with **exactly two factors**: 1 and itself.

The word "prime" comes from an old word meaning "first". Primes are the first, most basic numbers, as you will see
in a moment.

### Composites

A **composite number** is a number with **more than two** factors. 4, 6, 8, 9, 10 and 12 are composite. A composite
number can make a real array, with at least 2 rows and at least 2 in each row.

"Composite" means "put together", like a picture made of many pieces. You will soon see why that is a good name.

### The primes up to 50

Here are the numbers from 1 to 50. The primes are orange. The composites are blue. The number 1 is green, because it
is special.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 380 190" role="img" aria-label="The numbers 1 to 50 in rows of ten. Primes are orange, composites are blue, and 1 is green.">
  <rect x="10" y="5" width="36" height="36" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="28.0" y="27.55" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <rect x="46" y="5" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="64.0" y="27.55" font-size="13" text-anchor="middle" fill="currentColor">2</text>
  <rect x="82" y="5" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="100.0" y="27.55" font-size="13" text-anchor="middle" fill="currentColor">3</text>
  <rect x="118" y="5" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="136.0" y="27.55" font-size="13" text-anchor="middle" fill="currentColor">4</text>
  <rect x="154" y="5" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="172.0" y="27.55" font-size="13" text-anchor="middle" fill="currentColor">5</text>
  <rect x="190" y="5" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="208.0" y="27.55" font-size="13" text-anchor="middle" fill="currentColor">6</text>
  <rect x="226" y="5" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="244.0" y="27.55" font-size="13" text-anchor="middle" fill="currentColor">7</text>
  <rect x="262" y="5" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="280.0" y="27.55" font-size="13" text-anchor="middle" fill="currentColor">8</text>
  <rect x="298" y="5" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="316.0" y="27.55" font-size="13" text-anchor="middle" fill="currentColor">9</text>
  <rect x="334" y="5" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="352.0" y="27.55" font-size="13" text-anchor="middle" fill="currentColor">10</text>
  <rect x="10" y="41" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="28.0" y="63.55" font-size="13" text-anchor="middle" fill="currentColor">11</text>
  <rect x="46" y="41" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="64.0" y="63.55" font-size="13" text-anchor="middle" fill="currentColor">12</text>
  <rect x="82" y="41" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="100.0" y="63.55" font-size="13" text-anchor="middle" fill="currentColor">13</text>
  <rect x="118" y="41" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="136.0" y="63.55" font-size="13" text-anchor="middle" fill="currentColor">14</text>
  <rect x="154" y="41" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="172.0" y="63.55" font-size="13" text-anchor="middle" fill="currentColor">15</text>
  <rect x="190" y="41" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="208.0" y="63.55" font-size="13" text-anchor="middle" fill="currentColor">16</text>
  <rect x="226" y="41" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="244.0" y="63.55" font-size="13" text-anchor="middle" fill="currentColor">17</text>
  <rect x="262" y="41" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="280.0" y="63.55" font-size="13" text-anchor="middle" fill="currentColor">18</text>
  <rect x="298" y="41" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="316.0" y="63.55" font-size="13" text-anchor="middle" fill="currentColor">19</text>
  <rect x="334" y="41" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="352.0" y="63.55" font-size="13" text-anchor="middle" fill="currentColor">20</text>
  <rect x="10" y="77" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="28.0" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">21</text>
  <rect x="46" y="77" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="64.0" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">22</text>
  <rect x="82" y="77" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="100.0" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">23</text>
  <rect x="118" y="77" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="136.0" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">24</text>
  <rect x="154" y="77" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="172.0" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">25</text>
  <rect x="190" y="77" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="208.0" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">26</text>
  <rect x="226" y="77" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="244.0" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">27</text>
  <rect x="262" y="77" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="280.0" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">28</text>
  <rect x="298" y="77" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="316.0" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">29</text>
  <rect x="334" y="77" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="352.0" y="99.55" font-size="13" text-anchor="middle" fill="currentColor">30</text>
  <rect x="10" y="113" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="28.0" y="135.55" font-size="13" text-anchor="middle" fill="currentColor">31</text>
  <rect x="46" y="113" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="64.0" y="135.55" font-size="13" text-anchor="middle" fill="currentColor">32</text>
  <rect x="82" y="113" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="100.0" y="135.55" font-size="13" text-anchor="middle" fill="currentColor">33</text>
  <rect x="118" y="113" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="136.0" y="135.55" font-size="13" text-anchor="middle" fill="currentColor">34</text>
  <rect x="154" y="113" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="172.0" y="135.55" font-size="13" text-anchor="middle" fill="currentColor">35</text>
  <rect x="190" y="113" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="208.0" y="135.55" font-size="13" text-anchor="middle" fill="currentColor">36</text>
  <rect x="226" y="113" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="244.0" y="135.55" font-size="13" text-anchor="middle" fill="currentColor">37</text>
  <rect x="262" y="113" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="280.0" y="135.55" font-size="13" text-anchor="middle" fill="currentColor">38</text>
  <rect x="298" y="113" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="316.0" y="135.55" font-size="13" text-anchor="middle" fill="currentColor">39</text>
  <rect x="334" y="113" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="352.0" y="135.55" font-size="13" text-anchor="middle" fill="currentColor">40</text>
  <rect x="10" y="149" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="28.0" y="171.55" font-size="13" text-anchor="middle" fill="currentColor">41</text>
  <rect x="46" y="149" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="64.0" y="171.55" font-size="13" text-anchor="middle" fill="currentColor">42</text>
  <rect x="82" y="149" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="100.0" y="171.55" font-size="13" text-anchor="middle" fill="currentColor">43</text>
  <rect x="118" y="149" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="136.0" y="171.55" font-size="13" text-anchor="middle" fill="currentColor">44</text>
  <rect x="154" y="149" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="172.0" y="171.55" font-size="13" text-anchor="middle" fill="currentColor">45</text>
  <rect x="190" y="149" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="208.0" y="171.55" font-size="13" text-anchor="middle" fill="currentColor">46</text>
  <rect x="226" y="149" width="36" height="36" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="244.0" y="171.55" font-size="13" text-anchor="middle" fill="currentColor">47</text>
  <rect x="262" y="149" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="280.0" y="171.55" font-size="13" text-anchor="middle" fill="currentColor">48</text>
  <rect x="298" y="149" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="316.0" y="171.55" font-size="13" text-anchor="middle" fill="currentColor">49</text>
  <rect x="334" y="149" width="36" height="36" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="352.0" y="171.55" font-size="13" text-anchor="middle" fill="currentColor">50</text>
</svg>
</div>

The primes up to 50 are:

**2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47**

There are **15** of them. Notice:

- **2 is the only even prime.** Every other even number has 2 as a factor, as well as 1 and itself. So it has at
  least three factors, and it is composite.
- **After 5, no prime ends in 5.** A number ending in 5 has 5 as a factor. So it is composite (unless it is 5
  itself).
- **Primes get rarer, but they never stop.** There are 4 primes from 1 to 10 (2, 3, 5, 7) but only 1 from 91 to 100 (97). Still, a
  very old proof, from more than 2,000 years ago, shows that the primes go on **for ever**. You will meet that proof
  in level 4. The biggest prime anyone had found by 2024 has more than 41 million digits.

### Why 1 is not prime

The number 1 has **only one factor**: itself. A prime needs exactly **two**. So 1 is not prime. And it does not have
more than two factors, so it is not composite either. **1 is neither prime nor composite.** It is in a group all on
its own, called a **unit**.

But here is the deeper reason. Mathematicians **chose** this rule on purpose, because of a wonderful fact about
primes.

### Primes are building blocks

Every composite number can be broken down, by splitting it into factors again and again, until only primes are
left. This drawing is called a **factor tree**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 170" role="img" aria-label="A factor tree: 12 splits into 2 and 6, and 6 splits into 2 and 3. The primes at the ends are 2, 2 and 3.">
  <circle cx="80" cy="25" r="16" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="80" y="30" font-size="14" text-anchor="middle" fill="currentColor">12</text>
  <line x1="80" y1="41" x2="45" y2="69" stroke="currentColor" stroke-width="1.5"/>
  <line x1="80" y1="41" x2="115" y2="69" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="45" cy="85" r="16" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="45" y="90" font-size="14" text-anchor="middle" fill="currentColor">2</text>
  <circle cx="115" cy="85" r="16" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="115" y="90" font-size="14" text-anchor="middle" fill="currentColor">6</text>
  <line x1="115" y1="101" x2="85" y2="129" stroke="currentColor" stroke-width="1.5"/>
  <line x1="115" y1="101" x2="145" y2="129" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="85" cy="145" r="16" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="85" y="150" font-size="14" text-anchor="middle" fill="currentColor">2</text>
  <circle cx="145" cy="145" r="16" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="145" y="150" font-size="14" text-anchor="middle" fill="currentColor">3</text>
  <text x="270" y="90" font-size="15" text-anchor="middle" fill="currentColor">12 = 2 × 2 × 3</text>
</svg>
</div>

12 splits into 2 × 6. 2 is prime, so it stops. 6 splits into 2 × 3, both prime, so they stop. At the ends of the
branches are **2, 2 and 3**. So 12 = 2 × 2 × 3.

Primes are like building blocks, or like the letters of the alphabet. Every number bigger than 1 can be **built by
multiplying primes**. That is why composite numbers are called "put together": they are put together from primes.
And primes cannot be broken down any more; they are the "first" pieces.

Even better: if you start the tree differently, say 12 = 3 × 4 and then 4 = 2 × 2, you still end with **2, 2 and
3**. Every number has **exactly one** set of prime building blocks. Mathematicians call this the **fundamental
theorem of arithmetic**. ("Fundamental" means "at the bottom of everything".) You will prove it much later, in
level 6.

Now imagine 1 were a prime. Then 12 could be 2 × 2 × 3, or 1 × 2 × 2 × 3, or 1 × 1 × 2 × 2 × 3, or with as many 1s
as you like. Multiplying by 1 changes nothing, so you could stick in extra 1s for ever. The beautiful fact "exactly
one set of building blocks" would be spoiled. So mathematicians keep 1 out of the primes, and the rule stays neat.

### How to test if a number is prime

To check whether a number is prime, look for a factor other than 1 and itself. Try 2, 3, 5, 7, ... in turn.

- If one of them divides the number with nothing left over, the number is **composite**.
- If you reach a number that, multiplied by itself, is **bigger** than your number, and nothing has worked, you
  can **stop**: the number is **prime**.

Why can you stop? From [Factors with arrays](03-factors-arrays.md): every array has a short side. If 7 rows of 7
(49) is already more than your number, then any array would need a short side less than 7, and you have tried all of
those.

You only need to try **primes** as factors. If 4 went into a number, then 2 would go into it too (since 4 = 2 × 2),
and you would already have found 2.

## Worked examples

**Example 1. Is 29 prime?**

1. 29 is odd, so 2 is not a factor.
2. 3: count by 3s: 27, 30. 29 is jumped over. Not a factor.
3. 5: 29 does not end in 0 or 5. Not a factor.
4. 7: 7 × 7 = 49, which is bigger than 29. **Stop.**
5. Nothing worked, so **29 is prime**.

**Example 2. Is 91 prime?**

1. 91 is odd: not 2. Count by 3s: 90, 93, so not 3. It does not end in 0 or 5: not 5.
2. 7: count by 7s: 7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, **91**. Yes! 91 = 7 × 13.
3. So **91 is composite**. It is one of the best "disguised" numbers: it looks prime, but it is not.

**Example 3. A factor tree for 30.**

1. 30 = 3 × 10. 3 is prime: stop.
2. 10 = 2 × 5. Both prime: stop.
3. So 30 = 2 × 3 × 5. Its prime building blocks are **2, 3 and 5**.

**Example 4. Prime or composite: 1, 2, 9, 37?**

1. **1**: only one factor. **Neither** prime nor composite.
2. **2**: factors 1 and 2, exactly two. **Prime** (the only even one).
3. **9**: factors 1, 3, 9. Three factors. **Composite** (3 rows of 3).
4. **37**: not 2 (odd), not 3 (36, 39), not 5 (ends in 7). 7 × 7 = 49 is too big, so stop. **Prime**.

## Try it

1. What are the factors of 13? Is 13 prime?
2. Is 21 prime or composite? Draw an array.
3. Why is 1 not a prime number? Give the simple reason.
4. Write down the primes between 20 and 40.
5. Which of these are prime: 33, 41, 49, 53?
6. Make a factor tree for 18. What are its prime building blocks?
7. Make a factor tree for 24 in two different ways. Do you get the same primes at the end?
8. Leo says: "All odd numbers are prime." Find three numbers that show he is wrong.

??? note "Answers"
    1. **1 and 13**. Exactly two factors, so **13 is prime**.
    2. **Composite**: 21 = 3 × 7, so it makes 3 rows of 7. Its factors are 1, 3, 7, 21.
    3. A prime must have **exactly two** factors, and 1 has only **one** (itself). (The deeper reason: if 1 were
       prime, numbers would not have just one set of prime building blocks.)
    4. **23, 29, 31, 37**.
    5. **41 and 53** are prime. 33 = 3 × 11 and 49 = 7 × 7 are composite. (For 41: not 2, 3 or 5, and 7 × 7 = 49 is
       too big. For 53: not 2, 3 (51, 54) or 5; 7 × 7 = 49 and 7 × 8 = 56, so not 7; and 8 × 8 = 64 is too big.)
    6. 18 = 2 × 9, and 9 = 3 × 3. So 18 = **2 × 3 × 3**.
    7. One way: 24 = 4 × 6, 4 = 2 × 2, 6 = 2 × 3, giving 2, 2, 2, 3. Another way: 24 = 2 × 12, 12 = 2 × 6,
       6 = 2 × 3, giving 2, 2, 2, 3. **Yes, the same**: 24 = 2 × 2 × 2 × 3.
    8. For example **9** (3 × 3), **15** (3 × 5), **21** (3 × 7), **25** (5 × 5), **27** (3 × 9). Also **1**, which
       is odd but not prime.

## Common mistake

**Thinking every odd number is prime.** 9, 15, 21, 25, 27, 33, 35, 39, 45, 49, 51 and many more are odd but
composite. Odd only means "2 is not a factor".

**Calling 1 a prime.** It is tempting, because 1 is "only divisible by 1 and itself". But 1 and itself are the
**same** number, so 1 has just one factor. Primes need exactly two.

**Calling 2 composite because it is even.** 2 has only the factors 1 and 2, so it is prime.

## Where it leads

- Back: [Factors with arrays](03-factors-arrays.md). Next lesson:
  [The sieve of Eratosthenes](05-sieve-eratosthenes.md), a clever way to find **all** the primes up to 100.
- This level: [Level 2: Factors and multiples](index.md). The whole topic: [Number theory](../index.md).
- In level 3 you will draw factor trees for big numbers like 360. In level 4 you will see Euclid's proof that the
  primes never run out.
- The secret codes that keep messages safe on the internet are built from very large primes: see
  [cryptography.akadian.ca](https://cryptography.akadian.ca/) when you are older.
