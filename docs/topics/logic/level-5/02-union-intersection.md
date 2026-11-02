---
title: "Union, intersection, complement"
---

# Union, intersection, complement

*Logic and puzzles · level 5, lesson 2 of 6*

## A question to start

Two overlapping circles cut a page into **4** regions: inside the first only, inside the second only, inside both,
and outside both. Three circles, drawn the usual way, make **8** regions.

So four circles should make 16 regions, one for every way of being in or out of each circle. Try to draw them. You
will fail, and it is not your fault: four circles can never make more than **14** regions. To draw a picture for four
sets, you need longer shapes, like ellipses.

Why 4, then 8, then 16? And why does that 8 look exactly like the 8 rows of a truth table with three letters? This
lesson is about the pictures of sets, called **Venn diagrams**, and the three ways of combining sets that they show.

## The idea

### The universal set

Whenever we work with sets, there is a big set holding everything we are talking about: all the students in a class,
all the whole numbers from 1 to 20, all real numbers. This is the **universal set**, usually called $U$. In a Venn
diagram it is the rectangle, and the sets are shapes inside it.

The idea is named after John Venn, an English logician who used such pictures in the 1880s.

### Three ways to combine sets

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 170" role="img" aria-label="Venn diagram: two overlapping circles A and B inside a rectangle U, with the four regions A only, B only, both, neither">
  <rect x="10" y="10" width="400" height="150" rx="6" fill="none" stroke="currentColor"/>
  <circle cx="165" cy="85" r="62" fill="#eea66f" fill-opacity="0.7" stroke="currentColor"/>
  <circle cx="255" cy="85" r="62" fill="#9cc9ea" fill-opacity="0.7" stroke="currentColor"/>
  <g font-size="15" text-anchor="middle" fill="currentColor">
    <text x="30" y="32">U</text>
    <text x="110" y="40">A</text><text x="310" y="40">B</text>
    <text x="135" y="90">A only</text>
    <text x="287" y="90">B only</text>
    <text x="210" y="90">both</text>
    <text x="370" y="148">neither</text>
  </g>
</svg>
</div>

- The **union** $A \cup B$ (say "A union B") is the set of everything in $A$ **or** in $B$ (or in both). It is
  both circles together: three of the four regions.
- The **intersection** $A \cap B$ ("A intersect B") is the set of everything in $A$ **and** in $B$. It is only the
  overlap, the lens in the middle.
