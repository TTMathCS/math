# 1. Points, lines and angles

*How can you measure the size of the Earth without leaving Egypt, or be sure that a fact about angles holds for
every angle that will ever be drawn? Geometry began as the measuring of fields and the watching of stars, and turned
into something new: a body of knowledge built from a few starting facts by pure reasoning. This chapter sets up the
words that everything else in the book uses (point, line, segment, ray, plane, angle), shows how angles are
measured, proves the first handful of theorems about them, and explains what a geometric proof is. It ends with the
book that showed the world how to do this, Euclid's Elements, and its five postulates, one of which caused two
thousand years of trouble.*

!!! abstract "In this chapter"

    **You will learn:**

    - what geometry is for, and how Eratosthenes used two angles to measure the whole Earth
    - the basic objects (points, lines, segments, rays, planes) and why some words are left undefined
    - what an angle is, how it is measured in degrees, minutes and seconds, and the names of the kinds of angle
    - the first theorems: angles on a straight line, vertical angles, angles around a point, with proofs
    - what a proof in geometry is: given, to prove, reasons; converses and counterexamples; proof by contradiction
    - Euclid's *Elements*: its definitions, common notions and five postulates, and the gap in its very first proof

    **You need:** nothing beyond arithmetic and a little algebra (solving $3x + 20 = 110$). For a gentler version,
    see the Topics lessons [What an angle is](../../topics/geometry/level-3/01-what-angle-is.md),
    [Measuring angles with a protractor](../../topics/geometry/level-3/02-measuring-angles.md),
    [Parallel and perpendicular lines](../../topics/geometry/level-3/03-parallel-perpendicular.md),
    [Angles on a straight line and around a point](../../topics/geometry/level-4/01-straight-line-point.md),
    [Vertically opposite angles](../../topics/geometry/level-4/02-vertically-opposite.md) and
    [How to write a geometric proof](../../topics/geometry/level-8/01-geometric-proof.md).

    **Levels:** 1.1 to 1.4 are beginner; 1.5 is beginner to intermediate; 1.6 is intermediate.

## 1.1 What geometry is for

The word *geometry* is Greek: *geo*, earth, and *metria*, measuring. The Greek historian Herodotus, writing in
the 5th century BC, says that Egyptian surveyors had to measure land again after each flood of the Nile washed the
boundary marks away, and that the Greeks learned the art from them. Whether or not that is the whole story, the
oldest geometry we have is practical. Clay tablets from Babylon, written nearly four thousand years ago, compute
areas of fields and the diagonal of a square. The Egyptian Rhind papyrus (copied around 1550 BC) finds the volumes of
granaries and the slopes of pyramids. Builders, tax collectors, astronomers and sailors all needed to know how big
things were, how far away they were and in what direction.

Three kinds of question run through the whole subject, and through this book:

- **How big?** Lengths, angles, areas, volumes. (Chapters 1 to 7, and 11.)
- **What shape?** When are two figures "the same"? What stays true when you move, turn, stretch or bend a figure?
  (Chapters 2, 5, 10 and the whole second half of the book.)
- **What must be true?** If some things are true of a figure, what else is forced? This is where proof comes in.

What made Greek geometry different from what came before was the third question. A Babylonian scribe knew how to
compute a diagonal; a Greek geometer wanted to know *why* the rule works, for every square, and to show it from
things nobody could doubt. That habit of proof, more than any single fact, is the gift of geometry to the rest of
mathematics and science.

### Eratosthenes measures the Earth

The most famous early measurement shows how far a little geometry can reach. Eratosthenes of Cyrene (about
276 to 194 BC) was the head of the great library at Alexandria in Egypt. His own book on the subject is lost; we
know the method from a later astronomy textbook by Cleomedes. It goes like this.

At noon on the day of the summer solstice, the Sun was said to shine straight down a well at Syene (modern Aswan),
far to the south: a vertical stick there cast no shadow. At the same moment in Alexandria, a vertical stick did cast
a shadow, and the angle between the stick and the Sun's rays was one fiftieth of a full circle, which is
$360° / 50 = 7.2°$.

The Sun is so far away that its rays arriving at the two cities are, for all practical purposes, parallel. A
vertical stick points straight at the centre of the Earth. Look at the picture: the angle $\theta$ at the top of
the Alexandria stick and the angle $\theta$ at the centre of the Earth are equal. (They are *alternate angles*
between parallel lines, a fact we prove in [Chapter 3](03-Parallel-Lines-and-the-Angle-Sum.md).)

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 300" role="img" aria-label="Eratosthenes' measurement: parallel sun rays reach Syene straight down and Alexandria at an angle; the shadow angle at Alexandria equals the angle at the Earth's centre between the two cities (angle drawn larger than the real 7.2 degrees)">
  <path d="M 384.5 175 A 190 190 0 0 0 55.5 175" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="220" y1="270" x2="220" y2="80" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="220" y1="270" x2="148.8" y2="93.8" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <circle cx="220" cy="270" r="3" fill="currentColor"/>
  <text x="220" y="286.6" text-anchor="middle" font-size="13" fill="currentColor">centre</text>
  <line x1="220" y1="8" x2="220" y2="78" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="220,78 223.1,70.6 216.9,70.6" fill="currentColor" stroke="currentColor" stroke-width="1"/>
  <line x1="148.8" y1="8" x2="148.8" y2="91.8" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="148.8,91.8 151.9,84.5 145.7,84.5" fill="currentColor" stroke="currentColor" stroke-width="1"/>
  <text x="270" y="20" text-anchor="start" font-size="13" fill="currentColor">sun's rays (parallel)</text>
  <line x1="148.8" y1="93.8" x2="133.8" y2="56.7" stroke="currentColor" stroke-width="3"/>
  <path d="M 148.8 93.8 L 148.8 67.8 A 26 26 0 0 0 139.1 69.7 Z" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="142" y="63.4" text-anchor="middle" font-size="14" fill="currentColor">θ</text>
  <path d="M 220 270 L 220 230 A 40 40 0 0 0 205 232.9 Z" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="210.1" y="223.9" text-anchor="middle" font-size="14" fill="currentColor">θ</text>
  <circle cx="220" cy="80" r="3" fill="currentColor"/>
  <circle cx="148.8" cy="93.8" r="3" fill="currentColor"/>
  <text x="252" y="96.9" text-anchor="middle" font-size="14" fill="currentColor">Syene</text>
  <text x="100.8" y="104.7" text-anchor="middle" font-size="14" fill="currentColor">Alexandria</text>
