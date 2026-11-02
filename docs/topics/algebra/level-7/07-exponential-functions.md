---
title: "Exponential functions"
---

# Exponential functions

*Algebra · level 7, lesson 7 of 7*

## A question to start

A lily pad grows in a pond. Each day the patch of lily pads doubles in area. On day 30 the pond is completely covered.
On which day was it **half** covered?

Most people's first guess is day 15. But think backwards: the patch doubles every day, so the day before it was full,
it was half full. The answer is **day 29**. On day 25 it covered only $\dfrac{1}{32}$ of the pond, about 3 percent:
you would hardly notice it, five days before the end.

Doubling is a different kind of growth from adding. This lesson gives it a function, a graph and the algebra to go
with it.

## The idea

### Exponent laws, a reminder

$b^n$ means $n$ copies of $b$ multiplied together; $b$ is the **base**, $n$ the **exponent**. Counting copies gives
the laws (in level 6 you used them with variables):

$$b^m \cdot b^n = b^{m+n}, \qquad \frac{b^m}{b^n} = b^{m-n}, \qquad (b^m)^n = b^{mn}, \qquad (ab)^n = a^n b^n.$$

To keep the laws true for every exponent, we are **forced** to define $b^0 = 1$ (since $\dfrac{b^3}{b^3} = 1$) and
$b^{-n} = \dfrac{1}{b^n}$ (since $b^0 \div b^n = b^{-n}$).

### Rational exponents

What should $8^{1/3}$ mean? If the third law is to hold,

$$\left(8^{1/3}\right)^3 = 8^{\frac13 \times 3} = 8^1 = 8.$$

So $8^{1/3}$ must be a number whose cube is 8: it is $\sqrt[3]{8} = 2$. In general, $b^{1/n} = \sqrt[n]{b}$, the
$n$th root. And then, using the third law again,

$$b^{m/n} = \left(b^{1/n}\right)^m = \left(\sqrt[n]{b}\right)^m.$$

So $8^{2/3} = \left(\sqrt[3]{8}\right)^2 = 2^2 = 4$. You could also square first: $\sqrt[3]{8^2} = \sqrt[3]{64} = 4$.
The same answer, but taking the root first keeps the numbers small. For these definitions we take $b > 0$, so that
every root exists.

### Exponential functions

An **exponential function** has the form

$$y = a \cdot b^x, \qquad b > 0,\; b \ne 1,$$

with the variable in the **exponent**. ($b = 1$ is left out because $1^x$ is always 1, a flat line.) The number $a$
is the starting value, the value at $x = 0$, since $b^0 = 1$.

Compare a linear function and an exponential one in a table:

| $x$ | 0 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- | --- |
| $y = 5 + 3x$ (linear) | 5 | 8 | 11 | 14 | 17 |
| $y = 5 \cdot 3^x$ (exponential) | 5 | 15 | 45 | 135 | 405 |

The linear one **adds** 3 each step: constant first differences. The exponential one **multiplies** by 3 each step:
constant **ratios**. That is the test for an exponential table: divide each value by the one before; if the answers
are all the same, it is exponential, and the answer is $b$.

