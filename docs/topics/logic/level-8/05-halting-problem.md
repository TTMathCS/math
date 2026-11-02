---
title: "Turing and the halting problem"
---

# Turing and the halting problem

*Logic and puzzles · level 8, lesson 5 of 6*

## A question to start

Here is a short program. It takes a whole number $n \ge 1$.

```text
while n is not 1:
    if n is even: n = n / 2
    else:         n = 3n + 1
stop
```

Start with 6: $6, 3, 10, 5, 16, 8, 4, 2, 1$. It stops after 8 steps. Start with 27: it climbs as high as 9232 and
takes 111 steps, but it stops. Every starting number anyone has ever tried, into the billions of billions, eventually
reaches 1 and stops.

Does it stop for **every** starting number? Nobody knows. This is the **Collatz problem**, open since the 1930s.

Wouldn't it be wonderful to have a program that reads any program and its input and tells you, correctly, whether it
will ever stop? In 1936 Alan Turing proved that no such program can exist, with an argument a few lines long. This
lesson is that argument.

## The idea

### Programs that stop, and programs that do not

A program **halts** on an input if, run on that input, it finishes after some finite number of steps. Some programs
clearly halt:

```text
count down:  while n > 0: n = n - 1
             stop
```

On any whole number $n$ it stops after $n$ steps. Some clearly do not:

```text
forever:     while true: do nothing
```

And some are hard to judge. This one halts on even inputs and runs for ever on odd ones:

```text
by twos:     while n is not 0: n = n - 2
             stop
```

Starting at 7 it goes $7, 5, 3, 1, -1, -3, \ldots$ and never hits 0. A program that never halts by mistake is a
familiar bug: the frozen app. So a tool that detects infinite loops would be very useful.

### The question

The **halting problem** asks: is there a program $H$ that takes as input **any** program $P$ (written as text) and
**any** input $x$, and

- always halts itself, and
- answers "halts" if $P$ halts on $x$, and "loops" if $P$ runs for ever on $x$?

Notice what is **not** a solution: "run $P$ on $x$ and see". If $P$ halts, you will find out. But if it has not
halted after a million steps, or a billion, you still do not know whether it will halt at step a billion and one.
Running can confirm "halts"; it can never confirm "loops".

### Why a decider would be too good to be true

Such an $H$ would solve famous open problems. Write a program that searches for a counterexample to Goldbach's
conjecture:

```text
goldbach search:
    n = 4
    repeat:
        if n is NOT a sum of two primes: stop
        n = n + 2
```

Checking whether one particular $n$ is a sum of two primes takes finitely many steps, so the search halts if and only
if Goldbach's conjecture is **false**. Asking $H$ about this one program would settle a question open since 1742.
The same trick works for many unsolved problems. That alone makes $H$ suspicious. Turing showed it is impossible.

### Turing's proof, in plain words

Programs are just text, so a program can be given **another program** (or itself) as input. That is the key.

**Theorem (Turing, 1936).** There is no program $H$ that decides, for every program $P$ and input $x$, whether $P$
halts on $x$.

**Proof.** Suppose, for a contradiction, that such an $H$ exists. Use it to build a new program $D$, which takes one
input, a program $P$:

```text
D(P):
    ask H whether P halts when given its own text as input
    if H says "halts":  loop forever
    if H says "loops":  stop
```

$D$ does the **opposite** of whatever $P$ would do when fed itself. $D$ is a real program, since $H$ is (by our
supposition) and the rest is two simple lines.

Now feed $D$ its own text. Does $D$ halt on input $D$?

- Suppose $D(D)$ halts. Look at the code: $D$ halts only when $H$ answers "loops". So $H$ said "$D$ loops on
  input $D$", and that was **wrong**.
- Suppose $D(D)$ runs for ever. Look at the code: $D$ loops only when $H$ answers "halts". So $H$ said "$D$ halts
  on input $D$", and that was wrong too.

Either way $H$ gives a wrong answer about one particular program and input. That contradicts $H$ being always right.
So no such $H$ exists. ∎

It is the barber once more: $D$ halts on exactly those programs that do not halt on themselves, and asking about $D$
itself is the barber asking about his own beard.

### The diagonal picture

