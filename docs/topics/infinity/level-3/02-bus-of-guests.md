---
title: "A bus of infinitely many guests"
---

# A bus of infinitely many guests

*Infinity and strange math · level 3, lesson 2 of 6*

## A question to start

Hilbert's hotel is full again: every room 1, 2, 3, ... has a guest. This time a bus pulls up outside. It is a very
long bus. Its seats are numbered 1, 2, 3, 4, ... and they never stop, and every seat has a passenger. Infinitely many
tired people climb off and ask for rooms.

In the last lesson the manager made room for 1 new guest, or 3, or 5, by moving everyone up. Can she do it now, for
infinitely many new guests at once? Or is this finally too many, even for Hilbert's hotel?

## The idea

### Why "move up" is not enough

Last lesson's trick was "move from room $n$ to room $n + 1$". It frees one room. "Move to room $n + 1000$" frees a
thousand rooms. "Move to room $n$ plus a million" frees a million rooms.

But the bus has infinitely many passengers. However big a number you add, you free only that many rooms, and the
rest of the bus is still standing in the car park. You might think: "Then add infinity: move to room $n$ plus
infinity." But there is no room number "$n$ plus infinity". Every room has an ordinary number on its door, like 8 or
4,000,017. Infinity is not a room.

We need a completely different kind of move.

### The trick: everyone doubles

The manager picks up the microphone:

> "Everyone, please move to the room whose number is **double** your room number."

With the letter $n$ for any room number:

> The guest in room $n$ moves to room $2n$.

So room 1 goes to room 2. Room 2 goes to room 4. Room 3 goes to room 6. Room 4 goes to room 8. And so on, forever.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 178" role="img" aria-label="Hotel rooms 1 to 11; arrows take the guest in room 1 to room 2, room 2 to 4, room 3 to 6, room 4 to 8, room 5 to 10; the even rooms are blue and the odd rooms are orange and free">
  <rect x="6" y="90" width="34" height="30" rx="3" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="23" y="135" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <rect x="44" y="90" width="34" height="30" rx="3" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="61" y="135" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <rect x="82" y="90" width="34" height="30" rx="3" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="99" y="135" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <rect x="120" y="90" width="34" height="30" rx="3" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="137" y="135" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <rect x="158" y="90" width="34" height="30" rx="3" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="175" y="135" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <rect x="196" y="90" width="34" height="30" rx="3" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="213" y="135" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <rect x="234" y="90" width="34" height="30" rx="3" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="251" y="135" font-size="11" text-anchor="middle" fill="currentColor">7</text>
  <rect x="272" y="90" width="34" height="30" rx="3" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="289" y="135" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <rect x="310" y="90" width="34" height="30" rx="3" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="327" y="135" font-size="11" text-anchor="middle" fill="currentColor">9</text>
  <rect x="348" y="90" width="34" height="30" rx="3" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="365" y="135" font-size="11" text-anchor="middle" fill="currentColor">10</text>
  <rect x="386" y="90" width="34" height="30" rx="3" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="403" y="135" font-size="11" text-anchor="middle" fill="currentColor">11</text>
  <text x="430" y="109" font-size="16" text-anchor="middle" fill="currentColor">...</text>
  <path d="M 23 88 Q 40.5 61 58 88" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="58.0,88.0 52.9,84.9 57.3,82.0" fill="currentColor"/>
  <path d="M 61 88 Q 97.5 48 134 88" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="134.0,88.0 128.4,85.8 132.3,82.2" fill="currentColor"/>
  <path d="M 99 88 Q 154.5 35 210 88" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="210.0,88.0 204.3,86.2 207.9,82.4" fill="currentColor"/>
  <path d="M 137 88 Q 211.5 22 286 88" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="286.0,88.0 280.2,86.4 283.7,82.5" fill="currentColor"/>
  <path d="M 175 88 Q 268.5 9 362 88" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="362.0,88.0 356.2,86.5 359.6,82.5" fill="currentColor"/>
  <text x="220" y="152" font-size="12" text-anchor="middle" fill="currentColor">room n goes to room 2n: old guests fill the even rooms (blue),</text>
  <text x="220" y="168" font-size="12" text-anchor="middle" fill="currentColor">and every odd room (orange) is free for the bus</text>
</svg>
</div>

Where are the old guests now? In rooms 2, 4, 6, 8, 10, ... the **even** numbers. Double any whole number and you
get an even number. So who is in the **odd** rooms, 1, 3, 5, 7, 9, ...? Nobody! Every odd room is empty.

