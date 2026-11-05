---
title: "Logic gates"
---

# Logic gates

*Logic and puzzles · level 6, lesson 1 of 6*

## A question to start

Deep inside a phone or a laptop there are billions of tiny switches called transistors. Each one can only be **on**
or **off**. A switch does not know what a number is. It cannot count, it cannot read, it cannot "add".

And yet the same machine adds $1{,}234{,}567 + 7{,}654{,}321$ in a tiny fraction of a second, and gets it right every
time. How can a heap of on-off switches **add**?

The answer is one of the great surprises of the last century: adding is **logic**. The *and*, *or* and *not* you have
used since level 3 can be built out of switches, and once you have them, you can build arithmetic. This lesson builds
a small machine that adds two binary digits, using nothing but logic.

## The idea

### True and false become 1 and 0

In a circuit, a wire either carries a voltage or it does not. We write **1** for on (true) and **0** for off (false).
A single 1 or 0 is called a **bit** (short for *binary digit*). Every truth table from levels 4 and 5 can be rewritten
with 1 for T and 0 for F.

A **logic gate** is a small circuit with one or two input wires and one output wire. The output depends only on the
inputs, following a fixed truth table. Each gate has a standard symbol:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 450 90" role="img" aria-label="The symbols for the gates AND, OR, NOT, XOR and NAND">
  <g stroke="currentColor" stroke-width="1.5">
    <g transform="translate(5,15)">
      <line x1="0" y1="12" x2="20" y2="12"/><line x1="0" y1="28" x2="20" y2="28"/>
      <path d="M 20 0 H 40 A 20 20 0 0 1 40 40 H 20 Z" fill="#eea66f"/>
      <line x1="60" y1="20" x2="75" y2="20"/>
    </g>
    <g transform="translate(95,15)">
      <line x1="0" y1="12" x2="23" y2="12"/><line x1="0" y1="28" x2="23" y2="28"/>
      <path d="M 18 0 Q 30 20 18 40 Q 48 40 62 20 Q 48 0 18 0 Z" fill="#9cc9ea"/>
      <line x1="62" y1="20" x2="75" y2="20"/>
    </g>
    <g transform="translate(185,15)">
      <line x1="0" y1="20" x2="20" y2="20"/>
      <path d="M 20 4 L 50 20 L 20 36 Z" fill="#7ccf9a"/>
      <circle cx="54" cy="20" r="4" fill="none"/>
      <line x1="58" y1="20" x2="75" y2="20"/>
    </g>
    <g transform="translate(270,15)">
      <line x1="0" y1="12" x2="21" y2="12"/><line x1="0" y1="28" x2="21" y2="28"/>
      <path d="M 16 0 Q 28 20 16 40" fill="none"/>
      <path d="M 24 0 Q 36 20 24 40 Q 54 40 68 20 Q 54 0 24 0 Z" fill="#9cc9ea"/>
      <line x1="68" y1="20" x2="80" y2="20"/>
    </g>
    <g transform="translate(365,15)">
      <line x1="0" y1="12" x2="20" y2="12"/><line x1="0" y1="28" x2="20" y2="28"/>
      <path d="M 20 0 H 40 A 20 20 0 0 1 40 40 H 20 Z" fill="#eea66f"/>
      <circle cx="64" cy="20" r="4" fill="none"/>
      <line x1="68" y1="20" x2="80" y2="20"/>
    </g>
  </g>
  <g font-size="13" text-anchor="middle" fill="currentColor">
    <text x="42" y="80">AND</text><text x="132" y="80">OR</text><text x="222" y="80">NOT</text>
    <text x="310" y="80">XOR</text><text x="405" y="80">NAND</text>
  </g>
</svg>
</div>

Inputs come in on the left, the output leaves on the right. The small circle on NOT and NAND means "then flip it".

### The five gates and their tables

With inputs $A$ and $B$:

| $A$ | $B$ | AND | OR | XOR | NAND |
| --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 | 1 | 1 |
| 1 | 1 | 1 | 1 | 0 | 0 |

and NOT has one input: NOT 0 = 1, NOT 1 = 0.

