---
title: "There is no biggest prime"
---

# There is no biggest prime

*Number theory · level 4, lesson 5 of 6*

## A question to start

Count the primes in each hundred:

| Numbers | 1-100 | 101-200 | 201-300 | 301-400 | ... | 901-1000 |
| --- | --- | --- | --- | --- | --- | --- |
| Primes | 25 | 21 | 16 | 16 | ... | 14 |

They are thinning out. That makes sense: a big number has many more smaller numbers that might divide it, so it has
more chances to be composite. Up to 1,000 there are 168 primes; up to a million, 78,498, which is fewer than 1 number
in 12.

So do the primes eventually **stop**? Is there a biggest prime, after which every number is composite?

More than 2,000 years ago, Euclid answered this, in Book IX of the *Elements*, with an argument that takes about five
lines. It is often called one of the most beautiful proofs in mathematics. Mathematicians still use it to show young
students what a proof is.

## The idea

### What we want to show

We want to show that **there are infinitely many primes**: however many you list, there are always more.

You cannot check this by listing primes. However far you go, you would still not know whether they stop just after
where you stopped. We need a reason that works for **every** list at once.

Euclid's idea is this: **give me any list of primes, and I will find a prime that is not on it.** If every list misses
a prime, no list can be complete, so the primes never run out.

### Step 1: every number bigger than 1 has a prime factor

Take any whole number bigger than 1, say 91. Its divisors bigger than 1 are 7, 13 and 91. The **smallest** of them is 7,
and 7 is prime.

That always happens: **the smallest divisor bigger than 1 of any number is a prime.** Why? If it were not prime, it
would have a smaller divisor bigger than 1, and that smaller divisor would also divide the number (if 7 divides 91 and
something divides 7, it divides 91 too). Then it would not have been the smallest. So it must be prime.

(You can also see this from the factor trees of [level 3](../level-3/05-prime-factorization.md): every number bigger
than 1 breaks into primes, so it has at least one prime factor.)

### Step 2: multiply the list and add 1

Take any list of primes. Try the list 2, 3, 5. Multiply them all together and add 1:

$$N = 2 \times 3 \times 5 + 1 = 31.$$

Now ask: does 2 divide 31? 3? 5?

- 2 × 3 × 5 = 30 is a multiple of 2, so 31 is **one more than a multiple of 2**. Dividing 31 by 2 leaves remainder 1.
- 30 is a multiple of 3, so 31 leaves remainder 1 when divided by 3.
- 30 is a multiple of 5, so 31 leaves remainder 1 when divided by 5.

So **none of the primes on the list divides $N$**. The number line shows why: 30 is a landing spot for the 2s, the 3s
and the 5s, and 31 is one step past it, where none of them lands.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 130" role="img" aria-label="A number line from 26 to 36. Marks above show the multiples of 2, of 3 and of 5. All three land on 30. None lands on 31, which is circled">
  <line x1="20" y1="90" x2="380" y2="90" stroke="currentColor" stroke-width="1.5"/>
  <line x1="200" y1="18" x2="200" y2="90" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <g fill="#eea66f" stroke="currentColor" stroke-width="1">
    <circle cx="20" cy="30" r="6"/><circle cx="92" cy="30" r="6"/><circle cx="164" cy="30" r="6"/>
    <circle cx="236" cy="30" r="6"/><circle cx="308" cy="30" r="6"/><circle cx="380" cy="30" r="6"/>
  </g>
  <g fill="#9cc9ea" stroke="currentColor" stroke-width="1">
    <circle cx="56" cy="50" r="6"/><circle cx="164" cy="50" r="6"/><circle cx="272" cy="50" r="6"/><circle cx="380" cy="50" r="6"/>
  </g>
  <g fill="#7ccf9a" stroke="currentColor" stroke-width="1">
    <circle cx="164" cy="70" r="6"/><circle cx="344" cy="70" r="6"/>
  </g>
  <circle cx="200" cy="90" r="9" fill="none" stroke="currentColor" stroke-width="2"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="20" y="110">26</text><text x="92" y="110">28</text><text x="164" y="110">30</text><text x="200" y="110">31</text>
    <text x="236" y="110">32</text><text x="308" y="110">34</text><text x="380" y="110">36</text>
  </g>
  <g font-size="11" fill="currentColor">
    <text x="104" y="125">orange: 2s · blue: 3s · green: 5s</text>
  </g>
