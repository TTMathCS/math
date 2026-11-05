---
title: "Sequences that settle down"
---

# Sequences that settle down

*Infinity and strange math · level 5, lesson 1 of 6*

## A question to start

Write down the numbers

$$1,\ \frac12,\ \frac13,\ \frac14,\ \frac15,\ \ldots$$

and keep going forever. None of them is ever 0. Every one is a little bigger than 0. And yet everybody who looks at
this list says the same thing: "it is heading for 0".

Now look at this list instead:

$$-1,\ 1,\ -1,\ 1,\ -1,\ 1,\ \ldots$$

It also goes on forever, and it also keeps visiting the same numbers. Is it "heading for" anything? For 1? For $-1$?
For 0, which is halfway between?

And one more:

$$2,\ 1.5,\ 1.333\ldots,\ 1.25,\ 1.2,\ \ldots$$

Each number is closer to 0 than the one before. Is this list heading for 0?

To answer these questions properly, we need one of the most important ideas in all of mathematics: the **limit**.
This lesson builds it slowly, from a game.

## The idea

### Sequences and terms

A **sequence** is a list of numbers in order that goes on forever: a first number, a second, a third, and so on.
Each number in the list is called a **term**. We usually name the terms with one letter and a small number
underneath, called a **subscript**, that says the position:

$$a_1,\ a_2,\ a_3,\ a_4,\ \ldots$$

$a_1$ is read "a one" and means the first term; $a_n$ means the term in position $n$. Often there is a rule that
gives the term from its position, like $a_n = \dfrac1n$. Then $a_1 = 1$, $a_2 = \dfrac12$, $a_{10} = \dfrac{1}{10}$,
and $a_{1000} = \dfrac{1}{1000}$. You met sequences with rules in [Patterns](../../patterns/index.md); here we only
care about one question: **what happens far along the list?**

### Picture it

