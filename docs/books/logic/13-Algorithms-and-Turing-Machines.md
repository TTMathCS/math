# 13. Algorithms and Turing machines

*Since Euclid, mathematicians have written down step-by-step methods: for the greatest common divisor, for solving
equations, for checking a proof. But until the 1930s nobody had said exactly what "a step-by-step method" is. That did
not matter while people were only finding methods. It mattered a great deal once they wanted to prove that for some
problems there is no method at all, because you cannot prove that nothing in a class exists until you know what the
class is. In this chapter you will meet the answer Alan Turing gave in 1936: a very simple imaginary machine. You will
build and run several of them by hand, see why most people accept that they capture every possible algorithm, meet the
universal machine that runs all the others, and see that quite different models (Church's lambda calculus, register
machines) compute exactly the same functions.*

!!! abstract "In this chapter"
    **You will learn:**

    - what people mean by an algorithm, and why the Entscheidungsproblem forced a precise definition
    - the definition of a Turing machine, and how to design, trace and test one
    - the Church-Turing thesis, and why it is a thesis about the world, not a theorem
    - how a machine can be written down as a string, and how one universal machine runs every other
    - why most functions from numbers to numbers cannot be computed at all, by a counting argument
    - two other models, the lambda calculus and register machines, and the theorem that all these models agree

    **You need:** [Chapter 4](04-Proofs.md) (proof by contradiction and induction),
    [Chapter 6](06-Relations-and-Functions.md) (functions, partial and total) and
    [Chapter 7](07-Infinity-and-Cardinality.md) (countable sets, Cantor's diagonal argument).
    A gentler first look: the Topics lessons [robot steps](../../topics/logic/level-1/05-robot-steps.md),
    [algorithms and flowcharts](../../topics/logic/level-6/03-algorithms-flowcharts.md) and
    [Turing and the halting problem](../../topics/logic/level-8/05-halting-problem.md).

    **Levels:** 13.1 to 13.3 are intermediate; 13.4 and 13.5 are advanced.

## 13.1 What is an algorithm?

*Level: intermediate.*

Here is a method you have probably used. To find the greatest common divisor of two positive whole numbers $a$ and $b$:

1. If $b = 0$, the answer is $a$. Stop.
2. Otherwise replace the pair $(a, b)$ by $(b, a \bmod b)$, where $a \bmod b$ is the remainder when $a$ is divided by
   $b$, and go back to step 1.

For $(252, 105)$: $252 = 2 \cdot 105 + 42$, so the pair becomes $(105, 42)$; then $105 = 2 \cdot 42 + 21$ gives
$(42, 21)$; then $42 = 2 \cdot 21 + 0$ gives $(21, 0)$, and the answer is 21. Check: $252 = 2^2 \cdot 3^2 \cdot 7$ and
$105 = 3 \cdot 5 \cdot 7$, and their common part is $3 \cdot 7 = 21$.

This is **Euclid's algorithm**, written down around 300 BC. What makes it an **algorithm**, a word that comes from the
name of the ninth-century Baghdad scholar al-Khwarizmi? Informally, people agree on these features:

- **Finite description.** The whole method is written in a finite text.
- **Definite steps.** Each step is completely determined; no cleverness, intuition or luck is needed to carry it out.
  A patient clerk who does not understand what the method is for could follow it.
- **Discrete, step by step.** It runs in separate steps, one after another.
- **Unbounded but finite resources.** There is no fixed limit on how much paper it may use, but at any moment only a
  finite amount has been used.
- **Input and output.** It starts from an input (here the pair $a, b$) and, if it stops, produces an output.

Notice what is *not* on the list: a promise that the method stops. A method that searches for something that may not
exist ("try $n = 1, 2, 3, \ldots$ until $n$ is an odd perfect number") is still a perfectly definite procedure. It may
just run forever. This possibility will be at the heart of [Chapter 14](14-Undecidability.md).

### Why a definition was needed

For centuries this informal idea was enough. If you wanted to show a problem *could* be solved mechanically, you wrote
down a method, and everyone recognised it as one. The trouble came from the other direction.

In 1900 David Hilbert listed 23 problems for the new century. The tenth asked for a process that decides, for any
polynomial equation with integer coefficients, whether it has a solution in integers. In 1928 Hilbert and Wilhelm
Ackermann, in their textbook on logic, posed the **Entscheidungsproblem** ("decision problem"): find a procedure that
takes any statement of first-order logic ([Chapter 10](10-First-Order-Logic.md)) and decides whether it is valid, that
is, true in every structure. Hilbert hoped for a positive answer. By completeness
([Chapter 11](11-Completeness-and-Compactness.md)), "valid" is the same as "provable", so a positive answer would have
meant a machine that decides, for any mathematical statement written in that language, whether it follows from given
axioms.

Suppose the answer is no. To *prove* that no procedure works, you must be able to survey every possible procedure and
show that each one fails on some input. That requires a mathematical definition of "procedure". Between 1933 and
1936 several people proposed one:

- Kurt Gödel, building on an idea of Jacques Herbrand, defined the **general recursive functions** (1934), and Stephen
  Kleene developed them ([Chapter 15](15-Recursive-Functions-and-Computability.md)).
- Alonzo Church and his students defined the **lambda calculus**, and in 1936 Church published "An unsolvable problem of
  elementary number theory", which used it to give a negative answer to the Entscheidungsproblem.
- Alan Turing, a 24-year-old fellow of King's College, Cambridge, working independently, wrote "On computable numbers,
  with an application to the Entscheidungsproblem" (submitted in 1936 and published in the *Proceedings of the London
  Mathematical Society*). He defined what we now call **Turing machines** and also answered the Entscheidungsproblem in
  the negative.
