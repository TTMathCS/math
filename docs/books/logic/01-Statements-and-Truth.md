# 1. Statements and truth

*Every argument you have ever had, every proof in this book and every line of every computer program rests on a few
small words: "and", "or", "not", "if ... then". Everyday language uses them loosely, and that looseness is where most
bad reasoning hides. This chapter pins them down. You will learn exactly what counts as a statement, give each little
word a precise meaning with a truth table, face honestly the strangest of them (why a false statement "implies"
anything), and then use the whole kit to solve logic puzzles on an island where some people always tell the truth and
the rest always lie.*

!!! abstract "In this chapter"

    **You will learn:**

    - what a statement is, and why questions, commands and "this sentence is false" are not statements
    - the meanings of "not", "and", "or" (inclusive and exclusive), written $\neg$, $\wedge$, $\vee$
    - how to build and read a truth table for any combination of statements
    - the material conditional $p \to q$: its table, why a false premise makes it true, and where it differs from everyday "if"
    - converse, inverse and contrapositive, and the many English ways of saying "if"
    - "if and only if", and how to solve knights-and-knaves puzzles by trying every case

    **You need:** nothing but patience; this is the first chapter. For a gentler version, see the Topics lessons
    [True or false](../../topics/logic/level-1/04-true-or-false.md),
    [Not, and, or](../../topics/logic/level-3/01-not-and-or.md),
    [If ... then](../../topics/logic/level-3/02-if-then.md),
    [Knights and knaves](../../topics/logic/level-3/03-knights-and-knaves.md),
    [Statements and letters](../../topics/logic/level-4/01-statements-letters.md),
    [Truth tables](../../topics/logic/level-4/02-truth-tables.md),
    [The conditional](../../topics/logic/level-4/03-conditional-promise.md) and
    [Converse, inverse and contrapositive](../../topics/logic/level-4/04-converse-contrapositive.md).

    **Levels:** 1.1 to 1.3 and 1.5 are beginner; 1.4 is beginner with an intermediate discussion at the end; 1.6 is
    beginner to intermediate (the last puzzles take real thought).

## 1.1 What a statement is

Which of these can be true or false?

1. $7$ is a prime number.
2. $2 + 2 = 5$.
3. Every even number greater than $2$ is the sum of two primes.
4. Is it raining?
5. Close the door.
6. $x + 1 = 3$.
7. This sentence is false.

A **statement** (also called a **proposition**) is a sentence that is either true or false, and not both. The words
"true" and "false" are called **truth values**, and we write them T and F (some books write 1 and 0).

Sentence 1 is a statement, and it is true. Sentence 2 is a statement too, and it is false: a false statement is still
a statement. Sentence 3 is the famous **Goldbach conjecture**, stated by Christian Goldbach in a letter to Leonhard
Euler in 1742. Nobody knows whether it is true. It has been checked by computer for every even number up to
$4 \times 10^{18}$, but no proof is known. It is still a statement: it is either true or false, we just do not know
which. Being a statement is about the sentence, not about our knowledge.

Sentence 4 is a question and sentence 5 is a command. Neither is true or false; you cannot say "that's false" to
"Close the door". They are not statements.

Sentence 6 is more interesting. Is $x + 1 = 3$ true? That depends on $x$: it is true when $x = 2$ and false
otherwise. A sentence with a free variable like this is called an **open sentence** or **predicate**. It becomes a
statement once you say what $x$ is ("$x + 1 = 3$ when $x = 5$" is false), or once you put a word like "for every" or
"there is" in front ("there is a number $x$ with $x + 1 = 3$" is true). Those words, the **quantifiers**, are the
subject of [Chapter 3](03-Quantifiers.md). In this chapter and the next, every letter stands for a whole statement.

Sentence 7 is the **liar paradox**, which goes back to ancient Greece. Suppose it is true. Then what it says holds,
so it is false. Suppose it is false. Then what it says ("this sentence is false") is the case, so it is true. Either
choice contradicts itself, so the sentence cannot be given a truth value, and we do not count it as a statement.
This is not just a party trick. Sentences that talk about themselves are dangerous, and the danger comes back in
[Chapter 5](05-Sets.md) as Russell's paradox, which broke the first attempt to build mathematics on sets. Tamed and
made precise, the same self-reference powers the deepest results in this book: Gödel's incompleteness theorems
([Chapter 18](18-Godels-Incompleteness-Theorems.md)) and the unsolvability of the halting problem
([Chapter 14](14-Undecidability.md)).

Two more warnings about everyday sentences.

- **Vague sentences.** "It is cold today" or "Ana is tall" have no sharp truth value: how cold is cold? Mathematics
  avoids vague words by defining every term. "$n$ is even" means exactly "$n = 2k$ for some integer $k$", and that
  leaves no room for argument. (Logics for vague statements exist; [Chapter 19](19-Other-Logics.md) mentions fuzzy
  logic.)
- **Sentences that depend on context.** "I am hungry" is true when one person says it and false when another does.
  We will always assume the context is fixed.

The assumption that every statement is exactly one of true or false is called the **principle of bivalence**. Almost
all of mathematics uses it, and so does this book until [Chapter 19](19-Other-Logics.md), which looks at logics that
drop it.

