---
title: "Adding and subtracting fractions"
---

# Adding and subtracting fractions

*Numbers · level 4, lesson 1 of 7*

## A question to start

A student writes:

$$\frac12 + \frac13 = \frac25$$

"Add the tops, add the bottoms. Easy!" It looks so natural. But it cannot be right, and you can see it without any
rules at all. Half a pizza plus a third of a pizza is **more** than half a pizza. And $\tfrac25$ is **less** than
half (2 is less than half of 5). Adding something made the answer smaller? Impossible.

So what is the real answer, and why does the natural rule fail? The answer to the "why" is the whole secret of adding
fractions.

## The idea

### You can only add things of the same kind

3 apples + 2 apples = 5 apples. 3 metres + 2 metres = 5 metres. But 3 metres + 2 centimetres is not 5 of anything.
To add them, first change them to the same unit: 300 cm + 2 cm = 302 cm.

Fractions work exactly like this. The denominator is the **unit**, the size of the piece: halves, thirds, sixths.
The numerator **counts** how many pieces.

- $\tfrac27 + \tfrac37$: both are sevenths. 2 sevenths + 3 sevenths = **5 sevenths**, $\tfrac57$. The denominator
  stays 7, because the unit does not change when you count more of it. (Nobody says 2 apples + 3 apples = 5
  "double-apples".)
- $\tfrac12 + \tfrac13$: halves and thirds are different units. You cannot count them together until you change both
  into the same unit.

That is why "add the bottoms" is wrong: the bottom is not a count, it is a name.

### Finding a common unit

Which pieces can both halves and thirds be cut into? Sixths! A half is 3 sixths, and a third is 2 sixths.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 130" role="img" aria-label="One half (3 sixths) plus one third (2 sixths) makes 5 sixths">
  <g stroke="currentColor" stroke-width="1.2">
    <rect x="90" y="10" width="120" height="24" fill="#eea66f"/><rect x="210" y="10" width="120" height="24" fill="none"/>
    <rect x="90" y="48" width="80" height="24" fill="#9cc9ea"/><rect x="170" y="48" width="80" height="24" fill="none"/><rect x="250" y="48" width="80" height="24" fill="none"/>
    <rect x="90" y="86" width="40" height="24" fill="#eea66f"/><rect x="130" y="86" width="40" height="24" fill="#eea66f"/><rect x="170" y="86" width="40" height="24" fill="#eea66f"/>
    <rect x="210" y="86" width="40" height="24" fill="#9cc9ea"/><rect x="250" y="86" width="40" height="24" fill="#9cc9ea"/><rect x="290" y="86" width="40" height="24" fill="none"/>
  </g>
  <g font-size="13" fill="currentColor">
    <text x="80" y="27" text-anchor="end">1/2</text><text x="80" y="65" text-anchor="end">+ 1/3</text><text x="80" y="103" text-anchor="end">= 5/6</text>
    <text x="340" y="27">3/6</text><text x="340" y="65">2/6</text><text x="340" y="103">5/6</text>
  </g>
</svg>
</div>

$$\frac12 + \frac13 = \frac36 + \frac26 = \frac56$$

A denominator that both fractions can be changed to is called a **common denominator**. Changing them uses
equivalent fractions (level 3): multiply the top and bottom by the same number, which is cutting every piece into
smaller equal pieces without changing the amount.

### Which common denominator?

A common denominator must be a number that **both** denominators divide into: a **common multiple** of them.

**The sure way: multiply the denominators.** For $\tfrac34 + \tfrac56$, use $4 \times 6 = 24$. This always works,
because 24 is in the 4 times table and in the 6 times table.

**The neat way: the least common multiple (LCM).** The smallest number that both denominators divide into is called
their **least common multiple**. For 4 and 6, list multiples:

- 4, 8, **12**, 16, 20, 24, ...
- 6, **12**, 18, 24, ...

The first one in both lists is 12. Using 12 keeps the numbers small:

$$\frac34 + \frac56 = \frac{9}{12} + \frac{10}{12} = \frac{19}{12} = 1\tfrac{7}{12}$$

With 24 you would get $\tfrac{18}{24} + \tfrac{20}{24} = \tfrac{38}{24}$, which simplifies to the same
$\tfrac{19}{12}$. Both ways are right; the LCM just saves a step. (Finding LCMs quickly, with prime factors, is a
lesson in [Number theory](../../number-theory/index.md).)