### The graphs

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 360 260" role="img" aria-label="The rising curve y = 2 to the x and the falling curve y = one half to the x, both passing through (0, 1) and approaching the x-axis without touching it">
  <line x1="30" y1="217" x2="330" y2="217" stroke="currentColor" stroke-width="1"/>
  <text x="328" y="212" font-size="11" text-anchor="end" fill="currentColor" font-style="italic">x</text>
  <line x1="180" y1="240" x2="180" y2="10" stroke="currentColor" stroke-width="1"/>
  <text x="185" y="20" font-size="11" fill="currentColor" font-style="italic">y</text>
  <line x1="67.5" y1="214" x2="67.5" y2="220" stroke="currentColor" stroke-width="1"/>
  <text x="67.5" y="231" font-size="10" text-anchor="middle" fill="currentColor">−3</text>
  <line x1="105" y1="214" x2="105" y2="220" stroke="currentColor" stroke-width="1"/>
  <text x="105" y="231" font-size="10" text-anchor="middle" fill="currentColor">−2</text>
  <line x1="142.5" y1="214" x2="142.5" y2="220" stroke="currentColor" stroke-width="1"/>
  <text x="142.5" y="231" font-size="10" text-anchor="middle" fill="currentColor">−1</text>
  <line x1="217.5" y1="214" x2="217.5" y2="220" stroke="currentColor" stroke-width="1"/>
  <text x="217.5" y="231" font-size="10" text-anchor="middle" fill="currentColor">1</text>
  <line x1="255" y1="214" x2="255" y2="220" stroke="currentColor" stroke-width="1"/>
  <text x="255" y="231" font-size="10" text-anchor="middle" fill="currentColor">2</text>
  <line x1="292.5" y1="214" x2="292.5" y2="220" stroke="currentColor" stroke-width="1"/>
  <text x="292.5" y="231" font-size="10" text-anchor="middle" fill="currentColor">3</text>
  <line x1="177" y1="194" x2="183" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="175" y="197.5" font-size="10" text-anchor="end" fill="currentColor">1</text>
  <line x1="177" y1="171" x2="183" y2="171" stroke="currentColor" stroke-width="1"/>
  <text x="175" y="174.5" font-size="10" text-anchor="end" fill="currentColor">2</text>
  <line x1="177" y1="125" x2="183" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="175" y="128.5" font-size="10" text-anchor="end" fill="currentColor">4</text>
  <line x1="177" y1="33" x2="183" y2="33" stroke="currentColor" stroke-width="1"/>
  <text x="175" y="36.5" font-size="10" text-anchor="end" fill="currentColor">8</text>
  <polyline points="30,215.6 30.6,215.5 31.2,215.5 31.8,215.5 32.4,215.5 33,215.5 33.6,215.5 34.2,215.4 34.8,215.4 35.4,215.4 36,215.4 36.6,215.4 37.2,215.4 37.8,215.3 38.4,215.3 39,215.3 39.6,215.3 40.2,215.3 40.8,215.2 41.4,215.2 42,215.2 42.6,215.2 43.2,215.2 43.8,215.1 44.4,215.1 45,215.1 45.6,215.1 46.2,215.1 46.8,215 47.4,215 48,215 48.6,215 49.2,215 49.8,214.9 50.4,214.9 51,214.9 51.6,214.9 52.2,214.8 52.8,214.8 53.4,214.8 54,214.8 54.6,214.7 55.2,214.7 55.8,214.7 56.4,214.7 57,214.6 57.6,214.6 58.2,214.6 58.8,214.6 59.4,214.5 60,214.5 60.6,214.5 61.2,214.4 61.8,214.4 62.4,214.4 63,214.4 63.6,214.3 64.2,214.3 64.8,214.3 65.4,214.2 66,214.2 66.6,214.2 67.2,214.1 67.8,214.1 68.4,214.1 69,214 69.6,214 70.2,214 70.8,213.9 71.4,213.9 72,213.9 72.6,213.8 73.2,213.8 73.8,213.8 74.4,213.7 75,213.7 75.6,213.7 76.2,213.6 76.8,213.6 77.4,213.5 78,213.5 78.6,213.5 79.2,213.4 79.8,213.4 80.4,213.4 81,213.3 81.6,213.3 82.2,213.2 82.8,213.2 83.4,213.1 84,213.1 84.6,213.1 85.2,213 85.8,213 86.4,212.9 87,212.9 87.6,212.8 88.2,212.8 88.8,212.7 89.4,212.7 90,212.6 90.6,212.6 91.2,212.5 91.8,212.5 92.4,212.4 93,212.4 93.6,212.3 94.2,212.3 94.8,212.2 95.4,212.2 96,212.1 96.6,212.1 97.2,212 97.8,212 98.4,211.9 99,211.9 99.6,211.8 100.2,211.7 100.8,211.7 101.4,211.6 102,211.6 102.6,211.5 103.2,211.4 103.8,211.4 104.4,211.3 105,211.2 105.6,211.2 106.2,211.1 106.8,211.1 107.4,211 108,210.9 108.6,210.9 109.2,210.8 109.8,210.7 110.4,210.6 111,210.6 111.6,210.5 112.2,210.4 112.8,210.4 113.4,210.3 114,210.2 114.6,210.1 115.2,210.1 115.8,210 116.4,209.9 117,209.8 117.6,209.7 118.2,209.7 118.8,209.6 119.4,209.5 120,209.4 120.6,209.3 121.2,209.2 121.8,209.2 122.4,209.1 123,209 123.6,208.9 124.2,208.8 124.8,208.7 125.4,208.6 126,208.5 126.6,208.4 127.2,208.3 127.8,208.2 128.4,208.1 129,208 129.6,207.9 130.2,207.8 130.8,207.7 131.4,207.6 132,207.5 132.6,207.4 133.2,207.3 133.8,207.2 134.4,207.1 135,207 135.6,206.9 136.2,206.8 136.8,206.6 137.4,206.5 138,206.4 138.6,206.3 139.2,206.2 139.8,206.1 140.4,205.9 141,205.8 141.6,205.7 142.2,205.6 142.8,205.4 143.4,205.3 144,205.2 144.6,205 145.2,204.9 145.8,204.8 146.4,204.6 147,204.5 147.6,204.4 148.2,204.2 148.8,204.1 149.4,203.9 150,203.8 150.6,203.6 151.2,203.5 151.8,203.3 152.4,203.2 153,203 153.6,202.9 154.2,202.7 154.8,202.6 155.4,202.4 156,202.2 156.6,202.1 157.2,201.9 157.8,201.7 158.4,201.6 159,201.4 159.6,201.2 160.2,201 160.8,200.9 161.4,200.7 162,200.5 162.6,200.3 163.2,200.1 163.8,200 164.4,199.8 165,199.6 165.6,199.4 166.2,199.2 166.8,199 167.4,198.8 168,198.6 168.6,198.4 169.2,198.2 169.8,198 170.4,197.7 171,197.5 171.6,197.3 172.2,197.1 172.8,196.9 173.4,196.6 174,196.4 174.6,196.2 175.2,196 175.8,195.7 176.4,195.5 177,195.2 177.6,195 178.2,194.8 178.8,194.5 179.4,194.3 180,194 180.6,193.7 181.2,193.5 181.8,193.2 182.4,193 183,192.7 183.6,192.4 184.2,192.1 184.8,191.9 185.4,191.6 186,191.3 186.6,191 187.2,190.7 187.8,190.4 188.4,190.1 189,189.8 189.6,189.5 190.2,189.2 190.8,188.9 191.4,188.6 192,188.3 192.6,188 193.2,187.6 193.8,187.3 194.4,187 195,186.7 195.6,186.3 196.2,186 196.8,185.6 197.4,185.3 198,184.9 198.6,184.6 199.2,184.2 199.8,183.8 200.4,183.5 201,183.1 201.6,182.7 202.2,182.3 202.8,181.9 203.4,181.6 204,181.2 204.6,180.8 205.2,180.4 205.8,179.9 206.4,179.5 207,179.1 207.6,178.7 208.2,178.3 208.8,177.8 209.4,177.4 210,177 210.6,176.5 211.2,176.1 211.8,175.6 212.4,175.1 213,174.7 213.6,174.2 214.2,173.7 214.8,173.2 215.4,172.8 216,172.3 216.6,171.8 217.2,171.3 217.8,170.7 218.4,170.2 219,169.7 219.6,169.2 220.2,168.6 220.8,168.1 221.4,167.6 222,167 222.6,166.5 223.2,165.9 223.8,165.3 224.4,164.7 225,164.2 225.6,163.6 226.2,163 226.8,162.4 227.4,161.8 228,161.1 228.6,160.5 229.2,159.9 229.8,159.3 230.4,158.6 231,158 231.6,157.3 232.2,156.6 232.8,156 233.4,155.3 234,154.6 234.6,153.9 235.2,153.2 235.8,152.5 236.4,151.8 237,151 237.6,150.3 238.2,149.6 238.8,148.8 239.4,148 240,147.3 240.6,146.5 241.2,145.7 241.8,144.9 242.4,144.1 243,143.3 243.6,142.5 244.2,141.6 244.8,140.8 245.4,140 246,139.1 246.6,138.2 247.2,137.4 247.8,136.5 248.4,135.6 249,134.7 249.6,133.7 250.2,132.8 250.8,131.9 251.4,130.9 252,130 252.6,129 253.2,128 253.8,127 254.4,126 255,125 255.6,124 256.2,122.9 256.8,121.9 257.4,120.8 258,119.8 258.6,118.7 259.2,117.6 259.8,116.5 260.4,115.3 261,114.2 261.6,113.1 262.2,111.9 262.8,110.7 263.4,109.5 264,108.3 264.6,107.1 265.2,105.9 265.8,104.7 266.4,103.4 267,102.2 267.6,100.9 268.2,99.6 268.8,98.3 269.4,96.9 270,95.6 270.6,94.3 271.2,92.9 271.8,91.5 272.4,90.1 273,88.7 273.6,87.3 274.2,85.8 274.8,84.3 275.4,82.9 276,81.4 276.6,79.9 277.2,78.3 277.8,76.8 278.4,75.2 279,73.6 279.6,72 280.2,70.4 280.8,68.8 281.4,67.1 282,65.5 282.6,63.8 283.2,62.1 283.8,60.3 284.4,58.6 285,56.8 285.6,55 286.2,53.2 286.8,51.4 287.4,49.6 288,47.7 288.6,45.8 289.2,43.9 289.8,42 290.4,40 291,38 291.6,36 292.2,34 292.8,32 293.4,29.9 294,27.8 294.6,25.7 295.2,23.6 295.8,21.4 296.4,19.2 297,17 297.6,14.8 298.2,12.6 298.8,10.3 298.9,10" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <polyline points="61.1,10 61.2,10.3 61.8,12.6 62.4,14.8 63,17 63.6,19.2 64.2,21.4 64.8,23.6 65.4,25.7 66,27.8 66.6,29.9 67.2,32 67.8,34 68.4,36 69,38 69.6,40 70.2,42 70.8,43.9 71.4,45.8 72,47.7 72.6,49.6 73.2,51.4 73.8,53.2 74.4,55 75,56.8 75.6,58.6 76.2,60.3 76.8,62.1 77.4,63.8 78,65.5 78.6,67.1 79.2,68.8 79.8,70.4 80.4,72 81,73.6 81.6,75.2 82.2,76.8 82.8,78.3 83.4,79.9 84,81.4 84.6,82.9 85.2,84.3 85.8,85.8 86.4,87.3 87,88.7 87.6,90.1 88.2,91.5 88.8,92.9 89.4,94.3 90,95.6 90.6,96.9 91.2,98.3 91.8,99.6 92.4,100.9 93,102.2 93.6,103.4 94.2,104.7 94.8,105.9 95.4,107.1 96,108.3 96.6,109.5 97.2,110.7 97.8,111.9 98.4,113.1 99,114.2 99.6,115.3 100.2,116.5 100.8,117.6 101.4,118.7 102,119.8 102.6,120.8 103.2,121.9 103.8,122.9 104.4,124 105,125 105.6,126 106.2,127 106.8,128 107.4,129 108,130 108.6,130.9 109.2,131.9 109.8,132.8 110.4,133.7 111,134.7 111.6,135.6 112.2,136.5 112.8,137.4 113.4,138.2 114,139.1 114.6,140 115.2,140.8 115.8,141.6 116.4,142.5 117,143.3 117.6,144.1 118.2,144.9 118.8,145.7 119.4,146.5 120,147.3 120.6,148 121.2,148.8 121.8,149.6 122.4,150.3 123,151 123.6,151.8 124.2,152.5 124.8,153.2 125.4,153.9 126,154.6 126.6,155.3 127.2,156 127.8,156.6 128.4,157.3 129,158 129.6,158.6 130.2,159.3 130.8,159.9 131.4,160.5 132,161.1 132.6,161.8 133.2,162.4 133.8,163 134.4,163.6 135,164.2 135.6,164.7 136.2,165.3 136.8,165.9 137.4,166.5 138,167 138.6,167.6 139.2,168.1 139.8,168.6 140.4,169.2 141,169.7 141.6,170.2 142.2,170.7 142.8,171.3 143.4,171.8 144,172.3 144.6,172.8 145.2,173.2 145.8,173.7 146.4,174.2 147,174.7 147.6,175.1 148.2,175.6 148.8,176.1 149.4,176.5 150,177 150.6,177.4 151.2,177.8 151.8,178.3 152.4,178.7 153,179.1 153.6,179.5 154.2,179.9 154.8,180.4 155.4,180.8 156,181.2 156.6,181.6 157.2,181.9 157.8,182.3 158.4,182.7 159,183.1 159.6,183.5 160.2,183.8 160.8,184.2 161.4,184.6 162,184.9 162.6,185.3 163.2,185.6 163.8,186 164.4,186.3 165,186.7 165.6,187 166.2,187.3 166.8,187.6 167.4,188 168,188.3 168.6,188.6 169.2,188.9 169.8,189.2 170.4,189.5 171,189.8 171.6,190.1 172.2,190.4 172.8,190.7 173.4,191 174,191.3 174.6,191.6 175.2,191.9 175.8,192.1 176.4,192.4 177,192.7 177.6,193 178.2,193.2 178.8,193.5 179.4,193.7 180,194 180.6,194.3 181.2,194.5 181.8,194.8 182.4,195 183,195.2 183.6,195.5 184.2,195.7 184.8,196 185.4,196.2 186,196.4 186.6,196.6 187.2,196.9 187.8,197.1 188.4,197.3 189,197.5 189.6,197.7 190.2,198 190.8,198.2 191.4,198.4 192,198.6 192.6,198.8 193.2,199 193.8,199.2 194.4,199.4 195,199.6 195.6,199.8 196.2,200 196.8,200.1 197.4,200.3 198,200.5 198.6,200.7 199.2,200.9 199.8,201 200.4,201.2 201,201.4 201.6,201.6 202.2,201.7 202.8,201.9 203.4,202.1 204,202.2 204.6,202.4 205.2,202.6 205.8,202.7 206.4,202.9 207,203 207.6,203.2 208.2,203.3 208.8,203.5 209.4,203.6 210,203.8 210.6,203.9 211.2,204.1 211.8,204.2 212.4,204.4 213,204.5 213.6,204.6 214.2,204.8 214.8,204.9 215.4,205 216,205.2 216.6,205.3 217.2,205.4 217.8,205.6 218.4,205.7 219,205.8 219.6,205.9 220.2,206.1 220.8,206.2 221.4,206.3 222,206.4 222.6,206.5 223.2,206.6 223.8,206.8 224.4,206.9 225,207 225.6,207.1 226.2,207.2 226.8,207.3 227.4,207.4 228,207.5 228.6,207.6 229.2,207.7 229.8,207.8 230.4,207.9 231,208 231.6,208.1 232.2,208.2 232.8,208.3 233.4,208.4 234,208.5 234.6,208.6 235.2,208.7 235.8,208.8 236.4,208.9 237,209 237.6,209.1 238.2,209.2 238.8,209.2 239.4,209.3 240,209.4 240.6,209.5 241.2,209.6 241.8,209.7 242.4,209.7 243,209.8 243.6,209.9 244.2,210 244.8,210.1 245.4,210.1 246,210.2 246.6,210.3 247.2,210.4 247.8,210.4 248.4,210.5 249,210.6 249.6,210.6 250.2,210.7 250.8,210.8 251.4,210.9 252,210.9 252.6,211 253.2,211.1 253.8,211.1 254.4,211.2 255,211.2 255.6,211.3 256.2,211.4 256.8,211.4 257.4,211.5 258,211.6 258.6,211.6 259.2,211.7 259.8,211.7 260.4,211.8 261,211.9 261.6,211.9 262.2,212 262.8,212 263.4,212.1 264,212.1 264.6,212.2 265.2,212.2 265.8,212.3 266.4,212.3 267,212.4 267.6,212.4 268.2,212.5 268.8,212.5 269.4,212.6 270,212.6 270.6,212.7 271.2,212.7 271.8,212.8 272.4,212.8 273,212.9 273.6,212.9 274.2,213 274.8,213 275.4,213.1 276,213.1 276.6,213.1 277.2,213.2 277.8,213.2 278.4,213.3 279,213.3 279.6,213.4 280.2,213.4 280.8,213.4 281.4,213.5 282,213.5 282.6,213.5 283.2,213.6 283.8,213.6 284.4,213.7 285,213.7 285.6,213.7 286.2,213.8 286.8,213.8 287.4,213.8 288,213.9 288.6,213.9 289.2,213.9 289.8,214 290.4,214 291,214 291.6,214.1 292.2,214.1 292.8,214.1 293.4,214.2 294,214.2 294.6,214.2 295.2,214.3 295.8,214.3 296.4,214.3 297,214.4 297.6,214.4 298.2,214.4 298.8,214.4 299.4,214.5 300,214.5 300.6,214.5 301.2,214.6 301.8,214.6 302.4,214.6 303,214.6 303.6,214.7 304.2,214.7 304.8,214.7 305.4,214.7 306,214.8 306.6,214.8 307.2,214.8 307.8,214.8 308.4,214.9 309,214.9 309.6,214.9 310.2,214.9 310.8,215 311.4,215 312,215 312.6,215 313.2,215 313.8,215.1 314.4,215.1 315,215.1 315.6,215.1 316.2,215.1 316.8,215.2 317.4,215.2 318,215.2 318.6,215.2 319.2,215.2 319.8,215.3 320.4,215.3 321,215.3 321.6,215.3 322.2,215.3 322.8,215.4 323.4,215.4 324,215.4 324.6,215.4 325.2,215.4 325.8,215.4 326.4,215.5 327,215.5 327.6,215.5 328.2,215.5 328.8,215.5 329.4,215.5 330,215.6" fill="none" stroke="#9cc9ea" stroke-width="2.5"/>
  <circle cx="180" cy="194" r="3.5" fill="currentColor"/>
  <text x="296" y="33" font-size="11" text-anchor="end" fill="currentColor">y = 2ˣ (growth)</text>
  <text x="64" y="33" font-size="11" text-anchor="start" fill="currentColor">y = (½)ˣ (decay)</text>
  <text x="273.8" y="209" font-size="10" text-anchor="middle" fill="currentColor">asymptote y = 0</text>
