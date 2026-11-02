---
title: "Expanding by choosing"
---

# Expanding by choosing

*Counting and combinations · level 7, lesson 1 of 6*

## A question to start

If you multiply out $(a + b)^5$ the long way, bracket by bracket, the answer has a term $10a^2b^3$. Where does the 10
come from?

Here is a strange hint. In level 5 you found that a team of 3 can be picked from 5 people in exactly
$\dbinom{5}{3} = 10$ ways. Multiplying out brackets is algebra; picking teams is counting. By the end of this lesson
you will see that they are the same job, and you will be able to write down the coefficient of any term of
$(a + b)^n$ without multiplying anything out.

## The idea

### What "expanding" really does

To **expand** a product of brackets means to multiply it out until no brackets are left, then collect the terms that
are alike. Each number in front of a term is called a **coefficient**: in $10a^2b^3$ the coefficient is 10.

Start with two different brackets:

$$(a + b)(c + d) = ac + ad + bc + bd.$$

Why four terms, and why these four? The **distributive law** says that multiplying a sum means multiplying each part.
A picture makes the reason plain: a rectangle $a + b$ wide and $c + d$ tall has area $(a + b)(c + d)$, and the two
cuts split it into four smaller rectangles.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 370 215" role="img" aria-label="A rectangle a plus b wide and c plus d tall cut into four pieces ac, bc, ad and bd">
  <rect x="50" y="30" width="150" height="90" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <rect x="200" y="30" width="80" height="90" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <rect x="50" y="120" width="150" height="55" fill="#7ccf9a" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <rect x="200" y="120" width="80" height="55" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <text x="125" y="22" font-size="13" text-anchor="middle" fill="currentColor">a</text>
  <text x="240" y="22" font-size="13" text-anchor="middle" fill="currentColor">b</text>
  <text x="38" y="79" font-size="13" text-anchor="middle" fill="currentColor">c</text>
  <text x="38" y="151.5" font-size="13" text-anchor="middle" fill="currentColor">d</text>
  <text x="125" y="80" font-size="15" text-anchor="middle" fill="currentColor">ac</text>
  <text x="240" y="80" font-size="15" text-anchor="middle" fill="currentColor">bc</text>
  <text x="125" y="152.5" font-size="15" text-anchor="middle" fill="currentColor">ad</text>
  <text x="240" y="152.5" font-size="15" text-anchor="middle" fill="currentColor">bd</text>
  <text x="185" y="205" font-size="13" text-anchor="middle" fill="currentColor">(a + b)(c + d) = ac + bc + ad + bd</text>
</svg>
</div>

Look at what each piece is: one term from the first bracket times one term from the second. Every pair appears
exactly once. So here is the rule, and the whole lesson grows from it:

> **To expand a product of brackets, choose one term from each bracket and multiply your choices. Do this for every
> possible way of choosing, and add up all the results.**

With two brackets of two terms each there are $2 \times 2 = 4$ ways to choose, so 4 products. That is the
**multiplication principle** of level 2: one choice, then another, multiply the numbers of options.

### Three brackets: a tree of choices

