---
title: "P versus NP"
---

# P versus NP

*Logic and puzzles · level 8, lesson 6 of 6*

## A question to start

Here are ten numbers:

$$14, \quad 23, \quad 31, \quad 38, \quad 45, \quad 52, \quad 61, \quad 67, \quad 76, \quad 83.$$

Choose some of them that add up to **exactly 206**. Take your time.

Now suppose a friend says: "Take 31, 38, 61 and 76." You can check that in a few seconds: $31 + 38 = 69$,
$69 + 61 = 130$, $130 + 76 = 206$. Correct. (It is in fact the only way.)

**Finding** the answer was slow; **checking** it was fast. Is that always so, or is there some clever method that
finds answers as quickly as they can be checked? That is the **P versus NP** question. Nobody knows the answer, and
there is a prize of one million dollars for the first proof either way.

## The idea

### Counting steps

The [halting problem](05-halting-problem.md) was about problems no program can solve. This lesson is about problems
programs **can** solve, and how **fast**.

Speed is measured by counting basic steps (comparisons, additions) as the **size of the input** $n$ grows: the length
of a list, the number of cities, the number of digits. What matters is how the count grows with $n$.

| $n$ | $n^2$ | $n^3$ | $2^n$ |
| --- | --- | --- | --- |
| 10 | 100 | 1000 | 1024 |
| 20 | 400 | 8000 | 1 048 576 |
| 50 | 2500 | 125 000 | about $1.1 \times 10^{15}$ |
| 100 | 10 000 | 1 000 000 | about $1.3 \times 10^{30}$ |

A computer doing a billion ($10^9$) steps a second finishes $100^3$ steps in a thousandth of a second. But $2^{50}$
steps take about 13 days, and $2^{100}$ steps take about 40 trillion years, far longer than the age of the universe.
Faster computers barely help: doubling the speed lets an exponential method handle just **one** more item.

So the big dividing line is between:

- **polynomial time**: the number of steps is at most a fixed power of $n$, like $n^2$ or $n^3$ (fast in
  practice, and fast in principle);
- **exponential time**: the steps grow like $2^n$ or worse (hopeless for large $n$).

### The class P

A yes/no problem is in **P** (for "polynomial") if some program solves every case of it in polynomial time.
Examples:

- **Sorting** a list, or **searching** a sorted list (see [Searching and sorting](../level-6/04-searching-sorting.md)).
- **Greatest common divisor**, by [Euclid's algorithm](../../number-theory/level-4/04-euclids-algorithm.md): the
  number of steps grows only with the number of digits.
- **Is there a route from A to B** in a road network? Yes, quickly, by exploring outwards from A.
- **Is $n$ prime?** Surprisingly, this is in P too: Manindra Agrawal, Neeraj Kayal and Nitin Saxena proved it in
  2002, with steps polynomial in the number of **digits** of $n$. (Trying every divisor up to $\sqrt n$ is not
  polynomial in the number of digits.)

### The class NP

A yes/no problem is in **NP** if, whenever the answer is "yes", there is a short **certificate** (a proposed
solution) that can be **checked** in polynomial time. (NP stands for "nondeterministic polynomial", from a way of
describing it with imaginary machines that guess; "quickly checkable" is the honest meaning.)

- **Subset sum.** "Do some of these numbers add to exactly $T$?" Certificate: the chosen numbers. Check: add them.
- **Sudoku.** "Can this $n^2 \times n^2$ grid be completed?" Certificate: a completed grid. Check: every row,
  column and box once each.
- **Map colouring.** "Can this map be coloured with 3 colours so that neighbours differ?" Certificate: a colouring.
  Check: look at every border once. (Compare [graph colouring](../level-6/06-graph-colouring.md): four colours are always enough
  for a flat map, but deciding whether **three** are enough is hard.)
- **Route planning.** "Is there a round trip through all these sites of total length at most $L$?" Certificate: the
  route. Check: add up the legs. This is the **travelling salesman problem**. A rover visiting sites on Mars, a
  delivery van, a drill moving over a circuit board: the problem is the same.
- **Satisfiability (SAT).** "Is there a row of the [truth table](../level-4/02-truth-tables.md) of this formula
  that makes it true?" Certificate: the row. Check: work out the formula once.

Every problem in P is also in NP: if you can **solve** it quickly, you can check a "yes" by solving it again,
ignoring the certificate. So $\text{P} \subseteq \text{NP}$.

### The question

> **Is P equal to NP?** If a "yes" answer can always be **checked** quickly, can it always be **found** quickly?

The question was made precise by Stephen Cook in 1971, and independently by Leonid Levin. In 2000 the Clay
Mathematics Institute named it one of seven **Millennium Prize Problems**, with one million dollars for a solution.
It is still open.

### NP-complete: the hardest problems in NP

Cook and Levin proved something remarkable: **SAT is NP-complete**. That means every problem in NP can be translated,
in polynomial time, into a SAT problem. So a fast method for SAT would give a fast method for **everything** in NP.

In 1972 Richard Karp showed that 21 other natural problems are NP-complete too, and thousands are now known: subset
sum, 3-colouring, the travelling salesman problem (in its yes/no form), scheduling exams with no clashes, and
generalised Sudoku. They are all, in a precise sense, the **same** problem in different clothes: solve any one of
them quickly, and you have solved them all quickly, and $\text{P} = \text{NP}$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 210" role="img" aria-label="The picture most experts believe: NP is a large region; inside it, P is a smaller region holding sorting, gcd and primality; at the far edge of NP is the NP-complete band holding SAT, Sudoku, subset sum, 3-colouring and travelling salesman.">
  <ellipse cx="210" cy="105" rx="195" ry="92" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor"/>
  <ellipse cx="135" cy="112" rx="90" ry="58" fill="#7ccf9a" stroke="currentColor"/>
  <path d="M 330 32.5 A 195 92 0 0 1 330 177.5 L 300 162.5 A 140 75 0 0 0 300 47.5 Z" fill="#eea66f" stroke="currentColor"/>
  <g font-size="13" text-anchor="middle" fill="currentColor">
    <text x="210" y="32">NP: answers quick to check</text>
    <text x="135" y="95">P: quick to solve</text>
    <text x="135" y="115" font-size="11">sorting, gcd,</text>
    <text x="135" y="130" font-size="11">is n prime?</text>
    <text x="255" y="100" font-size="11">factoring?</text>
    <text x="378" y="100" font-size="11">NP-</text>
    <text x="378" y="114" font-size="11">complete</text>
    <text x="210" y="207" font-size="11">the picture if P ≠ NP (nobody has proved it)</text>
  </g>
</svg>
</div>

### Why it matters, and what most people believe

Most experts believe $\text{P} \ne \text{NP}$: decades of effort by very clever people have found fast methods for
none of the NP-complete problems. But belief is not proof, and proving that **no** fast method exists, out of all
the infinitely many possible programs, is extraordinarily hard. Some known proof techniques have been shown to be
too weak for it.

If $\text{P} = \text{NP}$ (with a practical method), the world would change. Many hard planning and design problems
would become easy. Much of today's internet security would fail: it relies on problems, such as **factoring** large
numbers (the basis of [RSA](../../number-theory/level-8/02-rsa.md)), that are in NP but seem hard to solve. (Factoring
is not known to be NP-complete; it might be easier than SAT, which is why the picture shows it with a question mark.)
And since checking a written proof is quick, searching for proofs of a given length would become quick too: much of
the work of finding proofs could be done by machine.

## Worked examples

**1. Subset sum: check versus search.** For the ten numbers in the opening question, how many subsets are there to
search? And how much work is it to check one?

Each number is either in or out, so there are $2^{10} = 1024$ subsets ([In or out](../../counting/level-5/02-in-or-out.md)).
Searching them all means up to 1024 sums. Checking one proposed subset is at most 9 additions. With 100 numbers, a
blind search has $2^{100}$ subsets, about 40 trillion years at a billion a second, while checking an answer still
takes at most 99 additions.

There is a subtle asymmetry. Is there a subset adding to **200**? The answer is no (a computer search confirms it).
But what quick certificate could prove "no"? None is known. NP is about quickly checkable **yes** answers.

**2. Route planning.** A rover must visit $n$ sites and return to base. How many different round trips are there?

Fix the base as the start. The other $n - 1$ sites can be visited in $(n - 1)!$ orders, and each round trip is
counted twice (once in each direction). So there are $\frac{(n - 1)!}{2}$ round trips.

| sites $n$ | 5 | 6 | 10 | 20 |
| --- | --- | --- | --- | --- |
| round trips | 12 | 60 | 181 440 | about $6.1 \times 10^{16}$ |

With 20 sites, checking every route at a billion per second takes about two years; with 30 sites, far longer than the
age of the universe. Yet checking that **one** given route is shorter than $L$ takes just 20 additions. Cleverer
methods than listing every route exist, but none known runs in polynomial time for every case.

**3. SAT.** Is there a way to make $(p \lor q) \land (\neg p \lor r) \land (\neg q \lor \neg r)$ true?

The truth table has $2^3 = 8$ rows; with 100 letters it would have $2^{100}$. Try the row $p$ true, $q$ false,
$r$ true: $p \lor q$ is T; $\neg p \lor r$ is $F \lor T = T$; $\neg q \lor \neg r$ is $T \lor F = T$. All three
true, so the formula is **satisfiable**, and this row is the certificate. Checking it took three small steps.

**4. Polynomial versus exponential.** A program takes $n^3$ steps and another takes $2^n$ steps, at $10^9$ steps per
second. Compare them for $n = 60$.

- $60^3 = 216\,000$ steps: about 0.0002 seconds.
- $2^{60} \approx 1.15 \times 10^{18}$ steps: about $1.15 \times 10^{9}$ seconds, which is about 36.5 years.

## Try it

1. From $3, 8, 11, 17, 25, 29$, find some numbers that add to exactly 50. Then check a friend's claim that
   $3 + 11 + 29$ makes 43.
2. How many subsets does a set of 20 numbers have? Of 30?
3. Which of these are known to be in P: (a) sorting a list; (b) finding the gcd of two numbers; (c) deciding whether
   a map can be coloured with 3 colours; (d) deciding whether a number is prime?
4. Explain in your own words why every problem in P is also in NP.
5. Find a row that makes $(p \lor \neg q) \land (q \lor r) \land (\neg p \lor \neg r)$ true. Check it.
6. Five towns lie on a ring road, each joined to its two neighbours (a five-sided loop). Can the towns be coloured
   with 2 colours so that neighbours differ? With 3? Give a certificate for the "yes".
7. At $10^9$ steps per second, roughly how long do $2^{40}$ steps take? (Use $2^{10} \approx 1000$.)
8. Harder. Deciding whether a map can be coloured with **2** colours is in P. Describe a fast method. (Hint: colour
   one region, then its neighbours are forced.)

??? note "Answers"
    1. $8 + 17 + 25 = 50$ (it is the only way). Check: $3 + 11 = 14$ and $14 + 29 = 43$. ✓ Two additions.
    2. $2^{20} = 1\,048\,576$. $2^{30} = 1\,073\,741\,824$, about a billion.
    3. (a), (b) and (d) are in P (primality since 2002). (c) is NP-complete; it is in P only if $\text{P} = \text{NP}$.
    4. If a program solves the problem quickly, it can check a "yes" by solving the problem itself and ignoring the
       proposed certificate. So quick solving gives quick checking.
    5. For example $p$ true, $q$ true, $r$ false: $p \lor \neg q$ is $T \lor F = T$; $q \lor r$ is $T \lor F = T$;
       $\neg p \lor \neg r$ is $F \lor T = T$. All true. ✓ (Another: $p$ false, $q$ false, $r$ true.)
    6. **Not with 2**: going round the loop the colours must alternate A, B, A, B, and the fifth town is next to the
       first (A) and the fourth (B), so it cannot be either. **Yes with 3**: A, B, A, B, C. The certificate is that
       list; checking means looking at the 5 borders.
    7. $2^{40} = (2^{10})^4 \approx 1000^4 = 10^{12}$ steps, so about $10^{12} \div 10^9 = 1000$ seconds, roughly
       17 minutes. (Exactly $2^{40} = 1\,099\,511\,627\,776$, about 18 minutes.)
    8. Colour any region A. All its neighbours must be B, their neighbours A, and so on: each colour is forced.
       Spread out like this until every region (in each connected piece) is coloured, then look at every border
       once. If two neighbours got the same colour, 2 colours are impossible; otherwise you have a colouring. Each
       region and border is handled a fixed number of times, so the steps grow only in proportion to the size of
       the map.

## Common mistake

**"NP means not polynomial".** It does not. NP means a "yes" can be **checked** in polynomial time. Every problem in
P is in NP. The open question is whether NP contains problems **outside** P.

**Thinking "hard" was proved.** Nobody has proved that subset sum, SAT or Sudoku cannot be solved quickly. We only
know that if any one of them can, they all can. "Nobody has found a fast method" is not the same as "there is none".

## Where it leads

- Back: [Turing and the halting problem](05-halting-problem.md) · This is the last lesson of the Logic topic.
- [Level 8 page](index.md) · [Logic topic page](../index.md)
- Search and sort, and counting steps: [Searching and sorting](../level-6/04-searching-sorting.md). SAT is about truth tables:
  [Truth tables](../level-4/02-truth-tables.md). Sudoku: [9-by-9 Sudoku moves](../level-3/05-sudoku-moves.md).
- Counting subsets and orders: [In or out](../../counting/level-5/02-in-or-out.md) and
  [Factorials](../../counting/level-4/01-factorials.md).
- Codes that rely on hard problems: [RSA](../../number-theory/level-8/02-rsa.md).
- On the U of T shelf: [CSC148 Unit 9: efficiency analysis](../../../uoft/CSC148H1/unit09.md) and
  [CSC108 Unit 9: searching, sorting and complexity](../../../uoft/CSC108H1/unit09.md).
