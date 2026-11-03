# 1. The language of algebra

*Arithmetic answers one question at a time: what is $7 \times 8$? Algebra asks about all numbers at once: what
happens to every number when you double it, add ten and halve it? To ask such questions you need a way to write
"any number", and rules for working with what you wrote. This chapter builds that language: letters for numbers,
the words for the parts of an expression, the handful of laws every calculation obeys, the order in which to read
a line of symbols, and the two everyday skills of simplifying and substituting. It ends by proving, for every
number at once, why a party trick always works.*

!!! abstract "In this chapter"
    **You will learn:**

    - why mathematicians write letters for numbers, and the three different jobs a letter can do
    - the names of the parts of an expression: terms, factors, coefficients, constants, like terms
    - the laws of arithmetic (commutative, associative, distributive, identities, inverses) and why they hold
    - the order of operations, where it comes from and where it is ambiguous
    - how to simplify and expand expressions without the classic mistakes
    - how to substitute into formulas, and how to prove a statement about every number

    **You need:** only arithmetic with whole numbers, fractions and negative numbers. For a gentler version, see the
    Topics lessons [Letters and shapes](../../topics/algebra/level-3/01-letters-and-shapes.md),
    [A mind-reading trick](../../topics/algebra/level-3/06-mind-reading-trick.md),
    [Variables and expressions](../../topics/algebra/level-4/01-variables-expressions.md),
    [Like terms](../../topics/algebra/level-4/03-like-terms.md) and
    [The distributive law](../../topics/algebra/level-5/01-distributive-law.md).

    **Levels:** 1.1 to 1.6 are beginner; 1.3's proofs from the laws and 1.7 are intermediate.

## 1.1 Why letters?

Try this on a friend, or on yourself.

1. Think of a number.
2. Double it.
3. Add 10.
4. Halve the result.
5. Take away the number you first thought of.

Whatever number you started with, you now have 5. Here it is for a few starting numbers:

| Start | Double | Add 10 | Halve | Take away start |
|---:|---:|---:|---:|---:|
| 3 | 6 | 16 | 8 | 5 |
| 12 | 24 | 34 | 17 | 5 |
| 100 | 200 | 210 | 105 | 5 |
| $-4$ | $-8$ | 2 | 1 | 5 |
| $\tfrac{1}{2}$ | 1 | 11 | $\tfrac{11}{2}$ | 5 |

Five rows, five 5s. That is evidence, but it is not a reason. There are infinitely many numbers, and no table can
list them all. Maybe the trick fails for 7,341, or for $-\tfrac{2}{9}$, and we never tried them. To be sure, we
need to follow **any** number through the steps, without saying which one it is. That is exactly what a letter
lets us do.

Call the starting number $n$. We do not know what $n$ is, and we do not need to. Doubling gives $2n$ (which means
$2 \times n$). Adding 10 gives $2n + 10$. Halving gives $n + 5$, because half of $2n$ is $n$ and half of 10 is 5.
Taking away the start gives $n + 5 - n = 5$. The $n$ has vanished: the answer is 5 whatever $n$ was. Section 1.7
comes back to this argument and makes each step of it watertight, but already you can see the point of algebra.
**A letter lets you calculate with a number you have not chosen yet, and so lets you reason about all numbers at
once.**

### The three jobs of a letter

Letters turn up in mathematics doing three different jobs, and it helps to tell them apart.

- **A variable** stands for any number from some collection, and the statement is meant to hold for each of them.
  In "$n + 5 - n = 5$", $n$ is a variable: the statement is true for every number $n$. A statement true for every
  value of its variables is called an **identity**.
- **An unknown** stands for one particular number (or a few) that we are trying to find. In "$3x + 2 = 17$", $x$
  is an unknown, and the job is to find which number makes the statement true ($x = 5$). Such a statement is an
  **equation**, the subject of [Chapter 2](02-Equations-and-Inequalities.md).
- **A parameter** (or constant) is a number that is fixed in a given situation but could change from one situation
  to another. In the formula for the distance fallen by a dropped stone, $d = \tfrac{1}{2} g t^2$, the time $t$
  is a variable, while $g$ (the strength of gravity) is a parameter: about $9.81$ metres per second per second on
  Earth and about $3.71$ on Mars.

The same letter can change jobs. Nothing in the symbol $x$ says which job it is doing; the sentence around it does.
That is why good algebra is written in sentences: "for every number $n$", "find $x$ such that", "where $g$ is
the acceleration due to gravity".

### Why not just use words?

People did, for most of history. The Babylonian scribes who solved quadratic problems around 1800 BCE wrote them
as stories about lengths and widths. The ninth-century Baghdad scholar Muhammad ibn Musa al-Khwarizmi, whose book
gave algebra its name ([Chapter 5](05-Quadratics.md) tells that story), wrote everything in words, including the
numbers. Here is our trick written that way:

> A thing is doubled, and ten is added to it. Half of this is taken, and the thing is taken away from what
> remains. What is left is five.