- Emil Post published a very similar machine model in 1936.

Turing's model won the textbooks, and the reason is worth understanding. Church's definition was elegant but did not
obviously capture *everything* mechanical. Turing's paper contained an argument, from an analysis of what a human
clerk does with pencil and paper, that his machines can do anything such a clerk can do. Even Gödel, who had doubted
that his own definition was general enough, regarded Turing's analysis as settling the matter.

## 13.2 Turing machines

*Level: intermediate.*

### Turing's analysis of a human computer

In 1936 a "computer" was a person who computed. Turing asked: what does such a person actually do? Paraphrasing his
analysis:

- They write symbols on paper. The paper can be thought of as divided into squares, and since a human can only
  distinguish finitely many symbols, there is a finite **alphabet**.
- Two-dimensional paper is not essential; a long strip, a **tape**, divided into squares, will do.
- At each moment they look at only a bounded number of squares. Without loss we can say one square, the **scanned
  square**: looking at several is the same as looking at one many times.
- Their behaviour depends on the symbols they see and on their "state of mind". There are only finitely many states of
  mind that matter (otherwise some would be too alike to tell apart).
- A single step changes at most one symbol, moves attention to a nearby square, and changes the state of mind.

Strip this down and you get the machine.

### The definition

**Definition.** A **Turing machine** $M$ consists of:

- a finite set $Q$ of **states**, containing a **start state** $q_0$ and a special **halting state** $q_{\text{halt}}$;
- a finite **tape alphabet** $\Gamma$ containing a **blank** symbol, written $\_$;
- a **transition function** $\delta$, described next.

The transition function is a map

$$
\delta : (Q \setminus \{q_{\text{halt}}\}) \times \Gamma \to \Gamma \times \{L, R\} \times Q.
$$

In words, $\delta(q, s) = (s', D, q')$ means: "if you are in state $q$ and the scanned square contains $s$, then write
$s'$ in that square, move the head one square in direction $D$ (left or right), and go into state $q'$."

The machine works on a **tape** that is a row of squares infinite in both directions. At the start the input, a finite
string of symbols, is written on the tape, every other square is blank, the **head** is on the first symbol of the
input (or on any square if the input is empty), and the state is $q_0$. Then the machine repeats the step given by
$\delta$. If it ever enters $q_{\text{halt}}$, it **halts**, and the **output** is whatever non-blank string is left on
the tape. If it never enters the halting state, it runs forever and has no output.

A complete snapshot at one moment, the tape contents, head position and state, is a **configuration**. A **run** is the
sequence of configurations, each obtained from the one before by one application of $\delta$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 170" role="img" aria-label="A Turing machine tape: a row of squares holding blank, 1, 0, 1, 1, blank, blank. A head box labelled state start points down at the square holding 0, the second symbol of the input. The tape continues forever both ways">
<text x="20" y="95" text-anchor="middle" font-size="20" fill="currentColor">…</text>
<rect x="40" y="70" width="50" height="40" fill="none" stroke="currentColor"/>
<rect x="90" y="70" width="50" height="40" fill="#9cc9ea" stroke="currentColor"/>
<rect x="140" y="70" width="50" height="40" fill="#eea66f" stroke="currentColor" stroke-width="2.5"/>
<rect x="190" y="70" width="50" height="40" fill="#9cc9ea" stroke="currentColor"/>
<rect x="240" y="70" width="50" height="40" fill="#9cc9ea" stroke="currentColor"/>
<rect x="290" y="70" width="50" height="40" fill="none" stroke="currentColor"/>
<rect x="340" y="70" width="50" height="40" fill="none" stroke="currentColor"/>
<text x="440" y="95" text-anchor="middle" font-size="20" fill="currentColor">…</text>
<text x="65" y="96" text-anchor="middle" font-size="16" fill="currentColor">_</text>
<text x="115" y="96" text-anchor="middle" font-size="16" fill="currentColor">1</text>
<text x="165" y="96" text-anchor="middle" font-size="16" fill="currentColor">0</text>
<text x="215" y="96" text-anchor="middle" font-size="16" fill="currentColor">1</text>
<text x="265" y="96" text-anchor="middle" font-size="16" fill="currentColor">1</text>
<text x="315" y="96" text-anchor="middle" font-size="16" fill="currentColor">_</text>
<text x="365" y="96" text-anchor="middle" font-size="16" fill="currentColor">_</text>
<rect x="125" y="10" width="80" height="30" rx="6" fill="#7ccf9a" stroke="currentColor"/>
<text x="165" y="30" text-anchor="middle" font-size="13" fill="currentColor">state: start</text>
<line x1="165" y1="40" x2="165" y2="64" stroke="currentColor" stroke-width="2"/>
<polygon points="159,60 171,60 165,69" fill="currentColor"/>
<text x="230" y="140" text-anchor="middle" font-size="13" fill="currentColor">the head reads one square, writes, moves one square, changes state</text>
</svg>
</div>

That is the entire definition. There is no arithmetic unit, no memory addresses, no "if" statement except the table
itself. The surprise of the subject is that this is enough for everything.

### Example 1: adding one in binary

Input: a binary numeral such as `1011` (eleven). Output: the numeral for the next number, `1100` (twelve). How do you
add one by hand? Start at the right end; while you see a 1, change it to 0 and carry left; when you reach a 0 (or run
off the left end), change it to 1 and stop.

The machine has states `start`, `carry` and `halt`, alphabet $\{0, 1, \_\}$, and this table:

| state | reads | write | move | next state |
| --- | --- | --- | --- | --- |
| start | 0 | 0 | R | start |
| start | 1 | 1 | R | start |
| start | \_ | \_ | L | carry |
| carry | 1 | 0 | L | carry |
| carry | 0 | 1 | L | halt |
| carry | \_ | 1 | L | halt |

The `start` state walks right to the end of the number without changing anything. On the blank after the last digit it
steps back and switches to `carry`, which does the carrying.

**Trace on `1011`.** Square brackets mark the scanned square.

| step | state | tape |
| --- | --- | --- |
| 0 | start | [1]011 |
| 1 | start | 1[0]11 |
| 2 | start | 10[1]1 |
| 3 | start | 101[1] |
| 4 | start | 1011[\_] |
| 5 | carry | 101[1]\_ |
| 6 | carry | 10[1]0\_ |
| 7 | carry | 1[0]00\_ |
| 8 | halt | 1100 |

The output is `1100`, which is twelve. Check: eleven plus one is twelve. On `111` (seven) the carry runs off the left
end: the `carry` state meets a blank, writes 1, and the output is `1000` (eight).

How many steps? On an input of $n$ digits ending in $t$ ones, the machine makes $n + 1$ steps walking right and onto the
blank, then $t + 1$ carry steps, so $n + t + 2$ steps in all. For `1011`, $n = 4$, $t = 2$, giving 8. Check: the
trace has 8 steps.

### Example 2: adding two numbers in unary

In **unary**, the number $k$ is written as $k$ ones, so 3 is `111`. Input: $a$ ones, a plus sign, $b$ ones, for example
`111+11`. Output: $a + b$ ones. A lazy but correct method: overwrite the `+` with a 1 (now there are $a + b + 1$ ones
in a row), go to the right end, and erase one 1.

| state | reads | write | move | next state |
| --- | --- | --- | --- | --- |
| start | 1 | 1 | R | start |
| start | + | 1 | R | start |
| start | \_ | \_ | L | erase |
| erase | 1 | \_ | L | halt |

On `111+11` it walks right for 6 steps (turning `+` into 1 on the way), steps onto the blank and back (step 7), and erases
the last 1 (step 8), leaving `11111`. Check: $3 + 2 = 5$. In general it takes $a + b + 3$ steps.

### Example 3: recognising palindromes

A Turing machine can also answer yes-or-no questions: give it two halting states, `yes` and `no`. (Or one halting state
and an output of 1 or 0; the two styles are interchangeable.) Over the alphabet $\{a, b, \_\}$, a **palindrome** reads
the same backwards, like `abba`. Method: erase the first symbol and remember it in the state; run to the right end;
check the last symbol matches; erase it; run back to the left end; repeat.

| state | reads | write | move | next state |
| --- | --- | --- | --- | --- |
| start | a | \_ | R | hasA |
| start | b | \_ | R | hasB |
| start | \_ | \_ | R | yes |
| hasA | a or b | same | R | hasA |
| hasA | \_ | \_ | L | checkA |
| hasB | a or b | same | R | hasB |
| hasB | \_ | \_ | L | checkB |
| checkA | a | \_ | L | back |
| checkA | b | b | L | no |
| checkA | \_ | \_ | L | yes |
| checkB | b | \_ | L | back |
| checkB | a | a | L | no |
| checkB | \_ | \_ | L | yes |
| back | a or b | same | L | back |
| back | \_ | \_ | R | start |

Here "remember it in the state" is the key trick. A Turing machine has no variables; the only memory apart from the
tape is which state it is in. So to remember "the first letter was $a$" we simply have a separate copy of the walking
state, `hasA`, for that case. The `checkA` and `checkB` rows that read a blank handle odd-length words, where the middle
letter has no partner.

On `abba` the machine answers yes in 15 steps; on `abab` it answers no in 6 steps. On the word $a^n$ (that is, $n$
copies of $a$) it takes $(n+1)(n+2)/2$ steps: the passes get shorter by two each time, and the lengths add up like
$1 + 2 + \cdots$. The count grows like $n^2/2$, which is typical: a one-tape machine that has to compare the two ends of
its input must keep walking back and forth. We will count steps seriously in [Chapter 16](16-Complexity.md).

### Try it in Python

A simulator is a few lines: the tape is a dictionary from positions to symbols, so it can grow in both directions.

```python
def run(delta, tape, state="start", blank="_", limit=10_000):
    """delta maps (state, symbol) to (write, move, new_state); move is 'L' or 'R'."""
    cells = dict(enumerate(tape))
    pos, steps = 0, 0
    while state not in ("halt", "yes", "no") and steps < limit:
        write, move, state = delta[(state, cells.get(pos, blank))]
        cells[pos] = write
        pos += 1 if move == "R" else -1
        steps += 1
    out = "".join(cells.get(i, blank) for i in range(min(cells), max(cells) + 1))
    return state, out.strip(blank), steps

inc = {("start", "0"): ("0", "R", "start"), ("start", "1"): ("1", "R", "start"),
       ("start", "_"): ("_", "L", "carry"),
       ("carry", "1"): ("0", "L", "carry"), ("carry", "0"): ("1", "L", "halt"),
       ("carry", "_"): ("1", "L", "halt")}
print(run(inc, "1011"))   # ('halt', '1100', 8)
```

The `limit` is there because a machine may never halt, and a simulator cannot know in advance which machines will.
That remark is a theorem in disguise, proved in [Chapter 14](14-Undecidability.md).

### Computable functions, decidable sets

To talk about functions on numbers we fix a way of writing numbers on the tape, binary or unary; which one does not
change anything below.

