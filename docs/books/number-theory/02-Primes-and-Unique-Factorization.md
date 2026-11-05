# 2. Primes and unique factorization

*Multiplication builds numbers out of smaller ones: $60 = 2 \cdot 30 = 2 \cdot 2 \cdot 15 = 2 \cdot 2 \cdot 3 \cdot 5$.
Keep breaking and you reach numbers that cannot be broken further: the primes. This chapter asks three questions
about them. How do you find them? Do they ever run out? And is the way a number breaks into primes always the same,
whatever order you break it in? The answer to the last question, the fundamental theorem of arithmetic, is the
foundation everything else in this book stands on, and we prove it in full. Then we use it, and look at what is known
and unknown about the pattern of the primes.*

!!! abstract "In this chapter"

    **You will learn:**

    - what a prime is, why 1 is not one, and how the sieve of Eratosthenes lists them
    - Euclid's proof that there are infinitely many primes, and four other proofs
    - the fundamental theorem of arithmetic, with a complete proof through Euclid's lemma
    - why $\sqrt 2$ is irrational, and how to count and add the divisors of any number
    - that there are arbitrarily long stretches without primes, and infinitely many primes of the form $4k + 3$
    - Mersenne and Fermat primes, and how the largest known primes are found

    **You need:** [Chapter 1](01-Divisibility.md), especially the division algorithm and the well-ordering principle.
    For a gentler version, see the Topics lessons
    [Primes and composites](../../topics/number-theory/level-2/04-primes-composites.md),
    [The sieve of Eratosthenes](../../topics/number-theory/level-2/05-sieve-eratosthenes.md),
    [Prime factorization](../../topics/number-theory/level-3/05-prime-factorization.md),
    [How many factors?](../../topics/number-theory/level-3/06-counting-factors.md),
    [There is no biggest prime](../../topics/number-theory/level-4/05-no-biggest-prime.md) and
    [Unique factorisation, proved](../../topics/number-theory/level-6/06-unique-factorisation.md).

    **Levels:** 2.1, 2.2 and 2.4 are beginner; 2.3 and 2.5 are intermediate; 2.6 is intermediate with an advanced
    aside on the Lucas-Lehmer test.

## 2.1 Primes and the sieve of Eratosthenes

### The definition

**Definition.** An integer $p > 1$ is **prime** if its only positive divisors are 1 and $p$. An integer $n > 1$ that
is not prime is **composite**: it can be written $n = ab$ with $1 < a, b < n$.

The primes below 100 are

$$2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,$$

twenty-five of them. Notice that 2 is the only even prime (every other even number has the divisor 2), which is why
so many statements in number theory begin "let $p$ be an odd prime".

**Why is 1 not a prime?** It has only the divisors 1 and itself, so a naive definition would include it. We exclude it
on purpose. The point of primes is that every number breaks into them in exactly one way (section 2.3). If 1 were a
prime, $6 = 2 \cdot 3 = 1 \cdot 2 \cdot 3 = 1 \cdot 1 \cdot 2 \cdot 3$ would be three different factorizations, and
the theorem would need an awkward exception. Until about 1900 some mathematicians did count 1 as prime; the modern
convention won because it makes theorems cleaner. Definitions in mathematics are chosen, and chosen for a reason.

### Testing one number

To test whether $n$ is prime you do not need to try every number below $n$.

**Lemma 2.1.** If $n > 1$ is composite, then $n$ has a prime divisor $p \le \sqrt n$.

*Proof.* Write $n = ab$ with $1 < a \le b < n$. Then $a^2 \le ab = n$, so $a \le \sqrt n$. Now $a > 1$ has a prime
divisor: the smallest divisor of $a$ that is greater than 1 must be prime, because any divisor of it would be a
smaller divisor of $a$. That prime divides $a$, hence $n$, and is at most $a \le \sqrt n$. $\square$

So to test $n = 221$, try the primes up to $\sqrt{221} \approx 14.9$: 2, 3, 5, 7, 11, 13. The first five fail and
$221 = 13 \cdot 17$. To show 223 is prime, the same six primes all fail, and that is enough. This method is **trial
division**. It is hopeless for numbers of 100 digits (there are about $10^{48}$ primes below $10^{50}$), which is why
[Chapter 12](12-Primality-Factoring-and-RSA.md) needs cleverer tests.

### Listing all primes: the sieve

