---
title: "Bayes' theorem"
---

# Bayes' theorem

*Probability · level 8, lesson 1 of 7*

## A question to start

A rare disease affects 1 person in 1000. A test for it is "99% accurate": it gives a positive result for 99% of people
who have the disease, and a negative result for 99% of people who do not.

You take the test, and it comes back **positive**. What is the chance you actually have the disease?

Most people, including, in surveys, many doctors, say "99%". The true answer is about **9%**. More than 9 out of 10
positive results are false alarms. This is not a trick question and not a bad test: it is what happens whenever you
test for something rare. This lesson shows how to get the 9%, why it is right, and the theorem behind it.

## The idea

### Two different questions

The test's "99%" answers the question: **if** you have the disease, how likely is a positive result? That is
$P(\text{positive} \mid \text{disease}) = 0.99$. (The bar "$\mid$" means "given", from [level 6](../level-6/01-given-two-way-tables.md).)

You want the reverse: **if** you tested positive, how likely is the disease? That is
$P(\text{disease} \mid \text{positive})$.

These are completely different numbers. Compare: $P(\text{has four legs} \mid \text{is a dog})$ is nearly 1, but
$P(\text{is a dog} \mid \text{has four legs})$ is much smaller, because many four-legged things are not dogs. Bayes'
theorem is the rule for **reversing** a conditional probability.

### Natural frequencies: follow a crowd

The clearest way to see it is to imagine a crowd, say 100 000 people, and follow them through. This is called using
**natural frequencies**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 230" role="img" aria-label="Natural frequency tree: 100 000 people split into 100 with the disease and 99 900 without; the 100 split into 99 positive and 1 negative; the 99 900 split into 999 positive and 98 901 negative">
  <line x1="80" y1="115" x2="200" y2="60" stroke="currentColor" stroke-width="1.5"/>
  <text x="128.0" y="76.0" font-size="10" text-anchor="middle" fill="currentColor">0.1%</text>
  <line x1="80" y1="115" x2="200" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <text x="125.0" y="160.0" font-size="10" text-anchor="middle" fill="currentColor">99.9%</text>
  <line x1="255" y1="60" x2="345" y2="30" stroke="currentColor" stroke-width="1.5"/>
  <text x="296.0" y="34.0" font-size="10" text-anchor="middle" fill="currentColor">99%</text>
  <line x1="255" y1="60" x2="345" y2="85" stroke="currentColor" stroke-width="1.5"/>
  <text x="296.0" y="86.0" font-size="10" text-anchor="middle" fill="currentColor">1%</text>
  <line x1="255" y1="170" x2="345" y2="145" stroke="currentColor" stroke-width="1.5"/>
  <text x="296.0" y="147.0" font-size="10" text-anchor="middle" fill="currentColor">1%</text>
  <line x1="255" y1="170" x2="345" y2="200" stroke="currentColor" stroke-width="1.5"/>
  <text x="296.0" y="200.0" font-size="10" text-anchor="middle" fill="currentColor">99%</text>
  <rect x="18.0" y="102" width="84" height="26" rx="5" fill="#7ccf9a"/>
  <text x="60.0" y="119.0" font-size="12" text-anchor="middle" fill="currentColor">100 000</text>
  <rect x="175.0" y="47" width="90" height="26" rx="5" fill="#eea66f"/>
  <text x="220.0" y="64.0" font-size="12" text-anchor="middle" fill="currentColor">100 sick</text>
  <rect x="172.0" y="157" width="96" height="26" rx="5" fill="#9cc9ea"/>
  <text x="220.0" y="174.0" font-size="12" text-anchor="middle" fill="currentColor">99 900 well</text>
  <rect x="345.0" y="17" width="100" height="26" rx="5" fill="#eea66f"/>
  <text x="395.0" y="34.0" font-size="12" text-anchor="middle" fill="currentColor">99 positive</text>
  <rect x="345.0" y="72" width="100" height="26" rx="5" fill="#eea66f"/>
  <text x="395.0" y="89.0" font-size="12" text-anchor="middle" fill="currentColor">1 negative</text>
  <rect x="345.0" y="132" width="100" height="26" rx="5" fill="#9cc9ea"/>
  <text x="395.0" y="149.0" font-size="12" text-anchor="middle" fill="currentColor">999 positive</text>
  <rect x="340.0" y="187" width="110" height="26" rx="5" fill="#9cc9ea"/>
  <text x="395.0" y="204.0" font-size="12" text-anchor="middle" fill="currentColor">98 901 negative</text>
</svg>
</div>

1. 1 in 1000 has the disease: **100** people are sick and **99 900** are well.
2. Of the 100 sick people, 99% test positive: **99** true positives (and 1 missed).
3. Of the 99 900 well people, 1% test positive anyway: $0.01 \times 99\,900 =$ **999** false positives.
4. Altogether $99 + 999 = 1098$ people test positive.
5. Of those 1098, only 99 are sick:

$$P(\text{disease} \mid \text{positive}) = \frac{99}{1098} \approx 0.090, \text{ about } 9\%.$$

