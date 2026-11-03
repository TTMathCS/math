# 3. Conditional probability and independence

*Probabilities are not fixed: they change when you learn something. The chance that a card is a king is 1 in 13, but
if you glimpse that it is a face card, the chance jumps to 1 in 3. This chapter makes "the probability of $A$ given
$B$" precise, turns it into the multiplication rule and the tree diagrams you can draw for any multi-stage experiment,
and proves the law of total probability, which breaks a hard question into easy cases. It then defines independence
properly (and shows that "pairwise" is not enough), settles the Monty Hall problem by stating the host's rules out loud,
and finishes with the gambler's ruin: a gambler with 10 dollars plays until broke or doubled, and we find the exact
chance of each, with a proof.*

!!! abstract "In this chapter"

    **You will learn:**

    - conditional probability as "shrinking the sample space", and why $P(\cdot \mid B)$ is itself a probability
    - the multiplication rule and tree diagrams for experiments in stages
    - the law of total probability, and the habit of "conditioning on the first step"
    - independence of two events and of many, and an example of events that are pairwise but not mutually independent
    - the Monty Hall problem, done properly: the answer depends on the host's rule, and we make it explicit
    - the gambler's ruin: the exact probability of reaching a target before going broke, with a full proof

    **You need:** [Chapter 1](01-What-Probability-Is.md) (axioms, complement and addition rules) and
    [Chapter 2](02-Counting-and-Equally-Likely-Outcomes.md) (counting equally likely outcomes). For a gentler version,
    see the Topics lessons
    [Tree diagrams](../../topics/probability/level-4/02-tree-diagrams.md),
    [Independent events](../../topics/probability/level-4/04-independent-events.md),
    [The multiplication rule](../../topics/probability/level-5/03-multiplication-rule.md),
    [Trees with unequal branches](../../topics/probability/level-5/05-unequal-branch-trees.md),
    ["Given": conditional probability](../../topics/probability/level-6/01-given-two-way-tables.md),
    [Independence, properly](../../topics/probability/level-6/02-independence-properly.md) and
    [The Monty Hall problem](../../topics/probability/level-6/05-monty-hall.md).

    **Levels:** 3.1 to 3.3 are beginner; 3.4 is beginner to intermediate; 3.5 is intermediate; 3.6 is intermediate
    (a proof by recurrence; the termination argument is a little more advanced).

## 3.1 Conditioning: shrinking the space

**A question.** Two dice are rolled out of your sight. A friend looks and tells you "the total is at least 10". What is
the probability now that the dice show a double?

Before the news, $P(\text{double}) = \frac{6}{36} = \frac{1}{6}$. After it, only the outcomes with total at least 10 are still possible:

$$
(4,6),\ (5,5),\ (6,4),\ (5,6),\ (6,5),\ (6,6) .
$$

These six were equally likely before, and the news does nothing to favour one of them over another, so they are still
equally likely among themselves. Two of them are doubles. So the new probability is $\frac{2}{6} = \frac{1}{3}$.

That is the whole idea: **information shrinks the sample space to the outcomes that are still possible, and the
probabilities of those outcomes are rescaled to add up to 1.**

### The definition

**Definition.** Let $B$ be an event with $P(B) > 0$. The **conditional probability of $A$ given $B$** is

$$
P(A \mid B) = \frac{P(A \cap B)}{P(B)} .
$$

The vertical bar is read "given". The numerator keeps only the part of $A$ that is still possible; the denominator
rescales so that $B$ itself gets probability 1. For equally likely outcomes it is just counting inside $B$:
$P(A \mid B) = \frac{|A \cap B|}{|B|}$. *Check on the question:* $|A \cap B| = 2$ (the doubles $(5,5)$ and $(6,6)$), $|B| = 6$, so $\frac{2}{6}$.

**Example (cards).** A card is drawn from a well-shuffled deck. Given that it is a face card (jack, queen or king), what
is the probability that it is a king? $P(\text{king} \cap \text{face}) = \frac{4}{52}$ and $P(\text{face}) = \frac{12}{52}$, so the answer is $\frac{4}{12} = \frac{1}{3}$.

**Example (a two-way table).** In a survey of 200 people:

| | drinks coffee | does not | total |
|---|---|---|---|
| **under 30** | 30 | 50 | 80 |
| **30 or over** | 90 | 30 | 120 |
| **total** | 120 | 80 | 200 |

Pick one of the 200 at random. $P(\text{coffee}) = \frac{120}{200} = 0.6$, but $P(\text{coffee} \mid \text{under } 30) = \frac{30}{80} = 0.375$ and
$P(\text{coffee} \mid 30 \text{ or over}) = \frac{90}{120} = 0.75$. And $P(\text{under } 30 \mid \text{coffee}) = \frac{30}{120} = 0.25$. Note that $P(A \mid B)$ and
$P(B \mid A)$ are different numbers in general. Mixing them up is a serious error with a name of its own (Chapter 4).

### Conditional probability is a probability

**Theorem 3.1.** Fix $B$ with $P(B) > 0$. Then the rule $A \mapsto P(A \mid B)$ satisfies Kolmogorov's three axioms.

*Proof.* Non-negativity: $P(A \cap B) \ge 0$ and $P(B) > 0$. Normalisation: $P(\Omega \mid B) = \frac{P(B)}{P(B)} = 1$. Countable additivity: if $A_1, A_2, \dots$ are
pairwise disjoint, so are $A_1 \cap B, A_2 \cap B, \dots$, and their union is $(\bigcup A_i) \cap B$. So

$$
P\Big(\bigcup_i A_i \,\Big|\, B\Big) = \frac{P\big(\bigcup_i (A_i \cap B)\big)}{P(B)} = \sum_i \frac{P(A_i \cap B)}{P(B)} = \sum_i P(A_i \mid B) . \qquad \square
$$

