---
title: "Exponential and logarithmic equations"
---

# Exponential and logarithmic equations

*Algebra · level 8, lesson 5 of 8*

## A question to start

The Perseverance rover on Mars keeps warm and makes its electricity from the heat of plutonium-238, which has a
half-life of about 87.7 years: every 87.7 years, half of what is left decays. When will only **three quarters** of the
plutonium be left?

The amount left after $t$ years is a fraction $\left(\tfrac12\right)^{t/87.7}$ of the start, so we need

$$\left(\tfrac12\right)^{t/87.7} = 0.75.$$

The unknown is in the exponent, and 0.75 is not a neat power of $\tfrac12$, so the common-base trick from level 7 fails.
Logarithms solve it in one line. (The answer is about 36.4 years.)

## The idea

### Method 1: common base (when it works)

If both sides can be written as powers of the same base, set the exponents equal. This works because $b^x$ is
one-to-one. $9^{x+1} = 27^x$ becomes $3^{2x + 2} = 3^{3x}$, so $x = 2$.

### Method 2: take logarithms

When there is no common base, take the logarithm of both sides. The power law $\log\left(b^x\right) = x\log b$ brings
the unknown **down from the exponent**:

$$3^x = 20 \;\Rightarrow\; \log\left(3^x\right) = \log 20 \;\Rightarrow\; x\log 3 = \log 20 \;\Rightarrow\; x = \frac{\log 20}{\log 3} \approx 2.727.$$

Why is it allowed to "take log of both sides"? If two positive numbers are equal, their logarithms are equal, because
$\log$ is a function (one input, one output). Always **isolate the power first**: in $5 \cdot 3^x = 100$, divide by 5
before taking logs.

### Method 3: a quadratic in disguise

$4^x = \left(2^2\right)^x = \left(2^x\right)^2$. So in $4^x - 3 \cdot 2^x - 4 = 0$, put $u = 2^x$:

$$u^2 - 3u - 4 = 0 \;\Rightarrow\; (u - 4)(u + 1) = 0 \;\Rightarrow\; u = 4 \text{ or } u = -1.$$

$2^x = 4$ gives $x = 2$. $2^x = -1$ is impossible, since $2^x > 0$. So $x = 2$ only.

### Logarithmic equations

To solve an equation with logs of the unknown:

1. Use the laws to **combine** into a single log on one side.
2. Rewrite in **exponential form**: $\log_b(\text{stuff}) = c$ means $\text{stuff} = b^c$.
3. Solve.
4. **Check every answer in the original equation.** Each log needs a positive input.

### Why extraneous roots appear

The law $\log x + \log(x - 3) = \log\left(x(x - 3)\right)$ is only true when $x > 0$ and $x - 3 > 0$. But
$\log\left(x(x - 3)\right)$ also makes sense when **both** $x$ and $x - 3$ are negative (their product is positive).
So combining the logs quietly **widens the domain**, and the new equation can have solutions the old one does not.
Those are **extraneous roots**, and checking catches them.

### Modelling with logs

Logarithmic scales measure things that range over many powers of ten.

- **pH** (acidity): $\text{pH} = -\log[\text{H}^+]$, where $[\text{H}^+]$ is the concentration of hydrogen ions in
  moles per litre. Pure water has pH 7; lower is more acidic. Each step of 1 is a factor of 10.
- **Decibels** (loudness): $L = 10\log\dfrac{I}{I_0}$, where $I$ is the sound intensity and $I_0$ is the quietest
  sound a person can hear. Each extra 10 dB multiplies the intensity by 10.
