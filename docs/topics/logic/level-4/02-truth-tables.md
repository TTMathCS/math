---
title: "Truth tables"
---

# Truth tables

*Logic and puzzles · level 4, lesson 2 of 6*

## A question to start

Here are two ways to describe a dry, calm day:

- "It is **not** the case that it is rainy **or** windy."
- "It is **not** rainy **and** it is **not** windy."

Do they always mean the same thing, on every possible day? You could argue about it with words for a long time. Or
you could check **every** kind of day there could be. With two things (rainy or not, windy or not) there are only four
kinds of day, so you can check them all in a minute.

That is what a **truth table** does. It is a short, complete list of every possible case, and it settles questions like
this one for certain. By the end of the lesson you will be able to build one for any statement made with $\neg$,
$\land$ and $\lor$, even with three letters and eight cases.

## The idea

### One row for each possible case

Each letter in a statement can be T or F. A **row** of a truth table is one choice of T or F for every letter. The
table has one row for each possible choice, so that **no case is left out**.

- One letter, $p$: 2 rows (T, F).
- Two letters, $p$ and $q$: each of the 2 choices for $p$ goes with each of the 2 choices for $q$: $2 \times 2 = 4$
  rows.
- Three letters: $2 \times 2 \times 2 = 8$ rows.

A tree shows why the number doubles with each new letter. Each branch splits in two.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 190" role="img" aria-label="A tree of choices: p is T or F, each splits into q T or F, each splits into r T or F, giving 8 rows">
<g stroke="currentColor" stroke-width="1.3">
  <line x1="20" y1="95" x2="100" y2="50"/>
  <line x1="20" y1="95" x2="100" y2="140"/>
  <line x1="140" y1="50" x2="210" y2="27"/>
  <line x1="140" y1="50" x2="210" y2="73"/>
  <line x1="140" y1="140" x2="210" y2="117"/>
  <line x1="140" y1="140" x2="210" y2="163"/>
  <line x1="250" y1="27" x2="320" y2="15"/>
  <line x1="250" y1="27" x2="320" y2="39"/>
  <line x1="250" y1="73" x2="320" y2="61"/>
  <line x1="250" y1="73" x2="320" y2="85"/>
  <line x1="250" y1="117" x2="320" y2="105"/>
  <line x1="250" y1="117" x2="320" y2="129"/>
  <line x1="250" y1="163" x2="320" y2="151"/>
  <line x1="250" y1="163" x2="320" y2="175"/>
</g>
<circle cx="16" cy="95" r="5" fill="#eea66f" stroke="currentColor"/>
<g font-size="13" fill="currentColor">
  <text x="112" y="54">p T</text>
  <text x="112" y="144">p F</text>
  <text x="222" y="31">q T</text>
  <text x="222" y="77">q F</text>
  <text x="222" y="121">q T</text>
  <text x="222" y="167">q F</text>
  <text x="332" y="19">r T</text>
  <text x="332" y="43">r F</text>
  <text x="332" y="65">r T</text>
  <text x="332" y="89">r F</text>
  <text x="332" y="109">r T</text>
  <text x="332" y="133">r F</text>
  <text x="332" y="155">r T</text>
  <text x="332" y="179">r F</text>
  <text x="380" y="19">row 1</text>
  <text x="380" y="43">row 2</text>
  <text x="380" y="65">row 3</text>
  <text x="380" y="89">row 4</text>
  <text x="380" y="109">row 5</text>
  <text x="380" y="133">row 6</text>
  <text x="380" y="155">row 7</text>
  <text x="380" y="179">row 8</text>
</g>
</svg>
</div>

With $n$ letters there are $2^n$ rows: 16 for four letters, 32 for five, and 1024 for ten. (Powers of 2 are in
[Numbers](../../numbers/index.md).)

### A standard order

To be sure you have every row exactly once, write them in the same order every time. Read the tree from top to bottom:

- The **first** letter's column: half T, then half F. (For three letters: T T T T F F F F.)
- The **second** letter: halves of that: T T F F T T F F.
- The **last** letter: T F T F T F T F, changing every row.

If you count T as 1 and F as 0, the rows count down in binary from 111 to 000. That is a neat check: no row repeated,
none missed.

### Build it one column at a time

To find the truth table of a big statement, break it into pieces, smallest first, and give each piece its own column.
Work out each column from earlier columns using the rules from [lesson 1](01-statements-letters.md):

- $\neg$: flip.
- $\land$: T only if both are T.
- $\lor$: F only if both are F.