**Letters for statements.** We name statements with small letters $p, q, r, \dots$, just as algebra names numbers
with $x$ and $y$. Write $p$ for "$7$ is prime" and $q$ for "$2 + 2 = 5$"; then $p$ is true and $q$ is false. The
letters let us study the *shape* of an argument without caring what it is about, which is exactly what makes logic
general.

## 1.2 And, or, not

New statements are built from old ones with **connectives**. The three basic ones are these.

**Not.** The **negation** of $p$, written $\neg p$ and read "not $p$", is true exactly when $p$ is false. If $p$ is
"$7$ is prime", then $\neg p$ is "$7$ is not prime", which is false. Negating twice gets you back where you started:
$\neg\neg p$ has the same truth value as $p$.

Negating in English needs care. The negation of "the light is on" is "the light is not on", not "the light is
broken". The negation of "$x > 3$" is "$x \le 3$", not "$x < 3$": the case $x = 3$ must go somewhere, and it goes
to the negation. A useful test: a statement and its negation must never both be true and never both be false.

**And.** The **conjunction** $p \wedge q$, read "$p$ and $q$", is true exactly when both $p$ and $q$ are true. The
symbol $\wedge$ looks like the letter A with its bar missing; think "A for And". "$7$ is prime and $7$ is odd" is
true; "$7$ is prime and $7$ is even" is false, since one part fails.

English has many ways to say "and": "but", "although", "yet", "even though" all mean $\wedge$ to a logician. "She is
poor but honest" makes the same claim as "she is poor and honest"; the "but" adds a tone of surprise, and logic
ignores tone.

**Or.** The **disjunction** $p \vee q$, read "$p$ or $q$", is true when at least one of $p$, $q$ is true, including
when both are. The symbol comes from the Latin *vel*, which meant this kind of "or".

This is the **inclusive or**, and it is the one mathematics always means. "$n$ is divisible by 2 or by 3" is true for
$n = 6$, which is divisible by both. Everyday English sometimes means the **exclusive or**, "one or the other but not
both": "soup or salad comes with your meal" usually means you cannot have both. The exclusive or is written
$p \oplus q$ (or XOR, from computing) and is true when exactly one of $p, q$ is true. When this book says "or", it
means the inclusive one; when it wants the exclusive one, it says "exactly one of".

**Worked example 1.1.** Let $p$ be "$15$ is divisible by $3$" (true) and $q$ be "$15$ is divisible by $4$" (false).
Find the truth values of $p \wedge q$, $p \vee q$, $\neg p \vee q$, $\neg(p \wedge q)$ and $p \oplus q$.

- $p \wedge q$: one part is false, so F.
- $p \vee q$: one part is true, so T.
- $\neg p \vee q$: $\neg p$ is F and $q$ is F, so F.
- $\neg(p \wedge q)$: $p \wedge q$ is F, so its negation is T.
- $p \oplus q$: exactly one is true, so T.

Brackets matter, exactly as in arithmetic. $\neg(p \wedge q)$ negates the whole conjunction; $\neg p \wedge q$
negates only $p$. To save brackets we agree that $\neg$ applies only to the smallest thing after it, the way a minus
sign does in $-3 + 5$.

## 1.3 Truth tables

The truth value of a compound statement depends only on the truth values of its parts, not on what they say. So we
can list every possible case once and for all in a **truth table**. Here are the tables of the connectives so far.
Each row is one possible combination of truth values for $p$ and $q$.

| $p$ | $q$ | $\neg p$ | $p \wedge q$ | $p \vee q$ | $p \oplus q$ |
|:-:|:-:|:-:|:-:|:-:|:-:|
| T | T | F | T | T | F |
| T | F | F | F | T | T |
| F | T | T | F | T | T |
| F | F | T | F | F | F |

These tables are the *definitions* of the connectives. Everything else in this chapter is computed from them.

**How many rows?** Each letter can be T or F. With one letter there are 2 rows, with two letters $2 \times 2 = 4$,
with three letters $2 \times 2 \times 2 = 8$, and with $n$ letters $2^n$. We always list them in the same order:
the last letter alternates T, F, T, F; the one before it alternates in pairs; the one before that in fours; and so
on. Then two tables for the same letters line up row by row and can be compared.

**Worked example 1.2.** Build the truth table of $\neg(p \wedge q)$ and of $\neg p \vee \neg q$.

Work from the inside out, with one column for each piece.

| $p$ | $q$ | $p \wedge q$ | $\neg(p \wedge q)$ | $\neg p$ | $\neg q$ | $\neg p \vee \neg q$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| T | T | T | F | F | F | F |
| T | F | F | T | F | T | T |
| F | T | F | T | T | F | T |
| F | F | F | T | T | T | T |

The two final columns agree in every row. So "not both" says exactly the same as "at least one is not". This is one
of **De Morgan's laws**, named after Augustus De Morgan, who stated them in his book *Formal Logic* (1847). The
other is that $\neg(p \vee q)$ always agrees with $\neg p \wedge \neg q$: "neither" means "not this and not that".
[Chapter 2](02-Propositional-Logic.md) collects many laws like this and proves them all by truth tables.