</svg>
</div>

For $y = 2^x$:

- At $x = 0$ it is 1; it doubles with each step right: 2, 4, 8, ...
- Going left it halves: $2^{-1} = \tfrac12$, $2^{-2} = \tfrac14$, ... It gets closer and closer to 0 but never
  reaches it, because half of a positive number is still positive. The $x$-axis, $y = 0$, is a **horizontal
  asymptote**.
- Domain: all real numbers. Range: $y > 0$.

$y = \left(\tfrac12\right)^x$ is the mirror image in the $y$-axis, because $\left(\tfrac12\right)^x = 2^{-x}$. It
falls: this is **decay**.

So: $b > 1$ gives **growth**, $0 < b < 1$ gives **decay**. Every transformation from lesson 5 works too: for example
$y = 3 \cdot 2^x - 4$ is $2^x$ stretched by 3 and moved down 4. Its asymptote moves down to $y = -4$.

### Why exponential beats any power in the end

Compare $x^2$ and $2^x$. At $x = 4$ they are equal (16). At $x = 10$: 100 against 1024. At $x = 20$: 400 against
1 048 576. Each step adds a little to $x^2$ but **doubles** $2^x$. The lily pond shows the same thing: almost nothing
for weeks, then everything at once.

### Growth and decay models

- Doubling every $D$ units of time: $N = N_0 \cdot 2^{t/D}$. When $t = D$, the exponent is 1 and $N = 2N_0$.
- Half-life $H$: $N = N_0 \left(\tfrac12\right)^{t/H}$.
- Growing by $r$ percent per step: $N = N_0(1 + r)^t$; shrinking by $r$ percent: $N = N_0(1 - r)^t$, with $r$ as a
  decimal.

