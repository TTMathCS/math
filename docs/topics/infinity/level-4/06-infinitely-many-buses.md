---
title: "Hilbert's hotel with infinitely many buses"
---

# Hilbert's hotel with infinitely many buses

*Infinity and strange math · level 4, lesson 6 of 6*

## A question to start

Hilbert's hotel is full, as always: rooms 1, 2, 3, ... and a guest in every one. In level 3 the manager fitted in one
new guest, then a whole infinite bus. Tonight is worse. **Infinitely many buses** pull up: bus 1, bus 2, bus 3, ...
with no last bus. Each bus has infinitely many seats, numbered 1, 2, 3, ... and every seat is taken.

Surely this is finally too many people? An infinity of infinities? Before you read on, try to find a rule that gives
every single person, old guest or passenger on any bus, a room of their own.

## The idea

### Why the old tricks fail

The doubling trick from level 3 freed the odd rooms: infinitely many rooms, enough for one bus. You could use the odd
rooms for bus 1. But then where does bus 2 go? You could double again and free more rooms, but each doubling handles
just one more bus. With infinitely many buses, there is always a bus still waiting.

Another idea: put bus 1 in the hotel first, then bus 2 after it. But bus 1 has infinitely many passengers, so it fills
every room, and bus 2 would have to wait "until bus 1 is done", which is never. This is the main danger: a plan where
some people are put "after infinitely many others" never actually gives them a room.

We need a rule where every passenger, on every bus, gets a room with an ordinary number on the door.

### Primes to the rescue

Recall the **prime numbers**: whole numbers bigger than 1 that can only be divided exactly by 1 and themselves. They are
2, 3, 5, 7, 11, 13, 17, 19, 23, ... Two facts about them are the key.

1. **There are infinitely many primes.** Euclid proved this about 2,300 years ago (see
   [There is no biggest prime](../../number-theory/level-4/05-no-biggest-prime.md)). So there are enough of them to give
   one to every bus.
2. **Every whole number bigger than 1 breaks into primes in only one way.** For example, $360 = 2^3 \times 3^2 \times 5$,
   and there is no other way to write it as a product of primes. This is called **unique factorisation** (see
   [Prime factorization](../../number-theory/level-3/05-prime-factorization.md)).

### The rule

The manager's announcement has two parts.

> **Old guests:** the guest in room $n$ moves to room $2^n$.
>
> **Buses:** the passenger in seat $s$ of bus $k$ goes to room $p^s$, where $p$ is the $(k + 1)$th prime.

So the old guests use powers of 2. Bus 1 uses powers of 3 (the 2nd prime), bus 2 uses powers of 5 (the 3rd prime),
bus 3 uses powers of 7, bus 4 uses powers of 11, and so on.