- **AND** outputs 1 only when **both** inputs are 1. It is $A \land B$.
- **OR** outputs 1 when **at least one** input is 1. It is $A \lor B$, the "one or both" *or*.
- **NOT** flips its input. It is $\neg A$.
- **XOR** ("exclusive or") outputs 1 when **exactly one** input is 1: "one or the other, but not both". It is the
  *or* of a menu ("soup or salad"), and it also means "the inputs are **different**".
- **NAND** ("not and") is AND followed by NOT: it outputs 0 only when both inputs are 1.

### Why switches give AND and OR

Picture a battery, a lamp and two switches $A$ and $B$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 -15 440 165" role="img" aria-label="Left: two switches one after the other in a single path to a lamp, which is AND. Right: two switches side by side on two paths to a lamp, which is OR">
  <g stroke="currentColor" stroke-width="2" fill="none">
    <path d="M 20 40 H 60"/><path d="M 60 40 L 90 28"/><path d="M 95 40 H 120"/>
    <path d="M 120 40 L 150 28"/><path d="M 155 40 H 180"/>
    <path d="M 20 40 V 110 H 180 V 85"/>
    <circle cx="180" cy="70" r="15" fill="#eea66f"/>
    <path d="M 180 40 V 55"/>
    <path d="M 240 30 H 270"/><path d="M 270 30 V 15 H 300"/><path d="M 300 15 L 330 3"/><path d="M 335 15 H 365 V 30"/>
    <path d="M 270 30 V 45 H 300"/><path d="M 300 45 L 330 33"/><path d="M 335 45 H 365 V 30"/>
    <path d="M 365 30 H 400 V 55"/>
    <circle cx="400" cy="70" r="15" fill="#eea66f"/>
    <path d="M 400 85 V 110 H 240 V 30"/>
  </g>
  <g fill="currentColor"><circle cx="60" cy="40" r="3"/><circle cx="95" cy="40" r="3"/><circle cx="120" cy="40" r="3"/><circle cx="155" cy="40" r="3"/>
  <circle cx="300" cy="15" r="3"/><circle cx="335" cy="15" r="3"/><circle cx="300" cy="45" r="3"/><circle cx="335" cy="45" r="3"/></g>
  <g font-size="13" text-anchor="middle" fill="currentColor">
    <text x="77" y="22">A</text><text x="137" y="22">B</text><text x="318" y="62">B</text><text x="318" y="-5">A</text>
    <text x="100" y="138">in a row (series): AND</text><text x="320" y="138">side by side (parallel): OR</text>
  </g>
</svg>
</div>

- **In a row** (in *series*): the current must pass through $A$ **and** then through $B$. The lamp lights only if
  both switches are closed. That is AND.
- **Side by side** (in *parallel*): the current can take the top path **or** the bottom path. The lamp lights if at
  least one switch is closed. That is OR.

In a chip, the switches are transistors, and a transistor can also be wired to give NOT (on in, off out). So the logic
of *and*, *or*, *not* is something you can literally build.

### Circuits

Gates can be joined: the output of one becomes an input of another. A diagram of joined gates is a **circuit**, and
every circuit has a truth table. To find it, label every wire, and fill in the table one column per wire, working
from the inputs towards the output. That is exactly how you built truth tables for long statements in level 4.

### Adding in binary

Computers store numbers in **binary** (base 2), which uses only the digits 0 and 1 ([Numbers level
5](../../numbers/level-5/07-other-bases.md)). Adding two single binary digits has only four cases:

$$0 + 0 = 0, \qquad 0 + 1 = 1, \qquad 1 + 0 = 1, \qquad 1 + 1 = 10_2.$$

The last one is "two", written $10$ in binary: a 0 in the ones place and a **carry** of 1 into the twos place, just
as $5 + 7 = 12$ in base 10 writes 2 and carries 1. So adding two bits gives **two** output bits: a **sum** bit $S$
and a **carry** bit $C$.

| $A$ | $B$ | $C$ (carry) | $S$ (sum) |
| --- | --- | --- | --- |
| 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 0 |

Now look at the columns. The carry column is 0, 0, 0, 1: that is exactly **AND**. The sum column is 0, 1, 1, 0: that
is exactly **XOR**. So:

$$S = A \text{ XOR } B, \qquad C = A \text{ AND } B.$$