So every theorem of Chapter 1 holds for conditional probabilities too: $P(A^c \mid B) = 1 - P(A \mid B)$, the addition rule given $B$,
the union bound given $B$, and so on. Conditioning does not create a new theory; it gives you a new probability to apply
the old theory to.

### How the information arrives matters

**A question.** A family has two children. Given that at least one is a boy, what is the probability that both are?

Model: the four birth orders $BB, BG, GB, GG$ (older child first) are equally likely. (Real birth ratios are not exactly
50:50, but close.) "At least one boy" leaves $BB, BG, GB$, so $P(BB \mid \text{at least one boy}) = \frac{1}{3}$. Given instead that
*the older child* is a boy, only $BB, BG$ remain, and the answer is $\frac{1}{2}$.

Now suppose you meet one of the two children at random, and it is a boy. The event you observed is not "at least one
boy"; it is "the child I met is a boy". In the four families, the chance of meeting a boy is 1, $\frac{1}{2}$, $\frac{1}{2}$, 0 respectively, so

$$
P(BB \mid \text{met a boy}) = \frac{\frac{1}{4} \cdot 1}{\frac{1}{4} \cdot 1 + \frac{1}{4} \cdot \frac{1}{2} + \frac{1}{4} \cdot \frac{1}{2} + 0} = \frac{1}{2} .
$$

(This uses the rules of §3.2 and §3.3.) Three versions of "one of them is a boy", three different events, two different
answers. **To condition correctly you must condition on what you actually learned, including how you came to learn
it.** The Monty Hall problem in §3.5 is the most famous instance of this rule.

## 3.2 The multiplication rule and trees

**A question.** Two cards are dealt from a well-shuffled deck. What is the probability that both are aces?

Rearranging the definition of conditional probability gives a rule for "and":

**Theorem 3.2 (multiplication rule).** If $P(B) > 0$, then $P(A \cap B) = P(B)\,P(A \mid B)$.

Think of it as a recipe for experiments in stages: the probability that the first stage gives $B$, times the probability
that the second stage gives $A$ *given* what happened first. For the two aces: $P(\text{first ace}) = \frac{4}{52}$, and given the first card
was an ace, 3 aces remain among 51 cards, so $P(\text{second ace} \mid \text{first ace}) = \frac{3}{51}$. So

$$
P(\text{both aces}) = \frac{4}{52} \cdot \frac{3}{51} = \frac{1}{221} ,
$$

which agrees with the counting in §2.1, with less counting.

**Theorem 3.3 (chain rule).** For events $A_1, \dots, A_n$ with $P(A_1 \cap \cdots \cap A_{n-1}) > 0$,

$$
P(A_1 \cap A_2 \cap \cdots \cap A_n) = P(A_1)\,P(A_2 \mid A_1)\,P(A_3 \mid A_1 \cap A_2) \cdots P(A_n \mid A_1 \cap \cdots \cap A_{n-1}) .
$$

*Proof.* Write each conditional probability as a fraction. The product telescopes:

$$
P(A_1) \cdot \frac{P(A_1 \cap A_2)}{P(A_1)} \cdot \frac{P(A_1 \cap A_2 \cap A_3)}{P(A_1 \cap A_2)} \cdots \frac{P(A_1 \cap \cdots \cap A_n)}{P(A_1 \cap \cdots \cap A_{n-1})} ,
$$

and every numerator except the last cancels the next denominator. (All the denominators are positive, because each of
the sets contains $A_1 \cap \cdots \cap A_{n-1}$, which has positive probability.) $\square$

**Example (the birthday problem again).** Let $A_i$ be "person $i$'s birthday differs from those of persons $1, \dots, i-1$". Given that
the first $i - 1$ birthdays are all different, person $i$ must avoid $i - 1$ days, so $P(A_i \mid A_1 \cap \cdots \cap A_{i-1}) = \frac{365 - (i-1)}{365}$. The chain rule
gives the product of §2.2 directly.

### Tree diagrams

A **tree diagram** draws a staged experiment: each branch is labelled with the conditional probability of that step given
the path so far. By the chain rule, **the probability of a path is the product of the probabilities along it**, and since
different paths are disjoint, **the probability of an event is the sum over the paths that make it happen.**

**Example.** An urn holds 3 red and 2 blue balls. Two are drawn without replacement.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 230" role="img" aria-label="Tree diagram for two draws without replacement from 3 red and 2 blue balls: first R with 3/5 or B with 2/5, then the second draw, giving paths RR 6/20, RB 6/20, BR 6/20, BB 2/20">
  <circle cx="30" cy="115" r="5" fill="currentColor"/>
  <g stroke="currentColor" fill="none">
    <line x1="30" y1="115" x2="160" y2="60"/>
    <line x1="30" y1="115" x2="160" y2="170"/>
    <line x1="180" y1="60" x2="310" y2="30"/>
    <line x1="180" y1="60" x2="310" y2="90"/>
    <line x1="180" y1="170" x2="310" y2="140"/>
    <line x1="180" y1="170" x2="310" y2="200"/>
  </g>
  <circle cx="170" cy="60" r="11" fill="#eea66f" stroke="currentColor"/>
  <text x="170" y="64" text-anchor="middle" font-size="11" fill="currentColor">R</text>
  <circle cx="170" cy="170" r="11" fill="#9cc9ea" stroke="currentColor"/>
  <text x="170" y="174" text-anchor="middle" font-size="11" fill="currentColor">B</text>
  <circle cx="320" cy="30" r="11" fill="#eea66f" stroke="currentColor"/>
  <text x="320" y="34" text-anchor="middle" font-size="11" fill="currentColor">R</text>
  <circle cx="320" cy="90" r="11" fill="#9cc9ea" stroke="currentColor"/>
  <text x="320" y="94" text-anchor="middle" font-size="11" fill="currentColor">B</text>
  <circle cx="320" cy="140" r="11" fill="#eea66f" stroke="currentColor"/>
  <text x="320" y="144" text-anchor="middle" font-size="11" fill="currentColor">R</text>
  <circle cx="320" cy="200" r="11" fill="#9cc9ea" stroke="currentColor"/>
  <text x="320" y="204" text-anchor="middle" font-size="11" fill="currentColor">B</text>
  <g font-size="12" fill="currentColor">
    <text x="80" y="78">3/5</text>
    <text x="80" y="162">2/5</text>
    <text x="232" y="38">2/4</text>
    <text x="232" y="90">2/4</text>
    <text x="232" y="148">3/4</text>
    <text x="232" y="200">1/4</text>
    <text x="345" y="34">RR: 6/20</text>
    <text x="345" y="94">RB: 6/20</text>
    <text x="345" y="144">BR: 6/20</text>
    <text x="345" y="204">BB: 2/20</text>
  </g>
