---
title: "Sets"
---

# Sets

*Logic and puzzles · level 5, lesson 1 of 6*

## A question to start

A pizza shop offers three toppings: mushroom, olive and pepper. You may choose any of them, all of them, or none
(a plain cheese pizza). How many different pizzas can you order?

Most people say 3, or 6, or 7. The answer is **8**:

- plain (no toppings);
- mushroom; olive; pepper;
- mushroom and olive; mushroom and pepper; olive and pepper;
- all three.

Now a stranger question. Is a box with an empty box inside it empty? You would say no: there is something in it,
even if that something is itself empty. Mathematicians agree, and they have a precise language for exactly this kind
of question. It is the language of **sets**, and almost every part of mathematics is written in it.

## The idea

### What a set is

A **set** is a collection of things, thought of as one object. The things in the set are called its **elements**
(or **members**). We usually name sets with capital letters and write the elements between curly brackets:

$$A = \{\text{mushroom}, \text{olive}, \text{pepper}\}, \qquad V = \{a, e, i, o, u\}, \qquad D = \{1, 2, 3, 4, 5, 6\}.$$

The only thing that matters about a set is **which things are in it**. Two consequences:

- **Order does not matter.** $\{1, 2, 3\}$ and $\{3, 1, 2\}$ are the same set.
- **Repeats do not count.** $\{1, 1, 2\}$ is the same set as $\{1, 2\}$. Saying "2 is in it" twice does not put it
  in twice.

So two sets are **equal** exactly when they have the same elements: every element of the first is in the second,
and every element of the second is in the first.

### "Is an element of"

To say that something is in a set we use the symbol $\in$ (a curly E, for "element"):

- $3 \in D$ is read "3 is an element of $D$", or just "3 is in $D$". True.
- $9 \notin D$ is read "9 is not an element of $D$". Also true.

Every question "is $x$ in $A$?" must have a clear yes or no answer. "The set of tall people" is not a proper set,
because "tall" is not clear. "The set of people taller than 180 cm" is fine.

### Two ways to describe a set

**Listing (roster form).** Write every element: $\{2, 4, 6, 8\}$. For a long pattern we may use dots, as long as the
pattern is obvious: $\{1, 2, 3, \ldots, 100\}$ or $\{2, 4, 6, \ldots\}$ (the last one goes on forever).

**Describing (set-builder form).** Give a rule that the elements obey:

$$E = \{\, n : n \text{ is a whole number and } n \text{ is even} \,\}.$$

Read the colon as **"such that"**: "$E$ is the set of all $n$ such that $n$ is a whole number and $n$ is even".
Some books use a bar $|$ instead of the colon; it means the same.

Listing is clearest for small sets. Describing is the only way for big or infinite sets, and it often says **why**
the elements belong together.

### How many elements

If a set has finitely many elements, the number of them is written $|A|$ (the bars here mean "size of"). So
$|V| = 5$ and $|\{1, 1, 2\}| = 2$, because repeats do not count. A set like $E$ above, which goes on forever, is
called **infinite**. (Comparing the sizes of infinite sets is a strange and beautiful story: see
[Infinity](../../infinity/index.md).)

### The empty set

The set with **no elements at all** is called the **empty set**, written $\varnothing$ (or $\{\}$). It is the plain
cheese pizza: a perfectly good choice of toppings that happens to contain none.

Many descriptions turn out to give the empty set:

$$\{\, n : n \text{ is a whole number and } 5 < n < 6 \,\} = \varnothing, \qquad \{\, x : x \text{ is a month with 32 days} \,\} = \varnothing.$$

There is only **one** empty set. Two sets with no elements have exactly the same elements (none), so they are equal.

Careful: $\{\varnothing\}$ is **not** empty. It is a set with one element, and that element happens to be the empty
set. That is the box with an empty box inside: $|\varnothing| = 0$ but $|\{\varnothing\}| = 1$.

### Subsets

A set $B$ is a **subset** of a set $A$, written $B \subseteq A$, if **every element of $B$ is also an element of
$A$**.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 170" role="img" aria-label="A large oval labelled A containing a smaller oval labelled B: B is a subset of A">
  <ellipse cx="150" cy="85" rx="130" ry="72" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor"/>
  <ellipse cx="185" cy="92" rx="55" ry="38" fill="#eea66f" fill-opacity="0.8" stroke="currentColor"/>
  <text x="70" y="70" font-size="18" fill="currentColor">A</text>
  <text x="178" y="98" font-size="18" fill="currentColor">B</text>
</svg>
</div>

