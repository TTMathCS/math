# 16. Spherical geometry

*A plane flying from London to New York does not follow the line you would draw on a flat map. It heads west-north-west,
climbs to nearly $54^\circ$ north over the Atlantic, although both cities lie south of that, and comes down towards New
York from the north-east; and that route is shorter. The Earth is (nearly) a sphere, and on a sphere the "straight lines" are great circles. This chapter builds
geometry on the sphere: its lines, its triangles (whose angles add up to more than $180^\circ$, by an amount that
measures their area), its trigonometry, the navigation formulas used for ships, aircraft and rovers on Mars, and the
reason no flat map of the Earth can be perfect. It ends with elliptic geometry, the sphere with opposite points
glued together, a geometry with no parallel lines at all.*

!!! abstract "In this chapter"
    **You will learn:**

    - why great circles are the lines of the sphere, and how to measure distance along them
    - lunes and Girard's theorem: a spherical triangle's area is its angle excess times $R^2$ (with proof)
    - the spherical law of cosines and law of sines (with proofs), and the haversine formula
    - how to compute great-circle distances and bearings on Earth ($R = 6371$ km) and Mars ($R = 3389.5$ km)
    - why no flat map can keep all distances, and what Mercator, stereographic and equal-area maps each keep
    - elliptic geometry, where any two lines meet in exactly one point

    **You need:** [Chapter 7](07-Trigonometry.md) (sine, cosine, radians, the law of cosines),
    [Chapter 9](09-Vectors.md) (dot and cross products), [Chapter 11](11-Solid-Geometry.md) (the area of the sphere)
    and [Chapter 15](15-Axioms-and-the-Parallel-Postulate.md) (neutral geometry, models). A gentler start:
    [Geometry on a sphere](../../topics/geometry/level-8/06-sphere-geometry.md).

    **Levels:** 16.1 and 16.2 are intermediate; 16.3 and 16.4 are advanced but computational; 16.5 is advanced; 16.6
    is advanced to expert.

## 16.1 Great circles as lines

*Level: intermediate.* Take a sphere of radius $R$ with centre $O$. A plane through $O$ cuts it in a **great circle**,
of radius $R$, the largest circle the sphere contains: the equator and the meridians (lines of longitude) are great
circles. A plane that misses $O$ cuts a **small circle**: the circles of latitude other than the equator are small
circles.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 324.0 318.0" role="img" aria-label="A sphere with its equator, a tilted great circle whose centre is the centre O of the sphere, and a small circle of latitude 50 degrees north whose centre is not O. Only great circles are the lines of spherical geometry">
  <circle cx="162.0" cy="162.0" r="120.0" fill="#9cc9ea" fill-opacity="0.2" stroke="currentColor" stroke-width="1.6"/>
  <polyline points="111.3,202.7 115.1,203.4 119.0,204.0 122.9,204.5 126.9,205.0 130.9,205.4 135.0,205.8 139.1,206.1 143.2,206.4 147.4,206.6 151.5,206.8 155.7,206.9 159.9,206.9 164.1,206.9 168.3,206.9 172.5,206.8 176.6,206.6 180.8,206.4 184.9,206.1 189.0,205.8 193.1,205.4 197.1,205.0 201.1,204.5 205.0,204.0 208.9,203.4 212.7,202.7 216.5,202.1 220.2,201.3 223.8,200.5 227.4,199.7 230.8,198.8 234.2,197.9 237.5,196.9 240.7,195.9 243.8,194.9 246.9,193.8 249.8,192.7 252.6,191.5 255.3,190.3 257.8,189.1 260.3,187.8 262.6,186.5 264.9,185.2 267.0,183.8 268.9,182.4 270.8,181.0 272.5,179.6 274.0,178.1 275.5,176.6 276.8,175.1 277.9,173.6 278.9,172.1 279.8,170.6 280.5,169.0 281.1,167.5 281.5,165.9 281.8,164.4 282.0,162.8 282.0,161.2" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  <polyline points="282.0,161.2 281.8,159.6 281.5,158.1 281.1,156.5 280.5,155.0 279.8,153.4 278.9,151.9 277.9,150.4 276.8,148.9 275.5,147.4 274.0,145.9 272.5,144.4 270.8,143.0 268.9,141.6 267.0,140.2 264.9,138.8 262.6,137.5 260.3,136.2 257.8,134.9 255.3,133.7 252.6,132.5 249.8,131.3 246.9,130.2 243.8,129.1 240.7,128.1 237.5,127.1 234.2,126.1 230.8,125.2 227.4,124.3 223.8,123.5 220.2,122.7 216.5,121.9 212.7,121.3 208.9,120.6 205.0,120.0 201.1,119.5 197.1,119.0 193.1,118.6 189.0,118.2 184.9,117.9 180.8,117.6 176.6,117.4 172.5,117.2 168.3,117.1 164.1,117.1 159.9,117.1 155.7,117.1 151.5,117.2 147.4,117.4 143.2,117.6 139.1,117.9 135.0,118.2 130.9,118.6 126.9,119.0 122.9,119.5 119.0,120.0 115.1,120.6 111.3,121.3 107.5,121.9 103.8,122.7 100.2,123.5 96.6,124.3 93.2,125.2 89.8,126.1 86.5,127.1 83.3,128.1 80.2,129.1 77.1,130.2 74.2,131.3 71.4,132.5 68.7,133.7 66.2,134.9 63.7,136.2 61.4,137.5 59.1,138.8 57.0,140.2 55.1,141.6 53.2,143.0 51.5,144.4 50.0,145.9 48.5,147.4 47.2,148.9 46.1,150.4 45.1,151.9 44.2,153.4 43.5,155.0 42.9,156.5 42.5,158.1 42.2,159.6 42.0,161.2 42.0,162.8" fill="none" stroke="currentColor" stroke-width="0.9" stroke-dasharray="3 3" stroke-linejoin="round"/>
  <polyline points="42.0,162.8 42.2,164.4 42.5,165.9 42.9,167.5 43.5,169.0 44.2,170.6 45.1,172.1 46.1,173.6 47.2,175.1 48.5,176.6 50.0,178.1 51.5,179.6 53.2,181.0 55.1,182.4 57.0,183.8 59.1,185.2 61.4,186.5 63.7,187.8 66.2,189.1 68.7,190.3 71.4,191.5 74.2,192.7 77.1,193.8 80.2,194.9 83.3,195.9 86.5,196.9 89.8,197.9 93.2,198.8 96.6,199.7 100.2,200.5 103.8,201.3 107.5,202.1 111.3,202.7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  <polyline points="129.4,103.0 131.9,103.4 134.4,103.7 136.9,104.1 139.4,104.4 142.0,104.7 144.6,104.9 147.3,105.1 149.9,105.3 152.6,105.4 155.3,105.6 158.0,105.6 160.7,105.7 163.3,105.7 166.0,105.6 168.7,105.6 171.4,105.4 174.1,105.3 176.7,105.1 179.4,104.9 182.0,104.7 184.6,104.4 187.1,104.1 189.6,103.7 192.1,103.4 194.6,103.0 197.0,102.5 199.4,102.0 201.7,101.5 204.0,101.0 206.2,100.4 208.4,99.8 210.5,99.2 212.6,98.6 214.6,97.9 216.5,97.2 218.4,96.5 220.2,95.7 221.9,95.0 223.6,94.2 225.2,93.3 226.7,92.5 228.1,91.7 229.5,90.8 230.7,89.9 231.9,89.0 233.0,88.1 234.0,87.1 234.9,86.2 235.8,85.2 236.5,84.2 237.2,83.3 237.7,82.3 238.2,81.3 238.6,80.3 238.8,79.3 239.0,78.3 239.1,77.3 239.1,76.3 239.0,75.3 238.8,74.2 238.6,73.2 238.2,72.2 237.7,71.3 237.2,70.3 236.5,69.3 235.8,68.3 234.9,67.4 234.0,66.4 233.0,65.5 231.9,64.6 230.7,63.7 229.5,62.8" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  <polyline points="229.5,62.8 228.1,61.9 226.7,61.0 225.2,60.2 223.6,59.4 221.9,58.6 220.2,57.8 218.4,57.1 216.5,56.3 214.6,55.6 212.6,55.0 210.5,54.3 208.4,53.7 206.2,53.1 204.0,52.5 201.7,52.0 199.4,51.5 197.0,51.0 194.6,50.6 192.1,50.2 189.6,49.8 187.1,49.4 184.6,49.1 182.0,48.9 179.4,48.6 176.7,48.4 174.1,48.2 171.4,48.1 168.7,48.0 166.0,47.9 163.3,47.9 160.7,47.9 158.0,47.9 155.3,48.0 152.6,48.1 149.9,48.2 147.3,48.4 144.6,48.6 142.0,48.9 139.4,49.1 136.9,49.4 134.4,49.8 131.9,50.2 129.4,50.6 127.0,51.0 124.6,51.5 122.3,52.0 120.0,52.5 117.8,53.1 115.6,53.7 113.5,54.3 111.4,55.0 109.4,55.6 107.5,56.3 105.6,57.1 103.8,57.8 102.1,58.6 100.4,59.4 98.8,60.2 97.3,61.0 95.9,61.9 94.5,62.8 93.3,63.7" fill="none" stroke="currentColor" stroke-width="0.9" stroke-dasharray="3 3" stroke-linejoin="round"/>
  <polyline points="93.3,63.7 92.1,64.6 91.0,65.5 90.0,66.4 89.1,67.4 88.2,68.3 87.5,69.3 86.8,70.3 86.3,71.3 85.8,72.2 85.4,73.2 85.2,74.2 85.0,75.3 84.9,76.3 84.9,77.3 85.0,78.3 85.2,79.3 85.4,80.3 85.8,81.3 86.3,82.3 86.8,83.3 87.5,84.2 88.2,85.2 89.1,86.2 90.0,87.1 91.0,88.1 92.1,89.0 93.3,89.9 94.5,90.8 95.9,91.7 97.3,92.5 98.8,93.3 100.4,94.2 102.1,95.0 103.8,95.7 105.6,96.5 107.5,97.2 109.4,97.9 111.4,98.6 113.5,99.2 115.6,99.8 117.8,100.4 120.0,101.0 122.3,101.5 124.6,102.0 127.0,102.5 129.4,103.0" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  <polyline points="248.6,244.5 249.3,244.0 250.1,243.4 250.7,242.8 251.3,242.1" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/>
  <polyline points="251.3,242.1 251.9,241.4 252.3,240.6 252.8,239.8 253.1,238.9 253.4,237.9 253.6,236.9 253.8,235.9 253.9,234.8 253.9,233.6 253.9,232.4 253.8,231.2 253.7,229.9 253.4,228.6 253.2,227.2 252.8,225.8 252.4,224.3 252.0,222.8 251.4,221.2 250.9,219.6 250.2,218.0 249.5,216.3 248.7,214.6 247.9,212.8 247.0,211.1 246.1,209.2 245.1,207.4 244.0,205.5 242.9,203.6 241.7,201.7 240.5,199.7 239.2,197.7 237.9,195.7 236.5,193.7 235.1,191.6 233.6,189.5 232.1,187.4 230.5,185.3 228.9,183.2 227.2,181.0 225.5,178.8 223.7,176.7 221.9,174.5 220.0,172.3 218.2,170.1 216.2,167.9 214.3,165.7 212.3,163.5 210.2,161.3 208.2,159.1 206.1,156.9 204.0,154.6 201.8,152.4 199.6,150.3 197.4,148.1 195.2,145.9 192.9,143.7 190.6,141.6 188.4,139.4 186.0,137.3 183.7,135.2 181.4,133.1 179.0,131.0 176.6,129.0 174.2,127.0 171.9,125.0 169.5,123.0 167.1,121.1 164.7,119.1 162.3,117.2 159.8,115.4 157.4,113.6 155.0,111.8 152.6,110.0 150.3,108.3 147.9,106.6 145.5,104.9 143.1,103.3 140.8,101.8 138.5,100.2 136.1,98.7 133.8,97.3 131.6,95.9 129.3,94.5 127.1,93.2 124.8,92.0 122.7,90.8 120.5,89.6 118.4,88.5 116.3,87.4 114.2,86.4 112.1,85.4 110.1,84.5 108.2,83.7 106.2,82.9 104.3,82.1 102.5,81.4 100.7,80.8 98.9,80.2 97.2,79.7 95.5,79.2 93.9,78.8 92.3,78.5 90.7,78.2 89.2,77.9 87.8,77.7 86.4,77.6 85.0,77.5 83.8,77.5 82.5,77.6 81.3,77.7 80.2,77.8 79.1,78.1 78.1,78.3 77.2,78.7 76.3,79.1 75.4,79.5 74.7,80.0 73.9,80.6 73.3,81.2 72.7,81.9" fill="none" stroke="currentColor" stroke-width="0.9" stroke-dasharray="3 3" stroke-linejoin="round"/>
  <polyline points="72.7,81.9 72.1,82.6 71.7,83.4 71.2,84.2 70.9,85.1 70.6,86.1 70.4,87.1 70.2,88.1 70.1,89.2 70.1,90.4 70.1,91.6 70.2,92.8 70.3,94.1 70.6,95.4 70.8,96.8 71.2,98.2 71.6,99.7 72.0,101.2 72.6,102.8 73.1,104.4 73.8,106.0 74.5,107.7 75.3,109.4 76.1,111.2 77.0,112.9 77.9,114.8 78.9,116.6 80.0,118.5 81.1,120.4 82.3,122.3 83.5,124.3 84.8,126.3 86.1,128.3 87.5,130.3 88.9,132.4 90.4,134.5 91.9,136.6 93.5,138.7 95.1,140.8 96.8,143.0 98.5,145.2 100.3,147.3 102.1,149.5 104.0,151.7 105.8,153.9 107.8,156.1 109.7,158.3 111.7,160.5 113.8,162.7 115.8,164.9 117.9,167.1 120.0,169.4 122.2,171.6 124.4,173.7 126.6,175.9 128.8,178.1 131.1,180.3 133.4,182.4 135.6,184.6 138.0,186.7 140.3,188.8 142.6,190.9 145.0,193.0 147.4,195.0 149.8,197.0 152.1,199.0 154.5,201.0 156.9,202.9 159.3,204.9 161.7,206.8 164.2,208.6 166.6,210.4 169.0,212.2 171.4,214.0 173.7,215.7 176.1,217.4 178.5,219.1 180.9,220.7 183.2,222.2 185.5,223.8 187.9,225.3 190.2,226.7 192.4,228.1 194.7,229.5 196.9,230.8 199.2,232.0 201.3,233.2 203.5,234.4 205.6,235.5 207.7,236.6 209.8,237.6 211.9,238.6 213.9,239.5 215.8,240.3 217.8,241.1 219.7,241.9 221.5,242.6 223.3,243.2 225.1,243.8 226.8,244.3 228.5,244.8 230.1,245.2 231.7,245.5 233.3,245.8 234.8,246.1 236.2,246.3 237.6,246.4 239.0,246.5 240.2,246.5 241.5,246.4 242.7,246.3 243.8,246.2 244.9,245.9 245.9,245.7 246.8,245.3 247.7,244.9 248.6,244.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/>
  <circle cx="162.0" cy="162.0" r="3" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="172.0" y="166.0" font-size="12" text-anchor="middle" fill="currentColor">O</text>
  <circle cx="162.0" cy="50.7" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="162.0" y="42.7" font-size="12" text-anchor="middle" fill="currentColor">N</text>
  <circle cx="162.0" cy="76.8" r="2.5" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <line x1="162.0" y1="162.0" x2="162.0" y2="76.8" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 2"/>
  <text x="235.1" y="68.8" font-size="11" text-anchor="end" fill="currentColor">small circle</text>
  <text x="278.0" y="176.0" font-size="11" text-anchor="end" fill="currentColor">equator</text>
