---
title: "Axioms"
---

# Axioms

*Logic and puzzles · level 8, lesson 2 of 6*

## A question to start

Draw a straight line, and a point that is not on it. How many straight lines can you draw through the point that
never meet the first line, however far both are extended?

Obviously one. Tilt it the slightest bit and it meets the first line somewhere, perhaps very far away.

For more than two thousand years, mathematicians tried to **prove** this "obvious" fact from simpler ones. Many
thought they had succeeded; every proof had a hidden gap. In the 1800s the reason was finally found: it **cannot**
be proved, because there are perfectly consistent geometries in which it is false. This lesson is about the
starting points of mathematics, called axioms, and what happens when you change one.

## The idea

### Why we need axioms

A proof uses earlier facts, which were proved from earlier facts still. The chain cannot go back for ever, and it
must not go round in a circle (proving $A$ from $B$ and $B$ from $A$ proves nothing). So every branch of
mathematics starts from a few statements accepted **without proof**: the **axioms**. It also starts from a few
**undefined terms** ("point", "line", "number"), since every definition uses other words and those cannot all be
defined either.

An axiom is not "a fact so obvious it needs no proof". In modern mathematics it is better seen as a **rule of the
game**: "here is what we assume; let us see what follows". Different axioms give different games, and each can be
worth playing.

### Euclid's five postulates

Euclid's *Elements*, written around 300 BC, builds all of geometry from five postulates (his word for axioms about
geometry), plus some general "common notions" such as "things equal to the same thing are equal to each other". In
modern words, the postulates are:

1. A straight line can be drawn from any point to any other point.
2. A straight line segment can be extended as far as you like.
3. A circle can be drawn with any centre and any radius.
4. All right angles are equal.
5. **The parallel postulate.** If a line crosses two other lines and the two inside angles on one side add to less
   than two right angles (180°), then those two lines, extended far enough, meet on that side.

The first four are short and simple. The fifth is long and is about what happens "far enough" away, where nobody can
check. Euclid himself avoided using it for his first 28 propositions. An equivalent and shorter form, named after
John Playfair who popularised it in 1795, is the opening question:

> **Playfair's axiom.** Through a point not on a given line, there is **exactly one** line that does not meet the
> given line.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 170" role="img" aria-label="A line l and a point P above it. One line through P is parallel to l. A slightly tilted line through P meets l far away to the left, beyond the picture.">
  <line x1="20" y1="140" x2="400" y2="140" stroke="currentColor" stroke-width="2"/>
  <line x1="20" y1="60" x2="400" y2="60" stroke="#7ccf9a" stroke-width="3"/>
  <line x1="20" y1="75" x2="400" y2="45" stroke="#eea66f" stroke-width="2" stroke-dasharray="7 4"/>
  <circle cx="210" cy="60" r="5" fill="currentColor"/>
  <g font-size="13" fill="currentColor">
    <text x="214" y="50">P</text>
    <text x="404" y="144">ℓ</text>
    <text x="250" y="80" font-size="12">the one parallel through P</text>
    <text x="22" y="98" font-size="12">tilted: meets ℓ far off to the left</text>
  </g>
</svg>
</div>

### Two thousand years of trying

From the ancient Greeks onward, mathematicians tried to show the fifth postulate follows from the other four, so
that it would be a theorem and not an assumption. In 1733 Girolamo Saccheri tried a proof by contradiction: assume
the postulate is false and hunt for a contradiction. He derived many strange consequences, such as triangles whose
angles add to **less** than 180°, and declared them "repugnant", but he never reached a true contradiction. He did
not realise that there was none to find.

### New geometries

Around 1830, János Bolyai and Nikolai Lobachevsky independently published a geometry in which the parallel postulate
is replaced by its opposite: through a point not on a line there are **many** lines that do not meet it. (Carl
Friedrich Gauss had reached similar ideas privately.) This is **hyperbolic geometry**. In it:

- the angles of a triangle add to **less** than 180°, and the bigger the triangle, the smaller the sum;
- there are no rectangles at all;
- two triangles with the same angles are always the same size.

Going the other way gives **spherical** (or elliptic) geometry, studied by Bernhard Riemann in the 1850s. On the
surface of a ball, take "straight lines" to be **great circles** (circles around the full width of the ball, like
the equator). Any two great circles meet, so there are **no** parallels at all, and the angles of a triangle add to
**more** than 180°. (This needs small changes to the first two postulates as well: two opposite points of a sphere
have many great circles through them, and a "line" cannot be extended for ever, since it comes back on itself. See
[Geometry on a sphere](../../geometry/level-8/06-sphere-geometry.md).)

### Consistency and independence

