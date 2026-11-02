#!/usr/bin/env python3
"""Writes math-hero.svg: Earth-to-Mars Hohmann transfer, drawn to scale (1600x900).

Geometry (heliocentric, ecliptic seen from the north, so planets move counter-clockwise):
  Earth: a = 1.000 AU, e = 0.0167      Mars: a = 1.5237 AU, e = 0.0934 (1.381..1.666 AU)
  Transfer: perihelion 1 AU at Earth, aphelion 1.524 AU where it meets Mars's orbit,
  a_t = 1.262 AU, half period = pi*sqrt(a_t^3/GM) = 0.709 yr = 259 d. Mars leads Earth by ~44 deg at launch.
"""
import math, random

W, H = 1600, 900
SX, SY = 838, 478          # the Sun
S = 200.0                  # px per AU

def P(r, th_deg):          # polar (math angle, y up) -> screen
    t = math.radians(th_deg)
    return SX + S * r * math.cos(t), SY - S * r * math.sin(t)

def f(x):
    return f"{x:.1f}"

# --- orbits -------------------------------------------------------------
TH_DEP = -32.0                         # departure direction (Earth at launch)
TH_ARR = TH_DEP + 180.0                # arrival direction
aM, eM = 1.5237, 0.0934
nu_arr = math.degrees(math.acos(-eM))  # true anomaly on Mars's orbit where r = aM (95.36 deg)
PERI_M = TH_ARR - nu_arr               # Mars perihelion direction, so the arrival point lies on its orbit
aE, eE = 1.0, 0.0167
PERI_E = 102.9 + 0                     # Earth's perihelion direction (only shifts it 3 px)

def kepler_path(a, e, peri, nu0, nu1, n=240):
    pts = []
    for i in range(n + 1):
        nu = nu0 + (nu1 - nu0) * i / n
        r = a * (1 - e * e) / (1 + e * math.cos(math.radians(nu)))
        pts.append(P(r, peri + nu))
    return "M" + " L".join(f"{f(x)} {f(y)}" for x, y in pts)

def kepler_closed(a, e, peri):
    return kepler_path(a, e, peri, 0, 360, 360) + " Z"

rT1, rT2 = 1.0, aM
aT = (rT1 + rT2) / 2
eT = (rT2 - rT1) / (rT2 + rT1)
transfer = kepler_path(aT, eT, TH_DEP, 0, 180, 240)
transfer_rest = kepler_path(aT, eT, TH_DEP, 180, 360, 240)

def at_transfer(nu):
    r = aT * (1 - eT * eT) / (1 + eT * math.cos(math.radians(nu)))
    return P(r, TH_DEP + nu)

ex, ey = P(1.0, TH_DEP)                        # Earth at launch (perihelion of the transfer)
mx, my = P(rT2, TH_ARR)                        # Mars at arrival
# Mars at launch: 259 d earlier, mean motion 360/687 deg/d -> 135.7 deg behind the arrival point
phase = 180 - 360 * 258.9 / 686.98             # 44.3 deg
th_m0 = TH_DEP + phase
nu_m0 = th_m0 - PERI_M
r_m0 = aM * (1 - eM ** 2) / (1 + eM * math.cos(math.radians(nu_m0)))
m0x, m0y = P(r_m0, th_m0)

# craft on the transfer, part way out, pointing along the path
NU_C = 62.0
cx, cy = at_transfer(NU_C)
c2x, c2y = at_transfer(NU_C + 0.5)
c_ang = math.degrees(math.atan2(c2y - cy, c2x - cx))

# --- stars ---------------------------------------------------------------
rnd = random.Random(1609)  # Kepler's year
stars = []
for _ in range(520):
    x, y = rnd.uniform(0, W), rnd.uniform(0, H)
    d = math.hypot(x - SX, y - SY)
    if d < 90:
        continue
    if x > 1205 and any(y0 < y < y1 for y0, y1 in ((100, 220), (285, 400), (470, 665))) and x < 1580:
        continue  # keep the formulas clean
    k = rnd.random()
    if k < 0.86:
        rr, op = rnd.uniform(0.35, 0.8), rnd.uniform(0.18, 0.55)
    elif k < 0.98:
        rr, op = rnd.uniform(0.8, 1.2), rnd.uniform(0.45, 0.8)
    else:
        rr, op = rnd.uniform(1.2, 1.6), rnd.uniform(0.7, 0.95)
    col = rnd.choice(["#ffffff", "#ffffff", "#f4e6d4", "#dfe6ff", "#ffe2c4"])
    stars.append(f'<circle cx="{f(x)}" cy="{f(y)}" r="{rr:.2f}" fill="{col}" opacity="{op:.2f}"/>')