### Solving by common bases

Exponential functions are one-to-one (each passes the horizontal line test), so if $b^m = b^n$ then $m = n$. To
solve an equation like $2^x = 32$, write both sides with the same base: $32 = 2^5$, so $x = 5$. Equations that cannot
be written with a common base, like $3^x = 20$, need logarithms: [level 8](../level-8/05-exp-log-equations.md).

## Worked examples

**1. Rational exponents.**

- $8^{2/3} = \left(\sqrt[3]{8}\right)^2 = 2^2 = 4$.
- $27^{-2/3} = \dfrac{1}{27^{2/3}} = \dfrac{1}{\left(\sqrt[3]{27}\right)^2} = \dfrac{1}{9}$.
- $\left(\dfrac{16}{81}\right)^{3/4} = \left(\dfrac{\sqrt[4]{16}}{\sqrt[4]{81}}\right)^3 = \left(\dfrac23\right)^3
  = \dfrac{8}{27}$.

**2. Bacteria.** A culture starts with 500 bacteria and doubles every 3 hours. How many after 12 hours?

- $N = 500 \cdot 2^{t/3}$. At $t = 12$: $N = 500 \cdot 2^4 = 500 \times 16 = 8000$.

**3. A rover's heat source.** The Curiosity and Perseverance rovers on Mars are powered by the heat of
plutonium-238, which has a half-life of about 87.7 years. What fraction of the plutonium is left after 20 years?
After 175.4 years?

