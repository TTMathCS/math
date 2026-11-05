---
title: "Tree diagrams"
---

# Tree diagrams

*Counting and combinations · level 2, lesson 1 of 6*

## A question to start

The school lunch table has 3 kinds of sandwich (cheese, egg and tuna), 2 drinks (milk and juice) and 2 fruits (an
apple and a pear). Every child takes one sandwich, one drink and one fruit. Lily says: "I'm going to have a different
lunch every school day until I've had them all." How many school days will that take?

In level 1 you counted outfits with a box of rows and columns. That works for **two** kinds of thing, like shirts and
pants. But a lunch has **three** kinds of thing, and a box only has two sides! In this lesson you meet a drawing that
can handle as many kinds of thing as you like: the **tree diagram**.

## The idea

### Choices one after another

Lily makes her lunch in **steps**: first she picks a sandwich, then a drink, then a fruit. Each step is a choice.
Counting the lunches means counting all the different ways to make the three choices, one after another.

A tree diagram draws each step as a set of **branches**, like a tree lying on its side.

### How to draw a tree

1. Put a dot on the left. This is the **start**, before any choice has been made.
2. Draw one branch from the start for each **first** choice. Lily's first choice is the sandwich, so draw 3 branches
   and write cheese, egg and tuna at their ends.
3. From the end of **every** first branch, draw one branch for each **second** choice. Every sandwich can go with
   milk or juice, so each sandwich branch splits into 2.
4. From the end of every second branch, draw a branch for each **third** choice: apple or pear.
5. The ends on the far right are called the **tips** (some people say **leaves**, because it is a tree!).

Here is Lily's tree.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 275" role="img" aria-label="A tree diagram. The start splits into 3 branches for cheese, egg and tuna sandwiches. Each splits into 2 branches for milk and juice. Each of those splits into 2 branches for apple and pear. There are 12 tips.">
  <g stroke="currentColor" stroke-width="1.5"><line x1="20" y1="136.0" x2="120" y2="48.0"/><line x1="120" y1="48.0" x2="220" y2="26.0"/><line x1="220" y1="26.0" x2="310" y2="15"/><line x1="220" y1="26.0" x2="310" y2="37"/><line x1="120" y1="48.0" x2="220" y2="70.0"/><line x1="220" y1="70.0" x2="310" y2="59"/><line x1="220" y1="70.0" x2="310" y2="81"/><line x1="20" y1="136.0" x2="120" y2="136.0"/><line x1="120" y1="136.0" x2="220" y2="114.0"/><line x1="220" y1="114.0" x2="310" y2="103"/><line x1="220" y1="114.0" x2="310" y2="125"/><line x1="120" y1="136.0" x2="220" y2="158.0"/><line x1="220" y1="158.0" x2="310" y2="147"/><line x1="220" y1="158.0" x2="310" y2="169"/><line x1="20" y1="136.0" x2="120" y2="224.0"/><line x1="120" y1="224.0" x2="220" y2="202.0"/><line x1="220" y1="202.0" x2="310" y2="191"/><line x1="220" y1="202.0" x2="310" y2="213"/><line x1="120" y1="224.0" x2="220" y2="246.0"/><line x1="220" y1="246.0" x2="310" y2="235"/><line x1="220" y1="246.0" x2="310" y2="257"/></g>
  <circle cx="20" cy="136.0" r="5" fill="currentColor"/>
  <g stroke="currentColor" stroke-width="1"><circle cx="120" cy="48.0" r="7" fill="#eea66f"/><circle cx="220" cy="26.0" r="6" fill="#9cc9ea"/><circle cx="310" cy="15" r="5" fill="#7ccf9a"/><circle cx="310" cy="37" r="5" fill="#7ccf9a"/><circle cx="220" cy="70.0" r="6" fill="#9cc9ea"/><circle cx="310" cy="59" r="5" fill="#7ccf9a"/><circle cx="310" cy="81" r="5" fill="#7ccf9a"/><circle cx="120" cy="136.0" r="7" fill="#eea66f"/><circle cx="220" cy="114.0" r="6" fill="#9cc9ea"/><circle cx="310" cy="103" r="5" fill="#7ccf9a"/><circle cx="310" cy="125" r="5" fill="#7ccf9a"/><circle cx="220" cy="158.0" r="6" fill="#9cc9ea"/><circle cx="310" cy="147" r="5" fill="#7ccf9a"/><circle cx="310" cy="169" r="5" fill="#7ccf9a"/><circle cx="120" cy="224.0" r="7" fill="#eea66f"/><circle cx="220" cy="202.0" r="6" fill="#9cc9ea"/><circle cx="310" cy="191" r="5" fill="#7ccf9a"/><circle cx="310" cy="213" r="5" fill="#7ccf9a"/><circle cx="220" cy="246.0" r="6" fill="#9cc9ea"/><circle cx="310" cy="235" r="5" fill="#7ccf9a"/><circle cx="310" cy="257" r="5" fill="#7ccf9a"/></g>
  <g font-size="11" fill="currentColor"><text x="120" y="37.0" text-anchor="middle">cheese</text><text x="212" y="18.0" text-anchor="end">milk</text><text x="320" y="19">apple</text><text x="405" y="19" text-anchor="end">1</text><text x="320" y="41">pear</text><text x="405" y="41" text-anchor="end">2</text><text x="212" y="86.0" text-anchor="end">juice</text><text x="320" y="63">apple</text><text x="405" y="63" text-anchor="end">3</text><text x="320" y="85">pear</text><text x="405" y="85" text-anchor="end">4</text><text x="120" y="125.0" text-anchor="middle">egg</text><text x="212" y="106.0" text-anchor="end">milk</text><text x="320" y="107">apple</text><text x="405" y="107" text-anchor="end">5</text><text x="320" y="129">pear</text><text x="405" y="129" text-anchor="end">6</text><text x="212" y="174.0" text-anchor="end">juice</text><text x="320" y="151">apple</text><text x="405" y="151" text-anchor="end">7</text><text x="320" y="173">pear</text><text x="405" y="173" text-anchor="end">8</text><text x="120" y="243.0" text-anchor="middle">tuna</text><text x="212" y="194.0" text-anchor="end">milk</text><text x="320" y="195">apple</text><text x="405" y="195" text-anchor="end">9</text><text x="320" y="217">pear</text><text x="405" y="217" text-anchor="end">10</text><text x="212" y="262.0" text-anchor="end">juice</text><text x="320" y="239">apple</text><text x="405" y="239" text-anchor="end">11</text><text x="320" y="261">pear</text><text x="405" y="261" text-anchor="end">12</text></g>
