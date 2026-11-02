---
title: "Order of operations"
---

# Order of operations

*Numbers · level 4, lesson 7 of 7*

## A question to start

What is $2 + 3 \times 4$?

Ask a room of people and you will hear two answers. Some say **20**: "2 plus 3 is 5, times 4 is 20." Others say
**14**: "3 times 4 is 12, plus 2 is 14." Both did correct arithmetic. They just did it in a different **order**.

A calculation that means different things to different people is useless: imagine a recipe, a bank, or a rocket
engineer getting it wrong. So mathematicians all over the world use one agreement about the order. With it,
$2 + 3 \times 4 = 14$, always. This lesson is about that agreement, and why it was chosen this way.

## The idea

### A convention, not a law of nature

Some things in mathematics are **true** whatever anyone decides: $3 \times 4$ is 12 no matter what. Other things are
**conventions**: agreements, like driving on the right side of the road in Canada, or reading a page from left to
right. A convention could have been chosen differently, but it is very important that **everyone uses the same one**.

The order of operations is a convention. But it is not a random one: there are good reasons behind each part.

### The agreed order

Work out a calculation in this order:

1. **Brackets** first: whatever is inside ( ) is worked out before anything else. Brackets say "do me first".
2. **Exponents** (powers) next. $5^2$ means $5 \times 5 = 25$, and $2^3$ means $2 \times 2 \times 2 = 8$. The small
   raised number says how many copies to multiply. (Much more about powers in [Level 5](../level-5/index.md).)
3. **Division and Multiplication**, working from **left to right**.
4. **Addition and Subtraction**, working from **left to right**.

In Canada this is often remembered as **BEDMAS** (Brackets, Exponents, Division, Multiplication, Addition,
Subtraction). Other countries say PEMDAS (Parentheses ...) or BODMAS (Brackets, Orders ...). They all mean the same
order.

**Careful:** the word BEDMAS makes it look as if division always comes before multiplication, and addition before
subtraction. It does not. D and M are **equal partners**, done together from left to right. A and S are also equal
partners, done together from left to right. A better picture is four steps, not six:

| Step | What | How |
| --- | --- | --- |
| 1 | Brackets | inside first (innermost brackets first) |
| 2 | Exponents | powers |
| 3 | × and ÷ | together, left to right |
| 4 | + and − | together, left to right |

### Why multiplication before addition?

Think about what $2 + 3 \times 4$ is usually describing. You buy a 2-dollar pen and 3 books at 4 dollars each. The
cost is "2, plus 3 lots of 4". The "3 lots of 4" belongs together: it is one amount, 12 dollars. So the total is
$2 + 12 = 14$.

Multiplication is a shortcut for repeated addition: $3 \times 4$ is short for $4 + 4 + 4$. So
$2 + 3 \times 4 = 2 + 4 + 4 + 4 = 14$. Doing the multiplication first respects what it stands for. That is why
multiplication "holds on tighter" than addition, and powers (repeated multiplication) hold on tighter still.

A picture helps. Every calculation has a shape, like a tree. The operation done **last** sits at the top:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 160" role="img" aria-label="Two calculation trees. Left: 2 plus (3 times 4), the plus is at the top and the answer is 14. Right: (2 plus 3) times 4, the times is at the top and the answer is 20">
  <g stroke="currentColor" stroke-width="1.5">
    <line x1="100" y1="25" x2="60" y2="70"/><line x1="100" y1="25" x2="140" y2="70"/>
    <line x1="140" y1="70" x2="110" y2="115"/><line x1="140" y1="70" x2="170" y2="115"/>
    <line x1="300" y1="25" x2="260" y2="70"/><line x1="300" y1="25" x2="340" y2="70"/>
    <line x1="260" y1="70" x2="230" y2="115"/><line x1="260" y1="70" x2="290" y2="115"/>
  </g>
  <g stroke="currentColor" stroke-width="1">
    <circle cx="100" cy="25" r="14" fill="#eea66f"/><circle cx="140" cy="70" r="14" fill="#9cc9ea"/>
    <circle cx="60" cy="70" r="14" fill="#7ccf9a"/><circle cx="110" cy="115" r="14" fill="#7ccf9a"/><circle cx="170" cy="115" r="14" fill="#7ccf9a"/>
    <circle cx="300" cy="25" r="14" fill="#9cc9ea"/><circle cx="260" cy="70" r="14" fill="#eea66f"/>
    <circle cx="340" cy="70" r="14" fill="#7ccf9a"/><circle cx="230" cy="115" r="14" fill="#7ccf9a"/><circle cx="290" cy="115" r="14" fill="#7ccf9a"/>
  </g>
  <g font-size="14" text-anchor="middle" fill="currentColor">
    <text x="100" y="30">+</text><text x="140" y="75">×</text><text x="60" y="75">2</text><text x="110" y="120">3</text><text x="170" y="120">4</text>
    <text x="300" y="30">×</text><text x="260" y="75">+</text><text x="340" y="75">4</text><text x="230" y="120">2</text><text x="290" y="120">3</text>
  </g>
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <text x="115" y="150">2 + 3 × 4 = 14</text><text x="285" y="150">(2 + 3) × 4 = 20</text>
  </g>