</svg>
</div>

So the arc from Syene to Alexandria is $7.2°$ out of the full $360°$ of the Earth's circumference, that is
$1/50$ of it. Eratosthenes took the distance between the cities to be 5000 *stadia* (a stadion was a Greek unit of
length, roughly the length of a running track). The whole circumference is then

$$
50 \times 5000 = 250\,000 \text{ stadia}.
$$

How good was this? The honest answer is that we do not know exactly, because we do not know which stadion he used:
values from about 157 m to 185 m have been proposed. With 157.5 m the answer is about 39 400 km; with 185 m it is
about 46 250 km. The Earth's real circumference through the poles is about 40 008 km. So he was somewhere between
remarkably close and about 15 percent too large. His inputs were also rough: Syene is not exactly on the tropic and
not exactly due south of Alexandria, and the distance was an estimate. None of this matters to the main point.
With one angle, one distance and one idea about parallel lines, he found the size of a planet he could not see the
whole of. The same method would work on Mars, whose real radius is about 3389.5 km (Exercise 7).

**Check.** $360 / 7.2 = 50$, so 7.2° really is one fiftieth of a circle.

## 1.2 Points, lines, segments, rays and planes

Before we can prove anything we need words, and the first words of geometry are strange. Try to define a *point*.
Euclid wrote "a point is that which has no part", and "a line is breadthless length". These sentences help the
imagination, but they are not definitions you can use in a proof: what is a "part"? what is "length"? Any
definition uses other words, and those need defining too. Somewhere the chain must stop.

Modern geometry stops it honestly. A few words are left **undefined** (in the plane: *point*, *line*, and the
relations *lies on* and *between*), and everything we are allowed to say about them is written down as
**axioms** or **postulates**, starting facts accepted without proof. Then every other word is defined from these,
and every other fact is proved. The undefined words mean whatever satisfies the axioms. David Hilbert, who rebuilt
geometry this way in 1899, is reported to have said that one should be able to say "tables, chairs and beer mugs"
instead of "points, lines and planes"; the remark may be retold rather than recorded, but the idea behind it is
exactly his. We will meet his axioms in Chapter 15. Until then we use our picture of points as dots with no size and
lines as perfectly straight, perfectly thin, endless.

Here are the basic objects and how they are written.

- A **point** marks a position. It has no length, width or thickness. We name points with capital letters: $A$, $B$,
  $P$.
- A **line** is straight, has no thickness and goes on forever in both directions. Through any two different points
  $A$ and $B$ there is exactly one line, written $AB$ or $\overleftrightarrow{AB}$. Points on one line are
  **collinear**.
- A **segment** $AB$ (also written $\overline{AB}$) is the part of the line between $A$ and $B$, including the two
  **endpoints**. It has a length, written $AB$ or $|AB|$.
- A **ray** $AB$ (written $\overrightarrow{AB}$) starts at $A$, passes through $B$ and goes on forever. The point $A$
  is its endpoint. A ray is "half a line": if $C$ is on line $AB$ with $A$ between $B$ and $C$, the rays $AB$ and
  $AC$ are **opposite rays**, and together they make the whole line.
- A **plane** is a flat surface with no thickness that goes on forever in every direction. Through any three points
  not on one line there is exactly one plane. Most of this book happens in one plane; Chapter 11 goes into space.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 150" role="img" aria-label="A point, a segment AB, a ray from A through B, a line through A and B, and a piece of a plane">
  <circle cx="30" cy="55" r="3" fill="currentColor"/>
  <text x="30" y="44.2" text-anchor="middle" font-size="15" fill="currentColor">P</text>
  <line x1="70" y1="55" x2="150" y2="55" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="70" cy="55" r="3" fill="currentColor"/>
  <circle cx="150" cy="55" r="3" fill="currentColor"/>
  <text x="70" y="44.2" text-anchor="middle" font-size="15" fill="currentColor">A</text>
  <text x="150" y="44.2" text-anchor="middle" font-size="15" fill="currentColor">B</text>
  <line x1="180" y1="55" x2="275" y2="55" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="275,55 267.6,51.9 267.6,58.1" fill="currentColor" stroke="currentColor" stroke-width="1"/>
  <circle cx="180" cy="55" r="3" fill="currentColor"/>
  <circle cx="230" cy="55" r="3" fill="currentColor"/>
  <text x="180" y="44.2" text-anchor="middle" font-size="15" fill="currentColor">A</text>
  <text x="230" y="44.2" text-anchor="middle" font-size="15" fill="currentColor">B</text>
  <line x1="337" y1="55" x2="295" y2="55" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="295,55 302.4,58.1 302.4,51.9" fill="currentColor" stroke="currentColor" stroke-width="1"/>
  <line x1="337" y1="55" x2="382" y2="55" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="382,55 374.6,51.9 374.6,58.1" fill="currentColor" stroke="currentColor" stroke-width="1"/>
  <circle cx="320" cy="55" r="3" fill="currentColor"/>
  <circle cx="355" cy="55" r="3" fill="currentColor"/>
  <text x="320" y="44.2" text-anchor="middle" font-size="15" fill="currentColor">A</text>
  <text x="355" y="44.2" text-anchor="middle" font-size="15" fill="currentColor">B</text>
  <text x="30" y="110" text-anchor="middle" font-size="14" fill="currentColor">point</text>
  <text x="110" y="110" text-anchor="middle" font-size="14" fill="currentColor">segment AB</text>
  <text x="228" y="110" text-anchor="middle" font-size="14" fill="currentColor">ray AB</text>
  <text x="350" y="110" text-anchor="middle" font-size="14" fill="currentColor">line AB</text>
  <polygon points="415,85 458,85 446,30 403,30" fill="#9cc9ea" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <text x="430" y="110" text-anchor="middle" font-size="14" fill="currentColor">plane</text>
</svg>
</div>

The **midpoint** of segment $AB$ is the point $M$ on it with $AM = MB$. Two segments are **congruent** if they have
the same length. In drawings, equal lengths are marked with the same number of small ticks.

