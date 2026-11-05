# The Books shelf: what is there, and what is missing

Checked 5 Nov 2026 by reading this repo (`docs/books/`, `mkdocs.yml`) at commit 84d51bd, and by opening the live pages
on https://math.akadian.ca/books/. This file is a review for planning; it is not part of the site.

## 1. Every book on the site

All ten books are complete: every chapter is written, none is empty or a stub (the shortest chapter, Algebra 11, has
about 4,900 words). Each book has a front page and a Glossary, is in the site menu, and is live. Together they hold
206 chapters and about 1.7 million words.

Every book runs from beginner to expert. Each chapter opens with a box that marks its sections beginner, intermediate,
advanced or expert. All ten begin with beginner sections in Chapter 1 and end at expert, with a closing "Where it
goes" chapter on open problems. The early chapters move fast and point to the Topics shelf for a slower start.

| # | Book | Branch | Chapters | Starts at | Ends at |
| --- | --- | --- | --- | --- | --- |
| 1 | [Algebra](https://math.akadian.ca/books/algebra/index.html) | Algebra (school algebra, then abstract algebra) | 22 | Letters for numbers | Galois theory, modules and representations |
| 2 | [Geometry](https://math.akadian.ca/books/geometry/index.html) | Geometry, with trigonometry, vectors, non-Euclidean and differential geometry | 21 | Points, lines and angles | Manifolds, curved space and general relativity |
| 3 | [Number theory](https://math.akadian.ca/books/number-theory/index.html) | Number theory | 21 | Which numbers divide which | Elliptic curves, modular forms, Fermat's last theorem |
| 4 | [Combinatorics](https://math.akadian.ca/books/combinatorics/index.html) | Discrete mathematics: counting and graph theory | 20 | How many ways? | Ramsey theory, the probabilistic method, codes |
| 5 | [Probability](https://math.akadian.ca/books/probability/index.html) | Probability | 20 | Coin flips and dice | Brownian motion, measure theory, entropy |
| 6 | [Statistics](https://math.akadian.ca/books/statistics/index.html) | Statistics | 20 | Reading data honestly | Causal inference, high-dimensional statistics, learning |
| 7 | [Calculus and analysis](https://math.akadian.ca/books/calculus/index.html) | Calculus and real analysis | 22 | Speed and area | Lebesgue integration, Fourier series |
| 8 | [Linear algebra](https://math.akadian.ca/books/linear-algebra/index.html) | Linear algebra | 20 | Arrows and equations | Spectral theorem, SVD, Jordan form, tensors |
| 9 | [Logic and foundations](https://math.akadian.ca/books/logic/index.html) | Logic, proofs, set theory, computability | 20 | True and false | Gödel's incompleteness theorems, undecidability |
| 10 | [Topology](https://math.akadian.ca/books/topology/index.html) | Topology | 20 | Rubber sheets and bridges | Homology, knots, the Poincaré conjecture |

The site has two other shelves that are not books: **Topics** (13 topics × 8 levels, short lessons for ages about 5
to 17+) and **U of T** (course guides: MAT137, MAT157-159, MAT240, MAT247, MAT257, CSC108, CSC148, PHY131, PHY132,
ENG140). Puzzles and game theory live on a separate site, puzzles.akadian.ca.

### Where the Dedekind cut is

[Calculus and analysis, Chapter 18 "The real numbers", section 18.3 "Dedekind cuts and Cauchy sequences"](https://math.akadian.ca/books/calculus/18-The-Real-Numbers.html#183-dedekind-cuts-and-cauchy-sequences)
(level: advanced). It defines a cut, shows how √2 becomes one, and proves completeness (the supremum of a set of cuts
is their union); it then gives the second construction, from Cauchy sequences. It gives the ideas of the arithmetic
but not every field-axiom check (it says so and points to Rudin's *Principles*). Shorter
mentions: Logic and foundations, Chapters 6, 7 and 8, and the Glossaries of both books.

## 2. Coverage of the main branches

| Branch | Coverage | Where |
| --- | --- | --- |
| Arithmetic and number sense | Covered on the Topics shelf, no book | Topics: Numbers, Ratio rates and money, Measurement (8 levels each). The books start at algebra. |
| Algebra | Covered | Algebra (22 chapters) |
| Geometry | Covered | Geometry (21 chapters) |
| Trigonometry | Partly | One chapter: Geometry 7 (ratios, unit circle, radians, laws of sines and cosines, addition formulas). Trig functions in calculus: Calculus 5, 10. Euler's formula: Algebra 9. No book of its own. |
| Calculus and analysis | Covered | Calculus and analysis (22 chapters) |
| Linear algebra | Covered | Linear algebra (20 chapters) |
| Probability and statistics | Covered | Probability (20) and Statistics (20) |
| Discrete math and combinatorics | Covered | Combinatorics (20), plus Logic and foundations and Number theory |
| Number theory | Covered | Number theory (21 chapters) |
| Logic and proofs | Covered | Logic and foundations (20 chapters); Chapter 4 is "Proofs" |
| Topology | Covered | Topology (20 chapters) |
| Differential equations | Partly | One chapter: Calculus 14 (separable and linear equations, second order, slope fields, Euler's method, existence, the rocket equation). Systems through eigenvalues: Linear algebra 10. Heat and wave equations and separation of variables only appear briefly (Calculus 17, 21, 22). No phase plane, no Laplace transform, no full PDE treatment. |
| Numerical methods | Partly | Linear algebra 18 (floating point, conditioning, iterative methods, QR). Newton's method: Calculus 7. Bisection: Calculus 3. Trapezoid and Simpson's rules: Calculus 10. Euler's method: Calculus 14. No book; no chapter on error analysis, interpolation or ODE solvers as a whole. |
| Mathematical modelling | Partly, scattered | Examples in most books (rocket equation and orbits in Calculus 14, regression in Statistics 11-12, Markov chains in Probability 13), but no chapter or book that teaches how to build and test a model. |
| History of mathematics | Partly, scattered | A history section (most titled "A short history") in 86 of the 206 chapters, in all ten books. No history book. |
| Contest math | Missing as a book | Seven chapters mention contests; Combinatorics 4 (pigeonhole) and Geometry 12 (classical theorems) are contest staples. Puzzles and the ideas behind them (invariants, game theory, counting) are on puzzles.akadian.ca. No problem-solving book. |

Two branches outside that list are also missing: **complex analysis** (no Cauchy integral formula; complex numbers
stop at Algebra 9 and Geometry 13) and **optimisation and game theory** (Lagrange multipliers in Calculus 15 and
linear programming mentions only; game theory is on the puzzles site). Cryptography has its own site.

## 3. Books to add, in order

For the site's readers: students in the TTMath course first, then everyday people.

1. **Problem solving and contest math.** For TTMath students preparing for contests (CCC, AMC, Euclid): strategies
   (work backwards, invariants, extremes, pigeonhole), then contest topics by level, with past-style problems and
   folded answers. Links out to puzzles.akadian.ca.
2. **Trigonometry.** The one high-school branch with only one chapter. Graphs, inverse functions, identities and
   equations, vectors and waves, and its uses on Mars (orbits, surveying, sunlight angles). Physics students need it.
3. **Differential equations and modelling.** Fills two partial branches in one book: how to build a model, first-order
   and second-order equations, systems and the phase plane, Laplace transform, numerical solvers, then heat and wave
   equations. Mars examples: rockets, air in a habitat, crops, populations.
4. **History of mathematics.** The most readable book for everyday people: one story from counting tallies to today,
   pointing into the other books' "short history" sections.
5. **Numerical methods.** Floating point, root finding, interpolation, numerical integration, ODE solvers, error;
   ties to cs.akadian.ca.
6. **Complex analysis.** The main university branch still missing: analytic functions, contour integrals, Cauchy's
   theorem, residues, conformal maps; it would also finish the story the Number theory book starts with the zeta
   function.

No new book is needed for arithmetic and number sense: the Topics shelf already covers it from age 5, and the Books
page already points there.
