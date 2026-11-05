# 1. What probability is

*A weather forecast says "70% chance of rain". A die has "one chance in six" of showing a four. A doctor says a
treatment "works in 9 cases out of 10". All three use the same word, yet they mean rather different things: one is a
count of possibilities, one is a long-run frequency, and one is a degree of confidence about a single day that will
happen only once. This chapter sorts out what "probability" can mean, builds the small language of sets that every
later chapter speaks, states the three axioms that all of modern probability rests on, and proves the first rules
from them. It ends where the subject began, in 1654, with a gambling question that Pascal and Fermat solved by
letter, worked out in full.*

!!! abstract "In this chapter"

    **You will learn:**

    - three ways to read the word "probability" (equally likely outcomes, long-run frequency, degree of belief) and where each one works
    - sample spaces, outcomes and events, and the set language for "and", "or" and "not"
    - Kolmogorov's three axioms and why they are the right ones
    - the first consequences, each with a proof: the complement rule, monotonicity, inclusion-exclusion and the union bound
    - how to handle infinitely many outcomes, such as "toss until the first head"
    - the problem of points, the question that started the subject, solved two ways

    **You need:** school arithmetic and fractions; nothing else. For a gentler version, see the Topics lessons
    [Sure, maybe, never](../../topics/probability/level-1/01-sure-maybe-never.md),
    [The chance line](../../topics/probability/level-2/01-the-chance-line.md),
    [Outcomes and events](../../topics/probability/level-3/01-outcomes-events.md),
    [Probability as a fraction](../../topics/probability/level-3/02-probability-fraction.md),
    [Experimental and theoretical probability](../../topics/probability/level-3/05-experiment-theory.md),
    [Mutually exclusive events and "or"](../../topics/probability/level-5/01-mutually-exclusive-or.md) and
    [The general addition rule](../../topics/probability/level-5/02-general-addition-rule.md).

    **Levels:** 1.1 and 1.2 are beginner; 1.3 is beginner to intermediate (the proofs are short but careful; the part on
    infinitely many outcomes is intermediate); 1.4 is beginner, with a general formula at the end that is intermediate.

## 1.1 Three views of chance

**A question.** You roll an ordinary die. What is the probability that it shows a four?

Almost everyone answers $\frac{1}{6}$. But ask *why*, and you get three different kinds of answer.

### View 1: equally likely outcomes

"There are six faces. Nothing favours one face over another, so each has the same chance. One of the six is a four,
so the chance is one in six."

This is the **classical** view. When an experiment has finitely many possible results and there is a good reason to
treat them as equally likely (symmetry of the die, a well-shuffled deck, a fair lottery machine), the probability of
something is

$$
\frac{\text{number of results where it happens}}{\text{total number of results}} .
$$

Pierre-Simon Laplace made this the definition of probability in his *Essai philosophique sur les probabilités*
(1814): the ratio of the "favourable cases" to "all possible cases", provided the cases are "equally possible".

The classical view is wonderfully concrete, and Chapter 2 is all about it. But it has two weak spots.

- **It is circular.** "Equally possible" means "equally probable", so the definition uses the word it defines.
- **It does not always apply.** A drawing pin dropped on a table lands point-up or point-down, but nothing says those
  two are equally likely. A loaded die has six faces that are not equally likely. And what are the "equally likely
  cases" behind "70% chance of rain tomorrow"?

### View 2: long-run frequency

"If you roll the die many times, a four comes up about one sixth of the time. That fraction *is* the probability."

This is the **frequency** view. The probability of an event is the proportion of times it happens in a long run of
repetitions under the same conditions. It needs no symmetry: you can find the probability that a drawing pin lands
point-up by dropping it a few thousand times.

The frequency view matches how probability is checked in practice. The South African mathematician John Kerrich,
interned in Denmark during the Second World War, tossed a coin 10,000 times and got 5,067 heads, a proportion of
0.5067; he reported the experiment in his 1946 book *An Experimental Introduction to the Theory of Probability*. You
can do the same in a second with a computer.

**Try it in Python.**

```python
import random

for n in [10, 100, 1000, 10_000, 100_000, 1_000_000]:
    fours = sum(1 for _ in range(n) if random.randint(1, 6) == 4)
    print(n, fours / n)
```

A typical run prints proportions such as 0.3, 0.14, 0.171, 0.1655, 0.16702, 0.166531: wild at first, then closer and
closer to $1/6 \approx 0.16667$. Your numbers will differ, which is rather the point.

The frequency view has weak spots too.

- **"Long run" is never reached.** After a million rolls the proportion is close to $1/6$ but not equal to it. How
  long is long enough? The honest answer turns out to need probability itself (the law of large numbers, Chapter 7),
  so the frequency view cannot be the *foundation* without going round in a circle.
- **Some events happen once.** "Will this patient recover?", "Did this person write that letter?", "Will it rain in
  Toronto tomorrow?" There is no long run of tomorrows.

### View 3: degree of belief

"I have no reason to expect one face more than another, so I would be equally happy to bet on any of them. My
confidence that the next roll is a four is $1/6$."

This is the **subjective** or **Bayesian** view: a probability measures how strongly a particular person, with
particular information, believes something. It applies to one-off events ("70% chance of rain tomorrow" is the
forecaster's calibrated confidence) and to facts that are already settled but unknown to you (the probability that
the card face-down on the table is an ace).

Frank Ramsey (in a 1926 essay, "Truth and Probability") and Bruno de Finetti (from the 1930s) showed that degrees of
belief must obey the same rules as the other two views, if you do not want to be exploited. Here is the idea, called
a **Dutch book argument**. Suppose your degree of belief in an event $A$ is the price $p$ (in dollars) you would pay
for a ticket that pays 1 dollar if $A$ happens, and also the price at which you would sell one. If your beliefs in $A$
and in "not $A$" add up to more than 1, say 0.6 and 0.6, a bookmaker sells you both tickets for 1.20 dollars in
total; exactly one of them pays out, so you get back 1 dollar and lose 20 cents *whatever happens*. If they add to less
than 1, the bookmaker buys both from you instead, and you lose again. Only beliefs that add to exactly 1 are safe.
Similar arguments force all the axioms of §1.3.

The weak spot of this view is the obvious one: two reasonable people can hold different degrees of belief. Chapter 4
shows how evidence pulls them together.

### Which view is right?