| Who | 1st | 2nd | 3rd | 4th | ... |
| --- | --- | --- | --- | --- | --- |
| Old guests (powers of 2) | room 2 | room 4 | room 8 | room 16 | ... |
| Bus 1 (powers of 3) | room 3 | room 9 | room 27 | room 81 | ... |
| Bus 2 (powers of 5) | room 5 | room 25 | room 125 | room 625 | ... |
| Bus 3 (powers of 7) | room 7 | room 49 | room 343 | room 2401 | ... |

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 420 262" role="img" aria-label="Rooms 1 to 50. Blue rooms 2, 4, 8, 16, 32 hold the old guests; orange rooms 3, 9, 27 hold bus 1; green rooms 5, 25 hold bus 2; striped rooms 7, 49 hold bus 3; every other room is empty">
  <defs><pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#eea66f" fill-opacity="0.35"/><line x1="0" y1="0" x2="0" y2="6" stroke="#9cc9ea" stroke-width="3"/></pattern></defs>
  <rect x="10" y="10" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="28" y="29" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <rect x="50" y="10" width="36" height="30" rx="3" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
  <text x="68" y="29" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <rect x="90" y="10" width="36" height="30" rx="3" fill="#eea66f" stroke="currentColor" stroke-width="1.2"/>
  <text x="108" y="29" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <rect x="130" y="10" width="36" height="30" rx="3" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
  <text x="148" y="29" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <rect x="170" y="10" width="36" height="30" rx="3" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <text x="188" y="29" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <rect x="210" y="10" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="228" y="29" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <rect x="250" y="10" width="36" height="30" rx="3" fill="url(#hatch)" stroke="currentColor" stroke-width="1.2"/>
  <text x="268" y="29" font-size="11" text-anchor="middle" fill="currentColor">7</text>
  <rect x="290" y="10" width="36" height="30" rx="3" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
  <text x="308" y="29" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <rect x="330" y="10" width="36" height="30" rx="3" fill="#eea66f" stroke="currentColor" stroke-width="1.2"/>
  <text x="348" y="29" font-size="11" text-anchor="middle" fill="currentColor">9</text>
  <rect x="370" y="10" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="388" y="29" font-size="11" text-anchor="middle" fill="currentColor">10</text>
  <rect x="10" y="46" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="28" y="65" font-size="11" text-anchor="middle" fill="currentColor">11</text>
  <rect x="50" y="46" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="68" y="65" font-size="11" text-anchor="middle" fill="currentColor">12</text>
  <rect x="90" y="46" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="108" y="65" font-size="11" text-anchor="middle" fill="currentColor">13</text>
  <rect x="130" y="46" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="148" y="65" font-size="11" text-anchor="middle" fill="currentColor">14</text>
  <rect x="170" y="46" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="188" y="65" font-size="11" text-anchor="middle" fill="currentColor">15</text>
  <rect x="210" y="46" width="36" height="30" rx="3" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
  <text x="228" y="65" font-size="11" text-anchor="middle" fill="currentColor">16</text>
  <rect x="250" y="46" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="268" y="65" font-size="11" text-anchor="middle" fill="currentColor">17</text>
  <rect x="290" y="46" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="308" y="65" font-size="11" text-anchor="middle" fill="currentColor">18</text>
  <rect x="330" y="46" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="348" y="65" font-size="11" text-anchor="middle" fill="currentColor">19</text>
  <rect x="370" y="46" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="388" y="65" font-size="11" text-anchor="middle" fill="currentColor">20</text>
  <rect x="10" y="82" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="28" y="101" font-size="11" text-anchor="middle" fill="currentColor">21</text>
  <rect x="50" y="82" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="68" y="101" font-size="11" text-anchor="middle" fill="currentColor">22</text>
  <rect x="90" y="82" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="108" y="101" font-size="11" text-anchor="middle" fill="currentColor">23</text>
  <rect x="130" y="82" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="148" y="101" font-size="11" text-anchor="middle" fill="currentColor">24</text>
  <rect x="170" y="82" width="36" height="30" rx="3" fill="#7ccf9a" stroke="currentColor" stroke-width="1.2"/>
  <text x="188" y="101" font-size="11" text-anchor="middle" fill="currentColor">25</text>
  <rect x="210" y="82" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="228" y="101" font-size="11" text-anchor="middle" fill="currentColor">26</text>
  <rect x="250" y="82" width="36" height="30" rx="3" fill="#eea66f" stroke="currentColor" stroke-width="1.2"/>
  <text x="268" y="101" font-size="11" text-anchor="middle" fill="currentColor">27</text>
  <rect x="290" y="82" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="308" y="101" font-size="11" text-anchor="middle" fill="currentColor">28</text>
  <rect x="330" y="82" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="348" y="101" font-size="11" text-anchor="middle" fill="currentColor">29</text>
  <rect x="370" y="82" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="388" y="101" font-size="11" text-anchor="middle" fill="currentColor">30</text>
  <rect x="10" y="118" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="28" y="137" font-size="11" text-anchor="middle" fill="currentColor">31</text>
  <rect x="50" y="118" width="36" height="30" rx="3" fill="#9cc9ea" stroke="currentColor" stroke-width="1.2"/>
  <text x="68" y="137" font-size="11" text-anchor="middle" fill="currentColor">32</text>
  <rect x="90" y="118" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="108" y="137" font-size="11" text-anchor="middle" fill="currentColor">33</text>
  <rect x="130" y="118" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="148" y="137" font-size="11" text-anchor="middle" fill="currentColor">34</text>
  <rect x="170" y="118" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="188" y="137" font-size="11" text-anchor="middle" fill="currentColor">35</text>
  <rect x="210" y="118" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="228" y="137" font-size="11" text-anchor="middle" fill="currentColor">36</text>
  <rect x="250" y="118" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="268" y="137" font-size="11" text-anchor="middle" fill="currentColor">37</text>
  <rect x="290" y="118" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="308" y="137" font-size="11" text-anchor="middle" fill="currentColor">38</text>
  <rect x="330" y="118" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="348" y="137" font-size="11" text-anchor="middle" fill="currentColor">39</text>
  <rect x="370" y="118" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="388" y="137" font-size="11" text-anchor="middle" fill="currentColor">40</text>
  <rect x="10" y="154" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="28" y="173" font-size="11" text-anchor="middle" fill="currentColor">41</text>
  <rect x="50" y="154" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="68" y="173" font-size="11" text-anchor="middle" fill="currentColor">42</text>
  <rect x="90" y="154" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="108" y="173" font-size="11" text-anchor="middle" fill="currentColor">43</text>
  <rect x="130" y="154" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="148" y="173" font-size="11" text-anchor="middle" fill="currentColor">44</text>
  <rect x="170" y="154" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="188" y="173" font-size="11" text-anchor="middle" fill="currentColor">45</text>
  <rect x="210" y="154" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="228" y="173" font-size="11" text-anchor="middle" fill="currentColor">46</text>
  <rect x="250" y="154" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="268" y="173" font-size="11" text-anchor="middle" fill="currentColor">47</text>
  <rect x="290" y="154" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="308" y="173" font-size="11" text-anchor="middle" fill="currentColor">48</text>
  <rect x="330" y="154" width="36" height="30" rx="3" fill="url(#hatch)" stroke="currentColor" stroke-width="1.2"/>
  <text x="348" y="173" font-size="11" text-anchor="middle" fill="currentColor">49</text>
  <rect x="370" y="154" width="36" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="388" y="173" font-size="11" text-anchor="middle" fill="currentColor">50</text>
  <rect x="10" y="193" width="14" height="14" fill="#9cc9ea" stroke="currentColor" stroke-width="1"/>
  <text x="30" y="204" font-size="11" text-anchor="start" fill="currentColor">old guests: 2, 4, 8, 16, 32</text>
  <rect x="210" y="193" width="14" height="14" fill="#eea66f" stroke="currentColor" stroke-width="1"/>
  <text x="230" y="204" font-size="11" text-anchor="start" fill="currentColor">bus 1: 3, 9, 27</text>
  <rect x="10" y="213" width="14" height="14" fill="#7ccf9a" stroke="currentColor" stroke-width="1"/>
  <text x="30" y="224" font-size="11" text-anchor="start" fill="currentColor">bus 2: 5, 25</text>
  <rect x="210" y="213" width="14" height="14" fill="url(#hatch)" stroke="currentColor" stroke-width="1"/>
  <text x="230" y="224" font-size="11" text-anchor="start" fill="currentColor">bus 3: 7, 49</text>
  <text x="10" y="250" font-size="11" text-anchor="start" fill="currentColor">white rooms (1, 6, 10, 11, 12, ...) stay empty</text>
