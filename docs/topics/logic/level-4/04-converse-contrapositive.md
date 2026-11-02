---
title: "Converse, inverse and contrapositive"
---

# Converse, inverse and contrapositive

*Logic and puzzles · level 4, lesson 4 of 6*

## A question to start

Here is a true statement: **"If a shape is a square, then it has four equal sides."**

Here are three ways to twist it. Which of them are still true?

1. "If a shape has four equal sides, then it is a square."
2. "If a shape is not a square, then it does not have four equal sides."
3. "If a shape does not have four equal sides, then it is not a square."

Think about a diamond shape, a **rhombus**: four equal sides, but corners that are not right angles.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 130" role="img" aria-label="A square with four equal sides, and a rhombus (a slanted diamond) with four equal sides that is not a square">
  <rect x="30" y="20" width="90" height="90" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="2"/>
  <polygon points="170,110 260,110 302,30 212,30" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="2">
    <line x1="75" y1="15" x2="75" y2="25"/><line x1="75" y1="105" x2="75" y2="115"/>
    <line x1="25" y1="65" x2="35" y2="65"/><line x1="115" y1="65" x2="125" y2="65"/>
    <line x1="215" y1="105" x2="215" y2="115"/><line x1="257" y1="25" x2="257" y2="35"/>
    <line x1="186.6" y1="67.7" x2="195.4" y2="72.3"/><line x1="276.6" y1="67.7" x2="285.4" y2="72.3"/>
  </g>
  <g font-size="13" text-anchor="middle" fill="currentColor">
    <text x="75" y="70">square</text>
    <text x="236" y="75">rhombus</text>
  </g>
</svg>
</div>

The rhombus breaks the first twist and the second. Only the third is always true. This lesson explains why the third
one **must** be true whenever the original is, and why the other two can fail. The three twists have names:
the **converse**, the **inverse** and the **contrapositive**.

## The idea

### Three relatives of $p \to q$

Start with a conditional $p \to q$. Swapping the parts, adding nots, or both, gives three relatives.

| Name | Symbols | How to make it | Square example |
| --- | --- | --- | --- |
| original | $p \to q$ | | If square, then four equal sides. |
| **converse** | $q \to p$ | swap | If four equal sides, then square. |
| **inverse** | $\neg p \to \neg q$ | add "not" to both | If not square, then not four equal sides. |
| **contrapositive** | $\neg q \to \neg p$ | swap **and** add "not" to both | If not four equal sides, then not square. |

### Which ones mean the same? A truth table

| $p$ | $q$ | $p \to q$ | $q \to p$ | $\neg p \to \neg q$ | $\neg q \to \neg p$ |
| --- | --- | --- | --- | --- | --- |
| T | T | T | T | T | T |
| T | F | **F** | T | T | **F** |
| F | T | T | **F** | **F** | T |
| F | F | T | T | T | T |

Read the columns:

- The **contrapositive** has exactly the same column as the original: T F T T. They are **logically equivalent**.
- The **converse** and the **inverse** have the same column as **each other** (T T F T), but not as the original.

So: **a statement always means the same as its contrapositive**. Its converse may be true or false, whatever the
original is. And the converse and inverse always stand or fall together (in fact, the inverse is the contrapositive of
the converse).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 200" role="img" aria-label="A square diagram: original at top left, converse at top right, inverse at bottom left, contrapositive at bottom right. The diagonal from original to contrapositive and the diagonal from converse to inverse are marked as meaning the same.">
  <g stroke="currentColor" stroke-width="1.5">
    <rect x="15" y="15" width="150" height="50" rx="8" fill="#9cc9ea"/>
    <rect x="255" y="15" width="150" height="50" rx="8" fill="#eea66f"/>
    <rect x="15" y="135" width="150" height="50" rx="8" fill="#eea66f"/>
    <rect x="255" y="135" width="150" height="50" rx="8" fill="#9cc9ea"/>
    <line x1="165" y1="40" x2="255" y2="40" stroke-dasharray="5 4"/>
    <line x1="90" y1="65" x2="90" y2="135" stroke-dasharray="5 4"/>
    <line x1="165" y1="65" x2="255" y2="135" stroke-width="3"/>
    <line x1="255" y1="65" x2="165" y2="135" stroke-width="3"/>
  </g>
  <g font-size="14" text-anchor="middle" fill="currentColor">
    <text x="90" y="37">original</text>
    <text x="90" y="56">p → q</text>
    <text x="330" y="37">converse</text>
    <text x="330" y="56">q → p</text>
    <text x="90" y="157">inverse</text>
    <text x="90" y="176">¬p → ¬q</text>
    <text x="330" y="157">contrapositive</text>
    <text x="330" y="176">¬q → ¬p</text>
  </g>
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <text x="210" y="32">swap</text>
    <text x="50" y="104">add nots</text>
  </g>