**Definition.** A partial function $f$ from strings to strings (or numbers to numbers) is **Turing computable** if there
is a Turing machine $M$ such that, for every input $x$: if $f(x)$ is defined, $M$ halts on $x$ with output $f(x)$; if
$f(x)$ is undefined, $M$ runs forever on $x$. A set $A$ of strings is **decidable** (or **recursive**) if some machine
halts on every input and answers yes exactly for the members of $A$.

"Partial" means $f$ may be undefined at some inputs ([Chapter 6](06-Relations-and-Functions.md)); "total" means defined
everywhere. Partial functions are forced on us: a machine is just a table, and nothing stops a table from producing a
machine that loops on some inputs.

### Variations that change nothing

Many variations of the definition have been proposed. Each one turns out to compute exactly the same functions:

- a tape infinite in only one direction;
- several tapes, each with its own head;
- a head that may also stay put;
- a two-dimensional grid instead of a tape;
- only two symbols, 1 and blank;
- **nondeterministic** machines, which may have several possible moves and accept if *some* run accepts.

The proofs are all simulations. As an example, here is the idea for several tapes. Suppose $M$ has $k$ tapes. A
one-tape machine $S$ stores all $k$ tapes on its single tape, one after another, separated by a marker `#`, with each
square that is under one of $M$'s heads marked by a dotted copy of its symbol. To simulate one step of $M$, $S$ sweeps
across its tape once to read the $k$ dotted symbols (remembering them in its state, which is possible because there are
only finitely many combinations), then sweeps again to write the new symbols and move the dots. If a dot has to move
onto a `#`, $S$ shifts the rest of its tape one square right to make room. Each simulated step costs a number of
$S$-steps proportional to the length of the used tape, so if $M$ takes $t$ steps, $S$ takes about $t^2$ (up to a
constant factor). Nothing more can be computed, only (possibly) faster. That last word, *faster*, is the seed of
complexity theory.

<figure class="play" data-play="turing" data-mode="add1"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> A Turing machine adding 1 to the binary number 1011, one rule at a time.</figcaption></figure>

## 13.3 The Church-Turing thesis

*Level: intermediate.*

By 1937 there were three definitions on the table: general recursive functions, lambda-definable functions and Turing
computable functions. Kleene proved that the first two define the same class, and Turing (in a 1937 paper) proved that
lambda-definable equals Turing computable. Three ideas with different starting points, all giving the same functions:
this is strong evidence that they all capture something real.

**The Church-Turing thesis.** A function on the natural numbers can be computed by an algorithm (in the informal sense
of 13.1) if and only if it is computable by a Turing machine.

The name "Church's thesis" was introduced by Kleene in the 1940s; "Church-Turing thesis" is the usual name today.

### Why it is a thesis, not a theorem

A theorem is a statement about mathematical objects, proved from axioms. The thesis compares a precise mathematical
notion (Turing machine) with an informal one (algorithm, "what a clerk can do by rule"). You cannot prove an equation
between a definition and an intuition, because the intuition has no definition to reason from. Any "proof" must start
from some assumptions about what algorithms are, and then those assumptions become the real thesis.

One direction is not in doubt: every Turing machine *is* an algorithm, since following its table is purely mechanical.
The content is the other direction, that nothing algorithmic escapes Turing machines. The evidence for it is of three
kinds:

1. **Analysis.** Turing's argument in 13.2 shows that a human following rules with bounded attention and finitely many
   states of mind can be simulated. Later work, notably Robin Gandy's 1980 paper "Church's thesis and principles for
   mechanisms", gave conditions on physical machines (finite speed of signals, bounded local complexity) under which
   they too can be simulated.
2. **Agreement of models.** Every reasonable model ever proposed, from register machines and cellular automata to
   modern programming languages, has turned out to compute exactly the Turing-computable functions (13.5).
3. **No counterexample.** Nobody has found a procedure that everyone accepts as an algorithm but that no Turing machine
   can carry out.

### What the thesis does not say

- It does **not** say that the brain, or the universe, is a Turing machine. That would be a much stronger claim, about
  physics, sometimes called the *physical* Church-Turing thesis, and it is a genuinely open question what physics allows.
- It does **not** say anything about speed. Quantum computers ([Chapter 16](16-Complexity.md)) may be much faster than
  ordinary computers for some problems, such as factoring, but a quantum computer can be simulated by a Turing machine
  (slowly), so it computes no new functions.
- It is **not** used as an axiom inside proofs. When a book says "this function is computable by the Church-Turing
  thesis", it means "I have described an algorithm informally; you could, with patience, write the Turing machine." The
  thesis saves labour. Every negative result ("no Turing machine does X") is a theorem in its own right; the thesis only
  explains why we read it as "no algorithm does X".

In the rest of Part IV we use the thesis in exactly this labour-saving way: to show a function is computable we describe
an algorithm in words or in Python, and trust that it could be translated.

## 13.4 Universal machines

*Level: advanced.*

Each Turing machine above does one job. A modern computer does many jobs, because the program is part of its input.
Turing saw that his machines could do this too, and that one single machine could imitate all the others.

### Machines as strings

A Turing machine is a finite table, so we can write it down as a finite string. One way: number the states $q_0$ (start),
$q_1$ (halt), $q_2, \ldots$ and the symbols $s_0$ (blank), $s_1, s_2, \ldots$; write a transition
$\delta(q_i, s_j) = (s_k, D, q_l)$ as the string `0^i 1 0^j 1 0^k 1 D 1 0^l` with $D$ written as `0` for left and `00`
for right; and join the transitions with `11`. Any reasonable method works. The string that describes $M$ is written
$\langle M \rangle$, and the string describing $M$ together with an input $w$ is $\langle M, w \rangle$.

Two consequences follow at once.