- **Half-life and doubling time**: $N = N_0\left(\tfrac12\right)^{t/H}$ and $N = N_0 \cdot 2^{t/D}$. Logs find $t$, $H$
  or $D$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 370 240" role="img" aria-label="Decay of plutonium-238: the percent left falls from 100 to 75 after about 36.4 years, 50 after 87.7 years and 25 after 175.4 years">
  <line x1="50" y1="210" x2="350" y2="210" stroke="currentColor" stroke-width="1"/>
  <text x="348" y="205" font-size="11" text-anchor="end" fill="currentColor" font-style="italic">years</text>
  <line x1="50" y1="210" x2="50" y2="10" stroke="currentColor" stroke-width="1"/>
  <text x="55" y="20" font-size="11" fill="currentColor" font-style="italic">percent left</text>
  <line x1="150" y1="207" x2="150" y2="213" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="224" font-size="10" text-anchor="middle" fill="currentColor">100</text>
  <line x1="250" y1="207" x2="250" y2="213" stroke="currentColor" stroke-width="1"/>
  <text x="250" y="224" font-size="10" text-anchor="middle" fill="currentColor">200</text>
  <line x1="350" y1="207" x2="350" y2="213" stroke="currentColor" stroke-width="1"/>
  <text x="350" y="224" font-size="10" text-anchor="middle" fill="currentColor">300</text>
  <line x1="47" y1="162.4" x2="53" y2="162.4" stroke="currentColor" stroke-width="1"/>
  <text x="45" y="165.9" font-size="10" text-anchor="end" fill="currentColor">25</text>
  <line x1="47" y1="114.8" x2="53" y2="114.8" stroke="currentColor" stroke-width="1"/>
  <text x="45" y="118.3" font-size="10" text-anchor="end" fill="currentColor">50</text>
  <line x1="47" y1="67.1" x2="53" y2="67.1" stroke="currentColor" stroke-width="1"/>
  <text x="45" y="70.6" font-size="10" text-anchor="end" fill="currentColor">75</text>
  <line x1="47" y1="19.5" x2="53" y2="19.5" stroke="currentColor" stroke-width="1"/>
  <text x="45" y="23" font-size="10" text-anchor="end" fill="currentColor">100</text>
  <polyline points="50,19.5 50.6,20.4 51.2,21.3 51.8,22.2 52.4,23.1 53,24 53.6,24.9 54.2,25.7 54.8,26.6 55.4,27.5 56,28.3 56.6,29.2 57.2,30.1 57.8,30.9 58.4,31.8 59,32.6 59.6,33.4 60.2,34.3 60.8,35.1 61.4,35.9 62,36.8 62.6,37.6 63.2,38.4 63.8,39.2 64.4,40 65,40.8 65.6,41.6 66.2,42.4 66.8,43.2 67.4,44 68,44.8 68.6,45.6 69.2,46.3 69.8,47.1 70.4,47.9 71,48.7 71.6,49.4 72.2,50.2 72.8,50.9 73.4,51.7 74,52.4 74.6,53.2 75.2,53.9 75.8,54.7 76.4,55.4 77,56.1 77.6,56.9 78.2,57.6 78.8,58.3 79.4,59 80,59.7 80.6,60.4 81.2,61.2 81.8,61.9 82.4,62.6 83,63.3 83.6,63.9 84.2,64.6 84.8,65.3 85.4,66 86,66.7 86.6,67.4 87.2,68 87.8,68.7 88.4,69.4 89,70 89.6,70.7 90.2,71.4 90.8,72 91.4,72.7 92,73.3 92.6,74 93.2,74.6 93.8,75.3 94.4,75.9 95,76.5 95.6,77.2 96.2,77.8 96.8,78.4 97.4,79 98,79.7 98.6,80.3 99.2,80.9 99.8,81.5 100.4,82.1 101,82.7 101.6,83.3 102.2,83.9 102.8,84.5 103.4,85.1 104,85.7 104.6,86.3 105.2,86.9 105.8,87.5 106.4,88 107,88.6 107.6,89.2 108.2,89.8 108.8,90.3 109.4,90.9 110,91.5 110.6,92 111.2,92.6 111.8,93.1 112.4,93.7 113,94.2 113.6,94.8 114.2,95.3 114.8,95.9 115.4,96.4 116,96.9 116.6,97.5 117.2,98 117.8,98.5 118.4,99.1 119,99.6 119.6,100.1 120.2,100.6 120.8,101.2 121.4,101.7 122,102.2 122.6,102.7 123.2,103.2 123.8,103.7 124.4,104.2 125,104.7 125.6,105.2 126.2,105.7 126.8,106.2 127.4,106.7 128,107.2 128.6,107.7 129.2,108.1 129.8,108.6 130.4,109.1 131,109.6 131.6,110.1 132.2,110.5 132.8,111 133.4,111.5 134,111.9 134.6,112.4 135.2,112.9 135.8,113.3 136.4,113.8 137,114.2 137.6,114.7 138.2,115.1 138.8,115.6 139.4,116 140,116.5 140.6,116.9 141.2,117.4 141.8,117.8 142.4,118.2 143,118.7 143.6,119.1 144.2,119.5 144.8,120 145.4,120.4 146,120.8 146.6,121.2 147.2,121.7 147.8,122.1 148.4,122.5 149,122.9 149.6,123.3 150.2,123.7 150.8,124.1 151.4,124.5 152,124.9 152.6,125.3 153.2,125.7 153.8,126.1 154.4,126.5 155,126.9 155.6,127.3 156.2,127.7 156.8,128.1 157.4,128.5 158,128.9 158.6,129.3 159.2,129.6 159.8,130 160.4,130.4 161,130.8 161.6,131.2 162.2,131.5 162.8,131.9 163.4,132.3 164,132.6 164.6,133 165.2,133.4 165.8,133.7 166.4,134.1 167,134.4 167.6,134.8 168.2,135.2 168.8,135.5 169.4,135.9 170,136.2 170.6,136.6 171.2,136.9 171.8,137.3 172.4,137.6 173,137.9 173.6,138.3 174.2,138.6 174.8,139 175.4,139.3 176,139.6 176.6,140 177.2,140.3 177.8,140.6 178.4,141 179,141.3 179.6,141.6 180.2,141.9 180.8,142.3 181.4,142.6 182,142.9 182.6,143.2 183.2,143.5 183.8,143.8 184.4,144.2 185,144.5 185.6,144.8 186.2,145.1 186.8,145.4 187.4,145.7 188,146 188.6,146.3 189.2,146.6 189.8,146.9 190.4,147.2 191,147.5 191.6,147.8 192.2,148.1 192.8,148.4 193.4,148.7 194,149 194.6,149.3 195.2,149.5 195.8,149.8 196.4,150.1 197,150.4 197.6,150.7 198.2,151 198.8,151.2 199.4,151.5 200,151.8 200.6,152.1 201.2,152.3 201.8,152.6 202.4,152.9 203,153.2 203.6,153.4 204.2,153.7 204.8,154 205.4,154.2 206,154.5 206.6,154.8 207.2,155 207.8,155.3 208.4,155.5 209,155.8 209.6,156 210.2,156.3 210.8,156.6 211.4,156.8 212,157.1 212.6,157.3 213.2,157.6 213.8,157.8 214.4,158.1 215,158.3 215.6,158.5 216.2,158.8 216.8,159 217.4,159.3 218,159.5 218.6,159.8 219.2,160 219.8,160.2 220.4,160.5 221,160.7 221.6,160.9 222.2,161.2 222.8,161.4 223.4,161.6 224,161.9 224.6,162.1 225.2,162.3 225.8,162.5 226.4,162.8 227,163 227.6,163.2 228.2,163.4 228.8,163.6 229.4,163.9 230,164.1 230.6,164.3 231.2,164.5 231.8,164.7 232.4,164.9 233,165.2 233.6,165.4 234.2,165.6 234.8,165.8 235.4,166 236,166.2 236.6,166.4 237.2,166.6 237.8,166.8 238.4,167 239,167.2 239.6,167.4 240.2,167.6 240.8,167.8 241.4,168 242,168.2 242.6,168.4 243.2,168.6 243.8,168.8 244.4,169 245,169.2 245.6,169.4 246.2,169.6 246.8,169.8 247.4,170 248,170.2 248.6,170.4 249.2,170.5 249.8,170.7 250.4,170.9 251,171.1 251.6,171.3 252.2,171.5 252.8,171.7 253.4,171.8 254,172 254.6,172.2 255.2,172.4 255.8,172.6 256.4,172.7 257,172.9 257.6,173.1 258.2,173.3 258.8,173.4 259.4,173.6 260,173.8 260.6,173.9 261.2,174.1 261.8,174.3 262.4,174.5 263,174.6 263.6,174.8 264.2,175 264.8,175.1 265.4,175.3 266,175.5 266.6,175.6 267.2,175.8 267.8,175.9 268.4,176.1 269,176.3 269.6,176.4 270.2,176.6 270.8,176.7 271.4,176.9 272,177.1 272.6,177.2 273.2,177.4 273.8,177.5 274.4,177.7 275,177.8 275.6,178 276.2,178.1 276.8,178.3 277.4,178.4 278,178.6 278.6,178.7 279.2,178.9 279.8,179 280.4,179.2 281,179.3 281.6,179.5 282.2,179.6 282.8,179.7 283.4,179.9 284,180 284.6,180.2 285.2,180.3 285.8,180.5 286.4,180.6 287,180.7 287.6,180.9 288.2,181 288.8,181.1 289.4,181.3 290,181.4 290.6,181.6 291.2,181.7 291.8,181.8 292.4,182 293,182.1 293.6,182.2 294.2,182.4 294.8,182.5 295.4,182.6 296,182.7 296.6,182.9 297.2,183 297.8,183.1 298.4,183.3 299,183.4 299.6,183.5 300.2,183.6 300.8,183.8 301.4,183.9 302,184 302.6,184.1 303.2,184.3 303.8,184.4 304.4,184.5 305,184.6 305.6,184.7 306.2,184.9 306.8,185 307.4,185.1 308,185.2 308.6,185.3 309.2,185.4 309.8,185.6 310.4,185.7 311,185.8 311.6,185.9 312.2,186 312.8,186.1 313.4,186.2 314,186.4 314.6,186.5 315.2,186.6 315.8,186.7 316.4,186.8 317,186.9 317.6,187 318.2,187.1 318.8,187.2 319.4,187.3 320,187.5 320.6,187.6 321.2,187.7 321.8,187.8 322.4,187.9 323,188 323.6,188.1 324.2,188.2 324.8,188.3 325.4,188.4 326,188.5 326.6,188.6 327.2,188.7 327.8,188.8 328.4,188.9 329,189 329.6,189.1 330.2,189.2 330.8,189.3 331.4,189.4 332,189.5 332.6,189.6 333.2,189.7 333.8,189.8 334.4,189.9 335,190 335.6,190.1 336.2,190.2 336.8,190.3 337.4,190.4 338,190.4 338.6,190.5 339.2,190.6 339.8,190.7 340.4,190.8 341,190.9 341.6,191 342.2,191.1 342.8,191.2 343.4,191.3 344,191.3 344.6,191.4 345.2,191.5 345.8,191.6 346.4,191.7 347,191.8 347.6,191.9 348.2,192 348.8,192 349.4,192.1 350,192.2" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <line x1="50" y1="67.1" x2="86.4" y2="67.1" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="86.4" y1="210" x2="86.4" y2="67.1" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <circle cx="86.4" cy="67.1" r="3.5" fill="currentColor"/>
  <line x1="50" y1="114.8" x2="137.7" y2="114.8" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="137.7" y1="210" x2="137.7" y2="114.8" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <circle cx="137.7" cy="114.8" r="3.5" fill="currentColor"/>
  <line x1="50" y1="162.4" x2="225.4" y2="162.4" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="225.4" y1="210" x2="225.4" y2="162.4" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <circle cx="225.4" cy="162.4" r="3.5" fill="currentColor"/>
  <text x="92.4" y="61.1" font-size="11" text-anchor="start" fill="currentColor">36.4 years: 75%</text>
  <text x="143.7" y="108.8" font-size="11" text-anchor="start" fill="currentColor">87.7 years: 50%</text>
  <text x="231.4" y="156.4" font-size="11" text-anchor="start" fill="currentColor">175.4 years: 25%</text>