</svg>
</div>

**Why great circles are the "lines".** Three reasons, which turn out to be one:

1. **Shortest paths.** The shortest path on the sphere between two points is the shorter arc of the great circle
   through them. (We prove the key step, the triangle inequality, in 16.3.) A taut string stretched between two points
   on a globe lies along a great circle.
2. **Straightest paths.** Walk on the sphere without turning left or right: you trace a great circle. A small circle
   curves towards its own centre, as you can feel by walking around a circle of latitude near a pole.
3. **Symmetry.** Reflection in the plane of a great circle maps the sphere to itself and fixes the great circle, just
   as reflection in a line fixes the line in the plane.

**Distance.** Points on the sphere are vectors of length $R$ from $O$. The angle $\theta$ between the vectors $\mathbf{u}$
and $\mathbf{v}$ (in radians) is given by the dot product, $\cos\theta = \mathbf{u} \cdot \mathbf{v}/R^2$, and the arc of
the great circle between them has length

$$
d = R\,\theta .
$$

On the unit sphere ($R = 1$) distance simply **is** the central angle, and we will often measure sides in degrees or
radians.

**Latitude and longitude.** The point at latitude $\varphi$ and longitude $\lambda$ is

$$
(R\cos\varphi\cos\lambda, \ R\cos\varphi\sin\lambda, \ R\sin\varphi) .
$$

**Example.** Quito (very nearly on the equator, longitude about $78.5^\circ$ W) and Singapore (latitude about
$1.3^\circ$ N, longitude about $103.8^\circ$ E). Treating both as on the equator, they are $78.5 + 103.8 = 182.3^\circ$ apart
going east, so $177.7^\circ$ going west: nearly antipodal. The distance is about $R \cdot 177.7^\circ \cdot \pi/180
= 6371 \times 3.101 \approx 19\,760$ km, close to half the equator, $20\,015$ km.

**How lines behave.**

- Two points that are not **antipodal** (opposite ends of a diameter) lie on exactly one great circle: the plane
  through them and $O$ is unique. Two antipodal points, like the poles, lie on infinitely many.
- Any two great circles meet, in exactly **two** antipodal points: their planes both pass through $O$, so they meet in a
  line through $O$, which pierces the sphere twice. **There are no parallel lines.**
- Lines are finite, with length $2\pi R$, and closed.

So the sphere breaks Euclid's postulates 1 and 2 and the parallel postulate, and also the exterior angle theorem of
[Chapter 15](15-Axioms-and-the-Parallel-Postulate.md). It is not a model of neutral geometry. It is a geometry in its own
right, and a very old one: astronomers used spherical geometry for the sky long before anyone thought of
non-Euclidean geometry.

## 16.2 Spherical triangles and angle excess

*Level: intermediate.* Three points on the sphere, joined by the shorter great-circle arcs, make a **spherical
triangle**. Its **angles** are the angles between the arcs at the corners, which are the angles between the planes of
the great circles (measured between their tangent lines at the corner).

**A surprising triangle.** Start at the North Pole, walk down the meridian of longitude $0^\circ$ to the equator, turn
left, walk a quarter of the way around the equator to longitude $90^\circ$ E, turn left again and walk back up to the
pole. Every turn was a right angle, and the triangle you walked around has **three right angles**: its angle sum is
$270^\circ$. It covers exactly one-eighth of the sphere, one octant.

### Lunes

