---
title: "Patterns in Pascal's triangle"
---

# Patterns in Pascal's triangle

*Counting and combinations · level 7, lesson 4 of 6*

## A question to start

Colour every **odd** number in the first 32 rows of Pascal's triangle and leave the even ones blank. You might expect
a random scatter of dots. Instead you get this:

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 404 357" role="img" aria-label="Rows 0 to 31 of Pascal's triangle with each odd entry drawn as an orange triangle; the picture is the Sierpinski triangle">
  <polygon points="202.0,12.0 196.0,22.4 208.0,22.4" fill="#eea66f"/>
  <polygon points="196.0,22.4 190.0,32.8 202.0,32.8" fill="#eea66f"/>
  <polygon points="208.0,22.4 202.0,32.8 214.0,32.8" fill="#eea66f"/>
  <polygon points="190.0,32.8 184.0,43.2 196.0,43.2" fill="#eea66f"/>
  <polygon points="214.0,32.8 208.0,43.2 220.0,43.2" fill="#eea66f"/>
  <polygon points="184.0,43.2 178.0,53.6 190.0,53.6" fill="#eea66f"/>
  <polygon points="196.0,43.2 190.0,53.6 202.0,53.6" fill="#eea66f"/>
  <polygon points="208.0,43.2 202.0,53.6 214.0,53.6" fill="#eea66f"/>
  <polygon points="220.0,43.2 214.0,53.6 226.0,53.6" fill="#eea66f"/>
  <polygon points="178.0,53.6 172.0,64.0 184.0,64.0" fill="#eea66f"/>
  <polygon points="226.0,53.6 220.0,64.0 232.0,64.0" fill="#eea66f"/>
  <polygon points="172.0,64.0 166.0,74.4 178.0,74.4" fill="#eea66f"/>
  <polygon points="184.0,64.0 178.0,74.4 190.0,74.4" fill="#eea66f"/>
  <polygon points="220.0,64.0 214.0,74.4 226.0,74.4" fill="#eea66f"/>
  <polygon points="232.0,64.0 226.0,74.4 238.0,74.4" fill="#eea66f"/>
  <polygon points="166.0,74.4 160.0,84.7 172.0,84.7" fill="#eea66f"/>
  <polygon points="190.0,74.4 184.0,84.7 196.0,84.7" fill="#eea66f"/>
  <polygon points="214.0,74.4 208.0,84.7 220.0,84.7" fill="#eea66f"/>
  <polygon points="238.0,74.4 232.0,84.7 244.0,84.7" fill="#eea66f"/>
  <polygon points="160.0,84.7 154.0,95.1 166.0,95.1" fill="#eea66f"/>
  <polygon points="172.0,84.7 166.0,95.1 178.0,95.1" fill="#eea66f"/>
  <polygon points="184.0,84.7 178.0,95.1 190.0,95.1" fill="#eea66f"/>
  <polygon points="196.0,84.7 190.0,95.1 202.0,95.1" fill="#eea66f"/>
  <polygon points="208.0,84.7 202.0,95.1 214.0,95.1" fill="#eea66f"/>
  <polygon points="220.0,84.7 214.0,95.1 226.0,95.1" fill="#eea66f"/>
  <polygon points="232.0,84.7 226.0,95.1 238.0,95.1" fill="#eea66f"/>
  <polygon points="244.0,84.7 238.0,95.1 250.0,95.1" fill="#eea66f"/>
  <polygon points="154.0,95.1 148.0,105.5 160.0,105.5" fill="#eea66f"/>
  <polygon points="250.0,95.1 244.0,105.5 256.0,105.5" fill="#eea66f"/>
  <polygon points="148.0,105.5 142.0,115.9 154.0,115.9" fill="#eea66f"/>
  <polygon points="160.0,105.5 154.0,115.9 166.0,115.9" fill="#eea66f"/>
  <polygon points="244.0,105.5 238.0,115.9 250.0,115.9" fill="#eea66f"/>
  <polygon points="256.0,105.5 250.0,115.9 262.0,115.9" fill="#eea66f"/>
  <polygon points="142.0,115.9 136.0,126.3 148.0,126.3" fill="#eea66f"/>
  <polygon points="166.0,115.9 160.0,126.3 172.0,126.3" fill="#eea66f"/>
  <polygon points="238.0,115.9 232.0,126.3 244.0,126.3" fill="#eea66f"/>
  <polygon points="262.0,115.9 256.0,126.3 268.0,126.3" fill="#eea66f"/>
  <polygon points="136.0,126.3 130.0,136.7 142.0,136.7" fill="#eea66f"/>
  <polygon points="148.0,126.3 142.0,136.7 154.0,136.7" fill="#eea66f"/>
  <polygon points="160.0,126.3 154.0,136.7 166.0,136.7" fill="#eea66f"/>
  <polygon points="172.0,126.3 166.0,136.7 178.0,136.7" fill="#eea66f"/>
  <polygon points="232.0,126.3 226.0,136.7 238.0,136.7" fill="#eea66f"/>
  <polygon points="244.0,126.3 238.0,136.7 250.0,136.7" fill="#eea66f"/>
  <polygon points="256.0,126.3 250.0,136.7 262.0,136.7" fill="#eea66f"/>
  <polygon points="268.0,126.3 262.0,136.7 274.0,136.7" fill="#eea66f"/>
  <polygon points="130.0,136.7 124.0,147.1 136.0,147.1" fill="#eea66f"/>
  <polygon points="178.0,136.7 172.0,147.1 184.0,147.1" fill="#eea66f"/>
  <polygon points="226.0,136.7 220.0,147.1 232.0,147.1" fill="#eea66f"/>
  <polygon points="274.0,136.7 268.0,147.1 280.0,147.1" fill="#eea66f"/>
  <polygon points="124.0,147.1 118.0,157.5 130.0,157.5" fill="#eea66f"/>
  <polygon points="136.0,147.1 130.0,157.5 142.0,157.5" fill="#eea66f"/>
  <polygon points="172.0,147.1 166.0,157.5 178.0,157.5" fill="#eea66f"/>
  <polygon points="184.0,147.1 178.0,157.5 190.0,157.5" fill="#eea66f"/>
  <polygon points="220.0,147.1 214.0,157.5 226.0,157.5" fill="#eea66f"/>
  <polygon points="232.0,147.1 226.0,157.5 238.0,157.5" fill="#eea66f"/>
  <polygon points="268.0,147.1 262.0,157.5 274.0,157.5" fill="#eea66f"/>
  <polygon points="280.0,147.1 274.0,157.5 286.0,157.5" fill="#eea66f"/>
  <polygon points="118.0,157.5 112.0,167.9 124.0,167.9" fill="#eea66f"/>
  <polygon points="142.0,157.5 136.0,167.9 148.0,167.9" fill="#eea66f"/>
  <polygon points="166.0,157.5 160.0,167.9 172.0,167.9" fill="#eea66f"/>
  <polygon points="190.0,157.5 184.0,167.9 196.0,167.9" fill="#eea66f"/>
  <polygon points="214.0,157.5 208.0,167.9 220.0,167.9" fill="#eea66f"/>
  <polygon points="238.0,157.5 232.0,167.9 244.0,167.9" fill="#eea66f"/>
  <polygon points="262.0,157.5 256.0,167.9 268.0,167.9" fill="#eea66f"/>
  <polygon points="286.0,157.5 280.0,167.9 292.0,167.9" fill="#eea66f"/>
  <polygon points="112.0,167.9 106.0,178.3 118.0,178.3" fill="#eea66f"/>
  <polygon points="124.0,167.9 118.0,178.3 130.0,178.3" fill="#eea66f"/>
  <polygon points="136.0,167.9 130.0,178.3 142.0,178.3" fill="#eea66f"/>
  <polygon points="148.0,167.9 142.0,178.3 154.0,178.3" fill="#eea66f"/>
  <polygon points="160.0,167.9 154.0,178.3 166.0,178.3" fill="#eea66f"/>
  <polygon points="172.0,167.9 166.0,178.3 178.0,178.3" fill="#eea66f"/>
  <polygon points="184.0,167.9 178.0,178.3 190.0,178.3" fill="#eea66f"/>
  <polygon points="196.0,167.9 190.0,178.3 202.0,178.3" fill="#eea66f"/>
  <polygon points="208.0,167.9 202.0,178.3 214.0,178.3" fill="#eea66f"/>
  <polygon points="220.0,167.9 214.0,178.3 226.0,178.3" fill="#eea66f"/>
  <polygon points="232.0,167.9 226.0,178.3 238.0,178.3" fill="#eea66f"/>
  <polygon points="244.0,167.9 238.0,178.3 250.0,178.3" fill="#eea66f"/>
  <polygon points="256.0,167.9 250.0,178.3 262.0,178.3" fill="#eea66f"/>
  <polygon points="268.0,167.9 262.0,178.3 274.0,178.3" fill="#eea66f"/>
  <polygon points="280.0,167.9 274.0,178.3 286.0,178.3" fill="#eea66f"/>
  <polygon points="292.0,167.9 286.0,178.3 298.0,178.3" fill="#eea66f"/>
  <polygon points="106.0,178.3 100.0,188.7 112.0,188.7" fill="#eea66f"/>
  <polygon points="298.0,178.3 292.0,188.7 304.0,188.7" fill="#eea66f"/>
  <polygon points="100.0,188.7 94.0,199.1 106.0,199.1" fill="#eea66f"/>
  <polygon points="112.0,188.7 106.0,199.1 118.0,199.1" fill="#eea66f"/>
  <polygon points="292.0,188.7 286.0,199.1 298.0,199.1" fill="#eea66f"/>
  <polygon points="304.0,188.7 298.0,199.1 310.0,199.1" fill="#eea66f"/>
  <polygon points="94.0,199.1 88.0,209.4 100.0,209.4" fill="#eea66f"/>
  <polygon points="118.0,199.1 112.0,209.4 124.0,209.4" fill="#eea66f"/>
  <polygon points="286.0,199.1 280.0,209.4 292.0,209.4" fill="#eea66f"/>
  <polygon points="310.0,199.1 304.0,209.4 316.0,209.4" fill="#eea66f"/>
  <polygon points="88.0,209.4 82.0,219.8 94.0,219.8" fill="#eea66f"/>
  <polygon points="100.0,209.4 94.0,219.8 106.0,219.8" fill="#eea66f"/>
  <polygon points="112.0,209.4 106.0,219.8 118.0,219.8" fill="#eea66f"/>
  <polygon points="124.0,209.4 118.0,219.8 130.0,219.8" fill="#eea66f"/>
  <polygon points="280.0,209.4 274.0,219.8 286.0,219.8" fill="#eea66f"/>
  <polygon points="292.0,209.4 286.0,219.8 298.0,219.8" fill="#eea66f"/>
  <polygon points="304.0,209.4 298.0,219.8 310.0,219.8" fill="#eea66f"/>
  <polygon points="316.0,209.4 310.0,219.8 322.0,219.8" fill="#eea66f"/>
  <polygon points="82.0,219.8 76.0,230.2 88.0,230.2" fill="#eea66f"/>
  <polygon points="130.0,219.8 124.0,230.2 136.0,230.2" fill="#eea66f"/>
  <polygon points="274.0,219.8 268.0,230.2 280.0,230.2" fill="#eea66f"/>
  <polygon points="322.0,219.8 316.0,230.2 328.0,230.2" fill="#eea66f"/>
  <polygon points="76.0,230.2 70.0,240.6 82.0,240.6" fill="#eea66f"/>
  <polygon points="88.0,230.2 82.0,240.6 94.0,240.6" fill="#eea66f"/>
  <polygon points="124.0,230.2 118.0,240.6 130.0,240.6" fill="#eea66f"/>
  <polygon points="136.0,230.2 130.0,240.6 142.0,240.6" fill="#eea66f"/>
  <polygon points="268.0,230.2 262.0,240.6 274.0,240.6" fill="#eea66f"/>
  <polygon points="280.0,230.2 274.0,240.6 286.0,240.6" fill="#eea66f"/>
  <polygon points="316.0,230.2 310.0,240.6 322.0,240.6" fill="#eea66f"/>
  <polygon points="328.0,230.2 322.0,240.6 334.0,240.6" fill="#eea66f"/>
  <polygon points="70.0,240.6 64.0,251.0 76.0,251.0" fill="#eea66f"/>
  <polygon points="94.0,240.6 88.0,251.0 100.0,251.0" fill="#eea66f"/>
  <polygon points="118.0,240.6 112.0,251.0 124.0,251.0" fill="#eea66f"/>
  <polygon points="142.0,240.6 136.0,251.0 148.0,251.0" fill="#eea66f"/>
  <polygon points="262.0,240.6 256.0,251.0 268.0,251.0" fill="#eea66f"/>
  <polygon points="286.0,240.6 280.0,251.0 292.0,251.0" fill="#eea66f"/>
  <polygon points="310.0,240.6 304.0,251.0 316.0,251.0" fill="#eea66f"/>
  <polygon points="334.0,240.6 328.0,251.0 340.0,251.0" fill="#eea66f"/>
  <polygon points="64.0,251.0 58.0,261.4 70.0,261.4" fill="#eea66f"/>
  <polygon points="76.0,251.0 70.0,261.4 82.0,261.4" fill="#eea66f"/>
  <polygon points="88.0,251.0 82.0,261.4 94.0,261.4" fill="#eea66f"/>
  <polygon points="100.0,251.0 94.0,261.4 106.0,261.4" fill="#eea66f"/>
  <polygon points="112.0,251.0 106.0,261.4 118.0,261.4" fill="#eea66f"/>
  <polygon points="124.0,251.0 118.0,261.4 130.0,261.4" fill="#eea66f"/>
  <polygon points="136.0,251.0 130.0,261.4 142.0,261.4" fill="#eea66f"/>
  <polygon points="148.0,251.0 142.0,261.4 154.0,261.4" fill="#eea66f"/>
  <polygon points="256.0,251.0 250.0,261.4 262.0,261.4" fill="#eea66f"/>
  <polygon points="268.0,251.0 262.0,261.4 274.0,261.4" fill="#eea66f"/>
  <polygon points="280.0,251.0 274.0,261.4 286.0,261.4" fill="#eea66f"/>
  <polygon points="292.0,251.0 286.0,261.4 298.0,261.4" fill="#eea66f"/>
  <polygon points="304.0,251.0 298.0,261.4 310.0,261.4" fill="#eea66f"/>
  <polygon points="316.0,251.0 310.0,261.4 322.0,261.4" fill="#eea66f"/>
  <polygon points="328.0,251.0 322.0,261.4 334.0,261.4" fill="#eea66f"/>
  <polygon points="340.0,251.0 334.0,261.4 346.0,261.4" fill="#eea66f"/>
  <polygon points="58.0,261.4 52.0,271.8 64.0,271.8" fill="#eea66f"/>
  <polygon points="154.0,261.4 148.0,271.8 160.0,271.8" fill="#eea66f"/>
  <polygon points="250.0,261.4 244.0,271.8 256.0,271.8" fill="#eea66f"/>
  <polygon points="346.0,261.4 340.0,271.8 352.0,271.8" fill="#eea66f"/>
  <polygon points="52.0,271.8 46.0,282.2 58.0,282.2" fill="#eea66f"/>
  <polygon points="64.0,271.8 58.0,282.2 70.0,282.2" fill="#eea66f"/>
  <polygon points="148.0,271.8 142.0,282.2 154.0,282.2" fill="#eea66f"/>
  <polygon points="160.0,271.8 154.0,282.2 166.0,282.2" fill="#eea66f"/>
  <polygon points="244.0,271.8 238.0,282.2 250.0,282.2" fill="#eea66f"/>
  <polygon points="256.0,271.8 250.0,282.2 262.0,282.2" fill="#eea66f"/>
  <polygon points="340.0,271.8 334.0,282.2 346.0,282.2" fill="#eea66f"/>
  <polygon points="352.0,271.8 346.0,282.2 358.0,282.2" fill="#eea66f"/>
  <polygon points="46.0,282.2 40.0,292.6 52.0,292.6" fill="#eea66f"/>
  <polygon points="70.0,282.2 64.0,292.6 76.0,292.6" fill="#eea66f"/>
  <polygon points="142.0,282.2 136.0,292.6 148.0,292.6" fill="#eea66f"/>
  <polygon points="166.0,282.2 160.0,292.6 172.0,292.6" fill="#eea66f"/>
  <polygon points="238.0,282.2 232.0,292.6 244.0,292.6" fill="#eea66f"/>
  <polygon points="262.0,282.2 256.0,292.6 268.0,292.6" fill="#eea66f"/>
  <polygon points="334.0,282.2 328.0,292.6 340.0,292.6" fill="#eea66f"/>
  <polygon points="358.0,282.2 352.0,292.6 364.0,292.6" fill="#eea66f"/>
  <polygon points="40.0,292.6 34.0,303.0 46.0,303.0" fill="#eea66f"/>
  <polygon points="52.0,292.6 46.0,303.0 58.0,303.0" fill="#eea66f"/>
  <polygon points="64.0,292.6 58.0,303.0 70.0,303.0" fill="#eea66f"/>
  <polygon points="76.0,292.6 70.0,303.0 82.0,303.0" fill="#eea66f"/>
  <polygon points="136.0,292.6 130.0,303.0 142.0,303.0" fill="#eea66f"/>
  <polygon points="148.0,292.6 142.0,303.0 154.0,303.0" fill="#eea66f"/>
  <polygon points="160.0,292.6 154.0,303.0 166.0,303.0" fill="#eea66f"/>
  <polygon points="172.0,292.6 166.0,303.0 178.0,303.0" fill="#eea66f"/>
  <polygon points="232.0,292.6 226.0,303.0 238.0,303.0" fill="#eea66f"/>
  <polygon points="244.0,292.6 238.0,303.0 250.0,303.0" fill="#eea66f"/>
  <polygon points="256.0,292.6 250.0,303.0 262.0,303.0" fill="#eea66f"/>
  <polygon points="268.0,292.6 262.0,303.0 274.0,303.0" fill="#eea66f"/>
  <polygon points="328.0,292.6 322.0,303.0 334.0,303.0" fill="#eea66f"/>
  <polygon points="340.0,292.6 334.0,303.0 346.0,303.0" fill="#eea66f"/>
  <polygon points="352.0,292.6 346.0,303.0 358.0,303.0" fill="#eea66f"/>
  <polygon points="364.0,292.6 358.0,303.0 370.0,303.0" fill="#eea66f"/>
  <polygon points="34.0,303.0 28.0,313.4 40.0,313.4" fill="#eea66f"/>
  <polygon points="82.0,303.0 76.0,313.4 88.0,313.4" fill="#eea66f"/>
  <polygon points="130.0,303.0 124.0,313.4 136.0,313.4" fill="#eea66f"/>
  <polygon points="178.0,303.0 172.0,313.4 184.0,313.4" fill="#eea66f"/>
  <polygon points="226.0,303.0 220.0,313.4 232.0,313.4" fill="#eea66f"/>
  <polygon points="274.0,303.0 268.0,313.4 280.0,313.4" fill="#eea66f"/>
  <polygon points="322.0,303.0 316.0,313.4 328.0,313.4" fill="#eea66f"/>
  <polygon points="370.0,303.0 364.0,313.4 376.0,313.4" fill="#eea66f"/>
  <polygon points="28.0,313.4 22.0,323.8 34.0,323.8" fill="#eea66f"/>
  <polygon points="40.0,313.4 34.0,323.8 46.0,323.8" fill="#eea66f"/>
  <polygon points="76.0,313.4 70.0,323.8 82.0,323.8" fill="#eea66f"/>
  <polygon points="88.0,313.4 82.0,323.8 94.0,323.8" fill="#eea66f"/>
  <polygon points="124.0,313.4 118.0,323.8 130.0,323.8" fill="#eea66f"/>
  <polygon points="136.0,313.4 130.0,323.8 142.0,323.8" fill="#eea66f"/>
  <polygon points="172.0,313.4 166.0,323.8 178.0,323.8" fill="#eea66f"/>
  <polygon points="184.0,313.4 178.0,323.8 190.0,323.8" fill="#eea66f"/>
  <polygon points="220.0,313.4 214.0,323.8 226.0,323.8" fill="#eea66f"/>
  <polygon points="232.0,313.4 226.0,323.8 238.0,323.8" fill="#eea66f"/>
  <polygon points="268.0,313.4 262.0,323.8 274.0,323.8" fill="#eea66f"/>
  <polygon points="280.0,313.4 274.0,323.8 286.0,323.8" fill="#eea66f"/>
  <polygon points="316.0,313.4 310.0,323.8 322.0,323.8" fill="#eea66f"/>
  <polygon points="328.0,313.4 322.0,323.8 334.0,323.8" fill="#eea66f"/>
  <polygon points="364.0,313.4 358.0,323.8 370.0,323.8" fill="#eea66f"/>
  <polygon points="376.0,313.4 370.0,323.8 382.0,323.8" fill="#eea66f"/>
  <polygon points="22.0,323.8 16.0,334.2 28.0,334.2" fill="#eea66f"/>
  <polygon points="46.0,323.8 40.0,334.2 52.0,334.2" fill="#eea66f"/>
  <polygon points="70.0,323.8 64.0,334.2 76.0,334.2" fill="#eea66f"/>
  <polygon points="94.0,323.8 88.0,334.2 100.0,334.2" fill="#eea66f"/>
  <polygon points="118.0,323.8 112.0,334.2 124.0,334.2" fill="#eea66f"/>
  <polygon points="142.0,323.8 136.0,334.2 148.0,334.2" fill="#eea66f"/>
  <polygon points="166.0,323.8 160.0,334.2 172.0,334.2" fill="#eea66f"/>
  <polygon points="190.0,323.8 184.0,334.2 196.0,334.2" fill="#eea66f"/>
  <polygon points="214.0,323.8 208.0,334.2 220.0,334.2" fill="#eea66f"/>
  <polygon points="238.0,323.8 232.0,334.2 244.0,334.2" fill="#eea66f"/>
  <polygon points="262.0,323.8 256.0,334.2 268.0,334.2" fill="#eea66f"/>
  <polygon points="286.0,323.8 280.0,334.2 292.0,334.2" fill="#eea66f"/>
  <polygon points="310.0,323.8 304.0,334.2 316.0,334.2" fill="#eea66f"/>
  <polygon points="334.0,323.8 328.0,334.2 340.0,334.2" fill="#eea66f"/>
  <polygon points="358.0,323.8 352.0,334.2 364.0,334.2" fill="#eea66f"/>
  <polygon points="382.0,323.8 376.0,334.2 388.0,334.2" fill="#eea66f"/>
  <polygon points="16.0,334.2 10.0,344.5 22.0,344.5" fill="#eea66f"/>
  <polygon points="28.0,334.2 22.0,344.5 34.0,344.5" fill="#eea66f"/>
  <polygon points="40.0,334.2 34.0,344.5 46.0,344.5" fill="#eea66f"/>
  <polygon points="52.0,334.2 46.0,344.5 58.0,344.5" fill="#eea66f"/>
  <polygon points="64.0,334.2 58.0,344.5 70.0,344.5" fill="#eea66f"/>
  <polygon points="76.0,334.2 70.0,344.5 82.0,344.5" fill="#eea66f"/>
  <polygon points="88.0,334.2 82.0,344.5 94.0,344.5" fill="#eea66f"/>
  <polygon points="100.0,334.2 94.0,344.5 106.0,344.5" fill="#eea66f"/>
  <polygon points="112.0,334.2 106.0,344.5 118.0,344.5" fill="#eea66f"/>
  <polygon points="124.0,334.2 118.0,344.5 130.0,344.5" fill="#eea66f"/>
  <polygon points="136.0,334.2 130.0,344.5 142.0,344.5" fill="#eea66f"/>
  <polygon points="148.0,334.2 142.0,344.5 154.0,344.5" fill="#eea66f"/>
  <polygon points="160.0,334.2 154.0,344.5 166.0,344.5" fill="#eea66f"/>
  <polygon points="172.0,334.2 166.0,344.5 178.0,344.5" fill="#eea66f"/>
  <polygon points="184.0,334.2 178.0,344.5 190.0,344.5" fill="#eea66f"/>
  <polygon points="196.0,334.2 190.0,344.5 202.0,344.5" fill="#eea66f"/>
  <polygon points="208.0,334.2 202.0,344.5 214.0,344.5" fill="#eea66f"/>
  <polygon points="220.0,334.2 214.0,344.5 226.0,344.5" fill="#eea66f"/>
  <polygon points="232.0,334.2 226.0,344.5 238.0,344.5" fill="#eea66f"/>
  <polygon points="244.0,334.2 238.0,344.5 250.0,344.5" fill="#eea66f"/>
  <polygon points="256.0,334.2 250.0,344.5 262.0,344.5" fill="#eea66f"/>
  <polygon points="268.0,334.2 262.0,344.5 274.0,344.5" fill="#eea66f"/>
  <polygon points="280.0,334.2 274.0,344.5 286.0,344.5" fill="#eea66f"/>
  <polygon points="292.0,334.2 286.0,344.5 298.0,344.5" fill="#eea66f"/>
  <polygon points="304.0,334.2 298.0,344.5 310.0,344.5" fill="#eea66f"/>
  <polygon points="316.0,334.2 310.0,344.5 322.0,344.5" fill="#eea66f"/>
  <polygon points="328.0,334.2 322.0,344.5 334.0,344.5" fill="#eea66f"/>
  <polygon points="340.0,334.2 334.0,344.5 346.0,344.5" fill="#eea66f"/>
  <polygon points="352.0,334.2 346.0,344.5 358.0,344.5" fill="#eea66f"/>
  <polygon points="364.0,334.2 358.0,344.5 370.0,344.5" fill="#eea66f"/>
  <polygon points="376.0,334.2 370.0,344.5 382.0,344.5" fill="#eea66f"/>
  <polygon points="388.0,334.2 382.0,344.5 394.0,344.5" fill="#eea66f"/>