To list every prime up to $N$, Eratosthenes of Cyrene (third century BC) gave a method that uses no division at all.
Write the numbers $2, 3, \dots, N$. The first number, 2, is prime; cross out all its multiples $4, 6, 8, \dots$. The
next number not crossed out, 3, is prime; cross out its multiples. Continue: each time, the smallest number not yet
crossed out is prime (it has no smaller prime divisor, or it would have been crossed out), and you cross out its
multiples. By Lemma 2.1, you can stop once the prime exceeds $\sqrt N$: everything still standing is prime.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 420" role="img" aria-label="The numbers 1 to 100 in a ten by ten grid; primes green, even numbers orange, odd multiples of 3 blue, and multiples of 5 or 7 with no smaller factor struck through">
  <rect x="20" y="10" width="36" height="36" fill="none" stroke="currentColor" stroke-width="0.6"/>
  <text x="38" y="33" text-anchor="middle" font-size="13" fill="currentColor">1</text>
  <rect x="56" y="10" width="36" height="36" fill="#7ccf9a" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="74" y="33" text-anchor="middle" font-size="13" fill="currentColor">2</text>
  <rect x="92" y="10" width="36" height="36" fill="#7ccf9a" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="110" y="33" text-anchor="middle" font-size="13" fill="currentColor">3</text>
  <rect x="128" y="10" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="146" y="33" text-anchor="middle" font-size="13" fill="currentColor">4</text>
  <rect x="164" y="10" width="36" height="36" fill="#7ccf9a" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="182" y="33" text-anchor="middle" font-size="13" fill="currentColor">5</text>
  <rect x="200" y="10" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="218" y="33" text-anchor="middle" font-size="13" fill="currentColor">6</text>
  <rect x="236" y="10" width="36" height="36" fill="#7ccf9a" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="254" y="33" text-anchor="middle" font-size="13" fill="currentColor">7</text>
  <rect x="272" y="10" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="290" y="33" text-anchor="middle" font-size="13" fill="currentColor">8</text>
  <rect x="308" y="10" width="36" height="36" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="326" y="33" text-anchor="middle" font-size="13" fill="currentColor">9</text>
  <rect x="344" y="10" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="362" y="33" text-anchor="middle" font-size="13" fill="currentColor">10</text>
  <rect x="20" y="46" width="36" height="36" fill="#7ccf9a" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="38" y="69" text-anchor="middle" font-size="13" fill="currentColor">11</text>
  <rect x="56" y="46" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="74" y="69" text-anchor="middle" font-size="13" fill="currentColor">12</text>
  <rect x="92" y="46" width="36" height="36" fill="#7ccf9a" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="110" y="69" text-anchor="middle" font-size="13" fill="currentColor">13</text>
  <rect x="128" y="46" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="146" y="69" text-anchor="middle" font-size="13" fill="currentColor">14</text>
  <rect x="164" y="46" width="36" height="36" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="182" y="69" text-anchor="middle" font-size="13" fill="currentColor">15</text>
  <rect x="200" y="46" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="218" y="69" text-anchor="middle" font-size="13" fill="currentColor">16</text>
  <rect x="236" y="46" width="36" height="36" fill="#7ccf9a" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="254" y="69" text-anchor="middle" font-size="13" fill="currentColor">17</text>
  <rect x="272" y="46" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="290" y="69" text-anchor="middle" font-size="13" fill="currentColor">18</text>
  <rect x="308" y="46" width="36" height="36" fill="#7ccf9a" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="326" y="69" text-anchor="middle" font-size="13" fill="currentColor">19</text>
  <rect x="344" y="46" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="362" y="69" text-anchor="middle" font-size="13" fill="currentColor">20</text>
  <rect x="20" y="82" width="36" height="36" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="38" y="105" text-anchor="middle" font-size="13" fill="currentColor">21</text>
  <rect x="56" y="82" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="74" y="105" text-anchor="middle" font-size="13" fill="currentColor">22</text>
  <rect x="92" y="82" width="36" height="36" fill="#7ccf9a" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="110" y="105" text-anchor="middle" font-size="13" fill="currentColor">23</text>
  <rect x="128" y="82" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="146" y="105" text-anchor="middle" font-size="13" fill="currentColor">24</text>
  <rect x="164" y="82" width="36" height="36" fill="none" stroke="currentColor" stroke-width="0.6"/>
  <line x1="170" y1="112" x2="194" y2="88" stroke="currentColor" stroke-width="1"/>
  <text x="182" y="105" text-anchor="middle" font-size="13" fill="currentColor">25</text>
  <rect x="200" y="82" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="218" y="105" text-anchor="middle" font-size="13" fill="currentColor">26</text>
  <rect x="236" y="82" width="36" height="36" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="254" y="105" text-anchor="middle" font-size="13" fill="currentColor">27</text>
  <rect x="272" y="82" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="290" y="105" text-anchor="middle" font-size="13" fill="currentColor">28</text>
  <rect x="308" y="82" width="36" height="36" fill="#7ccf9a" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="326" y="105" text-anchor="middle" font-size="13" fill="currentColor">29</text>
  <rect x="344" y="82" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="362" y="105" text-anchor="middle" font-size="13" fill="currentColor">30</text>
  <rect x="20" y="118" width="36" height="36" fill="#7ccf9a" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="38" y="141" text-anchor="middle" font-size="13" fill="currentColor">31</text>
  <rect x="56" y="118" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="74" y="141" text-anchor="middle" font-size="13" fill="currentColor">32</text>
  <rect x="92" y="118" width="36" height="36" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="110" y="141" text-anchor="middle" font-size="13" fill="currentColor">33</text>
  <rect x="128" y="118" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="146" y="141" text-anchor="middle" font-size="13" fill="currentColor">34</text>
  <rect x="164" y="118" width="36" height="36" fill="none" stroke="currentColor" stroke-width="0.6"/>
  <line x1="170" y1="148" x2="194" y2="124" stroke="currentColor" stroke-width="1"/>
  <text x="182" y="141" text-anchor="middle" font-size="13" fill="currentColor">35</text>
  <rect x="200" y="118" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="218" y="141" text-anchor="middle" font-size="13" fill="currentColor">36</text>
  <rect x="236" y="118" width="36" height="36" fill="#7ccf9a" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="254" y="141" text-anchor="middle" font-size="13" fill="currentColor">37</text>
  <rect x="272" y="118" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="290" y="141" text-anchor="middle" font-size="13" fill="currentColor">38</text>
  <rect x="308" y="118" width="36" height="36" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="326" y="141" text-anchor="middle" font-size="13" fill="currentColor">39</text>
  <rect x="344" y="118" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="362" y="141" text-anchor="middle" font-size="13" fill="currentColor">40</text>
  <rect x="20" y="154" width="36" height="36" fill="#7ccf9a" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="38" y="177" text-anchor="middle" font-size="13" fill="currentColor">41</text>
  <rect x="56" y="154" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="74" y="177" text-anchor="middle" font-size="13" fill="currentColor">42</text>
  <rect x="92" y="154" width="36" height="36" fill="#7ccf9a" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="110" y="177" text-anchor="middle" font-size="13" fill="currentColor">43</text>
  <rect x="128" y="154" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="146" y="177" text-anchor="middle" font-size="13" fill="currentColor">44</text>
  <rect x="164" y="154" width="36" height="36" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="182" y="177" text-anchor="middle" font-size="13" fill="currentColor">45</text>
  <rect x="200" y="154" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="218" y="177" text-anchor="middle" font-size="13" fill="currentColor">46</text>
  <rect x="236" y="154" width="36" height="36" fill="#7ccf9a" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="254" y="177" text-anchor="middle" font-size="13" fill="currentColor">47</text>
  <rect x="272" y="154" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="290" y="177" text-anchor="middle" font-size="13" fill="currentColor">48</text>
  <rect x="308" y="154" width="36" height="36" fill="none" stroke="currentColor" stroke-width="0.6"/>
  <line x1="314" y1="184" x2="338" y2="160" stroke="currentColor" stroke-width="1"/>
  <text x="326" y="177" text-anchor="middle" font-size="13" fill="currentColor">49</text>
  <rect x="344" y="154" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="362" y="177" text-anchor="middle" font-size="13" fill="currentColor">50</text>
  <rect x="20" y="190" width="36" height="36" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="38" y="213" text-anchor="middle" font-size="13" fill="currentColor">51</text>
  <rect x="56" y="190" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="74" y="213" text-anchor="middle" font-size="13" fill="currentColor">52</text>
  <rect x="92" y="190" width="36" height="36" fill="#7ccf9a" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="110" y="213" text-anchor="middle" font-size="13" fill="currentColor">53</text>
  <rect x="128" y="190" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="146" y="213" text-anchor="middle" font-size="13" fill="currentColor">54</text>
  <rect x="164" y="190" width="36" height="36" fill="none" stroke="currentColor" stroke-width="0.6"/>
  <line x1="170" y1="220" x2="194" y2="196" stroke="currentColor" stroke-width="1"/>
  <text x="182" y="213" text-anchor="middle" font-size="13" fill="currentColor">55</text>
  <rect x="200" y="190" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="218" y="213" text-anchor="middle" font-size="13" fill="currentColor">56</text>
  <rect x="236" y="190" width="36" height="36" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="254" y="213" text-anchor="middle" font-size="13" fill="currentColor">57</text>
  <rect x="272" y="190" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="290" y="213" text-anchor="middle" font-size="13" fill="currentColor">58</text>
  <rect x="308" y="190" width="36" height="36" fill="#7ccf9a" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="326" y="213" text-anchor="middle" font-size="13" fill="currentColor">59</text>
  <rect x="344" y="190" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="362" y="213" text-anchor="middle" font-size="13" fill="currentColor">60</text>
  <rect x="20" y="226" width="36" height="36" fill="#7ccf9a" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="38" y="249" text-anchor="middle" font-size="13" fill="currentColor">61</text>
  <rect x="56" y="226" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="74" y="249" text-anchor="middle" font-size="13" fill="currentColor">62</text>
  <rect x="92" y="226" width="36" height="36" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="110" y="249" text-anchor="middle" font-size="13" fill="currentColor">63</text>
  <rect x="128" y="226" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="146" y="249" text-anchor="middle" font-size="13" fill="currentColor">64</text>
  <rect x="164" y="226" width="36" height="36" fill="none" stroke="currentColor" stroke-width="0.6"/>
  <line x1="170" y1="256" x2="194" y2="232" stroke="currentColor" stroke-width="1"/>
  <text x="182" y="249" text-anchor="middle" font-size="13" fill="currentColor">65</text>
  <rect x="200" y="226" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="218" y="249" text-anchor="middle" font-size="13" fill="currentColor">66</text>
  <rect x="236" y="226" width="36" height="36" fill="#7ccf9a" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="254" y="249" text-anchor="middle" font-size="13" fill="currentColor">67</text>
  <rect x="272" y="226" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="290" y="249" text-anchor="middle" font-size="13" fill="currentColor">68</text>
  <rect x="308" y="226" width="36" height="36" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="326" y="249" text-anchor="middle" font-size="13" fill="currentColor">69</text>
  <rect x="344" y="226" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="362" y="249" text-anchor="middle" font-size="13" fill="currentColor">70</text>
  <rect x="20" y="262" width="36" height="36" fill="#7ccf9a" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="38" y="285" text-anchor="middle" font-size="13" fill="currentColor">71</text>
  <rect x="56" y="262" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="74" y="285" text-anchor="middle" font-size="13" fill="currentColor">72</text>
  <rect x="92" y="262" width="36" height="36" fill="#7ccf9a" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="110" y="285" text-anchor="middle" font-size="13" fill="currentColor">73</text>
  <rect x="128" y="262" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="146" y="285" text-anchor="middle" font-size="13" fill="currentColor">74</text>
  <rect x="164" y="262" width="36" height="36" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="182" y="285" text-anchor="middle" font-size="13" fill="currentColor">75</text>
  <rect x="200" y="262" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="218" y="285" text-anchor="middle" font-size="13" fill="currentColor">76</text>
  <rect x="236" y="262" width="36" height="36" fill="none" stroke="currentColor" stroke-width="0.6"/>
  <line x1="242" y1="292" x2="266" y2="268" stroke="currentColor" stroke-width="1"/>
  <text x="254" y="285" text-anchor="middle" font-size="13" fill="currentColor">77</text>
  <rect x="272" y="262" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="290" y="285" text-anchor="middle" font-size="13" fill="currentColor">78</text>
  <rect x="308" y="262" width="36" height="36" fill="#7ccf9a" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="326" y="285" text-anchor="middle" font-size="13" fill="currentColor">79</text>
  <rect x="344" y="262" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="362" y="285" text-anchor="middle" font-size="13" fill="currentColor">80</text>
  <rect x="20" y="298" width="36" height="36" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="38" y="321" text-anchor="middle" font-size="13" fill="currentColor">81</text>
  <rect x="56" y="298" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="74" y="321" text-anchor="middle" font-size="13" fill="currentColor">82</text>
  <rect x="92" y="298" width="36" height="36" fill="#7ccf9a" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="110" y="321" text-anchor="middle" font-size="13" fill="currentColor">83</text>
  <rect x="128" y="298" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="146" y="321" text-anchor="middle" font-size="13" fill="currentColor">84</text>
  <rect x="164" y="298" width="36" height="36" fill="none" stroke="currentColor" stroke-width="0.6"/>
  <line x1="170" y1="328" x2="194" y2="304" stroke="currentColor" stroke-width="1"/>
  <text x="182" y="321" text-anchor="middle" font-size="13" fill="currentColor">85</text>
  <rect x="200" y="298" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="218" y="321" text-anchor="middle" font-size="13" fill="currentColor">86</text>
  <rect x="236" y="298" width="36" height="36" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="254" y="321" text-anchor="middle" font-size="13" fill="currentColor">87</text>
  <rect x="272" y="298" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="290" y="321" text-anchor="middle" font-size="13" fill="currentColor">88</text>
  <rect x="308" y="298" width="36" height="36" fill="#7ccf9a" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="326" y="321" text-anchor="middle" font-size="13" fill="currentColor">89</text>
  <rect x="344" y="298" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="362" y="321" text-anchor="middle" font-size="13" fill="currentColor">90</text>
  <rect x="20" y="334" width="36" height="36" fill="none" stroke="currentColor" stroke-width="0.6"/>
  <line x1="26" y1="364" x2="50" y2="340" stroke="currentColor" stroke-width="1"/>
  <text x="38" y="357" text-anchor="middle" font-size="13" fill="currentColor">91</text>
  <rect x="56" y="334" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="74" y="357" text-anchor="middle" font-size="13" fill="currentColor">92</text>
  <rect x="92" y="334" width="36" height="36" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="110" y="357" text-anchor="middle" font-size="13" fill="currentColor">93</text>
  <rect x="128" y="334" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="146" y="357" text-anchor="middle" font-size="13" fill="currentColor">94</text>
  <rect x="164" y="334" width="36" height="36" fill="none" stroke="currentColor" stroke-width="0.6"/>
  <line x1="170" y1="364" x2="194" y2="340" stroke="currentColor" stroke-width="1"/>
  <text x="182" y="357" text-anchor="middle" font-size="13" fill="currentColor">95</text>
  <rect x="200" y="334" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="218" y="357" text-anchor="middle" font-size="13" fill="currentColor">96</text>
  <rect x="236" y="334" width="36" height="36" fill="#7ccf9a" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="254" y="357" text-anchor="middle" font-size="13" fill="currentColor">97</text>
  <rect x="272" y="334" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="290" y="357" text-anchor="middle" font-size="13" fill="currentColor">98</text>
  <rect x="308" y="334" width="36" height="36" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="326" y="357" text-anchor="middle" font-size="13" fill="currentColor">99</text>
  <rect x="344" y="334" width="36" height="36" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="362" y="357" text-anchor="middle" font-size="13" fill="currentColor">100</text>
  <rect x="20" y="381" width="14" height="14" fill="#7ccf9a" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="40" y="393" font-size="12" fill="currentColor">prime</text>
  <rect x="95" y="381" width="14" height="14" fill="#eea66f" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="115" y="393" font-size="12" fill="currentColor">crossed by 2</text>
  <rect x="215" y="381" width="14" height="14" fill="#9cc9ea" fill-opacity="0.75" stroke="currentColor" stroke-width="0.6"/>
  <text x="235" y="393" font-size="12" fill="currentColor">first crossed by 3</text>
  <rect x="20" y="401" width="14" height="14" fill="none" stroke="currentColor" stroke-width="0.6"/>
  <line x1="22" y1="413" x2="32" y2="403" stroke="currentColor" stroke-width="1"/>
  <text x="40" y="413" font-size="12" fill="currentColor">first crossed by 5 or 7; 1 is neither prime nor composite</text>