- Fraction left $= \left(\tfrac12\right)^{t/87.7}$.
- After 20 years: $\left(\tfrac12\right)^{20/87.7} \approx 0.854$, about 85 percent.
- After 175.4 years, two half-lives: $\left(\tfrac12\right)^2 = \tfrac14$.
- (The rovers' electric power falls faster than this, because the parts that turn heat into electricity also wear
  out.)

**4. Common bases.**

- $2^x = 32 = 2^5$, so $x = 5$.
- $9^{x+1} = 27^x$: write both as powers of 3: $3^{2(x+1)} = 3^{3x}$, so $2x + 2 = 3x$, so $x = 2$. Check:
  $9^3 = 729 = 27^2$. ✓
- $4^x = \dfrac18$: $2^{2x} = 2^{-3}$, so $x = -\dfrac32$.

**5. A transformed graph.** Describe $y = 3 \cdot 2^x - 4$.

- Stretch $y = 2^x$ vertically by 3, then move down 4. Asymptote $y = -4$; range $y > -4$.
- $y$-intercept: $3 \cdot 1 - 4 = -1$. It crosses the $x$-axis where $2^x = \tfrac43$, between $x = 0$ and $x = 1$.

## Try it

1. Evaluate (a) $25^{3/2}$ (b) $32^{-2/5}$ (c) $1000^{2/3}$
2. Simplify $\left(x^{1/2}\right)^4 \cdot x^{-1}$.
3. A table has $x$: 0, 1, 2, 3 and $y$: 5, 15, 45, 135. Show it is exponential and find its equation.
4. Solve $3^{x - 1} = 81$.
5. Solve $8^x = 4^{x + 1}$.
6. A car worth 30 000 dollars loses 15 percent of its value each year. Write a model and find its value after
   3 years.