</svg>
</div>

A triangle made of three smaller triangles, each made of three smaller ones, with a hole in the middle of each. It is
called the **Sierpinski triangle**, after the Polish mathematician Wacław Sierpiński, who studied it in 1915. Why does
a triangle built by adding numbers draw a picture like this? By the end of the lesson you will be able to prove it, and
you will have found several other famous sequences hiding in the same triangle.

## The idea

### The rule that builds everything

Every pattern in this lesson comes from one rule, **Pascal's rule** from level 5: each entry is the sum of the two
entries just above it,

$$\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}.$$

The counting reason was: to choose $k$ people from $n$, look at one particular person; either they are on the team
(choose the other $k - 1$ from the remaining $n - 1$) or they are not (choose all $k$ from the remaining $n - 1$).
Below, each pattern gets a proof from this rule, and where possible a counting reason too.

### The diagonals: counting numbers, triangular numbers, and more

Read the triangle along its slanting lines (from the edge inwards):

- Diagonal 0 is all 1s: $\dbinom{n}{0} = 1$.
- Diagonal 1 is $1, 2, 3, 4, \ldots$: $\dbinom{n}{1} = n$.
- Diagonal 2 is $1, 3, 6, 10, 15, \ldots$: the **triangular numbers**, $\dbinom{n}{2} = \dfrac{n(n-1)}{2}$, which also
  count the handshakes among $n$ people (level 1) because a handshake is a choice of 2 people.