</svg>
</div>

### Checking the rule

**Does everyone get a room?** Yes. Every bus $k$ has its own prime (there are infinitely many primes, so no bus is left
without one), and every seat $s$ gives a room number $p^s$, an ordinary whole number. The passenger in seat 5 of bus
1000 gets a gigantic room number, but it is a definite number on a definite door.

**Can two people end up in the same room?** No. Suppose a room number is $p^s$. Because it breaks into primes in only
one way, it is made **only** of the prime $p$, used exactly $s$ times. So from the room number you can read off which
prime was used (so which bus, or the old guests if it is 2) and how many times (so which seat or old room). Two
different people have either different primes or different powers, so different rooms. For example, room 125 is
$5 \times 5 \times 5$: only 5s, three of them, so it must be bus 2, seat 3. No-one else can be in room 125.

**Are some rooms empty?** Yes, lots. Room 1 is empty, and so is every room whose number uses two different primes,
like $6 = 2 \times 3$, $10 = 2 \times 5$ or $12 = 2 \times 2 \times 3$. That is allowed. The challenge was to give every
person a room; nobody said every room must be used. (If the manager wants no empty rooms, she can then use lesson 1's
idea in reverse: slide everyone down into the empty rooms, keeping their order. Every room gets filled.)

### What this really shows