**Check:** with $p$ = "it is Monday" and $q$ = "it is raining", "it is not the case that it is a rainy Monday" is
true on a dry Monday, on a rainy Tuesday and on a dry Tuesday; so is "it is not Monday or it is not raining".

**Worked example 1.3.** Build the truth table of $(p \vee q) \wedge \neg r$. For which rows is it true?

There are three letters, so 8 rows.

| $p$ | $q$ | $r$ | $p \vee q$ | $\neg r$ | $(p \vee q) \wedge \neg r$ |
|:-:|:-:|:-:|:-:|:-:|:-:|
| T | T | T | T | F | F |
| T | T | F | T | T | T |
| T | F | T | T | F | F |
| T | F | F | T | T | T |
| F | T | T | T | F | F |
| F | T | F | T | T | T |
| F | F | T | F | F | F |
| F | F | F | F | T | F |

It is true in exactly three rows: when $r$ is false and at least one of $p$, $q$ is true.

A picture helps with two letters. Draw a square split into four cells, one for each row of the table: the top row
of cells is where $p$ is true, the left column is where $q$ is true. Shade the cells where a formula is true.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 150" role="img" aria-label="Four two-by-two grids showing in which of the four cases p and q, p or q, if p then q, and p if and only if q are true">
  <g font-size="11" fill="currentColor" text-anchor="middle">
    <text x="70" y="24">q=T</text><text x="110" y="24">q=F</text>
    <text x="170" y="24">q=T</text><text x="210" y="24">q=F</text>
    <text x="270" y="24">q=T</text><text x="310" y="24">q=F</text>
    <text x="370" y="24">q=T</text><text x="410" y="24">q=F</text>
  </g>
  <g font-size="11" fill="currentColor" text-anchor="end">
    <text x="45" y="54">p=T</text><text x="45" y="94">p=F</text>
  </g>
  <rect x="50" y="30" width="40" height="40" fill="#eea66f"/>
  <rect x="150" y="30" width="40" height="40" fill="#9cc9ea"/>
  <rect x="190" y="30" width="40" height="40" fill="#9cc9ea"/>
  <rect x="150" y="70" width="40" height="40" fill="#9cc9ea"/>
  <rect x="250" y="30" width="40" height="40" fill="#7ccf9a"/>
  <rect x="250" y="70" width="40" height="40" fill="#7ccf9a"/>
  <rect x="290" y="70" width="40" height="40" fill="#7ccf9a"/>
  <rect x="350" y="30" width="40" height="40" fill="#eea66f"/>
  <rect x="390" y="70" width="40" height="40" fill="#eea66f"/>
  <g fill="none" stroke="currentColor" stroke-width="1">
    <rect x="50" y="30" width="80" height="80"/><line x1="90" y1="30" x2="90" y2="110"/><line x1="50" y1="70" x2="130" y2="70"/>
    <rect x="150" y="30" width="80" height="80"/><line x1="190" y1="30" x2="190" y2="110"/><line x1="150" y1="70" x2="230" y2="70"/>
    <rect x="250" y="30" width="80" height="80"/><line x1="290" y1="30" x2="290" y2="110"/><line x1="250" y1="70" x2="330" y2="70"/>
    <rect x="350" y="30" width="80" height="80"/><line x1="390" y1="30" x2="390" y2="110"/><line x1="350" y1="70" x2="430" y2="70"/>
  </g>
  <g font-size="12" fill="currentColor" text-anchor="middle">
    <text x="90" y="134">p and q</text>
    <text x="190" y="134">p or q</text>
    <text x="290" y="134">if p then q</text>
    <text x="390" y="134">p iff q</text>
  </g>
</svg>
</div>

The "and" picture has one shaded cell, the "or" picture three. The third and fourth pictures belong to the next two
sections.

**Try it in Python.** A computer can list the rows for you. Python's `itertools.product` produces all combinations
of `True` and `False`; `and`, `or` and `not` are Python's connectives.

```python
from itertools import product

def table(formula, letters):
    for values in product([True, False], repeat=len(letters)):
        row = dict(zip(letters, values))
        cells = ["T" if v else "F" for v in values]
        print(" ".join(cells), "|", "T" if formula(**row) else "F")

table(lambda p, q, r: (p or q) and not r, "pqr")
```

The output is the last column of worked example 1.3, row by row in the standard order.

<figure class="play" data-play="truth"><span class="ai-tag">AI-created</span><figcaption><b>Try it.</b> A truth table: pick a connective and switch P and Q.</figcaption></figure>

## 1.4 If ... then

"If it rains, the match is cancelled." "If $n$ is divisible by 4, then $n$ is even." Sentences of this shape are
called **conditionals** or **implications**, written $p \to q$ (some books write $p \Rightarrow q$ or
$p \supset q$). Here $p$ is the **hypothesis** (or **antecedent**) and $q$ the **conclusion** (or **consequent**).

When is "if $p$ then $q$" true? Think of it as a **promise**. A parent says: "If you clean your room, then you get
ice cream." When has the parent broken the promise?