Now take $(a + b)^3 = (a + b)(a + b)(a + b)$. From bracket 1 choose $a$ or $b$, from bracket 2 choose $a$ or $b$,
from bracket 3 choose $a$ or $b$. That is $2 \times 2 \times 2 = 8$ ways, and a tree diagram lists them all.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 480 268" role="img" aria-label="A tree: from each of three brackets choose a or b, giving eight words aaa to bbb and their products">
  <circle cx="40" cy="130" r="4" fill="currentColor" stroke="currentColor" stroke-width="1.5"/>
  <line x1="44" y1="130" x2="131" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="140" cy="75" r="9" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="140" y="79" font-size="12" text-anchor="middle" fill="currentColor">a</text>
  <line x1="44" y1="130" x2="131" y2="185" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="140" cy="185" r="9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="140" y="189" font-size="12" text-anchor="middle" fill="currentColor">b</text>
  <line x1="149" y1="75" x2="231" y2="47.5" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="240" cy="47.5" r="9" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="240" y="51.5" font-size="12" text-anchor="middle" fill="currentColor">a</text>
  <line x1="149" y1="75" x2="231" y2="102.5" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="240" cy="102.5" r="9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="240" y="106.5" font-size="12" text-anchor="middle" fill="currentColor">b</text>
  <line x1="149" y1="185" x2="231" y2="157.5" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="240" cy="157.5" r="9" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="240" y="161.5" font-size="12" text-anchor="middle" fill="currentColor">a</text>
  <line x1="149" y1="185" x2="231" y2="212.5" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="240" cy="212.5" r="9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="240" y="216.5" font-size="12" text-anchor="middle" fill="currentColor">b</text>
  <line x1="249" y1="47.5" x2="331" y2="33.75" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="340" cy="33.75" r="9" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="340" y="37.75" font-size="12" text-anchor="middle" fill="currentColor">a</text>
  <line x1="249" y1="47.5" x2="331" y2="61.25" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="340" cy="61.25" r="9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="340" y="65.25" font-size="12" text-anchor="middle" fill="currentColor">b</text>
  <line x1="249" y1="102.5" x2="331" y2="88.75" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="340" cy="88.75" r="9" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="340" y="92.75" font-size="12" text-anchor="middle" fill="currentColor">a</text>
  <line x1="249" y1="102.5" x2="331" y2="116.25" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="340" cy="116.25" r="9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="340" y="120.25" font-size="12" text-anchor="middle" fill="currentColor">b</text>
  <line x1="249" y1="157.5" x2="331" y2="143.75" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="340" cy="143.75" r="9" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="340" y="147.75" font-size="12" text-anchor="middle" fill="currentColor">a</text>
  <line x1="249" y1="157.5" x2="331" y2="171.25" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="340" cy="171.25" r="9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="340" y="175.25" font-size="12" text-anchor="middle" fill="currentColor">b</text>
  <line x1="249" y1="212.5" x2="331" y2="198.75" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="340" cy="198.75" r="9" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="340" y="202.75" font-size="12" text-anchor="middle" fill="currentColor">a</text>
  <line x1="249" y1="212.5" x2="331" y2="226.25" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="340" cy="226.25" r="9" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="340" y="230.25" font-size="12" text-anchor="middle" fill="currentColor">b</text>
  <text x="362" y="37.75" font-size="13" text-anchor="start" fill="currentColor">aaa</text>
  <text x="410" y="37.75" font-size="13" text-anchor="start" fill="currentColor">→ a³</text>
  <text x="362" y="65.25" font-size="13" text-anchor="start" fill="currentColor">aab</text>
  <text x="410" y="65.25" font-size="13" text-anchor="start" fill="currentColor">→ a²b</text>
  <text x="362" y="92.75" font-size="13" text-anchor="start" fill="currentColor">aba</text>
  <text x="410" y="92.75" font-size="13" text-anchor="start" fill="currentColor">→ a²b</text>
  <text x="362" y="120.25" font-size="13" text-anchor="start" fill="currentColor">abb</text>
  <text x="410" y="120.25" font-size="13" text-anchor="start" fill="currentColor">→ ab²</text>
  <text x="362" y="147.75" font-size="13" text-anchor="start" fill="currentColor">baa</text>
  <text x="410" y="147.75" font-size="13" text-anchor="start" fill="currentColor">→ a²b</text>
  <text x="362" y="175.25" font-size="13" text-anchor="start" fill="currentColor">bab</text>
  <text x="410" y="175.25" font-size="13" text-anchor="start" fill="currentColor">→ ab²</text>
  <text x="362" y="202.75" font-size="13" text-anchor="start" fill="currentColor">bba</text>
  <text x="410" y="202.75" font-size="13" text-anchor="start" fill="currentColor">→ ab²</text>
  <text x="362" y="230.25" font-size="13" text-anchor="start" fill="currentColor">bbb</text>
  <text x="410" y="230.25" font-size="13" text-anchor="start" fill="currentColor">→ b³</text>
  <text x="140" y="258" font-size="11" text-anchor="middle" fill="currentColor">bracket 1</text>
  <text x="240" y="258" font-size="11" text-anchor="middle" fill="currentColor">bracket 2</text>
  <text x="340" y="258" font-size="11" text-anchor="middle" fill="currentColor">bracket 3</text>
</svg>
</div>

Each path through the tree is a three-letter **word** such as $aba$, meaning "$a$ from bracket 1, $b$ from bracket 2,
$a$ from bracket 3". Its product is $a \cdot b \cdot a = a^2b$. Multiplication does not care about order, so many
different words give the same product. Collect them:

- $a^3$ comes only from $aaa$: **1** word.
- $a^2b$ comes from $aab$, $aba$, $baa$: **3** words.
- $ab^2$ comes from $abb$, $bab$, $bba$: **3** words.
- $b^3$ comes only from $bbb$: **1** word.

So