### The steps

To add or subtract fractions:

1. Find a common denominator (the LCM if you can spot it).
2. Change each fraction to an equivalent fraction with that denominator.
3. Add or subtract the numerators. Keep the denominator.
4. Simplify, and change an improper fraction to a mixed number if you want to.

Subtracting is the same: $\tfrac56 - \tfrac38$. LCM of 6 and 8 is 24.
$\tfrac{20}{24} - \tfrac{9}{24} = \tfrac{11}{24}$.

### Mixed numbers

To add mixed numbers, add the wholes and the fractions separately. They are separate parts, so this is allowed (it is
like adding 2 dollars 30 cents to 1 dollar 50 cents).

$$2\tfrac13 + 1\tfrac34 = (2 + 1) + \left(\tfrac{4}{12} + \tfrac{9}{12}\right) = 3 + \tfrac{13}{12}$$

But $\tfrac{13}{12}$ is more than a whole: it is $1\tfrac{1}{12}$. So the total is $3 + 1\tfrac{1}{12} = 4\tfrac{1}{12}$.
This is like carrying in ordinary addition: twelve twelfths make a whole, which moves into the wholes.

**Subtracting with regrouping.** $5\tfrac14 - 2\tfrac23$. In twelfths: $5\tfrac{3}{12} - 2\tfrac{8}{12}$. You cannot
take 8 twelfths from 3 twelfths. So **regroup**, exactly like borrowing in whole-number subtraction: break one of the
5 wholes into 12 twelfths.

$$5\tfrac{3}{12} = 4 + 1 + \tfrac{3}{12} = 4 + \tfrac{12}{12} + \tfrac{3}{12} = 4\tfrac{15}{12}$$

Now $4\tfrac{15}{12} - 2\tfrac{8}{12} = 2\tfrac{7}{12}$.

**Another way: improper fractions.** Change both to improper fractions first:
$5\tfrac14 - 2\tfrac23 = \tfrac{21}{4} - \tfrac83 = \tfrac{63}{12} - \tfrac{32}{12} = \tfrac{31}{12} = 2\tfrac{7}{12}$.
Same answer. This way never needs regrouping, but the numbers get bigger.

### Check with a picture or an estimate

$2\tfrac13 + 1\tfrac34$ is a bit more than $2 + 2 = 4$ (because $1\tfrac34$ is a quarter short of 2 and $\tfrac13$
is more than a quarter). Our answer $4\tfrac{1}{12}$ is a bit more than 4. ✓ Always ask: does the size make sense?

<figure class="play" data-play="fraction" data-mode="add"><span class="ai-tag">AI-created</span><figcaption><b>Common pieces first.</b> Both fractions are cut into the same size pieces, then counted together.</figcaption></figure>

## Worked examples

**1. Same denominator.** $\tfrac{5}{9} + \tfrac{7}{9} = \tfrac{12}{9}$. Simplify: divide by 3 to get $\tfrac43$,
which is $1\tfrac13$.

**2. One denominator divides the other.** $\tfrac38 + \tfrac14$. 4 divides 8, so eighths will do:
$\tfrac14 = \tfrac28$. Then $\tfrac38 + \tfrac28 = \tfrac58$.

**3. Using the LCM.** $\tfrac58 + \tfrac{7}{12}$. Multiples of 12: 12, 24, ... and 24 is a multiple of 8. So the LCM
is 24. $\tfrac58 = \tfrac{15}{24}$ (times 3) and $\tfrac{7}{12} = \tfrac{14}{24}$ (times 2).
Sum: $\tfrac{29}{24} = 1\tfrac{5}{24}$.

**4. Three fractions.** A rover drives $\tfrac12$ of its planned route on Monday, $\tfrac13$ on Tuesday and
$\tfrac16$ on Wednesday. Did it finish? In sixths: $\tfrac36 + \tfrac26 + \tfrac16 = \tfrac66 = 1$. Yes, exactly.

**5. Regrouping.** $6\tfrac15 - 3\tfrac12$. In tenths: $6\tfrac{2}{10} - 3\tfrac{5}{10}$. Regroup one whole as
$\tfrac{10}{10}$: $5\tfrac{12}{10} - 3\tfrac{5}{10} = 2\tfrac{7}{10}$. Estimate: $6 - 3\tfrac12 = 2\tfrac12$, and
our answer is a bit more, which makes sense because $6\tfrac15$ is a bit more than 6. ✓