How do we know hyperbolic geometry does not contain a hidden contradiction that nobody has found yet? In 1868
Eugenio Beltrami built a **model** of it inside ordinary Euclidean geometry: a way of reinterpreting "point" and
"line" as Euclidean objects so that all the hyperbolic axioms become true Euclidean theorems. So if hyperbolic
geometry contained a contradiction, so would Euclidean geometry. This shows that the parallel postulate is
**independent** of the other four: they cannot prove it (or else hyperbolic geometry, where they hold and it fails,
would be contradictory), and they cannot disprove it (Euclidean geometry is a model where it holds).

These words recur in this level:

- A set of axioms is **consistent** if no contradiction can be proved from them.
- A **model** of a set of axioms is a concrete world in which all of them are true.
- A statement is **independent** of a set of axioms if neither it nor its negation can be proved from them. The
  standard way to show it: find one model where it is true and one where it is false.

Which geometry is the "true" geometry of space? That is a question for physics, not logic. On the scale of a room,
Euclid is extremely accurate. Einstein's general relativity (1915) describes space and time as curved by mass, so on
very large scales and near massive bodies, Euclid's geometry is only an approximation.

### The Peano axioms: building the whole numbers

Numbers need axioms too. In 1889 Giuseppe Peano published a list (building on work by Richard Dedekind) that
describes the natural numbers $0, 1, 2, \ldots$ using one undefined object, $0$, and one undefined operation, the
**successor** $S(n)$, which you can think of as "the next number", $n + 1$.

1. $0$ is a natural number.
2. If $n$ is a natural number, so is $S(n)$.
3. $0$ is not the successor of any natural number.
4. Different numbers have different successors: if $S(m) = S(n)$, then $m = n$.
5. **Induction.** If a property holds for $0$, and whenever it holds for $n$ it holds for $S(n)$, then it holds for
   every natural number.

Then $1$ is defined as $S(0)$, $2$ as $S(1)$, $3$ as $S(2)$, and so on. Each axiom is there to rule something out:

- Without axiom 3, the "numbers" could be a loop, like a clock: $0, 1, 2, 0, 1, 2, \ldots$
- Without axiom 4, the sequence could get stuck: $0, 1, 2, 2, 2, \ldots$ (with $S(2) = 2$, so $S(1) = S(2)$).
- Without axiom 5, there could be extra "junk" numbers that are never reached by counting up from $0$.

Axiom 5 is exactly the domino principle of [proof by induction](../../patterns/level-8/01-proof-by-induction.md):
here it is not proved; it is assumed, as part of what "natural number" means.

**Addition** is then defined by two rules:

$$a + 0 = a, \qquad a + S(b) = S(a + b).$$

The second says "adding one more than $b$ is one more than adding $b$". **Multiplication** is defined by
$a \times 0 = 0$ and $a \times S(b) = a \times b + a$. From these, every fact of arithmetic you know can be proved.

## Worked examples

**1. Prove $2 + 2 = 4$ from the Peano axioms.** Remember $2 = S(1)$, $1 = S(0)$, $3 = S(2)$, $4 = S(3)$.

$$2 + 2 = 2 + S(1) = S(2 + 1) = S(2 + S(0)) = S(S(2 + 0)) = S(S(2)) = S(3) = 4.$$

Each step uses one rule: the definition of 2 or 1, the rule $a + S(b) = S(a + b)$, or $a + 0 = a$. Nothing was
taken on trust, not even "two and two make four".

**2. Prove $0 + n = n$ for every natural number $n$.** The definition gives $n + 0 = n$, but not $0 + n = n$, which is
a different statement. We need induction (axiom 5), on $n$.

- *Base*: $0 + 0 = 0$, by the rule $a + 0 = a$.
- *Step*: suppose $0 + n = n$. Then $0 + S(n) = S(0 + n) = S(n)$, using the second rule and then the supposition.

So the property holds for $0$ and passes from each number to the next; by axiom 5 it holds for all $n$. ∎ Proving
$a + b = b + a$ in general takes a few more inductions of the same kind.

**3. A tiny geometry.** Take a "geometry" with just four points $A, B, C, D$, where a "line" is any pair of points
(so there are six lines: $AB, AC, AD, BC, BD, CD$), and two lines are "parallel" if they share no point. Check
Playfair's axiom for the line $AB$ and the point $C$.

The lines through $C$ are $CA$, $CB$ and $CD$. $CA$ meets $AB$ at $A$; $CB$ meets it at $B$; $CD$ shares no point
with $AB$. So there is **exactly one** parallel, as Playfair says. (By symmetry the same holds for every line and
point.) This finite world is a **model** of Playfair's axiom. With three points instead, $A, B, C$, the only lines
through $C$ are $CA$ and $CB$, which both meet $AB$: **no** parallels, like the sphere. With five points, there are
**two** parallels to $AB$ through $E$ ($EC$ and $ED$), like hyperbolic geometry. The axiom is not forced by "points
and lines" alone.