Here are the first 40 terms of $\dfrac1n$ as dots on a number line.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 100" role="img" aria-label="The numbers 1, 1/2, 1/3, 1/4 and so on as dots on a number line, crowding towards 0; a shaded window from minus 0.1 to 0.1 contains every dot from the eleventh on">
  <rect x="12.0" y="40" width="76.0" height="30" fill="#7ccf9a" fill-opacity="0.35"/>
  <line x1="20.0" y1="55.0" x2="445.0" y2="55.0" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="430.0" cy="55.0" r="4" fill="#eea66f"/>
  <circle cx="240.0" cy="55.0" r="4" fill="#eea66f"/>
  <circle cx="176.7" cy="55.0" r="4" fill="#eea66f"/>
  <circle cx="145.0" cy="55.0" r="4" fill="#eea66f"/>
  <circle cx="126.0" cy="55.0" r="4" fill="#eea66f"/>
  <circle cx="113.3" cy="55.0" r="4" fill="#eea66f"/>
  <circle cx="104.3" cy="55.0" r="4" fill="#eea66f"/>
  <circle cx="97.5" cy="55.0" r="4" fill="#eea66f"/>
  <circle cx="92.2" cy="55.0" r="4" fill="#eea66f"/>
  <circle cx="88.0" cy="55.0" r="4" fill="#eea66f"/>
  <circle cx="84.5" cy="55.0" r="2.5" fill="#eea66f"/>
  <circle cx="81.7" cy="55.0" r="2.5" fill="#eea66f"/>
  <circle cx="79.2" cy="55.0" r="2.5" fill="#eea66f"/>
  <circle cx="77.1" cy="55.0" r="2.5" fill="#eea66f"/>
  <circle cx="75.3" cy="55.0" r="2.5" fill="#eea66f"/>
  <circle cx="73.8" cy="55.0" r="2.5" fill="#eea66f"/>
  <circle cx="72.4" cy="55.0" r="2.5" fill="#eea66f"/>
  <circle cx="71.1" cy="55.0" r="2.5" fill="#eea66f"/>
  <circle cx="70.0" cy="55.0" r="2.5" fill="#eea66f"/>
  <circle cx="69.0" cy="55.0" r="2.5" fill="#eea66f"/>
  <circle cx="68.1" cy="55.0" r="2.5" fill="#eea66f"/>
  <circle cx="67.3" cy="55.0" r="2.5" fill="#eea66f"/>
  <circle cx="66.5" cy="55.0" r="2.5" fill="#eea66f"/>
  <circle cx="65.8" cy="55.0" r="2.5" fill="#eea66f"/>
  <circle cx="65.2" cy="55.0" r="2.5" fill="#eea66f"/>
  <circle cx="64.6" cy="55.0" r="2.5" fill="#eea66f"/>
  <circle cx="64.1" cy="55.0" r="2.5" fill="#eea66f"/>
  <circle cx="63.6" cy="55.0" r="2.5" fill="#eea66f"/>
  <circle cx="63.1" cy="55.0" r="2.5" fill="#eea66f"/>
  <circle cx="62.7" cy="55.0" r="2.5" fill="#eea66f"/>
  <circle cx="62.3" cy="55.0" r="2.5" fill="#eea66f"/>
  <circle cx="61.9" cy="55.0" r="2.5" fill="#eea66f"/>
  <circle cx="61.5" cy="55.0" r="2.5" fill="#eea66f"/>
  <circle cx="61.2" cy="55.0" r="2.5" fill="#eea66f"/>
  <circle cx="60.9" cy="55.0" r="2.5" fill="#eea66f"/>
  <circle cx="60.6" cy="55.0" r="2.5" fill="#eea66f"/>
  <circle cx="60.3" cy="55.0" r="2.5" fill="#eea66f"/>
  <circle cx="60.0" cy="55.0" r="2.5" fill="#eea66f"/>
  <circle cx="59.7" cy="55.0" r="2.5" fill="#eea66f"/>
  <circle cx="59.5" cy="55.0" r="2.5" fill="#eea66f"/>
  <line x1="12.0" y1="62.0" x2="12.0" y2="70.0" stroke="currentColor" stroke-width="1"/>
  <text x="12.0" y="86.0" font-size="12" text-anchor="middle" fill="currentColor">−0.1</text>
  <line x1="50.0" y1="62.0" x2="50.0" y2="70.0" stroke="currentColor" stroke-width="1"/>
  <text x="50.0" y="86.0" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <line x1="88.0" y1="62.0" x2="88.0" y2="70.0" stroke="currentColor" stroke-width="1"/>
  <text x="88.0" y="86.0" font-size="12" text-anchor="middle" fill="currentColor">0.1</text>
  <line x1="176.7" y1="62.0" x2="176.7" y2="70.0" stroke="currentColor" stroke-width="1"/>
  <text x="176.7" y="86.0" font-size="12" text-anchor="middle" fill="currentColor">1/3</text>
  <line x1="240.0" y1="62.0" x2="240.0" y2="70.0" stroke="currentColor" stroke-width="1"/>
  <text x="240.0" y="86.0" font-size="12" text-anchor="middle" fill="currentColor">1/2</text>
  <line x1="430.0" y1="62.0" x2="430.0" y2="70.0" stroke="currentColor" stroke-width="1"/>
  <text x="430.0" y="86.0" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <text x="69.0" y="30.0" font-size="12" text-anchor="middle" fill="currentColor">window: within 0.1 of 0</text>
</svg>
</div>

The first few dots are spread out: 1, then $\frac12$, then $\frac13$. After that they crowd together near 0, so
tightly that the drawing can hardly show them. The shaded window holds every number within 0.1 of 0 (from $-0.1$
to $0.1$). The terms from the 11th on all lie inside it, because $\dfrac1n < 0.1$ as soon as $n > 10$.

### The closeness game

Here is a game for two players that captures "heading for 0" exactly.

1. The **challenger** names a closeness: "get within 0.1 of 0". Or "within 0.001". Or "within one billionth". Any
   positive amount, as small as they like.
2. The **defender** must answer with a position in the list, such that **every** term from that position on is
   within the challenger's closeness.

For $\dfrac1n$ the defender always wins:

| Challenger says "within ..." | Defender answers "from term ... on" | Why |
| --- | --- | --- |
| 0.1 | 11 | $\frac1n < 0.1$ when $n > 10$ |
| 0.001 | 1001 | $\frac1n < 0.001$ when $n > 1000$ |
| one millionth | 1,000,001 | $\frac1n < \frac{1}{1000000}$ when $n > 1000000$ |

Whatever closeness the challenger picks, the defender takes a position past "1 divided by that closeness". Since
the defender **always** has an answer, we say:

> The sequence $\dfrac1n$ **tends to** 0, or **converges to** 0, or **has limit** 0.