# --- graph paper ---------------------------------------------------------
grid = []
for gx in range(SX % 25, W, 25):
    major = (gx - SX) % 100 == 0
    grid.append(f'<line x1="{gx}" y1="0" x2="{gx}" y2="{H}" class="{"gM" if major else "gm"}"/>')
for gy in range(SY % 25, H, 25):
    major = (gy - SY) % 100 == 0
    grid.append(f'<line x1="0" y1="{gy}" x2="{W}" y2="{gy}" class="{"gM" if major else "gm"}"/>')

# --- construction --------------------------------------------------------
# line of apsides of the transfer, past both ends
ax0, ay0 = P(1.12, TH_DEP)
ax1, ay1 = P(1.70, TH_ARR)
# 1 AU ticks along the radius toward Earth
ticks = []
for k in range(1, 4):
    r = 0.25 * k
    tx, ty = P(r, TH_DEP)
    nx, ny = math.sin(math.radians(TH_DEP)), math.cos(math.radians(TH_DEP))  # screen normal
    ticks.append(f'<line x1="{f(tx-5*nx)}" y1="{f(ty-5*ny)}" x2="{f(tx+5*nx)}" y2="{f(ty+5*ny)}"/>')

# phase-angle arc (44 deg) at radius 0.55 AU
def arc(r, t0, t1):
    x0, y0 = P(r, t0); x1, y1 = P(r, t1)
    large = 1 if abs(t1 - t0) > 180 else 0
    return f"M{f(x0)} {f(y0)} A{f(r*S)} {f(r*S)} 0 {large} 0 {f(x1)} {f(y1)}"
phase_arc = arc(0.42, TH_DEP, th_m0)
mid = TH_DEP + phase / 2
plx, ply = P(0.53, mid)
m0lx, m0ly = P(r_m0, th_m0)
# radius from Sun to Mars-at-launch (faint)
rlx, rly = P(r_m0 - 0.06, th_m0)

# labels positions
lab_e = (ex + 16, ey + 30)
lab_m = (mx - 18, my - 22)
lab_r1 = P(0.5, TH_DEP)
lab_r2 = P(0.6, TH_ARR)

serif = "'FreeSerif','Bitstream Charter','DejaVu Serif',Georgia,serif"
sans = "'Inter','Liberation Sans','DejaVu Sans',Arial,sans-serif"

svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">
  <title>From Earth to Mars: the Hohmann transfer, drawn to scale</title>
  <desc>A dark sky with faint stars and a warm Sun. Earth's near-circular orbit (1 AU) and Mars's slightly oval orbit (1.38 to 1.67 AU) are drawn to scale. A dashed glowing half-ellipse, the Hohmann transfer orbit with semi-major axis 1.262 AU, carries a small craft from Earth to Mars in about 259 days. Beside it: Kepler's third law T squared equals a cubed, the vis-viva equation, and the transfer time t equals pi times the square root of a cubed over GM.</desc>
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0a0c16"/>
      <stop offset="0.55" stop-color="#0e0b12"/>
      <stop offset="1" stop-color="#120b09"/>
    </linearGradient>
    <radialGradient id="warm" cx="{SX}" cy="{SY}" r="620" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#5a2a12" stop-opacity="0.55"/>
      <stop offset="0.35" stop-color="#2a140c" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#120b09" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="sunGlow" cx="{SX}" cy="{SY}" r="120" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff4dc" stop-opacity="1"/>
      <stop offset="0.09" stop-color="#ffe1a8" stop-opacity="0.95"/>
      <stop offset="0.2" stop-color="#f6b46e" stop-opacity="0.55"/>
      <stop offset="0.45" stop-color="#d9772f" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#a9471c" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="earth" cx="0.38" cy="0.35" r="0.75">
      <stop offset="0" stop-color="#d6f0ff"/>
      <stop offset="0.45" stop-color="#5b9fd0"/>
      <stop offset="1" stop-color="#1d3f66"/>
    </radialGradient>
    <radialGradient id="mars" cx="0.38" cy="0.35" r="0.75">
      <stop offset="0" stop-color="#ffd2a8"/>
      <stop offset="0.45" stop-color="#d2662f"/>
      <stop offset="1" stop-color="#6e2a10"/>
    </radialGradient>
    <radialGradient id="gridFade" cx="{SX}" cy="{SY}" r="760" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff" stop-opacity="1"/>
      <stop offset="0.55" stop-color="#fff" stop-opacity="0.7"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="leftCalm" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#000" stop-opacity="1"/>
      <stop offset="0.22" stop-color="#000" stop-opacity="0.25"/>
      <stop offset="0.34" stop-color="#000" stop-opacity="0"/>
    </linearGradient>
    <mask id="gridMask"><rect width="{W}" height="{H}" fill="url(#gridFade)"/></mask>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="5" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="9"/>
    </filter>
    <filter id="chalk" x="-5%" y="-5%" width="110%" height="110%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="1.6" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <style>
      .gm {{ stroke: #f4e6d4; stroke-opacity: 0.05; stroke-width: 1; }}
      .gM {{ stroke: #f4e6d4; stroke-opacity: 0.1; stroke-width: 1; }}
      .eq  {{ font-family: {serif}; font-style: italic; fill: #f4e6d4; }}
      .up  {{ font-family: {serif}; font-style: normal; fill: #f4e6d4; }}
      .cap {{ font-family: {sans}; font-size: 13px; letter-spacing: 0.22em; fill: #eea66f; fill-opacity: 0.85; }}
      .note {{ font-family: {serif}; font-style: italic; font-size: 19px; fill: #f4e6d4; fill-opacity: 0.62; }}
      .lab {{ font-family: {serif}; font-style: italic; font-size: 20px; fill: #f4e6d4; fill-opacity: 0.78; }}
      .labs {{ font-family: {sans}; font-size: 12px; letter-spacing: 0.2em; fill: #f4e6d4; fill-opacity: 0.55; }}
    </style>
  </defs>

  <!-- sky -->
  <rect width="{W}" height="{H}" fill="url(#sky)"/>
  <rect width="{W}" height="{H}" fill="url(#warm)"/>
  <g>{"".join(stars)}</g>

  <!-- graph paper, 1 square = 0.125 AU, heavy lines every 0.5 AU, centred on the Sun -->
  <g mask="url(#gridMask)">{"".join(grid)}</g>

  <!-- construction: line of apsides, radius ticks, phase angle -->
  <g filter="url(#chalk)" stroke="#f4e6d4" fill="none" stroke-linecap="round">
    <line x1="{f(ax0)}" y1="{f(ay0)}" x2="{f(ax1)}" y2="{f(ay1)}" stroke-opacity="0.22" stroke-width="1.1" stroke-dasharray="2 7"/>
    <g stroke-opacity="0.35" stroke-width="1.1">{"".join(ticks)}</g>
    <line x1="{SX}" y1="{SY}" x2="{f(rlx)}" y2="{f(rly)}" stroke-opacity="0.16" stroke-width="1" stroke-dasharray="2 6"/>
    <path d="{phase_arc}" stroke="#eea66f" stroke-opacity="0.55" stroke-width="1.2"/>
  </g>

  <!-- orbits, to scale -->
  <path d="{kepler_closed(aE, eE, PERI_E)}" fill="none" stroke="#9cc3dd" stroke-opacity="0.42" stroke-width="1.4"/>
  <path d="{kepler_closed(aM, eM, PERI_M)}" fill="none" stroke="#c4602b" stroke-opacity="0.6" stroke-width="1.6"/>
  <!-- the unused half of the transfer ellipse, as a ghost -->
  <path d="{transfer_rest}" fill="none" stroke="#eea66f" stroke-opacity="0.22" stroke-width="1.2" stroke-dasharray="1 7" stroke-linecap="round"/>

  <!-- the Hohmann transfer: glow, then dashes -->
  <path d="{transfer}" fill="none" stroke="#eea66f" stroke-opacity="0.35" stroke-width="7" filter="url(#soft)"/>
  <path d="{transfer}" fill="none" stroke="#ffcf9e" stroke-width="2.2" stroke-dasharray="10 9" stroke-linecap="round" filter="url(#glow)"/>

  <!-- the Sun -->
  <circle cx="{SX}" cy="{SY}" r="120" fill="url(#sunGlow)"/>
  <circle cx="{SX}" cy="{SY}" r="11" fill="#fff6e6"/>

  <!-- Mars at launch (ghost) -->
  <circle cx="{f(m0x)}" cy="{f(m0y)}" r="6.5" fill="none" stroke="#eea66f" stroke-opacity="0.7" stroke-width="1.2" stroke-dasharray="2 3"/>

  <!-- Earth at launch -->
  <circle cx="{f(ex)}" cy="{f(ey)}" r="20" fill="#7fb7e0" opacity="0.18" filter="url(#soft)"/>
  <circle cx="{f(ex)}" cy="{f(ey)}" r="8" fill="url(#earth)"/>
  <!-- Mars at arrival -->
  <circle cx="{f(mx)}" cy="{f(my)}" r="20" fill="#e0763a" opacity="0.28" filter="url(#soft)"/>
  <circle cx="{f(mx)}" cy="{f(my)}" r="7.5" fill="url(#mars)"/>

  <!-- the craft -->
  <g transform="translate({f(cx)} {f(cy)}) rotate({c_ang:.1f})">
    <circle r="16" fill="#ffd9b0" opacity="0.35" filter="url(#soft)"/>
    <path d="M-7 0 L-19 -1.6 L-23 0 L-19 1.6 Z" fill="#ffb877" opacity="0.75"/>
    <path d="M-5 -2.4 L-9 -5.6 L-8 -2 Z M-5 2.4 L-9 5.6 L-8 2 Z" fill="#e9c9a8"/>
    <path d="M11 0 C8 -2.8 3 -3 -7 -2.6 L-7 2.6 C3 3 8 2.8 11 0 Z" fill="#fff1e0"/>
    <circle cx="3.5" cy="0" r="1.1" fill="#a9471c"/>
  </g>

  <!-- labels on the drawing -->
  <text class="labs" x="{f(lab_e[0])}" y="{f(lab_e[1])}">EARTH</text>
  <text class="labs" x="{f(lab_m[0])}" y="{f(lab_m[1])}" text-anchor="end">MARS</text>
  <text class="labs" x="{SX}" y="{SY + 44}" text-anchor="middle">SUN</text>
  <text class="lab" x="{f(lab_r1[0] - 20)}" y="{f(lab_r1[1] + 34)}">r<tspan font-size="14" dy="5">1</tspan><tspan dy="-5"> = 1 AU</tspan></text>
  <text class="lab" x="{f(lab_r2[0] - 4)}" y="{f(lab_r2[1] - 16)}" text-anchor="middle">r<tspan font-size="14" dy="5">2</tspan><tspan dy="-5"> = 1.524 AU</tspan></text>
  <text class="lab" x="{f(plx + 4)}" y="{f(ply + 6)}" fill="#eea66f" style="fill:#eea66f;fill-opacity:0.8">44°</text>

  <!-- the mathematics, right-hand column -->
  <g transform="translate(1226 0)">
    <text class="cap" x="0" y="122">KEPLER’S THIRD LAW</text>
    <text class="eq" x="0" y="178" font-size="48">T<tspan class="up" font-size="28" dx="4" dy="-20">2</tspan><tspan class="up" dy="20"> = </tspan>a<tspan class="up" font-size="28" dx="3" dy="-20">3</tspan></text>
    <text class="note" x="0" y="212">T in years, a in AU</text>

    <text class="cap" x="0" y="300">VIS-VIVA</text>
    <g class="eq" font-size="44">
      <text class="eq" x="0" y="370">v<tspan class="up" font-size="26" dx="2" dy="-18">2</tspan><tspan class="up" dy="18"> = </tspan>GM</text>
      <!-- ( 2/r − 1/a ) -->
      <text class="up" x="152" y="372" font-size="64" fill-opacity="0.9">(</text>
      <text class="up" x="186" y="350" font-size="32" text-anchor="middle">2</text>
      <line x1="174" y1="359" x2="198" y2="359" stroke="#f4e6d4" stroke-width="1.6"/>
      <text class="eq" x="186" y="391" font-size="32" text-anchor="middle">r</text>
      <text class="up" x="208" y="370" font-size="36">−</text>
      <text class="up" x="254" y="350" font-size="32" text-anchor="middle">1</text>
      <line x1="242" y1="359" x2="266" y2="359" stroke="#f4e6d4" stroke-width="1.6"/>
      <text class="eq" x="254" y="391" font-size="32" text-anchor="middle">a</text>
      <text class="up" x="272" y="372" font-size="64" fill-opacity="0.9">)</text>
    </g>

    <text class="cap" x="0" y="490">TRANSFER TIME</text>
    <g>
      <text class="eq" x="0" y="560" font-size="44">t<tspan class="up"> = π</tspan></text>
      <!-- radical sign over a³ / GM -->
      <path d="M86 548 L94 543 L104 574 L118 512 L198 512" fill="none" stroke="#f4e6d4" stroke-width="1.9" stroke-linejoin="round" stroke-linecap="round"/>
      <text class="eq" x="158" y="545" font-size="32" text-anchor="middle">a<tspan class="up" font-size="20" dy="-13">3</tspan></text>
      <line x1="128" y1="554" x2="192" y2="554" stroke="#f4e6d4" stroke-width="1.6"/>
      <text class="eq" x="160" y="586" font-size="32" text-anchor="middle">GM</text>
      <text class="up" x="208" y="560" font-size="40">≈ 259 d</text>
    </g>
    <text class="note" x="0" y="630">a = ½ (1 + 1.524) ≈ 1.262 AU</text>
    <text class="note" x="0" y="658">t = ½ · 1.262<tspan font-size="13" dy="-8">3/2</tspan><tspan dy="8"> yr ≈ 0.709 yr</tspan></text>
  </g>
</svg>
'''

with open(__file__.rsplit("/", 1)[0] + "/math-hero.svg", "w") as fh:
    fh.write(svg)
print("ok", f"phase={phase:.1f}", f"aT={aT:.4f}", f"t={math.pi*math.sqrt(aT**3/(4*math.pi**2))*365.25:.1f} d")
