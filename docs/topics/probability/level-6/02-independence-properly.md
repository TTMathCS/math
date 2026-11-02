---
title: "Independence, properly"
---

# Independence, properly

*Probability · level 6, lesson 2 of 6*

## A question to start

Roll one die. Let

- $A$ = "the number is even" $= \{2, 4, 6\}$,
- $B$ = "the number is 1 or 2" $= \{1, 2\}$.

Both events come from the **same** roll of the **same** die, and they even share an outcome (the 2). Surely they
cannot be independent?

Yet by the exact test in this lesson, they **are** independent: knowing that $B$ happened leaves the chance of $A$
exactly where it was. And if you change $B$ to "1, 2 or 3", they stop being independent. Independence is not about
whether two things look connected. It is a precise statement about numbers.

## The idea

### The definition

In [level 5](../level-5/03-multiplication-rule.md), independent meant "one has no influence on the other". Now that
we have conditional probability, we can say exactly what "no influence" means:

**$A$ and $B$ are independent when knowing $B$ does not change the chance of $A$:**

$$P(A \mid B) = P(A).$$

Check the question at the start. $P(A) = \tfrac36 = \tfrac12$. Given $B$, the sample space is $\{1, 2\}$, and one of
the two is even, so $P(A \mid B) = \tfrac12$. The same. So $A$ and $B$ are independent.

Now take $C$ = "1, 2 or 3". Given $C$, the sample space is $\{1, 2, 3\}$, and only 2 is even, so
$P(A \mid C) = \tfrac13$, which is not $\tfrac12$. Knowing $C$ makes "even" less likely. Not independent.

### Three ways to say the same thing

From the definition of conditional probability, $P(A \mid B) = \tfrac{P(A \text{ and } B)}{P(B)}$. So

$$P(A \mid B) = P(A) \quad\text{means}\quad \frac{P(A \text{ and } B)}{P(B)} = P(A),$$

and multiplying both sides by $P(B)$ gives the **product test**:

$$P(A \text{ and } B) = P(A) \times P(B).$$

That last line is symmetric: swapping $A$ and $B$ changes nothing. Divide it by $P(A)$ and you get
$P(B \mid A) = P(B)$. So these three statements are all the same (as long as neither event has probability 0):

1. $P(A \mid B) = P(A)$: knowing $B$ does not change the chance of $A$.
2. $P(B \mid A) = P(B)$: knowing $A$ does not change the chance of $B$.
3. $P(A \text{ and } B) = P(A) \times P(B)$.

The surprise in statement 2: independence always works **both ways**. If $B$ tells you nothing about $A$, then $A$
tells you nothing about $B$. Mathematicians usually take statement 3 as the official definition, because it still
makes sense when an event has probability 0.

### The card question from lesson 1

Why did "it's red" leave the king chance at $\tfrac{1}{13}$? Product test: $P(\text{king and red}) = \tfrac{2}{52} = \tfrac{1}{26}$,
and $P(\text{king}) \times P(\text{red}) = \tfrac{1}{13} \times \tfrac12 = \tfrac{1}{26}$. Equal, so "king" and "red"
are independent: kings are spread evenly between the colours. But $P(\text{heart and red}) = \tfrac14$ while
$P(\text{heart}) \times P(\text{red}) = \tfrac18$. Not independent.

### A picture of independence

Draw everything as a square of area 1, split left and right by whether $B$ happens, then split each part top and
bottom by whether $A$ happens. The height of the $A$ part on each side is the conditional probability of $A$ on that
side.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 470 200" role="img" aria-label="Two unit squares. In the left square, split into B and not B, the A part has the same height on both sides: independent. In the right square, the A part is tall on the B side and short on the not B side: dependent.">
  <rect x="20" y="20" width="160" height="150" fill="none" stroke="currentColor" stroke-width="2"/>
  <rect x="20" y="20" width="64" height="60" fill="#7ccf9a"/>
  <rect x="84" y="20" width="96" height="60" fill="#eea66f" fill-opacity="0.6"/>
  <line x1="84" y1="20" x2="84" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <line x1="20" y1="80" x2="180" y2="80" stroke="currentColor" stroke-width="1.5"/>
  <rect x="270" y="20" width="160" height="150" fill="none" stroke="currentColor" stroke-width="2"/>
  <rect x="270" y="20" width="64" height="105" fill="#7ccf9a"/>
  <rect x="334" y="20" width="96" height="30" fill="#eea66f" fill-opacity="0.6"/>
  <line x1="334" y1="20" x2="334" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <line x1="270" y1="125" x2="334" y2="125" stroke="currentColor" stroke-width="1.5"/>
  <line x1="334" y1="50" x2="430" y2="50" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="52" y="186">B</text><text x="132" y="186">not B</text>
    <text x="302" y="186">B</text><text x="382" y="186">not B</text>
    <text x="100" y="12">independent</text><text x="350" y="12">not independent</text>
    <text x="52" y="54">A</text><text x="132" y="54">A</text>
    <text x="302" y="76">A</text><text x="382" y="40">A</text>
  </g>
