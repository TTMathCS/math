---
title: "Division with remainders"
---

# Division with remainders

*Numbers · level 3, lesson 4 of 7*

## A question to start

Here are three questions, and every one of them is $130 \div 40$:

1. 130 students go on a trip. Each bus holds 40. How many buses do we need?
2. A factory has 130 eggs and packs them in trays of 40. How many full trays can it sell?
3. 130 centimetres of ribbon is cut into 40 equal pieces. How long is each piece?

$130 \div 40$ is 3 with 10 left over. Yet the three answers are **4 buses**, **3 trays**, and **3 and a quarter
centimetres**. Same sum, three different answers! In this lesson you will learn to divide big numbers, and then to
think about what the leftover really means.

## The idea

### Two meanings of dividing

$12 \div 3$ can mean two things.

- **Sharing**: share 12 sweets fairly among 3 children. Each child gets 4.
- **Grouping**: put 12 sweets into bags of 3. You can make 4 bags.

Both give 4, because both ask the same question about multiplication: $3 \times \square = 12$. **Division undoes
multiplication.** That is why every division can be checked by multiplying.

### Sharing hundreds, tens and ones

How do we share 756 among 3? Think of 756 as base-ten blocks: 7 hundreds (flats), 5 tens (rods) and 6 ones (cubes).
Share the biggest blocks first.

1. **Hundreds.** 7 flats among 3 people: each gets 2 flats, and 1 flat is left over.
2. **Trade.** A leftover flat cannot be shared, so swap it for 10 rods. Now there are $10 + 5 = 15$ rods.
3. **Tens.** 15 rods among 3: each gets 5 rods, none left.
4. **Ones.** 6 cubes among 3: each gets 2.

Each person has 2 hundreds, 5 tens and 2 ones: $756 \div 3 = 252$.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 120" role="img" aria-label="756 shared among 3 groups. Each group has 2 hundred-flats, 5 ten-rods and 2 ones, which is 252">
  <g stroke="currentColor" stroke-width="1">
    <rect x="30" y="15" width="22" height="22" fill="#9cc9ea"/><rect x="56" y="15" width="22" height="22" fill="#9cc9ea"/>
    <rect x="30" y="45" width="5" height="22" fill="#eea66f"/><rect x="39" y="45" width="5" height="22" fill="#eea66f"/>
    <rect x="48" y="45" width="5" height="22" fill="#eea66f"/><rect x="57" y="45" width="5" height="22" fill="#eea66f"/>
    <rect x="66" y="45" width="5" height="22" fill="#eea66f"/>
    <rect x="78" y="61" width="6" height="6" fill="#7ccf9a"/><rect x="88" y="61" width="6" height="6" fill="#7ccf9a"/>
    <rect x="160" y="15" width="22" height="22" fill="#9cc9ea"/><rect x="186" y="15" width="22" height="22" fill="#9cc9ea"/>
    <rect x="160" y="45" width="5" height="22" fill="#eea66f"/><rect x="169" y="45" width="5" height="22" fill="#eea66f"/>
    <rect x="178" y="45" width="5" height="22" fill="#eea66f"/><rect x="187" y="45" width="5" height="22" fill="#eea66f"/>
    <rect x="196" y="45" width="5" height="22" fill="#eea66f"/>
    <rect x="208" y="61" width="6" height="6" fill="#7ccf9a"/><rect x="218" y="61" width="6" height="6" fill="#7ccf9a"/>
    <rect x="290" y="15" width="22" height="22" fill="#9cc9ea"/><rect x="316" y="15" width="22" height="22" fill="#9cc9ea"/>
    <rect x="290" y="45" width="5" height="22" fill="#eea66f"/><rect x="299" y="45" width="5" height="22" fill="#eea66f"/>
    <rect x="308" y="45" width="5" height="22" fill="#eea66f"/><rect x="317" y="45" width="5" height="22" fill="#eea66f"/>
    <rect x="326" y="45" width="5" height="22" fill="#eea66f"/>
    <rect x="338" y="61" width="6" height="6" fill="#7ccf9a"/><rect x="348" y="61" width="6" height="6" fill="#7ccf9a"/>
  </g>
  <g font-size="13" text-anchor="middle" fill="currentColor">
    <text x="62" y="90">252</text><text x="192" y="90">252</text><text x="322" y="90">252</text>
    <text x="210" y="114">756 ÷ 3 = 252 (2 hundreds, 5 tens, 2 ones each)</text>
  </g>