7. Which is bigger at $x = 10$, $x^3$ or $2^x$? At $x = 20$?
8. For $y = -\left(\tfrac12\right)^x + 3$, give the asymptote, the range and the $y$-intercept.

??? note "Answers"
    1. (a) $\left(\sqrt{25}\right)^3 = 5^3 = 125$. (b) $\dfrac{1}{\left(\sqrt[5]{32}\right)^2} = \dfrac{1}{2^2} =
       \dfrac14$. (c) $\left(\sqrt[3]{1000}\right)^2 = 10^2 = 100$.
    2. $x^{2} \cdot x^{-1} = x^{1} = x$.
    3. Ratios: $\tfrac{15}{5} = \tfrac{45}{15} = \tfrac{135}{45} = 3$, all the same, so it is exponential with
       $b = 3$ and starting value 5: $y = 5 \cdot 3^x$.
    4. $81 = 3^4$, so $x - 1 = 4$, so $x = 5$.
    5. $2^{3x} = 2^{2(x + 1)} = 2^{2x + 2}$, so $3x = 2x + 2$, so $x = 2$. Check: $8^2 = 64 = 4^3$. ✓
    6. Each year it keeps 85 percent: $V = 30\,000 \times 0.85^t$. After 3 years:
       $30\,000 \times 0.614125 = 18\,423.75$, about **18 424 dollars**.
    7. At 10: $10^3 = 1000$ and $2^{10} = 1024$, so $2^x$ is (just) bigger. At 20: $20^3 = 8000$ and
       $2^{20} = 1\,048\,576$, far bigger.
    8. Reflect $\left(\tfrac12\right)^x$ in the $x$-axis and move up 3. Asymptote $y = 3$, range $y < 3$,
       $y$-intercept $-1 + 3 = 2$.