For example, $\{2, 4\} \subseteq \{1, 2, 3, 4\}$, and $V \subseteq \{\text{all 26 letters}\}$. But
$\{2, 5\} \not\subseteq \{1, 2, 3, 4\}$, because 5 is not in the bigger set. **One** element outside is enough to
spoil it.

Do not mix up $\in$ and $\subseteq$. $\in$ joins an **element** to a set: $2 \in \{1, 2, 3\}$. $\subseteq$ joins a
**set** to a set: $\{2\} \subseteq \{1, 2, 3\}$. Writing $2 \subseteq \{1, 2, 3\}$ is a mistake: 2 is a number, not
a set.

Two facts surprise people.

- **Every set is a subset of itself.** Every element of $A$ is certainly an element of $A$. If we want to say "$B$ is
  inside $A$ but not all of it", we say $B$ is a **proper subset** and write $B \subset A$ (or $B \subsetneq A$).
- **The empty set is a subset of every set.** Why? To break "$\varnothing \subseteq A$", you would need an element of
  $\varnothing$ that is not in $A$. But $\varnothing$ has no elements at all, so nothing can break the rule. A rule
  that nobody is able to break is true. (This is the same reason "every unicorn in this room is purple" is true: there
  is no unicorn to prove it wrong.)

There is also a neat way to prove two sets are equal: show $A \subseteq B$ and $B \subseteq A$. Each one is half of
"same elements".

### Counting subsets: why there are 8 pizzas

A pizza is just a subset of the set of toppings $\{M, O, P\}$. To build a subset, go through the elements one at a
time and decide: **in or out?**

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 150" role="img" aria-label="Three boxes for M, O and P, each with two choices, in or out, giving 2 times 2 times 2 equals 8 subsets">
  <g stroke="currentColor" stroke-width="1.5">
    <rect x="20" y="30" width="90" height="60" rx="8" fill="#eea66f"/>
    <rect x="140" y="30" width="90" height="60" rx="8" fill="#9cc9ea"/>
    <rect x="260" y="30" width="90" height="60" rx="8" fill="#7ccf9a"/>
  </g>
  <g font-size="15" text-anchor="middle" fill="currentColor">
    <text x="65" y="55">M</text><text x="65" y="78">in / out</text>
    <text x="185" y="55">O</text><text x="185" y="78">in / out</text>
    <text x="305" y="55">P</text><text x="305" y="78">in / out</text>
    <text x="65" y="120">2</text><text x="125" y="120">×</text><text x="185" y="120">2</text><text x="245" y="120">×</text>
    <text x="305" y="120">2</text><text x="385" y="120">= 8</text>
  </g>
</svg>
</div>

There are 2 choices for mushroom, 2 for olive, 2 for pepper, and each set of choices gives a different subset. So
there are $2 \times 2 \times 2 = 8$ subsets. "All out" gives $\varnothing$ and "all in" gives the whole set, and both
count. In general:

$$\text{a set with } n \text{ elements has } 2^n \text{ subsets.}$$

Each new element doubles the count, because every old subset now comes in two versions: without the new element and
with it. (This in-or-out idea is the heart of [choosing in Counting](../../counting/level-5/02-in-or-out.md).)

### The number sets

Some sets are used so often that they have their own letters, written in a double-struck font.

- $\mathbb{N} = \{1, 2, 3, 4, \ldots\}$, the **natural numbers** (counting numbers). Some books include 0; on this
  site we start at 1.
- $\mathbb{Z} = \{\ldots, -3, -2, -1, 0, 1, 2, 3, \ldots\}$, the **integers** (from the German *Zahlen*, "numbers").
- $\mathbb{Q}$, the **rationals**: every number that can be written as a fraction $\frac{a}{b}$ with $a$ and $b$
  integers and $b \neq 0$ (Q for *quotient*). In set-builder form,
  $\mathbb{Q} = \{\, \frac{a}{b} : a, b \in \mathbb{Z},\ b \neq 0 \,\}$.
- $\mathbb{R}$, the **real numbers**: every point on the number line, including numbers like $\sqrt{2}$ and $\pi$
  that are not fractions.

Each is a subset of the next:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 200" role="img" aria-label="Nested boxes: N inside Z inside Q inside R, with sample numbers in each">
  <rect x="10" y="10" width="420" height="180" rx="12" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor"/>
  <rect x="30" y="35" width="300" height="145" rx="12" fill="#7ccf9a" fill-opacity="0.45" stroke="currentColor"/>
  <rect x="50" y="60" width="190" height="110" rx="12" fill="#eea66f" fill-opacity="0.45" stroke="currentColor"/>
  <rect x="70" y="85" width="90" height="75" rx="12" fill="#eea66f" fill-opacity="0.8" stroke="currentColor"/>
  <g font-size="15" fill="currentColor">
    <text x="20" y="30">ℝ</text><text x="40" y="54">ℚ</text><text x="60" y="79">ℤ</text><text x="80" y="104">ℕ</text>
  </g>
  <g font-size="14" text-anchor="middle" fill="currentColor">
    <text x="115" y="128">1, 2, 3</text>
    <text x="200" y="110">0</text><text x="200" y="140">−4</text>
    <text x="285" y="100">1/2</text><text x="285" y="130">−0.75</text><text x="285" y="160">2/3</text>
    <text x="380" y="80">√2</text><text x="380" y="125">π</text>
  </g>