**Example: the question to start.** Let $p$: "rainy" and $q$: "windy". We compare $\neg(p \lor q)$ with
$\neg p \land \neg q$.

| $p$ | $q$ | $p \lor q$ | $\neg(p \lor q)$ | $\neg p$ | $\neg q$ | $\neg p \land \neg q$ |
| --- | --- | --- | --- | --- | --- | --- |
| T | T | T | **F** | F | F | **F** |
| T | F | T | **F** | F | T | **F** |
| F | T | T | **F** | T | F | **F** |
| F | F | F | **T** | T | T | **T** |

The two bold columns agree in **every** row. So in every possible kind of day, the two sentences are both true or both
false. They say the same thing.

### Logically equivalent

Two statements whose truth tables agree in every row are called **logically equivalent**. We write $\equiv$:

$$\neg(p \lor q) \equiv \neg p \land \neg q.$$

A truth table is a **proof** of an equivalence, because it checks every case there is. Nothing is left to chance. Compare
that with checking examples in arithmetic: testing $n = 1, 2, 3$ does not check every whole number, because there are
infinitely many. Here there are only four cases, and we checked all of them.

This equivalence, and its partner $\neg(p \land q) \equiv \neg p \lor \neg q$, are **De Morgan's laws**, after the
19th-century mathematician Augustus De Morgan. You will use them a lot in [level 5](../level-5/index.md).

### Always true, always false

Some statements come out T in every row. They are called **tautologies**. The simplest is $p \lor \neg p$: "it is
raining or it is not raining". Whatever the weather, it is true.

| $p$ | $\neg p$ | $p \lor \neg p$ | $p \land \neg p$ |
| --- | --- | --- | --- |
| T | F | T | F |
| F | T | T | F |

Statements that are F in every row, like $p \land \neg p$ ("it is raining and it is not raining"), are called
**contradictions**. A contradiction can never be true. When a knights-and-knaves case led to "A is a knight and A is
not a knight", that was a contradiction, and that is why we crossed the case off.

### When two statements are not equivalent

To show two statements are **not** equivalent, you only need **one** row where they differ. Compare $p \land (q \lor r)$
with $(p \land q) \lor r$:

| row | $p$ | $q$ | $r$ | $q \lor r$ | $p \land (q \lor r)$ | $p \land q$ | $(p \land q) \lor r$ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | T | T | T | T | T | T | T |
| 2 | T | T | F | T | T | T | T |
| 3 | T | F | T | T | T | F | T |
| 4 | T | F | F | F | F | F | F |
| 5 | F | T | T | T | **F** | F | **T** |
| 6 | F | T | F | T | F | F | F |
| 7 | F | F | T | T | **F** | F | **T** |
| 8 | F | F | F | F | F | F | F |