**There are only countably many Turing machines.** Each is described by a finite string over a finite alphabet, and the
finite strings can be listed: all strings of length 0, then length 1, and so on ([Chapter 7](07-Infinity-and-Cardinality.md)).
So we can list all machines as $M_0, M_1, M_2, \ldots$ (strings that do not describe a machine can be treated as
describing some fixed machine that halts at once). The index $e$ in $M_e$ is the machine's **code** or **index**.

**Theorem 13.1.** There are functions from $\mathbb{N}$ to $\{0, 1\}$ that no Turing machine computes.

*Proof.* There are countably many machines, so countably many computable functions. But the set of all functions
$\mathbb{N} \to \{0,1\}$ is uncountable: such a function is the same thing as a subset of $\mathbb{N}$ (the set where it is 1),
and the power set of $\mathbb{N}$ is uncountable by Cantor's theorem ([Chapter 7](07-Infinity-and-Cardinality.md)). So
some, indeed almost all, functions are not computable. $\square$

This proof is honest but unsatisfying: it does not name a single uncomputable function. Chapter 14 names one, using the
same diagonal idea aimed more carefully.

### The universal machine

**Theorem 13.2 (Turing 1936).** There is a Turing machine $U$ such that for every machine $M$ and every input $w$: $U$ on
input $\langle M, w \rangle$ halts if and only if $M$ halts on $w$, and when it halts its output is the same as $M$'s.

*Proof sketch.* It is easiest to build $U$ with three tapes and then use 13.2's simulation to get one tape.

- Tape 1 holds the description $\langle M \rangle$ and never changes.
- Tape 2 holds $M$'s tape, with each of $M$'s symbols $s_j$ written as a block, for example `0^j` padded to a fixed
  width (fixed for this $M$, so $U$ must compute the width from $\langle M \rangle$ first).
- Tape 3 holds $M$'s current state, $q_i$ written as `0^i`.

To simulate one step of $M$, $U$ reads the current state on tape 3 and the block under its head on tape 2, then
scans tape 1 from the start, comparing each transition's $i$ and $j$ with these, until it finds the matching transition.
It copies the new symbol $s_k$ onto tape 2, moves tape 2's head one block left or right, and copies $q_l$ onto tape 3. If
$q_l$ is the halting state, $U$ cleans up tape 2 (decoding blocks back into symbols) and halts. Each of these subtasks
is a simple "compare two strings", "copy a string" or "move by one block", the kind of thing Examples 1 to 3 do. Writing
out every state is long and dull, and Turing's paper famously contained mistakes in the details, later fixed; the full
construction is in Hopcroft, Motwani and Ullman or in Minsky's book (Further reading). $\square$

The universal machine is the mathematical idea behind the stored-program computer: one fixed piece of hardware, with the
program held in memory as data. Your Python interpreter is a universal machine in this sense, and the simulator in 13.2 is
a universal machine written in Python: it takes a table `delta` and a tape and runs any machine.

How small can a universal machine be? Over the years people have built universal Turing machines with only a handful of
states and symbols. Marvin Minsky gave one in 1962 with 7 states and 4 symbols, and since then smaller ones have been
found. Universality is cheap: many very simple systems are universal, as 13.5 shows.

### Counting machines

With a fixed convention one can count machines exactly. Take machines with $n$ working states, alphabet $\{0, 1\}$ (0 is
the blank), and one extra halting state. Each of the $2n$ pairs (state, symbol) needs a transition: 2 choices of symbol
to write, 2 directions, $n + 1$ next states, so $4(n+1)$ choices. That gives

$$
(4n + 4)^{2n}
$$

machines. For $n = 2$ this is $12^4 = 20{,}736$; for $n = 3$ it is $16^6 = 16{,}777{,}216$; for $n = 5$ it is
$24^{10} = 63{,}403{,}380{,}965{,}376$. These numbers come back in 14.6, where people decided, machine by machine, which
5-state machines halt.

## 13.5 Other models and their equivalence

*Level: advanced.*

Turing machines are convenient for proofs about computation, because a step is so simple. They are inconvenient for
actually writing algorithms. Here are two other models, at opposite extremes.

### The lambda calculus

Church's **lambda calculus** has no tape and no states. It has only functions. Its terms are built by three rules:

- a **variable** $x$ is a term;
- if $M$ is a term and $x$ a variable, then $\lambda x.\, M$ is a term (the function that takes $x$ and returns $M$);
- if $M$ and $N$ are terms, then $(M\, N)$ is a term ($M$ applied to $N$).

Computation is a single rule, **beta reduction**: $(\lambda x.\, M)\, N$ reduces to $M$ with $N$ substituted for the free
occurrences of $x$ (renaming bound variables when needed to avoid capture, as in
[Chapter 10](10-First-Order-Logic.md)). A term is in **normal form** when no further reduction is possible; that normal
form is the result. Some terms have none: $\Omega = (\lambda x.\, x\, x)(\lambda x.\, x\, x)$ reduces to itself forever.
That is the lambda calculus version of a machine that never halts.

**Numbers as functions.** Church represented the number $n$ by "apply a function $n$ times":

$$
\overline{0} = \lambda f.\, \lambda x.\, x, \qquad \overline{1} = \lambda f.\, \lambda x.\, f\, x, \qquad \overline{2} = \lambda f.\, \lambda x.\, f\,(f\, x), \quad \ldots
$$

These are the **Church numerals**. Arithmetic becomes composition:

$$
\begin{aligned}
\mathrm{SUCC} &= \lambda n.\, \lambda f.\, \lambda x.\, f\,(n\, f\, x), \\
\mathrm{ADD} &= \lambda m.\, \lambda n.\, \lambda f.\, \lambda x.\, m\, f\,(n\, f\, x), \\
\mathrm{MUL} &= \lambda m.\, \lambda n.\, \lambda f.\, m\,(n\, f).
\end{aligned}
$$