- Diagonal 3 is $1, 4, 10, 20, 35, \ldots$: the **tetrahedral numbers**, the numbers of oranges in a triangular
  pyramid stack: 1 on top, then 3 below it, then 6, and so on.

### The hockey-stick identity

Run down a diagonal from its first entry and add: $1 + 3 + 6 + 10 = 20$. The total sits just below the last entry,
one step **off** the diagonal. The shape, a long straight handle and a short blade, gives the identity its name.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 340 265" role="img" aria-label="Pascal's triangle with a hockey stick: 1, 3, 6 and 10 down a diagonal add to 20 just below">
  <text x="170" y="25" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="150" y="55" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="190" y="55" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="130" y="85" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="170" y="85" font-size="13" text-anchor="middle" fill="currentColor">2</text>
  <circle cx="210" cy="81" r="16.8" fill="#eea66f" fill-opacity="0.75"/>
  <text x="210" y="85" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="110" y="115" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="150" y="115" font-size="13" text-anchor="middle" fill="currentColor">3</text>
  <circle cx="190" cy="111" r="16.8" fill="#eea66f" fill-opacity="0.75"/>
  <text x="190" y="115" font-size="13" text-anchor="middle" fill="currentColor">3</text>
  <text x="230" y="115" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="90" y="145" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="130" y="145" font-size="13" text-anchor="middle" fill="currentColor">4</text>
  <circle cx="170" cy="141" r="16.8" fill="#eea66f" fill-opacity="0.75"/>
  <text x="170" y="145" font-size="13" text-anchor="middle" fill="currentColor">6</text>
  <text x="210" y="145" font-size="13" text-anchor="middle" fill="currentColor">4</text>
  <text x="250" y="145" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="70" y="175" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="110" y="175" font-size="13" text-anchor="middle" fill="currentColor">5</text>
  <circle cx="150" cy="171" r="16.8" fill="#eea66f" fill-opacity="0.75"/>
  <text x="150" y="175" font-size="13" text-anchor="middle" fill="currentColor">10</text>
  <text x="190" y="175" font-size="13" text-anchor="middle" fill="currentColor">10</text>
  <text x="230" y="175" font-size="13" text-anchor="middle" fill="currentColor">5</text>
  <text x="270" y="175" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="50" y="205" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="90" y="205" font-size="13" text-anchor="middle" fill="currentColor">6</text>
  <text x="130" y="205" font-size="13" text-anchor="middle" fill="currentColor">15</text>
  <circle cx="170" cy="201" r="16.8" fill="#9cc9ea" fill-opacity="0.75"/>
  <text x="170" y="205" font-size="13" text-anchor="middle" fill="currentColor">20</text>
  <text x="210" y="205" font-size="13" text-anchor="middle" fill="currentColor">15</text>
  <text x="250" y="205" font-size="13" text-anchor="middle" fill="currentColor">6</text>
  <text x="290" y="205" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="30" y="235" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="70" y="235" font-size="13" text-anchor="middle" fill="currentColor">7</text>
  <text x="110" y="235" font-size="13" text-anchor="middle" fill="currentColor">21</text>
  <text x="150" y="235" font-size="13" text-anchor="middle" fill="currentColor">35</text>
  <text x="190" y="235" font-size="13" text-anchor="middle" fill="currentColor">35</text>
  <text x="230" y="235" font-size="13" text-anchor="middle" fill="currentColor">21</text>
  <text x="270" y="235" font-size="13" text-anchor="middle" fill="currentColor">7</text>
  <text x="310" y="235" font-size="13" text-anchor="middle" fill="currentColor">1</text>
  <text x="170" y="255" font-size="13" text-anchor="middle" fill="currentColor">1 + 3 + 6 + 10 = 20</text>
