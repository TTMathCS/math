---
title: "More induction"
---

# More induction

*Patterns and sequences · level 8, lesson 2 of 6*

## A question to start

Look at $7^n - 1$ for the first few $n$:

$$7 - 1 = 6, \qquad 49 - 1 = 48, \qquad 343 - 1 = 342, \qquad 2401 - 1 = 2400.$$

Every one is a multiple of 6. Now compare $2^n$ and $n^2$:

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $2^n$ | 2 | 4 | 8 | 16 | 32 | 64 | 128 |
| $n^2$ | 1 | 4 | 9 | 16 | 25 | 36 | 49 |

$2^n$ wins at $n = 1$, ties at 2, **loses** at 3, ties at 4, and from 5 on seems to win by more and more. Does it win
forever? And here is a third puzzle: a famous "proof" by induction that **all horses are the same colour**. It is
obviously false. Where exactly does it break? Induction is not only for sums, and this lesson shows it at work on all
three.

## The idea

### Induction for divisibility

"6 divides $N$" means $N = 6q$ for some whole number $q$. To prove that $6$ divides $7^n - 1$ for every $n \ge 1$, the
inductive step must get from $7^m - 1$ to $7^{m+1} - 1$. The trick is to **make the old expression appear inside the
new one**:

$$7^{m+1} - 1 = 7 \cdot 7^m - 1 = 7 \cdot 7^m - 7 + 7 - 1 = 7(7^m - 1) + 6.$$

We subtracted 7 and added it back, which changes nothing but makes $7^m - 1$ appear. Now if $7^m - 1 = 6q$, then
$7^{m+1} - 1 = 7 \cdot 6q + 6 = 6(7q + 1)$, a multiple of 6. With the base case $7^1 - 1 = 6$, induction finishes the
proof.

(There is also a direct reason. By the geometric sum formula,
$7^n - 1 = (7 - 1)(7^{n-1} + 7^{n-2} + \cdots + 7 + 1)$, and the first factor is 6. Seeing two proofs of the same fact
is a good way to understand both.)

### Induction for inequalities

For inequalities the step is a **chain**: start from the left side of $P(m + 1)$, use the hypothesis to get a first
inequality, then keep going until you reach the right side. To prove $2^n > n^2$ for $n \ge 5$:

$$2^{m+1} = 2 \cdot 2^m > 2m^2 \ \ (\text{by the hypothesis } 2^m > m^2).$$

Now we need $2m^2 \ge (m + 1)^2$. That says $2m^2 \ge m^2 + 2m + 1$, which is $m^2 - 2m - 1 \ge 0$, which is
$(m - 1)^2 \ge 2$. This is true whenever $m \ge 3$, and certainly for $m \ge 5$. So the chain is

$$2^{m+1} = 2 \cdot 2^m > 2m^2 \ge (m + 1)^2.$$

With the base case $2^5 = 32 > 25 = 5^2$, induction proves $2^n > n^2$ for every $n \ge 5$.

Notice the base case had to be $n = 5$, not 1. The statement is false at $n = 3$, and $P(4)$ ($16 > 16$) is false too,
so no chain could start there. Also notice the step only needed $m \ge 3$. It is the **base** that forces the start at
5. When an inequality holds "from some point on", both parts matter: the step tells you the inequality can never be
lost once it holds, and the base tells you where it first holds.

### Bernoulli's inequality

In [level 7](../level-7/03-infinite-geometric.md) you used the fact that for $h \ge -1$ and every whole number
$n \ge 1$,

$$(1 + h)^n \ge 1 + nh.$$

**Proof by induction.** Base: $(1 + h)^1 = 1 + h$. ✓ Step: assume $(1 + h)^m \ge 1 + mh$. Multiply both sides by
$1 + h$, which is allowed because $1 + h \ge 0$ (multiplying by a negative number would flip the inequality):

$$(1 + h)^{m+1} \ge (1 + mh)(1 + h) = 1 + (m + 1)h + mh^2 \ge 1 + (m + 1)h,$$

since $mh^2 \ge 0$. ∎ The condition $h \ge -1$ was used at exactly one point, which is how you know it is needed.

### Sometimes prove something stronger

Here is a surprise. Try to prove that $\frac{1}{1^2} + \frac{1}{2^2} + \cdots + \frac{1}{n^2} < 2$ for every $n$. The
step gets stuck: knowing the sum to $m$ is less than 2 says nothing about whether adding $\frac{1}{(m + 1)^2}$ keeps it
below 2. The hypothesis is too weak to carry along.