</svg>
</div>

- $P(\text{both red}) = \frac{3}{5} \cdot \frac{2}{4} = \frac{6}{20} = \frac{3}{10}$.
- $P(\text{one of each}) = \frac{6}{20} + \frac{6}{20} = \frac{3}{5}$.
- $P(\text{second ball red}) = \frac{6}{20} + \frac{6}{20} = \frac{3}{5}$.

*Check:* the four paths add to $\frac{6 + 6 + 6 + 2}{20} = 1$.

The last answer deserves a second look. The second ball is red with probability $\frac{3}{5}$, *exactly the same* as the first. That is
not a coincidence: before anything is seen, every position in a random order is equally likely to hold any given ball, so
the second ball is just as likely to be red as the first. This **exchangeability** argument often replaces a whole tree: the
probability that the tenth card dealt is an ace is $\frac{4}{52}$, no matter what you do not know about the first nine.

## 3.3 The law of total probability

**A question.** A factory has three machines. Machine A makes 50% of the parts, B makes 30% and C makes 20%. Their defect
rates are 1%, 2% and 3%. What fraction of all parts are defective?

The answer is a weighted average of the defect rates, weighted by how much each machine makes:

$$
0.5 \times 0.01 + 0.3 \times 0.02 + 0.2 \times 0.03 = 0.005 + 0.006 + 0.006 = 0.017 .
$$

So 1.7% of parts are defective. This is the law of total probability.

**Theorem 3.4 (law of total probability).** Let $B_1, \dots, B_n$ be a partition of $\Omega$ (pairwise disjoint, union $\Omega$) with every
$P(B_i) > 0$. Then for every event $A$,

$$
P(A) = \sum_{i=1}^{n} P(A \mid B_i)\,P(B_i) .
$$

The same holds for a countable partition $B_1, B_2, \dots$, with an infinite sum.

*Proof.* Since the $B_i$ cover $\Omega$ without overlapping, $A$ is the disjoint union of the pieces $A \cap B_1, \dots, A \cap B_n$. By additivity and
the multiplication rule,

$$
P(A) = \sum_{i} P(A \cap B_i) = \sum_{i} P(A \mid B_i)\,P(B_i) . \qquad \square
$$

In words: **to find the probability of $A$, split into cases, find the probability of $A$ in each case, and average,
weighting each case by its probability.** On a tree, the cases are the first-level branches.

**Example (an unknown die).** A box holds two dice: one fair, one loaded so that a six has probability $\frac{1}{2}$. You pick a die at
random and roll it. $P(\text{six}) = \frac{1}{6} \cdot \frac{1}{2} + \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{12} + \frac{3}{12} = \frac{1}{3}$.

**Example (conditioning on the first step).** Ann and Bob take turns rolling a die, Ann first; the first to roll a six wins.
What is Ann's chance $a$ of winning? Condition on Ann's first roll. With probability $\frac{1}{6}$ she wins at once. With probability $\frac{5}{6}$
she fails, and then Bob is in exactly Ann's starting position: he now wins with probability $a$, so Ann wins with probability $1 - a$.
So

$$
a = \frac{1}{6} \cdot 1 + \frac{5}{6}(1 - a) , \quad\text{so}\quad \frac{11}{6}a = 1 , \quad a = \frac{6}{11} .
$$

*Check by summing paths:* Ann wins on her $k$-th roll with probability $(\frac{5}{6})^{2(k-1)} \frac{1}{6}$, and $\frac{1}{6} \sum_{k \ge 1} (\frac{25}{36})^{k-1} = \frac{1}{6} \cdot \frac{36}{11} = \frac{6}{11}$.

The phrase "is in exactly the starting position" hides an assumption: what happens after the first step depends only on
the present situation, not on how we got there. For dice and coins that is clear (they have no memory). Processes with
this property are called **Markov**, and Chapter 13 is about them. Conditioning on the first step is one of the most
powerful techniques in probability; §3.6 uses it to solve a problem that looks infinitely complicated.

## 3.4 Independence

*Level: beginner to intermediate.*

**A question.** You toss a coin and roll a die. Surely the coin does not affect the die. How do we say that in symbols,
and how do we check it when the "obvious" physical reason is missing?

### Two events

Knowing $B$ does not change the chance of $A$ when $P(A \mid B) = P(A)$. Multiplying by $P(B)$ turns this into a symmetric condition that also
makes sense when $P(B) = 0$:

**Definition.** Events $A$ and $B$ are **independent** if $P(A \cap B) = P(A)\,P(B)$.

If $P(B) > 0$, this is equivalent to $P(A \mid B) = P(A)$; if $P(A) > 0$, to $P(B \mid A) = P(B)$. So independence goes both ways: if $B$ tells you
nothing about $A$, then $A$ tells you nothing about $B$.

**Example.** Draw a card. Are "king" and "heart" independent? $P(\text{king} \cap \text{heart}) = \frac{1}{52}$ and $P(\text{king})P(\text{heart}) = \frac{1}{13} \cdot \frac{1}{4} = \frac{1}{52}$. Yes:
learning the suit tells you nothing about the rank. There is no physical separation here (it is one card); independence
is a fact about the numbers.