</svg>
</div>

> **Hockey-stick identity.** For whole numbers $0 \le r \le n$,
>
> $$\binom{r}{r} + \binom{r+1}{r} + \binom{r+2}{r} + \cdots + \binom{n}{r} = \binom{n+1}{r+1}.$$

**Proof from Pascal's rule.** Start from the answer and unpick it. By Pascal's rule,
$\dbinom{n+1}{r+1} = \dbinom{n}{r} + \dbinom{n}{r+1}$. Split the last part again:
$\dbinom{n}{r+1} = \dbinom{n-1}{r} + \dbinom{n-1}{r+1}$. Keep going. Each split peels off one more entry of
diagonal $r$, moving up, until what is left is $\dbinom{r+1}{r+1} = 1 = \dbinom{r}{r}$. Adding all the pieces gives the
identity. In the picture: $20 = 10 + 10$, then $10 = 6 + 4$, then $4 = 3 + 1$.

**Counting proof.** Count the ways to choose $r + 1$ numbers from $\{1, 2, \ldots, n + 1\}$: the right side. Now sort
the choices by their **largest** number. If the largest is $m + 1$, the other $r$ numbers must come from
$\{1, \ldots, m\}$, in $\dbinom{m}{r}$ ways. The largest can be anything from $r + 1$ up to $n + 1$, so $m$ runs from
$r$ to $n$, and the piles have sizes $\dbinom{r}{r}, \dbinom{r+1}{r}, \ldots, \dbinom{n}{r}$. Every choice is in exactly
one pile, so the piles add to the total. ∎