Forget the hotel for a moment. What the manager did was **list** all the people: every old guest and every passenger on
every bus got a position (a room number), and no two shared. A collection that can be given positions 1st, 2nd, 3rd,
... in a list, like this, is called **countable**. The counting numbers are countable, of course. Level 3 showed the
even numbers, the square numbers and the multiples of 10 are too.

Tonight's surprise is that **infinitely many infinite collections, put together, are still countable**. The hotel did
not overflow. In the size sense of level 3, "infinity times infinity" is the same size as infinity.

### A sneak peek: all the fractions

Here is why this matters. Think of every positive fraction $\frac pq$, with top $p$ and bottom $q$. Put all the
fractions with bottom 1 on bus 1 ($\frac11, \frac21, \frac31, \ldots$ in seats 1, 2, 3, ...), all the fractions with
bottom 2 on bus 2 ($\frac12, \frac22, \frac32, \ldots$), and so on. Every fraction is on some bus, in some seat.

The prime rule gives every one of these a room. So **all the positive fractions fit into Hilbert's hotel**. That means
there are no more fractions than counting numbers, even though, as you saw in level 3, there are infinitely many
fractions between any two numbers. (Some fractions appear twice, like $\frac12$ and $\frac24$, but that just leaves a
few more empty rooms.)

In level 6 you will list all fractions in a neater way, without primes. In level 7 you will meet a collection that does
**not** fit into the hotel, whatever rule the manager tries: the decimals. That is where infinity really gets strange.

## Worked examples

**1. Where does each person go?**

- Old guest from room 5: room $2^5 = 32$.
- Bus 1, seat 4: the 2nd prime is 3, so room $3^4 = 81$.
- Bus 2, seat 3: the 3rd prime is 5, so room $5^3 = 125$.
- Bus 4, seat 2: the 5th prime is 11, so room $11^2 = 121$.

**2. Who is in this room?** Read the rule backwards.

- Room 243: $243 = 3 \times 3 \times 3 \times 3 \times 3 = 3^5$. Only 3s, five of them: **bus 1, seat 5**.
- Room 64: $64 = 2^6$. Only 2s: the **old guest from room 6**.
- Room 100: $100 = 2^2 \times 5^2$. Two different primes: **empty**.
- Room 13: $13 = 13^1$, and 13 is the 6th prime ($2, 3, 5, 7, 11, 13$), so it is bus 5, seat 1.

**3. A neater rule for buses only.** Suppose the hotel is **empty** and infinitely many buses arrive (no old guests).
The manager says: the passenger in bus $b$, seat $s$, goes to room $2^b \times 3^s$.

- Bus 2, seat 3: $2^2 \times 3^3 = 4 \times 27 = 108$.
- No two passengers share: from $2^b \times 3^s$, unique factorisation lets you read off $b$ (how many 2s) and $s$
  (how many 3s).