List all programs $P_1, P_2, P_3, \ldots$ (every program is a finite text, so they can be listed, shortest first).
Make a table: row $P_i$, column $P_j$, entry "H" if $P_i$ halts on input $P_j$, "L" if it loops.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 230" role="img" aria-label="A table of programs against inputs with entries H for halts and L for loops. The diagonal entries are highlighted. The program D flips every diagonal entry, so it differs from every row and cannot be in the table.">
  <g fill="#9cc9ea" fill-opacity="0.8">
    <rect x="80" y="30" width="50" height="30"/>
    <rect x="130" y="60" width="50" height="30"/>
    <rect x="180" y="90" width="50" height="30"/>
    <rect x="230" y="120" width="50" height="30"/>
  </g>
  <g fill="#eea66f">
    <rect x="80" y="170" width="50" height="30"/>
    <rect x="130" y="170" width="50" height="30"/>
    <rect x="180" y="170" width="50" height="30"/>
    <rect x="230" y="170" width="50" height="30"/>
  </g>
  <g stroke="currentColor" stroke-width="1" fill="none">
    <rect x="80" y="30" width="200" height="120"/>
    <line x1="130" y1="30" x2="130" y2="150"/><line x1="180" y1="30" x2="180" y2="150"/><line x1="230" y1="30" x2="230" y2="150"/>
    <line x1="80" y1="60" x2="280" y2="60"/><line x1="80" y1="90" x2="280" y2="90"/><line x1="80" y1="120" x2="280" y2="120"/>
    <rect x="80" y="170" width="200" height="30"/>
    <line x1="130" y1="170" x2="130" y2="200"/><line x1="180" y1="170" x2="180" y2="200"/><line x1="230" y1="170" x2="230" y2="200"/>
  </g>
  <g font-size="13" text-anchor="middle" fill="currentColor">
    <text x="105" y="22">P1</text><text x="155" y="22">P2</text><text x="205" y="22">P3</text><text x="255" y="22">P4</text>
    <text x="55" y="50">P1</text><text x="55" y="80">P2</text><text x="55" y="110">P3</text><text x="55" y="140">P4</text>
    <text x="55" y="190">D</text>
    <text x="105" y="50">H</text><text x="155" y="50">L</text><text x="205" y="50">H</text><text x="255" y="50">H</text>
    <text x="105" y="80">L</text><text x="155" y="80">L</text><text x="205" y="80">L</text><text x="255" y="80">H</text>
    <text x="105" y="110">H</text><text x="155" y="110">H</text><text x="205" y="110">H</text><text x="255" y="110">L</text>
    <text x="105" y="140">L</text><text x="155" y="140">H</text><text x="205" y="140">L</text><text x="255" y="140">L</text>
    <text x="105" y="190">L</text><text x="155" y="190">H</text><text x="205" y="190">L</text><text x="255" y="190">H</text>
    <text x="300" y="95">…</text>
    <text x="340" y="185" font-size="11">flips the</text>
    <text x="340" y="199" font-size="11">diagonal</text>
  </g>
</svg>
</div>

$D$'s row is the diagonal with every entry flipped. So $D$ differs from $P_1$ in column 1, from $P_2$ in column 2,
and so on: $D$ is not any row. But every program is a row. So $D$ is not a program, and since $D$ was built from
$H$, neither is $H$. This is Cantor's diagonal argument from [Russell's paradox and sets](03-russells-paradox.md),
applied to programs.

### Turing machines and the decision problem

Turing wrote his paper before electronic computers existed. To make "program" precise, he described an imaginary
machine, now called a **Turing machine**: an endless tape of squares, a head that reads and writes one symbol at a
time and moves left or right, and a finite table of rules. Everything any computer today can compute, a Turing
machine can compute too (given enough time and tape), which is why his result applies to every programming language.

His goal was a question of Hilbert's from 1928, the **decision problem**: is there a mechanical method that decides,
for every statement of predicate logic, whether it follows from given axioms? Turing used the halting problem to show
the answer is **no**. Alonzo Church reached the same answer by a different route in the same year.

### What it means in practice

- **No perfect bug finder.** No program can find every infinite loop in every program. In fact, by a result of Henry
  Rice (1953), no program can decide **any** non-trivial property of what programs do ("does it ever print 'hello'?",
  "does it compute the same thing as this other program?").
- **Not "no program can ever be analysed".** Undecidable means there is no method that works for **all** programs.
  Tools that check many programs, and say "I don't know" for the rest, are possible and widely used.
