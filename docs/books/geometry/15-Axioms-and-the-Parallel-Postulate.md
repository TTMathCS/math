# 15. Axioms and the parallel postulate

*Euclid built geometry on five postulates. Four of them are short and obvious. The fifth, about when two lines
meet, is long and sounds like a theorem, and for two thousand years mathematicians tried to prove it from the other
four. Every attempt failed, and the failures were instructive: each one quietly assumed something equivalent to what
it set out to prove. This chapter follows that story, states the modern axioms that fill the gaps in Euclid, works
out what can be proved without any parallel postulate at all, and explains how a "model" settles the question: the
fifth postulate cannot be proved, because there is a perfectly consistent geometry in which it is false.*

!!! abstract "In this chapter"
    **You will learn:**

    - the exact wording of Euclid's fifth postulate and a list of statements equivalent to it
    - the long history of attempts to prove it, from Ptolemy and Proclus to Saccheri, Lambert and Legendre
    - Hilbert's axioms, and the gaps in Euclid they fill (Pasch's axiom, continuity, the "every triangle is isosceles" trap)
    - neutral geometry: the exterior angle theorem and the Saccheri-Legendre theorem (angle sum at most $180^\circ$), with proofs
    - what a model is, and how models prove consistency and independence
    - how Gauss, Bolyai and Lobachevsky came to accept a new geometry

    **You need:** [Chapter 1](01-Points-Lines-and-Angles.md) (what a proof is, Euclid's postulates),
    [Chapter 2](02-Triangles-and-Congruence.md) (congruence) and [Chapter 3](03-Parallel-Lines-and-the-Angle-Sum.md)
    (the angle sum, Playfair's axiom). A gentler look at proofs: [Geometric proof](../../topics/geometry/level-8/01-geometric-proof.md).

    **Levels:** 15.1 is intermediate (history); 15.2 and 15.3 are advanced; 15.4 is advanced to expert; 15.5 is
    intermediate.

## 15.1 Two thousand years of trying

*Level: intermediate.* Euclid's *Elements* (about 300 BC) starts with definitions, five "common notions" (such as
"things equal to the same thing are equal to each other") and five postulates. In Heath's standard English
translation, the postulates ask that we may:

1. draw a straight line from any point to any point;
2. produce a finite straight line continuously in a straight line;
3. describe a circle with any centre and distance;

and assume that

4. all right angles are equal to one another;
5. if a straight line falling on two straight lines makes the interior angles on the same side less than two right
   angles, the two straight lines, if produced indefinitely, meet on that side on which are the angles less than the
   two right angles.

The fifth is the **parallel postulate**. Read it with a picture: a transversal crosses two lines, and the two interior
angles on one side add up to less than $180^\circ$; then the lines meet on that side. It is plainly true in any
drawing. But it talks about what happens "if produced indefinitely", far beyond any drawing, and it is the converse of
a theorem Euclid proves without it (Proposition I.17: any two angles of a triangle add to less than two right angles).
Euclid himself seems to have held it back: the first 28 propositions of Book I do not use it, and it first appears in
Proposition I.29.

**Playfair's axiom.** The form most people learn, popularised by John Playfair in 1795 (though known earlier), is:

> Through a point not on a given line there is **at most one** line parallel to the given line.

("At least one" can be proved without the postulate, as we shall see in 15.3.) In
[Chapter 3](03-Parallel-Lines-and-the-Angle-Sum.md) you saw that, given the other axioms, Playfair's axiom and Euclid's
fifth postulate imply each other.

### The attempts

Here, in brief, is the honest record of some of the best-known attempts. Every one is valuable, because each found a
statement equivalent to the postulate.

- **Ptolemy** (2nd century AD) gave a proof that Proclus later reported and criticised: it assumed, in effect, that
  parallel lines behave the same on both sides of a transversal, which is the point at issue.
- **Proclus** (5th century), in his commentary on Book I of the *Elements*, argued that the postulate should be proved,
  and offered a proof. It relied on the assumption that the distance between two parallel lines stays bounded, which
  is again equivalent to the postulate.
- **Ibn al-Haytham** (around 1000), **Omar Khayyam** (11th to 12th century) and **Nasir al-Din al-Tusi** (13th century)
  studied quadrilaterals with two equal sides perpendicular to a base, and tried to show the other two angles are right.
  Khayyam explicitly considered the three possibilities for those angles (right, obtuse, acute) and tried to rule out
  the last two from an assumption he took as evident.
- **John Wallis** (1663, in a lecture at Oxford) proved the postulate from the assumption that for any triangle there
  is a similar triangle of any size. A clean proof, from an equivalent assumption.
- **Girolamo Saccheri**, a Jesuit priest, published *Euclides ab omni naevo vindicatus* ("Euclid freed of every flaw")
  in 1733. He took the quadrilateral $ABCD$ with right angles at $A$ and $B$ and $AD = BC$, now called a **Saccheri
  quadrilateral**, and the three hypotheses for the equal summit angles at $C$ and $D$: right, obtuse or acute.
  He disposed of the obtuse hypothesis correctly (it contradicts the infinitude of lines, see 15.3). For the acute
  hypothesis he derived theorem after theorem, many of them now theorems of hyperbolic geometry, and finally declared it
  false because it was "repugnant to the nature of the straight line", an argument that does not hold up. He had,
  without accepting it, discovered much of non-Euclidean geometry.
- **Johann Heinrich Lambert** (written 1766, published after his death in 1786) worked with a quadrilateral with three
  right angles. Under the acute hypothesis he found that the area of a triangle is proportional to its **defect**
  ($180^\circ$ minus its angle sum), and remarked that this would hold on a sphere of "imaginary radius". He did not
  claim a contradiction.
- **Adrien-Marie Legendre** published proof after proof in the many editions of his widely used textbook *Éléments de
  géométrie* (from 1794). His proofs that the angle sum cannot exceed $180^\circ$ are correct, and we give one in 15.3;
  his proofs that it cannot be less each contained a hidden assumption.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 744.0 252.0" role="img" aria-label="Saccheri's quadrilateral ABCD: equal sides AD and BC stand at right angles on the base AB. Saccheri's three hypotheses about the summit angles at C and D: right, obtuse or acute, drawn here with the summit bent to suggest each case">
  <polyline points="48.0,66.0 48.0,186.0 228.0,186.0 228.0,66.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="48.0,66.0 51.0,66.0 54.0,66.0 57.0,66.0 60.0,66.0 63.0,66.0 66.0,66.0 69.0,66.0 72.0,66.0 75.0,66.0 78.0,66.0 81.0,66.0 84.0,66.0 87.0,66.0 90.0,66.0 93.0,66.0 96.0,66.0 99.0,66.0 102.0,66.0 105.0,66.0 108.0,66.0 111.0,66.0 114.0,66.0 117.0,66.0 120.0,66.0 123.0,66.0 126.0,66.0 129.0,66.0 132.0,66.0 135.0,66.0 138.0,66.0 141.0,66.0 144.0,66.0 147.0,66.0 150.0,66.0 153.0,66.0 156.0,66.0 159.0,66.0 162.0,66.0 165.0,66.0 168.0,66.0 171.0,66.0 174.0,66.0 177.0,66.0 180.0,66.0 183.0,66.0 186.0,66.0 189.0,66.0 192.0,66.0 195.0,66.0 198.0,66.0 201.0,66.0 204.0,66.0 207.0,66.0 210.0,66.0 213.0,66.0 216.0,66.0 219.0,66.0 222.0,66.0 225.0,66.0 228.0,66.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="48.0,171.0 63.0,171.0 63.0,186.0" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>
  <polyline points="228.0,171.0 213.0,171.0 213.0,186.0" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>
  <polygon points="48.0,66.0 69.0,66.0 69.0,67.1 68.9,68.2 68.7,69.3 68.5,70.4 68.3,71.4 68.0,72.5 67.6,73.5 67.2,74.5 66.7,75.5 66.2,76.5 65.6,77.4 65.0,78.3 64.3,79.2 63.6,80.1 62.8,80.8 62.1,81.6 61.2,82.3 60.3,83.0 59.4,83.6 58.5,84.2 57.5,84.7 56.5,85.2 55.5,85.6 54.5,86.0 53.4,86.3 52.4,86.5 51.3,86.7 50.2,86.9 49.1,87.0 48.0,87.0" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
  <polygon points="228.0,66.0 207.0,66.0 207.0,67.1 207.1,68.2 207.3,69.3 207.5,70.4 207.7,71.4 208.0,72.5 208.4,73.5 208.8,74.5 209.3,75.5 209.8,76.5 210.4,77.4 211.0,78.3 211.7,79.2 212.4,80.1 213.2,80.8 213.9,81.6 214.8,82.3 215.7,83.0 216.6,83.6 217.5,84.2 218.5,84.7 219.5,85.2 220.5,85.6 221.5,86.0 222.6,86.3 223.6,86.5 224.7,86.7 225.8,86.9 226.9,87.0 228.0,87.0" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
  <circle cx="48.0" cy="186.0" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="40.0" y="200.0" font-size="12" text-anchor="middle" fill="currentColor">A</text>
  <circle cx="228.0" cy="186.0" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="236.0" y="200.0" font-size="12" text-anchor="middle" fill="currentColor">B</text>
  <circle cx="228.0" cy="66.0" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="238.0" y="60.0" font-size="12" text-anchor="middle" fill="currentColor">C</text>
  <circle cx="48.0" cy="66.0" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="38.0" y="60.0" font-size="12" text-anchor="middle" fill="currentColor">D</text>
  <text x="138.0" y="220.0" font-size="13" text-anchor="middle" fill="currentColor">right</text>
  <line x1="42.0" y1="126.0" x2="54.0" y2="126.0" stroke="currentColor" stroke-width="1.4"/>
  <line x1="222.0" y1="126.0" x2="234.0" y2="126.0" stroke="currentColor" stroke-width="1.4"/>
  <polyline points="294.0,66.0 294.0,186.0 474.0,186.0 474.0,66.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="294.0,66.0 297.0,64.6 300.0,63.2 303.0,61.8 306.0,60.4 309.0,59.0 312.0,57.7 315.0,56.3 318.0,55.0 321.0,53.7 324.0,52.5 327.0,51.3 330.0,50.1 333.0,49.0 336.0,47.9 339.0,46.9 342.0,45.9 345.0,45.0 348.0,44.2 351.0,43.4 354.0,42.6 357.0,41.9 360.0,41.3 363.0,40.8 366.0,40.3 369.0,39.9 372.0,39.6 375.0,39.3 378.0,39.1 381.0,39.0 384.0,39.0 387.0,39.0 390.0,39.1 393.0,39.3 396.0,39.6 399.0,39.9 402.0,40.3 405.0,40.8 408.0,41.3 411.0,41.9 414.0,42.6 417.0,43.4 420.0,44.2 423.0,45.0 426.0,45.9 429.0,46.9 432.0,47.9 435.0,49.0 438.0,50.1 441.0,51.3 444.0,52.5 447.0,53.7 450.0,55.0 453.0,56.3 456.0,57.7 459.0,59.0 462.0,60.4 465.0,61.8 468.0,63.2 471.0,64.6 474.0,66.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="294.0,171.0 309.0,171.0 309.0,186.0" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>
  <polyline points="474.0,171.0 459.0,171.0 459.0,186.0" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>
  <polygon points="294.0,66.0 313.0,57.0 313.6,58.3 314.0,59.7 314.4,61.0 314.7,62.4 314.9,63.8 315.0,65.2 315.0,66.6 314.9,68.0 314.7,69.4 314.4,70.8 314.1,72.1 313.6,73.5 313.1,74.8 312.4,76.0 311.7,77.2 310.9,78.4 310.1,79.5 309.1,80.6 308.1,81.5 307.0,82.5 305.9,83.3 304.7,84.1 303.5,84.7 302.2,85.3 300.9,85.8 299.6,86.2 298.2,86.6 296.8,86.8 295.4,87.0 294.0,87.0" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
  <polygon points="474.0,66.0 455.0,57.0 454.4,58.3 454.0,59.7 453.6,61.0 453.3,62.4 453.1,63.8 453.0,65.2 453.0,66.6 453.1,68.0 453.3,69.4 453.6,70.8 453.9,72.1 454.4,73.5 454.9,74.8 455.6,76.0 456.3,77.2 457.1,78.4 457.9,79.5 458.9,80.6 459.9,81.5 461.0,82.5 462.1,83.3 463.3,84.1 464.5,84.7 465.8,85.3 467.1,85.8 468.4,86.2 469.8,86.6 471.2,86.8 472.6,87.0 474.0,87.0" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
  <circle cx="294.0" cy="186.0" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="286.0" y="200.0" font-size="12" text-anchor="middle" fill="currentColor">A</text>
  <circle cx="474.0" cy="186.0" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="482.0" y="200.0" font-size="12" text-anchor="middle" fill="currentColor">B</text>
  <circle cx="474.0" cy="66.0" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="484.0" y="60.0" font-size="12" text-anchor="middle" fill="currentColor">C</text>
  <circle cx="294.0" cy="66.0" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="284.0" y="60.0" font-size="12" text-anchor="middle" fill="currentColor">D</text>
  <text x="384.0" y="220.0" font-size="13" text-anchor="middle" fill="currentColor">obtuse</text>
  <line x1="288.0" y1="126.0" x2="300.0" y2="126.0" stroke="currentColor" stroke-width="1.4"/>
  <line x1="468.0" y1="126.0" x2="480.0" y2="126.0" stroke="currentColor" stroke-width="1.4"/>
  <polyline points="540.0,66.0 540.0,186.0 720.0,186.0 720.0,66.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="540.0,66.0 543.0,67.4 546.0,68.8 549.0,70.2 552.0,71.6 555.0,73.0 558.0,74.3 561.0,75.7 564.0,77.0 567.0,78.3 570.0,79.5 573.0,80.7 576.0,81.9 579.0,83.0 582.0,84.1 585.0,85.1 588.0,86.1 591.0,87.0 594.0,87.8 597.0,88.6 600.0,89.4 603.0,90.1 606.0,90.7 609.0,91.2 612.0,91.7 615.0,92.1 618.0,92.4 621.0,92.7 624.0,92.9 627.0,93.0 630.0,93.0 633.0,93.0 636.0,92.9 639.0,92.7 642.0,92.4 645.0,92.1 648.0,91.7 651.0,91.2 654.0,90.7 657.0,90.1 660.0,89.4 663.0,88.6 666.0,87.8 669.0,87.0 672.0,86.1 675.0,85.1 678.0,84.1 681.0,83.0 684.0,81.9 687.0,80.7 690.0,79.5 693.0,78.3 696.0,77.0 699.0,75.7 702.0,74.3 705.0,73.0 708.0,71.6 711.0,70.2 714.0,68.8 717.0,67.4 720.0,66.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  <polyline points="540.0,171.0 555.0,171.0 555.0,186.0" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>
  <polyline points="720.0,171.0 705.0,171.0 705.0,186.0" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>
  <polygon points="540.0,66.0 559.0,75.0 558.6,75.7 558.3,76.4 557.9,77.0 557.4,77.7 557.0,78.4 556.5,79.0 556.0,79.6 555.5,80.2 554.9,80.8 554.4,81.3 553.8,81.8 553.2,82.4 552.6,82.8 551.9,83.3 551.2,83.7 550.6,84.1 549.9,84.5 549.2,84.9 548.5,85.2 547.7,85.5 547.0,85.8 546.2,86.1 545.5,86.3 544.7,86.5 543.9,86.6 543.2,86.8 542.4,86.9 541.6,86.9 540.8,87.0 540.0,87.0" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
  <polygon points="720.0,66.0 701.0,75.0 701.4,75.7 701.7,76.4 702.1,77.0 702.6,77.7 703.0,78.4 703.5,79.0 704.0,79.6 704.5,80.2 705.1,80.8 705.6,81.3 706.2,81.8 706.8,82.4 707.4,82.8 708.1,83.3 708.8,83.7 709.4,84.1 710.1,84.5 710.8,84.9 711.5,85.2 712.3,85.5 713.0,85.8 713.8,86.1 714.5,86.3 715.3,86.5 716.1,86.6 716.8,86.8 717.6,86.9 718.4,86.9 719.2,87.0 720.0,87.0" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
  <circle cx="540.0" cy="186.0" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="532.0" y="200.0" font-size="12" text-anchor="middle" fill="currentColor">A</text>
  <circle cx="720.0" cy="186.0" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="728.0" y="200.0" font-size="12" text-anchor="middle" fill="currentColor">B</text>
  <circle cx="720.0" cy="66.0" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="730.0" y="60.0" font-size="12" text-anchor="middle" fill="currentColor">C</text>
  <circle cx="540.0" cy="66.0" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="530.0" y="60.0" font-size="12" text-anchor="middle" fill="currentColor">D</text>
  <text x="630.0" y="220.0" font-size="13" text-anchor="middle" fill="currentColor">acute</text>
  <line x1="534.0" y1="126.0" x2="546.0" y2="126.0" stroke="currentColor" stroke-width="1.4"/>
  <line x1="714.0" y1="126.0" x2="726.0" y2="126.0" stroke="currentColor" stroke-width="1.4"/>
</svg>
</div>

### Statements equivalent to the fifth postulate

Given the axioms of neutral geometry (15.2 and 15.3), each of these is equivalent to the parallel postulate:

1. Playfair's axiom.
2. The angles of every triangle add up to $180^\circ$ (in fact it is enough that **one** triangle does; see 15.3).
3. A rectangle exists.
4. There exist two similar triangles that are not congruent (Wallis).
5. Through any three points not on a line there passes a circle.
6. The points at a fixed distance from a line, on one side, form a line.
7. Pythagoras' theorem holds.
8. If a line meets one of two parallel lines, it meets the other (Proclus).

Each attempted proof assumed one of these, usually without noticing. That is the lesson the history teaches: in
geometry, "obvious" statements about lines going on forever are exactly where the trouble hides.

## 15.2 Hilbert's axioms

*Level: advanced.* By the 19th century it was clear that Euclid's own proofs used facts his axioms do not state. Here
are three gaps.

**Gap 1: circles meeting.** Euclid's very first proposition draws two circles, each through the other's centre, and
takes a point where they meet. Nothing in his postulates says that they meet. In the plane of points with **rational**
coordinates, the circles about $(0, 0)$ and $(1, 0)$ through each other meet at $\left(\tfrac12, \pm\tfrac{\sqrt3}{2}\right)$,
which are not rational points: in that "plane" the circles pass through each other without meeting. Some axiom of
**continuity** is needed.

**Gap 2: betweenness.** Euclid never says what "between" or "inside" means. Without it, false proofs pass. The famous
example "proves" that every triangle is isosceles: let the bisector of angle $A$ meet the perpendicular bisector of $BC$
at $X$, drop perpendiculars from $X$ to $AB$ and $AC$, and use congruent triangles to show $AB = AC$. Every step is a
valid congruence, but the picture is wrong. In fact $X$ always lies **outside** the triangle, on the circumcircle (it is
the midpoint of the arc $BC$ not containing $A$, which is equidistant from $B$ and $C$ and lies on the bisector by the
inscribed angle theorem), and one of the feet of the perpendiculars falls outside its side, so one length is added
where it should be subtracted.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 388.0 367.0" role="img" aria-label="The true picture behind the false proof that every triangle is isosceles: the bisector of angle A and the perpendicular bisector of BC meet at X on the circumcircle, outside the triangle, not inside it as the false proof's drawing suggests">
  <circle cx="197.5" cy="146.0" r="125.1" fill="none" stroke="currentColor" stroke-width="1.1" stroke-dasharray="5 4"/>
  <polygon points="131.0,40.0 82.0,194.0 313.0,194.0" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  <line x1="131.0" y1="40.0" x2="197.5" y2="271.0" stroke="currentColor" stroke-width="1.4"/>
  <line x1="197.5" y1="82.0" x2="197.5" y2="281.5" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 3"/>
  <line x1="197.5" y1="271.0" x2="82.0" y2="194.0" stroke="currentColor" stroke-width="0.9" stroke-dasharray="2 2"/>
  <line x1="197.5" y1="271.0" x2="313.0" y2="194.0" stroke="currentColor" stroke-width="0.9" stroke-dasharray="2 2"/>
  <circle cx="131.0" cy="40.0" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="127.0" y="31.0" font-size="12" text-anchor="middle" fill="currentColor">A</text>
  <circle cx="82.0" cy="194.0" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="70.0" y="198.0" font-size="12" text-anchor="middle" fill="currentColor">B</text>
  <circle cx="313.0" cy="194.0" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="325.0" y="198.0" font-size="12" text-anchor="middle" fill="currentColor">C</text>
  <circle cx="197.5" cy="194.0" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="207.5" y="188.0" font-size="12" text-anchor="middle" fill="currentColor">M</text>
  <circle cx="197.5" cy="271.0" r="4" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="207.5" y="285.0" font-size="12" text-anchor="middle" fill="currentColor">X</text>
</svg>
</div>

**Gap 3: superposition.** Euclid proves SAS congruence (I.4) by "placing" one triangle on the other. Moving figures is
not something his axioms describe.

### The axioms

David Hilbert's *Grundlagen der Geometrie* (Foundations of Geometry, 1899) gave a complete set of axioms. Its
undefined terms are **point**, **line**, **plane**, and the relations **lies on**, **between** and **congruent**. Nothing
is assumed about them except the axioms. Here are the axioms for plane geometry, slightly simplified.

**I. Incidence.**

- I.1 For any two distinct points there is exactly one line through both.
- I.2 Every line contains at least two points.
- I.3 There are three points not on one line.

**II. Order** (betweenness: "$B$ is between $A$ and $C$", written $A{*}B{*}C$).

- II.1 If $A{*}B{*}C$ then $A, B, C$ are distinct points of one line, and $C{*}B{*}A$.
- II.2 For any distinct $A, B$ there is a point $C$ with $A{*}B{*}C$.
- II.3 Of three points on a line, at most one is between the other two.
- II.4 (**Pasch's axiom**) If a line enters a triangle through one side, not through a corner, it leaves through
  one of the other two sides.

**III. Congruence** (of segments and of angles).

- III.1 A segment can be copied onto any ray from its starting point, in exactly one way.
- III.2 Two segments congruent to a third are congruent to each other.
- III.3 Congruent segments added to congruent segments give congruent segments.
- III.4 An angle can be copied onto any ray, on a given side of its line, in exactly one way.
- III.5 (a form of **SAS**) If $AB \cong A'B'$, $AC \cong A'C'$ and $\angle BAC \cong \angle B'A'C'$, then
  $\angle ABC \cong \angle A'B'C'$.

**IV. Parallels.** (Playfair) Through a point not on a line there is at most one line not meeting it.

**V. Continuity.**

- V.1 (**Archimedes**) Given segments $AB$ and $CD$, some whole number of copies of $CD$ laid end to end along the ray
  $AB$ goes past $B$.
- V.2 (**completeness**) The points of a line cannot be extended to a larger system still satisfying the other axioms.

Hilbert then proves the familiar theorems with care. From these axioms, SAS congruence for whole triangles follows
from III.5; the plane splits into two sides of any line (using Pasch); and with V the circles of Euclid's I.1 do meet.
The full system describes exactly one plane up to isomorphism: the ordinary coordinate plane $\mathbb{R}^2$. (That is a
theorem: from the axioms one can build coordinates, define addition and multiplication of lengths geometrically, and
show they form the real numbers.)

**Other axiom systems.** George David Birkhoff (1932) gave a short system that takes the real numbers for granted:
lines carry a "ruler" (a distance that matches real numbers) and angles carry a "protractor". Many school courses use a
version of it. Alfred Tarski gave a system in first-order logic, with only points as objects, and proved that
elementary geometry in his sense is **complete and decidable**: there is an algorithm that decides whether any
statement in its language is a theorem. That is a striking contrast with arithmetic, where Gödel showed no such
algorithm exists.

## 15.3 Neutral geometry

*Level: advanced.* **Neutral geometry** (also called absolute geometry, a term of Bolyai's) is everything that follows
from Hilbert's axioms I, II, III and V, **without** the parallel axiom IV. Its theorems hold in Euclidean geometry and in
hyperbolic geometry alike. Euclid's first 28 propositions are, after the gaps are filled, theorems of neutral geometry.

**Theorem 15.1 (Exterior angle theorem, Euclid I.16).** In any triangle, an exterior angle is greater than each of
the two interior angles not next to it.

*Proof.* Let the triangle be $ABC$, extend $BC$ beyond $C$ to $D$, and show $\angle ACD > \angle BAC$. Let $M$ be the
midpoint of $AC$. Extend $BM$ beyond $M$ to $E$ with $ME = BM$. Triangles $AMB$ and $CME$ are congruent by SAS
($AM = CM$, $BM = EM$, and the vertical angles at $M$ are equal). So $\angle MCE = \angle MAB = \angle BAC$. The point $E$
lies inside the angle $\angle ACD$ (this is where betweenness and Pasch's axiom are used, to check that $E$ is on the
correct side of both lines $AC$ and $BC$). So $\angle ACD > \angle ACE = \angle BAC$. For the other remote angle, at $B$,
use the vertical angle of $\angle ACD$ and the midpoint of $BC$ instead. $\square$

Notice what the proof did **not** use: no parallels. It does, however, use that lines are infinite (we extended $BM$ to
twice its length); on a sphere, where lines are great circles of finite length, the theorem fails for large triangles.

**Corollaries.**

1. (Euclid I.17) Any two angles of a triangle add to less than $180^\circ$. *Proof:* the exterior angle at $C$ is
   $180^\circ - \angle C$, and it exceeds $\angle A$; so $\angle A + \angle C < 180^\circ$.
2. (Euclid I.27) If a transversal makes equal alternate angles with two lines, the lines are parallel. *Proof:* if
   they met, they would form a triangle with an exterior angle equal to a remote interior angle, against Theorem 15.1.
3. **Parallels exist.** Given a line $\ell$ and a point $P$ not on it, drop the perpendicular from $P$ to $\ell$ and draw
   the perpendicular to that at $P$. The alternate angles are both right, so by 2 the new line does not meet $\ell$.
   So in neutral geometry there is **at least one** parallel; the parallel axiom only says "at most one".

### The angle sum is at most $180^\circ$

**Theorem 15.2 (Saccheri-Legendre).** In neutral geometry, the angle sum of every triangle is at most $180^\circ$.

The proof uses Legendre's construction.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 498.0 264.0" role="img" aria-label="Legendre's construction: E is the midpoint of BC, and AE is extended to F with EF equal to AE. Triangle AFC has the same angle sum as triangle ABC, and its angles at A and F add up to the old angle at A">
  <polygon points="30.0,216.0 222.0,120.0 246.0,216.0" fill="#9cc9ea" fill-opacity="0.4" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  <polygon points="30.0,216.0 438.0,120.0 246.0,216.0" fill="#eea66f" fill-opacity="0.25" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  <line x1="30.0" y1="216.0" x2="438.0" y2="120.0" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 3"/>
  <polygon points="30.0,216.0 82.6,203.6 82.5,203.2 82.4,202.8 82.3,202.4 82.2,202.0 82.0,201.6 81.9,201.2 81.8,200.8 81.7,200.4 81.6,200.0 81.4,199.6 81.3,199.2 81.2,198.8 81.1,198.4 80.9,198.0 80.8,197.6 80.6,197.2 80.5,196.8 80.3,196.4 80.2,196.1 80.0,195.7 79.9,195.3 79.7,194.9 79.5,194.5 79.4,194.1 79.2,193.7 79.0,193.4 78.8,193.0 78.7,192.6 78.5,192.2 78.3,191.9" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
  <polygon points="438.0,120.0 389.7,144.1 389.5,143.8 389.3,143.4 389.2,143.0 389.0,142.6 388.8,142.3 388.6,141.9 388.5,141.5 388.3,141.1 388.1,140.7 388.0,140.3 387.8,139.9 387.7,139.6 387.5,139.2 387.4,138.8 387.2,138.4 387.1,138.0 386.9,137.6 386.8,137.2 386.7,136.8 386.6,136.4 386.4,136.0 386.3,135.6 386.2,135.2 386.1,134.8 386.0,134.4 385.8,134.0 385.7,133.6 385.6,133.2 385.5,132.8 385.4,132.4" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
  <polygon points="30.0,216.0 105.0,216.0 105.0,215.4 105.0,214.8 105.0,214.3 105.0,213.7 104.9,213.1 104.9,212.5 104.9,212.0 104.9,211.4 104.8,210.8 104.8,210.2 104.7,209.7 104.7,209.1 104.6,208.5 104.6,207.9 104.5,207.4 104.4,206.8 104.4,206.2 104.3,205.6 104.2,205.1 104.1,204.5 104.0,203.9 103.9,203.4 103.8,202.8 103.7,202.2 103.6,201.6 103.5,201.1 103.4,200.5 103.3,199.9 103.1,199.4 103.0,198.8" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
  <circle cx="30.0" cy="216.0" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="20.0" y="228.0" font-size="12" text-anchor="middle" fill="currentColor">A</text>
  <circle cx="222.0" cy="120.0" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="218.0" y="110.0" font-size="12" text-anchor="middle" fill="currentColor">B</text>
  <circle cx="246.0" cy="216.0" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="248.0" y="234.0" font-size="12" text-anchor="middle" fill="currentColor">C</text>
  <circle cx="234.0" cy="168.0" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="220.0" y="172.0" font-size="12" text-anchor="middle" fill="currentColor">E</text>
  <circle cx="438.0" cy="120.0" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="448.0" y="116.0" font-size="12" text-anchor="middle" fill="currentColor">F</text>
  <line x1="133.4" y1="197.8" x2="130.6" y2="186.2" stroke="currentColor" stroke-width="1.5"/>
  <line x1="337.4" y1="149.8" x2="334.6" y2="138.2" stroke="currentColor" stroke-width="1.5"/>
  <line x1="225.7" y1="145.2" x2="235.1" y2="142.8" stroke="currentColor" stroke-width="1.2"/>
  <line x1="220.9" y1="145.2" x2="230.3" y2="142.8" stroke="currentColor" stroke-width="1.2"/>
  <line x1="237.7" y1="193.2" x2="247.1" y2="190.8" stroke="currentColor" stroke-width="1.2"/>
  <line x1="232.9" y1="193.2" x2="242.3" y2="190.8" stroke="currentColor" stroke-width="1.2"/>
</svg>
</div>

**Lemma 15.3.** For every triangle $ABC$ there is a triangle with the same angle sum, and with one angle at most
$\tfrac12 \angle A$.

*Proof.* Let $E$ be the midpoint of $BC$, and extend $AE$ beyond $E$ to $F$ with $EF = AE$. Triangles $AEB$ and $FEC$
are congruent by SAS ($AE = FE$, $BE = CE$, vertical angles at $E$). So $\angle ECF = \angle EBA = \angle B$ and
$\angle EFC = \angle EAB$. Now look at triangle $AFC$. Its angles are:

- at $A$: $\angle FAC = \angle EAC$;
- at $F$: $\angle AFC = \angle EFC = \angle EAB$;
- at $C$: $\angle ACF = \angle ACE + \angle ECF = \angle C + \angle B$.

Their sum is $\angle EAC + \angle EAB + \angle C + \angle B = \angle A + \angle B + \angle C$, the same as before. And the
two angles at $A$ and $F$ add to $\angle EAC + \angle EAB = \angle A$, so one of them is at most $\tfrac12 \angle A$.
$\square$

*Proof of Theorem 15.2.* Suppose some triangle had angle sum $180^\circ + \varepsilon$ with $\varepsilon > 0$. Apply the
lemma $n$ times, each time to the small angle just produced: we get a triangle with the same sum
$180^\circ + \varepsilon$ and an angle at most $\angle A / 2^n$. By the Archimedean axiom (applied to angles), we can choose
$n$ with $\angle A/2^n < \varepsilon$. Then the other two angles of that triangle add up to more than
$180^\circ + \varepsilon - \varepsilon = 180^\circ$, contradicting Corollary 1. $\square$

**Defect.** The **defect** of a triangle is $\delta(ABC) = 180^\circ - (\angle A + \angle B + \angle C)$. By Theorem 15.2 it
is never negative.

**Theorem 15.4 (defect is additive).** If $D$ is a point on side $BC$ of triangle $ABC$, then
$\delta(ABC) = \delta(ABD) + \delta(ADC)$.

*Proof.* The angles at $D$ in the two small triangles add to $180^\circ$ ($\angle ADB + \angle ADC = 180^\circ$), and the
angle at $A$ splits as $\angle BAD + \angle DAC$. So

$$
\delta(ABD) + \delta(ADC) = 360^\circ - \left(\angle B + \angle BAD + \angle ADB\right) - \left(\angle C + \angle DAC + \angle ADC\right)
= 360^\circ - 180^\circ - (\angle A + \angle B + \angle C) = \delta(ABC) . \ \square
$$

So the defect behaves like an **area**: it adds when you cut a triangle in two. In hyperbolic geometry it is, up to a
constant, exactly the area ([Chapter 17](17-Hyperbolic-Geometry.md)).

**Corollary 15.5 (all or nothing).** If one triangle has angle sum $180^\circ$, then every triangle does.

*Proof sketch.* If $\delta(ABC) = 0$, then cutting it shows that both pieces have defect $0$ (the defects are
non-negative and add to $0$), so there is a right triangle with defect $0$. Two copies of it make a rectangle. Copies
of the rectangle, laid side by side and on top of each other (using the Archimedean axiom), make arbitrarily large
rectangles, and cutting along a diagonal gives arbitrarily large right triangles with defect $0$. Any right triangle
fits inside one of those, and additivity forces its defect to be $0$; any triangle splits into two right triangles by
an altitude. The details are in Greenberg's book (Further reading), chapter 4. $\square$

So there are only two possibilities in neutral geometry: **every** triangle has angle sum exactly $180^\circ$ (and then
Playfair's axiom holds: this is another theorem, with a similar proof), or **every** triangle has angle sum less than
$180^\circ$. The first is Euclidean geometry; the second is hyperbolic geometry.

**Saccheri quadrilaterals, finished.** In a Saccheri quadrilateral $ABCD$ (right angles at $A$ and $B$, $AD = BC$):

- the summit angles are equal: triangles $DAB$ and $CBA$ are congruent by SAS, so $DB = CA$; then triangles $ADC$ and
  $BCD$ are congruent by SSS, so $\angle ADC = \angle BCD$;
- they are not obtuse: the diagonal $AC$ cuts the quadrilateral into two triangles whose angle sums add up to the
  quadrilateral's angle sum, $180^\circ + 2\angle D$; by Theorem 15.2 this is at most $360^\circ$, so $\angle D \le 90^\circ$.

So Saccheri's obtuse hypothesis is refuted in neutral geometry, as he found, and the whole question is right versus
acute: exactly Euclidean versus hyperbolic.

## 15.4 Consistency and models

*Level: advanced to expert.* How can you show that the parallel postulate **cannot** be proved from the other axioms?
Not by failing to find a proof, however long you try. The method is to find a **model**.

**Definition.** A **model** of a set of axioms is an interpretation of the undefined terms (what counts as a "point",
a "line", "lies on" and so on) in which every axiom becomes a true statement.

If a statement $S$ could be proved from some axioms, it would be true in every model of them (a proof uses only the
axioms). So: **if there is a model in which the axioms hold and $S$ fails, then $S$ cannot be proved from those
axioms.** $S$ is then **independent** of them.

### Small models

Take only the incidence axioms I.1 to I.3. Two tiny models:

- **three points** $\{A, B, C\}$ with three "lines" $\{A, B\}$, $\{B, C\}$, $\{C, A\}$. The axioms hold (two points, one
  line; each line has two points; three points not on one line). Any two lines meet, so there are **no** parallels.
- **four points** $\{A, B, C, D\}$ with all six pairs as "lines". Again the axioms hold. Now each line has exactly
  **one** parallel: $\{A, B\}$ and $\{C, D\}$ do not meet, and no other line misses $\{A, B\}$. Playfair's axiom holds.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 444.0 210.0" role="img" aria-label="Two tiny models of the incidence axioms. Left: three points and three lines, where no two lines are parallel. Right: four points and six lines, where each line has exactly one parallel, drawn in the same colour">
  <line x1="36.0" y1="162.0" x2="156.0" y2="162.0" stroke="currentColor" stroke-width="1.6"/>
  <line x1="156.0" y1="162.0" x2="96.0" y2="58.2" stroke="currentColor" stroke-width="1.6"/>
  <line x1="96.0" y1="58.2" x2="36.0" y2="162.0" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="36.0" cy="162.0" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="156.0" cy="162.0" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="96.0" cy="58.2" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <line x1="264.0" y1="162.0" x2="408.0" y2="162.0" stroke="#9cc9ea" stroke-width="4"/>
  <line x1="264.0" y1="162.0" x2="408.0" y2="162.0" stroke="currentColor" stroke-width="0.8"/>
  <line x1="408.0" y1="48.0" x2="264.0" y2="48.0" stroke="#9cc9ea" stroke-width="4"/>
  <line x1="408.0" y1="48.0" x2="264.0" y2="48.0" stroke="currentColor" stroke-width="0.8"/>
  <line x1="408.0" y1="162.0" x2="408.0" y2="48.0" stroke="#7ccf9a" stroke-width="4"/>
  <line x1="408.0" y1="162.0" x2="408.0" y2="48.0" stroke="currentColor" stroke-width="0.8"/>
  <line x1="264.0" y1="48.0" x2="264.0" y2="162.0" stroke="#7ccf9a" stroke-width="4"/>
  <line x1="264.0" y1="48.0" x2="264.0" y2="162.0" stroke="currentColor" stroke-width="0.8"/>
  <line x1="264.0" y1="162.0" x2="408.0" y2="48.0" stroke="#eea66f" stroke-width="4"/>
  <line x1="264.0" y1="162.0" x2="408.0" y2="48.0" stroke="currentColor" stroke-width="0.8"/>
  <line x1="408.0" y1="162.0" x2="264.0" y2="48.0" stroke="#eea66f" stroke-width="4"/>
  <line x1="408.0" y1="162.0" x2="264.0" y2="48.0" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="264.0" cy="162.0" r="4" fill="white" stroke="currentColor" stroke-width="1"/>
  <circle cx="408.0" cy="162.0" r="4" fill="white" stroke="currentColor" stroke-width="1"/>
  <circle cx="408.0" cy="48.0" r="4" fill="white" stroke="currentColor" stroke-width="1"/>
  <circle cx="264.0" cy="48.0" r="4" fill="white" stroke="currentColor" stroke-width="1"/>
  <text x="96.0" y="192.0" font-size="12" text-anchor="middle" fill="currentColor">3 points, 3 lines</text>
  <text x="336.0" y="192.0" font-size="12" text-anchor="middle" fill="currentColor">4 points, 6 lines</text>
</svg>
</div>

So the incidence axioms alone can neither prove nor disprove "parallels exist" or "parallels are unique". (With
seven points and seven lines of three points each you get the **Fano plane**, where again no two lines are parallel;
see [Chapter 18](18-Projective-Geometry.md).)

### The real question

For the full neutral axioms we need a model in which axioms I, II, III and V hold but IV fails. The first such models
were found in 1868 by Eugenio Beltrami and refined by Felix Klein (1871) and Henri Poincaré (1882). The simplest to
describe is the **Beltrami-Klein disc**:

- "points" are the points **strictly inside** a fixed circle (the boundary circle is not part of the plane);
- "lines" are the open chords of the circle;
- "lies on" and "between" have their usual meaning.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 323.0 323.0" role="img" aria-label="The Klein disc model: points are inside the disc and lines are chords. Through the point P off the chord l pass the two dashed chords that meet l only at the boundary, which is not part of the plane, and every chord between them misses l too">
  <circle cx="161.5" cy="161.5" r="130.0" fill="#9cc9ea" fill-opacity="0.25" stroke="currentColor" stroke-width="1.6"/>
  <line x1="39.3" y1="206.0" x2="261.1" y2="245.1" stroke="currentColor" stroke-width="2.2"/>
  <line x1="39.3" y1="206.0" x2="245.2" y2="62.0" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 3"/>
  <line x1="261.1" y1="245.1" x2="113.6" y2="40.6" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 3"/>
  <line x1="76.5" y1="63.2" x2="289.2" y2="186.0" stroke="currentColor" stroke-width="1.1"/>
  <line x1="49.7" y1="95.1" x2="289.2" y2="137.4" stroke="currentColor" stroke-width="1.1"/>
  <line x1="36.0" y1="127.5" x2="279.2" y2="106.3" stroke="currentColor" stroke-width="1.1"/>
  <circle cx="39.3" cy="206.0" r="3.5" fill="white" stroke="currentColor" stroke-width="1"/>
  <circle cx="261.1" cy="245.1" r="3.5" fill="white" stroke="currentColor" stroke-width="1"/>
  <circle cx="168.0" cy="116.0" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="168.0" y="107.0" font-size="12" text-anchor="middle" fill="currentColor">P</text>
  <text x="150.2" y="241.5" font-size="12" text-anchor="middle" fill="currentColor" font-style="italic">l</text>
</svg>
</div>

The incidence and order axioms are easy to check: two points inside the disc lie on exactly one chord, and so on. But
look at the figure: through a point $P$ not on the chord $\ell$ there are **infinitely many** chords that do not meet
$\ell$ inside the disc. The parallel axiom fails.

Congruence is the subtle part. It cannot be ordinary Euclidean length, since then axiom III.1 would fail: a long
segment could not be copied onto a ray that runs into the boundary circle sooner. Instead, distance in the Klein model is
defined with a cross-ratio: if the chord through $P$ and $Q$ meets the circle at $A$ and $B$ (with $A, P, Q, B$ in order),

$$
d(P, Q) = \frac12 \ln \frac{|AQ| \cdot |PB|}{|AP| \cdot |QB|} .
$$

As $Q$ approaches $B$, $|QB| \to 0$ and $d(P, Q) \to \infty$: the boundary is infinitely far away. Angles are also
defined in a special way (the Klein model does not show true angles; Poincaré's disc model, in
[Chapter 17](17-Hyperbolic-Geometry.md), does). With these definitions every axiom of neutral geometry holds, plus the
**hyperbolic parallel axiom**: through a point not on a line there are at least two parallels. Checking congruence
axiom III.5 and the continuity axioms takes real work; it is done in Greenberg, chapter 7.

### Relative consistency

The Klein model is built **inside** Euclidean geometry: its points and chords are Euclidean objects. So if hyperbolic
geometry contained a contradiction, translating that contradiction into statements about chords and cross-ratios would
give a contradiction in Euclidean geometry. Therefore:

> **If Euclidean geometry is consistent, so is hyperbolic geometry.**

And since Euclidean geometry has a model built from the real numbers (points are pairs $(x, y)$, lines are solution sets
of $ax + by = c$), it is consistent if the real numbers are. This is **relative consistency**: no mathematical theory
can prove its own consistency outright (Gödel's second incompleteness theorem rules this out for theories that include
arithmetic), but we can show that one theory is as safe as another. Hyperbolic geometry is exactly as safe as
Euclidean geometry, which is exactly as safe as the real numbers.

The conclusion of 2000 years: **the parallel postulate is independent of the other axioms.** It can be neither proved
nor disproved from them. Euclid was right to make it a postulate.

## 15.5 Gauss, Bolyai and Lobachevsky

*Level: intermediate.* Early in the 19th century, three mathematicians, working separately, did what Saccheri and
Lambert had stopped short of: they took the acute hypothesis seriously as a geometry in its own right.

**Carl Friedrich Gauss** thought about parallels from his student days. His letters show that by the 1820s he believed
a consistent non-Euclidean geometry existed; in an 1824 letter to Franz Taurinus he described its main features and
asked that it be kept private. He never published on it, fearing, as he wrote to Bessel in 1829, the outcry of
those who did not understand. A story says Gauss measured the triangle formed by three mountain peaks (Brocken,
Hohehagen and Inselsberg) during his survey of Hanover to test whether space is Euclidean. He did measure that
triangle, for geodesy; whether he meant it as a test of geometry is disputed by historians, and the survey could not
have detected any deviation anyway.

**János Bolyai**, a young Hungarian army engineer and the son of Gauss's friend Farkas Bolyai, worked out the new
geometry in the 1820s. In 1823 he wrote to his father that he had "created a new, different world out of nothing". His
26-page account appeared in 1832 as an appendix to a textbook by his father, and is known simply as the *Appendix*. It
includes "absolute geometry", the theorems true whether or not the parallel postulate holds. Gauss replied to Farkas
that he could not praise the work, because to praise it would be to praise himself, as it coincided with his own
thoughts of many years. János was deeply discouraged.

**Nikolai Ivanovich Lobachevsky**, at the University of Kazan in Russia, lectured on the new geometry in 1826 and
published it in 1829 to 1830 in a local journal, the *Kazan Messenger*, in Russian. He followed it with a book in
German, *Geometrische Untersuchungen zur Theorie der Parallellinien* (1840), and a final account, *Pangéométrie*
(1855). He developed hyperbolic trigonometry in detail, and the formulas for the angle of parallelism you will see in
[Chapter 17](17-Hyperbolic-Geometry.md) are his.

**What they found.** Assume that through a point outside a line there are at least two parallels. Then:

- every triangle has angle sum less than $180^\circ$, and its defect measures its area;
- there are no similar triangles of different sizes: if two triangles have equal angles, they are congruent;
- triangle areas are bounded: no triangle has area beyond a fixed maximum;
- there is a natural unit of length built into the geometry (a length that can be defined, not just chosen), in the
  way that angles have a natural unit (the right angle);
- for small figures the geometry is almost Euclidean, so measurement in a small region cannot tell the two apart.

The new geometry was ignored for decades. It became accepted after Beltrami's model (1868) showed it consistent, and
after Bernhard Riemann's 1854 lecture "On the hypotheses which lie at the foundations of geometry" put Euclidean,
spherical and hyperbolic geometry into one framework of curved spaces ([Chapter 20](20-Manifolds-and-Riemannian-Geometry.md)).
The two geometries in which lines behave differently from Euclid's are the subjects of the next two chapters:
[spherical](16-Spherical-Geometry.md) (no parallels, angle sum more than $180^\circ$) and
[hyperbolic](17-Hyperbolic-Geometry.md) (many parallels, angle sum less).

**Which one is our space?** It became a question for physics, not for pure thought. Einstein's general relativity
(1915) says that space and time are curved by matter, and that is now measured, from GPS satellites to the bending of
light by the Sun ([Chapter 20](20-Manifolds-and-Riemannian-Geometry.md)). On the scale of a room, a city or a planet,
Euclid's geometry is an extremely good approximation.

## Check yourself

??? question "1. Write Playfair's axiom, and the hyperbolic parallel axiom, as statements about a line $\ell$ and a point $P$ not on $\ell$."

    Playfair: there is at most one line through $P$ that does not meet $\ell$ (with neutral geometry, exactly one).
    Hyperbolic: there are at least two lines through $P$ that do not meet $\ell$ (and then, it turns out, infinitely many).

??? question "2. Which of Euclid's first four postulates fails on a sphere, if 'lines' are great circles?"

    Postulate 2 is the delicate one: a great circle can be "produced continuously", but only by going around and coming
    back, so a line is finite and closed. Postulate 1 also fails as stated with "exactly one": antipodal points (like the
    two poles) lie on infinitely many great circles. Postulates 3 and 4 hold.

??? question "3. Find the gap in this 'proof' of the parallel postulate: 'Let $m$ be parallel to $\ell$ through $P$. Points of $m$ are all at the same distance from $\ell$, so any other line through $P$ gets closer to $\ell$ on one side and must eventually meet it.'"

    It assumes that a line parallel to $\ell$ is everywhere at the same distance from it, that is, that the equidistant
    curve is a line. That is equivalent to the parallel postulate (statement 6 of 15.1), so the argument is circular. In
    hyperbolic geometry the points at a fixed distance from a line form a curve, not a line.

??? question "4. In the proof of the exterior angle theorem, where would the argument break down on a sphere?"

    Extending $BM$ to twice its length to reach $E$: on a sphere, if $BM$ is longer than a quarter of a great circle,
    then $BE$ is more than half a great circle, and $E$ can land on the other side, outside the angle $\angle ACD$. The
    theorem really is false on the sphere: a triangle with three right angles (one-eighth of the sphere) has exterior
    angles of $90^\circ$, equal to the remote interior angles.

??? question "5. A triangle has angles $50^\circ$, $60^\circ$ and $64^\circ$. Can it exist in neutral geometry? What is its defect, and in which geometry does it live?"

    The sum is $174^\circ \le 180^\circ$, allowed by Saccheri-Legendre. The defect is $6^\circ$. A positive defect means it
    is not Euclidean, so it lives in hyperbolic geometry, where by Corollary 15.5 every triangle has positive defect.

??? question "6. A triangle with defect $10^\circ$ is cut by a segment from a vertex to the opposite side. One piece has defect $3^\circ$. What is the other's defect?"

    Defect is additive (Theorem 15.4): $10^\circ - 3^\circ = 7^\circ$.

??? question "7. Show in neutral geometry that the summit $DC$ of a Saccheri quadrilateral and its base $AB$ do not meet."

    Let $M$ and $N$ be the midpoints of $AB$ and $DC$. Triangles $AMD$ and $BMC$ are congruent by SAS ($AM = BM$,
    $AD = BC$, right angles at $A$ and $B$), so $MD = MC$; then triangles $DMN$ and $CMN$ are congruent by SSS, so the
    angles at $N$ are equal and $MN \perp DC$. In the same way triangles $ADN$ and $BCN$ are congruent by SAS ($AD = BC$,
    $DN = CN$, and the summit angles are equal), so $AN = BN$, and triangles $AMN$ and $BMN$ are congruent by SSS, so
    $MN \perp AB$. Two lines perpendicular to the same line are parallel (Corollary 2, with right alternate angles). So
    $AB$ and $DC$ do not meet.

??? question "8. In the four-point model, list the lines parallel to $\{A, C\}$. Does Playfair's axiom hold for every line and point?"

    The lines are the six pairs. $\{A, C\}$ meets every pair that contains $A$ or $C$; the only pair that does not is
    $\{B, D\}$. So $\{B, D\}$ is the unique parallel. For a point not on $\{A, C\}$, say $B$, the lines through $B$ are
    $\{A, B\}, \{B, C\}, \{B, D\}$, and exactly one of them, $\{B, D\}$, misses $\{A, C\}$. By symmetry this holds for every
    line and point, so Playfair's axiom holds.

??? question "9. In the Klein model with the unit disc, compute the distance from the centre $0$ to the point $r$ on the real axis ($0 < r < 1$). What happens as $r \to 1$?"

    The chord is the diameter with ends $A = -1$, $B = 1$. With $P = 0$, $Q = r$: $|AQ| = 1 + r$, $|PB| = 1$, $|AP| = 1$,
    $|QB| = 1 - r$. So $d = \tfrac12 \ln \frac{1 + r}{1 - r}$, which is $\operatorname{artanh} r$. As $r \to 1$ it tends to
    infinity: the boundary is infinitely far away. (For example, $r = 0.9$ gives $d = \tfrac12 \ln 19 \approx 1.47$, and
    $r = 0.99$ gives $\tfrac12 \ln 199 \approx 2.65$.)

??? question "10. Explain why finding the Klein model shows that no one will ever prove the parallel postulate from the neutral axioms, even with methods not yet invented."

    A proof from the neutral axioms would be valid in every model of those axioms. The Klein model satisfies all of them
    and fails the parallel postulate. So any such "proof" would prove a false statement about the Klein model, which
    (if Euclidean geometry is consistent) is impossible. The conclusion depends only on what a proof is, not on any
    particular method.

??? question "11. Using Theorem 15.2, prove that in neutral geometry the angle sum of a convex quadrilateral is at most $360^\circ$."

    A diagonal cuts the convex quadrilateral into two triangles. The angles of the triangles at the ends of the diagonal
    add up to the quadrilateral's angles there (the diagonal lies inside the angles, by convexity), and the other angles
    are the same. So the quadrilateral's sum is the sum of the two triangles' sums, each at most $180^\circ$.

??? question "12. Prove: if a rectangle exists in neutral geometry, then some triangle has angle sum $180^\circ$."

    A diagonal of the rectangle cuts it into two triangles, whose angle sums add up to $4 \times 90^\circ = 360^\circ$.
    Each is at most $180^\circ$ by Theorem 15.2, so both are exactly $180^\circ$. (With Corollary 15.5 it follows that
    every triangle has angle sum $180^\circ$: a rectangle forces Euclidean geometry, statement 3 of 15.1.)

## What you learned

- Euclid's fifth postulate is equivalent to Playfair's axiom, to the angle sum being $180^\circ$, to the existence of a
  rectangle or of similar triangles, and to many other "obvious" statements.
- For two thousand years, attempts to prove it each assumed an equivalent; Saccheri and Lambert found much of
  hyperbolic geometry while trying to refute it.
- Hilbert's axioms (incidence, order, congruence, parallels, continuity) fill Euclid's gaps, such as circles meeting and
  points lying inside or outside.
- In neutral geometry the exterior angle theorem holds, parallels exist, the angle sum is at most $180^\circ$
  (Saccheri-Legendre), and defect is additive.
- A model in which the axioms hold and a statement fails shows that the statement cannot be proved; the Klein model
  shows the parallel postulate is independent, and that hyperbolic geometry is as consistent as Euclidean geometry.
- Gauss, Bolyai and Lobachevsky were the first to accept the new geometry as a geometry, not an absurdity.

**Next:** [Chapter 16](16-Spherical-Geometry.md) studies the geometry on a sphere, where there are no parallels at all and a triangle's angles add up to more than $180^\circ$.

## Further reading

- M. J. Greenberg, *Euclidean and Non-Euclidean Geometries: Development and History* (4th ed., 2008), the standard account of everything in this chapter.
- R. Hartshorne, *Geometry: Euclid and Beyond* (2000), Hilbert's axioms in full detail.
- D. Hilbert, *Grundlagen der Geometrie* (1899); English translation *The Foundations of Geometry*.
- T. L. Heath, *The Thirteen Books of Euclid's Elements* (1908), with commentary on the parallel postulate.
- R. Bonola, *Non-Euclidean Geometry: A Critical and Historical Study of its Development* (English translation 1912), which includes translations of Bolyai's *Appendix* and Lobachevsky's *Theory of Parallels*.
- J. Gray, *Ideas of Space: Euclidean, Non-Euclidean and Relativistic* (2nd ed., 1989), and *János Bolyai, Non-Euclidean Geometry, and the Nature of Space* (2004).
- B. A. Rosenfeld, *A History of Non-Euclidean Geometry* (English translation 1988), for the work of Ibn al-Haytham, Khayyam and al-Tusi.
- On this site: the gentler [Geometric proof](../../topics/geometry/level-8/01-geometric-proof.md) and
  [Triangle angle sum](../../topics/geometry/level-4/03-triangle-angle-sum.md) lessons; the
  [Geometry book index](index.md).