It can be done, but try following ten steps of that. Symbols do three things words cannot. They are **short**, so
a whole argument fits in your eye at once. They are **mechanical**, so you can push them around by rules without
re-thinking the meaning at each step (and a computer can do it too). And they are **general**: once you have
shown $n + 5 - n = 5$, you have shown it for every number at the same time.

Symbols arrived slowly. Diophantus of Alexandria (probably third century CE) used abbreviations for an unknown and
its powers. In 1591 the French lawyer François Viète used letters systematically, vowels for unknowns and
consonants for known quantities, so that he could write a whole class of problems as one. René Descartes, in *La
Géométrie* (1637), used the late letters $x, y, z$ for unknowns and the early letters $a, b, c$ for known
quantities, and wrote powers as $x^2, x^3$, which is very nearly the notation we use today. The equals sign
itself was introduced by the Welsh doctor Robert Recorde in *The Whetstone of Witte* (1557), who chose two
parallel lines because, as he wrote, no two things could be more equal.

## 1.2 Expressions, terms and coefficients

An **expression** is a meaningful string of numbers, letters and operation signs, such as

$$3x^2 - 5xy + 7, \qquad \frac{a + b}{2}, \qquad 4(n - 1) + 2.$$

An expression has no equals sign; it is a name for a number, the way "half the sum of $a$ and $b$" is a name for a
number. Once you know what the letters stand for you can **evaluate** it, that is, work out which number it names.
A statement that two expressions are equal, such as $4(n-1) + 2 = 4n - 2$, is an **equation** (if it is meant to
be true for particular values) or an **identity** (if it is meant to be true for all of them).

The parts of an expression have names, and you will hear them in every later chapter.

- A **term** is a piece that is added or subtracted. The expression $3x^2 - 5xy + 7$ has three terms: $3x^2$,
  $-5xy$ and $7$. We count the sign with the term that follows it, so the second term is $-5xy$, not $5xy$.
- A **factor** is a piece that is multiplied. The term $-5xy$ has factors $-5$, $x$ and $y$. Terms are separated by
  $+$ and $-$; factors are joined by multiplication. Mixing the two words up is the root of many algebra errors.
- The **coefficient** of a term is its number factor: in $3x^2$ it is $3$, in $-5xy$ it is $-5$, and in $x$ alone
  it is $1$ (because $x = 1 \cdot x$). In $-x$ it is $-1$.
- A **constant term** has no letters: $7$ in our example.
- **Like terms** have exactly the same letters raised to exactly the same powers. $3x^2$ and $-8x^2$ are like
  terms; $3x^2$ and $3x$ are not; $5xy$ and $2yx$ are (since $yx = xy$, see 1.3).
- The **degree** of a term is the total number of letter factors: $3x^2$ has degree 2, $-5xy$ has degree 2 (one $x$
  and one $y$), $7$ has degree 0.

We also use a few writing conventions. A number written next to a letter means multiplication: $5y$ means
$5 \times y$, and $xy$ means $x \times y$. The number is written first ($5y$, not $y5$). The power $x^2$ means
$x \cdot x$ and $x^3$ means $x \cdot x \cdot x$; in general $x^n$, for a whole number $n \geq 1$, means $n$ factors
of $x$ multiplied together. Here $x$ is the **base** and $n$ is the **exponent**. Division is usually written as a
fraction, $\frac{a}{b}$ or $a/b$, rather than with $\div$.

**Example 1.** Name the parts of $\dfrac{x}{2} - 4x^3 + x - 9$.

There are four terms: $\frac{x}{2}$, $-4x^3$, $x$ and $-9$. The coefficients are $\frac{1}{2}$ (since
$\frac{x}{2} = \frac{1}{2}x$), $-4$, $1$, and the constant term is $-9$. The terms $\frac{x}{2}$ and $x$ are like
terms; together they make $\frac{3}{2}x$. The highest degree of any term is 3.

## 1.3 The laws of arithmetic

Every move you make in algebra rests on a short list of laws. They are so familiar from arithmetic that most people
never notice they are using them. Here they are, for any numbers $a$, $b$, $c$.

| Law | For addition | For multiplication |
|---|---|---|
| Commutative (order does not matter) | $a + b = b + a$ | $ab = ba$ |
| Associative (grouping does not matter) | $(a + b) + c = a + (b + c)$ | $(ab)c = a(bc)$ |
| Identity | $a + 0 = a$ | $a \cdot 1 = a$ |
| Inverse | $a + (-a) = 0$ | $a \cdot \frac{1}{a} = 1$ if $a \neq 0$ |

and one law that links the two operations:

$$\text{Distributive law:}\qquad a(b + c) = ab + ac.$$

**What they say.** The commutative laws say you may swap the two numbers in a sum or a product. The associative
laws say that in a sum of three numbers it does not matter which pair you add first, so we can just write
$a + b + c$ without brackets; the same for products. The identity laws say that adding 0 and multiplying by 1 change
nothing; 0 and 1 are called the **identity elements**. The inverse laws say that every number $a$ has a **negative**
$-a$ that brings it back to 0, and every number except 0 has a **reciprocal** $\frac{1}{a}$ that brings it back
to 1. The distributive law says multiplying a sum is the same as multiplying each piece and adding.