- **Incompleteness again.** If a consistent formal system $F$ (with its axioms listed by a program) could prove, for
  every program, either "it halts" or "it does not halt" whenever true, you could decide halting: search through all
  proofs of $F$ until you find one of the two. So some true statement "program $P$ does not halt" must be unprovable
  in $F$. This is a second road to [Gödel's theorem](04-godel-incompleteness.md).

## Worked examples

**1. Trace and judge.** Does the program "by twos" halt on 10? On 7? On $-4$?

- On 10: $10, 8, 6, 4, 2, 0$. Halts after 5 steps.
- On 7: $7, 5, 3, 1, -1, -3, \ldots$ It skips over 0 and decreases for ever. Loops.
- On $-4$: $-4, -6, -8, \ldots$ moves away from 0. Loops.

For this program the answer is easy to **prove** for every input: it halts exactly on even $n \ge 0$, after
$\frac{n}{2}$ steps. The halting problem does not say this is hard for every program, only that no single method
works for all.

**2. The Collatz program on 7.** $7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1$: it halts after 16
steps, reaching a highest value of 52. Running it confirmed "halts" for 7. For the question "does it halt for
**every** $n$", running cannot help, and no proof is known.

**3. D on a small table.** In the table above, the diagonal is $H, L, H, L$. $D$ flips it: $L, H, L, H$.

- $D$ differs from $P_1$ in column 1 ($L$ against $H$).
- from $P_2$ in column 2 ($H$ against $L$);
- from $P_3$ in column 3 ($L$ against $H$);
- from $P_4$ in column 4 ($H$ against $L$).

However long the list, $D$'s row differs from row $i$ in column $i$, so $D$ is never on the list.

**4. Turning a question into halting.** Show that a halting decider would decide Fermat's last theorem
(no positive integers $a, b, c$ with $a^n + b^n = c^n$ and $n \ge 3$).

Write a program that runs through all quadruples $(a, b, c, n)$ with $n \ge 3$ in some order that reaches each one
eventually (for example, all those with $a + b + c + n = 6$, then $= 7$, and so on) and stops if it finds
$a^n + b^n = c^n$. It halts if and only if the theorem is false. (The theorem was proved by Andrew Wiles in 1994,
so we know this program runs for ever; no halting decider was needed, or possible.)

## Try it

1. Does "count down" halt on $-3$? (Read the code exactly.)
2. Run the Collatz program on 12 and on 9. How many steps does each take?
3. Why does "run $P$ on $x$ for a million steps; if it has not stopped, answer 'loops'" fail as a halting decider?
   Give a program for which it gives the wrong answer.
4. In the proof, why is it important that $D$ feeds $P$ **its own** text?
5. Suppose someone claims a program $Q$ that decides, for any program $P$, whether $P$ halts on input 0. Show that
   this would give a full halting decider. (Hint: from $P$ and $x$, build a program that ignores its input and runs
   $P$ on $x$.)
6. A diagonal table has rows $P_1$ to $P_5$ with diagonal $H, H, L, H, L$. What is $D$'s row on those five columns?
7. Write a search program whose halting would show that there is an odd perfect number (a number equal to the sum
   of its divisors other than itself; nobody knows whether an odd one exists).
8. Harder. Explain why the set of all programs can be listed $P_1, P_2, P_3, \ldots$, but the set of all infinite
   rows of $H$s and $L$s cannot. What does this say about problems that no program can solve?

??? note "Answers"
    1. On $-3$ the test "$n > 0$" is false at once, so it stops immediately (after 0 steps). It **halts**.
    2. 12: $12, 6, 3, 10, 5, 16, 8, 4, 2, 1$: **9 steps**. 9: $9, 28, 14, 7, 22, 11, 34, 17, 52, 26, 13, 40, 20,
       10, 5, 16, 8, 4, 2, 1$: **19 steps**.
    3. Some programs halt only after more than a million steps, and it would wrongly say "loops" for them. For
       example "count down" on input 2 000 000 halts after 2 million steps.
    4. That is what makes the self-reference: $D$'s behaviour on $D$ is defined as the opposite of $H$'s prediction
       about $D$ on $D$. It is the diagonal of the table.
    5. Given $P$ and $x$, build $P_x$: "ignore your input; run $P$ on $x$". Then $P_x$ halts on input 0 if and only
       if $P$ halts on $x$. So asking $Q$ about $P_x$ answers the halting question for $P$ and $x$. Since no halting
       decider exists, $Q$ cannot exist either.
    6. Flip each: $L, L, H, L, H$.
    7. "$n = 1$; repeat: if $n$ equals the sum of its divisors smaller than $n$, stop; else $n = n + 2$." It halts
       if and only if an odd perfect number exists.
    8. Programs are finite texts, so list them by length, and alphabetically within each length. Infinite rows of H
       and L cannot be listed: for any list, flipping the diagonal makes a row not on it (Cantor). So there are more
       yes/no problems than programs; most problems have no program that solves them.

## Common mistake

**"Undecidable means nobody can ever know whether this program halts."** For any **particular** program, the answer
may be easy (or may be found one day). Undecidable means no **single** method answers correctly for **every**
program.

**Thinking a faster computer would help.** The proof does not depend on speed or memory. Any $H$, however powerful,
is tricked by its own $D$.

## Where it leads

- Back: [Gödel's incompleteness theorems](04-godel-incompleteness.md) · Next: [P versus NP](06-p-versus-np.md),
  about problems that can be solved, but perhaps not quickly.
- [Level 8 page](index.md) · [Logic topic page](../index.md)
- Writing and tracing programs: [Coding with loops](../level-3/04-coding-with-loops.md) and
  [Coding with conditions](../level-4/05-coding-conditions.md).
- The Collatz problem and other simple patterns nobody can prove: [Unsolved patterns](../../patterns/level-8/06-unsolved-patterns.md).
- Cantor's diagonal argument and sizes of infinity: [Infinity](../../infinity/index.md).
- On the U of T shelf: recursion in [CSC148 Unit 5](../../../uoft/CSC148H1/unit05.md), and how long programs take in
  [CSC148 Unit 9: efficiency analysis](../../../uoft/CSC148H1/unit09.md).