</svg>
</div>

You always work from the bottom of the tree up. Without brackets, the agreement builds the left tree. If you want the
right tree, you **must** write brackets: $(2 + 3) \times 4 = 20$. That is the job of brackets: they let you override
the normal order.

### Why left to right for × and ÷?

What is $6 \div 2 \times 3$?

- Left to right: $6 \div 2 = 3$, then $3 \times 3 = 9$.
- If you did the × first: $2 \times 3 = 6$, then $6 \div 6 = 1$.

The agreement says **9**. Here is a reason it is the sensible choice. In lesson 3 of this level you saw that dividing by 2 is
the same as multiplying by $\tfrac12$. So

$$6 \div 2 \times 3 = 6 \times \tfrac12 \times 3$$

Now it is all multiplication, and multiplication can be done in any order: $6 \times \tfrac12 \times 3 = 9$ whichever
two you multiply first. The answer 9 is the one that keeps the meaning "divide 6 by 2". Doing $2 \times 3$ first
would secretly change the question to $6 \div (2 \times 3)$.

The same goes for subtraction. $10 - 4 + 3$: left to right gives $6 + 3 = 9$. And subtracting 4 is adding −4
(last lesson), so it is $10 + (-4) + 3 = 9$, in any order. Doing $4 + 3$ first would give $10 - 7 = 3$, which
secretly changes the question to $10 - (4 + 3)$.

### Hidden brackets: the fraction bar

A fraction bar groups everything above it and everything below it, like invisible brackets:

$$\frac{8 + 4}{2 + 1} = \frac{12}{3} = 4$$

It means $(8 + 4) \div (2 + 1)$, not $8 + 4 \div 2 + 1$ (which is $8 + 2 + 1 = 11$). When you type a fraction into a
calculator on one line, you must type the brackets yourself.

### Nested brackets

When brackets are inside brackets, work from the **innermost** outwards:

$$3 \times (4 + 2 \times (5 - 1)) = 3 \times (4 + 2 \times 4) = 3 \times (4 + 8) = 3 \times 12 = 36$$

Inside each bracket, the usual order applies: in $(4 + 2 \times 4)$, the multiplication comes before the addition.

### Checking with a calculator

A scientific calculator (and the calculator on most phones, turned sideways) follows the order of operations: type
`2 + 3 × 4 =` and it shows 14. But some very simple calculators work out each step as soon as you press the next key,
and show 20. Test yours with $2 + 3 \times 4$ before you trust it.

The safest habit: **when in doubt, add brackets**. Extra brackets never change a correct answer, and they make your
meaning clear to everyone. You may have seen puzzles online like $6 \div 2(1 + 2)$ that start big arguments; they
are written badly on purpose. With a clear sign, $6 \div 2 \times (1 + 2) = 9$ by the agreement, but a careful writer
would avoid the doubt with brackets: $(6 \div 2) \times (1 + 2)$ or $6 \div (2 \times (1 + 2))$.

## Worked examples

**1.** $20 - (3 + 2) \times 3$. Brackets: $3 + 2 = 5$. Then ×: $5 \times 3 = 15$. Then −: $20 - 15 = 5$.