</svg>
</div>

The thick diagonals join statements that always mean the same.

### Why the contrapositive must be true: a reason in words

Suppose $p \to q$ is true. We want to show $\neg q \to \neg p$: whenever $q$ is false, $p$ is false too.

So suppose $q$ is false. Could $p$ be true? If it were, then by $p \to q$, $q$ would be true. But $q$ is false. That is
impossible. So $p$ is not true: $\neg p$. Done.

This is the dry-ground reasoning from [level 3](../level-3/02-if-then.md): "if it rained, the ground would be wet; the
ground is dry; so it did not rain".

### A picture: one circle inside another

Think of $p \to q$ as "everything in the $p$ circle is inside the $q$ circle". For "if square, then four equal sides",
the circle of squares sits inside the circle of shapes with four equal sides.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 200" role="img" aria-label="A large circle labelled four equal sides containing a smaller circle labelled square. A point marked rhombus is in the large circle but outside the small one; a point marked triangle is outside both.">
  <rect x="10" y="10" width="340" height="180" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="160" cy="100" r="80" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="140" cy="110" r="38" fill="#eea66f" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="200" cy="65" r="4" fill="currentColor"/>
  <circle cx="300" cy="150" r="4" fill="currentColor"/>
  <g font-size="13" text-anchor="middle" fill="currentColor">
    <text x="140" y="114">square</text>
    <text x="160" y="40">four equal sides</text>
    <text x="215" y="85">rhombus</text>
    <text x="300" y="140">triangle</text>
  </g>
</svg>
</div>

- **Contrapositive:** if you are **outside** the big circle, you are certainly outside the small one inside it. True.
- **Converse:** if you are **inside** the big circle, are you inside the small one? Not necessarily: the rhombus is in
  the big circle but not the small one. False.
- **Inverse:** if you are outside the small circle, are you outside the big one? Not necessarily: the rhombus again.
  False.

### When the converse is true too

Sometimes a statement **and** its converse are both true. Then the statement is a biconditional, an "if and only if"
(from [the last lesson](03-conditional-promise.md)). Each direction needs its own reason, so proving one never proves
the other.

## Worked examples

**1. Numbers.** Original: "If a whole number ends in 0, then it is even." (True.)

- Converse: "If a whole number is even, then it ends in 0." **False**: 4.
- Inverse: "If a whole number does not end in 0, then it is not even." **False**: 4 again (it does not end in 0, but
  it is even). One example breaks both, as the table promised.
- Contrapositive: "If a whole number is not even, then it does not end in 0." **True**, just like the original.

**2. Geometry: crossing lines.** Original: "If two angles are vertically opposite, then they are equal." This is true
(see [Geometry: vertically opposite angles](../../geometry/level-4/02-vertically-opposite.md)).

- Converse: "If two angles are equal, then they are vertically opposite." **False**: two corners of a square are both
  90 degrees but are not opposite angles at a crossing.
- Contrapositive: "If two angles are not equal, then they are not vertically opposite." **True**.

**3. Geometry: a true converse.** Original: "If a triangle has a right angle, then the square on its longest side equals
the sum of the squares on the other two." (Pythagoras' theorem.) Its converse, "If the square on the longest side
equals the sum of the squares on the other two, then the triangle has a right angle", is **also true**. Builders use it:
a triangle with sides 3, 4 and 5 has $9 + 16 = 25$, so it has a right angle, and marking 3, 4 and 5 units with a tape
measure is a quick way to check a square corner. So this is an "if and only if".