The fix is to prove a **stronger** statement, one that leaves room: $\displaystyle\sum_{k=1}^{n} \frac{1}{k^2} \le 2 - \frac{1}{n}$.

- Base: $1 \le 2 - 1$. ✓
- Step: assume the sum to $m$ is at most $2 - \frac1m$. Then the sum to $m + 1$ is at most
  $2 - \frac1m + \frac{1}{(m + 1)^2}$. This is at most $2 - \frac{1}{m + 1}$ exactly when
  $\frac{1}{(m + 1)^2} \le \frac1m - \frac{1}{m + 1} = \frac{1}{m(m + 1)}$, which is true because $m(m + 1) < (m + 1)^2$.

So the sum is at most $2 - \frac1n$, which is less than 2. ∎ A stronger hypothesis gives a stronger step. (The sum
actually closes in on $\frac{\pi^2}{6} \approx 1.645$, a famous result of Euler's.)

### The horses

**"Theorem."** In any group of $n$ horses, all the horses are the same colour.

**"Proof."** Base case: in a group of 1 horse, all the horses are the same colour. ✓ Step: assume every group of $m$
horses is one colour, and take a group of $m + 1$ horses, lined up as $h_1, h_2, \ldots, h_{m+1}$. Leave out the last
one: $h_1, \ldots, h_m$ is a group of $m$, so they are one colour. Leave out the first: $h_2, \ldots, h_{m+1}$ is a
group of $m$, so they are one colour. The two groups overlap, so they share a colour, and all $m + 1$ are one colour.

**Where it breaks.** The two groups overlap in $h_2, \ldots, h_m$. When $m = 1$ that is **empty**: from two horses
$h_1, h_2$, the first group is $\{h_1\}$ and the second is $\{h_2\}$, and nothing links them. So the step from
$P(1)$ to $P(2)$ fails. The argument is fine for $m \ge 2$, but that does not help, because $P(2)$ is false. One broken
link in the chain is enough. The lesson: **check that your inductive step works for the very first value of $m$**,
by trying it on the smallest case.

## Worked examples

**1. A divisibility proof.** Prove that $n^3 - n$ is divisible by 6 for every $n \ge 1$.

- Base: $1 - 1 = 0 = 6 \times 0$. ✓
- Step: $(m + 1)^3 - (m + 1) = m^3 + 3m^2 + 3m + 1 - m - 1 = (m^3 - m) + 3m(m + 1)$.
- The first part is a multiple of 6 by the hypothesis. In the second, $m(m + 1)$ is a product of two neighbouring
  numbers, so it is even, and $3 \times \text{even}$ is a multiple of 6. The sum of two multiples of 6 is one too. ∎

**2. Factorials beat powers of 2.** Prove $n! > 2^n$ for every $n \ge 4$.

- Base: $4! = 24 > 16 = 2^4$. ✓
- Step: $(m + 1)! = (m + 1) \cdot m! > (m + 1) \cdot 2^m \ge 2 \cdot 2^m = 2^{m+1}$, using the hypothesis and
  then $m + 1 \ge 2$. ∎

(The statement is false for $n = 1, 2, 3$: $1 < 2$, $2 < 4$, $6 < 8$.)

**3. A step that works with no base.** Someone claims $1 + 2 + \cdots + n = \frac{(n + \frac12)^2}{2}$. The step
works: if the sum to $m$ is $\frac{(m + \frac12)^2}{2} = \frac{m^2 + m + \frac14}{2}$, adding $m + 1$ gives
$\frac{m^2 + 3m + 2 + \frac14}{2} = \frac{(m + \frac32)^2}{2}$, the formula for $m + 1$. But the base fails:
$\frac{(1.5)^2}{2} = 1.125 \ne 1$. The claimed formula is always $\frac18$ too big. (Compare with the true
$\frac{n(n + 1)}{2} = \frac{n^2 + n}{2}$.)

## Try it

1. Prove that $5^n - 1$ is divisible by 4 for every $n \ge 1$.
2. Prove that $9^n - 1$ is divisible by 8 for every $n \ge 1$.
3. Prove that $n^3 + 2n$ is divisible by 3 for every $n \ge 1$.
4. Prove that $4^n + 15n - 1$ is divisible by 9 for every $n \ge 1$.
5. Prove that $3^n > n^3$ for every $n \ge 4$. Where does it fail below 4?
6. Prove that $2^n \ge n + 1$ for every $n \ge 0$. Then explain how it follows from Bernoulli's inequality.
7. Where does this go wrong? "Every $n \ge 1$ satisfies $n \le 5$. Base: $1 \le 5$. Step: if $m \le 5$ then ...
   $m + 1 \le 6$." Explain why the step cannot be finished.
8. In the horses "proof", for which values of $m$ is the step $P(m) \Rightarrow P(m + 1)$ logically correct? Why does
   that not rescue the theorem?

??? note "Answers"
    1. Base: $5 - 1 = 4$. ✓ Step: $5^{m+1} - 1 = 5(5^m - 1) + 4$. If $5^m - 1 = 4q$, this is $4(5q + 1)$. ∎
    2. Base: $9 - 1 = 8$. ✓ Step: $9^{m+1} - 1 = 9(9^m - 1) + 8 = 9 \cdot 8q + 8 = 8(9q + 1)$. ∎ (So $3^{2n} - 1$ is
       always a multiple of 8. In fact every odd square is one more than a multiple of 8.)
    3. Base: $1 + 2 = 3$. ✓ Step: $(m + 1)^3 + 2(m + 1) = m^3 + 3m^2 + 3m + 1 + 2m + 2 = (m^3 + 2m) + 3(m^2 + m + 1)$,
       a multiple of 3 plus a multiple of 3. ∎
    4. Base: $4 + 15 - 1 = 18 = 9 \times 2$. ✓ Step: $4^{m+1} + 15(m + 1) - 1 = 4(4^m + 15m - 1) - 60m + 4 + 15m + 14 = 4(4^m + 15m - 1) - 45m + 18$. The first part is a multiple of 9 by the hypothesis, and $-45m + 18 = 9(2 - 5m)$. ∎
    5. Base: $3^4 = 81 > 64 = 4^3$. ✓ Step: $3^{m+1} = 3 \cdot 3^m > 3m^3$, and $3m^3 \ge (m + 1)^3$ exactly when
       $\left(1 + \frac1m\right)^3 \le 3$; for $m \ge 4$, $\left(\frac54\right)^3 \approx 1.95 \le 3$, and the left side
       only shrinks as $m$ grows. ∎ Below 4: $n = 1$ ($3 > 1$) and $n = 2$ ($9 > 8$) are true, but **$n = 3$ fails**:
       $27 = 27$, not greater.
    6. Base $n = 0$: $1 \ge 1$. ✓ Step: $2^{m+1} = 2 \cdot 2^m \ge 2(m + 1) = 2m + 2 \ge m + 2$. ∎ From Bernoulli with
       $h = 1$: $2^n = (1 + 1)^n \ge 1 + n$.
    7. From $m \le 5$ you can only get $m + 1 \le 6$, never $m + 1 \le 5$ (take $m = 5$). The step is **false** at
       $m = 5$, so the chain breaks there, which is good, because the claim is false for $n = 6$.
    8. For every $m \ge 2$, the two groups of $m$ overlap in at least one horse, so the reasoning is valid. But the
       chain needs **every** link starting from the base, and the link from $P(1)$ to $P(2)$ is broken. Since $P(2)$
       is never established, the valid links after it carry nothing.

## Common mistake

**Starting the base case too early (or too late).** For "$2^n > n^2$" the base is $n = 5$. Checking $n = 1$ and then
proving the step for $m \ge 3$ leaves a gap, and the statement is false inside that gap. Make sure the step works for
every $m$ from the base onwards.

**Dividing or multiplying an inequality by something that might be negative.** In Bernoulli's inequality, multiplying
by $1 + h$ is only safe because $1 + h \ge 0$. Always say why each multiplication keeps the direction.

## Where it leads

- Back: [Proof by induction](01-proof-by-induction.md) · Next: [Strong induction](03-strong-induction.md).
- [Level 8 page](index.md) · [Patterns topic page](../index.md)
- Divisibility, remainders and why $7^n - 1$ is a multiple of 6 seen through clock arithmetic:
  [Number theory](../../number-theory/index.md).
- How fast $2^n$, $n^2$ and $n!$ grow: [Level 7: sequences as functions](../level-7/06-sequences-functions.md).
- Inequalities like Bernoulli's are everyday tools in limits: [MAT137 Unit 11 (sequences)](../../../uoft/MAT137/unit11.md).