**Subtraction and division are not on the list.** They are defined from the others: $a - b$ means $a + (-b)$, and
$\frac{a}{b}$ means $a \cdot \frac{1}{b}$. They obey none of the commutative or associative laws:
$5 - 3 \neq 3 - 5$, $(8 - 4) - 2 = 2$ but $8 - (4 - 2) = 6$, and $(8 \div 4) \div 2 = 1$ but
$8 \div (4 \div 2) = 4$. Turning every subtraction into "adding a negative" is the cure for most sign errors: it
turns a non-commutative operation into a commutative one.

### Why they hold for counting numbers

For whole numbers, each law is a fact about counting.

- $a + b = b + a$: put a pile of $a$ stones next to a pile of $b$ stones. Counting the whole lot from the left or
  from the right gives the same total.
- $ab = ba$: lay out $a$ rows of $b$ stones in a rectangle. Counting by rows gives $a \times b$; turn the rectangle
  a quarter-turn and the same stones are $b$ rows of $a$. Nothing was added or removed.
- $(ab)c = a(bc)$: a box of stones $a$ wide, $b$ deep and $c$ high, counted layer by layer two different ways.
- $a(b + c) = ab + ac$: a rectangle $a$ rows tall and $b + c$ columns wide splits into an $a$ by $b$ rectangle and
  an $a$ by $c$ rectangle. The same picture works for lengths and areas:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 155" role="img" aria-label="A rectangle of height a and width b plus c, split into a left part of area ab and a right part of area ac">
  <rect x="60" y="25" width="180" height="100" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="240" y="25" width="120" height="100" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <text x="150" y="18" text-anchor="middle" font-size="15" fill="currentColor">b</text>
  <text x="300" y="18" text-anchor="middle" font-size="15" fill="currentColor">c</text>
  <text x="46" y="80" text-anchor="middle" font-size="15" fill="currentColor">a</text>
  <text x="150" y="80" text-anchor="middle" font-size="16" fill="currentColor">ab</text>
  <text x="300" y="80" text-anchor="middle" font-size="16" fill="currentColor">ac</text>
  <text x="210" y="148" text-anchor="middle" font-size="15" fill="currentColor">a(b + c) = ab + ac</text>
</svg>
</div>

### Why they hold for all real numbers

Negative numbers, fractions and numbers like $\sqrt{2}$ are not piles of stones, so the counting pictures stop
working. There are two honest answers to "why do the laws still hold?"

The first is that these number systems were **built so that the laws keep holding**. When mathematicians extended
whole numbers to integers, integers to fractions, and fractions to the real numbers, at each stage they defined
the new operations in the only way that keeps the old laws true, and then proved that the laws really do hold for
the new definitions. For fractions, for example, multiplication is *defined* by
$\frac{a}{b} \cdot \frac{c}{d} = \frac{ac}{bd}$, and the commutative law for fractions then follows from the
commutative law for whole numbers: $\frac{ac}{bd} = \frac{ca}{db}$.

The second answer is the modern one: take the laws as the **starting rules** (axioms) of the number system and
derive everything else from them. A collection of things with an addition and a multiplication obeying all the
laws in the table plus the distributive law (and $0 \neq 1$) is called a **field**. The rational numbers, the real
numbers and the complex numbers are fields; so are the "clock arithmetics" modulo a prime that power modern
cryptography. You will meet fields properly in [Chapter 9](09-Complex-Numbers.md) and
[Chapter 19](19-Fields-and-Extensions.md). The point for now is that **anything we prove using only these laws is
true in every field at once.**

### Facts that follow from the laws

Many "rules" you learned at school are not extra laws at all; they are consequences of the ones above. Proving a
few of them is good practice in reading algebra as a chain of reasons, and it answers a question every student
asks: why is a negative times a negative positive?

**Fact 1. For every number $a$, $a \cdot 0 = 0$.**

*Proof.* By the identity law, $0 + 0 = 0$. Multiply both sides by $a$ and use the distributive law:
$a \cdot 0 + a \cdot 0 = a \cdot 0$. Now add $-(a \cdot 0)$ to both sides. On the left,
$a\cdot 0 + a\cdot 0 + (-(a \cdot 0)) = a \cdot 0 + 0 = a \cdot 0$ (by associativity, then the inverse law, then
the identity law). On the right we get $0$. So $a \cdot 0 = 0$. $\square$

**Fact 2. For every $a$, $(-1) \cdot a = -a$.**

*Proof.* We show $(-1)a$ does the job of the negative of $a$, that is, adding it to $a$ gives 0:
$a + (-1)a = 1 \cdot a + (-1) a = (1 + (-1))a = 0 \cdot a = 0$, using Fact 1 at the end. A number has only one
negative (if $a + x = 0$ and $a + y = 0$, then $x = x + (a + y) = (x + a) + y = 0 + y = y$), so $(-1)a = -a$.
$\square$

