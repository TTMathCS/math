---
title: "Statistics in the news"
---

# Statistics in the news

*Statistics and data · level 8, lesson 6 of 7*

## A question to start

A headline says: "New study: common snack **doubles** the risk of a rare disease!" It sounds alarming. Should you stop
eating it?

Suppose the study is good and the number is right. The disease strikes 1 person in 10 000 who do not eat the snack,
and 2 in 10 000 who eat it every day. The risk has indeed doubled. But for each person who eats it, the risk went up
by **1 in 10 000**. If 10 000 people all ate the snack every day for life, one extra person would get the disease.
Same facts, very different feeling. This lesson is a toolkit for reading numbers in the news: what to ask, and what
tricks (honest or not) to watch for.

## The idea

### Relative risk and absolute risk

- **Absolute risk** is the chance of the event in a group: 1 in 10 000, or 0.01%.
- **Relative risk** compares two groups by dividing: $\dfrac{2/10\,000}{1/10\,000} = 2$, "twice the risk", "a 100%
  increase".
- **Absolute risk difference** subtracts: $\dfrac{2}{10\,000} - \dfrac{1}{10\,000} = \dfrac{1}{10\,000}$, "one
  extra case per 10 000 people".

Relative risk is the natural measure in research (it is often similar across groups and helps find causes). But on
its own it hides the size of the problem. "Doubles the risk" can mean 1 in 10 000 to 2 in 10 000, or 10% to 20%. The
first is tiny; the second is huge.

Always ask: **twice what? Out of how many?**

A handy number for treatments is the **number needed to treat** (NNT): how many people must take the treatment for
one of them to benefit. It is 1 divided by the absolute risk difference. If a pill lowers the chance of a heart attack
over five years from 2% to 1.5%, the absolute difference is 0.5 percentage points, so the NNT is
$1 \div 0.005 = 200$: 200 people take the pill for five years to prevent one heart attack. The same pill could be
advertised as "cuts heart attacks by 25%" (relative: $0.5 \div 2 = 0.25$). Both are true.

### Percent versus percentage points

If support for a plan goes from 40% to 50%, it went up by **10 percentage points**, which is a **25% increase**
($10 \div 40 = 0.25$). Writers who mean one and say the other can make a change look two or more times bigger or
smaller. A rise in an interest rate from 2% to 3% is 1 percentage point and a 50% increase.

### Counts versus rates

"More accidents happen within 10 km of home than anywhere else." Of course: that is where people drive the most.
Counts must be compared with how many chances there were. Useful rates:

- **per person** (per capita): a big province has more of almost everything simply because it has more people;
- **per kilometre driven**, **per hour flown**, **per visit**;
- **per year**, when periods differ in length.

### Cherry-picked time ranges

Data that change over time wiggle. By choosing where the graph starts and ends, you can make almost any trend appear.
Starting at an unusually high point makes the next few years look like a fall; starting at a low point makes them
look like a rise.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 520 195" role="img" aria-label="A wiggly line over 24 years that rises overall, with a dashed trend line going up. A shaded window from year 12 to year 19, starting at an unusual spike, shows the line falling, which hides the long-run rise">
  <line x1="40" y1="170" x2="500" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="20" x2="40" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <rect x="270.0" y="20" width="134.2" height="150" fill="#eea66f" fill-opacity="0.18"/>
  <polyline fill="none" stroke="currentColor" stroke-width="1.8" points="40.0,134.3 59.2,114.3 78.3,106.4 97.5,114.3 116.7,129.3 135.8,137.1 155.0,129.3 174.2,108.6 193.3,88.6 212.5,81.4 231.7,90.0 250.8,105.0 270.0,69.3 289.2,104.3 308.3,83.6 327.5,63.6 346.7,56.4 365.8,65.0 385.0,80.0 404.2,87.9 423.3,79.3 442.5,57.9 461.7,38.6 480.8,31.4 500.0,40.7"/>
  <polyline fill="none" stroke="#eea66f" stroke-width="4" points="270.0,69.3 289.2,104.3 308.3,83.6 327.5,63.6 346.7,56.4 365.8,65.0 385.0,80.0 404.2,87.9"/>
  <line x1="40.0" y1="134.3" x2="500.0" y2="48.6" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/>
  <text x="40.0" y="186.0" font-size="10" text-anchor="middle" fill="currentColor">year 0</text>
  <text x="116.7" y="186.0" font-size="10" text-anchor="middle" fill="currentColor">year 4</text>
  <text x="193.3" y="186.0" font-size="10" text-anchor="middle" fill="currentColor">year 8</text>
  <text x="270.0" y="186.0" font-size="10" text-anchor="middle" fill="currentColor">year 12</text>
  <text x="346.7" y="186.0" font-size="10" text-anchor="middle" fill="currentColor">year 16</text>
  <text x="423.3" y="186.0" font-size="10" text-anchor="middle" fill="currentColor">year 20</text>
  <text x="500.0" y="186.0" font-size="10" text-anchor="middle" fill="currentColor">year 24</text>
  <text x="337.1" y="34.0" font-size="11" text-anchor="middle" fill="currentColor">cherry-picked window</text>
  <text x="135.8" y="55.7" font-size="11" text-anchor="middle" fill="currentColor">long-run trend (dashed): rising</text>