</svg>
</div>

## Worked examples

**1. Taking logs.** Solve $3^x = 20$.

- $x = \dfrac{\log 20}{\log 3} \approx \dfrac{1.30103}{0.47712} \approx 2.727$. Check: $3^{2.727} \approx 20$, and
  it lies between $3^2 = 9$ and $3^3 = 27$. ✓

**2. Unknown on both sides.** Solve $2^{x + 1} = 3^x$.

- Take logs: $(x + 1)\log 2 = x\log 3$.
- Expand and collect the $x$ terms: $x\log 2 + \log 2 = x\log 3$, so $\log 2 = x(\log 3 - \log 2)$.
- $x = \dfrac{\log 2}{\log 3 - \log 2} = \dfrac{\log 2}{\log 1.5} \approx 1.710$.

**3. A log equation with an extraneous root.** Solve $\log x + \log(x - 3) = 1$.

- Combine: $\log\left(x(x - 3)\right) = 1$. Exponential form: $x(x - 3) = 10^1 = 10$.
- $x^2 - 3x - 10 = 0$, so $(x - 5)(x + 2) = 0$, so $x = 5$ or $x = -2$.
- Check $x = 5$: $\log 5 + \log 2 = \log 10 = 1$. ✓ Check $x = -2$: $\log(-2)$ does not exist. **Reject.**
- Answer: $x = 5$.

