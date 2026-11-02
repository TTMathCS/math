---
title: "Recursive sequences"
---

# Recursive sequences

*Patterns and sequences · level 6, lesson 5 of 6*

## A question to start

The story goes that in a temple there are three tall pegs and 64 golden discs, all of different sizes, stacked on
the first peg with the biggest at the bottom. The priests move the discs one at a time to another peg, never putting
a bigger disc on a smaller one. When the whole tower has moved, the story says, the world will end.

The puzzle (called the **Tower of Hanoi**, and invented as a toy in the 1880s) can be played with any number of
discs. One disc takes 1 move. Two discs take 3. Three discs take 7. How many moves for 64 discs, if every move is
made perfectly? The best way to answer is to describe each case using the case **before** it. That is a recursive
rule, the subject of this lesson. (Answer in worked example 3.)

## The idea

### A rule that uses the term before

You met recursive rules in level 4: a **recursive** rule makes each term out of earlier terms. It needs two parts:

1. a **starting value**, such as $t_1 = 2$;
2. a **recurrence**, a rule that gives each term from the ones before it, such as $t_n = 3t_{n-1} - 1$.

Read $t_n = 3t_{n-1} - 1$ as: "to get any term, take the term before it, multiply by 3, and subtract 1". The little
$n - 1$ means "the position just before $n$". (In level 4 the same idea was written $t_{n+1} = t_n + 3$, "the next term
is this term plus 3". Both ways of writing it say the same thing.)

You can think of the recurrence as a machine whose output is fed straight back in:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 130" role="img" aria-label="A machine box labelled times 3 then minus 1; the start value 2 goes in, each output comes out and is fed back in as the next input">
  <rect x="115" y="35" width="100" height="44" rx="6" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="165" y="62" font-size="13" text-anchor="middle" fill="currentColor">× 3, then − 1</text>
  <line x1="30" y1="57" x2="110" y2="57" stroke="currentColor" stroke-width="2"/>
  <polygon points="115,57 105,52 105,62" fill="currentColor"/>
  <text x="45" y="50" font-size="12" text-anchor="middle" fill="currentColor">start: 2</text>
  <line x1="215" y1="57" x2="285" y2="57" stroke="currentColor" stroke-width="2"/>
  <polygon points="290,57 280,52 280,62" fill="currentColor"/>
  <text x="255" y="50" font-size="12" text-anchor="middle" fill="currentColor">out</text>
  <path d="M 250 57 L 250 105 L 80 105 L 80 62" fill="none" stroke="#eea66f" stroke-width="2"/>
  <polygon points="80,57 75,67 85,67" fill="#eea66f"/>
  <text x="165" y="122" font-size="12" text-anchor="middle" fill="currentColor">each output goes back in: 2, 5, 14, 41, 122, ...</text>
</svg>
</div>

### Computing terms in a table

The only way to use a recursive rule directly is step by step. A table keeps it tidy:

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- |
| $t_n$ | 2 | $3 \times 2 - 1 = 5$ | $3 \times 5 - 1 = 14$ | 41 | 122 | 365 |

A **spreadsheet** is perfect for this. Type the start in cell A1 (here 2), and in cell A2 type the formula
`=3*A1-1`. Then copy A2 down the column. Each cell now looks at the cell above it, exactly like the recurrence, and
the spreadsheet fills in hundreds of terms instantly. Changing the start value in A1 changes the whole column. This
is how recursive rules are used in practice, for loans, populations and medicines.

### Arithmetic and geometric sequences are recursive too

The two families from levels 5 and 6 have very simple recurrences:

- arithmetic: $t_n = t_{n-1} + d$ (add the same each time);
- geometric: $t_n = r\,t_{n-1}$ (multiply by the same each time).

The rule $t_n = 3t_{n-1} - 1$ does **both**: it multiplies, then adds. Rules of the form $t_n = r\,t_{n-1} + c$ are
the next simplest kind, and they appear everywhere. They are neither arithmetic nor geometric, yet they hide a
geometric sequence inside, as you will see.

### Where does it settle? The fixed point

Ask: is there a number the machine leaves **unchanged**? For "× 3, then − 1", we want $x = 3x - 1$, which gives
$x = \tfrac12$. Put in $\tfrac12$ and you get $\tfrac32 - 1 = \tfrac12$ back. Such a number is called a **fixed point**.

Now look at how far each term is from the fixed point:

| $t_n$ | 2 | 5 | 14 | 41 |
| --- | --- | --- | --- | --- |
| $t_n - \tfrac12$ | 1.5 | 4.5 | 13.5 | 40.5 |

The distances are **multiplied by 3** each time: a geometric sequence! Here is why. Subtract the two equations
$t_n = 3t_{n-1} - 1$ and $\tfrac12 = 3 \times \tfrac12 - 1$:

$$t_n - \tfrac12 = 3\left(t_{n-1} - \tfrac12\right).$$

The "$-1$" cancels, leaving pure multiplication. So $t_n - \tfrac12 = 1.5 \times 3^{n-1}$, and with a little tidying,

$$t_n = \frac{3^n + 1}{2}.$$

Check: $t_4 = \dfrac{81 + 1}{2} = 41$. ✓ This turns the recursive rule into a **position rule**, so $t_{20}$ no longer
needs nineteen steps.

The same idea tells you what happens in the long run. For $t_n = r\,t_{n-1} + c$, the distance from the fixed point
is multiplied by $r$ each step:

- if $r$ is **between −1 and 1**, the distance shrinks towards 0 and the terms **settle down** on the fixed point;
- if $r$ is bigger than 1 (or less than −1), the distance grows and the terms **run away** from it.

### Rules that use two earlier terms

Some recurrences look back two steps. The most famous is Fibonacci's (you met it in
[level 3](../level-3/04-fibonacci-sequence.md)):