**Fact 3. $(-1)(-1) = 1$, and so $(-a)(-b) = ab$.**

*Proof.* By Fact 2 with $a = -1$, $(-1)(-1) = -(-1)$, the number which added to $-1$ gives 0. That number is 1,
since $-1 + 1 = 0$. So $(-1)(-1) = 1$. Then
$(-a)(-b) = (-1)a \cdot (-1)b = (-1)(-1) \cdot ab = 1 \cdot ab = ab$, using the commutative and associative laws
to move the factors around. $\square$

So "a negative times a negative is a positive" is not a convention someone voted for. It is **forced** by the
distributive law. Any other answer would break $a(b + c) = ab + ac$, and with it most of algebra.

**Fact 4. If $ab = 0$, then $a = 0$ or $b = 0$.**

*Proof.* Suppose $ab = 0$ and $a \neq 0$. Then $a$ has a reciprocal, and
$b = 1 \cdot b = (\tfrac{1}{a} a) b = \tfrac{1}{a}(ab) = \tfrac{1}{a} \cdot 0 = 0$. $\square$

Fact 4, the **zero product property**, is the reason factoring solves equations ([Chapter 4](04-Polynomials-and-Factoring.md)).
It also explains why you can never divide by zero: if $\frac{1}{0}$ existed, then $1 = 0 \cdot \frac{1}{0} = 0$
by Fact 1, which is false.

## 1.4 The order of operations

What is $2 + 3 \times 4$? If you work left to right you get $5 \times 4 = 20$. If you do the multiplication first
you get $2 + 12 = 14$. Both readings are reasonable, so we need a rule, and everyone has to use the same one. The
agreed rule is:

1. **Brackets** first, innermost first. A fraction bar and a square-root sign act as brackets around what they
   cover.
2. **Powers** (exponents) next.
3. **Multiplication and division**, from left to right.
4. **Addition and subtraction**, from left to right.

So $2 + 3 \times 4 = 14$. This rule is a **convention**, not a law of nature, but it is not arbitrary. It is
chosen so that the most common kind of expression in algebra, a sum of terms such as $3x^2 + 5x + 2$, can be
written with no brackets at all. Without the convention it would have to be written $(3(x^2)) + (5x) + 2$.

A few cases catch people out.

- $-3^2 = -9$, not $9$. The power applies to 3 only, and then the negative is taken; the expression means
  $-(3^2)$. If you mean the square of $-3$, write $(-3)^2 = 9$. This matters when you substitute: if $x = -3$,
  then $x^2$ is $(-3)^2 = 9$.
- $2^{3^2}$ means $2^{(3^2)} = 2^9 = 512$, not $(2^3)^2 = 64$. Towers of powers are read from the top down.
- $\dfrac{6 + 4}{2} = 5$, because the fraction bar groups the top. Typed on one line, it must become $(6+4)/2$;
  $6 + 4/2$ is $8$.
- $12 \div 3 \times 2 = 8$, read left to right as $(12 \div 3) \times 2$, not $12 \div 6 = 2$.

Some expressions are genuinely ambiguous. The famous one is $6 \div 2(1 + 2)$. Strictly left to right it is
$3 \times 3 = 9$; but many people (and some calculators and older textbooks) treat the "joined" multiplication
$2(1+2)$ as binding more tightly, giving $6 \div 6 = 1$. There is no universal agreement, and that is the lesson:
**if an expression could be read two ways, add brackets or use a fraction bar.** Professional mathematicians never
write $a \div bc$; they write $\frac{a}{bc}$ or $\frac{a}{b}c$, whichever they mean.

**Example 2.** Evaluate $\;4 - 2(3 - 5)^2 \div 8 + 1$.

The bracket gives $3 - 5 = -2$. The power gives $(-2)^2 = 4$. Then multiplication and division from left to right:
$2 \times 4 = 8$, then $8 \div 8 = 1$. Finally $4 - 1 + 1 = 4$.

## 1.5 Simplifying and expanding

To **simplify** an expression is to rewrite it in a shorter, equivalent form: one that gives the same value for
every value of the letters. To **expand** is to remove brackets by multiplying out. Both use only the laws of 1.3.

### Collecting like terms

$5x + 3x = 8x$ is the distributive law read backwards: $5x + 3x = (5 + 3)x = 8x$. Only like terms combine:
$5x + 3y$ is already as simple as it gets, and $x^2 + x$ is not $x^3$ or $2x^2$ (try $x = 3$: $9 + 3 = 12$, while
$x^3 = 27$ and $2x^2 = 18$).

**Example 3.** Simplify $4a - 7b + 2 - a + 3b - 9$.

Group the like terms (allowed by the commutative and associative laws, carrying each sign with its term):
$(4a - a) + (-7b + 3b) + (2 - 9) = 3a - 4b - 7$.

### Expanding brackets

A number outside a bracket multiplies every term inside: $3(2x - 5) = 6x - 15$. A minus sign outside is a
multiplication by $-1$, so it changes the sign of every term inside:

$$-(4x - 3y + 1) = -4x + 3y - 1.$$

