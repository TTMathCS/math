---
title: "Arithmetic sequences in real life"
---

# Arithmetic sequences in real life

*Patterns and sequences · level 5, lesson 6 of 6*

## A question to start

A shop wants to stack **100** cans into a triangle for a display: one can on top, two under it, three under those,
and so on, each row one longer than the row above. How many rows can they make? Will any cans be left over?

You could stack real cans and count. Or you could notice that the rows form an arithmetic sequence and that the
total is one of Gauss's sums, and answer it with a pencil in a minute. This lesson is about spotting arithmetic
sequences hiding in everyday situations, and about the small traps that catch people when they do.

## The idea

### When is a situation arithmetic?

A real situation can be modelled by an arithmetic sequence when something changes by the **same amount at each
step**. Clues in the wording: "each row has 2 more seats", "she saves 15 dollars every week", "the fee goes up by
3 dollars per kilometre", "each step is 18 cm higher". The step can be a row, a week, a kilometre or a step of a
staircase; what matters is that the steps are equal and the change at every step is the same.

If the change is a **percentage** ("grows by 5% a year", "loses half its value"), the situation is **not**
arithmetic. Those are multiplying patterns, the geometric sequences of [level 6](../level-6/index.md).

### Four questions to ask before calculating

1. **What are $a$ and $d$?** What is the first value, and how much does it change each step? Is $d$ positive or
   negative?
2. **What does $n$ count, and where does it start?** Is the first row $n = 1$? Or does the story start at "week 0",
   before anything has happened? Starting at 0 changes the formula: with a start value $s$ at step 0, the value after
   $n$ steps is $s + nd$, not $s + (n - 1)d$.
3. **Am I asked for one term or a total?** "How many seats in the last row?" is a term, $t_n$. "How many seats in the
   theatre?" is a sum, $S_n$. Reading this wrong is the most common modelling mistake of all.
4. **Does the answer make sense?** Rows cannot hold 12.4 people, and a savings total cannot be smaller than the last
   deposit. A rough estimate first ("about 25 rows of about 40 seats, so about 1000") catches big slips.

### Stacking things: the rows and the total

Stacks are a natural home for arithmetic sequences, because each layer is one shorter (or one longer) than the layer
below:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 170" role="img" aria-label="A triangular stack of 15 cans: rows of 5, 4, 3, 2 and 1 from the bottom">
  <circle cx="40" cy="140" r="13" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="68" cy="140" r="13" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="96" cy="140" r="13" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="124" cy="140" r="13" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="152" cy="140" r="13" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="190" y="144" font-size="12" fill="currentColor">row 1: 5 cans</text>
  <circle cx="54" cy="115" r="13" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="82" cy="115" r="13" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="110" cy="115" r="13" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <circle cx="138" cy="115" r="13" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="190" y="119" font-size="12" fill="currentColor">row 2: 4 cans</text>
  <circle cx="68" cy="90" r="13" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="96" cy="90" r="13" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <circle cx="124" cy="90" r="13" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="190" y="94" font-size="12" fill="currentColor">row 3: 3 cans</text>
  <circle cx="82" cy="65" r="13" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <circle cx="110" cy="65" r="13" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="190" y="69" font-size="12" fill="currentColor">row 4: 2 cans</text>
  <circle cx="96" cy="40" r="13" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="190" y="44" font-size="12" fill="currentColor">row 5: 1 can</text>
  <line x1="20" y1="153" x2="170" y2="153" stroke="currentColor" stroke-width="2"/>
  <text x="250" y="20" font-size="12" text-anchor="middle" fill="currentColor">5 + 4 + 3 + 2 + 1 = 15</text>
</svg>
</div>

The rows from the bottom are $5, 4, 3, 2, 1$, an arithmetic sequence with $d = -1$, and the whole stack is their sum.
Reading from the top they are $1, 2, 3, 4, 5$, and the total of $n$ rows is the triangular number $\dfrac{n(n + 1)}{2}$.

