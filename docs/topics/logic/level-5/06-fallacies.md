---
title: "Fallacies"
---

# Fallacies

*Logic and puzzles · level 5, lesson 6 of 6*

## A question to start

An advertisement shows a famous runner crossing a finish line. The words say:

> **Champions drink ZoomFizz.**

and then, in big letters, **"Be a champion."**

The advert never says "if you drink ZoomFizz, you will be a champion". It does not need to. It hopes your brain will
run the argument for it:

> If someone is a champion, they drink ZoomFizz.
>
> I drink ZoomFizz.
>
> So I am a champion.

Does that follow? Of course not: millions of people who drink the stuff are not champions. But the argument **feels**
right, because it looks a lot like modus ponens from the [last lesson](05-valid-arguments.md). An argument that looks
valid but is not is called a **fallacy**. This lesson shows the two most common ones, how to prove they are invalid,
and how to catch them in the wild.

## The idea

### What makes an argument invalid

Remember: an argument is **valid** when it is impossible for the premises to be true and the conclusion false. So to
show an argument is **invalid**, you need just **one** situation where all the premises are true and the conclusion
is false. Such a situation is a **counterexample** to the argument.

There are two good ways to find one:

1. **A truth table row** where every premise is T and the conclusion is F.
2. **A parallel argument**: keep the form exactly, change the words, and make the premises obviously true and the
   conclusion obviously false. Since validity depends only on form, one bad case kills the form.

### Fallacy 1: affirming the consequent