With $r = 1$ this is the old Gauss sum: $1 + 2 + \cdots + n = \dbinom{n+1}{2}$. With $r = 2$ it says that adding up
triangular numbers gives tetrahedral numbers, which is how an orange pyramid is built, one triangular layer at a time.

### Fibonacci on the shallow diagonals

Push the triangle against the left wall and add along lines that go up one row for every step right (the "shallow"
diagonals). The sums are $1, 1, 2, 3, 5, 8, 13, 21, \ldots$, the **Fibonacci numbers**, where each number is the sum
of the two before it.

<div class="pattern-row" markdown="0">
<svg viewBox="0 0 500 225" role="img" aria-label="Pascal's triangle pushed to the left; the entries on each shallow diagonal share a colour and add to Fibonacci numbers 1, 1, 2, 3, 5, 8, 13, 21">
  <circle cx="40" cy="21" r="13" fill="#eea66f" fill-opacity="0.6"/>
  <text x="40" y="25" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="40" cy="47" r="13" fill="#9cc9ea" fill-opacity="0.6"/>
  <text x="40" y="51" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="78" cy="47" r="13" fill="#7ccf9a" fill-opacity="0.6"/>
  <text x="78" y="51" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="40" cy="73" r="13" fill="#7ccf9a" fill-opacity="0.6"/>
  <text x="40" y="77" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="78" cy="73" r="13" fill="#eea66f" fill-opacity="0.6"/>
  <text x="78" y="77" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <circle cx="116" cy="73" r="13" fill="#9cc9ea" fill-opacity="0.6"/>
  <text x="116" y="77" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="40" cy="99" r="13" fill="#eea66f" fill-opacity="0.6"/>
  <text x="40" y="103" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="78" cy="99" r="13" fill="#9cc9ea" fill-opacity="0.6"/>
  <text x="78" y="103" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <circle cx="116" cy="99" r="13" fill="#7ccf9a" fill-opacity="0.6"/>
  <text x="116" y="103" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <circle cx="154" cy="99" r="13" fill="#eea66f" fill-opacity="0.6"/>
  <text x="154" y="103" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="40" cy="125" r="13" fill="#9cc9ea" fill-opacity="0.6"/>
  <text x="40" y="129" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="78" cy="125" r="13" fill="#7ccf9a" fill-opacity="0.6"/>
  <text x="78" y="129" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <circle cx="116" cy="125" r="13" fill="#eea66f" fill-opacity="0.6"/>
  <text x="116" y="129" font-size="12" text-anchor="middle" fill="currentColor">6</text>
  <circle cx="154" cy="125" r="13" fill="#9cc9ea" fill-opacity="0.6"/>
  <text x="154" y="129" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <circle cx="192" cy="125" r="13" fill="#7ccf9a" fill-opacity="0.6"/>
  <text x="192" y="129" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="40" cy="151" r="13" fill="#7ccf9a" fill-opacity="0.6"/>
  <text x="40" y="155" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="78" cy="151" r="13" fill="#eea66f" fill-opacity="0.6"/>
  <text x="78" y="155" font-size="12" text-anchor="middle" fill="currentColor">5</text>
  <circle cx="116" cy="151" r="13" fill="#9cc9ea" fill-opacity="0.6"/>
  <text x="116" y="155" font-size="12" text-anchor="middle" fill="currentColor">10</text>
  <circle cx="154" cy="151" r="13" fill="#7ccf9a" fill-opacity="0.6"/>
  <text x="154" y="155" font-size="12" text-anchor="middle" fill="currentColor">10</text>
  <circle cx="192" cy="151" r="13" fill="#eea66f" fill-opacity="0.6"/>
  <text x="192" y="155" font-size="12" text-anchor="middle" fill="currentColor">5</text>
  <circle cx="230" cy="151" r="13" fill="#9cc9ea" fill-opacity="0.6"/>
  <text x="230" y="155" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="40" cy="177" r="13" fill="#eea66f" fill-opacity="0.6"/>
  <text x="40" y="181" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="78" cy="177" r="13" fill="#9cc9ea" fill-opacity="0.6"/>
  <text x="78" y="181" font-size="12" text-anchor="middle" fill="currentColor">6</text>
  <circle cx="116" cy="177" r="13" fill="#7ccf9a" fill-opacity="0.6"/>
  <text x="116" y="181" font-size="12" text-anchor="middle" fill="currentColor">15</text>
  <circle cx="154" cy="177" r="13" fill="#eea66f" fill-opacity="0.6"/>
  <text x="154" y="181" font-size="12" text-anchor="middle" fill="currentColor">20</text>
  <circle cx="192" cy="177" r="13" fill="#9cc9ea" fill-opacity="0.6"/>
  <text x="192" y="181" font-size="12" text-anchor="middle" fill="currentColor">15</text>
  <circle cx="230" cy="177" r="13" fill="#7ccf9a" fill-opacity="0.6"/>
  <text x="230" y="181" font-size="12" text-anchor="middle" fill="currentColor">6</text>
  <circle cx="268" cy="177" r="13" fill="#eea66f" fill-opacity="0.6"/>
  <text x="268" y="181" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="40" cy="203" r="13" fill="#9cc9ea" fill-opacity="0.6"/>
  <text x="40" y="207" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <circle cx="78" cy="203" r="13" fill="#7ccf9a" fill-opacity="0.6"/>
  <text x="78" y="207" font-size="12" text-anchor="middle" fill="currentColor">7</text>
  <circle cx="116" cy="203" r="13" fill="#eea66f" fill-opacity="0.6"/>
  <text x="116" y="207" font-size="12" text-anchor="middle" fill="currentColor">21</text>
  <circle cx="154" cy="203" r="13" fill="#9cc9ea" fill-opacity="0.6"/>
  <text x="154" y="207" font-size="12" text-anchor="middle" fill="currentColor">35</text>
  <circle cx="192" cy="203" r="13" fill="#7ccf9a" fill-opacity="0.6"/>
  <text x="192" y="207" font-size="12" text-anchor="middle" fill="currentColor">35</text>
  <circle cx="230" cy="203" r="13" fill="#eea66f" fill-opacity="0.6"/>
  <text x="230" y="207" font-size="12" text-anchor="middle" fill="currentColor">21</text>
  <circle cx="268" cy="203" r="13" fill="#9cc9ea" fill-opacity="0.6"/>
  <text x="268" y="207" font-size="12" text-anchor="middle" fill="currentColor">7</text>
  <circle cx="306" cy="203" r="13" fill="#7ccf9a" fill-opacity="0.6"/>
  <text x="306" y="207" font-size="12" text-anchor="middle" fill="currentColor">1</text>
  <text x="380" y="25" font-size="12" text-anchor="start" fill="currentColor">diagonal 0: 1</text>
  <text x="380" y="51" font-size="12" text-anchor="start" fill="currentColor">diagonal 1: 1</text>
  <text x="380" y="77" font-size="12" text-anchor="start" fill="currentColor">diagonal 2: 2</text>
  <text x="380" y="103" font-size="12" text-anchor="start" fill="currentColor">diagonal 3: 3</text>
  <text x="380" y="129" font-size="12" text-anchor="start" fill="currentColor">diagonal 4: 5</text>
  <text x="380" y="155" font-size="12" text-anchor="start" fill="currentColor">diagonal 5: 8</text>
  <text x="380" y="181" font-size="12" text-anchor="start" fill="currentColor">diagonal 6: 13</text>
  <text x="380" y="207" font-size="12" text-anchor="start" fill="currentColor">diagonal 7: 21</text>