</svg>
</div>

### One path, one lunch

Put your finger on the start and slide it along the branches to any tip. Your finger passes one sandwich, one drink
and one fruit. That trip is a **path**, and it spells out one lunch. For example, which lunch is tip 7? Tips 1 to 4 belong to cheese, tips 5 to 8 to egg, tips 9 to 12 to tuna. Inside the
egg group, tips 5 and 6 are milk, tips 7 and 8 are juice. Tip 7 is the first fruit, the apple. So tip 7 is **egg,
juice, apple**.

There are **12 tips**, so there are **12 lunches**, and Lily can have a different lunch every school day for 12
days. That is almost two and a half school weeks.

### Why counting tips counts lunches

Here is the careful reason, the same kind of reason as in level 1.

- **Every lunch has a path.** Take any lunch, like tuna, milk, pear. Start at the dot, take the tuna branch, then
  the milk branch from there, then the pear branch. You reach a tip. So no lunch is missing from the tree.
- **Every path is a different lunch.** Two different paths must split apart somewhere. Where they split, they take
  different branches, so they choose something different. So no lunch is counted twice.
- **Every tip has exactly one path.** You cannot go backwards on a tree and branches never join together again, so
  there is only one way to reach each tip.

So lunches, paths and tips all match up one to one. Counting any of them counts all of them. That is why a tree
diagram is so useful: the hard question "how many lunches?" turns into the easy question "how many tips?".

### A tree where the branches change

