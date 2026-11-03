# 20. Where probability goes

*The last chapter is a tour of the frontier. Pour water on a porous stone: does it soak through? Fill a large
symmetric matrix with coin flips: where are its eigenvalues? Draw the boundary between two random colours on a fine
grid: what curve do you see? Why do functions of many independent coins barely vary? And what is probability doing
inside physics and machine learning? Each question opened a field in the last seventy years, the work on them
has earned several Fields medals, and each still has famous open problems. You will see the main theorems, prove the parts that fit in a
page (bounds on the critical probability of percolation, the Catalan moments behind Wigner's semicircle, the
Azuma-Hoeffding inequality), and end with problems nobody has solved.*

!!! abstract "In this chapter"
    **You will learn:**

    - percolation, the critical probability, a full proof that $\frac13 \le p_c \le \frac23$ for bonds on the square lattice, and Kesten's theorem $p_c = \frac12$
    - Wigner's semicircle law and why its moments are the Catalan numbers, and the honest story of random matrices and the zeros of the zeta function
    - Schramm-Loewner evolution and conformal invariance, the work of Schramm, Lawler, Werner and Smirnov
    - concentration of measure: the sphere, the Azuma-Hoeffding inequality (proof), and bounded differences
    - what probability does in statistical physics, quantum mechanics and machine learning, without hype
    - open problems: the self-avoiding walk in three dimensions and percolation at criticality

    **You need:** Chapters [13](13-Markov-Chains.md) to [17](17-Measure-Theoretic-Probability.md), especially
    martingales ([Chapter 15](15-Random-Walks-and-Martingales.md)), Brownian motion
    ([Chapter 16](16-Brownian-Motion.md)) and the zero-one law (Section 17.6). Some linear algebra (eigenvalues of
    symmetric matrices) for 20.2 and complex numbers for 20.3.

    **Levels:** everything here is expert; 20.1 and 20.4 contain complete proofs at advanced level, while 20.2, 20.3
    and 20.6 are surveys of research mathematics with the ideas explained.

## 20.1 Percolation

*Level: expert (proofs at advanced level).*

### The model

Take the square grid $\mathbb{Z}^2$: vertices at points with whole-number coordinates, and **bonds** (edges) between
neighbours at distance 1. Fix $p$ between 0 and 1, and declare each bond **open** with probability $p$ and **closed**
otherwise, independently. Think of open bonds as channels in a porous stone through which water can flow. The
**open cluster** of a vertex is the set of vertices it can reach along open bonds.

Simon Broadbent and John Hammersley introduced this model in 1957, motivated by gas masks: when does gas get through
the random pores of a filter? The central question is whether the open cluster of the origin can be infinite. Let