The reason is now plain. The well group is a thousand times bigger than the sick group, so even a small error rate
(1%) applied to it produces ten times as many false alarms as there are real cases. The rarity of the disease, called
the **base rate** or **prior**, swamps the accuracy of the test. Ignoring it is called the **base-rate fallacy**.

The test is still very useful. Before the test your chance was 0.1%; after a positive it is 9%, ninety times higher.
And a **negative** result is extremely reassuring: of the $1 + 98\,901$ negatives, only 1 is sick, so
$P(\text{well} \mid \text{negative}) = \tfrac{98\,901}{98\,902} \approx 0.99999$.

### The theorem

Now the same calculation in symbols. For events $A$ and $B$, the definition of conditional probability gives two ways
to write $P(A \text{ and } B)$:

$$P(A \text{ and } B) = P(A \mid B)\,P(B) = P(B \mid A)\,P(A).$$

Divide the second form by $P(B)$:

$$P(A \mid B) = \frac{P(B \mid A)\,P(A)}{P(B)}.$$

This is **Bayes' theorem**. The bottom line, $P(B)$, is usually found by splitting into cases, the **law of total
probability**: $B$ happens either with $A$ or with not-$A$, so

$$P(B) = P(B \mid A)\,P(A) + P(B \mid \text{not } A)\,P(\text{not } A).$$

For the test, with $A$ = disease and $B$ = positive:

$$P(D \mid +) = \frac{0.99 \times 0.001}{0.99 \times 0.001 + 0.01 \times 0.999} = \frac{0.000\,99}{0.000\,99 + 0.009\,99} = \frac{0.000\,99}{0.010\,98} \approx 0.090.$$

The same 99 and 999 appear, just divided by 100 000. The natural-frequency tree and the formula are the same
calculation; the tree is easier to explain to a friend, the formula is easier to use with awkward numbers.

### The words people use

- The **prior** $P(A)$: your probability before the evidence (here 0.001).
- The **likelihood** $P(B \mid A)$: how probable the evidence is if $A$ is true.
- The **posterior** $P(A \mid B)$: your updated probability after the evidence.
- For tests: **sensitivity** = $P(+ \mid \text{disease})$, **specificity** = $P(- \mid \text{no disease})$. "99%
  accurate" usually hides two numbers, and both matter.

### Many causes

If there are several possible causes $A_1, A_2, \dots, A_m$ (exactly one of which is true), the same reasoning gives

$$P(A_i \mid B) = \frac{P(B \mid A_i)\,P(A_i)}{\sum_j P(B \mid A_j)\,P(A_j)}.$$

Each cause gets "prior times likelihood", and then everything is scaled so the posteriors add to 1.

### Odds form: one multiplication

There is a neat way to update. The **odds** of $A$ are $\tfrac{P(A)}{P(\text{not } A)}$. Writing Bayes' theorem for
$A$ and for not-$A$ and dividing, the $P(B)$ cancels:

$$\text{posterior odds} = \text{prior odds} \times \frac{P(B \mid A)}{P(B \mid \text{not } A)}.$$

The last fraction is the **likelihood ratio**: how much more likely the evidence is under $A$ than under not-$A$. For
the test it is $\tfrac{0.99}{0.01} = 99$. Prior odds $1 : 999$ become posterior odds $99 : 999$, which is a
probability of $\tfrac{99}{99 + 999} = \tfrac{99}{1098}$. ✓

### Updating twice

If you take a second, independent test and it is also positive, your 9% becomes the new prior. In odds:
$99 : 999$ times 99 gives $9801 : 999$, a probability of $\tfrac{9801}{10\,800} \approx 0.908$. Two positives make the
disease likely, which is why screening programmes follow a positive with a second test. Each piece of evidence
multiplies the odds by its likelihood ratio. That idea, **learning from evidence by Bayes' theorem**, is the
foundation of spam filters, medical diagnosis, search-and-rescue planning and a whole school of statistics.

The theorem is named after Thomas Bayes, an English minister whose essay on the subject was published in 1763, after
his death.

## Worked examples

**1. Two machines.** Machine A makes 60% of a factory's bolts, and 2% of its bolts are faulty. Machine B makes 40%,
and 5% of its bolts are faulty. A bolt is found to be faulty. Which machine probably made it?

- Faulty and from A: $0.60 \times 0.02 = 0.012$.
- Faulty and from B: $0.40 \times 0.05 = 0.020$.
- $P(\text{faulty}) = 0.032$.
- $P(A \mid \text{faulty}) = \tfrac{0.012}{0.032} = 0.375$, $P(B \mid \text{faulty}) = 0.625$.

Machine B, though it makes fewer bolts. In natural frequencies: of 1000 bolts, 600 from A with 12 faulty, 400 from B
with 20 faulty.

**2. A spam filter.** 40% of a person's email is spam. The word "prize" appears in 25% of spam and 2% of other email.
An email contains "prize". Chance it is spam:

$$\frac{0.25 \times 0.40}{0.25 \times 0.40 + 0.02 \times 0.60} = \frac{0.100}{0.112} \approx 0.893.$$

**3. A trick coin.** A bag holds three coins: two fair and one with heads on both sides. You pick one at random, toss
it twice and get two heads. Chance it is the two-headed coin?