- You cleaned the room and got ice cream: promise kept.
- You cleaned the room and got no ice cream: promise broken.
- You did not clean the room, and got ice cream anyway: the promise said nothing about this case. It was not broken.
- You did not clean the room and got no ice cream: not broken either.

The only way to break the promise is to fulfil the hypothesis and be denied the conclusion. Logic takes this as the
definition: $p \to q$ is false in exactly one row, the row where $p$ is true and $q$ is false.

| $p$ | $q$ | $p \to q$ |
|:-:|:-:|:-:|
| T | T | T |
| T | F | F |
| F | T | T |
| F | F | T |

This connective is called the **material conditional**. Comparing tables, $p \to q$ always has the same truth value
as $\neg p \vee q$: "either the hypothesis fails, or the conclusion holds". That is a good way to remember it.

### Why a false hypothesis makes the conditional true

The last two rows surprise almost everyone. Is "if $2 + 2 = 5$ then the moon is made of cheese" really *true*? Here
is the best reason to accept it. Consider the statement

> For every whole number $n$: if $n > 2$, then $n^2 > 4$.

Everyone agrees this is true; it is a theorem. A "for every" statement is true when every instance is true. So each
instance must be a true conditional, including these:

- $n = 3$: "if $3 > 2$ then $9 > 4$", hypothesis true and conclusion true.
- $n = 1$: "if $1 > 2$ then $1 > 4$", hypothesis false and conclusion false.
- $n = -3$: "if $-3 > 2$ then $9 > 4$", hypothesis false and conclusion true.

(For whole numbers the instance with hypothesis true and conclusion false never happens; that is what the theorem
says.) If we declared the conditional false, or "undefined", whenever the hypothesis is false, then the instances
$n = 1$ and $n = -3$ would spoil a perfectly good theorem. Every general "if ... then" statement in mathematics would
fail. The material conditional is the only choice of the last two rows that makes general statements work, and that
is why mathematics adopted it.

A conditional that is true because its hypothesis is false is called **vacuously true**. "Every dragon in this room
is purple" is vacuously true: there are no dragons in the room, so none of them can fail to be purple.

### Where the material conditional differs from everyday "if"

It is honest to admit that the material conditional is not exactly the English "if". In everyday speech, "if $p$
then $q$" usually suggests a *connection*: $p$ causes $q$, or $p$ is a reason for $q$. The material conditional
ignores connections. "If Paris is in France, then $7$ is prime" is true (both parts are true), though nobody would
say it. These oddities are called the **paradoxes of material implication**; they are not contradictions, only
mismatches with how people talk.

Some uses of "if" are not about truth values at all. "If I had left earlier, I would have caught the train" is a
**counterfactual**: its hypothesis is false, yet we judge some counterfactuals true and others false, which no truth
table can do. Logicians have built richer theories for these (one is touched on in
[Chapter 19](19-Other-Logics.md), modal logic). Mathematics does not need them. Its "if" is always the material one,
and it works perfectly there because mathematical statements are about what *is*, not what *would have been*.

### Converse, inverse, contrapositive

From $p \to q$ we can make three related conditionals.

| name | form | example (with $p$ = "$n$ is divisible by 4", $q$ = "$n$ is even") |
|---|---|---|
| conditional | $p \to q$ | if $n$ is divisible by 4, then $n$ is even (true) |
| converse | $q \to p$ | if $n$ is even, then $n$ is divisible by 4 (false: $n = 2$) |
| inverse | $\neg p \to \neg q$ | if $n$ is not divisible by 4, then $n$ is not even (false: $n = 6$) |
| contrapositive | $\neg q \to \neg p$ | if $n$ is not even, then $n$ is not divisible by 4 (true) |

The table of $\neg q \to \neg p$ is the same as that of $p \to q$: both are false only when $p$ is true and $q$ is
false. So **a conditional and its contrapositive always agree**. The converse and the inverse agree with each other
(the inverse is the contrapositive of the converse), but not, in general, with the original. Confusing a statement
with its converse is one of the most common mistakes in reasoning, and it has a name: **affirming the consequent**.
"If it rained, the street is wet; the street is wet; so it rained" is invalid (a street cleaner may have passed).

### Ways to say "if"

Each line below means $p \to q$.

- if $p$ then $q$; $q$ if $p$; $q$ whenever $p$
- $p$ implies $q$
- $p$ only if $q$
- $p$ is **sufficient** for $q$; $q$ is **necessary** for $p$
- $q$ unless $\neg p$; not $p$ unless $q$

"Only if" is the one people get backwards. "You may enter only if you have a ticket" means: if you enter, you have a
ticket (enter $\to$ ticket). It does *not* promise that a ticket gets you in. Having a ticket is necessary, not
sufficient.

**Worked example 1.4.** Write each as $p \to q$ with $p$ and $q$ named.

1. "A number is divisible by 9 only if its digit sum is divisible by 9." Here $p$ = "the number is divisible by 9",
   $q$ = "its digit sum is divisible by 9", and the statement is $p \to q$.
2. "Being a square is sufficient for a rectangle to be a rhombus." $p$ = "the rectangle is a square",
   $q$ = "it is a rhombus"; $p \to q$.
3. "Continuity is necessary for differentiability." $p$ = "$f$ is differentiable", $q$ = "$f$ is continuous";
   $p \to q$ (the necessary thing goes on the right).