## Common mistake

**Multiplying the base by the exponent.** $2^5$ is $2 \times 2 \times 2 \times 2 \times 2 = 32$, not
$2 \times 5 = 10$. And $3 \cdot 2^x$ is not $6^x$: the 3 multiplies **after** the power is worked out (at $x = 2$,
$3 \cdot 2^2 = 12$, but $6^2 = 36$).

**Thinking a negative exponent makes a negative number.** $2^{-3} = \tfrac18$, which is positive. A negative exponent
means "one over", not "minus". That is why the graph of $2^x$ never goes below the $x$-axis.

## Where it leads

- Back: [Inverse functions](06-inverse-functions.md) · Next level: [Level 8: advanced functions](../level-8/index.md),
  starting with [Polynomial functions](../level-8/01-polynomial-functions.md). The inverse of $b^x$ is the
  [logarithm](../level-8/04-logarithms.md).
- [Level 7 page](index.md) · [Algebra topic page](../index.md)
- Powers and roots of numbers: [Powers](../../numbers/level-5/03-powers.md), [Zero and negative
  exponents](../../numbers/level-5/04-zero-negative-exponents.md), [Radicals](../../numbers/level-6/04-radicals.md).
- Geometric sequences are exponential functions on whole numbers: [Patterns](../../patterns/index.md). Compound
  interest is exponential growth with money: [Ratio](../../ratio/index.md).
- The special base $e$ and how fast $e^x$ grows: [MAT137 Unit 4 (transcendental
  functions)](../../../uoft/MAT137/unit04.md).