Forgetting to change the last sign, writing $-4x + 3y + 1$, is perhaps the single most common error in school
algebra. The fix is to treat the minus as $(-1) \times$ and multiply each term in turn.

**Example 4.** Simplify $5(x - 2) - 3(2x - 4)$.

$5x - 10 - 6x + 12 = -x + 2$. Note $-3 \times (-4) = +12$, by Fact 3. **Check** with $x = 1$: the original is
$5(-1) - 3(-2) = -5 + 6 = 1$, and the answer gives $-1 + 2 = 1$. ✓

### Multiplying two brackets

To multiply $(a + b)(c + d)$, use the distributive law twice. Treat $(c + d)$ as one number first:
$(a + b)(c + d) = a(c + d) + b(c + d) = ac + ad + bc + bd$. **Every term of the first bracket multiplies every term
of the second.** The picture is a rectangle cut into four:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 170" role="img" aria-label="A rectangle of width a plus b and height c plus d, cut into four parts of areas ac, bc, ad and bd">
  <rect x="80" y="25" width="150" height="80" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="230" y="25" width="90" height="80" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="80" y="105" width="150" height="50" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="230" y="105" width="90" height="50" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <text x="155" y="18" text-anchor="middle" font-size="15" fill="currentColor">a</text>
  <text x="275" y="18" text-anchor="middle" font-size="15" fill="currentColor">b</text>
  <text x="66" y="70" text-anchor="middle" font-size="15" fill="currentColor">c</text>
  <text x="66" y="135" text-anchor="middle" font-size="15" fill="currentColor">d</text>
  <text x="155" y="70" text-anchor="middle" font-size="16" fill="currentColor">ac</text>
  <text x="275" y="70" text-anchor="middle" font-size="16" fill="currentColor">bc</text>
  <text x="155" y="135" text-anchor="middle" font-size="16" fill="currentColor">ad</text>
  <text x="275" y="135" text-anchor="middle" font-size="16" fill="currentColor">bd</text>
</svg>
</div>

**Example 5.** Expand $(2x + 3)(x - 4)$.

$2x \cdot x + 2x \cdot (-4) + 3 \cdot x + 3 \cdot (-4) = 2x^2 - 8x + 3x - 12 = 2x^2 - 5x - 12$.
**Check** with $x = 2$: $(7)(-2) = -14$ and $8 - 10 - 12 = -14$. ✓

**Example 6.** Expand $(x + 3)^2$.

$(x + 3)^2$ means $(x + 3)(x + 3) = x^2 + 3x + 3x + 9 = x^2 + 6x + 9$. It is **not** $x^2 + 9$. With $x = 1$:
$(1+3)^2 = 16$, while $1 + 9 = 10$. The two "cross terms" $3x + 3x$ are exactly the two rectangles that are
missing if you only square the pieces. In general

$$(a + b)^2 = a^2 + 2ab + b^2,$$

and the false "$(a + b)^2 = a^2 + b^2$" has earned the nickname "the freshman's dream".
[Chapter 4](04-Polynomials-and-Factoring.md) collects this and other identities.

### Rules for powers

For whole-number exponents, the power rules follow from counting factors.

- $x^m \cdot x^n = x^{m+n}$: $m$ factors of $x$ followed by $n$ more make $m + n$ factors.
- $(x^m)^n = x^{mn}$: $n$ groups of $m$ factors each.
- $(xy)^n = x^n y^n$: rearrange $n$ copies of $xy$ (commutative and associative laws).
- $\dfrac{x^m}{x^n} = x^{m-n}$ when $m > n$ and $x \neq 0$: $n$ of the factors on top cancel the $n$ on the bottom.

The pattern does not extend to sums: $(x + y)^2 \neq x^2 + y^2$ and $x^2 + x^3 \neq x^5$. Powers distribute over
products, not over sums. [Chapter 7](07-Exponents-and-Logarithms.md) extends powers to zero, negative and fractional
exponents and explains why $x^0 = 1$.

**Example 7.** Simplify $\dfrac{(3a^2b)^3 \cdot a}{9a^4b^2}$, for $a, b \neq 0$.

The top is $27a^6b^3 \cdot a = 27a^7b^3$. Dividing, $\frac{27}{9} a^{7-4} b^{3-2} = 3a^3b$.

## 1.6 Substitution and formulas

To **substitute** is to replace each letter by a number and evaluate. Two habits prevent nearly all mistakes:
**put every substituted number in brackets**, and then follow the order of operations.

**Example 8.** Find $3x^2 - 2xy + y$ when $x = -2$ and $y = 5$.

$3(-2)^2 - 2(-2)(5) + (5) = 3(4) - (-20) + 5 = 12 + 20 + 5 = 37$.
Without brackets, "$3 \cdot -2^2$" invites the wrong value $-12$.

A **formula** is an equation that says how to compute one quantity from others. Formulas are algebra's most
practical product: they package a calculation once so anyone can repeat it.