4. "The engine will not start unless the key is in." "Unless" means "if not": if the key is not in, the engine will
   not start. With $p$ = "the engine starts", $q$ = "the key is in", this is $\neg q \to \neg p$, the contrapositive
   of $p \to q$: if the engine starts, the key is in.

### A famous experiment

In 1966 the psychologist Peter Wason published a test that is now called the **Wason selection task**. Four cards
lie on a table; each has a letter on one side and a number on the other. You see

$$
\boxed{\text{E}} \quad \boxed{\text{K}} \quad \boxed{4} \quad \boxed{7}
$$

and are told the rule: "if a card has a vowel on one side, then it has an even number on the other". Which cards must
you turn over to check the rule? Most people in such experiments choose E alone, or E and 4. The right answer is E
and 7. The E card could have an odd number behind it, breaking the rule. The 7 card could have a vowel behind it,
which would also break it (that is the contrapositive at work: odd $\to$ not a vowel). The K card is irrelevant (the
rule says nothing about consonants), and so is the 4 card: a consonant behind it is fine, because the rule is not
its converse. Precise logic is a skill to be learned, not something we are born with.

## 1.5 If and only if

"$p$ if and only if $q$", written $p \leftrightarrow q$ (or $p \Leftrightarrow q$, or "$p$ iff $q$"), says that $p$
and $q$ have the same truth value. It is the conjunction of $p \to q$ ("$p$ only if $q$") and $q \to p$
("$p$ if $q$"), and that is where the name comes from.

| $p$ | $q$ | $p \to q$ | $q \to p$ | $(p \to q) \wedge (q \to p)$ | $p \leftrightarrow q$ |
|:-:|:-:|:-:|:-:|:-:|:-:|
| T | T | T | T | T | T |
| T | F | F | T | F | F |
| F | T | T | F | F | F |
| F | F | T | T | T | T |

Other ways to say it: "$p$ is necessary and sufficient for $q$", "$p$ exactly when $q$", "$p$ is equivalent to $q$".
Comparing with the table in 1.3, $p \leftrightarrow q$ is the negation of the exclusive or $p \oplus q$: "same value"
is the opposite of "different values".

**Worked example 1.5.** Which of these are true for all whole numbers $n$?

1. $n$ is even $\leftrightarrow$ $n^2$ is even. True. If $n = 2k$ then $n^2 = 2(2k^2)$ is even; if $n = 2k + 1$
   then $n^2 = 2(2k^2 + 2k) + 1$ is odd. So $n$ and $n^2$ are always both even or both odd.
2. $n$ is divisible by 6 $\leftrightarrow$ $n$ is divisible by 2 and by 3. True: a number divisible by 6 is
   divisible by 2 and by 3, and (since 2 and 3 have no common factor) a number divisible by both is divisible by 6.
3. $n$ is divisible by 4 $\leftrightarrow$ $n$ is even. False: $n = 2$ makes the left side false and the right side
   true.

**A warning about definitions.** Mathematical definitions are written with "if", but they mean "if and only if".
"A number is *even* if it is divisible by 2" is a definition, and it also tells you that a number not divisible by 2
is not even. Theorems are different: when a theorem says "if", it means only "if". Some books write "iff" in
definitions to be fussy; most do not.

## 1.6 Logic puzzles: knights and knaves

The logician and puzzle writer Raymond Smullyan (1919-2017) made famous an island on which every inhabitant is a
**knight**, who always tells the truth, or a **knave**, who always lies. His book *What Is the Name of This Book?*
(1978) is full of them. These puzzles are the best practice there is for the ideas of this chapter.

### The key translation

Let $a$ be the statement "A is a knight". Suppose A says a statement $S$.

- If $a$ is true (A is a knight), then $S$ is true.
- If $a$ is false (A is a knave), then $S$ is false.

So $a$ and $S$ have the same truth value: **A says $S$** translates to $a \leftrightarrow S$. Every puzzle becomes a
system of "iff" statements, and we can solve it by checking every row of a truth table and keeping the rows where
all of them hold.

**First observation.** Nobody can say "I am a knave". That statement is $\neg a$, and $a \leftrightarrow \neg a$ is
false in both rows: a knight saying it would lie, and a knave saying it would tell the truth. (Compare the liar
paradox in 1.1. On the island, the sentence is not paradoxical, it is simply impossible to say.)

### Puzzle 1

A says: "We are both knaves." What are A and B?

The statement is $\neg a \wedge \neg b$, so we need $a \leftrightarrow (\neg a \wedge \neg b)$.

| $a$ | $b$ | $\neg a \wedge \neg b$ | $a \leftrightarrow (\neg a \wedge \neg b)$ |
|:-:|:-:|:-:|:-:|
| T | T | F | F |
| T | F | F | F |
| F | T | F | T |
| F | F | T | F |

Only one row survives: **A is a knave and B is a knight.** In words: if A were a knight, A's statement would be
true, so A would be a knave, which is impossible. So A is a knave, and the statement is false: they are not both
knaves. Since A is one, B must be a knight.

### Puzzle 2

A says: "At least one of us is a knave." The statement is $\neg a \vee \neg b$.