We write this as

$$\lim_{n \to \infty} \frac1n = 0,$$

read "the limit of 1 over $n$, as $n$ tends to infinity, is 0". The little arrow and $\infty$ do **not** mean that
$n$ ever equals infinity. They are short for "as $n$ grows larger and larger without end". Infinity is not a
position in the list; there is no "infinitieth term" (lesson 3 explains why $\infty$ is not a number at all).

So here is the meaning of a limit, in words:

> A sequence has **limit** $L$ when its terms get **as close as you like** to $L$ and **stay** that close from
> some position on.

Both halves matter: "as close as you like" (the challenger can pick any closeness) and "stay there" (every term from
some point on, not just some of them).

### A limit can be reached, or not, from above or below

The terms do not have to reach the limit, and they do not have to come from one side.

- $\dfrac1n$ never reaches 0. It approaches from **above** (every term is bigger than 0).
- The sequence $\dfrac{n+1}{n}$ is $2, \frac32, \frac43, \frac54, \ldots$ Since $\dfrac{n+1}{n} = 1 + \dfrac1n$, each
  term is 1 plus a little bit, and the little bit shrinks to 0. Its limit is 1, approached from above.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 195" role="img" aria-label="Dots for the terms (n+1)/n for n from 1 to 15: 2, 1.5, 1.33 and so on, dropping towards the height 1; a shaded band from 0.9 to 1.1 holds every dot from the eleventh on">
  <rect x="40.0" y="87.5" width="400.0" height="15.0" fill="#7ccf9a" fill-opacity="0.35"/>
  <line x1="40.0" y1="170.0" x2="440.0" y2="170.0" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40.0" y1="20.0" x2="40.0" y2="170.0" stroke="currentColor" stroke-width="1.5"/>
  <line x1="36.0" y1="170.0" x2="40.0" y2="170.0" stroke="currentColor" stroke-width="1"/>
  <text x="32.0" y="174.0" font-size="11" text-anchor="end" fill="currentColor">0</text>
  <line x1="36.0" y1="95.0" x2="40.0" y2="95.0" stroke="currentColor" stroke-width="1"/>
  <text x="32.0" y="99.0" font-size="11" text-anchor="end" fill="currentColor">1</text>
  <line x1="36.0" y1="20.0" x2="40.0" y2="20.0" stroke="currentColor" stroke-width="1"/>
  <text x="32.0" y="24.0" font-size="11" text-anchor="end" fill="currentColor">2</text>
  <circle cx="65.0" cy="20.0" r="4" fill="#eea66f"/>
  <circle cx="90.0" cy="57.5" r="4" fill="#eea66f"/>
  <circle cx="115.0" cy="70.0" r="4" fill="#eea66f"/>
  <circle cx="140.0" cy="76.2" r="4" fill="#eea66f"/>
  <circle cx="165.0" cy="80.0" r="4" fill="#eea66f"/>
  <circle cx="190.0" cy="82.5" r="4" fill="#eea66f"/>
  <circle cx="215.0" cy="84.3" r="4" fill="#eea66f"/>
  <circle cx="240.0" cy="85.6" r="4" fill="#eea66f"/>
  <circle cx="265.0" cy="86.7" r="4" fill="#eea66f"/>
  <circle cx="290.0" cy="87.5" r="4" fill="#eea66f"/>
  <circle cx="315.0" cy="88.2" r="4" fill="#eea66f"/>
  <circle cx="340.0" cy="88.8" r="4" fill="#eea66f"/>
  <circle cx="365.0" cy="89.2" r="4" fill="#eea66f"/>
  <circle cx="390.0" cy="89.6" r="4" fill="#eea66f"/>
  <circle cx="415.0" cy="90.0" r="4" fill="#eea66f"/>
  <text x="65.0" y="186.0" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <text x="165.0" y="186.0" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <text x="290.0" y="186.0" font-size="11" text-anchor="middle" fill="currentColor">10</text>
  <text x="415.0" y="186.0" font-size="11" text-anchor="middle" fill="currentColor">15</text>
  <text x="440.0" y="186.0" font-size="11" text-anchor="middle" fill="currentColor">n</text>
  <line x1="40.0" y1="95.0" x2="440.0" y2="95.0" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/>
</svg>
</div>