Two lines in a plane either meet in exactly one point, or never meet at all; lines in one plane that never meet are
**parallel**, written $\ell \parallel m$. (Why can two different lines not meet twice? Section 1.5 proves it.) Two
lines that meet at a right angle are **perpendicular**, written $\ell \perp m$. In space there is a third
possibility: two lines that neither meet nor are parallel, like a north-south road and an east-west bridge over it.
They are called **skew**.

**Worked example.** Points $A$, $B$, $C$, $D$ lie on a line in that order, with $AB = 3$, $BC = 5$ and $AD = 15$.
How long is $CD$, and where is the midpoint of $AD$?

Lengths along a line add: $AD = AB + BC + CD$, so $15 = 3 + 5 + CD$ and $CD = 7$. The midpoint $M$ of $AD$ has
$AM = 7.5$. Since $AC = 8$, the midpoint lies between $B$ and $C$, at distance $7.5 - 3 = 4.5$ from $B$.
**Check:** $AB + BM = 3 + 4.5 = 7.5 = AD/2$.

## 1.3 Angles and measuring them

### What an angle is

An **angle** is the figure made by two rays that share an endpoint. The shared endpoint is the **vertex** and the
rays are the **arms** (or sides). If the rays are $OA$ and $OB$, the angle is written $\angle AOB$, with the vertex
in the middle; when there is no doubt we write $\angle O$, or give it a Greek letter like $\alpha$ (alpha), $\beta$
(beta), $\theta$ (theta).

An angle is not a length. It measures *how much you turn* to go from one arm to the other. Two angles with long arms
and short arms can be the same angle: drawing the arms longer changes nothing.

### Degrees

The usual unit is the **degree**: a full turn is $360°$. Why 360? The honest answer is that it came from astronomy.
The Babylonians counted in base 60, and Greek astronomers, above all Hipparchus in the 2nd century BC and Ptolemy in
the 2nd century AD, adopted a division of the circle into 360 parts together with base-60 fractions. 360 is
convenient: it divides evenly by 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 18, 20, 24, 30, 36, 40, 45, 60, 72, 90, 120 and
180, and it is close to the number of days in a year.

