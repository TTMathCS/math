---
title: "Two kinds of rule"
---

# Two kinds of rule

*Patterns and sequences · level 4, lesson 1 of 6*

## A question to start

Two friends describe the same list of numbers, 5, 8, 11, 14, 17, ...

- Ana says: "Start at 5. Then keep adding 3."
- Ben says: "Take the position, multiply it by 3, and add 2."

They both work. Check Ben's on the 4th number: $4 \times 3 + 2 = 14$. ✓ But they are clearly **different kinds** of
rule. Ask each of them for the 1000th number. Ana needs 999 additions. Ben needs one multiplication and one addition:
3002. And ask each of them, "Is 400 in the list?" Who can answer faster, and how?

## The idea

### Names for the parts

To talk about any position, not just the 4th or the 10th, we use a letter. The usual one is $n$, for "number of the
position". The term in position $n$ is written $t_n$, read "t sub n" or "t n". The small $n$ is the position; $t_n$
is the term that lives there.

| $n$ (position) | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| $t_n$ (term) | 5 | 8 | 11 | 14 | 17 |

So $t_1 = 5$, $t_3 = 11$, $t_5 = 17$. If we write $t_{10}$ we mean "the 10th term", whatever it turns out to be.

### Rule 1: the next-term rule (recursive)

Ana's rule tells you how to get from **one term to the next**. Written with symbols:

$$t_1 = 5, \qquad t_{n+1} = t_n + 3$$

Read the second part as: "the term after $t_n$ is $t_n$ plus 3". A rule that makes each term out of earlier terms is
called **recursive** (from a Latin word for "running back"), because to use it you keep running back to the term
before.

A recursive rule needs **two** pieces: a starting value and a step. "Add 3" on its own does not decide the
sequence: 5, 8, 11, ... and 1, 4, 7, ... and 100, 103, 106, ... all follow it. The start pins down which one we mean.

### Rule 2: the position rule (explicit)

Ben's rule tells you the term **straight from its position**:

$$t_n = 3n + 2$$

$3n$ means $3 \times n$. Put in a position, get out the term. A rule like this is called **explicit**, because it
spells out the answer directly, with no running back.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 165" role="img" aria-label="Top: boxes 5, 8, 11, 14 joined by arrows labelled plus 3. Bottom: a machine that takes the position n, multiplies by 3, adds 2 and gives 3n plus 2">
  <rect x="20" y="15" width="44" height="34" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <text x="42" y="38" font-size="15" text-anchor="middle" fill="currentColor">5</text>
  <line x1="68" y1="32" x2="108" y2="32" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="111,32 104,28 104,36" fill="currentColor"/>
  <text x="88" y="25" font-size="12" text-anchor="middle" fill="currentColor">+3</text>
  <rect x="115" y="15" width="44" height="34" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <text x="137" y="38" font-size="15" text-anchor="middle" fill="currentColor">8</text>
  <line x1="163" y1="32" x2="203" y2="32" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="206,32 199,28 199,36" fill="currentColor"/>
  <text x="183" y="25" font-size="12" text-anchor="middle" fill="currentColor">+3</text>
  <rect x="210" y="15" width="44" height="34" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <text x="232" y="38" font-size="15" text-anchor="middle" fill="currentColor">11</text>
  <line x1="258" y1="32" x2="298" y2="32" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="301,32 294,28 294,36" fill="currentColor"/>
  <text x="278" y="25" font-size="12" text-anchor="middle" fill="currentColor">+3</text>
  <rect x="305" y="15" width="44" height="34" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <text x="327" y="38" font-size="15" text-anchor="middle" fill="currentColor">14</text>
  <text x="400" y="38" font-size="16" text-anchor="middle" fill="currentColor">...</text>
  <text x="10" y="72" font-size="12" text-anchor="start" fill="currentColor">next-term rule: start at 5, then add 3 each time</text>
  <rect x="20" y="95" width="44" height="34" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <text x="42" y="118" font-size="15" text-anchor="middle" fill="currentColor">n</text>
  <line x1="68" y1="112" x2="108" y2="112" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="111,112 104,108 104,116" fill="currentColor"/>
  <rect x="115" y="95" width="60" height="34" fill="#9cc9ea" fill-opacity="0.4" stroke="currentColor" stroke-width="1.5"/>
  <text x="145" y="118" font-size="14" text-anchor="middle" fill="currentColor">× 3</text>
  <line x1="179" y1="112" x2="219" y2="112" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="222,112 215,108 215,116" fill="currentColor"/>
  <rect x="226" y="95" width="60" height="34" fill="#9cc9ea" fill-opacity="0.4" stroke="currentColor" stroke-width="1.5"/>
  <text x="256" y="118" font-size="14" text-anchor="middle" fill="currentColor">+ 2</text>
  <line x1="290" y1="112" x2="330" y2="112" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="333,112 326,108 326,116" fill="currentColor"/>
  <rect x="337" y="95" width="62" height="34" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <text x="368" y="118" font-size="13" text-anchor="middle" fill="currentColor">3n + 2</text>
  <text x="10" y="152" font-size="12" text-anchor="start" fill="currentColor">position rule: put in the position n, get out the term</text>