### The half adder

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 150" role="img" aria-label="A half adder: inputs A and B both go into an XOR gate giving the sum S and into an AND gate giving the carry C">
  <g stroke="currentColor" stroke-width="1.5" fill="none">
    <line x1="30" y1="24" x2="140" y2="24"/>
    <line x1="100" y1="24" x2="100" y2="112"/>
    <line x1="100" y1="112" x2="140" y2="112"/>
    <line x1="30" y1="40" x2="140" y2="40"/>
    <line x1="65" y1="40" x2="65" y2="128"/>
    <line x1="65" y1="128" x2="140" y2="128"/>
    <g transform="translate(140,12)">
      <line x1="0" y1="12" x2="21" y2="12"/><line x1="0" y1="28" x2="21" y2="28"/>
      <path d="M 16 0 Q 28 20 16 40"/>
      <path d="M 24 0 Q 36 20 24 40 Q 54 40 68 20 Q 54 0 24 0 Z" fill="#9cc9ea"/>
      <line x1="68" y1="20" x2="85" y2="20"/>
    </g>
    <g transform="translate(140,100)">
      <line x1="0" y1="12" x2="20" y2="12"/><line x1="0" y1="28" x2="20" y2="28"/>
      <path d="M 20 0 H 40 A 20 20 0 0 1 40 40 H 20 Z" fill="#eea66f"/>
      <line x1="60" y1="20" x2="85" y2="20"/>
    </g>
  </g>
  <g fill="currentColor"><circle cx="100" cy="24" r="3"/><circle cx="65" cy="40" r="3"/></g>
  <g font-size="14" fill="currentColor">
    <text x="12" y="29">A</text><text x="12" y="45">B</text>
    <text x="232" y="37">S (sum)</text><text x="232" y="125">C (carry)</text>
  </g>
</svg>
</div>

This circuit is called a **half adder**. Each input wire splits (the dots mark the joins; the place where two wires
cross without a dot is not a join) and feeds both gates. Feed in $A = 1$, $B = 1$: the XOR gives 0 and the AND gives 1,
so the output reads $C S = 10$, which is two. The machine has added, using only logic.

It is called "half" because it cannot accept a carry coming in from the column to its right. A **full adder** takes
three bits (the two digits and the incoming carry) and is built from two half adders and an OR gate. Line up 64 full
adders, each passing its carry to the next, and you can add 64-bit numbers. That is, in outline, how a processor adds.

<figure class="play" data-play="truth"><span class="ai-tag">AI-created</span><figcaption><b>Lamps as gates.</b> Gold means on. Each connective is a gate wired from P and Q.</figcaption></figure>

## Worked examples

**1. Reading the tables.** What does each gate output for $A = 1$, $B = 0$? AND: 0. OR: 1. XOR: 1 (they differ).
NAND: 1 (since AND gave 0). NOT $A$: 0.

**2. A circuit's truth table.** Find the table for $X = (A \text{ AND } B) \text{ OR } (\text{NOT } C)$.

Label the inner wires $P = A$ AND $B$ and $Q =$ NOT $C$; then $X = P$ OR $Q$.

| $A$ | $B$ | $C$ | $P$ | $Q$ | $X$ |
| --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 1 | 1 |
| 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 1 | 1 |
| 1 | 0 | 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 1 | 1 | 0 | 1 |

In words: the output is 1 when $C$ is off, or when $A$ and $B$ are both on.

**3. Building XOR from the basic three.** XOR means "at least one, but not both". "At least one" is $A$ OR $B$; "not
both" is NOT ($A$ AND $B$). Join them with AND:

$$A \text{ XOR } B = (A \text{ OR } B) \text{ AND } \text{NOT}(A \text{ AND } B).$$

Check row by row: for 1, 1 the OR gives 1 but NOT(AND) gives 0, so the result is 0. ✓ For 0, 0 the OR gives 0, result
0. ✓ For 0, 1 and 1, 0 the OR gives 1 and NOT(AND) gives 1, result 1. ✓

**4. A door alarm.** An alarm should ring ($R = 1$) if the system is armed ($M = 1$) and either the door ($D$) or
the window ($W$) is open. The circuit is $R = M$ AND ($D$ OR $W$). With $M = 1$, $D = 0$, $W = 1$: $D$ OR $W$ = 1,
then $M$ AND 1 = 1. The alarm rings. With $M = 0$ it never rings, whatever is open.