If A were a knave, the statement would be true (A is a knave), but knaves cannot say true things. So A is a knight,
the statement is true, and since A is not the knave, **B is a knave**. Check: a knight saying "at least one of us is
a knave" when B is a knave is telling the truth.

### Puzzle 3

A says: "I am a knave or B is a knight." The statement is $\neg a \vee b$, which is the conditional $a \to b$.

- Suppose A is a knave. Then $\neg a$ is true, so the statement $\neg a \vee b$ is true. A knave cannot say it.
- So A is a knight. The statement is true; its first part $\neg a$ is false, so the second part must hold: B is a
  knight.

**Both are knights.** Notice a general pattern: any islander who says "if I am a knight then $S$" has proved both
that they are a knight and that $S$ is true. Smullyan uses this pattern in several puzzles.

### Puzzle 4

Now three islanders. A says: "All of us are knaves." B says: "Exactly one of us is a knight." What are A, B and C?

A's statement: if A were a knight, A would be a knave, so A is a **knave**, and the statement is false: at least
one of the three is a knight.

B's statement: suppose B is a knave. Then the knight that exists (from A's lie) is C, and the statement "exactly
one of us is a knight" is true (A knave, B knave, C knight). A knave cannot say a true thing, so this is impossible.
So B is a **knight**, and exactly one of the three is a knight. That one is B, so C is a **knave**.

**Check:** with A knave, B knight, C knave: "all of us are knaves" is false (B is a knight), so it fits a knave;
"exactly one of us is a knight" is true, so it fits a knight. All eight rows of the table can be tried in Python
below, and this is the only one that works.

### Puzzle 5: when the puzzle does not decide everything

A says: "B is a knave." B says: "A and C are of the same type." What can you deduce?

A's statement gives $a \leftrightarrow \neg b$: A and B are of opposite types. B's statement gives
$b \leftrightarrow (a \leftrightarrow c)$.

- If A is a knight, B is a knave, so "A and C are of the same type" is false, and C is a knave.
- If A is a knave, B is a knight, so "A and C are of the same type" is true, and C is a knave.

Both cases are consistent. We cannot tell which of A and B is the knight, but **C is a knave either way**. Puzzles in
real life are often like this: the information settles some questions and not others, and a careful reasoner says
exactly which.

### Puzzle 6: the fork in the road

You reach a fork. One road leads to the village, the other does not. An islander stands there, and you may ask one
yes-or-no question. You do not know whether the islander is a knight or a knave. What do you ask?

Let $k$ = "you are a knight" and $\ell$ = "the left road leads to the village". Ask:

> "Is it true that you are a knight if and only if the left road leads to the village?"

The question asks about $k \leftrightarrow \ell$. A knight answers "yes" exactly when $k \leftrightarrow \ell$ is
true; a knave answers "yes" exactly when it is false. Check all four cases:

| $k$ | $\ell$ | $k \leftrightarrow \ell$ | answer |
|:-:|:-:|:-:|:-:|
| T | T | T | yes (truthful) |
| T | F | F | no (truthful) |
| F | T | F | yes (lie) |
| F | F | T | no (lie) |

The answer is "yes" exactly when $\ell$ is true. So take the left road on "yes" and the right road on "no". Why does
it work? For a knave, both the question's built-in "$k$" (false) and the lie flip the truth value, and two flips
cancel. A second famous question works for the same reason: "If I asked you whether the left road leads to the
village, would you say yes?" A knave lies about what he would say, and what he would say is itself a lie.

**Try it in Python.** Brute force solves any such puzzle: try all assignments of knight and knave and keep those in
which each speaker's statement matches their type.

```python
from itertools import product

for A, B, C in product([True, False], repeat=3):     # True means knight
    says_A = not A and not B and not C               # "All of us are knaves."
    says_B = (A + B + C) == 1                        # "Exactly one of us is a knight."
    if A == says_A and B == says_B:
        print("A", A, "B", B, "C", C)
```

It prints one line, `A False B True C False`, the answer to puzzle 4. Change the two statements to solve puzzle 5
and you get two lines, both with `C False`.

## A short history thread

Logic as a study of valid argument begins with **Aristotle** (4th century BC), whose *Prior Analytics* analyses
*syllogisms* such as "all men are mortal; all Greeks are men; so all Greeks are mortal". These are about "all" and
"some", the subject of [Chapter 3](03-Quantifiers.md). The logic of whole statements joined by "and", "or" and
"if" was developed by the **Stoics**, above all **Chrysippus** (3rd century BC), whose works are lost and known from
later reports. According to the later writer Sextus Empiricus, **Philo of Megara** held that a conditional is false
only when it leads from a truth to a falsehood, which is exactly the material conditional of section 1.4; his
teacher Diodorus Cronus disagreed, and Sextus also quotes the poet Callimachus joking that even the crows on the rooftops
were cawing about which conditionals are true.