</svg>
</div>

Over all 24 years the values rise by about half a unit a year. But "since year 12, the value has fallen from 29.1 to
26.5" is a true statement: year 12 was a one-off spike. Ask: **why does the graph start here?** What does a longer
range show? Is the starting point unusual?

### Survivorship bias

The story goes that in the Second World War, planes returning from missions were examined for bullet holes, and
officers proposed adding armour where the holes were densest. The statistician Abraham Wald pointed out that the data
came only from planes that **survived**. Planes hit in other places, such as the engines, mostly did not come back,
so those were the places that needed armour.

**Survivorship bias** is drawing conclusions only from the cases that made it through some filter, and forgetting
the ones that did not. Examples:

- "Old buildings are so well made": the badly made ones fell down long ago.
- "This investment fund has beaten the market for 10 years": funds that did badly were closed and are not in the list.
- "These famous people dropped out of school and became rich": the many dropouts who did not become rich are not
  interviewed.

Ask: **what happened to the cases we are not seeing?**

### Other questions to ask of any number

1. **Who collected the data, how, and from whom?** Random sample, or volunteers? (Level 5.)
2. **Is it an experiment or an observational study?** Only experiments show cause on their own (lesson 4).
3. **How big is the sample, and what is the margin of error?** (Lesson 2.)
4. **Which average?** Mean or median, for skewed data like incomes (level 7).
5. **Compared with what?** A number without a comparison means little.
6. **Is the graph honest?** Axis starting at zero for bars, equal time steps, no 3D distortion (level 4).
7. **Was this one result of many tests?** (Lesson 3, multiple testing.) Has it been repeated by others?
8. **Could a lurking variable or a different mix explain it?** (Lesson 5.)

None of these questions accuses anyone of lying. Most misleading statistics are honest numbers chosen or framed
carelessly. Asking the questions is how you find out which numbers deserve your trust.

## Worked examples

**1. Turning relative into absolute.** A report says a medicine "reduces the risk of a stroke by 40%". In the study,
5% of the placebo group had a stroke within ten years. Find the absolute risk in the medicine group, the absolute
risk difference and the NNT.

- Medicine group risk: $5\% \times (1 - 0.40) = 3\%$.
- Absolute difference: $5\% - 3\% = 2$ percentage points.
- NNT: $1 \div 0.02 = 50$. Fifty people take the medicine for ten years to prevent one stroke.

**2. Percent and points.** Unemployment falls from 8% to 6%. Describe the change in two correct ways.

It fell by **2 percentage points**, which is a fall of $2 \div 8 = 25\%$. Saying "unemployment fell 2%" is ambiguous
and usually wrong.

**3. Rates.** City P (population 2 000 000) had 160 robberies last year; town Q (population 50 000) had 10. Which is
safer?

P: $160 \div 2\,000\,000 = 8$ per 100 000 people. Q: $10 \div 50\,000 = 20$ per 100 000 people. Q had far fewer
robberies but a higher **rate**. (With only 10 robberies, Q's rate also wobbles a lot from year to year: one or two
robberies change it a great deal.)