</svg>
</div>

The shallow diagonal number $d$ holds the entries $\dbinom{d}{0}, \dbinom{d-1}{1}, \dbinom{d-2}{2}, \ldots$, so its sum
is

$$S_d = \sum_{k \ge 0}\binom{d-k}{k}.$$

**Counting reason.** In how many ways can you climb a staircase of $d$ steps, taking 1 or 2 steps at a time? A climb
with $k$ double-steps has $d - 2k$ single steps, so $d - k$ moves in all, and it is decided by **which $k$ of those
$d - k$ moves** are doubles: $\dbinom{d-k}{k}$ ways. So $S_d$ counts all climbs of $d$ steps. And the climbs obey the
Fibonacci rule: the first move is a single (then $d - 1$ steps remain) or a double (then $d - 2$ remain), so
$S_d = S_{d-1} + S_{d-2}$. With $S_0 = 1$ and $S_1 = 1$ the sequence is $1, 1, 2, 3, 5, 8, \ldots$. Level 8 builds whole
lessons on recursions like this one.

### Odd and even: the Sierpinski triangle explained

To know whether an entry is odd, you only need to know whether the two above it are odd: odd + even = odd, odd + odd
= even, even + even = even. So the odd-even pattern obeys its own small Pascal rule, and you can draw it without
working out any big numbers.