The algebra of logic began in 1847, when **George Boole** published *The Mathematical Analysis of Logic* and
**Augustus De Morgan** published *Formal Logic*. Boole's *An Investigation of the Laws of Thought* (1854) treated
"and" and "or" as a kind of multiplication and addition, the subject of the next chapter. Truth tables in something
like the modern form appear in work of **Charles Sanders Peirce** in the 1880s and 1890s, and were made standard by
**Ludwig Wittgenstein**'s *Tractatus* and **Emil Post**'s doctoral paper, both of 1921. Raymond Smullyan, a
professional logician who did serious work on Gödel's theorems, turned these ideas into puzzles from the 1970s on.

## Check yourself

??? question "1. Which of these are statements? (a) $17$ is even. (b) Is 17 even? (c) $x^2 = 17$. (d) There are infinitely many primes $p$ with $p + 2$ also prime. (e) Please check whether 17 is even."

    (a) is a statement (false). (b) is a question and (e) a request: not statements. (c) is an open sentence; its
    truth depends on $x$, so it is not yet a statement. (d) is a statement: it is the **twin prime conjecture**, and
    nobody knows whether it is true, but it is certainly either true or false.

??? question "2. Let $p$ be '6 is even' and $q$ be '6 is prime'. Find the truth values of $p \wedge \neg q$, $\neg p \vee q$, $p \to q$, $q \to p$, $p \leftrightarrow q$ and $p \oplus q$."

    $p$ is T and $q$ is F. Then $p \wedge \neg q$ is T and T, so T. $\neg p \vee q$ is F or F, so F. $p \to q$ is
    T $\to$ F, so F (the only false row). $q \to p$ is F $\to$ T, so T. $p \leftrightarrow q$ has different values, so
    F. $p \oplus q$ is T. *Check:* $p \to q$ and $\neg p \vee q$ agree, as section 1.4 says they always do.

??? question "3. Write the negation of each, in plain English without 'it is not the case that': (a) 'The shop is open and the lights are on.' (b) 'I will have tea or coffee.' (c) 'x is at least 10.'"

    (a) By De Morgan: "the shop is closed or the lights are off (or both)". (b) "I will have neither tea nor coffee",
    that is, "I will not have tea and I will not have coffee". (c) "$x$ is less than 10". (Not "$x$ is at most 10":
    the case $x = 10$ belongs to the original statement, so it cannot also belong to its negation.)

??? question "4. Build the truth table of $(p \to q) \wedge (q \to r)$ and of $p \to r$. Is it true that whenever the first is true, so is the second?"

    The 8 rows, in the standard order ($p$, $q$, $r$ from TTT to FFF), give
    $p \to q$: T T F F T T T T; $q \to r$: T F T T T F T T; so $(p \to q) \wedge (q \to r)$: T F F F T F T T.
    And $p \to r$: T F T F T T T T. In each row where the first is T (rows 1, 5, 7, 8), the second is T too. So yes:
    this is the **chain rule** (hypothetical syllogism), a valid argument we meet again in Chapter 2. The converse
    fails: in row 3 ($p$ T, $q$ F, $r$ T), $p \to r$ is true but the first formula is false.

??? question "5. For each statement, write its converse and contrapositive and say which of the three are true (for whole numbers $n$): 'If $n$ is prime and greater than 2, then $n$ is odd.'"

    Converse: "if $n$ is odd, then $n$ is prime and greater than 2", false ($n = 9$, or $n = 1$).
    Contrapositive: "if $n$ is even, then $n$ is not prime or $n \le 2$", true (an even number greater than 2 is
    divisible by 2 and by itself, so not prime). The original is true, as it must be since its contrapositive is.
    Notice how the contrapositive negates the "and" with De Morgan.

??? question "6. Rewrite each as 'if ... then': (a) 'You can vote only if you are registered.' (b) 'Passing the final is necessary to pass the course.' (c) 'I go swimming whenever it is sunny.' (d) 'The alarm sounds unless the code is entered.'"

    (a) If you can vote, then you are registered. (b) If you pass the course, then you passed the final.
    (c) If it is sunny, then I go swimming. (d) If the code is not entered, then the alarm sounds. (Strictly, everyday
    "unless" often also suggests "and if the code is entered, it does not sound"; the logical reading keeps only the
    "if not" part.)

??? question "7. A spacecraft's fault-protection rule says: 'enter safe mode if the battery is low and the panels are not charging, or if the temperature is out of range.' Write it with letters $b$, $c$, $t$ and list every situation in which the craft enters safe mode."

    With $b$ = "battery low", $c$ = "panels charging", $t$ = "temperature out of range", safe mode is
    $(b \wedge \neg c) \vee t$. Of the 8 rows, it is true in the four rows with $t$ true, and in the one extra row
    $b$ T, $c$ F, $t$ F. That is 5 situations: any situation with a bad temperature, plus "battery low, not charging,
    temperature fine". (Rules like this are exactly what engineers write as truth tables when they design fault
    protection; Chapter 2 shows how to turn them into circuits.)

??? question "8. Show that $p \to (q \to r)$ and $(p \wedge q) \to r$ have the same truth table. Explain the result in words."

    $(p \wedge q) \to r$ is false only when $p \wedge q$ is T and $r$ is F: the single row $p$ T, $q$ T, $r$ F.
    $p \to (q \to r)$ is false only when $p$ is T and $q \to r$ is F, that is, $p$ T, $q$ T, $r$ F: the same single
    row. So the tables agree. In words: "if $p$, then (if $q$ then $r$)" says the same as "if $p$ and $q$, then $r$".
    This law is called **exportation**.

