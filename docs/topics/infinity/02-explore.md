---
title: "Explore: Hilbert's hotel"
---

# Explore: Hilbert's hotel

*Infinity and strange math · step 2 of 5*

## A question to start

Imagine a hotel with **infinitely many rooms**, numbered 1, 2, 3, 4, ... and on forever. Tonight every single room
is full. A traveller arrives and asks for a room.

In an ordinary hotel, "full" means "no room". But the manager of this hotel smiles and says: "No problem." How can
she find a free room without throwing anyone out?

This imaginary hotel is called **Hilbert's hotel**, after the German mathematician David Hilbert, who used it in
talks to show how strange infinity is. Before we answer, we need a way to compare sizes that works even when we
cannot count to the end.

## The idea

### Counting by pairing

Before you can count, you can still tell whether two groups are the same size. Picture a classroom with children
and chairs. Ask every child to sit on a chair, one child per chair. If every child has a chair and no chair is
empty, there are **the same number** of children and chairs, and you never needed to count either.

This kind of pairing, where every thing in the first group gets exactly one partner in the second, and every thing
in the second group is somebody's partner, is called a **one-to-one correspondence**. Two groups that can be paired
like this are the **same size**. It is the most basic idea of counting: when you count apples, you pair each apple
with one of the words "one, two, three, ...".

### The part can be as big as the whole

For ordinary groups, if you take some things away, the group gets smaller. Take 3 apples out of a bowl of 10 and you
can never pair the 7 left with the original 10.

Infinite groups break this rule. In the Play step we paired the counting numbers with the even numbers:

| Counting number | 1 | 2 | 3 | 4 | 5 | ... | $n$ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Even partner | 2 | 4 | 6 | 8 | 10 | ... | $2n$ |

Every counting number $n$ has a partner $2n$, and every even number has a partner (its half). Nobody is left over.
So there are **as many even numbers as counting numbers**, even though the even numbers are only part of the
counting numbers, and the odd ones have been left out.

Galileo Galilei noticed something like this almost 400 years ago, with the square numbers 1, 4, 9, 16, ... He
decided that words like "bigger" and "the same size" simply do not work for infinite collections. Later
mathematicians decided instead that they do work, but differently: *an infinite collection can be the same size as
a part of itself.* That is almost the definition of infinite.

### A rule for moving guests

In Hilbert's hotel, the manager cannot walk to the last room, because there is none. Instead she gives one
instruction to **everyone at once**, as a rule: "the guest in room $n$, move to room ...". Every guest can follow
the rule at the same moment, without waiting for anyone else.

## Worked examples

**1. One new guest.** The manager announces: *"Everyone, please move from your room $n$ to room $n + 1$."*

| Old room | 1 | 2 | 3 | 4 | ... | $n$ |
| --- | --- | --- | --- | --- | --- | --- |
| New room | 2 | 3 | 4 | 5 | ... | $n + 1$ |

Every guest has a new room (there is always a next room, because there is no last one), and no two guests share.
**Room 1 is now empty**, and the traveller takes it.

**2. A bus with infinitely many people.** Now an infinitely long bus pulls up with seats numbered 1, 2, 3, ..., every
seat taken. Moving everyone up by one only frees one room, and moving up by a million only frees a million. We need
infinitely many empty rooms.

The manager announces: *"Everyone, move from room $n$ to room $2n$."*

| Old room | 1 | 2 | 3 | 4 | ... | $n$ |
| --- | --- | --- | --- | --- | --- | --- |
| New room | 2 | 4 | 6 | 8 | ... | $2n$ |

Now the old guests fill exactly the **even** rooms, and every **odd** room is empty. The passenger in seat $s$
goes to room $2s - 1$: seat 1 to room 1, seat 2 to room 3, seat 3 to room 5, and so on. Everyone has a room and the
hotel is full again.

**3. Why an ordinary hotel cannot do this.** A hotel with 100 rooms, all full, tries trick 1. The guest in room 100
must move to room 101, which does not exist. The trick works only because the infinite hotel has no last room.

## Try it

1. Hilbert's hotel is full and **3** new guests arrive. What rule should the manager announce? Which rooms do the
   new guests get?
2. The hotel is full, and the guest in room 1 leaves. How can the manager make the hotel full again, with no empty
   rooms, without anyone new arriving?
3. Pair the counting numbers 1, 2, 3, ... with the multiples of 10: 10, 20, 30, ... What is the partner of 7? Of
   250?
4. Pair the counting numbers 1, 2, 3, ... with the numbers 0, 1, 2, 3, ... (which include 0). What does this show?
5. Pair the counting numbers with **all** the whole numbers, negative ones too: ..., −2, −1, 0, 1, 2, ... Hint: you
   cannot start at the "beginning" of the negatives, because there is none. Start at 0 and go back and forth.
6. When the bus arrived in Worked example 2, the passenger in seat 10 went to which room? Which seat did the person
   in room 39 come from?

??? note "Answers"
    1. *"Move from room $n$ to room $n + 3$."* Rooms 1, 2 and 3 are freed for the new guests.
    2. *"Everyone in room $n$, for $n$ from 2 upwards, move to room $n - 1$."* Room 2 goes to 1, room 3 to 2, and
       so on. Every room is filled again.
    3. Pair $n$ with $10n$. The partner of 7 is 70. The partner of 250 is the number $n$ with $10n = 250$, so 25.
    4. Pair $n$ with $n - 1$: 1 with 0, 2 with 1, 3 with 2, and so on. Every number has exactly one partner. It
       shows that adding one extra thing (the 0) to an infinite collection does not make it bigger. This is
       Worked example 1 again, in disguise.
    5. One way: 1 with 0, 2 with 1, 3 with −1, 4 with 2, 5 with −2, 6 with 3, 7 with −3, and so on. The even
       counting numbers $2k$ go to the positive numbers $k$, and the odd ones $2k + 1$ go to $-k$. Every whole
       number, positive, negative or zero, gets exactly one partner. So there are as many whole numbers as counting
       numbers.
    6. Seat 10 went to room $2 \times 10 - 1 = 19$. Room 39 is odd, so it is a bus passenger, from the seat $s$
       with $2s - 1 = 39$, so seat 20.

## Common mistake

**Concluding "not the same size" from one bad pairing.** If you pair $n$ with $n$ (1 with 1, 2 with 2, and so on),
the even numbers use up only the even counting numbers and the odd counting numbers are left without partners. It
is tempting to say "so there are more counting numbers". But one pairing that leaves things over proves nothing
for infinite sets. Two collections are the same size if **some** pairing works perfectly, and $n \leftrightarrow 2n$
does.

## Where it leads

- Next step: [Build: Zeno, limits and sums that never end](03-build.md), where infinitely many pieces add up to
  something finite.
- Back a step: [Play: does it ever end?](01-play.md)
- What happens when **infinitely many** buses arrive, each with infinitely many passengers, is answered in
  [Master: countable infinity](04-master.md).
- Pairing things up exactly is also the first tool of [Counting and combinations](../counting/index.md), and the
  rules "move $n$ to $2n$" are functions, from [Algebra](../algebra/index.md).