**Worked example: $\mathrm{SUCC}\ \overline{1}$.** Substitute $\overline{1}$ for $n$:
$\lambda f.\, \lambda x.\, f\,(\overline{1}\, f\, x)$. Now $\overline{1}\, f\, x = (\lambda f.\, \lambda x.\, f\, x)\, f\, x$
reduces to $f\, x$. So we get $\lambda f.\, \lambda x.\, f\,(f\, x) = \overline{2}$. Check: one plus one is two.

**Why ADD works.** $n\, f\, x$ applies $f$ to $x$ $n$ times; then $m\, f$ applied to that result applies $f$ another $m$
times, $m + n$ in total. **Why MUL works.** $n\, f$ is the function "apply $f$ $n$ times"; applying *that* $m$ times
applies $f$ $mn$ times.

Python's `lambda` lets you test this directly:

```python
zero = lambda f: lambda x: x
succ = lambda n: lambda f: lambda x: f(n(f)(x))
add  = lambda m: lambda n: lambda f: lambda x: m(f)(n(f)(x))
mul  = lambda m: lambda n: lambda f: m(n(f))
to_int = lambda n: n(lambda k: k + 1)(0)
two, three = succ(succ(zero)), succ(succ(succ(zero)))
print(to_int(add(two)(three)), to_int(mul(two)(three)))   # 5 6
```

Recursion, which looks impossible without names, comes from **fixed-point combinators** such as Curry's
$Y = \lambda f.\, (\lambda x.\, f\,(x\, x))\,(\lambda x.\, f\,(x\, x))$. For any term $F$, $Y F$ reduces to
$F\,(Y F)$, so $Y F$ is a fixed point of $F$: a term that "calls itself". This is the same idea as Kleene's recursion
theorem in [Chapter 15](15-Recursive-Functions-and-Computability.md). The lambda calculus later became the basis of
functional programming languages and of the type theories in [Chapter 19](19-Other-Logics.md).

### Register machines

At the other extreme is a model that looks like a stripped-down computer. A **register machine** (studied by Minsky in
1961 and by Shepherdson and Sturgis in 1963) has finitely many **registers** $r_0, r_1, \ldots$, each holding a natural
number of any size, and a program: a numbered list of instructions of just two kinds.

- `INC r, j`: add 1 to register $r$, then go to instruction $j$.
- `DEC r, j, k`: if $r > 0$, subtract 1 from $r$ and go to $j$; if $r = 0$, go to $k$.

The machine halts when it jumps to an instruction number that does not exist.

**Worked example: addition.** Start with $a$ in $r_0$ and $b$ in $r_1$; finish with $a + b$ in $r_1$.

| line | instruction | meaning |
| --- | --- | --- |
| 0 | DEC r0, 1, 2 | if $r_0 > 0$, take one off and go to line 1; else go to 2 (halt) |
| 1 | INC r1, 0 | add one to $r_1$, back to line 0 |

The loop moves one unit at a time from $r_0$ to $r_1$. With $r_0 = 3$, $r_1 = 4$ it executes 7 instructions (three
DEC-INC pairs and a final DEC that finds 0) and ends with $r_1 = 7$. Check: $3 + 4 = 7$.

Multiplication uses a spare register to restore $b$ after each pass (exercise 7). With a bit more work one shows that
every Turing machine can be simulated by a register machine with only two registers, a striking result of Minsky's, but
the natural simulation uses three: two registers hold the tape to the left and right of the head, written as numbers in
base $|\Gamma|$, and the third is scratch space. Moving the head is dividing one register by $|\Gamma|$ and multiplying
the other by $|\Gamma|$, each of which is a loop of DECs and INCs.

### The equivalence theorem

**Theorem 13.3.** For a partial function $f : \mathbb{N} \to \mathbb{N}$ the following are equivalent:

1. $f$ is Turing computable;
2. $f$ is computable by a register machine;
3. $f$ is lambda-definable (with numbers as Church numerals);
4. $f$ is $\mu$-recursive ([Chapter 15](15-Recursive-Functions-and-Computability.md)).

*Proof idea.* Each implication is a simulation: you show how a machine of one kind can mimic each step of a machine of
the other kind, with numbers or strings coding the configurations. For example, (2) implies (1) because a Turing machine
can keep each register as a block of ones on its tape and carry out INC and DEC by adding or erasing a 1; (1) implies (2)
by the base-$|\Gamma|$ coding just described. The links to lambda terms and recursive functions go through the coding
of configurations by numbers (Gödel numbering, [Chapter 17](17-Arithmetic-and-Peano.md)). Each link is routine but long;
complete proofs are in the books by Cutland and by Sipser listed below. $\square$

### Turing completeness in surprising places

A system that can simulate any Turing machine is called **Turing complete**. Some surprising systems are:

- Conway's **Game of Life**, a grid of cells that live or die by a rule about their eight neighbours; a construction of
  a universal computer inside it is described in Berlekamp, Conway and Guy's *Winning Ways* (1982).
- **Rule 110**, a one-dimensional cellular automaton in which each cell's next value depends only on itself and its two
  neighbours. Matthew Cook published a proof of its universality in 2004.
- Most programming languages, including Python, provided memory is not bounded.

Each of these inherits everything in the next chapter. If a system is Turing complete, no algorithm can predict in
general whether a given starting pattern will ever stop changing, or ever reach some state.

### A short history thread

