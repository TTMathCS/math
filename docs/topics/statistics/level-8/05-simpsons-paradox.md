---
title: "Simpson's paradox"
---

# Simpson's paradox

*Statistics and data · level 8, lesson 5 of 7*

## A question to start

Two hospitals each treat 500 patients with the same illness. At Hospital A, 290 recover (58%). At Hospital B, 380
recover (76%). You would choose Hospital B.

But split the patients into mild cases and severe cases, and Hospital A has the **higher** recovery rate in **both**
groups. A hospital that is better for mild patients and better for severe patients, yet worse for patients overall:
it sounds impossible. It is not, and it happens in real data. This lesson shows exactly how, and how to tell which
comparison to trust.

## The idea

### The full table

Here are the numbers behind the puzzle (made up, but the pattern is realistic).

| | Mild: recovered / treated | Severe: recovered / treated | All patients |
| --- | --- | --- | --- |
| Hospital A | 90 / 100 = **90%** | 200 / 400 = **50%** | 290 / 500 = 58% |
| Hospital B | 340 / 400 = 85% | 40 / 100 = 40% | 380 / 500 = **76%** |

Check each part. Mild: 90% beats 85%, so A wins. Severe: 50% beats 40%, so A wins. Overall: 76% beats 58%, so B wins.

When a comparison that holds in every group **reverses** when the groups are combined, it is called **Simpson's
paradox**, after Edward Simpson, who wrote about it in 1951 (others had noticed it earlier). It is not a real
contradiction, only a surprise. The explanation is in the mix.

### The overall rate is a weighted average

Hospital A's overall rate combines its two group rates, but not equally. Of its 500 patients, 100 are mild (20%) and
400 are severe (80%). So

$$\text{A overall} = 0.2 \times 90\% + 0.8 \times 50\% = 18\% + 40\% = 58\%.$$

Hospital B's patients are the other way round: 80% mild, 20% severe.

$$\text{B overall} = 0.8 \times 85\% + 0.2 \times 40\% = 68\% + 8\% = 76\%.$$

A **weighted average** of two numbers always lies between them, closer to the one with more weight. Picture each
hospital's two rates as the ends of a bar; the overall rate sits on the bar, pulled towards the group that holds most
of its patients.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 520 196" role="img" aria-label="Two bars showing recovery rates. Hospital A runs from severe 50 percent to mild 90 percent, with its overall rate 58 percent marked near the severe end because most of its patients are severe. Hospital B runs from 40 to 85 percent, with its overall rate 76 percent near the mild end because most of its patients are mild">
  <line x1="170.0" y1="50" x2="430.0" y2="50" stroke="#eea66f" stroke-width="6"/>
  <circle cx="170.0" cy="50" r="5" fill="currentColor"/>
  <circle cx="430.0" cy="50" r="5" fill="currentColor"/>
  <polygon points="222.0,41 215.0,29 229.0,29" fill="currentColor"/>
  <text x="170.0" y="70.0" font-size="11" text-anchor="middle" fill="currentColor">severe 50%</text>
  <text x="430.0" y="70.0" font-size="11" text-anchor="middle" fill="currentColor">mild 90%</text>
  <text x="222.0" y="24.0" font-size="11" text-anchor="middle" fill="currentColor">overall 58%</text>
  <text x="158.0" y="54.0" font-size="12" text-anchor="end" fill="currentColor">Hospital A</text>
  <line x1="105.0" y1="120" x2="397.5" y2="120" stroke="#9cc9ea" stroke-width="6"/>
  <circle cx="105.0" cy="120" r="5" fill="currentColor"/>
  <circle cx="397.5" cy="120" r="5" fill="currentColor"/>
  <polygon points="339.0,111 332.0,99 346.0,99" fill="currentColor"/>
  <text x="105.0" y="140.0" font-size="11" text-anchor="middle" fill="currentColor">severe 40%</text>
  <text x="397.5" y="140.0" font-size="11" text-anchor="middle" fill="currentColor">mild 85%</text>
  <text x="339.0" y="94.0" font-size="11" text-anchor="middle" fill="currentColor">overall 76%</text>
  <text x="93.0" y="124.0" font-size="12" text-anchor="end" fill="currentColor">Hospital B</text>
  <line x1="40.0" y1="170" x2="495.0" y2="170" stroke="currentColor" stroke-width="1.2"/>
  <line x1="40.0" y1="166" x2="40.0" y2="174" stroke="currentColor"/>
  <text x="40.0" y="188.0" font-size="10" text-anchor="middle" fill="currentColor">30%</text>
  <line x1="105.0" y1="166" x2="105.0" y2="174" stroke="currentColor"/>
  <text x="105.0" y="188.0" font-size="10" text-anchor="middle" fill="currentColor">40%</text>
  <line x1="170.0" y1="166" x2="170.0" y2="174" stroke="currentColor"/>
  <text x="170.0" y="188.0" font-size="10" text-anchor="middle" fill="currentColor">50%</text>
  <line x1="235.0" y1="166" x2="235.0" y2="174" stroke="currentColor"/>
  <text x="235.0" y="188.0" font-size="10" text-anchor="middle" fill="currentColor">60%</text>
  <line x1="300.0" y1="166" x2="300.0" y2="174" stroke="currentColor"/>
  <text x="300.0" y="188.0" font-size="10" text-anchor="middle" fill="currentColor">70%</text>
  <line x1="365.0" y1="166" x2="365.0" y2="174" stroke="currentColor"/>
  <text x="365.0" y="188.0" font-size="10" text-anchor="middle" fill="currentColor">80%</text>
  <line x1="430.0" y1="166" x2="430.0" y2="174" stroke="currentColor"/>
  <text x="430.0" y="188.0" font-size="10" text-anchor="middle" fill="currentColor">90%</text>
  <line x1="495.0" y1="166" x2="495.0" y2="174" stroke="currentColor"/>
  <text x="495.0" y="188.0" font-size="10" text-anchor="middle" fill="currentColor">100%</text>