$$(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3.$$

### Why the coefficients are choose numbers

Look again at the words that give $a^2b$. Each has exactly one $b$, and a word with one $b$ is decided completely by
**which bracket** the $b$ came from. There are 3 brackets, so there are $\dbinom{3}{1} = 3$ such words.

The words that give $ab^2$ have two $b$'s. Such a word is decided by **which 2 of the 3 brackets** supplied a $b$.
That is choosing 2 things from 3: $\dbinom{3}{2} = 3$ ways.

Nothing here depends on the power being 3. In $(a + b)^n$ there are $n$ brackets. A term $a^{n-k}b^k$ comes from every
word with exactly $k$ letters $b$ and $n - k$ letters $a$. Such a word is fixed as soon as you know which $k$ of the
$n$ brackets gave a $b$ (all the others gave $a$). So the number of such words, which is the coefficient, is

$$\text{coefficient of } a^{n-k}b^k \text{ in } (a + b)^n = \binom{n}{k}.$$

This is the heart of the binomial theorem, and the next lesson writes it out in full. Back to the opening question:
in $(a + b)^5$, the term $a^2b^3$ needs 3 of the 5 brackets to give $b$. Choosing those 3 brackets is just like
choosing a team of 3 from 5 people, so the coefficient is $\dbinom{5}{3} = 10$.

### Three things that come along for free

**The coefficients add to $2^n$.** Before collecting, there are $2^n$ words (two choices in each of $n$ brackets).
Collecting just sorts those words into piles by how many $b$'s they have. So the coefficients of $(a + b)^n$ add up to
$2^n$. For $n = 3$: $1 + 3 + 3 + 1 = 8 = 2^3$.

**The coefficients are symmetric.** Choosing which $k$ brackets give $b$ is the same as choosing which $n - k$
brackets give $a$. So the coefficient of $a^{n-k}b^k$ equals the coefficient of $a^kb^{n-k}$, which is the level 5 fact
$\dbinom{n}{k} = \dbinom{n}{n-k}$ seen from the algebra side.

**The rule does not need equal brackets.** "Choose one term from each bracket" works for any brackets at all. For
$(1 + x)(1 + 2x)(1 + 3x)$, a term $x^2$ comes from choosing the $x$-part from exactly two brackets and the 1 from the
third:

- brackets 1 and 2: $x \cdot 2x \cdot 1 = 2x^2$,
- brackets 1 and 3: $x \cdot 1 \cdot 3x = 3x^2$,
- brackets 2 and 3: $1 \cdot 2x \cdot 3x = 6x^2$.

So the coefficient of $x^2$ is $2 + 3 + 6 = 11$. When the brackets are all equal, each of the $\dbinom{n}{k}$ choices
gives the **same** product, and adding equal things becomes multiplying by $\dbinom{n}{k}$. That is the only reason a
single choose number appears.

### A picture for squares and cubes

The case $n = 2$ is the old area picture: a square of side $a + b$ splits into an $a$-by-$a$ square, a $b$-by-$b$
square and **two** $a$-by-$b$ rectangles, so $(a + b)^2 = a^2 + 2ab + b^2$. The two rectangles are the words $ab$ and
$ba$. For $n = 3$ a cube of side $a + b$ splits into 8 boxes: one $a^3$ cube, one $b^3$ cube, three $a^2b$ slabs and
three $ab^2$ rods, matching the 8 words of the tree. For $n = 4$ and beyond there is no picture to draw, but the
counting argument does not care: it works in any number of brackets.

## Worked examples

**1. Expand $(a + b)^4$ by choosing.** There are 4 brackets.

- $a^4$: no bracket gives $b$: $\dbinom{4}{0} = 1$.
- $a^3b$: choose 1 bracket for $b$: $\dbinom{4}{1} = 4$.
- $a^2b^2$: choose 2 brackets: $\dbinom{4}{2} = 6$.
- $ab^3$: $\dbinom{4}{3} = 4$, and $b^4$: $\dbinom{4}{4} = 1$.

$$(a + b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4.$$

Check: $1 + 4 + 6 + 4 + 1 = 16 = 2^4$. ✓

**2. One coefficient, listed by hand.** Find the coefficient of $a^3b^2$ in $(a + b)^5$, and list the words.

Choose which 2 of the 5 brackets give $b$: $\dbinom{5}{2} = 10$. The words, sorted by where the first $b$ is:
$bbaaa$, $babaa$, $baaba$, $baaab$, $abbaa$, $ababa$, $abaab$, $aabba$, $aabab$, $aaabb$. That is 10. ✓

**3. Powers of a bracket with a number.** Find the coefficient of $x^2$ in $(x + 1)^6$.

Here $a = x$ and $b = 1$. A term $x^2$ takes $x$ from exactly 2 of the 6 brackets and 1 from the other 4. The 1's
change nothing, so the coefficient is $\dbinom{6}{2} = 15$.

**4. Unequal brackets.** Expand $(1 + x)(1 + 2x)(1 + 3x)$ completely.

- $x^0$: choose 1 from every bracket: $1$.
- $x^1$: the $x$-part from one bracket: $1 + 2 + 3 = 6$.
- $x^2$: from two brackets: $1 \cdot 2 + 1 \cdot 3 + 2 \cdot 3 = 11$ (found above).
- $x^3$: from all three: $1 \cdot 2 \cdot 3 = 6$.

So the product is $1 + 6x + 11x^2 + 6x^3$. Check with $x = 1$: the left side is $2 \times 3 \times 4 = 24$, the right
side is $1 + 6 + 11 + 6 = 24$. ✓

**5. Three terms in a bracket.** How many products are there before collecting in $(a + b + c)^2$, and what is the
expansion? Each bracket offers 3 choices, so there are $3 \times 3 = 9$ words: $aa, ab, ac, ba, bb, bc, ca, cb, cc$.
Collecting, $(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc$. The 2's are $ab$ and $ba$, and so on. Brackets with
three terms are the subject of [lesson 6](06-multinomial-coefficients.md).

## Try it

1. Before collecting terms, how many products does $(a + b)^6$ give? After collecting, how many different terms are
   there?
2. List all the words that give $a^2b^2$ in $(a + b)^4$. Does your count match $\dbinom{4}{2}$?
3. Find the coefficient of $a^3b^4$ in $(a + b)^7$.
4. Expand $(x + y)^5$ by choosing.
5. Expand $(1 + x)(1 + 2x)(1 + 4x)$, and check your answer by putting $x = 1$.
6. In $(x + 1)^{10}$, find the coefficients of $x^7$ and of $x^3$. Explain, without working them out, why they must be
   equal.
7. How many different terms does $(a + b)(c + d)(e + f)$ have after collecting? Why is the answer different from
   $(a + b)^3$?
8. Find the coefficient of $x^2$ in $(1 + x + x^2)^3$ by choosing one term from each bracket.

??? note "Answers"
    1. Each of 6 brackets gives $a$ or $b$: $2^6 = 64$ products. After collecting, the terms are $a^6, a^5b, \ldots, b^6$,
       one for each number of $b$'s from 0 to 6: **7** terms.
    2. $aabb$, $abab$, $abba$, $baab$, $baba$, $bbaa$: 6 words, and $\dbinom{4}{2} = 6$. ✓
    3. Choose which 4 of the 7 brackets give $b$: $\dbinom{7}{4} = 35$.
    4. The coefficients are $\dbinom{5}{0}, \ldots, \dbinom{5}{5}$ = 1, 5, 10, 10, 5, 1, so
       $(x + y)^5 = x^5 + 5x^4y + 10x^3y^2 + 10x^2y^3 + 5xy^4 + y^5$. Check: they add to $32 = 2^5$. ✓
    5. Constant 1. $x$: $1 + 2 + 4 = 7$. $x^2$: $1 \cdot 2 + 1 \cdot 4 + 2 \cdot 4 = 14$. $x^3$: $1 \cdot 2 \cdot 4 = 8$.
       So $1 + 7x + 14x^2 + 8x^3$. Check: $2 \times 3 \times 5 = 30$ and $1 + 7 + 14 + 8 = 30$. ✓
    6. $\dbinom{10}{7} = 120$ and $\dbinom{10}{3} = 120$. They must be equal because choosing which 7 brackets give $x$
       is the same as choosing which 3 brackets give 1.
    7. All $2^3 = 8$ products $ace, acf, ade, adf, bce, bcf, bde, bdf$ are different, so nothing collects: **8 terms**.
       In $(a + b)^3$ the letters repeat, so different words give the same product and collect into only 4 terms.
    8. Pick a power $x^0$, $x^1$ or $x^2$ from each bracket so that the powers add to 2. Either one bracket gives $x^2$
       and the others 1 (3 ways, one for each bracket), or two brackets give $x$ and one gives 1 (3 ways, one for the
       bracket that gives 1). The coefficient is $3 + 3 = 6$. Check: $(1 + x + x^2)^2 = 1 + 2x + 3x^2 + 2x^3 + x^4$, and
       multiplying by $(1 + x + x^2)$ the $x^2$ coefficient is $3 + 2 + 1 = 6$. ✓

## Common mistake

**Writing $(a + b)^2 = a^2 + b^2$.** This drops the words $ab$ and $ba$. Choosing one term from each bracket gives
four products, not two. A quick test catches it: with $a = b = 1$ the left side is $4$ but $a^2 + b^2 = 2$.

**Counting $ab$ and $ba$ as one product before collecting.** When you count words, order matters (which bracket gave
which letter); when you collect terms, it does not. Keep the two steps apart: count the words first, then collect.

## Where it leads

- Back: [Level 6: counting with overlaps and stars](../level-6/index.md), and the choose numbers of
  [level 5](../level-5/index.md) · Next: [The binomial theorem](02-binomial-theorem.md)
- [Level 7 page](index.md) · [Counting topic page](../index.md)
- The rule "one term from each bracket" is how every polynomial is multiplied: more in
  [Algebra](../../algebra/index.md).
- Powers and the laws $a^m a^n = a^{m+n}$ that collecting uses: [Powers](../../numbers/level-5/03-powers.md) in
  Numbers.