Turing's 1936 paper did not use the phrase "halting problem"; his machines were meant to print the digits of a real
number forever, and his unsolvable question was whether a given machine prints infinitely many digits (he called such
machines "circle-free"). The modern formulation in terms of halting came later; the name is usually credited to Martin
Davis's 1958 book *Computability and Unsolvability*. After the paper Turing went to Princeton, where he completed a PhD
under Church in 1938. During the Second World War he worked on breaking German ciphers at Bletchley Park, and after the
war he worked on the design of early electronic computers. The idea he introduced in 1936 to answer a question in logic,
a machine that reads its program as data, is the design of the computer you are reading this on.

## Check yourself

??? question "1. Trace the binary increment machine of 13.2 on input `1001`. What is the output and how many steps does it take?"
    The `start` state walks right over the four digits (steps 1 to 4) and onto the blank, then steps back in state
    `carry` (step 5): the head is on the last digit, a 1. `carry` reads 1, writes 0, moves left (step 6). Now it reads 0,
    writes 1 and halts (step 7). The tape reads `1010`. Output `1010` (ten), after 7 steps. Check: nine plus one is ten,
    and the formula $n + t + 2$ with $n = 4$, $t = 1$ gives 7.

??? question "2. What does the binary increment machine do on the empty input (an all-blank tape)? Is that sensible?"
    In state `start` it reads a blank, moves left and enters `carry`; on the next blank it writes 1 and halts. Output `1`
    after 2 steps. If we read the empty string as the numeral for 0, the answer 1 is correct.

??? question "3. Design a Turing machine that replaces every 0 by 1 and every 1 by 0 in a binary string (the bitwise complement) and then halts."
    One working state suffices: `start` reads 0, writes 1, moves R, stays in `start`; reads 1, writes 0, moves R, stays
    in `start`; reads blank, writes blank, moves L (or R), goes to `halt`. On an input of length $n$ it halts after
    $n + 1$ steps. For example `1101` becomes `0010`.

??? question "4. Why does the palindrome machine of 13.2 need separate states `hasA` and `hasB`, instead of one state `walk`?"
    When the machine reaches the right end it must compare the last letter with the first one, but the first letter has
    been erased. The only memory a Turing machine has, apart from the tape, is its current state. So the first letter
    must be remembered in the state: `hasA` means "walking right, and the first letter was $a$". One state `walk` could
    not tell the two cases apart. (An alternative would be to leave a marker on the tape, which uses the tape as memory
    instead.)

??? question "5. Show that the palindrome machine takes exactly $(n+1)(n+2)/2$ steps on the input $a^n$."
    Write $T(n)$ for the number of steps on $a^n$. For $n = 0$: one step (start reads blank, goes to `yes`), and
    $1 \cdot 2/2 = 1$. For $n = 1$: erase (1), step onto the blank (2), step back in `checkA`, which reads blank and says
    yes (3); and $2 \cdot 3/2 = 3$. For $n \ge 2$: erase the first $a$ (1 step), walk right over $n - 1$ letters ($n - 1$
    steps), read the blank and turn (1 step), erase the last $a$ in `checkA` (1 step), walk left in `back` over $n - 2$
    letters ($n - 2$ steps), read the blank and turn right into `start` (1 step). That is $2n + 1$ steps, after which the
    machine is in the same situation with $a^{n-2}$. So $T(n) = T(n - 2) + 2n + 1$. Now check that the formula
    satisfies this: $\frac{(n+1)(n+2)}{2} - \frac{(n-1)n}{2} = \frac{4n + 2}{2} = 2n + 1$. With the two starting values,
    induction on $n$ gives $T(n) = (n+1)(n+2)/2$ for all $n$.

??? question "6. Using the convention of 13.4, how many Turing machines are there with 1 working state, and which of them halt on a blank tape?"
    $(4 \cdot 1 + 4)^{2} = 8^2 = 64$ machines. On a blank tape the machine starts in state $A$ reading 0, so only the
    transition for $(A, 0)$ matters at first. If that transition goes to the halting state (2 symbols times 2 directions
    times this one choice: 4 of the 8 options), the machine halts after 1 step. If it goes back to $A$, the machine moves
    one square in a fixed direction onto another blank and is in exactly the same situation, so it runs forever. So the
    machines that halt on a blank tape are those whose $(A, 0)$ transition goes to halt: $4 \times 8 = 32$ of the 64.

??? question "7. Write a register machine program that multiplies: start with $a$ in $r_0$, $b$ in $r_1$, $r_2 = r_3 = 0$, end with $ab$ in $r_2$."
    Idea: for each unit in $r_0$, move $r_1$ into both $r_2$ and $r_3$, then move $r_3$ back into $r_1$.

    | line | instruction |
    | --- | --- |
    | 0 | DEC r0, 1, 99 |
    | 1 | DEC r1, 2, 4 |
    | 2 | INC r2, 3 |
    | 3 | INC r3, 1 |
    | 4 | DEC r3, 5, 0 |
    | 5 | INC r1, 4 |

    Lines 1 to 3 empty $r_1$, adding $b$ to $r_2$ and copying $b$ into $r_3$; lines 4 and 5 move $r_3$ back into $r_1$
    and return to line 0. This happens $a$ times, then line 0 jumps to 99, which does not exist, so the machine halts with
    $r_2 = ab$ (and $r_1 = b$ restored). Check with $a = 3$, $b = 4$: three passes each add 4, giving 12.

??? question "8. Reduce $\mathrm{ADD}\ \overline{1}\ \overline{1}$ to normal form, and confirm it is $\overline{2}$."
    $\mathrm{ADD}\ \overline{1}\ \overline{1}$ reduces to $\lambda f.\, \lambda x.\, \overline{1}\, f\,(\overline{1}\, f\, x)$.
    Inside, $\overline{1}\, f\, x$ reduces to $f\, x$. Then $\overline{1}\, f\,(f\, x)$ reduces to $f\,(f\, x)$. The
    result is $\lambda f.\, \lambda x.\, f\,(f\, x)$, which is $\overline{2}$.

