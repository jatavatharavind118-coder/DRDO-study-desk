import {equationMarkup} from './math.js';

export function electricalFundamentals() {
  return `<div class="course-full-lesson">
    <p>Follow one loop: a battery gives electrical energy to charges, the moving charge forms a current, and the resistor converts electrical energy into heat. Each quantity below describes a different part of that process.</p>
    <figure class="topic-figure">
      <img src="./topic-images/network-1.png" width="980" height="330" alt="A battery on the left and a resistor on top form a closed loop. Conventional current flows from the upper positive battery terminal, right through the resistor, and back to the lower negative terminal.">
      <figcaption>Trace the current arrow around the loop. The left side of the resistor is at a higher potential than its right side, so current enters the resistor at its positive-voltage terminal.</figcaption>
    </figure>

    <section>
      <h3>1. Charge — how much</h3>
      <p>Electric charge is a property of matter. An electron carries negative charge and a proton carries positive charge. The unit is the <strong>coulomb (C)</strong>. In a metal wire, electrons are the mobile charge carriers. If 6 C of net charge passes a point, 6 C measures the amount that crossed.</p>
    </section>

    <section>
      <h3>2. Current — how fast charge passes</h3>
      <p>Imagine drawing a line across a wire. Current tells you how much net charge crosses that line each second. Its unit is the <strong>ampere (A)</strong>, where 1 A = 1 C/s.</p>
      ${equationMarkup('I_{avg}=frac{Δq}{Δt};i(t)=frac{dq}{dt}')}
      <p>Use the first formula for an average over a time interval and the second for the rate at an instant. If 6 C crosses in 3 s, the average current is 2 A. If the current stays at 2 A, it transfers 2 C each second.</p>
      <p>If current changes, the net charge transferred is the signed area under the current-versus-time curve.</p>
      <p>The arrow in a circuit marks <strong>conventional current</strong>, the direction positive charge would move. Electron drift in a metal wire is opposite to that direction. A negative current result means the current runs opposite to your chosen reference arrow.</p>
    </section>

    <section>
      <h3>3. Voltage — energy transferred per coulomb</h3>
      <p>Voltage is a difference between two points. If point A is 12 V above point B, each coulomb of positive charge moving from A to B loses 12 J of electric potential energy. Across a resistor, that energy becomes heat. The unit is the <strong>volt (V)</strong>, where 1 V = 1 J/C.</p>
      ${equationMarkup('V_{AB}=V_A-V_B')}
      <p>Always identify the two points and their order. Reversing them reverses the sign. A battery can still have a voltage across its terminals if the circuit is open. In the ideal circuit, breaking the loop gives zero steady current.</p>
    </section>

    <section>
      <h3>4. Ohm’s law — how voltage and current relate</h3>
      <p>Resistance measures how much an element opposes current. The unit is the <strong>ohm (Ω)</strong>, where 1 Ω = 1 V/A. For a linear resistor of fixed resistance, voltage across it and current through it are proportional.</p>
      ${equationMarkup('V=IR;I=frac{V}{R};R=frac{V}{I}')}
      <p>For a fixed 6 Ω resistor, raising the voltage from 6 V to 12 V raises current from 1 A to 2 A. If voltage stays fixed, raising resistance lowers current. Use this fixed-resistance model when it applies. A diode has a nonlinear voltage–current relationship.</p>
    </section>

    <section>
      <h3>5. Power — how fast energy is transferred</h3>
      <p>Power measures energy transferred each second. Its unit is the <strong>watt (W)</strong>, where 1 W = 1 J/s. To understand why voltage times current gives power, multiply joules per coulomb by coulombs per second. The coulombs cancel and leave joules per second.</p>
      ${equationMarkup('p(t)=v(t)i(t);P=VI=I^2R=frac{V^2}{R}')}
      <p>Use <em>p = vi</em> for any element with the measured voltage and current, and the two resistance forms for an ohmic resistor. For the <strong>passive sign convention</strong>, draw the reference current into the terminal marked +. Then positive power means the element absorbs energy, while negative power means it supplies energy. In the diagram, the resistor absorbs energy and the battery supplies it.</p>
    </section>

    <section>
      <h3>6. Energy — how much was transferred in total</h3>
      <p>Energy is the total transferred during a time interval. Its unit is the <strong>joule (J)</strong>. If a resistor absorbs 24 W for 5 s, it converts 24 J every second into heat, for a total of 120 J.</p>
      ${equationMarkup('E=PΔt;E=∫_{t_1}^{t_2}p(t)dt')}
      <p>Use this shortcut for constant power. For changing power, use the area under the power-versus-time curve over the given interval (the integral of power with respect to time). For example, 10 W for 2 s followed by 4 W for 3 s transfers 20 J + 12 J = 32 J. The kilowatt-hour is also an energy unit. One kWh equals 3.6 million joules.</p>
    </section>

    <section class="example-line course-worked-example">
      <h3>Worked example — a 12 V battery and a 6 Ω resistor</h3>
      <p>An ideal battery is connected directly across the resistor for 5 s. Find the current, charge transferred, resistor power, and resistor energy.</p>
      <ol>
        <li><strong>Current.</strong> Divide the voltage across the resistor by its resistance. I = 12 V ÷ 6 Ω = <strong>2 A</strong>.</li>
        <li><strong>Charge.</strong> A constant 2 C passes per second. Δq = 2 A × 5 s = <strong>10 C</strong>.</li>
        <li><strong>Power.</strong> The resistor absorbs 12 J per coulomb at 2 C per second. P = 12 V × 2 A = <strong>24 W</strong>.</li>
        <li><strong>Energy.</strong> Multiply power by the time. E = 24 W × 5 s = <strong>120 J</strong>. You can check this with 12 J/C × 10 C.</li>
      </ol>
      <p><strong>Check the sign.</strong> The resistor absorbs +24 W. Current leaves the battery’s positive terminal, so the battery’s absorbed power is −24 W. All the power it supplies is absorbed by the resistor in this ideal loop.</p>
    </section>
  </div>`;
}