</svg>
</div>

For $N = 100$, $\sqrt{100} = 10$, so sieving by 2, 3, 5 and 7 is enough. The picture shows the result: the green
cells are the 25 primes. Two refinements make the sieve faster. When you sieve by $p$, you may start at $p^2$, because
smaller multiples $kp$ with $k < p$ were already crossed out by a prime factor of $k$; for instance, by the time you
reach 7, the first multiple of 7 still standing is $49$. And the work is small: a number is crossed out once for each
of its prime divisors below $\sqrt N$, and the average number of these grows extremely slowly.

!!! note "Try it in Python"

    ```python
    def sieve(N):
        is_prime = [True] * (N + 1)
        is_prime[0] = is_prime[1] = False
        p = 2
        while p * p <= N:
            if is_prime[p]:
                for m in range(p * p, N + 1, p):
                    is_prime[m] = False
            p += 1
        return [n for n in range(N + 1) if is_prime[n]]

    print(len(sieve(100)), len(sieve(1000)), len(sieve(10**6)))   # 25 168 78498
    ```

<figure class="play" data-play="hundred" data-mode="sieve"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> The sieve of Eratosthenes: cross out the multiples of 2, 3, 5 and 7, and what is left above 1 are the primes up to 100.</figcaption></figure>

## 2.2 Infinitely many primes