$$F_1 = 1, \quad F_2 = 1, \qquad F_n = F_{n-1} + F_{n-2}.$$

A rule that looks back two steps needs **two** starting values. With the same recurrence but different starts you get
a different sequence: starting 2, 1 gives the **Lucas numbers** 2, 1, 3, 4, 7, 11, 18, 29, ... In a spreadsheet, type
the two starts in A1 and A2, put `=A2+A1` in A3, and copy down.

## Worked examples

**1. A medicine model (made-up numbers).** A patient takes 100 mg of a medicine each morning. By the next morning the
body has removed half of what was there. Let $t_n$ be the amount just after the $n$th dose: $t_1 = 100$ and
$t_n = 0.5\,t_{n-1} + 100$.

- Terms: 100, 150, 175, 187.5, 193.75, 196.875, ...
- Fixed point: $x = 0.5x + 100$ gives $0.5x = 100$, $x = 200$.
- Distance from 200: 100, 50, 25, 12.5, ...: halving, because $r = 0.5$. So $t_n = 200 - 100 \times 0.5^{n-1}$, and
  the amount **settles** just under 200 mg. This is why doctors talk about a medicine "building up" to a steady level.

**2. Running away.** $t_1 = 1$, $t_n = 2t_{n-1} + 3$: terms 1, 5, 13, 29, 61, ...

Fixed point: $x = 2x + 3$ gives $x = -3$. Distances from $-3$: 4, 8, 16, 32, 64: doubling. So $t_n + 3 = 4 \times 2^{n-1} = 2^{n+1}$,
and $t_n = 2^{n+1} - 3$. Check: $t_3 = 16 - 3 = 13$. ✓ Here $r = 2$, so the terms run away.

**3. The Tower of Hanoi.** To move a tower of $n$ discs: first move the top $n - 1$ discs out of the way (onto the
spare peg), then move the biggest disc, then move the $n - 1$ discs back on top of it. So with $h_n$ moves for $n$
discs,

$$h_1 = 1, \qquad h_n = 2h_{n-1} + 1.$$

Terms: 1, 3, 7, 15, 31, 63, ... Fixed point $x = 2x + 1$ gives $x = -1$; distances from $-1$ are 2, 4, 8, 16, ...,
so $h_n + 1 = 2^n$ and $h_n = 2^n - 1$. For 64 discs: $2^{64} - 1 \approx 1.8 \times 10^{19}$ moves, the same number
as the rice on the chessboard. At one move per second, that is about **585 billion years**, more than forty times the
present age of the universe. The world is safe.

**4. Two starting values.** $t_1 = 1$, $t_2 = 1$, $t_n = t_{n-1} + 2t_{n-2}$.