</svg>
</div>

### Long division: the same sharing, written down

Long division is just this sharing, written in a short way. Let us do $857 \div 4$. The number being shared (857) is
the **dividend**; the number we divide by (4) is the **divisor**; the answer is the **quotient**; what is left is the
**remainder**.

```
      2 1 4   r 1
    -------
 4 ) 8 5 7
     8           4 × 2 hundreds
     -
     0 5         0 hundreds left; bring down 5 tens
       4         4 × 1 ten
       -
       1 7       1 ten left = 10 ones; with 7 ones makes 17
       1 6       4 × 4 ones
       ---
         1       remainder
```

The four steps repeat for each place: **divide, multiply, subtract, bring down**.

1. **Hundreds.** 8 hundreds shared by 4: 2 hundreds each ($4 \times 2 = 8$), 0 left.
2. **Tens.** Bring down the 5 tens. 5 tens shared by 4: 1 ten each ($4 \times 1 = 4$), 1 ten left.
3. **Ones.** That leftover ten is traded for 10 ones; bring down the 7 to make 17 ones. 17 shared by 4: 4 each
   ($4 \times 4 = 16$), 1 left.
4. Nothing more to bring down, so the remainder is **1**.

So $857 \div 4 = 214$ remainder 1, often written **214 r 1**.

"Bring down" sounds mysterious, but it is just the **trade**: the leftover from one place is turned into ten times as
many of the next smaller place, and joined to what is already there.

### Check by multiplying

Division undoes multiplication, so:

$$\text{quotient} \times \text{divisor} + \text{remainder} = \text{dividend}$$

$214 \times 4 + 1 = 856 + 1 = 857$. ✓ Always do this check; it takes ten seconds.

### Why the remainder is always smaller than the divisor

When you divide by 4, the remainder can only be 0, 1, 2 or 3. Why? If 4 or more were left over, you could give
every person one more! The sharing was not finished. So if your remainder is as big as the divisor, or bigger, your
quotient is too small: go back and share more.

### What does the remainder mean?

In a real story, the remainder must be **thought about**, not just written down. There are three common choices.

- **Round up**, when everyone or everything must be included. 130 students, buses of 40: $130 \div 40 = 3$ r 10.
  Three buses leave 10 students behind, so we need **4 buses**.
- **Ignore it** (round down), when only complete groups count. 130 eggs in trays of 40: you can fill **3 trays**;
  the 10 extra eggs do not make a tray.
- **Share it** as a fraction, when the thing can be cut. 7 pizzas shared by 3 people: $7 \div 3 = 2$ r 1. Each
  person gets 2 pizzas, and the last pizza is cut in 3, so each gets $2\tfrac13$ pizzas. (Fractions are the next
  lesson.)

Sometimes the remainder **is** the answer: "130 eggs in trays of 40; how many eggs are left over?" Answer: 10.

<figure class="play" data-play="array" data-mode="share"><span class="ai-tag">AI-created</span><figcaption><b>Division with a remainder.</b> Each group gets the same; what is left is the remainder.</figcaption></figure>

## Worked examples

**1. Share and check: $5482 \div 6$.**

5 thousands cannot be shared by 6 into whole thousands, so start with 54 hundreds.

- 54 hundreds ÷ 6 = 9 hundreds ($6 \times 9 = 54$), 0 left.
- Bring down 8 tens: 8 ÷ 6 = 1 ten, 2 tens left.
- Trade 2 tens for 20 ones, bring down 2: 22 ÷ 6 = 3 ones ($6 \times 3 = 18$), 4 left.

$5482 \div 6 = 913$ r 4. Check: $913 \times 6 = 5478$, and $5478 + 4 = 5482$. ✓

**2. A zero in the answer: $824 \div 4$.**

- 8 hundreds ÷ 4 = 2 hundreds.
- 2 tens ÷ 4: not even one ten each. Write **0** in the tens place, and the 2 tens stay to be traded.
- 2 tens and 4 ones make 24 ones. 24 ÷ 4 = 6.

$824 \div 4 = 206$. Check: $206 \times 4 = 824$. ✓ Forgetting the 0 would give 26, which is far too small.

**3. The buses.** A school of 275 people goes to a planetarium in buses of 48 seats. How many buses?

