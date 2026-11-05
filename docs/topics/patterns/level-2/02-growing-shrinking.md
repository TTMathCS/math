---
title: "Growing and shrinking"
---

# Growing and shrinking

*Patterns and sequences · level 2, lesson 2 of 6*

## A question to start

Count backwards by 10s, starting at 93: 93, 83, 73, ... Where do you stop?

And here is a second puzzle. Count backwards by 5s from 20, and then from 22. One of them lands exactly on 0. The
other one does not. Which is which, and can you tell **before** you start counting?

## The idea

### Patterns that grow

A **growing** number pattern gets bigger each time. You met many in [the last lesson](01-rules-in-words.md): *start at
3 and add 2 each time*. When the rule says **add**, the pattern grows.

One of the most useful growing patterns is **counting by 5s**:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 100" role="img" aria-label="A number line from 0 to 50 with hops of 5: 0, 5, 10, 15, up to 50">
  <line x1="12" y1="70" x2="428" y2="70" stroke="currentColor" stroke-width="2"/>
  <line x1="20.0" y1="65" x2="20.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="20.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <line x1="28.0" y1="67" x2="28.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="36.0" y1="67" x2="36.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="44.0" y1="67" x2="44.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="52.0" y1="67" x2="52.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60.0" y1="65" x2="60.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="60.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">5</text>
  <line x1="68.0" y1="67" x2="68.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="76.0" y1="67" x2="76.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="84.0" y1="67" x2="84.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="92.0" y1="67" x2="92.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="100.0" y1="65" x2="100.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="100.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">10</text>
  <line x1="108.0" y1="67" x2="108.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="116.0" y1="67" x2="116.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="124.0" y1="67" x2="124.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="132.0" y1="67" x2="132.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="140.0" y1="65" x2="140.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="140.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">15</text>
  <line x1="148.0" y1="67" x2="148.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="156.0" y1="67" x2="156.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="164.0" y1="67" x2="164.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="172.0" y1="67" x2="172.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="180.0" y1="65" x2="180.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="180.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">20</text>
  <line x1="188.0" y1="67" x2="188.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="196.0" y1="67" x2="196.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="204.0" y1="67" x2="204.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="212.0" y1="67" x2="212.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="220.0" y1="65" x2="220.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="220.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">25</text>
  <line x1="228.0" y1="67" x2="228.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="236.0" y1="67" x2="236.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="244.0" y1="67" x2="244.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="252.0" y1="67" x2="252.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="260.0" y1="65" x2="260.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="260.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">30</text>
  <line x1="268.0" y1="67" x2="268.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="276.0" y1="67" x2="276.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="284.0" y1="67" x2="284.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="292.0" y1="67" x2="292.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="300.0" y1="65" x2="300.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="300.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">35</text>
  <line x1="308.0" y1="67" x2="308.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="316.0" y1="67" x2="316.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="324.0" y1="67" x2="324.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="332.0" y1="67" x2="332.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="340.0" y1="65" x2="340.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="340.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">40</text>
  <line x1="348.0" y1="67" x2="348.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="356.0" y1="67" x2="356.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="364.0" y1="67" x2="364.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="372.0" y1="67" x2="372.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="380.0" y1="65" x2="380.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="380.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">45</text>
  <line x1="388.0" y1="67" x2="388.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="396.0" y1="67" x2="396.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="404.0" y1="67" x2="404.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="412.0" y1="67" x2="412.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="420.0" y1="65" x2="420.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="420.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">50</text>
  <path d="M 20.0 70 Q 40.0 46.0 60.0 70" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <text x="40.0" y="54.0" font-size="11" text-anchor="middle" fill="currentColor">+5</text>
  <path d="M 60.0 70 Q 80.0 46.0 100.0 70" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <text x="80.0" y="54.0" font-size="11" text-anchor="middle" fill="currentColor">+5</text>
  <path d="M 100.0 70 Q 120.0 46.0 140.0 70" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <text x="120.0" y="54.0" font-size="11" text-anchor="middle" fill="currentColor">+5</text>
  <path d="M 140.0 70 Q 160.0 46.0 180.0 70" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <text x="160.0" y="54.0" font-size="11" text-anchor="middle" fill="currentColor">+5</text>
  <path d="M 180.0 70 Q 200.0 46.0 220.0 70" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <text x="200.0" y="54.0" font-size="11" text-anchor="middle" fill="currentColor">+5</text>
  <path d="M 220.0 70 Q 240.0 46.0 260.0 70" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <text x="240.0" y="54.0" font-size="11" text-anchor="middle" fill="currentColor">+5</text>
  <path d="M 260.0 70 Q 280.0 46.0 300.0 70" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <text x="280.0" y="54.0" font-size="11" text-anchor="middle" fill="currentColor">+5</text>
  <path d="M 300.0 70 Q 320.0 46.0 340.0 70" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <text x="320.0" y="54.0" font-size="11" text-anchor="middle" fill="currentColor">+5</text>
  <path d="M 340.0 70 Q 360.0 46.0 380.0 70" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <text x="360.0" y="54.0" font-size="11" text-anchor="middle" fill="currentColor">+5</text>
  <path d="M 380.0 70 Q 400.0 46.0 420.0 70" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <text x="400.0" y="54.0" font-size="11" text-anchor="middle" fill="currentColor">+5</text>
  <circle cx="20.0" cy="70" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="60.0" cy="70" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="100.0" cy="70" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="140.0" cy="70" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="180.0" cy="70" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="220.0" cy="70" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="260.0" cy="70" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="300.0" cy="70" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="340.0" cy="70" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="380.0" cy="70" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="420.0" cy="70" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