**Example 9 (temperature).** Temperatures in degrees Fahrenheit $F$ and Celsius $C$ are linked by
$F = \frac{9}{5}C + 32$. On a warm Martian afternoon near the equator the ground can reach about $20$ degrees
Celsius, and on a winter night near the poles the air can fall to about $-125$ degrees Celsius. In Fahrenheit these
are $\frac{9}{5}(20) + 32 = 68$ and $\frac{9}{5}(-125) + 32 = -225 + 32 = -193$.

**Example 10 (weight).** The weight of an object, the force with which a planet pulls on it, is $W = mg$, where
$m$ is its mass in kilograms and $g$ is the planet's surface gravity. A 70 kg person weighs about
$70 \times 9.81 \approx 687$ newtons on Earth and $70 \times 3.71 \approx 260$ newtons on Mars, about $38\%$ as
much, since $3.71 / 9.81 \approx 0.378$. Their mass, 70 kg, is the same on both planets.

**Example 11 (falling).** A stone dropped from rest falls $d = \frac{1}{2}gt^2$ metres in $t$ seconds (ignoring
air). After 3 seconds on Earth, $d = \frac{1}{2}(9.81)(3)^2 = 44.145$ metres; on Mars,
$d = \frac{1}{2}(3.71)(9) = 16.695$ metres. Notice that the time is squared: three times as long means nine times
as far.

Formulas also let you check work by **units**. In Example 11, $g$ is in metres per second squared and $t^2$ in
seconds squared, so $gt^2$ is in metres, as a distance should be. If the units on the two sides of a formula do not
match, the formula is wrong.

### Try it in Python

A computer substitutes faster than we do, and it lets you test a claim on many values. This checks the trick of 1.1
on a thousand random numbers, including fractions (exact arithmetic, so no rounding):

```python
from fractions import Fraction
import random

def trick(n):
    return (2*n + 10) / 2 - n

tests = [Fraction(random.randint(-10**6, 10**6), random.randint(1, 1000)) for _ in range(1000)]
print(all(trick(n) == 5 for n in tests))   # True
```

A thousand successes is still not a proof; only the algebra of the next section is.

## 1.7 Proving the trick

*Level: intermediate.*

Here is the argument of 1.1 again, this time with the law that justifies each step. Let $n$ be any number.

$$
\begin{aligned}
\text{double it:}\quad & 2n \\
\text{add 10:}\quad & 2n + 10 \\
\text{halve it:}\quad & \tfrac{1}{2}(2n + 10) = \tfrac{1}{2}\cdot 2n + \tfrac{1}{2}\cdot 10 = n + 5 \quad\text{(distributive law)} \\
\text{take away the start:}\quad & (n + 5) - n = (n + (-n)) + 5 = 0 + 5 = 5 \quad\text{(commutative, associative, inverse, identity)}
\end{aligned}
$$

Every step uses only the laws of 1.3, which hold for every real number. So the result is 5 **for every number
$n$**, not just the ones in the table. This is what a **proof** is: a chain of steps, each justified by a rule
already accepted, that reaches the conclusion for every case at once.

Algebra also shows you how to **design** such tricks. If you add $k$ instead of 10, the answer is $\frac{k}{2}$;
if you then multiply by 4 instead of halving, the "$n$" no longer cancels ($4(2n + k) - n = 7n + 4k$), and the
trick fails. Seeing exactly why something works also tells you exactly when it would stop working.

### More proofs about all numbers

The same idea, name a general number with a letter and compute, proves many facts that patterns only suggest.

**Odd and even.** An **even** number is one of the form $2k$ for a whole number $k$; an **odd** number has the form
$2k + 1$. These are definitions, and they turn words into algebra.

*Claim: the sum of two odd numbers is even.* Take two odd numbers $2j + 1$ and $2k + 1$ (different letters,
because they need not be the same number). Their sum is $2j + 2k + 2 = 2(j + k + 1)$, which is 2 times a whole
number, so it is even. $\square$

*Claim: the product of two odd numbers is odd.* $(2j + 1)(2k + 1) = 4jk + 2j + 2k + 1 = 2(2jk + j + k) + 1$. $\square$

**Three in a row.** *Claim: the sum of any three consecutive whole numbers is divisible by 3.* Call the middle one
$n$; then the three are $n - 1$, $n$, $n + 1$, and their sum is $3n$. $\square$ Choosing to name the middle number
rather than the first made the algebra shorter: a small instance of the art of picking good letters.

**The 1089 trick.** Take a three-digit number whose first and last digits differ by at least 2, say $752$. Reverse
it ($257$) and subtract the smaller from the larger: $752 - 257 = 495$. Reverse the answer ($594$) and add:
$495 + 594 = 1089$. Try $831$: $831 - 138 = 693$, and $693 + 396 = 1089$ again.

*Proof.* A three-digit number with digits $a, b, c$ is $100a + 10b + c$. Suppose $a > c$ (otherwise swap the roles
of the two numbers). The difference is

$$(100a + 10b + c) - (100c + 10b + a) = 99(a - c).$$