??? question "9. On the island, A says: 'B is a knight.' B says: 'A and I are of opposite types.' What are A and B?"

    B's statement: if B were a knight, A and B would be opposite, so A would be a knave; but then A's statement "B is
    a knight" would be true, which a knave cannot say. So B is a knave, and B's statement is false: A and B are of the
    same type, so A is also a knave. *Check:* A (knave) says "B is a knight", which is false; B (knave) says "we are
    opposite", which is false since both are knaves. **Both are knaves.**

??? question "10. A says: 'If B is a knight, then I am a knave.' What are A and B?"

    The statement is $b \to \neg a$. If A were a knave, the statement would have to be false, but a conditional is
    false only when its hypothesis is true and conclusion false: $b$ true and $\neg a$ false, that is, A a knight.
    That contradicts A being a knave. So A is a knight and the statement is true: $b \to \neg a$ with $\neg a$ false
    forces $b$ false. **A is a knight, B is a knave.**

??? question "11. You meet three islanders. A says: 'B and C are both knights.' B says: 'A is a knave.' C says: 'A and B are of different types.' What are they?"

    Try A a knight: then B and C are knights; but B then truthfully says A is a knave, a contradiction. So A is a
    knave, and "B and C are both knights" is false: at least one of B, C is a knave. B says "A is a knave", which is
    true, so B is a knight. Then C must be the knave. But C says "A and B are of different types", and A (knave) and B
    (knight) are different, so C's statement is true, and a knave cannot say it. Contradiction: **no assignment
    works**. The puzzle has no solution; three such people cannot meet on the island. (Checking all 8 rows in Python
    confirms that none survives. A careful solver says so instead of forcing an answer.)

??? question "12. Find a single yes-or-no question that, asked of an islander who may be a knight or a knave, gets the answer 'yes' exactly when the islander is a knight."

    Ask about a fact whose answer you already know, for example "Is $2 + 2 = 4$?" A knight answers truthfully,
    "yes"; a knave lies, "no". So "yes" means knight. Notice that "Are you a knight?" is useless: a knight says yes
    truthfully and a knave says yes as a lie. (In the language of puzzle 6, "Are you a knight?" is the question about
    $k \leftrightarrow \ell$ with $\ell$ the true statement "$2 + 2 = 4$", and that method always reports the truth
    value of $\ell$, never the speaker's type.)

## What you learned

- A statement is a sentence that is true or false, not both; questions, commands, open sentences and the liar
  sentence are not statements.
- $\neg$, $\wedge$, $\vee$ are defined by their truth tables; mathematical "or" is inclusive; $\oplus$ is
  "exactly one".
- A truth table on $n$ letters has $2^n$ rows, listed in a fixed order so tables can be compared.
- $p \to q$ is false only when $p$ is true and $q$ false. A false hypothesis makes it (vacuously) true, the only
  choice that lets general theorems work; it differs from everyday "if" in ignoring connections.
- A conditional and its contrapositive always agree; the converse and inverse need not.
- $p \leftrightarrow q$ means "same truth value"; on the knights-and-knaves island, "A says $S$" is
  $a \leftrightarrow S$, and puzzles are solved by trying every case.

**Next:** [Chapter 2](02-Propositional-Logic.md) treats formulas as objects in their own right: tautologies, the laws
of logic, normal forms, and how one connective, NAND, can build every other and every circuit in a computer.

## Further reading

- Raymond Smullyan, *What Is the Name of This Book? The Riddle of Dracula and Other Logical Puzzles*, 1978, and
  *The Lady or the Tiger? and Other Logic Puzzles*, 1982. Hundreds of knights-and-knaves puzzles, leading up to
  Gödel's theorem.
- Daniel J. Velleman, *How to Prove It: A Structured Approach*, 3rd edition, 2019. Chapter 1 covers this chapter and
  the next with many exercises.
- Richard Hammack, *Book of Proof*, 3rd edition, 2018, chapter 2 ("Logic"). Free online from the author.
- Patrick Suppes, *Introduction to Logic*, 1957. A careful older textbook, strong on translating English.
- Alfred Tarski, *Introduction to Logic and to the Methodology of Deductive Sciences*, 1941 (English edition).
- P. C. Wason, "Reasoning", in B. M. Foss (ed.), *New Horizons in Psychology*, 1966. The selection task.
- George Boole, *An Investigation of the Laws of Thought*, 1854.
- On this site: the Topics lessons [Always, sometimes, never](../../topics/logic/level-2/01-always-sometimes-never.md),
  [Valid arguments](../../topics/logic/level-5/05-valid-arguments.md),
  [Fallacies](../../topics/logic/level-5/06-fallacies.md) and [Paradoxes](../../topics/logic/level-7/06-paradoxes.md);
  the U of T guides [MAT137 Unit 1: Logic, Sets & Proofs](../../uoft/MAT137/unit01.md) and
  [MAT158H1 Unit 1: Logic, Sets & Proof](../../uoft/MAT158H1/unit01.md).