</svg>
</div>

> 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, ...

Look at the last digit of each number (the **ones digit**): 0, 5, 0, 5, 0, 5... It is a **repeating** pattern hiding
inside a growing one! Why does it happen?

Here is the reason. Two 5s make a 10. So every **second** hop of 5 adds a whole 10, and adding 10 never changes the
ones digit. The numbers you land on after an even number of hops end in 0 (10, 20, 30...). The ones in between are
5 more than those, so they end in 5. The ones digit can never be anything else.

That gives you a quick test: **a number is in the count by 5s (from 0) if it ends in 0 or 5.** 85 is in it. 72 is not.

### Saving up: a growing pattern in real life

If you save 5 dollars every week, your savings grow by 5 each week.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 430 140" role="img" aria-label="Coin piles for saving 5 dollars a week: 1 coin, 2 coins, up to 6 coins, labelled 5, 10, 15, 20, 25 and 30 dollars">
  <circle cx="20" cy="100" r="11" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <text x="27" y="128" font-size="12" text-anchor="middle" fill="currentColor">5 dollars</text>
  <circle cx="88" cy="100" r="11" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <circle cx="102" cy="87" r="11" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <text x="95" y="128" font-size="12" text-anchor="middle" fill="currentColor">10 dollars</text>
  <circle cx="156" cy="100" r="11" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <circle cx="170" cy="87" r="11" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <circle cx="156" cy="74" r="11" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <text x="163" y="128" font-size="12" text-anchor="middle" fill="currentColor">15 dollars</text>
  <circle cx="224" cy="100" r="11" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <circle cx="238" cy="87" r="11" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <circle cx="224" cy="74" r="11" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <circle cx="238" cy="61" r="11" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <text x="231" y="128" font-size="12" text-anchor="middle" fill="currentColor">20 dollars</text>
  <circle cx="292" cy="100" r="11" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <circle cx="306" cy="87" r="11" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <circle cx="292" cy="74" r="11" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <circle cx="306" cy="61" r="11" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <circle cx="292" cy="48" r="11" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <text x="299" y="128" font-size="12" text-anchor="middle" fill="currentColor">25 dollars</text>
  <circle cx="360" cy="100" r="11" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <circle cx="374" cy="87" r="11" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <circle cx="360" cy="74" r="11" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <circle cx="374" cy="61" r="11" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <circle cx="360" cy="48" r="11" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <circle cx="374" cy="35" r="11" fill="#eea66f" stroke="currentColor" stroke-width="2"/>
  <text x="367" y="128" font-size="12" text-anchor="middle" fill="currentColor">30 dollars</text>