</svg>
</div>

$$\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R}.$$

Each one is a **proper** subset: $0 \in \mathbb{Z}$ but $0 \notin \mathbb{N}$; $\frac{1}{2} \in \mathbb{Q}$ but
$\frac{1}{2} \notin \mathbb{Z}$; $\sqrt{2} \in \mathbb{R}$ but $\sqrt{2} \notin \mathbb{Q}$. (That last fact needs a
proof, and it is a famous one: [Numbers level 6](../../numbers/level-6/03-root-two-irrational.md).)

With these letters, set-builder form gets short. "The even integers" is
$\{\, n \in \mathbb{Z} : n = 2k \text{ for some } k \in \mathbb{Z} \,\}$, read "the set of integers $n$ such that $n$
is twice some integer".

<figure class="play" data-play="venn"><span class="ai-tag">AI-created</span><figcaption><b>Two sets.</b> A and B hold multiples from 1 to 20; the numbers outside both sit in the corners.</figcaption></figure>

## Worked examples

**1. From a description to a list.** List $A = \{\, n \in \mathbb{N} : n^2 < 30 \,\}$.

Try the natural numbers in order: $1^2 = 1$, $2^2 = 4$, $3^2 = 9$, $4^2 = 16$, $5^2 = 25$ all are below 30, and
$6^2 = 36$ is not. Bigger numbers have even bigger squares, so we can stop. $A = \{1, 2, 3, 4, 5\}$ and $|A| = 5$.

If the description said $n \in \mathbb{Z}$ instead, the negative numbers $-1$ to $-5$ and 0 would join in, giving 11
elements. **Which set you start from changes the answer.**

**2. From a list to a description.** Describe $B = \{1, 4, 7, 10, 13, \ldots\}$.

The elements go up by 3 and start at 1, so each is 1 more than a multiple of 3:
$B = \{\, 3k + 1 : k \in \mathbb{Z},\ k \ge 0 \,\}$. Check: $k = 0, 1, 2, 3, 4$ give $1, 4, 7, 10, 13$. ✓

**3. Subset or not?** Let $S = \{\text{squares}\}$, $R = \{\text{rectangles}\}$ and $H = \{\text{rhombuses}\}$
(four equal sides).

- $S \subseteq R$: every square has four right angles, so every square is a rectangle. **True.**
- $R \subseteq S$: a 2 by 5 rectangle is not a square. **False.** One counterexample is enough.
- $S \subseteq H$: every square has four equal sides. **True.** So $S$ is a subset of two different sets.

**4. All the subsets.** List every subset of $\{1, 2, 3\}$, sorted by size.

- size 0: $\varnothing$
- size 1: $\{1\}$, $\{2\}$, $\{3\}$
- size 2: $\{1, 2\}$, $\{1, 3\}$, $\{2, 3\}$
- size 3: $\{1, 2, 3\}$

That is $1 + 3 + 3 + 1 = 8 = 2^3$. ✓ Notice the numbers 1, 3, 3, 1: they are a row of Pascal's triangle, which is
no accident ([Counting level 5](../../counting/level-5/03-pascals-triangle.md)).

**5. Where does each number live?** For each of $-3$, $0.25$, $\frac{10}{5}$, $\sqrt{9}$ and $\sqrt{5}$, give the
smallest of $\mathbb{N}, \mathbb{Z}, \mathbb{Q}, \mathbb{R}$ it belongs to.

- $-3$: an integer, not natural. $\mathbb{Z}$.
- $0.25 = \frac{1}{4}$: $\mathbb{Q}$.
- $\frac{10}{5} = 2$: it **looks** like a fraction, but it is the number 2. $\mathbb{N}$. A set holds numbers,
  not the way they are written.
- $\sqrt{9} = 3$: $\mathbb{N}$, for the same reason.
- $\sqrt{5}$: not a fraction (proved the same way as $\sqrt{2}$). $\mathbb{R}$.

## Try it