- The sequence $5, 5, 5, 5, \ldots$ has limit 5. Every term **is** the limit. The defender answers "from term 1 on"
  every time. A constant sequence is the simplest kind that settles.
- The sequence $-1, \frac12, -\frac13, \frac14, -\frac15, \ldots$ jumps from one side of 0 to the other, but its
  distance from 0 is $\frac1n$, which shrinks. Its limit is 0. Crossing over the limit is allowed; only the
  distance counts.

### Sequences that do not settle

If the defender can be beaten, even by one closeness, the sequence has **no limit**. We say it **diverges**.

**Example: $-1, 1, -1, 1, \ldots$** The terms visit 1 and $-1$ forever.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 195" role="img" aria-label="Dots for the terms of minus 1, 1, minus 1, 1 and so on: they jump between the heights 1 and minus 1 forever and never settle">
  <line x1="40.0" y1="170.0" x2="440.0" y2="170.0" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40.0" y1="20.0" x2="40.0" y2="170.0" stroke="currentColor" stroke-width="1.5"/>
  <line x1="36.0" y1="145.0" x2="40.0" y2="145.0" stroke="currentColor" stroke-width="1"/>
  <text x="32.0" y="149.0" font-size="11" text-anchor="end" fill="currentColor">-1</text>
  <line x1="36.0" y1="95.0" x2="40.0" y2="95.0" stroke="currentColor" stroke-width="1"/>
  <text x="32.0" y="99.0" font-size="11" text-anchor="end" fill="currentColor">0</text>
  <line x1="36.0" y1="45.0" x2="40.0" y2="45.0" stroke="currentColor" stroke-width="1"/>
  <text x="32.0" y="49.0" font-size="11" text-anchor="end" fill="currentColor">1</text>
  <circle cx="65.0" cy="145.0" r="4" fill="#eea66f"/>
  <circle cx="90.0" cy="45.0" r="4" fill="#eea66f"/>
  <circle cx="115.0" cy="145.0" r="4" fill="#eea66f"/>
  <circle cx="140.0" cy="45.0" r="4" fill="#eea66f"/>
  <circle cx="165.0" cy="145.0" r="4" fill="#eea66f"/>
  <circle cx="190.0" cy="45.0" r="4" fill="#eea66f"/>
  <circle cx="215.0" cy="145.0" r="4" fill="#eea66f"/>
  <circle cx="240.0" cy="45.0" r="4" fill="#eea66f"/>
  <circle cx="265.0" cy="145.0" r="4" fill="#eea66f"/>
  <circle cx="290.0" cy="45.0" r="4" fill="#eea66f"/>
  <circle cx="315.0" cy="145.0" r="4" fill="#eea66f"/>
  <circle cx="340.0" cy="45.0" r="4" fill="#eea66f"/>
  <circle cx="365.0" cy="145.0" r="4" fill="#eea66f"/>
  <circle cx="390.0" cy="45.0" r="4" fill="#eea66f"/>
  <circle cx="415.0" cy="145.0" r="4" fill="#eea66f"/>
  <text x="65.0" y="186.0" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <text x="165.0" y="186.0" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <text x="290.0" y="186.0" font-size="11" text-anchor="middle" fill="currentColor">10</text>
  <text x="415.0" y="186.0" font-size="11" text-anchor="middle" fill="currentColor">15</text>
  <text x="440.0" y="186.0" font-size="11" text-anchor="middle" fill="currentColor">n</text>
  <line x1="40.0" y1="95.0" x2="440.0" y2="95.0" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/>
</svg>
</div>

Could the limit be 1? The challenger says "within 0.5 of 1". But every second term is $-1$, which is 2 away from 1.
However far along the defender goes, a $-1$ comes later and breaks the rule. So 1 is not the limit. The same
argument rules out $-1$. And 0? The terms are always exactly 1 away from 0, never closer. So 0 is out too.

In fact **no** number works, and here is a short reason. Suppose some number $L$ were the limit. Then from some
position on, every term would be within 0.5 of $L$. Both a 1 and a $-1$ come after that position, so both would be
within 0.5 of $L$, which would put them within $0.5 + 0.5 = 1$ of each other. But 1 and $-1$ are 2 apart. That is
impossible, so there is no limit.

**Example: $1, 2, 3, 4, \ldots$** The terms grow past every number. They do not settle near anything. We say this
sequence **tends to infinity**, written $n \to \infty$. That is a useful description, but it is still a kind of
diverging: there is no number the terms close in on.