Two great circles through the poles, meeting at angle $\alpha$, cut the sphere into four **lunes** (crescent shapes;
the name is from *luna*, the Moon). Each lune runs from pole to pole.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 559.5 281.2" role="img" aria-label="Left: a lune, the region between two great circles through the poles meeting at angle alpha; its area is 2 alpha R squared. Right: the triangle with three right angles that covers one eighth of the sphere">
  <circle cx="143.2" cy="143.2" r="105.0" fill="#9cc9ea" fill-opacity="0.15" stroke="currentColor" stroke-width="1.6"/>
  <polyline points="98.9,178.9 102.2,179.5 105.6,180.0 109.1,180.4 112.6,180.9 116.1,181.2 119.6,181.6 123.2,181.9 126.8,182.1 130.5,182.3 134.1,182.4 137.8,182.5 141.4,182.6 145.1,182.6 148.7,182.5 152.4,182.4 156.0,182.3 159.7,182.1 163.3,181.9 166.9,181.6 170.4,181.2 173.9,180.9 177.4,180.4 180.9,180.0 184.3,179.5 187.6,178.9 190.9,178.3 194.2,177.7 197.3,177.0 200.4,176.2 203.5,175.5 206.4,174.7 209.3,173.8 212.1,172.9 214.9,172.0 217.5,171.1 220.0,170.1 222.5,169.1 224.9,168.0 227.1,166.9 229.3,165.8 231.3,164.7 233.3,163.5 235.1,162.3 236.8,161.1 238.4,159.9 239.9,158.6 241.3,157.3 242.5,156.1 243.7,154.8 244.7,153.4 245.6,152.1 246.3,150.8 247.0,149.4 247.5,148.0 247.9,146.7 248.1,145.3 248.2,143.9 248.2,142.6" fill="none" stroke="currentColor" stroke-width="0.9" stroke-linejoin="round"/>
  <polyline points="248.2,142.6 248.1,141.2 247.9,139.8 247.5,138.5 247.0,137.1 246.3,135.7 245.6,134.4 244.7,133.1 243.7,131.7 242.5,130.4 241.3,129.2 239.9,127.9 238.4,126.6 236.8,125.4 235.1,124.2 233.3,123.0 231.3,121.8 229.3,120.7 227.1,119.6 224.9,118.5 222.5,117.4 220.0,116.4 217.5,115.4 214.9,114.5 212.1,113.6 209.3,112.7 206.4,111.8 203.5,111.0 200.4,110.3 197.3,109.5 194.2,108.8 190.9,108.2 187.6,107.6 184.3,107.0 180.9,106.5 177.4,106.1 173.9,105.6 170.4,105.3 166.9,104.9 163.3,104.6 159.7,104.4 156.0,104.2 152.4,104.1 148.7,104.0 145.1,103.9 141.4,103.9 137.8,104.0 134.1,104.1 130.5,104.2 126.8,104.4 123.2,104.6 119.6,104.9 116.1,105.3 112.6,105.6 109.1,106.1 105.6,106.5 102.2,107.0 98.9,107.6 95.6,108.2 92.3,108.8 89.2,109.5 86.1,110.3 83.0,111.0 80.1,111.8 77.2,112.7 74.4,113.6 71.6,114.5 69.0,115.4 66.5,116.4 64.0,117.4 61.6,118.5 59.4,119.6 57.2,120.7 55.2,121.8 53.2,123.0 51.4,124.2 49.7,125.4 48.1,126.6 46.6,127.9 45.2,129.2 44.0,130.4 42.8,131.7 41.8,133.1 40.9,134.4 40.2,135.7 39.5,137.1 39.0,138.5 38.6,139.8 38.4,141.2 38.3,142.6 38.3,143.9" fill="none" stroke="currentColor" stroke-width="0.9" stroke-dasharray="3 3" stroke-linejoin="round"/>
  <polyline points="38.3,143.9 38.4,145.3 38.6,146.7 39.0,148.0 39.5,149.4 40.2,150.8 40.9,152.1 41.8,153.4 42.8,154.8 44.0,156.1 45.2,157.3 46.6,158.6 48.1,159.9 49.7,161.1 51.4,162.3 53.2,163.5 55.2,164.7 57.2,165.8 59.4,166.9 61.6,168.0 64.0,169.1 66.5,170.1 69.0,171.1 71.6,172.0 74.4,172.9 77.2,173.8 80.1,174.7 83.0,175.5 86.1,176.2 89.2,177.0 92.3,177.7 95.6,178.3 98.9,178.9" fill="none" stroke="currentColor" stroke-width="0.9" stroke-linejoin="round"/>
  <circle cx="416.2" cy="143.2" r="105.0" fill="#9cc9ea" fill-opacity="0.15" stroke="currentColor" stroke-width="1.6"/>
  <polyline points="371.9,178.9 375.2,179.5 378.6,180.0 382.1,180.4 385.6,180.9 389.1,181.2 392.6,181.6 396.2,181.9 399.8,182.1 403.5,182.3 407.1,182.4 410.8,182.5 414.4,182.6 418.1,182.6 421.7,182.5 425.4,182.4 429.0,182.3 432.7,182.1 436.3,181.9 439.9,181.6 443.4,181.2 446.9,180.9 450.4,180.4 453.9,180.0 457.3,179.5 460.6,178.9 463.9,178.3 467.2,177.7 470.3,177.0 473.4,176.2 476.5,175.5 479.4,174.7 482.3,173.8 485.1,172.9 487.9,172.0 490.5,171.1 493.0,170.1 495.5,169.1 497.9,168.0 500.1,166.9 502.3,165.8 504.3,164.7 506.3,163.5 508.1,162.3 509.8,161.1 511.4,159.9 512.9,158.6 514.3,157.3 515.5,156.1 516.7,154.8 517.7,153.4 518.6,152.1 519.3,150.8 520.0,149.4 520.5,148.0 520.9,146.7 521.1,145.3 521.2,143.9 521.2,142.6" fill="none" stroke="currentColor" stroke-width="0.9" stroke-linejoin="round"/>
  <polyline points="521.2,142.6 521.1,141.2 520.9,139.8 520.5,138.5 520.0,137.1 519.3,135.7 518.6,134.4 517.7,133.1 516.7,131.7 515.5,130.4 514.3,129.2 512.9,127.9 511.4,126.6 509.8,125.4 508.1,124.2 506.3,123.0 504.3,121.8 502.3,120.7 500.1,119.6 497.9,118.5 495.5,117.4 493.0,116.4 490.5,115.4 487.9,114.5 485.1,113.6 482.3,112.7 479.4,111.8 476.5,111.0 473.4,110.3 470.3,109.5 467.2,108.8 463.9,108.2 460.6,107.6 457.3,107.0 453.9,106.5 450.4,106.1 446.9,105.6 443.4,105.3 439.9,104.9 436.3,104.6 432.7,104.4 429.0,104.2 425.4,104.1 421.7,104.0 418.1,103.9 414.4,103.9 410.8,104.0 407.1,104.1 403.5,104.2 399.8,104.4 396.2,104.6 392.6,104.9 389.1,105.3 385.6,105.6 382.1,106.1 378.6,106.5 375.2,107.0 371.9,107.6 368.6,108.2 365.3,108.8 362.2,109.5 359.1,110.3 356.0,111.0 353.1,111.8 350.2,112.7 347.4,113.6 344.6,114.5 342.0,115.4 339.5,116.4 337.0,117.4 334.6,118.5 332.4,119.6 330.2,120.7 328.2,121.8 326.2,123.0 324.4,124.2 322.7,125.4 321.1,126.6 319.6,127.9 318.2,129.2 317.0,130.4 315.8,131.7 314.8,133.1 313.9,134.4 313.2,135.7 312.5,137.1 312.0,138.5 311.6,139.8 311.4,141.2 311.3,142.6 311.3,143.9" fill="none" stroke="currentColor" stroke-width="0.9" stroke-dasharray="3 3" stroke-linejoin="round"/>
  <polyline points="311.3,143.9 311.4,145.3 311.6,146.7 312.0,148.0 312.5,149.4 313.2,150.8 313.9,152.1 314.8,153.4 315.8,154.8 317.0,156.1 318.2,157.3 319.6,158.6 321.1,159.9 322.7,161.1 324.4,162.3 326.2,163.5 328.2,164.7 330.2,165.8 332.4,166.9 334.6,168.0 337.0,169.1 339.5,170.1 342.0,171.1 344.6,172.0 347.4,172.9 350.2,173.8 353.1,174.7 356.0,175.5 359.1,176.2 362.2,177.0 365.3,177.7 368.6,178.3 371.9,178.9" fill="none" stroke="currentColor" stroke-width="0.9" stroke-linejoin="round"/>
  <polygon points="143.2,240.6 141.7,241.8 140.2,242.9 138.6,243.8 137.1,244.6 135.5,245.3 134.0,245.9 132.5,246.3 131.0,246.7 129.5,246.9 128.1,246.9 126.6,246.9 125.2,246.7 123.8,246.4 122.4,245.9 121.1,245.4 119.7,244.7 118.4,243.9 117.2,243.0 115.9,241.9 114.7,240.7 113.6,239.5 112.4,238.0 111.3,236.5 110.3,234.9 109.3,233.1 108.3,231.3 107.3,229.3 106.5,227.2 105.6,225.1 104.8,222.8 104.1,220.4 103.4,218.0 102.7,215.4 102.1,212.8 101.6,210.0 101.0,207.2 100.6,204.4 100.2,201.4 99.8,198.4 99.5,195.3 99.3,192.1 99.1,188.9 99.0,185.6 98.9,182.3 98.9,178.9 98.9,175.5 99.0,172.0 99.1,168.5 99.3,165.0 99.5,161.5 99.8,157.9 100.2,154.3 100.6,150.7 101.0,147.1 101.6,143.5 102.1,139.8 102.7,136.2 103.4,132.6 104.1,129.0 104.8,125.4 105.6,121.9 106.5,118.4 107.3,114.9 108.3,111.4 109.3,108.0 110.3,104.6 111.3,101.3 112.4,98.0 113.6,94.8 114.7,91.6 115.9,88.5 117.2,85.4 118.4,82.5 119.7,79.6 121.1,76.8 122.4,74.0 123.8,71.4 125.2,68.8 126.6,66.3 128.1,64.0 129.5,61.7 131.0,59.5 132.5,57.4 134.0,55.4 135.5,53.6 137.1,51.8 138.6,50.2 140.2,48.6 141.7,47.2 143.2,45.9 143.2,45.9 145.1,47.1 146.9,48.5 148.7,50.0 150.6,51.6 152.4,53.3 154.2,55.1 156.0,57.0 157.7,59.1 159.5,61.2 161.2,63.4 162.9,65.7 164.6,68.2 166.3,70.7 167.9,73.3 169.5,76.0 171.1,78.7 172.6,81.6 174.1,84.5 175.6,87.5 177.0,90.6 178.4,93.7 179.7,96.9 181.0,100.1 182.3,103.4 183.5,106.8 184.6,110.2 185.7,113.6 186.8,117.1 187.8,120.5 188.7,124.1 189.6,127.6 190.4,131.2 191.2,134.8 191.9,138.4 192.6,142.0 193.2,145.6 193.7,149.2 194.2,152.7 194.6,156.3 195.0,159.9 195.2,163.4 195.5,167.0 195.6,170.4 195.7,173.9 195.8,177.3 195.7,180.7 195.6,184.0 195.5,187.3 195.2,190.5 195.0,193.7 194.6,196.8 194.2,199.9 193.7,202.8 193.2,205.7 192.6,208.6 191.9,211.3 191.2,214.0 190.4,216.5 189.6,219.0 188.7,221.4 187.8,223.7 186.8,225.9 185.7,228.0 184.6,230.0 183.5,231.9 182.3,233.7 181.0,235.4 179.7,236.9 178.4,238.4 177.0,239.7 175.6,240.9 174.1,242.0 172.6,243.0 171.1,243.9 169.5,244.6 167.9,245.2 166.3,245.7 164.6,246.0 162.9,246.3 161.2,246.4 159.5,246.4 157.7,246.2 156.0,246.0 154.2,245.6 152.4,245.0 150.6,244.4 148.7,243.6 146.9,242.7 145.1,241.7 143.2,240.6" fill="#eea66f" fill-opacity="0.5" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  <circle cx="143.2" cy="45.9" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="143.2" y="37.9" font-size="12" text-anchor="middle" fill="currentColor">N</text>
  <circle cx="143.2" cy="240.6" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="143.2" y="256.6" font-size="12" text-anchor="middle" fill="currentColor">S</text>
  <polyline points="128.1,64.0 129.7,64.2 131.3,64.4 132.9,64.6 134.6,64.8 136.2,65.0 137.9,65.1 139.7,65.2 141.4,65.2 143.1,65.2 144.8,65.2 146.5,65.2 148.2,65.1 149.9,65.0 151.6,64.8 153.3,64.7 154.9,64.5 156.6,64.3 158.1,64.0 159.7,63.7 161.2,63.4" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <text x="145.7" y="85.5" font-size="14" text-anchor="middle" fill="currentColor">α</text>
  <polygon points="371.9,178.9 375.2,179.5 378.6,180.0 382.1,180.4 385.6,180.9 389.1,181.2 392.6,181.6 396.2,181.9 399.8,182.1 403.5,182.3 407.1,182.4 410.8,182.5 414.4,182.6 418.1,182.6 421.7,182.5 425.4,182.4 429.0,182.3 432.7,182.1 436.3,181.9 439.9,181.6 443.4,181.2 446.9,180.9 450.4,180.4 453.9,180.0 457.3,179.5 460.6,178.9 463.9,178.3 467.2,177.7 470.3,177.0 473.4,176.2 476.5,175.5 479.4,174.7 482.3,173.8 485.1,172.9 487.9,172.0 490.5,171.1 493.0,170.1 495.5,169.1 497.9,168.0 500.1,166.9 502.3,165.8 504.3,164.7 506.3,163.5 508.1,162.3 509.8,161.1 511.4,159.9 511.4,159.9 511.4,156.5 511.2,153.0 510.9,149.6 510.5,146.2 510.0,142.7 509.3,139.3 508.6,135.8 507.7,132.4 506.8,129.0 505.7,125.6 504.5,122.2 503.2,118.8 501.8,115.5 500.3,112.2 498.7,109.0 497.0,105.8 495.1,102.6 493.2,99.5 491.2,96.4 489.1,93.4 487.0,90.5 484.7,87.6 482.4,84.8 479.9,82.0 477.4,79.4 474.8,76.8 472.2,74.3 469.5,71.8 466.7,69.5 463.8,67.3 460.9,65.1 458.0,63.0 455.0,61.1 451.9,59.2 448.8,57.5 445.7,55.8 442.5,54.2 439.3,52.8 436.0,51.5 432.8,50.3 429.5,49.2 426.2,48.2 422.9,47.3 419.6,46.5 416.2,45.9 416.2,45.9 414.7,47.2 413.2,48.6 411.6,50.2 410.1,51.8 408.5,53.6 407.0,55.4 405.5,57.4 404.0,59.5 402.5,61.7 401.1,64.0 399.6,66.3 398.2,68.8 396.8,71.4 395.4,74.0 394.1,76.8 392.7,79.6 391.4,82.5 390.2,85.4 388.9,88.5 387.7,91.6 386.6,94.8 385.4,98.0 384.3,101.3 383.3,104.6 382.3,108.0 381.3,111.4 380.3,114.9 379.5,118.4 378.6,121.9 377.8,125.4 377.1,129.0 376.4,132.6 375.7,136.2 375.1,139.8 374.6,143.5 374.0,147.1 373.6,150.7 373.2,154.3 372.8,157.9 372.5,161.5 372.3,165.0 372.1,168.5 372.0,172.0 371.9,175.5 371.9,178.9" fill="#7ccf9a" fill-opacity="0.5" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  <circle cx="371.9" cy="178.9" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="367.9" y="194.9" font-size="12" text-anchor="middle" fill="currentColor">A</text>
  <circle cx="511.4" cy="159.9" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="521.4" y="173.9" font-size="12" text-anchor="middle" fill="currentColor">B</text>
  <circle cx="416.2" cy="45.9" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="416.2" y="37.9" font-size="12" text-anchor="middle" fill="currentColor">C</text>
  <text x="443.8" y="113.0" font-size="11" text-anchor="middle" fill="currentColor">90°+90°+90°</text>