For the mathematics, it does not matter. All three views agree on the **rules** that probabilities obey: they lie
between 0 and 1, the certain event has probability 1, and the probabilities of events that cannot happen together
add. Andrey Kolmogorov's achievement in 1933 was to take those rules as the starting point (axioms) and leave the
meaning to the user, just as geometry starts from axioms about points and lines without saying what a point "really
is". Every theorem in this book is true under every view. The views disagree about how to *use* probability to learn
from data, and §4.6 gives that debate one honest page.

**A word on scale.** Probabilities are written as fractions ($\frac{1}{6}$), decimals (0.1667) or percentages (16.67%).
They always lie between 0 (impossible) and 1 (certain). Odds are a different scale: "odds of 1 to 5 on a four" means
1 favourable case for every 5 unfavourable ones, which is probability $\frac{1}{1+5} = \frac{1}{6}$. Chapter 4 uses
odds seriously.

<figure class="play" data-play="coins"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> Flip a fair coin many times: the share of heads is jumpy at first, then settles near one half, the frequency view of chance.</figcaption></figure>

## 1.2 Sample spaces and events

**A question.** Roll two dice. What is the probability that the total is 7?

Before we can count anything we must say exactly what the possible results are. Is "a 3 and a 4" one result, or two
("3 on the red die, 4 on the blue" and "4 on the red, 3 on the blue")? Getting this wrong is the commonest error in
elementary probability, and it was made by serious mathematicians in the eighteenth century (see §2.6). So we set up
a precise vocabulary.

### Outcomes and the sample space

An **experiment** is anything with an uncertain result: rolling dice, dealing cards, measuring tomorrow's
temperature. An **outcome** is one complete, detailed result. The **sample space**, written $\Omega$ (capital omega,
the last letter of the Greek alphabet), is the set of all possible outcomes.

The rule for choosing $\Omega$: **every possible result must correspond to exactly one outcome**, and each outcome
must carry all the detail we will ever ask about.

**Examples.**

- One coin: $\Omega = \{H, T\}$.
- One die: $\Omega = \{1, 2, 3, 4, 5, 6\}$.
- Two dice, one red and one blue: $\Omega = \{(r, b) : r, b \in \{1, \dots, 6\}\}$, the 36 ordered pairs. Here
  $(3, 4)$ and $(4, 3)$ are different outcomes. Even if the dice look identical, they *are* two different objects, and
  keeping them apart makes the 36 outcomes equally likely.
- Three coins: $\Omega = \{HHH, HHT, HTH, HTT, THH, THT, TTH, TTT\}$, eight outcomes.
- Toss a coin until the first head: $\Omega = \{H, TH, TTH, TTTH, \dots\}$, which is infinite. (We should also allow
  "tails for ever"; it turns out to have probability 0, as you will see in §1.3.)
- The time until a light bulb fails: $\Omega = [0, \infty)$, every non-negative real number. This is a **continuous**
  sample space, the subject of Part III.

The symbol $\in$ means "is an element of": $3 \in \{1, 2, 3\}$. The notation $\{(r, b) : \dots\}$ means "the set of all
pairs $(r, b)$ such that ...".

### Events

An **event** is a set of outcomes, that is, a **subset** of $\Omega$. We say an event **happens** (or **occurs**) if
the outcome of the experiment is one of its elements.

With two dice, "the total is 7" is the event

$$
A = \{(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)\} ,
$$

six outcomes out of 36. The 36 outcomes are equally likely, so $P(A) = \frac{6}{36} = \frac{1}{6}$. (Here $P(A)$ is read
"the probability of $A$".)

Two events are special. The whole space $\Omega$ is the **certain event**: whatever happens, the outcome is in
$\Omega$. The **empty set** $\varnothing$, with no outcomes in it, is the **impossible event**. An event with exactly one
outcome, like $\{(6,6)\}$, is an **elementary event**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 300" role="img" aria-label="The 36 outcomes of two dice as a 6 by 6 grid; the six squares on the anti-diagonal where the total is 7 are shaded">
  <text x="215" y="22" text-anchor="middle" font-size="13" fill="currentColor">blue die</text>
  <text x="30" y="160" text-anchor="middle" font-size="13" fill="currentColor" transform="rotate(-90 30 160)">red die</text>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="95" y="45">1</text><text x="135" y="45">2</text><text x="175" y="45">3</text>
    <text x="215" y="45">4</text><text x="255" y="45">5</text><text x="295" y="45">6</text>
    <text x="60" y="79">1</text><text x="60" y="119">2</text><text x="60" y="159">3</text>
    <text x="60" y="199">4</text><text x="60" y="239">5</text><text x="60" y="279">6</text>
  </g>
  <rect x="275" y="55" width="40" height="40" fill="#eea66f"/>
  <rect x="235" y="95" width="40" height="40" fill="#eea66f"/>
  <rect x="195" y="135" width="40" height="40" fill="#eea66f"/>
  <rect x="155" y="175" width="40" height="40" fill="#eea66f"/>
  <rect x="115" y="215" width="40" height="40" fill="#eea66f"/>
  <rect x="75" y="255" width="40" height="40" fill="#eea66f"/>
  <g stroke="currentColor" fill="none" stroke-width="1">
    <rect x="75" y="55" width="240" height="240"/>
    <line x1="115" y1="55" x2="115" y2="295"/><line x1="155" y1="55" x2="155" y2="295"/>
    <line x1="195" y1="55" x2="195" y2="295"/><line x1="235" y1="55" x2="235" y2="295"/>
    <line x1="275" y1="55" x2="275" y2="295"/>
    <line x1="75" y1="95" x2="315" y2="95"/><line x1="75" y1="135" x2="315" y2="135"/>
    <line x1="75" y1="175" x2="315" y2="175"/><line x1="75" y1="215" x2="315" y2="215"/>
    <line x1="75" y1="255" x2="315" y2="255"/>
  </g>
  <text x="330" y="180" font-size="12" fill="currentColor">total 7:</text>
  <text x="330" y="196" font-size="12" fill="currentColor">6 of 36</text>
</svg>
</div>

### Set language: not, and, or

Because events are sets, the words "not", "and" and "or" become operations on sets. Let $A$ and $B$ be events.

| In words | Set | Notation | Happens when the outcome ... |
|---|---|---|---|
| not $A$ | complement | $A^c$ | is not in $A$ |
| $A$ and $B$ | intersection | $A \cap B$ | is in both |
| $A$ or $B$ (or both) | union | $A \cup B$ | is in at least one |
| $A$ but not $B$ | difference | $A \setminus B$ | is in $A$ and not in $B$ |
| $A$ implies $B$ | subset | $A \subseteq B$ | (every outcome of $A$ is in $B$) |
| $A$, $B$ cannot both happen | disjoint | $A \cap B = \varnothing$ | (no outcome is in both) |