**5. Adding two-bit numbers.** Add $11_2 + 01_2$ (that is $3 + 1$) column by column, like a circuit.

- Ones column: $1 + 1$. Half adder: sum 0, carry 1.
- Twos column: $1 + 0$ plus the carry 1. That is three bits, $1 + 0 + 1 = 10_2$: sum 0, carry 1.
- The final carry becomes the fours digit.

Answer: $100_2 = 4$. ✓ The second column needed a **full** adder, because it had a carry coming in.

## Try it

1. Give the output of AND, OR, XOR and NAND when both inputs are 0.
2. Which gate has the output column 1, 1, 1, 0 (inputs in the order 00, 01, 10, 11)? Which has 1, 0, 0, 1?
3. Make the truth table for NOT ($A$ OR $B$). This gate is called **NOR**. Compare it with (NOT $A$) AND (NOT $B$).
   What law from level 5 is this?
4. Find the truth table of $(A \text{ OR } B) \text{ AND } (\text{NOT } C)$.
5. A car beeps if the engine is on and a seat belt is not fastened. Write the circuit using $E$ (engine on) and $F$
   (belt fastened).
6. What does a half adder output for $A = 0$, $B = 1$? Explain why this is right.
7. Add $101_2 + 011_2$ in binary, column by column, writing the sum bit and carry of each column. Check in base 10.
8. Explain why two switches in parallel act as OR. What would three switches in a row act as?

??? note "Answers"
    1. AND 0, OR 0, XOR 0, NAND 1.
    2. 1, 1, 1, 0 is **NAND**. 1, 0, 0, 1 is "the inputs are **equal**": NOT XOR (often called XNOR), the gate
       version of "if and only if".
    3. NOR: 00 gives 1, 01 gives 0, 10 gives 0, 11 gives 0. (NOT $A$) AND (NOT $B$) is 1 only when both inputs are 0:
       the same column 1, 0, 0, 0. This is **De Morgan's law**, $\neg(A \lor B) \equiv \neg A \land \neg B$
       ([level 5](../level-5/03-de-morgan.md)).
    4. The output is 1 exactly when $C = 0$ and at least one of $A$, $B$ is 1. Going through
       $ABC$ = 000, 001, 010, 011, 100, 101, 110, 111 the outputs are 0, 0, 1, 0, 1, 0, 1, 0.
    5. Beep $= E$ AND (NOT $F$).
    6. $S$ = 0 XOR 1 = 1, $C$ = 0 AND 1 = 0. Output $CS = 01$, which is one. Right, since $0 + 1 = 1$.
    7. Ones: $1 + 1 = 10_2$, sum 0 carry 1. Twos: $0 + 1 + 1 = 10_2$, sum 0 carry 1. Fours: $1 + 0 + 1 = 10_2$, sum 0
       carry 1. The last carry is the eights digit: $1000_2 = 8$. Check: $101_2 = 5$, $011_2 = 3$, and $5 + 3 = 8$. ✓
    8. Current reaches the lamp along either path, so one closed switch is enough: at least one closed means on,
       which is OR. Three in a row need all three closed: a three-input AND.

## Common mistake

**Using OR when you mean XOR.** The gate OR, like the logical *or*, includes "both". If the output must be 1 for
"exactly one", you need XOR. The sum bit of an adder is XOR, not OR: with OR, $1 + 1$ would give sum 1, which is wrong.

**Reading a circuit in the wrong order.** Work from the inputs to the output, one gate at a time, writing every
middle wire as its own column. Skipping straight to the output is where errors creep in.

## Where it leads

- Back to [Level 5: fallacies](../level-5/06-fallacies.md) · Next: [Boolean algebra](02-boolean-algebra.md), the
  algebra that simplifies circuits and builds every gate from NAND alone.
- [Level 6 page](index.md) · [Logic topic page](../index.md)
- Binary numbers: [Numbers level 5](../../numbers/level-5/07-other-bases.md). XOR is also the heart of many secret
  codes: see [cryptography.akadian.ca](https://cryptography.akadian.ca/).
- On the U of T shelf, how computers store numbers in bits: [CSC108 unit 10](../../../uoft/CSC108H1/unit10.md);
  real current and circuits are physics: [PHY132 unit 4](../../../uoft/PHY132H1/unit04.md).