The key is a fact about rows whose number is a power of 2. Work with remainders on division by 2. Then
$(1 + x)^2 = 1 + 2x + x^2$ has an even middle coefficient, so it behaves like $1 + x^2$. Squaring again, $(1 + x)^4$
behaves like $(1 + x^2)^2$, so like $1 + x^4$, and so on: $(1 + x)^{2^m}$ behaves like $1 + x^{2^m}$. In words,
**row $2^m$ is odd at its two ends and even everywhere in between**. Row 4 is 1, 4, 6, 4, 1 and row 8 is
1, 8, 28, 56, 70, 56, 28, 8, 1. ✓

Now watch the pattern grow. Rows $0$ to $2^m - 1$ form some triangle $T$. Row $2^m$ is "odd, then a run of evens, then
odd". The rows below it are built only from that row by the odd-even rule, and each odd end starts its own fresh copy
of the top of the triangle, while the evens in between create nothing. So rows $2^m$ to $2^{m+1} - 1$ are **two
copies of $T$** side by side, with an all-even gap between them. Three copies of $T$ (one on top, two below) make the
next triangle, and that is exactly how the Sierpinski triangle is built.

A neat consequence: the number of odd entries in row $n$ is always a power of 2. Row 10 is
1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1, with 4 odd entries. (A theorem of Édouard Lucas from 1878 gives the
exact rule: write $n$ in base 2 and count its 1s; if there are $s$ of them, row $n$ has $2^s$ odd entries. Ten is
1010 in base 2, with two 1s, and $2^2 = 4$.)

### A row whose number is prime