</svg>
</div>

### Why the two rules agree

Are we sure Ben's rule gives the same numbers as Ana's for **every** position, not just the five we checked? Use the
jumps from level 3. To reach position $n$, Ana starts at 5 and makes $n - 1$ jumps of 3:

$$t_n = 5 + 3(n - 1) = 5 + 3n - 3 = 3n + 2$$

(Here $3(n - 1)$ means "3 lots of $n - 1$", which is 3 lots of $n$ take away 3 lots of 1: $3n - 3$.) So the two
rules are the same sequence, described two ways. That is not a check of a few terms; it is a reason that covers every
$n$ at once.

### Which rule is better?

| | Next-term (recursive) | Position (explicit) |
| --- | --- | --- |
| Easy to spot from a list? | Yes: just look at the gaps | Harder: you have to work it out |
| Find the 1000th term | 999 steps | One calculation |
| Is 400 in the list? | Keep going until you pass 400 | Solve $3n + 2 = 400$ |
| Works for every pattern? | Very often | Sometimes very hard to find |

Each has its job. In real life, a spreadsheet uses recursive rules all the time ("this cell = the cell above + 3"),
because computers do not mind doing 999 steps. People prefer explicit rules, because we do mind.

### Is a number in the sequence?

With an explicit rule, "Is 400 a term?" becomes "Is there a whole number $n$ with $3n + 2 = 400$?" Take away 2:
$3n = 398$. Then $n = 398 \div 3 = 132.66...$, not a whole number. So **400 is not a term**: it falls between the
132nd term ($3 \times 132 + 2 = 398$) and the 133rd (401). Positions must be whole numbers: there is no
"132.66th term".

### Other kinds of sequence have both rules too

| Sequence | Recursive rule | Explicit rule |
| --- | --- | --- |
| Square numbers 1, 4, 9, 16, ... | $t_1 = 1$; add the next odd number | $t_n = n^2$ |
| Doubling 1, 2, 4, 8, ... | $t_1 = 1$, $t_{n+1} = 2t_n$ | $t_n = 2^{n-1}$ |
| Fibonacci 1, 1, 2, 3, 5, ... | $t_1 = t_2 = 1$, $t_{n+2} = t_{n+1} + t_n$ | exists, but needs level 7 and 8 ideas |

$2^{n-1}$ means $n - 1$ twos multiplied together, the same "one less than the position" as the jumps: the 1st term
has had no doublings yet. The Fibonacci sequence shows that a recursive rule can be very simple while the explicit
one is very hard.

## Worked examples

**1. Both rules for 7, 11, 15, 19, ...**

- Recursive: the gap is always 4, so $t_1 = 7$, $t_{n+1} = t_n + 4$.
- Explicit: $n - 1$ jumps of 4 from 7: $t_n = 7 + 4(n - 1) = 7 + 4n - 4 = 4n + 3$.
- Check: $t_2 = 4 \times 2 + 3 = 11$ ✓, $t_4 = 19$ ✓.
- The 50th term: $t_{50} = 4 \times 50 + 3 = 203$.

**2. From an explicit rule to a list.** $t_n = 5n - 1$.

- $t_1 = 5 - 1 = 4$, $t_2 = 10 - 1 = 9$, $t_3 = 14$, $t_4 = 19$.
- The gap is 5 every time, so the recursive rule is $t_1 = 4$, $t_{n+1} = t_n + 5$.