**Example.** Two dice. $A$ = "the total is 7", $B$ = "the red die shows 3". $P(A \cap B) = \frac{1}{36}$, $P(A)P(B) = \frac{1}{6} \cdot \frac{1}{6} = \frac{1}{36}$: independent!
Whatever the red die shows, exactly one blue value makes 7. But with $A'$ = "the total is 8": $P(A' \cap B) = \frac{1}{36}$ while
$P(A')P(B) = \frac{5}{36} \cdot \frac{1}{6} = \frac{5}{216}$: not independent (a red 1 would make a total of 8 impossible).

**Disjoint is not independent.** If $A$ and $B$ are disjoint and both have positive probability, then $P(A \cap B) = 0 \ne P(A)P(B)$. They are
strongly *dependent*: learning that $B$ happened tells you for certain that $A$ did not.

**Theorem 3.5.** If $A$ and $B$ are independent, so are $A$ and $B^c$, $A^c$ and $B$, and $A^c$ and $B^c$.

*Proof.* $A$ is the disjoint union of $A \cap B$ and $A \cap B^c$, so

$$
P(A \cap B^c) = P(A) - P(A \cap B) = P(A) - P(A)P(B) = P(A)\big(1 - P(B)\big) = P(A)\,P(B^c) .
$$

That is the first claim. Swapping the letters gives the second, and applying the first claim to the independent pair
$(A^c, B)$ gives the third. $\square$

This matches intuition: if knowing whether $B$ happened is useless for predicting $A$, then knowing whether $B$ did *not* happen is
useless too.

### Many events

For three or more events, it is not enough to check pairs.

**Definition.** Events $A_1, \dots, A_n$ are **(mutually) independent** if for every choice of two or more of them,
$A_{i_1}, \dots, A_{i_k}$ with $i_1 < \cdots < i_k$,

$$
P(A_{i_1} \cap \cdots \cap A_{i_k}) = P(A_{i_1}) \cdots P(A_{i_k}) .
$$

They are **pairwise independent** if this holds just for pairs.

For three events, mutual independence means four equations: the three pairs and the triple.

**Example (pairwise but not mutually independent).** Toss two fair coins. Let

- $A$ = "the first coin is heads",
- $B$ = "the second coin is heads",
- $C$ = "the two coins show the same face".

Each has probability $\frac{1}{2}$. Each pair has probability $\frac{1}{4}$: $A \cap B = \{HH\}$, $A \cap C = \{HH\}$, $B \cap C = \{HH\}$. So all three pairs are independent.
But $A \cap B \cap C = \{HH\}$ has probability $\frac{1}{4}$, not $\frac{1}{8}$. In fact any two of the events determine the third: if both coins are heads, they
certainly match. Each pair is independent, but the three together are not.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 120" role="img" aria-label="The four outcomes HH, HT, TH, TT with marks showing which of the events A, B, C each belongs to; HH is in all three, HT only in A, TH only in B, TT only in C">
  <g font-size="14" fill="currentColor" text-anchor="middle">
    <text x="60" y="30">HH</text><text x="160" y="30">HT</text><text x="260" y="30">TH</text><text x="360" y="30">TT</text>
  </g>
  <rect x="30" y="45" width="60" height="18" rx="4" fill="#eea66f"/>
  <rect x="30" y="68" width="60" height="18" rx="4" fill="#9cc9ea"/>
  <rect x="30" y="91" width="60" height="18" rx="4" fill="#7ccf9a"/>
  <rect x="130" y="45" width="60" height="18" rx="4" fill="#eea66f"/>
  <rect x="230" y="68" width="60" height="18" rx="4" fill="#9cc9ea"/>
  <rect x="330" y="91" width="60" height="18" rx="4" fill="#7ccf9a"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="60" y="58">A</text><text x="60" y="81">B</text><text x="60" y="104">C</text>
    <text x="160" y="58">A</text><text x="260" y="81">B</text><text x="360" y="104">C</text>
  </g>
</svg>
</div>

**Example (the triple equation alone is not enough either).** Take 8 equally likely outcomes $\{1, \dots, 8\}$ and
$A = \{1, 2, 3, 4\}$, $B = \{1, 2, 3, 5\}$, $C = \{1, 6, 7, 8\}$. Then $P(A \cap B \cap C) = P(\{1\}) = \frac{1}{8} = P(A)P(B)P(C)$, but $P(A \cap B) = \frac{3}{8} \ne \frac{1}{4}$. So the
definition really needs every sub-collection.

**Why the full definition is the right one.** With mutual independence, *any* events built from separate groups of the
$A_i$ are independent of each other: for example $A_1 \cup A_2$ is independent of $A_3 \cap A_4^c$. (This takes a little work to prove in
general, and Chapter 17 gives the clean version.) Pairwise independence does not give this: in the coin example, $A \cap B$ is
not independent of $C$.

### Independent repeated trials

When we say "toss a coin 10 times" or "test 20 components", we nearly always mean that the trials are mutually
independent. Then probabilities of whole sequences multiply.

**Example (at least one).** If each of $n$ independent trials succeeds with probability $p$, then
$P(\text{no successes}) = (1 - p)^n$ and $P(\text{at least one}) = 1 - (1 - p)^n$. With $p = \frac{1}{6}$ and $n = 4$ this is de Méré's $0.5177$ from Chapter 1.

**Example (reliability).** Three components each work with probability 0.9, independently. Wired in **series** (all must work), the
system works with probability $0.9^3 = 0.729$. Wired in **parallel** (any one is enough), it fails only if all three fail:
$1 - 0.1^3 = 0.999$. Redundancy is why spacecraft carry backup systems; but its benefit depends on the failures really being
independent, and a common cause (one power surge, one design flaw) can break that assumption.

## 3.5 The Monty Hall problem

*Level: intermediate.*

**The puzzle.** On a game show there are three closed doors. Behind one is a car; behind the other two, goats. You pick a
door, say door 1. The host, who knows where the car is, opens another door, say door 3, and shows a goat. He then offers
you the chance to switch to door 2. Should you?

Most people say it does not matter: two doors left, so 50:50. The right answer, under the usual rules, is that switching
wins with probability $\frac{2}{3}$.

### The rules, made explicit

The answer depends on how the host behaves, so we state it. These are the **standard rules**:

1. The car is placed behind one of the three doors at random, each with probability $\frac{1}{3}$.
2. The host always opens a door you did not pick.
3. The host always opens a door with a goat behind it (he knows where the car is).
4. If both doors you did not pick have goats (because you picked the car), he chooses between them at random, $\frac{1}{2}$ each.
5. He always offers the switch.

### The solution

You picked door 1. Let $C_i$ be "the car is behind door $i$", and $H_3$ be "the host opens door 3". By the rules,

- $P(H_3 \mid C_1) = \frac{1}{2}$ (rule 4: he could open 2 or 3),
- $P(H_3 \mid C_2) = 1$ (rules 2 and 3: he must not open door 1 or door 2),
- $P(H_3 \mid C_3) = 0$ (rule 3: he never shows the car).

By the law of total probability, $P(H_3) = \frac{1}{3} \cdot \frac{1}{2} + \frac{1}{3} \cdot 1 + \frac{1}{3} \cdot 0 = \frac{1}{2}$. Now condition:

$$
P(C_2 \mid H_3) = \frac{P(C_2 \cap H_3)}{P(H_3)} = \frac{\frac{1}{3} \cdot 1}{\frac{1}{2}} = \frac{2}{3} , \qquad P(C_1 \mid H_3) = \frac{\frac{1}{3} \cdot \frac{1}{2}}{\frac{1}{2}} = \frac{1}{3} .
$$

Switching to door 2 wins with probability $\frac{2}{3}$; staying wins with $\frac{1}{3}$.

**The short argument.** Under the standard rules, the host *always* reveals a goat, so his action never changes the chance
that your first pick was right: that stays $\frac{1}{3}$. Switching wins exactly when your first pick was wrong, which has probability $\frac{2}{3}$.
Put differently: if you plan to switch, you win whenever you first picked a goat, because the host then has no choice and
the remaining door must hide the car.

**Why the 50:50 intuition fails.** "Two doors left, so 50:50" treats the two remaining doors as symmetric. They are not.
Door 1 was chosen by you, before anything happened, and the host was forbidden to open it. Door 2 survived a test: the host
*could* have opened it and did not. Surviving that test is evidence that it hides the car.

**Try it in Python.**

```python
import random

def play(switch):
    car, pick = random.randrange(3), random.randrange(3)
    goats = [d for d in range(3) if d != pick and d != car]   # doors the host may open
    opened = random.choice(goats)
    if switch:
        pick = next(d for d in range(3) if d != pick and d != opened)
    return pick == car

n = 100_000
print(sum(play(True) for _ in range(n)) / n)    # about 0.667
print(sum(play(False) for _ in range(n)) / n)   # about 0.333
```

### Change the rules, change the answer

**A host with a preference.** Change rule 4: when you have picked the car, the host opens door 3 with probability $q$ and door 2
with probability $1 - q$. Then $P(H_3) = \frac{q}{3} + \frac{1}{3}$ and

$$
P(C_2 \mid H_3) = \frac{\frac{1}{3}}{\frac{q}{3} + \frac{1}{3}} = \frac{1}{1 + q} .
$$

With $q = \frac{1}{2}$ this is the standard $\frac{2}{3}$. If the host always prefers door 3 ($q = 1$) and opens it, switching wins only half the time;
but if this host opens door 2 instead, you know your door is a goat and switching wins for certain. In every case
$\frac{1}{1+q} \ge \frac{1}{2}$, so switching is never worse than staying.

**A host who does not know ("Monty Fall").** Suppose the host opens one of the two other doors at random, not knowing where the
car is, and it happens to show a goat. Now $P(H_3 \text{ and goat} \mid C_1) = \frac{1}{2}$, $P(H_3 \text{ and goat} \mid C_2) = \frac{1}{2}$, $P(H_3 \text{ and goat} \mid C_3) = 0$ (he would
have revealed the car). So

$$
P(C_2 \mid H_3 \text{ and goat}) = \frac{\frac{1}{3} \cdot \frac{1}{2}}{\frac{1}{3} \cdot \frac{1}{2} + \frac{1}{3} \cdot \frac{1}{2}} = \frac{1}{2} .
$$

Here 50:50 is right. The door you see opened is the same, yet the probability is different, because the *process* that
opened it is different. This is the two-children lesson of §3.1 again.

**A host who offers the switch only when it hurts you.** If the host offers the switch only when you have picked the car,
switching always loses. Rule 5 matters too.

### A short history

The problem was posed by the statistician Steve Selvin in two letters to *The American Statistician* in 1975, and named
after Monty Hall, host of the television show *Let's Make a Deal*. It
became famous in 1990, when Marilyn vos Savant answered it in her *Parade* magazine column with "switch"; thousands of
readers, many with doctorates, wrote to say she was wrong. She was right under the standard rules, which her column took
for granted but did not fully state. Much of the argument came from people silently assuming different rules.

## 3.6 Gambler's ruin by conditioning

*Level: intermediate.*

**A question.** You have 10 dollars and bet 1 dollar at a time on red at roulette. An American wheel has 38 pockets, 18 red,
so each bet wins with probability $\frac{18}{38}$. You will stop when you have doubled your money to 20 dollars or lost everything.
What is the probability that you reach 20?

The game could go on for any number of rounds, with a huge number of possible paths, so listing them is hopeless. But
conditioning on the first step turns the problem into a simple equation.

### The setup

A gambler starts with $k$ dollars, where $0 \le k \le N$. Each round, independently, she wins 1 dollar with probability $p$ or loses 1 dollar with
probability $q = 1 - p$, where $0 < p < 1$. She stops on reaching $N$ (success) or $0$ (ruin). Let

$$
s_k = P(\text{reach } N \text{ before } 0 \text{, starting from } k) .
$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 110" role="img" aria-label="The gambler's fortune as a walk on the whole numbers from 0 to N: from k she steps right with probability p and left with probability q; 0 is ruin and N is success">
  <line x1="30" y1="60" x2="430" y2="60" stroke="currentColor"/>
  <circle cx="30" cy="60" r="12" fill="#eea66f" stroke="currentColor"/>
  <text x="30" y="64" text-anchor="middle" font-size="11" fill="currentColor">0</text>
  <circle cx="430" cy="60" r="12" fill="#7ccf9a" stroke="currentColor"/>
  <text x="430" y="64" text-anchor="middle" font-size="11" fill="currentColor">N</text>
  <circle cx="90" cy="60" r="5" fill="currentColor"/>
  <circle cx="150" cy="60" r="5" fill="currentColor"/>
  <circle cx="290" cy="60" r="5" fill="currentColor"/>
  <circle cx="370" cy="60" r="5" fill="currentColor"/>
  <circle cx="230" cy="60" r="12" fill="#9cc9ea" stroke="currentColor"/>
  <text x="230" y="64" text-anchor="middle" font-size="11" fill="currentColor">k</text>
  <path d="M 238 48 Q 260 22 284 50" fill="none" stroke="currentColor"/>
  <path d="M 222 48 Q 200 22 176 50" fill="none" stroke="currentColor"/>
  <text x="262" y="24" font-size="12" fill="currentColor">p</text>
  <text x="192" y="24" font-size="12" fill="currentColor">q</text>
  <text x="30" y="96" text-anchor="middle" font-size="11" fill="currentColor">ruin</text>
  <text x="430" y="96" text-anchor="middle" font-size="11" fill="currentColor">success</text>
  <text x="180" y="96" text-anchor="middle" font-size="11" fill="currentColor">k − 1</text>
  <text x="285" y="96" text-anchor="middle" font-size="11" fill="currentColor">k + 1</text>
</svg>
</div>

### The equation

**Boundary values.** $s_0 = 0$ (she is already ruined) and $s_N = 1$ (she has already succeeded).

**First step.** For $1 \le k \le N - 1$, condition on the first round. With probability $p$ she wins it and is at $k + 1$; from there,
because the rounds are independent and the game has no memory, her chance of success is $s_{k+1}$. With probability $q$ she is at $k - 1$
with chance $s_{k-1}$. By the law of total probability,

$$
s_k = p\,s_{k+1} + q\,s_{k-1} \qquad (1 \le k \le N-1) .
$$

### Solving it

**Theorem 3.6 (gambler's ruin).** Let $r = q/p$. Then

$$
s_k = \begin{cases} \dfrac{1 - r^k}{1 - r^N} & \text{if } p \ne \tfrac{1}{2} , \\[2ex] \dfrac{k}{N} & \text{if } p = \tfrac{1}{2} . \end{cases}
$$

*Proof.* Since $p + q = 1$, write $s_k = (p + q)s_k$. The equation becomes $p\,s_k + q\,s_k = p\,s_{k+1} + q\,s_{k-1}$, that is,

$$
p\,(s_{k+1} - s_k) = q\,(s_k - s_{k-1}) .
$$

So the differences $d_k = s_k - s_{k-1}$ (for $1 \le k \le N$) satisfy $d_{k+1} = r\,d_k$, and therefore $d_k = r^{k-1}d_1$. Adding up the differences,
since $s_0 = 0$,

$$
s_k = d_1 + d_2 + \cdots + d_k = d_1\,(1 + r + r^2 + \cdots + r^{k-1}) .
$$

If $p = \frac{1}{2}$, then $r = 1$ and $s_k = k\,d_1$; the condition $s_N = 1$ gives $d_1 = \frac{1}{N}$, so $s_k = \frac{k}{N}$. If $p \ne \frac{1}{2}$, the geometric sum is $\frac{1 - r^k}{1 - r}$, so
$s_k = d_1\frac{1 - r^k}{1 - r}$; setting $k = N$ and $s_N = 1$ gives $d_1 = \frac{1 - r}{1 - r^N}$, and so $s_k = \frac{1 - r^k}{1 - r^N}$. $\square$

*Check:* both formulas give $s_0 = 0$ and $s_N = 1$. And the recurrence has only one solution with these boundary values,
because $s_0$ and $d_1$ determine everything, and $d_1$ is fixed by $s_N = 1$; so we have found *the* answer, not just *an* answer.

**One gap, filled honestly: does the game end?** The argument found the probability of reaching $N$ before $0$. It assumed tacitly that
the game cannot go on for ever, or else "reach $N$" and "reach 0" might not cover everything. Here is the proof that it ends
with probability 1. Split the rounds into blocks of $N$. If all $N$ rounds of a block are wins, the game must have ended by the
end of that block (from any position above 0, $N$ straight wins take you to $N$ or beyond). Each block is all wins with probability
$p^N > 0$, independently of the other blocks. So the probability that the game survives $m$ blocks is at most $(1 - p^N)^m$, which tends
to 0 as $m \to \infty$. By continuity (Theorem 1.10), the probability that it never ends is 0. The same argument shows that the
probability of ruin is $1 - s_k$, by solving the mirror-image problem or simply because one of the two endings must happen.

### What the numbers say

**The roulette question.** $p = \frac{18}{38} = \frac{9}{19}$, $q = \frac{10}{19}$, $r = \frac{10}{9}$, $k = 10$, $N = 20$:

$$
s_{10} = \frac{1 - (10/9)^{10}}{1 - (10/9)^{20}} \approx 0.2585 .
$$

In a fair game it would be $\frac{10}{20} = 0.5$. A small edge for the house, about 5 cents per dollar per bet, halves your chance of
doubling up.

| start $k$, target $N$ | fair game ($p = 0.5$) | roulette red ($p = 18/38$) |
|---|---|---|
| 5, 10 | 0.5 | 0.371 |
| 10, 20 | 0.5 | 0.259 |
| 50, 100 | 0.5 | 0.0051 |
| 90, 100 | 0.9 | 0.349 |

The longer the game, the more the house edge tells. With 50 dollars, betting 1 dollar at a time, the chance of reaching
100 is about half a percent. (Betting everything at once, the chance would be $\frac{18}{38} \approx 0.47$: in an unfavourable game, timid play
is the worst strategy; Dubins and Savage, in the book listed at the end, made this precise.)

**Playing against an infinitely rich opponent.** Let $N \to \infty$ with $k$ fixed. In a fair game $s_k = \frac{k}{N} \to 0$: a gambler with finite money
who plays a fair game against an opponent with unlimited money is ruined with probability 1. If $p > \frac{1}{2}$, then $r < 1$, $r^N \to 0$, and
$s_k \to 1 - r^k$: with an edge, she survives for ever with positive probability $1 - (q/p)^k$.

**The fair case, conceptually.** In a fair game, $s_k = k/N$ says: your chance of winning is your share of the total money at the
table. That is exactly what makes the game fair: on average you neither gain nor lose, so $N \cdot s_k + 0 \cdot (1 - s_k)$ must equal what you
started with, $k$. This argument is made rigorous in Chapter 15, with martingales.

**History.** A version of this problem is the last of the five problems that Christiaan Huygens set for his readers at the
end of *De ratiociniis in ludo aleae* (1657), and the general solution was worked out over the following decades, notably
by Jacob Bernoulli and Abraham de Moivre.

**Try it in Python.**

```python
import random

def ruin_sim(k, N, p, trials=100_000):
    wins = 0
    for _ in range(trials):
        x = k
        while 0 < x < N:
            x += 1 if random.random() < p else -1
        wins += (x == N)
    return wins / trials

def ruin_exact(k, N, p):
    if p == 0.5: return k / N
    r = (1 - p) / p
    return (1 - r**k) / (1 - r**N)

print(ruin_sim(10, 20, 18/38), ruin_exact(10, 20, 18/38))   # both about 0.2585
```

## Check yourself

??? question "1. Two dice are rolled. Given that the total is 8, what is the probability that the dice show a double?"

    The outcomes with total 8 are $(2,6), (3,5), (4,4), (5,3), (6,2)$, equally likely. One is a double. So the probability is $\frac{1}{5}$.

??? question "2. Three balls are drawn without replacement from an urn with 3 red and 2 blue. Find the probability that all three are red, using the chain rule."

    $P = \frac{3}{5} \cdot \frac{2}{4} \cdot \frac{1}{3} = \frac{6}{60} = \frac{1}{10}$. *Check by counting:* $\binom{3}{3}/\binom{5}{3} = \frac{1}{10}$.

??? question "3. In the factory of §3.3, a part is chosen at random. Given that it is NOT defective, what is the probability that it came from machine C?"

    $P(\text{C and good}) = 0.2 \times 0.97 = 0.194$, and $P(\text{good}) = 1 - 0.017 = 0.983$. So $P(\text{C} \mid \text{good}) = \frac{0.194}{0.983} \approx 0.197$, only slightly less than the
    20% share of machine C. (Reversing a conditional like this is Bayes' theorem, the subject of Chapter 4.)

??? question "4. Show that an event $A$ with $P(A) = 0$ or $P(A) = 1$ is independent of every event $B$."

    If $P(A) = 0$, then $P(A \cap B) \le P(A) = 0$, so $P(A \cap B) = 0 = P(A)P(B)$. If $P(A) = 1$, then $P(A^c) = 0$, so $A^c$ is independent of $B$ by the first case,
    and so is $A$, by Theorem 3.5.

??? question "5. Can an event be independent of itself? When?"

    Independence of $A$ with itself means $P(A) = P(A \cap A) = P(A)^2$, so $P(A)(1 - P(A)) = 0$: exactly when $P(A)$ is 0 or 1.

??? question "6. Two dice are rolled. Let A = 'red die odd', B = 'blue die odd', C = 'total odd'. Show that they are pairwise independent but not mutually independent."

    Each has probability $\frac{1}{2}$ (for $C$: the total is odd when exactly one die is odd, $\frac{1}{4} + \frac{1}{4}$). $A \cap B$: both odd, $\frac{1}{4}$. $A \cap C$: red odd and blue even, $\frac{1}{4}$.
    $B \cap C$: blue odd and red even, $\frac{1}{4}$. So all pairs are independent. But $A \cap B \cap C$ is impossible (two odd dice give an even total), so
    $P(A \cap B \cap C) = 0 \ne \frac{1}{8}$.

??? question "7. Four components, each working with probability 0.95 independently, are arranged as two parallel pairs connected in series. What is the probability that the system works?"

    A parallel pair works unless both fail: $1 - 0.05^2 = 0.9975$. Two such pairs in series: $0.9975^2 \approx 0.99501$.

??? question "8. Monty Hall with four doors: you pick one; the host, following the standard rules, opens one of the other three that has a goat (at random if he has a choice); you then switch to one of the two remaining closed doors at random. What is your chance of winning? Is it better than staying?"

    Staying wins with probability $\frac{1}{4}$, since the host's action (always possible, always a goat) does not change it. Switching: with
    probability $\frac{3}{4}$ your first pick was a goat, and then the car is behind one of the two other closed doors, so you find it with
    probability $\frac{1}{2}$. Total $\frac{3}{4} \cdot \frac{1}{2} = \frac{3}{8}$, which beats $\frac{1}{4}$.

??? question "9. In the gambler's ruin with $p = 0.6$, starting from 1 dollar with target 3 dollars, find the probability of success, by the formula and by a direct first-step argument."

    Formula: $r = \frac{0.4}{0.6} = \frac{2}{3}$, $s_1 = \frac{1 - 2/3}{1 - 8/27} = \frac{1/3}{19/27} = \frac{9}{19} \approx 0.474$. Directly: $s_1 = 0.6\,s_2$ and $s_2 = 0.6 + 0.4\,s_1$. Substituting,
    $s_1 = 0.36 + 0.24\,s_1$, so $0.76\,s_1 = 0.36$ and $s_1 = \frac{36}{76} = \frac{9}{19}$.

??? question "10. (Expected length of a fair game.) In the fair gambler's ruin, let $D_k$ be the expected number of rounds until the game ends, starting from $k$. Explain why $D_k = 1 + \frac{1}{2}D_{k+1} + \frac{1}{2}D_{k-1}$ with $D_0 = D_N = 0$, and show that $D_k = k(N - k)$."

    One round is always played, after which the game continues from $k + 1$ or $k - 1$ with probability $\frac{1}{2}$ each; averaging the remaining
    expected lengths gives the equation (expected values are defined in Chapter 6, but the first-step logic is the same as for
    probabilities). Check: $1 + \frac{1}{2}(k+1)(N-k-1) + \frac{1}{2}(k-1)(N-k+1)$. The two products are $k(N-k) - k + (N - k) - 1$ and $k(N-k) + k - (N - k) - 1$; their average
    is $k(N-k) - 1$, so the right side is $k(N-k)$. The boundary values are 0. As in Theorem 3.6, the solution is unique. So starting with
    10 dollars and aiming for 20 in a fair game, the expected number of bets is $10 \times 10 = 100$.

??? question "11. Three cards: one red on both sides, one white on both sides, one red on one side and white on the other. One card is drawn at random and placed on the table; its top face is red. What is the probability that the bottom face is red too?"

    Think of the six faces as equally likely to be on top. Three faces are red: the two faces of the red-red card and one face of the
    mixed card. In two of these three cases the other side is red. So the answer is $\frac{2}{3}$, not $\frac{1}{2}$. (This is Bertrand's box paradox,
    from the same 1889 book as the chord problem; the error "it must be one of two cards, so $\frac{1}{2}$" is the Monty Hall error again.)

??? question "12. (Harder.) Prove that if $A_1, \dots, A_n$ are mutually independent, then $P(A_1 \cup \cdots \cup A_n) = 1 - \prod_{i}(1 - P(A_i))$."

    By De Morgan, the complement of the union is $A_1^c \cap \cdots \cap A_n^c$. The complements of mutually independent events are mutually
    independent: for one event this is Theorem 3.5 applied to $A_1$ and any intersection $B$ of some of the others (which is independent of
    $A_1$ by the definition); replace the events one at a time. So $P(A_1^c \cap \cdots \cap A_n^c) = \prod_i P(A_i^c) = \prod_i (1 - P(A_i))$, and the complement rule gives the formula.

## What you learned

- $P(A \mid B) = P(A \cap B)/P(B)$: learning $B$ shrinks the space to $B$ and rescales. It is a probability in its own right,
  so every rule of Chapter 1 applies to it.
- Condition on what you actually learned, including how you learned it: the same visible fact can come from different
  processes and carry different information.
- Multiplication and chain rules: multiply along the branches of a tree, add over the paths that make the event happen.
- Law of total probability: $P(A) = \sum_i P(A \mid B_i)P(B_i)$ over a partition; conditioning on the first step turns long games into short equations.
- Independence: $P(A \cap B) = P(A)P(B)$. For many events every sub-collection must multiply; pairwise independence is
  strictly weaker. Disjoint events with positive probability are never independent.
- Monty Hall: under the standard rules switching wins with probability $\frac{2}{3}$; change the host's rule and the answer changes.
- Gambler's ruin: $s_k = \frac{1 - (q/p)^k}{1 - (q/p)^N}$, or $\frac{k}{N}$ in a fair game; a small house edge drastically lowers the chance of
  reaching a distant target.

**Next:** [Chapter 4](04-Bayes-Theorem.md), on turning conditional probabilities around: Bayes' theorem, medical tests and
base rates, odds, the prosecutor's fallacy, and learning from evidence step by step.

## Further reading

- William Feller, *An Introduction to Probability Theory and Its Applications*, Volume 1 (3rd edition, 1968), Chapter V
  (conditional probability) and Chapter XIV (the classical ruin problem).
- Geoffrey Grimmett and David Stirzaker, *Probability and Random Processes* (4th edition, 2020), Chapter 1.
- Sheldon Ross, *A First Course in Probability* (10th edition, 2019), Chapter 3.
- Jason Rosenhouse, *The Monty Hall Problem: The Remarkable Story of Math's Most Contentious Brain Teaser* (2009), on the
  many variants and the history.
- Steve Selvin, "A problem in probability" and "On the Monty Hall problem", letters in *The American Statistician* 29
  (1975).
- Lester E. Dubins and Leonard J. Savage, *How to Gamble If You Must: Inequalities for Stochastic Processes* (1965), the
  classic study of bold and timid play.
- On this site: the Topics lessons ["At least one"](../../topics/probability/level-5/04-at-least-one.md),
  [Simulations](../../topics/probability/level-4/05-simulations.md),
  [Chance has no memory](../../topics/probability/level-2/05-chance-no-memory.md) and
  [Random walks and Markov chains](../../topics/probability/level-8/06-random-walks-markov.md);
  [Combinatorics, chapter 8](../combinatorics/08-Catalan-Numbers-and-Lattice-Paths.md) for counting the paths of a walk.