</svg>
</div>

After 1 week you have 5 dollars, after 2 weeks 10 dollars, and so on. After 6 weeks you have 30 dollars. After
10 weeks? Count on by 5s: 35, 40, 45, **50 dollars**. Or think: 10 weeks of 5 dollars is 10 fives, and 10 fives is 50.

### Patterns that shrink

When the rule says **take away**, the pattern gets smaller each time. It **shrinks**.

Counting down by 10s from 93:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 100" role="img" aria-label="A number line from 0 to 100 with hops back of 10 from 93: 93, 83, 73, down to 3, which is the last stop">
  <line x1="12" y1="70" x2="428" y2="70" stroke="currentColor" stroke-width="2"/>
  <line x1="20.0" y1="65" x2="20.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="20.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <line x1="24.0" y1="67" x2="24.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="28.0" y1="67" x2="28.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="32.0" y1="67" x2="32.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="36.0" y1="67" x2="36.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40.0" y1="67" x2="40.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="44.0" y1="67" x2="44.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="48.0" y1="67" x2="48.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="52.0" y1="67" x2="52.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="56.0" y1="67" x2="56.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60.0" y1="65" x2="60.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="60.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">10</text>
  <line x1="64.0" y1="67" x2="64.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="68.0" y1="67" x2="68.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="72.0" y1="67" x2="72.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="76.0" y1="67" x2="76.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="80.0" y1="67" x2="80.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="84.0" y1="67" x2="84.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="88.0" y1="67" x2="88.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="92.0" y1="67" x2="92.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="96.0" y1="67" x2="96.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="100.0" y1="65" x2="100.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="100.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">20</text>
  <line x1="104.0" y1="67" x2="104.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="108.0" y1="67" x2="108.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="112.0" y1="67" x2="112.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="116.0" y1="67" x2="116.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="120.0" y1="67" x2="120.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="124.0" y1="67" x2="124.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="128.0" y1="67" x2="128.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="132.0" y1="67" x2="132.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="136.0" y1="67" x2="136.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="140.0" y1="65" x2="140.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="140.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">30</text>
  <line x1="144.0" y1="67" x2="144.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="148.0" y1="67" x2="148.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="152.0" y1="67" x2="152.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="156.0" y1="67" x2="156.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="160.0" y1="67" x2="160.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="164.0" y1="67" x2="164.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="168.0" y1="67" x2="168.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="172.0" y1="67" x2="172.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="176.0" y1="67" x2="176.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="180.0" y1="65" x2="180.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="180.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">40</text>
  <line x1="184.0" y1="67" x2="184.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="188.0" y1="67" x2="188.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="192.0" y1="67" x2="192.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="196.0" y1="67" x2="196.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="200.0" y1="67" x2="200.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="204.0" y1="67" x2="204.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="208.0" y1="67" x2="208.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="212.0" y1="67" x2="212.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="216.0" y1="67" x2="216.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="220.0" y1="65" x2="220.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="220.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">50</text>
  <line x1="224.0" y1="67" x2="224.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="228.0" y1="67" x2="228.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="232.0" y1="67" x2="232.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="236.0" y1="67" x2="236.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="240.0" y1="67" x2="240.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="244.0" y1="67" x2="244.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="248.0" y1="67" x2="248.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="252.0" y1="67" x2="252.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="256.0" y1="67" x2="256.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="260.0" y1="65" x2="260.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="260.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">60</text>
  <line x1="264.0" y1="67" x2="264.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="268.0" y1="67" x2="268.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="272.0" y1="67" x2="272.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="276.0" y1="67" x2="276.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="280.0" y1="67" x2="280.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="284.0" y1="67" x2="284.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="288.0" y1="67" x2="288.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="292.0" y1="67" x2="292.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="296.0" y1="67" x2="296.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="300.0" y1="65" x2="300.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="300.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">70</text>
  <line x1="304.0" y1="67" x2="304.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="308.0" y1="67" x2="308.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="312.0" y1="67" x2="312.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="316.0" y1="67" x2="316.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="320.0" y1="67" x2="320.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="324.0" y1="67" x2="324.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="328.0" y1="67" x2="328.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="332.0" y1="67" x2="332.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="336.0" y1="67" x2="336.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="340.0" y1="65" x2="340.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="340.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">80</text>
  <line x1="344.0" y1="67" x2="344.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="348.0" y1="67" x2="348.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="352.0" y1="67" x2="352.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="356.0" y1="67" x2="356.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="360.0" y1="67" x2="360.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="364.0" y1="67" x2="364.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="368.0" y1="67" x2="368.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="372.0" y1="67" x2="372.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="376.0" y1="67" x2="376.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="380.0" y1="65" x2="380.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="380.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">90</text>
  <line x1="384.0" y1="67" x2="384.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="388.0" y1="67" x2="388.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="392.0" y1="67" x2="392.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="396.0" y1="67" x2="396.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="400.0" y1="67" x2="400.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="404.0" y1="67" x2="404.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="408.0" y1="67" x2="408.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="412.0" y1="67" x2="412.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="416.0" y1="67" x2="416.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="420.0" y1="65" x2="420.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="420.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">100</text>
  <path d="M 392.0 70 Q 372.0 46.0 352.0 70" fill="none" stroke="#9cc9ea" stroke-width="2.5"/>
  <path d="M 352.0 70 Q 332.0 46.0 312.0 70" fill="none" stroke="#9cc9ea" stroke-width="2.5"/>
  <path d="M 312.0 70 Q 292.0 46.0 272.0 70" fill="none" stroke="#9cc9ea" stroke-width="2.5"/>
  <path d="M 272.0 70 Q 252.0 46.0 232.0 70" fill="none" stroke="#9cc9ea" stroke-width="2.5"/>
  <path d="M 232.0 70 Q 212.0 46.0 192.0 70" fill="none" stroke="#9cc9ea" stroke-width="2.5"/>
  <path d="M 192.0 70 Q 172.0 46.0 152.0 70" fill="none" stroke="#9cc9ea" stroke-width="2.5"/>
  <path d="M 152.0 70 Q 132.0 46.0 112.0 70" fill="none" stroke="#9cc9ea" stroke-width="2.5"/>
  <path d="M 112.0 70 Q 92.0 46.0 72.0 70" fill="none" stroke="#9cc9ea" stroke-width="2.5"/>
  <path d="M 72.0 70 Q 52.0 46.0 32.0 70" fill="none" stroke="#9cc9ea" stroke-width="2.5"/>
  <circle cx="392.0" cy="70" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="352.0" cy="70" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="312.0" cy="70" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="272.0" cy="70" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="232.0" cy="70" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="192.0" cy="70" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="152.0" cy="70" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="112.0" cy="70" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="72.0" cy="70" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="32.0" cy="70" r="5" fill="#9cc9ea" stroke="currentColor" stroke-width="1.5"/>