In $p \to q$, the part $p$ is called the **antecedent** ("what comes before") and $q$ the **consequent** ("what
follows"). **Affirming** means "saying it is true". So "affirming the consequent" is this form:

> $p \to q$
>
> $q$
>
> $\therefore p$ ✗

The truth table finds the counterexample at once:

| $p$ | $q$ | $p \to q$ | $q$ | $p$ |
| --- | --- | --- | --- | --- |
| T | T | **T** | **T** | T |
| T | F | F | F | T |
| F | T | **T** | **T** | **F** |
| F | F | T | F | F |

In the third row both premises are true and the conclusion $p$ is false. **Invalid.**

A parallel argument shows the same thing in plain words: "If it is a dog, it has four legs. My cat has four legs.
So my cat is a dog." Premises true, conclusion silly.

**Why people fall for it.** "$p \to q$" says nothing about what happens when $q$ is true. The arrow points one way.
Wet ground can come from rain **or** from a sprinkler (level 3); four legs can come from a dog **or** a cat. In an
Euler diagram, "if $p$ then $q$" draws the $p$ circle **inside** the $q$ circle. Being in $q$ does not put you in $p$:
there is plenty of room in $q$ outside $p$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 320 180" role="img" aria-label="A small circle p inside a large circle q; a point marked x lies inside q but outside p">
  <ellipse cx="160" cy="90" rx="145" ry="80" fill="#9cc9ea" fill-opacity="0.5" stroke="currentColor"/>
  <ellipse cx="115" cy="95" rx="60" ry="42" fill="#eea66f" fill-opacity="0.85" stroke="currentColor"/>
  <circle cx="240" cy="90" r="5" fill="currentColor"/>
  <g font-size="16" fill="currentColor">
    <text x="105" y="100">p</text><text x="270" y="40">q</text><text x="250" y="95">x</text>
  </g>
</svg>
</div>

The point $x$ is in $q$ but not in $p$: it is the champion-free ZoomFizz drinker.

### Fallacy 2: denying the antecedent

**Denying** means "saying it is false". This form denies the antecedent:

> $p \to q$
>
> $\neg p$
>
> $\therefore \neg q$ ✗

Look at the same table. The row with $p$ F and $q$ T has $p \to q$ true and $\neg p$ true, but $\neg q$ false.
**Invalid**, with the very same counterexample row.

Parallel argument: "If it is a dog, it has four legs. My cat is not a dog. So my cat does not have four legs." The
picture shows the trouble again: being outside $p$ does not put you outside $q$.

Adverts use this one too: "If you use GlowShine, your hair will shine." The listener concludes "if I do not use it,
my hair will not shine", which the advert never said, and which is false.

### Valid and invalid side by side

From the premise $p \to q$ there are four possible second premises. Two give valid arguments and two give fallacies:

| Second premise | Conclusion | Name | Valid? |
| --- | --- | --- | --- |
| $p$ | $q$ | modus ponens | **yes** |
| $\neg q$ | $\neg p$ | modus tollens | **yes** |
| $q$ | $p$ | affirming the consequent | no |
| $\neg p$ | $\neg q$ | denying the antecedent | no |

A neat way to remember: the two fallacies are really the **converse** ($q \to p$) and the **inverse**
($\neg p \to \neg q$) in disguise. In [level 4](../level-4/04-converse-contrapositive.md) you saw that the converse and inverse do not mean the
same as the original. Only the contrapositive does, and the contrapositive is what makes modus tollens work.

### When the fallacy goes away

If the premise is "$p$ **if and only if** $q$" ($p \leftrightarrow q$), then the arrow points both ways, and from $q$
you **can** conclude $p$. "A whole number is even if and only if its last digit is even. The last digit of 3,458 is
8. So 3,458 is even." Valid. So a key question in every argument is: **is it "if", or "if and only if"?** Everyday
speech often blurs them: "if you finish your homework, you can go out" is usually **meant** as "only if", but strictly
it does not say so.

### Fallacy 3: the shared middle

With "all" sentences, a classic fallacy is:

> All A are B.
>
> All C are B.
>
> $\therefore$ All A are C. ✗

"All cats are mammals. All dogs are mammals. So all cats are dogs." Both A and C sit inside B, but they can sit in
different parts of it. Logicians call this the fallacy of the **undistributed middle**: the middle group B is never
used in a way that links A to C. Compare the valid syllogism, where the chain runs A inside B inside C.

### Valid but not sound: false premises

An argument can have a perfect form and still mislead, if a premise is false. A favourite trick is the **false
dilemma**:

> Either you buy the deluxe phone, or you will be left behind.
>
> You do not want to be left behind.
>
> $\therefore$ Buy the deluxe phone.

That is a disjunctive syllogism, which is valid. The weak spot is the first premise: an *or* that pretends there are
only two choices, when there are many (a cheaper phone, keeping your old one). When an argument is valid but its
conclusion seems wrong, **hunt for the false premise**.

### Invalid arguments can have true conclusions

"All squares are rectangles. 7 is prime. So the sun is a star." Every statement is true, but the conclusion does not
**follow**: it has nothing to do with the premises. Invalid. A true conclusion does not rescue a bad argument, and in
mathematics a bad argument for a true fact earns no credit.

## Worked examples

**1. Spot the form.** Valid or a fallacy?

- "If a number is divisible by 4, it is even. 18 is even. So 18 is divisible by 4." Affirming the consequent.
  **Fallacy.** (And indeed 18 is not divisible by 4.)
- "If a number is divisible by 4, it is even. 15 is not even. So 15 is not divisible by 4." Modus tollens.
  **Valid.**
- "If a number is divisible by 4, it is even. 10 is not divisible by 4. So 10 is not even." Denying the antecedent.
  **Fallacy.** (10 is even.)

**2. A doctor's reasoning.** "If you have a cold, you have a runny nose. You have a runny nose. So you have a cold."
This is affirming the consequent. A runny nose also comes with hay fever or cutting onions. A careful doctor treats the
symptom as **evidence** that makes a cold more likely, not as a proof. (How much more likely is a question for
[Probability](../../probability/level-8/01-bayes-theorem.md).)

**3. Building a counterexample by parallel argument.** Someone argues: "If a shape is a square, it has four right
angles. This shape is not a square. So it does not have four right angles." Keep the form and pick a shape: a
2 by 5 rectangle is not a square, yet it has four right angles. Premises true, conclusion false: **invalid**.

**4. An advert unpacked.** "Successful people read our newspaper." The hidden argument: "If successful, then reads
the paper. You read the paper. So you are (or will be) successful." Affirming the consequent. Even if the premise
were true (it is a claim, not a checked fact), the conclusion would not follow.

**5. Repairing an argument.** "If it is Saturday, the library is closed. The library is closed. So it is Saturday."
Fallacy. Two ways to repair it: change the premise to "the library is closed **if and only if** it is Saturday" (then
it is valid, but you must check that this stronger premise is true), or change the second premise to "it is Saturday"
(then modus ponens gives "the library is closed").

## Try it

1. Valid or fallacy? Name it. "If it snows, school closes. School closed. So it snowed."
2. Valid or fallacy? Name it. "If it snows, school closes. It did not snow. So school did not close."
3. Valid or fallacy? Name it. "If it snows, school closes. School did not close. So it did not snow."
4. Give a parallel argument, with the same form as question 1, whose premises are clearly true and conclusion
   clearly false.
5. "All roses are flowers. Some flowers fade quickly. So some roses fade quickly." Valid? Explain with an Euler
   diagram or a parallel argument.
6. "Either we cancel the trip or everyone will get soaked. We do not want everyone soaked. So we cancel." Is the
   form valid? Is there a weak premise?
7. Find the hidden fallacy in this advert: "If you want to win, you need the best shoes. Our shoes are the best."
8. Use a truth table to show that $p \to q$, $\neg p$, $\therefore \neg q$ is invalid, pointing to the bad row.

??? note "Answers"
    1. **Fallacy**: affirming the consequent. School can close for other reasons (a power cut, a holiday).
    2. **Fallacy**: denying the antecedent. School might close without snow.
    3. **Valid**: modus tollens.
    4. For example: "If an animal is a fish, it lives in water. A dolphin lives in water. So a dolphin is a fish."
       Both premises true, conclusion false (a dolphin is a mammal).
    5. **Invalid.** Draw roses inside flowers, and the "fade quickly" group overlapping flowers somewhere outside
       roses. Both premises hold, but no rose is in the fading group. Parallel: "All cats are animals. Some animals
       are fish. So some cats are fish." (This is the form from question 8 of the last lesson.)
    6. The form is a disjunctive syllogism, which is **valid**. The weak premise is the first one, a **false
       dilemma**: there are other choices (take umbrellas, go indoors, change the date).
    7. The premise says: win $\to$ need the best shoes, that is, best shoes are **necessary** for winning. The advert
       wants you to conclude "best shoes $\to$ win", which is the **converse**: affirming the consequent. Even with
       the best shoes, you might not win. (And "our shoes are the best" is an unchecked claim.)
    8. The row $p$ = F, $q$ = T: $p \to q$ is T, $\neg p$ is T (both premises true), but $\neg q$ is F. So the
       conclusion can be false while the premises are true: invalid.

## Common mistake

**Believing an argument because you believe its conclusion.** "All dogs are mammals, Rex is a mammal, so Rex is a
dog" can have a true conclusion (if Rex really is a dog), but the argument is still invalid: it would equally "prove"
that a cat named Rex is a dog. Judge the **steps**, not just the ending.

**Treating "if" as "if and only if".** In mathematics, "if $p$ then $q$" never promises the way back. When you need
both directions, you must say "if and only if" and prove both directions.

## Where it leads

- Back: [Valid arguments](05-valid-arguments.md) · This is the last lesson of level 5. Next:
  [Level 6: logic machines and networks](../level-6/index.md), starting with [logic gates](../level-6/01-logic-gates.md).
- [Level 5 page](index.md) · [Logic topic page](../index.md)
- Statistics has its own famous fallacy, mistaking a link between two things for a cause: see
  [Statistics](../../statistics/index.md). The "gambler's fallacy" is in
  [Probability level 5](../../probability/level-5/06-gamblers-fallacy.md).
- Disproving a claim with one counterexample is a key proof skill in [level 7](../level-7/index.md). On the U of T
  shelf: [MAT137 unit 1](../../../uoft/MAT137/unit01.md) and, for arguments in writing,
  [ENG140 unit 9](../../../uoft/ENG140Y1/unit09.md).