**Example: $1, 0, 1, 0, 1, 0, \ldots$** The terms land exactly on 0 infinitely often. But they keep **leaving** again.
"Visits 0 again and again" is not the same as "settles at 0". This is why the definition says "and stays there".

### A sequence cannot have two limits

Could a sequence settle at 3 **and** at 3.5? Picture a window of closeness 0.1 around each: one from 2.9 to 3.1, the
other from 3.4 to 3.6. The windows do not overlap. If the limit were 3, the terms would eventually all be in the
first window; if it were 3.5, they would eventually all be in the second. Far enough along, both would have to be
true at once, and one term cannot sit in two separate windows. The same argument works for any two different
numbers: pick a closeness less than half the gap between them. So **a limit, if it exists, is one single number**.
That is what lets us write "the limit" and use an equals sign.

<figure class="play" data-play="seq" data-kind="geom"><span class="ai-tag">AI-created</span><figcaption><b>Settling down.</b> With r between −1 and 1 the terms shrink towards 0.</figcaption></figure>

## Worked examples

**1. How far for one thousandth?** For $a_n = \dfrac1n$, from which term on is every term within 0.001 of 0?

1. The distance from $\frac1n$ to 0 is just $\frac1n$.
2. We need $\dfrac1n < 0.001 = \dfrac{1}{1000}$, which is true exactly when $n > 1000$.
3. So from **term 1001** on. (Term 1000 is exactly 0.001 away, which is not "less than".)

**2. A rule that needs rewriting.** Find the limit of $a_n = \dfrac{2n + 3}{n + 1}$, and say from which term on every
term is within 0.01 of it.

1. Try some terms: $a_1 = \frac52 = 2.5$, $a_{10} = \frac{23}{11} \approx 2.09$, $a_{100} = \frac{203}{101} \approx 2.0099$.
   It looks like 2.
2. Split the top: $2n + 3 = 2(n + 1) + 1$. So $a_n = \dfrac{2(n+1) + 1}{n+1} = 2 + \dfrac{1}{n+1}$.
3. Now it is clear: 2 plus a bit that shrinks to 0. The limit is **2**.
4. Distance from 2 is $\dfrac{1}{n+1}$. It is less than 0.01 when $n + 1 > 100$, so from **term 100** on. Check:
   $a_{100} = 2 + \frac{1}{101} = 2.0099\ldots$, within 0.01. ✓

**3. Nines.** The sequence $0.9,\ 0.99,\ 0.999,\ 0.9999, \ldots$ has $n$ nines in the $n$th term. Find its limit.

1. The gap to 1 is $0.1$, then $0.01$, then $0.001$: the $n$th term is $1 - \dfrac{1}{10^n}$.
2. The gap $\dfrac{1}{10^n}$ shrinks to 0 (it gets ten times smaller every step), so the limit is **1**.
3. For a closeness of one millionth, $\dfrac{1}{10^n} < \dfrac{1}{10^6}$ when $n > 6$: from term 7 on.

Keep this example in mind. Lesson 5 shows that it is the reason $0.999\ldots = 1$ exactly.

**4. Getting closer is not enough.** Does $a_n = 1 + \dfrac1n$ tend to 0? Each term is closer to 0 than the one before:
2, 1.5, 1.33, 1.25, ...

No. Every term is bigger than 1, so every term is more than 1 away from 0. If the challenger says "within 0.5 of 0",
no term at all qualifies. The terms get closer to 0, but they never get **close** to 0. Their limit is 1.

**5. An alternating sequence that does settle.** Does $a_n = \dfrac{(-1)^n}{n}$ have a limit?

1. $(-1)^n$ is $-1$ when $n$ is odd and $1$ when $n$ is even, so the terms are $-1, \frac12, -\frac13, \frac14, \ldots$
2. The distance from 0 is always $\frac1n$, whatever the sign.
3. So exactly the same defender's answers as for $\frac1n$ work. The limit is **0**, even though the terms keep
   jumping across it.

## Try it

1. Write the first five terms of $a_n = \dfrac{1}{2n}$. What is its limit?
2. What is the limit of $a_n = 3 + \dfrac1n$? Do the terms ever reach it?
3. For $a_n = \dfrac1n$, from which term on is every term within 0.0001 of 0?
4. Which of these sequences have a limit, and what is it? (a) $7, 7, 7, \ldots$; (b) $1, 4, 9, 16, \ldots$;
   (c) $1, -\frac12, \frac13, -\frac14, \ldots$; (d) $1, 0, 1, 0, \ldots$