</svg>
</div>

> 93, 83, 73, 63, 53, 43, 33, 23, 13, 3

Look at the digits. The ones digit stays **3** the whole way. The tens digit goes down by one each time: 9, 8, 7,
6, 5, 4, 3, 2, 1, 0. That is because taking away 10 is taking away **one ten**, and leaves the ones alone.

Then we reach **3**. Can we take away 10 again? We would need to take 10 things from a pile of 3. You cannot do that.
**The pattern has to stop.**

### Why shrinking patterns stop

This is a very important difference between growing and shrinking.

- A growing pattern can go on **forever**. There is always a bigger number. You can always add 5 more.
- A shrinking pattern made of counting numbers **cannot** go on forever. Every hop takes the numbers closer to 0. Sooner
  or later there is not enough left to take away, and it stops.

(When you are older you will meet numbers **below zero**, like the temperatures on a cold winter day, written −5.
With those numbers a shrinking pattern can keep going. But with the numbers we count things with, 0 is the bottom.)

### Landing on 0, or stopping before

Now the second puzzle. Counting back by 5s from 20:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 100" role="img" aria-label="A number line from 0 to 25 with hops back of 5 from 20: 20, 15, 10, 5, 0; the last hop lands exactly on 0">
  <line x1="12" y1="70" x2="428" y2="70" stroke="currentColor" stroke-width="2"/>
  <line x1="20.0" y1="65" x2="20.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="20.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <line x1="36.0" y1="67" x2="36.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="52.0" y1="67" x2="52.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="68.0" y1="67" x2="68.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="84.0" y1="67" x2="84.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="100.0" y1="65" x2="100.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="100.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">5</text>
  <line x1="116.0" y1="67" x2="116.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="132.0" y1="67" x2="132.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="148.0" y1="67" x2="148.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="164.0" y1="67" x2="164.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="180.0" y1="65" x2="180.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="180.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">10</text>
  <line x1="196.0" y1="67" x2="196.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="212.0" y1="67" x2="212.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="228.0" y1="67" x2="228.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="244.0" y1="67" x2="244.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="260.0" y1="65" x2="260.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="260.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">15</text>
  <line x1="276.0" y1="67" x2="276.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="292.0" y1="67" x2="292.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="308.0" y1="67" x2="308.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="324.0" y1="67" x2="324.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="340.0" y1="65" x2="340.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="340.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">20</text>
  <line x1="356.0" y1="67" x2="356.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="372.0" y1="67" x2="372.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="388.0" y1="67" x2="388.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="404.0" y1="67" x2="404.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="420.0" y1="65" x2="420.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="420.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">25</text>
  <path d="M 340.0 70 Q 300.0 32.0 260.0 70" fill="none" stroke="#7ccf9a" stroke-width="2.5"/>
  <text x="300.0" y="47.0" font-size="11" text-anchor="middle" fill="currentColor">−5</text>
  <path d="M 260.0 70 Q 220.0 32.0 180.0 70" fill="none" stroke="#7ccf9a" stroke-width="2.5"/>
  <text x="220.0" y="47.0" font-size="11" text-anchor="middle" fill="currentColor">−5</text>
  <path d="M 180.0 70 Q 140.0 32.0 100.0 70" fill="none" stroke="#7ccf9a" stroke-width="2.5"/>
  <text x="140.0" y="47.0" font-size="11" text-anchor="middle" fill="currentColor">−5</text>
  <path d="M 100.0 70 Q 60.0 32.0 20.0 70" fill="none" stroke="#7ccf9a" stroke-width="2.5"/>
  <text x="60.0" y="47.0" font-size="11" text-anchor="middle" fill="currentColor">−5</text>
  <circle cx="340.0" cy="70" r="5" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="260.0" cy="70" r="5" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="180.0" cy="70" r="5" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="100.0" cy="70" r="5" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="20.0" cy="70" r="5" fill="#7ccf9a" stroke="currentColor" stroke-width="1.5"/>