</svg>
</div>

**Lemma 16.1.** A lune of angle $\alpha$ (in radians) on a sphere of radius $R$ has area $2\alpha R^2$.

*Proof.* The area of a lune is proportional to its angle: rotating about the polar axis carries lunes of equal angle
onto each other, and $n$ lunes of angle $2\pi/n$ fill the sphere, so (by the usual argument with rational multiples
and then limits) the area is a fixed multiple of $\alpha$. The whole sphere, $4\pi R^2$ ([Chapter 11](11-Solid-Geometry.md)),
is the lune of angle $2\pi$. So the area is $\frac{\alpha}{2\pi} \cdot 4\pi R^2 = 2\alpha R^2$. $\square$

### Girard's theorem

**Theorem 16.2 (Girard).** A spherical triangle with angles $\alpha, \beta, \gamma$ (in radians) on a sphere of radius $R$
has area

$$
\text{Area} = (\alpha + \beta + \gamma - \pi)\, R^2 .
$$

The quantity $E = \alpha + \beta + \gamma - \pi$ is the **spherical excess**.

*Proof.* Let the triangle be $ABC$ and let $A', B', C'$ be the antipodal points. The antipodal triangle $A'B'C'$ is the
image of $ABC$ under the map $\mathbf{x} \mapsto -\mathbf{x}$, which preserves area, so it has the same area $T$.