**4. Spotting a cherry-pick.** A company's annual report says "sales have grown 30% since 2020". Sales were: 2018:
100, 2019: 104, 2020: 70, 2021: 82, 2022: 88, 2023: 91 (in millions). What is misleading?

$91 \div 70 = 1.30$, so the 30% is correct. But 2020 was an unusually low year. Compared with 2019, sales are
$91 \div 104 \approx 0.875$, that is about 12.5% **lower**. The start year was chosen at a dip.

**5. Survivorship.** A magazine studies 50 successful start-up companies and finds that 40 of them had founders
who worked more than 80 hours a week. It concludes that long hours lead to success. What is missing?

The failed start-ups. If 80% of failed founders also worked 80-hour weeks, long hours do not distinguish success from
failure at all. You need data on both groups.

## Try it

1. A drug increases the risk of a side effect from 3 in 1000 to 6 in 1000. Give the relative risk, the absolute risk
   difference, and the number of people who must take the drug for one extra person to get the side effect.
2. A party's support rises from 20% to 25%. Give the change in percentage points and as a percent.
3. A headline says: "Cyclists in Province A were in 3000 accidents, cyclists in Province B in only 600." Name two pieces
   of information you need before concluding that B's roads are safer.
4. A screening test "cuts deaths from a disease by 20%". In the unscreened group 10 people per 1000 died of it. How
   many per 1000 died in the screened group? What is the NNT?
5. A school says its graduates earn high salaries, based on a survey that 15% of graduates answered. Which two
   biases might be at work?
6. Temperatures on Mars are measured by a rover over many sols. A blog post compares only the coldest sol this year with
   the warmest sol last year and claims Mars is "cooling fast". What is wrong with the comparison?
7. "Most car crashes happen in clear weather, so clear weather is more dangerous than snow." Explain the error.
8. Explain in your own words why both "the risk doubles" and "the risk rises by 0.01 percentage points" can describe
   the same study.

??? note "Answers"
    1. Relative risk $6 \div 3 = 2$ (doubled). Absolute difference $3$ in 1000 $= 0.3$ percentage points. One extra
       case per $1000 \div 3 \approx 333$ people.
    2. **5 percentage points**; $5 \div 20 = 25\%$ increase.
    3. For example: how many cyclists (or kilometres cycled) each province has; the length of the period; how an
       "accident" is defined and reported in each province. Counts need to become rates.
    4. $10 \times (1 - 0.2) = 8$ per 1000. Absolute difference 2 per 1000, so NNT $= 1000 \div 2 = 500$ people screened
       to prevent one death.
    5. **Non-response bias**: graduates with good jobs may be more willing to answer. **Survivorship / selection**:
       graduates the school cannot reach (or who are not doing well) are missing. Also possible response bias
       (people may round salaries up).
    6. It picks two extreme days, from different seasons (and Mars's year is about 687 Earth days, so "this year" and
       "last year" also need care). A fair comparison uses the same season, or averages over many sols, or a long-run
       trend.
    7. It compares counts, not rates. Most driving happens in clear weather, so most crashes do too. The risk **per
       kilometre driven** is higher in snow.
    8. If the risk goes from 0.01% to 0.02%, it has doubled (relative), and it has risen by 0.01 percentage points
       (absolute). The relative number says the risk is twice as big; the absolute number says how big it is.

## Common mistake

**Reporting only the relative risk.** "Doubles", "cuts by half" and "50% more" sound big whatever the starting
point. Always find the absolute numbers: from what, to what, out of how many.

**Forgetting the missing cases.** A list of winners, survivors or respondents is not the whole population. Ask what
happened to everyone else.

## Where it leads

- Back: [Simpson's paradox](05-simpsons-paradox.md) · Next: [A full investigation](07-full-investigation.md)
- [Level 8 page](index.md) · [Statistics topic page](../index.md)
- Graphs that mislead: [Level 4](../level-4/index.md). Bias in samples: [Level 5: bias](../level-5/06-bias.md).
- Reading test results and base rates (a positive test for a rare disease): [Probability, level 8: Bayes' theorem](../../probability/level-8/01-bayes-theorem.md).
- Percents, rates and per-capita numbers: [Ratio and proportion](../../ratio/index.md).