</svg>
</div>

### Step 3: so there is a prime that is not on the list

By step 1, $N$ has a prime factor (possibly $N$ itself, if $N$ is prime). By step 2, that prime factor is **not** 2, 3
or 5. So it is a prime that was missing from the list. Here $N = 31$ is itself prime, so 31 is the missing prime.

### The proof, for any list

Nothing in steps 2 and 3 used anything special about 2, 3 and 5. Here is the argument for **any** list of primes,
however long.

> Take any finite list of primes. Multiply them all together and add 1; call the result $N$. Each prime on the list
> divides the product, so it leaves remainder 1 when it divides $N$, and so it does not divide $N$. But $N$ is bigger
> than 1, so it has a prime factor. That prime factor is not on the list. So **no finite list contains all the primes**:
> there are infinitely many.

That is the whole proof. It never needed to know how big the primes are or how far apart they are.

### Another way to say it: suppose there were a biggest prime

Many people write Euclid's argument in this form. **Suppose**, just to see what happens, that there were a biggest
prime. Then there would be a complete list of all the primes: 2, 3, 5, 7, ..., up to the biggest one. Multiply them all
and add 1. As above, this number has a prime factor that is not on the list. But the list had **all** the primes. That
is impossible.

So the supposition was wrong: there is no biggest prime. This kind of argument, "suppose the opposite, and show that it
leads to something impossible", is called **proof by contradiction**. You will meet it many more times.

### What the proof does **not** say

It is easy to remember the proof wrongly as "multiply the primes and add 1, and you get a prime". That is **not** what
it says. Look at what happens with the first few primes:

| List | Product + 1 | Prime? |
| --- | --- | --- |
| 2 | 3 | yes |
| 2, 3 | 7 | yes |
| 2, 3, 5 | 31 | yes |
| 2, 3, 5, 7 | 211 | yes |
| 2, 3, 5, 7, 11 | 2,311 | yes |
| 2, 3, 5, 7, 11, 13 | 30,031 | **no**: 30,031 = 59 × 509 |

The first five are prime, which makes the wrong version tempting. But $30{,}031 = 59 \times 509$. The proof still
works: 59 and 509 are both primes that are not on the list 2, 3, 5, 7, 11, 13. The proof only promises that $N$ **has**
a new prime factor, not that $N$ is prime.

Two more things the proof does not say:

- It does not give you the **next** prime. After 13 the next prime is 17, but the proof found 59 and 509.
- It does not say how **often** primes appear. That is a much harder question, answered (roughly) by the prime number
  theorem in [level 8](../level-8/index.md).

And here is something nobody knows: whether infinitely many of the numbers "2 × 3 × 5 × ... × p + 1" are prime. This is
an **open problem**: a question that no one has yet been able to answer.

### The biggest known prime

There is no biggest prime, but there is a biggest **known** prime: the largest one anybody has actually found and
checked. As of late 2024 it is $2^{136{,}279{,}841} - 1$, found in October 2024. Written out, it has 41,024,320 digits.
Primes of the form $2^p - 1$ are called **Mersenne primes**, and you will meet them in
[the next lesson](06-perfect-numbers.md).

## Worked examples

**1. The list 2, 3, 5, 7.**

$N = 2 \times 3 \times 5 \times 7 + 1 = 211$. To check if 211 is prime, test primes up to 13 (since 15 × 15 = 225 is more
than 211): 2, 3, 5 and 7 leave remainder 1 by the proof; 11 gives 211 = 11 × 19 + 2; 13 gives 211 = 13 × 16 + 3. So 211
is prime, and it is the new prime.

**2. A list that is not the first few primes.** Take the list 3, 5.

$N = 3 \times 5 + 1 = 16 = 2^4$. Its only prime factor is 2, which is not on the list. ✓ The proof works for **any** list
of primes, not only "all the primes up to some point".

**3. Another list.** Take 2, 7.

$N = 2 \times 7 + 1 = 15 = 3 \times 5$. Two new primes, 3 and 5, neither on the list.

**4. Why "+ 1" and not "+ 2"?** For the list 2, 3, 5, the number 2 × 3 × 5 + 2 = 32 is a multiple of 2. Adding 2 lets 2
divide the result, and the argument fails. Adding 1 is what guarantees remainder 1 for **every** prime on the list.