Write $d = a - c$; then $2 \leq d \leq 9$, and $99d = 100(d - 1) + 10 \cdot 9 + (10 - d)$. (Check:
$100d - 100 + 90 + 10 - d = 99d$.) So the difference has digits $d - 1$, $9$, $10 - d$, each between 0 and 9. Its
reverse is $100(10 - d) + 90 + (d - 1)$, and adding the two:

$$100\big((d - 1) + (10 - d)\big) + 180 + \big((10 - d) + (d - 1)\big) = 100 \cdot 9 + 180 + 9 = 1089. \quad\square$$

The digit $b$ disappeared in the first subtraction and $d$ disappeared in the sum. You can also see why the digits
must differ by at least 2: if $d = 1$, the difference is $99$, a two-digit number, and the trick (read as 099 plus
990) needs care.

**One more than a product of four.** $1 \cdot 2 \cdot 3 \cdot 4 + 1 = 25 = 5^2$, $2 \cdot 3 \cdot 4 \cdot 5 + 1 = 121 = 11^2$,
$3 \cdot 4 \cdot 5 \cdot 6 + 1 = 361 = 19^2$. *Claim: one more than the product of four consecutive numbers is
always a perfect square.*

*Proof.* Pair the outer two and the inner two: $n(n + 3) = n^2 + 3n$ and $(n + 1)(n + 2) = n^2 + 3n + 2$. Write
$m = n^2 + 3n + 1$, the number halfway between them. Then the product is $(m - 1)(m + 1) = m^2 - 1$ (multiply out
to check), so the product plus one is $m^2 = (n^2 + 3n + 1)^2$. For $n = 3$, $m = 9 + 9 + 1 = 19$. ✓ $\square$

The step "write $m$ for the middle value" is a typical algebraic move: give a name to a piece that keeps appearing,
and the structure becomes visible.

### What a proof is not

A table of examples, however long, is not a proof, and some patterns that hold for a long time do fail. The
expression $n^2 + n + 41$ gives a prime number for $n = 0, 1, 2, \ldots, 39$, forty primes in a row; Euler noticed
it in 1772. But for $n = 40$ it gives $40^2 + 40 + 41 = 40 \cdot 41 + 41 = 41^2$, which is not prime. Algebra found
the failure as well: factor out 41. Examples suggest; only proofs settle.

## A short history thread

The word **algebra** comes from the title of al-Khwarizmi's book, written in Baghdad around 820 CE: *al-Kitab
al-mukhtasar fi hisab al-jabr wal-muqabala* ("The compendious book on calculation by restoring and balancing").
*Al-jabr*, "restoring", was the move of taking a subtracted quantity to the other side of an equation, where it
becomes added. When the book was translated into Latin in the twelfth century, *al-jabr* became *algebra*. (His own
name, Latinised, became the word *algorithm*.)

Al-Khwarizmi's algebra was entirely **rhetorical**: written in words. Diophantus's *Arithmetica*, centuries
earlier, was **syncopated**: words with abbreviations for the unknown and its powers. **Symbolic** algebra, in which
letters stand for both unknown and known quantities and are manipulated by rules, arrived in Europe between Viète
(1591) and Descartes (1637). The laws of 1.3 were used for millennia before anyone listed them; the names
"commutative" and "distributive" were introduced in 1814 by the French mathematician François-Joseph Servois, and
the idea of studying the laws for their own sake, which leads to the abstract algebra of Part IV of this book,
belongs to the nineteenth century.

## Check yourself

