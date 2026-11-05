---
title: "Committees with conditions"
---

# Committees with conditions

*Counting and combinations · level 5, lesson 5 of 6*

## A question to start

A club has 6 boys and 5 girls. A committee of 4 is chosen, and it must include **at least one girl**. Two students
work it out.

- Priya says: "First choose one girl to make sure there is one: 5 ways. Then choose any 3 of the 10 people left:
  $\dbinom{10}{3} = 120$ ways. So $5 \times 120 = 600$."
- Tom says: "There are $\dbinom{11}{4} = 330$ committees in total, so it cannot be 600!"

Tom is right that 600 is impossible: it is more than the number of committees with no conditions at all. But Priya's
method sounds sensible. Where exactly does it go wrong? (The true answer is 315.) This lesson is about counting groups
with conditions attached, and about the one trap that catches almost everybody.

## The idea

### Choosing from separate pools

Many committee questions choose from two or more separate **pools** (boys and girls, teachers and students, red and
blue marbles). If the committee must have exactly 2 girls and 2 boys, you choose the girls **and** then the boys. The
choices do not affect each other, so multiply:

$$\binom{5}{2} \times \binom{6}{2} = 10 \times 15 = 150.$$

This is the multiplication principle from level 2, with a combination at each step.

### "At least" and "at most": split into cases

"At least 2 girls" on a committee of 4 means **2 or 3 or 4 girls**. These are separate cases (a committee cannot have
exactly 2 and exactly 3 girls), so count each case and **add**:

| Girls | Boys | Ways |
| --- | --- | --- |
| 2 | 2 | $\binom{5}{2}\binom{6}{2} = 10 \times 15 = 150$ |
| 3 | 1 | $\binom{5}{3}\binom{6}{1} = 10 \times 6 = 60$ |
| 4 | 0 | $\binom{5}{4}\binom{6}{0} = 5 \times 1 = 5$ |
| | | total **215** |

The cases must be **separate** (no committee in two cases) and **complete** (every allowed committee in some case).
Then adding is safe.

### Or count what you do not want

Sometimes the cases you do not want are fewer. "At least 2 girls" is everything except "0 girls" and "1 girl":

$$\binom{11}{4} - \binom{6}{4} - \binom{5}{1}\binom{6}{3} = 330 - 15 - 100 = 215.$$

For "at least one", the opposite is just "none", so this is nearly always the quickest way:

$$\text{at least one girl} = \binom{11}{4} - \binom{6}{4} = 330 - 15 = 315.$$

### What went wrong with 600?

Priya chose a "guaranteed" girl first and then 3 more people. The trouble is that her "3 more people" can also include
girls. Take the committee {Amy, Bea, Carl, Dan}. Priya's method makes it twice:

- choose Amy first, then Bea, Carl, Dan;
- choose Bea first, then Amy, Carl, Dan.

Same committee, counted twice. A committee with 2 girls is counted 2 times, one with 3 girls 3 times, and one with 4
girls 4 times. Check it:

$$100 \times 1 + 150 \times 2 + 60 \times 3 + 5 \times 4 = 100 + 300 + 180 + 20 = 600.$$

That is exactly Priya's 600. Her method does not count committees; it counts committees **with one of their girls
marked as "the first one"**. Whenever you "first pick one to be safe, then pick the rest from everybody", you are
almost certainly overcounting. Use cases or the complement instead.