### The fence-post trap, once more

A fence 30 metres long has a post every 2.5 metres, including both ends. How many posts? $30 \div 2.5 = 12$ is the
number of **gaps**; the number of posts is 13. The positions of the posts, 0, 2.5, 5, ..., 30, form an arithmetic
sequence, and the general term $0 + (n - 1) \times 2.5 = 30$ gives $n = 13$ directly. Many real problems (posts,
floors of a building, birthdays between two dates, pages from page 12 to page 40) hide this trap. The formula with
$n - 1$ in it never falls into it.

## Worked examples

**1. Theatre seats.** The first row of a theatre has 18 seats and each row has 2 more than the row in front. There are
25 rows. How many seats in the last row, and in the whole theatre?

- $a = 18$, $d = 2$, $n = 25$.
- Last row (a term): $t_{25} = 18 + 24 \times 2 = 66$ seats.
- Whole theatre (a sum): $S_{25} = \dfrac{25 \times (18 + 66)}{2} = \dfrac{25 \times 84}{2} = 1050$ seats.
- Estimate: 25 rows averaging about 42 seats is about 1000. ✓

**2. A savings plan.** You save 5 dollars in week 1, 7 dollars in week 2, 9 dollars in week 3, always 2 dollars more
than the week before. How much do you put in during week 52, and how much have you saved in a year?

- Week 52: $t_{52} = 5 + 51 \times 2 = 107$ dollars.
- Total: $S_{52} = \dfrac{52 \times (5 + 107)}{2} = 26 \times 112 = 2912$ dollars.

Compare with a flat plan of 56 dollars every week: $52 \times 56 = 2912$ dollars, exactly the same. That is no
accident: 56 is the average of 5 and 107, and Gauss's formula says the total is "number of weeks times the average
deposit".

**3. Two salary offers.** Job A pays 40 000 dollars in year 1 with a raise of 2000 dollars every year. Job B pays
45 000 dollars in year 1 with a raise of 1000 dollars every year.

- Yearly salaries: A is $40\,000 + 2000(n - 1)$ and B is $45\,000 + 1000(n - 1)$. They are equal when
  $1000(n - 1) = 5000$, so $n - 1 = 5$: in **year 6** both pay 50 000 dollars. After that A pays more.
- Total over 10 years: A earns $\dfrac{10}{2}\big[\,80\,000 + 9 \times 2000\,\big] = 490\,000$ dollars; B earns
  $\dfrac{10}{2}\big[\,90\,000 + 9 \times 1000\,\big] = 495\,000$ dollars. B is still ahead in total.
- Over 20 years: A earns $10 \times (80\,000 + 38\,000) = 1\,180\,000$ dollars; B earns
  $10 \times (90\,000 + 19\,000) = 1\,090\,000$ dollars. A is well ahead.

The salaries cross in year 6, but the **totals** cross much later, because B built up a lead in the early years. The
question "which is better?" depends on how long you stay.

**4. The can display.** With $n$ rows the stack holds $\dfrac{n(n + 1)}{2}$ cans. For 13 rows that is
$\dfrac{13 \times 14}{2} = 91$; for 14 rows it is $\dfrac{14 \times 15}{2} = 105$, too many. So 100 cans make
**13 full rows with 9 cans left over**.