Base 60 survives in the smaller units: one degree is 60 **minutes** ($60'$) and one minute is 60 **seconds**
($60''$), exactly like hours.

**Worked example.** The Earth's axis is tilted about $23.44°$ from upright, and Mars's about $25.19°$. Write both
in degrees, minutes and seconds.

$0.44° \times 60 = 26.4'$, and $0.4' \times 60 = 24''$, so $23.44° = 23°\,26'\,24''$. For Mars,
$0.19 \times 60 = 11.4'$ and $0.4 \times 60 = 24''$, so $25.19° = 25°\,11'\,24''$. The two planets lean by almost the
same amount, which is why Mars has seasons much like ours (though each lasts about twice as long, because the Martian
year is longer).

A minute of arc is a natural unit on a planet. The *nautical mile* was originally one minute of latitude on the
Earth; dividing the polar circumference by $360 \times 60 = 21\,600$ minutes gives $40\,008 / 21\,600 \approx 1.852$ km,
which is the nautical mile's present defined value. On Mars, with circumference $2\pi \times 3389.5 \approx 21\,297$ km,
one minute of latitude is about $0.986$ km.

There is another unit, the **radian**, which measures an angle by the arc it cuts from a circle of radius 1. A full
turn is $2\pi$ radians, so one radian is $180/\pi \approx 57.3°$. Radians are the natural unit for calculus and come
in [Chapter 7](07-Trigonometry.md); in Part I we use degrees.

### The kinds of angle

We write $m\angle AOB$, or just $\angle AOB$ when it causes no confusion, for the measure in degrees.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 480 150" role="img" aria-label="Five kinds of angle: acute (less than 90 degrees), right (90), obtuse (between 90 and 180), straight (180) and reflex (more than 180)">
  <path d="M 25 100 L 41 100 A 16 16 0 0 0 35.3 87.7 Z" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <line x1="25" y1="100" x2="85" y2="100" stroke="currentColor" stroke-width="1.5"/>
  <line x1="25" y1="100" x2="63.6" y2="54" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="25" cy="100" r="3" fill="currentColor"/>
  <text x="50" y="22" text-anchor="middle" font-size="14" fill="currentColor">acute</text>
  <text x="50" y="142" text-anchor="middle" font-size="13" fill="currentColor">50°</text>
  <polyline points="132,100 132,88 120,88" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="120" y1="100" x2="180" y2="100" stroke="currentColor" stroke-width="1.5"/>
  <line x1="120" y1="100" x2="120" y2="40" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="120" cy="100" r="3" fill="currentColor"/>
  <text x="145" y="22" text-anchor="middle" font-size="14" fill="currentColor">right</text>
  <text x="145" y="142" text-anchor="middle" font-size="13" fill="currentColor">90°</text>
  <path d="M 240 100 L 256 100 A 16 16 0 0 0 228.7 88.7 Z" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <line x1="240" y1="100" x2="285" y2="100" stroke="currentColor" stroke-width="1.5"/>
  <line x1="240" y1="100" x2="208.2" y2="68.2" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="240" cy="100" r="3" fill="currentColor"/>
  <text x="240" y="22" text-anchor="middle" font-size="14" fill="currentColor">obtuse</text>
  <text x="240" y="142" text-anchor="middle" font-size="13" fill="currentColor">135°</text>
  <path d="M 335 80 L 351 80 A 16 16 0 0 0 319 80 Z" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <line x1="335" y1="80" x2="373" y2="80" stroke="currentColor" stroke-width="1.5"/>
  <line x1="335" y1="80" x2="297" y2="80" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="335" cy="80" r="3" fill="currentColor"/>
  <text x="335" y="22" text-anchor="middle" font-size="14" fill="currentColor">straight</text>
  <text x="335" y="142" text-anchor="middle" font-size="13" fill="currentColor">180°</text>
  <path d="M 430 80 L 446 80 A 16 16 0 1 0 424.5 95 Z" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <line x1="430" y1="80" x2="468" y2="80" stroke="currentColor" stroke-width="1.5"/>
  <line x1="430" y1="80" x2="417" y2="115.7" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="430" cy="80" r="3" fill="currentColor"/>
  <text x="430" y="22" text-anchor="middle" font-size="14" fill="currentColor">reflex</text>
  <text x="430" y="142" text-anchor="middle" font-size="13" fill="currentColor">250°</text>
</svg>
</div>

- **acute**: between $0°$ and $90°$;
- **right**: exactly $90°$, a quarter turn, marked with a small square;
- **obtuse**: between $90°$ and $180°$;
- **straight**: exactly $180°$, when the two arms are opposite rays and form a line;
- **reflex**: between $180°$ and $360°$, "the outside" of an ordinary angle.

Two rays from one point always make two angles, one on each side, adding to $360°$. Unless we say "reflex", $\angle AOB$ means the one that is at most $180°$.

Two more pairs of words. Two angles are **complementary** if they add to $90°$ and **supplementary** if they add to
$180°$. Two angles are **adjacent** if they share a vertex and an arm and do not overlap, like two slices of a cake
next to each other. A ray that splits an angle into two equal adjacent angles is its **bisector**.

### The protractor postulate

How do we know that angles can be measured at all, and that measures add? We take it as a starting fact. In 1932
the American mathematician George Birkhoff published a short list of axioms for plane geometry built on two familiar
instruments, a ruler and a protractor, and school geometry has used versions of them ever since. The part about
angles says:

> **Protractor postulate.** Given a ray $OA$ and one side of the line $OA$, the rays from $O$ on that side match up
> one-to-one with the numbers from 0 to 180, with $OA$ itself at 0 and the opposite ray at 180, and the measure of
> $\angle AOB$ is the number matched with ray $OB$.

Two consequences are what we use:

1. **Angle addition.** If ray $OC$ lies inside $\angle AOB$, then $\angle AOC + \angle COB = \angle AOB$.
2. **Straight angle.** Two opposite rays make an angle of $180°$.

This is exactly what a protractor does: lay its straight edge along one arm, read the other arm off the scale, and
subtract readings to get the angle between two rays.

**Worked example.** On a protractor centred at $O$, ray $OA$ reads $25°$ and ray $OB$ reads $112°$. How big is
$\angle AOB$, and where would its bisector read? The angle is $112 - 25 = 87°$. The bisector makes $43.5°$ with
each arm, so it reads $25 + 43.5 = 68.5°$. **Check:** $112 - 68.5 = 43.5$.

## 1.4 The first angle facts, with proofs

Now we can prove things. Each theorem below is something you could have guessed from a drawing. The point is to see
that it *follows* from the starting facts, so that it holds for every drawing, including ones nobody has drawn.

### Angles on a straight line

**Theorem 1.1 (linear pair).** If a ray $OC$ stands on a line $AB$, with $O$ between $A$ and $B$, then
$\angle AOC + \angle COB = 180°$.

Two angles placed like this, adjacent with their outer arms opposite rays, are called a **linear pair**.

*Proof.* Ray $OC$ lies inside the straight angle $\angle AOB$ (it is on one side of the line). By angle addition,
$\angle AOC + \angle COB = \angle AOB$, and a straight angle measures $180°$. $\blacksquare$

The symbol $\blacksquare$ marks the end of a proof. The theorem is almost a restatement of the postulate, which is
fine: the first theorems in any subject are close to the axioms.

### Vertical angles

When two lines cross they make four angles. The two angles opposite each other at the crossing are called
**vertical angles** or **vertically opposite angles** ("vertical" here means "at the vertex", not "upright").

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 170" role="img" aria-label="Left: a ray standing on a line makes angles a and b with a + b = 180 degrees. Right: two crossing lines make vertical angles a and c, which are equal">
  <line x1="15" y1="120" x2="205" y2="120" stroke="currentColor" stroke-width="1.5"/>
  <line x1="110" y1="120" x2="160" y2="33.4" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 110 120 L 134 120 A 24 24 0 0 0 122 99.2 Z" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="141.2" y="106.9" text-anchor="middle" font-size="14" fill="currentColor">a</text>
  <path d="M 110 120 L 122 99.2 A 24 24 0 0 0 86 120 Z" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="92" y="93.7" text-anchor="middle" font-size="14" fill="currentColor">b</text>
  <circle cx="110" cy="120" r="3" fill="currentColor"/>
  <text x="110" y="162" text-anchor="middle" font-size="14" fill="currentColor">a + b = 180°</text>
  <line x1="431.1" y1="44.9" x2="258.9" y2="125.1" stroke="currentColor" stroke-width="1.5"/>
  <line x1="267.2" y1="30.5" x2="422.8" y2="139.5" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 345 85 L 364.9 75.7 A 22 22 0 0 0 327 72.4 Z" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="348" y="56" text-anchor="middle" font-size="14" fill="currentColor">a</text>
  <path d="M 345 85 L 327 72.4 A 22 22 0 0 0 325.1 94.3 Z" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="311.1" y="86.9" text-anchor="middle" font-size="14" fill="currentColor">b</text>
  <path d="M 345 85 L 325.1 94.3 A 22 22 0 0 0 363 97.6 Z" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="342" y="123.8" text-anchor="middle" font-size="14" fill="currentColor">c</text>
  <path d="M 345 85 L 363 97.6 A 22 22 0 0 0 364.9 75.7 Z" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="378.9" y="92.9" text-anchor="middle" font-size="14" fill="currentColor">d</text>
  <circle cx="345" cy="85" r="3" fill="currentColor"/>
</svg>
</div>

**Theorem 1.2 (vertical angles).** Vertical angles are equal.

*Proof.* In the right-hand picture, $a$ and $b$ are a linear pair, so $a + b = 180°$ (Theorem 1.1). Also $b$ and
$c$ are a linear pair, so $b + c = 180°$. Then $a + b = b + c$, and subtracting $b$ from both sides gives $a = c$.
In the same way $b$ and $d$ are both supplements of $c$, so $b = d$. $\blacksquare$

Thales of Miletus (6th century BC) is named by the later Greek writer Proclus, quoting Eudemus, as the first to have
discovered this theorem, although Eudemus also says that a scientific proof of it came later, from Euclid. Our
sources for Thales are all written centuries after him, so treat any story about him with care.

The proof used a pattern worth naming.

**Theorem 1.3.** Supplements of equal angles are equal, and complements of equal angles are equal.

*Proof.* If $x = y$ and $x + s = 180°$, $y + t = 180°$, then $s = 180° - x = 180° - y = t$. The same with $90°$.
$\blacksquare$

**Worked example.** Two lines cross; one angle is $(3x + 20)°$ and the vertically opposite angle is $(5x - 14)°$.
Find all four angles.

Vertical angles are equal: $3x + 20 = 5x - 14$, so $34 = 2x$ and $x = 17$. The angle is $3 \cdot 17 + 20 = 71°$.
**Check:** $5 \cdot 17 - 14 = 71$. The other two angles are supplements: $180 - 71 = 109°$. The four angles are
$71°, 109°, 71°, 109°$, which add to $360°$.

### Angles around a point

**Theorem 1.4 (angles around a point).** If several rays leave a point $O$ and divide the full turn into adjacent
angles, those angles add up to $360°$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 300 200" role="img" aria-label="Four rays from one point make angles a, b, c and d that add up to 360 degrees">
  <path d="M 150 100 L 171.7 96.2 A 22 22 0 0 0 148.1 78.1 Z" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="171.9" y="76.3" text-anchor="middle" font-size="14" fill="currentColor">a</text>
  <path d="M 150 100 L 148.1 78.1 A 22 22 0 0 0 128.3 96.2 Z" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="125.7" y="78.4" text-anchor="middle" font-size="14" fill="currentColor">b</text>
  <path d="M 150 100 L 128.3 96.2 A 22 22 0 0 0 146.2 121.7 Z" fill="#7ccf9a" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="120.5" y="125.5" text-anchor="middle" font-size="14" fill="currentColor">c</text>
  <path d="M 150 100 L 146.2 121.7 A 22 22 0 0 0 171.7 96.2 Z" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="175.5" y="130.4" text-anchor="middle" font-size="14" fill="currentColor">d</text>
  <line x1="150" y1="100" x2="233.7" y2="85.2" stroke="currentColor" stroke-width="1.5"/>
  <line x1="150" y1="100" x2="142.6" y2="15.3" stroke="currentColor" stroke-width="1.5"/>
  <line x1="150" y1="100" x2="66.3" y2="85.2" stroke="currentColor" stroke-width="1.5"/>
  <line x1="150" y1="100" x2="135.2" y2="183.7" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="150" cy="100" r="3" fill="currentColor"/>
</svg>
</div>

*Proof.* Pick one of the rays, $OA$, and extend it backwards to the opposite ray $OA'$, making a straight line.
That line splits the full turn into two straight angles, each $180°$, one on each side. If $OA'$ is one of the
given rays, then the given angles on each side of the line add to $180°$ by angle addition, giving $360°$ in all.
If not, $OA'$ lies inside one of the given angles and splits it into two pieces, which add up to that angle; now
the pieces on each side of the line add to $180°$, so the given angles add to $180° + 180° = 360°$. $\blacksquare$

**Worked example.** Four angles around a point are $x$, $2x$, $3x$ and $4x$. Then $10x = 360°$, so $x = 36°$ and the
angles are $36°, 72°, 108°, 144°$.

### Bisectors of a linear pair

Here is a fact you might not have guessed so quickly.

**Theorem 1.5.** The bisectors of the two angles of a linear pair are perpendicular.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 170" role="img" aria-label="The bisectors of the two angles of a linear pair are perpendicular: x + x + y + y = 180 degrees, so x + y = 90 degrees">
  <line x1="20" y1="140" x2="400" y2="140" stroke="currentColor" stroke-width="1.5"/>
  <line x1="210" y1="140" x2="254.5" y2="17.8" stroke="currentColor" stroke-width="1.5"/>
  <line x1="210" y1="140" x2="308.3" y2="71.2" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="210" y1="140" x2="141.2" y2="41.7" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <path d="M 210 140 L 260 140 A 50 50 0 0 0 251 111.3 Z" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="269.1" y="126.3" text-anchor="middle" font-size="14" fill="currentColor">x</text>
  <path d="M 210 140 L 251 111.3 A 50 50 0 0 0 227.1 93 Z" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="247.7" y="95.7" text-anchor="middle" font-size="14" fill="currentColor">x</text>
  <path d="M 210 140 L 227.1 93 A 50 50 0 0 0 181.3 99 Z" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="201.9" y="83.4" text-anchor="middle" font-size="14" fill="currentColor">y</text>
  <path d="M 210 140 L 181.3 99 A 50 50 0 0 0 160 140 Z" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="155" y="116.3" text-anchor="middle" font-size="14" fill="currentColor">y</text>
  <polyline points="221.5,132 213.4,120.5 202,128.5" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="210" cy="140" r="3" fill="currentColor"/>
</svg>
</div>

*Proof.* Call the two angles $2x$ and $2y$, so their bisectors split them into $x, x$ and $y, y$. By Theorem 1.1,
$2x + 2y = 180°$, so $x + y = 90°$. The angle between the bisectors is made of one $x$ and one $y$ (angle addition),
so it is $90°$. $\blacksquare$

Carpenters use this without thinking: fold a straight edge of paper over at any point and crease it, then fold the
other piece back along the first fold, and the two creases are at right angles.

## 1.5 What a proof is in geometry

### Given, to prove, reasons

A theorem has two parts. The **hypothesis** says what we are allowed to assume, the **conclusion** says what we must
show. "If two angles are vertical angles, then they are equal": hypothesis "the angles are vertical", conclusion
"they are equal". A proof is a chain of statements, each one either given, or an axiom, or a definition, or an
earlier theorem, or something that follows from earlier lines by logic or algebra, ending with the conclusion.

Schools often lay this out as a **two-column proof**, with each statement next to its reason. Here is Theorem 1.2 in
that style. Let lines $AC$ and $BD$ cross at $O$.

| Statement | Reason |
| --- | --- |
| 1. $\angle AOB + \angle BOC = 180°$ | linear pair (Theorem 1.1) |
| 2. $\angle BOC + \angle COD = 180°$ | linear pair (Theorem 1.1) |
| 3. $\angle AOB + \angle BOC = \angle BOC + \angle COD$ | both equal $180°$ (lines 1, 2) |
| 4. $\angle AOB = \angle COD$ | subtract $\angle BOC$ from both sides |

Professional mathematicians write proofs as ordinary paragraphs, as in the rest of this book, but every sentence of
a paragraph proof could be expanded into rows of such a table. That is the test of a proof: each step must have a
reason someone else can check. "It looks true in the picture" is never a reason.

### Why not just measure?

Measuring gives evidence, not certainty. A protractor is accurate to perhaps half a degree, and you can only ever
measure the figures you have drawn. A proof covers every case at once.

Patterns can also lie. Put $n$ points on a circle, join every pair by a straight chord and count the pieces the
disc is cut into, choosing the points so that no three chords meet at one point inside. With 1, 2, 3, 4, 5 points you
get 1, 2, 4, 8, 16 pieces. Surely 6 points give 32? They give 31. (The correct count is
$\binom{n}{4} + \binom{n}{2} + 1$, where $\binom{n}{k}$ counts the ways to choose $k$ things from $n$; for $n = 6$
that is $15 + 15 + 1 = 31$.) Doubling looked certain and was wrong. In geometry, as in the rest of mathematics, only
a proof settles a question.

### Converse, contrapositive, counterexample

The **converse** of "if $P$ then $Q$" is "if $Q$ then $P$". A true statement can have a false converse. The converse
of Theorem 1.2 is "if two angles are equal, they are vertical angles", and that is false: two $30°$ angles in
different corners of the page are equal but not vertical. One example that breaks a statement is called a
**counterexample**, and one is enough to disprove it.

The **contrapositive** of "if $P$ then $Q$" is "if not $Q$ then not $P$", and it is always exactly as true as the
original. "If two angles are vertical, they are equal" has contrapositive "if two angles are not equal, they are not
vertical", which says the same thing in a different order.

When a statement and its converse are both true, we say "$P$ **if and only if** $Q$", written $P \iff Q$.

### Proof by contradiction

Sometimes the cleanest way to show something is true is to assume it is false and reach an impossibility. We need
one starting fact, which Euclid used without stating and Hilbert made his first axiom: **through two different points
there is exactly one line.**

**Theorem 1.6.** Two different lines meet in at most one point.

*Proof.* Suppose, for a contradiction, that two different lines $\ell$ and $m$ meet in two different points $P$ and
$Q$. Then $\ell$ and $m$ are both lines through $P$ and $Q$. But there is exactly one line through two different
points, so $\ell = m$, which contradicts "different". So the supposition was false: they meet at most once.
$\blacksquare$

### When pictures mislead

A good drawing is a guide for the reasoning, but it can quietly assume things that are not given. If you draw "a
triangle" you usually draw one that is nearly equilateral, and you may "see" facts that hold for your triangle only.
A famous false proof, which we take apart in [Chapter 2](02-Triangles-and-Congruence.md), "proves" that every
triangle is isosceles; every step is correct except that the picture puts a point inside the triangle when it is
really outside. Good habits: draw a general figure (no accidental right angles or equal sides), draw more than one
case, and ask of every step "does this use something the hypothesis did not give me?"

## 1.6 Euclid's Elements and his five postulates

Almost nothing is known about Euclid's life. He worked in Alexandria around 300 BC, and he wrote the *Elements*, a
book in thirteen parts (called "books") collecting and organising the Greek geometry and number theory of his day.
Books I to VI are plane geometry, VII to IX number theory (including the proof that there are infinitely many
primes), X the theory of incommensurable lengths, and XI to XIII solid geometry, ending with the five regular solids
(our [Chapter 11](11-Solid-Geometry.md)). Much of the content was not new: Euclid built on Eudoxus, Theaetetus and
others. What was new, or at least what survived, was the arrangement: a short list of starting points, then several
hundred propositions, each proved from the starting points and earlier propositions. The oldest surviving piece of it
is a scrap of papyrus from Oxyrhynchus in Egypt, from around AD 100, with a figure from Book II.

### Definitions, common notions, postulates

Book I opens with 23 definitions ("A point is that which has no part"; "a line is breadthless length"), then five
**common notions**, general truths about quantities, and five **postulates**, specific to geometry. In Thomas
Heath's classic English translation (1908) the common notions are:

1. Things which are equal to the same thing are also equal to one another.
2. If equals be added to equals, the wholes are equal.
3. If equals be subtracted from equals, the remainders are equal.
4. Things which coincide with one another are equal to one another.
5. The whole is greater than the part.

We used notions 1 and 3 in the proof of vertical angles. The postulates are:

1. To draw a straight line from any point to any point.
2. To produce a finite straight line continuously in a straight line.
3. To describe a circle with any centre and distance.
4. That all right angles are equal to one another.
5. That, if a straight line falling on two straight lines make the interior angles on the same side less than two
   right angles, the two straight lines, if produced indefinitely, meet on that side on which are the angles less
   than the two right angles.

Postulates 1 to 3 describe what you can do with a straightedge and a compass: join two points, extend a segment,
draw a circle with a given centre through a given point. Postulate 4 says that right angles are the same size
everywhere, so that "a right angle" is a fixed standard of measure.

Postulate 5, the **parallel postulate**, is different. It is long, and it is about what happens far away, where no
one can check. In modern words: if a line crosses two other lines and the two interior angles on one side add up to
less than $180°$, then the two lines meet on that side.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 460 190" role="img" aria-label="Euclid's fifth postulate: a line crosses two lines and the two interior angles on one side add up to less than 180 degrees; then the two lines, extended far enough, meet on that side">
  <line x1="37.5" y1="27" x2="400" y2="92" stroke="currentColor" stroke-width="1.5"/>
  <line x1="62.5" y1="164.5" x2="400" y2="92" stroke="currentColor" stroke-width="1.5"/>
  <line x1="104" y1="7" x2="136" y2="183" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 110 40 L 114.7 65.6 A 26 26 0 0 0 135.6 44.6 Z" fill="#eea66f" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="138.3" y="73.5" text-anchor="middle" font-size="15" fill="currentColor">α</text>
  <path d="M 130 150 L 155.4 144.5 A 26 26 0 0 0 125.3 124.4 Z" fill="#9cc9ea" fill-opacity="0.6" stroke="currentColor" stroke-width="1.2"/>
  <text x="152.2" y="122" text-anchor="middle" font-size="15" fill="currentColor">β</text>
  <circle cx="400" cy="92" r="3" fill="currentColor"/>
  <text x="390" y="126.5" text-anchor="middle" font-size="13" fill="currentColor">they meet here</text>
  <text x="215" y="18" text-anchor="middle" font-size="15" fill="currentColor">α + β &lt; 180°</text>
</svg>
</div>

In the drawing the angles are about $70°$ and $88°$, adding to $158°$, and the lines visibly meet. But if the sum
were $179.9999°$ they would meet very, very far away, beyond any page. Euclid himself seems to have been reluctant to
use it: he proves the first 28 propositions of Book I without it and first calls on it in Proposition 29. For two
thousand years mathematicians tried to prove it from the other four. They failed, and the reason they failed
(there are perfectly consistent geometries in which it is false) is one of the great discoveries of the 19th
century. [Chapter 3](03-Parallel-Lines-and-the-Angle-Sum.md) shows how much depends on it, and Chapters 15 to 17 tell
the rest of the story.

### The first proposition, and its gap

Proposition I.1 is: *on a given segment, construct an equilateral triangle* (one with all three sides equal).

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 270" role="img" aria-label="Euclid's first proposition: circles centred at A and B, each of radius AB, meet at C, and triangle ABC is equilateral">
  <circle cx="170" cy="160" r="100" fill="#9cc9ea" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="270" cy="160" r="100" fill="#7ccf9a" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="170,160 270,160 220,73.4" fill="#eea66f" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="170" cy="160" r="3" fill="currentColor"/>
  <text x="156" y="171.2" text-anchor="middle" font-size="15" fill="currentColor">A</text>
  <circle cx="270" cy="160" r="3" fill="currentColor"/>
  <text x="284" y="171.2" text-anchor="middle" font-size="15" fill="currentColor">B</text>
  <circle cx="220" cy="73.4" r="3" fill="currentColor"/>
  <text x="220" y="62.6" text-anchor="middle" font-size="15" fill="currentColor">C</text>
  <line x1="220" y1="154" x2="220" y2="166" stroke="currentColor" stroke-width="1.3"/>
  <line x1="189.8" y1="113.7" x2="200.2" y2="119.7" stroke="currentColor" stroke-width="1.3"/>
  <line x1="239.8" y1="119.7" x2="250.2" y2="113.7" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

*Construction and proof.* Let the segment be $AB$. Draw the circle with centre $A$ through $B$ (Postulate 3) and the
circle with centre $B$ through $A$. Let $C$ be a point where they cross, and draw $CA$ and $CB$ (Postulate 1). Since
$C$ is on the first circle, $AC = AB$ (all radii of a circle are equal, by Euclid's definition of a circle). Since $C$
is on the second circle, $BC = BA$. So $AC = AB = BC$ (Common notion 1), and triangle $ABC$ is equilateral.
$\blacksquare$

It is a lovely proof and it has a hole. *Why do the circles cross at all?* Nothing in the five postulates or the
common notions says that two circles which "obviously" overlap must share a point. It looks certain in the picture,
but the picture is not a proof. To see that it really is a gap, imagine a "plane" containing only the points whose
coordinates are rational numbers (fractions). Lines and circles through such points still make sense, and every
postulate still holds in a suitable sense, yet with $A = (0, 0)$ and $B = (1, 0)$ the crossing point would be
$C = (\tfrac{1}{2}, \tfrac{\sqrt{3}}{2})$, and $\sqrt{3}$ is not a fraction. In that world the circles pass through each
other without meeting.

Euclid made other silent assumptions too, mostly about the *order* of points: which point is between which, which
side of a line a point is on. Moritz Pasch pointed out in 1882 that statements about betweenness had to be added as
axioms, and in 1899 David Hilbert published *Grundlagen der Geometrie* (*Foundations of Geometry*), a complete list
of axioms for Euclid's geometry, including a continuity axiom that closes the circle gap. None of this showed that
Euclid's theorems were false; it showed that his starting list was incomplete. That a book could be checked so
carefully two thousand years later, and found to need only repairs, is a tribute to it.

### How this book uses axioms

Building all of geometry from Hilbert's twenty axioms is slow, and Chapter 15 shows how it is done. Part I of this
book takes a middle road, as most university geometry courses do. We take as given:

- the facts about lines and points from 1.2 (two points determine one line; every line divides the plane into two
  sides),
- the ruler and protractor postulates from 1.3 (lengths and angles can be measured, and measures add),
- the congruence postulate SAS, which [Chapter 2](02-Triangles-and-Congruence.md) states and explains,
- the parallel postulate, which [Chapter 3](03-Parallel-Lines-and-the-Angle-Sum.md) states in Playfair's form,
- and for areas, the few properties listed at the start of [Chapter 4](04-Area-and-Pythagoras.md).

Everything else we prove. When a proof uses the parallel postulate we say so, because in Part IV that will matter.

## Check yourself

??? question "1. Find the complement and the supplement of a 37° angle."

    Complement: $90° - 37° = 53°$. Supplement: $180° - 37° = 143°$. **Check:** the supplement is always $90°$ more
    than the complement, and $143 - 53 = 90$.

??? question "2. Two angles form a linear pair. One is (2x + 15)° and the other is (3x − 5)°. Find both."

    A linear pair adds to $180°$: $2x + 15 + 3x - 5 = 180$, so $5x + 10 = 180$ and $x = 34$. The angles are
    $2 \cdot 34 + 15 = 83°$ and $3 \cdot 34 - 5 = 97°$. **Check:** $83 + 97 = 180$.

??? question "3. Two lines cross. One angle is (4x − 10)° and the angle vertically opposite it is (2x + 30)°. Find all four angles."

    Vertical angles are equal: $4x - 10 = 2x + 30$, so $x = 20$, and the angle is $70°$. The other two angles are
    its supplements, $110°$ each. The four angles are $70°, 110°, 70°, 110°$.

??? question "4. What is the smaller angle between the hands of a clock at 3:40?"

    The minute hand moves $360° / 60 = 6°$ per minute, so at 40 minutes it points at $240°$ (measured clockwise from
    12). The hour hand moves $30°$ per hour and $0.5°$ per minute, so at 3:40 it points at
    $3 \cdot 30 + 40 \cdot 0.5 = 110°$. The angle between them is $240 - 110 = 130°$, which is less than $180°$, so it
    is the smaller angle.

??? question "5. Rays from a point make five adjacent angles that fill the full turn, in the ratio 1 : 2 : 3 : 4 : 5. Find them."

    The parts total $1 + 2 + 3 + 4 + 5 = 15$, and the angles total $360°$ (Theorem 1.4), so one part is $24°$. The
    angles are $24°, 48°, 72°, 96°, 120°$.

??? question "6. Prove: if two angles are both complementary to the same angle, they are equal to each other."

    Let $x + z = 90°$ and $y + z = 90°$. Then $x + z = y + z$ (both equal $90°$, Common notion 1), and subtracting
    $z$ gives $x = y$ (Common notion 3). $\blacksquare$

??? question "7. Imagine two landers on Mars on the same north-south line, 500 km apart. At the same moment the Sun's rays make angles with the vertical that differ by 8.45°. Estimate the circumference and radius of Mars."

    As with Eratosthenes, the difference in angles equals the angle at the planet's centre. The 500 km arc is
    $8.45/360$ of the circumference, so the circumference is $500 \times 360 / 8.45 \approx 21\,300$ km, and the radius
    is $21\,300 / (2\pi) \approx 3390$ km. (The real mean radius is about 3389.5 km. The numbers in this exercise
    were chosen to fit it; a real measurement would also have to allow for Mars not being a perfect sphere.)

??? question "8. Write 25.19° in degrees, minutes and seconds, and 40° 15′ 36″ as a decimal number of degrees."

    $0.19° = 0.19 \times 60' = 11.4'$, and $0.4' = 24''$, so $25.19° = 25°\,11'\,24''$. In the other direction,
    $15' = 15/60 = 0.25°$ and $36'' = 36/3600 = 0.01°$, so $40°\,15'\,36'' = 40.26°$.

??? question "9. State the converse of the linear pair theorem: 'if two angles form a linear pair, they add to 180°'. Is it true?"

    Converse: "if two angles add to $180°$, they form a linear pair". False: a $100°$ angle in one corner of the page
    and an $80°$ angle in another add to $180°$ but share no vertex. (It becomes true if we also assume the angles
    are adjacent: then their outer arms make $180°$, so they are opposite rays.)

??? question "10. Two lines cross at O. Prove that the bisectors of a pair of vertical angles lie on one straight line."

    Let the lines be $AA'$ and $BB'$, crossing at $O$, with $\angle AOB = \angle A'OB' = a$ (vertical angles). Let $OM$
    bisect $\angle AOB$ and $ON$ bisect $\angle A'OB'$. Going around from $OM$ to $ON$ through $OB$ and $OA'$:
    $\angle MOB = a/2$, $\angle BOA' = 180° - a$ (linear pair with $\angle AOB$), and $\angle A'ON = a/2$. These three
    adjacent angles add to $a/2 + 180° - a + a/2 = 180°$, so $OM$ and $ON$ are opposite rays, one straight line.
    $\blacksquare$

??? question "11. Five lines pass through one point. Show that at least one of the angles between neighbouring lines is at most 36°."

    Five lines through a point make 10 rays and so 10 adjacent angles, adding to $360°$ (Theorem 1.4). Their average
    is $36°$. If every one were larger than $36°$, the total would be larger than $360°$, which is impossible. So at
    least one is at most $36°$. (In general, $n$ lines give an angle of at most $180°/n$.)

??? question "12. On the 'rational plane' of 1.6 (only points with fraction coordinates), do the circle with centre (0, 0) through (5, 0) and the circle with centre (6, 0) through (1, 0) meet?"

    The first circle has radius 5 and the second also has radius 5. Points on both satisfy $x^2 + y^2 = 25$ and
    $(x - 6)^2 + y^2 = 25$. Subtracting, $12x - 36 = 0$, so $x = 3$, and then $y^2 = 16$, $y = \pm 4$. The crossing points
    $(3, 4)$ and $(3, -4)$ have whole-number coordinates, so these two circles do meet, even in the rational plane.
    The gap in Euclid's I.1 shows up only for some circles, like the ones through $(0,0)$ and $(1,0)$, where the
    crossing needs $\sqrt{3}$.

## What you learned

- Geometry began as measurement (fields, the Earth, the sky); Eratosthenes found the Earth's size from one angle,
  one distance and parallel sun rays.
- Point, line and plane are left undefined; their behaviour is fixed by axioms, and everything else is defined or
  proved.
- Angles measure turning; degrees, minutes and seconds come from Babylonian and Greek astronomy; angles are acute,
  right, obtuse, straight or reflex.
- Linear pairs add to $180°$, vertical angles are equal, angles around a point add to $360°$, and the bisectors of a
  linear pair are perpendicular, all proved from the protractor postulate.
- A proof is a chain of justified steps from the hypothesis to the conclusion; a converse can fail; one
  counterexample disproves a claim; pictures and patterns are evidence, not proof.
- Euclid's *Elements* built geometry on definitions, five common notions and five postulates; the fifth, about
  parallels, is the one that later turned out to be optional, and Hilbert's axioms (1899) filled Euclid's gaps.

**Next:** [Chapter 2](02-Triangles-and-Congruence.md), triangles: when two triangles are exactly the same shape and
size, and the first real theorems this makes possible.

## Further reading

- Euclid, *The Thirteen Books of the Elements*, translated with commentary by Thomas L. Heath, 1908 (Dover reprint,
  3 volumes). The commentary on Book I discusses every definition and postulate in this chapter.
- Robin Hartshorne, *Geometry: Euclid and Beyond*, Springer, 2000. Reads Euclid carefully alongside Hilbert's axioms;
  the best book for where this chapter is heading.
- George D. Birkhoff, "A set of postulates for plane geometry, based on scale and protractor", *Annals of
  Mathematics* 33, 1932.
- David Hilbert, *Foundations of Geometry* (*Grundlagen der Geometrie*, 1899; English translation by E. J. Townsend,
  1902).
- Harold R. Jacobs, *Geometry: Seeing, Doing, Understanding*, 3rd edition, W. H. Freeman, 2003. A friendly school
  course with many exercises.
- Victor J. Katz, *A History of Mathematics: An Introduction*, 3rd edition, 2009, for Babylonian, Egyptian and Greek
  geometry.
- On this site: the Topics geometry track, starting at [Level 3](../../topics/geometry/level-3/index.md) and
  [Level 4](../../topics/geometry/level-4/index.md); for proof and logic in general, the U of T guide
  [MAT158H1 Unit 1: Logic, Sets & Proof](../../uoft/MAT158H1/unit01.md); and the Algebra book's
  [Chapter 1](../algebra/01-The-Language-of-Algebra.md), which proves facts "for every number" in the same spirit.