- Prior: $\tfrac13$ two-headed, $\tfrac23$ fair.
- Likelihood of two heads: 1 for the two-headed coin, $\tfrac14$ for a fair one.
- Posterior: $\dfrac{1 \times \frac13}{1 \times \frac13 + \frac14 \times \frac23} = \dfrac{\frac13}{\frac13 + \frac16} = \dfrac23$.

**4. The same test, a different crowd.** Suppose the test is used only on people with symptoms, among whom 1 in 10 has
the disease. Then of 1000 such people, 100 are sick (99 positive) and 900 are well (9 positive):
$P(D \mid +) = \tfrac{99}{108} \approx 0.917$. The same test, a different prior, a completely different meaning. The
answer to "what does a positive mean?" always depends on **who** is being tested.

## Try it

1. A disease affects 1 in 100 people. A test is positive for 90% of those with it and for 9% of those without. Use a
   crowd of 10 000 to find $P(\text{disease} \mid \text{positive})$.
2. In question 1, what is $P(\text{no disease} \mid \text{negative})$?
3. In the bolts example, a bolt is **not** faulty. Find the chance it came from machine A.
4. A test for a condition with prevalence 1 in 100 has sensitivity and specificity both 99%. Find $P(D \mid +)$. What
   do you notice?
5. In the trick-coin example, you toss the chosen coin three times and get three heads. Find the new chance it is the
   two-headed coin, using the odds form.
6. Explain the difference between $P(\text{wet ground} \mid \text{rain})$ and $P(\text{rain} \mid \text{wet ground})$.
   Which could be small while the other is large?
7. A witness says a taxi in an accident was blue. In the city, 15% of taxis are blue and 85% green. Tests show the
   witness identifies colours correctly 80% of the time. What is the chance the taxi really was blue?
8. Prove that if $P(B \mid A) > P(B \mid \text{not } A)$ then $P(A \mid B) > P(A)$: evidence that is more likely
   under $A$ always raises your belief in $A$. (Hint: odds form.)

??? note "Answers"
    1. 100 sick, 90 test positive. 9900 well, $0.09 \times 9900 = 891$ test positive. $P = \tfrac{90}{90 + 891} = \tfrac{90}{981} \approx 0.092$.
    2. Negatives: 10 sick, $9900 - 891 = 9009$ well. $P = \tfrac{9009}{9019} \approx 0.9989$.
    3. Not faulty from A: $0.60 \times 0.98 = 0.588$. From B: $0.40 \times 0.95 = 0.380$. $P(A \mid \text{good}) = \tfrac{0.588}{0.968} \approx 0.607$.
    4. $\dfrac{0.99 \times 0.01}{0.99 \times 0.01 + 0.01 \times 0.99} = \dfrac12$. When the false-positive rate equals the
       prevalence (both 1%), true and false positives are equally many, so a positive is a coin flip.
    5. Prior odds $1 : 2$ (two-headed : fair). Likelihood ratio for three heads: $\tfrac{1}{1/8} = 8$. Posterior odds
       $8 : 2 = 4 : 1$, a probability of $\tfrac45 = 0.8$.
    6. $P(\text{wet} \mid \text{rain})$ is close to 1: rain almost always wets the ground. $P(\text{rain} \mid \text{wet})$
       can be much smaller if sprinklers, street cleaners or melting snow often wet the ground too. The first is large
       and the second can be small.
    7. Of 100 taxis: 15 blue, identified blue $0.8 \times 15 = 12$ times; 85 green, wrongly called blue
       $0.2 \times 85 = 17$ times. $P(\text{blue} \mid \text{"blue"}) = \tfrac{12}{12 + 17} = \tfrac{12}{29} \approx 0.41$. Less
       than a half, despite an 80% reliable witness.
    8. Posterior odds = prior odds $\times$ likelihood ratio, and the ratio $\tfrac{P(B \mid A)}{P(B \mid \text{not } A)}$ is
       more than 1. So the posterior odds are bigger than the prior odds. Since probability $= \tfrac{\text{odds}}{1 + \text{odds}}$
       increases as the odds increase, $P(A \mid B) > P(A)$.

## Common mistake

**Swapping the condition.** $P(\text{positive} \mid \text{disease})$ is not $P(\text{disease} \mid \text{positive})$. In a
courtroom this mistake has a name, the **prosecutor's fallacy**: "the chance of this evidence if the person were innocent
is 1 in a million, so the chance they are innocent is 1 in a million." The second does not follow; it depends on how
many other people could also match.

**Ignoring the base rate.** A very accurate test for a very rare condition still gives mostly false positives. Always
ask: out of how many?

## Where it leads

- Back: [Level 7](../level-7/index.md), and conditional probability in [level 6](../level-6/index.md) ·
  Next: [Continuous random variables](02-continuous-random-variables.md)
- [Level 8 page](index.md) · [Probability topic page](../index.md)
- Using evidence to update beliefs is reasoning under uncertainty: see [Logic](../../logic/index.md).
- Bayesian methods in data analysis: [Statistics](../../statistics/index.md).