- This uses only two primes, however many buses come. Rooms like 5 or 7 stay empty.

**4. How big do the rooms get?** Bus 1, seat 20 goes to room $3^{20} = 3486784401$, nearly three and a half billion.
The numbers get enormous, but every one is finite. In the infinite hotel, that is all that matters.

## Try it

1. With the prime rule, which room does the old guest from room 10 get?
2. Which room do bus 3, seat 2 and bus 3, seat 3 get?
3. Who is in room 81? Room 128? Room 169?
4. Is room 1000 used? Room 2401? Explain.
5. With the rule "bus $b$, seat $s$ goes to room $2^b \times 3^s$" for an empty hotel, which room does bus 3, seat 1 get?
   Who is in room 72?
6. A manager suggests: "bus $b$, seat $s$ goes to room $b + s$." Show that this fails.
7. (Harder) Infinitely many buses arrive, and each passenger is holding a fraction: bus $q$, seat $p$ holds
   $\frac pq$. Using the prime rule, which room does the passenger holding $\frac23$ get? Is there a room for
   $\frac{100}{7}$?

??? note "Answers"
    1. Room $2^{10} = 1024$.
    2. Bus 3 uses the 4th prime, 7. Seat 2: room $7^2 = 49$. Seat 3: room $7^3 = 343$.
    3. $81 = 3^4$: bus 1, seat 4. $128 = 2^7$: the old guest from room 7. $169 = 13^2$, and 13 is the 6th prime, so
       bus 5, seat 2.
    4. $1000 = 2^3 \times 5^3$ uses two different primes, so it is **empty**. $2401 = 7^4$ uses only 7s, so it is
       used: bus 3, seat 4.
    5. $2^3 \times 3^1 = 8 \times 3 = 24$. And $72 = 8 \times 9 = 2^3 \times 3^2$, so bus 3, seat 2.
    6. Bus 1, seat 2 and bus 2, seat 1 both go to room $1 + 2 = 2 + 1 = 3$. Two people in one room, so the rule fails.
       (Also, nobody ever gets room 1.)
    7. $\frac23$ is held by bus 3, seat 2. Bus 3 uses the 4th prime, 7, so room $7^2 = 49$ (with the prime rule, with
       no old guests). $\frac{100}7$ is bus 7, seat 100; bus 7 uses the 8th prime, which is 19, so room $19^{100}$.
       An enormous number, but a perfectly good room.

## Common mistake

**Making a plan that "never gets there".** "Put all of bus 1 in first, then bus 2" sounds like a plan, but bus 2's
passengers are placed after infinitely many others, and so never get an actual room number. A real listing must give
**every** person a finite position.

**Thinking two infinite levels must be bigger.** "Infinitely many buses, each with infinitely many people" sounds
like a much bigger infinity. But the prime rule fits them all into an ordinary infinite hotel. Bigger infinities do
exist (level 7), but you need a cleverer argument than "lots of buses" to find one.

## Where it leads

- Back: [The Koch snowflake](05-koch-snowflake.md) · Level 3's hotel: [A full hotel with room for one more](../level-3/01-room-for-one.md)
  and [A bus of infinitely many guests](../level-3/02-bus-of-guests.md).
- [Level 4 page](index.md) · [Infinity topic page](../index.md)
- Next level: [Level 5: limits](../level-5/index.md). Level 6 makes "countable" precise, and lists the fractions by
  walking the diagonals of a grid.
- The prime facts used here: [Prime factorization](../../number-theory/level-3/05-prime-factorization.md),
  [There is no biggest prime](../../number-theory/level-4/05-no-biggest-prime.md) and
  [Unique factorisation](../../number-theory/level-6/06-unique-factorisation.md).
- Sets, and pairing them up exactly, are written carefully in [Logic level 5](../../logic/level-5/index.md).
