---
title: "A full hotel with room for one more"
---

# A full hotel with room for one more

*Infinity and strange math · level 3, lesson 1 of 6*

## A question to start

Imagine a hotel with **infinitely many rooms**. The rooms are numbered 1, 2, 3, 4, 5, ... and the numbers never
stop. There is no last room. Tonight every single room has a guest in it. The sign outside says FULL.

Late at night a tired traveller walks in and asks for a room.

In an ordinary hotel the answer would be "Sorry, we are full." But the manager of this hotel smiles and says: "Of
course. Give me one minute." Nobody has to leave, nobody has to share a room, and nobody sleeps in the corridor. Yet
the traveller gets a room of their own.

How can that be? Think about it for a minute before you read on.

## The idea

### A hotel that never ends

This make-believe hotel is called **Hilbert's hotel**. It is named after David Hilbert (1862-1943), a German
mathematician who talked about a hotel like this in lectures in the 1920s, to show people how strange infinity is.
Nobody can build it, of course. It is a **thought experiment**: an experiment you do only in your head, to see what
the rules of mathematics say.

The word **infinite** means "without end". The hotel has infinitely many rooms. That does not mean it has a huge
number of rooms, like a billion. A billion rooms would end: there would be a room 1,000,000,000 and nothing after it.
Infinitely many rooms means that after **every** room there is another room. Room 7 has a room 8 after it. Room
5,000,000 has room 5,000,001 after it. There is no room you can point to and say "that is the end".

Hold on to that one fact. It is the whole secret:

> In Hilbert's hotel, every room has a next room.

### Why "full" does not mean "no room"

In an ordinary hotel, "full" and "no room left" mean the same thing. If there are 100 rooms and 100 guests, every
room is taken, and a new guest cannot fit.

In Hilbert's hotel the word "full" still means "every room has a guest". But that does not stop the manager from
**moving** guests. And moving guests can open up a room, because there is no last room where someone gets stuck.

### The trick: everyone moves up one

The manager picks up the microphone and makes one announcement to the whole hotel:

> "Everyone, please move to the room whose number is one more than your room number."

So the guest in room 1 moves to room 2. The guest in room 2 moves to room 3. The guest in room 3 moves to room 4. And
so on, all the way up, forever.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 140" role="img" aria-label="A row of hotel rooms numbered 1 to 8 and on forever; an arrow takes each guest one room to the right, and room 1 is left free for the new guest">
  <rect x="20" y="60" width="44" height="36" rx="3" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <text x="42" y="111" font-size="11" text-anchor="middle" fill="currentColor">1</text>
  <rect x="68" y="60" width="44" height="36" rx="3" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="90" y="111" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <rect x="116" y="60" width="44" height="36" rx="3" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="138" y="111" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <rect x="164" y="60" width="44" height="36" rx="3" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="186" y="111" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <rect x="212" y="60" width="44" height="36" rx="3" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="234" y="111" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <rect x="260" y="60" width="44" height="36" rx="3" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="282" y="111" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <rect x="308" y="60" width="44" height="36" rx="3" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="330" y="111" font-size="11" text-anchor="middle" fill="currentColor">7</text>
  <rect x="356" y="60" width="44" height="36" rx="3" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <text x="378" y="111" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <text x="418" y="82" font-size="16" text-anchor="middle" fill="currentColor">...</text>
  <path d="M 42 58 Q 64 30 86 58" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="86.0,58.0 80.6,55.4 84.7,52.1" fill="currentColor"/>
  <path d="M 90 58 Q 112 30 134 58" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="134.0,58.0 128.6,55.4 132.7,52.1" fill="currentColor"/>
  <path d="M 138 58 Q 160 30 182 58" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="182.0,58.0 176.6,55.4 180.7,52.1" fill="currentColor"/>
  <path d="M 186 58 Q 208 30 230 58" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="230.0,58.0 224.6,55.4 228.7,52.1" fill="currentColor"/>
  <path d="M 234 58 Q 256 30 278 58" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="278.0,58.0 272.6,55.4 276.7,52.1" fill="currentColor"/>
  <path d="M 282 58 Q 304 30 326 58" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="326.0,58.0 320.6,55.4 324.7,52.1" fill="currentColor"/>
  <path d="M 330 58 Q 352 30 374 58" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <polygon points="374.0,58.0 368.6,55.4 372.7,52.1" fill="currentColor"/>
  <text x="42" y="83" font-size="11" text-anchor="middle" fill="currentColor">new</text>
  <text x="220" y="128" font-size="12" text-anchor="middle" fill="currentColor">every guest moves from room n to room n + 1; room 1 is free</text>