Disjoint events are also called **mutually exclusive**. The word "or" in mathematics is always the inclusive "or":
"$A$ or $B$" includes the case where both happen.

**Example.** Two dice. Let $A$ = "the total is 7" and $B$ = "the red die shows 1". Then $A \cap B = \{(1,6)\}$, and
$A \cup B$ consists of the 6 outcomes in $A$ and the 6 in $B$, with $(1,6)$ counted once: 11 outcomes. The complement
$B^c$ = "the red die does not show 1" has 30 outcomes.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 220" role="img" aria-label="Venn diagram: a rectangle Omega containing two overlapping circles A and B; the overlap is A and B">
  <rect x="20" y="20" width="360" height="180" rx="8" fill="none" stroke="currentColor"/>
  <text x="36" y="44" font-size="15" fill="currentColor">Ω</text>
  <circle cx="160" cy="110" r="70" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor"/>
  <circle cx="240" cy="110" r="70" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor"/>
  <text x="120" y="115" text-anchor="middle" font-size="15" fill="currentColor">A</text>
  <text x="280" y="115" text-anchor="middle" font-size="15" fill="currentColor">B</text>
  <text x="200" y="115" text-anchor="middle" font-size="12" fill="currentColor">A∩B</text>
</svg>
</div>

A picture like this, with $\Omega$ as a rectangle and events as regions, is a **Venn diagram** (after John Venn, who
used them in 1880). It is a good way to *guess* an identity; it is not a proof, because a picture with two circles
cannot show every possible arrangement of more sets.

### Two laws worth knowing: De Morgan