$$
\theta(p) = P_p(\text{the open cluster of the origin is infinite}).
$$

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 400" role="img" aria-label="A sample of bond percolation with p equal to one half on an 11 by 11 grid of vertices. Open bonds are drawn; the largest open cluster, with 87 of the 121 vertices, is drawn in orange and thicker, the other open bonds in blue">
  <line x1="30" y1="30" x2="64" y2="30" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="30" y1="30" x2="30" y2="64" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="30" y1="64" x2="30" y2="98" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="30" y1="98" x2="30" y2="132" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="30" y1="132" x2="64" y2="132" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="30" y1="166" x2="64" y2="166" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="30" y1="166" x2="30" y2="200" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="30" y1="200" x2="64" y2="200" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="30" y1="200" x2="30" y2="234" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="30" y1="234" x2="64" y2="234" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="30" y1="268" x2="64" y2="268" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="30" y1="268" x2="30" y2="302" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="30" y1="336" x2="30" y2="370" stroke="#9cc9ea" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="64" y1="30" x2="98" y2="30" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="64" y1="64" x2="98" y2="64" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="64" y1="64" x2="64" y2="98" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="64" y1="98" x2="98" y2="98" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="64" y1="98" x2="64" y2="132" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="64" y1="132" x2="64" y2="166" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="64" y1="200" x2="98" y2="200" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="64" y1="234" x2="98" y2="234" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="64" y1="234" x2="64" y2="268" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="64" y1="268" x2="98" y2="268" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="64" y1="302" x2="98" y2="302" stroke="#9cc9ea" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="64" y1="302" x2="64" y2="336" stroke="#9cc9ea" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="64" y1="336" x2="64" y2="370" stroke="#9cc9ea" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="64" y1="370" x2="98" y2="370" stroke="#9cc9ea" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="98" y1="64" x2="132" y2="64" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="98" y1="132" x2="98" y2="166" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="98" y1="166" x2="98" y2="200" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="98" y1="200" x2="132" y2="200" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="98" y1="234" x2="132" y2="234" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="98" y1="234" x2="98" y2="268" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="98" y1="268" x2="132" y2="268" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="98" y1="336" x2="98" y2="370" stroke="#9cc9ea" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="132" y1="64" x2="166" y2="64" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="132" y1="98" x2="132" y2="132" stroke="#9cc9ea" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="132" y1="132" x2="132" y2="166" stroke="#9cc9ea" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="132" y1="234" x2="166" y2="234" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="132" y1="234" x2="132" y2="268" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="132" y1="268" x2="132" y2="302" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="132" y1="302" x2="166" y2="302" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="132" y1="302" x2="132" y2="336" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="132" y1="336" x2="166" y2="336" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="132" y1="336" x2="132" y2="370" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="166" y1="30" x2="200" y2="30" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="166" y1="30" x2="166" y2="64" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="166" y1="64" x2="200" y2="64" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="166" y1="98" x2="200" y2="98" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="166" y1="98" x2="166" y2="132" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="166" y1="200" x2="200" y2="200" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="166" y1="200" x2="166" y2="234" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="166" y1="234" x2="200" y2="234" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="166" y1="268" x2="166" y2="302" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="166" y1="302" x2="200" y2="302" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="166" y1="302" x2="166" y2="336" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="166" y1="336" x2="200" y2="336" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="166" y1="336" x2="166" y2="370" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="200" y1="30" x2="234" y2="30" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="200" y1="30" x2="200" y2="64" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="200" y1="64" x2="234" y2="64" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="200" y1="64" x2="200" y2="98" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="200" y1="200" x2="234" y2="200" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="200" y1="268" x2="200" y2="302" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="200" y1="302" x2="234" y2="302" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="200" y1="302" x2="200" y2="336" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="200" y1="336" x2="200" y2="370" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="200" y1="370" x2="234" y2="370" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="234" y1="30" x2="268" y2="30" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="234" y1="30" x2="234" y2="64" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="234" y1="64" x2="268" y2="64" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="234" y1="64" x2="234" y2="98" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="234" y1="98" x2="268" y2="98" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="234" y1="98" x2="234" y2="132" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="234" y1="132" x2="268" y2="132" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="234" y1="132" x2="234" y2="166" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="234" y1="166" x2="268" y2="166" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="234" y1="200" x2="234" y2="234" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="234" y1="234" x2="268" y2="234" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="234" y1="234" x2="234" y2="268" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="234" y1="268" x2="268" y2="268" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="234" y1="268" x2="234" y2="302" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="234" y1="336" x2="268" y2="336" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="234" y1="336" x2="234" y2="370" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="234" y1="370" x2="268" y2="370" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="268" y1="30" x2="302" y2="30" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="268" y1="30" x2="268" y2="64" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="268" y1="64" x2="302" y2="64" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="268" y1="98" x2="302" y2="98" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="268" y1="98" x2="268" y2="132" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="268" y1="166" x2="302" y2="166" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="268" y1="200" x2="302" y2="200" stroke="#9cc9ea" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="268" y1="268" x2="268" y2="302" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="268" y1="302" x2="302" y2="302" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="268" y1="302" x2="268" y2="336" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="302" y1="30" x2="336" y2="30" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="302" y1="30" x2="302" y2="64" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="302" y1="166" x2="336" y2="166" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="302" y1="200" x2="336" y2="200" stroke="#9cc9ea" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="302" y1="200" x2="302" y2="234" stroke="#9cc9ea" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="302" y1="234" x2="336" y2="234" stroke="#9cc9ea" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="302" y1="234" x2="302" y2="268" stroke="#9cc9ea" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="302" y1="268" x2="336" y2="268" stroke="#9cc9ea" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="302" y1="302" x2="302" y2="336" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="336" y1="30" x2="370" y2="30" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="336" y1="30" x2="336" y2="64" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="336" y1="64" x2="370" y2="64" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="336" y1="64" x2="336" y2="98" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="336" y1="98" x2="370" y2="98" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="336" y1="166" x2="370" y2="166" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="336" y1="200" x2="336" y2="234" stroke="#9cc9ea" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="336" y1="302" x2="370" y2="302" stroke="#9cc9ea" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="336" y1="302" x2="336" y2="336" stroke="#9cc9ea" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="336" y1="336" x2="336" y2="370" stroke="#9cc9ea" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="370" y1="64" x2="370" y2="98" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="370" y1="98" x2="370" y2="132" stroke="#eea66f" stroke-width="4" stroke-linecap="round"/>
  <line x1="370" y1="200" x2="370" y2="234" stroke="#9cc9ea" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="370" y1="234" x2="370" y2="268" stroke="#9cc9ea" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="370" y1="268" x2="370" y2="302" stroke="#9cc9ea" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="30" cy="30" r="2.2" fill="currentColor"/>
  <circle cx="30" cy="64" r="2.2" fill="currentColor"/>
  <circle cx="30" cy="98" r="2.2" fill="currentColor"/>
  <circle cx="30" cy="132" r="2.2" fill="currentColor"/>
  <circle cx="30" cy="166" r="2.2" fill="currentColor"/>
  <circle cx="30" cy="200" r="2.2" fill="currentColor"/>
  <circle cx="30" cy="234" r="2.2" fill="currentColor"/>
  <circle cx="30" cy="268" r="2.2" fill="currentColor"/>
  <circle cx="30" cy="302" r="2.2" fill="currentColor"/>
  <circle cx="30" cy="336" r="2.2" fill="currentColor"/>
  <circle cx="30" cy="370" r="2.2" fill="currentColor"/>
  <circle cx="64" cy="30" r="2.2" fill="currentColor"/>
  <circle cx="64" cy="64" r="2.2" fill="currentColor"/>
  <circle cx="64" cy="98" r="2.2" fill="currentColor"/>
  <circle cx="64" cy="132" r="2.2" fill="currentColor"/>
  <circle cx="64" cy="166" r="2.2" fill="currentColor"/>
  <circle cx="64" cy="200" r="2.2" fill="currentColor"/>
  <circle cx="64" cy="234" r="2.2" fill="currentColor"/>
  <circle cx="64" cy="268" r="2.2" fill="currentColor"/>
  <circle cx="64" cy="302" r="2.2" fill="currentColor"/>
  <circle cx="64" cy="336" r="2.2" fill="currentColor"/>
  <circle cx="64" cy="370" r="2.2" fill="currentColor"/>
  <circle cx="98" cy="30" r="2.2" fill="currentColor"/>
  <circle cx="98" cy="64" r="2.2" fill="currentColor"/>
  <circle cx="98" cy="98" r="2.2" fill="currentColor"/>
  <circle cx="98" cy="132" r="2.2" fill="currentColor"/>
  <circle cx="98" cy="166" r="2.2" fill="currentColor"/>
  <circle cx="98" cy="200" r="2.2" fill="currentColor"/>
  <circle cx="98" cy="234" r="2.2" fill="currentColor"/>
  <circle cx="98" cy="268" r="2.2" fill="currentColor"/>
  <circle cx="98" cy="302" r="2.2" fill="currentColor"/>
  <circle cx="98" cy="336" r="2.2" fill="currentColor"/>
  <circle cx="98" cy="370" r="2.2" fill="currentColor"/>
  <circle cx="132" cy="30" r="2.2" fill="currentColor"/>
  <circle cx="132" cy="64" r="2.2" fill="currentColor"/>
  <circle cx="132" cy="98" r="2.2" fill="currentColor"/>
  <circle cx="132" cy="132" r="2.2" fill="currentColor"/>
  <circle cx="132" cy="166" r="2.2" fill="currentColor"/>
  <circle cx="132" cy="200" r="2.2" fill="currentColor"/>
  <circle cx="132" cy="234" r="2.2" fill="currentColor"/>
  <circle cx="132" cy="268" r="2.2" fill="currentColor"/>
  <circle cx="132" cy="302" r="2.2" fill="currentColor"/>
  <circle cx="132" cy="336" r="2.2" fill="currentColor"/>
  <circle cx="132" cy="370" r="2.2" fill="currentColor"/>
  <circle cx="166" cy="30" r="2.2" fill="currentColor"/>
  <circle cx="166" cy="64" r="2.2" fill="currentColor"/>
  <circle cx="166" cy="98" r="2.2" fill="currentColor"/>
  <circle cx="166" cy="132" r="2.2" fill="currentColor"/>
  <circle cx="166" cy="166" r="2.2" fill="currentColor"/>
  <circle cx="166" cy="200" r="2.2" fill="currentColor"/>
  <circle cx="166" cy="234" r="2.2" fill="currentColor"/>
  <circle cx="166" cy="268" r="2.2" fill="currentColor"/>
  <circle cx="166" cy="302" r="2.2" fill="currentColor"/>
  <circle cx="166" cy="336" r="2.2" fill="currentColor"/>
  <circle cx="166" cy="370" r="2.2" fill="currentColor"/>
  <circle cx="200" cy="30" r="2.2" fill="currentColor"/>
  <circle cx="200" cy="64" r="2.2" fill="currentColor"/>
  <circle cx="200" cy="98" r="2.2" fill="currentColor"/>
  <circle cx="200" cy="132" r="2.2" fill="currentColor"/>
  <circle cx="200" cy="166" r="2.2" fill="currentColor"/>
  <circle cx="200" cy="200" r="2.2" fill="currentColor"/>
  <circle cx="200" cy="234" r="2.2" fill="currentColor"/>
  <circle cx="200" cy="268" r="2.2" fill="currentColor"/>
  <circle cx="200" cy="302" r="2.2" fill="currentColor"/>
  <circle cx="200" cy="336" r="2.2" fill="currentColor"/>
  <circle cx="200" cy="370" r="2.2" fill="currentColor"/>
  <circle cx="234" cy="30" r="2.2" fill="currentColor"/>
  <circle cx="234" cy="64" r="2.2" fill="currentColor"/>
  <circle cx="234" cy="98" r="2.2" fill="currentColor"/>
  <circle cx="234" cy="132" r="2.2" fill="currentColor"/>
  <circle cx="234" cy="166" r="2.2" fill="currentColor"/>
  <circle cx="234" cy="200" r="2.2" fill="currentColor"/>
  <circle cx="234" cy="234" r="2.2" fill="currentColor"/>
  <circle cx="234" cy="268" r="2.2" fill="currentColor"/>
  <circle cx="234" cy="302" r="2.2" fill="currentColor"/>
  <circle cx="234" cy="336" r="2.2" fill="currentColor"/>
  <circle cx="234" cy="370" r="2.2" fill="currentColor"/>
  <circle cx="268" cy="30" r="2.2" fill="currentColor"/>
  <circle cx="268" cy="64" r="2.2" fill="currentColor"/>
  <circle cx="268" cy="98" r="2.2" fill="currentColor"/>
  <circle cx="268" cy="132" r="2.2" fill="currentColor"/>
  <circle cx="268" cy="166" r="2.2" fill="currentColor"/>
  <circle cx="268" cy="200" r="2.2" fill="currentColor"/>
  <circle cx="268" cy="234" r="2.2" fill="currentColor"/>
  <circle cx="268" cy="268" r="2.2" fill="currentColor"/>
  <circle cx="268" cy="302" r="2.2" fill="currentColor"/>
  <circle cx="268" cy="336" r="2.2" fill="currentColor"/>
  <circle cx="268" cy="370" r="2.2" fill="currentColor"/>
  <circle cx="302" cy="30" r="2.2" fill="currentColor"/>
  <circle cx="302" cy="64" r="2.2" fill="currentColor"/>
  <circle cx="302" cy="98" r="2.2" fill="currentColor"/>
  <circle cx="302" cy="132" r="2.2" fill="currentColor"/>
  <circle cx="302" cy="166" r="2.2" fill="currentColor"/>
  <circle cx="302" cy="200" r="2.2" fill="currentColor"/>
  <circle cx="302" cy="234" r="2.2" fill="currentColor"/>
  <circle cx="302" cy="268" r="2.2" fill="currentColor"/>
  <circle cx="302" cy="302" r="2.2" fill="currentColor"/>
  <circle cx="302" cy="336" r="2.2" fill="currentColor"/>
  <circle cx="302" cy="370" r="2.2" fill="currentColor"/>
  <circle cx="336" cy="30" r="2.2" fill="currentColor"/>
  <circle cx="336" cy="64" r="2.2" fill="currentColor"/>
  <circle cx="336" cy="98" r="2.2" fill="currentColor"/>
  <circle cx="336" cy="132" r="2.2" fill="currentColor"/>
  <circle cx="336" cy="166" r="2.2" fill="currentColor"/>
  <circle cx="336" cy="200" r="2.2" fill="currentColor"/>
  <circle cx="336" cy="234" r="2.2" fill="currentColor"/>
  <circle cx="336" cy="268" r="2.2" fill="currentColor"/>
  <circle cx="336" cy="302" r="2.2" fill="currentColor"/>
  <circle cx="336" cy="336" r="2.2" fill="currentColor"/>
  <circle cx="336" cy="370" r="2.2" fill="currentColor"/>
  <circle cx="370" cy="30" r="2.2" fill="currentColor"/>
  <circle cx="370" cy="64" r="2.2" fill="currentColor"/>
  <circle cx="370" cy="98" r="2.2" fill="currentColor"/>
  <circle cx="370" cy="132" r="2.2" fill="currentColor"/>
  <circle cx="370" cy="166" r="2.2" fill="currentColor"/>
  <circle cx="370" cy="200" r="2.2" fill="currentColor"/>
  <circle cx="370" cy="234" r="2.2" fill="currentColor"/>
  <circle cx="370" cy="268" r="2.2" fill="currentColor"/>
  <circle cx="370" cy="302" r="2.2" fill="currentColor"/>
  <circle cx="370" cy="336" r="2.2" fill="currentColor"/>
  <circle cx="370" cy="370" r="2.2" fill="currentColor"/>