The primes thin out: 25 below 100, 168 below 1000, 78,498 below a million. Perhaps they stop? They do not.

### Euclid's proof

**Theorem 2.2 (Euclid).** There are infinitely many primes.

*Proof.* Suppose $p_1, p_2, \dots, p_k$ is any finite list of primes. Let

$$N = p_1 p_2 \cdots p_k + 1 .$$

$N > 1$, so $N$ has a prime divisor $q$ (Lemma 2.1, or $N$ itself if $N$ is prime). If $q$ were one of the $p_i$, then
$q$ would divide both $N$ and $p_1 \cdots p_k$, hence their difference, which is 1. No prime divides 1. So $q$ is a
prime not on the list. Every finite list of primes misses one, so there are infinitely many. $\square$

Euclid's version (*Elements*, Book IX, Proposition 20) says "prime numbers are more than any assigned multitude of
prime numbers". Notice that the proof is **not** a proof by contradiction that assumes "these are all the primes"; it
is a construction that turns any finite list into a longer one. You can run it: from $\{2\}$ you get $N = 3$; from
$\{2, 3\}$ you get $7$; from $\{2, 3, 7\}$ you get $43$; from $\{2, 3, 7, 43\}$ you get $1807 = 13 \cdot 139$, giving
new primes 13 and 139.

**A common mistake.** It is often said that $p_1 p_2 \cdots p_k + 1$ is itself prime. Not so: with the first six
primes, $2 \cdot 3 \cdot 5 \cdot 7 \cdot 11 \cdot 13 + 1 = 30031 = 59 \cdot 509$. The proof only says that its prime
factors are new.

### Four more proofs

Different proofs show different things, and number theorists collect them.

**Proof 2 (factorials).** For $n \ge 1$, any prime $p$ dividing $n! + 1$ is greater than $n$: if $p \le n$ then
$p \mid n!$, so $p \mid (n! + 1) - n! = 1$. So for every $n$ there is a prime bigger than $n$. *Example:*
$7! + 1 = 5041 = 71^2$, and indeed $71 > 7$.

**Proof 3 (Fermat numbers).** The numbers $F_n = 2^{2^n} + 1$ are $F_0 = 3$, $F_1 = 5$, $F_2 = 17$, $F_3 = 257$,
$F_4 = 65537$, ... We show that any two of them have no common factor except 1. First,

$$F_0 F_1 \cdots F_{n-1} = F_n - 2 .$$

This holds for $n = 1$ ($3 = 5 - 2$). If it holds for $n$, then
$F_0 \cdots F_n = (F_n - 2) F_n = (2^{2^n} - 1)(2^{2^n} + 1) = 2^{2^{n+1}} - 1 = F_{n+1} - 2$, so it holds for
$n + 1$. Now if $d$ divides $F_m$ and $F_n$ with $m < n$, then $d$ divides the product on the left and $F_n$, so
$d \mid 2$. All $F_n$ are odd, so $d = 1$. Each $F_n$ has a prime factor, and these are all different. Infinitely many
Fermat numbers give infinitely many primes. (This argument goes back to a 1730 letter from Goldbach to Euler.)

**Proof 4 (Saidak, 2006).** Start with $N_1 = 2$. Since $N_1$ and $N_1 + 1$ share no factor (Chapter 1: consecutive
numbers have no common divisor but 1), $N_2 = N_1(N_1 + 1) = 6$ has at least two different prime factors. Then
$N_3 = N_2(N_2 + 1) = 42$ has at least three, $N_4 = 42 \cdot 43 = 1806$ at least four, and so on: each step adds the
prime factors of $N_k + 1$, which are new. So there are at least $k$ primes for every $k$.

**Proof 5 (Euler, sketch).** Every positive integer is a product of primes in one way (section 2.3). If there were
only finitely many primes $p_1, \dots, p_k$, multiplying out

$$\Bigl(1 + \tfrac{1}{p_1} + \tfrac{1}{p_1^2} + \dots\Bigr)\cdots\Bigl(1 + \tfrac{1}{p_k} + \tfrac{1}{p_k^2} + \dots\Bigr)$$

would give $\sum 1/n$ over all positive integers $n$, each exactly once. The left side is a finite product of
geometric series, each equal to $\frac{1}{1 - 1/p_i}$: a finite number. The right side is the harmonic series, which
is infinite. Contradiction. Euler pushed this much further, to show that $\sum 1/p$ over the primes diverges; that is
[Chapter 13](13-How-Primes-Are-Spread.md), and this product is the seed of the zeta function of
[Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md). (We call this a sketch because rearranging
infinite sums needs care; the full argument is in Chapter 14.)

There is even a proof using topology, by Hillel Furstenberg (1955). That is the charm of the subject: one fact,
seen from every side.

## 2.3 The fundamental theorem of arithmetic

### The statement

**Theorem 2.3 (fundamental theorem of arithmetic).** Every integer $n > 1$ can be written as a product of primes

$$n = p_1 p_2 \cdots p_r,$$

and this is unique apart from the order of the factors: if also $n = q_1 q_2 \cdots q_s$ with all $q_j$ prime, then
$r = s$ and after reordering, $q_i = p_i$ for every $i$.

Grouping equal primes gives the **canonical form** $n = p_1^{a_1} p_2^{a_2} \cdots p_k^{a_k}$ with
$p_1 < p_2 < \dots < p_k$ and every $a_i \ge 1$. For example $720 = 2^4 \cdot 3^2 \cdot 5$ and $2026 = 2 \cdot 1013$.

Existence is the easy half. Uniqueness is the deep half, and it is not obvious at all. Why could $n$ not break into
primes in two different ways? The best way to see that something needs proof is to look at a world where it fails.

### A world without unique factorization

Consider only the numbers $1, 5, 9, 13, 17, 21, 25, \dots$, those that leave remainder 1 on division by 4. Multiplying
two of them gives another: $(4a + 1)(4b + 1) = 4(4ab + a + b) + 1$. Call a number in this set "prime here" if it is not
a product of two smaller members (other than 1). Then $9$, $21$ and $49$ are all "prime here": $9 = 3 \cdot 3$, but 3 is
not in the set; similarly $21 = 3 \cdot 7$ and $49 = 7 \cdot 7$. And

$$441 = 9 \cdot 49 = 21 \cdot 21 .$$

Two genuinely different factorizations into "primes". This example is often credited to David Hilbert. So
unique factorization is a property of the ordinary integers that must be **proved**, using something special about
them. That something is Euclid's lemma. (In [Chapter 17](17-Algebraic-Number-Theory.md) you will meet number systems
like $\mathbb{Z}[\sqrt{-5}]$, where $6 = 2 \cdot 3 = (1 + \sqrt{-5})(1 - \sqrt{-5})$, and the repair that
nineteenth-century mathematicians invented for them.)

### Existence

*Proof that a factorization exists.* Suppose not. By well-ordering there is a smallest integer $n > 1$ that is not a
product of primes. Then $n$ is not prime (a prime is a product of one prime), so $n = ab$ with $1 < a, b < n$. Being
smaller than $n$, both $a$ and $b$ are products of primes. Then so is $n = ab$. Contradiction. $\square$

### Euclid's lemma