**Theorem 1.1 (De Morgan's laws).** For any events $A$ and $B$,

$$
(A \cup B)^c = A^c \cap B^c , \qquad (A \cap B)^c = A^c \cup B^c .
$$

In words: "not ($A$ or $B$)" is "not $A$ and not $B$"; "not ($A$ and $B$)" is "not $A$ or not $B$".

*Proof.* Two sets are equal when each outcome belongs to one exactly when it belongs to the other. An outcome $\omega$
is in $(A \cup B)^c$ exactly when it is not in $A \cup B$, that is, when it is in neither $A$ nor $B$, that is, when it is in
$A^c$ and in $B^c$. That proves the first law. Apply the first law to the events $A^c$ and $B^c$: $(A^c \cup B^c)^c = A \cap B$
(because $(A^c)^c = A$). Taking complements of both sides gives $A^c \cup B^c = (A \cap B)^c$, the second law. $\square$

The same argument works for any number of events, even infinitely many: "none of them happens" is the complement of
"at least one happens". This is the key to every "at least one" problem, and you will use it constantly.

**Example.** "At least one six in four rolls of a die" has complement "no six in four rolls". There are $6^4 = 1296$
equally likely sequences of four rolls, of which $5^4 = 625$ contain no six. So

$$
P(\text{at least one six}) = 1 - \frac{625}{1296} = \frac{671}{1296} \approx 0.5177 .
$$

(We used the complement rule, proved in §1.3.) This is a little better than even, a fact that interested gamblers in
seventeenth-century France; §1.4 tells the story.

### Partitions

Events $B_1, B_2, \dots, B_n$ form a **partition** of $\Omega$ if they are pairwise disjoint (no two overlap) and their
union is all of $\Omega$. Exactly one of them happens, whatever the outcome. For two dice, the eleven events "the total
is $k$" for $k = 2, \dots, 12$ form a partition. Partitions are how we break a hard problem into easy cases, starting
in Chapter 3.

## 1.3 The axioms and their first consequences

*Level: beginner to intermediate.*

**A question.** We have three views of probability and they disagree about meaning. What rules must a probability
obey under all of them, and what follows from those rules alone?

### The axioms

In 1933 Andrey Kolmogorov published a short book, *Grundbegriffe der Wahrscheinlichkeitsrechnung* ("Foundations of
the theory of probability"), that put the subject on axioms. Here they are.

**Definition (probability).** A **probability** on a sample space $\Omega$ is a rule $P$ that gives each event $A$ a
real number $P(A)$, such that

1. **(Non-negativity)** $P(A) \ge 0$ for every event $A$;
2. **(Normalisation)** $P(\Omega) = 1$;
3. **(Countable additivity)** if $A_1, A_2, A_3, \dots$ is a sequence of pairwise disjoint events, then

$$
P(A_1 \cup A_2 \cup A_3 \cup \cdots) = P(A_1) + P(A_2) + P(A_3) + \cdots .
$$

The triple ($\Omega$, its events, $P$) is a **probability space**.

Why these three? Check them against each view.

- *Equally likely:* $P(A) = |A|/|\Omega|$, where $|A|$ is the number of outcomes in $A$. Counts are never negative; $|\Omega|/|\Omega| = 1$;
  and if $A$ and $B$ do not overlap, $|A \cup B| = |A| + |B|$, so the probabilities add.
- *Frequency:* in $n$ trials, the proportion of times $A$ happens is at least 0, the proportion for $\Omega$ is $n/n = 1$,
  and if $A$ and $B$ cannot happen together, the number of trials where $A$ or $B$ happens is the number for $A$ plus
  the number for $B$.
- *Belief:* the Dutch book argument of §1.1 forces exactly these rules (for finitely many events; the countable case
  needs a slightly stronger assumption, and de Finetti himself argued against it).

**A note on "every event".** When $\Omega$ is finite or countable (its outcomes can be listed as a first, second,
third, ...), every subset of $\Omega$ can be an event, and nothing goes wrong. When $\Omega$ is a continuum like $[0, 1]$,
it turns out that you *cannot* give every subset a probability in a sensible way: there are strange sets for which no
answer is consistent (Chapter 17 shows one, Vitali's set). Kolmogorov's framework handles this by declaring only
certain subsets to be events, a family called a **sigma-algebra**. Until Chapter 17 you can ignore this: every set we
meet will be an event.

### Probabilities on a finite or countable space

If $\Omega = \{\omega_1, \omega_2, \dots\}$ is finite or countable, a probability is completely determined by the numbers
$p_i = P(\{\omega_i\})$, the probabilities of the single outcomes. They must satisfy $p_i \ge 0$ and $\sum_i p_i = 1$, and then
for every event,

$$
P(A) = \sum_{\omega_i \in A} p_i .
$$

This follows from countable additivity, since $A$ is the disjoint union of its single outcomes. Conversely, any list of
non-negative numbers adding to 1 defines a probability by this formula.

**Example (a loaded die).** A die is weighted so that six comes up with probability $\frac{1}{4}$, and the other five faces share the
rest equally: each has $\frac{3}{4} \cdot \frac{1}{5} = \frac{3}{20}$. Then $P(\text{even}) = \frac{3}{20} + \frac{3}{20} + \frac{1}{4} = \frac{11}{20}$.
*Check:* $5 \cdot \frac{3}{20} + \frac{1}{4} = \frac{15}{20} + \frac{5}{20} = 1$.

**The equally likely case.** If $\Omega$ has $N$ outcomes, all with the same probability $p$, then $Np = 1$, so $p = 1/N$ and
$P(A) = |A|/N$. So the classical definition is not an extra assumption: it is what the axioms give once you *decide*
the outcomes are equally likely.

**Example (an infinite space).** Toss a fair coin until the first head. Let outcome $n$ mean "the first head comes on toss $n$".
For the first head to come on toss $n$, the first $n - 1$ tosses must all be tails and toss $n$ a head: one sequence out of
$2^n$ equally likely sequences of length $n$, so $p_n = \frac{1}{2^n}$. These add to 1:

$$
\frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \cdots = 1 .
$$

(The partial sums are $1 - \frac{1}{2}$, $1 - \frac{1}{4}$, $1 - \frac{1}{8}$, ..., which approach 1.) So the outcome "tails for ever", which is not on the
list, has probability $1 - 1 = 0$: it is possible in principle but has probability zero.

What is the probability that the first head comes on an *even* toss? By countable additivity,

$$
P(\text{even}) = \frac{1}{4} + \frac{1}{16} + \frac{1}{64} + \cdots = \frac{1/4}{1 - 1/4} = \frac{1}{3} ,
$$

using the geometric series $a + ar + ar^2 + \cdots = \frac{a}{1-r}$ for $|r| < 1$. So the first head comes on an odd toss with probability $\frac{2}{3}$: the
player who tosses first in "first head wins" has the advantage, 2 to 1.

### First consequences

Everything below is proved from the three axioms and nothing else. That is the point: once these are proved, they
hold for dice, for weather forecasts, for quantum measurements, for anything that obeys the axioms.

**Theorem 1.2.** $P(\varnothing) = 0$.

*Proof.* Take $A_1 = A_2 = A_3 = \cdots = \varnothing$. These are pairwise disjoint (the empty set overlaps nothing) and their union is
$\varnothing$. Countable additivity gives $P(\varnothing) = P(\varnothing) + P(\varnothing) + P(\varnothing) + \cdots$. If $P(\varnothing)$ were a positive number $c$, the right side would
be an infinite sum of $c$'s, which is not a real number. So $P(\varnothing) = 0$. $\square$

**Theorem 1.3 (finite additivity).** If $A_1, \dots, A_n$ are pairwise disjoint, then $P(A_1 \cup \cdots \cup A_n) = P(A_1) + \cdots + P(A_n)$.

*Proof.* Extend the list with $A_{n+1} = A_{n+2} = \cdots = \varnothing$. The infinite list is still pairwise disjoint and has the same union.
By countable additivity and Theorem 1.2, $P(A_1 \cup \cdots \cup A_n) = P(A_1) + \cdots + P(A_n) + 0 + 0 + \cdots$. $\square$

**Theorem 1.4 (complement rule).** $P(A^c) = 1 - P(A)$.

*Proof.* $A$ and $A^c$ are disjoint and their union is $\Omega$. By finite additivity and normalisation, $P(A) + P(A^c) = P(\Omega) = 1$. $\square$

The complement rule is the single most useful rule in elementary probability: when an event is complicated
("at least one ..."), its complement is often simple ("none ...").

**Theorem 1.5 (difference and monotonicity).** If $A \subseteq B$, then $P(B \setminus A) = P(B) - P(A)$, and so $P(A) \le P(B)$.

*Proof.* If $A \subseteq B$, then $B$ is the disjoint union of $A$ and $B \setminus A$ (an outcome of $B$ is either in $A$ or not).
So $P(B) = P(A) + P(B \setminus A)$, which rearranges to the first claim. Since $P(B \setminus A) \ge 0$ by non-negativity, $P(B) \ge P(A)$. $\square$

**Corollary 1.6.** $0 \le P(A) \le 1$ for every event $A$.

*Proof.* $A \subseteq \Omega$, so $P(A) \le P(\Omega) = 1$; and $P(A) \ge 0$ is an axiom. $\square$

Notice that "probabilities are at most 1" was not an axiom. It did not need to be: it follows.

**Theorem 1.7 (addition rule, or inclusion-exclusion for two events).** For any events $A$ and $B$,

$$
P(A \cup B) = P(A) + P(B) - P(A \cap B) .
$$

*Proof.* Split $A \cup B$ into the disjoint pieces $A$ and $B \setminus A$. Also, $B$ is the disjoint union of $A \cap B$ and $B \setminus A$. So

$$
P(A \cup B) = P(A) + P(B \setminus A) \quad\text{and}\quad P(B) = P(A \cap B) + P(B \setminus A) .
$$

Subtract the second equation from the first: $P(A \cup B) - P(B) = P(A) - P(A \cap B)$. Rearrange. $\square$

The reason is visible in the Venn diagram: adding $P(A)$ and $P(B)$ counts the overlap twice, so you subtract it once.

**Example.** A card is drawn from a well-shuffled deck of 52. What is the probability that it is a heart or a king?
$P(\text{heart}) = \frac{13}{52}$, $P(\text{king}) = \frac{4}{52}$, and $P(\text{heart and king}) = \frac{1}{52}$ (the king of hearts). So
$P(\text{heart or king}) = \frac{13 + 4 - 1}{52} = \frac{16}{52} = \frac{4}{13}$. *Check by counting:* 13 hearts plus the 3 other kings is 16 cards.

**Theorem 1.8 (three events).** For any events $A$, $B$, $C$,

$$
P(A \cup B \cup C) = P(A) + P(B) + P(C) - P(A \cap B) - P(A \cap C) - P(B \cap C) + P(A \cap B \cap C) .
$$

*Proof.* Apply Theorem 1.7 to the two events $A \cup B$ and $C$:

$$
P(A \cup B \cup C) = P(A \cup B) + P(C) - P\big((A \cup B) \cap C\big) .
$$

Now $(A \cup B) \cap C = (A \cap C) \cup (B \cap C)$ (an outcome is in $C$ and in $A$ or $B$ exactly when it is in $A$ and $C$, or in $B$ and $C$), and the
intersection of these two is $A \cap B \cap C$. Applying Theorem 1.7 to them and to $A \cup B$:

$$
P(A \cup B \cup C) = \big[P(A) + P(B) - P(A \cap B)\big] + P(C) - \big[P(A \cap C) + P(B \cap C) - P(A \cap B \cap C)\big] ,
$$

which is the formula. $\square$

The general version for $n$ events (add the single probabilities, subtract the pairs, add the triples, and so on,
alternating) is proved in [Combinatorics, chapter 5](../combinatorics/05-Inclusion-Exclusion.md), and it holds for
probabilities by exactly the same proof.

**Example (matching letters, three envelopes).** Three letters are put at random into three addressed envelopes,
one per envelope. What is the probability that at least one letter is in its own envelope? There are $3! = 6$ equally
likely ways. Let $A_i$ be "letter $i$ is in envelope $i$". Then $P(A_i) = \frac{2}{6}$ (the other two letters can go 2 ways),
$P(A_i \cap A_j) = \frac{1}{6}$ (if two are right, the third is forced), and $P(A_1 \cap A_2 \cap A_3) = \frac{1}{6}$. So

$$
P(A_1 \cup A_2 \cup A_3) = 3 \cdot \frac{2}{6} - 3 \cdot \frac{1}{6} + \frac{1}{6} = \frac{4}{6} = \frac{2}{3} .
$$

*Check by listing:* the six orders are 123, 132, 213, 231, 312, 321. Only 231 and 312 put no letter in its own envelope, so 4
of 6 have at least one match. (For $n$ letters the answer tends to $1 - 1/e \approx 0.632$, a famous result proved in the
combinatorics chapter just linked.)

**Theorem 1.9 (union bound, or Boole's inequality).** For any events $A_1, \dots, A_n$,

$$
P(A_1 \cup \cdots \cup A_n) \le P(A_1) + \cdots + P(A_n) .
$$

*Proof.* For two events, Theorem 1.7 gives $P(A \cup B) = P(A) + P(B) - P(A \cap B) \le P(A) + P(B)$, since $P(A \cap B) \ge 0$. For more,
use induction: if the bound holds for $n - 1$ events, then

$$
P(A_1 \cup \cdots \cup A_n) \le P(A_1 \cup \cdots \cup A_{n-1}) + P(A_n) \le P(A_1) + \cdots + P(A_{n-1}) + P(A_n) . \qquad \square
$$

The union bound looks crude, but it is the workhorse of advanced probability: to show that "something bad" is
unlikely, you list the ways it can happen and show that their probabilities add up to something small. The whole
probabilistic method of [Combinatorics, chapter 17](../combinatorics/17-The-Probabilistic-Method.md) begins this way.

**Example.** A system has 20 components, each of which fails during a mission with probability at most 0.001. With no
information about how the failures are related, the union bound still guarantees that the probability that *some*
component fails is at most $20 \times 0.001 = 0.02$.

### Continuity

*Level: intermediate.*

Countable additivity has a consequence that finite additivity alone does not give, and it is what lets probability
handle limits.

**Theorem 1.10 (continuity from below).** If $A_1 \subseteq A_2 \subseteq A_3 \subseteq \cdots$ is a growing sequence of events with union $A$, then
$P(A_n) \to P(A)$ as $n \to \infty$.

*Proof.* Peel the growing sets into disjoint rings: $B_1 = A_1$ and $B_k = A_k \setminus A_{k-1}$ for $k \ge 2$. The $B_k$ are pairwise
disjoint, $A_n = B_1 \cup \cdots \cup B_n$, and $A = B_1 \cup B_2 \cup \cdots$. By countable additivity,

$$
P(A) = \sum_{k=1}^{\infty} P(B_k) = \lim_{n \to \infty} \sum_{k=1}^{n} P(B_k) = \lim_{n \to \infty} P(A_n) . \qquad \square
$$

Taking complements gives **continuity from above**: if $C_1 \supseteq C_2 \supseteq \cdots$ shrink to $C$ (their intersection), then $P(C_n) \to P(C)$.

**Example.** Keep tossing a fair coin. Let $C_n$ be "the first $n$ tosses are all tails"; $P(C_n) = \frac{1}{2^n}$. The $C_n$ shrink to
the event "tails for ever", so its probability is $\lim \frac{1}{2^n} = 0$. This is a cleaner proof of the claim made earlier.

## 1.4 A short honest history

*Level: beginner, with an intermediate formula at the end.*

People have gambled with knucklebones and dice for thousands of years, but a *mathematics* of chance came late. Here
is what is documented.

**Cardano.** Gerolamo Cardano (1501 to 1576), physician, mathematician and habitual gambler, wrote *Liber de ludo
aleae* ("The book on games of chance"). It was not printed until 1663, long after his death. In it he counts the
equally likely results of throwing dice and compares favourable cases with all cases: the classical idea of §1.1,
more than a century before it became standard. Because the book was not published in his lifetime, it had little
influence.

**Galileo.** Galileo Galilei wrote a short note, *Sopra le scoperte dei dadi* ("On a discovery concerning dice"), on why
three dice show a total of 10 more often than a total of 9, even though each total can be made in six ways as a set of three
numbers. His answer, which you will check in Chapter 2, is that the right outcomes are the $6^3 = 216$ *ordered* triples:
27 of them total 10 and 25 total 9.

**Pacioli and the problem of points.** Luca Pacioli's *Summa de arithmetica* (1494) printed a puzzle that became known
as the **problem of points**: two players stake equal amounts on a game of several rounds, the first to win a given
number of rounds to take the whole stake; the game is interrupted before anyone has won. How should the stake be
divided? Pacioli proposed dividing it in proportion to the rounds already won. Tartaglia, in the 1550s, objected that
this gives absurd answers (if the game stops after one round, the leader would take everything) but did not find a
convincing rule himself.

**Pascal and Fermat, 1654.** The question reached Blaise Pascal in Paris; it is traditionally said, and Pascal's own
letters support it, that it was put to him by Antoine Gombaud, the Chevalier de Méré, a writer with a taste for
gambling. Pascal wrote to Pierre de Fermat in Toulouse, and in letters during the summer and autumn of 1654 the two of
them solved it, by two different methods. Their key insight: **the division should depend only on what each player
still needs, not on what has already happened.** The past rounds are history; only the future is uncertain.

De Méré is also linked to the two dice questions at the end of §1.2: one six in four rolls of a die has probability
$1 - (5/6)^4 \approx 0.518$, while a double six in 24 rolls of two dice has $1 - (35/36)^{24} \approx 0.491$. The second bet is slightly *worse* than
even, although a rough rule of proportion (4 rolls for a 1-in-6 chance, so 24 rolls for a 1-in-36 chance) suggested
they should be the same. Pascal mentions the second question in his letter of 29 July 1654.

Christiaan Huygens heard of the work on a visit to Paris and wrote the first printed book on probability, *De
ratiociniis in ludo aleae* ("On reasoning in games of chance", 1657). Jacob Bernoulli's *Ars Conjectandi* (1713,
published after his death) proved the first law of large numbers. Laplace's *Théorie analytique des probabilités*
(1812) gathered the classical theory. Kolmogorov's axioms (1933) finally gave the subject the same footing as the rest
of mathematics.

### The problem of points, worked in full

**The problem.** Ann and Bob each stake 32 coins (64 in all). They play fair rounds: each round is won by Ann or by Bob
with probability $\frac{1}{2}$ each, independently of the others. The first to win 3 rounds takes the 64 coins. The game is
interrupted when Ann has won 2 rounds and Bob 1. How should the 64 coins be divided?

The fair answer is to give each player the stake multiplied by their probability of winning had the game been
finished. (Pascal phrased it as "what each could fairly claim"; the modern word is **expected value**, the subject of
Chapter 6.) So we need $P(\text{Ann would win})$.

**Fermat's method: list the futures.** Ann needs 1 more round; Bob needs 2. The game would certainly be decided within
2 more rounds (in 2 rounds, either Ann wins at least one, or Bob wins both). Fermat's trick is to *imagine that both
rounds are always played*, even if the first one already settles the game. The four equally likely futures are

$$
AA, \quad AB, \quad BA, \quad BB ,
$$

where $AB$ means Ann wins the next round and Bob the one after. Ann wins the game in the first three (she gets her one
round), Bob only in $BB$. So $P(\text{Ann}) = \frac{3}{4}$, and the stake should be split 48 coins to Ann, 16 to Bob.

**Is the trick honest?** Playing the extra round when the game is already decided does not change who won: whoever
reached 3 first is still the winner, whatever the unneeded round shows. And it makes all the futures the same length,
so they are equally likely. Without the trick the futures are "$A$" (probability $\frac{1}{2}$), "$BA$" ($\frac{1}{4}$) and "$BB$" ($\frac{1}{4}$),
which gives the same $\frac{1}{2} + \frac{1}{4} = \frac{3}{4}$ for Ann, but they are not equally likely, and counting them as three equal cases
would give the wrong $\frac{2}{3}$. (Pascal's letters report that Gilles de Roberval raised an objection of this kind to the
imagined rounds, and Pascal answered it with essentially the argument above.)

**Pascal's method: work backwards.** Pascal reasoned about values. Write $V(a, b)$ for Ann's fair share (out of 64) when
she still needs $a$ rounds and Bob needs $b$.

- If Ann needs 0 rounds she has won: $V(0, b) = 64$. If Bob needs 0 she has lost: $V(a, 0) = 0$.
- Otherwise, the next round takes the game to $(a - 1, b)$ or to $(a, b - 1)$, each with probability $\frac{1}{2}$, so a fair share is the
  average: $V(a, b) = \frac{1}{2}\big[V(a-1, b) + V(a, b-1)\big]$.

Now compute from the end:

- $V(1, 1) = \frac{1}{2}(64 + 0) = 32$: when both need one round, it is an even split.
- $V(1, 2) = \frac{1}{2}\big[V(0, 2) + V(1, 1)\big] = \frac{1}{2}(64 + 32) = 48$.

Ann's share is 48 coins, as Fermat found. Pascal's method needs no listing, only averaging, and it is the ancestor of
two great ideas of this book: conditioning on the first step (Chapter 3) and expected value (Chapter 6).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 200" role="img" aria-label="Pascal's backward computation: from the state where Ann needs 1 and Bob needs 2, worth 48, the next round leads to Ann wins, worth 64, or to both need 1, worth 32, which leads to 64 or 0">
  <rect x="20" y="80" width="90" height="40" rx="6" fill="#9cc9ea" stroke="currentColor"/>
  <text x="65" y="98" text-anchor="middle" font-size="12" fill="currentColor">need (1, 2)</text>
  <text x="65" y="114" text-anchor="middle" font-size="12" fill="currentColor">48</text>
  <rect x="170" y="20" width="90" height="40" rx="6" fill="#7ccf9a" stroke="currentColor"/>
  <text x="215" y="38" text-anchor="middle" font-size="12" fill="currentColor">Ann wins</text>
  <text x="215" y="54" text-anchor="middle" font-size="12" fill="currentColor">64</text>
  <rect x="170" y="140" width="90" height="40" rx="6" fill="#9cc9ea" stroke="currentColor"/>
  <text x="215" y="158" text-anchor="middle" font-size="12" fill="currentColor">need (1, 1)</text>
  <text x="215" y="174" text-anchor="middle" font-size="12" fill="currentColor">32</text>
  <rect x="320" y="90" width="90" height="40" rx="6" fill="#7ccf9a" stroke="currentColor"/>
  <text x="365" y="108" text-anchor="middle" font-size="12" fill="currentColor">Ann wins</text>
  <text x="365" y="124" text-anchor="middle" font-size="12" fill="currentColor">64</text>
  <rect x="320" y="150" width="90" height="40" rx="6" fill="#eea66f" stroke="currentColor"/>
  <text x="365" y="168" text-anchor="middle" font-size="12" fill="currentColor">Bob wins</text>
  <text x="365" y="184" text-anchor="middle" font-size="12" fill="currentColor">0</text>
  <g stroke="currentColor" fill="none">
    <line x1="110" y1="95" x2="170" y2="45"/>
    <line x1="110" y1="105" x2="170" y2="155"/>
    <line x1="260" y1="155" x2="320" y2="115"/>
    <line x1="260" y1="165" x2="320" y2="170"/>
  </g>
  <g font-size="11" fill="currentColor">
    <text x="128" y="62">A: 1/2</text>
    <text x="128" y="145">B: 1/2</text>
    <text x="270" y="128">A: 1/2</text>
    <text x="270" y="182">B: 1/2</text>
  </g>
</svg>
</div>

**A bigger case.** Suppose instead Ann needs 2 rounds and Bob needs 3. The game is decided within at most
$2 + 3 - 1 = 4$ more rounds (after 4 rounds, either Ann has won at least 2 or Bob has won at least 3). Imagine all 4 played:
$2^4 = 16$ equally likely futures. Ann wins exactly when she takes at least 2 of the 4, and the number of futures with exactly $k$
wins for Ann is $\binom{4}{k}$ (choose which $k$ of the 4 rounds she wins; see
[Combinatorics, chapter 2](../combinatorics/02-Permutations-and-Combinations.md) for $\binom{n}{k}$). So

$$
P(\text{Ann}) = \frac{\binom{4}{2} + \binom{4}{3} + \binom{4}{4}}{16} = \frac{6 + 4 + 1}{16} = \frac{11}{16} .
$$

*Check with Pascal's method:* $V(1,1) = 32$, $V(1,2) = 48$, $V(1,3) = \frac{1}{2}(64 + 48) = 56$, $V(2,1) = \frac{1}{2}(32 + 0) = 16$,
$V(2,2) = \frac{1}{2}(48 + 16) = 32$, $V(2,3) = \frac{1}{2}(56 + 32) = 44$. And $44/64 = 11/16$.

**The general formula.** *Level: intermediate.* If Ann needs $a$ rounds and Bob needs $b$, and each round is fair, then
with $n = a + b - 1$,

$$
P(\text{Ann wins}) = \frac{1}{2^{n}} \sum_{k=a}^{n} \binom{n}{k} .
$$

*Proof.* Play $n$ imagined rounds. If Ann wins at least $a$ of them, Bob wins at most $n - a = b - 1$, so Bob never reaches $b$ and
Ann is the winner. If Ann wins at most $a - 1$, Bob wins at least $n - (a - 1) = b$ and is the winner. So "Ann wins the game" is
exactly "Ann wins at least $a$ of the $n$ imagined rounds", and the $2^n$ sequences of $n$ rounds are equally likely, of which
$\binom{n}{k}$ give Ann exactly $k$ wins. $\square$

This formula is Pascal's own; he read the numbers off his arithmetic triangle, which is why we now call it Pascal's
triangle. The same reasoning with unfair rounds (Ann wins each with probability $p$) gives
$\sum_{k=a}^{n} \binom{n}{k} p^k (1-p)^{n-k}$, which is a sum of binomial probabilities, met properly in Chapter 5.

**Try it in Python.** Pascal's recursion in four lines, with exact fractions:

```python
from fractions import Fraction
from functools import lru_cache

@lru_cache(None)
def ann(a, b):          # probability Ann wins when she needs a, Bob needs b
    if a == 0: return Fraction(1)
    if b == 0: return Fraction(0)
    return (ann(a - 1, b) + ann(a, b - 1)) / 2

print(ann(1, 2), ann(2, 3), ann(5, 7))   # 3/4 11/16 743/1024
```

## Check yourself

??? question "1. A bag holds 3 red, 5 blue and 2 green marbles. One is drawn at random. Find the probability that it is not blue, and the probability that it is red or green."

    There are 10 equally likely marbles. $P(\text{blue}) = \frac{5}{10}$, so by the complement rule $P(\text{not blue}) = \frac{5}{10} = \frac{1}{2}$.
    Red and green are disjoint, so $P(\text{red or green}) = \frac{3}{10} + \frac{2}{10} = \frac{1}{2}$. Of course: "red or green" *is* "not blue"
    here, since every marble is one of the three colours.

??? question "2. Write down a sample space for tossing a coin and rolling a die together. How many outcomes does it have? What is the event 'heads and an even number'?"

    $\Omega = \{(c, d) : c \in \{H, T\},\ d \in \{1, \dots, 6\}\}$, which has $2 \times 6 = 12$ equally likely outcomes.
    The event is $\{(H,2), (H,4), (H,6)\}$, with probability $\frac{3}{12} = \frac{1}{4}$.

??? question "3. Two dice are rolled. Find the probability that the total is 8, and the probability that at least one die shows a 6."

    Total 8: $(2,6), (3,5), (4,4), (5,3), (6,2)$, so $\frac{5}{36}$. At least one 6: the complement, "no 6", has $5 \times 5 = 25$
    outcomes, so the answer is $1 - \frac{25}{36} = \frac{11}{36}$. *Check by counting:* 6 outcomes with a red 6, 6 with a blue 6, and
    $(6,6)$ counted in both, so $6 + 6 - 1 = 11$.

??? question "4. Can there be events with $P(A) = 0.7$, $P(B) = 0.6$ and $P(A \cap B) = 0.2$? Why or why not?"

    No. By the addition rule $P(A \cup B) = 0.7 + 0.6 - 0.2 = 1.1$, which is more than 1, impossible by Corollary 1.6. In
    general $P(A \cap B) \ge P(A) + P(B) - 1$ (this is called Bonferroni's inequality), so here the overlap must be at least 0.3.

??? question "5. Prove that $P(A \cap B) \le \min(P(A), P(B))$ and $P(A \cup B) \ge \max(P(A), P(B))$."

    $A \cap B \subseteq A$ and $A \cap B \subseteq B$, so by monotonicity (Theorem 1.5) $P(A \cap B)$ is at most both $P(A)$ and $P(B)$.
    Similarly $A \subseteq A \cup B$ and $B \subseteq A \cup B$, so $P(A \cup B)$ is at least both.

??? question "6. In a class, 60% of the students study French, 50% study Spanish and 20% study both. What fraction study neither?"

    Pick a student at random. $P(F \cup S) = 0.6 + 0.5 - 0.2 = 0.9$, so by De Morgan and the complement rule
    $P(F^c \cap S^c) = P\big((F \cup S)^c\big) = 1 - 0.9 = 0.1$. So 10% study neither.

??? question "7. Prove that $P(A \setminus B) = P(A) - P(A \cap B)$ for any events, even when $B$ is not inside $A$."

    $A$ is the disjoint union of $A \cap B$ (in $A$ and in $B$) and $A \setminus B$ (in $A$, not in $B$). By additivity
    $P(A) = P(A \cap B) + P(A \setminus B)$. Rearrange. (Theorem 1.5 is the special case $B \subseteq A$ with the letters swapped.)

??? question "8. Ann and Bob play the problem of points with fair rounds, first to 4 wins. Ann has 3 wins and Bob has 1. How should a stake of 80 coins be split?"

    Ann needs $a = 1$, Bob needs $b = 3$, so imagine $n = 3$ rounds. Bob wins only if he takes all 3: probability $\frac{1}{8}$.
    So Ann's probability is $\frac{7}{8}$: she gets $\frac{7}{8} \times 80 = 70$ coins and Bob 10. *Check with Pascal's values (as fractions of
    the stake):* $V(1,1) = \frac{1}{2}$, $V(1,2) = \frac{3}{4}$, $V(1,3) = \frac{1}{2}(1 + \frac{3}{4}) = \frac{7}{8}$.

??? question "9. A coin is tossed until the first head. Find the probability that the number of tosses is a multiple of 3."

    The outcomes $3, 6, 9, \dots$ have probabilities $\frac{1}{8}, \frac{1}{64}, \frac{1}{512}, \dots$, a geometric series with first term $\frac{1}{8}$ and
    ratio $\frac{1}{8}$. Its sum is $\frac{1/8}{1 - 1/8} = \frac{1}{7}$.

??? question "10. Show that finite additivity cannot by itself give the answer $P(\text{first head on an even toss}) = \frac{1}{3}$: which step needs countable additivity?"

    The event "first head on an even toss" is the union of the infinitely many disjoint events "first head on toss 2",
    "on toss 4", "on toss 6", and so on. Finite additivity only lets you add finitely many of them: it shows that the
    probability is at least $\frac{1}{4} + \frac{1}{16} + \cdots + \frac{1}{4^m}$ for every $m$ (by monotonicity), hence at least $\frac{1}{3}$. The step "equals the
    whole infinite sum" is exactly countable additivity. Without it there are strange "finitely additive probabilities"
    on the whole numbers that give every single number probability 0 but the whole set probability 1, so the sum of the
    parts need not equal the whole.

??? question "11. Prove Bonferroni's inequality for three events: $P(A \cap B \cap C) \ge P(A) + P(B) + P(C) - 2$."

    Apply the union bound to the complements: $P(A^c \cup B^c \cup C^c) \le P(A^c) + P(B^c) + P(C^c) = 3 - P(A) - P(B) - P(C)$. By De Morgan,
    $A^c \cup B^c \cup C^c = (A \cap B \cap C)^c$, so $1 - P(A \cap B \cap C) \le 3 - P(A) - P(B) - P(C)$, which rearranges to the claim.
    For example, if three systems each work with probability 0.99, all three work with probability at least 0.97, whatever the relations between them.

??? question "12. (Pascal's two methods agree.) Show that $V(a, b)/64 = \frac{1}{2^n} \sum_{k=a}^{n} \binom{n}{k}$, with $n = a + b - 1$, satisfies Pascal's averaging rule."

    Write $W(a, b)$ for the right side, the probability that a fair coin gives at least $a$ heads in $a + b - 1$ tosses. Condition on
    the first toss (Chapter 3 makes this formal): with probability $\frac{1}{2}$ it is a head, and then you need at least $a - 1$ heads in the
    remaining $a + b - 2 = (a - 1) + b - 1$ tosses, probability $W(a - 1, b)$; with probability $\frac{1}{2}$ it is a tail, and then you need at least
    $a$ heads in the remaining $a + (b - 1) - 1$ tosses, probability $W(a, b - 1)$. So $W(a, b) = \frac{1}{2}\big[W(a-1, b) + W(a, b-1)\big]$, with
    $W(0, b) = 1$ and $W(a, 0) = 0$: exactly Pascal's rule and boundary values. Both methods compute the same numbers, since the rule
    and the boundary values determine every value. Algebraically this is Pascal's identity $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$ in disguise.

## What you learned

- "Probability" has three readings: equally likely cases, long-run frequency and degree of belief. They agree on the
  rules and differ on interpretation.
- An experiment is described by a sample space $\Omega$ of outcomes; events are subsets; "not", "and", "or" are
  complement, intersection and union, linked by De Morgan's laws.
- Kolmogorov's axioms: $P(A) \ge 0$, $P(\Omega) = 1$, and probabilities of disjoint events add (countably many at a time).
- From them alone: $P(\varnothing) = 0$, $P(A^c) = 1 - P(A)$, $A \subseteq B$ implies $P(A) \le P(B)$, $P(A \cup B) = P(A) + P(B) - P(A \cap B)$, the union bound,
  and continuity along growing or shrinking sequences.
- On a finite or countable space a probability is a list of non-negative numbers adding to 1; the equally likely
  case gives $P(A) = |A|/|\Omega|$.
- The problem of points (Pascal and Fermat, 1654): split the stake by the chance of winning from here, computed by
  listing equal-length futures (Fermat) or by averaging backwards (Pascal).

**Next:** [Chapter 2](02-Counting-and-Equally-Likely-Outcomes.md), where equally likely outcomes meet serious counting:
dice, cards, lotteries, birthdays, poker hands, and a paradox that shows when "equally likely" has no meaning.

## Further reading

- A. N. Kolmogorov, *Foundations of the Theory of Probability* (English translation of the 1933 *Grundbegriffe*,
  2nd edition, Chelsea, 1956). Short, and still readable.
- William Feller, *An Introduction to Probability Theory and Its Applications*, Volume 1 (3rd edition, 1968),
  Chapter I.
- Sheldon Ross, *A First Course in Probability* (10th edition, 2019), Chapters 1 and 2.
- Geoffrey Grimmett and Dominic Welsh, *Probability: An Introduction* (2nd edition, 2014), Chapter 1.
- Ian Hacking, *The Emergence of Probability* (1975; 2nd edition 2006), on how the idea of probability appeared around 1660.
- Keith Devlin, *The Unfinished Game: Pascal, Fermat, and the Seventeenth-Century Letter that Made the World Modern* (2008),
  a readable account of the 1654 correspondence.
- J. E. Kerrich, *An Experimental Introduction to the Theory of Probability* (1946).
- On this site: the Topics lessons [The coin flip experiment](../../topics/probability/level-1/05-coin-flip-experiment.md),
  [Two dice: 36 outcomes](../../topics/probability/level-3/04-two-dice.md),
  [The chance of not happening](../../topics/probability/level-3/03-not-happening.md),
  ["At least one"](../../topics/probability/level-5/04-at-least-one.md) and
  [Equally likely or not](../../topics/probability/level-3/06-equally-likely.md);
  [Combinatorics, chapter 1](../combinatorics/01-Counting-Principles.md) for the counting rules behind §1.2;
  [Combinatorics, chapter 5](../combinatorics/05-Inclusion-Exclusion.md) for inclusion-exclusion with $n$ sets;
  and the [Combinatorics book](../combinatorics/index.md) as a whole for counting.