</svg>
</div>

Now look at room 1. Its guest has moved out to room 2, and nobody moved **into** room 1, because nobody has a room
number that is one less than 1. So room 1 is empty, and the traveller takes it.

### Using a letter for "any room"

Instead of writing "room 1 goes to room 2, room 2 goes to room 3, room 3 goes to room 4, ..." we can say it all at
once with a letter. Let $n$ stand for **any** room number. Then the rule is:

> The guest in room $n$ moves to room $n + 1$.

If you are in room 12, then $n$ is 12 and you go to room 13. If you are in room 999, you go to room 1000. One short
rule tells every guest, in every room, exactly what to do. This is how mathematicians describe infinitely many
things with a few symbols.

### Checking that the trick really works

A good mathematician does not just say "it works". She checks three things.

1. **Does every guest have somewhere to go?** The guest in room $n$ needs room $n + 1$ to exist. In Hilbert's hotel
   it always does, because every room has a next room. Nobody is stuck.
2. **Do two guests ever land in the same room?** Two guests start in different rooms, say 6 and 9. They go to 7 and
   10, which are different. Adding 1 to two different numbers always gives two different answers, so no room gets
   two guests.
3. **Is a room left free?** Every new room number is $n + 1$, which is at least 2. So nobody lands in room 1. Room 1
   is free for the traveller.

All three checks pass. The trick is not a cheat. It is just what happens when a hotel has no last room.

### Why the same trick fails in an ordinary hotel

Try the trick in a hotel with 100 rooms, all full. The guest in room 99 moves to room 100. Fine. But the guest in
room 100 is told to move to room 101, and there is no room 101. That guest is stuck in the corridor. The trick breaks
at the **last** room.

So the trick does not work in spite of infinity. It works **because** of infinity: the only place it could break is
the last room, and an infinite hotel has no last room.

### Everyone moves at the same moment

You might worry: "Moving infinitely many guests one by one would take forever." That is true if they wait in a
queue. But the manager does not say "room 1 first, then room 2". She makes one announcement, and every guest walks
to their new room at the same time. Each guest only walks to the next door, so after one minute everyone has moved.
In a thought experiment this is allowed, and it is the reason the manager said "give me one minute".

## Worked examples

**1. Three travellers arrive together.** The hotel is full and three travellers arrive. What should the manager say?

- Moving everyone up by 1 frees only one room. We need three.
- So she announces: "The guest in room $n$, move to room $n + 3$."
- Room 1 goes to 4, room 2 goes to 5, room 3 goes to 6, and so on.
- Nobody lands in rooms 1, 2 or 3 (the smallest new room is $1 + 3 = 4$). The three travellers take rooms 1, 2 and 3.

The three checks still pass: room $n + 3$ always exists, different rooms go to different rooms, and rooms 1 to 3 are
free.

**2. Where does a guest end up?** With the rule "move from room $n$ to room $n + 3$", where does the guest in room 50
go? Who ends up in room 50?

- The guest in room 50 goes to room $50 + 3 = 53$.
- Room 50 is filled by the guest who was in the room 3 less: room 47.

**3. A guest leaves.** The hotel is full. Then the guest in room 1 checks out and goes home. Now room 1 is empty. Can
the manager make the hotel full again, with no empty room, without anyone new arriving?

- She announces: "Everyone in room 2 or higher, move **down** one room: from room $n$ to room $n - 1$."
- Room 2 goes to 1, room 3 goes to 2, room 4 goes to 3, and so on.
- Every room gets filled, and nobody is left without a room. The hotel is full again, with one guest fewer!