</svg>
</div>

20, 15, 10, 5, **0**. The last hop lands exactly on 0.

Counting back by 5s from 22:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 440 100" role="img" aria-label="A number line from 0 to 25 with hops back of 5 from 22: 22, 17, 12, 7, 2; the next hop would go past 0">
  <line x1="12" y1="70" x2="428" y2="70" stroke="currentColor" stroke-width="2"/>
  <line x1="20.0" y1="65" x2="20.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="20.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <line x1="36.0" y1="67" x2="36.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="52.0" y1="67" x2="52.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="68.0" y1="67" x2="68.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="84.0" y1="67" x2="84.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="100.0" y1="65" x2="100.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="100.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">5</text>
  <line x1="116.0" y1="67" x2="116.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="132.0" y1="67" x2="132.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="148.0" y1="67" x2="148.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="164.0" y1="67" x2="164.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="180.0" y1="65" x2="180.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="180.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">10</text>
  <line x1="196.0" y1="67" x2="196.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="212.0" y1="67" x2="212.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="228.0" y1="67" x2="228.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="244.0" y1="67" x2="244.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="260.0" y1="65" x2="260.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="260.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">15</text>
  <line x1="276.0" y1="67" x2="276.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="292.0" y1="67" x2="292.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="308.0" y1="67" x2="308.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="324.0" y1="67" x2="324.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="340.0" y1="65" x2="340.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="340.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">20</text>
  <line x1="356.0" y1="67" x2="356.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="372.0" y1="67" x2="372.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="388.0" y1="67" x2="388.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="404.0" y1="67" x2="404.0" y2="73" stroke="currentColor" stroke-width="1.5"/>
  <line x1="420.0" y1="65" x2="420.0" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="420.0" y="90" font-size="12" text-anchor="middle" fill="currentColor">25</text>
  <path d="M 372.0 70 Q 332.0 32.0 292.0 70" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <text x="332.0" y="47.0" font-size="11" text-anchor="middle" fill="currentColor">−5</text>
  <path d="M 292.0 70 Q 252.0 32.0 212.0 70" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <text x="252.0" y="47.0" font-size="11" text-anchor="middle" fill="currentColor">−5</text>
  <path d="M 212.0 70 Q 172.0 32.0 132.0 70" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <text x="172.0" y="47.0" font-size="11" text-anchor="middle" fill="currentColor">−5</text>
  <path d="M 132.0 70 Q 92.0 32.0 52.0 70" fill="none" stroke="#eea66f" stroke-width="2.5"/>
  <text x="92.0" y="47.0" font-size="11" text-anchor="middle" fill="currentColor">−5</text>
  <circle cx="372.0" cy="70" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="292.0" cy="70" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="212.0" cy="70" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="132.0" cy="70" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="52.0" cy="70" r="5" fill="#eea66f" stroke="currentColor" stroke-width="1.5"/>