**4. A triangle on Mars.** Mars is very nearly a sphere, of radius about 3390 km. Walk from the north pole due south
to the equator, turn left by 90° and walk a quarter of the way round the equator, then turn left by 90° and walk
back north to the pole. Each side is a quarter of a great circle, about $2\pi \times 3390 \div 4 \approx 5325$ km.
At each corner the angle is 90°, so the angles add to $3 \times 90° = 270°$, not 180°. On a curved surface, the
parallel postulate fails and so does the 180° fact, which [depends on it](../../geometry/level-4/04-parallel-line-angles.md).

## Try it

1. Prove $1 + 1 = 2$ from the Peano rules.
2. Prove $3 + 1 = 4$.
3. Using $a \times 0 = 0$ and $a \times S(b) = a \times b + a$, and worked example 2, prove $2 \times 2 = 4$.
4. Take the "numbers" $\{0, 1, 2\}$ with $S(0) = 1$, $S(1) = 2$, $S(2) = 0$. Which Peano axiom fails?
5. In the four-point geometry of worked example 3, how many lines are there through $D$ parallel to $BC$? Name it.
6. In the five-point geometry (all pairs of $A, B, C, D, E$ are lines), how many lines are there in total, and how
   many lines through $A$ are parallel to $CD$?
7. Explain in your own words what it means that the parallel postulate is **independent** of the other four, and
   how Beltrami's model shows it.
8. Harder. On a sphere of radius $R$, a triangle's area is $R^2$ times (angle sum minus $\pi$), with angles in
   radians. Check this for the Mars triangle of worked example 4, which covers one eighth of the sphere. (The
   sphere's area is $4\pi R^2$.)

??? note "Answers"
    1. $1 + 1 = 1 + S(0) = S(1 + 0) = S(1) = 2$.
    2. $3 + 1 = 3 + S(0) = S(3 + 0) = S(3) = 4$.
    3. $2 \times 2 = 2 \times S(1) = 2 \times 1 + 2$. And $2 \times 1 = 2 \times S(0) = 2 \times 0 + 2 = 0 + 2 = 2$
       (the last step by worked example 2). So $2 \times 2 = 2 + 2 = 4$ (worked example 1).
    4. Axiom 3: $0 = S(2)$, so $0$ is a successor. (Axiom 4 still holds: the three successors are different.)
    5. Lines through $D$: $DA$, $DB$, $DC$. $DB$ meets $BC$ at $B$ and $DC$ meets it at $C$. Only **$DA$** is
       parallel: exactly one.
    6. There are $\binom{5}{2} = 10$ lines. Through $A$: $AB$, $AC$, $AD$, $AE$. $AC$ and $AD$ meet $CD$; $AB$ and
       $AE$ do not. So **two** parallels.
    7. Independent means the other four postulates can neither prove it nor disprove it. Beltrami built a model in
       which the other four hold and the parallel postulate fails, so they cannot prove it (or that model would
       contain a contradiction, and then so would Euclidean geometry, in which the model is built). Euclidean
       geometry itself is a model in which all five hold, so they cannot disprove it.
    8. The angles are three right angles, $3 \times \frac{\pi}{2} = \frac{3\pi}{2}$. So the area is
       $R^2\left(\frac{3\pi}{2} - \pi\right) = \frac{\pi R^2}{2}$. One eighth of $4\pi R^2$ is also
       $\frac{\pi R^2}{2}$. ✓ For Mars that is about $\pi \times 3390^2 \div 2 \approx 18$ million square
       kilometres.

## Common mistake

**Thinking an axiom must be "obviously true".** Axioms are assumptions. Change them and you get a different, and
often equally good, mathematics. The question "is this axiom true?" only makes sense once you say which world (which
model) you mean.

**Using a fact the axioms do not give.** In worked example 2, "$0 + n = n$" looks too obvious to prove, but the
definition only says $n + 0 = n$. In axiomatic work, "obvious" is not a reason.

## Where it leads

- Back: [Predicate logic](01-predicate-logic.md) · Next: [Russell's paradox and sets](03-russells-paradox.md), where
  axioms rescued mathematics from a contradiction.
- [Level 8 page](index.md) · [Logic topic page](../index.md)
- Euclid's proofs and the parallel line facts: [Angles with parallel lines](../../geometry/level-4/04-parallel-line-angles.md)
  and [How to write a geometric proof](../../geometry/level-8/01-geometric-proof.md). Curved geometry:
  [Beyond Euclid: geometry on a sphere](../../geometry/level-8/06-sphere-geometry.md).
- Induction, axiom 5 in action: [Proof by induction](../../patterns/level-8/01-proof-by-induction.md).
- Axioms for the real numbers (the completeness axiom) on the U of T shelf:
  [MAT158 Unit 2: real numbers and least upper bounds](../../../uoft/MAT158H1/unit02.md). Axioms for vector spaces:
  [MAT240 Unit 1](../../../uoft/MAT240H1/unit01.md).