**4. Logs on both sides.** Solve $\log_2(x + 1) - \log_2(x - 1) = 3$.

- $\log_2\dfrac{x + 1}{x - 1} = 3$, so $\dfrac{x + 1}{x - 1} = 8$.
- $x + 1 = 8x - 8$, so $7x = 9$, so $x = \dfrac97$.
- Check: $x - 1 = \tfrac27 > 0$ and $x + 1 = \tfrac{16}{7} > 0$. ✓

**5. The rover.** Solve $\left(\tfrac12\right)^{t/87.7} = 0.75$.

- Take logs: $\dfrac{t}{87.7}\log 0.5 = \log 0.75$.
- $t = 87.7 \times \dfrac{\log 0.75}{\log 0.5} \approx 87.7 \times 0.4150 \approx 36.4$ years.

**6. Carbon dating.** Carbon-14 has a half-life of about 5730 years. A bone has 30 percent of the carbon-14 it had
when the animal died. How old is it?

- $\left(\tfrac12\right)^{t/5730} = 0.3$, so $t = 5730 \times \dfrac{\log 0.3}{\log 0.5} \approx 5730 \times 1.737
  \approx 9950$ years.

**7. pH and decibels.** Lemon juice has a pH of about 2, and pure water 7. How many times more hydrogen ions does lemon
juice have?