</svg>
</div>

22, 17, 12, 7, **2**. The next hop would need to take 5 from 2. It cannot. The pattern stops at 2, and never reaches 0.

Can you tell before you start which will land on 0? Yes! Think about it **backwards**. If a pattern counting down by
5s lands on 0, then going back up the same hops from 0 you would count 0, 5, 10, 15, 20... So the start must be in the
count by 5s. 20 is in the count by 5s (it ends in 0), so it lands on 0. 22 is not (it ends in 2), so it does not.

And the number it stops at? From 22, it stops at **2**. That is how much is **left over** when you take 5s away
from 22 for as long as you can. (22 is four 5s and 2 more.)

The same idea works for any hop. Counting down by 10s from 93 stops at 3, because 93 is nine 10s and 3 more.

### How many numbers in a shrinking pattern?

In 20, 15, 10, 5, 0 there are **5** numbers. But only **4 hops**. Count them on the number line: 20 to 15, 15 to 10,
10 to 5, 5 to 0. Four hops, five landing places.

There is always **one more number than hops**, because you have to count the starting number too. It is like a fence:
4 gaps between posts need 5 posts.

### Counting down to blast off

A rocket launch counts down by 1s: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, lift off! Space missions really do count down, so
everybody knows exactly when the engines start. How many numbers are said, from 10 down to 0? Ten hops, so **eleven**
numbers.

<figure class="play" data-play="seq" data-kind="arith"><span class="ai-tag">AI-created</span><figcaption><b>Growing or shrinking.</b> A negative d makes the pattern shrink.</figcaption></figure>

## Worked examples

**Example 1. Count up by 5s.** Start at 35 and count up by 5s. Write the next five numbers.

1. 35 + 5 = 40. 40 + 5 = 45. 45 + 5 = 50. 50 + 5 = 55. 55 + 5 = 60.
2. **40, 45, 50, 55, 60.**
3. Check the ones digits: 0, 5, 0, 5, 0. ✓ They take turns, as they should.

**Example 2. Count down by 10s.** Start at 87 and count down by 10s until you have to stop.