<figure class="sketch"><span class="ai-tag">AI-created</span><svg viewBox="0 0 640 380" role="img" aria-labelledby="sk-m-twice-t"><title id="sk-m-twice-t">Choosing Amy first and then Bea, Carl and Dan, or Bea first and then Amy, Carl and Dan, gives the same committee, so it is counted twice</title><defs><filter id="sk-m-twice-pen"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="3.2"/></filter><filter id="sk-m-twice-paper"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="7"/><feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 .10 0"/></filter><pattern id="sk-m-twice-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="7" stroke="#8a4a2a" stroke-width="1.1" opacity=".55"/></pattern><pattern id="sk-m-twice-dots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r="1" fill="#8a4a2a" opacity=".5"/><circle cx="6.5" cy="7" r=".8" fill="#8a4a2a" opacity=".4"/></pattern><marker id="sk-m-twice-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L9 5L1 9" fill="none" stroke="#3a2a1e" stroke-width="1.6" stroke-linecap="round"/></marker></defs><rect width="640" height="380" filter="url(#sk-m-twice-paper)"/><g filter="url(#sk-m-twice-pen)"><text x="30" y="44" class="h">The same committee, counted twice</text><path class="p gold" d="M40 84 L130 84 L130 124 L40 124Z"/><text x="85" y="110" text-anchor="middle" class="l">Amy</text><text x="85" y="146" text-anchor="middle" class="s">"the first girl"</text><text x="150" y="110" class="b">+</text><path class="p room" d="M180 84 L250 84 L250 124 L180 124Z"/><text x="215" y="110" text-anchor="middle" class="l">Bea</text><path class="p room" d="M260 84 L330 84 L330 124 L260 124Z"/><text x="295" y="110" text-anchor="middle" class="l">Carl</text><path class="p room" d="M340 84 L410 84 L410 124 L340 124Z"/><text x="375" y="110" text-anchor="middle" class="l">Dan</text><path class="p gold" d="M40 194 L130 194 L130 234 L40 234Z"/><text x="85" y="220" text-anchor="middle" class="l">Bea</text><text x="85" y="256" text-anchor="middle" class="s">"the first girl"</text><text x="150" y="220" class="b">+</text><path class="p room" d="M180 194 L250 194 L250 234 L180 234Z"/><text x="215" y="220" text-anchor="middle" class="l">Amy</text><path class="p room" d="M260 194 L330 194 L330 234 L260 234Z"/><text x="295" y="220" text-anchor="middle" class="l">Carl</text><path class="p room" d="M340 194 L410 194 L410 234 L340 234Z"/><text x="375" y="220" text-anchor="middle" class="l">Dan</text><path class="p" d="M430 104 C480 104 500 150 520 158 M430 214 C480 214 500 170 520 162"/><text x="530" y="152" class="l">one</text><text x="530" y="174" class="l">committee</text><text x="30" y="320" class="s">Priya's 600 counts each committee once for every girl in it.</text><text x="30" y="348" class="l">Count what you do not want: 330 − 15 with no girl = 315.</text></g></svg><figcaption>Sketched for this page from the example above.</figcaption></figure>

### Special roles

Now suppose a committee of 4 from 10 people needs a **president** and 3 ordinary members. The president is different
from the others, so order matters a little, but not completely. Two good ways to count:

- Choose the president (10 ways), then the 3 ordinary members from the other 9: $10 \times \dbinom{9}{3} = 10 \times 84 = 840$.
- Choose the 4 people, $\dbinom{10}{4} = 210$, then choose which of them is president (4 ways): $210 \times 4 = 840$.

The same answer two ways. Compare: with no president it is 210; with four different jobs it is
${}^{10}P_4 = 5040$. A president plus 3 equal members sits in between.

### Must include, must leave out

- If Ana **must** be on the committee, put her on and choose the remaining places from everyone else.
- If Ben **must not** be on it, remove him from the pool before choosing.
- If Ana and Ben **refuse to serve together**, count all committees and take away those with both of them.

<figure class="play" data-play="arrange" data-mode="comb"><span class="ai-tag">AI-created</span><figcaption><b>Committees.</b> List every committee of k from n people.</figcaption></figure>

## Worked examples

**1. Exactly and at least.** From 6 boys and 5 girls, a committee of 4. How many have (a) exactly 2 girls, (b) at least
2 girls?

(a) $\dbinom{5}{2}\dbinom{6}{2} = 150$. (b) $150 + 60 + 5 = 215$, or $330 - 15 - 100 = 215$, as above.

**2. A president.** From 10 people, choose a president, a secretary and 2 ordinary members.

- President: 10 ways. Secretary: 9 ways. Two ordinary members from the remaining 8: $\dbinom{8}{2} = 28$.
- Total: $10 \times 9 \times 28 = 2520$.
- Check another way: choose the 4 people, $\dbinom{10}{4} = 210$; give out the two jobs among them, $4 \times 3 = 12$;
  $210 \times 12 = 2520$. ✓

**3. Two who will not work together.** A committee of 4 is chosen from 10 people, but Ana and Ben refuse to serve
together. How many committees?

- All committees: $\dbinom{10}{4} = 210$.
- Committees with both Ana and Ben: they take 2 places, choose 2 more from the other 8: $\dbinom{8}{2} = 28$.
- Allowed: $210 - 28 = 182$.
- Check with cases: neither of them, $\dbinom{8}{4} = 70$; exactly one of them, $2 \times \dbinom{8}{3} = 2 \times 56 = 112$;
  $70 + 112 = 182$. ✓

**4. Three colours.** A box has 6 red, 4 blue and 3 green marbles, all different (each has a number on it). In how
many ways can you choose 4 marbles with at least one of each colour?