**6. From a whole number.** $4 - 1\tfrac38$. Write 4 as $3\tfrac88$. Then $3\tfrac88 - 1\tfrac38 = 2\tfrac58$.

## Try it

1. $\tfrac{3}{10} + \tfrac{4}{10}$ and $\tfrac{11}{12} - \tfrac{5}{12}$.
2. $\tfrac25 + \tfrac14$.
3. $\tfrac78 - \tfrac16$ (use the LCM).
4. $\tfrac{3}{10} + \tfrac{2}{15}$.
5. $3\tfrac12 + 2\tfrac45$.
6. $6\tfrac15 - 3\tfrac12$ by changing to improper fractions. Do you get the same answer as worked example 5?
7. A jug holds 2 litres. You pour out $\tfrac34$ of a litre and then $\tfrac23$ of a litre. How much is left?
8. Explain, with a picture, why $\tfrac12 + \tfrac14 + \tfrac18$ is less than 1, and find exactly how much less.

??? note "Answers"
    1. $\tfrac{7}{10}$ and $\tfrac{6}{12} = \tfrac12$.
    2. LCM of 5 and 4 is 20. $\tfrac{8}{20} + \tfrac{5}{20} = \tfrac{13}{20}$.
    3. Multiples of 8: 8, 16, 24; 24 is a multiple of 6. $\tfrac{21}{24} - \tfrac{4}{24} = \tfrac{17}{24}$.
    4. LCM of 10 and 15 is 30. $\tfrac{9}{30} + \tfrac{4}{30} = \tfrac{13}{30}$.
    5. Wholes: $3 + 2 = 5$. Fractions in tenths: $\tfrac{5}{10} + \tfrac{8}{10} = \tfrac{13}{10} = 1\tfrac{3}{10}$.
       Total $6\tfrac{3}{10}$.
    6. $6\tfrac15 = \tfrac{31}{5}$ and $3\tfrac12 = \tfrac72$. In tenths:
       $\tfrac{62}{10} - \tfrac{35}{10} = \tfrac{27}{10} = 2\tfrac{7}{10}$. Yes, the same.
    7. Poured out: $\tfrac34 + \tfrac23 = \tfrac{9}{12} + \tfrac{8}{12} = \tfrac{17}{12} = 1\tfrac{5}{12}$ litres.
       Left: $2 - 1\tfrac{5}{12} = 1\tfrac{12}{12} - 1\tfrac{5}{12} = \tfrac{7}{12}$ of a litre.
    8. Draw a bar cut in half; shade one half. Cut the other half in two; shade one of those (a quarter). Cut the last
       quarter in two; shade one (an eighth). One eighth is still unshaded. In eighths:
       $\tfrac48 + \tfrac28 + \tfrac18 = \tfrac78$, which is **$\tfrac18$ less than 1**. (If you keep going, adding
       $\tfrac1{16}$, $\tfrac1{32}$, ..., the gap halves every time but never closes. See
       [Infinity](../../infinity/index.md).)

## Common mistake

**Adding the denominators.** $\tfrac12 + \tfrac13 \ne \tfrac25$. The denominator is the size of the piece, not a
count. Quick check: the answer to an addition must be bigger than each fraction you added.

**Changing only the bottom.** To turn $\tfrac34$ into twelfths you multiply the denominator by 3, so you must multiply
the numerator by 3 too: $\tfrac{9}{12}$, not $\tfrac{3}{12}$. Changing only the bottom changes the amount.

## Where it leads

- Next: [Multiplying fractions](02-multiplying-fractions.md), where (surprise) multiplying the tops and the bottoms
  **is** right.
- [Level 4 page](index.md) · [Numbers topic page](../index.md)
- Back to equivalent fractions and common denominators: [Level 3, lesson 6](../level-3/06-equivalent-fractions.md).
- Least common multiples from prime factors: [Number theory](../../number-theory/index.md). Adding fractions with
  letters, like $\tfrac{1}{x} + \tfrac{1}{x+1}$, uses exactly the same idea in [Algebra](../../algebra/index.md).
