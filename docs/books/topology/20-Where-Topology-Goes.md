# 20. Where topology goes

*You started this book with a coffee cup and a doughnut and ended Part V with the Poincaré conjecture. Topology does not
stop there. This last chapter is a guided tour of the frontier: spheres that are the same shape but not the same smooth
shape, a version of Poincaré's question in four dimensions that nobody can answer, the homotopy groups of spheres that
nobody can fully compute, topology inside physics, where integers measured in a laboratory turn out to be topological
invariants, the idea of computing with braids, and a list of open problems. Each section states things honestly, proves
what can be proved in a page, gives examples you can check, and says where the full story is told.*

!!! abstract "In this chapter"
    **You will learn:**

    - what a smooth structure is, Milnor's exotic 7-spheres, and the strange case of exotic $\mathbb{R}^4$
    - the smooth 4-dimensional Poincaré conjecture, the main open problem of its kind
    - the homotopy groups of spheres, the Hopf map $S^3 \to S^2$, and why no one has a formula for them
    - how topology explains quantised quantities in physics, and what the 2016 Nobel Prize in Physics was for
    - the idea of topological quantum computing, and its honest status
    - a list of open problems, and some recently solved ones

    **You need:** the whole book, especially [Chapter 11](11-Manifolds.md) (manifolds),
    [Chapter 14](14-The-Circle-and-Covering-Spaces.md) (winding numbers), [Chapter 17](17-Applications-of-Algebraic-Topology.md)
    (degree), [Chapter 18](18-Knot-Theory.md) (knots, the Jones polynomial, braids) and
    [Chapter 19](19-The-Poincare-Conjecture.md) (the Poincaré conjecture and its higher-dimensional versions). This chapter
    states more than it proves; where a proof is given it is complete, and where it is not, the text says where to find it.

    **Levels:** all sections are expert in content but written as a survey. 20.3 and 20.6 can be read after Part IV;
    20.1 and 20.2 build on Chapter 19; 20.4 and 20.5 need some physics vocabulary, explained as it comes.

## 20.1 Exotic spheres and exotic $\mathbb{R}^4$

*Level: expert.* In [Chapter 11](11-Manifolds.md) a **smooth structure** on a manifold was an atlas of charts whose
transition maps are infinitely differentiable. Two smooth manifolds are **diffeomorphic** if there is a homeomorphism
between them that is smooth with smooth inverse. A homeomorphism can have corners and kinks; a diffeomorphism cannot.
For a long time it seemed obvious that a manifold homeomorphic to a sphere would be diffeomorphic to it. It is not true.

### Milnor's spheres

In 1956 John Milnor constructed smooth 7-dimensional manifolds that are homeomorphic to $S^7$ but not diffeomorphic to
it. He built them as bundles over $S^4$ with fibre $S^3$ (each looks locally like a piece of $S^4$ times a 3-sphere, glued
with a twist given by unit quaternions), showed by a Morse function with only two critical points that some of them are
homeomorphic to $S^7$ (a manifold with such a function is a union of two discs glued along the boundary, as in 19.2),
and found an invariant, computed from the characteristic classes of a bounding 8-manifold, that is defined only for
smooth structures and differs from its value on the standard $S^7$. Such manifolds are called **exotic spheres**. Milnor
received a Fields Medal in 1962.

In 1963 Michel Kervaire and Milnor organised all of them. For $n \ge 5$ the smooth homotopy $n$-spheres, up to
orientation-preserving diffeomorphism, form a finite abelian group $\Theta_n$ under connected sum, with the standard
sphere as identity. The orders of the first groups are

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $\lvert\Theta_n\rvert$ | 1 | 1 | 1 | ? | 1 | 1 | 28 | 2 | 8 | 6 | 992 | 1 | 3 | 2 | 16256 |

So there are 28 oriented smooth structures on the 7-sphere, and 992 on the 11-sphere. (In dimensions 1 and 2 uniqueness
is classical, and in dimension 3 it follows from Moise's theorem that every topological 3-manifold has a unique smooth
structure, together with Perelman. Dimension 4 is the subject of 20.2.) In 1966 Egbert Brieskorn found the 28 exotic
7-spheres in algebraic geometry: the intersection of the complex hypersurface $z_1^{6k-1} + z_2^3 + z_3^2 + z_4^2 + z_5^2
= 0$ in $\mathbb{C}^5$ with a small sphere $S^9$ around the origin is, for $k = 1, 2, \dots, 28$, each of the 28 in turn.

The computation of $\Theta_n$ reduces, by Kervaire and Milnor's work, to the stable homotopy groups of spheres (20.3),
which is why it is not known in general. In 2017 Guozhen Wang and Zhouli Xu completed the proof that in odd dimensions
the only spheres with a unique smooth structure are $S^1$, $S^3$, $S^5$ and $S^{61}$.

### Exotic $\mathbb{R}^4$

For Euclidean space the answer is stranger. $\mathbb{R}^n$ has exactly one smooth structure up to diffeomorphism for
every $n \ne 4$ (for $n \ge 5$ this is a theorem of Stallings from 1962; for $n \le 3$ it is classical). For $n = 4$ there
are **exotic $\mathbb{R}^4$s**: smooth manifolds homeomorphic to $\mathbb{R}^4$ but not diffeomorphic to it. They came out
of two results of the early 1980s that pull in opposite directions:

- Freedman's work (19.2) showed that topological 4-manifolds are flexible: for instance, there is a closed topological
  4-manifold whose intersection form (the pairing of 2-dimensional homology classes) is the $E_8$ form.
- Simon Donaldson's theorem (1983), proved with gauge theory from physics (the Yang-Mills equations), showed that smooth
  4-manifolds are rigid: a closed, simply connected smooth 4-manifold whose intersection form is definite must have a
  diagonalisable form. The $E_8$ manifold therefore has no smooth structure.

Combining the two produces exotic smooth structures on $\mathbb{R}^4$, and Clifford Taubes showed in 1987 that there
are uncountably many. Donaldson and Freedman both received Fields Medals in 1986. Four is the only dimension in which
Euclidean space is not unique, and nobody has a short explanation of why four is so special, beyond the observation that
it is high enough for complicated phenomena and too low for the Whitney trick.

## 20.2 The smooth 4-dimensional Poincaré conjecture

*Level: expert.* Freedman proved that a closed 4-manifold homotopy equivalent to $S^4$ is *homeomorphic* to $S^4$. The
smooth version is open:

**Smooth 4-dimensional Poincaré conjecture.** *A smooth closed 4-manifold homotopy equivalent to $S^4$ is diffeomorphic to
$S^4$.*

It is the last unsolved case of the generalised Poincaré conjecture in the smooth category below dimension 5 (in higher
dimensions the smooth version is false, by 20.1). Experts disagree about whether it is true. Some reasons for the
difficulty:

- The tools that classify topological 4-manifolds (Freedman) cannot see smooth structures, and the tools that see smooth
  structures (Donaldson's invariants, and Seiberg-Witten invariants from 1994) give no information on homotopy 4-spheres:
  they vanish or are undefined there.
- Several families of proposed counterexamples, built by cutting and regluing (Gluck twists, and the spheres of Cappell
  and Shaneson from 1976), have turned out, one after another, to be standard after all, sometimes after decades and
  long explicit sequences of handle moves.
- A related question is the smooth 4-dimensional **Schoenflies problem**: does every smoothly embedded 3-sphere in $S^4$
  bound a smooth ball on each side? It is also open.

New invariants from knot theory have been tried. If a knot in $S^3$ bounds a smooth disc in some homotopy 4-ball but not
in the standard 4-ball, that would disprove the conjecture; Freedman, Gompf, Morrison and Walker proposed using Khovanov
homology (18.3) to detect this, but the candidates they examined did not give a counterexample. Related techniques have
had other successes: in 2020 Lisa Piccirillo proved that the Conway knot, an 11-crossing knot whose status had been open
for decades, is not **slice** (does not bound a smooth disc in the 4-ball).

## 20.3 Homotopy groups of spheres

*Level: expert.* The fundamental group uses loops, maps $S^1 \to X$. Use spheres of higher dimension and you get the
**higher homotopy groups**:

$$
\pi_k(X) = \{\text{maps } S^k \to X \text{ sending a base point to a base point}\} / \text{homotopy} .
$$

Composition is defined as for loops, by squeezing the equator of $S^k$ to a point and using one map on each half. For
$k \ge 2$ the group is **abelian**: in a $k$-dimensional cube there is room to slide the two halves around each other.
Homotopy groups are the most natural invariants imaginable, and computing them for the simplest spaces, the spheres, is
one of the hardest problems in mathematics.

### What is known easily

- $\pi_k(S^n) = 0$ for $k < n$. A map $S^k \to S^n$ can be deformed to a smooth one, whose image has dimension at most
  $k < n$ and so misses a point; the sphere minus a point is contractible, so the map is null-homotopic. (This is the
  argument by which $\pi_1(S^2) = 0$ in [Chapter 13](13-The-Fundamental-Group.md).)
- $\pi_n(S^n) \cong \mathbb{Z}$, the isomorphism being the degree ([Chapter 17](17-Applications-of-Algebraic-Topology.md),
  Hopf's theorem).
- $\pi_k(S^1) = 0$ for $k \ge 2$, because the universal cover of $S^1$ is the contractible line
  ([Chapter 14](14-The-Circle-and-Covering-Spaces.md)) and covering maps induce isomorphisms on $\pi_k$ for $k \ge 2$.

So for the circle everything is known. For $S^2$ the next group already holds a surprise.

### The Hopf map: $\pi_3(S^2) \cong \mathbb{Z}$

Homology says $S^2$ has nothing in dimension 3: $H_3(S^2) = 0$. Yet in 1931 Heinz Hopf found a map $S^3 \to S^2$ that is
not null-homotopic. Think of $S^3$ as pairs of complex numbers $(z, w)$ with $|z|^2 + |w|^2 = 1$, and $S^2$ as the unit
sphere in $\mathbb{R}^3 = \mathbb{C} \times \mathbb{R}$. The **Hopf map** is

$$
H(z, w) = \left(2 z \bar w,\; |z|^2 - |w|^2\right) .
$$

**Worked example 1.** *It lands on $S^2$:*

$$
|2z\bar w|^2 + \left(|z|^2 - |w|^2\right)^2 = 4|z|^2|w|^2 + |z|^4 - 2|z|^2|w|^2 + |w|^4 = \left(|z|^2 + |w|^2\right)^2 = 1 .
$$

*Its fibres are circles:* multiplying both coordinates by $e^{i\theta}$ does not change $z \bar w$ (the factors
$e^{i\theta}$ and $e^{-i\theta}$ cancel) or $|z|, |w|$, so $H$ is constant on each circle $\{(e^{i\theta}z,
e^{i\theta}w)\}$. Conversely, $H(z,w)$ determines $(z, w)$ up to such a factor. So $S^3$ is a union of disjoint circles,
one over each point of $S^2$: the **Hopf fibration**.

*Two fibres:* over the north pole $(0, 1)$ we need $|w| = 0$, giving the circle $\{(e^{i\theta}, 0)\}$; over the south pole
$(0, -1)$ we need $z = 0$, giving $\{(0, e^{i\theta})\}$. These two great circles of $S^3$, seen through stereographic
projection into $\mathbb{R}^3$, become a round circle and a straight line through it (closing up through the point at
infinity): they are **linked once**, a Hopf link ([Chapter 18](18-Knot-Theory.md)). In fact any two fibres are linked
once.

<div class="pattern-row" markdown="0">
<svg viewBox="70 30 290 165" role="img" aria-label="Two circles linked once, like two links of a chain: a Hopf link. These are two fibres of the Hopf map, the circles of the 3-sphere lying over the north and south poles of the 2-sphere">
  <polyline points="230,100 229.8,103.1 229.3,106.3 228.5,109.4 227.3,112.4 225.8,115.4 223.9,118.3 221.8,121.1 219.4,123.8 216.6,126.5" fill="none" stroke="#eea66f" stroke-width="5" stroke-linecap="round"/>
  <polyline points="190.7,140.4 186.2,141.7 181.6,142.8 176.9,143.7 172.2,144.3 167.3,144.8 162.4,145 157.6,145 152.7,144.8 147.8,144.3 143.1,143.7 138.4,142.8 133.8,141.7 129.3,140.4 125,139 120.9,137.3 116.9,135.5 113.2,133.4 109.6,131.3 106.4,128.9 103.4,126.5 100.6,123.8 98.2,121.1 96.1,118.3 94.2,115.4 92.7,112.4 91.5,109.4 90.7,106.3 90.2,103.1 90,100 90.2,96.9 90.7,93.7 91.5,90.6 92.7,87.6 94.2,84.6 96.1,81.7 98.2,78.9 100.6,76.2 103.4,73.5 106.4,71.1 109.6,68.7 113.2,66.6 116.9,64.5 120.9,62.7 125,61 129.3,59.6 133.8,58.3 138.4,57.2 143.1,56.3 147.8,55.7 152.7,55.2 157.6,55 162.4,55 167.3,55.2 172.2,55.7 176.9,56.3 181.6,57.2 186.2,58.3 190.7,59.6 195,61 199.1,62.7 203.1,64.5 206.8,66.6 210.4,68.7 213.6,71.1 216.6,73.5 219.4,76.2 221.8,78.9 223.9,81.7 225.8,84.6 227.3,87.6 228.5,90.6 229.3,93.7 229.8,96.9 230,100" fill="none" stroke="#eea66f" stroke-width="5" stroke-linecap="round"/>
  <polyline points="320,100 319.8,103.1 319.3,106.3 318.5,109.4 317.3,112.4 315.8,115.4 313.9,118.3 311.8,121.1 309.4,123.8 306.6,126.5 303.6,128.9 300.4,131.3 296.8,133.4 293.1,135.5 289.1,137.3 285,139 280.7,140.4 276.2,141.7 271.6,142.8 266.9,143.7 262.2,144.3 257.3,144.8 252.4,145 247.6,145 242.7,144.8 237.8,144.3 233.1,143.7 228.4,142.8 223.8,141.7 219.3,140.4 215,139 210.9,137.3 206.9,135.5 203.2,133.4 199.6,131.3 196.4,128.9 193.4,126.5 190.6,123.8 188.2,121.1 186.1,118.3 184.2,115.4 182.7,112.4 181.5,109.4 180.7,106.3 180.2,103.1 180,100 180.2,96.9 180.7,93.7 181.5,90.6 182.7,87.6 184.2,84.6 186.1,81.7 188.2,78.9 190.6,76.2 193.4,73.5" fill="none" stroke="#9cc9ea" stroke-width="5" stroke-linecap="round"/>
  <polyline points="219.3,59.6 223.8,58.3 228.4,57.2 233.1,56.3 237.8,55.7 242.7,55.2 247.6,55 252.4,55 257.3,55.2 262.2,55.7 266.9,56.3 271.6,57.2 276.2,58.3 280.7,59.6 285,61 289.1,62.7 293.1,64.5 296.8,66.6 300.4,68.7 303.6,71.1 306.6,73.5 309.4,76.2 311.8,78.9 313.9,81.7 315.8,84.6 317.3,87.6 318.5,90.6 319.3,93.7 319.8,96.9 320,100" fill="none" stroke="#9cc9ea" stroke-width="5" stroke-linecap="round"/>
  <text x="135" y="180" text-anchor="middle" font-size="13" fill="currentColor">fibre over N</text>
  <text x="285" y="180" text-anchor="middle" font-size="13" fill="currentColor">fibre over S</text>
</svg>
</div>

The **Hopf invariant** of a smooth map $f: S^3 \to S^2$ is the linking number of the preimages of two different regular
values. It is a homotopy invariant (Hatcher, section 4.B, or Bott and Tu's *Differential Forms in Algebraic Topology*). The
constant map has Hopf invariant 0 and $H$ has Hopf invariant 1, so $H$ is not null-homotopic, and in fact $\pi_3(S^2)
\cong \mathbb{Z}$, generated by $H$, with the Hopf invariant as the isomorphism.

**Try it in Python.** Check both facts at random points:

```python
import cmath, math, random

def hopf(z, w):
    u = 2 * z * w.conjugate()
    return (u.real, u.imag, abs(z)**2 - abs(w)**2)

for _ in range(3):
    v = [random.gauss(0, 1) for _ in range(4)]
    r = math.sqrt(sum(x * x for x in v))
    z, w = complex(v[0], v[1]) / r, complex(v[2], v[3]) / r
    p = hopf(z, w)
    q = hopf(cmath.exp(1j) * z, cmath.exp(1j) * w)       # another point of the same circle
    print(round(sum(x * x for x in p), 12), max(abs(a - b) for a, b in zip(p, q)) < 1e-12)
# 1.0 True   (three times)
```

### The table, and why there is no formula

Here are some of the groups, with $\mathbb{Z}_m$ meaning the cyclic group of order $m$.

| | $\pi_1$ | $\pi_2$ | $\pi_3$ | $\pi_4$ | $\pi_5$ | $\pi_6$ | $\pi_7$ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $S^1$ | $\mathbb{Z}$ | 0 | 0 | 0 | 0 | 0 | 0 |
| $S^2$ | 0 | $\mathbb{Z}$ | $\mathbb{Z}$ | $\mathbb{Z}_2$ | $\mathbb{Z}_2$ | $\mathbb{Z}_{12}$ | $\mathbb{Z}_2$ |
| $S^3$ | 0 | 0 | $\mathbb{Z}$ | $\mathbb{Z}_2$ | $\mathbb{Z}_2$ | $\mathbb{Z}_{12}$ | $\mathbb{Z}_2$ |
| $S^4$ | 0 | 0 | 0 | $\mathbb{Z}$ | $\mathbb{Z}_2$ | $\mathbb{Z}_2$ | $\mathbb{Z} \oplus \mathbb{Z}_{12}$ |

Some patterns can be proved:

- **Serre (1951).** $\pi_k(S^n)$ is finite except for $\pi_n(S^n) \cong \mathbb{Z}$ and, for even $n$,
  $\pi_{2n-1}(S^n)$, which is $\mathbb{Z}$ plus a finite group. (Look at $\pi_3(S^2)$ and $\pi_7(S^4)$ in the table.)
- **Freudenthal (1937).** Suspension (Chapter 6) gives maps $\pi_{n+k}(S^n) \to \pi_{n+k+1}(S^{n+1})$ that are
  isomorphisms once $n > k + 1$. So along each diagonal of the table the groups eventually stop changing. The limits are
  the **stable homotopy groups of spheres** $\pi_k^s$:

| $k$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $\pi_k^s$ | $\mathbb{Z}$ | $\mathbb{Z}_2$ | $\mathbb{Z}_2$ | $\mathbb{Z}_{24}$ | 0 | 0 | $\mathbb{Z}_2$ | $\mathbb{Z}_{240}$ |

The 24 and the 240 are not random: they come from Bernoulli numbers, through the "image of J", a part of the stable groups
that Frank Adams computed in the 1960s.

- **Adams (1960)** settled the **Hopf invariant one problem**: maps $S^{2n-1} \to S^n$ of Hopf invariant one exist only
  for $n = 2, 4, 8$ (built from the complex numbers, quaternions and octonions, as $H$ is built from $\mathbb{C}$). A
  corollary: $\mathbb{R}^n$ can be given a continuous multiplication with a two-sided identity and no zero divisors only
  for $n = 1, 2, 4, 8$. That real division algebras exist only in these dimensions had been proved in 1958 by Bott and
  Milnor and by Kervaire, also with topology.

Beyond such patterns, the groups are computed one at a time with heavy machinery (spectral sequences, and lately computer
calculation). The stable groups are now known through dimension around 90 (Isaksen, Wang and Xu, 2023). There is no
formula, and many topologists doubt that a closed formula exists. The **Kervaire invariant problem**, about certain
elements of these groups, was resolved in all dimensions except 126 by Hill, Hopkins and Ravenel (published 2016); that
last case has been the subject of more recent work.

## 20.4 Topology in physics

*Level: expert (survey).* Topological invariants are integers, and integers cannot change a little. If a physical quantity
is secretly a topological invariant, it will be exactly quantised and immune to small imperfections. That is the theme of
this section.

**A model: Gauss-Bonnet.** For a closed surface with any Riemannian metric, the total curvature is $2\pi$ times an integer:

$$
\int_\Sigma K \, dA = 2\pi\, \chi(\Sigma) .
$$

Dent the surface and $K$ changes everywhere, but the integral does not move. Check on a round sphere of radius $r$:
$K = 1/r^2$, area $4\pi r^2$, integral $4\pi = 2\pi \cdot 2$.

**The quantum Hall effect.** In 1980 Klaus von Klitzing found that a thin layer of electrons at low temperature in a
strong magnetic field has a Hall conductance (the sideways current per unit voltage) that is exactly an integer multiple
of $e^2/h$, where $e$ is the electron charge and $h$ is Planck's constant, to a precision of parts per billion, no matter
how impure the sample. (He received the 1985 Nobel Prize in Physics.) In 1982 David Thouless, Mahito Kohmoto, Peter
Nightingale and Marcel den Nijs explained the integer: it is the **Chern number** of a complex line bundle over a torus
(the "Brillouin zone" of electron momenta, which is a torus because momenta in a crystal are periodic). The Chern number
is the integral of a curvature, divided by $2\pi$, just like Gauss-Bonnet, and it is an integer for the same reason.

**Try it in Python.** A standard toy model has, at each momentum $(k_x, k_y)$ of the torus, a $2 \times 2$ matrix whose
lower eigenvector (the occupied state) we follow around the torus. The Chern number counts how many times that
eigenvector "winds" as you cover the torus; a lattice method (Fukui, Hatsugai and Suzuki, 2005) computes it by adding the
phase changes around each small square.

```python
import cmath, math

def lower_band(kx, ky, m):
    dx, dy, dz = math.sin(kx), math.sin(ky), m + math.cos(kx) + math.cos(ky)
    e = math.sqrt(dx * dx + dy * dy + dz * dz)
    u, v = complex(dx, -dy), -(dz + e)
    if abs(u) + abs(v) < 1e-9:                  # use the other chart
        u, v = complex(e - dz), -complex(dx, dy)
    n = math.sqrt(abs(u) ** 2 + abs(v) ** 2)
    return u / n, v / n

def chern(m, N=40):
    k = [2 * math.pi * i / N for i in range(N)]
    s = [[lower_band(a, b, m) for b in k] for a in k]
    dot = lambda p, q: p[0].conjugate() * q[0] + p[1].conjugate() * q[1]
    total = 0.0
    for i in range(N):
        for j in range(N):
            a, b = s[i][j], s[(i + 1) % N][j]
            c, d = s[(i + 1) % N][(j + 1) % N], s[i][(j + 1) % N]
            total += cmath.phase(dot(a, b) * dot(b, c) * dot(c, d) * dot(d, a))
    return round(total / (2 * math.pi))

for m in [-3, -1, 1, 3]:
    print(m, chern(m))      # -3 0, -1 -1, 1 1, 3 0
```

The answer is $+1$ for $0 < m < 2$, $-1$ for $-2 < m < 0$, and $0$ for $|m| > 2$. It can change only at $m = 0, \pm 2$,
where the two eigenvalues $\pm|d|$ meet (the vector $d$ vanishes at some momentum). That is a **topological phase
transition**: the integer cannot change smoothly, so it changes only where the structure breaks down.

**Vortices and the BKT transition.** In a thin film of a superfluid, or in a two-dimensional model of magnetic arrows
free to turn in a plane, the defects are **vortices**: points around which the arrows wind once, as a winding number in
the sense of [Chapter 14](14-The-Circle-and-Covering-Spaces.md). In the early 1970s Vadim Berezinskii, and independently
J. Michael Kosterlitz and David Thouless, showed that such systems have a phase transition of a new kind: at low
temperature vortices exist only in tightly bound pairs of opposite winding, and above a critical temperature they unbind.

**Topological phases.** In the 1980s Duncan Haldane found topological effects in chains of magnetic atoms (1983), and a
model (1988) showing that the quantum Hall effect does not need an overall magnetic field. Later, Charles Kane and Eugene
Mele (2005) predicted **topological insulators**, materials that insulate inside but must conduct along their edges or
surfaces because of a topological invariant of their bands; the first was observed in 2007.

The **2016 Nobel Prize in Physics** went one half to David Thouless and the other half to Duncan Haldane and Michael
Kosterlitz, "for theoretical discoveries of topological phase transitions and topological phases of matter".

Two honest remarks. First, the topology here is usually of an abstract space, such as a bundle over the torus of
momenta, not the shape of the material. Second, the mathematics needed (vector bundles, characteristic classes, K-theory
for the classification of topological insulators) goes beyond this book; it builds on the homology of
[Chapter 16](16-Homology.md) and the covering spaces of Chapter 14.

**Topological quantum field theory.** In 1988 Michael Atiyah wrote down axioms for a **topological quantum field theory**:
a rule that assigns vector spaces to surfaces and linear maps to 3-manifolds bounded by them, compatible with gluing. In
1989 Edward Witten showed that Chern-Simons theory, a quantum field theory in three dimensions, gives such a rule and that
its values on knots are the Jones polynomial of [Chapter 18](18-Knot-Theory.md). Witten received a Fields Medal in 1990,
the same year as Vaughan Jones.

## 20.5 Topological quantum computing

*Level: expert (survey, brief).* A quantum computer stores information in fragile quantum states, which noise destroys.
The idea of **topological quantum computing**, due mainly to Alexei Kitaev (around 1997, published 2003) and Michael
Freedman, is to store information in *topological* properties of a physical system, which local noise cannot change, as
local dents cannot change the integral in Gauss-Bonnet.

**Braids instead of swaps.** In three-dimensional space, swapping two identical particles twice is the same as doing
nothing: the path can be deformed away. In two dimensions it cannot, because the paths of the particles in spacetime form
a **braid**, and braids can be tangled ([Chapter 18](18-Knot-Theory.md) used braids to draw the trefoil). The braid group
$B_n$ on $n$ strands has generators $\sigma_1, \dots, \sigma_{n-1}$ (strand $i$ crosses over strand $i+1$) and relations

$$
\sigma_i \sigma_{i+1} \sigma_i = \sigma_{i+1} \sigma_i \sigma_{i+1}, \qquad \sigma_i \sigma_j = \sigma_j \sigma_i
\text{ for } |i - j| \ge 2 .
$$

The first relation is the R3 move of Chapter 18. Particles in two dimensions whose exchanges act on the quantum state by
matrices depending on the braid are called **anyons**; if the matrices do not commute they are **non-abelian anyons**.
A computation is then a braid: move the anyons around each other, and the result depends only on the braid's topology.
Freedman, Larsen and Wang showed (2002) that certain anyon models, such as "Fibonacci anyons", can approximate any quantum
computation. Conversely, a quantum computer can approximate values of the Jones polynomial at certain roots of unity
efficiently (Aharonov, Jones and Landau, 2006), a task believed hard for ordinary computers.

**Kitaev's toric code.** In Kitaev's model, qubits sit on the edges of a grid drawn on a surface, and the protected states
are counted by topology: on a closed orientable surface of genus $g$ there are $4^g$ of them, so 4 on a torus. Errors that
act locally cannot move between them; only an error that runs all the way around a non-contractible loop can.

**Status, honestly.** Non-abelian anyons are predicted in certain quantum Hall states and in engineered
superconducting devices hosting "Majorana zero modes". Experimental claims have been made and disputed; one prominent
2018 claim of a Majorana signature was retracted in 2021. Whether a useful topological qubit can be built is an open
experimental question, and readers should check current literature rather than any book, including this one.

## 20.6 Open problems

*Level: expert (survey).* Some problems from this book that are still open, stated as precisely as a survey allows:

- **Smooth 4D Poincaré conjecture** (20.2) and the smooth **4D Schoenflies problem**.
- **Homotopy groups of spheres** (20.3). No general formula; each new range of the stable groups is a research project.
- **Unknot recognition** (18.5). Is there a polynomial-time algorithm?
- **Does the Jones polynomial detect the unknot?** (18.3). Is $V_K = 1$ only for the unknot?
- **The slice-ribbon conjecture** (Ralph Fox, 1960s). Every knot that bounds a smooth disc in the 4-ball bounds one of a
  special kind, a "ribbon" disc that can be pushed into the 3-sphere with only simple self-intersections.
- **The volume conjecture** (Kashaev; H. Murakami and J. Murakami, around 2000). The growth of certain "coloured" Jones
  polynomials of a knot determines the hyperbolic volume of its complement, linking Chapter 18 to the hyperbolic geometry of
  Chapter 19.
- **The Andrews-Curtis conjecture** (1965). Every balanced presentation of the trivial group can be reduced to the trivial
  presentation by a specific list of moves. Many believe it false, but no counterexample has been proved.
- **Whitehead's asphericity conjecture** (1941). Every subcomplex of an aspherical 2-dimensional complex (one whose
  universal cover is contractible) is aspherical.
- **The Borel conjecture.** Two closed aspherical manifolds with isomorphic fundamental groups are homeomorphic. This is a
  rigidity statement in the spirit of Mostow's theorem (Chapter 19), believed but proved only in many special cases.

And some that were open and are now settled, to show that the frontier moves:

- **Poincaré** in dimension 3 (Perelman, 2002 to 2003) and **geometrisation** (Chapter 19).
- **Virtual Haken conjecture** (Agol, 2012): every closed hyperbolic 3-manifold has a finite cover containing an
  incompressible surface (19.5).
- **Triangulation conjecture** (is every topological manifold homeomorphic to a simplicial complex?): false in every
  dimension $n \ge 5$, by Ciprian Manolescu (published 2016), building on earlier work that reduced it to a question about
  homology 3-spheres like Poincaré's (19.1). In dimension 4 it was already known to be false, by Freedman's $E_8$ manifold
  and work of Casson.
- **The Conway knot is not slice** (Piccirillo, 2020; 20.2).
- **Hilbert-Smith conjecture in dimension 3** (Pardon, 2013): no $p$-adic group acts faithfully on a 3-manifold.

### History thread: the whole book

Euler solved the Königsberg bridges problem in 1736 ([Chapter 1](01-What-Topology-Is.md)) and found $V - E + F = 2$
([Chapter 2](02-Surfaces-and-Euler-Characteristic.md)). Riemann, in the 1850s, used the number of cuts that leave a surface
connected, which is the genus, to study functions of a complex variable. Poincaré, from 1895, created homology and the
fundamental group and asked his question. Brouwer, around 1910 to 1912, proved invariance of dimension and his fixed point
theorem. The point-set axioms took their modern form with Hausdorff (1914) and others; Alexander, Lefschetz, Hopf and
others built algebraic topology between the world wars; Smale, Milnor, Thurston, Freedman and Donaldson transformed the
topology of manifolds in the second half of the twentieth century; Perelman closed Poincaré's question at its start. The
field keeps growing, now with computers, data and physics among its customers.

## Check yourself

??? question "1. Show that $H(z, w) = (2z\bar w, |z|^2 - |w|^2)$ lands on the unit sphere when $|z|^2 + |w|^2 = 1$."
    $|2z\bar w|^2 = 4|z|^2|w|^2$, and $(|z|^2 - |w|^2)^2 = |z|^4 - 2|z|^2|w|^2 + |w|^4$. Adding gives
    $|z|^4 + 2|z|^2|w|^2 + |w|^4 = (|z|^2 + |w|^2)^2 = 1$.

??? question "2. Find the fibre of the Hopf map over the point $(1, 0, 0)$, that is $2z\bar w = 1$ and $|z|^2 = |w|^2$."
    $|z|^2 = |w|^2 = \tfrac12$, and $z\bar w = \tfrac12$ is real and positive, so $z$ and $w$ have the same argument:
    $z = w$. The fibre is $\{(e^{i\theta}/\sqrt2, e^{i\theta}/\sqrt2)\}$, a great circle. Check with $\theta = 0$:
    $2 \cdot \tfrac{1}{\sqrt2}\cdot\tfrac{1}{\sqrt2} = 1$ and $\tfrac12 - \tfrac12 = 0$.

??? question "3. Why is $\pi_3(S^2) \ne 0$ not a contradiction with $H_3(S^2) = 0$?"
    Homotopy and homology are different invariants. The Hurewicz theorem ([Chapter 16](16-Homology.md)) identifies them
    only in the first dimension where a simply connected space has non-trivial homotopy: for $S^2$, $\pi_2 \cong H_2 \cong
    \mathbb{Z}$. Above that there is no such relation, and $\pi_3(S^2) \cong \mathbb{Z}$ while $H_3(S^2) = 0$.

??? question "4. $\Theta_7 \cong \mathbb{Z}/28$ counts exotic 7-spheres up to orientation-preserving diffeomorphism. Reversing orientation sends a sphere to its inverse in the group. How many classes are there if orientation is ignored?"
    Pair each element $k$ with $-k$ in $\mathbb{Z}/28$. The elements with $k = -k$ are $0$ and $14$. The other 26 form 13
    pairs. So there are $2 + 13 = 15$ smooth 7-spheres up to diffeomorphism, ignoring orientation (one standard and 14
    exotic).

??? question "5. Use Freudenthal's theorem to explain why $\pi_4(S^3) \cong \pi_5(S^4) \cong \mathbb{Z}_2$ but $\pi_3(S^2) \not\cong \pi_4(S^3)$."
    Here $k = 1$, and the suspension $\pi_{n+1}(S^n) \to \pi_{n+2}(S^{n+1})$ is an isomorphism for $n > 2$. So from $n = 3$
    on, the group is stable: $\pi_4(S^3) \cong \pi_5(S^4) \cong \pi_1^s = \mathbb{Z}_2$. For $n = 2$ the theorem only gives
    a surjection $\pi_3(S^2) = \mathbb{Z} \to \pi_4(S^3) = \mathbb{Z}_2$, which is reduction mod 2.

??? question "6. Using Gauss-Bonnet, what is the total curvature of a torus with any metric, and of a surface of genus 3?"
    $\chi(T^2) = 0$, so $\int K\,dA = 0$: the positive curvature on the outside exactly cancels the negative curvature on
    the inside. For genus 3, $\chi = 2 - 6 = -4$, so the total curvature is $-8\pi$.

??? question "7. In the Python model, find the momenta where the vector $d = (\sin k_x, \sin k_y, m + \cos k_x + \cos k_y)$ vanishes when $m = -2$, $m = 0$ and $m = 2$."
    $d = 0$ needs $\sin k_x = \sin k_y = 0$, so $k_x, k_y \in \{0, \pi\}$, and then $m + \cos k_x + \cos k_y = 0$. The sums
    $\cos k_x + \cos k_y$ are $2$ at $(0,0)$, $0$ at $(0,\pi)$ and $(\pi, 0)$, and $-2$ at $(\pi,\pi)$. So: $m = -2$ at
    $(0,0)$; $m = 0$ at $(0,\pi)$ and $(\pi,0)$; $m = 2$ at $(\pi,\pi)$. These are the only values where the Chern number
    can change.

??? question "8. Check that the braid relation $\sigma_1\sigma_2\sigma_1 = \sigma_2\sigma_1\sigma_2$ holds in the symmetric group when $\sigma_1 \mapsto (1\,2)$ and $\sigma_2 \mapsto (2\,3)$. Why does $\sigma_1^2 = 1$ hold there but not in the braid group?"
    Composing right to left, $(1\,2)(2\,3)(1\,2)$ sends $1 \to 2 \to 3 \to 3$, $3 \to 3 \to 2 \to 1$, $2 \to 1 \to 1 \to 2$:
    it is $(1\,3)$. Similarly $(2\,3)(1\,2)(2\,3) = (1\,3)$. A transposition squared is the identity, but $\sigma_1^2$ is a
    full twist of two strands, which is not the trivial braid: its closure is the Hopf link (linking number 1), while the
    closure of the trivial 2-strand braid is the two-component unlink.

??? question "9. How many protected states does Kitaev's toric code have on a surface of genus 2? Why does the answer depend only on the genus?"
    $4^2 = 16$. The protected states are labelled by what happens around non-contractible loops, and on a genus-$g$ surface
    $H_1 \cong \mathbb{Z}^{2g}$; with $\mathbb{Z}/2$ coefficients that is $2g$ independent loops, each giving a factor of 2,
    for $2^{2g} = 4^g$ states. A topological invariant of the surface fixes the count.

??? question "10. Which real vector spaces $\mathbb{R}^n$ admit a bilinear multiplication without zero divisors, and which known algebras realise them?"
    Only $n = 1, 2, 4, 8$: the real numbers, the complex numbers, the quaternions and the octonions. That nothing else
    exists was proved with topology (Bott-Milnor and Kervaire, 1958), and Adams's Hopf invariant one theorem gives a stronger
    form.

??? question "11. Why does the existence of an exotic $\mathbb{R}^4$ not contradict Freedman's result that every homotopy 4-sphere is homeomorphic to $S^4$?"
    Freedman's result is about homeomorphism. An exotic $\mathbb{R}^4$ is homeomorphic to $\mathbb{R}^4$; it only fails to
    be diffeomorphic. Topological and smooth classifications differ in dimension 4, which is why the smooth 4-dimensional
    Poincaré conjecture is still open while the topological one is proved.

??? question "12. Give one reason each for: (a) why topological quantities in physics are measured so precisely; (b) why that alone does not guarantee a working topological quantum computer."
    (a) A topological invariant is an integer that does not change under small perturbations, so impurities and noise
    cannot shift it a little; the measured Hall conductance sits on exact multiples of $e^2/h$. (b) Protection holds only
    while the system stays in the right phase, with a gap, at low enough temperature, and the required non-abelian anyons
    must first be shown to exist and be controllable, which is an experimental question still being argued.

## What you learned

- Smooth structures are finer than topology: there are 28 oriented smooth 7-spheres, and uncountably many smooth
  structures on $\mathbb{R}^4$, while $\mathbb{R}^n$ for $n \ne 4$ has only one.
- The smooth 4-dimensional Poincaré conjecture is open; four dimensions resist both the high-dimensional methods and the
  3-dimensional ones.
- Homotopy groups of spheres are simple to define and very hard to compute; the Hopf map shows $\pi_3(S^2) \cong
  \mathbb{Z}$, and the stable groups begin $\mathbb{Z}, \mathbb{Z}_2, \mathbb{Z}_2, \mathbb{Z}_{24}, 0, 0, \mathbb{Z}_2,
  \mathbb{Z}_{240}$.
- In physics, quantised quantities such as the Hall conductance are topological invariants (Chern numbers); this was
  the subject of the 2016 Nobel Prize in Physics.
- Topological quantum computing would compute with braids of anyons; whether it can be built is an open experimental
  question.
- Many natural questions remain open, and some long-open ones have fallen recently.

**Next:** this is the last chapter. Return to the [book's contents](index.md) to revisit any chapter, or continue with
the [Geometry](../geometry/index.md) and [Algebra](../algebra/index.md) books, whose last chapters meet this one.

## Further reading

- J. Milnor, "On manifolds homeomorphic to the 7-sphere", *Annals of Mathematics* 64, 1956.
- M. Kervaire and J. Milnor, "Groups of homotopy spheres: I", *Annals of Mathematics* 77, 1963.
- A. Scorpan, *The Wild World of 4-Manifolds*, American Mathematical Society, 2005.
- R. Gompf and A. Stipsicz, *4-Manifolds and Kirby Calculus*, American Mathematical Society, 1999.
- M. Freedman and F. Quinn, *Topology of 4-Manifolds*, Princeton University Press, 1990.
- A. Hatcher, *Algebraic Topology*, Cambridge University Press, 2002 (chapter 4 for homotopy groups and the Hopf map).
- R. Bott and L. Tu, *Differential Forms in Algebraic Topology*, Springer, 1982 (the Hopf invariant through forms).
- D. C. Ravenel, *Complex Cobordism and Stable Homotopy Groups of Spheres*, Academic Press, 1986.
- M. Nakahara, *Geometry, Topology and Physics*, 2nd edition, Institute of Physics, 2003.
- M. Z. Hasan and C. L. Kane, "Colloquium: Topological insulators", *Reviews of Modern Physics* 82, 2010.
- C. Nayak, S. H. Simon, A. Stern, M. Freedman and S. Das Sarma, "Non-Abelian anyons and topological quantum computation",
  *Reviews of Modern Physics* 80, 2008.
- M. Freedman, A. Kitaev, M. Larsen and Z. Wang, "Topological quantum computation", *Bulletin of the American
  Mathematical Society* 40, 2003.
- On this site: [Geometry, chapter 21: Where geometry goes](../geometry/21-Where-Geometry-Goes.md),
  [Algebra, chapter 22: Where algebra goes](../algebra/22-Where-Algebra-Goes.md), [Logic, chapter 20: Where logic goes](../logic/20-Where-Logic-Goes.md),
  [Linear algebra, chapter 20: Where linear algebra goes](../linear-algebra/20-Where-Linear-Algebra-Goes.md), and the
  Topics lesson on [the point at infinity](../../topics/infinity/level-8/07-point-at-infinity.md), the idea behind the
  one-point compactification that turns $\mathbb{R}^n$ into $S^n$.