**5. A different proof with factorials.** The **factorial** $n!$ means $1 \times 2 \times 3 \times \cdots \times n$.
For example $5! = 120$. Every number from 2 to 5 divides 120, so none of them divides 121. So every prime factor of
$5! + 1 = 121 = 11^2$ is bigger than 5. In general every prime factor of $n! + 1$ is bigger than $n$, so for every $n$
there is a prime bigger than $n$. Another proof that the primes never stop.

## Try it

1. Work out 2 × 3 × 5 × 7 × 11 + 1. Explain why none of 2, 3, 5, 7, 11 divides it.
2. Take the list 5, 7. Work out the product plus 1 and find its prime factors. Are they new?
3. Take the list 2, 3, 7. What new prime does the proof give?
4. Without dividing, explain why 3 does not divide 2 × 3 × 5 × 7 × 11 × 13 + 1.
5. A friend says: "2 × 3 × 5 × 7 × 11 × 13 × 17 + 1 = 510,511 must be prime, by Euclid's proof." Is the friend right?
   (You may use 510,511 = 19 × 26,869.)
6. Find the prime factors of $4! + 1$ and $6! + 1$. Check that they are bigger than 4 and 6.
7. Does Euclid's proof tell you a prime bigger than 1,000 without any division? Explain.
8. Explain, in your own words, the difference between "there is no biggest prime" and "there is no biggest known
   prime".

??? note "Answers"
    1. 2 × 3 × 5 × 7 × 11 = 2,310, so the number is **2,311**. 2,310 is a multiple of each of 2, 3, 5, 7, 11, so 2,311
       is one more than a multiple of each: each leaves remainder 1. (2,311 happens to be prime.)
    2. 5 × 7 + 1 = 36 = $2^2 \times 3^2$. Its prime factors are **2 and 3**, both new.
    3. 2 × 3 × 7 + 1 = **43**, which is prime (it is not divisible by 2, 3, 5 or 7, and 7 × 7 = 49 is more than 43).
    4. The product 2 × 3 × 5 × 7 × 11 × 13 is a multiple of 3, so adding 1 makes a number one more than a multiple of 3.
       It leaves remainder 1.
    5. **No.** The proof does not say the number is prime, only that its prime factors are not on the list. In fact
       510,511 = 19 × 26,869 (and 26,869 = 97 × 277). The proof is still fine: 19, 97 and 277 are all new primes.
    6. $4! + 1 = 25 = 5^2$: prime factor 5, bigger than 4. $6! + 1 = 721 = 7 \times 103$: prime factors 7 and 103, both
       bigger than 6.
    7. **Not without work.** Take every prime up to 1,000, multiply and add 1. The answer has a prime factor that is not
       on the list, so bigger than 1,000. But the proof does not say what that factor is: you would have to find it by
       dividing, and the number has hundreds of digits. The proof shows that such a prime **exists**; it does not hand
       it to you.
    8. "No biggest prime" is a fact about all numbers: the primes go on forever (Euclid's proof). "Biggest known prime"
       is about what people have found so far. It changes every time someone finds a bigger one, which they can always
       try to do because there are always more.

## Common mistake

**"Multiply the primes and add 1, and you always get a prime."** False: 2 × 3 × 5 × 7 × 11 × 13 + 1 = 30,031 = 59 × 509.
The new number has a prime factor that is not on the list; it need not be prime itself.

**Thinking the proof only works for "the first few primes".** It works for any finite list of primes at all, like 3, 5
or 2, 7. That generality is what makes it a proof about all lists, and so about all primes.

## Where it leads

- Back: [Euclid's algorithm](04-euclids-algorithm.md) · Next: [Perfect, abundant and deficient numbers](06-perfect-numbers.md),
  where Mersenne primes build perfect numbers.
- [Level 4 page](index.md) · [Number theory topic page](../index.md)
- How the primes are spread out, and gaps between primes as long as you like: [level 8](../level-8/index.md).
- Proof by contradiction is a main tool of [Logic](../../logic/index.md), and "there are infinitely many" is the start
  of [Infinity](../../infinity/index.md).
- At university, proof by contradiction is one of the first proof methods taught:
  [U of T MAT137, Unit 1: Logic, Sets & Proofs](../../../uoft/MAT137/unit01.md).