</svg>
</div>

On the left, the cut is at the **same height** on both sides: the chance of $A$ is the same whether or not $B$
happened, so $A$ and $B$ are independent. On the right, $A$ takes up much more of the $B$ side than of the other side:
knowing $B$ makes $A$ more likely.

### Checking a table

With a two-way table, independence means **every row has the same split** (and then every column does too). Here
is a made-up survey of 200 people:

| | Wears glasses | No glasses | Total |
| --- | --- | --- | --- |
| **Left-handed** | 8 | 12 | 20 |
| **Right-handed** | 72 | 108 | 180 |
| **Total** | 80 | 120 | 200 |

- $P(\text{glasses}) = \tfrac{80}{200} = 0.4$.
- $P(\text{glasses} \mid \text{left-handed}) = \tfrac{8}{20} = 0.4$.
- $P(\text{glasses} \mid \text{right-handed}) = \tfrac{72}{180} = 0.4$.

The same in every row, so in this survey handedness and glasses are independent. Product check:
$P(\text{left and glasses}) = \tfrac{8}{200} = 0.04$ and $0.1 \times 0.4 = 0.04$. ✓

The bus survey of lesson 1 fails the test: $P(\text{bus} \mid \text{grade 10}) = 0.7$ but $P(\text{bus}) = 0.55$.

Real data almost never match **exactly**, even when two things truly have nothing to do with each other, because
samples wobble by chance. Deciding whether a difference like 0.40 against 0.43 is "real" or "just wobble" is a job
for [Statistics](../../statistics/index.md).

### Independent is not the same as mutually exclusive

People often mix these up, but they are almost opposites.

- **Mutually exclusive:** cannot both happen, $P(A \text{ and } B) = 0$.
- **Independent:** $P(A \text{ and } B) = P(A) \times P(B)$.

If $A$ and $B$ are mutually exclusive and both possible, then knowing $B$ happened tells you for certain that $A$ did
**not**: $P(A \mid B) = 0$, which is not $P(A)$. So mutually exclusive events (with positive chances) are always
**dependent**. In the Venn diagram, independent events must overlap, by exactly the right amount.

### More than two events (going further)

Toss two coins. Let $A$ = "first coin heads", $B$ = "second coin heads", $C$ = "the two coins match". Each has
chance $\tfrac12$. Check pairs:

- $A$ and $B$: $P(\text{HH}) = \tfrac14 = \tfrac12 \times \tfrac12$. Independent.
- $A$ and $C$: "first heads and they match" is HH, $\tfrac14 = \tfrac12 \times \tfrac12$. Independent.
- $B$ and $C$: also HH, $\tfrac14$. Independent.

Every pair is independent. But all three together: "A and B and C" is HH, with chance $\tfrac14$, not
$\tfrac12 \times \tfrac12 \times \tfrac12 = \tfrac18$. Once you know $A$ and $B$, you know $C$ for certain. So three
events can be **pairwise independent** without being independent all together (**mutually independent**). For
mutual independence, the product test must hold for every pair **and** for all three.

## Worked examples

**1. Product test with probabilities.** $P(A) = 0.4$ and $P(B) = 0.5$. Are $A$ and $B$ independent if (a)
$P(A \text{ and } B) = 0.2$, (b) $P(A \text{ and } B) = 0.25$?

- $P(A) \times P(B) = 0.4 \times 0.5 = 0.2$.
- (a) $0.2 = 0.2$: independent.
- (b) $0.25 \ne 0.2$: not independent. In fact $P(A \mid B) = \tfrac{0.25}{0.5} = 0.5$, more than $P(A) = 0.4$, so
  knowing $B$ makes $A$ more likely.

**2. Cards.** Are "ace" and "spade" independent? $P(\text{ace and spade}) = \tfrac{1}{52}$ and
$\tfrac{4}{52} \times \tfrac{13}{52} = \tfrac{1}{13} \times \tfrac14 = \tfrac{1}{52}$. Yes. (Knowing it is a spade,
the chance of an ace is $\tfrac{1}{13}$, the same as before.)

**3. Filling a table from independence.** In a town, 30% of people cycle to work and 60% own a dog. If cycling and
owning a dog are independent, fill in a table of percentages.

- Cycle and dog: $0.3 \times 0.6 = 0.18$, so 18%.
- Cycle, no dog: $30 - 18 = 12$%. Dog, no cycle: $60 - 18 = 42$%. Neither: $100 - 18 - 12 - 42 = 28$%.
- Check "neither" by the product: $0.7 \times 0.4 = 0.28$. ✓ (The opposites of independent events are independent
  too; see Try it question 7.)