**3. From a recursive rule to a list.** $t_1 = 2$, $t_{n+1} = 2t_n + 1$ ("double it and add 1").

- $t_2 = 2 \times 2 + 1 = 5$, $t_3 = 2 \times 5 + 1 = 11$, $t_4 = 23$, $t_5 = 47$.
- The gaps are 3, 6, 12, 24: not constant, so the explicit rule will not look like "a number times $n$, plus a
  number". (It is $t_n = 3 \times 2^{n-1} - 1$; check $t_5 = 3 \times 16 - 1 = 47$ ✓. You will learn to find rules
  like this in level 6.)

**4. Is it a term?** For $t_n = 3n + 2$, is 200 a term? Is 250?

- $3n + 2 = 200$ gives $3n = 198$, $n = 66$. A whole number: **yes**, 200 is the 66th term.
- $3n + 2 = 250$ gives $3n = 248$, $n = 82.66...$. **No.**

## Try it

1. Write a recursive rule and an explicit rule for 6, 10, 14, 18, ...
2. Write the first five terms of $t_n = 2n + 7$.
3. Write the first five terms of $t_1 = 3$, $t_{n+1} = 2t_n$.
4. For $t_n = 6n - 4$, find $t_{20}$. Is 100 a term?
5. Write the first five terms of $t_n = n^2 + 1$. Describe the gaps between them.
6. The rule "$t_{n+1} = t_n + 3$" is given with no starting value. Write two different sequences that follow it.
7. Cara says "start at 5 and add 3" is the same as $t_n = 3n + 5$. Is she right? Find the correct explicit rule.
8. A sequence has $t_1 = 100$ and $t_{n+1} = t_n - 7$. Find an explicit rule, and the first negative term.

??? note "Answers"
    1. Recursive: $t_1 = 6$, $t_{n+1} = t_n + 4$. Explicit: $t_n = 6 + 4(n - 1) = 4n + 2$. (Check: $t_3 = 14$ ✓.)
    2. 9, 11, 13, 15, 17.
    3. 3, 6, 12, 24, 48.
    4. $t_{20} = 6 \times 20 - 4 = 116$. For 100: $6n - 4 = 100$ gives $6n = 104$, $n = 17.33...$, so **no**.
    5. 2, 5, 10, 17, 26. The gaps are 3, 5, 7, 9: the odd numbers, just as for the square numbers (each term is one
       more than a square).
    6. For example 1, 4, 7, 10, ... and 10, 13, 16, 19, ... Any start works, which is why a recursive rule needs a
       starting value.
    7. **No.** $3n + 5$ gives $t_1 = 8$, not 5. Five is the start, and the start has had no 3s added. The correct
       rule is $t_n = 5 + 3(n - 1) = 3n + 2$.
    8. $t_n = 100 - 7(n - 1) = 107 - 7n$. It is negative when $7n > 107$, that is $n > 15.28...$, so the first
       negative term is $t_{16} = 107 - 112 = -5$. (Just before it, $t_{15} = 107 - 105 = 2$.)

## Common mistake

**Writing "start at $a$, add $d$" as $dn + a$.** The start is the **1st** term, and it has had no $d$ added yet. So
the rule is $a + d(n - 1)$, which is $dn + (a - d)$. Always test your explicit rule with $n = 1$: it must give the
first term.

**Mixing up $n$ and $t_n$.** In "is 200 a term?", 200 is a value of $t_n$, so you solve for $n$. Putting $n = 200$
into the rule answers a different question (what is the 200th term?).

## Where it leads

- Next: [Finding the position rule](02-finding-position-rule.md)
- [Level 4 page](index.md) · [Patterns topic page](../index.md)
- Back in level 3: [Terms and positions](../level-3/01-terms-and-positions.md), where the jumps came from.
- Explicit rules are formulas with a letter in them; solving $3n + 2 = 200$ is an equation from
  [Algebra](../../algebra/index.md).
- At university, a sequence is studied as a list $a_1, a_2, a_3, \ldots$ exactly like this one: see
  [U of T MAT137 Unit 11: sequences](../../../uoft/MAT137/unit11.md).