??? question "1. In $5x^3 - x + \frac{2}{3} - 7x^2y$, list the terms, their coefficients and their degrees."

    Terms: $5x^3$ (coefficient 5, degree 3), $-x$ (coefficient $-1$, degree 1), $\frac{2}{3}$ (a constant term,
    degree 0), $-7x^2y$ (coefficient $-7$, degree 3, from two $x$'s and one $y$).

??? question "2. Evaluate $10 - 4 \div 2 \times 3^2 + (1 - 4)^2$."

    Brackets: $1 - 4 = -3$. Powers: $3^2 = 9$ and $(-3)^2 = 9$. Multiplication and division left to right:
    $4 \div 2 = 2$, then $2 \times 9 = 18$. So $10 - 18 + 9 = 1$.

??? question "3. Simplify $3(2a - b) - 2(a - 4b) + a$."

    $6a - 3b - 2a + 8b + a = 5a + 5b$. Check with $a = 1, b = 1$: $3(1) - 2(-3) + 1 = 3 + 6 + 1 = 10$, and
    $5 + 5 = 10$. ✓

??? question "4. Expand and simplify $(3x - 2)(2x + 5) - (x - 1)^2$."

    $(3x - 2)(2x + 5) = 6x^2 + 15x - 4x - 10 = 6x^2 + 11x - 10$. $(x - 1)^2 = x^2 - 2x + 1$. The difference is
    $6x^2 + 11x - 10 - x^2 + 2x - 1 = 5x^2 + 13x - 11$. Check with $x = 1$: $(1)(7) - 0 = 7$, and
    $5 + 13 - 11 = 7$. ✓

??? question "5. Find $a^2 - 3ab + 2b^2$ when $a = -1$ and $b = -3$."

    $(-1)^2 - 3(-1)(-3) + 2(-3)^2 = 1 - 9 + 18 = 10$.

??? question "6. Which of these are identities (true for every $x$)? (a) $2(x + 3) = 2x + 6$; (b) $(x + 2)^2 = x^2 + 4$; (c) $x - (3 - x) = 2x - 3$; (d) $\frac{x + 4}{2} = x + 2$."

    (a) Yes, by the distributive law. (b) No: the left side is $x^2 + 4x + 4$; they agree only when $x = 0$.
    (c) Yes: $x - 3 + x = 2x - 3$. (d) No: $\frac{x + 4}{2} = \frac{x}{2} + 2$; try $x = 2$: $3 \neq 4$. To show
    a statement is *not* an identity, one counterexample is enough.

??? question "7. Using only the laws of 1.3 and Facts 1 to 3, prove that $(-a)b = -(ab)$."

    $(-a)b = ((-1)a)b = (-1)(ab) = -(ab)$, using Fact 2 twice and the associative law in the middle.

??? question "8. Prove that the sum of five consecutive whole numbers is always divisible by 5."

    Name the middle one $n$: the numbers are $n - 2, n - 1, n, n + 1, n + 2$, and the sum is $5n$.

??? question "9. A trick: think of a number, add 3, multiply by 4, subtract 8, divide by 4, subtract your number. Prove the answer is always the same, and find it."

    $n \to n + 3 \to 4n + 12 \to 4n + 4 \to n + 1 \to 1$. The answer is always 1.

??? question "10. Prove that the square of every odd number is one more than a multiple of 8."

    An odd number is $2k + 1$, and $(2k + 1)^2 = 4k^2 + 4k + 1 = 4k(k + 1) + 1$. Of the two consecutive numbers
    $k$ and $k + 1$, one is even, so $k(k + 1) = 2j$ for some whole number $j$, and $4k(k+1) = 8j$. So the square is
    $8j + 1$. (Check: $3^2 = 9 = 8 + 1$, $5^2 = 25 = 24 + 1$, $7^2 = 49 = 48 + 1$.)

??? question "11. Show that $(a + b)(a - b) = a^2 - b^2$ and use it to compute $103 \times 97$ in your head."

    $(a + b)(a - b) = a^2 - ab + ba - b^2 = a^2 - b^2$, since $ab = ba$. Then
    $103 \times 97 = (100 + 3)(100 - 3) = 10000 - 9 = 9991$.

??? question "12. Why does the 1089 trick need the first and last digits to differ by at least 2? What happens with 554?"

    With $d = a - c = 1$ the difference is $99$, which has only two digits. For 554: $554 - 455 = 99$. Read as 99,
    its reverse is 99, and $99 + 99 = 198$. If you insist on three digits, $099 + 990 = 1089$ still works, because
    the proof's digit formula $d - 1, 9, 10 - d$ gives $0, 9, 9$.

## What you learned

- A letter lets you calculate with a number you have not chosen, so one calculation covers every number at once.
- Letters act as variables, unknowns or parameters; the sentence around them says which.
- Expressions are built from terms (added) and factors (multiplied); only like terms combine.
- Five laws (commutative, associative, identity, inverse, distributive) govern all of algebra; rules such as
  "negative times negative is positive" and "if $ab = 0$ then $a = 0$ or $b = 0$" are consequences of them.
- The order of operations is a convention chosen so that sums of terms need no brackets; when in doubt, add
  brackets.
- Expanding uses the distributive law: every term multiplies every term, and $(a + b)^2 = a^2 + 2ab + b^2$.
- A proof covers every case at once; a table of examples never does.

**Next:** [Chapter 2](02-Equations-and-Inequalities.md), how to find the unknown that makes an equation or an
inequality true, and why the methods are safe.

## Further reading

- I. M. Gelfand and A. Shen, *Algebra*, Birkhäuser, 1993. A short, deep book for able teenagers by a great
  mathematician; its first chapters cover this one and Chapter 4.
- Leonhard Euler, *Elements of Algebra* (1770; English translation 1822). Still readable, and starts from nothing.
- Richard Rusczyk, *Introduction to Algebra*, Art of Problem Solving. Many problems at this level and beyond.
- Florian Cajori, *A History of Mathematical Notations*, 1928-1929. Where every symbol in this chapter came from.
- Victor J. Katz, *A History of Mathematics: An Introduction*, 3rd edition, 2009.
- On this site: the Topics lessons [Substitution](../../topics/algebra/level-4/02-substitution.md),
  [The trick explained](../../topics/algebra/level-4/07-trick-explained.md),
  [Formulas in words](../../topics/algebra/level-3/05-formulas-in-words.md) and
  [Exponent laws](../../topics/algebra/level-6/01-exponent-laws.md); and, for the laws as axioms of the real
  numbers, the U of T guide [MAT158H1 Unit 2: Real Numbers and Least Upper Bounds](../../uoft/MAT158H1/unit02.md).