</svg>
</div>

Hospital A's bar is higher at both ends (50 vs 40, 90 vs 85). But A's overall rate sits near its **low** end because
most of its patients are severe, and B's sits near its **high** end because most of its patients are mild. The
comparison of overall rates is mostly a comparison of **which patients each hospital gets**, not of how well it treats
them.

### Two conditions for the paradox

Simpson's paradox needs both:

1. **A lurking variable that strongly affects the outcome.** Here, severity: severe cases recover far less often,
   whichever hospital treats them.
2. **Very different mixes of that variable in the groups being compared.** Here, A gets mostly severe cases (perhaps
   it is the regional specialist hospital, and difficult cases are sent there).

If either condition fails (severity did not matter, or both hospitals had the same mix), the combined comparison
would agree with the separate ones.

### A real example: kidney stones

A 1986 study in the *British Medical Journal* compared two treatments for kidney stones. Success rates:

| | Small stones | Large stones | All |
| --- | --- | --- | --- |
| Treatment A (open surgery) | 81 / 87 = **93%** | 192 / 263 = **73%** | 273 / 350 = 78% |
| Treatment B (a less invasive method) | 234 / 270 = 87% | 55 / 80 = 69% | 289 / 350 = **83%** |

Treatment A did better for small stones and for large stones, but worse overall. The lurking variable is stone size:
large stones are harder to treat, and doctors tended to use treatment A for the large, difficult ones. 263 of A's 350
patients had large stones; only 80 of B's 350 did.

Another famous case: in 1973 the University of California, Berkeley, admitted about 44% of men who applied to
graduate school but only about 35% of women. Looking department by department, most departments admitted women at a
rate similar to or higher than men. Women had applied more often to departments that were very hard to get into for
everyone. The overall gap came mostly from the mix of departments, not from how each department treated applicants.

### Which comparison should you believe?

Usually the **separate** comparisons, when the grouping variable is a confounder: something that existed **before**
the treatment and affects both which treatment people got and how they did. Severity of illness and size of stone are
like this. Comparing like with like (mild with mild, severe with severe) removes the confounding.

But not always. If the grouping variable is something the treatment itself **changes**, splitting by it can mislead.
For example, if a medicine works by lowering blood pressure, comparing patients "with the same blood pressure after
treatment" hides the very effect you want to see. Deciding which way to look needs knowledge of how the variables
cause each other, not only arithmetic. Statistics alone cannot settle it; that is why the story behind the data
matters.

The safest fix of all is the one from the last lesson: a **randomised experiment**. Random assignment gives both
treatments the same mix of mild and severe cases, so the paradox cannot arise from the mix.

## Worked examples

**1. Checking a weighted average.** For the kidney stone data, check treatment A's overall rate as a weighted average.

Weights: $87 \div 350 \approx 0.249$ small, $263 \div 350 \approx 0.751$ large. Weighted average:
$0.249 \times 93.1\% + 0.751 \times 73.0\% \approx 23.2\% + 54.8\% = 78.0\%$. ✓ It matches $273 \div 350$.

**2. A paradox in sport.** Two basketball players' free throws over a season:

| | First half | Second half | Season |
| --- | --- | --- | --- |
| Player X | 4 / 10 = 40% | 25 / 100 = 25% | 29 / 110 ≈ 26.4% |
| Player Y | 35 / 100 = 35% | 2 / 10 = 20% | 37 / 110 ≈ 33.6% |

X has the better percentage in each half; Y has the better season. X took most of his shots in the second half, when
his percentage was low; Y took most of his in the first half, when his percentage was high. Here the "lurking variable" is the time of season, and the real question is what
you want to compare: a season total is honest as a description, but not as a judgement of who shoots better.

**3. Making the paradox disappear.** Suppose both hospitals had the same mix: 250 mild and 250 severe each, with the
same group rates as before. Then

- A: $0.5 \times 90\% + 0.5 \times 50\% = 70\%$,
- B: $0.5 \times 85\% + 0.5 \times 40\% = 62.5\%$.

Now A wins overall too. With equal mixes, the overall comparison agrees with the separate ones. This is the idea of
**standardising** rates: compare groups as if they had the same mix. It is how health statistics compare death rates
of a young country and an old country fairly.

**4. Building your own paradox.** Make a table where treatment P beats Q in men and in women, but loses overall.

Choose group rates with P ahead: men P 60%, Q 50%; women P 30%, Q 20%. Give P mostly women (low rates) and Q mostly
men (high rates): P treats 20 men and 80 women; Q treats 80 men and 20 women. Then P overall
$= 0.2 \times 60 + 0.8 \times 30 = 12 + 24 = 36\%$, and Q overall $= 0.8 \times 50 + 0.2 \times 20 = 40 + 4 = 44\%$.
P wins in both groups and loses overall.

## Try it

1. In the hospital table, what percent of Hospital B's patients were severe cases? Use it to recompute B's overall
   rate as a weighted average.
2. Show that the overall rate of a group always lies between its two subgroup rates.
3. A company says: "Our average salary rose this year, but the average salary in every department fell." Is this
   possible? Explain how.
4. School 1 has a higher pass rate than School 2 for students who studied French and also for students who studied
   Spanish, but a lower pass rate overall. What must be true about which language course is harder and about which
   school has more students in it?
5. In the kidney stone study, a newspaper writes "Treatment B is more successful." Write a better sentence.
6. Using the weights 50% and 50% (equal mixes), recompute the kidney stone overall rates. Which treatment wins?
7. Explain why a randomised experiment cannot show Simpson's paradox caused by the mix of patient types (at least
   for large experiments).

??? note "Answers"
    1. 100 of 500, that is 20%. Overall $= 0.8 \times 85\% + 0.2 \times 40\% = 68\% + 8\% = 76\%$ ✓.
    2. The overall rate is $w a + (1 - w) b$, where $a$ and $b$ are the subgroup rates and $w$ (between 0 and 1) is
       the share in the first group. If $a \ge b$: $w a + (1 - w) b \le w a + (1 - w) a = a$ and
       $w a + (1 - w) b \ge w b + (1 - w) b = b$. So it lies between $b$ and $a$.
    3. Yes. If the company hired many more people into a high-paying department (or cut people from a low-paying
       one), the mix shifts towards high salaries. The overall average can rise while each department's average falls.
    4. One course must be harder (lower pass rates at both schools); School 1 must have a much bigger share of its
       students in that harder course, so its overall rate is pulled down.
    5. For example: "Treatment A had higher success rates for both small and large stones. Treatment B's higher
       overall rate comes from being used more often on small stones, which are easier to treat."
    6. A: $0.5 \times 93.1 + 0.5 \times 73.0 \approx 83.1\%$. B: $0.5 \times 86.7 + 0.5 \times 68.8 \approx 77.7\%$.
       Treatment **A** wins, as it did in each group.
    7. Random assignment makes the mix of mild and severe (and every other characteristic) about the same in both
       treatment groups. With equal mixes, the overall rates are weighted averages with the same weights, so if one
       treatment wins in every group it wins overall too.

## Common mistake

**Trusting combined percentages when the groups have different mixes.** Before comparing overall rates, ask: is there
a variable that strongly affects the outcome, and do the groups being compared have very different amounts of it?

**Splitting by every variable you can find.** Split by variables that come before the treatment and affect the
outcome. Splitting by something the treatment itself changes can hide the real effect.

## Where it leads

- Back: [Experiments versus observational studies](04-experiments-studies.md) · Next: [Statistics in the news](06-statistics-news.md)
- [Level 8 page](index.md) · [Statistics topic page](../index.md)
- Two-way tables and conditional probability: [Probability, level 6](../../probability/level-6/01-given-two-way-tables.md).
- Weighted averages and the arithmetic of fractions behind the paradox: [Ratio and proportion](../../ratio/index.md).