**Lemma 2.4 (Euclid's lemma).** If a prime $p$ divides a product $ab$, then $p \mid a$ or $p \mid b$.

This fails for composite numbers: $6 \mid 4 \cdot 9$ but $6 \nmid 4$ and $6 \nmid 9$. It also fails in the
"numbers $4k+1$" world: 21 divides $9 \cdot 49$ there, but divides neither. The proof must use something true of the
integers and false there. We use the division algorithm; [Chapter 3](03-GCD-and-Euclids-Algorithm.md) gives a second
proof through Bézout's identity.

*Proof.* Suppose $p \mid ab$ and $p \nmid a$. We show $p \mid b$. Consider the set

$$S = \{\, x \ge 1 : p \mid xb \,\}.$$

It contains $p$ (since $p \mid pb$) and $a$ (since $p \mid ab$). By well-ordering it has a smallest element $d$.

*Claim: $d$ divides every element of $S$.* Take $x \in S$ and divide: $x = qd + r$ with $0 \le r < d$. Then
$rb = xb - q(db)$. Both $xb$ and $db$ are multiples of $p$, so $p \mid rb$ by Theorem 1.1. If $r \ge 1$, then $r$ would
be an element of $S$ smaller than $d$, which is impossible. So $r = 0$ and $d \mid x$.

Now apply the claim to $p \in S$: $d \mid p$, so $d = 1$ or $d = p$, because $p$ is prime. Apply it to $a \in S$:
$d \mid a$. If $d = p$ then $p \mid a$, which we assumed false. So $d = 1$, and $1 \in S$ means $p \mid 1 \cdot b = b$.
$\square$

Where did primality enter? Only in "$d \mid p$ means $d = 1$ or $d = p$". Where did the integers enter? In the division
algorithm, which needs that we can divide with a remainder smaller than the divisor. The "numbers $4k+1$" world has no
such division, and the lemma fails there.

By induction, the lemma extends to many factors: **if $p \mid a_1 a_2 \cdots a_m$, then $p$ divides some $a_i$.** (If
$p \mid a_1 (a_2 \cdots a_m)$, either $p \mid a_1$ or $p$ divides the shorter product.) In particular, if a prime $p$
divides a product of primes $q_1 \cdots q_m$, then $p = q_i$ for some $i$, because the only prime divisor of the prime
$q_i$ is $q_i$ itself.

### Uniqueness

*Proof that the factorization is unique.* Suppose some integer has two different factorizations, and let $n$ be the
smallest such integer:

$$n = p_1 p_2 \cdots p_r = q_1 q_2 \cdots q_s .$$

The prime $p_1$ divides $q_1 \cdots q_s$, so by Euclid's lemma $p_1 = q_j$ for some $j$. Reorder so that $j = 1$, and
cancel: $n / p_1 = p_2 \cdots p_r = q_2 \cdots q_s$. If $n / p_1 = 1$, both remaining products are empty, so $r = s = 1$
and the two factorizations were the same. Otherwise $n/p_1$ is an integer greater than 1 and smaller than $n$, with two
factorizations that differ (since the original two differed and we removed the same prime from each). That contradicts
the choice of $n$ as the smallest. $\square$

That completes the proof of Theorem 2.3. It is worth noticing how much rests on it: every time you "cancel a common
factor" or "compare prime factorizations", you are using it.

## 2.4 Consequences

### Irrational square roots

**Theorem 2.5.** $\sqrt 2$ is irrational: there are no positive integers $a, b$ with $a^2 = 2b^2$.

*Proof.* Count the factors of 2. In the prime factorization of $a^2$, each prime appears twice as often as in $a$, so 2
appears an **even** number of times (possibly zero). In $2b^2$, 2 appears an even number of times from $b^2$, plus one
more: an **odd** number. By uniqueness, $a^2 = 2b^2$ is impossible. $\square$

The same argument proves much more. **If $n$ is a positive integer that is not a perfect square, then $\sqrt n$ is
irrational.** *Proof.* If $n$ is not a square, some prime $p$ appears in $n$ to an odd power. If $a^2 = n b^2$, then $p$
appears an even number of times on the left and an odd number on the right. $\square$ So $\sqrt 3$, $\sqrt 5$,
$\sqrt{12}$ and $\sqrt{2026}$ are all irrational, while $\sqrt{2025} = 45$.

**Logarithms too.** $\log_2 3$ is irrational. If $\log_2 3 = a/b$ with positive integers $a, b$, then $2^{a/b} = 3$,
so $2^a = 3^b$. The left side is even and the right side is odd. Contradiction. This is why no number of perfect
fifths (frequency ratio $3/2$) ever stacks up to an exact number of octaves (ratio 2): a musical fact that comes
straight from unique factorization.

### Counting divisors

If $n = p_1^{a_1} \cdots p_k^{a_k}$, what are its divisors? If $d \mid n$ then $n = de$, and by uniqueness the prime
factorization of $d$ uses only the primes $p_i$, each to a power at most $a_i$. Conversely every such product divides
$n$. So:

**Theorem 2.6.** The positive divisors of $n = p_1^{a_1} \cdots p_k^{a_k}$ are exactly the numbers
$p_1^{b_1} \cdots p_k^{b_k}$ with $0 \le b_i \le a_i$. Hence the number of positive divisors, written $\tau(n)$ (the
Greek letter tau; some books write $d(n)$), is

$$\tau(n) = (a_1 + 1)(a_2 + 1) \cdots (a_k + 1),$$

and the sum of the positive divisors, written $\sigma(n)$ (sigma), is

$$\sigma(n) = \bigl(1 + p_1 + \dots + p_1^{a_1}\bigr) \cdots \bigl(1 + p_k + \dots + p_k^{a_k}\bigr) = \prod_{i=1}^{k} \frac{p_i^{a_i + 1} - 1}{p_i - 1}.$$

*Proof.* For $\tau$: each exponent $b_i$ has $a_i + 1$ choices, independently, and different choices give different
numbers (uniqueness again). For $\sigma$: multiply out the product of brackets. Each term of the expansion picks one
power $p_i^{b_i}$ from each bracket and multiplies them, so the expansion is exactly the sum of all divisors, each once.
The last form uses the geometric sum $1 + p + \dots + p^a = \frac{p^{a+1} - 1}{p - 1}$. $\square$

The symbol $\prod$ (capital pi) means a product, as $\sum$ means a sum.

**Example 1.** $12 = 2^2 \cdot 3$. $\tau(12) = 3 \cdot 2 = 6$: the divisors are $1, 2, 3, 4, 6, 12$.
$\sigma(12) = (1 + 2 + 4)(1 + 3) = 7 \cdot 4 = 28$. *Check:* $1 + 2 + 3 + 4 + 6 + 12 = 28$.

**Example 2.** $720 = 2^4 \cdot 3^2 \cdot 5$. $\tau(720) = 5 \cdot 3 \cdot 2 = 30$ and
$\sigma(720) = 31 \cdot 13 \cdot 6 = 2418$.

**Example 3.** What is the smallest number with exactly 12 divisors? We need $(a_1 + 1)(a_2 + 1)\cdots = 12$, and to
make the number small we put the largest exponents on the smallest primes. The options are $12$ (giving $2^{11}$),
$6 \cdot 2$ ($2^5 \cdot 3 = 96$), $4 \cdot 3$ ($2^3 \cdot 3^2 = 72$) and $3 \cdot 2 \cdot 2$ ($2^2 \cdot 3 \cdot 5 = 60$).
The smallest is 60. The ancient Babylonians, who counted in sixties, may have liked 60 for exactly this reason: it
divides evenly in many ways.

**Example 4 (the locker puzzle).** $\tau(n)$ is odd exactly when every $a_i$ is even, that is, when $n$ is a perfect
square. (Directly: divisors come in pairs $d, n/d$, and the pair collapses only when $d = n/d$.) In the classic puzzle,
100 lockers start closed and student $k$ toggles every $k$-th locker; locker $n$ is toggled $\tau(n)$ times, so at the
end the open lockers are $1, 4, 9, \dots, 100$.

### Greatest common divisors and least common multiples by exponents

If $a = \prod p_i^{a_i}$ and $b = \prod p_i^{b_i}$ (allowing exponents 0, so both use the same list of primes), then by
Theorem 2.6 the common divisors are the $\prod p_i^{c_i}$ with $c_i \le \min(a_i, b_i)$, and the common multiples are
the multiples of $\prod p_i^{\max(a_i, b_i)}$. So

$$\gcd(a, b) = \prod p_i^{\min(a_i, b_i)}, \qquad \operatorname{lcm}(a, b) = \prod p_i^{\max(a_i, b_i)} .$$

Since $\min(x, y) + \max(x, y) = x + y$, it follows that $\gcd(a, b) \cdot \operatorname{lcm}(a, b) = ab$.
[Chapter 3](03-GCD-and-Euclids-Algorithm.md) takes this up, and shows how to find the gcd **without** factoring,
which matters because factoring is hard.

## 2.5 Gaps and patterns

### Long gaps

Between 89 and 97 there are seven composite numbers in a row. Can gaps be as long as you like?

**Theorem 2.7.** For every $n \ge 1$ there are $n$ consecutive composite numbers.

*Proof.* Take $(n + 1)! + 2,\ (n + 1)! + 3,\ \dots,\ (n + 1)! + (n + 1)$. For $2 \le k \le n + 1$, $k$ divides
$(n + 1)!$ and $k$, so $k \mid (n + 1)! + k$; and $(n + 1)! + k > k$, so it is composite. That is $n$ numbers. $\square$

The numbers in the proof are huge and the true gaps appear much earlier (a gap of 13 composites follows 113, long before
$14! + 2$), but the proof shows that the primes, although infinite, have holes of every size. On average the gap near
$x$ has length about $\ln x$, the natural logarithm; that is the prime number theorem of
[Chapter 14](14-The-Zeta-Function-and-the-Prime-Number-Theorem.md).

### Small gaps and other open questions

At the other end, **twin primes** are pairs $p, p + 2$ both prime: $(3, 5)$, $(5, 7)$, $(11, 13)$, $(17, 19)$,
$(29, 31)$, $(41, 43)$, ... Nobody knows whether there are infinitely many. Edmund Landau listed four problems about
primes at the International Congress of Mathematicians in 1912 as unattackable with the methods of his time; all four
are still open:

- Goldbach: every even number greater than 2 is a sum of two primes.
- Twin primes: there are infinitely many.
- Legendre: there is always a prime between $n^2$ and $(n + 1)^2$.
- There are infinitely many primes of the form $n^2 + 1$ ($2, 5, 17, 37, 101, \dots$).

[Chapter 13](13-How-Primes-Are-Spread.md) and [Chapter 21](21-Where-Number-Theory-Goes.md) describe the remarkable
partial progress, such as Yitang Zhang's 2013 proof that some gap below 70 million occurs infinitely often.

### Primes in the two lanes $4k + 1$ and $4k + 3$

Every odd prime leaves remainder 1 or 3 on division by 4. Below 100 there are 11 primes of the form $4k + 1$
($5, 13, 17, 29, 37, 41, 53, 61, 73, 89, 97$) and 13 of the form $4k + 3$. Are both lanes infinite?

**Theorem 2.8.** There are infinitely many primes of the form $4k + 3$.

*Proof.* Let $p_1, \dots, p_k$ be any finite list of primes of the form $4k + 3$, and put

$$N = 4 p_1 p_2 \cdots p_k - 1 .$$

$N$ is odd and leaves remainder 3 on division by 4. Its prime factors are all odd, so each has the form $4j + 1$ or
$4j + 3$. They cannot all be $4j + 1$: a product of numbers of the form $4j + 1$ is again of that form
($(4a + 1)(4b + 1) = 4(4ab + a + b) + 1$), and $N$ is not. So some prime $q \mid N$ has the form $4j + 3$. If $q$ were
one of the $p_i$, it would divide $4 p_1 \cdots p_k - N = 1$. So $q$ is a new prime of the form $4j + 3$. $\square$

*Example.* From the list $3, 7, 11$: $N = 4 \cdot 3 \cdot 7 \cdot 11 - 1 = 923 = 13 \cdot 71$, and $71 = 4 \cdot 17 + 3$
is new. (13 is of the form $4k + 1$, which is allowed; the proof only promises at least one factor in the right lane.)

Why does the same trick not work for $4k + 1$? Because a product of numbers of the form $4j + 3$ can be of the form
$4j + 1$ (for example $3 \cdot 7 = 21$), so $4 p_1 \cdots p_k + 1$ could have all its prime factors in the wrong lane.
A different trick works, using $N = (2 p_1 \cdots p_k)^2 + 1$ and a fact about primes dividing $x^2 + 1$ that needs
Fermat's little theorem; you will do it in [Chapter 5](05-Fermat-Euler-and-Wilson.md), exercise 11. The same idea
gives infinitely many primes of the form $6k + 5$ (exercise 8 below). The general statement, that every lane
$a, a + n, a + 2n, \dots$ with $\gcd(a, n) = 1$ contains infinitely many primes, is **Dirichlet's theorem** (1837), and
its proof needs the analysis of [Chapter 15](15-Primes-in-Progressions.md).

A curiosity: in the race between the two lanes, the $4k + 3$ lane is ahead most of the time, a bias Chebyshev noticed
in 1853. The lead changes hands infinitely often (Littlewood, 1914), but the first change happens only at 26,861. Michael
Rubinstein and Peter Sarnak (1994) explained the size of the bias, assuming the generalised Riemann hypothesis of
Chapter 15.

## 2.6 Mersenne and Fermat primes

### Mersenne primes

Numbers one less than a power of 2, $M_n = 2^n - 1$, are named after the French friar Marin Mersenne (1588-1648),
who corresponded with almost every mathematician of his day and published a list of exponents he claimed gave primes.

**Theorem 2.9.** If $2^n - 1$ is prime, then $n$ is prime.

*Proof.* If $n = ab$ with $1 < a < n$, use the factorisation $x^b - 1 = (x - 1)(x^{b-1} + \dots + x + 1)$ with
$x = 2^a$:

$$2^{ab} - 1 = (2^a - 1)\bigl(2^{a(b-1)} + 2^{a(b-2)} + \dots + 2^a + 1\bigr).$$

The first factor is between 1 and $2^n - 1$ (since $1 < a < n$), so $2^n - 1$ is composite. $\square$

The converse fails: $2^{11} - 1 = 2047 = 23 \cdot 89$. For prime exponents up to 31, $M_p$ is prime for
$p = 2, 3, 5, 7, 13, 17, 19, 31$ and composite for $p = 11, 23, 29$. Mersenne primes matter for two reasons. They give
the even perfect numbers ([Chapter 6](06-The-Chinese-Remainder-Theorem-and-Multiplicative-Functions.md):
$2^{p-1}(2^p - 1)$ is perfect when $2^p - 1$ is prime, and every even perfect number has this form). And they are easy to
test, which is why they hold the records.

*Level: advanced (this paragraph only).* The **Lucas-Lehmer test**: for an odd prime $p$, define $s_0 = 4$ and
$s_{i+1} = s_i^2 - 2$. Then $M_p$ is prime if and only if $M_p$ divides $s_{p-2}$. For $p = 5$: $s_0 = 4$, $s_1 = 14$,
$s_2 = 194$, $s_3 = 37634$, and $37634 = 31 \cdot 1214$, so $M_5 = 31$ is prime. In practice each $s_i$ is reduced
by its remainder on division by $M_p$, so the numbers never get bigger than $M_p$, and the test needs only $p - 2$
squarings. Édouard Lucas used his method to show $2^{127} - 1$ is prime in 1876; Derrick Lehmer sharpened it in the
1930s. The proof uses arithmetic in a number system containing $\sqrt 3$ and is beyond this chapter; see Crandall and
Pomerance in Further reading.

### The largest known primes

Almost every record prime since the 1950s has been a Mersenne prime found by computer, because the Lucas-Lehmer test
is so much faster than any test for a general number of the same size. Since 1996 the volunteer project GIMPS (the
Great Internet Mersenne Prime Search) has found all of them. As of 2024, 52 Mersenne primes were known, and the
largest known prime was $2^{136{,}279{,}841} - 1$, a number with 41,024,320 decimal digits, found in October 2024. That
record may have been broken by the time you read this; the GIMPS website keeps the current list. Whether there are
infinitely many Mersenne primes is unknown, though heuristics suggest yes.

### Fermat primes

Fermat looked at numbers one **more** than a power of 2.

**Theorem 2.10.** If $2^m + 1$ is prime and $m \ge 1$, then $m$ is a power of 2.

*Proof.* If $m$ has an odd factor $b > 1$, write $m = ab$. For odd $b$, $x^b + 1 = (x + 1)(x^{b-1} - x^{b-2} + \dots - x + 1)$
(substitute $-x$ into the formula for $x^b - 1$ and change signs). With $x = 2^a$, the factor $2^a + 1$ lies strictly
between 1 and $2^m + 1$. So $2^m + 1$ is composite. $\square$

So the candidates are the Fermat numbers $F_n = 2^{2^n} + 1$ of section 2.2. $F_0, \dots, F_4 = 3, 5, 17, 257, 65537$
are prime, and in a 1640 letter Fermat conjectured that all $F_n$ are prime. Euler showed in 1732 that

$$F_5 = 2^{32} + 1 = 4{,}294{,}967{,}297 = 641 \cdot 6{,}700{,}417 .$$

No further Fermat prime has ever been found; every $F_n$ that has been checked, for $5 \le n \le 32$ and many larger
$n$, is composite. Exercise 12 shows how Euler could have found 641 without trying hundreds of divisors.

Fermat primes turned up in an unexpected place. In 1796 the eighteen-year-old Gauss showed that a regular 17-sided
polygon can be constructed with ruler and compass, and later stated that a regular $n$-gon is constructible exactly
when $n$ is a power of 2 times a product of **distinct** Fermat primes (the "only if" was completed by Pierre Wantzel
in 1837). So the five known Fermat primes decide which regular polygons the Greeks could have drawn; see
[Geometry, chapter 14](../geometry/14-Constructions-and-Impossibility.md).

## A short history thread

The Pythagoreans of the sixth and fifth centuries BC studied primes, perfect numbers and figurate numbers, though
little of their work survives directly. Euclid's *Elements* (about 300 BC) proves Euclid's lemma (Book VII,
Proposition 30), the infinitude of primes (Book IX, Proposition 20) and the perfect-number formula (Book IX,
Proposition 36). It does **not** state unique factorization in full; the first clear statement and proof is in Gauss's
*Disquisitiones Arithmeticae* (1801), article 16, although earlier writers, including Kamāl al-Dīn al-Fārisī around
1300, came close to it.

The sieve is credited to Eratosthenes through a description by Nicomachus of Gerasa (about AD 100). Fermat, Mersenne
and their correspondents in the 1630s and 1640s turned questions about primes of special forms into a research
programme, and Euler answered many of them in the next century. The discovery that unique factorization can fail in
larger number systems came in the 1840s, from work of Ernst Kummer on Fermat's Last Theorem; Chapter 17 tells that
story.

## Check yourself

??? question "1. Is 437 prime? Is 439?"

    $\sqrt{437} \approx 20.9$ and $\sqrt{439} \approx 20.95$, so try the primes 2, 3, 5, 7, 11, 13, 17, 19.
    $437 = 19 \cdot 23$, so 437 is composite. For 439: it is odd; digit sum 16, not a multiple of 3; does not end in
    0 or 5; $439 = 7 \cdot 62 + 5$; $= 11 \cdot 39 + 10$; $= 13 \cdot 33 + 10$; $= 17 \cdot 25 + 14$;
    $= 19 \cdot 23 + 2$. No prime up to $\sqrt{439}$ divides it, so 439 is prime.

??? question "2. Run Euclid's construction starting from the list $\{2, 5\}$ until you have five primes."

    $2 \cdot 5 + 1 = 11$, prime. List $\{2, 5, 11\}$: $2 \cdot 5 \cdot 11 + 1 = 111 = 3 \cdot 37$, giving 3 and 37.
    That is five primes: $2, 3, 5, 11, 37$. (Taking all new factors at once is allowed; the proof only needs one.)

??? question "3. Find the canonical factorization of 2310 and of 1001, then $\tau$ and $\sigma$ of each."

    $2310 = 2 \cdot 3 \cdot 5 \cdot 7 \cdot 11$: $\tau = 2^5 = 32$, $\sigma = 3 \cdot 4 \cdot 6 \cdot 8 \cdot 12 = 6912$.

    $1001 = 7 \cdot 11 \cdot 13$: $\tau = 8$, $\sigma = 8 \cdot 12 \cdot 14 = 1344$.
    *Check:* $1 + 7 + 11 + 13 + 77 + 91 + 143 + 1001 = 1344$.

??? question "4. Prove that $\sqrt[3]{2}$ is irrational."

    If $\sqrt[3]{2} = a/b$ with positive integers $a, b$, then $a^3 = 2b^3$. The power of 2 in $a^3$ is a multiple of 3;
    in $2b^3$ it is one more than a multiple of 3. By unique factorization this is impossible.

??? question "5. Find the smallest positive integer with exactly 24 divisors."

    We need $\prod (a_i + 1) = 24$, and the smallest number puts the largest exponents on the smallest primes. The
    ways to write 24 as a product of factors at least 2, largest first, and the numbers they give:
    $24$: $2^{23}$; $12 \cdot 2$: $2^{11} \cdot 3 = 6144$; $8 \cdot 3$: $2^7 \cdot 3^2 = 1152$;
    $6 \cdot 4$: $2^5 \cdot 3^3 = 864$; $6 \cdot 2 \cdot 2$: $2^5 \cdot 3 \cdot 5 = 480$;
    $4 \cdot 3 \cdot 2$: $2^3 \cdot 3^2 \cdot 5 = 360$; $3 \cdot 2 \cdot 2 \cdot 2$: $2^2 \cdot 3 \cdot 5 \cdot 7 = 420$.
    The smallest is $360 = 2^3 \cdot 3^2 \cdot 5$, with $\tau = 4 \cdot 3 \cdot 2 = 24$.

??? question "6. Show that if $a^2 \mid b^2$ then $a \mid b$ (for positive integers)."

    Compare exponents. If $p$ appears to the power $\alpha$ in $a$ and $\beta$ in $b$, then $a^2 \mid b^2$ means
    $2\alpha \le 2\beta$ for every prime $p$ (Theorem 2.6), so $\alpha \le \beta$ for every $p$, which says $a \mid b$.

??? question "7. Find 10 consecutive composite numbers, first by the proof of Theorem 2.7, then the smallest such run."

    The proof gives $11! + 2, \dots, 11! + 11$, that is $39{,}916{,}802$ to $39{,}916{,}811$. The smallest run: the first
    gap between consecutive primes of at least 11 is between 113 and 127, so $114, 115, \dots, 123$ are ten
    consecutive composites (in fact $114$ to $126$ are thirteen).

??? question "8. Prove there are infinitely many primes of the form $6k + 5$."

    Every prime other than 2 and 3 has the form $6k + 1$ or $6k + 5$, because $6k$, $6k + 2$, $6k + 3$, $6k + 4$ are
    divisible by 2 or 3. Given primes $p_1, \dots, p_k$ of the form $6k + 5$, let $N = 6 p_1 \cdots p_k - 1$, of the
    form $6j + 5$. $N$ is not divisible by 2 or 3, so its prime factors have the form $6j + 1$ or $6j + 5$. A product
    of numbers of the form $6j + 1$ is of that form ($(6a + 1)(6b + 1) = 6(6ab + a + b) + 1$), so some prime factor
    $q$ has the form $6j + 5$. If $q = p_i$, then $q \mid 6 p_1 \cdots p_k - N = 1$; impossible. So $q$ is new.

??? question "9. Is $2^{15} - 1$ prime? Factor it using Theorem 2.9's proof."

    $15 = 3 \cdot 5$, so $2^3 - 1 = 7$ and $2^5 - 1 = 31$ both divide $2^{15} - 1 = 32767$. Indeed
    $32767 = 7 \cdot 31 \cdot 151$.

??? question "10. In the world of numbers $1, 5, 9, 13, \dots$ (remainder 1 on division by 4), find another number with two different factorizations into 'primes here'."

    $693 = 9 \cdot 77 = 21 \cdot 33$. Here $9 = 3 \cdot 3$, $77 = 7 \cdot 11$, $21 = 3 \cdot 7$, $33 = 3 \cdot 11$:
    each is a product of two primes of the form $4k + 3$, so none of them splits inside the set, and all four are
    "prime here". The general recipe: take primes $p, q, r, s$ of the form $4k + 3$ (repeats allowed) and compare
    $(pq)(rs)$ with $(pr)(qs)$.

??? question "11. Show that $n^4 + 4$ is composite for every $n > 1$."

    Sophie Germain's identity: $n^4 + 4 = (n^2 + 2)^2 - 4n^2 = (n^2 - 2n + 2)(n^2 + 2n + 2)$. For $n > 1$ the
    smaller factor is $(n - 1)^2 + 1 \ge 2$, so both factors exceed 1. *Check:* $3^4 + 4 = 85 = 5 \cdot 17$.

??? question "12. Euler knew that every prime factor of $F_5 = 2^{32} + 1$ has the form $64k + 1$ (the order argument of Chapter 7 proves this). Use it to find the factor 641 quickly, and verify $641 \mid 2^{32} + 1$ by hand."

    The candidates of the form $64k + 1$ are $65 = 5 \cdot 13$ (not prime), $129 = 3 \cdot 43$, $193$, $257$, $321 = 3 \cdot 107$,
    $385$, $449$, $513$, $577$, $641$, ... Testing the primes 193, 257, 449, 577 fails, and 641 works: the fifth prime candidate.

    To verify by hand: $641 = 5 \cdot 2^7 + 1 = 5^4 + 2^4$. From the first form, $5 \cdot 2^7 \equiv -1$ in the sense that
    $641 \mid 5 \cdot 2^7 + 1$, so $641 \mid 5^4 \cdot 2^{28} - 1$ (because $x + 1 \mid x^4 - 1$ with $x = 5 \cdot 2^7$).
    From the second, $641 \mid 5^4 \cdot 2^{28} + 2^{32}$ (multiply $5^4 + 2^4$ by $2^{28}$). Subtract: $641$ divides
    $2^{32} + 1$.

## What you learned

- A prime has exactly two positive divisors, 1 and itself; 1 is not prime, by a choice that keeps factorization unique.
- A composite $n$ has a prime factor at most $\sqrt n$; the sieve of Eratosthenes lists all primes up to $N$ using this.
- There are infinitely many primes (Euclid), and several other proofs show it from different angles.
- Euclid's lemma (if $p \mid ab$ then $p \mid a$ or $p \mid b$) gives the fundamental theorem of arithmetic: every
  $n > 1$ is a product of primes in exactly one way. It is a real theorem: it fails in other number systems.
- From unique factorization: $\sqrt n$ is irrational unless $n$ is a square, and $\tau(n) = \prod (a_i + 1)$,
  $\sigma(n) = \prod \frac{p_i^{a_i + 1} - 1}{p_i - 1}$.
- There are arbitrarily long gaps between primes, and infinitely many primes of the form $4k + 3$; twin primes and
  many other patterns are still open.
- $2^n - 1$ can be prime only for prime $n$ and $2^m + 1$ only for $m$ a power of 2; Mersenne primes hold the size
  records, and only five Fermat primes are known.

**Next:** [Chapter 3](03-GCD-and-Euclids-Algorithm.md), the greatest common divisor, the fastest algorithm in this
book, and what it says about equations like $15x + 21y = 6$.

## Further reading

- Euclid, *Elements*, Books VII and IX (about 300 BC), in T. L. Heath's translation (1908).
- Carl Friedrich Gauss, *Disquisitiones Arithmeticae* (1801); English translation by A. A. Clarke, 1966.
- G. H. Hardy and E. M. Wright, *An Introduction to the Theory of Numbers*, 6th edition, 2008. Chapters 1 and 2.
- Paulo Ribenboim, *The New Book of Prime Number Records*, 1996. Everything about special primes and records.
- Richard Crandall and Carl Pomerance, *Prime Numbers: A Computational Perspective*, 2nd edition, 2005. Includes the
  proof of the Lucas-Lehmer test.
- Martin Aigner and Günter M. Ziegler, *Proofs from THE BOOK*, 6th edition, 2018. Chapter 1 gives six proofs that
  there are infinitely many primes, including Furstenberg's.
- Filip Saidak, "A new proof of Euclid's theorem", *American Mathematical Monthly* 113 (2006).
- On this site: the Topics lessons [Square numbers and the locker puzzle](../../topics/number-theory/level-2/06-square-numbers-lockers.md),
  [Perfect, abundant and deficient numbers](../../topics/number-theory/level-4/06-perfect-numbers.md) and
  [How the primes are spread out](../../topics/number-theory/level-8/04-spread-of-primes.md);
  [Algebra, chapter 18](../algebra/18-Factorization-in-Rings.md) for unique factorization in other rings; the U of T
  guide [MAT240H1 Unit 9: Polynomials, UFD & Resultants](../../uoft/MAT240H1/unit09.md) for unique factorization of
  polynomials; and the cryptography book's chapter
  [The arithmetic of secrets](https://cryptography.akadian.ca/book/03-The-Arithmetic-of-Secrets/), where large
  primes become keys.