How many odd rooms are there? Infinitely many: 1, 3, 5, 7, ... never stops. That is exactly what the bus needs.

### Checking the doubling trick

The same three checks as last time.

1. **Does every guest have somewhere to go?** The guest in room $n$ needs room $2n$. Double a room number and you get
   another room number. In an infinite hotel it is always there.
2. **Do two guests ever land in the same room?** Two different numbers have two different doubles: if 7 and 9 are
   different, so are 14 and 18. No room gets two guests.
3. **Which rooms are free?** All the odd rooms, because a double is never odd.

### Giving each passenger a room

Now the bus passengers need instructions. The odd rooms are 1, 3, 5, 7, 9, ... in order. The fair thing is:

- seat 1 goes to the 1st odd room, room 1;
- seat 2 goes to the 2nd odd room, room 3;
- seat 3 goes to the 3rd odd room, room 5;
- seat 4 goes to the 4th odd room, room 7.

Can we find the room for **any** seat, say seat 50, without listing them all? Look at the pattern:

| Seat | 1 | 2 | 3 | 4 | 5 | 10 |
| --- | --- | --- | --- | --- | --- | --- |
| Room | 1 | 3 | 5 | 7 | 9 | 19 |

Each room number is one less than double the seat number: seat 4 goes to $2 \times 4 - 1 = 7$. Why? Doubling the seat
numbers gives 2, 4, 6, 8, ... the even numbers, and taking 1 away from each even number gives the odd number just
below it: 1, 3, 5, 7, ... So with $s$ for the seat number:

> The passenger in seat $s$ goes to room $2s - 1$.

Seat 50 goes to room $2 \times 50 - 1 = 99$.

Now check the whole picture. Every old guest is in an even room. Every passenger is in an odd room. Every whole
number is either even or odd, so every room is used, and no room has two people. The hotel is full again, and nobody
was turned away.

### Working backwards: who is in this room?

The two rules can also be run backwards.

- If a room number is **even**, its guest is an old guest who came from the room with **half** that number. Room 36
  holds the guest who used to be in room 18.
- If a room number is **odd**, its guest is a passenger. Room 39 came from the seat $s$ with $2s - 1 = 39$. Add 1 to
  get $2s = 40$, then halve: seat 20.

Being able to go backwards like this is a good sign that the moves are a perfect match: every room leads back to
exactly one person.

### Other ways that work

The doubling rule is not the only one. Here is another: "the guest in room $n$ moves to room $3n$". Then the old
guests are in rooms 3, 6, 9, 12, ... the multiples of 3, and rooms 1, 2, 4, 5, 7, 8, ... are all free. That is more
than enough for one bus. In fact it is enough for **two** buses, as you will see in the worked examples.

## Worked examples

**1. Passengers and rooms.** The bus has arrived and the doubling rule is used. (a) Where does the passenger in seat
10 go? (b) Where does the old guest from room 10 go? (c) Who is in room 27?

- (a) Seat 10 goes to room $2 \times 10 - 1 = 19$.
- (b) Old guest from room 10 goes to room $2 \times 10 = 20$.
- (c) 27 is odd, so it is a passenger. $2s - 1 = 27$ means $2s = 28$, so $s = 14$: the passenger from seat 14.

**2. Two buses arrive at once.** The hotel is full, and two infinite buses, bus A and bus B, arrive together.

- The manager says: "The guest in room $n$, move to room $3n$." Old guests go to 3, 6, 9, 12, ...
- The rooms left free come in two kinds: one more than a multiple of 3 (1, 4, 7, 10, ...) and two more than a
  multiple of 3 (2, 5, 8, 11, ...).
- Bus A, seat $s$, goes to room $3s - 2$: seats 1, 2, 3, 4 go to rooms 1, 4, 7, 10.
- Bus B, seat $s$, goes to room $3s - 1$: seats 1, 2, 3, 4 go to rooms 2, 5, 8, 11.
- Every whole number leaves a remainder of 0, 1 or 2 when you divide it by 3, so every room is used exactly once.

**3. Doing the bus trick twice.** The hotel is full, one bus arrives (doubling trick), and the next night another
bus arrives. The manager uses the doubling trick again. Where does the guest who started the first night in room 3
end up?

- First night: room 3 goes to room $2 \times 3 = 6$.
- Second night: room 6 goes to room $2 \times 6 = 12$.
- After two nights she is in room 12. Each night her room number doubles.