**4. Rule for "or" with independent events.** $A$ and $B$ are independent with $P(A) = 0.3$ and $P(B) = 0.5$. Find
$P(A \text{ or } B)$.

$P(A \text{ and } B) = 0.15$, so $P(A \text{ or } B) = 0.3 + 0.5 - 0.15 = 0.65$. Or by the complement:
$1 - P(\text{neither}) = 1 - 0.7 \times 0.5 = 0.65$. ✓

## Try it

Question 3 uses this table:

| | Coffee | No coffee | Total |
| --- | --- | --- | --- |
| **Morning person** | 30 | 20 | 50 |
| **Evening person** | 60 | 40 | 100 |
| **Total** | 90 | 60 | 150 |

1. A die is rolled. Is "even" independent of "more than 4"? Is "even" independent of "more than 3"?
2. A card is drawn. Is "face card" independent of "king"? Is "red" independent of "number card from 2 to 10"?
3. Is the coffee table below consistent with independence of drinking coffee and being a morning person?
4. $P(A) = 0.5$, $P(B) = 0.2$ and $P(A \text{ or } B) = 0.6$. Are $A$ and $B$ independent?
5. $A$ and $B$ are mutually exclusive, with $P(A) = 0.3$ and $P(B) = 0.4$. Are they independent?
6. $A$ and $B$ are independent, $P(A) = 0.2$ and $P(A \text{ or } B) = 0.6$. Find $P(B)$.
7. Show that if $A$ and $B$ are independent, then $A$ and "not B" are independent too. (Hint: $P(A \text{ and not } B) = P(A) - P(A \text{ and } B)$.)
8. Two dice, red and blue. $A$ = "red even", $B$ = "blue even", $C$ = "the total is even". Show that each pair is
   independent, but the three are not mutually independent.

??? note "Answers"
    1. "Even and more than 4" is $\{6\}$: $\dfrac16$. $P(\text{even}) \times P(\text{more than 4}) = \dfrac12 \times \dfrac13 = \dfrac16$.
       **Independent.** "Even and more than 3" is $\{4, 6\}$: $\dfrac26 = \dfrac13$, but $\dfrac12 \times \dfrac12 = \dfrac14$.
       **Not** independent.
    2. $P(\text{face and king}) = \dfrac{4}{52}$, but $\dfrac{12}{52} \times \dfrac{4}{52} \ne \dfrac{4}{52}$. Not
       independent (every king is a face card). $P(\text{red and 2 to 10}) = \dfrac{18}{52}$, and
       $\dfrac12 \times \dfrac{36}{52} = \dfrac{18}{52}$. Independent.
    3. $P(\text{coffee}) = \dfrac{90}{150} = 0.6$. Morning row: $\dfrac{30}{50} = 0.6$. Evening row: $\dfrac{60}{100} = 0.6$.
       The same, so yes, consistent with independence.
    4. $P(A \text{ and } B) = 0.5 + 0.2 - 0.6 = 0.1$, and $0.5 \times 0.2 = 0.1$. **Independent.**
    5. No. $P(A \text{ and } B) = 0$ but $P(A) \times P(B) = 0.12$.
    6. Let $P(B) = b$. Then $0.6 = 0.2 + b - 0.2b = 0.2 + 0.8b$, so $0.8b = 0.4$ and $b = 0.5$.
    7. $P(A \text{ and not } B) = P(A) - P(A)P(B) = P(A)\big(1 - P(B)\big) = P(A) \times P(\text{not } B)$. That is the
       product test for $A$ and "not B", so they are independent.
    8. Each has chance $\dfrac12$. $A$ and $B$: both even, $\dfrac14 = \dfrac12 \times \dfrac12$. $A$ and $C$: red even
       and total even means blue even too, so $\dfrac14$. $B$ and $C$: likewise $\dfrac14$. All pairs independent. But
       $P(A \text{ and } B \text{ and } C) = P(\text{both even}) = \dfrac14 \ne \dfrac18$, so not mutually independent.

## Common mistake

**Thinking "independent" means "cannot both happen".** That is mutually exclusive, which is the opposite: events that
cannot both happen are strongly dependent. Independent events can, and do, happen together, at the rate
$P(A) \times P(B)$.

**Deciding independence by feel.** "Even" and "1 or 2" feel connected but are independent; two events about
different people can feel unconnected but be dependent (siblings' heights). Use a number test.

## Where it leads

- Back: ["Given": conditional probability](01-given-two-way-tables.md) · Next: [Probability with combinations](03-combinations-probability.md).
- [Level 6 page](index.md) · [Probability topic page](../index.md)
- Many independent trials, each with the same chance, give the binomial distribution in [level 7](../level-7/index.md).
- Testing independence in real data (the chi-square test) belongs to [Statistics](../../statistics/index.md).
- Writing these "three statements are the same" arguments carefully is practice for proof in [Logic](../../logic/index.md).