Trees also work when the choices **change** as you go. Remember lining up Ana, Ben and Cai in level 1? Draw it as a
tree. The first choice is who stands **first**: 3 branches. The second choice is who stands **second**, but the
person already at the front cannot stand second too, so only 2 branches are left. Then only 1 person is left for
last.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 188" role="img" aria-label="A tree for lining up Ana, Ben and Cai. 3 branches for who is first, each splits into 2 for who is second, then 1 for who is last. 6 tips: A B C, A C B, B A C, B C A, C A B, C B A.">
  <g stroke="currentColor" stroke-width="1.5"><line x1="25" y1="83.0" x2="120" y2="31.0"/><line x1="120" y1="31.0" x2="215" y2="18"/><line x1="215" y1="18" x2="300" y2="18"/><line x1="120" y1="31.0" x2="215" y2="44"/><line x1="215" y1="44" x2="300" y2="44"/><line x1="25" y1="83.0" x2="120" y2="83.0"/><line x1="120" y1="83.0" x2="215" y2="70"/><line x1="215" y1="70" x2="300" y2="70"/><line x1="120" y1="83.0" x2="215" y2="96"/><line x1="215" y1="96" x2="300" y2="96"/><line x1="25" y1="83.0" x2="120" y2="135.0"/><line x1="120" y1="135.0" x2="215" y2="122"/><line x1="215" y1="122" x2="300" y2="122"/><line x1="120" y1="135.0" x2="215" y2="148"/><line x1="215" y1="148" x2="300" y2="148"/></g>
  <circle cx="25" cy="83.0" r="5" fill="currentColor"/>
  <g stroke="currentColor" stroke-width="1"><circle cx="120" cy="31.0" r="10" fill="#eea66f"/><circle cx="215" cy="18" r="10" fill="#9cc9ea"/><circle cx="300" cy="18" r="10" fill="#7ccf9a"/><circle cx="215" cy="44" r="10" fill="#7ccf9a"/><circle cx="300" cy="44" r="10" fill="#9cc9ea"/><circle cx="120" cy="83.0" r="10" fill="#9cc9ea"/><circle cx="215" cy="70" r="10" fill="#eea66f"/><circle cx="300" cy="70" r="10" fill="#7ccf9a"/><circle cx="215" cy="96" r="10" fill="#7ccf9a"/><circle cx="300" cy="96" r="10" fill="#eea66f"/><circle cx="120" cy="135.0" r="10" fill="#7ccf9a"/><circle cx="215" cy="122" r="10" fill="#eea66f"/><circle cx="300" cy="122" r="10" fill="#9cc9ea"/><circle cx="215" cy="148" r="10" fill="#9cc9ea"/><circle cx="300" cy="148" r="10" fill="#eea66f"/></g>
  <g font-size="11" fill="currentColor" text-anchor="middle"><text x="120" y="35.0">A</text><text x="215" y="22">B</text><text x="300" y="22">C</text><text x="215" y="48">C</text><text x="300" y="48">B</text><text x="120" y="87.0">B</text><text x="215" y="74">A</text><text x="300" y="74">C</text><text x="215" y="100">C</text><text x="300" y="100">A</text><text x="120" y="139.0">C</text><text x="215" y="126">A</text><text x="300" y="126">B</text><text x="215" y="152">B</text><text x="300" y="152">A</text></g>
  <g font-size="12" fill="currentColor"><text x="325" y="22">A B C</text><text x="325" y="48">A C B</text><text x="325" y="74">B A C</text><text x="325" y="100">B C A</text><text x="325" y="126">C A B</text><text x="325" y="152">C B A</text></g>
  <g font-size="11" fill="currentColor" text-anchor="middle"><text x="120" y="180">1st: 3 ways</text><text x="215" y="180">2nd: 2 ways</text><text x="300" y="180">3rd: 1 way</text></g>
</svg>
</div>

The tree has 3 branches, then 2 from each, then 1 from each: **6 tips**, the same 6 line-ups we acted out. Notice
that the branches from Ana are labelled B and C, but the branches from Ben are labelled A and C. The **names** on
the branches change, but the **number** of branches at each step does not. That will matter a lot in the next
lesson.

### Trees and boxes

What about Teddy's outfits from level 1, 2 shirts and 3 pants? As a tree: 2 branches, each splitting into 3, for
**6 tips**. The box and the tree show the same 6 outfits: each **row** of the box is one **first branch** of the
tree. A tree is a box that can keep going: a box stops at two steps, a tree can have three, four or a hundred.

<figure class="play" data-play="outfits"><span class="ai-tag">AI-created</span><figcaption><b>A tree as rows.</b> Each row is one branch: one shirt with all the trousers.</figcaption></figure>

## Worked examples