Row 7 is 1, 7, 21, 35, 35, 21, 7, 1: every entry except the 1s is a multiple of 7. This happens in every prime row.
In $\dbinom{p}{k} = \dfrac{p!}{k!\,(p-k)!}$ with $0 < k < p$, the prime $p$ divides the top, but every number in
$k!$ and $(p - k)!$ is smaller than $p$, so none of them can cancel it. Row 11 (1, 11, 55, 165, 330, 462, ...) agrees.
Row 6 is not prime, and $\dbinom{6}{2} = 15$ is not a multiple of 6.

<figure class="play" data-play="pascal" data-mode="odd"><span class="ai-tag">AI-created</span><figcaption><b>Odd numbers in Pascal's triangle.</b> Add rows and a pattern of triangles inside triangles appears.</figcaption></figure>

## Worked examples

**1. A Gauss sum by hockey stick.** $1 + 2 + \cdots + 10$ is diagonal 1 from $\dbinom{1}{1}$ to $\dbinom{10}{1}$, so it
equals $\dbinom{11}{2} = 55$.

**2. Adding triangular numbers.** $1 + 3 + 6 + 10 + 15 + 21$ is diagonal 2 from $\dbinom{2}{2}$ to $\dbinom{7}{2}$, so
it equals $\dbinom{8}{3} = 56$. Check: $1 + 3 + 6 + 10 + 15 + 21 = 56$. ✓

**3. A shallow diagonal.** $\dbinom{7}{0} + \dbinom{6}{1} + \dbinom{5}{2} + \dbinom{4}{3} = 1 + 6 + 10 + 4 = 21$, the
Fibonacci number after 13. It counts the climbs of a 7-step staircase.

**4. Parity of a whole row.** Which entries of row 16 are odd? Sixteen is $2^4$, so only the two 1s at the ends. Row 15
is the last row of the 16-row triangle, so it is all odd: 16 odd entries, and indeed 15 is 1111 in base 2, with four
1s, and $2^4 = 16$.

**5. A product sum.** Find $1 \cdot 2 + 2 \cdot 3 + \cdots + 9 \cdot 10$. Each term $k(k + 1) = 2\dbinom{k+1}{2}$,
so the sum is $2\left[\dbinom{2}{2} + \dbinom{3}{2} + \cdots + \dbinom{10}{2}\right] = 2\dbinom{11}{3} = 2 \times 165 = 330$.

## Try it

1. Use the hockey stick to find $1 + 2 + 3 + \cdots + 20$.
2. Find $\dbinom{3}{3} + \dbinom{4}{3} + \dbinom{5}{3} + \dbinom{6}{3} + \dbinom{7}{3}$ in one step, then check by adding.
3. Find $\dbinom{9}{0} + \dbinom{8}{1} + \dbinom{7}{2} + \dbinom{6}{3} + \dbinom{5}{4}$. Which Fibonacci number is it?
4. How many entries of row 10 are odd? Check by writing out the row.
5. Which rows of Pascal's triangle have **every** entry odd? Explain using the Sierpinski picture.
6. In how many ways can you climb 6 steps, 1 or 2 at a time? Find it from a shallow diagonal.
7. Oranges are stacked in a triangular pyramid with 8 layers (1 on top, 3 in the next layer, 6, ...). How many
   oranges are there?
8. Without working out row 13, explain why $\dbinom{13}{5}$ is a multiple of 13.

??? note "Answers"
    1. $\binom{21}{2} = \frac{21 \times 20}{2} = 210$.
    2. $\binom{8}{4} = 70$. Check: $1 + 4 + 10 + 20 + 35 = 70$. ✓
    3. $1 + 8 + 21 + 20 + 5 = 55$, the tenth Fibonacci number (1, 1, 2, 3, 5, 8, 13, 21, 34, 55).
    4. Row 10: 1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1. The odd ones are 1, 45, 45, 1: **4**. Ten is 1010 in base 2,
       two 1s, $2^2 = 4$. ✓
    5. Rows $1, 3, 7, 15, 31, \ldots$, that is $n = 2^m - 1$ (and row 0). These are the bottom rows of the complete
       triangles in the Sierpinski picture, the last row before a row $2^m$ that is even inside. In base 2 they are
       all 1s.
    6. $\binom{6}{0} + \binom{5}{1} + \binom{4}{2} + \binom{3}{3} = 1 + 5 + 6 + 1 = 13$.
    7. The layers are the triangular numbers $\binom{2}{2}, \ldots, \binom{9}{2}$, so the total is
       $\binom{10}{3} = 120$. Check: $1 + 3 + 6 + 10 + 15 + 21 + 28 + 36 = 120$. ✓
    8. $\binom{13}{5} = \frac{13!}{5!\,8!}$. The prime 13 divides $13!$, but $5!$ and $8!$ are products of numbers less than
       13, and no product of smaller numbers has the prime 13 as a factor. So the 13 does not cancel. (In fact
       $\binom{13}{5} = 1287 = 13 \times 99$.)

## Common mistake

**Putting the hockey-stick total in the wrong place.** The sum of a diagonal run sits one row below the last entry and
one step **inwards**, on the next diagonal: $\dbinom{n+1}{r+1}$, not $\dbinom{n+1}{r}$. Check with a tiny case:
$1 + 2 + 3 = 6 = \dbinom{4}{2}$, and $\dbinom{4}{1}$ would be 4.

**Starting the run in the middle.** The identity needs the run to start at the very first entry of the diagonal,
$\dbinom{r}{r} = 1$. A run like $6 + 10 + 15$ is the difference of two hockey sticks: $\dbinom{7}{3} - \dbinom{4}{3} = 35 - 4 = 31$.

## Where it leads

- Back: [Identities from the theorem](03-identities-from-theorem.md) · Next: [Proof by counting](05-double-counting.md)
- [Level 7 page](index.md) · [Counting topic page](../index.md)
- Triangular, tetrahedral and Fibonacci numbers are at home in [Patterns](../../patterns/index.md).
- Why a prime cannot be built from smaller factors is the core of [Number theory](../../number-theory/index.md).
- Base 2, used for the odd entries, is in [other bases](../../numbers/level-5/07-other-bases.md) in Numbers.
- The Fibonacci rule as a way of counting returns in [Level 8: counting with recursion](../level-8/01-counting-recursion.md).