</svg>
</div>

*A sample with $p = \frac12$ on an $11 \times 11$ piece of the grid. The largest open cluster (orange) touches all four
sides; the smaller clusters are blue.*

**Monotonicity.** $\theta(p)$ never decreases as $p$ grows. *Proof by coupling:* give every bond an independent
uniform number $U_e$ in $[0,1]$, and call it open at level $p$ if $U_e < p$. For $p < p'$, every bond open at level
$p$ is open at level $p'$, so the origin's cluster can only grow; and at each level the bonds are open independently
with the right probability. So $\theta(p) \le \theta(p')$. $\square$

So there is a single threshold, the **critical probability**

$$
p_c = \sup\{p : \theta(p) = 0\}.
$$

Below $p_c$ all clusters are finite (almost surely); above it, the origin is in an infinite cluster with positive
probability. By the zero-one law (Section 17.6), the event "some infinite open cluster exists somewhere" has
probability 0 or 1 for each $p$, since it does not depend on any finite set of bonds; it is 0 below $p_c$ and 1 above.
Michael Aizenman, Harry Kesten and Charles Newman (1987) proved that above $p_c$ the infinite cluster is **unique**,
and Robert Burton and Michael Keane (1989) gave a famously short proof.

### Bounds by counting paths

A **self-avoiding path** from the origin is a path along bonds that never revisits a vertex. Let $\sigma(n)$ be the
number of self-avoiding paths of length $n$ from the origin. The first step has 4 choices and each later step at most
3 (it cannot go straight back), so $\sigma(n) \le 4 \cdot 3^{n-1}$. *Check:* the exact counts begin
$\sigma(1), \ldots, \sigma(6) = 4, 12, 36, 100, 284, 780$, and $100 < 4 \cdot 3^3 = 108$.

**Theorem 20.1.** For bond percolation on $\mathbb{Z}^2$, $\frac13 \le p_c \le \frac23$.

*Proof of $p_c \ge \frac13$.* If the origin's cluster is infinite, then for every $n$ there is an open self-avoiding
path of length $n$ from the origin. Let $N_n$ be the number of such open paths. A given path of length $n$ is open with
probability $p^n$, so by Markov's inequality

$$
\theta(p) \le P(N_n \ge 1) \le E[N_n] = \sigma(n)p^n \le \tfrac43 (3p)^n .
$$

If $p < \frac13$ the right side tends to 0 as $n \to \infty$, so $\theta(p) = 0$. Hence $p_c \ge \frac13$.

*Proof of $p_c \le \frac23$ (Peierls' argument).* The **dual lattice** has a vertex at the centre of each square face,
that is, at the points $(x + \frac12, y + \frac12)$, and a **dual bond** crossing each bond of $\mathbb{Z}^2$ at right
angles. Declare a dual bond closed when the bond it crosses is closed. A finite set of vertices is a whole open
cluster only if the bonds leaving it are all closed, and the dual bonds crossing them contain a **closed dual circuit**
surrounding the set: a closed loop that fences it in. (This is the planar fact behind the whole subject; it is intuitive
from a picture, and its careful proof is in Grimmett's book.)

Let $B_m$ be the square of vertices with both coordinates between $-m$ and $m$. Consider dual circuits surrounding
$B_m$. Such a circuit of length $n$ must cross the positive $x$-axis, so it uses a dual bond from
$(k + \frac12, -\frac12)$ to $(k + \frac12, \frac12)$ for some $k \ge 0$; since it goes round the origin in $n$ steps,
$k < n$. Starting from that bond, it is a closed self-avoiding path of length $n$ on the dual lattice, so there are at
most $n \cdot 4 \cdot 3^{n-1}$ such circuits, and each is closed with probability
$(1-p)^n$. A circuit around $B_m$ has length at least $8m + 4$. So with $q = 1 - p$,

$$
P(\text{some closed dual circuit surrounds } B_m) \le \sum_{n \ge 8m+4} n \cdot 4 \cdot 3^{n-1} q^n .
$$

If $p > \frac23$, then $3q < 1$, the full series converges, and its tail is less than 1 once $m$ is large enough. Fix
such an $m$. The circuits around $B_m$ use only dual bonds crossing bonds outside $B_m$, so the event "no closed dual
circuit surrounds $B_m$" is independent of the event "every bond inside $B_m$ is open", which has positive probability
$p^{(\text{number of bonds in } B_m)}$. If both happen, the origin is joined to the boundary of $B_m$ and nothing fences
$B_m$ in, so the origin's cluster is infinite. Hence $\theta(p) > 0$, and $p_c \le \frac23$. $\square$

The constant 3 in these proofs is crude. The true growth rate of self-avoiding paths is the **connective constant**
$\mu = \lim_n \sigma(n)^{1/n}$ (the limit exists because $\sigma(m+n) \le \sigma(m)\sigma(n)$, Hammersley and Morton
1954), and the same argument gives $p_c \ge 1/\mu$. For the square lattice $\mu \approx 2.638$; nobody knows an exact
formula for it (see 20.6).

### The exact answer

**Theorem 20.2 (Harris 1960, Kesten 1980).** For bond percolation on $\mathbb{Z}^2$, $p_c = \frac12$, and at
$p = \frac12$ there is no infinite open cluster: $\theta(\frac12) = 0$.

Theodore Harris proved $\theta(\frac12) = 0$ in 1960; Harry Kesten proved $p_c \le \frac12$ twenty years later. The
reason the answer is exactly $\frac12$ is **self-duality**. The dual lattice is another copy of the square lattice,
and a bond is closed with probability $1 - p$; at $p = \frac12$ the open bonds and the closed dual bonds have exactly the
same law. One clean consequence can be proved in a few lines:

**Theorem 20.3.** Let $R$ be the rectangle of vertices $\{0, \ldots, n+1\} \times \{0, \ldots, n\}$, one longer than it
is tall. At $p = \frac12$, the probability that an open path inside $R$ joins its left side to its right side is
exactly $\frac12$.

*Proof sketch.* A planar topological fact (like the game of Hex, where someone must win) says that **exactly one** of
two things happens: an open left-to-right crossing of $R$, or a closed top-to-bottom crossing of the matching dual
rectangle. That dual rectangle is a copy of $R$ turned through a right angle, and at $p = \frac12$ closed dual bonds
have the same law as open bonds. So the two events have equal probability, and since exactly one occurs, each has
probability $\frac12$. $\square$

Kesten's proof turns this "crossings are balanced at $\frac12$" into the full theorem, using crossings of larger and
larger rectangles (Russo-Seymour-Welsh estimates) and the sharpness of the transition. On other lattices the
threshold is usually not a nice number: for **site** percolation on the square lattice (vertices open, not bonds),
$p_c \approx 0.5927$ numerically and no closed form is known; for bonds on the cubic lattice $\mathbb{Z}^3$,
$p_c \approx 0.2488$. But site percolation on the **triangular** lattice is self-matching, and its $p_c$ is exactly
$\frac12$; this is the model in which conformal invariance was proved (20.3).

## 20.2 Random matrices

*Level: expert.*

### Wigner's semicircle

In the 1950s the physicist Eugene Wigner wanted to understand the energy levels of heavy atomic nuclei, which are
eigenvalues of operators too complicated to write down. His idea: replace the unknown operator by a **random**
symmetric matrix and ask what its eigenvalues look like. The answer is surprisingly universal.

**Definition.** A **Wigner matrix** is an $n \times n$ symmetric matrix $M$ whose entries on and above the diagonal are
independent, with the off-diagonal entries having mean 0 and variance 1 (for example $\pm 1$ coin flips), and the
whole matrix scaled by $1/\sqrt n$. Since $M$ is real symmetric, it has $n$ real eigenvalues $\lambda_1, \ldots,
\lambda_n$. Their **empirical distribution** puts mass $\frac1n$ at each.

**Theorem 20.4 (Wigner's semicircle law, 1955 and 1958).** As $n \to \infty$, the empirical distribution of the
eigenvalues of a Wigner matrix converges to the **semicircle distribution** with density

$$
\rho(x) = \frac{1}{2\pi}\sqrt{4 - x^2}, \qquad -2 \le x \le 2 .
$$

(Wigner proved convergence of the expected distribution under extra moment assumptions; the almost sure version under
just variance 1 came later.)

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 480 240" role="img" aria-label="The semicircle density, one over two pi times the square root of four minus x squared, on the interval from minus 2 to 2. It is zero at the ends and has its maximum 1 over pi, about 0.318, at x equals 0">
  <line x1="40" y1="200" x2="440" y2="200" stroke="currentColor" stroke-width="1.5"/>
  <line x1="240" y1="200" x2="240" y2="26" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" stroke-opacity="0.6"/>
  <polygon fill="#9cc9ea" fill-opacity="0.45" stroke="none" points="80.0,200.0 84.0,164.6 88.0,150.3 92.0,139.5 96.0,130.6 100.0,122.9 104.0,116.2 108.0,110.1 112.0,104.5 116.0,99.4 120.0,94.7 124.0,90.4 128.0,86.3 132.0,82.6 136.0,79.1 140.0,75.8 144.0,72.7 148.0,69.8 152.0,67.1 156.0,64.5 160.0,62.2 164.0,59.9 168.0,57.9 172.0,55.9 176.0,54.1 180.0,52.5 184.0,50.9 188.0,49.5 192.0,48.2 196.0,47.0 200.0,45.9 204.0,44.9 208.0,44.1 212.0,43.3 216.0,42.6 220.0,42.1 224.0,41.6 228.0,41.3 232.0,41.0 236.0,40.9 240.0,40.8 244.0,40.9 248.0,41.0 252.0,41.3 256.0,41.6 260.0,42.1 264.0,42.6 268.0,43.3 272.0,44.1 276.0,44.9 280.0,45.9 284.0,47.0 288.0,48.2 292.0,49.5 296.0,50.9 300.0,52.5 304.0,54.1 308.0,55.9 312.0,57.9 316.0,59.9 320.0,62.2 324.0,64.5 328.0,67.1 332.0,69.8 336.0,72.7 340.0,75.8 344.0,79.1 348.0,82.6 352.0,86.3 356.0,90.4 360.0,94.7 364.0,99.4 368.0,104.5 372.0,110.1 376.0,116.2 380.0,122.9 384.0,130.6 388.0,139.5 392.0,150.3 396.0,164.6 400.0,200.0"/>
  <polyline fill="none" stroke="#eea66f" stroke-width="3" points="80.0,200.0 84.0,164.6 88.0,150.3 92.0,139.5 96.0,130.6 100.0,122.9 104.0,116.2 108.0,110.1 112.0,104.5 116.0,99.4 120.0,94.7 124.0,90.4 128.0,86.3 132.0,82.6 136.0,79.1 140.0,75.8 144.0,72.7 148.0,69.8 152.0,67.1 156.0,64.5 160.0,62.2 164.0,59.9 168.0,57.9 172.0,55.9 176.0,54.1 180.0,52.5 184.0,50.9 188.0,49.5 192.0,48.2 196.0,47.0 200.0,45.9 204.0,44.9 208.0,44.1 212.0,43.3 216.0,42.6 220.0,42.1 224.0,41.6 228.0,41.3 232.0,41.0 236.0,40.9 240.0,40.8 244.0,40.9 248.0,41.0 252.0,41.3 256.0,41.6 260.0,42.1 264.0,42.6 268.0,43.3 272.0,44.1 276.0,44.9 280.0,45.9 284.0,47.0 288.0,48.2 292.0,49.5 296.0,50.9 300.0,52.5 304.0,54.1 308.0,55.9 312.0,57.9 316.0,59.9 320.0,62.2 324.0,64.5 328.0,67.1 332.0,69.8 336.0,72.7 340.0,75.8 344.0,79.1 348.0,82.6 352.0,86.3 356.0,90.4 360.0,94.7 364.0,99.4 368.0,104.5 372.0,110.1 376.0,116.2 380.0,122.9 384.0,130.6 388.0,139.5 392.0,150.3 396.0,164.6 400.0,200.0"/>
  <circle cx="240" cy="40.8" r="4" fill="#7ccf9a" stroke="currentColor"/>
  <text x="250" y="34" font-size="12" fill="currentColor">1/π ≈ 0.318</text>
  <text x="80" y="218" text-anchor="middle" font-size="12" fill="currentColor">−2</text>
  <text x="240" y="218" text-anchor="middle" font-size="12" fill="currentColor">0</text>
  <text x="400" y="218" text-anchor="middle" font-size="12" fill="currentColor">2</text>
  <text x="240" y="236" text-anchor="middle" font-size="13" fill="currentColor">eigenvalue x</text>
</svg>
</div>

### Why the Catalan numbers appear

The **method of moments** proves the theorem by comparing moments. The average of the $k$-th powers of the
eigenvalues is a trace: $\frac1n\sum_i \lambda_i^k = \frac1n \operatorname{tr}(M^k)$, because the eigenvalues of $M^k$
are the $\lambda_i^k$ and the trace is their sum. And a trace can be expanded as a sum over closed walks:

$$
\frac1n\operatorname{tr}(M^k) = \frac1n\sum_{i_1, \ldots, i_k} M_{i_1 i_2}M_{i_2 i_3}\cdots M_{i_k i_1} .
$$

Each term is a closed walk $i_1 \to i_2 \to \cdots \to i_k \to i_1$ on the indices $\{1, \ldots, n\}$. Take
expectations. An entry that appears exactly once in a term has mean 0 and kills it, so every edge $\{i, j\}$ the walk
uses must be used at least twice. A walk of length $k$ then uses at most $k/2$ distinct edges and so visits at most
$k/2 + 1$ distinct indices. Each entry carries a factor $n^{-1/2}$, so each term is of size $n^{-k/2}$, and there are
about $n^{(\text{number of distinct indices})}$ choices of labels.

- For odd $k$, at most $(k+1)/2$ distinct indices, so the total is at most of order
  $\frac1n \cdot n^{(k+1)/2}\cdot n^{-k/2} = n^{-1/2} \to 0$. Odd moments vanish, as they do for the symmetric
  semicircle.
- For $k = 2m$, the terms with the maximum $m + 1$ distinct indices dominate; all others are smaller by a factor
  $1/n$. In such a walk, $m$ edges each used exactly twice connect $m + 1$ vertices, so they form a **tree**, and the
  walk goes out and back along each edge once: a depth-first tour of a rooted plane tree. Each edge contributes
  $E[M_{ij}^2] = 1/n$. The number of rooted plane trees with $m$ edges is the **Catalan number**
  $C_m = \frac{1}{m+1}\binom{2m}{m}$ ([Combinatorics Chapter 8](../combinatorics/08-Catalan-Numbers-and-Lattice-Paths.md)),
  and the labels give $n(n-1)\cdots(n-m) \approx n^{m+1}$ choices. So

$$
E\Big[\frac1n \operatorname{tr}(M^{2m})\Big] \to \frac1n \cdot C_m \cdot n^{m+1} \cdot n^{-m} = C_m .
$$

Finally, the moments of the semicircle are exactly the Catalan numbers: $\int_{-2}^{2} x^{2m}\rho(x)\,dx = C_m$, that
is $1, 1, 2, 5, 14, \ldots$ for $m = 0, 1, 2, 3, 4$. A distribution on a bounded interval is determined by its moments,
so the expected empirical distribution converges to the semicircle. (Turning convergence of expectations into almost
sure convergence takes a variance estimate and Borel-Cantelli, Chapter 17.)

*Check in Python* (standard library only; a $200 \times 200$ matrix of $\pm 1/\sqrt{200}$ entries):

```python
import random
def trace_moments(n, seed=1):
    random.seed(seed)
    s = n ** -0.5
    M = [[0.0] * n for _ in range(n)]
    for i in range(n):
        for j in range(i, n):
            M[i][j] = M[j][i] = random.choice((-s, s))
    M2 = [[sum(M[i][k] * M[k][j] for k in range(n)) for j in range(n)] for i in range(n)]
    m2 = sum(M2[i][i] for i in range(n)) / n
    m4 = sum(M2[i][j] * M2[j][i] for i in range(n) for j in range(n)) / n
    return m2, m4
print(trace_moments(200))   # about (1.0, 2.02): Catalan numbers C1 = 1, C2 = 2
```

### Beyond the semicircle

The semicircle is the coarse picture. The fine structure, the spacing between neighbouring eigenvalues and the
behaviour of the largest one, is also universal:

- Neighbouring eigenvalues **repel**: the chance of two being very close is much smaller than for independent random
  points. For complex Hermitian Gaussian matrices (the **Gaussian Unitary Ensemble**, GUE), the correlation between
  eigenvalues at scaled distance $u$ is $1 - \big(\frac{\sin \pi u}{\pi u}\big)^2$.
- The largest eigenvalue sits near 2, with fluctuations of size $n^{-2/3}$ described by the **Tracy-Widom
  distribution** (Craig Tracy and Harold Widom, 1994). The same distribution turned up, unexpectedly, in the length
  of the longest increasing subsequence of a random permutation (Jinho Baik, Percy Deift and Kurt Johansson, 1999),
  and in models of random growth.
- That these local laws hold for general entry distributions, not only Gaussian ones (**universality**), was proved
  around 2010 by László Erdős, Benjamin Schlein and Horng-Tzer Yau, and independently by Terence Tao and Van Vu.

### Random matrices and the zeta function (honestly)

In 1972 the number theorist Hugh Montgomery was studying the spacing of the zeros of the Riemann zeta function on the
critical line ([Number Theory Chapter 14](../number-theory/14-The-Zeta-Function-and-the-Prime-Number-Theorem.md)).
Assuming the Riemann hypothesis, he proved partial results and conjectured that the pair correlation of the suitably
rescaled zeros is $1 - \big(\frac{\sin \pi u}{\pi u}\big)^2$. When he showed this at the Institute for Advanced Study,
Freeman Dyson recognised it as the GUE formula. Andrew Odlyzko's computations of millions of zeros at great height
(from 1987 on) matched the GUE predictions strikingly well.

What this is and is not: it is a precise, well-tested **conjecture** (Montgomery proved it only for a restricted range
of test functions, assuming the Riemann hypothesis). It suggests that the zeros might be eigenvalues of some unknown
self-adjoint operator, an old idea attributed to Hilbert and Pólya, but no such operator is known, and the random
matrix connection has not led to a proof of the Riemann hypothesis. It has led to remarkably accurate conjectures about
moments of the zeta function (Jon Keating and Nina Snaith, 2000).

## 20.3 SLE and conformal invariance

*Level: expert.*

### Scaling limits

Run percolation on a finer and finer grid, with mesh $\delta \to 0$, inside a fixed region of the plane. At $p_c$ the
clusters have no characteristic size: they occur at every scale. Physicists predicted in the 1980s and early 1990s
that the large-scale picture should have a limit, and that the limit should be **conformally invariant**: unchanged
by any map of the region that preserves angles (a conformal map, such as $z \mapsto z^2$ on a suitable region of the
complex plane). In 1992 John Cardy used conformal field theory to predict an exact formula for the probability of a
crossing between two arcs of the boundary of any region, now called **Cardy's formula**. These were non-rigorous
predictions; mathematicians spent the next decade trying to understand them.

### Schramm's insight

Look at the **interface** between an open cluster touching one arc of the boundary and a closed cluster touching the
other: a random curve. Oded Schramm noticed in 1999 (published 2000) that two properties pin such a curve down:

1. **conformal invariance**: the curve in one region is the conformal image of the curve in another;
2. the **domain Markov property**: given the first part of the curve, the rest is the same kind of curve in the region
   with the first part cut out.

Using Charles Loewner's 1923 equation, which encodes a growing curve in the upper half-plane by a real "driving
function" $W_t$ via

$$
\frac{\partial}{\partial t} g_t(z) = \frac{2}{g_t(z) - W_t}, \qquad g_0(z) = z ,
$$

Schramm showed that these two properties force $W_t$ to have independent, stationary increments and Brownian scaling,
so $W_t = \sqrt{\kappa}\,B_t$ for a standard Brownian motion $B_t$ ([Chapter 16](16-Brownian-Motion.md)) and a single
parameter $\kappa \ge 0$. The resulting random curves are **Schramm-Loewner evolutions**, $\text{SLE}_\kappa$. A one
parameter family of random curves, each driven by Brownian motion, should describe the boundaries in every
conformally invariant model.

The value of $\kappa$ controls the shape: for $\kappa \le 4$ the curve is simple (never touches itself), for
$4 < \kappa < 8$ it touches itself and swallows regions, for $\kappa \ge 8$ it fills space. Its fractal dimension is
$1 + \kappa/8$ for $\kappa \le 8$ (proved by Vincent Beffara, 2008).

### The theorems

- Gregory Lawler, Oded Schramm and Wendelin Werner (2001) used SLE to prove Benoît Mandelbrot's conjecture that the
  outer boundary of planar Brownian motion has fractal dimension $\frac43$, and to compute the **intersection
  exponents** of Brownian motion that physicists had predicted.
- Stanislav Smirnov (2001) proved Cardy's formula and conformal invariance for **site percolation on the triangular
  lattice** at $p_c = \frac12$; with the work of Federico Camia and Charles Newman, the interfaces converge to
  $\text{SLE}_6$. Its dimension $1 + 6/8 = \frac74$ is the dimension of percolation cluster boundaries. Smirnov and
  Werner then derived critical exponents, for example $\theta(p) = (p - \frac12)^{5/36 + o(1)}$ as $p$ decreases to
  $\frac12$ on the triangular lattice.
- Lawler, Schramm and Werner (2004) proved that the **loop-erased random walk** converges to $\text{SLE}_2$, and the
  boundary of the **uniform spanning tree** to $\text{SLE}_8$.
- Smirnov, with Dmitry Chelkak, proved conformal invariance for the critical **Ising model** on the square lattice,
  whose interfaces converge to $\text{SLE}_3$.

Werner received a Fields Medal in 2006 and Smirnov in 2010, both for this circle of work. Schramm, who started it, died
in a hiking accident in 2008. Hugo Duminil-Copin's 2022 Fields Medal was for work on phase transitions in statistical
physics models, including percolation and Ising.

**What is still open here.** Conformal invariance has been proved for very few lattice models. For bond percolation on
$\mathbb{Z}^2$, the model of 20.1, it is still unproved, though nobody doubts it. The **self-avoiding walk** in the
plane is conjectured to converge to $\text{SLE}_{8/3}$ (Lawler, Schramm and Werner showed this is the only possible
conformally invariant limit), which would give its exponents, for example that a typical walk of $n$ steps reaches
distance about $n^{3/4}$; none of that is proved.

## 20.4 Concentration of measure

*Level: expert (proofs at advanced level).*

### A strange fact about high dimensions

Pick a point uniformly on the unit sphere in $\mathbb{R}^n$ (the set of $x$ with $x_1^2 + \cdots + x_n^2 = 1$). How
big is its first coordinate? By symmetry all coordinates have the same distribution, and their squares add to 1, so
$E[x_1^2] = \frac1n$. By Chebyshev's inequality,

$$
P(|x_1| > \varepsilon) \le \frac{1}{n\varepsilon^2} .
$$

In 1000 dimensions, with $\varepsilon = 0.1$, at most 10% of the sphere lies more than 0.1 away from the "equator"
$x_1 = 0$. The true answer is far smaller: $P(|x_1| > \varepsilon) \le 2e^{-n\varepsilon^2/2}$, which is about 0.013 here.
Almost all the area of a high-dimensional sphere is near any equator you choose. Paul Lévy noticed this, and Vitali
Milman made it a central tool of geometry from the 1970s on: in high dimensions, **every reasonable function of many
independent or weakly dependent parts is nearly constant**. Concentration is the law of large numbers grown up.

### The Azuma-Hoeffding inequality

**Lemma 20.5 (Hoeffding's lemma).** If $E[X] = 0$ and $|X| \le c$, then $E[e^{\lambda X}] \le e^{\lambda^2c^2/2}$ for
every real $\lambda$.

*Proof.* The function $x \mapsto e^{\lambda x}$ is convex, so on $[-c, c]$ it lies below its chord:

$$
e^{\lambda x} \le \frac{c - x}{2c}e^{-\lambda c} + \frac{c + x}{2c}e^{\lambda c} .
$$

Take expectations, using $E[X] = 0$: $E[e^{\lambda X}] \le \frac12(e^{-\lambda c} + e^{\lambda c}) = \cosh(\lambda c)$.
Comparing power series term by term, $\cosh y = \sum_k \frac{y^{2k}}{(2k)!} \le \sum_k \frac{y^{2k}}{2^k k!} =
e^{y^2/2}$, because $(2k)! \ge 2^k k!$. $\square$

**Theorem 20.6 (Azuma-Hoeffding inequality).** Let $M_0, M_1, \ldots, M_n$ be a martingale with bounded differences
$|M_i - M_{i-1}| \le c_i$. Then for every $t > 0$,

$$
P(|M_n - M_0| \ge t) \le 2\exp\Big(-\frac{t^2}{2\sum_{i=1}^n c_i^2}\Big).
$$

*Proof.* Let $D_i = M_i - M_{i-1}$. Given the past, $D_i$ has mean 0 (the martingale property) and $|D_i| \le c_i$, so
Lemma 20.5, applied conditionally, gives $E[e^{\lambda D_i} \mid \text{past}] \le e^{\lambda^2c_i^2/2}$. Peeling off
one difference at a time with the tower rule ([Chapter 11](11-Joint-Distributions.md)):

$$
E[e^{\lambda(M_n - M_0)}] = E\big[e^{\lambda(M_{n-1} - M_0)} E[e^{\lambda D_n} \mid \text{past}]\big] \le e^{\lambda^2c_n^2/2}E[e^{\lambda(M_{n-1} - M_0)}] \le \cdots \le e^{\lambda^2\sum c_i^2/2}.
$$

By Markov's inequality applied to $e^{\lambda(M_n - M_0)}$, for $\lambda > 0$:

$$
P(M_n - M_0 \ge t) \le e^{-\lambda t + \lambda^2\sum c_i^2/2}.
$$

The exponent is smallest at $\lambda = t/\sum c_i^2$, giving $\exp(-t^2/(2\sum c_i^2))$. The same bound holds for
$M_0 - M_n$ (apply it to the martingale $-M$), and adding the two gives the factor 2. $\square$

For a fair $\pm1$ random walk ($c_i = 1$): $P(|S_n| \ge t) \le 2e^{-t^2/(2n)}$. With $n = 10{,}000$ and $t = 400$
(four standard deviations), the bound is $2e^{-8} \approx 6.7 \times 10^{-4}$; the normal approximation gives about
$6.3 \times 10^{-5}$. The bound is not sharp, but it is a guarantee with no approximation, valid for every $n$.

### Bounded differences

The power of the theorem is that it applies to **any** function of independent variables, through a martingale built
from it. Let $f(X_1, \ldots, X_n)$ be a function of independent random variables such that changing any one argument
changes $f$ by at most $c_i$. The **Doob martingale** $M_i = E[f \mid X_1, \ldots, X_i]$ reveals the variables one at a
time; $M_0 = E[f]$ and $M_n = f$, and the bounded-difference condition makes $|M_i - M_{i-1}| \le c_i$. So:

**Corollary 20.7 (bounded differences).** $P(|f - E f| \ge t) \le 2\exp\big(-t^2/(2\sum c_i^2)\big)$.

Colin McDiarmid (1989) sharpened the constant to $2\exp(-2t^2/\sum c_i^2)$.

**Worked example 1 (empty bins).** Throw $n$ balls independently into $n$ bins. The number $Y$ of empty bins has mean
$n(1 - \frac1n)^n \approx n/e$; for $n = 10{,}000$, about 3679. Moving one ball changes $Y$ by at most 1, so
$P(|Y - E Y| \ge t) \le 2e^{-t^2/(2n)}$. With $t = 500$: $2e^{-12.5} \approx 7.5 \times 10^{-6}$. The variables
"ball $i$'s bin" are independent, but the counts of different bins are not; the martingale method does not care.
(The actual standard deviation is about 31, so the bound is loose by a constant factor, but it gets the $\sqrt n$
scale right with no computation of variances.)

**Worked example 2 (chromatic number).** The chromatic number $\chi$ of the random graph $G(n, \frac12)$ (Chapter 19)
is around $n/(2\log_2 n)$, a fact that took decades to establish (Béla Bollobás, 1988). Yet concentration is easy:
reveal the graph vertex by vertex (all edges from vertex $i$ to earlier vertices at step $i$); one vertex's edges can
change $\chi$ by at most 1 (give it a new colour). So $\chi$ is within about $\sqrt n$ of its mean with high
probability, without knowing the mean (Eli Shamir and Joel Spencer, 1987).

**Johnson-Lindenstrauss lemma (1984, statement).** Any $N$ points in a Euclidean space of any dimension can be mapped
into $\mathbb{R}^k$ with $k = O(\varepsilon^{-2}\log N)$ so that all pairwise distances change by a factor between
$1 - \varepsilon$ and $1 + \varepsilon$. A random linear projection works with high probability, because the length
of a fixed vector's random projection is concentrated. This is used in practice to compress high-dimensional data.

Michel Talagrand's inequalities (1995) took concentration much further, to functions that are only Lipschitz in a
weaker, convex sense, and became a standard tool in combinatorics, statistics and computer science.

## 20.5 Probability in physics and machine learning

*Level: expert (survey).*

**Statistical mechanics.** Ludwig Boltzmann and Josiah Willard Gibbs explained heat by probability: a system in
equilibrium at temperature $T$ is in state $\sigma$ with probability proportional to $e^{-E(\sigma)/kT}$, the
**Gibbs distribution** sampled by the Metropolis algorithm of [Chapter 19](19-Randomness-in-Computing.md). The Ising
model's phase transition, a magnet losing its magnetism above a critical temperature, is a statement about this
distribution; Lars Onsager computed the two-dimensional model exactly in 1944. Percolation, SLE and concentration all
grew partly from statistical physics, and physicists' non-rigorous methods (renormalisation, conformal field theory,
the replica method) still predict results that mathematicians spend decades proving. One example: Giorgio Parisi's
1979 formula for the Sherrington-Kirkpatrick model of spin glasses was proved by Francesco Guerra and Talagrand in the
2000s; Parisi received the 2021 Nobel Prize in physics, in part for this work.

**Quantum mechanics.** In 1926 Max Born proposed that the wave function gives *probabilities* of measurement outcomes:
the probability is the squared magnitude of an amplitude. Quantum probabilities follow Kolmogorov's axioms for any one
measurement, but quantum theory as a whole does not fit one classical probability space: Bell's inequalities, violated
in experiments, show that no local assignment of pre-existing values reproduces its predictions. What the probabilities
"mean" is still a debate in the foundations of physics; the mathematics is not in doubt.

**Machine learning.** Probability enters modern machine learning in at least four honest ways.

- **Models of data.** Classifiers output probability distributions, and training minimises cross-entropy, that is,
  the KL divergence to the data (Chapter 18).
- **Randomness in training.** Stochastic gradient descent estimates the gradient from a random sample of the data at
  each step: a Monte Carlo estimate (Chapter 7) inside an optimisation.
- **Guarantees.** Concentration inequalities (20.4) give bounds on how far performance on fresh data can be from
  performance on the training data, the basis of Leslie Valiant's 1984 theory of probably approximately correct
  (PAC) learning. For today's very large networks those classical bounds are usually far too weak to explain what is
  observed, and why such networks generalise as well as they do is an active research question.
- **Generative models.** **Diffusion models** for images (Jascha Sohl-Dickstein and coauthors 2015; Jonathan Ho, Ajay
  Jain and Pieter Abbeel 2020) add Gaussian noise to data step by step, a Markov chain that turns any image into pure
  noise, and train a network to run the chain backwards. In continuous time the forward process is a stochastic
  differential equation driven by Brownian motion, and the reverse process is another one (Yang Song and coauthors,
  2021), so Chapter 16's stochastic calculus is part of how these systems are described.

The honest summary: the mathematics of probability is used everywhere in these fields, while the reasons the most
successful methods work so well are understood only in part.

## 20.6 Open problems

*Level: expert.*

Here are some problems that are easy to state and unsolved as of this writing. The list is not complete; each is a
door into active research.

**1. The connective constant in three dimensions.** For the square lattice $\mathbb{Z}^2$, the number $\sigma(n)$ of
self-avoiding walks of length $n$ grows like $\mu^n$ with $\mu \approx 2.638$; for the cubic lattice $\mathbb{Z}^3$,
$\mu \approx 4.684$. These values come from long exact enumerations and simulations. No exact formula is known for
either, and none is expected. The one lattice where $\mu$ is known exactly is the hexagonal (honeycomb) lattice:
Hugo Duminil-Copin and Stanislav Smirnov proved in 2012 that $\mu = \sqrt{2 + \sqrt 2} \approx 1.848$, as Bernard
Nienhuis had predicted in 1982.

**2. How far does a self-avoiding walk go?** The typical distance from start to end after $n$ steps is believed to
grow like $n^\nu$, with $\nu = \frac34$ in two dimensions (Nienhuis's prediction, and the $\text{SLE}_{8/3}$
conjecture), $\nu \approx 0.588$ in three dimensions (numerically), and $\nu = \frac12$ in four or more dimensions
(with a logarithmic correction in exactly four). Gordon Slade and Takashi Hara proved $\nu = \frac12$ for five and
more dimensions in 1992 using the **lace expansion**. Dimensions 2, 3 and 4 are open; there it is not even proved that an
exponent $\nu$ exists. Hugo Duminil-Copin and Alan Hammond proved in 2013 that the walk is at least sub-ballistic
(its typical distance is a vanishing fraction of $n$), and that is close to the best general result known.

**3. Percolation at criticality in three dimensions.** Is $\theta(p_c) = 0$ for bond percolation on $\mathbb{Z}^3$,
that is, is there no infinite cluster exactly at the critical point? In two dimensions it is true (Harris and Kesten,
20.1). In high dimensions it was proved by Hara and Slade (1990) for $d \ge 19$, later improved to $d \ge 11$ by Robert
Fitzner and Remco van der Hofstad (2017), again with the lace expansion. For $3 \le d \le 10$ it is open, although every
simulation and every physicist expects the answer "yes". It is widely regarded as the central open problem of
percolation theory.

**4. Conformal invariance beyond the triangular lattice.** Prove that critical bond percolation on $\mathbb{Z}^2$, or
site percolation on $\mathbb{Z}^2$, has a conformally invariant scaling limit ($\text{SLE}_6$ interfaces). Smirnov's
proof uses a special symmetry of the triangular lattice.

**5. Exact thresholds.** Find the critical probability of site percolation on $\mathbb{Z}^2$ ($\approx 0.5927$) or of
bond percolation on $\mathbb{Z}^3$ ($\approx 0.2488$) exactly, or prove that they have no "nice" closed form. Nobody
expects a formula, but nobody knows how to prove that none exists.

Problems 1 to 3 have the same flavour: dimension 2 yields to planar topology and conformal invariance, dimension
above a critical value yields to perturbation methods like the lace expansion, and the physical dimension 3 lies in
between, where neither works.

## A short history

Percolation began with Broadbent and Hammersley (1957); Harris (1960) and Kesten (1980) settled the square lattice.
Random matrices entered statistics with John Wishart (1928) and physics with Wigner (1950s), Freeman Dyson and Madan
Lal Mehta (1960s); Montgomery and Dyson's conversation linked them to number theory in the early 1970s. Concentration
of measure goes back to Lévy, was developed by Milman from the 1970s, and gained the martingale method of Hoeffding
(1963) and Azuma (1967) and Talagrand's inequalities (1995). Loewner's equation (1923) waited 76 years for Schramm to
add Brownian motion to it; the decade that followed, with Lawler, Werner, Smirnov and others, was one of the most
productive in the history of probability. The present: probability is no longer a corner of analysis but a central
part of mathematics, connected to combinatorics, number theory, geometry, physics and computing, and its open problems
are among the hardest anywhere.

## Check yourself

??? question "1. Count the self-avoiding paths of length 2 and 3 from the origin on $\mathbb{Z}^2$ and compare with the bound $4 \cdot 3^{n-1}$."

    Length 2: 4 first steps, then 3 non-reversing second steps, and a two-step path can never revisit, so
    $\sigma(2) = 12 = 4 \cdot 3$. Length 3: each of the 12 extends in 3 non-reversing ways, and a three-step path
    still cannot close a loop (that needs 4 steps), so $\sigma(3) = 36 = 4 \cdot 9$. The bound is first strict at
    $n = 4$: $\sigma(4) = 100 < 108$. The 8 missing walks are the non-reversing ones that go round a unit square and
    come back to the origin: 4 squares touch the origin, each in 2 directions.

??? question "2. Using $\theta(p) \le \frac43(3p)^n$, how small is the bound on $\theta(0.3)$ with $n = 50$? What does the proof need to conclude $\theta(0.3) = 0$?"

    $\frac43 \times 0.9^{50} \approx 0.0069$. The bound holds for every $n$, and $0.9^n \to 0$, so letting
    $n \to \infty$ gives $\theta(0.3) = 0$. One value of $n$ only gives an upper bound.

??? question "3. Explain with a coupling why the expected size of the origin's open cluster is a nondecreasing function of $p$."

    Use uniform labels $U_e$ and open each bond when $U_e < p$. For $p < p'$, the cluster at level $p$ is a subset of
    the cluster at level $p'$ for every outcome, so its size is at most the other's, and taking expectations
    preserves the inequality.

??? question "4. Verify that the semicircle density has total mass 1, second moment 1 and fourth moment 2."

    Substitute $x = 2\sin\phi$, $dx = 2\cos\phi\,d\phi$, $\sqrt{4 - x^2} = 2\cos\phi$:
    $\int_{-2}^2 x^{2m}\frac{\sqrt{4-x^2}}{2\pi}dx = \frac{2^{2m+2}}{2\pi}\int_{-\pi/2}^{\pi/2}\sin^{2m}\phi\cos^2\phi\,d\phi$.
    For $m = 0$: $\frac{4}{2\pi}\cdot\frac{\pi}{2} = 1$. For $m = 1$: $\int \sin^2\cos^2 = \frac{\pi}{8}$, giving
    $\frac{16}{2\pi}\cdot\frac{\pi}{8} = 1$. For $m = 2$: $\int\sin^4\cos^2 = \frac{\pi}{16}$, giving
    $\frac{64}{2\pi}\cdot\frac{\pi}{16} = 2$. These are $C_0, C_1, C_2$.

??? question "5. List the rooted plane trees with 3 edges, and say which moment of the semicircle they count."

    There are $C_3 = 5$: a path of length 3 hanging from the root; the root with two children, one of which has a
    child (two ways: the left or the right child has it); the root with one child that has two children; and the root
    with three children. They count the sixth moment, $\int x^6\rho = 5$.

??? question "6. For a Wigner matrix with entries $\pm 1/\sqrt n$, show that $\frac1n\operatorname{tr}(M^2) = 1$ exactly, for every outcome."

    $\operatorname{tr}(M^2) = \sum_{i,j} M_{ij}M_{ji} = \sum_{i,j}M_{ij}^2 = n^2 \cdot \frac1n = n$, since all $n^2$
    entries have square $\frac1n$. So $\frac1n\operatorname{tr}(M^2) = 1$, the Catalan number $C_1$, with no
    randomness at all.

??? question "7. What fractal dimension does $\text{SLE}_\kappa$ have for $\kappa = 2, \frac83, 6$? Which models are these?"

    $1 + \kappa/8$: $\kappa = 2$ gives $\frac54$ (loop-erased random walk); $\kappa = \frac83$ gives $\frac43$
    (conjecturally the self-avoiding walk, and the outer boundary of Brownian motion); $\kappa = 6$ gives $\frac74$
    (critical percolation interfaces on the triangular lattice).

??? question "8. A point is uniform on the unit sphere in $\mathbb{R}^{1000}$. Compare the Chebyshev bound and the exponential bound for $P(|x_1| > 0.1)$."

    Chebyshev: $\frac{1}{1000 \times 0.01} = 0.1$. Exponential: $2e^{-1000 \times 0.01/2} = 2e^{-5} \approx 0.013$.
    For $\varepsilon = 0.2$ the gap widens: $0.025$ against $2e^{-20} \approx 4 \times 10^{-9}$.

??? question "9. Use Azuma-Hoeffding to bound the probability that a fair coin tossed 10,000 times gives at least 5,300 heads."

    Let $S$ be the number of heads minus tails, a sum of $\pm1$ steps: 5,300 heads means $S = 600$. So
    $P \le e^{-600^2/(2 \cdot 10000)} = e^{-18} \approx 1.5 \times 10^{-8}$ (one-sided bound, no factor 2). The
    normal approximation gives about $P(Z \ge 6) \approx 10^{-9}$.

??? question "10. Throw $n$ balls into $n$ bins. Explain why the number of empty bins satisfies the bounded-difference condition with $c_i = 1$, and use it for $n = 10{,}000$, $t = 300$."

    The count is a function of the $n$ independent bin choices. Moving one ball can make its old bin empty (adding 1
    to the count) and can make its new bin non-empty (subtracting 1), so the net change is $-1$, 0 or 1, and
    $c_i = 1$. Corollary 20.7 gives
    $P(|Y - EY| \ge 300) \le 2e^{-90000/20000} = 2e^{-4.5} \approx 0.022$; McDiarmid's constant gives
    $2e^{-18} \approx 3 \times 10^{-8}$.

??? question "11. Why does the event 'there is an infinite open cluster' have probability 0 or 1, while the event 'the origin is in an infinite open cluster' can have probability strictly between 0 and 1?"

    The first event is not changed by altering finitely many bonds: closing finitely many bonds splits an infinite
    cluster into finitely many pieces, at least one infinite, and opening them cannot create an infinite cluster out
    of finite ones (only finitely many finite clusters are affected). So it is a tail event and Kolmogorov's law
    applies. The second event depends on the bonds at the origin: closing the four bonds at the origin destroys it.
    It is not a tail event, and indeed $0 < \theta(p) < 1$ for $p_c < p < 1$.

??? question "12. Why can the self-duality argument give $p_c = \frac12$ for bonds on $\mathbb{Z}^2$ but not for bonds on $\mathbb{Z}^3$?"

    In the plane, a cluster is fenced in by a closed dual *circuit*, and the dual of the square lattice is again a
    square lattice, so open and closed play symmetric roles at $p = \frac12$. In three dimensions a finite cluster is
    enclosed by a closed dual *surface* made of plaquettes, not by a path: the dual object is of a different kind,
    there is no symmetry between open paths and closed surfaces, and indeed $p_c \approx 0.2488 \ne \frac12$.

## What you learned

- Percolation has a sharp threshold $p_c$; counting self-avoiding paths gives $\frac13 \le p_c \le \frac23$ on
  $\mathbb{Z}^2$, and self-duality gives Kesten's exact $p_c = \frac12$.
- The eigenvalues of large random symmetric matrices follow Wigner's semicircle, whose moments are the Catalan
  numbers because the dominant closed walks trace trees; finer statistics match the zeros of the zeta function, as a
  conjecture.
- Schramm's SLE, Loewner's equation driven by $\sqrt\kappa$ times Brownian motion, describes conformally invariant
  random curves; Lawler, Schramm, Werner and Smirnov used it to prove physicists' predictions.
- Concentration of measure: functions of many independent parts with bounded influence are nearly constant, as the
  Azuma-Hoeffding inequality proves through martingales.
- Probability is the working language of statistical physics and quantum theory, and a large part of machine
  learning; in all three, practice still outruns proof in places.
- The self-avoiding walk and percolation in three dimensions are simple to state and remain open.

**Back to the start:** this is the last chapter of the book. Return to the [Probability book's contents](index.md),
or continue into the [Combinatorics book](../combinatorics/index.md), whose probabilistic method and random graphs
meet this book in [Chapter 19](19-Randomness-in-Computing.md).

## Further reading

- G. Grimmett, *Percolation*, 2nd edition, 1999; and *Probability on Graphs*, 2nd edition, 2018 (free online from the
  author), the best route into 20.1 and 20.3.
- H. Kesten, "The critical probability of bond percolation on the square lattice equals 1/2", *Communications in
  Mathematical Physics* 74, 1980.
- B. Bollobás and O. Riordan, *Percolation*, 2006.
- G. W. Anderson, A. Guionnet and O. Zeitouni, *An Introduction to Random Matrices*, 2010; T. Tao, *Topics in Random
  Matrix Theory*, 2012.
- H. L. Montgomery, "The pair correlation of zeros of the zeta function", *Analytic Number Theory*, Proceedings of
  Symposia in Pure Mathematics 24, 1973.
- O. Schramm, "Scaling limits of loop-erased random walks and uniform spanning trees", *Israel Journal of
  Mathematics* 118, 2000.
- G. F. Lawler, *Conformally Invariant Processes in the Plane*, 2005.
- S. Smirnov, "Critical percolation in the plane: conformal invariance, Cardy's formula, scaling limits", *Comptes
  Rendus de l'Académie des Sciences* 333, 2001.
- H. Duminil-Copin and S. Smirnov, "The connective constant of the honeycomb lattice equals $\sqrt{2+\sqrt2}$",
  *Annals of Mathematics* 175, 2012.
- N. Madras and G. Slade, *The Self-Avoiding Walk*, 1993.
- S. Boucheron, G. Lugosi and P. Massart, *Concentration Inequalities*, 2013; K. Ball, "An Elementary Introduction to
  Modern Convex Geometry", in *Flavors of Geometry*, 1997, for the sphere.
- On this site: the [Combinatorics book](../combinatorics/index.md), especially
  [Chapter 8](../combinatorics/08-Catalan-Numbers-and-Lattice-Paths.md) (Catalan numbers),
  [Chapter 17](../combinatorics/17-The-Probabilistic-Method.md) (random graphs) and
  [Chapter 20](../combinatorics/20-Where-Combinatorics-Goes.md) (its own frontier); the
  [Number Theory book](../number-theory/index.md), with the zeta function in
  [Chapter 14](../number-theory/14-The-Zeta-Function-and-the-Prime-Number-Theorem.md); the
  [Algebra book](../algebra/index.md); [MAT247 Unit 6: The Spectral Theorem](../../uoft/MAT247H1/unit06.md), which
  explains why symmetric matrices have real eigenvalues; and the
  [random walks and Markov chains lesson](../../topics/probability/level-8/06-random-walks-markov.md) for a gentle
  first look.