**2.** $5 + 2^3 \times 2$. Exponent: $2^3 = 8$. Then ×: $8 \times 2 = 16$. Then +: $5 + 16 = 21$.

**3.** $18 \div 3 \times 2 - 4$. × and ÷ left to right: $18 \div 3 = 6$, $6 \times 2 = 12$. Then $12 - 4 = 8$.

**4.** $48 \div (2 \times (9 - 3))$. Innermost: $9 - 3 = 6$. Then $2 \times 6 = 12$. Then $48 \div 12 = 4$.

**5.** $100 - 5^2 \times 3$. Exponent: $5^2 = 25$. Then $25 \times 3 = 75$. Then $100 - 75 = 25$.

**6. Where do the brackets go?** Put brackets into $12 - 2 \times 3 + 1$ to make the answer 40.

Without brackets: $12 - 6 + 1 = 7$. Try $(12 - 2) \times (3 + 1) = 10 \times 4 = 40$. ✓

## Try it

1. $7 + 6 \times 5$.
2. $(7 + 6) \times 5$.
3. $36 \div 6 \times 3$ and $36 \div (6 \times 3)$.
4. $15 - 6 + 4$ and $15 - (6 + 4)$.
5. $2 \times (3 + 4)^2 - 10$.
6. $\dfrac{30 - 6}{2 \times 4}$. Then write it on one line, with brackets, as you would type it into a calculator.
7. Put brackets into $8 + 4 \times 3 - 1$ to make (a) 35 (b) 16.
8. Harder: Using each of 2, 3, 4 and 5 once, with any operations and brackets, make 1, then make 50.

??? note "Answers"
    1. × first: $6 \times 5 = 30$, then $7 + 30 = 37$.
    2. Brackets first: $13 \times 5 = 65$.
    3. Left to right: $36 \div 6 = 6$, $6 \times 3 = 18$. With brackets: $36 \div 18 = 2$.
    4. Left to right: $15 - 6 = 9$, $9 + 4 = 13$. With brackets: $15 - 10 = 5$.
    5. Bracket: $3 + 4 = 7$. Exponent: $7^2 = 49$. ×: $2 \times 49 = 98$. −: $98 - 10 = 88$.
    6. Top: $30 - 6 = 24$. Bottom: $2 \times 4 = 8$. $24 \div 8 = 3$. On one line: `(30 - 6) / (2 * 4)`, or
       $(30 - 6) \div (2 \times 4)$. Without the brackets a calculator would do
       $30 - 6 \div 2 \times 4 = 30 - 12 = 18$.
    7. (a) $(8 + 4) \times 3 - 1 = 12 \times 3 - 1 = 36 - 1 = 35$. ✓
       (b) $8 + 4 \times (3 - 1) = 8 + 4 \times 2 = 8 + 8 = 16$. ✓
    8. Many answers work. For 1: $(5 - 4) \times (3 - 2) = 1 \times 1 = 1$. For 50:
       $(4 + 3 \times 2) \times 5 = (4 + 6) \times 5 = 50$. Each number is used exactly once in each.

## Common mistake

**Reading BEDMAS as six separate steps.** In $12 - 4 + 2$, people who think "A before S" do $4 + 2 = 6$ first and get
6. The right answer is $12 - 4 = 8$, then $8 + 2 = 10$. Addition and subtraction are partners, done left to right.
The same goes for multiplication and division: $6 \div 2 \times 3 = 9$, not 1.

**Typing a fraction without brackets.** $\tfrac{30 - 6}{2 \times 4}$ is $(30 - 6) \div (2 \times 4)$. Typed as
`30 - 6 / 2 * 4`, a calculator gives 18 instead of 3.

## Where it leads

- Previous: [Negative numbers](06-negative-numbers.md).
- Next level: [Level 5: integers, powers and roots](../level-5/index.md), where exponents get a lesson of their own.
- [Level 4 page](index.md) · [Numbers topic page](../index.md)
- Every formula in [Algebra](../../algebra/index.md) depends on this agreement: $3x^2 + 1$ means "square $x$, times 3,
  then add 1". Computer languages and spreadsheets use the same order.