Extend the two sides at $A$ to full great circles. They meet again at $A'$ and cut out a lune of angle $\alpha$
containing the triangle $ABC$, together with the opposite lune (from $A'$ back to $A$ on the other side) containing the
triangle $A'B'C'$. Together, these two lunes have area $2 \cdot 2\alpha R^2 = 4\alpha R^2$. Do the same at $B$ and $C$.

Now count how often each point of the sphere is covered by these six lunes. The three great circles cut the sphere into
eight triangles: $ABC$, $A'B'C'$, and six others. A point of $ABC$ or of $A'B'C'$ lies in **three** of the lunes (one
for each vertex). A point of any other piece lies in exactly **one** lune. (Check it on the octant picture: each of the
other six pieces is "beyond" exactly one side of $ABC$ or of $A'B'C'$.) So

$$
4\alpha R^2 + 4\beta R^2 + 4\gamma R^2 = 4\pi R^2 + 2T + 2T,
$$

where $4\pi R^2$ counts every point once, and the extra $2T + 2T$ counts the two extra coverings of $ABC$ and of
$A'B'C'$. Divide by $4$: $(\alpha + \beta + \gamma) R^2 = \pi R^2 + T$. $\square$

**Check with the octant.** $\alpha = \beta = \gamma = \pi/2$ gives area $(3\pi/2 - \pi) R^2 = \frac{\pi}{2} R^2$, and one
eighth of the sphere is $\frac{4\pi R^2}{8} = \frac{\pi}{2} R^2$. On Mars ($R = 3389.5$ km) that is about $18.0$ million
km$^2$.

**Consequences.**

- Every spherical triangle has angle sum **greater** than $180^\circ$, since its area is positive. The sum is less than
  $540^\circ$, since each angle of a triangle made of shorter arcs is less than $180^\circ$.
- **Area is angle.** On a sphere of known radius, you can find a triangle's area without measuring any length.
- **No similar triangles.** Two triangles with the same angles have the same area; in fact they are congruent. Making a
  spherical triangle larger always increases its angles. So spherical geometry, like hyperbolic geometry, has no
  "scaling", and the radius $R$ is a natural unit of length.
- **Small triangles are nearly flat.** A triangle of area $T$ has excess $T/R^2$. A triangle with sides of 10 km on
  Earth has area about $43$ km$^2$ and excess $43/6371^2 \approx 1.06 \times 10^{-6}$ radians, about $0.2$ seconds of arc.
  That is why surveyors on a small scale can ignore the curvature, while those mapping whole countries cannot (they use
  "Legendre's theorem": take one third of the excess off each angle and solve as a plane triangle).

The formula is named after Albert Girard, who published it in 1629. Thomas Harriot had found it earlier, around 1603,
but did not publish. Euler and Legendre later gave the proof by lunes.

## 16.3 Spherical trigonometry

*Level: advanced.* Work on the unit sphere. A spherical triangle $ABC$ has **sides** $a, b, c$ (the arcs opposite $A$,
$B$, $C$, measured as central angles) and **angles** $A, B, C$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 324.0 318.0" role="img" aria-label="A spherical triangle ABC on the unit sphere, with C at the north pole. Its sides a, b, c are arcs of great circles, measured by the angles they subtend at the centre O, and C is the angle between the sides at C">
  <circle cx="162.0" cy="162.0" r="120.0" fill="#9cc9ea" fill-opacity="0.15" stroke="currentColor" stroke-width="1.6"/>
  <polygon points="124.3,117.8 127.4,117.7 130.4,117.6 133.5,117.5 136.6,117.4 139.7,117.4 142.9,117.4 146.0,117.5 149.2,117.5 152.4,117.6 155.5,117.8 158.7,117.9 161.9,118.1 165.1,118.4 168.3,118.6 171.5,118.9 174.7,119.3 177.8,119.6 181.0,120.0 184.1,120.4 187.2,120.8 190.3,121.3 193.4,121.8 196.5,122.4 199.5,122.9 202.6,123.5 205.5,124.1 208.5,124.7 211.4,125.4 214.3,126.1 217.1,126.8 220.0,127.6 222.7,128.3 225.5,129.1 228.1,129.9 230.8,130.8 233.3,131.6 235.9,132.5 238.4,133.4 240.8,134.3 243.2,135.3 243.2,135.3 242.0,132.3 240.7,129.3 239.4,126.3 238.0,123.4 236.6,120.4 235.1,117.6 233.6,114.7 232.0,111.9 230.4,109.1 228.7,106.4 226.9,103.7 225.2,101.0 223.3,98.4 221.5,95.8 219.5,93.3 217.6,90.8 215.6,88.4 213.5,86.1 211.5,83.8 209.3,81.5 207.2,79.3 205.0,77.2 202.8,75.1 200.6,73.1 198.3,71.2 196.0,69.3 193.7,67.5 191.3,65.8 189.0,64.1 186.6,62.5 184.2,61.0 181.7,59.5 179.3,58.2 176.9,56.9 174.4,55.7 171.9,54.5 169.5,53.4 167.0,52.5 164.5,51.6 162.0,50.7 162.0,50.7 160.9,51.6 159.9,52.5 158.8,53.5 157.8,54.5 156.7,55.6 155.6,56.7 154.6,57.9 153.5,59.1 152.5,60.3 151.5,61.6 150.4,63.0 149.4,64.4 148.4,65.8 147.3,67.3 146.3,68.8 145.3,70.3 144.3,71.9 143.3,73.5 142.3,75.2 141.4,76.9 140.4,78.7 139.5,80.5 138.5,82.3 137.6,84.1 136.6,86.0 135.7,87.9 134.8,89.9 133.9,91.9 133.1,93.9 132.2,95.9 131.3,98.0 130.5,100.1 129.7,102.2 128.9,104.4 128.1,106.6 127.3,108.8 126.5,111.0 125.8,113.3 125.0,115.5 124.3,117.8" fill="#eea66f" fill-opacity="0.45" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
  <line x1="162.0" y1="162.0" x2="124.3" y2="117.8" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
  <line x1="162.0" y1="162.0" x2="243.2" y2="135.3" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
  <line x1="162.0" y1="162.0" x2="162.0" y2="50.7" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3"/>
  <circle cx="124.3" cy="117.8" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="118.3" y="133.8" font-size="12" text-anchor="middle" fill="currentColor">A</text>
  <circle cx="243.2" cy="135.3" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="255.2" y="145.3" font-size="12" text-anchor="middle" fill="currentColor">B</text>
  <circle cx="162.0" cy="50.7" r="3" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="162.0" y="41.7" font-size="12" text-anchor="middle" fill="currentColor">C</text>
  <circle cx="162.0" cy="162.0" r="3" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="158.0" y="178.0" font-size="12" text-anchor="middle" fill="currentColor">O</text>
  <text x="221.3" y="85.5" font-size="12" text-anchor="middle" fill="currentColor" font-style="italic">a</text>
  <text x="129.4" y="80.9" font-size="12" text-anchor="middle" fill="currentColor" font-style="italic">b</text>
  <text x="199.2" y="136.8" font-size="12" text-anchor="middle" fill="currentColor" font-style="italic">c</text>
</svg>
</div>

**Theorem 16.3 (spherical law of cosines).**

$$
\cos c = \cos a \cos b + \sin a \sin b \cos C .
$$

*Proof.* Place $C$ at the north pole, $C = (0, 0, 1)$. The point $A$ is at angular distance $b$ from $C$ (side $CA$ has
length $b$); turn the sphere so that $A$ lies in the $xz$-plane: $A = (\sin b, 0, \cos b)$. The point $B$ is at angular
distance $a$ from $C$, and the angle at $C$ between the meridians to $A$ and to $B$ is $C$, so
$B = (\sin a \cos C, \sin a \sin C, \cos a)$. The side $c$ is the angle between the unit vectors $A$ and $B$, so

$$
\cos c = A \cdot B = \sin b \sin a \cos C + \cos b \cos a . \ \square
$$

**Small triangles.** For a small triangle, $\cos x \approx 1 - x^2/2$ and $\sin x \approx x$. Then the law becomes
$1 - \tfrac{c^2}{2} \approx (1 - \tfrac{a^2}{2})(1 - \tfrac{b^2}{2}) + ab\cos C$. Expanding and dropping the term
$a^2b^2/4$, which is much smaller still: $c^2 \approx a^2 + b^2 - 2ab\cos C$, the ordinary law of cosines. The sphere looks
flat close up.

**Spherical Pythagoras.** If $C = 90^\circ$, $\cos C = 0$ and

$$
\cos c = \cos a \cos b .
$$

**Example.** A right triangle with legs $a = b = 60^\circ$: $\cos c = \tfrac14$, so $c = 75.52^\circ$. On a plane, legs of
60 units would give a hypotenuse of $60\sqrt2 = 84.85$. On the sphere the hypotenuse is shorter, because great circles
through the right angle's arms bend towards each other.

**Theorem 16.4 (spherical law of sines).**

$$
\frac{\sin A}{\sin a} = \frac{\sin B}{\sin b} = \frac{\sin C}{\sin c} .
$$

*Proof.* From the law of cosines, $\cos C = \frac{\cos c - \cos a \cos b}{\sin a \sin b}$. Then

$$
\sin^2 C = 1 - \cos^2 C = \frac{\sin^2 a \sin^2 b - (\cos c - \cos a \cos b)^2}{\sin^2 a \sin^2 b} .
$$

Expand the numerator with $\sin^2 = 1 - \cos^2$: it is $1 - \cos^2 a - \cos^2 b - \cos^2 c + 2\cos a \cos b \cos c$, which we
call $\Delta$. So

$$
\frac{\sin^2 C}{\sin^2 c} = \frac{\Delta}{\sin^2 a \sin^2 b \sin^2 c} .
$$

The right side is symmetric in $a, b, c$, so the same expression equals $\sin^2 A/\sin^2 a$ and $\sin^2 B/\sin^2 b$. All
these sines are positive (sides and angles are between $0$ and $\pi$), so take square roots. $\square$

**The triangle inequality.** For any spherical triangle, $c < a + b$. *Proof.* Since $C < \pi$, $\cos C > -1$, so
$\cos c = \cos a\cos b + \sin a \sin b \cos C > \cos a \cos b - \sin a \sin b = \cos(a + b)$. If $a + b \ge \pi$ then
$c \le \pi \le a + b$ anyway (and $c = \pi$ only for antipodal ends); otherwise $a + b$ and $c$ are both in $[0, \pi]$,
where cosine decreases, so $c < a + b$. $\square$ This is the heart of the claim that great circles are the shortest
paths: replacing two arcs of a path by the single arc joining their ends always shortens it, and a limiting argument
(approximating any curve by great-circle polygons) does the rest.

**Polar triangles.** For each side of $ABC$, take the pole of its great circle on the same side as the opposite vertex.
These three poles form the **polar triangle** $A^*B^*C^*$, and a short argument shows its sides are $\pi - A$, $\pi - B$,
$\pi - C$ and its angles are $\pi - a$, $\pi - b$, $\pi - c$. Applying the law of cosines to the polar triangle gives a
second law, for angles:

$$
\cos C = -\cos A \cos B + \sin A \sin B \cos c .
$$

So on the sphere, three angles determine a triangle (unlike the plane, where they only fix its shape).

### The haversine formula

Navigators want distances between points given by latitude and longitude. Put the north pole at $C$; then for points
$1$ and $2$ the sides from $C$ are the colatitudes $90^\circ - \varphi_1$ and $90^\circ - \varphi_2$, and the angle at $C$ is
the difference of longitudes $\Delta\lambda$. The law of cosines gives the central angle $\theta$:

$$
\cos\theta = \sin\varphi_1 \sin\varphi_2 + \cos\varphi_1 \cos\varphi_2 \cos\Delta\lambda .
$$

That is correct, but bad for computing short distances: for nearby points $\cos\theta$ is very close to $1$, and a
computer (or a 19th-century navigator's tables) loses most of its significant digits. The cure is the **haversine**,
$\operatorname{hav}\theta = \sin^2(\theta/2) = (1 - \cos\theta)/2$. Substituting $\cos x = 1 - 2\operatorname{hav} x$
everywhere and simplifying (using $\cos\varphi_1\cos\varphi_2 + \sin\varphi_1 \sin\varphi_2 = \cos(\varphi_2 - \varphi_1)$) gives

$$
\operatorname{hav}\theta = \operatorname{hav}(\varphi_2 - \varphi_1) + \cos\varphi_1 \cos\varphi_2 \operatorname{hav}(\Delta\lambda),
\qquad d = 2R \arcsin\sqrt{\operatorname{hav}\theta} .
$$

All the quantities are small for nearby points, so no digits are lost. In double-precision arithmetic, for two points
at latitude $45^\circ$ on Earth:

| true distance | by arccos | by haversine |
| --- | --- | --- |
| 10 m | 10.00025 m | 10.00000 m |
| 10 cm | 9.49 cm | 10.00 cm |
| 1 cm | 0 | 1.00 cm |

## 16.4 Navigation on Earth and Mars

*Level: advanced.* Here are the formulas in use, with real numbers. We use the mean radius of the Earth,
$R = 6371$ km, and of Mars, $R = 3389.5$ km. (Both planets are slightly flattened: Earth's equatorial radius is
6378 km and polar radius 6357 km; Mars's are about 3396 km and 3376 km. Over long distances the sphere model is within
about half a percent; precise navigation uses an ellipsoid.)

**Example 1: London to New York.** London is at $51.5074^\circ$ N, $0.1278^\circ$ W; New York at $40.7128^\circ$ N,
$74.0060^\circ$ W. By the haversine formula, $\theta = 0.8743$ radians, so

$$
d = 6371 \times 0.8743 \approx 5570 \text{ km}.
$$

**Initial bearing.** The compass direction to set off in (clockwise from north) is

$$
\tan\beta_1 = \frac{\sin\Delta\lambda \cos\varphi_2}{\cos\varphi_1 \sin\varphi_2 - \sin\varphi_1 \cos\varphi_2 \cos\Delta\lambda},
$$

using the two-argument arctangent to get the right quadrant. (This comes from the law of sines and the second form of the
law of cosines in the triangle pole-London-New York.) For London to New York, $\beta_1 \approx 288.3^\circ$: west-north-west,
even though New York is south of London's latitude.

**How far north does the route go?** Along a great circle, $\cos\varphi \sin\beta$ is constant (this is **Clairaut's
relation**; it follows from the law of sines in the triangle formed by the pole, the starting point and any later
point). At the northernmost point the bearing is due west, $\sin\beta = \pm1$, so

$$
\cos\varphi_{\max} = \cos\varphi_1 \, |\sin\beta_1| = \cos 51.51^\circ \times |\sin 288.33^\circ| \approx 0.5906,
$$

and $\varphi_{\max} \approx 53.8^\circ$ N. The shortest route from London to New York goes north of both cities.

**The rhumb line.** The old alternative is to steer a constant compass bearing. That path, the **rhumb line** or
loxodrome, crosses every meridian at the same angle; it is easy to sail but it is not a great circle. From London to New
York it has bearing about $258^\circ$ and length about $5794$ km, some 224 km (4%) longer. On a Mercator map (16.5) the rhumb
line is straight and the great circle bows towards the pole:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 670.0 221.6" role="img" aria-label="London and New York on a Mercator map. The straight line is the rhumb line, of constant compass bearing, 5794 km long. The curve bowing towards the pole is the great circle route, 5570 km, the shortest path">
  <line x1="12.0" y1="178.1" x2="658.0" y2="178.1" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3"/>
  <text x="16.0" y="175.1" font-size="10" text-anchor="start" fill="currentColor">40°N</text>
  <line x1="12.0" y1="133.1" x2="658.0" y2="133.1" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3"/>
  <text x="16.0" y="130.1" font-size="10" text-anchor="start" fill="currentColor">45°N</text>
  <line x1="12.0" y1="83.9" x2="658.0" y2="83.9" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3"/>
  <text x="16.0" y="80.9" font-size="10" text-anchor="start" fill="currentColor">50°N</text>
  <line x1="12.0" y1="29.4" x2="658.0" y2="29.4" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3"/>
  <text x="16.0" y="26.4" font-size="10" text-anchor="start" fill="currentColor">55°N</text>
  <line x1="32.4" y1="209.6" x2="32.4" y2="12.0" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3"/>
  <line x1="98.7" y1="209.6" x2="98.7" y2="12.0" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3"/>
  <line x1="165.1" y1="209.6" x2="165.1" y2="12.0" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3"/>
  <line x1="231.4" y1="209.6" x2="231.4" y2="12.0" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3"/>
  <line x1="297.7" y1="209.6" x2="297.7" y2="12.0" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3"/>
  <line x1="364.0" y1="209.6" x2="364.0" y2="12.0" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3"/>
  <line x1="430.4" y1="209.6" x2="430.4" y2="12.0" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3"/>
  <line x1="496.7" y1="209.6" x2="496.7" y2="12.0" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3"/>
  <line x1="563.0" y1="209.6" x2="563.0" y2="12.0" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3"/>
  <line x1="629.3" y1="209.6" x2="629.3" y2="12.0" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3"/>
  <polyline points="562.2,68.1 557.1,66.5 551.9,64.9 546.8,63.3 541.6,61.8 536.4,60.4 531.1,59.0 525.9,57.6 520.6,56.3 515.2,55.1 509.9,53.9 504.5,52.8 499.1,51.7 493.6,50.7 488.2,49.8 482.7,48.9 477.2,48.0 471.7,47.3 466.1,46.6 460.6,46.0 455.0,45.4 449.4,44.9 443.8,44.5 438.2,44.1 432.6,43.8 427.0,43.6 421.4,43.4 415.8,43.3 410.2,43.2 404.5,43.3 398.9,43.4 393.3,43.5 387.7,43.8 382.1,44.1 376.5,44.4 370.9,44.9 365.3,45.4 359.7,45.9 354.2,46.6 348.7,47.2 343.1,48.0 337.6,48.8 332.1,49.7 326.7,50.6 321.2,51.6 315.8,52.7 310.4,53.8 305.1,55.0 299.7,56.2 294.4,57.5 289.2,58.9 283.9,60.3 278.7,61.7 273.5,63.2 268.3,64.8 263.2,66.4 258.1,68.0 253.1,69.7 248.1,71.5 243.1,73.3 238.1,75.1 233.2,77.0 228.4,78.9 223.5,80.9 218.8,82.9 214.0,84.9 209.3,87.0 204.6,89.1 200.0,91.2 195.4,93.4 190.8,95.6 186.3,97.8 181.8,100.1 177.4,102.4 173.0,104.7 168.7,107.1 164.3,109.4 160.1,111.8 155.8,114.3 151.6,116.7 147.5,119.2 143.4,121.7 139.3,124.2 135.2,126.7 131.2,129.3 127.3,131.8 123.3,134.4 119.5,137.0 115.6,139.6 111.8,142.2 108.0,144.9 104.3,147.5 100.6,150.2 96.9,152.9 93.3,155.6 89.7,158.3 86.1,161.0 82.6,163.7 79.1,166.4 75.6,169.1 72.2,171.9" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
  <line x1="562.2" y1="68.1" x2="72.2" y2="171.9" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 4"/>
  <circle cx="562.2" cy="68.1" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="556.2" y="60.1" font-size="12" text-anchor="end" fill="currentColor">London</text>
  <circle cx="72.2" cy="171.9" r="4" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="80.2" y="187.9" font-size="12" text-anchor="start" fill="currentColor">New York</text>
  <text x="289.2" y="48.9" font-size="11" text-anchor="middle" fill="currentColor">great circle</text>
  <text x="317.2" y="138.0" font-size="11" text-anchor="middle" fill="currentColor">rhumb line</text>
</svg>
</div>

**Example 2: on Mars.** NASA's Curiosity rover landed in Gale crater at about $4.59^\circ$ S, $137.44^\circ$ E, and
Perseverance landed in Jezero crater at about $18.44^\circ$ N, $77.45^\circ$ E (planetocentric coordinates, longitude
measured east). The haversine formula with $R = 3389.5$ km gives a central angle of $1.1067$ radians and

$$
d \approx 3389.5 \times 1.1067 \approx 3751 \text{ km},
$$

with initial bearing about $293^\circ$ from Gale. A degree of latitude on Mars is $2\pi \times 3389.5/360 \approx 59.2$ km,
against $111.2$ km on Earth.

!!! example "Try it in Python"
    ```python
    from math import radians, sin, cos, asin, atan2, sqrt, degrees

    def great_circle(lat1, lon1, lat2, lon2, R):
        p1, l1, p2, l2 = map(radians, (lat1, lon1, lat2, lon2))
        h = sin((p2 - p1) / 2)**2 + cos(p1) * cos(p2) * sin((l2 - l1) / 2)**2
        d = 2 * R * asin(sqrt(h))
        y = sin(l2 - l1) * cos(p2)
        x = cos(p1) * sin(p2) - sin(p1) * cos(p2) * cos(l2 - l1)
        return d, degrees(atan2(y, x)) % 360

    print(great_circle(51.5074, -0.1278, 40.7128, -74.0060, 6371))   # London to New York
    print(great_circle(-4.5895, 137.4417, 18.4447, 77.4508, 3389.5)) # Gale to Jezero, Mars
    ```

## 16.5 Maps: why no flat map is perfect

*Level: advanced.* A map is a way of drawing a curved surface on a flat sheet. Could a map of some region of the
Earth, however small, keep every distance correct (up to one scale factor)? No.

**Theorem 16.5.** No map from any open piece of a sphere to the plane preserves all distances, even up to a constant
scale.

*Proof.* Take a point $N$ of the region, which we may treat as the north pole, and the circle of points at distance
$\rho$ from $N$ along the sphere (a circle of latitude, at angle $\rho/R$ from the pole). Its circumference is
$2\pi R \sin(\rho/R)$. A map that kept distances (scaled by $k$) would send these points to points at distance $k\rho$
from the image of $N$, a circle of circumference $2\pi k\rho$, and, keeping all distances, it would keep lengths of curves
(scaled by $k$), so $2\pi k R\sin(\rho/R) = 2\pi k \rho$. But $\sin x < x$ for $x > 0$, so $R\sin(\rho/R) < \rho$.
Contradiction. $\square$

The deeper reason is Gauss's *Theorema Egregium* (1827): the sphere has **curvature** $1/R^2$ at every point, the
plane has curvature $0$, and curvature can be measured from distances alone, so no distance-preserving map can exist. That
is [Chapter 19](19-Curves-and-Surfaces.md). Every map therefore gives something up. Each projection chooses what to keep.

**Cylindrical maps.** Put longitude $\lambda$ (in radians) on the horizontal axis, $x = R\lambda$, and some function of
latitude on the vertical axis, $y = f(\varphi)$. Meridians are vertical lines and parallels horizontal lines. A circle of
latitude $\varphi$ has true length $2\pi R\cos\varphi$, but on the map it has the same length $2\pi R$ as the equator: it is
stretched east-west by the factor $\sec\varphi = 1/\cos\varphi$. The choice of $f$ decides the north-south stretch $f'(\varphi)/R$.

**Equirectangular** (plate carrée): $f(\varphi) = R\varphi$. North-south distances along meridians are correct; shapes
are squashed near the poles.

**Mercator** (Gerardus Mercator, 1569): make the north-south stretch also $\sec\varphi$, so that small shapes are kept.
We need $f'(\varphi) = R\sec\varphi$, and the solution with $f(0) = 0$ is

$$
y = R\ln\tan\left(\frac{\pi}{4} + \frac{\varphi}{2}\right) .
$$

*Check:* differentiating, $\frac{d}{d\varphi}\ln\tan(\frac\pi4 + \frac\varphi2) = \frac{\frac12\sec^2(\frac\pi4 + \frac\varphi2)}{\tan(\frac\pi4 + \frac\varphi2)}
= \frac{1}{2\sin(\frac\pi4 + \frac\varphi2)\cos(\frac\pi4 + \frac\varphi2)} = \frac{1}{\sin(\frac\pi2 + \varphi)} = \sec\varphi$.
Mercator's map is **conformal** (keeps angles), so a constant compass bearing is a straight line, which is why sailors
loved it. The price is area: the scale factor $\sec\varphi$ in both directions multiplies areas by $\sec^2\varphi$. At
$60^\circ$ latitude lengths are doubled and areas multiplied by 4; Greenland (about 2.2 million km$^2$) looks as large as
Africa (about 30 million km$^2$). The poles are infinitely far away.

**Lambert's equal-area cylindrical** (Johann Heinrich Lambert, 1772): take $f(\varphi) = R\sin\varphi$. Then the
north-south scale is $\cos\varphi$, exactly cancelling the east-west $\sec\varphi$: areas are correct. This is
**Archimedes' hat-box theorem** in disguise: projecting the sphere horizontally onto the circumscribed cylinder keeps
area, since the zone between two parallels at heights $h_1 < h_2$ has area $2\pi R(h_2 - h_1)$, the same as the band of
cylinder between those heights.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 607.0 288.0" role="img" aria-label="The same grid of latitude and longitude, every 15 degrees, in three projections. Left: equirectangular, with equal spacing. Middle: Mercator, with the parallels spreading apart towards the poles. Right: Lambert's equal-area cylindrical projection, with the parallels crowding together">
  <line x1="23.0" y1="216.0" x2="195.8" y2="216.0" stroke="currentColor" stroke-width="0.7"/>
  <line x1="23.0" y1="201.6" x2="195.8" y2="201.6" stroke="currentColor" stroke-width="0.7"/>
  <line x1="23.0" y1="187.2" x2="195.8" y2="187.2" stroke="currentColor" stroke-width="0.7"/>
  <line x1="23.0" y1="172.8" x2="195.8" y2="172.8" stroke="currentColor" stroke-width="0.7"/>
  <line x1="23.0" y1="158.4" x2="195.8" y2="158.4" stroke="currentColor" stroke-width="0.7"/>
  <line x1="23.0" y1="144.0" x2="195.8" y2="144.0" stroke="currentColor" stroke-width="1.2"/>
  <line x1="23.0" y1="129.6" x2="195.8" y2="129.6" stroke="currentColor" stroke-width="0.7"/>
  <line x1="23.0" y1="115.2" x2="195.8" y2="115.2" stroke="currentColor" stroke-width="0.7"/>
  <line x1="23.0" y1="100.8" x2="195.8" y2="100.8" stroke="currentColor" stroke-width="0.7"/>
  <line x1="23.0" y1="86.4" x2="195.8" y2="86.4" stroke="currentColor" stroke-width="0.7"/>
  <line x1="23.0" y1="72.0" x2="195.8" y2="72.0" stroke="currentColor" stroke-width="0.7"/>
  <line x1="23.0" y1="230.4" x2="23.0" y2="57.6" stroke="currentColor" stroke-width="0.7"/>
  <line x1="37.4" y1="230.4" x2="37.4" y2="57.6" stroke="currentColor" stroke-width="0.7"/>
  <line x1="51.8" y1="230.4" x2="51.8" y2="57.6" stroke="currentColor" stroke-width="0.7"/>
  <line x1="66.2" y1="230.4" x2="66.2" y2="57.6" stroke="currentColor" stroke-width="0.7"/>
  <line x1="80.6" y1="230.4" x2="80.6" y2="57.6" stroke="currentColor" stroke-width="0.7"/>
  <line x1="95.0" y1="230.4" x2="95.0" y2="57.6" stroke="currentColor" stroke-width="0.7"/>
  <line x1="109.4" y1="230.4" x2="109.4" y2="57.6" stroke="currentColor" stroke-width="0.7"/>
  <line x1="123.8" y1="230.4" x2="123.8" y2="57.6" stroke="currentColor" stroke-width="0.7"/>
  <line x1="138.2" y1="230.4" x2="138.2" y2="57.6" stroke="currentColor" stroke-width="0.7"/>
  <line x1="152.6" y1="230.4" x2="152.6" y2="57.6" stroke="currentColor" stroke-width="0.7"/>
  <line x1="167.0" y1="230.4" x2="167.0" y2="57.6" stroke="currentColor" stroke-width="0.7"/>
  <line x1="181.4" y1="230.4" x2="181.4" y2="57.6" stroke="currentColor" stroke-width="0.7"/>
  <line x1="195.8" y1="230.4" x2="195.8" y2="57.6" stroke="currentColor" stroke-width="0.7"/>
  <polygon points="23.0,230.4 195.8,230.4 195.8,57.6 23.0,57.6" fill="#9cc9ea" fill-opacity="0.2" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <text x="109.4" y="274.0" font-size="12" text-anchor="middle" fill="currentColor">equirectangular</text>
  <line x1="215.5" y1="255.5" x2="388.3" y2="255.5" stroke="currentColor" stroke-width="0.7"/>
  <line x1="215.5" y1="216.4" x2="388.3" y2="216.4" stroke="currentColor" stroke-width="0.7"/>
  <line x1="215.5" y1="192.5" x2="388.3" y2="192.5" stroke="currentColor" stroke-width="0.7"/>
  <line x1="215.5" y1="174.2" x2="388.3" y2="174.2" stroke="currentColor" stroke-width="0.7"/>
  <line x1="215.5" y1="158.6" x2="388.3" y2="158.6" stroke="currentColor" stroke-width="0.7"/>
  <line x1="215.5" y1="144.0" x2="388.3" y2="144.0" stroke="currentColor" stroke-width="1.2"/>
  <line x1="215.5" y1="129.4" x2="388.3" y2="129.4" stroke="currentColor" stroke-width="0.7"/>
  <line x1="215.5" y1="113.8" x2="388.3" y2="113.8" stroke="currentColor" stroke-width="0.7"/>
  <line x1="215.5" y1="95.5" x2="388.3" y2="95.5" stroke="currentColor" stroke-width="0.7"/>
  <line x1="215.5" y1="71.6" x2="388.3" y2="71.6" stroke="currentColor" stroke-width="0.7"/>
  <line x1="215.5" y1="32.5" x2="388.3" y2="32.5" stroke="currentColor" stroke-width="0.7"/>
  <line x1="215.5" y1="255.5" x2="215.5" y2="32.5" stroke="currentColor" stroke-width="0.7"/>
  <line x1="229.9" y1="255.5" x2="229.9" y2="32.5" stroke="currentColor" stroke-width="0.7"/>
  <line x1="244.3" y1="255.5" x2="244.3" y2="32.5" stroke="currentColor" stroke-width="0.7"/>
  <line x1="258.7" y1="255.5" x2="258.7" y2="32.5" stroke="currentColor" stroke-width="0.7"/>
  <line x1="273.1" y1="255.5" x2="273.1" y2="32.5" stroke="currentColor" stroke-width="0.7"/>
  <line x1="287.5" y1="255.5" x2="287.5" y2="32.5" stroke="currentColor" stroke-width="0.7"/>
  <line x1="301.9" y1="255.5" x2="301.9" y2="32.5" stroke="currentColor" stroke-width="0.7"/>
  <line x1="316.3" y1="255.5" x2="316.3" y2="32.5" stroke="currentColor" stroke-width="0.7"/>
  <line x1="330.7" y1="255.5" x2="330.7" y2="32.5" stroke="currentColor" stroke-width="0.7"/>
  <line x1="345.1" y1="255.5" x2="345.1" y2="32.5" stroke="currentColor" stroke-width="0.7"/>
  <line x1="359.5" y1="255.5" x2="359.5" y2="32.5" stroke="currentColor" stroke-width="0.7"/>
  <line x1="373.9" y1="255.5" x2="373.9" y2="32.5" stroke="currentColor" stroke-width="0.7"/>
  <line x1="388.3" y1="255.5" x2="388.3" y2="32.5" stroke="currentColor" stroke-width="0.7"/>
  <polygon points="215.5,255.5 388.3,255.5 388.3,32.5 215.5,32.5" fill="#9cc9ea" fill-opacity="0.2" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <text x="301.9" y="274.0" font-size="12" text-anchor="middle" fill="currentColor">Mercator</text>
  <line x1="408.0" y1="197.1" x2="580.8" y2="197.1" stroke="currentColor" stroke-width="0.7"/>
  <line x1="408.0" y1="191.6" x2="580.8" y2="191.6" stroke="currentColor" stroke-width="0.7"/>
  <line x1="408.0" y1="182.9" x2="580.8" y2="182.9" stroke="currentColor" stroke-width="0.7"/>
  <line x1="408.0" y1="171.5" x2="580.8" y2="171.5" stroke="currentColor" stroke-width="0.7"/>
  <line x1="408.0" y1="158.2" x2="580.8" y2="158.2" stroke="currentColor" stroke-width="0.7"/>
  <line x1="408.0" y1="144.0" x2="580.8" y2="144.0" stroke="currentColor" stroke-width="1.2"/>
  <line x1="408.0" y1="129.8" x2="580.8" y2="129.8" stroke="currentColor" stroke-width="0.7"/>
  <line x1="408.0" y1="116.5" x2="580.8" y2="116.5" stroke="currentColor" stroke-width="0.7"/>
  <line x1="408.0" y1="105.1" x2="580.8" y2="105.1" stroke="currentColor" stroke-width="0.7"/>
  <line x1="408.0" y1="96.4" x2="580.8" y2="96.4" stroke="currentColor" stroke-width="0.7"/>
  <line x1="408.0" y1="90.9" x2="580.8" y2="90.9" stroke="currentColor" stroke-width="0.7"/>
  <line x1="408.0" y1="199.0" x2="408.0" y2="89.0" stroke="currentColor" stroke-width="0.7"/>
  <line x1="422.4" y1="199.0" x2="422.4" y2="89.0" stroke="currentColor" stroke-width="0.7"/>
  <line x1="436.8" y1="199.0" x2="436.8" y2="89.0" stroke="currentColor" stroke-width="0.7"/>
  <line x1="451.2" y1="199.0" x2="451.2" y2="89.0" stroke="currentColor" stroke-width="0.7"/>
  <line x1="465.6" y1="199.0" x2="465.6" y2="89.0" stroke="currentColor" stroke-width="0.7"/>
  <line x1="480.0" y1="199.0" x2="480.0" y2="89.0" stroke="currentColor" stroke-width="0.7"/>
  <line x1="494.4" y1="199.0" x2="494.4" y2="89.0" stroke="currentColor" stroke-width="0.7"/>
  <line x1="508.8" y1="199.0" x2="508.8" y2="89.0" stroke="currentColor" stroke-width="0.7"/>
  <line x1="523.2" y1="199.0" x2="523.2" y2="89.0" stroke="currentColor" stroke-width="0.7"/>
  <line x1="537.6" y1="199.0" x2="537.6" y2="89.0" stroke="currentColor" stroke-width="0.7"/>
  <line x1="552.0" y1="199.0" x2="552.0" y2="89.0" stroke="currentColor" stroke-width="0.7"/>
  <line x1="566.4" y1="199.0" x2="566.4" y2="89.0" stroke="currentColor" stroke-width="0.7"/>
  <line x1="580.8" y1="199.0" x2="580.8" y2="89.0" stroke="currentColor" stroke-width="0.7"/>
  <polygon points="408.0,199.0 580.8,199.0 580.8,89.0 408.0,89.0" fill="#9cc9ea" fill-opacity="0.2" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <text x="494.4" y="274.0" font-size="12" text-anchor="middle" fill="currentColor">equal-area</text>
</svg>
</div>

**Azimuthal maps** look at the sphere from a point.

- **Stereographic** (projection from the south pole onto the tangent plane at the north pole, or as in
  [Chapter 13](13-Inversion-and-Complex-Geometry.md)): conformal, and sends circles on the sphere to circles. It is the
  standard projection for polar maps of Earth and of Mars's polar caps.
- **Gnomonic** (projection from the centre $O$ onto a tangent plane): every great circle goes to a straight line, since a
  great circle lies in a plane through $O$, which meets the tangent plane in a line. So on a gnomonic chart the shortest
  route is a ruler line, which navigators then transferred to a Mercator chart to steer it in short rhumb-line legs. It
  shows less than a hemisphere.

**Measuring the damage.** Nicolas Auguste Tissot (1859 and later) showed that every map sends each tiny circle on the
sphere to a tiny ellipse, the **Tissot indicatrix**. Conformal maps keep circles circular (but change their size);
equal-area maps keep their area (but stretch them). By Theorem 16.5, no map does both everywhere.

**Maps of Mars** follow the same rules. Global maps of Mars from the orbiters' elevation and image data are often
published in simple cylindrical (equirectangular) form near the equator, with polar stereographic maps for the poles.

## 16.6 Elliptic geometry

*Level: advanced to expert.* Spherical geometry fails Euclid's first postulate in one way: two antipodal points lie on
infinitely many lines. Fix it by declaring each pair of antipodal points to be **one** point.

**Definition.** The **elliptic plane** has as its points the pairs $\{\mathbf{x}, -\mathbf{x}\}$ of antipodal points of the
unit sphere, and as its lines the great circles (each now seen as a closed curve of length $\pi$). Equivalently, the
points are the lines through $O$ in space, and the lines are the planes through $O$: this is the **real projective
plane** $\mathbb{RP}^2$ of [Chapter 18](18-Projective-Geometry.md), with a distance.

Now:

- **two points lie on exactly one line** (two lines through $O$ span exactly one plane);
- **two lines meet in exactly one point** (two planes through $O$ meet in exactly one line);
- there are **no parallels**.

So the incidence axioms hold, and even more symmetrically than in the plane. What fails is **order**: a line is a
closed loop, so of three points on it none is "between" the other two in Hilbert's sense, and a line does not cut the
plane into two sides. (Remove a line from the elliptic plane, and what remains is still connected; in fact it is a disc.)
Betweenness is replaced by a four-point relation, **separation** ("$A$ and $B$ separate $C$ and $D$ on a loop").

**Triangles.** Small triangles in the elliptic plane are just small spherical triangles, so every triangle has angle sum
greater than $\pi$, with area equal to the excess (on the unit sphere). The whole elliptic plane has area $2\pi$, half the
sphere. This is Saccheri's **obtuse angle hypothesis** come to life: he refuted it correctly, but only because his axioms
made lines infinite. Drop that, and the obtuse hypothesis is a consistent geometry.

**A twist.** The elliptic plane is **non-orientable**: a narrow band along a line, followed once around, comes back
flipped, like a Möbius band. You cannot consistently tell clockwise from anticlockwise. This is one reason the sphere
itself, not the elliptic plane, is used for maps and navigation.

**Three geometries.** Riemann, in his 1854 lecture, saw spherical (or elliptic), Euclidean and hyperbolic geometry as
the three cases of a surface with constant curvature: positive, zero and negative.

| | sphere / elliptic | Euclidean plane | hyperbolic plane |
| --- | --- | --- | --- |
| curvature | $+1/R^2$ | $0$ | $-1/R^2$ |
| parallels through a point | none | one | infinitely many |
| angle sum of a triangle | $> 180^\circ$ | $= 180^\circ$ | $< 180^\circ$ |
| area of a triangle | $R^2 \times$ excess | not fixed by angles | $R^2 \times$ defect |
| circumference of a circle of radius $r$ | $2\pi R\sin(r/R)$ | $2\pi r$ | $2\pi R\sinh(r/R)$ |
| similar triangles of different sizes | no | yes | no |

The last column is [Chapter 17](17-Hyperbolic-Geometry.md).

## Check yourself

??? question "1. Two points on the equator of Mars are $90^\circ$ of longitude apart. How far apart are they, and how far is each from the north pole?"

    Both distances are a quarter of a great circle: $\frac{\pi}{2} \times 3389.5 \approx 5324$ km.

??? question "2. Find the area of a lune with angle $30^\circ$ on Earth, and what fraction of the Earth's surface it is."

    $\alpha = \pi/6$, area $= 2\alpha R^2 = \frac{\pi}{3} \times 6371^2 \approx 4.25 \times 10^7$ km$^2$. As a fraction:
    $\frac{2\alpha}{4\pi} = \frac{30}{360} = \frac{1}{12}$.

??? question "3. A spherical triangle on Earth has angles $100^\circ$, $80^\circ$ and $60^\circ$. Find its area."

    The excess is $240^\circ - 180^\circ = 60^\circ = \pi/3$. The area is $\frac{\pi}{3} R^2 \approx 4.25 \times 10^7$ km$^2$,
    one twelfth of the Earth, the same as the lune in question 2.

??? question "4. An equilateral spherical triangle has sides of $60^\circ$ on the unit sphere. Find its angles and its area."

    Law of cosines: $\cos 60^\circ = \cos^2 60^\circ + \sin^2 60^\circ \cos C$, so $\tfrac12 = \tfrac14 + \tfrac34 \cos C$ and
    $\cos C = \tfrac13$, $C \approx 70.53^\circ$. The excess is $3 \times 70.53^\circ - 180^\circ = 31.59^\circ \approx 0.5513$
    radians, which is the area on the unit sphere.

??? question "5. Use the spherical law of cosines to show that a right triangle with legs $a = b = 90^\circ$ has hypotenuse $90^\circ$, and describe the triangle."

    $\cos c = \cos 90^\circ \cos 90^\circ = 0$, so $c = 90^\circ$. It is the octant triangle: all three sides and all three
    angles are $90^\circ$.

??? question "6. On a Mercator map, by what factor are lengths and areas enlarged at latitude $60^\circ$? At $80^\circ$?"

    Lengths by $\sec\varphi$, areas by $\sec^2\varphi$. At $60^\circ$: $2$ and $4$. At $80^\circ$: $\sec 80^\circ \approx 5.76$
    and about $33.2$.

??? question "7. A plane leaves a city at latitude $40^\circ$ N with initial bearing $60^\circ$ along a great circle. What is the highest latitude it reaches?"

    Clairaut: $\cos\varphi_{\max} = \cos 40^\circ \sin 60^\circ \approx 0.7660 \times 0.8660 = 0.6634$, so
    $\varphi_{\max} \approx 48.4^\circ$ N.

??? question "8. What fraction of the Earth's surface lies between the equator and latitude $30^\circ$ N? Use Archimedes' hat-box theorem."

    The zone between heights $0$ and $R\sin 30^\circ = R/2$ has area $2\pi R \cdot \tfrac R2 = \pi R^2$, which is
    $\frac{\pi R^2}{4\pi R^2} = \frac14$ of the sphere. So a quarter of the Earth lies between the equator and $30^\circ$ N (and
    half of it between $30^\circ$ S and $30^\circ$ N).

??? question "9. Explain, using the circumference of circles, why a photograph of a small area of the Moon taken from straight above cannot be a perfect scale map of it."

    The Moon is (nearly) a sphere. A circle of radius $\rho$ measured on its surface has circumference
    $2\pi R\sin(\rho/R) < 2\pi\rho$, while a scale map would need circumference exactly (scale)$\times 2\pi\rho$. The error is
    small for small $\rho$, but never zero (Theorem 16.5).

??? question "10. Prove that two spherical triangles with the same three angles have the same area. Does this hold for plane triangles?"

    By Girard's theorem the area is $(\alpha + \beta + \gamma - \pi) R^2$, determined by the angles. In the plane, no:
    similar triangles of different sizes have the same angles and different areas.

??? question "11. In the elliptic plane (unit sphere with antipodes identified), what is the largest possible area of a triangle? Hint: compare with the whole plane."

    The elliptic plane has area $2\pi$. Every triangle has area equal to its excess $\alpha + \beta + \gamma - \pi$, and each
    angle is less than $\pi$, so the excess is less than $2\pi$. Triangles can come as close to area $2\pi$ as you like (with
    all angles near $\pi$), but cannot reach it.

??? question "12. Use the haversine formula to find the distance on Earth from the equator at longitude $0^\circ$ to the point at latitude $1^\circ$ N, longitude $1^\circ$ E. Compare with the flat estimate."

    $\operatorname{hav}\theta = \sin^2(0.5^\circ) + \cos 0^\circ \cos 1^\circ \sin^2(0.5^\circ) \approx 7.615 \times 10^{-5}
    \times (1 + 0.99985) \approx 1.5229 \times 10^{-4}$. Then $\theta = 2\arcsin\sqrt{1.5229 \times 10^{-4}} \approx 0.024682$
    radians and $d \approx 157.25$ km. The flat estimate $111.19 \times \sqrt2 \approx 157.25$ km agrees to within about
    4 metres, as it should for a small triangle.

## What you learned

- On a sphere the lines are great circles: they are the shortest and straightest paths; any two meet twice, so there
  are no parallels.
- A lune of angle $\alpha$ has area $2\alpha R^2$, and a triangle has area (angle sum $- \pi$)$R^2$ (Girard); angles add to
  more than $180^\circ$.
- The spherical laws of cosines and sines come from dot products; for small triangles they become the plane laws.
- The haversine formula computes great-circle distances accurately; bearings and Clairaut's relation give the route.
- No flat map keeps all distances, because circles on a sphere are too short; Mercator keeps angles, Lambert keeps
  areas, stereographic keeps circles, gnomonic keeps great circles straight.
- Identifying antipodal points gives the elliptic plane, where two lines always meet in exactly one point.

**Next:** [Chapter 17](17-Hyperbolic-Geometry.md) builds the opposite geometry, with infinitely many parallels and triangles whose angles add up to less than $180^\circ$.

## Further reading

- G. Van Brummelen, *Heavenly Mathematics: The Forgotten Art of Spherical Trigonometry* (2013).
- I. Todhunter, *Spherical Trigonometry* (first published 1859), still the classic collection of formulas.
- J. P. Snyder, *Map Projections: A Working Manual*, U.S. Geological Survey Professional Paper 1395 (1987).
- T. G. Feeman, *Portraits of the Earth: A Mathematician Looks at Maps* (2002).
- J. R. Weeks, *The Shape of Space* (2nd ed., 2002), on elliptic and other geometries.
- M. J. Greenberg, *Euclidean and Non-Euclidean Geometries* (4th ed., 2008), for elliptic geometry and its axioms.
- On this site: the gentler [Geometry on a sphere](../../topics/geometry/level-8/06-sphere-geometry.md) lesson;
  [Vectors](../../topics/geometry/level-8/04-vectors.md) and [Dot product](../../topics/geometry/level-8/05-dot-product.md);
  the [Geometry book index](index.md).