**5. Trips to Mars.** Spacecraft are usually sent from Earth to Mars when the two planets line up well, which happens
about once every **26 months**. If a launch window opens in some month (call it month 0), the windows open in months
0, 26, 52, 78, ... The 10th window after this one is $10 \times 26 = 260$ months later, about 21 years and 8 months.
(The planets' orbits are ovals, not circles, so real windows drift by a few weeks; 26 months is the average spacing.)
Here the story starts at "window 0", so the formula is $26n$ rather than $26(n - 1)$: question 2 of the four.

## Try it

1. A hall has 20 rows. The front row has 12 chairs and each row has 3 more than the one in front. How many chairs in
   the back row? In the hall?
2. Logs are piled with 15 on the bottom layer, 14 on the next, and so on up to 1 on top. How many logs?
3. A taxi charges 4 dollars to start plus 1.75 dollars for each kilometre. Write the cost of a trip of $k$ kilometres,
   and find the cost of a 12 km trip.
4. A runner trains by running 2 km on day 1 and 0.5 km more each day. On which day does she first run 10 km? How far
   has she run in total by the end of that day?
5. A triangular can display uses exactly 120 cans. How many rows does it have?
6. A fence 30 m long has a post every 2.5 m, including both ends. How many posts? What if the fence goes all the way
   around a field with a perimeter of 30 m?
7. Plan A: you start with 100 dollars and add 10 dollars each week. Plan B: you start with nothing and add 25 dollars
   each week. After how many weeks does B first have more?
8. A theatre has 30 rows and 1530 seats. Each row has 2 more seats than the row in front. How many seats are in the
   front row?

??? note "Answers"
    1. Back row: $12 + 19 \times 3 = 69$ chairs. Hall: $\dfrac{20 \times (12 + 69)}{2} = 10 \times 81 = 810$ chairs.
    2. $15 + 14 + \cdots + 1 = \dfrac{15 \times 16}{2} = 120$ logs.
    3. Cost $= 4 + 1.75k$ dollars (here the start, $k = 0$, already costs 4 dollars). For 12 km:
       $4 + 21 = 25$ dollars.
    4. $2 + (n - 1) \times 0.5 = 10$ gives $(n - 1) \times 0.5 = 8$, so $n - 1 = 16$ and $n = 17$: day 17. Total:
       $\dfrac{17 \times (2 + 10)}{2} = 102$ km.
    5. $\dfrac{n(n + 1)}{2} = 120$, so $n(n + 1) = 240 = 15 \times 16$. **15 rows**.
    6. 12 gaps of 2.5 m, so **13 posts** in a straight line. Around a closed loop the last gap ends at the first post,
       so there are as many posts as gaps: **12 posts**.
    7. After $n$ weeks A has $100 + 10n$ dollars and B has $25n$ dollars. B is ahead when $25n > 100 + 10n$, that is
       $15n > 100$, $n > 6.67$. So after **7 weeks** (B has 175 dollars, A has 170 dollars). After 6 weeks A still leads,
       160 dollars to 150 dollars.
    8. $S_{30} = \dfrac{30}{2}\big[\,2a + 29 \times 2\,\big] = 15(2a + 58) = 1530$. So $2a + 58 = 102$, $2a = 44$,
       $a = 22$ seats in the front row. (Check: back row $22 + 58 = 80$, and $\dfrac{30 \times (22 + 80)}{2} = 1530$. ✓)

## Common mistake

**Answering a term question with a sum, or the other way round.** "How much do you save in week 52?" is 107 dollars;
"how much have you saved after 52 weeks?" is 2912 dollars. Underline the question before you start.

**Forcing an arithmetic model.** A plant that grew 2 cm last week will not grow 2 cm every week forever, and a
savings account that earns a percentage is not arithmetic. Use an arithmetic sequence only when the story really
says "the same amount each step".

## Where it leads

- Previous: [Quadratic patterns](05-quadratic-patterns.md) · Next level:
  [Level 6: geometric sequences](../level-6/index.md), where the change is a multiplication, starting with
  [Geometric sequences](../level-6/01-geometric-sequences.md).
- [Level 5 page](index.md) · [Patterns topic page](../index.md)
- Comparing two plans and finding where they cross: [Comparing two patterns](../level-4/05-comparing-two-patterns.md)
  in level 4.
- Turning a story into an equation: [Algebra level 5](../../algebra/level-5/06-modelling-equations.md).
- The 26-month rhythm of trips to Mars is explained on akadian.ca's
  [Mars in space](https://www.akadian.ca/science/mars-facts/space.html) page.