1. Let $D = \{1, 2, 3, 4, 5, 6\}$ (a die). True or false: $4 \in D$; $7 \in D$; $\{2, 4, 6\} \subseteq D$;
   $\{0, 1\} \subseteq D$.
2. How many elements: $\{a, b, a, c, b\}$; $\varnothing$; $\{\varnothing\}$; $\{\varnothing, \{\varnothing\}\}$?
3. List the set $\{\, n \in \mathbb{N} : n \text{ is a factor of } 12 \,\}$.
4. Describe in set-builder form: $\{5, 10, 15, 20, \ldots\}$.
5. Which of these are equal to $\varnothing$? (a) the set of even primes; (b) $\{\, x \in \mathbb{Z} : 2x = 7 \,\}$;
   (c) $\{\, x \in \mathbb{Q} : 2x = 7 \,\}$.
6. How many subsets does $\{a, b, c, d\}$ have? How many of them contain $a$?
7. True or false, with a reason: (a) $\mathbb{Z} \subseteq \mathbb{N}$; (b) $\varnothing \subseteq \varnothing$;
   (c) $\varnothing \in \varnothing$.
8. A club has 10 members. The club wants to send a group of members (any size, even nobody) to a meeting. How many
   choices are there? Why is the answer bigger than 1000?

??? note "Answers"
    1. $4 \in D$ **true**. $7 \in D$ **false**. $\{2, 4, 6\} \subseteq D$ **true** (each of 2, 4, 6 is in $D$).
       $\{0, 1\} \subseteq D$ **false** (0 is not in $D$; one outsider spoils it).
    2. $\{a, b, a, c, b\} = \{a, b, c\}$ has **3**. $\varnothing$ has **0**. $\{\varnothing\}$ has **1** (the box
       with an empty box in it). $\{\varnothing, \{\varnothing\}\}$ has **2**: the empty set, and the set containing
       the empty set, which are different things.
    3. The factors of 12: $\{1, 2, 3, 4, 6, 12\}$.
    4. $\{\, 5k : k \in \mathbb{N} \,\}$ (or $\{\, n \in \mathbb{N} : n \text{ is a multiple of } 5 \,\}$).
    5. (a) is **not** empty: 2 is an even prime, so the set is $\{2\}$. (b) **is** empty: $2x = 7$ needs
       $x = 3.5$, which is not an integer. (c) is **not** empty: $3.5 = \frac{7}{2} \in \mathbb{Q}$, so the set is
       $\{\frac{7}{2}\}$. Same rule, different starting set, different answer.
    6. $2^4 = 16$ subsets. For those containing $a$: $a$ is fixed "in", and $b, c, d$ each have 2 choices, so
       $2^3 = 8$. Exactly half, which makes sense: the subsets pair up, with and without $a$.
    7. (a) **False**: $-1 \in \mathbb{Z}$ but $-1 \notin \mathbb{N}$. (b) **True**: every set is a subset of
       itself (and nothing in $\varnothing$ can break the rule). (c) **False**: $\varnothing$ has no elements at
       all, so nothing is an element of it, not even $\varnothing$.
    8. Each group is a subset of the 10 members, so there are $2^{10} = 1024$ choices (including sending nobody).
       It passes 1000 because the count doubles with each member: $2, 4, 8, \ldots, 512, 1024$.

## Common mistake

**Mixing up $\in$ and $\subseteq$.** $3 \in \{1, 2, 3\}$ (an element in a set) is correct, and
$\{3\} \subseteq \{1, 2, 3\}$ (a set inside a set) is correct, but $3 \subseteq \{1, 2, 3\}$ and
$\{3\} \in \{1, 2, 3\}$ are both wrong: the set $\{1, 2, 3\}$ has numbers as its elements, not sets. Ask yourself:
"is the thing on the left a single element, or a whole set?"

**Thinking $\varnothing$ and $\{\varnothing\}$ are the same.** One is an empty box. The other is a box holding an
empty box. Their sizes are 0 and 1.

## Where it leads

- Next: [Union, intersection, complement](02-union-intersection.md), where sets are combined, just as statements are
  combined with *or*, *and* and *not*.
- [Level 5 page](index.md) · [Logic topic page](../index.md) · Back to [Level 4](../level-4/index.md) for statements
  and truth tables.
- Counting subsets grows into combinations: [Counting level 5](../../counting/level-5/index.md). The number sets are
  built up in [Numbers](../../numbers/level-7/01-why-new-numbers.md).
- On the U of T shelf, sets are the first unit of [MAT137](../../../uoft/MAT137/unit01.md) and of
  [MAT158](../../../uoft/MAT158H1/unit01.md); in programming, Python has sets too ([CSC108 unit 6](../../../uoft/CSC108H1/unit06.md)).