**4. A new traveller every night.** Every night, forever, one new traveller arrives at the full hotel, and every night
the manager uses the "move up one" rule. The guest who started in room 1, where is she after 10 nights?

- Each night she moves up one room.
- After 1 night she is in room 2, after 2 nights in room 3, so after 10 nights she is in room $1 + 10 = 11$.
- She is never thrown out. However many nights pass, she always has a room, just a higher number.

## Try it

1. The hotel is full and 5 travellers arrive. What rule should the manager announce? Which rooms do the travellers
   get?
2. With the rule "move from room $n$ to room $n + 1$", where does the guest in room 99 go? Who moves into room 99?
3. With the rule "move from room $n$ to room $n + 10$", which rooms become free?
4. A hotel with 20 rooms is full, and the manager tries the rule "move from room $n$ to room $n + 1$". Which guest
   gets stuck, and why?
5. The hotel is full, and the guests in rooms 1, 2 and 3 all check out. What rule fills the hotel again, with no
   empty rooms?
6. One traveller arrives. The manager could also say "move from room $n$ to room $n + 1$, but only if your room
   number is 100 or more". Which room would be free then? Does every guest still have a room?
7. A traveller says: "Simple. Just put me in the last room." What is wrong with that idea?
8. (Harder) A full hotel, a new traveller every night, and every night the "move up one" rule. After how many nights
   is the guest who started in room 7 in room 107? Is any room ever empty in the morning?

??? note "Answers"
    1. "Move from room $n$ to room $n + 5$." The smallest new room is $1 + 5 = 6$, so rooms 1, 2, 3, 4 and 5 are free,
       one for each traveller.
    2. The guest in room 99 goes to room 100. Room 99 is filled by the guest from room 98.
    3. The smallest new room is $1 + 10 = 11$, so rooms 1 to 10 become free: ten rooms.
    4. The guest in room 20 must move to room 21, which does not exist. That guest is stuck in the corridor. The
       trick breaks at the last room, and an ordinary hotel has a last room.
    5. "Move from room $n$ to room $n - 3$, for everyone in room 4 or higher." Room 4 goes to 1, room 5 to 2, room 6
       to 3, room 7 to 4, and so on, so every room is filled again.
    6. Room 100 would be free. Guests in rooms 1 to 99 stay where they are, guests in rooms 100 and up move up one,
       so nobody lands in room 100. Every guest still has a room. It works just as well: the trick only needs the
       rooms from some point onwards to shift.
    7. There is no last room. After every room there is another one, so "the last room" does not exist.
    8. She moves up one room a night, and she needs to go up $107 - 7 = 100$ rooms, so after **100 nights**. No room
       is ever empty in the morning: each night room 1 is freed and the new traveller takes it at once.

## Common mistake

**Thinking "infinity plus one" must be bigger than infinity.** After the traveller checks in, the hotel has "all the
old guests plus one". It is tempting to think it must now be over-full. But every guest has exactly one room and every
room has exactly one guest, so the guests and the rooms still match up perfectly. Adding one thing to an infinite
collection does not make it any bigger, in the sense that matters here: you can still pair everyone off with the
rooms. In lesson 3 you will see this is not a fluke, it is what being infinite means.

**Moving the guests one at a time.** If guest 1 had to wait for guest 2 to leave, who waits for guest 3, and so on,
nobody would ever move. The trick works because one rule tells everyone where to go at the same time.

## Where it leads

- Next: [A bus of infinitely many guests](02-bus-of-guests.md), where infinitely many travellers arrive at once.
- [Level 3 page](index.md) · [Infinity topic page](../index.md)
- Back to level 2: [Strange loops](../level-2/index.md), where you first matched chairs and children without counting.
- Rules like "$n$ goes to $n + 3$" are the position rules of [Patterns](../../patterns/level-4/index.md), and pairing
  things exactly is the first tool of [Counting](../../counting/index.md).
- The hotel comes back with **infinitely many buses** in [level 4](../level-4/06-infinitely-many-buses.md).