$t_3 = 1 + 2 \times 1 = 3$, $t_4 = 3 + 2 \times 1 = 5$, $t_5 = 5 + 2 \times 3 = 11$, $t_6 = 11 + 10 = 21$,
$t_7 = 21 + 22 = 43$, $t_8 = 43 + 42 = 85$.

## Try it

1. $t_1 = 5$, $t_n = t_{n-1} + 4$. Write the first five terms and a position rule.
2. $t_1 = 3$, $t_n = 2t_{n-1}$. Write the first five terms and a position rule.
3. $t_1 = 64$, $t_n = \tfrac12 t_{n-1} + 8$. Write the first six terms. Find the fixed point. Does the sequence settle
   or run away?
4. $t_1 = 1$, $t_n = t_{n-1} + n$. Write the first six terms. What are they?
5. Write the spreadsheet formulas (cell by cell) for $t_1 = 10$, $t_n = 1.05\,t_{n-1} - 2$.
6. How many moves does the Tower of Hanoi take with 10 discs? Check your rule by working out $h_4$ step by step from
   the recurrence.
7. For $t_n = 3t_{n-1} - 1$, which start value $t_1$ gives a sequence that never changes? What happens if
   $t_1 = 0$?
8. $t_1 = 1$, $t_n = \dfrac{1}{t_{n-1}} + 1$. Write the first six terms as fractions. What do you notice about the
   tops and bottoms?

??? note "Answers"
    1. 5, 9, 13, 17, 21. Arithmetic with $d = 4$: $t_n = 5 + 4(n - 1) = 4n + 1$.
    2. 3, 6, 12, 24, 48. Geometric with $r = 2$: $t_n = 3 \times 2^{n-1}$.
    3. 64, 40, 28, 22, 19, 17.5. Fixed point: $x = \tfrac12 x + 8$ gives $x = 16$. Distances from 16 are 48, 24, 12,
       6, 3, 1.5: halving, so the sequence **settles** towards 16.
    4. 1, 3, 6, 10, 15, 21: the triangular numbers. (Each one adds the next whole number.)
    5. A1: `10`. A2: `=1.05*A1-2`, then copy A2 down. (Fixed point: $x = 1.05x - 2$ gives $x = 40$. Since $10 < 40$
       and $r > 1$, the terms run away downwards: 10, 8.5, 6.925, ... and eventually go negative.)
    6. $h_{10} = 2^{10} - 1 = 1023$ moves. Step by step: $h_1 = 1$, $h_2 = 3$, $h_3 = 7$, $h_4 = 2 \times 7 + 1 = 15 = 2^4 - 1$. ✓
    7. The fixed point $t_1 = \tfrac12$: then every term is $\tfrac12$. With $t_1 = 0$: 0, −1, −4, −13, −40, ...
       The distance from $\tfrac12$ triples each time, so the terms run away, this time downwards.
    8. 1, 2, $\tfrac32$, $\tfrac53$, $\tfrac85$, $\tfrac{13}{8}$. The tops and bottoms are Fibonacci numbers: each
       term is $\dfrac{F_{n+1}}{F_n}$. As decimals: 1, 2, 1.5, 1.667, 1.6, 1.625, closing in on about 1.618, the
       **golden ratio**, which is the fixed point of this rule. Level 7 explains why.

## Common mistake

**Forgetting the starting value.** "$t_n = 3t_{n-1} - 1$" alone does not decide a sequence: start at 2 and you get
2, 5, 14, ...; start at 1 and you get 1, 2, 5, ...; start at $\tfrac12$ and nothing moves. Always give the start.
A two-step rule needs two starts.

**Using the wrong earlier term.** In $t_n = t_{n-1} + 2t_{n-2}$, the 2 multiplies the term **two** back, not the term
just before. Writing the table with the position numbers above the terms helps.

## Where it leads

- Previous: [Adding a geometric sequence](04-geometric-sums.md) · Next:
  [Arithmetic or geometric in the world](06-choosing-model.md).
- [Level 6 page](index.md) · [Patterns topic page](../index.md)
- The first recursive rules: [Two kinds of rule](../level-4/01-two-kinds-rule.md) in level 4.
- Fibonacci ratios and the golden ratio: [Level 7](../level-7/index.md). Repeating a rule and watching where it
  settles (fixed points, cobweb diagrams) returns in level 8.
- On the U of T shelf, sequences and their limits with full proofs: [MAT137 Unit 11](../../../uoft/MAT137/unit11.md).
