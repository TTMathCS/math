---
title: "Inflation"
---

# Inflation

*Ratio, rates and money · level 6, lesson 7 of 7*

## A question to start

Your grandparent tells you that a 100 dollar bill in 1990 bought a lot more than it does today. Is that just a feeling,
or can it be measured? And if so: how many of today's dollars buy what 100 dollars bought in 1990?

It can be measured, and the answer is roughly **200 dollars**. Prices in Canada, on average, about **doubled** between
1990 and the early 2020s. That means a dollar now buys about half of what it did then.

This slow, steady rise in prices is called **inflation**, and it quietly changes the value of every dollar you save,
earn or borrow. This lesson shows how it is measured, how to convert between the dollars of different years, and why
money in a savings account can lose value even while the number in the account goes up.

## The idea

### What inflation is

**Inflation** is a general rise in prices over time. Not one price going up (strawberries in winter), but prices on
average. When prices rise, each dollar buys less: its **purchasing power** (how much it can buy) falls.

The **inflation rate** is the percent change in prices over a year. If prices rise 3% this year, the inflation rate is
3%. When prices fall on average, that is called **deflation**, which is rare.

The Bank of Canada aims to keep inflation near **2% a year** (check the Bank of Canada for its current target). Some
years it is much higher; in the early 2020s it went well above that for a while.

### Measuring prices: the price index

Prices of thousands of things change at different rates, so how can anyone say "prices rose 3%"? Statistics Canada
tracks the price of a fixed **basket** of goods and services that a typical household buys: food, rent, gas, clothes,
phone plans, and so on. Then it compares the cost of that basket over time.

The result is the **Consumer Price Index (CPI)**. The index is set to 100 in a chosen **base year** (for Canada's CPI,
that is 2002), and other years are measured against it. A CPI of 150 means the basket costs 150% of what it did in the
base year.

The index is a ratio, so prices in two years compare like this:

$$\frac{\text{price in year B}}{\text{price in year A}} = \frac{\text{CPI in year B}}{\text{CPI in year A}}.$$

This is a [proportion](../level-5/01-proportions.md): prices scale with the index.

### Converting between years

To turn an amount from year A into "year B dollars", multiply by the ratio of the indexes:

$$\text{amount in year B dollars} = \text{amount in year A} \times \frac{\text{CPI}_B}{\text{CPI}_A}.$$

Canada's CPI (2002 = 100) averaged about 78.4 in 1990 and about 157.1 in 2023 (from Statistics Canada; check the
latest figures, or use the Bank of Canada's online inflation calculator). So

$$100 \times \frac{157.1}{78.4} \approx 100 \times 2.004 \approx 200 \text{ dollars}.$$

What cost 100 dollars in 1990 cost about 200 dollars in 2023, on average. That is the answer to the question.

### The inflation rate from the index

The inflation rate is the percent change in the CPI ([percent change](../level-5/03-percent-change.md), measured from
the earlier year):

$$\text{inflation rate} = \frac{\text{CPI}_{\text{this year}} - \text{CPI}_{\text{last year}}}{\text{CPI}_{\text{last year}}} \times 100\%.$$

### Inflation compounds

Inflation works like compound interest, but on prices: each year's rise is on top of last year's prices. At 3% a
year, prices are multiplied by 1.03 each year, so after $n$ years by $1.03^n$. Since $1.03^{24} \approx 2.03$,
3% inflation **doubles prices in about 24 years**. Even 2% a year doubles prices in about 35 years
($1.02^{35} \approx 2.00$).

### The shrinking dollar

If prices are multiplied by $1.02$ each year, a fixed amount of money buys $\dfrac{1}{1.02}$ as much each year (the
reciprocal: [successive changes](02-successive-changes.md)). Here is what 100 dollars kept under a mattress can buy,
measured in today's prices, with 2% inflation:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 400 200" role="img" aria-label="Four bars showing the buying power of 100 dollars with 2 percent inflation: 100 now, about 82 after 10 years, about 67 after 20 years, about 55 after 30 years">
  <line x1="30" y1="170" x2="380" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <rect x="50" y="30" width="50" height="140" fill="#7ccf9a" stroke="currentColor"/>
  <rect x="130" y="55.2" width="50" height="114.8" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="210" y="75.8" width="50" height="94.2" fill="#9cc9ea" stroke="currentColor"/>
  <rect x="290" y="92.7" width="50" height="77.3" fill="#eea66f" stroke="currentColor"/>
  <text x="75" y="24" font-size="12" text-anchor="middle" fill="currentColor">100</text>
  <text x="155" y="49" font-size="12" text-anchor="middle" fill="currentColor">82</text>
  <text x="235" y="70" font-size="12" text-anchor="middle" fill="currentColor">67</text>
  <text x="315" y="87" font-size="12" text-anchor="middle" fill="currentColor">55</text>
  <text x="75" y="188" font-size="11" text-anchor="middle" fill="currentColor">now</text>
  <text x="155" y="188" font-size="11" text-anchor="middle" fill="currentColor">10 years</text>
  <text x="235" y="188" font-size="11" text-anchor="middle" fill="currentColor">20 years</text>
  <text x="315" y="188" font-size="11" text-anchor="middle" fill="currentColor">30 years</text>
</svg>
</div>

After 30 years the same bill buys only about 55% as much: $100 \div 1.02^{30} \approx 55.21$.

### Why savings can lose value

Suppose your savings account pays 1.5% a year, and inflation is 3% a year. After one year:

- your 1000 dollars has grown to $1000 \times 1.015 = 1015$ dollars;
- but the things that cost 1000 dollars now cost $1000 \times 1.03 = 1030$ dollars.

You have more dollars, but you can buy **less**. Your **real** buying power was multiplied by

$$\frac{1.015}{1.03} \approx 0.9854,$$

a loss of about 1.5% a year. The number in the account went up; its value went down.

So the rule is: **if your interest rate is below the inflation rate, your savings lose purchasing power.** To grow in
real terms, savings must earn more than inflation. The same idea applies to pay: a 2% raise when prices rise 4% is
really a pay cut ($1.02 \div 1.04 \approx 0.981$, about 1.9% less buying power).

The difference between the interest rate and the inflation rate is close to the **real interest rate** (here about
$1.5\% - 3\% = -1.5\%$). The exact version, and why the subtraction is only an approximation, is in
[level 8](../level-8/index.md).

### Who gains and who loses

Inflation is not bad for everybody.

- **Savers lose** when interest is below inflation.
- **Borrowers can gain**: if you owe a fixed number of dollars, inflation makes each of those dollars worth less, so the
  debt is easier to repay in real terms.
- **People on fixed incomes lose**, unless their income rises with prices. Many Canadian pensions, such as the Canada
  Pension Plan, are adjusted each year for inflation (this is called **indexing**).

<figure class="play" data-play="percent" data-mode="twice"><span class="ai-tag">AI-created</span><figcaption><b>Prices up, value down.</b> Two changes in a row multiply, they don't add. Made-up amounts.</figcaption></figure>

## Worked examples

**1. The inflation rate.** The CPI goes from 150.0 to 154.5 in a year. What is the inflation rate?

- $\dfrac{154.5 - 150.0}{150.0} = \dfrac{4.5}{150} = 0.03$: **3%**.

**2. Then and now.** What does 100 dollars from 1990 correspond to in 2023 dollars? (CPI about 78.4 and 157.1.)

- $100 \times \dfrac{157.1}{78.4} \approx$ **200 dollars**.

**3. Purchasing power.** With 2% inflation, what will 1000 dollars buy in 10 years, in today's dollars?

- Prices are multiplied by $1.02^{10}$. So 1000 dollars buys $1000 \div 1.02^{10} \approx$ **820.35 dollars** worth
  of today's goods.

**4. Savings against inflation.** Savings earn 1.5% a year; inflation is 3%.

- Real multiplier: $\dfrac{1.015}{1.03} \approx 0.9854$. The savings lose about **1.5%** of their buying power each
  year.

**5. A raise.** Your pay rises 2% while prices rise 4%.

- $\dfrac{1.02}{1.04} \approx 0.9808$: your pay buys about **1.9% less** than before.

**6. Doubling.** At 3% inflation, roughly how long until prices double?

- $1.03^{23} \approx 1.97$ and $1.03^{24} \approx 2.03$: about **24 years**.

## Try it

1. A price index goes from 120 to 126 in a year. What is the inflation rate?
2. A price index is 80 in one year and 120 now. Something cost 50 dollars back then. About how much would the same
   thing cost now, if its price kept up with the index?
3. A basket of groceries costs 20 dollars today. With 2.5% inflation a year, what will it cost in 4 years?
4. With 4% inflation a year, what will 500 dollars buy in 5 years, in today's dollars?
5. Your savings earn 2% a year and inflation is 2% a year. What happens to your buying power?
6. Your pay rises 3% and inflation is 5%. By about what percent does your buying power change?
7. If prices double, what happens to the value of one dollar? Give the percent change.
8. Explain in your own words why a savings account can show a bigger number every year but still lose value.

??? note "Answers"
    1. $\dfrac{126 - 120}{120} = \dfrac{6}{120} = 0.05$: **5%**.
    2. $50 \times \dfrac{120}{80} = 50 \times 1.5 = 75$ dollars.
    3. $20 \times 1.025^4 \approx 22.08$ dollars.
    4. $500 \div 1.04^5 \approx 410.96$ dollars worth of today's goods.
    5. $\dfrac{1.02}{1.02} = 1$: buying power stays the **same**. The extra dollars only keep up with prices.
    6. $\dfrac{1.03}{1.05} \approx 0.981$: about **1.9% less**.
    7. Each dollar buys half as much: its value is multiplied by $\dfrac12$, a **50% decrease**. (Prices up 100%,
       value of money down 50%: the reciprocal from [successive changes](02-successive-changes.md).)
    8. The account grows by the interest rate, but prices grow by the inflation rate. If prices grow faster, each
       year the money in the account can buy less, even though the number of dollars is bigger. What matters is what
       the money can buy, not the number on the screen.

## Common mistake

**Comparing dollars from different years as if they were the same.** "My parents paid 30 000 dollars for a car, and
now cars cost 45 000 dollars" says nothing until you adjust for inflation. Convert both to the same year's dollars
first.

**Thinking a positive interest rate always means growth.** Growth in dollars is not growth in buying power. Compare the
interest rate with the inflation rate.

## Where it leads

- Back: [Comparing options](06-comparing-options.md) · Next: [Level 7: Growth, decay and annuities](../level-7/index.md)
- [Level 6 page](index.md) · [Ratio, rates and money topic page](../index.md)
- Real against nominal interest rates, done exactly: [Level 8](../level-8/index.md).
- Index numbers and how a basket average is built: [Statistics](../../statistics/index.md).
- Compound growth, which inflation follows: [Compound interest](04-compound-interest.md).