**4. The hotel next door.** A second infinite hotel down the street is full, and it has to close for repairs. All its
guests walk over. This is exactly like a bus: guests are numbered by their old room numbers 1, 2, 3, ... instead of
seat numbers. The doubling trick works again: old guests to the even rooms, guests from next door to the odd rooms.
Two full infinite hotels fit into one.

## Try it

1. With the doubling trick, where does the old guest from room 25 go? Where does the passenger from seat 25 go?
2. Who ends up in room 40? Who ends up in room 41?
3. Why can't the manager use the rule "move from room $n$ to room $n + 1000000$" for the bus?
4. The manager uses the rule "move from room $n$ to room $3n$" for just one bus. Seat $s$ goes to the $s$th free
   room. List the first six free rooms. Which room does seat 6 get?
5. Three buses arrive at a full hotel. Suggest a rule for the old guests, and a rule for each bus.
6. A guest has been through three bus nights with the doubling trick, and is now in room 56. Which room did she start
   in?
7. (Harder) A manager tries the rule "move from room $n$ to room $n \times n$" (so 1 stays in 1, 2 goes to 4, 3 goes
   to 9). Do two guests ever share a room? Which rooms are free? Is that enough room for a bus?

??? note "Answers"
    1. The old guest from room 25 goes to room $2 \times 25 = 50$. The passenger from seat 25 goes to room
       $2 \times 25 - 1 = 49$.
    2. 40 is even, so room 40 holds an old guest, from room $40 \div 2 = 20$. 41 is odd, so it holds a passenger:
       $2s - 1 = 41$, so $2s = 42$ and $s = 21$, seat 21.
    3. That rule frees only rooms 1 to 1,000,000: a million rooms. The bus has infinitely many passengers, so the
       passenger in seat 1,000,001 (and every seat after it) would still have no room.
    4. The old guests fill 3, 6, 9, 12, ..., so the free rooms are 1, 2, 4, 5, 7, 8, 10, 11, ... The first six are
       1, 2, 4, 5, 7, 8, and seat 6 gets room **8**. (Infinitely many free rooms are left over too. That is
       allowed; nobody minds a few empty rooms. Or rather, infinitely many.)
    5. One way: old guests go from room $n$ to room $4n$ (rooms 4, 8, 12, ...). Bus 1, seat $s$, goes to room
       $4s - 3$ (1, 5, 9, ...). Bus 2 goes to $4s - 2$ (2, 6, 10, ...). Bus 3 goes to $4s - 1$ (3, 7, 11, ...). Every
       number leaves remainder 0, 1, 2 or 3 when divided by 4, so every room is used exactly once.
    6. Each bus night doubles her room number, so go backwards by halving three times: $56 \div 2 = 28$,
       $28 \div 2 = 14$, $14 \div 2 = 7$. She started in **room 7**.
    7. Two different numbers have different squares (a bigger number has a bigger square), so nobody shares. The
       old guests end up in the square rooms 1, 4, 9, 16, 25, ..., so all the other rooms (2, 3, 5, 6, 7, 8, 10, ...)
       are free. There are infinitely many of those, so yes, there is room for the bus: seat 1 to room 2, seat 2 to
       room 3, seat 3 to room 5, and so on, taking the free rooms in order. It just has no neat formula like
       $2s - 1$.

## Common mistake

**"Infinity plus infinity must be bigger than infinity."** It feels like a hotel full of guests plus a bus full of
passengers is twice as many people as the hotel can hold. But the doubling trick gives every single person a room of
their own, with none left over. For infinite collections, "twice as many" can be exactly as many. What matters is
whether you can pair people with rooms perfectly, and here you can.

**Forgetting to check the old guests.** It is easy to find rooms for the bus and forget that the old guests also
need rooms. A good rule tells **everyone** where to go: old guests first, then each passenger, then a check that no
room is used twice.

## Where it leads

- Back: [A full hotel with room for one more](01-room-for-one.md) · Next: [The part can be as big as the whole](03-part-as-big.md),
  which explains why the doubling trick works.
- [Level 3 page](index.md) · [Infinity topic page](../index.md)
- Even and odd numbers, and remainders when dividing by 3 or 4, come from [Number theory](../../number-theory/level-3/index.md).
  Rules like $2s - 1$ are position rules from [Patterns](../../patterns/level-4/index.md).
- What if **infinitely many** buses arrive? That is [Hilbert's hotel with infinitely many buses](../level-4/06-infinitely-many-buses.md)
  in level 4.