??? question "9. What number does $\mathrm{MUL}\ \overline{2}\ \overline{3}$ represent, and why? What about the term $\overline{3}\ \overline{2}$ (the numeral 3 applied to the numeral 2)?"
    $\mathrm{MUL}\ \overline{2}\ \overline{3} = \lambda f.\, \overline{2}\,(\overline{3}\, f)$: apply "apply $f$ three
    times" twice, so $f$ is applied 6 times: $\overline{6}$. For $\overline{3}\ \overline{2}$: $\overline{3}\, g$ is
    "apply $g$ three times", and $g = \overline{2}$ turns any function $h$ into $h \circ h$ ("do $h$ twice"), which
    doubles the number of times $f$ is applied. Doubling three times, starting from $f$ itself, gives $f$ applied
    $2^3 = 8$ times, so $\overline{3}\ \overline{2} = \overline{8}$. In general $\overline{n}\ \overline{m} = \overline{m^n}$,
    exponentiation for free. (The Python version: `to_int(three(two))` prints 8.)

??? question "10. Explain why a Turing machine whose head only ever moves right can compute very little. Which sets can such a machine decide?"
    If the head only moves right, the machine reads each input symbol once and never sees anything it has written, so
    the tape cannot serve as memory. Its only memory is its finite set of states. After the input it is reading blanks
    forever, and once in that phase its behaviour is determined by the state alone, so it either halts within $|Q|$ more
    steps or loops forever. Such a machine is exactly a **finite automaton**, and the sets it can decide are the
    **regular languages**. For example, it cannot decide the palindromes over $\{a, b\}$: if it could, with $k$ states,
    then among the $2^{k+1}$ words of length $k + 1$ two different ones, $u \neq v$, would leave it in the same state; then
    it would treat $u u^R$ and $v u^R$ alike, but the first is a palindrome and the second is not.

??? question "11. Theorem 13.1 says most functions $\mathbb{N} \to \{0,1\}$ are uncomputable. Make this precise: if you pick such a function by flipping a fair coin for each value, what is the probability that it is computable?"
    There are countably many computable functions $g_0, g_1, \ldots$. For a fixed $g_e$, the probability that the random
    function agrees with $g_e$ on the first $n$ inputs is $2^{-n}$, so the probability that it equals $g_e$ is 0. A
    countable union of events of probability 0 has probability 0, so the probability that the random function is
    computable is 0. Almost every function is uncomputable, and yet it took Chapter 14 to name one.

## What you learned

- An algorithm is a finite, definite, step-by-step procedure; proving that some problem has *no* algorithm needed a
  precise definition, which Church, Gödel, Kleene, Post and Turing supplied around 1936.
- A Turing machine is a finite table acting on an unbounded tape: read, write, move one square, change state. It can
  add, compare, recognise palindromes and, in principle, do anything a program can.
- The Church-Turing thesis identifies "computable by an algorithm" with "Turing computable". It is supported by analysis
  and overwhelming evidence, but it is a thesis, and it says nothing about speed or about physics.
- Machines can be coded as strings, so there are countably many, and therefore most functions are uncomputable.
- A single universal machine runs every other machine from its description: the idea of the stored program.
- The lambda calculus, register machines, recursive functions, Rule 110 and ordinary programming languages all compute
  exactly the same functions.

**Next:** [Chapter 14](14-Undecidability.md), which uses the universal machine and a diagonal argument to prove that
some precisely stated problems, starting with the halting problem, have no algorithm at all.

## Further reading

- A. M. Turing, "On computable numbers, with an application to the Entscheidungsproblem", *Proceedings of the London
  Mathematical Society*, series 2, vol. 42, 1936-37.
- A. Church, "An unsolvable problem of elementary number theory", *American Journal of Mathematics* 58, 1936.
- E. L. Post, "Finite combinatory processes, formulation 1", *Journal of Symbolic Logic* 1, 1936.
- R. Gandy, "Church's thesis and principles for mechanisms", in *The Kleene Symposium*, North-Holland, 1980.
- M. Minsky, *Computation: Finite and Infinite Machines*, Prentice-Hall, 1967.
- N. Cutland, *Computability: An Introduction to Recursive Function Theory*, Cambridge University Press, 1980.
- M. Sipser, *Introduction to the Theory of Computation*, 3rd edition, Cengage, 2012.
- J. E. Hopcroft, R. Motwani and J. D. Ullman, *Introduction to Automata Theory, Languages, and Computation*, 3rd edition,
  Pearson, 2006.
- C. Petzold, *The Annotated Turing*, Wiley, 2008 (Turing's paper read line by line).
- M. Cook, "Universality in elementary cellular automata", *Complex Systems* 15, 2004.
- On this site: Topics lessons [robot steps](../../topics/logic/level-1/05-robot-steps.md),
  [coding with loops](../../topics/logic/level-3/04-coding-with-loops.md),
  [algorithms and flowcharts](../../topics/logic/level-6/03-algorithms-flowcharts.md) and
  [Turing and the halting problem](../../topics/logic/level-8/05-halting-problem.md); U of T guides
  [CSC108H1 Unit 2, Control Flow](../../uoft/CSC108H1/unit02.md) and
  [CSC148H1 Unit 5, Recursion](../../uoft/CSC148H1/unit05.md); Euclid's algorithm in the
  [Number theory book, Chapter 3](../number-theory/03-GCD-and-Euclids-Algorithm.md); the
  [book index](index.md).