**4. Using the contrapositive to make a proof easy.** Show: "For a whole number $n$, if $n \times n$ is odd, then $n$
is odd."

Directly, this is awkward: knowing $n \times n$ is odd, how do we get at $n$? Use the contrapositive instead: "If $n$
is **not** odd (so $n$ is even), then $n \times n$ is **not** odd (so it is even)." That is easy: an even number is
$2 \times k$, so $n \times n = 2 \times (k \times n)$, which is even. Since the contrapositive is true, so is the
original. Mathematicians use this trick all the time; it is called **proof by contrapositive** and has its own lesson
in [level 7](../level-7/index.md).

## Try it

1. Write the converse, inverse and contrapositive of "If it is snowing, then it is cold."
2. Which of your four statements in question 1 are certainly true (given the original is)? Which could fail? Give a
   situation where one fails.
3. Original: "If a number is a multiple of 6, then it is a multiple of 3." Write its converse and decide if it is
   true.
4. Original: "If a quadrilateral is a rectangle, then its diagonals are equal in length." Write the contrapositive.
5. True or false, and why: "If a statement is false, then its converse is false."
6. A rule says: "If you have a library card, you can borrow books." Lily says: "I don't have a card, so I can't
   borrow books." Which relative of the rule is Lily using? Is her reasoning safe?
7. Show with a truth table that the converse and the inverse of $p \to q$ are equivalent to each other.
8. Use the contrapositive to show: "If $n + 5$ is even, then $n$ is odd."

??? note "Answers"
    1. Converse: "If it is cold, then it is snowing." Inverse: "If it is not snowing, then it is not cold."
       Contrapositive: "If it is not cold, then it is not snowing."
    2. The **contrapositive** is certainly true, along with the original. The **converse** and **inverse** can fail:
       on a cold, clear winter day it is cold but not snowing, which breaks both.
    3. Converse: "If a number is a multiple of 3, then it is a multiple of 6." **False**: 9 (or 3, or 15).
    4. "If a quadrilateral's diagonals are **not** equal in length, then it is **not** a rectangle."
    5. **False.** The converse can be true even when the original is false. Original: "If a number is a multiple of 3,
       then it is a multiple of 6" is false (9). Its converse, "If a multiple of 6, then a multiple of 3", is true.
    6. Lily is using the **inverse**: "If you do not have a card, you cannot borrow." That is **not** safe: the rule
       never said a card is the **only** way. (Maybe a teacher can borrow for her.)
    7. Converse $q \to p$: false only when $q$ is T and $p$ is F, which is row FT. So it reads T T F T. Inverse
       $\neg p \to \neg q$: false only when $\neg p$ is T and $\neg q$ is F, that is $p$ F and $q$ T, row FT again. It
       also reads T T F T. Same column, so they are equivalent.
    8. The contrapositive is: "If $n$ is **not** odd (so $n$ is even), then $n + 5$ is **not** even (so it is odd)."
       That is true: an even number plus 5 is odd (even plus even is even, then one more makes it odd; $5 = 4 + 1$).
       Since the contrapositive is true, the original is true.

## Common mistake

**Believing the converse.** This is the most common mistake in all of logic. "All dogs have four legs" does not mean
"all four-legged animals are dogs". Adverts use it on purpose: "Healthy people eat Crunchy-O's" tempts you to think
"if I eat Crunchy-O's, I will be healthy", which is a converse and has not been shown at all.

**Making a contrapositive with only one change.** The contrapositive needs **both** changes: swap the parts **and**
negate both. Swapping alone is the converse; negating alone is the inverse.

## Where it leads

- Back: [The conditional](03-conditional-promise.md) · Next: [Coding with conditions](05-coding-conditions.md).
- [Level 4 page](index.md) · [Logic topic page](../index.md)
- The circle-inside-a-circle picture becomes **subsets** in [level 5](../level-5/index.md), where believing the converse
  appears again as the fallacy of "affirming the consequent".
- Pythagoras and its converse: [Geometry](../../geometry/index.md).
- Proof by contrapositive, done properly: [level 7](../level-7/index.md).