5. Show that $a_n = \dfrac{3n + 1}{n}$ tends to 3, and find from which term on every term is within 0.01 of 3.
6. For $a_n = 1 - \dfrac{1}{n^2}$, find the limit and the first position from which every term is within 0.01 of it.
7. Find the limit of $a_n = \dfrac{5n - 1}{n + 2}$, and from which term on every term is within 0.1 of it.
   (Hint: write $5n - 1 = 5(n + 2) - 11$.)
8. A friend says "$0.9, 0.99, 0.999, \ldots$ tends to 1.01, because it keeps getting closer to 1.01". Use the
   closeness game to show the friend is wrong.

??? note "Answers"
    1. $\frac12, \frac14, \frac16, \frac18, \frac1{10}$. The limit is **0**: the terms are half of $\frac1n$, so they
       shrink to 0 even faster.
    2. The limit is **3**. The terms are $4, 3.5, 3.333\ldots, 3.25, \ldots$, always a little more than 3, so they
       never reach it. They do not need to.
    3. We need $\frac1n < \frac{1}{10000}$, so $n > 10000$: from **term 10,001** on.
    4. (a) Limit **7** (a constant sequence). (b) **No limit**: the squares grow past every number (they tend to
       infinity). (c) Limit **0**: the distance from 0 is $\frac1n$. (d) **No limit**: the terms keep leaving 0 and
       keep leaving 1. If $L$ were the limit, a 1 and a 0 far along would both be within 0.4 of $L$, so within 0.8 of
       each other, but they are 1 apart.
    5. $\dfrac{3n+1}{n} = 3 + \dfrac1n$, which is 3 plus a bit that shrinks to 0. The distance from 3 is $\frac1n$,
       less than 0.01 when $n > 100$: from **term 101** on.
    6. The limit is **1**. The distance from 1 is $\dfrac{1}{n^2}$, which is less than $0.01 = \frac{1}{100}$ when
       $n^2 > 100$, so when $n > 10$: from **term 11** on. (Term 10 is exactly 0.01 away.)
    7. $5n - 1 = 5(n+2) - 11$, so $a_n = 5 - \dfrac{11}{n+2}$. The limit is **5**. The distance is
       $\dfrac{11}{n+2}$, less than 0.1 when $n + 2 > 110$, so $n > 108$: from **term 109** on. Check:
       $a_{109} = 5 - \frac{11}{111} = 4.9009\ldots$, which is $0.099\ldots$ below 5. ✓
    8. Every term is less than 1, so every term is more than $0.01$ below 1.01. The challenger says "within 0.005 of
       1.01", and **no** term qualifies, however far along. So 1.01 is not the limit. Getting closer to 1.01 is true
       but not enough: the terms never get as close as you like. (The limit is 1.)

## Common mistake

**"The limit is the last term."** An endless sequence has no last term. The limit is not a term at all (though a
term may happen to equal it). It is the number the terms close in on.

**"Getting closer means converging to it."** The terms of $1 + \frac1n$ get closer to 0 every single step, and also
closer to $-5$ and to $-1000$. None of those is the limit. The limit is the one number the terms get **as close as
you like** to, and stay. For $1 + \frac1n$ that is 1.

## Where it leads

- Next: [Zeno answered](02-zeno-answered.md), where a limit settles a 2400-year-old puzzle about a race.
- [Level 5 page](index.md) · [Infinity topic page](../index.md) · Before this: [Level 4](../level-4/index.md), with
  endless sums like $\frac12 + \frac14 + \frac18 + \cdots$
- Limits of sums: [Infinite geometric series](../../patterns/level-7/03-infinite-geometric.md) in Patterns.
- Limits are how calculus finds the speed at an instant: [Shrinking the interval](../../change/level-6/02-shrinking-interval.md)
  in Change.
- On the U of T shelf, the closeness game becomes the formal definition with the Greek letter $\varepsilon$:
  [MAT137 Unit 11: sequences](../../../uoft/MAT137/unit11.md) and, with full proofs,
  [MAT158 Unit 3: limits](../../../uoft/MAT158H1/unit03.md).