$48 \times 5 = 240$ and $48 \times 6 = 288$. So $275 \div 48 = 5$ r 35. Five buses leave 35 people behind: we need
**6 buses**.

**4. The boxes.** Muffins are packed in boxes of 6. There are 100 muffins. How many full boxes, and how many muffins
are left?

$6 \times 16 = 96$, so $100 \div 6 = 16$ r 4. **16 full boxes**, and **4 muffins** left (a good snack).

**5. Ribbon.** 25 metres of ribbon cut into 4 equal pieces. $25 \div 4 = 6$ r 1. Each piece is 6 metres and a
quarter of the last metre: $6\tfrac14$ metres.

## Try it

1. Use blocks or a drawing to share 639 among 3.
2. Work out and check: (a) $857 \div 5$ (b) $9375 \div 8$ (c) $1000 \div 7$.
3. Work out $612 \div 6$. Where does a zero appear in the answer, and why?
4. A remainder of 7 appears when dividing by 6. What went wrong?
5. 200 people and tables that seat 8. How many tables are needed?
6. 200 stickers, sheets of 12. How many full sheets? How many stickers left over?
7. 9 sandwiches shared fairly by 4 people. How much does each get?
8. Harder: I am thinking of a number. When I divide it by 5, I get 23 remainder 4. What is the number?

??? note "Answers"
    1. 6 hundreds ÷ 3 = 2 hundreds, 3 tens ÷ 3 = 1 ten, 9 ones ÷ 3 = 3 ones. Each gets **213**.
    2. (a) 8 hundreds ÷ 5 = 1 hundred, 3 left; 35 tens ÷ 5 = 7 tens; 7 ones ÷ 5 = 1, 2 left. **171 r 2**. Check:
       $171 \times 5 + 2 = 855 + 2 = 857$. ✓
       (b) 9 ÷ 8 = 1 r 1; 13 ÷ 8 = 1 r 5; 57 ÷ 8 = 7 r 1; 15 ÷ 8 = 1 r 7. **1171 r 7**. Check:
       $1171 \times 8 + 7 = 9368 + 7 = 9375$. ✓
       (c) 10 ÷ 7 = 1 r 3; 30 ÷ 7 = 4 r 2; 20 ÷ 7 = 2 r 6. **142 r 6**. Check: $142 \times 7 + 6 = 994 + 6 = 1000$. ✓
    3. 6 hundreds ÷ 6 = 1 hundred; 1 ten ÷ 6 = 0 tens (write 0, keep the 1 ten); 12 ones ÷ 6 = 2. Answer **102**.
       The zero is in the tens place because the 1 ten was not enough to give each of 6 groups a whole ten.
    4. A remainder of 7 is bigger than 6, so one more could be given to each group. The quotient is 1 too small and
       the remainder should be $7 - 6 = 1$.
    5. $8 \times 25 = 200$, so exactly **25 tables**, no remainder.
    6. $12 \times 16 = 192$ and $12 \times 17 = 204$. So $200 \div 12 = 16$ r 8: **16 full sheets** and **8 stickers
       left**.
    7. $9 \div 4 = 2$ r 1. Each gets 2 sandwiches and a quarter of the last one: $2\tfrac14$ sandwiches.
    8. Undo it: $23 \times 5 + 4 = 115 + 4 = 119$. Check: $119 \div 5 = 23$ r 4. ✓

## Common mistake

**Leaving out a zero in the quotient.** In $824 \div 4$, the 2 tens cannot be shared into whole tens for 4 people,
so the tens digit of the answer is **0**: 206, not 26. If a place gets nothing, it still needs a digit. An estimate
($800 \div 4 = 200$) catches this mistake.

**Using the remainder without thinking.** "3 r 10 buses" is not an answer anyone can use. Ask what the story needs:
round up, round down, or cut the leftover into a fraction.

## Where it leads

- Previous: [Multiplying bigger numbers](03-multi-digit-multiplication.md) · Next: [Fractions are
  numbers](05-fractions-as-numbers.md), where the leftover becomes a number of its own.
- [Level 3 page](index.md) · [Numbers topic page](../index.md)
- Dividing with no remainder means one number is a **factor** of another: [Number
  theory](../../number-theory/index.md). Remainders also run clock arithmetic there.
- Dividing to share in a given ratio: [Ratio](../../ratio/index.md).
- Long division keeps going past the decimal point in [Level 4](../level-4/05-fractions-to-decimals.md).