**1. Ice-cream with toppings.** You choose a cone or a cup, then one flavour (chocolate or vanilla), then one topping
(sprinkles, nuts or sauce). Draw the tree and count.

- Start: 2 branches (cone, cup).
- Each splits into 2 (chocolate, vanilla): 4 ends so far.
- Each of those splits into 3 (sprinkles, nuts, sauce): 4 groups of 3 tips.

3 and 3 and 3 and 3 make **12 treats**.

**2. Tossing a coin three times.** A coin can land heads (H) or tails (T). You toss it 3 times and write what
happens, like H T T. How many different results?

Each toss is a step with 2 branches. After 1 toss: 2 tips. After 2 tosses: each of those splits into 2, so 4 tips.
After 3 tosses: each of the 4 splits into 2, so **8 tips**:

H H H, H H T, H T H, H T T, T H H, T H T, T T H, T T T.

Look: these are the same as the 8 towers of orange and blue blocks from level 1, with H for orange and T for blue!

**3. Reading a path backwards.** In Lily's tree, which tip is tuna, juice, pear? Tuna is the third group: tips 9 to
12. Juice is the second half of that group: tips 11 and 12. Pear is the second fruit: **tip 12**, the very last one.

**4. A tree that is not even.** At the café you choose a drink: milk, juice or hot chocolate. If you choose hot
chocolate, you also choose marshmallows or no marshmallows. How many orders?

Draw it: milk is 1 tip (no more choices), juice is 1 tip, and hot chocolate splits into 2. Total **4 orders**:
milk; juice; hot chocolate with marshmallows; hot chocolate without. A tree does not have to split the same way
everywhere. You just count the tips.

## Try it

1. Draw a tree for 2 hats (red, blue) and 3 scarves (striped, spotty, plain). How many tips?
2. Lily's school adds a fourth sandwich, cheese and tomato. How many lunches now? (Think: how many tips does the new
   sandwich branch add?)
3. In Lily's tree, which lunch is tip 6? Which tip is cheese, juice, apple?
4. Draw a tree for tossing a coin twice. List the results.
5. You spin a spinner with 3 colours (red, yellow, green) and then toss a coin. How many results? List them.
6. A pet shop sells cats and dogs. Cats come in black or white. Dogs come in black, white or brown. Draw a tree.
   How many different pets?
7. Draw a tree for lining up 4 friends, but only draw the branches that start with Ana. How many tips does that part
   have? How many line-ups are there altogether?

??? note "Answers"
    1. 2 branches, each splitting into 3: **6 tips**.
    2. The new sandwich gets its own branch, which splits into 2 drinks, each splitting into 2 fruits: 4 new tips.
       12 and 4 make **16 lunches**.
    3. Tip 6 is in the egg group (5 to 8), the milk half (5 and 6), second fruit: **egg, milk, pear**. Cheese, juice,
       apple is in the cheese group (1 to 4), juice half (3 and 4), first fruit: **tip 3**.
    4. **4 results:** H H, H T, T H, T T.
    5. 3 branches, each splitting into 2: **6 results**: red H, red T, yellow H, yellow T, green H, green T.
    6. The cat branch splits into 2, the dog branch splits into 3. **5 pets** (2 cats and 3 dogs). This tree is not
       even, and we count tips, so we add: 2 and 3.
    7. From Ana, the second place has 3 branches (Ben, Cai, Dee), each of those has 2, and each of those has 1. That
       part has **6 tips**. Ben, Cai and Dee each start a part just like it, so there are 6 and 6 and 6 and 6, which
       is **24 line-ups**.

## Common mistake

**Forgetting to split every branch.** When you draw the second step, it is easy to split the first branch and then
forget the others. **Every** end must split (unless the story says that choice is finished, as in example 4).

**Joining branches together.** In a tree, branches only split; they never join back up. If two branches meet, your
drawing is no longer a tree and you may count something twice.

## Where it leads

- Previous level: [Level 1: How many ways?](../level-1/index.md), especially [Being organised](../level-1/06-being-organised.md)
  · Next: [From trees to multiplying](02-trees-to-multiplying.md), where you count the tips without drawing them.
- [Level 2 page](index.md) · [Counting topic page](../index.md)
- Trees for coin tosses and spinners are how chances are worked out: [Probability](../../probability/index.md).
- Computer scientists draw trees all the time, to store information and to search through choices.