- The **complement** $A^c$ ("A complement") is the set of everything in $U$ that is **not** in $A$. It is
  everything outside circle $A$, including the "B only" part. (Some books write $A'$ or $\overline{A}$.)

A memory trick: $\cup$ looks like a cup that holds everything poured into it; $\cap$ is the narrow cap on top.

Two more words. The **difference** $A \setminus B$ ("A minus B") is everything in $A$ but not in $B$: the region
"A only". And two sets with **no** elements in common, $A \cap B = \varnothing$, are called **disjoint**: their
circles do not overlap at all, like the even and odd numbers.

### The secret: these are or, and, not

Look at the definitions again in the language of level 4. For any object $x$:

| $x$ is in ... | exactly when ... |
| --- | --- |
| $A \cup B$ | $x \in A$ **or** $x \in B$ |
| $A \cap B$ | $x \in A$ **and** $x \in B$ |
| $A^c$ | **not** $x \in A$ |
| $A \setminus B$ | $x \in A$ **and not** $x \in B$ |

So union is *or*, intersection is *and*, complement is *not*. Every fact about $\lor$, $\land$, $\neg$ becomes a
fact about $\cup$, $\cap$, $^c$, and the other way round. The symbols even look alike: $\cup$ and $\lor$ both open
upward, $\cap$ and $\land$ both point up. This is not luck: the people who chose the symbols wanted you to see the
link.

Even the "or" is the same "or". In mathematics *or* means **one or both** (level 3), and $A \cup B$ includes the
overlap.

### Shading regions

To show a set like $A \cap B$ on a Venn diagram, shade exactly its region.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 130" role="img" aria-label="Three small Venn diagrams: the union shaded, the intersection shaded, and the complement of A shaded">
  <defs>
    <clipPath id="l52-clipA"><circle cx="60" cy="60" r="38"/></clipPath>
  </defs>
  <g stroke="currentColor">
    <rect x="5" y="10" width="130" height="100" fill="none"/>
    <circle cx="60" cy="60" r="38" fill="#eea66f"/>
    <circle cx="90" cy="60" r="38" fill="#eea66f"/>
    <circle cx="60" cy="60" r="38" fill="none"/>
  </g>
  <g stroke="currentColor">
    <rect x="155" y="10" width="130" height="100" fill="none"/>
    <circle cx="240" cy="60" r="38" fill="#9cc9ea" clip-path="url(#l52-clipB)"/>
    <circle cx="210" cy="60" r="38" fill="none"/>
    <circle cx="240" cy="60" r="38" fill="none"/>
  </g>
  <defs>
    <clipPath id="l52-clipB"><circle cx="210" cy="60" r="38"/></clipPath>
  </defs>
  <g stroke="currentColor">
    <path d="M 305 10 H 435 V 110 H 305 Z M 322 60 a 38 38 0 1 0 76 0 a 38 38 0 1 0 -76 0 Z" fill="#7ccf9a" fill-rule="evenodd"/>
    <circle cx="360" cy="60" r="38" fill="none"/>
    <circle cx="390" cy="60" r="38" fill="none"/>
  </g>
  <g font-size="14" text-anchor="middle" fill="currentColor">
    <text x="70" y="126">A ∪ B</text><text x="220" y="126">A ∩ B</text><text x="370" y="126">Aᶜ</text>
  </g>
</svg>
</div>

For harder expressions, work from the inside out, exactly as you would with brackets in arithmetic. To shade
$A \cap B^c$: first picture $B^c$ (everything outside $B$), then keep only the part that is also inside $A$. The
result is the "A only" region, which is $A \setminus B$. So $A \setminus B = A \cap B^c$: "in $A$ and not in $B$".

### Three sets, eight regions

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 270" role="img" aria-label="Three overlapping circles A, B, C inside a rectangle, with the eight regions numbered 1 to 8">
  <rect x="10" y="10" width="400" height="250" rx="6" fill="none" stroke="currentColor"/>
  <circle cx="170" cy="100" r="70" fill="#eea66f" fill-opacity="0.45" stroke="currentColor"/>
  <circle cx="250" cy="100" r="70" fill="#9cc9ea" fill-opacity="0.45" stroke="currentColor"/>
  <circle cx="210" cy="168" r="70" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor"/>
  <g font-size="16" text-anchor="middle" fill="currentColor">
    <text x="100" y="45">A</text><text x="320" y="45">B</text><text x="300" y="245">C</text>
    <text x="210" y="125">1</text>
    <text x="210" y="72">2</text>
    <text x="165" y="152">3</text>
    <text x="255" y="152">4</text>
    <text x="135" y="85">5</text>
    <text x="285" y="85">6</text>
    <text x="210" y="215">7</text>
    <text x="380" y="245">8</text>
  </g>
</svg>
</div>

Each region is one pattern of "in or out" for $A$, $B$, $C$:

| Region | in $A$? | in $B$? | in $C$? |
| --- | --- | --- | --- |
| 1 | yes | yes | yes |
| 2 | yes | yes | no |
| 3 | yes | no | yes |
| 5 | yes | no | no |
| 4 | no | yes | yes |
| 6 | no | yes | no |
| 7 | no | no | yes |
| 8 | no | no | no |

Change "yes" to T and "no" to F and you have the 8 rows of a truth table with $p$, $q$, $r$. **Each region of a
Venn diagram is a row of a truth table.** That is why there are $2^3 = 8$ of them, and why four sets need
$2^4 = 16$ regions. (Four circles fail because any two circles cross in at most 2 points, and that limits how many
pieces they can cut. Four ellipses can do it.)

So to find a set like $A \cap (B \cup C)$, go region by region and ask "is this region in it?", just like filling in
a truth table row by row.

### Counting with overlaps

If $A$ and $B$ are finite, how many elements are in $A \cup B$? Adding $|A| + |B|$ counts the overlap **twice**, once
in each circle. Take it away once:

$$|A \cup B| = |A| + |B| - |A \cap B|.$$

The full version for three or more sets, the **inclusion-exclusion principle**, belongs to
[Counting level 6](../../counting/level-6/01-inclusion-exclusion.md). Here we mostly fill in Venn diagrams region by
region, which always works and shows **why** the formula is right.

## Worked examples

**1. Small sets.** Let $U = \{1, 2, \ldots, 10\}$, $A = \{1, 2, 3, 4, 5, 6\}$ and $B = \{2, 4, 6, 8\}$.

- $A \cup B = \{1, 2, 3, 4, 5, 6, 8\}$: everything in either, each written once.
- $A \cap B = \{2, 4, 6\}$: only what is in both.
- $A^c = \{7, 8, 9, 10\}$: what is in $U$ but not in $A$.
- $A \setminus B = \{1, 3, 5\}$ and $B \setminus A = \{8\}$. Difference is not symmetric.
- Check the formula: $|A \cup B| = 6 + 4 - 3 = 7$. ✓

**2. Placing numbers in three sets.** Let $U = \{1, \ldots, 20\}$, $E$ = even numbers, $T$ = multiples of 3,
$P$ = primes. Place every number.

- Start in the middle: even, a multiple of 3 **and** prime? An even prime is 2, and 2 is not a multiple of 3. So the
  middle region is **empty**.
- $E$ and $T$ but not $P$: multiples of 6, which are 6, 12, 18.
- $E$ and $P$ but not $T$: 2. $T$ and $P$ but not $E$: 3.
- $E$ only: 4, 8, 10, 14, 16, 20. $T$ only: 9, 15. $P$ only: 5, 7, 11, 13, 17, 19.
- Outside all three: 1.

Check: $0 + 3 + 1 + 1 + 6 + 2 + 6 + 1 = 20$. ✓ An empty region is fine: the diagram still draws it, so that it
can say "nothing here".

**3. Shading $A \cap (B \cup C)$.** Use the region numbers from the big drawing. $B \cup C$ is every region inside
$B$ or $C$: 1, 2, 3, 4, 6, 7. Now keep only those inside $A$ (regions 1, 2, 3, 5): that leaves **1, 2, 3**.

Compare $(A \cap B) \cup C$: $A \cap B$ is 1, 2; $C$ is 1, 3, 4, 7; together 1, 2, 3, 4, 7. **Different.** Moving
the brackets changed the set, just as $2 \times (3 + 4) \ne (2 \times 3) + 4$.

**4. A survey.** In a class of 30, 18 play soccer, 15 play piano and 7 do both. How many do neither?

Fill the Venn diagram from the middle out: both = 7; soccer only = $18 - 7 = 11$; piano only = $15 - 7 = 8$. That is
$7 + 11 + 8 = 26$ who do at least one, so $30 - 26 = 4$ do neither. Check with the formula: $18 + 15 - 7 = 26$. ✓

**5. Disjoint or not?** Are the sets "multiples of 4" and "odd numbers" disjoint? A multiple of 4 is even, so it is
never odd: the intersection is empty and they are **disjoint**. Are "multiples of 4" and "multiples of 6" disjoint?
No: 12 is in both.

## Try it

1. With $U = \{1, \ldots, 10\}$, $A = \{1, 3, 5, 7, 9\}$, $B = \{1, 2, 3, 4\}$: find $A \cup B$, $A \cap B$, $B^c$
   and $B \setminus A$.
2. What is $A \cup A^c$? What is $A \cap A^c$? Explain with *or*, *and*, *not*.
3. Using the region numbers 1 to 8 of the three-circle diagram, which regions make $A^c$? Which make
   $(A \cup B)^c$?
4. Shade $(A \cap B) \cup (A \cap C)$ by region numbers. Compare with Worked example 3. What do you notice?
5. In a group of 40 people, 25 speak English, 18 speak French and 6 speak neither. How many speak both?
6. Draw a Venn diagram for $U$ = the whole numbers 1 to 15, $F$ = factors of 12, $O$ = odd numbers. Put every number
   in its region.
7. If $A \subseteq B$, what is $A \cap B$? What is $A \cup B$? Draw the Venn diagram.
8. Why does a Venn diagram for 5 sets need 32 regions?

??? note "Answers"
    1. $A \cup B = \{1, 2, 3, 4, 5, 7, 9\}$. $A \cap B = \{1, 3\}$. $B^c = \{5, 6, 7, 8, 9, 10\}$.
       $B \setminus A = \{2, 4\}$.
    2. $A \cup A^c = U$: every $x$ is in $A$ or not in $A$. $A \cap A^c = \varnothing$: nothing can be in $A$ and
       not in $A$ at once. These are the set versions of "$p$ or not $p$" (always true) and "$p$ and not $p$" (always
       false).
    3. $A^c$: regions 4, 6, 7, 8 (outside circle $A$). $(A \cup B)^c$: $A \cup B$ is 1, 2, 3, 4, 5, 6, so its
       complement is **7, 8**.
    4. $A \cap B$ is 1, 2; $A \cap C$ is 1, 3; the union is **1, 2, 3**. The same as $A \cap (B \cup C)$ in Worked
       example 3. This is a distributive law: $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$, the set version of
       $p \land (q \lor r) \equiv (p \land q) \lor (p \land r)$. You will meet it again in
       [Boolean algebra](../level-6/02-boolean-algebra.md).
    5. $40 - 6 = 34$ speak at least one. $34 = 25 + 18 - \text{both}$, so both $= 43 - 34 = 9$. Check: English
       only 16, French only 9, both 9, neither 6: $16 + 9 + 9 + 6 = 40$. ✓
    6. $F = \{1, 2, 3, 4, 6, 12\}$, $O = \{1, 3, 5, 7, 9, 11, 13, 15\}$. Both: 1, 3. $F$ only: 2, 4, 6, 12.
       $O$ only: 5, 7, 9, 11, 13, 15. Neither: 8, 10, 14. Check: $2 + 4 + 6 + 3 = 15$. ✓
    7. $A \cap B = A$ and $A \cup B = B$. The diagram is circle $A$ drawn **inside** circle $B$.
    8. Each region is one pattern of "in or out" for the 5 sets, and there are $2^5 = 32$ patterns (including "out
       of all five").

## Common mistake

**Adding without removing the overlap.** In a survey, "18 play soccer and 15 play piano" does not mean 33 people.
The 7 who do both were counted in both numbers. Fill the overlap **first**, then the "only" regions.

**Thinking the complement is "the other set".** $A^c$ is not $B$. It is everything in $U$ outside $A$, which
includes the "B only" region **and** the "neither" region.

## Where it leads

- Back: [Sets](01-sets.md) · Next: [De Morgan's laws](03-de-morgan.md), which says what the complement of a union or
  an intersection is.
- [Level 5 page](index.md) · [Logic topic page](../index.md)
- The counting formula grows into [inclusion-exclusion](../../counting/level-6/01-inclusion-exclusion.md); in
  [Probability](../../probability/level-5/02-general-addition-rule.md) it becomes
  $P(A \text{ or } B) = P(A) + P(B) - P(A \text{ and } B)$.
- On the U of T shelf: [MAT137 unit 1](../../../uoft/MAT137/unit01.md) and [MAT158 unit 1](../../../uoft/MAT158H1/unit01.md).