- $[\text{H}^+] = 10^{-\text{pH}}$, so the ratio is $\dfrac{10^{-2}}{10^{-7}} = 10^5 = 100\,000$ times.
- Similarly, a 90 dB sound is $10^{(90 - 60)/10} = 10^3 = 1000$ times more intense than a 60 dB sound.

## Try it

1. Solve $2^x = 50$ to 4 decimal places.
2. Solve $6^{2x - 1} = 30$.
3. Solve $\log_3(x + 4) = 2$.
4. Solve $\log_2 x + \log_2(x + 2) = 3$.
5. Solve $9^x - 4 \cdot 3^x + 3 = 0$.
6. A culture grows from 1000 to 5000 bacteria in 6 hours. What is its doubling time?
7. How many times more intense is a 100 dB sound than a 70 dB sound?
8. Solve $2\ln x = \ln(3x + 4)$.

??? note "Answers"
    1. $x = \dfrac{\log 50}{\log 2} \approx 5.6439$.
    2. $(2x - 1)\log 6 = \log 30$, so $2x - 1 = \dfrac{\log 30}{\log 6} \approx 1.8982$, so $x \approx 1.4491$.
    3. $x + 4 = 3^2 = 9$, so $x = 5$. Check: $\log_3 9 = 2$. ✓
    4. $\log_2\left(x(x + 2)\right) = 3$, so $x^2 + 2x = 8$, so $(x + 4)(x - 2) = 0$. $x = -4$ makes $\log_2 x$
       undefined: reject. $x = 2$: $\log_2 2 + \log_2 4 = 1 + 2 = 3$. ✓ Answer $x = 2$.
    5. Put $u = 3^x$: $u^2 - 4u + 3 = 0$, so $u = 1$ or $u = 3$. $3^x = 1$ gives $x = 0$; $3^x = 3$ gives $x = 1$.
    6. $5000 = 1000 \cdot 2^{6/D}$, so $2^{6/D} = 5$, so $\dfrac6D = \dfrac{\log 5}{\log 2}$, so
       $D = \dfrac{6\log 2}{\log 5} \approx 2.58$ hours.
    7. $10^{(100 - 70)/10} = 10^3 = 1000$ times.
    8. Power law: $\ln x^2 = \ln(3x + 4)$, so $x^2 = 3x + 4$, so $(x - 4)(x + 1) = 0$. $x = -1$ makes $\ln x$
       undefined: reject. Answer $x = 4$ (check: $2\ln 4 = \ln 16 = \ln(12 + 4)$ ✓).

## Common mistake

**Taking logs before isolating the power.** From $5 \cdot 3^x = 100$, writing $x\log 15 = \log 100$ is wrong: the 5
does not belong inside the power. Divide first: $3^x = 20$.

**Skipping the check.** The algebra of log equations can create answers that make a log of a negative number or of 0.
They must be rejected, every time.

## Where it leads

- Back: [Logarithms](04-logarithms.md) · Next: [Combining functions](06-combining-functions.md).
- [Level 8 page](index.md) · [Algebra topic page](../index.md)
- Solving by common bases: [Exponential functions](../level-7/07-exponential-functions.md). Quadratics, which appear
  in disguise here: [Solving quadratic equations](../level-7/03-solving-quadratics.md).
- Growth, decay and interest in everyday life: [Ratio](../../ratio/index.md). Rates of growth, and the number $e$ that
  makes them simplest: [Change](../../change/index.md).
- At university: [MAT137 Unit 4 (transcendental functions)](../../../uoft/MAT137/unit04.md).