Four marbles and three colours means one colour appears twice and the others once. Cases by which colour is doubled:

- 2 red, 1 blue, 1 green: $\dbinom{6}{2} \times 4 \times 3 = 15 \times 12 = 180$.
- 1 red, 2 blue, 1 green: $6 \times \dbinom{4}{2} \times 3 = 6 \times 6 \times 3 = 108$.
- 1 red, 1 blue, 2 green: $6 \times 4 \times \dbinom{3}{2} = 24 \times 3 = 72$.

Total: $180 + 108 + 72 = 360$.

## Try it

1. A class has 7 boys and 4 girls. How many committees of 5 have exactly 3 boys?
2. For the same class, how many committees of 5 have at least one girl?
3. How many committees of 5 have at most one girl?
4. A team of 12 chooses a captain, a vice-captain and 3 other players for a meeting. How many ways?
5. A committee of 4 is chosen from 9 people. It must include Ana but must not include Ben. How many ways?
6. A committee of 5 is chosen from 12 people, but Sam and Tom refuse to serve together. How many committees? Check
   your answer with cases.
7. Explain, with an example, why "choose one girl, then choose 4 more from the other 10" does **not** count the
   committees of 5 with at least one girl in question 2.
8. A school committee has 3 teachers (from 5) and 4 students (from 10). One student, Max, refuses to serve with one
   teacher, Ms Lee. How many committees are possible?

??? note "Answers"
    1. $\dbinom{7}{3}\dbinom{4}{2} = 35 \times 6 = 210$.
    2. All committees $\dbinom{11}{5} = 462$; with no girls (all boys) $\dbinom{7}{5} = 21$. At least one girl:
       $462 - 21 = 441$.
    3. No girls: $\dbinom{7}{5} = 21$. One girl: $\dbinom{4}{1}\dbinom{7}{4} = 4 \times 35 = 140$. Total
       $21 + 140 = 161$.
    4. Captain 12, vice-captain 11, then 3 of the remaining 10: $\dbinom{10}{3} = 120$. Total
       $12 \times 11 \times 120 = 15840$.
    5. Put Ana in, take Ben out: choose 3 more from the remaining 7. $\dbinom{7}{3} = 35$.
    6. All: $\dbinom{12}{5} = 792$. Both Sam and Tom: choose 3 more from 10, $\dbinom{10}{3} = 120$. Allowed:
       $792 - 120 = 672$. Cases: neither, $\dbinom{10}{5} = 252$; exactly one, $2 \times \dbinom{10}{4} = 2 \times 210 = 420$;
       $252 + 420 = 672$. ✓
    7. That method gives $4 \times \dbinom{10}{4} = 4 \times 210 = 840$, more than the true 441. A committee with
       two girls, say Amy and Bea plus three boys, is made once with Amy as "the chosen girl" and once with Bea as
       "the chosen girl". Committees with more girls are counted even more times.
    8. All: $\dbinom{5}{3}\dbinom{10}{4} = 10 \times 210 = 2100$. With both Ms Lee and Max: choose 2 more teachers
       from 4, $\dbinom{4}{2} = 6$, and 3 more students from 9, $\dbinom{9}{3} = 84$, so $6 \times 84 = 504$.
       Allowed: $2100 - 504 = 1596$.

## Common mistake

**"Choose one to be safe, then choose the rest from everyone."** This counts the same group several times, once for
each member that could have been "the safe one". Use separate cases (exactly 1, exactly 2, ...) or count everything
and subtract the groups with none.

**Adding when you should multiply, or the other way round.** Within one case, choosing the girls **and** the boys
multiplies. Different cases (2 girls **or** 3 girls) add. Write each case on its own line, multiply inside the line,
then add the lines.

## Where it leads

- Back: [Paths on a grid](04-grid-paths.md) · Next: [Cards and hands](06-cards-hands.md)
- [Level 5 page](index.md) · [Counting topic page](../index.md)
- "Count all, take away what you do not want" started in [Level 3, counting what you do not want](../level-3/03-counting-the-rest.md). When the things you take
  away overlap, you need the full method: [Level 6, inclusion-exclusion](../level-6/01-inclusion-exclusion.md).
- Priya's overcount, where each group is counted once for each girl in it, becomes a proof method in
  [Level 7, double counting](../level-7/05-double-counting.md) (counting the same thing two ways).
- The chance that a random committee has at least one girl is $\dfrac{315}{330}$: see
  [Probability](../../probability/index.md).