1. The ones digit stays 7, the tens digit goes down by one: 87, 77, 67, 57, 47, 37, 27, 17, **7**.
2. From 7 we cannot take away 10, so we stop at **7**.
3. How many numbers? The tens digits went 8, 7, 6, 5, 4, 3, 2, 1, 0: that is **9 numbers**.

**Example 3. Will it land on 0?** A pattern starts at 40 and takes away 5 each time. Does it land on 0? How many hops?

1. 40 ends in 0, so it is in the count by 5s. **Yes**, it lands on 0.
2. Count up the hops from 0: 5, 10, 15, 20, 25, 30, 35, 40. That is 8 fives.
3. So it takes **8 hops**: 40, 35, 30, 25, 20, 15, 10, 5, 0 (9 numbers).

**Example 4. Will it land on 0?** A pattern starts at 17 and takes away 3 each time. Where does it stop?

1. 17, 14, 11, 8, 5, 2.
2. From 2 we cannot take away 3. It stops at **2**.
3. Check: the count by 3s goes 3, 6, 9, 12, 15, 18. 17 is not in it, so it could not land on 0. 15 is the closest
   below, and 17 is 15 and **2** more. ✓

## Try it

1. Count up by 5s from 60 to 100.
2. Count down by 10s from 100 to 0. How many numbers did you say?
3. Count down by 10s from 54. Where do you stop?
4. Which of these are in the count by 5s: 45, 52, 70, 98, 105?
5. A pattern starts at 30 and takes away 5 each time. Does it land on 0? How many hops does it take?
6. A pattern starts at 25 and takes away 4 each time. Where does it stop?
7. Sam saves 10 dollars each week. How much has he saved after 7 weeks? Jo starts with 70 dollars and spends 10 dollars
   each week. How much does she have after 7 weeks?
8. Why can a growing pattern go on forever, but a shrinking pattern of counting numbers cannot?

??? note "Answers"
    1. 60, 65, 70, 75, 80, 85, 90, 95, 100.
    2. 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0: **11 numbers** (10 hops, and one more number than hops).
    3. 54, 44, 34, 24, 14, **4**. From 4 you cannot take away 10.
    4. **45, 70 and 105** (they end in 5 or 0). 52 and 98 do not.
    5. **Yes**, because 30 ends in 0. 30, 25, 20, 15, 10, 5, 0: **6 hops**.
    6. 25, 21, 17, 13, 9, 5, **1**. From 1 you cannot take away 4. (25 is six 4s, which is 24, and 1 more.)
    7. Sam: 10, 20, 30, 40, 50, 60, **70 dollars**. Jo: 60, 50, 40, 30, 20, 10, **0 dollars**. Sam's pattern grows
       and Jo's shrinks, and after 7 weeks Sam has exactly what Jo started with.
    8. With a growing pattern you can always add more: there is no biggest number. A shrinking pattern gets closer to
       0 with each hop, and when what is left is smaller than the hop, you cannot take it away. So it must stop.

## Common mistake

**Changing the ones digit when you add or take away 10.** 87 − 10 is 77, not 76 or 86. Only the **tens** digit
changes, by one.

**Counting hops instead of numbers (or the other way round).** 20, 15, 10, 5, 0 has 4 hops but 5 numbers. Decide which
one the question asks for.

## Where it leads

- Previous lesson: [Pattern rules in words](01-rules-in-words.md). Next lesson: [The hundred chart](03-hundred-chart.md),
  where counting by 5s and 10s makes stripes.
- This level: [Level 2: Pattern rules](index.md). The whole topic: [Patterns and sequences](../index.md).
- Skip counting is the start of the times tables: [Skip counting](../../number-theory/level-1/04-skip-counting.md) and
  [Multiples](../../number-theory/level-2/02-multiples.md).
- The number left over when a shrinking pattern stops is the **remainder** of a division: [Leftovers](../../number-theory/level-1/06-leftovers.md).
- Tens and ones: [Place value to 1000](../../numbers/level-2/01-place-value.md).