Rows 5 and 7 differ. So they are **not** equivalent: here the brackets change the meaning. (In row 5, say $p$: "I
finish my homework", $q$: "it is sunny", $r$: "it is my birthday". With $p$ false and $r$ true, "I finish my homework
and it is sunny or my birthday" is false, but "I finish my homework and it is sunny, or it is my birthday" is true.)

<figure class="play" data-play="truth"><span class="ai-tag">AI-created</span><figcaption><b>Every row at once.</b> Two statements give four rows; pick the connective.</figcaption></figure>

## Worked examples

**1. "Or, but not both."** Build the table for $(p \lor q) \land \neg(p \land q)$.

| $p$ | $q$ | $p \lor q$ | $p \land q$ | $\neg(p \land q)$ | $(p \lor q) \land \neg(p \land q)$ |
| --- | --- | --- | --- | --- | --- |
| T | T | T | T | F | **F** |
| T | F | T | F | T | **T** |
| F | T | T | F | T | **T** |
| F | F | F | F | T | **F** |

It is true exactly when **one** of $p$, $q$ is true. This is the "menu" meaning of or, called **exclusive or**.

**2. A distributive law.** Show $p \land (q \lor r) \equiv (p \land q) \lor (p \land r)$.

From the big table above, the column $p \land (q \lor r)$ reads T T T F F F F F. Now $p \land r$ reads T F T F F F F F
(T only when $p$ and $r$ are both T: rows 1 and 3). So $(p \land q) \lor (p \land r)$ is T when either $p \land q$
(rows 1, 2) or $p \land r$ (rows 1, 3) is T: rows 1, 2, 3. It reads T T T F F F F F. The columns match, so the two
are equivalent. This is just like $a \times (b + c) = a \times b + a \times c$ in arithmetic, with $\land$ for
$\times$ and $\lor$ for $+$.

**3. A knights-and-knaves puzzle by table.** A says: "At least one of us is a knave." Let $a$: "A is a knight" and $b$:
"B is a knight". A's statement is $\neg a \lor \neg b$. A knight's statement must be true and a knave's false, so we
need the statement's truth value to **match** $a$.

| $a$ | $b$ | $\neg a \lor \neg b$ | matches $a$? |
| --- | --- | --- | --- |
| T | T | F | no |
| T | F | T | **yes** |
| F | T | T | no |
| F | F | T | no |

Only one row fits: **A is a knight and B is a knave**, the same answer as in [level 3](../level-3/03-knights-and-knaves.md).
The truth table did all the case-trying at once.

## Try it

1. How many rows does a truth table with 4 letters have? With 6?
2. Write the first column ($p$), second ($q$) and third ($r$) of a three-letter table in the standard order.
3. Build the truth table for $\neg p \land q$.
4. Build the truth table for $\neg(p \land q)$ and for $\neg p \lor \neg q$. Are they equivalent?
5. Is $p \lor (p \land q)$ equivalent to $p$? Use a table.
6. Is $p \land \neg p$ a tautology, a contradiction, or neither? What about $(p \land q) \lor \neg p$?
7. Find the row (truth values of $p$, $q$, $r$) where $p \lor (q \land r)$ and $(p \lor q) \land r$ differ, if there
   is one.
8. Use a truth table to solve: A says "B is a knight", and B says "A is a knave". (Use $a$ and $b$ as in worked
   example 3; this time **both** statements must match their speakers.)

??? note "Answers"
    1. $2^4 = 16$ rows; $2^6 = 64$ rows.
    2. $p$: T T T T F F F F. $q$: T T F F T T F F. $r$: T F T F T F T F.
    3. Rows ($p$, $q$): TT gives F, TF gives F, FT gives **T**, FF gives F. It is true only when $p$ is false and $q$ is
       true.
    4. $\neg(p \land q)$: the column $p \land q$ reads T F F F, so $\neg(p \land q)$ reads **F T T T**.
       $\neg p \lor \neg q$: $\neg p$ reads F F T T and $\neg q$ reads F T F T, and "or" gives **F T T T**. The same,
       so they are **equivalent** (De Morgan's other law).
    5. $p \land q$ reads T F F F. Then $p \lor (p \land q)$ reads T T F F (TT: T; TF: T; FT: F or F = F; FF: F). And
       $p$ reads T T F F. **Equivalent.** (In words: "$p$, or $p$ and $q$" adds nothing beyond $p$.)
    6. $p \land \neg p$ is a **contradiction** (F in both rows). For $(p \land q) \lor \neg p$: TT gives T or F = T; TF
       gives F or F = **F**; FT gives F or T = T; FF gives T. It has one F and three T, so it is **neither**.
    7. Look for a row where one is T and the other F. Try $p$ T, $r$ F: $p \lor (q \land r)$ is T (because $p$ is T),
       but $(p \lor q) \land r$ is F (because $r$ is F). So rows **$p$ T, $q$ T, $r$ F** and **$p$ T, $q$ F, $r$ F**
       both differ. Not equivalent.
    8. A's statement is $b$; it must match $a$, so $a$ and $b$ must be equal. B's statement is $\neg a$; it must match
       $b$, so $b$ must be the opposite of $a$. Row TT: B's fails. TF: A's fails. FT: A's fails. FF: B's statement
       $\neg a$ is T but $b$ is F, fails. **No row fits**, so these two statements cannot both be said on the island,
       as we found in level 3.

## Common mistake

**Missing or repeating a row.** If you write rows in a random order, it is easy to have two rows the same and miss
another. Always use the standard order (halves, then quarters, then alternating), and count: you need $2^n$ rows.

**Doing too much in one step.** Working out $\neg(p \lor q) \land r$ in your head is how mistakes slip in. Give every
piece its own column, smallest pieces first, and each step is easy.

## Where it leads

- Back: [Statements and letters](01-statements-letters.md) · Next: [The conditional](03-conditional-promise.md), the
  connective with the surprising table.
- [Level 4 page](index.md) · [Logic topic page](../index.md)
- The $2 \times 2 \times 2$ rule for counting rows is the multiplication principle of
  [Counting](../../counting/index.md).
- Truth tables become circuits: AND, OR and NOT gates inside computers, in [level 6](../level-6/index.md).
- The distributive law in arithmetic and algebra: [Algebra](../../algebra/index.md).
